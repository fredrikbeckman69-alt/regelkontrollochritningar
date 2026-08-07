import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { readFile } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

const shelterKeywords = [
  'skyddsrum', 'skyddsdörr', 'karm', 'lucka', 'luftsluss', 'ventil', 'övertrycksventil', 'stigschakt', 
  'pelare', 'betong', 'armering', 'stötbalk', 'gasfilter', 'belysning', 'splitterskydd', 'sandfilter',
  'skyddsrumssakkunnig', 'tätning', 'tryckvåg', 'splitter', 'luftflöde', 'stängningsbeslag'
];

// Helper to get rule documents directly matching a selected solution code
async function getRulesForSolution(selectedSolution: string): Promise<any[]> {
    const normalizedCode = selectedSolution.replace('-', ' ');
    const docs = await prisma.document.findMany({
        where: {
            OR: [
                { title: { contains: selectedSolution } },
                { title: { contains: normalizedCode } },
                { filePath: { contains: selectedSolution } },
                { filePath: { contains: normalizedCode } }
            ]
        }
    });
    console.log(`Found direct rule documents for solution ${selectedSolution}:`, docs.map(d => d.title));
    return docs;
}

async function callGemini(payload: any, apiKey: string) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API error ${response.status}: ${errorText}`);
    }
    
    return await response.json();
}

// Helper to get search keywords dynamically using Gemini 2.5 Flash
async function getSearchKeywords(
    text: string, 
    isImage: boolean, 
    fileBuffer: Buffer | null, 
    mimeType: string, 
    apiKey: string
): Promise<string[]> {
    const parts: any[] = [];
    const isPdf = mimeType === 'application/pdf';

    const promptText = "Analysera detta ritningsunderlag och identifiera vad ritningen avser (t.ex. rörgenomföring, skyddsrumsdörr, ventil, etc.). Generera en lista på de 3-5 mest specifika sökorden på svenska för att söka efter relaterade regler/typlösningar i vår databas. Undvik generella ord som 'skyddsrum', 'ritning', 'detalj' eller 'luftstötvåg' (om inte ritningen faktiskt avser luftstötvågor). Fokusera på specifika komponentnamn (t.ex. 'genomföringsplåt', 'avstängningsventil', 'kloroprenpackning') och ritningsnummer/koder (t.ex. 'T17', 'T17-102', 'K17', 'K12'). Svara ENDAST med en kommaseparerad lista på svenska. Exempel: 'genomföringsplåt, rörgenomföring, T17-102'.";

    // Speed Optimization: Only send multimodal base64 buffer for true images.
    // For text-based documents (like PDFs or Word docs), extracting keywords from 
    // the extracted text is 10x faster and extremely accurate.
    if (isImage && fileBuffer) {
        const imageMime = mimeType.startsWith('image/') ? mimeType : 'image/jpeg';
        parts.push({
            text: promptText
        });
        parts.push({
            inlineData: {
                mimeType: imageMime,
                data: fileBuffer.toString('base64')
            }
        });
    } else {
        parts.push({
            text: `Analysera följande text som extraherats från ett underlag. Generera en lista på de 3-5 mest specifika sökorden på svenska för att söka efter relaterade regler/typlösningar i vår databas. Undvik generella ord som 'skyddsrum'. Fokusera på komponentnamn och ritningsnummer (t.ex. 'T17', 'T17-102', 'genomföringsplåt'). Svara ENDAST med en kommaseparerad lista på svenska.

