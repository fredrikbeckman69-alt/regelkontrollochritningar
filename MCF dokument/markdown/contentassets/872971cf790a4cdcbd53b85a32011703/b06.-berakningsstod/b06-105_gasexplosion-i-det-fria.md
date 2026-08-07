---
title: "B06 105 Gasexplosion I Det Fria"
category: "b06.-berakningsstod"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b06.-berakningsstod/b06-105_gasexplosion-i-det-fria.pdf"
fileType: "PDF"
keywords: ["skyddsrum","ventil","beräkning","explosion","avlopp","vatten","kontroll","tryckvåg"]
summary: "Beräkning av impulsbelastad konstruktion 1 (46) B06-105 2017-12-18 B06-105 Beräkningsstöd Gasexplosion i det fria Författare: Morgan Johansson. Ansvarig utgivare: Lars Gråbergs. 1 Orientering 3 1.1 Samlingsdokument 3 1.2 Om detta dokument 3 1.3 Be..."
---

Beräkning av impulsbelastad konstruktion
1 (46)
B06-105
2017-12-18
B06-105 Beräkningsstöd
Gasexplosion i det fria
Författare: Morgan Johansson. Ansvarig utgivare: Lars Gråbergs.
1 Orientering 3
1.1 Samlingsdokument 3
1.2 Om detta dokument 3
1.3 Begränsningar 3
1.4 Kommentar om använda referenser 3
2 Teoretisk bakgrund om gasexplosion 4
2.1 Introduktion 4
2.2 Brandfarliga gaser 5
2.3 Relevanta begrepp 6
2.3.1 Förbränning 6
2.3.2 Gasexplosion 7
2.3.2.1 Olika typer av gasexplosion 7
2.3.2.2 Innesluten volym 7
2.3.2.3 Delvis innesluten volym 8
2.3.2.4 Ej innesluten volym 8
2.3.3 Flamhastighet, förbränningshastighet och flödeshastighet 8
2.3.4 Turbulens 8
2.4 Primära mekanismer för en gasexplosion 9
2.4.1 Orientering 9
2.4.2 Vad är en gasdeflagration? 9
2.4.3 Effekt av flamhastighet 10
2.4.4 Effekt av inneslutning 11
2.4.5 Effekt av blockering 11
3 Beräkningsmodeller 14
3.1 Principiella undergrupper 14
3.1.1 Orientering 14
3.1.2 Korrelationsmodeller 14
3.1.3 Fenomenologiska modeller 14
3.1.4 Numeriska modeller 15
3.2 Beskrivning av olika korrelationsmodeller 15
3.2.1 Ekvivalent TNT-metod 15
3.2.2 TNO multienergimetod 16
3.2.3 BST-metod 19

-- 1 of 46 --

Beräkning av impulsbelastad konstruktion
2 (46)
B06-105
2017-12-18
4 Empiriska samband för TNO Multienergimetod 21
4.1 Orientering 21
4.2 Styrkefaktor och skalade parametrar 21
4.3 Positiv fas 23
4.3.1 Tryck-tidssamband 23
4.3.2 Oreflekterad stötvåg 23
4.3.3 Reflekterad stötvåg 27
4.4 Negativ fas 29
5 Bestämning av styrkefaktor i TNO Multienergimetod 30
5.1 Påverkande faktorer 30
5.2 Riktlinjer i litteraturen 32
5.2.1 AICE (1994) 32
5.2.2 Kinsella (1993) 33
5.2.3 Pierorazio et al. (2005) 33
5.2.4 Mélani et al. (2009) 34
5.2.5 Eggen (1998) 36
5.3 Kommentar om riktlinjer 37
5.3.1 AICE (1994) 37
5.3.2 Kinsella (1993) och Mélani et al. (2009) 37
5.3.3 Pierorazio et al. (2005) 38
5.3.4 Eggen (1998) 39
5.4 Föreslagen metodik 40
5.5 Flera explosioner samtidigt 41
6 Referenser 43
Bilaga A Bilaga – Parametrar i Eggen (1998) 45
A.1 Maximalt tryck 45
A.2 Riktlinjer för beräkning av parametrar 45
A.2.1 Utbredningssträcka lf 45
A.2.2 Diameter d hos hinder 46

-- 2 of 46 --

Beräkning av impulsbelastad konstruktion
3 (46)
B06-105
2017-12-18
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 Om detta dokument
I detta dokument samlas teoretisk bakgrundsinformation kopplat till gasexplosion. Ett antal olika
beräkningsmodeller berörs varav en – TNO Multienergimetod – beskrivs mer i detalj med anvis-
ningar om hur last från en gasexplosion kan uppskattas. För en mer koncentrerad sammanställning
av beräkningsanvisningar för gasexplosion i det fria hänvisas till dokument B02-121.
Innehållet i detta dokument har till övervägande del sitt ursprung från ett arbete utfört av författaren
för Ringhals AB under perioden 2011 – 2012 och här presenterat material används med Ringhals
tillåtelse.
1.3 Begränsningar
Explosioner är komplexa fenomen och inverkan av den geometriska omgivningen kan medföra
betydande förändringar på resulterande lastnivåer. Detta dokument syftar till att ge grundläggande
anvisningar för kontroll av gasexplosionslaster, varför omgivningens inverkan på resulterande last
enbart behandlas med principiella beskrivningar samt relevanta referenser. För en genomgång av
fenomenet luftstötvåg och dess egenskaper samt olika stötvågsparametrar hänvisas till Johans-
son (2012) samt Johansson och Laine (2012).
Lastmässigt behandlas här enbart den resulterande luftstötvågen från en gasexplosion. Den
spridning av ett gasmoln eller den värmestrålning som uppstår vid en gasexplosion behandlas inte
här. För mer information om detta hänvisas istället till Fischer et al. (1998).
1.4 Kommentar om använda referenser
För delar berörande beskrivningar av gasexplosioner har till stor del utgåtts från Gexcon (1992). En
bidragande anledning till detta är att denna information även finns enkelt tillgänglig via Gexcons
hemsida i form av en utmärkt skriven handbok för gasexplosioner – något som även bedöms kunna
vara till nytta för en användare av detta dokument.

-- 3 of 46 --

Beräkning av impulsbelastad konstruktion
4 (46)
B06-105
2017-12-18
2 Teoretisk bakgrund om gasexplosion
2.1 Introduktion
En gasexplosion är en möjlig konsekvens av ett gasutsläpp av en brandfarlig gas i atmosfären med
efterföljande antändning. Ett tidigt tillvägagångssätt för att hantera en sådan händelse var att
likställa den i gasexplosionen frisläppta energimängden med den från en ekvivalent mängd
sprängämne och bestämma resulterande laster från detta – så kallad ekvivalent TNT-metod. Ett
sådant tillvägagångssätt har länge betraktats som en acceptabel metod och är också vad den i
IVA (1981) presenterade beräkningsmetoden är baserad på. Det har dock konstaterats, av exempel-
vis van den Berg (1985), att explosionsbeteendet hos ett gasmoln inte enbart bestäms av gasbland-
ningen i sig utan framförallt av andra, externa faktorer. Utgående från teoretiska och experimentella
studier har det visats att kraftfulla explosioner normalt sätt inte kan förväntas från ett gasmoln på ett
öppet fält. För att en kraftfull explosion ska ske krävs antingen en stark antändningskälla eller
omfattande störningar av den antända gasens utbredningsmöjligheter. Utgående från detta har det
också konstaterats att ekvivalent TNT-metod inte är att rekommendera för att beskriva lasteffekten
av en gasexplosion.
IVA (1981) utarbetades efter att det under 1970-talet internationellt inträffat flera svåra olyckor
kopplat till bland annat gasexplosion. En sammanställning av sådana olyckor återfinns i till exempel
IVA (1981), Gexcon (1992) eller CCPS (2010). Försvarets Forskningsanstalt (FOA), utgav 1998 en
handbok, Fischer et al. (1998), som redovisade aktuellt kunskapsläge om bland annat spridning
samt explosion av brandfarliga gaser. Ett syfte med denna handbok var att ersätta IVA (1981) men,
vad gäller explosioner, har implementeringen inte varit tillräckligt framgångsrik och användandet
av IVA (1981) var åtminstone fram till cirka 2011 fortfarande utbrett i Sverige. FOA:s handbok
behandlar bland annat verkan av gasmolnsexplosioner och den däri beskrivna modellen, se
Forsén (1998), baseras på en av van den Berg (1985) presenterad metod – TNO multienergimetod –
som bättre beaktar den fysikaliska bakgrunden till en gasexplosion. Anvisningarna i Forsén (1998)
är dock relativt knapphändiga varför det är svårt för en användare att utgående från dessa bestämma
resulterande lastparametrar från en gasexplosion. Vidare har Intresseföreningen för Processäkerhet
(IPS) via Lamnevik (2005) gett ut dokumentation med anvisningar om hur last från gasexplosion
kan bestämmas och även i denna dokumentation utgås från TNO Multienergimetod.
Syftet med detta dokument är att ge en övergripande bakgrundsinformation om vad som påverkar
lasten från en gasexplosion samt att på ett pedagogiskt sätt beskriva hur last från en gasexplosion
approximativt kan bestämmas via, den av Forsén (1998) rekommenderade, TNO multienergimetod.
Det är viktigt att komma ihåg att detta är en förenklad metod för att approximativt bestämma
resulterande last från en gasexplosion. Metoden lämpar sig också bäst för att skapa en övergripande
bild av resulterande laster men ska inte ses som ett precist verktyg för detta. För mer precisa
prediktioner om resulterande last krävs mer detaljerade beräkningsverktyg så som kortfattat
behandlas i avsnitt 3. Med anledning av detta är det också viktigt att här presenterad metod används
med försiktighet och utgående från ett konservativt synsätt. Det är värt att poängtera att det råder
större osäkerhet i metod för gasexplosion än vad det gör för metod med explosion från sprängämne.

-- 4 of 46 --

Beräkning av impulsbelastad konstruktion
5 (46)
B06-105
2017-12-18
2.2 Brandfarliga gaser
Enligt Almgren (2007) definieras brandfarliga gaser som ämnen som är gasformiga vid 20 °C och
som har ett brännbarhetsområde i en blandning av gas och luft. Brännbarhetsområdet hos en gas kan
även benämnas som dess explosionsområde och syftar på den koncentration – en undre och en övre
gräns – inom vilken gasen är brännbar. Befinner sig blandningen av gas och luft utanför dessa
gränser är den inte brännbar. Den mest effektiva förbränningen fås när gas och luft är stökiometriskt
blandade, se avsnitt 2.3.1.
Brännbarhetsområdet är specifikt för varje gas och varierar med syrekoncentration, temperatur och
tryck. I Tabell 2.1 sammanställs olika brandfarliga gaser med brännbarhetsområde, stökiometrisk
koncentration samt energiinnehåll. Informationen är främst hämtad från Almgren (2007) och för
utförligare beskrivning hänvisas också till denna. Tungheten hos gaserna listade i Tabell 2.1 varie-
rar men för samtliga utom vätgas gäller att den är större än för luft. Detta innebär att vätgas kommer
att stiga medan övriga gaser kommer sjunka, något som kan ha betydelse vid utvärdering av
potentiella explosionskällor.
Tabell 2.1 Brandfarliga gaser med brännbarhetsområde, stökiometrisk koncentration samt
energiinnehåll. Angivet brännbarhetsområde gäller vid 20 °C samt normalt lufttryck
och syrekoncentration. Baserat på Almgren (2007) och Forsén (1998).
Gas Kemisk Brännbarhetsområde 1) Stök. konc. Energiinnehåll
beteckning Undre [%] Övre [%] [%] [MJ/m3] 2) [MJ/m3] 3)
Vätgas H2 4,0 77,0 30 10,2 3,1
Metan CH4 5,0 15,0 9,5 34 3,2
Etan C2H6 3,0 15,5 - -
Propan C3H8 2,1 9,5 4,0 86,4 3,5
Butan C4H10 1,9 8,5 3,1 -
Eten, Etylen C2H4 2,7 34,0 6,5 -
Propen C3H6 2,0 11,7 4,5 81,5 3,7
Etyn, Acetylen C2H2 1,8 82,0 7,7 51 3,9
1) Avser volymprocent.
2) Avser energiinnehåll i 100 % av aktuell gas.
3) Avser energiinnehåll vid stökiometrisk koncentration.

-- 5 of 46 --

