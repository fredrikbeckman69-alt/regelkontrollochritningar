---
title: "B03 101   Strukturrespons Vid Impulsbelastning 140416"
category: "b03.-berakningsanvisning-for-strukturrespons"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b03.-berakningsanvisning-for-strukturrespons/b03-101---strukturrespons-vid-impulsbelastning_140416.pdf"
fileType: "PDF"
keywords: ["beräkning","kontroll","respons","last","balk","tabell","plastisk","figur"]
summary: "Beräkning av impulsbelastad konstruktion 1 (15) B03-101 2014-04-16 B03-101 Beräkningsanvisning för strukturrespons Strukturrespons vid impulsbelastning Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren. 1 Orientering 1 1.1 Samlingsdo..."
---

Beräkning av impulsbelastad konstruktion
1 (15)
B03-101
2014-04-16
B03-101 Beräkningsanvisning för strukturrespons
Strukturrespons vid impulsbelastning
Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren.
1 Orientering 1
1.1 Samlingsdokument 1
1.2 Om detta dokument 1
2 Förutsättningar 2
3 Enfrihetsgradssystem vid karakteristisk last 4
4 Enfrihetsgradssystem vid förfinad beräkning 6
4.1 Koncept 6
4.2 Elastisk respons 7
4.3 Plastisk respons 9
4.4 Elastoplastisk respons 9
5 Transformation av balk till ett enfrihetsgradssystem 10
5.1 Koncept 10
5.2 Transformationsfaktorer 12
6 Respons för balk 14
1 Orientering
1.1 Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 Om detta dokument
I detta dokument behandlas hur responsen hos en dynamiskt belastad konstruktion kan bestämmas.
Presenterat resonemang utgår från belastning av ett enfrihetsgradssystem (single-degree-of-freedom
system), vilket förkortat ofta benämns som SDOF efter sin engelska förkortning. Teoretisk
bakgrund för här redovisade samband behandlas i Johansson och Laine (2012c).

-- 1 of 15 --

Beräkning av impulsbelastad konstruktion
2 (15)
B03-101
2014-04-16
2 Förutsättningar
Ett odämpat dynamiskt enfrihetsgradssystem visas i Figur 2.1 och består av en massa m som utsätts
för en yttre tidsberoende last F(t). Som mothåll till denna last finns ett inre statiskt motstånd R(u).
Detta inre motstånd beskrivs här utgående från tre typer av responser: elastiskt, plastiskt och elasto-
plastiskt beteende, se Figur 2.2.
F(t)
R(u)
m u
Figur 2.1 Definition av ett odämpat enfrihetsgradssystem, SDOF.
u
R
Wi
uel
k
u
R
R
Wi
upl
u
R
R
Wi
utot	uel
utot = uel + upl
k
styvhet k vid
avlastning
(a) (b) (c)
Figur 2.2 Strukturell respons med antagande om: (a) linjärelastisk respons, (b) plastisk
respons, (c) elastoplastisk respons.
I Figur 2.3 illustreras två dynamiska ytterlighetsfall – ideal impulslast, med karakteristisk impulslast
Ik, samt så kallad trycklast med karakteristisk trycklast Fk. Ett godtycklig last-tidssamband F(t)
kommer att befinna sig någonstans mellan dessa båda fall. Förenklat kan sägas att en last med kort
varaktighet går mot ett fall motsvarande det för karakteristisk impuls och en last med lång
varaktighet går mot ett fall med karakteristisk trycklast. Det ska dock poängteras att vad som menas
med kort respektive lång varaktighet beror på den belastade strukturens egenskaper.

-- 2 of 15 --

Beräkning av impulsbelastad konstruktion
3 (15)
B03-101
2014-04-16
Last, F
Tid, t
Ik
ta
Last, F
Tid, t
ta
Fk
(a) (b)
Figur 2.3 Illustration av dynamiska ytterlighetsfall som börjar verka vid tiden ta: (a) karak-
teristisk impuls Ik, (b) karakteristisk trycklast Fk.

-- 3 of 15 --