TEXT:
${text.substring(0, 4000)}`
        });
    }

    try {
        const res = await callGemini({ contents: [{ parts }] }, apiKey);
        const resultText = res.contents?.[0]?.parts?.[0]?.text || res.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const keywords = resultText.split(',').map((k: string) => k.trim().toLowerCase()).filter((k: string) => k.length > 1);
        console.log("Gemini dynamic search keywords:", keywords);
        return keywords;
    } catch (err) {
        console.error("Failed to get dynamic keywords from Gemini:", err);
        const textLower = text.toLowerCase();
        const fallbackKeywords = ['genomföringsplåt', 'rörgenomföring', 'avstängningsventil', 'ventil', 'skyddsdörr', 'karm', 'lucka', 'övertrycksventil'];
        const matched = fallbackKeywords.filter(kw => textLower.includes(kw));
        return matched.length > 0 ? matched : ['skyddsrum', 'skyddsdörr', 'lucka'];
    }
}

// Helper to construct check payload for Gemini 2.5 Flash
async function generateCompliancePayload(
    sourcesContext: string,
    extractedText: string,
    files: Array<{ filePath: string; originalName: string; fileType: string }>,
    selectedSolution: string
) {
    const parts: any[] = [];

    const solutionContext = selectedSolution && selectedSolution !== 'auto'
        ? `\nOBS: Användaren har angett att detta underlag ska granskas strikt mot lösningen ${selectedSolution}. Utför granskningen noggrant mot just de bifogade reglerna för ${selectedSolution}.\n`
        : '';

    const basePrompt = `Du är en certifierad skyddsrumssakkunnig och CAD-ritare. Din uppgift är att granska de bifogade ritningarna/underlagen och:
1. Kontrollera om de följer gällande regler och typlösningar från MCF som listas i källorna nedan. Hitta eventuella avvikelser. Du MÅSTE titta på det visuella källmaterialet och ritningarna för att bilda dig en 100% uppfattning om vad ritningarna avser, även om det saknas förklarande text i ritningsunderlaget. Du kan ha laddat upp flera olika ritningar för samma objekt (t.ex. en plåt beskriven av tre olika ritningsvyer/filer) - granska dem som en enhet.${solutionContext}
2. Skapa en komplett materiallista / BOM (Bill of Materials) över ALLA komponenter, dimensioner, stålprofiler, ventiler, betongklasser eller dörrbeslag som behövs för att tillverka/skapa det som framgår av det uppladdade underlaget.

BIFOGADE REGLER & TYPLÖSNINGAR (Källor från databasen):
${sourcesContext}

Kontrollera noggrant om det finns avvikelser, t.ex. felaktiga dimensioner, saknade skyddsanordningar, eller specifikationer som bryter mot typritningarna.
Generera en strukturerad rapport på svenska i JSON-format.`;

    parts.push({
        text: `${basePrompt}\n\nEXTRAHERAD TEXT FRÅN UNDERLAGEN (Som komplement):\n${extractedText.substring(0, 15000)}`
    });

    for (let i = 0; i < files.length; i++) {
        const f = files[i];
        const absolutePath = path.join(process.cwd(), 'public', f.filePath);
        try {
            const buffer = await readFile(absolutePath);
            const mimeType = f.fileType === 'PDF' ? 'application/pdf' : 
                             f.fileType === 'DOCX' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' :
                             (f.filePath.endsWith('.png') ? 'image/png' : 'image/jpeg');

            const isPdf = mimeType === 'application/pdf';
            const isImage = mimeType.startsWith('image/');

            if (isPdf || isImage) {
                parts.push({
                    inlineData: {
                        mimeType: mimeType,
                        data: buffer.toString('base64')
                    }
                });
                console.log(`Appended multimodal file to Gemini payload: ${f.originalName} (${mimeType})`);
            }
        } catch (err) {
            console.error(`Failed to read file ${f.filePath} for multimodal payload:`, err);
        }
    }

    return { contents: [{ parts }] };
}

// Helper to select the most relevant rule documents using Gemini 2.5 Flash
async function selectRelevantRules(
    extractedText: string,
    drawingKeywords: string[],
    apiKey: string
): Promise<any[]> {
    const allDocs = await prisma.document.findMany({
        select: {
            id: true,
            title: true,
            category: true,
            summary: true
        }
    });

    if (allDocs.length === 0) {
        return [];
    }

    const docsListString = allDocs.map(d => `- ID: "${d.id}", Titel: "${d.title}", Kategori: "${d.category}", Beskrivning: "${d.summary || ''}"`).join('\n');

    const payload = {
        contents: [
            {
                parts: [
                    {
                        text: `Du är en certifierad skyddsrumssakkunnig. Din uppgift är att välja ut de referensdokument (regler och typlösningar) som är DIREKT relevanta för att granska följande ritningsunderlag.

TILLGÄNGLIGA REFERENSDOKUMENT I VÅR DATABAS:
${docsListString}

EXTRAHERAD RITNINGSTEXT / SÖKORD:
Sökord: ${drawingKeywords.join(', ')}
Beskrivning:
${extractedText.substring(0, 3000)}

