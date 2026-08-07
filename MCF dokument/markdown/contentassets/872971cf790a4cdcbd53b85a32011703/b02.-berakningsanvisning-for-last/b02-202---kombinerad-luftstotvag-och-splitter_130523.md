---
title: "B02 202   Kombinerad Luftstotvag Och Splitter 130523"
category: "b02.-berakningsanvisning-for-last"
originalFile: "contentassets/872971cf790a4cdcbd53b85a32011703/b02.-berakningsanvisning-for-last/b02-202---kombinerad-luftstotvag-och-splitter_130523.pdf"
fileType: "PDF"
keywords: ["beräkning","splitter","beräknas","dokument","enligt","impulslast","stötvåg","splitterbelastning"]
summary: "Beräkning av impulsbelastad konstruktion 1 (5) B02-202 2013-05-23 B02-202 Beräkningsanvisning för last Kombinerad luftstötvåg och splitter Författare: Joosef Leppänen. Ansvarig utgivare: Björn Ekengren. 1 Orientering 1 1.1 Samlingsdokument 1 1.2 O..."
---

Beräkning av impulsbelastad konstruktion
1 (5)
B02-202
2013-05-23
B02-202 Beräkningsanvisning för last
Kombinerad luftstötvåg och splitter
Författare: Joosef Leppänen. Ansvarig utgivare: Björn Ekengren.
1 	Orientering 	1
1.1 	Samlingsdokument 	1
1.2 	Om detta dokument 	1
2 	Stötvågsbelastning 	2
2.1 	Impulslast 	2
2.2 	Ekvivalent laddningsvikt 	2
3 	Splitterbelastning 	3
4 	Kombinerad stötvågs- och splitterbelastning 	4
1 	Orientering
1.1 	Samlingsdokument
För allmän information om MSB:s kunskapsdokument i serien Beräkning av impulsbelastade
konstruktioner, se dokument B01-101. Där ges bland annat övergripande bakgrund, en samman-
fattande beteckningslista samt referenser. För en förteckning av utgivna och kommande dokument i
serien hänvisas till dokument B01-102.
1.2 	Om detta dokument
I detta dokument sammanställs samband för stötvågs-, splitter- och kombinerad stötvågs- och
splitterbelastning. 	Bakgrund 	för 	här 	givna 	samband 	behandlas 	i 	Johansson 	(2012) 	och
Leppänen (2012).

-- 1 of 5 --

Beräkning av impulsbelastad konstruktion
2 (5)
B02-202
2013-05-23
2 	Stötvågsbelastning
2.1 	Impulslast
Tryck-tidssambandet P(t) för en stötvåg beräknas med följande samband
+
	−	−
+
+ 




 	−
−	= t	t	t	a 	a
	e
