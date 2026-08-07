---
title: "L06 106 Explosionsbelastad Betong"
category: "popularvetenskapliga-artiklar"
originalFile: "skyddsrum/popularvetenskapliga-artiklar/l06-106_explosionsbelastad-betong.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","explosion","vatten","tryckvåg","splitter","detta","höga"]
summary: "vilka materialbeteenden som är väsentli- ga och valideringen att dessa simuleras på rätt sätt. I denna artikel belyses de dyna- miska effekter som uppträder vid explo- sionsbelastning av betong och vilken på- verkan dessa har på materialegenska- p..."
---

vilka materialbeteenden som är väsentli-
ga och valideringen att dessa simuleras på
rätt sätt. I denna artikel belyses de dyna-
miska effekter som uppträder vid explo-
sionsbelastning av betong och vilken på-
verkan dessa har på materialegenska-
perna.
Stötvågs- och splitterbelastning
Explosionsbelastning är ett mycket gene-
rellt begrepp som kan innefatta all typ av
belastning som uppkommer vid någon typ
av explosion. Dessa laster är starkt bero-
ende av till exempel det exploderande
föremålets egenskaper, dess omgivning
och avståndet till den exponerade struktu-
ren för vilka lasterna ska specificeras. Ge-
nerellt kan dock sägas att explosioner ge-
nererar två typer av laster på sin omgiv-
ning; stötvågsbelastning och splitteran-
slag.
Splittret kan vara av primär eller se-
kundar typ. Primära splitter bildas om
det explosiva ämnet är inneslutet i någon
typ av hölje. När det explosiva ämnet
antänds ökar temperaturen och trycket i
höljet och gör att detta sväller, vilket ger
sprickor. De bitar som bildas när höljet
till slut spricker upp kastas ut i omgiv-
ningen och utgör det primära splittret.
Under uppsprickningen frigörs även den
gas som varit innesluten och den energi
som kvartstår, efter att ha fragmenterat
höljet och kastat iväg splittret, leder till
bildandet av en luftstötvåg. Både luft-
stötvågen och det primära splittret sprids
ut från explosionens centrum och kan
träffa omkringliggande objekt. En del av
den luftburna stötvågen reflekteras då
och en del sprider sig in i objektet. Både
splittret och stötvågen
kan leda till bildandet
av sekundärt splitter
om objektet går sön-
der och delar av det
slungas 	ut 	i 	luften.
Även 	när 	stötvågen
träffar marken reflek-
teras en del av stötvå-
gen medan en del pro-
pagerar ner i marken,
vilket kan leda till en
markburen 	stötvåg.
Belastningen 	av 	en
struktur orsakad av en
explosion utgörs där-
för av:
 en luftburen stötvåg
som kan ha reflekterats
på marken och omgi-
vande objekt innan den
nått fram till strukturen
 primärt och sekundärt splitter av olika
storlek, material och hastighet
 en markstötvåg.