Regler för urval (FÖLJ DESSA STRIKT):
1. Välj ENDAST dokument som är direkt relaterade till de komponenter, typlösningar eller installationer som visas på ritningen.
2. Välj MAXIMALT 5 dokument.
3. Chansa ALDRIG! Om ritningen handlar om t.ex. en rörgenomföring, genomföringsplåt eller avstängningsventil, välj absolut INTE dokument som handlar om allmänna beräkningar, 'Luftstötvåg', 'Splitterverkan', 'Collision Impact', 'Concrete Slabs' eller andra dörrar/skyltar, om de inte är en del av detaljlösningen.
4. Om INGET dokument i listan är en direkt matchning, returnera en tom array []. Låtsas inte som att du vet och chansa inte med felaktiga regler!

Svara med ett giltigt JSON-objekt med följande struktur:
{
  "relevantDocIds": ["id1", "id2", ...]
}
Svara enbart med JSON-koden.`
                    }
                ]
            }
        ],
        generationConfig: {
            responseMimeType: "application/json"
        }
    };

    try {
        const res = await callGemini(payload, apiKey);
        const resText = res.contents?.[0]?.parts?.[0]?.text || res.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        const parsed = JSON.parse(resText);
        const docIds = parsed.relevantDocIds || [];
        
        if (docIds.length > 0) {
            const matchedDocs = await prisma.document.findMany({
                where: {
                    id: { in: docIds }
                }
            });
            console.log(`Gemini selected ${matchedDocs.length} relevant documents:`, matchedDocs.map(d => d.title));
            return matchedDocs;
        }
    } catch (err) {
        console.error("Error selecting relevant rules via Gemini:", err);
    }
    
    return [];
}

function jsonNoCache(data: any, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    }
  });
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const docId = searchParams.get('docId');

    if (!docId) {
        return jsonNoCache({ error: "docId is required" }, 400);
    }

    try {
        let doc = await prisma.uploadedDocument.findUnique({
            where: { id: docId }
        });

        if (!doc) {
            return jsonNoCache({ error: "Dokumentet hittades inte i databasen." }, 404);
        }

        if (doc.complianceStatus === 'processing') {
            const reductoApiKey = process.env.REDUCTO_API_KEY || '';
            const geminiApiKey = process.env.GEMINI_API_KEY || '';

            let pendingJobs = [];
            let staticTexts = [];
            let imageFiles = [];
            let allFilesMetadata = [];
            let rawJson: any = {};

            try {
                rawJson = doc.reductoRawJson ? JSON.parse(doc.reductoRawJson) : {};
                if (rawJson.jobs) {
                    pendingJobs = rawJson.jobs;
                    staticTexts = rawJson.staticTexts || [];
                    imageFiles = rawJson.imageFiles || [];
                    allFilesMetadata = rawJson.allFiles || [];
                } else if (rawJson.job_id) {
                    const fileExt = path.extname(doc.filePath);
                    const fileTypeStr = fileExt.toUpperCase().replace('.', '') || 'UNKNOWN';
                    pendingJobs = [{
                        jobId: rawJson.job_id,
                        fileIndex: 0,
                        filePath: doc.filePath,
                        originalName: doc.customName,
                        mimeType: fileExt === '.pdf' ? 'application/pdf' : 'application/octet-stream'
                    }];
                    allFilesMetadata = [{
                        filePath: doc.filePath,
                        originalName: doc.customName,
                        fileType: fileTypeStr
                    }];
                }
            } catch (e) {}

            if (reductoApiKey && pendingJobs.length > 0) {
                try {
                    console.log(`Poll route checking Reducto jobs for stuck document ${docId}...`);
                    
                    const completedJobsData: Record<string, any> = {};
                    let allFinished = true;
                    let jobFailed = false;

                    for (const job of pendingJobs) {
                        const pollRes = await fetch(`https://platform.reducto.ai/job/${job.jobId}`, {
                            headers: {
                                "Authorization": `Bearer ${reductoApiKey}`
                            }
                        });

                        if (pollRes.ok) {
                            const pollData = await pollRes.json();
                            const status = pollData.status;

                            if (status === 'Failed') {
                                jobFailed = true;
                                break;
                            } else if (status === 'Completed') {
                                completedJobsData[job.jobId] = pollData;
                            } else {
                                allFinished = false;
                            }
                        } else {
                            allFinished = false;
                        }
                    }

                    if (jobFailed) {
                        doc = await prisma.uploadedDocument.update({
                            where: { id: docId },
                            data: {
                                complianceStatus: 'failed',
                                complianceSummary: 'Tolkning av dokumentet misslyckades på Reducto.'
                            }
                        });
                    } else if (allFinished) {
                        console.log(`Poll route detected Reducto jobs completed! Running compliance analysis...`);
                        
                        await prisma.uploadedDocument.update({
                            where: { id: docId },
                            data: { complianceStatus: 'analyzing' }
                        });

                        const textParts: string[] = [];
                        for (let i = 0; i < allFilesMetadata.length; i++) {
                            const fileMeta = allFilesMetadata[i];
                            
                            const matchingJob = pendingJobs.find((j: any) => j.fileIndex === i);
                            if (matchingJob) {
                                const jobResult = completedJobsData[matchingJob.jobId];
                                const chunks = jobResult?.result?.result?.chunks || jobResult?.result?.chunks || [];
                                const extracted = chunks.map((c: any) => c.content).join("\n\n");
                                textParts.push(`--- RITNING: ${fileMeta.originalName} ---\n${extracted}`);
                            }

                            const matchingStatic = staticTexts.find((s: any) => s.fileIndex === i);
                            if (matchingStatic) {
                                textParts.push(`--- BILAGA: ${fileMeta.originalName} ---\n${matchingStatic.text}`);
                            }

                            const matchingImage = imageFiles.find((img: any) => img.filePath === fileMeta.filePath);
                            if (matchingImage) {
                                textParts.push(`--- BILD: ${fileMeta.originalName} ---\n[Ritningsbild]`);
                            }
                        }

                        const combinedText = textParts.join('\n\n');

                        const hasImages = imageFiles.length > 0;
                        const firstImage = hasImages ? imageFiles[0] : null;
                        const firstImageBuffer = firstImage ? await readFile(path.join(process.cwd(), 'public', firstImage.filePath)) : null;

                        const selectedSolution = rawJson.selectedSolution || 'auto';

                        let docs: any[] = [];
                        if (selectedSolution && selectedSolution !== 'auto') {
                            docs = await getRulesForSolution(selectedSolution);
                        } else {
                            const keywords = await getSearchKeywords(
                                combinedText,
                                hasImages && (pendingJobs.length === 0 && staticTexts.length === 0),
                                firstImageBuffer,
                                firstImage ? firstImage.mimeType : '',
                                geminiApiKey
                            );

                            docs = await selectRelevantRules(combinedText, keywords, geminiApiKey);
                        }

                        let sourcesContext = '';
                        if (docs.length > 0) {
                            sourcesContext = docs.map((d: any, idx: number) => 
                                `KÄLLA ${idx + 1}: ${d.title} (Fil: ${d.filePath})\nKATEGORI: ${d.category}\nSAMMANFATTNING: ${d.summary || ''}\nINNEHÅLL:\n${d.content.substring(0, 8000)}\n--------------------------------------------------`
                            ).join('\n\n');
                        } else {
                            sourcesContext = "OBS: Inga specifika regelverk eller typlösningar för skyddsrum har hittats i databasen för detta underlag! Du MÅSTE därför informera användaren i sammanfattningen och kontrollpunkterna om att inga specifika regler eller typlösningar hittades i databasen för denna ritningstyp. Chansa inte och låtsas inte att du granskar mot felaktiga regler (som t.ex. Luftstötvåg). Säg som det är.";
                        }

                        const responseSchema = {
                            type: "object",
                            properties: {
                                status: { type: "string", enum: ["compliant", "warnings", "non-compliant"] },
                                summary: { type: "string" },
                                checks: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            title: { type: "string" },
                                            status: { type: "string", enum: ["pass", "fail", "warning"] },
                                            description: { type: "string" },
                                            reference: { type: "string" }
                                        },
                                        required: ["title", "status", "description"]
                                    }
                                },
                                bom: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            item: { type: "string" },
                                            quantity: { type: "string" },
                                            specification: { type: "string" },
                                            category: { type: "string" }
                                        },
                                        required: ["item", "quantity", "specification", "category"]
                                    }
                                }
                            },
                            required: ["status", "summary", "checks", "bom"]
                        };

                        const checkPayload = await generateCompliancePayload(
                            sourcesContext,
                            combinedText,
                            allFilesMetadata,
                            selectedSolution
                        );

                        const checkPayloadWithConfig = {
                            ...checkPayload,
                            generationConfig: {
                                responseMimeType: "application/json",
                                responseSchema: responseSchema
                            }
                        };

                        const checkRes = await callGemini(checkPayloadWithConfig, geminiApiKey);
                        const reportText = checkRes.contents?.[0]?.parts?.[0]?.text || checkRes.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
                        const report = JSON.parse(reportText);

                        doc = await prisma.uploadedDocument.update({
                            where: { id: docId },
                            data: {
                                rawText: combinedText,
                                reductoMarkdown: combinedText,
                                reductoRawJson: JSON.stringify({ 
                                    jobs: completedJobsData, 
                                    staticTexts, 
                                    imageFiles, 
                                    allFiles: allFilesMetadata,
                                    selectedSolution: selectedSolution
                                }),
                                complianceStatus: report.status,
                                complianceSummary: report.summary,
                                complianceChecks: JSON.stringify(report.checks),
                                bomJson: JSON.stringify(report.bom)
                            }
                        });
                        console.log(`Poll route completed recovery and saved to DB for document ${docId}.`);
                    }
                } catch (pollErr) {
                    console.error(`Error checking Reducto job in poll route:`, pollErr);
                }
            }
        }

        if (doc.complianceStatus === 'processing' || doc.complianceStatus === 'analyzing') {
            return jsonNoCache({ status: 'pending' });
        }

        if (doc.complianceStatus === 'failed') {
            return jsonNoCache({ status: 'failed', error: doc.complianceSummary || 'Tolkning misslyckades.' });
        }

        if (doc.complianceStatus === 'compliant' || doc.complianceStatus === 'warnings' || doc.complianceStatus === 'non-compliant') {
            let checks = [];
            let bom = [];
            try {
                checks = doc.complianceChecks ? JSON.parse(doc.complianceChecks) : [];
                bom = doc.bomJson ? JSON.parse(doc.bomJson) : [];
            } catch (e) {
                console.error("Failed to parse JSON strings from DB:", e);
            }

            const rawJson = doc.reductoRawJson ? JSON.parse(doc.reductoRawJson) : {};
            const selectedSolution = rawJson.selectedSolution || 'auto';

            let matchedDocs: any[] = [];
            if (selectedSolution && selectedSolution !== 'auto') {
                matchedDocs = await getRulesForSolution(selectedSolution);
            } else {
                const textLower = doc.rawText ? doc.rawText.toLowerCase() : '';
                let keywords = shelterKeywords.filter(kw => textLower.includes(kw));
                if (keywords.length === 0) {
                    keywords = ['skyddsrum', 'skyddsdörr', 'lucka'];
                }

                matchedDocs = await prisma.document.findMany({
                    where: {
                        OR: keywords.map(kw => ({
                            OR: [
                                { title: { contains: kw } },
                                { summary: { contains: kw } },
                                { content: { contains: kw } }
                            ]
                        }))
                    },
                    take: 5
                });
            }

            let parsedFileType = doc.fileType;
            try {
                const arr = JSON.parse(doc.fileType);
                if (Array.isArray(arr)) {
                    parsedFileType = arr.length > 1 ? 'MULTIPLE' : arr[0];
                }
            } catch (e) {}

            return jsonNoCache({
                status: 'completed',
                id: doc.id,
                fileName: doc.customName,
                fileType: parsedFileType,
                matchedDocumentsCount: matchedDocs.length,
                matchedDocuments: matchedDocs.map((d: any) => ({ id: d.id, title: d.title, filePath: d.filePath })),
                report: {
                    status: doc.complianceStatus,
                    summary: doc.complianceSummary,
                    checks,
                    bom
                },
                parserMetadata: {
                    parserUsed: doc.reductoMarkdown ? 'reducto' : 'pdf-parse'
                }
            });
        }

        return jsonNoCache({ status: 'pending' });
    } catch (err: any) {
        console.error("Error in status polling route:", err);
        return jsonNoCache({ status: 'failed', error: err.message }, 500);
    }
}
