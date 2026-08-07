---
title: "B05 102   Stalram"
category: "b05.-berakningsexempel-for-strukturrespons"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b05.-berakningsexempel-for-strukturrespons/b05-102---stalram.pdf"
fileType: "PDF"
keywords: ["pelare","beräkning","explosion","kontroll","respons","lokal","global","figur"]
summary: "Beräkning av impulsbelastad konstruktion 1 (15) B05-102 2014-02-10 B05-102 Beräkningsexempel för strukturrespons Stålram Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren 1 Orientering 1 1.1 Samlingsdokument 1 1.2 Om detta dokument 1..."
---

Beräkning av impulsbelastad konstruktion
1 (15)
B05-102
2014-02-10
B05-102 Beräkningsexempel för strukturrespons
Stålram
Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren
1 Orientering 1
1.1 Samlingsdokument 1
1.2 Om detta dokument 1
2 Förutsättningar 2
3 Verkande last 2
4 Struktur 4
4.1 Beskrivning 4
4.2 Lastfall som bör kontrolleras 5
4.3 Dynamisk respons 6
4.3.1 Global och lokal respons 6
4.3.2 Omvandling till enfrihetsgradssystem 7
4.3.3 Last-tidssamband 10
4.4 Resultat 12
4.5 Jämförelse med numerisk beräkning 13
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 Om detta dokument
I detta dokument illustreras ett exempel på hur en explosionslast mot en byggnad vars strukturella
system består av en stålram behandlas. Anvisningarna ger inga anspråk på att utgöra heltäckande
kontrollberäkningar utan syftar enbart till att exemplifiera hur dessa kan utföras för en sådan typ av
konstruktion. Någon kapacitetskontroll av studerad stålram illustreras inte i detta exempel.

-- 1 of 15 --

Beräkning av impulsbelastad konstruktion
2 (15)
B05-102
2014-02-10
Teoretisk bakgrund för här utförda beräkningar behandlas i Johansson och Laine (2012c) och en
sammanställning av beräkningsanvisningar ges i dokument B03-101. Lastdata har hämtats från
dokument B04-103.
2 Förutsättningar
Ett vätgasmoln har läckt ut och täcker in ett område enligt Figur 2.1. Gasmolnet täcker in två
områden, område A och B, där en initiering av en kraftig explosion bedöms kunna ske. Effekten av
en potentiell explosion på en närliggande byggnad kontrolleras.
gasmoln
A
rA = 40 m
rB = 70 m
B
explosions-
centrum
rC = 60 m
centrum
gasmoln
expanderande
stötvåg
C
15 m
Studerad
byggnad
30 m
Figur 2.1 Geometri hos utsläppt gasmoln samt omgivande byggnader. En kraftfull gas-
explosion kan initieras i område A och B medan C representerar en svag explosion
av resterande gas i molnet. Kontrollberäkning görs för närliggande byggnad.
3 Verkande last
Kontroll av stålram görs för tre olika laster, A till C, med olika kombinationer på energiinnehåll,
explosionsstyrka samt avstånd. Den verkande lasten bestäms i dokument B04-103 och
sammanställs i Tabell 3.1 samt illustreras i Figur 3.1.
Tabell 3.1 Övertryck, varaktighet och impulstäthet för oreflekterad och reflekterad stötvåg för
explosionsfall illustrerade i Figur 2.1.
Oreflekterad stötvåg Reflekterad stötvåg
Explosions- Ps+ t,s+ is+ Pr+ t,r+ ir+
område [kPa] [ms] [Pas] [kPa] [ms] [Pas]
A 3,9 26,2 51 7,9 26,1 103
B 3,3 39,2 65 6,7 39,0 131
C 0,86 345 150 1,7 345 301

-- 2 of 15 --

Beräkning av impulsbelastad konstruktion
3 (15)
B05-102
2014-02-10
7.9
26.1
6.7
39.0
1.7
345
0
1
2
3
4
5
6
7
8
9
0 50 100 150 200 250 300 350
Reflekterat övertryck,
 Pr 	+ [kPa]
