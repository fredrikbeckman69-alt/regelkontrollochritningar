---
title: "B06 101   Arkivbomb"
category: "b06.-berakningsstod"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b06.-berakningsstod/b06-101---arkivbomb.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","beräkning","explosion","tryckvåg","splitter","enligt","arkivbomb"]
summary: "Beräkning av impulsbelastad konstruktion 1 (11) B06-101 2015-07-01 B06-101 Beräkningsstöd Arkivbomb Författare: Joosef Leppänen. Ansvarig utgivare: Björn Ekengren. 1 Orientering 1 1.1 Samlingsdokument 1 1.2 Om detta dokument 1 2 Definition och las..."
---

Beräkning av impulsbelastad konstruktion
1 (11)
B06-101
2015-07-01
B06-101 Beräkningsstöd
Arkivbomb
Författare: Joosef Leppänen. Ansvarig utgivare: Björn Ekengren.
1 Orientering 1
1.1 Samlingsdokument 1
1.2 Om detta dokument 1
2 Definition och last från arkivbomb 2
2.1 Stötvågsbelastning 2
2.2 Splitterbelastning 4
3 Bakgrund till framtagning av arkivbomb 6
3.1 Riskanalys 6
3.2 Stötvågsbelastning 8
3.3 Splitterbelastning 8
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 Om detta dokument
I detta dokument definieras MSB:s så kallade arkivbomb för stötvågsbelastning och splitterverkan
som kan nyttjas vid dimensionering av ett skyddsrum, se Skyddsrumsregler SR 15, MSB (2015).
Arkivbomben är en fiktiv bomb som motsvarar bombverkan från en 250 kg minbomb. Enligt SR 15
ska skyddsrummet tåla ”verkan av en tryckvåg motsvarande den som åstadkoms av en 250
kilograms minbomb med 50 viktprocent trotyl som briserar i det fria 5,0 meter från skyddets utsida
vid fri tryckavlastning”. Vid bestämning av vapenverkan skiljer sig förutsättningar för att ta fram
lasten från stötvågsbelastning och splitterbelastning. För stötvågsbelastning bestäms lasten utifrån
en sfärisk laddning utan hölje, medan den för bestämning av splitterverkan bestäms utifrån en
cylindrisk laddning med ett hölje. I detta dokument definieras den resulterande lasten från en
arkivbomb samt bakgrunden till hur denna är framtagen. Teoretisk bakgrund för framtagning av
arkivbomb för stötvågsbelastning behandlas i Johansson (2012) och för splitterbelastning i
Leppänen (2012).

-- 1 of 11 --

Beräkning av impulsbelastad konstruktion
2 (11)
B06-101
2015-07-01
2 Definition och last från arkivbomb
2.1 Stötvågsbelastning
Vid bestämning av stötvågsbelastning från en arkivbomb, bestäms lasten utifrån en sfärisk bomb
utan hölje innehållande 125 kg TNT enligt Figur 2.1. Bomben briserar 5,0 m från skyddets utsida
och antas ha fri sfärisk utbredning.
Figur 2.1 Lastuppställning för bestämning av stötvågsbelastning från en arkivbomb.
Last från stötvågsbelastning kan beräknas enligt dokument B02-111. Det skalade avståndet Z
bestäms som:
1/3
3/1	3/1 m/kg	0	,	1
125
5 		 W
r
Z (2.1)
där r = 5 m, vilket är avståndet från detonationen till studerad vägg, och W = 125 kg, vilket är
laddningens vikt mätt i kg TNT.
Med det skalade avståndet Z kan stötvågsparametrar enligt dokument B02-111, Tabell 4.1
bestämmas till:
Tabell 2.1 Stötvågsparametrar för Z = 1 m/kg1/3.
Z
[m/kg1/3]
Ps+
[kPa]
Pr+
[kPa]
is+
[Pas/kg1/3]
ir+
[Pas/kg1/3]
ta
[ms/kg1/3]
t +
[ms/kg1/3]
1 935 5 006 175 559 0,532 1,795
5,0 m
125 kg
TNT

-- 2 of 11 --

Beräkning av impulsbelastad konstruktion
3 (11)
B06-101
2015-07-01
Tryck-tidssambandet P(t) för en stötvåg beräknas med följande samband:
	
	

 




 
	 t	t	t	a a	
