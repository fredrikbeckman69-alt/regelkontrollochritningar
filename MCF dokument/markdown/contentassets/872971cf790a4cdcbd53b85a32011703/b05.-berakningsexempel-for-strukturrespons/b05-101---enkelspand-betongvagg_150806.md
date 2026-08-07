---
title: "B05 101   Enkelspand Betongvagg 150806"
category: "b05.-berakningsexempel-for-strukturrespons"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b05.-berakningsexempel-for-strukturrespons/b05-101---enkelspand-betongvagg_150806.pdf"
fileType: "PDF"
keywords: ["betong","armering","beräkning","explosion","kontroll","stadium","respons","last"]
summary: "Beräkning av impulsbelastad konstruktion 1 (21) B05-101 2015-08-06 B05-101 Beräkningsexempel för strukturrespons Enkelspänd betongvägg Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren. 1 Orientering 2 1.1 Samlingsdokument 2 1.2 Om d..."
---

Beräkning av impulsbelastad konstruktion
1 (21)
B05-101
2015-08-06
B05-101 Beräkningsexempel för strukturrespons
Enkelspänd betongvägg
Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren.
1 Orientering 2
1.1 Samlingsdokument 2
1.2 Om detta dokument 2
2 Förutsättningar 2
3 Verkande last 3
4 Egenskaper hos byggnad 3
4.1 Metodik 3
4.2 Geometri och material 4
4.3 Massa 4
4.4 Styvhet och motståndskraft 5
4.5 Dynamiska egenskaper 7
5 Förskjutning och snittkrafter 8
5.1 Förutsättningar 8
5.2 Byggnad utsatt för reflekterad stötvåg 8
5.2.1 Förskjutning 8
5.2.2 Ekvivalent statisk last 9
5.2.3 Dimensionerande moment 10
5.2.4 Dimensionerande tvärkraft 11
5.2.5 Sammanställning 13
5.2.6 Kontroll av plastisk deformationsförmåga 15
5.2.7 Inverkan av elastoplastisk respons 17
5.2.8 Inverkan av segare armering 18
5.3 Byggnad utsatt för oreflekterad stötvåg 19
6 Kommentar 20

-- 1 of 21 --

Beräkning av impulsbelastad konstruktion
2 (21)
B05-101
2015-08-06
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna dokument i serien hänvisas
till dokument B01-102.
1.2 Om detta dokument
I detta dokument visas hur responsen hos en tvåsidigt upplagd betongvägg, utsatt för en impulslast,
beräknas. Beräkningsgång för transformation från verklig konstruktion till ekvivalent enfrihets-
gradssystem (SDOF-modell), beräkning av maximal förskjutning och ekvivalent statisk last samt
kapacitetskontroll redovisas. Teoretisk bakgrund för här utförda beräkningar behandlas i Johansson
och Laine (2012c) samt dokument B06-201. En sammanställning av beräkningsanvisningar ges i
dokument B03-101 och B03-102. Lastdata har hämtats från dokument B04-101.
2 Förutsättningar
I Figur 2.1 illustreras studerat belastningsfall. En laddning, motsvarande 100 kg TNT, antas explo-
dera 1 m ovan marknivå. I närheten av laddningen står två byggnader som kommer utsättas för last
av varierande storlek. Här studeras två renodlade fall – effekten av det tryck som fås från en
normalreflekterad stötvåg samt trycket för en oreflekterad stötvåg på samma avstånd r = 15 m.
r = 15 m
reflekterad
stötvåg
r
oreflekterad
stötvåg
100 kg
TNT
Plan
spegling 1 m
Vy	stötvågsfront
Byggnad	Byggnad
Byggnad
Byggnad
Figur 2.1 En laddning motsvarande 100 kg TNT, placerad 1 m ovan mark, exploderar och
respons hos utsatta byggnadsdelar på ett avstånd r = 15 m från laddningen studeras.

-- 2 of 21 --

Beräkning av impulsbelastad konstruktion
3 (21)
B05-101
2015-08-06
3 Verkande last
Den verkande lasten bestäms i dokument B04-101 och sammanställs i Tabell 3.1.
Tabell 3.1 Stötvågsparametrar för reflekterad och oreflekterad belastning vid antagande om
linjärt avtagande tryck.
Linjärt avtagande tryck
Oreflekterad stötvåg Reflekterad stötvåg
Ps+ 109 kPa Pr+ 314 kPa
is+ 408 Pas ir+ 970 Pas
ts,Δ+ 7,5 ms tr,Δ+ 6,2 ms
Det ska poängteras att vid användande av de samband för en balks deformation samt ekvivalent
statisk last som presenteras i avsnitt 5 så används enbart värdet på impulstätheten is+ och ir+. Dvs.
det utgås där från att aktuellt tryck-tidssamband kan betraktas som en karakteristisk impulslast,
vilket är ett konservativt antagande som resulterar i en kontroll på säker sida. Övriga parametrar
redovisas för fullständighetens skull, vilket ger möjlighet till en förfinad kontroll av resulterande
deformationer via de förenklade samband för modifiering av impulslasten som ges i dokument
B03-101 eller via central differensmetod som behandlas i dokument B03-102.
4 Egenskaper hos byggnad
4.1 Metodik
Kontroll av byggnadsdel utförs här utgående från ett enfrihetsgradssystem vilket innebär att last
samt egenskaper hos studerad balk omvandlas att gälla för ett sådant. I enlighet med vad som anges
i dokument B03-102 så innebär detta dock att det räcker att modifiera balkens totala massa mb med
en faktor κmF medan styvheten kb och lasten Fb förblir desamma, dvs.
 	t	F	u	k	u	m b	b	b	mF 			
 (4.1)
