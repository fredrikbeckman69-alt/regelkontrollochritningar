---
title: "D02 102   Reducerad Raslast Av Kupolverkan 241101"
category: "d02.-raslast"
originalFile: "contentassets/7ad48cd9f0954868a0d063368abec982/d02.-raslast/d02-102---reducerad-raslast-av-kupolverkan_241101.pdf"
fileType: "PDF"
keywords: ["skyddsrum","pelare","beräkning","raslast","qras","balkar","bärande","figur"]
summary: "Dimensioneringslösning 1 (9) D02-102 2024-11-01 D02-102 Last mot skyddsrum Reducerad raslast av kupolverkan 1 Orientering 2 1.1 Bakgrund 2 1.2 Om detta dokument 3 2 Anvisningar enligt SR 3 3 Beräkningsexempel 4 3.1 Förutsättningar 4 3.2 Bärande en..."
---

Dimensioneringslösning
1 (9)
D02-102
2024-11-01
D02-102 Last mot skyddsrum
Reducerad raslast av kupolverkan
1 Orientering 2
1.1 Bakgrund 2
1.2 Om detta dokument 3
2 Anvisningar enligt SR 3
3 Beräkningsexempel 4
3.1 Förutsättningar 4
3.2 Bärande enhet 5
3.3 Reduktionsfaktor α 6
3.4 Slutlig raslast 6
4 Val av spännvidd b vid komplex geometri 7
5 Revideringslista 9

-- 1 of 9 --

Dimensioneringslösning
2 (9)
D02-102
2024-11-01
1 Orientering
1.1 Bakgrund
I SR ges möjlighet att reducera raslasten med hänsyn till gynnsamma effekter av kupolverkan som
uppstår i rasmassorna, se Figur 1.1 för schematisk illustration av konceptuellt kraftspel. Konceptet
för detta är att en kupolliknande lastbärning bildas i rasmassan mellan två stöd (bärande enheter) i
skyddsrummet, exempelvis mellan väggar eller balkar/pelare. Som en effekt av detta bärs delar av
raslasten direkt till kupolens stöd, vilket medför att raslasten kan reduceras mot bjälklag och
eventuella balkar/pelare placerade däremellan. Stöden ska dock fortsatt dimensioneras för en oredu-
cerad raslast. Lastreduktionens storlek beror på den uppkomna kupolens geometriska utformning
(en brantare kupolform ger ökad lastreduktion), vilket i SR uttrycks som en funktion av takplattans
spännvidd (l och s i Figur 1.1) och den nedfallande byggnadens höjd ovan skyddsrummets tak.
Normalfallet är att stödet för kupolverkan utgörs av skyddsrummets väggar (motsvarar Figur 1.1a),
varvid en reducerad raslast kan användas för dimensionering av bjälklag samt eventuella mellan-
liggande invändiga balkar/pelare. Kupolens stöd kan dock även utgöras av balkar/pelare i kombi-
nation med väggar (motsvarar Figur 1.1b). För en sådan situation kan den reducerade raslasten
emellertid enbart användas för bjälklaget medan den oreducerade raslasten fortsatt ska antas verka
mot både balkar/pelare och väggar. Båda dessa synsätt godtas och vilket som är mest lämpligt att
använda kan variera från fall till fall.
För alternativ enligt Figur 1.1a fås en viss lastreduktion, baserad på spännvidden l, mot både bjälk-
lag och eventuella invändiga balkar och pelare. För alternativ enligt Figur 1.1b är spännvidden s
mellan de bärande enheterna (balkar/pelare och väggar) mindre än spännvidden l i Figur 1.1a, vilket
medför att den reducerade raslasten kan minskas ytterligare. Nackdelen med detta alternativ är dock
att både balkar/pelare och väggar behöver dimensioneras för en oreducerad raslast.
(a)
l
rasmassor
s
rasmassor
Skyddsrum Skydds-
rum
balk
kupolverkan
s 	s
pelare
(b)
Figur 1.1 Schematisk illustration av kupolverkan som bär mellan bärande enheter när dessa
utgörs av (a) skyddsrummets bärande ytterväggar och (b) balkar/pelare och bärande
ytterväggar.

-- 2 of 9 --