Beräkning av impulsbelastad konstruktion
6 (46)
B06-105
2017-12-18
2.3 Relevanta begrepp
2.3.1 Förbränning
Förbränning är en kemisk reaktion där ett bränsle reagerar med ett oxidationsmedel1 under bildning
av värme. I ekvation (2.1) exemplifieras detta med förbränning av metan (CH4) i luft (här represen-
terat av O2), vilket resulterar i bildandet av koldioxid (CO2) och vatten (H2O) samt värme som
genereras vid transformation av kemisk bunden energi.
CH4 + 2O2 → CO2 + 2H2O + värme (2.1)
Förbränning sker vanligen bara i en relativt smal zon, reaktionszon, som vanligen bara är några
millimeter bred och kan för gaser ske på två olika sätt:
• Diffusionsflamma: Gas och luft blandas, diffunderar, under förbränningsprocessen. Den typ
av flammor som fås vid exempelvis en skogsbrand är normalt av den här typen.
• Förblandad flamma: Gas och luft förblandas innan förbränning och gaskoncentrationen
måste då vara inom ett brännbarhetsområde för att förbränning ska initieras. Detta fall medför
också generellt att gasen brinner snabbare.
Vid förbränning skapas värme och en ökad gasvolym. Volymökningen ger upphov till en tryck-
ökning som pressar undan den omgivande luften – en expansion sker. En expansion medför i sin tur
att samma energiinnehåll inryms i en större volym, vilket medför att det genererade trycket minskar
igen. Om tryckökningen dock sker mycket snabbare än tryckminskningen – på grund av snabb
förbränning och/eller förhindrade expansionsmöjligheter – kan detta resultera i en explosion.
För en fullständig förbränning krävs en stökiometrisk blandning av ingående gaser. Detta innebär
att förhållandet mellan mängden ingående reaktanter är sådant att inga restprodukter fås av någon
reaktant. I fallet med metan och luft innebär således en stökiometrisk blandning att det för varje
metanmolekyl (CH4) finns exakt två syremolekyler (O2) i enlighet med ekvation (2.1).
1 En oxidation är en kemisk reaktion vid vilken ett ämne avger en eller flera elektroner. För en gasexplosion utgörs det
oxiderande ämnet vanligtvis av luftens syre.

-- 6 of 46 --

Beräkning av impulsbelastad konstruktion
7 (46)
B06-105
2017-12-18
2.3.2 Gasexplosion
2.3.2.1 Olika typer av gasexplosion
En gasexplosion definieras som en förbränningsprocess av ett förblandat gasmoln som ger upphov
till en explosion. Gasexplosioner kan exempelvis uppstå inuti processutrustning eller rör, i bygg-
nader, öppna processområden eller i områden fria från inneslutning.
Styrkan hos en gasexplosion beror på den omgivning som gasen innesluter, alternativt innesluts i.
Enligt Gexcon (1992) är det därför vanligt att klassificera en gasexplosion som något av följande:
• Innesluten gasexplosion: T.ex. inuti behållare, rör, kanaler eller tunnlar.
• Delvis innesluten gasexplosion: T.ex. i byggnader eller offshoremoduler.
• Ej innesluten gasexplosion: T.ex. i processanläggningar och andra fria utrymmen.
Ovanstående klassificeringar är inte strikt definierade och i ett verkligt fall kan det vara svårt att
göra en sådan klassificering. Exempelvis kan en ej innesluten gasexplosion i en processanläggning
även involvera delvis inneslutna utrymmen som gasen läckt in i.
Enligt Gexcon (1992) är det ingen egentlig skillnad mellan en gasmolnsexplosion (vapour cloud
explosion – VCE) och en delvis eller ej innesluten gasexplosion. Här används därför termen gas-
explosion även när det handlar om en gasmolnsexplosion.
2.3.2.2 Innesluten volym
Med innesluten volym syftas på slutna tankar, processutrustning, rör, kulvertar, avloppssystem eller
slutna rum. En sådan omgivning innebär att en expansion av gasen förhindras, vilket kan medföra
en kritisk tryckökning. Typiskt för explosioner i denna omgivning är att förbränningen inte behöver
vara snabb för att det ska kunna skapas en kraftfull explosion.
Det skiljs på olika typer av inneslutning:
• Endimensionell (1D) inneslutning: I rör och kulvertar där resulterande förbränningsvåg
uppträder som en plan våg.
• Tvådimensionell (2D) inneslutning: I ett utrymme mellan två plan där resulterande förbrän-
ningsvåg uppträder som en cylindrisk våg.
• Tredimensionell (3D) inneslutning: I ett kubiskt format rum där resulterande förbrännings-
våg uppträder som en sfärisk våg.
Gasexplosioner i innesluten volym hanteras inte vidare i denna rapport.

-- 7 of 46 --

Beräkning av impulsbelastad konstruktion
8 (46)
B06-105
2017-12-18
2.3.2.3 Delvis innesluten volym
Exempel på en delvis innesluten volym är utrymmen enligt avsnitt 2.3.2.2 men där möjlighet till
ventilation finns. Delvis slutna utrymmen förhindrar en fri utbredning men bildar ett mindre farligt
fall än en fullständigt innesluten volym eftersom möjlighet fortfarande finns att ventilera bort delar
av de förbränningsgaser som ger upphov till det ökande trycket. Storlek och placering av ventila-
tionsmöjligheter är av stor betydelse för att begränsa det resulterande trycket.
2.3.2.4 Ej innesluten volym
Storskaliga försök har visat att ett gasmoln som befinner sig på en öppen yta utan någon form av
blockerande hinder och som antänds av en svag energikälla enbart kommer att generera små
övertryck vid förbränning, en så kallad gasmolnsbrand (flash fire). Termen ej innesluten explosion
syftar på en explosion som inträffar med en sådan förutsättning, något som skulle vara möjligt vid
en öppen yta på exempelvis ett industriområde. På ett sådant område kan det dock även finnas
lokala områden som är delvis inneslutna och vid händelse av en gasexplosion är det dessa områden
som kommer att ge upphov till höga explosionstryck.
Om antändning sker med en stor energikälla, exempelvis ett sprängämne, kan dock en detonation
(kraftigaste varianten av explosion) inträffa. I ett sådant fall kan mycket höga tryck genereras även
om det saknas någon form av inneslutning eller blockering. Med tanke på den stora energimängd
som erfordras är det enligt CCPS (2010) dock mycket osannolikt att något sådant inträffar och i
olyckssammanhang är detonation av ej innesluten gas också mycket ovanligt.
2.3.3 Flamhastighet, förbränningshastighet och flödeshastighet
För en utbredande flamma finns ett antal olika begrepp som beskriver dess hastighet. Flamhasti-
gheten definieras som flamfrontens hastighet i relation till en stillastående betraktare. Framför flam-
fronten råder en flödeshastighet orsakad av det generella flödet av obrända gaser som pressas undan
av flamfronten. Flamfrontens relativa hastighet, jämfört med den generella flödeshastigheten,
betecknas som förbränningshastighet. Relationen mellan dessa parametrar kan därmed tecknas som
flamhastighet = förbränningshastighet + generell flödeshastighet (2.2)
2.3.4 Turbulens
I fluiddynamik delas flödet in i laminärt eller turbulent flöde. Laminärt flöde innebär att flödet sker
i ordnade lager medan turbulent flöde sker oordnat med stor virvelintensitet. Turbulens uppstår ur
instabiliteter i det laminära flödet och är en effektiv mekanism för transport och blandning av olika
egenskaper såsom värme och kemiska substanser. Detta medför även att turbulens ökar förbrän-
ningshastigheten i en gas, se avsnitt 2.4.2. Turbulensens instabilitet medför att även små störningar
kan ge upphov till betydande ändringar av flödet, vilket gör det svårt att förutspå vilka konse-
kvenser som en förändring av inverkande parametrar kan få.

-- 8 of 46 --

Beräkning av impulsbelastad konstruktion
9 (46)
B06-105
2017-12-18
2.4 Primära mekanismer för en gasexplosion
2.4.1 Orientering
I detta avsnitt ges en övergripande beskrivning av de primära mekanismer som inverkar på styrkan
hos en gasexplosion. Det görs här ingen ansatts att vara heltäckande – innehållet syftar istället
främst till att ge läsaren en grov bild av vilka parametrar som har inverkan på styrkan hos en gas-
explosion, varför det är så samt ungefär vilken betydelse de har. Mycket av materialet i denna del
har hämtats från och inspirerats av Gexcon (1992). För djupare information om här genomgånget
material hänvisas också till denna.
Förbränningshastighet och explosionstryck är starkt beroende av gasens sammansättning och av de
geometriska förutsättningarna i och kring gasmolnet. Att förutsäga flamhastighet och explosions-
tryck för ett givet fall är en komplex uppgift även om parametrar såsom gasmolnstorlek, gaskoncen-
tration och antändningspunkt är kända. En viktig orsak till detta är att även till synes små ändringar
av givna parametrar kan ha stor inverkan på styrkan hos den resulterande explosionen.
2.4.2 Vad är en gasdeflagration?
Deflagration är den vanligaste formen av flamutbredning i en gasexplosion. En deflagration kan
definieras som en explosion där förbränningsvågen fortplantar sig med en hasighet som är lägre än
ljudhastigheten hos den obrända gasen framför vågen. I en gasexplosion kan flamhastigheten
variera från några enstaka m/s till uppåt 1000 m/s, där flamutbredningens mekanism skiljer sig
betänkligt mellan olika hastighetsregimer.
En gas som antänds av en svag antändningskälla – exempelvis en gnista eller en het yta – startar
som en laminär flamma som, enligt Gexcon (1992), sprider sig via diffusion av värme och massa
med en hastighet i storleksordningen 3 - 4 m/s. När flamfronten interagerar med omgivningen,
exempelvis rör eller strukturer, uppstår ett turbulent flöde som gör att flamfronten veckas på ett
sådant sätt att aktuell gränsyta mellan bränd och obränd gas ökar, se Figur 2.1a. Flamfrontens ökade
yta medför i sin tur ökad diffusion, Figur 2.1b, vilket i sin tur resulterar i en ökad
förbränningshastighet och därmed också ökat tryck.
Figur 2.1 Schematisk illustration av veckad flamfront vid turbulent flöde. Från Gexcon (1992).

-- 9 of 46 --

Beräkning av impulsbelastad konstruktion
10 (46)
B06-105
2017-12-18
När en flamma sprider sig genom en gas är det två mekanismer som bidrar till tryckuppbyggnad:
• hög förbränningshastighet
• förbränning i en innesluten volym
En explosion uppstår när en förbränning är så snabb att ett övertryck skapas. Detta övertryck är
resultatet av samspelet mellan två aspekter – tryckuppbyggnad av förbränning samt tryckminskning
på grund av expansion. Av detta inses att om möjligheten till expansion förhindras så blir effekten
också ett högre tryck. Sådana expansionshindrande randvillkor ger upphov till ett ökat flöde, vilket
ytterligare bidrar till att öka förbränningshastigheten, och därmed även tryckuppbyggnaden. Går
förbränningen tillräckligt snabbt kommer nödvändig expansion inte hinnas med och en kraftfull
explosion kan bli resultatet.
2.4.3 Effekt av flamhastighet
En ökad flamhastighet resulterar i ett ökat tryck. Vidare medför en ökad inneslutningsgrad att ett
högre tryck genereras vid samma flamhastighet. Detta illustreras i Figur 2.2 där maximalt övertryck
som funktion av flamhastighet visas för en plan (1D) och en sfärisk (3D) utbredningsvåg. Orsaken
till denna skillnad är att gasen vid en plan utbredning inte har samma expansionsmöjlighet, varför
ett högre tryck fås vid samma flamhastighet.
Flamhastighet [m/s]
sfärisk våg
plan våg
Övertryck [bar]
10 100 1000
10
1
0,1
0,01
Figur 2.2 Samband mellan maximalt övertryck och flamhastighet för en plan och sfärisk
utbredningsvåg. Baserad på Gexcon (1992).

-- 10 of 46 --

Beräkning av impulsbelastad konstruktion
11 (46)
B06-105
2017-12-18
2.4.4 Effekt av inneslutning
Av avsnitt 2.4.3 framgår att tryckuppbyggnaden ökar när gasens fria expansion förhindras. Detta
innebär även att det inte är nödvändigt med en snabb flamutbredning för att erhålla en kraftfull
explosion om denna inträffar i en sluten volym med ingen eller liten möjlighet till expansion.
Via öppningar i den inneslutna volymen är expansion av gasen dock möjlig, vilket medför att
explosionstrycket minskar. Hur mycket beror framförallt på gasens flamhastighet samt
öppningarnas storlek och placering. Allmänt gäller att desto större öppningar samt ju närmare de är
placerade explosionskällan desto effektivare är de att begränsa det resulterande trycket.
I avsnitt 2.4.3 konstateras att en sfärisk utbredningsvåg resulterar i lägre övertryck än en plan våg.
Eftersom det i utrymmen med avlånga geometrier finns en ökad risk att en plan utbredningsvåg blir
dominerande är det således mer gynnsamt med ett kubiskt format utrymme än ett avlångt sådant.
Vidare medför en sådan kubisk utformning att avståndet till en eventuell ventilerande öppning
generellt sett är kortare än vad fallet skulle vara i en avlång geometri.
Av detta inses att om möjligheten till expansion förhindras så blir effekten också ett högre tryck.
Vidare ger sådana expansionshindrande randvillkor upphov till ett ökat flöde, vilket i sin tur
ytterligare ökar förbränningshastigheten, och därmed tryckuppbyggnaden.
2.4.5 Effekt av blockering
I avsnitt 2.4.2 har det konstaterats att förbränningshastigheten ökar vid ett ökat turbulent flöde.
Turbulens i sin tur uppstår vid den störning som blir när flamfronten interagerar med omgivningen.
Turbulensen i sig bidrar således till ökad förbränningshastighet, vilket i sin tur bidrar till ökat tryck
och expansion och därmed även ökat flöde, såsom schematiskt illustreras i Figur 2.3. Förbrännings-
hastigheten och turbulensen triggar således varandra och vid upprepade störningar ökar dessa
stegvis mer och mer. Detta innebär att ju fler störningar som omgivningen ger upphov till desto
större turbulens fås, och därmed även ökad förbränningshastighet och tryckuppbyggnad, i den
exploderande gasen.
Gasflöde
interagerar med
hinder
Förbränning av
gas Expansion
Ökat tryck
Turbulens
genereras
Turbulens ökar
förbränning
Figur 2.3 Schematiskt flödesschema av hur förbränningen, och därmed trycket, trycket ökar
vid upprepad turbulens. Baserad på Gexcon (1992).

