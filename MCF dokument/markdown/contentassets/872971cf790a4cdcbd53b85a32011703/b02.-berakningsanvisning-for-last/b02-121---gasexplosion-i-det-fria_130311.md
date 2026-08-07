---
title: "B02 121   Gasexplosion I Det Fria 130311"
category: "b02.-berakningsanvisning-for-last"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b02.-berakningsanvisning-for-last/b02-121---gasexplosion-i-det-fria_130311.pdf"
fileType: "PDF"
keywords: ["beräkning","explosion","avlopp","kontroll","tryckvåg","figur","detta","b02-121"]
summary: "Beräkning av impulsbelastad konstruktion 1 (16) B02-121 2013-03-11 B02-121 Beräkningsanvisning för last Gasexplosion i det fria Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren. 1 Orientering 1 1.1 Samlingsdokument 1 1.2 Om detta do..."
---

Beräkning av impulsbelastad konstruktion
1 (16)
B02-121
2013-03-11
B02-121 Beräkningsanvisning för last
Gasexplosion i det fria
Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren.
1 	Orientering 	1
1.1 	Samlingsdokument 	1
1.2 	Om detta dokument 	1
2 	Förutsättningar 	2
2.1 	Brandfarliga gaser 	2
2.2 	TNO multienergimetod 	2
3 	Stötvågsparametrar 	4
4 	Energiskalat avstånd 	5
5 	Positiv fas 	6
5.1 	Oreflekterad stötvåg 	6
5.2 	Reflekterad stötvåg 	9
6 	Negativ fas 	12
7 	Bestämning av styrkefaktor 	13
8 	Flera explosioner samtidigt 	15
1 	Orientering
1.1 	Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 	Om detta dokument
I detta dokument sammanställs samband för stötvågsparametrar i den positiva och negativa fasen
från en gasexplosion. Bakgrund för här givna samband behandlas i Johansson (2013).

-- 1 of 16 --

Beräkning av impulsbelastad konstruktion
2 (16)
B02-121
2013-03-11
2 	Förutsättningar
2.1 	Brandfarliga gaser
Ett ämne definieras som en brandfarlig gas om den är gasformig vid 20 °C samt har ett brännbar-
hetsområde i en blandning av gas och luft. Brännbarhetsområdet hos en gas benämns även som dess
explosionsområde och syftar på den koncentration – en undre och en övre gräns – inom vilken
gasen är brännbar. Befinner sig blandningen av gas och luft utanför dessa gränser är den inte
brännbar. Den mest effektiva förbränningen fås dock när brandfarlig gas och luft är stökiometriskt
blandade.
Brännbarhetsområdet är specifikt för varje gas och varierar med syrekoncentration, temperatur och
tryck. I Tabell 2.1 sammanställs brandfarliga gaser med brännbarhetsområde och stökiometrisk
koncentration. Tungheten hos dessa gaser varierar men för samtliga utom vätgas gäller att den är
större än för luft. Detta innebär att vätgas kommer att stiga medan övriga gaser kommer sjunka,
något som har betydelse vid utvärdering av gasernas spridning från potentiella utsläppskällor.
Tabell 2.1 	Brandfarliga 	gaser 	med 	brännbarhetsområde 	och 	stökiometrisk 	koncentration
angivna i volymprocent.
Gas 	Kemisk 	Brännbarhetsområde 1) Stök. konc.
beteckning 	Undre [%] 	Övre [%] 	[%]
Vätgas 	H2 	4,0 	77,0 	30
Metan 	CH4 	5,0 	15,0 	9,5
Etan 	C 2 H6 	3,0 	15,5 	-
Propan 	C 3 H8 	2,1 	9,5 	4,0
Butan 	C 4 H10 	1,9 	8,5 	3,1
Eten, Etylen 	C 2 H4 	2,7 	34,0 	6,5
Propen 	C 3 H6 	2,0 	11,7 	4,5
Etyn, Acetylen 	C 2 H2 	1,8 	82,0 	7,7
1) 	Angivet brännbarhetsområde gäller vid 20 °C samt normalt lufttryck och syre-
koncentration.
2.2 	TNO multienergimetod
Last från gasexplosion som presenteras i detta dokument baseras på TNO multienergimetod. Denna
metod utgår från att en gasexplosion består av ett antal delexplosioner där en kraftfull explosion
enbart kan initieras i de delar av ett gasmoln där gasens expansionsmöjligheter är begränsade, dvs.
inom helt eller delvis inneslutna volymer eller i blockerade områden. Detta innebär att det i ett
gasmoln potentiellt kan skapas flera av varandra oberoende explosioner, var och en med sitt eget
energiinnehåll. Vidare är det enbart de delar av gasmolnet som inryms i områden som betraktas som
explosionsbenägna som används för att bedöma styrkan hos en kraftfull explosion.

