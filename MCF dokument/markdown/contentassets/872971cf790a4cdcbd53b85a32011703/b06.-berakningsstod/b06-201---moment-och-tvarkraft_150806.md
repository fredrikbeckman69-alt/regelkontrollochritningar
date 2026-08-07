---
title: "B06 201   Moment Och Tvarkraft 150806"
category: "b06.-berakningsstod"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b06.-berakningsstod/b06-201---moment-och-tvarkraft_150806.pdf"
fileType: "PDF"
keywords: ["skyddsrum","karm","betong","armering","beräkning","explosion","kontroll","figur"]
summary: "Beräkning av impulsbelastad konstruktion 1 (43) B06-201 2015-08-06 B06-201 Beräkningsstöd Moment och tvärkraft Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren. 1 Orientering 2 1.1 Samlingsdokument 2 1.2 Om detta dokument 2 2 Använd..."
---

Beräkning av impulsbelastad konstruktion
1 (43)
B06-201
2015-08-06
B06-201 Beräkningsstöd
Moment och tvärkraft
Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren.
1 Orientering 2
1.1 Samlingsdokument 2
1.2 Om detta dokument 2
2 Användande av ett enfrihetsgradssystem 3
2.1 Orientering 3
2.2 Problembeskrivning 3
2.2.1 Jämförelse mellan SDOF och FEM 3
2.2.2 Moment 9
2.2.3 Tvärkraft 10
2.3 Kommentar 11
3 Använda referenser 12
4 Moment 13
4.1 Momentkapacitet 13
4.1.1 Eurokod 2 13
4.1.2 UFC 14
4.1.3 Cormie et al. 15
4.1.4 FKR 15
4.2 Effekt av avkortning 15
4.2.1 Orientering 15
4.2.2 UFC 17
4.2.3 Cormie et al. 17
4.2.4 FKR 17
4.3 Rotationskapacitet 17
4.3.1 Orientering 17
4.3.2 Eurokod 2 18
4.3.3 UFC 22
4.3.4 Cormie et al. 24
4.3.5 FKR 25

-- 1 of 43 --

Beräkning av impulsbelastad konstruktion
2 (43)
B06-201
2015-08-06
5 Tvärkraft 27
5.1 Stödreaktion 27
5.1.1 Orientering 27
5.1.2 Biggs 27
5.1.3 FKR 30
5.2 UFC 32
5.3 Cormie et al. 33
5.4 FKR 33
6 Beräkningsanvisningar 35
6.1 Orientering 35
6.2 Moment 35
6.2.1 Momentkapacitet 35
6.2.2 Avkortning 35
6.2.3 Rotationskapacitet 36
6.2.4 Avvikelse mellan SDOF och FEM vid elastisk respons 37
6.3 Tvärkraft 39
6.3.1 Dimensionerande tvärkraft 39
6.3.2 Tvärkraftskapacitet 41
6.3.3 Rak skjuvspricka 42
7 Referenser 43
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 Om detta dokument
I detta dokument samlas bakgrundsinformation rörande det resulterande moment och tvärkraft som
uppstår i impulsbelastade konstruktioner. Utgående från detta utarbetas sedan anvisningar för hur
moment och tvärkraft kan beräknas utgående från ett enfrihetsgradssystem (SDOF).

-- 2 of 43 --

Beräkning av impulsbelastad konstruktion
3 (43)
B06-201
2015-08-06
2 Användande av ett enfrihetsgradssystem
2.1 Orientering
Vid beräkning av en impulsbelastad konstruktion är det vanligt förekommande att använda en
förenklad beräkningsmodell baserad på ett enfrihetsgradssystem, ofta betecknat som ett SDOF-
system (single-degree-of-freedom system), se Johansson och Laine (2012) och dokument B03-101
samt Figur 2.1. I ett sådant system beskrivs responsen hos en godtycklig konstruktion genom
rörelsen i en enskild punkt, den så kallade systempunkten. Utgående från den dynamiska
grundekvationen
    	 	t	F	t	u	R	t	u	m 	 ,	 (2.1)
kan systempunktens rörelse med tiden beräknas, där m, R och F motsvarar systemets massa, inre
mothåll respektive yttre last och u samt ü är förskjutning respektive acceleration i systempunkten.
Den maximala mothållande kraft
 	 		u	R	Rekv max	 (2.2)
som fås från denna kraftjämvikt kan ses som en ekvivalent statisk last som motsvarar den statiska
last som behöver appliceras på systemet för att uträtta samma arbete som den dynamiska lasten F(t).
F(t)
R(u)
m u
Figur 2.1 Definition av ett odämpat enfrihetsgradssystem, SDOF, med massa m, en yttre tids-
beroende last F(t) samt ett inre statiskt motstånd R(u).
2.2 Problembeskrivning
2.2.1 Jämförelse mellan SDOF och FEM
Vid användning av en förenklad beräkningsmodell, så som SDOF, finns alltid en risk att väsentlig
information försvinner. För att illustrera potentiella problemområden med att använda en sådan
visas därför i det här avsnittet en jämförelse av resultat erhållna från beräkning baserad på ett
SDOF-system och beräkning baserad på finit elementanalys (FE-analys).
I Figur 2.2 illustreras en fritt upplagd balk som belastas med en jämnt utbredd dynamisk last p(t).
Balkdata är hämtat från dokument B05-101 och ger, för en elastisk respons i stadium II och
systempunkt placerad i fältmitt x = l / 2, att

-- 3 of 43 --

Beräkning av impulsbelastad konstruktion
4 (43)
B06-201
2015-08-06
s	081	,	0
4	,	12
1
Hz	4	,	12
1021
10	2	,	6
2
1
N/m	10	2	,	6
kg	1021 6
6 			

		



	
 II	II
II
II T	f
k
m
 (2.3)
p(t)
l = 2,7 m
0,20 m
b = 1,0 m
10 s200 K500B	0,04 m
Betong C 20/25 Ec = 30 GPa
fcd = 16,7 MPa
Es = 200 GPa
fyd = 500 MPa
Figur 2.2 En fritt upplagd balk belastad med en jämnt utbredd impulslast, baserad på
dokument B05-101.
t
P
ti
Pi
ii
Last 1
P1 = 200 kPa, t1 = 10 ms 
 i1 = 1000 Pas
Last 2
P2 = 800 kPa, t2 = 2,5 ms 
 i2 = 1000 Pas
Figur 2.3 Triangulärt last-tidssamband som belastar balk enligt Figur 2.2.
Balken belastas med en triangulär lastpuls enligt Figur 2.3 och i Figur 2.4 samt Figur 2.5 jämförs
resulterande förskjutning, moment och stödreaktion när dessa beräknas med en FE-analys respek-
tive ett förenklat SDOF-system. För FE-analysen fås samtliga resultat direkt från analysen. I SDOF-
analysen har dock först beräknats en rörelse u(t), varur en ekvivalent statisk last
  	 	t	u	k	t	R II 	 (2.4)
beräknats. Från denna fås sedan en ekvivalent utbredd last som
   
l
t	u	R
t	q ,
 (2.5)
varvid moment och stödreaktion beräknats på samma sätt som för en statiskt belastad balk, dvs.
   
8
2
l	t	q
t	M mitt

 (2.6)
   
2
l	t	q
t	Rstöd

 (2.7)
Varaktigheten hos Last 1 och Last 2 är sådana att de för den belastade balken i princip motsvarar en
karakteristisk impulslast, varför SDOF ger i princip samma resultat för båda lastfallen – en smärre
skillnad uppstår dock när i tiden som maximal förskjutning uppstår.

-- 4 of 43 --

Beräkning av impulsbelastad konstruktion
5 (43)
B06-201
2015-08-06
-40
-30
-20
-10
0
10
20
30
40
0 50 100 150 200
Förskjutning,
 u [mm]
Tid, t [ms]
SDOF
FEM
-100
-80
-60
-40
-20
0
20
40
60
80
100
0 50 100 150 200
Moment,
 Mmitt [mm]
Tid, t [ms]
SDOF
FEM
-150
-100
-50
0
50
100
150
0 50 100 150 200
Stödreaktion,
 Rstöd [mm]
Tid, t [ms]
SDOF
FEM
Figur 2.4 Förskjutning, fältmoment samt stödreaktion hos balk med elastisk respons, beräknat
med SDOF respektive FEM för Last 1 enligt Figur 2.3.

-- 5 of 43 --

Beräkning av impulsbelastad konstruktion
6 (43)
B06-201
2015-08-06
-40
-30
-20
-10
0
10
20
30
40
0 50 100 150 200
Förskjutning,
 u [mm]
Tid, t [ms]
SDOF
FEM
-150
-100
-50
0
50
100
150
0 50 100 150 200
Moment,
 Mmitt [mm]
Tid, t [ms]
SDOF
FEM
-300
-200
-100
0
100
200
300
0 50 100 150 200
Stödreaktion,
 Rstöd [mm]
Tid, t [ms]
SDOF
FEM
Figur 2.5 Förskjutning, fältmoment samt stödreaktion hos balk med elastisk respons, beräknat
med SDOF respektive FEM för Last 2 enligt Figur 2.3.

-- 6 of 43 --

Beräkning av impulsbelastad konstruktion
7 (43)
B06-201
2015-08-06
Av Figur 2.4 och Figur 2.5 framgår att den resulterande förskjutningen i balkens systempunkt
uppvisar en mycket god överensstämmelse mellan SDOF och FEM. De resulterande moment- och
tvärkrafterna, beräknade utgående från en ekvivalent statisk last enligt ekvation (2.5) till (2.7),
avviker dock från de som fås i en dynamisk FE-analys av samma konstruktion. För både moment
och tvärkraft kan en likhet i responsen skönjas men det är uppenbart att ytterlighetsvärdena kan
skilja sig. Anledningen till detta är att antalet moder som har betydelse beror på vilken parameter
som studeras, se Figur 2.6. För balkens förskjutning har den första egenmoden en dominerande
inverkan medan det för moment även krävs att åtminstone mod 3 beaktas. För tvärkraften ställs än
högre krav på medverkande antal moder för att beskrivningen ska bli korrekt, vilket gör att
stödreaktionen i Figur 2.4 och Figur 2.5 ger ett än ryckigare intryck än vad som är fallet för
momentet. Vidare framgår att ryckigheten hos moment och tvärkraft är större för Last 2 än för
Last 1, dvs. en mer intensiv last (högre tryck men lägre varaktighet) resulterar i ökad inverkan av
högre ordningens moder och därmed även ökade oscillationer.
Mod 1 Mod 3 Mod 5
Figur 2.6 Exempel på relevanta egenmoder för symmetriskt belastad, fritt upplagd balk.
Av Figur 2.4 och Figur 2.5 framgår att moment erhållet från FEM svänger kring den lösning som
representeras av SDOF. För tvärkraft är så dock inte riktigt fallet, här tycks svängningen istället ske
kring en rörelse med lägre amplitud än vad som fås med SDOF. Denna avvikelse har påtalats av
Biggs (1964) och detta fenomen behandlas mer ingående i avsnitt 5.1. Biggs har även uttryckligen
konstaterar att den dynamiska stödreaktionen i den verkliga strukturen inte har någon direkt kopp-
ling i motsvarande enfrihetsgradssystem. Dvs. reaktionskraften R(u) i SDOF-systemet motsvarar
inte den verkliga stödreaktionen som fås i balkens stöd. Anledningen till detta är, enligt Biggs, att
omvandlingen av det verkliga systemet till ett förenklat SDOF-system endast baseras på att korrekt
beskriva rörelsen hos den verkliga strukturens systempunkt. Därmed fås också en avvikelse på de
krafter som uppstår i systemet, något som även påverkar fördelningen av resulterande moment och
tvärkrafter.
Denna avvikelse medför en osäkerhet i användandet av förenklade SDOF-modeller. Trots detta är
användandet av sådana modeller i högsta grad etablerat och ligger till grund för en stor del av de
beräkningsanvisningar som nationellt och internationellt används för dimensionering och analys av
impulsbelastade konstruktioner, se till exempel UFC 3-340-02 (DOD, 2008), FKR 2011 (Fortifika-
tionsverket, 2011) och Cormie et al. (2012). Med anledning av den noterade avvikelsen mellan
SDOF och FEM är det dock av vikt att veta hur moment och tvärkraft bör bestämmas utgående från
en sådan förenklad modell samt vara medveten om de eventuella begränsningar som därmed
uppstår.
I Figur 2.7 och Figur 2.8 jämförs moment- respektive stödreaktionskvot för balk med elastisk
respons som är analyserad med FEM och SDOF. Kvoter har tagits fram för olika tidskvoter T / t1,
där T är systemets egenperiod och t1 är lastens varaktighet hos en triangulär last enligt Figur 2.3.
För FEM har fem olika analyser utförts – en där alla moder tagits med och fyra där 1, 3, 5 eller 7
moder, enligt Figur 2.6, har tagits med. Härigenom fås också en god bild av vilka moder som ger
störst bidrag till resulterande moment och stödreaktion. Bidraget från första moden är i princip
konstant för samtliga tidskvoter (kvot 1,03 för moment och 0,81 för stödreaktion).

