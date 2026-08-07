---
title: "Explosion I Gatukorsning"
category: "bebyggelsens-motstandsformaga"
originalFile: "skyddsrum/bebyggelsens-motstandsformaga/explosion-i-gatukorsning.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","beräkning","explosion","vatten","kontroll","tryckvåg","splitter"]
summary: "Bebyggelsens motståndsförmåga mot extrem dynamisk belastning Del 2: Explosion i gatukorsning -- 1 of 156 -- Bebyggelsens motståndsförmåga mot extrem dynamisk belastning Del 2: Explosion i gatukorsning Författare: Morgan Johansson, Reinertsen Sveri..."
---

Bebyggelsens motståndsförmåga
mot extrem dynamisk belastning
Del 2: Explosion i gatukorsning

-- 1 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning
Del 2: Explosion i gatukorsning
Författare: Morgan Johansson, Reinertsen Sverige AB och Leo Laine, LL Engineering
2012 MSB
Publikationsnummer: MSB450
ISBN: 978-91-7383-267-0

-- 2 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
I
Innehållsförteckning
Förord
Projektsammanfattning
Project summary
Sammanfattning
Beteckningar
1 	Inledning 	1
1.1 	Bakgrund 	1
1.2 	Syfte 	2
1.3 	Explosionsförloppet och dess effekter – orientering 	2
1.4 	Begränsningar 	3
2 	Försök 	4
2.1 	Försöksuppställning 	4
2.1.1 	Geometri och laddningens läge 	4
2.1.2 	Tryckgivare 	6
2.1.2.1 	Typ av givare 	6
2.1.2.2 	Placering av givare 	6
2.2 	Sprängladdning 	10
2.3 	Resultat 	11
2.3.1 	Orientering 	11
2.3.2 	Frifältstryckgivare – jämförelse med ConWep och olika lägen 	11
2.3.3 	Tryckgivare på byggnader - jämförelse av olika lägen 	14
3 	Analyser i Autodyn 	20
3.1 	Modellering 	20
3.1.1 	Orientering 	20
3.1.2 	Laddning 	20
3.1.2.1 	PETN i Autodyn 	20
3.1.2.2 	Sprängämne i explosionsanalys 	22
3.1.3 	Modelleringsteknik 	23
3.2 	Resultat 	25
3.2.1 	Tryckresultat 	25
3.2.2 	Jämförelse med försök 	27
3.2.2.1 	Stötvågsparametrar 	27
3.2.2.2 	Koherensmått Coh 	28

-- 3 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
II
4 	Förenklad analys 	31
4.1 	Orientering 	31
4.2 	Beskrivning av metod 	31
5 	Slutsatser 	34
6 	Referenser 	35
BILAGA A 	Jämförelse av tryck-tidssamband mellan försök och analys i Autodyn 	A.1
A.1 	Skott #1 – 0,4 kg, läge 1 	A.1
A.2 	Skott #4 – 0,4 kg, läge 2 	A.10
A.3 	Skott #7 – 0,4 kg, läge 3 	A.19
A.4 	Skott #10 – 0,4 kg, läge 4 	A.28
A.5 	Skott #2 – 1,6 kg, läge 1 	A.37
A.6 	Skott #5 – 1,6 kg, läge 2 	A.46
A.7 	Skott #8 – 1,6 kg, läge 3 	A.55
A.8 	Skott #11 – 1,6 kg, läge 4 	A.64
Bilaga B 	Sammanställning av stötvågsparametrar i försök och analys i Autodyn 	B.1
Bilaga C 	Uttryck för stötvågsparametrar i positiv och negativ fas 	C.1
C.1 	Orientering 	C.1
C.2 	Ideal luftstötvåg vid fri avlastning 	C.1
C.3 	Positiv fas 	C.3
C.4 	Negativ fas 	C.5
Bilaga D 	Explosion at an intersection in an urban environment – experiments
and analyses 	D.1
Bilaga E 	Experiments and analyses of explosion at an urban intersection 	E.1

-- 4 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
III
Förord, rapport 2008
Denna rapport är en andra delrapport i det av Räddningsverket finansierade forskningsprojektet
Bebyggelsens motståndsförmåga med extrem dynamisk belastning som pågår under perioden
januari 2006 till december 2008. Rapporten utgör en sammanställning av ett explosionsförsök i en
simulerad bebyggelse utfört i maj 2007 samt tillhörande analyser i programmet Autodyn. Arbetet
som presenteras här har utförts under perioden april 2007 till november 2008. Utförda försök har
finansierats av Räddningsverket och norska Forsvarsbygg och utförts av Forsvarsbygg i samarbete
med svenska Totalförsvarets forskningsinstitut, FOI, på sin anläggning i Grindsjön.
Arbetet har följts och stöttats av Björn Ekengren, Räddningsverket, och ett stort tack riktas till
Björn för dennes inspirerande insatser. Utan honom hade detta projekt inte varit lika kul och
givande att arbeta med. Särskilt tack riktas även till norska Forsvarsbygg, och då särskilt Svein
Christensen och Ståle Skudal, för deras initiering, inbjudan till samt medfinansiering av de försök
som presenteras i denna rapport. Vidare tackas svenska Totalförsvarets forskningsinstitut (FOI),
representerade av Rickard Forsén, Anders Carlberg samt Roger Berglund, för deras del i det
experimentella utförandet. Slutligen riktas ett särskilt tack även till Ola Pramm Larsen, Anker-
Zemer Engineering A/S, som bistått med ovärderlig hjälp i utvecklandet av samt utförandet av
samtliga analyser i programmet Autodyn som presenteras i denna rapport.
Göteborg, november 2008
Morgan Johansson och Leo Laine
Förord, revidering 2012
Denna publikation är en nyutgåva av rapporten Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning. Delrapport 2 – Explosion i gatukorsning, Rapport B54-240/08, utgiven av
Räddningsverket 2008. I samband med en allmän uppdatering av publikationer som Räddnings-
verket gett ut har en översiktlig revidering gjorts under hösten 2012.
Räddningsverket upphörde den 31 december 2008 och dess funktion innehas sedan 1 januari 2009
av Myndigheten för samhällsskydd och beredskap (MSB). En första utgåva av rapporten utgavs av
Räddningsverket i november 2008. Detta är den första revideringen och ges ut i MSB:s regi – i
rapporten hänvisas dock fortfarande till Räddningsverket. Utförda revideringar utgörs av att smärre
felaktigheter rättats till. Vidare har projektsammanfattning, tidigare införd i Delrapport 3, inarbetats
i denna publikation. I övrigt är sakinnehållet detsamma som i underliggande rapport och fokus har
legat på att rätta till samt snygga upp valda delar av innehållet.
Göteborg, oktober 2012
Morgan Johansson och Leo Laine

-- 5 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
IV
Projektsammanfattning
I samhället finns en starkt varierad bebyggelse med olika byggnader som i varierande omfattning
löper risk att utsättas för extrem dynamisk belastning. Denna last kan orsakas av naturliga fenomen
eller härröra från olika typer av olyckor. En extremare variant kan även uppstå i aktioner vilka
syftar till avsiktlig skada, såsom väpnat angrepp i samband med grov kriminalitet och/eller
terrorism.
En viktig uppgift för Räddningsverket, numera Myndigheten för samhällskydd och beredskap
(MSB), är att förebygga olyckor i den normala vardagen samt begränsa dess effekter när sådana
ändå inträffar. I egenskap av expertmyndighet åligger det Räddningsverket att fortlöpande vårda
och bygga ut den kunskapsbas som finns inom detta område och detta projekt – Bebyggelsens
motståndsförmåga 	mot 	extrem 	dynamisk 	belastning 	– 	är 	ett 	led 	i 	detta 	arbete. 	Projektets
huvudsakliga syfte är att öka kunskapen om bebyggelsens förmåga att absorbera och motstå de
avsevärda påfrestningar den utsätts för vid extrema dynamiska belastningar. En förutsättning för
detta är en djupare förståelse om både lastens uppförande och den drabbade konstruktionens
strukturella respons när den utsätts för dylika extremlaster.
Projektets huvudmål kan delas in i två delar – laster i samhället samt bebyggelsens motstånds-
förmåga – och arbetet har delats in i tre delar med inriktning enligt nedan:
• 	Del 1: Last av luftstötvåg
• 	Del 2: Explosion i gatukorsning
• 	Del 3: Kapacitet hos byggnader
I Del 1 identifieras de laster som kan tänkas uppstå i bebyggelsen samt ges en metodik för att
bestämma aktuella laster utgående från en definierad hotbild. En genomgång görs av luftstötvågens
utbredning i omgivningen med hänsyn till tid och avstånd samt inverkan av fenomen såsom
reflexion, fördämning, och diffraktion. Publikationen innehåller också en övergripande genomgång
av byggnaders samt människors tålighet mot explosionslast.
Del 2 utgör en fördjupning av Del 1 och behandlar mer ingående hur effekten av en explosionslast
påverkas av omgivningen i en antagen stadsmiljö. Rapporten redovisar resultat från, samt jämfö-
rande finita volymanalyser med, en försöksserie utförd i anslutning till projektet.
Slutligen behandlar Del 3 bebyggelsens möjlighet att motstå de laster som uppstår vid en explosion
och samband mellan impulslast och statisk last förklaras. En beräkningsmetodik för att bedöma en
betongkonstruktions 	bärförmåga 	presenteras 	och 	ett 	illustrerande 	exempel 	– 	innehållande
lastframtagning, resulterande dynamisk respons samt kapacitetskontroll av utsatt konstruktionsdel –
ges.

-- 6 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
V
Project summary
Today’s society contains a highly varied housing settlement with structures that may be subjected to
extreme dynamic loads. Such loads can be due to natural causes or to different sort of accidents. A
more extreme variant may be caused by actions that intend to cause harm, such as armed attacks
related to crime and/or terrorism.
An 	important 	task 	for 	the 	Swedish 	Rescue 	Services 	Agency, 	now 	MSB 	- 	Swedish 	Civil
Contingencies Agency, is to prevent accidents in the normal everyday life, and to limit the effect
when such things still happen. As a government authority, it is the responsibility of the Swedish
Rescue Services Agency to continuously maintain and develop the existing knowledge within this
field; and this project – Housing settlement capacity against extreme dynamic loading – is a part of
this work. The main aim of the project is to increase the knowledge of the settlement’s capacity to
absorb and withstand the considerable strain it is exposed to when subjected to extreme dynamic
loads. A prerequisite for this is a deeper understanding of both the load behaviour and of the
affected structural behaviour of the buildings under such load conditions.
The aim of the project may be divided into two parts – loads in the community, and the housing
settlement capacity – and the work have been divided into three parts with the following content:
• 	Part 1: Load of shock wave in air
• 	Part 2: Explosion at an urban intersection
• 	Part 3: Building capacity
In Part 1, the loads that are deemed possible to appear within the housing settlement are identified
and a methodology to determine load magnitudes based on a defined threat level is given. A survey
is given of the spreading of the shock wave into the surrounding regarding time, distance and due to
the influence of phenomena such as reflexion, confinement and diffraction. The report also includes
a brief review of how well buildings and humans withstand the effect of a blast load.
Part 2 constitute a continuation of the first report and treats more thoroughly how the blast load
from an explosion is affected by its surrounding in a presumed urban environment. The report also
includes the results from, and comparisons with belonging finite volume analyses of, a test series,
carried out in conjunction with the project.
Finally, Part 3 deals with the possibility of the housing settlement to withstand the loads that
appears at an explosion, and the relation between impulse and static loading is explained. A method
to calculate the capacity of a concrete structure is presented and an illustrating example of how to
determine the load, the resulting dynamic behaviour and capacity control of the exposed structure,
is presented.

-- 7 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
VI
Sammanfattning
Att prediktera den resulterande trycklasten från en explosion som inträffar i en bebyggelse kan vara
mycket komplicerat. Beroende på explosionskällans placering gentemot sin omgivning samt
utformningen av denna kan en mycket stor mängd olika lastsituationer uppstå av vilka en betydande
del utgörs av komplexa kombinationer av interagerande stötvågor.
Denna rapport utgör en andra delrapport i projektet Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, vars huvudsakliga syfte är att öka kunskapen om bebyggelsens förmåga att
absorbera och motstå de avsevärda påfrestningar den utsätts för vid en explosionsbelastning. I
rapporten presenteras en försöksserie i skala 1:5 av en explosion i gatuhörn med syftet att närmare
studera hur stötvågslasten påverkas när den verkar i en geometri motsvarande den i bebyggelsen där
en komplex interaktion av sådana fenomen som reflexion, diffraktion samt fördämningseffekter fås.
Jämförande beräkningar görs med det generella finita elementprogrammet Autodyn för att närmare
studera hur väl detta klarar av att fånga den resulterande lastbilden i en sådan geometri. Analyser i
Autodyn gjordes utfördes försöken och kan därmed användas för att validera programmet. För att
jämföra resultaten mellan simulering och beräkning introduceras ett koherensmått för få ett mått på
hur väl erhållna tryckkurvor sammanfaller över tiden. Detta koherensmått ger en tydlig indikation
på hur bra hela försöksserien simulerades och med stöd av detta konstateras att analys- och
försöksresultat visar en mycket god överensstämmelse. Således dras slutsatsen att Autodyn utgör ett
mycket kraftfullt verktyg för att förutspå vilken last som kan uppstå vid en explosion i bebyggelse.
Som 	komplement 	till 	Autodyn 	finns 	det 	även 	behov 	av 	enklare, 	mer 	ingenjörsmässiga,
beräkningsverktyg som möjliggör grova och snabba men ändock tillräckligt tillförlitliga överslag av
vilken last som fås i en given punkt. En metod för detta presenteras och dess resultat jämförs med
befintliga försöksdata. Överensstämmelsen är fullt acceptabel varför metoden bedöms kunna
användas för att ge tillförlitliga grova överslag av resulterande trycklaster från explosionslast.

-- 8 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
VII
Beteckningar
Romerska versaler
C diff 	diffraktionskoefficient
P 	tryck
P0 	tryck hos ostörd luft (cirka 101,3 kPa)
P + övertryck positiv fas
Pr+ reflekterat övertryck positiv fas
Ps+ oreflekterat övertryck positiv fas
Ps- undertryck negativ fas
Pwi 	tryck för stötvåg Wi
V 	volym
Vmo 	volym hos mineralolja
Vp 	volym hos pentyl
W 	laddningsstorlek
Z 	skalat avstånd
Romerska gemener
Coh 	koherensmått
i 	impulstäthet
i +
, i s+ impulstäthet positiv fas
i -
, i s- impulstäthet negativ fas
m 	antal hörn som diffraktion sker runt
mp 	massa hos pentyl
n 	antal studerade stötvågor
r 	detonationsavstånd, reflekterande stötvåg
t 	tid
t + varaktighet positiv fas
t - varaktighet negativ fas
t a 	ankomsttid

-- 9 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
VIII
Grekiska tecken
α 	avklingningsfaktor, viktprocent pentyl
γ 	värmekapacitetskvot för luft
ηConWep 	ekvivalent massa i ConWep
ηI 	ekvivalent massa baserat på impuls
ηP 	ekvivalent massa baserat på tryck
λTNT 	omvandlingsfaktor till mängd TNT
ρ 	densitet
ρ0 	densitet hos luft, densitet hos PETN
ρmo 	densitet hos mineralolja
ρp 	densitet hos pentyl
χ 	procentmängd pentyl
Index
+ 	indikerar positiv fas
- 	indikerar negativ fas
0 	indikerar ostörd luft
Exp 	indikerar försöksresultat
i 	indikerar våg nr i
r 	indikerar reflekterad stötvåg
s 	indikerar oreflekterad stötvåg

-- 10 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
1
1 	Inledning
1.1 	Bakgrund
Att prediktera den resulterande trycklasten från en explosion som inträffar i en bebyggelse kan vara
mycket komplicerat, se Johansson och Laine (2012). Beroende på explosionskällans placering
gentemot sin omgivning samt utformningen av denna kan detta resultera i en mycket stor variation
av lastfall. Av dessa kan en betydande del utgöras av komplexa kombinationer av interagerande
stötvågor såsom schematiskt sammanfattas i Figur 1.1.
Laddning
diffraktion
diffraktion
reflexion
reflexion
fördämning
Figur 1.1 	Schematisk illustration av möjliga stötvågsfenomen som kan uppstå vid explosion i
bebyggelse.
För enklare fall är det möjligt att använda analytiska eller semiempiriska samband särskilt
framtagna när den resulterande explosionslasten ska bestämmas. När den omgivande geometrin blir
mer komplex är det möjligt att denna typ av verktyg inte längre resulterar i godtagbara resultat. I
sådana fall kan användandet av numeriska metoder, nyttjande fluiddynamik, aktuella delar av
omgivningen modelleras och stötvågornas interaktion med denna simuleras på ett verklighetstroget
sätt. Det är dock viktigt att poängtera att det fortfarande är av yttersta vikt att kontroll görs att de
resultat som fås stämmer överens med de observerade i försök. Dvs. det finns ett behov av att
verifiera denna typ av kraftfulla datorprogram mot experimentella resultat. När så väl är gjort, och
det påvisats att det numeriska verktyget återspeglar verkligheten i tillräckligt hög grad, så kan detta
med framgång användas istället för och/eller i kombination med experiment för att beskriva det
förväntade verkningssättet av en sådan explosion.
I det här arbetet har programmet Autodyn, Century Dynamics (2004), använts. Det har tidigare
visats i Johansson och Laine (2012) att Autodyn ger god överrensstämmelse med experimentella
data för explosion av sfäriska laddningar med möjlighet till fri utbredning i luften. Det är dock även
önskvärt att veta om en motsvarande överrensstämmelse fås i en mer komplex belastningssituation
såsom en explosion i bebyggelse. En möjlighet till en sådan studie öppnade sig våren 2007 i ett
samarbetsprojekt initierat av norska Forsvarsbygg där Räddningsverket bjöds in att medverka i en
planerad försöksserie av explosion i gatukorsning som skulle utföras i samarbete med svenska FOI.

-- 11 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
2
1.2 	Syfte
Det övergripande syftet med detta arbete har varit att närmare studera vilken effekt som fås vid
explosion i bebyggelse. Ett delmål i arbetet har varit att skaffa tillförlitliga mätdata att jämföra med
det generella finita elementprogrammet Autodyn, Century Dynamics (2004), och ett annat att
undersöka möjligheten att använda en förenklad ingenjörsmetod baserad på superposition och
diffraktion, för att uppskatta de laster som kan förväntas uppstå i en sådan miljö.
Ett ytterligare syfte med försöksserien har även varit att vidareutveckla och understödja det givande,
samarbete som på senare år byggts upp mellan Räddningsverket, norska Forsvarsbygg och FOI.
1.3 	Explosionsförloppet och dess effekter – orientering
I detta arbete behandlas last från explosion i bebyggelse. En explosion och de effekter den ger
upphov till är ett komplext fenomen som kräver beaktande av många olika delar för att ge en
fullständig bild av vad som sker. I Figur 1.2 illustreras schematiskt vad som inträffar vid en
explosion – från antändning och detonation av sprängämnet till dess att en utsatt byggnad utsetts för
en kombination av stötvåg och splitter som explosionen ger upphov till. Som framgår av figuren
finns det ett stort antal olika delar att behärska för att fullständigt förstå hela förloppet. De delar som
är av särskilt intresse i denna delrapport är också markerade. Det ska dock även poängteras att
sprängämnets sönderfall med detonationshastighet, detonationstryck samt energifrigörelse också
berörs i detta arbete via de explosionsanalyser som här utförs i programmet Autodyn.

-- 12 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
3
studerat
område
detonations-
tryck
detonations-
hastighet
frigjord
energimängd
per massenhet
frigjord
energimängd
per längdenhet
totalt
deformations-
arbete per
längdenhet
splittrens
material-
egenskaper
splittrens storlek,
tvärsnittsyta, form
splittrens
massa
splittrens
utkastningsvinkel
tillgänglig
energimängd
per längdenhet
totalt
splittrens utkast-
ningshastighet
splittrens
räckvidd
stötvågens
tryck
stötvågens
varaktighet
stötvågens
tryck-tids-
förhållande
propagering i
omgivningen
penetrering
av skyddet
verkan
i målet
stötvåg
splitter
explosivämnets
kemiska
sammansättning
reaktionsproduk-
ternas kemiska
sammansättning
bildningsvärmen
för ämnena
explosivämnets
densitet
explosivämnets
massa per
längdenhet
explosivämnets
totala massa
höljets massa
per längdenhet
höljets tjocklek
per längdenhet
höljets material-
egenskaper
höljets
densitet
Explosivämnet
Höljet
Bomben i helhet
Utgångsläge 	Sprängämnets
sönderfall
Höljets
sönderfall
Splitterutkast 	Utsläppt stötvåg
stötvågens
infallsvinkel
bombens
geometri
bombens
initiering
bombens
placering
bomb med
ofragmenterat
hölje
längdenhet
Figur 1.2 	Schematisk illustration av vad som händer vid detonation av en bomb Det område
som har studerats i denna publikation har markerats i figuren.
1.4 	Begränsningar
Totalt utfördes 12 skott med tre olika typer av laddningar – två stycken med sprängämnet PETN
(högexplosiv laddning, så kallad HE-laddning) och ett med sprängämnet TBX (termobarisk ladd-
ning). Den sistnämnda laddningstypens försöksresultat är dock sekretessbelagda och tas därför inte
upp i denna rapport. För resterande två laddningstyper koncentreras redovisningen mot den mindre
av de båda – 0,4 kg laddning placerad nära marken – eftersom denna bäst svarar mot den hotbild
som önskas belysas i detta arbete. Som komplettering till detta redovisas dock även sammanfattande
nyckeldata samt fullständiga tryck-tidssamband även för den större laddningen på 1,6 kg placerad
en bit upp från marken. För att öka överskådligheten av framtagna resultat begränsas vidare
redovisade tryck-tidsmätningar samt diskussion av dessa till tryckgivare placerade på samma nivå
som den mindre av de två laddningarna.

-- 13 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
4
2 	Försök
2.1 	Försöksuppställning
2.1.1 	Geometri och laddningens läge
Försöksuppställningen bestod av fyra stycken betongkuber, med sidan 2,3 m, placerade på ett
inbördes avstånd om 2,3 m, se Figur 2.1. I planet placerades enskilda laddningar i fyra olika
positioner, #1 - #4. Två olika laddningsstorlekar användes, 0,4 kg samt 1,6 kg, och placerades på
avståndet 0,20 m respektive 1,15 m från marken, se Figur 2.2. Foton av försöksuppställningen visas
i Figur 2.3.
Avsikten med vald försöksuppställning var att approximativt simulera en explosion i bebyggelse.
Försöken utfördes i skala 1:5, vilket innebär att betongkuberna ungefär motsvarar 4-våningshus
med en höjd om 11,5 m samt att laddningarna motsvarar bomber på 50 kg och 200 kg på en
höjdnivå om 1,0 m respektive 5,75 m.
#1 A 	B
C 	D
#2 	#4	#3
2,3 	2,3 	2,3	1,15
2,3
2,3
2,3
Figur 2.1 	Vy från ovan av försöksuppställning där omgivningens geometri samt laddningarnas
placering framgår.
0,20 	1,15
0,4 kg PETN 	1,6 kg PETN
Figur 2.2 	Vy från sidan som visar laddningens placering i vertikalled.