Beräkning av impulsbelastad konstruktion
4 (15)
B03-101
2014-04-16
3 Enfrihetsgradssystem vid karakteristisk last
I Tabell 3.1 och Tabell 3.2 sammanställs uttryck för att beräkna yttre arbete, inre arbete,
förskjutning samt ekvivalent statisk last för ett enfrihetsgradssystem belastat med en karakteristisk
impuls Ik respektive en karakteristisk trycklast Fk enligt Figur 2.3. Uttryck är framtagna för
linjärelastisk, plastisk eller elastoplastisk respons.
Vid omvandling av en dynamisk last till en ekvivalent statisk last är det viktigt att fortfarande
komma ihåg att den bakomliggande lasten är dynamisk. Detta innebär att en maximal förskjutning i
en given riktning även kommer att resultera i en förskjutning i motsatt riktning när belastad
konstruktion svänger tillbaka. Dvs. vid användande av den framtagna ekvivalenta statiska lasten bör
denna hanteras som två olika laster – en statisk last som verkar i två motsatta riktningar.
Tabell 3.1 Uttryck för att beräkna yttre arbete, inre arbete, förskjutning samt ekvivalent statisk
last för ett enfrihetsgradssystem med linjärelastisk, plastisk eller elastoplastisk
respons som är belastat med en karakteristisk impuls Ik enligt Figur 2.3a.
Begrepp Elastisk respons
u
F, R
uel
k
Wi,el
Wy
R
Plastisk respons
u
F, R
upl
Wi,pl
Wy
R
Elastoplastisk respons
u
F, R
utot
Wi,ep
Wy
R
uel,1
utot = uel,1 + upl,1
Yttre arbete m
I
E	W k
k	y 2
2
	 m
I
E	W k
k	y 2
2
	 m
I
E	W k
k	y 2
2
	
Inre arbete 2
2
,
el
el	i
ku
W  pl	pl	i Ru	W 	, 




 	 1,
1,
, 2 pl
el
ep	i u
u
R	W
Total
förskjutning el	tot u	u  pl	tot u	u  2
1,	el
pl	tot
u
u	u 	
Elastisk
förskjutning	
	m
I
u k
el  – k
R
uel 	1,
Plastisk
förskjutning – mR
I
u k
pl 2
2
 2
1,
1,
el
pl	pl
u
u	u 	
Ekvivalent
statisk last
	k	el I	Q  R	Qpl  R	Qep 
Vinkel-
frekvens m
k
	
 – –

-- 4 of 15 --

Beräkning av impulsbelastad konstruktion
5 (15)
B03-101
2014-04-16
Tabell 3.2 Uttryck för att beräkna yttre arbete, inre arbete, förskjutning samt ekvivalent statisk
last för ett enfrihetsgradssystem med linjärelastisk, plastisk eller elastoplastisk
respons som är belastat med en karakteristisk trycklast Fk enligt Figur 2.3b.
Begrepp Elastisk respons
u
F, R
Wi
uel
k
Wy
Fk
R
Plastisk respons
u
F, R
upl
Wi,ep	
Wy
R
Fk
Elastoplastisk respons
u
F, R
utot
Wi,ep	
Wy
R
uel,1
utot = uel,1 + upl,1
Fk
k
Yttre arbete u	F	W k	y  u	F	W k	y  u	F	W k	y 
Inre arbete 2
2
,
el
el	i
ku
W  pl	pl	i Ru	W 	, 




 	 1,
1,
, 2 pl
el
ep	i u
u
R	W
Total
förskjutning el	tot u	u  pl	tot u	u   	 R
R	F
F
R
u
F	R
R
R
F	u
u
k
k	el
k
k	el
tot









	
		



,
2
,
2
2
,
1,
Elastisk
förskjutning k
F
u k
el
2
 – k
R
uel 	1,
Plastisk
förskjutning – 


	

 R	F
R	F
u
k
k
pl ,
,	0
 	 1,	1, 2
2 el
k
k
pl u
F	R
R	F
u 



Ekvivalent
statisk last k	el F	Q 2	 – 


	

 R	F
R	F	R
Q
k
k
ep ,
,

-- 5 of 15 --

