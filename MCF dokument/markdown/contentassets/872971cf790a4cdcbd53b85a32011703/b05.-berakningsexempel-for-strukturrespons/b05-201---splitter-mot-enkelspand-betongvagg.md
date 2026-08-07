---
title: "B05 201   Splitter Mot Enkelspand Betongvagg"
category: "b05.-berakningsexempel-for-strukturrespons"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b05.-berakningsexempel-for-strukturrespons/b05-201---splitter-mot-enkelspand-betongvagg.pdf"
fileType: "PDF"
keywords: ["betong","beräkning","explosion","kontroll","splitter","stadium","respons","dokument"]
summary: "Beräkning av impulsbelastad konstruktion 1 (10) B05-201 2014-02-01 B05-201 Beräkningsexempel för strukturrespons Splitter mot enkelspänd betongvägg Författare: Joosef Leppänen. Ansvarig utgivare: Björn Ekengren. 1 Orientering 1 1.1 Samlingsdokumen..."
---

Beräkning av impulsbelastad konstruktion
1 (10)
B05-201
2014-02-01
B05-201 Beräkningsexempel för strukturrespons
Splitter mot enkelspänd betongvägg
Författare: Joosef Leppänen. Ansvarig utgivare: Björn Ekengren.
1 	Orientering 	1
1.1 	Samlingsdokument 	1
1.2 	Om detta dokument 	2
2 	Förutsättningar 	2
3 	Belastning 	3
4 	Betongväggens egenskaper 	4
4.1 	SDOF 	4
4.2 	Geometri och material 	4
4.3 	Massa 	4
4.4 	Styvhet och kapacitet 	5
5 	Förskjutning och snittkrafter 	6
5.1 	Förutsättningar 	6
5.2 	Betongvägg utsatt för stötvågs- och splitterbelastning 	6
5.2.1 	Förskjutning 	6
5.2.2 	Ekvivalent statisk last och resulterande moment 	7
5.2.3 	Sammanställning 	8
6 	Kommentar 	9
1 	Orientering
1.1 	Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.

-- 1 of 10 --

Beräkning av impulsbelastad konstruktion
2 (10)
B05-201
2014-02-01
1.2 	Om detta dokument
I detta dokument visas beräkningsexempel för kombinerad stötvågs- och splitterbelastning. I
exemplet studeras responsen hos en tvåsidigt upplagd betongvägg.
Beräkningsgången är densamma som i beräkningsexempel B05-101, enkelspänd betongvägg.
Skillnaden i beräkningar är lasten, här beaktas även splitterbelastning. I beräkning nyttjas ett
enfrihetsgradssystem (SDOF), där beräkning av maximal förskjutning och ekvivalent statisk last
redovisas, samt tillhörande maximalt fältmoment.
Teoretisk bakgrund för redovisade beräkningar behandlas i Johansson och Laine (2012c) samt
Leppänen 	(2012). 	En 	sammanställning 	av 	beräkningsanvisningar 	ges 	i 	dokument 	B03-101,
B03-102. Lasten som nyttjas i detta beräkningsexempel har hämtats från dokument B04-202 och
geometri och material från dokument B05-101.
2 	Förutsättningar
I 	Figur 2.1 	illustreras 	studerat 	belastningsfall. 	En 	cylindrisk 	bomb 	på 200 	kg innehållande
motsvarande 100 kg TNT och höljets vikt är 100 kg, antas explodera 1 m ovan marknivå. I närheten
av bomben står en betongbyggnad som kommer att utsättas för kombinerad stötvågs- och
splitterbelastning. Här studeras effekten av kombinerad stötvågs- och splitterbelastning på avstånd
r = 15 m, för stötvågen fås en normalreflekterad stötvåg. Den resulterande stötvåg approximeras
som om den genereras av en sfärisk laddning.
r = 15 m
reflekterad
stötvåg
100 kg
TNT
Plan
spegling 	1 m
Vy	stötvågsfront
Byggnad
Byggnad
Figur 2.1 	En 200 kg cylindrisk bomb innehållande en laddning på motsvarande 100 kg TNT
och höljets vikt är 100 kg, placerad 1 m ovan mark, exploderar och last mot utsatt
byggnad på ett avstånd r = 15 m studeras.

-- 2 of 10 --