-- 14 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
5
Figur 2.3 	Foto på försöksuppställning. Övre fotot visar en laddning på 0,4 kg (orange sfär)
placerat i läge #3 på höjden 0,20 m medan undre fotot visar en 1,6 kg laddning
placerad i läge #4 på höjden 1,15m.

-- 15 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
6
2.1.2 	Tryckgivare
2.1.2.1 	Typ av givare
Två typer av givare användes – dels för att mäta tryck mot betongkassunernas väggar och dels för
att 	mäta 	trycket 	mot 	marken. 	Tryckgivarna 	i 	betongkassunerna 	var 	av 	märket 	Kulite
(www.kulite.com) och monterades i ett genomgående hål med sladdar dragna ut genom dörr-
öppning eller upptaget hål i vägen. Markgivarna (frifältsgivare) var av märket PCB (www.pcb.com)
och placerades i en träplatta som skruvades fast i markunderlaget (asfalt eller betong), se Figur 2.4.
Kulitegivarna gick genom en (full) bryggförstärkare medan PCB-givarna hade inbyggda förstärkare
och 	strömmatades 	genom 	PCB-förstärkare. 	Som 	inspelningsutrustning 	användes 	två 	stycken
Nicolet Vision med 16-bitars upplösning och inställda på maximal samplingshastighet 100 kHz.
Använda tryckgivare klarade de trycknivåer som förväntades uppstå varför samma givare kunde
användas i samtliga skjutningar. Mätområdet på inspelnings- och förstärkningsutrustning anpassa-
des dock till förväntade förhållanden för att få så goda mätdata som möjligt.
Figur 2.4 	Tryckgivare på mark. Givaren fästes i en träskiva som skruvades fast i underlaget
(asfalt eller betong) och omgavs med sand för att säkerställa en mjuk övergång från
asfalten till skivans överkant.
2.1.2.2 	Placering av givare
Totalt användes 25 tryckgivare för att registrera de tryck som uppstod vid detonation av laddningar.
Tjugo av dessa - tio i nivå med laddningarna på 0,4 kg (0,2 m) och tio i nivå med laddningarna på
1,6 kg (1,15m), se Figur 2.5 respektive Figur 2.6 – placerades i betongkassunerna medan de
återstående fem utgjordes av givare som placerades på marken i lägen som varierade beroende på
laddningens läge, se Figur 2.9.
Betongkuberna, betecknade som byggnad A till D, utgjordes av betongkassuner med en ståldörr i
ena sidan. Dessa dörrar hölls stängda under försöken men medförde ändå att byggnadernas yta inte
blev helt jämn, något som befarades kunna störa mätningarna. För att minimera effekten av detta
riktades respektive kassun på ett sådant sätt att dörren fick gynnsammast möjlig placering med
avseende på de mätningar som utfördes. Vidare bedömdes det vara olämpligt att fästa tryckgivare i
dörrarna (stål) på grund av de vibrationer som befarades kunna uppkomma i dessa.

-- 16 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
7
Dörrarna hade en hög tröskel vilket innebar att tryckgivare placerade nära marken, se Figur 2.2,
kunde fästas obehindrat i betongen. För givare placerade högre upp var detta dock inte möjligt.
Istället placerades dessa givare på motsvarande position i intilliggande kassun, jämför placering av
givare BC2C och BD2C i Figur 2.6.
#1
A 	B
C 	D
#2 	#3 	#4
BA1L
BA3L 	BB3L
BB1L
BA2L 	BB2L	BB4L	BA4L
BA6L
BA7L
0,20
Figur 2.5 	Placering av givare på 0,2 m höjd. Givarnas placering var desamma för samtliga
laddningar. Laddningarnas lägen är markerade som #1 - #4.
#1
A 	B
C 	D
#2 	#3 	#4
BA1C
BA3C 	BB3C
BB1C
BC2C
BB4C
BD2C
BA4C
1,15
BA5R 	BB5R
Figur 2.6 	Placering av givare på 1,15 m höjd. Givarnas placering var desamma för samtliga
laddningar. Valet av placering för givare BC2C och BD2C gjordes med hänsyn till
dörrarnas lägen. Laddningarnas lägen är markerade som #1 - #4.
Syftet med tryckgivarna på betongkassunerna var att mäta trycket mot dessa i en nivå motsvarande
laddningens läge medan tryckgivarna placerade på marken fungerade som referensmätningar.
Givare i betongkassuner placerades i urborrat hål såsom schematiskt visas i Figur 2.7. I byggnad A
placerades även två givare (BA6L och BA7L) nära ena hörnet, jämför Figur 2.5 med avsikt att över-
siktligt söka fånga den diffraktionseffekt som var att förvänta här. Av Figur 2.7 framgår även metod
för namngivning av de olika givarna.

-- 17 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
8
= givare i hörn 	= givare på vägg
0,20
BA7L
BA6L
Metod för namngivning:
Building 	A-D
Position 	1-7
Height: 	L (Low), C (Centre), R (Roof)
BA1C → Byggnad A, position 1, Centre
Figur 2.7 	Schematisk placering av tryckgivare i betongkassun.
I Figur 2.8 presenteras en sammanställning av det horisontella avståndet, beaktande betong-
kassunernas position, mellan laddning och tryckgivare för byggnad A och B. För givare placerade
bakom hörn har den kortaste vägen mellan laddning och givare beräknats.
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
10
BA1L 	BA2L 	BA3L 	BA4L 	BB1L 	BB2L 	BB3L 	BB4L
Givare
Horisontellt avstånd [m]
#1
#2
#3
#4
Figur 2.8 	Horisontellt avstånd från laddning till givare för byggnad A och B. Byggnadernas
position har beaktats i framtagen sträcka.
Markgivarna placerades på olika sätt vid respektive laddning, se Figur 2.9. I stort sett bibehölls
dock det relativa inbördes avståndet mellan givarna för de olika laddningarna för att underlätta
jämförelse mellan de olika fallen.

-- 18 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
9
Läge #1
#1 A 	B
C 	D
2,3	4,6 	1,15	6,9
FF02	FF03	FF12 	FF01
FF13
Läge #2
#2
A 	B
C 	D
2,3	4,6 	1,15 	2,3 	4,6
FF13	FF12	FF01	FF02	FF03
Läge #3
#3
A 	B
C 	D
2,3	4,6 	1,15 	2,3 	4.6
FF12 	FF13	FF02 FF01	FF03
Läge #4
#4
A 	B
C 	D
2,3	4,6 	1,15	6,9
FF12 	FF03 	FF02 FF01
FF13
Figur 2.9 	Placering av frifältsgivare (FF = FriFält) på marken. Givarnas lägen varierade
beroende på vilken laddning som detonerade.

-- 19 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
10
2.2 	Sprängladdning
Effekten av två olika typer av laddningar studerades i försöksserien – högexplosiv laddning PETN
samt termobarisk laddning (TBX). I denna rapport behandlas dock enbart resultat från PETN och
för information om försök med termobarisk laddning hänvisas till den rapport som ges ut av
Forsvarsbygg.
Laddningarna bestod av 0,4 kg respektive 1,6 kg PETN av typen Sprängdeg m/46. Sprängdegen
bestod av omkring 86 % pentyl uppblandat med cirka 14 % mineralolja och hade en densitet på
omkring 1,50 kg/m 3 . Laddningarna formades sfäriska genom att de placerades i glasbehållare av
lämplig storlek. Glassfärernas massa uppgick till 0,07 kg samt 0,30 kg för 0,4 kg respektive 1,6 kg
laddningarna och hade, via sin låga hållfasthet, en försumbar effekt på den resulterande stötvågen.
En översikt av detonerade laddningar ges i Tabell 2.1.
Tabell 2.1 	Översikt av typ, storlek samt läge hos laddningar i försöksserien. I denna rapport
behandlas dock endast resultat från PETN-laddningar och då främst de på 0,4 kg.
Skott 	Laddningens läge 	Laddning 	Höjd över marken
1 	#1 	0,4 kg PETN 	0,20 m
2 	#1 	1,6 kg PETN 	1,15 m
3 	#1 	1,4 kg TBX 	1,15 m
1 	#2 	0,4 kg PETN 	0,20 m
2 	#2 	1,6 kg PETN 	1,15 m
3 	#2 	1,4 kg TBX 	1,15 m
1 	#3 	0,4 kg PETN 	0,20 m
2 	#3 	1,6 kg PETN 	1,15 m
3 	#3 	1,6 kg TBX 	1,15 m
1 	#4 	0,4 kg PETN 	0,20 m
2 	#4 	1,6 kg PETN 	1,15 m
3 	#4 	1,4 kg TBX 	1,15 m
I ConWep (1992) anges den ekvivalenta massan, se Johansson och Laine (2012), för pentyl
(pentolite) 	som 	ηP = 1,42 	för 	tryck 	samt 	ηI = 1,00 	för 	impulstätheten. 	Vid 	framtagning 	av
resulterande tryck och impulstätheter används i ConWep dock ett medelvärde av detta, dvs.
21	,	1
2
00	,	1	42	,	1
2 =
+
=
+
= I	P
ConWep
η
	η
η 	(2.1)
Med beaktande av detta samt andelen PETN i sprängdegen fås en omräkningsfaktor λ till mängd
TNT som
041	,	1	21	,	1	86	,	0 	=	⋅	=	⋅	= 	ConWep	TNT	
η
	χ
	λ 	(2.2)
vilket innebär att 0,4 kg och 1,6 kg sprängdeg enligt ConWep motsvarar 0,416 kg respektive
1,665 kg TNT.

-- 20 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
11
2.3 	Resultat
2.3.1 	Orientering
I 	detta 	avsnitt 	jämförs 	resulterande 	tryck-tidssamband 	för 	valda 	kombinationer 	av
laddningsplacering och givarläge för laddning på 0,4 kg PETN. En fullständig presentation av
samtliga försöksdata ges i diagram- och tabellform i bilaga A respektive B.
2.3.2 	Frifältstryckgivare – jämförelse med ConWep och olika lägen
ConWep (1992) är ett amerikanskt program där empiriska samband som framtagits utgående från
framförallt amerikanska försök samlats. I ConWep redovisas bland annat resultat från luftstötvåg
vid fri utbredning och detta används här som jämförelse med erhållna försöksdata. Som framgår av
Figur 2.9 var de flesta frifältstryckgivarna (FF01 till FF13) placerade i en rak linje med fri sikt från
laddningen, 	vilket 	möjliggör 	en 	jämförelse 	med 	ConWep 	under 	antagande 	av 	hemisfärisk
(halvsfärisk) utbredning. En sammanställning av stötvågsparametrar erhållna från försök och de
som predikteras i ConWep ges i Tabell 2.2 och Figur 2.10.
Tabell 2.2 	Jämförelse av stötvågsparametrar från frifältsgivare (givare FF01 till FF13) i försök
och ConWep för laddning på 0,4 kg PETN, se även sammanställning i Figur 2.10.
Källa 	R 	Z 	P s+ 	is+ 	ta 	T+
[m] 	[m/kg1/3
] 	[kPa] 	[Pas] 	[ms] 	[ms]
#1 -FF01 	1,15 	1,54 	482 	113 	0,68 	0,61
#2 -FF01 	1,15 	1,54 	857 	119 	0,60 	0,53
#3 -FF01 	1,15 	1,54 	610 	147 	0,63 	0,90
#4 -FF01 	1,15 	1,54 	416 	92 	0,68 	0,67
ConWep 	1,15 	1,54 	518 	128 	0,78 	1,60
#1 -FF02 	2,3 	3,08 	168 	57 	2,62 	1,31
#2 -FF02 	2,3 	3,08 	161 	69 	2,53 	1,52
#2 -FF12 	2,3 	3,08 	112 	64 	2,64 	1,39
#3 -FF02 	2,3 	3,08 	91 	70 	2,57 	1,09
#3 -FF12 	2,3 	3,08 	92 	63 	2,67 	1,55
#4 -FF02 	2,3 	3,08 	119 	67 	2,55 	1,49
ConWep 	2,3 	3,08 	109 	67 	2,77 	2,16
#1 -FF03 	4,6 	6,16 	47 	41 	8,17 	1,94
#2 -FF03 	4,6 	6,16 	41 	34 	8,02 	2,49
#2 -FF13 	4,6 	6,16 	47 	56 	8,16 	2,25
#3 -FF03 	4,6 	6,16 	45 	48 	7,92 	3,33
#3 -FF13 	4,6 	6,16 	37 	58 	8,25 	3,71
#4 -(FF03) 	4,6 	6,16 	47 	46 	8,15 	2,30
ConWep 	4,6 	6,16 	30 	37 	8,40 	3,05
#1 -FF12 	6,9 	9,24 	20 	24 	14,30 	3,16
#4 -(FF12) 	6,9 	9,24 	38 	28 	13,95 	2,30
ConWep 	6,9 	9,24 	17 	25 	14,60 	3,48

-- 21 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
12
10
100
1 000
10 000
1 	10
Övertryck,
 Ps	+ [kPa]
Skalat avstånd, Z [m/kg1/3]
ConWep
läge #1
läge #2
läge #3
läge #4
(a)
10
100
1 000
1 	10
Oreflekterad impulsintensitet,
 is	+ [Pas]
Skalat avstånd, Z [m/kg1/3]
ConWep
läge #1
läge #2
läge #3
läge #4
(b)
0
1
10
100
1 	10
Ankomsttid,
 ta [ms]
Skalat avstånd, Z [m/kg1/3]
ConWep
läge #1
läge #2
läge #3
läge #4
(c)
0
1
10
1 	10
Varaktighet,
 t + [ms]
Skalat avstånd, Z [m/kg1/3]
ConWep
läge #1
läge #2
läge #3
läge #4
(d)
Figur 2.10 	Jämförelse av försöksresultat och ConWep (1992) för (a) oreflekterat övertryck, (b)
oreflekterad impulstäthet, (c) ankomsttid samt (d) varaktighet. Försöksresultat listas
även i Tabell 2.2.
För övertrycket är överensstämmelsen förhållandevis god på korta avstånd av 1,15 m eller 2,3 m,
medan den blir sämre för längre avstånd på 4,6 m och 6,9 m, se Figur 2.10a. En bidragande orsak
till detta är inverkan av fördämning som fås av intilliggande betongkassuner men detta bedöms inte
vara orsaken till hela skillnaden. Det ska dock poängteras att det i ett försök råder viss osäkerhet i
erhållna tryckvärden eftersom det på grund av sin korta varaktighet kan vara svårt att fullständigt
fånga initialtryckets storlek. En säkrare metod är därför att jämföra impulstätheterna med varandra
och av Figur 2.10b framgår att dessa stämmer relativt väl mellan försök och ConWep. Ankomst-
tiderna stämmer bra, framförallt för avstånd ≥ 2,3 m, medan varaktigheten genomgående över-

-- 22 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
13
skattas i ConWep jämfört med försöksresultat. Sammantaget kan dock konstateras att ConWep
genererar en godtagbar prediktion av förväntade stötvågsparametrar i de aktuella fallen.
I Figur 2.11 och Figur 2.12 jämförs tryck-tidssamband från försök med ConWep för laddning
0,4 kg PETN i läge #1 och #4 för ett avstånd av 2,3 m respektive 6,9 m. Av detta framgår att tryck-
tidssambanden från försök är betydligt ojämnare än vad som fås från ConWep. Vidare kan
konstateras att inverkan av fördämningseffekter, dvs. förhindrad fri utbredning av stötvågen, gör sig
tydligt märkbara för ett avstånd om 6,9 m.
-40
-20
0
20
40
60
80
100
120
140
160
180
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0 	3.5 	4.0 	4.5 	5.0
Övertryck,
 Ps+ [kPa]
Tid, t [ms]
#1 - FF02
#4 - FF02
ConWep
#1 	A 	B
C 	D
2.3 m
FF02
#4
2.3 m
FF02
Figur 2.11 	Jämförelse av tryck-tidskurva från försök och ConWep (1992) för avståndet 2,3 m
från laddning för laddning 0,4 kg PETN i läge #1 och #4.
-10
-5
0
5
10
15
20
25
30
35
40
12 	13 	14 	15 	16 	17 	18 	19 	20
Övertryck,
 Ps+ [kPa]
Tid, t [ms]
#1 - FF12
#4 - FF12
ConWep
#1 	A 	B
C 	D
6.9 m
FF12
#4
6.9 m
FF12
Figur 2.12 	Jämförelse av tryck-tidskurva från försök och ConWep (1992) för avståndet 6,9 m
från laddning för laddning 0,4 kg PETN i läge #1 och #4.

-- 23 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
14
2.3.3 	Tryckgivare på byggnader - jämförelse av olika lägen
Den valda placeringen av betongkuberna samt placering av laddningens och givarnas lägen gör det
möjligt att jämföra resulterande tryck mellan olika laddningar. Laddning i läge #1 och #3 samt läge
#2 och #4 är lämpliga att jämföras med varandra, se Figur 2.5. Studerade kombinationer (0,4 kg
PETN och givare nära mark) sammanfattas i Tabell 2.3 och jämförs i Figur 2.13 till Figur 2.21. De
tryckutslag som kan ses vid en tidpunkt nära noll är det brus som uppstod i försöken i samband med
att laddningen detonerade. Dessa värden är således enbart fiktiva men har i här presenterat material
inte rensats bort.
Generellt gäller att överensstämmelsen mellan olika skott är god. Detta visar på en repeterbarhet i
försöken som är värdefull för den jämförelse med resultat från finita elementanalyser som görs i
kapitel 3.
Tabell 2.3 	Kombination av laddningens läge och givarplacering som jämförs med varandra.
Kombination 	Laddningens
läge
Givare 	Kombination 	Laddningens
läge
Givare
A1 	#1 	BA4L 	B1 	#2 	BA6L
#3 	BA3L 	#2 	BA7L
A2 	#1 	BA1L 	B2 	#2 	BA3L
#1 	BA3L 	#2 	BA4L
#3 	BA2L 	#4 	BA2L
#3 	BA4L 	#4 	BA3L
A3 	#1 	BA7L 	#4 	BB3L
#3 	BA6L 	#4 	BB4L
A4 	#1 	BA6L 	B3 	#2 	BA1L
#3 	BA7L 	#2 	BA2L
A5 	#1 	BA2L 	#4 	BA1L
#3 	BA1L 	#4 	BA4L
A6 	#1 	BB1L 	#4 	BB1L
#1 	BB3L 	#4 	BB2L

-- 24 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
15
-500
0
500
1 000
1 500
2 000
2 500
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
#1 - BA4L
#3 - BA3L
A 	B
C 	D
#1
#3
BA3L
BA4L
Figur 2.13 	Tryck-tidssamband för givare enligt kombination A1 i Tabell 2.3.
-30
-20
-10
0
10
20
30
40
50
60
70
80
0 	5 	10 	15 	20 	25 	30
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
#1 - BA1L
#1 - BA3L
#3 - BA2L
#3 - BA4L
A 	B
C 	D
#1
#3
BA1L
BA3L
BA2L	BA4L
Figur 2.14 	Tryck-tidssamband för givare enligt kombination A2 i Tabell 2.3. Givare #1 – BA1L
fungerade inte.

-- 25 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
16
-100
0
100
200
300
400
500
600
700
800
900
1 000
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
#1 - BA7L
#3 - BA6L
A 	B
C 	D
#1
#3
BA6L
BA7L
Figur 2.15 	Tryck-tidssamband för givare enligt kombination A3 i Tabell 2.3.
-40
-20
0
20
40
60
80
100
120
140
160
0 	2 	4 	6 	8 	10 	12 	14 	16 	18 	20
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
#1 - BA6L
#3 - BA7L
A 	B
C 	D
#1
#3
BA6L
BA7L
Figur 2.16 	Tryck-tidssamband för givare enligt kombination A4 i Tabell 2.3.

-- 26 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
17
-10
-8
-6
-4
-2
0
2
4
6
8
10
12
14
16
0 	10 	20 	30 	40 	50 	60
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
#1 - BA2L
#3 - BA1L
A 	B
C 	D
#1
#3
BA1L
BA2L
Figur 2.17 	Tryck-tidssamband för givare enligt kombination A5 i Tabell 2.3.
-10
-8
-6
-4
-2
0
2
4
6
8
10
12
14
16
0 	10 	20 	30 	40 	50 	60
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
#1 - BB1L
#1 - BB3L
A 	B
C 	D
#1
BB3L
BB1L
Figur 2.18 	Tryck-tidssamband för givare enligt kombination A6 i Tabell 2.3.

-- 27 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
18
-100
-50
0
50
100
150
200
250
300
350
400
0 	2 	4 	6 	8 	10 	12 	14 	16 	18 	20
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
#2 - BA6L
#2 - BA7L
A 	B
C 	D
#2
BA6L
BA7L
Figur 2.19 	Tryck-tidssamband för givare enligt kombination B1 i Tabell 2.3. Givare #2 – BA6L
fungerade inte.
-100
-50
0
50
100
150
200
250
300
0 	2 	4 	6 	8 	10 	12 	14 	16 	18 	20
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
#2 - BA3L
#2 - BA4L
#4 - BA2L
#4 - BA3L
#4 - BB3L
#4 - BB4L
A 	B
C 	D
#2 	#4
BA3L 	BB3L
BA2L BB4L	BA4L
Figur 2.20 	Tryck-tidssamband för givare enligt kombination B2 i Tabell 2.3.

-- 28 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
19
-10
-8
-6
-4
-2
0
2
4
6
8
10
12
14
16
0 	10 	20 	30 	40 	50 	60
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
#2 - BA1L
#2 - BA2L
#4 - BA1L
#4 - BA4L
#4 - BB1L
#4 - BB2L
A 	B
C 	D
#2 	#4
BA1L 	BB1L
BA2L 	BB2L	BA4L
Figur 2.21 	Tryck-tidssamband för givare enligt kombination B3 i Tabell 2.3.
Vid jämförelse av tryckresultaten bör det noteras att omgivningens randvillkor för de jämförda
kombinationerna inledningsvis är identiska och att det därmed är möjligt att inledningsvis göra en
direkt jämförelse av tryck-tidssambanden. Efter en kort tid avviker dock tryckkurvorna från
varandra, vilket kan förklaras med att den frisläppta energin reflekterats mot omgivningen och ger
upphov till en komplicerad serie av interagerande stötvågor.
Ovanstående 	fenomen 	framgår 	tydligt 	av 	kombination 	A4 	och 	A6 	i 	Figur 2.16 	respektive
Figur 2.18. I bägge kombinationerna sammanfaller det initiala tryck-tidssambandet mycket väl med
varandra för att vid omkring 8 ms (A4) respektive 21 ms avvika från varandra. I kombination A4
beror avvikelsen på att det för laddning i läge #3 inom kort uppstår en reflekterande stötvåg från
byggnad C som ger ett nytt tryckutslag. För kombination A6 fås avvikelsen av motsvarande
anledning när den reflekterande stötvågen från byggnad C når givare BB3L, se Figur 2.22.
A 	B
C 	D
BA6L
BA7L
#3
#1
reflekterad
våg
initiell våg
(a)
A 	B
C 	D
#1
BB3L
BB1L
reflekterad våg
initiell våg
(b)
Figur 2.22 	Schematisk skiss av stötvågornas väg till studerade givare för (a) kombination A4
och (b) kombination A6, se Figur 2.16 respektive Figur 2.18.