Värden tas fram för tre olika fall – osprucket (stadium I), sprucket (stadium II) samt plastisk
respons (stadium III). Nedan används index I, II eller III för att särskilja egenskaperna för en balk i
respektive stadium.

-- 3 of 21 --

Beräkning av impulsbelastad konstruktion
4 (21)
B05-101
2015-08-06
4.2 Geometri och material
Studerad byggnad antas vara uppbyggd av flera våningar med inbördes avstånd 2,7 m. Väggarna
består av betong C 20/25 med tjockleken 200 mm, är armerade med 10 s2001 K500B samt antas
vara fritt upplagda (upplagsbredd bu = 0,1 m) mot bjälklagen, se Figur 4.1. Trycket approximeras
vara detsamma över hela väggen varför en 1,0 m bred väggstrimla studeras.
p(t)
l = 2,7 m
0,20 m
1,0 m
10 s200 K500B	0,04 m
Betong C 20/25 Ec = 30 GPa
fcd = 16,7 MPa
Es = 200 GPa
fyd = 500 MPa
Figur 4.1 Studerad väggstrimla i byggnad utsatt för explosionslast.
4.3 Massa
Väggstrimlans totala massa uppgår till
kg	1296	7	2	20	0	0	1	2400 								 ,	,	,	l	h	b	mb	
 (4.2)
Detta modifieras sedan med värdet på κmF, vilket för en fritt upplagd balk vid antagande om en
elastisk respektive plastisk respons, enligt dokument B03-101, uppgår till
787	,	0	,	, 	 II	mF	I	mF	

	 (4.3)
667	,	0	, 	III	mF	
 (4.4)
Tillsammans ger detta att den ekvivalenta massan för elastisk respektive plastisk respons blir
kg	1021	1296	787	,	0 			 II	I m	m (4.5)
kg	864	1296	667	0 		 ,	mIII (4.6)
1 Armering med diameter  = 10 mm och centrumavstånd s = 200 mm.

-- 4 of 21 --

Beräkning av impulsbelastad konstruktion
5 (21)
B05-101
2015-08-06
4.4 Styvhet och motståndskraft
Väggstrimlans styvhet för deformation i fältmitt av en jämnt utbredd last q fås från elementarfall
och kan skrivas som
EI
ql
u
4
384
5 	 (4.7)
vilket innebär att styvheten k kan tecknas som
3
5
384
l
EI
u
ql
u
Q
k 			 (4.8)
Balkens tvärsnittsegenskaper kan beräknas enligt nedan. Generellt gäller att framtagna värden är
något approximativa i den meningen att armering i osprucken betong inte beaktas. Skillnaden är
liten och för att förenkla beräkningarna medtas inte detta här.
För ett osprucket tvärsnitt fås ett tröghetsmoment
4	8
3	3
mm	10	7	,	6
12
200	1000
12 	

	 bh
I I (4.9)
där b och h är väggstrimlans bredd respektive höjd.
Tröghetsmomentet för ett sprucket tvärsnitt beräknas med approximationen att normalkraften är
noll, dvs. att ren böjning råder, varvid denna kan beräknas som
 	2
3
3 II	s
II
II x	d	A
bx
I 			
 (4.10)
där x är tvärsnittets tryckzonshöjd,
7	,	6
30
200 		
c
s
E
E
 (4.11)
är kvoten mellan armeringens och betongens elasticitetsmodul,
2
10 mm	393
200
1000
5	,	78 				 s
b
A	As	
 (4.12)
är armeringsmängd och
mm	160	40	200 				 c	h	d (4.13)
är effektiv höjd. Tryckzonshöjden bestäms ur tyngdpunktssambandet för ett ekvivalent tvärsnitt

-- 5 of 21 --

Beräkning av impulsbelastad konstruktion
6 (21)
B05-101
2015-08-06
s	II
s	II
II A	bx
d	A	bx
x




 2
2
(4.14)
vilket kan skrivas om som
 	 0
2	2 		 d	x
b
A
x II
s
II
 (4.15)
Med ovan givna indata fås
mm	26
1000
160	393	7	,	6	2
1000
393	7	,	6
1000
393	7	,	6	2 2	2

		
	




 


			





		 b
d	A
b
A
b
A
x s	s	s
II

	
	 (4.16)
vilket insatt i ekvation (4.10) ger
 	 4	7	2
3
mm	10	3	5	26	160	393	7	6
3
26	1000 					

 ,	,	I II (4.17)
