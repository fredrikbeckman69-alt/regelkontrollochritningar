---
title: "B02 301   Berakningsanvisning For Markstotvagslast Fran Nedgravd Laddning Ll171220"
category: "b02.-berakningsanvisning-for-last"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b02.-berakningsanvisning-for-last/b02-301---berakningsanvisning-for-markstotvagslast-fran-nedgravd-laddning_ll171220.pdf"
fileType: "PDF"
keywords: ["betong","beräkning","explosion","vatten","tryckvåg","laddning","markstötvåg","nedgrävd"]
summary: "Beräkning av markstötvåg från nedgrävd laddning 1 (12) B02-301 2017-12-21 B02-301 Beräkningsanvisning av markstötvåg Markstötvåg från nedgrävd laddning Författare: Leo Laine. Ansvarig utgivare: Lars Gråberg 1 Orientering 2 1.1 Samlingsdokument 2 1..."
---

Beräkning av markstötvåg från nedgrävd laddning
1 (12)
B02-301
2017-12-21
B02-301 Beräkningsanvisning av markstötvåg
Markstötvåg från nedgrävd laddning
Författare: Leo Laine. Ansvarig utgivare: Lars Gråberg
1 Orientering 2
1.1 Samlingsdokument 2
1.2 Om detta dokument 2
2 Förutsättningar 3
3 Maximala markstötvågsvärden vid avståndet r 6
4 Tryck och partikelhastighet som funktion av tid 8
4.1 Koncept 8
4.2 Ankomsttid och stigtid 9
4.3 Exponentialfunktioner för tidsavklingning 9
5 Inverkan av reflexioner från markytan och underliggande jordmaterial 10
5.1 Koncept 10
5.2 Avstånden för direkt-, avlastnings- och bottenreflekterad våg 11
5.3 Tryckvågornas amplitud och som funktion av tiden 11

-- 1 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
2 (12)
B02-301
2017-12-21
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 Om detta dokument
I detta dokument behandlas hur den fria lasten från markstötvåg kan beräknas för en fullt eller
delvis nedgrävd laddning som exploderar. Presenterade beräkningsanvisningar utgår från kända
empiriska ekvationer som hanterar olika laddningsavstånd, laddningsstorlek, laddningsdjup, och
jordmaterial. Teoretisk bakgrund för här redovisade samband behandlas i kapitel 9, Laine (2012).

-- 2 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
3 (12)
B02-301
2017-12-21
2 Förutsättningar
Förutsättningarna för här presenterade empiriska ekvationer ska anses vara giltiga är att laddningen
har placerats i jordmaterial som är närbesläktade med de som anges i Tabell 2.1. I tabellen syns det
att torr sand, tät sand, våt sandig lera, vattenmättad sandig lera, fullt vattenmättad lera, är jord-
fyllnadsmaterial som med enkelhet kan användas i de empiriska ekvationerna för att prediktera
trycklast och partikelhastighet i jorden. Däremot är till exempel inte berg eller sprängsten represen-
terade i tabellen. Däremot så kan grus till exempel till viss del representeras av torr sand med viss
ökning i dämpningskoefficienten.
Tabell 2.1 Jordmaterialkoefficienter för olika jordtyper.
Jordtyp Densitet
ρ
[kg/m3]
Seismisk
hastighet c
[m/s]
Akustisk
impedans
[kPa/m/s]
Dämpnings
koeff. n
[-]
lös, torr sand med låg
relativ densitet 1490 183 271 3,1
torr sand, och
återfyllning 1630 305 498 2,75
tät sand, med hög
relativ densitet 2030 488 995 2,5
våt sandig lera med
> 4 % luftporer 1990 549 1086 2,5
vattenmättad sandig lera
med < 1 % luftporer 1920 1524 2941 2,4
fullt vattenmättad lera 2030 1829 3732 1,5
En annan viktig förutsättning för de empiriska ekvationerna är fördämningsfaktorn f som beskriver
hur stor andel av laddningens energi som förs ner i marken. För detta används skalat laddningsdjup
3/1
W
d
D 	
[m/kg1/3] (2.1)
för att beskriva var i marken som laddningen detonerar och hur mycket av den detonerade
laddningens frisläppta energi som sprids till marken respektive till luften. Här anger d och W
laddningens djup respektive laddningsvikt, se Figur 2.1 som visas en detonerande cylindrisk
laddning som är delvis lokaliserad under markytan.

