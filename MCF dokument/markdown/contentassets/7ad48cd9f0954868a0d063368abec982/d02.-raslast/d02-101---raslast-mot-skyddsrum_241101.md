---
title: "D02 101   Raslast Mot Skyddsrum 241101"
category: "d02.-raslast"
originalFile: "contentassets/7ad48cd9f0954868a0d063368abec982/d02.-raslast/d02-101---raslast-mot-skyddsrum_241101.pdf"
fileType: "PDF"
keywords: ["skyddsrum","beräkning","kontroll","byggnad","raslast","näraliggande","raslasten","d02-101"]
summary: "Dimensioneringslösning 1 (14) D02-101 2024-11-01 D02-101 Last mot skyddsrum Raslast mot skyddsrum 1 Orientering 2 1.1 Bakgrund 2 1.2 Om detta dokument 2 2 Anvisningar enligt SR 3 2.1 Orientering 3 2.2 Raslast 4 3 Beräkningsexempel 7 3.1 Beskrivnin..."
---

Dimensioneringslösning
1 (14)
D02-101
2024-11-01
D02-101 Last mot skyddsrum
Raslast mot skyddsrum
1 Orientering 2
1.1 Bakgrund 2
1.2 Om detta dokument 2
2 Anvisningar enligt SR 3
2.1 Orientering 3
2.2 Raslast 4
3 Beräkningsexempel 7
3.1 Beskrivning 7
3.2 Raslast från ovanliggande byggnad 8
3.3 Raslast från näraliggande, mellanhög byggnad (Byggnad A) 9
3.4 Raslast från näraliggande, hög byggnad (Byggnad B) 10
3.5 Total raslast 12
4 Revideringslista 14

-- 1 of 14 --

Dimensioneringslösning
2 (14)
D02-101
2024-11-01
1 Orientering
1.1 Bakgrund
I SR anges att verkan av raslast mot skyddsrumstak och takplatta vid förstärkt utrymningsväg ska
beaktas för kollaps av ovanliggande samt näraliggande byggnader. Denna kravställning infördes
1978, via dåvarande regelverk TB 78, och samma konceptuella metod har använts sedan dess.
Raslasten blir i regel högre än vapenlasten för byggnader där tre våningar eller mer är belägna ovan
skyddsrummet. Vidare utgör raslasten ett potentiellt problem för befintliga skyddsrum eftersom
raslasten påverkas av ny bebyggelse i skyddsrummets omedelbara närhet. En bidragande anledning
till detta är att det i dagens byggande uppförs högre byggnader än vad som var fallet när de befint-
liga raslastreglerna ursprungligen togs fram. I dagens Sverige blir det alltmer vanligt att uppföra
byggnader med en höjd på 100 m eller mer, vilket gör att resulterande raslast dels kan bli mycket
hög, dels kan påverka många näraliggande skyddsrum. Eftersom stora raslaster ofta är svåra/inte
möjliga att förstärka mot, kan detta få stora konsekvenser för befintliga skyddsrum och eventuellt
resultera i att de behöver tas ur bruk och ersättas med nya.
Med anledning av detta har MSB gjort en översyn av ursprungliga anvisningar för raslast och tagit
fram en justerad beräkningsmetod där raslast från ovanliggande och näraliggande byggnad kan
reduceras jämfört med tidigare regelverk. Erhållna raslaster kan även med den justerade beräknings-
metoden bli betydande men kommer vara lägre än de ursprungligen framtagna sambanden.
1.2 Om detta dokument
I detta dokument presenteras anvisningar för hur raslasten från ovanliggande samt näraliggande
byggnader beräknas. Fokus ligger på att illustrera hur anvisningar om raslast i SR är avsedda att
tolkas och användas. Med beaktande av detta redovisas inte någon detaljerad redovisning av förut-
sättningar eller beräkningar av t.ex. ingående rasmassa – för information om hur detta kan göras
hänvisas istället till andra dimensioneringslösningar.

-- 2 of 14 --