-- 11 of 46 --

Beräkning av impulsbelastad konstruktion
12 (46)
B06-105
2017-12-18
Av Gexcon (1992) framgår att blockeringsgrad och antal blockeringar är två parametrar som har
stor inverkan på det resulterande trycket vid en gasexplosion. Ökad blockering resulterar i högre
tryck. Vidare gäller vid konstant blockeringsgrad att större tryck fås när blockeringen utges av
många små hinder jämfört med få men stora hinder. Av Gexcon (1992) framgår även att antalet
hinder har större tryckhöjande effekt än storleken på blockeringsgraden.
Vid ökad inneslutningsgrad – sfärisk (3D) → cylindrisk (2D) → plan (1D) vågutbredning – kvarstår
den effekt som beskrivs i avsnitt 2.4.4, dvs. att P1D > P2D > P3D. Dock finns indikationer från försök
på att inneslutningens inverkan minskar med ökande blockeringsgrad. Detta beror på att expan-
sionsmöjligheten minskar med ökande blockeringsgrad, något som även sker vid ökad inneslutning.
Vidare inverkar blockeringens utformning på det resulterande trycket – ett skarpt objekt ger upphov
till större turbulens, och därmed högre explosionstryck, än ett runt objekt. Dock synes effekten av
objektens utformning vara viktigare vid låg blockeringsgrad än vid hög sådan.
För blockeringsgrad används i litteraturen begreppen areablockeringsgrad (ABR = area blockage
ratio eller enbart BR = blockage ratio)
tot
blo
A A
A
ABR 	
	
(2.3)
samt volymblockeringsgrad (VBR = volume blockage ratio)
tot
blo
V V
V
VBR 	
	
(2.4)
där Ablo och Vblo anger blockerad area respektive volym samt Atot och Vtot anger total area respektive
volym. Beteckningarna λA och λV används i detta dokument för att ange blockeringsgrad.
Förutom blockeringsgrad är det även av vikt hur blockeringarna samverkar med varandra, se
Figur 2.4. En alternerande placering av blockeringar orsakar högst tryck meden en centralt placerad
kanal ger lägst tryck.
A
B
C
Figur 2.4 Inverkan av blockeringens placering. Baserad på Gexcon (1992).

-- 12 of 46 --

Beräkning av impulsbelastad konstruktion
13 (46)
B06-105
2017-12-18
I Figur 2.5 sammanfattas resulterande övertryck från försök med olika blockeringsgrad och antal
blockeringar. Försöken utgjordes av en kubisk ”behållare” med måtten 3 x 3 x 3 m bestående av
golv och två väggar. Ett hörn utformades med hinder bestående av rör med varierande antal och
storlek samt en stökiometrisk blandning av propan och luft. Av Figur 2.5 framgår studerade
konfigurationer samt resulterande övertryck. Av detta framgår blockeringsgradens betydelse men
framförallt att antalet blockerande rör var av stor vikt – vid samma blockeringsgrad fås större tryck
när blockeringen utges av många men små hinder jämfört med få men stora hinder.
d Volymblockeringsgrad, λV
[mm] 0,1 0,2 0,5
164 6 x 6 9 x 9 15 x 15
410 3 x 3 4 x 4 6 x 6
820 - 2 x 2 3 x 3
Volymblockeringsgrad, λV
0,5	0,2	0,1
10
1
0,1
0,01	
Övertryck [bar]
0,001
d = 820
d = 410
d = 164
Figur 2.5 Inverkan av blockeringsgrad och antal blockeringar på resulterande övertryck.
Baserad på Gexcon (1992).

-- 13 of 46 --

Beräkning av impulsbelastad konstruktion
14 (46)
B06-105
2017-12-18
3 Beräkningsmodeller
3.1 Principiella undergrupper
3.1.1 Orientering
Under de senaste årtiondena har ett antal beräkningsmodeller utvecklats för att bedöma vilka laster
som uppstår vid en gasexplosion. Dessa kan indelas i nedanstående undergrupper och beskrivs
övergripande i avsnitt 3.1.2 till avsnitt 3.1.4:
• korrelationsmodeller
• fenomenologiska modeller
• numeriska modeller
Av dessa är det vanligt förekommande att använda så kallade korrelationsmodeller vid riskbedöm-
ning av gasexplosioner inom exempelvis processindustrin. Det är också denna modelltyp som när-
mare beskrivs i denna rapport. För vidare information om specifika fenomenologiska och numeriska
modeller hänvisas till exempelvis Lea och Ledin (2002) samt Park och Lee (2008).
3.1.2 Korrelationsmodeller
Korrelationsmodeller är den enklaste typen av beräkningsmodeller och utgörs av experiment-
baserade, empiriska modeller med användning av skallagar. Modelltypen är snabb samt är, i jämfö-
relse med övriga modelltyper, lättanvänd och kan därför med fördel användas för att ge en övergri-
pande information om vilka laster som kan uppstå vid en gasexplosion.
I litteraturen benämns i princip tre huvudtyper av korrelationsmodeller som används idag:
• TNT-ekvivalent metod
• TNO multienergimetod
• BST-metod
Det finns även andra varianter men här begränsas antalet modeller till dessa. För övergripande
information om andra typer av korrelationsmodeller hänvisas till Lea och Ledin (2002), Park och
Lee (2008) samt CCPS (2010). Korrelationsmodeller motsvarar en enkel och övergripande modell
och ovan listade metoder beskrivs vidare i avsnitt 3.2.
3.1.3 Fenomenologiska modeller
Fenomenologiska modeller är förenklade modeller vilka strävar efter att beskriva den huvudsakliga
fysikaliska processen i en gasexplosion. Den största förenklingen i dessa modeller är den ideali-
serade geometrin som används för att representera den verkliga geometrin i ett givet fall. Gasmol-
nets fysikaliska förbränningsförlopp kan beskrivas med empiriska eller teoretiska data och
fenomenologiska modeller kan sägas utgöra ett mellanting mellan korrelationsmodeller och
numeriska modeller. Enligt Lea och Ledin (2002) är beräkningstiden kort för denna modelltyp och

-- 14 of 46 --

Beräkning av impulsbelastad konstruktion
15 (46)
B06-105
2017-12-18
de lämpar sig därför väl till att undersöka ett stort antal olika scenarier för att identifiera fall som
kan vara av intresse att undersöka närmare med nyttjande av numeriska modeller enligt
avsnitt 3.1.4.
Fenomenologiska modeller beskrivs inte närmare i detta dokument.
3.1.4 Numeriska modeller
Numeriska modeller baseras på så kallad beräkningsbar strömningsdynamik – (Computational
Fluid Dynamics – CFD). Denna modelltyp motsvarar den finita elementmetod (FEM) som är
vanligt förekommande inom strukturmekaniken, men med den skillnaden att CFD numeriskt löser
de strömningsekvationer som råder i bland annat en explosionsprocess. I sådana beräkningar är det
exempelvis möjligt att beakta gasens sammansättning, omgivningens geometri samt antändnings-
punkt och framtagna lösningar innehåller en stor mängd information om den resulterande
explosionen.
Denna typ av modeller utgör det kraftfullaste verktyget för simulering av gasexplosioner och det
finns på marknaden ett stort antal program med varierande tillämpningar. En nackdel med denna
typ av modeller är dock att de ofta är dyra att utföra, medför lång beräkningstid samt att de kräver
en mycket hög kunskap hos användaren för att användas på rätt sätt.
Numeriska modeller beskrivs inte närmare i detta dokument.
3.2 Beskrivning av olika korrelationsmodeller
3.2.1 Ekvivalent TNT-metod
Ekvivalent TNT-metod är den traditionella metoden för att bestämma lasteffekten från en
gasexplosion. Metoden är vanligt förekommande och förutsätter att en gasexplosion, via en
energiomvandling, kan betraktas som en ekvivalent TNT-explosion. Metoden ligger till grund för
de rekommendationer som ges i IVA (1981), vilken är vanligt förekommande vid dimensionering
mot explosioner inom bland annat Sveriges processindustri.
I ett sådant fall bestäms först gasens totala förbränningsenergi från ingående gasmassa mgas och
energiinnehåll E’gas. Denna energimängd multipliceras med en effektivitetsfaktor
, vilken beaktar
gasexplosionens ineffektivitet. Därefter omvandlas denna reducerade energimängd till en ekvivalent
mängd TNT mTNT2 i enlighet med
TNT
gas	gas
TNT E
E	m
m '
'	
	
	
(3.1)
2 I litteraturen betecknas normalt mängden TNT som W (weight) men här används beteckningen mTNT (massa) för att
vara konsekvent med övriga beteckningar.

-- 15 of 46 --

Beräkning av impulsbelastad konstruktion
16 (46)
B06-105
2017-12-18
där E’TNT = 4,6 MJ/kg motsvarar energiinnehållet i TNT. Utgående från detta kan aktuella stötvågs-
parametrar därefter bestämmas på samma sätt som vid en detonation av en TNT-laddning, se
exempelvis Johansson och Laine (2012) eller dokument B02-111.
Fördelar
• Enkel metodik. Information om resulterande stötvågsparametrar från en TNT-explosion är väl
dokumenterat.
• Ger acceptabla resultat på långa avstånd från explosionscentrum.
Nackdelar
• Problem att välja lämplig effektivitetsfaktor , för en given situation eftersom denna beror på
flera olika parametrar såsom gastyp och omgivande geometri. Anvisningar anpassade efter
olika situationer saknas.
• Metoden överskattar övertrycket från en gasexplosion på korta avstånd, se exempelvis Park
och Lee (2009).
• Egenskaperna hos den resulterande stötvågen skiljer sig mellan en gasmolnsexplosion och en
TNT-explosion, se Lea och Ledin (2002). En TNT-explosion har högre övertryck men kortare
varaktighet än en gasexplosion av motsvarande energimängd.
Baserat på för- och nackdelar listade ovan har det i litteraturen – exempelvis Gexcon (1992), Lea
och Ledin (2002), Jiang et al. (2001) och Beccantini et al. (2007) – konstaterats att ekvivalent TNT-
metod inte är att rekommendera för att beskriva lasteffekten av en gasexplosion. Detta gäller
särskilt nära explosionscentrum, där ekvivalent TNT-metod påtagligt kan överskatta övertrycket.
Med anledning av ovanstående kan konstateras att ekvivalent TNT-metod är olämplig att använda
för att uppskatta den resulterande lasten av en gasexplosion.
3.2.2 TNO multienergimetod
TNO multienergimetod – i vissa sammanhang även benämnd som enbart multienergimetod – är en
metod framtagen på TNO i Holland, van den Berg (1985). Metoden bygger på att en gasexplosion
består av ett antal delexplosioner där en kraftfull explosion enbart kan initieras i de delar av molnet
där gasens expansionsmöjligheter är begränsade, dvs. inom helt eller delvis inneslutna volymer
(confined volume) eller i blockerade områden (congested volume). En avgörande skillnad gentemot
ekvivalent TNT-metod, beskriven i avsnitt 3.2.1, är således att explosionen kan bestå av flera
oberoende delar samt att inte hela gasmolnets energimängd används för att bedöma den
huvudsakliga explosionens styrka. Istället är det enbart de delar av gasmolnet som inryms i de
områden som betraktas som explosionsbenägna som används för att bedöma styrkan hos en kraftfull
explosion.
Detta illustreras i Figur 3.1 där ett gasmoln spritt ut sig inom det markerade området. I figuren mar-
kerar A, B och C områden med någon form av inneslutning och/eller blockering i en sådan omfatt-
ning att de bedöms kunna initiera an kraftfull explosion. Område A och B innesluts av gasmolnet
och kan därför vardera generera en explosion medan område C är beläget utanför gasmolnet och
därför inte bidrar till detta. Den explosionsalstrande energimängden baseras på volymen i område A
respektive B och kan generera två av varandra oberoende explosioner med olika styrka och med
explosionscentrum centriskt placerad inom respektive delvolym. Övriga delar av gasmolnet, utanför

-- 16 of 46 --

