---
title: "D02 103   Vapenlast Och Raslast 251215"
category: "d02.-raslast"
originalFile: "contentassets/7ad48cd9f0954868a0d063368abec982/d02.-raslast/d02-103---vapenlast-och-raslast_251215.pdf"
fileType: "PDF"
keywords: ["skyddsrum","pelare","beräkning","explosion","kontroll","tryckvåg","raslast","enligt"]
summary: "Dimensioneringslösning 1 (19) D02-103 2025-12-15 D02-103 Last mot skyddsrum Vapenlast och raslast 1 Orientering 2 1.1 Bakgrund 2 1.2 Om detta dokument 2 2 Anvisningar enligt SR 2 2.1 Orientering 2 2.2 Vapenlast 3 2.2.1 Grundvärde 3 2.2.2 Reducerad..."
---

Dimensioneringslösning
1 (19)
D02-103
2025-12-15
D02-103 Last mot skyddsrum
Vapenlast och raslast
1 Orientering 2
1.1 Bakgrund 2
1.2 Om detta dokument 2
2 Anvisningar enligt SR 2
2.1 Orientering 2
2.2 Vapenlast 3
2.2.1 Grundvärde 3
2.2.2 Reducerad vapenlast mot golv 4
2.3 Raslast 5
2.3.1 Grundvärde 5
2.3.2 Reducerad raslast av kupolverkan 6
3 Beräkningsexempel 7
3.1 Förutsättningar 7
3.2 Lastkombinering 9
3.3 Vapenlast 9
3.3.1 Grundvärde 9
3.3.2 Reducerad vapenlast mot golv 11
3.4 Raslast 12
3.4.1 Grundvärde 12
3.4.2 Detaljerad beräkning av rasmassornas tyngdpunkt ht 13
3.4.3 Reducerad raslast av kupolverkan 15
3.4.4 Pelardäck samt kombination med pelare och balkar 17
4 Revideringslista 19

-- 1 of 19 --

Dimensioneringslösning
2 (19)
D02-103
2025-12-15
1 Orientering
1.1 Bakgrund
Vid dimensionering av ett skyddsrum ska primära och sekundära effekter av en explosion beaktas.
Detta görs via användandet av vapenlast respektive raslast, vilka båda utgörs av exceptionella
dynamiska laster som ett skyddsrum ska kunna motstå i händelse av krig. Tillsammans utgör de
grunden för utformningen av den skyddande funktionen i ett skyddsrum.
1.2 Om detta dokument
I detta dokument presenteras ett beräkningsexempel om hur vapen- och raslast mot skyddsrum
bestäms. Fokus ligger på att illustrera hur anvisningar om vapenlast och raslast mot skyddsrum är
avsedda att tolkas och användas. Lastkombinering med statiskt verkande laster behandlas dock inte
i detta dokument.
2 Anvisningar enligt SR
2.1 Orientering
I SR anges två typer av laster som ska beaktas vid dimensionering av ett skyddsrum: vapenlast och
raslast. I detta avsnitt återges anvisningar i SR för de båda.
Den vapenlast som antas verka mot skyddsrummet representerar två olika lastsituationer:
• En kortvarig impulslast från MSB:s så kallade arkivbomb.1
• En långvarig trycklast2 med ett övertryck på 50 kPa och ett undertryck på 8 kPa.
Den raslast som antas verka mot skyddsrummet representerar en situation när ovanliggande eller
näraliggande byggnad kollapsar och rasmassorna faller ner och träffar skyddsrummet3.
1 Arkivbomben är en fiktiv bomb som av MSB definieras som: ”verkan av en tryckvåg motsvarande den som åstadkoms
av en 250 kilograms minbomb med 50 viktprocent trotyl som briserar i det fria 5,0 meter från skyddets utsida vid fri
tryckavlastning”. Detta motsvarar en laddning på 0,50250 = 125 kg TNT som detonerar på avståndet 5,0 m med möj-
lighet till fri sfärisk avlastning.
2 Den långvariga trycklasten representerar tryckvågen från en kärnvapenladdning som detonerar på ett långt avstånd.
3 Byggnadens kollaps antas initieras av någon form av explosion som inte direkt påverkar själva skyddsrummet. Ras-
lastens värde är framtagen från en konservativt antagen situation där raset börjar i byggnadens topp och därefter gradvis
fortplantar sig nedåt i byggnaden innan rasmassorna, tämligen samlat, träffar skyddsrummets tak.

-- 2 of 19 --

