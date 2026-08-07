---
title: "B01 103   Fragor Och Svar 140416"
category: "b01.-samlingsdokument"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b01.-samlingsdokument/b01-103---fragor-och-svar_140416.pdf"
fileType: "PDF"
keywords: ["pelare","betong","armering","beräkning","explosion","vatten","betongelement","kontroll"]
summary: "Beräkning av impulsbelastad konstruktion 1 (27) B01-103 2014-04-16 B01-103 Samlingsdokument Frågor och svar Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren. 1 Orientering 2 1.1 Samlingsdokument 2 1.2 Om detta dokument 2 2 Frågor kr..."
---

Beräkning av impulsbelastad konstruktion
1 (27)
B01-103
2014-04-16
B01-103 Samlingsdokument
Frågor och svar
Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren.
1 	Orientering 	2
1.1 	Samlingsdokument 	2
1.2 	Om detta dokument 	2
2 	Frågor kring last från luftstötvåg 	3
2.1 	Vad är typiska laddningsstorlekar? 	3
2.2 	Vilken effekt fås av olika typer av sprängämnen? 	3
2.3 	Hur bör explosionslaster vid dimensionering av tunnlar betraktas? 	4
3 	Frågor kring splitterverkan 	8
3.1 	Vilka faktorer påverkar splittrets anslagshastighet? 	8
3.2 	Hur bestäms erforderlig tjocklek hos en betongvägg vid splitterverkan? 	8
3.3 	Vilken hastighet fås av väggen som stöts ut vid utstötning? 	9
3.4 	Kan energi som åtgår för att fragmentera höljet i en bomb försummas? 	10
3.5 	Kan kraterbildning och utstötning ge en försvagad konstruktion? 	10
4 	Frågor kring strukturrespons 	11
4.1 	Hur ska effekt av statisk last och impulslast kombineras? 	11
4.1.1 	Respons vid återsvängning 	11
4.1.2 	Kombination av statisk last och impulslast 	14
4.1.3 	Konstruktioner med jord eller vatten på ena sidan 	15
4.1.4 	Hur hanteras statisk last när en impulslast gett upphov till en mekanism? 	16
4.2 	Hur ska inverkan av normalkraft beaktas på en impulsbelastad pelare? 	17
4.3 	Hur ska effekten av flera skyddande barriärer beaktas? 	20
4.4 	Hur utförs beräkning av sammansatta byggnadsmaterial? 	21
4.5 	Hur kan deformationskapacitet hos stålkonstruktioner bestämmas? 	24
4.6 	Är det korrekt att alltid anta ett lågt hållfasthetsvärde för material? 	26
4.7 	Hur kan förskjutningshastighet och frekvens hos omkringliggande bebyggelse vid
detonation i berg bestämmas? 	27

-- 1 of 27 --

Beräkning av impulsbelastad konstruktion
2 (27)
B01-103
2014-04-16
1 	Orientering
1.1 	Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 	Om detta dokument
I detta dokument samlas frågor, rörande beräkning av impulsbelastade konstruktioner som har
inkommit till MSB, samt svar till dessa. Avsikten med givna svar är att beakta den grundläggande
frågan på ett konceptuellt plan och dessa går därför inte in i detalj i samma omfattning som övriga
dokument i den här dokumentserien. I flera fall kan det dock vara aktuellt att här givna svar ligger
till grund för framtida dokument för beräkningsanvisningar och exempel.
Häri givna anvisningar förutsätter att läsaren är bekant med koncept och beteckningar som används
i dokumentserien Beräkning av impulsbelastade konstruktioner. Om inget annat anges utgår presen-
terade samband och beräkningar från ett enfrihetsgradssystem, varför omvandling från aktuell kon-
struktion till ett sådant system först behöver göras.

-- 2 of 27 --

Beräkning av impulsbelastad konstruktion
3 (27)
B01-103
2014-04-16
2 	Frågor kring last från luftstötvåg
2.1 	Vad är typiska laddningsstorlekar?
I Johansson och Laine (2012a) ges information om typiska laddningsstorlekar för olika typer av
behållare, se Tabell 2.1. Utgående från detta fås en uppfattning om vilka laddningsstorlekar som
kan vara aktuella för olika situationer.
Tabell 2.1 	Definition av sprängämnesmängder för olika typer av behållare där mängden anges
i ekvivalent mängd TNT. Baserat på Johansson och Laine (2012a).
Explosionskälla Mängd TNT
[kg] 1) 	Explosionskälla Mängd TNT
[kg] 1)
Rörbomb 	2,3 kg Skåpbil/
minibuss 1 818 kg
Väskbomb 	23 kg Liten
lastbil 4 545 kg
Liten
personbil 227 kg Lastbil
utan släp 13 636 kg
Stor
personbil 455 kg Lastbil
med släp 27 273 kg
1) 	Angiven laddningsstorlek härrör från amerikanska källor och anges ursprungligen i enhet pound
(1 pound = 0,454 kg), därav de ”precisa” värden som anges i tabellen.
2.2 	Vilken effekt fås av olika typer av sprängämnen?
För sprängämnen är det vid angivning av laddningsstorlek vanligt att uttrycka denna i mängd TNT.
Olika typer av sprängämnen genererar dock olika lasteffekter och för att approximativt beakta
effekten av detta används begreppet ekvivalent vikt TNT, där det aktuella sprängämnet räknas om
till den motsvarande mängd TNT som krävs för att generera samma last. I Tabell 2.2 redovisas
ekvivalenta vikter för olika typer av sprängämnen när hänsyn tagits till maximalt övertryck samt
impulstätheten i den positiva fasen. Av denna framgår tillexempel att Pentyl är 1,42 och 1,00 för
övertryck respektive impuls. Detta innebär att 1 kg Pentyl ger upphov till samma övertryck som
1,42 kg TNT men att det enbart behövs 1 kg TNT för att generera samma impuls.

-- 3 of 27 --

Beräkning av impulsbelastad konstruktion
4 (27)
B01-103
2014-04-16
Tabell 2.2 	Ekvivalent vikt för olika typer av sprängämnen där TNT används som referens.
Notera att olika ekvivalenta vikter erhålls för övertryck och impuls. Från Johansson
och Laine (2012a).
Sprängämne 	Ekvivalent vikt
Övertryck 	Impulstäthet
ANFO 1) 0,82 	0,82
Komposit A-3 	1,09 	1,07
Komposit B 	1,11 	0,98
Komposit C-4 	1,37 	1,19
H-6 	1,38 	1.15
HBX-1 	1,17 	1,16
Pentyl 	1,42 	1,00
RDX 	1,14 	1,09
TNT 	1,00 	1,00
Tritonal 	1,07 	0,96
1) 	En blandning av diesel och konstgödsel. Ett sådant spräng-
ämne användes av Anders Behring Breivik i spräng-
attentatet i Oslo 2011.
2.3 	Hur bör explosionslaster vid dimensionering av tunnlar betraktas?
Vid dimensionering av tunnlar i Sverige används primärt två, av Trafikverket, fördefinierade laster i
enlighet med Figur 2.1. Dessa laster är mycket olika till sin karaktär och benämns här som last 1
och last 2. Bakgrunden till dessa är något oklar men den tolkning som görs här är att last 1 simulerar
en reflekterad stötvåg som uppstår nära en potentiell explosionskälla medan last 2 simulerar den
oreflekterade stötvåg som fås på långt avstånd från samma explosionskälla. Last 1 verkar på en
begränsad area om 4 x 4 m 2 medan last 2 verkar över en längre sträcka med ett jämnt tryck på
samtliga angränsande ytor, se Figur 2.2 för en schematisk illustration av en möjlig lastsituation.
t
P
t1
P1
i1
Nr 	Beskrivning 	P1 	t1 	i1 	Lastyta
[kPa] 	[ms] 	[Pas]
1 	Lokalt tryck 	5 000 	2 	5 000 	4 x 4 m2
2 	Fördelat tryck 	100 	50 	2 500 	alla ytor
Figur 2.1 	Definition av impulslaster för dimensionering av tunnlar med hänsyn till explosion.