Beräkning av impulsbelastad konstruktion
17 (46)
B06-105
2017-12-18
område A och B, bidrar dock inte till energimängden i dessa båda explosioner. Därmed begränsas
eventuella explosioners tillgängliga energimängd till det minsta av hur stor mängd av gasmolnet
som ryms i en explosionsinitierande volym eller av gasmolnets aktuella storlek.
B
A
gasmoln
stötvågsfrontC
Figur 3.1 Schematisk illustration av TNO multienergimetod. Ett gasmoln täcker markerat
område. Område A och B innesluts av gasmolnet och kan båda ge upphov till varsin
explosion.
Beräkningsmodellen i TNO multienergimodell baseras på att framtagen gasvolym inom respektive
område (exempelvis område A eller B i Figur 3.1) omvandlas till en ekvivalent hemisfär (halvsfär)
innehållande samma volym. Gasen antas bestå av en homogen, stökiometrisk blandning av gas och
luft med en förbränningsenergi3 som van den Berg (1985) anger till E’gas = 3,5 MJ/m3, ett värde
som kan jämföras med det stökiometriska energiinnehållet hos brandfarliga gaser enligt Tabell 2.1.
r0
ekvivalent hemi-
sfäriskt gasmoln
explosions-
centrum r
stötvågsfront
Figur 3.2 Schematisk illustration av en ekvivalent hemisfärisk gasvolym som används i TNO
multienergimetod, där r0 betecknar radien hos den ekvivalenta volymen.
Utgående från numeriska simuleringar har en grupp om tio samband för oreflekterat övertryck samt
varaktighet som funktion av energiskalat avstånd tagits fram, se Figur 3.3. Den initiala styrkan hos
explosionen har i dessa simuleringar varierats och beskrivs med en styrkefaktor på mellan 1 (svag
explosion) till 10 (kraftig explosion). I Figur 3.3 indikeras även det principiella utseendet hos den
resulterande tryckvågen som en funktion av vilken styrkefaktor och energiskalat avstånd som råder.
3 Denna energimängd motsvarar förbränningsenergin hos en genomsnittlig stökiometrisk blandning av kolväten och luft
med koncentration av 0,1 kg/m3 och används i metoden oberoende av aktuell gasblandning, van den Berg (1985).

-- 17 of 46 --

Beräkning av impulsbelastad konstruktion
18 (46)
B06-105
2017-12-18
Figur 3.3 Samband för oreflekterat övertryck för TNO multienergimetod. Från van den
Berg (1985). Beteckningar förklaras i avsnitt 4.3.
Fördelar
• Snabb metod som övergripande kan beakta inverkan av viktiga parametrar via val av styrke-
faktor, Lea och Ledin (2002).
• Enkel koppling mellan olika styrkefaktorer och maximalt övertryck, vilket underlättar
hanteringen av olika explosionsfall samt jämförelse med försöksresultat.
• Metoden är relativt anpassningsbar till observerade försöksdata, Mélani et al. (2009).
• Matematiska samband för övertryck och impulstäthet i positiv fas kan via beräkningsverktyg,
tas fram som funktion av ett energiskalat avstånd, Gexcon (2011).
Nackdelar
• Svårighet att välja rätt styrkefaktor, Mélani et al. (2009), Lea och Ledin (2002). Viss
vägledning ges i litteraturen, se kapitel 5, men behov finns av förbättrade anvisningar.
• Någon information om övertryck och impulstäthet i negativ fas eller ankomsttid och partikel-
hastighet ges inte i litteraturen.
• Oklarheter i hur eventuell kombinering av flera explosioner från samma gasmoln ska behand-
las, Lea och Ledin (2002).

-- 18 of 46 --

Beräkning av impulsbelastad konstruktion
19 (46)
B06-105
2017-12-18
TNO multienergimetod bedöms, av författaren till det här dokumentet, vara den mest lämpliga att
använda av de tre korrelationsmodeller som presenteras i avsnitt 3.2. Metoden är även i bruk i andra
europeiska länder såsom Nederländerna, Mercx och van den Berg (1997), samt Norge, Gexcon
(1992), vilket ses som en ytterligare fördel. Det är också denna metod som föreslås i både Fischer et
al. (1998) – en skrift som syftar till att ersätta IVA (1981) – och Lamnevik (2005) att användas vid
lastbestämning från gasexplosioner.
TNO multienergimetod är den metod som fortsättningsvis används i detta dokument för att
bestämma resulterande last från en gasexplosion. Mer detaljerad information om metoden ges i
kapitel 4.
3.2.3 BST-metod
BST-metoden är en metod som i flera avseenden liknar TNO multienergimetod, som beskrivs i
avsnitt 3.2.2. Beteckningen BST står för metodens skapare Baker-Strehlow-Tang och är i littera-
turen beskriven i ett antal olika varianter – Baker et al. (1996), Tang och Baker (1999) samt
Pierorazio et al. (2005).
Liksom TNO multienergimetod baseras BST-metoden på att en kraftfull gasexplosion endast kan
uppstå i en gas som befinner sig i en innesluten eller blockerad omgivning samt att tillgänglig
energi svarar mot en stökiometrisk blandning av gas och luft. Det har visats av Strehlow
et al. (1979) att en konstant flamhastighet och en accelererande flamma med samma maximala
hastighet genererar ekvivalenta stötvågor. Därmed är det möjligt att karakterisera explosionsstyrkan
baserad på gasens flamhastighet. Detta görs i BST-metoden, där flamhastigheten Mf, uttryckt i
enheten Mach, anger samband mellan övertryck och energiskalat avstånd såsom illustreras i
Figur 3.4. Flamhastigheten, vilken beror på gasens reaktivitet samt grad av inneslutning och
blockering, kan liknas vid den styrkefaktor som används i TNO multienergimetod, jämför Figur 3.3.
P = Tryck
P0 = Tryck i ostörd luft
R = Avstånd
E = Energi
Mf = Flamhastighet
Figur 3.4 Samband mellan oreflekterat övertryck och energiskalat avstånd för olika
flamhastigheter Mf enligt BST-metoden. Från Pierorazio et al. (2005).

-- 19 of 46 --

Beräkning av impulsbelastad konstruktion
20 (46)
B06-105
2017-12-18
Fördelar
• Snabb samt enkel att använda och kan övergripande beakta inverkan av omgivningens
geometri, Lea och Ledin (2002).
• Samband ges för övertryck och impulstäthet i både positiv och negativ fas samt för
ankomsthastighet och partikelhastighet.
Nackdelar
• Svårighet att välja rätt flamhastighet. Viss vägledning ges i Pierorazio et al. (2005) för vilken
flamhastighet som ska väljas men jämförelser i Mélani et al. (2009) påvisar trots detta bety-
dande avvikelser mellan uppskattat och i försök uppmätta övertryck. En orsak till detta är att
metoden inte beaktar antändningsenergin hos en explosion.
• Viss förvirring i anvisningar rörande vilka flamhastigheter som ska användas samt anpassning
av dessa till redovisade parameterkurvor enligt Figur 3.4. Det bedöms även vara besvärligare
att hantera olika flamhastigheter istället för de styrkefaktorer som introduceras i TNO multi-
energimetod i avsnitt 3.2.2.
• Matematiska samband för övertryck och impulstäthet som funktion av ett energiskalat avstånd
har inte hittats i litteraturen, vilket medför att avläsningen av aktuella värden försvåras.
• Saknas anvisning om hur kombinering av flera explosioner från samma gasmoln ska
behandlas.
BST-metoden påminner i mångt och mycket om TNO multienergimetod som beskrivs i
avsnitt 3.2.2. Rekommendationer till val av lämplig flamhastighet finns för olika situationer men
givna värden är illa anpassade till de kurvor som sedan redovisas i exempelvis Pierorazio
et al. (2005). Därmed blir metoden något förvirrande och mindre lättanvänd än vad som kunde varit
fallet. Utgående från jämförelser i Mélani et al. (2009) kan även konstateras att metoden synes mer
besvärlig att anpassa till observerade försöksdata än vad som är fallet för TNO multienergimetod.
BST-metoden används inte vidare i detta dokument.

-- 20 of 46 --

Beräkning av impulsbelastad konstruktion
21 (46)
B06-105
2017-12-18
4 Empiriska samband för TNO Multienergimetod
4.1 Orientering
I avsnitt 3.2.2 introduceras TNO multienergimetod, vilket är den beräkningsmetod som i detta
dokument används för att bedöma resulterande last från en gasexplosion. I detta avsnitt ges en mer
detaljerad beskrivning av metoden med anvisningar om empiriska samband för att bestämma tryck,
varaktighet samt impulstäthet. Samtliga empiriska samband som redovisas i detta avsnitt beskrivs
med utgångspunkt från ett energiskalat avstånd. Redovisade samband baseras på antagandet att
explosionen sker på ett sådant sätt att tredimensionell avlastning är möjlig.
Som anges i avsnitt 3.2.2 ansätts i TNO multienergimodell att en exploderande gas, oavsett typ, har
en förbränningsenergi E’gas = 3,5 MJ/m3.
4.2 Styrkefaktor och skalade parametrar
I Figur 4.1 visas tio samband för oreflekterat övertryck samt varaktighet som funktion av
energiskalat avstånd. Varje samband identifieras med en styrkefaktor, där värdena 1 och 10
motsvarar en svag respektive en kraftig explosion, och är framtagna med utgångspunkt av ett
ungefärligt maximalt övertryck i enlighet med Tabell 4.1. En styrkefaktor på 10 motsvarar en
detonation medan en styrkefaktor på 1 - 9 motsvarar en deflagration av varierande styrka.
Figur 4.1 Samband för oreflekterat övertryck samt varaktighet för TNO multienergimetod.
Från van den Berg (1985).

-- 21 of 46 --

Beräkning av impulsbelastad konstruktion
22 (46)
B06-105
2017-12-18
Tabell 4.1 Samband mellan ungefärlig nivå på maximalt övertryck Ps+ och styrkefaktor enligt
Figur 4.1.
Styrkefaktor Ps+
[kPa]
Styrkefaktor Ps+
[kPa]
10 >1 000 5 20
9 500 4 10
8 200 3 5
7 100 2 2
6 50 1 1
I ekvation (4.1) till (4.4) definieras de dimensionslösa parametrar som används i TNO multienergi-
metod. Här anges uttryck först med beteckningar enligt Figur 4.1 och därefter med de beteckningar
som används i detta dokument.
Dimensionslös övertryckskvot Ps’ definieras som
0	P
P
P s
s

		
0
' P
P
P s
s

	 (4.1)
där Ps+ är oreflekterat övertryck och P0 = 101,3 kPa är lufttrycket i ostörd luft vid en temperatur på
+15 ºC.
Dimensionslöst energiskalat avstånd r’ definieras som
3/1
0 





	 E
P
R	R	

3/1
0
' 







	
gas	E
P
r	r	 (4.2)
där r är verkligt avstånd från explosionscentrum explosion och
gas	gas	gas V	E	E 	 '	
(4.3)
är energin i aktuell gasvolym, dvs. produkten av gasens energiinnehåll E’gas = 3,5 MJ/m3 och
volymen Vgas.
Dimensionslös energiskalad varaktighet t’ definieras som
3/1
0
0 





		 	 E
P
c	t	t	

3/1
0
0	' 







		 
gas	E
P
c	t	t	 (4.4)
där t+ är verklig varaktighet i positiv fas och c0 = 340,3 m/s är ljudhastigheten i ostörd luft vid en
temperatur på +15 ºC.

-- 22 of 46 --

Beräkning av impulsbelastad konstruktion
23 (46)
B06-105
2017-12-18
4.3 Positiv fas
4.3.1 Tryck-tidssamband
I Figur 4.1 indikeras det principiella utseendet hos tryckvåg från en gasexplosion och detta
förtydligas ytterligare i Figur 4.2. Tryckvågens utseende beror på vilken styrkefaktor och energi-
skalat avstånd som råder för aktuellt fall. I van den Berg (1985) ges dock inga riktlinjer för hur den
tidpunkt tP, när maximalt tryck P1 nås, ska bestämmas. Inte heller har några sådana riktlinjer hittats
i annan studerad litteratur, varför det inte är möjligt att återge någon närmare information om detta.
P
t
ta t1
P1
P
t
ta t1
P
t
i1
ta t1
i1	i1
(a) (b) (c)
P1 P1
tP tP
t+ t+ t+
Figur 4.2 Principiellt utseende hos tryck-tidssamband: (a) ideal stötvåg, (b) icke-ideal stötvåg,
(c) tryckvåg enligt Figur 3.3. I denna rapport används genomgående samband (a)
för att beskriva tryck-tidssamband för en gasexplosion.
Beroende på de dynamiska egenskaperna hos en explosionsbelastad konstruktion kan tryck-
tidssambandets utseende ha olika stor betydelse för dess respons. Dock gäller att ju snabbare
lastpåföring som explosionstrycket orsakar desto större lasteffekt. Därmed är det också alltid
konservativt att betrakta en tryckvåg enligt Figur 4.2b eller Figur 4.2c som om den hade ett
utseende enligt Figur 4.2a.
I denna rapport förespråkas också att genomgående använda en form hos tryck-tidssambandet enligt
Figur 4.2a. Därmed fås också ett triangelformat tryck-tidssamband i enlighet med den förenklade
metod som även är vanligt förekommande för explosionslast från sprängämnen, se dokument
B02-111, och kan bestämmas utgående från aktuella värden på tryck och impulstäthet enligt
avsnitt 4.3.2 och avsnitt 4.3.3.
4.3.2 Oreflekterad stötvåg
van den Berg (1985) presenterar inte några ekvationer för de i Figur 4.1 redovisade sambanden. Inte
heller har några tillförlitliga ekvationer hittats i litteraturen4. Här redovisade samband är istället
framtagna av författaren till det här dokumentet och har baserats på data framtagen med en på
Gexcons hemsida allmänt tillgänglig gasexplosionskalkylator, Gexcon (2011). Överensstämmelsen
4 I Alonso et al. (2006) presenteras samband i enlighet med ekvation (4.5) och ekvation (4.6) men författarens kontroll
av dessa har visat att de innehåller fel för vissa styrkefaktorer, varför de inte används här.

