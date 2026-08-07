import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import pdf from 'pdf-parse';
import mammoth from 'mammoth';
import { writeFile, mkdir, access, readFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

const shelterKeywords = [
  'skyddsrum', 'skyddsdörr', 'karm', 'lucka', 'luftsluss', 'ventil', 'övertrycksventil', 'stigschakt', 
  'pelare', 'betong', 'armering', 'stötbalk', 'gasfilter', 'belysning', 'splitterskydd', 'sandfilter',
  'skyddsrumssakkunnig', 'tätning', 'tryckvåg', 'splitter', 'luftflöde', 'stängningsbeslag'
];

// Helper to check Gemini API Key
const getApiKey = () => {
    return process.env.GEMINI_API_KEY || '';
};

// Helper to format date prefix in Swedish local time (YYMMDD-HHMM)
function getFormattedPrefix(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Stockholm',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const parts = formatter.formatToParts(now);
  let year = '';
  let month = '';
  let day = '';
  let hour = '';
  let minute = '';

  for (const part of parts) {
    if (part.type === 'year') year = part.value;
    else if (part.type === 'month') month = part.value;
    else if (part.type === 'day') day = part.value;
    else if (part.type === 'hour') hour = part.value;
    else if (part.type === 'minute') minute = part.value;
  }

  return `${year}${month}${day}-${hour}${minute}`;
}

// Helper to format date prefix in Swedish local time for display (YYMMDD - TT:MM)
function getDisplayDatePrefix(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Stockholm',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const parts = formatter.formatToParts(now);
  let year = '';
  let month = '';
  let day = '';
  let hour = '';
  let minute = '';

  for (const part of parts) {
    if (part.type === 'year') year = part.value;
    else if (part.type === 'month') month = part.value;
    else if (part.type === 'day') day = part.value;
    else if (part.type === 'hour') hour = part.value;
    else if (part.type === 'minute') minute = part.value;
  }

  return `${year}${month}${day} - ${hour}:${minute}`;
}

// Helper to make Gemini HTTP API request
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

FÖLJ DESSA REGLER FÖR ANALYSEN NOGGRANT:
* Gör alltid exakta matematiska jämförelser av intervall och mått. Exempel: Om en regel anger ett godkänt intervall på 150-300 mm för bultavstånd, och ritningen visar ett mått på 275 mm, ligger detta mått inom intervallet. Det är därför fullt GODKÄNT och får absolut INTE flaggas som avvikelse eller varning! Flagga endast värden som ligger utanför angivna gränser.
* Tolka aldrig mot Luftstötvåg om inte denna specifika regel är explicit angiven eller vald.
* Leta efter faktiska avvikelser baserat på ritningens geometri och text.

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
    // 1. Fetch all documents from Database
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

    // 2. Format list of documents for Gemini
    const docsListString = allDocs.map(d => `- ID: "${d.id}", Titel: "${d.title}", Kategori: "${d.category}", Beskrivning: "${d.summary || ''}"`).join('\n');

    // 3. Ask Gemini to select matching documents
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

export async function POST(req: NextRequest) {
    const apiKey = getApiKey();
    if (!apiKey) {
        return NextResponse.json(
            { error: "Gemini API-nyckel saknas. Konfigurera GEMINI_API_KEY i din .env-fil för att använda regelkontrollen." },
            { status: 400 }
        );
    }

    try {
        const formData = await req.formData();
        const files = formData.getAll('file') as File[];
        const selectedSolution = formData.get('selectedSolution') as string || 'auto';
        const customerNumber = formData.get('customerNumber') as string || '';
        const salesOrderNumber = formData.get('salesOrderNumber') as string || '';
        const customerName = formData.get('customerName') as string || '';
        
        if (!files || files.length === 0) {
            return NextResponse.json({ error: "Ingen fil laddades upp." }, { status: 400 });
        }

        const filePaths: string[] = [];
        const originalNames: string[] = [];
        const fileTypes: string[] = [];
        const pendingJobs: any[] = [];
        const extractedTexts: any[] = [];
        const imageFiles: any[] = [];
        const allFilesMetadata: any[] = [];

        const datePrefix = getFormattedPrefix();
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
        await mkdir(uploadsDir, { recursive: true });

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const buffer = Buffer.from(await file.arrayBuffer());
            const mimeType = file.type || '';
            const originalFileName = path.basename((formData.get(`originalFileName_${i}`) as string) || file.name);
            const fileNameLower = originalFileName.toLowerCase();
            const fileExt = path.extname(originalFileName);

            let baseName = path.basename(originalFileName, fileExt);
            let localFileName = `${datePrefix}_${baseName}${fileExt}`;
            let localFilePath = path.join(uploadsDir, localFileName);

            let counter = 1;
            while (true) {
                try {
                    await access(localFilePath);
                    localFileName = `${datePrefix}_${baseName}_${counter}${fileExt}`;
                    localFilePath = path.join(uploadsDir, localFileName);
                    counter++;
                } catch {
                    break;
                }
            }

            await writeFile(localFilePath, buffer);
            const publicPath = `uploads/${localFileName}`;
            const fileTypeStr = fileExt.toUpperCase().replace('.', '') || 'UNKNOWN';

            filePaths.push(publicPath);
            originalNames.push(originalFileName);
            fileTypes.push(fileTypeStr);
            allFilesMetadata.push({
                filePath: publicPath,
                originalName: originalFileName,
                fileType: fileTypeStr
            });

            if (mimeType === 'application/pdf' || fileNameLower.endsWith('.pdf')) {
                const reductoApiKey = process.env.REDUCTO_API_KEY || '';
                let parsedWithReducto = false;

                if (reductoApiKey) {
                    try {
                        console.log(`Trying to start Reducto API async job for file ${i}: ${originalFileName}...`);
                        const uploadData = new FormData();
                        const blob = new Blob([buffer], { type: mimeType });
                        uploadData.append('file', blob, localFileName);

                        const uploadRes = await fetch("https://platform.reducto.ai/upload", {
                            method: "POST",
                            headers: {
                                "Authorization": `Bearer ${reductoApiKey}`
                            },
                            body: uploadData
                        });

                        if (!uploadRes.ok) {
                            const errText = await uploadRes.text();
                            throw new Error(`Reducto upload failed: ${uploadRes.status} ${errText}`);
                        }

                        const { file_id } = await uploadRes.json();
                        if (!file_id) {
                            throw new Error("Reducto upload response did not return file_id");
                        }

                        const parseRes = await fetch("https://platform.reducto.ai/parse_async", {
                            method: "POST",
                            headers: {
                                "Authorization": `Bearer ${reductoApiKey}`,
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                input: `reducto://${file_id}`,
                                enhance: {
                                    summarize_figures: false
                                },
                                retrieval: {
                                    chunking: {
                                        chunk_mode: "disabled"
                                    }
                                }
                            })
                        });

                        if (!parseRes.ok) {
                            const errText = await parseRes.text();
                            throw new Error(`Reducto parse_async failed: ${parseRes.status} ${errText}`);
                        }

                        const { job_id } = await parseRes.json();
                        if (!job_id) {
                            throw new Error("Reducto parse_async did not return job_id");
                        }

                        pendingJobs.push({
                            jobId: job_id,
                            fileIndex: i,
                            filePath: publicPath,
                            originalName: originalFileName,
                            mimeType: mimeType
                        });
                        parsedWithReducto = true;
                    } catch (reductoErr) {
                        console.error(`Reducto async init failed for ${originalFileName}, falling back to pdf-parse:`, reductoErr);
                    }
                }

                if (!parsedWithReducto) {
                    try {
                        console.log(`Parsing PDF using pdf-parse fallback for file ${i}: ${originalFileName}...`);
                        const pdfData = await pdf(buffer);
                        extractedTexts.push({
                            text: pdfData.text || '',
                            fileIndex: i,
                            originalName: originalFileName
                        });
                    } catch (err: any) {
                        console.error(`PDF extraction failed for ${originalFileName}:`, err);
                        return NextResponse.json({ error: `Kunde inte läsa PDF-filen ${originalFileName}` }, { status: 500 });
                    }
                }
            } else if (
                mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
                fileNameLower.endsWith('.docx')
            ) {
                try {
                    const result = await mammoth.extractRawText({ buffer });
                    extractedTexts.push({
                        text: result.value || '',
                        fileIndex: i,
                        originalName: originalFileName
                    });
                } catch (err: any) {
                    console.error(`DOCX extraction failed for ${originalFileName}:`, err);
                    return NextResponse.json({ error: `Kunde inte läsa Word-filen ${originalFileName}` }, { status: 500 });
                }
            } else if (
                mimeType.startsWith('image/') || 
                fileNameLower.endsWith('.png') || 
                fileNameLower.endsWith('.jpg') || 
                fileNameLower.endsWith('.jpeg') || 
                fileNameLower.endsWith('.gif') || 
                fileNameLower.endsWith('.webp')
            ) {
                const imageBase64 = buffer.toString('base64');
                imageFiles.push({
                    filePath: publicPath,
                    mimeType: mimeType,
                    imageBase64: imageBase64,
                    originalName: originalFileName
                });
            } else {
                return NextResponse.json(
                    { error: `Ogiltigt filformat: ${originalFileName}. Ladda upp en PDF, Word-fil (.docx) eller bild (PNG, JPG).` },
                    { status: 400 }
                );
            }
        }

        const fileId = crypto.randomUUID();
        const displayPrefix = getDisplayDatePrefix();
        const displayCustomName = files.length > 1
            ? `${displayPrefix} ${originalNames[0]} (+${files.length - 1} filer)`
            : `${displayPrefix} ${originalNames[0]}`;

        const serializedFilePath = JSON.stringify(filePaths);
        const serializedOriginalName = JSON.stringify(originalNames);
        const serializedFileType = JSON.stringify(fileTypes);

        if (pendingJobs.length > 0) {
            const uploadedDoc = await prisma.uploadedDocument.create({
                data: {
                    id: fileId,
                    customName: displayCustomName,
                    originalName: serializedOriginalName,
                    filePath: serializedFilePath,
                    fileType: serializedFileType,
                    rawText: '',
                    complianceStatus: 'processing',
                    complianceSummary: 'Väntar på tolkning av ritningsdokument...',
                    customerNumber: customerNumber || null,
                    salesOrderNumber: salesOrderNumber || null,
                    customerName: customerName || null,
                    reductoRawJson: JSON.stringify({
                        jobs: pendingJobs,
                        staticTexts: extractedTexts,
                        imageFiles: imageFiles,
                        allFiles: allFilesMetadata,
                        selectedSolution: selectedSolution
                    })
                }
            });

            runBackgroundPoll(fileId, apiKey);

            return NextResponse.json({
                status: 'pending',
                docId: uploadedDoc.id,
                fileName: displayCustomName,
                fileType: files.length > 1 ? 'MULTIPLE' : fileTypes[0]
            });
        }

        const textParts: string[] = [];
        for (let i = 0; i < allFilesMetadata.length; i++) {
            const fileMeta = allFilesMetadata[i];
            const matchingStatic = extractedTexts.find(s => s.fileIndex === i);
            if (matchingStatic) {
                textParts.push(`--- RITNING: ${fileMeta.originalName} ---\n${matchingStatic.text}`);
            }
            const matchingImage = imageFiles.find(img => img.filePath === fileMeta.filePath);
            if (matchingImage) {
                textParts.push(`--- BILD: ${fileMeta.originalName} ---\n[Ritningsbild]`);
            }
        }
        const combinedText = textParts.join('\n\n');

        const hasImages = imageFiles.length > 0;
        const firstImage = hasImages ? imageFiles[0] : null;
        const firstImageBuffer = firstImage ? await readFile(path.join(process.cwd(), 'public', firstImage.filePath)) : null;

        let docs: any[] = [];
        if (selectedSolution && selectedSolution !== 'auto') {
            docs = await getRulesForSolution(selectedSolution);
        } else {
            const keywords = await getSearchKeywords(
                combinedText,
                hasImages && extractedTexts.length === 0,
                firstImageBuffer,
                firstImage ? firstImage.mimeType : '',
                apiKey
            );
            docs = await selectRelevantRules(combinedText, keywords, apiKey);
        }

        let sourcesContext = '';
        if (docs.length > 0) {
            sourcesContext = docs.map((doc: any, idx: number) => 
                `KÄLLA ${idx + 1}: ${doc.title} (Fil: ${doc.filePath})\nKATEGORI: ${doc.category}\nSAMMANFATTNING: ${doc.summary || ''}\nINNEHÅLL:\n${doc.content.substring(0, 8000)}\n--------------------------------------------------`
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

        const checkRes = await callGemini(checkPayloadWithConfig, apiKey);
        const reportText = checkRes.contents?.[0]?.parts?.[0]?.text || checkRes.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        const report = JSON.parse(reportText);

        const uploadedDoc = await prisma.uploadedDocument.create({
            data: {
                id: fileId,
                customName: displayCustomName,
                originalName: serializedOriginalName,
                filePath: serializedFilePath,
                fileType: serializedFileType,
                rawText: combinedText,
                reductoMarkdown: combinedText,
                complianceStatus: report.status,
                complianceSummary: report.summary,
                complianceChecks: JSON.stringify(report.checks),
                bomJson: JSON.stringify(report.bom),
                customerNumber: customerNumber || null,
                salesOrderNumber: salesOrderNumber || null,
                customerName: customerName || null
            }
        });

        return NextResponse.json({
            status: 'completed',
            id: uploadedDoc.id,
            fileName: displayCustomName,
            fileType: files.length > 1 ? 'MULTIPLE' : fileTypes[0],
            customerNumber: uploadedDoc.customerNumber,
            salesOrderNumber: uploadedDoc.salesOrderNumber,
            customerName: uploadedDoc.customerName,
            report: {
                status: report.status,
                summary: report.summary,
                checks: report.checks,
                bom: report.bom
            }
        });

    } catch (err: any) {
        console.error("Compliance API error:", err);
        return NextResponse.json({ error: err.message || "Ett fel uppstod under behandlingen." }, { status: 500 });
    }
}

async function runBackgroundPoll(docId: string, apiKey: string) {
    const reductoApiKey = process.env.REDUCTO_API_KEY || '';
    if (!reductoApiKey) return;

    console.log(`Starting server-side background poll for Doc: ${docId}`);
    const maxPollAttempts = 300; // 10 minutes max at 2s interval
    let attempts = 0;

    let rawJson: any = {};
    let selectedSolution = 'auto';
    try {
        const doc = await prisma.uploadedDocument.findUnique({ where: { id: docId } });
        if (doc && doc.reductoRawJson) {
            rawJson = JSON.parse(doc.reductoRawJson);
            selectedSolution = rawJson.selectedSolution || 'auto';
        }
    } catch (e) {
        console.error("Failed to parse initial reductoRawJson:", e);
        return;
    }

    const pendingJobs = rawJson.jobs || [];
    const staticTexts = rawJson.staticTexts || [];
    const imageFiles = rawJson.imageFiles || [];
    const allFilesMetadata = rawJson.allFiles || [];

    const completedJobsData: Record<string, any> = {};

    while (attempts < maxPollAttempts) {
        attempts++;
        await new Promise(resolve => setTimeout(resolve, 2000));

        try {
            const checkDoc = await prisma.uploadedDocument.findUnique({
                where: { id: docId }
            });
            if (!checkDoc) {
                console.log(`Document ${docId} not found in database. Exiting background poll.`);
                break;
            }
        } catch (dbErr) {
            console.error("Database check error in background poll, continuing...", dbErr);
        }

        let allFinished = true;
        let jobFailed = false;

        for (const job of pendingJobs) {
            if (completedJobsData[job.jobId]) {
                continue;
            }

            try {
                const pollRes = await fetch(`https://platform.reducto.ai/job/${job.jobId}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${reductoApiKey}`
                    }
                });

                if (!pollRes.ok) {
                    console.error(`Background poll HTTP error for job ${job.jobId}: ${pollRes.status}`);
                    allFinished = false;
                    continue;
                }

                const pollData = await pollRes.json();
                const status = pollData.status;

                if (status === 'Pending') {
                    allFinished = false;
                } else if (status === 'Failed') {
                    console.error(`Background job ${job.jobId} failed on Reducto`);
                    jobFailed = true;
                    break;
                } else if (status === 'Completed') {
                    completedJobsData[job.jobId] = pollData;
                }
            } catch (err) {
                console.error(`Error polling job ${job.jobId}:`, err);
                allFinished = false;
            }
        }

        if (jobFailed) {
            await prisma.uploadedDocument.update({
                where: { id: docId },
                data: {
                    complianceStatus: 'failed',
                    complianceSummary: 'Tolkning av dokumentet misslyckades på Reducto.'
                }
            });
            break;
        }

        if (allFinished) {
            try {
                console.log(`All async jobs completed for doc ${docId}! Running compliance analysis...`);
                
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

                let docs: any[] = [];
                if (selectedSolution && selectedSolution !== 'auto') {
                    docs = await getRulesForSolution(selectedSolution);
                } else {
                    const keywords = await getSearchKeywords(
                        combinedText,
                        hasImages && (pendingJobs.length === 0 && staticTexts.length === 0),
                        firstImageBuffer,
                        firstImage ? firstImage.mimeType : '',
                        apiKey
                    );
                    docs = await selectRelevantRules(combinedText, keywords, apiKey);
                }

                let sourcesContext = '';
                if (docs.length > 0) {
                    sourcesContext = docs.map((doc: any, idx: number) => 
                        `KÄLLA ${idx + 1}: ${doc.title} (Fil: ${doc.filePath})\nKATEGORI: ${doc.category}\nSAMMANFATTNING: ${doc.summary || ''}\nINNEHÅLL:\n${doc.content.substring(0, 8000)}\n--------------------------------------------------`
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

                const checkRes = await callGemini(checkPayloadWithConfig, apiKey);
                const reportText = checkRes.contents?.[0]?.parts?.[0]?.text || checkRes.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
                const report = JSON.parse(reportText);

                await prisma.uploadedDocument.update({
                    where: { id: docId },
                    data: {
                        rawText: combinedText,
                        reductoMarkdown: combinedText,
                        reductoRawJson: JSON.stringify({ jobs: completedJobsData, staticTexts, imageFiles, allFiles: allFilesMetadata, selectedSolution }),
                        complianceStatus: report.status,
                        complianceSummary: report.summary,
                        complianceChecks: JSON.stringify(report.checks),
                        bomJson: JSON.stringify(report.bom)
                    }
                });
                console.log(`Background job finished compliance checks successfully.`);
            } catch (innerErr) {
                console.error("Error in background poll processing:", innerErr);
            }
            break;
        }
    }
}
