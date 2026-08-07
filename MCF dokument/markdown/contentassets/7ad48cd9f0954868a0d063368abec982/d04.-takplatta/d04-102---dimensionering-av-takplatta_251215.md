---
title: "D04 102   Dimensionering Av Takplatta 251215"
category: "d04.-takplatta"
originalFile: "contentassets/7ad48cd9f0954868a0d063368abec982/d04.-takplatta/d04-102---dimensionering-av-takplatta_251215.pdf"
fileType: "PDF"
keywords: ["skyddsrum","pelare","betong","armering","beräkning","kontroll","stöd","strimla"]
summary: "Dimensioneringslösning 1 (28) D04-102 2025-12-15 D04-102 Lastkapacitet hos skyddsrum Dimensionering av takplatta 1 Orientering 2 1.1 Bakgrund 2 1.2 Om detta dokument 2 2 Anvisningar enligt SR 3 3 Beräkningsmodell, Strimlemetoden 4 3.1 Koncept 4 3...."
---

Dimensioneringslösning
1 (28)
D04-102
2025-12-15
D04-102 Lastkapacitet hos skyddsrum
Dimensionering av takplatta
1 Orientering 2
1.1 Bakgrund 2
1.2 Om detta dokument 2
2 Anvisningar enligt SR 3
3 Beräkningsmodell, Strimlemetoden 4
3.1 Koncept 4
3.2 Moment i strimla 6
3.2.1 Medelvärde 6
3.2.2 Fördelning inom strimla 7
3.3 Tvärkraft i strimla 9
3.3.1 Medelvärde 9
3.3.2 Fördelning inom strimla 9
3.4 Sammanställda uttryck 10
4 Beräkningsexempel 11
4.1 Förutsättningar 11
4.2 Lastkombinering 12
4.3 Lastfördelning i takplatta 13
4.3.1 Modell 13
4.3.2 Moment 14
4.3.3 Tvärkraft 15
4.3.4 Sammanställning av lastfördelning 17
4.4 Dimensionering 18
4.4.1 Förutsättningar 18
4.4.2 Erforderlig armeringsmängd 19
4.4.3 Momentkapacitet 20
4.4.4 Tvärkraftskapacitet 21
4.4.5 Kontroll av momentkapacitet 22
4.4.6 Kontroll av tvärkraftskapacitet 24
4.5 Resultat 26
5 Revideringslista 28

-- 1 of 28 --

Dimensioneringslösning
2 (28)
D04-102
2025-12-15
1 Orientering
1.1 Bakgrund
I SR ges ställs bland annat krav på ingående materialegenskaper, minsta och största armerings-
innehåll samt tillåtet förhållande av momentkapacitet mellan stöd och fält i en takplatta. Dessa krav
ställs för att säkerställa en seg och robust konstruktion vid belastning av dynamiska laster så som
vapenlast och raslast. Vid dimensionering idag används normalt finita elementmetoden (FEM) med
antagande om linjärelastisk respons. Det är dock även möjligt att nyttja gynnsam inverkan av plas-
tiska omlagringar, vilket leder till ett mer effektivt utnyttjande av konstruktionens verkliga bärför-
måga.
1.2 Om detta dokument
I detta dokument presenteras anvisningar för dimensionering av takplattan i ett skyddsrum utsatt för
vapenlast och raslast. Fokus ligger på att illustrera följande delar:
• Beräkning av moment och tvärkrafter med strimlemetoden.
• Lastkombinering av statiska och dynamiska laster.
• Val av momentfördelning och dess inverkan på tvärkraftsfördelningen.
• Dimensionering med hänsyn till moment och tvärkraft.
I detta dokument behandlas enbart laster mot skyddsrum kopplade till dess belastning i en excep-
tionell dimensioneringssituation. Någon inverkan av krav i bruksgränstillstånd ingår inte.

-- 2 of 28 --

Dimensioneringslösning
3 (28)
D04-102
2025-12-15
2 Anvisningar enligt SR
Nedan sammanställs de huvudsakliga krav som ställs på utformning av takplatta i skyddsrum:
• Betong ska vara i lägst hållfasthetsklass C25/30 och högst i hållfasthetsklass C50/60.
• Armering som medverkar i lastupptagning från vapenlast eller raslast ska utgöras av kam-
stänger av varmvalsat stål i klass C. Armeringen får inte svetsas.
• Armeringens dimensioneringsvärde bestäms som
1, 0	yd yk	f f	= 	
(1)
där fyd och fyk är armeringens dimensionerande respektive karakteristiska sträckgräns.
• Betongens tvärkraftskapacitet bestäms som
, , , ,	1,1	Rd c dyn Rd c sta	V V	= 	
(2)
där VRd,c,dyn och VRd,c,sta är betongens dynamiska respektive statiska tvärkraftskapacitet.
• I balkar och plattor upplagda på linjestöd ska armeringsinläggningen väljas så att moment-
kapaciteten i stöd inte blir mer än 50% större än momentkapaciteten i fält.
• För pelardäck ska armeringsinläggning väljas så att genomsnittlig momentkapacitet vid stöd
(strimla över pelare och mellan pelare) inte överstiger momentkapaciteten i fält.
• Maximalt centrumavstånd mellan parallella stänger är smax = 200 mm och för böjarmering
ska  ≥ 10 mm uppfyllas. Avkortning av fältarmering godtas inte.
• För att beakta risk för utstötning i skyddsrum ska täckande betongskikt för det yttersta arme-
ringslagret uppfylla c ≤ 50 mm.
• Skyddsrumtakets tjocklek ska uppfylla ttak ≥ 350 mm i skyddsrum utan ovanliggande bygg-
nad i betong och ttak ≥ 300 mm i övriga skyddsrum. Armering ska placeras i takplattans
över- och underkant.
• Armeringsinnehållet ρs (%) ska begränsas som
,min
26
max
0,14
ctm
yk	s
f
f	
 
 	
= 


(3)
,max 20 cd
s
yd
f
f

	= 	
(4)
där fctm är betongens medeldraghållfasthet, fyk är armeringens karakteristiska sträckgräns, fcd
är betongens dimensionerande tryckhållfasthet och fyd är armeringens dimensionerande
sträckgräns.

-- 3 of 28 --