-- 23 of 46 --

Beräkning av impulsbelastad konstruktion
24 (46)
B06-105
2017-12-18
mellan stötvågsparametrar framtagna med denna och de uttryck som ges i den här rapporten är inte
fullständig men överlag så god att det inte skiljer mer än någon eller några få procent.
Övertryckskvoten Ps’ och energiskalad varaktighet t’ kan uttryckas på formen
 b
s r	a	P '	' 		
(4.5)
 d
r	c	t '	' 		
(4.6)
där a, b, c och d är konstanter i enlighet med Tabell 4.2 och Tabell 4.3. Av dessa uttryck kan sedan
samband enligt Figur 4.3 och Figur 4.4 fås fram.
Tabell 4.2 Konstanter a och b för bestämning av skalat övertryck Ps’ enligt ekvation (4.5). I
tabellen anges maximala värden på r’ när respektive kombination av konstanter a
och b ska användas. För samtliga uttryck gäller att Ps’ ≥ 0,001.
Styrkefaktor a b r’ a b r’ a b r’ a b
10 0,43 -2,35 ≤ 0,90 0,47 -1,46 ≤ 3,21 0,32 -1,13
9 5 0 ≤ 0,20 0,47 -1,46 ≤ 3,21 0,32 -1,13
8 2 0 ≤ 0,37 0,47 -1,46 ≤ 3,21 0,32 -1,13
7 1 0 ≤ 0,48 0,48 -1,00 ≤ 0,96 0,47 -1,46 ≤ 3,21 0,32 -1,13
6 0,5 0 ≤ 0,64 0,32 -1,01 ≤ 2,35 0,47 -1,46 ≤ 3,21 0,32 -1,13
5 0,2 0 ≤ 0,60 0,12 -1,00
4 0,1 0 ≤ 0,63 0,064 -0,97
3 0,05 0 ≤ 0,61 0,031 -0,96
2 0,02 0 ≤ 0,64 0,013 -0,97
1 0,01 0 ≤ 0,69 0,007 -0,98
Tabell 4.3 Konstanter c och d för bestämning av energiskalad varaktighet t’ enligt ekva-
tion (4.6). I tabellen anges maximala värden på r’ när respektive kombination av
konstanter c och d ska användas.
Styrkefaktor c d r’ c d r’ c d r’ c 1) d 1)
10 0,13 -0,22 ≤ 0,51 0,22 0,57 ≤ 2,07 0,29 0,19 ≤ 10,49 0,35 0,11
9 0,13 -0,51 ≤ 0,53 0,24 0,46 ≤ 2,02 0,29 0,19 ≤ 10,49 0,35 0,11
8 0,17 -0,40 ≤ 0,58 0,27 0,45 ≤ 1,32 0,29 0,19 ≤ 10,49 0,35 0,11
7 1) 0,21 -0,46 ≤ 0,62 0,30 0,29 ≤ 1,59 0,32 0,15 ≤ 9,40 0,29 0,19
6 0,26 -0,46 ≤ 0,49 0,38 0,07 ≤ 7,81 0,35 0,11
5 0,52 -0,44 ≤ 0,51 0,7 0
4 1,02 -0,38 ≤ 0,53 1,3 0
3 1,56 -0,38 ≤ 0,52 2 0
2 2,44 -0,34 ≤ 0,54 3 0
1 3,83 -0,34 ≤ 0,50 4,85 0
1) För styrkefaktor 7 gäller för r’ > 10,49 att c = 0,35 och d = 0,11.

-- 24 of 46 --

Beräkning av impulsbelastad konstruktion
25 (46)
B06-105
2017-12-18
0.001
0.01
0.1
1
10
0.1 	1 	10 	100
Oreflekterad övertryckskvot,
 Ps' [-]
Energiskalat avstånd, r' [-]
Jämförelse GexCon och MJ:s uttryck - Oreflekterat övertryck
10
9
8
7
6
5
4
3
2
1
Figur 4.3 Samband mellan oreflekterad övertryckskvot Ps’ och energiskalat avstånd r’ för
olika styrkefaktorer. Baserat på ekvation (4.5) och Tabell 4.2.
0.1
1
10
0.1 	1 	10 	100
Energiskalad varaktighet, ,
 t' [-]
Energiskalat avstånd, r' [-]
Jämförelse GexCon och MJ:s uttryck - Energiskalad varaktighet
1
2
3
4
5
6
7
8
9
10
Figur 4.4 Samband mellan energiskalad varaktighet t’ och energiskalat avstånd r’ för olika
styrkefaktorer. Baserat på ekvation (4.6) och Tabell 4.3.

-- 25 of 46 --

Beräkning av impulsbelastad konstruktion
26 (46)
B06-105
2017-12-18
Några empiriska uttryck för energiskalad oreflekterad impulstäthet presenteras inte. Utgående från
ett antagande om ett triangulärt tryck-tidssamband, se Figur 4.2a i avsnitt 4.3.1, kan den energi-
skalade oreflekterade impulstätheten is’ dock bestämmas som
2
'	'
' t	P
i s
s

	
(4.7)
varvid samband enligt Figur 4.5 fås. Det ska noteras att störst värde på impulstätheten is’ inte nöd-
vändigtvis fås för explosion av styrkefaktor 10. För energiskalade avstånd r’ > 0,9 resulterar istället
en explosion med styrkefaktor 7 i den största impulstätheten. Orsaken till detta är att övertrycket är
detsamma för styrkefaktor 7 - 10 men att varaktigheten är lika stor eller större för styrkefaktor 7 för
energiskalade avstånd r’ > 0,9. Detta innebär också att en explosion med styrkefaktor 7 är lika farlig
eller något farligare än en explosion med styrkefaktor 10 för sådana energiskalade avstånd.
0.0001
0.001
0.01
0.1
1
0.1 	1 	10 	100
Energiskalad oreflekterad impulstäthet,
 is' [-]
Energiskalat avstånd, r' [-]
Jämförelse GexCon och MJ:s uttryck - Energiskalad impulstäthet
10
9
8
7
6
5
4
3
2
1
Figur 4.5 Samband mellan energiskalad oreflekterad impulstäthet is’ och energiskalat avstånd
r’ för olika styrkefaktorer. Baserat på ekvation (4.7).
I Johansson (2012) anges att stötvågens varaktighet ökar med ökande avstånd och förklaras där med
att stötvågsfronten, med sitt högre tryck, rör sig snabbare en sin svans som har ett lägre tryck. Av
Figur 4.4 framgår dock att varaktigheten inte varierar för explosioner med styrkefaktor 1 - 5 när
r’ > 0,5. Detta är dock en medveten vald approximation eftersom den ändring i varaktighet som fås
för de låga tryck som är aktuellt i dessa fall är liten. För styrkefaktor 5 uppgår det maximala
oreflekterade trycket till Ps+ ≈ 20,3 kPa. Via samband i Johansson (2012) kan det visas att ett sådant
övertryck medför en stötvågshastighet på c ≈ 368 m/s, vilket kan jämföras med ljudhastigheten för
ostörd luft som uppgår till c0 ≈ 340 m/s. Denna förhållandevis lilla skillnad i hastighet hos stöt-
vågens front och svans medför inte heller någon betydande skillnad i varaktighet, varför en sådan
approximation är acceptabel.

-- 26 of 46 --

Beräkning av impulsbelastad konstruktion
27 (46)
B06-105
2017-12-18
4.3.3 Reflekterad stötvåg
För en reflekterad stötvåg bestäms stötvågsstorheter Ps+, t + och ir+ först i enlighet med
avsnitt 4.3.1. Det reflekterade övertrycket Pr+ bestäms därefter som
	 	 s	P	r P	P	
	
(4.8)
där
P är en reflexionskoefficient som för oreflekterade övertryck Ps+ ≤ 1 000 kPa kan bestämmas
som
0
0
7
14	8
P	P
P	P
s
s
P


 

	
(4.9)
Den reflekterade impulstätheten ir+ kan approximativt5 bestämmas som
  	 		 		 		
1	1 t
t
s	P
t
t
r	r
a	a
dt	t	P	dt	t	P	i	
	
(4.10)
varvid en reflexionskoefficient
i för impulsen kan beräknas som



s
r
i
i
i
	
(4.11)
Eftersom tryckets reflexionskoefficient
P beror på storleken av det oreflekterade övertrycket, dvs.
P =
P(Ps+), blir sambandet för att bestämma den reflekterade impulstätheten ir+ mer komplext än
vad som är fallet för trycket. Baserat på ekvation (4.10) och ekvation (4.11) kan reflexionskoeffi-
cienten
i för impulsen bestämmas. En reflexionskvot γ
 mellan reflexionskoefficienten för tryck
och impulstäthet kan sedan definieras som
i
P


  	
(4.12)
där
P är reflexionskoefficient för tryck enligt ekvation (4.9). Hur denna kvot varierar med det
oreflekterade övertrycket presenteras i Tabell 4.4 samt Figur 4.6. Av detta framgår att γ
 ≥ 1,0, dvs.
reflexionskvoten för impulstäthet är aldrig större än den för övertryck.
5 En jämförelse mellan oreflekterade och reflekterade impulstätheter enligt ConWep (1992) visar att beskrivning enligt
ekvation (4.10) fungerar bra för lägre tryck. För Ps+ = 30 kPa erhålls en överskattning med ca 5 % och för
Ps+ = 1000 kPa erhålls en överskattning på ca 7 %. Dvs. det är konservativt att uppskatta ir+ enligt föreslagen metod.

-- 27 of 46 --

Beräkning av impulsbelastad konstruktion
28 (46)
B06-105
2017-12-18
Tabell 4.4 Värden på reflexionskvoten γ
 och oreflekterat övertryck Ps+ enligt Figur 4.6.
Ps+
[kPa]
γ

[-]
Ps+
[kPa]
γ

[-]
1 1,001 40 1,046
2 1,003 50 1,056
5 1,007 100 1,091
10 1,013 200 1,130
15 1,019 300 1,148
20 1,025 500 1,159
25 1,031 1 000 1,146
30 1,036
1.00
1.02
1.04
1.06
1.08
1.10
1.12
1.14
1.16
1.18
1 	10 	100 	1 000
Reflexionskvot,

[-]
Oreflekterat övertryck, Ps+ [kPa]
Reflexionskoefficient - Kvot Tryck/Impulstäthet
Kvot
Figur 4.6 Samband mellan reflexionskvoten γ
 och oreflekterat övertryck Ps+.
Utgående från ekvation (4.11) och ekvation (4.12) kan den reflekterade impulstätheten tecknas som
	 	 s
P
r i	i
	

(4.13)
och den ekvivalenta varaktigheten som

-- 28 of 46 --

Beräkning av impulsbelastad konstruktion
29 (46)
B06-105
2017-12-18




 	



t
P
i
t
r
r
r ...
2
(4.14)
Detta innebär att minskningen av den reflekterade impulstätheten ir+ med reflexionskvoten γ

beaktas genom att minska varaktigheten t + med samma faktor γ
.
Konservativt kan γ
 = 1,0 användas varvid fås ett approximativt uttryck på den reflekterade
impulstätheten som
	 	 s	P	r i	i	
	
(4.15)
Ett mer noggrant värde på den reflekterade impulstätheten fås dock genom att bestämma γ

utgående från Figur 4.6 eller Tabell 4.4. För givna värden kan visas att för oreflekterade övertryck
mellan 1 och 100 kPa gäller att
 	 	 	2	6
10	4	0013	,	0	0004	,	1 		 					 s	s P	P	
		
1 ≤ Ps+ ≤ 100 kPa (4.16)
och för övertryck mellan 100 och 300 kPa att
 	 	 	2	6
10	1	0007	,	0	0304	,	1 		 					 s	s P	P	
		
100 < Ps+ ≤ 300 kPa (4.17)
där Ps+ anges i enheten kPa. För större övertryck än så, upp till maximalt 1 000 kPa, approximeras
att
15	,	1		
		
300 < Ps+ ≤ 1 000 kPa (4.18)
4.4 Negativ fas
I TNO Multienergimetod ges inga anvisningar om hur den negativa fasen ska hanteras och denna
hanteras därför inte mer här.

-- 29 of 46 --