Utgående från detta kan en styvhetskvot mellan osprucket och sprucket tvärsnitt bestämmas som
6	,	12
10	3	,	5
10	7	.	6 7
8



	
II
I
I
I
 (4.18)
Dvs. en faktor η = 12,6 i styvhetsskillnad ,vilket får betecknas som ett tämligen stort värde. Styv-
heten hos studerad väggstrimla kan slutligen beräknas som
N/m	10	8	7	N/mm	10	8	7
2700
10	7	6	10	30
5
384 7	4
3
8	3
			
		
	 ,	,
,
kI (4.19)
N/m	10	2	6	N/mm	10	2	6
2700
10	3	5	10	30
5
384 6	3
3
7	3
			
		
	 ,	,
,
kII (4.20)
För en konstruktion som uppvisar en rent plastisk respons, stadium III, finns det ingen styvhet att
bestämma. Istället är det konstruktionens inre motståndskraft R, baserad på dess momentkapacitet,
som utgör dess avgörande egenskap. För ett rektangulärt tvärsnitt kan momentkapaciteten bestäm-
mas som
 		x	d	A	f	M s	yd	rd 4	,	0		 (4.21)
där tryckzonshöjden x beräknas som
b	f
A	f
x
cd
s	yd
8	,	0
 (4.22)
utgående från armeringsmängd As, dess flytgräns fst, betongens tryckhållfasthet fcc samt bredden b.
Med utgångspunkt från indata i Figur 4.1 fås

-- 6 of 21 --

Beräkning av impulsbelastad konstruktion
7 (21)
B05-101
2015-08-06
mm	15
1000	7	,	16	8	,	0
393	500 
	

	x (4.23)
vilket insatt i ekvation (4.21) ger
 	 	kNm	3	,	30	15	4	,	0	160	393	500 						rd	M (4.24)
Utgående från konstruktionens momentkapacitet beräknas dess inre mothållande kraft R. För en fritt
upplagd balk med längden l, belastad av en jämnt utbredd last q, gäller att det dimensionerande
momentet kan beräknas som
8
2
ql
M	M M	SDOF	M	sd 				

	 (4.25)
där
M är en förstoringsfaktor som beaktar skillnad i moment beräknad med SDOF och FEM, se
avsnitt 5.2.3 för mer information. För en konstruktion med en plastisk respons gäller att
M = 1,0
och genom att sätta Mrd = Msd kan den inre mothållande kraften R bestämmas som
kN	90
7	,	2
3	,	30	8	0	,	1	8 
	
		 l
M
ql	R sd (4.26)
4.5 Dynamiska egenskaper
Utgående från massa och styvhet enligt avsnitt 4.3 respektive avsnitt 4.4 kan de dynamiska egen-
skaperna för väggstrimlan vid respons med osprucket och sprucket tvärsnitt sammanfattas enligt
Tabell 4.1, där vinkelfrekvens ω, frekvens f samt period T beräknas som
m
k
	
 (4.27)


2
	f (4.28)
f
T 1
 (4.29)
Tabell 4.1 Sammanfattning av dynamiska egenskaper hos väggstrimla vid respons med
osprucket och sprucket tvärsnitt.
Beskrivning m
[kg]
k
[kN/m]
ω
[rad/s]
f
[Hz]
T
[ms]
Stadium I (osprucken) 1 021 7,8·107 276 44,0 22,7
Stadium II (sprucken) 1 021 6,2·106 77,8 12,4 80,7

-- 7 of 21 --

Beräkning av impulsbelastad konstruktion
8 (21)
B05-101
2015-08-06
5 Förskjutning och snittkrafter
5.1 Förutsättningar
I avsnitt 3 anges den impulstäthet för reflekterad och oreflekterad stötvåg som verkar på studerad
väggstrimla. Vid beräkning av väggstrimlans maximala förskjutning och ekvivalent statisk last
behövs dock den totala impulslasten som verkar på den. Denna beräknas som
i	i	i	l	b	Ik 							 7	,	2	7	,	2	0	,	1 (5.1)
och impulstäthet i och resulterande karakteristisk impulslast Ik på studerad balk sammanställs i
Tabell 5.1. I Tabell 5.2 sammanställs massa och styvhet hos studerad väggstrimla, framtagna i
avsnitt 4.
Tabell 5.1 Impulstäthet och resulterande impulslast på studerad väggstrimla när denne utsätts
för reflekterad respektive oreflekterad belastning.
Oreflekterad stötvåg Reflekterad stötvåg
is+ 408 Pas ir+ 970 Pas
Is+ 1101 Ns Ir+ 2619 Ns
Tabell 5.2 Sammanställning av massa och styvhet hos studerad väggstrimla när denna betrak-
tas vara helt osprucken, sprucken samt uppvisa ett rent plastiskt beteende.
Egenskap Beteckning
Stadium I
(osprucken)
Stadium II
(sprucken)
Stadium III
(plastisk) Enhet
Massa m 1021 1021 864 kg
Styvhet k 7,8·107 6,2·106 - N/m
Kapacitet R - - 90 kN
5.2 Byggnad utsatt för reflekterad stötvåg
5.2.1 Förskjutning
För konstruktion med elastisk respons fås den maximala resulterande förskjutningen som
mk
I
u k
el  (5.2)
vilket för osprucken väggstrimla (stadium I) ger
mm	3	,	9
10	8	,	7	1021
2619
7 
	
	I	u (5.3)