-- 7 of 43 --

Beräkning av impulsbelastad konstruktion
8 (43)
B06-201
2015-08-06
1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
0 20 40 60 80 100
Momentkvot
 MFEM
 / M
SDOF
 [-]
Tidskvot, T / t1 [-]
Alla
7 moder
5 moder
3 moder
1 mod
Figur 2.7 Skillnad i moment i balk mellan FEM och SDOF, uttryckt som en kvot MFEM / MSDOF,
som funktion av tidskvot T / t1. För FEM redovisas resultat när varierande antal
moder beaktats i analysen.
0.8
1.0
1.2
1.4
1.6
1.8
2.0
2.2
2.4
2.6
2.8
3.0
0 20 40 60 80 100
Stödreaktionskvot
 Rstöd,FEM
 / R
stöd,SDOF
 [-]
Tidskvot, T / t1 [-]
Alla
7 moder
5 moder
3 moder
1 mod
Figur 2.8 Skillnad i stödreaktion i balk mellan FEM och SDOF, uttryckt som en kvot
Rstöd,FEM / Rstöd,SDOF, som funktion av tidskvot T / t1. För FEM redovisas resultat när
varierande antal moder beaktats i analysen.
kvot = 1,03
kvot = 0,81

-- 8 of 43 --

Beräkning av impulsbelastad konstruktion
9 (43)
B06-201
2015-08-06
2.2.2 Moment
I Figur 2.4 framgår hur momentet i balkens fältmitt Mmitt = M(x = l / 2) varierar med tiden och av
detta syns tydligt den skillnad som kan fås från en SDOF-analys jämfört med en FE-analys. I
Figur 2.9 visas en momentenvelop
  	 	 		t	x	M	x	M env ,	max	 (2.8)
för samtliga snitt längs balkens längd för en tid t ≤ 0,5 s. Denna envelop jämförs med moment-
fördelningen Mekv(x) för en balk belastad med ekvivalent statisk last
  	 	2
2 x	x	l
q
x	M ekv
ekv 		 (2.9)
där
l
R
q ekv
ekv  (2.10)
är ekvivalent statisk utbredd last beräknad från
 	  	max	max u	k	t	R	R II	ekv 		 (2.11)
där umax är den maximala mittutböjningen.
0
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
0.0 0.2 0.4 0.6 0.8 1.0
Moment,
 M [kNm]
Relativ koordinat, x / l [-]
SDOF
Last 1
Last 2
Figur 2.9 Momentenvelop för balk i Figur 2.2 vid elastisk respons (stadium II), belastad med
last enligt Figur 2.3.

-- 9 of 43 --

Beräkning av impulsbelastad konstruktion
10 (43)
B06-201
2015-08-06
Av Figur 2.9 framgår att den resulterande momentenvelopen vid impulsbelastning skiljer sig
jämfört med vad som fås vid en statisk last. För Last 1 är avvikelsen i maximalt moment
förhållandevis begränsad och samma grundläggande form som vid en statisk last kan fortfarande
urskiljas. För en mer intensiv impulslast, Last 2, syns dock betydande avvikelser både vad gäller
form och maximalt värde.
Av detta framgår att det inte bara är i fältmitt som det råder en avvikelse i resultat utan även i andra
snitt längs balken. Denna observation väcker framförallt två frågor:
 I vilken mån är det möjligt att förlita sig på att resultat från SDOF är på säker sida?
 Innebär avvikelsen från momentenvelop kontra momentfördelning enligt ekvivalent statisk
last att särskilda begränsningar om eventuell armeringsavkortning bör införas?
Dessa frågor behandlas mer ingående i kapitel 4.
2.2.3 Tvärkraft
På samma sätt som för moment i avsnitt 2.2.2 kan en envelop längs balkens längd tas fram för tvär-
kraften som
   	 	
 	 		




 2	/	för	,	min
2	/	för	,	max
l	x	t	x	V
l	x	t	x	V
x	Venv (2.12)
En sådan jämförs i Figur 2.10 med tvärkraftsfördelningen
  	




 	 x
l
q	x	V ekv	ekv 2 (2.13)
för en balk belastad med ekvivalent statisk last.
På ett sätt som liknar det för momentenvelopen i Figur 2.9 uppstår det även för tvärkraften skill-
nader i envelopen beroende på om det är en statisk last eller en impulslast. För Fall 1 fås en klart
märkbar, men ändå tämligen begränsad, avvikelse längs med hela balkens längd, dock med en
förhållandevis intakt form på tvärkraftsenvelopen. För Fall 2 är så dock inte fallet. Här kan dels
noteras en högst märkbar ökning av maximal tvärkraft och dels att formen på den resulterande
tvärkraftskurvan ser väldigt annorlunda ut i förhållande till den som fås för en statisk belastning.
Av detta framgår att avvikelsen i tvärkraft kan vara betydande i balkens olika delar. Framförallt
framgår det att formen på tvärkraftsenvelopen skiljer sig märkbart mot vad som fås vid en statisk
belastning. Denna observation väcker följande frågor:
 I vilken mån kan den maximala tvärkraften som beräknas i SDOF anses vara representativ
för den belastade balken?
 Vilken form på tvärkraftkurvan bör utgås från vid kapacitetskontroll av en impulsbelastad
konstruktion?
Dessa frågor behandlas mer ingående i kapitel 5.

-- 10 of 43 --

Beräkning av impulsbelastad konstruktion
11 (43)
B06-201
2015-08-06
0
50
100
150
200
250
0.0 0.2 0.4 0.6 0.8 1.0
Tvärkraft,
 V [kN]
Relativ koordinat, x / l [-]
Last 2
Last 1
SDOF
Figur 2.10 Tvärkraftsenvelop för balk i Figur 2.2 belastad med last enligt Figur 2.3.
2.3 Kommentar
Utgående från vad som tas upp i avsnitt 2.2 framgår det att det inte är självklart hur resulterande
moment och tvärkraft, utgående från ett förenklat SDOF-system, ska beräknas för en impulsbelastad
konstruktion. Av detta kan det möjligen argumenteras att användandet av SDOF bör begränsas och
istället bytas ut mot mer avancerade beräkningar i form av FE-analyser. I vissa avseenden kan en
sådan hållning säkerligen vara sund men för många situationer är det fortfarande en stor tidsvinst att
kunna göra övergripande dynamiska beräkningar med hjälp av en sådan förenklad modell.
Av historiska skäl är det också önskvärt att närmare reda ut vilken betydelse en sådan avvikelse har
för den belastade strukturens bärförmåga gentemot impulsbelastning eftersom en betydande
majoritet av de befintliga skyddskonstruktioner som finns världen över har sin grund i beräkningar
utförda med SDOF-modeller. Därmed ökar också intresset av att bättre känna till de eventuella
brister som användandet av SDOF-modeller har medfört. Med anledning av detta görs i kapitel 4 en
genomgång av hur beräkning av moment respektive tvärkraft behandlas i litteraturen när dessa
baseras på SDOF-modeller.

-- 11 of 43 --

Beräkning av impulsbelastad konstruktion
12 (43)
B06-201
2015-08-06
3 Använda referenser
Den häri utförda litteraturjämförelsen är tämligen begränsad i den meningen att enbart ett fåtal
referenser har använts. Dock bedöms detta vara tillräckligt eftersom de aktuella referenserna anses
vara väl representativa för hur resultat från förenklade SDOF-modeller används vid dimensionering
av impulsbelastade konstruktioner. Nedan beskrivs och kommenteras kort använda referenser för att
därigenom ge en bättre bakgrund till valet av dessa.
 Biggs (1964): Detta är en auktoritet på området impulsbelastade konstruktioner och en
referens som ofta anges i litteratur som behandlar impulsbelastade konstruktioner. Samtliga
referenser, om impulsbelastade konstruktioner, som listas nedan har på ett eller annat sätt
utgått från vad som anges i Biggs.
 UFC 3-340-02, DOD (2008): Denna referens är utgiven av USA:s försvarsdepartement och
innehåller en mycket stor mängd information om både lastframtagning och strukturrespons
för konstruktioner av olika typer av material och situationer. Referensen anses här
representera det amerikanska synsättet för hur en impulsbelastad konstruktion bör hanteras
och benämns fortsättningsvis som UFC.
 Cormie et al. (2012): Referensen är en handbok sammansatt av fristående kapitel författade
av ett drygt 10-tal olika personer med erkänd kompetens inom sina respektive områden.
Antalet behandlade områden är fler än vad som tas upp i UFC men med en betydligt mer
begränsad omfattning. Referensen anses här representera det brittiska synsättet för hur en
impulsbelastad konstruktion bör hanteras och benämns fortsättningsvis som Cormie et al.
 FKR 2011, Fortifikationsverket (2011): Detta dokument utgör Fortifikationsverkets kon-
struktionsregler och är en sammanställning av anvisningar hämtade från ett stort antal
svenska referenser som behandlar last, material och skydd. Anvisningar rörande moment
och tvärkraft är framförallt hämtade från Bk 25, Fortifikationsförvaltningen (1973a, b) och
vid behov behandlas i detta dokument även Bk 25 för att tydliggöra bakgrunden till FKR.
Den metodik som beskrivs i FKR kan sägas representera den traditionella svenska synen på
hur impulsbelastning och därav utsatta konstruktioner har behandlats i modern tid. Refe-
rensen anges nedan som FKR.
 Eurokod 2, SIS (2008): Denna referens anger hur betongkonstruktioner ska dimensioneras
och gäller i stora delar av Europa. I och med detta finns det av naturliga skäl en önskan att
använd beräkningsmetodik för impulsbelastade konstruktioner så långt som möjligt kopplas
till vad som anges i Eurokod 2 och de dokument som tagits fram av MSB inom ämnes-
området utgår därför också från denna referens. Nedan benämns referensen som Eurokod 2.

-- 12 of 43 --

Beräkning av impulsbelastad konstruktion
13 (43)
B06-201
2015-08-06
4 Moment
4.1 Momentkapacitet
4.1.1 Eurokod 2
Enligt Eurokod 2 kan momentkapaciteten för ett armerat, rektangulärt betongtvärsnitt enligt
Figur 4.1 bestämmas som
 		x	d	A	f	z	F	M s	y	s	rd 4	,	0						 (4.1)
där fy är flytgräns i armeringen, As är armeringsarea i armering på den dragna sidan, d är effekt höjd
och x är tryckzonshöjden enligt Figur 4.1. Tryckzonshöjden kan bestämmas som
b	f
A	f
x
c
s	y
	

 8	,	0 (4.2)