Ekvivalent varaktighet, t
∆ ,∆ ,∆ ,∆ , r+ [ms]
Område A
Område B
Område C
ir+ = 131 Pas
ir+ = 103 Pas
ir+ = 301 Pas
Figur 3.1 Resulterande tryck-tidssamband, genererad av explosion i område A, B och C, för
reflekterad stötvåg som verkar mot studerad byggnad i Figur 2.1.

-- 3 of 15 --

Beräkning av impulsbelastad konstruktion
4 (15)
B05-102
2014-02-10
4 Struktur
4.1 Beskrivning
Utgående från laster presenterade i avsnitt 3 görs i detta avsnitt en beräkning av den strukturella
responsen hos belastad byggnad i Figur 2.1. En sektion av denna byggnad visas i Figur 4.1 och av
detta framgår att byggnaden är uppbyggd som en ram med fast inspända pelare i grunden och en
ledad infästning till takbalken.
b = 15 m
s = 6 m
A A
b = 15 m
l = 7 m
EI1, m1 EI2, m2
EA3, m3
HEA 200,
s = 6 m
Sektion A-A
studerad
strimla
pelare
takbalk
Figur 4.1 Plan och sektion hos belastad byggnad. Studerad strimla är markerad.
Tabell 4.1 Parametrar av intresse hos ramsektion i Figur 4.1. Ruta markerad med ”-” innebär
att detta värde inte används i här utförda beräkningar.
Nr Konstruktionsdel E A I l b s m 2)
[GPa] [m2] [10-6 m4] [m] [m] [m] [kg]
1 Främre pelare 210 - 37 7,0 - 6,0 2 400
2 Bakre pelare 210 - 37 7,0 - 6,0 2 400
3 Takbalk - ∞ 1) - - 15,0 6,0 6 000
1) Syftar på att takbalkens axialstyvhet är mycket styv i jämförelse med pelarnas böjstyvhet.
2) Anger total massa. I detta ingår även massan av vägg (för pelare) eller tak (för balk) över en sträcka
motsvarande strimlans bredd på s = 6,0 m.

-- 4 of 15 --

Beräkning av impulsbelastad konstruktion
5 (15)
B05-102
2014-02-10
4.2 Lastfall som bör kontrolleras
Vid explosionslast mot en byggnad enligt Figur 2.1 erfordras flera olika kontroller. Nedan ges en
övergripande sammanfattning av de saker som behöver kontrolleras:
• Ramkonstruktion
o Global kontroll av den bärande stommen för reflekterat tryck i stötvågens huvudriktning
o Global kontroll av den bärande stommen för oreflekterat tryck i lastens sekundär-
riktning
• Främre vägg
o lokal kontroll av pelare för reflekterat tryck
o lokal kontroll av väggens bärning mellan pelare för reflekterat tryck
o lokal kontroll av pelare för global respons av ramkonstruktion (knäckning)
• Bakre vägg
o lokal kontroll av pelare för oreflekterat tryck
o lokal kontroll av väggens bärning mellan pelare för oreflekterat tryck
o lokal kontroll av pelare för global respons av ramkonstruktion (knäckning)
• Sidovägg
o lokal kontroll av pelare för oreflekterat tryck
o lokal kontroll av väggens bärning mellan pelare för oreflekterat tryck
o lokal kontroll av pelare för global respons av ramkonstruktion (knäckning)
• Tak
o lokal kontroll av takbalk för oreflekterat tryck
o lokal kontroll av takets bärning mellan takbalkar för oreflekterat tryck
o lokal kontroll av takbalk för global respons av ramkonstruktion (knäckning)
Av ovanstående är det för studerad byggnad rimligt att den lokala kontrollen av den främre pelaren
är kritisk. Anledningen till detta är dels att lasten här är störst men även för att den ingående massan
i denna del är förhållandevis liten – en kombination som medför en stor belastning.
I följande avsnitt görs en lokal kontroll av dynamisk respons hos den främre pelaren. Vidare utförs
även en global kontroll av ramkonstruktionen för att därigenom illustrera denna, något mer
komplicerade, beräkningsgång. I beräkningarna förutsätts att byggnadens vägg klarar av att föra in
lasten till ramkonstruktionen. Att så är fallet är inte självklart men behandlas inte mer ingående här.