Dimensioneringslösning
3 (19)
D02-103
2025-12-15
Både vapen- och raslast utgörs av dynamiska laster. Vid dimensionering av ett skyddsrum godtas
dock att i stället använda så kallade ekvivalenta statiska laster, vilka förenklat representerar verkan
av den dynamiska lasten. Det är även möjligt enligt SR att utföra en dimensionering med hänsyn till
dynamiska laster, detta behandlas dock inte vidare i detta dokument.
Eftersom vapen- och raslast antas uppstå i olika situationer ska de inte kombineras.
2.2 Vapenlast
2.2.1 Grundvärde
Vapenlasten består av en jämnt utbredd last enligt Tabell 2.1 som, med undantag av vindlast, ska
kombineras med andra verkande laster enligt Eurokod. Vid dimensionering av vägg med hänsyn till
vapenlast bör dock inverkan av vertikal last från ovanliggande byggnad bortses ifrån4. Vapenlast
riktad mot respektive från skyddsrummet är skilda lastkombinationer och förutsätts var för sig
påverka hela skyddsrummets utsida vinkelrätt mot konstruktionsdelens plan. Varje konstruktionsdel
beräknas separat så som schematiskt illustreras i Figur 2.1. För bjälklag eller vägg mellan två
skyddsrum ska vapenlasten fördubblas.
Tabell 2.1 Vapenlast vid varierande avstånd mellan utsida skyddsrumsvägg och maximal
zongräns r.
Maximal
zongräns, r
Mot skyddet,
qvapen,1
Från skyddet,
qvapen,2
[m] [kN/m2] 1) [kN/m2] 1)
≥ 5,0 50 8
4,0 70 12
3,0 100 16
2,0 180 30
< 2,0 Dynamisk beräkning
1) För avstånd mellan redovisade värden godtas linjär interpolering.
4 Bortses från andra ordningens effekter skulle en tryckande normalkraft N medföra en ökad momentkapacitet hos tvär-
snittet. Det kan argumenteras för att vertikal statisk last från en ovanliggande byggnad ska beaktas vid kapacitets-
kontroll av vägg. Enligt avsnitt 2.1 ska ett skyddsrum dock dels tåla verkan av en kortvarig impulslast från en närlig-
gande explosion, dels ett långvarigt tryck från en kraftig explosion på långt håll. För det kortvariga trycket är det rimligt
att inverkan av normalkraft från ovanliggande byggnad beaktas – för detta fall kommer last av byggnad troligen vara
verksam innan kritisk dynamisk respons hos belastad skyddsrumsvägg hunnit avslutas. För ett långvarigt tryck är så
dock inte fallet. Här är det i stället troligt att ovanliggande byggnad helt eller delvis inte längre belastar skyddsrummet.
Sammantaget medför detta att det för vertikallast i skyddsrumsvägg enbart blir rimligt att medräkna gynnsam inverkan
av bidrag från byggnadsdelar som är dimensionerade som ett skyddsrum. Av försiktighetsskäl bör därför vertikal
normalkraft i skyddsrumsvägg begränsas till bidrag av egentyngd från skyddsrummets takplatta.

-- 3 of 19 --

Dimensioneringslösning
4 (19)
D02-103
2025-12-15
Skyddsrum
Sektion
Tak
Vägg
Golv
Last mot vägg 	Last mot tak
Last mot golv 	Last mot vägg
Figur 2.1 Schematisk illustration av belastning med vapenlast mot tak, väggar och golv i
skyddsrum.
2.2.2 Reducerad vapenlast mot golv
Vapenlasten som verkar mot skyddsrummets golvbjälklag kan reduceras till
, ,1	v red vapen	q q	

	= 	
(1)
där qv,red är reducerad vapenlast, β är en lastfaktor enligt Tabell 2.2 och qvapen,1 är vapenlastens
grundvärde verkande mot skyddsrummet enligt Tabell 2.1. Det godtas att olika värden på vapenlast
används mot olika delar av golvkonstruktionen.
Om undergrunden inom ett avstånd (i djup eller sidled) av 5,0 m från golvplattan består av material
som kan hänföras till olika grundtyper, ska den ogynnsammaste typen tillämpas. Det godtas att
olika värden på vapenlast används mot olika delar av golvkonstruktionen.
Tabell 2.2 Lastfaktor β vid varierande grundtyp och bredd r på skyddsrummets zongräns.
Grundtyp Beskrivning
Lastfaktor β (-) 1)
r ≥ 5,0 m r < 5,0 m
1 berg, sprängbotten, sprängsten,
grus (≥ 1,0 m) 0,0 0,2
2 grus (< 1,0 m), morän, sand, silt,
fast lera (Cuk ≥ 50 kPa) 0,2 0,4
3 ej fast lera (Cuk < 50 kPa),
luftfyllt tomrum 1,0 1,0
1) För en situation där grundläggningen innehåller ett begränsat luftrum (t.ex. en
kulvert) ska golvkonstruktion inom ett avstånd om 5,0 m från luftrum belastas
med en vapenlast beräknad med dubblerat värde på β, dock inom 0,4 ≤ β ≤ 1,0.