-- 4 of 27 --

Beräkning av impulsbelastad konstruktion
5 (27)
B01-103
2014-04-16
Längdsektion 	Tvärsektion
(a)
(b)
Figur 2.2 	Schematisk illustration av en möjlig lastsituation för impulslast enligt Figur 2.1 för
(a) last 1 och (b) last 2.
Vid impulsbelastning utgås ofta från två ytterlighetsfall – ideal impuls, med karakteristisk impuls-
last Ik, samt ideal trycklast med karakteristiskt tryck Fk, se Figur 2.3. Ett godtyckligt last-tids-
samband kommer att befinna sig någonstans mellan dessa båda fall. Förenklat kan sägas att en last
med kort varaktighet går mot ett fall motsvarande det för karakteristisk impuls och en last med lång
varaktighet går mot ett fall med karakteristisk trycklast.
Last, F
Tid, t
Ik
ta
Last, F
Tid, t
ta
Fk
(a) 	(b)
Figur 2.3 	Illustration 	av 	dynamiska 	ytterlighetsfall 	som 	börjar 	verka 	vid 	tiden 	t a :
(a) karakteristisk impuls Ik , (b) karakteristisk trycklast Fk .
Från angivet tryck P1 och varaktighet t 1 i Figur 2.1 framgår det att last 1 har ett betydligt mer
intensivt last-tidssamband än vad som är fallet för last 2. Uppenbarligen är det därmed också mer
rimligt att last 1 kan betraktas som en kortvarig last med egenskaper motsvarade de för en

-- 5 of 27 --

Beräkning av impulsbelastad konstruktion
6 (27)
B01-103
2014-04-16
karakteristisk impulslast. För att kunna uttala sig om huruvida dessa laster kan betraktas som kort-
eller långvariga krävs dock först en kontroll gentemot de strukturella egenskaperna hos den belas-
tade strukturen. I dokument B03-101 ges underlag för en sådan kontroll via så kallade korrektions-
faktorer γI, vilka bestäms på olika sätt beroende på om den belastade strukturen uppvisar en elastisk
eller plastisk respons.
För en elastisk respons gäller att
( 	)	1	,	, 	/ t	T	el	I	el	I	
γ
	γ 	= 	(2.1)
där T är strukturens egenperiod och t 1 är lastens varaktighet medan det för en plastisk respons gäller
att
( 	)	q	P	pl	I	pl	I 	/	1	,	,	
γ
	γ 	= 	(2.2)
där P1 är lastens maximala tryck och q är strukturens statiska lastkapacitet tillgänglig för att ta upp
impulslast, dvs. kapacitet reducerad med hänsyn till statisk last, uttryckt som en jämnt utbredd last
på den aktuella lastytan.
Om en accepterad avvikelse δ på resulterande deformation sätts till δ ≤ 10 % fås följande för last
enligt Figur 2.1:
20	,	4	/	%	10 	1 ≥	→	≤ 	t	T	el	
δ 	(2.3)
15	/	%	10 	1 	≥	→	≤ 	q	P	pl	
δ 	(2.4)
Ur detta kan sedan erforderliga gränsvärden på T (även angivet som frekvens f) och q beräknas för
last 1 och last 2 enligt Tabell 2.3. Från detta kan konstateras att det är sannolikt att last 1 med god
approximation kan betraktas som en karakteristisk impulslast medan last 2 sannolikt inte uppfyller
dessa kriterier.
Tabell 2.3 	Erforderliga gränsvärden för egenperiod T och egenfrekvens f samt lastkapacitet q
för struktur med elastisk respektive plastisk respons för att lasten, med maximalt
10 % avvikelse, ska motsvara en karakteristisk impuls.
Elastisk 	Plastisk
Last 	T 	f 	q
[ms] 	[Hz] 	[kPa]
Last 1 	≥ 8,4 	≤ 119 	≤ 330
Last 2 	≥ 210 	≤ 4,8 	≤ 6,7
För last 2 kan istället en alternativ jämförelse vara av intresse där en avvikelse av resulterande
deformation på δ ≥ 100 %, gentemot en karakteristisk impulslast, jämförs. För ett sådant fall fås
02	,	1	/	%	100 	1 ≤	→	≥ 	t	T	el	
δ 	(2.5)
7	,	2	/	%	10 	1 	≤	→	≥ 	q	P	pl	
δ 	(2.6)

-- 6 of 27 --

Beräkning av impulsbelastad konstruktion
7 (27)
B01-103
2014-04-16
varvid erforderliga gränsvärden fås enligt Tabell 2.4. Av detta framgår att last 1 sannolikt genererar
en respons som märkbart avviker från vad som skulle fås om den betraktades som en karakteristisk
impulslast. Det är dock därmed inte sagt att den kommer ge en respons som motsvarar den för en
karakteristisk trycklast – sannolikt fås en respons som ligger någonstans däremellan.
Tabell 2.4 	Erforderliga gränsvärden för egenperiod T och egenfrekvens f samt lastkapacitet q
för struktur med elastisk respektive plastisk respons för att lasten, med minst 100 %
avvikelse, ska motsvara en karakteristisk impuls.
Elastisk 	Plastisk
Last 	T 	f 	q
[ms] 	[Hz] 	[kPa]
Last 1 	≤ 2,0 	≥ 510 	≥ 1850
Last 2 	≤ 49 	≥ 20,4 	≥ 37
Kommentar
Last 1 kan sannolikt betraktas som en karakteristisk impulslast. För last 2 är det svårare att ge ett
generellt uttalande men den kommer sannolikt inte motsvara en karakteristisk impulslast utan ett
mellanting mellan karakteristisk impulslast och karakteristisk trycklast.

-- 7 of 27 --