-- 29 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
20
3 	Analyser i Autodyn
3.1 	Modellering
3.1.1 	Orientering
Här utförda explosionsanalyserna har gjorts i det generella finita elementprogrammet Autodyn,
Century Dynamics (2004). Autodyn är en så kallad hydrokod vilket innebär att den kombinerar
tekniker inom finita differens, finita element samt finita volym. Detta ger möjlighet att simulera
materialrörelse på flera olika sätt och i här utförda analyser har en så kallad Eulerteknik använts.
Enkelt uttryckt innebär detta att den studerade geometrin byggs upp av ett fast nät som materialet
flödar genom. Dvs. i Eulerteknik deformeras aldrig nätet utan varje element bibehåller hela tiden sin
volym medan materialet flödar mellan olika element baserat på en jämvikt av massa, rörelsemängd
och energi.
I detta arbete har analyser av stötvågens utbredning i luften samt interaktion med stela ytor utförts.
Detta görs genom simulering av detonation av sprängämnet varvid stötvågor breder ut sig i den
omgivande luften på grund av den plötsliga energifrigörelsen. För att generera detta i Autodyn
används en fluid bestående av en mix av två material: sprängämne (PETN) och luft.
Samtliga analyser genomfördes innan försöken utfördes vilket innebär att försöksresultaten kan
användas för att validera hur väl Autodyn lyckas fånga stötvågens utbredning och magnitud i en
komplex omgivning motsvarande den i en bebyggelse.
3.1.2 	Laddning
3.1.2.1 	PETN i Autodyn
I Autodyn finns ett antal olika fördefinierade materialval för sprängämnet PETN. Det som skiljer
sig mellan dessa är framförallt sprängämnets densitet, vilka anges som
• 	ρ = 0,88 kg/m 3
• 	ρ = 1,26 kg/m 3
• 	ρ = 1,50 kg/m 3
• 	ρ = 1,77 kg/m 3
Vad detta innebär för resulterande tryck och impulstätheter var dock oklart när analyserna skulle
genomföras varför kompletterande analyser, simulerande fri sfärisk avlastning vid detonerad PETN,
utfördes. Tryck och skalad impulstäthet för dessa jämförs med de för TNT som funktion av skalat
avstånd Z i Figur 3.1, där värdena för TNT är hämtade från Johansson och Laine (2012). Från detta
samband kan sedan en ekvivalentvikt TNT tas fram för PETN, vilket redovisas i Figur 3.2.
Denna jämförelse visar att skillnaden i tryck och impulstäthet blir ungefär konstant för skalat
avstånd Z ≥ 2 m/kg1/3 . Detta samt motsvarande ekvivalenta vikt listas i Tabell 3.1. Av detta framgår
att PETN i Autodyn med densitet 1,50 eller 1,77 kg/m 3 nästan ger identiska resultat. Det kan även
konstateras att den ekvivalenta vikten blir i princip densamma för tryck och impulstäthet, något som
skiljer sig mot vad som anges i avsnitt 2.2 där ηP = 1,42 och ηI = 1,00. Den ekvivalenta vikten för

-- 30 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
21
tryck stämmer således bra med vad som anges i ConWep men inte för impulstätheten. Anledningen
till denna avvikelse är oklar och behandlas inte mer ingående här. Det kan dock påpekas att det i
Johansson och Laine (2012) tidigare konstaterats att ConWep ger omkring 20 % högre impulstäthet än
Autodyn för TNT samt att detta förmodligen beror på en felaktig utvärdering för värdena som används i
ConWep. En del av skillnaden i ηI kan således eventuellt förklaras med att dessa felaktiga impulsvärden även
legat till grund för ηI = 1,00 i ConWep.
10
100
1 000
1 	10
Övertryck,
 Ps	+ [kPa]
Skalat avstånd, Z [m/kg1/3]
PETN - 1.77
PETN - 1.50
PETN - 1.26
PETN - 0.88
TNT
(a)
10
100
1 000
1 	10
Skalad impulstäthet,
 is	+ / W1/3 [Pas / kg
1/3
]
Skalat avstånd, Z [m/kg1/3]
PETN - 1,77
PETN - 1,50
PETN - 1,26
PETN - 0,88
TNT
(b)
Figur 3.1 	Samband mellan (a) övertryck och (b) skalad impulstäthet och skalat avstånd Z i
Autodyn vid fri sfärisk avlastning för olika typer av sprängämnet PETN samt TNT.
1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
1.8
1.9
2.0
1 	10
Ekvivalentvikt TNT [kg]
Skalat avstånd, Z [m/kg1/3]
PETN - 1.77
PETN - 1.50
PETN - 1.26
PETN - 0.88
TNT
Övertryck
(a)
1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
1.8
1.9
2.0
1 	10
Ekvivalentvikt TNT [kg]
Skalat avstånd, Z [m/kg1/3]
PETN - 1.77
PETN - 1.50
PETN - 1.26
PETN - 0.88
TNT
Impulstäthet
(b)
Figur 3.2 	Ekvivalentvikt TNT för tryck och impuls som funktion av skalat avstånd Z i Autodyn
vid fri sfärisk avlastning för olika typer av sprängämnet PETN samt TNT.

-- 31 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
22
Tabell 3.1 	Medelkvot 	av tryck och 	impulstäthet 	för 	sprängämnet 	PETN 	och 	TNT 	enligt
Figur 3.1 och Figur 3.2 för 2 ≤ Z 10 m/kg1/3 .
PETN 	Kvot PETN / TNT 	Ekvivalent vikt
Densitet
[kg/m 3 ]
Tryck
[-]
Impulstäthet
[-]
Tryck
[-]
Impulstäthet
[-]
0,88 	1,19 	1,25 	1,35 	1,36
1,26 	1,22 	1,29 	1,42 	1,44
1,50 	1,23 	1,30 	1,44 	1,46
1,77 	1,24 	1,30 	1,45 	1,45
3.1.2.2 	Sprängämne i explosionsanalys
För att avgöra vilken typ samt vilken mängd sprängämne som ska användas i Autodyn för att
simulera försöken med explosion i gatukorsning behövs en omräkning enligt nedan.
Vi är intresserade av att beräkna densiteten ρp hos sprängämnet pentyl, vilket kan tecknas som
p
p
p V
m
=
	ρ 	(3.1)
där mp och Vp är pentylens massa respektive volym. Massan mp kan skrivas som
M	m p 	⋅	=
α 	(3.2)
där α är viktprocent pentyl i den totala massan M (här används α = 0,85). Pentylens volym Vp är
mo	p 	V	V	V 	−	= 	(3.3)
där V är den totala volymen och Vmo är mineraloljans volym. Den totala volymen kan även uttryckas
som 
ρ
M
V = 	(3.4)
där ρ är den totala sammansättningens (sprängdegens) densitet, och Vmo kan skrivas som
mo
p
mo
m	M
V
ρ
−
= 	(3.5)
där ρmo är mineraloljans densitet.

-- 32 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
23
Med uttrycken i (3.2) till (3.5) insatta i (3.1) kan denna slutligen skrivas om som
( 	)	
α
	ρ
	ρ
ρ
	ρ
	α
ρ −	−
⋅	⋅
= 1	mo
mo
p 	(3.6)
vilket således kan användas för att uppskatta vilken densitet pentyl har.
Enligt avsnitt 2.2 är densiteten ρ för sprängdeg ungefär 1,5 kg m 3 . Densitet för aktuell mineralolja
är något oklar men borde vara mindre än för vatten. För rapsolja uppgår densiteten till omkring
0,9 kg/m 3 vilket approximativt används här för ρmo.
Dessa värden insatta i ekvation (3.6) ger slutligen att ρp = 1,7 kg/m 3 , vilket är nära det PETN i
Autodyn som har ρ = 1,77 kg/m 3 . Det har i avsnitt 3.1.2.1 även konstaterats att skillnaden i tryck
och 	impulstäthet 	är 	ungefär 	densamma 	oberoende 	av 	om 	PETN 	med 	ρ = 1,50 kg/m 3 eller
ρ = 1,77 kg/m 3 används i Autodyn. Kombinerat ger dessa två observationer att det i simuleringarna
av explosion i gatukorsning i Autodyn används sprängämne PETN med ρ = 1,77 kg/m 3 . Mängden
sprängämne 	sattes 	i 	analyserna 	till 	0,86 ∙ 0,4 = 0,344 kg 	och 	0,86 ∙ 1,6 = 1,376 kg 	för 	liten
respektive stor laddning (86 % pentyl).
I utförda analyser har luftens egenskaper modellerats som en ideal gas medan explosivämnet
modellerads 	med 	användandet 	av 	tillståndsekvationen 	Jones-Wilkins-Lee (JWL), 	se Century
Dynamics (2004), med en automatisk omvandling till en tillståndsekvation för ideal gas när
explosivämnet har nått en kompression på –0,95. I steg 1 och 2, dvs. i de en- och tvådimensionella
modellerna, användes en multimateriell eulerlösare (Multi-Material Euler Solver) där den initiella
detonationsfasen simulerades med en blandning av explosivämne och luft. I samband med att
analysen övergick till en tredimensionell modellering i steg 3 konverterades dock explosivämnet till
luft för att möjliggöra 	användandet av en effektivare lösare via Autodyns ”Ideal-Gas-EOS-Only
Euler FCT solver”. En sammanställning av nyttjade materialdata för luft och sprängämne ges i
Tabell 3.2.
Tabell 3.2 	Materialdata för luft och explosivämne PETN 1.77 i Autodyn.
Luft 	PETN 1.77
ρ0 	1,226·10-3 (g/cm 3 ) 	ρ0 	1,77 (g/cm 3 )
γ 	1,4 	C-J Detonationshastighet 8 300 (m/s)
P 0 	101,3 (kPa) 	C-J Energiintensitet 	1,01·107 (kJ/m 3 )
C-J Tryck 	3,35·10 7 (kPa)
3.1.3 	Modelleringsteknik
Varje analys utfördes i flera separata steg där vald modell anpassades att vara så enkel som möjligt
via användandet av en kombination av analyser utförda i en- två- eller tre dimensioner, se Figur 3.3.
Vidare användes, där så var möjligt, symmetrivillkor för att minska modellens storlek. Den
inledande explosionsanalysen, steg 1, utfördes med användande av ett endimensionellt, kilformat

-- 33 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
24
elementnät 	som 	simulerar 	stötvågens 	sfäriska 	utbredningen 	innan 	den 	når 	fram 	till 	någon
reflekterande yta. Därefter görs en omvandling från endimensionell till tvådimensionell modell
(engelska: remapping) där en axialsymmetrisk modell, steg 2, nyttjas och reflexionen mot ytor i ett
plan kan beaktas. När stötvågens utbredning når så långt att axialsymmetri inte längre är tillräckligt
för att beskriva beteendet görs en omvandling till en tredimensionell modell, steg 3.
Steg 1:
1D kilmodell
Steg 2:
2D Axialsymmetrisk modell
Steg 3:
3D modell, symmetri
Figur 3.3 	Schematisk bild av uppdelning i olika steg för den numeriska modelleringen i
Autodyn.
I den tredimensionella numeriska modellen representeras den fysiska domänen av rektangulära,
tredimensionella 	lådvolymer 	vilka 	fylls 	med 	kubiska, 	linjära 	element. 	Storleken 	hos 	dessa
lådvolymer varierar beroende på laddningens läge, möjligheten att använda symmetrirandvillkor
samt hur långt stötvågen propagerat i analysen. När stötvågen propagerat till lådvolymens rand
utökas volymen på ett sådant sätt att stötvågens utbredning hela tiden innesluts i den modellerade
volymen. Aktuella trycknivåer i den befintliga lådvolymen räknas om till den nya, större volymen.
En typisk serie i fyra delar av sådana lådvolymer skulle kunna ha en ungefärlig domänvolym på
(2 m)3 , (4 m)3 , (8 m)3 and (16 m)3 , se Figur 3.4. Storleken på valt elementnät beror framförallt på i
vilket skede analysen befinner sig samt på antalet element som används i modellerat nät. I
modelleringen söktes det maximalt tillåtna antalet element – omkring 4,5 miljoner stycken –
användas vilket resulterade i en kubisk elementstorlek med en sida på omkring 10 mm i den första
fasen (steg 3), jämför figur 3.4. Vid respektive omvandling från en volym till en annan dubblades
elementens storlek i alla sina riktningar, dvs. kubiska element med en storlek på omkring 20 mm
användes för den efterföljande lådvolymen i steg 4. Betongkassunerna och marken modellerads som
stela ytor och i samtliga utan i det sista steget fanns inga behov av randvillkor hos domänens övriga
ytor eftersom stötvågsfronten per definition ännu inte nått fram till dessa. I det avslutande steget,
med maximal modellerad domänvolym, användes dock ett randvillkor vid de fria ytorna som
möjliggjorde ett fritt utflöde av material och tryck.
Varje analys utgjordes av ett flertal steg enligt ovan där nyttjad modell ändrades var eftersom detta
blev nödvändigt. Normalt utförs dessa omvandlingssteg manuellt av användaren men det visade sig
snart vara en alltför tidsödande metodik och behovet av att automatiskt kunna känna av när en
uppdatering av modellens storlek behövde göras blev uppenbar. Därför utvecklades en metodik där
Autodynlänkade Fortranrutiner möjliggjorde identifiering av stötvågfrontens läge. Därmed blev det
också möjligt för Autodyn att känna av stötvågfrontens propagering så att en övergång till en
utökad 	modell 	automatiskt 	kunde 	ske 	innan 	den 	nådde 	fram 	till 	en 	kritisk 	kant 	hos
betongkassunerna eller domänens yttre randvillkor.

-- 34 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
25
Stage 3:
3D modell – Fas 1, plan symmetri
Stage 5:
3D modell – Fas 3
Stage 4:
3D modell – Fas 2, plan symmetri
Stage 6: 3D modell – Fas 4
Figur 3.4 	Uppdelning 	i 	olika 	steg 	för 	den 	numeriska 	modelleringen 	användande 	en
tredimensionell domän i Autodyn. Steg 1 och 2 framgår av Figur 3.3.
3.2 	Resultat
3.2.1 	Tryckresultat
I figur 3.5 och 3.6 ges två exempel på överensstämmelsen mellan försöksdata och resultat från
Autodyn. Av dessa båda figurer kan det dels konstateras att resulterande tryck-tidssamband visar
god överensstämmelse samt att resultaten från Autodyn som förväntat är ”mjukare” än motsvarande
data från försöken. Vidare kan noteras att en plötslig tryckstegring fångas väl om den inträffar kort
tid efter laddningen detonerat men att avsteg från detta sker ju längre bort i tiden som registreringen
sker. En förklaring till detta beteende är att det i analyserna används flera modeller där data överförs
mellan samt att nyttjad elementstorlek ökar med att modellen utökas. Detta medför att modellens
diskretisering inte är tillräckligt noggrann för att helt korrekt fånga den plötsliga stegring som
erhålls när en stötvåg når fram till studerad punkt. Det allmänna beteendet stämmer dock mycket
väl varför denna avvikelse är acceptabel. Slutligen kan konstateras att Autodyns förmåga att återge
korrekta resultat ökar vid låga tryck.

-- 35 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
26
Figur 3.5 	Jämförelse av tryck-tidssamband från försök och Autodyn för 0,4 kg PETN laddning
i läge 1 och givare BA3L.
Figur 3.6 	Jämförelse av tryck-tidssamband från försök och Autodyn för 0,4 kg PETN laddning
i läge 1 och givare FF12.

-- 36 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
27
3.2.2 	Jämförelse med försök
3.2.2.1 	Stötvågsparametrar
Tabell 3.4 ger en sammanställning av stötvågsparametrarna övertryck P+, ankomsttid t a samt positiv
och negativ impulstäthet i + and i – erhållna i Autodyn och försök för 0,4 kg laddningar och givare
placerade på eller nära marken. Impulstätheterna i + och i – definieras enligt ekvation (3.7) och (3.8)
där t end = 50 ms. En fullständig sammanställning av alla givare och samtliga laddningar ges i
tabellform i bilaga B.
Tabell 3.3 	Sammanställning av stötvågsparametrar P+
, t a , i + och i - från Autodyn och försök för
givare nära mark. Ett ”-” indikerar att försöksresultatet inte är tillförlitligt.
Laddning 0,4 kg – läge #1 	Laddning 0,4 kg – läge #2
Givare 	Autodyn 	Försök 	Autodyn 	Försök
P + 	ta 	i+ 	i- 	P + 	ta 	i+ 	i- 	P + 	ta 	i+ 	i- 	P + 	ta 	i+ 	i-
[kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas]
FF01 	656 	0.62 	143 	137 	480 	0.65 	248 	- 	755 	0.61 	155 	152 	859 	0.46 	240 	160
FF02 	129 	2.42 	85 	94 	168 	2.58 	57 	- 	137 	2.41 	86 	98 	161 	2.22 	77 	97
FF03 	32 	7.69 	52 	50 	47 	8.14 	82 	54 	33 	7.72 	50 	51 	41 	7.89 	51 	41
FF12 	14 	13.45 	35 	35 	20 	14.27 	38 	35 	140 	2.36 	167 	168 	111 	2.52 	150 	192
FF13 	16 	9.89 	32 	32 	18 	10.50 	28 	31 	52 	7.62 	74 	72 	47 	8.03 	70 	80
BA1L 	51 	3.71 	61 	67 	- 	- 	- 	- 	12 	7.94 	35 	37 	11 	8.00 	33 	35
BA2L 	7 	9.63 	49 	48 	8 	10.28 	53 	49 	12 	7.94 	62 	63 	12 	8.50 	60 	62
BA3L 	51 	3.71 	113 	115 	63 	3.89 	112 	110 	233 	2.82 	165 	159 	271 	2.90 	190 	176
BA4L 2 100 0.63 	461 	208 1 745 0.63 	429 	- 	233 	2.82 	127 	126 	155 	2.96 	93 	116
BA6L 	94 	1.56 	76 	148 	114 	1.68 	104 	107 	470 	1.43 	206 	173 	- 	- 	- 	-
BA7L 1 221 1.05 	290 	211 	599 	1.02 	187 	452 	470 	1.43 	192 	159 	373 	1.46 	159 	134
BB1L 	6 	15.34 	20 	22 	11 	16.76 	22 	19 	4 	16.59 	21 	22 	6 	17.72 	21 	21
BB2L 	3 	22.00 	21 	20 	3 	23.35 	23 	20 	4 	19.46 	15 	15 	4 	20.62 	16 	15
BB3L 	6 	15.34 	42 	44 	11 	16.63 	45 	44 	24 	13.31 	59 	60 	30 	14.17 	60 	61
BB4L 	14 	13.41 	68 	70 	- 	- 	- 	- 	26 	11.76 	69 	63 	26 	12.23 	67 	62
Laddning 0,4 kg – läge #3 	Laddning 0,4 kg – läge #4
Givare 	Autodyn 	Försök 	Autodyn 	Försök
FF01 	698 	0.62 	226 	184 	610 	0.61 	237 	704 	755 	0.61 	177 	176 	431 	0.56 	168 	210
FF02 	136 	2.38 	140 	141 	93 	2.53 	120 	220 	142 	2.38 	152 	160 	119 	2.43 	141 	167
FF03 	33 	7.74 	76 	77 	45 	7.78 	71 	66 	50 	7.64 	73 	71 	47 	8.02 	54 	118
FF12 	136 	2.38 	137 	141 	93 	2.63 	113 	155 	25 	13.35 	42 	42 	38 	13.73 	40 	41
FF13 	34 	7.61 	114 	112 	37 	8.21 	106 	102 	13 	9.28 	34 	35 	14 	9.63 	35 	28
BA1L 	8 	9.71 	52 	51 	8 	9.81 	49 	47 	13 	7.99 	35 	35 	12 	8.39 	32 	31
BA2L 	52 	3.73 	113 	115 	40 	3.90 	110 	116 	234 	2.83 	155 	154 	110 	2.90 	126 	147
BA3L 2 258 0.63 	505 	235 2 369 0.47 	763 	328 	234 	2.83 	154 	153 	238 	3.00 	131 	191
BA4L 	52 	3.73 	70 	73 	58 	3.81 	73 	74 	13 	7.99 	35 	35 	11 	8.45 	32 	31
BA6L 1 272 1.05 	325 	233 	991 	1.03 	345 	238 	113 	4.66 	126 	125 	113 	4.81 	118 	130
BA7L 	103 	1.61 	70 	132 	146 	1.65 	72 	174 	22 	5.48 	47 	59 	34 	5.84 	52 	60
BB1L 	8 	11.55 	34 	31 	8 	12.34 	32 	27 	13 	7.99 	35 	35 	12 	8.12 	33 	31
BB2L 	5 	13.52 	33 	35 	5 	13.85 	32 	33 	13 	7.99 	35 	35 	12 	7.62 	37 	35
BB3L 	51 	7.93 	115 	112 	54 	8.39 	99 	98 	234 	2.83 	154 	153 	143 	2.87 	124 	144
BB4L 	77 	6.45 	131 	127 	73 	6.89 	122 	118 	234 	2.83 	155 	154 	124 	2.86 	127 	151

-- 37 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
28
( )	∑ ∫	∑ =
+
=
+	+ =	=
n
k
t
t
n
k
k
k	end
k	a
dt	t	P	i	i 1	1
,
,
(3.7)
( )	∑ ∫	∑ =
−
=
−	− =	=
n
k
t
t
n
k
k
k	end
ka
dt	t	P	i	i 1	1
,
,
(3.8)
3.2.2.2 	Koherensmått Coh
För att få en bättre överblick av hur väl resultat från försök och analyser överensstämmer
introduceras här ett koherensmått Coh (engelska: coherence), vilket valts att definieras som
( ) 	( )
−	+ +
−
−	=
∫
Exp	Exp
t
Exp	AD
i	i
dt	t	P	t	P
Coh
end
0
1 (3.9)
där PAD (t) and PExp (t) är trycket som funktion av tiden från Autodyn respektive försök medan i +Exp
and i -Exp är den totala positiva och negativa impulstätheten enligt ekvation (3.7) respektive (3.8).
Med ett koherensmått enligt detta blir det möjligt att relativt direkt jämföra en stor mängd data från
två skilda källor och få ett mått på hur väl de sammanfaller. Med definition enligt ekvation (3.7)
innebär Coh = 1.0 en perfekt överensstämmelse men av jämförelse i Figur 3.7 och Figur 3.8
framgår att Coh ≥ 0.5 fortfarande svarar mot en mycket bra överensstämmelse mellan försök och
analyser.
-20
-10
0
10
20
30
40
50
60
70
80
0 	10 	20 	30 	40 	50
Övertryck,
 Ps+ [kPa]
