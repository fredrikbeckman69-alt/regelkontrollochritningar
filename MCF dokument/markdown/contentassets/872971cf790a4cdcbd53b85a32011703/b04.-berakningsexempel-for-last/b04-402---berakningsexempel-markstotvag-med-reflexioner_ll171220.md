---
title: "B04 402   Berakningsexempel Markstotvag Med Reflexioner Ll171220"
category: "b04.-berakningsexempel-for-last"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b04.-berakningsexempel-for-last/b04-402---berakningsexempel-markstotvag-med-reflexioner_ll171220.pdf"
fileType: "PDF"
keywords: ["betong","beräkning","tryckvåg","markstötvågslast","dokument","reflexioner","detta","beräknas"]
summary: "Beräkning av markstötvågslast med reflexioner 1 (5) B04-402 2017-12-21 B04-402 Beräkningsexempel av markstötvågslast Med reflexioner från markytan och undre jordlager Författare: Leo Laine. Ansvarig utgivare: Lars Gråberg. 1 Orientering 2 1.1 Saml..."
---

Beräkning av markstötvågslast med reflexioner
1 (5)
B04-402
2017-12-21
B04-402 Beräkningsexempel av markstötvågslast
Med reflexioner från markytan och undre jordlager
Författare: Leo Laine. Ansvarig utgivare: Lars Gråberg.
1 Orientering 2
1.1 Samlingsdokument 2
1.2 Om detta dokument 2
2 Förutsättningar 2
3 Verkande markstötvågslast 3
3.1 Avstånden för direkt-, avlastnings- och bottenreflekteradvåg 3
3.2 Maxmalt tryck, ankomsttid, och stigtid för alla vågor 3
3.3 Tryckvågornas amplitud och som funktion av tiden 4

-- 1 of 5 --

Beräkning av markstötvågslast med reflexioner
2 (5)
B04-402
2017-12-21
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna dokument i serien hänvisas
till dokument B01-102.
1.2 Om detta dokument
I detta dokument visas ett beräkningsexempel på hur markstötvågslast kan beräknas för en punkt i
jorden med avståndet r från detonerande laddning. Först bestäms maximala värden lastvärden och
därefter ges tryck och partikelhastighet som funktion av tiden. Teoretisk bakgrund för här utförda
beräkningar behandlas i Laine (2012). En sammanställning av beräkningsanvisningar ges i
dokument B02-301. Det rekommenderas att först gå igenom beräkningsexempel markstötvåg utan
reflexioner i dokumen.
2 Förutsättningar
I Figur 2.1 illustreras studerat belastningsfall. En laddning, motsvarande W = 125 kg Composition
C-4, antas detonera d = 4 m under markytan. En punkt i jorden studeras med avseende på markstöt-
vågslast. Punkten befinner sig det horisontella avståndet r = 5 m från laddningens centrum och på
djupet z = 3 m från markytan. Markmaterialet utgörs av torr sand med densitet ρ1 = 1630 kg/m3
samt seismisk våghastighet c1 = 305 m/s. Det undre lagret antas befinna sig på djupet h = 9 m och
bestå av berg med densitet ρ2 = 2600 kg/m3 och seismisk våghastighet c1 = 4600 m/s.
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
Figur 2.1 En laddning motsvarande W = 125 kg Composition C4, placerad 4 m under
markytan, exploderar och markstötvågslast studeras på horisontella avståndet 5 m
och djupet 3 m. Reflexioner från markytan och undre markmaterial med högre
impedans tas med i beaktning.

-- 2 of 5 --

Beräkning av markstötvågslast med reflexioner
3 (5)
B04-402
2017-12-21
3 Verkande markstötvågslast
3.1 Avstånden för direkt-, avlastnings- och bottenreflekteradvåg
Första steget i beräkningen är att bestämma avstånden för direkt-, avlastnings- och bottenreflekterad
våg enligt ekvationerna
 	 	m	1	,	5	5	3	4 2	2 				d	r	
(3.1)
 	 	m	6	,	8	5	3	4 2	2 				sr	
(3.2)
 	 	m	1	,	12	5	3	4	9	2 2	2 						lr	