och för sprucken väggstrimla (stadium II)

-- 8 of 21 --

Beräkning av impulsbelastad konstruktion
9 (21)
B05-101
2015-08-06
mm	33	9	,	32
10	2	,	6	1021
2619
6 	
	
	II	u (5.4)
För väggstrimla med plastisk respons (stadium III) fås den maximalt resulterande förskjutningen
som
Rm
I
u k
pl 2
2
 (5.5)
vilket med insatta värden ger
mm	44	8	,	43
864	10	90	2
2619
3
2
	
		
	III	u (5.6)
5.2.2 Ekvivalent statisk last
Ekvivalent statisk last kan för väggstrimla med elastisk respons beräknas som
l
ku
q el
el  (5.7)
vilket med insatta värden för osprucken väggstrimla (stadium I) ger
kN/m	268
7	,	2
10	3	,	9	10	8	,	7 3	7

		


I	q (5.8)
och för sprucken väggstrimla (stadium II)
kN/m	75
7	,	2
10	33	10	2	,	6 3	6

		


II	q (5.9)
För väggstrimla med plastisk respons (stadium III) kan den ekvivalenta statiska lasten beräknas som
l
R
q pl  (5.10)
vilket med insatta värden ger
kN/m	33
7	,	2
90 		III	q (5.11)

-- 9 of 21 --

Beräkning av impulsbelastad konstruktion
10 (21)
B05-101
2015-08-06
5.2.3 Dimensionerande moment
Utgående från ekvivalenta statiska laster i avsnitt 5.2.2 kan det maximala fältmomentet beräknas
enligt ekvation (4.25). I detta uttryck introduceras, i enlighet med anvisningar i dokument B06-201,
en förstoringsfaktor
M =
M (T / t1) enligt Tabell 5.3, där T är konstruktionens egensvängnings-
period och t1 är lastens varaktighet. Denna faktor används för att beakta den momentskillnad som
fås om den dynamiska analysen utförts med SDOF eller FEM och får enbart effekt för konstruk-
tioner som uppvisar en elastisk respons.
Tabell 5.3 Förstoringsfaktor
M för uppräkning av dimensionerande moment hos konstruktion,
utsatt för en jämnt utbredd last. För en konstruktion med plastisk respons är
M = 1,0. Från dokument B06-201.
T / t1
[-]
M
[-]
0 – 10 1,0
(10) – 20 1,1
(20) – 40 1,2
(40) – 80 1,3
> 80 1,35
Av Tabell 3.1 framgår att t1 = tΔ,r = 6,2 ms, vilket tillsammans med värden på perioden T enligt
Tabell 4.1 gör att förstoringsfaktorn
M kan bestämmas.
7	,	3
2	,	6
7	,	22
1
	
t
TI 	
M,I = 1,0 (5.12)
13
2	,	6
7	,	80
1
	
t
TII 	
M,II = 1,1 (5.13)
Dvs. för strimla med osprucket tvärsnitt (stadium I) fås ingen ökning av momentet medan det för en
strimla med sprucket tvärsnitt (stadium II) fås en momentökning med 10 %. För en strimla med
plastisk respons (stadium III) fås alltid att
M = 1,0.
Med insatta värden på ekvivalent statisk last q, enligt avsnitt 5.2.2, fås slutligen att
kNm	244
8
7	,	2	268	0	,	1 2

	
	I	M (5.14)
kNm	75
8
7	,	2	75	1	,	1 2

	
	II	M (5.15)
kNm	30
8
7	,	2	33	0	,	1 2

	
	III	M (5.16)

-- 10 of 21 --

Beräkning av impulsbelastad konstruktion
11 (21)
B05-101
2015-08-06
5.2.4 Dimensionerande tvärkraft
Enligt dokument B06-201 bestäms den dimensionerande tvärkraften utgående från en ekvivalent
statisk last. Någon förstoringsfaktor motsvarande den som används för moment i avsnitt 5.2.3 är
således inte aktuellt här. Dock ska det beaktas att tvärkraftsfördelningen är annorlunda för en
impulsbelastad konstruktion så som schematiskt illustreras i Figur 5.1. För väggstrimlan kan
tvärkraften över strimlans längd beräknas som
  	R	x	V 	
 (5.17)
där tvärkraftsfaktorn α beräknas utgående från Tabell 5.4. I Figur 5.1 visas konsekvensen av denna
modifiering jämfört med aktuella värden från en dynamisk samt statisk jämvikt. Av detta framgår
att för tvärkrafter nära stöd, x / l ≤ 0,15, fås samma tvärkraftsfördelning som vid en statiskt belastad
strimla medan det på ökat avstånd från stöd uppstår något högre tvärkrafter.
Tabell 5.4 Tvärkraftsfaktor α som används för beräkning av tvärkraftsfördelning över balk med
symmetriska randvillkor, utsatt för en jämnt utbredd last. Från dokument B06-201.
x / l
[-]
α
[-]
0,00 0,50
0,15 0,35
0,30 0,25
0,50 0,00
0.00
0.05
0.10
0.15
0.20
0.25
0.30
0.35
0.40
0.45
0.50
0.00 0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40 0.45 0.50
Tvärkraftsfaktor,
a [-]
Koordinat, x / l [-]
Dynamisk
Statisk
Förslag
Figur 5.1 Jämförelse av tvärkraftsfördelning över balk med plastisk respons, utsatt för en
jämnt utbredd last. Föreslagna värden enligt Tabell 5.4.