-- 3 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
4 (12)
B02-301
2017-12-21
Figur 2.1 Den totala fördämningsfaktorn f för en laddning kan sammanställas av flera
fördämningsfaktorer fi hos laddningens olika delar som befinner sig i olika materia
vid tidpunkten för detonation.
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
Figur 2.2 Fördämningsfaktorn, f, som funktion av skalat laddningsdjup. Om laddningen
detonerar i luft är f = 0,14.
För fallet med en cylindriskt formad laddning beräknas en total fördämningsfaktor med hjälp av
ekvation (2.2). Själva fördämningsfaktorn för varje cylinderdel fås från Figur 2.2. Vid det skalade
laddningsdjupet D = 0 m/kg1/3 (vid markytan) är fördämningsfaktorn f = 0,4 och vid det skalade
laddningsdjupet D = 0,55 m/kg1/3 (motsvarar en fullt nedgrävd laddning) fås f = 1,0. Explosion ovan
mark räknas som fördämningsfaktor f = 0,14, vilket nås vid ett skalat laddningsdjup mindre än
D = -0,07 m/kg1/3.






  L
L
f	f i
n
i
i
1
(2.2)
där

-- 4 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
5 (12)
B02-301
2017-12-21


n
i
i	L	L 1
(2.3)
En annan viktig aspekt är att de empiriska ekvationerna beskrivna här utgår från sprängämnet
Composition C-4, se Tabell 2.2. Om exempelvis sprängämnet TNT ska studeras måste laddnings-
vikten därför först divideras med 1,37 när maximalt tryck och partikelhastighet bestäms och med
1,19 för att bestämma maximal impulstäthet.
Tabell 2.2 Viktskalningsfaktorer för olika typer av sprängämnen. I detta dokument givna
samband utgår från Composition C-4.
Sprängämne Ekvivalent vikt
Tryck Impuls
ANFO 0,82 0,82
Composition A-3 1,09 1,07
Composition B 1,11 0,98
Composition C-4 1,37 1,19
Cyclotol 1,14 1,09
HBX-1 1,17 1,16
HBX-3 1,14 0,97
H-6 1,38 1,15
Minol II 70/30 1,20 1,11
Octol 75/25 1,06 1,06
PETN 1,27
Pentolite 1,42 1,00
Tetryl 75/25 1,07
Tetrytol 70/30 1,06
TNETB 1,36 1,10
TNT 1,00 1,00
Tritonal 1,07 0,96

-- 5 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
6 (12)
B02-301
2017-12-21
3 Maximala markstötvågsvärden vid avståndet r
Här ges beräkningsanvisningar till hur markstötvågens maximala partikelhastighet, oreflekterat
tryck, impulstäthet, acceleration och förskjutning på avståndet r, (r = z), kan beräknas för fallet med
nedgrävd laddning med laddningsvikten W som detonerar på laddningsdjupet d, se Figur 3.1
Figur 3.1 Nedgrävd laddning i jord, där markstötvågens maxvärden studeras på avståndet r.
Den maximala partikelhastigheten kan beräknas som
n
p W
r
f	u






 			 3/1	0 2,520811	768	,	48	
[m/s] (3.1)
där W är ekvivalent laddningsvikt i C-4 [kg], r är laddningsavstånd [m], n är jordmaterialets
dämpningskoefficient [-] och f är fördämningsfaktorn [-] som beror på det skalade laddningsdjupet
D [m/kg1/3], se Figur 2.2. Ekvation (3.1) är endast giltig för Z ≥ 0.4 m/kg1/3, där
3/1
W
r
Z 	
[m/kg1/3] (3.2)
är det skalade laddningsavståndet. Vid kortare laddningsavstånd är det detonationsvågen från
laddningen som blir avgörande för partikelhastigheten och trycket.

