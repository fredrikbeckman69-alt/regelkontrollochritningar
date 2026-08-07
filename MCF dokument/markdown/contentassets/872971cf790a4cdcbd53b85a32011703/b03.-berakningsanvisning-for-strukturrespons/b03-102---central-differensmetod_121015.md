---
title: "B03 102   Central Differensmetod 121015"
category: "b03.-berakningsanvisning-for-strukturrespons"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b03.-berakningsanvisning-for-strukturrespons/b03-102---central-differensmetod_121015.pdf"
fileType: "PDF"
keywords: ["beräkning","tiden","respons","tidssteg","detta","styvheten","dokument","styvhet"]
summary: "Beräkning av impulsbelastad konstruktion 1 (4) B03-102 2012-10-15 B03-102 Beräkningsanvisning för strukturrespons Central differensmetod Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren. 1 Orientering 1 1.1 Samlingsdokument 1 1.2 Om..."
---

Beräkning av impulsbelastad konstruktion
1 (4)
B03-102
2012-10-15
B03-102 Beräkningsanvisning för strukturrespons
Central differensmetod
Författare: Morgan Johansson. Ansvarig utgivare: Björn Ekengren.
1 	Orientering 	1
1.1 	Samlingsdokument 	1
1.2 	Om detta dokument 	1
2 	Numerisk lösningsmetod 	2
2.1 	Linjär respons 	2
2.2 	Olinjär respons 	3
2.3 	Stabilitet 	4
1 	Orientering
1.1 	Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 	Om detta dokument
I detta dokument ges en beskrivning av Central differensmetod som är en explicit, numerisk lös-
ningsmetod som kan användas för att beräkna den dynamiska responsen hos en impulsbelastad
konstruktion. Metoden är ett komplement att användas för mer detaljerade beräkningar än de hand-
beräkningsmetoder som presenteras i dokument B02-101 och kan användas vid godtycklig struktur-
respons och godtycklig last.

-- 1 of 4 --

Beräkning av impulsbelastad konstruktion
2 (4)
B03-102
2012-10-15
2 	Numerisk lösningsmetod
2.1 	Linjär respons
Central differensmetod är en explicit lösningsmetod för att lösa den dynamiska grundekvationen
( )	t	F	ku	u	c	u	m 	=	+	+ 		 	(2.1)
där m, c, k och F(t) är massa, dämpning, styvhet respektive yttre last samt u , u och u är accelera-
tion, hastighet respektive förskjutning.
Med explicit lösningsmetod menas att lösning av förskjutningen u vid tiden t+
∆t, här betecknat som
ut	t ∆	+ , beräknas utgående från en jämvikt vid tiden t. Detta innebär att ekvation (2.1) kan skrivas
som
( )	t	F	u	k	u	c	u	m t	t	t =	+	+ 		 	(2.2)
där indexet anger tidpunkten som den aktuella parametern tillhör. Så till exempel syftar 	ut  	på
accelerationen vid tiden t och 	ut	t ∆	+ på hastigheten vid tiden t+
∆t. Massan m, dämpningen c och
styvheten k gäller samtliga för tiden t, dvs. m = t m, c = t c samt k = t k.
I central differensmetod ansätts accelerationen vid tiden t till
( 	)	u	u	u
t
u t	t	t	t	t	t 	∆	−	∆	+ +	−
∆
= 	2
1 2	
 	(2.3)
och hastigheten vid tiden t till
( 	)	u	u
t
u t	t	t	t	t 	∆	−	∆	+ −
∆
= 2
1
 	(2.4)
vilket insatt i ekvation (2.2) ger att förskjutningen vid tiden t+Δt kan skrivas som
( ) 












 −	−	




 −	−




 +	= −
−
+ u
t
c
t
m
u
t
m
k	t	F
t
c
t
m
u t	t
t	t
t
t
t
t	t
t	t	
∆
	∆
∆
	∆
	∆
	∆
	∆ 	2
2
2 2	2
1
2 	(2.5)
Det kan noteras att samtliga termer i högerledet är från tiden t eller t-
∆t, vilket innebär att förskjut-
ningen 	ut	t ∆	+ kan lösas ut direkt från redan känd information. Sätts dämpningen till noll, t c = 0,
vilket för en impulsbelastad konstruktion är en rimlig approximation på säker sida, så kan
ekvation (2.5) förenklas till
( ) 







∆
−	





∆
−	−	∆	= ∆	−	−	∆	+ u
t
m
u
t
m
k	t	F	m	t	u t	t
t
t
t
t	t	t	t
2	2
1	2 	2 (2.6)

-- 2 of 4 --

