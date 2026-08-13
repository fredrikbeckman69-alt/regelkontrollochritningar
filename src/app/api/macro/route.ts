import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

const getApiKey = () => {
    return process.env.GEMINI_API_KEY || '';
};

async function callGemini(payload: any, apiKey: string) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    
    const text = await response.text();
    console.log("Raw Gemini API response length:", text.length);

    if (!response.ok) {
        throw new Error(`Gemini API error ${response.status}: ${text}`);
    }
    
    return JSON.parse(text);
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        
        if (id) {
            const macro = await prisma.generatedMacro.findUnique({
                where: { id }
            });
            if (!macro) {
                return NextResponse.json({ error: "Hittade inte makrot." }, { status: 404 });
            }
            return NextResponse.json(macro);
        }
        
        const macros = await prisma.generatedMacro.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(macros);
    } catch (err: any) {
        console.error("GET macro error:", err);
        return NextResponse.json({ error: `Kunde inte hämta makro: ${err.message}` }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ error: "ID krävs." }, { status: 400 });
        }
        
        const macro = await prisma.generatedMacro.findUnique({
            where: { id }
        });
        
        if (!macro) {
            return NextResponse.json({ error: "Hittade inte makrot." }, { status: 404 });
        }
        
        if (macro.filePath) {
            const fullPath = path.join(process.cwd(), 'public', macro.filePath);
            try {
                await unlink(fullPath);
            } catch (fileErr) {
                console.warn(`Could not delete file ${fullPath}:`, fileErr);
            }
        }
        
        await prisma.generatedMacro.delete({
            where: { id }
        });
        
        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("DELETE macro error:", err);
        return NextResponse.json({ error: `Kunde inte ta bort makrot: ${err.message}` }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const apiKey = getApiKey();
    if (!apiKey) {
        return NextResponse.json(
            { error: "Gemini API-nyckel saknas. Konfigurera GEMINI_API_KEY i din .env-fil för att generera makron." },
            { status: 400 }
        );
    }

    try {
        const body = await req.json();
        const { prompt, documentId, uploadedDocId, sourceType } = body;

        if (!prompt && !documentId && !uploadedDocId) {
            return NextResponse.json({ error: "Antingen prompt, documentId eller uploadedDocId krävs." }, { status: 400 });
        }

        // 1. Get doc title for listing
        let docTitle = 'Anpassad prompt';
        if (documentId) {
            const doc = await prisma.document.findUnique({ where: { id: documentId } });
            if (doc) docTitle = doc.title;
        } else if (uploadedDocId) {
            const doc = await prisma.uploadedDocument.findUnique({ where: { id: uploadedDocId } });
            if (doc) docTitle = doc.customName;
        }

        // 2. Create pending DB record immediately
        const macroRecord = await prisma.generatedMacro.create({
            data: {
                prompt: prompt || 'Generera makro från ritning',
                docTitle,
                status: 'pending'
            }
        });

        // 3. Trigger background generation in detached timeout to prevent request abort from cancelling the execution
        setTimeout(() => {
            generateMacroInBackground(macroRecord.id, prompt, documentId, uploadedDocId, sourceType, apiKey).catch(err => {
                console.error(`Fatal background macro generation crash for ID ${macroRecord.id}:`, err);
            });
        }, 0);

        // 4. Return the pending record
        return NextResponse.json(macroRecord);
    } catch (err: any) {
        console.error("Macro API POST error:", err);
        return NextResponse.json({ error: `Fel vid start av makrogenerering: ${err.message}` }, { status: 500 });
    }
}

