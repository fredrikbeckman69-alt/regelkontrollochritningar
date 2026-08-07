---
title: "B06 103   Trycklackage In I Byggnad Vid Utvandig Explosion 160617"
category: "b06.-berakningsstod"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b06.-berakningsstod/b06-103---trycklackage-in-i-byggnad-vid-utvandig-explosion_160617.pdf"
fileType: "PDF"
keywords: ["ventil","beräkning","explosion","byggnad","tryck","trycket","inne","detta"]
summary: "Beräkning av impulsbelastad konstruktion 1 (6) B06-103 2016-06-17 B06-103 Beräkningsanvisning för last Tryckläckage in i byggnad vid utvändig explosion Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren. 1 Orientering 1 1.1 Samlingsdo..."
---

Beräkning av impulsbelastad konstruktion
1 (6)
B06-103
2016-06-17
B06-103 Beräkningsanvisning för last
Tryckläckage in i byggnad vid utvändig explosion
Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren.
1 Orientering 1
1.1 Samlingsdokument 1
1.2 Om detta dokument 1
2 Tryckläckage genom öppning 2
2.1 Invändigt tryck vid utvändig explosion 2
2.2 Illustration av reducerat tryck-tidssamband 3
3 Referenser 6
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 Om detta dokument
I detta dokument sammanställs samband för hur trycket inne i en byggnad med öppning påverkas av
en explosion utanför byggnaden.

-- 1 of 6 --

Beräkning av impulsbelastad konstruktion
2 (6)
B06-103
2016-06-17
2 Tryckläckage genom öppning
2.1 Invändigt tryck vid utvändig explosion
För en byggnad med öppningar ges i UFC 3-340-02, DOD (2008), ett uttryck för att beräkna den
tryckuppbyggnad P2 som fås inne i byggnaden av trycket P1 som verkar på dess utsida efter en
utvändig explosion, se Figur 2.1.
V0 A0
Explosions-
centrum	P2 P1
∆P2
Figur 2.1 Invändigt tryck P2 inne i byggnad på grund av utvändigt tryck P2 från en explosion.
Tryckändringen ∆P2 kan enligt detta samband beräknas som
t
V
A
C	P t
t
L
t	t	t

	 		
0
0
2	
(2.1)
där CL är en koefficient för läckagetryck, A0 är läckagearea, Vo är volym i inläckande utrymme och
∆t är studerat tidsinkrement. Koefficienten CL = CL(∆P) beror på tryckskillnaden ∆P enligt
Figur 2.2, där
2	1 P	P	P t	t 	
		
(2.2)
och P1 samt P2 anger trycken på ömse sidor om öppningen under aktuellt tidsinkrement. Det
resulterande tryck-tidssambandet P2(t) i studerad volym fås genom att stegvis räkna fram ∆P2 och
summera dessa över tiden, dvs.
2	2	2 P	P	P t	t	t	t	t

	
	 	 		
(2.3)
Enligt DOD (2008) gäller ekvation (2.1) för små värden på kvoten A0 / V0 samt en tryckskillnad
som understiger omkring 870 kPa (125 psi). Några tydliga anvisningar om vad ”små värden”
innebär ges inte i DOD (2008) men av beskrivningarna framgår att öppningarna utgörs av t.ex.
ventilationshål. Här bedöms det vara rimligt att använda givna uttryck om A0 / V0 ≤ 0,10 m-1.
Vidare införs en begränsning i beräkningarna att
P	Pt	t

	 
2	
(2.4)
dvs. att tryckändringen t+∆t∆P2 inte kan överstiga tryckskillnaden ∆P i studerat tidsinkrement ∆t.
Av DOD (2008) framgår inte tydligt om tryckets infallsriktning har någon betydelse. Här tolkas
detta som att det yttre trycket P1(t) motsvarar det oreflekterade trycket Ps+.

-- 2 of 6 --

Beräkning av impulsbelastad konstruktion
3 (6)
B06-103
2016-06-17
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
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Koefficient för läckagetryck,
 CL [kPa m/ms]