där fc är betongens tryckhållfasthet och b är tvärsnittets bredd. Någon inverkan av armering på den
tryckta sidan medräknas inte här. Om det finns erforderlig mängd byglar som omsluter den tryckta
armeringen kan dess effekt på tryckzonshöjd x och momentkapacitet Mrd dock också beaktas.
b
As
x
d h
c
εcu
εs d-x
x
fc
Fs
0,4x	0,8x Fc
d = h - c z = d - 0,4x
z	Mrd
As’	d’
Figur 4.1 Tvärsnittsanalys av momentutsatt betongtvärsnitt.
I Eurokod 2 anges ingen övre gräns på tillåten böjarmeringsmängd (avser svenskt anpassnings-
dokument). Dock finns det en övre gräns för att utnyttja plastisk omlagringsförmåga och för betong
med fck ≤ 50 MPa gäller för områden med flytleder att
45	,	0	
d
x (4.3)
Det kan visas att 

	 				
c
y
s f
f
d
x 8	,	0	8	,	0 (4.4)
för ett enkelarmerat tvärsnitt utsatt för ren böjning, se Johansson och Laine (2012). Kombineras
ekvation (4.3) och (4.4) kan ett maximalt värde på tillåten armeringsmängd tecknas som

-- 13 of 43 --

Beräkning av impulsbelastad konstruktion
14 (43)
B06-201
2015-08-06
y
c
f
f
	 56	,	0	
 (4.5)
För en betong med fc = 25 MPa och armering fy = 500 MPa fås då att ρmax ≈ 2,8 %. Om gynnsam
inverkan av tryckarmering beaktas (erfordrar omslutande byglar) kan denna böjarmeringsmängd
dock tillåtas öka ytterligare.
4.1.2 UFC
I UFC beräknas momentkapaciteten på två olika sätt beroende på hur stor plastisk deformations-
förmåga som utnyttjas i den belastade konstruktionen. För måttliga plastiska deformationer (θ ≤ 2°,
se avsnitt 4.3.3) beräknas momentkapaciteten som
 		x	d	A	f	M s	y	rd 5	,	0				 (4.6)
där tryckzonshöjden beräknas som
b	f
A	f
x
c
s	y
	

 85	,	0 (4.7)
För stora plastiska deformationer (θ > 2°, se avsnitt 4.3.3) antas dock att betongens täckande
betongskikt faller bort, varvid den inre hävarmen z också påverkas. Denna respons förutsätter att
As’ = As, samt en erforderlig mängd omslutande byglar som förhindrar att den tryckta armeringen
knäcker ut, och för ett sådant fall beräknas momentkapaciteten istället som
 	'	d	d	A	f	M s	y	rd 			 (4.8)
För att undvika spröda brott på grund av krossad betong innan dess att armeringen flyter anges att
armeringsinnehållet ρ ska begränsas som
bal	

	 	 75	,	0 (4.9)
där aktuellt armeringsinnehåll definieras som
d	b
As

	
 (4.10)
för måttliga plastiska deformationer (θ ≤ 2°) och
 	'	d	d	b
As
	
	
 (4.11)
för stora plastiska deformationer (θ > 2°). Gränsvärdet ρbal svarar mot det armeringsinnehåll som
ger ett så kallat balanserat tvärsnitt, dvs. att betongkrossning och flytning av dragen armering
inträffar samtidigt. För ett betongtvärsnitt med fc < 28 MPa kan detta balanserade armerings-
innehåll, enligt UFC, beräknas som

-- 14 of 43 --

Beräkning av impulsbelastad konstruktion
15 (43)
B06-201
2015-08-06
y
c
y
bal f
f
f 









	 600
600
72	,	0	
 (4.12)
För en betong med fc = 25 MPa och armering fy = 500 MPa fås då att ρbal ≈ 2,0 %, vilket innebär att
maximalt tillåten armeringsmängd för ett sådant tvärsnitt uppgår till omkring 1,5 %.
4.1.3 Cormie et al.
Anvisningar i Cormie et al. baseras på UFC men är även anpassade till Eurokod 2. Aktuell
momentkapacitet bestäms därför även här på två sätt i enlighet med UFC, se avsnitt 4.1.2, men med
beräkningsmetodik enligt Eurokod 2. För måttliga plastiska deformationer (θ ≤ 2°) beräknas därför
momentkapaciteten i enlighet med ekvation (4.6) medan den för stora plastiska deformationer
(θ > 2°) beräknas enligt ekvation (4.8).
Några särskilda anvisningar om maximalt tillåten armeringsmängd anges inte varför det här tolkas
som att de krav som finns i Eurokod 2 om detta är de som gäller, se avsnitt 4.1.1.
4.1.4 FKR
I FKR bestäms momentkapaciteten som
d	A	f	M s	y	rd 			 95	,	0 (4.13)
vilket är en approximation till uttrycket i ekvation (4.1) som stämmer bra för små armerings-
mängder.
I FKR begränsas tillåten armeringsmängd till ρmax ≈ 0,5 %,
4.2 Effekt av avkortning
4.2.1 Orientering
I statiska sammanhang är det inte ovanligt att avkortning av armering används för att därigenom
minimera den totala armeringsmängden i konstruktionen. Av Figur 2.9 i avsnitt 2.2.2 framgår dock
att det vid en impulsbelastning riskerar att uppstå ett ökat armeringsbehov över hela konstruk-
tionens längd jämfört med vad som fås vid en statisk last. Det är därför av intresse att kunna avgöra
vilken eventuell inverkan som avkortning har i sådana fall.
För en konstruktion med plastisk respons återfås per definition ett verkande moment som är lika
stort som momentkapaciteten i det mest utsatta snittet. Här kan dock tillåtas att det uppstår en lokal
plastisk led med möjlighet till plastisk omlagring. För en konstruktion med plastisk respons minskar
därmed också den potentiella konsekvensen betydligt vid ett eventuellt lokalt överskridande av den
teoretiska momentkurvan så som illustreras i Figur 2.9. Ett exempel av vad som kan inträffa för ett

-- 15 of 43 --

Beräkning av impulsbelastad konstruktion
16 (43)
B06-201
2015-08-06
sådant fall, när avkortning utnyttjas, illustreras i Figur 4.2. Här har responsen hos en 3 m lång balk,
med avkortning 0,5 m från stöd, utsatt för fyra olika impulslaster (i = 1000 Pas, t = [8, 4, 2, 0,5] ms
för lastfall 0 till 3) studerats. I samtliga fall erhölls en plastisk respons i både fältmitt samt i avkort-
ningssnitt, varvid den resulterande momentenvelopen också anpassat sig till detta, se Figur 4.2a. I
Figur 4.2b illustreras påfrestningen hos den plastiska leden, uttryckt som plastisk töjning i aktuellt
balksnitt, varvid det kan konstateras att behovet av plastisk deformationsförmåga i avkortningssnitt
för studerade fall är betydligt lägre än vad som fås i fältmitt. Detta visar att ett lokalt överskridande
av momentkapaciteten inte nödvändigtvis behöver få några allvarliga konsekvenser för en konstruk-
tion som uppvisar en plastisk respons.
(a)
0
10
20
30
40
50
60
0.0 0.5 1.0 1.5 2.0 2.5 3.0
Moment,
 M [kNm]
Coordinate, x [m]
PL-Eq-ST
Capacity
LC3
LC2
LC1
LC0
(b)
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.0 0.5 1.0 1.5 2.0 2.5 3.0
Plastic strain,
 εpl [-]
Coordinate, x [m]
LC3
LC2
LC1
LC0
LC2
LC1
LC0
LC3
LC3
LC2
LC1
LC0
Figur 4.2 Principiell effekt av avkortning i armerad betongbalk när avkortning görs på ett
avstånd 0,5 m från stöd för olika impulslaster: (a) resulterande momentenvelop
jämfört med statisk momentkurva samt momentkapacitet; (b) resulterande plastiska
töjningar längs balken. Från Carlsson och Kristensson (2012).

-- 16 of 43 --

Beräkning av impulsbelastad konstruktion
17 (43)
B06-201
2015-08-06
4.2.2 UFC
Med avsikt att möjliggöra linverkan i en konstruktion förespråkas i UFC att avkortning av armering
ska undvikas i en konstruktion utsatt för explosionslast. Någon anledning att undvika avkortning
med hänvisning till momentkurvans form över konstruktionens längd ges inte.
4.2.3 Cormie et al.
Liksom i UFC förespråkas det i Cormie et al. att avkortning av armering ska undvikas i en kon-
struktion utsatt för explosionslast. Det anges dock att om randvillkoren är sådana att gynnsam effekt
av linverkan inte kan uppstå så kan avkortning godtas. Någon anledning att undvika avkortning med
hänvisning till avvikelse i momentkurvans form över konstruktionens längd ges inte.
4.2.4 FKR
I FKR anges att all fältarmering oavkortat dras förbi stöd med fullgod förankring. Dvs. avkortning
tillåts inte men orsak till detta specificeras inte. Huruvida stödarmering som sträcker sig in mot
konstruktionens fält får avkortas anges inte. I Bk 25, Fortifikationsförvaltningen (1973a, b), vilken
ligger till grund för anvisningarna i FKR, framgår dock att avkortning av stödarmering tillåts och att
denna baseras på en momentfördelning som motsvarar den för en ekvivalent statisk last. Dvs. någon
hänsyn till annorlunda form hos momentkurvan på grund av dynamisk belastning beaktas ej.
4.3 Rotationskapacitet
4.3.1 Orientering
Vid en impulsbelastning blir den plastiska deformationsförmågan hos utsatt struktur högst
väsentligt för dess förmåga att motstå uppkomna påkänningar. För en betongkonstruktion bestäms
den plastiska deformationsförmågan utgående från aktuell rotationskapacitet. Detta begrepp
behandlas ingående i Johansson och Laine (2012) där det också konstateras att olika beräknings-
anvisningar kan resultera i stora skillnader på tillåtna gränsvärden för tillåten plastisk deformation,
se Figur 4.3.
Av Figur 4.3 framgår att tillåten deformationsförmåga enligt Eurokod 2 (EC2) blir lägre än vad den
blir för Bk 25. De bakomliggande modellerna för tillåten rotationskapacitet är olika och graden av
konservatism varierar dem emellan. En annan viktig orsak till skillnad i deformationskapacitet är att
det i Bk 25 utgås från en betydligt segare armering än den som ligger till grund för samband enligt
Eurokod.

-- 17 of 43 --

Beräkning av impulsbelastad konstruktion
18 (43)
B06-201
2015-08-06
10
30
50
70
90
110
130
150
0.00 0.10 0.20 0.30 0.40
l/u
x/d
BH Klass C
EC2 Klass C
BK 25 es=2%
BK 25 es=8%
l = 6,0 m
b = 1000 mm
Armering Klass C
As ø16s200
d varieras
Figur 4.3 Jämförelse av tillåten deformationsförmåga hos en armerad betongförmåga enligt
olika referenser. Deformationsförmågan uttrycks som l / u (spännvidd / förskjutning)
där kvoten x / d varieras med effektiva höjden d. Från Johansson och Laine (2012).
4.3.2 Eurokod 2
I Eurokod 2, SIS (2008), utgås från ett samband för rotationskapacitet enligt Figur 4.4 där olika
samband ges för armering med olika seghetsegenskaper, se Tabell 4.1. Bakgrunden till samband i
Figur 4.4 är oklar men i Eurokod 2 anges att flytledens totala utbredningslängd är
h	a	aled 		 2	,	1	2 (4.14)
där a är flytled på ena sidan och h är tvärsnittshöjd, se Figur 4.5. Utgående från denna information
kan dock utföras en baklängesräkning för att söka få klarhet vad som döljer sig bakom Figur 4.4.
Här utgås från den beräkningsmodell som används i Bk 25, Fortifikationsförvaltningen (1973a, b),
och som närmare beskrivs i Johansson och Laine (2012), se Figur 4.6. I denna modell påverkar
flytledens utbredning a rotationskapaciteten θf proportionellt, dvs.
r
a
f 	
 (4.15)
Det är viktigt att notera att rotationen θf i Figur 4.6 inte är samma rotation som betecknas med θs i
Figur 4.5. Sambandet mellan dessa båda rotationer kan istället skrivas som
2
s
f

  (4.16)

-- 18 of 43 --

