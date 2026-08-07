---
title: "B04 101   Last Fran Tnt Explosion I Det Fria 121015"
category: "b04.-berakningsexempel-for-last"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b04.-berakningsexempel-for-last/b04-101---last-fran-tnt-explosion-i-det-fria_121015.pdf"
fileType: "PDF"
keywords: ["beräkning","explosion","oreflekterad","stötvåg","reflekterad","dokument","figur","avstånd"]
summary: "Beräkning av impulsbelastad konstruktion 1 (6) B04-101 2012-10-15 B04-101 Beräkningsexempel för last Last från TNT-explosion i det fria Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren. 1 Orientering 1 1.1 Samlingsdokument 1 1.2 Om ..."
---

Beräkning av impulsbelastad konstruktion
1 (6)
B04-101
2012-10-15
B04-101 Beräkningsexempel för last
Last från TNT-explosion i det fria
Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren.
1 	Orientering 	1
1.1 	Samlingsdokument 	1
1.2 	Om detta dokument 	1
2 	Förutsättningar 	1
3 	Lastbestämning 	2
3.1 	Skalat avstånd Z 	2
3.2 	Resulterande stötvågsparametrar 	3
3.3 	Bestämning av last 	5
1 	Orientering
1.1 	Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 	Om detta dokument
I detta dokument gås ett enklare beräkningsexempel igenom för att belysa hur resulterande last
(positiv fas) tas fram för en TNT-explosion i det fria. Teoretisk bakgrund för här utförda
beräkningar behandlas i Johansson (2012) samt Johansson och Laine (2012a) och en samman-
ställning av beräkningsanvisningar ges i dokument B02-111.
2 	Förutsättningar
I Figur 2.1 illustreras studerat belastningsfall. En laddning, motsvarande 100 kg TNT, antas explo-
dera 1 m ovan marknivå. I närheten av laddningen står två byggnader som kommer utsättas för last
av varierande storlek. Här studeras två renodlade fall – effekten av det tryck som fås från en
normalreflekterad stötvåg samt trycket för en oreflekterad stötvåg på samma avstånd r = 15 m.

-- 1 of 6 --

Beräkning av impulsbelastad konstruktion
2 (6)
B04-101
2012-10-15
r = 15 m
reflekterad
stötvåg
r
oreflekterad
stötvåg
100 kg
TNT
Plan
spegling 	1 m
Vy	stötvågsfront
Byggnad	Byggnad
Byggnad
Byggnad
Figur 2.1 	En laddning motsvarande 100 kg TNT, placerad 1 m ovan mark, exploderar och last
mot utsatta byggnadsdelar på ett avstånd r = 15 m bestäms.
3 	Lastbestämning
3.1 	Skalat avstånd Z
Det skalade avståndet Z är en parameter som används för att beskriva styrkan hos en explosion. Det
definieras som
3	1 /
W
r
Z = 	(3.1)
där r är det verkliga avståndet och W symboliserar explosionens energimängd uttryckt i mängd
sprängämne (vanligen i kg TNT). För här studerat fall uppgår laddningsvikten till 100 kg TNT och
avståndet r till 15 m. I och med att laddningen är placerad nära marken i förhållande till avståndet
till studerad punkt (1 m höjd jämfört med ett avstånd på 15 m) så kommer den resulterande
stötvågens utbredning i princip begränsas till en halvsfärisk utbredning såsom illustreras i Figur 2.1.
Dvs. ett fenomen motsvarande så kallad spegling uppstår vilket innebär att frisläppt energi
koncentreras till en mindre volym. Detta innebär att laddningsvikten Wmod kan räknas upp med en
faktor α
W	W 	⋅	=
α	mod 	(3.2)
för att beakta den energikoncentration som denna förhindrade volymutbredning innebär. För fall
med perfekt reflexion mot marken blir α = 2,0 men eftersom viss energimängd i verkligheten går

-- 2 of 6 --

Beräkning av impulsbelastad konstruktion
3 (6)
B04-101
2012-10-15
ner i marken fås i praktiken ett lägre värde. Här används α = 1.8, vilket innebär en modifierad
laddningsvikt
180	100	8	,	1	mod 	=	⋅	=	W 	kg TNT 	(3.3)
varvid det skalade avståndet kan beräknas till
66	,	2
180
15 3/1 	=	=	Z 	m/kg1/3 (3.4)
3.2 	Resulterande stötvågsparametrar
Utgående från det skalade avståndet kan aktuella stötvågsparametrar bestämmas från samband i
dokument B02-111. I Tabell 3.1 redovisas de närliggande värden som fås från denna. Slutliga
värden bestäms med användande av linjär interpolation1 enligt
( 	)
( 	) ( 	)	1
2	1
2	1
1 	Z	Z
Z	Z
S	S
S	S 	−	⋅
−
−
+	= 	(3.5)
där S är sökt stötvågsparameter för aktuellt skalat avstånd Z, S1 och Z 1 är värden för punkt 1 och S 2
och Z 2 är värden för 	punkt 2. 	I Figur 3.1 till Figur 3.3 illustreras framtagning av aktuella
stötvågsparametrar ur diagram.
Det ska noteras att givna impulstätheter och tider är skalade med hänsyn till laddningens storlek och
att en multiplikation av W1/3 = 1801/3 = 5,65 kg1/3 är nödvändig för att få fram aktuella värden på
dessa, något som också redovisas i Tabell 3.1.
Tabell 3.1 	Stötvågsparametrar för studerat lastfall. Värden i kolumn för Punkt 1 och Punkt 2
har hämtats från dokument B02-111. Resulterande stötvågsparametrar har sedan
från dessa beräknats med linjär interpolation enligt ekvation (3.5).
Parameter 	Enhet 	Punkt 1 	Punkt 2 	Resultat 	Parameter 	Enhet 	Resultat
Z 	[m/kg1/3
] 	2,4 	3,0 	2,66 	Z 	[m/kg1/3
] 	2,66
P s+ 	[kPa] 	130 	82 	109 	P s+ 	[kPa] 	109
P r+ 	[kPa] 	387 	216 	314 	P r+ 	[kPa] 	314
is+ / W1/3 	[Pas/kg1/3
] 	78 	64 	72 	is+ 	[Pas] 	408
ir+ / W1/3 	[Pas/kg1/3
] 	190 	147 	172 	i r+ 	[Pas] 	970
ta / W1/3 	[ms/kg1/3
] 	2,70 	3,99 	3,25 	ta 	[ms] 	18,36
T+ / W1/3 	[ms/kg1/3
] 	2,27 	2,68 	2,45 	T+ 	[ms] 	13,82
1 Logaritmisk interpolation är mer korrekt men här använd metod ger tillräcklig noggrannhet.