-- 4 of 19 --

Dimensioneringslösning
5 (19)
D02-103
2025-12-15
2.3 Raslast
2.3.1 Grundvärde
Raslasten qras är en vertikal last som ska antas verka mot skyddsrumstaket eller takplatta vid för-
stärkt utrymningsväg. I en given punkt beräknas raslasten som
( 	)
2
max , ,50 kN/m	ras b n n	q q q	

	= 	
(2)
där
( 	)	,1 max	min ,	b b	q q q	=	
(3)
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
(4)
avser raslast från en näraliggande byggnad. Vidare gäller att qras ≥ 50 kPa, vilket innebär att ras-
lasten inte kan understiga vapenlastens minsta tillåtna värde.
För ovanliggande byggnad beräknas raslasten som
( 	)	
,1 0, 7 1	b t b	q h m	=  + 	
(5)
där ht är vertikalt avstånd [m] mellan skyddsrummets överkant och byggnadens tyngdpunkt och mb
är rasmassa hos ovanliggande byggnad. Samma princip används även för raslast
( 	)	
,1 0, 7 1	n t n	q h m	=  + 	
(6)
från näraliggande byggnad om dess rasmassa mn är känd. Båda dessa begränsas dock av den maxi-
mala raslasten
3
max 1,5 3, 0	n n	q h h	=  + 	
(7)
som fås när mn är okänd. För samband i ekvation (5) till (7) definieras höjder ht och hn enligt
Figur 2.2 medan mb och mn är rasmassor (summan av permanent och variabel last) uttryckta i
enheten [kN/m2] hos ovanliggande respektive näraliggande byggnad. För hus med en jämn mass-
fördelning, så som normala bostads- och kontorshus, godtas att ansätta ht = hn / 2. Raslastens storlek
kan variera för olika delar av ett och samma skyddsrum.
Den första termen i ekvation (5) och (6) beskriver det dynamiska lasttillskott som erhålls av de ned-
fallande rasmassorna medan den andra termen motsvarar rasmassornas statiska lastbidrag. Ekva-
tion (7) är i sin tur härledd från ekvation (6) med antagande om att ht = hn / 2 och att rasmassans
tunghet uppgår till mn’ = mn / hn = 3,0 kN/m3.

-- 5 of 19 --

Dimensioneringslösning
6 (19)
D02-103
2025-12-15
< 45°
45°
Skyddsrum
hn
hn
hn
ht
Figur 2.2 Definition av byggnaders höjd ovan skyddsrummet.
2.3.2 Reducerad raslast av kupolverkan
Raslast qras, beräknad enligt avsnitt 2.3.1 kan reduceras med hänsyn till kupolverkan. Den reduce-
rade raslasten beräknas som
( 	)	
, max ,50	r red ras ras	q q	

	= 	
(8)
där αras är en reduktionsfaktor beräknad som
3 1, 0	ras
b
h

	= 	
(9)
Här är b avståndet mellan centrumlinjer hos skyddsrummets bärande enheter och h är byggnadshöjd
(räknat från takplattans överkant) hos byggnad som gett upphov till raslast qras. En bärande enhet
kan utgöras av såväl bärande väggar (både ytter- och innerväggar) som invändiga balkar/pelare.
Värdet på raslast qras kan variera mot olika delar av skyddsrummet, till exempel på grund av olika
avstånd till en eller flera näraliggande byggnader. Det godtas dock att samma reduktionsfaktor αras
används, oavsett värde på qras, för en given kombination av b och h.

-- 6 of 19 --

Dimensioneringslösning
7 (19)
D02-103
2025-12-15
3 Beräkningsexempel
3.1 Förutsättningar
I detta beräkningsexempel utgås från ett skyddsrum i Karlstad med en bostadsbyggnad på fem
våningar placerade ovanpå skyddsrummet, där varje våning har en höjd hvån = 3,2 m. Två skydds-
rum med olika geometri enligt D01-102 med en väggtjocklek tv,y = 0,35 m studeras, se Figur 3.1 för
beteckningar och utformning:
• Skyddsrum A: (rektangulär form, fall R4 enligt D01-102)
o lA,1 = 13,5 m, lA,2 = 8,0 m
o AV,A = 15,5 m2, AS,A = 108,0 m2
• Skyddsrum B: (L-form, fall L1 enligt D01-102)
o lB,1 = 10,0 m, lB,2 = 8,0 m, lB,3 = 6,0 m, lB,4 = 4,7 m
o AV,B = 16,4 m2, AS,B = 108,2 m2
Skydd
1 p
1 p
lA,12
lA
lA,1
lA,2
Skyddsrum A
lB,1
lB,2
lB,3
lB,4
Skyddsrum B
lA,1 = 13,5 m
lA,2 = 8,0 m
lB,1 = 10
lB,2 = 8,
lB,3 = 6,
lB,4 = 4,
tv,y
tv,y 	tv,y
tv,y
Figur 3.1 Geometrisk utformning hos studerade skyddsrum.
Skyddsrummen har liknande nettoarea AS,A =108,0 m2 samt AS,B = 108,2 m2, när eventuella inner-
väggar och pelare inte beaktats samt uppfyller en bredd r ≥ 5,0 m för skyddsrummets zongräns. På
grund av olika utformning skiljer sig dock begränsningsväggarnas area något med AV,A = 15,5 m2
för skyddsrum A och AV,B = 16,4 m2 för skyddsrum B.