Dimensioneringslösning
4 (28)
D04-102
2025-12-15
3 Beräkningsmodell, Strimlemetoden
3.1 Koncept
Det finns olika sätt på vilka moment och tvärkrafter verkande i en platta kan beräknas. Det domine-
rande verktyget bland konstruktörer idag utgörs av finita element metoden (FEM) med antagande
av linjärelastisk respons. Det är dock även möjligt att göra beräkningar på annat sätt, något som kan
vara en fördel för att enklare nyttja omfattande plastiska kraftomlagringar i plattan. I litteraturen
finns det olika sätt på vilka lastfördelningen i en platta kan beräknas. I detta dokument används den
så kallade strimlemetoden utvecklad av Hillerborg (1996)1 och återgiven i Engström (2014)2. I detta
dokument återges enbart valda delar av beräkningsmetoden och för mer detaljerad information om
denna hänvisas därför till någon av dessa båda referenser.
Strimlemetoden är en undre gränsmetod (dvs. beräkning på säker sida) för plastisk analys av arme-
rade betongplattor som hjälper konstruktören att bättre förstå jämviktsvillkor och responsen hos
dessa. Eftersom det är en plastisk modell så står det även konstruktören fritt att, baserat på jämvikts-
villkor, utföra omfördelningar i den belastade plattan. Detta gör metoden särskilt lämplig att
använda vid hantering av exceptionella lastsituationer, så som vapenlast eller raslast.
Nedan listas de grundläggande stegen i strimlemetoden:
• Vridmoment bortses från i alla delar av plattan.
• Plattan delas in i strimlor i två huvudriktningar.
• Lasten på ett element fördelas mellan två vinkelrätt placerade strimlor.
• Respektive strimla dimensioneras som en tvåsidigt upplagd plattstrimla (balk).
Det finns olika sätt som lasten kan fördelas mellan olika strimlor, se Figur 3.1 för olika koncept för
hur detta kan göras. I Figur 3.1b efterliknar lastfördelningen ”naturliga” lastdelande linjer (blå-
streckade linjer), längs vilka tvärkraften är noll, och i detta dokument används fortsättningsvis detta
koncept.
I Figur 3.1b är de lastdelande linjerna i hörn inritade med varierande vinklar α. Storleken på dessa
vinklar påverkas av inspänningsförhållandena vid plattans ränder – en styvare inspänning ger en
större vinkel3. För ett fall med samma typ av randvillkor längs samtliga ränder, till exempel fritt
upplagd eller fast inspänd, så kan dock α = 45° antas.
1 Hillerborg, A. (1996): Strip method design handbook. E & Fn Spon, 1996.
2 Engström B. (2014): Design and analysis of slabs and flat slabs. Chalmers tekniska högskola, Konstruktionsteknik,
Rapport 2011-5 (edition 2014), Göteborg.
3 En styvare inspänning drar till sig mer last och eftersom vinklarna beskriver lastdelande linjer där tvärkraften är noll så
innebär en ökad styvhet att det belastade området i plattan som går till aktuellt stöd ökar. Det är även möjligt att i efter-
hand justera för att beakta olika styvheter i plattans upplag.

-- 4 of 28 --

Dimensioneringslösning
5 (28)
D04-102
2025-12-15
B
bx 	bx
las
bärri
Last i x-riktning: Strimla B
q
0,5

q
0,5

q
q
0,5

q
0,5

q
0
A
0
0,5

q
0,5

q
0
0,5

q
0,5

q
q	lA
lB
q
by
by
bx 	bx
q 	q
0,5q 	0,5q
mitt
kant
x
y
Last i y-riktning: Strimla A
0,5q
0,5q
mitt 	kant
q
(a)
B
las
bärri
Last i x-riktning: Strimla B
q 	q	0
A
q	lA
lB
q
q	x
y
Last i y-riktning: Strimla A
q q
q
bx 	bx	l’B = lB - 2

bx
l’B/lB
q
(b)
Figur 3.1 Schematisk illustration av strimlemetoden med olika koncept för uppdelning av
platta i vinkelrätt placerade strimlor i vilka lasten fördelas. Uppdelning i (a) 3+3
strimlor med rektangulära delområden och (b) två strimlor med triangulära och tra-
petsformade delområden.

-- 5 of 28 --

Dimensioneringslösning
6 (28)
D04-102
2025-12-15
3.2 Moment i strimla
3.2.1 Medelvärde
Med uppdelning enligt Figur 3.1b fås enbart två strimlor, i vilka strimlans medelmoment mm kan
beräknas via momentjämvikt. En statiskt bestämd strimla erhålls genom att storleken på eventuella
stödmoment, enligt vissa riktlinjer4, väljs av konstruktören. I detta dokument utförs dessa beräk-
ningar dock genom att ansätta att stödmomenten ms,1 = ms,2 = 0 kNm/m. Därmed fås det ”totala”
moment mm som tillsammans ska bäras av strimlan via bidrag från ms,1 och ms,2 i stöd samt mf i fält
så som schematiskt visas i Figur 3.2.
Utgående från lastuppställning och beteckningar i Figur 3.1b kan medelmomentet i strimla A beräk-
nas som
( 	) 	( 	)
2 2
,
0,5 0,5 ... 3 2
8 2 3 24
red A A A A
A m red
q l l l q l
m q q	

   
= + −   = = − 	
(5)
där
A
B
l
l

=	
(6)
och i strimla B som
2
,
0,5 0,5
2 3 24
A A A
B m
l l q l
m q   
=   =	
(7)
q
ms,2	ms,1
l
l / 2
v = 0 vstöd,2
vstöd,1
mm = q·l2/8
ms,2
ms,1
mf
lastdel-
ningslinje
Figur 3.2 Moment- och tvärkraftsfördelning för plattstrimla A i tvåsidigt upplagd plattstrimla
belastad med en jämnt utbredd last.
4 I strimlemetoden ges anvisningar för val av fördelning mellan stöd- och fältmoment. Motsvarande anvisningar ges
även i SR, se avsnitt 2. Dessa anvisningar skiljer sig åt men vid dimensionering i ett skyddsrum ska SR följas.

-- 6 of 28 --

Dimensioneringslösning
7 (28)
D04-102
2025-12-15
3.2.2 Fördelning inom strimla
I strimlemetoden beräknas det medelmoment som verkar i strimlan. Momentet är dock normalt
fördelat ojämnt inom strimlan, vilket kan beaktas genom att låta momentet mmitt i strimlans mitt och
mkant i dess kant vara olika. Denna fördelning kan väljas på olika sätt men i Hillerborg (1996)
föreslås en fördelning där
0,5	kant
mitt
m
m =	
(8)
Det totala momentet Mtot i en strimla beräknas som
tot mitt mitt kant kant	M m b m b	=  + 	
(9)
där bmitt och bkant är den totala bredden i mittdel respektive plattans två kantdelar. Medelmomentet
kan därmed beräknas som
 		
0,5	mitt mitt kant	tot mitt mitt kant kant
m
tot tot tot
m b b	M m b m b
m b b b
 + 	 + 
= = =	
(10)
där
tot mitt kant	b b b	= +	
(11)
Kantstrimlans bredd kan väljas på olika sätt men ett lämpligt sätt är att basera den på den geomet-
riska utformningen hos lastdelarna så som illustreras i Figur 3.3. Utgående från denna figur, i vilken
lastdelarna antas ha en lutning på 45°, fås följande:
• Strimla A
o bA,kant = 20,5lA /2 = 0,5lA
o bA,mitt = lB – bA,kant = lB – 0,5lA
• Strimla B
o bB,kant = 20,5lA /2 = 0,5lA
o bB,mitt = lA – bA,kant = 0,5lA
Insatt i ekvation (10) fås då, med nyttjande av att β = lA / lB enligt ekvation (6), ett medelmoment i
strimla A som
 	 	( 	)	, ,
, ,
0,5 0,5 0,5 0, 25 1
0,5 0,5 4
A mitt B A A A mitt B A
A m A mitt
B A A B
m l l l m l l
m m
l l l l
	 −  +    −   
