---
title: "B01 101   Introduktion 150806"
category: "b01.-samlingsdokument"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b01.-samlingsdokument/b01-101---introduktion_150806.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","armering","beräkning","explosion","splitter","last","impulsbelastad"]
summary: "Beräkning av impulsbelastad konstruktion 1 (12) B01-101 2015-08-06 B01-101 Samlingsdokument Introduktion Ansvarig utgivare: Björn Ekengren 1 Bakgrund 1 1.1 Kunskapsområdet fysiskt skydd 1 1.2 Orientering om impulsbelastade konstruktioner 3 2 Syfte..."
---

Beräkning av impulsbelastad konstruktion
1 (12)
B01-101
2015-08-06
B01-101 Samlingsdokument
Introduktion
Ansvarig utgivare: Björn Ekengren
1 Bakgrund 1
1.1 Kunskapsområdet fysiskt skydd 1
1.2 Orientering om impulsbelastade konstruktioner 3
2 Syfte 5
3 Koncept 5
4 Beteckningar 6
4.1 Romerska versaler 6
4.2 Romerska gemener 7
4.3 Grekiska tecken 9
4.4 Index 10
4.5 Förkortningar och uttryck 11
5 Referenser 12
1 Bakgrund
1.1 Kunskapsområdet fysiskt skydd
Myndigheten för samhällsskydd och beredskap (MSB) ansvarar bland mycket annat för området
fysiskt skydd för befolkningen. Detta ställer höga krav på kunskap om och förståelse för effekterna
av extraordinära belastningar såsom impulslaster från explosioner. En konstruktions beteende blir
fysikaliskt annorlunda vid denna typ av belastning jämfört med normala, statiska belastningar och
detta måste beaktas genom att krav och lösningar i normgivningen baseras på adekvat kunskap.
För MSB är det väsentligt att ha ett stort teoretiskt djup inom kunskapsområdet fysiskt skydd för att
därigenom kunna vara säker på att de konstruktioner som man ansvarar för håller den kvalitet som
lagstiftaren förväntat sig. Inom kunskapsområdet fysiskt skydd har därför utarbetats en dokument-
struktur på olika nivåer enligt Figur 1.1. Nyttan av den uppbyggda kunskapsbanken är dock
betydligt större än att enbart tillgodose MSB:s behov. Det har därför, som ett vidgat tillskott till
samhällsnyttan, ansetts viktigt att även föra ut information till andra intressenter om hur kunskapen
om dynamiska förlopp har sin giltighet i hantering av bebyggelsen.

-- 1 of 12 --

Beräkning av impulsbelastad konstruktion
2 (12)
B01-101
2015-08-06
Skyddsrum
SR 09
Föreläsnings-
serie
Bodil 1
Bodil 2
Luftstötvåg Markstötvåg Splitterverkan
Avhandling I
Avhandling Lic.uppsats I
Lic.uppsats II
Licentiat-
uppsats
Exjobb
I
Exjobb
II
Examens-
arbete
Komponent-
lösningar
Nivå 1: Styrande dokument
Nivå 2: Implementerande dokument
Nivå 3: Kunskapsdokument
Vetenskapliga
artiklar
Typlösningar
Examens-
arbeteExamens-
arbete
Beräkning av
impulsbelastad
konstruktion
Komponent-
specifikationer
Referensbok
till föreläs-
ningsserie
Populär-
vetenskapliga
artiklar
Bebyggelsens
motstånds-
förmåga
Figur 1.1 MSB:s dokumentstruktur inom kunskapsområdet fysiskt skydd.

-- 2 of 12 --

Beräkning av impulsbelastad konstruktion
3 (12)
B01-101
2015-08-06
1.2 Orientering om impulsbelastade konstruktioner
Den grundläggande skillnaden mellan statiskt belastade och impulsbelastade konstruktioner kan
förenklat sammanfattas i tre delar: lastens magnitud och varaktighet, strukturrespons samt material-
respons.
 Magnitud och varaktighet: En impulsbelastning kan innebära mycket höga lastnivåer som
verkar under en försvinnande kort tid. Som jämförelse gäller att en statisk last uppvisar be-
tydligt lägre lastnivåer men att dess varaktighet i regel är så lång att den normalt inte betrak-
tas som en lastparameter i sig, se Figur 1.2.
Tid
Tryck
Statisk last
Impulslast
Figur 1.2 Principiell skillnad i magnitud och varaktighet hos last mot skyddsrum när denna
betraktas som en impulslast respektive ekvivalent statisk last.
 Strukturrespons: Det tar tid för information att färdas genom en belastad struktur. För en