-- 7 of 19 --

Dimensioneringslösning
8 (19)
D02-103
2025-12-15
Följande statiska laster antas verka i ovanliggande byggnad, se Figur 3.2 för schematisk bild av
byggnad:
• Bjälklag och tak: gb = 5,0 kN/m2
• Installationer: gin = 0,5 kN/m2
• Innerväggar: gv,i = 0,5 kN/m2
• Fasad: gfasad = 2,5 kN/m2
• Nyttig last: qn = 2,0 kN/m2
• Snölast: qs = 2,0 kN/m2
Skyddsrum
hvån
hvån
hvån
hvån
hvån
installationer,
innerväggar
nyttig last
tak
bjälklag
fasad
snölast
Figur 3.2 Schematisk bild av byggnad placerad ovanför skyddsrum.

-- 8 of 19 --

Dimensioneringslösning
9 (19)
D02-103
2025-12-15
3.2 Lastkombinering
Total last mot skyddsrum bestäms via lastkombinering enligt Eurokod 0. Med detta kan den
dimensionerande lasten Qd skrivas som
, 1,1 , 2, ,
1 1
d k j d k i i k i
j i
Q G A Q Q	

	
 
= + +  + 	 	
(10)
där Gk är karakteristisk last av egentyngd, Ad är dimensionerande olyckslast (vapen- eller raslast
enligt SR) och Qk är karakteristisk variabel last, varvid ψ1 5 och ψ2 är lastfaktorer. Denna
lastkombinering används även för att bedöma den totala rasmassan vid beräkning av raslast från
ovanliggande eller näraliggande byggnad.
För här studerad byggnad antas våningsplan ovanför skyddsrummet bestå av bostäder (kategori A)
med ψ1 = 0,5 och ψ2 = 0,3. För snölast gäller att ψ2 = 0,2.
3.3 Vapenlast
3.3.1 Grundvärde
För här studerade skyddsrum uppgår zongränsens bredd till r ≥ 5,0 m, vilket via Tabell 2.1, ger att
qvapen,1 = 50 kN/m2 och qvapen,2 = 8 kN/m2. Vapenlasten har samma värde mot skyddsrummets väg-
gar och tak. För last mot golv finns dock möjlighet att reducera vapenlasten, se avsnitt 3.3.2, och för
en gemensam vägg eller bjälklag mellan två olika skyddsrum ska vapenlasten dubblas över den
aktuella konstruktionsdelen, se schematisk illustrationer i Figur 3.3 och Figur 3.4.
Om zongränsen har en bredd r < 5,0 m så ökar vapenlasten. Om exempelvis r = 4,6 m fås, via linjär
interpolation av värden i Tabell 2.1, att vapenlasten i stället skulle bli qvapen,1 = 58 kN/m2 och
qvapen,2 = 9,6 kN/m2. En sådan ökning av vapenlasten påverkar även andra områden där denna
används, till exempel storleken för last på infästningar.
5 Vapenlast- och raslast kan betraktas som kända olyckslaster och därför används lastfaktor ψ1,1 för den dominerande
variabla lasten Qk,1.

-- 9 of 19 --

Dimensioneringslösning
10 (19)
D02-103
2025-12-15
Skyddsrum A
Skyddsrum B
Skyddsrum A 	Skyddsrum B
2·qvapen,1,A
Skyddsrum B
2·qvapen,1,B
(a)
Skyddsrum A 	Skyddsrum B
Skydds-
rum A
2·qvapen,1,A
2·qvapen,1,B
(b)
Figur 3.3 Schematisk illustration (sektionsvy) av dubblerad vapenlast mot (a) gemensamt
bjälklag, (b) gemensam vägg. Storleken på qvapen,1 beror på zongränsens bredd r
enligt Tabell 2.2 för respektive skyddsrum.	S
Skyddsrum A
Skydd
2·qvapen,1,B
qvapen,1,B
2·qvapen,1,A
qvapen,1,B
qvapen,1,A
(a) 	(b)
Skydds-
rum B
Skydds-
rum B
Skyddsrum A
Figur 3.4 Schematisk illustration (planvy) av vapenlast mot skyddsrum vid (a) två enskilda
skyddsrum, (b) två skyddsrum med gemensam vägg. Storleken på qvapen,1 beror på
zongränsens bredd r enligt Tabell 2.2 för respektive skyddsrum.