Beräkning av impulsbelastad konstruktion
3 (10)
B05-201
2014-02-01
3 	Belastning
Den verkande lasten bestäms i dokument B04-202 och sammanställs i Figur 3.1 samt Tabell 3.1.
Stötvågen antas ha ett linjärt avtagande tryck. I redovisade beräkningar i avsnitt 5 och 6 studeras
endast den reflekterade stötvågen kombinerat med splitterbelastning. I SDOF approximeras den
totala impulsen genom att addera impulsen från splitter till impulsen för den reflekterade stötvågen.
I jämförelse med central differensmetod i avsnitt 6 beaktas dock verklig ankomsttid och varaktighet
för splitter- respektive stötvågsbelastning.
0
400
800
1 200
1 600
2 000
2 400
0 	4 	8 	12 	16 	20 	24 	28 	32 	36
Tryck,
 P+ [kPa]
Tid, t [ms]
linjär
exponentiell
splitter
Figur 3.1 	Impulslast från kombinerad stötvägs- och splitterbelastning. För stötvågen redovisas
linjärt och exponentiellt antagande om belastningen för reflekterad stötvåg.
Tabell 3.1 	Stötvågsparametrar för reflekterad och oreflekterad belastning vid antagande om
linjärt avtagande tryck, samt impulstäthet från splitterbelastning.
Linjärt avtagande tryck
Oreflekterad stötvåg 	Reflekterad stötvåg
P s+ 	72 kPa 	P r+ 	187 kPa
is+ 	277 Pas 	ir+ 	623 Pas
ts,Δ+ 	7,7 ms 	tr,Δ+ 	6,7 ms
Splittebelastning
is+ = 80,7 Pas

-- 3 of 10 --

Beräkning av impulsbelastad konstruktion
4 (10)
B05-201
2014-02-01
4 	Betongväggens egenskaper
4.1 	SDOF
Vid beräkning av deformationen för betongväggen nyttjas ett enfrihetsgradssystem (SDOF) enligt
samma metod som nyttjas i exempel redovisad i B05-101. Enfrihetsgradssystemet erhålls som:
( )	t	F	u	k	u	m 	b	b	b	mF 	=	+		
κ 	(4.1)
där mb är balkens totala massa, vilket multipliceras med en faktor κmF, kb är styvheten för balken
och Fb är lasten.
Beräkning görs i tre olika stadier för betongen, osprucket (stadium I), sprucket (stadium II) samt
plastisk respons (stadium III). I redovisade beräkningar nyttjas index I, II eller III för respektive
stadium.
4.2 	Geometri och material
Den studerade betongväggen redovisas i Figur 4.1. Spännvidden är 2,7 m, varav en strimla med
bredden 1,0 m och tjockleken 0,2 m studeras. Betongen är C20/25 och armeras med φ10 s200
K500B.
p(t)
l = 2,7 m
0,20 m
1,0 m
φ10 s200 K500B	0,04 m
Betong C 20/25 	Ec = 30 GPa
fcd = 16,7 MPa
Es = 200 GPa
fyd = 500 MPa
Figur 4.1 	Studerad meterstrimla av betongvägg.
4.3 	Massa
Meterstrimlans totala massa kan beräknas till:
kg	1296	7	2	20	0	0	1	2400 	=	⋅	⋅	⋅	=	⋅	⋅	⋅	= 	,	,	,	l	h	b	m b	
ρ 	(4.2)
I SDOF beräkning multipliceras därefter massan med värdet på κmF, vilket för en fritt upplagd balk,
med elastisk respektive plastisk respons, fås enligt dokument B03-101 som:
788	,	0	,	, 	=	= 	II	mF	I	mF	
κ
	κ 	(4.3)
667	,	0	, 	=	III	mF	
κ 	(4.4)

-- 4 of 10 --

Beräkning av impulsbelastad konstruktion
5 (10)
B05-201
2014-02-01
Ekvivalent massa för stadium I och II (elastisk respons), samt stadium III (plastisk respons)
beräknas till:
kg	1021	1296	788	0 	=	⋅	=	= 	,	m	m 	II	I 	(4.5)
kg	864	1296	667	0 	=	⋅	= 	,	m III 	(4.6)
4.4 	Styvhet och kapacitet
För komplett beräkning av styvhet för elastisk respons och kapacitet för plastisk respons, se
dokument B05-101. Här visas en kort sammanfattning av erhållna värden.
Styvheten kan beräknas som:
3
5
384
l
EI
u
ql
u
Q
k 	⋅	=	=	= 	(4.7)
I stadium I och II erhålls tröghetsmomenten:
4	8 mm	10	7	,	6 	⋅	=	I	I 	(4.8)
4	7 mm	10	3	,	5 	⋅	=	II	I 	(4.9)
Styvheten kan nu bestämmas till:
N/m	10	8	7	N/mm	10	8	7
2700
10	7	6	10	30
5
384 	7	4
3
8	3
⋅	=	⋅	=
⋅	⋅	⋅
⋅	= 	,	,
,
k I
(4.10)
N/m	10	2	6	N/mm	10	2	6
2700
10	3	5	10	30
5
384 	6	3
3
7	3
⋅	=	⋅	=
⋅	⋅	⋅
⋅	= 	,	,
,
k II 	(4.11)
Momentkapacitet för balken kan beräknas till 30,3 kNm. Genom att sätta momentkapacitet lika med
maximalt fältmoment i balken kan den inre motståndskraft R för plastisk respons (stadium III)
bestämmas som:
kN	90
7	,	2
3	,	30	8	8 =
⋅
=	=	= l
M
ql	R 	sd (4.12)