Beräkning av impulsbelastad konstruktion
19 (43)
B06-201
2015-08-06
x / d
pl [10 -3 rad]
betong-
krossning	avsliten
armering
Klass C
Klass B
Figur 4.4 Diagram för bestämning av tillåten plastisk rotationskapacitet θpl för olika typer av
betong och armering. Gräns för brottorsak är markerad. Baserad på Eurokod 2,
SIS (2008).
Tabell 4.1 Definition av armeringsklasser enligt Eurokod 2, SIS (2008).
Klass fyk
[MPa]
γ = fsu / fsy
[-]
εs,fsu
[%]
B 400 - 600 ≥ 1,08 ≥ 5,0
C 400 - 600 ≥ 1,15
< 1,35 ≥ 7,5
Figur 4.5 Flytledens utbredning samt definition av total plastisk rotation θs vid stöd enligt
Eurokod 2, SIS (2008).
a a
l
θf r
uf
b
As
d h
c
d = h - c
2
l
u f
f



θf
Figur 4.6 Modell för rotationskapacitet hos flytled i fritt upplagd balk. Baserad på Forti-
fikationsförvaltningen (1973b).

-- 19 of 43 --

Beräkning av impulsbelastad konstruktion
20 (43)
B06-201
2015-08-06
Maximalt tillåten krökningsradie baseras på tillåten armeringstöjning samt betongstukningen för
tvärsnittet. Krökningen kan beräknas som
x	d	x	r
s	cu

	

		1 (4.17)
där εcu är betongens brottöjning, εs är stålets medeltöjning över sträckan a, och x samt d är tvär-
snittets tryckzonshöjd respektive effektiva höjd enligt Figur 4.7. Som brottkriterium fås antingen att
betongen krossas eller att armeringen slits av när de når töjningen εcu respektive εs.
b
As
x
d h
c
εcu
εs d-x
x
fcc
Fs
0,4x	0,8x Fc
d = h - c z = d - 0,4x
z	Mrd
Figur 4.7 Tvärsnittsanalys av momentutsatt betongtvärsnitt.
Utgående från ekvation (4.17) kan visas att skärningspunkten mellan avsliten armering och krossad
betong kan beräknas som
s	cu
cu
d
x

	


 (4.18)
Från ekvation (4.15) och (4.17) kan två samband mellan längd a och rotation θf tecknas. För den del
i Figur 4.4 som innebär avsliten armering fås
d
d	x
a
s
f	s 

	
 /	1  d
d
x
a f	s	s 	




 			 1	

	 (4.19)
och för den del som innebär krossad betong fås
d
d	x
a
cu
f	c 		
 /  d
d
x
a f	cu	c 				

	 (4.20)
Av detta framgår att produkterna as·εs samt ac·εcu är proportionella mot den effektiva höjden d. Via
Figur 4.4 finns ett samband mellan rotation θpl och kvot x / d vilket nu kan användas för att jämföra
med samband mellan flytledens längd a och den effektiva höjden d enligt ekvation (4.19) och
(4.20). De värden som utgör grunden för Figur 4.4 finns inte tabellerade i Eurokod 2 men i
Tabell 4.2 sammanställs den tolkning av grafernas brytpunkter för betong ≤ C50/60 som används
här. I denna tabell beräknas även den kvot a·ε / d som fås med dessa värden insatta i ekvation (4.19)
och (4.20).

-- 20 of 43 --

Beräkning av impulsbelastad konstruktion
21 (43)
B06-201
2015-08-06
Tabell 4.2 Avlästa förhållande mellan x / d samt rotation θf = θpl enligt Figur 4.4 för armering
av klass B och C samt betong ≤ C50/60. Kvoten a∙ε / d har beräknats enligt ekva-
tion (4.19) och (4.20).
Klass B Klass C
x / d θpl as·εs / d ac·εcu / d x / d θpl as·εs / d ac·εcu / d
[-] [mrad] [10-3] [10-3] [-] [mrad] [10-3] [10-3]
0,000 7,5 7,50 - 0,000 17,0 17,0 -
0,165 14,0 11,7 2,31 0,080 33,5 30,8 2,68
0,450 5,5 - 2,48 0,450 7,5 - 3,38
I tabellen har utgåtts från att angiven rotation θpl i Figur 4.4 motsvarar θf i Figur 4.6, dvs. θf = θpl. Detta är
i strid med hur θpl definieras i Eurokod, se Figur 4.5, men överensstämmer med hur den används i av
MSB utgivna dokument, se exempelvis Johansson och Laine (2012).
De beräknade kvoterna i Tabell 4.2 säger i sig inte så mycket. Genom att sätta in ett värde på
armeringstöjningen εs samt betongtöjningen εcu fås dock en klarare bild av sambandet mellan flyt-
ledens utbredning a och den effektiva höjden d. För betongen är det rimligt att ansätta εcu = 3,5 ‰,
dvs. betongens brottöjning enligt Eurokod 2 för betong ≤ C50/60. Vilken medeltöjning som ska
användas för armeringen är dock inte självklart men det är rimligt att ett högre värde tillåts för den
segare armeringen av klass C än för klass B. Här används ett, vad som bedöms vara ett konservativt
värde på εs,B = 20 ‰ och εs,C = 30 ‰. Med dessa värden insatta fås värden på kvoten a / d enligt
Tabell 4.3.
Tabell 4.3 Kvoten a / d beräknat utgående från Tabell 4.2 när εs,B = 20 ‰, εs,C = 30 ‰ och
εcu = 3,5 ‰.
Klass B Klass C
x / d as / d ac / d x / d as / d ac / d
[-] [-] [-] [-] [-] [-]
0,000 0,38 - 0,000 0,57 -
0,165 0,58 0,66 0,080 1,03 0,77
0,450 - 0,71 0,450 - 0,96
Med antagande om att förhållandet mellan höjden h och den effektiva höjden d kan approximeras
som
d	h 	 1	,	1 (4.21)
så fås samband a / h enligt Tabell 4.4. Av detta framgår att kvoten a / h, med ovanstående anta-
ganden, blir omkring 0,35-0,65 för armering av klass B samt omkring 0,50-0,95 för armering av
klass C. Ett lägre värde på armeringstöjningen εs ger ett högre värde på kvoten a / h.

-- 21 of 43 --

Beräkning av impulsbelastad konstruktion
22 (43)
B06-201
2015-08-06
Tabell 4.4 Kvoten a / h beräknat utgående från Tabell 4.4 med utnyttjande av samband enligt
ekvation (4.21).
Klass B Klass C
x / d as / h ac / h x / d as / h ac / h
[-] [-] [-] [-] [-] [-]
0,000 0,34 - 0,000 0,52 -
0,165 0,53 0,60 0,080 0,93 0,70
0,450 - 0,64 0,450 - 0,88
Det är av intresse att notera att kvoten a / h varierar för de studerade fallen. Allmänt gäller dock att
flytledens längd blir större vid armering av klass C än av klass B. Detta är rimligt eftersom den
segare armeringen av klass C har en ökat möjlighet att åstadkomma en större geometrisk utsprid-
ning av flytleden.
Det är även intressant att notera att ac,B ≈ 0,6·h och ac,C ≈ 0,8·h för armering av klass B respektive
klass C. Detta är i samma storleksordning som anges i Eurokod 2, se Figur 4.5. Det överraskande
med denna observation är dock att den i Eurokod använda definition av rotationsvinkel θs skiljer sig
med en faktor två gentemot den som har använts för θf i här utförd jämförelse, se ekvation (4.16).
Om istället den definition som ges för rotation i Eurokod 2 skulle användas, se Figur 4.5, fås hälften
så stora värden på flytledens utbredning, dvs. att ac,B,EK2 ≈ 0,3·h och ac,C,EK2 ≈ 0,4·h. Dessa utbred-
ningar visar dock en sämre överensstämmelse med den utbredning av halva flytleden på a = 0,6·h
som anges i Eurokod 2, se Figur 4.5.
Med utgångspunkt från den modell som presenteras i Figur 4.6 kan konstateras att den flytleds-
utbredning på a = 0,6·h som anges i Eurokod 2 inte stöds av angivna värden för tillåten plastisk
rotation i Figur 4.4. Den definiton av rotationen θ som görs i Eurokod, se Figur 4.5, kan därför
ifrågasättas och i här utförda deformationsberäkningar utgås därför istället från en definition av θ
enligt Figur 4.6. Denna definition av θ används också genomgående i beräkningsdokument utgivna
av MSB.
4.3.3 UFC
I UFC ges endast mycket övergripande anvisningar för vilken deformationsförmåga som en impuls-
belastad betongkonstruktion kan förväntas uppvisa. Det anges visserligen att den maximala defor-
mationen är en funktion av konstruktionens spännvidd, höjd samt typ, mängd och konfiguration av
armering men några djupare riktlinjer än så ges inte. Givna anvisningar baseras istället på ett
schematiskt last-deformationssamband för en armerad betongbalk, se Figur 4.8. Här illustreras
principiellt uppförande hos en betongbalk där responsen beror på närvaron av samt typen av byglar.
Sammanfattningsvis förs ett resonemang som innebär att betongen krossas vid en rotation θ = 2°.
Saknas det byglar och tryckarmering i utsatt tvärsnitt innebär detta att brott erhålls. Är balken dock
försedd med dessa bedöms tryckarmeringen överta betongens tryckupptagande funktion varvid brott
fördröjs. Kapaciteten sjunker visserligen något på grund av minskad inre hävarm, se avsnitt 4.1.2,
men tillåten rotationskapacitet ökar till θ = 6°. Om en för ändamålet särskild utvecklad typ av
bygelarmering används, se Figur 4.9, får tillåten rotationskapacitet öka ytterligare till θ = 12°.

-- 22 of 43 --

Beräkning av impulsbelastad konstruktion
23 (43)
B06-201
2015-08-06
Figur 4.8 Schematiskt last-deformationssamband för armerad betongbalk. Från UFC,
DOD (2008).
Figur 4.9 Särskilt utformad bygelarmering (lacing reinforcement) för att öka deformations-
förmågan hos en armerad betongkonstruktion. Från UFC, DOD (2008).
Den principiella korrektheten hos last-deformationssambandet i Figur 4.8 kan ifrågasättas eftersom
utseendet hos ett sådant samband ofrånkomligen kommer att variera med konfiguration av armering
och betong. De ovan givna rekommendationerna på tillåtna rotationer är således mycket grova och
bör snarast betraktas som schablonvärden på tillåtna rotationer. Sammanfattningsvis fås av detta
rotationskapaciteter och förhållande spännvidd/deformation, l / u, enligt Tabell 4.5. Jämfört med
tillåtna deformationer enligt Eurokod är dessa rotationskapaciteter givmilda, jämför med Figur 4.4.
Tabell 4.5 Tillåten rotationskapacitet θ och förhållande spännvidd/deformation l / u enligt
UFC, DOD (2008).
Typ av
bygelarmering
θ
[°]
θ
[10-3 rad]
l / u
[-]
Ingen 2 35 57
Normal 6 1) 105 19
Enligt Figur 4.9 12 1) 210 10
1) Reducerad inre hävarm, tryckzon i tryckarmering.

-- 23 of 43 --

Beräkning av impulsbelastad konstruktion
24 (43)
B06-201
2015-08-06
Materialegenskaperna hos den armering som utgås från i UFC listas i Tabell 4.6 och av detta fram-
går att de besitter goda seghetsegenskaper. Framförallt armering ASTM A 615 uppvisar en seghets-
kvot
 som är högre än den segaste armeringstypen, Klass C, i Eurokod 2, se Tabell 4.1.
Tabell 4.6 Definition av armeringstyper i UFC, DOD (2008).
Armeringstyp fsy
[MPa]
fsu
[MPa]
γ = fsu / fsy
[-]
ASTM A 615 Grade 60 455 620 1,36
ASTM A 706 Grade 60 455 550 1,21 1)
1) Enligt UFC har armering av typ 706 större brottöjning än armering av
typ 615, vilket anses kompensera tillräckligt för den lägre seghetskvoten.
4.3.4 Cormie et al.
I Cormie et al. ges anvisningar om tillåten deformationskapacitet som i mångt och mycket liknar de
som ges i UFC, se avsnitt 4.3.3. Även här utgås från ett schematiskt last-deformationssamband
enligt Figur 4.8, dock med något andra gränsvärden för tillåten stödrotation, se Tabell 4.7. En annan
skillnad gentemot UFC är introduktionen av begreppet skyddskategori, något som påverkar tillåten
rotationskapacitet. Följande rekommendationer ges för indelning av skyddskategorier:
 Skyddskategori 1: Skydd av personal och utrustning vid last från en stötvåg samt primära