= = = − 	 
−  +   
(12)
och i strimla B som
 		,
, ,
0,5 0,5 0,5 3
0,5 0,5 4
B mitt A A
B m B mitt
A A
m l l
m m
l l
  +  
= = 
 + 
(13)

-- 7 of 28 --

Dimensioneringslösning
8 (28)
D04-102
2025-12-15
lA
lB
lastdel-
ningslinje
A
B
α = 45°
0,5lA 	0,5lA
lA
lB
A
0,25lA 	0,25lA
mitt	kant 	kant
0,25lA
lB
B
kant
kant
mitt
0,25lA
lastens
bärriktning
Strimla A 	Strimla B
Figur 3.3 Schematisk illustration av strimlemetoden med uppdelning av strimlor i mitt- och
kantstrimlor.
Utgående från detta kan sedan momenten i mitt- och kantstrimla i strimla A uttryckas som
, ,
4
4
A mitt A m	m m

= 
−
(14)
, , ,
2
0,5 4
A kant A mitt A m	m m m

=  = 
−
(15)
och i strimla B som
, ,
4
3
B mitt B m	m m	= 	
(16)
, , ,
2
0,5 3
B kant B mitt B m	m m m	=  = 	
(17)
varvid mA,m och mB,m är medelmomentet för strimla A respektive B enligt avsnitt 3.2.1.

-- 8 of 28 --

Dimensioneringslösning
9 (28)
D04-102
2025-12-15
3.3 Tvärkraft i strimla
3.3.1 Medelvärde
Beräkning av medeltvärkraft i strimlan följer samma koncept som används för medelmoment i
avsnitt 3.2.1. Utgående från lastuppställning och beteckningar i Figur 3.1b kan tvärkraften vid stöd
(stödreaktion) i strimla A, med nyttjande av att β = lA / lB enligt ekvation (6), beräknas som
( 	) 	( 	)	
, ,
0,5
0,5 ... 2
2 4
A A
A stöd m red A red
l q l
v q l q q	

 
=   + −  = = − 	
(18)
och i strimla B som
, ,
0,5
2 4
A A
B stöd m
l q l
v q  
=  =	
(19)
3.3.2 Fördelning inom strimla
Samma koncept som används vid fördelning av medelmoment mm i avsnitt 3.2.2 kan även användas
vid fördelning av medeltvärkraft vm inom en strimla. Förhållandet mellan tvärkraft vmitt i strimlans
mitt och vkant i dess kant kan därmed uttryckas som
,
,
0,5stöd kant
stöd mitt
v
v =	
(20)
På samma sätt som visas för momentet i avsnitt 3.2.2 kan därmed tvärkraften i mitt- och kantstrimla
i strimla A uttryckas som
, , , ,
4
4
A stöd mitt A stöd m	v v

= 
−
(21)
, , , ,
2
4
A stöd kant A stöd m	v v

= 
−
(22)
i strimla B som
, ,
4
3
B mitt B B m	v v v	= = 	
(23)
, ,
2
0,5 3
B kant B B m	v v v	=  = 	
(24)
varvid vA,m och vB,m är medeltvärkraften för strimla A respektive B.

-- 9 of 28 --

Dimensioneringslösning
10 (28)
D04-102
2025-12-15
3.4 Sammanställda uttryck
I avsnitt 3.2 och 3.3 härleds uttryck för hur moment och tvärkraft i strimlor i en fyrsidigt upplagd
platta kan beräknas med strimlemetoden för ett fall där lutningen på lastdelningslinjerna är α = 45°.
Kombineras uttryck för medelvärde och mitt- respektive kantstrimla fås samband enligt Tabell 3.1.
Dessa samband ges som en faktor ζ och λ på momentet (qlA2/8) respektive stödreaktionen (qlA/2)
för en tvåsidigt upplagd plattstrimla belastad med en jämnt utbredd last.
Tabell 3.1 Sammanställning av samband för beräkning av moment och tvärkraft i mitt- och
kantdel hos strimla A och B i en fyrsidigt upplagd platta enligt Figur 3.1b med
längdkvot β = lA / lB. Dessa uttryck förutsätter att lastlinjernas vinkel α = 45°.
Strimla
Moment,
2
#, 8
A
i
q l
m	


= 	 Tvärkraft,	#, , 2
A
stöd i
q l
v	


= 
Mitt Kant Mitt Kant
A	,
4 3 2
3 4
A mitt



−
=  −,
2 3 2
3 4
A kant



−
=  −,
4 2
4
A mitt

 
−
= −,
2
4
A kant

 
−
= −
B	,
4
9
B mitt	

	=	,
2
9
B kant	

	=	,
2
3
B mitt	

	=	,
1
3
B kant	

	=
Figur 3.4 Sammanställning av responsfaktorer ζ och λ för beräkning av moment och tvärkraft i
mitt- och kantdel hos strimla A och B i en fyrsidigt upplagd platta enligt Figur 3.1b
med längdkvot β = lA / lB. Uttryck ges i Tabell 3.1.
lA
lB

-- 10 of 28 --

Dimensioneringslösning
11 (28)
D04-102
2025-12-15
4 Beräkningsexempel
4.1 Förutsättningar
I detta beräkningsexempel utgås från Skyddsrum A som behandlas i D02-103. Information om
skyddsrummets geometriska utformning och verkande laster hämtas från detta dokument, se
Figur 4.1 för en sammanställning. Vidare utgås här från att skyddsrummets takplatta är 0,35 m
tjock. Två fall behandlas här – skyddsrum utan bärande innervägg (Skyddsrum A1) och skyddsrum
med bärande innervägg (Skyddsrum A2). Följande geometri och laster gäller:
• Skyddsrum A1: (skyddsrum utan bärande innervägg)
o tv,y = 0,35 m, tt = 0,35 m
o lA1,1 = 13,50 m → Spännvidd: bA1,1 = 13,85 m
o lA1,2 = 8,00 m → Spännvidd: bA1,2 = 8,35 m
o Vapenlast: qvapen,1 = 50 kN/m2
o Raslast: qras = qr,red = 114 kN/m2
• Skyddsrum A2: (skyddsrum med bärande innervägg)
o tv,y = 0,35 m, tv,i = 0,16 m, tt = 0,35 m
o lA2,1 = 13,5 m → spännvidd: bA2,1 = 13,85 m
o lA2,2a = lA2,2b = 3,92 m → spännvidd: bA2,2a = bA2,2b = 4,175 m
o Vapenlast: qvapen,1 = 50 kN/m2
o Raslast: qras = 114 kN/m2, qr,red = 89 kN/m2
S
1 p
lA,12	lA1,1
lA1,2
Skyddsrum A1
tv,y
tv,y
lA2,1
lA2,2b
Skyddsrum A2
tv,y
tv,y lA2,2a
tv,i
innervägg
bA1,2
bA2,2a
bA2,2b
bA1,1 	bA2,1
(a) 	(b)
Figur 4.1 Geometrisk utformning hos studerat skyddsrum: (a) Skyddsrum A1 (utan bärande
innervägg), (b) Skyddsrum A2 (med bärande innervägg).

-- 11 of 28 --