-- 2 of 16 --

Beräkning av impulsbelastad konstruktion
3 (16)
B02-121
2013-03-11
Detta illustreras i Figur 2.1 där ett gasmoln spritt ut sig inom markerat område. I figuren markerar
A, B och C områden med någon form av inneslutning och/eller blockering i en sådan omfattning att
de bedöms kunna initiera en kraftfull explosion. Område A och B innesluts av gasmolnet och kan
därför vardera generera en explosion medan område C är beläget utanför gasmolnet och därför inte
bidrar till detta. Den explosionsalstrande energimängden baseras på volymen i område A respektive
B och kan generera två av varandra oberoende explosioner med olika styrka och med explosions-
centrum centriskt placerad inom respektive delvolym. Övriga delar av gasmolnet, utanför område A
och B, bidrar dock inte till energimängden i någon av dessa båda explosioner. Därmed begränsas
eventuella kraftfulla explosioners tillgängliga energimängd till det minsta av hur stor mängd av
gasmolnet som ryms i en explosionsinitierande volym eller av gasmolnets aktuella storlek. Gasen
utanför område A och B kan också ge upphov till en explosion men då med en lägre styrka. En
sådan explosion baseras på den totala gasvolym som befinner sig utanför område A och B.
B
A
gasmoln
stötvågsfrontC
Figur 2.1 	Schematisk illustration av TNO multienergimetod. Ett gasmoln täcker markerat
område. Område A och B innesluts av gasmolnet och kan båda ge upphov till varsin
explosion.
Beräkningsmodellen i TNO multienergimodell baseras på att framtagen gasvolym inom respektive
område omvandlas till en ekvivalent hemisfär innehållande samma volym, se Figur 2.2. Gasen antas
bestå av en homogen, stökiometrisk blandning av gas och luft med en förbränningsenergi
E’gas = 3,5 MJ/m3 , som är oberoende av gastyp. Explosionen förutsätts ske nära mark på ett sådant
sätt att tredimensionell avlastning är möjlig. Detta innebär att effekten av så kallad spegling också
redan har beaktats i här givna samband.
r0
ekvivalent hemi-
sfäriskt gasmoln
explosions-
centrum 	r
stötvågsfront
Figur 2.2 	Schematisk illustration av en ekvivalent hemisfärisk gasvolym som används i TNO
multienergimetod, där r 0 betecknar radien hos den ekvivalenta volymen.

-- 3 of 16 --