Beräkning av impulsbelastad konstruktion
3 (4)
B03-102
2012-10-15
Av ekvation (2.5) och (2.6) framgår att centrala differensmetoden inte är självstartande eftersom det
vid beräkning av förskjutningen
∆t u i det första tidssteget behövs information om förskjutningen vid
tiden -
∆t. För att lösa detta används ett särskilt startsteg vilket uttrycks som
u
t
u	t	u	ut 	 0
2
0	0
2
∆
+	∆	−	=∆	− (2.7)
och som behöver användas i en numerisk beräkning för att kunna starta analysen.
2.2 	Olinjär respons
I ekvation (2.6), ges ett uttryck för att beräkna förskjutningen t+Δtu utgående från information i
föregående tidssteg t och t-Δt. Vid härledning av detta uttryck har en linjärelastisk materialrespons
förutsatts i form av styvheten k. Det är dock relativt enkelt att även nyttja dessa uttryck för ett fall
med olinjär materialrespons. Eftersom styvheten k = t k anges för tiden t vid beräkning av
förskjutningen vid tiden t+
∆t så är det möjligt att använda en sekantstyvhet för att beskriva en
olinjär respons. Genom att låta t k = t k(t u) = k(u(t)), dvs. styvheten vid tiden t är en funktion av
aktuell respons u(t), så kan en godtycklig materialrespons beräknas.
För ett system med elastisk respons så gäller för styvheten att
konstant	=	= k	kt 	(2.8)
medan den för ett system med godtycklig respons istället utgör sekantstyvheten i aktuellt tidssteg
såsom illustreras i Figur 2.1, dvs.
k	k	k 	k	j	i 	t	t	t ≠	≠ 	(2.9)
Det som egentligen är av intresse att beskriva med t k i ekvation (2.6) är inte styvheten som sådan
utan den inre kraft
u	k	R t	t	t ⋅	= 	(2.10)
som är verksam i tidssteget t.
u
R
u(tk)
R(ti)
k(u(ti)) k(u(tj))
u(ti) 	u(tj)
k(u(tk))
R(tj)
Figur 2.1 	Tangentstyvhet k vid tiden t för system med godtycklig respons.

-- 3 of 4 --

Beräkning av impulsbelastad konstruktion
4 (4)
B03-102
2012-10-15
På samma sätt kan styvheten på avlastningen anpassas efter önskat fall. Genom att i beräkningarna
hålla reda på om aktuell styvhet ska motsvara en av- eller pålastning kan styvheten anpassas efter
aktuellt förhållande. Exempelvis är det möjligt att för en plastisk respons låta av- och pålastningen
motsvara en önskad linjärelastisk styvhet för att vid en ökad deformation, med växande plastiska
töjningar, låta aktuell sekantstyvhet ta över. I Figur 2.2 illustreras hur en avlastning sker vid tiden t j.
För ett system med plastiska egenskaper kommer en sådan avlastning ske med en styvhet
motsvarande den inledande tangentstyvheten, dvs. med styvhet k(u(t 0 )). Efter en elastisk avlastning
från förskjutning u(t j -∆t) till u(t j ) ska i nästa tidssteg, t j+Δt, en styvhet k(u(t j )) användas i
ekvation (2.6) för att korrekt beskriva den inre kraft R(u(t j )) som verkar i systemet för att beräkna
förskjutningen u(t j+∆t).
u
R
k(u(tj-∆t))
u(tj-∆t)
R(u(tj-∆t))
k(u(t0))
k(u(tj)
R(u(tj)
u(tj)
Figur 2.2 	Styvhet vid avlastning för system med plastiska egenskaper.
2.3 	Stabilitet
Att en lösning är stabil innebär att felaktigheter i begynnelsevillkoren, på grund av exempelvis
avrundningsfel, inte växer i den fortsatta beräkningen. Om nyttjat tidssteg är för stort,
∆t ≥
∆t kr, fås
ett fel som växer till sådana proportioner att lösningen snabbt blir oanvändbar.
Centrala differensmetoden är villkorligt stabil vilket innebär att tidssteget
∆t måste understiga ett
sådant minsta kritiskt tidssteg
∆t kr för att en acceptabel lösning ska erhållas. Detta kritiska tidssteg
kan uttryckas som
k
m
t kr 	2
2 =	=
ω∆ 	(2.11)
Uppfylls inte detta villkor fungerar inte lösningsmetoden. Det ska dock poängteras att det av
noggrannhetsmässiga skäl, framförallt för ett enfrihetsgradsystem, kan vara nödvändigt med ett
betydligt mindre tidssteg. Vilket tidssteg som är lämpligt i ett givet fall beror på en kombination av
lastens utformning och systemets responstid men ett tidssteg av en storleksordning motsvarande en
hundradel av lastens varaktighet fungerar ofta bra. Dvs. valt tidssteg Δt1 bör uppfylla




≤
100
1	1 	t
t
t
kr	
∆
∆ 	(2.12)
där t 1 är lastens varaktighet.

-- 4 of 4 --