Dimensioneringslösning
12 (28)
D04-102
2025-12-15
Övrig last mot skyddsrummets takplatta hämtas från D02-103 och listas nedan:
• Egentyngd takplatta: gtak = 0,3525 = 8,8 kN/m2
• Egentyngd innerväggar: gv,i = 0,5 = 0,5 kN/m2
• Nyttig last mot skyddsrumstak: qn,k = 2,0 kN/m2
4.2 Lastkombinering
Total last mot skyddsrum bestäms via lastkombinering enligt Eurokod 0. Med detta kan den totala
lasten Qtot skrivas som
, 1,1 , 2, ,
1 1
tot k j d k i i k i
j i
Q G A Q Q	

	
 
= + +  + 	 	
(25)
där Gk är karakteristisk last av egentyngd, Ad är dimensionerande olyckslast (vapen- eller raslast
enligt SR) och Qk är karakteristisk variabel last, varvid ψ1 5 och ψ2 är lastfaktorer. För här studerad
byggnad antas våningsplan ovanför skyddsrummet bestå av bostäder (kategori A) med ψ1 = 0,5 och
ψ2 = 0,3.
Den dimensionerande vid vapenlast kan nu beräknas som
( 	)
2
, 8,8 0,5 50 0,5 2, 0 61 kN/m	d vapen	q = + + +  	
(26)
Inverkan av egentyngd innerväggar och nyttig last mot skyddsrumstak har redan beaktats vid beräk-
ning av raslasten, se D02-103, varför den dimensionerande lasten vid reducerad raslast i Skydds-
rum A1 kan beräknas som
2
, _ , 1 8,8 114 123 kN/m	d ras red A	q = + 	
(27)
och i Skyddsrum A2
2
, _ , 2 8,8 89 98 kN/m	d ras red A	q = + 	
(28)
En jämförelse mellan vapenlast och raslast visar att den senare är större och fortsättningsvis beaktas
därför enbart raslasten.
5 Vapenlast- och raslast kan betraktas som kända olyckslaster och därför används lastfaktor ψ1,1 för den dominerande
variabla lasten Qk,1.

-- 12 of 28 --

Dimensioneringslösning
13 (28)
D04-102
2025-12-15
4.3 Lastfördelning i takplatta
4.3.1 Modell
Baserat på anvisningar i avsnitt 4.1 kan modell för skyddsrummets takplatta tas fram i enlighet med
strimlemetoden. I Figur 4.2 visas två fall, en utan bärande innervägg (Skyddsrum A1) och en med
(Skyddsrum A2). För respektive fall delas takplattan upp i strimlor för respektive huvudriktning
varvid beräkning utförs för en jämnt utbredd last qd,ras enligt avsnitt 4.2:
• Skyddsrum A1: (skyddsrum utan bärande innervägg)
o Strimla A1: lA1 =8,35 m
o Strimla B1: lB1 =13,85 m
o Jämnt utbredd last: qd,ras,A1 = 123 kN/m2
• Skyddsrum A2: (skyddsrum med bärande innervägg)
o Strimla A2: lA2 = 4,175 m
o Strimla B2: lB2 = 13,85 m
o Jämnt utbredd last: qd,ras,A2 = 98 kN/m2
Skyddsrum A1 	Skyddsrum A2
lA1
lA2
lA2
lB1 	lB2
lastdel-
ningslinje
A1
B1
lastens
bärriktning
A2
innervägg
(a) 	(b)
B2
B2
α = 45°
0,5lA1 	0,5lA1 	0,5lA2 	0,5lA2
Figur 4.2 Modell med strimlemetoden i (a) Skyddsrum A1 (utan bärande innervägg) och i
(b) Skyddsrum A2 (med bärande innervägg).

-- 13 of 28 --

Dimensioneringslösning
14 (28)
D04-102
2025-12-15
4.3.2 Moment
Här utgås från samband givna i avsnitt 3.2, varvid beräkning görs för Skyddsrum A1 och A2:
Skyddsrum A1
• En längdkvot β mellan plattans sidor beräknas enligt ekvation (6) som
1
1
1
8,35 0, 603
13,85
A
A
B
l
l

	= = =	
(29)
• Medelmomentet i strimla A1 och B1 beräknas enligt ekvation (5) respektive (7) som
( 	) 	( 	)
2 2
, _ , 1 1
1, 1
123 8,35
3 2 3 2 0, 603 641 kNm/m
24 24
d ras red A A
A m A
q l
m	

 
= −  = −   =	
(30)
2 2
, _ , 1 1
1,
123 8,35 357 kNm/m
24 24
d ras red A A
B m
q l
m  
= = =	
(31)
• Detta moment fördelas i sin tur till en mitt- och en kantdel med en inbördes fördelning
mkant = 0,5mmitt enligt ekvation (8). Dessa moment kan beräknas enligt ekvation (14) till (17)
som
1, 1,
1
4 4 641 755 kNm
4 4 0, 603
A mitt A m
A
m m

=  =  =
− −
(32)
1, 1,
1
2 2 641 378 kNm
4 4 0, 603
A kant A m
A
m m

=  =  =
− −
(33)
1, 1,
4 4 357 476 kNm
3 3
B mitt B m	m m	=  =  =	
(34)
1, 1,
2 2 357 238 kNm
3 3
B kant B m	m m	=  =  =	
(35)
Skyddsrum A2
• En längdkvot β mellan plattans sidor beräknas enligt ekvation (6) som
2
2
2
4,175 0,301
13,85
A
A
B
l
l

	= = =	
(36)
• Medelmomentet i strimla A2 och B2 beräknas enligt ekvation (5) respektive (7) som
( 	) 	( 	)
2 2
, _ , 2 2
2, 2
98 4,175
3 2 3 2 0,301 171 kNm/m
24 24
d ras red A A
A m A
q l
m	

 
= −  = −   =	
(37)
2 2
, _ , 2 2
2,
98 4,175 71 kNm/m
24 24
d ras red A A
B m
q l
m  
= = =	
(38)

-- 14 of 28 --

Dimensioneringslösning
15 (28)
D04-102
2025-12-15
• Detta moment fördelas i sin tur till en mitt- och en kantdel med en inbördes fördelning
mkant = 0,5mmitt enligt ekvation (8). Dessa moment kan då beräknas enligt ekvation (14) till
(17) som
2, 2,
2
4 4 171 185 kNm/m
4 4 0,301
A mitt A m
A
m m

=  =  =
− −
(39)
2, 2,
2
2 2 171 93 kNm/m
4 4 0,301
A kant A m
A
m m