statiskt belastad struktur saknar detta praktisk betydelse eftersom den pålagda lasten har en
sådan lång varaktighet. För en impulsbelastning är det dock inte ovanligt att trögheten med
informationsspridningen i strukturen får en betydande inverkan på dess resulterande
respons. Detta kan ta sig i uttryck som att en del av strukturen inte ens ”vet om” att den är
belastat innan lasten har upphört att verka eller att en, till lasten mer närliggande del, redan
hunnit gå sönder. Detta medför också att det i strukturen uppstår något som kan liknas vid
tidsberoende randvillkor, vilket gör att dess respons kan skilja sig betänkligt jämfört med
vad som fås vid en belastning av en statisk last med motsvarande geometriska utbredning, se
Figur 1.3.
En annan viktig skillnad kopplad till strukturresponsen är att en dynamiskt belastad struktur
kommer att svänga fram och tillbaka. Detta medför att det kan uppstå deformationer, och
därmed påkänningar, med motsatt tecken jämfört med vad impulslastens ursprungliga
riktning skulle ha indikerat om det var en statisk last.

-- 3 of 12 --

Beräkning av impulsbelastad konstruktion
4 (12)
B01-101
2015-08-06
Lastsituation Initialt skede Sent skede
Figur 1.3 Respons hos impulsbelastad ramstruktur vid impulslast från vänster. Initialt på-
verkas enbart det vänstra rambenet medan resten av ramen är i princip opåverkad. I
ett senare tidsskede rör sig hela ramen åt höger samtidigt som det vänstra rambenet
lokalt svänger åt vänster.
 Materialrespons: Höga belastningshastigheter, så som är fallet vid en explosionslast, kan
förändra det belastade materialets mekaniska egenskaper. Detta uttrycker sig exempelvis i
ökad hållfasthet och elasticitetsmodul men minskad seghet. Dessa fenomen samlas under be-
greppet töjningshastighetseffekter och kan ge betydlig påverkan på den slutliga responsen
hos strukturen på både lokal och global nivå. För en statiskt belastad struktur kan besläktade
fenomen uppstå. Dessa fenomen hör dock istället samman med en mycket långvarig belast-
ning och benämns då som långtidseffekter, till exempel krypning i betong eller relaxation i
stål. I Figur 1.4 ges en principiell illustration av hur betongens hållfasthet kan förändras med
ökad töjningshastighet. För olika material och olika egenskaper ser dessa samband olika ut –
allmänt gäller dock att en ökad töjningshastighet ger en ökad hållfasthet samt en ökad
styvhet.
Töjnings-
hastighet
Hållfast-
hetsändring
kvasi-
statiskt
jord-
bävning
explosions-
last
långtid
statisk
hållfasthet
Figur 1.4 Principiell inverkan på hållfastheten hos betong vid olika töjningshastigheter.

-- 4 of 12 --

Beräkning av impulsbelastad konstruktion
5 (12)
B01-101
2015-08-06
2 Syfte
För MSB är det viktigt att den genomförda kunskapsuppbyggnaden inom Fysiskt skydd bevaras
över tiden och får en tillräcklig stabilitet så att den inte riskerar att hamna i ett alltför sårbart person-
beroende. Bedömningen är att kunskapen bäst odlas och vidmakthålls om den får en bred och gräns-
överskridande tillämpning och förståelse.
Ett mål i MSB:s arbete är därför att sprida kunskap och förmåga att hantera den typ av belastning
som kan uppstå i samband med en explosion. De av MSB framtagna kunskapsdokumenten, med
fokus på de dokument som illustreras i Figur 2.1, är en viktig förutsättning för detta. Det bedöms
dock inte vara tillräckligt med dessa dokument för att den verksamme konstruktören i önskad grad
ska ta till sig kunskapen. Som komplement till dessa kunskapsdokument ger MSB därför även ut
serien Beräkning av impulsbelastad konstruktion. Denna serie innehåller fristående dokument med
en mer tillämpad inriktning med fokus på beräkningsexempel där syftet är att på ett tydligt och
pedagogiskt sätt belysa hur innehållet i övriga kunskapsdokument kan användas för olika tillämp-
ningar. Förhoppningen är att dessa dokument tillsammans ska bidra till ökad kompetens om hur
explosionsbelastade konstruktioner kan hanteras.
Figur 2.1 Centrala dokument inom kunskapsområdet fysiskt skydd.
3 Koncept
De dokument som tas fram inom serien Beräkning av impulsbelastad konstruktion kommer att
fungera som levande dokument som läggs upp på MSB:s hemsida varifrån den intresserade enkelt
kan ladda ner dem. Avsikten är att hemsidan regelbundet ska uppdateras med nya dokument allt-
eftersom dessa tas fram.
För en förteckning av utgivna dokument i serien hänvisas till dokument B01-102.