Tid, t [ms]
Autodyn
Försök
A 	B
C 	D
#1
BA3L
Coh = 0.692
(a)
-20
-10
0
10
20
30
40
50
60
0 	10 	20 	30 	40 	50
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
Autodyn
Försök
Coh = 0.346
A 	B
C 	D
#1	FF03
4.3 m
(b)
Figur 3.7 	Överensstämmelse av resultat från försök och analyser i Autodyn när (a) Coh
≈ 0,70
respektive 	(b) 	Coh
≈ 0,35.

-- 38 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
29
-40
-20
0
20
40
60
80
100
120
140
160
0 	10 	20 	30 	40 	50
Övertryck,
 Ps+ [kPa]
Tid, t [ms]
Autodyn
Försök
A 	B
C 	D
#4	FF02	
Coh = 0.477
(a)
-20
-10
0
10
20
30
40
50
60
70
80
0 	10 	20 	30 	40 	50
Övertryck,
 Ps+ [kPa]
Tid, t [ms]
Autodyn
Försök
A 	B
C 	D
#3
BB3L
Coh = 0.436
(b)
Figur 3.8 	Överensstämmelse av resultat från försök och analyser i Autodyn när Coh
≈ 0,50.
Baserat på detta bedöms Coh ≥ 0,50 svara mot en mycket god överensstämmelse.
Figur 3.9 sammanställer den procentuella andelen av jämförda resultatserier som uppvisar eller
överstiger ett givet värde på Coh medan en fullständig listning för samtliga resultat ges i Tabell 3.3.
Av Figur 3.9b framgår att 65 % av samtliga jämförda tryck-tidssamband (knappt 200) resulterar i
Coh ≥ 0,05, 	dvs. 	något 	som 	utgående 	från 	Figur 3.8 	bedöms 	motsvara 	en 	mycket 	god
överensstämmelse. Utgående från detta kan det konkluderas att Autodyn lyckas mycket väl med att
återskapa de tryck-tidssamband som kan förväntas uppstå vid en explosion i bebyggelse.
0
5
10
15
20
25
0.0 	0.2 	0.4 	0.6 	0.8 	1.0
Andel av
 P(t)
 vid givet
 Coh
 [%]
Coh [-]
0.4 kg
1.6 kg
(a)
0
10
20
30
40
50
60
70
80
90
100
0.0 	0.2 	0.4 	0.6 	0.8 	1.0
Andel av
 P(t)
 högre än givet
 Coh
 [%]
Coh [-]
0.4 kg
1.6 kg
Coh = 0.5
65 %
(b)
Figur 3.9 	Koherensmått Coh för 0,4 kg och 1,6 kg laddningar given som (a) andel av givet Coh
och (b) andel högre än given Coh.Tabell 3.4 	Sammanställning 	av

-- 39 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
30
koherensmått Coh för samtliga givare i de åtta skjutningarna. Ett ”-” indikerar att
försöksresultatet inte är tillförlitligt.
Skott 	#1 	#2 	#4 	#5 	#7 	#8 	#10 	#11
Givare 	Coh 	Coh 	Coh 	Coh 	Coh 	Coh 	Coh 	Coh
FF01 	0,006 	- 	- 	0,134 	0,142 	0,239 	0,273 	0,245
FF02 	0,152 	0,120 	0,525 	0,239 	0,207 	0,248 	0,477 	0,614
FF03 	0,346 	0,515 	0,455 	0,438 	0,545 	0,479 	0,350 	0,425
FF12 	0,519 	0,649 	0,512 	0,543 	0,118 	0,406 	0,525 	0,609
FF13 	0,458 	0,515 	0,552 	0,469 	0,556 	0,684 	0,510 	0,647
BA1L 	- 	0,648 	0,675 	0,641 	0,711 	0,767 	0,658 	0,605
BA2L 	0,640 	0,651 	0,613 	0,604 	0,571 	0,563 	0,428 	0,529
BA3L 	0,692 	0,712 	0,566 	0,475 	0,326 	0,232 	0,382 	0,238
BA4L 	0,262 	0,163 	0,398 	0,483 	0,577 	0,464 	0,574 	0,599
BA6L 	0,409 	0,670 	- 	- 	0,512 	0,382 	0,488 	0,331
BA7L 	0,235 	0,244 	0,477 	0,504 	0,412 	0,466 	0,512 	0,567
BB1L 	0,634 	0,628 	0,723 	0,756 	0,636 	0,706 	0,607 	0,633
BB2L 	0,824 	0,802 	0,696 	0,739 	0,686 	0,723 	0,588 	0,530
BB3L 	0,704 	0,703 	0,636 	0,682 	0,436 	0,691 	0,437 	0,475
BB4L 	- 	0,674 	0,586 	0,647 	0,452 	0,543 	0,462 	0,442
BA1C 	0,705 	0,640 	0,649 	0,614 	0,640 	0,690 	0,618 	0,674
BA3C 	0,642 	0,675 	0,510 	0,327 	- 	- 	- 	-
BA4C 	0,414 	- 	0,551 	0,493 	0,622 	0,496 	0,589 	0,656
BA5R 	0,704 	0,588 	0,572 	0,646 	0,395 	0,468 	0,563 	0,653
BB1C 	0,635 	0,649 	0,751 	0,768 	0,671 	0,710 	0,603 	0,681
BB3C 	- 	0,688 	0,517 	0,611 	0,392 	0,710 	0,414 	0,349
BB4C 	0,616 	0,620 	0,548 	0,650 	0,420 	0,595 	0,473 	0,427
BB5R 	0,642 	0,663 	0,686 	0,692 	0,605 	0,728 	0,519 	0,640
BC2C 	0,617 	0,776 	0,499 	0,643 	0,417 	0,579 	0,404 	0,421
BD2C 	0,771 	0,795 	0,720 	0,726 	0,719 	0,745 	0,554 	0,571

-- 40 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
31
4 	Förenklad analys
4.1 	Orientering
I kapitel 3 visas att Autodyn uppvisar mycket god överrensstämmelse med utförda försök och
därmed utgör ett kraftfullt verktyg för att prediktera resulterande laster från en explosion i
bebyggelse. 	Med 	bakgrund 	av 	detta 	kan 	det 	synas 	onödigt 	att 	även 	efterfråga 	förenklade
analysverktyg. En nackdel med program som Autodyn är dock att de dels är kostsamma och dels
kräver stor kunskap av användaren, vilket medför att det inte alltid är möjligt, eller ens önskvärt, att
använda.
Empiriska och semi-empiriska metoder är i regel mer lättanvända och förser även användaren med
en basförståelse för olika lastsituationer. Detta ska inte underskattas eftersom det också medför en
ökad förståelse för mer komplexa lastsituationer och därmed bidrar till en större förståelse för de
fenomen som kan tänkas uppstå i en sådan situation. En sådan djupare förståelse är också
nödvändig för att förhindra att avancerade beräkningsprogram som Autodyn inte utvecklas till att
fungeras som så kallade ”svarta lådor” där förståelsen av vad som händer däri går förlorad. Enklare
beräkningsverktyg kan också i flera fall vara fullt tillräckliga för att ge en tillräckligt god bild av
resulterande lastnivåer från en komplex explosionsanalys.
Baserat på detta beskrivs i detta kapitel en förenklad, ingenjörsmässig metodik för att bestämma
lastbilden från en explosion som inträffar i en komplex geometrisk omgivning. Syftet med denna är
främst att ge en övergripande men tillräckligt noggrann bild av det resulterande tryck-tidssamband i
en given punkt.
4.2 	Beskrivning av metod
Konceptet för här använd metod är att identifiera framfarten hos de stötvågor som kan tänkas
påverka studerad punkt, modifiera dessa med hänsyn till diffraktion samt slutligen superponera dem
för att få ett slutligt tryck-tidssamband. Konceptet i sig är inte nytt utan förekommer i litteraturen
och här beskriven metod är en vidareutveckling av tankar presenterade i von Rosen (2004).
Tryck-tidssambandet P(t) i en given punkt bestäms via en serie av beräkningar som beskrivs i
punktform nedan samt illustreras schematiskt i Figur 4.1 och Figur 4.2.
1. Definiera samtliga stötvågsvägar Wi, där 1 ≤ i ≤ n, som är av intresse för studerad punkt.
Beräkna det totala avståndet Ri för varje väg från centrum laddning till studerad punkt.
2. Utgå från avståndet Ri och bestäm tillsammans med laddningskarakteristika storleken på
följande stötvågsparametrar: ankomsttid t a, oreflekterat tryck Ps+, Ps-, oreflekterad impuls-
täthet i s+, i s-, varaktighet t + och t - samt avklingningsfaktor
α.
3. Beräkna tryck-tidshistorien Pwi för respektive stötvågsväg med användande av stötvågs-
parametrar framtagna i punkt 2 insatta i ekvation (4.1)1.
1 Felaktig ekvation har angetts för tryck i den negativa fasen i Johansson et al. (2007) i bilaga E, rätt ekvation anges här.

-- 41 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
32
4. Bestäm 	aktuell 	diffraktionskoefficient 	C diff,i 	för 	respektive 	stötvåg 	Wi 	och 	summera
produkterna enligt ekvation (4.2).











+	+	≥
+	<	≤	+




 	+	−
−	⋅
+	−
⋅	⋅	−
+	<	≤	




 	−
−
<
=
−	+
+	+
+	−
	−
−
+
−
+
−
+
−
	−