På grund av luftmotstånd minskar
splittrets hastighet med ökande avstånd
från explosionens centrum. Likaså mins-
kar tryckvågens (både mark- och luftbu-
ren) intensitet och maxtryck med ökande
avstånd. Detta ger en mycket komplex
belastningssituation som är starkt bero-
ende av det studerade fallet och som oftast
måste idealiseras för att kunna användas i
analytiska sammanhang.
I den svenska handledningen för kon-
struktion av skyddsrum, de så kallade
Skyddsrumsreglerna, hänvisas till arkiv-
bomben; se Ekengren (2006). Skydds-
rum ska enligt dessa regler klara belast-
ningen (stötvågen och splittret) orsakad
av denna bomb om denna briserar på ett
avstånd av 5 meter ifrån skyddsrummet.
Arkivbomben är en fiktiv bomb vars
lasteffekt på ett avstånd av fem meter
kan idealiseras enligt figur 1 under anta-
gande att alla splitter som träffar struktu-
ren har samma form och massa (fem
gram) och att de är jämt fördelade över
hela den exponerade ytan. Om istället ett
större enskilt splitter beaktas kan trycket
när detta träffar strukturen bli flera
gånger högre. Detta innebär alltså att
den 	armerade 	betongkonstruktionen
(skyddsrummet) ska klara trycknivåer
som är flera gånger högre än betongens
hållfasthet. Dessutom är både splitterlas-
ten och stötvågslasten mycket kortvari-
ga, från en bråkdel av en millisekund för
splitterlasten till mellan ett fåtal och ett
tiotal millisekunder för den luftburna
stötvågen. Detta innebär att det är starkt
42 	Bygg & teknik 7/12
Efterhand som datorernas prestan-
da och de numeriska teknikerna har
förbättrats har numeriska simule-
ringar blivit ett allt vanligare verk-
tyg för att analysera och förstå oli-
ka fenomen förknippade med explo-
sionsbelastning av betong och be-
tongkonstruktioner. Lasternas höga
intensitet ger en respons som är
starkt påverkad av dynamiska ef-
fekter, både på material- och struk-
turnivå. Det är därför väsentligt för
simuleringarnas verklighetsanknyt-
ning att dessa effekter kan beskri-
vas på ett så riktigt sätt som möj-
ligt. I numeriska simuleringar be-
skrivs betongens beteende med en
så kallad materialmodell. Denna
måste beskriva alla väsentliga ef-
fekter som uppstår i materialet för
den avsedda lasten – för explosions-
belastning innebär detta att beteen-
det för såväl kvasi-statiska, enaxiel-
la, spänningstillstånd som högst dy-
namiska, multiaxiella, spänningstill-
stånd ska beskrivas.
Myndigheten för samhällsskydd och be-
redskap (MSB) och avdelningen för Kon-
struktionsteknik/Betongbyggnad vid Chal-
mers tekniska högskola bedriver genom
ett mångårigt samarbete forskning inom
området explosionsbelastade betongkon-
struktioner. I ett av de nu pågående forsk-
ningsprojekten tas en ny materialmodell
för explosionsbelastad betong fram. Detta
arbete kan delas in i olika delar där arbetet
med den teoretiska uppbyggnaden av mo-
dellen och implementeringen och verifie-
ringen av denna är självklara. Minst lika
viktigt är dock arbetet med att definiera
Explosionsbelastad betong
Dynamiska aspekter av materialets respons i numeriska simuleringar
Artikelförfattare är Ulrika Nyström,
tekn lic, och Kent Gylltoft, professor,
Avdelningen för Konstruktionsteknik,
Chalmers tekniska högskola,
Göteborg.
Ϭ
ϱ
ϭϬ
ϭϱ
ϮϬ
Ϯϱ
ϯϬ
Ϭ 	Ϯ 	ϰ 	ϲ 	ϴ 	ϭϬ
ƚƌǇĐ
Ŭ ΀DWĂ΁
ƚŝĚ ΀ŵƐ΁
^ƉůŝƚƚĞƌƐǀćƌŵƐůĂƐƚ
>ĂƐƚ ĨƌĊŶ ůƵĨƚƐƚƂƚǀĊŐ
Figur 1: Idealiserad explosionsbelastning från
arkivbomben.

-- 1 of 5 --