// Background worker function
async function generateMacroInBackground(
    macroId: string,
    prompt: string,
    documentId: string | null,
    uploadedDocId: string | null,
    sourceType: string,
    apiKey: string
) {
    try {
        let documentContext = '';
        
        if (documentId) {
            const doc = await prisma.document.findUnique({
                where: { id: documentId }
            });
            if (doc) {
                documentContext = `DOKUMENTNAMN: ${doc.title}\nKATEGORI: ${doc.category}\nSAMMANFATTNING: ${doc.summary || ''}\nINNEHÅLL:\n${doc.content.substring(0, 10000)}`;
            }
        } else if (uploadedDocId) {
            const doc = await prisma.uploadedDocument.findUnique({
                where: { id: uploadedDocId }
            });
            if (doc) {
                const contentText = sourceType === 'reducto' && doc.reductoMarkdown 
                    ? doc.reductoMarkdown 
                    : doc.rawText;
                
                const refRegex = /(?:SR-D1-\d+|[KTA]\d{2}-\d{3})/gi;
                const foundRefs = Array.from(new Set(contentText.match(refRegex) || []));
                
                let resolvedRefsContext = '';
                if (foundRefs.length > 0) {
                    const matchedDocs = await prisma.document.findMany({
                        where: {
                            OR: foundRefs.map(ref => ({
                                OR: [
                                  { title: { contains: ref } },
                                  { filePath: { contains: ref } },
                                  { content: { contains: ref } }
                                ]
                            }))
                        },
                        take: 5
                    });
                    
                    if (matchedDocs.length > 0) {
                        resolvedRefsContext = `\n\nAUTOMATISKT HÄMTADE REFERENSRITNINGAR FRÅN SYSTEMETS DATABAS:\n` +
                            matchedDocs.map((md, idx) => 
                                `REFERENSRITNING ${idx + 1}: ${md.title}\nKÄLLINNEHÅLL:\n${md.content.substring(0, 4000)}\n-----------------------------`
                            ).join('\n');
                    }
                }

                documentContext = `DOKUMENTNAMN: ${doc.customName} (Originalnamn: ${doc.originalName})\nKÄLLTYP FÖR RITNINGSTOLKNING: ${sourceType === 'reducto' ? 'Reducto Layout' : 'Rå fil/text'}\nINNEHÅLL:\n${contentText.substring(0, 15000)}${resolvedRefsContext}`;
            }
        }

        const systemInstructions = `Du är en expert på SolidWorks API och VBA-makron för CAD-automatisering, specialiserad på tillverkning och ritningar för skyddsrumskomponenter (t.ex. gastäta dörrar, tryckvågsventiler, ramhylsor och rörprofiler för Skyddsprodukter).
Din uppgift är att skriva ett fullständigt och fungerande SolidWorks VBA-makro i klartext (.swb-format) baserat på användarens önskemål och bifogade materiallistor (BOM) eller geometriuppgifter.

FÖLJ DESSA REGLER STRÄNGT:
1. VBA-koden ska BÖRJA direkt med 'Option Explicit' eller eventuella kommentarer. Inkludera ALDRIG några 'Attribute'-rader (såsom 'Attribute VB_Name = "SolidWorksMacro"') högst upp i koden, då dessa orsakar kompileringsfel (Syntax error) i SolidWorks editor.
2. Makrot ska ha en 'Sub main()' som startpunkt.
3. Initiera SolidWorks applikationsobjektet ordentligt:
   Dim swApp As Object
   Set swApp = Application.SldWorks
4. Om makrot behöver arbeta med det aktiva dokumentet (part, sammanställning eller ritning), hämta det via:
   Dim swModel As Object
   Set swModel = swApp.ActiveDoc
5. Inkludera alltid felhantering (t.ex. 'If swModel Is Nothing Then') för att förhindra krascher om inget dokument är öppet när makrot kräver det.
6. Vid geometrisk ritning av skyddsrumskomponenter, använd korrekta SolidWorks API-metoder:
    - Skissa cirklar och linjer via 'swModel.SketchManager.CreateCircle', 'CreateLine2', etc. Skissa rektanglar via 'swModel.SketchManager.CreateCornerRectangle' (obs: metoden heter 'CreateCornerRectangle', inte 'CreateRectangle'!) som tar exakt 6 parametrar (X1, Y1, Z1, X2, Y2, Z2) för diagonalens hörn. Lägg ALDRIG till en sjunde parameter.
    - Skapa extruderade baser/snitt via 'swModel.FeatureManager.FeatureExtrusion3' eller 'FeatureCut4'.
   - Använd standardiserade materialkvaliteter i kommentarerna och koden om tillämpligt (t.ex. stål 'S355JR' or 'S235JR').
7. Lägg alltid till anpassade egenskaper (Custom Properties) för kvalitetssäkring i det genererat makrot om det skapar eller modifierar en part/sammanställning:
   - 'swModel.DeleteCustomInfo2 "", "RitadAv"' (rensa om den finns)
   - 'swModel.AddCustomInfo3 "", "RitadAv", 30, "Fredrik Beckman"' (lägger till ritare)
   - Lägg även till egenskaper för 'Klass' (t.ex. Klass A/B), 'Material' (t.ex. S355JR), 'Projekt' och 'Datum'.
8. Skriv ren, välkommenterad kod på svenska som förklarar vad varje del av koden gör.
9. Koden ska vara helt komplett och redo att köras. Undvik platshållare eller kommentarer som "skriv din kod här".
10. Preservera alla radbrytningar (\\n) i källkoden så att den är korrekt formaterad rad för rad. Skriv absolut INTE hela källkoden på en enda rad.
11. Returnera JSON med följande schema:
    - "code": Den kompletta VBA-koden (börja direkt med 'Option Explicit' eller kommentarer, inga 'Attribute'-rader).
    - "explanation": En kortfattad och pedagogisk förklaring på svenska om vad makrot gör, dess förutsättningar (t.ex. "Kräver en öppen ritning" eller "Skapar en ny part"), och instruktioner för körning.
    - "fileName": Ett rekommenderat filnamn i snake-case som slutar på .swb (t.ex. 'skapa_skyddsrumsdorr.swb').
12. Garantera syntaktisk korrekthet i VBA och SolidWorks API:
     - Skriv ALLTID varje enskild kodsats (inklusive långa funktionsanrop och deras parameterlistor) på en enda lång rad. Använd ALDRIG radfortsättningstecken (understreck '_') för att dela upp en rad i flera linjer, då detta ofta leder till kompileringsfel.
     - Använd 'swModel.FeatureManager.FeatureExtrusion3' för extruderingar. Denna metod tar exakt 24 parametrar och är standard. Använd ALDRIG den föråldrade 'FeatureExtrusion2' (som tar 47 parametrar och kräver 'Empty'-värden, vilket ger kompileringsfel i VBA).
     - Använd ALDRIG enkla citattecken (') för strängar eller parametrar i kodsatser. I VBA är enkla citattecken reserverade för kommentarer! Alla textsträngar måste använda dubbla citattecken ("). Skriv till exempel aldrig 'swApp.Get='MathUtility'' eller liknande. För att hämta MathUtility, använd: 'Set swMathUtils = swApp.GetMathUtility'.
     - Dubbelkolla att SolidWorks API-metoder skrivs exakt enligt SDK-specifikationen (t.ex. 'swApp.GetMathUtility', 'swApp.ActiveDoc').
13. Gängtyper för förskruvningar (kabelförskruvningar): Använd alltid metrisk gänga (M-gänga, t.ex. M12, M16, M20, M25, M32 osv.). Använd ALDRIG rörgänga (t.ex. G-gänga, BSP, NPT) för kabelgenomföringar eller förskruvningar.
14. Inga kosmetiska gängor: Rita eller infoga ALDRIG kosmetiska gängor (t.ex. via InsertCosmeticThread/CosmeticThread eller liknande API). Vi vill endast ha gängade hål (t.ex. skapade via HoleWizard med gängad typ, eller enkla hål för gängning), ingen inritad kosmetisk gänga.
15. Korrekta SolidWorks VBA Enums: Eftersom Option Explicit är aktivt, leder felaktiga eller icke-existerande enum-namn till kompileringsfel ('Variable not defined' eller 'Method or data member not found'). 
    * För end conditions (swEndConditions_e), använd ALLTID 'swEndConditions_e.swEndCondBlind' (inte swEndBlind eller swEndCond_Blind) och 'swEndConditions_e.swEndCondThroughAll' (inte swEndThroughAll eller swEndCond_ThroughAll).
    * Det rekommenderade, enklaste och mest driftsäkra sättet att ställa in enheterna till millimeter, gram, sekund (MMGS) är att göra ett enda anrop som sätter hela enhetssystemet direkt till MMGS:
      'swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitSystem, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swUnitSystem_e.swUnitSystem_MMGS'
    * Om enheter måste sättas individuellt, använd:
      - 'swUserPreferenceIntegerValue_e.swUnitsLinear' för längdenhet (med 'swLengthUnit_e.swMM' för millimeter)
      - 'swUserPreferenceIntegerValue_e.swUnitsMassPropMass' för massenhet (med 'swUnitsMassPropMass_e.swUnitsMassPropMass_Grams' för gram) - OBS: 'swUnitsMass' existerar INTE i swUserPreferenceIntegerValue_e och kommer att ge kompileringsfel!
      - 'swUserPreferenceIntegerValue_e.swUnitsTime' för tidsenhet (med 'swTimeUnit_e.swSecond' för sekund)
16. Ändra enheter på dokumentnivå: För att ändra enheter för det aktiva dokumentet (swModel av typen ModelDoc2), använd metoden swModel.Extension.SetUserPreferenceInteger (vilken tar tre argument: Preference, Option och Value). Använd ALDRIG swModel.SetUserPreferenceIntegerValue (denna metod existerar inte på ModelDoc2-objektet, vilket triggar kompileringsfelet 'Method or data member not found'). Exempel på korrekt anrop:
    'swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitSystem, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swUnitSystem_e.swUnitSystem_MMGS'
17. Skapa nya part-dokument utan hårdkodade sökvägar: För att skapa en ny tom part (part-dokument), använd ALLTID 'Set swModel = swApp.NewPart' istället for 'NewDocument' med en hårdkodad sökväg till en '.prtDot'-mall. Detta gör att makrot fungerar oberoende av användarens SOLIDWORKS-version och lokala mall-konfiguration.`;

        const userContent = `ANVÄNDARENS INSTRUKTIONER:
${prompt || `Generera ett SolidWorks-makro som automatiserar designen eller kontrollen enligt specifikationerna i det bifogade dokumentet.`}

${documentContext ? `BIFOGAD SPECIFIKATION FRÅN SYSTEMET:\n${documentContext}` : ''}`;

        const responseSchema = {
            type: "object",
            properties: {
                code: { type: "string" },
                explanation: { type: "string" },
                fileName: { type: "string" }
            },
            required: ["code", "explanation", "fileName"]
        };

        const payload = {
            contents: [
                {
                    parts: [
                        { text: systemInstructions },
                        { text: userContent }
                    ]
                }
            ],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: responseSchema
            }
        };

        const result = await callGemini(payload, apiKey);
        const reportText = result.contents?.[0]?.parts?.[0]?.text || result.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        
        let cleanText = reportText.trim();
        if (cleanText.startsWith('```')) {
            cleanText = cleanText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
        }
        cleanText = cleanText.trim();
        
        let macroResponse;
        try {
            macroResponse = JSON.parse(cleanText);
        } catch (parseErr) {
            const noComments = cleanText.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
            macroResponse = JSON.parse(noComments);
        }

        const fileNameClean = macroResponse.fileName.replace(/[^a-zA-Z0-9_.-]/g, '_');
        const relativePath = `macros/${macroId}_${fileNameClean}`;
        const macrosDir = path.join(process.cwd(), 'public', 'macros');
        
        await mkdir(macrosDir, { recursive: true });
        await writeFile(path.join(process.cwd(), 'public', relativePath), macroResponse.code);
        
        await prisma.generatedMacro.update({
            where: { id: macroId },
            data: {
                code: macroResponse.code,
                explanation: macroResponse.explanation,
                fileName: fileNameClean,
                filePath: relativePath,
                status: 'completed'
            }
        });
        console.log(`Background macro generation completed for ID ${macroId}`);
    } catch (err: any) {
        console.error(`Background macro generation error for ID ${macroId}:`, err);
        await prisma.generatedMacro.update({
            where: { id: macroId },
            data: {
                status: 'failed',
                error: err.message || 'Okänt fel vid generering'
            }
        });
    }
}