(3.3)
3.2 Maxmalt tryck, ankomsttid, och stigtid för alla vågor
Det skalade laddningsdjupet är D = d / W1/3 = 0,8 m/kg1/3, vilket ger en fördämningsfaktor på
f = 1,0, se beräkningsanvisningar i dokument B02-301. Även ankomsttider, stigtider och maxtryck
kan bestämmas med ekvationerna i detta dokument. Maxtrycket för direktvågen är lika med P0. Den
ytreflekterade vågen har getts negativt tecken, -P0 medan den bottenreflekterade vågen får ett
maxtryck på K·P0. Här behöver reflexionskoefficienten K beräknas, vilken i sin tur beror på
reflexionsvinkeln
. Denna kan beräknas ur sambandet
1	,	12
0	,	5
sin 	
lr
r
	
→ θ = 24,4º (3.4)
Ur detta kan villkoret för reflexionsekvationen beräknas som
0	999	,	0	4	,	24	sin
4600
305
1	sin	1
2	2
2
1 		





	





 θ
c
c
(3.5)
Ekvation (3.5) innebär att koefficienten K0 kan beräknas som
042	,	0	999	,	0
4600	2600
305	1630
sin	1
2
2
1
2	2
1	1
0 	



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
(3.6)
varvid reflexionskoefficienten slutligen kan beräknas som
91	,	0
042	,	0	4	,	24	cos
042	,	0	4	,	24	cos
cos
cos
0
0 





 K
K
K


(3.7)
Resultaten för ankomsttid, stigtid, och maxtryck summeras i Tabell 3.1. Se även beräkningsexempel
B04-401, hur direktvågen beräknades, observera skillnaden att i tidigare beräkningsexempel, B04-
401, är avståndet r = 5 m för direktvågen, här i detta exempel är avståndet rd = 5,1 m vilket leder till
ett lägre P0 värde och längre ankomsttid och stigtid.

-- 3 of 5 --

Beräkning av markstötvågslast med reflexioner
4 (5)
B04-402
2017-12-21
Tabell 3.1 Ankomsttid, stigtid, maxtryck för direkt-, ytreflekterad- och bottenreflekterad våg.
Parameter Direktvåg Ytreflekterad Bottenreflekterad
P(rd) P(rs) P(rl)
ta [ms] 16,72 28,20 39,62
tr [ms] 1,67 2,82 3,96
P0 [kPa] 1807 -429 154
α [-] 1,00 1,00 1,00
3.3 Tryckvågornas amplitud och som funktion av tiden
Nu kan följande exponentialekvationer användas för att beskriva avklingningen
   dtt
d	d e	r	P	P
	
	 0	
(3.8)
   stt
s	s e	r	P	P
	
		 0	
(3.9)
   ltt
l	l e	r	P	K	P
	
		 0	
(3.10)
där tryck-tidssambanden har justerats för aktuella avstånd. Direktvågen beräknas enligt ekvation
(3.8). I ekvation (3.9) har dock avlastningsvågen har fått ett tryck med ett negativt värde, det vill
säga en dragvåg, och den bottenreflekterade vågen Pl har multiplicerats med en
reflexionskoefficient K.
I Figur 3.1 visas tryckvågorna separat för direkt, ytreflekterad och bottenreflekterad våg. En
summering av dessa vågor ger en resulterande tryckvåg enligt Figur 3.2 och motsvarar det tryck-
tidssamband som på skyddskonstruktionen vid mätpunkten z = 3 m på skyddskonstruktionen. I det
totala tryck-tidssambandet kan noteras hur det har uppstått ett negativt hack i kurvan runt 31 ms på
grund av inverkan från ytreflexionen. På motsvarande sätt blir det ett positivt hack i kurvan runt
44 ms på grund av bottenreflexionen. Observera att detta är fortfarande den oreflekterade vågen vid
skyddskonstruktionen vid vinkelrätt reflexion med stel vägg hade en faktor 2 i reflexionsfaktor varit
förväntat.

-- 4 of 5 --

Beräkning av markstötvågslast med reflexioner
5 (5)
B04-402
2017-12-21
- 1000
- 500
0
500
1000
1500
2000
0 	20 	40 	60 	80 	100 	120 	140 	160 	180 	200
Tryck
 P [kPa]
tid t [ms]
direkt
ytreflekterad
bottenreflekterad
Figur 3.1 Direkt-, ytreflekterad-, och bottenreflekterad våg för studerad punkt i beräknings-
exempel enligt avsnitt 2.
0
200
400
600
800
1000
1200
1400
1600
1800
2000
0 	20 	40 	60 	80 	100 	120 	140 	160 	180 	200
Tryck
 P [kPa]
tid t [ms]
summa
Figur 3.2 Summering av direkt-, ytreflekterad-, och bottenreflekterad våg för studerad punkt i
beräkningsexempel enligt avsnitt 2.

-- 5 of 5 --