dynamiska laster, vilket påverkar re-
sponsen.
Dynamiska effekter
De snabba belastningsförlopp och
höga trycknivåer som karaktäriserar
lasterna orsakade av en explosion le-
der till höga töjningshastigheter i den
utsatta 	betongkonstruktionen. 	Töj-
ningshastigheten är ett mått på hur
snabbt en kropp eller struktur defor-
meras och dess storlek kan ha stor in-
verkan på responsen, både på materi-
al- och strukturnivå. Figur 2 visar
vilka olika tidsberoende effekter som
dominerar beteendet för olika töj-
ningshastigheter och som måste beaktas
vid problemlösning och analyser. Det är
dock viktigt att poängtera att det inte
finns några skarpa gränser för vilka effek-
ter som är viktiga för att beskriva respon-
ser utan att det snarare är övergångszoner
där eventuellt flera effekter måste beak-
tas.
Inom mekaniken innebär statiskt att ett
system är i statisk jämvikt och att dess
tillstånd, som karaktäriseras av till exem-
pel dess spänning och deformation, är
konstant och därmed tidsoberoende. För
många material som utsätts för långvariga
laster fås dock krypning och/eller relaxe-
ring, vilket påverkar materialets tillstånd
och gör det tidsberoende. De töjningshas-
tigheter som är kopplade till dessa effekter
är mycket låga och effekten kan bortses
från när töjningshastigheten kommer upp i
nivåer kring 10 -5 s-1. Vid denna nivå kan
ofta kvasi-statiskt beteende antas. Detta
innebär att även om betydande töjnings-
hastigheter uppnås i materialet är belast-
ningen tillräckligt långsam för att de dy-
namiska effekterna ska kunna försum-
mas. För ökande töjningshastighet ökar
dock effekten av masströghet i systemet
och strukturdynamiska effekter så som
vibrationer kan vara av stor betydelse. Yt-
terligare ökning av töjningshastigheten
ger även en ökad effekt av vågutbredning
i strukturen, vilket gör att antaganden
som kan göras för statiska och strukturdy-
namiska problem inte längre är tillräckliga
för att beskriva responsen.
Informationen om en last sprids i en
struktur med hjälp av spänningsvågor vare
sig 	belastningen 	sker 	långsamt 	eller
snabbt, och vågutbredning i materialet är
därför inte specifikt för höga töjningshas-
tigheter. Spänningsvågorna färdas med
ljudets hastighet i materialet och för kvasi-
statisk belastning är lastens varaktighet
tillräckligt lång för att spänningsvågorna
ska hinna spridas i hela strukturen och re-
flekteras flera gånger; se figur 3a. Detta
innebär att systemet kan antas vara i jäm-
vikt och att vågutredningen inte behöver
beaktas explicit. För måttliga och höga töj-
ningshastigheter hinner dock inte informa-
tionen om lasten spridas i hela strukturen
innan området nära lasten börjar deforme-
ras och responsen blir annorlunda än för
lar med lägre trycknivåer. För solida ma-
terial, som har en mer eller mindre mar-
kant linjärelastisk fas för lägre trycknivå-
er, och som kan efterföljas av en fas med
starkt minskad kompressionsmodul måste
trycknivåerna uppnå en viss miniminivå
för att bildandet av en stötvåg ska vara
möjlig. Eftersom de snabbare delarna av
spänningsvågen också måste ha chans att
hinna ifatt de långsammare delarna måste
belastningen vara tillräckligt snabb för att
detta ska vara möjligt. Detta är också an-
ledningen till varför stötvågor inte bildas
för kvasi-statisk belastning även om höga
trycknivåer uppnås.
Stötvågor och deras abrupta karaktär
kan ha en betydande inverkan på material-
responsen. Den nära nog direkta ändring-
en från ett stadie till ett annat när stöt-
vågsfronten passerar innebär att den vär-
me som bildas när materialet kompakte-
ras 	(som 	en 	konsekvens 	av 	friktion
och/eller plastiska deformationer) inte
hinner transporteras bort, vilket kan leda
till höga temperaturer. För material som
karaktäriseras av en hög termisk expan-
sionskoefficient och hög styvhet kan detta
leda till en betydande ökning av trycket
när den termiska expansionen hålls emot.
De höga temperaturerna kan också inne-
bära att materialet genomgår fasföränd-
ring, det vill säga smälter eller förångas.
Betongens egenskaper
Betong är ett traditionellt använt material
och dess egenskaper vid kvasi-statisk be-
lastning är välkända. Dess relativt höga
tryckhållfasthet är en av betongens starka
43	Bygg & teknik 7/12
det kvasi-statiska fallet. Även om de struk-
turdynamiska effekterna dominerar bete-
endet i detta fall kan vågutbredningen be-
höva beaktas specifikt och begreppet blir
aktuellt. I fall med mycket eller extremt
höga töjningshastigheter kan belastningen
vara så snabb att det mesta av deformatio-
nen har ägt rum innan informationen har
hunnit spridas till andra delar av strukturen
och skadan blir mycket lokal; se figur 3b.
Dessa fall får därför betraktas som vågut-
bredningsproblem och strukturdynamiska
effekter kan komma att vara av sekundär
betydelse.
Tröghetseffekterna gör även att vid
mycket snabb belastning fås tillstånd som
är närmre plan töjning än plan spänning
även för enaxiell belastning eftersom ma-
terialet inte har tid att deformeras i sidled.
Detta innebär att omslutande spänningar
byggs upp och för explosionsbelastning,
som normalt orsakar höga eller mycket
höga 	töjningshastigheter, 	kan 	omslut-
ningstrycken bli mycket höga och tryckni-
våerna i strukturen kan överskrida materi-
alets enaxiella hållfasthet flera gånger
om.
En ytterlighet av vågutbredningseffek-
ten kan vara bildandet och utbredningen
av en stötvåg i strukturen. En stötvåg är en
spänningsvåg som har en nära nog dis-
kontinuerlig front, och som orsakar en
abrupt ändring i materialets tillstånd.
Stötvågor bildas som en konsekvens av
materialens ickelinjära kompressionsbe-
teende och innebär att snabbare delar av
spänningsvågorna 	som 	propagerar 	i
strukturen hinner ikapp långsammare de-
sĊŐƵƚďƌĞĚŶŝŶŐ	^ƚƌƵŬƚƵƌĚǇŶĂŵŝŬ
ϭϬ
Ͳϴ 	ϭϬ
Ͳϲ 	ϭϬ
Ͳϰ 	ϭϬ
ͲϮ 	ϭϬϬ 	ϭϬϮ 	ϭϬϰ 	ϭϬϲ 	ϭϬϴ	
Ϭ
DĊƚƚůŝŐĂ
ƚƂũŶŝŶŐƐͲ
ŚĂƐƚŝŐŚĞƚĞƌ
,ƂŐĂ
ƚƂũŶŝŶŐƐͲ
ŚĂƐƚŝŐŚĞƚĞƌ
DǇĐŬĞƚ ŚƂŐĂ
ƚƂũŶŝŶŐƐͲ
ŚĂƐƚŝŐŚĞƚĞƌ
ǆƚƌĞŵƚ ŚƂŐĂ
ƚƂũŶŝŶŐƐͲ
ŚĂƐƚŝŐŚĞƚĞƌ
:ŽƌĚďćǀŶŝŶŐ 	<ƵůĂŶƐůĂŐ
;уϭͲϮ Ŭŵͬ ƐͿ
ƐƚĞƌŽŝĚĂŶƐůĂŐ
;хϱ Ŭŵͬ ƐͿ
>ƵĨƚƐƚƂƚǀĊŐ
dƂũŶŝŶŐƐŚĂƐƚŝŐŚĞƚ ΀Ɛ Ͳϭ
΁
<ǀĂƐŝͲ
ƐƚĂƚŝƐŬƚ
<ƌǇƉŶŝŶŐ ŽĐŚ
ƌĞůĂǆĞƌŝŶŐ
Figur 2: Töjningshastighetens inverkan på
problembeskrivningen; efter bland annat Zukas (2004) och Ramesh (2008).
Figur 3: Vågutbredning och strukturrespons för a) långsam
respektive b) mycket snabb belastning.
a) 	b)