-- 5 of 15 --

Beräkning av impulsbelastad konstruktion
6 (15)
B05-102
2014-02-10
4.3 Dynamisk respons
4.3.1 Global och lokal respons
Eftersom belastningen vid en explosion sker så snabbt krävs det en uppdelning i en lokal och en
global modell för att kunna beskriva den totala dynamiska responsen hos en ram enligt Figur 4.1.
Den lokala modellen syftar till att beskriva den initiala responsen hos den främre pelaren och den
globala delen syftar till att beskriva samverkan som råder mellan den främre och bakre pelaren via
deras gemensamma koppling till takbalken. En förenkling av en ramkonstruktion till två balk-
modeller görs så som illustreras i Figur 4.2.
b
EI1, m1 EI2, m2
EA3, m3
l
l
EI1, m1
EI1, m1,
EI2, m2
m3
p(t)
p(t)
p(t)
Modell – Lokal respons
Modell – Global respons
Ramkonstruktion
l
Figur 4.2 Uppdelning av ram enligt Figur 4.1 i två modeller för lösning av dynamisk respons
med en enfrihetsgradsmodell – en för lokal respons i främre pelaren och en för
global respons i ramen.
Av detta framgår att den lokala modellen förenklas så att enbart den främre pelaren ingår men att
randvillkoren för pelarens topp betraktas som ett ledat stöd. Anledningen till denna förenkling är att
takbalken i belastningens inledningsskede endast kommer få en i sammanhanget liten förskjutning
och därför fungera som ett sådant stöd, med följd att utböjningsformen för den främre pelaren
kommer att motsvara den för en balk med det valda randvillkoret. I den globala modellen används
ramens randvillkor för pelaren, fast inspänning i botten men utan stöd i toppen. Styvheten och
massan för den främre och bakre pelaren slås dock samman medan massan för takbalken placeras i
pelarens topp.
Skillnad i randvillkor samt takbalkens bidragande massa medför att responsen i modellen för lokal
respektive global respons kommer att skilja sig betänkligt. Denna skillnad i respons medför också
att den pålagda lasten kommer ha olika effekter på konstruktionen.

-- 6 of 15 --

Beräkning av impulsbelastad konstruktion
7 (15)
B05-102
2014-02-10
4.3.2 Omvandling till enfrihetsgradssystem
Kontroll av byggnad utförs här utgående från ett enfrihetsgradssystem, vilket innebär att last samt
egenskaper hos studerade konstruktionsdelar omvandlas till ett sådant system. Den dynamiska
grundekvationen för en odämpad balk kan uttryckas som
( )	t	F	u	k	u	m b	F	b	k	b	m	
κ
	κ
	κ =	+	&& (4.1)
där mb, kb och Fb är balkens massa, styvhet och last medan κm, κk och κF är deras respektive
transformationsfaktorer för omvandling till ett enfrihetsgradssystem, och med användning av att
F	k	
κ
	κ = (4.2)
kan ekvation (4.1) skrivas om som
( )	t	F	u	k	u	m b	b	b
F
m =	+	&&
κ
κ (4.3)
För en ramkonstruktion blir detta samband dock mer komplicerat än för en balk och det är inte
längre möjligt att direkt använda uttrycket i ekvation (4.3). Istället behöver den dynamiska grund-
ekvationen i ekvation (4.1) för ett sådant system tecknas som summan av bidrag från flera konstruk-
tionsdelar, dvs.
( 	) 	( 	) 	( )	( 	)	∑	∑	∑ =	=	=
=	⋅	+	⋅
n
i	i
i	b	F
n
i	i
i	b	k
n
i	i
i	b	m t	F	u	k	u	m	
κ
	κ
	κ && (4.4)