Beräkning av impulsbelastad konstruktion
4 (16)
B02-121
2013-03-11
3 	Stötvågsparametrar
I samband med explosionsbelastningar används stötvågsparametrar för att enklare beskriva den
genererade lastens egenskaper och nedan ges en mycket kort introduktion av dessa. I Figur 3.1 visas
ett förenklat tryck-tidssamband för en ideal stötvåg i en punkt på avståndet r från explosionen.
Denna typ av förenklat tryck-tidssamband är vanligt förekommande att använda för att ge en
förenklad lastbeskrivning och är den som används här för last från gasexplosion. Med ideal stötvåg
syftas här på en stötvåg som uppkommer vid fri avlastning i luften utan några störande reflexioner.
Explosionen detonerar vid tiden t = 0 och efter tiden t a har stötvågen nått fram till den studerade
punkten. Trycket vid vågfronten ökar då från det omgivande trycket P0 till P0 + P + under mycket
kort tid. Trycket avtar därefter till dess att det vid tiden t a +t + åter når bakgrundstrycket P0 och
därigenom avslutar tryckvågens positiva fas. En negativ fas med amplitud P0 – P - tar därefter vid
då flöden av luft strömmar mot explosionens centrum och därigenom skapar ett partiellt vakuum. Så
småningom återgår trycket till P0 vid tiden t a + t + + t -.
P0
P0 – P -
P0 + P +
Tryck, P
ta + t∆+ ta + t∆+ + t∆-
ta
i -
i +
Tid, t
ekvivalent
positiv fas
ekvivalent
negativ fas
ta + t∆+ + t∆- /2
studerad
punkt
r
Figur 3.1 	Förenklat tryck-tidssamband för ideal luftstötvåg från gasexplosion.
• 	Tryck, P [Pa]: Anger det totala lufttrycket, inbegripande normalt lufttryck P0. För ostörd luft
uppgår 	det 	normala 	lufttrycket, 	vid 	en 	lufttemperatur 	på 	T = 15ºC, 	till 	omkring
P0 = 101,3 kPa.
• 	Positiv fas: Definierar den del av stötvågen som uppvisar ett tryck som är större än det
normala lufttrycket, dvs. P > P0. Den positiva fasen utgör normalt den dimensionerande
lastdelen i en stötvåg och är det som normalt beaktas vid kontroll av lasteffekt från explosion.
Indexet + används för att beteckna en stötvågsstorhet som tillhör den positiva fasen.
• 	Negativ fas: Definierar den del av stötvågen som uppvisar ett tryck som är lägre än det
normala lufttrycket, dvs. P < P0. Det är inte ovanligt att inverkan av den negativa fasen
försummas vid kontroll av explosionens effekt. Indexet - används för att beteckna en stötvågs-
storhet som tillhör den negativa fasen
• 	Ankomsttid, t a [s]: Ankomsttiden t a är den tid det tar för stötvågen att nå fram från en
explosionskälla till studerad punkt. Ankomsttiden berörs inte närmare i detta dokument.

-- 4 of 16 --

Beräkning av impulsbelastad konstruktion
5 (16)
B02-121
2013-03-11
• 	Stigtid, t r [s]: Stigtiden benämns den tid det tar för övertrycket att öka från noll till sin fulla
amplitud. För en gasexplosion kan stigtiden variera men här ansätts att den sker fullständigt
momentan, dvs. stigtiden kan sägas ha en varaktighet på noll sekunder.
• 	Övertryck, P + [Pa]: Övertrycket anger storleken på det tryck som överstiger det normala
lufttrycket P0, dvs. P + = P – P0, där P > P0. I en stötvåg är övertrycket som störst i stötvågs-
fronten för att sedan snabbt sjunka ner till normalt tryck för ostörd luft. I en explosion finns
ingen faktisk begränsning på hur stort övertryck som kan uppstå.
• 	Undertryck, P - [Pa]: Undertryck anger storleken på det tryck som understiger det normala
lufttrycket P0, dvs. P - = P0 – P, där P < P0. Detta är ett fenomen som uppstår efter det att
stötvågen från en explosion har passerat studerad punkt. Den kraftfulla energifrigörelsen gör
att luftpartiklarna i det passerade området slungats iväg så att trycket därmed understiger det
normala lufttrycket. Ett undertryck kan sägas motsvara ett partiellt vakuum och dess storlek är
därmed begränsat i sin storlek till frånvaron av det normala lufttrycket. För ostörd luft uppgår
det normala lufttrycket till omkring P0 = 101,3 kPa vilket innebär att maximalt undertryck i
ett sådant fall begränsas till 101,3 kPa.
• 	Varaktighet, t +
, t - [s]: För en explosion skiljs det på varaktighet för positiv och negativ fas,
t + respektive t -. Allmänt gäller att varaktigheten i den negativa fasen är betydligt längre än i
den positiva.
• 	Impulstäthet, i [Pa s]: Tidsintegralen av en explosionslasts tryck-tidssamband ger upphov till
en impulstäthet och det skiljs på impulstäthet i positiv fas och negativ fas, i + respektive i -.
Vid kortvariga belastningsförlopp är det denna, snarare än trycket, som beskriver den
verkande lastens egenskaper. Allmänt gäller att impulstätheten i den negativa fasen är något
större än i den positiva.
• 	Reflekterat/oreflekterat: Det skiljs på egenskaperna hos en oreflekterad och reflekterad
stötvåg. Indexen s och r används för att beteckna stötvågsstorhet tillhörande oreflekterad
respektive reflekterad stötvåg.
4 	Energiskalat avstånd
Last från gasexplosion som presenteras i detta dokument baseras på TNO multienergimetod. I detta
avsnitt ges en beskrivning av metodens empiriska samband för att bestämma tryck, varaktighet samt
impulstäthet. Samtliga empiriska samband som redovisas här beskrivs med utgångspunkt från ett
dimensionslöst energiskalat avstånd r’. Detta definieras som
3/1
0
' 