+
+
−
+
+
t	t	t
t	t	t	t	t	e
t
t	t	t
t
t	t	t
P
t	t	t	t	e
t
t	t
P
t	t
t	P
a
a	a
t
t	t	t
a	a
s
a	a
T
t	t
a
s
a
w 	a
a
i
t	om	,	0
om	,
)	(
1
)	(
9	.	13
om	,	1
om	,	0
)	( 	))	(	(4
)	(	
α
(4.1)
∑=
⋅	=
n
i
w	i	diff 	t	P	C	t	P i
1
, 	)	(	)	( 	(4.2)
Stötvågsparametrar i steg 2 kan bestämmas på olika sätt och berörs närmare i bilaga C. I steg 4 görs
en reducering av trycket Pi (t) med en diffraktionskoefficient C diff,i för samtliga stötvågor Wi. Vilket
värde en sådan reduktionsfaktor ska ha är komplext att bestämma och i detta arbetet har en
approximativ och övergripande metod, baserad på här framtagna försöksresultat, använts. Av detta
har konstaterats att diffraktionskoefficienten approximativt kan skrivas som
m
i	diff	C 	6	,	0	, = 	(4.3)
där m är antal hörn som stötvågen Wi diffrakterar runt, se Johansson et al. (2008) i bilaga E.
A 	B
C 	D
W2
W1
W3
1
10
100
1 000
10 000
100 000
1
10
100
1 000
10 000
100 000
0.1 	1 	10
Skalad oreflekterad impulstäthet,
 is+ [Pas/kg
1/3
]
Oreflekterat övetryck,
 
Ps+ [kPa]
Skalat avstånd, Z [m/kg1/3]
Tryck
Impuls
(a) 	(b)
Figur 4.1 	Schematisk bild av metodik för att bestämma tryck-tidssamband för explosion i
bebyggelse: (a) identifiera aktuella stötvågsvägar, (b) bestäm stötvågsparametrar ur
empiriska samband, se bilaga C.

-- 42 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
33
-20
-10
0
10
20
30
40
50
60
70
80
0 	10 	20 	30
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
R3
R2
R1
(a)
-20
-10
0
10
20
30
40
50
60
70
80
0 	10 	20 	30
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
A 	B
C 	D
W2
W1
W3
(b)
-20
-10
0
10
20
30
40
50
60
70
80
0 	10 	20 	30
Övertryck,
 Ps	+ [kPa]
Tid, t [ms]
A 	B
C 	D
W2
W1
W3
(c)
Figur 4.2 	Schematisk bild av metodik för att bestämma tryck-tidssamband för explosion i
bebyggelse: (a) basvärden för tryck-tidssamband enligt ekvation (4.1), (b) tryck-
tidssamband reducerade med hänsyn till diffraktion C diff,i och (c) summering av
reducerade tryck-tidssamband enligt ekvation (4.2).Det ska poängteras att inverkan
av reflekterat tryck och impulstäthet inte har beaktats i här beskriven metod, dvs. nyttjade
stötvågskarakteristika har baserats på enbart oreflekterade värden2. Detta är ett medvetet val och
syftar till att förenkla metoden så mycket som möjligt – dess främsta syfte är framförallt att
presentera en övergripande lastbild snarare än en fullständigt riktig sådan. Jämförande beräkningar
har också påvisat att denna approximation stämmer tämligen väl med observerade tryckvärden. För
en närmare illustration och kommentarer av här given metodik hänvisas till Johansson et al. (2008) i
bilaga E och det beräkningsexempel som visas där.
2 I en punkt som utsätts för en direktverkande stötvåg, t.ex. givare BA4L för laddning i läge #1, ska reflexionen beaktas.

-- 43 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
34
5 	Slutsatser
I syfte att studera inverkan på explosionslasten i en komplex geometrisk omgivning har en
försöksserie i skala 1:5 av explosion i gatukorsning utförts. Två olika laddningsvikter, 0,4 kg och
1,6 kg PETN, placerade i vardera fyra olika positioner användes för att generera stötvågor, vilka
registrerades med 25 tryckgivare för varje skott.
Innan försöken genomfördes simulerades explosionerna i det generella finita elementprogrammet
Autodyn. Avsikten med detta var att jämföra försöks- och analysresultat för att validera om
Autodyn klarar av att tillfredsställande beskriva de tryckpåkänningar som uppstår vid explosion i
bebyggelse. Analyser i Autodyn genomfördes med en stegvis utbyggd modell vilken ökade i
omfång var eftersom det var nödvändigt med hänsyn till den av explosionen skapade stötvågens
utbredning. För att underlätta denna process utvecklades en Fortranstyrd subrutin i Autodyn som
kände av behovet av en volymökning i modellen, något som möjliggjorde en helt automatiserad
analysgång.
I jämförelsen mellan försök och analyser introduceras ett koherensmått Coh med vilket det är
möjligt att enkelt jämföra en stor mängd data från två källor. Baserat på detta visas det att
överensstämmelsen mellan försök- och analysresultat är mycket god. Således konstateras det att
Autodyn är ett kraftfullt verktyg som med framgång kan användas för att simulera vad som händer i
en explosion i bebyggelse.
Slutligen beskrivs en förenklad beräkningsmetod med vilken det är möjligt att via beräkningar i
Excel snabbt få en grov men ändå acceptabel uppfattning om vilken trycklast som verkar i en given
punkt vid en explosion i en komplex geometrisk omgivning. Observerade lastvärden skiljer sig med
omkring 	20 % 	mot 	vad 	som 	observerats 	i 	försök 	vilket 	betraktas 	vara 	en 	tillräckligt 	god
noggrannhet i sammanhanget.

-- 44 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
35
6 	Referenser
Baker W.E (1973): Explosions in Air. University of Texas Press, Austin, USA.
Century Dynamics (2004): AUTODYN Revision 5.0, San Ramon, Kalifornien, USA.
ConWep (1992): ConWep – Collection of conventional weapons effects calculations based on
TM 5-855-1, 	Fundamentals 	of 	Protective 	Design 	for 	Conventional 	Weapons, 	U.S. 	Army
Engineer Waterways Experiment Station, Vicksburg, USA.
Johansson M. och Laine L. (2012a): 	Bebyggelsens 	motståndsförmåga 	mot 	extrem 	dynamisk
belastning, 	Del 1: 	Last 	av 	luftstötvåg. 	Myndigheten 	för 	samhällsskydd 	och 	beredskap.
Publ.nr MSB449, Karlstad.
Johansson M., Larsen O.P., Laine L. (2007): Explosion at an intersection in an Urban Environment
– Experiments and analyses. Proceedings of the 78th Shock and Vibration Symposium,
Philadelphia, PA, USA.
Johansson M., Larsen O.P., Laine L. (2008): Experiments and Analyses of Explosion at an Inter-
section. Proceedings of 20 th Symposium on the Military Aspects of Blast and Shock, Oslo,
Norge.
von Rosen B., Guilbeault E., Contesabile E. (2004): A preliminary investigation into the interaction
of shock waves behind a simple rectangular structure. Proceedings of 18 th Symposium on the
Military Aspects of Blast and Shock, Bad Reichenhall, Tyskland.
PSADs (1998): Protective Structures Automated Design System (PSADs), Version 1.0, ATTN:
CEMP-ET 20, Departments of Special Weapons Agency (DSWA), Army, Navy, and Air Force,
U.S. Army Corps of Engineers, USA.

-- 45 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.1
Bilaga A Jämförelse av tryck-tidssamband mellan försök och
analys i Autodyn
A.1 Skott #1 – 0,4 kg, läge 1
I nedanstående figurer visas tryck-tidskurvor från försök samt motsvarande analyse i Autodyn för
skott #1 – 0,4 kg PETN i läge 1. För laddningens samt givarnas position se kapitel 2. I vissa fall har
tryckgivaren i försöket inte fungerat tillfredsställande och detta markeras då i aktuell figur.

-- 46 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.2

-- 47 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.3

-- 48 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.4

-- 49 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.5

-- 50 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.6

-- 51 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.7

-- 52 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.8

-- 53 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.9

-- 54 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.10
A.2 Skott #4 – 0,4 kg, läge 2
I nedanstående figurer visas tryck-tidskurvor från försök samt motsvarande analyse i Autodyn för
skott #4 – 0,4 kg PETN i läge 2. För laddningens samt givarnas position se kapitel 2. I vissa fall har
tryckgivaren i försöket inte fungerat tillfredsställande och detta markeras då i aktuell figur.

-- 55 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.11

-- 56 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.12

-- 57 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.13

-- 58 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.14

-- 59 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.15

-- 60 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.16

-- 61 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.17

-- 62 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.18

-- 63 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.19
A.3 Skott #7 – 0,4 kg, läge 3
I nedanstående figurer visas tryck-tidskurvor från försök samt motsvarande analyse i Autodyn för
skott #7 – 0,4 kg PETN i läge 3. För laddningens samt givarnas position se kapitel 2. I vissa fall har
tryckgivaren i försöket inte fungerat tillfredsställande och detta markeras då i aktuell figur.

-- 64 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.20

-- 65 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.21

-- 66 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.22

-- 67 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.23

-- 68 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.24

-- 69 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.25

-- 70 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.26

-- 71 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.27

-- 72 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.28
A.4 Skott #10 – 0,4 kg, läge 4
I nedanstående figurer visas tryck-tidskurvor från försök samt motsvarande analyse i Autodyn för
skott #10 – 0,4 kg PETN i läge 4. För laddningens samt givarnas position se kapitel 2. I vissa fall
har tryckgivaren i försöket inte fungerat tillfredsställande och detta markeras då i aktuell figur.

-- 73 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.29

-- 74 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.30

-- 75 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.31

-- 76 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.32

-- 77 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.33

-- 78 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.34

-- 79 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.35

-- 80 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.36

-- 81 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.37
A.5 Skott #2 – 1,6 kg, läge 1
I nedanstående figurer visas tryck-tidskurvor från försök samt motsvarande analyse i Autodyn för
skott #2 – 1,6 kg PETN i läge 1. För laddningens samt givarnas position se kapitel 2. I vissa fall har
tryckgivaren i försöket inte fungerat tillfredsställande och detta markeras då i aktuell figur.

-- 82 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.38

-- 83 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.39

-- 84 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.40

-- 85 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.41

-- 86 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.42

-- 87 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.43

-- 88 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.44

-- 89 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.45

-- 90 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.46
A.6 Skott #5 – 1,6 kg, läge 2
I nedanstående figurer visas tryck-tidskurvor från försök samt motsvarande analyse i Autodyn för
skott #5 – 1,6 kg PETN i läge 2. För laddningens samt givarnas position se kapitel 2. I vissa fall har
tryckgivaren i försöket inte fungerat tillfredsställande och detta markeras då i aktuell figur.

-- 91 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.47

-- 92 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.48

-- 93 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.49

-- 94 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.50

-- 95 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.51

-- 96 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.52

-- 97 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.53

-- 98 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.54

-- 99 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.55
A.7 Skott #8 – 1,6 kg, läge 3
I nedanstående figurer visas tryck-tidskurvor från försök samt motsvarande analyse i Autodyn för
skott #8 – 1,6 kg PETN i läge 3. För laddningens samt givarnas position se kapitel 2. I vissa fall har
tryckgivaren i försöket inte fungerat tillfredsställande och detta markeras då i aktuell figur.

-- 100 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.56

-- 101 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.57

-- 102 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.58

-- 103 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.59

-- 104 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.60

-- 105 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.61

-- 106 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.62

-- 107 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.63

-- 108 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.64
A.8 Skott #11 – 1,6 kg, läge 4
I nedanstående figurer visas tryck-tidskurvor från försök samt motsvarande analyse i Autodyn för
skott #11 – 1,6 kg PETN i läge 4. För laddningens samt givarnas position se kapitel 2. I vissa fall
har tryckgivaren i försöket inte fungerat tillfredsställande och detta markeras då i aktuell figur.

-- 109 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.65

-- 110 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.66

-- 111 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.67

-- 112 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.68

-- 113 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.69

-- 114 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.70

-- 115 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.71

-- 116 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
A.72

-- 117 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
B.1
Bilaga B Sammanställning av stötvågsparametrar i försök och
analys i Autodyn
I Tabell B.1 till Tabell B.4 jämförs stötvågsparametrarna P +, ta, i + och i - för samtliga skott med
PETN-laddning. För definition av respektive stötvågsparameter, se avsnitt C.2.
Tabell B.1 Sammanställning av resulterande stötvågsparametrar P +, ta, i + och i - för skott 1 och
skott 4 från Autodyn och försök när tend = 50 ms. Ett ”-” indikerar att försöks-
resultatet inte är tillförlitligt.
Skott 1: Laddning 0,4 kg – läge #1 Skott 4: Laddning 0,4 kg – läge #2
Givare Autodyn Försök Autodyn Försök
P + ta i + i - P + ta i + i - P + ta i + i - P + ta i + i -
[kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas]
FF01 656 0,62 143 137 480 0,65 248 - 755 0,61 155 152 859 0,46 240 160
FF02 129 2,42 85 94 168 2,58 57 - 137 2,41 86 98 161 2,22 77 97
FF03 32 7,69 52 50 47 8,14 82 54 33 7,72 50 51 41 7,89 51 41
FF12 14 13,45 35 35 20 14,27 38 35 140 2,36 167 168 111 2,52 150 192
FF13 16 9,89 32 32 18 10,50 28 31 52 7,62 74 72 47 8,03 70 80
BA1L 51 3,71 61 67 - - - - 12 7,94 35 37 11 8,00 33 35
BA2L 7 9,63 49 48 8 10,28 53 49 12 7,94 62 63 12 8,50 60 62
BA3L 51 3,71 113 115 63 3,89 112 110 233 2,82 165 159 271 2,90 190 176
BA4L 2 100 0,63 461 208 1 745 0,63 429 - 233 2,82 127 126 155 2,96 93 116
BA6L 94 1,56 76 148 114 1,68 104 107 470 1,43 206 173 - - - -
BA7L 1 221 1,05 290 211 599 1,02 187 452 470 1,43 192 159 373 1,46 159 134
BB1L 6 15,34 20 22 11 16,76 22 19 4 16,59 21 22 6 17,72 21 21
BB2L 3 22,00 21 20 3 23,35 23 20 4 19,46 15 15 4 20,62 16 15
BB3L 6 15,34 42 44 11 16,63 45 44 24 13,31 59 60 30 14,17 60 61
BB4L 14 13,41 68 70 - - - - 26 11,76 69 63 26 12,23 67 62
BA1C 48 4,19 57 63 57 4,42 58 59 12 8,29 32 34 14 8,78 33 32
BA3C 48 4,19 101 104 53 4,38 97 97 174 3,34 141 139 163 3,44 115 203
BA4C 803 1,34 230 195 364 1,23 196 183 174 3,34 113 115 155 3,42 95 100
BA5R 20 5,80 42 46 23 6,02 43 43 25 7,36 42 43 41 7,44 38 49
BB1C 6 15,53 20 21 10 16,87 21 18 4 16,85 22 23 5 17,86 21 21
BB3C 6 15,53 36 38 - - - - 24 13,57 54 54 20 14,41 53 59
BB4C 14 13,65 57 59 16 14,63 62 61 24 12,03 65 60 27 12,50 66 60
BB5R 8 17,38 22 22 16 18,51 24 20 7 15,34 24 25 7 16,33 25 23
BC2C 7 11,80 48 47 8 11,08 42 58 12 8,29 58 59 11 8,81 54 57
BD2C 2 23,11 11 12 2 24,17 12 11 4 19,67 15 15 4 20,65 16 15

-- 118 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
B.2
Tabell B.2 Sammanställning av resulterande stötvågsparametrar P +, ta, i + och i - för skott 7 och
skott 10 från Autodyn och försök när tend = 50 ms. Ett ”-” indikerar att försöks-
resultatet inte är tillförlitligt.
Skott 7: Laddning 0,4 kg – läge #3 Skott 10: Laddning 0,4 kg – läge #4
Givare Autodyn Försök Autodyn Försök
P + ta i + i - P + ta i + i - P + ta i + i - P + ta i + i -
[kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas]
FF01 698 0,62 226 184 610 0,61 237 704 755 0,61 177 176 431 0,56 168 210
FF02 136 2,38 140 141 93 2,53 120 220 142 2,38 152 160 119 2,43 141 167
FF03 33 7,74 76 77 45 7,78 71 66 50 7,64 73 71 47 8,02 54 118
FF12 136 2,38 137 141 93 2,63 113 155 25 13,35 42 42 38 13,73 40 41
FF13 34 7,61 114 112 37 8,21 106 102 13 9,28 34 35 14 9,63 35 28
BA1L 8 9,71 52 51 8 9,81 49 47 13 7,99 35 35 12 8,39 32 31
BA2L 52 3,73 113 115 40 3,90 110 116 234 2,83 155 154 110 2,90 126 147
BA3L 2 258 0,63 505 235 2 369 0,47 763 328 234 2,83 154 153 238 3,00 131 191
BA4L 52 3,73 70 73 58 3,81 73 74 13 7,99 35 35 11 8,45 32 31
BA6L 1 272 1,05 325 233 991 1,03 345 238 113 4,66 126 125 113 4,81 118 130
BA7L 103 1,61 70 132 146 1,65 72 174 22 5,48 47 59 34 5,84 52 60
BB1L 8 11,55 34 31 8 12,34 32 27 13 7,99 35 35 12 8,12 33 31
BB2L 5 13,52 33 35 5 13,85 32 33 13 7,99 35 35 12 7,62 37 35
BB3L 51 7,93 115 112 54 8,39 99 98 234 2,83 154 153 143 2,87 124 144
BB4L 77 6,45 131 127 73 6,89 122 118 234 2,83 155 154 124 2,86 127 151
BA1C 8 10,03 47 46 8 10,39 46 42 12 8,35 36 36 14 8,67 38 33
BA3C 813 1,34 273 226 296 1,25 107 505 176 3,36 132 134 - - - -
BA4C 49 4,20 67 70 55 4,28 74 66 12 8,35 36 36 14 8,73 38 33
BA5R 21 5,89 51 52 24 5,67 47 50 26 7,43 52 52 43 7,45 56 49
BB1C 8 11,78 30 28 8 12,52 29 24 12 8,35 36 36 13 8,61 37 33
BB3C 51 8,29 109 108 58 8,71 89 85 176 3,36 132 134 188 3,35 118 108
BB4C 73 6,84 119 116 67 7,25 117 102 176 3,36 132 135 153 3,36 111 126
BB5R 15 10,83 43 45 17 11,23 40 35 26 7,43 52 52 47 7,44 55 50
BC2C 49 4,20 99 101 45 4,42 92 95 176 3,36 132 135 187 3,44 125 118
BD2C 5 13,80 34 36 6 14,80 33 34 12 8,35 36 36 13 8,57 41 40

-- 119 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
B.3
Tabell B.3 Sammanställning av resulterande stötvågsparametrar P +, ta, i + och i - för skott 2 och
skott 5 från Autodyn och försök när tend = 50 ms. Ett ”-” indikerar att försöks-
resultatet inte är tillförlitligt.
Skott 2: Laddning 1,6 kg – läge #1 Skott 5: Laddning 1,6 kg – läge #2
Givare Autodyn Försök Autodyn Försök
P + ta i + i - P + ta i + i - P + ta i + i - P + ta i + i -
[kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas]
FF01 1 651 1,00 438 300 - - - - 1 508 0,99 409 294 835 0,90 744 182
FF02 356 2,33 231 227 383 2,43 143 - 349 2,32 223 228 390 2,28 169 -
FF03 85 6,60 132 129 102 6,88 170 148 81 6,60 128 135 90 6,60 115 144
FF12 35 11,81 91 89 46 12,36 100 96 358 2,27 337 316 353 2,30 278 323
FF13 44 8,80 88 92 44 9,28 93 101 161 6,42 194 175 146 6,74 157 313
BA1L 146 3,39 127 150 131 3,55 115 148 29 6,80 71 82 31 6,97 70 79
BA2L 18 8,79 124 124 22 9,36 136 132 29 6,80 141 137 30 7,27 146 141
BA3L 146 3,39 282 281 143 3,52 274 272 622 2,57 430 349 455 2,62 270 523
BA4L 2 219 0,84 732 377 1 412 0,85 559 - 622 2,57 330 272 254 2,65 213 249
BA6L 147 1,61 186 354 221 1,70 156 411 769 1,49 453 318 - - - -
BA7L 1 242 1,16 624 411 768 1,17 498 - 769 1,49 434 298 1 015 1,56 386 251
BB1L 16 14,07 53 60 29 15,21 54 59 10 15,01 62 64 14 15,74 61 60
BB2L 8 20,53 51 52 11 21,69 55 52 9 16,66 37 41 10 17,89 42 42
BB3L 17 14,07 104 109 27 15,21 106 109 77 11,60 139 130 76 11,97 133 124
BB4L 40 12,34 171 162 56 13,15 183 174 71 10,05 176 156 76 10,41 173 162
BA1C 80 3,24 114 139 93 3,35 111 140 28 7,02 73 82 38 7,43 72 76
BA3C 80 3,24 243 250 94 3,34 222 231 342 2,31 284 277 283 2,41 164 332
BA4C 3 975 0,50 734 303 2 350 0,60 625 - 342 2,31 245 241 292 2,40 185 215
BA5R 80 3,24 81 102 97 3,29 84 108 65 4,76 87 99 80 4,74 96 97
BB1C 18 14,27 50 56 27 15,31 51 55 9 15,14 61 63 17 15,85 62 57
BB3C 17 14,27 91 97 17 15,38 92 102 78 11,82 128 121 54 12,17 115 122
BB4C 52 12,58 153 146 90 13,33 161 146 70 10,30 168 149 72 10,63 162 143
BB5R 14 14,57 56 59 22 15,68 57 58 21 13,69 60 63 22 14,12 61 57
BC2C 17 10,38 120 125 19 11,02 134 123 28 7,02 134 131 27 3,70 136 129
BD2C 5 21,31 28 30 6 22,12 32 28 9 16,88 40 43 10 17,98 43 43

-- 120 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
B.4
Tabell B.4 Sammanställning av resulterande stötvågsparametrar P +, ta, i + och i - för skott 8 och
skott 11 från Autodyn och försök när tend = 50 ms. Ett ”-” indikerar att försöks-
resultatet inte är tillförlitligt.
Skott 8: Laddning 1,6 kg – läge #1 Skott 11: Laddning 1,6 kg – läge #2
Givare Autodyn Försök Autodyn Försök
P + ta i + i - P + ta i + i - P + ta i + i - P + ta i + i -
[kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas]
FF01 1 732 0,99 747 366 945 0,96 755 535 1 589 0,99 514 364 1 988 1,01 609 372
FF02 371 2,30 337 284 327 2,34 304 767 369 2,29 321 303 313 2,29 283 310
FF03 107 6,65 163 163 116 6,71 151 194 172 6,50 183 166 145 6,71 176 190
FF12 371 2,30 374 335 355 2,37 303 419 62 11,33 101 101 79 11,50 92 109
FF13 104 6,52 262 247 106 6,86 273 251 36 7,94 86 90 35 8,17 85 86
BA1L 21 8,84 131 123 27 9,17 137 122 31 6,92 85 91 35 7,20 83 86
BA2L 144 3,40 271 278 90 3,47 252 270 611 2,58 405 332 253 2,60 299 301
BA3L 2 342 0,84 964 453 1 215 0,85 730 1 230 611 2,58 405 332 419 2,61 336 804
BA4L 144 3,40 174 184 136 3,49 151 174 31 6,92 85 91 36 7,21 84 85
BA6L 1 398 1,17 832 477 1 238 1,21 834 422 298 3,94 260 258 209 3,95 202 213
BA7L 148 1,62 166 381 279 1,69 138 433 43 4,69 57 171 90 4,79 75 223
BB1L 19 10,27 84 86 24 10,74 85 81 31 6,92 85 91 38 7,28 85 88
BB2L 16 11,69 78 83 17 11,93 88 79 31 6,92 85 91 30 7,03 93 103
BB3L 133 6,60 267 250 106 6,91 253 248 611 2,58 405 332 326 2,62 287 299
BB4L 238 5,44 336 279 192 5,74 311 268 611 2,58 405 332 314 2,58 269 303
BA1C 28 9,08 124 116 29 9,26 126 112 30 7,17 86 92 37 7,41 82 87
BA3C 4 329 0,50 841 342 - - - - 344 2,33 284 279 - - - -
BA4C 83 3,26 136 153 100 3,30 133 153 30 7,17 86 92 32 7,39 83 84
BA5R 83 3,25 110 126 89 3,17 125 146 60 4,73 111 119 91 4,72 106 110
BB1C 19 10,37 78 79 25 10,86 80 76 30 7,17 86 92 35 7,40 87 87
BB3C 134 6,91 248 237 163 7,13 240 216 344 2,33 284 279 332 2,35 244 176
BB4C 205 5,70 283 246 159 5,90 259 235 344 2,33 284 279 267 2,35 179 232
BB5R 31 8,53 99 105 50 8,78 104 101 60 4,73 111 119 92 4,82 108 110
BC2C 83 3,26 207 223 105 3,31 198 208 344 2,33 284 279 339 2,46 257 189
BD2C 15 11,87 80 84 20 12,68 91 83 30 7,17 86 92 37 7,44 97 107

-- 121 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
C.1
Bilaga C Uttryck för stötvågsparametrar i positiv och negativ fas
C.1 Orientering
I kapitel 4 beskrivs en förenklad, ingenjörsmässig metod att använda vid bestämning av de
resulterande laster som fås i en given punkt vid en explosion i stadsmiljö. I redovisade uttryck
hänvisas till framtagandet av ett flertal stötvågsparametrar som ligger till grund för de tryck-
tidskurvor som tas fram. För den positiva fasen kan med fördel ConWep (1992) användas. Eftersom
tillgången till detta program dock är begränsat på den svenska marknaden återges i denna bilaga
dessa samband i diagram- och tabellform. För den negativa fasen ges inga värden i ConWep utan
dessa får istället hämtas från annat håll.
Material som redovisas i avsnitt C.2 och C.3 är utdrag från Johansson och Laine (2012). Där
ändringar gjorts i uttryck kommenteras detta i fotnötter. Avsnitt C.4 baseras på material från
Granström (1958), PSADs (1998), von Rosen (2006) samt Johansson och Laine (2012).
C.2 Ideal luftstötvåg vid fri avlastning
Figur C.1 visar en typisk tryck-tidsrelation för en ideal stötvåg i en fix punkt. Med ideal våg syftas
här på en stötvåg som uppkommer vid fri avlastning i luften utan några störande reflexioner.
Explosionen detonerar vid tiden t = 0 och efter tiden ta har stötvågen nått fram till den studerade
punkten. Trycket vid vågfronten ökar då från det omgivande trycket P0 (i ostörd luft är
P0 ≈ 101,3 kPa) till P0 + P + under mycket kort tid. Trycket avtar därefter till dess att det vid tiden
ta +t + åter når bakgrundstrycket P0 och därigenom avslutar tryckvågens positiva fas. En negativ fas
med amplitud P0 – P - tar därefter vid då flöden av luft strömmar mot explosionens centrum och
därigenom skapar ett partiellt vakuum. Så småningom återgår trycket till P0 vid tiden ta + t + + t -.
i -
ta + t + ta + t + + t -
ta
P0
P0 – P -
P0 + P +
i +
positiv
fas
negativ
fas
Tryck, P
Tid, t
studerad
punkt
r
Figur C.1 Typiskt tryck-tidssamband för ideal luftstötvåg vid fri sfärisk utbredning.

-- 122 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
C.2
Den impuls som överförs i de båda faserna beskrivs av impulstätheterna i + och i -, vilka också är
viktiga parametrar i beskrivningen av styrkan hos en luftstötvåg. Dessa kan definieras som
( 	)	∫
+	
+
+ −	=
t	t
t
a
a
dt	P	t	P	i 0	)	( (C.1)
( 	)	∫
−	+
+
+	+
+
− −	=
t	t	t
t	t
a
a
dt	t	P	P	i )	(	0 (C.2)
där P(t) beskriver tryckets variation med tiden t. Den positiva impulstätheten i + är tillsammans med
övertycket P + samt varaktigheten t + viktiga parametrar vid beskrivandet av en stötvågs styrka och
utseende. Ett vanligt nyttjat uttryck för tryck-tidssambandet, och som bland annat används i
programmet ConWep (1992), är
+	
−
+
+ 




 −	+	= t	t
e
t
t
P	P	t	P
α
1	)	( 0 (C.3)
Här markerar t tiden efter stötvågens ankomst (dvs. mätt från ankomsttiden ta) och
α en faktor med
vilken övertryckets avklingning kan styras. Kombinering av ekvation (C.1) och (C.4) ger
( 	)


 −	−	= −	+	+	+	
α
α
	α e	t	P	i 1
1	1 2 (C.4)
från vilken faktorn
α kan lösas ut då P +, i + samt t + är kända.
Framtagningen av ett motsvarande uttryck för den negativa fasen har i litteraturen till stor del
bortsetts från. En anledning till detta med är att den negativa fasen allmänt har betraktats som
relativt oviktig i jämförelse med sin positiva motsvarighet och/eller att stora svårigheter har
påträffats vid mätning eller beräkning av den. Baker (1973) presenterar dock ett uttryck där den
negativa fasen kan beskrivas som
−	
−
−	−
− 




 −	−	= tt
e
t
t
t
t
P	P	t	P 4
0 1	)	( (C.5)
Ovan presenterade samband gäller för både oreflekterad och reflekterad stötvåg där värden på tryck
P +, impulstäthet i+ samt varaktighet t + fås ur empiriska samband, se avsnitt C.3.
En närmare undersökning av uttrycket i ekvation (3.5) pekar på att detta bör modifieras något1. För
att det undertryck P - som används som indata i uttrycket ska återfås i det resulterande tryck-tids-
sambandet krävs en multiplikation med en faktor 13,9 i den andra termen, dvs.
−	
−
−	−
− 




 −	⋅	−	= tt
e
t
t
t
t
P	P	t	P 4
0 1	9	,	13	)	( (C.6)
1 Detta är ett tillägg gentemot vad som anges i Johansson och Laine (2012). Ekvation (C.6) ersätter ekvation (C.5).

-- 123 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
C.3
C.3 Positiv fas
Samband för stötvågsparametrar i positiv fas baseras på ConWep (1992) och nedan angivna
samband är hämtat från Johansson och Laine (2012).
I Figur C.2 till Figur C.4 redovisas tryck, impulstäthet, ankomsttid och varaktighet för en explosion
med möjlighet till fri, sfärisk avlastning. För tryck och impulstäthet ges samband för både
oreflekterad och reflekterad (normalreflexion) stötvåg. Det ska även noteras att impulstäthet,
ankomsttid samt varaktighet har skalats med hänsyn till laddningens storlek W1/3 i enlighet med
Hopkinsons skallag, se Johansson och Laine (2012). Tabellerade värden presenteras i Tabell C.1.
1
10
100
1 000
10 000
100 000
1 000 000
0.1 1 10 100
Övertryck,
 P + [kPa]
Skalat avstånd, Z [m/kg1/3]
Reflekterad
Fri avlastning
Figur C.2 Reflekterat och oreflekterat övertryck som funktion av det skalade avståndet Z. Från
ConWep (1992).

-- 124 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
C.4
1
10
100
1 000
10 000
100 000
0.1 1 10 100
Skalad impulstäthet,
 i + / W
 1/3
 [Pas/kg
1/3
]
Skalat avstånd, Z [m/kg1/3]
Reflekterad
Fri avlastning
Figur C.3 Reflekterad och oreflekterad impulstäthet som funktion av det skalade avståndet Z.
Från ConWep (1992).
0.01
0.1
1
10
100
0.1 1 10 100
Skalad tid,
 t / W
 1/3
 [ms/kg
1/3
]
Skalat avstånd, Z [m/kg1/3]
Varaktighet
Ankomsttid
Figur C.4 Ankomsttid och varaktighet som funktion av det skalade avståndet Z. Från
ConWep (1992).

-- 125 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
C.5
Tabell C.1 Stötvågsparametrar från ConWep som i avsnitt 3.4.4.2 redovisas i grafisk form.
Z Ps+ Pr+ is+ / W1/3 ir+ / W1/3 ta / W1/3 t + / W1/3
[m/kg1/3] [kPa] [kPa] [Pas/kg1/3] [Pas/kg1/3] [ms/kg1/3] [ms/kg1/3]
0,1 30 830 368 300 775 21 840 0,016 0,180
0,2 15 300 158 000 226 6 176 0,038 0,190
0,3 8 996 83 360 151 3 164 0,069 0,185
0,4 5 745 48 800 137 2 026 0,107 0,228
0,6 2 747 19 800 155 1 119 0,211 0,496
0,8 1 521 9 384 196 752 0,352 1,346
1 935 5 006 175 559 0,532 1,795
1,2 620 2 931 149 442 0,749 1,792
1,4 437 1 851 129 364 1,001 1,697
1,6 322 1 242 113 309 1,286 1,679
1,8 247 877 101 267 1,601 1,729
2 195 646 92 236 1,944 1,846
2,4 130 387 78 190 2,702 2,272
3 82 215 64 147 3,988 2,684
4 46 110 50 106 6,396 3,064
5 31 70 41 83 8,996 3,334
6 23 50 34 68 11,692 3,556
7 18 39 30 58 14,432 3,748
8 15 32 26 50 17,190 3,916
10 11 23 21 40 22,720 4,200
12 9 18 18 33 28,280 4,434
16 6 12 13 24 39,480 4,822
20 5 9 11 19 50,960 5,142
C.4 Negativ fas
Von Rosen (2006) anger uttryck framtagna efter kurvanpassning mot samband givna i
PSADs (1998) ur vilka det negativa trycket och den negativa varaktigheten kan uppskattas som



−	⋅
=−
1066	,	1	0452	,	0
3	,	101
min Z
Ps [kPa] (C.7)
( 	) 3	1	0931	,0
8952	.	9 W	Z	t ⋅	⋅	=− [ms] (C.8)
där
3	1
W
r
Z = (C.9)
är det skalade avståndet baserat på avståndet r och laddningsvikten (i ekvivalent mängd TNT) W.
Med användning av uttrycket för den negativa fasen enligt ekvation (C.6) kan den negativa
impulstätheten sedan tecknas som
( 	) 3	1
458	,	0 W	t	P	i s	s ⋅	⋅	⋅	= −	−	− [Pas] (C.10)

-- 126 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
C.6
0
20
40
60
80
100
120
0.1 1 10 100
Undertryck,
 
P - [kPa]
Skalat avstånd, Z [m/kg1/3]
Granström (1958)
Autodyn
von Rosen (2006)
Figur C.5 Oreflekterat undertryck P - som funktion av det skalade avståndet Z. Jämförelse
mellan värden från Granström (1958), Autodyn (Johansson och Laine 2012) samt
ekvation (C.7) (von Rosen 2006).
0
100
200
300
400
500
600
0.1 1 10 100
Negativ skalad impulstäthet,
 i - [Pas/kg
1/3
]
Skalat avstånd, Z [m/kg1/3]
Granström (1958)
Autodyn
Autodyn (mod.)
Figur C.6 Skalad oreflekterad negativ impulstäthet i - som funktion av det skalade avståndet Z.
Jämförelse mellan värden från Granström (1958), Autodyn (Johansson och
Laine 2012) samt ekvation (C.8) (von Rosen 2006).

-- 127 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
C.7
0
5
10
15
20
25
0.1 1 10 100
Skalad varaktighet negativ fas,
 
t - [ms/kg
1/3
]
Skalat avstånd, Z [m/kg1/3]
Granström (1958)
Autodyn
von Rosen (2006)
Figur C.7 Skalad varaktighet t – för den negativa fasen som funktion av det skalade avståndet Z.
Jämförelse mellan värden från Granström (1958), Autodyn (Johansson och
Laine 2012) samt ekvation (C.10) (von Rosen 2006).
I Figur C.5 till Figur C.7 jämförs trycket, impulstätheten samt varaktigheten i den negativa fasen
med vad som anges i Granström (1958), värden framtagna med hjälp av Autodyn – presenterade i
Johansson och Laine (2012) – samt uttryck enligt ekvation (C.7), (C.8) och (C.10) – von
Rosen (2006). Av detta framgår att värden enligt Granström och von Rosen genomgående stämmer
mycket bra överens med varandra vilket antyder att de i grunden härör från samma källa. Det ska
dock även noteras att resultat från Autodyn ger likvärdiga värden för både tryck och impulstäthet
för 2 ≤ Z ≤ 10 m/kg1/3 medan det för varaktigheten skiljer ganska mycket. Utgående från denna
jämförelse synes det dock vara en rimlig approximation att använda uttrycken i ekvation (C.7),
(C.8) och (C.10) för att bestämma trycket P -, varaktigheten T - respektive impulstätheten i - i den
negativa fasen.

-- 128 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
D.1
Bilaga D Explosion at an intersection in an Urban Environment –
Experiments and analyses
Denna bilaga innehåller en publicerad konferensartikel, Johansson et al. (2007), som presenterades
på SAVIAC:s 78th Shock and Vibration Symposium i Philadelphia, USA, 4-8 november 2007.

-- 129 of 156 --

Explosion at an intersection in an Urban Environment
– Experiments and analyses
Morgan Johanssona,*, Ola Pramm Larsenb, and Leo Laineb
aREINERTSEN Sverige AB
Anders Carlssons gata 14, 417 55 Göteborg, Sweden
*Corresponding author: morgan.johansson@reinertsen.se
bANKER – ZEMER Engineering A/S
P.O. Box 253, NO-0702 OSLO, Norway
This paper describes the experimental and numerical investigation of an explosion in an
intersection built up of four concrete boxes. Scaled experiments (1:5) with a total of eight
charges (0.4 and 1.6 kg) of PETN detonated at various locations and were registered using a
total of 25 pressure gauges. The experimental results were used to validate numerical
simulations made in the explicit code AUTODYNTM prior to the experimental performance.
An automatic remapping procedure used in the simulations is briefly described and a
coherence measure to compare experimental and numerical results is introduced. It is
concluded that AUTODYN managed very well to predict the blast load obtained in a
complex urban environment.
INTRODUCTION
The Swedish Rescue Services Agency (SRSA) is responsible for the building regulations of the Swedish civil
defence shelters. The shelters have specific regulations for how they are planned, built, equipped and maintained [1].
It is also the responsibility of SRSA to maintain and develop the knowledge connected to these structures. Based on
this it has been concluded that there is a need to increase knowledge about the origin of blast loads and how they
affect their surroundings. Accordingly, a research project, Resistance capacities of buildings for extreme dynamic
loading [2], was initiated in 2006 wherein the main aim is to increase the knowledge of how to determine the
capacity of any given building or group of buildings to withstand the effect of a blast load. This work is divided into
two stages: determination of the load characteristics resulting from the blast load and development of a method to be
used to estimate the capacity of a building subjected to such loads. This paper is part of the first stage.
Predicting the load caused by a propagating blast wave in urban environment, in which phenomena such as
reflection, diffraction and confinement are to be taken into account, is a complex task. Remennikov [3] lists three
types of methods to be used: empirical (or analytical), semi-empirical and numerical methods. For non-complex load
cases it is usually sufficient to use engineering tools based on empirical data, e.g. ConWep [4]. For somewhat more
complex geometry, though, it is necessary to use semi-empirical methods, i.e. methods based on models in which
the important physical process is accounted for in a simplified way. Several researchers have also developed such
models, e.g. [5]-[9], that work well within given limits and that provide an increased understanding of the resulting
blast load. However, when the geometry gets more complex, which might be the case in an urban environment, it
may no longer be possible to use such simplified tools, [10].
In such cases numerical methods incorporating computational fluid dynamics (CFD) techniques, so-called
hydrocodes, may be used. However, even though the computational possibilities, regarding both the complexity of

-- 130 of 156 --

the analysis and the required computer time, steadily increase, it is still of utmost importance to make sure that the
results obtained in such methods are correct. Hence, there is a need to verify such programs against experimental
results. Once this is guaranteed it is possible to use hydrocode programmes to at least in part replace expensive
experimental performances.
In this project the explicit code AUTODYNTM [11] is used and it has been shown in [12] that it provides satisfactory
agreement with ConWep in analyses of spherical air bursts. However, it was necessary to verify that this also is the
case in a more complex urban environment. Accordingly, an experimental test-series was conducted in co-operation
between the Swedish Rescue Services Agency, the Norwegian Defence Estates Agency and the Swedish Defence
Research Agency. The aim of this project is twofold: to increase the knowledge about blast load in a complex
environment and to investigate the possibility for AUTODYN to predict the resulting load characteristics obtained in
a complex environment.
The outline of the paper is as follows: The section EXPERIMENTAL SETUP show how the experiments were
performed. The section FINITE ELEMENT MODEL discuss how the model was set-up and what material
properties were used for the explosive and air. In the RESULTS section analyses are carried out and results are
shown. Finally CONCLUSIONS summarises the findings.
EXPERIMENTAL SETUP
The experimental location consisted of four concrete cubic boxes (dimension 2.3 m) positioned at a distance of
2.3 m apart. Three types of charges, 0.4 kg PETN, 1.6 kg PETN and 1.6 kg TBX, were used and positioned either
close to the ground (0.20 m) or at mid height (1.15 m) of the concrete boxes in four different locations, see Fig. 1.
The tests were carried out in scale 1:5 meaning that the concrete boxes approximately corresponded to a four-storey
building of height 11.5 m with a small charge of 50 kg pentolite, detonating 1.0 m above ground; i.e. a threat
situation roughly equal to what might be expected from a small car bomb.
#1
A B
C D
#2 #3 #4
BA1L
BA3L BB3L
BB1L
BA2L BB2L	BB4L	BA4L
BA6L
BA7L
2.3 2.3 2.3	1.15
2.3
2.3
2.3
#1
A B
C D
#2 #3 #4
BA1C
BA3C BB3C
BB1C
BC2C
BB4C
BD2C
BA4C BA5R BB5R
2.3 2.3 2.3	1.15
2.3
2.3
2.3
0.20
0.4 kg PETN
0.20
low gauge
1.15
1.6 kg PETN
1.15
centre gauge
Fig. 1. Top view of the experimental set-up and gauges located on the concrete boxes. The charges were placed in
four different positions (#1 – #4) 0.2 m (0.4 kg PETN) or 1.15 m (1.6 kg PETN) above the ground. The
naming of the gauges is as follows: Building letter, Gauge no., Low or Centre. All lengths are in metres.

-- 131 of 156 --

A total of 25 pressure gauges were used to register the pressure-time relations at various locations. 20 gauges (brand:
Kulite) had fixed positions in the concrete boxes: 10 low (L) at a level of 0.20 m, 8 in the centre (C) at 1.15 m above
the ground and 2 on the roof (R), see Fig. 1. All gauges but two were positioned in the middle of the wall/roof. The
last two gauges (BA6L and BA7L) were positioned close to the ground 0.20 m from one of the wall edges in an
attempt to get an approximate reading of the effect the diffraction has on the pressure. The remaining 5 gauges
(brand: PCB) were fastened on wooden boards placed on the ground and had various positions according to Fig. 2,
depending on the position of the charge. Even though all gauges were active in every detonation those gauges set
low and in the centre were mainly used for the evaluation of 0.4 kg and 1.6 kg charges, respectively.
#1 A B
C D
2.3	4.6 1.15	6.9
FF02	FF03	FF12 FF01
FF13 #2
A B
C D
2.3	4.6 1.15 2.3 4.6
FF13	FF12	FF01	FF02	FF03
#3
A B
C D
2.3	4.6 1.15 2.3 4.6
FF12 FF13	FF02 FF01	FF03 #4
A B
C D
2.3	4.6 1.15	6.9
FF12 FF03 FF02 FF01
FF13
Fig. 2. Top view of the different ground pressure gauge positioning for each charge location. All lengths are in
metres.
The explosive used was the Swedish PETN, Sprängdeg m/46, with a density of about 1 500 kg/m3, which consists of
approximately 86 % pentolite and 14 % mineral oil. Accordingly, the 0.4 kg and 1.6 kg charges used consisted of
0.344 kg and 1.376 kg pentolite, respectively. In ConWep [2] the equivalent weight (compared to TNT) of pentolite
is given as 1.42 kg and 1.00 kg for pressure and impulse, respectively. However, when determining the pressure-
time relations for pentolite ConWep uses the average of these values, i.e. 1.21 kg, and accordingly, a charge of 1 kg
Sprängdeg m/46 corresponds to 0.86 ⋅ 1.21 ≈ 1.04 kg TNT. Using this correlation an approximate value of the scaled
distance Z = R/W1/3 can be determined. The horizontal projection of the distance between the charges and the
pressure gauges varied from 1.15 m to about 10 m; resulting in 1.5 ≤ Z ≤ 13 m/kg1/3 and 1.0 ≤ Z ≤ 8.5 m/kg/1/3 for
the 0.4 kg and 1.6 kg charge, respectively.
In this paper only the results for PETN charges, and then mainly those caused by the smaller 0.4 kg charges, are
presented. For more detailed information about the experiments and the analyses performed, see [13].
FINITE ELEMENT MODEL
The blast simulations were performed using the explicit code AUTODYN [11]. All simulations were made before
the experiments were carried out, which means that the experimental results are used to validate how well
AUTODYN manage to describe the blast load in a complex environment similar to that in a city.
In the numerical model the physical domain was represented by rectangular boxes in 3D which in turn were filled
with cube shaped hexahedral linear elements. The size of these rectangular boxes varied based on the blast scenarios
as well as the different remap stages and the planar symmetry present. A typical series of 3D remap runs over 4

-- 132 of 156 --

stages would have approximate rectangular domain sizes of: (2 m)3, (4 m)3, (8 m)3 and (16 m)3. The element size
used highly depended on the remap stage and the total number of elements employed in the numerical mesh. The
high resolution runs strived to utilise the maximum number of elements possible under the 32 bit addressing space
providing approximately 4.5 million elements, which in turn yielded an element size of approximately 10 mm at the
first 3D remap stage. The remapping ratio was always 1:2, consequently doubling the element size in each direction
at every new remap stage. The four concrete blocks and the ground were modelled using rigid boundaries. The
outflow boundary condition was only applied during the last 3D remapping stage to the external phases of the
domain. At all other stages no boundary conditions were necessary since the blast wave front was always fully
contained inside the corresponding numerical domain.
Each simulation involved separate runs over several stages in which a self-developed automatic remapping
technique, further discussed below, was used. The first stage involved a 1D spherical symmetric run using a Multi-
Material Euler solver simulating the initial detonation phase with both explosive material and air. A remap
procedure was then performed into a 2D axial symmetric domain using the same Multi-Material Euler solver.
Finally the simulation was concluded by a series of 3D remapping runs using an Euler-FCT solver with air only.
Some of these 3D remapping stages involved planar symmetry, in which case the symmetry was fully exploited in
the simulations. All of the eight blast scenarios were completed with as many as 7-9 AUTODYN simulations
employing different mesh resolutions for quality assurance and convergence studies. Fig. 3 illustrates the simulation
procedure over the various 3D remapping stages.
Stage 3: 3D remap Stage #1: plane
symmetry
Stage 5: 3D remap Stage #3
Stage 4: 3D remap Stage #2: plane
symmetry
Stage 6: 3D remap Stage #4: full model
Fig. 3. Illustration of the principal layout of the finite element model for simulation of charge at location #1 for
Stages 3 to 6: 3D stages using automatic remapping. Stage 1 (1D spherical symmetry) and Stage 2 (2D axial
symmetry) are not shown.

-- 133 of 156 --

The vast number of simulations with their accompanying remapping stages performed in this project called for
automation at several levels of the simulation process. A quite complex system integrating automatic script
generation with AUTODYN-linked Fortran user-subroutines were therefore developed. This automation system
enabled the batch simulation run of an unlimited number of 3D blast scenarios, each containing several remap stages
with arbitrary geometry and symmetry conditions, with a click of a button. The main idea of this methodology is to
enable automatic detection of the shock front during the blast, so that a remap process can be initiated at the time
when the shock front is close to the boundary. The global script file controls the whole process from the generation
of the new remapped FE models up to the batch control of several simulations running in series.
In AUTODYN there are four different pre-defined material models for the explosive PETN, where the material
densities are set to: 0.88 kg/m3, 1.26kg/m3, 1.50 kg/m3 and 1.77 kg/m3. Which model should be used was unclear,
and therefore, an investigation of the different material models were carried out in order to find out what pressures
and impulse intensities could be expected for different values of the scaled distance Z = R/W1/3. This was done in
AUTODYN using a one-dimensional wedge analysis simulating an undisturbed spherical pressure release. The
results were compared with a corresponding analysis of TNT, [12], and are for the overpressure summarised in
Fig. 4. Here the overpressure is presented as a function of the scaled distance and based on this the equivalent
weight of TNT was determined. From this it can be seen that the resulting pressure will be almost identical for the
PETN material models, with densities 1.26 kg/m3 and higher, available in AUTODYN. It can also be concluded that
the equivalent weight, based on the average value for 2 ≤ Z ≤ 10 m/kg1/3, is about 1.45 kg for the pressure. The
corresponding relation for the impulse intensity was determined as well and was found to be very similar with the
same average equivalent weight of 1.45 kg. Comparing these values with those given in ConWep – 1.42 kg for
pressure and 1.00 kg for impulse – shows that the equivalent weight based on pressure was very similar but that it
differed considerably for the impulse intensity.
10
100
1 000
1 10
Scaled distance, Z [m/kg1/3]
Overpressure,
 P s	
+ [kPa]
PETN - 1.77
PETN - 1.50
PETN - 1.26
PETN - 0.88
TNT
1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
1.8
1.9
2.0
1 10
Scaled distance, Z [m/kg1/3]
Equivalent weight of TNT [kg]
PETN - 1.77
PETN - 1.50
PETN - 1.26
PETN - 0.88
TNT
Fig. 4. Results obtained for different explosive PETN material models in AUTODYN: Pressure as function of
scaled distance (left) expressed as corresponding equivalent weight of TNT (right).
Based on the above and an approximation that the explosive in the charges used had a density of about 1.7 kg/m3,
[13], the PETN material model with density 1.77 kg/m3 was used in the final AUTODYN simulations of the
experimental set-up. The explosive was modelled using the JWL Equation of State (EOS) with automatic conversion
into Ideal Gas EOS when the entire explosive had reached a compression value of -0.95. Furthermore, at the start of
the first 3D remap stage the explosive was converted into air, thus facilitating the use of the single material Ideal-
Gas-EOS-Only Euler FCT solver. Input parameters for air and explosive are listed in Table 1.

-- 134 of 156 --

Table 1. Summary of input parameters in AUTODYN for air and explosive PETN with density 1.77 kg/m3.
Air PETN 1.77
ρ0 1.226·10-3 (g/cm3) ρ0 1.77 (g/cm3)
γ 1.4 C-J Detonation velocity 8 300 (m/s)
P0 101.3 (kPa) C-J Energy density 1.01·107 (kJ/m3)
C-J Pressure 3.35·107 (kPa)
RESULTS
Most of the ground pressure gauges (FF01 to FF13) were positioned within a straight line free from obstructions
from the charge, see Fig. 2, meaning that a direct comparison with results from ConWep is possible. In Fig. 5 the
peak pressures, registered in the ground gauges for different charge locations in the experiments, are compared to
that of ConWep. The correspondence is fairly good for the short distances of 1.15 m and 2.3 m while it is less
accurate for the longer distances of 4.6 m and 6.9 m. This difference is partly due to the confinement effect that the
concrete boxes present (especially true for the charge at location #4) but can not fully explain the difference
observed. It should be noted, though, that the peak pressure might be a bit difficult to capture properly and that the
impulse intensity is a more reliable measure for this type of comparison. However, the disturbances caused by the
surrounding concrete boxes, i.e. confinement and reflection effects, make such a comparison with ConWep
irrelevant. Nevertheless, the results are regarded to be sufficiently close to ConWep to be satisfactory and more
detailed information of resulting pressure-time relations from the experiments are presented together with the
numerical analyses below.
0
100
200
300
400
500
600
700
800
900
1.15 2.3 4.6 6.9
Distance [m]
Overpressure [kPa]
ConWep
#1
#2
#3
#4
0.0
0.5
1.0
1.5
2.0
2.5
3.0
1.15 2.3 4.6 6.9
Distance [m]
Pressure ratio [-]
ConWep
#1
#2
#3
#4
Fig. 5. Comparison of overpressures obtained at ground pressure gauges (FF01 to FF13 in Fig. 2) in experiments
and ConWep. The left diagram shows the incident overpressures while the right shows these pressures
expressed as a ratio of the peak pressure obtained in ConWep. The deviation observed for charge at location
#4 is expected due to confinement effects.
Table 2 presents a comparison of key parameters overpressure P+, arrival time ta and impulse intensity i+ and i-
obtained in the AUTODYN simulations and that of the experiments. Here, the impulse intensity is defined as the
sum of all positive and negative phases, respectively, within the time period tend as shown in Eqs. (1) and (2).
( )	∑ ∫	∑ =
+
=
+	+ =	=
n
k
t
t
n
k
k
end	k
ak
dt	t	P	i	i 1	1
,
,
(1)
( )	∑ ∫	∑ =
−
=
−	− =	=
n
k
t
t
n
k
k
end	k
ak
dt	t	P	i	i 1	1
,
,
(2)

-- 135 of 156 --

Table 2. Summary of key parameters P+, ta, i+ and i- from AUTODYN analyses and experiments. The impulse
intensities i+ and i- are determined according to Eq. (1) and Eq. (2) with tend = 50 ms. A “-“ in the table
indicate that the experimental result was not valid.
Location #1 Location #2
Gauge AUTODYN Experiments AUTODYN Experiments
P+ ta i+ i- P+ ta i+ i- P+ ta i+ i- P+ ta i+ i-
[kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas]
FF01 656 0.62 143 137 480 0.65 248 - 755 0.61 155 152 859 0.46 240 160
FF02 129 2.42 85 94 168 2.58 57 - 137 2.41 86 98 161 2.22 77 97
FF03 32 7.69 52 50 47 8.14 82 54 33 7.72 50 51 41 7.89 51 41
FF12 14 13.45 35 35 20 14.27 38 35 140 2.36 167 168 111 2.52 150 192
FF13 16 9.89 32 32 18 10.50 28 31 52 7.62 74 72 47 8.03 70 80
BA1L 51 3.71 61 67 - - - - 12 7.94 35 37 11 8.00 33 35
BA2L 7 9.63 49 48 8 10.28 53 49 12 7.94 62 63 12 8.50 60 62
BA3L 51 3.71 113 115 63 3.89 112 110 233 2.82 165 159 271 2.90 190 176
BA4L 2 100 0.63 461 208 1 745 0.63 429 - 233 2.82 127 126 155 2.96 93 116
BA6L 94 1.56 76 148 114 1.68 104 107 470 1.43 206 173 - - - -
BA7L 1 221 1.05 290 211 599 1.02 187 452 470 1.43 192 159 373 1.46 159 134
BB1L 6 15.34 20 22 11 16.76 22 19 4 16.59 21 22 6 17.72 21 21
BB2L 3 22.00 21 20 3 23.35 23 20 4 19.46 15 15 4 20.62 16 15
BB3L 6 15.34 42 44 11 16.63 45 44 24 13.31 59 60 30 14.17 60 61
BB4L 14 13.41 68 70 - - - - 26 11.76 69 63 26 12.23 67 62
Location #3 Location #4
Gauge AUTODYN Experiments AUTODYN Experiments
FF01 698 0.62 226 184 610 0.61 237 704 755 0.61 177 176 431 0.56 168 210
FF02 136 2.38 140 141 93 2.53 120 220 142 2.38 152 160 119 2.43 141 167
FF03 33 7.74 76 77 45 7.78 71 66 50 7.64 73 71 47 8.02 54 118
FF12 136 2.38 137 141 93 2.63 113 155 25 13.35 42 42 38 13.73 40 41
FF13 34 7.61 114 112 37 8.21 106 102 13 9.28 34 35 14 9.63 35 28
BA1L 8 9.71 52 51 8 9.81 49 47 13 7.99 35 35 12 8.39 32 31
BA2L 52 3.73 113 115 40 3.90 110 116 234 2.83 155 154 110 2.90 126 147
BA3L 2 258 0.63 505 235 2 369 0.47 763 328 234 2.83 154 153 238 3.00 131 191
BA4L 52 3.73 70 73 58 3.81 73 74 13 7.99 35 35 11 8.45 32 31
BA6L 1 272 1.05 325 233 991 1.03 345 238 113 4.66 126 125 113 4.81 118 130
BA7L 103 1.61 70 132 146 1.65 72 174 22 5.48 47 59 34 5.84 52 60
BB1L 8 11.55 34 31 8 12.34 32 27 13 7.99 35 35 12 8.12 33 31
BB2L 5 13.52 33 35 5 13.85 32 33 13 7.99 35 35 12 7.62 37 35
BB3L 51 7.93 115 112 54 8.39 99 98 234 2.83 154 153 143 2.87 124 144
BB4L 77 6.45 131 127 73 6.89 122 118 234 2.83 155 154 124 2.86 127 151
From this summary it is also clear that the correspondence between experiments and AUTIDYN simulations in
several cases are very good. However, to get a better picture of how well the results coincide a coherence measure,
according to Eq. (3), was introduced.
( ) ( )
−	+ +
−
−	=
∫
Exp	Exp
t
t
Exp	AD
i	i
dt	t	P	t	P
Coh
end
a	
1 (3)
Here PAD(t) and PExp(t) are the pressure obtained in the AUTODYN simulations and experiments, respectively, while
i+Exp and i-Exp are the total positive and negative impulse intensities from the experiments during the time interval
ta ≤ t ≤tend. Thereby, it is possible to fairly straightforwardly compare a large number of numerical and experimental
results and get a measure of how well they coincide. In Eq. (3) Coh = 1.0 signify a perfect match. However, in
general a coherence value of 0.5 or better corresponds to very good agreement between simulated and experimental
results, see Fig. 6.

-- 136 of 156 --

-20
-10
0
10
20
30
40
50
60
70
80
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
A B
C D
#1
BA3L	
Coh = 0.692
-50
0
50
100
150
200
250
300
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
A B
C D
#2
BA3L	
Coh = 0.566
-20
-10
0
10
20
30
40
50
60
70
80
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
A B
C D
#3
BB3L	
Coh = 0.436
-40
-20
0
20
40
60
80
100
120
140
160
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
A B
C D
#4	FF02
Coh = 0.477
Fig. 6. Example of correlation between AUTODYN analyses and experiments: charge location #1, gauge BA3L
(top left); charge location #2, gauge BA3L (top right); charge location #3, gauge BB3L (bottom left) and
charge location #4, gauge FF02. The coherences are 0.692, 0.566, 0.436 and 0.477, respectively.
From Table 2 and Fig. 6 it can be seen that the agreement between experimental and numerical results are generally
very good. Even though it can be concluded that most results coincided well it was generally observed that the
agreement between analyses and experimental results increased when the peak pressure decreased. Thus, when the
pressure reduces to less than about 50-100 kPa the general agreement went from very good to excellent. In Fig. 7 the
complete batch of coherence data for the 0.4 kg and 1.6 kg charges, totalling 8 charges with almost 200 result series
(all in all about 10 gauges failed to produce any trustworthy results during the experiments), is presented. The results
have been separated into two groups, 0.4 kg and 1.6 kg charges, and it can be seen that the coherence generally is
somewhat higher for the larger charges. Further, it can be noted that about 65 % of the compared results reach a
coherence of 0.5 or higher; i.e. a limit indicating very good agreement.

-- 137 of 156 --

0
5
10
15
20
25
0.0 0.2 0.4 0.6 0.8 1.0
Coherence [-]
Portion of P(t) at given coherence [%]
0.4 kg
1.6 kg
0
10
20
30
40
50
60
70
80
90
100
0.0 0.2 0.4 0.6 0.8 1.0
Coherence [-]
Proportion of P(t) higher than given coherence [%]
0.4 kg
1.6 kg
Coh = 0.5
65 %
Fig. 7. Coherence of 0.4 kg and 1.6 kg charges presented as portion at given coherence (left) and portion higher
than given coherence (right). A coherence value of about 0.5 or higher corresponds to very good agreement,
see Fig. 6, and this limit is reached by approximately 65 % of the compared results.
CONCLUSIONS
An experimental and numerical study of blast load at an intersection has been carried out. The load effects of two
types of charges, 0.4 kg and 1.6 kg PETN, positioned in four different locations have been simulated using the
explicit code AUTODYN and compared to the experimental results. It shall be pointed out that all AUTODYN
analyses were made before the experiments were carried out. Hence, the results presented herein are used to validate
how well AUTODYN manage to describe the blast behaviour in a complex geometry such as in a city environment.
In the blast simulations in AUTODYN an automatic remapping routine is introduced. This routine enabled
automatic detection of the shock front close to a boundary, and thus a criterion for when, in time, to initiate the
remapping process. Consequently, an automatic remapping of the modelled volume is possible, allowing for a more
simplified approach to large blast simulations in a complex environment.
It is shown that there generally is very good agreement between the results obtained in the experiments and the
AUTODYN simulations. A coherence measure is introduced for comparing experimental and numerical results and
it is concluded that this is a convenient method to get a rough estimation of how well the results coincide. It is
shown that for the results presented herein a measure of Coh ≥ 0.5 signify very good agreement and that about 65 %
of the compared measurements fulfil this limit. For gauges where the pressure was low (less than about 50-100 kPa)
the agreement went from very good to excellent. Consequently, it is concluded that AUTODYN manage very well
to describe the resulting blast effects in a complex city environment.
As a sub result of this study the relations for pressure and impulse intensity for the four PETN explosives,
predefined in AUTODYN, are presented and it is shown that there is only a minor difference between three of them.
It is also shown that the equivalent weight, compared to TNT, is about 1.45 kg for both pressure and impulse for
scaled distances of 2 ≤ Z ≤ 10 m/kg1/3; which differ to what is stated in e.g. ConWep.
Even though it is shown herein that AUTODYN performed very well in its prediction of the load characteristics
obtained in the experiments, it shall be pointed out that empirical and semi-empirical methods still fulfil an
important task in that they provide a basic explanation necessary for understanding complex load situations.
Accordingly, such less complex methods are still necessary to better understand the results from a CFD analysis, and
hence help prevent the latter from being transformed into a “black box”. It would even be beneficial to use a
combination of numerical simulations and experimental data to further improve and develop semi-empirical models
in order to better understand the blast load obtained in complex urban environments.

-- 138 of 156 --

ACKNOWLEDGEMENTS
The authors thankfully acknowledge the support given by the Swedish Rescue Services Agency and especially Björn
Ekengren for their support in the project. Furthermore we would like to thank the Norwegian Defence Estates
Agency and the Swedish Defence Research Agency for their initiation and successful co-operation with the
experimental work presented herein.
REFERENCES
[1] Ekengren B., 2006, Skyddsrum, SR 06, Swedish Rescue Services Agency, B54-141/06, Karlstad, Sweden.
[2] Johansson, M. and Laine., L., Resistance capacities of buildings for extreme dynamic loading, Research project
description, Swedish Rescue Services Agency, http://www.srv.se/templates/SRV_Page____15919.aspx,
Karlstad, Sweden.
[3] Remennikov, A.M., “A review of methods for predicting bomb blast effects on buildings,” Journal of
Battlefield Technology, 2003, 6(3), pp. 5–10.
[4] ConWep, 1992, ConWep – Collection of conventional weapons effects calculations based on TM 5-855-1,
Fundamentals of Protective Design for Conventional Weapons, U.S. Army Engineer Waterways Experiment
Station, Vicksburg, USA.
[5] Rose, T.A. and Smith, P.D., “Influence of the principal geometrical parameters of straight city streets on
positive and negative phase blast wave impulses,” International Journal of Impact Engineering, 2002, 27, pp.
359–376.
[6] Rose, T.A. and Smith, P.D., “The influence of street junctions on blast wave impulses produced by vehicle
bombs, ”Proceedings of the 11th International Symposium on Interaction of the Effects of Munitions with
Structures, 2003, Mannheim, Germany.
[7] Dörr, A., Brombacher, B., Gürke, G., “Blast behind street junctions originating from vehicle bombs,”
Proceedings of 18th Symposium on the Military Aspects of Blast and Shock, 2004, Bad Reichenhall, Germany.
[8] von Rosen, B., Guilbeault, E., Contesabile, E., “A preliminary investigation into the interaction of shock waves
behind a simple rectangular structure,” Proceedings of 18th Symposium on the Military Aspects of Blast and
Shock, 2004, Bad Reichenhall, Germany.
[9] Remennikov, A.M. and Rose, T.A., “Modelling blast loads on buildings in complex city geometries,”
Computers and Structures, 2005, 83, pp. 2197-2205.
[10] Smith, P.D. and Rose, T.A., “Blast wave propagation in city streets – an overview,” Prog. Struct. Engng Mater.
2006, 8, pp. 16-28.
[11] Century Dynamics Inc., 2004, AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[12] Johansson, M. and Laine, L., 2007, “Bebyggelsens motståndsförmåga mot extrem dynamisk belastning,
Delrapport 1: Last av luftstötvåg” (“Resistance capacities of buildings for extreme dynamic loading, Report 1:
Load from airblast”, in Swedish.), Swedish Rescue Services Agency, B54-232/07, Karlstad, Sweden.
[13] Johansson, M. and Laine, L., 2008, “Bebyggelsens motståndsförmåga mot extrem dynamisk belastning,
Delrapport 2: Explosion i gatukorsning” (“Resistance capacities of buildings for extreme dynamic loading,
Report 2: Explosion at an intersection”, in Swedish.), Swedish Rescue Services Agency, to be published in
2008, Karlstad, Sweden.

-- 139 of 156 --

Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 2 – Explosion i gatukorsning
E.1
Bilaga E Experiments and analyses of explosion at an urban
intersection
Denna bilaga innehåller en publicerad konferensartikel, Johansson et al. (2008), som presenterades
på MABS 20 i Oslo, Norge, 1-5 september 2008.
Rättelser
I publicerad artikel har några fel observerats i efterhand:
• Fel uttryck har angivits i ekvation (4). Rätt uttryck ges i ekvation (4.1) i rapporten.
• Felaktigt värde på impulstätheten och varaktigheten har använts för den negativa fasen som
listas i Tabell 5. Vid framtagning av listade värden har ekvation (C.8) och (C.10) i rapporten
använts men av misstag har termen W1/3 inte beaktats. Detta har medfört att i - och t –
överskattas eftersom multiplicering av termen W1/3 = 0,4161/3 = 0,747 inte medtagits i
uttrycken. Dvs. varaktigheten på stötvågornas negativa impulser borde minskas med om-
kring 25 %, vilket innebär en något mer hoptryckt tryck-tidskurva för den negativa fasen.

-- 140 of 156 --

EXPERIMENTS AND ANALYSES OF EXPLOSION
AT AN URBAN INTERSECTION
M. Johansson1, O.P. Larsen2, L. Laine2
1REINERTSEN Sverige AB, Lilla Bommen 5, SE-411 13 Göteborg, Sweden
2ANKER – ZEMER Engineering A/S, P.O. Box 253, NO-0702 OSLO, Norway
ABSTRACT
Predicting the load caused by a propagating blast wave in urban environment is a complex
task. For many load cases engineering tools based on empirical data or semi-empirical
methods, is sufficient. However, when the geometry gets more complex, it might be necessary
to use so-called hydro code programs to calculate the effect of the blast wave. Hence, there is
also a need to verify such programs against experimental results. Once validated, though, such
programs may be used to better understand the effects of blast load in complex load
situations.
In order to validate the results from the hydro code AUTODYNTM, an experimental test
series, scale 1:5, simulating an explosion in urban environment, was carried out. A simplified
intersection built up of four concrete boxes, dimension 2.3 m, with a total of eight charges, 0.4
and 1.6 kg of PETN, detonated at various locations were registered using 25 pressure gauges.
Numerical simulations were carried out in AUTODYN prior to the experimental test series. In
order to handle the simulations, and thus decrease the calculation time needed, an automatic
remapping procedure, in which the progress of the shock front was automatically taken into
consideration, was developed. To compare experimental and numerical results In addition, a
coherence measure was introduced. Out of almost 200 compared pressure-time relations about
65 % reached Coh ≥ 0.5; i.e. a limit that indicates very good agreement. Consequently, it is
concluded that AUTODYN manage very well to predict the blast load obtained in a complex
urban environment and that it may provide a powerful tool for further blast load studies.
An approach for a simplified technique, using superposition of several incident shock waves,
to estimate the blast load in a more complex environment is presented and compared to the
experimental and numerical results. This simplified technique is a rather crude instrument
when compared to Autodyn. However, it still provides a general idea of which blast waves
sums up the resulting pressure time history, and hence may be used in an early stage to
approximately describe the resulting loads on a structure. The results presented herein yield a
discrepancy of the positive and negative impulse intensities of only about 20 % compared to
that in the experiments.
INTRODUCTION
The Swedish Rescue Services Agency (Räddningsverket) is responsible for the building
regulations of the Swedish civil defense shelters. The shelters have specific regulations for
how they are planned, built, equipped and maintained [1]. It is also the responsibility of The
Swedish Rescue Services Agency to maintain and develop the knowledge connected to these

-- 141 of 156 --

structures. Consequently, a research project, [2], was initiated in 2006 wherein the main aim
is to increase the knowledge of the load characteristics from a blast load and how to determine
the capacity of any given building or group of buildings to withstand such loads.
Predicting the load caused by a propagating blast wave in urban environment is a complex
task. According to [3] there are three types of methods to be used: empirical, semi-empirical
and numerical methods. For non-complex load cases it is usually sufficient to use engineering
tools based on empirical data, e.g. ConWep [4]. For more complex situations, though, it is
necessary to use semi-empirical methods, i.e. methods based on models in which the
important physical process is accounted for in a simplified way. Several researchers have also
developed such models, e.g. [5]-[9], that work well within given limits and that provides an
increased understanding of the resulting blast load. However, when the geometry gets more
complex, such as in an urban environment, it may no longer be enough to use this type of
simplified tools, [10]. In such cases numerical methods incorporating computational fluid
dynamics (CFD) techniques, so-called hydro codes, may be used. However, even though the
computational possibilities, regarding both the complexity of the analysis and the required
computer time, steadily increase, it is still of utmost importance to make sure that the results
obtained in such methods correlate to the real experimental behavior. Hence, there is a need to
verify such programs against experimental results. Once this is guaranteed it is possible to use
hydro code programs instead of, or in conjunction with, experimental performances.
In this project the explicit code AUTODYNTM [11] is used. It has previously been shown in
[12] that AUTODYN provides satisfactory agreement with ConWep in analyses of spherical
air bursts. However, it is also necessary to verify that this is the case in a more complex urban
environment. Accordingly, when the opportunity to take part in an experimental test-series,
originally initiated and planned by the Norwegian Defense Estates Agency (Forsvarsbygg)
and to be carried out in cooperation with the Swedish Defense Research Agency (FOI),
revealed itself the Swedish Rescue Services Agency joined in as a co-financier. The aim of
this was twofold: to increase the knowledge about blast load in a complex environment and to
investigate the possibility for AUTODYN to predict the resulting load characteristics obtained
in such a case. Furthermore, the results obtained have also been used to compare the
possibility to use a simplified semi-empirical calculation method, based on super positioning
of several incident blast waves modified with regard to diffraction.
EXPERIMENTAL STUDY
The experimental location consisted of four concrete cubic boxes (dimension 2.3 m)
positioned at a distance of 2.3 m apart, see Figure 1. Two types of charges, 0.4 kg PETN and
1.6 kg PETN were used and positioned either close to the ground (0.20 m) or at mid height
(1.15 m) of the concrete boxes in four different locations. The tests were carried out in scale
1:5 meaning that the concrete boxes approximately corresponded to a four-story building of
height 11.5 m and the small charge of 50 kg PETN, detonating 1.0 m above ground. Hence, a
threat situation roughly equal to what might be expected from a small car bomb.
A total of 25 pressure gauges were used to register the pressure-time relations at various
locations. 20 gauges had fixed positions in the concrete boxes: 10 low (L) at a level of 0.20 m,
8 in the center (C) at 1.15 m above the ground and 2 on the roof (R), see Figure 1. All gauges
but two were positioned in the middle of the wall/roof. The last two gauges (BA6L and
BA7L) were positioned low 0.20 m from one of the box corners. The remaining 5 gauges
were used as free field pressure gauges (FF) and fastened on wooden boards placed on the
ground, with various positions depending on the position of the charge, see Figure 2.

-- 142 of 156 --

#1
A B
C D
#2 #3 #4
BA1L
BA3L BB3L
BB1L
BA2L BB2L	BB4L	BA4L
BA6L
BA7L
2.3 2.3 2.3	1.15
2.3
2.3
2.3
[m]
#1
A B
C D
#2 #3 #4
BA1C
BA3C BB3C
BB1C
BC2C
BB4C
BD2C
BA4C BA5R BB5R
2.3 2.3 2.3	1.15
2.3
2.3
2.3
[m]
0.20 m
0.4 kg PETN
0.20 m
low gauge
1.15 m
1.6 kg PETN
1.15 m
centre gauge
Figure 1: Top view of the experimental set-up and gauges located on the concrete boxes.
The charges were placed in four different positions (#1 – #4) at a height of 0.2 m (0.4 kg
PETN) or 1.15 m (1.6 kg PETN) above the ground.
#1 A B
C D
2.3	4.6 1.15	6.9
FF02	FF03	FF12 FF01
FF13
[m]
#2
A B
C D
2.3	4.6 1.15 2.3 4.6
FF13	FF12	FF01	FF02	FF03
[m]
#3
A B
C D
2.3	4.6 1.15 2.3 4.6
FF12 FF13	FF02 FF01	FF03
[m]
#4
A B
C D
2.3	4.6 1.15	6.9
FF12 FF03 FF02 FF01
FF13
[m]
Figure 2: Top view of the different ground gauge positioning for each charge location.
The explosive used was the Swedish PETN, Sprängdeg m/46, with a density of about
1 500 kg/m3, which consists of approximately 86 % pentolite and 14 % mineral oil.
Accordingly, the 0.4 kg and 1.6 kg charges used consisted of 0.344 kg and 1.376 kg pentolite,
respectively. Using the average equivalent TNT weight 1.21, given in ConWep, the scaled
distance Z (expressed as TNT equivalent) can be determined. The minimum horizontal
projection of the distance between the charges and the pressure gauges varied from 1.15 m to
about 10 m, which provide a scaled distance of 1.5 ≤ Z ≤ 13 m/kg1/3 and 1.0 ≤ Z ≤ 8.5 m/kg1/3
for the 0.4 kg and 1.6 kg charges, respectively.

-- 143 of 156 --

FINITE ELEMENT MODEL
The blast simulations were performed using the explicit code AUTODYN [11]. All
simulations were made before the experiments were carried out, which means that the
experimental results are used to validate how well AUTODYN manage to describe the blast
load in a complex environment similar to that in a city.
In the numerical model the physical domain was represented by rectangular boxes in 3D
which in turn were filled with cube shaped hexahedral linear elements. The size of these
rectangular boxes varied based on the blast scenarios as well as the different remap stages and
the planar symmetry present. A typical series of 3D remap runs over 4 stages would have
approximate rectangular domain sizes of: (2 m)3, (4 m)3, (8 m)3 and (16 m)3. The element size
used highly depended on the remap stage and the total number of elements employed in the
numerical mesh. The high-resolution runs strove to utilize the maximum number of elements
possible, i.e. approximately 4.5 million elements, which in turn yielded an element size of
approximately 10 mm at the first 3D remap stage. The remapping ratio was always 1:2,
consequently doubling the element size in each direction at every new remap stage. The four
concrete boxes and the ground were modeled using rigid boundaries. In all but the last
remapping stage no boundary conditions were necessary since the blast wave front was
always fully contained inside the corresponding numerical domain. In the last stage, though,
an outflow boundary condition was applied to the external boundaries of the domain.
Each simulation involved separate runs over several stages in which a self-developed
automatic remapping technique was used. The first stage involved a 1D spherical symmetric
run using a Multi-Material Euler solver simulating the initial detonation phase with both
explosive material and air. A remap procedure was then performed into a 2D axial symmetric
domain using the same Multi-Material Euler solver. Finally the simulation was concluded by
a series of 3D remapping runs using an Euler-FCT solver with air only. Some of these 3D
remapping stages involved planar symmetry, in which case the symmetry was fully exploited
in the simulations. Figure 3 exemplify the simulation procedure for two 3D remapping stages.
Stage 4: 3D remap Stage #2:
plane symmetry
symmetry
line
charge
#1
A
Stage 5: 3D remap Stage #3
A
C
Figure 3: Illustration of the principal layout of the finite element model for simulation of
charge at location #1 for Stages 4 and 5.
The large number of simulations with their accompanying remapping stages called for
automation at several levels of the simulation process. Therefore, an automatic script
generation with AUTODYN-linked Fortran user-subroutines was developed. The main idea of
this methodology was to enable automatic detection of the shock front during the blast, so that
a remap process could be initiated at the time when the shock front was close to the model
rigid boundaries, i.e. concrete boxes, or the boundary of the numerical domain.

-- 144 of 156 --

In AUTODYN there are four different pre-defined material models for the explosive PETN,
where the material densities vary between 0.88 kg/m3 and 1.77 kg/m3. A pre-study was
carried out to determine the difference between these material models and it was found that
three out of four models generated almost identical results, [13], [14]. This, together with an
approximation that the explosive in the charges used had a density of about 1.7 kg/m3, [13],
lead to the use of the PETN material model with density 1.77 kg/m3 in the final AUTODYN
simulations of the experimental set-up. The explosive was modeled using the JWL Equation
of State (EOS) with automatic conversion into Ideal Gas EOS when the entire explosive had
reached a compression value of -0.95. Additionally, at the start of the first 3D remap stage the
explosive was converted into air, thus facilitating the use of the single material Ideal-Gas-
EOS-Only Euler FCT solver. Input parameters for air and explosive used are listed in Table 1.
Table 1: Summary of input parameters in AUTODYN for air and explosive PETN.
Air PETN 1.77
ρ0 1.226·10-3 (g/cm3) ρ0 1.77 (g/cm3)
γ 1.4 C-J Detonation velocity 8 300 (m/s)
P0 101.3 (kPa) C-J Energy density 1.01·107 (kJ/m3)
C-J Pressure 3.35·107 (kPa)
In this paper mainly the results for the 0.4 kg charges are presented. Hence, if not mentioned
otherwise all results presented are related to the small charges. For more information about
the experiments and the analyses carried out, see [13], [14].
RESULTS
Comparison with ConWep
A comparison of measured peak pressure in the free field gauges (FF01 to FF13) and that
predicted using ConWep has been made in [13] and [14] and it was found that the
correspondence was satisfactorily. As a further illustration two samples of the pressure-time
relations for charges at location #1 and #4 are compared to that predicted by ConWep in
Figure 4. The pressures obtained from the charge at location #1 should agree well with that of
ConWep whereas it from the charge at location #4 is expected to deviate somewhat from
ConWep due to confinement effects at ranges larger than about 2.3 m.
-40
-20
0
20
40
60
80
100
120
140
160
180
0 2 4 6 8 10
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
#1 - FF02
#4 - FF02
ConWep
#1 A B
C D
2.3 m
FF02
#4
2.3 m
FF02
-10
-5
0
5
10
15
20
25
30
35
40
12 14 16 18 20 22
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
#1 - FF12
#4 - FF12
ConWep
#1 A B
C D
6.9 m
FF12
#4
6.9 m
FF12
Figure 4: Comparison of pressure-time relations in the experiments and ConWep [4].

-- 145 of 156 --

The key parameters of this comparison are summarized in Table 2. From this it can be
observed that ConWep somewhat underestimate the peak pressure and overestimate the
arrival time for the compared pressure relations. The resulting impulse intensity of the initial
positive phase, though, is rather similar.
Table 2: Summary of blast key parameters related to pressure-time relations in Figure 4.
Gauge R ta Ps+ is+ T+
[m] [ms] [kPa] [Pas] [ms]
#1-FF02 2.3 2.58 168 57 1.31
#1-FF12 6.9 14.3 20 24 3.15
#4-FF02 2.3 2.43 119 67 1.49
#4-FF12 6.9 13.8 38 29 2.41
ConWep 2.3 2.77 109 67 2.16
ConWep 6.9 14.6 17 25 3.49
It shall be observed that the peak pressure from a detonation in location #1 is noticeable
higher than from that in location #4 at a distance of R = 2.3 m. However, at a distance of
6.9 m the opposite is true, the pressure from the blast wave originating from location #4 being
higher. This effect is believed to be a result of the confinement effect obtained when the blast
wave propagates in the space between the concrete boxes.
Comparison with AUTODYN
Table 3 presents a comparison of key parameters overpressure P+, arrival time ta and impulse
intensity i+ and i - obtained in the AUTODYN simulations and that of the experiments for
charge locations #1 and #3. Here, the impulse intensities i+ and i - are defined as the sum of all
positive and negative phases, respectively, within the time period tend.
( )	∑ ∫	∑ =
+
=
+	+ =	=
n
k
t
t
n
k
k
k	end
k	a
dt	t	P	i	i 1	1
,
,
(1)
( )	∑ ∫	∑ =
−
=
−	− =	=
n
k
t
t
n
k
k
k	end
ka
dt	t	P	i	i 1	1
,
,
(2)
To get a better overview of how well the results coincide a coherence measure, according to
Eq. (3), was introduced.
( ) 	( )
−	+ +
−
−	=
∫
Exp	Exp
t
Exp	AD
i	i
dt	t	P	t	P
Coh
end
0
1 (3)
Here PAD(t) and PExp(t) are the pressure obtained in the AUTODYN simulations and
experiments, respectively, while i+Exp and i -Exp are the total positive and negative impulse
intensities from the experiments according to Eqs. (1) and (2) up to time tend = 50 ms.
Thereby, it is possible to fairly straightforwardly compare a large number of numerical and
experimental results and get a measure of how well they coincide. Using this measure,
Coh = 1.0 signify a perfect match. However, as illustrated in Figure 5, Coh ≥ 0.5 corresponds
to very good agreement between simulated and experimental results.

-- 146 of 156 --

Table 3: Summary of key parameters P+, ta, i+ and i- from AUTODYN analyses and
experiments for charge locations #1 and #3 when tend = 50 ms. A marking “-“ in the table
indicate that the experimental result was not valid.
Location #1 Location #3
Gauge AUTODYN Experiments AUTODYN Experiments
P+ ta i+ i- P+ ta i+ i- P+ ta i+ i- P+ ta i+ i-
[kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas]
FF01 656 0.62 143 137 480 0.65 248 - 698 0.62 226 184 610 0.61 237 704
FF02 129 2.42 85 94 168 2.58 57 - 136 2.38 140 141 93 2.53 120 220
FF03 32 7.69 52 50 47 8.14 82 54 33 7.74 76 77 45 7.78 71 66
FF12 14 13.45 35 35 20 14.27 38 35 136 2.38 137 141 93 2.63 113 155
FF13 16 9.89 32 32 18 10.50 28 31 34 7.61 114 112 37 8.21 106 102
BA1L 51 3.71 61 67 - - - - 8 9.71 52 51 8 9.81 49 47
BA2L 7 9.63 49 48 8 10.28 53 49 52 3.73 113 115 40 3.90 110 116
BA3L 51 3.71 113 115 63 3.89 112 110 2 258 0.63 505 235 2 369 0.47 763 328
BA4L 2 100 0.63 461 208 1 745 0.63 429 - 52 3.73 70 73 58 3.81 73 74
BA6L 94 1.56 76 148 114 1.68 104 107 1 272 1.05 325 233 991 1.03 345 238
BA7L 1 221 1.05 290 211 599 1.02 187 452 103 1.61 70 132 146 1.65 72 174
BB1L 6 15.34 20 22 11 16.76 22 19 8 11.55 34 31 8 12.34 32 27
BB2L 3 22.00 21 20 3 23.35 23 20 5 13.52 33 35 5 13.85 32 33
BB3L 6 15.34 42 44 11 16.63 45 44 51 7.93 115 112 54 8.39 99 98
BB4L 14 13.41 68 70 - - - - 77 6.45 131 127 73 6.89 122 118
-50
0
50
100
150
200
250
300
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
A B
C D
#2
BA3L	
Coh = 0.566
-40
-20
0
20
40
60
80
100
120
140
160
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
A B
C D
#4	FF02
Coh = 0.477
Figure 5: Example of correlation between AUTODYN analyses and experiments: #2-BA3L
(left) with Coh = 0.566, and #4-FF02, with Coh = 0.477.
From Table 3, Figure 5 and further comparisons presented later in this paper it can be seen
that the agreement between experimental and numerical results is generally very good. The
similarities between the pressures measured in the experiments and those obtained in
AUTODYN is evident. It can be concluded, though, that the rapid pressure rise observed in
the experiments is not always fully captured in AUTODYN. This is due to the model
discretization; i.e. the use of several remapping stages cause loss of information and also leads
to an element mesh that is no longer fine enough to accurately capture rapid pressure changes.
Nevertheless, the general behavior is still captured with good accuracy. Furthermore, it was
observed that the agreement between analyses and experimental results increased when the
pressure decreased. Thus, when the pressure was reduced to less than about 50-100 kPa the
general agreement went from very good to excellent. In Figure 6 the complete batch of

-- 147 of 156 --

coherence data for the 0.4 kg and 1.6 kg charges, totaling 8 charges with almost 200 result
series, is presented. From this it can be noted that about 65 % of the compared results reach
Coh ≥ 0.5; i.e. a limit that indicates very good agreement.
0
5
10
15
20
25
0.0 0.2 0.4 0.6 0.8 1.0
Coherence [-]
Portion of P(t) at given coherence [%]
0.4 kg
1.6 kg
0
10
20
30
40
50
60
70
80
90
100
0.0 0.2 0.4 0.6 0.8 1.0
Coherence [-]
Proportion of P(t) higher than given coherence [%]
0.4 kg
1.6 kg
Coh = 0.5
65 %
Figure 6: Coherence of 0.4 kg and 1.6 kg charges presented as portion at given coherence
(left) and portion higher than given coherence (right).
SUPERPOSITIONING MODEL
Above it was shown that the prediction made in AUTODYN generally shows very good
accuracy with that of the experiments. Hence, it has been confirmed that AUTODYN is a
powerful tool in the prediction of load characteristics from blasts in an urban environment.
The downside, though, is that programs such as AUTODYN are often expensive and demands
a highly skilled user to achieve reliable results. This, in addition to the time consuming
modeling and the needed CPU time to achieve the accurate results, are factors that weigh
heavily against using only FE-calculations to predict blast loading on structures.
Empirical and semi-empirical methods are easier to use and also provide a basic knowledge
for understanding different load situations. Such less complex methods are also needed to
better understand the results from a more complex analysis, and thus prevent the latter from
being transformed into a “black box”. Additionally, such simplified tools can be used to get
an approximate view of the resulting load characteristics in a complex situation and could
provide sufficient foundation for achieving design loads on the structures.
Based on this an attempt was made to have an engineer’s approach to the problem at hand and
below a method based on [8] is presented. The concept of this method is to superpose several
blast waves, where each wave is adjusted with regard to diffraction. The influence of reflected
pressure is not considered, i.e. the wave characteristics are based on incident pressures only,
nor is there an attempt to incorporate any confinement effects. The method is intentionally
made simple since the purpose here is to provide a model that may describe the main load
characteristics obtained in a complex load situation rather then a fully accurate prediction.

-- 148 of 156 --

The resulting pressure time-relation, P(t), for a general point in the geometry studied is
determined performing the following four steps:
1. Derive all pressure wave paths, Wi, 1 ≤ i ≤ n, which will be of interest for the
studied point. Calculate the total distances, Ri, for each of the paths from center of
charge to the studied point.
2. Use the total distances Ri in conjunction with the charge characteristics to
determine the corresponding airblast parameters for both the positive and negative
phase of the incident waves; i.e. arrival time ta, incident pressures Ps+, Ps-, incident
impulse intensities is+, is-, duration T+ and T- and the decay coefficient
α.
3. Calculate the pressure time histories for incident pressures for all wave paths using











+	+	≥
+	+	<	≤	+	




 +	−
−	⋅	−
+	<	≤	




 −
−
<
=
−	+
−	+	+
+	−
	−
−
+
−
+
−
	−
+
+
−
+
+
T	T	t
T	T	t	t	T	t	e
T
T	t	t
P
T	t	t	t	e
T
t	t
P
t	t
t	P
a
a	a
T
T	t	t
a
s
a	a
T
t	t
a
s
a
w a
a
i
t	if	,	0
if	,
)	(
1	9	.	13
if	,	1
if	,	0
)	( ))	(	(4
)	(	
α
(4)
4. The pressure-time histories for each wave Wi is multiplied with diffraction
coefficients, Cdiff,i, and summed together according to
∑=
⋅	=
n
i
w	i	diff t	P	C	t	P i
1
, )	(	)	( (5)
Blast parameters in step 2 may be determined in several ways, e.g. ConWep [4] for the
positive phase. However, in order to automate the calculations as far as possible equations
according to spherical burst provided in [15] were used for the positive phase. The decay
coefficient
α was determined in accordance with Eqs. (1) and (4), i.e. so that
( 	)


 −	−	= −	+	+	+	
α
α
	α e	T	P	i s	s 1
1	1 2 (6)
was fulfilled. For the negative phase, relations from [16] were used to determine the blast
parameters. The influence of reflected pressure was not considered, i.e. the wave
characteristics were based on incident pressures only.
The diffraction coefficients, Cdiff, used were determined using the experimental results and
comparing these to that predicted by ConWep. In [8] the diffraction coefficients were based
on the peak pressure PS+. However, in the comparisons made herein it was found that this
approach seemed to be a bit uncertain since it proved to differ somewhat also for similar load
situations. Therefore, the impulse intensity is+ of the first shock wave was also incorporated in
the comparison, see Table 4. Due to reflections, though, it was not possible to identify the full
effect of the first blast wave in the pressure-time relations obtained in the experiments, and
these results were therefore not included in the comparison.
Table 4 summarizes the pressures and impulse intensities used to determine Cdiff. Three
different load situations were identified: Case 1 with diffraction around one corner to a gauge
close to the edge, Case 2 with diffraction around one corner to a gauge positioned far from the
edge, and Case 3 with diffraction around two corners to a gauge positioned far from the edge.
Average values were determined for the diffractions coefficient when based on the pressure,

-- 149 of 156 --

Cdiff,P, and the impulse intensity, Cdiff,I, and an average value of these two, Cdiff,PI, was decided.
It is observed that Cdiff,P and Cdiff,I deviates for Case 1 and 3 but are approximately the same
for Case 2. The average diffraction coefficient Cdiff.PI is higher close to the edge (Case 1) than
in the middle of the wall (Case 2), which also is in line with that observed in [8]. However,
the coefficient determined based on the impulse intensity is the same, and therefore as a rough
approximation it seems reasonable to use the same value Cdiff,PI for both of them. Hence, an
approximate average value of Cdiff = 0.6 is used for both Case 1 and Case 2.
It seems plausible that the resulting diffraction coefficient should depend on the number of
corners that the blast wave diffracts around. Observing that the main difference between
Case 2 and Case 3 is that the former diffracts around one corner while the second diffracts
around two it is found that Cdiff,3 = Cdiff,2 2 seems like a good approximation. Hence, the
diffraction coefficient Cdiff,i in Eq. (4) is set to Cdiff,i = Cdiff m, where m is the number of corners
that wave Wi diffracts around.
Table 4: Determination of diffraction coefficient Cdiff,PI, based on experimental results and
predictions made in ConWep, [4].
Experiments ConWep Diffraction
Case Description Gauge R Ps+ is+ Ps+ is+ Cdiff,P Cdiff,i
[m] [kPa] [Pas] [kPa] [Pas] [-] [-]
#1-BA6L 1.826 114 43.4 180 82.8 0.63 0.52
#3-BA7L 1.826 146 43.7 180 82.8 0.81 0.53
#4-BA7L 3.837 34.4 28.7 41.2 43.2 0.84 0.67
1
Gauge
Charge
Average value: Cdiff,P 0.76 Cdiff,I 0.57 Cdiff,PI 0.67
#1-BA1L 2.776 - - 74.8 57.3 - -
#1-BA3L 2.776 63.2 35.5 74.8 57.3 0.84 0.62
#1-BB1L 7.376 11.5 14.2 15.1 23.4 0.76 0.61
#1-BB3L 7.376 11.0 11.2 15.1 23.4 0.73 0.48
#2-BA1L 4.787 11.2 19.1 28.5 35.3 0.39 0.54
#2-BA2L 4.787 11.9 22.9 28.5 35.3 0.42 0.65
#2-BB1L 9.387 3.5 - 9.6 18.5 0.36 -
#2-BB2L 9.282 4.1 10.4 11.1 18.7 0.37 0.56
#3-BA2L 2.776 40.5 35.0 74.8 57.3 0.54 0.61
#3-BA4L 2.776 58.0 35.7 74.8 57.3 0.78 0.62
#3-BB2L 7.126 5.3 - 15.8 24.2 0.34 -
#4-BA1L 4.787 11.8 19.6 28.5 35.3 0.41 0.55
#4-BA4L 4.787 11.4 19.5 28.5 35.3 0.40 0.55
#4-BB1L 4.787 11.6 19.3 28.5 35.3 0.41 0.55
#4-BB2L 4.787 11.5 19.8 28.5 35.3 0.40 0.56
2 Gauge
Charge
Average value: Cdiff,P 0.51 Cdiff,I 0.57 Cdiff,PI 0.54
#1-BA2L 5.076 7.8 15.9 26.0 33.4 0.30 0.48
#1-BB2L 9.676 2.3 - 10.5 18.0 0.22 -
#3-BA1L 5.076 7.6 16.9 26.0 33.4 0.29 0.51
3
Gauge
Charge
Average value: Cdiff,P 0.27 Cdiff,I 0.49 Cdiff,PI 0.38
The number of blast waves used in the calculations presented herein is limited to six. Further,
when determining the distances Ri an approximate approach was used based on simple
geometrical assumptions regarding angles of reflection; the difference in distance obtained
being rather negligible. An example of how the different shock waves are determined and put
together in a resulting pressure-time relation is shown in Figure 7 and Table 5. When
determining the blast parameters a spherical air burst was assumed. However, since the
current load case is more similar to that of a hemispherical airburst the charge weight was
increased with a factor 1.8 due to mirroring, [17].

-- 150 of 156 --

-20
-10
0
10
20
30
40
50
60
70
80
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 Ps	
+ [kPa]
W1
W2
W3
W4
W5
W6
#1
A B
C D
BA3L
W3
W1
W2
W4
W5
W6
-20
-10
0
10
20
30
40
50
60
70
80
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P [kPa]
Autodyn
Experiment
Super positioning
Coh = 0.692
#1
A B
C D
BA3L
W3
W1
W2
W4
W5
W6
Figure 7: (Top) The six shock wave paths W1 - W6, multiplied with Cdiff, that affect the
studied point BA3L, and (bottom) comparison with the results from AUTODN and the
experiments. The correlation between AUTODYN and experiments resulted in Coh = 0.692.
Table 5: Input data according to Eqs. (4) and (5) for the shock waves shown in Figure 7
The data is based on a spherical airburst using a scaled distance Z based on an equivalent
weight of 1.21 and a mirror coefficient of 1.8.
Geometry Positive phase Negative phase Diffraction
Wave R Z ta Ps+ is+ T+
α Ps- is- T - m Cdiff
[m] [m/kg1/3] [ms] [kPa] [Pas] [ms] [-] [kPa] [Pas] [ms] [#] [-]
W1 2.78 3.06 3.932 78.5 60.4 2.591 1.81 -13.1 -66.0 10.980 1 0.60
W2 5.85 6.44 12.311 20.8 30.6 3.481 0.52 -5.8 -31.0 11.769 2 0.36
W3 6.21 6.84 13.350 19.0 29.0 3.552 0.47 -5.4 -29.2 11.834 0 1.00
W4 7.38 8.12 16.738 14.8 24.6 3.759 0.37 -4.5 -24.5 12.026 3 0.22
W5 10.99 12.10 27.268 8.6 16.8 4.246 0.26 -2.9 -16.4 12.481 3 0.22
W6 10.81 11.90 26.735 8.8 17.1 4.225 0.28 -2.9 -16.6 12.461 0 1.00

-- 151 of 156 --

In Figure 8 some further comparisons between experiments, AUTODYN and the super
positioning method are illustrated. The correlations of the shown results, based on the positive
and negative impulse intensities, are summarized in Table 6.
-10
-5
0
5
10
15
20
25
30
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 Ps	
+ [kPa]
Autodyn
Experiment
Super
positioning
Coh = 0.613
#2
A B
C D
BA2L
W3
W1
W2
W4
W5
W6
-20
-10
0
10
20
30
40
50
60
70
80
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
Super
positioning
Coh = 0.571
W6	A B
C D
#3
BA2L
W5
W3
W2
W1
W4
Figure 8: Comparison of pressure-time relation from AUTODYN, experiments and super
positioning method: #2-BA2L (left) with Coh = 0.613, and #3-BA2L, with Coh = 0.571.
Table 6: Comparison of total positive and negative impulse intensities in experiments,
AUTODYN and super positioning method according to Eqs. (1) and (2) when tend = 40 ms.
#1-BA3L #2-BA2L #3-BA2L
Source is+ is-
γ + 1)	
γ - 2) is+ is-
γ + 1)	
γ - 2) is+ is-
γ + 1)	
γ - 2)
[Pas] [Pas] [-] [-] [Pas] [Pas] [-] [-] [Pas] [Pas] [-] [-]
Experiment 98.2 -101.2 1.00 1.00 52.8 -56.4 1.00 1.00 102.7 -100.2 1.00 1.00
Autodyn 99.8 -105.3 1.02 1.04 52.6 -58.8 1.00 1.04 105.1 -100.0 1.02 1.00
Super positioning 89.2 -92.5 0.91 0.91 41.0 -53.3 0.78 0.95 80.7 -84.6 0.79 0.84
1)
γ + = is+ / is+Exp 2)
γ - = is- / is-Exp
Even though the general pressure-time behavior does not fully correspond with the
experimental one for the whole time domain it still generates a good view of the load
characteristics obtained. The ratios
γ + and
γ - presented in Table 6 shows that the total impulse
intensities predicted by this simplified model is rather correct, the discrepancy being only
about 10-20 %. Hence, the good correlation in the comparisons made above suggest that the
super positioning method presented herein represent a simplified approach that yields results
fairly close to that observed in reality.