e
t
t	t
P	t	P )	(
1	)	(
 (2.2)
där P + är övertrycket, t + är varaktigheten hos stötvågen och ta är ankomsttid för stötvågen.
Impulstätheten i+ kan beräknas enligt följande:
 	


 		 				

	
 e	t	P	i 1
1	1 2 (2.3)
från vilket faktorn
 kan lösas ut när P +, i+ samt t + är kända.
En vanlig förenkling av tryck-tidssambandet är att beskriva den med ett linjärt avtagande. En fiktiv
varaktighet tr,Δ+ beräknas enligt följande:
ms	12	,	1
006	5
795	2	2	2
, 

	 



r
r
r P
i
t (2.4)
I Tabell 2.2 sammanställs aktuella stötvågsparametrar för reflekterad belastning när exponentiell
respektive linjär tryckminskning antas och utgående från dessa kan sedan tryck-tidssambanden i
Figur 2.2 upprättas.
Tabell 2.2 Stötvågsparametrar med antagande om exponentiellt respektive linjärt avtagande
tryck.
Exponentiellt avtagande tryck Linjärt avtagande tryck
Oreflekterad stötvåg Reflekterad stötvåg Oreflekterad stötvåg Reflekterad stötvåg
Ps+ 935 kPa Pr+ 5 006 kPa Ps+ 935 kPa Pr+ 5 006 kPa
is+ 875 Pas ir+ 2 795 Pas is+ 875 Pas ir+ 2 795 Pas
ts+ 8,975 ms tr+ 8,975 ms ts,Δ+ 1,87 ms tr,Δ+ 1,12 ms
ta 2,66 ms ta 2,66 ms ta 2,66 ms ta 2,66 ms
α 8,46 α 15

-- 3 of 11 --

Beräkning av impulsbelastad konstruktion
4 (11)
B06-101
2015-07-01
0
1 000
2 000
3 000
4 000
5 000
0 2 4 6 8 10
Tryck,
 P+ [kPa]
Tid, t [ms]
Reflekterad - exponentiell
Oreflekterad - exponentiell
Reflekterad - linjär
Oreflekterad - linjär
Figur 2.2 Tryck-tidssamband för reflekterad och oreflekterad stötvåg när exponentiellt
respektive linjärt tryckavtagande antas, se Tabell 2.2.
2.2 Splitterbelastning
Vid bestämning av splitterbelastning från en arkivbomb, bestäms lasten utifrån en 250 kg bomb
med ett hölje och sprängmedel av TNT på vardera 125 kg enligt Figur 2.3. Bomben briserar 5,0 m
från skyddets utsida och antas ha fri sfärisk utbredning. För splitterbelastning antas arkivbomben ha
cylindrisk form med geometri enligt Figur 2.4 och data enligt Tabell 2.3. Detta innebär att vid
framtagning av last för stötvåg och splitter antas olika former för bomben. Detta förfarande bedöms
vara acceptabelt eftersom arkivbomben är en fiktiv bomb vars syfte är att definiera en given last.
Figur 2.3 Lastuppställning för bestämning av splitterbelastning från en arkivbomb.
5,0 m
125 kg
TNT

-- 4 of 11 --

Beräkning av impulsbelastad konstruktion
5 (11)
B06-101
2015-07-01
Figur 2.4 Geometri för arkivbomb vid bestämning av splitterbelastning. Fiktiv cylindrisk bomb
där nosen och den bakre delen består av icke splittergivande massa.
Tabell 2.3 Data för arkivbomb vid framtagning av splitterbelastning.
Parameter Cylindrisk
Massa bomb, Mb 250 kg
Massa sprängmedel, TNT 1), W 125 kg
Splittergivande massa 114,6 kg
Längd, L 2,2 m
Ytterdiameter, db 230 mm
Innerdiameter, di 210,7 mm
Höljets tjocklek, th 9,65 mm
Splitterfördelningsparameter, MA 2) 2,28 g1/2/ mm7/6
Motts konstant 3,67 kg1/2/ m7/6
1) Densitet för TNT = 1630 kg/m3.
2) Beräknas enligt ekvation (3.9).
Ett beräkningsexempel för last från splitterverkan behandlas i dokument B04-201, där
splitterfördelning tas fram för arkivbomben, samt splitterhastighet och splitterverkan hos
en betongvägg för denna bomb.

