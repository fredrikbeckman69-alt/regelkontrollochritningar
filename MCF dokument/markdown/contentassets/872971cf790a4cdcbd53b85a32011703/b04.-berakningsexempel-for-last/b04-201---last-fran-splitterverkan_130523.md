---
title: "B04 201   Last Fran Splitterverkan 130523"
category: "b04.-berakningsexempel-for-last"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b04.-berakningsexempel-for-last/b04-201---last-fran-splitterverkan_130523.pdf"
fileType: "PDF"
keywords: ["betong","beräkning","kontroll","splitter","figur","tjocklek","enligt","massan"]
summary: "Beräkning av impulsbelastad konstruktion 1 (8) B04-201 2013-05-23 B04-201 Beräkningsexempel för last Last från splitterverkan Författare: Joosef Leppänen. Ansvarig utgivare: Björn Ekengren. 1 Orientering 1 1.1 Samlingsdokument 1 1.2 Om detta dokum..."
---

Beräkning av impulsbelastad konstruktion
1 (8)
B04-201
2013-05-23
B04-201 Beräkningsexempel för last
Last från splitterverkan
Författare: Joosef Leppänen. Ansvarig utgivare: Björn Ekengren.
1 	Orientering 	1
1.1 	Samlingsdokument 	1
1.2 	Om detta dokument 	1
2 	Förutsättningar 	2
3 	Splitterfördelning 	2
4 	Splitterhastighet 	4
5 	Splitterverkan i betongkonstruktioner 	5
5.1 	Penetration 	5
5.2 	Perforation 	6
5.3 	Utstötning 	7
5.4 	Jämförelse mellan skadefenomen 	8
1 	Orientering
1.1 	Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 	Om detta dokument
I detta dokument visas beräkningsexempel för MSB:s så kallade arkivbomb där splitterfördelning
och 	splitterhastigheter 	för 	olika 	splittermassor 	tas 	fram. 	Vidare 	bestäms 	penetrationsdjup,
erforderlig tjocklek hos en konstruktion för att undvika perforation och utstötning i en betongvägg
för 	varierande 	splittermassa 	och 	hastighet. 	Teoretisk 	bakgrund 	för 	redovisade 	beräkningar
behandlas i Leppänen (2012) och en sammanställning av beräkningsanvisningar ges i dokument
B02-201.

-- 1 of 8 --