Tryckskillnad,
P [kPa]
Läckagetryck
Series1
 P 	C L
[kPa] [kPa m/ms]
0 	0
31 	21
72 	42
159 	63
269 	84
400 	105
552 	126
703 	147
869 	168
Figur 2.2 Koefficient för läckagetryck CL som funktion av tryckskillnad ∆P på ömse sidor om
öppning. Baserad på DOD (2008).
2.2 Illustration av reducerat tryck-tidssamband
Vid inläckage av tryck i byggnad kommer trycket P2 i den inneslutna volymen V0 gradvis att öka till
dess att det uppnår det, vid tidpunkten, yttre trycket P1, varvid det åter kommer att sjunka tillbaka.
Detta resulterar i en tröghet i trycköverföringen som gör att det resulterande tryck-tidssambandet
inne i byggnaden blir mer utdraget med ett minskat maximaltryck men ökad varaktighet. Detta
illustreras i Figur 2.3 för två olika lastfall när kvoten A0 / V0 varierar mellan 0,02 och 0,10.
Det resulterande maximala trycket, varaktighet samt impulstätheten för exemplifierade fall sam-
manställs i Tabell 2.1. Av detta framgår att trycket P2 inne i byggnaden blir märkbart mindre än det
yttre trycket P1. När lasten är hög men har en kort varaktighet (2 ms) fås att tryckskillnaden blir
mycket stor. För den mer långvariga lasten fås dock att den resulterande impulsen i2 är ungefär lika
stor som applicerad impuls i1. För den kortvariga lasten blir den resulterande impulsen i2 dock
enbart omkring hälften så stor som i1.

-- 3 of 6 --

Beräkning av impulsbelastad konstruktion
4 (6)
B06-103
2016-06-17
0
5
10
15
20
25
30
35
40
45
50
0 	20 	40 	60 	80 	100
Övertryck,
 P [kPa]
Tid, t [ms]
Övertryck inne i byggnad vid läckage
Tryck P1
P2, A / V = 0,10
P2, A / V = 0,05
P2, A / V = 0,02
Yttre last
P1 = 50 kPa
t1 = 20 ms
i1 = 500 Pas
0
5
10
15
20
25
30
35
40
45
50
0 	20 	40 	60 	80 	100
Övertryck,
 P [kPa]
Tid, t [ms]
Övertryck inne i byggnad vid läckage
Tryck P1
P2, A / V = 0,10
P2, A / V = 0,05
P2, A / V = 0,02
Yttre last
P1 = 500 kPa
t1 = 2 ms
i1 = 500 Pas
Figur 2.3 Resulterande Tryck P2 inne i byggnad jämfört med tryck P1 som verkar på
byggnadens utsida vid användning av uttryck enligt ekvation (2.1). Kvoten A0 /V0
varierar mellan 0,02 och 0,10. Trycklast P1 och P2 sammanfattas i Tabell 2.1.
P1 = 500 kPa

-- 4 of 6 --

Beräkning av impulsbelastad konstruktion
5 (6)
B06-103
2016-06-17
Tabell 2.1 Resulterande maximalt tryck, varaktighet samt impulstäthet utanför respektive inne i
byggnad för olika kombinationer av last öppningsarea A0 och volym V0.
Last utanför byggnad Last inne i byggnad
A0 /V0
[m-1]
P1
[MPa]
t1
[ms]
i1
[Pas]
P2
[MPa]
t2 1)
[ms]
i2
[Pas]
0,10 50 20 500 19,1 102 514
0,05 50 20 500 12,2 178 511
0,02 50 20 500 5,9 369 508
0,10 500 2 500 15,2 86 242
0,05 500 2 500 7,7 151 237
0,02 500 2 500 3,1 307 231
1) Tidpunkt när trycket understiger 0,05 kPa.

-- 5 of 6 --

Beräkning av impulsbelastad konstruktion
6 (6)
B06-103
2016-06-17
3 Referenser
DOD (2008): Structures to Resist the Effects of Accidental Explosions. UFC 3-340-02,
Departement of Defense, USA.

-- 6 of 6 --