eller sekundära fragment från en fallande struktur.
 Skyddskategori 2: Skydd av strukturelement i sig för att motverka kollaps vid last från en
stötvåg, t.ex. för att förhindra fortskridande ras.
Tabell 4.7 Tillåten rotationskapacitet θ och förhållande spännvidd/deformation l / u enligt
Cormie et al. (2009).
Typ av
bygelarmering
Skyddskategori θ
[°]
θ
[10-3 rad]
l / u
[-]
Ingen 1 1 17 115
Normal 1 2 35 57
Normal 2 4 1) 70 29
Normal 2 8 1), 2) 141 14
1) Reducerad inre hävarm, tryckzon i tryckarmering.
2) Förutsatt att den belastade konstruktionsdelen har sådana randvillkor att den kan
utveckla lin- eller membranverkan.
Av Tabell 4.7 kan konstateras att en platta utan bygelarmering automatiskt hamnar i skydds-
kategori 1 samt att tillåten rotationskapacitet blir så låg att den normalt understiger den som fås
enligt Eurokod 2 vid användning av armering av klass C, jämför Figur 4.4.

-- 24 of 43 --

Beräkning av impulsbelastad konstruktion
25 (43)
B06-201
2015-08-06
4.3.5 FKR
De anvisningar som ges i FKR, för beräkning av en konstruktions plastiska deformationsförmåga
baseras på uttryck angivna i Bk 25, Fortifikationsförvaltningen (1973a, b). Bakgrunden till dessa
uttryck behandlas i sin tur utförligt i Johansson och Laine (2012). I denna härleds uttryck för fall där
rotationskapaciteten begränsas av avsliten armering respektive på grund av krossning av tryckt
betong. I FKR ges enbart samband som härrör till avsliten armering men nedan återges även uttryck
för krossad betong.
För att bestämma brottyp utgås från en armerad tvärsektion enligt Figur 4.7, avsnitt 4.3.2, där den
mekaniska armeringskvoten kan beräknas som
cc
st	s
s f
f
bd
A 		
 (4.22)
Ett kritiskt värde på den mekaniska armeringskvoten, ωs,krit, kan definieras som
s	cu
cu
krit	,s
,

	

 

 8	0 (4.23)
där en kvot lägre än detta resulterar i avslitning av armeringen och en kvot med högre värden än
detta medför krossning av betongen. Detta värde motsvarar ett balanserat tvärsnitt på samma sätt
som balanserad armeringsmängd i ekvation (4.12) i avsnitt 4.1.2.
Med antagande om att betongkrossning är avgörande, dvs. ωs > ωs,krit, kan rotationskapaciteten θf i
fält beräknas som





 		 d
l
s
cu
f 3	,	0	1
4	,	0 


 (4.24)
och med antagande om att avslitning av armering är avgörande, dvs. ωs < ωs,krit, fås att rotations-
kapaciteten θf i fält kan beräknas som





 	

 d
l
s
s
f 3	,	0	1
8	,	0
4	,	0


 (4.25)
För rotationskapacitet θs i stöd fås vid brott i betongen att rotationskapaciteten blir







 

			 d
l	,
f	s
s
s
cu
s

	



 20
1
1
4	0 (4.26)
och vid brott i armeringen fås att







 

		

 d
l
,
,
f	s
s
s
s
s

	



 20
1
1
8	0
4	0 (4.27)
där ρf och ρs är armeringsmängd i fält respektive stöd, beräknad som

-- 25 of 43 --

Beräkning av impulsbelastad konstruktion
26 (43)
B06-201
2015-08-06
bd
As
	
 (4.28)
Den armeringstöjning εs som används här avser medeltöjningen över flytledens längd a och sätts i
FKR till 80 ‰. Detta värde avser dock egentligen användandet av en äldre, och betydligt segare,
armeringstyp (Ks 40) och bedöms därför vara alldeles för högt för den armering som normalt
används i Sverige idag (K500). I avsnitt 4.3.2 görs en bedömning att εs = 20-30 ‰ är ett mer rimligt
värde att använda, något som också resulterar i att avslitning av armeringen sker ungefär samtidigt
som i Eurokod 2, se Figur 4.3 i avsnitt 4.2.1.

-- 26 of 43 --

Beräkning av impulsbelastad konstruktion
27 (43)
B06-201
2015-08-06
5 Tvärkraft
5.1 Stödreaktion
5.1.1 Orientering
Vid statisk belastning finns det ett direkt samband mellan tvärkraft och reaktionskraft. Av denna
anledning är det därför naturligt att utgå från stödreaktionen för att skapa sig en uppfattning av
maximal tvärkraft i konstruktionen. I avsnitt 5.1.2 och 5.1.3 presenteras två likartade sätt hur
stödreaktionen kan bestämmas. Som framgår av avsnitt 5.2 och 5.3 används denna information dock
inte nödvändigtvis för att bestämma resulterande tvärkraft.
5.1.2 Biggs
Biggs (1964) ställer upp ett dynamiskt jämviktssamband med avseende på moment för att beräkna
stödreaktionen Rstöd(t) vid en dynamisk respons hos balken, se Figur 5.1. Utgående från detta kan
det påvisas att stödreaktionen kan uttryckas som
  	  	 	t	F	t	R	t	Rstöd 				

	 (5.1)
där α och β är faktorer som beror på utböjningsformen och R(t) samt F(t) är mothållande kraft
respektive pålagd last i ett SDOF-system. För en fritt upplagd balk utsatt för en jämnt utbredd last
kan, utgående från Figur 5.1, en momentjämvikt för en given tidpunkt t ställas upp kring snitt xtp
som
     	 	  0
2 				 t	M	e	x
t	F
x	t	R mitt	tp	tp	stöd (5.2)
Rstöd,el(t)
l	x el	tp 	 192
61
,
V = 0
Mf (t)
l / 2
e = l / 4
F(t)
m,elm·ü Rstöd,pl(t)
l	x pl	tp 	 3
2
,
V = 0
l / 2
e = l / 4
F(t)
mm·ü
Mf (t)
(a) (b)
m,elm·ü
Figur 5.1 Dynamiskt jämviktssamband för bestämning av stödreaktionskraft vid (a) elastisk
respons, och (b) plastisk respons. Baserad på Biggs (1964).
Utgående från en ekvivalent statisk belastning kan sambandet mellan moment Mmitt i fältmitt och
mothållande kraft R(t) beskrivas som

-- 27 of 43 --

Beräkning av impulsbelastad konstruktion
28 (43)
B06-201
2015-08-06
 	 8	8
2 l	R
l	q	R
l	g
M mitt

			

 (5.3)
Insatt i ekvation (5.2) ger detta följande samband
  	  	 	t	F
x
e
t	R
x
l
t	R
tp	tp
stöd 







 			 1
2
1
8 (5.4)
vilket kan skrivas om på formen enligt ekvation (5.1) där
tp	x
l
8
	
 (5.5)







 	
tp	x
e
1
2
1
 (5.6)
I Figur 5.1 visas jämviktssamband för en fritt upplagd balk med jämnt utbredd last vid elastisk samt
plastisk respons. Med dessa värden insatta i ekvation (5.5) och (5.6) fås för elastisk respons
393	,	0
61	8
192 

	el	
 (5.7)
107	,	0
61	4
192
1
2
1 	






		el	
 (5.8)
samt för plastisk respons
375	,	0
8
3 		pl	
 (5.9)
125	,	0
4
3
1
2
1 	




 		pl	
 (5.10)
På motsvarande sätt kan värden på α och β beräknas för varierande randvillkor och lastplaceringar.
Används värden på α och β enligt ekvation (5.9) respektive (5.10) i kombination med ekvation (5.1)
kan stödreaktionen Rstöd beräknas för Last 1 och Last 2. Resulterande stödreaktioner jämförs i
Figur 5.2 respektive Figur 5.3. Som jämförelse visas i dessa figurer även stödreaktionen så som den
tidigare presenterats i Figur 2.4. Av detta framgår att den stödreaktion Rstöd(t) som förutspås via
Biggs stämmer bättre med FEM än det uttryck för SDOF som baseras på en ekvivalent statisk last
enligt ekvation (2.7). Av Figur 5.3 framgår dock även att Biggs uttryck överskattar den initiala
stödreaktionen som beror på termen β∙F(t) när den impulslasten är tillräckligt intensiv, dvs. ett högt
tryck kombinerat med en kort varaktighet.

-- 28 of 43 --

Beräkning av impulsbelastad konstruktion
29 (43)
B06-201
2015-08-06
-150
-100
-50
0
50
100
150
0 50 100 150 200
Stödreaktion,
 Rstöd
 [mm]
Tid, t [ms]
SDOF
FEM
Biggs
Figur 5.2 Stödreaktion hos balk i Figur 2.2 (elastisk respons), beräknat med SDOF, FEM samt
enligt Biggs för Last 1 enligt Figur 2.3.
-250
-200
-150
-100
-50
0
50
100
150
200
250
0 50 100 150 200
Stödreaktion,
 Rstöd
 [mm]
Tid, t [ms]
SDOF
FEM
Biggs
Figur 5.3 Stödreaktion hos balk i Figur 2.2 (elastisk respons), beräknat med SDOF, FEM samt
enligt Biggs för Last 2 enligt Figur 2.3.

-- 29 of 43 --

Beräkning av impulsbelastad konstruktion
30 (43)
B06-201
2015-08-06
5.1.3 FKR
I FKR anges tvärkraften som en direkt funktion av den dynamiska stödreaktionen, se avsnitt 5.4.
Det uttryck för stödreaktion som anges i FKR baseras dock på anvisningar enligt Svedbjörk (2010)
och skiljer sig något från de som beskrivs av Biggs i avsnitt 5.1. Här utgås istället från en vertikal
kraftjämvikt för balken i Figur 5.1. Denna kan allmänt skrivas som
  	  	  	    	0	,	'	,	,
0	0
			 	
x	x
stöd dx	t	x	u	x	m	t	x	V	dx	t	x	p	t	R  (5.11)
och för en jämnt utredd last som verkar på en balk med konstant massa m’ per längdenhet fås i snitt
x = l / 2 att
0
2 	




 l
V s	u
l
u 	





2   	'	' m	x	m    p	x	p  (5.12)
vilket insatt i ekvation (5.11) ger att
      	0	,
2
'
2
2/
0




 
l
stöd dx	t	x	u
l	m	l	t	p
t	R  (5.13)
Det kan dock visas, se exempelvis Johansson och Laine (2013), att transformationsfaktorn
  	  	 			 				
2/
0
2/
0
2/
0
1	1 l
s	F
l
s
l
s
F dx	x	u	u	dx	x	u
u
dx	x	u
u 		


	 (5.14)
vilket tillsammans med
    l	t	p	t	F 	 (5.15)
och
l	m	m 	 ' (5.16)
gör att ekvation (5.13) kan skrivas som
  	  	s	F	stöd u	m	t	F	t	R 				
	2 (5.17)
Detta uttryck kombineras sedan med den för den dynamiska grundekvationen i ekvation (2.1), dvs.
     	t	F	t	R	t	u	m s 		 (5.18)
Transformeras balken till ett enfrihetsgradssystem, se dokument B103-101, fås av detta
  	  	 	t	F	t	R	t	u	m F	F	s	m 					

	
	  (5.19)
Tillsammans med ekvation (5.17) ger detta att

-- 30 of 43 --

Beräkning av impulsbelastad konstruktion
31 (43)
B06-201
2015-08-06
  	 	 	 	  	 	t	F	t	R	t	R	t	F F	F	stöd