Beräkning av impulsbelastad konstruktion
30 (46)
B06-105
2017-12-18
5 Bestämning av styrkefaktor i TNO Multienergimetod
5.1 Påverkande faktorer
Vilken styrkefaktor som används är en i högsta grad central och mycket viktig del i TNO multi-
energimetod. Av Figur 4.3 och Figur 4.4 kan konstateras att styrkefaktorn har stor inverkan på både
tryck och varaktighet. Det kan dock noteras att för styrkefaktor 6-10 fås samma övertryck och
varaktighet när det energiskalade avståndet blir tillräckligt stort – cirka r’ > 2 för tryck och r’ > 10
för varaktighet. För en gasexplosion innehållande en energimängd på 100 MJ eller 1 000 MJ
motsvarar det förstnämnda ett avstånd på r = 20 m respektive r = 43 m – avstånd som inte är
orimligt stora. På större avstånd än detta spelar det ingen roll vilken styrkefaktor 6 – 10 som råder
för aktuell situation, övertrycket kommer ändå bli detsamma. För lägre styrkefaktorer, 1 - 5, har
styrkefaktorn dock fortfarande en central betydelse.
Således står det klart att bestämning av aktuell styrkefaktor får en central betydelse vid framtagning
av lastparametrar enligt här beskriven metod. Bestämning av relevanta styrkefaktorer är dock
komplicerat och inte klart definierat. I detta avsnitt återges dock några riktlinjer som återfinns i
litteraturen.
van den Berg (1985) anger ett antal olika fall där omgivningens utformning kan initiera en kraftfull
gasexplosion:
• Tätt placerade föremål: En konfiguration med tätt placerade föremål, exempelvis rör,
förhindrar en fri expansion samtidigt som den bidrar till ökad turbulens hos gasens flöde.
Ökad turbulens i sin tur medför ökade hastigheter och därmed ökat tryck.
Processutrustning eller rörledningar som står tätt samman eller lådor fyllda med flaskor är
exempel på ett sådant fall.
• Parallella plan: I en sådan här konfiguration förhindras expansionen helt i en riktning.
Detta gör att gasen tvingas flöda parallellt med planen, vilket generar en ökad
flödeshastighet och därmed ökat tryck.
Ett möjligt exempel på ett sådant fall är volymen mellan mark och fordon på en parke-
ringsplats för bilar, en rangerbangård för tågvagnar eller en smal gång mellan två
byggnader.
• Rörliknande konfiguration: På motsvarande sätt som för parallella plan medför en sådan
här konfiguration att expansionen begränsas till enbart en riktning, vilket på samma sätt som
ovan genererar ökat tryck.
Konstruktioner såsom tunnlar, kulvertar och avloppssystem är exempel på denna typ.
Samtliga ovan givna konfigurationer ska betraktas som möjliga områden där en kraftfull explosion
kan utvecklas. Den exakta styrkan hos en sådan potentiell explosion beror dock på flera parametrar.
I Tabell 5.1 listas de parametrar som ett antal olika referenser har bedömt kunna påverka styrkan i
en gasexplosion.

-- 30 of 46 --

Beräkning av impulsbelastad konstruktion
31 (46)
B06-105
2017-12-18
Tabell 5.1 Parametrar som påverkar styrkan i en gasexplosion.
Beskrivning van den Berg
(1985)
Kinsella
(1993)
AICE
(1994)
Baker et al.
(1996)
Melanie et al.
(2009)
Gasens reaktivitet ● ● ● ●
Gasens antändningsenergi ● (●) ●
Grad av blockering ● ● ● ● ●
Grad av inneslutning ● ● ● ●
Gasens reaktivitet är en kvalitativ parameter som allmänt används för att beskriva gasens benä-
genhet att nå höga förbränningshastigheter, och därmed höga tryck. En kategorisering av reaktivitet
hos olika gaser och antändningskällor ges i Tabell 5.2. För mjuka antändningskällor har antänd-
ningsenergin nästan ingen betydelse och för dessa fall har grad av inneslutning och blockering samt
gasens reaktivitet störst inverkan på den resulterande explosionsstyrkan. I jämförelse med
inneslutnings- och blockeringsgrad så har gasens reaktivitet, enligt AICE (1994), dock enbart en
sekundär inverkan på explosionens styrka. För hårda antändningskällor däremot har antändnings-
energin störst betydelse för explosionens styrka.
Tabell 5.2 Kategorisering av gasers reaktivitet samt potentiella antändningskällor. Baserat på
AICE (1994) och Baker et al. (1996).
Reaktivitet Gas Antändningskälla Beskrivning
Hög Vätgas Mjuk Öppen flamma
Acetylen Gnista
Etenoxid Het yta
Propenoxid Hård Jetstråle
Mellan Övriga gaser Sprängmedel
Låg Metan
Kolmonoxid

-- 31 of 46 --

Beräkning av impulsbelastad konstruktion
32 (46)
B06-105
2017-12-18
CCPS (2010) anger den minimala antändningsenergi som krävs för att i en gas skapa en deflag-
ration respektive en omedelbar detonation6, se Tabell 5.3. Angiven energi syftar på det energi-
tillskott som ges vid antändning. Vid ogynnsamma situationer kan dock även en deflagration
utvecklas till en detonation.
Tabell 5.3 Minimal antändningsenergi för att orsaka en deflagration respektive en omedelbar
detonation för gasblandning med luft. Notera skillnad i enheter. Baserat på
CCPS (2010).
Gas Deflagration
[mJ]
Detonation
[kJ]
Acetylen 0,01 0,18
Propan 0,25 410
Metan 0,21 99 000
Vätgas 0,016 5,2
5.2 Riktlinjer i litteraturen
5.2.1 AICE (1994)
I AICE (1994), anges riktlinjer för att välja styrkefaktor som kan sammanfattas enligt nedan:
• Ett konservativt val är att använda styrkefaktor 10 i områden som identifierats kunna ge
upphov till kraftfulla lastkällor. En styrkefaktor på 7 synes dock bättre stämma överens med
aktuell erfarenhet från försök och olyckor.
• I områden utan kraftfulla lastkällor föreslås användandet av en styrkefaktor på mellan 1 och 3,
beroende på hur lågturbulent området är.
6 Av CCPS (2010) framgår det inte tydligt men tolkningen hos författaren till det här dokumentet tolkning är att angiven
antändningsenergi för att initiera en detonation syftar på ett gasmoln i en omgivning helt utan inneslutning eller blocke-
ring.

-- 32 of 46 --

Beräkning av impulsbelastad konstruktion
33 (46)
B06-105
2017-12-18
5.2.2 Kinsella (1993)
Enligt AICE (1994) är effekten av inneslutning och blockering kopplad, ett påstående som också
styrks av flera andra referenser. I Kinsella (1993) sammanfattas riktlinjer för hur en explosions
styrkefaktor ska bestämmas utgående från antändningsenergi, samt inneslutnings- och blockerings-
grad, se Tabell 5.4.
Tabell 5.4 Riktlinjer enligt Kinsella (1993) för val av styrkefaktorer.
Antändningsenergi 1) Grad av blockering Inneslutning Styrkefaktor
Hög Låg Hög Låg Ingen Ja Nej
● ● ● 7 - 10
● ● ● 7 - 10
● ● ● 5 - 7
● ● ● 5 - 7
● ● ● 4 - 6
● ● ● 4 - 6
● ● ● 4 - 5
● ● ● 4 - 5
● ● ● 3 - 5
● ● ● 2 - 3
● ● ● 1 - 2
● ● ● 1
1) Hög och låg antändningsenergi motsvaras av hård respektive mjuk antändningskälla enligt Tabell 5.2.
5.2.3 Pierorazio et al. (2005)
Riktlinjer motsvarande de som presenteras i Tabell 5.4 ges även i Pierorazio et al. (2005) för den
tämligen närbesläktade BST-metoden, se avsnitt 3.2.3, och utgående från dessa anvisningar kan
ekvivalenta styrkefaktorer uppskattas för olika situationer, se Tabell 5.5. Dessa styrkefaktorer har
tagits fram av författaren till det här dokumentet och baseras på resulterande maximala övertryck
från BST-metoden. Aktuellt övertryck har därefter översatts till en motsvarande styrkefaktor enligt
TNO multienergimetod – därav anledningen till att värden anges med en decimal i Tabell 5.5. De i
denna tabell redovisade styrkefaktorer ska betraktas som ett ungefärligt värde eftersom det är
framtaget utgående från en blandning av två metoder som värdena ursprungligen inte är avsedda
för. En sådan omvandling tillför dock fortfarande användbar information eftersom den ger
ytterligare bidrag till riktlinjer för lämpliga val på styrkefaktorer. Definition av blockeringsgrad
enligt Pierorazio et al. (2005) ges i Tabell 5.6. En jämförelse mellan riktlinjer givna av Pierorazio et
al. (2005) och Kinsella (1993) ger att blockeringsgrad Medium och Hög kan likställas eftersom det
råder en tämligen liten skillnad i resulterande styrkefaktorer.

-- 33 of 46 --

Beräkning av impulsbelastad konstruktion
34 (46)
B06-105
2017-12-18
Tabell 5.5 Riktlinjer baserade på Pierorazio et al. (2005) för val av styrkefaktorer. Gradering
2,5D används när inneslutningen består av en skör panel eller av ett närmast
heltäckande solitt plan såsom ett rörställ med mycket tätt placerade rör.
Inneslutning Reaktivitet Grad av blockering
Hög Medium Låg
2D Hög 10 10 7,4
Medium 9,6 7,7 7
Låg 7,7 7 3,6
2,5D Hög 10 10 7
Medium 8,7 7,3 6,5
Låg 7,1 6,3 3,2
3D Hög 10 10 6,4
Medium 7,1 6,8 4,3
Låg 6,2 5,8 1,1
Tabell 5.6 Definition av blockeringsgrad enligt Pierorazio et al. (2005).
Grad av Avstånd/diameter Areablockering,
A Volymblockering,
V
blockering [-] [%] [%]
Låg 7,6 13 1,5
Medium 4,3 23 4,3
Hög 3,1 23 5,7
5.2.4 Mélani et al. (2009)
Enligt Mélani et al. (2009) är anvisningarna i Pierorazio et al. (2005) mycket konservativa och
deras slutsats är att BST-metoden inte är lämplig för vätgasexplosioner men att TNO multi-
energimetod kan användas med vissa modifikationer. I Tabell 5.7 återges en sammanställning av
Mélani et al. (2009) från ett antal försök med varierande antändningsenergi, grad av blockering
samt gasmolnsvolym där en tolkning av resulterande styrkefaktor har getts. Som grad av blockering
används
V, definierat i ekvation (2.4) i avsnitt 2.4.5.
En jämförelse mellan resultat i Tabell 5.7 och riktlinjer enligt Kinsella (1993) i Tabell 5.4 görs i
Tabell 5.8 och av denna kan följande spontant konstateras:
• En antändningsenergi på 40 J kan förmodligen betecknas som tämligen Låg. Erhållna
styrkefaktorer är generellt lägre i försök än vad som fås enligt Kinsella (1993) om hög
antändningsenergi ansätts.
• Riktlinjer enligt Kinsella (1993) underskattar styrkefaktorn rejält i två fall:
o Nr 6 med blockering 4,4 %: Möjligen beror detta på en allvarlig kombination av rör-
blockering.

-- 34 of 46 --

Beräkning av impulsbelastad konstruktion
35 (46)
B06-105
2017-12-18
o Nr 7 med antändningsenergi på 5,2 kJ: Med en sådan hög antändningsenergi fås stora
effekter. Möjligen går en sådan nivå utanför vad Kinsella (1993) ursprungligen tänkt
sig.
• I övrigt är det tämligen god överensstämmelse mellan Kinsella (1993) och experimentell
sammanställning i Tabell 5.7.
Det ska noteras att Mélani et al. (2009) utförde försök på exploderande vätgas, dvs. en högreaktiv
gas enligt Tabell 5.2, något som delvis möjligen kan förklara de avvikelser som erhölls jämfört med
riktlinjer av Kinsella (1993).
Tabell 5.7 Riktlinjer baserade på experimentell sammanställning i Mélani et al. (2009) för val
av styrkefaktorer när molnet består av högreaktiv gas.
Nr Antändningsenergi Inneslutning Blockering,
V, Volym, Vtot Styrkefaktor
Nivå [kJ] [%] [m3]
1 40 J 3D 0 5 3
2 40 J 2D 0 37 3
3 150 J 3D 0 2 100 3 - 4
4 40 J 3D 3 300 5
5 Låg 50 mJ 3D 14 - 5 - 6
6 Låg 500 mJ 3D 4,4 17 7 - 8
7 Hög 52 kJ 3D 0 300 9
Tabell 5.8 Data från Tabell 5.7 tolkade utgående från riktlinjer givna i Tabell 5.4. Värden inom
parantes anger styrkefaktor om en hög antändningsenergi ansätts.
Nr Antändningsenergi Grad av blockering Inneslutning Styrkefaktor
Hög Låg Hög Låg Ingen Ja Nej Tabell 5.4 Tabell 5.7
1 (●) ● ● ● (4 - 5) 1 3
2 (●) ● ● ● (4 - 6) 1 - 2 3
3 ● ● ● 4 – 5 3 - 4
4 (●) ● ● ● (4 - 6) 4 - 5 5
5 ● ● ● ● 4 - 5 5 - 6
6 ● ● ● 4 - 5 7 - 8
7 ● ● ● 4 - 5 9