Dimensioneringslösning
3 (14)
D02-101
2024-11-01
2 Anvisningar enligt SR
2.1 Orientering
I detta avsnitt återges anvisningar för hur raslast beräknas enligt SR. Raslasten antas kunna verka
mot såväl skyddsrumstak som takplatta i förstärkt utrymningsväg, i detta dokument behandlas dock
enbart det förra. Jämfört med ursprungliga anvisningar i TB78 och SR har följande justeringar
gjorts för beräkning av raslast:
• Justering av grunduttrycket för raslastens storlek, vilket medför att raslastens storlek mins-
kar med omkring 10 % eller 30 % för en byggnadshöjd hn på 6 m respektive 30 m, där bygg-
nadshöjden hn definieras i Figur 2.1
• En begränsning av maximal raslast så att denna inte kan överstiga raslast från näraliggande
byggnad när ingående rasmassor är okända.
• Ett förtydligande av hur raslastens grundvärde qn kan bestämmas för last från näraliggande
byggnad när storleken på dess ingående rasmassor är kända.
• Införande av en reduktionsfaktor ηn som minskar raslasten från näraliggande byggnad när
avståndet från denna överstiger 5 m.
• Reducerat avstånd från näraliggande byggnad där inverkan av raslast behöver beaktas. Juste-
ringen får effekt för höga byggnader där hn > 90 m.
< 45°
45°
Skyddsrum
hn
hn
hn
ht
Figur 2.1 Definition av byggnaders höjd ovan skyddsrummet.

-- 3 of 14 --

Dimensioneringslösning
4 (14)
D02-101
2024-11-01
2.2 Raslast
Raslasten qras är en vertikal last som ska antas verka mot skyddsrumstaket eller takplatta vid för-
stärkt utrymningsväg. I en given punkt beräknas raslasten som
( 	)
2
max , ,50 kN/m	ras b n n	q q q	

	= 	
(1)
där
( 	)	
,1 max	min ,	b b	q q q	=	
(2)
avser raslast från ovanliggande byggnad och
( 	)	
,1 max
max
min ,	n
n
q q
q q

= 

om rasmassa är känd
om rasmassa är okänd
n
n
m
m
(3)
avser raslast från en näraliggande byggnad. Vidare gäller att qras ≥ 50 kPa, vilket innebär att ras-
lasten inte kan understiga vapenlastens minsta tillåtna värde.
För ovanliggande byggnad beräknas raslasten som
( 	)	
,1 0, 7 1	b t b	q h m	=  + 	
(4)
där ht är vertikalt avstånd [m] mellan skyddsrummets överkant och byggnadens tyngdpunkt och mb
är rasmassa hos ovanliggande byggnad. Samma princip används även för raslast
( 	)	
,1 0, 7 1	n t n	q h m	=  + 	
(5)
från näraliggande byggnad om dess rasmassa mn är känd. Båda dessa begränsas dock av den maxi-
mala raslasten
3
max 1,5 3, 0	n n	q h h	=  + 	
(6)
som fås när mn är okänd. För samband i ekvation (4) till (6) definieras höjder ht och hn enligt
Figur 2.1 medan mb och mn är rasmassor (egentyngd och nyttig last) uttryckta i enheten [kN/m2] hos
ovanliggande respektive näraliggande byggnad. För hus med en jämn massfördelning, såsom nor-
mala bostads- och kontorshus, anges i SR att ht = hn / 2 får antas för den aktuella byggnaden. Ras-
lastens storlek kan variera för olika delar av ett och samma skyddsrum.
Den första termen i ekvation (4) och (5) beskriver det dynamiska lasttillskott som erhålls av de ned-
fallande rasmassorna medan den andra termen motsvarar rasmassornas statiska lastbidrag. Ekva-
tion (6) är i sin tur härledd från ekvation (5) med antagande om att ht = hn / 2 och att rasmassans
tunghet uppgår till mn’ = mn / hn = 3,0 kN/m3.

-- 4 of 14 --