F
m 					

	

 2 (5.20)
ur vilket ett uttryck för stödreaktionen kan lösas ut som
  	  	 






 






 			 t	F	t	R	t	R
m
F
m
F
stöd



 2	2
1
2
1 (5.21)
Liksom för uttryck enligt Biggs, se avsnitt 5.1, är detta på formen
  	  	 	t	F	t	R	t	R FKR	FKR	stöd 				

	 (5.22)
men med andra faktorer:
m
F
FKR


 
 2
2
(5.23)







 	
m
F
FKR



2
1
2
1 (5.24)
För en fritt upplagd balk utsatt för en jämnt utbredd last gäller enligt dokument B03-101 vid elastisk
respons att
640	,	0	, 	el	F	
 504	,	0	, 	el	m	
 (5.25)
och för plastisk respons att
500	,	0	, 	pl	F	
 333	,	0	, 	pl	m	
 (5.26)
Insatt i ekvation (5.23) och (5.24) ger detta för elastisk respons att
406	,	0	, 	el	FKR	
 094	,	0	, 	el	FKR	
 (5.27)
och för plastisk respons att
375	,	0	, 	pl	FKR	
 125	,	0	, 	pl	FKR	
 (5.28)
En jämförelse med α- och β-värden enligt Biggs, se avsnitt 5.1.2, visar att det råder en liten skillnad
mellan dessa för elastisk respons men att de är exakt desamma vid plastisk respons. Värdet
αFKR,el = 0,406 återfinns också i Figur 2.8 för respons i FEM med enbart 1 mod om det beaktas att
81	,	0
500	,	0
406	,	0	,
,
, 		
ekvlast
el	FKR
SDOF	stöd
FEM	stöd
R
R

 (5.29)
Detta pekar också på att uttryck enligt FKR, ekvation (5.21), är mer korrekt än det som fås enligt
Biggs.

-- 31 of 43 --

Beräkning av impulsbelastad konstruktion
32 (43)
B06-201
2015-08-06
5.2 UFC
I UFC hänvisas till Biggs (1964) för bestämning av aktuell stödreaktion i en struktur. Denna kraft
används dock inte på något sätt för att kontrollera tvärkraften utan används istället enbart för att
beskriva den last som går vidare in i den stödjande konstruktionen. I UFC beräknas dimensio-
nerande tvärkraft istället utgående från en ekvivalent statisk last. Aktuell tvärkraft bestäms därefter
med beaktande av en sned skjuvspricka med vinkel 45° medan konstruktionens tvärkraftskapacitet
bestäms som summan av betongens kapacitet samt kapacitet från eventuella armeringsbyglar. Vid
användning av byglar anges att centrumavståndet begränsas till


 
 mm	610
5	,	0
min	max
d
s (5.30)
I UFC beaktas även en så kallad rak skjuvspricka (direct shear), vilket innebär en skjuvspricka
vinkelrätt konstruktionens utsträckning som uppstår nära stöd så som schematiskt visas i Figur 5.4,
se även Andersson och Karlsson (2012). Dimensionering av ett sådant tvärkraftsbrott görs mot den
stödreaktion som fås för en ekvivalent statisk last. Konstruktionens tvärkraftskapacitet bestäms som
summan av betongens kapacitet och kapacitet från sneda armeringsbyglar. Betongens tvärkrafts-
kapacitet mot rak skjuvspricka beräknas som
c	ds	c	Rd f	d	b	V 			 16	,	0	,	, (5.31)
där b är bredd, d är effektiv höjd och fc är betongens tryckhållfasthet. Betongens kapacitet mot raka
skjuvsprickor gäller enbart om utnyttjad rotationskapacitet θ ≤ 2° eller om konstruktionen är fritt
upplagd. För θ > 2°, eller om tvärsnittet är draget, blir betongens bidrag till tvärkraftskapaciteten
dock noll, varvid all tvärkraft istället behöver tas av sneda byglar.
rak skjuv-
spricka
Figur 5.4 Schematisk illustration av rak skjuvspricka (direct shear) nära stöd.

-- 32 of 43 --

Beräkning av impulsbelastad konstruktion
33 (43)
B06-201
2015-08-06
5.3 Cormie et al.
I Cormie et al. ges anvisningar som är mycket lika de som ges i UFC, se avsnitt 5.2, dock med en
anpassning till vad som anges i Eurokod 2. Dimensionerande tvärkraft beräknas utgående från en
ekvivalent statisk last där kritiskt snitt väljs med beaktande av en sned skjuvspricka med vinkel 45°.
Konstruktionens tvärkraftskapacitet bestäms som betongens kapacitet eller kapacitet från eventuella
armeringsbyglar i enlighet med Eurokod 2. Vid beräkning av byglarnas tvärkraftskapacitet kan en
flackare vinkel än 45° användas, dvs. ett val som inte är konsekvent med placering av kritiskt snitt.
Vid användning av byglar anges i Cormie et al. även att centrumavståndet begränsas till
d	s 	 5	,	0	max (5.32)
vilket kan jämföras med smax ≤ 0,75·d som är det normala värdet vid statisk belastaning.
Dimensionering med hänsyn till en rak skjuvspricka (direct shear) görs mot den stödreaktion som
fås för en ekvivalent statisk last där konstruktionens tvärkraftskapacitet bestäms av betongens
kapacitet eller kapacitet från sneda armeringsbyglar. Betongens tvärkraftskapacitet mot rak skjuvs-
pricka beräknas som
c
ck
ds	c	Rd f	d	b
f
V 			




 		 250
1	25	,	0	,	, (5.33)
där b är bredd, d är effektiv höjd och fc är betongens tryckhållfasthet. Betongens kapacitet mot raka
skjuvsprickor gäller enbart om utnyttjad rotationskapacitet θ ≤ 2° eller om konstruktionen är fritt
upplagd. Om θ > 2° sätts betongens bidrag till tvärkraftskapaciteten till noll, varvid all tvärkraft
istället behöver tas av sneda byglar. Någon anvisning om hur ett draget tvärsnitt ska behandlas, så
som finns i UFC, ges inte. Dock framgår att en minimiarmering, i form av sneda byglar, enligt
Eurokod 2 ska läggas in även om betongens tvärkraftskapacitet är tillräcklig. I ett beräknings-
exempel som redovisas framgår att denna minimiarmering även läggs in i plattor, trots att det i
Eurokod 2 inte finns krav på detta i den typen av konstruktioner.
5.4 FKR
Anvisningarna om tvärkraft i FKR skiljer sig på flera sätt mot de som ges i UFC eller Cormie et al.
i avsnitt 5.2 respektive avsnitt 5.3. I FKR kontrolleras tvärkraften för två skeden – det initiala
elastiska utböjningsskedet samt det efterföljande plastiska utböjningsskedet.
Dimensionerande tvärkraft antas verka på ett skjuvavstånd aτ från stöd och beräknas som
stöd	v	Ed R	k	V 		 5	,	0 (5.34)
där Rstöd är stödreaktion enligt avsnitt 5.1.3 och kv är en faktor som anger stödreaktionens fördelning
motsvarande den som fås vid en statisk last med samma lastuppställning (kv = 0,5 för en fritt upp-
lagd balk). För ett fritt upplagt stöd beräknas skjuvavståndet som

-- 33 of 43 --

Beräkning av impulsbelastad konstruktion
34 (43)
B06-201
2015-08-06
l
P
q
a 






 		
1
25	,	0	025	,	0	
 l	a 	 25	,	0	
 (5.35)
för ett fast inspänt stöd som
l
P
q
a 






 		
1
35	,	0	010	,	0	
 l	a 	 25	,	0	
 (5.36)
där q är ekvivalent statisk last, P1 är maximal trycklast enligt Figur 2.3 och l är konstruktionens
längd.
Konstruktionens tvärkraftskapacitet bestäms som betongens kapacitet VRd,c (beror bland annat på
skjuvavståndet aτ) med ett förhållandevis komplext tillskott (baserat på stödreaktion Rstöd, förhållan-
det mellan VRd,c / VEd samt skjuvavstånd aτ) från eventuella armeringsbyglar. Vid användning av
byglar ska dessa fördelas jämnt över en längd lτ från stöd som är proportionellt mot skjuvavståndet
aτ. Byglarnas bidrag samt erforderlig längd över vilka de ska fördelas skiljer sig vid elastisk och
plastisk respons – tätare armering på kort sträcka vid elastisk respons och glesare armering på
längre sträcka vid plastisk respons. Även om det inte explicit uttrycks så i FKR så motsvarar i
princip längden lτ den sträcka som en tänkt skjuvspricka sträcker sig över, dvs. skjuvsprickans
vinkel varierar och beräknas från fall till fall. Över denna längd begränsas byglarnas maximala
centrumavstånd till
d	s 	 5	,	0	max (5.37)
vid en elastisk respons och till
d	s 	 75	,	0	max (5.38)
vid en plastisk respons.
Någon särskild dimensionering med hänsyn till en rak skjuvspricka (direct shear) görs inte i FKR.
Dock finns ett krav mot att maximal tvärkraft vid stöd inte får överstiga
c	Rd f	d	b	V 			 25	,	0	max	, (5.39)
där b är bredd, d är effektiv höjd och fc är betongens tryckhållfasthet. Detta uttryck motsvarar
kontroll mot så kallad livtryckbrott, dvs. att krossning av sned trycksträva inte inträffar, och har
samma form som det som används i UFC och Cormie et al. för betongens kapacitet gentemot rak
skjuvspricka, se ekvation (5.31) och (5.33).

-- 34 of 43 --

Beräkning av impulsbelastad konstruktion
35 (43)
B06-201
2015-08-06
6 Beräkningsanvisningar
6.1 Orientering
I detta kapitel ges ett sammanställande resonemang baserat på ovan presenterad information och
som ett resultat av detta ges slutligen en rekommendation i inringad text om hur aktuell företeelse
bör hanteras.
6.2 Moment
6.2.1 Momentkapacitet
Metoderna för att bestämma momentkapaciteten är likvärdiga i samtliga de beräkningsanvisningar
som berörs i detta dokument. UFC och Cormie et al. skiljer sig visserligen något, i den meningen
att de även beaktar fall där delar av betongens tryckzon fallit bort vid stora plastiska deformationer
hos konstruktionen, men beräkningskoncepten är fortfarande desamma.
Anvisningar för maximalt tillåtna böjarmeringsmängder skiljer sig dock en del mellan undersökta
referenser. Lägst armeringsmängd tillåts i FKR som begränsar den till 0,5 %, UFC tillåter omkring
1,5 % för ett normalt fall medan Eurokod 2, för samma fall, medger en armeringsmängd på cirka
2,8 %. Som framgår av avsnitt 4.3.2 så medför den högre armeringsmängden i Eurokod 2 dock även
en minskad rotationskapacitet, något som inte beaktas i UFC eller Cormie et al.
Baserat på detta konstateras att tillåten momentkapacitet kan beräknas i enlighet med Eurokod 2
samt att de anvisningar om maximal armeringsmängd som ges däri förblir lämpliga att använda
även för impulsbelastade konstruktioner.
6.2.2 Avkortning
Allmänt gäller att avkortning bör undvikas i impulsbelastade konstruktioner. Både i Cormie et al.
och FKR ges dock öppningar för att i givna situationer bruka avkortning. Den bakomliggande
orsaken till att avkortning bör undvikas är inte helt klar men av häri utförd genomgång framgår att
möjliggörandet att använda linverkan är ett syfte med att inte tillåta avkortning. En annan möjlig
orsak är osäkerheten i vilken inverkan en avvikande momentfördelning, från en impulslast, får om
avkortningen har gjorts gentemot en momentfördelning baserad på en ekvivalent statisk last. I
avsnitt 4.2.1 redogörs för en begränsad undersökning av detta, av vilken det framgår att en av-
vikelse i momentfördelning mellan dynamisk och statisk last inte nödvändigtvis behöver få några
påtagliga konsekvenser.
Baserat på detta bedöms det vara godtagbart att tillåta avkortning av böjarmering i normala civila
konstruktioner samt att en sådan kan göras utgående från momentfördelning baserat på ekvivalenta
statiska laster. För konstruktioner vars primära syfte dock är att motstå last från en impulslast, t.ex.
ett skyddsrum eller en militär försvarsanläggning, så anses det dock fortfarande vara befogat att helt
undvika avkortning.

