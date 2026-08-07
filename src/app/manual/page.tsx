'use client';

import React from 'react';
import { 
  BookOpen, HelpCircle, Upload, CheckCircle2, FileCode, Wrench, 
  Settings, Terminal, AlertTriangle, FileText, ArrowRight, List 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ManualPage() {
  return (
    <div className="w-full p-4 md:p-6 text-slate-800 dark:text-slate-100 bg-transparent">
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-blue-500 shrink-0" />
          Användarmanual
        </h1>
        <p className="text-slate-550 dark:text-slate-400 mt-1">
          Här hittar du instruktioner för att ladda upp ritningar, genomföra regelkontroll och generera SolidWorks CAD-makron.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Step-by-Step Overview */}
        <Card className="glass-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <List className="h-5 w-5 text-indigo-500" />
              Arbetsflöde i portalen
            </CardTitle>
            <CardDescription className="dark:text-slate-400">
              Följ dessa 4 enkla steg för att genomföra en fullständig kontroll av ett underlag.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-4 text-xs">
            <div className="space-y-2 p-3 bg-white/40 rounded-lg border border-white/20">
              <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
              <h4 className="font-bold text-slate-900">Ladda upp</h4>
              <p className="text-slate-500 leading-relaxed">
                Släpp din ritningsfil (PDF, Word, bild) i uppladdningsrutan.
              </p>
            </div>
            <div className="space-y-2 p-3 bg-white/40 rounded-lg border border-white/20">
              <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
              <h4 className="font-bold text-slate-900">Tolkning (Reducto)</h4>
              <p className="text-slate-500 leading-relaxed">
                Systemet tolkar layouten asynkront i bakgrunden.
              </p>
            </div>
            <div className="space-y-2 p-3 bg-white/40 rounded-lg border border-white/20">
              <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">3</div>
              <h4 className="font-bold text-slate-900">Regelkontroll</h4>
              <p className="text-slate-500 leading-relaxed">
                Resultatet visas med kontrollpunkter och en materiallista (BOM).
              </p>
            </div>
             <div className="space-y-2 p-3 bg-white/40 rounded-lg border border-white/20">
              <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">4</div>
              <h4 className="font-bold text-slate-900">CAD-Automatisering</h4>
              <p className="text-slate-500 leading-relaxed">
                Skapa, versionera och ladda ner färdiga SolidWorks-makron (.swb).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Upload guide */}
        <Card className="glass-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Upload className="h-5 w-5 text-blue-500" />
              1. Ladda upp ritningsunderlag
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs leading-relaxed text-slate-650">
            <p>
              I gränssnittet **Regelkontroll** kan du ladda upp valfria dokumenttyper. Det finns brett stöd för följande format:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-550">
              <li><strong>PDF (.pdf)</strong>: Det mest rekommenderade formatet för vektorritningar och flersidiga dokument.</li>
              <li><strong>Word-filer (.docx)</strong>: Praktiskt för kravspecifikationer och tabeller i textform.</li>
              <li><strong>Bildformat (.png, .jpg, .jpeg)</strong>: Ritningsbilder och skisser tolkas multimodalt av systemets AI.</li>
            </ul>
            <p>
              <strong>Välj lösning att tolka mot (Nyhet):</strong> Vid uppladdningen kan du välja en specifik typlösning (t.ex. <em>T12-102</em>, <em>T17-102</em>, osv.) från rullgardinsmenyn. Om du väljer en specifik lösning, granskas ritningen <strong>strikt och uteslutande</strong> mot de officiella MCF-dokument och typritningar som reglerar just den valda lösningen. Om du väljer <em>Automatisk identifiering</em>, analyserar systemets AI ritningen och söker automatiskt efter matchande regelverk i hela databasen. Om du väljer <strong>Annat (ange manuellt)...</strong> dyker ett textfält upp där du måste skriva in koden för lösningen (t.ex. <em>K03-108</em>). Kontrollen utförs då strikt mot de MCF-filer som matchar den inskrivna koden.
            </p>
            <p>
              När filen laddats upp sparas den i systemets sökbara arkiv, tilldelas ett unikt ID och kan enkelt namnges eller raderas direkt från arkivpanelen.
            </p>
            <p>
              <strong>Kund- och orderinformation (Nyhet):</strong> Vid uppladdningen kan du ange <em>Kundnamn</em>, <em>Kundnummer</em> och <em>Ordernummer</em> för ritningen. Om något eller alla av dessa fält lämnas tomma visas en gul varningsruta under filerna, men det är <strong>inte obligatoriskt</strong> – du kan fortfarande klicka på 'Analysera mot MCF regelverk' och gå vidare. 
            </p>
            <p>
              Den inmatade kundinformationen sparas och visas direkt under varje ritning i arkivlistan och högst upp i granskningsrapporten. Det är även möjligt att <strong>söka i arkivet</strong> efter dessa parametrar, samt att <strong>redigera informationen i efterhand</strong> genom att klicka på pennikonen på ritningen i arkivet.
            </p>
          </CardContent>
        </Card>

        {/* Async Parsing (Reducto) */}
        <Card className="glass-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Terminal className="h-5 w-5 text-indigo-500" />
              2. Asynkron tolkning via Reducto API
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs leading-relaxed text-slate-650">
            <p>
              För att garantera snabb respons vid uppladdning av tunga ritningsunderlag använder systemet **Reducto AI:s asynkrona motor**:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-slate-550">
              <li>Systemet laddar upp ritningen och initierar ett asynkront parsningsjobb hos Reducto.</li>
              <li>En platsreserverad fil sparas direkt i databasen med status <Badge variant="secondary" className="text-[9px]">processing</Badge>.</li>
              <li>Gränssnittet övergår till ett pulserande vänteläge och pollar servern var 2.5:e sekund för att kontrollera framsteg.</li>
              <li>Så fort Reducto tolkat ritningens tabeller, geometri och text skickas datat till regelkontrollen och resultatet sparas i arkivet.</li>
            </ol>
            <p>
              Denna asynkrona hantering förhindrar nätverkstimeouts och tillåter ritningar på över 50 sidor att tolkas helt säkert i bakgrunden.
            </p>
          </CardContent>
        </Card>

        {/* Rule engine */}
        <Card className="glass-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              3. Granskning och Materiallista (BOM)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs leading-relaxed text-slate-650">
            <p>
              Regelkontrollen delar upp resultatet i tre huvudsektioner för enkel överblick:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-550">
              <li>
                <strong>Sammanfattning</strong>: En övergripande statusbedömning som indikerar om ritningen är <em>Godkänd</em>, har <em>Varningar</em>, eller innehåller direkta <em>Avvikelser</em> mot gällande skyddsrumsbestämmelser.
              </li>
              <li>
                <strong>Kontrollpunkter</strong>: Enskilda regeltester med statusindikatorer (<span className="text-emerald-500 font-semibold">Godkänd</span>, <span className="text-amber-500 font-semibold">Varning</span>, <span className="text-rose-500 font-semibold">Avvikelse</span>) och tydliga källhänvisningar till MCF-dokumenten.
              </li>
              <li>
                <strong>Konstruktionsbehov (BOM)</strong>: En automatisk materiallista som listar identifierade skyddsrumskomponenter, rekommenderat antal, material samt specifika tillverkningskrav.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CAD automation guide */}
        <Card className="glass-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <FileCode className="h-5 w-5 text-indigo-500" />
              4. SolidWorks CAD-Automatisering & Makrogenerator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-xs leading-relaxed text-slate-650">
            <div>
              <p className="mb-2">
                Under fliken **SolidWorks-makron** i sidomenyn kan du generera SolidWorks VBA-makron för att automatiskt rita eller konfigurera komponenter utifrån dina uppladdade ritningar.
              </p>
              <div className="p-3 bg-white/40 rounded-lg border border-white/20 space-y-1 mb-2">
                <p className="font-semibold text-slate-800">Funktioner i makrogeneratorn:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-500">
                  <li><strong>Bakgrundskörning</strong>: Genereringen körs frikopplad i bakgrunden på servern. Du kan lämna sidan eller arbeta vidare i systemet under tiden – arbetet fortgår ändå.</li>
                  <li><strong>Automatisk bevakning</strong>: När du återvänder till sidan markeras det pågående eller nyligen skapade makrot automatiskt och visar sin status (laddningssnurra under arbete, eller grön bock när det är klart).</li>
                  <li><strong>Historik & Versionshantering</strong>: Tidigare genererade makron sparas med tidsstämplar i omvänd kronologisk ordning (senaste överst) så att du enkelt kan gå tillbaka och hämta dem igen. Du kan även ta bort gamla makron via papperskorgssymbolen.</li>
                  <li><strong>Filnamn och tidsstämpel</strong>: Nedladdade makrofiler (.swb) namnges automatiskt med ritningens uppladdningstid som prefix (t.ex. <em>260806-07:41_ritning.swb</em>) för ren filorganisering.</li>
                  <li><strong>Standardiserad gängning och hål</strong>: Förskruvningar (t.ex. kabelgenomföringar) genereras alltid med metrisk gänga (M-gänga, t.ex. M20/M25) istället för rörgänga. Makrona genererar endast faktiska gängade hål (inga kosmetiska gängor ritas in).</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 border-t border-slate-100 pt-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                <Wrench className="h-4 w-4 text-blue-500" />
                Hur använder jag makrot i SOLIDWORKS?
              </h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-blue-500/5 rounded border border-blue-500/10">
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 text-xs mb-1">Metod A: Kopiera källkod till en ny .swp-fil (Rekommenderas för alla versioner)</h5>
                  <p className="text-[11px] text-slate-500 mb-2">
                    Eftersom nyare versioner av SOLIDWORKS ibland döljer eller har sämre stöd för äldre .swb-filer (SWBasic), är detta det mest driftsäkra och rekommenderade sättet:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-slate-550">
                    <li>Klicka på knappen <strong>Kopiera</strong> på makrosidan för att kopiera hela källkoden till ditt urklipp.</li>
                    <li>I SOLIDWORKS, gå till toppmenyn: <strong>Verktyg &gt; Makro &gt; Nytt...</strong> (Tools &gt; Macro &gt; New...).</li>
                    <li>Välj att spara filen som en ny <strong>.swp</strong>-fil (SolidWorks VBA Project).</li>
                    <li>SOLIDWORKS öppnar automatiskt VBA-redigeringsfönstret. Ersätt all standardkod i det stora fönstret genom att klistra in (<code>Ctrl+V</code>) den kopierade källkoden, och spara.</li>
                    <li>Kör makrot direkt inifrån redigeraren via den gröna play-knappen (eller tryck <code>F5</code>).</li>
                  </ol>
                </div>
                
                <div className="p-3 bg-slate-500/5 rounded border border-slate-200/50 dark:border-slate-800">
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 text-xs mb-1">Metod B: Kör .swb-filen direkt (Kräver stöd för SWBasic i din version)</h5>
                  <ol className="list-decimal pl-5 space-y-1 text-slate-550">
                    <li>Välj ditt genererade makro under fliken <strong>Sparade makron</strong> och klicka på <strong>Ladda ner .swb-fil</strong>.</li>
                    <li>I SOLIDWORKS, gå till toppmenyn: <strong>Verktyg &gt; Makro &gt; Kör...</strong> (Tools &gt; Macro &gt; Run...).</li>
                    <li>I fildialogen, ändra filtyp-fältet längst ner till höger från (.swp) till <strong>SWBasic Macros (*.swb)</strong>.</li>
                    <li>Markera din nedladdade <code>.swb</code>-fil och klicka på <strong>Öppna</strong> för att köra makrot direkt.</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Glossary / Abbreviations */}
        <Card className="glass-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-indigo-500" />
              Förklaring av förkortningar & begrepp
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-xs leading-relaxed text-slate-650">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-3 bg-white/40 rounded-lg border border-white/20">
                <h4 className="font-bold text-slate-900 mb-1">BOM (Bill of Materials)</h4>
                <p className="text-slate-500 font-medium">
                  <strong>Stycklista / Materiallista</strong>. En strukturerad sammanställning över alla material, komponenter och kvantiteter som krävs för att tillverka skyddsrumsdetaljen enligt underlaget.
                </p>
              </div>
              <div className="p-3 bg-white/40 rounded-lg border border-white/20">
                <h4 className="font-bold text-slate-900 mb-1">MCF</h4>
                <p className="text-slate-500 font-medium">
                  <strong>Material- och Konstruktionsföreskrifter</strong>. Det regelverk och de typritningar för skyddsrum som är fastställda av MCF (Myndigheten för Civilt Försvar) och som portalen granskar underlagen mot.
                </p>
              </div>
              <div className="p-3 bg-white/40 rounded-lg border border-white/20">
                <h4 className="font-bold text-slate-900 mb-1">CAD (Computer-Aided Design)</h4>
                <p className="text-slate-500 font-medium">
                  <strong>Datorstödd konstruktion</strong>. Den programvara (t.ex. SOLIDWORKS) och metodik som används för att digitalt rita och designa fysiska komponenter.
                </p>
              </div>
              <div className="p-3 bg-white/40 rounded-lg border border-white/20">
                <h4 className="font-bold text-slate-900 mb-1">VBA (Visual Basic for Applications)</h4>
                <p className="text-slate-500 font-medium">
                  <strong>Makrospråk</strong>. Det programmeringsspråk som används för att skriva de makron (.swb) som SOLIDWORKS läser in för att rita komponenter automatiskt.
                </p>
              </div>
              <div className="p-3 bg-white/40 rounded-lg border border-white/20">
                <h4 className="font-bold text-slate-900 mb-1">RAG (Retrieval-Augmented Generation)</h4>
                <p className="text-slate-500 font-medium">
                  <strong>Sök- och genereringsteknik</strong>. AI-metoden som används i portalen för att först söka upp de mest relevanta reglerna i databasen och sedan använda dem för att kontrollera ritningen.
                </p>
              </div>
              <div className="p-3 bg-white/40 rounded-lg border border-white/20">
                <h4 className="font-bold text-slate-900 mb-1">Reducto</h4>
                <p className="text-slate-500 font-medium">
                  <strong>AI-parsningsmotor</strong>. Den externa tjänst som systemet använder för att läsa in layouten i PDF-ritningar och tolka komplicerade tabellstrukturer asynkront.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