-- 35 of 46 --

Beräkning av impulsbelastad konstruktion
36 (46)
B06-105
2017-12-18
5.2.5 Eggen (1998)
Eggen (1998) har sammanställt resultaten från ett stort antal explosionsförsök med en principiell
utformning av blockerande hinder såsom schematiskt illustreras i Figur 5.1. Utgående från detta har
utarbetats en korrelation för maximalt övertryck som en funktion av inneslutningsgrad och blocke-
rande hinder för en gasexplosion som initieras av en låg antändningsenergi.
Figur 5.1 Schematisk bild av tubkonfiguration som använts vid framtagning av
ekvation (5.1)och (5.2).
För en gasexplosion vid låg antändningsenergi och ingen inneslutning (3D) fås
7,0	7,2
75	,2
max	, 84 d	S
d
l
P l
f	V
s 	




 
	

(5.1)
och för gasexplosion vid låg antändningsenergi och inneslutning mellan två parallella plan (2D) fås
7,0	7,2
25	,2
max	, 338 d	S
d
l
P l
f	V
s 	




 
	

(5.2)
där Ps,max anger maximalt övertryck [kPa],	
V är volymblockeringsgrad [-], lf är tillgänglig
utbredningssträcka för flamman [m], d är diameter hos hinder [m] och Sl anger laminär brinn-
hastighet hos brännbar gas [m/s].
Volymblockeringsgrad
V definieras här som
tot
blo
V V
V

		
(5.3)
där Vblo anger blockerad volym och Vtot anger total volym. Den laminära brinnhastigheten Sl för
olika gaser listas i Tabell 2.1.

-- 36 of 46 --

Beräkning av impulsbelastad konstruktion
37 (46)
B06-105
2017-12-18
Tabell 5.9 Laminär brinnhastighet Sl för olika brandfarliga gaser. Från CCPS (2010).
Gas Kemisk Sl Stök. konc.
beteckning [m/s] [%]
Vätgas H2 3,25 30
Metan CH4 0,448 9,5
Etan C2H6 0,476 -
Propan C3H8 0,464 4,0
Butan C4H10 - 3,1
Eten, Etylen C2H4 0,735 6,5
Propen C3H6 0,512 4,5
Etyn, Acetylen C2H2 1,55 7,7
Utgående från dessa korrelationer har Mercx et al. (1998) gjort fallstudier av realistiska
utformningar på en processindustri och från detta tagit fram praktiska riktlinjer för bestämning av
volymblockeringsgraden
V, flammans utbredningssträcka lf samt en medeldiameter d hos berörda
hinder. I Mercx et al. (1998) ges riktlinjer för hur utbredningssträckan lf och hindrets diameter d ska
bestämmas för nyttjande av ekvation (5.1) och (5.2), se Bilaga A.
5.3 Kommentar om riktlinjer
5.3.1 AICE (1994)
Riktlinjer enligt AICE (1994) är väldigt övergripande och det kan konstateras att de ligger i linje
med häri övriga redovisade anvisningar för bestämning av en gasexplosions styrkefaktor. De
bedöms dock inte vara tillräckligt nyanserade, varför de i många fall också riskerar att bli alltför
konservativa vid tillämpning av dem. AICE (1994) nyttjas därför inte vidare i detta dokument.
5.3.2 Kinsella (1993) och Mélani et al. (2009)
I Eggen (1998) påpekas att riktlinjer enligt Kinsella (1993) är ett steg i rätt riktning men det
konstateras, utgående från försöksresultat, också att givna anvisningar i vissa fall är otillräckliga
eftersom de kan leda till en mycket stor underskattning av resulterande styrkefaktor. Enligt Eggen
är orsaken till detta att det i Kinsella saknas en parameter som tar hänsyn till storleken på det
blockerade området samt antalet hinder som en potentiell flamma passerar. Därmed fås, med
utgångspunkt från Kinsella, att ett område med låg blockeringsgrad alltid ger förhållandevis låga
explosionstryck (s ≤ 5). Detta motsägs dock av observationer från försök, där antändning av gas i ett
utbrett område med låg blockeringsgrad men med ett stort antal hinder, resulterat i höga övertryck
(s > 9). En slutsats av detta är att riktlinjer enligt Kinsella bör användas med viss försiktighet,
framförallt i sådana situationer som inbegriper ett stort antal hinder verkande över en längre sträcka.

-- 37 of 46 --

Beräkning av impulsbelastad konstruktion
38 (46)
B06-105
2017-12-18
En fördel med riktlinjer enligt Kinsella (1993) är dock att de är enkla att använda samtidigt som de
ger en tämligen nyanserad möjlighet till att beakta varierande situationer med inneslut-
ning/blockering. Jämförelser med utvärdering i Mélani et al. (2009), se avsnitt 5.2.4, pekar dock på
att de av Kinsella givna riktlinjerna inte är tillräcklig konservativa och en redigering av Kinsellas
rekommenderade styrkefaktorer görs därför enligt nedan och sammanfattas i Tabell 5.10:
• Den största av de av Kinsella givna styrkefaktorerna för en given kombination väljs.
• För fall med en hög blockeringsgrad väljs en styrkefaktor s ≥ 7.
• För ett godtyckligt fall begränsas styrkefaktorn till s ≥ 3. Undantaget är ett fall med låg
antändningsenergi samt ingen blockering eller inneslutning – för ett sådant fall tillåts s = 2.
Tabell 5.10 Riktlinjer baserade på Kinsella (1993), se Tabell 5.4, som redigerats utgående från
observationer i utvärdering presenterad i Mélani et al. (2009).
Antändningsenergi Grad av blockering Inneslutning Styrkefaktor
Hög Låg Hög Låg Ingen Ja Nej Urspr. Red.
● ● ● 7 – 10 10
● ● ● 7 – 10 10
● ● ● 5 – 7 7
● ● ● 4 – 6 6
● ● ● 4 – 6 6
● ● ● 4 – 5 5
● ● ● 5 – 7 7
● ● ● 4 – 5 7
● ● ● 3 – 5 5
● ● ● 2 – 3 3
● ● ● 1 – 2 3
● ● ● 1 3 1)
1) Om gasens reaktivitet inte är ”Hög” enligt Tabell 5.2 kan s = 2 användas.
5.3.3 Pierorazio et al. (2005)
Baserat på sammanställning i Tabell 5.4 fås en övergripande uppfattning av hur gasens reaktivitet,
inneslutningsgrad samt blockeringsgrad på verkar den resulterande explosionsstyrkan. Däri
presenterade resultat indikerar att en lastsituation motsvarande 2D eller 2,5D ger motsvarande
styrkefaktorer medan en övergång till ett 3D-fall kan resultera i märkbart lägre värden på styrke-
faktorn. Vidare kan konstateras att blockeringsgraden tycks vara den inverkan som har störst
inverkan. Eftersom resultat i Pierorazio et al. (2005) ursprungligen dock inte är avsedda för TNO
Multienergimetod nyttjas denna dock inte vidare i detta dokument.

-- 38 of 46 --

Beräkning av impulsbelastad konstruktion
39 (46)
B06-105
2017-12-18
5.3.4 Eggen (1998)
Det samband som tagits fram av Eggen (1998) för volym utan inneslutning, se ekvation (5.1) i
avsnitt 5.2.5, baseras på en volym med blockeringar bestående av tuber i tre riktningar enligt
Figur 5.1. För ett fall med tuber i enbart en eller två riktningar, se Figur 5.2, skiljer sig dock
resulterande samband med vad som fås vid blockering med tuber i tre riktningar. I Figur 5.3
illustreras en jämförelse mellan olika försöksserier i 3D-omgivning där tuber i en (Harrison), två
(Hjertager) eller tre (MERGE) riktningar har använts för att skapa de hinder som ger upphov till en
kraftfull explosion. I Figur 5.2 är tre linjer inritade där röd linje motsvarar ekvation (5.1) som
baserats på försöksdata från MERGE.
Figur 5.2 Schematisk bild av rörkonfiguration med rör i en (Harrison) eller två (Hjertager)
riktningar.
A
2 kPa
ζ1 = 15
ζ2 = 3
ζ3 = 1
Figur 5.3 Jämförelse av relation enligt ekvation (5.1) för olika försöksserier med tuformade
hinder placerade i en (Harrison), två (Hjertager) eller tre (MERGE) riktningar.
Baserat på Eggen (1998).

-- 39 of 46 --

Beräkning av impulsbelastad konstruktion
40 (46)
B06-105
2017-12-18
Resultat från Hjertager och Harrison är också medtagna i Figur 5.3 och punkter tillhörande dessa
båda försöksserier ger maximala tryck som är lägre än vad som indikeras av röd linje, vilket innebär
att de uppvisade lägre övertryck än vad som erhålls via ekvation (5.1). Avvikelsen är betydande,
något som särskilt gäller för försöksresultat från Harrison. En grön och en blå linje har lagts in av
författaren i Figur 5.3. Dessa linjer utgör en förhållandevis konservativ representation av försöks-
data från Hjertager respektive Harrison och är medvetet valda för att ha samma lutning som den
röda linjen motsvarande ekvation (5.1). Vidare är en streckad röd linje inritad i Figur 5.3 på en nivå
av Ps,max = 2 kPa, markerande en gräns för vilken grön och blå linje begränsas efter. Denna nivå har
valts eftersom det stora flertalet försöksdata för Hjertager och Harrison befinner sig under denna
nivå. Denna trycknivå motsvarar även gränsen för en gasexplosion med en given styrkefaktor s = 2
enligt Tabell 4.1.
Utgående från detta kan maximalt övertryck uttryckas som
i
s
i	s
P
P

max	,
max,	, 	
där Ps,max,i ≥ 2 kPa när Ps,max > 2 kPa (5.4)
max	,	max,	, s	i	s P	P 	
när Ps,max ≤ 2 kPa (5.5)
där Ps,max är maximalt övertryck enligt ekvation (2.7) och Ps,max,i samt ζi är reducerat övertryck
respektive reduktionsfaktor för fall i. Index i anger antal riktningar hos blockerande tuber och från
Figur 5.3 kan reduktionsfaktorn ζi bestämmas som
15	1 
	
3	2 
	
1	3 
	
(5.6)
5.4 Föreslagen metodik
I detta dokument förespråkas de approximativa riktlinjer för bestämning av en gasexplosions
styrkefaktor som fås av de redigerade samband som utgår från Kinsella (1993) och som presenteras
i Tabell 5.10 i avsnitt 5.3.2. Med hänsyn till sin approximativa natur rekommenderas att utgå från
ett förhållandevis konservativt synsätt när denna metod används.
För en mer detaljerad bedömning av aktuell styrkefaktor kan dock de av Eggen (1998) redovisade
sambanden i avsnitt 5.2.5 användas. För den senare metodiken används även de, av författaren till
det här dokumentet, föreslagna uttrycken i ekvation (5.4) till (5.6) i avsnitt 5.3.4.

-- 40 of 46 --

Beräkning av impulsbelastad konstruktion
41 (46)
B06-105
2017-12-18
5.5 Flera explosioner samtidigt
En explosion i ett gasmoln kan mycket väl bestå av två eller flera explosioner men enligt van den
Berg (1985) avtar dessa separat i omgivningen mer eller mindre oberoende av varandra. van den
Berg menar att det är extremt osannolikt att två eller flera delar av gasmolnet antänds samtidigt
eftersom flamutbredningen genom det icke inneslutna gasmolnet är relativt långsam. Det är med
anledning av detta normalt acceptabelt att betrakta varje explosionsområde inne i gasmolnet som en
enskild explosion.
I van den Berg och Mos (2005) ges riktlinjer om erforderligt separationsavstånd för att två poten-
tiella explosionskällor ska kunna betraktas som separata explosioner:
• Kraftig explosion (Ps+ ≥ 100 kPa, s = 7) – krävs ett fritt avstånd om 0,5∙l
• Svag explosion (Ps+ ≤ 10 kPa, s = 4) – krävs ett fritt avstånd om 0,25∙l
där l anger explosionskällans utbredning i given riktning. För explosioner med mellanliggande tryck
fås krav på fritt avstånd via linjär interpolation. Uppfylls inte dessa villkor på separationsavstånd
ska explosionen betraktas som en explosion med en energimängd motsvarande summan av de
interagerande källorna och explosionscentrum placeras i den energiviktade centrumpunkten av in-
gående explosionskällor.
Värdet på styrkefaktorn för den resulterande explosionen tilldelas det största värdet för den källa
som innesluter den andra, se Figur 5.4. För illustrerat fall i Figur 5.4 innebär detta att om s < 7
kommer en explosion i område C kunna sprida sig till område B men inte tvärtom eftersom
lC,2 / 4 > aBC men lB,2 /4 < aBC. Resulterande explosion baseras därför på total volym i område B och
C samt styrkefaktorn för område C, dvs. Vgas = VB + VC respektive s = sC. Om däremot s ≥ 7
kommer en kraftfull explosion även kunna sprida sig från område B till område C eftersom
lB,2 / 2 > aBC. För ett sådant fall baseras därmed den totala explosionen på Vgas = VB + VC och
s = max(sB, sC).
A
B
C
lC,1
lC,2
lA,2
lA,1
aAB
aBC
lB,2
l / 4
l / 2
(a) 	(b)
lB,1
Figur 5.4 Schematisk bild för exemplifiering av hur separationsavstånd mellan olika objekt ska
beaktas.