⋅	=
gas	E
P
r	r 	(4.1)
där r är verkligt avstånd från explosionscentrum, P0 = 101,3 kPa är normalt lufttryck och
gas	gas	gas 	V	E	E 	⋅	= 	' 	(4.2)
är energin i aktuell gasvolym beräknad som produkten av gasens energiinnehåll E’gas = 3,5 MJ/m3
och den aktuella gasvolymen Vgas.

-- 5 of 16 --

Beräkning av impulsbelastad konstruktion
6 (16)
B02-121
2013-03-11
5 	Positiv fas
5.1 	Oreflekterad stötvåg
I 	Figur 5.1 	och 	Figur 5.2 	visas 	tio 	samband 	för 	oreflekterad 	övertryckskvot 	Ps’ 	respektive
energiskalad varaktighet t’ som funktion av energiskalat avstånd r’. Varje samband identifieras med
en styrkefaktor, där värdena 1 och 10 motsvarar en svag respektive en kraftig explosion, och är
framtagna med utgångspunkt av ett ungefärligt maximalt övertryck i enlighet med Tabell 5.1. En
styrkefaktor på 10 motsvarar en detonation medan en styrkefaktor på 1-9 motsvarar en deflagration
av varierande styrka. Vilken styrkefaktor som ska användas för ett givet tillfälle behandlas i
kapitel 7.
Tabell 5.1 	Samband mellan ungefärlig nivå på maximalt övertryck Ps+ och styrkefaktor enligt
Figur 5.1.
Styrkefaktor 	Ps+
[kPa]
Styrkefaktor 	Ps+
[kPa]
10 	>1 000 	5 	20
9 	500 	4 	10
8 	200 	3 	5
7 	100 	2 	2
6 	50 	1 	1
Dimensionslös övertryckskvot Ps’ definieras som
0
' P
P
P s
s
+
= 	(5.1)
där Ps+ är oreflekterat övertryck och P0 = 101,3 kPa är lufttrycket i ostörd luft vid en temperatur på
+15 ºC.
Dimensionslös energiskalad varaktighet t’ definieras som
3/1
0
0	' 







⋅	⋅	= +
gas	E
P
c	t	t 	(5.2)
där t + är verklig varaktighet i positiv fas och c0 = 340,3 m/s är ljudhastigheten i ostörd luft vid en
temperatur på +15 ºC.

-- 6 of 16 --

Beräkning av impulsbelastad konstruktion
7 (16)
B02-121
2013-03-11
0.001
0.01
0.1
1
10
0.1 	1 	10 	100
Oreflekterad övertryckskvot,
 Ps' [-]
Energiskalat avstånd, r' [-]
10
9
8
7
6
5
4
3
2
1
Figur 5.1 	Samband mellan oreflekterad övertryckskvot Ps’ och energiskalat avstånd r’ för
olika styrkefaktorer.
0.1
1
10
0.1 	1 	10 	100
Energiskalad varaktighet, ,
 t' [-]
Energiskalat avstånd, r' [-]
1
2
3
4
5
6
7
8
9
10
Figur 5.2 	Samband mellan energiskalad varaktighet t’ och energiskalat avstånd r’ för olika
styrkefaktorer.

-- 7 of 16 --