-- 35 of 43 --

Beräkning av impulsbelastad konstruktion
36 (43)
B06-201
2015-08-06
6.2.3 Rotationskapacitet
Redovisade metoder för bestämning av tillåten rotationskapacitet skiljer sig betänkligt mellan häri
behandlade referenser, där gränsvärden enligt Eurokod 2 är de mest konservativa. I UFC och
Cormie et al. ges möjlighet för till synes givmilda gränsvärden för tillåten rotationskapacitet. För de
högsta gränsvärdena krävs dock även speciella bygelutformningar som inte är rimliga att använda i
civila konstruktioner. Oavhängigt detta uppfattas dock den metod som används i dessa båda referen-
ser som påtagligt förenklad och med otillfredsställande koppling till responsen i en flytled hos en
armerad betongkonstruktion. Denna koppling är märkbart tydligare i de metoder som presenteras i
FKR och Eurokod 2 – särskilt den bakomliggande modellen i FKR är ingenjörsmässigt attraktiv
eftersom det är möjligt att till betydande delar härleda hur den tagits fram. I jämförelse med
gränsvärden i Eurokod 2 är dock tillåten rotationskapacitet enligt FKR förhållandevis liberal.
En möjlig orsak till skillnad i tillåtna rotationskapaciteter mellan Eurokod 2 och övriga referenser är
att den förra baseras på statisk last, företrädesvis bestående av en eller två punktlaster, medan de
senare stämts av mot försök på konstruktioner utsatta för impulslast. En annan orsak kan vara hur
tillåten rotationskapacitet har definierats, se Figur 6.1. För en statiskt belastad konstruktion kan det
vara relevant att i sin definition av rotationskapacitet enbart beakta den del θpl,max som innefattas
upp till ett maximalt moment Mmax. För en impulsbelastad konstruktion är det dock inte tillåten
rotationskapacitet upp till maximalt moment som är av vikt utan snarare tillåten storlek på den
totala rotationen. För ett sådant fall blir det därför mer relevant att beakta den del θpl,95 som även
innefattar vad som händer efter det att maximalt moment uppnåtts.
Mmax
0,95∙Mmax
θel θ95
θpl,95
θ
M
θpl,max θ
2θ
Figur 6.1 Schematisk illustration av olika definition av plastisk rotationskapacitet θpl.
En ytterligare rimlig orsak till avvikelse mellan olika metoder är olika mekaniska egenskaper hos
ingående armering. Den armering som förutsätts i UFC och FKR har märkbart bättre seghets-
egenskaper än den armering som används i Sverige idag. En effekt av detta har möjligen redan
beaktats approximativt i Cormie et al. (vilken utgår från samma typ av armering som förutsätts i
Eurokod 2) eftersom de gränsvärden som anges där är lägre än vad som ges i UFC som är dess
underliggande referens. Hur en sådan eventuell utvärdering har gjorts är dock oklar och beaktas här
enbart som ytterligare en signal på att den nuvarande amerikanska armeringen har bättre seghets-
egenskaper än den europeiska.
Den rotationskapacitet som fås via Eurokod 2 är den mest konservativa av de undersökta referen-
serna. Detta trots att dessa jämförelser har utförts med en tolkning som ger en dubbelt så hög rota-

-- 36 of 43 --

Beräkning av impulsbelastad konstruktion
37 (43)
B06-201
2015-08-06
tionskapacitet än vad som faktiskt anges i Eurokod 2, se avsnitt 4.3.2. I detta avsnitt argumenteras
dock även för att den gjorda tolkningen är rimlig. Denna tolkning, vilken genomgående används i
samtliga de dokument som behandlar impulsbelastade konstruktioner som utgivits av MSB, bedöms
också vara korrekt och används därför även fortsättningsvis av MSB. Trots detta är det högst rimligt
att de rotationskapaciteter som anges i Eurokod 2 fortfarande är förhållandevis konservativa, se
jämförelse i Figur 6.2, och att en högre grad av liberalism, än vad Eurokod 2 medger, är möjligt.
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
200
220
0 20 40 60 80 100 120 140 160 180 200 220
l/u
 från försök
l/u från beräkningsmodell
(a)
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
200
220
0 20 40 60 80 100 120 140 160 180 200 220
l/u
 från försök
l/u från beräkningsmodell
(b)
Figur 6.2 Jämförelse mellan beräknad rotationskapacitet u / l och försök för balkar provade på
(a) Chalmers, och (b) KTH. Baserad på Johansson och Laine (2012).
Baserat på detta konstateras att tillåten rotationskapacitet baseras på Eurokod 2, dock med den
ändringen att definition av rotationsvinkel görs i enlighet med Figur 4.6. Detta ger en dubbel så stor
rotationskapacitet än den som fås om definition enligt Eurokod 2 används och är den definition som
används i de av MSB utgivna dokument som behandlar impulsbelastade konstruktioner.
6.2.4 Avvikelse mellan SDOF och FEM vid elastisk respons
Av momentkvot i Figur 2.7 samt momentenvelop i Figur 2.9, avsnitt 2.2.1 respektive avsnitt 2.2.2,
framgår att momentet som erhålls från FEM kan skilja sig drastiskt mot vad som predikteras i en
SDOF-modell. För en elastisk respons fås en skillnad i både maximalt värde som i den resulterande
momentenvelopens form. För en plastisk respons (visas ej här) begränsar sig dock skillnaden endast
till momentenvelopens form eftersom det maximala momentvärdet där, per definition, blir det-
samma som momentkapaciteteten.
För en konstruktion som inte tillåter plastisk omlagring, t.ex. en förspänd betongbalk, en träbalk
eller en stålbalk i tvärsnittsklass 2 eller högre, innebär denna avvikelse således en uppenbar risk att
ett överskridande av tillåten momentkapacitet kan fås. Det kan argumenteras att om överskridandet
är förhållandevis litet, säg 10-20 %, så kan detta ändå vara acceptabelt eftersom den varaktighet
som överskridandet sker på är så kort samt att materialhållfastheten ökar vid snabb belastning. Om
överskridandet dock är stort, säg över 50 %, så blir det dock svårare att generellt motivera ett sådant
resonemang.
BK25 8%
BK25 es från försök
BK25 2%
Eurokod 2
Betonghandboken

-- 37 of 43 --

Beräkning av impulsbelastad konstruktion
38 (43)
B06-201
2015-08-06
Med anledning av detta är det önskvärt att åtminstone ha en uppfattning av när en given konstruk-
tion riskerar få ett överskridande av momentkapaciteten som är oacceptabelt stort. Därmed blir det
också möjligt att vid behov beakta en sådan avvikelse i SDOF-modellen genom att modifiera
framtagen ekvivalent statisk last med en lämplig lastfaktor. Avvikelsen i momentkurvans form är
förmodligen av sekundär betydelse för en konstruktion med elastisk respons eftersom ändringen av
det verkande momentet normalt är större än ändringen i momentkapacitet. Detta blir särskilt sant
om en lastfaktor enligt ovan används för att approximativt beakta stora avvikelser på moment i
FEM och SDOF.
Av Figur 2.7 framgår hur mycket det maximala momentet, erhållet med FEM, ökar jämfört med
moment erhållet från en SDOF-modell. Så som påvisas i avsnitt 2.2.1 beror denna avvikelse dock
framförallt på oscillationer från högre ordningens moder, vilket innebär att det handlar om överskri-
danden som är korta i tiden samt följs av ungefär lika korta underskridanden av samma storleks-
ordning. Baserat på detta kan det därför argumenteras för att erhållna överskridanden inte är så
allvarliga som de först kan tyckas vara. Dock kan det fortfarande synas rimligt att inte helt bortse
från denna avvikelse och därför införa någon form av förstoringsfaktor
M på det från SDOF
resulterande momentet för de fall där avvikelsen bedöms vara för stor. Det dimensionerande
momentet Msd för en konstruktion med elastisk respons skulle i ett sådant fall beräknas som
SDOF	M	sd M	M 	
 (6.1)
där MSDOF är moment beräknat från SDOF enligt ekvation (2.6).
Här bedöms det vara acceptabelt med ett momentöverskridande på 20 % utan att någon särskild
åtgärd införs. Detta motsvarar att lastsituationer som motsvarar tidskvoten T / t1 ≤ 10 inte resulterar
i någon lastökning. För högre värden på tidskvoten fås dock en förstoringsfaktor
M > 1,0. I
Tabell 6.1 och Figur 6.3 ges ett förslag på hur en sådan lastfaktor
M, med avseende på moment,
skulle kunna se ut. Här har bakomliggande värden (reducerad kvot) beräknats som
SDOF
FEM
M M
M
	 2	,	1
1
 (6.2)
där momentkvot MFEM / MSDOF fås från fall med alla moder i Figur 2.7.
Tabell 6.1 Förstoringsfaktor
M som föreslås för uppräkning av dimensionerande moment hos
konstruktion, med elastisk respons, utsatt för en jämnt utbredd last, se ekvation (6.1).
För en konstruktion med plastisk respons är
M = 1,0.
T / t1
[-]
M
[-]
0 – 10 1,0
(10) – 20 1,1
(20) – 40 1,2
(40) – 80 1,3
> 80 1,35

-- 38 of 43 --

Beräkning av impulsbelastad konstruktion
39 (43)
B06-201
2015-08-06
1.00
1.05
1.10
1.15
1.20
1.25
1.30
1.35
1.40
0 20 40 60 80 100
Lastfaktor för moment,
hM [-]
Tidskvot, T / t1 [-]
Moment i fältmitt - Jämförelse mellan FEM och SDOF
Reducerad kvot
Lastfaktor
Figur 6.3 Föreslagen lastfaktor enligt Tabell 6.1 för konstruktion med elastisk respons som
utsätts för en jämnt utbredd last. För en konstruktion med plastisk respons är
M = 1,0.
Baserat på ovanstående föreslås att impulsbelastade konstruktioner, som begränsas till elastisk
respons samt beräknas med hjälp av SDOF, bör modifiera dimensionerande moment i enlighet med
ekvation (6.1) och Tabell 6.1.
6.3 Tvärkraft
6.3.1 Dimensionerande tvärkraft
Jämförelsen i avsnitt 5.1.2 visar att den stödreaktionen som fås i en impulsbelastad konstruktion
skiljer sig mot den som fås med motsvarande ekvivalenta statiska last. Baserat på Biggs lanseras en
stödreaktion, baserad på dynamisk jämvikt, vilken kan uttryckas på formen
  	  	 	t	F	t	R	t	Rstöd 				

	 (6.3)
där α ≈ 0,4 och β ≈ 0,1 för en fritt upplagd balk. Detta kan jämföras med stödreaktionen vid en
ekvivalent statisk last som blir α = 0,5 och β = 0,0. Dvs. för en stödreaktion baserad på statisk
jämvikt överskattas faktorn a med omkring 25 % jämfört med vad som fås om den istället baseras
på en dynamisk jämvikt. Eftersom responsen hos en impulsbelastad konstruktion i högsta grad är
dynamisk kan det därför argumenteras för att det är mer korrekt att basera stödreaktionen, och
därmed även tvärkraften, på en dynamisk jämvikt där α ≈ 0,4. Utförda jämförelser visar dock även
att
max	max	, 5	,	0 R	Rstöd 	 (6.4)

-- 39 of 43 --