=  =  =
− −
(40)
2, 2,
4 4 71 95 kNm
3 3
B mitt B m	m m	=  =  =	
(41)
2, 2,
2 2 71 48 kNm
3 3
B kant B m	m m	=  =  =	
(42)
4.3.3 Tvärkraft
Här utgås från samband givna i avsnitt 3.2, varvid beräkning görs för Skyddsrum A1 och A2:
Skyddsrum A1
• En längdkvot mellan plattans sidor fås enligt ekvation (29) som βA1 = 0,603.
• Medeltvärkraften vid stöd i strimla A1 och B1 beräknas enligt ekvation (18) respektive (19)
som
( 	) 	( 	)
, _ , 1 1
1, , 1
123 8,35
2 2 0, 603 359 kN/m
4 4
d ras red A A
A stöd m A
q l
v	

 
= −  = −  =	
(43)
, _ , 1 1
1, ,
123 8,35 257 kN/m
4 4
d ras red A A
B stöd m
q l
v  
= = =	
(44)
• Denna tvärkraft fördelas i sin tur till en mitt- och en kantdel med en inbördes fördelning
vkant = 0,5vmitt enligt ekvation (20). Dessa tvärkrafter kan då beräknas enligt ekvation (21)
till (24) som
1, , 1, ,
1
4 4 359 423 kN/m
4 4 0, 603
A stöd mitt A stöd m
A
v v

=  =  =
− −
(45)
1, , 1, ,
1
2 2 369 212 kN/m
4 4 0, 603
A stöd kant A stöd m
A
v v

=  =  =
− −
(46)
1, , 1, ,
4 4 257 343 kN/m
3 3
B stöd mitt B stöd m	v v	=  =  =	
(47)
1, , 1, ,
2 2 257 172 kN/m
3 3
B stöd kant B stöd m	v v	=  =  =	
(48)

-- 15 of 28 --

Dimensioneringslösning
16 (28)
D04-102
2025-12-15
Skyddsrum A2
• En längdkvot mellan plattans sidor fås enligt ekvation (36) som βA2 = 0,301.
• Medeltvärkraften vid stöd i strimla A2 och B2 beräknas enligt ekvation (18) respektive (19)
som
( 	) 	( 	)
, _ , 2 2
2, , 2
98 4,175
2 2 0,301 174 kN/m
4 4
d ras red A A
A stöd m A
q l
v	

 
= −  = −  =	
(49)
, _ , 2 2
2, ,
98 4,175 103 kN/m
4 4
d ras red A A
B stöd m
q l
v  
= = =	
(50)
• Denna tvärkraft fördelas i sin tur till en mitt- och en kantdel med en inbördes fördelning
vkant = 0,5vmitt enligt ekvation (20). Dessa tvärkrafter kan då beräknas enligt ekvation (21)
till (24) som
2, , 2, ,
2
4 4 174 188 kN/m
4 4 0,301
A stöd mitt A stöd m
A
v v

=  =  =
− −
(51)
2, , 2, ,
2
2 2 174 94 kN/m
4 4 0,301
A stöd kant A stöd m
A
v v

=  =  =
− −
(52)
2, , 2, ,
4 4 103 138 kN/m
3 3
B stöd mitt B stöd m	v v	=  =  =	
(53)
2, , 2, ,
2 2 103 69 kN/m
3 3
B stöd kant B stöd m	v v	=  =  =	
(54)

-- 16 of 28 --

Dimensioneringslösning
17 (28)
D04-102
2025-12-15
4.3.4 Sammanställning av lastfördelning
En sammanställning av erhållna moment och tvärkrafter i Skyddsrum A1 och A2 ges i Tabell 4.1.
Av detta kan konstateras att erhållna moment och tvärkrafter är mycket stora i Skyddsrum A1, dvs.
det skyddsrum som inte har någon bärande innervägg. Detta är en effekt av den långa spännvidden
lA1 i takplattans korta bärriktning, vilken både påverkar möjligheten att nyttja en reducerad vapen-
last med hänsyn till kupolverkan i rasmassorna samt på de moment och tvärkrafter som denna last
ger upphov till.
För att hantera uppkomna moment och tvärkrafter i Skyddsrum A1 är det inte rimligt att använda
sig av den plattjocklek på 0,35 m som det utgås ifrån i avsnitt 4.1. Även med en väsentligt ökad
plattjocklek blir det dock besvärligt att hantera erhållna moment och tvärkrafter. En rimlig lösning
är därför att justera det statiska systemet så att pålagda laster kan tas upp på ett alternativt, mer
effektivt, sätt. Detta är också vad som görs i Skyddsrum A2. Genom införandet av en bärande inner-
vägg halveras takplattans spännvidd i plattans korta bärriktning, vilket ger dels en reducerad raslast,
dels mer gynnsamma förutsättningar för att förhindra uppkomsten av stora moment och tvärkrafter.
För den fortsatta dimensioneringen av takplattan utgås därför enbart från Skyddsrum A2.
Tabell 4.1 Sammanställning av beräknade moment och tvärkrafter för takplatta i Skyddsrum A1
och A2. På grund av stora moment och tvärkrafter i Skyddsrum A1 beaktas fortsätt-
ningsvis enbart Skyddsrum A2.
Raslast Moment Tvärkraft
Skyddsrum qd,ras qd,ras_red Strimla mm mmitt mkant vstöd,m vstöd,mitt vstöd,kant
[kN/m2] [kN/m2] [kNm/m] [kNm/m] [kNm/m] [kN/m] [kN/m] [kN/m]
A1 123 123
A 641 755 378 369 432 212
B 357 476 238 257 343 172
A2 123 98
A 171 185 93 174 188 94
B 71 95 48 103 138 69
För skyddsrum A2 fås följande bredder på ingående delar:
• Strimla A
o Mittdel: bmitt = 13,85-0,54,175 ≈ 11,75 m
o Kantdel: bkant,1 = bkant,2 = 0,254,175 ≈ 1,05 m
• Strimla B
o Mittdel: bmitt = 0,54,175 ≈ 2,10 m
o Kantdel: bkant,1 = bkant,2 = 0,254,175 ≈ 1,05 m

-- 17 of 28 --

Dimensioneringslösning
18 (28)
D04-102
2025-12-15
4.4 Dimensionering
4.4.1 Förutsättningar
Moment- och tvärkraftskapacitet beräknas enbart för takplatta i Skyddsrum A2, se avsnitt 4.3.4 för
bakomliggande resonemang. Följande förutsättningar gäller för studerad takplatta:
• Täckande betongskikt
o Vidhäftning: cmin,b =
 (
 ≤ 12 mm antas här)
o Miljöpåverkan: XC1, L50 → cmin,dur = 10 mm
o Tolerans: Δcdev = 10 mm
o Totalt: cnom = max(cmin,b, cmin,dur) + Δcdev = 12 + 10 = 22 mm (≤ 50 mm, ok)
• Material
o Betong C25/30: fck = 25 MPa, γC = 1,2 → fcd = 20,8 MPa, fctm = 2,6 MPa
o Armering K500C: fyk = 500 MPa, γS = 1,0 → fyd = 500 MPa, Es = 200 GPa
• Geometri
o Takplatta, tjocklek: htak = 350 mm
o Yttervägg, tjocklek: hvägg = 350 mm
o Centrum armering till fri kant
▪ Yttre lagret (Strimla A): c’A = cnom + 0,5 = 22 + 0,512 = 28 mm
▪ Inre lagret (Strimla B): c’B = cnom + 1,5 = 22 + 1,512 = 40 mm
o Effektiv höjd: d = h – c’
▪ Yttre lagret (Strimla A): dA = 350 – 28 = 322 mm
▪ Inre lagret (Strimla B): dB = 350 – 40 = 310 mm

-- 18 of 28 --