Beräkning av impulsbelastad konstruktion
8 (16)
B02-121
2013-03-11
Övertryckskvoten Ps’ och energiskalad varaktighet t’ kan uttryckas på formen
( )b
s 	r	a	P 	'	' 	⋅	= 	(5.3)
( )d
r	c	t 	'	' 	⋅	= 	(5.4)
där a, b, c och d är konstanter i enlighet med Tabell 5.2 och Tabell 5.3. Dessa uttryck har också
använts vid framtagning av samband enligt Figur 5.1 och Figur 5.2.
Tabell 5.2 	Konstanter a och b för bestämning av skalat övertryck Ps’ enligt ekvation (5.3). I
tabellen anges maximala värden på r’ när respektive kombination av konstanter a
och b ska användas. För samtliga uttryck gäller att Ps’ ≥ 0,001.
Styrkefaktor 	a 	b 	r’ 	a 	b 	r’ 	a 	b 	r’ 	a 	b
10 	0,43 	-2,35 	≤ 0,90 	0,47 	-1,46 	≤ 3,21 	0,32 	-1,13
9 	5 	0 	≤ 0,20 	0,47 	-1,46 	≤ 3,21 	0,32 	-1,13
8 	2 	0 	≤ 0,37 	0,47 	-1,46 	≤ 3,21 	0,32 	-1,13
7 	1 	0 	≤ 0,48 	0,48 	-1,00 	≤ 0,96 	0,47 	-1,46 	≤ 3,21 	0,32 	-1,13
6 	0,5 	0 	≤ 0,64 	0,32 	-1,01 	≤ 2,35 	0,47 	-1,46 	≤ 3,21 	0,32 	-1,13
5 	0,2 	0 	≤ 0,60 	0,12 	-1,00
4 	0,1 	0 	≤ 0,63 	0,064 	-0,97
3 	0,05 	0 	≤ 0,61 	0,031 	-0,96
2 	0,02 	0 	≤ 0,64 	0,013 	-0,97
1 	0,01 	0 	≤ 0,69 	0,007 	-0,98
Tabell 5.3 	Konstanter c och d för bestämning av energiskalad varaktighet t’ enligt ekva-
tion (5.4). I tabellen anges maximala värden på r’ när respektive kombination av
konstanter c och d ska användas.
Styrkefaktor 	c 	d 	r’ 	c 	d 	r’ 	c 	d 	r’ 	c 1) 	d 1)
10 	0,13 	-0,22 	≤ 0,51 	0,22 	0,57 	≤ 2,07 	0,29 	0,19 	≤ 10,49 	0,35 	0,11
9 	0,13 	-0,51 	≤ 0,53 	0,24 	0,46 	≤ 2,02 	0,29 	0,19 	≤ 10,49 	0,35 	0,11
8 	0,17 	-0,40 	≤ 0,58 	0,27 	0,45 	≤ 1,32 	0,29 	0,19 	≤ 10,49 	0,35 	0,11
7 1) 	0,21 	-0,46 	≤ 0,62 	0,30 	0,29 	≤ 1,59 	0,32 	0,15 	≤ 9,40 	0,29 	0,19
6 	0,26 	-0,46 	≤ 0,49 	0,38 	0,07 	≤ 7,81 	0,35 	0,11
5 	0,52 	-0,44 	≤ 0,51 	0,7 	0
4 	1,02 	-0,38 	≤ 0,53 	1,3 	0
3 	1,56 	-0,38 	≤ 0,52 	2 	0
2 	2,44 	-0,34 	≤ 0,54 	3 	0
1 	3,83 	-0,34 	≤ 0,50 	4,85 	0
1) 	För styrkefaktor 7 gäller för r’ > 10,49 att c = 0,35 och d = 0,11.

-- 8 of 16 --

Beräkning av impulsbelastad konstruktion
9 (16)
B02-121
2013-03-11
Några empiriska uttryck för energiskalad oreflekterad impulstäthet presenteras inte. Utgående från
ett triangulärt tryck-tidssamband, enligt kapitel 0 kan den energiskalade oreflekterade impuls-
tätheten i s’ dock bestämmas som
2
'	'
' t	P
i s
s
⋅
= 	(5.5)
varvid samband enligt Figur 5.3 fås.
0.0001
0.001
0.01
0.1
1
0.1 	1 	10 	100
Energiskalad oreflekterad impulstäthet,
 is' [-]
Energiskalat avstånd, r' [-]
10
9
8
7
6
5
4
3
2
1
Figur 5.3 	Samband mellan energiskalad oreflekterad impulstäthet i s’ och energiskalat avstånd
r’ för olika styrkefaktorer. Baserat på ekvation (5.5).
5.2 	Reflekterad stötvåg
För en reflekterad stötvåg bestäms först de oreflekterade stötvågsstorheterna Ps+, t + och i s+ i
enlighet med avsnitt 5.1. Det reflekterade övertrycket Pr+ bestäms därefter som
+	+ ⋅	= 	s	P	r 	P	P	
Λ 	(5.6)
där
ΛP är en reflexionskoefficient som för oreflekterade övertryck Ps+ ≤ 1 000 kPa kan bestämmas
som
0
0
7
14	8
P	P
P	P
s
s
P
+
+
= 	+
+
Λ 	(5.7)