Dimensioneringslösning
5 (14)
D02-101
2024-11-01
Raslast från en näraliggande byggnad ska beaktas om utsida fasad hos byggnaden är placerad inom
avståndet xras från skyddsrummet, där detta avstånd beräknas som
3
n
ras
h
x =	
om hn ≤ 90 m
90
30 6
n
ras
h
x −
= +	
om hn > 90 m
(7)
När avståndet x mellan skyddsrum och utsida fasad hos aktuell del i näraliggande byggnad över-
stiger 5 m får raslasten från den näraliggande byggnaden reduceras med en reduktionsfaktor ηn.
Denna faktor beräknas som
1, 0	n	

	=	
om x ≤ 5 m
1
2
1
n
ekv
x
b

	= 
+
om x > 5 m (8)
där
0	ekv	b A	=	
(9)
är en ekvivalent längd som beräknas från tvärsnittsarean A0 hos ett representativt våningsplan hos
den näraliggande byggnaden.
För en byggnad med varierande tvärsnittsarea i olika våningsplan kan A0 beräknas som
0
0
n
V
A h
=	
(10)
där V0 är volymen av den del av byggnaden som ger upphov till raslasten och hn är höjd för denna
del så som definieras i Figur 2.1.
För en situation där det inte är känt vilken geometrisk utformning som en näraliggande byggnad har
kan den ekvivalenta längden bekv approximativt beräknas som
120
70
1
ekv
n
b
h
=
+
om hn ≤ 50 m
30
20
1
ekv
n
b
h
=
−
om 50 m < hn ≤ 200 m
6
n
ekv
h
b =	
om hn > 200 m
(11)

-- 5 of 14 --

Dimensioneringslösning
6 (14)
D02-101
2024-11-01
Eftersom reduktionsfaktorn ηn varierar med avståndet x så innebär detta att raslasten från en nära-
liggande byggnad kan vara olika stor mot olika delar av skyddsrummet. Vid dimensionering godtas
dock att konservativt anta ett större raslastvärde än vad som har beräknats i en given punkt, t.ex. att
anta att det största raslastvärdet som kan verka mot skyddsrummet också verkar över hela skydds-
rummet, oavsett avstånd till näraliggande byggnad.
Raslasten från flera olika byggnader ska beaktas i samma lastfall. Den aktuella raslasten från olika
byggnader ska dock inte summeras, istället begränsas denna till den största av de verkande ras-
lasterna i en given punkt så som anges i ekvation (1). Den resulterande raslasten qras kan slutligen
reduceras enligt anvisningar i SR för att beakta gynnsam inverkan av kupolverkan i rasmassorna.

-- 6 of 14 --

Dimensioneringslösning
7 (14)
D02-101
2024-11-01
3 Beräkningsexempel
3.1 Beskrivning
För att illustrera effekten av de uttryck som presenteras i avsnitt 2.2 ges här ett beräkningsexempel
där raslast från ovanliggande samt två näraliggande byggnader beräknas, se Figur 3.1 och Figur 3.2.
För byggnad A, antas geometrin vara känd men rasmassa okänd medan det för byggnad B antas att
både geometri och rasmassa är kända.
Byggnad B består av en lågdel och en högdel, där den senare har en topp som har en något mindre
tvärsnittsarea. Lågdelen är placerad närmare skyddsrummet än högdelen men här görs enbart beräk-
ning av raslast för högdelen eftersom lågdelen befinner sig på ett sådant avstånd att den inte ger
upphov till någon raslast mot skyddsrummet.
24
95
10
Skyddsrum
Byggnad A
Byggnad B
6 25
45
3
100
8
7
Gräns för högdel10 [m]
15
Tunghet rasmassa
mb’ = 2,5 kN/m3
mn,A’ = okänd
mn,B’ = 1,9 kN/m2
högdel
lågdel
Figur 3.1 Placering av näraliggande byggnader i förhållande till skyddsrummet (sektion). Ras-
massornas tungheter, m’ = m / hn, som används i exemplet anges i inramad ruta.