Dimensioneringslösning
19 (28)
D04-102
2025-12-15
4.4.2 Erforderlig armeringsmängd
För beräkningar av vägg utgås här från minsta tillåtna armeringsmängd enligt SR, se avsnitt 2. Där
anges minsta armeringsdimension och maximalt centrumavstånd. Beräkningar görs för två möjliga
armeringsdimensioner,
 = [10, 12] mm, varvid följande fås:
•	
min = 10 mm och smax = 200 mm
o	
 = 10 mm → A’s,min = 393 mm2/m
o	
 = 12 mm → A’s,min = 565 mm2/m
Minsta tillåtna armeringsinnehåll [%] enligt SR beräknas som
,min
2, 6
26 26 0,135 %
500
ctm
s
yk
f
f

	=  =  =	
(55)
dock minst 0,14 %, varför ρs,min = 0,14 % används här. Minsta tillåtna armeringsmängd [mm2/m]
beräknas därefter som
,min ,min	s s	A b d	

	=  	
(56)
Det är värt att notera att en högre betonghållfasthet medför en ökning av draghållfasthet fctm och
därmed även en ökning av minsta tillåtna armeringsinnehåll ρs,min enligt ekvation (55).
Beräkning görs för en strimla med bredd b = 1,0 m, då fås:
• Strimla A: dA = 322 mm →A’s,A,min = 451 mm2/m
• Strimla B: dB = 310 mm →A’s,B,min = 434 mm2/m
Baserat på detta används följande armeringsmängder i de fortsatta beräkningarna:
• Strimla A
o  = 10 mm: A’s,A = 451 mm2/m (välj 10 s170 → A’s = 462 mm2/m)
o  = 12 mm: A’s,A = 565 mm2/m (12 s200)
• Strimla B
o  = 10 mm: A’s,B = 434 mm2/m (välj 10 s180 → A’s = 436 mm2/m)
o  = 12 mm: A’s,B = 565 mm2/m (12 s200)
SR ställer krav på att golv, väggar och tak i skyddsrummet ska utformas som dubbelarmerade,
varför minst dessa armeringsmängder placeras på båda sidor i tvärsnittet.

-- 19 of 28 --

Dimensioneringslösning
20 (28)
D04-102
2025-12-15
4.4.3 Momentkapacitet
Vid beräkning av momentkapacitet i takplattan utgås från ett armerat betongtvärsnitt enligt
Figur 4.3, varvid eventuell inverkan av normalkraft bortses ifrån (N = 0 kN6).
b
As
x
d
h/2
c
εcu
εs
d-x
x
fcd
Fs
0,4x
0,8x Fc
d = h - c 	z = d - 0,4x
zF
MRd
N
h/2
N zN
Figur 4.3 Tvärsnittsanalys av ett armerat betongtvärsnitt utsatt för ren böjning (N = 0 kN) i
brottstadium.
För ett fall där armeringen flyter (dvs. εs ≥ εsy = fyd / Es = 2,5 ‰, vilket med god marginal uppfylls
för lågt armeringsinnehåll) kan momentkapaciteten, via Figur 4.3, bestämmas som
( 	)	
0, 4 0, 4
2
Rd s F N yd s
h
M F z N z f A d x N x
 
=  +  =   −  +  − 	 
 
(57)
där tryckzonshöjden x beräknas ur en horisontell kraftjämvikt (Fc = Fs + N) som
0,8
yd s
cd
f A N
x f b
 +
=  
(58)
utgående från armeringsmängd As, dess flytgräns fyd, betongens tryckhållfasthet fcd samt bredden b.
För en strimla med bredd b = 1000 mm samt effektiv höjd d och armeringsmängd A’s enligt
avsnitt 4.4.2 fås momentkapaciteter i takplattan enligt nedan. Vid dimensionering av takplattan
utgås från dessa kapaciteter och komplettering görs där så behövs:
• Strimla A
o A’s = 10 s170 = 462 mm2/m: mRd,A = 73 kNm/m
o A’s = 12 s200 = 565 mm2/m: mRd,A = 89 kNm/m
• Strimla B
o A’s = 10 s180 = 436 mm2/m: mRd,B = 66 kNm/m
o A’s = 12 s200 = 565 mm2/m: mRd,B = 86 kNm/m
6 Eventuell inverkan av tvångskrafter i plattan är rimligt att bortse ifrån vid den typ av belastning som studeras här, i
vilken betydande uppsprickning i plattan är att förvänta. Eventuell inverkan av tryckande horisontalkraft orsakad av
jordtryck kan dock motiveras. Här utgås dock konservativt från ett fall där normalkraften i takplattan kan försummas.

-- 20 of 28 --

Dimensioneringslösning
21 (28)
D04-102
2025-12-15
4.4.4 Tvärkraftskapacitet
Vid beräkning av tvärkraftskapacitet utgås från ett armerat betongtvärsnitt enligt Figur 4.3, varvid
inverkan av normalkraft, på samma sätt som i avsnitt 4.4.3, bortses ifrån (N = 0 kN).
Enligt SR beräknas betongens tvärkraftskapacitet i ett skyddsrum som
, , , ,	1,1	Rd c dyn Rd c sta	V V	= 	
(59)
där VRd,c,dyn och VRd,c,sta är betongens dynamiska respektive statiska tvärkraftskapacitet. Den statiska
kapaciteten beräknas i enlighet med Eurokod 2 som
, , ,	Rd c sta Rd c	V v b d	=  	
(60)
där (när N = 0 kN)
( 	)
1/3
,
3/2 1/2
0.18 100
max
0.035
s ck
C	Rd c
ck
k f
v
k f


    	
= 
  	
(61)
är skjuvhållfasthet, γC = 1,2 är partialkoefficient för betong i olyckslastfall,
d
k 200
1 +	=	
k ≤ 2,0 (d i [mm]) (62)
är en faktor som beaktar storlekseffekten,
0, 02	s
s
A
b d

	 =

(63)
är armeringsinnehåll och fck är betongens karakteristiska tryckhållfasthet uttryckt i [MPa].
För en strimla med bredd b = 1000 mm samt effektiva höjder d och minsta erforderliga armerings-
mängd A’s enligt avsnitt 4.4.2, fås följande tvärkraftskapaciteter:
• Strimla A
o Kantdel: A’s = 10 s170 = 462 mm2/m → vRd,A = 148 kN/m
o Mittdel: A’s = 12 s200 = 565 mm2/m → vRd,A = 156 kN/m
• Strimla B
o Kantdel: A’s = 10 s180 = 436 mm2/m → vRd,B = 144 kN/m
o Mittdel: A’s = 10 s180 = 436 mm2/m → vRd,B = 144 kN/m

-- 21 of 28 --

Dimensioneringslösning
22 (28)
D04-102
2025-12-15
4.4.5 Kontroll av momentkapacitet
Som påtalas i avsnitt 3.1 är det vid plastisk omlagring möjligt för konstruktören att, inom vissa
givna gränser, själv välja vilken momentfördelning mellan stöd och fält som ska användas. Det
totala dimensionerande momentet mEd ska gemensamt balanseras av momentkapaciteten i stöd
mRd,s,1 och mRd,s,2 samt i fält mRd,f på ett sådant sätt att följande villkor uppfylls
( 	)	
, ,1 , ,2
,
2
Rd s Rd s
Ed Rd f
m m
m m
+
 +	