-- 10 of 19 --

Dimensioneringslösning
11 (19)
D02-103
2025-12-15
3.3.2 Reducerad vapenlast mot golv
Hur stor reduktion som kan fås på vapenlasten beror på vilken grundtyp som skyddsrummet är
grundlagt på, se ekvation (1) och Tabell 2.2. Om grundtypen varierar inom 5,0 m i djup eller sidled
från golvplattan ska den ogynnsammaste typen användas. Det godtas dock även att olika lastvärden
används för olika delar av golvplattan. I Figur 3.5 illustreras några schematiska exempel på olika
situationer för ett fall där zongränsens bredd r ≥ 5,0 m och som kort kommenteras nedan:
• Allmänt: Här utgås från en situation där skyddsrummet är grundlagt på berg och/eller
morän. Berg motsvarar grundtyp 1 → β = 0,0 och morän grundtyp 2 → β = 0,2.
• Figur 3.5a: Skyddsrum är grundlagd på morän som sträcker sig till minst 5,0 m djup och
5,0 m åt sidorna räknat från skyddsrummet. Ett konstant värde β = 0,2 används därför över
hela golvets längd.
• Figur 3.5b: En situation motsvarande Figur 3.5a men med en kulvert placerad under
skyddsrummet på ett djup mindre än 5,0 m. Inom sträckan 5,0 m åt sidorna dubblas värdet
på β, vilket ger att yttersta vänstra delen har β = 0,2 medan resterande del får β = 20,2 = 0,4.
• Figur 3.5c: Skyddsrum är grundlagd på både berg och morän. Den mest ogynnsamma
grundtypen ska antas, varför β = 0,2 inom 5,0 m från moränen och β = 0,0 för resterande del.
• Figur 3.5d: Skyddsrum är enbart grundlagd på berg men med morän inom 5,0 m i sidled.
Den mest ogynnsamma grundtypen ska antas, varför β = 0,2 inom 5,0 m från moränen och
β = 0,0 för resterande del.
Skyddsrum
Morän 	> 5,0 m	Morän
Skyddsrum
Morän
β = 0,2
Morän	Berg
5,0 m
β = 0,2	β = 0,0
Skyddsrum
Morän
≤ 5,0 m
Morän
Skyddsrum
Morän
Morän
Berg
5,0 m
β = 0,2	β = 0,0
5,0 m
β = 0,2 	β = 0,4
kulvert
(a) 	(b)
(c) 	(d)
> 5,0 m
Figur 3.5 Schematisk illustration för bestämning av lastfaktor β vid bestämning av reducerad
vapenlast mot golv när skyddsrum är grundlagd på (a) morän, (b) morän med en
grunt liggande kulvert (c) berg och morän, (b) berg men med morän inom 5,0 m från
skyddsrum. Berg motsvarar grundtyp 1 och morän grundtyp 2.

-- 11 of 19 --

Dimensioneringslösning
12 (19)
D02-103
2025-12-15
3.4 Raslast
3.4.1 Grundvärde
För att beräkna raslasten enligt avsnitt 2.2.1 behöver avståndet ht, mellan ovanliggande byggnads
tyngdpunkt och ovankant skyddsrumstak, samt total rasmassa mb beräknas. Byggnaden har n = 5
våningar, vardera med en våningshöjd på hvån = 3,2 m. Total byggnadshöjd ovanför skyddsrummet
uppgår därmed till
5 3, 2 16,0 m	n vån	h n h	=  =  =	
(11)
varvid byggnadens tyngdpunkt ovan skyddsrum förenklat kan beräknas som
16, 0 8, 0 m
2 2
n
t
h
h = = =	
(12)
I Tabell 3.1 visas en sammanställning av aktuella laster för beräkning av total rasmassa, vilken upp-
går till mb = 38,3 kN/m2. Detta motsvarar en rasmassa/volymenhet på
3	38,3
' 2, 4 kN/m
16, 0
b
b
n
m
m h
= = =	
(13)
vilket kan jämföras med det värde på m’b = 3,0 kN/m2 som används för att beräkna maximal raslast
qmax i ekvation (7).
Insatt i ekvation (5) kan raslasten från ovanliggande byggnad nu beräknas som
( 	) 	( 	)
2
,1 0, 7 1 0, 7 8, 0 1 38,3 114 kN/m	b t b	q h m	=  +  =  +  =	
(14)
En kontroll görs även mot maximalt värde enligt ekvation (7), vilket ger
3 3 2
max 1,5 3, 0 1,5 16, 0 3, 0 16, 0 144 kN/m	n n	q h h	=  +  =  +  =	
(15)
Raslasten qb från ovanliggande byggnad fås enligt ekvation (3) som
( 	)
2
,1 max	min , ... 114 kN/m	b b	q q q	= = =	
(16)
varvid raslasten slutligen kan bestämmas via ekvation (2) till
( 	)
2 2
max , ,50 kN/m ... 114 kN/m	ras b n n	q q q	

	=  = =	