Beräkning av impulsbelastad konstruktion
8 (27)
B01-103
2014-04-16
3 	Frågor kring splitterverkan
3.1 	Vilka faktorer påverkar splittrets anslagshastighet?
Utgångshastighet v0 hos splitter kan bestämmas enligt följande formel
)	1	(	400	2 /	2
0 h	M	W
e	v −
−	⋅	= 	(3.1)
där W är sprängämnets massa i [kg] TNT och Mh är höljets massa i [kg]. Luftmotståndet gör dock
att splitterhastigheten vr avtar med avståndet r från detonationen och kan bestämmas som
3/	00456	,0
0
s	m	r
r 	e	v	v −
= 	(3.2)
där v0 är splittrets utgångshastighet enligt ekvation (3.1) och ms är dess massa i [kg].
3.2 	Hur bestäms erforderlig tjocklek hos en betongvägg vid splitterverkan?
Splitter som träffar ett mål kan antingen penetrera eller perforera målet. Penetration betyder splitter-
inträngning, medan perforation innebär att splittret tränger igenom konstruktionen. Under penetra-
tionsförloppet närmast anslaget krossas betongen och kraterbildning sker, se Figur 3.1, samtidigt
som kraftig sprickbildning uppstår. Är penetrationsdjupet tillräcklig stort sker även utstötning på
baksidan av anslaget.
utstötning
splitter 	krater	x
t
Figur 3.1 	Schematisk illustration av kraterbildning och utstötning av betongkonstruktion utsatt
för ett splitteranslag.
För att bestämma erforderlig tjocklek hos en betongvägg för att perforation och/eller utstötning ej
skall inträffa utgås från resulterande penetrationsdjup. Penetrationsdjupet x i [mm] för ett splitter
med anslagshastigheten v s kan bestämmas som:
25	,0
9,0	37	,0
9	,	26
c
s	s
f
v	m
x ⋅
= 	för x ≤ 	3
1
117 	s	s m 	(3.3)
3
1
5,0
8,1	4,0
6	,	40
35	,	4 s
c
s	s 	m
f
v	m
x 	+
⋅
= 	för x > 	3
1
117 	s	s m 	(3.4)

-- 8 of 27 --

Beräkning av impulsbelastad konstruktion
9 (27)
B01-103
2014-04-16
där splittermassan ms är i [kg], hastigheten vs är i [m/s] och betongens tryckhållfasthet f c är i [Pa].
Detta värde används sedan tillsammans med splittermassan ms för att bestämma erforderlig betong-
tjocklek t p i [mm] för att förhindra perforation:
33	,0	033	,0 9	,	74	23	,	1 	s	s	p 	m	m	x	t 	⋅	+	⋅	⋅	= 	(3.5)
På motsvarande sätt beräknas erforderlig tjocklek t p i [mm] för att förhindra utstötning som
33	,0	033	,0 121	32	,	1 	s	s	p 	m	m	x	t 	⋅	+	⋅	⋅	= 	(3.6)
Erforderliga tjocklekar gäller för att förhindra respektive skadetyp och ska inte adderas.
3.3 	Vilken hastighet fås av väggen som stöts ut vid utstötning?
Ett skadefenomen som kan uppstå vid splitter- och/eller stötvågsbelastning är så kallad utstötning,
vilket innebär att betong slits loss på baksidan av den belastade konstruktionen. När en tryckvåg
orsakad av exempelvis en infallande stötvåg eller splitter når baksidan av konstruktionen reflekteras
denna och omvandlas till en dragvåg, se Figur 3.2 för schematisk illustration av en plan stötvåg som
träffar en betongvägg. När denna dragvåg överskrider betongens draghållfasthet finns det risk för
utstötning.
c
c
c
c
t
c
t
c
c
c
c
P(t)
v
potentiell
utstötnings-
spricka
t
(a) 	(b) 	(c)
t
P
t∆+
P +
i +
c
Figur 3.2 	Illustration av reflexion av tryckvåg till dragvåg på baksidan av en betongvägg:
(a) lasten P(t) med markering av potentiell spricka för utstötning, (b) spänningsvåg i
vägg för kortvarigt last, (c) spänningsvåg i vägg för långvarig last.

-- 9 of 27 --

Beräkning av impulsbelastad konstruktion
10 (27)
B01-103
2014-04-16
Det är svårt att bestämma hastigheten v hos den del av väggen som stöts ut, för att göra detta
erfordras avancerade finita elementanalyser. Dock är det möjligt att utgående från impuls I och
berörd massa m göra en konservativ uppskattning av maximal hastighet som
m
I
v 	=	max 	(3.7)
För ett lastfall med en plan stötvåg enligt Figur 3.2 kan detta uttryck skrivas om som
t
i
t	A
I
v ⋅
=
⋅	⋅
=
+
ρ
	ρmax 	(3.8)
där ρ är densitet, A är en area och t är väggens tjocklek. Vid last från ett enskilt splitter är det
svårare att bedöma storleken på den berörda massan men en ingenjörsmässig uppskattning är att
utgå från den massa som inryms inom en kon med 45° lutning.
3.4 	Kan energi som åtgår för att fragmentera höljet i en bomb försummas?
Vid detonation av en bomb med ett hölje förbrukas energi för att fragmentera höljet samt för att
skapa kinetisk energi hos utkastat splitter. Den energin som förbrukas för att fragmentera höljet är
endast någon eller några procent av den kinetiska energin som erhålls för splitter vid detonationen,
och kan i sammanhanget därför betraktas vara försumbar. Ett sådant synsätt är också konservativt
eftersom den resterande energi som frigjorts vid explosionen åtgår för att skapa en stötvåg som
breder ut sig i luften.
3.5 	Kan kraterbildning och utstötning ge en försvagad konstruktion?
Ifall en betongkonstruktion utsätts för en kombinerad stötvågs- och splitterbelastning där splitter
träffar konstruktionen först och stötvågen märkbart senare är det möjligt att konstruktionen blivit
försvagad. Dels kan splittrets inträngning ge upphov till kratrar som minskar betongens effektiva
tjocklek och dels finns risk att utstötning på dess baksida medföra en mindre mothållande massa.
Effekten blir förmodligen dock märkbar först om splitteranslagen sker så tätt att uppkomna kratrar
och områden med utstötning sammanfaller över ett större område, i vilket fall konstruktionen kan få
en reducerad latkapacitet. Ett mer detaljerat resonemang om detta presenteras i Leppänen (2012).

-- 10 of 27 --

Beräkning av impulsbelastad konstruktion
11 (27)
B01-103
2014-04-16
4 	Frågor kring strukturrespons
4.1 	Hur ska effekt av statisk last och impulslast kombineras?
4.1.1 	Respons vid återsvängning
För att illustrera effekten av kombinerad statisk last och impulslast utgås här från ett enfrihets-
gradssystem och en schematisk elastoplastisk arbetskurva enligt Figur 4.1. I figuren betecknar kj
och Rm,j styvhet respektive lastkapacitet för deformation i riktning j, varvid j = 1 anger deformation
i impulslastens riktning och j = 2 anger deformation i motsatt riktning. I Figur 4.1 är styvhet och
kapacitet samma oavsett lastriktning, dvs. k1 = k2 och Rm,1 = Rm,2.
Det inre arbetet som krävs för att ta upp den yttre lasten betecknas som Wi och motsvaras av den
markerade arean under kurvan i Figur 4.1b. När den maximala deformationen u tot har uppnåtts fås
en elastisk avlastning, varvid en elastisk energi
1
2
1,
2k
R
W m
el = 	(4.1)
frigörs som medför att strukturen svänger tillbaka åt andra hållet så som illustreras i Figur 4.1c, dvs.
det tillstånd som fås när R < 0. Det arbete som utförs i återsvängningen är således densamma som
frigörs vid avlastningen av den initiala utsvängningen. Som framgår av ekvation (4.1) innebär detta
också att den energi som behöver tas upp i återsvängningen ökar med kvadraten av lastkapaciteten
Rm,1 men minskar proportionellt med styvheten k1.
F(t)
R(u)
m 	u
u
R
Rm,1
Wi
Rm,2
k1
k2
utot	uel
u
R
Wel
Wel
Rm,1
Rm,2
(a) 	(b) 	(b)
Figur 4.1 	(a) enfrihetsgradssystem, (b) elastoplastisk arbetskurva med samma styvhet och
lastkapacitet, (c) illustration av återsvängning.
För att illustrera effekten av olika styvhet k och lastkapacitet Rm i de båda deformationsriktningarna
behandlas här ett antal olika typfall:
• 	Samma styvhet, olika kapacitet, se Figur 4.2.
• 	Olika styvhet, samma kapacitet, se Figur 4.3.
• 	Olika styvhet, olika kapacitet, se Figur 4.4.

-- 11 of 27 --

Beräkning av impulsbelastad konstruktion
12 (27)
B01-103
2014-04-16
u
R
Wel
Rm,1
Rm,2
Wel
u
R
Wel
Rm,1
Rm,2
Wel
(a) 	Rm,1 > Rm,2 	(b) 	Rm,1 < Rm,2
Figur 4.2 	Strukturell respons vid återsvängning: samma styvhet, olika kapacitet.
u
R
Wel
Rm,1
Rm,2
Wel
u
R
Wel
Rm,1
Rm,2
Wel
(a) 	k1 < k2 	(b) 	k1 > k2
Figur 4.3 	Strukturell respons vid återsvängning: olika styvhet, samma kapacitet.
I Figur 4.1 är styvhet och kapacitet samma oavsett lastriktning, dvs. k1 = k2 och Rm,1 = Rm,2. Detta
medför att formen på den avlastande lastkurvan är identisk med den pålastande lastkurvan i
återsvängningen, se Figur 4.1c. När styvhet och/eller kapacitet skiljer sig så som den/de gör i
Figur 4.2 till Figur 4.4 blir så dock inte längre fallet. Av dessa figurer framgår istället att elastisk
eller plastisk respons kan uppkomma beroende på aktuell kombination:
• 	Fall när återsvängning alltid når plastisk respons
o 	Samma styvhet och R m,1 > Rm,2, se Figur 4.2a
o 	Samma kapacitet och k1 < k2, se Figur 4.3a
o 	Kombination av k1 < k2 och Rm,1 > Rm,2 , se Figur 4.4a

-- 12 of 27 --

Beräkning av impulsbelastad konstruktion
13 (27)
B01-103
2014-04-16
• 	Fall när återsvängning aldrig når plastisk respons
o 	Samma styvhet och R m,1 < Rm,2, se Figur 4.2b
o 	Samma kapacitet och k1 > k2, se Figur 4.3b
o 	Kombination av k1 > k2 och Rm,1 < Rm,2, se Figur 4.4d
• 	Fall när det är oklart om återsvängning når plastisk respons
o 	Kombination av k1 > k2 och Rm,1 > Rm,2, se Figur 4.4b
o 	Kombination av k1 < k2 och Rm,1 < Rm,2, se Figur 4.4c
u
R
Wel
Rm,1
Rm,2
Wel
u
R
Wel
Rm,1
Rm,2
Wel
(a) 	k1 < k2 , Rm,1 > Rm,2 	(b) 	k1 > k2 , Rm,1 > Rm,2
u
R
Wel
Rm,1
Rm,2
Wel
u
R
Wel
Rm,1
Rm,2
Wel
(c) 	k1 < k2 , Rm,1 < Rm,2 	(d) 	k1 > k2 , Rm,1 < Rm,2
Figur 4.4 	Strukturell respons hos vid återsvängning: olika styvhet och olika kapacitet.

-- 13 of 27 --

Beräkning av impulsbelastad konstruktion
14 (27)
B01-103
2014-04-16
4.1.2 	Kombination av statisk last och impulslast
I Figur 4.5 visas schematiskt hur strukturens arbetskurva, motsvarande den i Figur 4.1b, påverkas
när statisk last och impulslast verkar i samma riktning. Dvs. en del av strukturens tillgängliga
kapacitet Rm,1 är redan innan impulslasten appliceras förbrukad av att bära en statisk last och kvar
finns enbart kapaciteten R’m,1. På samma sätt finns en reservkapacitet vid återsvängning som
motsvarar den statiska lasten Fsta, varvid kapaciteten mot detta ökar till R’m,2. För ett sådant fall kan
den aktuella situationen därför förenklat betraktas som att origo för den modifierade arbetskurvan
R’(u’) flyttas uppåt och placeras på en nivå motsvarande den statiska lasten Fsta. Därmed fås också
en modifierad kurva där R’m,1 < R’m,2, dvs. ett fall som motsvarar det som visas i Figur 4.2b.
u
R
Rm,1
Rm,2
Fsta 	u’
R’
u’
R’
R’m,1
R’m,2
R’m,1 = Rm,1 – Fsta
R’m,2 = Rm,2 + Fsta
Figur 4.5 	Statisk last och impulslast verkar i samma riktning. Origo för den modifierade
arbetskurvan flyttas uppåt för att simulera
Med samma resonemang kan ett fall där lasterna verkar i motsatta riktningar visas motsvara att
origo flyttas ned och placeras på en nivå på –Fsta, så som illustreras i Figur 4.6. Därmed fås också
en modifierad kurva där R’m,1 > R’m,2, dvs. ett fall som motsvarar det som visas i Figur 4.2a.
u
R
Rm,1
Rm,2
Fsta 	u’
R’
u’
R’
R’m,1
R’m,2
R’m,1 = Rm,1 + Fsta
R’m,2 = Rm,2 – Fsta
Figur 4.6 	Statisk last och impulslast verkar i motsatt riktning.

-- 14 of 27 --

Beräkning av impulsbelastad konstruktion
15 (27)
B01-103
2014-04-16
4.1.3 	Konstruktioner med jord eller vatten på ena sidan
För konstruktioner som har ett annat material, så som jord eller vatten, på ena sidan kan beräkning
utföras på ett sätt som motsvarar det som beskrivs i avsnitt 4.1.2. Dvs. en statisk last Fsta bestäms
utgående från aktuell lastsituation med beaktande av samtliga statiska laster, inklusive den tillkom-
mande last som uppstår av jord eller vatten på ena sidan. Skillnaden gentemot vad som beskrivs i
avsnitt 4.1.2 är att jorden/vattnet även kan bidra med ett tillskott till konstruktionens massa. Hur en
sådan tillkommande massa ska bestämmas är dock inte självklart.
I Figur 4.7 illustreras schematiskt några möjliga lastsituationer som utgås från i det fortsatta resone-
manget. Allmänt kan hela eller delar av massan m2 jord/vatten adderas till konstruktionens massa
m1, dvs.
2	1	12 	m	m	m 	⋅	+	=
	λ 	(4.2)
där λ är en faktor som anger hur stor andel av den extra massan som kan tillgodoräknas i impuls-
beräkningen. För ett idealt fall kan hela massan m 2 adderas varvid λ = 1,0.
(a) 	(b) 	(c)
m1 	m2
Figur 4.7 	Olika situationer där last verkar mot en konstruktion med tillkommande massa från
ett annat material: (a) extra massa placerat mellan last och konstruktion, och extra
massa placerat bakom konstruktion vid (b) tunt skikt, (c) tjockt skikt.
För ett belastningsfall enligt Figur 4.7a är det, oavsett tjocklek på skiktets tjocklek, rimligt att
ansätta λ = 1,0 eftersom impulslasten i ett sådant fall tvingar massan m2 att medverka med den
underliggande strukturen. Ett sådant värde är även rimligt att använda om tjockleken på det extra
materialet är så tunt att en deformation hos konstruktionen påverkar hela dess massa på ett likartat
sätt, se Figur 4.7b. Om lagret hos den tillkommande massan dock är tjockt, se Figur 4.7c, så är det
dock rimligt att λ < 1,0 eftersom strukturens deformation i ett sådant fall inte påverkar hela den
ovanpåliggande massan på samma sätt.
Vad som ska definieras som ett tunt eller tjockt skikt i ett sådant här fall är svårt att ge explicita
riktlinjer om och får bedömas från fall till fall beroende på det aktuella materialets egenskaper samt
den deformation som strukturen erhåller. Det som dock är viktigt att kommas ihåg vid en sådan
bedömning är att det enbart är den delen av massan som erhåller en förflyttning som ger ett tillskott
till massan m12 i ekvation (4.24). För ett fall enligt Figur 4.7c där den övre delen av den tillkom-
mande massan inte rör sig, men materialet däremellan pressas samman linjärt i förhållande till
avståndet från strukturens överkant, kan det visas att λ = 0,33.
En variant av belastningsfall enligt Figur 4.7c är när den tillkommande massan istället för att vara
placerad ovanpå strukturen är placerad vid sidan av så som illustreras i Figur 4.8. I ett sådant fall
finns det inte nödvändigtvis någon bortre gräns för var det extra materialet slutar. En uppskattning
av den medverkande massan kan dock fås genom att konservativt bedöma den jordvolym inom

-- 15 of 27 --

Beräkning av impulsbelastad konstruktion
16 (27)
B01-103
2014-04-16
vilket en linjär sammanpressning fås av materialet. Av detta kan en massa m2 beräknas som sedan
kombineras med en faktor λ =0,33 enligt ovan. Hur storleken på det sammanpressade området ska
bedömas behandlas inte vidare här.
område inom vilket
en linjär deformation
kan antas
Figur 4.8 	Last mot struktur med ett tjockt skikt av extra massa bakom strukturen.
4.1.4 	Hur hanteras statisk last när en impulslast gett upphov till en mekanism?
Vid statisk belastning innebär uppkomsten av en mekanism att maximalt tillåten lastnivå har
uppnåtts, dvs. uppnås en mekanism så erhålls också brott i strukturen, se Figur 4.9a. För en
impulsbelastning är detta dock inte fallet och för en konstruktion utsatt för en sådan last är det
istället eftersträvansvärt att verkligen uppnå en mekanism och aktuellt brottkriterium baseras istället
på tillåten deformationsförmåga, se Figur 4.9b.
u
R
Rm,1
k1
brott vid statisk last:
mekanism nås
uel
Rm,1
u
R
k1
brott vid impulslast:
deformationskapacitet nås
uel 	utot utot,rd
(a) 	(b)
Figur 4.9 	Schematisk illustration av brott vid (a) statisk last och (b) impulslast.
Ovanstående utsago kan för en statiker möjligen te sig tämligen underligt. Orsaken till att så dock är
fallet hittas i den verkande lastens varaktighet. En statisk last antas ha en sådan lång varaktighet att
om den kritiska lastnivå, som krävs för att resultera i en mekanism, uppnås så kommer också den
tillgängliga plastiska deformationsförmågan uttömmas, varvid brott fås. En impulslast har dock en
sådan kort varaktighet att den tillåtna plastiska deformationsförmågan i utsatt konstruktion inte
nödvändigtvis hinner uppnås innan lasten har försvunnit. Därmed kan den energiupptagnings-
förmåga som finns i konstruktionen utnyttjas på ett effektivt sätt och en elastisk avlastning fås när
den genererade inre energin blir densamma som pålagd yttre energi.
För att exemplifiera konceptet utgås här från en fritt upplagd betongbalk som är utsatt för en kombi-
nation av en statisk last (egentyngd) och en impulslast. Med antagande om en elastoplastisk
responskurva genererar detta en situation enligt Figur 4.10a, se avsnitt 4.1.1 för mer detaljerad
information. Last från egentyngd, symboliserad med lastnivån Fsta, är sådan att en elastisk respons
fås. I Figur 4.10b illustreras hur responsen blir när balken utsätts för en impulslast som verkar i
samma riktning som egentyngden. Den påfrestning som detta innebär medför att balken når sin

-- 16 of 27 --

Beräkning av impulsbelastad konstruktion
17 (27)
B01-103
2014-04-16
maximala lastkapacitet – en mekanism uppstår när en flytled i fältmitt uppstår – och en plastisk
deformation utvecklas. Vid en given deformation utot ≤ utot,rd nås dock energibalans, Wy = Wi, varvid
konstruktionen lastas av elastiskt igen och svänger kring en kvarstående plastisk deformation u’pl
till dess att den stannar, se Figur 4.10b. Vid detta tillfälle har visserligen en permanent deformation
uppstått i balken men avlastningen medför att den upphört att fungera som en mekanism. För att bli
en mekanism igen krävs att en yttre last F = R’m,1 appliceras men fram till dess kommer den att bete
sig som en balk med linjärelastisk respons.
u
R
Rm,1
Rm,2
Fsta 	u’
R’
mekanism uppnås varvid
plastisk respons fås
u
R
Rm,1
Rm,2
Fsta 	u’
R’
utot
u’pl
R’m,1
R’m,1 = Rm,1 – Fsta
(a) 	(b)
Figur 4.10 	Responssamband för fritt upplagd balk belastad med (a) enbart statisk last, (b)
kombination av statisk last och impulslast med resulterande deformation och
avlastning. Balken får en kvarstående deformation u’pl när impulslasten upphört.
4.2 	Hur ska inverkan av normalkraft beaktas på en impulsbelastad pelare?
Den tryckande kraften på en pelare kan ha både en gynnsam och en ogynnsam inverkan på dess
förmåga att bära last – ökad momentkapacitet respektive orsak till ett tillskottsmoment. Om
kapacitetsökningen överstiger tillskottsmomentet har normalkraften positiv inverkan, annars inte.
För en pelare med elastisk respons beaktas inverkan av tillskottsmoment via en förstoringsfaktor
kopplad till aktuell normalkraft och kritisk knäcklast medan ökad momentkapacitet fås som en
effekt i tvärsnittskontrollen. Vid statisk belastning utgås per definition från en elastisk respons för
pelaren, varför en sådan beräkningsmetodik också är möjlig i ett sådant fall. En impulsbelastad
pelare som enbart uppvisar en elastisk respons kan beräknas på motsvarande sätt – enda skillnaden
är att impulslasten först behöver omvandlas till en ekvivalent statisk last. Om impulsbelastningen
dock medför att en plastisk respons erhålls krävs en alternativ beräkningsmetod och nedan
presenteras ett förslag på en sådan metod.

-- 17 of 27 --

Beräkning av impulsbelastad konstruktion
18 (27)
B01-103
2014-04-16
Lastkapaciteten för en pelare kan skrivas som
N	red 	R	R	R	
∆	−	= 	(4.3)
där Rred är reducerad lastkapacitet, R är lastkapacitet utan hänsyn till tillskottsmoment och ∆RN är
kapacitetsreduktion orsakat av tillskottsmoment. Problemet för en pelare vid en plastisk respons är
dock att bestämma hur stor ∆RN blir. Reduktionen ∆RN är proportionell mot normalkraften N och
deformationen u i kritiskt snitt och kan skrivas som
( 	)	u	N	R	R N 	⋅	=
∆
	∆ 	(4.4)
Vid en plastisk respons gäller dock även att den resulterande deformationen u bland annat beror på
den reducerade mothållande kraften Rred, dvs.
( 	)	red	R	u	u = 	(4.5)
Av detta framgår att det inte är möjligt att direkt räkna fram aktuella parametrar utan att någon form
av iterativ beräkningsgång är nödvändig.
u
R
RN≠0
utot
RN=0
uel,N≠0
uel,N=0
∆RN(u)
Rred(u) = RN≠0 - ∆RN(u)
upl,N≠0
u
R
RN≠0
utot
RN=0
Rred
∆RN,el
utot,red
Rred(u)
∆RN,pl
förenklad Rred(u)
(a) 	(b)
Figur 4.11 	(a) Schematiskt responssamband för pelare med (RN≠0) och utan (RN=0 ) normalkraft.
Reducerad 	kapacitet 	Rred (u) 	beräknas 	utgående 	från 	kapacitet 	när 	N ≠ 0 	och
lastreduktion ∆RN (u), (b) förenklat, reducerat responssamband baserat på last-
reduktion vid deformation utot .
Om inverkan av initialkrokighet eller andra ordningens effekter bortses från kan konceptet för en
sådan beräkningsgång illustreras som i Figur 4.11. Här visas schematiskt responssambanden R(u)
för pelare med och utan normalkraft. Av detta fås en reducerad lastkapacitet Rred (u), så som illust-
reras i Figur 4.11a. Detta ligger sedan till grund för att beräkna ett förenklat elastoplastiskt samband
enligt 	Figur 4.11b. 	Eftersom 	reduktionskraften 	∆RN (u) 	ökar 	med 	ökande 	deformation 	utgås
konservativt från responskurvan utan normalkraft, RN=0 (u). Den deformation u tot som fås vid
impulsbelastning av ett sådant fall används sedan för att ta fram en uppskattning på det maximala
värdet av ∆RN. Denna kan i sin tur delas in i två delar
pl	N	el	N	N 	R	R	R 	,	,	
∆
	∆
	∆ 	+	= 	(4.6)

-- 18 of 27 --

Beräkning av impulsbelastad konstruktion
19 (27)
B01-103
2014-04-16
där
( 	)	0	,	, 	≠	= 	N	el	N	el	N 	u	R	R	
∆
	∆ 	(4.7)
och
( 	)	0	,	, 	≠	= 	N	pl	N	pl	N 	u	R	R	
∆
	∆ 	(4.8)
motsvarar en konservativ uppskattning av kapacitetsreduktionen vid elastisk respektive plastisk
deformation. Utgående från detta kan slutligen den reducerade lastkapaciteten beräknas som





 +	−	= 	≠ 2
,
,	0
pl	N
el	N	N	red
R
R	R	R
∆
∆ 	(4.9)
i enlighet med Figur 4.11b. Kontroll behöver även göras av att tillskottsmomentet på grund av
normalkraft, ∆M = N·u, inte blir dominerande gentemot den ökning av momentkapaciteten som en
tryckande normalkraft bidrar till. För här beskriven metod uppfylls detta villkor om
0	=	≥ 	N	red 	R	R 	(4.10)
uppfylls. Om så dock inte är fallet gäller inte ovan presenterad beräkningsgång.
Inverkan av pelarens initialimperfektioner kan beaktas genom att vid beräkning av kapacitets-
reduktionen orsakad av elastisk deformation ersätta ekvation (4.7) med
( 	)	tot	el	N	tot	el	N 	u	R	R 	,	,	,	
∆
	∆ 	= 	(4.11)
där
e	u	u 	N	el	tot	el 	+	= 	≠0	,	, 	(4.12)
är total elastisk deformation när initialimperfektion e har medräknats. Den andra ordningens effekt
kan på motsvarande sätt beaktas genom att räkna upp kapacitetsreduktionen ∆RN med en för-
storingsfaktor
cr	N	N
C /	1
1
−
= 	(4.13)
där N är aktuell normalkraft och N cr är pelarens kritiska knäcklast. Sammantaget innebär detta att
den reducerade lastkapaciteten Rred kan beräknas som





 +	⋅	−	= 	≠ 2
,
,	,	0
pl	N
tot	el	N	N	red
R
R	C	R	R
∆
∆ 	(4.14)
vilket därmed ersätter uttryck enligt ekvation (4.9).

-- 19 of 27 --

Beräkning av impulsbelastad konstruktion
20 (27)
B01-103
2014-04-16
Storleken på pelarens elastiska styvhet k = k(EI) kan beräknas utgående från en böjstyvhet
( 	)	nom	II EI	EI	EI 	,	max	= 	(4.15)
där III anger ekvivalent tröghetsmoment för ett böjsprucket tvärsnitt (stadium II) vid ren böjning
(N = 0) samt
s	s	s	c	c	c	nom 	I	E	K	I	E	K	EI 	⋅	+	⋅	= 	(4.16)
är nominell böjstyvhet enligt anvisningar i Eurokod 2.
Kommentar
Ovan given beräkningsmetod kan användas i flera iterationssteg. Om en förfinad beräkning önskas
kan en ny beräkning utföras där RN=0 ersätts med Rred varvid samma beräkningsprocess genomförs
på samma sätt igen. Detta ger en gradvis förbättrad kontroll på ingående parametrar, vilket därmed
minskar beräkningsmetodens konservatism.
4.3 	Hur ska effekten av flera skyddande barriärer beaktas?
Nedan ges en ingenjörsmässig metod för att bedöma vilken last som går vidare bakom en skydds-
konstruktion som brister. En situation motsvarande den som schematiskt visas i Figur 4.12 studeras.
r2
Vägg 1 	Vägg 2	Explosions-
centrum
r1 	∆r
Figur 4.12 	Geometri hos studerad situation där en stötvåg från en explosion behöver ta sig förbi
vägg 1 för att nå fram till vägg 2.
För att förenkla beskrivningen av beräkningsmodellen utgår angivna uttryck från att den verkande
trycklasten kan betraktas som en karakteristisk impulslast. För laster med en kort varaktighet kan en
sådan approximation vara acceptabel men för impulslaster med längre varaktighet kan en sådan
förenkling leda till onödigt stor konservatism varvid en mer noggrann beräkning av resulterande
yttre arbete i så fall bör göras.

-- 20 of 27 --

Beräkning av impulsbelastad konstruktion
21 (27)
B01-103
2014-04-16
Utgående från impulslasten I1 som verkar på vägg 1 kan det yttre arbetet Wy,1 som verkar mot denna
beräknas som
1
2
1
1,	1, 2m
I
E	W 	k	y 	=	= 	(4.17)
Det inre arbete Wi,1 som vägg 1 kan ta upp innan den brister beräknas. Beroende på vilken typ av
respons som kan tillgodoräknas för vägg 1 beräknas det inre arbetet på olika sätt. Konservativt antas
dock att väggen bryts sönder fullständigt i det ögonblick som dess brottkriterium uppnås och att den
därefter till fullo kastas vidare i lastens riktning.
Den energimängd ∆Ek,1 som kvarstår efter sönderbrytande av vägg 1 fås genom att reducera det
yttre arbetet Wy,1 med väggens inre arbete Wi,1, dvs.
1,	1,	1, 	i	y	k 	W	W	E 	−	=
	∆ 	(4.18)
Vid kontroll av vägg 2 beaktas inverkan av den utkastade väggens massa m1 och vid antagande om
plastisk stöt mellan vägg 1 och vägg 2 kan den yttre energin Wy,2, som verkar mot vägg 2, beräknas
som
1,
2	1
1
2, 	k	y 	E
m	m
m
W 	∆	⋅
+
= 	(4.19)
Uttrycket för det yttre arbetet Wy,2 förutsätter att den stötlast som fås från den sönderbrutna vägg 1
fungerar som en karakteristisk impulslast. Om så inte är fallet, utan dess varaktighet kan påvisas
vara tillräckligt lång, så kan Wy,2 reduceras. Andra effekter som kan påverka hastigheten hos
inkastade väggfragment, så som luftmotståndet samt impuls från den negativa fasen, är normalt litet
och kan konservativt försummas.
Kommentar
Det kan noteras att här presenterat synsätt kan, om det inre arbetet Wi,1 är lågt och skillnad i avstånd
r 1 och r 2 är tillräckligt stort, innebära att en mindre kritisk lasteffekt mot vägg 2 skulle erhållits om
det inte funnits någon vägg 1 alls. Orsaken till detta är att den last som fås från vägg 1 mot vägg 2
kan liknas vid ett splitterutkast från en splitterbomb. En viktig skillnad här är dock att eftersom
utkastade fragment bedöms kastas i en riktning vinkelrätt vägg 1 kommer det inte att ske någon
uttunning av lasten med avståndet på ett sådant sätt som fås vid en splitterbomb.
4.4 	Hur utförs beräkning av sammansatta byggnadsmaterial?
En situation där skyddet kan bestå av sammansatta byggnadsmaterial är exempelvis aktuellt för så
kallade sandwichelement som består av två betongdelar åtskilda av ett lager med cellplast, se
Figur 4.13. Hur en konstruktion med en sådan utformning beter sig vid en impulsbelastning är
relativt komplext och beror på lastens samt cellplastens egenskaper i kombination med ingående
styvheter hos den främre och bakre betongskivan. Några detaljerade riktlinjer för hur en sådan
konstruktion ska beräknas ges därför inte här, dessa begränsas istället till att beskrivas på en mer
konceptuell nivå.

-- 21 of 27 --

Beräkning av impulsbelastad konstruktion
22 (27)
B01-103
2014-04-16
När stötvågen träffar den främre skivan kommer denna att accelerera och pressa samman cellplasten
mot den bakomliggande betongskivan. Lasten överförs därigenom till den bakre skivan, som
normalt också fungerar som den bärande delen i elementet. Den totala impuls som når fram till
denna kommer inte att ändras men kan märkbart ändra karaktär i form av ett minskad tryckvärde
men med en ökad varaktighet.
m1 	främre betongskiva
bakre betongskiva
stötvåg 	R
u
arbetskurva
cellplast
ΔWi,cp	m2
Figur 4.13 	Uppbyggnad av sandwichelement.
Cellplastens sammanpressning medför två gynnsamma effekter som båda bidrar till att minska det
yttre arbete som verkar mot den bakre betongskivan:
• 	en energiförbrukning ΔWi,cp som i princip medför att impulsöverföringen från den främre till
den bakre skivan kan betraktas som en plastisk stöt,
• 	lastens varaktighet ökar med en bibehållen impuls, vilket innebär en mindre allvarlig
lastsituation.
Att ha ett sammansatt material är dock inte bara av godo. En negativ effekt är att den låga massan
hos den främre betongskivan gör att det yttre arbete som förs in i kroppen ökar. Vidare kommer den
främre och bakre betongskivan normalt inte kunna samverka, något som minskar elementets
lastkapacitet jämfört med vad som hade varit fallet hos ett homogent betongelement med en
tjocklek motsvarande summan av dessa.
Sammantaget är det komplicerat att generellt uttala sig om hur ovanstående positiva och negativa
effekter påverkar elementet i sin helhet. En alltför styv cellplast kan medföra att den bakre betong-
skivan sätts i rörelse redan vid en liten energiförbrukning av cellplasten, dvs. lastens varaktighet
ökar enbart marginellt, medan en alltför vek cellplast kan resultera i att denna trycks ihop så mycket
att den främre betongskivan i princip slår igenom och träffar den bakre skivan på ett ogynnsamt sätt
som mer liknar en elastisk stöt. Nedan ges dock en beräkningsgång som bedöms vara konservativ
och som kan användas vid impulsbelastning mot ett element av ett sammansatt byggnadsmaterial.
Konceptuellt kan responsen hos ett element av sammansatt material, motsvarande det i Figur 4.13
delvis liknas vid den som fås vid skydd av flera olika barriärer, se avsnitt 4.3. En liknande beräk-
ningsgång är därför också möjlig att använda här. För att förenkla beskrivningen av beräknings-
modellen 	utgår 	angivna 	uttryck 	från 	att 	den 	verkande 	trycklasten 	kan 	betraktas 	som 	en
karakteristisk impulslast. En mer noggrann beräkning, där lastens varaktighet beaktas, är dock
möjlig att göra enligt samma koncept som ges här.

-- 22 of 27 --

Beräkning av impulsbelastad konstruktion
23 (27)
B01-103
2014-04-16
Utgående från impulslasten I1 som verkar på den främre betongskivan kan det yttre arbetet Wy,1 som
verkar mot denna beräknas som
1
2
1
1,	1, 2m
I
E	W 	k	y 	=	= 	(4.20)
Inledningsvis antas den främre skivan överföra lasten till den bakre skivan via cellplasten. Det inre
arbete som uträttas vid sammanpressning av denna gör att plastisk stöt kan nyttjas men i övrigt
antas den konservativt inte ha någon inverkan på lastens utbredning i tiden. Efter plastisk stöt kan
det yttre arbetet som ska tas upp av det sammansatta elementet beräknas som
( 	) 	12
2
1
2	1
2
1
1,
2	1
1
12	, 2	2 	m
I
m	m
I
W
m	m
m
W 	y	y 	=
+
=	⋅
+
= 	(4.21)
där m12 är den totala massan av den främre och bakre betongskivan.
Kapacitetskontroll görs på samma sätt som för en vanlig balk men med den skillnaden att styvhet
k12 och lastkapacitet R12 bestäms som summan av de enskilda bidragen från främre och bakre
skivan, dvs.
2	1	12 	k	k	k 	+	= 	(4.22)
2	1	12 	R	R	R 	+	= 	(4.23)
Den 	tillåtna 	deformationen 	urd,12 hos 	det 	sammansatta 	elementet 	kan 	slutligen 	konservativt
bestämmas som
( 	)	2,	1,	12	, 	,	min 	rd	rd	rd 	u	u	u 	= 	(4.24)
Kommentar
Studier utförda av MSB, se Johansson och Laine (2012c), har påvisat att en möjlig förstärkning av
en byggnad med hänsyn till last från markstötvåg är användandet av ett energiförbrukande skikt i
marken. Ett sådant skikt kan utgöras av ett poröst material såsom lätt expanderade lerkulor, så
kallade LECA-kulor, se Figur 4.14.

-- 23 of 27 --

Beräkning av impulsbelastad konstruktion
24 (27)
B01-103
2014-04-16
aktuellt
jordmaterial
materialav-
skiljande duk
LECA-
kulor
dränerande jordmaterial,
ev. LECA-kulor
källare i
byggnad
dränering
Figur 4.14 	Schematisk bild av hur en förstärkning med ett skikt av LECA-kulor kan göras på
befintlig byggnad.
4.5 	Hur kan deformationskapacitet hos stålkonstruktioner bestämmas?
För 	betongkonstruktioner 	ges 	i 	Eurokod 2 	anvisningar 	om 	hur 	den 	plastiska 	deformations-
kapaciteten kan beräknas. Några motsvarande anvisningar för stålkonstruktioner saknas dock i
Eurokod 3. Med anledning av detta presentera här därför en modell baserad på en ingenjörsmässig
bedömning av hur den plastiska deformationskapaciteten hos en stålkonstruktion kan uppskattas.
I Eurokod 3 används begreppet tvärsnittsklasser för att fastställa i vilken grad ett tvärsnitt har någon
rotationskapacitet. Fyra klasser definieras enligt följande:
• 	Klass 1: Tvärsnitt som kan bilda en flytled med den rotationskapacitet som krävs från en
plastisk analys utan reduktion av bärförmågan.
• 	Klass 2: Tvärsnitt som kan uppnå plastisk bärförmåga för moment, men har begränsad
rotationskapacitet på grund av buckling.
• 	Klass 3: Tvärsnitt där spänningen i den yttersta tryckta fibern för ståltvärsnittet kan uppnå
flytgränsen 	i 	en 	elastisk 	spänningsfördelning, 	men 	där 	buckling 	förhindrar 	plastisk
bärförmåga för moment.
• 	Klass 4: Tvärsnitt där buckling inträffar innan flytgränsen uppnås i en eller flera delar av
tvärsnittet.
Tvärsnitt i klass 1 kan således uppvisa en plastisk omlagringsförmåga både i lokalt tvärsnitt som
globalt i konstruktionsdel medan tvärsnitt i klass 2 är begränsat till enbart lokal plasticering i
tvärsnittet men inte globalt i konstruktionsdel. Detta innebär att det krävs tvärsnitt av klass 1 för att
kunna tillgodoräkna sig en global plastisk respons i strukturen – för tvärsnitt i klass 2, 3 och 4 ska
använd strukturmodell antas uppvisa en elastisk respons.

-- 24 of 27 --

Beräkning av impulsbelastad konstruktion
25 (27)
B01-103
2014-04-16
I Figur 4.15 illustreras en fritt upplagd balk där flytleden, här definierad att ha en konstant krök-
ningsradie r, uppstår inom ett område med längden 2a. Hur stor längden a bör vara är oklar men det
bedöms här vara konservativt att sätta den till
h	a 	⋅	= 	5	,	0 	(4.25)
där h är tvärsnittets höjd.
a 	a
l
θrd 	r
urd
2
l
u 	rd
rd
⋅
=
θ
θrd
h - x
x
εs,u
εs,ö
Figur 4.15 	Modell för rotationskapacitet hos flytled i fritt upplagd balk.
Här kan sambandet mellan rotationskapacitet θrd och flytledens utbredning a tecknas som
r
a
rd =
	θ 	(4.26)
Maximalt tillåten krökningsradie baseras på tillåten ståltöjning i tvärsnittet inom flytledens utbred-
ning och krökningen kan beräknas som
x	h	x	r
u	s	ö	s
−
=	= ,	,	1	
ε
	ε (4.27)
där εs,ö och εs,u är stålets medeltöjning över sträckan a i över- respektive underkant, x är avstånd från
överkant till det neutrala lagret och h är tvärsnittets totalhöjd enligt Figur 4.15. Med antagande om
att x = h/2 fås εs,ö = εs,u = εs, vilket tillsammans med ekvation (4.25) till (4.27) ger att
s	rd	
ε
	θ 	= 	(4.28)
Kvoten mellan balkens längd l och tillåten plastisk mittnedböjning urd kan för balk enligt Figur 4.15
tecknas som
s	rd	rd	u
l
ε
	θ
2	2 =	= 	(4.29)
Tillåtet värde på töjningen εs beror på aktuellt stålmaterial. För ett varmvalsat stål med arbetskurva i
enlighet med Figur 4.16 är det dock rimligt att en brottöjning på εs = εs,fsu ≈ 10 % kan tillåtas och
med detta värde insatt i ekvation (4.29) fås
20
10	,	0
2
,
=	=
f	rd	u
l (4.30)

-- 25 of 27 --

Beräkning av impulsbelastad konstruktion
26 (27)
B01-103
2014-04-16
fsy
fsu 
εs,fsu	
εsu
ε
σ
εsy	
εsh
Figur 4.16 	Schematisk arbetskurva för varmvalsat stål.
Kommentar
Ovan givna samband för tillåten deformationskapacitet gäller för en fritt upplagd balk där flytleden
uppstår i balkens fältmitt. För andra placeringar av flytleden fås andra värden på den plastiska
deformationen. Dessa kan dock härledas enligt samma metodik som ges ovan.
4.6 	Är det korrekt att alltid anta ett lågt hållfasthetsvärde för material?
Vid beräkning med hänsyn till statiska laster är det ofta konservativt att välja materialdata motsva-
rande det nedre karakteristiska värdet. Det kan visserligen uppstå situationer där en låg hållfasthet
är ogynnsam, exempelvis vid bestämning av minimiarmering vid böjning, men ett lågt hållfasthets-
värde är normalt vad den verksamme konstruktören utgår ifrån. Vid impulsbelastade konstruktioner
är det dock vanligare att en situation kan uppstå där ett lågt hållfasthetsvärde är ogynnsamt.
Anledningen till detta är att den maximala lastkapaciteten önskas utnyttjas vid impulsbelastning,
dvs. utbildandet av en mekanism eftersträvas, se avsnitt 4.1.4. Därmed blir det vid impulsbelastning
också av större vikt att inte underskatta lastkapaciteten för en given konstruktionsdel.
Skapandet av en mekanism utgår från att plastiska leder uppstår med hänsyn till böjning och förut-
sätter att lastkapaciteten inte begränsas av ett sprött tvärkraftsbrott. Dvs. den lastdel som ska bäras i
tvärkraft är beroende på hur stor last som krävs innan en mekanism uppstår. Det kan därför
argumenteras för att det kan vara på osäker sida att utgå från armeringens lägre karakteristiska
flytgräns när en strukturs totala lastkapacitet ska bestämmas, en lastkapacitet som sedan ligger till
grund för att kontrollera att tvärkraftsbrott inte sker.
Ett konservativt förfarande skulle för ett sådant fall därför kunna vara att utföra dessa beräkningar
enligt följande koncept:
• 	Kontroll av moment- och deformationskapacitet görs baserat på att böjarmeringen ansätts ha
en flytgräns motsvarande ett lågt karakteristiskt värde.
• 	Kontroll av tvärkraftskapacitet görs baserat på att betong och/eller byglar har materialvärden
motsvarande lågt karakteristiskt värde. Ekvivalent statisk last bestäms dock utgående från att
böjarmeringen ansätts ha en flytgräns motsvarande ett högt karakteristiskt värde.

-- 26 of 27 --

Beräkning av impulsbelastad konstruktion
27 (27)
B01-103
2014-04-16
Ovanstående koncept ger resultat på säker sida. Dock är risken överhängande att ett sådant synsätt
är alltför konservativt eftersom det förutsätter att låga och höga karakteristiska materialvärden hos
ingående material samverkar på det mest tänkbara ogynnsamma sätt. Ett mer realistiskt antagande
skulle i ett sådant fall vara att ekvivalent statisk last, som används vid kontroll av konstruktionens
tvärkraftskapacitet, istället baseras på böjarmeringens medelvärde för flytgräns. Att använda
materialets medelvärde för en situation där en hög hållfasthet är ogynnsam ligger också i linje med
hur Eurokod 2 till exempel hanterar krav på minimiarmering.
Det är även möjligt att invända mot ovanstående resonemang. Vid beräkning av tillåten moment-
kapacitet hos en konstruktion utgås från böjarmeringens flytgräns. Detta sker med det goda minnet
att armeringen egentligen också har ett hårdnande, se schematisk arbetskurva för stål i Figur 4.16 i
avsnitt 4.5, dvs. armeringens kapacitet begränsas till ett lägre värde än det maximala värde som
veterligen kan uppstå. För att vara konsekvent med ovanstående resonemang om att använda ett
högt kapacitetsvärde borde det således också vara rimligt att använda armeringens brottspänning f su
istället för dess flytspänning f sy vid beräkning av ekvivalent statisk last. Utökas denna tankegång
ytterligare i tidigare riktning är det möjligt att även argumentera för att detta brottgränsvärde
dessutom bör motsvara det övre karakteristiska värdet, alternativt medelvärdet enligt ovan, för att
ge en konservativ kontroll. För att komplicera situationen ytterligare kan ingående material vid
snabb belastning, vilket i olika grad blir fallet vid impulsbelastning, även uppvisa märkbart högre
kapacitet än vad som är fallet vid normal, statisk belastning.
Kommentar
Av ovanstående resonemang framgår att det inte är svårt att hitta argument till varför ett lågt
hållfasthetsvärde inte alltid borde vara konservativt att använda. I praktiken kan det dock vara svårt
att veta hur detta ska hanteras, särskilt om effekten från snabb belastning ska beaktas på ett korrekt
sätt. Vid jämförelse med annan relevant litteratur som behandlar dimensionering med hänsyn till
impulsbelastning återfinns dock inte något resonemang liknande det som presenteras ovan. Av detta
konstateras att den okonservatism som kan fås av att genomgående använda låga karakteristiska
hållfasthetsvärden i jämförd litteratur inte anses vara tillräckligt viktig, alternativt helt har förbisetts.
Här bedöms det första alternativet vara anledningen till avsaknad av ett sådant resonemang. Baserat
på detta dras här därför slutsatsen att det är acceptabelt att, trots ovan presenterade invändningar,
genomgående använda sig av låga karakteristiska hållfasthetsvärden. I de fall där ett sådant
angreppssätt, av någon anledning ändå inte bedöms vara tillräckligt rekommenderas här att ett
medelvärde används istället för ett lågt karakteristiskt värde när en hög lastkapacitet är ogynnsamt.
4.7 	Hur 	kan 	förskjutningshastighet 	och 	frekvens 	hos 	omkringliggande
bebyggelse vid detonation i berg bestämmas?
Frågan har sitt ursprung i att det vid byggande av tunnlar i stadsmiljö utförs sprängningar i berg
som kan ge upphov till skador i omkringliggande bebyggelse. Effekt av bergssprängning är inte
något som MSB har fokuserat på i det arbete som hittills har utförts inom ramen för de kunskaps-
dokument som har tagits fram. Vilket samband som råder mellan olika stötvågsparametrar såsom
tryck och partikelhastighet (förskjutningshastighet) i markmaterial behandlas dock i Laine (2012),
varför detta möjligen kan utgöra ett visst stöd.

-- 27 of 27 --