Beräkning av impulsbelastad konstruktion
6 (15)
B03-101
2014-04-16
4 Enfrihetsgradssystem vid förfinad beräkning
4.1 Koncept
I avsnitt 3 ges uttryck för hur maximal förskjutning kan bestämmas vid belastning av en
karakteristisk impulslast respektive en karakteristisk trycklast. Dessa uttryck fyller ett viktigt syfte i
att de är enkla att använda samt ger en snabb och konservativ bedömning av den aktuella responsen.
För en godtycklig dynamisk last med impuls I1 resulterar de dock i en förskjutning som är en faktor
δ för stor om de används i kombination med det konservativa antagandet att Ik = I1. Det är därför av
intresse att även kunna utföra en förfinad, mer exakt beräkning, för en sådan last. Detta är möjligt
genom att introducera en korrektionsfaktor
k
I I
I1
	
 (4.1)
med vilken impulsen I1 kan reduceras för att ta fram en representativ karakteristisk impulslast
I
k
I
I

1
 (4.2)
för vilken förskjutningen blir korrekt. Storleken på faktorn γI beror på aktuellt last-tidssamband
samt responsen i det system som studeras. Här utgås från tre olika last-tidssamband, med form
enligt ekvation (4.3) och illustrerade i Figur 4.1, vid elastisk eller plastisk respons.
 
n
t
t
F	t	F 




 	
1
1 1 , n = 0, 1, 2 (4.3)
t
F
t1
F1
I1
n = 0
t
F
t1
F1
I1
n = 1
t
F
t1
F1
I1
n = 2
(a) (b) (c)
Figur 4.1 Last-tidssamband där samband för förfinad beräkning tagits fram: (a) rektangulär
last, (b) triangulär last, (c) kvadratiskt avtagande last. Faktorn n anger hur lasten
avtar med tiden enligt ekvation (4.3).

-- 6 of 15 --

Beräkning av impulsbelastad konstruktion
7 (15)
B03-101
2014-04-16
4.2 Elastisk respons
För ett system med elastisk respons fås ett fel, en ökning av förskjutningen, med en faktor
1		 I	el	

	 (4.4)
där γI = γI(T / t1) definieras i ekvation (4.1) och beror på kvoten mellan systemets periodtid T och
lastens varaktighet t1 enligt Tabell 4.1.
Tabell 4.1 Sammanställning av samband mellan felet δel, korrektionsfaktorn
I och kvoten T / t1
för ett system med elastisk respons och last-tidssamband enligt Figur 4.1.
δel	
I T / t1 T / t1 T / t1
[%] [-] n = 0 n = 1 n = 2
1 1,01 12,89 10,60 8,84
2 1,02 9,22 7,45 6,13
3 1,03 7,51 6,10 5,00
4 1,04 6,52 5,33 4,35
5 1,05 5,86 4,75 3,90
10 1,10 4,20 3,41 2,78
15 1,15 3,48 2,82 2,29
20 1,20 3,06 2,47 1,98
25 1,25 2,78 2,23 1,77
50 1,50 2,10 1,56 1,18
75 1,75 1,80 1,23 0,91
100 2,00 1,57 1,02 0,74
150 2,50 1,26 0,76 0,54
200 3,00 1,05 0,61 0,43
300 4,00 0,79 0,44 0,30
400 5,00 0,63 0,34 0,23
600 7,00 0,45 0,24 0,16
900 10,00 0,31 0,16 0,11
Detta innebär exempelvis att om n = 1 och kvoten T / t1 = 4,75 så är felet δel = 5 %, vilket innebär
att förskjutningen uel kommer att överskattas med 5 % om impulsen Ik = I1 approximativt används
som indata i uttryck enligt Tabell 3.1. Genom att istället använda Ik = I1 /
I, där
I = 1,05, fås dock
en korrekt förskjutning uel.

-- 7 of 15 --

Beräkning av impulsbelastad konstruktion
8 (15)
B03-101
2014-04-16
Sambanden i Tabell 4.1 är anpassade för en dynamisk last som kan liknas vid en karakteristisk
impulslast. Om lastens varaktighet är så lång att kvoten T / t1 blir liten är det dock mer lämpligt att
istället likna den vid en karakteristisk trycklast. Sambandet mellan ekvivalent statisk last Q och
maximallasten F1 kan tecknas som
1	F	Q 	
 (4.5)
där β ≤ 2 är en lastfaktor som beror på förhållandet mellan systemets egenperiod T och den
dynamiska lastens varaktighet t1 enligt Figur 4.2.
6.0	2.7	1.6
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
1.8
2.0
0 1 2 3 4 5 6 7 8 9 10
Lastfaktor,
b [-]
Tidskvot, T / t1 [-]
n = 0
n = 1
n = 2
Figur 4.2 Förhållande mellan lastfaktor β och tidskvot T / t1. Markeringar visar för vilka
tidskvoter som β = 1,0.