där i anger nummer på konstruktionsdel och n är antal konstruktionsdelar. För här studerad
ramkonstruktion, illustrerad i Figur 4.3, finns tre konstruktionsdelar: främre pelare (i = 1), bakre
pelare (i = 2) samt takbalk (i = 3). För ramen utgör förskjutningen u i pelartopp en gemensam
parameter för samtliga konstruktionsdelar. Utgående från internt kraftspel i ramen inses även att den
på den bakre pelaren verkande lasten utgörs av en punktlast, dvs. den last som överförs in i den
främre pelaren, via takbalken, till toppen av den bakre pelaren. Detta medför således att den globala
responsen i den främre och bakre pelaren inte är identiska.

-- 7 of 15 --

Beräkning av impulsbelastad konstruktion
8 (15)
B05-102
2014-02-10
·
κm,1·m1
κk,1·k1
κF,1·F1(t)
κm,2·m2
κk,2·k2
0
κm,3·m3
0
0
u	u u
Figur 4.3 Kraftspel mellan ramens olika konstruktionsdelar samt resulterande elementarfall
för framtagning av transformationsfaktorer. Röd punkt visar placering av system-
punkt i de olika konstruktionsdelarna där förskjutningen u är densamma.
Lokal respons,
främre pelare
Global respons,
ram (främre och bakre pelare)
Figur 4.4 Sammanfattning av pelarnas elementarfall vid lokal respons (främre pelaren) res-
pektive vid global respons av hela ramen (främre och bakre pelare). Röd punkt
markerar placering av systempunkt.
I Figur 4.4 sammanfattas pelarnas elementarfall för lokal respektive global respons. Transforma-
tionsfaktorer och styvhet för pelare baseras på dessa elementarfall och sammanfattas tillsammans
med aktuella massor i Tabell 4.2.

-- 8 of 15 --

Beräkning av impulsbelastad konstruktion
9 (15)
B05-102
2014-02-10
Styvheten beräknas, med I från Tabell 4.1, och fås för lokal respons hos den främre pelaren som
kN/m	4349
7
10	37	10	210	192	192 3
6	9
3 =
⋅	⋅	⋅	⋅
=	=
−
l
EI
k (4.5)
På samma sätt fås för global respons hos den främre pelaren
kN/m	181
7
10	37	10	210	8	8 3
6	9
3	1 =
⋅	⋅	⋅	⋅
=	=
−
l
EI
k (4.6)
och för global respons hos den bakre pelaren
kN/m	68
7
10	37	10	210	3	3 3
6	9
3	2 =
⋅	⋅	⋅	⋅
=	=
−
l
EI
k (4.7)
Takbalken bidrar inte med någon styvhet till systemet och dess transformationsfaktor κm för massan
blir 1,000 eftersom hela balken rör sig med förskjutningen u vid belastning.
Tabell 4.2 Transformationsfaktorer κm och κF samt massa m och styvhet k för ramens konstruk-
tionsdelar enligt Figur 4.4 för bestämning av dess globala respons.
i Fall Konstruktions
del
m	
κ
[-]
m
[kg]
F	k	
κ
	κ =