-- 41 of 46 --

Beräkning av impulsbelastad konstruktion
42 (46)
B06-105
2017-12-18
Tabell 5.11 Möjlig interaktion mellan inneslutna/blockerade områden enligt Figur 5.4.
Område Styrkefaktor hos källa Tillräckligt avstånd?
Källa Mottagare s ≤ 4 s ≥ 7 s ≥ 7 s ≤ 4
A B lA,2 /4 < aAB lA,2 / 2 > aAB Nej Ja
B A lB,2 /4 < aAB lB,2 / 2 < aAB Ja Ja
B C lB,2 /4 < aBC lB,2 / > aBC Nej Ja
C B lC,2 /4 > aBC lC,2 / 2 > aBC Nej Nej
A C lA,2 /4 < aAB
lB,2 /4 < aBC
lA,2 / 2 > aAB
lB,2 / > aBC
Nej 1) Ja
C A lC,2 /4 > aBC
lB,2 /4 < aAB
lC,2 / 2 > aBC
lB,2 / 2 < aAB
Ja Ja
1) Förutsätter att styrkefaktor hos explosion i mottagare B också uppfyller s ≥ 7. Om inte kommer inte en
explosion kunna spridas vidare från B till C, varmed en explosion i A inte heller kommer kunna
samverka med en explosion i C.

-- 42 of 46 --

Beräkning av impulsbelastad konstruktion
43 (46)
B06-105
2017-12-18
6 Referenser
AICE (1994): Guidelines for Evaluating the Characteristics of Vapor Cloud Explosions, Flash
Fires, and BLEVEs. Center for chemical process safety of the American Institute of Chemical
Engineers, New York, USA.
Almgren R (2007): Räddningstjänst vid olycka med gaser, andra reviderade utgåvan. Räddnings-
verket, Rapport U30-578/07, Karlstad.
Alonso F.D., Ferradás E.G., Pérez J.F.S., Aznar A.M., Gimeno J.R., Alonso J.M. (2006):
Characteristic overpressure-impulse-distance curves for vapour cloud explosions using the TNO
Multi-Energy model. Journal of Hazardous Materials, A137, sid 734-741.
Baker Q.A., Tang M.J., Scheier E.A., Silva G.J. (1996): Vapour Cloud Explosion Analysis. Process
Safety Process, Vol. 15, No 2, sid 106-109.
Beccantini A., Malcynski A, Studer E. (2007): Comparison of TNT-equivalemnce approach, TNO
multi-enery approach and CFD approach in investigating hemisperic hydrogen-air-vapor cloud
explosions. Proceddings of the 5th international Seminar on Fire and Explosion Hazards, 23-27
april 2007, Edinburgh, Storbritannien.
van den Berg A.C. (1985): The multi-energy method – A framework for vapour cloud explosion
blast prediction. Journal of Hazardous Materials, 12(1985), sid 1-10.
van den Berg A.C. och Mos A.L. (2005): Research to improve guidance on separation distance for
the multi-energy method (RIGOS). TNO Prins Maurits, Resarch report 369, Rijswijk, Holland.
CCPS (2010): Guidelines for Vapor Cloud Explosion, Pressure Vessel Burst, BLEVE and Flash
Fire Hazards, Second edition. Center for Chemical Process Safety, John Wiley & Sons,
Hoboken, USA.
ConWep (1992): ConWep – Collection of conventional weapons effects calculations based on
TM 5-855-1, Fundamentals of Protective Design for Conventional Weapons, U.S. Army
Engineer Waterways Experiment Station, Vicksburg, USA.
Eggen J.B.M.M. (1998): GAME: development of guidance for the application of the multi-energi
method. TNO Prins Maurits, Contract resarch report 202/1998, Rijswijk, Holland.
Fischer S., Forsén R., Hertzberg O., Jacobsson A., Runn P., Thaning L., Winter S. (1998): Våda-
utsläpp av Brandfarliga och Giftiga Gaser och Vätskor, Metoder för bedömning av risker, Andra
reviderade och utökade upplagan. Avdelningen för NBC-skydd och Avdelningen för Vapen och
Skydd, Försvarets Forskningsanstalt, FOA-R--97-00490-990—SE, Stockholm.
Forsén R. (1998): Tryck vid explosioner. Kapitel 10 i Fischer et al. (1998), sid 279-312.
Gexcon (1992): Gas Explosion Handbook. Gexcon, www.gexcon.com/article/handbook-content,
Bergen, Norge.
Gexcon (2011): Web Calculator. Vapour cloud explosion blasts – Multi-Energy method. Gexcon,
www.gexcon.com/tools/MEMethod, Bergen, Norge.

-- 43 of 46 --

Beräkning av impulsbelastad konstruktion
44 (46)
B06-105
2017-12-18
IVA (1981): Skydd mot fria gasmolnsexplosioner i processindustrin. Ingenjörsvetenskapsakademin,
Meddelande 238, Stockholm.
Jiang J., Liu Z.G., Kim A.K. (2001): Comparison of blast prediction models for vapor cloud
explosions. National Research Council Canada, NRCC-44715.
Johansson M. (2012): Luftstötvåg. Myndigheten för samhällsskydd och beredskap. Publ.nr
MSB448, Karlstad.
Johansson M. och Laine L. (2012): Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Del 1: Last av luftstötvåg. Myndigheten för samhällsskydd och beredskap. Publ.nr
MSB449, Karlstad.
Kinsella K.G. (1993): A rapid assessment methodology for the prediction of vapour cloud explosion
overpressure. International Conference and Exhibition on Safety, Health and Loss Prevention in
the Oil, Chemical and Process Industries, 15-19 februari 1993, Singapore.
Lamnevik S. (2005): Gasexplosioner. Intresseföreningen för processäkerhet (IPS).
Lea C.J. och Ledin H.S. (2002): A Review of the State-of-the-Art in Gas Explosion Modelling.
Health & Safety Laboratory, HSL/2002/02, Sheffield, Storbritannien.
Mélani L., Sochet I., Rocourt X., Jallais S. (2009): Review of methods for estimating the
overpressure and impulse resulting from a hydrogen explosion in a confined/obstructed volume.
Proceddings of the 3rd International Conference on Hydrogen Safety, Ajaccio, Frankrike.
Mercx W.P. och van den Berg A.C. (1997): The Explosion Blast Prediction Model in the Revised
CPR 14E (Yellow Book). Process Safety Progress, Vol.16, No.3.
Mercx W.P.M., van den Berg A.C., van Leeuwen D. (1998): Application of correlations to quantify
the source strength of vapour cloud explosions in realistic situations: Final report for the project
”GAMES”. TNO Prins Maurits, TNO report PML 1998-C53, Rijswijk, Holland.
Park D.J. och Lee Y.S. (2009): A comparison on predictive models of gas explosion. Korean
Journal of Chemistry Engineering, 26(2), sid 313-323.
Pierorazio A.J., Thomas J.T., Baker Q.A., Ketchum D.E. (2005): An Update to the Baker-Strehlow-
Tang Vapor Cloud Explosion Prediction Methodology Flame Speed Table. Process Safety
Progress, Vol.24, No.1.
Strehlow R.A., Luckritz R.T., Adamczyk A.A., Shimpi S.A. (1979): The blast wave generated by
spherical flames. Combustion and Flame, Vol.35, sid 297-310.
Tang M.J. och Baker Q.A. (1999): A New Set of Blast Curves from Vapor Cloud Explosion.
Process Safety Progress, Vol.18, No.3, sid 235-240.
Dokument utgivna av MSB kan laddas ner gratis på www.msb.se/skyddsrum.

-- 44 of 46 --

Beräkning av impulsbelastad konstruktion
45 (46)
B06-105
2017-12-18
Bilaga A Parametrar i Eggen (1998)
A.1 Maximalt tryck
I avsnitt 5.2.5 presenteras uttryck från Eggen (1998) för uppskattning av maximalt övertryck hos en
gasexplosion som en funktion av inneslutningsgrad och blockerande hinder.
För en gasexplosion vid låg antändningsenergi och ingen inneslutning (3D) fås
7,0	7,2
75	,2
max	, 84 d	S
d
l
P l
f	V
s 	




 
	

(A.1)
och för gasexplosion vid låg antändningsenergi och inneslutning mellan två parallella plan (2D) fås
7,0	7,2
25	,2
max	, 338 d	S
d
l
P l
f	V
s 	




 
	

(A.2)
där Ps,max anger maximalt övertryck [kPa],	
V är volymblockeringsgrad [-], lf är tillgänglig
utbredningssträcka för flamman [m], d är diameter hos hinder [m] och Sl anger laminär brinn-
hastighet hos brännbar gas [m/s].
I denna bilaga sammanfattas riktlinjer från Mercx et al. (1998) om hur utbredningssträckan lf och
hindrets diameter d ska bestämmas för nyttjande av dessa samband.
A.2 Riktlinjer för beräkning av parametrar
A.2.1 Utbredningssträcka lf
Utbredningssträckan lf anger den antända flammans tillgängliga utbredningssträcka. Om ingen
hänsyn tas till ventilationsmöjligheter innebär detta att den längsta sträckan, och därmed också det
högsta övertrycket, alltid fås om antändningspunkten är belägen vid det blockerade områdets kant.
Detta är dock inte nödvändigtvis fallet eftersom en sådan placering även resulterar i en ökad utbred-
ningsmöjlighet för den expanderande gasen, något som medför att övertrycket minskar på grund av
ökad ventilation. Detta talar istället för att en centralt placerad antändningspunkt resulterar i de
högsta övertrycken. Enligt Mercx et al. (1998) kan det dock uppstå en situation där trycktillskottet
från den längre utbredningssträckan är större än den reduktion som fås tack vare ökad ventilation.
Vilken av dessa båda situationer som uppstår är komplext att förutspå.
I Mercx et al. (1998) föreslås en metod där antändningspunkten ansätts ske i centrum av det
blockerade området. Från detta bestäms flammans utbredningssträcka som






 h
b	l
l f ;
2
;
2
min	
(A.3)
där l, b och h är det blockerade områdets längd, bredd respektive höjd. Det övertryck Ps,max som, via
ekvation (A.1) eller (A.2), erhålls med denna utbredningssträcka jämförs med ett kritiskt övertryck,
av Mercx et al. (1998) ansatt till Pcr = 30 kPa. Om Ps,max ≤ Pcr kommer sidoventilation vara

-- 45 of 46 --

Beräkning av impulsbelastad konstruktion
46 (46)
B06-105
2017-12-18
dominerande och övertrycket begränsas till det beräknade Ps,max. Om Ps,max > Pcr kommer dock
ventilationen vara otillräcklig och ett nytt värde på Ps,max beräknas utgående från en reviderad
utbredningssträcka för flamman
 		h	b	l	l rev	f ,	,	max	, 	
(A.4)
A.2.2 Diameter d hos hinder
För bestämning av diametern d utgår Mercx et al. (1998) från att alla hindret består av i olika typer
av hinder, vardera med längden li och diametern di. Från detta presenteras sedan olika sätt att
bestämma ett viktat värde på d enligt nedan.
Aritmetiskt medelvärde:

 

i
i	i
arm l
d	l
d	
(A.5)
Harmoniskt medelvärde:

 

i
i
i
ham l
d
l
d
1
1	
(A.6)
Hydraulisk diameter:



 	
i
i
i
i
hym d
d
A
V
d
2
4	4	
(A.7)
Mercx et al. (1998) poängteras att det i ett blockerat område bestående av flera olika typer av hinder
kan vara svårt att beskriva detta med enbart med ett viktat medelvärde enligt ovan. I många fall kan
ett sådant blockerat område dock utgöras av flera delområden och i sådana fall kan det vara bättre
att studera varje delområde för var för sig med sina respektive värden på diameter di och volym-
blockeringsgrad λV,i.
Hinder som inte har en cylindrisk form kan representeras av cylindrar med en längd motsvarande
hindrets största längd och en diameter som ger en lika stor tvärsnittsarea som hindret. För ett låd-
format hinder med måtten l x b x h, l > b och l > h fås då att hindrets diameter kan uppskattas som
bh	d 	

4
(A.8)
För fall presenterade i den här rapporten har diametern hos befintliga hinder bedömts vara
likvärdiga inom ett och samma blockerade område, varför det inte funnits något behov av att
beräkna ett medelvärde på diametern enligt ekvation (A.5) till (A.7).

-- 46 of 46 --