-- 5 of 12 --

Beräkning av impulsbelastad konstruktion
6 (12)
B01-101
2015-08-06
4 Beteckningar
4.1 Romerska versaler
A area
As armeringsmängd dragarmering
B Motts konstant
E elasticitetsmodul
Eb energimängd bomb
Ec elasticitetsmodul betong
Egas energi i exploderande gasvolym
E’gas förbränningsenergi (energiintensitet) i exploderande gas
Es elasticitetsmodul armering, energimängd stötvåg
Ek kinetisk energi
Ek.splitter kinetisk energi splitter
F kraft, last
F1 maxlast
Fb last balk
Fk karakteristisk trycklast
I impuls, tröghetsmoment
I1 impuls vid last F1(t)
Ik karakteristisk impuls
Is impuls stötvåg
L längd
MA splitterfördelningsparameter
Mf fältmoment
Mh höljets massa
Mrd momentkapacitet
Ms stödmoment
Msd dimensionerande moment
P tryck
P + övertryck positiv fas
P - undertryck negativ fas
P0 tryck hos ostörd luft (101,3 kPa vid +15 °C)
Pr, Pr+ reflekterat övertryck positiv fas

-- 6 of 12 --

Beräkning av impulsbelastad konstruktion
7 (12)
B01-101
2015-08-06
Ps, Ps+ oreflekterat övertryck positiv fas
Ps’ kvot för oreflekterat övertryck
Q ekvivalent statisk last
R inre kraft, kapacitet
Rb kapacitet balk
Si stötvågsparameter i punkt i
T temperatur, periodtid
V volym, tvärkraft
Vrd tvärkraftskapacitet
Vsd dimensionerande tvärkraft
W arbete, laddningsvikt
Wekv ekvivalent laddningsvikt
Wi inre arbete
Wmod laddningsvikt beaktat spegling
Wy inre arbete
Z skalat avstånd
4.2 Romerska gemener
b bredd
bu upplagsbredd
c dämpning, avstånd till armeringens tyngdpunkt
c0 ljudhastighet hos ostörd luft (340,2 m/s vid +15 °C)
cb dämpning balk
d diameter, inre hävarm
di höljets ekvivalenta innerdiameter
db höljets ekvivalenta ytterdiameter
f frekvens
fc betongens tryckhållfasthet
fcd dimensionerande tryckhållfasthet hos betong
fyd dimensionerande flytspänning hos armering
h höjd
i impulstäthet
i +, is+ impulstäthet positiv fas
i - impulstäthet negativ fas

-- 7 of 12 --

Beräkning av impulsbelastad konstruktion
8 (12)
B01-101
2015-08-06
ir+ reflekterad impulstäthet positiv fas
itot total impulstäthet
istötvåg impulstäthet stötvåg
isplitter impulstäthet splitter
k styvhet
kb styvhet balk
kλ faktor för rotationskapacitet
l längd, sträcka
l0 längd mellan flytled och momentnollpunkt
m massa
mb massa balk
ms massa splitter
n totalt antal, nummer
ns antal splitter
nms antalet splitter med massan större än splittermassa ms
p utbredd last
q utbredd last, ekvivalent statisk last
r detonationsavstånd, avstånd
r’ energiskalat avstånd
r0 radie hos ekvivalent hemisfärisk gasvolym
s centrumavstånd, styrkefaktor, sträcka
t tid
t’ energiskalad varaktighet
t + varaktighet positiv fas
t - varaktighet negativ fas
t1 varaktighet för lasten F1(t)
ta ankomsttid
th höljets ekvivalenta tjocklek
tp minsta tjocklek för att undvika perforation
tr stigtid
tu minsta tjocklek för att undvika utstötning
t∆+ varaktighet triangellast
u förskjutning
uel elastisk förskjutning

