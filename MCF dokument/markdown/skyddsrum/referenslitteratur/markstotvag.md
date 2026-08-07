---
title: "Markstotvag"
category: "referenslitteratur"
originalFile: "skyddsrum/referenslitteratur/markstotvag.pdf"
fileType: "PDF"
keywords: ["skyddsrum","karm","ventil","betong","armering","beräkning","explosion","vatten"]
summary: "Reviderad 2020 -- 1 of 311 -- Markstötvåg 2020-09-28 revidering 2 1 Innehållsförteckning Förord............................................................................................................ 5 Sammanfattning ............................."
---

Reviderad 2020

-- 1 of 311 --

Markstötvåg
2020-09-28 revidering 2 1
Innehållsförteckning
Förord............................................................................................................ 5
Sammanfattning ........................................................................................... 7
Beteckningar ................................................................................................. 8
1 Introduktion ...................................................................................... 11
1:1 Bakgrund............................................................................................. 11
1:2 Syfte och målsättning ......................................................................... 11
1:3 Begränsningar ..................................................................................... 12
1:4 Rapportens innehåll ............................................................................ 12
2 Översiktlig information .................................................................... 14
2:1 Konventionell bomb ........................................................................... 14
2:2 Hur bildas en markstötvåg? ................................................................ 15
2:3 Är markstötvåg ett viktigt lastfall? ..................................................... 17
3 Matematisk beskrivning av stötvågor ............................................. 20
3:1 Översikt............................................................................................... 20
3:2 Konserveringslagar ............................................................................. 20
3:21 Massans bevarande ........................................................................ 21
3:22 Rörelsemängdens bevarande .......................................................... 21
3:23 Energins bevarande ........................................................................ 22
3:24 Tillståndsekvation (EOS) ............................................................... 23
3:25 Rankine-Hugoniot ekvationen och Rayleighlinjen ........................ 24
3:26 Numeriskt exempel ........................................................................ 26
4 Jordmaterials sammansättning ....................................................... 29
4:1 Översikt............................................................................................... 29
4:2 Lösa jordars sammansättning ............................................................. 29
4:3 Jordens markstötvågsegenskaper ........................................................ 33
5 Jordmaterialets tillståndsekvation och skjuvhållfasthet ............... 35
5:1 Översikt............................................................................................... 35
5:2 Egenskaper som påverkar tillstånds-ekvationen ................................. 35
5:21 Det fasta materialet ........................................................................ 41
5:22 Vatten och vatteninnehåll .............................................................. 44
5:23 Porositet ......................................................................................... 47
5:3 Hugoniotdata från litteraturen............................................................. 48
5:4 Skjuvhållfasthet hos jordmaterial ....................................................... 51
5:41 Draghållfastheten ........................................................................... 74

-- 2 of 311 --

Markstötvåg
2020-09-28 revidering 2 2
6 Metod för framtagning av EOS ....................................................... 75
6:1 Översikt............................................................................................... 75
6:2 Provning lämpad för låga tryck .......................................................... 78
6:3 Provning lämpad för höga tryck ......................................................... 83
6:31 Plan stöt .......................................................................................... 85
6:32 Invers plan stöt ............................................................................... 85
6:33 Finita elementanalys av invers plan stöt ........................................ 88
7 Finita elementanalyser ..................................................................... 94
7:1 Allmänt ............................................................................................... 94
7:2 Grundläggande beskrivning ................................................................ 94
7:21 FE-simulering av räddningscentral utsatt för markstötvåg. ........... 94
7:22 Utformning av passivt skydd mot markstötvåg ............................. 99
8 Hur markstötvåg propagerar runt en rektangulär stel kropp ... 106
8:1 Översikt............................................................................................. 106
8:2 Modellering av jorden....................................................................... 107
8:3 Modellering av geometrin................................................................. 108
8:4 Analysresultat ................................................................................... 108
8:41 Maxtryck och maximpuls längs golvet ........................................ 108
8:42 Diffraktion runt hörn mellan vägg och golv ................................ 112
9 Empiriska samband för att beräkna markstötvåg ...................... 114
9:1 Allmänt ............................................................................................. 114
9:2 Stötvågssamband enligt Lampson .................................................... 114
9:21 Skalningsmodell genom en dimensionslös parameter ................. 116
9:22 Lampsons empiriska ekvationer för markstötvåg ........................ 118
9:23 Lampsons empiriska ekvationer för skador på nedgrävda
byggnadskonstruktioner ............................................................... 132
9:3 Stötvåg utan reflexioner enligt Drake ............................................... 134
9:31 Drakes modell från 1983 .............................................................. 135
9:32 Drakes modell från 1989 .............................................................. 146
9.4 Markstötvåg med reflexioner ............................................................ 160
9:41 Reflexioner enligt ConWep (1992) .............................................. 160
9:42 Detaljerad beskrivning av reflexion ............................................. 164
9:5 Kraterbildning ................................................................................... 169
10 Modifiering av materialmodell i Autodyn för torr sand (Sjöbo) 176
10:1 Orientering ........................................................................................ 176
10:2 Modifiering av tillståndsekvation (EOS) .......................................... 176
10:21 Modifiering av av- och pålastningskurva .................................... 177
10:22 Modifierade indata till den modifierade EOS:en ......................... 180
10:3 Resultat från Autodyn-simuleringar ................................................. 184
11 Slutsatser och diskussioner ............................................................ 191
12 Litteraturförteckning ..................................................................... 192

-- 3 of 311 --

Markstötvåg
2020-09-28 revidering 2 3
Bilaga A P-alpha modellen, där det solida tillståndet modelleras med
hjälp av Mie-Gruneisen. .......................................................... 197
Bilaga B Explosivämnen och dess viktskalningsfaktorer ...................... 204
Bilaga C Spännings- och töjningstensorer ............................................. 205
Bilaga D Elastiska vågor ........................................................................ 210
Bilaga E Modellerad jordsammansättning ............................................. 220
Bilaga F Hastighetsfält hos jord ............................................................. 225
Bilaga G Framtagning av dynamiskt spännings-töjningssamband
enligt Lampson (1946) ............................................................ 230
Bilaga H Lampsons (1946) resonemang kring framtagandet av
empiriska samband .................................................................. 235
Bilaga I Härledda jordkonstantsvärden k från seismisk
våghastighetsmätning, Lampson (1946).................................. 249
Bilaga J Drakes modell från 1983 och 1989 ......................................... 250
Bilaga K Beräkningsexempel reflexion enligt ConWep (1992) ............. 251
Bilaga L Autodyn-simuleringar av reflexion ......................................... 254
Bilaga X Laine och Larsen (2007): Numerical Study of How the Ground
Shock Coupling Factor is Influenced by Soil Properties 78th
Shock & Vibration Symposium, Philadelphia, PA ................. 256
Bilaga Y Laine och Larsen (2009): Proposal on How to Model the
Unloading in a Compaction Equation of State based upon Tri-
axial tests on Dry Sand, 80th Shock & Vibration Symposium,
San Diego, CA......................................................................... 266
Bilaga Z Arbete med modifierad EOS för Sjöbosand ............................ 280
Bilaga ZA Användarsubrutiner till Autodyn för Modifierad Sjöbosand .. 292

-- 4 of 311 --

2020-09-28 revidering 2 4

-- 5 of 311 --

Markstötvåg
2020-09-28 revidering 2 5
Förord
Denna publikation behandlar markstötvåg från explosionslaster och riktar
sig till personer som behöver veta hur markstötvåg uppkommer samt vilka
laster som kan förväntas på en nedgrävd konstruktion eller byggnad. Publi-
kationen har finansierats av Myndigheten för samhällsskydd och beredskap
(MSB), tidigare Räddningsverket, och är ett resultat från arbetet inom en ar-
betsgrupp som behandlar stötvågslaster och fysiskt skydd som leds av Björn
Ekengren (MSB). Arbetsgruppen består av Joosef Leppänen (Cowi AB),
Morgan Johansson (Reinertsen Sverige AB), och författaren till rapporten
Leo Laine (LL-Engineering tidigare Anker-Zemer Engineering A/S).
Fyra möten hålls årligen i denna grupp, där framstegen inom ämnesområ-
dena luftstötvåg, splitter, markstötvåg, och verkan i bebyggelse diskuteras.
Stort tack till allas bidrag för att driva ämnesområdena framåt. Speciellt tack
till Björn som påvisat hur långsiktigt och målinriktat arbete ger resultat. För-
fattaren vill också passa på att tacka simuleringsexperten Ola-Pramm Larsen
(tidigare Anker-Zemer Engineering A/S), för idogt lyssnande och intensivt
programmerande och simulerande för att ta fram banbrytande simulerings-
resultat inom arbetsområdena. Ola har tagit fram de flesta resultat från
Autodyn som återfinns i denna rapport.
Göteborg, april 2012, andra revidering gjord september 2020
Leo Laine

-- 6 of 311 --

2020-09-28 revidering 2 6
Revideringslista
Utgåva Revidering Kapitel nummer: utförd revidering
april 2012,
utgåva 1
juni 2020,
revidering 1
Kapitel 9: Ekvation (9:31m) har korrigerats med
faktorn 9.870892 och ekvation (9:31r) har korrigerats
med faktorn 2.520811
april 2012,
utgåva 1
september
2020,
revidering 2
Litteraturförteckning: Korrigeringar av punkter och
mellanslag och ordningsföljd i årtal av referenser från
Heyerdahl och Madsus.

-- 7 of 311 --

Markstötvåg
2020-09-28 revidering 2 7
Sammanfattning
Denna publikation har som syfte att redogöra för vilka faktorer som påver-
kar markstötvågens storlek och varaktighet från en bomb som detonerar
nära eller nedgrävd i marken. Som en större slutsats beskrivs hur lösa jord-
material bör modelleras i detalj för att fånga dess beteende både nära den
detonerade bomben och på längre avstånd. Denna slutsats byggs upp genom
att först ge grunderna för hur stötvågor genereras och hur dessa kan beräk-
nas genom att sätta upp ekvationerna för massans, rörelsemängdens och
energins bevarande tillsammans med tillståndsekvationen för materialet.
Därefter påvisas det i publikationen att det är jordmaterialets porositet,
vattenmättnadsgrad och de fasta kornens egenskaper som i huvudsak påver-
kar markstötvågens dynamik.
I tillägg gås litteraturens viktigaste empiriska ekvationer igenom för beräk-
ning av markstötvågor. Grunderna för dessa ekvationer påbörjades redan
under andra världskriget av USA och förfinades under 1980 och 1990-talen.
Dessa ekvationer är en bra grundstomme för ingenjörer och konstruktörer
som behöver få en grov uppskattning av möjliga belastningsfall från hotbil-
der för nedgrävda byggnadskonstruktioner.
Slutligen, ett sätt för att minska påverkan från markstötvåg på en nedgrävd
konstruktion är att tillse att ett poröst och torrt material används som fyllnad
kring konstruktionen. Detta kommer öka den energiupptagande förmågan
hos jordmaterialet.
Nyckelord: markstötvåg, explosion, nedgrävd, jord, sand, porositet, materi-
alegenskaper, tillståndsekvation, skjuvhållfasthet, empiriska ekvationer,
ökad energiupptagande förmåga.

-- 8 of 311 --

Markstötvåg
2020-09-28 revidering 2 8
Beteckningar
Romerska versaler
A area
Cu kornfördelning
D skalat laddningsdjup
E energiintensitet, elasticitetsmodul
E0 energiintensitet hos ostörd jord, initiell energintensitet
F kraft
G skjuvmodul
I impedans
Ji spänningstensorns första, andra, och tredje invariant (i=1,2,3)
K kompressionsmodul (i geotekniksammanhang tryckmodul)
M ödometermodul
P tryck
P0 tryck hos ostörd jord
R skalat detonationsavstånd
T temperatur
U hastighet
Us stötvågshastighet
Up partikelhastighet
Sr vattenmättnadsgrad
Si Spänningstensorn
V volym
W energi, frigjord energimängd, laddningsstorlek
Wi intern energi, potentiell energi
Wk kinetisk energi
Z skalat avstånd
Y flytspänning, skjuvspänning
V specifik volym
VL longitudinell våg
Vp tryckvåg
Vs skjuvvåg
V0 specifik volym hos ostörd jord, initiell specifik volym

-- 9 of 311 --

Markstötvåg
2020-09-28 revidering 2 9
Romerska gemener
c seismisk hastighet hos jordmaterial, kompressionshastighet
d laddningsdjup, kornstorlek, utböjning
e portal
f fördämningsfaktor
h entalpi
i+, is+ impulsintensitet positiv fas
i - impulsintensitet negativ fas
ir+ reflekterad impulsintensitet positiv fas
m massa
n porositet, dämpningskoefficient
r detonationsavstånd
s sträcka
t tid
ta ankomsttid
td positiva fasens sluttid
tp tiden för maxtryck
t+ varaktighet positiv fas
tr restid
u hastighet
vp tryckvågshastighet
vs skjuvvågshastighet
Grekiska tecken
 laddningskonstant, beskrivning av irreversibel kompaktering av porer
 inkrementiellt
 töjning
vol volymmetrisk töjning
 egenvärde
ω vattenkvot
 kompression
 volym, tvärkontraktion
 densitet, skrymdensitet
k korndensitet
0 densitet hos ostörd jord, initiell densitet
r densitet bakom reflekterad stötvågsfront
s densitet bakom oreflekterad stötvågsfront, kompaktdensitet
 spänning
 skjuvspänning

-- 10 of 311 --

Markstötvåg
2020-09-28 revidering 2 10
Index
+ indikerar positiv fas
- indikerar negativ fas
0 indikerar ostörd luft
r indikerar reflekterad stötvåg
s indikerar inkommande stötvåg

-- 11 of 311 --

Markstötvåg
2020-09-28 revidering 2 11
1 Introduktion
1:1 Bakgrund
Enligt skyddsrumsreglerna Skyddsrum SR 09, MSB (2009), skall ett
skyddsrum klara av att motstå belastningen från ”verkan av en tryckvåg
motsvarande den som åstadkoms av en 250 kg minbomb med 50 viktprocent
TNT som briserar i det fria 5,0 m från skyddsrummets utsida”. I det ”fria”
kan tolkas som att minbomben briserar i ”luften”, men många skyddsrum är
placerade så att det ”fria” utanför skyddsrummets yttervägg består av mark-
fyllnad och jord. Därför är det också av yttersta intresse att ha en klar bild
av vad som sker om minbomben briserar i jordmaterialet utanför skydds-
rummet.
En markstötvåg bildas av att jordmaterialet accelereras av en yttre last, ex-
empelvis av en detonerad sprängladdning som är helt eller delvis begravd i
jorden, eller till exempel en kraftig stöt. Vid fallet med laddning maximeras
överföringen från laddningens frigörelse av energi till markstötvåg när ladd-
ningen är fullt nergrävd.
Markstötvågens magnitud påverkas huvudsakligen av faktorer som energi-
innehåll och snabbheten hos energifrigörelsen hos laddning, laddningens
begravningsdjup, avståndet från laddningen till studerad punkt, jordmateri-
alens egenskaper och sammansättning, och reflexioner med omgivande
material.
1:2 Syfte och målsättning
Syftet med arbetet är att införskaffa och dokumentera kunskap kring mark-
stötvågor. Här menas bl.a. hur markstötvågor kan beräknas med enklare ek-
vationer samt hur man kan ta fram materialdata för olika typer av jord-
material för att kunna utföra markstötvågsberäkningar med explicita finita
elementlösare såsom Autodyn och Ls-Dyna. Dessutom studeras hur byggna-
der kan skyddas mot markstötvågor.
För att kunna göra en bra estimering av konventionella vapenlaster krävs
god kännedom om de inblandade materialen och hur de beter sig vid stöt-
vågsbelastning. I tidigare arbete har materialdata för torr sand tagits fram
med hjälp av kvasistatiska tri-axiella experiment, Heyerdahl (2000) samt
Laine och Sandvik (2001) och har använts i markstötvågsberäkningar
Laine (2002). Dessa materialdata är mycket relevanta för att kunna beräkna
marksstötvågens fortplantning på avstånd större än cirka 1 meter från ladd-
ningen. För att kunna beräkna stötvågens fortplantning närmare än 1 meter

-- 12 of 311 --

Markstötvåg
2020-09-28 revidering 2 12
från laddningen behövs mer kunskap tas fram hur jordmaterialet beter sig
vid dessa höga trycknivåer. Detta innefattar höga trycknivåer upp till cirka
20 GPa och höga temperaturer upp till 2500 K. Här är en del av målsätt-
ningen att försöka sammanställa kunskap och information om detta för olika
jordtyper och hur materialprovning kan utföras för att få fram relevanta
materialdata.
1:3 Begränsningar
Arbetet har begränsats till att studera markstötvåg i lösa jordarter. Typiska
vapenlaster som uppstår när en minbomb detonerar en bit från en byggnad
är luftstötvågor, splitter, och markstötvågor. För närmare beskrivning om
luftstötvågor och hur de uppkommer, dess utbredning samt vad som sker
med den vid reflexion mot en byggnad, har förklarats på ett grundligt sätt i
Johansson (2002) och i Johansson och Laine (2007). För luftstötvågor och
dess komplexa utbredning inom bebyggelse rekommenderas Johansson och
Laine (2008). För förståelse om splitterbelastning på betongkonstruktioner
rekommenderas Leppänen (2004) och Leppänen (2012). Bebyggelsens mot-
ståndsförmåga mot dynamisk belastning tas inte upp i denna rapport, istället
hänvisas till Johansson och Laine (2009).
Simulering av markstötvåg på en hel räddningscentralsmodell med om-
kringliggande jord, luft och sprängladdning samt framtagande av material-
parametrar för beräkning av stötvågor har utförts i tidigare rapporter, se
Laine (2002), Laine (2001), Laine (2000:1), Laine (2000:2) och
Laine (2000:3). Läsare med behov av sammansatta komplexa simuleringar
med hänsyn till markstötvågor och hur dessa beräkningar kan sättas ihop i
Ls-Dyna hänvisas till dessa rapporter. Resultaten från dessa simuleringar
med hänsyn till byggnadens rörelser användes i studie för komponenters
skaktålighet Forsén och Sandberg (2002). Komponenters skaktålighet med
hänsyn till markstötvåg tas ej med här utan läsaren rekommenderas läsa
Forsén och Sandberg (2002).
Vibrationer och skakningar i marken som uppkommer av jordbävningar tas
ej upp i denna rapport.
1:4 Rapportens innehåll
För att kunna uppfylla önskade krav vid nyproduktion av fysiskt skydd
såsom skyddsrum och inte minst vidmakthållande av dessa behövs djupare
förståelse kring hur tryckvågen uppstår och fortplantas i de olika inblandade
materialen.
I kapitel 2 ges en översiktlig information om markstötvågor i lösa jordarter
som genereras från en sprängladdning. Frågor som besvaras är hur de bildas,
huruvida en markstötvåg är en viktig belastning, samt vilka faktorer som
påverkar markstötvågens styrka.

-- 13 of 311 --

Markstötvåg
2020-09-28 revidering 2 13
I kapitel 3 ges en matematisk beskrivning av markstötvågor, hur konserve-
ringslagar används för att beskriva fenomenet samt hur tillståndsekvationen
används för att beskriva olika jordmaterial.
I kapitel 4 beskrivs lösa jordarters sammansättning och betydelse för mark-
stötvåg. Här definieras viktiga parametrar såsom porvatten och porvolym.
Dessutom diskuteras hur tillståndsekvationen påverkas av jordartens sam-
mansättning.
I kapitel 5 beskrivs vilka faktorer som påverkar markstötvågsberäkningar,
speciellt behandlas jordmaterialets tillståndsekvation. Dessutom samman-
ställs en del stötvågsdata som har återfunnits i litteraturen.
I kapitel 6 gås igenom hur materialprovning utförs på jordmaterial för mark-
stötvågsberäkningar, speciellt upp till två olika trycknivåer för framtagning
för tillståndsekvationen för det provade materialet. Den lägre är för låga
tryck upp till 100 MPa samt den högre är för över 100 MPa i tryck.
I kapitel 7 diskuteras finitia element- och volymanalyser för markstötvågs-
beräkningar som är ett mycket kunskapsintensivt verktyg. Dessa beräk-
ningar kräver både djup kunskap om programvaran som används och om
materialens egenskaper för att uppnå tillförlitliga beräkningsresultat. Dess-
utom redovisas hur passivt skydd kan skapas mot markstötvåg för en ned-
grävd byggnad.
I kapitel 8 diskuteras hur markstötvåg rör sig runt stela kroppar. I studien
används det finita elementprogrammet Autodyn. Jordegenskaper som varie-
ras är skjuvhållfasthet och tillståndsekvation.
I kapitel 9 redovisas de vanligaste empiriska sambanden som används för
analys av markstötvåg. Redovisningen inkluderar både stötvåg med och
utan reflexioner från omgivande material. Vidare gås kraterbildning igenom.
Materialet för de empiriska ekvationerna återfinns i litteraturen och sträcker
sig från tidiga publikationer från andra världskriget till 1990-talet.
I kapitel 10 redovisas hur materialmodellen som återfinns i standardbiblio-
teket i Autodyn för torr sand har modifierats. Största skillnaden är hur till-
ståndsekvationen har ändrats för att få tryckavlastningens styvhet att både
bli tryck och densitetsberoende. Detta är viktigt för att kunna beskriva stöt-
vågens tryck och partikelhastighet som funktion av tid och avstånd disper-
gerar genom materialet.
I kapitel 11 ges slutsatser och diskussioner.

-- 14 of 311 --

Markstötvåg
2020-09-28 revidering 2 14
2 Översiktlig information
2:1 Konventionell bomb
För att beskriva hur en markstötvåg bildas bör först själva bomben placeras
in i händelseförloppet. Om man inkluderar bomben i ett beroendeschema för
hur ett skydd påverkas av stötvågens lastverkan, kan detta illustreras genom
figur 2:1a. I beroendeschemat tas hänsyn till bombens utgångsläge och se-
dan studeras sprängämnets sönderfall, vilket påverkar höljets sönderfall.
Detta bildar splitterutkast och bildande av stötvåg. Dessa är de vapenlaster
som propagerar i omgivningen och påverkar skyddet. Slutligen fås verkan
på den skyddande konstruktionen.
studerat
område
detonations-
tryck
detonations-
hastighet
frigjord
energimängd
per massenhet
frigjord
energimängd
per längdenhet
totalt
deformations-
arbete per
längdenhet
splittrens
material-
egenskaper
splittrens storlek,
tvärsnittsyta, form
splittrens
massa
splittrens
utkastningsvinkel
tillgänglig
energimängd
per längdenhet
totalt
splittrens utkast-
ningshastighet
splittrens
räckvidd
stötvågens
tryck
stötvågens
varaktighet
stötvågens
tryck-tids-
förhållande
propagering i
omgivningen
penetrering
av skyddet
verkan
i målet
stötvåg
splitter
explosivämnets
kemiska
sammansättning
reaktionsproduk-
ternas kemiska
sammansättning
bildningsvärmen
för ämnena
explosivämnets
densitet
explosivämnets
massa per
längdenhet
explosivämnets
totala massa
höljets massa
per längdenhet
höljets tjocklek
per längdenhet
höljets material-
egenskaper
höljets
densitet
Explosivämnet
Höljet
Bomben i helhet
Utgångsläge Sprängämnets
sönderfall
Höljets
sönderfall
Splitterutkast 	Utsläppt stötvåg
stötvågens
infallsvinkel
bombens
geometri
bombens
initiering
bombens
placering
bomb med
ofragmenterat
hölje
längdenhet
Figur 2:1a. Beroendeschema där laddningen är inkluderad.

-- 15 of 311 --

Markstötvåg
2020-09-28 revidering 2 15
Snabba kemiska reaktioner som involverar bildande av gaser kan klassas in i
olika nivåer med hänsyn till ökande energifrigörelsehastighet:
• Förbränning
• Explosion/deflagration
• Detonation.
Förbränning sker under tidsförlopp av sekunder. Deflagrationen sker under
tidsförlopp av millisekunder. Detonation sker under tidsförlopp av mikrose-
kunder det vill säga avsevärt snabbare än de två andra.
Energifrigörelsen från laddningar som detonerar är inte extremt hög. Det
kan förefalla ologiskt men anledningen till detta är att energifrigörelsen sker
så snabbt vid detonation att den därmed får hög verkan.
Energifrigörelsens hastighet hos det detonerande sprängämnet, det vill säga
hastigheten på hur snabbt detonationsprodukterna, spränggaserna, bildas är
varför sprängämnet får så hög verkan. Spränggaserna är i ett extremt kom-
primerat tillstånd, högt tryck och hög temperatur, på grund av den snabba
energifrigörelsen. Dessa extremt komprimerade gaser vill expandera och ut-
öka sin volym så att trycket i gasen minskar. Vid expansionen utförs ett ar-
bete mot alla omgivande material. Denna expansion är den grundläggande
orsaken till bildande av bland annat markstötvåg.
Vanligtvis frigörs ungefär 4 till 5 MJ per kg laddning för vanliga sprängme-
del såsom TNT. Detonationshastigheten som sprängämnet detonerar med
ligger runt 5000 till 8000 m/s för de vanligaste sprängämnena. En bra över-
siktlig beskrivning av stötvågor och detonation återfinns i Meyers (1993).
Detaljerad information om sprängämnen och dess egenskaper återfinns i
Dobratz och Crawford (1985).
2:2 Hur bildas en markstötvåg?
En markstötvåg bildas av att jordmaterialet accelereras av en yttre last, ex-
empelvis av en detonerad sprängladdning som är helt eller delvis begravd i
jorden eller till exempel en kraftig stöt. Vid fallet med laddning maximeras
överföringen från laddningens frigörelse av energi till markstötvåg när ladd-
ningen är fullt nergrävd.
När laddningen detonerar så bildas spränggaser som har högt tryck och hög
temperatur. Dessa spränggaser vill expandera för att nå samma jämviktstill-
stånd som omgivande material hade före detonationen. Denna expansion le-
der till att en stötvåg bildas i det omgivande jordmaterialet. Jordmaterialet
komprimeras kraftigt och en stötvågsfront bildas mellan okomprimerat
material framför och komprimerat material bakom fronten. I figur 2:2a illu-
streras hur spränggaserna komprimerar omkringliggande media så att en
stötvåg bildas. Stötvågsfronten är en tydlig diskontinuitet med hänsyn till
tryck-, densitet-, och energitillstånd som materialet upplever. Precis bakom

-- 16 of 311 --

Markstötvåg
2020-09-28 revidering 2 16
stötvågsfronten sägs materialet ha ett stötvågstillstånd som ofta kallas för
Hugoniot-tillståndet. Efter detta sker en avlastning av stötvågen.
Figur 2:2a. Illustration av hur spränggaserna komprimerar den omkringliggan-
de jorden.
Den överförda energin från spränggaserna till omkringliggande media sprids
i alla riktningar vilket gör att stötvågens styrka avtar kraftigt med avståndet
från detonationscentrum.
Figur 2:2b. Illustration av vilka faktorer som påverkar markstötvågens magni-
tud och varaktighet.
laddningens egenskaper och form
djup
omgivande material
avstånd
studerad punkt
jordmaterialets sammansättning

-- 17 of 311 --

Markstötvåg
2020-09-28 revidering 2 17
I figur 2:2b illustreras vilka faktorer som påverkar markstötvågens magnitud
och varaktighet. Dessa faktorer är:
• Energiinnehåll och snabbheten hos energifrigörelsen hos laddning.
• Laddningens utformning såsom geometri och eventuellt hölje.
• Vid vilket djup i marken laddningen detonerar.
• Avståndet från laddningen till studerad punkt.
• Jordmaterialens innehåll och sammansättning.
• Reflexioner med omgivande material.
Energiinnehållet ger en bild av storleksordningen av det arbete som kan ut-
föras, därutöver är det alltid hastigheten av energifrigörelsen som avgör den
totala verkan som laddningen kan ha. Laddningens utformning påverkar
koncentrationen av stötvågen, speciellt i närområdet. Om laddningen har
tjockt hölje, såsom splitterladdning, så förbrukas en viss del av energin till
att fragmentera upp höljet. Laddningsdjupet påverkar direkt hur mycket
energi som transmitteras ner i marken, vilket resulterar i en markstötvåg.
Resterande delen av energin ger upphov till luftstötvåg ovan mark.
Avståndet till studerad punkt påverkar hur mycket av energin som hinner
sprida sig till omgivningen. Energiutbredningen sker sfäriskt, varför ett kort
avstånd ger stor energikoncentration och därmed stor lasteffekt. På ett
längre avstånd från laddningen har den sfäriska volymsutbredningen mar-
kant sänkt lasteffekten i den studerade punkten. Om ett jordmaterial absor-
berar mycket energi, minskar styrkan snabbare hos den transmitterade stöt-
vågen så att en mindre farlig situation uppstår för den skyddande kon-
struktionen. Omvänt kan ett reflekterande material, såsom underliggande
berglager eller grundvattennivå, ge upphov till stötvågor som samverkar
med varandra och kan därmed förvärra belastningsfallet. Närmast ladd-
ningen är marktryck, stötvågshastighet och partikelhastighet som störst och
avtar med avståndet från laddningen och tiden. Vid explosion i marken är
det stora jordvolymer som flyttas och leder till kraterbildning.
2:3 Är markstötvåg ett viktigt lastfall?
För att ge ett första svar på frågan om markstötvåg är ett viktigt lastfall kan
man börja med att studera vilken storlek i tryck och impulstäthet som upp-
står i luftstötvåg för en viss laddning på ett specifikt avstånd och vad mot-
svarande nivåer är i markstötvåg. Låt oss studera stötvåg från laddningsvikt
på 125 kg TNT på 5 meters avstånd.
I figur 2:3a redovisas reflekterat och oreflekterat tryck hos en hemisfärisk
utbredd luftstötvåg som funktion av tiden. Med reflekterat tryck menas om
stötvågen mäts framför en stel vägg som hindrar spridning av stötvågen och
därför sker en tryckhöjning. Trycket ökar cirka sex gånger när luftstötvågen
reflekteras mot en vinkelrät stel vägg. Maximala trycken i båda fallen är
1,4 MPa och 8,1 MPa. Den totala impulsintensiteten, det vill säga trycket
integrerat över tid, är ett intressant mått för stötvågor. Den säger i princip

-- 18 of 311 --

Markstötvåg
2020-09-28 revidering 2 18
hur mycket rörelsemängd som stötvågen kan generera på en konstruktion
med viss anslagsyta och massa. För det oreflekterade fallet är impulsinten-
siteten 1160 kPa-ms och för reflekterade fallet 4424 kPa-ms.
Figur 2:3a. Beräknad luftstötvåg med hemisfärisk spridning på 5 meters av-
stånd från detonerad laddning på 125 kg TNT. Beräkningar utförda
med ConWep (1992).
Beräkna nu markstötvågstryck för samma fall, 5 meter och 125 kg TNT, där
detonationen antas ske på 3 meters djup och trycket mäts 3 meter ner i
markytan. Studera dessutom vad marktrycken blir vid två olika jordmaterial:
torr sand med densitet 1630 kg/m3 och seismisk våghastighet 305 m/s samt
våt lera med densitet 1920 kg/m3 och med seismisk våghastighet 1524 m/s.
Då fås följande tryck, se figur 2:3b, där tryckvåg i luft jämförs med mark.
Figur 2:3b. Jämförelse mellan beräknad luftstötvåg, markstötvåg i torr sand
och våt lera på 5 meters avstånd från detonerad laddning på
125 kg TNT. Beräkningar utförda med ConWep (1992), hänsyn har
tagits till reduktion av marktryck på grund av ytreflexion mot mark-
ytan.
0
1
2
3
4
5
6
7
8
9
0 	2 	4 	6 	8 	10 	12
Tryck [MPa]
Tid [ms]
luftstötvåg -oreflekterad
luftstötvåg -reflekterad
0
2
4
6
8
10
12
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Tryck [MPa]
Tid [ms]
luftstötvåg -oreflekterad
luftstötvåg -reflekterad
Markstötvåg -torr sand
Markstötvåg -våt lera

-- 19 of 311 --

Markstötvåg
2020-09-28 revidering 2 19
Vad som direkt kan ses i figur 2:3b är att det positiva trycket varar längre
hos stötvågen i mark än i luft. Dessutom är maxtrycket i våt lera högre än i
det reflekterade fallet av luftstötvågen. Maxtrycket i fallet med torr sand är
1,4 MPa och i våt lera 12,1 MPa. Den totala impulstätheten är
12 600 kPa-ms vid fallet med torr sand och 18 200 kPa-ms för våt lera. Så
även om det mildare fallet av markstötvåg, torr sand, jämförs med den re-
flekterade luftstötvågen så är impulstätheten nästan tre gånger större i mark-
stötvågen. Denna jämförelse är konservativ, för hänsyn till reducerad stöt-
våg på grund av reflexion mot markytan har tagits med i markstötvågen. I
tillägg är det oreflekterat marktryck som jämförs med luftstötvågen. Re-
flexionskoefficienten i marken är dock aldrig lika hög som i luftstötvåg.
Denna ökning i impulsintensitet påvisar att markstötvåg i allra högsta grad
bör beaktas som ett viktigt lastfall om dimensionering av delvis eller helt
nergrävda konstruktioner ska utföras.
Denna rapport kommer dock ej i detalj studera fysiken kring hur en ner-
grävd konstruktion svarar på en markstötvåg, utan fokuset ligger i att kunna
beräkna markstötvågstrycken fram till konstruktionen. En positiv effekt som
kan uppstå är att marken bidrar till ökad massa hos konstruktionen vilket
skulle kunna leda till en viss skyddande effekt och eventuellt minska de-
formationer hos konstruktionen. Denna typ av frågor om hur markstötvågen
i detalj interagerar med en nergrävd konstruktion behandlas dock inte i
denna rapport utan planeras att tas upp i en kommande rapport.

-- 20 of 311 --

Markstötvåg
2020-09-28 revidering 2 20
3 Matematisk beskrivning av stötvågor
3:1 Översikt
Detta kapitel ger övergripande bakgrund för hur man numeriskt kan be-
stämma stötvågsparametrar hos ett stötvågsbelastat material. Först behand-
las de tre konserveringslagar som används för beskrivandet av stötvågor.
Dessa lagar ger oss mer obekanta än tillgängliga ekvationer. Det som saknas
är kännedom om materialets egenskaper, såsom dess tillståndsekvation, vil-
ket detta kapitel avslutas med.
3:2 Konserveringslagar
När en stötvågs spänningsnivå i materialet kraftigt överskrider den dyna-
miska hållfastheten hos materialet kan skjuvhållfastheten hos materialet
negligeras. Vid dessa fall kan materialen förenklas till en kompressibel
vätska som stötvågen passerar igenom. Stötvågens front antas ha obetydlig
tjocklek. Därför kan detta ses som en diskontinuitet i materialet. I figur 3:2a
visas ett exempel där en kolv rör sig med hastigheten Up i en cylinder med
konstant area A.
Figur 3:2a. Kolv som rör sig med hastigheten Up i en cylinder kompressibellt
material.
Tid: t = t0 = 0
P0,

0, E0
Up0=0
Tid: t = t1
P0,

0, E0
Up0=0
P,

, E
Up 	Us
(Us-Up)t1	Upt1
Ust1

-- 21 of 311 --

Markstötvåg
2020-09-28 revidering 2 21
Kolven komprimerar materialet med de initiella tillstånden: tryck P0, densi-
tet
0, energiintensitet E0, partikelhastighet Up0 = 0, och stötvågshastighet
Us0 = 0. En stötvåg bildas framför kolven. Det komprimerade materialet har
nu tillstånden tryck P, densitet
, energiintensitet E, partikelhastighet Up,
och stötvågshastighet Us. Stötvågsfronten rör sig med hastigheten Us som är
snabbare än hastigheten hos kolven. Dessa antaganden redovisas i
Meyers (1993).
3:21 Massans bevarande
Den ostörda massan före är lika med den komprimerade massan efter. Ef-
tersom arean i kolven har arean A fås följande ekvation
( 	)
A	t	U	U	A	t	U p	s	s 1	1	0 −	=

		
(3:21a)
där vänstra termen är lika med den okomprimerade massan hos materialet
och den högra motsvarar den komprimerade massan. Ekvationen gäller för
alla tider och kan sålunda omskrivas till
( 	)	
p	s	s U	U	U −	=

	
0	
(3:21b)
3:22 Rörelsemängdens bevarande
Rörelsemängden definieras som produkten av massan och hastigheten. Änd-
ringen i rörelsemängd hos ett system är lika med impulsen som tillförs sy-
stemet, där impulsen definieras som trycket integrerat över tiden. Vid tiden
noll kan rörelsemängden antas vara noll, vilket ger
( 	)	
1 0 1	( ) 0 .	s p p	U U U t P P t	

	− − = −	
(3:22a)
Vänsterledet i ekvation (3:22a) visar skillnad i rörelsemängden efter stötvå-
gen hos materialpartiklar med hastigheten Up minus rörelsemängden före
som antogs vara noll. Högerledet är den impuls som systemet har tillförts.
Denna ekvation kan omskrivas som
( 	)	
0	( ) .	s p p	U U U P P	

	− = −	
(3:22b)
Med nyttjande av massans bevarande kan ekvationen skrivas om till
( 	)	
0 0 .	s p	P P U U	

	− =	
(3:22c)

-- 22 of 311 --

Markstötvåg
2020-09-28 revidering 2 22
3:23 Energins bevarande
Energins bevarande fås genom att likställa det arbete
W som utförs av yttre
krafter med ändringen av intern energi
Wi plus ändringen av kinetisk
energi
Wk, det vill säga
.	i k	W W W	 =  + 	
(3:23a)
Ändringen i den interna energin vid tiden t för den komprimerade zonen kan
skrivas som
( 	)	
( 	)	
( 	) ( 	)	
0 0 0 0	i s p s s	W E U U t E U t E E U t	

	
	
	 = − − = −	
(3:23b)
och ändringen i kinetisk energi kan skrivas som
( 	)
2 2	1 1 0	2 2	0	p p	k s p s	W U U U t U U t	

	
	 = − − =	
(3:23c)
I ekvation (3:23c) antas att den kinetiska energin vid tiden t0 är lika med
noll. Det yttre arbetet är kraften multiplicerat med längden
0 .	p p	W PU t PU t	 = −	
(3:23d)
Vid tiden t0 är Up0 lika med noll vilket ger
.	p	W PU t	 =	
(3:23e)
Nu kan energins bevarande skrivas med hjälp av ekvationerna (3:23b),
(3:23c), (3:23e) insatt i ekvation (3:23a)
( 	)
2	1
0 0 0	2 p	p s s	PU t E E U t U U t	

	
	= − +	
(3:23f)
Vilket för alla tider kan skrivas som
( 	)
2	1
0 0 0	2 p	p s s	PU E E U U U	

	
	= − +	
(3:23g)
Energins bevarande kan också skrivas på en mer allmän form. Om E - E0 i
ekvation (3:23g) frigörs
( 	)
2
0	1
0 2
0 0
p	s	p
s s
U U	PU
E E U U


	
− = +	
(3:23h)
Från rörelsemängdens bevarande kan partikelhastigheten skrivas som
Up = (P - P0) / (
0Us) och används detta i ekvation (3:23h) fås

-- 23 of 311 --

Markstötvåg
2020-09-28 revidering 2 23
( 	) 	( 	)
2
0 0	0 1
0 2	2 2 2 2
0 0	s s
s	U P P	P P P
E E U U


	
−	−
− = +	
(3:23i)
En viktig egenskap kan härledas för stötvågshastigheten om man utgår från
ekvation (3:22c) rörelsemängdens bevarande skrivas som
𝜌0𝑈𝑠 = 𝑃−𝑃0
𝑈𝑝
och (3:23j)
Från massans bevarande fås
0Us=
(Us-Up) varvid partikelhastigheten kan
skrivas som
𝜌0𝑈𝑠 = 𝜌(𝑈𝑠 − 𝑈𝑝) ↔ 𝑈𝑝 = 𝑈𝑠
𝜌−𝜌0
𝜌 (3:23k)
Ekvation (3:23k) insatt i (3:23j) ger
𝜌0𝑈𝑠
2 = 𝜌(𝑃−𝑃0)
(𝜌−𝜌0) = 𝑃−𝑃0
(1−𝜌0/𝜌) (3:23l)
Införs beteckningen specifik volym v = 1/
 så kan ekvation (3:23l) omskri-
vas till
𝜌0𝑈𝑠
2 = 𝑃−𝑃0
(1−𝑣/𝑣0) ↔ 𝜌0
2𝑈𝑠
2 = − 𝑃−𝑃0
(𝑣−𝑣0) (3:23m)
Sätts nu detta slutligen in i ekvation (3:23i) så kan energins bevarande skri-
vas som
𝐸 − 𝐸0 = 1
2 (𝑃 − 𝑃0)(𝑣 − 𝑣0) (3:23n)
3:24 Tillståndsekvation (EOS)
För att analytiskt beskriva stötvågsfenomenet kan man använda sig av kon-
serveringslagar. De tre konserveringslagarna, bevarande av massan,
rörelsemängd och energi är beskrivna i ekvationerna (3:24a), (3:24b), och
(3:24c). För härledning, se avsnitt 3:23. Här finns fem variabler: tryck P,
partikelhastighet Up, stötvågshastighet Us, densitet ρ eller specifik volym v
och energi E. Sålunda behövs en ekvation till för att beskriva alla variabler
som funktion av en. Denna fjärde ekvation kallas för tillståndsekvation, på
engelska Equation of State (EOS).
( 	)	
p	s	s U	U	U −	=

	
0	
(3:24a)
( 	)	
p	sU	U	P	P 0	0	

	=	−	
(3:24b)
𝐸 − 𝐸0 = 1
2 (𝑃 − 𝑃0)(𝑣 − 𝑣0) (3:24c)

-- 24 of 311 --

Markstötvåg
2020-09-28 revidering 2 24
Det finns flera olika typer av tillståndsekvationer. Det är vanligt förekom-
mande med en empirisk tillståndsekvation som beskriver relationen mellan
Us och Up. Ekvationen skrivs som ett polynom med konstanterna C0, Si
i = 1,…,n, såsom
...2
2	1	0 +	+	+	= p	p	s U	S	U	S	C	U	
(3:24d)
Dessa konstanter återfinns ofta i litteraturen, se exempelvis Meyer (1993),
och används speciellt för metaller. Ett mer generellt sätt att ange en till-
ståndsekvation är trycket som en funktion av densitet ρ och intern energi E,
dvs. P(ρ,E). Detta generella sätt används ofta för porösa material såsom
jord. Den främsta svårigheten med bestämning av storleken av stöt-
vågsparametrar är att ha tillräckliga data om jordmaterialet, det vill säga ha
kännedom om dess tillståndsekvation.
En mycket förenklad form av denna generella form av tillståndsekvation är
den linjära som ofta beskrivs på följande sätt
𝑃 = 𝐾𝜇 (3:24e)
𝜇 = 𝜌
𝜌0
− 1 (3:24f)
där 𝐾 är materialets kompressionsmodul och 𝜇 är kompressionen. Denna
tillståndsekvation bör dock bara användas när små kompressioner kan för-
väntas och att materialet kan förväntas också avlastas elastiskt till initiell
kompression och densitet.
3:25 Rankine-Hugoniot ekvationen och
Rayleighlinjen
Om tillståndsekvationen är given som P(ρ,E) kallas sambandet ofta för
Rankine-Hugoniot ekvationen eller bara 'Hugoniot'. Ekvationen beskriver
vilka tillstånd som är möjliga för materialet att uppnå, där P och ρ är vad
som upplevs precis bakom stötvågsfronten inom det komprimerade området.
I figur 3:25a visas Hugoniot kurvan för ett godtyckligt material.

-- 25 of 311 --

Markstötvåg
2020-09-28 revidering 2 25
Densitet,

Tryck, P
	

P1
P0
Rayleighlinjen
Hugoniotkurvan
Us
P0,

0
P1,

1
Figur 3:25a. Hugoniotkurva för ett godtyckligt jordmaterial samt en skiss som vi-
sar hur stötvågen framskrider endimensionellt.
När materialet utsätts för en stötvåg så följer man inte Hugoniotkurvan utan
materialet hoppar mellan de olika materialtillstånden. I figur 3:25a visas hur
materialet hoppar från (ρ0, P0) till (ρ1, P1) precis framför respektive bakom
stötvågsfronten. Så om materialet upplever en stötvågspuls med ett max-
tryck P1 så följs inte Hugoniotkurvan. Det är istället en diskontinuitet i tryck
och densitet som stötvågsfronten beskriver. Rayleighlinjens lutning beskri-
ver hur stor stötvågens hastighet Us är och relationen kan uttryckas som
𝜌0
2𝑈𝑠
2 = − 𝑃1−𝑃0
(𝑣1−𝑣0) (3:25a)
där vi = 1 / ρi, i = 0, 1 är specifik volym och (P1 - P0) / (v0 - v1) är lutningen
hos Rayleighlinjen. För härledning se ekvationer (3:23j)-(3:23m). Lutningen
hos Hugoniotkurvan är proportionell mot kvadraten av stötvågshastigheten
Us. Ju större skillnad det är mellan de olika tillstånden före och efter stöt-
vågsfronten, desto kraftigare blir stötvågshastigheten Us.
Så om vi vet hur stort trycket är efter stötvågsfronten kan alla andra para-
metrar bestämmas med hjälp av konserveringslagarna. Uttryck för stötvågs-
hastigheten Us och partikelhastigheten Up fås med hjälp av ekvationerna för
bevarande av massan och bevarande av rörelsemängden och kan uttryckas
som
𝑈𝑠 = 𝑣0√ 𝑃1−𝑃0
(𝑣0−𝑣1) (3:25b)
samt
𝑈𝑝 = 𝑣0√ 𝑃1−𝑃0
(𝑣0−𝑣1) (3:25c)

-- 26 of 311 --

Markstötvåg
2020-09-28 revidering 2 26
3:26 Numeriskt exempel
För att illustrera hur stötvågsparametrarna kan bestämmas så utförs här ett
beräkningsexempel för torr sand. Framtagning av tillståndsekvationen P(ρ)
för den torra sanden beskrivs i rapporten Laine (2002). Vi utgår alltså från
att vi känner materialets tillståndsekvation.
I figur 3:26a visas hugoniotkurvan för en torr sand från Sjöbo. Vi tar och ut-
för tre olika stötvågsbelastningar för sanden. Antag att initiellt tryck P0 = 0
och intern energi E0 = 0 för de tre fallen.
Figur 3:26a. Del av Hugoniotkurvan för torr sand. Med In situ-densitet
1674 kg/m3.
Dessutom antas vi veta att trycket P bakom stötvågsfronten för de olika
stötvågsfallen är lika med 98,1, 289,4 och 650,7 MPa. Med hjälp av
Hugoniotkurvan eller tillståndsekvationen kan vi direkt bestämma vad den-
siteten är hos det komprimerade materialet omedelbart bakom stötvågs-
fronten. Dessa värden för densiteten kan läsas ur framtagen EOS för sand-
materialet, se tabell 3:26a. Densiteten ökar från 1674 kg/m3 till 2250, 2485,
respektive 2671 kg/m3 för de tre stötvågsfallen.
0.0E+00
2.0E+08
4.0E+08
6.0E+08
8.0E+08
1600 	1800 	2000 	2200 	2400 	2600 	2800
Tryck,
 P [Pa]
densitet,

[kg/m3]
Hugoniotkurva för torr sand
Rayleighlinje1
Rayleighlinje2
Rayleighlinje3

-- 27 of 311 --

Markstötvåg
2020-09-28 revidering 2 27
Tabell 3:26a. Tillståndsekvation för torr sand från Sjöbo för tryck mellan 0 och
650 MPa.
Densitet, ρ [kg/m3] Tryck, P [MPa]
1674 0
1739 4,58
1874 15,0
1997 29,2
2143 59,2
2250 98,1
2380 179
2485 289
2585 450
2671 651
Om vi nu utgår från att stötvågsfronten har obetydlig tjocklek och att skjuv-
hållfastheten hos sanden inte påverkar resultaten, kan vi använda konserve-
ringslagarna för att bestämma stötvågshastigheten Us, partikelhastigheten
Up, och energin E. För det första fallet blir
7
1 0
0
0 1
1 9,810 10 0 478, 2
1 1	1674
1674 2250
s
P P
U V V V
−  −
= = =
− −
m/s (3:26a)
och
7
1 0
0 1
9,810 10 0
1 1
1674 2250
p
P P
U V V
−  −
= =
− −
=122,5 m/s (3:26b)
Slutligen bestäms intern energi till att vara
( 	)( 	)
7
0 0
1 1 1 1
(9,810 10 0)( )
2 2 1674 2250
E P P V V	= − − =  − −	
= 7501 J/kg (3:26c)
På samma sätt beräknas sedan de två andra stötvågsfallen. Resultaten är
samlade i tabell 3:26b.
Tabell 3:26b. Tre stötvågstillstånd när sandmaterialet har initiellt tryck P0=0 och
initiell energi E0=0.
Stötvågs-
fall
ρ [kg/m3] P [MPa] Us [m/s] Up [m/s] E [kJ/kg]
1 2250 98 478 123 7,5
2 2485 289 728 238 28,2
3 2671 651 1020 381 72,5

-- 28 of 311 --

Markstötvåg
2020-09-28 revidering 2 28
Som vi kan se i tabell 3:26b så ökar stötvågshastigheten Us när stötvågs-
trycket P ökar. Detta illustreras också av de tre Rayleighlinjer som är inri-
tade i figur 3:26a. Lutningen hos Rayleighlinjen är proportionell mot
kvadraten av stötvågshastigheten Us.

-- 29 of 311 --

Markstötvåg
2020-09-28 revidering 2 29
4 Jordmaterials sammansättning
4:1 Översikt
Tillförlitliga materialdata över olika typer av jordtyper är önskvärda för att
noggrant kunna beräkna markstötvåg. Dessutom kommer de faktorer som
huvudsakligen påverkar markstötvågens styrka och avtagande att belysas.
4:2 Lösa jordars sammansättning
Jord består av partiklar som tillsammans formeras till ett skelett. Mellan
kornen bildas hålrum, vilka antingen är fyllda av gas och/eller vatten. Jord
är således sammansatt av både fasta partiklar, gasformiga delar, och vätskor.
Huvudkälla till materialet redovisat i detta delavsnitt är Hansbo (1975).
Fasta partiklar
Fasta partiklar kan bestå av mineraler och organisk substans. Mineralpar-
tiklarna är från mineralgrupperna silikater, karbonater, och sulfider, där mi-
neralgruppen silikater är den dominerande gruppen. De vanligaste silikatmi-
neralen i grovkorniga jordar är de som förekommer i berggrunden. För
Sverige gäller kvarts SiO2, fältspat KAlSi3O8 eller KA(Ca,Na)AlSi3O8,
glimmer KAl2(AlSi3O10)(OH)2 eller K(Mg,Fe)3AlSi3O10(OH)2, poryxen
(Mg,Fe)SiO3, amfibol (Ca2Mg5)Si8O22(OH)2, olivin (Mg,Fe)SiO4, epidot
och granat. I finkorniga jordar förekommer dessutom silikatmineral tillhö-
rande lermineralen. Lermineralen byggs upp av skikt bestående av SiO4-tet-
raedar (Al,Mg)(O,OH) oktaedrar. Tetraeden är en tredimensionell geomet-
risk form som består av 4 trianglar där tre sidor möts i varje hörn, jämför
med pyramid. Oktaederns yta består av åtta liksidiga trianglar, jämför med
åtta-sidig tärning. Den vanligaste lermineralen i Sverige är illit. Den har ett
kristallgitter som består av cirka 1 nanometer tjocka enhetsskikt. Den orga-
niska substansen utgörs av allt från makroskopiska blad och rötter till mik-
roskopiska djur, sporer, pollen alger och så vidare.
Porvatten
Porvatten innehåller alltid mineralpartiklar, humusgel, gaser samt lösta sal-
ter. De mest vanligt förekommande positiva jonerna är Na+, Mg2+, Ca2+, och
K+ medan de vanligaste negativa jonerna är Cl-, SO2-4, och HCO-3. Upp-
slamningen av fasta partiklar i vätskan understiger oftast 0,5 promille.
Porgas
Porgasen består av syre, kväve, koldioxid och metan. Den förekommer i po-
rerna men också som gasbubblor i porvattnet. Vid tryckökning minskar gas-

-- 30 of 311 --

Markstötvåg
2020-09-28 revidering 2 30
blåsornas storlek och går till lösning, vilket innebär att gasen är upplöst i
grundvatten.
Kornstorlek och kornfördelning
Kornstorlek och kornfördelning är viktiga faktorer för att bestämma mine-
raljordarnas mekaniska egenskaper. Följande fraktionsindelning och jord-
typsbenämning brukar användas för att definiera olika jordarter, se ta-
bell 4:2a.
Tabell 4:2a. Kornstorlek av olika jordtyper.
Jordtyp Kornstorlek
d [mm]
Block och sten
Block ≥600
Sten 60 till 600
Grovjord
Grus 2 till 60
Sand 0,06 till 2
Finjord
Silt 0,002 till 0,06
Ler ≤ 0,002
När halten av en ingående fraktion överstiger 40 viktprocent benämns jor-
den med substantivet. Adjektiv benämning används för de fraktioner som
innehåller cirka 10 till 40 procent. Exempel: Antag att en jord innehåller 42
procent finjord ler och 21 procent sand. Då skulle denna jord benämnas san-
dig lera.
Kornfördelningen studeras genom att ur kornfördelningskurvan beräkna.
10
60
d
d
Cu =	
(4:2a)
där d60 innebär att 60 viktprocent av jorden passerade denna kornstorlek och
d10 att 10 viktprocent av jorden passerade denna kornstorlek.
Därefter benämns jordens gradering efter följande graderingstal:
• Ensgraderat Cu < 5
• Mellangraderat 5 < Cu < 15
• Cu > 15
En annan viktig egenskap är att undersöka jordens organiska halt. Denna är
minst lika viktig som klassificering med hjälp av kornstorlek och fördelning.
Halten av brännbar viktprocent mäts och därefter används följande kriterier
och benämningen ’gyttjig’ eller ’gyttja’ för att beteckna mängden av orga-
niskt material i jorden:

-- 31 of 311 --

Markstötvåg
2020-09-28 revidering 2 31
• Organiska mineraljordarter: 2 till 6 viktprocent organiskt material,
exempel: gyttjig lera.
• Mineraliska organiska jordarter: 6 till 20 viktprocent organiskt material,
exempel: lerig gyttja.
• Organiska jordarter: över 20 viktprocent organiskt material,
exempel: gyttja.
En viktig aspekt när man talar om jordar är om de tillhör friktionsjordar eller
kohesionsjordar. Med friktionsjord menas de grovkorniga jordarterna sand,
grus och sten. I friktionsjord är skjuvhållfastheten en direkt funktion av
normaltrycket mellan partiklarna och deras inbördes friktion. Draghållfast-
het saknas.
Till kohesionsjordar räknas lera och de organiska jordarterna som dy och
gyttja. För kohesionsjordar bildas huvudsakligen skjuvhållfastheten vid
snabba förlopp av kohesion, dvs. dragningskraften mellan partiklarna. För-
enklat så är skjuvhållfastheten omvänt relaterad till portalet, där portal defi-
nieras som kvoten mellan porvolymen och den fasta substansens volym.
Dessa jordar har ofta en viss draghållfasthet. Vatteninträngningen är mycket
låg.
Mellan dessa två ytterligheter finns en jord som kallas mellanjord. Hos
mellanjordar byggs skjuvhållfastheten upp av både friktion och kohesion.
Definitioner
Som tidigare nämnts innehåller jorden både fasta, flytande och gasformiga
beståndsdelar. Detta illustreras i figur 4:2a.
V
Vp
Vα
Vω
Porgas, ρα
Porvatten, ρω
Fast substans, ρs
Volymbeteckning Uppdelning, densitet
mα
mω
ms
Massabeteckning
Vs
Figur 4:2a. Schematisk skiss över ett jordelements fasta, flytande och gasfor-
miga beståndsdelar. Till vänster i figuren visas volymindelningen
och till höger massindelningen.

-- 32 of 311 --

Markstötvåg
2020-09-28 revidering 2 32
Kompaktdensitet, ρs
Denna betecknas som kvoten mellan den fasta substansens massa ms och
dess volym Vs:
𝜌𝑠 = 𝑚𝑠
𝑉𝑠
(4:2b)
Kompaktdensiteten ger en uppfattning om hur mineralsammansättningen är.
Korndensitet, ρk
Korndensiteten är förhållandet mellan kornens massa mk och volym Vk.
𝜌𝑘 = 𝑚𝑘
𝑉𝑘
(4:2c)
Korndensiteten hos till exempel kvarts är cirka 2650 kg/m3. I jämförelse
med ekvation (4.2b) är det specifika kornens densitet som tas upp här, vilket
vanligtvis ger korndensiteten ett högre värde.
Skrymdensitet, ρ
Skrymdensiteten ges av förhållandet mellan total massa m och total volym V
utan hänsyn till inre uppbyggnad.
𝜌 = 𝑚
𝑉 (4:2d)
Porvatten
Mängden porvatten brukar studeras med hjälp av vattenkvoten och vatten-
mättnadsgrad.
Vattenkvot,

Vattenkvoten betecknas som kvoten mellan vattnets massa och fasta sub-
stansens massa.
𝜔 = 𝑚𝜔
𝑚𝑠
(4:2e)
Vattenmättnadsgrad, Sr
Vattenmättnadsgraden betecknas som kvoten mellan vattnets volym och
porvolymen.
𝑆𝑟 = 𝑉𝜔
𝑉𝑝
(4:2f)
Vattenmättnadsgraden anger hur stor del av porvolymen som är fylld med
vatten.
Porvolym
Portal, e
Portalet betecknas av kvoten mellan porvolymen Vp och den fasta substan-
sens volym Vs

-- 33 of 311 --

Markstötvåg
2020-09-28 revidering 2 33
𝑒 = 𝑉𝑝
𝑉𝑠
(4:2g)
Porositet, n
Porositeten är porvolymens andel av totala volymen.
𝑛 = 𝑉𝑝
𝑉 (4:2h)
Mellan e och n råder följande samband
n
n
e −
= 1
(4:2i)
Dessa samband är relevanta för att tolka resultat från provtagning av jord-
material från fält. Speciellt intressanta för markstötvåg är skrymdensiteten,
korndensiteten, porositet, och vattenmättnadsgraden, se exempelvis
Hansbo (1975) för mer detaljer. Denna referens är också huvudreferens för
detta delkapitel.
4:3 Jordens markstötvågsegenskaper
Det är flera aspekter som påverkar markstötvågens styrka och avtagande
från laddningscentrum. Jord är ett komplext material och det finns egentli-
gen inga klara enkla regler för att beräkna markstötvåg med hög noggrann-
het. För att utföra noggranna beräkningar behöver man utföra materialprov-
ning på det aktuella jordmaterialet. Dock finns det vissa riktlinjer som man
kan följa. För markstötvåg är det följande faktorer som påverkar markstöt-
vågens styrka och avtagande:
• Den fasta substansen, det vill säga de fasta partiklar som finns i jor-
den. Genom att studera de fasta partiklarnas kornstorlek och hårdhet
ger detta en indikation på vilken skjuvhållfasthet jordmaterialet
kommer att ha under en stötvåg. Om man jämför lera och sand, vilka
har en tydlig skillnad på kornstorlek, så klarar sanden mycket högre
skjuvbelastning i jämförelse med leran. I jordar med låg friktion be-
står markstötvågen huvudsakligen av en ”ren” tryckvåg utan någon
större ”skjuv”- komponent.
• Jordens porositet, det vill säga hur tätt packade de fasta partiklarna
är, har stor betydelse. Låg porositet leder till att jordmaterialet har
högre densitet och mindre energi går åt till att ”packa” ihop materi-
alet. För att få starkt avtagande markstötvåg är det önskvärt att ha så
hög porositet som möjligt i jordmaterialet. Detta leder till att energi
förbrukas när en framfarande markstötvåg ”packar” ihop materialet.
Porositeten kan också finnas i själva kornen som fortfarande har re-
lativt hög skjuvhållfasthet men att kornen krossas och smulas sönder
under kompaktering. Detta vill leda till hög energiabsorption.

-- 34 of 311 --

Markstötvåg
2020-09-28 revidering 2 34
• Viktigast av allt är mängden porvatten, vilket ges av vattenmättnads-
graden. Om porerna i jordmaterialet är fyllda med vatten krävs ingen
större energi för att markstötvågen ska transmitteras igenom materi-
alet. Vatten är dessutom svårt att komprimera, varför mängden por-
vatten är en av de viktigaste egenskaperna för ett givet jordmaterials
förmåga att förmedla en stötvåg. För en starkt avtagande markstöt-
våg är det därför önskvärt med en jord med en liten mängd vatten.

-- 35 of 311 --

Markstötvåg
2020-09-28 revidering 2 35
5 Jordmaterialets tillståndsekvation
och skjuvhållfasthet
5:1 Översikt
Jord är ett inhomogent material, se kapitel 4, vilket kräver god kunskap om
dess sammansättning för att man skall kunna förstå i detalj hur de olika hu-
vudbeståndsdelarna påverkar jordens tillståndsekvation. Huvudbeståndsde-
larna i ett jordmaterial är fast substans, porvatten, och porgas. Ett sätt att ta
fram bra materialdata är att studera faktiska jordprov som är tagna ur mar-
ken och då har den sin in-situ sammansättning och densitet kvar när den se-
dan provas. Den här typen av provning har utförts för bland annat torr sand
från Sjöbo och Leca-kulor, se Heyerdahl och Madshus (2000), Heyerdahl
och Madshus (2001) samt Laine (2002). I dessa prover togs en tillstånds-
ekvationen för materialen fram på makronivå med hjälp av kvasistatisk tri-
axiell provning för relativt låga tryck P < 100 MPa. Denna provning ger en
bra beskrivning om hur sand- eller Leca-materialet beter sig för låga tryck.
Det finns två svagheter med denna typ av provning: För det första är det
svårt att veta hur en annan sammansättning samma hos samma sand men
annan porvolym och vattenmängd kommer påverka tillståndsekvationen.
Hur detta kan tas hänsyn till kommer att behandlas i detta kapitel.
En annan svaghet med kvasistatisk provning till låga tryck är att de inte be-
skriver hur jordmaterialet beter sig i den direkta närheten av laddningen, där
trycknivå och temperatur är mycket högre än de som kan tas fram vid i
dessa fall vald provningsmetod. För att kunna beskriva hela explosions-
förloppet i mark med tillfredställande noggrannhet är det dock viktigt att ha
kännedom om hur tillståndsekvationen (EOS) ser ut för tryck och tempera-
turnivåer som kan förväntas även nära laddningen. Hur detta kan tas i be-
aktning kommer också diskuteras i detta kapitel.
5:2 Egenskaper som påverkar tillstånds-
ekvationen
Tillståndsekvationen för ett löst jordmaterial kan beskrivas med figur 5:2a.
Figuren visar densitet i horisontell axel och isotropiskt tryck på den verti-
kala axeln. Första viktiga egenskapen är den plastiska kompakteringskur-
van. Denna börjar vid initiell densitet 𝜌0 och trycket 𝑃 = 0 och slutar vid
punkten (𝜌𝑛, 𝑃𝑛), se figur 5:2a. Den initiella densiteten mäts när till exempel
provtagning görs ute i fält, då kallas den in-situ densitet. Den beskriver vil-
ken densitet, grad av kompaktering, som den ostörda jorden har. Detta
ostörda prov ger även den viktiga faktorn porositet n som det aktuella

-- 36 of 311 --

Markstötvåg
2020-09-28 revidering 2 36
materialet har, det vill säga hur stor porvolymen är i jämförelse med den
totala volymen.
Porositeten påverkar hur mycket jorden kan kompakteras innan det uppnår
teoretisk maximal densitet 𝜌𝑇𝑀𝐷, se figur 5:2a. Den teoretiska maximala
densiteten 𝜌𝑇𝑀𝐷 definieras av vilken fast substans som återfinns i jorden.
Om det till exempel huvudsakligen består av kvart kommer kvartsens stöt-
vågsegenskaper starkt påverka hur jordmaterialet kommer bete sig vid full
kompaktering. Om kornen är någorlunda homogena i sin typ är den teore-
tiska maximala densiteten 𝜌𝑇𝑀𝐷 väldigt nära korndensiteten 𝜌𝑘, se ekvat-
ion (4:2c), det vill säga den fullt kompakterade jorden kan sägas ha uppnått
ett tillstånd som motsvarar den fasta substansen hos själva jordkornen.
Det fasta materialet kommer också påverka vilken maximal elastisk våghas-
tighet 𝑐𝑇𝑀𝐷 som kommer att uppnås efter att det lösa materialet har blivit
fullt kompakterat, vilket sker när trycket är högre än (𝜌𝑛, 𝑃𝑛). När materialet
har blivit fullt kompakterat kommer på- och avlastning ske endast längs den
solida kurvan som börjar med 𝜌𝑇𝑀𝐷 vid trycket 𝑃 = 0 och går igenom
punkten (𝜌𝑛, 𝑃𝑛).
Figur 5:2a. Principiell tillståndsekvation för jordmaterial med porositet.
När jorden stötvågsbelastas följs först den plastiska kompakteringskurvan,
även kallat Hugoniotkurvan, såsom beskrevs i kapitel 3:26. Därefter kom-
mer stötvågen för ett poröst material såsom jord att avlastas längs elastiska
avlastningskurvor, vilket illustreras av de streckade kurvor som återfinns i
figur 5:2a. Detta är en viktig egenskap som måste återskapas om man vill
använda tillståndekvationen för att korrekt analysera markstötvåg. Om vi
Tryck, P
Densitet,


0

n, Pn
cTMD

TMD

-- 37 of 311 --

Markstötvåg
2020-09-28 revidering 2 37
förenklat antar att våghastigheten varierar kontinuerligt med följande ek-
vation under på- och avlastning
𝑐2 = 𝑑𝑃(𝜌)
𝑑𝜌 (5:2a)
då kan våghastigheterna för på- och avlastning jämföras, såsom visas i fi-
gur 5:2b. Vänstra figuren illustrerar en pålastning mellan punkt 1 och 2
längs den plastiska kompakteringskurvan och elastisk avlastning mellan
punkt 2 och 3. Denna avlastning benämns elastisk eftersom om materialet
komprimeras igen kommer nästa pålastning i princip först följa den senaste
avlastningen tills trycket överskrider vad som återges på den plastiska kom-
pakteringskurvan i punkt 2. Studeras då våghastigheten för dessa kurvor ser
man att avlastningshastigheten i punkt 2 är högre än pålastningshastigheten
när trycket är högt, se höger illustration i figur 5:2b. Däremot är avlast-
ningshastigheten långsammare är pålastningshastigheten vid låga tryck,
jämför punkt 1 och 3 i höger illustration i figur 5:2b. I punkt 3 kan våghas-
tigheten vara mycket lägre än den ljudvåghastighet som förknippas med
materialet. Så är fallet för till exempel torr porös sand, ett fenomen som
uppmärksammades redan av Lampson (1946).
Figur 5:2b. Illustration hur tillståndsekvationen leder till olika våghastigheter
beroende på vilket tryck det är och om det är under på- eller av-
lastning. På- och avlastning visas med heldragen respektive
streckad linje.
Om markstötvågen studeras som funktion av avståndet så är det viktigt att
förstå hur stötvågens form kommer ändras på grund av just hur på- och av-
lastningshastigheterna varierar, se Lampson (1946). I figur 5:2c illustreras
markstötvågens form vid olika avstånd från detonationscentrum. Väldigt
nära laddningen är trycket högt och avlastningen skarp, men på längre av-
stånd äts toppen upp, vid explosion nära markytan, huvudsakligen av den
halvsfäriska spridningen av energin och på grund av att avlastningshastig-
heten är snabbare än pålastningshastigheten för högre tryck. Trycksvansen
på stötvågen blir längre just på grund av att avlastningshastigheten för låga
tryck sker så mycket långsammare än pålastningen sker för låga tryck.
Densitet
Tryck
Tryck
Våghastighet
1
2
3 	3
2 	2
1

-- 38 of 311 --

Markstötvåg
2020-09-28 revidering 2 38
Figur 5:2c. Illustration av markstötvågens form vid olika avstånd från detonat-
ionscentrum.
En vanlig tillståndsmodell som brukar användas för porösa material är P-
alpha modellen, se bilaga A. Denna har bland annat använts för simulering
av nergrävda minor, se till exempel Kerley (2001) och Kerley (2002). En
viktig aspekt när det gäller till exempel nergrävda minor är att de ofta place-
ras under ett tunt skikt av jord, 5 till 20 cm, ovanpå minan som får en våld-
sam stöt av det detonerade sprängmedlet. Faktum är att största delen av
energin som genereras av detonationen sprids vertikalt uppåt och överförs
till jorden. När i form av generad rörelseenergi denna träffar en struktur, till
exempel en horisontal stålplatta som ligger vertikalt ovanför överförs den
största mängden av energi till plattan via jorden. En viktig aspekt är just jor-
degenskaperna och hur dessa påverkar den överförda energin från detonat-
ionen.
En studie har utförts på nergrävda antitankminor tillsammans med minröj-
ningstillverkaren Alvis Moelv AS, Ranestad och Laine (2003). Analyserna
påvisade att jorden ovanför minan utsätts för extremt höga tryck och tempe-
raturförändringar och att tillståndsekvationen är viktig för att fånga upp
skillnader i belastning från vattenmättad lera och torr sand från uppkastad
jord och luftstötvåg. Men den största skillnaden med dessa studier är att den
elastiska avlastningskurvan i tillståndsekvationen kan förenklas till en linjär
avlastningskurva, se figur 5:2a, där tre räta avlastningslinjer illustrerar detta.
Detta innebär att avlastningsvåghastigheten endast beror av densiteten och
inte av trycket, se även Ranestad och Laine (2003) och Laine et al. (2001b).
Däremot är den plastiska kompakteringskurvan samt egeneskaperna hos det
fullt kompakterade materialet viktiga för den här typen av närområdesana-
lyser. I markstötvågsfallet, där stötvågens formändring studeras på längre
avstånd blir det kritiskt att ha ett korrekt samband för en avlastningsvåghas-
tighet som är egentligen både densitets- och tryckberoende 𝑐𝑖(𝜌𝑖, 𝑃𝑖 ).
I Wardlaw (1996) beskrivs uppbyggnaden av P-alpha modellen, se även bi-
laga A. I P-alpha modellen finns två huvuddelar; en som beskriver det po-
rösa materialets egenskaper under kompaktering ochen som behandlar det
fullt kompakterade materialet. I bilaga A beskrivs det fullt kompakterade
materialet genom Mie-Gruneisens tillståndsekvation. Wardlaw (1996) går
igenom hur sand materialets egenskaper kan modifieras med hänsyn till vil-
Tryck
Avstånd från detonationscentrum

-- 39 of 311 --

Markstötvåg
2020-09-28 revidering 2 39
ken porvolym, vatteninnehåll och korndensitet sanden har. I P-alpha mo-
dellen definieras porositeten med hjälp av följande uttryck
𝛼 = 𝜌𝑠
𝜌 (5:2b)
där 𝜌𝑠 = 𝜌𝑇𝑀𝐷 är den solida densiteten, även kallat teoretisk maximal densi-
tet och 𝜌 är aktuell densitet. Så vid 𝛼 >1 så är materialet fortfarande i det
porösa tillståndet. När materialet kompakterats så att 𝛼 =1 då är materialet
fullt kompakterat och har nått sitt solida tillstånd och kan därför ej längre
betraktas som poröst, se figur 5:2d. Den elastiska våghastigheten är direkt
relaterad till aktuell porositet
𝑐 = 𝑐𝑠 + (𝑐𝑒 − 𝑐𝑠) (𝛼−1)
(𝛼0−1) (5:2c)
där 𝑐𝑒 är den elastiska initiella våghastigheten och 𝑐𝑠 = 𝑐𝑇𝑀𝐷 är det solida
materialets våghastighet. Ekvation (5:2c) visar att våghastigheten endast
antas bero på aktuell porositetet och inte på vilket aktuellt tryck som materi-
alet har vid avlastningen. Denna approximation av våghastigheten är fullt
tillräcklig för närområdesanalyser såsom nergrävd mina och om huvud-
fokuset är uppkastat jordmaterial och luftstötvåg. Den kan även fungera för
studie av markstötvågstryck i närområdet av explosionen.
Figur 5:2d. P-alpha modell för att beskriva porösa materials tillståndsekvation.
I P-alpha modellen används Mie-Gruinesens tillståndsekvation för att be-
skriva det fullt kompakterade materialets egenskaper. Mie-Gruneisen ger
trycket P som funktion av densitet
 och energi e. Den grundläggande for-
men är
𝑃 = 𝑃𝑟 (𝜌) + Γ0𝜌0(𝑒 − 𝑒𝑟(𝜌)) (5:2d)

-- 40 of 311 --

Markstötvåg
2020-09-28 revidering 2 40
där Γ = 1
𝜌
𝜕𝑃
𝜕𝑒 och Γρ = Γ0ρ0. Index r refererar till referenstillståndet. Det är
just dessa parametrar som kan justeras om man vet balansen hur mycket
vatten sanden innehåller. I Wardlaw (1996) nämns följande metod för att
bestämma Mie-Gruneisens konstanter för vattenmättad sand. Till detta be-
hövs vetskap om
• Den torra sandens densitet, kompaktdensiteten ρs
• Vattenmättnadsgrad, 𝑆𝑟
• Följande materialegenskaper för både vatten (index w) och sandkor-
nen (index k):
o densiteter ρ𝑤 och ρ𝑘,
o ljudhastigheter c𝑤 och c𝑘.
o Mie-Gruneisen konstanter Γ0𝑤 och Γ0𝑘,
o Stötvågshastighetens linjära relation till partikelhastighet
S𝑤 och 𝑆𝑘, se ekvation (3:24d).
o Specifik värme C𝑣𝑤 och C𝑣𝑘.
Porositeten, som beskriver tomvolymens volymfraktion, kan bestämmas på
följande sätt
𝑛 = 𝜌𝑘−𝜌𝑠
𝜌𝑘
(5:2e)
Densiteten hos den fullt kompakterade sanden med all luftporvolym elimi-
nerat kan beräknas med hjälp av
𝜌𝑤+𝑘 = (1−𝑛)𝜌𝑘+𝑆𝑟𝑛𝜌𝑤
1−(1−𝑠)𝑛 (5:2f)
Massfraktionerna av vatten och kornen för den specifika sanden fås av
𝜆𝑤 = 𝑆𝑟𝑛𝜌𝑤
(1−𝑛)𝜌𝑘+𝑆𝑟𝑛𝜌𝑤
(5:2g)
och
𝜆𝑘 = (1−𝑛)𝜌𝑘
(1−𝑛)𝜌𝑘+𝑆𝑟𝑛𝜌𝑤
(5:2h)
Vidare följer av ekvationerna (5:2f)-(5:2h) att specifik volym för materialet
kan fås ur
𝑣𝑤+𝑘 = 𝜆𝑘𝑣𝑘 + 𝜆𝑤𝑣𝑤 (5:2h)
Specifika värmen följer direkt från massmedelvärdet
C𝑣𝑤+𝑘 = 𝜆𝑘𝐶𝑣𝑘 + 𝜆𝑤𝐶𝑣𝑤 (5:2i)
Elastisk ljudhastighet för vatten och sandmixen följer ur följande definition

-- 41 of 311 --

Markstötvåg
2020-09-28 revidering 2 41
𝑐2 = −𝑣2 (𝜕𝑃
𝜕𝑣)𝑆 = − 𝑣2
(𝜕𝑣
𝜕𝑃)𝑆
(5:2j)
Genom att differentiera med hjälp av ekvation (5:2h) kan nämnaren i ek-
vation (5:2j) evalueras till
− (𝜕𝑣
𝜕𝑃)𝑆 = 𝑣𝑤+𝑘
𝑐𝑤+𝑘
2 = −𝜆𝑘 (𝜕𝑣𝑘
𝜕𝑃 )𝑆 − 𝜆𝑤 (𝜕𝑣𝑤
𝜕𝑃 )𝑆 = 𝜆𝑘
𝑣𝑘
2
𝑐𝑘
2 + 𝜆𝑤
𝑣𝑤
2
𝑐𝑤
2 (5:2k)
och sätts ekvation (5:2k) in i ekvation (5:2j) ger detta ljudhastigheten för
aktuell mix av sand och vatten
𝑐𝑤+𝑘
2 = 𝑣𝑤+𝑘
2
𝜆𝑘
𝑣𝑘
2
𝑐𝑘
2 +𝜆𝑤
𝑣𝑤
2
𝑐𝑤
2
= 1
𝜌𝑤+𝑘
2 (𝜆𝑘 1
𝑐𝑘
2𝜌𝑘
2+𝜆𝑤 1
𝑐𝑤
2 𝜌𝑤
2 )
(5:2l)
Gruneisens gamma följer direkt av definitionen
Γ = 𝑣 (𝜕𝑒
𝜕𝑃 )𝑣
−1
(5:2m)
Med noteringen att energin för vatten och sandkornsmixen kan bestämmas
genom 𝑒𝑤+𝑘 = 𝜆𝑘𝑒𝑘 + 𝜆𝑤𝑒𝑤 och differentiering med hänsyn till P ger
Γ𝑤+𝑘 = 1
𝜌𝑤+𝑘(𝜆𝑘 1
Γ𝑘𝜌𝑘+𝜆𝑤 1
Γ𝑤𝜌𝑤). (5:2n)
Sista egenskapen som är av intresse är 𝑆𝑤+𝑘, lutningen hos den linjära relat-
ionen mellan partikelhastighet 𝑈𝑝 och stötvågshastighet 𝑈𝑠. Denna kan tas
fram med samma resonemang som ljudhastigheten, se ekvation (5:2l) där 𝑆
byts ut mot 𝑐, vilket då ger
𝑆𝑤+𝑘
2 = 1
𝜌𝑤+𝑘
2 (𝜆𝑘 1
𝑆𝑘
2𝜌𝑘
2+𝜆𝑤 1
𝑆𝑤
2 𝜌𝑤
2 )
(5:2o)
5:21 Det fasta materialet
För det fasta materialet i silikatjordar kan det antas att tillståndsekvationen
för kvarts SiO2 fungerar. Approximationen att detta kan gälla för flertalet
jordmaterial är lite drastiskt med tanke på att vissa jordtyper innehåller så
lite som 50 viktprocent kvarts. Men om stötvågsdata jämförs för kvarts, gra-
nit och basalt så visar det sig att samtliga dessa har nästan samma Hugoniot
kurva, Kerley (2002). Granit och basalt innehåller cirka 70 viktprocent re-
spektive 50 viktprocent kvarts. I tabell 5:21a redovisas stötvågsdata för
Westerly Granite från Marsh (1980). Trycken för stötvågsdatan är väldigt
höga, här varierar de mellan 13 till 89 GPa, varför liknande trycknivåer end-
ast uppnås väldigt nära laddningen i lösa jordar. För det är endast just runt
laddningen man kan tänka sig få full kompaktering av det lösa jordmateri-
alet.

-- 42 of 311 --

Markstötvåg
2020-09-28 revidering 2 42
Tabell 5:21a. Stötvågsdata för Westerly granit med skrymdensitet 2,63 g/cm3,
Rhode Island, baserat på Marsh (1980).
ρ0 Us Up P v ρ v/v0
g/cm3 km/s km/s GPa cm3/g g/cm3
2,628 3,750 0,000 0,000 0,381 2,628 0,000
2,628 5,214 0,945 12,949 0,312 3,210 0,819
2,627 5,231 0,964 13,247 0,311 3,220 0,816
2,627 5,377 1,294 18,278 0,289 3,460 0,759
2,628 5,386 1,311 18,556 0,288 3,473 0,757
2,627 5,342 1,335 18,735 0,286 3,502 0,750
2,628 5,375 1,373 19,394 0,283 3,530 0,745
2,628 5,522 1,848 26,818 0,253 3,950 0,665
2,628 5,527 1,870 27,162 0,252 3,972 0,662
2,628 5,593 1,931 28,383 0,249 4,014 0,655
2,624 5,702 2,034 30,433 0,245 4,079 0,643
2,623 5,607 2,044 30,061 0,242 4,128 0,635
2,628 6,097 2,431 38,952 0,229 4,371 0,601
2,628 6,095 2,478 39,692 0,226 4,428 0,593
2,628 6,729 2,810 49,692 0,222 4,512 0,582
2,628 7,475 3,290 64,63 0,213 4,694 0,560
2,628 7,880 3,467 71,797 0,213 4,693 0,560
2,625 8,372 3,812 83,774 0,208 4,819 0,545
2,628 8,286 3,816 83,096 0,205 4,872 0,539
2,628 8,499 3,972 88,716 0,203 4,934 0,533
I tabell 5:21b ges stötvågsdata för enkelkristall kvarts med skrymdensitet på
2,65 g/cm3. Här kan vi se att provningen har utförts för stötvågstryck mellan
40 till 70 GPa.
Tabell 5:21b. Stötvågsdata för enkelkvarts med skrymdensitet 2,65 g/cm3, base-
rat på Marsh (1980).
ρ0 Us Up P v ρ v/v0
g/cm3 km/s km/s GPa cm3/g g/cm3
2,650 6,047 2,499 40,045 0,221 4,517 0,587
2,650 6,215 2,647 43,595 0,217 4,616 0,574
2,650 6,580 2,837 49,469 0,215 4,659 0,569
2,650 6,580 2,837 49,469 0,215 4,659 0,569
2,650 6,867 2,976 54,156 0,214 4,677 0,567
2,650 6,867 2,976 54,156 0,214 4,677 0,567
2,650 7,667 3,363 68,328 0,212 4,721 0,561
2,650 7,667 3,432 69,730 0,208 4,798 0,552
2,650 7,539 3,442 68,765 0,205 4,876 0,543
2,650 7,628 3,442 69,577 0,207 4,829 0,549
2,650 7,608 3,462 69,798 0,206 4,863 0,545
2,650 7,657 3,462 70,248 0,207 4,837 0,548
I figur 5:21a och 5:21b jämförs nu stötvågsdatat från Marsh (1980) för en-
kelkristall kvarts och Westerly granit. Det syns tydligt att stötvågsdata för
dessa material sammanfaller väl. Skillnaden i skrymdensitet hos de båda
materialen är också liten. För kvarts var den 2,65 g/cm3 och för granit
2,63 g/cm3. Graferna visar att approximationen att betrakta granit som
kvarts är god.

-- 43 of 311 --

Markstötvåg
2020-09-28 revidering 2 43
Figur 5:21a. Stötvågshastighet som funktion av partikelhastighet för enkelkristall
kvarts och Westerly granit med skrymdensitet 2,65 respektive
2,63 g/cm3. Baserat på Marsh (1980).
Figur 5:21b. Stötvågstryck P som funktion av kompression V/V0 för enkelkristall
kvarts och Westerly granit med skrymdensitet 2,65 respektive
2,63 g/cm3. Baserat på Marsh (1980).
En bra källa till stötvågsdata i digitalt format, kan hittas på Kerleys hemsida,
Kerley (2011). Där finns möjlighet att lasta ner ett program, Eospro
Kerley (2010), som är ett dos-program som innehåller kända stötvågsdata
från till exempel Marsh (1980). Huvudsyftet med Eospro är att beräkna och
framställa tillståndsekvationer för olika typer av EOS-modeller såsom soli-
der, vätskor, kemiskt reaktiva material, och material som har flera faser.
Eospro är en uppdaterad användarvänlig version av koden Panda,
Kerley (1991).
4
5
6
7
8
9
2.0 	2.5 	3.0 	3.5 	4.0
Us [km/s]
Up [km/s]
Kvarts enkelkristaller
Westerly granit
0
20
40
60
80
100
0.5 	0.6 	0.7 	0.8 	0.9 	1.0
P [GPa]
V/V0 [-]
Kvarts enkelkristaller
Westerly granit

-- 44 of 311 --

Markstötvåg
2020-09-28 revidering 2 44
U S = 0.005U P
3 - 0.1418U P
2 + 2.0691U P + 1.4729
R 2 = 0.9991
0
2
4
6
8
10
0 	1 	2 	3 	4 	5
U p [km/s]
Us 	[km/s]
5:22 Vatten och vatteninnehåll
Stötvågor fortplantas väldigt bra i vatten, varför man kan förvänta sig att
stötvågsegenskaperna hos ett jordmaterial också kommer att påverkas av
vilket vatteninnehåll eller mättnadsgrad jorden har. Först studeras stötvågs-
data för vatten som visas i figur 5:22a och 5:22b. Experimenten med vatten
är väldigt repeterbara och används minsta kvadratmetoden på experimentre-
sultaten kan till exempel stötvågshastigheten som funktion av partikelhas-
tigheten beskrivas av ett tredjegradspolynom med hög noggrannhet, se fi-
gur 5:22a. Vattnet fortplantar elastiska vågor med cirka 1400 m/s, vilket kan
jämföras med luften som har cirka 330 m/s i elastisk våghastighet vid 0 ˚C.
Vattnet är ett relativt odämpat stötvågsmaterial som även lätt fyller alla luft-
porer i jordmaterial.
Figur 5:22a. Stötvågshastighet som funktion av partikelhastighet för vatten med
densitet 0,998 g/cm3. Baserat på Marsh (1980).

-- 45 of 311 --

Markstötvåg
2020-09-28 revidering 2 45
Figur 5:22b. Stötvågstryck P som funktion av kompression V/V0 för vatten med
densitet 0,998 g/cm3. Baserat på Marsh (1980).
I tabell 5:22a redovisas stötvågsdata för sand med olika vattenmättnadsgrad.
Jämförs nu partikelhastighet som funktion av stötvågshastighet för de olika
vattenmättnadsgraderna 20 %, 50 % och 100 % så visar resultaten att stöt-
vågshastigheten ökar med ökande mängd vatten som finns i sanden.
Tabell 5:22a. Stötvågsdata för sand med olika vattenmättnadsgrad. Baserat på
Eospro-data, vilket i sin tur baserar sig på Livermore Shock Com-
pendium, Kerley (2010).
Sand 20 % vattenmättat Sand 50 % vattenmättat Sand 100 % vattenmättat
ρ 0 U s U p ρ 0 U s U p ρ 0 U s U p
g/cm3 km/s km/s g/cm3 km/s km/s g/cm3 km/s km/s
1,720 2,980 1,140 1,840 3,400 1,110 1,960 3,770 1,030
1,720 4,340 2,050 1,840 4,660 1,980 1,960 4,000 1,010
1,720 4,240 2,120 1,840 5,320 2,790 1,960 3,860 1,050
1,720 5,390 3,040 1,840 5,730 3,080 1,960 5,100 2,010
1,720 5,990 3,490 1,840 6,370 3,440 1,960 5,770 2,670
1,720 6,430 3,740 1,960 5,630 2,710
1,960 5,960 2,850
1,960 6,740 3,240
1,960 6,770 3,310
1,960 7,040 3,520
Figur 5:22c visar hur sandens stötvågshastighet ökar med högre vattenmätt-
nadsgrad. Lutningen hos en linjär trendlinje verkar inte vara direkt beroende
för vattenmättnadsgraden för studerat område i partikelhastighet. Däremot
parallellförflyttas den linjära trendlinjen längs den vertikala axeln för stöt-
vågshastighet.
0
10
20
30
40
50
0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1
V/V 0 [-]
P 	[GPa]

-- 46 of 311 --

Markstötvåg
2020-09-28 revidering 2 46
Figur 5:22c. Stötvågshastighet som funktion av partikelhastighet för sand som
är vattenmättad till 100 %, 50 % och 20 % med densitet 1,96, 1,84,
och 1,72 g/cm3. Baserat på Eospro-data, vilket i sin tur baserar sig
på Livermore Shock Compendium, Kerley (2010).
Jämförs nu dessa sanddata med olika vattenmättnadsgrad med vatten och
Westerly-granit, så ser man att när sanden är 100 % vattenmättad så ligger
stötvågsdata från vatten närmast, se figur 5:22d. Däremot ligger resultat för
Westerly-granit högst av alla.
Figur 5:22d. Stötvågshastighet som funktion av partikelhastighet för Westerly
granit, vatten, sand 100 %, 50 % och 20 % vattenmättad med den-
sitet 1,96, 1,84, och 1,72 g/cm3. Baserat på Eospro-data, vilket i
sin tur baserar sig på Livermore Shock Compendium,
Kerley (2010).
y = 1.2401x + 2.5622
R² = 0.9852 y = 1.2025x + 2.1137
R² = 0.9857
y = 1.2845x + 1.5597
R² = 0.9954
2
3
4
5
6
7
8
1.0 	1.5 	2.0 	2.5 	3.0 	3.5 	4.0
Us [km/s]
Up [km/s]
Sand 100 % vattenmättad
Sand 50% vattenmättad
Sand 20% vattenmättad
2
3
4
5
6
7
8
9
1.0 	1.5 	2.0 	2.5 	3.0 	3.5 	4.0
Us [km/s]
Up [km/s]
Westerly granit
vatten
Sand 100 % vattenmättad
Sand 50% vattenmättad
Sand 20% vattenmättad

-- 47 of 311 --

Markstötvåg
2020-09-28 revidering 2 47
5:23 Porositet
Som nämns i kapitel 5:2 så definieras porositeten med hjälp av följande ut-
tryck i P-alpha modellen
𝛼 = 𝜌𝑠
𝜌 (5:23a)
där 𝜌𝑠 = 𝜌𝑇𝑀𝐷 är den solida densiteten även kallat teoretisk maximal densi-
tet och 𝜌 är aktuell densitet. Den aktuella densiteten kan också vara initiell
densitet 𝜌 = 𝜌0, varvid ekvation (5:23a) beskriver initiell porositet 𝛼0 hos
materialet. I P-alpha modellen är porositeten borta när aktuell densitet är
lika med den solida densiteten 𝜌 = 𝜌𝑠, det vill säga 𝛼 = 1.
Initiell porositet hos ett jordmaterial kan påverkas på olika sätt. Ett sätt i
naturen förekommande är att jorden har packats ihop av till exempel egen-
tyngd av ovanliggande jordmaterial. Ett annat är att porerna fylls med vatten
från till exempel grundvatten. I båda fallen ökar initiell densitet och porosi-
teten minskar. I figur 5:23a visas hur den plastiska kompakteringskurvan
påverkas av att jordmaterialet har fyllt sina porer med vatten. Den ökade
densiteten leder till att stötvågshastigheten blir högre och att mindre energi
går förlorad vid irreversibel kompaktering. Lägg även märke till hur lut-
ningen för det solida materialet ökar med vattenmätnaden. Denna lutnings-
ökning kan motiveras med stötvågsdata som i figur 5:22d.
Figur 5:23a. Illustration hur plastisk kompakteringskurva förflyttar sig när po-
rerna fylls till viss del med vatten.
Tryck, P
Densitet,


0

n, Pn

TMD	

0, vattenmättad

n, vattenmättad, Pn, vattenmättad

-- 48 of 311 --

Markstötvåg
2020-09-28 revidering 2 48
Porkompakteringen är mycket viktig för upprättning av en tillförlitlig till-
ståndsekvation. Vatteninnehållet har en signifikant effekt på porkompakte-
ringen. Lerjordar med små partiklar och plattliknande strukturer beter sig
mer plastiskt än icke lerjordar. Lerjordar har även bindningar och cemente-
ringseffekter och för att detta ska kunna tas med behövs experiment på spe-
cifika jordtyper för noggrann kalibrering av porkompakteringsmodellen som
föreslås i Kerley (2002).
En intressant iakttagelse som Kerley nämner i rapporten Kerley (2002) är att
kompakteringsexperiment utförda på sand visade att torr sand har det största
motståndet mot porkompaktering. Kompakteringstrycket Ps är cirka 0,5 GPa
när det bara återstår en mindre del porvolym. Om vatteninnehållet är över
12 viktprocent sjunker Ps till 0,05 GPa. Effekten illustreras i figur 5:23a, där
punkten (𝜌𝑛, 𝑃𝑛) får ett lägre tryck när det vattenmättade jordmaterialet når
fullt kompakterat tillstånd.
En del lerjordar sväller när de absorberar vatten, det vill säga volymen ökar
och skrymdensiteten sjunker. Kerley anser att denna effekt tas upp med P-
alpha modellen. Denna del måste undersökas närmare för att kunna beskriva
lerjordar med svällningseffekt och kommer inte behandlas vidare i denna
rapport.
5:3 Hugoniotdata från litteraturen
Stötvågsdata på jordarter som återfinns i Norden är inte väl utforskat. Där-
emot finns det en hel del stötvågsdata på jordarter som återfinns i USA som
har tagits fram av Los Alamos Scientific Laboratory (LASL), se
Marsh (1980). Under och efter andra värsldskriget fanns ett behov av stöt-
vågsdata i USA. Därmed påbörjades ett gediget arbete av stötvågsexperi-
ment på olika typer av material, allt från grundämnen, metaller, mineraler,
bergarter, jordarter, plaster, syntetiska material, träsorter, och sprängämnen.
De jordmaterial som stötvågsdata har tagits fram för är bland annat ”tuff”
från Nevada experimentområde. Tuff är en mjuk och porös bergart som bil-
dats av cementering och kompaktering av vulkanisk aska eller damm. Stöt-
vågstrycken ligger mellan cirka 2 till 60 GPa.
För just jordmaterialet tuff fanns det data för följande sammansättningar:
• Tuff, Nevada test område med medeldensitet 1,7 g/cm3
• Tuff, Nevada test område med medeldensitet 1,3 g/cm3
• Tuff, Nevada test område, vattenmättad och med medeldensitet
1,9 g/cm3
• Tuff, Nevada test område, vattenmättad, och med medeldensitet
1,7 g/cm3
Det framgår inte ur experimentdata hur stor vattenmättnadsgraden var för de
vattenmättade proverna. Detta är inte lätt att bedöma i efterhand. Det skulle
kunna vara att tuff med medeldensitet 1,9 är fullt vattenmättad.

-- 49 of 311 --

Markstötvåg
2020-09-28 revidering 2 49
Stötvågsdata för jordmaterialen jämfördes med stötvågsdata för vatten som
hade medeldensitet på 0,998 g/cm3. I figur 5:3a visas stötvågshastigheten Us
som funktion av partikelhastighet Up för ej vattenmättade tuffmaterialen.
Figur 5:3a. Stötvågshastighet som funktion av partikelhastighet för ej
vattenmättad tuff med medeldensitet 1,7 och 1,3 g/cm3. Baserat på
Marsh (1980).
De linjära trendlinjer som har tagits fram visar att det är försumbar skillnad
mellan lutningskoefficienterna. Lutningskoefficienten minskar med mindre
än 0,1 % när densiteten ökas från 1,3 till 1,7 g/cm3. Däremot ökar skär-
ningspunkten med vertikala axeln (Up = 0) med mer än 70 % när densiteten
ökas från 1,3 till 1,7 g/cm3. Dock skall inte skärningspunktens värden tas för
exakta värden eftersom experimenten har utförts med sikte på att ta fram
stötvågsdata giltiga inom tryckområdet cirka 2 till 60 GPa.
Om nu de vattenmättade tuffmaterialen jämförs så kan man se att de är väl-
digt nära varandra. I figur 5:3b redovisas stötvågshastigheten som funktion
av partikelhastighet för de vattenmättade jordmaterialen. De jämförs också
med experimentella stötvågsdata för vatten.
U s = 1.3881U p + 1.4203
R 2 = 0.9806
TUFF ro 1.7
U s = 1.3891U p + 0.8284
R 2 = 0.9851
TUFF ro 1.3
0
2
4
6
8
0 	1 	2 	3 	4 	5 	6
U p [km/s]
Us 	[km/s]
TUFF ro 1.7
TUFF ro 1.3
Linear (TUFF ro 1.7)
Linear (TUFF ro 1.3)

-- 50 of 311 --

Markstötvåg
2020-09-28 revidering 2 50
Figur 5:3b. Stötvågshastighet som funktion av partikelhastighet för vattenmät-
tad tuff med medeldensitet 1,9 och 1,7 g/cm3. Baserat på
Marsh (1980).
I figur 5:3c redovisas stötvågstrycket som funktion av kompressionen för ej
vattenmättade tuffexperimenten. De vattenmättade tuffexperimenten jäm-
förs med vatten och visas i figur 5:3d.
Figur 5:3c. Stötvågstryck P som funktion av kompression V/V0 för ej vattenmät-
tad tuff med medeldensitet 1,7 och 1,3 g/cm3. Baserat på
Marsh (1980).
U s = 1.5415U p + 1.922
R 2 = 0.9403
TUFF ro 1.9 sat
U s = 1.4267U p + 2.0917
R 2 = 0.9057
TUFF ro 1.7 sat
U s = 1.4088U p + 2.1442
R 2 = 0.99
WATER
0
2
4
6
8
10
0 	1 	2 	3 	4 	5 	6
U p [km/s]
Us 	[km/s]
TUFF ro 1.9 sat
TUFF ro 1.7 sat
WATER
Linear (TUFF ro 1.9 sat)
Linear (TUFF ro 1.7 sat)
Linear (WATER)
P = 3749.2e -10.583V/V0
R 2 = 0.8224
TUFF ro 1.7
P= 4225.6e -13.311V/V0
R 2 = 0.7816
TUFF ro 1.3
0
20
40
60
80
100
0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1
V/V 0 [-]
P 	[GPa]
TUFF ro 1.7
TUFF ro 1.3
Expon. (TUFF ro 1.7)
Expon. (TUFF ro 1.3)

-- 51 of 311 --

Markstötvåg
2020-09-28 revidering 2 51
Figur 5:3d. Stötvågstryck P som funktion av kompression V/V0 för vattenmättad
tuff med medeldensitet 1,9 och 1,7 g/cm3. Baserat på
Marsh (1980).
I figur 5:3d kan man observera att tuff 1,9 g/cm3 har den brantaste tryckök-
ningen när kompressionen V/V0 sjunker, därefter följer tuff 1,7 g/cm3, och
sedan vatten. Dessa trendlinjer för mätpunkterna påvisar att vatten verkar
vara mer kompressibellt än båda de vattenmättade tuffmaterialen. Detta kan
tydas ur att det krävs mer tryck för att komprimera tuff jämfört med vattnet
till samma kompressionnivå om trendlinjerna jämförs. Det är också en skill-
nad mellan tuff med initiell densitet på 1,9 g/cm3 och 1,7 g/cm3 när trend-
linjerna jämförs. Tuff 1,9 g/cm3 är alltså mest inkompressibellt av de tre
jämförda.
Dessa data är alltför osäkra när det gäller jordmaterialens sammansättning,
mättnadsgrad och porositet för att dra några säkra slutsatser kring hur till-
ståndsekvationen ändras av initiella ändringar i sammansättning, porositet
och mättnadsgrad. Dessa kurvor visar dock hur tendenserna är när materialet
har en förhöjd initiell densitet eller är vattenmättad.
5:4 Skjuvhållfasthet hos jordmaterial
Det som tidigare har gåtts igenom i kapitel 5 är det isotropiska trycket samt
hur tillståndsekvationen varierar hos jordmaterialet. Denna bit av material-
egenskaperna för jorden är den primära delen för att estimera markstötvåg
från en stötvågskälla såsom en explosion. I tillägg till detta utgör även
skjuvhållfastheten en viktig del i att beskriva med vilken hastighet och
spänningsnivå skjuvvågorna kan estimeras bli i marken.
Hur mycket skjuvning ett material tål brukar beskrivas med brottmodeller.
För att snabbt bygga upp en nomenklatur kring detta så definieras att
materialets spänningstillstånd kan beskrivas med tre huvudspänningar 𝜎1, 𝜎2
P= 3399e -8.4932V/V0
R 2 = 0.6504
TUFF ro 1.9 sat
P= 1532.5e -7.3428V7V0
R 2 = 0.6522
TUFF ro 1.7 sat
0
30
60
90
120
150
180
0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1
V/V 0 [-]
P [GPa]
TUFF ro 1.9 sat
TUFF ro 1.7 sat
WATER
Expon. (TUFF ro 1.9 sat)
Expon. (TUFF ro 1.7 sat)

-- 52 of 311 --

Markstötvåg
2020-09-28 revidering 2 52
och 𝜎3, vilka har inbördes ortogonala riktningar och där 𝜎1 ≥ 𝜎2 ≥ 𝜎3.
Dessutom definieras tryckspänning som ett positivt tal. Då kan ett godtyck-
ligt spänningsplan, med vinkel 𝜃 gentemot den första huvudspänningen 𝜎1 i
spänningsfältet, illustreras enligt vänstra figuren i figur 5:4a. Andra huvud-
spänningen 𝜎2 är parallell med spänningsplanet.
Figur 5:4a. Relationen mellan huvudspänningar, 𝜎𝑖 där 𝑖 = 1,2,3, och
skjuvspänning för ett givet spänningsplan med vinkel 𝜃 mot första
huvudspänningen.
Följande relationer kan då tas fram för en ren skjuvspänning 𝜏 parallellt
längs spänningsplanet och för normalspänningen 𝜎𝑛 vinkelrätt spännings-
planet. Antag att spänningsplanet har längden 𝑙 och djupet 1. Då kan föl-
jande kraftjämvikt ställas upp för att härleda normalspänningen som funkt-
ion av huvudspänningar och vinkel
↙ : 𝜎𝑛𝑙 + 𝜎3 cos 𝜃 𝑙 cos 𝜃 + 𝜎1 sin 𝜃 𝑙 sin 𝜃 = 0 (5:4a)
𝜎𝑛 + 𝜎3 cos2 𝜃 + 𝜎1 sin2 𝜃 = 0 (5:4b)
med sambandet för cos dubbla vinkeln cos 2𝜃 = cos2 𝜃 − sin2 𝜃 fås
𝜎𝑛 = − (𝜎1+𝜎3
2 ) + (𝜎1−𝜎3
2 ) cos 2𝜃 (5:4c)
Om tryckspänning antas vara positiv kan tecken ändras
𝜎𝑛 = (𝜎1+𝜎3
2 ) − (𝜎1−𝜎3
2 ) cos 2𝜃 (5:4d)
Ekvation (5:4d) beskriver sambandet mellan huvudspänningarna och nor-
malspänningen för ett spänningsplan med vinkel 𝜃 gentemot första huvud-
spänningen 𝜎1. På samma sätt kan skjuvspänningen härledas med följande
kraftjämvikt
↘ : 𝜏𝑙 + 𝜎1 cos 𝜃 𝑙 sin 𝜃 − 𝜎3 sin 𝜃 𝑙 cos 𝜃 = 0 (5:4e)
𝜏 + 𝜎1 cos 𝜃 sin 𝜃 − 𝜎3 sin 𝜃 cos 𝜃 = 0 (5:4f)

-- 53 of 311 --

Markstötvåg
2020-09-28 revidering 2 53
med sambandet för sinus dubbla vinkeln sin 2𝜃 = cos 𝜃 sin 𝜃 −cos 𝜃 sin 𝜃,
då fås
𝜏 = − (𝜎1−𝜎3
2 ) sin 2𝜃 (5:4g)
Om tryckspänning antas vara positiv kan tecken ändras
𝜏 = (𝜎1−𝜎3
2 ) sin 2𝜃 (5:4h)
Ekvation (5:4h) beskriver sambandet mellan huvudspänningarna och skjuv-
spänningen för det studerade spänningsplanet. Ett vanligt sätt att beskriva
skjuvhållfasthet i jordmaterial är Mohr-Coulombs hypotes. För en
friktionsjord kan friktionsytan, vilket representerar skjuvhållfastheten, illu-
streras enligt figur 5:4b. Figuren visar skjuvspänning som funktion av nor-
malspänning hos brottytan. Brottytan beskrivs av sambandet
𝜏𝑓 = 𝜎𝑛 tan 𝜙 (5:4j)
där 𝜙 är den inre friktionsvinkeln. Ekvation (5:4j) beskriver vid vilken
normalspänning 𝜎𝑛 som den maximala skjuvspänningen 𝜏𝑓 krävs för att
skjuvbrott ska uppstå. Normalspänning 𝜎𝑛 och 𝜏𝑓 och skjuvspänningen kan
nu även med hjälp av figur 5:4a bestämmas till
𝜎𝑛 = (𝜎1+𝜎3
2 ) − (𝜎1−𝜎3
2 ) cos 2𝜃 (5:4k)
𝜏 = (𝜎1−𝜎3
2 ) sin 2𝜃 (5:4l)
dessa ekvationer är detsamma som ekvationerna (5:4d) och (5:4h), men är
ett annat sätt att ta fram sambanden. Dessutom kan relationen mellan inre
friktionsvinkeln och spänningsplanets vinkel till den första huvudspän-
ningen, med hjälp av figur 5:4b, visas att den är
180 = 90 + 2𝜃 + 𝜙 ⟹ 𝜙 = 90 − 2𝜃 (5:4m)

-- 54 of 311 --

Markstötvåg
2020-09-28 revidering 2 54
Figur 5:4b. Illustration av skjuvhållfastheten hos friktionsjord enligt Mohr-
Coulombs brotthypotes.
Den inre friktionsvinkeln för ett jordmaterial bestäms av triaxiella prov. Cy-
lindriska provmetoder är ett av de mer vanligt förekommande för framtag-
ning av brottytan för tryckhårdnande material såsom friktions- och ko-
hesionsjordar. Där styrs axiellt och radiellt tryck eller deformation hos det
cylindriska jordprovet. Den axiella spänningen motsvarar 𝜎𝑎 = 𝜎1, och den
radiella spänningen motsvarar 𝜎𝑟 = 𝜎2 = 𝜎3. Mohrs cirklar tas fram genom
att man först sätter alla huvudspänningarna lika, sen ökas den axiella spän-
ningen och radiell spänning hålls konstant. Sedan studeras spänningsdiffe-
rensen och en deformationsriktning, till exempel den axiella töjningen, för
att påvisa att flytspänning eller brottspänning har uppnåtts. I figur 5:4c visas
tre fiktiva prover, vilka använts för att bestämma den inre friktionsvinkeln
hos ett jordmaterial med kohesion. För provet som är orangestreckad linje
har den radiella spänningen hållits konstant lika med noll. I figur 5:4d så har
cirklarna sammanställts och en brottyta med tillhörande inre friktionsvinkel
𝜙 kan bestämmas. I det här fallet har vi ett jordmaterial med kohesion, det
vill säga att när normalspänningen är lika med noll så har jordmaterialet
fortfarande skjuvhållfasthet lika med 𝜏𝑓 = 𝑐 när 𝜎𝑛 = 0. Brottytan, ekvat-
ion (5:4j), för kohesionsjordar uppdateras på följande sätt
𝜏𝑓 = 𝑐 + 𝜎𝑛 tan 𝜙 (5:4n)
2
stabil
skjuvbrott

-- 55 of 311 --

Markstötvåg
2020-09-28 revidering 2 55
Figur 5:4c. Illustration av cylindriska brottprov där radiell spänning hålls kon-
stant och axiell spänning ökas till brott uppstår.
Figur 5:4d. Illustration av hur brottytan sammanställs från cylindriska prov med
olika konstanta radiella spänningar 𝜎𝑟 = 𝜎3.
Kohesionen 𝑐 kan tas fram genom ett rent skjuvprov där ingen normalspän-
ning införs gentemot brottytan, se vänster figur i figur 5:4d2. När det gäller
kohesionsjordar så är det inte bara friktionen som verkar mellan kornen utan
även just kohesion eller vidhäftning. Denna kohesion uppstår med hjälp av
molekylära attraktionskrafter. Kohesionsjordar återfinns i de finjordar som
har liten kornstorlek såsom lera och silt, se även kapitel 4:2. Denna kohes-
ion kan förloras eller kraftigt försämras om materialet blir vattenmättat.
Även skakning och vibrationer kan göra att hållfastheten försämras i ko-
hesionsjordar, till exempel kvicklera. För friktionsjordar däremot kan jord-
=0

-- 56 of 311 --

Markstötvåg
2020-09-28 revidering 2 56
materialets inre friktionsvinkel för löst packad jord tas fram genom att strila
ner friktionsjorden på en plan yta och därefter studera vinkeln på den hög
som bildas, se höger illustration i figur 5:4d2.
Figur 5:4d2. Vänster figur illustrerar ett rent skjuvprov där normalspänningen är
noll, vilket ger kohesionshållfastheten c. Höger figur illustrerar hur
rasvinkel för en friktionsjord kan tas fram. Rasvinkel motsvarar inre
friktionsvinkel 𝜙 för löst lagrad friktionsjord.
Mohr-Coulombs brottmodeller i tvådimensionella huvudspänningsrummet
kan utvecklas på följande sätt för att beskrivas i det tredimensionella huvud-
spänningsrummet, se även Wikipedia (2011).
{
± 𝜎1−𝜎2
2 = 𝑐 + 𝐾 𝜎1+𝜎2
2
± 𝜎2−𝜎3
2 = 𝑐 + 𝐾 𝜎2+𝜎3
2
± 𝜎1−𝜎3
2 = 𝑐 + 𝐾 𝜎1+𝜎3
2
(5:4o)
där 𝑐 beskriver åter kohesionen och 𝐾 beskriver graden av tryckhårdnande
hos flytytan. Genom att ta max-funktion på ekvationerna i (5:4o) kan flyt-
ytan för Mohr-Coulomb ritas upp i det tredimensionella rummet, se fi-
gur 5:4e. Där syns det att Mohr-Coulomb är en tryckhårdnande hexagonal
kon när 𝐾 > 0. När 𝐾 = 0 så fås Trescas flytkriterium, vilket är en hexago-
nal cylinder utan ökad skjuvhållfasthet vid ökande tryck.
Figur 5:4e. Mohr-Coulombs brottyta i det tredimensionella huvudspännings-
rummet. Gråskalan illustrerar att det isotropiska trycket 𝑃 ökar när
färgen blir vitare. Skapad med hjälp av freeware-matematik-
programmet wxMaxima.
0
=0
=0
0
Medium
High
0
Medium
High
0
Medium
High
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7

-- 57 of 311 --

Markstötvåg
2020-09-28 revidering 2 57
von Mises (1913) brottyta är väletablerad och används ofta för metaller och
är ej tryckhårdnande. Denna är en viktig brottyta att förstå principen av. Den
kan också tänkas kunna användas för fullt vattenmättade leror, vilka oftast
inte har någon tryckhårdnande brottyta. Den kan definieras med hjälp av de
tre principiella huvudspänningarna med följande samband
(𝜎1 − 𝜎2)2 + (𝜎2 − 𝜎3)2 + (𝜎3 − 𝜎1)2 = 6𝑘2 (5:4p)
där parameter 𝑘 är en konstant för ett obelastat material. Detta beror annars
på mängden plastisk töjning som materialet upplevt. I spänningsrummet re-
presenterar von Mises brottyta en cylinder med konstant radie som har cy-
linderaxeln följandes den hydrostatiska tryckspänningsaxeln
𝑃 = (𝜎1 + 𝜎2 + 𝜎3) 3	⁄ , se figur 5:4f.
Figur 5:4f. von Mises cylindriska brottyta i det tredimensionella huvud-
spänningsrummet. Gråskalan illustrerar att det isotropiska trycket 𝑃
ökar när färgen blir vitare. Skapad med hjälp av freeware-matema-
tikprogrammet wxMaxima.
von Mises cylindriska brottyta omsluter helt Trescas hexagonala cylinder.
Detta betyder att Trescas modell har för vissa spänningsfall redan nått
brottytan och börjar plasticera medan det i von Mises modell fortfarande be-
finner sig i elastiskt tillstånd. En vanligare brottyta för porösa material är då
Drucker och Prager (1952) som är en tryckhårdnande version av von Mises.
Drucker-Pragers brottyta kan fås genom att skriva om ekvation (5:4p) på
följande sätt
(𝜎1 − 𝜎2)2 + (𝜎2 − 𝜎3)2 + (𝜎3 − 𝜎1)2 = 6𝑘2 + 𝛼𝑃2 (5:4q)
där 𝑃 är det hydrostatiska trycket och 𝛼 är konstanten som beskriver hur
tryckhårdnande brottytan är. I figur 5:4g redovisas den koniska form som
Drucker-Prager har i huvudspänningsrummet.
0
Medium
High
0
Medium
High
0
Medium
High
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9

-- 58 of 311 --

Markstötvåg
2020-09-28 revidering 2 58
Figur 5:4g. Drucker-Pragers koniska brottyta i det tredimensionella
huvudspänningsrummet. Gråskalan illustrerar att det isotropiska
trycket 𝑃 ökar när färgen blir vitare. Skapad med hjälp av freeware-
matematikprogrammet wxMaxima.
Ovanstående nämnda brottytor hittas sammanfattade i flertalet mekanik-
böcker för solida material såsom Singh (2007).
Ett exempel på att skjuvhållfasthet också påverkar stötvågs-
beräkningar
I exempelvis Kerley (2002) visas det hur dessa tryckhårdnande brottytor an-
vänds i stötvågsberäkningar för att simulera jordens skjuvhållfasthet under
höga tryck. Beräkningarna går ut på att studera effekten av hur jordtypen
påverkar belastningen hos en grunt nedgrävd mina och vad impulsen från
uppkastad jord och stötvågen blir mot en stålplatta placerad en bit i luften
ovanför jorden. Jorden simuleras med hjälp av P-α EOS och för jordens
skjuvhållfasthet används följande tryckhårdnande brottyta
( )
0
0	( ) 
P
MAX
Y P
Y Y
MAX 	MAX	Y P Y Y Y e −
= + −	
(5:4r)
Där Y är flytspänningen och Y0, YMAX och YP är konstanter. Följande data
anges för torr sand och delvis vattenmättad sand med 12,1 viktprocent vat-
ten, se tabell (5:4a).
Tabell 5:4a. Skjuvhållfasthet för torr sand och delvis vattenmättad lerirg sand,
enligt Kerley (2002).
Torr sand (concrete sand)
Y0 [GPa] 0,0003
YMAX [GPa] 0,2
YP [-] 2,0
Delvis vattenmättad lerig sand
=
Y0 [GPa] 0,0003
YMAX [GPa] 0,005
YP [-] 1,2
0
Medium
High
0
Medium
High
0
Medium
High
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8

-- 59 of 311 --

Markstötvåg
2020-09-28 revidering 2 59
Enligt Kerley (2002) så sjunker hållfastheten markant med vatteninnehållet.
I figur 5:4h visas flytytan som funktion av tryck för torr sand och delvis
vattenmättad lerig sand. I tillägg studerades en grusig lera med hjälp av en
von Mises brottyta med 0,003 GPa i flytspänning och tvärkontraktionen 𝜈 =
0,32.
Figur 5:4h. Flytyta som funktion av tryck, enligt ekvation (5:4r) och ta-
bell (5:4a).
I Kerley (2002) studerades följande problem: En TNT diskladdning med
vikten 9,2 kg, 30 cm diameter och tjockleken 8 cm placerades 16 cm under
markytan. En stålplatta, med diameter 276 cm och tjockleken 20 cm häng-
des upp 46 cm ovanför marken. Därefter studerades effekten av tillförd
rörelsemängd upp i stålplattan för de olika simulerade materialen. Delar av
resultaten visas i figur 5:4i. Den vänstra grafen i figur 5:4i visar att rörelse-
mängden hos stålplattan är som lägst för sanden, därefter lerig sand och
högst rörelsemängd har grusig lera. Den högra grafen i figur 5:4i visar att
när sanden modelleras utan skjuvhållfasthet/brottmodell så blir rörelse-
mängden cirka 50-60 % högre än när skjuvhållfasthet inkluderas. Detta visar
hur viktig det är att även modellera hållfastheten i materialet för upptagande
av energi i jordmaterialet ska bli korrekt. Däremot för leran så är skillnaden
marginell om leran modelleras med eller utan skjuvhållfasthet jämför väns-
ter och höger graf i figur 6:4i.
0
0.05
0.1
0.15
0.2
0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6
P [GPa]
Y 	[GPa]
Torr sand
Lerig sand w=12.1 %

-- 60 of 311 --

Markstötvåg
2020-09-28 revidering 2 60
Figur 5:4i. Vertikal rörelsemängd från nedgrävd mina för olika simulerade
jordmaterial torr sand (eng. concrete sand), Lerig sand (eng.
clayey sand), och grusig lera (eng. gravelly clay). Från
Kerley (2002).
Effektivspänning och porvattentryck
Från tidigare exempel såg vi att skjuvhållfastheten sjunker med vattenmätt-
nadsgraden. Här ges en del av förklaringarna till detta. Det är viktigt att
uppmärksamma att när jordmaterial belastas odränerat och med hög vatten-
mättnadsgrad så ökar inte skjuvhållfastheten med ökat hydrostatiskt tryck
utan är istället konstant. Därför beskrivs jordspänning inom till exempel
geoteknik som effektivspänning, se exempelvis Hansbo (1979). Följande
uttryck beskriver effektivspänning
𝜎′ = 𝜎 − 𝑢 (5:4r)
där 𝜎 är totalspänning och 𝑢 är porvattentryck. För odränerade och
vattenmättade jordar kan hela ökningen av totalspänningen tas upp av att
porvattentrycket i jorden ökar, vilket inte leder till att skjuvkrafter tas upp
bättre av kornen i jorden utan trycket tas istället upp av vattnet. Detta leder
till en Mohr-Coulomb enligt figur 5:4j. Delfigur (a) visar hur ett odränerat
vattemättat prov ger samma effektivspänningscirkel när det ökade porvat-
tentrycket har reducerats. Delfigur (b) visar hur tre olika vattenmättade och
odränerade mätningar till olika hydrostatiska tryck ger samma skjuvspän-
ning. Denna effekt uppstår för fullt vattenmättade jordar även vid snabb be-
lastning för då hinner inte vattnet dräneras. Det är alltså rimligt att anta att
stötvågsbelastning av vattenmättade jordar leder till reducerad skjuvhåll-
fasthet jämfört med ej vattenmättade jordar. Slutligen kan ekvation-
erna (5:4j) och (5:4n) för Mohr-Coulombs brottyta omskrivas till att gälla
effektivspänning ” ´ ” istället.

-- 61 of 311 --

Markstötvåg
2020-09-28 revidering 2 61
Figur 5:4j. (a): Hur totalspänning reduceras till effektivspänning genom att dra
ifrån porvattentrycket 𝑢. (b): Illustration av tre olika vattenmättade
och odränerade mätningar med olika celltryck som ger samma
skjuvspänning 𝜏𝑓.
Jordmaterialets skjuvvågor och longitudinalvågor
En viktig aspekt när det gäller stötvågsbelastning är att jordmaterial med
hög skjuvhållfastheten leder till att signifikanta skjuvvågor kan transmitteras
i materialet. Dessa kan ha varierande styrka och storlek med hänsyn till
materialets sammansättning och vattenmättnadsgrad vilket påverkar den
tryckhårdnande skjuvhållfastheten hos jordmaterialet. Skjuvvågor relaterar
till skjuvmodulen 𝐺 på följande sätt
𝑣𝑠
2 = 𝐺
𝜌 (5:4s)
där 𝜌 är materialets densitet. För att kunna förstå uppbyggnaden av skjuvvå-
gor behöver vi först fördjupa oss i skjuvmodulen och skjuvtöjningen. I ett
elastiskt material relateras skjuvspänning på följande sätt
𝜏 = 𝐺𝛾 (5:4t)
där 𝛾 är skjuvtöjningen. Skjuvtöjningen är en deformation som sker utan vo-
lymändring, förenklat kan skjuvtöjningen beskrivas som vinkeländringen
när en kub skjuvas av skjuvpänning på ovan- och undersida, se figur 5:4k.
(a)
(b)

-- 62 of 311 --

Markstötvåg
2020-09-28 revidering 2 62
Figur 5:4k. Principiell bild av hur skjuvtöjningen relaterar till vinkeländring hos
en kub som utsätts för skjuvspänning på ovan- och undersida.
När det gäller skjuvmodulen 𝐺 så varierar den med flera faktorer såsom hur
mycket skjuvtöjning materialet har upplevt. I figur 5:4l visas principiellt hur
skjuvspänningen varierar med ökad töjning. Initiellt har jordmaterialet en
elastisk skjuvmodul 𝐺0,𝑚𝑎𝑥 som därefter sjunker. Denna elastiska region
kan antas gälla för skjuvtöjningar under 0,001 %. I en transitionsregion, för
skjuvtöjningar mellan 0,001 och 0,01 %, används ofta en sekantmodul 𝐺 för
att beskriva materialet i vanliga geotekniska sammanhang. Därefter kommer
en plastisk region när skjuvtöjningarna är högre än 0,01 %, enligt
Davish et al. (2004).
Figur 5:4l. Illustration av hur skjuvspänning 𝜏𝑓 som funktion av skjuvtöjning 𝛾
kan uppstå under ett skjuvprov. Omritat från Davish et al. (2004).
Detta påstående om att en elastisk region med elastisk skjuvmodul finns för
små töjningar byggs upp av Atkinson och Sällfors (1991) samt Mair (1993).
Detta illustreras av figur 5:4m. Som visar att skjuvmodulen är som högst för
låga töjningar och när skjuvtöjningen ökar så sjunker skjuvmodulen stadigt.
Mair (1993) visar också vilka skjuvtöjningar som kan förväntas för stödmu-
rar, fundament, och tunnlar. För att veta initiell skjuvmodul, behövs dyna-
0.001 % 	0.01 %
Transistionsregion 	Plastisk region	Elastisk region

-- 63 of 311 --

Markstötvåg
2020-09-28 revidering 2 63
miska provningsmetoder såsom ”bender”-element, se exempelvis Viggiani
och Atkinson (1995). Dessa benderelement används för att mäta hur snabbt
skjuvvågor färdas genom jordprovet vid olika spänningstillstånd i en hyd-
raulisk triaxiell provningsmaskin.
Figur 5:4m. Illustration av hur skjuvmodul 𝐺 principiellt varierar med skjuvtöj-
ning 𝛾. Ursprunglig figur av Mair (1993).
Nu är det dock inte bara skjuvtöjningen som påverkar skjuvmodulen eller
skjuvvågorna. En annan viktig aspekt är det hydrostatiska trycket 𝑃, något
som speciellt gäller för torra jordmaterial såsom sand. Detta medför att de
principiella relationerna mellan tryckvågor 𝑉𝑝 och skjuvvågor 𝑉𝑠 först bör
gås igenom. Därmed är det lämpligt att börja med tvärkontraktionstalet
//	



⊥
−	=	
. (5:4u)
som beskriver hur stor den vinkelräta töjningen 𝜀⊥ i ett isotropiskt material
blir vid enaxiell kraftriktning med töjningen 𝜀∥ parallellt kraftriktningen.
Denna tvärkontrantraktion kan även beskriva relationen mellan elastisk
kompressionsvåg och skjuvvåg med följande uttryck
𝜐 = (𝑉𝑝
𝑉𝑠 )
2
−2
2((𝑉𝑝
𝑉𝑠 )
2
−1)
(5:4v)
där 𝑉𝑝 är tryckvåg och 𝑉𝑠 är skjuvvåg. Se vidare i bilaga D om hur
elasticitetsmodul 𝐸, skjuvmodul 𝐺, och kompressionsmodul 𝐾 relaterar till
de elastiska vågorna i ett isotropiskt material.
0.0001 	0.001 	0. 01 	0. 1 	1 	10
Typiska töjningsgränser
Stödmurar
Fundament
Tunnlar
Dynamiska metoder
Lokala töjningar
Konventionell jordprovning

-- 64 of 311 --

Markstötvåg
2020-09-28 revidering 2 64
I Zimmer (2003) studeras seismisk våghastighet i okonsoliderad sand för
olika trycknivåer, porositet, samt vattenmättnadsgrad. Tryckvågor och
skjuvvågor skapas i detta fall av piezoelektriska kristaller som omvandlar en
elektrisk puls till tryck- eller skjuvvåg beroende på hur kristallerna används
när pulsen skickas. Identiska mottagande kristaller används på andra sidan
av jordprovet för att studera anländandet av tryck- och skjuvvågorna.
Utgående från av Zimmer (2003) redovisade mätdata som påvisar tydligt i
hur tryckberoende skjuvvågor och tryckvågor är. I figur 5:4n redovisas
skjuvvågor 𝑉𝑠 för torra sandprover som funktion av tryck 𝑃. Vid tryck nära
eller lika med noll så har till exempel det torra Gulf of Mexico-sandprovet
skjuvvågshastighet på runt 130 m/s. När trycket ökar till omkring 4 MPa så
ökar 𝑉𝑠 till 600 m/s. När det torra Gulf of Mexico-sandprovet utsätts för
tryck på cirka 20 MPa så har 𝑉𝑠 ökat till 1000 m/s. De andra torra sandpro-
ven som redovisas i figur 5:4n såsom Galveston Beach Sand, Merrit Sand,
Pomponio Beach Sand följer samma trend plus att absolutvärdena är likar-
tade.
När det gäller vattenmättade sandprov så visar mätdata från Zimmer (2003)
att skjuvvågor fortfarande är kraftigt tryckberoende, se figur 5:4o. Om till
exempel det vattenmättade provet för Galveston Beach Sand studeras så är
𝑉𝑠 runt 200 m/s vid tryck nära lika med noll. Detta är ungefär samma resultat
som de torra sandproverna för Galveston Beach Sand visade. När skjuvvåg-
hastigheten jämförs mellan vattenmättat och torrt prov för Galveston Beach
Sand så sjunker våghastigheten något med högre tryck när provet vatten-
mättats. Vid trycket 20 MPa har skjuvvågshastigheten sjunkit med cirka
100 m/s när provet vattenmättats, se figur 5:4p.
Figur 5:4n. Skjuvvåg 𝑉𝑠 som funktion av tryck för olika torra sandprover. Källa
till mätdata Zimmer (2003).
0
200
400
600
800
1000
1200
0 	5 	10 	15 	20
Våghastighet
 	Vs [m/s]
Tryck P [MPa]
Galveston Beach Sand, torr
Golf of Mexico Sand, torr
Merritt Sand, torr
Pomponio Beach Sand, torr

-- 65 of 311 --

Markstötvåg
2020-09-28 revidering 2 65
Figur 5:4o. Skjuvvåg 𝑉𝑠 som funktion av tryck för olika vattenmättade sandpro-
ver. Källa till mätdata Zimmer (2003).
Figur 5:4p. Skjuvvåg 𝑉𝑠 som funktion av tryck för olika torrt och vattenmättat
Galveston Beach-sandprover. Källa till mätdata Zimmer (2003).
Mätta tryckvågor 𝑉𝑝 som funktion av tryck för torra sandprover visar samma
tydliga tryckberoende, se figur 5:4q. För det torra sandprovet av Gulf of
Mexico Sand så är 𝑉𝑝 runt 200 m/s vid tryck nära lika med noll. När trycket
ökas till strax under 4 MPa för det torra sandprovet av Gulf of Mexico Sand
så har 𝑉𝑝 ökat till cirka 1000 m/s. Vid trycknivåer runt 20 MPa så har 𝑉𝑝
0
200
400
600
800
1000
1200
0 	5 	10 	15 	20
Våghastighet
 	Vs [m/s]
Tryck P [MPa]
Galveston Beach Sand, vattenmättad
Golf of Mexico Sand, vattenmättad
Merritt Sand, vattenmättad
Pomponio Beach Sand, vattenmättad
0
100
200
300
400
500
600
700
800
900
1000
0 	5 	10 	15 	20
Våghastigheter
 	Vp och
 	Vs [m/s]
Tryck P [MPa]
Galveston Beach Sand, torr
Galveston Beach Sand, våt

-- 66 of 311 --

Markstötvåg
2020-09-28 revidering 2 66
ökat till cirka 1600 m/s. För de vattenmättade proven så återfinns inte
samma tryckberoende för 𝑉𝑝, mycket på grund av att vatteninnehållet har
ökat 𝑉𝑝 även för tryck nära noll MPa, se figur 5:4r. Till exempel så visar
mätresultaten att den vattenmättade Golf of Mexico-sanden har ett 𝑉𝑝 på
cirka 1760 m/s vid tryck nära noll MPa. Tryckvågshastigheten 𝑉𝑝 ökar
endast marginellt när trycket i provet har höjts till 20 MPa, nämligen till
1823 m/s.
Jämförs nu 𝑉𝑝 och 𝑉𝑠 för torrt Galveston-sandprov så är formen på
tryckberoendet liknande, se figur 5:4s. Samma form återfinns för de andra
torra sandproven med, se även figur 5:4t som visar samma jämförelse för ett
torrt Golf of Mexico-sandprov.
Figur 5:4q. Tryckvåg 𝑉𝑝 som funktion av tryck för olika torra sandprover. Källa
till mätdata Zimmer (2003).
0
500
1000
1500
2000
2500
0 	5 	10 	15 	20
Våghastighet
 	Vp [m/s]
Tryck P [MPa]
Galveston Beach Sand, torr
Golf of Mexico Sand, torr
Merritt Sand, torr
Pomponio Beach Sand, torr

-- 67 of 311 --

Markstötvåg
2020-09-28 revidering 2 67
Figur 5:4r. Tryckvåg 𝑉𝑝 som funktion av tryck för olika vattenmättade sandpro-
ver. Källa till mätdata Zimmer (2003).
Figur 5:4s. Tryckvåg 𝑉𝑝 och skjuvvåg 𝑉𝑠 som funktion av tryck för torrt
Galveston Beach-sandprov. Källa till mätdata Zimmer (2003).
0
500
1000
1500
2000
2500
3000
0 	5 	10 	15 	20
Våghastighet
 	Vp [m/s]
Tryck P [MPa]
Galveston Beach Sand, vattenmättad
Golf of Mexico Sand, vattenmättad
Merritt Sand, vattenmättad
Pomponio Beach Sand, vattenmättad
0
200
400
600
800
1000
1200
1400
1600
0 	5 	10 	15 	20
Våghastigheter
 
Vp och
 	Vs [m/s]
Tryck P [MPa]
Galveston Beach Sand, torr
Galveston Beach Sand, torr

-- 68 of 311 --

Markstötvåg
2020-09-28 revidering 2 68
Figur 5:4t. Tryckvåg 𝑉𝑝 och skjuvvåg 𝑉𝑠 som funktion av tryck för torrt
Galveston Beach-sandprov. Källa till mätdata Zimmer (2003).
I figur 5:4u har tvärkontraktionen 𝜐 beräknats ut med hjälp av uppmätta
våghastigheter enligt ekvation (5:4v). Figuren visar att för låga tryck varie-
rar tvärkontraktionen en del, 0,1 < 𝜐 < 0,3. För högre tryck såsom större än
5 MPa så minskar variationen och 𝜐 sjunker från 0,2 till 0,15 när trycket har
ökas till 20 MPa. Liknande tendens har även den torra Galveston Beach
Sand, se figur 5:4v. Skillnaden är att för tryck högre än 5 MPa så är 𝜐 tämli-
gen konstant runt 0,15. När fler torra sandprovers tvärkontraktion jämförs så
visar de flesta liknande beteende och tvärkontraktionen vid 20 MPa varierar
mellan 0,1 < 𝜐 < 0,3, se figur 5:4x. Liknande densitetsberoende för
tvärkontraktionen kan ej utrönas för de torra sandproven Galveston Beach
Sand och Golf of Mexico Sand, se figur 5:4y.
För de vattenmättade sandproverna är tvärkontraktionen väldigt lik i alla
proverna, se figur 5:4z. Vid tryck nära noll MPa är 𝜐 ungefär lika 0,5 och
sjunker till 0,4 när trycket ökar 20 MPa.
0
200
400
600
800
1000
1200
1400
1600
1800
0 	5 	10 	15 	20
Våghastigheter
 	Vp och
 	Vs [m/s]
Tryck P [MPa]
Golf of Mexico Sand, torr- Vs
Golf of Mexico Sand, torr -Vp

-- 69 of 311 --

Markstötvåg
2020-09-28 revidering 2 69
Figur 5:4u. Tvärkontraktionstalet 𝜐 som funktion av tryck för torrt Golf of
Mexico-sandprov. Källa till mätdata Zimmer (2003).
Figur 5:4v. Tvärkontraktionstalet 𝜐 som funktion av tryck för torrt Galveston
Beach-sandprov. Källa till mätdata Zimmer (2003).
0
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0 	5 	10 	15 	20
Tvärkontraktionstal

[-]
Tryck P [MPa]
Gulf of Mexico Sand, torr
0
0.05
0.1
0.15
0.2
0.25
0.3
0 	5 	10 	15 	20
Tvärkontraktionstal

[-]
Tryck P [MPa]
Galveston Beach Sand, torr

-- 70 of 311 --

Markstötvåg
2020-09-28 revidering 2 70
Figur 5:4x. Tvärkontraktionstalet 𝜐 som funktion av tryck för torra sandprover.
Källa till mätdata Zimmer (2003).
Figur 5:4y. Tvärkontraktionstalet 𝜐 som funktion av densitet för två torra
sandprover. Källa till mätdata Zimmer (2003).
-0.2
-0.1
0
0.1
0.2
0.3
0.4
0.5
0.6
0 	5 	10 	15 	20
Tvärkontraktionstal

[-]
Tryck P [MPa]
Galveston Beach Sand, torr
Golf of Mexico Sand, torr
Merritt Sand, torr
Pomponio Beach Sand, torr
0
0.05
0.1
0.15
0.2
0.25
0.3
0.35
1.48 	1.5 	1.52 	1.54 	1.56 	1.58 	1.6 	1.62 	1.64 	1.66 	1.68
Tvärkontraktionstal

[-]
Densitet ρ [g/cm3]
Galveston Beach Sand, torr
Golf of Mexico Sand, torr

-- 71 of 311 --

Markstötvåg
2020-09-28 revidering 2 71
Figur 5:4z. Tvärkontraktionstalet 𝜐 som funktion av tryck för vattenmättade
sandprover. Källa till mätdata Zimmer (2003).
För att reflektera över föregående kapitel om tillståndsekvationen och hur
den elastiska våghastigheten för avlastning inte bara varierar med densiteten
utan också av trycket så är det enkelt att påvisa detta med Zimmers (2003)
mätresultat. I figur 5:4za redovisas mätningsresultat hur tillståndsekvationen
skulle se ut för det torra Galveston Beach-sandprovet, heldragen svart linje i
figur 5:4z. Jämför vi vad tryckvågen 𝑉𝑝 är vid en viss densitet, säg till exem-
pel vid 1,57 g/cm3, så visar mätningarna att 𝑉𝑝, se streckad linje med triang-
lar i figuren, uppvisar två värden, ett lite högre när tillståndsekvationen på-
lastas och ett lägre när tillståndsekvationen slutligen avlastats från trycket
20 MPa till runt 2 MPa. Samma tendens med två olika värden visar även
skjuvvågen 𝑉𝑠, se streckad linje med kvadrater i figuren.
0
0.1
0.2
0.3
0.4
0.5
0.6
0 	5 	10 	15 	20
Tvärkontraktionstal

[-]
Tryck P [MPa]
Galveston Beach Sand, vattenmättad
Golf of Mexico Sand, vattenmättad
Merritt Sand, vattenmättad
Pomponio Beach Sand, vattenmättad

-- 72 of 311 --

Markstötvåg
2020-09-28 revidering 2 72
Figur 5:4za. Sammanställning av Zimmer (2003) av hur tryckvåg 𝑉𝑝 och skjuv-
våg 𝑉𝑠 varierar med densiteten under på och avlastning av trycket
𝑃.
Sammanfattningsvis så visas i Zimmer (2003) att skjuvvågor, 𝑉𝑠, i
okonsoliderad torr sand har en proportion till tryck som motsvarar 𝑉𝑠 ∝ 𝑃1 4	⁄
samt att den elastiska tryckvågen har något lägre proportionalitet 𝑉𝑝 ∝ 𝑃0.22.
Dessa proportionaliteter påvisades experimentellt för tryckintervallen
0,1 MPa till 20 MPa. I log-log skala så syns dessa samband tydligt. I fi-
gur 5:4zb så redovisas trendlinje med formen 𝑉𝑠 = 𝑃𝑎. Där det upphöjda ta-
let blir runt 0,25, vilket är vad Zimmer (2003) kom fram till. Liknande
trendlinjer redovisas i figur 5:4zc för tryckvågen 𝑉𝑝 i log-log skala.
0
5
10
15
20
25
0
200
400
600
800
1000
1200
1400
1600
1.51 	1.52 	1.53 	1.54 	1.55 	1.56 	1.57 	1.58 	1.59 	1.6
Tryck
 P [MPa]
Densitet ρ [g/cm3]
Galveston Beach Sand, torr -Vp
Galveston Beach Sand, torr -Vs
Galveston Beach Sand, torr -P
Våghastigheter
 	Vp och
 	Vs [m/s]

-- 73 of 311 --

Markstötvåg
2020-09-28 revidering 2 73
Figur 5:4zb. Skjuvvåg 𝑉𝑠 som funktion av trycket 𝑃 i log-log skala.
Figur 5:4zc. Tryckvåg 𝑉𝑝 som funktion av trycket 𝑃 i log-log skala.
Dessa mätresultat som tagits fram i Zimmer (2003) är viktiga om man ska ta
fram hur materialet beter sig när det befinner sig innanför flytytan. Dessa
eller liknande mätdata skulle mycket väl kunna användas för att bygga upp
en generell skjuvhållfasthet och skjuvvågshastighetsmodell för jordar.
y = 446.4x0.2714
y = 512.14x0.231
1
10
100
1000
10000
0.01 	0.1 	1 	10 	100
Våghastighet
 	Vs [m/s]
Tryck P [MPa]
Galveston Beach Sand, torr
Golf of Mexico Sand, torr
Merritt Sand, torr
Pomponio Beach Sand, torr
Power (Galveston Beach Sand, torr)
Power (Golf of Mexico Sand, torr)
y = 740.56x0.2687
y = 893.09x0.271
y = 891.16x0.2181
1
10
100
1000
10000
0.01 	0.1 	1 	10 	100
Våghastighet
 	Vp [m/s]
Tryck P [MPa]
Galveston Beach Sand, torr
Golf of Mexico Sand, torr
Merritt Sand, torr
Pomponio Beach Sand, torr
Power (Golf of Mexico Sand, torr)
Power (Merritt Sand, torr)
Power (Pomponio Beach Sand, torr)

-- 74 of 311 --

Markstötvåg
2020-09-28 revidering 2 74
5:41 Draghållfastheten
Lösa jordar har generellt endast liten eller ingen bindningskraft mellan de
fasta partiklarna i jorden. Därmed finns endast en obetydlig kapacitet att ta
rena dragkrafter i jorden. Därför kan draghållfastheten antas vara låg hos
lösa jordarter. I explicita finita elementberäkningar kan ett mycket lågt
värde ansättas såsom föreslås i artikeln för torr Sjöbo Sand, se Laine och
Sandvik (2001).

-- 75 of 311 --

Markstötvåg
2020-09-28 revidering 2 75
6 Metod för framtagning av EOS
6:1 Översikt
I det här kapitlet ges en inblick i vilken typ av provning som lämpar sig för
att ta fram en EOS för lösa jordar. I avsnitt 6:2 visas provning med hänsyn
till låga tryck, mindre än 100 MPa, och i avsnitt 6:3 provning för att ta fram
EOS för höga tryck, högre än 100 MPa.
Kvasistatiska triaxiella provningar har till exempel utförts på sand från
Sjöbo, se Heyerdahl och Madshus (2000). En nackdel med dessa provningar
är att de endast ger tillförlitliga materialdata för svaga stötvågor, vilket
innebär att de fungerar för att prediktera stötvågor som inte är i direkt närhet
av den detonerade laddningen. För en mer precis prediktering av stötvågen i
närheten av den detonerade laddningen behövs kompletterande provning för
att få data för högre tryck- och temperaturnivåer på Hugoniotkurvan.
Följande finita element-exempel illustrerar vilken betydelse tillförlitliga data
för tillståndsekvationen har för höga tryck vid analyser av markstötvåg. I fi-
gur 6:1a visas den axisymmetriska modell som användes för studien. Ladd-
ningsvikten x kg TNT varierades som 125, 250, 500 kg. I finita elementpro-
grammet Autodyn, se Century Dynamics (2003), användes Euler-lösare med
elementstorleken 10 mm efter känslighetsstudie av elementstorlekarna 20,
15, 10, 7,5, och 5 mm. I randen i övre delen av modellen tillåts material ha
fritt flöde ut, vilket representerar att jorden kan kastas ut i luften. I nedre
delen av modellen valdes en oreflekterande rand. Detta motsvarar att det
finns homogent jordmaterial nedåt. Laddningens energifrigörelse simulera-
des med en känd tillståndsekvation för detonerande sprängämnen. Spräng-
ämnets snabba frigörelse är vad som senare resulterar i en markstötvåg i
sanden. I olika mätpunkter horisontellt placerade från laddningen mättes
tryck, impulstäthet, och partikelhastighet.

-- 76 of 311 --

Markstötvåg
2020-09-28 revidering 2 76
Figur 6:1a. Axisymmetrisk modell för att studera betydelsen av tillförlitlig data
för tillståndsekvationen för sand. T1-T5 är olika mätpunkter i jord-
materialet där tryck P, impuls I, och partikelhastighet Up, registre-
rades i finita elementnätet.
Två olika tillståndsekvationer för sand användes i studien, se figur 6:1b.
Den första är data framtagna med hjälp av triaxiella kvasistatiska prover upp
till 60 MPa i tryck, se Heyerdahl och Madshus (2000). Därefter har endast
en polynomanpassning gjorts för att sammanföra den plastiska kompakte-
ringskurvan med det solida materialets linje. Det solida materialets linje be-
skriver hur sandmaterialet beter sig när all porvolym har kompakterats bort.
Det betyder att det ligger osäkerhet i hur den plastiska kompakteringskurvan
ser ut för tryck mellan 60 MPa till 10 GPa, vilka är trycknivåer som uppstår
i närheten av laddningen. För att illustrera osäkerheten parallellförflyttas
den solida kompakteringskurvan enligt figur 6:1b, se röd linje. Det solida
materialets lutning ΔP/Δρ hölls därmed konstant i analyserna. Skjuvhållfast-
het och skjuvmodul hölls oförändrade i analyserna.
T1, d=2m
T2, d=3m
T3, d=4m
T4, d=5m
T5, d=6m
Axi-symmetri
Sand
x kg TNT, med cylinderhöjd 1,1 m
Fritt flöde ut
Oreflekterande yta

-- 77 of 311 --

Markstötvåg
2020-09-28 revidering 2 77
0
100
200
300
400
500
600
700
800
1650 	1750 	1850 	1950 	2050 	2150 	2250 	2350 	2450 	2550 	2650 	2750
Densitet

, [kg/m 3 ]
Tryck
 P, [MPa]
Plastisk compakteringskurva
Solida materialets linje (TMD)
Elastisk kompaktering
Indata för EOS:

1 = 1674.0, P 1 = 0

2 = 1739.5, P2 = 4.577

3 = 1873.8, P3 = 14.980

4 = 1997.0, P4 = 29.151

5 = 2143.8, P5 = 59.175

6 = 2250.0, P6 = 98.098

7 = 2380.0 , P7 = 179.443

8 = 2485.0 , P8 = 289.443

9 = 2585.0 , P9 = 450.198

10 = 2664.0, P10 = 630.643

TMD = 2641
Förflyttning av solida materialets linje
Figur 6:1b. Tillståndsekvation för sand enligt Laine och Sandvik (2001), samt
hur det solida materialets linje förflyttas för att illustrera osäker-
heten i den plastiska kompakteringskurvan för tryck över 60 MPa.
I tabell 6:1a redovisas procentuell ökning av tryck, partikelhastighet och
impuls när effekten av de olika tillståndsekvationerna jämförs i mätpunk-
terna T1-T5, placerade på avstånden 2, 3, 4, 5 och 6 m från laddningen.
Tabell 6:1a. Resultat från analyserna redovisade som procentuell ökning av
markstötvågens tryck, partikelhastighet, och impuls vid mätpunk-
terna T1-T5. Procentberäkningen utgår från ursprunglig tillstånds-
ekvation och jämförs med förflyttad tillståndsekvation enligt fi-
gur 6:1b.
Mätpunkt,
avstånd
Laddnings-
vikt
[kg]
Tryck- ök-
ning
P [%]
Partikel-
hastighet
Up [%]
Impuls-ök-
ning
[%]
T1, 2 m 125 15 15 3
250 18 17 5
500 19 15 0,5
T2, 3 m 125 11 11 3
250 15 15 5
500 15 13 3
T3, 4 m 125 8 8 4
250 12 12 5
500 13 12 4
T4, 5 m 125 8 7 3
250 10 10 6
500 10 10 4
T5, 6 m 125 7 7 3
250 9 9 6
500 8 8 5

-- 78 of 311 --

Markstötvåg
2020-09-28 revidering 2 78
Tabell 6:1a visar att tryck, partikelhastighet, samt impuls ökar när den modi-
fierade tillståndsekvationen används. Däremot ändras inte den procentuella
ökningen nämnvärt av att laddningsvikten ökas från 125 kg till 500 kg TNT.
I medeltal ökar trycket med 12 procent, partikelhastighet 11 procent, och
impuls 4 procent oavsett mätpunkt och laddningsvikt. Detta gäller för sand-
exemplet. Värt att notera att med ökat avstånd minskar den procentuella ök-
ningen av partikelhastighet och tryck, vilket visar att när trycken väl sjunker
under 60 MPa så blir resultaten mindre påverkade av en felaktig tillstånds-
ekvation för höga tryck.
Därmed finns det anledning att ta fram tillståndsekvationen även för högre
tryck. Speciellt om finita elementanalyserna ska vara tillförlitliga även nära
laddningen, säg ett skalat laddningsavstånd under R < 1 m/kg1/3, exempelvis
𝑅 = 𝑟/𝑊1/3= 5 / 1251/3 = 1 m/kg1/3.
6:2 Provning lämpad för låga tryck
Provning för att ta fram EOS för låga tryck är en nödvändighet för att kunna
utföra tillförlitliga finita elementberäkningar av markstötvåg där stötvågen
har spridit sig en bit från laddningen. Med låga tryck menas här tryck under
och runt 100 MPa. Vanliga triaxiella prover av jord görs ofta bara upp till
två MPa vilket är fullt tillräckligt ur bygg- och anläggningssynpunkt. Men
dessa prover bör kompletteras med provning till runt 100 MPa för att få en
bra bild av hur EOS varierar för stötvågsbelastning.
Tidigare har provning utförts på sand från Sjöbo, vilket ligger i anslutning
till en räddningscentral, se Heyerdahl och Madshus (2000). Från borr-pro-
verna mättes skrymdensiteten till	
 = 1674 kg/m3 samt korndensitet
k = 2650 kg/m3 Vatteninnehållet var
 = 6,57 % och kornfördelningen var
Cu ≈ 2.
Triaxiell provning är en vanlig och grundläggande provning inom geotek-
nik. figur 6:2a visar en schematisk bild hur en sådan provutrustning kan se
ut. Ett cylindriskt jordprov med typiska mått 38-80 mm i diameter och höj-
den cirka två gånger diametern kapslas in i ett gummimembran omgiven av
en vätska. Vertikal spänning
v påförs med hjälp av en kolv, den radiella
spänningen
r påförs med hjälp av det hydrostatiska trycket
r från vätskan
som regleras med hjälp av en pump.

-- 79 of 311 --

Markstötvåg
2020-09-28 revidering 2 79
Figur 6:2a. Triaxiell provningsutrustning av jord. Tryckomvandlare (piezoelekt-
riska) användes för att skapa longitudinell och skjuv- elastiska vå-
gor i jordprovet.
Standardutrustningen för jord klarar hydrostatiska tryck upp till runt 2 MPa
och därför behöver mätningar kompletteras med en kraftigare provningsut-
rustning. I proverna som utfördes i Heyerdahl H. och Madshus C. (2000)
användes provutrustning för bergprover. Denna provutrustning lämpar sig
väldigt bra för tryck upp till och runt 100 MPa.
Första delen av själva provserien går till på följande sätt. Först pålastas och
avlastas provkroppen med
v =
r till olika spänningsnivåer. Det hydrosta-
tiska trycket bestäms av följande ekvation
3
2
3
3	2	1 r	v
P

	
	
	
	
	+
=
+	+
=	
(6:2a)
där
1,
2, och
3 är första andra och tredje huvudspänningen. I dessa prover
har vi ett cylindriskt lastfall vilket ger
1 =
v och
2 =
3 =	r	
	 . Nivån P
där
v =	r	
	 ökas gradvis för att få så mycket information som möjligt om
jordens EOS. Under provet mäts också vertikal töjning
v, och radiell töj-
ning
r. Begreppet töjning beskrivs närmare i bilaga C. Med hjälp av dessa
töjningar kan volymetrisk töjning beräknas enligt
𝜀𝑣𝑜𝑙 = 𝜀1 + 𝜀2 + 𝜀3 = 𝜀𝑣 + 2𝜀𝑟 (6:2b)
Den aktuella densiteten fås ut genom konserveringslagen av massa
𝜌0𝑉0 = 𝜌𝑛𝑉𝑛 (6:2c)

v

r
stålcylinder

r
kolv
vätska
membran
jordprov

r

v
tryckomvandlare

v

r
stålcylinder

r
kolv
vätska
membran
jordprov

r

v
tryckomvandlare

-- 80 of 311 --

Markstötvåg
2020-09-28 revidering 2 80
Där 𝜌0 och 𝑉0 är initiell densitet och volym och 𝜌𝑛 är densiteten vid den
komprimerade volymen 𝑉𝑛. Volymsförändringen kan då beräknas med hjälp
av töjningarna vilket då ger densiteten vid aktuell volym enligt
𝑉0
𝑉𝑛
= 𝑙𝜋𝑟2
𝑙(1−𝜀𝑣)𝜋((1−𝜀𝑟)𝑟)2 (6:2d)
Ekvation (6:2d) insatt i ekvation (6:2c) ger slutligen
𝜌𝑛 = 𝜌0
(1−𝜀𝑣)(1−𝜀𝑟)2 (6:2e)
Typiska resultat från sandprovningen när
v=	r	
	 visas i figur 6:2. Denna
provning ger en god bild av jordmaterialets EOS för låga tryck. Vi får enkelt
fram Hugoniotkurvan som trycket P som funktion av densitet
 för jord-
materialet genom att följa den plastiska kompaktering som jorden upplever
vid den isotropiska pålastningen. Under avlastning fås en bild av hur
materialet har kompakterats och hur dess elastiska våghastighet varierar
med trycket.
Figur 6:2b. Triaxiell provning av sand från Sjöbo där trycket P varierades till
0, 15, 0, 30, 0, 45, 0, och 60 MPa. Trycket redovisas som funktion
av vertikal respektive radiell ingenjörstöjning.
Efter att första delen av provningen är klar utförs skjuvprov där radiell
spänning
r hålls konstant på olika nivåer. Detta prov ger svar på hur flyt-
gränsytan och plasticiteten varierar hos jordmaterialet för olika trycknivåer.
Figur 6.2c visar skjuvresultat från sandprovningen.
0
10
20
30
40
50
60
0 	10 	20 	30 	40 	50 	60 	70 	80 	90

[o/oo]
P [MPa]
vertikal
radiell

-- 81 of 311 --

Markstötvåg
2020-09-28 revidering 2 81
Figur 6:2c. Triaxiell skjuvprovning av sand från Sjöbo. Radiell spänning
r hölls
konstant till 2 MPa (röd linje), 20 MPa (grå linje), och 60 MPa (svart
linje). Den vertikala spänningen
v ökades successivt tills kollaps
uppstod.
Flytgränsytan brukar beskrivas med hjälp av spänningsdeviatorns andra in-
variant J2D vilken definieras som
( 	) ( 	) ( 	)	
( 	)	
( 	)
2	2
1	3
2
3	2
2
3	1	2 6
2
6
1 r	v	D	J	

	
	
	
	
	
	
	
	−		=	−	+	−	+	−	=	
(6:2f)
vanligtvis som indata till materialmodeller ges spänningsdifferensen
r	v	J	

	
	−	=	2	3	
(6:2g)
vilken då ges som funktion av det aktuella tryck som provkroppen har. I det
cylindriska fallet kan vi se att detta blir vertikal spänning minus radiell
spänning, se ekvation (6:2g). En kortfattad beskrivning av spännings- och
töjningstensorer ges i bilaga C. En bra referens om materialmodellering med
fokus på jordmaterial är Desai och Siriwardane (1984). Framtagning av
EOS som tryck som funktion av logaritmisk volymetrisk töjning och flytyta
med plasticering för sanden förklaras i Laine (2000:3).
I tillägg utfördes även mätning av de elastiska vågorna, longitudinell våg
och skjuvvåg, i jordmaterialet under olika trycktillstånd. Detta gjordes för
proverna som utfördes i bergprovningsutrustningen. Dessa utfördes med
hjälp av tryckomvandlare som placerades enligt figur 6.2a. Två tryckom-
vandlare placerades i 45 graders lutning, med inbördes vinkel på 90 grader,
mot änden av sandprovet. Med hjälp av superposition kunde därmed en nå-
gorlunda ren longitudinell våg respektive skjuvvåg skapas. Dessa kan an-
vändas för att karaktärisera elastiska vågegenskaper under olika tryck- och
densitetstillstånd. Tryckvågshastigheten Vp relaterar till ödometermodulen
M och densiteten
 enligt
0
20
40
60
80
100
120
-100 	-50 	0 	50 	100 	150 	200 	250

r [o/oo]	

v [o/oo]
v - r [MPa]

-- 82 of 311 --

Markstötvåg
2020-09-28 revidering 2 82

M
VP =	
(6:2h)
Skjuvvågen relaterar till skjuvmodulen G enligt:

G
VS =	
(6:2i)
Från de mätta vågorna kan tryckvågen c beräknas för ett isotropiskt och
homogent material enligt
2
3
4	2
s	p V	V	c 	−	=	
(6:2j)
Vilken relaterar till kompressionsmodulen K enligt
2
)	( c	K 	=

		
. (6:2k)
Mer detaljerad beskrivning av de olika modulerna och elastiska vågorna
återfinns i bilaga D. I figur 6:2d visas hur dessa vågor varierar med ökad
densitet, värden är återgivna för maximalt tryck vid aktuell densitet. Vi kan
observera att våghastigheterna mätt vid maximalt tryck för aktuell densitet
ökar så gott som linjärt under provningen, där skjuvvågen har en svagare
lutningskoefficient. Detta är av intresse för materialmodellen som
Moxnes et al. (1999) gjorde för porösa material. Där anges nämligen elas-
tisk avlastningsvåg c som funktion av densitet.
Figur 6:2d. Triaxiell skjuvprovning av sand från Sjöbo. Mätning av tryckvåg vp
och skjuvvåg vs under olika densiteter
 vid maximalt tryck.
R2 = 0.9984
R2 = 0.9852
600
900
1200
1500
1800
2100
2400
2700
1700 	1800 	1900 	2000 	2100 	2200

, [kg/m3]
vL vs [m/s]
mätt tryckvågshastighet
mätt skjuvvågshastighet

-- 83 of 311 --

Markstötvåg
2020-09-28 revidering 2 83
Den elastiska av- och pålastningen kan beskrivas med hjälp av följande re-
lation

	
	= )	(2
c	P	
(6:2l)
där c är en funktion av densiteten
. I Moxnes et al. (1999) beskrivs skjuv-
modulen som funktion av densitet för porösa material med följande ekvation
2
)	( s	v	G 	=

		
. (6:2m)
Sålunda bidrar mätningarna av de elastiska vågorna till att karaktärisera
jordmaterialet under olika tryck- och densitetstillstånd. En utförligare be-
skrivning av elastiska vågor, speciellt i jord, återges i Santamarina (2001).
En kortfattad beskrivning av elastiska vågor ges i bilaga D.
I Laine och Sandvik (2001) visas hur EOS tas fram för Sjöbo-sand enligt
materiamodellen som Moxnes et al. (1999) föreslår för porösa material.
Tryck som funktion av densitet, samt hur kompressionsvåg och skjuvmodul
varierar med densiteten, dessutom hur flytytan varierar med trycket beskrivs
även i Laine (2002).
Materialmodellen som Moxnes et al. (1999) har tagit fram är en kraftig för-
enkling av hur de elastiska vågorna varierar för sand, se avsnitt 5:4 och mät-
resultat från Zimmer (2003). Dessa resultat visar att de elastiska vågorna
inte bara beror på densiteten utan även på aktuellt tryck.
6:3 Provning lämpad för höga tryck
Det finns olika provningsmetoder som är mer eller mindre lämpliga bero-
ende på vilket material som studeras. De flesta av dessa metoder går ut på
att mäta en fri ytas hastighet Ufriyta hos till exempel en vittnesplåt eller det
studerade materialet själv. Man kan nämligen anta att den fria ytans hastig-
het är två gånger större än partikelhastigheten, vilket är ett känt villkor för
fri avlastning av en stötvåg i solida material, se exempelvis Meyers (1994).
Detta kan skrivas som
friyta p r	U U U	= −	
(6:3a)
där Ur är den reflekterade vågen. I de första experimenten användes
sprängmedel i direkt kontakt med det okända materialet för att skapa en
stötvåg i det undersökta materialprovet, vilket varierar i tjocklek. En annan
metod är att sprängmedlet accelererar en stålplatta (känt material) mot det
undersökta materialet. En senare version är att man använder en drivspegel
med känt material framtill som accelereras av komprimerad luft inuti ett rör
mot det undersökta materialet, se figur 6:3a.

-- 84 of 311 --

Markstötvåg
2020-09-28 revidering 2 84
Figur 6:3a. Olika provningskonfigurationer för att kunna mäta den fria ytans
hastighet. (a) Explosivämne i direkt kontakt. (b) Plan stöt driven av
explosivämne. (c) Plan stöt med hjälp av komprimerad gas.
Dessa provningsmetoder fungerar bra för material som är någorlunda ho-
mogena och sammanhängande, såsom metalliska och keramiska material.
För granulära och porösa material, såsom jord, behövs en annan provnings-
konfiguration. Detta för att mätningarna skall bli tillförlitliga. Om vi tar
gaskanonen som exempel och försöker skjuta ett känt material mot ett lager
av sand (undersökt material) så skulle det bara bli en skur av sand som bak-
sidan skulle uppvisa och därmed blir det mycket svårt att mäta den fria ytans
hastighet. Detta på grund av att granulära material ofta har låg eller ingen
draghållfasthet. Ett sätt att undvika detta är att istället skjuta det undersökta
materialet mot ett känt material och registrera den fria ytans hastighet hos
det kända materialet, se figur 6:3b. Det kända materialets stötvågsegen-
skaper är kända och därmed blir det möjligt att baklänges räkna ut stöt-
vågsegenskaperna hos det undersökta jordmaterialet.
Figur 6:3b. Invers plan stötprovning med hjälp av komprimerad gas.
Explosivt ämne
Detonator
Hög detonationshastighet
Låg detonationshastighet
Undersökt material
(a)
Mätning av den
fria ytans hastighet
Explosivt ämne
Detonator
Hög detonationshastighet
Låg detonationshastighet
Undersökt material
(a)
Mätning av den
fria ytans hastighet
Explosivt ämne
Detonator
Hög detonationshastighet
Låg detonationshastighet
Undersökt material
(b)
Projektil (känt material)
Mätning av den
fria ytans hastighet
Explosivt ämne
Detonator
Hög detonationshastighet
Låg detonationshastighet
Undersökt material
(b)
Projektil (känt material)
Mätning av den
fria ytans hastighet
Undersökt material
(c)
Projektil (känt material)
Drivspegel
Komprimerad luft
Mätning av den
fria ytans hastighet
Hastighetsmätning av projektil
Undersökt material
(c)
Projektil (känt material)
Drivspegel
Komprimerad luft
Mätning av den
fria ytans hastighet
Hastighetsmätning av projektil
Känt material
(stål C45)
Projektil (undersökt jordmaterial)
Drivspegel (aluminium)
Komprimerad gas
Mätning av den
fria ytans hastighet,
Hastighetsmätning av projektil 	Anslagsyta

-- 85 of 311 --

Markstötvåg
2020-09-28 revidering 2 85
Denna provning benämns här invers plan stöt (på engelska: inverse flyer
plate test) vilken kommer att beskrivas och analyseras närmare i detta kapi-
tel eftersom den är en lämplig provmetod för EOS vid höga tryck vid
material såsom lösa jordarter.
6:31 Plan stöt
För att förstå hur invers plan stötvågsprovning fungerar kan man börja med
att studera plan stöt. I figur 6:31a visas hur material 1 med anslagshastig-
heten vanslag träffar material 2.
Figur 6:31a. Illustration av plan stöt mellan två material.
Stötvågsegenskaperna är kända för material 1. Material 2 befinner sig i vila
före anslag. Efter anslaget uppstår två stötvågor, en propagerar in i
material 1 med stötvågsfronthastighet Us1 och den andra in i material 2 med
stötvågsfronthastighet Us2. Nu kan två villkor ställas upp, se ekvat-
ion (6:31a) och (6:31b). Det första villkoret är att trycket vid anslagsyta
måste vara lika. Det andra villkoret bygger på att materialen måste vara
kontinuerliga över anslagsytan dvs. att samma hastighet måste uppstå i
kontaktytan hos de båda materialen, annars uppstår tomrum eller höga den-
siteter. I det andra villkoret kan man se att partikelhastigheten hos material 1
innan anslag är lika med vanslag och efter anslaget reduceras partikelhastig-
heten med den reflekterade stötvågens partikelhastighet Up1. För mer in-
formation om plan stötvåg kan Meyers (1994) användas som utgångspunkt.
(6:31a)
och
,1 ,2	anslag p p	v U U	− =	
(6:31b)
6:32 Invers plan stöt
De två villkoren från plan stöt, ekvation (6:31a) och (6:31b), är nödvändiga
för att kunna beräkna stötvågstillståndet hos det undersökta materialet vid
invers plan stötvågsprovning. Dessa prover kan utföras med gasdriven ka-
non där en drivspegel med det undersökta materialet accelereras och träffar
2	1 P	P =
Material 1
Material 2
Tid före anslag Tid vid anslag
vanslag Material 1
Material 2
Tid efter anslag
1
2
US,1
UP,1
US,2
UP,2
vanslag vanslag

-- 86 of 311 --

Markstötvåg
2020-09-28 revidering 2 86
ett material där dess stötvågsegenskaper är väl dokumenterade. Detta kan till
exempel vara stål av typen C45 som används som vittnesplåt. Vittnesplåtens
fria ythastighet, vfri, mäts med hjälp av VISAR-laser (Velocity Interferome-
ter System for Any Reflector), se även figur 6:3b.
Anslagshastigheten vanslag kan sedan påverkas med hjälp av att variera appli-
cerat gastryck. Typiska hastigheter är mellan 100 till 1000 m/s. Från den fria
ythastigheten kan vittnesplåtens partikelhastighet härledas
,	fri p vittne refl	v U U	= +	
(6:32a)
där Urefl är den reflekterade stötvågens hastighet. Denna är ungefär lika stor
som Up,vittne, vilket ger
𝑈𝑝,𝑣𝑖𝑡𝑡𝑛𝑒 = 1
2𝑣𝑓𝑟𝑖 (6:32b)
Under anslaget kan enaxligt töjningstillstånd antas. Första huvudspänningen
 mellan vittnesplåten och det undersökta jordmaterialet kan beräknas med
hjälp av Rankine-Hugoniots konserveringslagar av bevarande av rörelse-
mängden och det faktum att vi känner EOS för vittnesplåten
1 0, , ,	vittne S vittne p vittne	U U	
 
	=  	
(6:32c)
och
, ,	S vittne vittne p vittne vittne	U S U C	=  +	
(6:32d)
där ekvation (6:32d) är en tillståndsekvation för stålet som beskrivs med
hjälp av ett linjärt förhållande mellan partikelhastighet och stötvågsfront-
hastighet. Stål C45 har följande EOS data:	
0,vittne = 7800 kg/m3,
Svittne = 1,332, och Cvittne = 4480 m/s.
Om ekvation (6:32b) och (6:32d) insätts i (6:32c) kan första huvudspän-
ningen beräknas för den undersökta jorden för tiden då Hugoniotplatån va-
rar. Denna varar så länge den initiella stötvågen passerar genom det under-
sökta materialet utan reflektioner. Därmed kan första huvudspänningen be-
räknas med hjälp av
(6:32e)
Nästa stötvågsparameter, partikelhastigheten hos jorden, kan beräknas med
hjälp av utnyttjande av ekvation (6:31b) och (6:32b)
(6:32f)
2
1 0, 0,
2 2
fri fri
vittnes vittnes vittnes vittnes
v v
C S	
 
	
 
=   +   
 
1
, 2	p jord anslag fri	U v v	= −

-- 87 of 311 --

Markstötvåg
2020-09-28 revidering 2 87
Enligt ekvation (6:31a) är trycken lika i båda materialens komprimerade del
under anslaget och med hjälp av bevarande av rörelsemängden kan stövågs-
frontens hastighet hos jorden beräknas
1
,
0, ,
S jord
jord p jord
U U


= 
(6:32g)
Används också massans bevarande kan den komprimerade densiteten hos
jorden beräknas enligt
0, ,
, ,
jord S jord
jord
S jord p jord
U
U U



= −
(6:32i)
Slutligen kan den interna energin hos jorden beräknas med hjälp av energins
bevarande
1
1	2
0,
1 1
( )	jord
jord jord
E	
  
=   −	
(6:32j)
Nu har en Hugoniotpunkt för jordens tillståndsekvation beräknats, det vill
säga stötvågsparametrarna
 Up,jord, Us,jord, rjord, och Ejord för aktuell an-
slagshastighet vanslag hos projektilen. För att ta fram en tillräcklig EOS krävs
flera skott med olika anslagshastigheter. Detta är vad som fås ut från den
första initiella stötvågen som det undersökta materialet upplever. Detta initi-
ella tillstånd kallas Hugoniotplatån. Men invers plan stötvågsprovning ger
mer karaktäristisk information om det undersökta materialet. När stötvå-
gorna reflekteras uppstår specifika hopp i mätningen av den fria ytans has-
tighet vfri(t) som kan analyseras och verifieras med hjälp av numeriska be-
räkningar. Hoppen uppstår på grund av vågreflexioner mellan material och
de fria ytorna. Det sista stora hoppet hos vfri(t) uppstår när tryckvågen i
jordmaterialet når drivspegeln och reflekteras åter tillbaks och slutligen når
vittnesplåten, därefter färdas vittnesplåten fortare än projektilen. Figur 6:32a
visar en schematisk bild över hur reflektionerna uppstår under provningen.

-- 88 of 311 --

Markstötvåg
2020-09-28 revidering 2 88
Figur 6:32a. Schematisk bild som beskriver hur den fria ytans hastighet vfri kan
variera vid invers plan stöt på grund av de reflektioner som uppstår
mellan material och de fria ytorna.
Mer information angående invers plan stötvågsprovning återfinns i
Riedel (2000) och Thoma et al. (1999).
6:33 Finita elementanalys av invers plan stöt
Syftet med dessa analyser är att undersöka hur en provning med invers plan
stöt kan utföras och vilken slags karaktäristiska stötvågsdata som kan för-
väntas från en sådan provning. Den tvådimensionella axialsymmetriska
Lagrange-lösaren i Autodyn, se Century Dynamics (2003), användes i ana-
lyserna. Kvadratiska element med längden 0,2 mm användes i alla delar. En
radie på 50 mm användes för drivspegel med sandprovet och för vittness-
plåten. Tjockleken för drivspegeln av aluminium och sandprovet var satt till
10 mm. Tjockleken för vittnesplåten varierades mellan 2, 4 och 8 mm. Fi-
gur 6:33a visar materiallokaliseringen hos beräkningarna. Kontakt-
definitionen Lag/Lag användes mellan de olika delarna med internt gap.
Initiell anslagsyta
Position X
Tid t
1
2
4
6
8
10
12
Undersökt
material
Kompressionsvåg
Dragvåg
13
2
4
6
8
10
12
13
Hugoniot
platå
4, 6, 8, 10 Fri
Avlastningsvåg
Tid t
Maximal
hastighet
vfri
Fria ytans hastighet hos v ittnesplåten, vfri

-- 89 of 311 --

Markstötvåg
2020-09-28 revidering 2 89
Figur 6:33a. Materiallokalisering för 2D axisymmetriska modellen med en tjock-
lek på t = 2, 4 och 8 mm hos vittnesplåten (stål).
Kornfördelningen hos den studerade sanden är medel till grov, med korn-
fördelningstalet Cu = d60 / d10 = 2. Det organiska innehållet var mindre än
1 viktprocent. Torrdensiteten var
d = 1574 kg/m3 med vatteninnehåll på
cirka 6,57 %. Korndensiteten hos sanden var
k = 2641 kg/m3. En porös
EOS och en tryckhårdnande flytyta användes för sanden. Detaljerad be-
skrivning av använda materialdata återges i Laine och Sandvik (2001).
Vittnesplåten, som är av stål C45, var modellerad med Shock EOS med
följande data:
C45 = 7800 kg/m3, Svittne = 1,332, och Cvittne = 4480 m/s. von
Mises flytyta användes med maximal flytspänning på 200 MPa.
Drivspegeln av aluminium modellerades med en linjär EOS med kom-
pressionsmodulen K = 70 GPa. Dess densitet var satt till 2800 kg/m3. En
von Mises flytyta användes med maximal flytspänning på 100 MPa.
Tjockleken hos vittnesplåten varierades mellan 2, 4, och 8 mm. Analyserna
visade att en tydlig Hugoniotplatå inte uppstår när tjockleken var 2 mm. När
tjockleken var 4 eller till och med 8 mm så uppstod dock en tydlig
Hugoniotplatå. Figur 6:33b och figur 6:33c visar simuleringsresultat av den
fria ythastigheten som funktion av tid för de olika tjocklekarna hos vittnes-
plåten. Anslagshastigheten var 250 m/s för alla simuleringarna.
vanslag	vanslag
aluminium sand stål
t
v=0
vfri(t)

-- 90 of 311 --

Markstötvåg
2020-09-28 revidering 2 90
Figur 6:33b. Den fria ytanshastighet som funktion av tid upp till 30 ms för olika
tjocklekar hos vittnesplåten. Simulerade tjocklekar: t = 2, 4 och
8 mm.
Figur 6:33c. Förstoring av Hugoniotplatå som syns i den fria ytans hastighet
som funktion av tid upp till 5 ms för olika tjocklekar hos vittnesplå-
ten. Simulerade tjocklekar: t = 2, 4 och 8 mm.
Analyserna visar att tjockleken hos vittnesplåten bör vara minst 4 mm för att
en tydlig Hugoniotplatå skall kunna uppstå, se figur 6:33c.
Efter Hugoniotplatån uppstår flera vågreflektioner mellan materialen och de
fria ytorna. Slutligen frigörs vittnesplåten från sanden när den första vågen,
kompressionsvågen inuti sandmaterialet, reflekteras mot aluminium-driv-
spegeln och kommer tillbaks till vitnnesplåten. Alla dessa fenomen ger god
stötvågskaraktäristik att verifiera framtagna stötvågsdata från experiment
0
30
60
90
120
150
180
210
0.000 	0.005 	0.010 	0.015 	0.020 	0.025 	0.030
vfri 	[m/s]
t [ms]
tjocklek 2 mm
tjockleck 4 mm
tjocklek 8 mm
0
5
10
15
20
25
30
0.000 	0.001 	0.002 	0.003 	0.004 	0.005
vfri 	[m/s]
t [ms]
tjocklek 2 mm
tjockleck 4 mm
tjocklek 8 mm
Hugoniot-platå

-- 91 of 311 --

Markstötvåg
2020-09-28 revidering 2 91
med simuleringar. I figur 6:33d visas första huvudspänningen vid olika till-
fällen för simulering med anslagshastigheten 750 m/s.
(a) t = 0.5

s (b) t = 4.1

s (c) t = 6.5

s
(d) t = 7.0

s (e) t = 7.8

s (f) t = 8.3

s
Figur 6:33d. Första huvudspänningen vid olika tidpunkter för simulering med
anslagshastighet 750 m/s. Minsta och största spänningsnivå är fix-
erad till -4,5 GPa (blå) respektive 0 GPa (röd).
I figur 6:33d-a visas spänningsnivån hos den initiella stötvågen precis efter
anslaget mot vittnesplåten. Notera att spänningsnivån i både sandmaterialet
och vittnesplåten är lika. Figur 6:33d-c visar hur den initiella stötvågen re-
flekteras mot aluminiumet. I Figur 6:33d-e är den reflekterade stötvågen på
väg tillbaka mot vittnesplåten. Den sista figuren, figur 6:33d-f, visar spän-
ningsnivån precis innan vittnesplåten frigörs från sanden och drivspegeln av
aluminium.
Den fria ytans hastighet är i praktiken den enda tillståndsvariabel som mäts
under hela experimentet. I nästa steg utfördes simuleringar med olika an-
slagshastigheter och med 4 mm tjocklek på vittnesplåten. Anslagshastig-
heten för drivspegel och sandprov varierades enligt Tabell 6:33a. Den fria
ytans hastighet som är angiven i Tabell 6:33a refererar till Hugoniotplatån.
Tabell 6:33a. Analyser med olika anslagshastigheter vanslag och 4 mm tjocklek på
vittnesplåten dvittnes.
vanslag
[m/s]
dvittnes
[mm]
dsand
[mm]
daluminium
[mm]
vfri
[m/s]
250 4 10 10 14
500 4 10 10 53
750 4 10 10 112
1000 4 10 10 185

-- 92 of 311 --

Markstötvåg
2020-09-28 revidering 2 92
Den fria ytans hastighet som funktion av tiden från de olika simuleringarna
redovisas i figur 6:33e.
Figur 6:33e. Den fria ytans hastighet som funktion av tiden för olika
anslagshastigheter, nämligen 250, 500, 750 och 1000 m/s.
I Tabell 6:33b jämförs de analytiska beräkningarna för stötvågsvariablerna
enligt avsnitt 6:32 med finita elementanalyserna. Här jämfördes densitet,
intern energi och första huvudspänningen.
Tabell 6:33b. Analytiska beräkningar, enligt avsnitt 6:32, av initiell stötvåg vid
Hugoniotplatån som jämförs med finit elementanalys.
Analytisk
lösning
FE analys med
Autodyn
Vanslag Vfri Up,sand	
1 Us,sand	
sand Esand	
1	
sand Esand
[m/s] [m/s] [m/s] [MPa] [m/s] [kg/m3] [kJ/kg] [MPa] [kg/m3] [kJ/kg]
250 14 243 245 603 2805 30 102 2372 29
500 53 474 933 1177 2800 112 1001 2688 111
750 111.7 694 1984 1707 2821 241 2001 2740 237
1000 184.5 908 3311 2179 2869 412 3234 2814 415
Om man studerar resultaten lite närmare kan man se att den analytiska be-
räkningen för anslagshastigheten 250 m/s skiljer sig tydligt med hänsyn till
 och
 jämförs med numeriska beräkningar. Finita elementanalyserna vi-
sar respektive 58 % och 15 % lägre resultat. Men när anslagshastigheten
ökas till 500 m/s och över kan man se god överensstämmelse mellan den
enkla analytiska beräkningen och finita elementanalyserna. Faktum är att
det skiljer sig mindre än 7 % för
,
 och E för sanden. En anledning till
detta är att de enkla analytiska beräkningarna inte tar hänsyn till sandmateri-
alets skjuvhållfasthet som är speciellt viktig vid svaga stötvågor.

-- 93 of 311 --

Markstötvåg
2020-09-28 revidering 2 93
Slutsatser av finita elementanalyser av invers plan stöt
Här utfördes numeriska beräkningar av invers planstötvågsprovning. Varje
prov ger en punkt på Hugoniot kurvan hos tillståndekvationen. Men de ger
också bra verifieringsunderlag för att testa framtagna stötvågsdata. Det är av
stort intresse att kunna fånga den fria ytans hastighet som funktion av tiden,
det vill säga kan simuleringarna prediktera Hugoniotplatån, stötvågs-
reflektioner, och den slutliga fria ytans hastighet korrekt? Därutöver bör
vittnesplåtens tjocklek åtminstone vara 4 mm för att en tydlig Hugoniotplatå
skall uppstå. Sandproverna borde fördämmas i radiell riktning vid faktisk
provning.
De analytiskt beräknade stötvågsvariablerna för Hugoniotplatån kan pre-
dikteras ganska bra för anslagshastigheter över 500 m/s. För lägre hastig-
heter skiljer sig resultaten markant från finita elementanalyser. Därmed kan
också verkliga experiment förväntas vara missvisande för lägre anslagshas-
tigheter. Initiellt stötvågstryck är då i närheten av flytspänningen hos sand-
materialet och därför borde de analytiska ekvationerna kompletteras så att
de tar hänsyn till sandmaterialets skjuvhållfasthet.

-- 94 of 311 --

Markstötvåg
2020-09-28 revidering 2 94
7 Finita elementanalyser
7:1 Allmänt
Den typ av materialdata som beskrivs i kapitel 5 och 6 används i finita ele-
mentanalyser. Detta kapitel går översiktligt igenom hur dessa analyser kan
göras och vad de används till.
7:2 Grundläggande beskrivning
Empiriska ekvationer som beskriver markstötsvågstrycket blir som funktion
av tid för en specifik laddning vid ett visst djup och avstånd ett enkelt och
bra sätt att få en uppfattning om hur belastningen ser ut från en markex-
plosion. Men verkligheten är så mycket mer komplicerad. Ett försök att ef-
terlikna verkligheten så mycket som möjligt är att simulera den! Detta kan
göras med hjälp av finita elementberäkningar (FE), där varje materials egen-
skaper såsom EOS och hållfasthet beskrivs i minsta detalj. Geometrier åter-
ges som i en tredimensionell värld, där geometrierna delas in i ett finit antal
element. Dessa element ges sedan materialegenskaper.
I FE- beräkningar har man möjlighet att fånga hur belastningen uppkommer
ända från laddningens detonation till hur stötvågen propagerar genom olika
medier såsom jord och luft, samt hur den skyddande strukturen upplever
belastningen. Dessa beräkningar är dock oerhört tidskrävande, både när det
gäller att förbereda materialegenskaper om de inblandade materialen och att
bygga upp själva elementnätet (geometrin). Därtill kommer att det tar lång
tid att utföra simuleringen på dagens PC-datorer. Därför är inte FE-beräk-
ningar något för den ovane att börja med som första steg för att fram mark-
stötvågsdata i en markexplosion.
I det här kapitlet redovisas två simuleringar. Den första behandlar en rädd-
ningscentral med omgivande luft och jord som har modellerats i detalj och
den andra simuleringen behandlar hur ett passivt skydd kan placeras framför
källarväggen för att minska verkan från markstötvågen. För detaljerad in-
formation av modeller som redovisas i detta kapitel hänvisas läsaren till
Laine (2000:1), Laine (2000:2), Laine (2000:3) och Laine (2002).
7:21 FE-simulering av räddningscentral utsatt för
markstötvåg.
Här är målet med simuleringsmodellen att kunna beskriva hur en räddnings-
central, byggd i armerad betong, i detalj rör sig när den utsätts för en ner-

-- 95 of 311 --

Markstötvåg
2020-09-28 revidering 2 95
grävd laddning som detonerar i närheten av byggnaden. Därför är det viktigt
att väggar, innerväggar, golvplan och tak tas med i modellen. Byggnaden
som studeras är RC Sjöbo, en tvåvåningsbyggnad där bottenvåningen är
placerad under marknivå. Byggnadsstommen är av slakarmerad betong.
Betongkvalitet K40 och armeringskvalitet Ks400, där ytterväggar har två
lager korslagd armering Ø14 mm, centrumavstånd 200 mm, och täckskikt
40 mm. Ytterväggstjockleken är 500 mm.
I FE-modellen för programmet Ansys/Ls-Dyna simuleras själva spräng-
ningen av ett konventionellt vapen som detonerar på ett visst horisontellt av-
stånd från räddningscentralen. Det tredimensionella solida finita elementet
har åtta noder i varje kubiskt element. Detta nät görs tillräckligt fint för att
fånga det beräknade beteendet. I FE-modellen kan detonationen ske ovan
mark eller i delvis eller fullt begravt läge. Stötvågor i omgivande luft och
mark introduceras på grund av detonationen. För att generera dessa luft- och
markstötvågor används ett ej deformerbart elementnät, ett elementnät med
Euler-formulering, bestående av en mix av tre material, sprängämne, luft,
och jord.
Räddningscentralens betongstomme är uppbyggd av ett deformerbart ele-
mentnät, Lagrange-formulering, med lager av utsmetad armering. Detta rör-
liga elementnät beskriver strukturens beteende vid vapenverkan. I Ls-Dyna
finns det en algoritm för att lösa kopplingen mellan fluid (Euler) och struk-
tur (Lagrange).
Den tänkta hotbilden utgörs här av en ostyrd minbomb, som väger cirka
250 kg med 110 kg TNT ekvivalent sprängämne, exempelvis Mk82. Det ho-
risontella avståndet mellan laddning och RC varieras till 3,5, 4,25, och
5,0 m. Laddningen är fullt nergrävd med tyngdpunkten placerad på 1,5 m
djup under markytan.
Två jordtyper har studerats, den ena torr sand från Sjöbo med en in situ-
skrymdensiteten på 1674 kg/m3 och seismisk våghastighet c på cirka
265 m/s. Den andra jordtypen är en vattenmättad sandig lera med in situ-
skrymdensitet 1900 kg/m3 och en avsevärt högre seismisk hastighet c, cirka
1500 m/s.
Det väsentliga med dessa simuleringar är att se hur hela strukturen hos den
valda räddningscentralen reagerar för aktuellt hot och yttre omständigheter
såsom jordtyp och avstånd till laddning. Därför har den numeriska modellen
försetts med mätpunkter på ytterväggar, källargolv, mellanbjälklag, och
innerväggar. I ett fysiskt fullskaleprov hade accelerometrar placerats på
olika ställen i byggnaden och mätningarna hade sedan analyserats. I fallet
med FE-beräkningar kan mycket mer information tas fram, såsom spän-
ningar i väggar som funktion av tiden och deformationer som funktion av
tiden. Resultaten från utförda analyser har sedan använts för att studera
skaktålighet hos komponenter i skyddade anläggningar vid påverkan av
markstötvågor från konventionella laddningar, se Forsén (2003).

-- 96 of 311 --

Markstötvåg
2020-09-28 revidering 2 96
I figur 7:21a redovisas hur stötvågen propagerar i jordtypen vattenmättad
sandig lera som genererats av energifrigörelsen från detonationen. Den når
därefter källarväggen som är placerad 5 m från laddningen efter cirka
3,3 ms. Maxtrycken i jorden är höga, cirka 39 MPa, vid tiden 2 ms, vilket är
1,3 ms innan stötvågen når väggen.
Figur 7:21a. Tryckspänning hos markstötvågen vid tiden 2 ms i vattenmättad
sandig lera. Avstånd mellan laddning och byggnad är 5 meter.
Jämförs detta med resultat från simuleringarna med porös torr sand så pro-
pagerar stötvågen signifikant långsammare. I figur 7:21b visas stötvågen vid
tiden 10 ms. Maxtrycken i fronten är mycket lägre, cirka 2 MPa. Stötvågen
ankommer efter 14,3 ms vid avståndet 5 m.
Figur 7:21b. Tryckspänning för markstötvågen vid tiden 10 ms i torr sand
(Sjöbo). Avstånd mellan laddning och byggnad är 5 meter.

-- 97 of 311 --

Markstötvåg
2020-09-28 revidering 2 97
I figur 7:21c och 7:21d redovisas kraterform och deformation hos käl-
larväggen som funktion av tiden för laddningsavstånden 5 och 3,5 m med
vattenmättad sandig lera. Deformationen visas i tre noder som ligger på in-
sidan av källarytterväggen, vid mellanbjälklag, mitten, och vid bottenplatta.
Figur 7:21c. Beräknad kraterform och utböjning hos källarvägg vid tiden 90 ms.
Maxutböjning är cirka 1,3 cm med vattenmättad lera. Aktuellt av-
stånd mellan laddning och byggnad är 5 m.
Figur 7:21d. Beräknad kraterform och utböjning hos källarvägg vid tiden 90 ms.
Maxutböjningen är över 30 cm med vattenmättad lera. Aktuellt av-
stånd mellan laddning och byggnad är 3,5 m.
Simuleringarna påvisar kollaps av yttervägg om avståndet är 3,5 m vid
vattenmättad sandig lera. Den maximala utböjningen var över 30 cm. Vid
4,25 meters avstånd var maximala utböjningen cirka 6,7 cm. Detta värde är

-- 98 of 311 --

Markstötvåg
2020-09-28 revidering 2 98
också högt men väggen kanske inte kollapsar. Vid avståndet 5 meter är
maximala deformationen endast cirka 1,3 cm.
Deformationerna hos väggen är mycket mindre för torr porös sand. Skulle
man göra en jämförelse mellan dessa analyser kan man studera maximal ut-
böjning dividerad med största utböjningen av alla beräknade fall, som i detta
fall var 0,31 m, dmax/0,31 m/m, för analyserna som funktion av laddningsav-
stånd R m/kg1/3, vilket är det skalade avståndet. Laddningsavståndet har här
dividerats med tredje roten av laddningsmängden. I figur 7:21e redovisas de
tre vattenmättade simuleringarna (blå diamanter) och de två torra sand-
simuleringarna (röda cirklar).
Figur 7:21e. Skalad max utböjning dmax/0.31 m/m som funktion av skalat ladd-
ningsavstånd R m/kg1/3.
En av frågorna som man ställer sig är varför nivån på utböjningarna på väg-
gen skiljer sig så våldsamt mellan torr porös sand och fullt vattenmättad
sandig lera när det skalade laddningsavståndet, R, är mindre än 1 m/kg1/3.
Att det är skillnad på stötvågsegenskaperna hos vattenmättade jordar förstås
med tanke på att den seismiska våghastigheten hos dessa vattenmättade jor-
dar är nära 1500 m/s och densiteten 1900 kg/m3 jämfört med den torra san-
den med cirka 300 m/s i seismisk ljudhastighet och densitet på 1674 kg/m3.
För torr porös sand är det endast inom cirka 1,5 m från aktuell laddning där
stötvågshastighet Us är signifikant högre än den seismiska våghastigheten.
Vid stötvågstrycket, P = 98 MPa, är stötvågshastigheten Us lika med
478 m/s, vilket fortfarande är cirka tre gånger lägre än vid vattenmättade
jordars initiella våghastighet.
Fullt vattenmättade jordar komprimeras inte lätt och därmed har de dålig
förmåga att ta upp energi i irreversibel kompression. Däremot kan den torra,
porösa sanden och dess korn packas och kan dessutom utföra en hel del
friktionsarbete och kompression, vilket gör att den absorberar betydligt mer
0
0.2
0.4
0.6
0.8
1
0.5 	0.6 	0.7 	0.8 	0.9 	1 	1.1
dmax
/0.31 [m/m]
R=r/W1/3 [m/kg1/3]
deformation av RC vid vattenmättad lera
deformation av RC's källarvägg vid torr porös sand
Antagen kurva för närområdet

-- 99 of 311 --

Markstötvåg
2020-09-28 revidering 2 99
energi. Detta leder till att markstötvågen avtar mycket snabbare i den torra
sanden i jämförelse med den vattenmättade leran.
Skjuvhållfastheten hos lera är mycket låg. Detta beror delvis på att det inte
finns tillräckligt med sandkorn i leran som kan skapa friktion. Här har leran
modellerats med en ej tryckhårdnande flytyta, i detta fall von Mises, med
max spänningsdifferens på σ1 - σ3 = 400 kPa. Detta skall jämföras med san-
dens tryckhårdnande flytyta som vid ett tryck på P = 100 MPa tål en spän-
ningsdifferens på σ1 - σ3 = 124 MPa.
7:22 Utformning av passivt skydd mot markstötvåg
Bakgrund
Det finns flera material som kan användas för att utforma ett passivt skydd
framför en anläggning som skall skyddas mot markstötvåg. Själva det pas-
siva skyddet utformas till exempel genom att det framför väggen används ett
fyllnadsmaterial som minskar effekten från markstötvågen.
Gemensamt för aktuella skyddsmaterial är att de är porösa och innehåller
stor volymandel luft. Det finns flera material som används i detta syfte, t.ex.
EPS (Expanded Polystyrene) med ρ0 = 20 kg/m3, Leca med kornstorlek
10-20 mm (”Light Expanded Clay Aggregates”) med ρ0 = 320 kg/m3 och
torrt grus. Även en enkel luftspalt kan i teorin användas. Nackdelen med en
luftspalt är att detta inte är praktiskt eftersom det omkringliggande jord-
materialet kommer att ramla in, och folk/föremål kan ramla ner. Dessutom
gäller att om bomben detonerar i luftspalten erhålls en fördämd detonation i
luft med begränsad ventilationsarea vilket skulle förvärra lastsituationen. I
figur 7:22a redovisas hur det passiva skyddet kan utformas.
Aktuellt
Jordmaterial
Passivt
skydds-
material,
poröst
material
Dränerande jordmaterial
ev. passivt skyddsmaterial
RC/skyddsrum med källare
Materialavskiljande duk
Dränering
Figur 7:22a. Schematisk skiss över hur det passiva skyddet kan utformas för en
RC eller ett skyddsrum med källare.

-- 100 of 311 --

Markstötvåg
2020-09-28 revidering 2 100
Om skyddsmaterialet är löst sammansatt, som t.ex. vid Leca, och har stora
luftfickor är det viktigt att en materialavskiljande duk används för att inte
luftfickorna ska fyllas med jord från angränsande jordlager. En annan viktig
sak är att det passiva skyddet måste installeras med god dränering, annars
finns det risk att luftporerna fylls med vatten. Om porerna fylls med vatten
kommer stötvågsegenskaperna hos skyddsmaterialet att ändras radikalt till
ett mycket ogynnsamt material med avseende på dess förmåga att minska
effekten från markstötvågen; jämför med simulering vattenmättad lera i av-
snitt 7:21. Detta innebär också att grundvattnet inte får ligga för högt upp i
marken.
Om endast den volymetriska energiabsorptionsförmågan studeras hos jord-
materialen och det tilltänkta skyddsmaterialet är Leca, så är detta mycket
gynnsamt för den här typen av kompressionsbelastning. I figur 7:22b redo-
visas tryck som funktion av kompression, där kompression definieras som
1
0
−	=


	
(7:22a)
där ρ0 och ρ är initiell respektive aktuell densitet.
Figur 7:22b. Tryck P som funktion av kompression för torr sand, vattenmättad
lera, EPS, och Leca.
I figur 7:22b kan man se att vattenmättade jordar är nästan helt inkompres-
sibla vid trycknivåer under 100 MPa. Den torra sanden är mer kompressibel
på grund av att kornen och luftporer lättare kan packas samman och därmed
kan en del volymetrisk energi absorberas i den torra sanden. Det andra ex-
trema materialet är expanderad polysteren (EPS) även kallad frigolit, vilket
beter sig för mjukt och absorberar väldigt lite volymetrisk energi. Detta kan
visa sig vara ett ogynnsamt material att använda om bomben briserar i eller
strax intill EPS:en, eftersom detta kan resultera i ett liknande scenario som
med en fördämd explosion i luft. Leca:n har under provning visat sig absor-

-- 101 of 311 --

Markstötvåg
2020-09-28 revidering 2 101
bera irreversibelt stora mängder energi när Leca-kulorna krossas, både un-
der ren kompression men också under skjuvdeformation. I figur 7:22b kan
man se att Leca placerar sig mellan dessa ytterligheter, dvs. den absorberar
mycket mer energi än jordmaterialen med hänsyn till ett visst tryck.
För att förstå stötvågens vägar fram till en konstruktion ges en första över-
siktlig bild av detta här. Detta på grund av att annars blir det svårt att förstå
hur ett passivt skydd av annat material framför byggnaden kommer sam-
verka i stötvågsutbredningen i de olika materialen.
Vid markstötvåg är det flera faktorer som påverkar den slutliga skyddsver-
kan som ett passivt skydd har framför en RC eller ett skyddsrum. Om vi
först bara studerar en ren markstötvåg genererad från en laddning nergrävd
nära markytan har vi en ”direkt våg” som anländer först till observations-
punkten från detonationspunkten, se figur 7:22c. Vid nergrävd laddning nära
markytan uppstår en ”avlastningsvåg” när markstötvågen når luften, som
har en mycket lägre impedans, impedans = densitet  seismisk hastighet, än
marken. En tredje våg som kan komma i fråga är en ”reflektionsvåg” från
ett jordlager med högre impedans. Exempel på sådana jordlager är berg eller
där grundvattennivån befinner sig. Alla dessa tre möjliga reflektioner bidrar
till den observerade ”resulterande” vågens utseende.
Figur 7:22c. Schematisk bild som redovisar vad som bidrar till den resulterande
markstötvågen som observeras vid observationspunkten.
Tid
Explosions-
källa
Observationspunkt
Direktvåg
Markyta (luft)
Jordtyp 1
Jordtyp 2, med högre densitet och seismisk
hastighet än jordtyp 1. Till exempel berg eller jord
under grundvattennivå
Bottenreflekterad våg
Reflekterad
avlastningsvåg
Tid
Tryck
Direktvåg
Reflekterad avlastningsvåg
Tid
Bottenreflekterad våg
Tid
Resulterande våg
+
+
=

-- 102 of 311 --

Markstötvåg
2020-09-28 revidering 2 102
När ett skikt av passivt skydd införs såsom Leca framför byggnaden blir
vågreflektionerna ännu mer komplicerade. Leca:n har lägre impedans än
sanden, vilket leder till att en ”avlastningsvåg” bildas när ”direktvågen” når
fram till Leca-lagret. Detta är en mycket positiv effekt som alla material
med lägre impedans bidrar till (även exempelvis EPS). Vad som inte är bara
positivt är att den delen av tryckvågen som väl transmitteras in i Leca:n
kommer att studsa/reflektera mellan byggnadens vägg, som har högre impe-
dans, och sanden, som också har högre impedans, se figur 7:22d.
Figur 7:22d. Schematisk beskrivning av hur direkt vågen bildar en avlastnings-
våg i sanden och hur den del av vågen som överförs till Leca:n re-
flekteras mellan betongväggen och sanden.
En annan positiv sak som har observerats är att Leca:n lätt deformeras verti-
kalt uppåt när själva kraterbildningen sker. Denna rörelse/deformation av
Leca förbrukar därmed en del av den energi som annars skulle utnyttjats till
att deformera källarväggen ytterligare.
En viktig fråga som man önskar få svar på är vilken tjocklek som det pas-
siva skyddet av Leca ha för att ge ett optimalt skydd mot markstötvågor. En
sådan studie har redovisats i Laine (2002). Studien gick ut på att studera vil-
ken tjocklek som gav ett minimalt/maximalt reflekterat tryck P, och
impulstäthet i, mot en fullt reflekterande vägg. Hotbilden var 125 kg TNT
med cylindrisk form, med höjden 1 m, nergrävd så att tyngdpunkten var pla-
cerad 1,5 meter under markytan. Avståndet till den stela reflekterande väg-
gen var 5 m. Tjockleken för Leca-skiktet varierades från 0 till 2,0 m i steg
om 0,25 m.
Beräkningarna visade att för att sänka det reflekterande maxtrycket Pmax
med cirka 80 procent för torr sand och 96 procent för vattenmättad sandig
lera behövs i princip bara en tjocklek på mindre än 0,75 m, men för att
uppnå optimal sänkning i impuls, som är det viktiga för att minska den
strukturella responsen hos den skyddade anläggningen, så visade beräkning-
arna att en tjocklek på cirka 1,25 m fungerade för båda materialen. Vid den
tjockleken var sänkningen i impulstäthet för sanden cirka 30 procent och för
vattenmättade sandiga lera cirka 44 procent.
Explosions-
källa Direktvåg
Markyta (luft)
Avlastningsvåg i
jorden
Observations-
punkt
LECA 	Vägg	Jord
Transmitterad
våg som
’studsar’

-- 103 of 311 --

Markstötvåg
2020-09-28 revidering 2 103
FE-simulering av strukturell respons vid användning av passivt
skydd
För att få en indikation hur en struktur av armerad betong skulle reagera
med det föreslagna passiva skyddet byggdes en axisymmetrisk 2D-modell
upp, se figur 7:22e. Hotet var 125 kg TNT på 5 meters avstånd till struktu-
ren. Sprängämnet har cylindrisk form, med höjden 1 m, och dess tyngd-
punkt var placerad 1,5 m under markytan. Jordmaterialet som användes var
torr sand. Det passiva skyddet av Leca hade en tjocklek på 1,25 m. Detalje-
rad beskrivning av modeller återfinns i Laine (2002).
Figur 7:22e. Axisymmetrisk modell i Autodyn-2D som visar materiallokalisering
för analysen som hade 500 mm betongvägg och ett Leca-skikt
med tjockleken 1,25 m.
Betongväggens tjocklek varierades mellan 250 och 500 mm och gavs en
tryckhållfasthet på 35 MPa. Betongplattan modellerades som fast inspänd i
ändarna. De korslagda armeringslagren utfördes med Ø16 mm Ks 40 S med
centrumavståndet 200 mm, täckskiktet var satt till cirka 25 mm och vägg-
höjden 3 m. Armeringen modellerades idealplastiskt med en flytspänning på
473 MPa.
I figur 7:22f redovisas deformation och kraterbildning vid tiden 100 ms för
källarvägg med tjockleken 250 mm med ett passivt skydd av Leca samt utan
detta skydd. Figurerna visar att väggen har deformerats mer utan det passiva
skyddet. Dessutom deformeras det passiva skyddet lätt vertikalt uppåt vid
kraterbildningen och tar därmed upp mer energi som annars hade blivit
väggens uppgift.

-- 104 of 311 --

Markstötvåg
2020-09-28 revidering 2 104
Figur 7:22f. Simulering med 250 mm vägg med (vänster) och utan (höger)
passivt skydd av Leca.
Figur 7:22g. Deformation hos väggens mittpunkt som funktion av tid för torr
sand med och utan det passiva skyddet. Väggtjocklek 250 mm.
Väggens deformation som funktion av tiden i mitten av väggens baksida för
analyserna med väggtjockleken 250 mm redovisas i figur 7:22g. Beräkning-
arna visar att maxdeformationen för 250 mm-väggen minskade med 96 %
och maxhastigheten hos väggen minskade med 79 %.
Slutsatser och diskussioner kring det passiva skyddets utform-
ning
De tre främsta orsakerna till att Leca 10-20 mm är ett bra material i ett
passivt skydd för markstötvågor är:

-- 105 of 311 --

Markstötvåg
2020-09-28 revidering 2 105
• Leca absorberar mycket volymetrisk energi när Leca-kulorna börjar
krossas, vilket sker redan för så låga trycknivåer som 50-100 kPa.
Leca-materialet absorberar mycket energi upp till ett hydrostatiskt
tryck på 40 MPa och däröver, vilket gott och väl täcker in de tryck-
intervall som kan förväntas vid den här typen av hot.
• När ”direktvågen” i sanden når fram till Leca-skiktet bildas en
”avlastningsvåg” i sanden som förstör den bildade tryckfördäm-
ningen i sanden. Detta uppstår på grund av att Leca:n har mycket
lägre impedans än vad jordmaterial såsom till exempelvis sand har.
• När kratern håller på att byggas upp kan Leca-skiktet röra sig verti-
kalt uppåt och deformeras och därmed lätta på jordtrycket som bil-
das på grund av kratern. Detta sker främst på grund av att Leca:n har
en lägre densitet än sanden och kan ta upp energi både i kompression
och under skjuvning.
De tre största osäkerheterna kring att använda Leca är:
• Leca-skiktet måste vara torrt; skulle skiktet vara vattenmättat kom-
mer Leca:ns positiva materialegenskaper att försvinna.
• Leca-skiktet måste vara intakt med avseende på tiden. Det bör även
kläs in i en duk som separerar omkringliggande jordmassor så att de
inte blandas med Leca-skiktet.
• På grund av att Leca har låg impedans, dvs. låg densitet och relativt
låg seismisk våghastighet, kommer den del av tryckvågen som över-
förs till Leca-skiktet att studsa/reflektera mot betongvägg och om-
kringliggande jordmassor. Men denna negativa effekt har visat sig
vara liten i analyserna i jämförelse med den positiva effekt som
Leca:n har påvisat.

-- 106 of 311 --

Markstötvåg
2020-09-28 revidering 2 106
5 m
Mätpunkter på golv och vägg
för att mäta tryck P(t) och
impuls I(t) som funktion av
tiden.
Axi-symmetri
jord
125 kg TNT/meter Genomsläpplig rand
spegling Stel kropp
golv
5 m
3 m
8 Hur markstötvåg propagerar runt
en rektangulär stel kropp
Delar av detta kapitel har också publicerats som en konferensartikel, Laine
och Larsen (2007).
8:1 Översikt
Målsättningen är här att studera hur markstötvågen propagerar runt stela
kroppar. Tidigare i litteraturen har ett flertal studier utförts på hur nergrävda
konstruktioners väggar upplever markstötvåg. I den här studien läggs fokus
på hur det nergrävda golvet påverkas av markstötvåg och av markens sam-
mansättning. I detta fall förenklas källarväggar och golv till att vara just en
stel kropp. En axisymmetrisk finita elementmodell i Autodyn har använts i
studien. Figur 8:1a visar hur modellen ser ut.
Figur 8:1a. Principiell skiss över finita elementmodellen.
En längsgående laddning som innehåller 125 kg TNT per meter användes
för att skapa en plan stöt mot den stela kroppen. Denna stötvåg registrerades
i ett antal punkter längs reflekterad vägg och golv. Speciellt intressant är det
att variera materialegenskaperna i jorden för att se hur olika egenskaper le-
der till varierande belastningsfall längs golvet.
I studien kommer jordens materialegenskaper att ändras gradvis från torr
sand till våt lera för att undersöka vilken påverkan detta har på fortplant-
ningen av markstötvågen runt den stela kroppen. Ändringen av EOS blir att

-- 107 of 311 --

Markstötvåg
2020-09-28 revidering 2 107
P
Sjöbo sand
=ρ/
−
Gradvis skalning
Fullt vattenmättad lera
Sjöbo sand
1-
3
P
Fullt vattenmättad lera
Gradvis skalning
utgå från Sjöbo sandens EOS, se Laine och Sandvik (2001), och ändra den
gradvis till vattenmättad lera, vilket illustreras av figur 8:1b. De två mellan-
liggande materialen som använts i studien är fiktiva.
Figur 8:1b. Gradvis ändring av EOS för jorden. Tryck som funktion av kom-
pression P(
).
Flytytan skalades också gradvis ner från sandens höga spänningsdifferens
1 -
3 till lerans låga, se figur 8:1c, där de två mellanliggande är fiktiva.
Figur 8:1c. Gradvis ändring av flytytan för jorden. Spänningsdifferens som
funktion av trycket.
Dessutom förändrades skjuvmodulen gradvis G(
) och kompressions-mo-
dulen K(
) för de gradvis skalade materialen.
8:2 Modellering av jorden
För att se hur olika materialegenskaper påverkar resultatet gjordes fyra olika
EOS och fyra olika flytytor. Detta ger totalt 16 jordsammansättningar.
Samma EOS- och flytytemodell användes för alla jordsammansättningar. I
Autodyn benämns den använda EOS:en som compaction och flytytan be-
nämns MO-granular; dessa användes för att modellera alla jordvarianter.
Materialmodellerna var framtagna för att kunna modellera granulära
material, se Moxnes et al. (1999). I tabell 8:2a namnges de 16 olika
jordsammansättningarna som har använts i studien.

-- 108 of 311 --

Markstötvåg
2020-09-28 revidering 2 108
Tabell 8:2a. De 16 olika jordsammansättningarnas namn. Si betyder olika
skjuvegenskaper och Ei betyder olika tryckegenskaper hos jord-
materialet.
S1 – sand S2 S3 S4 - lera
EOS1 - sand E1-S1 E1-S2 E1-S3 E1-S4
EOS2 E2-S1 E2-S2 E2-S3 E2-S4
EOS3 E3-S1 E3-S2 E3-S3 E3-S4
EOS4 - lera E4-S1 E4-S2 E4-S3 E4-S4
I bilaga E återges en beskrivning hur de olika jordsammansättningarna togs
fram samt använda indata. De framtagna jordsammansättningarna är gene-
riska och försöker beskriva ett stort spann av möjliga jordförhållanden som
utsätts för markstötvåg. Om de används för andra syften än att studera just
markstötvåg bör en kunnig geotekniker först konsulteras.
8:3 Modellering av geometrin
I Autodyn användes den två dimensionella axisymmetriska Euler-lösaren.
De yttre måtten för domänen var satt till 90 x 50 meter för att tillåta mark-
stötvågen propagera ostört i 100 ms. Efter elementstorleksanalys valdes
elementstorlek 15 mm i den finare delen av domänen som var 10 x 5 meter.
Där fanns 90 % av alla element. I marken användes randvillkoret transmit
och i luften outflow för att stötvågen skulle kunna propagera så ostört som
möjligt ut ur domänen.
Den stela kroppen modellerades med hjälp av oanvända celler. Mätpunkter
placerades med ett centrumavstånd på 10 centimeter både på vägg och på
golv.
8:4 Analysresultat
I analysresultaten var fokuset på hur belastning av golvbjälklaget ändras av
att jordsammansättningen varieras i enlighet med de totalt 16 simuleringar
som utförts. I avsnitt 8:41 redovisas maximalt tryck och impuls som
funktion av golvets längd från närmaste hörn till laddning. I avsnitt 8:42
diskuteras diffraktion runt hörnet av väggen och golvet.
8:41 Maxtryck och maximpuls längs golvet
När maxtrycket som golvet upplever jämfördes så visar figur 8:41a att
tryckegenskaperna, som beskrivs av EOS, hos jordsammansättningen på-
verkar mest. Maxtrycket ökar cirka 132 gånger när E1-S1 jämförs med
E4 S1. Men även skjuvhållfastheten hos jordsammansättningen påverkar
resultatet på maxtryck, se figur 8:41b. Vi kan tydligt se hur maximala
trycket ökar med sjunkande skjuvhållfasthet när tryckegenskaperna hålls
konstanta. I genomsnitt får vi tre gånger högre maxtryck när E1-S1 jämförs

-- 109 of 311 --

Markstötvåg
2020-09-28 revidering 2 109
med E1-S4. Därefter sjunker gradvis skjuvhållfasthetens betydelse med
ökade tryckegenskaper. När lerans EOS-E4 används har skillnader i
skjuvhållfasthet liten eller ingen betydelse längre på hur maxtrycket varierar
längs golvet, se figur 8:41c.
Figur 8:41a. Maxtryck hos källargolv för de olika jordsammansättningarna.
Logaritmisk skala hos trycket. Tryckaxeln börjar ej vid noll.
Figur 8:41b. Maxtryck hos källargolv för sand med EOS-E1 varierande
skjuvhållfasthet S1 till S4. Tryckaxeln börjar ej vid noll.
1
10
100
1000
0.1 	0.6 	1.1 	1.6 	2.1 	2.6 	3.1 	3.6 	4.1 	4.6
golvlängd (m)
Maxtryck
 Pmax 	(MPa)
E1-S1 	E1-S2 	E1-S3 	E1-S4 	E2-S1 	E2-S2 	E2-S3 	E2-S4
E3-S1 	E3-S2 	E3-S3 	E3-S4 	E4-S1 	E4-S2 	E4-S3 	E4-S4
1
2
3
4
5
6
7
8
0.1 	0.6 	1.1 	1.6 	2.1 	2.6 	3.1 	3.6 	4.1 	4.6
golvlängd (m)
Maxtryck
 Pmax 	(MPa)
E1-S1
E1-S2
E1-S3
E1-S4

-- 110 of 311 --

Markstötvåg
2020-09-28 revidering 2 110
Figur 8:41c. Maxtryck hos källargolv för lera med EOS-E4 och varierande skjuv-
hållfasthet S1 till S4. Tryckaxeln börjar ej vid noll.
Maximpulsen hos källargolvet ökar på ett liknande sätt som maxtrycket gör
för olika jordsammansättningar, se figur 8:41d. Maximpulsen ökar i genom-
snitt sju gånger när E1-S1 jämförs med E4-S1. När tryckegenskaperna, EOS,
hålls konstanta och skjuvhållfastheten varieras fås i genomsnitt tre gånger
högre maximpuls när E1-S1 jämförs med E1-S4, se även figur 8:41e. Denna
inverkan från skjuvhållfastheten kvarstår men försvagas även när tryckegen-
skaperna, EOS, höjs från E1 till E4, se figur 8:41f. När E4-S1 jämförs med
E4-S4 ökar maximpuls med cirka 1,5 gånger.
Figur 8:31d. Maximpuls hos källargolv för de olika jordsammansättningarna.
140
160
180
200
220
240
260
280
0.1 	0.6 	1.1 	1.6 	2.1 	2.6 	3.1 	3.6 	4.1 	4.6
golvlängd (m)
Maxtryck
 Pmax 	(MPa)
E4-S1
E4-S2
E4-S3
E4-S4
10
60
110
160
210
260
0.1 	0.6 	1.1 	1.6 	2.1 	2.6 	3.1 	3.6 	4.1 	4.6
golvlängd (m)
Maximpuls
 Imax (kPa s)
E1-S1 	E1-S2 	E1-S3 	E1-S4 	E2-S1 	E2-S2 	E2-S3 	E2-S4
E3-S1 	E3-S2 	E3-S3 	E3-S4 	E4-S1 	E4-S2 	E4-S3 	E4-S4

-- 111 of 311 --

Markstötvåg
2020-09-28 revidering 2 111
Figur 8:41e. Maximpuls hos källargolv för sand med EOS-E1 varierande skjuv-
hållfasthet S1 till S4.
Figur 8:41f. Maximpuls hos källargolv för lera med EOS-E4 varierande
skjuvhållfasthet S1 till S4.
Som slutsats angående belastningen hos golvbjälklaget kan vi säga att störst
inverkan har tryckegenskaperna som beskrivs av EOS:en. Jord med höga
tryckegenskaper, till exempel med högt vatteninnehåll, leder till högre tryck
och impuls. Därefter har skjuvhållfastheten stor betydelse, speciellt om
tryckegenskaperna, EOS, är låga, till exempel med hjälp av lågt vatteninne-
håll. Vid försämrad skjuvhållfasthet hos jorden leder detta till högre tryck
och impuls på golvbjälklaget.
10
20
30
40
50
60
70
80
90
100
0.1 	0.6 	1.1 	1.6 	2.1 	2.6 	3.1 	3.6 	4.1 	4.6
golvlängd (m)
Maximpuls
 Imax (kPa s)
E1-S1
E1-S2
E1-S3
E1-S4
80
100
120
140
160
180
200
220
240
260
0.1 	0.6 	1.1 	1.6 	2.1 	2.6 	3.1 	3.6 	4.1 	4.6
golvlängd (m)
Maximpuls
 Imax (kPa s)
E4-S1
E4-S2
E4-S3
E4-S4

-- 112 of 311 --

Markstötvåg
2020-09-28 revidering 2 112
8:42 Diffraktion runt hörn mellan vägg och golv
Vad som tydligt kan ses från analysresultaten är benägenheten till att mark-
stötvågen gärna böjer sig och börjar bilda virvlar när skjuvhållfastheten
sjunker. I figur 8:42a och 8:42b jämförs diffraktion kring hörnet för
jordsammansättningarna E1-S1 och E1-S4. Vi kan se hur diffraktion börjar
bildas på golvets sida när skjuvhållfastheten sjunker, se figur 8:42b. En
annan intressant detalj är att jorden nära väggen vill strömma neråt när jord-
sammansättningen har lägre skjuvhållfasthet, se figur 8:42b. I fallet med
hög skjuvhållfasthet vill dock jorden strömma uppåt längs väggen, se fi-
gur 8:42a.
Figur 8:42a. Redovisning av hastighetsfältet hos jorden med sammansättning
E1-S1 vid tiden 25 ms efter detonation. Röd pil motsvarar 10 m/s
samt mörkblå pil 0 m/s.
140 mm
golv

-- 113 of 311 --

Markstötvåg
2020-09-28 revidering 2 113
Figur 8:42b. Redovisning av hastighetsfältet hos jorden med sammansättning
E1-S4 vid tiden 25 ms efter detonation. Röd pil motsvarar 10 m/s
samt mörkblå pil 0 m/s.
I bilaga F visas hastighetsfältet i jorden för sammansättningarna E1-S1, E1-
S2, E1-S3, och E1-S4 vid tidpunkterna strax efter ankomst till vägg, cirka
12 ms, samt vid 25 ms. Resultaten redovisade i detta avsnitt har också pub-
licerats och presenterats i Laine (2006).
140 mm
golv

-- 114 of 311 --

Markstötvåg
2020-09-28 revidering 2 114
9 Empiriska samband för att beräkna
markstötvåg
9:1 Allmänt
Arbetet med att ta fram empiriska samband för att beräkna markstötvåg
startades redan under andra världskriget av USA:s försvars-forskningssats-
ningar. I Lampson (1946) ges en slutlig rapport av arbetet utfört mellan juni
1943 och augusti 1945. Syftet med detta arbete var att ge förståelse för hur:
a) markstötvågens magnitud påverkades av avstånd, laddningsdjup, ladd-
ningsstorlek och typ av laddning,
b) mäta skada på en nergrävd fortifikatorisk byggnad, och
c) ta fram samband mellan (a) och (b).
Punkt (c) ger underlag för försvarets ingenjörer att antingen kunna avgöra
hur stor vapenverkan som behövs för att oskadliggöra en nergrävd byggnad
eller hur en nergrävd byggnad ska utformas för att klara en tänkt hotbild. Ett
stort antal experiment ligger som grund för framtagandet av de första empi-
riska sambanden. Dessa samband har sedan förfinats av bland annat
Drake (1983) och Drake (1987). De har även använts av bland annat
svenska försvarets forskningsanstalt (FOA), se till exempel Balazs (1999),
för att uppskatta belastningen mot nergrävda armerade betongplattor som
belastas av markstötvåg som uppkommer från detonerande bomber ner-
grävda i marken.
Detta kapitel är indelat så att läsaren i avsnitt 9:2 först får en översikt över
vad Lampson tog fram som empiriska samband för markstötvåg redan under
slutet av andra världskriget. I avsnitt 9:3 ges en bild av hur Drake beskrev
liknande samband på 1980-talet. I avsnitt 9:4 diskuteras reflekterad mark-
stötvåg i detalj. Slutligen, i avsnitt 9:5 ges samband för kraterbildning och
hur den påverkas av olika parametrar.
9:2 Stötvågssamband enligt Lampson
Enligt Lampson (1946) ligger repeterbarheten hos experiment någonstans
runt 25 procent om man utför en seismisk undersökning av jorden som
identifierar att jordtypen är någorlunda densamma mellan olika provskjut-
ningar. Men faktorer som regn, och därmed ändrat fuktighetsinnehåll, på-
verkar resultaten kraftigt. Detta försvårar arbetet med att ta fram noggranna
markstötvågssamband. Därför är det fundamentalt viktigt att förstå grund-

-- 115 of 311 --

Markstötvåg
2020-09-28 revidering 2 115
principerna hos ett jordmaterial, Lampson (1946). Jordmaterialet är plastiskt
av naturen, se figur 9:2a, vilket illustrerar ett spännings-töjningsdiagram hos
en omättad siltig lera. Mätningen är dynamiskt utförd, det vill säga där stöt-
vågshastigheten har observerats under på- och avlastning, se bilaga G för ut-
förligare beskrivning. Våghastigheten hos ett jordmaterial kan beskrivas
som funktion av spänningstöjningskurvan enligt ekvation (9:2a). Där spän-
nings-töjningslutningen motsvarar en elasticitetsmodul E.



d
d	1
)	( =	V	
(9:2a)
Det som sker när en stötvåg vandrar igenom ett material med spännings-töj-
ningsegenskaper enligt figur 9:2a är att stötvågsfronten propagerar mycket
långsammare än avlastningsvågen, jämför lutningarna hos kurvorna i fi-
gur 9:2a vid till exempel tryckspänningen 800 kPa. Detta leder till att fron-
ten äts upp snabbt av avlastningsvågen vid höga tryck. Vid låga tryck sker
dock motsatsen, där sker en förlängning av vågen på grund av att avlast-
ningshastigheten är långsammare än pålastningensvågen, studera lutning-
arna till exempel vid tryckspänningen 100 kPa.
Figur 9:2a. Dynamiskt mätt tryckspänning som funktion av töjning för fri siltig
lera, korrigerad för sfärisk spridning. Punkterna som redovisas är
omvandlade från lb/in2 till kPa från figur 1 i Lampson (1946).
Från figur 9:2a har själva våghastigheterna för tangenten hos på- och avlast-
ningskurvorna beräknats och redovisas i figur 9:2b.
0
200
400
600
800
1000
1200
0 	0.001 	0.002 	0.003 	0.004 	0.005 	0.006 	0.007 	0.008 	0.009
Töjning,

[-]
Tryckspänning,

[kPa] .
pålastning
avlastning

-- 116 of 311 --

Markstötvåg
2020-09-28 revidering 2 116
Figur 9:2b. Longitudinell våghastighet som funktion av tryckspänning för fri sil-
tig lera med antagen densitet 1692 kg/m3. Beräknat från figur 9:2a
via ekvation (9:2a).
Figur 9:2b visar tydligt att för det studerade materialet är brytpunkten för
när avlastningen är snabbare än pålastningen ungefär 150 kPa. Om vi jämför
vilka på- och avlastningshastigheter vi har vid exempelvis tryckspänningen
800 kPa fås en pålastningshastighet på ca 230 m/s och en avlastningshastig-
het på cirka 650 m/s. Det betyder att avlastningen sker omkring 2,8 gånger
snabbare än pålastningen vid tryckspänningen 800 kPa. Men studeras has-
tigheterna vid tryckspänningen 100 kPa så är pålastningshastigheten
330 m/s och avlastningshastigheten 220 m/s, vilket betyder att situationen är
omvänd och att pålastningshastigheten är 1,5 gånger snabbare än avlast-
ningshastigheten vid tryckspänningen 100 kPa. Hur en ideell stötvåg i mar-
ken skulle påverkas av tryckberoende av- och pålastningshastigheter i jor-
den illustreras i figur 9:2c.
Figur 9:2c. Illustration av hur stötvågen påverkas av att på och avlastningsvå-
gen varierar med trycket enligt i figur 9:2b.
9:21 Skalningsmodell genom en dimensionslös
parameter
Det finns tillfällen när det underlättar att använda sig av dimensional analys
för att förstå hur skalning av experiment påverkar markstötvågsstorheter.
0
150
300
450
600
750
900
1050
1200
1350
1500
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000 	1100
Tryckspänning,

[kPa]
Longitudinell hastighet,
 vL 	[m/s] .
pålastning
avlastning
I. Över tid äts toppen upp av avlastningsvågen vid höga tryck.
II. Över tid förlängs vågen i rummet vid låga tryck.
I.
I.
II.	II.
x
t=t1 	t=t2, t2>t1

-- 117 of 311 --

Markstötvåg
2020-09-28 revidering 2 117
Till exempel, vid vilket avstånd blir trycket lika och vad händer med impul-
sen om laddningens massa W1 = 1 kg skalas till W2 = 1000 kg? Detta visade
Lampson (1946) att man kan studera igenom dimensional analys genom att
relatera en dimensionslös parameter S definierad som
3/1
1
2






= W
W
S	
(9:21a)
till dimensionella komponenter som massa M, längd L, och tid T. Enligt
Lampson (1946) kan då tabell 9:21a med kvantiteter (kolumn 1), dess
dimensioner (kolumn 2), och dimensioner (kolumn 3) omvandlas till
dimensioner i det nya systemet (kolumn 4). Kolumn 5 redovisar skalfaktorn
S för varje kvantitet. Kolumn 6 redovisar kvantitet i det nya systemet. Med
nytt system menas här när laddningen ändrats från W1 till W2. Slutligen visar
kolumn 7 kvantitetsjämförelse vid konstant värde av r / S, där r är laddning-
ens avstånd till studerad punkt.
Tabell 9:21a. Skalningsmodel enligt Lampson (1946).
Kvantitet Symbol Dimension i
gamla sy-
stemet
Dimension i
nya syste-
met
Skalfaktor Kvantitet i
nya sy-
stemet
Kvantitets-
jämförelse
vid ett
konstant
värde av r/S
Längd L L SL S SL L / S
Massa M	
L3	
S3 L3 S3 S3M M / S3
Tid T T ST S ST T / S
Kraft F MLT-2 S2MLT-2 S2 S2F F / S2
Energi E ML2T-2 S3ML2T-2 S3 S3E E / S3
Tryck P ML-1T-2 ML-1T-2 1 P P
Hastighet v LT-1 LT-1 1 v v
Total
Impuls
I’ MLT-1 S3MLT-1 S3 S3I’ I’ / S3
Impuls per
areaenhet
i ML-1T-1 SML-1T-1 S Si i / S
Förflytt-
ning
d L SL S Sd d / S
Accelera-
tion
a LT-2 S-1LT-2 S-1 S-1a Sa
Tabell 9:21a visar att om skalningsparametern är S = (1000 / 1)1/3 = 10, se
ekvation (9:21a), så uppstår samma tryck och partikelhastighet vid avstån-
det, här betecknat som längden SL. Det vill säga mätningen behöver utföras
10 gånger längre bort om ett experiment skalas från 1 kg till 1000 kg
sprängämne och trycket ska hållas konstant. Däremot ökar impulsintensitet-
eten med Si, detta betyder att även om trycket är konstant i experimenten
kommer impulsen per areaenhet bli 10 gånger högre. Det här kommer sig av
att även fast trycket är detsamma mellan de två lastfallen så har varaktig-
heten ökat till ST. Detta är ekvivalent med att hålla kvantiteten skalat ladd-
ningsavstånd  = r / W1/3 konstant. I Lampson (1946) används just  som
beteckning för skalat laddningsavstånd, vilket även görs här när Lampsons
empiriska samband diskuteras.

-- 118 of 311 --

Markstötvåg
2020-09-28 revidering 2 118
9:22 Lampsons empiriska ekvationer för
markstötvåg
Lampsons ekvationer för tryck
Lampson baserar sina empiriska ekvationer på experiment. I bilaga H redo-
visas ett axplock av de experimentella resultat som togs fram under
Lampsons tid för hur maxtryck varierar för olika skalade laddningsavstånd.
Från dessa experiment beskriver Lampson sambandet mellan maximalt
tryck P0 och skalat laddningsavstånd  = r / W1/3 av
3
0
−
=
		
k	P	
(9:22a)
där k är jordkonstanten. Lampsons resonemang hur ekvation (9:22a) kan
rättfärdigas med avseende på enhet hos vänsterled och högerled diskuteras i
slutet av bilaga H. Om hänsyn tas till vilket laddningsdjup och vilket explo-
sivämne som används kan maxtrycket P0 i [lb/in2] enligt Lampson bestäm-
mas med följande ekvation för avståndsvariationen 2 ≤
 ≤ 15.
n
FEk	P −
=
		
0	
(9:22b)
där F är kopplingsfaktor som beror på vilket laddningsdjup laddningen
detonerar, återfinns i figur 9:22a för lerig silt. E är explosivämnets faktor
återfinns i tabell 9:22b, k är en jordkonstant som är karakteristisk för den
studerade jorden, se tabell 9:22c,
 = r / W1/3 är det skalade laddningsav-
ståndet till studerad punkt där r återges i [ft] och laddningsvikt W i [lb]. n är
exponent som bestäms av laddningsdjup eller mätpunktens djup. Det gene-
rella värdet för n är 3, och gäller för större laddningsdjup eller mätpunkts-
djup än det kritiska värdet d =
W1/3 = 3 / 2W1/3. För grundare djup än så
går n mot 4. Ekvation (9:22b) visar att trycket sjunker med högre värde på
n. Denna trycksänkning på grund av yteffekter var inte helt klarlagd under
Lampsons tid. Lampson nämner att det kan bero på jordytans plasticering
och på reflektioner från ytan som är i motsatt fas. Dessa nämns som möjliga
orsaker till reduktion av maximala trycket när avståndet från laddningen
ökar för ytligt studerade laddningar.
Under litteratursökningen har ej alla rapporter från Lampsons arbete kunnat
hittas, så därför saknas kopplingsfaktorkurvor för andra jordmaterial. I
Lampson (1946) redovisas endast kopplingsfaktor för lerig silt, se fi-
gur 9:22a.

-- 119 of 311 --

Markstötvåg
2020-09-28 revidering 2 119
Figur 9:22a. Kopplingsfaktor F [-] som funktion av skalat laddningsdjup
c för le-
rig silt, från Lampson (1946).
Tabell 9:22b. Explosivämnets faktor E för tryck, från Lampson(1946).
Explosivämne Explosivämnets faktor E
TNT 1,00
Amatol 1,04
Composition B 1,04
Tritonal 1,17
Minol 2 1,34
HBX 2 1,39
Tabell 9:22c. Jordkonstant k [lb/in2] för några jordtyper, Lampson (1946).
Jordtyp Plats kmin kmax kmedel
Olagrad lös lera eller
silt, på engelska loess
Natchez,
Mississippi
400 1 700 800
Lerig silt Princeton,
New
Jersey
1 300 2 500 2 000
Siltig lera Camp
Gruber,
Oklahoma
1 300 9 000 5 100
Lera – omättad Houston,
Texas
10 000 20 000 15 000
Lera – mättad Houston,
Texas
50 000 150 000 100 000
För TNT-laddning begravd på laddningsdjupet dc =
cW1/3 = 2W1/3, där
c = 2 är det skalade laddningsdjupet, förenklas ekvation (9:22b) till
3
0
−
=
		
k	P	
(9:22c)

-- 120 of 311 --

Markstötvåg
2020-09-28 revidering 2 120
Denna enkla empiriska ekvation beskriver enligt Lampson tryckvariation
som funktion av skalat laddningsavstånd. Som ses i tabell 9:22c varierar k
från 1 till cirka 100 gånger i magnitud beroende typ och kondition hos jor-
den. Medan kopplingsfaktor F och explosivämnesfaktorn E tillsammans
varierar ungefär 1 till 7 gånger i magnitud. Detta gör att jorden är den en-
skilt viktigaste egenskap för att kunna estimera maxtrycket hos markstötvå-
gen. Hur k kan variera för samma jordtyp kan ses i tabell 9:22c. Denna vari-
ation antar Lampson beror på fuktinnehåll och packningsgrad hos jorden.
I vissa lokala fall har Lampson observerat fall där det skalade mätpunkts-
djupet
g har varierats mellan 0.5 ≤
g = r / W1/3 ≤ 4 ft/lb1/3 så har jordkon-
stanten för Texas-lera varierat mellan 10 000 ≤ k ≤ 150 000 lb/in2 där k ökar
med det skalade mätpunktsdjupet. Detta har uppstått vid situationer där yt-
ligt vatten har funnits tillgängligt så att fukthalt och våghastighet hos jorden
har varierat kraftigt ganska nära ytan.
I Lampson (1946) nämns också att det finns en korrelation mellan jordkon-
stanten k och propageringshastigheten hos den seismiska vågen, det vill säga
den elastiska våghastigheten v som uppstår vid låga vågamplituder. Följande
relation för jordkonstanten
2
2
1 v	k	

	=	
(9:22d)
verifierades med ytliga provskjutningar med väldigt små laddningar där det
visade sig att ekvation (9:22d) har en korrelation på ±25 % med de experi-
mentella resultaten, se bilaga I.
Lampsons ekvationer för impuls
Den positiva impulsen per areaenhet, även kallad impulstätheten av en
tryckvåg i jorden, är lika med rörelsemängden för en enhetssektion av vågen
och ges av integralen
dt	P	i
T
	= 0
0
(9:22e)
där 𝑇0 är den positiva varaktigheten. En del av de experimentella resultat
som ligger som grund för den empiriska ekvation för hur impulsen varierar
med skalat laddningsavstånd återfinns i bilaga H. Enligt Lampson (1946)
återges impulsen som funktion av avståndet av följande empiriska ekvation:
2	/	5	3	/	1	' 	−
=
		
FBW	E	i	
(9:22f)
där i är impulsen per areaenhet [lb-s/in2], E’ explosivfaktor för impuls, se
tabell 9:22d, F är kopplingsfaktor som beror på vilket laddningsdjup ladd-
ningen detonerar och återfinns i figur 9:22a för lerig silt. B är en karakter-

-- 121 of 311 --

Markstötvåg
2020-09-28 revidering 2 121
istisk jordkonstant för impuls, se tabell 9:22d och W är laddningsvikten i
[lb].
 = r / W1/3 är det skalade laddningsavståndet till studerad punkt r och
återges i [ft] och laddningsvikt W i [lb].
Att explosivfaktorn E’ inte är densamma för tryck och impuls härrör från att
impulsen påverkas mycket mer av hur gasprodukterna från explosionen
beter sig efter explosionen. Dessa gasers expansion fungerar som en kolv
som pressar omkringliggande jord under en längre tid, vilket direkt påverkar
hur länge det positiva trycket varar och därmed impulsen. Maxtrycket
däremot påverkas bara av sprängämnets intensitet under själva detonationen.
Tabell 9:22d. Explosivämnets faktor E’ för impuls, från Lampson (1946).
Explosivämne Explosivämnets faktor E’
TNT 1,00
Amatol 1,04
Composition B 0,97
Tritonal 1,27
Minol 2 1,38
HBX 2 1,50
Kopplingsfaktorn F som funktion av laddningsdjup är densamma för tryck
och impuls, vilket redovisas i figur 9:22a för lerig silt. På samma sätt som
för tryck kan den empiriska ekvationen (9:22f) för impulsen förenklas till
följande form när laddningsdjupet är dc =
cW1/3 = 2W1/3, vilket ger F = 1,
och sprängämnet TNT ger E’ = 1, då fås
2	/	5	3	/	1 −
=
		
BW	i	
. (9:22g)
I ekvation (9:22g) är det bara en godtycklig parameter, B, vilken associeras
med överförbarheten hos jorden. Jordkonstanten B i den här ekvationen har
en mycket mindre variation än jordkonstant k för tryck, jämför tabell 9:22e
med 9:22c. I Lampson (1946) visas det att konstanten B också kan associe-
ras till densitet och seismisk hastighet via
2	/1	2	/1
6	,	1	15	.	1 	k	v	B	

	
	=	=	
(9:22h)
Enligt Lampson (1946) har ekvation (9:22h) en korrelation på ±35 % med
de experimentella resultaten. Korrelationen är inte lika god som för jordkon-
stanten k.

-- 122 of 311 --

Markstötvåg
2020-09-28 revidering 2 122
Tabell 9:22e. Jordkonstant B som påverkar impulsen för några jordtyper och plat-
ser, Lampson (1946).
Jordtyp plats Bmedel
Olagrad lös lera eller
silt (eng. Loess)
Natchez,
Mississippi
1,60
Lerig silt Princeton,
New
Jersey
4,77
Siltig lera Camp
Gruber,
Oklahoma
5,44
Lera Houston,
Texas
6,64
Lampson (1946) nämner att det är uppenbart att inte noggrannare
korrelation kan fås eftersom konstanten B inte tar hänsyn till spännings-töj-
ningskurvan eller den faktiska initiella lutningen för det studerade jord-
materialet.
Lampsons ekvationer för partikelhastighet
Maximal partikelhastighet av en stötvåg är direkt relaterad till stötvågens
tryck med följande generella ekvation
)	(
1
0	


	
v
d
U 
P
p 	=	
(9:22i)
där Up är partikelhastigheten [in/sec],
 densitet [slug/in3],
 tryck [lb/in2],
P max trycket v(
) är hastigheten hos vågpropagering [ft/sec] som funktion
av trycket
. I bilaga G redovisas att sambandet för vågpropagering kan
skrivas som
n
a	v
−






=
0
)	(


	
(9:22j)
där a är en parameter som beror på jordegenskaper. Med n = 1/6 för pålast-
ning kan spänningstöjningskurvan för den studerade jorden som redovisas i
figur 9:2a återskapas. När ekvation (9:22j) sätts in i (9:22i) fås

	

d
a
U 
P
p 		= 0
6	/1
6	/	1
0
1
(9:22k)
vilket kan lösas ut till
6	/	7
6	/1
0	7
6 P
a
U p

=	
(9:22l)

-- 123 of 311 --

Markstötvåg
2020-09-28 revidering 2 123
Men maxtrycket kan beskrivas med ekvation (9:22c)3	−
=
		
k	P	 och på lik-
nande sätt kan den godtyckliga spänningen beskrivas som3
0	0
−
=
	
		
k	 vilket
insatt i ekvation (9:22l) ger
2	/	7
2	/	1
0
2	/1
0
6	/1
2	/	7	6	/	7
6	/	7	3
6	/1	3
0 	7
6
7
6
)	(
)	(	7
6 	−
−
−
−
− 	=	=	=
	



	



		
a
k
k	a
k
k
k	a
U p	
(9:22m)
Experimentellt visade Lampson (1946) att2
2
1 a	k	

	=	 . Detta kan uttryckas
som
k
a 2
=	 och insatt i ekvation (9:22m) ger
7	0	2	/	7
2	/1
2	/1
2	/1
2	/1
0	2	/	7
2	/1	2	/1
2	/1	2	/1
0
2	7
6
2	7
6
2	7
6 	−	−	− =

=

=
	








		
k	k
k
k
U p	
(9:22n)
där	0	
	 är det skalade laddningsavståndet som relaterar till det godtyckliga
trycket 𝜎0 och när detta till exempel är satt till 1 [lb/in2]. Så om verkliga
experiment studeras så är	17	0 
		 för 𝜎0=1 [lb/in2], se bilaga H, vilket
medför att ekvation (9:22n) kan skrivas som
7	2	/7
2	/1
2	/1
2	/	7
2	/1
2	/1
2	/1
2	/1
2	7
17	6 	−	−	− =	=


=
	





k
A
k
A
k
U p	
(9:22o)
med konstanten A, vilken kan beräknas till 𝐴 ≈ 2,5. De mätta partikelhastig-
heterna hos jorden kompliceras av flytdeformationen hos ytan, vilket moti-
verade Lampson (1946) att omformulera ekvation (9:22o) och använda olika
empiriska ekvationer för horisontell och vertikal partikelhastighet:
1	3
, 	25	,	8	7050 −	− +	=
	
		
h	p	U	
(9:22p)
1	3
, 	85	,	9	3200 −	− +	=
	
		
v	p	U	
(9:22q)
dar Up,h och Up,v är horisontell och vertikal partikelhastighet i [in/s].
Lampson (1946) anser att det är nödvändigt att teckna två ekvationer för
partikelhastigheten och använda medelvärdesresultatet av dem på grund av
att komponenterna skiljer sig i både fas och amplitud. I figur 9:22b redo-
visas hur medelvärdet för partikelhastigheterna varierar som funktion av
skalat laddningsavstånd. Figuren visar att teoretisk ekvation ger lägre
värden än både den horisontella och vertikala partikelhastighetsekvationen.

-- 124 of 311 --

Markstötvåg
2020-09-28 revidering 2 124
Figur 9:22b. Maximala partikelhastigheter vid ytan som funktion av skalat ladd-
ningsavstånd
, från Lampson (1946).
Ekvationerna (9:22p) och (9:22q) kan även skrivas i mer generella termer
eftersom även jordkonstanten k och densiteten
 bestämdes för provplatsen,
Camp Gruber Oklahoma, se tabell 9:22c. Densiteten var
 = 0,0019 slug/in3
och k = 5100 så k1/2 /
1/2 = 1640, vilket ger
)	005	,	0	3	,	4	( 1	3
2	/1
2	/1
,
−	− +	=
	
	

k
U h	p	
(9:22r)
)	006	,	0	95	,	1	( 1	3
2	/1
2	/	1
,
−	− +	=
	
	

k
U v	p	
(9:22s)
Lägger man dessutom till fördämningsfaktorn F och explosivämnets faktor
E blir den slutliga formen för maximal partikelhastighet
)	005	,	0	3	,	4	( 1	3
2	/1
2	/1
,
−	− +	=
	
	

k
FE	U h	p	
(9:22t)
)	006	,	0	95	,	1	( 1	3
2	/1
2	/1
,
−	− +	=
	
	

k
FE	U v	p	
(9:22u)

-- 125 of 311 --

Markstötvåg
2020-09-28 revidering 2 125
och teoretisk i radiell riktning
2	/	7
2	/	1
2	/	1
, 2,5 −
=
	

k
U r	p	
(9:22v)
Ekvationerna (9:22t) och (9:22v) är de ekvationer som Lampson (1946)
rekommenderar för partikelhastighet. Ekvationerna baserar sig inte på expe-
riment utan istället antas samma beteende som för beräkning av maxtrycket,
jämför med ekvation (9:22b). Detta förfarande kan även motiveras av att
partikelhastigheten är direkt relaterad till trycket. I figur H:g-H:i i bilaga H
redovisas experimentella resultat för partikelhastighet för olika laddnings-
storlekar som funktion av skalat laddningsavstånd i horisontal- och verti-
kalled. Experimenten är utförda i silitg lera, Camp Gruber, Oklahoma.
Lampsons ekvationer för acceleration
Accelerationen beskriver Lampson (1946) med följande empiriska ekvation
5	1	2	4
3	/1 	10	)	5	,	0	5	,	3	1400	( −	−	−	− 	+	+	=
	
	
	

W
k
FE	ag	
(9:22x)
där accelerationen ag är i enheten [g], och en g är lika med 32.2 [ft/s2] och W
är explosivämnets vikt [lb]. Enligt Lampson (1946) så har experiment visat
att acceleration varierar på samma sätt som uppmätt tryck för varierande
laddningsdjup, vilket motiverar faktorn F i ekvation (9:22x). Med resone-
mang utan att direkt kunna visas från experiment antas accelerationen vari-
era på samma sätt som för tryck med avseende på explosivämne, vilket i sin
tur motiverar faktorn E i ekvation (9:22x).
En teoretisk härledning av accelerationen kan göras om tryckgradienten
kring regionen runt laddningen studeras. Följande uttryck beskriver stöt-
vågskraften på en finit del med densiteten
 och tjockleken dr, då
r
a d
d	1	


−	=	
(9:22y)
där
 är spänningen. Antag att tryckvågen vid explosivämnet startar som en
enhetsfunktion med amplituden
 och på grund av att hastighetspropage-
ringen är en funktion av
, så fås
t	v	r )	(

	=	
(9:22z)
för distansen r en trycknivå
 som kommer att propagera inom tiden t. Ur
detta fås

-- 126 of 311 --

Markstötvåg
2020-09-28 revidering 2 126
v	t	r
v
t
r
d
d	1
d
d
d
d
d
d	

	

	
=		=	
(9:22aa)
men t=r/v, antaget att v är konstant vilket då ger
v	r
v
r d
d
d
d	

	
=	
(9:22ab)
tillsammans med ekvation (9:22y)ger detta att accelerationen kan uttryckas
som
v	r
v
a d
d


−	=	
(9:22ac)
Men enligt Lampson (1946) kunde följande relation för hastighet och
spänning fastslås experimentellt
6/1	6/1
0	0	)	( −
=
	
	
		
a	v	
(9:22ad)
vilket ger
6/7	6/1
0	0
6
1
d
d −
−	=
	
	

a
v
(9:22ae)
Insättning 𝑎0 från ekvation (9:22ad) i ekvation (9:22ae) ger
v	v
v	v	

	

	
6
d
d
6
1
d
d −	=		−	=	
(9:22af)
När ekvation (9:22af) sätts in i ekvation (9:22ac) kan accelerationen beskri-
vas med
r
a

	
6
=	
(9:22ag)
Baserat på denna ekvation blir accelerationen maximal när spänningen är
maximal. Antaget att den experimentellt framtagna tryckvågsavlastningen
håller för denna situation, så är
 = k
-3 och r = W1/3
, vilket ger
4
3	/1
6 −
=
	

W
k
a	
(9:22ah)
För att skriva till termen gravitation 𝑎𝑔, där ag accelerationen är i enheten
[g] vilket är lika med 32.2 [ft/s2], så behöver enhetsomvandling från 1 [in/s2]
till 0,0025901 [g] göras. Detta ger värdet 6 ∙ 0,0025901 = 15,5∙10-3 vilket
ger följande ekvation

-- 127 of 311 --

Markstötvåg
2020-09-28 revidering 2 127
4
3	/	1
3
10	5	,	15 	−
−

=
	

W
k
ag	
(9:22ai)
Det teoretiska uttrycket för acceleration, ekvation (9:22ai), är det som jäm-
förs med experimentella resultat, ekvation (9:22x). På korta avstånd är det
bara första termen av polynomet i ekvation (9:22x) som behöver tas hänsyn
till när de experimentella värden mätta nära ytan jämförs med det teoretiska
uttrycket. Då fås följande förhållandekvot 𝑎𝑔,𝑒𝑥𝑝/𝑎𝑔,𝑡𝑒𝑜𝑟𝑖=1.3. Detta
överensstämmer med en magnituds storhet, vilket är ett bra betyg för den
förenklade analys som Lampson (1946) utförde.
I figur 9:22c jämförs empiriska ekvationer såsom ekvation (9:22ai) och
ekvation (9:22x). Figuren visar att båda kurvorna sammanfaller väl för
 = r/W1/3 ≤ 6 [ft/lb1/3]. Enligt Lampson (1946) så fann han att acceleration-
erna i horisonal- och vertikalled huvudsakligen är desamma och därför
representeras av en kurva i figur 9:22c. Experimentella resultat från accele-
rationsmätningar redovisas i bilaga H.
Figur 9:22c. Maximala dimensionslösa accelerationer,1	5	3/1 10 −
	 k	a	W g	
	 , vid
ytan som funktion av skalat laddningsavstånd	
, från
Lampson (1946).

-- 128 of 311 --

Markstötvåg
2020-09-28 revidering 2 128
Lampsons ekvationer för förskjutningen
Förskjutningen av partiklar i jorden som funktion av avståndet kan härledas
genom att integrera töjningen
 i varje sfäriskt skal där vågen expanderar vid
tidpunkten för maximal förskjutning. Lampson (1946) antar att om varak-
tigheten hos stötvågen är lång och att avtagandet är snabbt så kan maximal
deformation antas uppnås just innan någon betydande negativ hastighet
uppnås. Detta fås genom
r	d 
r
d	

=
		
(9:22aj)
där d är maximal förskjutning och r är avståndet från laddningen. Om
Lampson (1946) använder sig av kunskapen kring tryckavståndskurvor och
experimentella spännings-töjningskurvor, se bilaga G, så kan följande ut-
tryck tas fram för förskjutningen d
3	0
3	/	1 8 
−
=
	
C
W
d
(9:22ak)
där C0 är en dimensionslös konstant numeriskt lika med k1/3,
 = r / W1/3 är
det skalade laddningsavståndet och W laddningen i [lb]. Experimentella
värden härledda från integration av partikelhastighetsekvationerna (9:22r)
och (9:22s) ger följande horisontella och vertikala förskjutning
)	0018	,	0	94	,	3	( 1	3	3/1 −	− +	=
	
		
W	dh	
(9:22al)
)	0027	,	0	05	,	1	( 1	3	3/1 −	− +	=
	
		
W	dv	
(9:22am)
Förskjutningarna dh och dv är båda i enheten [ft]. Av termerna i ekvationen
kan noteras att horisontell rörelse är dominerande speciellt nära laddningen.
Nära laddningen så kan maximal rörelse i radiell riktning enligt
Lampson (1946) antas vara
3	3/1
4 −

		
W	dr	
(9:22an)
Används istället den härledda ekvationen (9:22ak) samt jordkonstanten
k = 5100 för den siltiga lera i enlighet med experimenten utförda i
Oklahoma, se tabell (9:22c), så fås
3	3/1
5100	, 15	,	2 −
= 
		
W	d k	r	
(9:22ao)
vilket ger en kvot på 1,86 mellan ekvation (9:22an) och (9:22ao). Detta
indikerar att Lampson (1946) teoretiska beskrivning i ekvation (9:22ak) inte
är så långt från sanningen, som Lampson (1946) själv uttrycker det. Något
som Lampson (1946) kommenterar är att man på korta avstånd inte nödvän-

-- 129 of 311 --

Markstötvåg
2020-09-28 revidering 2 129
digtvis mäter maximal förskjutning i vertikal och horisontal riktning samti-
digt på grund av att de inte nödvändigtvis är i fas, men på större avstånd är
de någorlunda i fas. I figur 9:22d redovisas de empiriska ekvationernas för-
skjutning om beroendet k1/3 accepteras för förskjutningen. Figuren visar att
den teoretiska radiella deformationen ligger mellan både vertikal
deformation, som är lägst, och horisontell deformation. I bilaga H redovisas
utvalda experimentella resultat för deformation.
Figur 9:22d. Maximala deformationer i marken,3/1	3/1 k	dW	 , som funktion av
skalat laddningsavstånd
, från Lampson (1946).
Lampsons ekvationer för kraterbildning
Fysiken bakom kraterbildning från detonerade nergrävda laddningar var vid
tiden då Lampson skrev sina rapporter inte helt klarlagd och därför nöjde
han sig med att beskriva det empiriska sambandet för kraterradie som
3	/1
W	S	E	D	R c	c	c	c =	
(9:22ap)
där Dc är laddningsdjupsberoende för kraterbildning. Dc är en funktion av
skalat laddningsdjup och är en väldigt viktig parameter för att kunna
bestämma radien. Maximal radie fås vid ett visst djup, 2W1/3, därefter sjun-

-- 130 of 311 --

Markstötvåg
2020-09-28 revidering 2 130
ker kraterns radie igen, se figur 9:22e. Detta djup har uppmärksammats tidi-
gare, se till exempel kopplingsfaktor för tryck och impuls tidigare i detta
kapitel. Detta motsvarar djupet när kopplingsfaktorn är lika med 1, det vill
säga att all omvandlad energi maximalt genererar tryck och impuls i om-
kringliggande jord. Faktorn Ec är explosivämnesfaktorn för kraterstudier, se
tabell 9:22f. I tabellen syns det att Ec inte varierar så stort från värdet 1 oav-
sett typ av laddning. Jordfaktorn Sc varierar väldigt lite för de experimen-
tella data som Lampson (1946) har och är proportionella till jordkonstanten
upphöjd till 1/12:
12	/1
3	,	1 k	Sc =	
(9:22aq)
Jordfaktorn blir Sc = 2,6 jord med k = 4000 vilket är fallet för siltig lera, se
tabell 9:22c.
Figur 9:22e. Laddningsdjupfaktorn Dc [-] som funktion av skalat laddningsdjup
c, från Lampson (1946).
Tabell 9:22f. Explosivämnets faktor Ec för krater, från Lampson (1946).
Explosivämne Explosivämnets faktor
Ec=CRx/CRTNT
TNT 1,00
Amatol 0,98
Composition B 1,02
Tritonal 1,11
Minol 2 1,14
HBX 2 1,15
Lampsons diskussion kring korrelation mellan mätbara effekter
Korrelation mellan mätbara markstötvågseffekter (tryck, impuls, och accele-
ration) och mätt seismisk hastighet enligt ytlig geoteknisk skjutning var för
den av Lampson (1946) studerade korrelationen inte självklar. I
Lampson (1946) används dimensionsanalys av de studerade jordtyperna. Av
detta framgår att jordkonstanten k, som används bland annat för att
bestämma tryck, borde vara proportionell mot
v2. På liknande sätt borde
impulskonstanten B vara proportionell mot	
v. Slutligen borde

-- 131 of 311 --

Markstötvåg
2020-09-28 revidering 2 131
accelerationskonstanten C vara proportionell mot v2. För att testa detta defi-
nierade Lampson (1946) upp tre dimensionslösa kvantiteter
k
v
fdl
2

=	
(9:22ar)
v
B
jdl

=	
(9:22as)
2
v
C
qdl =	
(9:22at)
Medelvärdet för dessa dimensionslösa parametrar ges i tabell 9:22g. Medel-
värdet hos de dimensionslösa parametrarna för de jordar som
Lampson (1946) studerade är de dimensionslösa kvantiteter fdl = 1,92,
jdl = 1,14, och qdl = 0,019 vilket gör att ekvationerna (9:22ar)-(9:22at) kan,
om kvantiteterna avrundas grovt, skrivas som
2
2
1 v	k	

	=	
(9:22au)
v	B	
	
15	,	1	=	
(9:22av)
50
2
v
C =	
(9:22ax)
Konstanter i ekvationerna (9:22au)-(9:22ax) är applicerbara på följande
ekvationer: ekvation (9:22b) för tryck, ekvation (9:22f) för impuls, och slut-
ligen en omskrivning av ekvation (9:22ah) för acceleration:
4
3	/1
−
=
	
W
C
ag	
(9:22az)
Enligt Lampson (1946) ligger noggrannheten på ungefär ±50 % vilket är ett
rätt bra värde med tanke på hur mycket egenskaperna hos jorden kan variera
från dag till dag och olika platser med avseende på jordens inneboende
komposition av vatteninnehåll, kompaktering, och aggregat.

-- 132 of 311 --

Markstötvåg
2020-09-28 revidering 2 132
Tabell 9:22g. Korrelation mellan jordkonstanter och seismisk hastighet,
Lampson (1946).
Jordtyp Plats Den-
sitet

Hastig_
het
v
Jord-
konst.
K
Impuls-
konst.
B
Acc.
konst.
C
fdl jdl jdl
Olagrad
lös lera
eller silt
(eng.
Loess)
Natchez,
Miss-
issippi
1,61e-3 1095 0,08e4 1,60 3,34e4 2,415 0,909 0,0278
Lerig
silt
Princeton,
New
Jersey
1,9e-3 1500 0,18e4 4,77 - 2,375 1,67 -
Siltig
lera
Camp
Gruber,
Oklahoma
1,9e-3 1990 0,51e4 5,44 5,50e4 1,47 1,44 0,0139
Lera Houston
Texas
2,24e-3 5610 5,00e4 6,64 4,855e5 1,41 0,529 0,0154
Medel-
värde
1,92 1,14 0,019
9:23 Lampsons empiriska ekvationer för skador
på nedgrävda byggnadskonstruktioner
Ur en skyddsteknisk synvinkel är det primärt att veta hur mycket en ner-
grävd byggnadskonstruktion skadas av en markstötvåg och sekundärt hur
vågen har propagerat genom mediet. Men för att kunna ge ett tillförlitligt
svar på vilken verkan en sprängladdning av en viss typ och massa samt
laddningsdjup har på den nergrävda konstruktionen behövs vetskap om hur
energin frigörs och fortplantas i jorden. På så sätt kan magnitud och varak-
tighet hos trycklasten bestämmas när den väl reflekterar mot strukturen.
Nästa del är att kunna uppskatta vilken effekt lasten har på den studerade
strukturen, det vill säga kunna estimera strukturens motståndsförmåga mot
den transienta lasten.
Lampson (1946) tog empiriskt fram att skadan för en betongbyggnad kan
bestämmas med hjälp av följande ekvation för sprickbredd Cbredd
)	7,0	5,4	(
3	/	1
1 	−
=
	
styrka
bredd
S	W
C
(9:23a)
där W1/3 är kubikroten ur laddningsvikten, k är jordkonstanten,
 är skalat
laddningsavstånd, och slutligen Sstyrka är byggnadens estimerade styrkefak-
tor.
Enligt Lampson (1946) så är variationen av militära skyddskonstruktioner så
stor att det inte går att hitta en typisk konstruktion. Detta medförde att
Lampson (1946) beslutade att studera ett mål, del av en konstruktion, som
kunde approximera, i sin skyddsverkan, ett strukturellt element istället för
en komplett struktur. Efter omfattande provning valdes en armerad betong-
låda med öppet tak och golv såsom visas i figur 9:23a. Fram- och bak-
väggen gavs olika väggtjocklekar medan sidoväggarna gavs en annan
tjocklek, men sidoväggarnas tjocklek varierades inte inom varje kub. Dessa
kuber gjordes i fem storlekar, alla liknande varandra men alla dimensioner

-- 133 of 311 --

Markstötvåg
2020-09-28 revidering 2 133
skalades till varandra med kvoterna 0,2, 0,4, 0,6, 0,8 och 1,0. Kvoten 1,0
sågs som fullskaligt mål och ämnat för en laddning med massan 1000 lb,
vilket motsvara cirka 454 kg. Syftet med de olika storlekarna var att studera
skalningseffekter med avseende på skada hos konstruktionen och därmed
förhoppningsvis kunna dra slutsatser om skalmodeller kan användas.
Figur 9:23a. Isometrisk skiss av den studerade konstruktion från
Lampson (1946).
I experimenten estimerades Sstyrka till 150 [lb/in2] hos de kraftigt armerade
kuberna. I tabell 9:23a redovisas skadekriterier för kraftigt armerade
betongväggar med 5 fots väggtjocklek och 1000 lbs TNT laddning.
Tabell 9:23a. Sprickbredd hos vägg närmast laddning, från Lampson(1946).
Skadenivå Sprickbredd för 5 fots
armerad betongvägg
Cbredd [in]
Normaliserad sprickbredd
med avseende på vägg-
tjocklek för armerad
betongvägg
Cbredd /(5ft·12) [in/in]
Allvarlig 5 0,083
Medel 1 0,017
Lätt 1/8 0,002
Om skadenivåer som antagits i tabell 9:23 tillämpas i figur 9:23b med jord-
konstanten k = 5100 och Sstyrka = 150 så fås allvarlig skada vid
 = 2,1 och
medelskada vid
 = 3,36, och slutligen lätt skada vid
 = 5,00 [ft/lb1/3].

-- 134 of 311 --

Markstötvåg
2020-09-28 revidering 2 134
Figur 9:23b. Sprickbredd hos samtliga av betongkubens sidor med ekvivalent
’
som är omräknat för samma trycknivå som kortaste väg
. Från
Lampson (1946).
9:3 Stötvåg utan reflexioner enligt Drake
James Drake tog fram empiriska ekvationer för estimering av markstötvåg
som länge har varit en grundstomme. Hans arbete baserar sig på tidigare
arbete och erkänner Lampson som pionjär för estimering av markstötvågor
och hur kubikrotsskalningsregler kan appliceras på markstötvågor. Drake
har två versioner av empiriska modeller för hur markstötvåg kan beräknas.
Drake och Little (1983) är den första versionen och benämns här Drakes
modell från 1983, vilken beskrivs i avsnitt 9:31. Den andra versionen som

-- 135 of 311 --

Markstötvåg
2020-09-28 revidering 2 135
återfinns i Drake, Smith och Blouin (1989) och benämns Drakes modell från
1989, vilken återges i avsnitt 9:32.
En stötvåg utan reflexioner kan förenklat beskrivas med en belastningskurva
enligt figur 9:3a. Den horisontella axeln visar tiden och hur ankomsttiden
𝑡𝑎, tiden för maxvärde 𝑡𝑝, tiden för positiva fasen 𝑡𝑑, restiden 𝑡𝑟 och slutli-
gen den positiva varaktigheten 𝑡+ definieras. Den vertikala axeln visar parti-
kelhastigheten och där maximal partikelhastighet 𝑈𝑝0 är definierad.
Figur 9:3a. Partikelhastighet som funktion av tid för en oreflekterad markstöt-
våg.
9:31 Drakes modell från 1983
Drakes modell från 1983 och dess empiriska ekvationer hjälper till att ta
fram markstötvågsparametrar såsom partikelhastighet, tryck, impulstäthet,
förskjutning och acceleration. Till stora delar är det Drakes modell från
1983 som används av det militära beräkningsprogrammet ConWep (1992)
för att beräkna konventionella vapenlaster i markstötvåg. Drakes modell
från 1983 beskrivs också delvis i Bulson (1997), där den dock är något kort-
fattat beskriven. Figur 9:3a visar partikelhastigheten hos marken vid en fix
punkt. Ankomsttiden, ta kan approximeras till
c
r
ta =	
(9:31a)
där r är avståndet från explosionens centrum till studerad punkt och c är den
seismiska våghastigheten eller aktuell stötvåghastighet.
Stigtiden tr hos stötvågen kan approximeras som
ta
tr
tp 	td
t+
UP0

-- 136 of 311 --

Markstötvåg
2020-09-28 revidering 2 136
a	r t	t 	= 1	,	0	
(9:31b)
det vill säga en tiondel av ankomsttiden. Slutligen betecknar tiden td den
positiva fasens sluttid.
Den propagerande stötvågens maximala partikelhastighet vid en punkt i jor-
den influeras av avståndet till laddningens centrum r, ekvivalent laddnings-
vikt i TNT W, jordens egenskaper, samt laddningens skalade begravnings-
djup D, vilket ger en kopplingsfaktor f. De ursprungliga ekvationerna är
skrivna för amerikanska enheter, längd i [ft] och vikt i [lb]
n
p W
r
f	u
−






		= 3/1	0 160	
(9:31c)
För att skriva om ekvation (9:31c) i SI-enheter behöver följande enhetsom-
vandlingar göras på kubikrotskalningsregeln som används för skalade av-
stånd
n
n
n	n	n
W
r
W
r
W
r
−
−
−	−	−






=












=







 





3/1
3/1	3/1
units	SI
3/1
2,520811
0,453592)	/	1	(
3048	,	0	/	1
(9:31d)
Därefter måste parametern
 		
48,768	3048	,	0	160unit	SI	0 =		=	p	u	
(9:31e)
Nu kan (9:31e) och (9:31d) sättas in i (9:31c) för att få maximalpartikelhas-
tighet i [m/s]
n
p W
r
f	u
−






		= 3/1	0 2,520811	768	,	48	
(9:31f)
där ekvivalent laddningsvikt W ges i [kg] och laddningsavstånd r i [m], n är
jordmaterialets dämpningskoefficient och f kopplingsfaktorn som beror på
det skalade laddningsdjupet D [m/kg1/3]. Innan vidare fördjupning sker i
Drakes empiriska ekvationer behöver följande punkter förtydligas:
• r är avståndet mellan studerad punkt och laddningens centrum.
• Med ekvivalent laddningsvikt W menas att olika sprängämnen räk-
nas om till ekvivalent laddningsvikt i komposition C-4. Alla formler
i ConWep (1992) och Drake (1983) baserar sig nämligen på kompo-
sition C-4. Detta är viktigt för att olika sprängämnen med samma
massa resulterar i olika maxtryck och impuls. I bilaga B återfinns en

-- 137 of 311 --

Markstötvåg
2020-09-28 revidering 2 137
tabell med ekvivalent laddningsvikt. Om sprängämnet TNT ska stu-
deras med avseende på tryck ska TNT:s laddningsvikt divideras med
1,37, dvs. Wp,C-4 = WTNT / 1,37. Om däremot impulsen ska studeras
ska laddningsvikten för TNT divideras med 1,19, dvs.
Wp,C-4 = WTNT / 1,19.
• Jordmaterialets dämpningskoefficient n beskriver jordmaterialet och
dess dämpning av markstötvågen. Värdet på n bestäms med hjälp av
vetskap om jordmaterialets seismiska hastighet c. I tabell 9:31a åter-
ges värden för n. Tabellen visar att hos friktionsjordar (omfattar de
grovkorniga jordarterna såsom sand och grus) påverkas dämpnings-
koefficienten huvudsakligen av hur tätt packade kornen är, det vill
säga av densiteten. För kohesionsjordar (omfattar de finkorniga jord-
arterna såsom lera) är det mängden luftporer som påverkar dämp-
ningskoefficienten.
• f är den så kallade fördämningsfaktorn som beskriver hur stor andel
av laddningens energi förs ner i marken. I Drake (1983) beskrivs
fördämningsfaktorn på följande sätt:
( 	)
( 	)
fördämd
nära ytan
,	,	,	,
,	,	,	,
)	( a	i	d	u	P
a	i	d	u	P
D	f
p	p
p	p
=	
(9:31g)
där täljaren är magnitud av stötvågstillstånd, på skalade laddnings-
avståndet R, hos ytligt nergrävda laddningar med skalade laddsnings-
djupet D och nämnaren är magnitud av stötvågstillstånd hos fullt ner-
grävda laddningar när explosion sker i samma typ av jord. Hur ytligt
en laddning är placerad bestäms av det skalade laddningsdjupet
D = d / W1/3. Den effektiva fördämningsfaktorn kan räknas som






= 
= W
W
f	f i
n
i
i
1
(9:31h)
där varje laddningsviktsdel Wi i olika material har en egen fördäm-
ningsfaktor fi som viktas mot total laddningsvikt och därefter summe-
ras ihop för alla material, såsom jord och luft, som delar av ladd-
ningen befinner sig i vid tidpunkten för detonation, se figur 9:31a.
Om cylindriska laddningar studeras kan laddningsviktsdelar bytas ut
mot längdelar Li






= = L
L
f	f i
n
i
i
1
(9:31i)
Vid det skalade laddningsdjupet 0 är fördämningsfaktorn f = 0,4 och
vid det skalade laddningsdjupet 0,55 är f = 1,0, vilket motsvarar fullt
nedgrävd laddning, se även figur 9:31b. Explosion ovan mark räknas
som fördämningsfaktor f = 0,14. En djupare simuleringsstudie av för-

-- 138 of 311 --

Markstötvåg
2020-09-28 revidering 2 138
dämningsfaktorns giltighet enligt ekvation (9:31g) gjordes i konfe-
rensartikeln Laine och Larsen (2007), vilken återfinns som bilaga X.
Figur 9:31a. Den totala fördämningsfaktorn f för en laddning kan sammanställas
av flera fördämningsfaktorer fi hos laddningens olika delar som be-
finner sig i olika materia vid tidpunkten för detonation.
Tabell 9:31a. Jordmaterialkoefficienter för olika jordtyper, från TM 5-855-1
ConWep (1992).
Jordtyp Densitet
[kg/m3]
Seismisk
hastighet c
[m/s]
Akustisk
impedans
[kPa/m/s]
Dämpnings-
koeff. n
[-]
lös, torr sand
med låg relativ
densitet
1490 183 271 3,1
torr sand,
och återfyllning
1630 305 498 2,75
tät sand,
med hög relativ
densitet
2030 488 995 2,5
våt sandig lera
med > 4 % luft-
porer
1990 549 1086 2,5
vattenmättad san-
dig lera med,
< 1 % luftporer
1920 1524 2941 2,4
fullt vatten-
mättad lera
2030 1829 3732 1,5
i	d
luft
jord
i	W
i	L

-- 139 of 311 --

Markstötvåg
2020-09-28 revidering 2 139
Figur 9:31b. Fördämningsfaktorn, f, som funktion av skalat laddningsdjup. Om
laddningen detonerar i luft är f = 0,14. Värden från Bulson (1997).
Maximal partikelhastighet enligt Drake (1983)
I figur 9:31c redovisas maximal partikelhastighet enligt ekvation (9:31f) för
de olika jordtyperna som beskrivs i tabell 9:31a. Här ses att alla partikelhas-
tigheter sammanstrålar för skalade laddningsavstånd som är kortare än
0,4 m/kg1/3. Enligt Drake (1983) beror detta på att närmare laddningsavstånd
är det fortfarande detonationsvågen som är dominerande och sätter nivån på
partikelhastigheten i närliggande materia. Partikelhastigheten klingar av
långsammast för fullt vattenmättad lera. Detta kan också tolkas som att
ekvationernas giltighet nära detonationscentrum är liten. Med stor sannolik-
het bör inte skalade laddningsavstånd kortare än 0,4 m/kg1/3 användas för
dessa ekvationer, vilket är tolkningen författaren av denna rapport gör när
resultatet i figur 9:31c tolkas.
y = -100.23x6 + 207.37x5 - 167.52x4 + 67.86x3 - 16.011x2 + 3.3003x + 0.4033
R2 = 0.9997
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
-0.1 	-0.05 	0 	0.05 	0.1 	0.15 	0.2 	0.25 	0.3 	0.35 	0.4 	0.45 	0.5 	0.55 	0.6
Skalat laddningsdjup D =d/W 1/3 [m/kg1/3]
Fördämningsfaktor
 
f [-] .
Bulson97
detonation i luft
Poly. (Bulson97)

-- 140 of 311 --

Markstötvåg
2020-09-28 revidering 2 140
Figur 9:31c. Partikelhastighet Up som funktion av skalat laddningsavstånd för
för en oreflekterad markstötvåg med f = 1,0. Jordmaterialen åter-
finns i tabell 9:31a.
Maximalt tryck enligt Drake (1983)
Maximalt tryck kan direkt härledas från jordmaterialets seismiska hastighet
och densitet multiplicerat med partikelhastighet
0	0 p	u	c	P 		=
	
(9:31j)
där densiteter
 och seismisk hastighet c återfinns i tabell 9.31a för olika
jordmaterial. Om även max partikelhastighet, ekvation (9:31f), inkluderas i
ekvationen fåsn
W
r
c	f	P
−






			= 3/1	0 2,520811	768	,	48	
	
(9:31k)
Om nu maxtryck P0 beskrivs som en funktion av skalat laddningsavstånd för
de olika jordmaterialen som återfinns i tabell 9:31a, fås figur 9:31d. Här kan
man tydligt se hur maxtrycket klingar av långsammast för fullt vattenmättad
lera.
0.000001
0.00001
0.0001
0.001
0.01
0.1
1
10
100
1000
0.1 	1 	10 	100
Max partikelhastighet
 
Up 	[m/s]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
lös sand
torr sand
tät sand
våt sandig lera
vattenm. sandig lera
fullt vattenm. lera

-- 141 of 311 --

Markstötvåg
2020-09-28 revidering 2 141
Figur 9:31d. Maximalt tryck P0 som funktion av skalat laddningsavstånd för en
oreflekterad markstötvåg med f = 1,0. Jordmaterialen återfinns i ta-
bell 9:31a.
Maximal impulstäthet enligt Drake (1983)
När det gäller impulsekvationen i amerikanska enheter är den beskriven på
följande sätt i Drake (1983)
1
3/1	0	3/1
0 1	,	1
+	−






	=
n
W
r
W
I
	
(9:31l)
där
0 är densitet i [lb-sec/ft4] = [slugs/ft3], inte densitet
 i [lb/ft]3 som
Drake (1983) använder för att räkna ut maxtryck P0. Detta är väldigt förvir-
rande för en läsare som är van vid SI-enheter. I artikeln har index 0 ej kom-
mit med i ekvationen vilket gjorde det till ett svårupptäckt fel, det vill säga
varför det inte blev rätt att använda
 [lb/ft3] som densitetsenhet, vilket
också är enheten hos densitet som ges i tabeller för olika jordar i artikeln. I
ConWep:s (1992) manual TM5-855-1 bekräftas att det faktiskt är två olika
densiteter för tryck och impuls. Därför behövs än mer noggrannhet att
skriva om ekvation (9:31l) till SI-enheter, då även omvandling av densiteten
till [kg/m3] måste göras på följande sätt
1
1/3
0 1/3	
9,870892 2,5208
515,3179
n
r
I W W

− +	
      	=     	 	   	 
(9:31m)
där W är laddningsvikt i [kg],
 är densitet [kg/m3], och r avståndet i [m]
mellan laddning och mätpunkt och n är dämpningsfaktorn för jordmateri-
alet.
0.0001
0.001
0.01
0.1
1
10
100
1000
10000
100000
1000000
0.1 	1 	10 	100
Max tryck
 
P0 	[kPa]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
lös sand
torr sand
tät sand
våt sandig lera
vattenm. sandig lera
fullt vattenm. lera

-- 142 of 311 --

Markstötvåg
2020-09-28 revidering 2 142
Såsom ses av ekvation (9:31m) är impulsen beroende av det skalade ladd-
ningsvikten W1/3, vilket betyder att impulsen ökar för större laddning på
samma skalade laddningsavstånd. I figur 9:31e illustreras detta för lös sand,
tre blåa linjer, och fullt vattenmättad lera, tre röda linjer. Vad man kan se är
att maximpuls har samma tendens som maxtryck, det vill säga flackare lut-
ning för fullt vattenmättad lera jämfört med lös sand, jämför med figur
9:31c. Däremot går kurvan att parallellförflytta vertikalt med avseende på
vilken laddningsvikt som faktiskt detonerade vid det skalade laddningsav-
ståndet. I figur 9:31e illustreras detta av att tre olika laddningsvikter, 1, 10,
och 100 kg C4, används för de två olika jordmaterialen.
Figur 9:31e. Maximal impuls I0 som funktion av skalat laddningsavstånd för en
oreflekterad markstötvåg med f = 1,0 och för laddningsvikt 1, 10,
och 100 kg C4. Jordmaterialen återfinns i tabell 9:31a.
Maximal acceleration enligt Drake (1983)
Maximal accelerationen kan enligt Drake (1983) beräknas med följande
ekvation i amerikanska enheter
1
3/1
3/1
0 50
−	−






	=	
n
W
r
c	f	W	a	
(9:31n)
Där a0 är maximal acceleration i [g], c seismisk hastighet hos jorden i [ft/s],
r är studerat laddningsavstånd i [ft], och W är laddningsvikt i [lb1/3]. För att
få ekvation (9:31) i SI-enheter behöver den skrivas om på följande sätt
1
3/1	3/1	0 5208	,	2
3048	,	0	3015	,	1
81	.	9
50
−	−





	

=
n
W
r
W
c	f
a	
(9:31o)
0.0001
0.001
0.01
0.1
1
10
100
1000
0.1 	1 	10
Impuls
 
I0 [kPa
-s]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
fullt vattenm. lera 100 kg C4
fullt vattenm. lera 10 kg C4
fullt vattenm. lera 1 kg C4
lös sand 1 kg C4
lös sand 10 kg C4
lös sand 100 kg C4

-- 143 of 311 --

Markstötvåg
2020-09-28 revidering 2 143
vilket kan skrivas om som1
3/1	3/1	0 520811	,	2	4578	,	1236
−	−





	
=
n
W
r
W
c	f
a	
(9:31o)
där a0 är maximal acceleration i [m/s2], c seismisk hastighet hos jorden i
[m/s], R är studerat laddningsavstånd i [m], och W är laddningsvikt i [kg1/3].
Såsom ses i ekvation (9:31o) så sjunker alltså maximal acceleration när
laddningsvikten ökar för samma skalade laddningsavstånd. I figur 9:31f
visas detta för torr sand och våt vattenmättad lera.
Figur 9:31f. Maximal acceleration a0 som funktion av skalat laddningsavstånd
för en oreflekterad markstötvåg med f = 1.0 och för laddningsvikt 1,
10, och 100 kg C4. Jordmaterialen återfinns i tabell 9:31a.
Maximal förskjutning enligt Drake (1983)
Sista ekvationen som ges i Drake (1983) är den maximala förskjutningen
och i amerikanska enheter är ekvationen följande
1
3/1	3/1
0 1
500
+	−






	=
n
W
r
c
f
W
d
(9:31p)
där d0 är maximal förskjutning i [ft], ], c seismisk hastighet hos jorden i
[ft/s], R är studerat laddningsavstånd i [ft], och W är laddningsvikt i [lb1/3].
Omskrivning till SI-enheter ger följande
1
3/1
3/1	2
0
1
3048	,	0	301502	,	1	500
+	−






				=
n
W
r
c
W	f	d	
(9:31q)
0.01
0.1
1
10
100
1000
10000
100000
1000000
10000000
100000000
0.1 	1 	10
Acceleration
 
a0 [m/s
2]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
fullt vattenm. lera 100 kg C4
fullt vattenm. lera 10 kg C4
fullt vattenm. lera 1 kg C4
lös sand 1 kg C4
lös sand 10 kg C4
lös sand 100 kg C4

-- 144 of 311 --

Markstötvåg
2020-09-28 revidering 2 144
Ekvation (9:31q) förenklas till
1
1/3
0 1/3
1 2,5208
60, 4567
n
r
d f W c W
− +	
 
 	=     	 
 
(9:31r)
där d0 är maximal förskjutning i [m], c seismisk hastighet hos jorden i [m/s],
R är studerat laddningsavstånd i [m], och W är laddningsvikt i [kg1/3]. I fi-
gur 9:31g redovisas maximal förskjutning för lös sand och fullt vattenmät-
tad lera som funktion av skalat laddningsavstånd. Intressant att notera är att
partikelförskjutningen är högre hos sanden vid låga skalade laddningsav-
stånd, R < 1 [m/kg1/3]. Dessutom sjunker maximal förskjutning långsam-
mare hos vattemättad lera än hos sand, vilket följer tidigare tendenser för
maximal acceleration och impuls.
Figur 9:31g. Maximal förskjutning d0 som funktion av skalat laddningsavstånd
för en oreflekterad markstötvåg med f = 1.0 och för laddningsvikt 1,
10, och 100 kg C4. Jordmaterialen återfinns i tabell 9:31a.
Tryck och partikelhastighet som funktion av tid enligt
Drake (1983)
När det gäller beskrivningen av tryck och partikelhastighet som funktion av
tid använder Drake (1983) följande ekvationer
at	t
e	P	t	P /
0	)	(

	−
	=	
och (9:31s)
at	t
a	p	p 	e	t	t	U	t	U /
0 	)	/	1	(	)	(


−
	−		=	
(9:31t)
där tiden t ≥ ta + tr, P0 maximalt tryck kan beräknas ur ekvation (9:31j) och
maximal partikelhastighet Up0 beräknas med ekvation (9:31f). Tidskonstan-
0.0001
0.001
0.01
0.1
1
10
0.1 	1 	10
Förskjutning
 
d0 [m]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
fullt vattenm. lera 100 kg C4
fullt vattenm. lera 10 kg C4
fullt vattenm. lera 1 kg C4
lös sand 100 kg C4
lös sand 10 kg C4
lös sand 1 kg C4

-- 145 of 311 --

Markstötvåg
2020-09-28 revidering 2 145
terna
 och
 varierar enligt Drake (1983) med hur den aktuella platsen är.
Drake (1983) rekommenderar att konstanterna ges följande värden
0	,	1	=
		
och	5	,	2	/	1	=
		 (9:31t)
Intressant att notera är att ConWep (1992) dock rekommenderar följande
värden
0	,	1	=
		
och	5	,	8	/	1	=
		 (9:31u)
det vill säga en skillnad på faktorn β.
I figur 9:31h redovisas hur markstötvågens oreflekterade tryck som funktion
av tid för olika jordmaterial för en laddningsvikt på 1 kg C4 på ett avstånd
på 0,5 m. I fullt vattenmättad lera är stötvågen framme på under 0,3 ms och
maxtrycket är på över 128 MPa. Den klingar av redan efter 2 ms, vilket ger
den ett mycket snabbare förlopp än till exempel torr sand, där stötvågen når
fram först efter 1,6 ms och då har knappt 13 MPa i maxtryck men som
klingar av först efter 7 ms.
Figur 9:31h. Tryck som funktion av tid för en oreflekterad markstötvåg med
f = 1,0 och för laddningsvikt W = 1 kg C4 på avståndet r = 0,5 m.
Jordmaterialen återfinns i tabell 9:31a.
Om nu avståndet ökas från 0,5 m till 1,0 m får tryckkurvorna ett utseende
enligt figur 9:31i. Nu har maxtrycket för fullt vattenmättad lera sjunkit till
45 MPa och ankomsttiden är nu strax över 0,5 ms. Stötvågen har klingat av
efter cirka 2 ms. Jämförs detta med torr sand är maxtrycket nu bara strax
under 2 MPa och ankomsttiden är runt 3,3 ms. Detta visar hur snabbt stöt-
vågen klingar av i marken och hur mycket jordens egenskaper påverkar
dessa.
0
20000
40000
60000
80000
100000
120000
140000
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
tid t [ms]
Tryck
 P (t ) [kPa]
lös torr sand
torr sand
tät sand
våt sandig lera
vattenmättad sandig lera
fullt vattenmättad lera

-- 146 of 311 --

Markstötvåg
2020-09-28 revidering 2 146
Figur 9:31i. Tryck som funktion av tid för en oreflekterad markstötvåg med
f = 1,0 och för laddningsvikt W = 1 kg C4 på avståndet r = 1 m.
Jordmaterialen återfinns i tabell 9:31a.
Slutkommentarer för Drakes modell från 1983
Drakes ekvationer från 1983 är samma som återfinns hos ConWep (1992).
Dessa utgör en utmärkt bas för att räkna ut i stort vilken storleksordning en
explosionslast i jord skulle få. En kommentar kring f, den så kallade för-
dämningsfaktorn enligt ekvation 9:31g, är att FE-simuleringar enligt Laine
och Larsen (2007), se även bilaga X, visar att f inte endast beror på skalat
laddningsdjup, vilket också uppmärksammades redan av Lampson (1946). I
tillägg så indikerar även Laine och Larsens (2007) simuleringar ett geomet-
riskt beroende, vilken geometrisk punkt, skalat avstånd och vinkel från
laddning, som studeras, påverkar fördämningsfaktorns storlek. Närmare ex-
perimentella undersökningar och simuleringar rekommenderas för att för-
fina utformning av ekvation 9:31g.
9:32 Drakes modell från 1989
Drake uppdaterade sina empiriska ekvationer från 1983 i Drake (1989),
vilka skiljer sig en hel del från Drake (1983). För det första är ekvationerna
skrivna i SI-enheter, vilket är tilltalande. För det andra är resonemanget i
Drake (1989) mer en energibetraktelse. Den approximativa lösningen
bygger på antagandet att jorden beter sig som ett inkompressibellt material
och om då konservering av massan studeras så kan flödesfältet i närregionen
av explosionscentrum estimeras med
n
kavitet
kavitet	p r
r
r	t	U 





= 	)	(	
(9:32a)
0
10000
20000
30000
40000
50000
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
tid t [ms]
Tryck
 P (t ) [kPa]
lös torr sand
torr sand
tät sand
våt sandig lera
vattenmättad sandig lera
fullt vattenmättad lera

-- 147 of 311 --

Markstötvåg
2020-09-28 revidering 2 147
där Up är partikelhastighet, rkavitet(t) är kavitetens expanderande radie som
funktion av tiden och n är en kompressionskonstant, för inkompressibla
material approximativt lika med 2 enligt Drake (1989). Magnituden hos
partikelhastigheten och dess avtagande i högtryckszonens flöde beror på
kavitetens expansionshastighet och den geometriska spridning som mark-
stötvågens front har. Den kinetiska energin i direkt närhet till explosionen
kan enligt Drake (1989) estimeras med
dr
U
r	E
r
r
p
k
kavitet
	= 2
4
2
2
0	
	
(9:32b)
Sätts nu ekvation (9:32a) in i ekvation (9:32b) med antagandet att n = 2 och
att densiteten är initiell densitet
0 fås





 −	=
kavitet
kavitet	kavitet	k r
r
r	r	E 1	2 3	2
0 	
	
(9:32c)
där Ek är kinetisk energi. Här gör Drake (1989) nästa antagande, nämligen
att den kinetiska energin i flödesfältet är ungefär hälften av den totala ladd-
ningens energi. 1 kg TNT motsvarar 4,6186 MJ energi. Detta ger
E	E laddning	k 		= 6
, 10	6186	,	4
2
1
(9:32d)
där W är laddningsvikt i TNT. Sätts nu ekvation (9:32a) in i (9:32c) fås





 −	= r	r
r	U	E
kavitet
p	k
1	1
2 4	2
0	
	
(9:32e)
Förmodligen antog Drake (1989) att rkavitet = 0,5r, varvid ekvation (9:32e)
kan skrivas som
3	2
0
4	2
0 2
1
5	.	0
1
2 r	U
r	r
r	U	E p	p	k	

	
	=	




 −	=	
(9:32f)
Om nu laddningens antagna energi, ekvation (9:32d) sätts lika med
ekvation (9:32f) kan initiell partikelhastighet Up0 lösas ut med följande
positiva kvadratrotslösning
2/1
3
0
3
0
0 25	,	606
46186
5 





=	= r
W
r
W
U p

	
	
(9:32g)
Där W är laddningsvikt i [kg] TNT,
0 är initiell densitet i [kg/m3], och r är
avståndet mellan laddning och studerad mätpunkt i [m].

-- 148 of 311 --

Markstötvåg
2020-09-28 revidering 2 148
Dämpningsexponenten n för partikelhastigheten i ekvation (9:32a) kan antas
vara lika med 2 för inkompressibla material. Enligt Drake (1989) har det
visats att för kompakterbara material kan volymändringar tas med genom
följande uttryck


−
+
= 1
2
n	
(9:32h)
där
 är en konstant som är mindre än 1. Enligt Drake (1989) kan dämp-
ningsexponenten från observerade data visa att
 =
0, där
0 är de kompak-
terbara porgaserna, se figur 4:2a för illustration. För mättade jordmaterial är
n < 2 och i det vattenmättade fallet beror n istället på styrkan hos materialet.
Maximal partikel- och stövågshastighet och tryck enligt
Drake (1989)
I Drake (1989) ges empiriska ekvationer som bäst återspeglar verkliga mät-
resultat av partikelhastighets- och tryckmätningar i olika jordmaterial och
förhållanden från detonation av nedgrävda laddningar. Följande uttryck ges
för maximal partikelhastighet Up0 i [m/s] och maximalt tryck P0 i [Pa]:
2	/	3
3	/	1
0
0
2	,	606 −





= W
r
U p

3/1
155	,	0 W	r 	
(9:32i)
n
p W
r
U
−






= 3/1
0
0 155	,	0
9906

3/1
155	,	0 W	r 	
(9:32j)
0	0	0 p	s U	U	P 		=
	
(9:32k)
0	1	0	0 p	s U	S	c	U 	+	=	
(9:32l)
Här är
0 initiell densitet [kg/m3], r är avstånd till laddning [m], W ladd-
nignsvikt i TNT [kg], Us är stötvågsfrontens hastighet [m/s], c0 är initiell
seismisk hastighet och S1 är linjära tillståndsberoendet hos stötvågsfrontens
hastighet som funktion av partikelhastighet Up. Drakes modell 1989 använ-
der sig alltså av en linjär tillståndsekvation för att beskriva relationen mellan
stötvågsstorheterna, se kapitel 3.
Enligt Drake (1989) är S1 ≈ 1,5 för geologiska material. Detta styrks av av-
snitt 5.3, där tillståndsekvationen Us som funktion av Up visas för publika
stötvågsdata som visar att för jordmaterialet tuff varierar S1 mellan 1,3 och
1,5 beroende på initiell densitet och vattenmättnadsgrad. Så om verkliga
mätningar finns tillgängliga på hur S1 förhåller sig så rekommenderas det att
verkliga värden används istället för det generiska värdet på 1,5 som anges i
Drake (1989).

-- 149 of 311 --

Markstötvåg
2020-09-28 revidering 2 149
Maximal radiell acceleration enligt Drake (1989)
Maximal radiell acceleration i [g] kan beräknas med följande ekvation
r
p
t	g
U
a 
= 0
0
2
(9:32m)
i	S
i
r c
r
U
c
t 




 −	= 1
0
där	0s	i U	c 	 (9:32n)
där tr [s] är restiden hos stötvågen, se figur 9:3a, ci [m/s] är en generaliserad
seismisk hastighet där ci > Us0 enligt Drake (1989).
Maximal förskjutning enligt Drake (1989)
Maximal förskjutning d0 [m] kan beräknas enligt följande ekvation
2
3/1
3/1
0
31	,	3 −






= W
r
W
c
d
i
(9:32o)
Maximal partikelhastighet som funktion av tid enligt
Drake (1989)
Ankomsttiden ta, tiden när maximal partikelhastighet uppstår tp samt varak-
tigheten t+ hos ostörd stötvåg kan beräknas som
i
a c
r
t =	
(9:32p)
0s
p U
r
t =	
(9:32q)
r
p
t
U
d
t 36	,	0	72	,	2
0
0 −	=	+	
(9:32r)
Om linjär stigning till maximal partikelhastighet antas kan stötvågens våg-
form antas ha följande utseende
2	/	3
0	)	(
−





 −
= r
a
p	p t
t	t
U	t	U	p	a t	t	t 		
(9:32s)

-- 150 of 311 --

Markstötvåg
2020-09-28 revidering 2 150








−
−
−








−
−
= p	d
p
t	t
t	t
p	d
d
p	p 	e
t	t
t	t
U	t	U 	0	)	(	p	t	t 	
(9:32t)
a	d t	t	t +	= +	
(9:32u)
där td är den absoluta tiden vid slutet av den positiva fasen, se figur 9:3a för
illustration av vågform och använda tidpunkter. I tabell 9:32a ges material-
data för olika jordkategorier och jordtyper. När det gäller fördämningsfak-
torn f, se figur 9:31b, som introducerades redan i Drakes modell från 1983,
så gäller samma sak för modellen i Drake (1989),det vill säga att den ska
användas genom att multiplicera ovan givna ekvationer som beskriver
acceleration, hastighet, spänning, och förskjutning för att ta hänsyn till vil-
ket skalat laddningsdjup som laddningen detonerar på.
Tabell 9:32a. Jordmaterialkoefficienter för olika jordtyper, från Drake (1989).
Jord-
kategori
Jordtyp
och
exempel
Typisk
initiell
densitet
0
[kg/m3]
Typisk
seismisk
hastighet
ci
[m/s]
Initiell
seismisk
hastighet
c0
[m/s]
Dämpnings-
koefficient
n
[-]
Tät torr
jord
Alluvium 1900 500
1000
(cementerad)
220 2,5 till 3,0
Tät sand 1750 550 520 2,1
Medium
densitet,
torr jord
Sand,
alluvium
1700 350 300 2,3
Låg
densitet,
torr jord
Lös sand,
mylla
1500 200 180 2,5 till 3,0
Mättade
jordar
Alla typer 1850 1850 1850 1,5
Höghåll-
fasta
bergarter
Kvarts,
diabas,
basalt,
granit
2650 5500 4500 2,0
Medium-
hållfasta
bergarter
Skiffer,
porös
sandsten,
kalksten,
silikat
2500 3400 2750 2,0
Låghåll-
fasta
bergarter
Porös tuff,
lera,
skiffer,
2000 2050 1550 2,3
Väldigt låg-
hållfasta
bergarter
Väldigt
porös och
väderutsatt
1400 1400 1050 2,5

-- 151 of 311 --

Markstötvåg
2020-09-28 revidering 2 151
När tabell 9:32a med exempel på jordmaterialkoefficienter jämförs med
Drakes tidigare utgivna materialkoefficienter, se tabell 9:31a, visar det sig
vara rätt svårt att hitta liknande materialparametrar för samma jordarter. En
tolkning som kan göras är att i Drake (1989) har även materialparametrarna
korrigerats utöver introduktion av de nya ekvationerna som har en mer teo-
retisk grund att stå på. Speciellt med tanke på konservering av massan,
energins bevarande, och användning av tillståndsekvation EOS, gör att
denna empiriska modell är tilltalande.
Drake (1989) gör själv en jämförelse mellan Drake (1983) som han kallar
originalmetod med Drake (1989) som han benämner ny metod med experi-
ment, se figur 9:32a och 9:32b. Figurerna visar att generellt så beskriver
Drake (1989) stötvågens partikelhastighet och spänning bättre i närområdet
av detonationscentrum. För Drake (1983) så börjar den streckade linjen vid
cirka 0,2 m/kg1/3, vilket kan tolkas som att Drake anser att Drakes (1983)
modell inte alls är giltig för skalade laddningsavstånd under 0,2 m/kg3. En
annan observation som kan göras är att Drake(1989) tillåter bilinjärt bete-
ende, med vilket här menas att den är sammansatt av två linjer med en bryt-
punkt vid avståndet r = 0,155W1/3, se ekvationerna (9:32i) och (9:32j) som
beskriver maximal partikelhastighet som funktion av avståndet r och ladd-
ningsvikt W.
Jämförelse av Drakes modeller (1983) och (1989)
I Drake (1989) görs ingen detaljerad jämförelse hur mycket bättre Drakes
modell från 1989 är jämfört med 1983 utan figur 9:32a och 9:32b visar
endast detta i stora drag. I slutsatserna skriver Drake (1989) om att dessa
förbättringar speciellt försöker leda till att närområdet kring detonations-
centrum ska kunna estimeras bättre. I figur 9:32a visas att Drakes modell
från 1989 generellt predikterar lägre värden än för Drakes modell från 1983
för skalade laddningsavstånd under 1 m/kg1/3. Jordtyperna i figur 9:32a är
torra jordar med låg- och medeldensitet. Detta stämmer även med de två
översta graferna i figur 9:32b, vilka beskriver tätare jordar såsom tät sand
eller sandig lera. Däremot är det precis det omvända, det vill säga att Drakes
modell från 1989 predikterar högre värden än Drakes modell från 1983, för
vattenmättade jordar såsom vattenmättad lera, vilket visas i de två nedersta
graferna i figur 9:32b.

-- 152 of 311 --

Markstötvåg
2020-09-28 revidering 2 152
Figur 9:32a. Jämförelse av max partikelhastighet och max spänning enligt
Drake (1983) - ”Original Method”, Drake (1989) - ”New Method”,
och experiment som funktion av skalat laddningsavstånd. Figur
från Drake (1989).

-- 153 of 311 --

Markstötvåg
2020-09-28 revidering 2 153
Figur 9:32b. Jämförelse av max partikelhastighet och max spänning enligt
Drake (1983) - ”Original Method”, Drake (1989) - ”New Method”,
och experiment som funktion av skalat laddningsavstånd. Figur
från Drake (1989).
En jämförelse mellan Drakes modeller från 1989 och 1983 utförs nedan på
två typiska jordar torr sand och fullt vattenmättad lera. På grund av att
dämpningskoefficienter och densiteter också har modifierats mellan de olika
modellerna väljs följande jordmaterialdata för jämförelse:
• För modell 1983 väljs materialdata torr sand, och återfyllning med
densitet 1630 kg/m3, seismisk våghastighet 305 m/s och dämpnings-
koefficient 2,75. När det gäller den andra jordtypen är det fullt

-- 154 of 311 --

Markstötvåg
2020-09-28 revidering 2 154
vattenmättad lera med densitet 2030 kg/m3, seismisk våghastighet
1829 m/s och dämpningskoefficient 1,5, se tabell 9:31a.
• För modell 1989 väljs materialdata mediumdensitet, torr jord, sand
alluvium med densitet 1700 kg/m3 med typisk seismisk hastighet på
350 m/s, initiell seismisk hastighet 300 m/s, och dämpningskoeffici-
ent 2,3. För den andra jordtypen väljs mättade jordar, alla typer, med
densitet 1850 kg/m3, typisk och initiell seismisk hastighet 1850 m/s
och dämpningskoefficient 1,5, se tabell 9:32b.
Det kan verka uppenbart fel att jämföra modellerna med olika initiell densi-
tet, seismisk hastighet och dämpningskoefficient. Helst skulle materialdatan
vara oberoende av modellen men eftersom Drake verkar ha justerat både
modell och materialdata ses detta som en möjlig väg att göra en mer rättvis
bedömning hur modellerna försöker beskriva markstötvåg i torr sand och
fullt vattenmättad lera.
I figur 9:32c jämförs beräkningsresultat för maximal partikelhastighet från
Drakes modeller 1983 och 1989. Jämförelsen visar att beräkningarna inte
skiljer sig märkbart för fullt vattenmättad lera men för torr sand har en tyd-
lig knäck på linjen introducerats vid det skalade laddningsavståndet
0,15 m/kg1/3 när den börjar följa samma maximala partikelhastighet som för
fullt vattenmättad lera för lägre skalade laddningsavstånd än 0,15 m/kg1/3.
För högre skalade laddningsavstånd är lutningen något flackare för torr sand
enligt 1989 års modell jämfört med 1983.
Figur 9:32c. Jämförelse av Drakes modell 1983 med 1989 för maximal partikel-
hastighet Up som funktion av skalat laddningsavstånd för en
oreflekterad markstötvåg med f = 1,0 för torr sand och fullt vatten-
mättad lera.
0
0
1
10
100
1 000
10 000
100 000
0.01 	0.1 	1 	10
Max partikelhastighet
 
Up 	[m/s]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
torr sand -Drakes modell 1983
fullt vattenmättad lera -Drakes modell 1983
torr sand -Drakes modell 1989
fullt vattenmättad lera -Drakes modell 1989

-- 155 of 311 --

Markstötvåg
2020-09-28 revidering 2 155
I Drakes modell från 1989 så används en tillståndsekvation, se
ekvation (9:32l), för att etablera vilken maximal stötvågshastighet som upp-
står, se figur 9:32d. Figuren visar att maximal stötvågshastighet Us0 som
funktion av skalat laddningsavstånd för fullt vattenmättad fås redan vid över
cirka 0,2 m/kg1/3, det vill säga nästan lika med initiell seismisk hastighet c0.
För torr sand sker detta för lite högre skalat laddningsavstånd över cirka
0,8 m/kg1/3.
Figur 9:32d. Drakes 1989 för maximal stötvågshastighet Us0 som funktion av
skalat laddningsavstånd för en oreflekterad markstötvåg med
kopplingsfaktorn f = 1,0 för torr sand och fullt vattenmättad lera och
S1 = 1.5 i tillståndsekvationen (9:32l).
När maximala tryckberäkningar jämförs mellan 1989 och 1983 års modeller
noteras att i 1989 års modell konvergerar trycket för både sanden och den
fullt vattenmättade leran mot samma värden ju mindre det skalade ladd-
ningsavståndet blir, speciellt när det skalade laddningsavståndet blir mindre
än 0,1 m/kg1/3. I den gamla modellen från 1983 beräknas trycket faktiskt bli
lägre i fullt vattenmättad lera än torr sand för skalade laddningsavstånd
mindre än 0,08 m/kg1/3, vilket inte är realistiskt.
100
1 000
10 000
0.01 	0.1 	1 	10
Max Stötvågshastighet
 
Us0 	[m/s]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
torr sand -Drakes modell 1989
fullt vattenmättad lera -Drakes modell 1989

-- 156 of 311 --

Markstötvåg
2020-09-28 revidering 2 156
Figur 9:32e. Jämförelse av Drakes modell 1983 med 1989 för max tryck P0 som
funktion av skalat laddningsavstånd för en oreflekterad markstöt-
våg med kopplingsfaktorn f = 1,0 för torr sand och fullt vattenmät-
tad lera.
För att beräkna maximal acceleration a0 enligt Drakes modell, se ekvat-
ion (9:32m), så behöver restiden tr beräknas, se ekvation (9:32n). För beräk-
ningen av tr så har det angetts ett villkor för ekvation (9:32n), nämligen att
0s	i U	c 	
. Enligt tabell 9:32a är typisk seismisk hastighet ci och c0 lika dvs.
ci = c0 = 1850 m/s för fullt vattenmättad lera, vilket betyder att Us > ci när
Up0 > 0, se ekvation (9:32l). Detta betyder att restiden tr ej kan beräknas för
full vattenmättad lera eftersom villkoret på ekvation (9:32n) inte uppfylls,
varför inte heller max acceleration kan beräknas. Det är oklart om
Drake (1989) har missat detta eller om han anser att restiden är nära noll
sekunder då	0s	i U	c 	 . På grund av detta så jämförs bara beräkningar för torr
sand av restid och max acceleration mellan modellerna 1983 och 1989.
I figur 9:32f visas restiden för torr sand vid avståndet r = 0,5 m enligt
modell 1983. Den gamla restiden var inte beroende av skalat laddningsav-
stånd utan bara avståndsberoende, se ekvation (9:31a) och (9:31b), därför
blir linjen rätt i figur 9:32f för 1983:s modell. Däremot så varierar restiden
med skalat laddningsavstånd för 1989:s modell, vilket gör att restiden är
kortare för lägre skalade laddningsavstånd. Detta är ett mer realistiskt bete-
ende. Just i det här specifika fallet så korsar linjerna varandra vid skalat
laddningsavstånd på cirka 0,65 m/kg1/3.
10
100
1 000
10 000
100 000
1 000 000
10 000 000
100 000 000
0.01 	0.1 	1 	10
Max tryck
 
P0 	[kPa]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
torr sand -Drakes modell 1983
fullt vattenmättad lera -Drakes modell 1983
torr sand -Drakes modell 1989
Fullt vattenmättad lera -Drakes modell 1989

-- 157 of 311 --

Markstötvåg
2020-09-28 revidering 2 157
Figur 9:32f. Jämförelse av Drakes modell 1983 med 1989 för restid tr vid
avståndet r = 0,5 m som funktion av skalat laddningsavstånd för en
oreflekterad markstötvåg med f = 1.0 för torr sand.
I figur 9:32g jämförs maximal acceleration för torr sand med modell 1983
och 1989. I modellen från 1983 antogs 1 kg C4 som laddningsvikt, vilket
behöver preciseras för att kunna beräkna maximal acceleration. I modell
1989 behöver istället radien preciseras, vilken antogs till 0,5 m. Den gamla
beräkningen är mer rätlinjig i log-log skala jämfört med den nya som inte
heller garanterar resultat om inte en restid kan beräknas, jämför med fi-
gur 9:32f. För den vattenmättade leran kunde inte en restid beräknas, därför
kan inte heller en acceleration beräknas om villkoren för 1989 års modell
följs.
Figur 9:32g. Jämförelse av Drakes modell 1983 med 1989 för max acceleration
a0 vid avståndet r = 0,5 m som funktion av skalat laddningsavstånd
för en oreflekterad markstötvåg med f = 1,0 för torr sand. Ladd-
ningsvikten antogs till 1 kg C4 för 1983 års modell.
0.000001
0.00001
0.0001
0.001
0.01 	0.1 	1 	10
Restid
 
tr 	[s]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
torr sand -Drakes modell 1983
torr sand -Drakes modell 1989
0
1
10
100
1 000
10 000
100 000
1 000 000
10 000 000
100 000 000
1 000 000 000
10 000 000 000
0.01 	0.1 	1 	10
Acceleration
 
a0 	[m/s
2]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
torr sand -Drakes modell 1983
torr sand -Drakes modell 1989

-- 158 of 311 --

Markstötvåg
2020-09-28 revidering 2 158
I 1989 års modell beräknas generellt lägre värden för max förskjutning hos
torr sand. För den fullt vattenmättade leran har en större korrektion av
maximala förskjutningsberäkningarna gjorts jämfört med 1983 års modell.
För mindre skalade avstånd än 0,2 m/kg1/3 beräknas högre förskjutningar
med 1989 års modell jämfört med 1983. Kurvan är dessutom parallell med
den torra sanden som beräknats med 1989 års modell.
Figur 9:32h. Jämförelse av Drakes modell 1983 med 1989 för maximal förskjut-
ning d0 som funktion av skalat laddningsavstånd för en oreflekterad
markstötvåg med f = 1,0 för torr sand. Laddningsvikten antogs till
1 kg C4 för 1983 års modell och 1 kg TNT för 1989 års modell.
I figur 9:32i och 9:32j visas tryck som funktion av tid i torr sand och fullt
vattenmättad lera beräknat med 1983 och 1989 års modell. 1,37 kg TNT an-
vändes i Drakes modell från 1989, detta för att motsvara 1 kg C4 i tryck, se
omvandlingsfaktorer i bilaga B. En tydlig skillnad på formen hos tryck-tid-
kurvorna syns i båda figurerna när 1983 jämförs med 1989 års modell. Tidi-
gare ankomsttid, högre maxtryck, snabbare avklingning och dessutom en
negativ fas är några av de egenskaper som har tillförts 1989 års modell.
Jämförelse har också gjorts när omvandlingsfaktorn på 1,37 från TNT till
C4 inte används, se bilaga J för dessa resultat. Resultaten visar att maximal-
trycksskillnaderna mellan modellerna är mindre.
0.00001
0.0001
0.001
0.01
0.1
1
10
100
1000
0.01 	0.1 	1 	10
Max förskjutning
 
d0 	[mm]
Skalat laddningsavstånd r/W1/3 [m/kg1/3]
torr sand -Drakes modell 1983
fullt vattenmättad lera -Drake's modell 1983
torr sand -Drake's modell 1989
Fullt vattenmättad lera -Drake's modell 1989

-- 159 of 311 --

Markstötvåg
2020-09-28 revidering 2 159
Figur 9:32i. Jämförelse av Drakes modell 1983 med 1989 för tryck som funkt-
ion av tid för en oreflekterad markstötvåg med f = 1,0 för torr sand
vid avståndet 1 m. Laddningsvikten antogs till 1 kg C4 för 1983 års
modell och 1,37 kg TNT för 1989 års modell.
Figur 9:32j. Jämförelse av Drakes modell 1983 med 1989 för tryck som
funktion av tid för en oreflekterad markstötvåg med f = 1,0 för för
fullt vattenmättad lera vid avståndet 1 m. Laddningsvikten antogs
till 1 kg C4 för 1983 års modell och 1,37 kg TNT för 1989 års
modell.
Drakes modell från 1989 är ett intressant komplement till Drakes modell
från 1983. Men mycket i 1989 känns inte genomarbetat. Detta framgår
exempelvis av figur 9:32j, där leran påstås kunna hantera ett isotropiskt
dragtryck på -10 MPa, något som är långt över vad leran oftast har som ens
skjuvhållfasthet. Utöver detta är det inte helt färdigarbetat hur till exempel
-1000
-500
0
500
1000
1500
2000
2500
3000
3500
4000
0 	2 	4 	6 	8 	10 	12 	14 	16 	18 	20
Tryck
 P [kPa]
tid t [ms]
torr sand -Drakes modell 1983
torr sand -Drakes modell 1989
-20000
-10000
0
10000
20000
30000
40000
50000
60000
70000
80000
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0 	3.5 	4.0 	4.5 	5.0
Tryck
 P [kPa]
tid t [ms]
fullt vattenmättad lera -Drakes modell 1983
fullt vattenmättad lera -Drakes modell 1989

-- 160 of 311 --

Markstötvåg
2020-09-28 revidering 2 160
restiden beräknas och hur man hanterar skalade laddningsavstånd som leder
till ci < Us0. Detta problem gäller även för hur ankomsttiden ta och peaktiden
tp beräknas enligt Drake (1989).
9.4 Markstötvåg med reflexioner
Generellt propagerar inte en markstötvåg genom ett homogent medium.
Istället är det normalt att detta består av flera olika typer av jordlager,
varierande grundvattennivåer, berg, luft ovan jord, och byggnadskonstrukt-
ioner under marknivå som utgör medier som markstötvågen reflekterar mot.
I detta avsnitt ges en förenklad metod för beräkning av reflexioner enligt
ConWep (1992) i avsnitt 9:41 och därefter ges detaljerad beskrivning av
vinkelrät reflexion teori och simuleringar av vad reflexionstrycken blev
enligt Autodyn i avsnitt 9:42.
9:41 Reflexioner enligt ConWep (1992)
I kapitel 7 gavs en enklare illustration av hur stötvågen mot en skyddskon-
struktion egentligen byggs upp av flera vågor. En direktvåg rd, en avlast-
ningsvåg från ytan rs och en bottenreflekterad våg rl, se figur 7:22c. Här
kommer dessa vågors sammansättning att tas fram med enklare ekvationer
enligt ConWep (1992). I figur 9:41a visas avstånden rd, rs, och rl för ett
generellt exempel.
Figur 9:41a. Beskrivning av generella avstånd för direkt-, ytreflekterad-, avlast-
nings- och bottenreflekteradvåg mot en skyddskonstruktion.
Avstånden kan beräknas med följande ekvationer
𝑟𝑑 = ((𝑑 − 𝑧)2 + 𝑟2)1/2 (9:41a)
𝑟𝑠 = ((𝑑 + 𝑧)2 + 𝑟2)1/2 (9:41b)
Luft med låg impedans
jämfört med jord
Jord
rd
rs
rl
d
h-d
h
z
Skyddskonstruktion
av betong
r Material med hög impedans
till exempel berg eller jord
under grundvattennivå.

-- 161 of 311 --

Markstötvåg
2020-09-28 revidering 2 161
𝑟𝑙 = ((2ℎ − 𝑑 − 𝑧)2 + 𝑟2)1/2 (9:41c)
där h är jordlagrets tjocklek, d är laddningsdjup, r är laddningens horison-
tella avstånd till skyddskonstruktionen och z vertikala djup från ytan för stu-
derad punkt på skyddskonstruktion.
När stötvågornas avstånd har beräknats enligt ekvation (9:41a)-(9:41c) så
kan initiellt tryck P0 bestämmas för alla tre stötvågorna, till exempel enligt
Drake(1983), se ekvation (9:31k). När denna har beräknats kan följande
tryckstötvågor beräknas
𝑃𝑑(𝑡) = 𝑃0(𝑟𝑑)𝑒(−𝛼𝑡 𝑡𝑑	
⁄ ) (9:41d)
𝑃𝑠(𝑡) = −𝑃0(𝑟𝑠)𝑒(−𝛼𝑡 𝑡𝑠	
⁄ ) (9:41e)
𝑃𝑙(𝑡) = 𝐾𝑃0(𝑟𝑙)𝑒(−𝛼𝑡 𝑡𝑙	
⁄ ) (9:41f)
där tidstrycksambanden har justerats för aktuella avstånd. Direktvågen är
precis som Drakes modell från 1983. Däremot har avlastningsvågen 𝑃𝑠 har
fått negativt värde på trycket, det vill säga ett dragtryck, se ekvation (9:41e),
och den bottenreflekterade vågen 𝑃𝑙 har multiplicerats med en reflexions-
koefficient K.
Reflexionskoefficienten beräknas enligt ConWep (1992):
𝐾 = {
cos 𝜃−𝐾0
cos 𝜃+𝐾0
, för 1 − (𝐶1
𝐶2
⁄ sin 𝜃)2
> 0
1, 𝑎𝑛𝑛𝑎𝑟𝑠
(9:41g)
där reflexionskoefficienten K0 beskrivs
𝐾0 = 𝜌1𝐶1
𝜌2𝐶2
(1 − (𝐶1
𝐶2
⁄ sin 𝜃)2
)
1/2
(9:41h)
där index 1 indikerar densitet och seismisk hastighet för det övre lagret och
index 2 indikerar densitet och seismisk hastighet för det undre lagret.
Vinkeln
 definieras såsom
sin 𝜃 = 𝑟
𝑟𝑙
(9:41i)
och
cos 𝜃 = 2ℎ−𝑑−𝑧
𝑟𝑙
(9:41j)
där längderna är illustrerade i figur 9:41a.
Räkneexempel för reflexion med Drakes modell från 1983

-- 162 of 311 --

Markstötvåg
2020-09-28 revidering 2 162
Här följer ett räkneexempel på hur stötvågen blir för en nedgrävd C-4 ladd-
ning på 125 kg som detonerar på fem meters avstånd från skydds-
konstruktionen. Detonationen sker i lös torr sand, se figur 9:41b för illust-
ration av laddningsdjup och reflekterande lager. Första steget i beräkningen
är att bestämma avstånden enligt ekvationerna (9:41a)-(9:41c)
𝑟𝑑 = ((4 − 3)2 + 52)1/2 = 5,10 m (9:41k)
𝑟𝑠 = ((4 + 3)2 + 52)1/2 = 8,60 m (9:41l)
𝑟𝑙 = ((2 ∗ 9 − 4 − 3)2 + 52)1/2 = 12,08 m (9:41m)
Figur 9:41b. Beräkningsexempel för hur markstötvåg kan estimeras för en
125 kg C-4 laddning som detonerar i torr lös sand fem meter från
en skyddskonstruktion.
Det skalade laddningsdjupet är 𝐷 = 𝑑
𝑊
1
3
= 0,8 m/kg1/3, vilket ger en kopp-
lingsfaktor på 1,0, se figur 9:31b. I detta exempel beräknar vi trycken enligt
Drakes modell 1983, det vill säga samma som ConWep (1992), se av-
snitt 9.31. Ankomsttider, stigtider och maxtryck kan bestämmas med
ekvationerna (9:31a), (9:31b), och (9:31k) för torr sand. Maxtrycket för di-
rektvågen är lika med P0, se ekvation (9:41d). Den ytreflekterade vågen har
getts negativt tecken, -P0, enligt ekvation (9:41e). För den bottenreflekte-
rade vågen är maxtrycket KP0 enligt ekvation (9:41f). Där måste reflex-
ionskoefficienten K räknas ut först enligt ekvationerna (9:41g) och (9:41h).
Detta i sin tur kräver reflexionsvinkeln	
, vilken bestäms med
ekvation (9:41i)
sin 𝜃 = 𝑟
𝑟𝑙
= 5
12,08 vilket ger 𝜃 = 24,4 grader. (9:41n)
Då kan villkoret för reflexionsekvationen beräknas
1 − (𝐶1
𝐶2
⁄ sin 𝜃)2
= 1 − (305 4600⁄ sin 24,4)2
= 0,99925 > 0 (9:41o)
Luft med låg impedans
jämfört med jord
Torr sand,
=1630 kg/m3
=305 m/s
rd
rs
rl
d = 4 m
h-d
h = 9 m
z = 3.0 m
Skyddskonstruktion
av betong
r = 5 m Berg,
=2600 kg/m3
= 4600 m/s
w C-4 =
125 kg

-- 163 of 311 --

Markstötvåg
2020-09-28 revidering 2 163
Ekvation (9:41o) är OK, vilket leder till att
𝐾0 = 𝜌1𝐶1
𝜌2𝐶2
(1 − (𝐶1
𝐶2
⁄ sin 𝜃)2
)
1/2
= 1630 ∙ 305
2600 ∙ 4600 (0,9925)1/2 = 0,042
och då blir reflexionskoefficienten slutligen
𝐾 = cos 𝜃 − 𝐾0
cos 𝜃 + 𝐾0
= cos 24,4 − 0,042
cos 24,4 + 0,042 = 0,91
Resultaten för ankomsttid, stigtid, och maxtryck har summerats i ta-
bell 9:41a.
Tabell 9:41a. Beräkningsexempel enligt figur 9:41b för reflexion av markstötvåg.
Direktvåg
𝑃(𝑟𝑑)
Ytreflekterad
𝑃(𝑟𝑠)
Bottenreflekterad
𝑃(𝑟𝑙)
ta [ms] 16,72 28,20 39,62
tr [ms] 1,67 2,82 3,96
P0 [kPa] 1807 -429 154
α [-] 1,00 1,00 1,00
Genom att nu använda ekvationerna (9:41e)-(9:41f) kan tryck-tidskurvorna
beräknas. I figur 9:41c visas tryckvågorna separat för direkt, ytreflekterad
och bottenreflekterad våg.
Figur 9:41c. Direkt-, ytreflekterad-, och bottenreflekterad våg för beräknings-
exempel enligt figur 9:41b.
När dessa vågor summeras är det vad som kan förväntas av den samman-
satta vågen vid mätpunkten z = 3 m på skyddskonstruktionen. I figur 9:41d
har vågorna summerats och vi kan se hur det har blivit ett negativt hack i
kurvan runt 30 till 40 ms på grund av inverkan från ytreflexionen. Dessutom
-1000
-500
0
500
1000
1500
2000
0 	20 	40 	60 	80 	100 	120 	140 	160 	180 	200
Tryck
P
[kPa]
tid
t [ms]
direkt
ytreflekterad
bottenreflekterad

-- 164 of 311 --

Markstötvåg
2020-09-28 revidering 2 164
blir det ett positivt hack i kurvan runt 44 ms på grund av bottenreflexionen.
Beräkningarna utförda här jämfördes med resultat från ConWep (1992) i
bilaga K.
Figur 9:41d. Summering av direkt-, ytreflekterad-, och bottenreflekterad våg för
beräkningsexempel enligt figur 9:41b.
9:42 Detaljerad beskrivning av reflexion
När markstötvågen reflekterar mot andra material är effekten av reflexionen
inte lika markant som vid fallet med luftstötvåg. I luftstötvåg är det inte alls
ovanligt med reflexionskoefficient högre än 2. Den största skillnaden mellan
luft och mark är att markens densitet är minst 1000 gånger högre än luftens.
Reflexionstryckets ökning beror givetvis på vilket material som markstötvå-
gen reflekterar med. Jämför man då med luft som kanske reflekteras mot en
betongvägg så är skillnaderna i impedans, våghastighet gånger densitet,
markanta, vilket inte är fallet för markstötvåg när den når en betongvägg.
Meyer (1994) visar hur reflexionskoefficienten kan tas fram för plan stöt i
en stav. I figur 9:42a illustreras fallet med vinkelrät reflexion i en stav med
konstant area A. I material A framskrider en stötvåg med longitudinell has-
tighet 𝑉𝐿,𝐴 fram emot reflexionsmaterialet B.
0
200
400
600
800
1000
1200
1400
1600
1800
2000
0 	20 	40 	60 	80 	100 	120 	140 	160 	180 	200
Tryck
 P [kPa]
tid t [ms]
summa

-- 165 of 311 --

Markstötvåg
2020-09-28 revidering 2 165
Figur 9:42a. Illustration av endimensionell markstötvågsreflektion mellan jord-
material A och reflektionsmaterial B. Impedansen har antagits vara
högre för A än B. (I) visar stötvågens propagering före ankomst till
randen A-B. (II) visar jämviktsvillkoret för krafter vid stötögon-
blicket. (III) visar partikelhastigheter vid stötögonblicket.
För att djupare se vad som händer vid reflexion, låt oss börja med lagen för
bevarande av rörelsemängd för att uttrycka ett samband för spänning
 som
funktion av densitet
 och partikelhastighet Up enligt figur 9:42a-I:
)	( p	mU	d	Fdt =	
(9:42a)
och omskrivning ger
p	AdxU	Adt	

	
	=	
(9:42b)
och slutligen fås
p	p cU	U
dt
dx

	
	
	=	=	
(9:42c)
Termen	
c i ekvation (9:42c) kallas även materialets impedans. Stor
impedans leder till att även små partikelhastigheter ger hög spänning. Liten
impedans kräver däremot stor partikelhastighet för att få hög spänning hos
stötvågen. I fallet med jordmaterial är impedansen relativt hög jämfört med
till exempel luft. Riktningar hos krafter och partikelhastighet hos figur 9:42a
Jordmaterial-A Reflexionsmaterial -B
Rand A-Bdx
Up
V L,A
A B	
i	V L,A
(I)
(II)
r
t V L,B
A B	V L,A
(III) V L,B	Up,i
Up,r
Up,t

-- 166 of 311 --

Markstötvåg
2020-09-28 revidering 2 166
illustrerar fallet då impedansen är högre hos jordmaterial A jämfört med
reflektionsmaterial B.
Vid själva reflexionsögonblicket är det möjligt att uttrycka ett jämviktstill-
stånd, mellan krafterna, vid själva randen A-B som
t	r	i	

	
	
	=	+	
(9:42d)
där
i är inkommande spänning,
r är reflekterad spänning samt
t är trans-
mitterad spänning. Om även kontinuitet antas vid randen, det vill säga att
inget gap eller överlagring av material kan ske, kan följande samband för
inkommande, reflekterad och transmitterad partikelhastighet antas
t	p	r	p	i	p 	U	U	U 	,	,	, 	=	−	
(9:42e)
där tecknet för reflekterad partikelhastighet är satt till minus på grund av att
positivt tryck ges av negativ partikelhastighet vid reflexion. Om vi nu kom-
binerar ekvation (9:42c) med (9:42e) fås
B	L	B
t
A	L	A
r
A	L	A
i
V	V	V 	,	,	,	






=	−	
(9:42f)
Om vi kombinerar ekvation (9:42f) med (9:42d) fås följande samband
mellan spänningarna
B	L	B	A	L	A
B	L	B
i
t
V	V
V
,	,
,	2

	



+
=	
(9:42g)
B	L	B	A	L	A
A	L	A	B	L	B
i
r
V	V
V	V
,	,
,	,

	

	


+
−
=	
. (9:42h)
Vi kan tydligt se av ekvation (9:42g) och (9:42h) att amplituden av trans-
mitterad spänning och reflexionsspänning bestäms av impedansen
c (eller
ρVL) hos de inblandade materialen. Dessa ekvationer tas som sagt även fram
av Meyers (1994) men där VL = c.
För att illustrera hur stort det reflekterande och transmitterade trycket blir
när markstötvågen reflekterar mot till exempel betong, stel vägg och fri av-
lastning har tabell 9:42a framtagits med hjälp av ekvation (9:42g) och
(9:42h). Jordmaterialet varierades mellan torr sand och våt lera. Antagna
densiteter och våghastigheter för jordmaterialen och de reflekterande
materialen återges i tabell 9:42b.

-- 167 of 311 --

Markstötvåg
2020-09-28 revidering 2 167
Tabell 9:42a. Reflekterat tryck samt transmitterat tryck uttryckt som kvoten av
inkommande tryck enligt ekvation 9:4g och 9:4h.
r/
i	
r/
i	
t/
i	
t/
i
Reflektionsmaterial sand lera sand lera
betong 0,877 0,405 1,877 1,405
LECA -0,595 -0,924 0,405 0,076
Stel vägg 1,000 1,000 2,000 2,000
fri avlastning -1,000 -1,000 0,000 0,000
Tabell 9:42b. Densiteter och våghastigheter hos de studerade jordmaterialen
samt hos de reflekterande materialen.
lera sand betong LECA
densitet
 kg/m3] 1908 1674 2314 320
våghastighet 𝑉𝐿 ≈ 𝑐 [m/s] 1500 265 2920 352
fri avlast-
ning stel vägg
densitet
 kg/m3] 0 1,00∙1020
våghastighet 𝑉𝐿 ≈ 𝑐 [m/s] 0 1,00∙1020
Som vi kan se av tabell 9:42a är den reflekterade vågen +88 % av den
inkommande när stötvåg utbreder sig i sand och reflekteras mot betong. Den
transmitterade vågen är 188 %, vilket också är den totala reflekterande
vågen storlek, se ekvation (9:4d). Om detta jämförs med till exempel en stel
vägg är den reflekterande vågen 100 % av den inkommande och den trans-
mitterade 200 %. När impedansskillnaden minskar mellan jordmaterialet
och det reflekterande materialet, såsom fallet mellan våt lera och betong,
blir den reflekterande vågen +40,5 % av den inkommande och den trans-
mitterade vågen 140,5 % av den inkommande vågen. Vid fallen sand –
betong och våt lera – betong är impedansen konsekvent högre hos det
reflekterade materialet.
Om vi istället byter ut det reflekterade materialet till Leca-kulor, vilka har
lägre impedans än både sanden och den våta leran, fås ett reflekterat tryck
som är -60 % respektive -92 % av den inkommande vågen för sanden och
leran. Detta betyder att vi får en dragvåg tillbaka i jordmaterialet som redu-
cerar det totala reflekterade trycket i detta. Vid Leca-fallet blir det transmit-
terade trycket enligt dessa beräkningar 40 % respektive 8 % av den inkom-
mande vågen vid sand respektive lera.
Ovanstående enkla beräkningar jämfördes med finita elementsimuleringar
med mycket mer detaljerade materialmodeller för betong och sand än bara
deras in situ-impedans. En endimensionell modell ställdes upp enligt fi-
gur 9:42b. Autodyn med dess multimaterial Euler användes för elementfor-
muleringen. Betongmodellen var RHT-modellen enligt Riedel (2000) med
givna data för betong RHT-35MPa. Sanden modellerades med EOS
Granular och Strength model Granular, se även Moxnes et.al. (1999).
Materialdata för sanden var enligt Laine och Sandvik (2000) och jord-
material som även modifierats från sand, EOS1-STR1, till fullt vattenmättad
lera, EOS4-STR4, enligt bilaga E.

-- 168 of 311 --

Markstötvåg
2020-09-28 revidering 2 168
Figur 9:42b. Illustration av endimensionell finita element modell för studie av
markstötvågsreflektion mellan jordmaterial A och reflexionsmate-
rial B.
I simuleringarna varierades laddningsstorlekarna från 125, 250, 500, och
1000 kg TNT. Maximala trycket mättes i elementet precis framför väggen
som var antingen betong eller stel vägg och var placerad 5 meter från ladd-
ningens centrum. Detta tryck jämfördes med trycket från fri avlastning för
att ta fram kvoten mellan transmitterat tryck och inkommande. I simulering-
arna togs endast hänsyn till första maximala tryck som tryck-tidshistorierna
visade. Detta på grund av att i vissa fall med speciellt de högre laddnings-
storlekarna uppstod tryckuppbyggnad som kan liknas vid innesluten ex-
plosion, vilket inte är av intresse för denna studie.
I tabell 9:42c har reflexionskvoten från 64 simuleringar sammanfattats för
reflexion mot betongvägg. För EOS1-STR1, originalsandmodell för Sjöbo-
sanden, kan vi se att reflexionskvoten ligger från 1,76 till 1,82 beroende på
laddningens styrka. Jämförs detta med den enklare beräkningen som redovi-
sas i tabell 9:42a var reflexionen 1,88, vilket är rätt nära Autodynresultaten
som i medel ligger på 1,80. För fullt vattenmättad jord och reflexion mot
betongvägg så varierar resultatet med laddningsvikten från 1,44 för 125 kg
till 1,37 för 1000 kg, det vill säga att reflexionskvoten sjunker med ökande
laddningsvikt, se tabell 9:42c EOS4-STR4 som motsvarar fullt vattenmättad
lera. Jämförs dessa resultat med de enklare beräkningarna mellan lera och
betongvägg var reflexionskvoten på 1,41, se tabell 9:42a, och medelvärdet
för Autodyn-simuleringarna med fyra olika laddningsvikter låg på 1,41, vil-
ket då är samma resultat som de enklare beräkningarna.
Jordmaterial -A Reflexionsmaterial -B luft
r = 5 m
Fri utflöde

-- 169 of 311 --

Markstötvåg
2020-09-28 revidering 2 169
Tabell 9:42c. Reflexionskvot	
t /
I för olika modellerade jordtyper, se av-
snitt 8:2 och bilaga E, och betongvägg på laddningsavståndet 5 m.
EOS nr – kg TNT STR1 STR2 STR3 STR4
EOS1 125 1,76
1,79
1,82
1,81
1,78
1,81
1,84
1,88
1,80
1,84
1,86
1,92
1,84
1,87
1,92
1,93
250
500
1000
EOS2 125 1,79
1,76
1,75
1,82
1,77
1,76
1,74
1,80
1,78
1,83
1,89
1,88
1,92
1,94
1,97
2,05
250
500
1000
EOS3 125 1,76
1,70
1,75
1,68
1,73
1,77
1,73
1,69
1,76
1,80
1,81
1,78
1,73
1,74
1,82
1,59
250
500
1000
EOS4 125 1,47
1,44
1,42
1,40
1,49
1,44
1,40
1,37
1,48
1,47
1,38
1,36
1,44
1,43
1,41
1,37
250
500
1000
Samma upplägg av reflexionsberäkningar, det vill säga 64 simuleringar, ut-
fördes också mot stel vägg. Resultaten är sammanfattade i tabell 9:42d. Re-
sultaten bekräftar egentligen bara att reflexionskoefficienten är runt 2 oav-
sett laddningsstorlek och jordmaterial. Detta är också vad de enklare beräk-
ningarna visade, se tabell 9:42a.
Tabell 9:42d. Reflexionskvot	
t /
I för olika modellerade jordtyper, se av-
snitt 8:2 och bilaga E, och stel vägg på laddningsavståndet 5 m.
EOS nr – kg TNT STR1 STR2 STR3 STR4
EOS1 125 2,01
2,01
2,02
2,04
2,01
2,02
2,04
2,10
2,02
2,04
2,09
2,14
2,05
2,10
2,16
2,18
250
500
1000
EOS2 125 2,01
1,92
1,91
2,02
1,97
1,91
1,87
1,93
1,98
1,98
2,05
2,12
2,08
2,15
2,16
2,26
250
500
1000
EOS3 125 2,02
1,95
1,98
1,94
1,99
2,02
1,97
1,97
2,04
2,04
2,05
2,13
2,04
2,02
2,12
2,14
250
500
1000
EOS4 125 2,02
1,92
2,17
2,17
2,13
1,98
2,10
2,07
2,04
2,17
2,01
1,94
1,96
2,09
1,90
1,92
250
500
1000
I bilaga L redovisas de maximala trycken för simuleringarna och en mer
detaljerad beskrivning av hur simuleringarna utfördes.
9:5 Kraterbildning
I det här avsnittet ges en översikt om kraterbildning och hur olika paramet-
rar påverkar dess storlek och form. Tre av de viktigaste faktorerna är ladd-

-- 170 of 311 --

Markstötvåg
2020-09-28 revidering 2 170
ningsmängd, laddningsdjup och jordsammansättning. I DOE (1980) är det
bara de två första faktorerna som är beaktade. Det skalade laddningsdjupet
påverkar synnerligen formen på kratern. Om laddningen är placerad ovan
mark blir kraterformen mer utsmetad och platt, såsom illustreras i figur 9:5a.
Figur 9:5a. Illustration av en krater från en laddning som detonerar på negativt
laddningsdjup d. Där da och ra är synligt kraterdjup respektive kra-
terradie. Streckad linje illustrerar ursprunglig marknivå.
Om laddningsdjupet är lika med noll, det vill säga en ytdetonation, fås lite
djupare form på kratern och man har en del av kratern som börjar bli osynlig
som ofta kallas verklig krater, se figur 9:5b. Den verkliga kratern utgörs av
det jordmaterial som inte kastats upp men som blivit tydligt påverkad av
explosionen. Synlig krater är vad som kan observeras efteråt efter att upp-
kastad jord åter lagt sig i den verkliga kratern.
Figur 9:5b. Illustration av en krater från en laddning som detonerar på
laddningsdjup d = 0. Där da och ra är synligt kraterdjup respektive
kraterradie. Streckad linje illustrerar ursprunglig marknivå. Punkt-
linje illustrerar verklig kraterstorlek.
Om laddningen detonerar nergrävd men nära ytan, d > 0, det vill säga en
ytlig detonation, fås ännu mer djupgående krater jämfört med en laddning
som detonerar vid ytan eller i luften. Den frigjorda energin från sprängäm-
net förs till marken och leder till större kratervolym, se figur 9:5c.
Figur 9:5c. Illustration av en krater från en laddning som detonerar på positivt
laddningsdjup d nära ytan. Där da och ra är synligt kraterdjup res-
pektive kraterradie. Streckad linje illustrerar ursprunglig marknivå.
Punktlinje illustrerar verklig kraterstorlek.

-- 171 of 311 --

Markstötvåg
2020-09-28 revidering 2 171
Vid ett optimalt skalat laddningsdjup fås maximal kraterstorlek. Då fås den
största kratern som är möjlig. Om laddningen däremot detonerar på för djup
nivå så fås en kamouflerad krater där synlig krater är liten men verklig
krater kan vara stor under ytan, se figur 9:5e. Denna kamouflerade typ leder
till att explosionen ventileras mindre på grund av långt avstånd till ytan. För
ytterligare visualisering av kraterformer se ConWep (1992) eller
DOE (1980).
Figur 9:5d. Illustration av en krater från en laddning som detonerar på optimalt
laddningsdjup d för aktuell laddning. Där da och ra är synligt krater-
djup respektive kraterradie. Streckad linje illustrerar ursprunglig
marknivå. Punktlinje illustrerar verklig kraterstorlek.
Figur 9:5e. Illustration av en kamouflerad krater från en laddning som detone-
rar på stort laddningsdjup d för aktuell laddning. Där da och ra är
synligt kraterdjup respektive kraterradie. Streckad linje illustrerar
ursprunglig marknivå. Punktlinje illustrerar verklig kraterstorlek.

-- 172 of 311 --

Markstötvåg
2020-09-28 revidering 2 172
I avsnitt 9:22 ges en empirisk ekvation, ekvation (9:22ap), av
Lampson (1946) för hur kraterradie kan beräknas. Det är oklart huruvida
kraterradien i ekvation (9:22ap) hänvisar till verklig kraterradie eller synlig.
För att klargöra detta måste delrapporterna till slutrapporten studeras. För-
sök har gjorts för att få kopior av dessa delrapporter men utan resultat.
I DOE (1980) baserar sig de empiriska ekvationerna för kraterprediktion
från experiment så små som 5 gram C-4 till 750 lb bomber. Enligt
DOE (1980) kan kraterprediktion beskrivas med hjälp av skalningslagarna
𝑊1/3
𝑑 och 𝑊1/4
𝑑 (9:5a)
där W är laddningsvikten i [lb] och d är laddningsdjupet i [ft]. Den första
delen i ekvation (9:5a) relaterar laddningens frigjorda energi till jordens
kompressibilitetseffekter. Den andra delen i ekvation (9:5a) relaterar ladd-
ningens frigjorda energi till gravitationseffekter. Detta betyder att krater-
sambanden ibland har första ordningens beroende av frigjord energi från
laddningen och jordens kompressionseffekter och gravitationen är av
sekundärt beroende W1/3 / d. På liknande sätt kan sambanden ha W1/4 / d som
första ordningens effekt, vilket då betyder att gravitation är viktigt. Slutligen
kan vissa samband ha lika stort beroende av båda effekterna och då används
skalningen W7/24 / d. Denna fås genom att multiplicera båda skalfaktorerna
𝑊1/3
𝑑
𝑊1/4
𝑑 = 𝑊7/12
𝑑2 → 𝑊7/24
|𝑑| (9:5b)
I DOE (1980) är det första som behöver identifieras vilken typ av kratermod
som kommer att uppstå. Två värden, X och Y, måste beräknas
𝑋 = 4,605 + ln 𝑊1/4
𝑑 (9:5c)
𝑌 = (6,438 + 1,398ln 𝑊1/3
𝑑 ) tanh5 (2,00 + 0,4343 ln 𝑊1/3
𝑑 ) (9:5d)
där W är laddningsvikten i [lb] och d är laddningsdjupet i [ft]. Om X är
större än Y kommer en kamouflerad krater bildas. Detta kan också beskrivas
med
𝑋 > 𝑌 ger kamouflerad mod, se figur 9:5e (9:5e)
𝑋 < 𝑌 ger kratermod, se figur 9:5a-9:5d (9:5f)
Om värderna X och Y är ungefär lika är risken stor för att det faktiska fallet
kan bli antingen kratermod eller kamouflerad. DOE (1980) ger följande
ekvationer för verklig kraterradie, kraterdjup, och kratervolym om 𝑋 > 𝑌,
det vill säga att kratermod har påvisats
𝑟𝑡
𝑑 = 2,155 (𝑊1/3
𝑑 )
0,865
(9:5g)

-- 173 of 311 --

Markstötvåg
2020-09-28 revidering 2 173
𝑑𝑡
𝑑 = 2,312 (𝑊1/3
𝑑 )
0,683
(9:5h)
𝑣𝑡1/3
𝑑 = 2,046 (𝑊1/3
𝑑 )
0,785
(9:5i)
där W är laddningsvikten i [lb] och d är laddningsdjupet i [ft]. I figur 9:5f
visas nomenklaturen för använda kratermått.
Figur 9:5f. Använd nomenklatur för kratermått. Där da och ra är synligt krater-
djup och kraterradie. Där dt och rt är verkligt kraterdjup och krater-
radie.
Om kamouflerad mod har identifierats, det vill säga X > Y, då byts ekvation-
erna (9:5g) - (9:5i) ut med följande
𝑟𝑡
𝑑 = 1,053 (𝑊7/24
𝑑 )
0,865
(9:5j)
𝑑𝑡
𝑑 = 2,244 (𝑊7/24
𝑑 )
0,432
(9:5k)
𝑣𝑡1/3
𝑑 = 1,718 (𝑊7/24
𝑑 )
0,865
(9:5l)
där W är laddningsvikten i [lb] och d är laddningsdjupet i [ft].
Beräkningsexempel som jämför DOE (1980) och ConWep (1992)
Här utförs ett beräkningsexempel med 125 kg TNT begravt med laddnings-
djupet d = 2 m. Först omvandlas laddningsvikten till W = 275,58 [lb] och
laddningsdjupet till d = 6,56 [ft]. Därefter ger ekvation (9:5c) och (9:5d) att
X = 4,1 < Y = 5,3, vilket betyder att kratermod är aktuell. Ekvation-
erna (9:5g) och (9:5h) ger verklig diameter 2rt = 8,6 m, verklig kraterdjup

-- 174 of 311 --

Markstötvåg
2020-09-28 revidering 2 174
på dt = 4,6 m och verklig kratervolym vt = 144 m3. Notera att ingen beakt-
ning görs i DOE (1980) till vilket jordmaterial som laddningen är nedgrävd
i. Om nu dessa resultat jämförs med ConWep (1992) så beaktas just mark-
materialets betydelse.
I tabell 9:5a jämförs resultaten för beräkningsexemplet från ConWep (1992)
och DOE (1980). Resultaten visar att DOE (1980) estimerar innanför vad
torr sand och våt lera ger i resultat. Tabellen visar tydligt hur mycket större
en krater blir för de olika jordmaterialen enligt ConWep (1992). Både syn-
ligt kraterdjup och diameter nästan fördubblas när man jämför torr sand med
våt lera för samma belastningsfall. Detta är givetvis också en faktor som be-
höver tas hänsyn till om laddningen detonerar så nära byggnaden att den är
innanför kratervolymen.
Tabell 9:5a. Jämförelse mellan ConWep(1992) och DOE(1980) för 125 kg TNT
med laddningsdjup d = 2 m.
2rt / 2ra dt / da vt
synlig /
verklig
diameter [m]
synligt /
verkligt
djup [m]
volym
[m3]
ConWep torr sand 6,7 / 7,8 2,4 / 2,8 43
ConWep våt lera 11,8 / 13,5 4,8 / 4,8 259
DOE(1980) - / 8,6 - / 4,6 144
I figur 9:5g har resultat från ConWep (1992) sammanställts för flera olika
jordmaterial och hur kraterdiameter och kraterdjup varierar för olika ladd-
nindjup -1 m ≤ d ≤ 9 m. Vad som kan ses är att senare beräkningsmodeller
av kraterdimensioner som tar i beaktning materialets egenskaper är av stort
intresse.
Figur 9:5g. Resultat av kraterdimensioner från ConWep (1992) och
DOE (1980) för 125 kg TNT i olika jordmaterial.
0
2
4
6
8
10
12
14
-2 	0 	2 	4 	6 	8 	10
Synlig kraterdiameter och kraterdjup [m]
Laddningsdjup [m]
Torr lera kraterdjup 	Torr lera kraterdiameter 	Sandig lera kraterdjup
Sandig lera kraterdiameter 	Torr sand kraterdjup 	Torr sand kraterdiameter
Våt sand kraterdjup 	Våt sand kraterdiameter 	Våt sandig lera kraterdjup
Våt sandig lera kraterdiameter 	Våt lera kraterdjup 	våt lera kraterdiameter
DOE(1980)verkligt kraterdjup 	DOE(1980) verklig kraterdiameter 	DOE(1980) verklig kraterdjup
DOE(1980) verklig kraterdiameter

-- 175 of 311 --

Markstötvåg
2020-09-28 revidering 2 175
Om nu beräkningar av kraterdiameter görs med Lampson (1946), se
ekvation (9:22ap), så är inte bara laddningsdjupet av vikt utan även vilken
typ av jordmaterial som väljs. Den skalade laddningsdjupet för vårt tidigare
exempel, med 125 kg TNT på laddningsdjupet 2 m, blir
λ = d/W 1/3 = 1,0 [ft/lb1/3]. Detta ger enligt figur 9:22e en laddningsdjupfak-
tor på Dc = 0,9. Alltså inte riktigt maximal utdelning för kraterbildning men
bra nära maximal Dc.
Om nu radien beräknas för lös silt och mättad lera så tas jordkonstanterna
fram enligt tabell 9:22c och ger k = 800 och 100 000, vilket ger jordfaktorer
Sc = 2,27 och 3,40. Detta ger slutligen kraterdiameter för lös silt på 8 m och
för mättad lera 18 m. Enligt ConWep (1992) stämmer 8 m ganska bra för
silten, se figur 9:5g och jämför med exempelvis våt sand. Men den mättade
lerans 18 m i diameter verkar vara en överprediktering i jämförelse med
ConWep (1992), se igen figur 9:5g, vilket visar maximal kraterdiameter på
cirka 12 m.

-- 176 of 311 --

Markstötvåg
2020-09-28 revidering 2 176
10 Modifiering av materialmodell i
Autodyn för torr sand (Sjöbo)
10:1 Orientering
I kapitel 9 visas hur enkla empiriska samband kan beskriva lasten från en
markstötvåg. Men för att göra detaljerade analyser av hur en nedgrävd kon-
struktion med kanske även komplex geometri motstår ett visst dynamiskt
lastfall så behövs materialmodeller som kan beskriva jorden i detalj. Detta
kapitel visar hur existerande materialmodell för torr sand (Sjöbo) som finns
i standardbiblioteket i Autodyn har reviderats för att bättre kunna beskriva
sanden för fler dynamiska lastfall, Laine och Sandvik (2001).
Efter användande av befintlig materialmodell, Moxnes et al. (1999), och av
framtagna materialvärden enligt materialmodellen för den torra Sjöbo san-
den, Laine och Sandvik (2001), har vissa iakttagelser gjorts. Det har fram-
kommit att materialmodellen fungerar väl för simuleringar i närområdet,
såsom för nedgrävda minor med endast tunt jordskikt, vilket leder till höga
tryck i jorden, se exempelvis Laine et al. (2001b) samt Ranestad och
Laine (2003).
Vid markstötvåg för längre skalade avstånd än R > 1 [m/kg1/3], så visar jäm-
förelser med ConWep (1992) dock att trycken är alltför höga i Autodyn-si-
muleringar med föreslagna materialdata och materialmodell enligt Laine
och Sandvik (2001). Därför föreslås en rad ändringar både på indata men
också en helt ny version av själva materialmodellen Moxnes et al. (1999). I
denna version har tillståndsekvationen modifierats medan skjuvhållfast-
hetsmodell enligt Moxnes et al.(1999) har behållits. I avsnitt 10:2 behandlas
modifiering av tillståndsekvationen och även indata till den nya tillstånds-
ekvationen. I avsnitt 10:3 jämförs sedan resultat mellan originalmaterialmo-
dell Laine och Sandvik (2001) med modifierad materialmodell och med
ConWep (1992).
10:2 Modifiering av tillståndsekvation (EOS)
Den elastiska avlastningen och dess våghastighet är enligt
Moxnes et al. (1999) endast beroende av densiteten, 𝑐(𝜌). Detta är dock ej
korrekt för porösa material, se exempelvis avsnitt 5:4 och Zimmer (2003),
som visar att tryck- och skjuvvågor är starkt tryckberoende. I Laine och
Larsen (2009), se Bilaga Y, görs ett första försök att kartlägga hur den elas-
tiska avlastningen och dess våghastighet både beror på tryck och densitet
𝑐(𝜌, 𝑃). I figur 10:2a visas hur avlastningshastigheten är en yta som är både
beroende av densiteten och trycket. I originalmodellen av EOS:en

-- 177 of 311 --

Markstötvåg
2020-09-28 revidering 2 177
Moxnes et al. (1999) så kan då bara översta krönet längs densitetslinjen ges
som indata, se streckad linje i figur 10:2a.
Figur 10:2a. Från experiment framtagen avlastningshastighet c som funktion av
densitet och tryck för Sjöbo-sand, Laine och Larsen (2009).
Streckad linje illustrerar möjlig indata enligt Moxnes et al. (1999).
Den slutliga modifierade versionen av hur den elastiska våghastigheten
𝑐(𝜌, 𝑃) beräknas i den föreslagna tillståndsekvationen redovisas i av-
snitt 10:21 och i avsnitt 10:22 ges indata.
10:21 Modifiering av av- och pålastningskurva
Indatat till den modifierade EOS:en har realiserats genom att ange tre obe-
roende multilinjära kurvor. Den första är den plastiska kompakteringskurvan
𝑃𝑐(𝜌) som ansluter till teoretiska maximumdensitetslinjen (TMD-linje), se
figur 10:21a. Den andra är initiell våghastighet från plastiska kompakte-
ringskurvan som funktion av densiteten längs en linje där trycket är lika
med noll 𝑐𝑏(𝜆), där 𝜆 = 𝜌(𝑃 = 0). Den tredje bitvis linjära kurvan beskri-
ver hur avlastningskurvan kröker med hjälp av en exponentiell kurvfaktor
som funktion av densiteten längs en linje där trycket är lika med noll 𝛾(𝜆).

-- 178 of 311 --

Markstötvåg
2020-09-28 revidering 2 178
Figur 10:21a. Plastisk kompakteringskurva, teoretisk maximumdensitetslinje
(TMD-linje) och avlastningskurva som streckad linje.
Avlastningskurvan beskrivs av följande ekvationer
𝑐𝑏(𝜆)2 = 𝑃𝑐(𝜆+𝜌𝐿(𝜆))
𝜌𝐿(𝜆) (10:21a)
och
𝑃UL(𝜌) = 𝑃c(𝜆+𝜌L(𝜆))
e𝛾(𝜆)−1 (e
𝛾(𝜆)
𝜌L(𝜆)(𝜌−𝜆) − 1) (10:21b)
där λ är densiteten i 𝜌 − 𝑃-rummet längs 𝑃 = 0 linjen, 𝜌L(𝜆) är 𝜌-rummet
och beskrivs av det horisontala avståndet hos en av- eller pålastningskurva,
se figur 10:21a. Ekvationerna (10:21a) och (10:21b) beskriver sambandet
mellan 𝜌-rummet och våghastigheten 𝑐𝑏. Några av huvudegenskaperna för
𝑃UL(𝜌) i ekvation (10:21b) är att när densiteten är vid dess ytterligheter i 𝜌-
rummet så fås följande
𝑃UL(𝜌 = 𝜆) = 0 (10:21c)
𝑃UL(𝜌 = 𝜆 + 𝜌L(𝜆)) = 𝑃𝑐 (10:21d)
En annan huvudegenskap för 𝑃UL(𝜌) i ekvation (10:21b) hur den varierar
med den exponentiella kurvfaktorn 𝛾(𝜆) varieras mellan sina ytterligheter.
Först när den går mot noll

-- 179 of 311 --

Markstötvåg
2020-09-28 revidering 2 179
lim
𝛾(𝜆)→0 𝑃𝑈𝐿(𝜌) = 𝑃𝑐(𝜆+𝜌𝐿(𝜆))
𝜌𝐿(𝜆) (𝜌 − 𝜆) = 𝑐𝑏(𝜆)2(𝜌 − 𝜆) (10:21f)
vilket innebär att linjär avlastningskurva modelleras såsom ursprunglig EOS
enligt Moxnes et al. (1999). Sedan när kurvfaktorn går mot oändligheten
lim
𝛾(𝜆)→∞ 𝑃𝑈𝐿(𝜌) = { 0 if 𝜆 ≤ 𝜌 < 𝜆 + 𝜌𝐿(𝜆)
𝑃𝑐(𝜆 + 𝜌𝐿(𝜆)) if 𝜌 = 𝜆 + 𝜌𝐿(𝜆) (10:21g)
så får man en omvänd skarp L-form på avlastningskurvan. Detta innebär att
ekvationerna (10:21a) och (10:21b) är ett relativt enkelt samband men ett
kraftfullt sätt att beskriva av- och pålastning i hela 𝜌 − 𝑃-rummet med hjälp
av indata givet som oberoende multilinjära kurvor för 𝑃𝑐(𝜌), 𝑐𝑏(𝜆) och
𝛾(𝜆).
Låt oss studera några olika värden på 𝛾(𝜆). I figur 10:21b visas 𝛾(𝜆) = 0, 5
och 100. Då kan vi notera att när 𝛾(𝜆) närmar sig ett värde nära 0 så blir av-
lastningen linjär. Med 𝛾(𝜆) = 5 så blir avlastningen böjd med flackare
avslutning när P närmar sig noll, vilket betyder att elastiska våghastigheten
också sjunker med trycket. Redan vid 𝛾(𝜆) = 100 så börjar den omvända
L-formen dominera. En kommentar är att 𝛾 värdet 100 som valdes för att
illustrera styrkan i den matematiska formuleringen inte direkt återspeglar ett
önskat beteende för avlastningen hos ett poröst jordmaterial.
Figur 10:21b. Olika avlastningskurvor beroende på den exponentiella kurvfak-
torn 𝛾(𝜆) = 0, 5 och 100 som angetts.

-- 180 of 311 --

Markstötvåg
2020-09-28 revidering 2 180
10:22 Modifierade indata till den modifierade EOS:en
Första indata till den modifierade EOS:en är den plastiska kompakterings-
kurvan. Den har inte modifierats med den tidigare föreslagna kurvan som
angetts i originalversionen av Sjöbosand-materialmodellen, Laine och
Sandvik (2001). I figur 10:22a redovisas den plastiska kompakteringskurvan
upp till TMD-linjen.
Figur 10:22a. Plastisk kompakteringskurva Pc för torr sand (Sjöbo) som funktion
av densitet. Oförändrad mellan modifierad EOS och EOS-original.
När det gäller avlastningshastigheten 𝑐𝑏 så baserades originalmodellens in-
data på mätta våghastigheter. Dessa mätta våghastigheter ökar med ökat
tryck i provkroppen såsom figur 10:22b visar. Dessa våghastigheter tende-
rade att vara en hel del högre än vad som kunde härledas genom att studera
den mekaniska avlastningskurvan där lutningen hos avlastningskurvan di-
rekt relaterar till kvadraten av avlastningshastigheten 𝑐𝑏, se ekvation (5:2a).

-- 181 of 311 --

Markstötvåg
2020-09-28 revidering 2 181
Figur 10:22b. Uppmätta elastiska våghastigheter Vp och Vs för torr sand (Sjöbo)
som funktion av trycket samt beräknad elastisk våghastighet c.
På grund av att det nya föreslagna indatat för avlastningshastigheten 𝑐𝑏
baserar sig mer på de mätta mekaniska avlastningarnas lutning så sänks 𝑐𝑏
som funktion av densitet något jämfört med originalindata, se figur 10:22c.
Figur 10:22c. Avlastningshastighet 𝑐𝑏(𝜆) som funktion av densiteten 𝜆 längs 𝑃 =
0 linjen.
0
500
1000
1500
2000
2500
3000
0 	10000 	20000 	30000 	40000 	50000 	60000 	70000
Vågshastighet,
 Vp och
 Vs, [m/s]
Tryck, P, [kPa]
NGI S-våg data
NGI P-våg data
Bästa anpassning S-våg
Bästa anpassning P-våg
beräknad elastisk våghastighet c

-- 182 of 311 --

Markstötvåg
2020-09-28 revidering 2 182
Krökningen hos avlastningskurvorna anpassades mot mätningar som fanns
både för de låga trycken som mättes i den mindre provcellmaskinen upp till
2 MPa och även för den större provcellsmaskinen upp till 60 MPa,
Heyerdahl och Madshus (2001). Formen hos avlastningarna beskrivs i den
nya tillståndsmodellen genom den exponentiella kurvfaktorn 𝛾(𝜆). Den har
arbetats fram främst från de mekaniska avlastningsmätningarna Heyerdahl
och Madshus (2001).
Dessa mätningar har dock inga avlastningsvärden för låga tryck, det vill
säga att jordmaterialet först belastas till ett isotropiskt tryck på 500 kPa eller
under och därefter avlastas till nolltryck. För dessa låga tryck så har indata
för den exponentiella kurvfaktorn baserat sig på hur trenden hos de högre
avlastningarna och därefter extrapolerats för att ge en uppfattning om hur de
borde se ut för tryck nära noll vid första avlastning. Se bilaga Y, Laine och
Larsen (2009) för hur avlastningsvågorna beskrevs som en yta för hela 𝜌 −
𝑃-rummet. Därefter användes en kurvfaktor för att studera effekten av olika
krökning för tryck nära noll, se bilaga Z. Dessa tillsammans resulterade i
indata enligt figur 10:22d för den exponentiella kurvfaktorn. Den generella
trenden är att kurvfaktorn börjar med ett värde runt 6 och går mot 0 när 𝜆
närmar sig teoretisk maxdensitet.
Figur 10:22d. Den exponentiella kurvfaktorn 𝛾(𝜆) som funktion av densiteten 𝜆
längs 𝑃 = 0 linjen.
I figur 10:22e redovisas avlastningskurvor som beräknats med hjälp av ek-
vationerna (10:21a) och (10:21b) för avlastning från 𝑃𝑐 = 4,58, 14,98 och
29,2 MPa. Dessa har liknande utseende som återfanns i de faktiska proven,
se exempelvis bilaga Y. I figur 10:22f redovisas avlastningar för 𝑃𝑐 = 0,05
och 0,46 MPa. Dess krökning baserar sig huvudsakligen på resultaten i bi-
laga Z.

-- 183 of 311 --

Markstötvåg
2020-09-28 revidering 2 183
Figur 10:22e. Avlastningskurvor från Pc = 4,58 MPa, 14,98 MPa och 29,2 MPa
enligt föreslagen indata för modifierad EOS.
Figur 10:22f. Avlastningskurvor från Pc = 0,05 MPa och 0,46 MPa enligt föresla-
gen indata för modifierad EOS.
Dessa indata för Sjöbosand är bara ett exempel på indata för den modifie-
rade EOS:en. Den framtagna EOS:en är ett kraftfullt sätt att beskriva till-
ståndsekvationen för porösa material, vilket kommer undersökas vidare. In-
data som redovisas här för Sjöbosand-originalmodellens beteende simulerad
med modifierad EOS och modifierad EOS med modifierad indata återges i
bilaga Z.
0
50
100
150
200
250
300
350
400
450
500
1.674 	1.676 	1.678 	1.68 	1.682
Tryck,
 P [kPa]
Densitet, ρ [g/cm3]
Plastisk kompakteringskurva, Pc
Avlastning från Pc=0.46 MPa
Avlastning från Pc=0.05 MPa

-- 184 of 311 --

Markstötvåg
2020-09-28 revidering 2 184
10:3 Resultat från Autodyn-simuleringar
För att verifiera den modifierade EOS:en har detonationssimuleringar ut-
förts i en dimension. Detta har gjorts med så kallad tårtbitsteknik, även
kallat Wedge-simuleringar, vilket simulerar fri sfärisk spridning. wedgen
formades med en inre radie av 25 mm och en yttre radie av 200 000 mm.
Eulerlösning användes med ett nät bestående av 3000 celler. Cellerna
närmast explosionscentrum hade en längd på 5 mm, och därefter användes
geometrisk utsmetning av cellerna, där cellerna längst bort gavs den längsta
längden. Total simulerad tid var 1 s. Multimaterial Euler användes för att
beskriva sprängämnet och sanden. Laddningsvikten sattes till 125 kg TNT.
Ankomsttid, tryck och impuls mättes på laddningsavstånden/radien 2, 5, 10,
25 och 40 meter.
Först jämfördes ”Sjöbo Sand original -endast EOS” med ”Modifierad Sjöbo
Sand -endast MODEOS4”, vilken är den modifierade versionen vars källkod
återges i bilaga Z. För laddningsavståndet r = 5 m så skiljer sig resultaten
inte mycket mellan de olika modellerna, se figur 10:3a. Även resultaten från
ConWep är i samma storleksordning.
Figur 10:3a. Original EOS och modifierad EOS plus ConWep för laddnings-
avståndet 5 m.
När laddningsavståndet ökas till 10 m så börjar originalmodellen och den
modifierade EOS:en att skilja sig i maxtryck, se figur 10:3b. Maxtrycket är
cirka 34 % lägre när sanden simuleras med den modifierade EOS:en. Tryck-
avlastningen är också flackare i den modifierade EOS:en, vilket kan ses
genom att efter cirka 60 ms så är trycket kontinuerligt högre för modifierade
EOS:en, se figur 10:3b.
0
500
1 000
1 500
2 000
2 500
0 	10 	20 	30 	40 	50 	60 	70 	80 	90 	100
Tryck
 P(t) [kPa]
Tid t [ms]
Conwep c=300 m/s rho=1674 kg/m^3 n=2.7
Conwep c=300 m/s rho=1674 kg/m^3 n=2.9
Sjöbo Sand Original -endast EOS
Modifierad Sjöbo Sand -endast MODEOS4

-- 185 of 311 --

Markstötvåg
2020-09-28 revidering 2 185
Figur 10:3b. Original EOS och modifierad EOS plus ConWep för laddnings-
avståndet 10 m.
När laddningsavståndet ökas till 25 m så börjar resultaten från originalmo-
dellen och modifierade EOS:en att skilja sig än mer, se figur 10:3c. Max-
trycket sjunker nu med 65 % om modifierad EOS används för att simulera
sanden, samt formen på tryckavlastningen är fortsatt flackare med den mo-
difierade EOS:en.
Figur 10:3c. Original EOS och modifierad EOS plus ConWep för laddnings-
avståndet 25 m.
När laddningsavståndet ökas till 40 m så har maxtrycket sjunkit med 75 %
om den modifierade EOS:en används för att simulera sanden, se figur 10:3d.
Sammanställning av ankomsttid, maxtryck och impulsintensitet återfinns i
tabell 10:3a. Tabellen visar även att när originalmodellen emuleras med den

-- 186 of 311 --

Markstötvåg
2020-09-28 revidering 2 186
modifierade EOS:en så är det bra överensstämmelse på maxtryck och
impulsintensitet, se exempelvis ”Original EOS, ingen skjuvhållfasthet” och
”Emulerad EOS, ingen skjuvhållfasthet” i tabell 10:3a.
Figur 10:3d. Original EOS och modifierad EOS plus ConWep för laddnings-
avståndet 40 m.
Tabell 10:3a. Sammanställning av maxtryck och maximpulstäthet för de olika
simuleringarna som endast har EOS, det vill säga ingen skjuvhåll-
fasthet.
EOS namn – avstånd m ta [ms] Pmax [kPa] imax [Pa s]
Original EOS, ingen
skjuvhållfasthet
2 4 11 607
1 932
798
289
173
62 543
41 555
27 810
11 621
7 155
5 14
10 32
25 87
40 142
Emulerad EOS, ingen skjuvhåll-
fasthet
2 4 11 570
1 928
798
296
178
62 426
41 571
27 853
11 705
7 249
5 14
10 32
25 86
40 142
40 110
Mod EOS ingen skjuvhållfasthet 2 4 11 975
1 903
525
100
44
63 363
40 985
27 509
11 330
6 813
5 14
10 31
25 86
40 142
ConWep med generiska sanddata
𝑐 = 300 m/s
𝜌 = 1674 kg/m3
𝑛 = 2,7
2 7 18 040
1 520
234
20
6
120 257
25 334
7 801
1 643
739
5 17
10 33
25 83
40 133
ConWep med generiska sanddata
𝑐 = 300 m/s
𝜌 = 1674 kg/m3
𝑛 = 2,9
2 7 17 640
1 237
166
12
3
117 572
20 619
5 527
969
397
5 17
10 33
25 83
40 133

-- 187 of 311 --

Markstötvåg
2020-09-28 revidering 2 187
Som sågs på tidigare resultat när endast EOS:en används utan hållfasthet fås
önskad effekt med maxtrycksänkning och flackare trycksänkning som
funktion av tiden med den modifierade EOS:en, se figur 10:3b-10:3d. Där-
emot fås inte de trycknivåer som ConWep visar, vilka generellt är lägre för
dessa laddningsavstånd. I figur 10:3e redovisas resultat vid laddningsav-
ståndet 5 m för “Sjöbo Sand original” som jämförs med ”Modifierad Sjöbo
Sand” i tillägg till vad som redan visades i figur 10:3a.
Först kan det noteras att när sanden modelleras med skjuvhållfasthetsmo-
dellen så blir trycknivåerna markant lägre än när bara EOS används. Detta
är på grund av att nu går även energi åt att plastiskt skjuva materialet. Dess-
utom är ankomsttiden kortare när skjuvhållfastheten inkluderas i materiabe-
skrivningen, vilket kan förklaras med att den longitudinella våghastigheten
byggs upp av både våghastighet från EOS och från skjuvhållfastheten, se
exempelvis ekvation (6:2j) och bilaga D. När resultaten jämförs mellan de
som modelleras med skjuvhållfasthet noteras att ”Modifierad Sjöbo Sand”
har lägre maxtryck än originalmodellen.
Figur 10:3e. Original EOS och modifierad EOS med skjuvhållfasthetsmodell
plus ConWep för laddningsavståndet 5 m.
Denna skillnad i maxtryck ökar när laddningsavståndet ökas till 10 m, se fi-
gur 10:3f. Nu när trycken är lägre än 100 kPa, tenderar den nya modifierade
Sjöbosand-EOS:en oscillera när skjuvhållfasthetsmodellen används. Därför
ges även tryckkurvan som rullande medelvärde.

-- 188 of 311 --

Markstötvåg
2020-09-28 revidering 2 188
Figur 10:3f. Original EOS och modifierad EOS med skjuvhållfasthetsmodell
plus ConWep för laddningsavståndet 10 m.
Denna trend med större skillnad med lägre tryck för den nya modifierade
EOS:en som funktion av ökat laddningsavstånd stämmer även för när
skjuvhållfastheten har inkluderats. I figur 10:3g och 10:3h visas resultat för
laddningsavstånden 25 m och 40 m.
Figur 10:3g. Original EOS och modifierad EOS med skjuvhållfasthetsmodell
plus ConWep för laddningsavståndet 25 m.

-- 189 of 311 --

Markstötvåg
2020-09-28 revidering 2 189
Figur 10:3h. Original EOS och modifierad EOS med skjuvhållfasthetsmodell
plus ConWep för laddningsavståndet 40 m.
I tabell 10:3b sammanställs alla simuleringar. En iaktagelse som kan göras
är att om man vill närma sig resultaten som ConWep visar för avståndet på
40 m så måste skjuvhållfastheten tas med. Den gör att energi tas upp plas-
tiskt i materialet i tillägg till energiförlusterna genom EOS:en. I tabell 10:3b
kan vi se att ”Mod EOS med skjuvhållfasthet” har 4 kPa i maxtryck och
impulstätheten 767 Pa s. Detta är väldigt nära värdena från ConWep med
n = 2,7 där maxtrycket var 6 kPa och impulstätheten var 739 Pa s.

-- 190 of 311 --

Markstötvåg
2020-09-28 revidering 2 190
Tabell 10:3b. Komplett sammanställning av maxtryck och maximpulstäthet för de
olika simuleringarna.
EOS namn – avstånd m ta [ms] Pmax [kPa] imax [Pa s]
Original EOS ingen
skjuvhållfasthet
2 4 11 607
1 932
798
289
173
62 543
41 555
27 810
11 621
7 155
5 14
10 32
25 87
40 142
Emulerad EOS ingen skjuvhåll-
fasthet
2 4 11 570
1 928
798
296
178
62 426
41 571
27 853
11 705
7 249
5 14
10 32
25 86
40 142
Original EOS, med skjuvhållfast-
het
2 3 4 043
644
189
36
14
103 098
25 864
9 256
2 393
907*
5 11
10 25
25 67
40 110
Emulerad Original EOS med
skjuvhållfasthet
2 3 4 032
642
189
37
14
96 493
24 561
9 127
2 623
1 316
5 11
10 25
25 67
40 110
Mod EOS ingen skjuvhållfasthet 2 4 11 975
1 903
525
100
44
63 363
40 985
27 509
11 330
6 813
5 14
10 31
25 86
40 142
Mod EOS med skjuvhållfasthet 2 3 4 214
449
80
10
4
90 454
23 387
8 726
2 336
767*
5 11
10 25
25 67
40 111
ConWep med generiska sanddata
𝑐 = 300 m/s
𝜌 = 1674 kg/m3
𝑛 = 2,7
2 7 18 040
1 520
234
20
6
120 257
25 334
7 801
1 643
739
5 17
10 33
25 83
40 133
ConWep med generiska sanddata
𝑐 = 300 m/s
𝜌 = 1674 kg/m3
𝑛 = 2,9
2 7 17 640
1 237
166
12
3
117 572
20 619
5 527
969
397
5 17
10 33
25 83
40 133
*Summering av tryck under 1 kPa var borttagna när impulstätheten beräknades
över tiden 0 till 1 000 ms.
Slutligen, de ändringar som föreslagits i den modifierade EOS:en kan i
simulering visas ha stor inverkan på tryckvågens form för större laddnings-
avstånd än 𝑅 > 1 [m/kg1/3] vilket också var målet med denna modell.
Arbete som återstår är att anpassa en skjuvhållfasthetsmodell till den nya
EOS:en. Denna skjuvhållfasthetsmodell bör inkludera de effekter som
Zimmer (2003) påvisade om tvärkontraktionstalets tryckberoende och hur
vattenmättnadsgraden påverkar tvärkontraktionstalet, se även avsnitt 5:4.

-- 191 of 311 --

Markstötvåg
2020-09-28 revidering 2 191
11 Slutsatser och diskussioner
En av huvudslutsatserna i denna rapport är att det som påverkar markstötvå-
gens storlek och varaktighet förutom laddningens typ, vikt, avstånd till stu-
derad punkt och nedgrävningsdjup är jordens materialegenskaper. De vik-
tigaste materialegenskaperna för marken är hur poröst jordmaterialet är,
kornens typ samt hur vattenmättat det är. Det mest ogynnsamma, det
material som mest effektivt vidarebefordrar en stötvåg, är om jordmaterialet
har hög densitet och är fullt vattenmättat.
Efter genomgång av relevanta referenser för empiriska ekvationer som be-
skriver markstötvåg så är en av slutsatserna att de beskriver markstötvågen
relativt bra för skalade laddningsavstånd som är större än 0,5 m/kg1/3, exem-
pelvis Drake och Little (1983) och ConWep (1992). För att kunna beskriva
markstötvåg mer fysikaliskt och även närmare laddningen så har uppdate-
ringsförsök av dessa empiriska ekvationer gjorts i Drake et al. (1989); dessa
visar sig dock inte vara genomarbetade. Därför rekommenderas att fortsätta
använda ekvationer från Drake och Little (1983), vilka är desamma som
återfinns i ConWep (1992). I Laine och Larsen (2007) visades att kopplings-
faktorn, det vill säga hur mycket av den nedgrävda laddningens energi som
förs ner i marken, skulle behöva studeras närmare med experiment. För den
enkla ekvation och relation som beskriver kopplingsfaktorn i de empiriska
ekvationerna indikerar detaljerade FE-simuleringar att kopplingsfaktorn och
dess formulering skulle behöva ses över.
För att kunna beräkna markstötvåg i detalj, t.ex. runt ett hörn eller för en
komplex nedgrävd konstruktion, behöver jordmaterialets egenskaper beskri-
vas. De viktigaste egenskaperna beskrivs med hjälp av tillståndsekvationen
för jordmaterialet, både under på- och avlastningsfasen. I rapporten redogörs
för en modifierad tillståndsekvation till FE-programmet Autodyn som tillå-
ter användaren att specificera avlastningen på ett enkelt sätt. Den framtagna
tillståndsekvationen kan beskriva avlastningen under hela densitets- och
tryckrummet. Källkoden är bifogad som bilaga. Det som återstår är att ut-
veckla en skjuvmodell som är direkt anpassad till den nya tillståndsmo-
dellen. En sådan skjuvmodell bör inkludera relevanta egenskaper såsom hur
tvärkontraktionen varierar med tryck och hur tvärkontraktionen påverkas av
vattenmättnad för sand, se Zimmer (2003).
Slutligen, ett passivt skydd framför den nedgrävda konstruktionen är en bra
lösning om man vill försäkra sig om att minska den skyddade struk-
turens/byggnadens påverkan vid markstötvåg. Detta skydd kan skapas ge-
nom att använda ett torrt poröst jordmaterial eller Leca med 10-20 mm
kornstorlek. Dock måste man ha tillräcklig tjocklek för aktuellt hot hos det
passiva skyddet. Dessutom måste man se till att det passiva skyddsskiktet är
väldränerat och har ett avskiljande skikt till resten av jordmassorna, detta för
att försäkra sig om att skyddet fungerar när det väl behövs.

-- 192 of 311 --

Markstötvåg
2020-09-28 revidering 2 192
12 Litteraturförteckning
Atkinson, J. H. och Sällfors, G. (1991): Experimental determination of
stress–strain–time characteristics in laboratory and in situ tests, General
report to Session 1, Proc. 10th Eur. Conf. Soil Mech. Found. Engng,
Florence 3, 915–956.
Balazs P. (1999): Fullskaleförsök med armerade betongplattor i morän be-
lastade med markstötvåg från detonerade bomber, Försvarets Forsknings-
anstalt, Avd Vapen och Skydd, Stockholm.
Balazs P. (1995): Armerade betongplattor utsatta för markstötvågs-
belastning, Försvarets Forskningsanstalt, Avd. Vapen och Skydd,
Stockholm.
Bulson P. (1997): Explosive Loading of Engineering Structures, ENFN
SPON, London, England.
Century Dynamics Inc. (2003): Autodyn Theory Manual Revision 4.3, San
Ramon, CA, USA.
ConWep (1992): Collection of conventional weapons effects calculations
based on TM 5-855-1, Fundamentals of Protective Design for Conventional
Weapons, U.S. Army Engineer Waterways Experiment Station, Vicksburg,
USA.
Desai C. S. och Siriwardane H. J. (1984): Constitutive Laws for Engineering
Materials with Emphasis on Geologic Materials., Prentice-Hall Inc., New
Jersey, USA.
Davish P., Labuz J.F., Guzina B, och Drescher A. (2004): Small Strain and
Resilient Modulus Testing of Granular Soils, Department of Civil
Engineering, University of Minnesota, U.S.A., rapport nr: 2004-39.
Dobratz B.M. och Crawford P.C. (1985): LLNL Explosives Handbook,
Properties of Chemical Explosives and Explosive Simulants, Lawrence
Livermore National Laboratory, California, USA.
DOE (1980): Manual for the Prediction of Blast and Fragment Loadings on
Structures, U.S. Department of Energy, Rapport nummer DOE/TIC-11268,
USA.
Drake J.L. och Little Jr C.D. (1983): Ground Shock from Penetrating
Conventional Weapons, Interaction of Non-nuclear Munitions with
Structures, U.S. Air Force Academy, USA.

-- 193 of 311 --

Markstötvåg
2020-09-28 revidering 2 193
Drake J.L., Smith E. B., och Blouin S.E. (1989): Enhancements of the
Prediction of Ground Shock from Penetrating Weapons, Fourth Int. Symp.
on the Interaction of Non-nuclear Munitions with Structures.
Drucker, D. C. och Prager, W. (1952): Soil mechanics and plastic analysis
for limit design. Quarterly of Applied Mathematics, vol. 10, no. 2, pp. 157–
165.
Forsén R. och Sandberg P. O. (2002): Skaktålighet hos komponenter i skyd-
dade anläggningar vid påverkan av markstötvågor från konventionella
vapen, Räddningsverket, B54-217/02, Karlstad, Sverige.
Hallquist J. (2003): LS-DYNA THEORETICAL MANUAL, Livermore
Software Technology Corporation (LSTC), Livermore, CA, USA.
Hansbo S. (1975): Jordmateriallära, Almqvist & Wiksell, Uppsala, Sverige.
Hertel E.S och Kerley G. (1998): CTH Refence Manual: The Equation of
State Package, Sandia National Laboratories, SAND98-0947, USA.
Heyerdahl H. och Madshus C. (2000): EOS-data for sand, Triaxial tests on
sand from Sjöbo, Norges Geotekniske institutt, 20001157-1, Oslo, Norge.
Heyerdahl H. och Madshus C. (2001): EOS-data for LECA, Triaxial tests on
LECA under high pressures, Norges Geotekniske institutt, 2001157-2, Oslo,
Norge.
Johansson M. (2002): Stötvågsutbredning i luft, Räddningsverket, B54-
223/02, Karlstad.
Johansson M. och Laine L. (2007): Bebyggelsens motståndsförmåga mot
extrem dynamisk belastning Delrapport 1 – Last av luftstötvåg. Räddnings-
verket, B54-232/07.
Johansson M. och Laine L.(2008): Bebyggelsens motståndsförmåga mot
extrem dynamisk belastning Delrapport 2 – Explosion i gatukorsning.
Räddningsverket, B54-240/08, Karlstad.
Johansson M. och Laine L.(2009): Bebyggelsens motståndsförmåga mot
extrem dynamisk belastning Delrapport 3 – Kapacitet hos byggnader.
Myndigheten för Samhällsskydd och beredskap, MSB 0142-10, Karlstad.
Kerley G. (2001): Numerical Modeling of Buried Mine Explosions, Army
Research Laboratory, pp 30, USA.
Kerley G. (2002): The effects of soil type on numerical simulations of
buried mine explosions, Kerley Technical Services, USA.
Kerley G. (2005): On the Numerical simulation of buried mine Explosion:
Choosing constitutive Models, Kerley Technical Services, USA.

-- 194 of 311 --

Markstötvåg
2020-09-28 revidering 2 194
Kerley G. (1991): User's Manual for PANDA II: A Computer Code
Calculating Equation of State, Sandia National Laboratories, SAND88-
2291, USA.
Kerley G. (2010): EOSPRO CODE: An Interim Report, version 3.00, 1
January 2010, Kerley Technical Services, USA.
Kerley G. (2011): Hemsida http://www.kerleytechnical.com.
Laine L. och Larsen O.P. (2009): Proposal on How to Model the Unloading
in a Compaction Equation of State based upon Tri-axial tests on Dry Sand,
80th Shock & Vibration Symposium, San Diego, CA
Laine L. och Larsen O.P. (2007): Numerical Study of How the Ground
Shock Coupling Factor is influenced by Soil Properties, 78th Shock &
Vibration Symposium, Philadelphia, PA.
Laine L. (2006): Study of Planar Ground Shock in Different Soils and Its
Propagation Around a Rigid Block, 77th Shock & Vibration Symposium,
Monterey CA, U-007.
Laine L. (2002): Datorsimulering av markstötvåg i lösa jordarter, samt
utformning av passivt skydd mot markstötvågor, Räddningsverket,
B54-222/02, Karlstad.
Laine L. (2000:3): Räddningscentral (RC 90) utsatt för explosionslast vid
markytan, Sjöbo sand, Räddningsverket, B54-221/02, Karlstad.
Laine L. (2000:2): Räddningscentral (RC 90) utsatt för explosionslast vid
markytan, White Sand, Räddningsverket, B54-220/02, Karlstad.
Laine L. (2000:1): Räddningscentral (RC 90) utsatt för explosionslast vid
markytan, etapp II, Fluid / strukturkoppling med FE- programmet
ANSYS/LS-DYNA, Räddningsverket, B54-219/02, Karlstad.
Laine L. och Sandvik A. (2001): Derivation of mechanical properties for
sand, 4th Asian-Pacific conference on Shock and Impact Loads on
Structures, CI-Premier PTE LTD, vol. 4, pp 353-360, Singapore
Laine L. (2001): Numerical Simulations of Ground Shock Attenuation
Layers for Swedish Rescue Centres and Shelters, 4th Asian-Pacific
conference on Shock and Impact Loads on Structures, CI-Premier PTE
LTD, vol. 4, pp 361-368, Singapore.
Laine L., Ranestad Ø., Sandvik A., och Snekkevik A. (2001b): Numerical
simulations of anti-tank mine detonations, American Physics Society, from
Proceedings of 12th SCCM, Atlanta.
Lampson C.W. (1946): Final Report on Effects of Underground Explosions,
Div. 2, National Defense Research Committee of the US Office Scientific

-- 195 of 311 --

Markstötvåg
2020-09-28 revidering 2 195
Research and Development. NDRC Report No. A-479, OSRD Report No.
6645.
Leppänen J. (2004): Concrete Structures Subjected to Fragment Impacts,
Dynamic behaviour and Material modelling, Chalmers Tekniska Högskola,
Publikation nr 04:4 arkiv nr 31, Göteborg.
Leppänen J. (2012): Splitterverkan, Myndigheten för samhällsskydd och
beredskap, MSB, MSB345, ISBN: 978-91-7383-188-8,
www.msb.se/skyddsrum, Karlstad.
Marsh S.P. (1980): LASL SHOCK HUGONIOT DATA, University of
California Press, USA.
Mair, R. J. (1993): Developments in geotechnical engineering research:
applications to tunnels and deep excavations. Unwin Memorial Lecture
1992. Proc. Instn Civ. Engrs, Civ. Engng 3, No. 1, 27–41.
Meyers M.A. (1994): Dynamic Behaviour of Materials, John Wiley \&
Sons, Inc., New York, USA.
Moxnes J. F., Ødegårdstuen G., Atwood A., Curran P. (1999): Mechanical
properties of a porous material studied in a high-speed piston driven
compaction experiment, 30th ICT.
MSB (2009): Skyddsrum, SR 09, Myndigheten för samhällsskydd och
beredskap (MSB), författad av Ekengren B., Beställningsnummer
B54-141/09, Karlstad, Sverige.
Ranestad Ø. och Laine L. (2003): Numerical simulations of momentum
transfer from anti-tank mines, Mekit-03, Norges teknisk-naturvetenskaplige
universitet (NTNU), Trondheim, Norge.
Riedel W. (2000): Beton unter dynamischen Lasten Meso- und
makromechanische Modelle und ihre Parameter, Ernst-Mach-Institut, EMI-
Bericht 6/00, Freiburg, Tyskland.
Samuelsson A. och Wiberg N-E. (1993): Byggnadsmekanik, Hållfasthets-
lära, Sverige.
Santamarina J. C. (2001): Soils and Waves, Particulate Material Behaviour,
Characterization and Process Monitoring, J. Wiley & Sons Ltd, England.
Singh A. K. (2007): Mechanics of Solids, Prentice-Hall of India, New
Delhi.
Thoma K., Riedel W. och Hiermaier S. (1999): Mesomechanical modeling
of concrete Shock Response- Experiments and Linking to Macromechanics
by numerical analysis, European Conference on Computational Mechanics
ECCM, Munchen, Tyskland.

-- 196 of 311 --

Markstötvåg
2020-09-28 revidering 2 196
Viggiani G. och Atkinson J. H. (1995): Interpretation of bender element
tests, TECHNICAL NOTE, Geotechnique 45, No. 1, 149-154.
von Mises, R. (1913): Mechanik der festen Körper im plastisch deformablen
Zustand. Göttin. Nachr. Math. Phys., vol. 1, pp. 582–592.
Wardlaw A. B. jr (1996): Implementation and Application of the P-alpha
Equation of state in the DYSMAS code, Dahlgren Division Naval Surface
Center, Dahlgren, VA, USA. Report number NSWCDD/TR-95/107.
Wikipedia (2011): http://en.wikipedia.org/wiki/Yield_surface.
Zimmer M. A. (2003): Seismic velocities in unconsodilated sands:
Measurements of pressure, sorting, and compaction effects, doctors-
avhandling nr 3781 2004 Z, Stanford University, Department of
Geophysics, CA, U.S.A.

-- 197 of 311 --

Markstötvåg
2020-09-28 revidering 2 197
Bilaga A P-alpha modellen, där det solida
tillståndet modelleras med hjälp av
Mie-Gruneisen
Denna bilaga beskriver beräkningsrutinerna för P-alpha modellen som tagits
fram av Wardlaw (1996) för att beskriva jordmaterial med porositet för den
militära explicita programvaran DYSMAS. Ekvationerna har samma
numrering som originaltext.
EOS eller tillståndsekvationsmodelleringen i P-alpha modellen består av två
delar där den ena är Mie-Gruneisen som används för att beskriva det solida
tillståndet av jordens partiklar och vatteninnehåll. Den andra, P-alpha
modellen, beskriver tomrummet/luften som finns i den ej fullt kompakterade
jorden.
Mie-Gruneisen EOS
Mie-Gruneisen ger trycket P som funktion av densitet
 och energi e. Den
grundläggande formen är
𝑃 = 𝑃𝑟 (𝜌) + Γ0𝜌0(𝑒 − 𝑒𝑟(𝜌)) (A:1)
var Γ = 1
𝜌
𝜕𝑃
𝜕𝑒 och Γρ = Γ0ρ0. index r refererar till referenstillståndet vilken
är en isentrop, reversibelt, som passerar genom initiala punkten (𝑃0, 𝜌0, 𝑒0).
Referenstillståndet r definieras som
𝑒𝑟 = 𝑒0 + 𝜇 𝑃0
𝜌0
+ 𝑐𝑠
2𝜇2𝑌
2(1−𝑆𝜇) (A:2)
𝑃𝑟 = 𝑃0 + 𝑐𝑠
2𝜇2𝑌
2(1−𝑆𝜇) (𝑌 + 𝜇 𝑑𝑌
𝑑𝜇 + 𝑌
(1−𝑆𝜇)) (A:3)
där 𝑐𝑠 är det solida materialets våghastighet och
𝜇 = 1 − 𝜌0
𝜌 (A:4)
där 𝜇 är kompressionen som ges av initiell och aktuell densitet och
𝑌(𝜇) = ∑ 𝑎𝑘𝜇𝑘	5
𝑘=0 (A:5)
är 𝑌(𝜇) ett polynom där konstanterna ak är definierade av
𝑎0 = 1; 𝑎1 = 𝑆
3 ; 𝑎𝑘 = 1
𝑘+2 [(Γ0 + 𝑘𝑆)𝑎𝑘−1 − Γ0𝑆𝑎𝑘−2] (A:6)

-- 198 of 311 --

Markstötvåg
2020-09-28 revidering 2 198
där S är koefficienten som relaterar stötvågshastigheten till partikelhastighet
och Γ0 är Gruneisens konstant vid initial densitet 𝜌0. Notera att definitionen
av 𝑃𝑟 följs av 𝑒𝑟 genom
𝑃𝑟
𝜌2 = 𝜕𝑒𝑟
𝜕𝜌 (A:7)
eftersom referenstillståndet antas vara isentropisk. Med isentropisk menas
att processen mellan tillstånden är adiabatisk och reversibel. Adiabatisk
process ger inte från sig någon värme vilket innebär att materialets
energiinnehåll per massenhet är konstant.
Beräkning av våghastighet
DYSMAS koden kräver att materialets våghastighet c räknas ut. Denna är
härledd enligt följande
𝑐2 = (𝜕𝑃(𝜌,𝑒)
𝜕𝜌 )𝑠
, där s är det solida materialet
𝑐2 = (𝜕𝑃
𝜕𝜌)𝑒
(𝜕𝜌
𝜕𝜌)𝑠
+ (𝜕𝑃
𝜕𝑒)𝜌 (𝜕𝑒
𝜕𝜌)𝑠
, (A:8)
𝑐2 = (𝜕𝑃
𝜕𝜌)𝑒
+ (𝜕𝑃
𝜕𝑒)𝜌
𝑃
𝜌2 (insättning av A:7)
Med hjälp av ekvation (A:1) och (A:7) fås
(𝜕𝑃
𝜕𝑒)𝜌 = Γ0𝜌0, (A:9)
(𝜕𝑃
𝜕𝜌)𝑒
= 𝜕𝑃𝑟
𝜕𝜌 − Γ0𝜌0
𝜌2 𝑃𝑟, (A:10)
Om nu ekvation (A:9) och (A:10) sätts in i (A:8) fås uttrycket för våg-
hastigheten
𝑐2 = 𝜕𝑃𝑟
𝜕𝜌 − Γ0𝜌0
𝜌2 𝑃𝑟 + Γ0𝜌0
𝑃
𝜌2 =𝜕𝑃𝑟
𝜕𝜌 + Γ0𝜌0
𝜌2 (𝑃 − 𝑃𝑟 ) (A:11)
För att utvärdera c2 är det nödvändigt att beräkna 𝑑𝑃𝑟
𝑑𝜌 . Derivering av
ekvation (A:3) ger
𝑑𝑃𝑟
𝑑𝜌 = {
𝜇 = 1 − 𝜌0
𝜌
𝑑𝜇
𝑑𝜌 = 𝜌0
𝜌2
} = 𝜌0
𝜌2
𝑑𝑃𝑟
𝑑𝜇 = 𝑐𝑠
2𝜌𝑠
2
2(1−𝑆𝜇)𝜌2 ( 2𝑌
(1−𝑆𝜇)2 + 2𝜇(2−𝑆𝜇)
(1−𝑆𝜇)
𝑑𝑌
𝑑𝜇 + 𝜇2 𝑑2𝑌
𝑑𝜇2) (A:12)
Ekvation (A:12) visar hur 𝑑𝑃𝑟
𝑑𝜌 kan beräknas från solidkurvan och vetskap om
kompressionen.

-- 199 of 311 --

Markstötvåg
2020-09-28 revidering 2 199
Insättning av ekvation (A:11) i (A:10) ger följande samband som används i
DYSMAS EOS rutiner:
(𝜕𝑃
𝜕𝜌)𝑒
= [𝑐2 − Γ0𝜌0𝑃
𝜌2 ] (A:13)
Förändring av tillstånd
DYSMAS programvara kräver isentropisk samt Hugoniot förändring av
tillstånd. Givet ett initiellt tillstånd (𝜌1, 𝑒1) och en andra densitet, 𝜌2, kan
motsvarande energi 𝑒2 beräknas vilken är på ursprunglig isentrop eller
Hugoniot.
För en isentropisk process
𝑑𝑒 = 𝑃𝑑𝜌
𝜌2 = 1
𝜌2 [𝑃𝑟 + Γ0𝜌0(𝑒 − 𝑒𝑟)]𝑑𝜌 (A:14)
På grund av att referenstillståndet är isentropiskt, se ekvation (A:7), fås
𝑑𝑒𝑟 = 𝑃𝑟
𝜌2 𝑑𝜌 (A:15)
Insätts nu (A:15) i ekvation (A:14) fås
𝑑(𝑒−𝑒𝑟)
(𝑒−𝑒𝑟) = Γ0𝜌0
𝑑𝜌
𝜌2 (A:16)
Integrering av (A:16) resulterar i den isentropiska tillståndsförändrings-
ekvationen
𝑒2 = 𝑒𝑟(𝜌2) + [𝑒1 − 𝑒𝑟(𝜌2)]exp (Γ0𝜌0(𝜌2−𝜌1)
𝜌1𝜌2
) (A:17)
Hugoniot’s tillståndsförändring följer direkt från Hugoniotvillkoret för
energins bevarande, se exempelvis kapitel 3:23 ekvation 3:23n vilket ger
−𝑃1 + 𝑃2 = 2𝜌1𝜌2(𝑒2−𝑒1)
(𝜌2−𝜌1) (A:18)
Eliminering av e med hjälp av ekvation (A:1) och lösningen för P2 blir
𝑃2 = 𝑃1 + 𝜌1𝜌2𝐶−𝑃1(𝜌2−𝜌1)
(𝜌2−𝜌1)
2 −𝜌2𝜌1
Γ0𝜌0
(A:19)
där
𝐶 = {𝑒𝑟(𝜌2) − 𝑒𝑟(𝜌1) + 𝑃𝑟 (𝜌) + [𝑃𝑟(𝜌2)−𝑃𝑟(𝜌1)]
Γ0𝜌0
} (A:20)

-- 200 of 311 --

Markstötvåg
2020-09-28 revidering 2 200
P-alpha EOS
P-alpha ekvationen kan beskrivas med
𝑃 = 𝑃(𝛼, 𝜌, 𝑒) = 𝑃𝑠(𝛼𝜌,𝑒)
𝛼 (A:21)
där
𝛼 = 𝜌𝑠
𝜌 (A:22)
Här betecknar index s det solida materialet och de parametrar utan index
betecknar det porösa materialet. Villkoret för det porösa materialet beteck-
nas av funktionen
𝛼 = 𝐴(𝑃, 𝑃𝑡, 𝑃𝑚𝑎𝑥 ) (A:23)
Var 𝑃𝑡 är materialderivatan av P. Inom fluidberäkningar är det vanligt att
studera materialderivatan av tryckfältet,	P	u
t
P
Dt
DP i	i 	+


=	 . Det beskriver
hur material rör sig genom i det beräknade området. Stora bokstäver
används för att skilja från lokal tidsderivata vilket kan ses i högerledet är en
del av materialderivatan tillsammans med rörelsetermen, advektionen som
beskrivs som ett vektorfält. Positiva värden indikerar pålastning och
negativa värden indikerar avlastning. Parametern 𝑃𝑚𝑎𝑥 är maximala trycket
som materialet har upplevt under sin pålastning. Denna parameter följer
fluiden och används för att välja rimlig elastisk avlastning. För värden 𝛼 >
1, se ekvation (A:22), definieras det porösa materialets ljudhastighet som en
linjär funktion av porositet:
𝑐 = 𝑐𝑠 + (𝑐𝑒 − 𝑐𝑠) (𝛼−1)
(𝛼0−1) (A:24)
där 𝑐𝑒 är materialets initiella elastiska våghastighet och 𝑐𝑠 är det fullt
kompakterade materialets elastiska våghastighet. och När 𝛼 = 1, beräknas c
med hjälp av Mie-Gruneisens relationer. Såsom 𝛼 är definierat kan den
aldrig bli mindre än 1, se även figur A:a. I figur A:a ges en schematisk
illustration av funktionen (A:23). Som kan ses så har funktionen A flera
alternativa på- och avlastningsvägar. Vertikal axel är porositet som börjar på
talet 1 och horisontell axel är tryck.

-- 201 of 311 --

Markstötvåg
2020-09-28 revidering 2 201
Figur A:a. P-alfa modellen, elastiska kurvor 𝐴𝑒𝑙
𝑎,𝑏 och plastiska kurvan 𝐴𝑝𝑙.
Följande val i A för att välja lämpliga vägar:
1. När pålastning sker för första gången, så komprimeras materialet längs
elastiska kurvan 𝐴𝑒𝑙
𝑎 tills trycket 𝑃𝑒 har uppnåtts.
2. I respons till fortsatt belastning, så följs den plastiska kurvan 𝐴𝑝𝑙 tills
trycket 𝑃𝑠 är uppnått. Här tilldelas 𝛼 = 1 för alltid vid fortsatt
belastning.
3. Avlastningskurvan från en punkt på den plastiska kurvan, är längs den
elastiska avlastningskurvan 𝐴𝑒𝑙
𝑏 . Se exempel i figur A:a.
4. Från en position på en elastisk kurva, så följer pålastningen längs den
elastiska kurvan tills den plastiska kurvan uppnås. Vid fortsatt
belastning så följs den plastiska kurvan igen.
Ovanstående P-alpha beskrivning indikerar att tillståndet (𝑃, 𝑃𝑡, 𝑃𝑚𝑎𝑥)
befinner sig på plastisk kurva om materialderivatan 𝑃𝑡 > 0 och 𝛼 = 𝐴𝑝𝑙(𝑃);
annars befinner den sig på den elastiska kurvan som korsar den plastiska vid
det maximala trycket som materialet har upplevt 𝑃𝑚𝑎𝑥. Notera att A är en
monoton funktion av 𝑃, detta gör det möjligt att förenkla tidigare regel till
att ett tillstånd är på den plastiska kurvan om 𝑃 ≥ 𝑃𝑚𝑎𝑥 och annars är den på
den elastiska kurvan. Alternativt kan man använda 𝛼 för att studera om
tillståndet är på elastisk eller plastisk del. Då ser formuleringen ut som att
om 𝛼 ≤ 𝛼𝑚𝑖𝑛 så är den på plastisk kurva annars på elastisk. Här är 𝛼𝑚𝑖𝑛
minsta värdet som materialet upplevt i ett element eller cell. På grund av att
det är en historisk parameter, måste den följa fluiden och den är initierad
med att sätta 𝛼𝑚𝑖𝑛 = 𝛼𝑒. Denna regel kan uttryckas som
𝛼 = 𝐴(𝑃, 𝛼𝑚𝑖𝑛) = {𝐴𝑝𝑙(𝑃) om 𝐴𝑝𝑙(𝑃)≤𝛼𝑚𝑖𝑛
𝐴(𝑃, 𝛼𝑚𝑖𝑛) annars (A:25)
Om A inverteras så blir detta lösningen för P, se även figur A:b. Inversen
kan skrivas som
𝑃 = 𝑖𝑛𝑣𝐴(𝛼, 𝛼𝑚𝑖𝑛) = {𝑖𝑛𝑣𝐴𝑝𝑙(𝛼) om 𝛼≤𝛼𝑚𝑖𝑛
𝑖𝑛𝑣𝐴𝑒𝑙(𝛼, 𝛼𝑚𝑖𝑛) annars (A:26)

-- 202 of 311 --

Markstötvåg
2020-09-28 revidering 2 202
där 𝑖𝑛𝑣𝐴 är inversen av funktionen A. Ekvationen för den plastiska kurvan
är
𝐴𝑝𝑙(𝑃) = 1 + (𝛼𝑒 − 1) ( 𝑃𝑠−𝑃
𝑃𝑠−𝑃𝑒
)2
(A:27)
vilken kan inverteras för att få
𝑖𝑛𝑣𝐴𝑝𝑙(𝛼) = 𝑃𝑠 + (𝑃𝑠 − 𝑃𝑒) ( 𝛼−1
𝛼𝑒−1)1/2
(A:28)
Den elastiska kurvan beskrivs numera av följande linjära ekvation, se
Wardlaw (1996)
𝐴𝑒𝑙(𝑃, 𝛼𝑚𝑖𝑛) = 𝛼𝑚𝑖𝑛 + 𝑑𝐴𝑒𝑙(𝛼𝑚𝑖𝑛)
𝑑𝑃 (𝑃 − 𝑖𝑛𝑣𝐴𝑝𝑙(𝛼𝑚𝑖𝑛)) (A:29)
Invertering av ekvation A:29 ger
𝑖𝑛𝑣𝐴𝑒𝑙(𝛼, 𝛼𝑚𝑖𝑛) = 𝑖𝑛𝑣𝐴𝑝𝑙(𝛼𝑚𝑖𝑛) + ( 𝛼−𝛼𝑚𝑖𝑛
𝑑𝐴𝑒𝑙(𝛼𝑚𝑖𝑛)
𝑑𝑃
) (A:30)
Figur A:b. Möjliga lösningar av 𝑃(𝛼, 𝜌, 𝑒).
För beräkning av trycket och densiteten behövs följande olinjära relation
lösas iterativt för 𝛼
𝑃(𝛼, 𝜌, 𝑒) = 𝑖𝑛𝑣𝐴(𝛼, 𝛼𝑚𝑖𝑛) (A:31)

-- 203 of 311 --

Markstötvåg
2020-09-28 revidering 2 203
Lösningen av ekvation (A:31) kräver att man väljer lämplig förgrening av
𝑖𝑛𝑣𝐴(𝛼, 𝛼𝑚𝑖𝑛) varav det finns tre möjligheter: elastisk och plastisk, samt
solid när 𝛼 = 1. Valet görs i princip med följande grunder:
solidtillstånd om 𝑃(𝛼, 𝜌, 𝑒) ≥ 𝑃𝑠 eller 𝛼𝑚𝑖𝑛 = 1 (på grund av historisk
parameter)
plastiskt tillstånd om 𝑃(𝛼𝑚𝑖𝑛, 𝜌, 𝑒) > 𝑖𝑛𝑣𝐴(𝛼𝑚𝑖𝑛, 𝛼𝑚𝑖𝑛)
Om inget av dessa villkor uppfylls så beräknas skärningspunkten med
elastisk kurva 𝑖𝑛𝑣𝐴𝑒𝑙(𝛼, 𝛼𝑚𝑖𝑛). Därefter är beräkningen av densiteten 𝜌 för
givet 𝛼𝑚𝑖𝑛 och e en tvåstegsprocess. Beräkna 𝛼 med hjälp av ekvation
(A:26) därefter använd Mie-Gruneisens funktion för att bestämma ett värde
för 𝜌, vilket uppfyller
𝛼𝑃 = 𝑃𝑠(𝛼𝜌, 𝑒) (A:32)
Isentropisk tillståndsförändring beräknas med hjälp av
𝑒2 = 𝑒1 + ∫ 𝑃
𝜌2
𝜌2
𝜌1 𝑑𝜌 (A:33)
För ett P-alpha material, existerar inte en lösning i sluten form och denna
ekvation måste därför lösas med numerisk integration plus en iterativ
process eftersom nästa 𝛼, 𝛼2, oftast inte är tillgänglig. För 𝛼 = 1 kan
integrationen beräknas med den slutna formens lösning för Mie-Gruneisen
enligt ekvation (A:17). För djupare detaljer kring faktiskt implementation,
se Wardlaw (1996).

-- 204 of 311 --

Markstötvåg
2020-09-28 revidering 2 204
Bilaga B Explosivämnen och dess viktskal-
ningsfaktorer
Aktuell sprängämnesvikt multipliceras med ekvivalent viktfaktor enligt
tabell B:a för att få ekvivalent vikt i TNT.
Tabell B:a. Explosivämnen och dess viktskalningsfaktorer, Bulson (1997).
Explosivämne Ekvivalent vikt
Tryck
Ekvivalent vikt
Impuls
ANFO (9416 Am Ni/Fuel oil) 0,82 0,82
Composition A-3 1,09 1,07
Composition B 1,11 0,98
Composition C-4 1,37 1,19
Cyclotol(70/130)(RDX/TNT) 1,14 1,09
HBX-1 1,17 1,16
HBX-3 1,14 0,97
H-6 1,38 1,15
Minol II 70/30 (HMX/TNT) 1,20 1,11
Octol 75/25 1,06 1,06
PETN 1,27
Pentolite 1,42 1,00
Tetryl 75/25 (TETRYL/TNT) 1,07
Tetrytol 70/30 1,06
TNETB 1,36 1,10
TNT 1,00 1,00
Tritonal 1,07 0,96
I ConWep (1992) används ett medelvärde av dessa båda värden, speciellt
för beräkning av luftstötvågens tryck och impuls.

-- 205 of 311 --

Markstötvåg
2020-09-28 revidering 2 205
Bilaga C Spännings- och töjningstensorer
Spännings- och töjningstensorer är viktigt för förståelsen för hur material tar
upp de yttre krafter som den utsätts för. Här ges en kortfattad beskrivning av
hur spänning, töjning och deras tensorer definieras. För en mer utförlig be-
skrivning hänvisas läsaren till Desai och Siriwardane (1984).
I det endimensionella fallet kan töjningen beskrivas som
0
0
l
l	l −
=
		
(C:a)
där l0 och l är ursprunglig längd respektive nuvarande längd. Denna töjning
kallas Cauchytöjning eller ingenjörstöjning. Spänning i det endimensionella
fallet beskrivs genom
A
F
=
		
(C:b)
där F är kraften i båda ändar och A är tvärsnittsytan. Dessa beskrivningar
duger gott för små deformationer. Den enklaste materialmodell som binder
samman töjning och spänning är Hookes lag

	
		= E	
(C:c)
där E är elasticitetsmodulen hos materialet.
I det tredimensionella fallet börjar vi med att studera figur (C:a)
Figur C:a. Komponenterna för spänningstensorn i det tredimensionella fallet.





 



x

x

x


-- 206 of 311 --

Markstötvåg
2020-09-28 revidering 2 206
I det karakteristiska koordinatsystemet xi kan spänningen definieras som
i
j
A
ij A
F
i
lim
0	→
=
		
(C:b)
där kraften verkar i koordinataxlarnas riktning j = 1,2,3 och arean i är
normalriktningen mot kraften Fj. Här definieras tryckspänning som positiv
och dragspänning som negativ för huvudspänningarna

 och
. Om
vi inte har rörelse i kroppen så är spänningstensorn
ij =
ji symmetrisk,
vilken då kan skrivas på matrisform som










=










=
33	23	13
23	22	12
13	12	11
33	32	31
23	22	21
13	12	11

	
	

	
	

	
	

	
	

	
	

	
	
	
. (C:c)
Det finns flera olika sätt att ta fram spänningstensorinvarianterna. Ett sätt är
att studera linjär algebra. Cayley-Hamiltons teorem säger att varje matris A
som är kvadratisk n × n satisfierar sitt karaktäristiska polynom p(
) över det
reella eller komplexa talplanet
0	)	( =	−	= A	I	p n	

		
(C:d)
där In är identitetsmatris av storleken n och
 är egenvärdena för matrisen.
Med |∙| menas determinanten. Cayley-Hamilton säger att
 kan ersättas med
matrisen A och därmed blir det karaktäristiska polynomet p(A) lika med
nollmatrisen 0n. Nu om vi återgår till spänningsmatrisen	
 så är den
karaktäristiska ekvationen lika med
0	)	( 3	2
2
1
3
3 =	−	+	−	=	−	= I	I	I	I	p	

	
	
	
	
		
(C:e)
Där identifiering ger de tre spänningstensorinvarianterna
( )	
33	22	11	1	

	
	
	
	+	+	=	= tr	I	
(C:f)
33	13
13	11
33	23
23	22
22	12
12	11
2

	

	

	

	

	

	
+	+	=	I	
(C:g)

	=	3	I	
(C:h)
Om vi nu också använder oss av Cayley-Hamiltons teorem får vi
3	3	2
2
1
3 0	=	−	+	− I	I	I	

	
		
(C:i)
varför begrepp som första, andra och tredje spänningsinvarianten används.
Ett annat sätt att beskriva spänningstensorinvarianterna är att utgå från
tensorn själv

-- 207 of 311 --

Markstötvåg
2020-09-28 revidering 2 207
1	1 )	( I	tr	J =	=
		
(C:j)
( 	)	
2
2
1	2
1	2
2
1
2 2	)	( I	I	tr	J −	=	=
		
(C:k)
( 	)	
3	2	1
3
1	3
1	3
3
1
3 3	3	)	( I	I	I	I	tr	J +	−	=	=
		
(C:l)
Den symmetriska spänningstensorn
 kan delas upp i två symmetriska
tensorer: den deviatoriska spänningstensorn och den hydrostatiska eller
sfäriska spänningstensorn. Uppdelningen kan beskrivas med
ij	ij	ij J	S	

		
1	3
1	
+	=	
(C:m)
där Sij är den deviatoriska spänningstensorn, J1 första spänningsinvarianten
och
ij är kroneckers delta. Detta kan också skrivas som
ij	ij	ij P	S	

	
	+	=	
(C:n)
Där P = (
 +  + ) / 3 är det hydrostatiska trycket. På matrisform blir
det på följande sätt










+










=










=
P
P
P
S	S	S
S	S	S
S	S	S
0	0
0	0
0	0
33	23	13
23	22	12
13	12	11
33	32	31
23	22	21
13	12	11

	
	

	
	

	
	
	
(C:o)
Den deviatoriska spänningstensorn kan skrivas som
ij	ij	ij P	S	

	
	−	=	
(C:p)
Så första invarianten av den deviatoriska spänningstensorn blir
( 	) ( 	) ( 	)
0	3
)	(
33	22	11
33	22	11	33	22	11	1
=	−	+	+	=
=	−	+	−	+	−	=	+	+	=	=
P
P	P	P	S	S	S	S	tr	J D

	
	

	
	
(C:q)
J1D är som synes alltid noll. Sålunda har Sij bara två oberoende invarianter.
Andra invarianten av den deviatoriska spänningstensorn blir
 	
2
23
2
13
2
12
2
33
2
22
2
11	2
1
33	23	13
23	22	12
13	12	11
33	23	13
23	22	12
13	12	11
2
1	2
2
1
2
2	2	2
)	(
S	S	S	S	S	S
S	S	S
S	S	S
S	S	S
S	S	S
S	S	S
S	S	S
tr	S	tr	J D
+	+	+	+	+	=




















=	=
(C:r)
Ekvation (C:o) kan skrivas om till

-- 208 of 311 --

Markstötvåg
2020-09-28 revidering 2 208
 	
2
23
2
13
2
12
2
33
2
22
2
11	2
1
2 2	2	2	)	(	)	(	)	(	

	
	
	
	
	
	+	+	+	−	+	−	+	−	= P	P	P	J D	
(C:s)
Vi kan sätta in P = (
 +  +) / 3 och få beskrivet ekvation (C:s) på
följande sätt
 	
2
23
2
13
2
12
2
33	11
2
33	22
2
22	11	6
1
2 )	(	)	(	)	(	

	
	
	
	
	
	
	
	
	+	+	+	−	+	−	+	−	=	D	J	
(C:t)
Om vi dessutom roterar koordinatsystemet så att skjuvspänningarna
 =
 =
 = 0 endast huvudspänningarna,
   är skilda från noll
då kan vi beskriva J2D med
 	
2
3	1
2
3	2
2
2	1	6
1
2 )	(	)	(	)	(	

	
	
	
	
	
	−	+	−	+	−	=	D	J	
(C:u)
Den kan också skrivas med spänningstensorinvarianterna J1 och J2 vilket
ger
1	6
1
2	2 J	J	J D −	=	
(C:v)
Slutligen blir den tredje deviatorspänningsinvarianten
( )
3
1	27
2
2	1	3
2
3
3
6
1
3 ... J	J	J	J	S	tr	J D +	−	=	=	=	
(C:w)
På liknande sätt beskrivs töjningstensorer i det tredimensionella rummet.
Exempelvis så kan den andra deviatoriska töjningstensorn beskrivas med
 	
2
23
2
13
2
12
2
33	11
2
33	22
2
22	11	6
1
2 )	(	)	(	)	(	

	
	
	
	
	
	
	
	
	+	+	+	−	+	−	+	−	=	D	I	
(C:x)
Ett cylindriskt spänningsfall enligt figur (C:b) förenklar spänningstensorn
till följande










=
3
2
1
0	0
0	0
0	0



	
. (C:y)
Figur C:b. Cylindriskt spänningsförhållande.

=

=

-- 209 of 311 --

Markstötvåg
2020-09-28 revidering 2 209
Vilket då ger följande andra deviatorspänningsinvariant
 	
2
3	1	3
1	2
3	1
2
3	1	6
1
2 )	(	)	(	0	)	(	

	
	
	
	
	
	−	=	−	+	+	−	=	D	J	
(C:z)

-- 210 of 311 --

Markstötvåg
2020-09-28 revidering 2 210
Bilaga D Elastiska vågor
Här ges en kortfattad beskrivning av elastiska vågor samt hur elastiska
konstanter benämns inom hållfasthetslära och geoteknik och deras engelska
motsvarigheter. En utförligare beskrivning av elastiska vågor återges i
Santamarina (2001).
Först måste de elastiska sambanden mellan elasticitetsmodul E, skjuv-
modul G, kompressionsmodul K, ödometermodulen M, och tvärkontrak-
tion
 beskrivas, se även Samuelsson och Wiberg (1993).
Grundläggande elastiska samband
När en stav utsätts för dragspänningar enligt figur (D:a)(I), så förlängs
längden l med töjningen gånger längden,
l. Dessutom minskar tvärsnittet b
med b(1-
), där
 är tvärkontraktionstalet.
F
Figur D:a. (I) Stav utsatt för dragspänning. (II) Tredimensionellt element utsatt
för normalspänningar.
y
z
x
x
z
y
l	
l
b b(1-
)
(I)
(II)

-- 211 of 311 --

Markstötvåg
2020-09-28 revidering 2 211
Tvärkontraktionstalet  beskriver sambandet mellan töjning parallellt
belastningen
 samt töjning vinkelrätt belastningen
⊥ enligt
//	



⊥
−	=	
. (D:a)
För till exempel stål är tvärkontraktionstalet
 ≈  och för betong
 ≈ 
Om nu ett tredimensionellt element enligt figur (D:a)(II) belastas med
normalspänningar kan töjningarna i normalriktningen beskrivas med hjälp
av Hooks generaliserade lag enligt
( 	)	
)	(
1 z	y	x	x E

		
	
	
	+	−	=	
(D:b)
( 	)	
)	(
1 z	x	y	y E

		
	
	
	+	−	=	
(D:c)
( 	)	
)	(
1 y	x	z	z E

		
	
	
	+	−	=	
. (D:d)
Där E är elasticitetsmodulen. Nu kan vi börja härleda relationen mellan
kompressionsmodul K och elasticitetsmodulen E och tvärkontraktionen

Vi börjar med att definiera kompressionsmodulen som
v
m
K


	
(D:e)
där
m = P= (
x +
y +
z) / 3 är medelspänningen och den volymmetriska
töjningen
v kan beskrivas med
z	y	x	v	

	
	
	
	+	+	=	
. (D:f)
Sättes nu ekvation (D:b)-(D:d) in i ekvation (D:f) fås
E
z	y	x	z	y	x
v
)	(	2	

	
	
	
	
	
	

+	+	−	+	+
=	
(D:g)
Om vi nu dessutom sätter in medelspänningen
m = P= (
x +
y +
z) / 3 fås
E	E
m	m	m
v

	
	
	
	

)	2	1	(	3	))	(	2	(	3 −
=
−
=	
. (D:h)
Skriver vi nu om ekvation (D:h) fås
)	2	1	(	3	

	

−
=	= E
K
v
m
. (D:i)

-- 212 of 311 --

Markstötvåg
2020-09-28 revidering 2 212
K kallas kompressionsmodul (bulk modulus på engelska) inom hållfasthet
och inom geoteknik för tryckmodul. I denna rapport används namnet
kompressionsmodul.
Nästa är ödometermodulen M som definieras som
z
z
M


	
med villkoren	0	=	x	
	 och	0	=	y	
	 (D:j)
Genom att vi vet att två töjningar är lika med noll så kan vi ta fram uttryck
för hur spänningarna
x och
y kan beskrivas med
z. Om vi börjar med
ekvation (D:b) och (D:c) och sätter in villkoret att töjningarna är lika med
noll fås
( 	)	
)	(	)	(
1
0 z	y	x	z	y	x
E

		
	
	
		
	
	+	=		+	−	=	
(D:k)
och
( 	)	
)	(	)	(
1
0 z	x	y	z	x	y
E

		
	
	
		
	
	+	=		+	−	=	
. (D:l)
Om vi nu sätter in ekvation (D:l) i (D:k) erhålles



−
= 1
z
x	
(D:m)
och på samma sätt härleds



−
= 1
z
y	
(D:n)
Sättes nu ekvation (D:m)-(D:n) in i ekvation (D:d) fås
z
z	z
z	z E	E



	





	
	
	





−
+	−	−
=	





−
+
−
−	= 1
1	2	1
)
1	1
(
1 2
(D:o)
och faktoriseras ekvation (D:o) erhålles
z	z E



	

	





−
−	+
= 1
)	2	1	)(	1	(	1
. (D:p)
Därmed kan M identifieras som
)	2	1	)(	1	(
)	1	(

	



−	+
−
=	= E
M
z
z
. (D:q)

-- 213 of 311 --

Markstötvåg
2020-09-28 revidering 2 213
Rent experimentellt tas M fram genom att det undersökta materialet pressas
vertikalt i en styv omgivande cylinder, se figur (D:b). Denna typ av plan
töjning är vanlig inom jordprover.
Figur D:b. Illustration av experiment för framtagning av ödometermodulen M.
När det gäller skjuvmodulen G så relaterar den skjuvvinkel med skjuv-
spänning enligt
ij
ij
ij
ij
G




=		
med	j	i 	 . (D:r)
För att härleda skjuvmodulen så tittar vi på ett tvådimensionellt spännings-
fall enligt figur (D:c)(I).
Figur D:c. Illustration av tvådimensionellt spänningsfall för ett kvadratiskt
element av längden a. (I) återger spänningstillståndet och (II) åter-
ger deformationstillståndet.

z
h
zh
y=-

x=

x
y
(I)
−
a(1+
x)
xy=
xy =

(II)
a(1+
y)
a
a

-- 214 of 311 --

Markstötvåg
2020-09-28 revidering 2 214
Om nu relationen för vinkeländringen ställs upp av deformationstillståndet,
se figur (D:c)(II), fås
( 	)
x
y

	

	
+
+
=	− 1
1
tan 2	4	
. (D:s)
Om nu vänsterled för ekvation (D:s) skrivs om med trigonometriska
samband och antagandet av små vinklar fås
( 	)
2
1
2
1
)	tan(	1
)	tan(	1
)	tan(	)	tan(	1
)	tan(	)	tan(
tan
2
2
2	4
2	4
2	4





	

	

	
+
−
=
+
−
=
+
−
=	−	
(D:t)
Hookes generaliserade lag vid tvådimensionellt spänningstillstånd blir
( 	)	
y	x	x E

	
	
	−	= 1
(D:u)
( 	)	
x	y	y E

	
	
	−	= 1
. (D:v)
Sätter vi in att spänningarna
x =
 och
y = -
 får vi
( 	)	


	+	= 1
E
x	
(D:w)
( 	)	


	+	−	= 1
E
y	
. (D:x)
Dessutom vet vi att skjuvtöjningen är
G	G
ij	

	

	=	=	
(D:y)
Om nu ekvation (D:w), (D:x) och (D:y) insätts i ekvation (D:s) och (D:t) fås
( 	)
( 	)
( 	)	

	








+	=	
+	+
+	−
=
+
−

+
+
=
+
−
1
2
1	1
1	1
2
1
2
1
1
1
2
1
2
1
E	G
E
E
G
G
x
y
(D:z)
och slutligen fås sambandet mellan elasticitetsmodul E och skjuvmodul
( 	)	

	+
= 1	2
E
G	
(D:å)

-- 215 of 311 --

Markstötvåg
2020-09-28 revidering 2 215
Nu är vi mogna för att relatera ödometermodulen M med skjuvmodul G och
kompressionsmodul K
.
3
4 G	K	M +	=	
(D:ä)
Vilket kan visas med att studera högerled av ekvation (D:ä)
VL
E	E	E	E
E	E	E	E
G	K	HL
=
+	−
−
=
+	−
−
=
+	−
−
+
+	−
+
=
=
+	−
−
+
+	−
+
=
+	
+
−
=	+	=
)	1	)(	2	1	(
)	1	(
)	1	)(	2	1	(	3
)	1	(	3
)	1	)(	2	1	(	3
)	2	1	(	2
)	1	)(	2	1	(	3
)	1	(
)	1	)(	2	1	(	3
)	2	1	(	2
)	1	)(	2	1	(	3
)	1	(
)	1	(	2	3
4
)	2	1	(	3	3
4

	


	


	


	


	


	


	
Därmed har vi härlett de mest elementära relationerna inom elasticitetsteori,
de är också givna i tabell (D:a).
Elastiska våghastigheter
Så om vi nu börjar studera hur elastiska vågor propagerar genom ett
oändligt elastiskt material, jämvikt kräver att Newtons andra lag måste
uppfyllas, det vill säga krafter verkande på ett litet element måste vara lika
med massan gånger accelerationen, 𝑚𝑎 = 𝐹, 𝜌𝑎 = 𝐹/𝑉, vilket kan skrivas
som
z	y	x	t
u xz	xy	x	x


+


+


=


	
	
	
	
2
2
(D:ö)
z	x	y	t
u yz	xy	y	y


+


+


=


	
	
	
	
2
2
(D:öa)
z	x	y	t
u yz	xy	y	z


+


+


=


	
	
	
	
2
2
(D:öb)
Här är	2
2
t
ux

 ,	2
2
t
u y

 , och	2
2
t
uz

 accelerationen i x-, y-, och z-riktning.
Spänningar kan också ges som funktion av töjningar
( 	)	
z	y	v	x G	M	

	
	
	
	+	−	= 2	
(D:öc)
xy	xy	xy G

	
	
	=	=	
(D:öd)
På liknande sätt kan ekvation (D:öc) skrivas för y- och z-riktning,
ekvation (D:öd) kan skrivas om för yz- och xz-planet.

-- 216 of 311 --

Markstötvåg
2020-09-28 revidering 2 216
Om vi nu använder ekvationerna (D:öc)-(D.öd) och deras synonymer i
ekvationerna (D:ö)-(D:öb) fås








+


+


−


−	+


=


z	y	x	x
G
x
M
t
u xz	xy	z	y	v	x	

	
	
	
	
	
2	2	2
2
(D:öe)








+


+


−


−	+


=


z	x	y	y
G
y
M
t
u yz	xy	z	x	v	y	

	
	
	
	
	
2	2	2
2
(D:öf)








+


+


−


−	+


=


y	x	z	z
G
z
M
t
u yz	xz	y	x	v	z	

	
	
	
	
	
2	2	2
2
(D:ög)
Om vi dessutom skriver töjningarna i termer av deformation såsom här för
x-riktning
x
ux
x 

=
		
(D:öh)
Kan ekvationerna (D:öe)-(D:ög) skrivas om som
( 	)








+


+


+








	

+
	

+


−	=


2
2
2
2
2
2	2	2
2
2
2
2
y
u
y
u
x
u
G
z	x
u
y	x
u
x
u
G	M
t
u x	x	x	z	y	x	x
	
(D:öi)
( 	)










+


+


+








	

+


+
	

−	=


2
2
2
2
2
2	2
2
2	2
2
2
z
u
y
u
x
u
G
z	y
u
y
u
y	x
u
G	M
t
u y	y	y	z	y	x	y
	
(D:öj)
( 	)








+


+


+










+
	

+
	

−	=


2
2
2
2
2
2
2
2	2	2
2
2
z
u
y
u
x
u
G
z
u
z	y
u
z	x
u
G	M
t
u z	z	z	z	y	x	z
	
(D:ök)
Vilka förenklat kan skrivas som
( 	)	
x
v	x u	G
x
G	M
t
u 2
2
2
	+


−	=


	
	
(D:öl)
( 	)	
y
v	y u	G
y
G	M
t
u 2
2
2
	+


−	=


	
	
(D:öm)
( 	)	
z
v	z u	G
y
G	M
t
u 2
2
2
	+


−	=


	
	
(D:ön)
där	2
2
2
2
2
2
2
z	y	x 

+


+


=		 .

-- 217 of 311 --

Markstötvåg
2020-09-28 revidering 2 217
Ekvationerna (D:öl)-(D:öm) beskriver hur elastiska vågor propagerar både i
tid och rum i materialet.
Nu om vi ska studera renodlat elastiska tryck och skjuvvågor är figur (D:d)
av hjälp för att förstå rörelsen
Figur D:d. Illustration av isotropiskt material med hjälp av partiklar. (I) material
i vila, (II) utbredning av ren tryckvåg, och (III) utbredning av ren
skjuvvåg.
Ren tryckvåg i x-riktning beskrivs av att rörelse i y- och z- led är lika med
noll om detta insättes i ekvation (D:öi) fås
( 	)	
2
2
2
2
2
2
2
2
0	0	0	0 x
u
M
x
u
G
x
u
G	M
t
u x	x	x	x


=




 +	+


+




 +	+


−	=


	
(D:öo)
Vilket ger
2
2
2
2
x
u	M
t
u x	x


=



(D:öp)
Löses nu tryckvågshastigheten ut ur ekvation (D:öp) fås
ux
våglängd

(II)
(I)
(III)
uy
våglängd


-- 218 of 311 --

Markstötvåg
2020-09-28 revidering 2 218

M
V
t
u p
x =	=


(D:öq)
På engelska kallas tryckvågen för pressure wave velocity (P-wave).
Den elastiska skjuvvågen beskrivs genom rörelse i y-riktning och därmed är
rörelser i x- och z-riktning lika med noll. För en plan våg vandrades i x-
riktning gäller dessutom att uy inte varierar över vågfront i yz-planet om
detta används i ekvation (D:öj) fås
2
2
2
2
x
u	G
t
u y	y


=



(D:ör)
Om hastigheten löses ut hos den elastiska skjuvvågen fås

G
Vs =	
(D:ös)
På engelska kallas denna våg shear wave velocity (S-wave).
I flera explicita finita elementprogram separeras det på volymmetriskt arbete
och deviatoriskt arbete. Därför är det av intresse att se vilken våghastighet c
kompressionsmodulen ger på engelska kallas denna våg bulk wave velocity.
Den ges av ekvation (D:ä) med ekvation (D:ör) och (D:ös) insatt
2	2
3
4 s	p V	V	c −	=	
(D:öt)
För elastiska vågor i långa stavar där våglängden är mycket längre än radien
och med noll i spänningar vinkelrätt belastningar fås den longitudinella
vågen
2
2
2
2
x
u	E
t
u


=



(D:öu)
Vilken har våghastigheten

E
VL =	
(D:öv)
På engelska kallas denna våg longitudinal wave. Skjuvvågen för staven
beskrivs av
2
2
2
2
x
G
t
u


=


	

(D:öw)

-- 219 of 311 --

Markstötvåg
2020-09-28 revidering 2 219
där
 är vridningsvinkeln. Staven har samma skjuvvågshastighet som för ett
oändligt medium

G
Vs =	
(D:öx)
I tabell (D:a) ges de elastiska sambanden för ett isotropiskt material.
Tabell D:a. Samband för ett isotropiskt och elastiskt material, se även
Santamarina (2001).
Elastisk
konstant
Definition I termer av E
och

I termer av K
och G
I termer av
VL, Vp, Vs,
och c
Elasticitets-
modul E	z
z


 
för
x=
y=0
E)	(	3
9
G	K
KG
+ (1)	2
L
V	

Tvär-
kontraktion
	//	


⊥	
−	
)	3	(	2
2	3
G	K
G	K
+
− (1)
1
1
2
2
2
1
−





−





s
p
s
p
V
V
V
V
Kompressions-
modul K	v
m


)	2	1	(	3	

	−
E
 
K2
c	

Ödometer-
modul M	z
z


 
för
x=
y=0
)	2	1	)(	1	(	3
)	1	(

	

−	+
−	E
G	K 3
4
+2
p	V	

Skjuv-
modul G	

)	1	(	2	

	+
E
 G
2
s	V	

(1) Ej härlett i denna bilaga, från Santamarina (2001).

-- 220 of 311 --

Markstötvåg
2020-09-28 revidering 2 220
Bilaga E Modellerad jordsammansättning
Framtagande av jordparametrar
För att skapa variation i EOS användes två ytterligheter, den ena EOS:en var
Sjöbosand, se Laine och Sandvik (2001), här nämnd som EOS1 och den
andra var för våt vattenmättad lera benämnd EOS4.
För att ta fram den plastiska kompakteringskurvan användes de två
ytterligheterna EOS1 och EOS4 och två ytterligare EOS2 och EOS3
skapades med hjälp av linjär skalning. I figur (E:a) visas trycket som
funktion av kompression P(
) för de fyra olika EOS:erna. Kompression
definieras som
1
0
−	=


	
(E:a)
Figur E:a. EOS för de olika jordsammansättningarna, tryck som funktion av
kompression P(
).
Därefter fördes EOS kurvorna tillbaka till att beskrivas som tryck som
funktion av densitet P(
) vilket visas i figur (E:b). Detta för att passa
inmatningssättet för Autodyns EOS-modell: Compaction.

-- 221 of 311 --

Markstötvåg
2020-09-28 revidering 2 221
Figur E:b. EOS för de olika jordsammansättningarna, tryck som funktion av
densitet P(
).
Den elastiska kompakteringen togs fram med vetskapen av att torr porös
sand har väldigt brant elastisk av- och pålastning i jämförelse med
vattenmättad sand och fullt vattenmättad lera. Detta fysikaliska beteende låg
till grund hur den elastiska tryckvågen c skalades för de olika jord-
sammansättningarna. Figur (E:c) illustrerar hur elastisk avlastning sker från
den plastiska kurvan.
Figur E:c. EOS1, röd linje plastisk kompakteringskurva, svart linje exempel
på elastisk avlastning från tryck P och densitet

Tryckvågen c relateras till tryck och densitet enligt följande uttryck i EOS-
modellen

-- 222 of 311 --

Markstötvåg
2020-09-28 revidering 2 222
( )

	
−
= P
c 2
(E:b)
Genom definition av följande två mellanliggande parametrar

	


+
=	
(E:c)
och
0
0

	

	

−
−
=
n
b	
(E:d)
får vi fram relationen
(
b) för EOS1-Sjöbo sand. Om vi nu introducerar
skalningsfaktorn si för EOSi så kan vi ta fram tryckvågshastigheten c för
EOS2-EOS4 genom
)	(	1 b	i	i s	

	
	
	=	
(E:e)
där i = 2,3,4, s2 = 1/3, s3 = 2/3 och s4 = 1/100.
Figur (E:d) illustrerar de tryckvågshastigheter c som togs fram för EOS1-
EOS4.
Figur E:d. Tryckvågshastighet c som funktion av densitet
 EOS1 – röd linje
(torr sand), EOS2 – grön linje, EOS3-blå linje, EOS4 – rosa linje
(våt lera).
Flytytspänningen som funktion av trycket skalades också med hjälp av
tidigare definierade skalningsparametrar si enligt följande
)	(	3	)	(	3 1	2	,	2 P	J	s	P	J D	i	i	D =	
(E:e)

-- 223 of 311 --

Markstötvåg
2020-09-28 revidering 2 223
där i = 2,3,4, s2 = 1/3, s3 = 2/3 och s4 = 1/100. Flytytorna S1-S4 visas i
Figur (E:e).
Figur E:e. Flytyta som funktion av tryck. S1 – röd linje (torr sand), S2 – grön
linje, S3 – blå linje, S4-rosa linje (våt lera).
Skjuvmodulen måste kompenseras för att passa det aktuella densitets-
spannet som varje EOS har. Därför behövs totalt 16 flytytsmodeller för att
G(
) ska bli korrekt, se figur (E:f). I tabell (E:a) återfinns de 16 olika
jordsammansättningarna som användes i studien.
Figur E:f. Skjuvmodul som funktion av densitet. EOS1 – röda linjer (torr
sand), EOS2 – gröna linjer, EOS3 – blåa linjer, EOS4 –rosa linjer
(våt lera).

-- 224 of 311 --

Markstötvåg
2020-09-28 revidering 2 224
EOS 	E1-S1 	E1-S2 	E1-S3 	E1-S4 	E2-S1 	E2-S2 	E2-S3 	E2-S4 	E3-S1 	E3-S2 	E3-S3 	E3-S4 	E4-S1 	E4-S2 	E4-S3 	E4-S4

ref (g/cm 3 ) 	2.641 	2.641 	2.641 	2.641 	2.467 	2.467 	2.467 	2.467 	2.264 	2.264 	2.264 	2.264 	2.027 	2.027 	2.027 	2.027

P
	
1.674 	1.674 	1.674 	1.674 	1.752 	1.752 	1.752 	1.752 	1.830 	1.830 	1.830 	1.830 	1.908 	1.908 	1.908 	1.908
 	
1.740 	1.740 	1.740 	1.740 	1.787 	1.787 	1.787 	1.787 	1.867 	1.867 	1.867 	1.867 	1.911 	1.911 	1.911 	1.911
 	
1.874 	1.874 	1.874 	1.874 	1.836 	1.836 	1.836 	1.836 	1.903 	1.903 	1.903 	1.903 	1.913 	1.913 	1.913 	1.913
 	
1.997 	1.997 	1.997 	1.997 	1.885 	1.885 	1.885 	1.885 	1.940 	1.940 	1.940 	1.940 	1.918 	1.918 	1.918 	1.918
 5	
2.144 	2.144 	2.144 	2.144 	1.927 	1.927 	1.927 	1.927 	1.976 	1.976 	1.976 	1.976 	1.928 	1.928 	1.928 	1.928
 6	
2.250 	2.250 	2.250 	2.250 	2.067 	2.067 	2.067 	2.067 	2.068 	2.068 	2.068 	2.068 	1.948 	1.948 	1.948 	1.948
 7	
2.380 	2.380 	2.380 	2.380 	2.208 	2.208 	2.208 	2.208 	2.178 	2.178 	2.178 	2.178 	1.987 	1.987 	1.987 	1.987
 8	
2.485 	2.485 	2.485 	2.485 	2.348 	2.348 	2.348 	2.348 	2.269 	2.269 	2.269 	2.269 	2.060 	2.060 	2.060 	2.060
 9	
2.585 	2.585 	2.585 	2.585 	2.488 	2.488 	2.488 	2.488 	2.361 	2.361 	2.361 	2.361 	2.233 	2.233 	2.233 	2.233
 	
2.671 	2.671 	2.671 	2.671 	2.584 	2.584 	2.584 	2.584 	2.429 	2.429 	2.429 	2.429 	0.000 	0.000 	0.000 	0.000
P 1 (kPa ) 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00
P 2 	4.58E+03 4.58E+03 4.58E+03 4.58E+03 7.80E+03 	7.80E+03 7.80E+03 7.80E+03 2.50E+04 2.50E+04 2.50E+04 2.50E+04 5.73E+03 5.73E+03 5.73E+03 5.73E+03
P 3 	1.50E+04 1.50E+04 1.50E+04 1.50E+04 2.20E+04 	2.20E+04 2.20E+04 2.20E+04 5.80E+04 5.80E+04 5.80E+04 5.80E+04 1.15E+04 1.15E+04 1.15E+04 1.15E+04
P 4 	2.92E+04 2.92E+04 2.92E+04 2.92E+04 4.10E+04 	4.10E+04 4.10E+04 4.10E+04 9.85E+04 9.85E+04 9.85E+04 9.85E+04 2.31E+04 2.31E+04 2.31E+04 2.31E+04
P 5 	5.92E+04 5.92E+04 5.92E+04 5.92E+04 6.25E+04 	6.25E+04 6.25E+04 6.25E+04 1.40E+05 1.40E+05 1.40E+05 1.40E+05 4.66E+04 4.66E+04 4.66E+04 4.66E+04
P 6 	9.81E+04 9.81E+04 9.81E+04 9.81E+04 1.40E+05 	1.40E+05 1.40E+05 1.40E+05 2.70E+05 2.70E+05 2.70E+05 2.70E+05 9.51E+04 9.51E+04 9.51E+04 9.51E+04
P 7 	1.79E+05 1.79E+05 1.79E+05 1.79E+05 2.62E+05 	2.62E+05 2.62E+05 2.62E+05 4.35E+05 4.35E+05 4.35E+05 4.35E+05 1.98E+05 1.98E+05 1.98E+05 1.98E+05
P 8 	2.89E+05 2.89E+05 2.89E+05 2.89E+05 4.20E+05 	4.20E+05 4.20E+05 4.20E+05 6.15E+05 6.15E+05 6.15E+05 6.15E+05 4.24E+05 4.24E+05 4.24E+05 4.24E+05
P 9 	4.50E+05 4.50E+05 4.50E+05 4.50E+05 6.50E+05 	6.50E+05 6.50E+05 6.50E+05 8.38E+05 8.38E+05 8.38E+05 8.38E+05 1.18E+06 1.18E+06 1.18E+06 1.18E+06
P 10 	6.51E+05 6.51E+05 6.51E+05 6.51E+05 8.90E+05 	8.90E+05 8.90E+05 8.90E+05 1.09E+06 1.09E+06 1.09E+06 1.09E+06 0.00E+00 0.00E+00 0.00E+00 0.00E+00

c1 (g/cm 3) 	1.674 	1.674 	1.674 	1.674 	1.752 	1.752 	1.752 	1.752 	1.830 	1.830 	1.830 	1.830 	1.908 	1.908 	1.908 	1.908

c2 	1.746 	1.746 	1.746 	1.746 	1.770 	1.770 	1.770 	1.770 	1.846 	1.846 	1.846 	1.846 	1.908 	1.908 	1.908 	1.908

c3 	2.086 	2.086 	2.086 	2.086 	1.812 	1.812 	1.812 	1.812 	1.866 	1.866 	1.866 	1.866 	1.908 	1.908 	1.908 	1.908

c4 	2.147 	2.147 	2.147 	2.147 	1.853 	1.853 	1.853 	1.853 	1.879 	1.879 	1.879 	1.879 	1.908 	1.908 	1.908 	1.908

c5 	2.300 	2.300 	2.300 	2.300 	1.883 	1.883 	1.883 	1.883 	1.942 	1.942 	1.942 	1.942 	1.909 	1.909 	1.909 	1.909

c6 	2.572 	2.572 	2.572 	2.572 	2.109 	2.109 	2.109 	2.109 	2.020 	2.020 	2.020 	2.020 	1.913 	1.913 	1.913 	1.913

c7 	2.598 	2.598 	2.598 	2.598 	2.230 	2.230 	2.230 	2.230 	2.084 	2.084 	2.084 	2.084 	1.923 	1.923 	1.923 	1.923

c8 	2.635 	2.635 	2.635 	2.635 	2.354 	2.354 	2.354 	2.354 	2.185 	2.185 	2.185 	2.185 	1.963 	1.963 	1.963 	1.963

c9 	2.641 	2.641 	2.641 	2.641 	2.467 	2.467 	2.467 	2.467 	2.264 	2.264 	2.264 	2.264 	2.027 	2.027 	2.027 	2.027

c10 	2.800 	2.800 	2.800 	2.800 	2.584 	2.584 	2.584 	2.584 	2.336 	2.336 	2.336 	2.336 	2.046 	2.046 	2.046 	2.046
c 1 (m/s ) 	265.2 	265.2 	265.2 	265.2 	472.8 	472.8 	472.8 	472.8 	827.4 	827.4 	827.4 	827.4 	1499.9 	1499.9 	1499.9 	1499.9
c 2 	852.1 	852.1 	852.1 	852.1 	676.3 	676.3 	676.3 	676.3 	1107.8 	1107.8 	1107.8 	1107.8 	1505.8 	1505.8 	1505.8 	1505.8
c 3 	1721.7 	1721.7 	1721.7 	1721.7 	960.8 	960.8 	960.8 	960.8 	1251.2 	1251.2 	1251.2 	1251.2 	1515.2 	1515.2 	1515.2 	1515.2
c 4 	1875.5 	1875.5 	1875.5 	1875.5 	1126.7 	1126.7 	1126.7 	1126.7 	1274.5 	1274.5 	1274.5 	1274.5 	1533.2 	1533.2 	1533.2 	1533.2
c 5 	2264.8 	2264.8 	2264.8 	2264.8 	1188.0 	1188.0 	1188.0 	1188.0 	1464.1 	1464.1 	1464.1 	1464.1 	1569.4 	1569.4 	1569.4 	1569.4
c 6 	2956.1 	2956.1 	2956.1 	2956.1 	1632.0 	1632.0 	1632.0 	1632.0 	1658.6 	1658.6 	1658.6 	1658.6 	1636.4 	1636.4 	1636.4 	1636.4
c 7 	3112.2 	3112.2 	3112.2 	3112.2 	1892.4 	1892.4 	1892.4 	1892.4 	1822.9 	1822.9 	1822.9 	1822.9 	1768.5 	1768.5 	1768.5 	1768.5
c 8 	4600.0 	4600.0 	4600.0 	4600.0 	2201.7 	2201.7 	2201.7 	2201.7 	2182.5 	2182.5 	2182.5 	2182.5 	2095.2 	2095.2 	2095.2 	2095.2
c 9 	4634.0 	4634.0 	4634.0 	4634.0 	2753.4 	2753.4 	2753.4 	2753.4 	2563.4 	2563.4 	2563.4 	2563.4 	2388.5 	2388.5 	2388.5 	2388.5
c 10 	4634.0 	4634.0 	4634.0 	4634.0 	2753.4 	2753.4 	2753.4 	2753.4 	2563.4 	2563.4 	2563.4 	2563.4 	2388.5 	2388.5 	2388.5 	2388.5
P

y1 (kPa ) 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00
P

y2 	3.40E+03 3.40E+03 3.40E+03 3.40E+03 3.40E+03 	3.40E+03 3.40E+03 3.40E+03 3.40E+03 3.40E+03 3.40E+03 3.40E+03 3.40E+03 3.40E+03 3.40E+03 3.40E+03
P

y3 	3.49E+04 3.49E+04 3.49E+04 3.49E+04 3.49E+04 	3.49E+04 3.49E+04 3.49E+04 3.49E+04 3.49E+04 3.49E+04 3.49E+04 3.49E+04 3.49E+04 3.49E+04 3.49E+04
P

y4 	1.01E+05 1.01E+05 1.01E+05 1.01E+05 1.01E+05 	1.01E+05 1.01E+05 1.01E+05 1.01E+05 1.01E+05 1.01E+05 1.01E+05 1.01E+05 1.01E+05 1.01E+05 1.01E+05
P

y5 	1.85E+05 1.85E+05 1.85E+05 1.85E+05 1.85E+05 	1.85E+05 1.85E+05 1.85E+05 1.85E+05 1.85E+05 1.85E+05 1.85E+05 1.85E+05 1.85E+05 1.85E+05 1.85E+05
P

y6 	5.00E+05 5.00E+05 5.00E+05 5.00E+05 5.00E+05 	5.00E+05 5.00E+05 5.00E+05 5.00E+05 5.00E+05 5.00E+05 5.00E+05 5.00E+05 5.00E+05 5.00E+05 5.00E+05
P

y7 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00
P

y8 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00
P

y9 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00
P

y10 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00

y1 (kPa ) 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00

y2 	4.24E+03 2.82E+03 1.41E+03 4.24E+01 4.24E+03 	2.82E+03 1.41E+03 4.24E+01 4.24E+03 2.82E+03 1.41E+03 4.24E+01 4.24E+03 2.82E+03 1.41E+03 4.24E+01

y3 	4.47E+04 2.98E+04 1.49E+04 4.47E+02 4.47E+04 	2.98E+04 1.49E+04 4.47E+02 4.47E+04 2.98E+04 1.49E+04 4.47E+02 4.47E+04 2.98E+04 1.49E+04 4.47E+02

y4 	1.24E+05 8.27E+04 4.13E+04 1.24E+03 1.24E+05 	8.27E+04 4.13E+04 1.24E+03 1.24E+05 8.27E+04 4.13E+04 1.24E+03 1.24E+05 8.27E+04 4.13E+04 1.24E+03

y5 	2.26E+05 1.51E+05 7.53E+04 2.26E+03 2.26E+05 	1.51E+05 7.53E+04 2.26E+03 2.26E+05 1.51E+05 7.53E+04 2.26E+03 2.26E+05 1.51E+05 7.53E+04 2.26E+03

y6 	2.26E+05 1.51E+05 7.53E+04 2.26E+03 2.26E+05 	1.51E+05 7.53E+04 2.26E+03 2.26E+05 1.51E+05 7.53E+04 2.26E+03 2.26E+05 1.51E+05 7.53E+04 2.26E+03

y7 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00

y8 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00

y9 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00

y10 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 	0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00 0.00E+00

G1 (g/cm 3 ) 	1.674 	1.674 	1.674 	1.674 	1.752 	1.752 	1.752 	1.752 	1.830 	1.830 	1.830 	1.830 	1.908 	1.908 	1.908 	1.908

G2 	1.746 	1.746 	1.746 	1.746 	1.770 	1.770 	1.770 	1.770 	1.846 	1.846 	1.846 	1.846 	1.908 	1.908 	1.908 	1.908

G3 	2.086 	2.086 	2.086 	2.086 	1.812 	1.812 	1.812 	1.812 	1.866 	1.866 	1.866 	1.866 	1.908 	1.908 	1.908 	1.908

G4 	2.147 	2.147 	2.147 	2.147 	1.853 	1.853 	1.853 	1.853 	1.879 	1.879 	1.879 	1.879 	1.908 	1.908 	1.908 	1.908

G5 	2.300 	2.300 	2.300 	2.300 	1.883 	1.883 	1.883 	1.883 	1.942 	1.942 	1.942 	1.942 	1.909 	1.909 	1.909 	1.909

G6 	2.572 	2.572 	2.572 	2.572 	2.109 	2.109 	2.109 	2.109 	2.020 	2.020 	2.020 	2.020 	1.913 	1.913 	1.913 	1.913

G7 	2.598 	2.598 	2.598 	2.598 	2.230 	2.230 	2.230 	2.230 	2.084 	2.084 	2.084 	2.084 	1.923 	1.923 	1.923 	1.923

G8 	2.635 	2.635 	2.635 	2.635 	2.354 	2.354 	2.354 	2.354 	2.185 	2.185 	2.185 	2.185 	1.963 	1.963 	1.963 	1.963

G9 	2.641 	2.641 	2.641 	2.641 	2.467 	2.467 	2.467 	2.467 	2.264 	2.264 	2.264 	2.264 	2.027 	2.027 	2.027 	2.027

G10 	2.800 	2.800 	2.800 	2.800 	2.584 	2.584 	2.584 	2.584 	2.336 	2.336 	2.336 	2.336 	2.046 	2.046 	2.046 	2.046
G 1 (kPa ) 	7.69E+04 5.13E+04 2.56E+04 7.69E+02 7.69E+04 	5.13E+04 2.56E+04 7.69E+02 7.69E+04 5.13E+04 2.56E+04 7.69E+02 7.69E+04 5.13E+04 2.56E+04 7.69E+02
G 2 	8.69E+05 5.80E+05 2.90E+05 8.69E+03 3.46E+05 	2.31E+05 1.15E+05 3.46E+03 4.76E+05 3.18E+05 1.59E+05 4.76E+03 7.87E+04 5.25E+04 2.62E+04 7.87E+02
G 3 	4.03E+06 2.69E+06 1.34E+06 4.03E+04 9.61E+05 	6.40E+05 3.20E+05 9.61E+03 9.51E+05 6.34E+05 3.17E+05 9.51E+03 8.46E+04 5.64E+04 2.82E+04 8.46E+02
G 4 	4.91E+06 3.27E+06 1.64E+06 4.91E+04 1.47E+06 	9.80E+05 4.90E+05 1.47E+04 1.22E+06 8.13E+05 4.07E+05 1.22E+04 1.07E+05 7.11E+04 3.56E+04 1.07E+03
G 5 	7.77E+06 5.18E+06 2.59E+06 7.77E+04 1.85E+06 	1.23E+06 6.16E+05 1.85E+04 2.52E+06 1.68E+06 8.39E+05 2.52E+04 1.92E+05 1.28E+05 6.40E+04 1.92E+03
G 6 	1.48E+07 9.87E+06 4.93E+06 1.48E+05 5.10E+06 	3.40E+06 1.70E+06 5.10E+04 4.17E+06 2.78E+06 1.39E+06 4.17E+04 4.85E+05 3.24E+05 1.62E+05 4.85E+03
G 7 	1.66E+07 1.10E+07 5.52E+06 1.66E+05 8.32E+06 	5.54E+06 2.77E+06 8.32E+04 6.65E+06 4.43E+06 2.22E+06 6.65E+04 1.38E+06 9.17E+05 4.59E+05 1.38E+04
G 8 	3.67E+07 2.45E+07 1.22E+07 3.67E+05 1.26E+07 	8.42E+06 4.21E+06 1.26E+05 1.20E+07 8.01E+06 4.01E+06 1.20E+05 4.57E+06 3.05E+06 1.52E+06 4.57E+04
G 9 	3.73E+07 2.49E+07 1.24E+07 3.73E+05 3.73E+07 	2.49E+07 1.24E+07 3.73E+05 3.73E+07 2.49E+07 1.24E+07 3.73E+05 3.73E+07 2.49E+07 1.24E+07 3.73E+05
G 10 	3.73E+07 2.49E+07 1.24E+07 3.73E+05 3.73E+07 	2.49E+07 1.24E+07 3.73E+05 3.73E+07 2.49E+07 1.24E+07 3.73E+05 3.73E+07 2.49E+07 1.24E+07 3.73E+05
P minfail (kPa ) 	-1 	-1 	-1 	-1 	-1 	-1 	-1 	-1 	-1 	-1 	-1 	-1 	-1 	-1 	-1 	-1
Tabell E:a. 16 olika jordmaterialsammansättningar från torr sand till våt lera.

-- 225 of 311 --

Markstötvåg
2020-09-28 revidering 2 225
Bilaga F Hastighetsfält hos jord
I figurerna (F:a)-(F:h) redovisas hastighetsfälten hos jorden för olika
sammansättningar som beskrivs i kapitel 8. Lägg märke till hur hastigheten
hos jorden nära väggen byter riktning när hållfastheten sjunker från E1-S3
till E1-S4, se figur (F:f) och figur (F:h). Samt hur det börjar bildas kraftig
diffraktion på golvsidan runt hörnet när skjuvhållfastheten är lika låg som
E1-S4, se figur (F:h).
Figur F:a. Hastighetsfält hos jordsammansättning E1-S1 vid tiden 12 ms efter
detonation.
golv
vägg

-- 226 of 311 --

Markstötvåg
2020-09-28 revidering 2 226
Figur F:b. Hastighetsfält hos jordsammansättning E1-S1 vid tiden 25 ms efter
detonation.
Figur F:c. Hastighetsfält hos jordsammansättning E1-S2 vid tiden 12 ms efter
detonation.
golv
vägg

-- 227 of 311 --

Markstötvåg
2020-09-28 revidering 2 227
Figur F:d. Hastighetsfält hos jordsammansättning E1-S2 vid tiden 25 ms efter
detonation.
Figur F:e. Hastighetsfält hos jordsammansättning E1-S3 vid tiden 13 ms efter
detonation.

-- 228 of 311 --

Markstötvåg
2020-09-28 revidering 2 228
Figur F:f. Hastighetsfält hos jordsammansättning E1-S3 vid tiden 25 ms efter
detonation.
Figur F:g. Hastighetsfält hos jordsammansättning E1-S4 vid tiden 14 ms efter
detonation.

-- 229 of 311 --

Markstötvåg
2020-09-28 revidering 2 229
Figur F:h. Hastighetsfält hos jordsammansättning E1-S4 vid tiden 25 ms efter
detonation.

-- 230 of 311 --

Markstötvåg
2020-09-28 revidering 2 230
Bilaga G Framtagning av dynamiskt
spännings-töjningssamband enligt
Lampson (1946)
En plan stötvåg av godtycklig form kommer att propagera utan formändring
om spännings-töjningssambandet för materialet är en rät linje. Om
spänningstöjningssambandet är olinjärt, kommer stötvågen bete sig
annorlunda och kontinuerligt ändra form. Om spännings-töjningssambandet
är konkavt nedåt, såsom det ofta är fallet för jordmaterial enligt
Lampson (1946), vilket då betyder att små tryckspänningar kommer att
propageras snabbare än högre tryckspänningar hos stötvågen. Detta gäller
inte vid kraftig stötvåg jämför med kapitel 3:26 som illustrerar motsatsen
med numeriskt exempel
För en specifik spänning
 kan tillhörande stötvågshastighet beskrivas av



d
d	1
)	( =	V	
(G:a)
där
 är densiteten hos jordmaterialet och d
/d
 är lutningen hos spännings-
töjningskurvan vid den specifika spänningen
 Om våghastigheten mäts
vid olika tryckspänningsnivåer, är det möjligt att beräkna lutningen hos
spännings-töjningssambandet vid de aktuella spänningsnivåerna. Sedan med
hjälp av integration kan det bakomliggande spänningstöjningssambandet tas
fram till största tryckspänningen hos vågen.
I experimenten mättes trycket som funktion av tid på flera avstånd i
samband med filmning av propageringen av stötvågen i jorden. Detta gav
tillräcklig information för att härleda spänningstöjningssambandet. Från
experimenten fann Lampson (1946) ett empiriskt samband hos våghastig-
heten som stämde både för på- och avlastningsvågen
n
a	V
−






=
0
)	(


	
(G:b)
där
0 är en godtycklig spänningsnivå som kan antas vara till exempel
1 lb/in2 (6,895 kPa). För de studerade experimenten visade det sig att
pålastningskurvans hastighet kunde beskrivas med n = 1/6 och avlastnings-
kurvans hastighet med n = -1/2. För att studera hur bra dessa empiriska
samband beskriver hastigheten hos stötvågen som funktion av spänning så
har de experimentella värdena återskapats. Detta utfördes genom att läsa ur
punkter från given dynamiskt mätt spänningstöjningskurva för en omättad
siltig lera, figur 1 i Lampson (1946), och punktvis studera lutningen och

-- 231 of 311 --

Markstötvåg
2020-09-28 revidering 2 231
därmed räkna ut våghastigheten hos på- och avlastningskurva med hjälp av
ekvation (G:a). Lampsons originalfigur är återgiven i figur G:a.
Figur G:a. Experimentellt framtagen dynamiskt spännings-töjningssamband.
Figur 1 i Lampson (1946).
Densiteten antogs vara den medeldensitet som ges i tabell 9:22G för siltig
lera, vilket i SI enheter är 1692 kg/m3. figur G:b redovisar både återskapade
hastigheter och jämförelse med Lampson föreslagna empiriska samband.
Om det empiriska sambandet för hastighet som funktion av spänning som
föreslås av Lampson jämförs med experiment så syns det att ekvation (G:b)
väl beskriver våghastigheten för pålastningen för tryck över 50 kPa. För
avlastningen beskrivs våghastigheten väl för tryck under 900 kPa. Det
empiriska sambandet kan dock inte användas för att beskriva den branta
ökningen i våghastighet för avlastning med tryck över 900 kPa.

-- 232 of 311 --

Markstötvåg
2020-09-28 revidering 2 232
Figur G:b. Återskapade experimentella våghastigheter hos på- och
avlastningsvåg från figur 1 Lampson (1946). Jämförelse med
empiriska samband, ekvation (G:b) med konstanterna a = 700,
n = 1/6, och
 =  för pålastning och b = 24, n = -1/2, och
 =  för
avlastning.
Korrigering av hastigheten för om experimenten utfördes med sfärisk
spridning istället för plan spridning utfördes med följande ekvation
,
1
1
1
1
2
1
2














−





−
= −n	m	S
r
r
r
r
V	V	
(G:b)
där Vs är korrigerad hastighet vid trycknivå
, Vm är mätt hastighet vid
trycknivå
, r2 är ett godtyckligt avstånd men är inte längre ifrån än var max
tryckspänning hos vågen inte är högre än
. Avståndet r1 är initiellt avstånd
var första mätningen är utförd. Slutligen är n exponenten hos hastighets-
spänningssambandet där storleken hos n var experimentellt framtagen, se
ekvation (G:b).
Om korrektionen enligt ekvation (G:b) behövs kan de korrigerade på- och
avlastningshastigheterna beskrivas enligt
n
a	v
−






=
0
)	(


	
(G:c)
vid pålastning och
0
200
400
600
800
1000
1200
1400
1600
0 	200 	400 	600 	800 	1000 	1200
Tryckspänning,

[kPa]
Longitudinell hastighet,
 vL 	[m/s] .
pålastning
avlastning
pålastning-empiriskt samband
avlastning-empiriskt samband

-- 233 of 311 --

Markstötvåg
2020-09-28 revidering 2 233
n
b	v
−






=
0
)	(


	
(G:d)
vid avlastning.
Konstanterna sattes till a = 700,
0 = 1 kPa, och n = 1/6 för att jämföra
pålastning med experimentella värden. Vid avlastningen sattes de till b = 24,
0 = 1 kPa, n = -1/2, se figur (G:b).
Härefter följer Lampsons härledning av sambanden mellan spänning och
töjning för på- och avlastning. Från ekvation (G:a) ges



d
d	1	2 =	v	
(G:e)
Hastigheten i kvadrat kan också beskrivas med hjälp av ekvation (G:c)
vilket ger
n
a	v
2
0
2	2
−






=


(G:f)
vid pålastning. Om nu ekvationerna (G:e) och (G:f) sättes lika fås
n	n
a	a
2
0
2
2
0
2
d
d
d
d	1 −	−






=	





=










(G:g)
För pålastningskurva med n = 1/6 fås integralen

	

	







d
1
d
d
0
3
1
3
1
0
2
6
1
	2
0
2
	=	





=
−
a
a	
(G:h)
vilket reduceras till
3
4
3
1
0
2
3


	

a
=	
(G:i)
för pålastningskurvan. För avlastningskurvan med n = -1/2 och konstanten a
ändras till b i ekvation (G:g) fås


	












d
1
d
d
d
d
d	1 2
0
1
0
2
2
1
	2
0
2
b
b	b =	





=	





=
−
	−
(G:j)
Ekvation (G:j) ger integralerna

-- 234 of 311 --

Markstötvåg
2020-09-28 revidering 2 234


	






d
1
d 2
0
m
	 =
m
b
(G:k)
Vilket reduceras till






−	=





	
m
m b ln	2
0
(G:m)
Med hjälp ekvationerna (G:i) och (G:m) kunde därmed Lampson härleda
spännings-töjningssambandet såsom i figur (G:a).

-- 235 of 311 --

Markstötvåg
2020-09-28 revidering 2 235
Bilaga H Lampsons (1946) resonemang kring
framtagandet av empiriska samband
De empiriska ekvationerna för markstötvågens maxtryck och impuls tas
fram från experimentella resultat. figur H:a-H:c redovisar hur maxtryck
varierar som funktion av skalat laddningsavstånd för utvalda experiment
från Lampson (1946). På liknande sätt fås en känsla för hur impulsen per
areaenhet varierar som funktion av skalat laddningsavstånd för olika
laddningar och platser, se figur H:d-H:f. I figurerna H:g-H:i redovisas hur
partikelhastighet varierar för skalat laddningsavstånd för ett par utvalda
laddningar i siltig lera. I figur H:j-H:k redovisas maximal acceleration i
horisontal- och vertikalled för ett par utvalda laddningar i siltig lera.
Slutligen redovisas i figur H:l-H:m maximal deformation i horisontal- och
vertikalled för ett par utvalda laddningar i siltig lera
Figur H:a. Experimentella resultat för 0,5 lb TNT och AMATOL utförda i
Princeton, jordtyp lerig silt, maxtryck P0 [lb/in2] som funktion av
skalat laddningsavstånd
 [ft/lb1/3]. Från Lampson (1946).

-- 236 of 311 --

Markstötvåg
2020-09-28 revidering 2 236
Figur H:b. Experimentella resultat för 64 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, maxtryck P0 [lb/in2] som funktion av
skalat laddningsavstånd
 [ft/lb1/3]. Från Lampson (1946).

-- 237 of 311 --

Markstötvåg
2020-09-28 revidering 2 237
Figur H:c. Experimentella resultat för 1000 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, maxtryck P0 [lb/in2] som funktion av
skalat laddningsavstånd
 [ft/lb1/3]. Från Lampson (1946).

-- 238 of 311 --

Markstötvåg
2020-09-28 revidering 2 238
¨
Figur H:d. Experimentella resultat för 0,5 lb TNT och AMATOL utförda i
Princeton, jordtyp lerig silt, impuls per areaenhet i [lb-s/in2] som
funktion av skalat laddningsavstånd	
 [ft/lb1/3]. Från Lamp-
son (1946).

-- 239 of 311 --

Markstötvåg
2020-09-28 revidering 2 239
Figur H:e. Experimentella resultat för 64 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, impuls per areaenhet i [lb-s/in2] som
funktion av skalat laddningsavstånd	
 [ft/lb1/3]. Från Lamp-
son (1946).

-- 240 of 311 --

Markstötvåg
2020-09-28 revidering 2 240
Figur H:f. Experimentella resultat för 1000 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, impuls per areaenhet i [lb-s/in2] som
funktion av skalat laddningsavstånd	
 [ft/lb1/3]. Från Lamp-
son (1946).

-- 241 of 311 --

Markstötvåg
2020-09-28 revidering 2 241
Figur H:g. Experimentella resultat för 64 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, partikelhastighet up [cm/s] som
funktion av skalat laddningsavstånd
 [ft/lb1/3] i horisontal- och
vertikalled. Från Lampson (1946).

-- 242 of 311 --

Markstötvåg
2020-09-28 revidering 2 242
Figur H:h. Experimentella resultat för 216 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, partikelhastighet up [cm/s] som
funktion av skalat laddningsavstånd
 [ft/lb1/3] i horisontal- och
vertikalled. Från Lampson (1946).

-- 243 of 311 --

Markstötvåg
2020-09-28 revidering 2 243
Figur H:i. Experimentella resultat för 500 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, partikelhastighet up [cm/s] som
funktion av skalat laddningsavstånd
 [ft/lb1/3] i horisontal- och
vertikalled. Från Lampson (1946).

-- 244 of 311 --

Markstötvåg
2020-09-28 revidering 2 244
Figur H:j. Experimentella resultat för 64 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, max horisontal och vertikal
acceleration ag [cm/s2] som funktion av skalat laddningsavstånd
 [ft/lb1/3] i horisontal- och vertikalled. Från Lampson (1946).

-- 245 of 311 --

Markstötvåg
2020-09-28 revidering 2 245
Figur H:k. Experimentella resultat för 500 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, max horisontal och vertikal
acceleration ag [cm/s2] som funktion av skalat laddningsavstånd
 [ft/lb1/3] i horisontal- och vertikalled. Från Lampson (1946).

-- 246 of 311 --

Markstötvåg
2020-09-28 revidering 2 246
Figur H:l. Experimentella resultat för 64 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, max horisontal och vertikal
deformation d [cm] som funktion av skalat laddningsavstånd
 [ft/lb1/3] i horisontal- och vertikalled. Från Lampson (1946).

-- 247 of 311 --

Markstötvåg
2020-09-28 revidering 2 247
Figur H:m. Experimentella resultat för 1000 lb TNT utförda i Camp Gruber,
Oklahoma, jordtyp siltig lera, max horisontal och vertikal
deformation d [cm] som funktion av skalat laddningsavstånd
 [ft/lb1/3] i horisontal- och vertikalled. Från Lampson (1946).
Dimensionslös 
Lampson använder empiriska ekvationer för att förklara hur kvantiteterna i
tabell H:a varierar för markstötvåg. I de empiriska ekvationerna
introduceras följande parametrar k, W,
, v, och
, se tabell H:a. En iaktta-
gelse som görs är att enheterna för massa har varierats vilket gör det svår-
överskådligt för personer som är vana vid SI-enheter. En annan iakttagelse
är att laddningsvikten W antas ha dimensionen L3 vilket då i Lampsons fall
ger att W1/3 får dimensionen L vilket i sin tur leder till att det skalade
laddningsavståndet
 = r / W1/3 blir dimensionslös. Detta antages inte när SI-
enheter används i senare versioner såsom i Drake et al. (1989) av empiriska
ekvationer för markstötvåg. I kolumn 5 i tabell H:a ges även omvandlings-
faktor för SI-enheter.

-- 248 of 311 --

Markstötvåg
2020-09-28 revidering 2 248
Tabell H:a. Använda parametrar i de empiriska ekvationerna enligt
Lampson (1946).
Symbol Namn Dimension Enhet i
Lampson
Omvandling till SI enheter
k Jordkonstant ML-1T-2 1 lb/in2 6894,757 Pa=N/m2
W Laddningsvikt L3 1 lb 0,453592 kg
 Jorddensitet M/L3 1 slug/in3 890574,602 kg/m3
v Hastighet LT-1 1 ft/s 0,3048 m/s
 r/W1/3 1 -- 1 ft/lb1/3=0,396697838 m/kg1/3
I Lampsons resonemang kring hur de empiriska ekvationerna har byggts
upp nämns att på grund av att
 kan ses som en dimensionslös parameter där
man i praktiken dividerar en längd med en annan längd och kan då bortse

ifrån någon dimensionsanalys. Nästa resonemang är att det är en välkänd
princip att dimensionen av kvantiteterna hos båda sidor om ett likhetstecken
måste vara samma. Principiellt betyder detta att införandet av variablerna i
de empiriska ekvationerna är enkel; man bara skriver ner dimensions-
ekvivalenten för kvantiteten för vänsterled och kombinerar de andra
variablerna på ett sådant sätt att dimensionen på högerled blir lika med
vänsterledets. Som ett exempel nämner Lampson relationen för maxtrycket
P0 som kan skrivas
3
0
−
=
		
k	P	
(H:a)
Eftersom
 är dimensionslös enligt Lampson så måste k ha dimensionen för
tryck. Lampson visar att det finns en korrelation mellan k och elasticitets-
modulen hos jorden vilket är konsistent eftersom elasticitetsmodulen har
samma dimension som tryck. En kommentar kring Lampsons resonemang
är att laddningsvikten inte alls är dimensionslös i de empiriska ekvationerna
utan dimensionen är ft/lb1/3. Varför Lampson antagit att laddningsvikten har
dimensionen L3 är för författaren av denna rapport inte klarlagd. En
anledning kunde vara att energin i laddningen är relaterad till volymen hos
laddningsvikten.

-- 249 of 311 --

Markstötvåg
2020-09-28 revidering 2 249
Bilaga I Härledda jordkonstantsvärden k från
seismisk våghastighetsmätning,
Lampson (1946)
I tabell I:a återges värden från Lampson (1946) om hur jordkonstanten har
beräknats med hjälp av ekvation (9:22d) där våghastigheten v har mätts upp
från experiment. En intressant iakttagelse är att Lampson har mätt att sand
har en seismisk hastighet på 4600 – 8400 ft/s vilket ungefär motsvarar
1400 – 2560 m/s. Detta stämmer om jorden är tillräckligt kompakterad och i
Laine och Sandvik (2001) visas att den seismiska våghastigheten ökar
markant när sanden utsätts för ett ökat isotropiskt tryck från 5 till 60 MPa.
Då ökar den seismiska våghastigheten från cirka 1000 m/s till 3000 m/s för
den torra sanden.
Tabell I:a. Härledd jordkonstant k [lb/in2] för några jordtyper, Lampson (1946).
Jordtyp v [ft/s] k [lb/in2]
min max min max
Toppjord: lätt och torr
fuktig, siltig
lerig
semikonsoliderad
sandig lera
600
1 000
1 300
1 250
900
1 300
2 000
2 150
262
812
1 420
1 510
590
1 370
3 370
4 150
Våt sandig siltig jord
(loam eng.)
2 500 5 600
Lera, tätt packad och
våt, beroende på djup
3 000 5 900 8 850 34 100
Grus eller makadam 1 970 2 600 6 400 11 100
Packad sand 2 800 3 200 9 700 12 600
Sandig lera 3 200 3 800 10 000 13 900
Packad sandig lera 3 800 4 200 17 800 21 700
Vattenmättad sand 4 600 22 500
Sand 4 600 8 400 26 200 87 000
Lera, lerig sandsten 5 900 45 000
Lös berg 1 250 2 500 1 750 7 000
Vädersprucket: berg
Cementerad lera
(shale eng.)
Sandsten
1 500
7 000
4 250
10 000
11 000
9 000
3 100
63 000
23 500
140 000
156 000
116 000
Granit lätt sprucken 10 500 160 000
Massiv kalksten
(limestone eng.)
16 400 20 200 390 000 590 000

-- 250 of 311 --

Markstötvåg
2020-09-28 revidering 2 250
Bilaga J Drakes modell från 1983 och 1989
Här redovisas tryck som funktion av tid för Drakes modell 1983 och 1989.
Laddningsvikten i 1983 års modell är 1 kg C4 och laddningsvikten i 1989
års modell är 1 kg TNT.
Figur J:a. Jämförelse av Drakes modell 1983 med 1989 för tryck som
funktion av tid för en oreflekterad markstötvåg med f = 1,0 för torr
sand vid avståndet 1 m. Laddningsvikten antogs till 1 kg C4 för
1983 års modell och 1 kg TNT för 1989 års modell.
Figur J:b. Jämförelse av Drakes modell 1983 med 1989 för tryck som
funktion av tid för en oreflekterad markstötvåg med f = 1,0 för fullt
vattenmättad lera vid avståndet 1m. Laddningsvikten antogs till
1 kg C4 för 1983 års modell och 1 kg TNT för 1989 års modell.
-500
0
500
1000
1500
2000
0 	2 	4 	6 	8 	10 	12 	14 	16 	18 	20
Tryck
 P(t) [kPa]
tid t [ms]
torr sand -Drakes modell 1983
torr sand -Drakes modell 1989
-20000
-10000
0
10000
20000
30000
40000
50000
60000
70000
80000
0 	1 	2 	3 	4 	5
Tryck
 P(t) [kPa]
tid t [ms]
fullt vattenmättad lera -Drakes modell 1983
fullt vattenmättad lera -Drakes modell 1989

-- 251 of 311 --

Markstötvåg
2020-09-28 revidering 2 251
Bilaga K Beräkningsexempel reflexion enligt
ConWep (1992)
Här jämförs stötvågsberäkningar från ConWep (1992) DOS program med
Drake’s modell 1983, se kapitel 9:31 och reflexionsberäkningar enligt
kapitel 9:41 som baserar sig på just ConWep (1992). Beräkningsexemplet
illustreras i figur 9:41b. Figurerna K:a-(K:b) visar bra överensstämmelse
med resultat från ConWep. Men den överensstämmer inte exakt. Avkling-
ningen ser ut att vara lite snabbare i ConWep, jämför till exempel blå och
svart kurva i figur K:a. Skillnaden mellan båda beräkningarna blir mindre
om tidskonstanten α = 1,0 ändras till α = 1,07 i tryck-tidssambanden, se
resultat figur (K:c)-(K:d).
Figur K:a. Jämförelse av reflexionsberäkningar med ConWep:s dosprogram,
tidskonstant α = 1,0.
-1000
-500
0
500
1000
1500
2000
0 	20 	40 	60 	80 	100 	120 	140 	160 	180 	200
Tryck
 P(t) [kPa]
tid t [ms]
direkt
ytreflekterad
bottenreflekterad
direkt-conwep
ytreflekterad-conwep
bottenreflekterad-conwep

-- 252 of 311 --

Markstötvåg
2020-09-28 revidering 2 252
Figur K:b. Jämförelse av reflexionsberäkningar med ConWep:s dosprogram,
tidskonstant α = 1,0.
Figur K:c. Jämförelse av reflexionsberäkningar med ConWep:s dosprogram,
tidskonstant α = 1,07.
0
200
400
600
800
1000
1200
1400
1600
1800
2000
0 	20 	40 	60 	80 	100 	120 	140 	160 	180 	200
Tryck
 P(t) [kPa]
tid t [ms]
summa
summa-conwep
-1000
-500
0
500
1000
1500
2000
0 	20 	40 	60 	80 	100 	120 	140 	160 	180 	200
Tryck
 P(t) [kPa]
tid t [ms]
direkt
ytreflekterad
bottenreflekterad
direkt-conwep
ytreflekterad-conwep
bottenreflekterad-conwep

-- 253 of 311 --

Markstötvåg
2020-09-28 revidering 2 253
Figur K:d. Jämförelse av reflexionsberäkningar med ConWep:s dosprogram,
tidskonstant α = 1,07.
0
200
400
600
800
1000
1200
1400
1600
1800
2000
0 	20 	40 	60 	80 	100 	120 	140 	160 	180 	200
Tryck
 P(t) [kPa]
tid t [ms]
summa
summa-conwep

-- 254 of 311 --

Markstötvåg
2020-09-28 revidering 2 254
Bilaga L Autodyn-simuleringar av reflexion
Endimensionella beräkningar med tårtbits geometri utfördes med element-
storlek av 5 mm. Finita elementdomänens storlek var 15 m där änden hade
en ”transmit boundary”. Explosivämnet TNT modellerades med JWL EOS
med fyra olika laddningsstorlekar 125, 250, 500, och 1000 kg. Jorden som
16 olika generiska jordmaterial enligt bilaga E. Tre huvudtyper av
beräkningar utfördes, fri avlastning, reflexion mot betong, och reflexion mot
stel vägg. Vardera huvudtyp bestod av 64 simuleringar, det vill säga totalt
simulerades 192 explosioner. Denna reflexionsvägg var placerad på 5 m
avstånd från laddningen. Trycket mättes i närmaste framförvarande element
till väggen och jämfördes med samma element från den fria avlastnings-
simuleringen.
Nedan, i tabellerna L:a-Lc ges aktuella första maxtryck i början av
simuleringen för alla tre huvudfallen.
Tabell L:a. Maxtryck i [MPa] på laddningsavståndet 5 m för fallet med fri
avlastning för 16 olika jordtyper, se kapitel 8:2 och bilaga E.
EOS nr – kg TNT STR1 STR2 STR3 STR4
EOS1 125 0,66
0,99
1,46
2,38
0,86
1,28
1,90
3,08
1,21
1,77
1,71
4,39
1,93
2,85
4,34
7,10
250
500
1000
EOS2 125 2,56
3,40
4,45
6,17
2,97
3,90
5,24
7,71
3,61
4,72
6,41
10,12
4,76
6,47
9,88
15,29
250
500
1000
EOS3 125 6,85
9,12
11,59
15,63
7,91
10,13
13,48
18,58
9,25
11,83
15,51
23,86
12,08
15,72
21,08
37,77
250
500
1000
EOS4 125 77,96
114,66
140,94
195,18
97,53
108,94
151,33
208,76
85,54
105,26
158,14
214,69
87,39
114,11
158,98
211,79
250
500
1000

-- 255 of 311 --

Markstötvåg
2020-09-28 revidering 2 255
Tabell L:b. Maxtryck i [MPa] på laddningsavståndet 5 m för fallet med reflexion
mot betongvägg för 16 olika jordtyper, se kapitel 8:2 och bilaga E.
EOS nr – kg TNT STR1 STR2 STR3 STR4
EOS1 125 1,15
1,77
2,67
4,31
1,53
2,31
3,48
5,78
2,17
3,25
5,02
8,43
3,56
5,32
8,34
13,72
250
500
1000
EOS2 125 4,58
5,96
7,76
11,25
5,27
6,84
9,09
13,85
6,43
8,64
12,09
18,98
9,14
12,59
19,41
31,30
250
500
1000
EOS3 125 12,06
15,54
20,30
26,27
13,71
17,89
23,29
31,31
16,26
21,33
28,03
42,56
20,85
27,41
38,39
59,89
250
500
1000
EOS4 125 114,63
164,69
199,39
272,63
118,46
157,28
211,57
285,62
126,89
154,56
218,82
292,79
125,82
162,89
224,33
289,38
250
500
1000
Tabell L:c. Maxtryck i [MPa] på laddningsavståndet 5 m för fallet med reflexion
mot stel vägg för 16 olika jordtyper, se kapitel 8:2 och bilaga E.
EOS nr – kg TNT STR1 STR2 STR3 STR4
EOS1 125 1,32
1,99
2,96
4,85
1,73
2,57
3,87
6,44
2,43
3,60
5,65
9,38
3,96
5,98
9,36
15,50
250
500
1000
EOS2 125 5,15
6,52
8,50
12,50
5,86
7,46
9,81
14,86
7,15
9,34
13,17
21,38
9,89
13,91
21,28
34,49
250
500
1000
EOS3 125 13,81
17,77
22,98
30,27
15,73
20,40
26,58
36,58
18,86
24,16
31,81
50,69
24,58
31,70
44,69
80,65
250
500
1000
EOS4 125 158,13
220,03
306,43
422,92
169,49
215,82
317,88
432,18
174,68
228,52
318,36
416,29
171,29
238,39
301,72
405,91
250
500
1000

-- 256 of 311 --

Markstötvåg
2020-09-28 revidering 2 256
Bilaga X Laine och Larsen (2007): Numerical
Study of How the Ground Shock
Coupling Factor is Influenced by
Soil Properties 78th Shock &
Vibration Symposium, Philadelphia,
PA
Numerical Study of How the Ground Shock
Coupling Factor is Influenced by Soil Properties
Leo Lainea,* and Ola Pramm Larsenb
aANKER – ZEMER Engineering A/S
Stugvägen 4, SE-438 94 HÄRRYDA, Sweden
*Corresponding author: leo.laine@telia.com
bANKER – ZEMER Engineering A/S
P.O. Box 253, NO-0702 OSLO, Norway
Already during the Second World War empirical expressions were derived to predict
the magnitude and impulse of a ground shock generated by high explosives. One
parameter that is of main importance when using the empirical equations is the
coupling factor. The coupling factor describes how much of the released energy from
the high explosive is transmitted into the ground as a function of depth of burial. This
paper aims to clarify which soil properties influence the coupling factor as a function
of the scaled depth of explosion. The ground shock was analysed with a two-
dimensional axis symmetric explicit finite element solver with a multi-material euler
formulation. A total of 4 different soil materials were analysed, scaling from dry sand
to fully saturated clay. The scaled depth of burial was varied between -0.1 to 1.0
m/kg1/3. Targets points in horizontal, vertical and 45 degree angle direction were used
to derive the coupling factor by applying the analysed results of peak pressure and
particle velocity. The simulation results were compared with the generalised coupling
factor found in the ground shock literature. According to the literature the generalised
coupling factor increases smoothly with reduced derivative as function of depth of
burial. The same generic function is mainly proposed to be used for all loose soils.
The simulation results indicate that the coupling factor must be seen as a more
complicated relationship than only dependent on depth of burial. The simulation
results showed that it will vary with; the soil properties, studied angle from the centre
of explosive, and the scaled distance from the explosive. Additionally, for dry sand
the coupling factor curve showed an unexpected minimum at 0.05 m/kg1/3 depth of
burial for the studied results in 45 degree angle.

-- 257 of 311 --

Markstötvåg
2020-09-28 revidering 2 257
INTRODUCTION
The Swedish Rescue Services Agency (SRSA) is responsible for the building regulations of the Swedish civil
defence shelters. The shelters have specific regulations for how they are planned, built, equipped and maintained
[1]. One of many regulations state what loading level the shelters should withstand: “The effect of a pressure
wave corresponding to that produced by a 250 kg GP-bomb with 50 weight per cent TNT which burst freely
outside at a distance of 5.0 meters from the outside of the shelter during free pressure release”. However, many
of the shelters are designed as basements below ground surface. This is the reason why more knowledge about
how the shock wave affects buried shelters is needed.
During the Second World War extensive experiment series and research were conducted on ground shock
generated by high explosives [2]. This early work functions as a foundation for the empirical equations that are
widely used to estimate the loading from ground shock [3]-[6]. There is especially one parameter in these
empirical equations that is very important for the accuracy of the empirical equations, and that is the coupling
factor. The coupling factor f is described in [4] by the following relationship
( 	)
( 	)
contained
surface	near
,	,	,	,
,	,	,	,
a	i	d	u	p
a	i	d	u	p
f p	p
p	p
=
(eq.1)
where the numerator represents the ground shock magnitudes of a partially to shallow buried explosive and the
denominator represents the magnitude of a fully buried explosive in the same medium. The ground shock
magnitudes in eq.1 are pressure p, particle velocity up, particle displacement dp, impulse i, and acceleration a.
The validity range of eq.1 is given from 0.8 m/kg1/3 to 5.0 m/kg1/3. In the literature, [3]-[5], it is often shown that
the coupling factor f(d) is a function of scaled depth of burial d and can be generalised as one smooth slowly
increasing f(d) curve that represent loose soils, see Fig 1. The aim of this paper was to find out if this generalised
f(d) curve can be verified by numerical simulations and if the shape of the curve varies with other parameters
than only the depth of burial.
Fig. 1. Ground shock Coupling Factor f as a function of scaled depth of burst d. Figure originally from [4].
The outline of the paper is as follows: The section FINITE ELEMENT MODEL is discussing how the model
was setup. Section SOIL MATERIALS shows how the different soil properties were generated. In
SIMULATIONS section the analyses and results are shown. Finally, CONCLUSIONS section concludes the
findings.
FINITE ELEMENT MODEL
The finite element model has been designed to capture how the scaled depth of burial d, scaled distances to the
charge at various angles, and the soil properties, affect the magnitudes of the shock wave in the ground. The
shock propagation was analysed with a two dimensional axis symmetric explicit finite element solver with multi-
material Euler formulation found in AUTODYNTM [7]. The charge was modelled with the Jones-Wilkins-Lee
Equation Of State (EOS) and the used explosive charge weight was 1 kg TNT. The air was modelled as ideal
gas. The scaled d was varied between -0.1 to 1 kg/m1/3. The shock wave magnitudes were studied at different

-- 258 of 311 --

Markstötvåg
2020-09-28 revidering 2 258
scaled distances from the charge in three different angular directions in the soil. The studied angle directions
were horizontal, -45 degrees downward, and -90 degrees vertically downward, see Fig. 2.
Fig. 2. Principal layout of the finite element model. The red area illustrates the explosive with scaled depth of
burial d = D/W1/3, where D is the depth of burial. The gray dots illustrate target points used to measure ground
shock magnitude parameters.
Usually, when euler models are built, boundaries of type outflow or transmit are used to limit the lengths and
number of used cells. However, these boundaries are only approximations and introduce numerical errors and
therefore are required to be sufficiently far from the studied area to ensure accuracy in the simulations. Such
error sources, though, were avoided in the analyses by using an automated remapping functionality that
expanded the lengths of the euler domain with the ratio 2:1 during each remap. The used number of cells of the
domains was kept constant, 400x200, see Fig 3. The remapping was done just before the shock wave reached the
end of the domain. The automation was implemented in AUTODYN by using a combination of scripting
macros and user-subroutines.
Fig. 3. Illustration of when the euler domain is expanded by using remapping. Upper left material location plot
shows when the domain is the smallest and then some of the expanded domains. The purple and brown colours
illustrate the expanding high explosive gases and the soil, respectively.
1	1.0 	3/1 	=		− W
D
d	5	06	.0 	3/1 	 W
R
5	06	.0 	3/1
deg	45 	 W
R
air
soil
5	06	.0 	3/1 	 W
R
Axis-symmetry 	Remapped boundary
Remapped boundary
1 kg TNT

-- 259 of 311 --

Markstötvåg
2020-09-28 revidering 2 259
E1 dry sand
E2 linearly scaled
E3 linearly scaled
E4 fully saturated clay
E1
Compression,
=ρ/
−
E3 E2	E4
Pressure, P
S1
S4
S3
Pressure, P
S2
Shear strength,
y
S1 dry sand
S2 linearly scaled
S3 linearly scaled
S4 fully saturated clay
SOIL MATERIALS
The soil material properties were gradually changed from dry sand to fully saturated clay. A total of 4 different
soil materials were generated to study the effect of the coupling factor. In this study, the material model used was
derived to study granular materials [8]. When deriving the generic soil materials in-between the two extremes,
dry sand and fully saturated clay, their Equation Of States (EOS) and strength parameters were selected as
starting and ending curves. The starting EOS was the dry sand found in [9]-[10], here named E1 the second EOS
was for a fully saturated clay, here named E4. Linear scaling was used to derive two more EOS between these
two extremes named E2 and E3. The gradual scaling of EOS is shown in Fig. 4. Similarly the shear strength was
linearly scaled between the dry sand [9]-[10] and the fully saturated clay to generate S1, S2, S3, and S4
respectively as illustrated in Fig. 5.
Fig. 4. Illustration of how the Equation of State, Ei, is varying for the different soils and the linear scaling
between the dry sand and the fully saturated clay.
Fig. 5. Illustration of how the shear strength, Si, is varying for the various soils and the linear scaling between
the dry sand and the fully saturated clay.
The material model allows the user to define the EOS as pressure as a function of density P(
), shear strength as
a function of pressure
y(P), bulk sound speed as a function of density c(
) and finally shear modulus as a
function of density G(
). Each one of the soil properties required their specific c(
) and G(
). Additionally a
hydro tensile limit of Pmin = -1 kPa was defined for all soil properties due to the soils lack of handling any
negative pressure on a macro level.
The studied soil materials E1-S1 (dry sand), E2-S2, E3-S3, and E4-S4 (fully saturated clay) and their material
properties are found in [11]. Only the properties of dry sand, E1-S1, are based on experimental data [9]-[10].
These experiments were performed on sand found in Sjöbo, Sweden. In these experiments, tri-axial pressure
cells up to about 100 MPa were used. The tests were performed first by isotropical loading and unloading to
receive a fairly good picture of the porous EOS. The experiments were followed by tri-axial shear tests.
Additionally the pressure and shear waves were measured during the tests by P- and S- transducers to get an idea

-- 260 of 311 --

Markstötvåg
2020-09-28 revidering 2 260
how the bulk modulus and shear modulus varies with density and pressure. The fully saturated clay is only a
generic soil property, similar to what is found in shock literature, of what could be expected by fully saturated
clay.
SIMULATIONS
The simulations were performed in such a way that every analysis had a different scaled depth of burial d for the
explosive charge. The parameter d was varied with following steps d = [-0.1, -0.05, 0, 0.05, 0.1, 0.15, 0.2, 0.3,
0.4, 0.5, 0.6, 0.8, 1] m/kg1/3. This was done for all four soil materials, which gives a total of 4x13 = 52
simulations. To derive the coupling factor the simple relationship presented in eq.1 is used. Fig. 6 shows the
calculated coupling factor based upon maximum pressure for scaled charge distance Z = R/W1/3 = 3.69 m/kg1/3
and angle of -45 degrees for the studied soil properties. However, from this it is hard to distinguish any clear
trends for the coupling factor based on the maximum pressure for the different soil properties. Some general
trends can be seen for the soil properties as group, the coupling factor becomes close to f→1 for all soil
properties when scaled depth of burial comes closer to d→0.6. This trend is also what is used in the literature,
see Fig. 1. Another major trend is that all soil properties except for sand have generally increasing coupling
factor with increasing scaled depth of burial.
Fig. 6. Coupling factor f as a function of depth of burial d for the scaled distance Z = 3.69 m/kg1/3 and angle -45
degrees for the four soil properties.
By continuing to study the maximum pressure based coupling factor f and studying how the target angle affects
the results for one of the soil properties, a clear trend is apparent, the coupling factor function starts at a higher
level and its derivative becomes higher when the target angle moves from 0 to -45 to -90 degrees. In Fig. 7 this is
illustrated for one of the generic soil properties E3-S3 which can represent the general trend for all soils.
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
1.1
-0.1 	0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1
depth of burial d [m/kg1/3]
coupling factor
 
f [-]
E1-S1
E2-S2
E3-S3
E4-S4

-- 261 of 311 --

Markstötvåg
2020-09-28 revidering 2 261
Fig. 7. Coupling factor f as a function of depth of burial d for the scaled distance Z = 3.69 m/kg1/3 and angle 0, -
45, and -90 degrees for the soil property E3-S3.
A similar trend is also observed when different target distances are studied as shown in Fig 8. The coupling
factor function receives a steeper derivative when the scaled distance to target Z is reduced.
Fig. 8. Coupling factor f as a function of depth of burial d for the scaled distances Z = 0.8, 1.71, 3.69, and 5
m/kg1/3 and angle -45 degrees for the soil property E3-S3.
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
1.1
-0.1 	0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1
depth of burial d [m/kg1/3]
coupling factor
 
f [-]
E3-S3 -0 degrees
E3-S3 -45 degrees
E3-S3 -90 degrees
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
1.1
-0.1 	0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1
depth of burial d [m/kg1/3]
coupling factor
 
f [-]
E3-S3 Z=0.8
E3-S3 Z=1.71
E3-S3 Z=3.69
E3-S3 Z=5

-- 262 of 311 --

Markstötvåg
2020-09-28 revidering 2 262
An interesting phenomenon was observed for the dry sand, E1-S1, for the target angle -45 degrees. It actually
showed that a minimum occurred for the coupling function f not at depth of burial -0.1 m/kg1/3 as expected
instead it occurred at +0.05 m/kg1/3, see Fig. 9.
Fig. 9. Coupling factor f as a function of depth of burial d for the scaled distances Z = 1.27, 2.33, 3.69, and 5
m/kg1/3 and angle -45 degrees for the soil property dry sand E1-S1.
The phenomenon with a transferred minimum point can be explained by studying the pressure propagation for
depth of burial d = -0.1 m/kg1/3 and d = 0.05 m/kg1/3 for a target point in the -45 degree angle, see Fig. 10 and
Fig. 11, respectively. It can be seen, that when the charge is above ground, d = -0.1 m/kg1/3, the shock wave
propagates faster in air than in the ground. The E1-S1 has the slowest sound speed of all the studied soil
materials. This gives the effect of that the airblast actually initiate a shock wave in the soil before the pure
ground shock has reached the studied surface point. This gives an un-symmetric propagation of the ground shock
and explains why an increase in the coupling factor occurs when the charge is in the air. In Fig. 11 it is seen that
when the charge is slightly buried, d = 0.05 m/kg1/3, the un-symmetric behaviour is almost totally disappeared.
This is due to the fact that the airblast is weakened along the horizontal direction.
Fig. 10. Pressure plots at times 2, 4, 6, 8, 10, and 12 ms for the soil property dry sand E1-S1 with depth of burial
d = -0.1 m/kg1/3. Red colour corresponds to 40 kPa or higher and blue to 0 kPa. 58 is a 45 degree angle target
point.
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
1.1
-0.1 	0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1
depth of burial d [m/kg1/3]
coupling factor
 
f [-]
E1-S1 Z=1.27
E1-S1 Z=2.33
E1-S1 Z=3.69
E1-S1 Z=5

-- 263 of 311 --

Markstötvåg
2020-09-28 revidering 2 263
Fig. 11. Pressure plots at times 2, 4, 6, 8, 10, and 12 ms for the soil property dry sand E1-S1 with depth of burial
d = +0.05 m/kg1/3. Red colour corresponds to 40 kPa or higher and blue to 0 kPa. 58 is a 45 degree angle target
point.
The calculated coupling factor based upon maximum particle velocity did not differentiate much from the case
when maximum pressure was used. The results from these plots are therefore omitted from this paper. Eq.1 also
suggests impulse to be used to derive the coupling factor. The simulation results showed that when the impulse
was used a general trend was that the coupling factor f became in significantly lower and not so steep slope
compared with pressure and particle based coupling factor. Another issue with using impulse are the reflections
which occur from the surface. These surface reflections will influence and reduce the impulse results for scaled
distances that are of interest, ranging from 0.8 m/kg1/3 to 5.0 m/kg1/3. Maximum accelerations are hard to receive
correct measurements of in field tests and are therefore excluded here. However, when the coupling factor was
calculated by using the ratio of kinetic energy transferred to the soil and to the air, a clear distinction could be
seen in the coupling factor function when the different soil properties were studied, see Fig. 12. The Fig. 12 was
derived by studying the ratio of air kinetic energy and soil kinetic energy at analysis time 3 ms. Adjustments on
the kinetic energy curves were needed due to jumps when remapping was performed. The jumps occur because
some of the soil ejecta are not remapped correctly and these high kinetic energy parts of the soil are excluded
from the calculation, this gives a clear instant loss when remapping is performed. But with the adjustments, by
adding the kinetic energy jump after each remap, the curve became smooth over the whole analysis time. The
results of Fig. 12 show that the clay is clearly faster than the other soils in reaching the full coupling factor of f=1
when depth of burial d is increased. For example at d=0 m/kg1/3 the sand has only f=0.19 and the clay has
f=0.47m which is an increase in 147 percent. At d=0.05 m/kg1/3 the sand has a coupling factor of f=0.64 and the
clay has f=0.73m which is an increase in 14 percent. This indicates the need of including the soil type and its
properties in the definition of the coupling factor.

-- 264 of 311 --

Markstötvåg
2020-09-28 revidering 2 264
Fig. 12. Coupling factor f based upon transferred ratio of kinetic energy f = Ek,soil/Ek,total for the four soil
properties as a function of scaled depth of burial at analysis time 3ms.
CONCLUSIONS
The paper’s objectives of finding clear relationships of what soil properties influence the coupling factor was not
fulfilled. The results presented here indicate that the coupling factor is not only influenced by the scaled depth of
burial but it is also influenced by the soil properties, as expected. The influence of the soil properties on the
coupling factor was though already acknowledged by [2] but somehow it became accepted to utilize a simplified
coupling factor in the following years, 1946-1989. However, this paper indicates that the coupling factor is also
influenced by the geometrical layout of the studied problem. This combined effect makes it harder to draw any
clear conclusions therefore only some observations and argumentations can be stated at this point:
1. The soil properties have an influence of how steep the coupling factor is as a function of depth of burial.
This is clearly seen when studying the ratio of kinetic energy transmitted to soil and air. The soil
material which has the most porous equation of state resulted in the weakest coupling factor function.
The derivative of the coupling factor function seemed to increase when the equation of state became
less porous, see also Fig 11. This indicate that different coupling factor functions should be used for
different loose soils or at least incorporate a scaling parameter based upon soil properties on the general
coupling factor function.
2. When studying the coupling factor function by calculating it by using maximum pressure or particle
velocity it can be seen that the scaled distance and the angle of the studied target locations are of
influence. The results showed that when the scaled distance decreases the derivative of the coupling
factor function increases and the coupling factor also receives a higher starting point. A corresponding
effect seems to be present for the angle of the studied target locations.
3. An unexpected minimum on the coupling factor function was shown to occur for dry sand when the
charge was shallow buried at 0.05 m/kg1/3 and not when the charge was in the air, as expected and seen
for the other studied soil properties. This minimum was clearly seen when -45 degree angle target
locations with different scaled distances were studied. The reason for this is that the charge detonating
in air actually generated a ground shock wave with the airblast before the “pure ground shock” had
reached a certain studied point on the surface. This is due to that the dry sand has much lower shock
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
1.1
-0.1 	0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1
depth of burial d [m/kg1/3]
coupling factor
 
f [-]
E1-S1
E2-S2
E3-S3
E4-S4

-- 265 of 311 --

Markstötvåg
2020-09-28 revidering 2 265
wave velocity than air. This result in a un-spherical shock wave propagation which is most likely is
assumed to be spherical by the simple definition of the coupling factor found in [3], see eq.1. The
validity range of scaled distance of 0.8 m/kg1/3 to 5.0 m/kg1/3 is specified which the FE analysis
clearly show that nonspherical propagation will occur within this range.
4. Based on the large variations of the coupling factor relationship seen in the FE analysis when studying
soils, different scaled distances, and target location angles, it is tempting to suggest an alternate
coupling factor definition which is not dependent on local shock propagation properties to the same
extent as the simple relationship suggests, see eq.1. Averaged quantities over the entire soil domain
could probably be employed for yielding better consistency over the whole range of charge depths.
Another suggested approach would be to use a global property like the kinetic energy distribution
between soil and air, see Fig. 12. This approach would however be very hard to realize experimentally
and is probably only feasible in a FE-analysis setting.
Finally, more studies of both experimental and simulative nature are encouraged to enlighten if a new definition
of the coupling factor is needed and what main factors influence the shape of the coupling factor function in
addition to the scaled depth of burial.
ACKNOWLEDGEMENTS
The authors acknowledge the support given by Swedish Rescue Services Agency and especially Björn Ekengren.
Additionally members of the West Sweden Shock Wave Group and especially Dr. Morgan Johansson and Dr.
Joosef Leppänen are highly acknowledged for their input. Finally, Jan-Christian Anker’s feedback on the writing
is highly appreciated.
REFERENCES
[1] Ekengren B. (2006): Skyddsrum, SR 06 (Civil Shelters 06 in Swedish), Swedish Rescue Services Agency,
B54-141/06, Karlstad, Sweden.
[2] Lampson C.W. (1946): Final Report on Effects of Underground Explosions, Div. 2, National Defence
Research Committee of the US Office Scientific R&D, NDRC Report No. A-479, OSRD Report No. 6645.
[3] Drake J.L. och Little Jr C.D. (1983): Ground Shock from Penetrating Conventional Weapons, Interaction of
Non-nuclear Munitions with Structures, U.S. Air Force Academy, USA.
[4] Drake J.L., Smith E. B., och Blouin S.E. (1989): Enhancements of the Prediction of Ground Shock from
Penetrating Weapons, 4th Int. Symp. on the Interaction of Non-nuclear Munitions with Structures.
[5] Bulson P. (1997): Explosive Loading of Engineering Structures, ENFN SPON, London, England.
[6] ConWep (1992): Collection of conventional weapons effects calculations based on TM 5-855-1,
Fundamentals of Protective Design for Conventional Weapons, U.S. Army Engineer Waterways Experiment
Station, Vicksburg, USA.
[7] Century Dynamics Inc., (2004): AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[8] Moxnes J. F., Ødegårdstuen G., Atwood A., and Curran P. (1999): “Mechanical properties of a porous
material studied in a high speed piston driven compaction experiment”, 30th International Annual Conference of
ICT
Energetic Materials, Fraunhofer Institut Chemische Technologie.
[9] Laine L. and Sandvik A. (2001): “Derivation of mechanical properties for sand”, 4th Asian-Pacific
conference on Shock and Impact Loads on Structures, CI-Premier PTE LTD, vol. 4, pp 353-360, Singapore.
[10] Heyerdahl H. and Madshus C. (2000): “EOS-data for sand, Tri-axial tests on sand from Sjöbo”, Norges
Geotekniske institutt, NGI rept. 20001157-1, Oslo, Norway.
[11] Laine L. (2006): “Study of Planar Ground Shock in Different Soils and Its Propagation Around a Rigid
Block”, 77th Shock and Vibration Symposium October, Monterey, CA.

-- 266 of 311 --

Markstötvåg
2020-09-28 revidering 2 266
Bilaga Y Laine och Larsen (2009): Proposal on
How to Model the Unloading in a
Compaction Equation of State based
upon Tri-axial tests on Dry Sand, 80th
Shock & Vibration Symposium, San
Diego, CA
Proposal on How to Model the Unloading in a Compaction
Equation of State based upon Tri-axial tests on Dry Sand
Leo Lainea,* and Ola Pramm Larsenb
aANKER – ZEMER Engineering AS
Stugvägen 4, SE-438 94 HÄRRYDA, Sweden
*Corresponding author: leo.laine@telia.com
bANKER – ZEMER Engineering AS
P.O. Box 253, NO-0702 OSLO, Norway
This paper proposes how a compaction Equation of State (EOS) can be used to
describe the unloading wave as a function of both density and pressure. The
modification will result in a more accurate way to calculate the shock wave
propagation and attenuation in dry sand. Previously, only an elastic unloading was
available in the compaction EOS in AUTODYN by specifying the elastic bulk sound
speed as a function of density. Currently, a nonlinear modification is available which
relates the slope to a user defined bulk module as a function of density. However,
neither of these options captures properly the nonlinear behaviour seen in tri-axial test
data during unloading and how the unloading curve shape varies with both density
and pressure.
The proposed modifications to the unloading phase for the compaction EOS are based
upon tri-axial isotropic and shear tests performed on dry sand. The elastic pressure
and shear wave velocities were also measured during isotropic loading. Isotropic
unloading was performed from different pressure levels. The results show how the
proposed modification which considers both density and pressure for calculating the
slope of the unloading can represent the tri-axial test data within the measured
pressure range and up to the theoretical maximum density.
INTRODUCTION
The Swedish Civil Contingencies Agency (MSB) is responsible for the building regulations of the Swedish civil
defence shelters. There are specific rules for how the defence shelters are planned, built, equipped and

-- 267 of 311 --

Markstötvåg
2020-09-28 revidering 2 267
maintained [1]. One of many regulations state what loading level the shelters should withstand: “The effect of a
pressure wave corresponding to that produced by a 250 kg GP-bomb with 50 weight per cent TNT which burst
freely outside at a distance of 5.0 meters from the outside of the shelter during free pressure release”. However,
many of the shelters are designed as basements below ground surface. This is the reason why more knowledge
on how the ground shock propagates and attenuates during the scaled distances of 0.1 to 10 kg/m3 and affects
buried shelters, is needed.
During the Second World War extensive experiment series and research were conducted on ground shock
generated by high explosives [2]. This early work functions as a foundation for understanding the behaviour of
how the shock waves propagates and attenuates in earth media. In [2], Lampson states that the pressure in the
soil from the detonation of an explosive charge is propagated by a plastic wave which is characterized by a
continuous change of shape and of duration with distance from the charge, see Fig. 1 for illustration. Close to the
source the shape will be sharp and after a distance it will start to attenuate and change shape of the wave.
Fig. 1. Illustration of how the ground shock wave change shape during propagation in a compactable soil.
As already stated in [2] by Lampson, the reason for the continuous change of shape is the pressure density
relationship which is common for compactable soils, see Fig. 2. The left illustration in Fig.2 shows the loading
and unloading path for a generic compactable soil. This curve also defines the loading and unloading wave speed
at a certain pressure and density, see right illustration in Fig. 2. The relationship between pressure, density and
wave speed c is simply seen as
𝑐 = √𝜕𝑃
𝜕𝜌 . (1)
The right illustration Fig.2 shows that the unloading wave speed is higher than the loading wave speed when
above a certain pressure level. This means that the high pressure shape will attenuate fast by the unloading. For
lower pressures the unloading speed can be slower which would result in that the wave shape starts to have a
long unloading tail.
Fig. 2. Illustration of a compactable soil and how the pressure density curve relates to wave speeds as a function
of pressure. Solid and dashed lines represent loading and unloading, respectively.
pressure
distance from explosive source
density
pressure
Pressure
wave speed

-- 268 of 311 --

Markstötvåg
2020-09-28 revidering 2 268
A simple way of modelling compaction materials is to define the plastic compaction curve as a pressure function
of density P(
) and the unloading wave speed as a function of density c(
), see Fig. 3 for illustration. The
unloading is then represented by the straight lines on top of the dashed unloading curves, in Fig. 3. Earlier work
by Laine et al. on deriving mechanical properties for dry sand from tri-axial experiments, [3] [4], have been
widely used for shock simulation involving dry sand within the AUTODYN community [5] with quite descent
results e.g. for determining the blast load from buried mines, see e.g. [6] [7]. Here the linear approximation of
the unloading curves does not influence the results except for determining the level of shock wave energy
absorbed by the dry sand. It is correctly stated in [8] that the material data provided for dry sand in Laine et al.
[3] does not include an easy change on how moisture affects the input parameters of the compaction EOS. The
original compaction model [10] would need a totally new set of input when the soil type changes in water
contents, porosity, and soil skeleton. In [11] a total of 16 generic soil types were generated from dry sand to fully
saturated clay. However, the main deficiency of the original model [10] and the given data for dry sand [3] for
the compaction EOS is that the unloading phase is too simplified to properly model the shock wave propagation
and the change in shape of the pressure wave as stated in [1]. One way to solve this is to try model the soil as a
three phase medium shown in [12] which is a quite interesting approach. However, in this paper a different
approach is introduced. The same experimental data for dry sand as shown in [3] and [4] are re-visited to derive
how the unloading wave speed can be defined as a function of both density and pressure i.e. c(
,P) for the dry
sand. The proposed modelling of the unloading phase improves on the model previously presented and
previously derived material data for the dry sand with respect to describing how the ground shock pressure wave
propagation and change in shape varies with distance from detonation and time.
The proposed modelling captures the dashed unloading curves, as illustrated in Fig.3 for the whole density and
pressure domain as well as the transition into fully compacted material. The fully compacted state is reached at
(
n, Pn). At this point the material is seen as linear material with Theoretical Maximum Density (TMD)
TMD at
zero pressure, see Fig. 3.
Fig. 3. Illustration of an EOS compaction, where the solid line between (
0, P0=0) and (
n, Pn) shows a plastic
compaction curve, dashed lines illustrate nonlinear unloading and the straight lines on top of the dashed lines
show linear approximation with elastic unloading wave c(
). The point (
n, Pn) defines when the material is seen
as fully compacted and has a linear elastic wave speed of cTMD.
The paper is organized as follows: The section EXPERIMENTAL RESULTS AND EARLIER PROPOSED
SAND MODELLING will re-visit the experimental results with focus on the compaction EOS and the
unloading. Further information on the shear strength; see [3] and [11]. In the section DERIVATION OF HOW
THE UNLOADING WAVE SPEED IS A FUNCTION OF BOTH DENSITY AND PRESSURE the
optimization formulation and the logical steps are shown for the defining the surface c(
,P) from the
experimental results. In the section COMPARISON OF UNLOADING PROPERTIES BETWEEN OLD AND
NEW EOS the initial unloading wave speed and specific energy properties are compared. Finally the section
CONCLUSIONS AND FUTURE WORK sums up the proposed model and provides suggestions for future
work.
Pressure, P
density,


0

n, Pn
cTMD

TMD

-- 269 of 311 --

Markstötvåg
2020-09-28 revidering 2 269
EXPERIMENTAL RESULTS AND EARLIER PROPOSED SAND MODELLING
The Norwegian Geotechnical Institute (“NGI”) has characterised the soil and performed tri-axial tests on the
sand from Sjöbo Sweden [4], see also [3]. The characterization of the soil showed that the grain size distribution
in the sand was medium to coarse, with grain size number C60/C10 approximately equal to two. The content of
organic compounds was less than one percent. The in situ dry density was approximately 1574 kg/m3; the
average water content was approximately 6.57 percent. Finally, the average specific weight of the grains was
2641 kg/m3.
For the experimental setup, two types of tri-axial cell devices were used for the seven tests performed. Firstly,
the “NGI standard Cell device” [3] was used for tests up to 2 000 kPa in confinement stress, and secondly for
tests above this confinement stress a rock tri-axial cell device was used, see Fig. 4. A cylindrical soil specimen
with h=90 mm and d=38 mm in the rock tri-axial cell was enclosed in a rubber membrane inside the cell. By
using a fluid in the chamber, the confining stress (pressure) equal to
r=
2=
3 was applied. The vertical stress
v=
1 was applied by a steel piston, which was employed by hydraulic pumps and a step motor. Additionally the
rock tri-axial cell was equipped with pressure transducers to allow measurements of the elastic shear and
longitudinal wave speeds of the soil specimen during different pressure and density states.
Fig. 4. The rock tri-axial cell device was used for the dry sand with maximum isotropic consolidation pressure of
60 000 kPa [4].
The loading onto the specimen was first an isotropic consolidation (P=
v=
r) with loading and unloading to
different pressure levels, see Fig. 5 - Fig. 7. Radial meter gauges were used to measure radial strain. From this
part of the test, the compaction EOS with plastic loading and the mechanical unloading at different pressures
levels can be derived. After the isotropic consolidation, a shear test at different pressure levels, i.e. 2 000, 20
000, and 60 000 [kPa] were performed. The radial stresses were kept constant (i.e.
r = constant) while the
vertical stress
v was increased. Consequently, the maximum yield surface was established from the tests, see
further in [3] and [4].

v

r

r

r

v

v

r

r
piston

r

v
pressure transducers
steel cylinder
membrane
soil specimen
pressured liquid

-- 270 of 311 --

Markstötvåg
2020-09-28 revidering 2 270
Fig. 5. Experimental data, Test 6, pressure as a function of density, with isotropic consolidation pressure up to 2
000 kPa. The black dots are used as a simplified representation of the unloading curves.
Fig. 6. Experimental data, Tri845, pressure as a function of density, with isotropic consolidation pressure up to
20 000 kPa. The black dots are used as a simplified representation of the unloading curves.

-- 271 of 311 --

Markstötvåg
2020-09-28 revidering 2 271
Fig. 7. Experimental data, Tri847, pressure as a function of density, with isotropic consolidation pressure up to
60 000 kPa. The black dots are used as a simplified representation of the unloading curves.
Measurements of elastic longitudinal vl and shear vs wave speeds were performed by using the pressure
transducers, shown in Fig. 3, for certain density and pressure levels. However, the measurements of the elastic
waves were mainly performed when the pressure was not close to zero. In Fig. 8 the derived bulk sound speed c
from the original material data for the dry sand is shown. The bulk sound speed c is based upon following
relationship
𝑐 = √𝑣𝑙
2 − 4
3 𝑣𝑠
2. (2)
In addition, a linear extrapolation was used for c for densities above 2150 kg/m3. The theoretical maximum
density was set equal to the grain density of
TMD=2641 kg/m3. The maximum bulk sound speed was set equal to
cTMD=4636 m/s based upon shock Hugoniot data found for westerly granite [3].
Fig. 8. Experimentally derived bulk sound speed as a function of density cb(
).
Fig. 8 illustrates the deficiency in the current material model when defining different unloading wave speeds
based on density alone, and not including pressure which is an essential part when properly describing the
change in shape of the propagating pressure wave.

-- 272 of 311 --

Markstötvåg
2020-09-28 revidering 2 272
DERIVATION OF HOW THE UNLOADING WAVE SPEED IS A FUNCTION OF BOTH DENSITY
AND PRESSURE
Used symbols and parameters when deriving the shape of the unloading wave speed as a function of density and
pressure are given in Table 1.
Table 1. Used symbols and explanations.
Symbol Explanation
λ Intersection of arbitrary unloading curve with the P=0 line.
Pc(ρ) Plastic compaction curve. One of the primary inputs to the old EOS, a piecewise linear curve using
10 user defined data points in AUTODYN.
PU(ρ) Functional expression for an arbitrary unloading curve
ρL(λ) Density span of unloading curve from
=
 at the P=0 line to the intersection point with Pc(ρ) at
=
int. ρL(λ) = ρint - λ
ρ0 Initial or in situ density of the soil including water content.
ρTMD Theoretical maximum density.
ρint Density value at intersection point between the plastic compaction curve and an arbitrary unloading
curve.
ρcrit User input controlling the exponential growth of the c(
,P=0) curve.
<
crit results in unloading wave
speeds less than c0 at P=0.
c(ρ,P) Unloading wave speed, not the same as speed of sound, see eq. (1).
cb(ρ) Bulk speed of sound as a function of density. One of the primary inputs to the old EOS, a piecewise
linear curve using 10 user defined data points in AUTODYN.
c0 Initial sound speed at initial density ρ=ρ0.
cTMD Sound speed when theoretical maximum density is reached. At this level of maximum compression
the EOS is perfectly linear elastic, meaning that the unloading wave speed is identical to the bulk
speed of sound.
cmin User input for the minimal unloading wave speed at
=
0, P=0.
The cornerstone of the new compaction EOS is a complete description of the unloading wave speed c(ρ,P) for
the complete state space (ρ,P) of the granular material. The state space can easily be visualized by the area
confined by the plastic compaction curve, P=0 line, and the fully elastic unloading/loading path as shown in Fig.
3. When the unloading wave speed surface c(ρ,P) is obtained every unloading/loading path is unambiguously
defined through the relation:
𝜕𝑃𝑈(𝜌)
𝜕𝜌 = 𝑐(𝜌, 𝑃)2 (3)
With the initial condition 𝑃𝑖 = 𝑃𝑈 (𝜌𝑖). The (ρi,Pi) is an arbitrary material state in the state space domain. Also
note that the loading path will be identical to the unloading path for this new compaction EOS.
Assuming that only a handful of experimental unloading data sets are available, which was the case for the
unloading/loading data employed in this derivation, it is necessary to make rigorous use of the boundary values,
i.e. Pc(ρ) and cb(ρ), and various extrapolation techniques. The objective is to derive the general trend of the
unloading patterns exhibited by the experimental data while at the same time satisfying the theoretical boundary
values.
Here follows an overview of the basic steps involved in the derivation of the c(ρ,P) surface.
Step 1: A lot of effort was put into the search of a general functional expression PU(ρ) that could fit the various
experimental unloading patterns, satisfy the underlying physics, and at the same time involve a relative simple
mathematical construct. Based on numerous curve fitting attempts of many different functional expressions on
the experimental data, polynomials of different orders, logarithms, splines, exponentials and combinations of
these were systematically tested for applicability. Finally, a best candidate was finally chosen
𝑃𝑈 (𝜌) = (𝑑 + 𝑒𝑎(𝑒𝑏(𝜌−𝜆) − 1)) (𝜌 − 𝜆) (4)

-- 273 of 311 --

Markstötvåg
2020-09-28 revidering 2 273
𝜕𝑃𝑈(𝜌)
𝜕𝜌 = 𝑑 + 𝑒𝑎(𝑒𝑏(𝜌−𝜆) − 1) + 𝑏𝑒𝑎+𝑏(𝜌−𝜆)(𝜌 − 𝜆) (5)
𝜕𝑃𝑈𝑛(𝜌)
𝜕𝜌𝑛 = 𝑛𝑏(𝑛−1)𝑒𝑎+𝑏(𝜌−𝜆) + 𝑏𝑛𝑒𝑎+𝑏(𝜌−𝜆)(𝜌 − 𝜆), 𝑛 ≥ 2 (6)
where a, b, d, and λ are constant parameters that will be determined based on various curve fitting techniques.
Eq. (4) is the primary function, Eq. (5) is the unloading slope, and Eq. (6) is the nth derivative.
PU(ρ) has following convenient properties:
1. PU(λ) = 0.
2. δPU(λ)/δρ = d, which makes it easy to determine slope at P=0.
3. PU(ρ) and all its derivatives are continuously growing functions for ρ>λ assuming d>0 and b>0.
4. PU(ρ) has a relative simple functional description, and is numerically robust.
Step 2: In order to extract the global unloading behaviour, certain dominating trends were extracted based on
observations from the local curve fitting level. I.e. the experimental data from each unloading sequence was
curve fitted based on the PU(ρ) functional description, and properties like the intersection with the Pc(ρ) curve
and the P=0 line were determined with ρ=ρint and ρ=λ respectively, see Fig. 9. Another important extrapolated
property of the unloading curve was the slope 𝜕𝑃𝑈(𝜆)
𝜕𝜌 at P=0, see Fig. 9.
Fig. 9. Optimization results of fitting the PU(ρ) function through the unloading experimental data represented by
black dots. Blue curve shows plastic compaction as a function of density, green curve a numerical fit of the PU(ρ)
function through the experimental unloading data. Magenta curve is the square root of the slope to the PU(ρ)
function. The scale on the right side of the plot applies to the magenta curve only.
The global unloading properties were described by using two mathematical constructs shown in Fig. 10 and Fig.
11. Fig. 10 describes the unloading wave speed c(ρ,P=0) at zero pressure. Fig. 11 describes the density span
ρL(λ) for the unloading curves. c(ρ,P=0) was rigidly applied, while ρL(λ) was only used as a guidance for the
optimization process, which lead to the creation of extrapolated unloading curves outside the experimental data
domain.

-- 274 of 311 --

Markstötvåg
2020-09-28 revidering 2 274
Fig. 10. Green curve illustrates how the transition from minimum unloading wave speed transforms to theoretical
maximum density unloading wave speed at P=0.
Fig. 11. General descriptions of the density span which provides a guideline to the extrapolation of unloading
curves outside the experimental data domain. The black dots represent the density span ρL,i for a selection of the
experimental unloading data. The red line is the fitted bilinear ρL(λ) curve satisfying the boundary values at ρ0
and ρTMD.
Step 3: The extrapolated c(λi,P=0) values for each unloading curve (i) produces the basis for constructing the
exponential c(ρ,P=0) curve in Fig. 10. A lower bound cmin, a theoretical upper bound cTMD, and a critical ccrit
value could alternatively be specified to uniquely determine the exponential c(ρ,P=0) curve if there are limited
experimental data points near the P=0 line.
Step 4: By using the c(ρ,P=0) curve and the ρL(λ) guideline together with the plastic compaction curve and the
bulk sound speed curve, one can numerically approximate each unloading curve by using Non-Linear-
Programming (NLP). For an arbitrary unloading curve starting at the P=0 line at ρ=λk the NLP problem reads as
follows
min
𝑎,𝑏,𝑑,𝜌𝑖𝑛𝑡
(𝜆𝑘 + 𝜌𝐿(𝜆𝑘) − 𝜌𝑖𝑛𝑡)2 (7)
subject to
𝜕𝑃𝑈(𝜆𝑘)
𝜕𝜌 = 𝑑 = 𝑐(𝜆𝑘, 𝑃 = 0)2 (8)
𝑃𝑈 (𝜌𝑖𝑛𝑡 ) = 𝑃𝑐(𝜌𝑖𝑛𝑡) (9)
𝜕𝑃𝑈(𝜌𝑖𝑛𝑡)
𝜕𝜌 = 𝑐𝑏(𝜌𝑖𝑛𝑡)2 (10)

-- 275 of 311 --

Markstötvåg
2020-09-28 revidering 2 275
𝜌0 < 𝜆𝑘 < 𝜌𝑇𝑀𝐷 (11)
𝜌0 < 𝜆𝑘 < 𝜌𝑖𝑛𝑡 < 𝜌𝑛 (12)
𝑏 > 0 (13)
where Eq. 7 is minimizing the deviation to the to the ρL density span guidance. The minimization is subject to
constraints such as Eq. 8 which constrains the slope at P=0 to the global trend, see Fig. 10. The Eq. 9 constrains
the ρint to be the intersection of PU and Pc. The Eq. 10 constrains the slope to the bulk sound speed at ρint. Eq. 11
and Eq. 12 constrains the valid density domain for the starting point and ending point of the unloading curve,
respectively. Finally, Eq. 13 maintain the convenient properties of the PU(ρ) function. In Table 2 a selection of
results are summarized from the optimization.
Table 2. A selection of experimentally fitted, red in Fig. 12, and extrapolated, magenta in Fig. 12, unloading
curves with their corresponding parameter values providing the exponential unloading curves PU(ρ). The
pressure value P provides the pressure level on the plastic compaction curve where the unloading is initialized.
The extrapolated unloading curves are generated through the NLP optimization procedure outlined in Eq.7 -
Eq.13.
Pressure
P
[kPa]
Experimental or
NLP Extrapolated
Unloading curve
P=0 intersection
λ
[g/cm3]
Pc(ρ) intersection
ρint
[g/cm3]
PU(ρ) const.
a
Log[m2/s2]
PU(ρ) const.
b
[cm3/g]
PU(ρ) const.
d
[m2/s2]
3200 NLP 1.689 1.719 12.20 26.45 131.3
9000 Experimental 1.717 1.801 7.002 54.24 210.1
15800 Experimental 1.791 1.884 7.785 45.91 660.5
23100 Experimental 1.865 1.953 8.928 40.62 1829
32500 Experimental 1.938 2.020 8.978 47.89 4715
47400 Experimental 2.021 2.097 10.67 35.79 13410
62000 Experimental 2.082 2.153 11.82 27.61 28230
78600 NLP 2.136 2.203 12.40 25.65 54320
99500 NLP 2.190 2.253 13.08 22.22 104000
136000 NLP 2.262 2.320 14.40 13.34 245700
188000 NLP 2.334 2.390 19.02 0.2759 578100
269000 NLP 2.407 2.469 21.15 3.082e-2 1.356e6
376600 NLP 2.479 2.544 21.79 1.347e-2 3.177e6
508000 NLP 2.569 2.613 25.44 4.691e-4 9.189e6
Step 5: A finite set of unloading curves then provide the basis for generating a Non-Uniform-Rational-B-Spline
(NURBS) surface ultimately resulting in the definition of c(ρ,P), see Fig. 12, Fig. 13, and Fig. 14 for different
views. Red curves in Fig. 12 represent locally curve fitted experimental unloading data, while the magenta
curves are extrapolated through the NLP problem described over. The solid green curve is the c(ρ,P=0) curve
while the green wall behind the blue/pink NURBS surface represent the plastic compaction and bulk sound
speed, i.e. Pc(ρ), and cb(ρ). The significance of the green wall can be better understood if the surface is projected
in the (ρ,P) plane Fig. 13, and the (ρ,c) plane Fig. 14. In Fig. 14 the projected curve that travels along the top of
the green wall and then merges with the NURBS surface (blue/pink) is actually the bulk sound speed cb(ρ).
Notice that the unloading wave speed realized by the experimentally fitted red curves end up at a level
approximately 10-20% under the bulk sound speed curve.
It is important to note that the NURBS surface will only function as an intermediary when considering the
planned implementation into AUTODYN. The NURBS surface will later on be broken down into a set of
piecewise polynomial surfaces to provide faster numerical evaluation of the c(ρ,P) function.

-- 276 of 311 --

Markstötvåg
2020-09-28 revidering 2 276
Fig. 12. 3D surface in blue to pink colors of unloading wave speed as a function of both pressure and density,
c(ρ,P).
Fig. 13. 3D surface of unloading wave speed as a function of both pressure and density from a density versus
pressure view. The projected curve is the plastic compaction curve Pc(ρ)

-- 277 of 311 --

Markstötvåg
2020-09-28 revidering 2 277
Fig. 14. 3D surface of unloading wave speed as a function of both pressure and density from a density versus
wave speed view.
COMPARISON OF UNLOADING PROPERTIES BETWEEN OLD AND NEW EOS
Two interesting properties of the unloading phase in the new and old EOS are here compared: the initial
unloading wave speed when starting the unloading phase and the specific energy. Firstly, the measured bulk
sound speed cb, see Fig. 8, is compared with the derived initial unloading wave speed from using the measured
isotropic tri-axial tests, see Fig.5-Fig.7. The summary in Table 3 shows that the difference is in the 10-20%
range for initial wave speed by using the two different approaches. The difference in initial unloading wave
speed is considered as a minor issue because the unloading will be better represented in its entirety with the new
proposal.
Table 3. Comparison of initial unloading wave speeds with old and new EOS.
Pressure
P
[kPa]
old EOS
c
[m/s]
new EOS
c
[m/s]
Decrease from old to
new EOS
[%]
9000 994 775 22
15800 1200 980 18.9
23100 1380 1160 15.9
32500 1550 1440 7.2
47400 1750 1630 6.5
62000 1890 1730 8.5
The second point in comparing the absorbed specific energy between unloading with old and new EOS is shown
in Fig. 15. The unloading is calculated accordingly
𝑒 = ∫ 𝑃(𝜌)
𝜌2 𝑑𝜌
𝜌2
𝜌1 (14)
Table 4 compares the specific unloading and total specific energy absorbed. Interesting to note is the specific
unloading energy is almost 199 percent higher at 9 000 kPa in starting unloading pressure for the new EOS. The
total specific energy absorbed at 3 200 and 9 000 kPa in starting unloading pressure results in 8 and 16 percent
decrease in total specific energy absorbed for the new EOS. For higher unloading pressures as e.g. 225 000 kPa
the reduction is only 2 percent which indicates that the old model works quite well for high pressure simulations
such as buried tank mine simulations where the focus is only on how much energy the covering dry sand
absorbed from the burst and confinement. The actual unloading curve shapes are shown in Fig. 15.

-- 278 of 311 --

Markstötvåg
2020-09-28 revidering 2 278
Fig. 15 illustrates unloading curves starting at different unloading pressures. The solid red line and dashed green
line represent the unloading by the old EOS and the new EOS, respectively. From upper left, upper right, lower
left, and lower right, 3 200, 9 000, 32 500, and 225 000 kPa, as starting unloading pressure, respectively.
Table 4. Comparison of difference in specific unloading and total specific energy absorbed between old EOS and
new EOS.
Load
case
[kPa]
Specific
unloading
energy old
EOS
[J/kg]
Specific
unloading
energy new
EOS
[J/kg]
Increase
from old to
new EOS
[%]
Total
specific
energy
absorbed by
old EOS
[J/kg]
Total
specific
energy
absorbed by
new EOS
[J/kg]
Decrease
from old to
new EOS
[%]
3200 6.0 7.7 27 19 18 8
9000 13 40 199 173 146 16
32500 57 125 120 1260 1190 5
225000 693 852 23 8570 8410 2
CONCLUSIONS AND FUTURE WORK
A 3D representation of how the unloading wave speed c(
,P) is both density and pressure dependent was here
derived for the dry sand from Sjöbo Sweden, see Fig. 16. It shows how the unloading wave speed changes with
different regions. The ridge is the part that is similar to what was used as input in the old model. I.e. the
unloading wave speed is only a function of density c(
). Now when the pressure part is added, i.e. c(
,P), the
unloading wave speed nicely curves down when the pressure approaches zero. A minimum unloading wave
speed at pressure equal to zero is illustrated by the green curve.
For future work it is an open question how the implementation into AUTODYN is made most robust for user
input variations. If good quality is assured from isotropic tri-axial loading experiments it is proposed that the
input for the modified EOS could be unloading curves like shown in Fig.5-Fig.7 in addition to the plastic
compaction curve, initial density
0, theoretical maximum density
TMD, and theoretical maximum density elastic
unloading wave speed cTMD. When it comes to fit the Granular Strength model it is important to properly
represent the elastic shear waves which means that the shear modulus G has to be mapped for the whole c(
,P)
domain. This will be a part of future work.

-- 279 of 311 --

Markstötvåg
2020-09-28 revidering 2 279
Fig. 16. NURBS surface of the derived unloading wave speed c(
,P) from dry Sjöbo sand Sweden. Red curves
represent experimentally fitted unloading data, while the magenta curves are extrapolated curves from the NLP
solution.
ACKNOWLEDGEMENTS
The authors acknowledge the support given by MSB and especially Björn Ekengren. Additionally members of
the West Coast Sweden Shock Wave Group (WCSSWG) and especially Dr. Morgan Johansson and Dr. Joosef
Leppänen are highly acknowledged for their input.
REFERENCES
[1] Ekengren B. (2009): Skyddsrum, SR 09 (Civil Defence Shelters SR 09, in Swedish.), the Swedish Civil Contingencies
Agency (MSB), B54-141/09, Karlstad, Sweden.
[2] Lampson C.W. (1946): Final Report on Effects of Underground Explosions, Div. 2, National Defence Research
Committee of the US Office Scientific R&D, NDRC Report No. A-479, OSRD Report No. 6645.
[3] Laine L. and Sandvik A. (2001): “Derivation of mechanical properties for sand”, 4th Asian-Pacific conference on Shock
and Impact Loads on Structures, CI-Premier PTE LTD, vol. 4, pp 353-360, Singapore.
[4] Heyerdahl H. and Madshus C. (2000): “EOS-data for sand, Tri-axial tests on sand from Sjöbo”, Norges Geotekniske
institutt, NGI rept. 20001157-1, Oslo, Norway.
[5] Century Dynamics Inc., (2004): AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[6] Fairlie G. and Bergeron D. (2002):”Numerical simulations of Mine Blast Loading on Structures”, 17th Numerical aspects
of Blast Symposium, Las Vegas, Nevada.
[7] Tjernberg A. (2006): Simulation of Mine-Blast deflection, FOI-Swedish Defence Research Agency, Technical Report,
FOI-R--1913--SE, TUMBA, Sweden.
[8] Grujicic M., Pandurangan B., Qiao R., Cheeseman B.A., Roy W.N., Skaggs R.R., and Gupta R. (2008): Parameterization
of the porous-material model for sand with different levels of water saturation”, Soil Dynamics and Earthquake Engineering
28, pp 20–35
[10] Moxnes J. F., Ødegårdstuen G., Atwood A., and Curran P. (1999): “Mechanical properties of a porous material studied
in a high speed piston driven compaction experiment”, 30th International Annual Conference of ICT Energetic Materials,
Fraunhofer Institut Chemische Technologie.
[11] Laine L. (2006): “Study of Planar Ground Shock in Different Soils and Its Propagation Around a Rigid Block”, 77th
Shock and Vibration Symposium, Monterey, CA.
[12] Wang1 Z., Hao H., and Lu Y. (2004): “A three-phase soil model for simulating stress wave propagation due to blast
loading”, Int. Journal for Numerical and Analytical Methods in Geomechanics, 28:33–56 (DOI: 10.1002/nag.325).

-- 280 of 311 --

Markstötvåg
2020-09-28 revidering 2 280
Bilaga Z Arbete med modifierad EOS för
Sjöbosand
Z:1 Kurvfaktor för låga tryck nära initiell
densitet
För att beskriva kompressionen nära initiell densitet har en kurvfaktor
utvecklats. Detta var för versionen, MODEOS 3, innan den slutgiltiga
MODEOS 4. Denna faktor beskriver i princip hur formen på kurvan nära
initiell densitet och låga tryck ska se ut. Denna faktor kan varieras mellan 0
till 1. I figurerna Z:1a och Z:1b redovisas avlastningskurvor med kurv-
faktorn 𝜔 = 0,05. Detta ger en väldigt linjär avlastning för låga tryck runt
10 kPa som man kan se i figur Z:1a. Däremot så redan vid 1 000 kPa så
börjar avlastningen bli mer olinjär.
Figur Z:1a. Avlastningskurvor för tryck från 0 till 10 kPa när kurvfaktorn är 𝜔 =
0,05.

-- 281 of 311 --

Markstötvåg
2020-09-28 revidering 2 281
Figur Z:1b. Avlastningskurvor för tryck från 0 till 1000 kPa när kurvfaktorn är
𝜔 = 0,05.
När kurvfaktorn sättes till 𝜔 = 0.5 så ses en markant skillnad i hur
avlastningskurvorna för låga tryck börjar bli mer olinjär, se figur Z:1c. Det
är värt att notera att när materialet lastas på till så låga tryck som 1 kPa så
skiljer sig avlastningen avsevärt från den initiella pålastningskurvan, se
figur Z:1c. För tryck från 0 till 1000 kPa kan man se ännu tydligare
avlastningstrenden när det gäller jämförelse med högt tryck och lågt tryck,
se figur Z:1e.
Figur Z:1c. Avlastningskurvor för tryck från 0 till 1000 kPa när kurvfaktorn är
𝜔 = 0,5.

-- 282 of 311 --

Markstötvåg
2020-09-28 revidering 2 282
Figur Z:1e. Avlastningskurvor för tryck från 0 till 1000 kPa när kurvfaktorn är
𝜔 = 0,5.
När kurvfaktorn sätts till 𝜔 = 0,95 så skiljer sig avlastningen betydligt från
pålastningen. I figur Z:1f syns detta för pålastning upp till 1 kPa och hur
kraftigt avlastningen skiljer. Detta gör att mer energi har absorberats när
kurvfaktorn sätts till 𝜔 = 0,95 jämfört med 𝜔 = 0,05, se även figur Z:1g.
Figur Z:1f. Avlastningskurvor för tryck från 0 till 10 kPa när kurvfaktorn är
𝜔 = 0,95.

-- 283 of 311 --

Markstötvåg
2020-09-28 revidering 2 283
Figur Z:1g. Avlastningskurvor för tryck från 0 till 1000 kPa när kurvfaktorn
är 𝜔 = 0,95.
Mer i detalj så är detta ett numeriskt angreppssätt att anpassa data som
tidigare tagits fram för hela domänen 𝑐(𝑃, 𝜌). Denna 𝑐(𝑃, 𝜌) beskrevs som
en NURBS (Non-Uniform Rational B-Spline) yta, se bilaga Y. Denna yta
saknar dock detaljer kring hur det ser ut alldeles vid initialtillståndet, det vill
säga när materialet pålastas för första gången. I figur Z:1h-Z:1i redovisas
övergången med en grön linje. På kompakteringskurvan är densiteten 𝜌𝑎𝑒,
se figur Z:1h, och där den gröna linjen korsar noll tryck heter densiteten 𝜌𝑎,
se figur Z:1i.
Figur Z:1h. NURBS ytan 𝑐(𝑃, 𝜌) och hur området med kurvanpassning
med hjälp av kurvfaktor har anpassats nära initialt tillstånd.

-- 284 of 311 --

Markstötvåg
2020-09-28 revidering 2 284
Figur Z:1i. NURBS ytan 𝑐(𝑃, 𝜌) och hur området med kurvanpassning
med hjälp av kurvfaktor har anpassats nära initialt tillstånd.
Följande ekvationer gäller för våghastigheten för avlastning vid start och
slutpunkt hos NURBS gränslinje:
𝑐𝑎
2 = 𝑑𝑃(𝜌𝑎)
𝑑𝜌 (Z:1a)
𝑐𝑎𝑒
2 = 𝑑𝑃(𝜌𝑎𝑒)
𝑑𝜌 (Z:1b)
Längs en godtycklig startpunkt 𝜆𝑖 mellan 𝜌0 och 𝜌𝑎 blir avlastningens
våghastighet vid trycket 𝑃 = 0
𝑐𝑖
2 = 𝑑𝑃(𝜆𝑖)
𝑑𝜌 (Z:1c)
Dessutom har alla avlastningsvåghastigheter vid trycket 𝑃 = 0 tvingats ha
samma lutning som vid densiteten 𝜌𝑎 vid trycket noll
𝑐𝑖 = 𝑐𝑎 (Z:1d)
Följande generella dimensionslösa form har visat sig kunna beskriva hur
trycket varierar längs en godtycklig avlastningskurva som börjar i 𝜆𝑖
𝑃𝑖(𝜌) = (𝜌 − 𝜆𝑖)(𝑐𝑖
2 − 𝑎𝑐0
2 (1 − 𝑒
𝑏(𝜌−𝜆𝑖)
𝜌𝑇𝑀𝐷−𝜆𝑖 )) (Z:1e)
Där a och b är godtyckliga konstanter som behöver lösas ut. Antag att
förhållandena för densiteten och våghastigheten för den godtyckliga
avlastningen där den korsar den plastiska kompakteringskurvan kan linjär
interpoleras på följande sätt

-- 285 of 311 --

Markstötvåg
2020-09-28 revidering 2 285
𝜌𝑖𝑒 = 𝜌0 + (𝜆𝑖−𝜌0)
(𝜌𝑎−𝜌0) (𝜌𝑎𝑒 − 𝜌0) (Z:1f)
𝑐𝑖𝑒 = 𝑐𝜔 + (𝜆𝑖−𝜌0)
(𝜌𝑎−𝜌0) (𝑐𝑎𝑒 − 𝑐𝜔) (Z:1g)
där
𝑐𝜔 = 𝑐0 + 𝜔(𝑐𝑎𝑒 − 𝑐0) (Z:1h)
Där 𝜔 ∈ [0,1] är kurvfaktorn. Så när 𝜔 sätts lika med noll är 𝑐𝜔 = 𝑐0 och
när 𝜔 sätts lika med ett så fås 𝑐𝜔 = 𝑐𝑎𝑒. Detta är de två ytterligheter. Den
första ytterligheten betyder att avlastningen och pålastningen är lika för låga
tryck, det vill säga ett linjärt beteende och den andra, när 𝜔 = 1, så fås att
den gröna avlastningskurvans form, som visas i figur Z:1h, behålls hela
vägen till tryck nära noll.
Därefter löses a och b genom att påtvinga följande villkor på ekvation Z:1e
𝑐𝑖𝑒
2 = 𝑑𝑃𝑖(𝜌𝑖𝑒)
𝑑𝜌 (Z:1i)
𝑃𝑖(𝜌𝑖𝑒) = 𝑃𝑐(𝜌𝑖𝑒) (Z:1j)
Detta avslutar beskrivningen av kurvfaktorn som är av vikt för att kunna
beskriva avlastningen vid extremt låga tryck.
Nedan redovisas resultat från simulering med 125 kg TNT som detonerar i
sand modellerad endast med EOS, MODEOS 3 (ej slutlig version som
återfinns som källkod), där tryck och impulsintensitet studeras för olika
nivåer av kurvfaktorn som tidigare nämnts. För att minimera antalet Euler-
celler/element för att simulera fri sfärisk utbredning, så används tvåstegs
endimensionella tårtbitssimuleringar med Autodyn, på engelska kallas dessa
wedge. Den initiella tårtbitssimuleringen hade Rmin = 20 mm och
Rmax = 45 000 mm och innehåller 2000 Eulerceller med konstant cellstorlek
från R = 20 mm till R = 420 mm med längden 4 mm i längd. Återstående
1900 celler hade gradvis ökande storlek genom användning av geometrisk
utsmetning. Vid lämplig tidpunkt överfördes, även kallat ”remap”,
simuleringen till andra tårtbiten, som också hade 2000 Eulerceller, med
Rmin = 100 mm och Rmax = 200 000 mm. Första cellen var 20 mm i längd och
återstående 1999 celler ökade gradvis i storlek genom användning av
geometrisk utsmetning. Den första resultatöverföringen från ett elementnät
till ett annat utfördes vid 155 ms, då stötvågen ännu inte nått fram till Rmax.
Figurerna nedan visar olika versioner av EOS för Sjöbosand. Med
’SjöboSandOriginal’ menas den version som finns implementerad i
kommersiell version av Autodyn där också materialdata för sanden återfinns
i Autodyns materialbibliotek. Med ’SjöboSandEmulerad’ menas en ompro-
grammerad version som körs som användarsubrutin. Med ’Mod EOS linjär
avlastning nära initiell densitet’ menas en modifierad EOS som har elastisk

-- 286 of 311 --

Markstötvåg
2020-09-28 revidering 2 286
avlastning, vilken har avlastningsvåghastigheten c(P,ρ) som är både tryck
och densitetsberoende men nära initiell densitet har den linjär avlastning
som är lika med c0. Med ’Mod EOS kurvfaktor 0,05, 0,5, eller 0,95’ så är
det som innan med avlastningsvåghastighet c(P,ρ) som är både tryck och
densitetsberoende men nära initiell densitet så har den en kurva med faktor
0,05, 0,5, eller 0,95 som sänker våghastigheten vid avlastning.
Figurerna Z:1j-Z:1s redovisar tryck som funktion av tid för 125 kg TNT på
radierna 2, 5, 10, 25, och 40 m. Vid 2 meter är maximala trycken väldigt
lika, intressant är dock att originalmodellen oscillerar väldigt mycket. Vid
5 meter är den modifierade EOS med kurvfaktor 0,95 marginellt lägre, vid
10 meter är sänkningen strax över 30 procent. Vid 25 meter är sänkningen
över 60 procent och vid 40 meter är sänkningen i maxtryck cirka 75 procent.
Figur Z:1j Tryck som funktion av tid för 125 kg TNT på radien 2 m för
olika varianter av EOS för Sjöbosand.
0
2000
4000
6000
8000
10000
12000
0 	5 	10 	15 	20 	25 	30
Tryck
 P(t) [kPa]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95

-- 287 of 311 --

Markstötvåg
2020-09-28 revidering 2 287
Figur Z:1k. Tryck som funktion av tid för 125 kg TNT på radien 5 m för
olika varianter av EOS för Sjöbosand.
Figur Z:1l. Tryck som funktion av tid för 125 kg TNT på radien 10 m för
olika varianter av EOS för Sjöbosand.
0
200
400
600
800
1000
1200
1400
1600
1800
2000
0 	10 	20 	30 	40 	50 	60 	70 	80 	90 	100
Tryck
 P(t) [kPa]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95
0
100
200
300
400
500
600
700
800
0 	50 	100 	150 	200 	250 	300
Tryck
 P(t) [kPa]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95

-- 288 of 311 --

Markstötvåg
2020-09-28 revidering 2 288
Figur Z:1m. Tryck som funktion av tid för 125 kg TNT på radien 25 m för
olika varianter av EOS för Sjöbosand.
Figur Z:1n. Tryck som funktion av tid för 125 kg TNT på radien 40 m för
olika varianter av EOS för Sjöbosand.
0
50
100
150
200
250
300
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Tryck
 P(t) [kPa]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95
0
20
40
60
80
100
120
140
160
180
0 	100 	200 	300 	400 	500 	600 	700 	800
Tryck
 P(t) [kPa]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95

-- 289 of 311 --

Markstötvåg
2020-09-28 revidering 2 289
Figur Z:1o. Impulstäthet som funktion av tid för 125 kg TNT på radien 2 m
för olika varianter av EOS för Sjöbosand.
Figur Z:1p. Impulstäthet som funktion av tid för 125 kg TNT på radien 5 m
för olika varianter av EOS för Sjöbosand.
0
10000
20000
30000
40000
50000
60000
70000
0 	100 	200 	300 	400 	500 	600 	700 	800
Impulstäthet
 i(t) [Pa s]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95
-5000
0
5000
10000
15000
20000
25000
30000
35000
40000
45000
0 	100 	200 	300 	400 	500 	600 	700 	800
Impulstäthet
 i(t) [Pa s]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95

-- 290 of 311 --

Markstötvåg
2020-09-28 revidering 2 290
Figur Z:1q. Impulstäthet som funktion av tid för 125 kg TNT på radien 10 m
för olika varianter av EOS för Sjöbosand.
Figur Z:1r. Impulstäthet som funktion av tid för 125 kg TNT på radien 25 m
för olika varianter av EOS för Sjöbosand.
0
5000
10000
15000
20000
25000
30000
0 	100 	200 	300 	400 	500 	600 	700 	800
Impulstäthet
 i(t) [Pa s]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95
0
2000
4000
6000
8000
10000
12000
14000
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Impulstäthet
 i(t) [Pa s]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95

-- 291 of 311 --

Markstötvåg
2020-09-28 revidering 2 291
Figur Z:1s. Impulstäthet som funktion av tid för 125 kg TNT på radien 40 m
för olika varianter av EOS för Sjöbosand.
0
1000
2000
3000
4000
5000
6000
7000
8000
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Impulstäthet
 i(t) [Pa s]
tid t [ms]
SjöboSandOriginal
SjöboSandEmulerad
Mod EOS linjär avlastning nära initiell densitet
Mod EOS kurvfaktor 0.05
Mod EOS kurvfaktor 0.5
Mod EOS kurvfaktor 0.95

-- 292 of 311 --

Markstötvåg
2020-09-28 revidering 2 292
Bilaga ZA Användarsubrutiner till Autodyn för
Modifierad Sjöbosand
Nedan ges användarsubrutinerna till Autodyn. Dessa finns även tillgängliga
på websidan www.L2e.se.
! FILE = w1_Initialization Subroutines.f90
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------
SUBROUTINE INITIALIZE
USE globalm
USE matdef
IMPLICIT NONE
INTEGER (INT4) :: I
! FIND THE NUMBER OF MOD EOS (EOS=USER) MATERIALS DEFINED INSIDE AUTODYN
UNMAT = 0
DO I = 1, NUMMAT
IF ( MEOS(I) == 16 ) UNMAT = UNMAT+1
END DO
IF ( UNMAT > 0 ) THEN ! INITIALIZE ONLY WHEN EOS=USER MATERIALS ARE PRESENT INSIDE AUTODYN
! GLOBAL PARAMETERS
CALL GLOBALPARAMETERS
! READING IN FROM INPUT_C FILE.
CALL READINPUT
! FIND THE POINT RHO_MAX WHICH IS THE INTERSECTION BETWEEN THE PLASTIC COMPACTION CURVE AND THE C_TMD LINE. PMAX
IS ALSO FOUND
CALL FINDRHOMAX
! CREATE THE SP0-LINES WHICH GOES LINEARLY FROM P=0 LINE TO PC-CURVE USING THE DATA
POINTS FROM THE USER
CALL SP0MFGEN
! CREATE LINEAR INTERPOLATION FRAMEWORK WITH "NIP" RESOLUTION ON TOP OF THE USER DATA
POINTS
CALL ESEGCREAT
! CREATE THE SP-LINES WHICH GOES LINEARLY FROM P=0 LINE TO PC-CURVE USING THE HIGHER
RESOLUTION AND MORE IMPORTANTLY
! EQUALLY SPACED DATA POINTS FROM THE INTERPOLATION FRAMEWORK CREATED IN ESEGCREAT
CALL SPMFGEN
! TEST THE CONSISTENCY OF THE UNLOADING/LOADING LINES AT THE PIECEWISE LINEAR CONNECTION
POINTS... CROSSINGS WITHIN STATE DOMAIN NOT ALLOWED
! DERIVATIVES WITHIN IJ-DOMAIN CHECKED
CALL CHECKCROSSINGS1
! TEST THE CONSISTENCY OF THE UNLOADING/LOADING LINES AT THE PIECEWISE LINEAR CONNECTION
POINTS... CROSSINGS WITHIN STATE DOMAIN NOT ALLOWED
! POSSIBLE CROSSINGS BASED ON THE GAMMA-CURVING CHECKED
!CALL CHECKCROSSINGS2
! CREATE LINEAR INTERPOLATION FRAMEWORK WITH "NIP" RESOLUTION FOR FASTLAMBDAF
(LAMBDAFINDER). ENABLES GOING FROM PC TO LAMBDA
CALL LAMBDAFGEN
! CREATE LINEAR INTERPOLATION FRAMEWORK WITH "NIP" RESOLUTION FOR GAMMA(L) AND FASTPULF.
ENABLES EVALUATING ANY UL-CURVE VERY FAST
CALL GAMMAPULGEN
! CREATE LINEAR INTERPOLATION FRAMEWORK WITH "NIP" RESOLUTION FOR SOUNDH(R). ENABLES
EVALUATING SLOPE AT UL-CURVE TOP VERY FAST
CALL SOUNDHGEN
!INITIALIZE STORAGE ARRAY PARMV FOR EOS PARAMETERS (X,X) WHICH COULD NOT BE STORED AS
USERVARS..
CALL PARMMGEN
END IF
!INITIALIZATION SWITCH WILL NOW BE TURNED ON... (INITIALIZATION IS DONE)
SWINIT = 1
RETURN
END SUBROUTINE INITIALIZE
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
! FILE = w1_Read Subroutines.f90
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------
SUBROUTINE READINPUT
USE globalm
USE fildef
USE linevalm
USE matdef
IMPLICIT NONE
INTEGER (INT4) :: IOU,IERR,I,J,K,X,UX,ITEMP
REAL (REAL8) :: RTEMP1,RTEMP2

-- 293 of 311 --

Markstötvåg
2020-09-28 revidering 2 293
CHARACTER (LEN=200) :: WORKDIR,FN,STRTEMP,DATFILE1,DATFILE2,MATL
INTEGER (INT4), DIMENSION(:), POINTER ::
ADUMATTOADMATV,ADUMATTOME4MATV,ME4MATTOADMATV,ME4MATTOADUMATV
INTEGER (INT4), DIMENSION(:,:), POINTER :: MAXM
CHARACTER (LEN=10), DIMENSION(:), POINTER :: ME4MATNAMV
! READ C(RHO,P) TABLE DATA FROM "MOD_COMP_EOS_XXXXXX.DAT" OR "MOD_COMP_EOS.DAT" DEFAULT INPUT FILE
IOU = 100
WORKDIR = FDHIST
DATFILE1 = 'MOD_COMP_EOS_' // FNID(1:LEN_TRIM(FNID)) // '.DAT'
DATFILE2 = 'MOD_COMP_EOS.DAT'
FN = WORKDIR(1:LEN_TRIM(WORKDIR)) // '\' // DATFILE1(1:LEN_TRIM(DATFILE1))
OPEN ( UNIT = IOU, FILE = FN, STATUS = 'OLD', IOSTAT = IERR )
IF ( IERR > 0 ) THEN
STRTEMP = 'CANT FIND ' // DATFILE1(1:LEN_TRIM(DATFILE1))
CALL PRNVALT( STRTEMP(1:LEN_TRIM(STRTEMP)) )
STRTEMP = 'TRYING DEFAULT ' // DATFILE2(1:LEN_TRIM(DATFILE2))
CALL PRNVALT( STRTEMP(1:LEN_TRIM(STRTEMP)) )
FN = WORKDIR(1:LEN_TRIM(WORKDIR)) // '\' // DATFILE2(1:LEN_TRIM(DATFILE2))
OPEN ( UNIT = IOU, FILE = FN, STATUS = 'OLD', IOSTAT = IERR )
IF ( IERR > 0 ) CALL ADQUIT ('$ERROR, MOD_COMP_EOS.DAT... FILE DOES NOT EXIST$')
END IF
READ ( IOU, * ) STRTEMP
READ ( IOU, * )
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) STRTEMP
READ ( IOU, * )
READ ( IOU, * ) STRTEMP
! READ PARAMETER DETERMINING IF INTERNAL ENERGY FILL DATA WILL BE USED AS PRESSURE INSTEAD
(1) OR DEFAULT NO (0)
READ ( IOU, * ) PORE
IF ( PORE /= 0 .AND. PORE /= 1 ) CALL ADQUIT ('$ERROR, PORE MUST BE ZERO OR ONE$')
READ ( IOU, * )
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) NMAT
! STORE ME4 MATERIAL NAMES AND ME4 MATERIAL MAPPING TO AUTODYN MATERIAL
ALLOCATE (ME4MATNAMV(NMAT),STAT=IERR)
ALLOCATE (ME4MATTOADMATV(NMAT),STAT=IERR)
ALLOCATE (ME4MATTOADUMATV(NMAT),STAT=IERR)
DO I = 1, NMAT
ME4MATTOADMATV(I) = 0
ME4MATTOADUMATV(I) = 0
END DO
! CHECK IF THERE ARE ANY MATERIALS LISTED IN THE INPUT FILE
IF ( NMAT <= 0 ) CALL ADQUIT ('$ERROR, NO MOD EOS MATERIALS LISTED IN INPUT FILE$')
! CREATE DATASTRUCTURE THAT KEEPS TRACK OF THE EOS=USER MATERIALS DEFINED INSIDE AUTODYN
ALLOCATE (ADUMATTOADMATV(UNMAT),STAT=IERR) ! AUTODYN_USER_MATERIAL_TO_AUTODYN_MATERIAL_VECTOR
J = 0
DO I = 1, NUMMAT
IF ( MEOS(I) == 16 ) THEN
J = J+1
ADUMATTOADMATV(J) = I
END IF
END DO
IF ( J /= UNMAT ) CALL ADQUIT ('$ERR, UNEXPECTED ERROR. J /= UNMAT$')
! CREATE MIDV WHICH ENABLES MATERIAL NUMBER MAPPING FROM AUTODYN MAT# TO MOD EOS MAT#
ALLOCATE (MIDV(NUMMAT),STAT=IERR)
DO I = 1, NUMMAT
MIDV(I) = 0
END DO
! DATA STRUCTURES FOR ORIGINAL RP, LC, AND LG CURVES
ALLOCATE (MAXM(NMAT,3),STAT=IERR)
! READ IN MATERIAL DATA JUST TO GET THE GRIP ON THE REQUIRED DIMENSIONS ON THE DATA STRUCTURE AND MATERIAL NAMES
DO X = 1, NMAT
READ ( IOU, * )
READ ( IOU, * ) MATL
! CHECK MATERIAL NAME AND MAP IT TO THE INTERNAL AUTODYN MAT#
IF ( LEN_TRIM(MATL) > 10 ) CALL ADQUIT ('$ERROR, MAT NAME TOO LONG$')
IF ( LEN_TRIM(MATL) < 1 ) CALL ADQUIT ('$ERROR, NO MATERIAL NAME$')
ME4MATNAMV(X) = MATL(1:LEN_TRIM(MATL))
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) MAXM(X,1)
IF ( MAXM(X,1) < 2 ) CALL ADQUIT ('$ERR, >= 2 POINTS REQUIRED FOR PC$')
DO I = 1, MAXM(X,1)
READ ( IOU, * ) RTEMP1, RTEMP2
END DO
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) MAXM(X,2)
IF ( MAXM(X,2) < 2 ) CALL ADQUIT ('$ERR, >= 2 POINTS REQUIRED FOR LC$')
DO J = 1, MAXM(X,2)
READ ( IOU, * ) RTEMP1, RTEMP2
END DO
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) MAXM(X,3)
IF ( MAXM(X,3) < 0 .OR. MAXM(X,3) == 1 ) CALL ADQUIT ('$ERR, 0 OR >=2 POINTS FOR LG$')
DO K = 1, MAXM(X,3)
READ ( IOU, * ) RTEMP1, RTEMP2
END DO
END DO
REWIND ( IOU ) ! REWIND READ POINTER IN ORDER TO READ AGAIN
!CHECK THAT ALL MOD EOS MATERIAL NAMES FROM INPUT FILE IS UNIQUE
DO I = 1, NMAT
DO J = I+1, NMAT
IF ( ME4MATNAMV(I) == ME4MATNAMV(J) ) CALL ADQUIT ('$ERROR, SAME MATERIAL LISTED MORE THAN
ONCE INSIDE INPUT FILE$')
END DO
END DO
!CHECK THAT ALL EOS=USER MATERIALS DEFINED INSIDE AUTODYN IS LISTED IN THE INPUT FILE
ALLOCATE (ADUMATTOME4MATV(UNMAT),STAT=IERR)
DO I = 1, UNMAT
K = 0

-- 294 of 311 --

Markstötvåg
2020-09-28 revidering 2 294
DO J = 1, NMAT
IF ( NAMMAT(ADUMATTOADMATV(I)) /= ME4MATNAMV(J) ) CYCLE
K = J
EXIT
END DO
IF ( K == 0 ) CALL ADQUIT ('$ERROR, ' // NAMMAT(ADUMATTOADMATV(I)) // ' NOT FOUND IN ME4
INPUT FILE $')
ADUMATTOME4MATV(I) = K
END DO
!CREATE MAPPING FROM ME4 MATERIAL NUMBER (AS LISTED) TO AUTODYN MATERIAL. 0 VALUE HERE
IMPLIES THAT ME4 MATERIAL IS TO BE IGNORED
DO X = 1, NMAT
K = 0
DO I = 1, UNMAT
IF ( ADUMATTOME4MATV(I) /= X ) CYCLE
K = I
EXIT
END DO
ME4MATTOADUMATV(X) = K
IF ( K == 0 ) THEN
ME4MATTOADMATV(X) = 0
ELSE
ME4MATTOADMATV(X) = ADUMATTOADMATV(K)
END IF
END DO
!DETERMINE DIMENSIONS FOR VARIOUS DATA STRUCTURES BASED ON VALID ME4 MATERIALS ONLY. I.E.
MATERIAL HAS TO EXIST IN AUTODYN
NMAXV = (/2,2,2/)
DO X = 1, NMAT
IF ( ME4MATTOADMATV(X) /= 0 ) THEN
IF ( MAXM(X,1) > NMAXV(1) ) NMAXV(1) = MAXM(X,1)
IF ( MAXM(X,2) > NMAXV(2) ) NMAXV(2) = MAXM(X,2)
IF ( MAXM(X,3) > NMAXV(3) ) NMAXV(3) = MAXM(X,3)
END IF
END DO
! CREATE DATA STRUCTURES FOR ORIGINAL RP, LC, AND LG CURVES (PLASTIC COMPACTION, BULK SOUNDSPEED (LINEAR SENSE), AND
EXPONENTIAL CURVE FACTOR)
ALLOCATE (MV(UNMAT),STAT=IERR)
ALLOCATE (NV(UNMAT),STAT=IERR)
ALLOCATE (QV(UNMAT),STAT=IERR)
ALLOCATE (R0V(UNMAT),STAT=IERR)
ALLOCATE (RTMDV(UNMAT),STAT=IERR)
ALLOCATE (CB0V(UNMAT),STAT=IERR)
ALLOCATE (CB02V(UNMAT),STAT=IERR)
ALLOCATE (CBTMDV(UNMAT),STAT=IERR)
ALLOCATE (CBTMD2V(UNMAT),STAT=IERR)
ALLOCATE (RP0M(UNMAT,NMAXV(1),2),STAT=IERR)
ALLOCATE (LC0M(UNMAT,NMAXV(2),2),STAT=IERR)
ALLOCATE (LG0M(UNMAT,NMAXV(3),2),STAT=IERR)
ALLOCATE (AI0M(UNMAT,NMAXV(1)-1),STAT=IERR)
ALLOCATE (AJ0M(UNMAT,NMAXV(2)-1),STAT=IERR)
ALLOCATE (AK0M(UNMAT,NMAXV(3)-1),STAT=IERR)
! INITIALIZE WITH 0 (INT) AND ZERO (FF)
DO UX = 1, UNMAT
DO I = 1, NMAXV(1)-1
RP0M(UX,I,1) = ZERO
RP0M(UX,I,2) = ZERO
AI0M(UX,I) = ZERO
END DO
RP0M(UX,NMAXV(1),1) = ZERO
RP0M(UX,NMAXV(1),2) = ZERO
DO J = 1, NMAXV(2)-1
LC0M(UX,J,1) = ZERO
LC0M(UX,J,2) = ZERO
AJ0M(UX,J) = ZERO
END DO
LC0M(UX,NMAXV(2),1) = ZERO
LC0M(UX,NMAXV(2),2) = ZERO
DO K = 1, NMAXV(3)-1
LG0M(UX,K,1) = ZERO
LG0M(UX,K,2) = ZERO
AK0M(UX,K) = ZERO
END DO
LG0M(UX,NMAXV(3),1) = ZERO
LG0M(UX,NMAXV(3),2) = ZERO
END DO
! READ FROM THE START OF THE FILE AGAIN
READ ( IOU, * ) STRTEMP
READ ( IOU, * )
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) STRTEMP
READ ( IOU, * )
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) ITEMP
READ ( IOU, * )
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) ITEMP
! STORE ORIGINAL RP, LC, AND LG CURVES (PLASTIC COMPACTION, BULK SOUNDSPEED, AND EXPONENTIAL CURVE FACTOR)
! TRANSISTION FROM X TO UX MATERIALS. NOTE: FOR SIMPLIFICATION UX MATERIALS WILL BE NAMED X
MATERIALS OUTSIDE "READ SUBROUTINES"
! AND ALSO UNMAT -> NMAT
DO X = 1, NMAT
UX = ME4MATTOADUMATV(X)
IF ( UX /= 0 ) THEN !MATERIAL IS USED
MIDV(ME4MATTOADMATV(X)) = UX !MAPPING FROM AUTODYN MATERIAL TO ME4 DATA STRUCTURE
MATERIAL NUMBER
READ ( IOU, * )
READ ( IOU, * ) STRTEMP
! READ IN THE 3 CURVES AND CHECK INPUT DATA INTEGRITY
! READ PLASTIC COMPACTION CURVE
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) MV(UX)
DO I = 1, MV(UX)
READ ( IOU, * ) RP0M(UX,I,1), RP0M(UX,I,2)
END DO
R0V(UX) = RP0M(UX,1,1)
IF ( R0V(UX) <= ZERO ) CALL ADQUIT ('$ERROR, R0 < 0 REQUIRED$')
IF ( RP0M(UX,1,2) /= ZERO ) CALL ADQUIT ('$ERROR, PC(R_0) MUST BE ZERO$')
! READ IN BULK SOUNDSPEED CURVE
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) NV(UX)
DO J = 1, NV(UX)

-- 295 of 311 --

Markstötvåg
2020-09-28 revidering 2 295
READ ( IOU, * ) LC0M(UX,J,1), LC0M(UX,J,2)
IF ( LC0M(UX,J,2) <= ZERO ) CALL ADQUIT ('$ERR, >0 CB POINTS REQUIRED$')
END DO
IF ( LC0M(UX,1,1) /= R0V(UX) ) CALL ADQUIT ('$ERR, LC0M(1,1) MUST BE R0$')
CB0V(UX) = LC0M(UX,1,2)
CB02V(UX) = CB0V(UX)**2
RTMDV(UX) = LC0M(UX,NV(UX),1)
CBTMDV(UX) = LC0M(UX,NV(UX),2)
CBTMD2V(UX) = CBTMDV(UX)**2
IF ( CBTMDV(UX) <= CB0V(UX) ) CALL ADQUIT ('$ERR, CBTMD > CB0 REQUIRED$')
! READ INEXPONENTIAL CURVING DATA
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) QV(UX)
DO K = 1, QV(UX)
READ ( IOU, * ) LG0M(UX,K,1), LG0M(UX,K,2)
IF ( LG0M(UX,K,2) < ZERO ) CALL ADQUIT ('$ERR, >=0 GAMMA POINTS REQUIRED$')
IF ( LG0M(UX,K,2) < GMIN ) LG0M(UX,K,2) = GMIN
END DO
IF ( QV(UX) == 0 ) THEN
LG0M(UX,1,1) = R0V(UX)
LG0M(UX,1,2) = GMIN
LG0M(UX,2,1) = RTMDV(UX)
LG0M(UX,2,2) = GMIN
QV(UX) = 2
END IF
IF ( LG0M(UX,1,1) /= R0V(UX) ) CALL ADQUIT ('$ERR, LG0M(1,1) MUST BE R0$')
IF ( LG0M(UX,QV(UX),1) /= RTMDV(UX) ) CALL ADQUIT ('$ERR, LG0M(-1,1) MUST BE RTMD$')
IF ( LG0M(UX,QV(UX),2) > GMIN ) CALL ADQUIT ('$ERR, LG0M(-1,2) MUST BE ZERO$')
! CHECK CONSISTANCY OF PLASTIC COMPACTION CURVE
DO I = 1, MV(UX)-1
IF ( RP0M(UX,I+1,1) <= RP0M(UX,I,1) ) CALL ADQUIT ('$ERR, RHO MUST INCREASE IN RP0M
DATA$')
IF ( RP0M(UX,I+1,2) <= RP0M(UX,I,2) ) CALL ADQUIT ('$ERR, P MUST INCREASE IN RP0M DATA$')
AI0M(UX,I) = (RP0M(UX,I+1,2)-RP0M(UX,I,2))/(RP0M(UX,I+1,1)-RP0M(UX,I,1))
IF ( AI0M(UX,I) >= CBTMD2V(UX) ) CALL ADQUIT ('$ERR, SLOPE OF LIN PC SEGMENT GREATER THAN
CTMD^2$')
END DO
IF ( AI0M(UX,1) >= CB02V(UX) ) CALL ADQUIT ('$ERR, SLOPE OF INITIAL LIN PC SEGMENT <=
C0^2$')
! CHECK CONSISTANCY OF BULK SOUNDSPEED CURVE
DO J = 1, NV(UX)-1
IF ( LC0M(UX,J+1,1) <= LC0M(UX,J,1) ) CALL ADQUIT ('$ERR, LAMBDA MUST INCREASE IN LC0M
DATA$')
AJ0M(UX,J) = (LC0M(UX,J+1,2)-LC0M(UX,J,2))/(LC0M(UX,J+1,1)-LC0M(UX,J,1))
IF ( AI0M(UX,J) >= CBTMD2V(UX) ) CALL ADQUIT ('$ERR, SLOPE OF LIN PC SEGMENT GREATER THAN
CTMD^2$')
END DO
! CHECK CONSISTANCY OF EXPONENTIAL CURVE FACTOR
DO K = 1, QV(UX)-1
IF ( LG0M(UX,K+1,1) <= LG0M(UX,K,1) ) CALL ADQUIT ('$ERR, LAMBDA MUST INCREASE IN LG0M
DATA$')
AK0M(UX,K) = (LG0M(UX,K+1,2)-LG0M(UX,K,2))/(LG0M(UX,K+1,1)-LG0M(UX,K,1))
END DO
ELSE ! READ IN DUMMY MATERIAL WHICH WILL NOT BE USED
READ ( IOU, * )
READ ( IOU, * ) STRTEMP
! READ PLASTIC COMPACTION CURVE
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) ITEMP
DO I = 1, ITEMP
READ ( IOU, * ) RTEMP1, RTEMP2
END DO
! READ IN BULK SOUNDSPEED CURVE
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) ITEMP
DO J = 1, ITEMP
READ ( IOU, * ) RTEMP1, RTEMP2
END DO
! READ INEXPONENTIAL CURVING DATA
READ ( IOU, * ) STRTEMP
READ ( IOU, * ) ITEMP
DO K = 1, ITEMP
READ ( IOU, * ) RTEMP1, RTEMP2
END DO
END IF
END DO
NMAT = UNMAT
CLOSE(IOU)
! DEALLOCATE AND NULLIFY LOCAL POINTERS
DEALLOCATE (ADUMATTOADMATV)
NULLIFY (ADUMATTOADMATV)
DEALLOCATE (ADUMATTOME4MATV)
NULLIFY (ADUMATTOME4MATV)
DEALLOCATE (ME4MATTOADMATV)
NULLIFY (ME4MATTOADMATV)
DEALLOCATE (ME4MATTOADUMATV)
NULLIFY (ME4MATTOADUMATV)
DEALLOCATE (ME4MATNAMV)
NULLIFY (ME4MATNAMV)
DEALLOCATE (MAXM)
NULLIFY (MAXM)
RETURN
END SUBROUTINE READINPUT
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
! FILE = w1_1.f90
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------
SUBROUTINE EXEDIT
USE mdgrid
USE ijknow
USE wrapup
USE matdef
USE globalm
IMPLICIT NONE

-- 296 of 311 --

Markstötvåg
2020-09-28 revidering 2 296
INTEGER (INT4) :: I,K
! ************************************************************************
! THIS IS A USER SUPPLIED SUBROUTINE WHICH CAN BE USED TO PROVIDE
! SPECIAL CUSTOM EDITING. THE FREQUENCY AT WHICH THIS SUBROUTINE
! IS CALLED IS DEFINED THROUGH INPUT (GLOBAL-EDIT-USER). WHEN
! REQUESTED, IT IS CALLED BY THE EDIT PROCESSOR AT THE END OF A
! COMPUTATIONAL CYCLE. THE ROUTINE IS CALLED BEFORE ANY OTHER
! TYPES OF STANDARD EDITS ARE CALLED FOR THAT CYCLE (EG. PRINT,
! SAVE, HISTORY, DISPLAY, ETC), SO IT MAY ALSO BE USED TO SET UP
! DATA TO BE PROCESSED BY OTHER EDIT TYPES.
! ************************************************************************
! UNLOADING SOUNDSPEED TABLE DATA HAS TO BE LOADED BEFORE EOS CAN BE RUN
IF ( SWINIT == 0 ) CALL INITIALIZE
IF ( UNMAT > 0 ) THEN !RESET PARMM MATRIX AT THE END OF THE CYCLE
DO I = 1, IJC
K = PARMM(I,2)
PARMM(K,1) = 0
PARMM(I,2) = 0
END DO
IJC = 0
END IF
! AT ANY TERMINATION OF SIMULATION (ESC, USERSUB OR WRAPUP CYCLE)
IF ( NSWRAP > 0 .AND. UNMAT > 0 ) THEN
CALL DEALLOCGLOBAL
END IF
RETURN
END SUBROUTINE EXEDIT
SUBROUTINE EXEOS (P1,E1,ALPHA2,D2,DVV,DSIE,Q2,P2,E2,SOUND2,IFAIL,IFSPHQ)
USE ijknow
USE mdgrid
USE globalm
USE linevalm
USE locelm
USE matdef
IMPLICIT NONE
INTEGER (INT1) :: IFAIL
INTEGER (INT4) :: IFSPHQ,IJ,X,I,J
REAL (REAL8) :: ALPHA2,D2,DSIE,DVV,E2,E1,P2,P1,Q2,SOUND2
REAL (REAL8) :: D1,P2T,L,FASTPCF,FASTLAMBDAF,FASTPCINTF,FASTPULINTF,SOUNDF,PULINTF
REAL (REAL8) :: DL,RL,G,PINT,AA,BB
! ************************************************************************
! THIS IS A USER SUPPLIED SUBROUTINE WHICH CALCULATES PRESSURE
! AND ENERGY AS A FUNCTION OF DENSITY. YOU ARE REQUIRED TO
! SIMULTANEOSLY SOLVE THE EQUATION OF STATE ( P=f(DEN,E) ) AND
! THE ENERGY EQUATION ( DE + P*DV = 0 ).
! INPUT PARAMETERS
! P1 OLD PRESSURE + OLD ART. VISCOSITY
! E1 OLD INTERNAL ENERGY
! ALPHA2 NEW ALPHA
! D2 NEW DENSITY
! DVV DV/V FROM OLD VALUES TO NEW VALUES
! DSIE SPECIFIC INTERNAL ENERGY DEPOSITION
! Q2 NEW ARTIFICIAL VISCOSITY
! IFSPHQ = 0 - NEW VISCOUS PRESSURE
! IFSPHQ = 1 - VISCOUS ENERGY INCREMENT (PER UNIT MASS)
! IFAIL STRESS STATE INDICATOR
! = 0 HYDRO
! = 1 ELASTIC
! = 2 PLASTIC
! > 3 BULK FAILURE
! IFSPHQ =1 FOR A SPH SUBGRID
! OUTPUT PARAMETERS
! DSIE SPECIFIC INTERNAL ENERGY DEPOSITION
! Q2 RESET TO ZERO IF CELL IS FAILED
! P2 NEW PRESSURE
! E2 NEW INTERNAL ENERGY
! SOUND2 BULK SOUNDSPEED
! IFAIL STRESS STATE INDICATOR (SEE ABOVE)
! IN ADDITION TO THE FORMAL PARAMETERS, MODULE "MATDEF"
! CONTAINS THE FOLLOWING INFORMATION
! MATNO THE MATERIAL NUMBER OF THE MATERIAL BEING PROCESSED
! NAMMAT(MATNO) THE MATERIAL NAME OF THE MATERIAL BEING PROCESSED
! EOSDAT(MATNO,I) , I=1,LIMMVR
! STORES THAT CAN BE USED TO SAVE MATERIAL DATA (THE
! DATA IS AUTOMATICALLY SAVED AND LOADED WHEN THE
! "SAVE" OR "LOAD" OPTIONS ARE INVOKED. SEE MODULE
! "MATDEF" FOR THE CURRENT VALUE OF LIMMVR
! ************************************************************************
! LOAD SOUNDSPEED TABLE DATA ONCE AT THE VERY START OF THE SIMULATION WHEN USING MOD EOS
IF ( SWINIT == 0 ) CALL INITIALIZE
X = MIDV(MATNO) !DETERMINE THE MOD EOS MATERIAL THAT IS TO BE PROCESSED
IJ = IJSETS(MNOW,INOW,JNOW) !KEEP TRACK ON HOW MANY TIMES EXEOS IS CALLED FOR THIS CELL WITHIN SAME CYCLE
IF ( PARMM(IJ,1) == 0 ) THEN
IJC = IJC+1
PARMM(IJC,2) = IJ
END IF
PARMM(IJ,1) = PARMM(IJ,1)+1
!IF ( IFAIL == 2 .AND. DVV < ZERO ) THEN
!P2 = P1
!L = FINDL(X,D2,P2)
!ELSE

-- 297 of 311 --

Markstötvåg
2020-09-28 revidering 2 297
!IF ( DVV > 0 ) IFAIL = 1
!CASE 1:---------------------------- !ALL INITIALIZED STATES EXCEPT TMD-STATE
IF ( ALPHA2 > ONE ) THEN
L = RTMDV(X)/ALPHA2
IF ( L > R0V(X) ) THEN
IF ( D2 < L ) THEN
P2 = ZERO
E2 = E1+FASTPULINTF(X,L,D2*(DVV+ONE),L)
J = FLOOR((L-
R0V(X))/DLLV(X))+1
SOUND2 =
LVM(X,J,5)+AJM(X,J,5)*(L-LV(X,J)) !SQRT(SLOPE) OF UL-CURVE AT P=0, ENFORCE C0 MINIMUM
!POSITIVE COMPRESSION FROM OLD ALPHA
STATE. BOTH PLASTIC AND ELASTIC BEHAVIOR IS POSSIBLE
ELSE
J = FLOOR((L-R0V(X))/DLLV(X))+1
DL = L-LV(X,J)
RL =
LVM(X,J,3)+AJM(X,J,3)*DL
!PLASTIC BEHAVIOR => NEW
ALPHA. FURTHER COMPACTION => MOVE UPWARDS ON THE PC-CURVE
IF ( D2 > L+RL ) THEN
I = FLOOR((L+RL-
R0V(X))/DRLV(X))+1 !FIND I-INDEX FOR EVENLY SPACED LINEAR SEGMENTS FROM R0 TO RTMD
E2 = E1+PULINTF(L,AA,BB,D2*(DVV+ONE),L+RL)-RVM(X,I,3)-AIM(X,I,3)*(L+RL-RV(X,I))
IF ( D2 < RMAXV(X) ) THEN
I = FLOOR((D2-
R0V(X))/DRLV(X))+1
P2 =
RVM(X,I,1)+AIM(X,I,1)*(D2-RV(X,I))
E2 = E2+RVM(X,I,3)+AIM(X,I,3)*(D2-RV(X,I))
L = RVM(X,I,2)+AIM(X,I,2)*(D2-
RV(X,I))
SOUND2
= RVM(X,I,4)+AIM(X,I,4)*(D2-RV(X,I)) !SOUNDSPEED EVALUATED BY USING SQRT(SLOPE) AT PC,UL
INTERSECTION
ELSE
P2 = CBTMD2V(X)*(D2-
RTMDV(X))
E2 = E2+PCITMD+CBTMD2V(X)*(RTMDV(X)*(ONE/D2-ONE/RMAXV(X))+LOG(D2/RMAXV(X)))
L =
RTMDV(X)
SOUND2
= CBTMDV(X)
END IF
ALPHA2 = RTMDV(X)/L
!ELASTIC BEHAVIOR => NO COMPACTION => NO CHANGE IN ALPHA
ELSE
G =
LVM(X,J,2)+AJM(X,J,2)*DL
PINT = LVM(X,J,4)+AJM(X,J,4)*DL
AA = PINT/(EXP(G)-ONE)
BB = G/RL
P2 = AA*(EXP(BB*(D2-L))-ONE)
!EVALUATE PRESSURE ON UL-CURVE
E2 = E1+PULINTF(L,AA,BB,D2*(DVV+ONE),D2)
SOUND2 =
SQRT(AA*BB*EXP(BB*(D2-L))) !TRUE UL-CURVE SLOPE FOR EVALUATION OF SOUNDSPEED
IF ( SOUND2 < CB0V(X) )
SOUND2 = CB0V(X) !ENFORCE MINIMUM SOUNDSPEED OF C0
END IF
END IF
ELSE
!NEGATIVE COMPRESSION FROM LAMDA=R0 STATE
IF ( D2 < L ) THEN
P2 = ZERO
E2 = E1
SOUND2 = CB0V(X)
!POSITIVE COMPRESSION FROM OLD ALPHA STATE. ONLY PLASTIC BEHAVIOR POSSIBLE => NEW ALPHA
ELSE
P2 = FASTPCF(X,D2)
E2 = E1+FASTPCINTF(X,L,D2)
L = FASTLAMBDAF(X,D2)
ALPHA2 = RTMDV(X)/L
IF ( D2 > R0V(X) ) THEN
IF ( D2 < RMAXV(X) ) THEN
I = FLOOR((D2-
R0V(X))/DRLV(X))+1
SOUND2 =
RVM(X,I,4)+AIM(X,I,4)*(D2-RV(X,I)) !SQRT(SLOPE) OF UL-CURVE AT UL/PC INTERSECTION
ELSE
SOUND2 = CBTMDV(X)
END IF
ELSE
SOUND2 = CB0V(X)
END IF
END IF
END IF
!CASE 2:------------------------ !INITIALIZATION REQUIRED. ASSUME P1>=0
ELSE IF ( ALPHA2 == ZERO ) THEN
IF ( PORE == 1 ) THEN
P1 = E1 !CHANGE
INTERNAL ENERGY TO PRESSURE... ONLY WAY TO INITIALIZE MODEL WITH NON-ZERO PRESSURE
E1 = ZERO !INTERNAL ENERGY IS
RESET TO ZERO IF THIS OPTION IS USED I.E PORE = 1
END IF
IF ( P1 <= CBTMD2V(X)*(D2-RTMDV(X)) .OR. D2
>= RMAXV(X) ) THEN
P2 = CBTMD2V(X)*(D2-RTMDV(X))
ALPHA2 = ONE
SOUND2 = CBTMDV(X)
ELSE IF ( D2 <= R0V(X) ) THEN
ALPHA2 = RTMDV(X)/R0V(X)
SOUND2 = CB0V(X)
ELSE
P2 = FASTPCF(X,D2)
IF ( P1 >= P2 ) THEN
L = FASTLAMBDAF(X,D2)
ELSE
P2 = P1
!L = FINDL(X,D2,P2)
END IF
ALPHA2 = RTMDV(X)/L
SOUND2 = SOUNDF(X,L,D2)
END IF
E2 = E1

-- 298 of 311 --

Markstötvåg
2020-09-28 revidering 2 298
!CASE 3:----------------------- !ON THE TMD LINE
ELSE
!NEGATIVE COMPRESSION AT LAMBDA=RTMD STATE
IF ( D2 < RTMDV(X) ) THEN
P2 = ZERO
E2 = E1-CBTMD2V(X)*(RTMDV(X)/D2/(DVV+ONE)-
ONE+LOG(D2*(DVV+ONE)/RTMDV(X)))
!POSITIVE COMPRESSION FROM OLD ALPHA TMD STATE. ONLY ELASTIC BEHAVIOR POSSIBLE
ELSE
P2 = CBTMD2V(X)*(D2-RTMDV(X))
E2 =
E1+CBTMD2V(X)*(RTMDV(X)*DVV/D2/(DVV+ONE)-LOG(DVV+ONE))
END IF
SOUND2 = CBTMDV(X)
END IF
!END IF
!FIND NEW SPECIFIC ENERGY
!E2 = E1+P2*(D2-D1)/D1/D2 !METHODOLOGY AFTER THE ISSUE WITH D1 DERIVED FROM
DVV WHICH MAY BE ZERO
!E2 = E1-P2*DVV/D2 !OLD METHODOLOGY... QUESTIONABLE WHEN DVV = 0, DUE
TO 1E-6 CUTOFF
!E1 = E1+P2*(D2-D1)/D1/D2+P2*DVV/D2 !AFTER THE CONCLUSION THAT E2 (EE) IS NOT AN OUTPUT VARIABLE
END SUBROUTINE EXEOS
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
! FILE = w1_Interface_Modules.f90
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------
MODULE int_linsol
INTERFACE
SUBROUTINE LINSOL (A,B,X)
USE kindef
REAL (REAL8), DIMENSION(:,:), POINTER :: A
REAL (REAL8), DIMENSION(:), POINTER :: B,X
END SUBROUTINE LINSOL
END INTERFACE
END MODULE int_linsol
MODULE linevalm
INTERFACE
SUBROUTINE LINEVAL (PV,X,IT,Y)
USE kindef
REAL (REAL8), DIMENSION(:,:), POINTER :: PV
REAL (REAL8) :: X,Y
INTEGER (INT4) :: IT
END SUBROUTINE LINEVAL
SUBROUTINE LINEVALMOD (PV,X,IT,Y)
USE kindef
REAL (REAL8), DIMENSION(:,:), POINTER :: PV
REAL (REAL8) :: X,Y
INTEGER (INT4) :: IT
END SUBROUTINE LINEVALMOD
END INTERFACE
END MODULE linevalm
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
! FILE = CommonFiles.f90
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------
REAL (REAL8) FUNCTION LININT(X1,X2,Y1,Y2,XY,XORY)
USE kindef
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: X1,X2,Y1,Y2,XY
INTEGER (INT4), INTENT(IN) :: XORY
IF ( XORY == 1 ) THEN
LININT = (Y2-Y1)/(X2-X1)*(XY-X1)+Y1
ELSE IF ( XORY == 2 ) THEN
LININT = (X2-X1)/(Y2-Y1)*(XY-Y1)+X1
ELSE
CALL ADQUIT ('$ERROR, BAD INPUT FOR XORY IN LININT ID$')
END IF
END FUNCTION
! FILE : w1_Global Parameters.f90
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------
SUBROUTINE GLOBALPARAMETERS
USE globalm
IMPLICIT NONE
SAVE
!GLOBAL PARAMETERS
GMIN = EPSLN10 !MINIMUM GAMMA (EXPONENTIAL CURVE FACTOR) CORRESPONDING TO
APPROXIMATE LINEAR P_UL CURVES
NIP = 100000 !NUMBER OF INTERPOLATION POINTS (AND EVENLY SPACED SEGMENTS) FOR FAST EVALUATION OF P_UL
AND FASTALFAF()
NIPLIM = 1000000 !MAXIMUM NUMBER OF INTERPOLATION POINTS FOR P_UL AND FASTALFAF()
SPVTOL = EPSLN12 !TOLERANCE TO PREVENT TOO SMALL IJ GAPS IN SPV VECTOR
RETURN
END SUBROUTINE GLOBALPARAMETERS
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
! FILE = w1_Modules.f90
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------

-- 299 of 311 --

Markstötvåg
2020-09-28 revidering 2 299
MODULE globalm
USE kindef
IMPLICIT NONE
SAVE
INTEGER (INT4) :: SWINIT,PORE,UNMAT,NMAT,NIP,NIPLIM,IJN,IJC
REAL (REAL8) :: GMIN,SPVTOL,PCITMD
INTEGER (INT4), DIMENSION(3) :: NMAXV
INTEGER (INT4), DIMENSION(:), POINTER :: MIDV,MV,NV,QV,QQ0V,QQV
INTEGER (INT4), DIMENSION(:,:), POINTER :: PARMM
INTEGER (INT4), DIMENSION(:,:,:), POINTER :: SP0IM,SPIM
REAL (REAL8), DIMENSION(:), POINTER ::
R0V,RTMDV,CB0V,CB02V,CBTMDV,CBTMD2V,RMAXV,PMAXV,DRLV,DLLV
REAL (REAL8), DIMENSION(:,:), POINTER :: AI0M,AJ0M,AK0M,RV,LV
REAL (REAL8), DIMENSION(:,:,:), POINTER :: AIM,AJM,RP0M,LC0M,RVM,LVM,LG0M,SP0RM,SPRM
DATA SWINIT /0/ UNMAT /0/ IJC /0/
END MODULE globalm
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
! FILE =
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------
SUBROUTINE DEALLOCGLOBAL
USE globalm
IMPLICIT NONE
INTEGER (INT4) :: I
! DEALLOCATE AND NULLIFY GLOBAL POINTERS
DEALLOCATE (MIDV)
NULLIFY (MIDV)
DEALLOCATE (MV)
NULLIFY (MV)
DEALLOCATE (NV)
NULLIFY (NV)
DEALLOCATE (QV)
NULLIFY (QV)
DEALLOCATE (QQ0V)
NULLIFY (QQ0V)
DEALLOCATE (QQV)
NULLIFY (QQV)
DEALLOCATE (SP0IM)
NULLIFY (SP0IM)
DEALLOCATE (SPIM)
NULLIFY (SPIM)
DEALLOCATE (R0V)
NULLIFY (R0V)
DEALLOCATE (RTMDV)
NULLIFY (RTMDV)
DEALLOCATE (CB0V)
NULLIFY (CB0V)
DEALLOCATE (CB02V)
NULLIFY (CB02V)
DEALLOCATE (CBTMDV)
NULLIFY (CBTMDV)
DEALLOCATE (CBTMD2V)
NULLIFY (CBTMD2V)
DEALLOCATE (RMAXV)
NULLIFY (RMAXV)
DEALLOCATE (PMAXV)
NULLIFY (PMAXV)
DEALLOCATE (DRLV)
NULLIFY (DRLV)
DEALLOCATE (DLLV)
NULLIFY (DLLV)
DEALLOCATE (AI0M)
NULLIFY (AI0M)
DEALLOCATE (AJ0M)
NULLIFY (AJ0M)
DEALLOCATE (AK0M)
NULLIFY (AK0M)
DEALLOCATE (RV)
NULLIFY (RV)
DEALLOCATE (LV)
NULLIFY (LV)
DEALLOCATE (AIM)
NULLIFY (AIM)
DEALLOCATE (AJM)
NULLIFY (AJM)
DEALLOCATE (RP0M)
NULLIFY (RP0M)
DEALLOCATE (LC0M)
NULLIFY (LC0M)
DEALLOCATE (RVM)
NULLIFY (RVM)
DEALLOCATE (LVM)
NULLIFY (LVM)
DEALLOCATE (LG0M)
NULLIFY (LG0M)
DEALLOCATE (SP0RM)
NULLIFY (SP0RM)
DEALLOCATE (SPRM)
NULLIFY (SPRM)
! RESET INITIALIZATION SWITCH
SWINIT = 0
RETURN
END SUBROUTINE DEALLOCGLOBAL
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
! FILE = w1_Specific Subroutines.f90
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------
SUBROUTINE FINDRHOMAX
USE globalm
IMPLICIT NONE

-- 300 of 311 --

Markstötvåg
2020-09-28 revidering 2 300
INTEGER (INT4) :: X,I,IERR
ALLOCATE (RMAXV(NMAT),STAT=IERR)
ALLOCATE (PMAXV(NMAT),STAT=IERR)
DO X = 1, NMAT
RMAXV(X) = (RP0M(X,MV(X)-1,2)+CBTMD2V(X)*RTMDV(X)-AI0M(X,MV(X)-1)*RP0M(X,MV(X)-1,1))/(CBTMD2V(X)-AI0M(X,MV(X)-1))
IF ( RMAXV(X) < RP0M(X,MV(X)-1,1) ) THEN
DO I = MV(X)-2, 1, -1
RMAXV(X) = (RP0M(X,I,2)+CBTMD2V(X)*RTMDV(X)-AI0M(X,I)*RP0M(X,I,1))/(CBTMD2V(X)-AI0M(X,I))
IF ( RMAXV(X) >= RP0M(X,I,1) ) EXIT
END DO
END IF
PMAXV(X) = CBTMD2V(X)*(RMAXV(X)-RTMDV(X))
END DO
RETURN
END SUBROUTINE FINDRHOMAX
!___________________________________________________________________________________________________________________
SUBROUTINE SP0MFGEN
USE globalm
IMPLICIT NONE
REAL (REAL8) :: R,P,RTI,RTJ,LAMBDAIJF0
INTEGER (INT4) :: X,I,J,N2,IERR,QQ0
REAL (REAL8), DIMENSION(:,:,:), POINTER :: TMR
INTEGER (INT4), DIMENSION(:,:,:), POINTER :: TMI
! ALLOCATE TEMPORARY STORAGE DATA STRUCTURES
N2 = NMAXV(1)+NMAXV(2)
ALLOCATE (TMR(NMAT,N2,2),STAT=IERR)
ALLOCATE (TMI(NMAT,N2,2),STAT=IERR)
! INITIALIZE TEMPORARY STORAGE DATA STRUCTURES
DO X = 1, NMAT
DO I = 1, N2
DO J = 1, 2
TMR(X,I,J) = ZERO
TMI(X,I,J) = 0
END DO
END DO
END DO
N2 = 0
ALLOCATE (QQ0V(NMAT),STAT=IERR)
DO X = 1, NMAT
QQ0 = 1
TMR(X,QQ0,1) = R0V(X)
TMR(X,QQ0,2) = R0V(X)
TMI(X,QQ0,1) = 1
TMI(X,QQ0,2) = 1
I = 1
J = 2
DO WHILE ( J <= NV(X)-1 )
DO WHILE ( I <= MV(X)-1 )
RTI = (RP0M(X,I,2)+LC0M(X,J,1)*LC0M(X,J,2)**2-AI0M(X,I)*RP0M(X,I,1))/(LC0M(X,J,2)**2-
AI0M(X,I))
IF ( RTI >= RP0M(X,I,1) ) THEN
IF ( I < MV(X)-1 ) THEN
IF ( RTI <= RP0M(X,I+1,1)-SPVTOL ) EXIT
ELSE
EXIT
END IF
END IF
I = I+1
IF ( RP0M(X,I,1) <= TMR(X,QQ0,2) ) CALL ADQUIT ('$ERROR, UL CROSSING
DURING SP0M CREATION I1$')
IF ( ABS(RTI-RP0M(X,I,1)) < SPVTOL ) THEN
RTJ = LC0M(X,J,1)
J = J+1
ELSE
RTJ = LAMBDAIJF0(X,RP0M(X,I,1),I,J-1)
END IF
IF ( RTJ <= TMR(X,QQ0,1) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING SP0M CREATION I2$')
QQ0 = QQ0+1
TMR(X,QQ0,1) = RTJ
TMR(X,QQ0,2) = RP0M(X,I,1)
TMI(X,QQ0,1) = I
TMI(X,QQ0,2) = J-1
END DO
IF ( J <= NV(X)-1 ) THEN
IF ( RTI <= TMR(X,QQ0,2) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING SP0M CREATION J1$')
IF ( LC0M(X,J,1) <= TMR(X,QQ0,1) ) CALL ADQUIT ('$ERROR, UL CROSSING
DURING SP0M CREATION J2$')
QQ0 = QQ0+1
TMR(X,QQ0,1) = LC0M(X,J,1)
TMR(X,QQ0,2) = RTI
TMI(X,QQ0,1) = I
TMI(X,QQ0,2) = J
END IF
J = J+1
END DO
I = I+1
DO WHILE ( I <= MV(X)-1 )
IF ( RP0M(X,I,1) <= TMR(X,QQ0,2) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING SP0M CREATION
I3$')
RTJ = LAMBDAIJF0(X,RP0M(X,I,1),I,J-1)
IF ( RTJ <= TMR(X,QQ0,1) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING SP0M CREATION I3$')
QQ0 = QQ0+1
TMR(X,QQ0,1) = RTJ
TMR(X,QQ0,2) = RP0M(X,I,1)
TMI(X,QQ0,1) = I
TMI(X,QQ0,2) = J-1
I = I+1
END DO

-- 301 of 311 --

Markstötvåg
2020-09-28 revidering 2 301
IF ( RMAXV(X) <= TMR(X,QQ0,2) ) CALL ADQUIT ('$ERROR, THE LAST SP0M LINE CROSSES PC BEYOND
RMAX$')
IF ( QQ0 > N2 ) N2 = QQ0 ! DETERMINE REQUIRED ARRAY SIZE ON SP0RM AND SP0IM
QQ0V(X) = QQ0
END DO
ALLOCATE (SP0RM(NMAT,N2,2),STAT=IERR)
ALLOCATE (SP0IM(NMAT,N2,2),STAT=IERR)
DO X = 1, NMAT
DO I = 1, QQ0V(X)
DO J = 1, 2
SP0RM(X,I,J) = TMR(X,I,J)
SP0IM(X,I,J) = TMI(X,I,J)
END DO
END DO
DO I = QQ0V(X)+1, N2
DO J = 1, 2
SP0RM(X,I,J) = TMR(X,I,J)
SP0IM(X,I,J) = TMI(X,I,J)
END DO
END DO
END DO
DEALLOCATE (TMR)
NULLIFY (TMR)
DEALLOCATE (TMI)
NULLIFY (TMI)
RETURN
END SUBROUTINE SP0MFGEN
!___________________________________________________________________________________________________________________
SUBROUTINE ESEGCREAT
USE globalm
IMPLICIT NONE
REAL (REAL8) :: RII,LII
INTEGER (INT4) :: I,J,II,X,NMINX,IERR
! FIND THE ULTIMATE SIZE ON RPM AND LCM ARRAYS
DO I = 1, 3
IF ( NMAXV(I) > NIP ) NIP = NMAXV(I)
END DO
IF ( NIP > NIPLIM ) CALL ADQUIT ('$ERROR, M,N OR Q EXCEEDS NIPLIM$')
DO X = 1, NMAT
NMINX = CEILING((RTMDV(X)-R0V(X))/(SP0RM(X,2,1)-R0V(X)))
IF ( NMINX > NIP ) NIP = NMINX
END DO
IF ( NIP > NIPLIM ) CALL ADQUIT ('$ERROR, NMINX EXCEEDS NIPLIM$')
ALLOCATE (DRLV(NMAT),STAT=IERR)
ALLOCATE (DLLV(NMAT),STAT=IERR)
ALLOCATE (RV(NMAT,NIP),STAT=IERR)
ALLOCATE (LV(NMAT,NIP),STAT=IERR)
ALLOCATE (RVM(NMAT,NIP,4),STAT=IERR)
ALLOCATE (LVM(NMAT,NIP,6),STAT=IERR)
ALLOCATE (AIM(NMAT,NIP,4),STAT=IERR)
ALLOCATE (AJM(NMAT,NIP,6),STAT=IERR)
DO X = 1, NMAT
DRLV(X) = (RMAXV(X)-R0V(X))/REAL(NIP)
DLLV(X) = (RTMDV(X)-R0V(X))/REAL(NIP)
RII = R0V(X)
LII = R0V(X)
RV(X,1) = RII
RVM(X,1,1) = ZERO
RVM(X,1,3) = ZERO
LV(X,1) = LII
LVM(X,1,1) = LC0M(X,1,2)
I = 1
J = 1
DO II = 2, NIP
RII = RII+DRLV(X)
LII = LII+DLLV(X)
DO WHILE ( I <= MV(X)-1 .AND. RP0M(X,I+1,1) <= RII )
I = I+1
END DO
DO WHILE ( J <= NV(X)-1 .AND. LC0M(X,J+1,1) <= LII )
J = J+1
END DO
RV(X,II) = RII
RVM(X,II,1) = RP0M(X,I,2)+AI0M(X,I)*(RII-RP0M(X,I,1))
LV(X,II) = LII
LVM(X,II,1) = LC0M(X,J,2)+AJ0M(X,J)*(LII-LC0M(X,J,1))
AIM(X,II-1,1) = (RVM(X,II,1)-RVM(X,II-1,1))/DRLV(X)
RVM(X,II,3) = RVM(X,II-1,3)+DRLV(X)*(RVM(X,II-1,1)-AIM(X,II-1,1)*RV(X,II-1))/RII/RV(X,II-
1)+AIM(X,II-1,1)*LOG(RII/RV(X,II-1))
AIM(X,II-1,3) = (RVM(X,II,3)-RVM(X,II-1,3))/DRLV(X)
AJM(X,II-1,1) = (LVM(X,II,1)-LVM(X,II-1,1))/DLLV(X)
END DO
AIM(X,NIP,1) = (PMAXV(X)-RVM(X,NIP,1))/DRLV(X)
PCITMD = RVM(X,NIP,3)+DRLV(X)*(RVM(X,NIP,1)-
AIM(X,NIP,1)*RV(X,NIP))/RMAXV(X)/RV(X,NIP)+AIM(X,NIP,1)*LOG(RMAXV(X)/RV(X,NIP))
AIM(X,NIP,3) = (PCITMD-RVM(X,NIP,3))/DRLV(X)
AJM(X,NIP,1) = (CBTMDV(X)-LVM(X,NIP,1))/DLLV(X)
END DO
RETURN
END SUBROUTINE ESEGCREAT
!___________________________________________________________________________________________________________________

-- 302 of 311 --

Markstötvåg
2020-09-28 revidering 2 302
SUBROUTINE SPMFGEN
USE globalm
IMPLICIT NONE
REAL (REAL8) :: R,P,RTI,RTJ,LAMBDAIJF
INTEGER (INT4) :: X,I,J,N2,IERR,QQ
REAL (REAL8), DIMENSION(:,:,:), POINTER :: TMR
INTEGER (INT4), DIMENSION(:,:,:), POINTER :: TMI
! ALLOCATE TEMPORARY STORAGE DATA STRUCTURES
N2 = 2*NIP+2
ALLOCATE (TMR(NMAT,N2,2),STAT=IERR)
ALLOCATE (TMI(NMAT,N2,2),STAT=IERR)
! INITIALIZE TEMPORARY STORAGE DATA STRUCTURES
DO X = 1, NMAT
DO I = 1, N2
DO J = 1, 2
TMR(X,I,J) = ZERO
TMI(X,I,J) = 0
END DO
END DO
END DO
N2 = 0
ALLOCATE (QQV(NMAT),STAT=IERR)
DO X = 1, NMAT
QQ = 1
TMR(X,QQ,1) = R0V(X)
TMR(X,QQ,2) = R0V(X)
TMI(X,QQ,1) = 1
TMI(X,QQ,2) = 1
I = 1
J = 2
DO WHILE ( J <= NIP )
DO WHILE ( I <= NIP )
RTI = (RVM(X,I,1)+LV(X,J)*LVM(X,J,1)**2-AIM(X,I,1)*RV(X,I))/(LVM(X,J,1)**2-AIM(X,I,1))
IF ( RTI >= RV(X,I) ) THEN
IF ( I < NIP ) THEN
IF ( RTI <= RV(X,I+1)-SPVTOL ) EXIT
ELSE
EXIT
END IF
END IF
I = I+1
IF ( RV(X,I) <= TMR(X,QQ,2) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING
SPM CREATION I1$')
IF ( ABS(RTI-RV(X,I)) < SPVTOL ) THEN
RTJ = LV(X,J)
J = J+1
ELSE
RTJ = LAMBDAIJF(X,RV(X,I),I,J-1)
END IF
IF ( RTJ <= TMR(X,QQ,1) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING SPM CREATION I2$')
QQ = QQ+1
TMR(X,QQ,1) = RTJ
TMR(X,QQ,2) = RV(X,I)
TMI(X,QQ,1) = I
TMI(X,QQ,2) = J-1
END DO
IF ( J <= NIP ) THEN
IF ( RTI <= TMR(X,QQ,2) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING SPM CREATION J1$')
IF ( LV(X,J) <= TMR(X,QQ,1) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING
SPM CREATION J2$')
QQ = QQ+1
TMR(X,QQ,1) = LV(X,J)
TMR(X,QQ,2) = RTI
TMI(X,QQ,1) = I
TMI(X,QQ,2) = J
END IF
J = J+1
END DO
I = I+1
DO WHILE ( I <= NIP )
IF ( RV(X,I) <= TMR(X,QQ,2) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING SPM CREATION I3$')
RTJ = LAMBDAIJF(X,RV(X,I),I,J-1)
IF ( RTJ <= TMR(X,QQ,1) ) CALL ADQUIT ('$ERROR, UL CROSSING DURING SPM CREATION I3$')
QQ = QQ+1
TMR(X,QQ,1) = RTJ
TMR(X,QQ,2) = RV(X,I)
TMI(X,QQ,1) = I
TMI(X,QQ,2) = J-1
I = I+1
END DO
IF ( RMAXV(X) <= TMR(X,QQ,2) ) CALL ADQUIT ('$ERROR, THE LAST SPM LINE CROSSES PC BEYOND
RMAX$')
IF ( QQ > N2 ) N2 = QQ ! DETERMINE REQUIRED ARRAY SIZE ON SPRM AND SPIM
QQV(X) = QQ
END DO
ALLOCATE (SPRM(NMAT,N2,2),STAT=IERR)
ALLOCATE (SPIM(NMAT,N2,2),STAT=IERR)
DO X = 1, NMAT
DO I = 1, QQV(X)
DO J = 1, 2
SPRM(X,I,J) = TMR(X,I,J)
SPIM(X,I,J) = TMI(X,I,J)
END DO
END DO
DO I = QQV(X)+1, N2
DO J = 1, 2
SPRM(X,I,J) = TMR(X,I,J)
SPIM(X,I,J) = TMI(X,I,J)
END DO
END DO
END DO
DEALLOCATE (TMR)
NULLIFY (TMR)
DEALLOCATE (TMI)

-- 303 of 311 --

Markstötvåg
2020-09-28 revidering 2 303
NULLIFY (TMI)
RETURN
END SUBROUTINE SPMFGEN
!___________________________________________________________________________________________________________________
SUBROUTINE CHECKCROSSINGS1
USE globalm
IMPLICIT NONE
REAL (REAL8) :: LS,LE,LJ,CJ,A2,Q,RR,DD,AC,T,L,SM,TM
INTEGER (INT4) :: I,J,II,X,K
DO X = 1, NMAT
DO II = 1, QQV(X)
I = SPIM(X,II,1)
J = SPIM(X,II,2)
LS = SPRM(X,II,1)
IF ( II < QQV(X) ) THEN
LE = SPRM(X,II+1,1)
ELSE
LE = RTMDV(X)
END IF
LJ = LV(X,J)
CJ = LVM(X,J,1)
! CHECK IF RHO_INT'(LS) > 0. RHO_INT 0 RHO-INTERSECTION PC AND PUL. LS AND LE IS THE START
VALUE FOR VALID (I,J) SEGMENT
A2 = (CJ+AJM(X,J,1)*(LS-LJ))**3-TWO*AJM(X,J,1)*RVM(X,I,1)+AIM(X,I,1)*(AJM(X,J,1)*(LJ-
THREE*LS+TWO*RV(X,I))-CJ)
IF ( A2 <= ZERO ) CALL ADQUIT ('$ERROR, UL-CROSSING RHO_INT(LS)<=0$')
A2 = THREE*(CJ/AJM(X,J,1)-LJ)
Q = -AIM(X,I,1)/AJM(X,J,1)**2
RR = (AJM(X,J,1)*RVM(X,I,1)-AIM(X,I,1)*(CJ+AJM(X,J,1)*(RV(X,I)-LJ)))/AJM(X,J,1)**3
DD = Q**3+RR**2
IF ( DD < ZERO ) THEN
AC = RR/SQRT(-Q**3)
IF ( ABS(AC) > ONE ) AC = SIGN(ONE,AC)
T = ACOS(AC)
DO K = 0, 2
AC = TWO*SQRT(-Q)*COS((T+TWO*K*PI)/THREE)-THIRD*A2
IF ( AC >= LS .AND. AC < LE ) CALL ADQUIT ('$ERROR, UL-CROSSING ROOT
FOUND$')
END DO
ELSE IF ( DD > ZERO ) THEN
SM = RR+SQRT(DD)
TM = RR-SQRT(DD)
L = -THIRD*A2+SIGN(ONE,SM)*ABS(SM)**THIRD+SIGN(ONE,TM)*ABS(TM)**THIRD
IF ( L >= LS .AND. L < LE ) CALL ADQUIT ('$ERROR, UL-CROSSING ROOT FOUND$')
ELSE
SM = RR+SQRT(DD)
L = -THIRD*A2+TWO*SIGN(ONE,SM)*ABS(SM)**THIRD
IF ( L >= LS .AND. L < LE ) CALL ADQUIT ('$ERROR, UL-CROSSING ROOT FOUND$')
L = -THIRD*A2-SIGN(ONE,SM)*ABS(SM)**THIRD
IF ( L >= LS .AND. L < LE ) CALL ADQUIT ('$ERROR, UL-CROSSING ROOT FOUND$')
END IF
END DO
END DO
RETURN
END SUBROUTINE CHECKCROSSINGS1
!___________________________________________________________________________________________________________________
SUBROUTINE LAMBDAFGEN
USE globalm
IMPLICIT NONE
REAL (REAL8) :: RII,LAMBDAIJF
INTEGER (INT4) :: I,J,II,KK,X,IERR
DO X = 1, NMAT
RII = R0V(X)
RVM(X,1,2) = R0V(X)
KK = 1
DO II = 2, NIP
RII = RII+DRLV(X)
DO WHILE ( KK <= QQV(X)-1 .AND. SPRM(X,KK+1,2) <= RII )
KK = KK+1
END DO
I = SPIM(X,KK,1)
J = SPIM(X,KK,2)
RVM(X,II,2) = LAMBDAIJF(X,RII,I,J)
AIM(X,II-1,2) = (RVM(X,II,2)-RVM(X,II-1,2))/DRLV(X)
END DO
AIM(X,NIP,2) = (RTMDV(X)-RVM(X,NIP,2))/DRLV(X)
END DO
RETURN
END SUBROUTINE LAMBDAFGEN
!___________________________________________________________________________________________________________________
SUBROUTINE GAMMAPULGEN
USE globalm
IMPLICIT NONE
REAL (REAL8) :: LII,R,P,CB,RINT,CUS
INTEGER (INT4) :: I,J,K,II,KK,X,IERR
DO X = 1, NMAT

-- 304 of 311 --

Markstötvåg
2020-09-28 revidering 2 304
LII = R0V(X)
LVM(X,1,2) = LG0M(X,1,2)
LVM(X,1,3) = ZERO
LVM(X,1,4) = ZERO
LVM(X,1,5) = CB0V(X)
LVM(X,1,6) = CB0V(X)
K = 1
KK = 1
DO II = 2, NIP
LII = LII+DLLV(X)
DO WHILE ( KK <= QQV(X)-1 .AND. SPRM(X,KK+1,1) <= LII )
KK = KK+1
END DO
I = SPIM(X,KK,1)
J = SPIM(X,KK,2)
DO WHILE ( K <= QV(X)-1 .AND. LG0M(X,K+1,1) <= LII )
K = K+1
END DO
R = RV(X,I)
P = RVM(X,I,1)
CB = LVM(X,J,1)+AJM(X,J,1)*(LII-LV(X,J))
RINT = (P-R*AIM(X,I,1)+LII*CB**2)/(CB**2-AIM(X,I,1))
LVM(X,II,2) = LG0M(X,K,2)+AK0M(X,K)*(LII-LG0M(X,K,1))
LVM(X,II,3) = RINT-LII
LVM(X,II,4) = P+AIM(X,I,1)*(RINT-R)
CUS = LVM(X,II,4)*LVM(X,II,2)/(EXP(LVM(X,II,2))-ONE)/LVM(X,II,3)
LVM(X,II,5) = SQRT(CUS)
IF ( LVM(X,II,5) < CB0V(X) ) LVM(X,II,5) = CB0V(X)
LVM(X,II,6) = SQRT(EXP(LVM(X,II,2))*CUS)
IF ( LVM(X,II,6) < CB0V(X) ) LVM(X,II,6) = CB0V(X)
AJM(X,II-1,2) = (LVM(X,II,2)-LVM(X,II-1,2))/DLLV(X)
AJM(X,II-1,3) = (LVM(X,II,3)-LVM(X,II-1,3))/DLLV(X)
AJM(X,II-1,4) = (LVM(X,II,4)-LVM(X,II-1,4))/DLLV(X)
AJM(X,II-1,5) = (LVM(X,II,5)-LVM(X,II-1,5))/DLLV(X)
AJM(X,II-1,6) = (LVM(X,II,6)-LVM(X,II-1,6))/DLLV(X)
END DO
AJM(X,NIP,2) = (LG0M(X,QV(X),2)-LVM(X,NIP,2))/DLLV(X)
AJM(X,NIP,3) = (RMAXV(X)-RTMDV(X)-LVM(X,NIP,3))/DLLV(X)
AJM(X,NIP,4) = (PMAXV(X)-LVM(X,NIP,4))/DLLV(X)
AJM(X,NIP,5) = (CBTMDV(X)-LVM(X,NIP,5))/DLLV(X)
AJM(X,NIP,6) = (CBTMDV(X)-LVM(X,NIP,6))/DLLV(X)
END DO
RETURN
END SUBROUTINE GAMMAPULGEN
!___________________________________________________________________________________________________________________
SUBROUTINE SOUNDHGEN
USE globalm
IMPLICIT NONE
REAL (REAL8) :: L,DL,G,RL,PINT
INTEGER (INT4) :: X,II,K
DO X = 1, NMAT
RVM(X,1,4) = CB0V(X)
DO II = 2, NIP
L = RVM(X,II,2)
K = FLOOR((L-R0V(X))/DLLV(X))+1
DL = L-LV(X,K)
G = LVM(X,K,2)+AJM(X,K,2)*DL
RL = LVM(X,K,3)+AJM(X,K,3)*DL
PINT = LVM(X,K,4)+AJM(X,K,4)*DL
RVM(X,II,4) = SQRT(EXP(G)*PINT*G/(EXP(G)-ONE)/RL)
IF ( RVM(X,II,4) < CB0V(X) ) RVM(X,II,4) = CB0V(X)
AIM(X,II-1,4) = (RVM(X,II,4)-RVM(X,II-1,4))/DRLV(X)
END DO
AIM(X,NIP,4) = (CB0V(X)-RVM(X,NIP,4))/DRLV(X)
END DO
RETURN
END SUBROUTINE SOUNDHGEN
!___________________________________________________________________________________________________________________
SUBROUTINE PARMMGEN
USE globalm
USE subdef
IMPLICIT NONE
INTEGER (INT4) :: I,J,IERR
IJN = 0
DO I = 1, NUMSUB
IJN = IJN+NUMI(I)*NUMJ(I)+(NUMI(I)-1)*(NUMJ(I)-1)
END DO
ALLOCATE (PARMM(IJN,2),STAT=IERR)
DO I = 1, IJN
DO J = 1, 2
PARMM(I,J) = 0
END DO
END DO
RETURN
END SUBROUTINE PARMMGEN
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

-- 305 of 311 --

Markstötvåg
2020-09-28 revidering 2 305
! FILE = Specific Functions.f90
!-----------MODEOS 4 by Ola Pramm Larsen for MSB (Nov. 20, 2011)-------------
REAL (REAL8) FUNCTION LAMBDAIJF0(X,R,I,J)
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: R
INTEGER (INT4), INTENT(IN) :: X,I,J
REAL (REAL8) :: P,LJ,LJ1,CJ,A,A2,O,Q,RR,DD,AC,T,SM,TM,L,L1,L2
INTEGER (INT4) :: K,KK
IF ( R < RP0M(X,I,1) ) CALL ADQUIT ('$ERR, >= BAD INPUT LAMBDAIJF0(). R<RI$')
IF ( I < MV(X)-1 ) THEN
IF ( R >= RP0M(X,I+1,1) ) CALL ADQUIT ('$ERR, >= BAD INPUT LAMBDAIJF0(). R>=R_I+1$')
END IF
P = RP0M(X,I,2)+AI0M(X,I)*(R-RP0M(X,I,1))
! CHECK R INPUT CONSISTANCY WITH LINEAR J SEGMENT
LJ = LC0M(X,J,1)
LJ1 = LC0M(X,J+1,1)
CJ = LC0M(X,J,2)
IF ( R < LJ ) CALL ADQUIT ('$ERR, >= BAD INPUT LAMBDAIJF0(). R<L_J$')
A = AJ0M(X,J)
A2 = TWO*CJ/A-TWO*LJ-R
O = (CJ+A*(R-LJ))/THREE/A
DD = P/A**2*(QUART*P/A**2-O**3)
Q = -O**2 ! Q<0
RR = SIGN(ONE,O**3-HALF*P/A**2)*SQRT(DD-Q**3)
IF ( DD < ZERO ) THEN
AC = RR/SQRT(-Q**3)
IF ( ABS(AC) > ONE ) AC = SIGN(ONE,AC)
T = ACOS(AC)
KK = 0
DO K = 0, 2
AC = TWO*SQRT(-Q)*COS((T+TWO*K*PI)/THREE)-THIRD*A2
IF ( AC >= LJ .AND. AC < LJ1 ) THEN
KK = KK+1
IF ( KK >= 2 ) THEN
IF ( AC < L ) L = AC
ELSE
L = AC
END IF
END IF
END DO
IF ( KK >= 1 ) THEN
LAMBDAIJF0 = L
ELSE
CALL ADQUIT ('$ERR IN LAMBDAIJF0(). CAT DD<0$')
END IF
ELSE IF ( DD > ZERO ) THEN
SM = RR+SQRT(DD)
TM = RR-SQRT(DD)
L = -THIRD*A2+SIGN(ONE,SM)*ABS(SM)**THIRD+SIGN(ONE,TM)*ABS(TM)**THIRD
IF ( L >= LJ .AND. L < LJ1 ) THEN
LAMBDAIJF0 = L
ELSE
CALL ADQUIT ('$ERR IN LAMBDAIJF0(). CAT DD>0$')
END IF
ELSE
L1 = -THIRD*A2+TWO*SIGN(ONE,RR)*ABS(RR)**THIRD
L2 = -THIRD*A2-SIGN(ONE,RR)*ABS(RR)**THIRD
KK = 0
IF ( L1 >= LJ .AND. L1 < LJ1 ) THEN
KK = KK+1
IF ( KK >= 2 ) THEN
IF ( L1 < L ) L = L1
ELSE
L = L1
END IF
END IF
IF ( KK >= 1 ) THEN
LAMBDAIJF0 = L
ELSE
CALL ADQUIT ('$ERR IN LAMBDAIJF0(). CAT DD=0$')
END IF
END IF
END FUNCTION
!______________________________________________________________________________________________
REAL (REAL8) FUNCTION LAMBDAIJF(X,R,I,J)
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: R
INTEGER (INT4), INTENT(IN) :: X,I,J
REAL (REAL8) :: P,LJ,LJ1,CJ,A,A2,O,Q,RR,DD,AC,T,SM,TM,L,L1,L2,LM
INTEGER (INT4) :: K,KK
IF ( R < RV(X,I) ) CALL ADQUIT ('$ERR, >= BAD INPUT LAMBDAIJF(). R<RI$')
IF ( I < NIP ) THEN
IF ( R >= RV(X,I+1) ) CALL ADQUIT ('$ERR, >= BAD INPUT LAMBDAIJF(). R>=R_I+1$')
END IF
P = RVM(X,I,1)+AIM(X,I,1)*(R-RV(X,I))
! CHECK R INPUT CONSISTANCY WITH LINEAR J SEGMENT
LJ = LV(X,J)
LJ1 = LJ+DLLV(X)
CJ = LVM(X,J,1)
IF ( R < LJ ) CALL ADQUIT ('$ERR, >= BAD INPUT LAMBDAIJF(). R<L_J$')
A = AJM(X,J,1)
A2 = TWO*CJ/A-TWO*LJ-R
O = (CJ+A*(R-LJ))/THREE/A
DD = P/A**2*(QUART*P/A**2-O**3)
Q = -O**2 ! Q<0
RR = SIGN(ONE,O**3-HALF*P/A**2)*SQRT(DD-Q**3)
IF ( DD < ZERO ) THEN
AC = RR/SQRT(-Q**3)
IF ( ABS(AC) > ONE ) AC = SIGN(ONE,AC)

-- 306 of 311 --

Markstötvåg
2020-09-28 revidering 2 306
T = ACOS(AC)
KK = 0
DO K = 0, 2
AC = TWO*SQRT(-Q)*COS((T+TWO*K*PI)/THREE)-THIRD*A2
IF ( AC >= LJ .AND. AC < LJ1 ) THEN
KK = KK+1
IF ( KK >= 2 ) THEN
IF ( AC < L ) L = AC
ELSE
L = AC
END IF
END IF
END DO
IF ( KK >= 1 ) THEN
LAMBDAIJF = L
ELSE
CALL ADQUIT ('$ERR IN LAMBDAIJF(). CAT DD<0$')
END IF
ELSE IF ( DD > ZERO ) THEN
SM = RR+SQRT(DD)
TM = RR-SQRT(DD)
L = -THIRD*A2+SIGN(ONE,SM)*ABS(SM)**THIRD+SIGN(ONE,TM)*ABS(TM)**THIRD
IF ( L >= LJ .AND. L < LJ1 ) THEN
LAMBDAIJF = L
ELSE
CALL ADQUIT ('$ERR IN LAMBDAIJF(). CAT DD>0$')
END IF
ELSE
L1 = -THIRD*A2+TWO*SIGN(ONE,RR)*ABS(RR)**THIRD
L2 = -THIRD*A2-SIGN(ONE,RR)*ABS(RR)**THIRD
KK = 0
IF ( L1 >= LJ .AND. L1 < LJ1 ) THEN
KK = KK+1
IF ( KK >= 2 ) THEN
IF ( L1 < L ) L = L1
ELSE
L = L1
END IF
END IF
IF ( KK >= 1 ) THEN
LAMBDAIJF = L
ELSE
CALL ADQUIT ('$ERR IN LAMBDAIJF(). CAT DD=0$')
END IF
END IF
END FUNCTION
!______________________________________________________________________________________________
REAL (REAL8) FUNCTION FASTPCF(X,R)
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: R
INTEGER (INT4), INTENT(IN) :: X
INTEGER (INT4) :: I
IF ( R > R0V(X) ) THEN
IF ( R < RMAXV(X) ) THEN
I = FLOOR((R-R0V(X))/DRLV(X))+1
FASTPCF = RVM(X,I,1)+AIM(X,I,1)*(R-RV(X,I))
ELSE
FASTPCF = CBTMD2V(X)*(R-RTMDV(X))
END IF
ELSE
FASTPCF = ZERO
END IF
END FUNCTION
!______________________________________________________________________________________________
REAL (REAL8) FUNCTION FASTPCDSF(X,R)
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: R
INTEGER (INT4), INTENT(IN) :: X
IF ( R >= R0V(X) ) THEN
IF ( R < RMAXV(X) ) THEN
FASTPCDSF = SQRT(AIM(X,FLOOR((R-R0V(X))/DRLV(X))+1,1))
ELSE
FASTPCDSF = CBTMDV(X)
END IF
ELSE
FASTPCDSF = ZERO
END IF
END FUNCTION
!______________________________________________________________________________________________
!ASSUME L < RTMD
REAL (REAL8) FUNCTION FASTCBF(X,L)
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: L
INTEGER (INT4), INTENT(IN) :: X
INTEGER (INT4) :: J
IF ( L > R0V(X) ) THEN
J = FLOOR((L-R0V(X))/DLLV(X))+1
FASTCBF = LVM(X,J,1)+AJM(X,J,1)*(L-LV(X,J))
ELSE
FASTCBF = CB0V(X)
END IF
END FUNCTION
!______________________________________________________________________________________________
REAL (REAL8) FUNCTION FASTLAMBDAF(X,R)

-- 307 of 311 --

Markstötvåg
2020-09-28 revidering 2 307
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: R
INTEGER (INT4), INTENT(IN) :: X
INTEGER (INT4) :: I
IF ( R > R0V(X) ) THEN
IF ( R < RMAXV(X) ) THEN
I = FLOOR((R-R0V(X))/DRLV(X))+1
FASTLAMBDAF = RVM(X,I,2)+AIM(X,I,2)*(R-RV(X,I))
ELSE
FASTLAMBDAF = RTMDV(X)
END IF
ELSE
FASTLAMBDAF = R
END IF
END FUNCTION
!______________________________________________________________________________________________
!ASSUME L<RTMD
REAL (REAL8) FUNCTION FASTPULF(X,L,R)
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: L,R
INTEGER (INT4), INTENT(IN) :: X
INTEGER (INT4) :: J
REAL (REAL8) :: DL,RL,G,PINT
IF ( L > R0V(X) ) THEN
J = FLOOR((L-R0V(X))/DLLV(X))+1
DL = L-LV(X,J)
G = LVM(X,J,2)+AJM(X,J,2)*DL
RL = LVM(X,J,3)+AJM(X,J,3)*DL
PINT = LVM(X,J,4)+AJM(X,J,4)*DL
FASTPULF = PINT/(EXP(G)-ONE)*(EXP(G/RL*(R-L))-ONE)
ELSE
FASTPULF = ZERO
END IF
END FUNCTION
!______________________________________________________________________________________________
!ENFORCE SOUND2>=CB0
REAL (REAL8) FUNCTION SOUNDF(X,L,R)
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: L,R
INTEGER (INT4), INTENT(IN) :: X
INTEGER (INT4) :: J
REAL (REAL8) :: DL,RL,G,PINT
IF ( L > R0V(X) ) THEN
IF ( L < RTMDV(X) ) THEN
J = FLOOR((L-R0V(X))/DLLV(X))+1
DL = L-LV(X,J)
G = LVM(X,J,2)+AJM(X,J,2)*DL
RL = LVM(X,J,3)+AJM(X,J,3)*DL
PINT = LVM(X,J,4)+AJM(X,J,4)*DL
SOUNDF = SQRT(PINT*G/(EXP(G)-ONE)/RL*EXP(G/RL*(R-L)))
IF ( SOUNDF < CB0V(X) ) SOUNDF = CB0V(X)
ELSE
SOUNDF = CBTMDV(X)
END IF
ELSE
SOUNDF = CB0V(X)
END IF
END FUNCTION
!______________________________________________________________________________________________
!INTERNAL ENERGY CALCULATION INTEGRATING ON THE PC-CURVE AND TMD-LINE ONLY. ASSUME R2>R1
REAL (REAL8) FUNCTION FASTPCINTF(X,R1,R2)
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: R1,R2
INTEGER (INT4), INTENT(IN) :: X
INTEGER (INT4) :: I
REAL (REAL8) :: A1,A2
IF ( R1 < RMAXV(X) ) THEN
IF ( R1 > R0V(X) ) THEN
I = FLOOR((R1-R0V(X))/DRLV(X))+1
A1 = RVM(X,I,3)+AIM(X,I,3)*(R1-RV(X,I))
ELSE
A1 = ZERO
END IF
IF ( R2 < RMAXV(X) ) THEN
IF ( R2 > R0V(X) ) THEN
I = FLOOR((R2-R0V(X))/DRLV(X))+1
A2 = RVM(X,I,3)+AIM(X,I,3)*(R2-RV(X,I))
ELSE
A2 = ZERO
END IF
ELSE
A2 = PCITMD+CBTMD2V(X)*(RTMDV(X)*(ONE/R2-ONE/RMAXV(X))+LOG(R2/RMAXV(X)))
END IF
FASTPCINTF = A2-A1
ELSE
FASTPCINTF = CBTMD2V(X)*(RTMDV(X)*(ONE/R2-ONE/R1)+LOG(R2/R1))
END IF
END FUNCTION
!______________________________________________________________________________________________
!INTERNAL ENERGY CALCULATION INTEGRATING ON THE PUL-CURVE ONLY.
REAL (REAL8) FUNCTION PULINTF(L,A,B,R1,R2)
USE globalm

-- 308 of 311 --

Markstötvåg
2020-09-28 revidering 2 308
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: L,A,B,R1,R2
PULINTF = A*(EXP(-B*L)/B*(EXP(B*R2)-EXP(B*R1))+R1-R2)
END FUNCTION
!______________________________________________________________________________________________
!INTERNAL ENERGY CALCULATION INTEGRATING ON THE PUL-CURVE ONLY.
REAL (REAL8) FUNCTION FASTPULINTF(X,L,R1,R2)
USE globalm
IMPLICIT NONE
REAL (REAL8), INTENT(IN) :: L,R1,R2
INTEGER (INT4), INTENT(IN) :: X
INTEGER (INT4) :: J
REAL (REAL8) :: DL,RL,G,PINT,B
J = FLOOR((L-R0V(X))/DLLV(X))+1
DL = L-LV(X,J)
G = LVM(X,J,2)+AJM(X,J,2)*DL
RL = LVM(X,J,3)+AJM(X,J,3)*DL
PINT = LVM(X,J,4)+AJM(X,J,4)*DL
B = G/RL
FASTPULINTF = PINT/(EXP(G)-ONE)*(EXP(-B*L)/B*(EXP(B*R2)-EXP(B*R1))+R1-R2)
END FUNCTION
!______________________________________________________________________________________________
! INTEGER (INT4) FUNCTION FINDINITL(R,P)
! USE globalm
! USE linevalm
! IMPLICIT NONE
! REAL (REAL8), INTENT(IN) :: R,P
! REAL (REAL8) :: LA
! INTEGER (INT4) :: LB,UB,MB,J,Q
!CALL LINEVAL(PLLAV,R,ITPLLA,LA)
!LOWER AND UPPER BOUND
! LB = FLOOR(LOG(ONE-(LA-R0)*XP2FR)/LOGGX)+1
! UB = CEILING(LOG(ONE-(R-R0)*XP2FR)/LOGGX)+1
! IF ( LB > NX ) THEN
! LB = NX
! ELSE
! IF ( LB < 1 ) LB = 1
! END IF
! IF ( UB <= LB ) THEN
! UB = LB+1
! ELSE
! IF ( UB > NX+1 ) UB = NX+1
! END IF
! Q = 0
! DO WHILE ( UB-LB >= 2 .AND. Q < QMAX )
! Q = Q+1
! MB = CEILING(REAL(UB+LB)/TWO)
! J = FLOOR(LOG(ONE-(R-LAPM(MB,1,1))*XYP2FRV(MB))/LOGGXYV(MB))+1
! IF ( J > NY ) THEN
! J = NY
! ELSE
! IF ( J < 1 ) J = 1
! END IF
! IF ( P >= (R-LAPM(MB,J,1))*SLPM(MB,J)+LAPM(MB,J,2) ) THEN
! UB = MB
! ELSE
! LB = MB
! END IF
! END DO
! IF ( Q >= QMAX ) CALL ADQUIT ('$ERROR, QMAX IN IULFINDER REACHED$')
! IULFINDER = LB
! END FUNCTION
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
Indata till användarsubrutinerna
Ursprunglig indata enligt Laine och Sandvik(2001) emulerad i den modifierade EOSen:
Framtagen indata för Sjöbo Sand för den modifierade EOSen: ME2E-CF095
---Plastic Compaction Curve P(rho)---
10
1.674 0.
1.7395 4577.
1.8738 14980.
1.997 29151.
2.1438 59175.
2.25 98098.
2.38 179440.
2.485 289440.
2.585 450200.
2.6713 650660.
---Bulk Soundspeed Curve cb(lambda) (linearly interpreted)---
101
1.674 275.4048
1.6740133 275.40512
1.6740266 275.40512
1.6740412 275.40512
1.6740571 275.40512
1.6740745 275.40512
1.6740935 275.40512
1.6741143 275.40512
1.674137 275.40512
1.6741618 275.40512
1.674189 275.40512
1.6742187 275.40512

-- 309 of 311 --

Markstötvåg
2020-09-28 revidering 2 309
1.6742512 275.40512
1.6742867 275.40512
1.6743255 275.40512
1.6743679 275.40512
1.6744143 275.40512
1.674465 275.40512
1.6745204 275.40512
1.674581 275.40512
1.6746473 275.40512
1.6747198 275.40512
1.674799 275.40512
1.6748856 275.40512
1.6749803 275.40512
1.6750838 275.40512
1.675197 275.40512
1.6753207 275.40512
1.675456 275.40512
1.6756039 275.40512
1.6757657 275.40512
1.6759425 275.40512
1.6761357 275.40512
1.6763471 275.40512
1.6765781 275.40512
1.6768307 275.40512
1.6771069 275.40512
1.6774088 275.40512
1.6777389 275.40512
1.6780998 275.40512
1.6784944 275.40512
1.6789258 275.40512
1.6793974 276.27006
1.6799131 277.4462
1.6804768 278.73761
1.6810932 280.15626
1.6817671 281.71322
1.6825038 283.42236
1.6833093 285.36523
1.6841899 287.5334
1.6851527 289.91206
1.6862053 292.51706
1.6873561 295.36424
1.6886143 298.46659
1.6899899 301.83171
1.6914938 305.46053
1.693138 309.34478
1.6949357 313.45768
1.696901 317.75224
1.6990498 322.16169
1.701399 326.57466
1.7039674 330.86592
1.7067754 334.87815
1.7098454 338.47047
1.7132019 341.54927
1.7168715 344.16965
1.7208835 346.59253
1.7252698 349.24402
1.7300653 352.34481
1.7353083 356.02109
1.7410405 360.3822
1.7473074 365.52943
1.7541591 371.55261
1.76165 378.51797
1.7698399 386.49372
1.7787938 396.21201
1.7885832 410.5295
1.7992859 425.87074
1.8109872 442.45028
1.8237802 460.51595
1.8377668 480.3146
1.8530584 502.05687
1.8697767 525.87465
1.8880548 551.58448
1.9080382 578.66942
1.9298861 620.3452
1.9537725 666.34971
1.9798874 716.618
2.0084389 772.70859
2.0396542 835.23704
2.0737819 908.8163
2.1110938 1018.7095
2.1518869 1137.3897
2.1964859 1282.1042
2.2452461 1481.2014
2.2985556 1705.8902
2.356839 1916.0582
2.4205602 2128.3388
2.4902266 2474.2841
2.5663928 3355.8616
2.641 4634.
---Exponential Curve facor gamma(lamda)---
102
1.674 5.0655
1.6740012 5.0656211
1.6740133 5.0667506
1.6740266 5.0675035
1.6740412 5.0683258
1.6740571 5.0692225
1.6740745 5.0702027
1.6740935 5.0712742
1.6741143 5.0724458
1.674137 5.0737271
1.6741618 5.0751279
1.674189 5.0766597
1.6742187 5.0783347
1.6742512 5.0801663
1.6742867 5.0821692
1.6743255 5.0843594
1.6743679 5.0867545
1.6744143 5.0893737
1.674465 5.0922381
1.6745204 5.0953706
1.674581 5.0987966
1.6746473 5.1025434
1.6747198 5.1066415
1.674799 5.1111238
1.6748856 5.1160266
1.6749803 5.1213896
1.6750838 5.1272561
1.675197 5.1336739
1.6753207 5.1406952
1.675456 5.1483771

-- 310 of 311 --

Markstötvåg
2020-09-28 revidering 2 310
1.6756039 5.1567824
1.6757657 5.1659799
1.6759425 5.176045
1.6761357 5.1870607
1.6763471 5.1991178
1.6765781 5.2123162
1.6768307 5.2267656
1.6771069 5.2425866
1.6774088 5.2599119
1.6777389 5.2788872
1.6780998 5.2996733
1.6784944 5.3224471
1.6789258 5.3474036
1.6793974 5.818246
1.6799131 5.7793584
1.6804768 5.7375316
1.6810932 5.6924251
1.6817671 5.6442321
1.6825038 5.592658
1.6833093 5.5379462
1.6841899 5.4799589
1.6851527 5.4188986
1.6862053 5.3552558
1.6873561 5.2893357
1.6886143 5.2219097
1.6899899 5.1542061
1.6914938 5.0863316
1.693138 5.0237772
1.6949357 4.9642672
1.696901 4.9144962
1.6990498 4.8775189
1.701399 4.8558618
1.7039674 4.8547182
1.7067754 4.8785395
1.7098454 4.9299913
1.7132019 5.0095253
1.7168715 5.1122454
1.7208835 5.2280863
1.7252698 5.3430613
1.7300653 5.4490528
1.7353083 5.540081
1.7410405 5.61101
1.7473074 5.6576959
1.7541591 5.6774722
1.76165 5.6699602
1.7698399 5.6361469
1.7787938 5.5821993
1.7885832 5.5249972
1.7992859 5.4506494
1.8109872 5.3622598
1.8237802 5.2646761
1.8377668 5.1657292
1.8530584 5.0775152
1.8697767 5.015934
1.8880548 4.9858556
1.9080382 4.9642985
1.9298861 4.9388274
1.9537725 4.7888059
1.9798874 4.5077943
2.0084389 4.1538507
2.0396542 3.7814938
2.0737819 3.4334823
2.1110938 3.2175028
2.1518869 3.0097278
2.1964859 2.7422883
2.2452461 2.4114508
2.2985556 1.9012991
2.356839 1.5920229
2.4205602 1.2872394
2.4902266 0.8015639
2.5663928 0.4095975
2.641 0.

-- 311 of 311 --