Dimensioneringslösning
3 (9)
D02-102
2024-11-01
1.2 Om detta dokument
I detta dokument presenteras anvisningar för hur reducerad raslast vid kupolverkan ska beräknas
enligt SR. Fokus ligger på att schematiskt illustrera hur olika val av bärande enheter påverkar de
raslaster som ska beaktas vid dimensionering. Med beaktande av detta presenteras inte någon detal-
jerad redovisning av förutsättningar eller beräkningar av till exempel ingående rasmassa eller stor-
lek på oreducerad raslast – för information om hur detta kan göras hänvisas istället till andra dimen-
sioneringslösningar.
2 Anvisningar enligt SR
Raslasten qras är en vertikal last som ska antas verka mot skyddsrumstak eller takplatta till en för-
stärkt utrymningsväg. Denna last kan dock reduceras med hänsyn till kupolverkan, varvid reducerad
raslast beräknas som
,r red ras ras	q q	

	= 	
(1)
där αras är en reduktionsfaktor beräknad som
3 1, 0	ras
b
h

	= 	
(2)
varvid b är minsta avståndet mellan bärande enheters centrumlinjer och h är byggnadshöjd, räknat
från takplattans överkant, hos byggnad som gett upphov till raslast qras. Bärande enhet kan utgöras
av såväl bärande väggar (både ytter- och innerväggar) som invändiga balkar/pelare.
Värdet på raslast qras kan variera mot olika delar av skyddsrummet, till exempel på grund av olika
avstånd till en eller flera näraliggande byggnader. Det godtas dock att samma reduktionsfaktor αras
används, oavsett värde på qras, för en given kombination av b och h.

-- 3 of 9 --

Dimensioneringslösning
4 (9)
D02-102
2024-11-01
3 Beräkningsexempel
3.1 Förutsättningar
I detta exempel visas en situation för hur raslasten qras reduceras vid två olika val av bärande enhe-
ter. I Figur 3.1 visas skyddsrummets geometri i plan och sektion, varvid följande värden används:
• Längd hos kortvägg: l = 8 m
• Avstånd mellan balkar/pelare och kortväggar: s = 4 m
• Byggnadshöjd ovan skyddsrumstak: h = 30 m
• Oreducerad raslast: qras = 300 kN/m2
s 	s 	s
l
qras
qras
bjälklag 	balk
A	A
B
B
A-A
B-B
s 	s 	s
l
Plan
pelare
l = 8 m
s = 4 m
h = 30 m
qras = 100 kN/m2
långvägg 	kortvägg
balk	långvägg
Figur 3.1 Geometrisk utformning hos studerat skyddsrum.

-- 4 of 9 --

Dimensioneringslösning
5 (9)
D02-102
2024-11-01
3.2 Bärande enhet
Kupolverkan kan antas verka i två olika riktningar, så som schematiskt illustreras i Figur 3.2:
Alt 1: Bärande enhet = långväggar
• Kupolverkan mellan skyddsrummets långväggar medför följande raslaster:
o Reducerad raslast, qr,red,1, mot bjälklag, balkar/pelare och kortväggar.
o Oreducerad raslast, qras, mot långväggar.
Alt 2: Bärande enhet = balkar/pelare + kortväggar
• Kupolverkan mellan skyddsrummets balkar/pelare och kortväggar medför följande raslaster:
o Reducerad raslast, qr,red,2, mot bjälklag.
o Oreducerad raslast, qras, mot balkar/pelare och kortväggar1.
b1 = l
qbjälkl = qr,red,1
qbalk = qr,red,1
qk.vägg = qr,red,1
ql.vägg = qras
b2 = s
qbjäkl = qr,red,2
qbalk = qras
qk.vägg = qras
ql.vägg = qras
Alt 1 	Alt 2
bärriktning vid
kupolverkan
bärriktning vid
kupolverkan
b2 	b2 	b2
b1
Figur 3.2 Alternativa lastvägar vid kupolverkan med nyttjande av olika bärande enheter. Efter-
som b1 > b2 fås att qr,red,1 > qr,red,2.
1 Mot långväggar verkar både reducerad och oreducerad raslast – reducerad last via lastpåförning från bjälklag och
oreducerad last via lastpåförning från balkar. Det huvudsakliga lastbidraget mot långvägg kommer dock via balkar.

-- 5 of 9 --

Dimensioneringslösning
6 (9)
D02-102
2024-11-01
3.3 Reduktionsfaktor α
Reduktionsfaktorn αras beräknas enligt ekvation (2), varvid b1 = l = 8 m för Alt 1 och b2 = s = 4 m
för Alt 2. Med hn = 30 m fås då att reduktionsfaktorn för Alt 1 och Alt 2 kan beräknas som
1
,1
3 3 8 0,80
30
ras
n
b
h