-- 11 of 21 --

Beräkning av impulsbelastad konstruktion
12 (21)
B05-101
2015-08-06
Tvärkraftskontroll görs i kritiskt snitt mätt från upplagskant så som visas i Figur 5.2. Avståndet aV
från upplagskant är olika beroende på om det finns skjuvarmering eller inte. Enligt dokument B06-
201 gäller för tvärsnitt utan skjuvarmering att
d	aV  (5.18)
medan avståndet vid skjuvarmering begränsas till
z	z	aV 			 75	,	1	cot
 (5.19)
där d är effektiv höjd, z ≈ 0,9·d är inre hävarm och
 är skjuvsprickans vinkel enligt Figur 5.2.
Vidare begränsas det maximala avståndet mellan vertikala skänklar hos eventuell skjuvarmering till
d	s 	 5	,	0	max (5.20)
bu
aV

p(t)
kritiskt
snitt
skjuvspricka
d
x
Figur 5.2 Schematisk illustration för bestämning av kritiskt snitt för kontroll av tvärkraft.
Studerad väggstrimla saknar skjuvarmering varför dimensionerande tvärkraft bestäms i ett snitt
aV = d ut från upplagskant. Detta motsvarar en koordinat
m	165	,	0	16	,	0	1	,	0	5	,	0	5	,	0 						 V	u	V a	b	x (5.21)
Av detta fås att
15	,	0	06	,	0
7	,	2
165	,	0 		
l
xV (5.22)
vilket innebär att dimensionerande tvärkraft kan bestämmas på samma sätt som vid en statisk
belastning, dvs.





 		 V	sd x
l
q	V 2 (5.23)
Med insatta värden på ekvivalent statisk last q, enligt avsnitt 5.2.2, fås slutligen att

-- 12 of 21 --

Beräkning av impulsbelastad konstruktion
13 (21)
B05-101
2015-08-06
kN	318	165	,	0
2
7	,	2
268 	




 			I	V (5.24)
kN	89	165	,	0
2
7	,	2
75 	




 			II	V (5.25)
kN	40	165	,	0
2
7	,	2
33 	




 			III	V (5.26)
Det kan påvisas (görs ej här) att tvärkraftskapaciteten hos en sprucken väggstrimla, via betongens
bidrag, uppgår till Vrd = 106 kN, vilket är större än dimensionerande tvärkraft för både stadium II
och III.
5.2.5 Sammanställning
I Tabell 5.5 och Figur 5.3 sammanställs resultat för studerad väggstrimla utsatt för reflekterad
impulslast. Av detta framgår att en styv elastisk respons, stadium I, ger en mindre förskjutning men
högre ekvivalent last än vad som fås för en väggstrimla med en vek elastisk respons, stadium II. För
en plastisk respons, stadium III, blir detta förhållande än mer tydligt med en ökad förskjutning men
minskad ekvivalent last som följd.
Det kan noteras att för stadium I och stadium II erfordras ekvivalenta laster som är större än
kapaciteten i stadium III. I praktiken innebär detta att väggstrimlan först kommer spricka upp och
därefter plasticera. Med andra ord så är ett antagande om stadium I eller stadium II för studerad
väggstrimla orealistiskt med hänsyn till den last som applicerats. Utförda beräkningar för dessa
båda stadier ska därför främst ses som ett illustrativt exempel på vilken skillnad i respons som fås
vid varierande styvhet hos en impulsbelastad konstruktion.
Tabell 5.5 Sammanställning av förskjutning, ekvivalent statisk last samt maximalt fältmoment
för studerad väggstrimla när denna utsätts för en idealisk impulslast Ir+ enligt
Tabell 5.1 och betraktas vara helt osprucken, sprucken eller uppvisa ett rent plastiskt
beteende.
Egenskap Beteckning
Stadium I
(osprucken)
Stadium II
(sprucken)
Stadium III
(plastisk) Enhet
Förskjutning u 9,3 33 44 mm
Ekv. statisk last q 268 75 33 kN/m
Dim. moment M 244 75 30 kNm
Dim. tvärkraft V 318 89 40 kN

-- 13 of 21 --

Beräkning av impulsbelastad konstruktion
14 (21)
B05-101
2015-08-06
0
50
100
150
200
250
300
350
400
0 10 20 30 40 50 60
Ekvivalent statisk last,
 q [kN/m]