-- 152 of 156 --

CONCLUSIONS
An experimental and numerical study of blast load at an intersection was carried out. The load
effects of two types of charges, 0.4 kg and 1.6 kg PETN, positioned in four different locations
were simulated using the explicit code AUTODYN and compared to the experimental results.
All AUTODYN analyses were made before the experiments were carried out, and hence the
results presented herein are used to validate AUTODYN’s ability to describe the blast
behavior in an urban environment. An automatic remapping routine was developed for the
blast simulations in AUTODYN. This routine enabled automatic detection of the shock front
close to a boundary, and thus a criterion for when in time to initiate the remapping process,
allowing a more time efficient approach to large blast simulations in a complex environment.
It is shown that the agreement between the results obtained in the experiments and the
AUTODYN simulations generally is very good. A coherence measure is introduced for
comparing experimental and numerical results and it is concluded that this is a convenient
method to get an estimation of how well the results coincide. For the results presented herein
it is shown that about 65 % of the compared measurements fulfill Coh ≥ 0.5, i.e. a the limit
that indicates very good agreement. For gauges where the pressure was low, less than about
50-100 kPa, the agreement generally went from very good to excellent. Consequently, it is
concluded that AUTODYN manage very well to describe the resulting blast effects and that it
with confidence may be used as a powerful tool when studying blast loads in a complex urban
environment.
An approach for a simplified technique, using super position of several incident shock waves,
to estimate the blast load in a more complex environment is presented and compared to the
experimental and numerical results. It is found that the method, despite its simplicity and
rather crude approach, manage rather well to describe the general behavior of the resulting
load characteristics observed in experiments and numerical analyses. The results presented
herein show a deviation of just about 20 % compared to that in the experiments.
ACKNOWLEDGEMENTS
The authors thankfully acknowledge the Swedish Rescue Services Agency (Räddningsverket)
for the financing of the research project Resistance capacities of buildings for extreme
dynamic loading. Special thanks are due to Björn Ekengren for his invaluable support;
without him this project had not been the same. Further thanks are due to the Norwegian
Defence Estates Agency (Forsvarsbygg), especially Svein Christensen and Ståle Skudal, for
their initiation, invitation to take part in and financial support of the experimental work
presented herein. Additionally, the Swedish Defence Research Agency (FOI), of whom
Richard Forsén, Anders Carlberg and Roger Berglund are thanked, for their part in the
experimental performance. Finally, thanks to Bert von Rosen, Canadian Explosives Research
Laboratory, for providing help with the super positioning method presented herein.