-- 8 of 15 --

Beräkning av impulsbelastad konstruktion
9 (15)
B03-101
2014-04-16
4.3 Plastisk respons
För ett system med plastisk respons fås ett fel, en ökning av förskjutningen, med en faktor
1
2 	 I	pl	

	 (4.6)
där γI = γI(γF) definieras i ekvation (4.1) och beror på kvoten
R
F
F
1
	
 (4.7)
mellan lastens maximallast F1 och systemets kapacitet R enligt Tabell 4.2.
Tabell 4.2 Sammanställning av samband mellan felet δpl och faktorerna
I och
F för ett system
med plastiskt respons och last-tidssamband enligt Figur 4.1.
δpl	
I R
F
F
1
	
 R
F
F
1
	
 R
F
F
1
	

[%] [-] n = 0 n = 1 n = 2
1 1,005 100 - -
2 1,010 52 70 77
3 1,015 35 46 52
4 1,020 27 35 39
5 1,025 21 29 32
10 1,049 11 15 17
15 1,072 7,7 10 12
20 1,095 6,0 8,0 9,0
25 1,118 5,0 6,7 7,5
50 1,225 3,0 4,0 4,5
75 1,323 2,3 3,1 3,5
100 1,414 2,0 2,7 3,0
Detta innebär exempelvis att om n = 1 och
F = 10 så blir felet δpl = 15 %, vilket innebär att
förskjutningen upl kommer att överskattas med 15 % om impulsen Ik = I1 approximativt används
som indata i uttryck enligt Tabell 3.1. Genom att istället använda Ik = I1 /
I, där
I = 1,072, fås dock
en korrekt förskjutning upl.
4.4 Elastoplastisk respons
Några motsvarande samband som de i avsnitt 4.2 och avsnitt 0 ges inte här för elastoplastisk
respons. Finns det behov av att göra en förfinad beräkning för ett sådant system rekommenderas
istället att använda central differensmetod enligt dokument B03-102.

-- 9 of 15 --

Beräkning av impulsbelastad konstruktion
10 (15)
B03-101
2014-04-16
5 Transformation av balk till ett enfrihetsgradssystem
5.1 Koncept
I avsnitt 4 har responsen hos ett impulsbelastat och tryckbelastat enfrihetsgradssystem behandlats.
För att kunna använda där presenterade uttryck på verkliga konstruktioner är det nödvändigt att
först transformera studerad konstruktion, exempelvis en balk, till ett enfrihetsgradssystem. Detta är
möjligt genom att använda så kallade transformationsfaktorer κ som väljs så att rörelseenergi samt
uträttat yttre- och inre arbete i balk och enfrihetsgradssystem förblir desamma. För detta nyttjas
antagandet att utböjningsformen hos belastad balk bibehålls oavsett lastnivå, något som gör det
möjligt att beskriva utböjningen längs hela balken genom att enbart ange förskjutningen i en punkt.
Denna punkt, den så kallade systempunkten, ges egenskaper så att dess förskjutning us motsvaras av
den i ett ekvivalent enfrihetsgradssystem, se Figur 5.1.
Omvandling av balken till ett ekvivalent enfrihetsgradssystem görs genom att i systempunkten
applicera en massa m, en dämpning c, en mothållande kraft R(u) samt en yttre last F(t). I Figur 5.1
jämförs ingående parametrar i en balk med dem för ett ekvivalent enfrihetsgradssystem.
EIb
pb(x,t)
us
mb
l
x
u = us
F(t)
R(u)
m
c( u )
Figur 5.1 Jämförelse av parametrar ingående hos balk samt i ekvivalent enfrihetsgradssystem.
Kopplingen mellan balk och ekvivalent enfrihetsgradssystem kan med antagande om linjärelastisk
respons, R(u) = ku, tecknas som
b	m m	m	
	 (5.1)
b	c c	c	
	 (5.2)
b	k k	k	
	 (5.3)
b	F F	F	
	 (5.4)