Förskjutning, u [mm]
Stadium I - Osprucket
Stadium II - Sprucket
Stadium III - Plastiskt
9.3 mm 33 mm 44 mm
268 kN/m
75 kN/m
33 kN/m
Figur 5.3 Sammanställning av ekvivalent statisk last q och maximal deformation u för studerad
väggstrimla belastad av reflekterad stötvåg när balken antas befinna sig i stadium I,
stadium II eller stadium III.
Arean under last-förskjutningskurvan i Figur 5.3, den inre energiförbrukningen, är densamma vid
elastisk respons:
Nm	3365
2
10	3	9	7	2	268 3

		


,	,
W I,i (5.27)
Nm	3341
2
33	7	2	75 
	
 ,
W II,i (5.28)
För plastisk respons blir den inre energiförbrukningen dock något högre
Nm	3960	10	44	7	2	34 3 				 
,	W III	,i (5.29)
vilket beror på att den effektiva massan för denna är lägre än vid elastisk respons, se Tabell 5.2, och
det yttre arbetet därför blir större. Dessa värden kan jämföras med det yttre arbete som förs på den
impulsbelastade väggstrimlan
m
I
E	W k	y 2
2
	 (5.30)
vilket för ett system med elastisk respons blir
Nm	3359
1021	2
26192
, 

	el	y	W (5.31)

-- 14 of 21 --

Beräkning av impulsbelastad konstruktion
15 (21)
B05-101
2015-08-06
och för ett system med plastisk respons blir
Nm	3969
864	2
26192
, 

	pl	y	W (5.32)
Dvs. energijämvikt råder med ett inre och yttre arbete som är lika stora – den avvikelse som syns
beror på avrundning.
5.2.6 Kontroll av plastisk deformationsförmåga
För väggstrimla med elastisk respons behöver någon kontroll av deformationsförmågan inte göras.
Där utgörs kontrollen istället av att beräknad lastkapacitet är tillräcklig. För en väggstrimla med
plastisk respons är lastkapaciteten dock låst och kapacitetskontrollen övergår här istället till att
kontrollera konstruktionens deformationsförmåga. I detta avsnitt görs detta enligt anvisningar i
Eurokod 2, CEN (2004).
Tillåten plastisk rotationskapacitet bestäms som
pl	rd k	

	  	 (5.33)
där kλ är en korrektionsfaktor och θpl anger tillåten rotationskapacitet som funktion av armeringstyp,
armeringsmängd samt betongtyp enligt Figur 5.4. Korrektionsfaktorn beräknas som
3

 	k (5.34)
där
 definieras som
d
l0
	
 (5.35)
och l0 är avståndet mellan momentnollpunkt och flytled och d är tvärsnittets effektiva höjd. För
studerad väggstrimla gäller att
m	35	,	1
2
7	,	2
2
0 		 l
l (5.36)
och d = 0,16 m, varmed
44	,	8
16	,	0
35	,	1 		
 (5.37)
och korrektionsfaktorn kλ fås som
68	,	1
3
44	,	8 		
	k (5.38)

-- 15 of 21 --

Beräkning av impulsbelastad konstruktion
16 (21)
B05-101
2015-08-06
För bestämning av θpl används kvoten x / d. Från ekvation (4.23) fås att x = 15 mm varvid
094	,	0
160
15 	
d
x (5.39)
Insatt i Figur 5.4 kan noteras att detta låga värde på kvoten x / d innebär att rotationskapaciteten
begränsas av risk för avsliten armering. För armering enligt klass B fås att θpl ≈ 11,5∙10-3 rad
varmed den tillåtna rotationskapaciteten kan beräknas som
rad	10	3	,	19	10	5	,	11	68	,	1 3	3 	 					rd	
 (5.40)
och tillåten plastisk förskjutning begränsas till
mm	26,1
2
2700	10	3	,	19
2
3

	




l
u rd
rd
 (5.41)
x / d
pl [10 -3 rad]
0,094
Klass C
Klass B
11,5
betong-
krossning
avsliten
armering
Figur 5.4 Tillåten plastisk rotationskapacitet θpl. Brott utgörs här av att armeringen slits av.
En jämförelse med erforderlig plastisk förskjutning i Tabell 5.5 ger att uIII = 43,8 mm vilket är
större än tillåten förskjutning på urd = 26,1 mm. Dvs. en väggstrimla med en ren plastisk respons
har, med redovisad beräkningsmetod, inte tillräcklig deformationsförmåga och klarar således inte
heller av att stå emot aktuell impulslast.

-- 16 of 21 --

Beräkning av impulsbelastad konstruktion
17 (21)
B05-101
2015-08-06
5.2.7 Inverkan av elastoplastisk respons
I föregående avsnitt påvisas att tillgänglig deformationsförmåga är otillräcklig när studerad vägg-
strimla antas ha en rent plastisk respons. I verkligheten kommer balken dock inte uppvisa ett rent
plastiskt beteende utan något som snarare motsvarar en elastoplastisk respons. Detta innebär att en
viss energiupptagning i konstruktionen kommer ske inom den elastiska delen vilket gör att
erforderlig plastisk deformation minskar något. Här nyttjas en elastisk deformationsförmåga mot-
svarande styvheten för sprucket tvärsnitt (stadium II).
Av Tabell 5.2 framgår att styvheten för sprucket tvärsnitt är kII = 6,2·106 N/m samt att mothållande
kraft i stadium III är R = 90 kN. Den elastiska förskjutning som hinner utvecklas innan den
mothållande kraften uppnås uppgår därför till
mm	6	14
10	2	6
10	90 6
3
,
,	k
R
u el,	III 


	 (5.42)