-- 5 of 11 --

Beräkning av impulsbelastad konstruktion
6 (11)
B06-101
2015-07-01
3 Bakgrund till framtagning av arkivbomb
3.1 Riskanalys
Storleken hos ett skyddsrums nettoarea As begränsas enligt SR 15 som:
max	A	As  (3.1)
där Amax är skyddsrummets maximala tillåtna nettoarea, vilket bestäms som:
)	(	440	max z	v A	A	A 		 (3.2)
där Av är tvärsnittsarean för skyddsrummets omslutande väggar och Az är area som erhålls av en
5,0 m bred zon runt om skyddsrummet enligt Figur 3.1. Detta val är baserad på en riskanalys där
totalt 1,0 ton bomber (tillsammans innehållande 500 kg TNT) fälls på ett hektar (100 x 100 m2) stort
område. Det kan dock argumenteras för att explosionslasten från en verklig bomb skulle påverkas
av så kallad spegling, reflexion mot markytan. Beaktande detta påvisas nedan att 125 kg TNT med
hemisfärisk laddning, på avstånden 7,0 m, genererar en stötvågslast som motsvarar den som fås av
arkivbomben. En yta inom avståndet r´ = 7,0 m från skyddsrummet, enligt Figur 3.1, medför att
träffsannolikheten motsvarar ca 25 %.
Figur 3.1 Plan av rektangulärt skyddsrum om en omkringliggande 5 m bred, respektive 7 m
bred zon. I skyddsrumsreglerna godtas även icke-rektangulära skyddsrum.
Träffsannolikhet beräknas utifrån att 500 kg fälls på en yta på 10 000 m2 (ett hektar), vilket ger
125 kg TNT som briserar på en yta på 2 500 m2. Skyddsrummets bruttoarea, vilket inkluderar dess
omslutande väggar (As + Av), kan tecknas som (b ∙ h) enligt Figur 3.1. Arean runt om skyddsrummet
Az kan beräknas som:
2
)	(	2 r	r	h	b	Az 					
 (3.3)
r = 5 m
r´= 7 m
skyddsrum
As
Az
Av
hemisfärisk utbredning
sfärisk utbredning
b
h
A´z

-- 6 of 11 --

Beräkning av impulsbelastad konstruktion
7 (11)
B06-101
2015-07-01
Träffsannolikhet P för att en bomb skall träffa innanför avståndet r från ett skyddsrum för en yta på
2 500 m2 kan beräknas som:
500	2
)	(	2	)	(
500	2
)	( 2
r	r	h	b	h	b	A	A	A
P z	v	s 					

	

 (3.4)
Bruttoarean (b ∙ h) väljs så att ekvation (3.1) och ekvation (3.2) blir uppfyllda när r = 5,0 m. Genom
att kombinera dessa två ekvationer fås följande uttryck som måste uppfyllas:
440	)	( 		 z	v	s A	A	A (3.5)
där (As + Av) = (b ∙ h) enligt Figur 3.1. Ekvation (3.3) nyttjas för att beräkna arean Az runt om
skyddsrummet, varvid fås med bruttoarea (b ∙ h) = (13∙10) m2 samt avståndet r = 5,0 m:
2	2	2	2 m	440	m	439	5	5	)	10	13	(	2	)	10	13	(	)	(	2	)	( 															

	 r	r	h	b	h	b OK! (3.6)
Insatt i ekvation (3.4) fås träffsannolikheten för att en bomb skall träffa inom sträckan r´ = 7,0 m
från ett sådant skyddsrum som:
%	2	,	24
500	2
7	7	)	10	13	(	2	)	10	13	( 2

					


P (3.7)
För varierande b och h fås också en sannolikhet på omkring 25 %.
Den verkliga bomben antas ha en hemisfärisk utbredning, vilket innebär att spegling skall beaktas
och en zonbredd på r´ = 7,0 m. Enligt dokument B02-111 fås en speglingsfaktor på 1,8 varvid en
ekvivalent laddningsvikt för sfärisk utbredning kan beräknas som:
kg	225	kg	125	8	,	1	mod 			W (3.8)
Baserat på detta kan resulterande tryck och impulstäthet beräknas för ett avstånd på 7,0 m, vilka
jämförs med motsvarande data för arkivbomben (125 kg TNT och 5,0 m avstånd) i Tabell 3.1. Av
detta framgår att impulstätheten för de två belastningsfallen blir ungefär lika stora. Det reflekterade
trycket och varaktigheten hos lasten skiljer sig visserligen mellan dessa två belastningsfall. Inverkan
av detta är dock försumbar, eftersom det är impulsen som är avgörande för strukturresponsen vid en
så kortvarig last som är fallet här. Gällande splitterbelastning så ökar splittertätheten och
splitterhastigheten för ett kortare avstånd och det blir därför på säker sida att anta ett avstånd på
5,0 m. Sammanfattningsvis, så kan därför sägas att den last som genereras av arkivbomben täcker in
lasten från en laddning på 125 kg på ett avstånd på 7,0 m med hemisfärisk utbredning.
Tabell 3.1 Stötvågsparametrar för två olika, avstånd r och laddningsvikt W.
r = 5 m, W = 125 kg, sfärisk utbredning r = 7 m, Wmod = 225 kg, sfärisk utbredning 1)
Pr+ 5 006 kPa Pr+ 3 318 kPa
ir+ 2 795 Pas ir+ 2 835 Pas
tr,Δ+ 1,12 ms tr,Δ+ 1,71 ms
1) Motsvarar en 125 kg laddning på 7 m avstånd vid hemisfärisk utbredning.