-- 6 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
7 (12)
B02-301
2017-12-21
Det maximala oreflekterade trycket kan beräknas som
n
p W
r
c	f	u	c	P






 								 3/1	0	0 2,520811	768	,	48	

		
[Pa] (3.3)
där densitet
 och seismisk hastighet c återfinns i Tabell 2.1 för olika jordmaterial.
Maximal impulstäthet kan beräknas med1
1
3/1
3/1
0 2,520811
515,3179
870892	,	9
	





 		





		
n
W
r
W	I

[kPas] (3.4)
där W är laddningsvikt i ekvivalent C-4 [kg],
 är densitet [kg/m3], r avståndet i [m] mellan ladd-
ning och mätpunkt och n är dämpningsfaktorn för jordmaterialet.
Maximal acceleration kan beräknas med
1
3/1	3/1	0 2,520811	4578	,	1236
	





 	

	
n
W
r
W
c	f
a	
[m/s2] (3.5)
Maximal förskjutning kan beräknas med2
1
3/1
3/1
0 520811	,	2
1
4567	,	60
	





 					
n
W
r
c
W	f	d	
[m] (3.6)
1 I Laine (2012) har motsvarande ekvation, ekvation (9:31m), felaktigt angetts att den första faktor i ekvationen är
”7,5842”. I denna beräkningsanvisning används rätt faktor ”9.870892”.
2 I Laine (2012) har motsvarande ekvation, ekvation (9:31r), i Laine(2012) felaktigt angetts utan faktorn ”2,520811” i
den sista parentesen. I denna beräkningsanvisning har denna faktor dock lagts till.

-- 7 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
8 (12)
B02-301
2017-12-21
4 Tryck och partikelhastighet som funktion av tid
4.1 Koncept
I kapitel Fel! Hittar inte referenskälla. ges uttryck för hur maximal partikelhastighet, tryck,
impulstäthet, acceleration och förskjutning kan bestämmas för en markstötvåg på avståndet r från
en fullt eller delvis nedgrävd laddning som detonerar i marken. Dessa uttryck fyller ett viktigt syfte
i att de är enkla att använda samt ger en snabb och konservativ bedömning av aktuella maxvärden
för den fria markstötvågen. För mer detaljerade beräkningar av dynamisk last är det dock även av
intresse att studera partikelhastighet och tryck som funktion av tiden vid en viss punkt från
laddningen, se Figur 3.1.
En stötvåg utan reflexioner kan förenklat beskrivas med en belastningskurva enligt Figur 4.1. På
den horisontella axeln visas hur ankomsttiden ta, tiden för maxvärde tp, tiden för positiva fasen td,
restiden tr samt den positiva varaktigheten t+ definieras. Den vertikala axeln visar parti-
kelhastigheten där maximal partikelhastighet Up0 är definierad.
Figur 4.1 Partikelhastighet som funktion av tid för en oreflekterad markstötvåg.