Den energimängd som förbrukas under denna elastiska deformation är för en linjärelastisk respons
hälften så stor jämfört med vad som förbrukas vid motsvarande plastiska deformation med konstant
mothållande kraft R. Således motsvarar detta också en minskning av erforderlig plastisk förskjut-
ning med
mm	3	,	7
2
6	,	14
2
, 			 el	III
III
u
u (5.43)
vilket ger en erforderlig plastisk deformation
mm	5	,	36	3	,	7	8	,	43	, 				 III	III	pl	III u	u	u	
 (5.44)
och en totaldeformation på
mm	51	mm	1	,	51	5	,	36	6	,	14	,	,	, 					 pl	III	el	III	tot	III u	u	u (5.45)
vilket illustreras i Figur 5.5.
Den plastiska förskjutningen uIII,pl = 36,5 mm > 26,1 mm = urd varför det kan konstateras att defor-
mationsbehovet fortfarande är större än tillåten plastisk deformation och att belastad väggstrimla
därför inte klarar av att ta upp aktuell impulslast.

-- 17 of 21 --

Beräkning av impulsbelastad konstruktion
18 (21)
B05-101
2015-08-06
0
50
100
150
200
250
300
350
400
0 10 20 30 40 50 60
Ekvivalent statisk last,
 q [kN/m]
Förskjutning, u [mm]
Stadium I - Osprucket
Stadium II - Sprucket
Stadium III - Elastoplastiskt
51 mm
33 kN/m
14.6 mm
Figur 5.5 Sammanställning av ekvivalent statisk last q och maximal förskjutning u för studerad
väggstrimla belastad av reflekterad stötvåg när den antas befinna sig i stadium I,
stadium II eller stadium III.
5.2.8 Inverkan av segare armering
I avsnitt 5.2.6 har väggstrimlans plastiska deformationsförmåga beräknats utgående från en
armering tillhörande klass B. Detta är den normalt förekommande armeringen som används i
Sverige idag men som jämförelse utförs här även en kontroll av vilken effekt som skulle fås om
väggen istället varit utförd med en segare armeringstyp, armering av klass C.
Allt annat lika ger en övergång från armering B400B till B500C att θpl ≈ 32,5∙10-3 rad, se Figur 5.6.
Detta medför att
mm	73,7	26,1
5	,	11
5	,	32
,
,
,
, 				 B	rd
B	pl
C	pl
C	rd u	u

 (5.46)
vilket med god marginal uppfyller kravet på plastisk deformation uIII,pl = 36,5 mm som tagits fram i
avsnitt 5.2.7. Av detta kan konstateras att val av armeringsklass har en påtaglig inverkan på
konstruktionens resulterande deformationsförmåga.

-- 18 of 21 --

Beräkning av impulsbelastad konstruktion
19 (21)
B05-101
2015-08-06
x / d
pl [10 -3 rad]
0,093
Klass C
Klass B
32,5
betong-
krossning
avsliten
armering
Figur 5.6 Tillåten plastisk rotationskapacitet θpl för armering av klass C. Brottorsak utgörs av
att betongen krossas.
5.3 Byggnad utsatt för oreflekterad stötvåg
Beräkningarna är identiska med de i avsnitt 5.2 varför enbart en sammanställning av resulterande
förskjutning, ekvivalent statisk last samt maximalt fältmoment redovisas för detta belastningsfall, se
Tabell 5.6 och Figur 5.7. Av detta framgår att den ekvivalenta lasten för väggstrimla i stadium II är
lägre än kapaciteten i stadium III, dvs. någon plasticering av väggstrimlan borde inte inträffa vid
denna last och väggstrimlan istället stanna kvar i stadium II. Trots detta anges att det uppstår ett
dimensionerande moment som är högre än momentkapacitetet, något som innebär att plasticering
trots allt inträffar. Anledningen till denna är att det vid beräkning av det dimensionerande momentet
har tillkommit en förstoringsfaktor
M = 1,1 på momentet på samma sätt som vid reflekterad
stötvåg, se avsnitt 5.2.3. Av detta kan slutsatsen dras att plasticering kommer att inträffa men att den
resulterande plastiska deformationen vid en elastoplastisk deformation skulle bli mycket begränsad.
Tabell 5.6 Sammanställning av förskjutning, ekvivalent statisk last samt maximalt fältmoment
för studerad väggstrimla när denna utsätts för en idealiskt impulslast Is+ enligt
Tabell 5.1 och betraktas vara helt osprucken, sprucken eller uppvisa ett rent plastiskt
beteende.
Egenskap Betäckning
Stadium I
(osprucken)
Stadium II
(sprucken)
Stadium III
(brott) Enhet
Förskjutning u 3,9 14 7,8 mm
Ekv. statisk last q 112 31 33 kN/m
Dim. moment M 103 32 30 kNm
Dim. tvärkraft V 132 37 40 kN