(17)

-- 12 of 19 --

Dimensioneringslösning
13 (19)
D02-103
2025-12-15
Tabell 3.1 Sammanställning av laster för beräkning av total rasmassa mb.
Typ av last Beskrivning Beteckning qk ψ qd n nqd
[kN/m2] [-] [kN/m2] [st] [kN/m2]
Permanent Bjälklag och tak gb 5,0 1,0 5,0 5 25,0
Permanent Installation med mera gin 0,5 1,0 0,5 5 2,5
Permanent Innervägg gv,i 0,5 1,0 0,5 5 2 2,5
Permanent Yttervägg 1) gv,y 0,9 1,0 0,9 5 4,5
Variabel Nyttig last, en våning qn,1 2,0 0,5 1,0 1 1,0
Variabel Nyttig last, övriga vån qn,2 2,0 0,3 0,6 4 2) 2,4
Variabel Snö qs 2,0 0,2 0,4 1 0,4
Total Rasmassa mb 38,3
1) gv,y = (gfasad  Afasad) / (AS+AV). Med en tunghet på 2,5 kPa hos fasad och en längd lfasad = l1+2tv,y fås att
gv,y ≈ 0,9 kPa och 0,7 kPa för skyddsrum A respektive B. Här används dock för enkelhetens skull det
maximala värdet, gv,y = 0,9 kPa, för båda skyddsrummen.
2) Det kan argumenteras för att last av innervägg och nyttig last på våningen direkt ovan skyddsrum inte
ska medräknas i rasmassan mb utan i stället beaktas i en lastkombinering. Resultatet av ett sådant syn-
sätt blir att den dimensionerande lasten med hänsyn till raslast minskar något. I och med att förenklad
metod ht = hn / 2 resulterar i en underskattning av rasmassans tyngdpunkt har det här bedömts vara
rimligt att använda ett något mer konservativt synsätt för beräkning av mb. Skillnaden blir liten.
3.4.2 Detaljerad beräkning av rasmassornas tyngdpunkt ht
I beräkning av raslast i avsnitt 3.4.1 har ht = hn / 2 = 8,0 m använts, se ekvation (12). Detta uttryck
ger ett approximativt läge på tyngdpunktens placering i ovanliggande byggnad som godtas i SR.
Det är dock även möjligt att bestämma tyngdpunktens placering mer noggrant genom att beakta
massbidrag och dess läge för respektive del enligt följande uttryck:
( 	)	
i i
i
t
i
i
q z
h q

=


(18)
Här är qi och zi rasmassa respektive läge ovanför skyddsrumstak för del i. Med utgångspunkt från
Tabell 3.1 kan tyngdpunktens läge för olika lastdelar beräknas via antaganden enligt nedan:
• Bjälklaget är 0,3 m tjockt och dess tyngdpunkt är placerad 3,2-0,3/2 = 3,05 m ovan överkant
hos underliggande bjälklag. Tyngdpunkten för samtliga bjälklag fås då som
( 	)	5, 0 3, 05 6, 25 9, 45 12, 65 15,85 9, 45 m
5 5, 0
b	z  + + + +
= =

(19)

-- 13 of 19 --

Dimensioneringslösning
14 (19)
D02-103
2025-12-15
• Tyngdpunkt för installationen är placerad 0,2 m under underkant bjälklag, vilket ger en
placering 3,2-0,3-0,2 = 2,7 m ovan överkant hos underliggande bjälklag. Tyngdpunkten för
samtliga installationer fås då som
( 	)	0,5 2, 7 5,9 9,1 12,3 15,5 9,1 m
5 0,5
in	z  + + + +
= =

(20)
• Tyngdpunkt för innerväggar är placerade (3,2-0,3) / 2 = 1,45 m ovan 0,1 m under underkant
bjälklag. Tyngdpunkten för samtliga installationer fås då som
( 	)
,
0,5 1, 45 4, 65 7,85 11, 05 14, 25 7,85 m
5 0,5v i	z  + + + +
= =