-- 153 of 156 --

REFERENCES
[1] Ekengren, B., 2006, Skyddsrum, SR 06 (Civil defence shelters, SR 06, in Swedish), Swedish
Rescue Services Agency, B54-141/06, Karlstad, Sweden.
[2] Johansson, M. and Laine, L., 2006, Resistance capacities of buildings for extreme dynamic
loading, Research project description, Swedish Rescue Services Agency,
http://www.srv.se/templates/SRV_Page____15919.aspx, Karlstad, Sweden.
[3] Remennikov, A.M., 2003, A review of methods for predicting bomb blast effects on buildings,
Journal of Battlefield Technology, 6(3), pp. 5–10.
[4] ConWep, 1992, ConWep – Collection of conventional weapons effects calculations based on TM
5-855-1, Fundamentals of Protective Design for Conventional Weapons, U.S. Army Engineer
Waterways Experiment Station, Vicksburg, USA.
[5] Rose, T.A. and Smith, P.D., 2002, Influence of the principal geometrical parameters of straight
city streets on positive and negative phase blast wave impulses, International Journal of Impact
Engineering, 27, pp. 359–376.
[6] Rose, T.A. and Smith, P.D., 2003, The influence of street junctions on blast wave impulses
produced by vehicle bombs, Proceedings of the 11th International Symposium on Interaction of
the Effects of Munitions with Structures, Mannheim, Germany.
[7] Dörr, A., Brombacher, B., Gürke, G., 2004, Blast behind street junctions originating from vehicle
bombs, Proceedings of 18th Symposium on the Military Aspects of Blast and Shock, Bad
Reichenhall, Germany.
[8] von Rosen, B., Guilbeault, E., Contesabile, E., 2004, A preliminary investigation into the
interaction of shock waves behind a simple rectangular structure, Proceedings of 18th Symposium
on the Military Aspects of Blast and Shock, Bad Reichenhall, Germany
[9] Remennikov, A.M. and Rose, T.A., 2005, Modelling blast loads on buildings in complex city
geometries,” Computers and Structures, 83, pp. 2197-2205.
[10] Smith, P.D. and Rose, T.A., 2006, Blast wave propagation in city streets – an overview, Prog.
Struct. Engng Mater. 8, pp. 16-28.
[11] Century Dynamics Inc., 2004, AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[12] Johansson, M. and Laine, L., 2007, Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Delrapport 1: Last av luftstötvåg (Resistance capacities of buildings for extreme
dynamic loading, Report 1: Load from airblast, in Swedish.), Swedish Rescue Services Agency,
B54-232/07, Karlstad, Sweden.
[13] Johansson, M. and Laine, L., 2008, Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Delrapport 2: Explosion i gatukorsning (Resistance capacities of buildings for extreme
dynamic loading, Report 2: Explosion at an intersection, in Swedish.), Swedish Rescue Services
Agency, to be published in 2008, Karlstad, Sweden.
[14] Johansson, M., Larsen O.P., Laine, L., 2007, Explosion at an intersection in an Urban
Environment – Experiments and analyses, Proceedings of the 78th Shock and Vibration
Symposium, Philadelphia, PA, USA.
[15] Kingery, C.N., Bulmash, G., 1984, Airblast Parameters from TNT Spherical Air Burst and
Hemispherical Surface Burst, Ballistic Research Laboratory, Aberdeen Proving Ground, Technical
Report ARBRL-TR-02555, Maryland, USA.
[16] Departments of Special Weapons Agency (DSWA), Army, Navy, and Air Force, 1998, Protective
Structures Automated Design System (PSADs), Version 1.0, U.S. Army Corps of Engineers:
ATTN: CEMP-ET 20, USA.
[17] Baker, W.E., Cox, P.A. Westine, P.S., Kulesz J.J. Strehlow R.A., 1983, Explosion Hazards and
Evaluation, Elsevier Scientific Publishing Company, New York, NY, USA.

-- 154 of 156 --



-- 155 of 156 --

MSB Myndigheten för samhällsskydd och beredskap
651 81 Karlstad 	www.msb.se

-- 156 of 156 --