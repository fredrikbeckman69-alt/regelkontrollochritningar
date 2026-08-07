# Skill Definition: MCF Skyddsrumssök & Regelkontroll

Denna skill definierar systemarkitekturen, databasstrukturen, sökportalen, regelkontrollsmotorn och driftsättningen för **MCF Skyddsrumsportal** (tidigare projekt Autocom).

---

## 1. Systemmiljö & Servrar

### Lokal utvecklingsmiljö
*   **Sökväg:** `C:\Users\FredrikBeckman\OneDrive - Skyddsprodukter i Sverige AB\Tor Finans\Skyddsprodukter\Antigravity projects\Autocom`
*   **Lokal URL:** [http://localhost:3000](http://localhost:3000)

### Produktionsserver (Linux)
*   **IP-adress:** `192.168.19.13`
*   **SSH-användare:** `fredrikadmin`
*   **SSH-lösenord:** `JBCUanT2s2h7!`
*   **Driftsättningsmapp på servern:** `/opt/antigravity/Autocom`
*   **Live-URL:** [http://autocom.192.168.19.13.nip.io](http://autocom.192.168.19.13.nip.io)

---

## 2. Arkitektur & Funktioner

### A. Dokumentsök (Startsida)
*   Fritextsökning och kategorifiltrering på 339 officiella MCF-dokument (PDF & DOCX).
*   Sökningen utförs i SQLite (`prisma/dev.db`) på under 10 ms.
*   Inbyggd dokumentläsare i modal samt kopieringsfunktion för lokala filsökvägar.

### B. Bildextraktion (`scripts/extract-images.py`)
*   PDF-bilder extraheras via Python-skript (`PyMuPDF`) till `public/extracted_images/` och indexeras i Prisma-tabellen `DocumentImage`.
*   Bilderna är försedda med AI-beskrivningar för sökbarhet.

### C. Regelkontroll (`/compliance`)
*   Drag-and-drop-uppladdning för ritningar/specifikationer (PDF, DOCX, PNG, JPG).
*   **Intelligent RAG-analys**: Systemet analyserar ritningen (multimodalt via Gemini om det är en bild), söker i databasen efter tillämpliga MCF-typlösningar, och kör en AI-efterlevnadskontroll för att hitta avvikelser och referenser.

---

## 3. Miljövariabler (`.env`)
Följande variabler krävs i källkodens `.env` (både lokalt och på servern):
*   `DATABASE_URL="file:./dev.db"` (Pekar på SQLite-databasen `prisma/dev.db`).
*   `GEMINI_API_KEY` (Krävs för att köra AI-bildanalys, regelkontroll och makrogenerering).
*   `REDUCTO_API_KEY` (Valfri, används för layout-preservation vid PDF-parning under regelkontroll).

---

## 4. Driftsättningsrutin (Deploy)

Driftsättning sker helt automatiskt och samstämmigt med Linuxservern genom att köra följande Python-skript lokalt:

```bash
py deploy.py
```

### Vad skriptet gör:
1.  Paketerar Next.js-källkoden och Prisma-schemat till en `.tar.gz`-fil (exkluderar `node_modules` och `.next`).
2.  Ansluter till `192.168.19.13` via SSH/SFTP och laddar upp paketet till `/opt/antigravity/Autocom`.
3.  Packar upp källkoden och kör Next.js standalone docker-build i serverns `docker-compose.yml` (`autocom-app`).
4.  Routar domänen `autocom.192.168.19.13.nip.io` till containern via Caddy-proxyn.
5.  Kör Prisma db-synkronisering (`npx prisma db push --skip-generate`) på serverns databas.

---

## 5. Bildanalys & Uppdatering av ritningsbeskrivningar

Eftersom 527 bilder har extraherats och sparats med standardbeskrivningar, kan du generera riktiga AI-beskrivningar för dem genom att köra följande skript lokalt:

```bash
py scripts/describe-existing-images.py
```

Detta skript anropar Gemini 2.5 Flash för att analysera bilderna på disk och uppdaterar beskrivningarna direkt i den lokala databasen (`prisma/dev.db`). När skriptet är färdigt kör du `py deploy.py` för att ladda upp den uppdaterade databasen till servern.

---

## 6. Dokumentation & Versionshantering

> [!IMPORTANT]
> *   **Användarmanualen** (tillgänglig på portalen via `/manual`) **måste alltid uppdateras** i källkoden så fort kodförändringar görs som påverkar funktionaliteten eller berör information som beskrivs i den aktuella versionen av användarmanualen.
> *   En **versionsuppdatering** (i `src/app/versions/page.tsx`) **måste alltid triggas** och dokumenteras så fort förändringar görs i koden som motiverar en ny version.
> *   **All ny information** på sidan för versionshantering (`/versions`) **måste läggas längst upp** på sidan (dvs. överst i versions-matrisen i källkoden) för att bibehålla en omvänd kronologisk ordning.
> *   **Prestanda- och tolkningstidsoptimering** är en stående uppgift. Vid kodändringar som rör tolkning, sökordsextrahering eller regelkontroll måste du ständigt bevaka och optimera hastigheten utan att göra avkall på kvaliteten (t.ex. genom att undvika onödiga tunga multimodala LLM-anrop med PDF-binärer när textanalys räcker).
> *   **Automatisk och proaktiv driftsättning (Deploy):** Så fort Antigravity gör några källkods- eller databasschemaändringar lokalt i arbetsytan, MÅSTE Antigravity automatiskt köra driftsättningsskriptet `py deploy.py` för att överföra källkoden, bygga om containern på Linuxservern (`192.168.19.13`) och synkronisera databasschemat. Driftsättningen och databassynk ska ske helt proaktivt av Antigravity som ett avslutande verifieringssteg i varje uppgift. Användaren ska aldrig behöva be om eller köra en manuell deploy, synk eller kontroll av databasen.
> *   **Filnamnsprefixering och datumformat:** Vid uppladdning av ritningar ska filens visningsnamn (`customName`) alltid namnges med prefix i formatet `YYMMDD - TT:MM` baserat på Stockholmstid (t.ex. `260805 - 13:37 K-002.pdf`). Detta format och prefix måste behållas konsekvent genom hela applikationen, i arkivlistan, under förhandsgranskning, i historiken och vid all framtida visning.
> *   **Strikt matchning mot vald typlösning:** Om användaren har valt en specifik lösning att tolka mot (t.ex. `K17-201`), måste regelkontrollen strikt begränsas till referensregler för just den lösningen (via `getRulesForSolution`). Detta måste gälla både vid direkt (synkron) tolkning och i den asynkrona polling-rutten (`/api/compliance/poll`). Den valda lösningen (`selectedSolution`) måste sparas i databasens `reductoRawJson`-fält och läsas in på nytt när bakgrundsjobb slutförs, så att tolkningen inte faller tillbaka på irrelevanta standarddokument (som t.ex. allmänna beräkningar för 'Luftstötvåg' eller 'Splitterverkan').
> *   **Filnamn på genererade makron (.swb):** Vid nedladdning av SolidWorks-makrofiler (`.swb`) från makrosidan ska filnamnet alltid namnges på samma sätt som källritningen från arkivet. Alltså med tidsstämpelprefixet i formatet `YYMMDD-TT:MM` (t.ex. `260806-06:40`) baserat på ritningens uppladdningstid, följt av det ursprungliga filnamnet och sluta med `.swb` (t.ex. `260806-06:40 skapa_infastningsplat_1_ror.swb`).
> *   **Permanent skydd av ritningsarkiv och databaser under deploy:** Ingenting i detta projekt får någonsin skriva över, rensa eller förändra ritningsarkivet, uppladdade ritningsfiler (`public/uploads`), genererade makrofiler (`public/macros`) eller den persistenta SQLite-databasen (`prisma/dev.db` och `prisma/dev.db-journal`) på produktionsservern. Vid paketering inför driftsättning (i `deploy.py`) MÅSTE databaser, uppladdade filer och genererade makron alltid exkluderas från `.tar.gz`-arkivet, och serverns persistenta databasvolym och uppladdningsmappar måste hållas permanent orörda.
> *   **Exakta mått- och intervalljämförelser:** Vid granskning av mått (t.ex. bultavstånd) mot ett tillåtet intervall (t.ex. 150-300 mm) måste analysmotorn utföra exakta matematiska jämförelser. Om ritningens mått ligger inom intervallet (t.ex. 275 mm) är det GODKÄNT och får inte flaggas som en avvikelse eller varning. Flagga endast faktiska överträdelser utanför gränserna.
> *   **Gängor och gängtyper i SolidWorks-makron:** Vid generering av VBA-kod för SolidWorks-makron:
>     1. Använd alltid metrisk gänga (M-gänga, t.ex. M12, M16, M20, M25, M32 osv.) för elektriska kabelförskruvningar/kabelgenomföringar. Använd aldrig rörgänga (t.ex. G-gänga, BSP, NPT) för detta syfte.
>     2. Skapa endast gängade hål (t.ex. via HoleWizard med gängad typ, eller enkla hål för gängning). Infoga ALDRIG kosmetiska gängor (t.ex. via InsertCosmeticThread/CosmeticThread) i makrot.
>     3. Ställ in enheter korrekt på dokumentnivå: Det enklaste och mest driftsäkra sättet att ställa in millimeter, gram, sekund (MMGS) är att sätta hela enhetssystemet på en gång:
>        `swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitSystem, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swUnitSystem_e.swUnitSystem_MMGS`
>        Om enheter sätts individuellt, använd `swUserPreferenceIntegerValue_e.swUnitsLinear` (längd), `swUserPreferenceIntegerValue_e.swUnitsMassPropMass` (massa - OBS: `swUnitsMass` existerar INTE i enumen och ger kompileringsfel) och `swUserPreferenceIntegerValue_e.swUnitsTime` (tid). Använd aldrig påhittade enums som `swLengthUnit`, `swMassUnit` eller `swTimeUnit`.
>     4. Använd metoden `swModel.Extension.SetUserPreferenceInteger` (som tar tre argument: Preference, Option och Value) för att ändra enheter för det aktiva dokumentet (`swModel` av typen ModelDoc2). Använd ALDRIG `swModel.SetUserPreferenceIntegerValue` (denna metod existerar inte på ModelDoc2-objektet, vilket triggar kompileringsfelet 'Method or data member not found').