Beräkning av impulsbelastad konstruktion
40 (43)
B06-201
2015-08-06
tenderar att stämma förhållandevis bra förutsatt att impulslasten inte är alltför intensiv, dvs. att det
bidrag i tvärkraft som fås av aktiverade högre moder i stort sätt täcks in på ett tillfredsställande sätt
när faktorn α = 0,5. För impulslast med stor intensivitet är så dock inte längre fallet – i Figur 2.8
framgår att kvoten Rstöd,FEM / Rstöd,SDOF < 1,25 när T / t1 ≤ 10.
Utförd litteraturgenomgång visar dock att dimensionerande tvärkraft inte nödvändigtvis utgår från
stödreaktionen utan på ekvivalent statisk last. Något resonemang om varför så är fallet presenteras
inte men en tänkbar orsak är att de avvikelser som fås mellan SDOF och FEM anses vara acceptabla
eftersom varaktigheten hos resulterande överskridanden har en mycket kort varaktighet samt att de
följs av lika korta underskridanden av samma storleksordning. Därmed kan det möjligen hävdas att
dessa oscillationer sammantaget har liten inverkan på den dimensionerande tvärkraften. En ut-
förligare undersökning av detta vore önskvärt men baserat på här genomgått referensmaterial
bedöms det i nuläget vara acceptabelt att basera dimensionerande tvärkraft på ekvivalent statisk last.
Förutom att det finns en avvikelse i maximal tvärkraften mellan FEM och SDOF så kan det även
konstateras att tvärkraftens fördelning över balkens längd hos en impulsbelastad konstruktion skiljer
sig från vad som fås för en statiskt belastad konstruktion. Därmed är det också rimligt att formen på
den resulterande tvärkraftsfördelningen inte följer den som fås för en ekvivalent statisk last. Baserat
på dynamisk jämvikt enligt avsnitt 5.1.3 är det möjligt att härleda (visas ej här) att tvärkraften, vid
plastisk respons, hos en fritt upplagd balk utsatt för en jämnt utbredd last kan uttryckas som
  	  	 	t	F	t	R	t	x	V
m
F
m
F 	




 	




 		




 		




 		



	
	

 2
2	2
2
2
2
1
2
1
2
2
1
, 5	,	0		 l
x
 (6.5)
där x anger koordinat utefter balkens längd l. Av detta framgår att tvärkraftsfördelningen har en
parabelformad form snarare än ett linjärt avtagande, vilket är fallet vid en statisk jämvikt. Baserat
på detta föreslås att en tvärkraftsfaktor α enligt Tabell 6.2 används för beräkning av aktuell
tvärkraftsfördelning. En jämförelse av tvärkraftsfördelning vid dynamisk och statisk jämvikt, samt
förslag enligt Tabell 6.2, ges i Figur 6.4.
Tvärkraftsfaktorn α i Tabell 6.2 och Figur 6.4 baseras på en balk med symmetriska randvillkor samt
plastisk respons. Approximativt kan dessa anvisningar dock även användas vid elastisk respons.
Vid osymmetriska randvillkor, till exempel fritt upplagd på ena sidan och fast inspänd på andra,
behöver en anpassning av α göras genom att anpassa läget x / l för α = 0 till den punkt där
tvärkraften, för motsvarande statiska belastningssituation, blir noll.
Tabell 6.2 Tvärkraftsfaktor α som föreslås användas för beräkning av tvärkraftsfördelning över
balk med plastisk respons, utsatt för en jämnt utbredd last.
x / l
[-]
α
[-]
0,00 0,50
0,15 0,35
0,30 0,25
0,50 0,00

-- 40 of 43 --

Beräkning av impulsbelastad konstruktion
41 (43)
B06-201
2015-08-06
0.00
0.05
0.10
0.15
0.20
0.25
0.30
0.35
0.40
0.45
0.50
0.00 0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40 0.45 0.50
Tvärkraftsfaktor,
a [-]
Koordinat, x / l [-]
Dynamisk
Statisk
Förslag
Figur 6.4 Jämförelse av tvärkraftsfördelning över balk med plastisk respons, utsatt för en
jämnt utbredd last. Föreslagna värden enligt Tabell 6.2.
Baserat på detta bedöms det vara en tillräcklig approximation att basera den maximala
stödreaktionen på aktuell ekvivalent statisk last, ett förfarande som också stöds av den metodik som
används i UFC samt Cormie et al. Den dimensionerande tvärkraften baseras dock på en kombina-
tion av tvärkraftens fördelning över konstruktionen samt lutning hos kritisk skjuvspricka. För att
beakta inverkan av dynamisk respons föreslås en modifierad tvärkraftsfördelning enligt Figur 6.4
medan val av kritiskt snitt görs i enlighet med Eurokod 2. Vid utnyttjande av byglar ska val av
skjuvvinkel dock göras med hänsyn till restriktion enligt avsnitt 6.3.2.
6.3.2 Tvärkraftskapacitet
I Eurokod 2 baseras betongens tvärkraftskapacitet på en skjuvspricka med lutning θ = 45°. När
byglar används för att bära tvärkraften är det dock tillåtet att anta en flackare vinkel, cot θ ≤ 2,5 för
slakarmerade konstruktioner. Detta val förutsätter att det, tack vara byglarnas närvaro, kan ske en
plastisk omlagring som gör att sprickan successivt ändrar riktning från en brant till en flack lutning.
Därmed kommer fler byglar efterhand också aktiveras, vilket ger en ökad tvärkraftskapacitet hos
konstruktionen.
Detta synsätt förutsätter således en gradvis kraftomlagring i konstruktionen. En sådan respons är
rimlig för en statiskt belastad konstruktion men det är inte lika självklart att så även är fallet vid en
snabb dynamisk respons orsakad av en impulslast. I UFC utgör detta inte något problem eftersom
skjuvsprickan i detta fall antas ha en vinkel på 45° och i FKR är beräkningsmetoden så mycket
annorlunda att en enkel jämförelse med Eurokod 2 inte är möjlig. I Cormie et al. utgås dock från
Eurokod 2 och däri tillåts byglarnas tvärkraftskapacitet också beräknas utgående från att

-- 41 of 43 --

Beräkning av impulsbelastad konstruktion
42 (43)
B06-201
2015-08-06
cot θ ≤ 2,5. Någon fundering på att eventuellt begränsa tillåten vinkel hos skjuvsprickan med
hänsyn till impulsbelastning framförs inte. Dock. används en dimensionerande tvärkraft som
bestäms i ett kritiskt snitt baserat på en skjuvvinkel om 45°, dvs. ett konservativt valt lastvärde
utgående från vad som är tillåtet enligt Eurokod 2.
Beaktat den osäkerhet som råder kring möjligheterna för plastisk omlagring i en sned skjuvspricka
hos en impulsbelastad konstruktion anses det här vara rimligt att införa någon form av begränsning
på tillåten lutning hos antagen skjuvspricka. Någon tillförlitlig information att basera ett sådant val
på saknas dock, varför en sådan begränsning istället får baseras på en ingenjörsmässig bedömning.
Här föreslås att maximal vinkel hos skjuvsprickan begränsas till cot θ ≤ 1,75, dvs. θ ≥ 30°, vilket
motsvarar medelvärdet för tillåten lutning (1,0 ≤ cot θ ≤ 2,5) hos skjuvsprickan.
För maximalt tillåtet avstånd mellan byglar ger undersökta referenser riktlinjer som påminner om
varandra – UFC och Cormie et al. förespråkar smax ≤ 0,5∙d medan FKR anger att smax ≤ 0,5∙d vid
elastisk respons men tillåter smax ≤ 0,75∙d vid plastisk respons. Det senare värdet är också vad som
används som maximalavstånd i Sverige för statiskt belastade konstruktioner. Det är dock klart att
konsensus råder i här jämförda referenser om att det åtminstone delvis finns ett behov av ett hårdare
krav än så på maximalt avstånd mellan tvärkraftsarmering i form av byglar.
Baserat på detta konstateras att tillåten tvärkraftskapacitet gentemot sneda skjuvsprickor beräknas
enligt Eurokod 2. En restriktion på skjuvsprickans vinkel införs dock via rekommendationen att
cot θ ≤ 1,75 samt att tillåtet avstånd mellan byglar utgår från smax ≤ 0,5∙d.
6.3.3 Rak skjuvspricka
De uttryck som ges i UFC och Cormie et al. är mycket likt uttrycket i Eurokod 2 för att undvika
livtryckbrott, dvs. krossning av den sneda trycksträva som uppstår i betongen vid tvärkrafts-
belastning. I FKR finns krav på en motsvarande kontroll, dock utan syfte att kontrolla uppkomst av
en rak skjuvspricka – en sådan brottyp berörs överhuvudtaget inte i denna referens. I praktiken
används dock i princip samma typ av kontroll – ett uttryck avsett att undvika livtryckbrott – i
samtliga här undersökta referenser. Denna kontroll utförs också i Eurokod 2, varför det i egentlig
mening redan ingår en kontroll mot rak skjuvspricka.
I UFC och Cormie et al. anges det dock även andra särskilda krav för när det krävs diagonala byglar
för att hantera uppkomsten av rak skjuvspricka. Dessa krav är bland annat kopplade till tillåten
rotationskapacitet. I avsnitt 6.2.3 förespråkas dock ett annat synsätt för rotationskapacitet, varför det
saknas något krav på en sådan bygelutformning för att uppnå en viss rotationskapacitet. Slutligen,
eftersom raka sprickor inte hanteras alls i FKR, kombinerat med att denna representerar det
traditionella svenska synsättet för impulsbelastade konstruktioner, så bedöms det också vara
acceptabelt att bortse från särskilda krav kopplat till denna brottyp.
Baserat på detta bedöms kontroll gentemot raka sprickor vara uppfylld via kontroll mot
livtryckbrott, en kontroll som kan utföras i enlighet med Eurokod 2. Några särskilda armerings-
utformningar med hänsyn till denna brottyp bedöms inte vara nödvändiga.

-- 42 of 43 --

Beräkning av impulsbelastad konstruktion
43 (43)
B06-201
2015-08-06
7 Referenser
Andersson S. and Karlsson H. (2012): Structural Response of Reinforced Concrete Beams Subjected to
Explosions: Time dependent transformation factors, support reactions and distribution of section
forces. Avdelningen för Konstruktionsteknik, Chalmers tekniska högskola, Examensarbete 2012:103,
Göteborg.
Biggs J.M. (1964): Introduction to Structural Dynamics. McGraw-Hill, New-York, USA.
Carlsson M och Kristensson R. (2012): Structural Response with regard to Explosions: Mode
Superposition, Damping and Curtailment. Avdelningen för Byggnadsmekanik, Department of
Construction Sciences, Lunds tekniska högskola, Lund.
Cormie D., Mays G., Smith P. (2009): Blast Effects on Buildings, Second edition. Thomas Telford
Ltd, London, Storbritannien.
DOD (2008): Structures to Resist the Effects of Accidental Explosions. UFC 3-340-02,
Departement of Defense, USA.
Fortifikationsförvaltningen (1973a): Provisoriska anvisningar för dimensionering av armerade
betongkonstruktioner som skydd mot verkan av konventionella vapen inom närmissområde.
Fortifikationsförvaltningen, Befästningsavdelningen, Publ nr 25:1 Bk/1973, Stockholm.
Fortifikationsförvaltningen (1973b): Provisoriska anvisningar för dimensionering av armerade
betongkonstruktioner som skydd mot verkan av konventionella vapen inom närmissområde -
Kommentarer. Fortifikationsförvaltningen, Befästningsavdelningen, Publ nr 25:2 Bk/1973,
Stockholm.
Fortifikationsverket (2011): Fortifikationsverkets Konstruktionsregler, FKR 2011. Fortifikations-
verket, Dnr 4535/2011, Eskilstuna.
Johansson M. och Laine L. (2012c): Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Del 3: Kapacitet hos byggnader. Myndigheten för samhällsskydd och beredskap,
Publ.nr MSB 0142-10, Karlstad.
SIS (2008): Eurokod 2: Dimensionering av betongkonstruktioner – Del 1-1: Allmänna regler och
regler för byggande. SIS Sweddish Standards Institute, SS-EN 1992-1-1, Stockholm.
Svedbjörk G. (2010): Personlig kommunikation. Seniorkonstruktör med mer än 40 års erfarenhet att
räkna på impulsbelastade konstruktioner, Grontmij, Eskilstuna.

-- 43 of 43 --