-- 7 of 14 --

Dimensioneringslösning
8 (14)
D02-101
2024-11-01
30
Skyddsrum
Byggnad A Byggnad B
6 25
10
25
25	3
3
7
10
[m]
Figur 3.2 Placering av näraliggande byggnader i förhållande till skyddsrummet (plan).
3.2 Raslast från ovanliggande byggnad
Förutsättningar:
• hn = 10 m → ht = 10 / 2 = 5 m (i enlighet med SR antas en jämn massfördelning)
• mb’ = 2,5 kN/m3 → mb = mb’∙hn = 2,5·10 = 25 kN/m2 → använd ekvation (4) för qb,1
Raslasten bestäms som
( 	) 	( 	)
2
,1 0, 7 1 0, 7 5 1 25 65 kN/m	b t b	q h m	=  +  =  +  =	
(12)
och jämförelse görs därefter med maximal raslast enligt ekvation (6)
3 2
max 1,5 10 3, 0 10 77 kN/m	q =  +  =	
(13)
Raslast för ovanliggande byggnad kan därefter, via ekvation (2), bestämmas som
( 	)	
( 	)
2
,1 max	min , min 65, 77 65 kN/m	b b	q q q	= = =	
(14)
För raslast från ovanliggande byggnad används inte någon reduktionsfaktor ηn.

-- 8 of 14 --

Dimensioneringslösning
9 (14)
D02-101
2024-11-01
3.3 Raslast från näraliggande, mellanhög byggnad (Byggnad A)
Förutsättningar:
• Minsta avstånd mellan byggnad och skyddsrum: xmin,A = 6 m
• Byggnadshöjd: hn,A = 24 m
• Byggnadens tvärsnittsarea: A0,A = 10 × 30 = 300 m2
• Rasmassa: Okänd → använd ekvation (6) för qn,A
Enligt ekvation (7) är raslast mot skyddsrum från byggnad A enbart aktuellt inom ett avstånd
,
,
24 8 m
3 3
n A
ras A
h
x = = =	
(15)
från byggnadens fasad. Här fås att xmin,A= 6 m < 8 m, varför raslast mot skyddsrum från byggnad A
ska beaktas. Raslasten bestäms som
3 3 2
, max, , ,	1,5 3, 0 1,5 24 3, 0 24 248 kN/m	n A A n A n A	q q h h	= =  +  =  +  =	
(16)
För en näraliggande byggnad kan reduktionsfaktorn ηn beräknas enligt ekvation (8). Här gäller att
, , 300 17,3 m	ekv A o A	b A	= = =	
(17)
varvid värden på ηn,A och ηn,A∙qn,A fås enligt Tabell 3.11.
Tabell 3.1 Reduktionsfaktor och resulterande raslast för byggnad A. Inom ett avstånd x ≤ 5 m
från byggnad fås ingen reduktion. Detta område är i tabellen markerat med grått
medan raslaster som är relevanta för exemplet är markerade med grönt.
xA ηn,A ηn,A∙qn,A
[m] [-] [kN/m2]
0 – 5 1,00 248
5+ 0,63 157
6 0,59 147
7 0,55 137
8 0,52 129
1 Om byggnadens tvärsnittsarea A0,A hade varit okänd hade längden bekv,A istället beräknats enligt ekvation (11) som
,
,
120 120 30, 6 m
70 70
1 	1 24
ekv A
n A
b
h
= 	= =
+ 	+
vilket hade resulterat i ett högre värde på ηn,A (dvs. en högre total raslast).

-- 9 of 14 --