(21)
• Tyngdpunkt för ytterväggar är placerade på halva byggnadshöjden
,
5 3, 2 8, 0 m
2
v y	z 
= =	
(22)
• Nyttig last antas ha sin tyngdpunkt 1,0 m ovan överkant bjälklag. Tyngdpunkten för den
sammanlagda nyttiga lasten fås då som
( 	)	
1, 0 1, 0 0, 6 4, 2 7, 4 10, 6 13,8 6, 65 m
1 1, 0 4 0, 6n	z  +  + + +
= =
 + 
(23)
• Snö antas ha sin tyngdpunkt 0,5 m ovan överkant översta bjälklaget.
5 3, 2 0,5 16,5 m	s	z =  + =	
(24)
Med dessa placeringar av tyngdpunkten och lastvärden enligt Tabell 3.1 kan slutligen rasmassornas
läge beräknas enligt ekvation (18) som
( 	)
( 	)
25,0 9, 45 2,5 9,1 2,5 7,85 4,5 8, 0 1, 0 2, 4 6, 65 0, 4 16,5 9,0 m
25, 0 2,5 2,5 4,5 1, 0 2, 4 0, 4
t	h  +  +  +  + +  + 
= =
+ + + + + +
(25)
Av denna beräkning framgår att rasmassornas tyngdpunkt är placerad 9,0 m ovanför skyddsrum-
mets tak, vilket motsvarar en kvot 9,0 / 16,0 = 0,56 av total byggnadshöjd hn. Detta värde kan jäm-
föras med den kvot 0,50 som enligt ekvation (12) ger ht = 8,0 m. För här studerat fall underskattar
således det approximativa uttrycket tyngdpunktens läge. Det godtas dock fortfarande att använda
det förenklade uttrycket för att bestämma ht, varför någon justering inte görs av här utförda beräk-
ningar.

-- 14 of 19 --

Dimensioneringslösning
15 (19)
D02-103
2025-12-15
3.4.3 Reducerad raslast av kupolverkan
Raslasten kan reduceras med hänsyn till gynnsam inverkan av kupolverkan enligt anvisningar i
avsnitt 2.3.2, se Figur 3.6 för en schematisk illustration av kupolverkan i rasmassorna som verkar
mot skyddsrummet. Lastreduktionens storlek beror på förhållandet mellan takplattans minsta spänn-
vidd b och byggnadshöjd h ovan skyddsrumstak enligt ekvation (9).
I Figur 3.7a visas takplattans spännvidder för studerade skyddsrum när någon justering med hänsyn
till inre bärande delar (innerväggar eller balkar/pelare) inte har gjorts. För att minska takplattans
spännvidd, och därmed möjliggöra en ytterligare reduktion av raslasten, visas i Figur 3.7b motsva-
rande situation när bärande innerväggar har placerats i skyddsrummet. Det ska noteras att det enbart
är lasten mot själva takplattan som reduceras på det här sättet – lasten som verkar mot skydds-
rummets ytter- och innerväggar utgörs av den oreducerade raslasten qras = 114 kN/m2.
Vid beräkning av skyddsrummets storlek i D01-102 finns det utrymme för en övrig area, som upp-
tas av exempelvis innerväggar, på Aövr,A = 108,0-105,5 = 2,5 m2 i skyddsrum A och Aövr,B = 108,2-
105,5 = 2,7 m2 i skyddsrum B. Vid val av innerväggarnas storlek behöver detta därför beaktas:
• Skyddsrum A: lv,i = lA,1 = 13,5 m → tv,i ≤ 2,5 / 13,5 = 0,185 m
• Skyddsrum B: lv,i = lB,2 + lB,3 = 8,0+6,0 = 14,0 m → tv,i ≤ 2,7 / 14,0 = 0,192 m
För fortsatta beräkningar används en innervägg med tjocklek tv,i = 0,16 m för både skyddsrum A
och B. Denna tjocklek uppfyller även de krav som ställs i SR på en minsta väggtjocklek om 0,15 m
för innerväggar.
(a)
l
rasmassor
s
rasmassor
Skyddsrum Skydds-
rum
balk
kupolverkan
s 	s
pelare
(b)
Figur 3.6 Schematisk illustration av kupolverkan mellan bärande enheter när dessa utgörs av
(a) skyddsrummets bärande ytterväggar och (b) balkar/pelare och bärande ytter-
väggar.

-- 15 of 19 --