t
t	t
P	t	P )	(
1	)	(
α (2.1)
där P + är övertrycket, t + är varaktigheten hos stötvågen och t a är ankomsttid för stötvågen.
Impulstätheten i + kan beräknas enligt följande
( 	)


 −	−	= −	+	+	+
	α
α
	α e	t	P	i 	1
1	1 2 	(2.2)
från vilket faktorn
α kan lösas ut när P +, i + samt t + är kända. Anvisningar för att bestämma
stötvågsparametrar redovisas i dokument B02-111.
2.2 	Ekvivalent laddningsvikt
Den totala impulsen består av impulslast från stötvåg samt impulslast från splitter. När bomben
fragmenteras, det vill säga när splittret skapas, förbrukas energi och impulslasten från stötvåg
minskar jämfört med en ren laddning utan hölje. Detta kan beaktas enligt nedan för en bomb
innehållande sprängmedel TNT.
Energimängd hos bomb Eb där sprängmedel är TNT kan beräknas enligt följande formel
W	Eb 	⋅	= 	610	4 	(2.3)
där 4610 kJ/kg är energimängd för TNT och W är massa sprängmedel i [kg].
Den kinetiska energin för splitter beräknas som
2
2
0
.
v	M
E 	h
splitter	k
⋅
= 	(2.4)
där Mh är höljets massa och v0 är utgångshastighet för splitter. Uttryck för dessa redovisas i
dokument B02-201.
Den totala energimängden hos en bomb Eb kan beräknas som
splitter	k	s	b 	E	E	E 	.	+	= 	(2.5)
där Es är energimängd för att skapa en stötvåg och Ek.splitter är energimängd för att skapa kinetisk
energi hos splitter.

-- 2 of 5 --

Beräkning av impulsbelastad konstruktion
3 (5)
B02-202
2013-05-23
För att beakta att en del av energi går åt för att skapa kinetisk energi hos splittren kan en ekvivalent
laddningsvikt Wekv tas fram som genererar en impulslast från stötvåg som
4610	4610
.splitter	k	b	s
ekv
E	E	E
W −
=	= 	(2.6)
3 	Splitterbelastning
Impulsen från ett enstaka splitter beräknas som dess massa multiplicerat med dess
hastighet enligt följande
s	s	s 	v	m	I 	= 	(3.1)
där ms är massan för ett splitter i [kg] och vs splittrets anslagshastighet enligt dokument B02-201.
För 	en 	splittersvärm 	sätts 	massan 	till 	splittertätheten 	ρs, 	vilket 	definieras 	som
splittermassan från bomben genom anslagsytan S. Splittertätheten minskar med ökat
avstånd från detonationen eftersom anslagsytan ökar med avståndet och beräknas som:
S
M h
s =
	ρ 	(3.2)
För en detonation i luft kan en första mycket grov approximation göras genom att dela
höljets massa från bomben med ytan för en sfär, vilket ger splittertätheten/m 2 .
Ytan S ör en sfär med radien r fås som
2
4 r	S	
π	= 	(3.3)
Vanligtvis så är bomber inte sfäriska och mantelns tjocklek varierar i en bomb, vilket
medför att utkastningen varierar i olika riktningar för en bomb. Dessutom har bombens
relativa placering stor betydelse för hur splitterfördelningen blir. En approximation för en
cylindrisk bomb är att 60 % av splittren träffar ett segment av 40 grader, dvs. ± 20 grader,
mätt vinkelrät bomben. En vanlig form hos en laddning är en cylinder och spridningen för
en sådan bomb visas i Figur 3.1.
20° 	20°
20°
20°
r
h
Figur 3.1 	Splitterfördelningen för en cylindrisk bomb placerad i horisontalt respektive vertikalt
läge.

-- 3 of 5 --

Beräkning av impulsbelastad konstruktion
4 (5)
B02-202
2013-05-23
Detta ger en mer realistisk splitterfördelning när bomben är cylinderformad. Ytan för en
cylinder med radien r och höjden h fås som
rh	S	
π	2	= 	(3.4)
För en splittersvärm beräknas impulstätheten i + enligt följande
s	s	s	s	s 	v	v	m	i	
ρ	=	=+ (3.5)
där massan sätts till splittertätheten ρs för en splittersvärm i [kg/m 2
] och vs splittrets medel
anslagshastighet enligt dokument B02-201.
Ankomsttid för splitter kan beräknas som sträckan som splitter färdas i luften s genom
medelhastigheten hos splittret i luften vsm.
sm
a v
s
t 	= 	(3.6)
Impulsens varaktighet för splitter kan uppskattas till
smp	v
x
t 	=+
(3.7)
där x är penetrationsdjup för som kan beräknas enligt anvisningar i dokument B02-201, och vsmp är
splittrets medelhastighet under penetrationsförloppet.
4 	Kombinerad stötvågs- och splitterbelastning
För kombinerad stötvågs- och splitterbelastning består impulslasten av en impuls från stötvågen och
en impuls från splitterbelastningen. Den totala impulsen i tot kan därmed beräknas som summan av
impulslast från stötvåg i stötvåg och impulslast från splitter i splitter som
)	(	)	( 	W	i	W	i	i 	splitter	ekv	stötvåg	tot 	+	= 	(4.1)
där Wekv är ekvivalent laddningsvikt enligt ekvation (2.6) och W är laddningsvikt, båda i [kg].
Impulslasten bestäms enligt anvisningar i dokument B02-111 med ekvivalent laddningsvikt.
Impulslast från splitterbelastning beräknas enligt ekvation (3.5) och dess ankomsttid beräknas enligt
ekvation (3.6).
Beroende på avståndet kan antingen splittret eller stötvågen träffa konstruktionen först. Ankomstid
för stötvåg och splitter beror på flertal faktorer som mängden sprängämne, höljets massa och
avstånd från detonationen. I Figur 4.1 visas principiellt hur en impulslast ser ut från en kombinerad
stötvågs- och splitterbelastning. I detta exempel träffar splitter konstruktionen först. Vidare är
lastens varaktighet från splitter betydligt kortare jämfört med lastens varaktighet från en stötvåg.

-- 4 of 5 --

Beräkning av impulsbelastad konstruktion
5 (5)
B02-202
2013-05-23
Figur 4.1 	Principskiss för impulslast från kombinerad stötvägs- och splitterbelastning.
Tid
Last

-- 5 of 5 --