Beräkning av impulsbelastad konstruktion
2 (8)
B04-201
2013-05-23
2 	Förutsättningar
Splitterbelastningen i detta exempel består av MSB:s så kallade arkivbomb. Detta är en fiktiv
laddning som av MSB används för att beskriva en viss verkan. Bomben har en cylindrisk form med
geometri enligt Figur 2.1 samt Tabell 2.1. Arkivbomben definieras som den lasteffekt – det vill säga
stötvågs- och splitterbelastning från detonationen – som motsvarar en 250 kg minbomb med 50
viktprocent trotyl (TNT) som briserar 5,0 meter från skyddets utsida vid fri tryckavlastning.
Figur 2.1 	Geometri för arkivbomb.
Tabell 2.1 	Data för arkivbomb.
Form 	Cylindrisk
Massa bomb, Mb 	250 kg
Massa sprängmedel, TNT, W 	125 kg
Splittergivande massa 	114,6 kg
Längd, L 	2,2 m
Ytterdiameter, db 	230 mm
Innerdiameter, di 	210,7 mm
Höljets tjocklek, t h 	9,65 mm
Splitterfördelningsparameter, MA 	2,28·10-3 kg
Motts konstant, B 	3,67 kg1/2/ m7/6
3 	Splitterfördelning
Splitterfördelningsparametern MA beräknas som
2	3/2	3/5	2 )	1	(
i
h
i	h	A d
t
d	t	B	M 	+	⋅	⋅	= 	(3.1)
och med indata enligt Tabell 2.1 fås
( 	) 	( 	) 	kg	10	28	,	2	)
2107	,	0
10	65	,	9
1	(	2107	,	0	10	65	,	9	67	,	3 3	2
3
3/2	3/5	3	2 	−
−
− ⋅	=
⋅
+	⋅	⋅	⋅	=	A	M 	(3.2)

-- 2 of 8 --

Beräkning av impulsbelastad konstruktion
3 (8)
B04-201
2013-05-23
Antalet splitter som har massan större än ett splitter med massan ms fås som
A
s
M
m
A
h
ms 	e
M
M
n −
= 2 (3.3)
där Mh = 114,6 kg är bombens splittergivande massa och MA är splitterfördelningsparametern enligt
Tabell 2.1 respektive ekvation (3.2). Totala antalet splitter fås genom att sätta ms = 0, vilket ger
st	132	25
10	28	,	2	2
6	,	114
2 3 =
⋅	⋅
=	= 	−
A
h
s M
M
n 	(3.4)
Antalet splitter som har massan större än ett splitter med massan ms = 0,1 g fås enligt följande
st	383	20
10	28	,	2	2
6	,	114
2
3
3
10	28	,2
10	1,0
3 	=
⋅	⋅
=	= −
−
⋅
⋅
	−
−
−
e	e
M
M
n 	A
s
M
m
A
h
ms (3.5)
medan antalet splitter som har massan större än ett splitter med massan ms = 100 g endast blir
st	33
10	28	,	2	2
6	,	114
2
3
	10	28	,2
100	,0
3 	=
⋅	⋅
=	= −
	⋅
−
−
−
e	e
M
M
n 	A
s
M
m
A
h
ms 	(3.6)
I Figur 3.1 redovisas antalet splitter med massan större än ms för en arkivbomb från 0,1 g upp till
100 g i logaritmisk skala.
0
5 000
10 000
15 000
20 000
25 000
0,1 	1 	10 	100
Splittermassa, ms [g]
Antalet splitter,
 nms [st]
Figur 3.1 	Antalet splitter med en massa större än ms för en arkivbomb.

-- 3 of 8 --

Beräkning av impulsbelastad konstruktion
4 (8)
B04-201
2013-05-23
4 	Splitterhastighet
För arkivbomben fås sprängämnesmassa W och höljets massa Mh som
W = 125 kg
Mh = 125 kg
För att bestämma splitterhastighet kan splittrens utgångshastighet v0 för arkivbomben bestämmas
som
m/s	075	2	)	1	(	400	2	)	1	(	400	2 125	/	125	2	/	2
0 	=	−	⋅	=	−	⋅	= ⋅	−	− e	e	v 	h	M	W (4.1)
Splitterhastigheten i luften, vr, avtar med sträckan r och den kan bestämmas som
3/	00456	,0
0
s	m	r
r 	e	v	v −
= 	(4.2)
där v0 beräknas enligt ekvation (4.1) och ms är splittermassa i [kg].
Exempelvis fås splitterhastigheten med ekvation (4.2) för ett splitter med massan 50 g på ett avstånd
på 5 m som
m/s	951	1	075	2 3 	050	,0	/5	00456	,0 =	= ⋅	−
e	v r 	(4.3)
där utgångshastighet v0 beräknas enligt ekvation (4.1)
I Figur 4.1 visas splitterhastigheter på olika avstånd för splitter med varierande massa från 1 g upp
till 50 g.
1 200
1 400
1 600
1 800
2 000
0 	2 	4 	6 	8 	10 	12
Splitterhastighet,
 ms [m/s]
Sträcka i luft, r [m]
m = 50 g
m = 25 g
m = 5 g
m = 1 g
Figur 4.1 	Splitterhastigheter med varierande splittermassa och avstånd från en arkivbomb.

-- 4 of 8 --

Beräkning av impulsbelastad konstruktion
5 (8)
B04-201
2013-05-23
5 	Splitterverkan i betongkonstruktioner
5.1 	Penetration
Penetrationsdjupet x i [mm] för ett splitter i betong kan beräknas som
För en betongvägg med hållfastheten f c = 30 MPa fås
( 	) 25	,0	6
9,0	37	,0
25	,0
9,0	37	,0
10	30
9	,	26	9	,	26
⋅
=	= 	s	s
c
s	s 	v	m
f
v	m
x 	för x ≤ 	3
1
117 	s	m 	(5.1)
och
( 	) 3
1
5,0	6
8,1	4,0
3
1
5,0
8,1	4,0
6	,	40
10	30
35	,	4
6	,	40
35	,	4 s
s	s
s
c
s	s 	m
v	m
m
f
v	m
x 	+
⋅
=	+	= 	för x > 	3
1
117 	s	m 	(5.2)
där splittermassan ms är i [kg], hastigheten vs är i [m/s] och betongens tryckhållfasthet f c är i [Pa].
Exempelvis fås penetrationsdjupet med ekvation (5.2) för ett splitter med massan 50 g och
splitterhastighet på 1 500 m/s som
( 	) 	( 	)
( 	) ( 	) 	mm	140	050	,	0	6	,	40
10	30
1500	050	,	0	35	,	4 3
1
5,0	6
8,1	4,0
=	⋅	+
⋅
⋅
=	x 	för x > 	3
1
117 	s	m 	(5.3)
Kontroll: x > 	3
1
050	,	0	117 ⋅ 	= 43 mm 	OK!
I Figur 5.1 visas penetrationsdjupet för splitter med varierande massa och hastighet.
0
100
200
300
0 	500 	1000 	1500 	2000
Penetrationsdjup,
 x [mm]
Splitterhastighet, vs [m/s]
m= 50 g
m = 25g
m = 5 g
m = 1 g
Figur 5.1 	Penetrationsdjup i betong för varierande splittermassa och hastighet.

-- 5 of 8 --

Beräkning av impulsbelastad konstruktion
6 (8)
B04-201
2013-05-23
5.2 	Perforation
Den minsta tjocklek t p i [mm] hos en betongvägg som erfordras för att förhindra perforation
beräknas som
33	,0	033	,0 9	,	74	23	,	1 	s	s	p 	m	m	x	t 	+	= 	(5.4)
där x beräknas enligt ekvation (5.1) och (5.2).
Exempelvis fås erforderlig väggtjocklek för att förhindra perforation för ett splitter med massan
50 g och splitterhastighet på 1 500 m/s som
mm	184	050	,	0	9	,	74	050	,	0	140	23	,	1	9	,	74	23	,	1 33	,0	033	,0	33	,0	033	,0 =	⋅	+	⋅	⋅	=	+	= 	s	s	p 	m	m	x	t 	(5.5)
där x har beräknas enligt ekvation (5.1) och (5.2) till 140 mm.
I Figur 5.2 redovisas minsta tjocklek hos en betongvägg som erfordras för att förhindra perforation
för varierande splittermassa och hastighet.
0
100
200
300
0 	500 	1 000 	1 500 	2 000
Tjocklek,
 tp [mm]
Splitterhastighet, vs [m/s]
m = 50 g
m = 25 g
m = 5 g
m = 1 g
Figur 5.2 	Minsta tjocklek hos en betongvägg som erfordras för att förhindra perforation för
varierande splittermassa och hastighet.

-- 6 of 8 --

Beräkning av impulsbelastad konstruktion
7 (8)
B04-201
2013-05-23
5.3 	Utstötning
Den minsta tjocklek hos en betongvägg som erfordras för att förhindra utstötning beräknas som
33	,0	033	,0 121	32	,	1 	s	s	u 	m	m	x	t 	+	= 	(5.6)
där x beräknas enligt ekvation (5.1) och (5.2).
Exempelvis fås erforderlig väggtjocklek för att förhindra utsötning för ett splitter med massan 50 g
och splitterhastighet på 1 500 m/s som
mm	212	050	,	0	121	050	,	0	140	32	,	1	121	32	,	1 33	,0	033	,0	33	,0	033	,0 =	⋅	+	⋅	⋅	=	+	= 	s	s	u 	m	m	x	t 	(5.7)
där x har beräknas enligt ekvation (5.1) och (5.2) till 140 mm.
I Figur 5.3 redovisas minsta tjocklek hos en betongvägg som erfordras för att förhindra utstötning
för varierande splittermassa och hastighet.
0
100
200
300
400
0 	500 	1 000 	1 500 	2 000
Tjocklek,
 tu [mm]
Splitterhastighet, vs [m/s]
m = 50 g
m = 25 g
m = 5 g
m = 1 g
Figur 5.3 	Minsta tjocklek hos betongkonstruktion som erfordras för att förhindra utstötning för
en varierande splittermassa och hastighet.

-- 7 of 8 --

Beräkning av impulsbelastad konstruktion
8 (8)
B04-201
2013-05-23
5.4 	Jämförelse mellan skadefenomen
En jämförelse mellan olika skadefenomen: penetration, perforation och utstötning visas i Figur 5.4.
Denna jämförelse gäller för ett splitter med massan 50 g där splitterhastigheten varierar från 0 upp
till 2 000 m/s.
Exempelvis fås enligt ekvation (5.3) penetrationsdjupet 140 mm för ett splitter med massan 50 g
och hastigheten 1 500 m/s. Medan erforderlig tjocklek för att förhindra perforation fås till 184 mm
enligt ekvation (5.5) och erforderligt tjocklek för att förhindra utstötning fås till 212 mm enligt
ekvation (5.7).
0
100
200
300
400
0 	500 	1000 	1500 	2000
[mm]
Splitterhastighet, vs [m/s]
utstötning
perforation
penetration
Figur 5.4 	Jämförelse mellan penetrationsdjup och minsta tjocklek hos en betongvägg som
erfordras för att förhindra perforation och utstötning för ett 50 g splitter med
varierande hastighet.

-- 8 of 8 --