Dimensioneringslösning
16 (19)
D02-103
2025-12-15
Skyddsrum A
Skyddsrum B
lA,1 = 13,5 m
lA,2 = 8,0 m
bA,a
a
bB,a
a
bB,c
b
c
bB,b
(a)
Skyddsrum A
Skyddsrum B
lA,1 = 13,5 m
lA,2 = 8,0 m
bA,b
a
bA,a
b
innervägg
innervägg
a 	b
c
bB,a 	bB,b
bB,c
(b)
Figur 3.7 Spännvidder för kupolverkan vid situation (a) utan bärande innerväggar, (b) med
bärande innerväggar.
Gränsen för när en reducerad raslast kan tillgodoräknas, dvs. αras < 1,0, erhålls via ekvation (9) när
16, 0 5,33 m
3 3
n	h
b  = =	
(26)
För skyddsrum utan bärande innerväggar enligt Figur 3.7a fås följande spännvidder:
• Skyddsrum A: bA,a = 8,35 m
• Skyddsrum B: bB,a = 8,35 m, bB,b = 13,85 m, bB,c = 6,35 m
Samtliga dessa är längre än b = 5,33 m, vilket innebär att det inte erhålls någon reduktion av ras-
lasten för dessa fall. I skyddsrum med bärande innerväggar enligt Figur 3.7b fås dock en reducerad
raslast enligt Tabell 3.2. I skyddsrum A har innerväggen placerats i rummets mitt varför bA,a = bA,b. I
skyddsrum B placeras dock innerväggar i linje med insida yttervägg, vilket medför att en skillnad
erhålls mellan spännvidderna bB,a till bB,c. Placering av innervägg mellan utrymme b och c medför
även att den kortaste spännvidden ändrar riktning jämför med fall utan innervägg enligt Figur 3.7a.

-- 16 of 19 --

Dimensioneringslösning
17 (19)
D02-103
2025-12-15
Tabell 3.2 Sammanställning av spännvidd och reducerad raslast för skyddsrum när bärande
innerväggar används enligt Figur 3.7b och raslasten qras = 114 kN/m2.
Skyddsrum Del lfri t1 t2 b hn qras qr,red
[m] [m] [m] [m] [m] [-] [kPa]
A
a 3,92 0,35 0,16 4,18 16,0 0,78 89
b 3,92 0,35 0,16 4,18 16,0 0,78 89
B
a 3,84 0,35 0,16 4,10 16,0 0,77 88
b 6,00 0,35 0,16 6,26 16,0 1,00 114
c 4,54 0,35 0,16 4,80 16,0 0,90 103
lfri = fri längd mellan takplattans upplag, t1 och t2 = väggtjocklekar, b = takplattans spännvidd,
hn = byggnadshöjd ovan skyddsrumstak, αras = reduktionsfaktor enligt ekvation (9), qr,red = redu-
cerad raslast mot tak enligt ekvation (8).
3.4.4 Pelardäck samt kombination med pelare och balkar
Som alternativ till bärande innerväggar kan även pelare användas för att reducera aktuella spänn-
vidder i takplattan vid beräkning av resulterande moment och snittkrafter. Det är dock inte tillräck-
ligt att utforma takplattan som ett pelardäck för att kunna nyttja gynnsam inverkan av kupolverkan.
För detta krävs i stället att pelarna kombineras med balkar så att något som motsvarar ett
”linjeupplag” erhålls mellan pelarna, se schematisk illustration i Figur 3.8:
• Pelardäck: I Figur 3.8a fås en reducerad raslast qr,red baserad på spännvidder som mäter
mellan skyddsrummets ytterväggar. Last mot takplatta och pelare beräknas med reducerad
raslast qr,red medan last mot väggar beräknas för raslast qras. För här aktuell geometri fås
dock att b > 5,33 m för samtliga fall, vilket innebär att αras = 1,0 och därmed att
qr,red = qras = 114 kN/m2.
• Pelare och balkar: I Figur 3.8b fås en reducerad raslast qr,red baserad på spännvidder som
mäter mellan skyddsrummets ytterväggar och balkar/pelare. Last mot takplatta beräknas
med reducerad raslast qr,red medan last mot väggar och balk/pelare beräknas för raslast qras.

-- 17 of 19 --

Dimensioneringslösning
18 (19)
D02-103
2025-12-15
Skyddsrum A
Skyddsrum B
lA,1 = 13,5 m
lA,2 = 8,0 m
bA,a
a
pelare
bB,a
a
bB,c
b
c
bB,b
pelare
(a)
Skyddsrum A
Skyddsrum B
lA,1 = 13,5 m
lA,2 = 8,0 m
bA,b
a
balk +
pelare bB,a
a
bB,c
b
c
bB,b
balk +
pelare
bA,a
b
(b)
Figur 3.8 Spännvidder för kupolverkan vid situation (a) med pelare men utan balk (pelardäck),
(b) med en kombination av balk och pelare.

-- 18 of 19 --

Dimensioneringslösning
19 (19)
D02-103
2025-12-15
4 Revideringslista
Datum Avsnitt Revidering
2025-12-15 D02-103 Första version

-- 19 of 19 --