-- 9 of 16 --

Beräkning av impulsbelastad konstruktion
10 (16)
B02-121
2013-03-11
För svaga stötvågor, Ps+ ≈ 0, fås en reflexionskoefficient
ΛP ≈ 2 vilket överensstämmer med linjär
vågteori. 	För 	starkare 	stötvågor 	ökar 	den 	här 	kvoten 	dock 	flerfaldig 	och 	exempelvis 	för
Ps+ ≈ 1 000 kPa fås
ΛP ≈ 5,5. I Figur 5.4 illustreras reflexionskoefficienten
ΛP för övertryck på upp
till 100 kPa.
2.0
2.1
2.2
2.3
2.4
2.5
2.6
2.7
2.8
1 	10 	100
Reflexionskoefficient,
ΛP [-]
Oreflekterat övertryck, Ps+ [kPa]
Figur 5.4 	Förhållande mellan reflexionskoefficient
Λ och oreflekterat övertryck Ps+ enligt
ekvation (5.7) för P s+ ≤ 100 kPa.
För den reflekterande impulstätheten i r+ finns inte något motsvarande samband. Denna kan dock
bestämmas som
+	+ ⋅	= 	s	i	r 	i	i	
Λ 	(5.8)
där 
Λ	γ
Λ
Λ P
i = 	(5.9)
är 	impulstäthetens 	reflexionskoefficient 	och 	γ
Λ är 	en 	reflexionskvot 	som 	varierar 	med 	det
oreflekterade övertrycket 	Ps+ enligt 	Tabell 5.4 	och 	Figur 5.5. 	Utgående från 	detta kan 	den
reflekterade impulstätheten tecknas som
+	+ ⋅	= 	s
P
r 	i	i
Λ	γ
Λ (5.10)
och den ekvivalenta varaktigheten som

-- 10 of 16 --

Beräkning av impulsbelastad konstruktion
11 (16)
B02-121
2013-03-11
Λ
+
+
+
+ =	=
⋅
=
γ
t
P
i
t
r
r
r 	...
2 (5.11)
Detta innebär att minskningen av den reflekterade impulstätheten i r+ med reflexionskvoten γ
Λ
beaktas genom att minska varaktigheten t + med samma faktor γ
Λ.
Konservativt 	kan 	γ
Λ = 1,0 	användas 	varvid 	ett 	approximativt 	uttryck 	på 	den 	reflekterade
impulstätheten fås som
+	+ ⋅	= 	s	P	r 	i	i	
Λ 	(5.12)
För ett mer noggrant värde på den reflekterade impulstätheten bestäms γ
Λ utgående från Tabell 5.4
eller Figur 5.5. För givna värden kan visas att för oreflekterade övertryck mellan 1 och 100 kPa
gäller att
( 	) 	( 	)2	6
10	4	0013	,	0	0004	,	1 +	−	+ ⋅	⋅	−	⋅	+	= 	s	s 	P	P	
Λ	γ 	1 ≤ Ps+ ≤ 100 kPa 	(5.13)
och för övertryck mellan 100 och 300 kPa att
( 	) 	( 	)2	6
10	1	0007	,	0	0304	,	1 +	−	+ ⋅	⋅	−	⋅	+	= 	s	s 	P	P	
Λ	γ 	100 < Ps+ ≤ 300 kPa 	(5.14)
där Ps+ anges i enheten kPa. För större övertryck än så, upp till maximalt 1 000 kPa, approximeras
att
15	,	1	=
	Λ	γ 	300 < Ps+ ≤ 1 000 kPa 	(5.15)
Tabell 5.4 	Värden på reflexionskvoten γ
Λ och oreflekterat övertryck Ps+ enligt Figur 5.5.
Ps+
[kPa]
γ
Λ
[-]
Ps+
[kPa]
γ
Λ
[-]
1 	1,001 	40 	1,046
2 	1,003 	50 	1,056
5 	1,007 	100 	1,091
10 	1,013 	200 	1,130
15 	1,019 	300 	1,148
20 	1,025 	500 	1,159
25 	1,031 	1 000 	1,146
30 	1,036