-- 2 of 5 --

fördelar. Däremot är dess låga hållfasthet
och spröda beteende i drag två stora nack-
delar för materialet i konstruktionssam-
manhang, något som går att åtgärda genom
att armera betongen. Betongens stora ener-
giupptagande förmåga för höga tryck, och
om rätt armerat, sega beteende i drag, gör
det också lämpligt att använda för kon-
struktioner som ska skydda människor, ut-
rustning eller andra omkringliggande kon-
struktioner för explosionslaster. Som be-
skrivits ovan gör dessa extrema dynamiska
belastningar det nödvändigt att även känna
till betongens respons för höga töjnings-
hastigheter och höga fleraxiella tryck.
Höga töjningshastigheter. Vid snabba
belastningsförlopp fås en förhöjd hållfast-
het i betongen på grund av dynamiska ef-
fekter. Detta karaktäriseras ofta genom så
kallade DIF-kurvor, där DIF kommer från
engelskans Dynamic Increase Factor och
syftar på kvoten mellan den dynamiska
och den statiska hållfastheten. Figur 4 vi-
sar DIF-kurvorna för betong i enaxiellt
drag respektive tryck, framtagna enligt
Malvar & Ross (1998) respektive CEB-
FIP Model Code 1990 (1993), för en be-
tong med tryckhållfastheten 35 MPa.
Även om många studier har gjorts inom
området är det inte helt klarlagt vilka dyna-
miska fenomen som ger upphov till denna
hållfasthetsökning. Dock tror man att en
del av ökningen beror av viskösa effekter
av det porvatten som finns i betongen.
Detta ger dock måttliga ökningar av håll-
fastheten och för högre töjningshastigheter
kommer andra effekter in. I tryck får man
en strukturell effekt där tröghet ger ett om-
slutningstryck, och därmed högre hållfast-
het. Detta ger en stark påverkan av håll-
fastheten och tros vara av avgörande bety-
delse för den markanta ökning som obser-
verats för töjningshastigheter över ett visst
tröskelvärde, i figuren är detta 30 s -1. I
drag tros den skarpa ökningen av hållfast-
heten vid töjningshastigheter över cirka 1
s-1 bero på bland annat ändrade skademöns-
ter i betongen. Detta innebär att fler mak-
rosprickor bildas och istället för att söka
den svagaste, minst energikrävande, vägen
runt ballasten som vid kvasi-statisk belast-
ning kan sprickorna gå rakt igenom dessa,
se figur 5.
Fleraxiell tryckbelastning. Hållfasthe-
ten i betong är alltså starkt beroende av
det rådande spänningstillståndet i materia-
let. Detta visar sig även vid försök med
multiaxiell belastning, det vill säga där
provkroppen belastas i olika riktningar
samtidigt. I figur 6a, visas hur spännings-
töjningskurvan för betong påverkas för
ökande omslutning i tryck. Redan för rela-
tivt små omslutningstryck ses en markant
ökning av hållfastheten och när omslut-
ningstrycket når upp till nivåer omkring
den enaxiella tryckhållfastheten har håll-
fastheten ökat flerfaldigt. För splitteran-
slag kan det omslutande trycket som
byggs upp i betongen bli extremt högt
och nivåer på hundratals megapascal, eller
högre, kan uppstå. Figur 6b visar spän-
nings-töjningskurvor från kvasi-statiska
försök med omslutningstryck på dessa ni-
våer. Här kan man se hur betongen får ett
segare beteende med ökade plastiska töj-
ningsnivåer vid brott, samt den kraftigt
ökade hållfastheten vilken nu är tiotals
gånger större än för enaxiell belastning.
Hydrostatiskt tryck, där trycket på be-
tongen är lika i alla riktningar, kan ses som
en ytterlighet av omslutning. På grund av
sin sprödhet och porositet har betong en
relativt ickelinjär kompressionskurva, vil-
ket visas schematiskt i figur 7a på sidan
46. Initialt kompakteras betongen näst in-
till linjärelastiskt och skadan begränsas till
bildandet av mikrosprickor i cementstruk-
turen. För ökande trycknivå ökar också an-
delen mikrosprickor och för en viss nivå
(markerad som
ρel i figuren), har cement-
strukturen försvagats så pass mycket att
porväggar börjar kollapsa och man får en
plastisk kompaktering. Detta har en stark
inverkan på styvheten som minskar dras-
tiskt. Med stigande trycknivån ökar även
andelen mikrosprickor i cementstrukturen
och fler och fler porer kollapsar, vilket le-
der till att styvheten åter ökar. När alla po-
44 	Bygg & teknik 7/12
Ϭ
ϭ
Ϯ
ϯ
ϰ
ϱ
ϲ
ϳ
ϴ
ƚƂũŶŝŶŐƐŚĂƐƚŝŐŚĞƚ ΀ƐͲϭ ΁
ƌĂŐ
dƌǇĐŬ
ϭϬϮ	ϭϬͲϴ 	ϭϬͲϲ 	ϭϬͲϰ 	ϭϬͲϮ 	ϭϬϬ
Figur 4: DIF-kurvor för betong i enaxiellt drag och tryck.
ŵŝŬƌŽƐƉƌŝĐŬŽƌ
ŵĂŬƌŽƐƉƌŝĐŬŽƌ
^ƉƌŝĐŬƉůĂŶ
WƌŽǀŬŽƌƉƉĂƌ
ďĂůůĂƐƚ
Figur 5: Schematisk bild av den dynamiska inverkan på
sprickbilden i enaxiellt drag. Till vänster: långsam
belastning, till höger: snabb belastning.
ĂͿ 	ďͿ
ͲϮϱϬ
ͲϮϬϬ
ͲϭϱϬ
ͲϭϬϬ
ͲϱϬ
Ϭ
ͲϲϬ 	ͲϰϬ 	ͲϮϬ 	Ϭ 	ϮϬ 	ϰϬ
ƚƂũŶŝŶŐ ΀ŵŵͬ ŵ΁
Ϭ DWĂ
Ϯ͕ ϭϱ DWĂ
ϰ͕ ϯ DWĂ
ϴ͕ ϲ DWĂ
ϭϳ͕ Ϯ DWĂ
ϯϬ͕ ϭ DWĂ
ϰϯ DWĂ
ͲϭϬϬϬ
ͲϴϬϬ
ͲϲϬϬ
ͲϰϬϬ
ͲϮϬϬ
Ϭ
ͲϲϬ 	ͲϰϬ 	ͲϮϬ 	Ϭ
ƚƂũŶŝŶŐ ΀ŵŵͬ ŵ΁
ϮϬ DWĂ
ϭϬϬ DWĂ
ϮϬϬ DWĂ
ϰϬϬ DWĂ
Figur 6: Betongens respons i tryck med relativt a) låga och b) höga
omslutningstryck; efter försök av Imran & Pantazopoulou (1996)
respektive Caner och Bažant (2000).
a) 	b)