Dimensioneringslösning
10 (14)
D02-101
2024-11-01
3.4 Raslast från näraliggande, hög byggnad (Byggnad B)
Förutsättningar:
Lågdel
• Minsta avstånd mellan byggnad och skyddsrum: xmin,B,låg = 25 – 7 = 18 m
• Byggnadshöjd: hn,B,låg = 15 m
Högdel
• Minsta avstånd mellan byggnad och skyddsrum: xmin,B,hög = 25 m
(mäts från den del av byggnaden som representerar dess högdel, se Figur 3.1)
• Byggnadshöjd: hn,B,hög = 100 m → ht,B,hög = 100 / 2 = 50 m
(eftersom rasmassan är känd kan ht användas, varvid en jämn massfördelning antas)
• Byggnadens tvärsnittsarea: A0,B,hög = 25 × 25 = 625 m2
(konservativ förenkling som bortser från byggnadens avsmalnade topp)
• Rasmassa: mn,B’ = 1,9 kN/m3 → mn,B = 1,9·100 = 190 kN/m2
→ använd ekvation (5) för qn,1,B
Enligt ekvation (7) är raslast mot skyddsrum från byggnad B enbart aktuellt inom ett avstånd
, ,
, ,
15 5 m
3 3
n B låg
ras B låg
h
x = = =	
(lågdel) (18)
och
, ,
, ,
90 100 90
30 30 32 m
6 6
n B hög
ras B hög
h
x − −
= + = + =	
(högdel) (19)
mätt från fasad i lågdel respektive högdel.
För lågdelen är xmin,B,låg = 18 m > 5 m, varför raslast från denna del inte behöver beaktas – någon
raslast från lågdelen redovisas därför inte heller här. För högdelen ska dock raslast mot skydds-
rummet beaktas eftersom xmin,B,hög = 25 m < 32 m = xras,B,hög.

-- 10 of 14 --

Dimensioneringslösning
11 (14)
D02-101
2024-11-01
Raslasten i högdelen bestäms som
( 	) 	( 	)
2
,1, . , , ,	0, 7 1 0, 7 50 1 190 1130 kN/m	n B hög t B hög n B	q h m	=  +  =  +  =	
(20)
Enligt ekvation (3) görs dock även en kontroll att detta lastvärde inte överstiger maximal raslast
3 3 2
max, , , , , ,	1,5 3, 0 1,5 100 3, 0 100 1800 kN/m	B hög n B hög n B hög	q h h	=  +  =  +  =	
(21)
enligt ekvation (6). Så är inte heller fallet här, varför qn,B,hög = qn,1,B,hög = 1 130 kN/m2 slutligen fås.
Reduktionsfaktorn ηn,B beräknas enligt ekvation (8) där
, , 0, , 625 25, 0 m	ekv B hög B hög	b A	= = =	
(22)
varvid värden på ηn,B,hög och ηn,B,hög∙qn,B,hög fås enligt Tabell 3.22 3.
Tabell 3.2 Reduktionsfaktor och resulterande raslast för högdel i byggnad B. Inom ett avstånd
x ≤ 5 m från högdel fås ingen reduktion. Detta område är i tabellen markerat med
grått medan raslaster som är relevanta för exemplet är markerade med grönt.
xB,hög ηn,B,hög ηn,B,hög∙qn,B,hög
[m] [-] [kN/m2]
0 – 5 1,00 1 130
5+ 0,71 807
10 0,56 628
15 0,45 514
20 0,38 435
25 0,33 377
30 0,29 332
32 0,28 318
2 Baserat på de geometriska förutsättningarna i byggnadens högdel kan även en mer noggrann beräkning göras för
bestämning av A0,B. Denna skulle därmed kunna beräknas som
( 	) ( 	)
2	2
0, , 	2
0, ,
, ,
95 25 8 3 25 2 3 612 m
100
B hög
B hög
n B hög
V
A h
 + −  − 
= = 	=
vilket i det här fallet är tämligen snarlikt det ovan beräknade A0,B = 625 m2. Baserat på denna mer noggranna beräkning
skulle den ekvivalenta längden blivit bekv,B = 24,7 m, vilket hade resulterat i ett marginellt lägre värde på ηn,B. (dvs. en
något lägre raslast).
3 Om byggnadens tvärsnittsarea A0,B hade varit okänd hade längden bekv,b istället beräknats som
, ,
30 30 37,5 m
20 20
1 1 100
ekv B hög
n
b
h
= = 	=
− −
vilket hade resulterat i ett högre värde på ηn,B,hög (dvs. en högre raslast).