= = =	
(Alt 1) (3)
2
,2
3 3 4 0, 40
30
ras
n
b
h


= = =	
(Alt 2) (4)
3.4 Slutlig raslast
Utifrån raslast qras = 300 kN/m2 och reduktionsfaktor αras enligt avsnitt 3.3 kan reducerad raslast
qr,red beräknas enligt ekvation (1), vilket ger följande lastvärden:
2
, ,1 ,1 0,80 300 240 kN/m	r red ras ras	q q	

	=  =  =	
(Alt 1) (5)
2
, ,2 ,2 0, 40 300 120 kN/m	r red ras ras	q q	

	=  =  =	
(Alt 2) (6)
Av detta kan det konstateras att Alt 2 ger en reducerad raslast som är hälften så stor som för Alt 1.
Som anges i avsnitt 3.2 kan reducerad raslast i Alt 1 dock användas för både bjälklag, balkar/pelare
och kortväggar medan reducerad raslast i Alt 2 enbart kan användas för bjälklaget.
Sammanfattningsvis fås följande raslaster för de både alternativen:
Alt 1: Bärande enhet = långväggar
• Bjälklag: qbjälkl = qr,red,1 = 240 kN/m2
• Balk/pelare: qbalk = qr,red,1 = 240 kN/m2
• Kortvägg: qk.vägg = qr,red,1 = 240 kN/m2
• Långvägg: ql.vägg = qras = 300 kN/m2
Alt 2: Bärande enhet = balkar + pelare + kortväggar
• Bjälklag: qbjäkl = qr,red,2 = 120 kN/m2
• Balk/pelare: qbalk = qras = 300 kN/m2
• Kortvägg: qk.vägg = qras = 300 kN/m2
• Långvägg: ql.vägg = qras = 300 kN/m2
Båda dessa alternativ godtas. Raslasten får dock enbart reduceras en gång med kupolverkan, det
godtas ej att reducera samma raslast mer än en gång genom att bilda flera kupoler på varandra.

-- 6 of 9 --

Dimensioneringslösning
7 (9)
D02-102
2024-11-01
4 Val av spännvidd b vid komplex geometri
I kapitel 3 ges ett exempel på hur den reducerade raslasten kan bestämmas. I exemplet har det
aktuella skyddsrummet dock en enkel geometri, vilket inte alltid är fallet. I detta kapitel presenteras
därför hur den reducerade raslasten kan bestämmas vid en mer komplex geometri.
I Figur 4.1 visas geometrisk utformning i plan hos två skyddsrum med komplex geometri hos sina
begränsningsväggar. Vidare finns det inne i skyddsrummet även bärande innerväggar, vilka kan
fungera som stöd vid bestämning av reducerad raslast. Här antas vidare att väggöppningarna är
tillräckligt små, dvs. att böppning ≤ max(b / 3, 1,5 m) så att krav i SR på dessa uppfylls.
För att bestämma reduktionsfaktorn α delas skyddsrummen upp i separata rektangulära delar A till
K, så som illustreras i Figur 4.2. För varje del kan därefter en minsta spännvidd bA till bK bestäm-
mas, varvid tillhörande reduktionsfaktorer αA till αK kan bestämmas enligt ekvation (2) för respek-
tive del. Det är således möjligt att ha olika reduktionsfaktorer i olika delar av ett och samma skydds-
rum.
Skyddsrum 2
Skyddsrum 1
Figur 4.1 Geometrisk utformning i plan hos studerade skyddsrum.

-- 7 of 9 --

Dimensioneringslösning
8 (9)
D02-102
2024-11-01
Skyddsrum 1
bC
bE
bD
bB
bA	A
B
D
C
E
bH
bI
bK	
bJ
I
K
H
J
Skyddsrum 2
F 	G bG
bF
Figur 4.2 Uppdelning av skyddsrum i separata rektangulära delar för bestämning av spänn-
vidd b vid beräkning av reducerad raslast.

-- 8 of 9 --

Dimensioneringslösning
9 (9)
D02-102
2024-11-01
5 Revideringslista
Datum Avsnitt Revidering
2024-11-01 D02-102 Första version, anpassad till SR 15 (2024)

-- 9 of 9 --