där mb, cb, kb och Fb motsvarar balkens aktuella massa, dämpning, styvhet samt yttre last och κ är
transformationsfaktorer för respektive egenskap. Därmed kan uttrycket för det dynamiska systemet
ändras från
 	t	F	ku	u	c	u	m 		 	 (5.5)
till
 	t	F	u	k	u	c	u	m b	F	b	k	b	c	b	m	

	
	
	 		 	 (5.6)

-- 10 of 15 --

Beräkning av impulsbelastad konstruktion
11 (15)
B03-101
2014-04-16
En impulslast är ett kortvarigt förlopp varvid dämpningens betydelse är liten för den resulterande
maximala förskjutningen. Det är därför vanligt att på säker sida bortse från dämpningens inverkan.
Med utgångspunkt från att dämpningen försummas kan ekvation (5.6) skrivas om som
 	t	F	u	k	u	m b	b
F
k
b
F
m 	



  (5.7)
och genom att låta
F
m
mF


  (5.8)
samt nyttja att
F	k	

	  (5.9)
så fås att den dynamiska grundekvationen för det omvandlade systemet kan uttryckas som
 	t	F	u	k	u	m b	b	b	mF 			
 (5.10)
För ett godtyckligt system kan detta istället tecknas som
  	 	t	F	u	R	u	m b	b	b	mF 			
 (5.11)
där Rb(u) beskriver balkens respons vid statisk belastning. Enda skillnaden mellan ekvation (5.5)
och ekvation (5.10) är att parametern kmF i den senare har applicerats på balkens massa mb. I
praktiken innebär detta att det enbart är balkens massa som behöver transformeras för att omvandla
balken till ett enfrihetsgradssystem medan styvhet (inre kraft) och last är samma som för balken.

-- 11 of 15 --

Beräkning av impulsbelastad konstruktion
12 (15)
B03-101
2014-04-16
5.2 Transformationsfaktorer
Grunduttryck för beräkning av
 ges i Tabell 5.1. För elastisk och plastisk respons fås olika
utböjningsformer, vilket också påverkar resulterande värden på
. I Figur 5.2 exemplifieras denna
skillnad i utböjningsform för en fritt upplagd balk utsatt för en jämnt utbredd last. Härledda
-
värden för ett antal vanliga belastningsfall ges i Tabell 5.2 och Tabell 5.3.
Tabell 5.1 Grunduttryck för beräkning av
-värden där m’(x), M(x) samt  	x	u  anger massa
per längdenhet, moment respektive krökning i snitt x.
Beskrivning Transformationsfaktor Beskrivning Uttryck
Bevarande av
rörelseenergi
   


 


l	x
x s	b
m dx
u	m
x	u	x	m
0
2
2
'
 Massa  	



l	x
x
b dx	x	m	m
0
'
Bevarande av
yttre arbete
   


 


l	x
x s	b
F dx
u	F
x	u	x	q
0
 Last  	



l	x
x
b dx	x	q	F
0
Bevarande av
inre arbete
   


 
	

l	x
x s	b
k dx
u	F
x	u	x	M
0

q
flytled
q
Figur 5.2 Utböjningsform hos en fritt upplagd balk belastad med en jämnt utbredd last när
ingående linjärelastisk respektive plastisk respons antas. Vid plastisk respons fås, via
flytledsteori, samma utböjningsform oberoende av randvillkor.

-- 12 of 15 --

Beräkning av impulsbelastad konstruktion
13 (15)
B03-101
2014-04-16
Tabell 5.2 Sammanställning av transformationsfaktorer κm, κF samt κmF för balk med vari-
erande randvillkor och belastad med punktlast. Svart punkt markerar system-
punktens läge.
Punktlast
Utböjningskurva elastiskt fall
m	
 0,486 0,371 0,445 0,236
F	
 1,000 1,000 1,000 1,000
mF	
 0,486 0,371 0,446 0,236
Utböjningskurva plastiskt fall
m	
 0,333 0,333 0,333 0,333
F	
 1,000 1,000 1,000 1,000
mF	
 0,333 0,333 0,333 0,333
Tabell 5.3 Sammanställning av transformationsfaktorer κm, κF samt κmF för balk med vari-
erande randvillkor och belastad med jämnt utbredd last. Svart punkt markerar
systempunktens läge.
Jämnt utbredd last
Utböjningskurva elastiskt fall
m	
 0,504 0,406 0,483 0,257