-- 11 of 14 --

Dimensioneringslösning
12 (14)
D02-101
2024-11-01
3.5 Total raslast
Baserat på raslaster beräknade i avsnitt 3.2 till 3.4 kan total raslast mot skyddsrummet bestämmas. I
Figur 3.3 illustreras raslastens utsträckning från byggnad A och B och av detta framgår att bidrag
till raslast från dessa inte överlappar varandra. Raslast från ovanliggande byggnad, byggnad A och
byggnad B antas verka samtidigt. Dessa raslaster ska dock inte summeras, istället används det
största värdet i en given punkt.
Utgående från ekvation (1) bestäms raslasten som verkar mot skyddsrummet i en given punkt slut-
ligen som
( 	)
2
, , , , , ,	max , , ,50 kN/m	ras b n A n A n B hög n B hög	q q q q	

	
	=  	
(23)
Vid beräkning av dimensionerande last mot skyddsrumstak ska qras även kombineras med andra
statiskt verkande laster (egentyngd skyddsrumstak och nyttig last mot skyddsrumstak) i lastkombi-
nation för olyckslast. Dock ska inte egentyngd från rasmassor inkluderas i en sådan lastkombinering
eftersom dessa redan ingår i värdet för raslasten qras, se kommentar om detta i avsnitt 2.2.
30
Byggnad A
Byggnad B
6
10
25
25
25
Skyddsrum
8 32
10
Figur 3.3 Illustration av område i aktuellt skyddsrum som utsätts för raslast från näraliggande
byggnader.
Eftersom byggnad A och B befinner sig inom rasavståndet xras,A = 8 m respektive xras,B,hög = 32 m
från skyddsrummet så blir raslast från dessa dimensionerande inom de områden som de verkar.
Vidare fås att en raslast qras = qb = 65 kN/m2 verkar inom de områden som ligger bortom både
xras,A = 8 m och xras,B,hög = 32 m för raslast från byggnad A respektive byggnad B. Sammantaget kan
raslasten beskrivas utgående från de två fall som illustreras i Figur 3.4.

-- 12 of 14 --

Dimensioneringslösning
13 (14)
D02-101
2024-11-01
ηn,A∙qn,A 	qb 	qb
2 	8 	3 	7
65 	65
129	147
318 332
377
x 	x
(a) 	(b)
x [m]
0 2 	10 x [m]
0 	3 	10
qras [kN/m2] 	qras [kN/m2]
5
ηn,B,hög∙qn,B,hög
Figur 3.4 Raslast mot skyddsrum med hänsyn till (a) byggnad A och (b) byggnad B.
Sammantaget resulterar dessa två fall i en lastfördelning enligt Figur 3.5a. Så länge som de aktuella
lastnivåerna innefattas av den valda lastfördelningen godtas det dock att enklare lastbeskrivningar
används, se Figur 3.5b och c för exempel på sådana förenklingar.
x [m]
qras [kN/m2]
129	147
377
(a) 	(b)
65
318 332
377
0 	3 5	2 	10 x [m]
377
(c)
x [m]
0 	3 	10 	0 	10
147
qras [kN/m2] 	qras [kN/m2]
Figur 3.5 Exempel på förenklade lastbeskrivningar: (a) minimal lastnivå som måste uppfyllas
enligt Figur 3.4, (b) förenkling baserad på maximal raslast för byggnad A respektive
byggnad B, (c) förenkling baserad på maximal raslast.

-- 13 of 14 --

Dimensioneringslösning
14 (14)
D02-101
2024-11-01
4 Revideringslista
Datum Avsnitt Revidering
2019-04-05 D02-101 Första version
2024-11-01 D02-101 Anpassad till SR 15 (2024)

-- 14 of 14 --