[-]
k
[kN/m]
- Lokal respons Främre pelare 0,483 2 400 0,600 4 349
1 Främre pelare 0,257 2 400 0,400 181
2 Global respons Bakre pelare 0,236 2 400 1,000 68
3 Takbalk 1,000 6 000 - -
Med värden enligt Tabell 4.2 insatt i ekvation (4.3) fås för lokal respons i den främre pelaren att
( )	t	F	u	u b	=	⋅	⋅	⋅	+	⋅	⋅ 3
10	4349
600	,	0
600	,	0
2400
600	,	0
483	,	0 && (4.8)
( )	t	F	u	u b	=	⋅	⋅	+	⋅ 3
10	4349	1932 && (4.9)
och för global respons i ramen fås vid insättande av värden i ekvation (4.4)
( 	)
( 	) 	( )	t	F	u
u
b 1,
3 400	,	0	10	0	68	000	,	1	181	400	,	0
6000	000	,	1	2400	236	,	0	2400	257	,	0
⋅	=	⋅	⋅	+	⋅	+	⋅	+
+	⋅	⋅	+	⋅	+	⋅ && (4.10)
( 	) 	( 	) 	( )	t	F	u	u b 1,
3
10	170	181	15000	1416	1542 =	⋅	⋅	+	+	⋅	+	+ && (4.11)
( )	t	F	u	u b 1,
3
10	351	17958 =	⋅	⋅	+	⋅ && (4.12)

-- 9 of 15 --

Beräkning av impulsbelastad konstruktion
10 (15)
B05-102
2014-02-10
Utgående från detta kan egenskaperna hos ett enfrihetsgradssystem svarande mot lokal respektive
global respons sammanfattas enligt Tabell 4.3, där vinkelfrekvens ω, frekvens f samt period T
beräknas som
m
k
=	
ω 	(4.13)
π
ω
2
=	f (4.14)
f
T 1
= (4.15)
Tabell 4.3 Sammanfattning av egenskaper hos enfrihetsgradssystem beskrivande ramens lokala
respektive globala respons vid en explosionsbelastning.
Fall m
[kg]
k
[kN/m]
ω
[rad/s]
f
[Hz]
T
[s]
Lokal respons 1 932 4 349 47,4 7,6 0,132
Global respons 17 958 351 4,4 0,70 1,421
Av detta framgår att det är stora skillnader i dynamiska egenskaper för lokal och global respons,
något som också får betydande inverkan på effekten från en angripande explosionslast.
4.3.3 Last-tidssamband
Utgående från reflekterade lastvärden i Tabell 3.1 där
+
= r	P	P1 (4.16)
+
= r	t	t ,	1	
∆ 	(4.17)
2
1	1
1
t	P
i ⋅
= (4.18)
samt dimensioner på betraktad ramstrimla
2
m	42	6	7 =	⋅	=	⋅	= s	l	A (4.19)
kan resulterande tryck-tidssamband tas fram som
A	P	F ⋅	= 1	1 → kN	331	42	9	,	7	,1 =	⋅	=	A	F (4.20)
2
1	1
1
t	F
I ⋅
= → Ns	4320
2
1	,	26	331
,1 =
⋅
=	A	I (4.21)

-- 10 of 15 --

Beräkning av impulsbelastad konstruktion
11 (15)
B05-102
2014-02-10
Lastvärden för explosion i område A, B och C sammanfattas i Tabell 4.4 och utgående från detta
kan resulterande förskjutning u i systempunkt bestämmas.
Tabell 4.4 Sammanställning av last som verkar på ramkonstruktion.
Explosions-
område
P1
[kPa]
t1
[ms]
i1
[Pas]
A
[m2]
F1
[kN]
t1
[ms]
I1
[Ns]
A 7,9 26,1 103 42 331 26,1 4 320
B 6,7 39,0 131 42 282 39,0 5 500
C 1,7 345 301 42 73 345 12 600
331
26.1
282
39.0
73
345
0
50
100
150
200
250
300
350
0 50 100 150 200 250 300 350
Last,
 F1 [kN]
Varaktighet, t
1111 [ms]
Område A
Område B
Område C
I1 = 5495 Ns
I1 = 4316 Ns
I1 = 12663 Ns
Figur 4.5 Resulterande last-tidssamband, genererad av explosion i område A, B och C, för
kontroll av dynamisk respons hos studerad ram i Figur 4.2.

-- 11 of 15 --