(64)
Det är möjligt att hitta flera olika kombinationer av mRd,s,1, mRd,s,2 och mRd,f där så är fallet, dock
krävs det enligt SR även att momentkvoten
,
,
1,50Rd s
M
Rd f
m
m

	= 	
(65)
mellan stöd och fält uppfylls. Det kan finnas flera olika orsaker till att en viss momentfördelning är
önskvärd, exempelvis:
• Anpassa lösningen till den momentkapacitet som fås i takplattan vid användande av en
given armeringsmängd, till exempel minimiarmeringsmängd.
• Anpassa takplattans stödmoment till vad som kan balanseras i anslutande konstruktionsdel.
Vid yttervägg kommer stödmomentkapaciteten i takplatta att balanseras av momentkapaciteten i
ytterväggen. Den maximala momentkapacitet som kan tillgodoräknas invid stöd i takplattan är det
moment som kan bäras i motsvarande stöd i väggen. Armeringsmängden i väggen hanteras inte i
detta dokument. I D07-103 har det dock visats att en armeringsmängd motsvarande 10 s180 är
tillräckligt för att hantera normal vapenlast (qvapen,1 = 50 kN/m2) som verkar mot väggen när den
effektiva höjden är dvägg = 310 mm. Det antas här att detta är den armeringsmängd som placeras i
väggen om inga andra behov uppstår. Ett sådant behov skulle dock kunna fås av att en ökning av
takplattans inspänning i väggen önskas, något som kan medföra ett ökat armeringsbehov i väggen.
Vid beräkning av momentkapacitet i takplattan har det ovan antagits att normalkraften N = 0. Vid
kontroll av vilken momentkapacitet det finns i väggen för att balansera ett stödmoment i takplattan
är det dock rimligt att beakta den gynnsamma effekt som fås av den tryckande normalkraft som fås i
väggen från den vapenlast eller raslast som verkar mot skyddsrummets tak.
Avsnitt 4.3.3 ger att tvärkraften vid takplattans stöd (stödreaktion som ger normalkraft N’ i väggen),
beroende på strimla samt mitt- eller kantdel, varierar mellan v = 69-188 kN/m. Här görs en
övergripande kontroll av vilken inverkan som olika normalkrafter har på väggens momentkapacitet:
• Armering: A’s = 10 s180 = 436 mm2/m
• Effektiv höjd: d = 310 mm
• Normalkraft: N’vägg = [0, 50, 100, 200] kN/m
• Momentkapacitet: mRd,vägg = [66, 75, 83, 98] kNm/m

-- 22 of 28 --

Dimensioneringslösning
23 (28)
D04-102
2025-12-15
Det kan noteras att studerade ökningar av normalkraften medför en tämligen betydande ökning av
väggens momentkapacitet. För de fortsatta beräkningarna utgås här konservativt från att
N’ = 100 kN/m i mittdel och N’ = 50 kN/m i kantdel. Detta ger att det i väggen finns en möjlighet
att generera en momentkapacitet på mRd,mitt = 83 kNm/m och mRd,kant = 75 kNm/m, i mittdel respek-
tive kantdel, som kan balansera det stödmoment som nyttjas i takplattan. Baserat på detta kan nu en
momentfördelning i takplattan väljas, se Tabell 4.2 för en sammanställning av vald fördelning i stöd
och fält för takplattan i dess olika delar. Som jämförelse visas även plattans momentkapacitet när
enbart minimiarmering baserat på armering 10 och 12 enligt ovan används. Av detta framgår att
det för mittdelen i Strimla A inte är tillräckligt med enbart minimiarmering. Där behöver takplattan
kompletteras med ytterligare armering över stöd 2 (innervägg) så att mRd,s,2 ≥ 109 kNm/m. För
övriga delar i takplattan fås dock tillräcklig momentkapacitet med enbart minimiarmeringsmängd
baserad på armering 10. Via tvärsnittsanalys enligt Figur 4.3 bestäms nu erforderlig armerings-
mängd över stöd 2:
• Strimla A (mittdel): A’s = 12 s160 = 707 mm2/m → mRd,A = 111 kNm/m
Detta ger en momentkvot γM = 111 / 89 = 1,25, vilket är lägre än kravet på 1,50 enligt ekvation (65).
Denna lösning kan därmed godtas och i de fortsatta beräkningarna utgås från detta val. Det är dock
möjligt att även göra andra val på momentfördelning i mittdelen av Strimla A, se Tabell 4.3 för
några exempel på potentiella alternativ med tillhörande motivering.
Tabell 4.2 Sammanställning av vald momentfördelning i stöd och fält samt i takplattans olika
delar. Momentkapacitet anges för erforderlig armeringsmängd enligt avsnitt 4.4.2
när armeringen består av
10 eller
12.
Dimensionerande moment Momentkapacitet
Skyddsrum Strimla Del mEd ms,1 ms,2 mf mRd,
10 mRd,
12
[kNm/m] [kNm/m] [kNm/m] [kNm/m] [kNm/m] [kNm/m]
A2
A
Mitt 185 83 1) 109 2) 89 3)
73 89
Kant 93 46 46 47
B
Mitt 95 47 47 48
66 86
Kant 48 24 24 24
1) Momentkapaciteten i takplattan uppgår med minimiarmering med 12 till 89 kNm/m men här
tillgodoräknas enbart en kapacitet på 83 kNm/m eftersom detta är den momentkapacitet som
konservativt bedöms kunna hanteras i den anslutande väggen.
2) Erforderlig momentkapacitet bestäms via ekvation (64).
3) Med minimiarmering baserad på 12 uppgår momentkapaciteten i takplattan till 89 kNm/m.

-- 23 of 28 --