-- 8 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
9 (12)
B02-301
2017-12-21
4.2 Ankomsttid och stigtid
Ankomsttiden för en stötvåg kan beräknas som
c
r
ta 	
(4.1)
där r är avståndet från explosionens centrum till studerad punkt och c är den seismiska våghastig-
heten eller aktuell stötvåghastighet i jordmaterialet, se Tabell 2.1.
Stigtiden för markstötvågen kan beräknas som
a	r t	t 	 1	,	0	
(4.2)
4.3 Exponentialfunktioner för tidsavklingning
När det gäller beskrivningen av tryck och partikelhastighet som funktion av tid kan följande
ekvationer användas
at	t
e	P	t	P /
0	)	(
	
		
(4.3)
och
at	t
a	p	p e	t	t	U	t	U /
0 )	/	1	(	)	(

 
				
(4.4)
där tiden t ≥ ta + tr, P0 maximalt tryck kan beräknas ur ekvation (3.3) och maximal partikelhastighet
Up0 beräknas med ekvation (3.1). Tidskonstanterna
 och
 varierar med den aktuella platsen men
som approximation kan följande värden användas:
0	,	1	
		
och	5	,	8	/	1	
		 (4.5)

-- 9 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
10 (12)
B02-301
2017-12-21
5 Inverkan av reflexioner från markytan och underliggande
jordmaterial
5.1 Koncept
Generellt propagerar inte en markstötvåg genom ett homogent medium. Istället är det normalt att
detta består av flera olika typer av jordlager, varierande grundvattennivåer, berg, luft ovan jord, och
byggnadskonstruktioner under marknivå som utgör medier som markstötvågen reflekterar mot. I
detta avsnitt ges en förenklad metod för beräkning av sådana reflexioner.
I Figur 5.1 illustreras hur den slutliga stötvågen mot en skyddskonstruktion egentligen byggs upp av
bidrag från flera olika vågor. En direktvåg rd, en avlastningsvåg från ytan rs och en botten-
reflekterad våg rl. Här kommer dessa vågors sammansättning att tas fram med enklare ekvationer.
Luft med låg impedans
jämfört med jord
rd
rs
rl
d = 4 m
h-d
h = 9 m
z = 3 m
Skyddskonstruktion
av betong
r = 5 m
w C-4 =
125 kg
Figur 5.1 Beskrivning av generella avstånd för direkt-, ytreflekterad-, avlastnings- och botten-
reflekterad våg mot en skyddskonstruktion.

-- 10 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
11 (12)
B02-301
2017-12-21
5.2 Avstånden för direkt-, avlastnings- och bottenreflekterad våg
Avstånden kan beräknas med följande ekvationer
 	 2	2 r	z	d	rd 			
(5.1)
 	 2	2 r	z	d	rs 			
(5.2)
 	 2	2
2 r	z	d	h	rl 				
(5.3)
där h är jordlagrets tjocklek, d är laddningsdjup, r är laddningens horisontella avstånd till skydds-
konstruktionen och z är vertikalt djup från ytan för studerad punkt på skyddskonstruktionen.
5.3 Tryckvågornas amplitud och som funktion av tiden
När stötvågornas avstånd har beräknats enligt kapitel 4 kan initialt tryck P0 bestämmas för alla tre
stötvågorna. Utgående från detta kan sedan tryck-tidssamband för dessa tryckstötvågor beräknas
som
   dtt
d	d e	r	P	P
	
	 0	
(5.4)
   stt
s	s e	r	P	P
	
		 0	
(5.5)
   ltt
l	l e	r	P	K	P
	
		 0	
(5.6)
där tryck-tidssambanden har justerats för aktuella avstånd. Direktvågen beräknas enligt kapitel 4. I
ekvation (5.5) har dock avlastningsvågen har fått ett tryck med ett negativt värde, det vill säga en
dragvåg, och den bottenreflekterade vågen Pl har multiplicerats med en reflexionskoefficient K.
Denna reflexionskoefficienten beräknas som







0	,	1
cos
cos
0
0
K
K
K	

2
2
1
annars
sin	1	för 





 θ
c
c
(5.7)
där koefficienten K0 kan beräknas som
2
2
1
2	2
1	1
0 sin	1 








 θ
c
c
c
c
K


(5.8)
Här indikerar index 1 densitet och seismisk hastighet för det övre lagret och index 2 indikerar densi-
tet och seismisk hastighet för det undre lagret.

-- 11 of 12 --

Beräkning av markstötvåg från nedgrävd laddning
12 (12)
B02-301
2017-12-21
Vinkeln
 definieras som
lr
r

		sin	
(5.9)
och
lr
z	d	h 	
 2
cos
	
(5.10)
där längderna är illustrerade i Figur 5.1.

-- 12 of 12 --