F	
 0,640 0,533 0,600 0,400
mF	
 0,787 0,762 0,805 0,642
Utböjningskurva plastiskt fall
m	
 0,333 0,333 0,333 0,333
F	
 0,500 0,500 0,500 0,500
mF	
 0,667 0,667 0,667 0,667

-- 13 of 15 --

Beräkning av impulsbelastad konstruktion
14 (15)
B03-101
2014-04-16
6 Respons för balk
Respons för balk baseras på information i avsnitt 3. Genom att kombinera uttryck i Tabell 3.1 med
ekvation (5.11) i avsnitt 5.1 kan uttryck enligt Tabell 6.1 tas fram. För en balk med rektangulärt
tvärsnitt enligt Figur 6.1 ges uttryck för ekvivalent statisk last samt resulterande moment i
Tabell 6.2.
Vid kapacitetskontroll gäller för elastisk och plastisk respons att qel ≤ qrd respektive att θpl ≤ θrd, där
index rd betecknar maximal kapacitet.
Tabell 6.1 Uttryck för att beräkna yttre arbete, inre arbete, förskjutning samt ekvivalent statisk
last för balk med linjärelastisk eller plastisk respons som är belastat med en
karakteristisk impuls Ik.
Begrepp Elastisk respons Plastisk respons
Yttre arbete b	mF
k
k	y m
I
E	W
	2
2
	
b	mF
k
k	y m
I
E	W
	2
2
	
Inre arbete 2
2
,
el	b
el	i
u	k
W  pl	b	pl	i u	R	W 	,
Total
förskjutning el	tot u	u  pl	tot u	u 
Elastisk
förskjutning b	b	mF
k
el m
I
u

	
 –
Plastisk
förskjutning – b	b	mF
k
pl R	m
I
u
	2
2

Vinkel-
frekvens b	mF
b
b m
k
  –
Ekvivalent
statisk last i
l	m
EI
q
b	mF
b
el 

 3

	 pl	mF
pl l
i
q

	
	 		

2
Faktor för
randvillkor b
b
k	l
EI 1
3 		
 2
l
u pl
pl



-- 14 of 15 --

Beräkning av impulsbelastad konstruktion
15 (15)
B03-101
2014-04-16
q
l
Ms,1 Ms,2
E
h
b
densitet, ρ
Figur 6.1 Balk för framtagning av ekvivalent statisk last och moment. Beteckningar Ms,1 och
Ms,2 representerar de stödmoment som uppstår av balkens aktuella randvillkor.
Tabell 6.2 Ekvivalent statisk last och moment för balk enligt Figur 6.1 med linjärelastisk eller
plastisk respons som är belastat med en karakteristisk impuls Ik.
Begrepp Elastisk respons Plastisk respons
Ekvivalent
statisk last 2
12 l
h	i	E
q
mF
el




	
	 pl	mF
pl u	h
i
q 		


		2
2
Ekvivalent
moment  	
	
	 


		
mF
f	s	s
E	h	i
M	M	M 3	16	2
1 2,	1,  	 pl	mF
f	s	s
l	i
M	M	M
	
	 	

		 8	2
1 2
2,	1,
Faktor för
randvillkor b
b
k	l
EI 1
3 		
 2
l
u pl
pl


De i Tabell 6.2 redovisade uttrycken visar vilken betydelse som olika parametrar har på det
resulterande momentet hos en impulsbelastad balk. Motsvarande uttryck för momentet i en statiskt
belastad balk fås som
 	 8	2
1 2
2	1
l	q
M	M	M f	,s	,s

		 (6.1)
och jämförs detta med uttrycken för ekvivalent moment i Tabell 6.2 framgår en tydlig skillnad. Den
stora betydelse som spännvidden har för det resulterande momentet i en statiskt belastad balk –
proportionellt mot l2 – försvinner helt hos en impulsbelastad balk med elastisk respons och minskas
till att enbart vara proportionellt mot l för en balk med plastisk respons. Vidare får balkens massa,
via densiteten, en betydande inverkan på resulterande moment. För en elastisk balk medför en ökad
styvhet – via elasticitetsmodul E och tvärsnittshöjd h – ett ökat resulterande moment medan en stor
rotationskapacitet hos en plastisk balk innebär ett minskat moment.

-- 15 of 15 --