Dimensioneringslösning
24 (28)
D04-102
2025-12-15
Tabell 4.3 Alternativa val för momentfördelning mellan stöd och fält i mittdelen av Strimla A.
Dimensionerande moment Momentkapacitet
Skyddsrum Strimla Del Alt mEd ms,1 ms,1 mf mRd,
10 mRd,
12
[kNm/m] [kNm/m] [kNm/m] [kNm/m] [kN/m] [kN/m]
I 1) 185 83 109 89
73 89	A2 A Mitt II 2) 185 83 89 99
III 3) 185 83 96 96
1) Momentkapacitet i stöd 1 och fält baseras på minimiarmering 12 s200 med extra momentkapacitet i
stöd 2, detta motsvarar det alternativ som visas i Tabell 4.2. Denna fördelning används fortsättningsvis.
2) Momentkapacitet i stöd 1 och stöd 2 baseras på minimiarmering 12 s200 med extra momentkapacitet i
fält.
1) Momentkapacitet i stöd 1 baseras på minimiarmering 12 s200 med extra momentkapacitet i stöd 2 och fält
som väljs att vara lika.
4.4.6 Kontroll av tvärkraftskapacitet
I avsnitt 4.4.4 presenteras tvärkraftskapaciteter i takplattan, vilka kan jämföras med de tvärkrafter i
stöd (stödreaktioner) som sammanställs i avsnitt 4.3.4. Av detta framgår att takplattans tvärkrafts-
kapacitet är tillräcklig vid användande av minimiarmering i kantdel i Strimla A samt mitt- och
kantdel i Strimla B. För mittdel i Strimla A gäller dock att stödreaktionen är vEd,mitt = 188 kN/m
medan tvärkraftskapaciteten är vRd,A = 156 kN/m, varför en mer detaljerad kontroll behöver göras
för att bedöma huruvida takplattans tvärkraftskapacitet är tillräcklig eller inte. I en sådan nyanserad
kontroll beaktas dels att armeringsmängden i stöd 2 är överstiger den minsta erforderliga arme-
ringen, dels att kritisk tvärkraft i stöd påverkas av vald momentfördelning samt läge på kritiskt snitt.
Med användning av uttryck enligt avsnitt 4.4.4 kan tvärkraftskapaciteten för mittdel i strimla A, vid
stöd 2, beräknas som:
• A’s = 12 s160 = 707 mm2/m → vRd,A,2 = 168 kN/m
Den tvärkraft, vEd,mitt = 188 kN/m, som listas i Tabell 4.1 är beräknat för ett fall där stödmomenten i
stöd 1 och stöd 2 är desamma, ms,1 = ms,2. Så är dock inte längre fallet, se avsnitt 4.4.3, varför en ny
beräkning behöver göras. Inverkan av olika stödmoment kan förenklat beräknas med antagande av
en strimla med spännvidd l belastad med en jämnt utbredd last q. För en sådan lastsituation kan
tvärkraften vid stöd (reaktionskraft) beräknas som
,1 ,2
,1 2 2
s s
stöd stöd
m m	q l q l
v v
l
−	 
= + = + 	
(66)
,1 ,2
,2 2 2
s s
stöd stöd
m m	q l q l
v v
l
−	 
= − = − 	
(67)

-- 24 of 28 --

Dimensioneringslösning
25 (28)
D04-102
2025-12-15
Med ms,1 =83 kNm/m och ms,2 = 111 kNm/m fås
,1 ,2 83 111 7 kN
4,175
s s
stöd
m m
v l
− −
 = =  −	
(68)
Därmed kan tvärkraften i stöd, för mittdel i Strimla A, beräknas som
,1 188 7 181 kN	stöd	v = − =	
(69)
,2 188 7 195 kN	stöd	v = + =	
(70)
i stöd 1 respektive 2. För jämförelse med tvärkraftskapaciteten vRd,A,1 och vRd,A,2 enligt ovan så ska
dessa krafter dock reduceras ytterligare med hänsyn till det kritiska snittets placering, se Figur 4.4.
Det kritiska snittet är placerat på avståndet
,
, 2
stöd i
krit i
a
x d	= +	
(71)
från stöd, varmed tvärkraften i det kritiska snittet kan beräknas som
, , ,	Ed i stöd i krit i	v v q x	= − 	
(72)
q
d 	tak
yttervägg
(stöd 1) astöd,1 = tv,y
xkrit,1
q
d
xkrit,2 	innervägg
(stöd 2)
astöd,2 = tv,i
tak
lA2
kritisk
skjuvspricka
Figur 4.4 Placering av kritiska snitt (avstånd xkrit från centrumlinje vägg) för dimensionerande
tvärkraft i takplattan invid stöd 1 och 2.
Den utbredde lasten som verkar mot takplattan uppgår enligt avsnitt 4.2 till qtot,ras,A2 = 98 kN/m2. I
en fyrsidigt upplagd platta kommer denna last i viss mån alltid bäras i två riktningar. I mittdelen av
en strimla är det dock rimligt att anta att lasten som går i strimlans tvärriktning vid stöd är liten,
varför detta värde bedöms vara en god approximation att använda här. Då fås tvärkraft i kritiskt
snitt som
,1
0,35
181 98 0,322 133 kN/m
2
Ed	v  
= −  + =	 
 
(73)
,2
0,16
195 98 0,322 156 kN/m
2
Ed	v  
= −  + =	 
 
(74)

-- 25 of 28 --

Dimensioneringslösning
26 (28)
D04-102
2025-12-15
invid stöd 1 respektive 2. Dessa värden kan slutligen jämföras med vRd,A,1 = 156 kN/m och
vRd,A,2 = 168 kN/m, varmed det kan konstateras att takplattans tvärkraftskapacitet är tillräcklig, se
sammanställning i Tabell 4.4.
Tabell 4.4 Sammanställning av tvärkraftskontroll i studerade strimlor. Tvärkraftskapacitet är
beräknad för den armeringsmängd som är inlagd med hänsyn till moment.
Dim. tvärkraft Tvärkraftskapacitet
Skyddsrum Strimla Del vEd,1 vEd,2 vRd,s1 vRd,s2
[kN/m] [kN/m] [kN/m] [kN/m]
A2
A
Mitt 133 156 156 168
Kant < 94 1) < 94 1) 148 148
B
Mitt < 138 1) < 138 1) 144 144
Kant < 69 1) < 69 1) 144 144
1) Angivet värde anger stödreaktion från Tabell 4.1.
4.5 Resultat
Följande armeringsmängder placeras i takplatta för Skyddsrum A2 (skyddsrum med bärande inner-
vägg), se Figur 4.5 för indelning i strimlor samt principiell indelning i mitt- och kantdelar:
• Strimla A (yttre armeringslager → effektiv höjd, d = 328 mm)
o Mittdel (bmitt ≈ 11,75 m)
▪ Stöd 1 (yttervägg), fält: 12 s200 (minimiarmering med 12)
▪ Stöd 2 (innervägg): 12 s160
o Kantdel (bkant,1 = bkant,2 ≈ 1,05 m)
▪ Stöd 1, stöd 2, fält: 10 s170 (minimiarmering med 10)
• Strimla A (inre armeringslager → effektiv höjd, d = 310 mm)
o Mittdel (bmitt ≈ 2,10 m) och kantdel (bkant,1 = bkant,2 ≈ 1,05 m)
▪ Stöd 1, stöd 2, fält: 10 s180 (minimiarmering med 10)
Av praktiska skäl (till exempel via ett mer enhetligt centrumavstånd) är det möjligt att en större
armeringsinläggning än den beräknade läggs in, detta beaktas dock inte här.

-- 26 of 28 --

Dimensioneringslösning
27 (28)
D04-102
2025-12-15
lA2
lA2
lB2
A2
innervägg
B2
B2
0,5lA2 	0,5lA2
(a)
lA
lB
A
0,25lA 	0,25lA
mitt	kant 	kant
0,25lA
lB
B
kant
kant
mitt
0,25lA
Strimla A 	Strimla B
(b)
Figur 4.5 (a) Modell med strimlemetoden i Skyddsrum A2 (med bärande innervägg), (b) sche-
matisk uppdelning av strimlor i mitt- och kantstrimlor.

-- 27 of 28 --

Dimensioneringslösning
28 (28)
D04-102
2025-12-15
5 Revideringslista
Datum Avsnitt Revidering
2025-12-15 D04-102 Första version

-- 28 of 28 --