-- 3 of 5 --

rer har kollapsat fås åter igen ett näst intill
linjärelastiskt beteende, där styvheten är
högre än i den initiala elastiska fasen. Det-
ta kan förklaras med att materialet nu har
blivit ett kompakt, porfritt, granulat materi-
al där styvheten är starkt beroende av be-
ståndsdelarnas styvhet, det vill säga av
ballastens styvhet. För hydrostatiskt tryck
fås därför aldrig brott i den bemärkelsen
att betongen inte kan ta högre laster efter-
som man kan fortsätta att trycka på be-
tongkroppen även om betongen skadas
kraftigt.
I figur 7b visas spännings-töjningskur-
vor för betong under hydrostatiskt tryck,
med maximala trycknivåer på 500 re-
spektive 650 MPa; från Gabet et al
(2008). Dessa maxtryck är i storleksord-
ningen för hur höga hydrostatiska tryck
man kan nå under kvasi-statiska förhål-
landen, men är inte tillräckligt höga för
att kompaktera betongen till ett porfritt
material. I figuren kan man däremot ur-
skilja den inledande, linjärelastiska fasen
och hur styvheten minskar efter denna för
att sedan åter öka när trycket ökar. För att
prova materialresponsen för betong vid
högre trycknivåer än i storleksordningen
0,5 GPa används ofta försök som innefat-
tar detonationer och plana stötar.
Höga trycknivåer – stötvågsbelastning.
För laster med hög dynamisk intensitet
och höga trycknivåer kan en stötvåg bil-
das i materialet. Detta innebär att respon-
sen i materialet kan påverkas av tempera-
turökningar som en konsekvens av att det
inte finns tid för materialet att transportera
bort den värme som bildas när betongen
skadas. Försöken som utförs för att prova
betongens respons vid höga trycknivåer
är därför påverkade av temperaturen och
det är svårt att kvantifiera denna effekt.
Förutom att dessa provningar är dyra att
genomföra är det svårare att styra prov-
ningarna, mäta responsen och att utvärde-
ra resultaten än i kvasi-statiska försök.
På grund av de många svårigheterna
kopplade till denna typ av försök är till-
gången till dessa materialdata begränsad. I
figur 8 visas dock data för betong från
olika försöksserier med starkt dynamiska
laster tillsammans med en kvasi-statiskt
uppmätt kurva från ett försök med plan
töjning. Valet att jämföra resultaten för de
dynamiska försöken med ett kvasi-sta-
tiskt försök med plan töjning är motiverat
med att stötvågsbelastning ger ett stadie
av just plan töjning i materialet. För ex-
tremt höga trycknivåer blir dock skillna-
den mellan spänningstillståndet för plan
töjning approximativt lika med det för
hydrostatiskt tryck eftersom skjuvhåll-
fasthetens andel av det totala trycket då är
försumbart liten.
För försök där en stötvåg bildas i mate-
rialet fås ingen kontinuerlig lastkurva
som i fallen med kvasi-statisk belastning,
utan endast punkter i spännings-töjnings-
planet kan tas fram. Detta beror på att
man endast kan uppskatta tillståndet före
och efter passagen av stötvågsfronten. Vi-
dare kan man inte binda ihop punkter från
dessa försök och anta att detta är lastkur-
van eftersom varje punkt representerar
just en direkt tillståndsändring från ett
visst initialt stadie. En sådan kurva skulle
istället representera de tillstånd som kan
nås genom passagen av en stötvåg, och
46 	Bygg & teknik 7/12
beroende på dess styrka nås olika punkter
på kurvan. Det som ibland kallas betong-
ens Hugoniot-kurva är en sådan kurva.
I figuren ses tydligt betongens ickelin-
jära kompression, och de tre olika faserna
som nämnts tidigare kan urskiljas. Tem-
peraturens inverkan på resultaten kan
uppskattas som skillnaden mellan upp-
nådda trycknivåer vid starkt dynamisk
belastning och kvasi-statisk belastning.
Även för relativt låga trycknivåer är det
dock svårt att kvantifiera denna effekt
eftersom det är olika betonger som har
provats. Olika betongblandningar, med
olika egenskaper och vatteninnehåll ger
olika respons. I Gebbeken et al (2006) har
till exempel en betong med högre håll-
fasthet (cirka 50 MPa) används än i de
övriga fallen (cirka 35 till 40 MPa). Detta
är åtminstone en anledning till att dessa
punkter ligger högre än övriga för voly-
metriska töjningar över minus femton
procent. Generellt kan dock sägas, att för
trycknivåer upp till några gigapascal ver-
kar effekten av temperaturen vara begrän-
sad och behöver inte nödvändigtvis beak-
tas. De begränsade trycknivåerna för kva-
si-statiska försök gör det däremot mycket
Figur 8: Försöksdata från detonations- och plan-stöt-provningar tillsammans
med data från kvasi-statiska försök under plan töjning.
,ǇĚƌŽƐƚĂƚŝƐŬƚ ƚƌǇĐŬ
/ŶŝƚŝĂů ĞůĂƐƚŝƐŬ ŬŽŵƉĂŬƚĞƌŝŶŐ
WůĂƐƚŝƐŬ ŬŽŵƉĂŬƚĞƌŝŶŐ
;ƐŬĂĚĂ ŝ ĐĞŵĞŶƚƐƚƌƵŬƚƵƌĞŶ ŽĐŚ ƉŽƌŬŽůůĂƉƐͿ
<ŽŵƉĂŬƚĞƌŝŶŐ Ăǀ ŐƌĂŶƵůĂƚ ŵĂƚĞƌŝĂů
ƉƐ
ƉĞů
ǀŽůǇŵ
Figur 7: Beteende för betong under hydrostatiskt tryck; (ovan) schematiskt
och (till höger) från försök Gabet et al (2008).

