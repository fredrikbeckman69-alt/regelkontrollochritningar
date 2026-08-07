---
title: "L04 116 Concrete Beams Subjected To Repeated Drop Weight Impact And Stat"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-116_concrete-beams-subjected-to-repeated-drop-weight-impact-and-stat.pdf"
fileType: "PDF"
keywords: ["betong","beräkning","explosion","thesis","master","engineering","civil","architecture"]
summary: "Concrete Beams Subjected to Repeated Drop-Weight Impact and Static Load Assessment of structural response in experimental testing and predicted response with numerical analyses Master’s Thesis in the Master’s Programme Structural Engineering and B..."
---

Concrete Beams Subjected to Repeated
Drop-Weight Impact and Static Load
Assessment of structural response in experimental testing and
predicted response with numerical analyses
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
JACK JÖNSSON
ANTON STENSEKE
Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2018
Master’s Thesis ACEX30-18-34

-- 1 of 237 --



-- 2 of 237 --

MASTER’S THESIS ACEX30-18-34
Concrete Beams Subjected to Repeated Drop-Weight Impact and Static
Load
Assessment of structural response in experimental testing and predicted response with numerical
analyses
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
JACK JÖNSSON
ANTON STENSEKE
Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2018

-- 3 of 237 --

Concrete Beams Subjected to Repeated Drop-Weight Impact and Static Load
Assessment of structural response in experimental testing and predicted response with numerical analyses
JACK JÖNSSON
ANTON STENSEKE
© JACK JÖNSSON , ANTON STENSEKE, 2018
Master’s Thesis ACEX30-18-34
ISSN 1652-8557
Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Gothenburg
Sweden
Telephone: +46 (0)31-772 1000
Cover:
Strain fields in a reinforced concrete beam subjected to impact load at different time steps, from both
experimental results and numerical modelling.
Chalmers Reproservice
Gothenburg, Sweden 2018

-- 4 of 237 --

Concrete Beams Subjected to Repeated Drop-Weight Impact and Static Load
Assessment of structural response in experimental testing and predicted response with numerical analyses
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
JACK JÖNSSON
ANTON STENSEKE
Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
The behaviour of a reinforced concrete structure subjected to dynamic loading differ compared to static
loading. Examples of dynamic loads can be high wind loads, explosions or an impact. The purpose of
this thesis was to increase the knowledge about dynamic loaded structures by conducting experiments on
simply supported beams and evaluate their behaviour. The beams were subjected to an impact from a
drop-weight, both repeatedly and once, and thereafter statically tested until failure. Undamaged beams
were also tested statically to be able to form a basis of comparison.
The behaviour of the beams during the experiments were captured with a high speed camera and thereafter
processed through digital image correlation (DIC). One of the main objectives with this thesis was to try
to predict the response of the beams with different numerical methods such as a two-degree of freedom
(2DOF) system and a non-linear finite element analysis in LS-DYNA. Deflection, plastic rotation capacity,
internal work, impact force and impulse load are some of the parameters that were evaluated using the
numerical methods with support by hand calculations.
When subjected to repeated impacts the beams experienced extensive local damage, resulting in a large
reduction in load capacity. The extent of the local damages was unexpected and something that is difficult
to predict with the numerical methods used. The local damages gave rise to spalling of the concrete
which made the postprocessing in DIC difficult as well. Both the 2DOF model and LS-DYNA tended to
overestimate the deflection of the beam, but still within reasonable limits. The crack pattern from the
experiments had a good resemblance with the crack pattern obtained from LS-DYNA, where only the
first drops was modelled.
The experimental results had a good overall resemblance with the results from the numerical methods
for one drop. Regarding numerous drops, the local damage needs to be taken into account if the response
is to be described in a more accurate way using usch numerical methods.
Keywords: Reinforced concrete, impact loading, repeated impact loading, static loading, Digital image
correlation, DIC, two-degree-of-freedom, 2DOF, LS-DYNA, non-linear finite element analysis, impact
force, internal work, impulse load, plastic rotation capacity
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 i	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 i	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 i

-- 5 of 237 --

Betongbalkar Utsatta för Upprepade Fallviktsförsök och Påföljande Statisk Belastning
Utvärdering av Strukturrespons från Experiment och Förutsedd Respons med Numeriska Analyser
Examensarbete i Structural Engineering and Building Technology
JACK JÖNSSON
ANTON STENSEKE
Arkitektur och samhällsbyggnadsteknik
Avdelningen för Konstruktionsteknik
Betongbyggnad
Chalmers Tekniska Högskola
SAMMANFATTNING
Beteendet hos en armerad betongkonstruktion som utsätts för dynamisk belastning skiljer sig från statisk
belastning. Exempel på dynamiska laster kan vara höga vindlaster, explosioner eller en stöt. Syftet med
avhandlingen var att öka kunskapen om dynamiskt belastade konstruktioner genom att utföra experiment
på fritt upplagda balkar och sedan utvärdera deras beteende. Balkarna utsattes för olika antal stötar från
en fallvikt och testades därefter statiskt till brott. Oskadade balkar testades också statiskt för att skapa en
jämförelsebasis.
Balkarnas beteende under experimenten fångades med en höghastighetskamera och behandlades sedan
med hjälp av digital bildkorrelation (DIC). Ett av målen med avhandlingen var att försöka förutsäga
beteendet hos balkarna med hjälp av olika numeriska metoder såsom ett tvåfrihetsgradssystem (2DOF)
och icke linjära finita elementmetodanalyser i LS-DYNA. Nedböjning, plastisk rotationskapacitet, inre
arbete, stötlast och impuls är några av parametrarna som utvärderades med de olika numeriska metoderna,
med stöd av handberäkningar.
När balkarna utsattes för upprepad stötbelastning uppstod stora lokala skador vilket ledde till en stor
minskning i lastkapacitet. Storleken av de lokala skadorna var oväntad och någonting som är svårt att
förutsäga med de numeriska metoderna som användes. Dom lokala skadorna gav upphov till splittring
av betongen vilket gjorde efterbehandlingen i DIC svår. Både 2DOF modellen och LS-DYNA tenderade
att överskatta nedböjningen av balken, men inom rimliga gränser. Sprickbildningen från experimenten
hade en god överensstämmelse med sprickbildningen från LS-DYNA, där endast den första stöten
modellerades.
Resultaten från experimenten stämde överlag bra med resultaten från de numeriska metoderna för det
första släppet. Om man ska modellera upprepade stötar på ett mer korrekt sätt behöver de lokala skadorna
tas i beaktning när man använder sådana numeriska metoder.
Nyckelord: Armerad betong, stötbelastning, upprepad stötbelastning, statisk belastning, Digital Image
Correlation, DIC, tvåfrihetsgradssystem, 2DOF, LS-DYNA, olinjär finita elementmetodanalys, stötlast,
inre arbete, impuls, plastisk rotationskapacitet
ii , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	ii , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	ii , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 6 of 237 --

Contents
Abstract i
Sammanfattning ii
Preface ix
Nomenclature xi
1 Introduction 1
1.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.2 Aim . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.3 Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.4 Limitations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.5 Thesis Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2 Materials and Structural Behaviour 4
2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2.2 Structural Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2.2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2.2.2 Linear Elastic Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2.2.3 Plastic Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.2.4 Elasto-Plastic Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.2.5 Tri-Linear Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
2.3 Materials . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
2.3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
2.3.2 Concrete . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
2.3.2.1 Mechanical Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
2.3.2.2 Compressive Strength . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
2.3.2.3 Tensile Strength . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
2.3.2.4 Modulus of Elasticity . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
2.3.3 Reinforcing Steel . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
2.3.4 Reinforced Concrete . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
2.4 Strain Rate Effects . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
2.4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
2.4.2 Influence on Concrete Strength . . . . . . . . . . . . . . . . . . . . . . . . . . 15
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 iii	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 iii	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 iii

-- 7 of 237 --

2.4.3 Influence on Reinforcement . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
2.4.4 Other Interesting Previous Studies . . . . . . . . . . . . . . . . . . . . . . . . 18
3 Plastic Rotation Capacity 19
3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
3.2 Curvature . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
3.3 Plastic Rotation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
3.4 Different Methods to Determine Plastic Rotation . . . . . . . . . . . . . . . . . . . . . 25
3.4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
3.4.2 From Test Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
3.4.3 Eurocode 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
3.4.4 Betonghandboken (ABC-Method) . . . . . . . . . . . . . . . . . . . . . . . . 28
3.4.5 Tamminens D-factor . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
3.4.6 Bk25 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
3.4.7 Methods Based on Equivalent Plastic Hinge Length . . . . . . . . . . . . . . . 34
3.4.7.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
3.4.7.2 Baker and Amarkone . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
3.4.7.3 ACI-ASCE Comittee 428 . . . . . . . . . . . . . . . . . . . . . . . . . . 35
3.4.7.4 Paulay and Priestley . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35
3.4.7.5 Panagiotakos and Fardis . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
4 Fundamentals of Dynamics 37
4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
4.2 Impulse . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
4.3 Work, Kinetic Energy and External Work . . . . . . . . . . . . . . . . . . . . . . . . 38
4.4 Internal Work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
4.4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
4.4.2 Linear Elastic Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
4.4.3 Plastic Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
4.4.4 Elasto-Plastic Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40
4.5 Equation of Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
4.6 Impact and the Influence of Mass . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
4.6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
4.6.2 Elastic Impact . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
4.6.3 Plastic Impact . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
4.7 Response during Repeated Impacts . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
4.7.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
4.7.2 Plastic and Elasto-Plastic Response . . . . . . . . . . . . . . . . . . . . . . . 44
4.7.3 Equivalent Impulse Load for Elasto-Plastic Response . . . . . . . . . . . . . . 45
4.7.4 Residual Strength . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
5 Discrete Model for Dynamic Analysis 48
5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
5.2 Definition of SDOF and Impulse Loading . . . . . . . . . . . . . . . . . . . . . . . . 48
iv , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	iv , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	iv , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 8 of 237 --

5.3 Transforming the Beam to SDOF . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49
5.4 Transforming the Drop-weight to SDOF . . . . . . . . . . . . . . . . . . . . . . . . . 51
5.5 2DOF Systems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52
5.5.1 General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52
5.5.2 2DOF for a Drop-weight and RC Beam System . . . . . . . . . . . . . . . . . 54
5.6 Central Difference Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
6 Experimental Procedure 58
6.1 General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
6.2 Manufacturing of Concrete Beams . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
6.2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
6.2.2 Geometry of the Specimens . . . . . . . . . . . . . . . . . . . . . . . . . . . 59
6.2.3 Manufacturing of Moulds . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59
6.2.4 Casting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
6.2.5 Tests Made on Fresh Concrete . . . . . . . . . . . . . . . . . . . . . . . . . . 62
6.3 Experimental Setup for Dynamic Testing . . . . . . . . . . . . . . . . . . . . . . . . . 64
6.4 Experimental Setup for Static Testing . . . . . . . . . . . . . . . . . . . . . . . . . . 66
6.4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66
6.4.2 Static Testing of Damaged Beams . . . . . . . . . . . . . . . . . . . . . . . . 67
6.4.3 Static Testing of Undamaged Beams . . . . . . . . . . . . . . . . . . . . . . . 67
7 Predictions 69
7.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
7.2 Load Capacity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
7.2.1 Ultimate Limit State . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
7.2.2 Cracking and Yielding . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71
7.2.3 Theoretical Load-deflection Curve . . . . . . . . . . . . . . . . . . . . . . . . 72
7.3 Rotational Capacity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
7.3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
7.3.2 Eurocode 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74
7.3.3 Betonghandboken (ABC-Method) . . . . . . . . . . . . . . . . . . . . . . . . 74
7.3.4 Tamminens D-factor . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
7.3.5 Bk25 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
7.3.6 Methods based on Equivalent Plastic Hinge Length . . . . . . . . . . . . . . . 76
7.4 Predictions with 2DOF . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76
7.4.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76
7.4.2 Internal Resistance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77
7.4.3 Stiffness . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77
7.4.4 Transformation Factors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77
7.4.5 Results from 2DOF Predictions . . . . . . . . . . . . . . . . . . . . . . . . . 78
7.4.5.1 Deflections . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
7.4.5.2 Impulse . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 v	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 v	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 v

-- 9 of 237 --

8 Experimental Results 81
8.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
8.2 Material Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
8.2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
8.2.2 Concrete Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
8.2.3 Steel Properties. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
8.2.4 Location of Reinforcement . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
8.3 Dynamic Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
8.3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
8.3.2 Methodology . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
8.3.3 Midpoint Deflection over Time during First Impact . . . . . . . . . . . . . . . 84
8.3.3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
8.3.3.2 Series-1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
8.3.3.3 Series-2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
8.3.3.4 Series-3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
8.3.3.5 Series-4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
8.3.3.6 Comparison of Deflection over Time . . . . . . . . . . . . . . . . . . . . 87
8.3.4 Midpoint Deflection over Time during Repeated Impacts . . . . . . . . . . . . 88
8.3.4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
8.3.4.2 Series-1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
8.3.4.3 Series-2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
8.3.4.4 Series-3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93
8.3.5 Strain Fields from DIC during First Impact . . . . . . . . . . . . . . . . . . . 95
8.3.6 Strain Fields from DIC during Repeated Impacts . . . . . . . . . . . . . . . . 99
8.3.7 Deformed Shape . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
8.3.8 Velocities of Initial Deflection . . . . . . . . . . . . . . . . . . . . . . . . . . 103
8.3.9 Impact Force and Impulse Load . . . . . . . . . . . . . . . . . . . . . . . . . 104
8.3.9.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
8.3.9.2 Series-1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
8.3.9.3 Series-2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106
8.3.9.4 Series-3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
8.3.9.5 Series-4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
8.3.9.6 Comparison of Impact Force . . . . . . . . . . . . . . . . . . . . . . . . 108
8.3.9.7 Comparison of Impulse Load . . . . . . . . . . . . . . . . . . . . . . . . 109
8.4 Static Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109
8.4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109
8.4.2 Undamaged Beams . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109
8.4.3 Strain Fields of Undamaged Beams . . . . . . . . . . . . . . . . . . . . . . . 113
8.4.4 Series-1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
8.4.5 Series-2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117
8.4.6 Series-3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119
8.4.7 Series-4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
8.4.8 Comparison of Series-1-4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
vi , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	vi , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	vi , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 10 of 237 --

9 Finite Element Modelling in LS-DYNA 127
9.1 LS-DYNA Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
9.1.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
9.1.2 Model and Elements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
9.1.3 Material Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
9.1.3.1 Concrete . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
9.1.3.2 Reinforcement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
9.1.3.3 Supports and Drop-weight . . . . . . . . . . . . . . . . . . . . . . . . . . 129
9.1.4 Interaction between Reinforcement and Concrete . . . . . . . . . . . . . . . . 129
9.2 LS-DYNA Predictions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
9.2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
9.2.2 Midpoint Deflection over Time . . . . . . . . . . . . . . . . . . . . . . . . . . 130
9.2.3 Deflection-length Relationship . . . . . . . . . . . . . . . . . . . . . . . . . . 131
9.2.4 Strain Fields . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134
10 Comparison with Experiments 138
10.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
10.2 Verification of Load Capacity Predictions . . . . . . . . . . . . . . . . . . . . . . . . 138
10.2.1 General . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
10.2.2 Verification using Internal Work . . . . . . . . . . . . . . . . . . . . . . . . . 139
10.3 Verification of Rotational Capacity Predictions . . . . . . . . . . . . . . . . . . . . . . 140
10.4 Verification of Stiffness Predictions . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
10.5 Verification of 2DOF Predictions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
10.5.1 Deflections . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
10.5.2 Impulse . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144
10.6 LS-DYNA . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144
10.6.1 Midpoint Deflection over Time . . . . . . . . . . . . . . . . . . . . . . . . . . 144
10.6.2 Deflection-length Relationship . . . . . . . . . . . . . . . . . . . . . . . . . . 145
10.6.3 Strain Fields . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148
11 Discussion 151
12 Final Remarks 153
12.1 General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
12.2 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
12.3 Further Studies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 154
References 155
Appendix A Material Properties Testing of Concrete A-1
A.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . A-1
A.2 Density . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . A-2
A.3 Compressive Strength . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . A-3
A.4 Tensile Strength . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . A-4
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 vii	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 vii	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 vii

-- 11 of 237 --

A.5 Fracture Energy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . A-5
Appendix B Material Properties Testing of Steel B-1
Appendix C Damaged Beams After Testing C-1
Appendix D DIC Facet Analysis D-1
Appendix E Beams Subjected to Static Loading only E-1
Appendix F Determination of Plastic Deformation at Midpoint F-1
F.1 Method 1 - Image Sequence from actual Impact . . . . . . . . . . . . . . . . . . . . . F-1
F.2 Method 2 - From next Image Sequence . . . . . . . . . . . . . . . . . . . . . . . . . . F-2
F.3 Comparison of the Two Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-3
Appendix G Determination of Plastic Deformation in Static Tests G-1
Appendix H Calculation of Impulse Load H-1
Appendix I Calculation of Stiffness I-1
Appendix J Calculation of Internal Work J-1
Appendix K Mathcad Calculations K-1
Appendix L MATLAB Script for 2DOF Model L-1
Appendix M LS-DYNA Input File M-1
viii , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	viii , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	viii , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 12 of 237 --

PREFACE
In this master’s thesis, the response of simply supported concrete beams subjected to a single or re-
peated impact loading has been investigated, as well as the response under static loading. Experiments
were carried out and the response were compared to the results obtained from different numerical
methods.
The work has been carried out between January and June 2018 at Chalmers and Norconsult’s office
in Gothenburg. The project is a part of an ongoing research project which is a collaboration between
the Structural Engineering Division at Chalmers University of Technology, Norconsult and RISE (The
Swedish Research Institute) and is financed by the Swedish Civil Contingencies Agency (MSB), Fortifika-
tionskårens forskningsfond and Brosamverkan. The project was supervised by Ph.D. Morgan Johansson
and examined by Ph.D Joosef Leppänen.
First of all, we would like to express our deepest gratitude to Morgan Johansson who has guided us
through the project with his infinite knowledge and encouraging spirit. We would also like to thank Joosef
Leppänen who has provided us with very helpful feedback and guidance during the project. Research
Engineer Sebastian Almfeldts help before, during and after the experiments is also very appreciated.
M.Sc Fabio Lozano Mendoza is also appreciated for his help regarding LS-DYNA and other helpful tips
during the project. We would like to thank Ph.D Mathias Flansbjer for his help with the DIC software
and Ph.D Ingemar Löfgren who provided us with the recipe for the concrete. Lastly, we would like
to thank M.Sc Gonzalo Sanz-Díez for his tips regarding the DIC software and Michaela Munther and
Josefine Runebrant for their help with the LS-DYNA model.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 ix	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 ix	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 ix

-- 13 of 237 --



-- 14 of 237 --

NOMENCLATURE
Abbreviations
2DOF Two-degree of freedom
SDOF Single-degree of freedom
BC Boundary conditions
DIC Digital image correlation
DIF Dynamic increase factor
EC Eurocode
FE Finite element
FEA Finite element analysis
RC Reinforced concrete
WST Wedge splitting test
Roman upper case letters
퐴 Area
퐸 Modulus of elasticity
퐸푐 Modulus of elasticity of concrete
퐸푘 Kinetic energy
퐹 Force, load
퐹푑푦푛 Dynamic load
퐹푠푡푎 Static load
퐺퐹 Fracture energy
퐼 Impulse, moment of inertia
퐿 Total length of beam member
푀 Bending moment
푅 Internal resistance
푅푚 Maximum internal resisting force
푉 Shear force
푊 Work
푊푒 External work
푊푖 Internal work
Roman lower case letters
푎 Acceleration
푏 Width of beam cross-section
푐 Damping coefficient, concrete cover thickness
푑 Effective height
푓0.2 0.2% proof stress of reinforcing steel
푓푐 Compressive cylinder strength of concrete
푓푐푚,푐푢푏푒 Compressive cube strength of concrete
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 xi	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 xi	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 xi

-- 15 of 237 --

푓푐푡 Tensile strength of concrete
푓푐푡푘0,05 Tensile strength; lower characteristic value
푓푐푡푘0,95 Tensile strength; upper characteristic value
푓푐푡,푓 푙 Flexural tensile strength of concrete
푓푐푡,푠푝 Splitting tensile strength of concrete
푓푡 Tensile strength of reinforcing steel
푔 Gravitational constant
ℎ Height of beam cross section, drop-height
푘 Linear elastic stiffness, constant used in Tamminens method, constant for flexural tensile strength
푘휆 Factor for plastic rotation according to Eurocode
푘® Stiffness after cracking
푙 Distance along beam
푙0 Distance from zero moment section to point of maximum moment
푙푝푙 Equivalent plastic hinge length
푙푦 Length of yielding region
푚 Mass
푛 Number
푝 Momentum of a particle
푟 Radius of curvature
푡 Time
푢 Deflection or deformation
푢푐푟 Deflection or deformation when cracking occurs
푢푠 Deflection in system point
̇
푢 First time derivative of displacement (velocity)
̈
푢 Second time derivative of displacement (acceleration)
푣 Velocity
푥 Distance to neutral axis from top edge
푥0 Distance from zero moment section to point of maximum moment after plastic redistribution
Greek letters
훼푅 Stress block factor for average stress
훽푅 Stress block factor for resultant location
Δ푡 Time increment
훿 Displacement
̇
휀 Rate of strain
휀 Strain
휀푐푐 Concrete strain; compression
휀푐푡 Concrete strain; tension
휀푐푠 Concrete strain at reinforcement level
휑 Curvature
휅 Transformation factor
휆 Slenderness
휔 Angular eigenfequency
xii , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	xii , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	xii , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 16 of 237 --

휔푏푎푙 Balanced mechanical reinforcement ratio
휔푠 Mechanical ratio of tensile reinforcement
휔푠,푐푟푖푡 Critical mechanical ratio
휔®
푠 Mechanical ratio of compression reinforcement
휔푣 Mechanical ratio of shear reinforcement
휙 Angle
휌 Reinforcement ratio parameter, density
휎 Stress
휃 Rotation
휃푝푙,푥% Plastic rotation at a given load level
Index
0 Initial
푏 Beam
푑 Design value
푓 Field
푖푚푝 Impact
푘 Characteristic value
푚 Mean value
푠 Reinforcing steel
푠푢푝 Support
푢 Ultimate value
푦 Yield value
푒푙 Elastic
푝푙 Plastic
푡표푡 Total
® Compressive zone
퐼 State I
퐼퐼 State II
푐푟 Cracking
푚푎푥 Maximum value
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 xiii	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 xiii	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 xiii

-- 17 of 237 --



-- 18 of 237 --

1 Introduction
1.1 Background
Impulse loading, such as explosions or collisions, are important issues to take care of when determining
the structural response of protective structures. Since these events can be critical for the capacity of a
structure it is important to have a good understanding of how impulse loading affect the structure. The
structural response of an impulse loaded beam can be very different compared to a statically loaded
beam. Concrete are commonly used for these kind of protective structures and this master’s thesis will
focus on how a reinforced concrete beam (RC beam) behaves when subjected to an impact load, followed
by a static load. A large plastic deformation capacity results in a large energy absorption and this is
essential for an impact loaded structure.
This master’s thesis project is a part of an ongoing research project by the Structural Engineering Division
at Chalmers University of Technology, Norconsult and RISE. It is also a part of a series of master’s thesis
projects supported by Norconsult in this specific field and will build upon the knowledge, conclusions
and suggestions made in those projects.
1.2 Aim
One aim of the thesis is to increase the understanding of the structural response of RC beams subjected
to repeated impact loading and evaluate methods to predict this response. Further, another aim is to
study the plastic rotation capacity of undamaged and damaged RC beams. To achieve these aims, the
following objectives need to be fulfilled:
• Evaluate theories about dynamic loading and how concrete and steel as a material behaves in such
cases.
• Predict the structural response of a statically loaded structure with hand calculations.
• Predict the dynamic response using a simplified two-degree of freedom (2DOF) model and a
non-linear finite element model in LS-DYNA.
• Evaluate the response of an impact loaded simply supported beam by performing experiments and
process the information with digital image correlation (DIC).
• Evaluate the response of statically loaded beams and compare with suggestions in the literature.
• Study the residual capacity after impact by static loading of the damaged beam until failure.
• Compare predictions with the results from experiments to evaluate the numerical methods used.
1.3 Method
Firstly, to deepen the knowledge concerning structural dynamics and the response of impact loaded
structures, a literature survey was done. The centre parts of the survey were the understanding of plastic
rotation capacity and the dynamic response of structures.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 1

-- 19 of 237 --

Secondly, by the use of simplified hand calculations and a 2DOF-system, a prediction of the behaviour
of RC beams subjected to impact loads was performed. Parameters such as load capacity, deflections,
rotation capacity, internal work and impulse were predicted. The calculations were based on different
theoretical models which is supported by the findings in the literature survey.
Thirdly, experiments with a combination of drop-weight impact and static loading of RC beams were
performed. The experimental beams were casted within the project and the concrete properties of both
fresh and hardened concrete were evaluated according to relevant standards and recommendations. The
material properties were then used as input data for the calculations performed. During the testing
the beams were simply supported with a free span of 1.0 m. Different combinations of drop height,
mass of drop-weight and number of drops were used to form a basis of comparison between different
impact loading cases. When the beams were subjected to drop-weight impacts, it resulted in an initial
deformation and afterwards the residual deformation capacity was tested under four-point deformation-
controlled static loading. Static loading on undamaged beams were also carried out and the difference
in capacity between damaged and undamaged beams were evaluated. Cameras were used during the
experiments to capture the response of the beam. Afterwards, the frames from the experiments were
processed by using DIC in the software GOM Correlate 2017. Information such as propagation of cracks
and deformations of the beam were extracted and presented. In GOM Correlate, the strain fields were
shown in a similar way to that in a FEA which simplified the comparisons between the experiments and
the FE-modelling.
Lastly, the software LS-DYNA was used to perform dynamic FEA. These results were compared with
the results from the experiments and the 2DOF calculations. In the analysis 3D solid elements and the
material model CDPM2 was used.
1.4 Limitations
This study of the response of impact loaded structures was limited to the study of three-point-loaded
simply supported RC beams only. However, statically loaded beams were subjected to four-point-loading.
The number of beams tested were limited to 18 beams and the configuration was the same for all beams.
The high-speed camera used for capturing response during the dynamic tests featured a frame-rate of
5 000 fps.
The beams were manufactured in two different batches, using normal strength concrete and four lon-
gitudinal reinforcement bars, giving a double symmetrical concrete section. The expected failure was
bending failure and therefore the beams were not provided with transversal reinforcement.
The FEA were limited to the software LS-DYNA with the use of 3D continuum solid elements and
material model CDPM2. Only the first impact was modelled in LS-DYNA due to the complexity of
modelling of repeated impacts.
2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 20 of 237 --

1.5 Thesis Outline
The thesis consists of four parts which can be connected to each other. Firstly, Chapters 2-5 is focused
the theory which is important to understand to be able to understand the rest of the thesis. Chapter 6-8
cover the experimental setup and results as well as the predicted response. Chapter 9-10 is focused on
the theory behind the FE model and the results obtained from it. Lastly, Chapter 11-13 presents how
well the response was predicted as well as some general conclusions and discussion.
Chapter 2: General concepts about the structural behaviour of materials is presented together with some
basic theory about steel and concrete as a material. Furthermore, the phenomena of strain rate effects are
presented.
Chapter 3: The theory behind rotation capacity is described followed by an investigation on different
methods to calculate plastic rotation capacity.
Chapter 4: The basic theory of dynamics is presented here, which is essential to comprehend before
creating the numerical models to predict the structural response of the impact loaded beams.
Chapter 5: Introduces the way of thinking when creating both SDOF and 2DOF models, especially how
to transform the beam and drop-weight into such systems.
Chapter 6: Covers the procedure during the experiments. The casting of the beams is described with
some material tests performed on the fresh concrete followed by the experimental setup for both dynamic
and static testing.
Chapter 7: The predicted load capacity and load-deflection curve is calculated according to conventional
static methods. The different methods presented in Chapter 3 are thereafter used to calculate the plastic
rotation capacity and lastly the 2DOF model is used to predict a number of parameters.
Chapter 8: Covers all the experimental results. Firstly, the material properties and location of reinforce-
ment are presented. Secondly, the results from the dynamic testing are presented where the midpoint
deflection during different timesteps, strain fields, impact force and impulse load are of special interest.
Lastly, the results from the static testing are presented and the load-deflection relationship, plastic rotation
capacity, stiffness and internal work are of special interest. Some comparisons and conclusions are made
between the results from the different series.
Chapter 9: Theory behind the model used in LS-DYNA is presented and especially the material model
CDPM2 is described.
Chapter 10: Results from the analyses in LS-DYNA are presented where the midpoint deflection during
different timesteps, displacement-length relationship and strain fields are of special interest.
Chapter 11: Some general discussion on the results and findings within the thesis is presented.
Chapter 12: Conclusions based on the results are made and possibilities for future studies are dis-
cussed.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 3

-- 21 of 237 --

2 Materials and Structural Behaviour
2.1 Introduction
The purpose of this chapter is to give a brief introduction of how the materials that is of interest in this
project behaves under loading. Since all of the tests was performed on RC beams, concrete and steel
reinforcement is treated within this chapter. The chapter treats how the materials response is idealized to
be able to perform calculations in a simplified manner. Even though this is a basic introduction, it will
introduce some important expressions and material parameters that is considered fundamental to be able
to comprehend the subsequent chapters.
2.2 Structural Response
2.2.1 Introduction
Four different types of behaviour can be used to describe the response of a structure; elastic, plastic, elasto-
plastic and tri-linear. These are simplified models but works well as approximations for calculations.
Basic equations and expressions are given based on (Lozano and Makdesi, 2017), (Lovén and
Svavarsdóttir, 2016), (Nyström, 2006) and (Johansson and Laine, 2012).
2.2.2 Linear Elastic Response
In a linear elastic response, the structure is assumed to have a constant linear relationship between the
internal resisting force 푅 and the displacement 푢푒푙.
푅(푢) = 푘 ⋅ 푢푒푙 (2.1)
where 푘 corresponds to the stiffness of the structure. The relation between the internal resisting force
and the displacement can be seen in Figure 2.1. The deformation 푢푒푙 is considered to be fully elastic and
will return to zero when the structure is unloaded.
k
k
uel u
R
k
Figure 2.1 Relationship between internal resistance and displacement.
4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 22 of 237 --

2.2.3 Plastic Response
In an ideal plastic response, deformations will not occur until the capacity of the structure is reached. If
the maximum internal resistance 푅푚 is reached, the material will show an unlimited deformation until
the load is removed. The relation between 푅 and 푢 can now be expressed as
푅(푢) =
T
퐹 if 푢 = 0
푅푚 if 푢 > 0 (2.2)
where 푅푚 is the maximum value of the internal force 퐹 .
The deformation 푢푝푙 is considered to be fully plastic and is not reversible when the structure is unloaded.
The relation between the internal resisting force and then displacement can be seen in Figure 2.2.
upl
u
R
Rm
Figure 2.2 Relationship between internal resistance and displacement.
2.2.4 Elasto-Plastic Response
A combination of elastic and plastic response can be used to predict the response of a structure in a more
accurate way. This is called elasto-plastic response and exhibits an elastic response until the maximum
internal resistance is reached and from that point it behaves in a plastic way. The relation between 푅 and
푢 can now be expressed as
푅(푢) =
T
푘 ⋅ 푢 if 푢 ≤ 푢푒푙
푅푚 if 푢 > 푢푒푙
(2.3)
The deformation will now consist of one elastic part and one plastic part and the relation between these
and the internal resisting force can be seen in Figure 2.3. The elastic part of the deformation returns to
zero when the structure is unloaded while the plastic part will remain. If the structure is loaded again,
the same stiffness is assumed.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 5

-- 23 of 237 --

uel
u
R
k
Rm
utot = uel + upl
Unloading
Figure 2.3 Relationship between internal resistance and displacement.
The total deformation 푢푡표푡 can be expressed as
푢푡표푡 = 푢푒푙 + 푢푝푙 (2.4)
where
푢푒푙 = 푅푚
푘 (2.5)
2.2.5 Tri-Linear Response
The response can be even more refined by assuming a tri-linear material response. The part which are
exposed to an internal resisting force lower than 푅푚 will now be divided in two parts with two different
stiffnesses. This response corresponds very well with RC since a change of stiffness will occur when
the first cracks appear. In this case 푢푐푟 represents the displacement when cracking occurs, 푅푐푟 is the
internal resisting force when cracking occurs, 푘 is the stiffness before cracking and 푘® is the stiffness
after cracking has occurred. The relationship can now be expressed as
푅(푢) =
⎧
⎪
⎨
⎪
⎩
푘 ⋅ 푢 if 푢 ≤ 푢푐푟
푅푐푟 + 푘®(푢 − 푢푐푟) if 푢푐푟 ≤ 푢 ≤ 푢푝푙
푅푚 if 푢 > 푢푒푙
(2.6)
The relation between the internal resisting force and displacement is also shown in Figure 2.4.
6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 24 of 237 --

upl	ucr
u
R
k´
k
Rcr
Rm
Figure 2.4 Relationship between internal resistance and displacement.
A tri-linear material can be divided in three different types of deformation ranges which can be seen
in Figure 2.5. Even though this is the most accurate way to describe the response of RC, a bi-linear
elasto-plastic response will be used in this report. This will be further explained in Section 2.3.4.
u
R
Elastic Elastic Plastic
Figure 2.5 Illustration of the three types of deformation ranges.
2.3 Materials
2.3.1 Introduction
This subchapter covers basic knowledge about concrete, reinforcing steel and RC as well as how the
properties of these materials is evaluated. This chapter is based on knowledge obtained in
(Engström, 2013) and (CEN, 2004).
2.3.2 Concrete
2.3.2.1 Mechanical Properties
Concrete is a composite material made out of aggregates, cement and water. Its strength in compression
exceeds its strength in tension and this is why reinforcement, that is strong in tension, is needed in
concrete elements subjected to tension. The stress-strain (휎-휀) relation of plain concrete under uniaxial
loading can be see in Figure 2.6, which clearly illustrates the big difference between the capacity in
compression and tension.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 7

-- 25 of 237 --

ε
σ
fct
fc
Figure 2.6 Stress-strain relation for concrete under uniaxial loading. 푓푐 and 푓푐푡 corresponds to
compression strength and tension strength of concrete.
The steep slope that can be observed in Figure 2.6 after it has reached its maximum tensile capacity
shows that concrete is a brittle material in tension. This is true for compression as well but in this case the
strength of the concrete has an influence on how brittle, or ductile, the material behaves. This is illustrated
in Figure 2.7 where it can be seen that concrete with low strength allows for larger deformations after
the maximum stress has been reached. This means that high strength concrete is more brittle while low
strength concrete is more ductile.
εc
σc
20
40
60
80
0.002	0.001 0.003 0.004
[MPa]
Figure 2.7 Compressive stress-strain relation for different concrete strengths. Inspired by
(Engström, 2013).
The compressive strength of concrete also depends on the loading rate, which is illustrated in Figure 2.8.
Compared to a normal compressive test, that takes a few minutes to perform, the compressive strength
will be higher during fast loading processes. The ultimate compressive strain will simultaneously be
lower, i.e. the stiffness increase with increasing load rate, this is further treated in Section 2.4. During
rapid loading the compressive strength can increase up to 20 % (Engström, 2013). According to
Boverket (2004) it is possible to increase the compressive strength by a factor 1.1 if a fast loading process
is a part of a load combination containing accident loads or a progressive collapse. However, this is not
considered in CEN (2004).
8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 26 of 237 --

εc
Few minutes	σc
fc
Few seconds
Few months
εc
Few minutes
Figure 2.8 Compressive strengths dependency of loading rate. Inspired by (Engström, 2013).
The results from a series of tests made on the same type of concrete will naturally have some dispersion
in the results. This can be presented as a frequency distribution where it is possible to determine mean
value, standard deviation or variation coefficient and fractile values. A principal frequency distribution of
the concretes tensile strength can be seen in Figure 2.9. The lower characteristic value 푓푐푡푘0,05 is defined
as the 5 %-fractile, that is the value that 5 % of the samples is lower than. The upper characteristic value,
푓푐푡푘0,95 is the value that 95 % of the samples is lower than. The mean tensile strength 푓푐푡푚 is the mean
value of the curve. Similar, when determining the compressive strength of concrete, the 5 %-fractile
strength is used and is referred to as the characteristic value 푓푐푘.
εc
Few minutes
f
fctm
fct
fctk0.05 fctk0.95
Figure 2.9 Principal frequency distribution for the tensile strength of concrete.
2.3.2.2 Compressive Strength
The compressive strength of concrete is measured in a test and the result depends on the method used.
Uniaxial compressive strength is therefore determined according to CEN (2009e). All factors that may
influence the results are controlled, such as temperature, loading rate and age of concrete. The testing
of concrete according to this standard is further treated in Section A.3. A principle sketch of how the
compressive strength is determined by uniaxial loading is shown in Figure 2.10, which is normally done
on cylinders.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 9	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 9	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 9

-- 27 of 237 --

εc
Few minutes
Specimen
Apparatus
Figure 2.10 Principle sketch of uniaxial loading test. Inspired by (Engström, 2013).
Internationally, it is common to determine the compressive strength using cylinders. In Sweden though,
cubes are normally used instead of cylinders, which results in a higher strength. This is considered by
using
푓푐푚 = 푓푐푚,푐푢푏푒
1.20 (2.7)
where 푓푐푚 is the mean value of the compressive strength of a cylinder and 푓푐푚,푐푢푏푒 is the mean value of
the compressive strength of a cube.
2.3.2.3 Tensile Strength
The tensile strength of concrete can be tested by pure tensioning, flexure or by a splitting test. The
results from the different methods may differ and it is difficult to accurately predict the tensile strength.
According to CEN (2004), the mean tensile strength at 28 days can be determined from the characteristic
compressive strength.
푓푐푡푚 = 0.30푓 2∕3
푐푘 for concrete class ≤ C50/60 (2.8)
푓푐푡푚 = 2.12 ln
0
1 + 푓푐푘 + 8
10
1
for concrete class > C50/60 (2.9)
푓푐푡푘0,05 = 0.7푓푐푡푚 (2.10)
푓푐푡푘0,95 = 1.3푓푐푡푚 (2.11)
where 푓푐푘 is the characteristic value of the compressive strength and 푓푐푡푚 is the mean concrete tensile
strength. From a splitting test, the splitting tensile strength 푓푐푡,푠푝, can according to CEN (2004) be used
to calculate the mean tensile strength as
푓푐푡푚 = 0.9푓푐푡,푠푝 (2.12)
10 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	10 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	10 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 28 of 237 --

In a flexural test, the flexural tensile strength 푓푐푡푚,푓 푙, can according to CEN (2004) be used to express
푓푐푡푚 as
푓푐푡푚 = 푓푐푡,푓 푙
푘 (2.13)
where
푘 = 1.6 − ℎ
1000 ≥ 1.0 with ℎ in [mm] (2.14)
2.3.2.4 Modulus of Elasticity
There are both simplified and idealized stress-strain relations in EC 2 and Figure 2.11 shows an ideal
model that represents the response under uniaxial compression. The stress-strain relation is almost linear
and the mean value of the modulus of elasticity, 퐸푐푚, is determined as a secant modulus between the
origin and 휎푐 = 0.4푓푐푚.
εc
σc
0.4 fcm
fcm
εc1 εcu1
tan α = Ecm
α
Figure 2.11 Ideal stress-strain relation for concrete under compression. 휀푐1 is the strain at peak stress
and 휀푐푢1 corresponds to the ultimate compressive strain (CEN, 2004).
The modulus of elasticity can also be approximated as
퐸푐푚 = 22
0푓푐푚
10
10.3
[GPa] (2.15)
where 푓푐푚 is the compressive mean strength in [MPa].
More simplified compressive stress-strain relations can also be used in design. Figure 2.12a shows a
parabolic relation and an even more simplified bi-linear relation can be seen in Figure 2.12b, the latter can
be related to the elasto-plastic behaviour described in Section 2.2.4. The relationships described in these
two figures are used when calculating structures subjected to bending. The values of the strains 휀푐(2−3)
and 휀푐푢(2−3) are given in (CEN, 2004) depending on the concrete class and analytical relation.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 11	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 11	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 11

-- 29 of 237 --

εcu2	εc2
εc
σc
fcd
fck
(a) Parabolic
εcu3	εc3
εc
σc
fcd
fck
 (b) Bi-linear
Figure 2.12 Simplified stress-strain relation for concrete under compression (Engström, 2013).
2.3.3 Reinforcing Steel
As mentioned in Section 2.3.2, reinforcement are used to compensate for the unsatisfactory tensile strength
of concrete. Therefore it is mainly the strength and behaviour under tension that is of interest when
analysing the reinforcement. Depending on the production method, the reinforcement is distinguished in
two categories: heat treated and cold worked. This is since they show a significantly different stress-strain
relation, see Figure 2.13 where 푓푢 corresponds to maximum tensile strength, 푓푦 to yield strength and 휀푠푢
to the ultimate strain at maximum force.
εsu
εs
σs
fy
fu
(a) Hot rolled
εsu
εs
σs
f0.2
fu
0.002
 (b) Cold worked
Figure 2.13 Principal stress-strain relations.
Hot-rolled steel has four clear stages: Elastic stage, plastic stage (yield plateau), strain hardening up to
maximum tensile stress and a fracture stage until failure. Cold-worked steel has three different stages:
Elastic, strain hardening and a fracture stage. Cold-worked steel lack a clear transition between the
elastic stage and the strain hardening and is therefore lacking a clear yield plateau. According to
CEN (2004), a yield strength can be defined as the stress for which the remaining strain after unloading is
0.2 %. This stress is named proof stress, 푓0,2. It can be observed from Figure 2.13 that cold-worked steel
in general has a lower ultimate strain and strain hardening, which results in a more brittle behaviour.
12 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	12 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	12 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 30 of 237 --

Reinforcement are classified based on a large number of properties such as: strength, fatigue strength,
ductility class, size, weldability etc. The ductility class is of special interest in this project since it
represents the steel’s ability to deform under large tensile forces. A ductile response is preferred when
considering the uptake of impulse loads (Johansson and Laine, 2012). In CEN (2004) three different
ductility classes are used and they are summarized in Table 2.1. The ductility classes are defined with
regard to both the ultimate strain and the relation between the maximum strength and yield strength.
Table 2.1 Classification of steel regarding ductility properties according to EC 2 (Lozano and
Makdesi, 2017).
Class
Property A B C
Characteristic yield strength, 푓푦푘 or 푓0.2푘 [MPa] 400 to 600
Minimum value of (푓푢∕푓푦)푘 ≥ 1.05 ≥ 1.08 ≥ 1.15 & < 1.35
Characteristic strain at maximum force, 휀푠푢푘 [%] ≥ 2.5 ≥ 5.0 ≥ 7.5
2.3.4 Reinforced Concrete
When combining steel and concrete, a composite material is formed which utilizes the high compressive
strength of concrete together with the tensile strength and ductility of steel. A beam is a good example
of a structure where the concrete and reinforcement has to act together to ensure sufficient load bearing
capacity in the structure. This is also the type of structure that will be used during the tests further on in
this thesis. The response of a RC structure can be divided in three different states. This is illustrated in
Figure 2.14 where the response is expressed as tri-linear.
Deflection, u
Load, q
Cracking of
concrete
(State I)
Yielding
(State II)
Maximum
capacity
Ductile
response
Brittle
response
u
q
Fracture capacity
(State III)
Figure 2.14 Schematic tri-linear response of the structural response of a RC beam, showing both brittle
and ductile behaviour. Inspired by (Johansson and Laine, 2012).
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 13	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 13	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 13

-- 31 of 237 --

In state I, the concrete is assumed to be uncracked and the response is assumed to be linear elastic and
the stiffness is determined by the properties of the concrete. This is not entirely true since the properties
of the reinforcement will affect the response and may increase the stiffness up to 20 % (Engström, 2015).
It is however common to ignore this contribution.
In state II, the concrete is fully cracked and the contribution from the concrete in the tensile zone is
neglected. The stiffness will now also depend on the reinforcement. The response is considered to be
linear elastic once again but this time it will have a much lower stiffness.
In state III, the reinforcement has reached its yield limit and the cross-section will have a rapid loss of
stiffness. The material response is no longer considered to be linear.
Even though the reinforcement has reached yielding, the structure may still not collapse. Plastic redis-
tribution of the stresses will occur and the structure will not fail until either the reinforcement or the
concrete reaches its ultimate strain. From this stage the load will increase slightly while the deformation
may increase a lot. This will be further treated in Chapter 3.
According to Johansson and Laine (2012) a simplification of the response can be done where the response
is considered to be bi-linear elasto-plastic, as shown in Figure 2.15. The structure is here assumed to be
fully cracked from the beginning and state II stiffness is used to describe the elastic response. When the
structure reaches its fracture capacity, state III, it will change to a plastic response.
Yielding
(State II)
State II stiffness
upl	uel
Deflection, u
Load, q
Cracking of
concrete
(State I)
Maximum
capacity
Ductile
response
Brittle
response
u
q
Fracture capacity
(State III)
Simplified
response
Figure 2.15 Schematic bi-linear response of the structural response of a RC beam, showing both brittle
and ductile behaviour. Inspired by (Johansson and Laine, 2012).
14 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	14 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	14 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 32 of 237 --

2.4 Strain Rate Effects
2.4.1 Introduction
When loads are applied fast there is also an influence on the mechanical properties of the materials
involved, in this case concrete and reinforcement. This is called strain rate effects and is the change of
strain over time, denoteḋ 휀 and with the unit 1/s. The effect varies with the rate of the loading, where
studies show that there is an increase of the strength at higher load rates. The phenomenon is well treated
in Johansson (2000) and the information in this section is manly based on the knowledge gained from
there. The magnitude of strain rates for different loading conditions can be seen in Figure 2.16. The
common way to account for the strain rates is to use the dynamic increase factor (DIF) which is defined
as
퐷퐼퐹 = 퐹푑푦푛
퐹푠푡푎
(2.16)
where 퐹푑푦푛 and 퐹푠푡푎 is the dynamic and static load respectively. Due to the complexity of dynamic testing
compared to static testing, the range of the DIF from different tests is very broad but all of them show an
increased strength to some extent with higher strain rates.
10-8 10-7 10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
creep static earthquake hard impact blast
strain rate [s-1]
Figure 2.16 Strain rates for different loading conditions (Johansson, 2000).
2.4.2 Influence on Concrete Strength
For the two materials involved in RC-structures concrete has the largest effect of strain rates. The DIF
for different strain rates can be seen in Figure 2.17 for concrete in compression and 2.18 for concrete in
tension.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 15	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 15	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 15

-- 33 of 237 --

0
1
2
3
4
10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain rate [s-1]
Fdyn / Fsta
CEB, fc = 30 MPa
CEB, fc = 60 MPa
Soroushian et al., dry
Soroushian et al., wet
Dilger et al.
Seabold
Figure 2.17 Studies of DIF and strain rate relation for concrete in compression (Johansson, 2000).
0
1
2
3
4
10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain rate [s-1]
Fdyn / Fsta
CEB, fc=30 MPa
CEB, fc = 60 MPa
Ross et al., fc = 28 MPa
Malvar and Ross,
fc = 30 MPa
Malvar and Ross,
fc = 60 MPa
Figure 2.18 Studies of DIF and strain rate relation for concrete in tension (Johansson, 2000).
At strain rates around 100 − 102 1/s there is a so called transition zone at which there is a drastic increase
in DIF at increased strain rate. This can, a bit simplified, be explained by two types of strain rate effects
of concrete, viscous and structural, and can be seen in Figure 2.19. The change increase of the DIF in
the viscous zone depends mainly on the difference of crack propagation for dynamic loads compared to
16 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	16 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	16 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 34 of 237 --

static loads. For a static load there is enough time for the cracks to be formed in the weaker parts of the
concrete, i.e in the cement paste. In this way the cracks demands lower energy consumption. When the
load is applied at a higher rate there is no such time for the cracks to propagate in the weaker parts. This
means that the cracks takes shorter routes at a high strain rate and is therefore formed in stronger parts,
sometimes through the strong aggregates. Since the cracks propagates both through the weaker and
stronger parts the homogeneity of the concrete increases with increased strain rate in the viscous zone.
One theory that is commonly accepted is that the increase of DIF at high strain rates in the viscous zone
is mainly due to the presence of free water in the pores. Johansson (2000) presents numerous studies
where the effects of free water in the pores is studied for concrete in both compression and tension.
10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain rate [s-1]
1.0
0.5
1.5
2.0
2.5
3.0
3.5
4.0
Fdyn / Fsta
30
structural effects:
- inertia forces
- confinement
viscous effects:
- free water
transition
zone
Figure 2.19 Different stages of strain rate effects of concrete (Johansson, 2000).
In the transition zone the structural behaviour becomes important for the DIF. The explanation for this
increase is not that well studied but for the tensile strength an explanation given is that the increase is
due to the change in stress and energy distribution due to inertia effects at the concrete crack tips. It is
not entirely clear if the increase at the transition zone for compression could be explained in the same
manner, but it is reasonable. Another possibility for compression is that there is inertia confinement
effects. This means that, when the load is applied fast, there is no time for the concrete to react and
a plain strain state is obtained, which entails a drastic increase of the compression strength due to the
mulitaxial stress state.
2.4.3 Influence on Reinforcement
The strain rate also has an influence of the strength of the reinforcement steel, although it is not as
eminent as for concrete. Figure 2.20 shows a comparison of the DIF and strain rate relation of two
studies. The reinforcement bar in the comparison is hot-rolled with the yield strength of 500 MPa and an
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 17	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 17	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 17

-- 35 of 237 --

ultimate strength of 550 MPa.
1.0
0.9
1.1
1.2
1.3
1.4
1.5
10-4 10-3 10-2 10-1 100 101 102
Strain rate [s-1]
Fdyn / Fsta
fsy - Malvar
fsu - Malvar
fsy - CEB
fsu - CEB
Figure 2.20 Studies of DIF and strain rate relation for yield and ultimate strength of reinforcement
steel (Johansson, 2000).
2.4.4 Other Interesting Previous Studies
In Adhikary et al. (2012) the influence of the longitudinal reinforcement ratio of RC beams is treated. By
a parametric study in a numerical simulation it was found out that the DIF increased with a decreased
reinforcement ratio. This result seem a bit contradictory since the ultimate load carrying capacity
increased with the increased reinforcement ratio. It was concluded that with a low reinforcement ratio in
the beam there is an increase in the strain rate sensitivity, causing a higher DIF.
Cotsovos and Pavlovic (2008) investigates the correlation between experimental results and results
obtained from FE analyses with regard to strain rate effects. The possibility to describe the behaviour
of concrete as a material from the behaviour of a specimen is discussed. It is concluded that concrete
specimens under dynamic loading cannot be used to describe the behaviour of concrete as a material,
which is usually assumed. This is since concrete specimens under dynamic loading should be seen
as a structure since their response is linked to the inertia effect of their mass and the active boundary
conditions.
18 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	18 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	18 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 36 of 237 --

3 Plastic Rotation Capacity
3.1 Introduction
The ductility of RC is mainly dependent on the reinforcement properties since concrete is a brittle
material compared to steel. Depending on the amount of reinforcement and its properties, a ductile or
brittle response can therefore be obtained. A ductile response enables the formation of plastic hinges,
which is regions where the reinforcement yields. These regions will now have a lower stiffness than the
rest of the beam. Due to the nonlinear behaviour of the beam when the stiffness decreases, there will be
a redistribution of the forces and the beam can still keep its capacity with an increasing deformation
(Johansson and Laine, 2012). Johansson and Laine (2012) further states that the plastic hinges enables
plastic redistribution of the stresses in the structure which leads to a larger energy absorption, which is
preferred during impact loading. The difference in deformation capacity between a brittle and a ductile
response is schematically illustrated in Figure 2.14. A large plastic rotation capacity can also be coupled
to a high energy absorption since it is dependent of ductility. The plastic hinges are often assumed to
be concentrated to a single section while the real distribution of a plastic hinge is spread over a plastic
region, see Figure 3.1.
L/2
(a) Assumption of concentrated plastic
hinge.
L/2
(b) Real distribution of plastic hinge.
Figure 3.1 Concentrated and distributed plastic hinge. Inspired by (Lozano and Makdesi, 2017).
Plastic rotation is a complex phenomena and it depends on many parameters such as definition of
yielding curvature, ultimate curvature, geometry, material properties, tension stiffening and bond slip,
among others (Kheyroddin and Naderpour, 2007). Many researchers have investigated the possibility to
determine plastic rotation capacity. Kheyroddin and Naderpour (2007) point out that there is a difference
between different researcher’s methods to predict the rotation capacity. It is therefore of interest to
compare some different methods when determining the rotation capacity.
To be able to understand plastic rotation it is important to comprehend the concept of curvature, therefore
this will be treated initially in this chapter. Secondly, the definition of plastic rotation and various methods
used to calculate it will be presented.
3.2 Curvature
The deformation of a cross-section can be described by its strain distribution. The strain distribution
can then be characterized by a mean strain 휀푐푚 and a curvature 1∕푟. The mean strain corresponds to the
strain in the centre of gravity in the equivalent cross-section, see Figure 3.2. The curvature represents the
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 19	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 19	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 19

-- 37 of 237 --

strain gradient and can, according to Engström (2011), be used to describe the strain in any section
휀푐 (푧) = 휀푐푚 + 1
푟 푧 (3.1)
where 푧 is the distance from the centre of gravity and 푟 is the radius of curvature.
εcc
xtp
1/r
εcm
tp
z
Figure 3.2 Cross-section deformation characterized by mean strain and curvature. Inspired by
(Engström, 2011).
The curvature can also be denoted 휑 and can be further expressed from the radius of curvature. When
considering a beam with constant curvature, see Figure 3.3, the element length 푑푥 along the gravity axis
can be expressed as
푑푥 = 푟 ⋅ 푑휑 ⇒ 1
푟 = 푑휑
푑푥 (3.2)
where 푑휑 is the change of angle over the element length.
dφ
r
dx
xtp
Figure 3.3 Relationship between curvature radius and deformation in a beam with constant curvature
(Engström, 2011).
The curvature can thus be described as the change of angle per unit length. Considering an infinitesmall
element, the curvature can be expressed from known values of strains and the geometry of the cross-
section, see Figure 3.4.
휑 = 1
푟 = 휀푐푐
푥 = 휀푐푐 + 휀푐푡
ℎ (3.3)
20 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	20 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	20 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 38 of 237 --

휑 = 1
푟 = 휀푠
푑 − 푥 = 휀푐푐 + 휀푠
푑 (3.4)
where 휀푐푐 and 휀푐푡 is the concrete strain in compression and tension, respectively, and 휀푠 represents the
reinforcement strain.
h	d
εs
εct
εcc
xtp 1/r
tp
z
Figure 3.4 Geometry for calculation of curvature from known strains. Inspired by (Engström, 2011).
The relationships in Equations (3.3) and (3.4) is always true, regardless of whether the material is in
state I, II or III. However, the position of the neutral axis will change due to cracking which in turn also
leads to a change in curvature.
3.3 Plastic Rotation
The rotation of the plastic hinge when the load increases from yielding to collapse is denoted as plastic
rotation capacity, 휃푝푙 (Engström, 2015). Engström (2015) further states that the general expression for
calculating the plastic rotation is done by integrating the plastic curvature over the length, 푙푦, which is
the length of which the steel strain exceeds the yield strain
휃푝푙 = 푙푦
 휑(푥) − 휑푦
푑푥 (3.5)
This can be expressed with the strain distribution in the same manner as in Section 3.2. Figure 3.5 shows
a typical moment-curvature diagram with the corresponding strains in the cross-section.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 21	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 21	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 21

-- 39 of 237 --

M
My
Mu
= φ
(1
𝑟)𝑦
(1
𝑟)𝑢
1
𝑟
d xy
εcc
εsy
fy
xu
εs > εsy
εcu
fy
φpl
Figure 3.5 Typical moment-curvature diagram for an under-reinforced concrete cross-section together
with a simplified bi-linear response. Inspired by (Engström, 2015).
The response is simplified by assuming a bi-linear elasto-plastic response and the curvature when the
plastic deformations start can be expressed as
휑푦 =
1
푟

푦
= 휀푐푦
푥푦
= 휀푠푦
푑 − 푥푦
(3.6)
where 휀푐푦 and 휀푠푦 is the strain of the concrete and steel, respectively, when the tensile reinforcement
starts to yield, and 푥푦 is the depth of the compressive zone when the steel starts to yield and can be
determined by a sectional analysis in state II or III. The curvature obtained when the structure collapses
can be expressed in two different ways, depending on which type of failure that will take place. When
the concrete’s strain 휀푐푢 is critical it can be expressed as
휑푢 =
1
푟

푢
= 휀푐푢
푥푢
= 휀푠
푑 − 푥푢
(3.7)
where 휀푐푢 is the ultimate concrete strain at the compressive edge, 휀푠 is the steel strain in the ultimate state
and 푥푢 is the depth of the compressive zone in the ultimate limit state. When the steels strain capacity is
decisive it can be expressed as
휑푢 =
1
푟

푢
= 휀푐푐
푥푢
= 휀푠푢
푑 − 푥푢
(3.8)
where 휀푐푐 is the concrete strain at the compressive edge when the ultimate steel strain is reached and
휀푠푢 is the ultimate steel strain. The plastic curvature can now be found by subtracting the curvature at
yielding from the ultimate curvature
휑푝푙 =
1
푟

푝푙
=
1
푟

푢
−
1
푟

푦
(3.9)
22 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	22 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	22 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 40 of 237 --

which can be expressed by the steel strains as
휑푝푙 =
1
푟

푝푙
= 휀푠
푑 − 푥푢
− 휀푠푦
푑 − 푥푦
≈ 휀푠 − 휀푠푦
푑 − 푥푢
(3.10)
The steel strain will vary between the yield strain and the maximum strain in the plastic region, which
means that the plastic curvature will also vary within this section. The plastic rotation can be calculated
by integrating the plastic curvature from all sections along the length 푙푦 as
휃푝푙 =
푙푦
0
휀푠(푥) − 휀푠푦
푑 − 푥푢

푑푥 (3.11)
This expression is theoretically correct but Engström (2015) states that it is difficult to estimate the plastic
rotation from it since several factors influence the parameters, as mentioned in Section 3.1. It should
also be noted that it is important to understand which angle the calculations refers to. The calculation
procedure presented here refers to the rotation illustrated in Figure 3.6.
θpl
Figure 3.6 Relation between plastic hinge rotation and support rotation. Inspired by
(Engström, 2015).
When determining the plastic rotation of a structure it is important to clearly define how the point of
yielding and ultimate value is defined. When comparing research results it is also important to be aware
of which method that is used since the measured rotations might vary significantly (Latte, 1999).
Latte (1999) states further that the point of yielding most often is clearly visible in a load-deformation
relation, and that the main difficulty lies in the definition of the ultimate rotation capacity. This is since
the moment diagram often can be horizontal at maximum load and that considerable deformations
can be achieved after the maximum value has been reached. Two definitions is commonly used when
determining the ultimate rotation capacity. The first one is based on the assumption that failure takes
place when the maximum moment has been reached in the critical section. This point can easily be
defined in theory but might be difficult to compare with tests since the moment-rotation diagram can be
almost horizontal at the peak value and allow for additional deformations after the ultimate value has
been reached, see Figure 3.7. These deformations can be utilized by defining the plastic rotation at 95 %
of the maximum moment on the descending branch of the moment-rotation diagram.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 23	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 23	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 23

-- 41 of 237 --

M
My
Mu
φ
Mcr
0.95Mu
θel θu.100 θu.95
θpl.100
θpl.95
θ
θel
θpl
φu
φy
Figure 3.7 Definitions of plastic rotation capacity. Inspired by (Latte, 1999).
The two different values of the plastic rotation can be calculated from Figure 3.7 as
휃푝푙,100 = 휃푢,100 − 휃푒푙 (3.12)
휃푝푙,95 = 휃푢,95 − 휃푒푙 (3.13)
where 휃푒푙 is the integration of all curvatures along the beam under the load which causes the first yielding
of reinforcement. 휃푢,100 and 휃푢,95 is the integration of all curvatures along the beam when the maximum
moment and when 95 % of the moment has been reached, respectively, on the descending branch. Unless
stated otherwise 휃푝푙 refers to the value of 휃푝푙,100. It can be seen from Figure 3.7 that the approach when
considering the peak value of the ultimate moment is more conservative than the other one. Latte (1999)
states further that 휃푢,95 should be used with care, when considering statically loaded structures, since the
descending branch of the diagram is dependent on the post peak behaviour of the steel. If there is a low
reinforcement ratio the steel might rupture at the ultimate load, leading to 휃푢,100 ≃ 휃푢,95.
Some factors that affect the curvature and the plastic length, and therefore the plastic rotation, has been
raised in the previous sections and a more detailed description of these can be found in (Latte, 1999) and
(Lozano and Makdesi, 2017), a summary of these effects can be seen in Table 3.1.
Table 3.1 Factors that influence the curvature or plastic length. Modified from (Latte, 1999).
Influence on: Curvature Plastic length
Factors:
Reinforcement ratio Bond and tension stiffening
Concrete strength and confinement Crack pattern -Shear cracks and crack spacing
Member size Type of load application
Compressive reinforcement Slenderness
Steel type - ultimate strain Steel type - hardening ratio
24 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	24 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	24 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 42 of 237 --

3.4 Different Methods to Determine Plastic Rotation
3.4.1 Introduction
The following sections will cover numerous methods to determine the plastic rotation capacity of beams.
It is important to keep in mind what factors the different methods take into account when determining
the rotation capacity, one method might include the influence of stirrups while another may not. This
will of course affect the result if stirrups are present. Another thing that needs to be kept in mind is that
the different methods does not state clearly which loading conditions the method was derived from, for
example if a point load or a distributed load were used. This further emphasizes the perception that the
results might not be entirely accurate for the specific conditions present.
3.4.2 From Test Results
When considering deformation-controlled tests, the deformations will still increase after the ultimate
load has been reached since the applied load is reduced according to the remaining capacity of the beam.
This means that it is possible to also describe the descending branch of a load-deflection relation from
a test. Figure 3.8 shows an example for the response during a deformation-controlled test. Based on
the same way of thinking as in Section 3.3, the plastic rotation capacity can be determined from the
load-displacement relation as well as for the moment-curvature relation. Based on the deformations, the
plastic rotation can be determined at a certain percentage of the ultimate load on the descending branch
of the load-displacement curve, which is also illustrated in Figure 3.8.
u
F
0.95Fmax
Fmax
ua ub
State II stiffness
upl
Figure 3.8 Response of deformation-controlled test with rotation capacity at 95 % of the ultimate load.
The plastic rotation 휃푝푙,푥% can be determined for a certain load (x%/100)⋅퐹푚푎푥 on the descending branch
of the load-displacement curve where 푢푎 and 푢푏 corresponds to the elastic and plastic deformation at a
certain load. Figure 3.9 illustrates the case presented in this report where the plastic hinge will be located
at a distance 0.35퐿 from the edge of the beam.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 25	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 25	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 25

-- 43 of 237 --

a
upl
ua ub
Figure 3.9 Illustration of the plastic and elastic deformations measured in experiments.
By assuming that the angle is very small, trigonometry can be used and the expression for the plastic
rotation capacity can be expressed as
휃푝푙,푥% =
 푢푏,푥% − 푢푎,푥%

푎 = 푢푝푙,푥%
푎 (3.14)
If the beam has been subjected to an impact load before the static test. The rotational capacity may be
determined according to the alternative method described in Lozano and Makdesi (2017), where the
load at the different levels on the descending branch will be coupled to the undamaged beams, which is
illustrated in Figure 3.10.
u
F
F80%
F100%
ua ub
State II stiffness
u80%
<F100%
Static test of
undamaged beam
Static test of
damaged beam
Figure 3.10 Illustration of method used to determine 푢80% for a damaged beam.
3.4.3 Eurocode 2
The model presented in EC 2 is designed to be used under static loading (Johansson and Laine, 2012).
The following section is based on the information given in (CEN, 2004) and (Johansson and
Laine, 2012). The procedure is based on the rotation around a plastic hinge, and the rotation obtained
can be coupled to the rotation 휃푝푙 in Figure 3.6, while all of the other methods can be coupled to half that
angle. The rotation capacity is based on a zone with the length of approximately 1.2 times the effective
depth of the element. It is assumed that this zone will undergo plastic deformations, i.e plastic hinges is
26 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	26 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	26 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 44 of 237 --

formed, under the applied load. The plastic rotation obtained here represents the maximum value in the
moment-rotation diagram in Figure 3.5.
The method presented can be used if the following conditions are fulfilled:
• In regions of yield hinges, 푥푢∕푑 ≤ 0.45 for concrete classes ≤ C50/60 and 푥푢∕푑 ≤ 0.35 for concrete
classes ≥ C55/67.
• Reinforcement should be of class B or C.
The design value for the plastic rotation capacity can be obtained from Figure 3.11 where the ratio
between the height of the compressive zone in the ultimate state 푥푢 and the effective height of the cross-
section 푑 is the governing parameters. The position on the curve in Figure 3.11 also indicates which
failure mode that will be expected between rupture of reinforcement and crushing of concrete.
pl [10 -3 rad]
Concrete
failure
Steel
failure
Class C
Class B
Figure 3.11 This figure is only valid for a slenderness 휆 =3.0 and if this is not the case, the plastic
rotation capacity should be multiplied by a factor 푘휆. Inspired by (CEN, 2004).
휃푝푙,푑 = 푘휆휃푝푙 (3.15)
where 푘휆 is defined as
푘휆 =
u휆
3 (3.16)
and 휆 is defined as
휆 = 푥0
푑 (3.17)
where 푥0 is the distance between the considered maximum moment section and the adjacent zero moment
section after plastic redistribution and 푑 is the effective depth of the cross-section.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 27	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 27	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 27

-- 45 of 237 --

3.4.4 Betonghandboken (ABC-Method)
This is an empirical method designed to be used under static loading and the following section is based
on information given in (Fransson, 1997) and (Cederwall et al., 1990).
The method is based on three factors: 퐴, 퐵 and 퐶 which takes different influences on the rotation capacity
into account. The factor 퐴 considers the influence of stirrups and reinforcement in both compression
and tension, 퐵 considers mechanical properties of the reinforcement and 퐶 considers the location of the
plastic hinges, in relation to the moment distribution. When combining these three factors, the plastic
rotation can be calculated as
휃푝푙,95 = 퐴 ⋅ 퐵 ⋅ 퐶 ⋅ 10−3 (3.18)
It should be noted that the plastic rotation obtained from this method is based on the value obtained
when 95 % of the ultimate value is reached on the descending branch, Latte (1999) and Fransson (1997).
Further, it refers to the rotation around a support, i.e. the angle 휃푝푙 in Figure 3.6, or one side of the
rotation around a plastic hinge. When considering partial safety factors and characteristic values of
material strength, the factor 퐴 in the design can be calculated as
퐴 = 1 + 0.6휔푣 + 1.7휔®
푠 − 1.4 휔푠
휔푏푎푙
≥ 0.05 (3.19)
but when measured values of the material strength is used, the following equation can be used
퐴 = 1 + 1.3휔푣 + 3휔®
푠 − 5휔푠 0.05 ≤ 퐴 ≤ 2.30 (3.20)
where 휔푣, 휔®
푠 and 휔푠 represents the mechanical ratio of the shear, compression and tension reinforcement,
respectively, and can be calculated as
휔푣 = 퐴푣
푏 ⋅ 푠
푓푠푣
푓푐푡
(3.21)
휔푠® = 퐴®
푠
푏 ⋅ 푑
푓푠푐
푓푐푐
(3.22)
휔푠 = 퐴푠
푏 ⋅ 푑
푓푠푡
푓푐푐
(3.23)
where 퐴푣, 퐴®
푠 and 퐴푠 is the area of the shear, compression and tension reinforcement respectively. Further,
푓푠푣, 푓푠푐 and 푓푠푡 is the strength of the shear, compression and tension reinforcement, respectively, while
푓푐푡 and 푓푐푐 is the concretes tension and compression strength. The parameter 푠 is the distance between
the shear reinforcement, 푏 is the width of the compressive zone and 푑 is the effective height of the
cross-section. Lastly, 휔푏푎푙 is called mechanic reinforcement ratio and is calculated via the strains as
휔푏푎푙 = 0.8휀푐푢
휀푐푢 + 휀푠푦
(3.24)
28 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	28 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	28 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 46 of 237 --

where 휀푐푢 = 3.5 ‰ represents the ultimate strain of the concrete and 휀푠푦 represents the reinforcements
yield strain which can be calculated as
휀푠푦 = 푓푠푡
퐸푠
(3.25)
where 퐸푠 is the modulus of elasticity of the reinforcement. There are a number of limitations of the
values for the different mechanical ratios
• 휔푣 is limited to 2.0 in Equation (3.19) and to 1.35 in Equation (3.20)
• The spacing of the stirrups must be < 0.8푑, otherwise 휔푣 = 0
• 휔®
푠 is limited to 휔푠 if the spacing of the stirrups < 15휙푠푐 where 휙푠푐 is the smallest diameter of the
compression reinforcement, otherwise 휔®
푠 = 0
• 휔푠 must not exceed 휔푏푎푙
The factor 퐵 can be found in Table 3.2 and depending on the type of reinforcement, it is further restricted
by the product of factor 퐴 and 퐵. Note that the classification of the reinforcement is from the old Swedish
regulations used until 1995.
Table 3.2 Values of factor B. Based on Betonghandboken (1990) (Johansson and Laine, 2012). 휀푝 is
the strain of the prestressing steel.
Type of reinforcement B Max A ⋅ B
Ks 60, Ks 40, Ss 26, Ss 26S 1.0 1.7
Ks 60S, Ks 40S 0.8 1.1
Cold-worked steel with 휀푠푢 ≥ 3 % and 푓푠푢/푓푠푦0.2 ≥ 1.1 0.6

1-0.7 휀푝
휀푠푢

0.5
1) If 푓푠푢∕푓푠푦0.2 ≥ 1.4 and 휀푠푢 ≥ 8 % , values for Ks60 and Ks40 is used.
The factor 퐶 can be calculated from two different equations, depending on whether the plastic hinge is
located in the span or over the supports
퐶푠푢푝 = 10 ⋅ 푙0,푠푢푝∕푑 (3.26)
퐶푓 = 7 ⋅ 푙0,푓 ∕푑 (3.27)
where 푙0,푠푢푝 and 푙0,푓 is the distance from the plastic hinge to the position where the moment is zero,
according to Figure 3.12.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 29	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 29	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 29

-- 47 of 237 --

q
l l0,sup l0,f l/2
Plastic hinge
M = 0
Figure 3.12 Definition of 푙0,푠푢푝 and 푙0,푓 depending on the moment diagram. Inspired by
(Johansson and Laine, 2012).
3.4.5 Tamminens D-factor
In a paper written by Tamminen (1993), a method to improve the method used in Betonghandboken
is presented. This is done by introducing another variable 퐷 which takes the height of the member
into account. Tamminen points out that the rotation capacity increases with increasing strength of the
concrete but decreases with increasing size of the member. The formula in Betonghandboken provides
an increase in rotation capacity when the concretes strength increases but the size of the member does
not have any influence. Therefore he gives a suggestion for the factor 퐷 as
퐷 = 푘
푑 ≥ 1 (3.28)
where 푑 is the effective height of the member and 푘 varies depending on the quality of the concrete, see
Table 3.3. It should be noted that the tests made by Tamminen (1993) is done on beams made out of
high strength concrete. It is however interesting to see how much extra capacity this method provides in
relation to the ordinary method. It should be noted that the concrete classes in Table 3.3 corresponds
to the old standards. If a comparison is made between the concrete classes in Cederwall et al. (1990)
and in CEN (2004) it can be seen that K30 corresponds to C25/30 and that K100 corresponds to high
performance concrete. It should be noted that the factor 푘 is only given for two different concrete classes
and that Tamminen gives no suggestion on how to choose the factor if the concrete class present does
not correspond to one of these. One suggestion could be to interpolate but since he gives no suggestions
regarding interpolation, it is not done in this project.
Table 3.3 Values of k depending on the concrete quality.
Concrete class K30 K100
k 0.3 0.5
The equation for calculating the plastic rotation can therefore be expressed as
휃푝푙,95 = 퐴 ⋅ 퐵 ⋅ 퐶 ⋅ 퐷 ⋅ 10−3 (3.29)
30 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	30 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	30 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 48 of 237 --

3.4.6 Bk25
Johansson and Laine (2012) describes a method that is presented in Fortifikationsförvaltningen (1973)
and this chapter is based on the knowledge obtained from those. This method is designed to be used
under impulse loading and the type of load considered is an air blast. The plastic rotation obtained here
represents the maximum value in the moment-rotation diagram presented in Figure 3.7.
The plastic hinge is assumed to be spread over a distance 2푙푝푙, which has a constant radius of curvature,
see Figure 3.13. From Figure 3.13 it is also clear which angle the method refers to.
lpl lpl
l
θpl r
b
As
d h
c
d = h - c
θpl
Figure 3.13 Model for rotation capacity. Inspired by (Johansson and Laine, 2012).
The equivalent plastic hinge length, 푙푝푙, can be calculated as
푙푝푙 = 0.5푑 + 0.15푙 (3.30)
The rotation capacity is directly proportional to the length of the plastic hinge
휃푝푙 = 푙푝푙
푟 (3.31)
The maximum radius of curvature can be obtained through the same way of thinking as in
Section 3.2
1
푟 = 휀푐푢
푥 = 휀푠
푑 − 푥 (3.32)
where 휀푐푢 is the concretes ultimate strain and 휀푠 is the mean strain of the reinforcement over the distance
푙푝푙. The failure criterion will be reached either by crushing of concrete or rupture of reinforcement when
they reach 휀푐푢 or 휀푠, respectively. Figure 3.14 shows a principal cross-section.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 31	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 31	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 31

-- 49 of 237 --

b
As
x
d h
c
εcu
εs d-x
x
fcc
Fs
0.4x0.8x Fc
d = h - c z = d - 0,4x
z	Mrd
Figure 3.14 Cross-section subjected to a bending moment, from Johansson and Laine (2012).
From Figure 3.14, a horizontal equilibrium can be obtained as
푓푐푐 푏0.8푥 = 푓푠푡퐴푠 (3.33)
With the definition of the reinforcement ratio parameter, 휌
휌 = 퐴푠
푏 ⋅ 푑 (3.34)
and the mechanical reinforcement ratio
휔푠 = 퐴푠
푏 ⋅ 푑
푓푠푡
푓푐푐
(3.35)
The height of the compressive zone can be expressed from Equation (3.33) as
푥 = 휌 ⋅ 푑 1
0.8
푓푠푡
푓푐푐
= 휔푠푑
0.8 (3.36)
or
푥
푑 = 휔푠
0.8 (3.37)
The limit for when different failure modes occur can be expressed from Equation (3.32) as
휔푠,푐푟푖푡 = 0.8휀푐푢
휀푐푢 + 휀푠
(3.38)
This means that if 휔푠 > 휔푠,푐푟푖푡, the beam is expected to fail due to crushing of concrete. Otherwise, it
is expected to fail due to rupture of reinforcement. When crushing of concrete is critical, the plastic
rotation capacity can be calculated by combining Equations (3.30), (3.31) and (3.33) as
휃푝푙,푓 = 푙푝푙
푟 = 0.8휀푐푢
휔푠푑
 0.5푑 + 0.15푙) = 0.4휀푐푢
휔푠

1 + 0.3 푙
푑

(3.39)
32 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	32 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	32 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 50 of 237 --

and when rupture of reinforcement is critical as
휃푝푙,푓 = 푙푝푙
푟 = 0.8휀푠
푑 0.8 − 휔푠
 0.5푑 + 0.15푙) = 0.4휀푠
0.8 − 휔푠

1 + 0.3 푙
푑

(3.40)
Equations (3.39) and (3.40) are true when the plastic hinge develops in the span. When a plastic hinge is
formed at the support, though, the definition of the plastic hinge length is defined as
푙푝푙 = 0.5푑 + 0.1푙0 (3.41)
where 푙0 is the shear span and can be calculated as
푙0 = 푀푠푢푝
푉푠푢푝
(3.42)
where 푀푠푢푝 and 푉푠푢푝 is the moment and shear over the support. For a beam with the length 푙 and a
uniformly distributed load 푞, the moment and shear can be calculated by the well-known equations:
푀푠푢푝 + 푀푓 = 푞푙2
2 (3.43)
푉푠푢푝 = 푞푙
2 (3.44)
where
푀푠푢푝 = 훼푀푓 (3.45)
where 훼 is a parameter that depends on the reinforcement amount in the span 휌푓 and over the support
휌푠푢푝. It can be expressed approximately as
훼 = 휌푠푢푝
휌푓
(3.46)
When combining Equations (3.42) to (3.46), the length 푙0 can be rewritten as
푙0 = 휌푠푢푝
휌푠푢푝 + 휌푓
⋅ 푙
4 (3.47)
By using the same analogy as before, the plastic rotation capacity over the support 휃푝푙,푠푢푝, when crushing
of concrete is critical, can be expressed as
휃푝푙,푠푢푝 = 0.4휀푐푢
휔푠
⋅

1 + 1
20 ⋅ 휌푠푢푝
휌푠푢푝 + 휌푓
⋅ 푙
푑

(3.48)
and when rupture of reinforcement is critical as
휃푝푙,푠푢푝 = 0.4휀푐푢
0.8 − 휔푠
⋅

1 + 1
20 ⋅ 휌푠푢푝
휌푠푢푝 + 휌푓
⋅ 푙
푑

(3.49)
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 33	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 33	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 33

-- 51 of 237 --

3.4.7 Methods Based on Equivalent Plastic Hinge Length
3.4.7.1 Introduction
Many researchers have presented a method to approximate the plastic rotation by assuming a constant
plastic curvature over an equivalent plastic hinge length 푙푝푙, see Figure 3.15.
x
φ
φu
φy
lpl
ly
φ(x)
Figure 3.15 Concept of equivalent plastic hinge. Inspired by (Lozano and Makdesi, 2017).
In the method described in Section 3.3, the plastic rotation is calculated by integrating the curvatures
over the length of the plastic hinge, which is represented by the grey area in Figure 3.15. This area can
be approximated by a rectangle with the height 휑푢 − 휑푦 and the width 푙푝푙 (Kheyroddin and
Naderpour, 2007). The plastic rotation around the hinge can then be calculated as
휃푝푙 =  휑푢 − 휑푦
푙푝푙 = 휑푝푙푙푝푙 (3.50)
There are several methods to estimate the equivalent plastic hinge length and some of them is treated in
Lozano and Makdesi (2017). However, Arbulu (2006) covers several other methods and the methods
that are applicable on beams is presented in the following sections.
3.4.7.2 Baker and Amarkone
The method developed by Baker and Amarkone (1964) is valid for both beams and columns and they give
one expression for confined concrete and one for unconfined concrete. Only the method for unconfined
concrete is presented here and in that case the equivalent plastic hinge length can be calculated as
푙푝푙 = 푘1푘2푘3
푙0
푑
0.25
푑 (3.51)
where 푘1 is a factor that considers the influence of the tension reinforcement. It is equal to 0.7 for
mild steel and 0.9 for cold-worked-steel. Further, 푘2 is a factor that considers axial loading and can be
calculated as
푘2 = 1 + 0.5 푃
푃푢
(3.52)
34 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	34 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	34 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 52 of 237 --

where 푃 is the axial load and 푃푢 is the axial compressive strength of the member without any bending
moment. Finally, 푘3 is a factor that considers the influence of the strength of the concrete and can be
calculated as
푘3 = 0.9 − 푓푐푐 − 13.8
92 (3.53)
where 푓푐푐 is given in [MPa].
3.4.7.3 ACI-ASCE Comittee 428
ACI-ASCE-Committee-428 (1968) presented a model that is valid for both beams and columns as well.
It is presented as a lower and upper limit for the equivalent plastic hinge length as
푚푖푛

푅휀
푑
4 + 0.03푙0푅푚

, 푅휀푑

< 푙푝푙 < 푅휀
푑
2 + 0.10푙0푅푚

(3.54)
where 푅휀 is the strain ratio
푅휀 = 0.004 − 휀푐푒
휀푐푢 − 휀푐푒
(3.55)
and 휀푐푒 is the concrete strain in the extreme compression fiber at yield curvature. This strain can
be calculated or assumed a value between 0.001 and 0.002. 휀푐푢 is the concrete strain in the extreme
compression fiber at ultimate curvature. The effects of confinement, loading rate and strain gradients
are neglected and 휀푐푢 is assumed to be between 0.003 and 0.004. 푅푚 is the moment ratio and can be
calculated as
푅푚 = 푀푚푎푥 − 푀푦
푀푢 − 푀푦
(3.56)
where 푀푚푎푥 is the maximum moment in the length of the member. An expression for calculating the
distance 푙0 from the section of maximum moment to the section of zero moment was also presented
as
푙0 = 4푀푚푎푥
4푉푧 + √푤푧푀푚푎푥푅푚
(3.57)
where 푉푧 is the shear force adjacent to a concentrated load or the reaction at the section of maximum
moment and 푤푧 is the uniformly distributed load at the section of maximum moment. This expression
for 푙0 is however only valid for members subjected to a uniformly distributed load.
3.4.7.4 Paulay and Priestley
Paulay and Priestley (1992) developed a method in 1992 that is valid for both beams and columns as
well and it is expressed as
푙푝푙 = 0.08푙0 + 0.022푓푦푑푏 ≥ 0.044푓푦푑푏 (3.58)
Where 푓푦 is given in [MPa] and 푑푏 is the diameter of the tensile reinforcement. It is also stated that for
commonly used dimensions, Equation (3.58) will give plastic hinge lengths of approximately 0.5ℎ.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 35	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 35	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 35

-- 53 of 237 --

3.4.7.5 Panagiotakos and Fardis
Panagiotakos and Fardis (2001) developed a method in 2001 that is valid for beams, columns and walls.
They made predictions and tested over 1 000 specimens to see how well they could predict the behaviour
of them. 266 of the specimens were beams which had a rectangular cross-section, except two which
had a T-section. The reinforcement was placed unsymmetrical and the beams were not subjected to any
axial loads. Most of the specimens were tested as cantilevers, but some of them were tested as simply
supported beams with a concentrated load at the midspan. The specimens were subjected to monotonic
or cyclic loading and an expression for the equivalent plastic hinge length were derived for both cases
as
푙푝푙,푐푦 = 0.12푙0 + 0.014푎푠푙푑푏푓푦 (3.59)
for cyclic loading and
푙푝푙,푚표푛 = 1.5푙푝,푐푦 = 0.18푙0 + 0.021푎푠푙푑푏푓푦 (3.60)
for monotonic loading. 푎푠푙 is equal to one if slippage of the longitudinal reinforcement is possible and
zero if it is not and 푓푦 is given in [MPa].
36 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	36 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	36 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 54 of 237 --

4 Fundamentals of Dynamics
4.1 Introduction
The response of a dynamic loaded structure can be described using a single-degree of freedom (SDOF)
system. Some basic fundamentals of dynamics is used to create the SDOF system that is used within
this project. The main part of the theoretical background in this section is based on Johansson and
Laine (2012).
4.2 Impulse
When a mass particle 푚 has a certain velocity 푣 the momentum 푝 of the body is defined as
푝 = 푚 ⋅ 푣 (4.1)
If a body with an initial velocity 푣0 is subjected to an applied force 퐹 (푡) where 푡0 ≤ 푡 ≤ 푡1, the momentum
will change to
푚 ⋅ 푣1 = 푚 ⋅ 푣0 +
푡
푡0
퐹 (푡)푑푡 (4.2)
where the last part is the change in momentum and is defined as the impulse 퐼 acting on the body. The
impulse can be represented as the area under the curve in a load-time graph, see Figure 4.1.
퐼 = Δ푝 = 푚 ⋅ Δ푣 =
푡
푡0
퐹 (푡)푑푡 (4.3)
t0
t
F
Favg
t
I
Figure 4.1 The impulse over a time interval. 퐹푎푣푔 is the average force acting on the body.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 37	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 37	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 37

-- 55 of 237 --

4.3 Work, Kinetic Energy and External Work
If a force 퐹 is applied to a particle and it is displaced the distance 훿 the work 푊 performed by the force
is defined as
푊 = 퐹 훿 cos 휙 = 퐹푥훿 (4.4)
where 휙 is the angle between the force and the direction of the particle, see Figure 4.2. When a variable
force is applied, the work from the force can be described as
푊 =
훿
0
퐹푥(푥)푑푥 (4.5)
ϕ
Fx
F
x
δ
Figure 4.2 Work explained as the force projected to the direction of displacement.
Work 푊 and energy 퐸 has the same quantity. The kinetic energy 퐸푘 of a particle of mass moving at a
velocity 푣 is defined as
퐸푘 = 푚 ⋅ 푣2
2 (4.6)
which gives the possibility to explain the external work 푊푒 done by a force as the change in kinetic
energy
푊푒 = Δ퐸푘 = 푚 ⋅ 푣2
1
2 − 푚 ⋅ 푣2
0
2 (4.7)
By combining this expression with Equation (4.3) the external work can be described based on the
characteristic impulse as
푊푒 = 퐼2
푘
2푚 (4.8)
4.4 Internal Work
4.4.1 Introduction
An impulse acting on a structure causes an external work and to maintain the energy equilibrium there
must be an internal work 푊푖 that equals the external work
푊푖 = 푊푒 (4.9)
This equilibrium constitutes the conceptual basis of a calculation model for an impulse-loaded construc-
tions.
38 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	38 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	38 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 56 of 237 --

4.4.2 Linear Elastic Response
According to Equation (2.1) the relation between the internal force 푅 and the elastic deformation 푢푒푙
is
푅 = 푘 ⋅ 푢푒푙 (4.10)
The internal work performed by the system can then be defined as
푊푖 = 푅 ⋅ 푢푒푙
2 = 푘 ⋅ 푢2
푒푙
2 (4.11)
The energy equilibrium for a linear elastic response is shown schematically in Figure 4.3.
u
F, R
uel
k
Wi
Wy
R
Figure 4.3 Energy equilibrium with linear elastic response.
By combining Equations (4.8), (4.9) and (4.11), the internal work can be expressed as
푊푖 = 푘 ⋅ 푢2
푒푙
2 = 퐼2
푘
2푚 = 푊푒 (4.12)
from which the elastic response an be expresses as
푢푒푙 = 퐼푘
푚 ⋅ 휔 (4.13)
where
휔 =
u 푘
푚 (4.14)
corresponds to the angular eigenfrequency of the system.
4.4.3 Plastic Response
As explained in Section 2.2.3, deformations does not occur until the capacity of the structure is reached.
At the point where the maximum value of the internal resistance 푅푚 is reached, the structure starts to
deform. The internal work can then be expressed as
푊푖 = 푅 ⋅ 푢 = 푅푚 ⋅ 푢 (4.15)
The relationship between internal and external energy can be seen in Figure 4.4.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 39	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 39	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 39

-- 57 of 237 --

u
F, R
upl
Wi
We
Rm
Figure 4.4 Energy equilibrium with plastic response.
The plastic deformation can, by combining Equations (4.8), (4.9) and (4.15), be expressed as
푢푝푙 = 퐼2
푘
2푚 ⋅ 푅푚
(4.16)
4.4.4 Elasto-Plastic Response
The internal force 푅 is in the elasto-plastic case expressed as Equation (2.3) and the internal work
depends on both the elastic and plastic deformations and is calculated as
푊푖 = 푅푚
2 (푢푒푙 + 2푢푝푙) (4.17)
where
푢푒푙 = 푅푚
푘 (4.18)
is the point from where the plastic deformation starts. By combining Equations (4.8), (4.9) and (4.17) it
is also possible the express the plastic part as
푢푝푙 = 퐼2
푘
2푚 ⋅ 푅푚
− 푢푒푙
2 (4.19)
The relationship between internal and external energy can be seen in Figure 4.5.
40 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	40 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	40 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 58 of 237 --

u
F, R
utot
Wi
We
Rm
uel
utot = uel + upl
Figure 4.5 Energy equilibrium with elasto-plastic response.
4.5 Equation of Motion
In order to understand the SDOF system used in this project it is essential to understand the equation of
motion. The derivation and description of the equation is based on the knowledge gained from (Craig
and Kurdila, 2006) and (Johansson and Laine, 2012). Newton’s second law
… 퐹 = 푚 ⋅ 푎 (4.20)
is applied where 푚 is the mass and 푎 the acceleration of the mass, which is given as the second time
derivative of the displacement, 푎 =̈푢 . In a similar way the velocity is given as the first time derivative of
the displacement, 푣 =̇ 푢. If the mass in a system with a spring and a damper is displaced the distance 푢,
positive to the right, by an external force 퐹 (푡), the free body diagram can be described by
Figure 4.6.
F(t)
m
c
k
u
m
Fc
Fk F(t)
a
Figure 4.6 Free body diagram.
The relationships for the two resistance forces 퐹푘 and 퐹푐 are
퐹푘 = 푘 ⋅ 푢 (4.21)
and
퐹푐 = 푐 ⋅̇ 푢 (4.22)
where 푘 is the linear stiffness of the spring and 푐 is the damping coefficient. The damping is usually defined
as a linear function of the velocity but it is a complex phenomenon and there are several mathematical
methods to describe it. By using Equation (4.20) the dynamic equilibrium of the free body diagram in
Figure 4.6 gives
퐹 (푡) − 퐹푘 − 퐹푐 = 푚 ⋅ 푎 (4.23)
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 41	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 41	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 41

-- 59 of 237 --

With some rearrangement and application of Equations (4.21) and (4.22) the equation of motion for a
SDOF system is
푚 ⋅̈푢 + 푐 ⋅̇ 푢 + 푘 ⋅ 푢 = 퐹 (푡) (4.24)
4.6 Impact and the Influence of Mass
4.6.1 Introduction
When a moving mass 푚1, with an initial velocity 푣0, impacts a non-moving mass 푚2, see Figure 4.7, there
are two extreme cases to describe the collision: perfectly elastic or perfectly plastic impact, see Figure 4.8.
In the elastic response the two bodies will have different velocities, 푣1 and 푣2, after the impact whereas in
the plastic case they will have the same velocity 푣12. In the usual occasion, the collision are somewhere in
between the elastic and the plastic case, but they are often treated separately for simplicity. The incoming
mass 푚1 represents as an example the impulse from a shock wave or a vehicle hitting a barrier. In this
study of impulse loaded structures it represents the drop-weight that hits the RC beam.
m1 m2
v0 v = 0
Figure 4.7 Before impact.
m1 m2
v1 v2
(a) Elastic collision.
m1 m2
v12
 (b) Plastic collision.
Figure 4.8 After impact.
The kinetic energy and momentum of the incoming mass 푚1 is
퐸푘,0 = 푚1푣2
0
2 (4.25)
푝0 = 푚1푣0 (4.26)
42 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	42 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	42 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 60 of 237 --

4.6.2 Elastic Impact
In the perfectly elastic collision the two velocities after impact 푣1 and 푣2 can be calculated as
푣1 = 푚1 − 푚2
푚1 + 푚2
푣0 (4.27)
and
푣2 = 2푚1
푚1 + 푚2
푣0 (4.28)
Both the kinetic energy and the momentum will be the same before and after impact. The kinetic energies
for the two bodies then become
퐸푘,1 = 푚1푣2
1
2 = 푚1
2
0푚1 − 푚2
푚1 + 푚2
12
푣2
0 =
0푚1 − 푚2
푚1 + 푚2
12
퐸푘,0 (4.29)
퐸푘,2 = 푚2푣2
2
2 = 푚2
2
0 2푚1
푚1 + 푚2
12
푣2
0 = 4푚1푚2
(푚1 + 푚2)2 퐸푘,0 (4.30)
4.6.3 Plastic Impact
If the collision is plastic, the kinetic energy is no longer the same before and after impact. However, the
momentum remain the same before and after impact and the velocity 푣3 of the system is
푣3 = 푚1
푚1 + 푚2
푣0 (4.31)
The kinetic energy of the system is
퐸푘,3 = (푚1 + 푚2)2
2 = 푚1 + 푚2
2
0 푚1
푚1 + 푚2
12
푣2
0 = 푚1
푚1 + 푚2
퐸푘,0 (4.32)
4.7 Response during Repeated Impacts
4.7.1 Introduction
In this project the RC beam will be subjected to both single and repeated impacts. The aim of this
section is to explain the expected structural behaviour for the latter case. The methodology presented in
this section is based on the information gained from Johansson and Laine (2012) where the structural
behaviour is explained by an equivalent impulse load, determined from the effect of several impacts.
From this, the residual strength can be estimated. It is based on the assumption that the time interval
between the impacts is large enough to get a stagnant structure before the next impact occurs. The
repeated impact theory is only explained from the plastic and elasto-plastic point of view. The ideally
elastic response is not of interest since the structure, in such a case, will revert to the original position
without any decrease in residual deformation capacity.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 43	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 43	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 43

-- 61 of 237 --

4.7.2 Plastic and Elasto-Plastic Response
The elasto-plastic response is explained in Section 2.2.4 and is once again illustrated in Figure 4.9, where
the response of the mass 푚 is showed in a force-displacement relation.
F(t)
R(u)
m u
u
R
R
uel
k
Figure 4.9 Force-displacement response of an elasto-plastic structure (Johansson and Laine, 2012).
If the system is loaded with a characteristic impulse 퐼1, an external work 푊푒,1 is generated, which with
the use of Equations (4.9) and (4.17), gives
푊푒,1 = 푊푖,1 = 푊1,푒푙 + 푊1,푝푙 = 푅푚
2 (푢1,푒푙 + 2푢1,푝푙) (4.33)
with the total deformation for the first impulse given as
푢1 = 푢1,푒푙 + 푢1,푝푙 (4.34)
The total response from the first impulse can be seen in Figure 4.10. When the impulse load disappears
the only deformation that remains is the plastic deformation 푢2,0 and it can be expressed as
푢2,0 = 푢1,푝푙 (4.35)
R W1,el
u1
u
R
W1,pl
u1,pl	u1,el
Wi,1 = W1,el + W2,pl
R
u1
u
R
u1,pl u1,el
unloading
u2,0
Figure 4.10 The response after the first impulse 퐼1.
If the system is loaded with a subsequent impulse 퐼2, see Figure 4.11, the deformation will start from the
point for plastic deformation 푢2,0 from the first impulse.
44 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	44 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	44 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 62 of 237 --

R
W2,el
u2,0
utot = uel + upl
u
R
W2,pl
u1,pl u2,pl
Wi,2 = W2,el + W2,pl
u2,el
u2
u2,tot
R
utot = uel + upl
u
R
u1,pl u2,el	u2,pl
u2
u2,tot
unloading
u3,0
Figure 4.11 The response after the second impulse 퐼2.
The work performed on the structure from the second impulse is determined in the same way as for the
first impulse, i.e.
푊푒,2 = 푅푚
2 (푢2,푒푙 + 2푢2,푝푙) (4.36)
where the deformation from 퐼2 itself can be determined as
푢2 = 푢2,푒푙 + 푢2,푝푙 (4.37)
and this gives the total deformation as
푢2,푡표푡 = 푢2,0 + 푢2 = 푢1,푝푙 + 푢2,푒푙 + 푢2,푝푙 (4.38)
When the impulse load 퐼2 disappears, this gives a total deformation of
푢3,0 = 푢1,푝푙 + 푢2,푝푙 (4.39)
which is the point of start if the impulse loading continues. It is worth mentioning that this methodology
does not consider any potential decrease in stiffness due to local damages that might occur in the structure.
For a case with local damaging it is likely that the elastic stiffness changes during the repeated impacts,
which results in larger deformations.
4.7.3 Equivalent Impulse Load for Elasto-Plastic Response
Based on the concept presented in Section 4.7.2 the response from several impacts can be explained by a
single impulse, the equivalent impulse 퐼푡표푡. The equivalent impulse is only explained for the elasto-plastic
case. Worth mentioning is that neglecting the elastic contribution to the internal work gives a result on
the safe side but it is considered in this methodology. If the structural response after an impulse load does
not reach the plastic region, the effect from that impulse will not contribute to the equivalent impulse.
This means that the contribution from the impulse is only considered if the external work 푊푒,푖 from the
impulse is larger than the elastic part in the internal work 푊푖,푒푙. With a combination of Equations (4.10)
and (4.11) the internal elastic work can be expressed as
푊푖,푒푙 = 푅2
2푘 (4.40)
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 45	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 45	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 45

-- 63 of 237 --

and from this, by using Equations (4.8) and (4.9), the maximum allowed impulse 퐼푒푙 from which there is
no damage of the structure is
퐼푒푙 = √푅 ⋅ 푚 ⋅ 푢푒푙 = 푅
u푚
푘 = 푅
휔 (4.41)
with 휔 from Equation (4.14). If the impulse is larger than 퐼푒푙 there will be a remaining damage in the
structure, i.e. plastic deformation after the impulse. The total external work 푊푒,푡표푡 on the structure
is
푊푒,푡표푡 = 푛 ⋅ 푊푒푙 +
푛	
…
푖=1
푊푖,푝푙 (4.42)
which, with Equations (4.11), (4.15) and (4.12), can be rewritten as
1
2푚
푛	
…
푖=1
퐼2
푖 = 푅
0
푛 ⋅ 푢푒푙
2 + 푢푡표푡,푝푙
1
(4.43)
From this the total plastic deformation 푢푡표푡,푝푙 can be expressed as
푢푡표푡,푝푙 = 1
2
0 1
푅 ⋅ 푚
푛	
…
푖=1
퐼2
푖 − 푛 ⋅ 푢푒푙
1
(4.44)
The plastic deformation can also be expressed with the equivalent impulse load as
푢푡표푡,푝푙 = 1
2
0 1
푅 ⋅ 푚퐼2
푡표푡 − 푢푒푙
1
(4.45)
Combining Equations (4.44) and (4.45) gives
퐼푡표푡 =
y
x
x
w 푛	
…
푖=1
퐼2
푖 − (푛 − 1) ⋅ 푅 ⋅ 푚 ⋅ 푢푒푙 (4.46)
and can, with Equation (4.41) be rewritten as
퐼푡표푡 =
y
x
x
w 푛	
…
푖=1
퐼2
푖 − (푛 − 1) ⋅ 퐼2
푒푙 =
y
x
x
w 푛	
…
푖=1
(퐼2
푖 − 퐼2
푒푙) + 퐼2
푒푙 (4.47)
where 퐼1 ≥ 퐼푒푙 if the impulse load should be accounted for.
46 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	46 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	46 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 64 of 237 --

4.7.4 Residual Strength
From Equation (4.47) it is possible to determine the magnitude of the impulse load for collapse of an
already damaged structure. If the structure has sustained 푛 − 1 number of impulses, the maximum
magnitude allowed of the next impulse becomes
퐼푛 =
y
x
x
w퐼2
푡표푡 −
푛−1	
…
푖=1
(퐼2
푖 − 퐼2
푒푙) (4.48)
It can also be expressed as
퐼푛 =
t
2푅 ⋅ 푚 ⋅ 푢푛,푝푙 (4.49)
where
푢푛,푝푙 = 푢푡표푡,푝푙 − 푢푛,0 (4.50)
and this means that the ultimate plastic deformation 푢푡표푡,푝푙 need to be known in advance. 푢푛,0 is the
residual plastic deformation from previous impulse loads and can be calculated as
푢푛,0 =
푛−1	
…
푖=1
푢푖,푝푙 (4.51)
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 47	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 47	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 47

-- 65 of 237 --

5 Discrete Model for Dynamic Analysis
5.1 Introduction
The response of a dynamic loaded RC beam can be described based on a SDOF-system. This chapter
treats how a SDOF-system can be determined and how it can be transformed into a 2-DOF system. This
chapter is based on the information gained from (Johansson and Laine, 2012).
5.2 Definition of SDOF and Impulse Loading
Figure 5.1 illustrates a dynamic SDOF where the mass 푚 is exposed to an external time dependent load
퐹 (푡). The free movement of the mass is prevented by a static force 푅푠푡푎(푢) and a viscous force 푅푑푦푛(̇푢).
A simplification used by Johansson and Laine (2012) is that the viscous force is neglected and it is
explained to be a fair and conservative assumption due to the the short duration of loading and that the
maximum displacement is the only result of interest. With this assumption, the only counteracting force
is the static one, giving 푅(푢) = 푅푠푡푎(푢).
F(t)
c(u	 )	R(u)
m	u
F(t)
R(u)
m u
Figure 5.1 Definition of a SDOF system with the damping force neglected.
There are two extreme cases to explain the loading: ideal impulse load and pressure load. The character-
istic impulse 퐼푘, see Figure 5.2a, is generated when a time dependent load with an infinite high pressure
acts for an infinitesimal time step. The characteristic pressure load 퐹푘, see Figure 5.2b, is instead a load
that is acting for an infinite long duration.
In an arbitrary case, 퐹 (푡) will be somewhere in between these two extreme cases. If the load is defined as
long or short depends not only on the actual duration, but also on the properties of the loaded structure.
The relatively short duration of the drop-weight impact used in the test of this report is deemed to be
similar to that of a characteristic impulse load 퐼푘 and will therefore be treated as such further on.
48 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	48 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	48 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 66 of 237 --

F
t
Ik
dt
(a) Impulse load 퐼푘.
F
t
t0
Fk
 (b) Pressure load 퐹푘.
Figure 5.2 Illustration of dynamic extreme cases.
5.3 Transforming the Beam to SDOF
The SDOF system defined in Section 5.2 can be used to describe a structure in a simplified way. The
deformation of a statically loaded beam with linear elastic response is a function of the load and the
boundary conditions (BC). Since it is a linear elastic behaviour the shape of the deformation is independent
of the magnitude of the load and this gives the opportunity to describe the displacement along the beam
by using one point only, the system point, see Figure 5.3. The system point can be any point along the
beam but is usually determined as the mid-point of the beam, or in the case of a point load, as the load
point. The SDOF-system is designed in such way that the displacement 푢푆퐷푂퐹 reflects the system point
displacement 푢푠 that is
푢푠 = 푢푆퐷푂퐹 (5.1)
us
us	
ui ui
Figure 5.3 For a beam with linear elastic behaviour it is possible to describe the displacement along
the beam by using a system point. If the system point is increased with the factor 훼, all the
points will increase with the same magnitude, modified from (Johansson and Laine, 2012).
The transformation of the beam into a equivalent SDOF system is illustrated in Figure 5.4. The system
point is given a mass 푚, the internal force 푅(푢) and the external force 퐹 (푡).
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 49	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 49	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 49

-- 67 of 237 --

kb
Fb
us
mb
l
x
uSDOF = us
F(t)
R(u)
m
c(u	 )
Figure 5.4 Transformation of the beam into an equivalent SDOF system, modified from
(Johansson and Laine, 2012).
Transformation factors 휅 are used in order to convert actual structural elements, in this case a beam
and a drop-weight, to an equivalent SDOF systems. The factors are used to keep the kinetic energy
from the mass 푚 and the work done by the forces 퐹 and 푅 on the SDOF system at the same level as the
energy and work performed on the beam. The real beam parameters of mass, stiffness and external load
are multiplied with dimensionless transformation factors 휅. By using transformation factors, the mass,
stiffness and external load for the SDOF-system can be expressed as
푚 = 휅푚푚푏 (5.2)
푘 = 휅푘푘푏 (5.3)
퐹 = 휅퐹 퐹푏 (5.4)
where 푚푏, 푘푏 and 퐹푏 corresponds to the actual beam properties and loading conditions. By using these
three conditions and Equation (4.24) the expression for the discrete system is
휅푚푚푏̈푢 + 휅푘푘푏푢 = 휅퐹 퐹푏 (5.5)
which, for an arbitrary system, can be defined as
휅푚푚푏̈푢 + 휅푘푅푏 = 휅퐹 퐹푏 (5.6)
where 푅푏 describes the response of the beam subjected to static loading. Equation (5.5) can also be
rewritten as
휅푚
휅퐹
푚푏̈푢 + 휅푘
휅퐹
푘푏푢 = 퐹푏 (5.7)
In accordance to Biggs (1964) the factor 휅푘 must always be equal the factor 휅퐹 , that is
휅푘 = 휅퐹 (5.8)
It is now possible to rewrite Equation (5.7) as
휅푚퐹 푚푏̈푢 + 푘푏푢 = 퐹푏 (5.9)
50 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	50 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	50 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 68 of 237 --

where
휅푚퐹 = 휅푚
휅퐹
(5.10)
This means that, in order to transform the beam into a SDOF system, it is only the mass of the beam 푚푏
that need to be multiplied with the factor 휅푚퐹 .
The transformation factors depends on the support conditions, loading conditions and also the deformed
shape of the beam, i.e elastic or plastic strain range. In this project the only factors introduced and treated
is the ones for simply supported beams subjected to three-point loading. The transformation factors used
within this project is presented in Table 5.1. A deviation of the factors is presented in Johansson and
Laine (2012) and factors for different BC and strange ranges is presented in Biggs (1964).
Table 5.1 Transformation factors for simply supported beams subjected to three-point-loading
(Biggs, 1964). Note that 휅푘=휅퐹 .
Strain Range Load factor, 휅퐹 Mass factor, 휅푚 Load-mass factor, 휅푚퐹
Elastic 1.00 0.49 0.49
Plastic 1.00 0.33 0.33
5.4 Transforming the Drop-weight to SDOF
The transformation of the drop-weight into an equivalent SDOF system is performed in a similar manner
as the transformation of the beam, by using transformation factors. The transformation of the drop-weight
is described in Lovén and Svavarsdóttir (2016) and this section is written based on that knowledge.
The main assumption for the converting of the drop-weight is that it only get an axial deformation at the
impact. This means that the it can be represented as a bar and the transformation factors is determined
from this assumption. The transformation of the drop-weight, represented as a bar, into an equivalent
SDOF system can be seen in Figure 5.5. The system point 푢푠 for the bar is chosen as the point where
the largest deformation occurs and this is at the surface where the impact occurs, i.e at the base of the
drop-weight.
q(x,t)
us
A,E,L
us
F(t)
k
m
Figure 5.5 Transformation of the drop-weight, represented as a bar, into an equivalent SDOF system,
inspired by (Lovén and Svavarsdóttir, 2016).
The transformation factors for the bar depends on if the bar or the surface for impact is seen as a rigid
body. For an impact against a very rigid, i.e very stiff, body the base of the falling bar is considered as
fixed. The assumption that the bar behaves as a rigid body gives another setup of transformation factors,
which can be seen in Table 5.2. As in many other cases, the system with a falling drop-weight in this
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 51	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 51	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 51

-- 69 of 237 --

project is somewhere in between a very stiff bar and a very stiff surface. Since the drop-weight is in solid
steel with a much higher axial stiffness than the bending stiffness of the beam, the assumption used here
is that this system behaves as a rigid bar and the transformation factors are chosen thereafter. Table 5.2
shows the two extreme cases and from this the transformation factors for the rigid bar is chosen as
휅푚 = 휅푘 = 휅퐹 = 1.00 (5.11)
Table 5.2 Transformation factors for the drop-weight considered as a bar (Lovén and
Svavarsdóttir, 2016).
Type of impact 휅푚 휅퐹 휅푘 휅푚퐹
u(x)
E,A,L
x
Rigid surface:
0.333 0.50 0.50 0.67
u(x)
E,A,L
x
Rigid bar:
Rigid surface:
1.00 1.00 1.00 1.00
5.5 2DOF Systems
5.5.1 General Description
To describe the behavior of a collision between two bodies, in this case a drop-weight and a RC beam, in a
simplified way it is convenient two use a 2DOF-system. The 2DOF-model consists of two SDOF-systems
that is linked in order to describe the total response during the impact. The system used is illustrated in
Figure 5.6.
F(t)
k1
m2
m1
k2
u1
u2
m1 m2
F(t)
Fk,1
Fk,1
Fk,1
a1 a2
Figure 5.6 Illustration of the 2DOF-system used in order two describe the collision between two bodies.
The drop-weight is represented by 푚1 and the RC beam by 푚2.
52 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	52 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	52 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 70 of 237 --

By using Newton’s Second Law the force equilibrium of the two free bodies, 푚1 and 푚2, yields:
퐹1(푡) − 퐹푘,1 = 푚1̈푢 1 (5.12)
퐹2(푡) − 퐹푘,2 = 푚2̈푢 2 (5.13)
This can, by using constitutive relations be expressed as:
푚1̈푢 1 + 푘1(푢1 − 푢2) = 퐹1(푡) (5.14)
푚2̈푢 2 − 푘1푢1 + (푘1 + 푘2)푢2 = 퐹2(푡) (5.15)
where 푘푖 corresponds to the spring stiffness,̈푢 푖 to acceleration and 푢푖 to displacement for the two bodies,
respectively. The previous two equations can then be expressed in a matrix format as
4푚1 0
0 푚2
5 4̈
푢 1̈
푢 2
5
+
4 푘1 −푘1
−푘1 푘1 + 푘2
5 4푢1
푢2
5
=
4퐹1(푡)
퐹2(푡)
5
(5.16)
By introducing the transformation factors the expression is
4휅푚,1푚1 0
0 휅푚,2푚2
5 4̈
푢 1̈
푢 2
5
+
4 휅퐹 ,1푘1 −휅퐹 ,1푘1
−휅퐹 ,1푘1 휅퐹 ,1푘1 + 휅퐹 ,2푘2
5 4푢1
푢2
5
=
4휅퐹 ,1퐹1(푡)
휅퐹 ,2퐹2(푡)
5
(5.17)
and by using the following relations:
훼푚 = 휅푚,1
휅푚,2
(5.18)
훼퐹 = 휅퐹 ,1
휅퐹 ,2
(5.19)
휅푚퐹 ,2 = 휅푚,2
휅퐹 ,2
(5.20)
it can be expressed as
휅푚퐹 ,2
4훼푚푚1 0
0 푚2
5 4̈
푢 1̈
푢 2
5
+
4 훼퐹 푘1 −훼퐹 푘1
−훼퐹 푘1 훼퐹 푘1 + 푘2
5 4푢1
푢2
5
=
4훼퐹 퐹1(푡)
퐹2(푡)
5
(5.21)
which can be presented as
M̈ u + Ku = F(푡) (5.22)
Note that the viscous damping 푐 introduced in Section 4.5 is neglected in the expression for the equation
of motion in this case, this is further discussed in Section 5.2. The solution of Equation (5.21) can be
found both analytically and numerically. Due to the complexity of such system it is preferable, though,
to use a numerically solution method, by example the central difference method used in this project and
described in Section 5.6. This is especially true for a nonlinear case when 푘 varies with 푢.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 53	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 53	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 53

-- 71 of 237 --

5.5.2 2DOF for a Drop-weight and RC Beam System
To describe the impact collision between the drop-weight and the RC beam the transformation factors
introduced in Section 5.3 and 5.4 are applied to Equations (5.18), (5.19) and (5.20). No external forces
퐹푖(푡) is considered to act on the two bodies. The dynamic impact load is instead given as a prescribed
initial velocity of body 1, the drop-weight, from which a movement of body 1 푢1 is determined. The fact
that the load transformation factor 휅퐹 = 1.00 for both bodies, see Tables 5.1 and 5.2, gives that
훼퐹 = 1.00. This means that Equation (5.21) now, for the specific case, becomes
휅푚퐹 ,2
4훼푚푚1 0
0 푚2
5 4̈
푢 1̈
푢 2
5
+
4 푘1 −푘1
−푘1 푘1 + 푘2
5 4푢1
푢2
5
=
40
0
5
(5.23)
if the response is assumed to be elastic, and
휅푚퐹 ,2
4훼푚푚1 0
0 푚2
5 4̈
푢 1̈
푢 2
5
+
4 푅1 −푅1
−푅1 푅1 + 푅2
5 4푢1
푢2
5
=
40
0
5
(5.24)
if the response is elastoplastic, with the relation between 푅 and 푢 described in Equation (2.3). However,
there is a need of modifying these equations for the 2DOF-system in this case. If the collision is elastic,
there will be a time when the drop-weight is moving away from the beam. The spring between the masses,
denoted 푅1(푢1) in Figure 5.6, is in this case in tension. But in reality, there is nothing that connects the
two bodies which means that the stiffness when the drop-weight is moving away from the beam must be
equal to zero. To be able to capture this behaviour the Equation (2.3) is extended to
푅푖 =
⎧
⎪
⎨
⎪
⎩
푘푖 ⋅ 푢 if 푢 ≤ 푢푒푙,1
푅푚, 푖 if 푢 > 푢푒푙,1
0 if 푢 ≤ 0
(5.25)
The maximum internal resistances for the drop-weight and the beam is derived in different ways. For the
beam, it can be it can be determined from the maximum moment at the ultimate limit state for a point
load at the midspan, that is
푅푚,2 = 4푀푢
퐿 (5.26)
The beam is also subjected to a static load, its own self-weight 푔푏푒푎푚, which gives a lower resistance than
stated in Equation (5.26). This is illustrated in Figure 5.7 and the internal resistance for the beam now
becomes
푅푚,2,푚표푑 = 푅푚,2 − 푅푠푡푎푡 = 4푀푢
퐿 − 푔푏푒푎푚퐿
2 (5.27)
The stiffness parameter of the beam, 푘2 in Figure 5.7, is calculated as
푘2 = 48퐸푐푚퐼퐼퐼
퐿3 (5.28)
where 퐼퐼퐼 is the moment of inertia in state II.
54 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	54 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	54 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 72 of 237 --

u
R2
k2
Rm,2
R’2
Rm,2,mod
Rstat
Figure 5.7 Illustration of the internal resistance of the beam when the static load, as the self-weight of
the beam, is taken into account. Modified from (Lozano and Makdesi, 2017).
The internal resistance of the drop-weight 푅푚,1 is instead determined from the strength of the material 푓
and the impact area 퐴푖푚푝 as
푅푚,1 = 푓 ⋅ 퐴푖푚푝 (5.29)
where the value of 푓 depends on not only the strength of the drop-weight but also on the local behaviour
of the concrete where the impact occurs. This means that the two extremes for 푓 is the compressive
strength of concrete 푓푐푚 and yielding of the reinforcement steel 푓푦푚. This gives that the condition for
푅푚,1 is
푓푐푚퐴푖푚푝 ≤ 푅푚,1 ≤ 푓푦푚퐴푖푚푝 (5.30)
According to a study made by Lovén and Svavarsdóttir (2016) a reasonable value of the internal resistance
of the drop-weight is 푅푚,1 = 50 kN. This value was generated by comparing different values in the
2DOF-model with the results from the FEA.
The stiffness of the drop-weight 푘1 can be determined according to
푘1 = 퐸푠푚퐴
퐿 (5.31)
where 퐴 and 퐿 is the area and length of the body, respectively.
5.6 Central Difference Method
The central difference method (CDM) is an explicit method used to solve the equation of motion
(Carlsson and Kristensson, 2012). As described in Section 5.2 the viscous constant 푐 is neglected and
the solution method is derived with the same assumption. In Carlsson and Kristensson (2012) the CDM
derivation is performed with 푐 included, but here it is excluded.
The central difference scheme used in the method can be seen in Figure 5.8. The velocity at the observed
time 푖 is expressed as
̇
u푖 = u푖+1 − u푖−1
2Δ푡 (5.32)
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 55	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 55	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 55

-- 73 of 237 --

which can be used to get the acceleration as
̈
u푖 =
u푖+1 − u푖
Δ푡 − u푖 − u푖−1
Δ푡
Δ푡 = u푖+1 − 2u푖 + u푖−1
(Δ푡)2 (5.33)
t
u
Δu Δu
ti-1 ti ti+1
ti-1
ti
ti+1
Figure 5.8 The central difference scheme used in the CDM, modiffied from (Carlsson and Kristensson,
2012).
Implementing Equations (5.32) and (5.33) in the equation of motion, Equation (5.22), gives
Mu푖+1 − 2u푖 + u푖−1
(Δ푡)2 + Ku푖 = F푖(푡) (5.34)
where u푖 and u푖−1 are the known factor that are used to solve u푖+1. This expression can be solved by
introducing the initial conditions:
u(0) = u0 (5.35)
̈
u(0) =̈ u0 (5.36)
̈
F(0) =̈ F0 (5.37)
for an initial value of i = 0. For a lumped mass-spring system the matrix M is diagonal which means
that the solution, for solving u푖+1, can be expressed as
u푖+1 = (Δ푡)2M−1
0
F푖(푡) −
0
K − 2
(Δ푡)2 M
1
u푖 − 1
(Δ푡)2 Mu푖−1
1
(5.38)
which means that the solution is found by using information from previous time steps, 푖 and 푖 − 1, and is
therefore an explicit solution method. To get u푖−1 in the first time step, where 푖 = 0, a specific starting
step u−1 expressed as
u−1 = u0 − Δ푡̇u0 + Δ푡2
푡̈ u0 (5.39)
56 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	56 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	56 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 74 of 237 --

There is a risk that the solution gained with the CDM is unstable if the time step is not chosen short enough.
Instability means that the errors in the initial conditions continues to grow for each iteration.
In Lozano and Makdesi (2017) the critical time step Δ푡푐푟푖푡 for which the actual time step Δ푡 need to be
less than is
Δ푡푐푟푖푡 = 2
휔푚푎푥
= 푇푛
휋 (5.40)
where 휔푚푎푥 is the highest eigenfrequency determined from det(K-휔2M) = 0. In Lozano and
Makdesi (2017) it is further described that selecting a time step smaller than Δ푡푐푟푖푡 gives a stable algorithm
but when a higher accuracy is wanted the time step should be even smaller than the critical value. A
suggested time step is one percent of the load duration 푡푙, that is
Δ푡 ≤
⎧
⎪
⎨
⎪
⎩
Δ푡푐푟푖푡
푡푙
100
(5.41)
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 57	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 57	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 57

-- 75 of 237 --

6 Experimental Procedure
6.1 General Description
A total of 18 beams were casted and tested under different load conditions. The casting was made in two
batches and the beams were named after in which batch they were casted. The beams from batch 1 were
named 1-9 while the beams from batch 2 were named from 10-18. The beams was then divided into
different test series, where each serie was subjected to a certain load condition and test procedure. The
name of the series and the associated loading conditions are summarized in Table 6.1. The specimens of
Series-1 to Series-4 were initially tested dynamically by releasing a drop-weight of different weight at
two different heights. For Series-1, Series-2 and Series-3 the impact was repeated and the number of
drops is presented in Table 6.1. Afterwards, the residual capacity was determined by a static four-point
loading test. Three beams from each batch were only tested statically by means of four-point bending
test and these are henceforth referred to as the undamaged beams. A number of 30 concrete cubes were
casted to determine the material properties according to standards and recommendations. The strength
of the steel reinforcement was determined from seven test specimens.
Both the dynamic and static tests of the beams were painted white with a black pattern on one side, in
order to increase the contrast. During the testing this side was exposed to a camera that was positioned
in front of the beam. The cameras frame-rate was 5 000 fps during the impact loading tests whilst it
was decreased to 0.33 fps during the static tests. The recorded images was later processed in the DIC
software GOM Correlate 2017.
Table 6.1 Classification of beams and testing conditions.
Beam Test series Batch Drop-weight [kg] Height [m] Nr. of drops
1-3 Series-2 1 10 5 2
4-6 Series-1 1 10 2.5 4
7-9 Undamaged 1 Only static loading
10-12 Series-4 2 20 5 1
13-15 Series-3 2 20 2.5 2
16-18 Undamaged 2 Only static loading
6.2 Manufacturing of Concrete Beams
6.2.1 Introduction
This section covers the methodology used when manufacturing the test specimens as well as describing
the different tests made on the fresh concrete. All of the work were carried out at the laboratory of
structural Engineering at Chalmers University of Technology with supervision by Research Engineer
Sebastian Almfeldt and Senior Lecturer Joosef Leppänen.
58 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	58 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	58 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 76 of 237 --

6.2.2 Geometry of the Specimens
The geometry of the casted beams can be seen in Figure 6.1. The total length of the beam was 1 180
mm with a cross-section of dimensions 100 x 100 mm. Four reinforcement bars were symmetrically
placed in each corner. The aim was to keep the distance from the center of the reinforcement bars to the
concrete surface at 20 mm. The location of the reinforcement bars after concrete hardening is discussed
further in Section 8.2.4.
100
100
4ϕ6
20
1 180
100
[mm]
Figure 6.1 Geometry of the concrete beams.
6.2.3 Manufacturing of Moulds
The same beam moulds that were used by Lozano and Makdesi (2017), Ekström (2017) as well as Lovén
and Svavarsdóttir (2016) were also used in this project. The moulds were cleaned from old dirt and
greased with a non-reactive release material to make sure that the concrete would come off the mould
smoothly after hardening.
Pre-drilled holes at the end of the moulds, from previous years, were used to put the reinforcement bars in
place, with a distance of 20 mm from the bottom of the mould to the centre of the bottom reinforcement.
The reinforcement should have a diameter of 6 mm but it was observed that this was not always the case.
The bar cross-section was not entirely circular and the diameter varied between 5 - 6 mm, which is a big
difference in percentage. Observations made by Lozano and Makdesi (2017) that the reinforcement are
bent downwards due to its own weight and due to the impact of the concrete when the moulds are filled,
were taken into account. A small plastic cube with a height of 19 mm were placed under the bottom
reinforcement, in the middle of the mould, and the bottom reinforcement were hung up approximately
at 1/3 of the beam’s length from each side, as shown in Figure 6.2. After the reinforcement were hung
up, the plastic cube were removed. This should result in a distance of approximately 22 mm from the
bottom to the centre of the reinforcement, while the goal is 20 mm. The reason for this choice was that
it was deemed probable that the bars would still deform a few millimeters since the steel wire was not
completely straight and also due to the weight of the concrete when casting. Regardless of whether
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 59	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 59	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 59

-- 77 of 237 --

the bars deformed or not, it was assumed that they would be on approximately the same height in all
specimens, which is an improvement from the experiments in 2017 when a large dispersion was observed.
From Figure 6.2 it can also be observed how the transverse hangers for the steel wire is placed on nails.
This is done to prevent them from getting stuck in the concrete when casting.
Figure 6.2 Picture showing how the bottom reinforcement were hung up.
The moulds for the different test to determine material properties was also cleaned and greased. Two
different moulds were used for the test cubes, one with smooth edges and one with a notch on one side.
This is further explained in Section 8.2.2.
6.2.4 Casting
The concrete mixture were developed by Ingemar Löfgren at Thomas Concrete Group. The strength of
the concrete was aiming at C28/35 and a water-cement ratio of 0.60. The mixture is presented in
Table 6.2. The air content of the concrete was assumed to be 1.5 % and the target slump height was 200
(± 20) mm. The actual air content and slump height of the concrete mixed in this project is presented in
Section 6.2.5. In total, 18 RC-beams, 24 cubes for compressive and tensile splitting strength tests and 6
cubes for wedge splitting tests (WST), which is used to determine the fracture energy 퐺퐹 , were casted.
The concrete was mixed in two batches and therefore half of the beams and cubes corresponds to each
batch, see Table 6.3.
Table 6.2 Concrete mix per batch. The amount of concrete for each batch was 175 litres.
Name Supplier Moisture [%] Weight [kg]
Sand 0/8 Sköllunga Ucklums grus 5.29 165.8
Stone 5/8 Vikan Skanska 0.67 16.9
Stone 8/16 Vikan Skanska 2.10 143.4
Glenium 51/18 BASF - 0.98 (batch 1), 0.90 (batch 2)
Byggcement CEM II Cementa - 57.8
Water - - 23.8
60 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	60 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	60 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 78 of 237 --

Table 6.3 Distribution of specimens for the two batches.
Batch Beam nr Compressive test, 푓푐 Tensile splitting test, 푓푐푡 WST, 퐺퐹
1 1-9 6 6 3
2 10-18 6 6 3
In order to get better results from the testing it had been preferable to mix the concrete in one batch only
but in this case the size of the mixer was limiting. The mixture used in this project was a normal concrete
mixture, i.e different from 2017 when self-compacting concrete (SCC) was used (Lozano and
Makdesi, 2017). SCC, in contrast to normal concrete, has a higher viscosity and flows into the formwork
to enclose the reinforcement, without any need of vibration. Two types of vibration was used in this
project, one for each batch. For batch 1, a vibrator rod was used and for batch 2, a vibra-table was used,
see Figure 6.3. The reason for changing vibrating method was that the vibrator rod stopped working
after the casting of the first batch. Afterwards, it was concluded that the use of the vibra-table gave a
better finish of the surface, see Figure 6.4 for the difference.
(a) Vibrating rod (Batch 1). (b) Vibra-table (Batch 2).
Figure 6.3 Vibrating methods used.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 61	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 61	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 61

-- 79 of 237 --

(a) Batch 1 (b) Batch 2
Figure 6.4 Difference in finish of the two batches.
6.2.5 Tests Made on Fresh Concrete
In previous master thesis’s of this research project there was no testing of the fresh concrete (Lovén
and Svavarsdóttir, 2016), (Lozano and Makdesi, 2017). From the experiments made by Lozano and
Makdesi (2017) there is some results that indicates a difference in the concrete behaviour between the two
batches that was casted. Therefore, it was suggested that two tests of the fresh concrete should be made,
a slump-test and an air content test. These tests were performed according to the standards CEN (2009b)
and CEN (2009c). A third standard was used, CEN (2009a), and it describes how a representative sample
is taken from the concrete batch. In this section the results from the testing is presented and the two
standards for testing is briefly described. The slump test is used as a method to determine the consistence
of the concrete. The apparatus needed for the test is a mould with a base diameter of 200 (± 2) mm,
top diameter of 100 (± 2) mm and a height of 300 (± 2) mm. A compacting rod is also needed for the
compacting of the concrete. The mould is placed on a horizontal surface and then filled with concrete in
three layers, each approximately one-third of the height of the mould. Each layer is compacted with 25
strokes from the compacting rod. Once the mould is filled with concrete it is gently lifted upwards, with
no lateral or torsional motion being imparted to the concrete. Immediately after removing the mould the
slump height ℎ is measured as the distance between the top part of the mould and the highest point of
the slumped test specimen, presented in Figure 6.5. The entire operation, from the start of the filling
until measuring the slump, should not take more than 150 seconds. The slump height is rounded to the
nearest 10 mm. The arrangement used for the slump test can be seen in Figure 6.6.
62 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	62 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	62 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 80 of 237 --

Figure 6.5 Slump measurement according to CEN (2009b).
Figure 6.6 Arrangement for slump test.
The slump height ℎ for the two batches can be seen in Table 6.4. Both batches was inside the aim given
in the concrete recipe, which was 200 (± 20) mm. The first batch had a slightly higher viscosity and
this is believed to be due to the use of more superplasticiser. The slump tests were performed until the
concrete had the desired viscosity, leading to that 2 slump tests were performed on each batch. Since the
slump height for the first batch was high, the amount added in the second batch was smaller and that also
gave a lower slump height.
The air content was determined with the pressure gauge method and this method employs the principle
of Boyle-Marioette´s law. The approach is that a concrete sample is placed in a sealed container, with an
unknown volume of air in the concrete. Then a known volume of air at a known pressure is merged into
the concrete container. From the resulting pressure it is then possible to determine the air content of the
concrete. The air content from the two batches is presented in Table 6.4. The gauge pressure meter used
to determine the air content can be seen in Figure 6.7.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 63	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 63	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 63

-- 81 of 237 --

Figure 6.7 Gauge pressure meter used for determining of air content.
Table 6.4 Air content and slump height of the two batches.
Batch Air content, [%] Slump height, ℎ [mm]
1 2.5 220
2 2.0 180
6.3 Experimental Setup for Dynamic Testing
The dynamic testing took place 26 days after casting of the concrete beams. The beams were placed on
a testing rig with two supports that was bolted in the concrete slab. By this arrangement the supports
themselves did not move which made it easier to replace the beam after each impact. The beam was
simply supported and only prevented from displacing in the downward direction and the distance between
the supports was 1.0 m. The arrangement is shown schematically in Figure 6.8. Figure 6.9 shows how it
was arranged in the lab.
Captured area for DIC
l
1 000
v
90 90
500
100
Figure 6.8 Conditions and BC during dynamic testing. All dimensions are in mm.
64 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	64 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	64 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 82 of 237 --

(a) Placing of the beam. On top of the
beam is the two drop-weights.
(b) Photo showing the guiding tube.
Figure 6.9 Setup for dynamic testing. Note the black and white pattern painted on the drop-weights
and the beam.
The drop-weight was hoisted in a vertical guiding tube to the desired height and then released to hit the
beam in the center point, both in the length and width direction. For the beams with repeated impacts
the beam was repositioned at the supports after each impact. The drop-weight was a cylindrical steel rod
with a rounded tip. The dimensions of the drop-weight can be seen in Figure 6.10.
80 mm
r = 200 mm
h
Figure 6.10 Dimensions of the drop-weight with different ℎ depending if it’s 10 or 20 kg.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 65	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 65	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 65

-- 83 of 237 --

The beams, as well as the drop-weights, were painted white with a black pattern prior the testing. This
increased contrast gave the opportunity to better capture the beam response during the impact with a
high-speed camera. The specifications of the camera and the conditions for the camera setup is listed
below:
• Highspeed camera Photron SA4.
• Distance from front of beam to camera body: 2 225 mm.
• Tamron Zoom lens 28-75. Zoom adjusted at 75.
• Solution 1024 x 512 pixels.
• Spatial scale calibrated with 60 mm gauge block -> 60 mm = 98.1 pixel -> 1 pixel = 0.61162 mm.
• Frame rate 5 000 fps.
• Manual trigging with center trigger which captures 1 s before and 1 s after impact.
• Approximately 100 ms (500 frames) was later saved for each test.
The image sequence from the high speed camera was later processed in GOM Correlate 2017.
6.4 Experimental Setup for Static Testing
6.4.1 Introduction
The static testing took place during day 27 - 29 after casting and was performed in order to determine
the capacity of the undamaged beams as well as the residual capacity of the beams subjected to impact
loading. The original intention of the static testing was to perform a three point bending test in the same
manner as was done in the experiments made by Lozano and Makdesi (2017). Due to the severe damage
in the midpoint of some beams, though, it was decided to do a four-point bending test instead to avoid
the risk of local crushing of concrete at the point load.
The beam was simply supported on two roller supports. Two point loads was applied 0.35 m from the
supports and the loading was deformation-controlled. The point loads was applied with rollers that was
attached to the same plate which in turn was jointed at the midpoint, where the force was applied using
a uniaxial compression/tension hydraulic jack. Hence, the point loads were of equal magnitude. The
conditions for the four-point bending test can be seen in Figure 6.11 and the test setup as well as the DIC
equipment used can be seen in Figure 6.12. The DIC equipment captured the behaviour of the beam and
the frames were afterwards processed in GOM Correlate 2017. The equipment was different from that
used in the dynamic testing and consisted in this case of two cameras which captures a 3D-view. The
system used was Aramis 3D 12M, distributed by GOM. The dimension of lenses was 24 mm and the
measured volume was approximately 1 350 x 1 000 mm. However, the 3D-view was never used during
the processing of the test results.
66 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	66 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	66 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 84 of 237 --

Captured area for DIC F
Rollers
100
300	90 90	350 350
Figure 6.11 Conditions for four-point static testing. All dimensions are in mm.
(a) Setup. (b) DIC equipment.
Figure 6.12 Lab conditions for four-point static testing.
6.4.2 Static Testing of Damaged Beams
The damaged beams were placed in the four-point bending rig and subjected to the deformation-controlled
load until failure occurred. The loading rate was 2 mm/min.
6.4.3 Static Testing of Undamaged Beams
The undamaged beams were subjected to a number of unloadings and reloadings. The reason was to
investigate the change of beam stiffness during the loading. The loading was deformation-controlled
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 67	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 67	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 67

-- 85 of 237 --

and the loading rate for both loading and unloading was 2 mm/min until a deformation of 40 mm was
reached, thereafter it was increased to 10 mm/min until failure. The displacements at unloading was 10,
20 and 40 mm. The beam was at these points unloaded with 4 mm and thereafter it was reloaded again
until the next unloading occurred. The loading history is shown schematically in Figure 6.13.
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
0 5 10 15 20 25 30 35 40
Deflection,
 u [mm]
Time, t [min]
Load history
Figure 6.13 Loading history for static testing of the undamaged beams.
68 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	68 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	68 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 86 of 237 --

7 Predictions
7.1 Introduction
This chapter presents a description on how the calculations were performed when predicting the response
of the beam, both under static and impact loading. The boundary- and loading conditions is described in
Chapter 6 and the geometry of the beam cross-section can be seen in Figure 7.1.
100 mm
100 mm
d´
4ϕ6
d
1 180
100
[mm]
Figure 7.1 Geometry of the concrete beams.
The real material properties of the steel and concrete as well as the measured position of the reinforcement
was used in the calculations to increase the correlation between the predicted values and the values
obtained in the experiments. These material properties is presented in Section 8.2, where it can be seen
that the tensile strength of the concrete is unusually high. Consequently, the tensile strength used from
this point was calculated according to the equations presented in Section 2.3.2.3, which are based on the
compressive strength that has more reasonable values from the testing. The load capacity in the ultimate
limit state is calculated as well as the load at yielding and cracking. Furthermore, the load-deflection
curve under static loading is also determined. All calculations regarding load capacity and load-deflection
curve can be found in Appendix K. The plastic rotation is also calculated according to the different
methods described in Section 3.4. The calculations was made with the software Mathcad Prime 4.0 and
is also presented in Appendix K. The load capacities is evaluated using two different steel stresses while
the proof stress is used when determining the plastic rotation capacity.
The response of the beam during the different impacts was predicted with a simplified 2DOF according
to the theory described in Chapter 5. The software MATLAB R2017b was used to make the script, which
was based on the script made by Lozano and Makdesi (2017). The MATLAB script can be found in
Appendix L.
The results from these theoretical predictions are then compared to the results from the experiments and
the FE model in subsequent chapters.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 69	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 69	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 69

-- 87 of 237 --

7.2 Load Capacity
7.2.1 Ultimate Limit State
The procedure when determining the load capacity is based on recommendations given in
(Engström, 2013). It is assumed that the ultimate concrete strain, 휀푐푢 = 3.5 ‰, is reached and that the
reinforcement is yielding. It is also assumed that the stress distribution in the compressive zone follows
the parabolic relation described in Section 2.3.2 and that the strain distribution is linear, presented in
Figure 7.2.
100
xu	d'
100
c
εcu
εs
fc
Fs
[mm]
d
ε's βR x Fc
Mu
F’s
αR fc
4ϕ6
Figure 7.2 Cross-section of the beam.
By assuming that the neutral axis is located below the top reinforcement and neglecting the influence of
reinforcement under compression, the equilibrium conditions can be expressed as
훼푅푓푐 푏 ⋅ 푥푢 = 푓푦퐴푠 (7.1)
푀푢 = 훼푅푓푐 푏 ⋅ 푥푢
 푑 − 훽푅푥푢
 (7.2)
where the value of 푥푢 from Equation (7.1) can be inserted in Equation (7.2) to obtain the moment capacity
of the beam. The values of the stress block factors 훼푅 and 훽푅 is obtained from Table B5.3 in
Engström (2013) and has the values
훼푅 = 0.81 (7.3)
훽푅 = 0.42 (7.4)
The assumption that the steel is yielding has to be checked with the following equation
휀푠 = 푑 − 푥푢
푥푢
휀푐푢 > 휀푠푦 = 푓푦
퐸푠
(7.5)
It was found that the height of the compressive zone was less than 푑®, which means that the top rein-
forcement was subjected to low tensile stress. This means that the top reinforcement should be added to
Equations (7.1) and (7.2) and be subjected to a low tensile stress between zero and 푓푦. This was also
70 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	70 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	70 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 88 of 237 --

observed by Lozano and Makdesi (2017) where the top reinforcement proved to add an additional 4.6 %
to the capacity. Since the conditions in this thesis is very similar to the ones used in Lozano and
Makdesi (2017), this addition to the capacity will be made to count for the top reinforcement.
Two different values of the reinforcements yield stress was used to create a lower and an upper value
of the predicted capacity. Both the proof stress 푓0.2 and the ultimate stress 푓푢, see Section 8.2.3, was
therefore set as the yield stress in the calculations. Table 7.1 shows a summary of the calculated ultimate
moments as well as the ultimate load which can be applied when considering 4-point loading. The
relation between the moment and the load can be expressed by the following equation but it should be
noted that this expression gives the value of one point load only.
퐹푢 = 푀푢
0.35퐿 (7.6)
Table 7.1 Maximum moment and force in the ultimate limit state for different yield stresses.
푓푦푑
[MPa] Layers of reinforcement 푀푢
[kNm]
퐹푢
[kN]
513 Top and bottom
Bottom only
2.2
2.1
12.7
12.1
623 Top and bottom
Bottom only
2.7
2.6
15.2
14.6
7.2.2 Cracking and Yielding
The moment acting on the section when cracking occurs can be calculated based on the moment of
inertia and the flexural tensile strength of the concrete as
푀푐푟 = 푓푐푡.푓 푙퐼퐼
ℎ∕2 (7.7)
The moment acting on the section when yielding occurs is calculated in a similar manner to the ultimate
moment and is also described in (Engström, 2013). The strain in the steel 휀푠푦 is known but not the strain
in the concrete, which is less than 휀푐푢 in this case. An initial concrete strain 휀푐푐 is assumed and based on
that, the height of the compressive zone can be calculated with the following equation, not including
effects of top reinforcement.
푥푦 = 휀푐푐
휀푐푐 − 휀푠푦
푑 (7.8)
The assumed strain is also used to determine the stress block factors, which in this case will have to be
interpolated between two values in Table B5.3 in Engström (2013). When the stress block factors and
the height of the compressive zone is determined there should be equilibrium in the section, which is
checked by the following equation:
훼푅푓푐 푏 ⋅ 푥푦 − 푓푦퐴푠 ≈ 0 (7.9)
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 71	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 71	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 71

-- 89 of 237 --

푀푦 = 훼푅푓푐 푏 ⋅ 푥푦
 푑 − 훽푅푥푦
 (7.10)
This is an iterative process which becomes a bit time consuming to perform since both the height of the
compressive zone and the stress block factors depends on the initial guess of the concrete strain. The
height of the compressive zone is located approximately at the same level as the top reinforcement which
means that it can be neglected in this case. Table 7.2 shows a summary of the moment and force of the
different cases.
Table 7.2 Moment and external force at the onset of cracking and yielding.
푓푦푑
[MPa] State 푀푐푟 or 푀푦
[kNm]
퐹푐푟 or 퐹푦
[kN]
513 Onset of cracking
Onset of yielding
0.7
2.0
4.2
11.7
623 Onset of cracking
Onset of yielding
0.7
2.4
4.2
13.9
7.2.3 Theoretical Load-deflection Curve
The different stiffness’s should be calculated in order to create a load-deflection curve for the beam. The
stiffness in state I and the stiffness between cracking and ultimate state is needed to create a tri-linear
response while the stiffness in state II is of interest when creating a bi-linear response. First of all the
moment of inertias needs to be calculated as
퐼퐼 = 푏 ⋅ ℎ3
12 +  훼푠 − 1퐴푠

푑 −
ℎ
2
2
+  훼푠 − 1퐴®
푠
ℎ
2

− 푑®
2
(7.11)
퐼퐼퐼 = 푏 ⋅ 푥3
퐼퐼
3 +  훼푠 − 1퐴®
푠
 푥퐼퐼 − 푑®2 + 훼푠퐴푠
 푑 − 푥퐼퐼
2 (7.12)
where
훼푠 = 퐸푠푚
퐸푐푚
(7.13)
and the position of the neutral axis calculated from an area balance. The stiffness in state I and II can be
calculated from elementary cases as
푘 = 48퐸푐푚퐼
푎 ⋅ 퐿2

3 − 4푎2
퐿2
 (7.14)
where 푎 = 0.35 m is the distance to the point load from the support. It should be noted that this expression
only is valid when two point loads are applied at the same distance from each support and when the beam
has constant modulus of elasticity and moment of inertia. When this stiffness is known it is possible to
determine the deflection at cracking and at ultimate load. The stiffness between cracking and ultimate
state can now be determined as the difference in load divided by the difference in deflection between
72 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	72 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	72 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 90 of 237 --

cracking and ultimate state. Figure 7.3 shows the load-deflection relation for both a tri-linear and a
bi-linear response. The beam is assumed to behave plastically after the ultimate load is reached. In this
case the top reinforcement is also taken into account. The state II stiffness 푘퐼퐼 was calculated to 2.46
kN/mm.
0
2
4
6
8
10
12
14
16
18
0 	5 	10 	15 	20 	25 	30
Force,
 F [kN]
Deflection, u [mm]
fy=623 MPa
fy=513 MPa
Assuming state II
State II
State I
Onset of cracking
Figure 7.3 Theoretical load-deflection curve for different values of yield stress when the top layer of
reinforcement is taken into account.
7.3 Rotational Capacity
7.3.1 Introduction
Most of the methods described in Chapter 3 are based on cross-sections with top reinforcement sub-
jected to compressive stress and bottom reinforcement subjected to tensile stress. Therefore, the top
reinforcement is neglected in the calculations made on rotational capacity. One of the most common
input parameter for the different methods are the distance from the point of maximum moment to the
zero moment region 푙0 which in this case is the same as the distance between the supports and a point
load, namely 0.35 m. Another common input parameter is the distance from the top edge to the bottom
reinforcement 푑 which is taken as the measured value 77 mm.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 73	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 73	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 73

-- 91 of 237 --

7.3.2 Eurocode 2
The position of the neutral axis in the ultimate limit state is 푥푢 = 9.7 mm. The ratio between the neutral
axis and the distance 푑 can be calculated as
푥푢
푑 = 0.126 (7.15)
when using the provided graph the rotational capacity can be determined as 휃푟푒푓 .퐸퐶 = 0.031 mrad. This
is however only valid for beams with a slenderness 휆 = 3. The slenderness of the actual beam can be
calculated as
휆 = 푙0
푑 = 4.53 (7.16)
which gives the correction factor
휅휆 =
u휆
3 = 1.23 (7.17)
The corrected plastic rotation capacity can then be determined as
휃푡표푡.퐸퐶 = 휅휆휃푟푒푓 .퐸퐶 = 38 mrad (7.18)
which needs to be divided by 2 since the angle referred to in EC2 is twice as large as the angle measured
from the test results. The final plastic rotation capacity according to EC2 is therefore
휃푝푙.퐸퐶 = 휃푡표푡.퐸퐶
2 = 19 mrad (7.19)
7.3.3 Betonghandboken (ABC-Method)
The three factors 퐴, 퐵 and 퐶 needs to be determined to be able to calculate the plastic rotation capacity.
Equation (3.20) is used to calculate 퐴 since measured values from the laboratory is used. The mechanical
ratio of the compression reinforcement 휔®
푠 is set to zero since the compression reinforcement is subjected
to tensile forces as well as the fact that no stirrups were used. The mechanical ratio of the shear
reinforcement 휔푣 is also set to zero since there is no shear reinforcement present. The mechanical ratio
of the tension reinforcement is calculated as
휔푠 = 퐴푠푓푦
푏 ⋅ 푑푓푐
= 0.102 (7.20)
and the factor 퐴 can therefore be determined as
퐴 = 1 − 5휔푠 = 0.49 (7.21)
The factor 퐵 was set to 1.0 meaning that it is steel with high ductility. The steel classifications in
Table 3.2 is outdated but it was assumed that steel type C corresponds to the old steel class Ks 60.
Since the plastic hinge is formed in the span the factor 퐶 is calculated with Equation (3.27) as
퐶 = 7
푙0
푑

= 31.7 (7.22)
74 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	74 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	74 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 92 of 237 --

When all factors are obtained the plastic rotation capacity is calculated as
휃푝푙.95.퐴퐵퐶 = 퐴 ⋅ 퐵 ⋅ 퐶 ⋅ 10−3 = 16 mrad (7.23)
It should be noted that the plastic rotation capacity obtained here corresponds to the value when 95 % of
the moment capacity is reached on the descending branch, as described in 3.
7.3.4 Tamminens D-factor
The factor 푘 is set to 0.3 due to that the concrete approximately corresponding to class K30, which
corresponds to C25/30 in the new standards. The factor 퐷 can be calculated as
퐷 = 푘
푑 = 3.9 (7.24)
which gives a rotation capacity
휃푝푙.95.푇 푎푚푚푖푛푒푛 = 퐴 ⋅ 퐵 ⋅ 퐶 ⋅ 퐷 ⋅ 10−3 = 60 mrad (7.25)
7.3.5 Bk25
Bk25 consists of two different methods, one where the plastic hinge is formed in the field and one where
the plastic hing is formed over a support. It was assumed that the plastic hinge is formed in the field,
since this seems most reasonable. The plastic hinge length is calculated as
푙푝푙 = 0.5푑 + 0.15퐿 = 0.19 m (7.26)
The dominant failure mode needs to be specified by calculating 휔푠 and 휔푐푟푖푡 as
휔푠 = 퐴푠푓푦
푏 ⋅ 푑푓푐
= 0.102 (7.27)
휔푐푟푖푡 = 0.8휀푐푢
휀푐푢 + 휀푠푢
= 0.026 (7.28)
Since 휔푠 is larger than 휔푐푟푖푡, the dominant failure mode is crushing of concrete. The plastic rotation
capacity can now be calculated as
휃푝푙.퐵푘25.푓 = 0.4휀푐푢
휔푠

1 + 0.3퐿
푑

= 67 mrad (7.29)
It should be noted that this capacity is significantly larger than the values obtained fron Eurocode and
Betonghandboken. This may be due to that Bk25 is based on a concrete beam which is subjected to
a uniformly distributed load. However, four point loading is somewhere between three point loading
and uniformly distributed load and the result is therefore interesting to compare with the actual values
obtained in the experiments.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 75	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 75	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 75

-- 93 of 237 --

7.3.6 Methods based on Equivalent Plastic Hinge Length
Equation (3.50) is used to calculate the rotation capacities for the methods which is based on equivalent
plastic hinge length. Therefore, the first step is to calculate the plastic curvature. The curvature at failure
휑푢 can be calculated as
휑푢 = 휀푠.1
푑 − 푥푢
= 0.36 1/m (7.30)
where 휀푠.1 is the steel strain at failure when 휀푐푢 = 3.5 ‰ and 푓푦푚 = 513 MPa. The curvature at yielding
can be calculated as
휑푦 = 휀푠푦
푑 − 푥푦
= 0.046 1/m (7.31)
The plastic curvature can then be determined as
휑푝푙 = 휑푢 − 휑푦 = 0.314 1/m (7.32)
The equivalent plastic hinge length 푙푝푙 is then determined in each method and the plastic rotation capacity
can be calculated with Equation (3.50). A summary of the results can be seen in Table 7.3.
Table 7.3 Summary of plastic rotation capacities based on equivalent plastic hinge length.
Method 푙푝푙 [mm] 휃푝푙 [mrad]
Baker and Amarkone 66 21
ACI-ASCE Committee 428, lower 36 11
ACI-ASCE Committee 428, upper 88 28
Paulay and Priestley 96 30
Panagiotakos and Fardis, cyclic 42 13
Panagiotakos and Fardis, monotonic 63 20
7.4 Predictions with 2DOF
7.4.1 Overview
As mentioned the 2DOF script in this project was based on the script made by Lozano and
Makdesi (2017), with some adjustment to describe the different loading conditions and the beam stiffness
obtained in this project. In the following description of the 2DOF model setup the subscripts 1 and 2
refers to the drop-weight and the beam, respectively. The script can be seen in Appendix L.
The model uses a bi-linear elasto-plastic relationship, described in Section 2.2.4, for the response of both
the drop-weight and the beam. The internal resistance of the beam was calculated with both the average
yield stress, 푓푦 = 513 MPa, and a theoretical upper value assuming that the onset of yielding was equal
to the ultimate steel stress, i.e 푓푦 = 푓푢 = 623 MPa. The load capacities presented later in this section is
for three-point loading, and is hence not to be mixed up with the load capacities presented in Section 7.2,
which is the capacities for four-point loading.
76 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	76 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	76 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 94 of 237 --

The impact load is introduced as a weight and velocity of body 1. The velocity depends on the drop
height as
푣0 = √2푔 ⋅ ℎ (7.33)
which for the heights of 2.5 m and 5.0 m gives 푣0 = 7.0 m/s and 푣0 = 9.9 m/s respectively.
7.4.2 Internal Resistance
The internal resistance for the drop-weight was chosen as
푅푚,1 = 50 kN (7.34)
according to the study made by Lovén and Svavarsdóttir (2016), see Section 5.5.2. This value yields an
impact that is close to plastic impact for the load cases studied here.
The maximum internal resistance of the beam is determined by equations (5.26) and (5.27). The
calculation of the load capacity 푅푚,2 is presented in Appendix K and the modified internal resistance
푅푚,2,푚표푑 , where the self-weight is taken into account, is calculated in the script, Appendix L. The internal
resistances used in the script is presented Table 7.4.
7.4.3 Stiffness
The stiffness of body 1 was determined according to
푘1 = 퐸푠푚퐴1
퐿1
(7.35)
where 퐴1 and 퐿1 is the area and length of the drop-weight cylinder. The stiffness 푘1 is different for the
two drop-weights due to the difference in length.
The beam stiffness was determined according to
푘2 = 48퐸푐푚퐼퐼퐼
퐿3
2
(7.36)
where 퐼퐼퐼 is the moment of inertia in state II, calculated according to Equation (7.12) and presented in
Appendix K. Note that Equation (7.36) is the stiffness for three-point loading and should not be mixed
with Equation (7.14), which is the stiffness for four-point loading. The calculated stiffness’s is presented
in Table 7.4.
7.4.4 Transformation Factors
The response of the drop-weight is considered as plastic and the transformation factors for a stiff bar is
used, see Section 5.4. The factors are presented in Table 7.4.
The combined transformation factor for the beam, 휅푚퐹 ,1, should be defined somewhere between the
elastic and plastic values presented in Table 5.1. This is since the elasto-plastic material response is used
for the calculations of stiffness and internal resistance of the beam. However, the transformation factors
for the beam within this project is chosen considering a fully plastic response which is in line with the
factors used by Lozano and Makdesi (2017).The transformation factors are presented in Table 7.4.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 77	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 77	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 77

-- 95 of 237 --

Table 7.4 Summary of values used in 2DOF model.
Body 푓푦푑 푅푚,푖 푅푚,푖,푚표푑 푘푖 휅푚퐹 ,푖
[MPa] [kN] [kN] [MN/m] [-]
Drop-weight 10 kg, 1 - 50.0 - 3 900 1.000
Drop-weight 20 kg, 1 - 50.0 - 2 000 1.000
Beam, 2 513
623
8.5
10.2
8.4
10.1
1.8
1.8
0.333
0.333
7.4.5 Results from 2DOF Predictions
7.4.5.1 Deflections
Due to the difficulties with determining the yield stress the predictions was done with both the predicted
yield stress 푓푦 and the ultimate stress 푓푢 of the steel. Predictions were performed for all four different
loading conditions and this, together with the different choices of steel strength gave a total of 8 predictions.
A summary of the results from the 2DOF predictions of the first impact is shown in Table 7.5. Graphs
showing the response can be seen in Figure 7.4. The maximum deflection 푢푚푎푥 is defined as
푢푚푎푥 = 푢푒푙 + 푢푝푙 (7.37)
Table 7.5 Summary of the results from 2DOF after first impact.
Drop height, Weight, Impact vel, Resistance, Elastic def, Max def, Plastic def,
ℎ [m] 푚 [kg] 푣 [m/s] 푅푚,2,푚표푑 [kN] 푢푒푙[mm] 푢푚푎푥 [mm] 푢푝푙 [mm]
2.5 10 7.0 8.4 4.3 18.4 14.1
2.5 10 7.0 10.1 5.1 16.1 11.0
5.0 10 9.9 8.4 4.3 34.6 30.3
5.0 10 9.9 10.1 5.1 29.5 24.4
2.5 20 7.0 8.4 4.3 43.9 39.7
2.5 20 7.0 10.1 5.1 37.3 32.2
5.0 20 9.9 8.4 4.3 85.4 81.1
5.0 20 9.9 10.1 5.1 71.8 66.7
78 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	78 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	78 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 96 of 237 --

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
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
5.0 m; f.y=513 MPa
5.0 m; f.y=623 MPa
2.5 m; f.y=513 MPa
2.5 m; f.y=623 MPa
(a) 10 kg drop-weight.
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
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
 (b) 20 kg drop-weight.
Figure 7.4 2DOF response of the beam midpoint during different impact conditions.
The total plastic deformation during the repeated impact was predicted by assuming that the plastic
deformation would be the same for every impact. The total plastic deformation is presented in Table 7.6.
The most critical load case from the predictions is thus when the beam is hit one time with 20 kg from 5
metres.
Table 7.6 Summary of the results from 2DOF after several impacts.
Drop height, Weight, Resistance, Plastic def, No. of impacts, Total def,
ℎ [m] 푚 [kg] 푅푚,2,푚표푑 [kN] 푢푝푙 [mm] 푛 푢푝푙,푡표푡 [mm]
2.5 10 8.4 14.1 4 56.4
2.5 10 10.1 11.0 4 44.0
5.0 10 8.4 30.3 2 60.6
5.0 10 10.1 24.4 2 48.8
2.5 20 8.4 39.7 2 79.4
2.5 20 10.1 32.2 2 64.4
5.0 20 8.4 81.1 1 81.1
5.0 20 10.1 66.7 1 66.7
7.4.5.2 Impulse
Another parameter of interest is the impulses. These were also studied using the 2DOF model. The main
part of interest was the relation between the impulses, for later comparison with the experimental results.
During these predictions the resistance 푅푚,1 was, to ensure a perfectly elastic impact, changed to
10 000 kN. With 푅푚, 푢푒푙 and 푢푝푙 from the 2DOF script the internal work 푊푖 was calculated according
to Equation (4.17). From this the characteristic impulse 퐼푘 was calculated using Equation (4.12). The
results from the predicted impulses is presented in Table 7.7.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 79	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 79	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 79

-- 97 of 237 --

Table 7.7 Summary of the results from 2DOF predictions of characteristic impulse.
Drop height, Weight, Impulse Relation,
ℎ [m] 푚 [kg] 퐼푘 [Ns] 퐼푘,2.5∕퐼푘,5.0 [-]
2.5 10 63.1 -
5.0 10 89.1 0.71
2.5 20 89.1 -
5.0 20 126.1 0.71
80 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	80 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	80 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 98 of 237 --

8 Experimental Results
8.1 Introduction
The results from the experiments is presented within this chapter, together with some comments about
deviations in the results.
Firstly, the results from the material testing is treated. Parameters such as modulus of elasticity, compres-
sive strength and tensile strength is presented. The focus is to present the average values, but results
from all specimens is presented in appendices.
Secondly, the results gathered from the high-speed camera footages recorded during the impact load
tests is presented. The results of interest, among others, is the deflection over time, deformed shape of
the beam over time, impact forces and the strain fields.
Lastly, the information gathered during the static testing is presented. Load-deflection graphs is presented
as well as the values of maximum force, stiffness during cyclic loading, internal work and rotation
capacities.
8.2 Material Properties
8.2.1 Introduction
The average values of the material properties that was obtained during the experiments are presented
within this section. The individual value of each specimen, as well as a description of the test procedure
and photos of the test apparatus used, is presented in Appendix A for concrete tests and Appendix B for
steel tests.
8.2.2 Concrete Properties
As described in Section 6.2.4 a total of 30 cubes were casted to measure the properties of the concrete.
The concrete was evaluated by measuring the density, compressive strength, tensile strength and fracture
energy and were performed at two different occasions, namely 26 and 28 days after casting. The
compressive strength and tensile strength was determined according to the standards (CEN, 2009e) and
(CEN, 2009f), respectively. The density was determined according to CEN (2009g). To be able to predict
the fracture energy of the concrete a WST was performed according to the recommendations given in
(Löfgren et al., 2004). A summary of the material parameters gathered during the material testing is
presented in Table 8.1. It should be noted that the tensile strength seems unrealistic high and should be
used with care; the reason for this is unknown. A calculated value of the tensile strength was therefore
used in the calculations instead, this is further treated in Section 7.1.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 81	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 81	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 81

-- 99 of 237 --

Table 8.1 Summary of mean values of the material parameters of the concrete.
Density
휌 [푘푔∕푚3]
Compressive strength
푓푐푚 [MPa]
Tensile strength
푓푐푡푚 [MPa]
Fracture energy
퐺퐹 [푁푚∕푚2]
Batch 1 2364 35.6 4.66 138
Batch 2 2404 38.1 4.77 136
Average 2384 36.8 4.72 137.1
8.2.3 Steel Properties.
A summary of the results from the testing of the reinforcement steel can be seen in Table 8.2.
Table 8.2 Mean values of steel properties.
Proof stress
푓0.2 [MPa]
Ultimate stress
푓푢 [MPa]
Young’s Modulus
퐸푠 [GPa]
Ultimate strain
휀푠푢 [%]
513 623 196 10.6
8.2.4 Location of Reinforcement
As described in Section 6.2.3 the reinforcement bars in the bottom layer were hung up with steel wires
to improve the position of the tensile reinforcement compared to previous years. After the testing was
done the beams were sawn in pieces and the position of the bars was measured. The dynamic loaded
beams were sawn in two places, approximately one third of the beams length from the support, since they
were too damaged to measure in the middle of the beam. The beams that were only subjected to static
loading were sawn in one place, approximately in the middle of the beam, since they were not as severely
damaged as the other beams. There were no clear difference between the dynamic loaded beams and
the ones subjected to only static load which means that the bars can be assumed to be straight along the
length of the beam. The distance from the bottom of the beam to the center of the reinforcement varied
between 22.0 mm and 23.5 mm with a mean value of 22.8 mm which gives a distance 푑 of 77.2 mm.
This means that the bars were placed a few millimeters too high. However, this is still an improvement
compared to the work done by Lozano and Makdesi (2017) since the variation of the distance is much
lower. An improvement for further work could be to decrease the height of the plastic piece that were
placed below the bars to 16.5 mm instead of the 19.0 mm bar that were used in this project.
The position of the top reinforcement were also measured and a greater dispersion of the results could
be seen there, between 20.0 mm to 28.0 mm. The position of this reinforcement will not influence the
results as much as the bottom reinforcement but a recommendation for further work could be to be more
careful when putting the bars in place and correct their position by visually determining if the bar looks
straight. Another recommendation that applies for both the top and bottom reinforcement is to be careful
when casting since it is easy to accidentally move the bars during the process.
82 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	82 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	82 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 100 of 237 --

8.3 Dynamic Testing
8.3.1 Introduction
The experiments started with the dynamic testing and this section treats the results gathered from the
high-speed camera footage of the impact event, that was later processed in the DIC software GOM
Correlate 2017. The results presented covers the deflections over time at beam midpoint, deflected beam
response over the whole beam length and the strain fields. The section is divided in one part that only
treats the response during the first impact and one part that treats the repeated impacts. Beams in Series-4
was only subjected to one impact and is therefore only treated in the first part. Photos of the beams after
the dynamic testing can be seen in Appendix C.
8.3.2 Methodology
As mentioned in Section 6.3 the impact was recorded with a high speed camera and the frames where
afterwards processed in the DIC software GOM Correlate 2017. In the software the user, among other
settings, specify the facet size and point distance of the mesh pattern, named surface component in the
software, generated to display the strain fields of the test specimens. An analysis of different combinations
of facet sizes and point distances were made and is presented in Appendix D. It was found out that it was
appropriate to use a surface component with a facet size of 15 pixels and a point distance of 5 pixels and
a high accuracy computation, which is a choice specified by the user.
From the surface component it was then possible to show the major strain fields and these were chosen
to be displayed against the reference stage. The strain field images presented in this section shows the
strains during the propagation of cracks in the first 2 ms, the strains at maximum deflection and also the
remaining strains, after the impact event has occurred.
By constructing a facet point component it was possible to follow a specific point during the impact.
The deflections presented were measured at the centermost point of the beam, both in length and height
direction. For some beams, though, large local damages occurred at beam midpoint which made it
impossible to follow the midpoint of the beam during the image sequence. For these beams, a point
outside of the locally damaged part was used instead to measure the response, which influences the
results. Even though the result is a bit less accurate it was deemed to be ok. There were more than one
way to measure the deflections and this is discussed in Appendix F.
The velocity and acceleration of the drop-weight were analysed by choosing several facet point compo-
nents, from where the average behaviour was calculated. The physical quantities of interest were the
impact force, impulse load and the velocity at impact.
A single section was also constructed along the longitudinal axis of the beam, at the geometrical center,
from which it was possible to determine the deformed shape for different times.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 83	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 83	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 83

-- 101 of 237 --

8.3.3 Midpoint Deflection over Time during First Impact
8.3.3.1 Introduction
As mentioned, some of the beams was subjected to more than one impact. But since the beams in
Series-4 was subjected to one impact only and the fact that the 2DOF script is designed to predict the
response during the first impact, this section presents the response during the first impact only. The
impact velocities are presented and taken as the average velocity during 3 ms before impact.
8.3.3.2 Series-1
The deflection-time relation from the tests of Series-1 are summarized in Table 8.3. The response during
the first 40 ms after impact can be seen in Figure 8.1, where the deflection is taken as the difference
between a point in the centre of the beam and a point at the left support.
Table 8.3 Summary of the results from the impact load testing of Series-1 (h = 2.5 m, m = 10 kg).
Beam 푣0 [m/s] 푢푚푎푥 [mm] 푢푝푙 [mm]
4 7.0 12.1 5.9
5 7.0 11.4 5.1
6 7.0 11.8 5.1
Average 7.0 11.7 5.4
0
5
10
15
20
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Beam 4
Beam 5
Beam 6
v
u
0
5
10
15
20
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Max
Average
Min
Figure 8.1 Deflection of midpoint over time for Series-1 (h = 2.5 m, m = 10 kg). The right hand figure
shows the average response and the outer envelopes marks the maximum and minimum
recorded deflections for the tested beams.
The impact velocity corresponds well with the theoretical value, presented in Table 7.5 which indicates
that the drop-weight consequently was hoisted to the desired height. Possible effects that also affect the
impact velocity are air resistance and friction resistance between the drop-weight and the steel rods used
for the guiding tube. The influence of these effects were negligible during the testing. The three tested
beams shows a very similar response and the conclusion is that the average response can be used for
later comparisons with the predicted response.
84 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	84 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	84 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 102 of 237 --

8.3.3.3 Series-2
The results from the tests of Series-2 are summarized in Table 8.4. The response during the first 40 ms
after impact can be seen in Figure 8.2.
Table 8.4 Summary of the results from the impact load testing of Series-2 (h = 5.0 m, m = 10 kg).
Beam 푣0 [m/s] 푢푚푎푥 [mm] 푢푝푙 [mm]
1 9.9 22.1 14.6
2 9.9 21.4 13.8
3 9.9 22.4 14.3
Average 9.9 22.0 14.2
0
10
20
30
40
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Beam 1
Beam 2
Beam 3
v
u
0
10
20
30
40
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Max
Average
Min
Figure 8.2 Deflection of midpoint over time for Series-2 (h = 5.0 m, m = 10 kg). The right hand figure
shows the average response and the outer envelopes marks the maximum and minimum
recorded deflections for the tested beams.
The impact velocity corresponds well with the theoretical value. The three tested beams shows a
similar response and the average value is considered as the characteristic response for the beams in the
series.
8.3.3.4 Series-3
The results from the tests of Series-3 are summarized in Table 8.5. The response during the first 40 ms
after impact can be seen in Figure 8.3.
Table 8.5 Summary of the results from the impact load testing of Series-3 (h = 2.5 m, m = 20 kg).
Beam 푣0 [m/s] 푢푚푎푥 [mm] 푢푝푙 [mm]
13 7.0 27.5 20.1
14 7.0 27.3 20.3
15 7.0 29.0 21.8
Average 7.0 27.9 20.7
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 85	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 85	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 85

-- 103 of 237 --

0
10
20
30
40
50
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Beam 13
Beam 14
Beam 15
v
u
0
10
20
30
40
50
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Max
Average
Min
Figure 8.3 Deflection of midpoint over time for Series-3 (h = 2.5 m, m = 20 kg). The right hand figure
shows the average response and the outer envelopes marks the maximum and minimum
recorded deflections for the tested beams.
The drop-weight in this series was hoisted to the same height as Series-1. Since the mass does not
influence the impact velocity it should be the same as in Series-1, which is also the case.
Beam 15 shows slightly higher values for both 푢푚푎푥 and 푢푝푙 which indicates that this beam had decreased
stiffness. However, the difference is less than 10 % from the two others beams tested and the average
value for all beams is used as the characteristic response in the further studies.
8.3.3.5 Series-4
The results from the tests of Series-4 are summarized in Table 8.6. The response during the first 40 ms
after impact can be seen in Figure 8.4.
Table 8.6 Summary of the results from the impact load testing of Series-4 (h = 5.0 m, m = 20 kg).
Beam 푣0 [m/s] 푢푚푎푥 [mm] 푢푝푙 [mm]
10 9.8 59.8 46.1
11 9.9 54.8 41.9
12 9.9 57.7 45.8
Average 9.9 57.4 44.6
86 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	86 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	86 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 104 of 237 --

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
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Beam 10
Beam 11
Beam 12
v
u
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
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Max
Average
Min
Figure 8.4 Deflection of midpoint over time for Series-4 (h = 5.0 m, m = 20 kg). The right hand figure
shows the average response and the outer envelopes marks the maximum and minimum
recorded deflections for the tested beams.
The impact velocity of Beam 10 has an impact velocity that is somewhat low. This is most likely due
to human error during the experiments, where the drop-weight was not hoisted into the desired height.
However, beam 10 has the largest value of 푢푚푎푥 which indicates that the lower impact velocity has a
minor effect.
The average curve in Figure 8.4 is considered as the characteristic response of the series.
8.3.3.6 Comparison of Deflection over Time
The average curve for deflection over time for all the tested series can be seen in Figure 8.5. The beams
in Series-2 and Series-3 shows a similar behaviour during the first 5 ms and afterward Series-3 continues
to reach a higher maximum deflection a few ms later.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 87	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 87	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 87

-- 105 of 237 --

0
10
20
30
40
50
60
70
0 5 10 15 20 25 30 35 40
Deflection,
 u [mm]
Time, t [ms]
Series-4
Series-3
Series-2
Series-1
v
u
Figure 8.5 Average midpoint deflection for all series in the impact load testing.
8.3.4 Midpoint Deflection over Time during Repeated Impacts
8.3.4.1 Introduction
The results from the repeated impacts is presented within this section. The beams in Series-4 was, as
mentioned, only subjected to one impact and is therefore not treated. The results presented within this
section are further discussed and compared with the predicted response in Chapter 10.
8.3.4.2 Series-1
The response of the beams in Series-1, after four drops, is summarized in Table 8.7 and 8.8. Note that
Table 8.7 presents the additional deflections after each impact, i.e the initial deflection at each impact is
taken as zero, whilst Table 8.8 presents the total values. The deflection over time is, together with the
average response, presented in Figure 8.6-8.8. Figure 8.9 shows the average response during all four
drops. In Figure 8.7 there is an irregular response of Beam 5 during approximately 20 - 25 ms. The
reason for this is that dust from the impact zone prevents the camera to capture the selected facet points.
However, the dust disappears after a few ms and the curve is once again consistent.
88 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	88 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	88 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 106 of 237 --

Table 8.7 Summary of the additional deflections for beams in Series-1 (h = 2.5 m, m = 10 kg). All
values are in mm.
Drop 1 Drop 2 Drop 3 Drop 4
Beam 푢푚푎푥 푢푝푙 Δ푢푚푎푥 Δ푢푝푙 Δ푢푚푎푥 Δ푢푝푙 Δ푢푚푎푥 Δ푢푝푙
4 12.1 5.9 13.2 6.1 15.7 6.6 30.3 20.4
5 11.4 5.1 12.9 6.1 14.4 7.5 16.7 3.6
6 11.8 5.1 12.0 5.0 14.1 5.9 15.6 3.4
Average 11.7 5.4 12.7 5.7 14.7 6.7 20.9 9.1
Table 8.8 Summary of the total deflections for beams in Series-1 (h = 2.5 m, m = 10 kg). All values are
in mm.
Drop 1 Drop 2 Drop 3 Drop 4
Beam 푢푚푎푥 푢푝푙 푢푚푎푥 푢푝푙 푢푚푎푥 푢푝푙 푢푚푎푥 푢푝푙
4 12.1 5.9 19.1 12.0 27.7 18.6 48.9 39.0
5 11.4 5.1 18.0 11.2 25.6 18.7 35.4 22.3
6 11.8 5.1 17.1 10.1 24.2 16.0 31.6 19.4
Average 11.7 5.4 18.1 11.1 25.8 17.8 38.6 26.9
0
5
10
15
20
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Beam 4
Beam 5
Beam 6
v
u
(a) Measured deflection.
0
5
10
15
20
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Max
Average
Min
 (b) Outer envelopes and average values.
Figure 8.6 Deflection over time for the second drop.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 89	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 89	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 89

-- 107 of 237 --

0
5
10
15
20
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Beam 4
Beam 5
Beam 6
v
u
(a) Measured deflection.
0
5
10
15
20
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Max
Average
Min
 (b) Outer envelopes and average values.
Figure 8.7 Deflection over time for the third drop.
0
10
20
30
40
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Beam 4
Beam 5
Beam 6
v
u
(a) Measured deflection.
0
10
20
30
40
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Max
Average
Min
 (b) Outer envelopes and average values.
Figure 8.8 Deflection over time for the fourth drop.
90 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	90 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	90 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 108 of 237 --

0
10
20
30
0 5 10 15 20 25 30 35 40
Deflection,
 u [mm]
Time, t [ms]
Drop 4
Drop 3
Drop 2
Drop 1
v
u
Figure 8.9 Average midpoint deflection for the repeated impacts.
It is clear that there is a small deviation between the response of Beam 4 and the two other beams. It can
be seen already after the second and the third drop but a major deviation occurs at the fourth impact. This
is due to severe local damage at the mid part of Beam 4. Figure 8.9 shows that the stiffness decreases
after each impact; i.e the deflection obtained increases at each impact.
8.3.4.3 Series-2
The response of the beams in Series-2 are summarized in Table 8.9. The response during the second
impact is presented in Figure 8.10. Figure 8.11 shows the average response of the series during the two
impacts.
Table 8.9 Summary of the deflections for beams in Series-2 (h = 5.0 m, m = 10 kg). All values are in
mm.
Drop 1 Drop 2
Beam 푢푚푎푥 푢푝푙 Δ푢푚푎푥 푢푚푎푥 Δ푢푝푙 푢푝푙
1 22.1 14.6 23.4 38.0 16.4 31.0
2 21.4 13.8 26.5 40.3 14.3 28.1
3 22.4 14.3 26.2 40.5 16.9 31.2
Average 22.0 14.2 25.4 39.6 15.9 30.1
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 91	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 91	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 91

-- 109 of 237 --

0
10
20
30
40
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Beam 1
Beam 2
Beam 3
v
u
(a) Measured deflection.
0
10
20
30
40
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Max
Average
Min
 (b) Outer envelopes and average values.
Figure 8.10 Deflection over time for the second drop.
The response during the second impact is similar for all beams. Beam 2 has a slightly lower plastic
deformation 푢푝푙 and it can also be seen that the response of this beam is shifted a bit in time. However,
when looking at the outer envelopes, it can be stated that the average curve represents the behaviour very
well. From Figure 8.11 it is clear that the stiffness decreases after the first impact has occurred.
0
10
20
30
0 5 10 15 20 25 30 35 40
Deflection,
 u [mm]
Time, t [ms]
Drop 1
Drop 2
v
u
Figure 8.11 Average midpoint deflection for the repeated impacts.
92 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	92 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	92 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 110 of 237 --

8.3.4.4 Series-3
The response of the beams in Series-3 is summarized in Table 8.10. The response during the second
impact is presented in Figure 8.12. Figure 8.13 shows the average response of the series during the two
impacts.
Table 8.10 Summary of the deflections for beams in Series-3 (h = 2.5 m, m = 20 kg). All values are in
mm.
Drop 1 Drop 2
Beam 푢푚푎푥 푢푝푙 Δ푢푚푎푥 푢푚푎푥 Δ푢푝푙 푢푝푙
13 27.5 20.1 33.9 54.0 20.8 40.9
14 27.3 20.3 31.8 54.4 24.1 44.4
15 29.0 21.8 30.7 61.2 27.4 49.2
Average 27.9 20.7 32.1 56.5 24.1 44.8
The beams shows a similar response and the conclusion is that the average curve represents the behaviour
very well. Figure 8.13 shows how the stiffness has decreased after the first impact.
0
10
20
30
40
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Beam 13
Beam 14
Beam 15
v
u
(a) Measured deflection.
0
10
20
30
40
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
Max
Average
Min
 (b) Outer envelopes and average values.
Figure 8.12 Deflection over time for the second drop.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 93	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 93	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 93

-- 111 of 237 --

0
10
20
30
40
0 5 10 15 20 25 30 35 40
Deflection,
 u [mm]
Time, t [ms]
Drop 1
Drop 2
v
u
Figure 8.13 Average midpoint deflection for the repeated impacts.
94 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	94 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	94 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 112 of 237 --

8.3.5 Strain Fields from DIC during First Impact
The crack pattern can be evaluated by looking at the strain fields. In GOM Correlate the major strains
of a surface component can be selected and this renders the coloured images presented further in this
section. The limits of the colorscale can be specified by the user. As mentioned, the intention in this
project was to detect the cracks. At a strain of 2 % it was possible to visually see a crack in the photos,
and therefore this was determined as the upper limit. The lower limit was set to 1.2 % so that most of the
noise was damped out.
The beam response during the first two ms in Series-1 can be seen in Table 8.11. The beams shows a
similar strain field where flexural cracks forms at the bottom edge at midspan, directly below the impact
region. For Beam 5 and Beam 6 one major crack occurs whilst two cracks forms for Beam 4. Beam 4
was also the beam within the series that had the most damages after all four impacts, see Section 8.3.4.2.
At 0.4 ms bending cracks in the upper region of all beams can be observed. These cracks closes and
can no longer be detected after 1.0 ms, this behaviour is further discussed in Section 8.3.7. Minor shear
cracks can be detected at maximum deflection.
Table 8.11 Strain fields of beams in Series-1 (h = 2.5 m, m = 10 kg) during the first two ms, at maximum
deflection and at the end of the test.
[ms] Beam 4 Beam 5 Beam 6
0.2
0.4
0.6
1.0
2.0
푡 = 6.0, 푢푚푎푥 = 12.1 푡 = 6.0, 푢푚푎푥 = 11.4 푡 = 5.8, 푢푚푎푥 = 11.8
푢푝푙 = 5.9 푢푝푙 = 5.1 푢푝푙 = 5.1
%
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 95	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 95	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 95

-- 113 of 237 --

The response of the beams in Series-2 can be seen in Table 8.12. Unlike Series-1, shear cracking occurs
at the impact region, as well as a flexural crack. The overall crack pattern is similar but the response of
Beam 2 has some deviations compared to the other two beams, both concerning the crack pattern and
the deflections. Unfortunately, spalling occurred in some parts of the beams and this can be seen as the
white areas in the strain field images. .
Table 8.12 Strain fields of beams in Series-2 (h = 5.0 m, m = 10 kg) during the first two ms, at maximum
deflection and at the end of the test.
[ms] Beam 1 Beam 2 Beam 3
0.2
0.4
0.6
1.0
2.0
푡 = 8.2, 푢푚푎푥 = 22.1 푡 = 7.4, 푢푚푎푥 = 21.4 푡 = 8.4, 푢푚푎푥 = 22.4
푢푝푙 = 14.6 푢푝푙 = 13.8 푢푝푙 = 14.3
%
96 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	96 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	96 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 114 of 237 --

The response during the first two ms of the beams in Series-3 can be seen in Table 8.13. The three
beams shows different behavior compared to each other. In Beam 13 and Beam 14 one distinct flexural
crack is formed below the impact area, whereas Beam 15 has pronounced shear cracks. After 0.6 ms a
shear crack appears in Beam 13 as well but not in other beams. The impact region of Beam 15 is more
damaged than for the two other beams and the plastic deformation was also larger for this beam. At the
last image, after the impact event, of Beam 13 and Beam 15 there is an area with high strains. This is an
error that occurred in GOM Correlate and does not reflect the real behaviour.
Table 8.13 Strain fields of beams in Series-3 (h = 2.5 m, m = 20 kg) during the first two ms, at maximum
deflection and at the end of the test.
[ms] Beam 13 Beam 14 Beam 15
0.2
0.4
0.6
1.0
2.0
푡 = 11.0, 푢푚푎푥 = 27.5 푡 = 10.8, 푢푚푎푥 = 27.3 푡 = 12.0, 푢푚푎푥 = 29.0
푢푝푙 = 20.1 푢푝푙 = 20.3 푢푝푙 = 21.8
%
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 97	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 97	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 97

-- 115 of 237 --

The response during the first two ms of the beams in Series-4 can be seen in Table 8.14. Overall, the
beams shows a similar crack pattern where major flexural cracks, together with shear cracks, occurs at
the impact region. Several cracks appear at the upper part of the beam during the first ms and after 2.0
ms they are no longer visible. Beam 10 has a flatter shear crack propagating to the left of the impact
region. This beam has also the largest plastic deformation. The blank areas at the upper part of the beam
indicates the local spalling of concrete in the impact region. Unfortunately, an image after the impact
event was not made in this series.
Table 8.14 Strain fields of beams in Series-4 (h = 5.0 m, m = 20 kg) during the first two ms, at maximum
deflection and at the end of the test.
[ms] Beam 10 Beam 11 Beam 12
0.2
0.4
0.6
1.0
2.0
푡 = 18.2, 푢푚푎푥 = 59.8 푡 = 17.2, 푢푚푎푥 = 54.8 푡 = 18.0, 푢푚푎푥 = 57.7
푢푝푙 = 46.1 푢푝푙 = 41.9 푢푝푙 = 45.8
%
98 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	98 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	98 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 116 of 237 --

8.3.6 Strain Fields from DIC during Repeated Impacts
This section presents the strain fields from the repeated impacts for each beam. The maximum deflection
and which time it occurred at is presented together with the gathered plastic deflection after each drop. It
should be noted that the residual strain field from the last drop is missing in each case, this is since the
camera stops taking photos before the beam stops moving. The residual strain field for the rest of the
drops can be found by taking the first image before the drop-weight hits the beam in the subsequent drop.
However, the plastic deformation from the last drop can be found by measuring the deformation before
the static test begins, as described in Appendix F.
Strain fields of Series-1 is presented in Table 8.15 where it can be clearly seen that parts of the compressive
zone were crushed after each drop, which is illustrated by white areas in the top of the beam. The white
areas in the bottom of the beam represents parts in the tensile zone that have loosened from the beam
during the impact. It can also be seen that new cracks open during the drops and that it gets harder to
find any similarities between the three beams as the number of drops increase.
Table 8.15 Strain fields at maximum deflection and after impact for beams in Series-1.
Drop Beam 4 Beam 5 Beam 6
1
푢푝푙 = 5.9 푢푝푙 = 5.1 푢푝푙 = 5.1
2
푡 = 6.6, 푢푚푎푥 = 19.1 푡 = 6.4, 푢푚푎푥 = 18.0 푡 = 6.0, 푢푚푎푥 = 17.1
푢푝푙 = 12.0 푢푝푙 = 11.2 푢푝푙 = 10.1
3
푡 = 8.0, 푢푚푎푥 = 27.7 푡 = 7.6, 푢푚푎푥 = 25.6 푡 = 6.4, 푢푚푎푥 = 24.2
푢푝푙 = 18.6 푢푝푙 = 18.7 푢푝푙 = 16.0
4
푡 = 17.4, 푢푚푎푥 = 49.0 푡 = 8.6, 푢푚푎푥 = 35.4 푡 = 8.0, 푢푚푎푥 = 31.6
푢푝푙 = 39.0 푢푝푙 = 22.3 푢푝푙 = 19.4
%
Strain fields of Series-2 are presented in Table 8.16 where it can be seen that the compressive zone gets
crushed during the second impact and that parts of the tensile zone have loosened from the beam here as
well. The beams behave in a pretty similar way.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 99	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 99	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 99

-- 117 of 237 --

Table 8.16 Strain fields at maximum deflection and after impact for beams in Series-2.
Drop Beam 1 Beam 2 Beam 3
1
푢푝푙 = 14.6 푢푝푙 = 13.8 푢푝푙 = 14.3
2
푡 = 10.4, 푢푚푎푥 = 38.0 푡 = 12.4, 푢푚푎푥 = 40.3 푡 = 10.6, 푢푚푎푥 = 40.5
푢푝푙 = 31.0 푢푝푙 = 28.1 푢푝푙 = 31.2
%
Strain fields of Series-3 are presented in Table 8.17 where it can be seen that the compressive zone gets
crushed and that parts of the tensile zone have fallen off. All of the beams have severe damage in the
compressive zone and a lot of damages in the tensile zone. There is however a large variation between
the beams.
Table 8.17 Strain fields at maximum deflection and after impact for beams in Series-3.
Drop Beam 13 Beam 14 Beam 15
1
푢푝푙 = 20.1 푢푝푙 = 20.3 푢푝푙 = 21.8
2
푡 = 14.4, 푢푚푎푥 = 54.0 푡 = 14.2, 푢푚푎푥 = 52.1 푡 = 12.0, 푢푚푎푥 = 52.5
푢푝푙 = 40.9 푢푝푙 = 44.4 푢푝푙 = 49.2
%
8.3.7 Deformed Shape
The deformed shape over time for the first impact are shown for Beam 4 (from Series-1) and Beam 12
(from Series-4). These beams ware considered to well represent the overall behaviour of the two series,
based on the deflection-time relation response during the first impact. The reason for choosing beams
from Series-1 and Series-4 was to compare the behaviour between the extremes of the impact conditions.
The information was collected by constructing a single section line in GOM Correlate that selects all
facet points along a line from one side to the other of the beam. Figure 8.14 and 8.15 shows the deformed
shape of Beam 4 and Beam 12, respectively, during the first 2.0 ms. It is clear that only a small part of
the beam deforms during the first measurements. The rest of the beam serves at this stage as a restraint
for the inner, deflected, part of the beam. Consequently, the beam initially behaves as a double-fixed
beam with a short span and this gives tension in the upper part of the beam, resulting in cracks in the
100 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	100 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	100 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 118 of 237 --

transition between the active and the inactive portion of the beam. It is a clear difference of the response
between the two studied beams. Beam 12 shows a larger local displacement at the impacted part. This is
due to the shear cracks that are initiated in this beam. The deformed shape of this beam is also more
triangular than for Beam 4.
-2
-1
0
1
2
3
4
5
6
7
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms 1.2 ms
0.4 ms 1.4 ms
0.6 ms 1.6 ms
0.8 ms 1.8 ms
1.0 ms 2.0 ms
v
u
Figure 8.14 Deformed shape of Beam 4 at different times after impact.
-4
-2
0
2
4
6
8
10
12
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms 1.2 ms
0.4 ms 1.4 ms
0.6 ms 1.6 ms
0.8 ms 1.8 ms
1.0 ms 2.0 ms
v
u
Figure 8.15 Deformed shape of Beam 12 at different times after impact.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 101	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 101	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 101

-- 119 of 237 --

The relative deformed shape at different times is illustrated in Figure 8.16 and 8.17. The values of the
deflections in these figures were normalized to the maximum deflection at all studied stages.
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
-50 0 50 100 150 200 250 300 350 400 450 500
Relative Displacement [
-]
Length, l [mm]
0.2 ms 1.2 ms
0.4 ms 1.4 ms
0.6 ms 1.6 ms
0.8 ms 1.8 ms
1.0 ms 2.0 ms
v
u
Figure 8.16 Relative deformed shape of Beam 4 at different times after impact.
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
-50 0 50 100 150 200 250 300 350 400 450 500
Relative Displacement [
-]
Length, l [mm]
0.2 ms 1.2 ms
0.4 ms 1.4 ms
0.6 ms 1.6 ms
0.8 ms 1.8 ms
1.0 ms 2.0 ms
v
u
Figure 8.17 Relative deformed shape of Beam 12 at different times after impact.
102 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	102 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	102 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 120 of 237 --

8.3.8 Velocities of Initial Deflection
It is also of interest to examine the velocity at which the deflections propagates during the first ms. The
velocities was gathered by looking at how the active portion of the beam increased for each time step of
0.2 ms. The velocity was calculated as
푣 = 푥(푡2) − 푥(푡1)
푡2 − 푡1
(8.1)
where 푥 is the transition point between the active and inactive portion of the beam, see Figure 8.18. A
study of the shear velocities was made on Beam 4 and Beam 12 and the results from the study of shear
velocities is presented in Table 8.18. It was not possible to include the velocity between 0 - 0.2 ms. This
due to the fact that the impact does not occur exactly at the time when the high-speed camera takes a
photo. In other words, the time step between the first and second photo is not with certainty 0.2 ms.
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
-50 	50 	150 	250 	350 	450
Deflection,
 	u 	[mm]
Time, t [ms]
0.2 ms
0.4 ms
v
u
x(t2) - x(t1)
upl =
u1 + u2
Active Inactive	Inactive
Figure 8.18 Transition point between active and inactive part.
Table 8.18 Shear velocities of Beam 4 and Beam 12. All values are in m/s.
Beam 0.4 ms 0.6 ms 0.8 ms 1.0 ms 1.2 ms 1.4 ms 1.6 ms
4 837 425 262 229 46 75 30
12 795 366 237 132 125 49 60
It is clear that the velocity decreases for each time step of 0.2 ms. After a few time steps the velocity
decreases significantly and then stabilizes. In this study the time at which this decrease occurs was
determined as the time it takes for the active portion to span the entire beam spa. In Beam 4 this was after
approximately 1.0 ms and in Beam 12 it was after 1.2 ms. The Beams shows a similar response.
In Yi et al. (2016) the shear wave propagation is studied and a suggestion to calculate the time 푡0 needed
for the active beam portion to span the entire beam is given as
푡0 = 퐿0
2푣푠
(8.2)
where 퐿0 is the span of the beam and 푣푠 is the velocity at which the stress wave is transferred within the
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 103	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 103	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 103

-- 121 of 237 --

concrete. The velocity 푣푠 corresponds to the shear velocity and can be calculated as
푣푠 =
u퐺
휌 (8.3)
where 퐺 is the shear modulus, calculated as
퐺 = 퐸
2(1 + 휈) (8.4)
and 휌 is the density of concrete. The parameters needed to calculate 푡0 within this project is presented in
Table 8.19.
Table 8.19 Parameters for calculating 푡0.
휌 [푘푔∕푚3] 퐺 [GPa] 퐿0 [m]
2384 19.5 1.0
From Equations (8.2) and (8.3) the theoretical value of the time 푡0 was 0.2 ms and thus 5 - 6 times smaller
than the measured time which was approximated as 1.0 - 1.2 ms.
8.3.9 Impact Force and Impulse Load
8.3.9.1 Introduction
The force acting on the beam during the impact and the impulse load is presented within this section. In
GOM Correlate the acceleration is calculated as the second derivative of the displacement. The noise
that occurs in the displacements therefore gives even worse noise in the acceleration. In an attempt to
get rid of this noise a number of points were constructed at the drop-weight, from where the acceleration
was established. This was done for every beam during the first impact and the force 퐹 presented for
every beam within this section is the average value of several such points. The peak value of the impact
force occurs after 3 ms in the following graphs within this section.
The impulse load is also estimated within this section and a further description of how the impulse was
calculated can be found in Appendix H.
104 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	104 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	104 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 122 of 237 --

8.3.9.2 Series-1
The peak value of the force 퐹푖푚푝 acting on the beam during the impact and the impulse 퐼 is presented in
Table 8.20. The force - time relationship for the drop-weight acting on the beam during the impact is
presented in Figure 8.19. The total impulse 퐼푡표푡 is defined as
퐼푡표푡 = 퐼푖푛푖 + 퐼푝표푠푡 (8.5)
Table 8.20 Peak value of the impact force 퐹푖푚푝 and the impulse 퐼 for Series-1.
Beam 퐹푖푚푝 [kN] 퐼푖푛푖 [Ns] 퐼푝표푠푡 [Ns] 퐼푡표푡 [Ns] 퐼푖푛푖/퐼푡표푡 [%]
4 71.5 39.5 47.6 87.1 45.4
5 70.3 39.0 49.5 88.5 44.1
6 80.7 40.3 48.3 88.6 45.5
Average 74.2 39.6 48.5 88.0 45.0
-20
0
20
40
60
80
100
0 	5 	10 	15 	20
Force,
 	F 	[kN]
Time, t [ms]
Beam 4
Beam 5
Beam 6
v
u
(a) Measured force.
-20
0
20
40
60
80
100
0 	5 	10 	15 	20
Time, t [ms]
Max
Average
Min
 (b) Outer envelopes and average values.
Figure 8.19 Force over time for Series-1.
From the results in Table 8.20 it seems that 퐹푖푚푝 is more than 10 % higher than the for the two other
beams but the fact that the time step between two values is 0.2 ms has a marked influence in this case.
Figure 8.20 shows the trend line of second order polynomial for the three beams from where it is clear
that the peak value of beam 6 occurs at the top of the trend line. The peak value of Beam 4 and Beam 5
occurs on the other hand somewhere between two measurements and therefore a lower value is obtained.
However, it seems that the peak value is higher for Beam 6 but not as much as indicated in Table 8.20.
The impulse values are similar for the beams and this indicates that the method used to evaluate the
impulses is reasonable.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 105	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 105	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 105

-- 123 of 237 --

-20
0
20
40
60
80
100
2 	2.5 	3 	3.5 	4
Force,
 	F 	[kN]
Time, t [ms]
Beam 4
Beam 5
Beam 6
v
u
(a) Impact force.
-20
0
20
40
60
80
100
2 	2.5 	3 	3.5 	4
Time, t [ms]
Trendline Beam 4
Trendline Beam 5
Trendline Beam 6
 (b) Trend line.
Figure 8.20 Graphs showing the trend line for Series-1.
8.3.9.3 Series-2
The peak value of the force 퐹푖푚푝 acting on the beam during the impact and the impulse can be seen in
Table 8.21. The force - time relationship for the drop-weight acting on the beam during the impact can
be seen in Figure 8.21.
Table 8.21 Peak value of the impact force 퐹푖푚푝 and the impulse 퐼 for Series-2.
Beam 퐹푖푚푝 [kN] 퐼푖푛푖 [Ns] 퐼푝표푠푡 [Ns] 퐼푡표푡 [Ns] 퐼푖푛푖/퐼푡표푡 [%]
1 97.1 53.0 68.4 121.4 43.6
2 99.7 52.6 69.3 121.9 43.2
3 101.4 53.0 67.5 120.5 44.0
Average 99.4 52.9 68.4 121.3 43.6
-20
0
20
40
60
80
100
0 	5 	10 	15 	20
Force,
 	F 	[kN]
Time, t [ms]
Beam 1
Beam 2
Beam 3
v
u
(a) Measured force.
-20
0
20
40
60
80
100
0 	5 	10 	15 	20
Time, t [ms]
Max
Average
Min
 (b) Outer envelopes and average values.
Figure 8.21 Force over time for Series-2.
106 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	106 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	106 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 124 of 237 --

8.3.9.4 Series-3
The peak value of the force 퐹푖푚푝 acting on the beam during the impact and the impulse can be seen in
Table 8.22. The force - time relationship for the drop-weight acting on the beam during the impact can
be seen in Figure 8.22.
Table 8.22 Peak value of the impact force 퐹푖푚푝 and the impulse 퐼 for Series-3.
Beam 퐹푖푚푝 [kN] 퐼푖푛푖 [Ns] 퐼푝표푠푡 [Ns] 퐼푡표푡 [Ns] 퐼푖푛푖/퐼푡표푡 [%]
13 79.1 50.3 119.6 169.9 29.6
14 83.9 52.3 120.0 172.3 30.4
15 80.3 49.6 117.1 166.7 29.8
Average 81.1 50.7 118.9 169.6 29.9
-20
0
20
40
60
80
100
0 	5 	10 	15 	20
Force,
 	F 	[kN]
Time, t [ms]
Beam 13
Beam 14
Beam 15
v
u
(a) Measured force.
-20
0
20
40
60
80
100
0 	5 	10 	15 	20
Time, t [ms]
Max
Average
Min
 (b) Outer envelopes and average values.
Figure 8.22 Force over time for Series-3.
8.3.9.5 Series-4
The peak value of the force 퐹푖푚푝 acting on the beam during the impact and the impulse can be seen in
Table 8.23. The force - time relationship for the drop-weight acting on the beam during the impact can
be seen in Figure 8.23.
Table 8.23 Peak value of the impact force 퐹푖푚푝 and the impulse 퐼 for Series-4.
Beam 퐹푖푚푝 [kN] 퐼푖푛푖 [Ns] 퐼푝표푠푡 [Ns] 퐼푡표푡 [Ns] 퐼푖푛푖/퐼푡표푡 [%]
10 109.3 67.9 162.3 230.2 29.5
11 108.3 67.0 162.3 229.3 29.2
12 104.9 66.0 158.1 224.1 29.4
Average 81.1 67.0 160.9 227.9 29.4
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 107	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 107	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 107

-- 125 of 237 --

-20
0
20
40
60
80
100
0 	5 	10 	15 	20
Force,
 	F 	[kN]
Time, t [ms]
Beam 10
Beam 11
Beam 12
v
u
(a) Measured force.
-20
0
20
40
60
80
100
0 	5 	10 	15 	20
Time, t [ms]
Max
Average
Min
 (b) Outer envelopes and average values.
Figure 8.23 Force over time for Series-4.
8.3.9.6 Comparison of Impact Force
The average curve of the force-time relation for all four test series can be seen in Figure 8.24. As expected,
the highest peak value of the impact force occurs in Series-4. The impact force of Series-2 is higher than
Series-3. Although, by looking at Figure 8.5, the deflection of Series-2 is lower than Series-3, meaning
that higher 퐹푖푚푝 does not always mean higher deflections. It is instead the impulse 퐼 that can be related
to the deflections.
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
90
100
110
120
0 1 2 3 4 5 6 7 8 9 10
Impact force,
 Fimp [kN]
Time, t [ms]
Series-1
Series-2
Series-3
Series-4
v
u
Figure 8.24 Average force over time for all tested series.
108 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	108 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	108 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 126 of 237 --

8.3.9.7 Comparison of Impulse Load
The average values of the impulse loads for the four series can be seen in Table 8.24. Series-1 and
Series-2 has almost the same value of the relation 퐼푖푛푖/퐼푡표푡 and the same pattern can be seen for Series-3
and Series-4. This shows that the relation seems to be dependent of the mass and not the drop-height. It
was also found that the relation 퐼푝표푠푡/퐼푡표푡 corresponds very well with the relation between the masses that
is used for the total kinetic energy in a plastic collision in Equation (4.32), that is
퐸푘,푡표푡 = 푚1
푚1 + 푚2
퐸푘,0 (8.6)
With 푚1 = 10 or 20 kg and 푚2 = 푚푏 ⋅ 휅푚 = 8 kg the relation is 55 % and 71 %, respectively.
Table 8.24 Average values of impulse load.
Name 퐼푖푛푖 [Ns] 퐼푝표푠푡 [Ns] 퐼푡표푡 [Ns] 퐼푖푛푖/퐼푡표푡 [%] 퐼푝표푠푡/퐼푡표푡 [%]
Series-1 39.6 48.5 88.0 45.0 55.0
Series-2 52.9 68.4 121.3 43.6 56.4
Series-3 50.7 118.9 169.6 29.9 70.1
Series-4 67.0 160.9 227.9 29.4 70.6
8.4 Static Testing
8.4.1 Introduction
The purpose of statically loading the beams until failure was to evaluate the residual capacity after the
dynamic loading, compared to the undamaged beams. This section presents the results from the static
testing in means of load-deflection curves. These curves describes the behaviour of the beam very well
and can also be used to calculate rotational capacity, internal work and other interesting parameters. The
results presented here is compared to the predicted values in Chapter 10. As mentioned before, the load
condition applied in the static tests was four-point bending. It should be noted that the deflection in the
graphs are the mean value of the deflection at the two points where the load is applied, this is since the
sensor measuring the deflection is placed in the center of the apparatus, see Appendix G. Appendix G
also presents the plastic deflection of each beam after the dynamic loading, measured with the method
presented there. Photos of the beams after the static test can be seen in Appendix E.
8.4.2 Undamaged Beams
The load-deflection relationship of the undamaged beams can be seen in Figure 8.25, where both beams
from batch 1 and 2 are presented. Based on these values Figure 8.26 presents the maximum, minimum and
average values of the beams. Based on these two graphs, some important key parameters are calculated
and shown in Tables 8.25, 8.26 and 8.27.
First of all, some important notations have to be made from the data of Beam 7. Initially, the load-
deflection relationship showed almost a horizontal part for the first 2 mm. This might be because some
gravel where stuck between the apparatus and the beam, resulting in very low load during the crushing
of this gravel, or that some other mistake was made during the test. Due to this fact, the first 2 mm of the
data has been removed to make sure that the results are reasonable. As a result of this, it looks like the
unloading process for Beam 7 happens earlier compared to the other beams even tough this is not the case.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 109	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 109	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 109

-- 127 of 237 --

Another disturbing fact that was observed when analysing the data from Beam 7 is that the reinforcement
ruptured before the third unloading process. This is not a problem itself, since this also happened for
Beam 9 as well. The difference in the response of Beam 7 is that a large part of the compression zone
fell loose from the beam and got stuck between the two loading bars. This resulted in a new equilibrium
where the top reinforcement started to act like tensile reinforcement and the loosened concrete part
functioned as a balancing compressive zone This provided a capacity of 10 kN up to a deflection of 70
mm, where the beam failed. Hence, This data is not representative for the behaviour of the beam and it
was therefore decided to remove all the data once the bottom reinforcement ruptured.
All the beams show a very similar behaviour up to the second unloading, except for Beam 16 which
shows a somewhat lower capacity. The reason for this is unknown and it can not be coupled to the
batch number since Beam 17 and 18 are from the same batch and show a very capacity, even at high
deflections. One possible explanation for this behaviour could be that the location of the reinforcement
differed compared to the other beams, unfortunately Beam 16 was not one of the beams that were sawn in
pieces and got the final reinforcement positions measured, see Section 8.2.4. After the second unloading
process, the beams show a slight difference in behaviour. This depends on how the concrete crushing
takes place. The part where a graph is vertical represents where the reinforcement is torn off. Beam
16, 17 and 18 show two separate vertical parts, this is due to that the two bars did not rupture at the
same time. No clear difference can be seen between the batches and the combined envelope, which
is presented in Figure 8.26, will therefore be used when comparing the data with the damaged beams,
regardless of which batch it belongs to. It should be noted that the average value in Figure 8.26 is the
average value of the six beams, not the average value between the maximum and minimum value.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Beam 7
Beam 8
Beam 9
Beam 16
Beam 17
Beam 18
F
u
Figure 8.25 Load-deflection relationship for the undamaged beams. Beam 7, 8 and 9 is from batch 1
and beam 16, 17 and 18 is from batch 2.
110 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	110 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	110 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 128 of 237 --

0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Max
Average
Min
F
u
Figure 8.26 Outer envelopes and average values of the load-deflection relationship for the undamaged
beams.
Table 8.25 shows the maximum load and deflection for all of the undamaged beams. It is also of interest
to investigate how the stiffness of the beam changes at each unloading step. Hence, 푘퐼퐼.푚 represents the
stiffness in state II and 푘푖 is the stiffness at unloadning and reloading 1, 2 and 3. These four stiffnesses
were calculated from the results by dividing the difference in force by the difference in deflection,
resulting in the stiffness. The method is schematically shown in Appendix I, where Beam 17 serves as an
example. When analysing the results it is a bit confusing that the measured state II stiffness 푘퐼퐼.푚 is lower
than the stiffness in the first unloading process. The expected behaviour was that the stiffness’s should be
approximately the same. One possible cause of this error could be the difficulty of locating exactly where
the reinforcements starts to yield, which has been assumed graphically in this case. Another possible
source of error is that the initial force is not exactly zero but 0.1-0.2 kN. This was done by purpose to
make sure that the loading bars were in contact with the beam before the test began.
Table 8.26 shows a summary of the calculated plastic rotations at different load percents, according
to the method described in Section 3.4.2. The capacities are quite similar around 100-95 % but starts
to differ a lot at 90 %. This is because the type of failure has a significant impact on the result. When
studying Figure 8.25 closer, it can be seen that Beam 17 has a significant loss of strength at 푢 ≈ 28 mm,
which leads to very similar values of 휃푝푙.90% and 휃푝푙.85%. Beam 8, on the other hand, has a small decrease
in that part of the diagram, resulting in a large difference between 휃푝푙.90% and 휃푝푙.85%.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 111	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 111	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 111

-- 129 of 237 --

Table 8.25 Values of maximum load and deflection together with different stiffness’s.
Beam nr 푢푓 푎푖푙
[mm]
퐹100%
[kN]
푘퐼퐼.푚
[kN/mm]
푘1
[kN/mm]
푘2
[kN/mm]
푘3
[kN/mm]
7 36.7 16.8 2.15 2.89 2.70 -
8 44.6 16.0 2.25 2.79 2.61 2.34
9 39.7 16.1 2.32 2.90 2.66 -
16 41.8 15.4 1.99 2.68 2.53 2.19
17 42.1 16.5 2.23 2.89 2.75 2.31
18 44.5 16.3 2.23 2.93 2.76 2.52
Average 41.6 16.2 2.20 2.85 2.67 2.34
Table 8.26 Values of plastic rotation at different load levels.
Beam nr 휃푝푙.100%
[mrad]
휃푝푙.95%
[mrad]
휃푝푙.90%
[mrad]
휃푝푙.85%
[mrad]
휃푝푙.80%
[mrad]
7 47 58 71 76 82
8 37 49 67 91 103
9 42.0 66 85 92 97
16 35 50 59 73 84
17 43 53 60 62 74
18 45 67 95 109 110
Average 42 57 73 84 92
Table 8.27 shows a summary of the internal work at different load levels, calculated according to
Appendix J, where Beam 17 serves as an example again. The method to calculate the internal work
is described in Section 4.4 as well. The values of the internal work at different load levels can be
coupled to the plastic rotation at the same load level, since the calculation procedure is based on the
same methodology. For example, Beam 8 and 16 has low values of 휃푝푙.100%, meaning that they also have
low values of 푊푝푙.100. The total internal work is very much dependent on when the beam reaches failure
since it represents the total area under the load-deflection diagram. Beam 8 and 18 has the highest values
of 푢푓 푎푖푙, leading also to the highest values of 푊푡표푡.
Table 8.27 Values of internal work at different load levels.
Beam nr 푊푡표푡
[Nm]
푊푝푙.100%
[Nm]
푊푝푙.95%
[Nm]
푊푝푙.90%
[Nm]
푊푝푙.85%
[Nm]
푊푝푙.80%
[Nm]
7 516 263 322 394 419 445
8 613 196 260 353 470 529
9 565 230 359 458 494 515
16 552 179 260 304 369 415
17 584 238 288 328 335 394
18 677 245 372 517 587 594
Average 585 225 310 392 446 482
112 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	112 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	112 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 130 of 237 --

8.4.3 Strain Fields of Undamaged Beams
Table 8.28 shows the strain fields of the undamaged beams at 95 % of the maximum load, on the
descending branch of the load-deflection diagram. At this point, all of the major cracks have appeared.
The beams show a similar behaviour and bending cracks in the bottom of the beam are present in all
cases. The limits of the colorscale are discussed in Section 8.3.5. The reason why the edges of the beams
are not straight is because the DIC had problems finding a clear pattern along the edges. However, this
does not affect the result.
Table 8.28 Strain field visualization for the undamaged beams at 95 % of the maximum load.
Deflection /
Time Strain fields of undamaged beams
Beam 7
푢95% = 28.3 mm
퐹95% = 16.0 kN
Beam 8
푢95% = 23.7 mm
퐹95% = 15.2 kN
Beam 9
푢95% = 29.4 mm
퐹95% = 15.3 kN
Beam 16
푢95% = 24.9 mm
퐹95% = 14.6 kN
Beam 17
푢95% = 25.4 mm
퐹95% = 15.6 kN
Beam 18
푢95% = 30.5 mm
퐹95% = 15.5 kN
Principal strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 113	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 113	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 113

-- 131 of 237 --

8.4.4 Series-1
Beams 4, 5 and 6 were subjected to four drops from a weight of 10 kg from 2.5 m prior to its static
loading to failure. The load-deflection curves from the tests can be seen in Figure 8.27. Some key
parameters can be seen in Table 8.29 and the internal work can be seen in Table 8.30.
First of all, all the damaged beams are assumed to have already utilized their full capacity as soon as the
load capacity reaches 5 kN on the descending branch of the load-deflection diagram. Looking back at
Figure 8.25, it can be observed that 5 kN is the lowest load which a beam with only one reinforcement
bar left can carry, which in this case is Beam 16. This decision was made to be able to compare the
different dynamic test results with each other, since the beams which does not experience rupture of
reinforcement carries a low amount of load up to very high deflections. This will be further discussed in
Section 8.4.8.
Hence, 푘푑푎푚 is the stiffness of the damaged beam, which has been measured in the same way as 푘퐼퐼.푚
for the undamaged beams according to Appendix I. One should note that the rotational capacities are
not presented for the damaged beams. This is because the methodology described in Section 3.4.2 is
not valid since the maximum load for the damaged beams in all the series is lower than 퐹80% for the
undamaged beams. It is therefore of interest to compare the internal work of the damaged beams to the
undamaged beams instead. It can be seen as a measurement on how much energy the damaged structure
still can absorb before failure. The internal work for the damaged beams were calculated according to
Appendix J as well and in this case 푊100% corresponds to the internal work at 퐹100% for the damaged
beam.
In Figure 8.27 it can be seen that Beam 4 never reaches a capacity of 5 kN and it is therefore assumed to
have utilized its full capacity before the static testing began. No results from Beam 4 will therefore be
presented. There is also a big difference between Beam 5 and 6, where Beam 6 shows a significantly
larger amount of remaining internal work. Beam 6 experienced crushing of concrete while it is hard to
see from the test results which failure mode Beam 5 had. The reason for the big difference observed
for beam 4 to 6 is the number of drops and the uncertainties it causes. If there is local crushing of the
concrete in the area where the drop-weight hits, the damage will increase rapidly during the next impact.
The data presented from Series-1 should therefore be used with care and a larger amount of beams should
be tested to see if the result follows any pattern.
114 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	114 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	114 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 132 of 237 --

0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Beam 4
Beam 5
Beam 6
F
u
Figure 8.27 Load-deflection relationship for Series-1.
Table 8.29 Summary of key parameters for Series-1
Beam nr 퐹100%
[kN]
푢푓 푎푖푙
[mm]
푘푑푎푚
[kN/mm]
4 - - -
5 10.8 25.5 1.04
6 11.9 54.1 1.31
Average 11.4 39.8 1.18
Table 8.30 Summary of internal work for Series-1.
Beam nr 푊푡표푡
[Nm]
푊푝푙.100%
[Nm]
푊푝푙.95%
[Nm]
푊푝푙.90%
[Nm]
푊푝푙.85%
[Nm]
푊푝푙.80%
[Nm]
4 - - - - - -
5 161 5 31 46 53 60
6 527 63 323 345 370 393
Average 344 34 177 196 212 227
When comparing the damaged beams to the envelope of the undamaged beams, see Figure 8.28, it can
be seen that the initial deflection varies a lot and that any pattern between the beams is hard to see.
This large variation might be, as mentioned before, because of the uncertainties that numerous drops
brings. Beam 5 is failing at lower deflections than the average value of the undamaged beams, while
Beam 6 shows a very satisfactory capacity and fails at very high deflections. The initial deflection was
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 115	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 115	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 115

-- 133 of 237 --

measured in GOM Correlate 2017 right before the static testing began and the method used is described
in Appendix F.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50 	60 	70
Load,
 F [kN]
Deflection, u [mm]
Max
Average
Min
Beam 4
Beam 5
Beam 6
F
u
Figure 8.28 Load-deflection relationship for Series-1 together with envelope of undamaged beams.
The average data from the undamaged beams with the average data from Series-1 are presented in
Table 8.31, where the proportion of the damaged beams compared to the undamaged beams are presented
in percent, i.e the value from the damaged beams is divided by the value from the undamaged beams.
Table 8.31 Comparison of data from undamaged beams and Series-1, average values.
Beam type 퐹푚푎푥
[kN]
푊푡표푡
[Nm]
푘퐼퐼.푚
(푘푑푎푚)
[kN/mm]
푘3
(푘푑푎푚)
[kN/mm]
Undamaged 16.2 585 2.20 2.34
Series-1 11.4 344 (1.18) (1.18)
Proportion
[%] 70 59 54 50
116 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	116 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	116 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 134 of 237 --

8.4.5 Series-2
Beams 1, 2 and 3 were subjected to two drops from a weight of 10 kg from 5 m. The load-deflection
curve can be seen in Figure 8.29 and some key parameters can be seen in Table 8.32 and the internal
work can be seen in Table 8.33.
It can be seen that Beam 2 does not reach the required capacity of 5 kN and is therefore not included
in the comparison. Otherwise, Beam 1 and 3 shows similar behaviour. Beam 3 experienced rupture of
reinforcement while Beam 1 reached failure due to crushing of concrete.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Beam 1
Beam 2
Beam 3
F
u
Figure 8.29 Load-deflection relationship for Series-2.
Table 8.32 Summary of key parameters for Series-2.
Beam nr 퐹100%
[kN]
푢푓 푎푖푙
[mm]
푘푑푎푚
[kN/mm]
1 9.6 24.8 1.03
2 - - -
3 8.9 19.6 0.91
Average 9.3 22 0.97
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 117	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 117	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 117

-- 135 of 237 --

Table 8.33 Summary of internal work for Series-2.
Beam nr 푊푡표푡
[Nm]
푊푝푙.100%
[Nm]
푊푝푙.95%
[Nm]
푊푝푙.90%
[Nm]
푊푝푙.85%
[Nm]
푊푝푙.80%
[Nm]
1 153 12 23 42 54 65
2 - - - - - -
3 122 10 32 70 86 93
Average 138 11 28 56 70 79
When combining the damaged beams to the envelope of the undamaged beams, see Figure 8.30, it can
be seen that the initial deflection is similar between the beams and that beam 1 and 3 follows a similar
pattern. They are however not carrying any significant amount of load and reaches failure at lower
deflections than the average value of the undamaged beams.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50 	60 	70
Load,
 F [kN]
Deflection, u [mm]
Max
Average
Min
Beam 1
Beam 2
Beam 3
F
u
Figure 8.30 Load-deflection relationship for Series-2 together with envelope of undamaged beams.
The average data from the undamaged beams with the average data from Series-2 are presented in
Table 8.34, where the proportion of the damaged beams compared to the undamaged beams are presented
in percent, i.e the value from the damaged beams is divided by the value from the undamaged beams.
118 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	118 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	118 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 136 of 237 --

Table 8.34 Comparison of data from undamaged beams and Series-2, average values.
Beam type 퐹푚푎푥
[kN]
푊푡표푡
[Nm]
푘퐼퐼.푚
(푘푑푎푚)
[kn/mm]
푘3
(푘푑푎푚)
[kn/mm]
Undamaged 16.2 585 2.20 2.34
Series-2 9.3 138 (0.97) (0.97)
Proportion
[%] 57 24 44 41
8.4.6 Series-3
Beams 13, 14 and 15 were subjected to two drops from a weight of 20 kg from 2.5 m. The load-deflection
curve can be seen in Figure 8.31, some key parameters can be seen in Table 8.35 and the internal work
can be seen in Table 8.36.
It can be observed that the beams show a similar behaviour up the their ultimate capacity. Beam 13
and 14 had rupture of reinforcement as failure mode while Beam 15 reached failure due to crushing of
concrete. Beam 14 had a significant lower 푢푓 푎푖푙 than the other beams and the reason for this is unknown.
Due to the early rupture of Beam 14 it has significantly lower 푊푡표푡 than the other beams. Beam 13 has
very high 푊푝푙.% at high percentages since the curve has a very long plateau where the ultimate capacity
is utilized.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Beam 13
Beam 14
Beam 15
F
u
Figure 8.31 Load-deflection relationship for Series-3.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 119	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 119	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 119

-- 137 of 237 --

Table 8.35 Summary of key parameters for Series-3.
Beam nr 퐹100%
[kN]
푢푓 푎푖푙
[mm]
푘푑푎푚
[kN/mm]
13 12.0 33.8 1.23
14 12.0 20.0 1.25
15 11.2 30.8 1.11
Average 11.7 28.2 1.20
Table 8.36 Summary of internal work for Series-3.
Beam nr 푊푡표푡
[Nm]
푊푝푙.100%
[Nm]
푊푝푙.95%
[Nm]
푊푝푙.90%
[Nm]
푊푝푙.85%
[Nm]
푊푝푙.80%
[Nm]
13 317 121 200 205 211 216
14 173 26 79 89 119 133
15 229 9 74 93 108 118
Average 240 52 118 129 146 156
When comparing the damaged beams to the envelope of the undamaged beams, see figure 8.32, it can
be seen that the initial deflection of the beams are very similar. All of the beams are failing at higher
deflections compared to the average value of the undamaged beams.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50 	60 	70
Load,
 F [kN]
Deflection, u [mm]
Max
Average
Min
Beam 13
Beam 14
Beam 15
F
u
Figure 8.32 Load-deflection relationship for Series-3 together with envelope of undamaged beams.
The average data from the undamaged beams with the average data from Series-3 are presented in
120 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	120 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	120 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 138 of 237 --

Table 8.37, where the proportion of the damaged beams compared to the undamaged beams are presented
in percent, i.e the value from the damaged beams is divided by the value from the undamaged beams.
Table 8.37 Comparison of data from undamaged beams and Series-3, average values.
Beam type 퐹푚푎푥
[kN]
푊푡표푡
[Nm]
푘퐼퐼.푚
(푘푑푎푚)
[kn/mm]
푘3
(푘푑푎푚)
[kn/mm]
Undamaged 16.2 585 2.20 2.34
Series-3 11.7 240 (1.20) (1.20)
Proportion
[%] 72 41 55 51
8.4.7 Series-4
Beams 10, 11 and 12 were subjected to a single drop from a weight of 20 kg from 5 m. The load-deflection
curve can be seen in Figure 8.33, some key parameters can be seen in Table 8.38 and the internal work
can be seen in Table 8.39.
It can be observed that the beams have a very similar behaviour up to their ultimate capacity, from which
Beam 11 differs from the other beams. Beam 10 and 12 has almost a horizontal plateau at the ultimate
capacity while Beam 11 has steeper decrease in load capacity with increasing deflection. This is because
Beam 11 failed due to crushing of concrete while Beam 10 and 12 failed due to rupture of reinforcement.
It can be seen in Table 8.39 that the total internal work is slightly lower for Beam 11 but the internal
work at different load levels is much lower, this is also due to the fact that the curve lack a clear load
plateau.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 121	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 121	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 121

-- 139 of 237 --

0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Beam 10
Beam 11
Beam 12
F
u
Figure 8.33 Load-deflection relationship for Series-4.
Table 8.38 Summary of key parameters for Series-4.
Beam nr 퐹100%
[kN]
푢푓 푎푖푙
[mm]
푘푑푎푚
[kN/mm]
10 11.9 32.5 1.12
11 11.6 40.1 1.25
12 12.4 27.1 1.30
Average 12 33.2 1.22
Table 8.39 Summary of internal work for Series-4.
Beam nr 푊푡표푡
[Nm]
푊푝푙.100%
[Nm]
푊푝푙.95%
[Nm]
푊푝푙.90%
[Nm]
푊푝푙.85%
[Nm]
푊푝푙.80%
[Nm]
10 299 28 147 181 189 207
11 270 13 33 54 100 121
12 282 36 167 205 221 228
Average 284 26 117 147 170 185
When comparing the beams from Series-4 with the envelope of the undamaged beams, see Figure 8.34,
it can be seen that the initial deflection is similar for the beams, except for beam 11 which is somewhat
lower. All of the beams reaches failure at higher deflections than the average value of the undamaged
beams.
122 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	122 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	122 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 140 of 237 --

0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50 	60 	70
Load,
 F [kN]
Deflection, u [mm]
Max
Average
Min
Beam 10
Beam 11
Beam 12
F
u
Figure 8.34 Load-deflection relationship for Series-4 together with envelope from undamaged beams.
The average data from the undamaged beams with the average data from Series-4 are presented in
Table 8.40, where the proportion of the damaged beams compared to the undamaged beams are presented
in percent, i.e the value from the damaged beams is divided by the value from the undamaged beams.
Table 8.40 Comparison of data from undamaged beams and Series-4, average values.
Beam type 퐹푚푎푥
[kN]
푊푡표푡
[Nm]
푘퐼퐼.푚
(푘푑푎푚)
[kn/mm]
푘3
(푘푑푎푚)
[kn/mm]
Undamaged 16.2 585 2.20 2.34
Series-4 12.0 284 (1.22) (1.22)
Proportion
[%] 74 49 55 52
8.4.8 Comparison of Series-1-4
All of the beams from Series-1-4 is presented in Figure 8.35 where it can be seen that the beams show a
similar behaviour up to their ultimate capacity. From that point they start to differ a lot. It can also be
seen here that the beams with the highest and lowest residual capacity, Beam 6 and 4 respectively, were
from Series-1. When looking at the average values for the series, which is presented in Table 8.41, it can
be seen that Series-2 show the smallest residual capacity regarding ultimate load and deflection. Series-2
also has the lowest stiffness which indicates that it was severely damaged. Series-4 shows the highest
ultimate load capacity as well as the largest ultimate deflection. Both of the beams that did not reach the
required capacity of 5 kN were subjected to more than one impact. Based on that and the previous stated
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 123	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 123	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 123

-- 141 of 237 --

information, a conclusion that numerous drops are undesirable can be made. Observations made during
the tests were that the beams subjected to numerous drops were subjected to crushing of concrete in the
compressive layer of the beam, which in turn leads to a lower capacity. In some cases, parts of the beam
in the tensile zone loosened from the beam and fell to the floor during the last impact, something that
affected the capacity as well. These problems is something that the current 2DOF for example does not
take into account and the occurrence of it seems to be very random and based on our results, hard to
predict.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Beam 1
Beam 2
Beam 3
Beam 4
Beam 5
Beam 6
Beam 10
Beam 11
Beam 12
Beam 13
Beam 14
Beam 15
F
u
Figure 8.35 Load-deflection relationship for Series-1-4.
Table 8.41 Summary of key parameters for Series-1-4.
Series 퐹100%
[kN]
푢푓 푎푖푙
[mm]
푘푑푎푚
[kN/mm]
Series-1 11.4 39.8 1.18
Series-2 9.3 22 0.97
Series-3 11.7 28.2 1.20
Series-4 12.0 33.2 1.22
In Figure 8.36 all the damaged beams are presented with its initial deflection, i.e the plastic deformation
from the dynamic testing. The beams from Series-1 and Series-2, which are black and green, show a
significantly lower initial deflection compared to Series-3 and Series-4, which are blue and orange. This
can be coupled to the drop-weight since they were subjected to the same weight. The height of the drop
does not seem to affect the results substantially and a conclusion that the weight of the drop-weight is
the dominant factor can be made. It can also be seen that even though the beams from Series-3 and -4
124 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	124 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	124 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 142 of 237 --

had the largest plastic deformations from the dynamic testing, they also had larger residual load capacity
compared to Series-1 and -2. The low residual capacity of Series-1 and -2 is the significant crushing of
concrete that takes place where the drop-weight hits the beam.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50 	60 	70
Load,
 F [kN]
Deflection, u [mm]
Beam 1
Beam 2
Beam 3
Beam 4
Beam 5
Beam 6
Beam 10
Beam 11
Beam 12
Beam 13
Beam 14
Beam 15
F
u
Figure 8.36 Load-deflection relationship for Series-1-4, including initial deflection.
When analysing the internal work performed by the damaged beams it is more difficult to draw any
conclusions. The failure mode has a large influence on the internal work and the decision used here to
assume that the capacity is utilized as soon as the beams reaches 5 kN on the descending branch, will
also affect the result. If all of the data from the beams that experienced crushing of concrete would be
used, they would end up with very large total internal work. What can be seen here is that Series-2 has
the lowest values of internal work, both total and at different load levels. The results from Series-3 and
Series-4 are similar and Series-1 shows the largest values. The uncertainties described before regarding
the data from Series-1 should be kept in mind.
Table 8.42 Summary of internal work for Series-1-4.
Series 푊푡표푡
[Nm]
푊푝푙.100%
[Nm]
푊푝푙.95%
[Nm]
푊푝푙.90%
[Nm]
푊푝푙.85%
[Nm]
푊푝푙.80%
[Nm]
Series-1 344 34 177 196 212 227
Series-2 138 11 28 56 70 79
Series-3 240 52 118 129 146 156
Series-4 284 26 117 147 170 185
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 125	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 125	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 125

-- 143 of 237 --

Table 8.43 presents a summary the proportions of the damaged beams compared to the undamaged beams,
presented in percent. The stiffness of the damaged beams corresponds to roughly half the stiffness’s
푘퐼퐼.푚 and 푘3, where Series-2 has some lower values. Series-3 and Series-4 show very similar values for
all the parameters while Series-1 and Series-2 differ a lot.
Table 8.43 Comparison of data from undamaged beams and Series-1-4, average values.
Series 퐹푚푎푥
[%]
푊푡표푡
[%]
푘퐼퐼.푚
(푘푑푎푚)
[%]
푘3
(푘푑푎푚)
[%]
Series-1 70 59 54 50
Series-2 57 24 44 41
Series-3 72 41 55 51
Series-4 74 49 55 52
126 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	126 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	126 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 144 of 237 --

9 Finite Element Modelling in LS-DYNA
9.1 LS-DYNA Theory
9.1.1 Introduction
The software LS-DYNA, developed by the Livermore Software Technology Corporation (LSTC), were
also used to predict the results from the tests performed. The model used within this thesis was developed
by Munther and Runebrant (2018) and more detailed information about the theory behind the program
and the model can be found in that report or in the manuals provided by LSTC, namely (LSTC, 2014). It
is hard to model numerous drops on the same beam and therefore only the first drop was modeled with
the program. The keyword file (k-file) used can be seen in Appendix M.
9.1.2 Model and Elements
The beam, drop-weight and supports were modelled as solid parts and the supports were locked in both
x- y- and z-direction. The drop-weight was located 1 mm above the beam and prescribed with an initial
velocity, depending on which load case that was active. The beam is not tied to the supports, meaning
that it could move after impact, resulting in a behaviour which is representative to the real conditions.
The model can be see in Figure 9.1.
Figure 9.1 LS-DYNA model.
The beam were modelled using solid 4 node tetrahedron elements with one integration point since it
was concluded by Lozano and Makdesi (2017) to correspond better to the experimental results, and the
drop-weight and the supports are modelled with solid hexahedron elements with constant stress. The
reinforcement was modelled as beam elements with one integration point, with bond slip included.
9.1.3 Material Model
9.1.3.1 Concrete
The material model used is called Concrete Damage Plastic Model 2, CDPM2, and was developed by
Grassl, et al. (2013) as an extension to the first model, CDPM presented by (Grassl and Jirasek, 2006).
This model is called 273-CONCRETE_DAMAGE_PLASTIC_MODEL.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 127	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 127	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 127

-- 145 of 237 --

The recommendations provided in Grassl (2016) was used when the material parameters were chosen
and a summary of the chosen parameters can be seen in Table 9.1, the parameters now shown are set to
the default values. This is one of the few changes that was made in the model provided by Munther and
Runebrant (2018) since the intention in this project was to use the material properties evaluated from the
tests.
The density, Young’s modulus, tensile strength and compressive strength were obtained from the test
results. Note, though, that the tensile strength was set to the value calculated from the compressive
strength, as described in Section 7.1. The material was set to not be strain rate dependent and therefore
the value of the hardening parameter was set to 0.01 in accordance with the recommendation of
(Grassl, 2016). The eccentricity parameter was calculated as
퐸퐶퐶 = 1 + 휀
2 − 휀 (9.1)
where
휀 = 푓푡
 푓 2
푏푐 − 푓 2
푐

푓푏푐
 푓 2
푐 − 푓 2
푡
 (9.2)
and
푓푏푐 = 1.16푓푐 (9.3)
The tensile threshold value is based on the materials fracture energy and tensile strength and in
Grassl (2016) it is also recommended for tetrahedral meshes to reduce the value by a factor. The parameter
can be calculated as
푊 퐹 = 0.564.444퐺퐹
푓푡
(9.4)
since a bilinear damage formulation is used. EFC is a parameter which controls the compressive damage
softening branch and has a default value of 0.0001. The model had problems converging when this value
was used and these convergence problems occur due to local compressive failure at the point where
the drop-weight hits the beam (Grassl, et al. 2018). If this problem occur Grassl, et al. (2018) gives
recommendations of using a ten times larger value, namely 0.001, to make the model converge. This
was also observed by Lozano and Makdesi (2017) during their work. This recommendation was applied
in the model and no further convergence problems occurred.
128 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	128 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	128 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 146 of 237 --

Table 9.1 Summary of indata for material model CDPM2 which is material no.273 in LS-DYNA.
Name in LS-DYNA Description Value
RO Density 2384 kg/m3
E Young’s modulus 32.53 GPa
ECC Eccentricity parameter 0.5173
FT Tensile strength 2.821 MPa
FC Compressive strength 36.83 MPa
HP Hardening parameter 0.01
WF Tensile threshold 0.122 mm
STRFLG Strain rate flag 0
EFC Softening branch parameter 0.001
9.1.3.2 Reinforcement
The reinforcement used in the model was the multilinear model described in (Munther and
Runebrant, 2018). This choice was made to make the model as close to the reality as possible. The real
properties of the steel was used.
9.1.3.3 Supports and Drop-weight
The supports and the drop-weight were modelled as linear elastic, which is suitable if the strains are
expected to be small (LSTC, 2014). The density of the drop-weight was changed instead of the dimensions
when the weight is increased from 10 to 20 kg. This choice was made since it is very time consuming to
change the dimensions of the model compared to changing the density and it was concluded that the size
of the drop-weight was not an important parameter.
9.1.4 Interaction between Reinforcement and Concrete
To be able to simulate the real behaviour of the beam better, a bond-slip relation between the concrete
and reinforcement was included in the model. A simplified approach to model the bond-slip is presented
in Munther and Runebrant (2018) and is described by defining the bond 휏푏 which is dependent on the
slip 푠 as
휏푏(푠) =
⎧
⎪
⎨
⎪
⎩
휏푚푎푥
 푠
푠1
0.4
if 푠 < 푠1
휏푚푎푥 if 푠 ≥ 푠1
(9.5)
where 푠1 is the limit from where the bond is assumed to be constant. The value of 푠1 can according to
CEB-FIP (2012) be assumed as 1 mm and 휏푚푎푥 can be calculated as
휏푚푎푥 = 2.5√푓푐푚 (9.6)
When the measured value of 푓푐푚 = 36.8 MPa was used, the maximum bond value was determined as
휏푚푎푥 = 15.2 MPa.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 129	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 129	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 129

-- 147 of 237 --

9.2 LS-DYNA Predictions
9.2.1 Introduction
The results from LS-DYNA are presented within this section. Firstly, the deflection over time at midpoint
is presented for all four loading conditions, namely 10 kg or 20 kg drop-weight from 2.5 m and 5.0 m.
Secondly, the response of the whole beam was studied by looking at the deflection over length. Lastly,
the crack pattern was studied by looking at the maximum principal strain over the first two ms and at the
maximum deflection. These results will be compared to the experimental data in Chapter 10.
The intention when performing the analyses was to use the material data gathered during the experiments.
But, for some unidentified reason, the analysis of the conditions with a 20 kg drop-weight was terminated
after such a short while that the results was unusable. It was found that a solution was to use a lower
mean tensile strength 푓푐푡푚 than the measured value, which was 4.7 MPa. Instead a theoretical value,
based on the compressive strength, was used. This gave 푓푐푡푚 = 2.8 MPa. It was still possible to run the
analysis with the 10 kg drop-weight and a comparison between the measured and theoretical values can
be seen in Figure 9.2. It is clear that the change in tensile strength does not influence the maximum
deflection substantially.
0
5
10
15
20
25
30
0 	5 	10 	15 	20
Deflection,
 	u 	[mm]
Time, t [ms]
f.ct = 4.7 MPa
f.ct = 2.8 MPa
v
u
(a) m = 10 kg, h = 2.5 m.
0
5
10
15
20
25
30
0 	5 	10 	15 	20
Deflection,
 	u 	[mm]
Time, t [ms]
 (b) m = 10 kg, h = 5.0 m.
Figure 9.2 Graphs showing the difference in response if 푓푐푡푚 = 4.7 MPa (measured value) or
푓푐푡푚 = 2.8 (theoretical value) is used in the analysis.
9.2.2 Midpoint Deflection over Time
The predicted deflection-time relation for all four testing conditions can be seen in Figure 9.3. The
deflection was extracted by choosing the center most point, both in length and height direction, and
plotting the vertical deflection over time. The maximum deflections are summarized in Table 9.2.
130 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	130 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	130 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 148 of 237 --

Table 9.2 Maximum deflections from LS-DYNA predictions.
Conditions Maximum deflection, 푢푚푎푥 [mm]
m = 10 kg, h = 2.5 m 13.1
m = 10 kg, h = 5.0 m 24.5
m = 20 kg, h = 2.5 m 30.0
m = 20 kg, h = 5.0 m 56.9
0
10
20
30
40
50
60
0 5 10 15 20
Deflection,
 u [mm]
Time, t [ms]
m = 20 kg; h = 5.0 m
m = 20 kg; h = 2.5 m
m = 10 kg; h = 5.0 m
m = 10 kg; h = 2.5 m v
u
Figure 9.3 Average midpoint deflection for all series in the impact load testing.
9.2.3 Deflection-length Relationship
Another interesting result from the FE-modelling is the deflection over beam length. This was extracted
by creating a longitudinal path in the model, from were the z-displacements for all nodes were plotted.
This was done for Series-1 and Series-4 and the results can be seen in Figures 9.4 and 9.5.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 131	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 131	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 131

-- 149 of 237 --

-3
-2
-1
0
1
2
3
4
5
6
7
8
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms
0.6 ms
1.0 ms
1.4 ms
2.0 ms
v
u
Figure 9.4 Predicted deflection-length relationship for Series-1.
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
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms
0.6 ms
1.0 ms
1.4 ms
2.0 ms
v
u
Figure 9.5 Predicted deflection-length relationship for Series-4.
The relative deformed shape at different times is illustrated in Figure 9.6 and 9.7. The values of the
deflections in these figures were normalized to the maximum deflection at all studied stages. It can be
seen that the beam shows a similar response in both cases.
132 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	132 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	132 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 150 of 237 --

-0.2
0.0
0.2
0.4
0.6
0.8
1.0
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms
0.6 ms
1.0 ms
1.4 ms
2.0 ms
v
u
Figure 9.6 Predicted relative deformed shape for Series-1.
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms
0.6 ms
1.0 ms
1.4 ms
2.0 ms
v
u
Figure 9.7 Predicted relative deformed shape for Series-4.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 133	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 133	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 133

-- 151 of 237 --

9.2.4 Strain Fields
Strain fields for the different load cases can be seen in Table 9.3-9.6. The strains and deflections are
shown at the same time-steps as in Section 8.3.5 as well as the strains at maximum deflection. The limits
of the colorscale for the principal strain was determined according to the cracking strain calculated as
3.76 % in Lozano and Makdesi (2017), which approximately corresponds to a fully opened crack. The
strain concentrations that is visible in the graphs indicates that a crack is formed.
When subjected to a drop from 2.5 m from a 10 kg drop-weight it can be seen that no extensive damage
takes place where the weight hits the beam. Both shear cracks and bending cracks are formed from
the bottom of the beam as well as small bending cracks in the top of the beam during the impact. A
maximum deflection of 13.1 mm is obtained after 7.0 ms.
Table 9.3 Strain field visualization from LS-DYNA for m = 10 kg, h = 2.5 m conditions.
Deflection /
Time m = 10 kg, h = 2.5 m
푡 = 0.2 ms
푢 = 0.7 mm
푡 = 0.4 ms
푢 = 1.5 mm
푡 = 0.6 ms
푢 = 2.3 mm
푡 = 1.0 ms
푢 = 3.6 mm
푡 = 2.0 ms
푢 = 6.5 mm
푡 = 7.0 ms
푢 = 13.1 mm
Principal strain
[%]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
134 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	134 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	134 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 152 of 237 --

When the beam was subjected to a drop from 5 m from a 10 kg drop-weight it can be seen that the
behaviour looks similar as the previous case (10 kg from 2.5 m), with the difference that the cracks is
more distinct. Some local damage can also be observed where the drop-weight hits the beam, which
means that crushing of concrete is to be expected. A maximum deflection of 24.5 mm is obtained after
9.0 ms, which is almost twice as large as in the first case but happens only 2.0 ms later. By looking at the
deflection at different time-steps it can be seen that the displacement increases more rapidly in this case
compared to the previous one.
Table 9.4 Strain field visualization from LS-DYNA for m = 10 kg, h = 5.0 m conditions.
Deflection /
Time m = 10 kg, h = 5.0 m
푡 = 0.2 ms
푢 = 1.3 mm
푡 = 0.4 ms
푢 = 2.5 mm
푡 = 0.6 ms
푢 = 3.6 mm
푡 = 1.0 ms
푢 = 5.6 mm
푡 = 2.0 ms
푢 = 9.9 mm
푡 = 9.0 ms
푢 = 24.5 mm
Principal strain
[%]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 135	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 135	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 135

-- 153 of 237 --

When the beam was subjected to a drop from 2.5 m from a 20 kg drop-weight the crack propagation
looks a lot like the previous case (10 kg from 5 m), with the difference that the cracks propagates a
bit slower in this case. This can of course be coupled to that the displacement increases more slowly
compared to the previous case. The same amount of local damage as in the previous case in the top of
the beam can be observed as well. A maximum deflection of 30.0 mm is obtained after 11.8 ms.
Table 9.5 Strain field visualization from LS-DYNA for m = 20 kg, h = 2.5 m conditions.
Deflection /
Time m = 20 kg, h = 2.5 m
푡 = 0.2 ms
푢 = 0.7 mm
푡 = 0.4 ms
푢 = 1.8 mm
푡 = 0.6 ms
푢 = 2.8 mm
푡 = 1.0 ms
푢 = 4.8 mm
푡 = 2.0 ms
푢 = 9.0 mm
푡 = 11.8 ms
푢 = 30.0 mm
Principal strain
[%]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
136 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	136 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	136 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 154 of 237 --

When the beam was subjected to a drop from 5 m from a 20 kg drop-weight the cracks are more
concentrated to the centre of the beam and the magnitude of them increase. A large number of bending
cracks and shear cracks are mixed in the bottom centre of the beam and the cracks propagate faster
compared to the other cases as well as the deflection. A large local damage can be observed where
the drop-weight hit the beam, which means that crushing of concrete is to be expected. A maximum
deflection of 56.9 mm is obtained after 16 ms.
Table 9.6 Strain field visualization from LS-DYNA for m = 20 kg, h = 5.0 m conditions.
Deflection /
Time m = 20 kg, h = 5.0 m
푡 = 0.2 ms
푢 = 1.35 mm
푡 = 0.4 ms
푢 = 2.9 mm
푡 = 0.6 ms
푢 = 4.4 mm
푡 = 1.0 ms
푢 = 7.1 mm
푡 = 2.0 ms
푢 = 13.4 mm
푡 = 16.0 ms
푢 = 56.9 mm
Principal strain
[%]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 137	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 137	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 137

-- 155 of 237 --

10 Comparison with Experiments
10.1 Introduction
In this section a verification of the predictions made with hand calculations, 2DOF and LS-DYNA are
presented. Comments about the difference between the predictions and the results obtained during the
experiments can be found within this section. See Chapter 8 for comments concerning deviations in the
test results.
10.2 Verification of Load Capacity Predictions
10.2.1 General
Figure 10.1 presents the envelope of the load-deflection relationship for the undamaged beams, together
with the predicted relationship obtained from hand calculations. The predicted ultimate load capacity is
lower than the one obtained from the tests for both steel strengths, mentioned in Section 7.2. There is
however a good correspondence in state I and II where the predicted values only overestimates the real
behaviour a little. The reason for the underestimation of the ultimate load capacity is unknown. In the
hand calculations both layers of reinforcement are considered which provides an extra 4.6 % to the load
capacity, see Section 7.2,. The real position of the reinforcement as well as the real material properties,
which is described in Section 8.2, are used in the hand calculations. However, the self-weight of the
beam is not included in the calculations, since this effect is assumed to be small enough to be ignored.
Both the predicted and the measured load capacities are presented in Table 10.2.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Max
Average
Min
Predicted value fy=513 MPa
Predicted value fy=623 MPa
F
u
Figure 10.1 Predicted load-deflection relationship for two two steel strengths together with envelope
for the undamaged beams.
138 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	138 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	138 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 156 of 237 --

10.2.2 Verification using Internal Work
The internal work, calculated according to Appendix J, can be used to determine an equivalent load that
the beams can carry, at different percentages of the ultimate load, and can be expressed as
퐹푒푞.% = 푊푝푙.%
푢푝푙.%
(10.1)
It can be seen as a measurement on how much of the load the beams can carry after it has reached its
ultimate value. In design, the curve is assumed to be horizontal at the ultimate value, see Figure 10.1
where the calculated equivalent load can be seen together with the predicted values and the average
envelope from the tests. Table 10.1 shows a summary of the equivalent loads for all the undamaged
beams and Table 10.2 shows a comparison with the predicted values and the value obtained from the
tests. Figure 10.2 shows the predicted load-deflection relationship together with the mean value of the
equivalent load-deflection relationship.
It can be seen that the average equivalent load 퐹푒푞 is 15.0 - 15.5 kN. This is higher than the load capacity
퐹푢 = 15.2 kN obtained with high steel strength, down to 85 %. By looking at Table 10.2 it is safe to say
that it could have been assumed that 푢푝푙.85% can be utilized when designing the beams. It can also be
seen that the values of 퐹푒푞.95% sometimes is higher than 퐹푒푞.100% which means that with regard to internal
energy, the beams has a higher load capacity at 95% than at the ultimate load. Beam 16, which showed a
lower capacity in general, also shows a lower capacity here.
Table 10.1 Summary of equivalent load 퐹푒푞.% based on internal work and plastic deflection.
Beam nr 퐹푒푞.100%
[kN]
퐹푒푞.95%
[kN]
퐹푒푞.90%
[kN]
퐹푒푞.85%
[kN]
퐹푒푞.80%
[kN]
7 16.0 15.9 15.8 15.8 15.6
8 15.2 15.3 15.1 14.8 14.7
9 15.6 15.6 15.5 15.3 15.2
16 14.6 14.8 14.7 14.5 14.2
17 15.7 15.7 15.6 15.5 15.2
18 15.7 15.8 15.6 15.4 15.4
Average 15.5 15.5 15.4 15.2 15.1
Table 10.2 Average equivalent loads together with predicted values and test results.
퐹푒푞.100%
[kN]
퐹푒푞.95%
[kN]
퐹푒푞.90%
[kN]
퐹푒푞.85%
[kN]
퐹푒푞.80%
[kN]
퐹푢
fy = 513 MPa
[kN]
퐹푢
fy = 623 MPa
[kN]
퐹100%
from test
[kN]
15.5 15.5 15.4 15.2 15.1 12.7 15.2 16.2
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 139	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 139	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 139

-- 157 of 237 --

0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Average envelope
Predicted value fy=513 MPa
Predicted value fy=623 MPa
Equivalent Load
F
u
State II stiffness
Figure 10.2 Equivalent load-deflection relationship together with predicted relationship and envelope.
10.3 Verification of Rotational Capacity Predictions
Figure 10.3 presents the calculated plastic rotation capacity for all the methods described in Section 3.4,
together with the calculated values for the undamaged beams, for different percentages of the ultimate
load. As mentioned in Section 3.4, the method from Betonghandboken (ABC-method) and Tamminen
should correspond to 휃푝푙,95% while the other methods should correspond to 휃푝푙,100%.
It can be seen that all of the methods except Bk25 and Tamminen underestimates the plastic rotation
capacity significantly. The reason for this underestimation could be the loading condition which was
four-point loading. In the experiments made by Lozano and Makdesi (2017), which used a similar beam
with the only difference that three-point loading were used instead, the rotational capacity 휃푝푙,100% were
calculated to be 22 mrad. This would correspond much better to the calculated capacities from the rest
of the methods. However, it is difficult to describe why the methods presented in Arbulu (2006) gives
the results they do since the information provided there is sparse, but the fact that 22 mrad is closer to
the values obtained indicates that these methods works well for three-point loaded structures.
The method provided by Bk25 generates a result between 휃푝푙,90% and 휃푝푙,95%. The reason why this method
provides a more reasonable result could be that it is developed to work on impulse loaded structures, which
in this case is an air-blast, resulting in a uniformly distributed load. Four-point loading is somewhere
between three-point loading and a uniformly distributed load. The method provided by Tamminen
generates a result equivalent with 휃푝푙,95%. The difference between this method and Betonghandboken is
that Tamminen takes the height of the member into account. If the size of the member is the factor that
makes almost all of the methods underestimate the capacity remains untold and further investigations
should be made, which is not in the scope of this report.
140 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	140 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	140 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 158 of 237 --

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
Rotational capacity,
 ϕpl 	[mrad]
 	80%
85%
90%
95%
100%
Figure 10.3 Predicted plastic rotation capacity together with the capacity obtained from test results.
10.4 Verification of Stiffness Predictions
Table 10.3 presents the average values of the stiffness’s measured from the static testing of the undamaged
beams, which are described in Section 8.4.2, together with the predicted state II stiffness 푘퐼퐼 from
Section 7.2.3. 푘퐼퐼.푚 is the stiffness during the first loading, up to where the reinforcement starts to
yield and 푘푖 is the stiffness’s during the different unloading processes. As mentioned in Section 8.4.2
it is strange that 푘퐼퐼.푚 is lower than the stiffness 푘푖. If that possible error is neglected it can be seen
that 푘퐼퐼 corresponds to a value between 푘2 and 푘3, meaning that the predicted stiffness is somewhat
underestimating the real stiffness of the beam. A possible reason for this could be that the calculated 퐸푐
is not completely correct.
Table 10.3 Summary of the measured stiffness’s from the undamaged beams together with the calculated
stiffness in state II.
푘퐼퐼
[kN/mm]
푘퐼퐼.푚
[kN/mm]
푘1
[kN/mm]
푘2
[kN/mm]
푘3
[kN/mm]
2.46 2.20 2.85 2.67 2.34
10.5 Verification of 2DOF Predictions
10.5.1 Deflections
In Figure 10.4 and 10.5 the predicted deflection-time response, for the first drop, of the 2DOF model
is compared with the beam response obtained in the experiments. It can be seen that the 2DOF model
overestimates the deflection for all cases since the resisting force used in the 2DOF model is conservatively
low.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 141	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 141	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 141

-- 159 of 237 --

0
5
10
15
20
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
f.y=513 MPa
f.y=623 MPa
Test
v
u
(a) 푚 = 10 kg, ℎ = 2.5 m.
0
10
20
30
40
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
 (b) 푚 = 10 kg, ℎ = 5.0 m.
Figure 10.4 Comparison of midpoint deflection over time for 2DOF model and experimental results.
0
10
20
30
40
50
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
f.y=513 MPa
f.y=623 MPa
Test
v
u
(a) 푚 = 20 kg, ℎ = 2.5 m.
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
0 	10 	20 	30 	40
Deflection,
 	u 	[mm]
Time, t [ms]
 (b) 푚 = 20 kg, ℎ = 5.0 m.
Figure 10.5 Comparison of midpoint deflection over time for 2DOF model and experimental results.
The predicted maximum and plastic deflections for the first drop are compared to the values obtained
from the tests in Table 10.4 and Table 10.5. Further, in Table 10.6 the total plastic deflection after several
drops is presented. It can be seen that the 2DOF model overestimates the plastic deflection a lot, both
after the first drop and after all of the drops. One of the reasons behind this is that the underestimated
load capacity in Section 10.2.1 results in a underestimation of the resistance as well, therefore a higher
deflection is expected from the 2DOF model. Another reason is that the 2DOF model does not take the
influence of high strain rate into account, which would increase the stiffness and strength of the concrete
and reinforcement, this is discussed in Section 2.4. Hence, the influence of strain rate would therefore
result in a smaller deflection in the 2DOF model.
It can be seen that the predictions are a bit more accurate regarding the total plastic deflection. The
reason behind this is that the 2DOF model assumes that the beam have the same stiffness after each drop.
142 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	142 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	142 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 160 of 237 --

In reality, though, the beams experience a loss of stiffness when the compressive zone is damaged during
impact. This means that after each drop, the stiffness of the beams gets closer to the value assumed in
the 2DOF model.
Table 10.4 Comparison of plastic deflection after the first drop from 2DOF and experimental results.
Series Steel strength
푓푦 [MPa]
Plastic def (2DOF)
푢2퐷푂퐹 .푝푙 [mm]
Measured plastic def
푢푝푙 [mm]
푢푝푙/푢2퐷푂퐹 .푝푙
%
1 513 14.1 5.4 38
623 11.0 49
2 513 30.3 14.2 47
623 24.4 58
3 513 39.7 20.7 52
623 32.2 64
4 513 81.1 44.6 55
623 66.7 67
Table 10.5 Comparison of maximum deflection after the first drop from 2DOF and experimental results.
Series Steel strength
푓푦 [MPa]
Max. def (2DOF)
푢2퐷푂퐹 .푚푎푥 [mm]
Measured max. def
푢푚푎푥 [mm]
푢푚푎푥/푢2퐷푂퐹 .푚푎푥
%
1 513 18.4 11.7 64
623 16.1 73
2 513 34.6 22.0 64
623 29.5 75
3 513 43.9 27.9 64
623 37.3 75
4 513 85.4 57.4 67
623 71.8 80
Table 10.6 Comparison of total plastic deflection from 2DOF and experimental results.
Series Steel strength
푓푦 [MPa]
Total plastic def (2DOF)
푢2퐷푂퐹 .푝푙 [mm]
Total measured def
푢푝푙 [mm]
푢푝푙/푢2퐷푂퐹 .푝푙
%
1 513 56.4 26.9 48
623 44.0 61
2 513 60.6 30.1 50
623 48.8 62
3 513 79.4 44.8 56
623 64.4 70
4 513 81.1 44.6 55
623 66.7 67
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 143	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 143	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 143

-- 161 of 237 --

10.5.2 Impulse
The predicted impulses and the impulses from the experiments are compared in Table 10.7. It is the
peak value of the impulse 퐼푖푛푖, see Appendix H, that is used for this comparison. It can be seen that
the impulses is overestimated with the 2DOF model but the relation between the impulses are well in
agreement. The relation is described by dividing the impulse from 2.5 m with the impulse from 5.0 m
for the same drop-weight, namely Series-1 with Series-2 and Series-3 with Series-4.
Table 10.7 Comparison of predicted impulses and the experimental results.
Series, Impulse 2DOF, Impulse DIC, Relation 2DOF, Relation DIC,
퐼푘 [Ns] 퐼푖푛푖 [Ns] 퐼푘,2.5∕퐼푘,5.0 [-] 퐼푖푛푖,2.5∕퐼푖푛푖,5.0 [-]
1 63.1 39.6 - -
2 89.1 52.9 0.71 0.75
3 89.1 50.7 - -
4 126.1 67.0 0.71 0.76
10.6 LS-DYNA
10.6.1 Midpoint Deflection over Time
The midpoint deflection over time for the different loading conditions are compared in Figure 10.6 and
10.7. Note the difference of axis values in the figures. The LS-DYNA models were interrupted at various
times. At most, for Series-1, it worked during the first 20 ms. However, the model worked through the
maximum value at each condition, and was hence deemed to be satisfactory. It appears that both the
2DOF and LS-DYNA model somewhat overestimates the maximum deflection of Series-1, Series-2 and
Series-3. For Series-4, that is 푚 = 20 kg and ℎ = 5.0 m, the LS-DYNA predicts a behaviour close to the
experimental results. Even though, it seems that the post peak behaviour differs where the LS-DYNA
curve returns in a slightly steeper slope.
0
5
10
15
20
0 	5 	10 	15 	20
Deflection,
 	u 	[mm]
Time, t [ms]
2DOF; f.y=513 MPa
2DOF; f.y=623 MPa
LS-DYNA
Test
v
u
(a) 푚 = 10 kg, ℎ = 2.5 m.
0
10
20
30
40
0 	5 	10 	15 	20
Deflection,
 	u 	[mm]
Time, t [ms]
 (b) 푚 = 10 kg, ℎ = 5.0 m.
Figure 10.6 Comparison of midpoint deflection over time for 2DOF model, LS-DYNA and experimental
results.
144 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	144 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	144 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 162 of 237 --

0
10
20
30
40
50
0 	5 	10 	15 	20
Deflection,
 	u 	[mm]
Time, t [ms]
2DOF; f.y=513 MPa
2DOF; f.y=623 MPa
LS-DYNA
Test
v
u
(a) 푚 = 20 kg, ℎ = 2.5 m.
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
0 	10 	20 	30
Deflection,
 	u 	[mm]
Time, t [ms]
 (b) 푚 = 20 kg, ℎ = 5.0 m.
Figure 10.7 Comparison of midpoint deflection over time for 2DOF model, LS-DYNA and experimental
results.
10.6.2 Deflection-length Relationship
A comparison of the beam response in LS-DYNA and from the experiments can be seen in
Figure 10.8 and Figure 10.9, for Series-1 and Series-4 respectively. Beam 4 represents Series-1 and
Beam 12 represents Series-4. The figures shows the deflection over length at five time step during the
first 2 ms and the overall resemblance is accurate. Although, the modelled beam has a local deflection in
the impact zone that does not occur in Beam 4 but can be detected to some extent in Beam 12. This local
deflection is due to the shear cracks that appears, addressed further in Section 10.6.3. It is also worth
mentioning the fact that the impact does not occur exactly at the time when the high-speed camera takes
a photo. In other words, the time step between the first and second photo is not with certainty 0.2 ms
with the consequence that the beam from the experiment shows a slower response.
The relative deformed shape, where the values of the deflections has been normalized to the maximum
deflection at all studied stages, can be seen in Figure 10.10 and 10.11. The results show an overall good
correspondence but the result is more accurately predicted in Series-4.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 145	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 145	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 145

-- 163 of 237 --

-3
-2
-1
0
1
2
3
4
5
6
7
8
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms
0.6 ms
1.0 ms
1.4 ms
2.0 ms
v
u
LS-DYNA
Test
Figure 10.8 Comparison of deflection-length relationship for Series-1.
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
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms
0.6 ms
1.0 ms
1.4 ms
2.0 ms
v
u
Test
LS-DYNA
Figure 10.9 Comparison of deflection-length relationship for Series-4.
146 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	146 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	146 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 164 of 237 --

-0.2
0.0
0.2
0.4
0.6
0.8
1.0
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms
0.6 ms
1.0 ms
1.4 ms
2.0 ms
v
u
LS-DYNA
Test
Figure 10.10 Comparison of relative deformed shape for Series-1.
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
-50 0 50 100 150 200 250 300 350 400 450 500
Displacement,
 u [mm]
Length, l [mm]
0.2 ms
0.6 ms
1.0 ms
1.4 ms
2.0 ms
v
u
Test
LS-DYNA
Figure 10.11 Comparison of relative deformed shape for Series-4.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 147	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 147	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 147

-- 165 of 237 --

10.6.3 Strain Fields
It is also of interest to study how well the propagation of cracks is predicted with LS-DYNA. Therefore,
the strain fields of one beam from each batch is compared with the strain fields from the model, see Table
10.8 - 10.11. The beam to compare with was considered representative of the whole series. The strain
fields are shown in a few steps between 0.2 ms - 2.0 ms and at maximum deflection.
In Series-1, see Table 10.8, LS-DYNA shows shear cracks at the impact region, which are not present
in Beam 4. However, these shear cracks were present during the subsequent drops. The cracks in the
upper region, though, corresponds very well and the cracks that propagates a certain distance from the
midpoint at approximately 2.0 ms are also well predicted. The maximum defection at the midpoint is
higher in LS-DYNA and this is likely partly due to the shear cracks at the impact region.
Table 10.8 Comparison of strain fields from experiments and LS-DYNA of Series-1 (m = 10 kg, h =
2.5 m).
t [ms]
u [mm] Series-1, Beam 4 t [ms]
u [mm] LS-DYNA
t = 0.2
u = 1.0
t = 0.2
u = 0.7
t = 0.4
u = 1.9
t = 0.4
u = 1.5
t = 0.6
u = 2.8
t = 0.6
u = 2.3
t = 1.0
u = 4.3
t = 1.0
u = 3.6
t = 2.0
u = 7.0
t = 2.0
u = 6.5
t = 8.2
u = 12.1
t = 9.0
u = 13.1
The predictions of Series-2, see Table 10.9 corresponds better with the strain fields than for Series-1. In
this case the shear cracks from LS-DYNA is also present in the test series, in this case Beam 1. By a
closer look at the right hand upper crack it is visible that this crack propagates all the way through the
beam. At first, it appears after 0.6 ms in the upper part. At 2.0 ms it has instead propagated through the
beam and is instead visible as a bending crack at a certain distance from the midpoint. This is a behaviour
that is captured from the predicted strain field as well. In the images from the maximum deflection, it is
also possible to detect the local damages in the upper part of the impacted area.
148 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	148 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	148 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 166 of 237 --

Table 10.9 Comparison of strain fields from experiments and LS-DYNA of Series-2 (m = 10 kg, h =
5.0 m).
t [ms]
u [mm] Series-2, Beam 1 t [ms]
u [mm] LS-DYNA
t = 0.2
u = 1.0
t = 0.2
u = 1.3
t = 0.4
u = 2.5
t = 0.4
u = 2.5
t = 0.6
u = 3.8
t = 0.6
u = 3.6
t = 1.0
u = 6.3
t = 1.0
u = 5.6
t = 2.0
u = 10.6
t = 2.0
u = 9.9
t = 6.0
u = 22.1
t = 7.0
u = 24.5
The predicted strain fields of Series-3, see Table 10.10, corresponds also relatively well with the real
response, in this case Beam 15. The shear cracks are predicted as well as the bending cracks in the upper
part. The local damage where the drop-weight hit the beam is also predicted in a correct way.
Table 10.10 Comparison of strain fields from experiments and LS-DYNA of Series-3 (m = 20 kg, h =
2.5 m).
t [ms]
u [mm] Series-3, Beam 15 t [ms]
u [mm] LS-DYNA
t = 0.2
u = 1.2
t = 0.2
u = 0.7
t = 0.4
u = 2.5
t = 0.4
u = 1.8
t = 0.6
u = 3.7
t = 0.6
u = 2.9
t = 1.0
u = 5.9
t = 1.0
u = 4.8
t = 2.0
u = 10.4
t = 2.0
u = 9.0
t = 12.0
u = 29.0
t = 11.8
u = 30.0
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 149	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 149	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 149

-- 167 of 237 --

The comparison of strain fields of Series-4, represented by Beam 11, and LS-DYNA can be seen in Table
10.11. In the predicted strain field a total of three larger cracks occurs at the upper part, whilst a total
of five smaller cracks occurs at Beam 11. However, the overall response is well predicted. The blank
area in the mid part of Beam 11 means that spalling of concrete has occurred. This local damage is well
predicted and shown as the strain concentration at the impact zone in LS-DYNA.
Table 10.11 Comparison of strain fields from experiments and LS-DYNA of Series-4 (m = 20 kg, h =
5.0 m).
t [ms]
u [mm] Series-4, Beam 11 t [ms]
u [mm] LS-DYNA
t = 0.2
u = 2.3
t = 0.2
u = 1.4
t = 0.4
u = 4.0
t = 0.4
u = 2.9
t = 0.6
u = 5.7
t = 0.6
u = 4.4
t = 1.0
u = 8.9
t = 1.0
u = 7.1
t = 2.0
u = 15.1
t = 2.0
u = 13.4
t = 18.2
u = 59.8
t = 16.0
u = 56.9
150 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	150 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	150 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 168 of 237 --

11 Discussion
This chapter consists of a discussion and general observations made during the thesis work. The
experimental procedure will be treated as well as the interpretation of the results.
Regarding the material properties some differences were observed between the two batches and it would
be preferred to mix all the concrete in one batch to make sure that the same properties are obtained.
However, the differences were relatively small and are therefore deemed to be of small effect. An attempt
to fix the problem observed by Lozano and Makdesi (2017) that the reinforcement was bent downwards
during the casting was made, but not completely successful. The principle by using steel wires was
correct but, as mentioned in Section 8.2.4, the reinforcement was placed too high.
The 2DOF model was used to predict the deflection-time relationship for the beams and it was discovered
that the model overestimates the deflections for the first drop in all four test series. This was expected
since the same result was obtained in previous thesis’s within the same subject and the same way of
thinking was applied in the 2DOF model used here. When predicting the response during repeated
impacts it could be seen that Series-4 had the greatest total plastic deflection, followed by Series-3, -2
and -1 in that order. When analysing the experimental results, it can be seen that this is not the case and
that the deflections are closer to the predicted value when repeated impacts are considered, compared to
when only the first drop is considered. This means that the model overestimates the plastic deflection
during the first impact but underestimates the additional plastic deflections during the repeated impacts.
During the tests it was observed that extensive damage occurred at the impact area, i.e the compressive
zone got crushed and the beam became less stiff. The model assumes the same stiffness and resistance
after each drop and therefore the overestimated prediction gets closer to reality after each drop. However,
this does not mean that the model is better to describe repeated impacts compared to single impacts since
the reason the prediction gets better is not included at all in the model.
The reason why the 2DOF model overestimates the deflections during the first impact could be that the
load capacity that were calculated by hand proved to be an underestimation, see Figure 10.1, leading to a
less strong beam in the 2DOF model. Another reason for the overestimation could be that the 2DOF
model does not include strain rate effects which would have lead to an increased predicted stiffness of
the beam, resulting in lower deflections.
The extensive damage during repeated impacts caused problems with the DIC since the software is
dependent on a clear pattern which it can relate to during the entire impact. The crushing of concrete
in the top of the beam caused the software to lose the parts of the beam that were crushed and gravel
that fell down in front of the beam made the postprocessing hard. In some cases, parts of the tensile
zone loosened from the beam together with the painted pattern. During the next drop the software
could not capture the newly emerged parts which had no pattern painted on them. If the tests were to be
performed again it could be a good idea to protect the top of the beam with some kind of loading plate or
protective rubber on the drop-weight to distribute the force better, resulting in less damages on the top of
the beam.
The study of the acceleration of only one facet point in GOM Correlate proved to give unreasonable
results with large deviations between them. Instead, the methodology was to average the acceleration of
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 151	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 151	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 151

-- 169 of 237 --

a number of facet points, resulting in values that corresponded well between the impact sequences. The
acceleration was used to calculate the impact force and the impulse. In the absence of predictions there
is no comparison of the impact force. However, there is a good stability in the results. The time interval
over which the impulse lasted was overestimated, resulting in higher values. However, the accuracy in
the value of the impulse was evaluated by looking at the relation between the peak value and the total
impulse in the 2DOF model and this showed a good resemblance.
When performing the static loading, the loading condition was changed to four-point loading due to
the extensive damage in the impact zone. This was not ideal but a choice that had to be made to make
sure that reasonable results were obtained. The severe damage the beams suffered also lead to that the
rotational capacity could not be evaluated for the beams subjected to dynamic loading. These are two
more reasons why the dynamic testing should be evaluated and modified so that the beam does not
experience such severe damage during the testing.
It is interesting that the predicted load capacity proved to be an underestimation both when looking at the
load-deflection relationship obtained from the static test and when looking at the internal work, though
the method with the internal work was closer to the predicted value. It could be questioned why the
internal work only was evaluated down to 80% on the descending branch of the load-displacement curve
and the reason for this is that the failure mode has a large influence on the results obtained below that
value. When the beam is subjected to rupture of reinforcement, the curve is completely vertical at that
point which results in the same value for 푊푝푙.80, 푊푝푙.70 and so on. If crushing of concrete was the failure
mode, the curve is sometimes almost vertical and sometimes almost horizontal which would result in a
large dispersion between the results.
LS-DYNA proved to be a very powerful tool to predict the response, though it is very time consuming
to use. It can however be tricky to make the model converge and during this thesis, problems running
the model with a high tensile strength and the default value of the EFC-parameter occurred. A way to
handle problems with the EFC-parameter could be found in literature, namely to increase it by a factor
10 to prevent crushing of concrete, but the problems regarding the tensile strength remained unsolved.
One idea was that the high tensile strength lead to a lower value of WF which is a parameter controlling
the softening branch of exponential tensile damage formulation, presented in Table 9.1. This seems odd
since it was believed that a high tensile strength should lead to a higher WF. However, WF is mainly
dependent on the fracture energy which should also be higher if the high tensile strength obtained from
the tests was correct. It is therefore believed that the material model CDPM2 is designed to work for
material parameters that has a reasonable proportion to each other. This further emphasizes the idea that
the higher value of tensile strength obtained from the material tests was not correct.
152 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	152 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	152 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 170 of 237 --

12 Final Remarks
12.1 General Description
The aim of the thesis is to increase the understanding of the structural response of RC beams subjected
to repeated impact loading and evaluate methods to predict this response. This was made by studying
how impacts influences the capacity of simply supported reinforced concrete beams.
Firstly, to deepen the knowledge concerning structural dynamics and the response of impact loaded
structures, a literature survey was done. Based on the information gathered in the literature survey a
2DOF model was developed. By hand calculations and the 2DOF model an experimental procedure that
should provide interesting results was formed.
Secondly, the experiments were performed where the beams were subjected to four different combinations
of impact loading. After the dynamic testing, the beams were tested statically until failure together
with a number of undamaged beams to form a basis of comparison. Both the dynamic and static tests
were captured with a high-speed camera and the images were afterwards processed using Digital Image
Correlation (DIC). Parameters such as load capacity, deflection, rotation capacity, internal work, impulse
and the strain fields were evaluated.
Lastly, the software LS-DYNA was used to perform dynamic finite element analyses (FEA). These
results were compared with the results from the experiments and the 2DOF calculations. In the analysis
3D solid elements and the material model CDPM2 was used.
12.2 Conclusions
The main conclusion in this thesis was that the response during repeated impacts is hard to predict. This
is mainly due to the extensive local damage that takes place where the drop-weight hits the beam and
the large variation in the test results. Further, a large difference in response between dynamic and static
loading was observed with regard to crack pattern. During static loading of undamaged beams, bending
cracks could be observed in the bottom part of the beam. In the dynamic loaded beams both bending
and shear cracks could be observed in the bottom part, as well as bending cracks in the top part of the
beam during the first few ms.
The 2DOF model overestimates the deflections during the impacts but the accuracy is still good enough
to recommend this tool for predicting the response, though there is room for improvements. For example,
the 2DOF model does not account for the loss of stiffness when the concrete in the compression zone
gets crushed.
Regarding plastic rotation capacity, it was concluded that Bk25 provides the best method to predict the
plastic rotation capacity for four-point loaded RC beams. It was found that the loading conditions from
which the different models are created for are not well stated and the suitability to use these methods on
a four-point loaded structure can be questioned.
It can be concluded that DIC is a suitable tool for the study of the impact behaviour regarding strain
fields, deflections and velocities. It might also be a suitable tool for the study of accelerations. It was
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 153	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 153	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 153

-- 171 of 237 --

found that DIC has problems capturing the behaviour when the beam is damaged to such extent that the
quality of the pattern is affected.
LS-DYNA proved to be a very powerful tool to predict the first impact, but a new way of thinking needs
to be applied if repeated impacts are to be modelled. The FE model within this thesis shows a good
correspondence regarding strain fields and deflections during the first impact.
12.3 Further Studies
The experiments performed in this thesis were designed in such a way that the beams were subjected
to a certain number of drops, followed by static testing to see how much residual capacity that were
left. It would be interesting to subject a larger number of beams to the same weight and drop height and
test statically them after each drop. For example, 12 beams could be subjected to the same conditions,
making it possible to test 3 beams statically after each drop and therefore be able to follow the behaviour
after each impact in a more detailed way. A lot of factors could be changed during the experiments such
as: New drop heights, weight of drop-weight, span length or dimensions of the beam, different types or
amount of reinforcement and different location of the impact.
A problem that were observed during the experiments was the extent of the local damages where the
drop-weight hit the beam. This is something that is not included in the 2DOF model and could be
something to improve if repeated impacts are to be modelled in a more correct way. The effect of strain
rate is also something that could be added to the 2DOF model to make it more close to the reality.
Another thing that could be made is to prevent the local damage in the top of the beam by placing some
kind of protective layer on either the beam or the drop-weight. It could however cause some problems
with how the impact is modelled.
Regarding the FE modelling in LS-DYNA it is clear that the possibility of modelling repeated impacts is
something worth investigating. An idea could be to save the strain fields from the first drop and implement
it as the initial strain field before the second drop. Another approach could be to identify elements which
are deemed to have utilized their capacity during the first drop and remove them before the second drop
is modelled. This is unfortunately something that did not fit in the scope of this thesis.
A certain variation was observed between the beams during the experiments when the information was
processed through DIC. The reason behind this could be that the material properties varies within the
beam and therefore it would be interesting to try to model this with LS-DYNA by randomizing the
material data for the elements.
154 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	154 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	154 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 172 of 237 --

References
ACI-ASCE-Committee-428 (1968). “Progress Report on Code Clauses for Limit Design”. In: ACI
Journal 65.
Adhikary, S. D., B. Li, and K. Fujikake (2012). “Dynamic behavior of reinforced concrete beams under
varying rates of concentrated loading”. In: International Journal of Impact Engineering volume 47.
Arbulu, A. G. B. (2006). Plastic hinge length in high-rise concrete shear walls. MSc Thesis.
Baker, A. and A. Amarkone (1964). “Inelastic Hyperstatic Frames Analysis”. In: Procedings of the
International Symposion on the Flexural Mechanics of Reinforced Concrete, ASCE-ACI 50.
Biggs, J. (1964). Introduction to Structural Dynamics. McGraw-Hill.
Boverket (2004). Boverkets handbok om betongkonstruktioner, BBK 04. Boverket.
Carlsson, M. and R. Kristensson (2012). Structural Response with regard to explosions - Mode superpo-
sition, damping and curtailment. MSc Thesis.
CEB-FIP (2012). Model Code 2010. Comité Euro-International du Betón.
Cederwall, K., L. Elfgren, B. Engström, A. Hillerborg, Å. Holmberg, E. Hultin, I. Karlsson, S. Kinnunen,
A. Losberg, M. Lorentsen, H. Nylander, T. Petersson, S. Sahlin, S. Svensson, B. Westerber, S. Öberg,
and L. Östlund (1990). Betonghandbok - Konstruktion. Second. Stockholm: Cementa and AB Svensk
byggtjänst.
CEN (2004). EN 1992-1-1 Eurocode 2: Design of concrete structures - Part 1-1: General rules and rules
for buildings. European Committee for Standardization.
– (2009a). EN 12350-1: Testing fresh concrete - Part 1: Sampling. European Committee for Standard-
ization.
– (2009b). EN 12350-2: Testing fresh concrete - Part 2: Slump-test. European Committee for Standard-
ization.
– (2009c). EN 12350-7: Testing fresh concrete - Part 7: Air-content - Pressure methods. European
Committee for Standardization.
– (2009d). EN 12390-2: Testing hardened concrete - Part 2: Making and curing specimens for strength
tests. European Committee for Standardization.
– (2009e). EN 12390-3: Testing hardened concrete - Part 3: Compressive strength of test specimens.
European Committee for Standardization.
– (2009f). EN 12390-6: Testing hardened concrete - Part 6: Tensile splitting strength of test specimens.
European Committee for Standardization.
– (2009g). EN 12390-7: Testing hardened concrete - Part 7: Density of hardened concrete. European
Committee for Standardization.
Cotsovos, D. and M. Pavlovic (2008). “Numerical investigation of concrete subjected to compressive
impact loading. Part 1: A fundamental explanation for the apparent strength gain at high loading
rates”. In: Computers and Structures volume 86.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 155	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 155	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 155

-- 173 of 237 --

Ekström, J. (2017). “Blast and Impact Loaded Concrete Structures”. PhD thesis. Chalmers University of
Technology.
Engström, B. (2011). Bärande konstruktioner, Del 2, Chapter B7-B11. Gothenburg: Chalmers University
of Technology.
– (2013). Bärande konstruktioner, Del 1, Chapter B1-B6. Sixth. Gothenburg: Chalmers University of
Technology.
– (2015). Design and Analysis of Continuous Beams and Columns. Gothenburg: Chalmers University
of Technology.
Fortifikationsförvaltningen (1973). Provisoriska anvisningar för dimensionering av armerade betongkon-
struktioner som skydd mot verkan av konventionella vapen inom närmissområde. Fortifikationsför-
valtningen, Befästningsavdelningen.
Fransson, H. (1997). Rotation Capacity of Reinforced High Strength Concrete Beams. Stockholm: Royal
Institute of Technology.
Grassl, P. (2016). User manual for MAT_CDPM (MAT_273) in LS-DYNA. URL: http://petergrassl.
com/Research/DamagePlasticity/CDPMLSDYNA/index.html (visited on 04/26/2017).
Grassl, P. and M. Jirasek (2006). “Damage-plastic model for concrete failure”. In: International Journal
of Solids and Structures 43.
Johansson, M. (2000). “Structural Behaviour in Concrete Frame Corners of Civil Defence Shelters”.
PhD thesis. Chalmers University of Technology.
Johansson, M. and L. Laine (2012). Bebyggelsens motståndsförmåga mot extrem dynamisk belastning,
Del 3 – Kapacitet hos byggnader. Swedish Civil Contingencies Agency.
Kheyroddin, A. and H. Naderpour (2007). Plastic Hinge Rotation Capacity of Reinforced Concrete
Beams. International Journal of Civil Engineering.
Latte, S. (1999). Plastic Rotation Capacity of Reinforced Concrete Beams. MSc Thesis.
Löfgren, I., J. F. Olesen, and M. Flansbjer (2004). Application of WST-method for fracture testing of
fibre-reinforced concrete. Chalmers University of Technology.
Lovén, J. and E. S. Svavarsdóttir (2016). Concrete Beams Subjected to Drop Weight impact. MSc Thesis.
Lozano, F. M. and J. A. Makdesi (2017). Concrete Beams Subjected to Drop-Weight Impact and Static
Load. MSc Thesis.
LSTC (2014). LS-DYNA Keyword user’s manual - Volume I,II,II. Livermore Software Technology
Corporation.
Munther, M. and J. Runebrant (2018). Structural response of concrete beams subjected to drop weight
impact. MSc Thesis.
Nyström, U. (2006). Design with regard to explosions. MSc Thesis.
Panagiotakos, T. and M. Fardis (2001). “Deformations of Reinforced Concrete Members at Yielding and
Ultimate”. In: ACI Structural Journal 98.
156 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	156 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	156 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 174 of 237 --

Paulay, T. and M. Priestley (1992). “Seismic Design of Reinforced Concrete and Masonry Buildings”.
In: John Wiley and Sons, New York.
Tamminen, S. (1993). Rotationskapacitet för armerade betongbalkar i höghållfast betong. MSc Thesis.
Yi, W. -J., D. -B. Zhao, and S. K. Kunnath (2016). “Simplified Approach for Assessing Shear Resistance
of Reinforced Concrete Beams under Impact Loads”. In: ACI Structural Journal July-August 2016.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 157	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 157	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 157

-- 175 of 237 --



-- 176 of 237 --

A Material Properties Testing of Concrete
A.1 Introduction
To determine the material properties of the beams, test cubes were casted at the same time, using concrete
from the same batch. 12 cubes, with side of 150 mm and smooth edges, and three cubes with the
same dimensions but with a notch in one side were casted from each batch, this gives a total of 30
test cubes. The smooth cubes were used to determine the compressive and tensile strength while the
notched cubes were used to determine the fracture energy. To make sure that the concrete get the material
properties expected, the cubes were casted and treated according to CEN (2009d). The standard give
recommendations for every part of the process when casting and curing the specimens and only the most
relevant parts will be treated here. The standard recommends different ways to compact the concrete and
when using an internal vibrator it is stated that the dimensions of the vibrator should not exceed one
quarter of the test specimen. Figure A.1 show the two different type of cubes as well as the vibrator that
is well below the size limit.
Figure A.1 The two different test-cubes with the internal vibrator.
The procedure when greasing the inner surface, mentioned in Section 6.2.3, is also described in the
standard. The specimens should be left in the mould for at least 16 hours, but not longer than 3 days,
protected against dehydration at a temperature of 20 ± 5 °C. The specimens were left in the laboratory,
where the temperature is around 20 °C, and covered by a plastic sheet to protect it from dehydration.
After removal from the mould, the specimens should be cured in water at a temperature of 20 ± 2 °C.
This was done after approximately 44 hours.
The first tests on the hardened concrete was made after 26 days, when the first dynamic tests were
performed and the second tests were made after 28 days, when the first static tests were performed. The
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-1

-- 177 of 237 --

cubes are named 1.1-1.15 and 2.1-2.15. The first number stands for which batch the cube corresponds to,
namely 1 or 2, and the second number is the actual number of the cube. After 26 days, cube number 1-3
were tested for compressive strength and 4-6 were tested for tensile strength. After 28 days, cube number
7-9 and 10-12 were tested for compressive and tensile strength, respectively. Cube number 13-15 were
tested for fracture energy after 28 days.
A.2 Density
The density of the concrete were determined according to CEN (2009g), which describes several different
methods that can be used to determine the density. One of them consists of measuring the sides of the
cube with a caliper. This should be done on 3 different places along each edge, preferably with a digital
caliper, and then use the mean length of each side to determine the volume. The specimens were then
weighted on a scale to be able to determine the density 휌 based on the mass 푚 and the volume 푉 as
휌 = 푚
푉 (A.1)
A summary of the calculated densities are shown in Table A.1.
Table A.1 Calculated densities.
Batch 1
Cube number 1.1 1.2 1.3 1.4 1.5 1.6
Density [kg/m3] 2 377 2 363 2 354 2 353 2 381 2 375
Cube number 1.7 1.8 1.9 1.10 1.11 1.12
Density [kg/m3] 2 364 2 372 2 354 2 360 2 362 2 353
Batch 2
Cube number 2.1 2.2 2.3 2.4 2.5 2.6
Density [kg/m3] 2 414 2 416 2 388 2 393 2 395 2 403
Cube number 2.7 2.8 2.9 2.10 2.11 2.12
Density [kg/m3] 2 420 2 372 2 418 2 437 2 393 2404
Mean density batch 1
[푘푔∕푚3] 2 364
Mean density batch 2
[푘푔∕푚3] 2 404
Total mean density
[푘푔∕푚3] 2 384
It should be noted that the cubes were dried for 0.5-1 hour before weighted, and not oven dried. This
might influence the mass a bit but it is considered negligible. Figure A.2 shows the digital caliper that
were used when measuring the dimensions of each cube.
A-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	A-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	A-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 178 of 237 --

Figure A.2 Picture of the caliper used.
A.3 Compressive Strength
The compressive strength of the concrete was determined according to (CEN, 2009e). The test is pretty
straightforward and the only parameter that needed to be defined in the apparatus was the loading rate,
which was set to a constant value of 0.4 [MPa/s]. It was also necessary to check if the failure mode of
each cube was similar to the ones presented in CEN (2009e). This can be seen in Figure A.3 which
shows both the apparatus and an example of an allowed failure mode, which can be seen as small vertical
cracks.
(a) Apparatus. (b) Failure mode.
Figure A.3 Setup for compressive test.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-3

-- 179 of 237 --

The results from the compressive test is summarized in Table A.2. It should be noted that these values
have been calculated from cube strength to cylinder strength with Equation (2.7)
Table A.2 Summary of cylinder compressive strengths.
Cube number 1.1 1.2 1.3 2.1 2.2 2.3
Strength (26d) [MPa] 36.6 36.3 35.8 37.7 38.2 36.9
Mean strength (26d) [MPa] 36.2 37.6
Cube number 1.7 1.8 1.9 2.7 2.8 2.9
Strength (28d) [MPa] 34.3 34.3 36.2 39.7 37.7 38.2
Mean strength (28d) [MPa] 34.9 38.5
Mean strength (26-28d) batch 1
[MPa] 35.6
Mean strength (26-28d) batch 2
[MPa] 38.1
Total Mean strength (26-28d)
for batch 1 and 2 [MPa] 36.8
It can be observed that the compressive strength is lower after 28 days compared to 26 days for batch 1.
This is not realistic and the results might be because of the low amount of cubes tested each day. It can
also be seen that the compressive strength is overall grater for batch 2 than batch 1, this is reasonable
since batch 2 also has a somewhat larger density which can be coupled to compressive strength.
A.4 Tensile Strength
The tensile strength was determined with a splitting test according to (CEN, 2009f). The loading rate
was set to 0.05 [MPa/s] which is much lower than when testing the compressive strength. This is since
the load required for splitting the specimen is much lower and therefore more sensitive to increased loads.
The setup for the test can be seen in Figure A.4.
A-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	A-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	A-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 180 of 237 --

(a) Test setup. (b) Failure mode.
Figure A.4 Setup for tensile test.
A summary of the results can be seen in Table A.3. It should be noted that the values given here are
calculated from the test data, using Equation (2.12).
Table A.3 Summary of tensile strengths.
Cube number 1.4 1.5 1.6 2.4 2.5 2.6
Strength (26d) [MPa] 4.4 4.6 4.6 5.0 5.0 5.0
Mean strength (26d) [MPa] 4.5 5.0
Cube number 1.10 1.11 1.12 2.10 2.11 2.12
Strength (28d) [MPa] 4.7 4.7 5.0 4.6 4.8 4.3
Mean strength (28d) [MPa] 4.8 4.6
Mean strength (26-28d) batch 1
[MPa] 4.7
Mean strength (26-28d) batch 2
[MPa] 4.8
Total Mean strength (26-28d)
for batch 1 and 2 [MPa] 4.7
It can be seen that the tensile strength is greater for batch 2 compared to batch 1 after 26 days, but lower
after 28 days. This might be because of the low amount of cubes tested. The overall strength if you
combine the results from 26 and 28 days is larger for batch 2, which corresponds well with the previous
results for compressive strength in Section A.3.
A.5 Fracture Energy
To be able to predict the fracture energy 퐺퐹 of the concrete a wedge splitting test (WST) was performed
according to the recommendations given in (Löfgren et al., 2004). The setup of the test can be seen in
Figure A.5.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-5

-- 181 of 237 --

(a) Test setup. (b) Zoomed in.
Figure A.5 Test setup for WST.
First of all, the area of the cross-section that will be fractured needs to be calculated. This is done by the
measurements presented in Figure A.6.	Active
l1
l2
h2
h1
Figure A.6 Dimensions for WST.
The measured dimensions are presented in Table A.4.
A-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	A-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	A-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 182 of 237 --

Table A.4 Dimensions of cubes for WST.
Cube number 푙1 [mm] 푙2 [mm] ℎ1 [mm] ℎ2 [mm] 퐴 [푚푚2]
1.13 149.5 150.5 76.1 76.8 11473
1.14 149.5 149.6 75.5 75.4 11284
1.15 150.3 150.4 76.4 75.4 11405
2.13 150.2 150.4 75.1 75.0 11276
2.14 149.7 149.8 75.2 75.2 11262
2.15 150.4 150.3 75.3 75.3 11318
These measurements are, however, only theoretically valid. Figure A.7 shows the difference of failure
mode for cube number 2.14 and 2.15 where it can be seen that the fractured area differs a lot. A more
accurate way to determine the area would be to 3D-scan the fractured area. This is however not done
here.
(a) Cube number 2.14 (b) Cube number 2.15
Figure A.7 Examples of different failure modes in WST.
The fracture energy is calculated as the area under the splitting load-CMOD (Crack mouth opening
distance) diagram. Figure A.8 shows the diagram and Table A.5 shows a summary of the results.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 A-7

-- 183 of 237 --

0
0.5
1
1.5
2
2.5
3
3.5
4
4.5
5
0 	0.5 	1 	1.5 	2 	2.5
Splitting load
 Fsp, [N]
CMOD [mm]
Cube 1.13
Cube 1.14
Cube 1.15
Cube 2.13
Cube 2.14
Cube 2.15
Figure A.8 Splitting load-CMOD diagram.
Table A.5 Summary of results from WST.
Cube
number
Accumulated
퐺퐹 [푁푚∕푚2]
Maximum
Applied 퐹푠푝 [N]
Maximum
CMOD [mm]
1.13 143.6 4.4 2.2
1.14 111.2 4.5 2.0
1.15 160.0 4.2 2.1
2.13 124.8 3.5 2.1
2.14 137.7 4.4 2.0
2.15 145.6 4.6 2.0
Average 퐺퐹 137.1
Average 퐺퐹 Batch 1 138.3
Average 퐺퐹 Batch 2 136.0
It can be seen that there is some dispersion in the results but the average fracture energy is almost the
same for the two batches. The goal was to cancel the test as soon as 퐶푀푂퐷 reached 2 mm since the
capacity was deemed to be reached at that point. However, some of the tests continued after 2 mm but
this contribution to the total fracture energy is almost negligible and therefore not corrected.
A-8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	A-8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	A-8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 184 of 237 --

B Material Properties Testing of Steel
The tests of the steel properties were performed by Research Engineer Sebatian Almfeldt before the
initiation of the thesis work. However, some information about the tests were given:
• Tested with an extensometer, 634.25F-24 SN:10504454C
• Speed was 0.5 mm/min up to 3 mm, followed by 4 mm/min until failure
• Extensometer was removed at 20 mm deformation (Except for the first sample where it was removed
earlier)
• Length of the specimens were 305 mm
The properties of the steel were calculated with a provided template from Morgan Johansson and a
summary of the steel properties can be seen in Table B.1 where a nominal diameter of 6 mm were used
for the rainforcement.
0
100
200
300
400
500
600
700
0 	50 	100 	150
Axial tensile stress,
 σs 	[MPa]
Strain, εs [‰]
Bar 1
Bar 2
Bar 3
Bar 4
Bar 5
Bar 6
Bar 7
Figure B.1 Ultimate steel capacity.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 B-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 B-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 B-1

-- 185 of 237 --

Table B.1 Results of steel testing.
Bar sample 퐸푠 [MPa] 휀푠푢 [‰] 퐹푚푎푥 [N] 푓푢 [MPa] 푓0.2 [MPa]
1 196 101 17.7 622 514
2 194 104 17.7 620 507
3 188 116 17.9 634 529
4 195 108 17.8 631 515
5 208 101 17.1 602 495
6 193 109 17.9 626 521
7 198 104 17.9 626 511
Average 196 106 17.7 623 513
B-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	B-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	B-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 186 of 237 --

C Damaged Beams After Testing
Figures C.1-C.8 show the damaged beams after they have been subjected to all of the drops in the
dynamic testing.
Figure C.1 Beam 4-6 looking at the side of the beam.
Figure C.2 Beam 4-6 looking at the bottom of the beam.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 C-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 C-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 C-1

-- 187 of 237 --

Figure C.3 Beam 1-3 looking at the side of the beam.
Figure C.4 Beam 1-3 looking at the bottom of the beam.
Figure C.5 Beam 13-15 looking at the side of the beam.
C-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	C-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	C-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 188 of 237 --

Figure C.6 Beam 13-15 looking at the bottom of the beam.
Figure C.7 Beam 10-12 looking at the side of the beam.
Figure C.8 Beam 10-12 looking at the bottom of the beam.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 C-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 C-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 C-3

-- 189 of 237 --



-- 190 of 237 --

D DIC Facet Analysis
After importing the frames to GOM Correlate 2017 the user has to specify the facet size and point
distance to generate a mesh that is used for the DIC. For the facet size the length of a side is specified in
pixels and the point distance is how many pixels there is between the midpoint of each facet, see
Figure D.1. The mesh generated from two different facet and point distance combinations is presented in
Figure D.2. It should be noted that only a triangular mesh structure is possible in GOM Correlate.
Point distance
Facet size
Figure D.1 Definition of facet size and point distance used to generate a mesh in GOM Correlate.
(a) Facet size = 15, point distance = 10. (b) Facet size = 25, point distance = 20.
Figure D.2 Mesh structure in DIC.
In order to find an appropriate combination of facet size and point distance to display the strain field a
study was made on beam number 1, the first drop. The quantity for the comparison is the major strain
and it is displayed against the reference stage (before impact). The upper limit for the strain was 5 %
and the lower limit was 1 %. By using these limits the influence of the lower strain values were avoided
out and minor cracks became more visible. The interpolation size was chosen to 1 and a high accuracy
computation was used. The results from the analysis can be seen in Table D.1 and D.2. Based on this, it
was determined that a facet size of 15 pixels and a point distance of 5 pixels was the most appropriate
combination to visualize the cracks, without too much noise.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 D-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 D-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 D-1

-- 191 of 237 --

Table D.1 Strain field visualization with point a point distance of 5 pixels.
Facet size Point distance = 5
10
15
20
25
D-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	D-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	D-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 192 of 237 --

Table D.2 Strain field visualization with point a point distance of 10-20 pixels.
Facet size Point distance = 10
15
20
25
Facet size Point distance = 15
20
25
Facet size Point distance = 20
25
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 D-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 D-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 D-3

-- 193 of 237 --



-- 194 of 237 --

E Beams Subjected to Static Loading only
Figure E.1-E.4 show the undamaged beams after they have been subjected to static loading.
Figure E.1 Beam 7-9 looking at the side of the beam.
Figure E.2 Beam 7-9 looking at the side of the beam.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 E-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 E-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 E-1

-- 195 of 237 --

Figure E.3 Beam 16-18 looking at the side of the beam.
Figure E.4 Beam 16-18 looking at the side of the beam.
E-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	E-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	E-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 196 of 237 --

F Determination of Plastic Deformation at Midpoint
The plastic deformation after an impact was determined in GOM Correlate 2017. It existed two ways
to determine the deformations, either by using the image sequence during the actual impact or by the
sequence from the next impact.
F.1 Method 1 - Image Sequence from actual Impact
The deflections from the first image sequence was determined from the deflection-time curve. The
fact that the beam has an upward movement after impact was taken into consideration by plotting
the difference between a point at the support and the midpoint, see Figure F.1. Figure F.2 shows the
deflection-time curve for beam 1. After a while there is no additional plastic deformation, but thea beam
still vibrates. The plastic deformation was determined as the average value of the last 5 ms.
Figure F.1 Figure showing the beam moving in the upward direction. The midpoint deflection of the
beam is measured as the difference between the midpoint and the support displacements.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 F-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 F-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 F-1

-- 197 of 237 --

0
5
10
15
20
25
0 20 40 60 80 100
Deflection,
 u [mm]
Time, t [ms]
Beam 1
u.pl
Figure F.2 Deflection-time for beam 1. The plastic deflection was determined as the average deflection
of the last 5 ms.
F.2 Method 2 - From next Image Sequence
The first image (reference image) of the sequence taken at the first impact was used as the first image in
the sequence taken at the second impact. The plastic deformation after the first impact was the difference
in deflection of the midpoint of the reference image and the image before the second impact. Figure F.3
and F.4 show how the plastic deflection was determined.
Figure F.3 First image (reference image) from the sequence taken at the first impact at beam 1.
F-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	F-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	F-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 198 of 237 --

Figure F.4 First image from the sequence taken at the second impact at beam 1. Note that the second
impact has not yet occurred.
Unfortunately, there was no beam image from the dynamic testing after the last impact. Instead, the
plastic deformation in this case could be determined from the beam image for the static testing. How this
was performed is schematically shown in Figure F.5. It should be noted that the deflection in this case
was determined at the top of the beam and not in the middle. The reason for this was the local damage of
the beam which made it difficult to locate the centre midpoint.
u
Figure F.5 How the plastic deformation after the last impact was determined.
F.3 Comparison of the Two Methods
The result from the two ways to determine the deformations is summarized in Table F.1. The comparison
was carried out for the first drop of the 9 beams that were subjected to more than one drop. As can be
seen the method by using the image sequence from first drop show higher deformations than the second
method. A reason for the difference could be that the beam was rotating in the upward movement during
the first sequence and therefore shows a different result. Since only half of the beam was captured during
the dynamic response, this was impossible to investigate further and therefore the deformations was
determined according to the second method.
Table F.1 Comparison of two methods used for determine the plastic deformations. All values is in
mm.
Series 푢푝푙.1, method 1 푢푝푙.2, method 2 Difference 푢푝푙.1/푢푝푙.2 [%]
1 7.2 5.4 1.8 25
2 17.8 14.2 3.6 20
3 21.7 20.7 1.0 5
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 F-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 F-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 F-3

-- 199 of 237 --



-- 200 of 237 --

G Determination of Plastic Deformation in Static Tests
The plastic deformation at 0.35L from support was measured in GOM Correlate 2017. Firstly, a line
was drawn at the top part of the beam, between the supports. Secondly, two two lines was drawn from
the newly constructed line and the parts of the beam where the loads were applied. Lastly, the plastic
deformation was calculated as the average between the two vertical lines, 푢1 and 푢2. The method is also
shown in Figure G.1. Table G.1 shows a summary of the plastic deformation of the beams after subjected
to dynamic loading. These deformations are also referred to as the initial deflection when analysing the
static tests in Section 8.4.
u1 u2
upl =
u1 + u2
2
0.35L 0.35L
L
Figure G.1 How the plastic deformation at 0.35L was determined.
Table G.1 Plastic deformation of the beams in Series-1-4 after dynamic testing. Measured under the
applied load. Values in mm.
Beam nr 1 2 3 4 5 6 10 11 12 13 14 15
푢푝푙 19.5 19.6 22.2 27.4 18.3 14.9 34.0 31.4 35.3 33.3 35.9 35.8
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 G-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 G-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 G-1

-- 201 of 237 --



-- 202 of 237 --

H Calculation of Impulse Load
The impulse was determined by calculating the area under the 퐹 -푡 curve, constructed from the accelera-
tions extracted in DIC. The total impulse 퐼푡표푡 was divided into two contributions, namely 퐼푖푛푖 and 퐼푝표푠푡,
where the first was the impulse during the first peak and the latter the impulse that occurred over a longer
time. Figure H.1 schematically shows how the curve was estimated with a trend line. The trend line for
퐼푝표푠푡 is a polynomial of degree two, which was integrated to get the area under the curve. The limit of the
calculation was don from the moment the drop-weight hit the beam until 퐼푝표푠푡 reached zero.
-20
0
20
40
60
80
100
0 	10 	20 	30
Force,
 	F 	[kN]
Time, t [ms]
Beam 4
v
u
(a) Measured curve.
-20
0
20
40
60
80
100
0 	10 	20 	30
Force,
 	F 	[kN]
Time, t [ms]
Trendline
Iini
Ipost
Itot =Iini+Ipost
 (b) Trend line.
Figure H.1 Schematic showing of how the impulse load was determined.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 H-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 H-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 H-1

-- 203 of 237 --



-- 204 of 237 --

I Calculation of Stiffness
It is important to reflect on how the stiffness’s 푘푖 is calculated since the curve has a parabolic shape
with different shape, depending on if it is unloading or reloading, which can be seen in Figure I.1. The
stiffness’s presented here represents a mean value of the unloading and loading stiffness. A straight line
has been assumed from the lowest values up to where the two lines cross each other, almost at the start
of the unloading process and the stiffness 푘 is calculated as
푘 = Δ퐹
Δ푢 (I.1)
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Beam 17
k 	ΔF
Δu
Reloading
Unloading	kII.m
Figure I.1 Method for measuring the stiffness in different parts of the loading process.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 I-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 I-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 I-1

-- 205 of 237 --



-- 206 of 237 --

J Calculation of Internal Work
The internal Work is calculated as the area under the load-deflection diagram, see Figure J.1. State II
stiffness is assumed when calculating the plastic part of the internal work.
0
2
4
6
8
10
12
14
16
18
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
Beam 17F100%
F80%
Wpl.100%
Wpl.80%
Figure J.1 Method for measuring the stiffness in different parts of the loading process.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 J-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 J-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 J-1

-- 207 of 237 --



-- 208 of 237 --

K Mathcad Calculations
Load capacity of beam
≔	unit 	⋅	――――
kg
――
7
10
⋅	m
――
7
10 s
――
14
10
109
Input data:
Geometry:
≔	h 0.1 m 	Beam height
≔	b 0.1 m 	Beam width
≔	L 1 m 	Effective span length
≔	ϕ 6 mm 	Bar diameter
≔	Abar 	=	⋅	π ――
ϕ2
4 28.274 mm 2 Area of one bar
≔	n 2 	Number of bars in the bottom
≔	n' 2 	Number of bars in the top
Created with PTC Mathcad Express. See www.mathcad.com for more information.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-1

-- 209 of 237 --

≔	As 	=	⋅	n Abar 56.549 mm 2 Area of bottom reinforcement
≔	A's 	=	⋅	n' Abar 56.549 mm 2 Area of top reinforcement
≔	d 77.22 mm 	Measured position of bars. From
top edge to bottom reinforcement
≔	d' 22.67 mm 	Measured position of bars. From
top edge to top reinforcement.
Material properties:
Concrete:
≔	fcm 	⋅	36.83 MPa 	Mean compressive strength
≔	fck 	=	-	fcm 8 MPa 28.83 MPa 	Characteristic compressive strength
≔	fctm 	=	⋅	0.3 28.83
―
2
3 MPa 2.821 MPa 	Mean concrete tensile strength
≔	k 	=	-	1.6 ――
100
1000 1.5 	Factor for flexural tensile strength
≔	fct.fl 	=	⋅	fctm k 4.231 MPa 	Flexural tensile strength
≔	Ecm 	=	⋅	⋅	22
⎛
⎜
⎝―――
⋅	fcm 10-6
10
⎞
⎟
⎠
0.3
unit 32.53 GPa 	Mean modulus of elasticity
≔	εcu 0.0035 	Ultimate concrete strain
Reinforcing steel:
≔	fym 513 MPa 	Mean yield strength
≔	fu 623 MPa 	Ultimate strength
≔	Esm 196 GPa 	Mean modulus of elasticity
≔	εsu 0.106 	Ultimate steel strain
≔	εsy 	=	――
fym
Esm
0.003 	Yield strain
Design values
Partial factors are set to 1.0 which gives:
≔	fcd 	=	fcm 36.83 MPa 	Design compressive strength
≔	fyd 	=	fym 513 MPa 	Design yield stress
Created with PTC Mathcad Express. See www.mathcad.com for more information.
K-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 210 of 237 --

≔	fcd 	=	fcm 36.83 MPa
≔	fyd 	=	fym 513 MPa 	Design yield stress
And so on...
Load capacity in Ultimate limit state considering only bottom reinforcement
≔	αRu 0.81
Stress block factors taken from
Engström (2013). Table B5.3	≔	βRu 0.416
Assume yelding in the steel
>	εs.1 εsy
≔	xu 20 mm 	Guessed position of neutral axis
≔	xu root ⎛⎝ 	,	-	⋅	⋅	⋅	αRu fcd b xu 	⋅	⋅	fyd n Abar xu⎞⎠
=	xu 9.724 mm 	Calculated position of neutral axis.
NOTE! Top reinforcement is in the
tensile zone but is neglected anyway
≔	εs.1 	=	⋅	――
-	d xu
xu
εcu 0.024 	=	εsy 0.003 	>	εs1 εsy 	!	OK
≔	Mu 	=	⋅	⋅	⋅	⋅	αRu fcd b xu ⎛⎝ -	d 	⋅	βRu xu⎞⎠ 2.123 	⋅	kN m 	Moment capacity
≔	Rm.2 	=	――
⋅	4 Mu
L 8.491 kN 	Consicering three point loading
≔	Fu.4 	=	―――
Mu
⋅	0.35 L 6.065 kN 	Consicering four point loading
≔	Ftot.u.4 	=	⋅	Fu.4 2 12.13 kN 	Load capacity for two point loads
acting 0.35m from each side
≔	φu 	=	――
εs.1
-	d xu
0.36 m-1 Curvature at failure
Created with PTC Mathcad Express. See www.mathcad.com for more information.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-3

-- 211 of 237 --

Load capacity at yielding considering only bottom reinforcement
≔	εcc 0.0009248 	Assume a concrete strain
less than the ultimate strain
≔	xy 	=	⋅	―――
εcc
+	εcc εsy
d 20.161 mm 	Top reinforcement will be at
neutral axis
Interpolation from values in
Table B5.3 in Engström
(2013). 0.436 corresponds to
0.0006 and 0.546 to 0.0007
≔	αRy 	=	+	0.347 	⋅	――
1.248
2 0.070 0.39068
Stress block factors taken from
Engström (2013). Table B5.3. Also
interpolated
≔	βRy 	=	+	0.343 	⋅	――
1.248
2 0.003 0.34487
=	-	⋅	⋅	⋅	αRy fcd b xy 	⋅	⋅	fyd n Abar 	⋅	-3.874 10-4 kN 	Should be around zero
≔	My 	=	⋅	⋅	⋅	⋅	αRy fcd b xy ⎛⎝ -	d 	⋅	βRy xy⎞⎠ 2.038 	⋅	kN m 	Moment capacity
≔	Fy.3 	=	――
⋅	4 My
L 8.154 kN 	Consicering three point loading
≔	Fy.4 	=	―――
My
⋅	0.35 L 5.824 kN 	Consicering four point loading
≔	Ftot.y.4 	=	⋅	Fy.4 2 11.648 kN 	Load capacity for two point loads
acting 0.35m from each side
≔	φy 	=	――
εsy
-	d xy
0.046 m-1 Curvature at yielding
Created with PTC Mathcad Express. See www.mathcad.com for more information.
K-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 212 of 237 --

Summary
=	My 2.038 	⋅	kN m 	Moment at yielding
=	Ftot.y.4 11.648 kN 	Total applied load at yielding
=	φy 0.046 ―
1
m Curvature at yielding
=	Mu 2.123 	⋅	kN m 	Moment capacity
=	Ftot.u.4 12.13 kN 	Load capacity
=	φu 0.36 ―
1
m Ultimate curvature
≔	φpl 	=	-	φu φy 0.314 ―
1
m
Created with PTC Mathcad Express. See www.mathcad.com for more information.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-5

-- 213 of 237 --

Theoretical load-deflection relationship
State I
≔	αs 	=	――
Esm
Ecm
6.025 	Modular ratio
Moment of inertia in state I
≔	II 	=	+	+	――
⋅	b h3
12 ⋅	⋅	⋅	⎛⎝ -	αs 1⎞⎠ n Abar
⎛
⎜
⎝ -	d ⎛
⎜
⎝―
h
2
⎞
⎟
⎠
⎞
⎟
⎠
2
⋅	⋅	⋅	⎛⎝ -	αs 1⎞⎠ n' Abar
⎛
⎜
⎝ -
⎛
⎜
⎝―
h
2
⎞
⎟
⎠ d'⎞
⎟
⎠
2
⎛⎝ 	⋅	8.756 10-6⎞⎠ m4
≔	Mcr 	=	―――
⋅	fct.fl II
―
h
2
0.741 	⋅	kN m 	Cracking moment
≔	Fcr.4 	=	―――
Mcr
⋅	0.35 L 2.117 kN 	Consicering four point loading. Total
load per point when cracking occurs
≔	Ftot.cr.4 	=	⋅	Fcr.4 2 4.234 kN 	Load capacity for two point loads
acting 0.35m from each side when
cracking occurs
State II
Start by considering moment of area around the neutral axis
≔	xII 30 mm
Assuming that top reinforcement is in the tensile zone
≔	xII 	=	root
⎛
⎜
⎝ ,	-	-	―――
⋅	b xII
2
2 ⋅	⋅	αs A's ⎛⎝ -	d' xII⎞⎠ 	⋅	⋅	αs As ⎛⎝ -	d xII⎞⎠ xII
⎞
⎟
⎠ 20.151 mm
≔	III 	=	+	+	―――
⋅	b xII
3
3 ⋅	⋅	⎛⎝ -	αs 1⎞⎠ A's ⎛⎝ -	d' xII⎞⎠
2
⋅	⋅	αs As ⎛⎝ -	d xII⎞⎠
2
⎛⎝ 	⋅	1.384 10-6⎞⎠ m4
Stiffnesses
≔	a 0.35 m 	Distance to point load from edge
≔	KI 	=	――――――
⋅	⋅	48 Ecm II
⋅	⋅	a L2 ⎛
⎜
⎝
-	3 ――
⋅	4 a2
L2
⎞
⎟
⎠
15.563 ――
kN
mm Stiffness in state I
Stiffness in state II
≔	KII 	=	――――――
⋅	⋅	48 Ecm III
⋅	⋅	a L2 ⎛
⎜
⎝
-	3 ――
⋅	4 a2
L2
⎞
⎟
⎠
2.46 ――
kN
mm
Created with PTC Mathcad Express. See www.mathcad.com for more information.
K-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 214 of 237 --

Deformation considering only State II until ultimate load
=	Ftot.u.4 12.13 kN 	Peak load
≔	uII 	=	―――
Ftot.u.4
KII
4.93 mm 	Deflection at peak load
≔	u
0 mm
uII
30 mm
⎡
⎢
⎢
⎣
⎤
⎥
⎥
⎦
≔	Force
0
Ftot.u.4
Ftot.u.4
⎡
⎢
⎢
⎣
⎤
⎥
⎥
⎦
Vectors for plot
Deformation considering state I and state II
≔	ucr 	=	―――
Ftot.cr.4
KI
0.272 mm 	Deformation at cracking
≔	Kcy 	=	―――――
-	Ftot.u.4 Ftot.cr.4
-	uII ucr
1.695 ――
kN
mm Stiffness between cracking and
yielding
≔	u2
0 mm
ucr
uII
30 mm
⎡
⎢
⎢
⎢
⎢⎣
⎤
⎥
⎥
⎥
⎥⎦
≔	Force2
0
Ftot.cr.4
Ftot.u.4
Ftot.u.4
⎡
⎢
⎢
⎢
⎢⎣
⎤
⎥
⎥
⎥
⎥⎦
Vectors for plot
Load-deformation plot
2
3
4
5
6
7
8
9
10
11
12
0
1
13
6 	9 	12 	15 	18 	21 	24 	27	0 	3 	30
u ((mm))
u2 ((mm))
Force ((kN))
Force2 ((kN))
Created with PTC Mathcad Express. See www.mathcad.com for more information.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-7

-- 215 of 237 --

Prediction of Plastic rotation capacity
Input data:
≔	L 1 m 	Span length
≔	l0 0.35 m 	Distance to critical section from support
Eurocode 2
=	xu 9.724 mm 	Position of neutral axis in
ultimate state. Considering
only bottom reinforcement
=	―
xu
d 0.126
≔	θref.EC 0.031 	Plastic rotation for a beam with
slenderness 3
≔	λ 	=	―
l0
d 4.533 	Slenderness
≔	κλ 	=
‾‾
―
λ
3 1.229 	Correction factor
≔	θtot.EC 	=	⋅	κλ θref.EC 0.038 	Corrected rotation capacity for real
slenderness
≔	θpl.EC 	=	―――
θtot.EC
2 0.019 	Consider that the angle referred in EC is
twice the angle studied in this report
Created with PTC Mathcad Express. See www.mathcad.com for more information.
K-8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 216 of 237 --

≔	upl.EC 	=	⋅	θpl.EC l0 6.668 mm 	Plastic deformation
Betonghandboken (ABC-Method)
≔	ω's 0 	Mechanical ration of compression
reinforcement. It is zero since it has been
prven to be subjected to tensile forces
≔	ωv 0 	Mechanical ration of shear
reinforcement. It is zero since there is no
shear reincforcement present
≔	ωs 	=	―――
⋅	As fym
⋅	⋅	b d fcm
0.102 	Mechanical ratio of tension
reinforcement. The contribution of the
top bars can be neglected since no
stirrups were included
≔	A 	=	-	+	+	1 	⋅	1.3 ωv 	⋅	3 ω's 	⋅	5 ωs 0.49 	Factor A
≤	≤	0.05 A 2.30 	!	OK
≔	B 1 	Factor B
=	⋅	A B 0.49 	≤	0.49 1.5 	!	OK
≔	C 	=	⋅	7 ―
l0
d 31.728 	Factor C
≔	θpl.95.ABC 	=	⋅	⋅	⋅	A B C 10-3 0.016 	Plastic rotation
≔	upl.95.ABC 	=	⋅	θpl.95.ABC l0 5.4412 mm 	Plastic deformation
Bk25
Plastic hinge is formed in the field
≔	lpl 	=	+	⋅	0.5 d 	⋅	0.15 L 0.189 m 	Plastic hinge length
≔	ωs.crit 	=	―――
⋅	0.8 εcu
+	εcu εsu
0.026
Checking failure mode
=	ωs 0.102
≔	θpl.Bk25.f 	=	⋅	―――
⋅	0.4 εcu
ωs
⎛
⎜
⎝ +	1 	⋅	0.3 ―
L
d
⎞
⎟
⎠ 0.067 	ws >wcrit
Created with PTC Mathcad Express. See www.mathcad.com for more information.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-9	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-9	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-9

-- 217 of 237 --

≔	θpl.Bk25.f 	=	⋅	―――
⋅	0.4 εcu
ωs
⎛
⎜
⎝ +	1 	⋅	0.3 ―
L
d
⎞
⎟
⎠ 0.067
≔	upl.Bk25 	=	⋅	θpl.Bk25.f l0 23.467 mm
Methods based on equivalent hinge length
Tamminens D-Factor
≔	k 0.3 m 	Factor depending on concrete class
≔	D 	=	―
k
d 3.885 	Factor D
≔	θpl.95.Tamminen 	=	⋅	⋅	⋅	⋅	A B C D 10-3 0.06 	Plastic rotation
≔	upl.95.Tamminen 	=	⋅	θpl.95.Tamminen l0 21.139 mm Plastic deformation
Baker and Amarkone
≔	k1 0.9 	Cold worked steel
≔	k2 1 	No axial load. P=0
≔	k3 	=	-	0.9 ―――――
-	fcm 13.8 MPa
92 MPa 0.65
≔	lpl.BA 	=	⋅	⋅	⋅	⋅	k1 k2 k3
⎛
⎜
⎝―
l0
d
⎞
⎟
⎠
―
1
4
d 65.88 mm 	Equivalent plastic hinge length
≔	θpl.BA 	=	⋅	lpl.BA φpl 0.021 	Plastic rotation
ACI-ASCE Comittee 428
Strain ratio
≔	Re 	=	――――
-	0.004 εcc
-	εcu εcc
1.194
Moment ratio
≔	Rm 	=	―――
-	Mu My
-	Mu My
1
=	l0 0.35 m 	Not the value suggested in their method.
But to calculate it according to their
method, a uniformy distributed load is
needed. Therefore, the value used in this
report is used
≔	lpl.ACI.lower 	=	min ⎛
⎜
⎝ ,	⋅	Re
⎛
⎜
⎝ +	―
d
4 ⋅	⋅	0.03 l0 Rm
⎞
⎟
⎠ ⋅	Re d⎞
⎟
⎠ 35.592 mm 	Lower value of lpl
Created with PTC Mathcad Express. See www.mathcad.com for more information.
K-10 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-10 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-10 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 218 of 237 --

≔	lpl.ACI.lower 	=	min ⎛
⎜
⎝ ,	⋅	Re
⎛
⎜
⎝ +	―
d
4 ⋅	⋅	0.03 l0 Rm
⎞
⎟
⎠ ⋅	Re d⎞
⎟
⎠ 35.592 mm
≔	lpl.ACI.upper 	=	⋅	Re
⎛
⎜
⎝ +	―
d
2 ⋅	0.10 l0 Rm
⎞
⎟
⎠ 87.902 mm Upper value of lpl
≔	θpl.ACI.lower 	=	⋅	lpl.ACI.lower φpl 0.011 	Plastic rotation
≔	θpl.ACI.upper 	=	⋅	lpl.ACI.upper φpl 0.028 	Plastic rotation
Paulay and Priestley
=	fym 513 MPa 	≔	fy 	=	⋅	fym ――
1
MPa 513
≔	lpl.PP 	=	+	⋅	0.08 l0 	⋅	⋅	0.022 fy ϕ 95.716 mm 	Equivalent plastic hinge length
≔	θpl.PP 	=	⋅	lpl.PP φpl 0.0301 	Plastic rotation
Panagiotakos and Fardis
≔	lpl.PF.cy 	=	⋅	0.12 l0 42 mm 	Equivalent plastic hinge length. No
slipping of reinforcement possible. One
length for cyclic and one for monotonic
loading	≔	lpl.PF.mon 	=	⋅	1.5 lpl.PF.cy 63 mm
≔	θpl.PF.cy 	=	⋅	lpl.PF.cy φpl 0.013 	Plastic rotation at cyclic loading
≔	θpl.PF.mon 	=	⋅	lpl.PF.mon φpl 0.0198 	Plastic rotation at monotonic loading
Created with PTC Mathcad Express. See www.mathcad.com for more information.
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-11	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-11	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 K-11

-- 219 of 237 --

Summary of rotational capacities in radians
=	θpl.EC 0.019 rad 	Eurocode
=	θpl.95.ABC 0.016 rad 	Betonghandboken
=	θpl.Bk25.f 0.067 rad 	Bk25
=	θpl.95.Tamminen 0.06 rad 	Tamminens D-factor
=	θpl.BA 0.021 rad 	Baker and Amarkone
=	θpl.ACI.lower 0.011 rad 	ACI-ASCE Comittee 428 lower value
=	θpl.ACI.upper 0.028 rad 	ACI-ASCE Comittee 428 upper value
=	θpl.PP 0.03 rad 	Paulay and Priestley
=	θpl.PF.cy 0.013 rad 	Panagiotakos and Fardis cyclic loading
=	θpl.PF.mon 0.02 rad 	Panagiotakos and Fardis monotonic
loading
Created with PTC Mathcad Express. See www.mathcad.com for more information.
K-12 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-12 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	K-12 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 220 of 237 --

L MATLAB Script for 2DOF Model
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%% %%%%%%%%%%%
%%%%%%%%%%%% Simplified 2DOF System %%%%%%%%%%%
%%%%%%%%%%%% %%%%%%%%%%%
%%%%%%%%%%%% %%%%%%%%%%%
%%%%%%%%%%%% Jack Jönsson %%%%%%%%%%%
%%%%%%%%%%%% Anton Stenseke %%%%%%%%%%%
%%%%%%%%%%%% %%%%%%%%%%%
%%%%%%%%%%%% Modified from the version made by %%%%%%%%%%%
%%%%%%%%%%%% Fabio Lozano Mendoza and Josef Makdesi Aphram %%%%%%%%%%%
%%%%%%%%%%%% %%%%%%%%%%%
%%%%%%%%%%%% Chalmers University of Technology %%%%%%%%%%%
%%%%%%%%%%%% %%%%%%%%%%%
%%%%%%%%%%%% 15 - May - 2018 %%%%%%%%%%%
%%%%%%%%%%%% %%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
clear all
close all
clc
conditions=1; % Indata for different impact conditions.
% 1 - 2.5 m, 10 kg
% 2 - 5.0 m, 10 kg
% 3 - 2.5 m, 20 kg
% 4 - 5.0 m, 20 kg
resistance=1; % Indata for resistance
% 1 - resistance if yielding is at fy
% 2 - resistance if yielding is at fu
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
if conditions==1
m_1 = 10; %[kg] mass of the drop-weight
L_d = 0.250; %[m] Length Drop-weight
height = 2.5; % [m] Drop height
elseif conditions==2
m_1 = 10; %[kg] mass of the drop-weight
L_d = 0.250; %[m] Length Drop-weight
height = 5.0; % [m] Drop height
elseif conditions==3
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-1

-- 221 of 237 --

m_1 = 20; %[kg] mass of the drop-weight
L_d = 0.500; %[m] Length Drop-weight
height = 2.5; % [m] Drop height
elseif conditions==4
m_1 = 20; %[kg] mass of the drop-weight
L_d = 0.500; %[m] Length Drop-weight
height = 5.0; % [m] Drop height
end
if resistance==1
R_u=8.491e3; % Resistance with fy
elseif resistance==2
R_u=10.189e3; % Resistance with fu
end
MATERIAL PROPERTIES
% Concrete
r_c = 2384; % [kg/m^3] Mass density
E_c = 32.53e9; % [Pa] Modulus of elasticity
% Steel
r_s = 7800; % [kg/m^3] Mass density
E_s = 196e9; % [Pa] Modulus of elasticity
GEOMETRY
A_1 = 5027e-6; % [m^2] Area dropweight
A_2 = 0.1*0.1; % [m^2] Area beam
L_b = 1; % [m] Length Beam
L_d = L_d; % [m] Length Drop-weight
TRANSFORMATION FACTORS
% Transformation factors for the beam
k_b_m_el = 0.486; % Elastic mass transformation factor
k_b_m_pl = 0.333; % Plastic mass transformation factor
k_b_F_el = 1; % Elastic load transformation factor
k_b_F_pl = 1; % Plastic load transformation factor
k_b_K_el = 1; % Elastic stiffness transformation factor
k_b_K_pl = 1; % Plastic stiffness transformation factor
% Trasnformation factors for the drop-weight
L-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	L-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	L-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 222 of 237 --

k_d_m = 1; % Plastic mass transformation factor
k_d_F = 1; % Plastic load transformation factor
k_d_K = 1; % Plastic stiffness transformation factor
MASS PROPERTIES
m_1 = m_1; %[kg] mass of the drop-weight
m_2 = r_c*A_2*L_b; %[kg] mass of the beam
% Mass matrix
M = [m_1*k_d_m 0; 0 m_2*k_b_m_pl];
STIFFNESS PROPERTIES
I_b_ii = 1.121e-6; % [m^4]Second moment of inertia of the beam
% corresponding to the stiffness in state II.
% Calculated beforehand for adjusted position of
% reinforcement bars
K_el_1 = A_1*E_s/L_d; % [N/m] Elastic stiffness of the drop-weight
K_el_2 = 48*E_c*I_b_ii/L_b^3; % [N/m] Elastic stiffness of the beam
% Initial stiffness matrix
K_el = [K_el_1 -K_el_1;
-K_el_1 K_el_1+K_el_2];
MATERIAL RESPONSE
% Drop-weight
R_1 = 50000; % [N] Plastic resistance
u_el_1 = R_1/K_el_1; % [m] Limit of elastic deformation
u_rd_1 = 50000; % [m] Limit of plastic deformation
% Beam
R_2_sw = r_c*9.81*A_2*L_b/2; % [N] Reduction of plastic resistance
% due to self-weight
R_2 = R_u - R_2_sw; % [N] Plastic resistance.
u_el_2 = R_2/K_el_2; % [m] Limit of elastic deformation
u_rd_2 = 50; % [m] Limit of plastic deformation
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-3

-- 223 of 237 --

DETERMINATION OF EIGENFREQUENCIES
[L,X] = eig(K_el, M); % "L" is a matrix containing the eigenvectors
% "X" is a matrix containing the eigenvalues
% Maximum eigenfrequency
w_max = sqrt(max(max(X)));
CRITICAL TIME STEP
h_crit = 2/w_max; % [s] Maximum admissible value
h = 0.1e-4; % [s] Chosen time step
t_end = 40e-3; % [s] End of sequence
t = linspace(0,t_end,t_end/h); % Time vector
if h >= h_crit
disp(’ERROR, chosen time step too large’)
end
INITIAL CONDITIONS
% Empty matrices
dofs = 2; % Number of degree of freedom
u = zeros(dofs, length(t)); % Empty matrix storing displacement vectors
v = zeros(dofs, length(t)-1); % Velocity vectors
a = zeros(dofs, length(t)-1); % Acceleration vectors
% Assigning initial values
u(:,1) = [0;0]; % Initial Displacement
height = height; % [m] Drop height
%v_d = 8.86; % [m/s] Initial velocity of drop-weight
% [measured value]
v_d = sqrt(2*9.81*height); % [m/s] Initial velocity of drop-weight
% % [theoretical value]
v(:,1) = [v_d; 0]; % Velocities at time t = 0
a_0 = inv(M)*(-K_el*u(:,1)); % Initial acceleration vector
a(:,1) = a_0; % Initial acceleration as calculated before
u_b0 = u(:,1)-h*v(:,1)+h^2/2*a(:,1); % Displacement at time step n-1
L-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	L-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	L-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 224 of 237 --

% Initial plastic deformation
u_pl_1 = 0; % Plastic deformation of rod
u_pl_2_pos = 0; % Plastic deformation of beam in compression
u_pl_2_neg = 0; % Plastic deformation of beam in tension
CENTRAL DIFFERENTIAL METHOD
for i =2:length(t)
du = u(1,i-1)-u(2,i-1); % [m] Relative displacement bewteen beam
% and drop-weight
u2 = u(2,i-1); % [m] Downwards beam displacement
% Determining resistance and stiffness of ficticious spring between
% drop-weight and beam
% If du = 0, set stiffness equal to elastic stiffness
if du == 0;
K_1 = K_el_1;
% If spring is in tension, set stiffness to 0
elseif du < u_pl_1;
K_1 = 0;
% If spring is in elastic range
elseif du > u_pl_1 && du <= u_pl_1+u_el_1;
R = K_el_1*(du-u_pl_1);
K_1 = R/du;
% If spring is in plastic range
elseif du > u_pl_1+u_el_1
K_1 = R_1/du;
u_pl_1 = du-u_el_1;
end
% Determining resistance and stiffness of beam spring
% If u2 = 0, set stiffness equal to elastic stiffness
if u2 == 0;
K_2 = K_el_2;
% If spring is in elastic tension/compression
elseif u2 > u_pl_2_pos - u_el_2 && u2 <= u_pl_2_pos + u_el_2
R = K_el_2*(u2-u_pl_2_pos);
K_2 = R/u2;
% If spring is in plastic compression
elseif u2 > u_pl_2_pos + u_el_2;
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-5

-- 225 of 237 --

K_2 = R_2/u2;
u_pl_2_pos = u2-u_el_2;
% If spring is in plastic tension
elseif u2 <= u_pl_2_pos - u_el_2
K_2 = -R_2/u2;
u_pl_2_neg = abs(u2+u_el_2-u_pl_2_pos);
u_pl_2_pos = u_pl_2_pos - u_pl_2_neg;
end
% Storing values of resistance for all time steps
Res(1,i-1) = K_1*du;
Res(2,i-1) = K_2*u2;
% Computing stiffness matrix
K = [(K_1) -(K_1); -(K_1) (K_1)+(K_2)];
% Calculation of displacement, velocity and acceleration
if i==2
u(:,i) = inv(M/h^2)*(-(K-2*M/h^2)*u(:,i-1)-(M/h^2)*u_b0);
else
u(:,i) = inv(M/h^2)*(-(K-2*M/h^2)*u(:,i-1)-(M/h^2)*u(:,i-2));
v(:,i-1) = (u(:,i)-u(:,i-2))/(2*h);
a(:,i-1) = (u(:,i)-2*u(:,i-1)+u(:,i-2))/h^2;
end
end
CALCULATION OF ENERGY
% External Work of Beam
DeltaWe(1) = 0;
We(1) = 0;
for i = 2:(length(t)-1)
DeltaWe(i) = 0.5*(Res(1,i-1)+Res(1,i))*(u(2,i)-u(2,i-1));
We(i) = We(i-1)+DeltaWe(i);
end
% Internal Work of Beam
DeltaWi(1) = 0;
Wi(1) = 0;
for i = 2:(length(t)-1)
DeltaWi(i) = 0.5*(Res(2,i-1)+Res(2,i))*(u(2,i)-u(2,i-1));
L-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	L-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	L-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 226 of 237 --

Wi(i) = Wi(i-1)+DeltaWi(i);
end
% Kinetic Energy
Wk(1)=0;
for i = 2:(length(t)-1)
Wk(i) = m_2*k_b_m_pl*0.5*v(2,i-1)^2;
end
% Total Energy
Wt(1)=0;
for i = 2:(length(t)-1)
Wt(i) = Wi(i)+Wk(i);
end
CREATING PLOTS
% Displacement vs Time plots
figure(1)
plot(t*1000,u(1,:)*1000,’LineWidth’,3);
set(gca,’fontsize’,16)
title(’Displacement of mass 1’, ’FontSize’, 30)
xlabel(’Time [ms]’); ylabel(’Displacement [mm]’);
figure(2)
plot(t*1000,u(2,:)*1000,’LineWidth’,3);
set(gca,’fontsize’,16)
title(’Displacement of mass 2’, ’FontSize’, 30)
xlabel(’Time [ms]’); ylabel(’Displacement [mm]’);
% Resistance vs Displacement
figure(3)
plot(u(2,1:length(u)-1)*1000,Res(2,:)/1000,’LineWidth’,3);
set(gca,’fontsize’,16)
title(’Internal Resistance vs Displacement - Body 2’, ’FontSize’, 30)
xlabel(’Displacement [mm]’); ylabel(’Resistance [kN]’);
%figure(4)
plot(u(1,1:1500)*1000-u(2,1:1500)*1000,Res(1,1:1500)/1000,’LineWidth’,3);
set(gca,’fontsize’,16)
title(’Internal Resistance vs Displacement - Body 1’, ’FontSize’, 30)
xlabel(’Displacement [mm]’); ylabel(’Resistance [kN]’);
%
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-7

-- 227 of 237 --

%Resistance vs Time
figure(5)
plot(t(1:length(t)-1)*1000,Res(2,:)/1000,’LineWidth’,3);
set(gca,’fontsize’,16)
title(’Internal Resistance vs Time - Body 2’, ’FontSize’, 30)
xlabel(’Time [ms]’); ylabel(’Resistance [kN]’);
%
figure(6)
plot(t(1:1500)*1000,Res(1,1:1500)/1000,’LineWidth’,3);
set(gca,’fontsize’,16)
title(’Internal Resistance vs Time - Body 1’, ’FontSize’, 30)
xlabel(’Time [ms]’); ylabel(’Resistance [kN]’);
% Velocity vs Time
figure(7)
plot(t(1:(length(t)-1))*1000,v(1,:),’LineWidth’,3);
set(gca,’fontsize’,16)
title(’Velocity of Body 1’, ’FontSize’, 30)
xlabel(’Time [ms]’); ylabel(’Velocity [m/s]’);
figure(8)
plot(t(1:(length(t)-1))*1000,v(2,:),’LineWidth’,3);
set(gca,’fontsize’,16)
title(’Velocity of Body 2’, ’FontSize’, 30)
xlabel(’Time [ms]’); ylabel(’Velocity [m/s]’);
% Work vs Time
%figure(9)
plot(t(1:(length(t)-1))*1000,We(:),’LineWidth’,3);
hold on
plot(t(1:(length(t)-1))*1000,Wi(:),’LineWidth’,3);
hold on
plot(t(1:(length(t)-1))*1000,Wk(:),’LineWidth’,3);
hold on
plot(t(1:(length(t)-1))*1000,Wt(:),’LineWidth’,3);
set(gca,’fontsize’,16)
title(’External Work of Body 2’, ’FontSize’, 30)
xlabel(’Time [ms]’); ylabel(’Velocity [m/s]’);
L-8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	L-8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	L-8 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 228 of 237 --

height;
v_init = v(1,2);
maxdisp = max(max(u(2,:)));
u_pl = maxdisp - u_el_2;
% To get the displacements and time in [mm] and [ms]
t=t*1000;
u=u*1000;
R_2
[height v_init maxdisp u_pl]
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-9	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-9	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 L-9

-- 229 of 237 --



-- 230 of 237 --

M LS-DYNA Input File
$# LS-DYNA Keyword file created by LS-PrePost(R) V4.5.4 - 07Nov2017
$# Created on Apr-21-2018 (09:37:17)
*KEYWORD
*TITLE
$# title
LS-DYNA keyword deck by LS-PrePost
*CONTROL_TERMINATION
$# endtim endcyc dtmin endeng endmas nosol
20.0 0 0.0 0.0 1.000000E8 0
*DATABASE_ELOUT
$# dt binary lcur ioopt option1 option2 option3 option4
0.1 3 0 1 0 0 0 0
*DATABASE_GLSTAT
$# dt binary lcur ioopt
0.1 3 0 1
*DATABASE_MATSUM
$# dt binary lcur ioopt
0.1 3 0 1
*DATABASE_NCFORC
$# dt binary lcur ioopt
0.5 3 0 1
*DATABASE_NODFOR
$# dt binary lcur ioopt
0.5 3 0 1
*DATABASE_NODOUT
$# dt binary lcur ioopt option1 option2
0.5 3 0 1 0.0 0
*DATABASE_RCFORC
$# dt binary lcur ioopt
0.1 0 0 1
*DATABASE_BINARY_D3PLOT
$# dt lcdt beam npltc psetid
0.2 0 0 0 0
$# ioopt
0
*DATABASE_EXTENT_BINARY
$# neiph neips maxint strflg sigflg epsflg rltflg engflg
5 0 0 1 1 1 1 1
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-1	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-1

-- 231 of 237 --

$# cmpflg ieverp beamip dcomp shge stssz n3thdt ialemat
0 0 1 1 1 1 2 1
$# nintsld pkp_sen sclp hydro msscl therm intout nodout
0 0 1.0 0 0 0
$# dtdt resplt neipb quadr cubic
0 0 0 0 0
*BOUNDARY_SPC_SET_ID
$# id 	heading
1BC left vertical
$# nsid cid dofx dofy dofz dofrx dofry dofrz
1 0 0 0 1 0 0 0
*SET_NODE_LIST_TITLE
BC Left vertical
$# sid da1 da2 da3 da4 solver
1 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8
10299 10300 10342 10343 11178 11179 11180 11181
11182 11183 11184 11185 11186 11187 11188 11189
11190 11191 11192 11193 11194 11195 11196 11197
11198 11199 11200 11201 11202 11203 11204 11205
11206 11207 11208 11209 11210 11211 11212 11213
11214 11215 11216 11217 0 0 0 0
*BOUNDARY_SPC_SET_ID
$# id 	heading
2BC left horizonal
$# nsid cid dofx dofy dofz dofrx dofry dofrz
2 0 1 1 0 0 0 0
*SET_NODE_LIST_TITLE
BC Left horizontal
$# sid da1 da2 da3 da4 solver
2 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8
10288 10331 10958 10959 10960 10961 10962 10963
10964 10965 10966 10967 10968 10969 10970 10971
10972 10973 10974 10975 10976 10977 0 0
*BOUNDARY_SPC_SET_ID
$# id 	heading
3BC right vertical
$# nsid cid dofx dofy dofz dofrx dofry dofrz
3 0 0 0 1 0 0 0
*SET_NODE_LIST_TITLE
BC Right vertical
$# sid da1 da2 da3 da4 solver
3 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8
15381 15382 15424 15425 15886 15887 15888 15889
15890 15891 15892 15893 15894 15895 15896 15897
M-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	M-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	M-2 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 232 of 237 --

15898 15899 15900 15901 15902 15903 15904 15905
15906 15907 15908 15909 15910 15911 15912 15913
15914 15915 15916 15917 15918 15919 15920 15921
15922 15923 15924 15925 0 0 0 0
*BOUNDARY_SPC_SET_ID
$# id 	heading
4BC right horizontal
$# nsid cid dofx dofy dofz dofrx dofry dofrz
4 0 1 1 0 0 0 0
*SET_NODE_LIST_TITLE
BC Right horizontal
$# sid da1 da2 da3 da4 solver
4 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8
15392 15435 16106 16107 16108 16109 16110 16111
16112 16113 16114 16115 16116 16117 16118 16119
16120 16121 16122 16123 16124 16125 0 0
*CONTACT_AUTOMATIC_SURFACE_TO_SURFACE_ID
$# cid 	title
1Contact-Weight-beam
$# ssid msid sstyp mstyp sboxid mboxid spr mpr
3 8 3 3 0 0 0 0
$# fs fd dc vc vdc penchk bt dt
0.0 0.0 0.0 0.0 0.0 0 0.01.00000E20
$# sfs sfm sst mst sfst sfmt fsf vsf
1.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0
*CONTACT_AUTOMATIC_SURFACE_TO_SURFACE_ID
$# cid 	title
2Contact-left support-beam
$# ssid msid sstyp mstyp sboxid mboxid spr mpr
1 8 3 3 0 0 0 0
$# fs fd dc vc vdc penchk bt dt
0.0 0.0 0.0 0.0 0.0 0 0.01.00000E20
$# sfs sfm sst mst sfst sfmt fsf vsf
1.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0
*CONTACT_AUTOMATIC_SURFACE_TO_SURFACE_ID
$# cid 	title
3Contact-right support-beam
$# ssid msid sstyp mstyp sboxid mboxid spr mpr
2 8 3 3 0 0 0 0
$# fs fd dc vc vdc penchk bt dt
0.0 0.0 0.0 0.0 0.0 0 0.01.00000E20
$# sfs sfm sst mst sfst sfmt fsf vsf
1.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0
*PART
$# 	title
Left support
$# pid secid mid eosid hgid grav adpopt tmid
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-3	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-3

-- 233 of 237 --

1 2 1 0 0 0 0 0
*SECTION_SOLID_TITLE
Support
$# secid elform aet
2 1 0
*MAT_ELASTIC_TITLE
Weight and supports
$# mid ro e pr da db not used
1 0.007711 196000.0 0.3 0.0 0.0 0
*PART
$# 	title
Right support
$# pid secid mid eosid hgid grav adpopt tmid
2 2 1 0 0 0 0 0
*PART
$# 	title
Weight
$# pid secid mid eosid hgid grav adpopt tmid
3 3 1 0 0 0 0 0
*SECTION_SOLID_TITLE
Weight
$# secid elform aet
3 1 0
*PART
$# 	title
Reinforcement, top-front
$# pid secid mid eosid hgid grav adpopt tmid
4 1 5 0 0 0 0 0
*SECTION_BEAM_TITLE
Reinforcment
$# secid elform shrf qr/irid cst scoor nsm
1 1 1.0 1 1 0.0 0.0
$# ts1 ts2 tt1 tt2 nsloc ntloc
6.0 6.0 0.0 0.0 0.0 0.0
*MAT_PIECEWISE_LINEAR_PLASTICITY_TITLE
Multi-linear reinforcment
$# mid ro e pr sigy etan fail tdel
5 0.0078 196000.0 0.3 0.0 0.0 1.00000E21 0.0
$# c p lcss lcsr vp
0.0 0.0 0 0 0.0
$# eps1 eps2 eps3 eps4 eps5 eps6 eps7 eps8
0.0 0.0016 0.0036 0.0128 0.0272 0.048 0.075 0.11
$# es1 es2 es3 es4 es5 es6 es7 es8
420.0 500.0 520.0 560.0 590.0 610.0 620.0 623.0
*PART
$# 	title
Reinforcement, top-back
$# pid secid mid eosid hgid grav adpopt tmid
M-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	M-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	M-4 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 234 of 237 --

5 1 5 0 0 0 0 0
*PART
$# 	title
Reinforcement, bottom-front
$# pid secid mid eosid hgid grav adpopt tmid
6 1 5 0 0 0 0 0
*PART
$# 	title
Reinforcement, bottom-back
$# pid secid mid eosid hgid grav adpopt tmid
7 1 5 0 0 0 0 0
*PART
$# 	title
Beam
$# pid secid mid eosid hgid grav adpopt tmid
8 4 3 0 0 0 0 0
*SECTION_SOLID_TITLE
Concrete
$# secid elform aet
4 10 0
*MAT_CONCRETE_DAMAGE_PLASTIC_MODEL_TITLE
Beam Concrete-CDPM2
$# mid ro e pr ecc qh0 ft fc
3 0.0023841 32530.0 0.2 0.517283 0.3 2.8 36.83
$# hp ah bh ch dh as df fc0
0.01 0.08 0.003 2.01.00000E-6 15.0 0.85 0.0
$# type bs wf wf1 ft1 strflg failflg efc
1.0 1.0 0.122 0.0 0.0 0.0 0.0 0.001
*MAT_PLASTIC_KINEMATIC_TITLE
Reinforcment
$# mid ro e pr sigy etan beta
2 0.00785 200000.0 0.3 609.8 584.0 0.0
$# src srp fs vp
0.0 0.0 0.0 0.0
*MAT_ELASTIC_TITLE
Beam elastic concrete
$# mid ro e pr da db not used
4 0.0024 3470.0 0.2 0.0 0.0 0
*INITIAL_VELOCITY_GENERATION
$#nsid/pid styp omega vx vy vz ivatn icid
3 2 0.0 0.0 0.0 -7.0 0 0
$# xc yc zc nx ny nz phase irigid
0.0 0.0 0.0 0.0 0.0 0.0 0 0
*DEFINE_FUNCTION
$# fid 	heading
1Bond-slip between reinfocement and concrete
$# 	function
float force(float slip,float leng)
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-5	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-5

-- 235 of 237 --

{
float force,pi,d,area,shear,pf,s1,s2,s3,tmax,tf;
pi = 3.1415926;
d = 6;
s1 = 1.0;
tmax = 15.172;
area = pi*d*leng;
if(slip < s1) {
shear = tmax*(slip/s1)**0.4;
} else{
shear = tmax;
}
force = shear*area;
return force;
}
*CONSTRAINED_BEAM_IN_SOLID_ID
$# coupid 	title
1reinforcmenttop-front
$# slave master sstyp mstyp ncoup cdir
4 8 1 1 0 0 0 1
$# start end axfor
0.0 0.0 0 -1
*CONSTRAINED_BEAM_IN_SOLID_ID
$# coupid 	title
2reinforcmenttop-back
$# slave master sstyp mstyp ncoup cdir
5 8 1 1 0 0 0 1
$# start end axfor
0.0 0.0 0 -1
*CONSTRAINED_BEAM_IN_SOLID_ID
$# coupid 	title
3reinforcmentbottom-front
$# slave master sstyp mstyp ncoup cdir
6 8 1 1 0 0 0 1
$# start end axfor
0.0 0.0 0 -1
*CONSTRAINED_BEAM_IN_SOLID_ID
$# coupid 	title
4reinforcmentbottom-back
$# slave master sstyp mstyp ncoup cdir
7 8 1 1 0 0 0 1
$# start end axfor
0.0 0.0 0 -1
*ELEMENT_SOLID
$# eid pid n1 n2 n3 n4 n5 n6 n7 n8
13000 1 10595 10643 13938 12838 10596 10596 12378 12378
13001 1 12838 13938 13939 12839 12378 12378 12379 12379
M-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	M-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34	M-6 , Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34

-- 236 of 237 --

13002 1 12839 13939 13940 12840 12379 12379 12380 12380
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
931148 8 134688 141565 61788 141564 141564 141564 141564 141564
931149 8 82805 156946 128551 82812 82812 82812 82812 82812
931150 8 134688 107363 61394 61788 61788 61788 61788 61788
*ELEMENT_BEAM
$# eid pid n1 n2 n3 rt1 rr1 rt2 rr2 local
34237 4 34330 34331 34332 0 0 0 0 2
34238 4 34331 34333 34334 0 0 0 0 2
34239 4 34333 34335 34336 0 0 0 0 2
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
35178 7 36214 36216 36217 0 0 0 0 2
35179 7 36216 36218 36219 0 0 0 0 2
35180 7 36218 36220 36221 0 0 0 0 2
*NODE
$# nid x y z tc rc
1 0.0 -590.0 -35.0 0 0
2 100.0 -500.0 0.0 0 0
3 0.0 -500.0 1.672415e-015 0 0
. . . . . .
. . . . . .
. . . . . .
196209 71.48462 -417.763 63.55512 0 0
196210 73.74369 -177.108 35.98502 0 0
196211 73.39993 -135.9213 35.75033 0 0
*END
, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-7	, Architecture and Civil Engineering, Master’s Thesis, ACEX30-18-34 M-7

-- 237 of 237 --