Beräkning av impulsbelastad konstruktion
12 (15)
B05-102
2014-02-10
4.4 Resultat
För en dynamisk last motsvarande en karakteristisk impulslast kan förskjutningen i ett system med
elastiskt respons bestämmas som
ω	m
I
u k
k	el =	, →
respons)	(global	mm	55	m	055	,	0
4	,	4	17958
4320
respons)	(lokal	mm	47	m	047	,	0
4	,	47	1932
4320
,	,
,	,
=	=
⋅
=
=	=
⋅
=
A	k	el
A	k	el
u
u
(4.22)
Detta är en konservativ uppskattning av förskjutningen och förutsätter att aktuellt last-tidssamband
kan betraktas som en karakteristisk impulslast. Om så inte är fallet kommer resulterande förskjut-
ning att minska. För att kontrollera vilken inverkan last-tidssambandet har kontrolleras kvoten
mellan systemets period T och lastens varaktighet t1
1	,	5
1	,	26
132
1
=	=





A	
t
T (lokal respons) (4.23)
54
1	,	26
1421
1
=	=





A	
t
T (global respons) (4.24)
mot tabellerade samband i dokument B03-101 för att få fram värdet på impulsfaktorn γI. Med ett
last-tidssamband motsvarande n = 1 (triangulär lastpuls) fås av detta att γI ≈ 1,04 för lokal respons
och γI ≈ 1,00 för global respons. Dvs. för den globala responsen kan FA(t) betraktas som en karak-
teristisk impulslast medan den för den lokala responsen egentligen genererar en något mindre
förskjutning
ω
γ
m
I
u I
el
1
= →
respons)	(global	mm	55	m	055	,	0
4	,	4	17958
00	,	1	4320
respons)	(lokal	mm	45	m	045	,	0
4	,	47	1932
04	,	1	4320
,
,
=	=
⋅
=
=	=
⋅
=
A	el
A	el
u
u
(4.25)
Motsvarande ekvivalenta utbredda statiska last kan nu beräknas som
A
ku
A
Q
q el
=	= →
respons)	(global	kN/m	46	,	0
42
055	,	0	351
respons)	(lokal	kN/m	7	,	4
42
045	,	0	4349
2
2
=
⋅
=
=
⋅
=
A
A
q
q
(4.26)
Av detta framgår att den ekvivalenta statiska lasten mot den främre pelarens lokala respons är cirka
en faktor tio gånger större än vad motsvarande last är för den globala responsen. Vidare kan dessa
resultat jämföras med maximalt tryck på P1,A = 7,9 kN/m2, varvid lastfaktorn β kan bestämmas som
P
q
=	
β →
respons)	(global	06	,	0
9	,	7
46	,	0
respons)	(lokal	59	,	0
9	,	7
7	,	4
=	=
=	=
A
A
β
β
(4.27)

-- 12 of 15 --

Beräkning av impulsbelastad konstruktion
13 (15)
B05-102
2014-02-10
I Tabell 4.5 sammanställs de delresultat som redovisas i ekvation (4.22) till (4.27) för lokal och
global respons vid belastning enligt Tabell 4.4. Av detta framgår att störst ekvivalent statisk last q
fås vid lokal respons av den främre pelaren för gasexplosion i område B. För den bakre pelaren
(global respons) fås dock störst ekvivalent statisk last för gasexplosion i område C.
Det är värt att poängtera att den mest kritiska lastsituationen för studerad ram, varken för lokal eller
global respons, inte uppstår för det fall där övertrycket är som störst, dvs. explosion i område A. För
lokal respons blir inte heller den största impulsen, dvs. last av explosion i område C, kritisk. Dessa
resultat belyser att det enbart genom att titta på de aktuella lastvärdena, utan koppling till studerad
struktur, inte är möjligt att säkert säga vilken dynamisk last som kommer vara mest kritisk.
Tabell 4.5 Sammanställning av delresultat för resulterande förskjutning, ekvivalent statisk last
samt lastfaktor β, jämför ekvation (4.22) till (4.27).
Fall Explosions-
område
uel,1
[mm]
T / t1
[-]
γI
[-]
uel
[mm]
q
[kN/m2]
β
[-]
A 47,1 5,1 1,04 45,3 4,7 0,60
Lokal respons B 60,0 3,4 1,10 54,5 5,6 0,84
C 138 0,38 4,60 30,1 3,1 1,78
A 54,6 54,7 1,00 54,6 0,5 0,06
Global respons B 69,5 36,6 1,00 69,5 0,6 0,09
C 160 4,14 1,07 150 1,3 0,72
De ekvivalenta statiska laster som ges i Tabell 4.5 kan nu användas för att bestämma snittkrafter i
den främre pelaren utgående från en statisk last. För den bakre pelaren är det möjligt att ett mer
farligt belastningsfall erhålls av den oreflekterade stötvåg som kan verka där. Denna kontroll utförs
dock inte i detta beräkningsexempel.
4.5 Jämförelse med numerisk beräkning
En jämförelse mellan de i avsnitt 4.3.3 beräknade förskjutningarna för ram med lokal och global
respons jämförs i detta avsnitt med lösning av enfrihetsgradssystem (SDOF) via central differens-
metod samt med ett flerfrihetsgraderssystem av en ram i en finit elementanalys (FE-analys).
Jämförelse görs här enbart för last-tidssamband av en gasexplosion i område A och resulterande
föstkjutnings-tidssamband visas i Figur 4.6 och Figur 4.7 för ramens globala respektive lokala
respons. Av detta framgår att det råder en god överensstämmelse mellan FE-analys och numerisk
SDOF-analys. Vidare kan konstateras att den maximala förskjutning som bestämts i avsnitt 4.3.3
också stämmer bra överens med de maximalförskjutningar som fås i FE-analys.
Av Figur 4.7 framgår att maximal förskjutning i den främre pelaren fås efter tiden t ≈ 45 ms och att
förskjutningen i pelartoppen vid den här tidpunkten är mindre än 5 mm. Detta visar riktigheten i att
för den lokala responsen låsa horisontell translation av pelartoppen eftersom det kommer ta ett tag
innan denna sätts i rörelse. I Figur 4.8 framgår ramens utböjningsform vid olika tidpunkter och av
detta kan noteras att den främre pelaren svänger fram och tillbaka i sin egen takt medan ramen
globalt uppvisar en mycket långsammare rörelse.

-- 13 of 15 --

Beräkning av impulsbelastad konstruktion
14 (15)
B05-102
2014-02-10
-60
-40
-20
0
20
40
60
0 200 400 600 800 1000 1200
Förskjutning,
 u [mm]
Tid, t [ms]
FEM - u1
SDOF - u1
u = 55 mm
u2
u1
Figur 4.6 Jämförelse av förskjutning u1 i ram vid belastning av reflekterat tryck från explosion
i område A för olika beräkningsmetoder.
-60
-40
-20
0
20
40
60
0 20 40 60 80 100
Förskjutning,
 u [mm]
Tid, t [ms]
FEM - u1
FEM - u2
SDOF - u2
u = 45 mm
u2
u1
Figur 4.7 Jämförelse av förskjutning u2 i ram vid belastning av reflekterat tryck från explosion
i område A för olika beräkningsmetoder. Förskjutning u1 visas som jämförelse.

-- 14 of 15 --

Beräkning av impulsbelastad konstruktion
15 (15)
B05-102
2014-02-10
t = 40 ms t = 100 ms
t = 170 ms t = 230 ms
t = 300 t = 380
Figur 4.8 Utböjningsform (förstoringsfaktor = 50) av ram vid olika tidpunkter. Maximal lokal
förskjutning u2,max i mitten av främre pelaren fås vid tiden t
≈ 45 ms och den
maximala förskjutningen i pelartopp u1,max fås vid tiden t
≈ 360 ms.

-- 15 of 15 --