-- 19 of 21 --

Beräkning av impulsbelastad konstruktion
20 (21)
B05-101
2015-08-06
0
50
100
150
200
250
300
350
400
0 5 10 15 20
Ekvivalent statisk last,
 q [kN/m]
Förskjutning, u [mm]
Stadium I - Osprucket
Stadium II - Sprucket
Stadium III - Plastiskt
3.9 mm 14 mm	7.8 mm
112 kN/m
31 kN/m	33 kN/m
Figur 5.7 Sammanställning av ekvivalent statisk last q och maximal förskjutning u för studerad
väggstrimla belastad av oreflekterad stötvåg när balken antas befinna sig i sta-
dium I, stadium II eller stadium III.
6 Kommentar
Av Figur 5.3 och Figur 5.7 kan det noteras att den resulterande förskjutningen och den ekvivalenta
lasten varierar betänkligt beroende på vilken typ av respons som väggstrimlan antas uppvisa. En
styv respons, osprucket tvärsnitt (stadium I), genererar en liten förskjutning men en stor ekvivalent
last. På samma sätt medför en vek respons, sprucket tvärsnitt (stadium II), en större förskjutning
men samtidigt en märkbart lägre ekvivalent statisk last. Slutligen genererar i det här fallet en vägg-
strimla med plastisk respons (stadium III) de största förskjutningarna men också den märkbart
lägsta ekvivalenta lasten. För studerat exempel konstateras det i avsnitt 5.2.4 att betong-
konstruktionen utsatt för en reflekterad explosionslast både kommer att spricka upp och plasticera.
Detta är normalt men inte nödvändigt för en betongkonstruktion utsatt för en sådan last. I avsnitt 5.3
visas exempelvis att en motsvarande väggstrimla utsatt för en oreflekterad explosionslast kommer
stanna kvar i stadium II. Det är dock i de flesta fall orealistiskt att anta att en betongkonstruktion
ska förbli osprucken när den utsätts för en explosionslast. Det bidrag till balkens energiförbrukning
som fås i stadium I är försumbart varför det är ett rimligt antagande att anta en respons hos en
impulsbelastad betongkonstruktion som en kombination av stadium II och stadium III.
För väggstrimlorna med elastisk respons är den förbrukade energin, dvs. arean under respektive
last-förskjutningskurva, densamma. För väggstrimla med plastisk respons är denna area dock något
större, omkring 20 %. Denna skillnad beror på att den senare behöver ta upp en större energimängd
på grund av en lägre effektiv massa, via faktorn κmF, som den har jämfört med vid elastisk respons,
dvs.

-- 20 of 21 --

Beräkning av impulsbelastad konstruktion
21 (21)
B05-101
2015-08-06
18	1
667	0
788	0 ,
,
,
III	,	MF
I,	MF 		


 (6.1)
Sammanfattningsvis kan konstateras att det är gynnsamt att utsatt konstruktion uppvisar en så mjuk
respons som möjligt eftersom detta genererar en lägre ekvivalent last. Att få en plastisk respons blir
därmed önskvärt att uppnå. Om så är fallet är det dock viktigt att även kontrollera den plastiska
deformationsförmågan eftersom det är denna som utgör brottkriteriet för en sådan konstruktion. Vid
kontroll av en betongkonstruktions plastiska deformationsförmåga kan det konstateras att arme-
ringens seghet har stor betydelse. I här utfört beräkningsexempel fås en plastisk deforma-
tionskapacitet som är nästan tre gånger så hög när den segare armeringen av klass C används
jämfört med den i Sverige normalt använda armeringen av klass B.
I Figur 6.1 jämförs förskjutningar beräknade med central differensmetod, se dokument B03-102, för
en reflekterad stötvågslast med linjärt tryckavtagande enligt Tabell 3.1. Av detta framgår att
erhållna förskjutningar minskar något gentemot de i avsnitt 5 beräknade värdena. Detta är en effekt
av att applicerad last inte helt uppfyller kraven på att fungera som en karakteristisk impulslast. Det
är värt att notera att skillnaden blir procentuellt sett större för balk i stadium I än för väggstrimla i
stadium II. Detta beror på att den senare uppvisar en lägre egenfrekvens och därmed också en
längre egensvängningsperiod. Därmed blir trycklastens varaktighet, i förhållande till sin egen-
svängningsperiod, kortare för väggstrimlan i stadium II, vilket resulterar i att den i högre grad kan
betraktas som en ideal impulslast.
-10
0
10
20
30
40
50
0 10 20 30 40 50 60
Förskjutning,
 u [mm]
Tid, t [ms]
Stadium III
Stadium II
Stadium I
9.3 mm
32.9 mm
43.8 mm
8.5 mm
32.5 mm
40.2 mm
Figur 6.1 Förskjutnings-tidssamband för studerad väggstrimla när responsen beräknas via
numerisk lösning för en linjärt avtagande lastkurva i enlighet med Tabell 3.1.
Listade värden anger erhållen och i avsnitt 5.2.1 beräknad förskjutning.

-- 21 of 21 --