-- 3 of 6 --

Beräkning av impulsbelastad konstruktion
4 (6)
B04-101
2012-10-15
1
10
100
1 000
10 000
100 000
1 000 000
0.1 	1 	10 	100
Övertryck,
 P+ [kPa]
Skalat avstånd, Z [m/kg1/3]
Reflekterad
Oreflekterad
314 kPa
109 kPa
Figur 3.1 	Bestämning av reflekterat och oreflekterat övertryck för det skalade avståndet
Z = 2,66 m/kg1/3 .
1
10
100
1 000
10 000
100 000
0.1 	1 	10 	100
Skalad impulsintensitet,
 i+ [Pas/kg
1/3
]
Skalat avstånd, Z [m/kg1/3]
Reflekterad
Oreflekterad
172 Pas/kg^1/3
72 Pas/kg^1/3
Figur 3.2 	Bestämning av reflekterad och oreflekterad skalad impulstäthet för det skalade
avståndet Z = 2,66 m/kg 1/3 .

-- 4 of 6 --

Beräkning av impulsbelastad konstruktion
5 (6)
B04-101
2012-10-15
0.01
0.1
1
10
100
0.1 	1 	10 	100
Skalad tid,
 t [ms/kg
1/3
]
Skalat avstånd, Z [m/kg1/3]
Varaktighet
Ankomsttid
2.45 ms/kg^1/3
3.25 ms/kg^1/3
Figur 3.3 	Bestämning av skalad ankomsttid och skalad varaktighet för det skalade avståndet
Z = 2,66 m/kg1/3 .
3.3 	Bestämning av last
Utgående 	från 	framtagna 	stötvågsparametrar 	i 	Tabell 3.1 	kan 	det 	slutliga 	utseendet 	på
explosionslasten bestämmas. I enlighet med dokument B02-111 kan stötvågens tryck-tidssamband
uttryckas som
( ) +
	−
+
+	+ 




 −	= t	t
e
T
t
P	t	P
α
1 	(3.6)
där α är en avklingningsfaktor som kan lösas ut från uttrycket
( 	)


 −	−	= −	+	+	+
	α
α
	α e	t	P	i 	1
1	1 2 	(3.7)
när värden för P +, i + samt t + är kända.
En vanligt förekommande, och i regel fullt acceptabel, förenkling är att istället beskriva lasten med
ett linjärt avtagande tryck utgående från aktuellt övertryck och impulstäthet. Dvs. en fiktiv
varaktighet tΔ+ beräknas. Används denna förenkling fås för den reflekterade stötvågen
2	,	6
314
970	2	2
, 	=
⋅
=	= 	+
+
+
∆
r
r
r P
i
t 	ms 	(3.8)

-- 5 of 6 --

Beräkning av impulsbelastad konstruktion
6 (6)
B04-101
2012-10-15
och för den oreflekterade stötvågen
5	,	7
109
408	2	2
, 	=
⋅
=	= 	+
+
+
∆
s
s
s P
i
t 	ms 	(3.9)
I Tabell 3.2 sammanställs aktuella stötvågsparametrar för reflekterad och oreflekterad belastning
när exponentiell respektive linjär tryckminskning antas och utgående från dessa kan sedan tryck-
tidssambanden i Figur 3.4 upprättas. Det kan noteras att den fiktiva varaktigheten tΔ+ för reflekterad
och oreflekterad stötvåg skiljer sig åt medan varaktigheterna för exponentiellt avtagande tryckkurva
är desamma. Det senare är fysikaliskt korrekt. I det förenklade tryck-tidssambandet med varaktighet
tΔ+ fås dock en skillnad eftersom impulstätheten inte ökar lika mycket som övertrycket vid en
övergång från oreflekterad till reflekterad stötvåg.
Tabell 3.2 	Stötvågsparametrar för reflekterad och oreflekterad belastning vid antagande om
exponentiellt respektive linjärt avtagande tryck.
Exponentiellt avtagande tryck 	Linjärt avtagande tryck
Oreflekterad stötvåg 	Reflekterad stötvåg 	Oreflekterad stötvåg 	Reflekterad stötvåg
P s+ 	109 kPa 	P r+ 	314 kPa 	P s+ 	109 kPa 	P r+ 	314 kPa
is+ 	408 Pas 	ir+ 	970 Pas 	is+ 	408 Pas 	ir+ 	970 Pas
ts+ 	13,82 ms 	Tr+ 	13,82 ms 	ts,Δ+ 	7,5 ms 	tr,Δ+ 	6,2 ms
α 	2,21 	α 	3,09
Figur 3.4 	Tryck-tidssamband 	för 	reflekterad 	och 	oreflekterad 	stötvåg 	när 	exponentiellt
respektive linjärt tryckavtagande antas, se Tabell 3.2.

-- 6 of 6 --