-- 5 of 10 --

Beräkning av impulsbelastad konstruktion
6 (10)
B05-201
2014-02-01
5 	Förskjutning och snittkrafter
5.1 	Förutsättningar
Impulstäthet för reflekterad och oreflekterad stötvåg, samt impulstäthet från splitterbelastning för
studerad betongvägg visas i avsnitt 3. Vid beräkning av förskjutningar i avsnitt 5.2 nyttjas den totala
impulsen från stötvåg och splitter. Här studeras kombinationen av stötvågs- och splitterbelastning.
Den totala impulsen beräknas som:
901	1	)	7	,	80	623	(	7	,	2	0	,	1	)	( 	=	+	⋅	⋅	=	+	⋅	⋅	= 	splitter	stötvåg 	i	i	l	b	I 	Ns 	(5.1)
I denna beräkning beaktas dock inte att stötvåg och splitter har olika ankomstider till väggen från
explosionen, vilket innebär att dessa kan träffa konstruktionen vid olika tidpunkter. Vidare beaktas
ej eventuella skador i form av kraterbildning som splitter kan ge upphov till när de träffar väggen.
I Tabell 5.1 sammanställs massa och styvhet hos studerad väggstrimla, framtagna i avsnitt 4.
Tabell 5.1 	Sammanställning av massa och styvhet hos studerad väggstrimla när denna betrak-
tas vara helt osprucken, sprucken samt uppvisa ett rent plastiskt beteende.
Egenskap 	Beteckning
Osprucken
(stadium I)
Sprucken
(stadium II)
Plastisk
(stadium III) 	Enhet
Massa 	m 	1021 	1021 	864 	kg
Styvhet 	k 	7,8·10 7 	6,2·10 6 	- 	N/m
Kapacitet 	R 	- 	- 	90 	kN
5.2 	Betongvägg utsatt för stötvågs- och splitterbelastning
5.2.1 	Förskjutning
För elastisk respons fås den maximala förskjutningen för väggen som:
mk
I
u el = 	(5.2)
för osprucken betong (stadium I) fås:
mm	7	,	6
10	8	,	7	1021
1901
7 =
⋅	⋅
=	I	u 	(5.3)
och för sprucken betong (stadium II) fås:
mm	24	9	,	23
10	2	,	6	1021
901	1
6 ≈	=
⋅	⋅
=	II	u 	(5.4)

-- 6 of 10 --

Beräkning av impulsbelastad konstruktion
7 (10)
B05-201
2014-02-01
För plastisk respons (stadium III) fås den maximala förskjutningen som:
Rm
I
u pl 2
2
= 	(5.5)
och följande deformation erhålls för studerad betongvägg:
mm	23	3	,	23
864	10	90	2
901	1 3
2
≈	=
⋅	⋅	⋅
=	III	u 	(5.6)
5.2.2 	Ekvivalent statisk last och resulterande moment
Ekvivalent statisk last kan för betongväggen med elastisk respons beräknas som:
l
ku
q el
el = 	(5.7)
och för osprucken betong (stadium I) fås:
kN/m	194
7	,	2
10	7	,	6	10	8	,	7 3	7
=
⋅	⋅	⋅
=
−
I	q 	(5.8)
och för sprucken betong (stadium II) fås:
kN/m	54
7	,	2
10	24	10	2	,	6 3	6
=
⋅	⋅	⋅
=
−
II	q 	(5.9)
För plastisk respons (stadium III) kan den ekvivalenta statiska lasten beräknas som:
l
R
q pl = 	(5.10)
och följande last erhålls:
kN/m	33
7	,	2
90 =	=	III	q 	(5.11)
Utifrån statisk ekvivalent last kan maximalt fältmoment för en fritt upplagd balk med utbredd last
bestämmas enligt följande för de olika stadierna:
kNm	177
8
7	,	2	194 2
=
⋅
=	I	M 	(5.12)
kNm	49
8
7	,	2	54 2
=
⋅
=	II	M 	(5.13)

-- 7 of 10 --

Beräkning av impulsbelastad konstruktion
8 (10)
B05-201
2014-02-01
kNm	30
8
7	,	2	33 2
=
⋅
=	III	M 	(5.14)
Erhållna moment skall endast ses som illustrativa, då stadium I beräkning förutsätter att balken är
osprucken. Dock kommer balken att spricka för denna last. Vidare kommer stadium II övergå till
plastisk respons. I stadium III erfordras dessutom en kontroll av plastisk deformationsförmåga,
vilket redovisas i dokument B05-101.
5.2.3 	Sammanställning
Resultat för studerad betongvägg sammanställs i Tabell 5.2 och Figur 5.1. Osprucken betong
(stadium I) visar en styvare respons än sprucken betong (stadium II) och plastisk respons
(stadium III). Förskjutning för sprucken betong och plastisk respons är ganska likvärdiga i detta fall.
Ifall väggen skulle utsättas för en högre last skulle det dock erfordras en större deformation för vägg
med plastisk respons för att den inre energiförbrukningen skall öka jämfört med respons för vägg
med sprucken betong.
Tabell 5.2 	Sammanställning av förskjutning, ekvivalent statisk last samt maximalt fältmoment
för studerad betongvägg.
Egenskap 	Beteckning
Stadium I
(osprucken)
Stadium II
(sprucken)
Stadium III
(brott) 	Enhet
Förskjutning 	u 	6,7 	24 	23 	mm
Ekv. statisk last 	q 	194 	54 	33 	kN/m
Max. fältmoment 	M 	177 	49 	30 	kNm

-- 8 of 10 --

Beräkning av impulsbelastad konstruktion
9 (10)
B05-201
2014-02-01
0
50
100
150
200
250
300
350
400
0 	10 	20 	30 	40 	50 	60
Ekvivalent statisk last,
 q [kN/m]
Förskjutning, u [mm]
Stadium I - Osprucket
Stadium II - Sprucket
Stadium III - Plastiskt
6,7 mm
24 mm
23 mm
194 kN/m
54 kN/m
33 kN/m
Figur 5.1 	Sammanställning av ekvivalent statisk last q och maximal deformation u för studerad
väggstrimla belastad av reflekterad stötvåg när balken antas befinna sig i stadium I,
stadium II eller stadium III.
6 	Kommentar
Beräknade förskjutningar i avsnitt 5 förutsätter att stötvågen och splittret träffar väggen samtidigt.
Kraterbildning orsakas när splitter träffar en betongvägg. I detta exempel är krafterdjupet 50 mm, se
dokument B04-202. Dock har inverkan av kraterbildningen försummats eftersom splittertätheten är
endast 0,06 kg/m 2 , se dokument B04-202. Exempel för hur kraterbildning kan beaktas i beräkning,
redovisas i Leppänen (2012).
Som jämförelse har en beräkning med central differensmetod gjorts, vilket redovisas i Figur 6.1.
Denna jämförelse visar att förskjutningarna blir lägre vid en mer noggrann beräkning med central
differensmetod för de olika stadierna jämfört med redovisade beräkningar i avsnitt 5. Splitter kan
antingen träffa väggen före, efter eller samtidigt som stötvågen träffar väggen. Beroende på väggens
rörelseriktning och hastighet kan det bli olika ogynnsamt för väggen då ankomsttid för stötvåg och
splitter skiljer sig åt. Ifall splittret träffar väggen vid tidpunkt då väggen har som störst hastighet och
samma rörelseriktning som belastningen från stötvågen har, erhålls den största deformationen i
väggen. I redovisat exempel så träffar dock inte stötvågen och splittret väggen samtidigt. Splittret
träffar väggen först, med en ankomsttid på ca 9 ms, medan stötvågen har en ankomsttid på ca
21 ms. Vid tidpunkten då stötvågen träffar väggen har väggen redan hunnit svänga fram och tillbaka
en gång, och väggens rörelse är i motsatt riktning som stötvågsbelastningen har, vilket förklarar de
stora avvikelserna i resultat mellan SDOF och den mer noggrannare beräkningen med central
differensmetod.

-- 9 of 10 --

Beräkning av impulsbelastad konstruktion
10 (10)
B05-201
2014-02-01
-10
-5
0
5
10
15
20
25
30
0 	10 	20 	30 	40 	50 	60
Förskjutning,
 u [mm]
Tid, t [ms]
Stadium III
Stadium II
Stadium I
6,7 mm
23,9 mm
23,3 mm
5 mm
22,6 mm
15,1 mm
Figur 6.1 	Förskjutnings-tidssamband 	för 	studerad 	betongvägg, 	jämförelse 	med 	numerisk
lösning i olika stadium för belastning enligt avsnitt 3. Listade värden anger i
avsnitt 5.2.1 beräknade förskjutningar.

-- 10 of 10 --