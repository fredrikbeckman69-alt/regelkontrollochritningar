---
title: "B04 401   Berakningsexempel Markstotvag I Frifalt 171220ll"
category: "b04.-berakningsexempel-for-last"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b04.-berakningsexempel-for-last/b04-401---berakningsexempel-markstotvag-i-frifalt_171220ll.pdf"
fileType: "PDF"
keywords: ["beräkning","markstötvågslast","reflexioner","utan","dokument","partikelhastighet","figur","520811"]
summary: "Beräkning av markstötvågslast i frifält utan reflexioner 1 (6) B04-401 2017-12-21 B04-401 Beräkningsexempel av markstötvågslast Frifält utan reflexioner Författare: Leo Laine. Ansvarig utgivare: Lars Gråberg 1 Orientering 2 1.1 Samlingsdokument 2 ..."
---

Beräkning av markstötvågslast i frifält utan reflexioner
1 (6)
B04-401
2017-12-21
B04-401 Beräkningsexempel av markstötvågslast
Frifält utan reflexioner
Författare: Leo Laine. Ansvarig utgivare: Lars Gråberg
1 Orientering 2
1.1 Samlingsdokument 2
1.2 Om detta dokument 2
2 Förutsättningar 2
3 Verkande markstötvågslast 3
3.1 Maximal partikelhastighet, tryck, impulstäthet, acceleration, och förskjutning 3
3.2 Ankomsttid och stigtid4 4
3.3 Exponentialfunktioner för tidsavklingning 5

-- 1 of 6 --

Beräkning av markstötvågslast i frifält utan reflexioner
2 (6)
B04-401
2017-12-21
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna dokument i serien hänvisas
till dokument B01-102.
1.2 Om detta dokument
I detta dokument visas ett beräkningsexempel på hur markstötvågslast kan beräknas för en punkt i
jorden med avståndet r från detonerande laddning. Först bestäms maximala lastvärden och därefter
ges tryck och partikelhastighet som funktion av tiden. Teoretisk bakgrund för här utförda beräk-
ningar behandlas i Laine (2012). En sammanställning av beräkningsanvisningar ges i dokument
B02-301.
2 Förutsättningar
I Figur 2.1 illustreras studerat belastningsfall. En laddning, motsvarande W = 125 kg av
sprängämnet Composition C-4, antas detonera d = 4 m under markytan. En punkt i jorden studeras
med avseende på markstötvågslast. Punkten befinner sig det horisontella avståndet r = 5 m från
laddningens centrum och på djupet z = 4 m från markytan. Markmaterialet utgörs av torr sand med
densitet ρ1 = 1630 kg/m3 samt seismisk våghastighet c1 = 305 m/s.
Figur 2.1 En laddning motsvarande W = 125 kg Composition C-4, placerad 4 m under mark-
ytan, exploderar och markstötvågslast studeras på horisontella avståndet på 5 m.
Reflexioner från markytan tas ej i beaktning (konservativt).

-- 2 of 6 --

Beräkning av markstötvågslast i frifält utan reflexioner
3 (6)
B04-401
2017-12-21
3 Verkande markstötvågslast
3.1 Maximal partikelhastighet, tryck, impulstäthet, acceleration, och
förskjutning
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
(3.1)
Där fördämningsfaktorn behöver bestämmas, för vår laddning som är sfärisk kan det skalade ladd-
ningsdjupet antas vara D = d / W1/3 = 4 / 1251/3 = 0,8 m/kg1/3 vilket ger en fördämningsfaktor på
f = 1,0, Dämpningsfaktorn för torr sand med densitet ρ1=1630 kg/m3 och seismisk hastighet
c1 = 305 m/s kan bestämmas till n = 2,75, se dokument B02-301. Tillsammans ger detta då
84	,	3
125
5
2,520811	1	768	,	48
75	.2
3/1	0 	




 			

p	u	
m/s (3.2)
Det maximala trycket kan beräknas med
1907	836	.	3	305	1630	0	0 						 p	u	c	P	
	
kPa (3.3)
Maximal impulstäthet kan beräknas med
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
och med insatta värden fås
0	,	31
125
5
2,5208
515,3179
1630
125	870892	,	9
1	75	.2
3/1
3/1
0 	
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
		
	
I	
kPas (3.5)
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
[m/s2] (3.6)
och med insatta värden fås
2354
125
5
520811	,	2
125
305	1
4578	,	1236
1	75	.2
3/1	3/1	0 	




 	

	
	
a	
m/s2. (3.7)

-- 3 of 6 --

Beräkning av markstötvågslast i frifält utan reflexioner
4 (6)
B04-401
2017-12-21
Slutligen beräknas den maximala förskjutningen som
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
[m]. (3.8)
och med insatta värden fås
197	,	0
125
5
520811	,	2
305
1
125	1	4567	,	60
1	75	.2
3/1
3/1
0 	




 					
	
d	
m. (3.9)
I Tabell 3.1 så har maximala markstötvågsparametrar sammanställts för en 125 kg laddning av C-4
som detonerar fullt nedgrävd i torr sand för det studerade avståndet 5 m.
Tabell 3.1 Maximala markstötvågsparametrar utan reflexioner.
Parameter Beteckning Maxvärde Enhet
Partikelhastighet Up0 3,84 m/s
Tryck P0 1907 kPa
Impuls I0 31,0 kPas
Acceleration a0 2354 m/s2
Förskjutning d0 0,197 m
3.2 Ankomsttid och stigtid4
Ankomsttiden för den studerade markstötvågen blir
4	,	16
305
5 		 c
r
ta	
ms (3.10)
Stigtiden för markstötvågen blir således
6	,	1	1	,	0 		 a	r t	t	
ms (3.11)

-- 4 of 6 --

Beräkning av markstötvågslast i frifält utan reflexioner
5 (6)
B04-401
2017-12-21
3.3 Exponentialfunktioner för tidsavklingning
För att beskriva markstötvågen som funktion av tid, se Figur 3.1, används exponentialfunktioner för
att beskriva avklingningstiden för partikelhastighet och tryck.
Figur 3.1 Partikelhastighet som funktion av tid för en oreflekterad markstötvåg.
Följande ekvationer kan användas för att beskriva trycket och partikelhastigheten som funktion av
tiden
at	t
e	P	t	P /
0	)	(
	
		
(3.12)
och
at	t
a	p	p 	e	t	t	U	t	U /
0 	)	/	1	(	)	(

 
				
(3.13)
där tiden t ≥ ta + tr, P0 maximalt tryck och maximal partikelhastighet Up0 har redan beräknats i
avsnitt 3.1. Följande värden användes för tidskonstanterna
0	,	1	
		
och	5	,	8	/	1	
		 (3.14)
Då fås följande diagram för markstötvågslasten i den studerade punkten, se Figur 3.2 och Figur 3.3.
Dessa värden är för en oreflekterad markstötvåg våg. För en reflekterande våg såsom vinkelrät
reflexion mot en stel vägg fås en reflexionsfaktor på 2.

-- 5 of 6 --

Beräkning av markstötvågslast i frifält utan reflexioner
6 (6)
B04-401
2017-12-21
Figur 3.2 Partikelhastighet som funktion av tid för en oreflekterad markstötvåg.
Figur 3.3 Tryck som funktion av tid för en oreflekterad markstötvåg.

-- 6 of 6 --