-- 7 of 11 --

Beräkning av impulsbelastad konstruktion
8 (11)
B06-101
2015-07-01
3.2 Stötvågsbelastning
Enligt SR 15 så skall bombens last, det vill säga den stötvåg och det splitter som orsakas av
arkivbomben, motsvara den från en 250 kg minbomb med 50 viktprocent trotyl (TNT) som briserar
5,0 meter från skyddets utsida vid fri sfärisk tryckavlastning. Lasten för stötvåg beräknas utifrån en
laddning utan hölje på 125 kg TNT.
3.3 Splitterbelastning
Splitterdata från arkivbomben är baserat på ett verkligt försök med en minbomb med en icke
cylindrisk form och splitterdata enligt Tabell 3.2. Splitter från en sådan laddning har samlats ihop
och indelats i olika viktklasser. För varje viktklass har antalet splitter respektive massan för dessa
tagits fram. Den totala splittergivande massan hos minbomben blev ca 117 kg och antalet splitter
blev ca 26 000 st.
Tabell 3.2 Data för en minbomb m/50 som nyttjas för framtagning av splitterdata för
arkivbomben.
Viktklass Splitterdata för respektive
viktklass Ackumulerat splitterdata
[g] Antal Massa [g] Antal Massa [g]
> 63,5 128 16 121 128 16 121
32,5 - 63,5 452 18 191 580 34 312
15,5 - 32,5 1 547 33 582 2 127 67 894
8,5 - 15,5 1 407 15 944 3 534 83 838
3,8 - 8,5 2 794 15 187 6 328 99 025
2,5 - 3,8 1 682 5 233 8 010 104 258
1,5 - 2,5 2 463 4 769 10 473 109 027
1,0 - 1,5 2 370 2 955 12 843 111 982
0,5 - 1,0 3 606 2 632 16 445 114 614
0,1 - 0,5 9 683 2 372 26 128 116 986
Summa: 26 128 116 986
Arkivbomben ges en cylindrisk form, en ekvivalent cylinder, vilket förenklar beräkning av data för
framtagning av splitterbelastning. Splitterfördelningsparametern MA för en ekvivalent cylinder
beräknas som:
2	3/2	3/5	2 )	1	(
i
h
i	h	A d
t
d	t	B	M 			 (3.9)
där B är Motts konstant, th är höljets tjocklek och di är bombens innerdiameter.

-- 8 of 11 --

Beräkning av impulsbelastad konstruktion
9 (11)
B06-101
2015-07-01
Antalet splitter nms med massan större än ms beräknas som:
A
s
M
m
A
h
ms e
M
M
n 
 2 (3.10)
Där Mh är höljets massa och MA är splitterfördelningsparameter enligt ekvation (3.9).
För att bestämma bombens innerdiameter beräknas först volymen av sprängmedel som:
TNT
W
W
V

 (3.11)
där W är laddningsvikt och 630	1		TNT	
 kg/m3 är densiteten för TNT.
Genom att lösa ut diametern för en cylinder kan bombens innerdiameter di bestämmas som:
L
V
d W
i 



4 (3.12)
där L är längden hos ekvivalent cylinder.
Ytterdiameter db för bomben beräknas som:
i	h	b d	t	d 	 2 (3.13)
där th är höljets tjocklek och volymen för höljet kan beräknas som:







 		 4	4
2	2
i	b
h
d	d
L	V	
 (3.14)
Med kännedom om höljets volym kan höljets massa Mh beräknas till:
stål	h	h V	M	
	 (3.15)
där densitet för stål har antagits till 	stål	
 7 800 kg/m3.
En splitterfördelningsparameter, enligt ekvation (3.9), beräknas för fyra olika ekvivalenta cylindrar
med längderna 2,5 m, 2,2 m, 2,0 m och 1,5 m. Utifrån splitterfördelningsparametern kan antalet
splitter med massa större än en viss splittermassa ms, enligt ekvation (3.10), bestämmas för de olika
ekvivalenta cylindrarna. Den ekvivalenta längden hos arkivbomben har valts till 2,2 m.
Valet baserades på jämförelse med försök och resultat för de olika ekvivalenta cylindrarna enligt
Figur 3.2 och Figur 3.3. Arkivbomben ger bäst resultat i jämförelse med stora splitter och bra
resultat för olika splitterstorlekar. För små splitter blir avvikelsen större än i jämförelse mellan
arkivbomb och med en ekvivalent cylinder med längden 2,5 m. Däremot blir avvikelse stor för en
ekvivalent cylinder med längden på 2,5 m i jämförelse med arkivbomben för stora splitter. En
bedömning är att de stora splittren är av större betydelse för strukturens respons än de allra minsta

-- 9 of 11 --

Beräkning av impulsbelastad konstruktion
10 (11)
B06-101
2015-07-01
splittren, varav ekvivalent cylinder med en längd på 2,5 m valdes bort. Ekvivalent cylinder med
längd på 2,0 m ger bäst resultat för splitterstorlekar på ca 1,5 g upp till ca 8,5 g, men däremot så är
avvikelsen större jämfört med arkivbomben för stora splitter samt de allra minsta splittren, varav
denna också valdes bort. En längd hos ekvivalent cylinder på 1,5 m gav bäst resultat för
splitterstorlekar på 15,5 g, men avvikelsen blir mycket stor både för stora som små splitter, varav
denna längd heller inte blev aktuell.
Sammanfattningsvis så ger en ekvivalent cylinder på 2,2 m bäst överensstämmelse med försök för
de stora splittren, samt god överensstämmelse för medelstora och små splitter, varav denna längd
har valts för arkivbomben.
För beräknade värden hos arkivbomb avrundades cylinderns dimensioner, varav den splittergivande
massan blir 114,6 kg istället för den antagna 115 kg. Mängden sprängmedel blir avrundat med en
decimals noggrannhet till 125 kg. Data för arkivbomb vid framtagning av splitterbelastning
redovisas i Tabell 2.3.
0
5 000
10 000
15 000
20 000
25 000
30 000
0,1 1 10 100
Splittermassa [g]
L = 2,5m
L = 2,0m
L = 1,5m
Arkivbomb
Försök
Antalet splitter
Figur 3.2 Antalet splitter med en massa större än ms. Jämförelse mellan splitter från en
minbomb m/50 och fyra olika ekvivalenta cylindrar. Arkivbomben har längden 2,2 m.

-- 10 of 11 --

Beräkning av impulsbelastad konstruktion
11 (11)
B06-101
2015-07-01
63,5 32,5 15,5 8,5 3,8 2,5 1,5 1 0,5 0,1
L=2,5m 79 87 83 103 115 118 116 111 107 89
L=2,0m 121 110 90 103 105 104 100 94 88 70
L=1,5m 186 136 94 97 91 87 80 74 67 52
Arkivbomb 100 99 87 103 109 110 107 101 96 78
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
Ackumulerat antal i [%]
Arkivbomb
Viktklass
Figur 3.3 Ackumulerat antal splitter i % av splitter från en minbomb m/50 från fyra olika
ekvivalenta cylindrar. Arkivbomben har längden 2,2 m.

-- 11 of 11 --