-- 4 of 5 --

svårt att uppskatta temperaturens effekt
för högre trycknivåer.
Slutord
Det är en stor utmaning att modellera be-
tongens beteende vid explosionsbelast-
ning. Både lasten och responsen, på såväl
material- som strukturnivå, är mycket
komplex och framtagandet av relevanta
resultat kräver god kännedom om alla
dessa områden.
Även om modellering av betong kan
göras mycket detaljerad innebär detta sto-
ra kostnader räknat i simuleringstid. Till
exempel kan de olika komponenterna i
betongen 	(cementstrukturen, 	ballasten,
porerna och bindningarna mellan dessa)
modelleras separat. Detta är motiverat för
detaljerade studier av materialresponsen
och komponenternas inverkan och inter-
aktion vid olika typer av belastningar. För
större strukturer är denna detaljerade re-
spons av sekundär betydelse och andra
begränsningar som till exempel idealise-
ring av randvillkor, utgör en större felkäl-
la än en mer approximativ materialbe-
skrivning skulle göra. Istället innebär den
höga detaljnivåen att modelleringen blir
extremt kostsam. Därför är det viktigt att
välja rätt nivå på komplexiteten i den nu-
meriska modellen – det är inte nödvän-
digt för simuleringarnas riktighet att be-
skriva alla materialeffekter in i minsta de-
talj, men väsentliga egenskaper får inte
approximeras bort.
Figur 9 visar de karaktäristiska materi-
albeteendena för betong som anses vara
av betydelse för simulering av stötvågs-
och splitterbelastade konstruktioner. De
mest väsentliga egenskaperna utgör basen
av pyramiden, och är avgörande för simu-
leringarnas validitet. Ju längre upp i pyra-
miden en egenskap befinner sig, ju mindre
betydelse anses den ha för resultaten. 	
Referenser
Caner F.C. & Bažant Z.P. (2000): Mic-
roplane model M4 for concrete: II. Algo-
rithm and calibration. Journal of Enginee-
ring Mechanics 126, 954–961.
47	Bygg & teknik 7/12
CEB-FIP Model Code 1990 (1993):
CEB-FIP 	Model 	Code 	1990. 	Design
Code, Thomas Telford, Lausanne, 437
sid.
Ekengren B. (2006): Skyddsrum SR06.
Räddningsverket, 113 sid.
Gabet T., Malécot Y., & Daudeville L.
(2008): Triaxial behaviour of concrete
under high stresses: Influence of the loa-
ding path on compaction and limit states.
Cement and Concrete Research 38, 403–
412.
Gebbeken N., Greulich S., & Pietzsch
A. (2006): Hugoniot properties for con-
crete determined by full-scale detonation
experiments and flyer-plate-impact tests.
International Journal of Impact Enginee-
ring 32, 2017–2031.
Grady D.E. (1993): Impact Compres-
sion Properties of Concrete. Proceedings
of the Sixth International Symposium on
Interaction of Nonnuclear Munitions with
Structures, May 3–7 1993, Panama City
Beach, Florida, 172–175.
Grady D.E. (1996): Shock Equation of
State Properties of Concrete i Structures
under Shock and Impact IV. Editerad av
N. Jones et al., Computational Mechanics
Publications, Southampton, 405–414.
Hall C.A., Chhabildas L.C., & Rein-
hart W.D. (1998): Shock Hugoniot and
release states in concrete mixtures with
different aggregate sizes from 3 to 23
GPa. 	AIP 	Conference 	Proceeding
429/119, American Institute of Physics,
119–122.
Imran I. & Pantazopoulou S.J. (1996):
Experimental study of plain concrete
under triaxial stress. ACI Material Jour-
nal 93, 589–601.
Malvar L.J. & Ross C.A. (1998): Revi-
ew of Strain Rate Effects for Concrete in
Tension. ACI Materials Journal 95/6,
735–739.
Ramesh K.T. (2008): High strain rate
and impact experiments i Springer Hand-
book of Experimental Solid Mechanics.
Editerad av W.N. Sharpe, Jr., Springer,
874 sid.
Zukas J. (2004): Introduction to hydro-
codes. Elsevier Science, 326 sid.
Figur 9: Betongens karaktäristiska materialegenskaper och inbördes väsentlighet för
simuleringarnas validitet (nerifrån och upp).
DƵůƚŝĂǆŝĞůů ďĞůĂƐƚŶŝŶŐ	ŶĂǆŝĞůů ďĞůĂƐƚŶŝŶŐ
sŽůǇŵƂŬŶŝŶŐ ĨƂƌĞ ƚƌǇĐŬďƌŽƚƚ
^ƉćŶŶŝŶŐƐƚŝůůƐƚĊŶĚĞƚƐ ŝŶǀĞƌŬĂŶ ƉĊ ďƌŽƚƚŚĊůůĨĂƐƚŚĞƚĞŶ
;ŚƵƌ ĨŽƌŵĞŶ Ăǀ ŚĊůůĨĂƐƚŚĞƚƐǇƚĂŶ ŝ ĚĞƚ ĚĞǀŝĂƚŽƌŝƐŬĂ
ƉůĂŶĞƚ ćŶĚƌĂƐ ŵĞĚ ƚƌǇĐŬŶŝǀĊŶͿ
^ƉćŶŶŝŶŐƐƚŝůůƐƚĊŶĚĞƚƐ ŝŶǀĞƌŬĂŶ ƉĊ ďƌŽƚƚŚĊůůĨĂƐƚŚĞƚĞŶ
;ĨŽƌŵĞŶ Ăǀ ŚĊůůĨĂƐƚŚĞƚƐǇƚĂŶ ŝ ĚĞƚ ĚĞǀŝĂƚŽƌŝƐŬĂ
ƉůĂŶĞƚͿ
,ĊůůĨĂƐƚŚĞƚĞŶƐ ƚƌǇĐŬŬćŶƐůŝŐŚĞƚ
ZĞƐŝĚƵĂůŚĊůůĨĂƐƚŚĞƚ ŝ ƚƌǇĐŬ
/ĐŬĞůŝŶũćƌ ŬŽŵƉƌĞƐƐŝŽŶƐŬƵƌǀĂ ;ŚƂŐĂ ƚƌǇĐŬͿ
DũƵŬŶĂŶĚĞ ĞĨƚĞƌ ďƌŽƚƚ
>ŝŶũćƌĞůĂƐƚŝƐŬƚ ďĞƚĞĞŶĚĞ ĨƂƌĞ ďƌŽƚƚ
dƂũŶŝŶŐƐŚĂƐƚŝŐŚĞƚƐďĞƌŽĞŶĚĞ ;ĚƌĂŐ ŽĐŚ ƚƌǇĐŬͿ
^ƚǇǀŚĞƚƐŵŝŶƐŬŶŝŶŐ ĨƂƌ ƐŬĂĚĂĚ ďĞƚŽŶŐ
dƂũŶŝŶŐƐŚĊƌĚŶĂŶĚĞ ĨƂƌĞ ƚƌǇĐŬďƌŽƚƚ
dƂũŶŝŶŐƐŚĂƐƚŝŐŚĞƚƐďĞƌŽĞŶĚĞ ďƌŽƚƚĞŶĞƌŐŝ
dƂũŶŝŶŐƐŚĊƌĚŶĂŶĚĞ ĨƂƌĞ ĚƌĂŐďƌŽƚƚ

-- 5 of 5 --