-- 8 of 12 --

Beräkning av impulsbelastad konstruktion
9 (12)
B01-101
2015-08-06
uel,1 elastisk förskjutning vid elastoplastisk respons
upl plastisk förskjutning
upl,1 plastisk förskjutning vid elastoplastisk respons
us förskjutning systempunkt
utot total förskjutning
u hastighet
u acceleration
v0 splittrens utgångshastighet
vr splitterhastighet vid sträckan r
vs splitterhastighet
vsm medelhastighet hos splitterhastighet i luften
vsmp medelhastighet hos splitterhastighet under penetrationsförloppet
x längdkoordinat, tryckzonshöjd, inträngningsdjup
z inre hävarm
4.3 Grekiska tecken
 avklingningsfaktor, kvot mellan armeringens och betongens elasticitetsmodul
β lastfaktor
γF trycklastfaktor
γI impulslastfaktor
γ
 reflexionskvot
∆ inkrementellt
δel fel vid elastisk respons
δpl fel vid plastisk respons
 töjning
εcu brottöjning betong
εsy flyttöjning armering
M förstoringsfaktor för moment
θ rotationsvinkel, rotationskapacitet
θpl plastisk rotation
θrd rotationskapacitet
κc transformationsfaktor för dämpning
κF transformationsfaktor för last
κk transformationsfaktor för styvhet

-- 9 of 12 --

Beräkning av impulsbelastad konstruktion
10 (12)
B01-101
2015-08-06
κm transformationsfaktor för massa
κmF transformationsfaktor för massa och last
 reflexionskoefficient
i reflexionsfaktor för impulstäthet
P reflexionsfaktor för tryck
λ skjuvslankhet
ρ densitet
ρs splittertäthet
 spänning
 stångdiameter, vinkel hos skjuvspricka
φ vinkel
ω vinkelfrekvens
4.4 Index
+ indikerar positiv fas
- indikerar negativ fas
0 initialt läge
1, 2, 3 numrering
I, II, III indikerar stadium I (osprucket), II (sprucket) och III (plastiskt)
A, B, C indikerar last A, B och C
b balk
el elastisk
ep elastoplastisk
gas gas
f indikerar fält
i inre, nummer
k karakteristisk
max maximalt värde
min minimalt värde
pl plastisk
r indikerar reflekterad stötvåg
rd indikerar kapacitet
s indikerar oreflekterad stötvåg, indikerar stöd, systempunkt, splitter
sd indikerar dimensionerande last eller snittkraft

-- 10 of 12 --

Beräkning av impulsbelastad konstruktion
11 (12)
B01-101
2015-08-06
tot total
y yttre
4.5 Förkortningar och uttryck
Arkivbomb Fiktiv bomb för framtagning av splitterdata, se dokument B06-101
SDOF Single Degree of Freedom, enfrihetsgradssystem
TNT Trinitrotoluen, ibland stavat trinitrotoulen, är det kemiska namnet på spräng-
ämnet Trotyl

-- 11 of 12 --

Beräkning av impulsbelastad konstruktion
12 (12)
B01-101
2015-08-06
5 Referenser
Johansson M. (2012): Luftstötvåg. Myndigheten för samhällsskydd och beredskap.
Publ.nr MSB448, Karlstad.
Johansson M. och Laine L. (2012a): Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Del 1: Last av luftstötvåg. Myndigheten för samhällsskydd och beredskap.
Publ.nr MSB449, Karlstad.
Johansson M. och Laine L. (2012b): Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Del 2: Explosion i gatukorsning. Myndigheten för samhällsskydd och beredskap.
Publ.nr MSB450, Karlstad.
Johansson M. och Laine L. (2012c): Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Del 3: Kapacitet hos byggnader. Myndigheten för samhällsskydd och beredskap,
Publ.nr MSB 0142-10, Karlstad.
Laine L. (2012): Markstötvåg. Myndigheten för samhällsskydd och beredskap. Publ.nr MSB344,
Karlstad.
Leppänen J. (2012): Splitterverkan. Myndigheten för samhällsskydd och beredskap.
Publ.nr MSB345, Karlstad.
Samtliga referenser finns att ladda ner gratis på MSB:s hemsida: www.msb.se/skyddsrum.

-- 12 of 12 --