-- 11 of 16 --

Beräkning av impulsbelastad konstruktion
12 (16)
B02-121
2013-03-11
1.00
1.02
1.04
1.06
1.08
1.10
1.12
1.14
1.16
1.18
1 	10 	100 	1 000
Reflexionskvot,
γΛ [-]
Oreflekterat övertryck, Ps+ [kPa]
Figur 5.5 	Samband mellan reflexionskvoten γ
Λ och oreflekterat övertryck Ps+
.
6 	Negativ fas
Information om negativ fas har ännu inte lagts in i detta dokument. För detaljerad information se
Johansson (2013).

-- 12 of 16 --

Beräkning av impulsbelastad konstruktion
13 (16)
B02-121
2013-03-11
7 	Bestämning av styrkefaktor
Från avsnitt 5.1 framgår att styrkefaktorn har en central betydelse vid framtagning av lastparametrar
som fås vid en gasexplosion. Bestämning av vilken styrkefaktor som ska användas vid ett givet
tillfälle är komplicerat och i litteraturen inte klart definierat. I detta kapitel återges dock några
riktlinjer för val av styrkefaktor.
Exempel på situationer där omgivningens utformning kan initiera en kraftfull gasexplosion är:
• 	Tätt placerade föremål: En konfiguration med tätt placerade föremål, exempelvis rör,
förhindrar en fri expansion samtidigt som den bidrar till ökad turbulens hos gasens flöde.
Ökad turbulens i sin tur medför ökade hastigheter och därmed ökat tryck.
Processutrustning eller rörledningar som står tätt samman eller lådor fyllda med flaskor är
exempel på ett sådant fall.
• 	Parallella plan: I en sådan här konfiguration förhindrar expansionen helt i en riktning. Detta
gör att gasen tvingas flöda parallellt med planen, vilket generar en ökad flödeshastighet och
därmed ökat tryck.
Exempel på sådana fall är volymen mellan mark och fordon på en parkeringsplats för bilar,
en rangerbangård för tågvagnar eller en smal gång mellan två byggnader.
• 	Rörliknande konfiguration: På motsvarande sätt som för parallella plan medför en sådan här
konfiguration att expansionen begränsas till enbart en riktning, vilket på samma sätt som ovan
genererar ökat tryck.
Exempel på denna typ är konstruktioner såsom tunnlar, kulvertar och avloppssystem.
Samtliga ovan givna konfigurationer ska betraktas som möjliga områden där en kraftfull explosion
kan utvecklas. Den exakta styrkan hos en sådan potentiell explosion beror dock på framförallt
följande parametrar:
• 	Gasens reaktivitet
• 	Gasens antändningsenergi
• 	Grad av blockering
• 	Grad av inneslutning
Gasens reaktivitet är en kvalitativ parameter som allmänt används för att beskriva gasens benä-
genhet att nå höga förbränningshastigheter, och därmed höga tryck. En kategorisering av reaktivitet
hos olika gaser samt antändningsenergi ges i Tabell 7.1 och i Tabell 7.2 sammanställs riktlinjer för
val av styrkefaktor för olika kombinationer av dessa parametrar.

-- 13 of 16 --

Beräkning av impulsbelastad konstruktion
14 (16)
B02-121
2013-03-11
Tabell 7.1 	Kategorisering av gasers reaktivitet samt antändningsenergi.
Reaktivitet 	Gas 	Antändningsenergi 	Beskrivning
Hög 	Vätgas 	Hög 	Jetstråle
Acetylen 	Sprängmedel
Etenoxid 	Låg 	Öppen flamma
Propenoxid 	Gnista
Mellan 	Övriga gaser 	Het yta
Låg 	Metan
Kolmonoxid
Tabell 7.2 	Riktlinjer för val av styrkefaktorer.
Antändningsenergi 	Grad av blockering 	Inneslutning 	Styrke-
Hög 	Låg 	Hög 	Låg 	Ingen 	Ja 	Nej 	faktor, s
● 	● 	● 	10
● 	● 	● 	10
● 	● 	● 	7
● 	● 	● 	6
● 	● 	● 	6
● 	● 	● 	5
● 	● 	● 	7
● 	● 	● 	7
● 	● 	● 	5
● 	● 	● 	3
● 	● 	● 	3
● 	● 	● 	3 1)
1) 	Om den exploderande gasens reaktivitet, enligt Tabell 7.1, inte är ”Hög” kan s = 2 användas.

