'use client';

import React from 'react';
import { History, Tag, CheckCircle2, Layout, Database, Code, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function VersionsPage() {
  // OBS: Lägg ALLTID nya versioner/uppdateringar längst UPP i denna matris (omvänd kronologisk ordning)
  const versions = [
    {
      version: "1.2.5",
      date: "2026-08-07",
      title: "Rättning av massenhets-enum i SolidWorks-makro",
      description: "Åtgärdat kompileringsfelet 'Method or data member not found' på .swUnitsMass genom att ändra enhetsinställningen till swUnitSystem_MMGS, samt rätta enumnamnet till swUnitsMassPropMass.",
      categories: [
        {
          title: "Funktionalitet & Felrättningar",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Åtgärdat kompileringsfel i SolidWorks VBA ('Method or data member not found' på .swUnitsMass) genom att korrigera enheten till det korrekta namnet 'swUnitsMassPropMass'.",
            "Förenklat makroenhetsinställningen genom att primärt sätta hela enhetssystemet till MMGS på en gång (swUnitSystem_MMGS) vilket är 100% säkert och förhindrar individuella enums-fel.",
            "Uppdaterat systeminstruktionerna för makrogeneratorn samt Skills.md."
          ]
        }
      ]
    },
    {
      version: "1.2.4",
      date: "2026-08-06",
      title: "Rättning av enhetsinställningar i SolidWorks-makro",
      description: "Åtgärdat kompileringsfelet 'Method or data member not found' genom att anropa SetUserPreferenceInteger på dokumentets Extension-objekt istället för direkt på swModel.",
      categories: [
        {
          title: "Funktionalitet & Felrättningar",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Åtgärdat kompileringsfel i SolidWorks VBA ('Method or data member not found') genom att byta ut ogiltiga 'swModel.SetUserPreferenceIntegerValue'-anrop till det korrekta tre-arguments 'swModel.Extension.SetUserPreferenceInteger'-anropet.",
            "Uppdaterat systeminstruktionerna för makrogeneratorn samt Skills.md för att permanent styra bort från ogiltig användning av metoder på ModelDoc2-gränssnittet."
          ]
        }
      ]
    },
    {
      version: "1.2.3",
      date: "2026-08-06",
      title: "Rättning av bultavståndsanalys, makrogängor & VBA-kompileringsfel",
      description: "Åtgärdat felaktiga avvikelsevarningar vid bultavstånd, korrigerat gängtyper i makrogenereringen samt fixat ett kompileringsfel (Variable not defined) i SolidWorks VBA.",
      categories: [
        {
          title: "Funktionalitet & Felrättningar",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Åtgärdat analysfel där godkända bultavstånd (t.ex. 275 mm) felaktigt flaggades som avvikelser trots att de låg inom det tillåtna intervallet (150-300 mm).",
            "Korrigerat SolidWorks-makrogenereringen till att alltid använda metrisk gänga (M-gänga) istället för rörgänga för förskruvningar/kabelgenomföringar.",
            "Strypt genereringen av onödiga kosmetiska gängor (InsertCosmeticThread) i makrot – nu skapas enbart de nödvändiga gängade hålen.",
            "Löst kompileringsfel ('Variable not defined') i SolidWorks VBA genom att korrigera enums till att använda de korrekta namnen (t.ex. swUnitsLinear, swUnitsMass, swUnitsTime) istället för felaktiga enums (swLengthUnit, swMassUnit, swTimeUnit)."
          ]
        }
      ]
    },
    {
      version: "1.2.2",
      date: "2026-08-06",
      title: "Kund- och Orderinformation för Ritningar",
      description: "Lagt till inmatningsfält för Kundnamn, Kundnummer och Försäljningsordernummer vid ritningsuppladdning samt stöd för sökning, efterredigering och icke-blockerande valideringsvarningar.",
      categories: [
        {
          title: "Funktionalitet & Användargränssnitt",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Lagt till inmatningsfält för Kundnamn, Kundnummer och Ordernummer i uppladdningskortet.",
            "Implementerat en icke-blockerande gul varningsruta som visas vid ofullständiga kunduppgifter, men tillåter analys att genomföras.",
            "Modifierat arkivsökningen i sidofältet för att filtrera och matcha på de tre nya parametrarna.",
            "Skapat ett interaktivt metadataformulär inuti arkivkortet under redigeringsläget för att justera kunduppgifter i efterhand.",
            "Visar sparad kund- och orderinformation under varje ritning i arkivlistan och i huvudrapportens granskningskort.",
            "Uppdaterat Prisma-databasmodellen samt REST-API:er (compliance, archive, detail-archive) för att lagra och returnera metadata."
          ]
        }
      ]
    },
    {
      version: "1.2.1",
      date: "2026-08-06",
      title: "Kollapsbara kontrollpunkter",
      description: "Gjort listan med kontrollpunkter under regelkontroll (/compliance) kollapsbar som standard för att spara utrymme, med bibehållen färgmarkering, ikoner och rubriker.",
      categories: [
        {
          title: "Användargränssnitt & Texter",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Dolt beskrivning och källreferens för kontrollpunkter som standard.",
            "Lagt till interaktiv utfällning/kollaps genom att klicka på hela kortet, indikerat med pilar (chevron-ikoner).",
            "Förhindrat att klick inuti den utfällda texten av misstag kollapsar kortet så att användaren enkelt kan markera och kopiera text."
          ]
        }
      ]
    },
    {
      version: "1.2.0",
      date: "2026-08-06",
      title: "Frikopplad makrogenerering & persistent fillagring",
      description: "Löst problem där makrogenerering avbröts när man lämnade sidan genom att frikoppla tråden på servern, samt lagt till automatisk återupptagning och persistent lagring på värdservern.",
      categories: [
        {
          title: "Funktionalitet & Arkitektur",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Frikopplat bakgrundsjobbet via setTimeout i API-routen så att det slutförs även om användaren navigerar bort direkt.",
            "Lagt till robust auto-markering och flikväxling på makrosidan för nyligen startade (<10 min) eller pågående genereringar.",
            "Implementerat no-store cache-busting på alla dynamiska GET-förfrågningar för att och undvika cachad pending-status.",
            "Laggt till persistent volymmontering för public/macros i docker-compose.yml och lagt till automatiskt chmod 777-skydd i deploy-skriptet.",
            "Städat bort det gamla makrogenereringsgränssnittet från regelkontrollssidan (/compliance) till förmån för den dedikerade makrosidan.",
            "Lagt till en ordlista och förklaring för vanliga begrepp och förkortningar (BOM, MCF, CAD, VBA, RAG, Reducto) i användarmanualen.",
            "Ersatt gamla MSB-referenser med MCF (Myndigheten för Civilt Försvar) i användarmanualens ordlista.",
            "Förtydligat instruktioner för hur man kopierar källkod till en ny .swp-fil (VBA Project) i SolidWorks, som är standardmetoden för nyare versioner.",
            "Lagt till strikt systeminstruktion i makrogeneratorn för att förhindra användning av enkla citattecken (') i genererad kod, vilket orsakade syntaxfel i VBA-editorn (t.ex. vid hämtning av MathUtility).",
            "Åtgärdat en bugg i Reducto-tolkaren (både synk- och asynk-rutt) där extraherade textstycken inte lästes in på grund av en saknad nivå i JSON-strukturen (result.result.chunks)."
          ]
        }
      ]
    },
    {
      version: "1.1.9",
      date: "2026-08-06",
      title: "Permanentskydd för produktionsdata under deploy",
      description: "Konfigurerat deploy-rutinen till att permanent exkludera lokala databaser, uppladdningar och makrofiler för att skydda produktionsdata vid automatiska driftsättningar.",
      categories: [
        {
          title: "Driftsättning & Automatisering",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Uppdaterat deploy.py till att ignorera 'extracted_images', 'uploads', 'macros' samt 'dev.db' och 'dev.db-journal'.",
            "Dokumenterat permanentskyddet av serverns databas och ritningsarkiv i Skills.md."
          ]
        }
      ]
    },
    {
      version: "1.1.8",
      date: "2026-08-06",
      title: "Automatiskt och proaktivt driftsättningsflöde",
      description: "Konfigurerat systemet till att låta Antigravity bygga och driftsätta källkod samt synkronisera databasen live på servern proaktivt vid alla lokala ändringar.",
      categories: [
        {
          title: "Driftsättning & Automatisering",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Uppdaterat Skills.md med strikta direktiv för fullt automatiska deploys och schema-synk via deploy.py.",
            "Skapat en agentfokuserad överlämningsguide (handover_guide.md) för oberoende utveckling mot den delade Linuxservern.",
            "Undantagit databas-journaler och tillfälliga filer från deploy-paketering i deploy.py."
          ]
        }
      ]
    },
    {
      version: "1.1.7",
      date: "2026-08-06",
      title: "Asynkron makrogenerering & makrohistorik",
      description: "Makrogenerering körs nu asynkront i bakgrunden och historiken sparas i databasen för visning, nedladdning och borttagning.",
      categories: [
        {
          title: "Funktionalitet & Arkitektur",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Flyttat SolidWorks VBA-makrogenereringen till en asynkron bakgrundsarbetare.",
            "Lagt till sidofältstabbar på makrosidan för att växla mellan ritningsarkivet och sparade makron.",
            "Implementerat visning, bakgrundspollning, nedladdning samt borttagning av historiska makron."
          ]
        }
      ]
    },
    {
      version: "1.1.6",
      date: "2026-08-06",
      title: "PdfPreview-komponent på makrosidan",
      description: "Migrerat PDF-förhandsvisningen på makrosidan till PdfPreview-komponenten för bättre enhetlighet.",
      categories: [
        {
          title: "Användargränssnitt & Texter",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Bytt ut standard-iframe mot PdfPreview-komponenten (laddad asynkront utan SSR) på makrosidan."
          ]
        }
      ]
    },
    {
      version: "1.1.5",
      date: "2026-08-06",
      title: "Datumprefix för makro-nedladdningar",
      description: "Genererade VBA-makrofiler (.swb) döps numera automatiskt efter källritningens namn och tidsstämpel.",
      categories: [
        {
          title: "Användargränssnitt & Texter",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Lagt till automatisk namngivning av .swb-nedladdningar i formatet 'YYMMDD-TT:MM [ursprungligt_namn].swb' baserat på ritningens uppladdningstid.",
            "Dokumenterat namngivningsregler i Skills.md för att förhindra framtida regressioner."
          ]
        }
      ]
    },
    {
      version: "1.1.4",
      date: "2026-08-06",
      title: "Uppdatering av analysknappstext",
      description: "Bytt texten på analysknappen för att bättre beskriva handlingen.",
      categories: [
        {
          title: "Användargränssnitt & Texter",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Ändrat knapptexten 'Analysera med MCF' till 'Analysera mot MCF regelverk'."
          ]
        }
      ]
    },
    {
      version: "1.1.3",
      date: "2026-08-06",
      title: "Fix för matchning av vald lösning i polling-rutt",
      description: "Åtgärdat en regression där den valda typlösningen ignorerades av polling-rutten vid asynkron bearbetning.",
      categories: [
        {
          title: "Felrättningar & Stabilitet",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Korrigerat /api/compliance/poll till att läsa in 'selectedSolution' från databasen och begränsa regelgranskningen till de specifika reglerna för den valda lösningen.",
            "Uppdaterat Skills.md med strikta regressionstester för datumformat och typlösningsmatchning."
          ]
        }
      ]
    },
    {
      version: "1.1.2",
      date: "2026-08-06",
      title: "Namnbyte av huvudrubrik",
      description: "Ändrat huvudrubriken på regelkontrollssidan till Skyddsprodukter Skyddsrumsarkiv & Regelkontroll.",
      categories: [
        {
          title: "Användargränssnitt & Texter",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Ändrat huvudrubriken på regelkontrollssidan till 'Skyddsprodukter Skyddsrumsarkiv & Regelkontroll'.",
            "Behållit alla övriga MCF-referenser (t.ex. typlösningar, knappar, manualer) intakta som MCF."
          ]
        }
      ]
    },
    {
      version: "1.1.1",
      date: "2026-08-06",
      title: "Namnbyte av ritningsarkivet",
      description: "Ändrat namn på arkivmodulen från MCF Ritningsarkiv till Skyddsprodukter ritningsarkiv.",
      categories: [
        {
          title: "Användargränssnitt & Texter",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Renoverat namnet på sökbara arkivkortet i både regelkontrollen (/compliance) och makro-ritaren (/macros) till 'Skyddsprodukter ritningsarkiv'."
          ]
        }
      ]
    },
    {
      version: "1.1.0",
      date: "2026-08-05",
      title: "Flerfilsuppladdning, Samtidig tolkning & Driftsättningsoptimering",
      description: "Stöd för samtidig analys av flera ritningar, Stockholm-baserat tidsstämpelprefix samt drastisk optimering av byggmiljön.",
      categories: [
        {
          title: "Flerfilsuppladdning & Datumprefix",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Möjliggjort samtidig uppladdning av flera ritningsfiler för en och samma RAG-analys.",
            "Implementerat automatisk namngivning med prefix 'YYMMDD - TT:MM' baserat på Stockholmstid (t.ex. 260805 - 13:37 K-002.pdf) som behålls rakt igenom.",
            "Skapat en Next-API-route /api/uploads/[...path] med inline-visning och cache-headers för stabil rendering av ritningar i iframes.",
            "Felsäker JSON-parsning av sparade dokumentsökvägar i arkivet."
          ]
        },
        {
          title: "Bygg- & Driftsättningsoptimering",
          icon: <Code className="h-4 w-4 text-blue-500 shrink-0" />,
          items: [
            "Skapat .dockerignore vilket reducerade build context-storleken från 1.24GB till 360KB (99.9% snabbare överföring).",
            "Automatiserat tillfällig pausning av Netdata-containern under kompileringsfasen för att frigöra 2GB RAM och undvika swap-låsningar.",
            "Robustifierat deploy.py mot Windows fil-låsningsfel (WinError 5) orsakade av OneDrive-synkning."
          ]
        }
      ]
    },
    {
      version: "1.0.9",
      date: "2026-08-05",
      title: "Anpassat val ('Annat') för typlösning med fritextinmatning",
      description: "Möjlighet att ange en valfri lösningstyp manuellt om den inte finns i förvalslistan.",
      categories: [
        {
          title: "Regelkontroll & Precision",
          icon: <Shield className="h-4 w-4 text-indigo-500 shrink-0" />,
          items: [
            "Lagt till valet 'Annat (ange manuellt)...' i rullgardinsmenyn för typlösningar.",
            "Implementerat en fritextinmatningsruta som visas när 'Annat' är valt, där användaren måste ange önskad typlösning.",
            "Lagt till tvingande validering som inaktiverar knappen för att starta analysen om textfältet lämnats tomt.",
            "Skickar med det inskrivna lösningsnamnet till backend för strikt matchning mot regeldatabasen."
          ]
        }
      ]
    },
    {
      version: "1.0.8",
      date: "2026-08-05",
      title: "Manuellt val av typlösning vid uppladdning för regelkontroll",
      description: "Möjlighet att välja specifik typlösning för att begränsa och styra regelkontrollen strikt mot relevanta MCF-dokument.",
      categories: [
        {
          title: "Regelkontroll & Precision",
          icon: <Shield className="h-4 w-4 text-indigo-500 shrink-0" />,
          items: [
            "Lagt till en valbox i uppladdningskortet på sidan för regelkontroll för att välja specifik typlösning (t.ex. T12-102, T17-102-105, T18-103, T21-104-105, K17-201, K18-101-102).",
            "Uppdaterat API-ändpunkten `/api/compliance` och bakgrundspollningen att hämta och använda exakt de referensdokument som reglerar den valda typlösningen.",
            "Inkluderat specifik instruktion till Gemini-granskaren att strikt kontrollera efterlevnad mot det valda typlösningsdokumentet.",
            "Uppdaterat användarmanualen (`/manual`) med information om hur funktionen fungerar."
          ]
        }
      ]
    },
    {
      version: "1.0.7",
      date: "2026-08-05",
      title: "Självpollning av pågående tolkningar i arkivet",
      description: "Automatisk polling i bakgrunden för pågående tolkningar när användaren öppnar eller läser arkivet.",
      categories: [
        {
          title: "Användarupplevelse & Arkiv",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Implementerat automatisk triggning av polling via `/api/compliance/poll?docId=...` för alla dokument som har status 'processing' när arkivet laddas.",
            "Detta säkerställer att pågående tolkningar slutförs och uppdateras automatiskt på skärmen utan att användaren behöver ladda om sidan."
          ]
        }
      ]
    },
    {
      version: "1.0.6",
      date: "2026-08-05",
      title: "Prestandaoptimering av regelkontroll och sökordsextrahering",
      description: "Reducerat tolkningstiden genom att ta bort tunga multimodala PDF-binärpayloads från sökordsextraheringen.",
      categories: [
        {
          title: "Prestanda & Latens",
          icon: <Code className="h-4 w-4 text-blue-500 shrink-0" />,
          items: [
            "Optimerat `getSearchKeywords` i regelkontrollen att endast skicka multimodala bildfiler (t.ex. PNG/JPG) till Gemini. Textbaserade PDF:er analyseras nu enbart via råtext.",
            "Detta förhindrar uppladdning av flera megabyte stora binärfiler över nätverket två gånger, vilket sparar upp till 10-15 sekunder per tolkning.",
            "Genomfört optimeringen i både den primära API-rutten och den asynkrona polling-rutten."
          ]
        }
      ]
    },
    {
      version: "1.0.5",
      date: "2026-08-05",
      title: "Migration till SOLIDWORKS-nativa makron (.swb) & Felsäker tolkare",
      description: "Migrering till direktkörbara `.swb`-filer, Windows CRLF-normalisering samt robust JSON-parsningsfallback för AI-koden.",
      categories: [
        {
          title: "CAD-Automatisering & Robusthet",
          icon: <Shield className="h-4 w-4 text-indigo-500 shrink-0" />,
          items: [
            "Migrerat SolidWorks makrogenerator från `.bas`-formatet till det nativa, textbaserade `.swb`-formatet (SOLIDWORKS VBA Basic Macro) på sidorna /macros och /compliance.",
            "Detta tillåter användare att köra makrot direkt i SOLIDWORKS via Verktyg > Makro > Kör utan att behöva importera koden manuellt i VBA-editorn.",
            "Lagt till automatisk normalisering av radbrytningar till Windows CRLF (`\\r\\n`) på alla nedladdade filer, vilket krävs av SOLIDWORKS makroläsare på Windows.",
            "Implementerat en felsäker och tolerant JSON-tolkare i `/api/macro` som städar bort LLM-markdownmarkeringar samt rensar inline-kommentarer för att förhindra parsing-krascher.",
            "Uppdaterat användarmanualen (`/manual`), versionssidan (`/versions`) och regelkontrollen (`/compliance`) med nya instruktioner och filändelsebeskrivningar."
          ]
        }
      ]
    },
    {
      version: "1.0.4",
      date: "2026-08-05",
      title: "Automatisk referensritningskoppling vid makrogenerering",
      description: "Smart identifiering av typbestämmelser och ritningar direkt från källtexten vid SolidWorks-makrogenerering.",
      categories: [
        {
          title: "CAD-Automatisering",
          icon: <Shield className="h-4 w-4 text-indigo-500 shrink-0" />,
          items: [
            "Implementerat en regex-sökare som identifierar skyddsrums- och MCF-ritningsreferenser (t.ex. SR-D1-312, K03-108, T18-102) direkt ur ritningstexten.",
            "Kopplat dessa referenser till systemets databas för att hämta gällande specifikationer och krav och automatiskt bifoga dem som kontext till AI-makrogenereraren.",
            "Detta säkerställer att det skapade SolidWorks-makrot följer exakta dimensionskrav och måttsättningar från referensritningarna."
          ]
        }
      ]
    },
    {
      version: "1.0.3",
      date: "2026-08-05",
      title: "Responsivitetsförbättringar för materiallistor (BOM)",
      description: "Optimering av tabellayouter för att förhindra textklippning vid zoomning och skärmresizing.",
      categories: [
        {
          title: "Responsivitet & UI",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Lagt till explicita procentuella kolumnbredder och min-bredd (min-w) på alla kolumnrubriker i materiallistan för att skydda text från att pressas samman.",
            "Tvingat tabellen att ha en säker minimibredd på 700px (600px i förhandsvisningen) för att vid behov aktivera den inre horisontella scrollen istället för att klippa text.",
            "Ökat maxbredden på regelkontrollens layout till max-w-7xl för att ge tabeller och paneler mer andningsutrymme."
          ]
        }
      ]
    },
    {
      version: "1.0.2",
      date: "2026-08-05",
      title: "Justering av väntetidsinformation",
      description: "Borttagning av missvisande tidsangivelse under analysfasen för ritningar.",
      categories: [
        {
          title: "Användargränssnitt",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Tog bort texten 'Detta tar vanligtvis under 10 sekunder...' under analysens vänteläge då bearbetningstiden varierar beroende på ritningens storlek och komplexitet."
          ]
        }
      ]
    },
    {
      version: "1.0.1",
      date: "2026-08-05",
      title: "Prestandaoptimering av ritningstolkning (Reducto)",
      description: "Hastighetsoptimeringar för att radikalt reducera väntetider vid uppladdning av komplexa ritningar.",
      categories: [
        {
          title: "Prestanda & Latens",
          icon: <Code className="h-4 w-4 text-blue-500 shrink-0" />,
          items: [
            "Inaktiverat automatisk AI-generering av figurbeskrivningar (summarize_figures: false) då den multimodala LLM-analysen tog upp till 1-2 minuter per ritningssektion.",
            "Inaktiverat redundant chunking (chunk_mode: disabled) för att slippa beräkna embeddings-gränser under tolkningen.",
            "Genomfört dessa optimeringar utan att påverka regelkontrollens noggrannhet eller BOM-materiallistan."
          ]
        }
      ]
    },
    {
      version: "1.0.0",
      date: "2026-08-05",
      title: "Initial release av MCF Skyddsrumsportal",
      description: "Den första stabila utgåvan som samlar regelkontroll, sökbart ritningsarkiv samt automatiserade CAD-makron på en och samma plattform.",
      categories: [
        {
          title: "Asynkron Tolkningsmotor & Polling",
          icon: <Code className="h-4 w-4 text-blue-500 shrink-0" />,
          items: [
            "Uppgraderat Reducto AI-integreringen till asynkrona anrop (`/parse_async`) för att klara stora och tunga ritningsfiler utan nätverkstimeouts.",
            "Implementerat klientsides-polling med realtidsstatus som automatiskt hämtar resultat och uppdaterar gränssnittet när parsningsjobbet är klart.",
            "Lagt till robust serverfelshantering i API-rutterna som fångar upp och visar felmeddelanden på svenska om uppladdningen misslyckas."
          ]
        },
        {
          title: "SolidWorks CAD-Automatisering",
          icon: <Shield className="h-4 w-4 text-indigo-500 shrink-0" />,
          items: [
            "Integrerat generering av SolidWorks VBA-makron (.swb-filer) som kan laddas ner och köras direkt i SolidWorks CAD.",
            "Kopplat makrogenereringen till ritningens materiallista (BOM) för att automatiskt rita upp geometri och strukturer (profiler, hålmönster, plåtar).",
            "Automatiserat tillägg av Custom Properties för kvalitetssäkring i makrokoden (t.ex. RitadAv, Klass, Material, Projekt, Datum)."
          ]
        },
        {
          title: "Sökbart & Redigerbart Ritningsarkiv",
          icon: <Database className="h-4 w-4 text-emerald-500 shrink-0" />,
          items: [
            "Skapat Prisma-modellen `UploadedDocument` för att spara alla uppladdade ritningsrapporter i SQLite-databasen.",
            "Byggt API-endpunkter för fritextsökning i sparade ritningar (söker i både namn, tolkad text samt Reducto-markdown).",
            "Lagt till stöd för inline omdöpning av dokument i arkivet samt fysisk radering av filer från disk vid borttagning."
          ]
        },
        {
          title: "Premium Gränssnitt & Estetik",
          icon: <Layout className="h-4 w-4 text-pink-500 shrink-0" />,
          items: [
            "Designat ett modernt, ljust glassmorphism-tema med mjuka vita bakgrunder, djup blur-effekt och subtila skuggor.",
            "Lagt till tre flytande bakgrundsgradienter (blobs) i layout-nivån för att ge gränssnittet djup och liv.",
            "Implementerat pulserande shimmer-animationer på laddningsplatshållare (skelett) under tolkningstiden.",
            "Anpassat sidomenyn till ljust tema och infogat företagets logotyp i sina ursprungliga färger, sänkt från toppen."
          ]
        }
      ]
    }
  ];

  return (
    <div className="w-full p-4 md:p-6 text-slate-800 dark:text-slate-100 bg-transparent">
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent flex items-center gap-2">
          <History className="h-8 w-8 text-blue-500 shrink-0" />
          Versionshistorik
        </h1>
        <p className="text-slate-550 dark:text-slate-400 mt-1">
          Här dokumenteras releaser, uppdateringar och versionsförändringar för MCF Skyddsrumsportal.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-8">
        {versions.map((ver, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-slate-200 space-y-4">
            {/* Version timeline dot */}
            <div className="absolute -left-2.5 top-1.5 h-4 w-4 rounded-full bg-blue-500 border-4 border-slate-50 flex items-center justify-center shadow-sm" />
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xl font-bold text-slate-900 flex items-center gap-1.5">
                <Tag className="h-4 w-4 text-blue-500" />
                v{ver.version}
              </span>
              <Badge variant="outline" className="text-[10px] font-mono border-white/30 bg-white/40">
                {ver.date}
              </Badge>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-slate-850 text-base">{ver.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">{ver.description}</p>
            </div>

            {/* Release categories */}
            <div className="grid gap-4 mt-4 md:grid-cols-2">
              {ver.categories.map((cat, cIdx) => (
                <Card key={cIdx} className="glass-card shadow-md">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-semibold flex items-center gap-2">
                      {cat.icon}
                      {cat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <ul className="space-y-2 text-[11px] leading-relaxed text-slate-600">
                      {cat.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex gap-2 items-start">
                          <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