-- 14 of 16 --

Beräkning av impulsbelastad konstruktion
15 (16)
B02-121
2013-03-11
8 	Flera explosioner samtidigt
En explosion i ett gasmoln kan mycket väl bestå av två eller flera explosioner. Det är dock extremt
osannolikt att två eller flera delar av gasmolnet antänds samtidigt eftersom flamutbredningen genom
det icke inneslutna gasmolnet är relativt långsam. Med anledning av detta är det därför också
normalt acceptabelt att betrakta varje explosionsområde inne i gasmolnet som en enskild explosion
om det är ett tillräckligt stort avstånd mellan två sådana potentiella explosionskällor.
Krav på erforderligt separationsavstånd mellan två möjliga explosionskällor uppfylls om:
• 	Kraftig explosion (Ps+ ≥ 100 kPa, s = 7) – krävs ett fritt avstånd om 0,5∙l
• 	Svag explosion (Ps+ ≤ 10 kPa, s = 4) – krävs ett fritt avstånd om 0,25∙l
där l anger explosionskällans utbredning i given riktning. För explosioner med mellanliggande tryck
fås krav på fritt avstånd via linjär interpolation. Uppfylls inte dessa villkor på separationsavstånd
ska explosionen betraktas som en explosion med en energimängd motsvarande summan av de
interagerande källorna och explosionscentrum placeras i den energiviktade centrumpunkten av in-
gående explosionskällor.
Värdet på styrkefaktorn för den resulterande explosionen tilldelas det största värdet för den källa
som innesluter den andra, se Figur 8.1. För illustrerat fall innebär detta att om s < 7 kommer en
explosion i område C kunna sprida sig till område B men inte tvärtom eftersom l C,2 / 4 > aBC men
l B,2 /4 < aBC. Resulterande explosion baseras därför på total volym i område B och C samt styrke-
faktorn för område C, dvs. Vgas = VB + VC respektive s = s C. Om däremot s ≥ 7 kommer en kraftfull
explosion även kunna sprida sig från område B till område C eftersom l B,2 / 2 > aBC. För ett sådant
fall baseras därmed den totala explosionen på Vgas = VB + VC och s = max(s B, s C).
A
B
C
lC,1
lC,2
lA,2
lA,1
aAB
aBC
lB,2
l / 4
l / 2
(a) 	(b)
lB,1
Figur 8.1 	Schematisk bild för exemplifiering av hur separationsavstånd mellan olika objekt ska
beaktas.

-- 15 of 16 --

Beräkning av impulsbelastad konstruktion
16 (16)
B02-121
2013-03-11
Tabell 8.1 	Möjlig interaktion mellan inneslutna/blockerade områden enligt Figur 8.1.
Område 	Styrkefaktor hos källa 	Tillräckligt avstånd?
Källa 	Mottagare 	s ≤ 4 	s ≥ 7 	s ≥ 7 	s ≤ 4
A 	B 	l A,2 /4 < aAB 	l A,2 / 2 > aAB 	Nej 	Ja
B 	A 	l B,2 /4 < aAB 	l B,2 / 2 < aAB 	Ja 	Ja
B 	C 	l B,2 /4 < aBC 	l B,2 / > aBC 	Nej 	Ja
C 	B 	l C,2 /4 > aBC 	l C,2 / 2 > aBC 	Nej 	Nej
A 	C 	l A,2 /4 < aAB
l B,2 /4 < aBC
l A,2 / 2 > aAB
l B,2 / > aBC
Nej 1) Ja
C 	A 	l C,2 /4 > aBC
l B,2 /4 < aAB
l C,2 / 2 > aBC
l B,2 / 2 < aAB
Ja 	Ja
1) 	Förutsätter att styrkefaktor hos explosion i mottagare B också uppfyller s ≥ 7. Om inte kommer inte en
explosion kunna spridas vidare från B till C, varmed en explosion i A inte heller kommer kunna
samverka med en explosion i C.

-- 16 of 16 --