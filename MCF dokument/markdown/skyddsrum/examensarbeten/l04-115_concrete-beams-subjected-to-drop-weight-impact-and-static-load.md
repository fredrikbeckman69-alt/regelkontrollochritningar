---
title: "L04 115 Concrete Beams Subjected To Drop Weight Impact And Static Load"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-115_concrete-beams-subjected-to-drop-weight-impact-and-static-load.pdf"
fileType: "PDF"
keywords: ["betong","armering","beräkning","explosion","thesis","engineering","master","civil"]
summary: "Concrete Beams Subjected to Drop-Weight Impact and Static Load Structural Behavior and Plastic Rotational Capacity from Experiments and Finite Element Analysis Master’s Thesis in the Master’s Programme Structural Engineering and Building Technolog..."
---

Concrete Beams Subjected to
Drop-Weight Impact and Static Load
Structural Behavior and Plastic Rotational Capacity from
Experiments and Finite Element Analysis
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
FABIO LOZANO MENDOZA
JOSEF MAKDESI APHRAM
Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2017
Master’s Thesis BOMX02-17-21

-- 1 of 333 --



-- 2 of 333 --

MASTER’S THESIS BOMX02-17-21
Concrete Beams Subjected to Drop-Weight Impact and Static Load
Structural Behavior and Plastic Rotational Capacity from Experiments and Finite Element Analysis
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
FABIO LOZANO MENDOZA
JOSEF MAKDESI APHRAM
Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2017

-- 3 of 333 --

Concrete Beams Subjected to Drop-Weight Impact and Static Load
Structural Behavior and Plastic Rotational Capacity from Experiments and Finite Element Analysis
FABIO LOZANO MENDOZA
JOSEF MAKDESI APHRAM
© FABIO LOZANO MENDOZA , JOSEF MAKDESI APHRAM, 2017
Master’s Thesis BOMX02-17-21
ISSN 1652-8557
Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Gothenburg
Sweden
Telephone: +46 (0)31-772 1000
Cover:
Crack pattern of beam B-06 due to an impact from a height of 5 m determined through DIC analysis at
the time of maximum deflection, compared to the strain field obtained from LS-DYNA models with
hexahedron and tetrahedron elements, respectively.
Chalmers Reproservice
Gothenburg, Sweden 2017

-- 4 of 333 --

Concrete Beams Subjected to Drop-Weight Impact and Static Load
Structural Behavior and Plastic Rotational Capacity from Experiments and Finite Element Analysis
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
FABIO LOZANO MENDOZA
JOSEF MAKDESI APHRAM
Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
The behavior of simply supported concrete beams subjected to impact loading was evaluated through an
experimental study consisting of a drop-weight falling on the specimens from different heights. Static
tests were subsequently performed on the impact-damaged specimens in order to examine the post-impact
behavior. Undamaged beams were also tested under static loading to obtain a basis of comparison. All
tests were recorded using high- and normal-speed cameras. The footages were afterwards processed
through digital image correlation (DIC).
The rotational capacity and cracking distribution on both undamaged and damaged beams were studied
based on the experimental results. The beams subjected to low impact energy exhibited similar behavior
during the subsequent static testing compared to undamaged specimens. On the other hand, an increase
of the post-impact rotation capacity was observed in the specimens previously subjected to a larger
impact energy.
The test results were compared with predictions based on different numerical models, including a 2DOF
model and non-linear finite element analysis in LS-DYNA with hexahedron and tetrahedron solid elements
using concrete material model CDPM2. The 2DOF model and the hexahedron LS-DYNA model tended
to overestimate the deflection of the beam, although the results were still reasonable. It was observed that
the hexahedron LS-DYNA model was not able to properly describe inclined cracking; however, signs of
inclined cracking could still be seen in the form of cracked regions. The tetrahedron LS-DYNA model,
on the other hand, predicted rather accurately the maximum deflection and the cracking distribution on
the beam surface; however, an overly stiff response and high sensitivity to input parameters was detected
in this model.
In general, rather good correspondence was found between experimental results and the results from the
numerical models, and the general behavior of the beams under impact loading was fairly well described
by the numerical models.
Keywords: Plastic rotational capacity, reinforced concrete, simply supported beams, impact loading,
static loading, CDPM2, Digital Image Correlation, DIC, two-degree-of-freedom, 2DOF, non-linear finite
element analysis, FEA, LS-DYNA
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 i	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 i	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 i

-- 5 of 333 --

Betongbalkar Utsatta för Fallviktsförsök och Påföljande Statisk Belastning
Strutkurrespons och Plastisk Rotationskapacitet från Experimentell Data och Analyser inom Finita
Elementmetoden
Examensarbete i Structural Engineering and Building Technology
FABIO LOZANO MENDOZA
JOSEF MAKDESI APHRAM
Arkitektur och samhällsbyggnadsteknik
Avdelningen för Konstruktionsteknik
Betongbyggnad
Chalmers Tekniska Högskola
SAMMANFATTNING
Responsen har undersökts av fritt upplagda och armerade betongbalkar utsatta för fallviktsförsök utifrån
olika fallhöjder. Statiska tester har även utförts på dessa balkar i syfte att undersöka hur stöten inverkar
på strukturresponsen. Dessutom utfördes det statiska tester på balkar som var oskadade i syfte att jämföra
skillnader i responsen. Experimenten var inspelade med höghastighets- och normalhastighetskameror
och analyserade med digital image correlation (DIC).
Rotationskapaciteten och sprickfördelningen av skadade balkar utifrån experimentella försök visade att
prover utsatta för en svag stöt hade en liknande statisk strukturrespons som oskadade balkar. Däremot
visade det sig att prover utsatta för en stark stöt har en högre plastisk rotationskapacitet efter att stöten
har skett.
Vidare utfördes jämförelser mellan testförsök och olika numeriska metoder, såsom 2DOF och finita
elementmetodsberäkningar gjorda i LS-DYNA med kubiska- och tetraederelement baserade på material-
modell CDPM2. 2DOF och LS-DYNA beräkningar baserade på kubiska element visade sig överskatta
den maximala nedböjningen. Dessutom observerades det att LS-DYNA vid användande av kubiska
element, var oförmögen att beskriva lutningen av sprickbildningen iakttagna från experiment. Sprick-
bildningen beskrevs istället som spruckna regioner. LS-DYNA modellen beståeende av tetraederelement
kunde däremot i hög grad skildra sprickbildning och maximal nedböjning, dock konstaterades det att
den hade en styvare respons än experimentella resultat och även en hög känslighet för vald indata.
I allmänhet kunde det dock konstateras att det fanns en hög korrelationsgrad mellan experimentella resultat
och numeriska metoder och att förutsägelser av fallviktsförsök enligt numeriska beräkningsmetoder var
acceptabla.
Nyckelord: Plastisk rotationskapacitiet, armerad betong, fritt upplagda balkar, stötbelastning, statisk
belastning, CDPM2, Digital Image Correlation, DIC, tvåfrihetsgradssystem, 2DOF, olinjär finita ele-
mentmetodsanalys, FEM, LS-DYNA
ii , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	ii , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	ii , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 6 of 333 --

Contents
Abstract i
Sammanfattning ii
Preface xi
Nomenclature xiii
1 Introduction 1
1.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.2 Aim . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.3 Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.4 Limitations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
1.5 Thesis Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2 Materials and Structural Response 5
2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.2 Structural Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.2.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.2.2 Linear elastic response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.2.3 Plastic response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
2.2.4 Elasto-plastic response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
2.3 Reinforcing Steel . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
2.3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
2.3.2 Hot-rolled and cold-worked steel . . . . . . . . . . . . . . . . . . . . . . . . . 8
2.4 Concrete . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
2.4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
2.4.2 Properties in compression . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
2.4.3 Determination of concrete strength . . . . . . . . . . . . . . . . . . . . . . . . 11
2.5 Reinforced Concrete . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
2.5.1 Definition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
2.5.2 Structural response of reinforced concrete beams . . . . . . . . . . . . . . . . 12
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 iii	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 iii	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 iii

-- 7 of 333 --

3 Fundamentals of Dynamics 15
3.1 Basic Dynamics Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
3.1.1 Work and kinetic energy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
3.1.2 Momentum and impulse . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
3.1.3 Impact theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
3.2 Impulse Loading and Energy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
3.2.1 General description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
3.2.2 External energy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
3.2.3 Internal energy based on linear elastic response . . . . . . . . . . . . . . . . . 19
3.2.4 Internal energy based on plastic response . . . . . . . . . . . . . . . . . . . . 20
3.2.5 Internal energy based on elasto-plastic response . . . . . . . . . . . . . . . . . 21
3.3 Strain Rate Effect . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
4 Discrete Model for Dynamic Analysis 23
4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
4.2 Equation of Motion for a SDOF System . . . . . . . . . . . . . . . . . . . . . . . . . 23
4.3 Transformation of Structural Members to Equivalent SDOF Systems . . . . . . . . . . 24
4.3.1 General description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
4.3.2 Modelling of a beam into an equivalent SDOF system . . . . . . . . . . . . . . 25
4.3.3 Modelling of drop-weight into an equivalent SDOF system . . . . . . . . . . . 27
4.4 2DOF Systems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
4.4.1 General description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
4.4.2 Equation of motion of 2DOF systems . . . . . . . . . . . . . . . . . . . . . . 29
4.4.3 Equivalent 2DOF system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
4.5 Central Difference Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
4.5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
4.5.2 Numerical formulation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
4.5.3 Stability . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33
5 Plastic Rotational Capacity 35
5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35
5.2 Curvature . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35
5.2.1 Definition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35
5.2.2 Curvature of a cracked element . . . . . . . . . . . . . . . . . . . . . . . . . . 36
5.3 Plastic Rotation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
5.3.1 Relationship between rotation and curvature . . . . . . . . . . . . . . . . . . . 37
5.3.2 Theoretical plastic rotation capacity . . . . . . . . . . . . . . . . . . . . . . . 37
5.3.3 Equivalent plastic hinge length . . . . . . . . . . . . . . . . . . . . . . . . . . 41
5.3.4 Definition of plastic rotation from test results . . . . . . . . . . . . . . . . . . 42
5.4 Different Methods to Predict Plastic Rotation Capacity . . . . . . . . . . . . . . . . . 43
5.4.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
5.4.2 Rotation capacity according to Eurocode 2 . . . . . . . . . . . . . . . . . . . . 43
5.4.2.1 Definition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
5.4.2.2 Rotational capacity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44
iv , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	iv , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	iv , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 8 of 333 --

5.4.3 Betonghandbok-Konstruktion 1980 (ABC method) . . . . . . . . . . . . . . . 46
5.4.4 Bk 25 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
5.4.5 Plastic rotation capacity based on equivalent plastic hinge length . . . . . . . . 51
5.4.5.1 Mattock . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51
5.4.5.2 Corley . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51
5.4.5.3 Mattock’s discussion on Corley’s work . . . . . . . . . . . . . . . . . . . 52
5.4.5.4 Sawyer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53
6 Influences on Plastic Rotational Capacity 55
6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
6.2 Influence of Reinforcement Properties . . . . . . . . . . . . . . . . . . . . . . . . . . 55
6.2.1 Ductility . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
6.2.2 Hot-worked and cold-worked steel . . . . . . . . . . . . . . . . . . . . . . . . 57
6.3 Concrete Influence on Rotational Capacity . . . . . . . . . . . . . . . . . . . . . . . . 57
6.3.1 Concrete strength . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57
6.3.2 Ultimate strain and compression zone confinement . . . . . . . . . . . . . . . 58
6.3.3 Influence of bond strength . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
6.4 Influence of Size . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
6.5 Influence of Load Application . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
6.5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
6.5.2 Loading conditions and reinforcement ratio . . . . . . . . . . . . . . . . . . . 61
6.5.3 Static and dynamic loading . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62
6.6 Residual Capacity in Dynamically Loaded RC Beams . . . . . . . . . . . . . . . . . . 63
6.6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
6.6.2 Residual capacity on normal strength concrete . . . . . . . . . . . . . . . . . . 63
6.6.3 Residual capacity on high strength concrete . . . . . . . . . . . . . . . . . . . 65
7 Experimental Procedure 69
7.1 General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
7.2 Test Specimens . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
7.2.1 Geometry of the specimens . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
7.2.2 Beam classification . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
7.3 Material Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
7.3.1 Concrete proportions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
7.3.2 Concrete properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71
7.3.3 Steel properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
7.4 Impact Loading Tests . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
7.4.1 Test conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
7.4.2 Determination of drop-height . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
7.5 Static Tests . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76
7.6 Digital Image Correlation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 v	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 v	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 v

-- 9 of 333 --

8 Predictions 79
8.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
8.2 Load Capacity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
8.2.1 Ultimate Limit State . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
8.2.2 Cracking and yielding . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
8.2.3 Theoretical load-deflection curve . . . . . . . . . . . . . . . . . . . . . . . . . 82
8.3 Rotational Capacity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
8.3.1 General description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
8.3.2 Rotational capacity according to Eurocode 2 . . . . . . . . . . . . . . . . . . . 83
8.3.3 Betonghandbok-Konstruktion (ABC method) . . . . . . . . . . . . . . . . . . 84
8.3.4 Bk 25 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
8.3.5 Methods based on equivalent plastic hinge length . . . . . . . . . . . . . . . . 85
8.4 Dynamic Response According to 2DOF System . . . . . . . . . . . . . . . . . . . . . 86
8.4.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
8.4.2 Maximum internal resistance . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
8.4.3 Stiffness . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
8.4.4 Transformation factors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
8.4.5 Results from the 2DOF model . . . . . . . . . . . . . . . . . . . . . . . . . . 89
9 Experimental Results 91
9.1 Impact Loading Tests . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
9.1.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
9.1.2 Methodology . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
9.1.3 Midpoint deflection over time: Series-1 . . . . . . . . . . . . . . . . . . . . . 91
9.1.4 Midpoint deflection over time: Series-2 . . . . . . . . . . . . . . . . . . . . . 93
9.1.5 Strain field due to impact loading . . . . . . . . . . . . . . . . . . . . . . . . 96
9.1.6 Deformed shape of the beam . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
9.1.7 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
9.2 Static Tests . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102
9.2.1 General introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102
9.2.2 Load-deflection results: Series-3 . . . . . . . . . . . . . . . . . . . . . . . . . 102
9.2.3 Load-deflection results: Series-1 . . . . . . . . . . . . . . . . . . . . . . . . . 104
9.2.4 Load-deflection results: Series-2 . . . . . . . . . . . . . . . . . . . . . . . . . 106
9.2.5 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
9.3 Comparison of Static Response of Impact-loaded Beams and Undamaged Beams . . . 108
9.3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108
9.3.2 Comparison of Series-1 and Series-3 . . . . . . . . . . . . . . . . . . . . . . . 108
9.3.3 Comparison of Series-2 and Series-3 . . . . . . . . . . . . . . . . . . . . . . . 109
9.3.4 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111
9.4 Plastic Rotational Capacity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111
9.4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111
9.4.2 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
9.4.2.1 Comparison of Series-1 with Series-3 . . . . . . . . . . . . . . . . . . . . 112
9.4.2.2 Comparison of Series-2 with Series-3 . . . . . . . . . . . . . . . . . . . . 113
vi , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	vi , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	vi , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 10 of 333 --

9.4.3 Internal work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
9.4.4 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115
9.5 DIC Analysis of Static Tests . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116
9.5.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116
9.5.2 Crack patterns of Series-3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117
9.5.3 Crack patterns of Series-1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
9.5.4 Crack patterns of Series-2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119
9.5.5 Major cracking pattern . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
9.6 Verification of Predictions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
9.6.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
9.6.2 Predicted load-deflection curve and load capacity . . . . . . . . . . . . . . . . 123
9.6.3 Dynamic behavior according to 2DOF model . . . . . . . . . . . . . . . . . . 125
9.6.4 Predicted rotational capacity . . . . . . . . . . . . . . . . . . . . . . . . . . . 128
10 Finite Element Model - Theory 131
10.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
10.2 Model Geometry . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
10.3 Element Types and Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132
10.3.1 Hourglass control and volumetric locking . . . . . . . . . . . . . . . . . . . . 134
10.4 Interaction Between Elements and Boundary Conditions . . . . . . . . . . . . . . . . 135
10.5 Material Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
10.5.1 Material model for concrete . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
10.5.2 Material model for reinforcing steel . . . . . . . . . . . . . . . . . . . . . . . 138
10.5.3 Material model for drop-weight and supports . . . . . . . . . . . . . . . . . . 138
10.6 Interaction Between Reinforcement and Concrete . . . . . . . . . . . . . . . . . . . . 139
10.7 Load Application . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
10.8 Solution Method and Time Step . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
11 Finite Element Model - Results and Comparisons 141
11.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
11.2 Choice of Element Size . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
11.3 Verification . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
11.3.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
11.3.2 Midpoint velocity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
11.3.3 Drop-weight velocity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144
11.3.4 Displacement over the support . . . . . . . . . . . . . . . . . . . . . . . . . . 145
11.4 Drop-weight Impact Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146
11.4.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146
11.4.2 Impact from drop-height h = 5.0 m . . . . . . . . . . . . . . . . . . . . . . . . 147
11.4.3 Impact from drop-height h = 2.5 m . . . . . . . . . . . . . . . . . . . . . . . . 151
11.4.4 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
11.5 Comparison with DIC Analysis Regarding Crack Pattern . . . . . . . . . . . . . . . . 156
11.6 Sensitivity Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159
11.6.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 vii	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 vii	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 vii

-- 11 of 333 --

11.6.2 Hourglass coefficient, QM . . . . . . . . . . . . . . . . . . . . . . . . . . . . 160
11.6.3 Compressive softening parameter, 휀푓 푐 . . . . . . . . . . . . . . . . . . . . . . 162
11.6.4 Element type for modelling the reinforcement bars . . . . . . . . . . . . . . . 164
11.6.5 Time step factor, TSSFAC . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
11.6.6 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
11.7 Static Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 169
11.7.1 General . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 169
11.7.2 Sensitivity analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 173
11.7.3 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 175
11.8 Parametric Studies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 175
11.8.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 175
11.8.2 Position of the reinforcement bars . . . . . . . . . . . . . . . . . . . . . . . . 175
11.8.3 Influence of drop-weight position . . . . . . . . . . . . . . . . . . . . . . . . 177
11.8.4 Influence of drop-height on the dynamic response . . . . . . . . . . . . . . . . 180
11.8.5 Fracture energy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 183
12 Discussion 185
12.1 General . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 185
12.2 Experimental Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 185
12.2.1 Digital image correlation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 185
12.2.2 Impact loading and static tests . . . . . . . . . . . . . . . . . . . . . . . . . . 185
12.2.3 Predictions according to hand calculations and 2DOF model . . . . . . . . . . 186
12.3 Finite Element Analysis Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 187
12.3.1 Hexahedron FE model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 187
12.3.2 Tetrahedron FE model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 188
13 Final Remarks 189
13.1 General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 189
13.2 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 189
13.3 Future Studies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 190
References 193
Appendix A Prediction of Equivalent Plastic Hinge Length A-1
Appendix B Material Properties Tests B-1
B.1 Properties of Concrete . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . B-1
B.2 Wedge-Splitting Test . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . B-2
B.3 Properties of Reinforcing Steel . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . B-3
Appendix C Measured Position of Reinforcement Bars C-1
Appendix D Preliminary Static Test on an Impact-damaged Specimen D-1
Appendix E 2DOF System E-1
viii , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	viii , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	viii , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 12 of 333 --

Appendix F Experimental Results F-1
F.1 Velocity and Support Displacement . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-1
F.1.1 Velocity of the beam midpoint . . . . . . . . . . . . . . . . . . . . . . . . . . F-1
F.1.2 Drop-weight velocity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-2
F.1.3 Displacement over the support . . . . . . . . . . . . . . . . . . . . . . . . . . F-3
F.2 Deformed Shape of the Beam . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-4
F.2.1 Drop-height h = 2.5 m . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-4
F.2.2 Drop-height h = 5.0 m . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-5
F.3 Determination of Plastic Deformation . . . . . . . . . . . . . . . . . . . . . . . . . . F-6
F.3.1 Permanent plastic deformation after impact . . . . . . . . . . . . . . . . . . . F-6
F.3.2 Methodology adopted to determine plastic rotational capacity . . . . . . . . . F-7
F.4 Results from Static Tests . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-8
F.4.1 Key parameters: Series-1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-8
F.4.2 Key parameters: Series-2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-9
F.4.3 Key parameters: Series-3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-10
F.5 Plastic rotational capacity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-11
F.5.1 Rotational capacity of all beams . . . . . . . . . . . . . . . . . . . . . . . . . F-11
F.5.2 Internal Work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-12
F.6 Strain field for Dynamic and Static Tests . . . . . . . . . . . . . . . . . . . . . . . . . F-13
F.6.1 Specimen B-01 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-13
F.6.2 Specimen B-02 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-15
F.6.3 Specimen B-03 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-17
F.6.4 Specimen B-04 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-19
F.6.5 Specimen B-05 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-21
F.6.6 Specimen B-06 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-23
F.6.7 Specimen B-07 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-25
F.6.8 Specimen B-08 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-26
F.6.9 Specimen B-09 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-27
F.6.10 Specimen B-10 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-29
F.6.11 Specimen B-11 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-31
F.6.12 Specimen B-12 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-33
F.6.13 Specimen B-13 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-35
F.6.14 Specimen B-14 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-37
F.6.15 Specimen B-15 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-39
F.6.16 Specimen B-16 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-41
F.6.17 Specimen B-17 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-42
F.6.18 Specimen B-18 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-43
F.7 Cracking Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-45
F.7.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-45
F.7.2 Series-3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-45
F.7.2.1 Beam B-08 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-45
F.7.2.2 Beam B-16 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-47
F.7.3 Series-1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-49
F.7.3.1 Beam B-01 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-49
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 ix	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 ix	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 ix

-- 13 of 333 --

F.7.3.2 Beam B-12 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-51
F.7.4 Series-2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-53
F.7.4.1 Beam B-06 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-53
F.7.4.2 Beam B-13 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-55
F.7.4.3 Beam B-15 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-57
F.7.5 Adjusted colorscale . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F-59
F.8 Photographs of Beams After Static Testing . . . . . . . . . . . . . . . . . . . . . . . . F-62
Appendix G Finite Element Model - Different Meshes G-1
Appendix H Finite Element Model - Results H-1
H.1 Velocity and Support Displacement . . . . . . . . . . . . . . . . . . . . . . . . . . . . H-1
H.2 Deformed Shape of the Beam . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . H-2
H.3 Comparison with Experimental Results . . . . . . . . . . . . . . . . . . . . . . . . . H-5
H.4 Static FE Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . H-6
H.4.1 5 mm hexahedron model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . H-6
H.4.2 5 mm tetrahedron model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . H-7
H.4.3 10 mm tetrahedron model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . H-8
H.4.4 10 mm tetrahedron model without skin remesh . . . . . . . . . . . . . . . . . H-9
Appendix I Calculations I-1
Appendix J MATLAB Script J-1
x , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	x , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	x , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 14 of 333 --

PREFACE
The behavior of simply supported reinforced concrete beams subjected to an impact load and subsequent
static loading, with emphasis on plastic rotational capacity, has been investigated in this Master’s thesis.
Several experiments were performed under different loading conditions; furthermore, the experiments
were also replicated using non-linear finite element analysis and simpler numerical methods.
The project was developed from January to June 2017 and experiments were carried out in February 2017.
The thesis is part of an ongoing research project financed by the Swedish Civil Contingencies Agency
(MSB), and is a collaboration between the Structural Engineering Division at Chalmers University of
Technology, Norconsult, and RISE (The Swedish Research Institute). The project was supervised by
Morgan Johansson and examined by Joosef Leppänen.
We would like to express our deepest gratitude to Morgan Johansson for his insightful supervision and
unrelenting guidance throughout the course of the thesis. We would also like to thank Joosef Leppänen for
his support and encouragement throughout the entire project. Additionally, we thank Mathias Flansbjer
for his help regarding the recording of the experiments and processing of the information through DIC,
and Sebastian Almfeldt for his supervision during the experiments.
Lastly, we would like to acknowledge our fruitful and wonderful time working together throughout the
years spent in the Master’s programme Structural Engineering and Building Technology; our efforts
have culminated into a Master’s thesis which we are very proud of.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 xi	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 xi	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 xi

-- 15 of 333 --



-- 16 of 333 --

NOMENCLATURE
Abbreviations
2DOF Two degrees of freedom
SDOF Single degree of freedom
DIC Digital image correlation
DIF Dynamic increase factor
EC Eurocode
EFC Softening parameter of compressive damage, 휀푓 푐 , in CDPM2
FE Finite element
FEA Finite element analysis
FEM Finite element model
IP Integration points
QM Hourglass control parameter in CDPM2
RC Reinforced concrete
Roman upper case letters
퐴 Area
퐸 Modulus of elasticity
퐸푐 Compressive modulus of elasticity of concrete
퐸푐푚 Compressive modulus of elasticity of concrete; mean value
퐸푘 Kinetic energy
퐸푠 Modulus of elasticity of reinforcing steel;
퐸푠푚 Modulus of elasticity of reinforcing steel; mean value
퐸푡 Tangent modulus of reinforcing steel
퐹 External force
퐹푘 Characteristic pressure load
퐼 Impulse, moment of inertia
퐼푘 Characteristic impulse
퐿 Total length of beam member
푀 Bending moment
푅 Internal resistance, radius of curvature
푅푚 Maximum internal resisting force
푊 Work
푊푒 External Work
푊푖 Internal Work
Roman lower case letters
푎 Acceleration, coordinate along beam main axis
푏 Width of beam cross-section
푐 Damping coefficient
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 xiii	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 xiii	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 xiii

-- 17 of 333 --

푑 Distance to center of bottom reinforcement layer; measured from top edge
푑® Distance to center of top reinforcement layer; measured from top edge
푒 Eccentricity parameter
푓푏푐 Equibiaxial compressive strength of concrete
푓푐 Compressive cylinder strength of concrete
푓푐푚 Compressive cylinder strength of concrete; mean value
푓푐푡 Tensile strength of concrete
푓푐푡,푓 푙 Flexural tensile strength of concrete
푓푐푡,푠푝 Splitting tensile strength of concrete
푓0.2 0.2% proof stress of reinforcing steel
푓푡 Tensile strength of reinforcing steel
푓푡푘 Tensile strength; characteristic value
푓푦 Yield strength of reinforcing steel
푓푦푑 Yield strength of reinforcing steel; design value
푓푦푘 Yield strength of reinforcing steel; characteristic value
ℎ Height of beam cross section, drop-height
ℎ퐵푊 Crack band width
푘 Linear elastic stiffness
푙 Distance along beam
푙0 Distance from zero moment section to point of maximum moment
푙푒푙 Element size
푙푝 Equivalent plastic hinge length
푙푦 Length of yielding region
푚 Mass
푛푒푙 Number of elements
푝 Momentum of a particle
푡 Time
푡푚푎푥 Time when maximum deflection occurs
푢 Deflection or deformation
푢푒푙 Elastic deflection or deformation
푢푝푙 Plastic deflection or deformation
푢푓 푎푖푙,푠 Deflection or deformation at which steel rupture occurs
푢푚푎푥 Maximum deflection during dynamic response
푢푠 System coordinate
푣 Velocity
푤 Crack width
푤푓 Ultimate crack width
푥 Distance to neutral axis from top edge
Greek letters
훼푅 Stress block factor for average stress
훽푅 Stress block factor for resultant location
Δ푡 Time increment
xiv , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	xiv , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	xiv , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 18 of 333 --

훿 Displacement
̇
휀 Rate of strain
휀푐 Concrete strain
휀푐푐 Concrete strain; compression
휀푐푢 Ultimate concrete strain; compression
휀푓 푐 Softening parameter of compressive damage in CDPM2
휀푠 Reinforcing steel strain
휀푠푢 Ultimate reinforcing steel strain
휑 Curvature
휅 Transformation factor
휈 Poisson’s ratio
휔 Angular eigenfequency
휔푏 Balanced mechanical reinforcement ratio
휔푠 Mechanical ratio of tensile reinforcement
휔®
푠 Mechanical ratio of compression reinforcement
휔푣 Mechanical ratio of shear reinforcement
휌®
푤 Ratio of the volume of confining reinforcement
휎 Stress
휃 Rotation
휃푝푙 Plastic rotation
휃푝푙,푥% Plastic rotation at a given load level
휃푝푙,푖푚푝 Plastic rotation due to impact
Index
0 Initial
1 Body 1, drop-weight
2 Body 2, beam
푐 Concrete
푐푢푏푒 Cubic strength of concrete
푑 Design
푓 Field
I State I
II State II
푖푚푝 Impact
푘 Characteristic
푚 Mean value
푠 Reinforcing steel
푠푢푝 Support
푢 Ultimate
푦 Yield
푒푙 Elastic
푝푙 Plastic
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 xv	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 xv	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 xv

-- 19 of 333 --



-- 20 of 333 --

1 Introduction
1.1 Background
A high resilience is demanded of structures where the risk of impulse loading has to be considered.
Examples of impulse loading can be explosions or impact loads from collisions. Structures designed
to withstand such loads are commonly built using reinforced concrete, and a large plastic deformation
capacity provided by key structural elements is essential in order to absorb energy from such actions.
An impulse-loaded structure may exhibit a response that differs much from that of the static case, and
consequently can give rise to different failure modes. It is therefore important to have a thorough
understanding of the behavior of impulse-loaded structures, and how their response can be accurately
predicted.
This thesis project is intended to support the ongoing research in the field of impulse-loaded structures
at the Structural Engineering Division at Chalmers University of Technology in collaboration with
Norconsult and RISE. It also intends to build upon the knowledge and conclusions gathered in previous
Master’s thesis projects carried out at Chalmers, such as (Lovén and Svavarsdóttir, 2016).
1.2 Aim
The general aim of this project is to provide a better understanding of reinforced concrete structures
subjected to impulse loading. During the thesis work, the impulse load is represented by a drop-weight
impact, since such a scenario can easily be replicated in a laboratory. A strong focus is placed on plastic
deformation capacity of impulse-loaded structures, and specifically the residual plastic capacity after the
impact loading.
A series of tests is carried out in order to determine the plastic deformation capacity of concrete beams
under different loading conditions. The accuracy of different methods described in the literature to
predict the plastic deformation capacity is also studied.
Furthermore, the thesis work aims to predict the response of structures subjected to impact loading by
means of non-linear finite element analysis (FEA) in the software package LS-DYNA, where suggestions
from (Lovén and Svavarsdóttir, 2016) are considered in order to further improve the reliability of the
FE simulations. The results from the finite element analyses are compared to observations from the
drop-weight impact experiments, and the models are modified accordingly in order to more accurately
describe the response of the structure.
A simplified model based on a two-degree-of-freedom system (2DOF) is also implemented. The objective
is to study how effectively such a simplified tool could be used to predict the behavior of the test specimens.
The model is formulated similarly as done in previous thesis works at Chalmers. Additionally, a brief
investigation of the time-dependent mass participation is performed.
Moreover, parametric studies are carried out for the FE models in order to investigate the influence of
different input data regarding modelling techniques, material properties, and loading conditions on the
behavior of the beam, which may serve as a basis for future studies and analyses.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 1

-- 21 of 333 --

1.3 Method
Initially, a literature study was performed in order to deepen the knowledge regarding structural dynamics
and the response of impulse-loaded structures. A significant part of the literature review was focused
on plastic deformation capacity of concrete beams, as an appropriate understanding of the definition of
plastic capacity was considered essential for the evaluation of the experimental results. Furthermore, a
description of the influence of the properties of reinforcing steel and concrete on the rotational capacity
was made.
A preliminary static test was carried out on an old test specimen, which was a simply-supported reinforced
concrete beam with a free span of 1.0 m, which had been previously subjected to impact loading by a
drop-weight. The old beam was tested under deformation-controlled static loading in order to assess
the remaining plastic rotation capacity. Based on the residual capacity, suitable loading conditions –
in terms of drop-height – were determined for further drop-weight impact tests applied to newly-cast
concrete specimens with same geometry and similar properties as the old specimen. Additionally, the
material properties of the newly-cast concrete and reinforcement bars were determined through a series
of tests.
Different loading conditions were applied on the new specimens, namely: static loading only, dynamic
loading with a high impact velocity, and dynamic loading with a low impact velocity. In a later stage,
the beams tested under impact loading were subjected to a deformation-controlled static load so as to
compare the residual plastic rotation capacity with the capacity of the beams loaded with static load only.
During the experiments, a high-speed camera was used to capture the development and propagation of
cracks and deformations. Based on the information collected, the strain field, deflection, and velocity of
the beams (as well as the displacement and velocity of the drop-weight) could be calculated by using
digital image correlation (DIC) with the aid of the software GOM Correlate. The observed plastic
rotational capacity was compared to the capacity predicted by existing theoretical models.
A simplified 2DOF system was used in order to predict the dynamic response. The system of dynamic
equations of motion was solved by using the Central Difference Method (CDM). Transformation factors
to transform the beam and the drop-weight into a mass-spring system was also studied.
Furthermore, finite element models were created in LS-DYNA using 3D solid elements and material
model CDPM2 to model the concrete material. Initially, continuous hexahedron elements and full inter-
action between reinforcement bars and surrounding concrete was considered. Subsequently, tetrahedron
elements were adopted, as suggested by Lovén and Svavarsdóttir (2016), in an attempt to better describe
inclined cracking. The results were compared with the 2DOF analyses and the experimental observations,
as well as with the results obtained by Lovén and Svavarsdóttir (2016). Additionally, different modelling
approaches were investigated, such as scaling of the fictitious hourglass forces applied on hexahedron
elements, and implementing different element types to model the reinforcement bars.
After the LS-DYNA models had been properly calibrated, a study of the influence of various parameters
on the behavior of the beam was carried out. Such parameters include, among others, impact veloc-
ity, different drop-heights, and position of the point of impact. The results contributed to formulate
suggestions for possible future drop-weight experiments.
2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 22 of 333 --

1.4 Limitations
This project only treated simply supported normal strength concrete beams with longitudinal reinforce-
ment. The beams were not provided with transversal reinforcement as bending failure was initially
expected. The beams were subjected to concentrated impact load at midspan. The high-speed camera
used to record the experiments features a frame-rate of 5000 fps.
Two different groups of specimens were cast out of two different concrete batches, albeit with the same
proportions. The properties of concrete regarding tensile and compressive strength were determined
for both batches, whereas a wedge-splitting test was performed only for one of the batches in order to
estimate the fracture energy.
Finite element models were created in LS-DYNA using 3D continuum solid elements. The chosen
material model was CDPM2, developed by Peter Grassl in collaboration with Chalmers University of
Technology, as described in (Grassl, Xenos, et al., 2013). The reinforcement bars were modelled as fully
embedded in the concrete solids.
The damping coefficient was assumed to be zero for both the beam and the drop-weight in the 2DOF
system and in the FE models, as it was considered to have a negligible effect for short duration loads.
Furthermore, effects due to strain-rate were not considered either in the 2DOF system or in the FEA in
LS-DYNA.
1.5 Thesis Outline
This thesis consists of three interconnected parts. The first part, which comprises Chapters 2- 6, begins
with a description of relevant knowledge and theories. The second part consists of Chapters 7 - 9, and
provides with a description of the experiments performed and conclusions gathered from the experimental
results. The last part consists of Chapters 10 - 11, where basic theory related to FE modelling is initially
described; subsequently, the results from FE analyses are presented and compared with experimental
results in order to investigate the accuracy of the models and draw conclusions. Finally, a brief discussion
regarding all the content of the thesis is presented in the last chapter.
Chapter 2: Basic general concepts related to the structural response of materials are described in this
chapter. Furthermore, material properties of reinforcing steel and concrete, as well as their behavior
under loading, are detailed.
Chapter 3: Fundamentals of dynamics theory, essential to the understanding of impulse loaded structures,
are presented here.
Chapter 4: Here, formulation of discrete models such as SDOF and 2DOF are described. Furthermore,
the procedure for the transformation of reinforced concrete beams subjected to impact loading into a
equivalent 2DOF model is also detailed.
Chapter 5: A literature study is conducted in this chapter which covers basic theory of plastic rotational
capacity as well as methods to predict plastic rotational capacity of reinforced concrete beams.
Chapter 6: Various factors which influence rotational capacity of concrete beams are covered here. The
residual capacity of concrete beams after impulse loading is also briefly discussed.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 3

-- 23 of 333 --

Chapter 7: The experimental determination of the properties of the materials used, as well as the
procedure used for the various experiments, are detailed here.
Chapter 8: Predictions of experimental outcome in terms of load capacity, dynamic response, and
plastic rotational capacity of the investigated beams are presented in this chapter.
Chapter 9: Presentation and comparisons of experimental results. Furthermore, validation of preliminary
predictions with respect to experimental results are made here.
Chapter 10: This chapter describes the basic concepts and theory pertinent to FE modelling. Moreover,
the modelling procedure adopted for subsequent FE analyses is also presented here.
Chapter 11: The results of the FE analyses are presented and compared to experimental results in
order to verify their validity. Furthermore, sensitivity studies are also performed here to discern how
various parameters influence the outcome of FE results. Lastly, parametric studies in terms of varying
loading conditions or material properties are made in order to gain further understanding of impact
loaded structures.
Chapter 12: A general discussion regarding results gathered throughout the thesis is presented here.
Chapter 13: Concluding remarks and possibilities for future topics of study are presented here.
4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 24 of 333 --

2 Materials and Structural Response
2.1 Introduction
The beam specimens tested during the development of this project were produced out of concrete
reinforced with steel bars. Basic knowledge regarding the properties of these materials and their behavior
under loading is essential to facilitate the understanding of the theoretical discussions treated in subsequent
chapters. Although previous knowledge of the fundamentals of reinforced concrete is expected, a general
description is presented in this chapter.
Initially, the typical response functions usually assumed in design and analysis of structures are studied.
Thereafter, the properties of reinforcing steel and concrete, as isolated materials, are briefly described.
Finally, the response of reinforced concrete structures is treated.
2.2 Structural Response
2.2.1 Overview
When a load is applied to a given element, it causes an internal force in the structure. Such an internal
force tends to restore the element to its undeformed position, provided that the material is still in the
elastic range. The resistance functions for actual structural elements might assume a variety of forms,
depending on material properties, boundary conditions, and type of loading. In order to simplify analysis,
these resistance functions are commonly idealized. Three basic responses are often used in common
practice, namely: linear elastic response, plastic response, and elasto-plastic response.
2.2.2 Linear elastic response
In the elastic range, the resistance, 푅, and the deformation, 푢, are related by
푅(푢) = 푘 ⋅ 푢 (2.1)
where 푘 correspond to the stiffness of the structure [N/m]. Figure 2.1 illustrates the reaction force as a
function of deformation for a linear elastic material.
u
R
uel
k
Figure 2.1 Relationship between internal resistance and deformation for a linear elastic material.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 5

-- 25 of 333 --

2.2.3 Plastic response
An ideally plastic material will not exhibit any deformation if the load applied is less than the material
capacity, as shown in Figure 2.2. On the other hand, if the external load reaches the maximum internal
resistance, 푅푚, the material will deform indefinitely until the load is removed. Moreover, the resistance
force cannot exceed 푅푚 of the material.
u
R
Rm
upl
Figure 2.2 Relationship between internal resistance and deformation for a perfectly plastic material.
The relationship between 푅 and 푢 is given by
푅(푢) =
T
퐹 if 푢 = 0
푅푚 if 푢 > 0 (2.2)
where 퐹 is an external force with a magnitude less than 푅푚.
2.2.4 Elasto-plastic response
As shown in Figure 2.3, the resistance of an elasto-plastic material can be described with a bi-linear
function in which the material exhibits a linear behavior until the limit for elastic response, 푢푒푙, is reached.
From that point on, the material undergoes plastic deformation, 푢푝푙, and the resistance force cannot
exceed the capacity of the material.
u
R
Rm
uel
utot = uel + upl
k
Figure 2.3 Relationship between internal resistance and deformation for an elasto-plastic material.
6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 26 of 333 --

A elasto-plastic response can be described mathematically by
푅(푢) =
T
푘 ⋅ 푢 if 푢 ≤ 푢푒푙
푅푚 if 푢 > 푢푒푙
(2.3)
where the elastic limit can be determined as
푢푒푙 = 푅푚
푘 (2.4)
2.3 Reinforcing Steel
2.3.1 Introduction
A brief description of the properties of reinforcing steel is presented in this section. The information
discussed in this section is mainly based on (Engström, 2001).
The reinforcing steel commonly used in modern concrete structures is classified according to the following
parameters:
• grade
• ductility class
• size
• surface properties
• weldability
The strength and deformation properties are commonly defined from the parameters in Table 2.1.
Table 2.1 Common reinforcing steel parameters.
Parameter Description
푓푦푘 Characteristic yield strength
푓푡푘 Characteristic tensile strength
(푓푡∕푓푦)푘 Characteristic ratio of tensile strength to yield strength
휀푠푢푘 Characteristic ultimate strain
퐸푠푚 Mean value of modulus of elasticity
The ductility, which is the ability of the steel to undergo large deformation under tensile force, is of
special interest with regard to plastic deformation capacity. The ductility class is defined according to the
ultimate strain and the ratio of tensile strength to yield strength. According to the description provided in
Annex C in Eurocode 2 (CEN, 2004), reinforcement bars can be classified into three different categories,
as summarized in Table 2.2.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 7

-- 27 of 333 --

Table 2.2 Classification of steel regarding ductility properties according to Eurocode 2 (CEN, 2004).
Class
Property A B C
Characteristic yield strength, 푓푦푘 or 푓0.2푘 [MPa] 400 to 600
Minimum value of (푓푡∕푓푦)푘 ≥ 1.05 ≥ 1.08 ≥ 1.15 & < 1.35
Characteristic strain at maximum force, 휀푠푢푘 [%] ≥ 2.5 ≥ 5.0 ≥ 7.5
2.3.2 Hot-rolled and cold-worked steel
Depending on the production method, reinforcing steel is commonly classified into two categories:
hot-rolled steel and cold-worked steel. The difference can easily be recognized by the shape of the
stress-strain diagram for each type, as illustrated in Figure 2.4. Hot-rolled steel usually exhibits a
evident yield stress, followed by a plastic plateau, and subsequently by an increase in stress due to strain
hardening effect. The ratio of tensile strength to yield strength and the ultimate strain are usually high.
The characteristic yield stress 푓푦푘 corresponds to the lower 5%-fractile of the upper yield stress.
εs
σs
fy
Hot-rolled
ft
εsu	0.002 	εs
σs
f0.2
Cold-worked
ft
εsu
Figure 2.4 Stress-strain diagram of hot-rolled and cold-worked steel, modified from (CEN, 2004).
On the other hand, it is not possible to clearly identify the yield stress for cold-worked steel from the
stress-strain diagram. Instead, a value of stress, called proof stress and corresponding to the stress that
produces a remaining strain of 0.2 %, is normally used in design. The characteristic proof stress 푓0.2푘
corresponds to the lower 5 %-fractile of the proof stress. The strain hardening and plastic deformation
capacity of cold-worked steel are relatively small, and no plastic plateau can be distinguished in the
stress-strain diagram.
2.4 Concrete
2.4.1 Introduction
Concrete exhibits a different stress-strain relationship when subjected to uniaxial tension compared to
uniaxial compression loading; furthermore, the tensile strength of concrete, 푓푐푡, is significantly lower
than its compressive counterpart, 푓푐 , see Figure 2.5. Moreover, the ultimate concrete strain, 휀푐푢, after
reaching maximum compressive strength is much larger than the ultimate strain achieved for tensile
stress. In other words, concrete shows a more brittle failure when subjected to tensile stresses.
8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 28 of 333 --

Figure 2.5 Schematic stress-strain relationship of concrete under uniaxial compression and tension
(Lovén and Svavarsdóttir, 2016).
2.4.2 Properties in compression
Since concrete is used mostly in compression, its response and stress-strain relationship under compressive
loading is of major interest. As a matter of fact, the most commonly tested parameter of concrete is its
compressive strength, from which a general overview of various concrete properties can be estimated
(Burström, 2001). Compressive strength at 28 days is generally used to characterize the concrete class,
and therefore, the determination of the strength of concrete is usually performed 28 days after casting and
curing under proper conditions. Concrete strength gradually grows with time, and the 28-day strength
corresponds to roughly 80 % of the strength after a year, from which little increase is expected (Martin
and Purkiss, 2006).
The stress-strain relationship of concrete subjected to compression loading is non-linear. However, for
relatively low stresses, the response is assumed to be linear and is defined by the modulus of elasticity, 퐸푐 .
A larger compressive strength results in a larger value of 퐸푐 . As shown in Figure 2.6, the compressive
strain at peak load increases with increased concrete class; moreover, ductile response after reaching
peak strength decreases with increased compressive strength.
𝜀𝑐
𝜎𝑐
utot = uel + upl
Figure 2.6 Schematic overview of how concrete strain at peak load varies for different compressive
strengths, modified from (Engström, 2001).
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 9	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 9	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 9

-- 29 of 333 --

Eurocode 2 (CEN, 2004) proposes different stress-strain relationships for concrete under uniaxial com-
pression. For non-linear structural analysis, the relation illustrated in Figure 2.7 is recommended.
Figure 2.7 Schematic stress-strain relationship for non-linear structural analysis of concrete. The
parameter 휀푐1 is the strain at peak stress, 휀푐푢1 corresponds to the ultimate compressive
strain, 푓푐푚 is the mean value of concrete compressive strength, and 퐸푐푚 is the mean value
of the elasticity modulus (CEN, 2004).
The mean modulus of elasticity, 퐸푐푚, in Figure 2.7 is determined by the secant modulus between the
origin and 휎푐 = 0.4푓푐푚. However, it can also be calculated approximately based on the mean compressive
strength determined from tests as
퐸푐푚 = 22
0푓푐푚
10
10.3
[GPa] (2.5)
where 푓푐푚 is given in [MPa].
Simplified compressive stress-strain curves can also be used for design and verification of capacity. The
stress-strain relationship can be represented by a parabolic curve until peak compressive strength has
been reached, followed by a constant value of stress until ultimate concrete strain. Additionally, an even
more simplified, albeit more conservative, bi-linear model can be adopted as shown in Figure 2.8.
The values of ultimate strain, 휀푐푢(1−3), for the relationships in Figures (2.7) and (2.8) can be assumed
equal to 3.5 ‰ for concrete classes from C12/15 to C50/60 (CEN, 2004). Values of peak strain, 휀푐(1−3),
differ for each model and has to be chosen depending on concrete class and the relationship adopted.
10 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	10 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	10 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 30 of 333 --

Figure 2.8 Parabola-rectangle (left) and bi-linear (right) stress-strain relationships that may be used
in design and verification of load-carrying capacity (CEN, 2004).
2.4.3 Determination of concrete strength
In order to determine the characteristic strength of concrete, different tests can be performed either on
cylinder or cubic specimens. The compressive stress can be estimated by following the guidelines in
(CEN, 2009a). Figure 2.9a shows a schematic representation of the test setup with cube specimens. Due
to restraining effects along the boundaries of cubic testing, a tri-axial stress state is developed, which
produces higher values of strength in cubic specimens when compared to slender cylindrical specimens,
(Domone and Illston, 2010).
𝜀𝑐𝑐
utot = uel + upl
F
F F
F
(a) Compressive test.	𝜀𝑐𝑐
𝜎𝑐𝑐
utot = uel + upl
F
F F
F
 (b) Tensile test by splitting.
Figure 2.9 Concrete strength tests on cube specimens.
The mean compressive cylinder strength, 푓푐푚, can then be determined from the the mean compressive
cube strength, 푓푐푚,푐푢푏푒, as
푓푐푚 = 0.8푓푐푚,푐푢푏푒 (2.6)
Regarding the tensile strength, it is more difficult to adopt a uniaxial tensile stress state for concrete
because of its brittle behavior (Domone and Illston, 2010). However, splitting tests can be adopted as an
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 11	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 11	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 11

-- 31 of 333 --

indirect test of the tensile strength of concrete (CEN, 2009b), as depicted in Figure 2.9b. An approximate
value of the axial tensile strength, 푓푐푡, can be calculated from the splitting tensile strength, 푓푐푡,푠푝, as
푓푐푡 = 0.9푓푐푡,푠푝 (2.7)
It is also possible to theoretically determine the tensile strength based on the characteristic compressive
strength, as given by
푓푐푡 = 0.30푓 2∕3
푐푘 for concrete class ≤ C50/60 (2.8)
Finally, the relation between the flexural tensile strength, 푓푐푡,푓 푙, and the axial tensile strength can be
estimated as
푓푐푡,푓 푙 = 푘 ⋅ 푓푐푡푚
where 푘 = 0.6 + 0.4
ℎ0.25
(2.9)
2.5 Reinforced Concrete
2.5.1 Definition
Reinforced concrete is a composite material which combines the high compressive strength of concrete
together with the high tensile strength and considerably higher ductility of steel. The reinforcing steel,
usually in the form of round steel rods with a coarse surface pattern, is embedded in the concrete core in
locations where large tensile stresses are expected. This combination makes it possible to use reinforced
concrete in a wide spectrum of structures.
A simple case of a reinforced concrete member is a simply supported concrete beam. The response of
such beam subjected to a point load goes through different stages which depend to great extent on the
properties of the materials.
2.5.2 Structural response of reinforced concrete beams
Consider a simply supported reinforced concrete beam subjected to a concentrated load at midspan.
As the load increases, the response of the beam reaches different thresholds until attaining maximum
capacity. A typical load-deformation curve for such a case is presented in Figure 2.10.
In state I, the section is uncracked and both steel and concrete exhibit a linear-elastic response. When
cracking initiates, the response shows a drastic change since the stiffness of cracked regions is smaller
than that of uncracked ones. The stiffness in state II governs the behavior of cracked regions, and the
reinforcement steel has a large influence on the structural response. The theoretical model used for
calculations in state II assumes that the concrete and the steel both behave linearly.
In a fully cracked region, the uncracked sections in between flexural cracks contribute to the average
stiffness of the cracked region; as a consequence, the average steel strain in such regions is smaller than
the steel strain at the flexural cracks. This phenomenon, known as tension stiffening, is explained due
to the transference of tensile stresses from the reinforcement bars to the surrounding concrete by bond
12 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	12 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	12 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 32 of 333 --

stresses at the interface (Engström, 2015). This implies that calculating the stiffness of a cracked member
using a model in state II would result in underestimation of the real stiffness of the member. It should be
noticed, however, that the effects of tension stiffening decrease as the acting load continues to grow with
respect to the cracking load.
Fracture capacity
(state III)
u
q
Midpoint displacement, u
Load, F
Crack
initiation
(state I)
Onset of yielding
(state II)
Maximum
capacity
Simplified Response
plastic	elastic
uel upl
Stiffness of fully
cracked beam
(state II)
u
F
Figure 2.10 Response of a simply supported concrete beam subjected to a concentrated load at midspan,
modified from (Johansson and Laine, 2012).
After yielding in the reinforcement bars at a critical section has initiated, the response of the element
should be analyzed in state III, so that non-linear properties of concrete and steel (or both) can be
considered. The external load can still be increased past the onset of yielding until the ultimate limit
state (ULS) is reached.
However, the structural response of the beam can be simplified to a bi-linear elasto-plastic relationship,
as shown in Figure 2.10. The beam is assumed to be fully cracked from the start of loading, and the
response is dependent on the stiffness in state II until the load capacity is reached. From that point on,
the beam exhibits an ideally plastic deformation.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 13	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 13	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 13

-- 33 of 333 --



-- 34 of 333 --

3 Fundamentals of Dynamics
3.1 Basic Dynamics Theory
3.1.1 Work and kinetic energy
One method to transfer energy into a system is to exert a certain amount of work on it. The work, 푊 ,
exerted on a particle when an external constant force, 퐹 , causes a displacement of magnitude 훿 along a
straight line is defined according to the expression below:
푊 = 퐹 ⋅ 훿 ⋅ 푐표푠(휃) (3.1)
The angle 휃 is the angle between the force and the direction of the displacement. When the external
force varies along the 푥−axis, the work can be determined as
푊 =
훿
0
퐹 (푥)푑푥 (3.2)
The kinetic energy of a particle of mass 푚 moving at a velocity 푣 is calculated by
퐸푘 = 1
2푚푣2 (3.3)
The external work done by the external force can also be defined as the change in kinetic energy
푊푒 = 퐸푘1 − 퐸푘0 = 1
2푚푣2
1 − 1
2푚푣2
0 (3.4)
An external work on a system produces an internal reaction, which is denoted internal work. In line with
the energy conservation law, the internal work needs to be equivalent in magnitude to the external work
to reach static equilibrium, which can be expressed as
푊푖 = 푊푒 (3.5)
3.1.2 Momentum and impulse
The linear momentum of a particle of mass 푚, which travels with a velocity 푣, can be defined as the
product of the mass and the velocity as
푝 = 푚 ⋅ 푣 (3.6)
The momentum of a particle changes if an external force, 퐹 , which may vary with time, is applied on the
particle; that is,
Δ푝 = 푚 ⋅ 푣1 − 푚 ⋅ 푣0 =
푡1
푡0
퐹 (푡)푑푡 (3.7)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 15	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 15	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 15

-- 35 of 333 --

The expression on the right-hand side in Equation (3.7) is called Impulse, and can be expressed by
퐼 = Δ푝 =
푡1
푡0
퐹 (푡)푑푡 (3.8)
The impulse is therefore described as the change in momentum. If the body is originally at rest before
the impulse loading (that is, 푣0 = 0), the impulse can be defined as
퐼 = 푚푣 (3.9)
By combining Equation (3.3) together with Equation (3.9), an expression for kinetic energy in terms of
impulse can be found as
퐸푘 = 퐼2
2푚 (3.10)
Two extreme cases of impulse loading are presented in Figure 3.1. A characteristic impulse, 퐼푘, is
defined by a force of infinite magnitude acting during an infinitesimal time, as depicted in Figure 3.1a.
The opposite end of the spectrum corresponds to the characteristic pressure load, caused by a load 퐹푘
acting for an infinite duration, as illustrated in Figure 3.1b.
F
t
Ik
ta
F
t
ta
Fk
(a) Characteristic impulse load.
F
t
Ik
ta
F
t
ta
Fk
 (b) Characteristic pressure load.
Figure 3.1 Extreme cases of impulse loading.
In general, a given impulse exerted on a system is defined by a formulation placed between a characteristic
impulse load and a characteristic pressure load. The duration of load application, be it relatively long
or short, is heavily dependent on the properties of the dynamically loaded structure. For the remainder
of the thesis work, the response of a structural system subjected to a characteristic impulse load, 퐼푘, is
adopted, since the dynamic loading by a drop-weight impact is assumed to act within a relatively short
duration.
3.1.3 Impact theory
In order to describe an impact event, a classical collision model can be used. During a collision, two
bodies which have come close to each other, interact by means of a force. This force may vary in time
16 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	16 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	16 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 36 of 333 --

and have a complex nature; however, it is internal. Therefore, the two bodies form an isolated system
and the momentum of the system must be preserved.
The kinetic energy, on the other hand, may or may not be conserved depending on the nature of the
collision. Two different scenarios are commonly found in literature; for the first case, the collision is
considered elastic, whereas the latter represents a plastic collision.
Consider the system in Figure 3.2. The right-moving body with mass 푚1 has an initial velocity 푣푚1 = 푣0,
while the body of mass 푚2 is at rest, that is, 푣푚2 = 0.
m1 m2
vm1= v0
Before impact
m1 m2
v2
After impact
vm2 = 0
Figure 3.2 Two bodies before impact.
The kinetic energy and momentum for the first body before impact occurs can be calculated by using
Equations (3.3) and (3.6), respectively, as
퐸푘,0 = 푚1푣2
0
2 (3.11)
푝0 = 푚1푣0 (3.12)
If the collision is perfectly elastic, the bodies will have two different velocities after impact. However, if
the collision is perfectly plastic, the two bodies will move together at the same velocity, see Figure 3.3.
m1 m2
vel,m1
Elastic collision
m1 m2
vpl
Plastic collision
vel,m2
Figure 3.3 Representation of elastic and plastic collision.
The final velocities after an ideally elastic collision can be determined as
푣푒푙,푚1 = 푚1 − 푚2
푚1 + 푚2
푣0 (3.13)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 17	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 17	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 17

-- 37 of 333 --

푣푒푙,푚2 = 2푚1
푚1 + 푚2
푣0 (3.14)
The resultant kinetic energy for both bodies after an elastic collision can be computed by means of
Equation (3.15) and Equation (3.16). For this case, both the total kinetic energy and the total momentum
of the system have the same magnitude before and after collision.
퐸푘,푚1 = 푚1푣2
푒푙,푚1
2 = 푚1
2
4푚1 − 푚2
푚1 + 푚2
52
푣2
0 =
4푚1 − 푚2
푚1 + 푚2
52
퐸푘,0 (3.15)
퐸푘,푚2 = 푚2푣2
푒푙,푚2
2 = 푚2
2
4 2푚1
푚1 + 푚2
52
푣2
0 = 4푚1푚2
(푚1 + 푚2)2 퐸푘,0 (3.16)
During a plastic collision, the total kinetic energy of the system does not remain the same before and
after collision. After colliding head-on, the two bodies move together with a velocity 푣푝푙, which can be
calculated as
푣푝푙 = 푚1
푚1 + 푚2
푣0 (3.17)
Therefore, the resultant total kinetic energy after impact is given by the expression below
퐸푘,푝푙,푡표푡 = (푚1 + 푚2)푣2
푝푙
2 = 푚1 + 푚2
2
4 푚1
푚1 + 푚2
52
푣2
0 = 푚1
푚1 + 푚2
퐸푘,0 (3.18)
3.2 Impulse Loading and Energy
3.2.1 General description
A structure subjected to external work due to an impulse load exhibits an internal response which results
in an internal work, see Figure 3.4. Energy equilibrium, 푊푖 = 푊푒, determines the total deformation of
the structure due to impulse loading.
18 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	18 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	18 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 38 of 333 --

u
F, R
utot
F(u)
R(u)
We
Wi
Figure 3.4 Schematic representation of energy equilibrium between external work, 푊푒, and internal
work, 푊푖, for a given structure.
3.2.2 External energy
Based on the concept of a characteristic impulse load, the external work exerted on a dynamically loaded
structure can now be expressed as
푊푒 = 퐸푘 = 퐼2
푘
2푚 (3.19)
3.2.3 Internal energy based on linear elastic response
The linear elastic response of a structure was previously defined in Section 2.2.2. The relationship
between internal force and deformation is shown again below:
푅(푢푒푙) = 푘 ⋅ 푢푒푙 (3.20)
where 푢푒푙 is the elastic deformation. Additionally, Figure 3.5 shows schematically the internal work in a
structure that deforms with a linear elastic response when subjected to an external work.
u
F, R
uel
k
Wi
We
R
Figure 3.5 Energy equilibrium between external work, 푊푒, and internal work, 푊푖, for a system with
elastic response.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 19	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 19	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 19

-- 39 of 333 --

The internal work of a structure which exhibits a linear elastic response can then be defined as
푊푖 = 푅(푢) ⋅ 푢푒푙
2 = 푘 ⋅ 푢2
푒푙
2 (3.21)
By combining Equations (3.5), (3.19), and (3.21), the following expression to determine the elastic
deformation is derived:
푢푒푙 = 퐼푘
푚휔 (3.22)
where 휔 corresponds to the angular eigenfrequency of the system, and can be calculated as
휔 = √푘∕푚 (3.23)
3.2.4 Internal energy based on plastic response
A structure which exhibits an ideally plastic response does not deform unless the force exerted on it
exceeds its internal resistance. Once this condition is met, the structure starts to deform with a constant
internal resistance, as previously explained in Section 2.2.3. Therefore,
푊푖 = 푅(푢푝푙) ⋅ 푢푝푙 = 푅푚 ⋅ 푢푝푙 (3.24)
where 푢푝푙 is the plastic deformation which the structure undergoes due to impulse loading.
u
F, R
upl
Wi
We
Rm
Figure 3.6 Energy equilibrium between external work, 푊푒, and internal work, 푊푖, for a system with
ideal plastic response.
Combining Equations (3.5), (3.19) and (3.24) the following expression is obtained:
푢푝푙 = 퐼2
푘
2푚푅푚
(3.25)
The internal work of a structure which deforms with an ideally plastic response when subjected to
external work is shown in Figure 3.6.
20 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	20 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	20 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 40 of 333 --

3.2.5 Internal energy based on elasto-plastic response
The internal work generated in a structure with an elasto-plastic response by an external work is shown
schematically in Figure 3.7.
u
F, R
utot
Wi
We
Rm
uel
utot = uel + upl
Figure 3.7 Energy equilibrium between external work, 푊푒, and internal work, 푊푖, for a system with
elasto-plastic response.
The total internal work produced in the structure is given by
푊푖 = 푅푚
2 (푢푒푙 + 2푢푝푙) (3.26)
The parameter 푢푒푙 corresponds to the limit for the elastic response of the structure and it is expressed
as
푢푒푙 = 푅푚
푘 (3.27)
Based on Equations (3.5), (3.19) and (3.26), the plastic part of the elasto-plastic deformation can be
defined as
푢푝푙 = 퐼2
푘
2푚푅푚
− 푢푒푙
2 (3.28)
3.3 Strain Rate Effect
The properties of concrete and reinforcing steel are dependent on the rate of strain,̇ 휀, to which they are
subjected. Therefore, the response of a reinforced concrete member may differ if the rate of strain varies
drastically compared to a static load case. See Figure 3.8 for various strain rates due to different loading
conditions.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 21	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 21	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 21

-- 41 of 333 --

10-8 10-7 10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
creep 	static 	earthquake 	hard impact blast
strain rate [s-1 ]
Figure 3.8 Intervals of strain rates for given loading scenarios (Johansson, 2000).
In general, the structural response in terms of strength and modulus of elasticity is amplified with
increasing rate of strain. This has been documented to occur for both reinforcing steel and concrete;
an example of such a phenomena is presented in Figure 3.9. The relative increase of a parameter with
respect to its static counterpart is commonly referred to as the dynamic increase factor, 퐷퐼퐹 , and can be
expressed as
퐹푑푦푛 = 퐹푠푡푎푡푖푐 ⋅ 퐷퐼퐹 (3.29)
This topic has been treated to a greater extent in publications such as (Johansson, 2000).
0
1
2
3
4
10 -6 10 -5 10 -4 10 -3 10 -2 10 -1 10 0 10 1 10 2 10 3
CEB, f c=30 MPa
CEB, f c = 60 MPa
Ross et al., f c = 28 MPa
Malvar and Ross,
f c = 30 MPa
Malvar and Ross,
f c = 60 MPa
DIF
Strain rate, .
ε [s-1]
Figure 3.9 Strain rate and its influence on compressive strength of concrete, modified from (Johansson,
2000).
22 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	22 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	22 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 42 of 333 --

4 Discrete Model for Dynamic Analysis
4.1 Introduction
This chapter presents a simplified model to predict the behavior of a beam subjected to an impact caused
by a falling drop-weight. The model consists of a two-degree-of-freedom (2DOF) spring-mass system,
whereby the beam is simplified into a rigid body with an equivalent lumped mass and a given internal
resistance. Likewise, the drop-weight is represented as a rigid body and the contact between the beam
and the drop-weight is modelled as a spring element with certain stiffness properties.
Studying the beam and the drop-weight as a 2DOF system implies that only the fundamental eigenfre-
quency of both elements is considered, although there exists an infinite number of eigenfrequencies in
reality. Furthermore, the damping present in the system is omitted in future calculations with the 2DOF
model. Further simplifications are adopted in the formulation of the 2DOF system, which are described
in the content of this chapter. It is understood that such assumptions introduce errors to the solution;
however, it is assumed that the effects of the simplifications can be disregarded.
In order to treat the system with a beam and a drop-weight as a simplified 2DOF system, an understanding
of basic concepts is needed. To that end, a description of a single-degree-of-freedom (SDOF) system is
initially provided. Thereafter, the theoretical procedure to transform both the beam and the drop-weight
into equivalent SDOF systems is explained, where dimensionless transformation factors are introduced.
Finally, both SDOF systems are extended and coupled into a 2DOF system. Furthermore, a numerical
method to solve the equation of motion is presented.
4.2 Equation of Motion for a SDOF System
The theoretical description of a SDOF system and the formulation of the equation of motion is based
mainly on (Craig and Kurdila, 2006). In order to obtain an equation which represents the behavior of a
vibrating body, Newton’s Second Law can be applied:
… 퐹푥 = 푚푎푥 (4.1)
where 푚 corresponds to the mass of the body, and 푎푥 to the acceleration of such mass in the 푥 direction.
Mathematically, the acceleration is equivalent to the second time derivative of the displacement; that
is, 푎푥 =̈ 푢 . In a similar manner, the velocity is given as the first time derivative of the displacement,
푣푥 =̇ 푢.
Consider the free body diagram of the system in Figure 4.1. The body is assumed to be attached to a
linear spring with spring constant 푘, and to a damper. The force 퐹 (푡) represents an external force acting
on the body, whereas 퐹푘 and 퐹푐 represent the spring force and the damping force, respectively. Note that
the displacement, 푢, is taken as positive when moving to the right.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 23	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 23	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 23

-- 43 of 333 --

u
u
R
u
uel
F(t)
m
k
c
(a) SDOF system.u
R
a
uel
F(t)
m
Fk
Fc
 (b) Free-body diagram.
Figure 4.1 Free-body diagram of a SDOF system.
The spring-type element allows the system to store potential energy. Let the force in the spring relate
linearly to its deformation, so that
퐹푘 = 푘푢 (4.2)
On the other hand, the damper represents the mechanism by which the energy is dissipated from a
vibrating structure. Damping is usually defined as a linear function of the velocity, see Equation (4.3).
However, it should be noticed that damping is a complex phenomenon and there are several mathematical
methods to describe it.
퐹푐 = 푐̇푢 (4.3)
For a displacement of the mass to the right, the spring is subjected to a tension force. Dynamic equilibrium
according to Equation (4.1) gives
퐹 (푡) − 퐹푘 − 퐹푠 = 푚푎푥 (4.4)
By inserting Equation (4.2) and Equation (4.3) into Equation (4.4) and rearranging, the following
expression for a vibrating mass is obtained:
푚̈푢 + 푐̇푢 + 푘푢 = 퐹 (푡), (4.5)
which is the expression describing the equation of motion for a single-degree-of-freedom (SDOF)
system.
4.3 Transformation of Structural Members to Equivalent SDOF
Systems
4.3.1 General description
Both the beam and the drop-weight can be simplified into a SDOF system, which may be subjected
to a time-dependent load 퐹 (푡), consisting of a mass 푚, a resistance 푅(푢), and a damper with damping
coefficient 푐. The external force exerted on the SDOF system is balanced by the internal forces which
are composed of a viscous damping force, 푅푑푦푛(̇푢), and a static force, 푅푠푡푎(푢). However, for the purpose
of this thesis work, the damping force is neglected as the loading duration is relatively short, as shown in
Figure 4.2. Besides, the maximum displacement of a system subjected to an impulse load is of interest
in this thesis work, and disregarding the damping force leads to a more conservative estimation.
24 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	24 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	24 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 44 of 333 --

F(t)
c(u	 )	R(u)
m	u
F(t)
R(u)
m u
Figure 4.2 Simplified SDOF model adopted. The viscous damping force is neglected.
4.3.2 Modelling of a beam into an equivalent SDOF system
A beam which is assumed to behave linear-elastically exhibits a certain deformed shape which depends on
the type of loading and the boundary conditions. A linear elastic response results in constant proportions
of the deformed shape, regardless of the magnitude of the load applied, as illustrated in Figure 4.3 for a
concentrated load at midspan. Thus, it is possible to describe the deflection along the length of such a
beam by only analyzing one system coordinate of the beam, denoted 푢푠, in a SDOF model (Johansson
and Laine, 2012). The system coordinate is commonly chosen so that it corresponds to the point where
maximum deflection is expected or at the midspan of the beam. A similar reasoning can be drawn for
beams assumed to deform with an ideal plastic response.
us
us	
ui ui
F(t)
F(t)
L, m, E, I
R(u)
me u
Figure 4.3 Beam subjected to a concentrated load and an equivalent SDOF system. The deformed
shape scales linearly with 훼 since the beam is assumed to behave linear-elastically.
In order to convert the real beam in Figure 4.3 into the equivalent SDOF system, the real parameters
of mass, stiffness, and external load are multiplied by dimensionless transformation factors, 휅, (Biggs,
1964). The equation of motion for the equivalent SDOF described in Equation (4.5) becomes
휅푚푚̈푢 + 휅푘푘푢 = 휅퐹 퐹 (푡) (4.6)
A more general expression can be derived considering the internal resistance, 푅(푢), as
휅푚푚̈푢 + 휅푘푅(푢) = 휅퐹 퐹 (푡) (4.7)
The transformation factors 휅푚, 휅푘 and 휅퐹 are used to modify the mass, the stiffness, and the external
load, respectively. These transformation factors are based on the conservation of energy of the system
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 25	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 25	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 25

-- 45 of 333 --

and are dependent on the type of load applied to the structure, the assumed deformed shape, and the
system point adopted. A complete description of the derivation of the 휅 factors can be found in (Biggs,
1964) and (Johansson and Laine, 2012).
For the purpose of this thesis work, only the transformation factors pertaining to a simply supported beam
subjected to a point load at midspan and to a system point located at midspan (position of maximum
deflection) are presented.
In order to preserve the kinetic energy after transformation, the mass transformation factor of the system
should be defined as
휅푚 = 1
퐿푢2
푠
퐿
0
푢(푥)2푑푥 (4.8)
Equation (4.8) implies that the mass transformation factor is directly dependent of the deformed shape
of the beam. The respective values for linear elastic deformation and plastic deformation are given in
Table 4.1.
Likewise, the transformation factor for the external load can be derived considering conservation of the
external energy, as
휅푓 = 1
퐹 푢푠
퐿
0
푞(푥)푢(푥)푑푥 (4.9)
For the case when the external load, 푞(푥), corresponds to a point load, 퐹 , Equation (4.9) leads to a value
of 휅푓 equal to the unit, regardless of the deformed shape of the beam.
Finally, the expressions to calculate the stiffness transformation factor are obtained by considering
the conservation of internal energy. For a linear elastic response, the following equation should be
used:
휅푘,푒푙 = 1
퐹 푢푠
퐿
0
푀(푥) d2푢
d푥2 푑푥 (4.10)
where 푀(푥) is the sectional moment along the length of the beam. On the other hand, if an ideal plastic
response is adopted, the stiffness transformation factor is calculated as
휅푘,푝푙 = 1
푅푚푢푠
퐿
0
푀(푥) d2푢
d푥2 푑푥 (4.11)
As discussed previously, the external work applied on the structure must be in equilibrium with the
internal work. This statement ultimately indicates that the transformation factors derived based on
conservation of internal energy and external energy are equal:
휅퐹 = 휅푘 (4.12)
26 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	26 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	26 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 46 of 333 --

Dividing Equation (4.7) by the load transformation factor, 휅푓 , yields
휅푚퐹 푚̈푢 + 푅(푢) = 퐹 (푡) (4.13)
Here, the factor 휅푚퐹 has been introduced, which can be defined as
휅푚퐹 = 휅푚
휅퐹
(4.14)
The transformation factors for a simply supported beam loaded by a point load at midspan are summarized
in Table 4.1.
Table 4.1 Transformation factors for a simply supported beam subjected to a concentrated load for
different material responses (Johansson and Laine, 2012).
L
Material response 휅푚 휅퐹 휅푘 휅푚퐹
Elastic 0.486 1.00 1.00 0.486
Plastic 0.333 1.00 1.00 0.333
4.3.3 Modelling of drop-weight into an equivalent SDOF system
Similarly to the procedure followed in Section 4.3.2 for a beam, transformation factors can be included
in the equation describing the motion of the falling drop-weight impacting a surface in order to obtain an
equivalent SDOF system. The drop-weight is assumed to undergo axial deformation only; hence, the
determination of the transformation factors is performed under the assumption that the drop-weight can
be represented as a bar.
The equivalent SDOF system is shown in Figure 4.4. When the drop-weight impacts a surface, be
it rigid or not, a distributed load 푞(푥, 푡) arises along the length of the drop-weight, which results in a
displacement field that reaches a maximum displacement value at the base of the bar, where the impact
occurred. Therefore, the system point, 푢푠, is chosen so that it coincides with the location where maximum
displacement occurs, at the base of the falling drop-weight.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 27	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 27	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 27

-- 47 of 333 --

A,E,L us
q(x,t)
F(t)
us
k
me
Figure 4.4 Bar falling onto a rigid surface modelled into an equivalent SDOF system, modified from
(Lovén and Svavarsdóttir, 2016).
A complete description of the determination of the transformations factors for a bar impacting a rigid
surface can be found in (Lovén and Svavarsdóttir, 2016). A summary of such factors is provided in
Table 4.2, where two extremes of displacement shapes are presented.
Table 4.2 Transformation factors of a fixed-end bar (Lovén and Svavarsdóttir, 2016).
Displacement shape 휅푚 휅퐹 휅푘 휅푚퐹
0.333 0.50 0.50 0.667
1.00 1.00 1.00 1.00
The first case in Table 4.2 (top picture) is based upon the assumption that both the elastic and plastic
deformation shapes of the bar are triangular, due to the fact that one end of the falling bar is considered
as fixed. This fixation is made in order to simulate an impact against a very stiff surface.
In the second case (bottom picture), transformation factors are derived based on the assumption that the
bar behaves rigidly. The displacement field is constant throughout the length of the drop-weight, as the
bar is regarded as very stiff in comparison to the impacted surface.
28 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	28 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	28 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 48 of 333 --

However, in reality, the behavior of the falling drop-weight is somewhere in between the two extreme
cases presented in Table 4.2. As explained in (Lovén and Svavarsdóttir, 2016), since the stiffness of
the drop-weight is much larger than that of the beam, the transformation factors of a rigid bar are
considered more suitable to model the response. Therefore, a proper representation of the behavior of
the drop-weight can be achieved by assuming:
휅푚 = 휅퐹 = 휅푘 = 1 (4.15)
4.4 2DOF Systems
4.4.1 General description
Equivalent SDOF systems have been established for both the beam and the drop-weight in Section 4.3.
This was done by transforming the structural elements into rigid bodies with equivalent mass, 휅푚푚, and
equivalent stiffness properties, 휅푘푘, which undergo deformation due to an equivalent variable force,
휅퐹 퐹 (푡). In this section, the coupling of the two equivalent SDOF systems into an equivalent 2DOF
system, as described in Figure 4.5, is treated. In order to do so, the equation of motion of a 2DOF system
is firstly established; thereafter, the equivalent 2DOF model is introduced by adopting the transformation
factors derived earlier.	R
R
uel
k1 m1,e
m2,e
R1,e
R2,e
Drop-weight
Beam
R
R
uel
k1
m1,e
R1,e
R
R
uel
k1
m2,e
R2,e
+
Figure 4.5 Equivalent SDOF systems coupled together into an equivalent 2DOF system.
Observe that the subscript "1" is used henceforth to refer to the body corresponding to the drop-weight,
while number "2" is used to name the equivalent body corresponding to the beam.
4.4.2 Equation of motion of 2DOF systems
In order to establish the system of equations which describes a 2DOF system, a free-body diagram
representing the forces acting on the bodies should be drawn, as shown in Figure 4.6.
Consider dynamic equilibrium of each body according to Newton’s Second Law:
… 퐹1 = 푚1 ⋅ 푎1
… 퐹2 = 푚2 ⋅ 푎2
(4.16)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 29	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 29	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 29

-- 49 of 333 --

u1	m1
m2
k1
k2
u2
m1 m2	a1 a2
Fk,1 Fk,2
F(t) Fk,1
Figure 4.6 Free-body diagram of a 2DOF system.
Force equilibrium of the two free bodies yields
퐹 (푡) − 퐹푘,1 = 푚1̈푢 1
퐹푘,1 − 퐹푘,2 = 푚2̈푢 2
(4.17)
Introducing the constitutive relations for the springs given by Equation (4.2) results in the following set
of equations of motion:
푚1̈푢 1 + 푘1(푢1 − 푢2) = 퐹 (푡)
푚2̈푢 2 + 푘2푢2 − 푘1(푢1 − 푢2) = 0 (4.18)
which can also can be expressed in matrix form as
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
4퐹 (푡)
0
5
(4.19)
By expressing Equation (4.19) in symbolic matrix notation, the following equation of motion is obtained
for a 2DOF system:
M̈u + Ku = F(푡) (4.20)
4.4.3 Equivalent 2DOF system
An equivalent 2DOF system is established by adopting the transformation factors summarized in Sections
4.3.2 and 4.3.3 into Equation (4.19). Additionally, no force 퐹 (푡) is considered to act on the bodies (the
gravitational force is disregarded); instead, the impact load is introduced to the system as initial velocity
of body 1, corresponding to the drop-weight. A solution to the system of equation can be obtained by
means of numerical methods, such as the Central Difference Method described in Section 4.5.
For a linear elastic response, the equation below is obtained:
4휅푚퐹 ,1푚1 0
0 휅푚퐹 ,2푚2
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
(4.21)
30 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	30 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	30 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 50 of 333 --

If an elasto-plastic response is assumed, Equation (4.21) is instead expressed in terms of the internal
resistance as
4휅푚퐹 ,1푚1 0
0 휅푚퐹 ,2푚2
5 4̈
푢 1̈
푢 2
5
+
4 푅1 −푅1
−푅1 푅1 + 푅2
5
=
40
0
5
(4.22)
where the elasto-plastic resistance of each member can be described accordingly as
푅푖 =
T
푘푖 ⋅ 푢 푖푓 푢푖 ≤ 푢푒푙,푖
푅푚,푖 푖푓 푢푖 > 푢푒푙,푖
(4.23)
However, when modelling the interaction between the drop-weight and the beam with a spring-type
element, an additional condition has to be considered, specifically when the drop-weight displaces
upwards after the collision. In such a case, when the spring between the drop-weight and the beam is
subjected to tension force, the stiffness is set to zero; therefore,
푅1 =
⎧
⎪
⎨
⎪
⎩
푘1 ⋅ 푢 푖푓 푢1 ≤ 푢푒푙,1
푅푚,1 푖푓 푢1 > 푢푒푙,1
0 푖푓 푢1 ≤ 0
(4.24)
The internal resistance of the drop-weight, 푅푚,1, can be derived from the strength of the material and the
impact area as
푅푚,1 = 푓 ⋅ 퐴푖푚푝 (4.25)
Here, the value of strength, 푓 , depends on both the resistance of the steel rod and the local behavior of
the concrete in the impact area. This implies that the internal resistance of the drop-weight can have a
value within a significantly large interval given by
푓푐푚 ⋅ 퐴푖푚푝 ≤ 푅푚,1 ≤ 푓푦푚 ⋅ 퐴푖푚푝 (4.26)
where the lower limit corresponds to local concrete crushing, and the upper limit to yielding of steel.
The lower limit due to concrete crushing increases due to strain rate effects as well as through local
confinement of the impacted concrete provided by surrounding concrete and the drop-weight.
A study of the influence of 푅푚,1 on the 2DOF system was performed in (Lovén and Svavarsdóttir,
2016). Different values were considered and compared to results from finite element analyses of the
impact-loaded beam. It was concluded that a value 푅푚,1 = 50 kN yields reasonable results.
On the other hand, the maximum internal resistance for the beam, 푅푚,2, is determined from the maximum
moment at ultimate limit state. For a beam subjected to a point load at midspan, the maximum moment
along the beam can be related to the external load as
푀푢 = 퐹 ⋅ 퐿
4 (4.27)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 31	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 31	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 31

-- 51 of 333 --

Setting 퐹 = 푅푚,2, the maximum internal plastic resistance can then be derived from Equation (4.27):
푅푚,2 = 4 ⋅ 푀푢
퐿 (4.28)
The beam is also statically loaded by its self-weight. This means that the internal resistance is slightly
lower than the value calculated according to Equation (4.28). To account for the self-weight, 푅푚,2 should
be reduced by subtracting the equivalent static load, 푅푠푡푎푡, pertaining to a beam subjected to a uniformly
distributed load, as depicted schematically in Figure 4.7.
u
Rstat
R2
Rm,2
Rm,2,mod
k2
R’2
Figure 4.7 Internal resistance of the beam, modified from (Johansson and Laine, 2012).
If 푔푏푒푎푚 corresponds to the self-weight of the beam [N/m], the modified maximum internal resistance of
the beam can finally be expressed as
푅푚,2,푚표푑 = 푅푚,2 − 푅푠푡푎푡 = 4 ⋅ 푀푢
퐿 − 푔푏푒푎푚 ⋅ 퐿
2 (4.29)
4.5 Central Difference Method
4.5.1 Introduction
The Central Difference Method (CDM) is an explicit direct integration method which can be used to
determine an approximate solution to a second-order differential equation, such as Equation (4.20). The
solution is calculated stepwise for a given time step Δ푡, where u푛 represents the displacement field at a
certain time 푡푛. Furthermore, the discretized field u푛+1 are expressed in terms of the of previous fields u푛
and u푛−1.
The CDM is conditionally stable, and results in a stable solution provided that certain conditions are
fulfilled. Should such conditions not be met, the solutions obtained with the method are unstable and the
error will increase without bound.
4.5.2 Numerical formulation
The method is based on a straightforward definition of the first derivative as a simple finite difference
approximation:
̇
u푛 ≈ u푛+1 − u푛−1
2 ⋅ Δ푡 (4.30)
32 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	32 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	32 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 52 of 333 --

Likewise, the second order derivative is approximated as the difference of the first-order forward and
backward finite differences:
̈
u푛 ≈̇ u푛+1∕2 −̇ u푛−1∕2
Δ푡
≈ (u푛+1 − u푛)∕Δ푡 − (u푛 − u푛−1)∕Δ푡
Δ푡 = u푛+1 − 2u푛 + u푛−1
Δ푡2
(4.31)
Inserting Equation (4.30) and Equation (4.31) into the governing equation of motion at a time step 푛
produces
(M∕Δ푡2)u푛+1 + (K − 2M∕Δ푡2)u푛 + (M∕Δ푡2)u푛−1 = F(푡푛) (4.32)
Equation (4.32) can be solved for u푛+1 by introducing the initial conditions as u(0) = u0,̇ u(0) =̇ u0, and
F(0) = F0, for an initial value of 푛 = 0.
It can be noticed that the first iteration requires the displacement field for a time step previous to 푛 = 0,
that is, u−1. This field can be approximated by means of Taylor series as
u−1 ≈ u0 − Δ푡 ⋅̇ u0 + (Δ푡2∕2)̈u0 (4.33)
Additionally, the second derivative of the displacement for 푛 = 0 can be determined from the original
equation of motion as
̈
u0 = M−1(F0 − Ku0) (4.34)
4.5.3 Stability
As stated in Section 4.5.1, the CDM is a conditionally stable algorithm and the method is stable only if
the chosen time step Δ푡 is less than
Δ푡푐푟푖푡 = 2
휔푚푎푥
= 푇푛
휋 . (4.35)
Here, 휔푚푎푥 is the highest eigenfrequency determined from det(K − 휔2M) = 0. Therefore, 푇푛 corresponds
to the smallest period.
Selecting a time step which is smaller than the critical value Δ푡푐푟푖푡 guarantees that the wave information
does not propagate across more than one element per time step. Moreover, when a high level of accuracy
is needed, a significantly smaller time step might be required. According to (Johansson and Laine, 2012),
a suitable time step is dependent on the loading conditions and the response time of the system; although
a time step less than one percent of the load duration usually suffices:
Δ푡 ≤
T
Δ푡푐푟푖푡
푡푙
100
(4.36)
where 푡푙 is the duration of the load.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 33	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 33	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 33

-- 53 of 333 --



-- 54 of 333 --

5 Plastic Rotational Capacity
5.1 Introduction
A large plastic rotational capacity is associated with a more ductile behavior of a given structural element,
and is a desirable property since large deformations near ultimate load can serve as a warning when
structures subjected to static loading are close to failure. Moreover, the rotational capacity of a reinforced
concrete element allows for moment redistribution in statically indeterminate structures, which results in
an increased load carrying capacity. Furthermore, a large plastic rotational capacity is also a sought-after
property in structures subjected to impulse loads, since it is proportionally related to the capacity to
absorb energy.
Provided that a reinforced concrete structure is ductile enough, yielding of reinforcement causes plastic
hinges to form with an increased load. It is common in engineering practice to assume such hinges to be
concentrated to certain sections, as can be seen in Figure 5.1a for a simply supported beam. The need
of plastic rotation is then usually defined as the rotation of such concentrated hinges from the onset of
yielding until a failure mechanism is reached.
However, in reality plastic rotation of a structure is the result of plastic deformation along a plastic region,
as represented schematically in Figure 5.1b. Furthermore, plastic rotation is a complex phenomenon
that depends on several factors, such as the properties of steel reinforcement, amount of reinforcement,
loading conditions, cracking and tension stiffening, among others. Due to the number of factors and
conditions affecting rotation capacity, experimental results have shown a large variation of the measured
values of plastic rotation. This has led researchers to develop several different methods to predict the
plastic behavior of concrete beams, which are covered in later sections of this chapter.
Fictitious stiffness of bi-linear
model with/without stiffening
φy φ
L/2 L/2
(a) Assumption of concentrated hinge.
Fictitious stiffness of bi-linear
model with/without stiffening
(a)
φy φ
L/2 L/2
 (b) Real distribution of plastic hinge.
Figure 5.1 Representation of a plastic hinge.
In order to define plastic rotational capacity, an understanding of the relationship between curvature and
rotation is needed. Initially, the definition of these concepts is given. Subsequently, different methods
found in the literature to predict the plastic rotation capacity are presented.
5.2 Curvature
5.2.1 Definition
Consider a certain reinforced concrete element of infinitesimal length, 푑푎, subjected to a bending moment,
푀, as shown in Figure 5.2. Based on the assumption that plane sections remain plane, the radius of
curvature, denoted 푅, is measured with respect to the distance to the neutral axis, 푥, of the concrete
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 35	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 35	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 35

-- 55 of 333 --

section. The curvature of the element, 휑, measured between the two ends of the element, can be given as
푑푎∕푅.
0
5
ĳ
ĳ
[
G 0
x
da
Figure 5.2 Definition of curvature of a reinforced concrete element of length da subjected to a bending
moment, modified from (Park and Paulay, 1975).
It is observed in Figure 5.2 that the curvature of the infinitesimal element corresponds to its strain
gradient (Park and Paulay, 1975). By assuming a unit length, 푑푎 = 1, the curvature of the element can
therefore be defined as
휑 = 1
푅 = 휀푐
푥 = 휀푠
푑 − 푥 (5.1)
where 푑 is the distance from the compressed edge to the center of gravity of the tensile reinforcement;
and 휀푐 and 휀푠 correspond to the concrete strain at the compressed edge and the strain in the tensile
reinforcement, respectively.
5.2.2 Curvature of a cracked element
If a member is cracked, the stiffness can no longer be considered constant along its length. The position of
the neutral axis is influenced by the location and size of the cracks, as shown schematically in Figure 5.3.
Consequently, a shift of the neutral axis due to cracking results in a larger curvature. However, due to
tension stiffening, the average steel strain in cracked regions is smaller than the steel strain at the flexural
cracks. This implies that calculating the stiffness of a cracked member using a model in state II would
lead to underestimation of the real stiffness of the member.
36 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	36 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	36 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 56 of 333 --

φ
M 	M
Cracking
R
Figure 5.3 Shift of neutral axis due to the presence of cracking, modified from (Park and Paulay, 1975).
5.3 Plastic Rotation
5.3.1 Relationship between rotation and curvature
The change in rotation from one section, 푎1, to another section, 푎2, is calculated by the integration of the
curvature between the sections as
휃12 =
푎2
푎1
1
푅(푎)푑푎 =
푎2
푎1
휑(푎)푑푎 (5.2)
Equation (5.2) may be applied to a member where the moment-curvature relationship of said member is
known, and where the moment distribution along its length is also known (Park and Paulay, 1975).
5.3.2 Theoretical plastic rotation capacity
Various definitions of plastic rotation capacity have been suggested by different authors as the under-
standing of the plastic hinge phenomenon developed (CEB-FIP, 1998). Understanding the differences in
the various definitions of plastic rotation is essential when comparing research results, considering that
the measured rotations can vary significantly due to the different definitions adopted.
Model Code 90 (CEB-FIP, 1991) defines the plastic rotation capacity as the difference between the total
rotation at failure, 휃푡표푡, and the elastic rotation, 휃푒푙,푡표푡. Therefore, the plastic rotation capacity represents
the additional curvature which takes place from the onset of yielding to failure of the member. Then, the
definition of failure becomes important, as the chosen criteria for structural failure affect the calculation
of the plastic rotation capacity. In general terms, two different failure modes should be considered,
namely: concrete failure and steel failure. In the former, concrete crushing occurs when the ultimate
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 37	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 37	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 37

-- 57 of 333 --

strain of concrete, 휀푐푢, is reached at the compressed edge; while in the latter, the ultimate reinforcing
steel strain, 휀푠푢, is reached before the total capacity of the concrete has been utilized and one or more
reinforcement bars rupture.
Consider Figure 5.4. The total rotation, 휃푡표푡, is equal to the integration of the curvature at failure along
the beam length; while the total elastic rotation, 휃푒푙,푡표푡, is equal to the rotation at a load causing yielding
of the reinforcement at a point of maximum moment. On the other hand, the total plastic rotation, 휃푝푙,푡표푡
– represented as the shaded area in the curvature diagram in Figure 5.4 – can be determined based on
Equation (5.2) as
휃푝푙,푡표푡 = 휃푡표푡 − 휃푒푙,푡표푡 = 퐿
휑(푎) − 휑푦(푎)푑푎 (5.3)
Fictitious stiffness of bi-linear
model with/without stiffening
effects
(a)
φy
θtot = θel,tot + θpl,tot
Deformation,
 u
(b)
θel,tot
θpl,tot
Curvature,
 φ
a
F
Curvature,
 φ
L/2
Figure 5.4 Schematic illustration of plastic rotation.
Each of the peaks of curvature in Figure 5.4 corresponds to a crack location. According to Latte (1999),
a calculation model that takes into account the increase of curvature at each crack location is denoted a
discrete crack model 1. The moment-curvature is established for the cracked cross sections; in addition,
the curvature for the uncracked elements between the cracks are reduced due to tension stiffening effect,
which is commonly considered through local bond-slip relations.
1The different calculation models to evaluate rotation capacity described by Latte (1999) should not be confused with the
crack approaches adopted in finite element modelling of cracks in concrete structures. For a detailed definition of the crack
approaches used in FEA refer to (Johansson, 2000).
38 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	38 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	38 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 58 of 333 --

However, it is possible to smear out the crack opening over an equivalent region, which is normally
based on the mean crack distance. The smeared-crack model, therefore, allows to determine an average
moment-curvature relationship which is valid between two cracks. The rotations are then calculated by
integrating the average curvature along the length of the beam.
Simpler approaches assume that the plastic curvature occurs in a localized area denoted plastic length, 푙푦,
in which the tensile reinforcement strain is larger than the yield strain. Figure 5.5 shows schematically
how the curvature may vary along the length of a simply supported beam for two different definitions of
plastic rotation. In Figure 5.5a the elastic curvature varies linearly along 푙푦; while in Figure 5.5b the
elastic curvature is assumed to remain constant along 푙푦.
φy(a)
φ(a)
a
F
Mpl
θpl
ly
φ
F
M Mpl
θpl
φy
ly
Moment,
 M
Curvature
, φ
(a) Model with variable elastic curvature along 푙푦.
φy(a)
φ(a)
a
φ
F
M Mpl
θpl
ly
φ
F
M Mpl
θpl
φy
ly
 (b) Model with constant elastic curvature along 푙푦.
Figure 5.5 Schematic representation of different simplified models to determine plastic rotation capacity,
modified from (CEB-FIP, 1998).
Based on Figure 5.5, the plastic rotation at one side of the critical section can be calculated as the integral
of the difference between the curvature at failure and the elastic curvature along the plastic length, 푙푦,
(Park and Paulay, 1975). This relationship can be represented as
휃푝푙 = 푙푦
휑(푎) − 휑푦(푎)푑푎 (5.4)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 39	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 39	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 39

-- 59 of 333 --

For the case when a simply supported beam is subjected to a concentrated load applied at midspan,
the rotation at one side of the critical section corresponds to the rotation at the support, as shown in
Figure 5.6. Based on this definition, 휃푝푙 is considered equivalent to the plastic rotation at one of the
supports, unless stated otherwise.
φ
2θ
φ
a
θ = θel + θpl
θ
De
formation
, u
Figure 5.6 Equivalence between plastic hinge rotation and support rotation for a simply supported
beam subjected to a point load at midspan.
The elastic curvature, 휑푦(푎), is described by
휑푦(푎) = 휀푐푦
푥(푎) = 휀푠푦
푑 − 푥(푎) (5.5)
Here, 휀푐푦 is the compressive concrete strain when the reinforcement starts to yield, 휀푠푦 is the yield strain
of the tensile reinforcement, and 푥(푎) is the depth of the compressive zone along 푙푦. Similarly, the
ultimate curvature is given as
휑푢 = 휀푐푢
푥푢
= 휀푠
푑 − 푥푢
(5.6)
where 휀푐푢 corresponds to the ultimate concrete strain at the compressed edge, and 푥푢 to the height of the
neutral axis in ultimate limit state. The plastic curvature, 휑푝푙(푎), can then be expressed in terms of the
strains of the reinforcement as
휑푝푙(푎) = 휑(푎) − 휑푦(푎) = 휀푠(푎) − 휀푠푦
푑 − 푥(푎) (5.7)
Here, the reinforcing steel strain, 휀푠(푎), corresponds to the average steel strain (CEB-FIP, 1991). Com-
bining Equation (5.7) with Equation (5.4), the following expression for plastic rotation in terms of steel
strain can be defined:
휃푝푙 = 푙푦
휀푠(푎) − 휀푠푦
푑 − 푥(푎) 푑푎 (5.8)
It should be noted that Equation (5.8), adopted by Model Code 90, describes a model in which the position
of the neutral axis varies continuously from the position at which yielding takes place until the point of
maximum curvature; as a result, the elastic curvature also varies in the yielding domain. However, the
40 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	40 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	40 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 60 of 333 --

height of the compressive zone at yielding (and at any instance after yielding) can be approximated as
the height of the compressive zone at failure as 푥푦 ≈ 푥푢. This implies that 휑푦 is expressed independently
of 푎 along 푙푦. Equation (5.8) can be rewritten as
휃푝푙 = 푙푦
휑(푎) − 휑푦
푑푎 = 푙푦
휀푠(푎) − 휀푠푦
푑 − 푥푢
푑푎 (5.9)
One of the major difficulties to apply the theoretical expressions in Equations (5.8) and (5.9) lies in the
definition of the criteria at which yielding and failure are assumed to occur; along with the estimation of
the plastic zone, 푙푦, which depends on several factors, such as the influence of shear force, the presence
of inclined shear cracks, and the bond relationship between concrete and steel. Another important factor
is the definition of the ultimate strain of concrete, 휀푐푢.
5.3.3 Equivalent plastic hinge length
An approximation of the resulting plastic rotation, 휃푝푙, can be made by assuming a constant plastic
curvature, 휑푝푙 = 휑푢 − 휑푦, over an equivalent plastic hinge length, 푙푝. The equivalent plastic rotation
capacity is given by
휃푝푙 = (휑푢 − 휑푦)푙푝 = 휑푝푙푝 (5.10)
where 휑푢 and 휑푦 correspond to the curvature at ultimate load and at yielding, respectively. The relationship
described in Equation (5.10) is also depicted in Figure 5.7. Park and Paulay (1975) state that a common
approach is to first approximate the equivalent plastic hinge length, 푙푝, and subsequently calculate the
plastic rotation capacity. Some empirical methods to determine 푙푝 proposed by different authors are
described in Section 5.4.5.
a
φy
lp
ly
φp
Curvature,
 φ
φ(a)
φu
Figure 5.7 Concept of equivalent plastic hinge length. Constant plastic curvature is assumed along
the equivalent length, 푙푝. The area provided by 푙푝 and 휑푝 should correspond to the total
plastic rotation given by the shaded area under 휑(푎) along 푙푦.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 41	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 41	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 41

-- 61 of 333 --

5.3.4 Definition of plastic rotation from test results
Consider a simply supported concrete beam subjected to a concentrated load during a static loading
test. When the reinforcement bars begin to yield, a plastic hinge is formed at the location of maximum
moment. From this point, the deformation increases significantly for a small increment of the load until
the ultimate load is reached. However, in deformation-controlled tests, the deformation can still be
increased further if the load applied on the beam is gradually reduced accordingly with the remaining
capacity of the beam. Figure 5.8 shows schematically this type of response.
Based on the load-displacement (or moment-curvature) relation for static loading obtained from deformation-
controlled tests, the rotation capacity can be defined as the non-elastic rotation, 휃푝푙,푥%. Such rotation
capacity is expressed in terms of the deformation required to reach a certain percentage of the maximum
load along the descending branch of the load-displacement curve. This definition is illustrated for 휃푝푙,95%
in Figure 5.8 as an example.
Fmax
0.95∙Fmax
upl
u
F
ua ub
Figure 5.8 Rotation capacity defined at 95 % of the ultimate load.
The parameters 푢푎 and 푢푏 in Figure 5.8 and Figure 5.9 correspond to the total deformation at a load
(푥%∕100) ⋅ 퐹푚푎푥 on the descending branch of the load-displacement curve, and the elastic deformation
at the chosen load level, respectively.
Let 퐿푒 be defined as the length from the support to the plastic hinge, which for a simply supported beam
loaded at midspan corresponds to half the span, as shown in Figure 5.9. The plastic rotation capacity –
given as the rotation at the support – can therefore be determined as
휃푝푙,푥% = (푢푏,푥% − 푢푎,푥%)
퐿푒
= 푢푝푙,%
퐿푒
(5.11)
42 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	42 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	42 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 62 of 333 --

ua
ub
Le
upl
Figure 5.9 Representation of elastic and plastic deformation measured from experiments.
5.4 Different Methods to Predict Plastic Rotation Capacity
5.4.1 Overview
A brief description of different methods to estimate the plastic rotational capacity of reinforced concrete
beams is presented in this section.
Initially, the methodology suggested in Eurocode 2 (CEN, 2004) to estimate the available rotational
capacity is described. Additionally, the methods proposed in Betonghandboken (1980) and Bk 25 are
presented, according to the information provided in (Johansson and Laine, 2012).
Finally, various empirical expressions available in the literature for determining the equivalent plastic
hinge length, 푙푝, and the maximum concrete strain, 휀푢, at ultimate curvature are treated. These expressions
are mainly based on static tests on simply supported concrete beams subjected to concentrated loading
at midspan. The calculated values of 푙푝 could afterwards be used in Equation (5.10) to determine the
plastic rotation capacity.
5.4.2 Rotation capacity according to Eurocode 2
5.4.2.1 Definition
The definition of plastic rotational capacity, 휃푝푙,푑 , provided by Eurocode 2 (CEN, 2004) has been
formulated for rotation over an inner support in a continuous beam, as illustrated in Figure 5.10, where
the length of rotation is assumed to occur over a length equal to 1.2 times the depth of the support section.
Figure 5.10 Plastic rotational capacity according to Eurocode 2 (CEN, 2004).
An equivalence between the definition by Eurocode 2 and the experimental conditions in this project is
needed. According to Latte (1999), the inner support rotation in a continuous beam is approximately
equal to the rotation at midspan of an equivalent simply supported beam subjected to a concentrated
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 43	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 43	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 43

-- 63 of 333 --

load, with a length corresponding to the distance between zero moments over the support. Figure 5.11
provides with a graphical description of such assumption.
L
Zero moment
q
F
Equivalent beam
Figure 5.11 Equivalence between a continuous beam and a simply supported beam.
Furthermore, the rotation defined in Figure 5.10 corresponds to the summation of the rotation on both
sides of the studied critical section – that is, the total rotation – as given by Equation (5.3); while the
expressions for plastic rotation given by Equations (5.4) and (5.10) are defined for only one side of the
critical section. Hence, by calculating the rotation at midspan of a simply supported beam assuming
that the conditions at the point of load application are equivalent to an inner support, the value of 휃푝푙,푑
according to Eurocode 2 corresponds to twice the size of the rotation at the support, see Figure 5.12.
φ
φ
a
De
formation
, u
θpl,d
θ = θpl,d /2
Figure 5.12 Equivalence between plastic rotation capacity, 휃푝푙,푑 , as defined by Eurocode 2 and support
rotation.
5.4.2.2 Rotational capacity
By a simplified procedure, Eurocode 2 relates the ratio 푥푢∕푑 to the plastic rotational capacity depending
on the concrete class and the reinforcement steel class. The relationship between the ratio 푥푢∕푑 and 휃푝푙,푑 is
shown in Figure 5.13. The noticeable difference between rotational capacities for different reinforcement
classes is due to different ductility properties, as Class C steel exhibits a more ductile behavior and
therefore provides for a larger rotational capacity.
44 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	44 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	44 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 64 of 333 --

x / d
pl [10 -3 rad]
betong-
krossning	avsliten
armering
Klass C
Klass B
Steel
Failure
Concrete
Failure
Class C
Class B
Figure 5.13 Allowable rotation of reinforced concrete sections for different concrete classes, and Class
B and C steel reinforcement. Valid for shear slenderness 휆=3. Modified from (CEN, 2004).
The position along a given curve in Figure 5.13 with respect to its peak signals the failure mode to be
expected, either due to crushing of concrete or to rupture of reinforcement. In the region where steel
failure is critical, the rotation capacity is directly governed by the ductility of the steel; in this case, the
strain capacity of the reinforcement bars is fully utilized. An increasing ratio of 푥푢∕푑 leads to a larger
deformation capacity.
Contrarily, failure due to concrete crushing occurs on the other side of the peak. In this case, the height
of the compressive zone in relation to the internal lever arm is relatively large; crushing of concrete at the
compressed edge will therefore occur for values of steel strain lower than the strain capacity at rupture of
the reinforcement. In this interval, larger values of 푥푢∕푑 result in reduced deformation capacity.
It should be highlighted that the chart in Figure 5.13 is only applicable to shear slenderness 휆 = 3; where
shear slenderness is defined as
휆 = 푙0
푑 (5.12)
Here, 푙0 is the distance from the zero moment section to the point of maximum moment after redistribution.
For different values of shear slenderness, 휃푝푙,푑 is modified by a factor 푘휆 in the following way:
휃∗
푝푙,푑 = 푘휆휃푝푙,푑 (5.13)
where 푘휆 is defined as
푘휆 =
u휆
3 (5.14)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 45	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 45	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 45

-- 65 of 333 --

Furthermore, the ratio of 푥푢∕푑 should be limited to
푥푢∕푑 ≤ 0.45 for classes less or equal to C50/60
푥푢∕푑 ≤ 0.35 for classes higher or equal to C55/67
5.4.3 Betonghandbok-Konstruktion 1980 (ABC method)
Betonghandboken (1980) provides an empirical equation to calculate the plastic rotation capacity on one
side of the critical section of a reinforced concrete beam (Johansson and Laine, 2012). Such rotation
capacity corresponds to the rotation at a load level equivalent to 95 % of the maximum load, similarly to
the case presented in Figure 5.8, and can be determined as
휃푝푙,95% = 퐴 ⋅ 퐵 ⋅ 퐶 ⋅ 10−3 (5.15)
The formulation of Equation (5.15) was introduced in (Öberg, 1980) based on the results collected from
a series of experiments on reinforced concrete beams subjected to concentrated loads for the conditions
described in Figure 5.14.
L/2 L/2
F
L/2 L/2
F	F
F	F
L/4 L/4
L/4 L/4
L
Type A
Type B
Type C
Figure 5.14 Different types of specimen in (Öberg, 1980).
The factor 퐴 takes into account the amount of tensile and compression reinforcement as well as the
amount of transverse reinforcement. When the strength values are taken from the Swedish Concrete
Code, 퐴 can determined as
퐴 = 1 + 0.6휔푣 + 1.7휔®
푠 − 1.4 휔푠
휔푏
(5.16)
46 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	46 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	46 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 66 of 333 --

The parameters 휔푠, 휔®
푠, and 휔푣 correspond to the mechanical ratio of tensile reinforcement, the mechanical
ratio of compression reinforcement, and the mechanical ratio of shear reinforcement, respectively, and
can be determined according to the following equations:
휔푠 = 퐴푠
푏푑 ⋅ 푓푦
푓푐
(5.17)
휔®
푠 = 퐴®
푠
푏푑 ⋅ 푓푦
푓푐
(5.18)
휔푣 = 퐴푣
푏푠 ⋅ 푓푦
푓푐푡
(5.19)
The balanced mechanical reinforcement ratio, 휔푏, can be estimated from Equation (5.20) by letting
휀푐푢 = 3.5 ‰ and 휀푠푦 = 푓푦∕퐸푠.
휔푏 = 0.8휀푐푢
휀푐푢 + 휀푠푦
(5.20)
However, when measured values of material strength are used in the calculation, the following equation
may be used:
퐴 = 1 + 1.3휔푣 + 3휔®
푠 − 5휔푠
but, 0.05 ≤ 퐴 ≤ 2.30 (5.21)
The parameter 퐵 considers the shape of the stress-strain curve of the reinforcement steel and varies
depending on the type and grade of steel. The values of 퐵 can be obtained from Table 5.1. Note that the
nomenclature used in Table 5.1 to classify the reinforcing steel corresponds to an outdated classification
according to the Swedish standards.
Table 5.1 Values for factor B.
Steel type B Max 퐴 ⋅ 퐵
Ks 60, Ks 40, Ss 26, Ss 26S 1.0 1.7
Ks 60S, Ks 40S 1 0.8 1.1
Cold-worked steel with 휀푠푢 ≥ 3 % and 푓푠푢∕푓0.2 ≥ 1.1 0.6  1 − 0.7휀푝∕휀푠푢
 5
1 Use values for Ks 60 and Ks 40 if 휀푠푢 ≥ 8 % and 푓푠푢∕푓0.2 ≥ 1.4.
The factor 퐶 takes into account the position of the plastic hinge in the structure, as well as the type of
load. The expressions to determine 퐶 for a uniformly distributed load, and a plastic hinge located either
over the support or along the span, are given by
퐶푠푢푝 = 10 ⋅ 푙0,푠푢푝∕푑 (5.22)
퐶푓 푖푒푙푑 = 7 ⋅ 푙0,푓 푖푒푙푑 ∕푑 (5.23)
The definition of 푙0,푠푢푝 and 푙0,푓 푖푒푙푑 is shown in Figure 5.15.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 47	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 47	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 47

-- 67 of 333 --

q Plastic hinge
M = 0
l0,sup	L l0,field L/2
Figure 5.15 Definition of 푙0,푠푢푝 and 푙0,푓 푖푒푙푑 depending on the moment diagram.
5.4.4 Bk 25
According to Johansson and Laine (2012), the Swedish Fortifications Agency provides in Bk 25 a method
to estimate the rotational capacity of an impulse-loaded reinforced concrete beam. The beam is assumed
to be subjected to a distributed load with geometry notation as shown in Figure 5.16.
lp lp
θpl 	R
uf
b
As
d 	h
c
L
d = h - c
u pl
θpl

f 2

 L
Figure 5.16 Geometry definition of a simply supported beam, modified from (Johansson and Laine,
2012).
The equivalent plastic hinge, 푙푝, for which a constant curvature is assumed, can be calculated as
푙푝 = 0.5푑 + 0.15퐿 (5.24)
The plastic rotational capacity, 휃푝푙, is directly proportional to 푙푝 as
휃푝푙 = 푙푝
푅 (5.25)
Hence, the total deformation at midspan due to the plastic hinge is given by
푢푓 = 휃푝푙퐿
2 (5.26)
48 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	48 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	48 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 68 of 333 --

The curvature of a cross-section at ultimate moment has previously been defined in Equation (5.1)
as
휑푢 = 1
푅 = 휀푐푢
푥 = 휀푠
푑 − 푥 (5.27)
Note that 휀푠 is the average steel strain over the equivalent plastic length and 휀푐푢 is the value of ultimate
concrete strain.
Consider a concrete beam provided with a bottom layer of reinforcement. Figure 5.17 shows the assumed
distribution of strain and stress over the cross section at ultimate moment.
b
As
x
d 	h
c
εcu
εs d-x
x
fcc
Fs
Mrd
0.8x Fc
d = h - c 	z = d - 0.4x
0.4x
z
Figure 5.17 Geometry definition of a cross-section subjected to an ultimate moment, modified from
(Johansson and Laine, 2012).
By the assumption that tensile reinforcement yields, horizontal equilibrium in Figure 5.17 produces
0.8푏 ⋅ 푥 ⋅ 푓푐 = 퐴푠 ⋅ 푓푦 (5.28)
Equation (5.28) can be solved for the height of the compressive block, 푥. By introducing the reinforcement
ratio parameter, 휌푠, which is defined as
휌푠 = 퐴푠
푏푑 , (5.29)
and considering mechanical reinforcement ratio for tensile reinforcement, 휔푠, previously given as
휔푠 = 퐴푠
푏푑 ⋅ 푓푦
푓푐
; (5.30)
the compressive height, 푥, can therefore be expressed from Equation (5.28) as
푥 = 휌푑
0.8 ⋅ 푓푦
푓푐
= 휔푠푑
0.8 (5.31)
The distance 푑 needs to be calculated to the gravity center of the tensile reinforcement if multiple layers
are present. The change of failure mode from steel rupture to concrete crushing can be stated for a
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 49	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 49	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 49

-- 69 of 333 --

cross-section containing only tensile reinforcement in terms of a critical mechanical reinforcement ratio
as
휔푠,푐푟푖푡 = 0.8 ⋅ 휀푐푢
휀푐푢 + 휀푠푢
(5.32)
If 휔푠 > 휔푠,푐푟푖푡, the concrete beam is theoretically expected to fail due to concrete crushing. The following
expression is obtained when it is assumed that concrete crushing is the decisive failure mode when
combining equations (5.24), (5.25), and (5.28):
휃푝푙,푓 = 푙푝
푅 = 0.8 ⋅ 휀푐푢
휔푠 ⋅ 푑 (0.5푑 + 0.15퐿) = 0.4 ⋅ 휀푐푢
휔푠

1 + 0.3퐿
푑

(5.33)
If rupture of the reinforcing steel is the decisive failure mode, then
휃푝푙,푓 = 푙푝
푅 = 0.8 ⋅ 휀푠푢
푑(0.8 − 휔푠)(0.5푑 + 0.15퐿) = 0.4 ⋅ 휀푠푢
(0.8 − 휔푠)

1 + 0.3퐿
푑

(5.34)
The subscript 푓 in Equations (5.33) and (5.34) stands for field, as the plastic hinge is assumed to take
place along the span of a simply supported beam.
For continuous beams, the rotation capacity at the plastic hinge in the field can be determined as described
before for simply supported beams. However, the definition of plastic hinge length differs for a plastic
hinge located over the support. Instead of using Equation (5.24), the plastic hinge length over the support
can be calculated as
푙푝 = 0.5푑 + 0.1푙0 (5.35)
where 푙0 is the distance from the zero moment section to the point of maximum moment. If 푀푠 and
푀푓 are the moment over the support and maximum moment in the field, respectively, then 푙0 can be
estimated as
푙0 = 푀푠
푉푠
(5.36)
Therefore, when concrete crushing is the decisive failure mode, the rotational capacity over the support
is given by
휃푝푙,푠 = 푙푝
푅 = 0.8 ⋅ 휀푐푢
휔푠 ⋅ 푑 (0.5푑 + 0.1푙0) = 0.4 ⋅ 휀푐푢
휔푠
0
1 + 0.2푙0
푑
1
(5.37)
When rupture of the reinforcing steel is the governing failure mode, then
휃푝푙,푠 = 푙푝
푅 = 0.8 ⋅ 휀푠푢
푑(0.8 − 휔푠)(0.5푑 + 0.1푙0) = 0.4 ⋅ 휀푠푢
(0.8 − 휔푠)
0
1 + 0.2푙0
푑
1
(5.38)
50 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	50 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	50 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 70 of 333 --

5.4.5 Plastic rotation capacity based on equivalent plastic hinge length
5.4.5.1 Mattock
Mattock (1965) investigated the rotational capacity of hinging regions in reinforced concrete members, as
it occurs at an inner support in a continuous beam. In order to simulate the conditions at a section adjacent
to a support in a continuous beam, a number of single-span beams were subjected to a concentrated load
at midspan. The thirty-seven tested beams possessed different properties regarding concrete strength,
reinforcement amount, and geometry.
The information collected from the tests indicates that the distribution of plasticity from the section of
maximum moment depends mainly on the ratio 푙0∕푑, and on the degree of longitudinal reinforcement in
the cross section. For a simply supported beam subjected to a point load at midspan, 푙0 is given by
푙0 = 퐿
2 (5.39)
Based on this information, a method to estimate the rotational capacity of a hinging region was proposed.
An expression to approximate the equivalent plastic hinge was presented as
푙푝 = 0.5푑 + 0.5푑
H
1.14
u푙0
푑 − 1
I
⋅
H
1 − 휔푠 − 휔®
푠
휔푏
⋅
u 푑
412
I
(5.40)
where 푙0 and 푑 should be given in millimeter [mm]. The parameters 휔푠 and 휔®
푠 can be calculated according
to Equations (5.17) and (5.18), while the mechanical ratio of balanced reinforcement, 휔푏, is given by
Equation (5.20).
Mattock showed that the maximum concrete strain was inversely proportional to the distance between the
points of maximum and zero moments. For similar conditions as in his experiments, Mattock proposed
that the maximum concrete compressive strain be calculated as
휀푐푢 = 0.003 + 12.7
푙0
(5.41)
where 푙0 is given in millimeter [mm]. The original expressions in imperial units as given in (Mattock,
1965) can be found in Appendix A.
It should be highlighted that all specimens in (Mattock, 1965) were provided with stirrups with different
values of spacing. Moreover, Mattock warns that Equation (5.41) is not dimensionally consistent, and
that the equation should be further refined. If not confining reinforcement is present in the cross section,
Equation (5.41) is reduced to the lower limit, 휀푐푢 = 3 ‰.
5.4.5.2 Corley
Based on a series of experiments on simply supported beams of different dimensions loaded with a
concentrated load at midspan, Corley (1966) proposed an equation to determine the equivalent plastic
hinge length and the maximum concrete strain as
푙푝 = 0.5푑 + 1.008
√
푑
0푙0
푑
1
(5.42)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 51	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 51	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 51

-- 71 of 333 --

휀푐푢 = 0.003 + 0.02
0 푏
푙0
1
+
0휌®
푤 ⋅ 푓푦
137.9
12
(5.43)
where 푙0 and 푑 should be given in millimeter [mm] and 푓푦 in megapascal [MPa]. The original expressions,
which have been converted into SI-units, are provided in Appendix A. The parameter 휌®
푤 is defined as the
ratio of the volume of confining reinforcement (one stirrup plus longitudinal compressive reinforcement)
to the volume of the concrete core (area enclosed by one stirrup multiplied by the stirrup spacing), while
푏 corresponds to the width of the beam. Equation (5.43) represents the ultimate concrete strain under
the conditions of confinement and binding described in (Corley, 1966), in which all specimens were
provided with transversal reinforcement. For small amount of confining reinforcement and for constant
moment, Corley recommends using a value 휀푐푢 = 3 ‰, which is equivalent to the value used for ultimate
strength calculations in the ACI Building Code (1963).
5.4.5.3 Mattock’s discussion on Corley’s work
As described in (Corley, 1967), Mattock suggested a simpler version of Equations (5.42) and (5.43)
as
푙푝 = 0.5푑 + 0.05푙0 (5.44)
휀푐푢 = 0.003 + 0.02
0 푏
푙0
1
+ 0.2휌®
푤 (5.45)
The value of 휀푐푢 determined with Equation (5.45) would become more conservative for high values of 휌®
푤.
Mattock disregarded the spalling of concrete at high strains and adopted the compressive stress block
parameters for concrete provided by ACI Building Code (1963).
Mattock discussed that Corley (1966) based the strength calculations on the yield strength of reinforce-
ment, disregarding the increase in strength due to strain hardening effects. However, the position of
the neutral axis at failure, 푥푢, calculated based on the yield strength of reinforcement is closer to the
compressive edge than the actual position in a beam in which strain hardening of reinforcement is
occurring, as the tensile reinforcement develops a larger force for the latter condition. Therefore, an
underestimation of the value 푥푢 will lead to an overestimation of ultimate curvature, as curvature and
rotation are inversely proportional.
Considering that the steel may be in the strain hardening stage at large ultimate curvatures; the increase in
tensile force due to this phenomenon should be factored in during the calculation of the neutral axis depth.
Mattock proposed using Equation (5.46) to calculate a modified value of neutral axis depth, 푥®
푢, to account
for strain hardening effect when 푥푢 is determined based on yield strength of the reinforcement.
푥®
푢 = 푥푢
0.5 + 휔푠 − 휔®
푠
(5.46)
The ultimate curvature could then be calculated by inserting Equation (5.46) into Equation (5.6) as
휑푢 = 휀푐푢
푥®
푢
(5.47)
52 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	52 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	52 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 72 of 333 --

5.4.5.4 Sawyer
Equation (5.48) was proposed by Sawyer in 1964 (Park and Paulay, 1975) to determine the equivalent
plastic hinge length based on the assumptions that the maximum moment in the member corresponds
to the ultimate moment, 푀푢; that the ratio between the yielding moment and the ultimate moment is
equal to 0.85; and that the yielding region is extended 푑∕4 past the section in witch the bending moment
equals the yielding moment.
푙푝 = 0.25푑 + 0.075푙0 (5.48)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 53	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 53	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 53

-- 73 of 333 --



-- 74 of 333 --

6 Influences on Plastic Rotational Capacity
6.1 Introduction
This chapter explores the effects of different material and geometrical parameters – including, among
others, ductility of reinforcing steel, concrete strength, bond strength, and cross-sectional size – on the
plastic rotation capacity of reinforced concrete beams. The information is presented as a brief description
of different results obtained in different research works.
Additionally, the influence of the loading conditions on the rotational capacity is treated. The chapter
ends with a discussion on the residual load-carrying and deformation capacity of dynamically loaded
reinforced concrete beams made out of both normal strength concrete and high strength concrete.
6.2 Influence of Reinforcement Properties
6.2.1 Ductility
The influence of the properties of reinforcing steel in the plastic rotation capacity of reinforced concrete
beams has been proved to be significant (Latte, 1999). The choice of steel type can play an important
role regarding the magnitude of the curvature at failure as well as the extension of the plastic hinge
length.
The ductility of the reinforcement bars, therefore, can serve as a good indication of the rotational capacity,
especially if the member fails due to rupture of the reinforcement. According to CEB Bulletin No. 242
(CEB-FIP, 1998), the ductility can be described by two parameters; namely: ratio of tensile strength to
yield stress, 푓푡∕푓푦; and ultimate steel strain, 휀푠푢. Both parameters are important when determining the
performance of the reinforcement bars in relation to the plastic rotational capacity of the structure.
Consider Figure 6.1, which is valid for a single-span beam failing due to steel rupture. Two important
observations can be made. First, the length of the plastic region decreases with decreasing 푓푡∕푓푦 – hence,
with increasing values of yield stress – if constant values of ultimate strength, 푓푡, and ultimate strain,
휀푠푢, are assumed, as shown in Figure 6.1a. Contrarily, the maximum curvature at failure and ultimate
moment are almost independent of the ratio 푓푡∕푓푦.
Furthermore, as stated in CEB Bulletin No. 242 (CEB-FIP, 1998), the ratio of the mean steel strain to
the steel strain at a crack location, 휀푠푚∕휀푠푟, decreases with a reduction in 푓푡∕푓푦 due to a decrease in the
penetration of yielding in the vicinity of the crack. These effects, therefore, contribute to the reduction in
plastic rotational capacity if the ratio 푓푡∕푓푦 decreases.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 55	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 55	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 55

-- 75 of 333 --

(a) Moment diagram, 휀푠푢 and 푓푡 constant. (b) Curvature diagram, 푓푡∕푓푦 constant. The
parameter 퐴푔 corresponds to the ultimate steel
strain, 휀푠푢.
Figure 6.1 Influence of ductility on the length of the plastic hinge and ultimate curvature given the
same ratio of reinforcement, modified from (Langer and Eligehausen, 1987).
On the other hand, when 푓푡∕푓푦 is kept constant, the length of the plastic hinge length is observed to be
constant for different values of 휀푠푢. However, the ultimate curvature does exhibit an increase for a larger
value of 휀푠푢, resulting in an increase in plastic rotational capacity, as illustrated in Figure 6.1b.
However, the influence of both parameters is dependant on the amount of reinforcement steel. For lower
reinforcement ratios, where rupture of steel is the failure mechanism, both parameters have a direct
influence. For larger reinforcement amounts which lead to concrete crushing the length of the plastic
hinge, and hence the plastic rotational capacity, increases with an increasing ratio 푓푡∕푓푦. However, 휀푠푢 is
not as relevant since it is not fully utilized in this case; although it is important for the definition of the
transition point between the two failure modes.
It should be noticed, however, that the influence of both parameters is difficult to separate. In CEB
Bulletin No. 242 (CEB-FIP, 1998) a new parameter to judge the effect of steel ductility on deformation
capacity, which combines 푓푡∕푓푦 and 휀푠푢, has been introduced. The new parameter, denoted 푝, was
determined through an extensive numerical analysis considering a reference beam tested during an
experimental study conducted in Turin (Bosco and Debernardi, 1992). The properties of the reference
beams are: cross section 30 × 60 cm, span length 6 m, 2 longitudinal reinforcement bars 휙12, and
푥∕푑 = 10 at failure. The numerical analysis showed that for cold-worked steel the plastic rotation is
proportional to the parameter 푝 as
휃푝푙 = 1.3 ⋅ 푝 = 1.3 ⋅ 휀푠푢0.73 ⋅
0 푓푡
푓푦
− 1
10.92
(6.1)
56 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	56 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	56 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 76 of 333 --

which only depends on steel characteristics. According to Equation (6.1), two beams reinforced with
different steel types, but otherwise identical properties, will exhibit a plastic rotation capacity proportional
to the parameter 푝.
6.2.2 Hot-worked and cold-worked steel
The influence of heat-treated and cold-worked steel has been briefly described in CEB Bulletin No. 242
(CEB-FIP, 1998). As discussed in Section 2.3, the ratio 푓푡∕푓푦 and the ultimate strain, 휀푠푢, exhibit larger
values for heat-treated bars, which ultimately favors the plastic rotational capacity if hot-worked steel is
used to reinforce a given concrete beam. Furthermore, hot-treated reinforcing steel can be expected to
have larger plastic rotational capacity than cold-worked steel given same ratio 푓푡∕푓푦 and 휀푠푢. One of
the main reason for this phenomenon is the plastic plateau present in the stress-strain relationship of
hot-rolled steel, as illustrated in Figure 2.4.
CEB Bulletin No. 242 introduces the parameter 휀푠ℎ, which is equivalent to the length (unitless) of the
plastic plateau in the stress-strain diagram, to take into account the increment of rotation capacity due to
the post-yielding plastic plateau. The effects of 휀푠ℎ can be considered when calculating 푝 as
푝 =  휀푠푢 + 3휀푠ℎ
0.75 ⋅
0 푓푡
푓푦
− 1
10.9
(6.2)
The characteristics of the stress-strain relationship in the post-yield range, which depend on the steel type,
also have a significant influence on the deformation capacity of concrete beams. This can be explained
considering the ratio between the mean steel strain and the steel strain in the crack, 휀푠푚∕휀푠푟. For a tension
specimen reinforced with low ductility cold-worked steel, the ratio of average strain to strain in the crack
shows a small value at failure, whereas for specimens reinforced with high-ductility heat-treated steel,
the ratio 휀푠푚∕휀푠푟 decreases to a value similar to that observed for specimens reinforced with cold-worked
steel, but increases gradually in the hardening range.
6.3 Concrete Influence on Rotational Capacity
6.3.1 Concrete strength
In (Fransson, 1997) and (Magnusson, 2007) a discussion of the effect of concrete compressive strength,
푓푐 , on rotation capacity can be found. The authors concluded that the rotational capacity is almost
independent of the concrete strength provided that the mechanical reinforcement ratio, 휔푠, is constant.
This behavior can be explained by the fact that the distance to the neutral axis from the compressed
edge decreases as the concrete strength is increased, and therefore increases the internal lever arm,
which effectively compensates for the more brittle nature of higher strength concrete. On the other hand,
the plastic rotation is significantly influenced by the variation of 휔푠 in such a way that the maximum
deformation increases for decreasing values of 휔푠.
However, the compensating effect of increased lever arm in high strength concrete beams is assumed to be
beneficial only when concrete crushing is the limiting factor. High strength concrete when reinforcement
rupture is limiting would provide with a detrimental effect to the plastic rotational capacity, since the
height of the compressive zone would decrease, resulting in an increase of tensile steel strain.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 57	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 57	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 57

-- 77 of 333 --

Lopez and Bernardo (2003) studied the influence of concrete strength on plastic rotation capacity on
two groups of concrete beams with the same dimensions and mean tensile reinforcement ratios, 휌푠,
of 2.13 % and 2.78 %, respectively. Two values of concrete strength were considered for each group;
namely, 64 MPa and 84 MPa. The beams had a free span of 2.8 m and were subjected to two point loads
applied approximately at the third-points. It was observed that the plastic rotation tended to increase with
increasing concrete strength for the same percentage of reinforcement. Observe that a larger value of 푓푐
results in a smaller value of 휔푠 if 휌푠 is kept constant. Additionally, the authors reported a reduction in
the rotational capacity for increasing longitudinal reinforcement amount and constant concrete strength.
It should be noted that in (Lopez and Bernardo, 2003) it is not stated whether the section is limited by
concrete crushing or steel rupture. However, the ratio 푥∕푑 at ultimate limit state for a beam section
with 휌푠 = 2.13 % (calculated according to the mechanical and geometrical properties of the specimens
provided in (Lopez and Bernardo, 2003)) takes an approximate value of 0.19, which, by correlation with
Figure 5.13, indicates that concrete crushing was the dominant failure mode.
6.3.2 Ultimate strain and compression zone confinement
The ultimate concrete strain, 휀푐푢, and strain at maximum stress, 휀푐2, in Figure 2.8 also have an influence on
the rotational capacity of a structure. As described in (Plem, 1981), the values 휀푐2 = 2 ‰ and 휀푐푢 = 3.5 ‰,
which are currently recommended by Eurocode 2 (CEN, 2004), are chosen rather conservatively. Even
though the chosen 휀푐2 and 휀푐푢 have little influence when calculating the ultimate moment, their importance
is more profound regarding plastic rotational capacity for the case when the element fails due to concrete
crushing. Indeed, a larger value of 휀푐푢 would represent an increase in ultimate curvature, 휑푢, and
consequently in the rotation capacity, when failure is reached due to concrete crushing. Furthermore,
the parameter 휀푐푢 is important to determine the transition point between steel rupture and concrete
failure.
The behavior of the concrete in compression is significantly influenced by confinement action. Confine-
ment is normally introduced by stirrups enclosing the concrete in compression. Uni-axial compression
tests show that the use of stirrups affect minimally the compressive strength, but influences significantly
the ultimate concrete strain, 휀푐푢 (CEB-FIP, 1998).
In CEB Bulletin No. 242, it is stated that providing confinement is a very effective strategy to increase the
plastic rotational capacity when concrete compression governs the failure of the member. Furthermore,
decreasing the spacing between stirrups would enhance the confining action and, therefore, increase the
plastic deformation capacity. On the opposite end, little improvement of the rotational capacity can be
expected if stirrups are placed in an element where rupture of the tensile steel is the dominant failure
mode.
6.3.3 Influence of bond strength
Among all factors which influence rotational capacity, the bond behavior between the reinforcement and
the concrete is one of the most complex, since it is itself dependent on a broad range of parameters, both
of the materials and the member geometry, which are linked together. Additionally, the large scatter
of combined actions which can be observed in bond tests makes it difficult to draw direct conclusions
regarding the influence of each individual parameter (Latte, 1999). However, it has been experimentally
found that a strong bond between steel and concrete results in an increase of tension stiffening, leading
to a reduction of crack width, and thus a decrease in rotation capacity (CEB-FIP, 1998).
58 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	58 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	58 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 78 of 333 --

The effect of bond between reinforcement bars and concrete on plastic rotation is illustrated in Figure 6.2,
according to simulations performed by Langer and Eligehausen (1987). A significant decrease of plastic
rotational capacity can be observed when perfect bond is considered in the simulations in comparison
with the rotational capacity obtained when no bond is assumed. Considering this fact, concrete elements
reinforced with ribbed bars will exhibit a different performance compared to a member reinforced with
plain bars, even if the ductility of both types of bars is the same.
Figure 6.2 Bond influence on the plastic rotational capacity (Langer and Eligehausen, 1987).
Similar results are also reported in (CEB-FIP, 1998) from investigations carried out in 1990 in the
University of Pavia. In this research, a comparison of the plastic rotational capacity of one-way slab
specimens subjected to two different loading conditions (three-point loading and five-point loading)
and reinforced with reinforcement bars with different ductility and surface properties (plain and ribbed
reinforcement meshes) was performed. It was found that the plastic deformation capacity of the slabs
containing the plain reinforcement was higher due to an increased transmission length in case of low
bond, meaning that more steel would yield in the vicinity of the crack before full interaction between
concrete and reinforcement was reached.
However, it should be observed that the crack distance and number of cracks that develop in the plastic
hinge region, which are directly influenced by the bond strength, also affect notably the rotation capacity
of the member.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 59	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 59	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 59

-- 79 of 333 --

6.4 Influence of Size
A summary of various investigations regarding the effects of beam depth and its influence on rotation
capacity has been performed in (Fransson, 1997). The author explains that Bosco and Debernardi (1992)
carried out a series of experiments on 44 simply supported reinforced concrete beams with heights
0.2 m, 0.4 m, and 0.6 m, which were subjected to a concentrated load acting at the midspan position. The
amount of reinforcement was varied between 휌푠 = 0.13 % and 휌푠 = 1.7 %; while the beam slenderness,
퐿∕ℎ = 10, and the ratio of effective depth to total depth, 푑∕ℎ = 0.9, were kept constant. It was concluded
from the experimental tests that the plastic rotation capacity decreases as the beam height increases, as
illustrated in Figure 6.3 for different specimens with 휌푠 = 1.13 %.
Figure 6.3 Experimental plastic rotation vs beam depth in Bosco and Debernardi’s research (Fransson,
1997). The dashed lines refer to ultimate rotation, while the solid lines correspond to values
at maximum moment.
Bigaj and Walraven (1993) found a similar relation for members that fail due to rupture of the steel
reinforcement bars as well as for members failing due to crushing of concrete. The beams were made out
of normal strength concrete, with reinforcement ratios ranging from 0.28 % to 1.12 %. They observed
that beams with smaller section height show a much higher plastic rotation capacity than members with
the same characteristic but larger dimensions.
Carpinteri et al. (2009) described a numerical algorithm based on non-linear fracture mechanics models
to investigate the effect of the mechanical and geometrical parameters on the rotational capacity of RC
beams. The authors made an extensive comparison with the experimental results for the beams tested
by Bosco and Debernardi (1992) and with the methodology presented in Eurocode 2, as described in
Section 5.4.2. They concluded that, regardless of the reinforcement ratio, the behavior of the beam
becomes more brittle as the beam height increases. It was observed that beams with a 0.2 m depth have
rotational capacity greater than that suggested by Eurocode 2; while for beam depths 0.6 m, and 0.8 m
the guidelines provided by Eurocode 2 appear to overestimate the rotational capacity. However, it is
worth highlighting that Carpinteri et al. (2009) used the reference curve for steel class C and concrete
class less than or equal to 50 MPa provided by Eurocode 2 (see Figure 5.13) as the basis of comparison,
without apparent consideration of the shear slenderness, 휆.
60 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	60 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	60 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 80 of 333 --

6.5 Influence of Load Application
6.5.1 Introduction
Different studies have shown that the type of loading has a significant effect on the plastic rotation capacity
and on the length of the plastic hinge. Three different loading situations are commonly discussed in
research papers, as shown in Figure 6.4; namely: (a) concentrated load at midspan or three-point loading,
which is equivalent to a linear moment distribution; (b) four-point loading, constant moment between
two loads; and (c) uniformly distributed loading, which exhibits a nonlinear moment distribution.
(a)
φy 	φ
L
Mu
(b) 	(c)
My
ly ly ly
L/2 	L/3
(a) Three-point loading.	(a)
φy 	φ
L
Mu
(b) 	(c)
My
ly ly ly
L/2 	L/3
 (b) Four-point loading.	(a)
φy 	φ
L
Mu
(b) 	(c)
My
ly ly ly
L/2 	L/3
 (c) Uniform load.
Figure 6.4 Moment diagram along a simply supported beam for three different static load cases.
The shape of the moment diagram and the length of the yielding region, 푙푦, as shown in Figure 6.4, provides
a good explanation for the different values of available plastic rotation. For the same reinforcement
amount, the yielding length in a beam subjected to concentrated load is less than the yielding length of a
beam under four-point or uniformly distributed loading, and therefore exhibits a smaller rotation. On
the other hand, beams subjected to uniform load and four-point loading show a considerable increase
of plastic hinge length and, therefore, an increased rotational capacity of such loaded structures can be
expected.
6.5.2 Loading conditions and reinforcement ratio
The influence of loading conditions on beams with same reinforcement ratio was investigated in (Kheyrod-
din and Naderpour, 2007). A series of numerical analyses on 15 simply supported beams with different
amount of tension reinforcement were performed for the three different load conditions presented in
Figure 6.4. For a constant amount of reinforcement with mechanical reinforcement ratio 휔 ≤ 0.38, and
similar geometry, the largest available plastic hinge rotation was observed for beams under uniformly
distributed load. The plastic rotation decreased as the loading type was changed to four-point loading,
and showed a minimum value for a concentrated load applied at midspan.
However, it was also found that for values of 휔 ≥ 0.38, the plastic rotation capacity for four-point
loaded beams was slightly smaller than the corresponding values obtained for beams loaded with a
concentrated load at midspan. Similar results were obtained by Ko et al. (2001), who conducted tests
on 36 simply supported high-strength concrete beams with different values of compressive strength,
different reinforcement ratios, and two different loading types. Experiments showed that the ductility
tends to be larger for the beams subjected to concentrated load than for those under four-point load for
specimens with 휔 ≥ 0.54.
Kheyroddin and Naderpour (2007) discuss that comparable conclusions were drawn by Bosco and
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 61	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 61	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 61

-- 81 of 333 --

Debernardi (1992), where the plastic hinge rotation of lightly reinforced beams subjected to three
concentrated loads applied symmetrically with respect to midspan was higher than that of beams subjected
to a concentrated load at midspan, while the plastic rotation tended to be higher for midspan-loaded
beams for heavy reinforcement ratios.
It is concluded in (Kheyroddin and Naderpour, 2007) that the plastic rotation under four-point loading is
dependent on the length of constant moment zone – that is, the distance between the two loads – and the
localization of the plastic zone and the crushing of concrete, which takes place within a narrow area.
The variation of curvature along half the span of a beam with 휔 = 0.412 subjected to different types of
loading is presented in Figure 6.5. Even though the yielding length for the case with four-point loading is
larger than for the other two load cases, the localization of the plastic zone and the crushing of concrete
lead to smaller values of 휃푝 for beams under four-point loading compared to the plastic capacity of beams
subjected to concentrated loads.
Curvature
, φ [rad/mm]
Distance from left support [mm]
Four-point
loading
Uniform
load
Three-point
loading
Figure 6.5 Effect of loading type on curvature of beams with 휔 = 0.412, modified from (Kheyroddin
and Naderpour, 2007).
6.5.3 Static and dynamic loading
A reinforced concrete beam which is subjected to a time-dependent load generally exhibits a stiffer
response with increased loading rate (Costovos et al., 2010). The stiffer response due to impulse loading
can be explained due strain rate effect, as described in Section 3.3, which lead to a higher yield stress of
reinforcement steel and higher concrete strength.
Investigations carried out by Miyamoto et al. (2008) show that with an increased loading rate also comes
a higher maximum load which the structure can endure, albeit with a reduction in its deformability, see
Figure 6.6. Furthermore, it was concluded that the total energy absorption, defined as the area under the
load vs mid-span deflection curve also increased with increased loading rate.
62 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	62 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	62 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 82 of 333 --

Figure 6.6 Impact force vs midspan deflection for different loading rates (Miyamoto et al., 2008).
Similar results were found in (Adhikary et al., 2012), where a series of tests on simply supported
RC beams with 150 mm × 250 mm cross section and 1400 mm free span subjected to varying rates
of concentrated loading were conducted. The amount of tensile reinforcement in all specimens was
휌푠 = 2.4 %, while only part of the test samples were provided with shear reinforcement. Due to the lack
of transverse reinforcement, the theoretical failure mode under static loading for some specimens was
shear failure. Four different rates of loading were tested, namely: static, low (1 s), medium (100 ms), and
high (20 ms). For beams designed to fail in bending, it was observed that the load resistance increased
by 7 %, 11 % and 15 % for low, medium, and high loading rates, respectively, compared to the static case.
Conclusions were similar to what was reported in (Miyamoto et al., 2008) in that beams subjected to an
increased load rate exhibit higher energy absorption but at a cost of the deformability of the structure.
Additionally, it was found that transverse reinforcement had a significant contribution by confining the
core concrete; therefore, specimens having more transverse reinforcements were capable to absorb more
energy.
6.6 Residual Capacity in Dynamically Loaded RC Beams
6.6.1 Introduction
Various experiments have been conducted to assess the residual capacity of concrete beams after the
application of an impact load. However, such studies mainly focus on determining the influence of the
impact loading on the peak load capacity and stiffness of the beam, rather than on the remaining plastic
rotation capacity. Some of these research works are discussed in this section, including the conclusions
made by the respective authors regarding ultimate load capacity and stiffness.
6.6.2 Residual capacity on normal strength concrete
Adhikary et al. (2015) conducted a series of experiments similar to the experiments carried out in this
thesis work. Several reinforced concrete beams were tested under free-falling impact loading from various
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 63	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 63	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 63

-- 83 of 333 --

drop heights ranging from 0.15 m to 1.20 m. Such beams were subsequently subjected to static loading
in order to study the residual response. The behavior of the impact-damaged beams were compared to
the behavior of undamaged beams subjected to static loading only.
However, only one test for a given type of specimens and at a certain drop-height was carried out, whereas
in the present studies different tests for the same conditions are conducted.
It was observed that, for low impact energy, the post-impact behavior of the beams show virtually the
same stiffness and slightly decreased load resistance as compared to the behavior of undamaged beams.
However, as the drop-height increased, the residual stiffness and the load resistance of the statically
loaded beams decreased notably, see Figure 6.7. This behavior was noticed for both shear failure as well
as for flexural failure. The reduction in stiffness and load capacity can be explained due to the appearance
of several flexural and shear cracks and the decrease in the cross-sectional area due to crushing of top
concrete at impact.
Additionally, for beams with identical conditions, but with a higher amount of transverse reinforcement,
the degradation on stiffness and resistance was significantly less pronounced. Figure 6.7 illustrates the
load-midspan deflection curves for two different beam types with the same geometry with and without
transverse reinforcement tested by (Adhikary et al., 2015), where a better performance due to higher
amount of shear reinforcement can be observed after impact.
(a) Specimens without stirrups. (b) Specimens with stirrups.
Figure 6.7 Static load against mid-span deflection of undamaged and impact-damaged beams for
various drop heights (Adhikary et al., 2015).
Comparing the maximum displacement for undamaged beams loaded statically to failure with the
maximum displacement of beams previously subjected to a drop-weight impact in Figure 6.7 evidences
that a portion of the plastic deformation capacity is exhausted during impact loading. A clear relationship
between the residual peak strength and the drop height can also be observed.
An interesting observation was the change of failure mode for one group of specimens with the same
amount of reinforcement and same geometry after being subjected to impact loading, as shown in
64 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	64 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	64 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 84 of 333 --

Figure 6.8. The undamaged specimen exhibited a shear failure mode and a low deformation capacity.
However, the impact-damaged beams failed in bending and the measured values of ultimate midspan
deflection was significantly larger. Additionally, the stiffness and load capacity of the specimens did
not show a significant reduction due to impact loading. Possible explanation for the change in failure
mode is the formation of flexural cracks during impact and the similarity in shear and moment capacity
(푉푑 = 67.8 kN and 푀푑 = 70.4 kN) for this group of specimens, which implies that a small reduction in
moment capacity makes bending the dominant action.
Figure 6.8 Change in failure mode after impact loading (Adhikary et al., 2015).
6.6.3 Residual capacity on high strength concrete
Some authors have focused their effort into studying the post-impact capacity of beams made out of
high-strength concrete. Magnusson (2007), for instance, investigated the residual strength of reinforced
concrete beams with 140 MPa and 200 MPa compressive strength, with and without steel fibers. The
beams were subjected to air-blast loading. It was noticed that the residual load carrying capacity tended
to reach the descending branch of the load-deflection curve of the statically tested undamaged beams,
albeit with a decreased stiffness, see Figure 6.9. Additionally, the results showed that the reduction of
the load-carrying capacity was smaller for fiber-reinforced concrete beams.
Fujikake et al. (2006) tested a number of simply-supported beams with an I-shaped cross section made out
of Reactive Powder Concrete (RPC) under drop-weight impact. RPC, reinforced with short steel fibers, is
characterized by an ultra-high strength of over 200 MPa and high fracture toughness. The I beams had a
cross section 200 mm high and 150 mm wide, and a free span of 1200 mm long. The reinforcement ratio
was 휌푠 = 2.6 %. Even though the beams were not provided with shear reinforcement, all specimens were
observed to fail under bending mechanism. Some beams were loaded statically only, though the loading
was finished when the midspan deflection reached 40 mm. The rest of the specimens were subjected to
a drop hammer impact and subsequently brought to failure under a deformation-controlled static load
applied at midspan. Figure 6.10 illustrates the load-deformation curves of two specimens subjected to
hammer impact from two different heights. The results showed that the residual load-midspan deflection
curve tended to meet the curve obtained for an equivalent virgin specimen under static loading, and not
visible reduction of stiffness was observed. This suggests that the damage due to impact loading on
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 65	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 65	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 65

-- 85 of 333 --

RPC beams can be directly related to maximum deformation response at impact. Then, the maximum
deformation can be used as an index for evaluating the overall flexural damage.
(a) Specimens without fibers. (b) Specimens with fibers.
Figure 6.9 Static and residual tests on 140 MPa concrete beams without (B140) and with (B140F) steel
fibers (Magnusson, 2007).
(a) Drop height = 0.8 m. (b) Drop height = 1.6 m.
Figure 6.10 Load-midspan relations obtained in impact loading test and post-impact load carrying ca-
pacity test of RPC I-beams. Comparison with static flexural tests on undamaged specimens
(Fujikake et al., 2006).
Yoo et al. (2017) also carried out a series of drop tests on simply supported Ultra-High Performance
concrete (UHPC) beams. The impact load was applied at midspan by dropping a hammer with a mass
of 510 kg from two different drop heights of 0.9 and 1.15 m. The specimens were classified in three
series: specimens without fibers, specimens with smooth steel fibers, and specimens with twisted steel
fibers. In accordance with the findings described in (Fujikake et al., 2006), it was noticed that the
drop-weight impact did not cause a significant change in the stiffness of the statically reloaded beams,
66 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	66 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	66 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 86 of 333 --

and the overall flexural damage corresponded only to a right-shift in the moment-curvature relationship.
The authors concluded that the residual capacity of UHPC beams can be simply estimated if the static
flexural response and the maximum deflection due to impact are known, without performing residual
tests. In that sense, the residual capacity could be estimated by finding the value of moment (or load) on
the static moment-curvature (or load-deflection) relation which corresponds to the maximum curvature
(or maximum deflection) due to impact loading.
Yoo et al. (2017) found that beams with steel fiber exhibited a much higher residual stiffness and residual
load capacity than those without fibers. In contrast, fiber-reinforced beams showed a significantly lower
residual deformation capacity - defined as the curvature corresponding to rupture of a reinforcement
bar - than the beams without fibers, see Figure 6.11. This behavior can be explained due to the crack
localization phenomenon observed in UHPC beams with steel fibers; that is, only one or two cracks,
where the fibers have been pulled out, opened up considerably more than the others; therefore, the
deformation in the steel bars is localized at the point of crack localization. Conversely, the beams without
steel fibers experienced several cracks with large opening and thus the steel strain was dispersed along
the length of the beam rather than being localized. This observation differs with the results from static
tests on undamaged fiber-reinforced concrete beams reported in (Magnusson, 2007), where it is stated
that the ductility increases notably for beams reinforced with steel fibers.
(a) Drop height = 0.9 m. (b) Drop height = 1.15 m.
Figure 6.11 Comparison of load-deflection relations after impact damage for specimens without fiber
(UH-N), specimens with smooth steel fiber (UH-SX), and specimens with twisted steel
fibers (UH-TX) (Yoo et al., 2017).
A comparison of the response of specimens with smooth steel fibers before and after impact loading for
two different drop-heights is shown in Figure 6.12, as described in (Yoo et al., 2017). It can be seen that
the initial stiffness of the UHPC beams was virtually not affected by the impact damage. Moreover, the
residual moment-curvature relationships display a similar response to those of the undamaged specimens.
The authors attribute this results to the fiber bridging capacity after cracking provided by the steel fibers,
which leads to a strain-hardening response.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 67	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 67	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 67

-- 87 of 333 --

Figure 6.12 Comparison of moment-curvature curves before and after impact damage for specimens
with smooth steel fibers (Yoo et al., 2017). (a) Drop height = 0.9 m (b) Drop height =
1.15 m.
68 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	68 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	68 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 88 of 333 --

7 Experimental Procedure
7.1 General Description
A total of 18 reinforced concrete beams were cast and tested under different loading conditions in order to,
among others, study the impact behavior of the specimens and determine how plastic rotational capacity
is influenced by impact loading. The concrete specimens were equally divided into three series of six
beams each, namely: Series-1, Series-2, and Series-3. Each series was subjected to a certain loading
condition and testing procedure.
The specimens of Series-1 were initially tested dynamically by releasing a drop-weight of 10.1 kg
from a height ℎ = 2.5 m. The specimens of Series-2 were also tested dynamically by releasing the
same drop-weight from a height ℎ = 5.0 m. Thereafter, the dynamically loaded test specimens of
Series-1 and Series-2 were tested statically under three-point loading in order to determine the residual
plastic rotational capacity. The specimens of Series-3 were only subjected to static loading by means of
three-point loading in order to determine the plastic rotational capacity of undamaged beams.
All tests were recorded using a camera positioned in front of the test specimens. During the impact-
loading tests, a high-speed camera which is able to record at a frame-rate of 5000 fps was used. On the
other hand, a set of cameras with a frame-rate of 0.5 fps was used during the static trials of undamaged
and damaged beams in order to decrease the amount of data stored. The information recorded was
subsequently processed using digital image correlation (DIC).
7.2 Test Specimens
7.2.1 Geometry of the specimens
As shown in Figure 7.1, the beams have a cross-sectional area of 100 × 100 mm and a total length of
1180 mm. The specimens were provided with four longitudinal reinforcement ribbed bars with a nominal
diameter of 6.0 mm and steel class K500C-T. No transversal reinforcement was used.
The distance from the center of the bars to the concrete surface was 20 mm. However, no reinforcement
bar spacers were used during assembling or casting of the beams to keep the bars in place as the length
was considered relatively short. As a result, deviations with respect to the nominal distance of 20 mm
may have occurred in some of the specimens, this is addressed further in Section 9.6
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 69	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 69	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 69

-- 89 of 333 --

100
100
20
20
4ϕ6
1180
[mm]
Figure 7.1 Geometry of the concrete beams.
7.2.2 Beam classification
The reinforced concrete beams were cast from two concrete batches of the same proportions. The casting
procedure was completed during one day under similar conditions. The specimens were kept in their
molds and covered with a plastic foil during 30 days for curing. Nine beams were produced out of each
batch. The beams made out of batch number 1 were labeled from number B-01 to B-09. Likewise, beams
made from batch 2 were labeled from number B-10 to B-18.
Beams of each batch were equally distributed within the different testing series so that each of the series
was formed by three beams from batch 1 and three beams from batch 2. Table 7.1 shows how the beams
were arranged according to the different experiments.
Table 7.1 Classification of beams.
Specimen Batch Series Experiment
B-01, B-02, B-03 1 1 Drop-height ℎ = 2.5 m
B-04, B-05, B-06 1 2 Drop-height ℎ = 5.0 m
B-07, B-08, B-09 1 3 Static testing only
B-10, B-11, B-12 2 1 Drop-height ℎ = 2.5 m
B-13, B-14, B-15 2 2 Drop-height ℎ = 5.0 m
B-16, B-17, B-18 2 3 Static testing only
7.3 Material Properties
7.3.1 Concrete proportions
The concrete specimens were cast from two batches, which were prepared by following the same recipe,
as shown in Table 7.2, with a target mean compressive strength 푓푐푚,푡푎푟푔푒푡 = 38 MPa corresponding to
concrete class C30/37. The amount of water in the recipe was adjusted according to the water content
in the aggregates. To that end, the water content in both the fine and coarse material was previously
70 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	70 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	70 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 90 of 333 --

determined, as listed in Table 7.3.
Table 7.2 Concrete recipe proportions, water to cement ratio of mixture corresponds to w/c = 0.55.
Material Description [kg∕m3]
Cement CEM II/A-LL 42.5 R 335
Limestone filler Limus 40 (Nordkalk) 160
Sand Sköllunga sand (Ucklum) 747.3
Aggregate 4-8 mm Crushed 268.9
Aggregate 8-16 mm Crushed 717.1
Superplasticiser MasterGlenium 51/18 (BASF) 5.36
Water – – – 184.3
Table 7.3 Water content in aggregates.
Material Water content [%]
Sand 6.61
Aggregate 4-8 mm 1.17
Aggregate 8-16 mm 0.54
7.3.2 Concrete properties
In order to determine the compressive and tensile strength of the hardened concrete of each batch, testing
was performed in accordance with (CEN, 2009a) and (CEN, 2009b) at 28 days and at 36 days after casting
(the latter corresponding to the last day of static tests). Six cubic specimens with nominal dimension of
150 mm were cast from each batch. For each batch, three cubic specimens were tested for compressive
strength, while the other three were tested for splitting tensile strength. The average strength properties
are presented in Table 7.4. The results for all individual cubic specimens are provided in Table B.1 of
Appendix B.1.
In order to determine the fracture energy, a wedge splitting test was performed on three cubic specimens
with nominal size of 150 mm cast from batch 2. The procedure was carried out in accordance with the
guidelines described in (Löfgren et al., 1981). The horizontal splitting force, 퐹푠푝, was calculated from
the vertically applied force, whereas the crack mouth opening displacement (CMOD) was measured by a
clip gauge at the same level at which the splitting force was applied to the specimen. The relationship
between the horizontal splitting force and CMOD could therefore be established, and the fracture energy
was calculated as the total area below the obtained curves. The average fracture energy, 퐺푓 , is shown in
Table 7.4. The 퐹푠푝 vs CMOD curves, as well as the calculated fracture energy, can be seen in Appendix
B.2 for each specimen.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 71	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 71	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 71

-- 91 of 333 --

Table 7.4 Average values of concrete properties determined experimentally. Observe that the fracture
energy was only determined from batch 2.
Property Description Batch 1 Batch 2 Average
푓푐푚,푐푢푏푒,28 Mean compressive cube strength after 28 days 48.7 MPa 52.6 MPa 50.6 MPa
푓푐푚,푐푢푏푒,36 Mean compressive cube strength after 36 days 50.3 MPa 55.2 MPa 52.7 MPa
푓푐푡푚,푠푝,28 Mean splitting tensile strength after 28 days 3.6 MPa 4.0 MPa 3.8 MPa
푓푐푡푚,푠푝,36 Mean splitting tensile strength after 36 days 3.9 MPa 4.3 MPa 4.1 MPa
퐺푓 ,36 Fracture energy after 36 days – – – 132 Nm∕m2 132 Nm∕m2
Table 7.5 shows a summary of equivalent values of cylinder concrete strength which were determined
from the material tests results by using Equations (2.5), (2.6), and (2.7). Observe that the values of mean
compressive strength presented in Table 7.5 correspond rather well with the target mean compressive
strength, 푓푐푚,푡푎푟푔푒푡 = 38 MPa.
Table 7.5 Calculated values of cylinder concrete properties.
Property Description Average
푓푐푚,28 Mean compressive strength after 28 days 40.5 MPa
푓푐푚,36 Mean compressive strength after 36 days 42.2 MPa
푓푐푡푚,28 Mean tensile strength after 28 days 3.4 MPa
푓푐푡푚,36 Mean tensile strength after 36 days 3.7 MPa
퐸푐푚,28 Modulus of elasticity after 28 days 33.5 GPa
퐸푐푚,36 Modulus of elasticity after 36 days 33.9 GPa
7.3.3 Steel properties
Tensile testing was also performed on the steel bars used to reinforce the concrete beams. Seven samples
of reinforcement bars were tested under tensile stress in a universal testing machine in order to get
accurate values of strength properties, where values of load vs deformation were recorded until failure.
This information was used to determine the yield stress, the ultimate tensile strength, and the ultimate
steel strain, by converting the values of load and deformation into values of stress and strain using a
nominal diameter of 6.0 mm and a reference length of 200 mm. However, in order to accurately determine
the modulus of elasticity, an extensometer was used to directly record values of strain until a point short
after the onset of yielding. The average values of the steel properties are shown in Table 7.6
Table 7.6 Mechanical properties of the reinforcing steel, mean values.
Property Description Value
푓푡 Ultimate tensile strength 686 MPa
푓0.2 Proof stress 575 MPa
퐸푠푚 Modulus of elasticity 196 GPa
휀푠푦 Yield strain 2.93 ‰
휀푠푢 Ultimate strain 10.8 %
72 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	72 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	72 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 92 of 333 --

Results for all tested reinforcement samples are given in Appendix B.3, including stress-strain curves.
It should be remarked that no distinct yield strength was observed and that the reinforcement bars
exhibited a behavior similar to cold-worked steel. For that reason, a value of yield strength is not shown
in Table 7.6; instead, the mean proof stress – the stress that produces a residual strain of 0.2 % – is given.
However, the notation 푓푦 and the name yield stress are used to refer to the experimental proof stress
henceforth.
Additionally, the mean yield strength was observed to be approximately 15 % larger than the average
value expected for reinforcement class K500C-T, which is 500 MPa. This could indicate that the plastic
deformation corresponding to a yield plateau has been exhausted during the manufacturing process and,
therefore, the plastic region of the steel-strain curve shows only the increase of strength due to strain
hardening effect.
7.4 Impact Loading Tests
7.4.1 Test conditions
The impact loading tests took place 34 days after casting of the specimens. All specimens were simply
supported on rollers near the ends, allowing for a clear span of 1000 mm; therefore, the beams could
rotate freely and translate sideways and in the upwards direction. Figure 7.2 provides with a schematic
representation of the test setup.
100	70	70
v
90	1000	90
500
[mm]
Figure 7.2 Beam dimensions and boundary conditions.
A drop-weight with a mass of 10.1 kg was dropped freely onto the top surface of the beam at midspan
and from two different heights. The drop-weight corresponds to a cylindrical steel rod with a rounded
tip. The dimensions are shown in Figure 7.3. The cylinder is not entirely solid, as a hole is present in
order to accommodate an accelerometer and a sensor. However, such devices were not used during the
experiments. Instead, by painting a high contrast black and white speck pattern, the position and the
change over time for both the drop-weight and the impacted beams could be determined by means of
digital image correlation (DIC). Figure 7.4 shows a real beam specimen together with the drop-weight.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 73	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 73	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 73

-- 93 of 333 --

[mm]
10
25
40
10 
156
30
22 
40
80
r = 400
mass: 10.1 kg
Figure 7.3 Dimensions of the drop weight, modified from (Lovén and Svavarsdóttir, 2016).
Figure 7.4 Setup for impact loading tests. Note the back and white speck pattern painted on the beam
surface and the drop-weight.
The test specimen was installed below a metal frame consisting of three long slender rods, which fulfilled
the purpose of controlling and directing the free fall of the drop-weight. Special attention was put in
placing the beam properly so that the drop-weight hit the center. At the top of the metal cage, a simple
truss system allowed to hoist the drop-weight up to the desired position. Once in position, the cylinder
could be released by pulling on a lever.
74 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	74 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	74 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 94 of 333 --

A high-speed camera, which was able to record at a frame-rate of 5000 fps, was placed directly in front
of the beam so as to capture the beam behavior during the impact event. The image resolution of the
recording was 1024 × 304. Additionally, a lamp was positioned in front of the beam in order to enhance
the lighting conditions. Figure 7.5 shows the setup adopted in order to record the impact tests. The
camera was activated manually a short time before the drop-weight was released.
Figure 7.5 Setup for recording of the impact loading tests.
The cardboard placed below the specimen in Figure 7.5 served the purpose of preventing the drop-weight
from hitting the floor after impacting the concrete beam. Additionally, Figure 7.5 shows the metal frame
used to position correctly the specimen in relation with the roller supports. This frame was carefully
removed after mounting the beam on the supports, before the impact test.
7.4.2 Determination of drop-height
The specimens of Series-1 and Series-2 were subjected to different impact energies, defined by different
drop-heights. The drop-heights adopted in this study are 2.5 m and 5.0 m, which, by neglecting air
resistance and friction, lead to theoretical values of impact velocity equal to 7.0 m∕s and 9.9 m∕s, and
values of impact energy equal to 248 J and 495 J, respectively.
The drop-heights for both Series-1 and Series-2 were chosen by means of a preliminary analysis. The
intention was to choose two different drop-heights which allowed the test specimens to have sufficient
residual deformation capacity in order to properly study the post-impact behavior of the beams. Firstly, a
pre-test consisting of a three-point static experiment was carried out on an impact-damaged specimen
with equal geometry and similar material properties in order to determine the residual plastic deformation
capacity. The pre-test specimen had previously been subjected to an impact, as described in (Lovén and
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 75	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 75	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 75

-- 95 of 333 --

Svavarsdóttir, 2016), with the same drop-weight shown in Figure 7.3 but from a height of 3.5 m. The
results of the pre-test were compared with the load-deformation curves determined under static loading
for the undamaged beams with similar properties (Lovén and Svavarsdóttir, 2016). Further information
regarding the pre-tests can be found in Appendix D.
The residual plastic deformation measured on the pre-test beam indicates that an impact from a height of
3.5 m does not exhaust the entire plastic deformation capacity of the concrete beam; moreover, there
appears to be sufficient remaining deformation capacity which can allow to study the post-impact behavior.
Therefore, it was decided to set the maximum drop-height to 5.0 m for the experiments on specimens of
Series-2.
The second value of drop height was decided so that the ratio between the values of height and the ratio
between the values of plastic deformation are both approximately equal to 2. In order to estimate the
plastic deformation, the simplified 2DOF model was used. Further discussion regarding results from the
2DOF system is provided in Section 8.4. Finally, a drop-height of 2.5 m was chosen for the specimens of
Series-1.
7.5 Static Tests
The static tests were performed in order to determine the load-carrying and deformation capacity of the
undamaged beams, and to measure the residual deformation capacity of the beams previously subjected
to impact loading. The experiments on beams from batch 1 were conducted 35 days after casting, while
the beams from batch 2 were tested 36 days after casting.
The deformation-controlled static tests were carried out using a uniaxial compression/tension hydraulic
jack. The beams were supported over a length of 1000 mm, with identical boundary condition as in the
impact tests. Figure 7.6 shows a specimen at the beginning of a static test.
The load was applied at midspan with a deformation rate of 2 mm∕min until a deformation of 10 mm
was reached. From that point, the loading rate was increased gradually over a span of 40 s until a final
loading rate of 10 mm∕min was reached. The static tests were terminated when either rupture of one
of the reinforcement bars took place or when the applied load corresponded to approximately 70 % of
the maximum load capacity for a given specimen. The applied load and the midspan deflection were
measured simultaneously using a load cell and a displacement sensor, respectively.
The static tests were recorded by using a pair of cameras which pointed at the beam center from different
angles with regard to an imaginary line perpendicular to the main beam axis and which intersects the
beam at midspan. These cameras recorded at a rate of 0.5 fps. A lower frame-rate (compared to the
camera used to record the impact loading tests) allowed to reduce the amount of data collected during
the experiments and also to increase the resolution of the recording. Additionally, a lamp was placed
behind the cameras to improve the lighting conditions. The setup for the experiments can be seen in
Figure 7.7.
76 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	76 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	76 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 96 of 333 --

Figure 7.6 Setup for static tests.
Figure 7.7 Setup for recording of the static tests.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 77	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 77	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 77

-- 97 of 333 --

7.6 Digital Image Correlation
The data recorded with the cameras during both impact loading and static tests was processed using
a method called digital image correlation (DIC), which is an optical, non-contact method that allows
to register changes in 2D and 3D digital image series by tracking the movement between pixels. A
stochastic pattern is required on the surface (or volume) of interest to describe discrete image areas.
DIC can be used to measure deformation, displacement, and strain; and it is a convenient alternative to
traditional methods, such as strain gauges and extensometers. The equipment needed to record the tests
was provided by RISE (Research Institutes of Sweden).
The free version of the software package GOM Correlate 20161 was used to perform the DIC analysis.
Information of interest for the development of this project which can be obtained from GOM Correlate
after processing the data recorded by the cameras includes velocity and displacement of the beam
midpoint and the drop-weight, strain field on the surface of the beam, and the deformed shape of the
beam over time.
1Revision 100682
78 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	78 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	78 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 98 of 333 --

8 Predictions
8.1 Introduction
This chapter presents a brief description of the procedure followed to calculate the theoretical response
of the concrete beam for both static and impact loading according to the theory discussed in previous
chapters. The theoretical predictions are to be compared with the experimental results and the results
from the finite element analyses in later chapters.
The geometry of the beam and the drop-weight are described in Section 7.2; while the boundary and
loading conditions are explained in Section 7.4.
Initially, the static load capacity of the reinforced concrete beam is calculated at ultimate limit state.
Furthermore, the load at cracking and yielding, as well as the theoretical load-deflection curve under
static loading, are determined.
Additionally, the plastic rotational capacity is estimated according to the different methods presented in
Section 5.4. The software Mathcad 15.0 was used to make the calculations; which are presented in detail
in Appendix I.
Finally, the response of the beam during the impact event is studied based on a simplified 2DOF model,
as described in Chapter 4. An approximate solution of the 2DOF system was obtained by means of the
Central Difference Method (CDM). The computations were performed with the software MATLAB
R2015b. The script can be found in Appendix J.
8.2 Load Capacity
8.2.1 Ultimate Limit State
In the ultimate limit state it is assumed that the ultimate concrete strain, 휀푐푢 = 3.5 ‰, is reached. The
stress distribution in the compressive zone follows the idealized parabolic-rectangular stress-strain
relationship for concrete described in Section 2.4. Likewise, complete interaction between the reinforcing
steel and concrete, as well as linear strain distribution, is assumed. Figure 8.1 illustrates the cross-sectional
strain and stress distribution at failure.
100
4ϕ6
100 [mm]
fcd
F’s
Fc
αR fcd	
Fs
d
d’
x βR x	ε's
εs
εcu
Mu
Figure 8.1 Parabolic-rectangular stress distribution and linear strain distribution across the cross
section.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 79	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 79	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 79

-- 99 of 333 --

Assuming that the neutral axis is located below the center of gravity of the top layer of reinforcement,
the equilibrium conditions at ultimate limit state can be expressed as
훼푅 ⋅ 푓푐푑 ⋅ 푏 ⋅ 푥 + 휎®
푠 ⋅ 퐴®
푠 = 휎푠 ⋅ 퐴푠 (8.1)
푀푢 = 훼푅 ⋅ 푓푐푑 ⋅ 푏 ⋅ 푥(푑 − 훽푅 ⋅ 푥) + 휎®
푠 ⋅ 퐴®
푠(푑 − 푑®) (8.2)
where 훼푅 and 훽푅 correspond to the stress block factors for average stress and resultant location, respec-
tively. For the case when the ultimate strain of concrete 휀푐푢 = 3.5 ‰ is reached, the stress block factors
take the values:
훼푅 = 0.81
훽푅 = 0.42 (8.3)
The magnitude of the corresponding steel strain reached in the ultimate state can be calculated from the
strain distribution as
휀푠 = 푑 − 푥
푥 ⋅ 휀푐푢 (8.4)
휀®
푠 = 푥 − 푑®
푥 ⋅ 휀푐푢 (8.5)
The steel stress in each layer of reinforcement depends on the actual stress-strain relationship for the
reinforcing steel. When a bi-linear curve with a inclined top branch is adopted to represent the stress-strain
relationship, the steel stress can be determined as
휎푠 =
T
퐸푠푚 ⋅ 휀푠 푖푓 휀푠 ≤ 휀푠푦
푓푦푑 + 푝1(푓푡푑 − 푓푦푑 ) 푖푓 휀푠 > 휀푠푦
(8.6)
where
푝1 = 휀푠 − 휀푠푦
휀푠푢 − 휀푠푦
(8.7)
Note that Equations (8.6) and (8.7) are applicable for both the top and bottom layer reinforcement. In
order to obtain a prediction of the behavior of the material closer to reality, the partial safety factors 훾푐
and 훾푠 normally used in design were set to 1.0, and the design values of strength were set equal to the
mean values of strength in the calculations as
푓푐푑 = 푓푐푚
푓푦푑 = 푓푦푚
(8.8)
80 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	80 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	80 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 100 of 333 --

The complete procedure to determine the load capacity is detailed in Appendix I. Initially, the load capacity
was determined considering both layers of steel. It was found that the top reinforcement is subjected
to low tensile stress. However, since the expressions to determine plastic rotational capacity are either
based on cross sections with only bottom reinforcement or cross-section with top reinforcement under
compressive stress, it was decided to disregard the contribution of the top layer during the calculation of
plastic rotational capacity. That means that the values of load capacity calculated only by considering
the bottom reinforcement are also needed.
Furthermore, two different values of yield stress were considered in the calculations. First, the proof
stress, as determined in Section 7.3, provides with the design load capacity for the concrete beam.
Additionally, a theoretical upper value of load capacity was determined by setting the yield stress equal
to the ultimate stress, 푓푡. Table 8.1 shows the calculated values of ultimate moment and point load for
different conditions.
Table 8.1 Moment and external force in the Ultimate Limit State for different values of yield stress.
푓푦푑
[MPa]
Layers of reinforcement
considered
푀푢
[kNm]
퐹푢
[kN]
575 Top and bottom 2.7 10.7
Bottom only 2.6 10.3
686 Top and bottom 3.0 12.1
Bottom only 2.9 11.7
8.2.2 Cracking and yielding
The external moment which is acting on the section when cracking occurs can be calculated based on
the mean flexural tensile concrete strength and the moment of inertia for state I as
푀푐푟 = 푓푐푡,푓 푙 ⋅ 퐼퐼
ℎ∕2 (8.9)
To determine the yielding moment, it is assumed that the stress distribution in the compressive zone
corresponds to the idealized parabolic-rectangular stress-strain relationship described in Section 2.4. At
the onset of yielding, the steel strain 휀푠푦 is known, while the concrete strain at the compressive edge
is unknown; that is, 휀푐푐 < 휀푐푢. Moreover, since the stress block factors 훼푅 and 훽푅 are dependent on
휀푐푐 , they have unknown values different to those given by Equation (8.3). In order to calculate the
cross-sectional forces, an iterative procedure must be followed. Initially, a tentative position of neutral
axis, 푥푦, is assumed. Then, the strain in the compressive edge and in the top layer of reinforcement can
be determined as
휀푐푐.푦 = 푥푦
푑 − 푥푦
⋅ 휀푠푦 (8.10)
휀®
푠푦 = 푑® − 푥푦
푑 − 푥푦
⋅ 휀푠푦 (8.11)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 81	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 81	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 81

-- 101 of 333 --

The corresponding stress block factors are consequently calculated for that strain distribution. Finally,
the condition of horizontal equilibrium is verified. This procedure is repeated with a new assumption of
푥푦 until the condition of horizontal equilibrium is fulfilled.
The calculated values of moment and external concentrated force for both the beginning of cracking and
the onset of yielding are shown in Table 8.2. The variation of these values depending on whether or not
the top layer of reinforcement is considered is negligible; therefore, no distinction regarding the layers of
reinforcement is made.
Table 8.2 Moment and external force at the onset of cracking and yielding.
푓푦푑
[MPa] State 푀푐푟 or 푀푦
[kNm]
퐹푐푟 or 퐹푦
[kN]
575 Onset of cracking 0.9 3.4
Onset of yielding 2.4 9.5
686 Onset of cracking 0.6 2.5
Onset of yielding 2.8 11.3
8.2.3 Theoretical load-deflection curve
In order to create a theoretical load-deflection curve, the stiffness for the different states should be
calculated. Equation (8.12) can be used to determine the equivalent stiffness for both state I and state
II by setting 퐼 = 퐼퐼 or 퐼 = 퐼퐼퐼 , respectively. Note that Equation (8.12) is only valid for the midspan
deflection of a simply supported beam with linear elastic material properties subjected to a point load at
midspan.
푘 = 48퐸푐푚퐼
퐿3 (8.12)
Provided that the top layer of reinforcement is subjected to compressive stress, the second moment of
area for a state II response can be calculated according to
퐼퐼퐼 = 푏 ⋅ 푥3
퐼퐼
3 + (훼 − 1) ⋅ 퐴®
푠(푥퐼퐼 − 푑®)2 + 훼 ⋅ 퐴푠(푑 − 푥퐼퐼 )2 (8.13)
where the position of the neutral axis must be determined by considering area balance as
푏 ⋅ 푥2
퐼퐼
2 + (훼 − 1) ⋅ 퐴®
푠(푥퐼퐼 − 푑®) = 훼 ⋅ 퐴푠(푑 − 푥퐼퐼 ) (8.14)
If equilibrium cannot be found under the assumption of compressive stress in the top bars, then Equations
(8.13) and (8.14) can be modified accordingly to consider tension in the top bars.
The stiffness of the transformed section in state I is used up to initiation of cracking. Thereafter, it is
assumed that the beam deflects linearly until the ultimate load is reached. The beam is assumed to
behave plastically from that point on. However, the slope of the linear load-deflection curve between
cracking and ultimate load is unknown. In order to determine an equivalent stiffness for that interval, the
82 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	82 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	82 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 102 of 333 --

midpoint deflection when peak load is reached can be estimated by assuming that the structure deflects
with a stiffness equivalent to a response in state II from the undeformed position. Once the coordinates
of this point have been found, a straight line can be drawn from the onset of cracking to ultimate load.
Figure 8.2 shows the theoretical load-deflection curve for different values of yield stress.
0
2
4
6
8
10
12
14
0 	5 	10 	15 	20 	25 	30
Load,
 F [kN]
Deflection, u [mm]
Load - Displacement curve for GF = 132 N/m and QM = 0.1
fy = 686 MPa
fy = 575 MPa
State II
State I
Onset of cracking
Figure 8.2 Theoretical load vs deflection curve for different values of yield stress when the top layer of
reinforcement is taken into account.
8.3 Rotational Capacity
8.3.1 General description
Most of the different methodologies to calculate the rotational capacity discussed in Chapter 5 are based
on a cross section with top reinforcement subjected to compressive stress; however, as described in
Section 8.2.1, the top reinforcement in the specimen beam has been proved to be subjected to low tensile
stress. For this reason, the contribution of the top reinforcement was disregarded when predicting the
rotational capacity of the concrete beam.
Common input parameters for all equations are the distance from the point of maximum moment to the
zero moment region, 푙0; and the effective cross-section height, 푑. The former is equal to half the span of
the beam, 푙0 = 퐿∕2 = 0.5 m; the latter corresponds to the distance from the top edge to the bottom layer
of steel (the top layer is disregarded), 푑 = 80 mm.
8.3.2 Rotational capacity according to Eurocode 2
The position of the neutral axis at failure and the effective depth of the section are 푥푢 = 9.9 mm and
푑 = 80 mm, respectively; therefore, 푥푢∕푑 = 0.124. From Figure 5.13, the corresponding total plastic
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 83	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 83	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 83

-- 103 of 333 --

rotational capacity is 휃푝푙,푡표푡 = 31 mrad. This value should be corrected considering the shear slenderness
휆 = 푙0∕푑 = 6.25 as
휅 = √휆∕3 = 1.44
휃푝푙,푡표푡,퐸퐶 = 휅 ⋅ 휃푝푙,푡표푡 = 45 mrad (8.15)
The plastic rotational capacity at one side of the critical section (equivalent to the rotation at one of the
supports) can be determined as
휃푝푙,퐸퐶 = 휃푝푙,푡표푡,퐸퐶
2 = 22 mrad (8.16)
The corresponding plastic deformation is given by
푢푝푙,퐸퐶 = 휃푝푙,퐸퐶 ⋅ 퐿
2 = 11.2 mm (8.17)
8.3.3 Betonghandbok-Konstruktion (ABC method)
Initially, the factors 퐴, 퐵, and 퐶 should be determined. Equation (5.21) is used given that the strength of
the materials was measured in the laboratory. For the calculation of 퐴, the parameters 휔푣 and 휔푐 were
both set equal to zero since the specimen beams were not provided with shear reinforcement, which
in turn would hinder the ability of the top bars to provide confinement of the concrete. Additionally,
the top bars are acting in tension. The tensile mechanical reinforcement ratio, 휔푠, was determined by
considering only the bottom layer of reinforcement.
As for the factor 퐵, the maximum allowable value was adopted, as pertaining to high ductility steel. Even
though the steel classification shown in Table 5.1 is currently outdated, it was assumed that the modern
steel type C provides sufficient ductility, equivalent to the ductility provided by steel class Ks 60.
Considering that the plastic hinge length is located at midspan, Equation (5.23) can be used to calculate
the factor 퐶. The plastic rotational capacity and the corresponding plastic deformation according to
Betonghandboken method are shown below:
휃푝푙,95,퐴퐵퐶 = 퐴 ⋅ 퐵 ⋅ 퐶 ⋅ 10−3 = 0.52 ⋅ 1.0 ⋅ 43.8 ⋅ 10−3 = 23 mrad (8.18)
푢푝푙,95,퐴퐵퐶 = 휃푝푙,95,퐴퐵퐶 ⋅ 퐿
2 = 11.3 mm (8.19)
8.3.4 Bk 25
The derivation of the equation to calculate the rotation capacity according to Bk 25 as described in
Section 5.4.4 is based on a cross section without top reinforcement. The first step to determine the plastic
rotational capacity is to identify the dominant failure mode. Since the tensile mechanical reinforcement
ratio is proven to be larger than the critical mechanical reinforcement ratio, 휔푠,푐푟푖푡, it is concluded that
concrete crushing is the governing failure mode.
84 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	84 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	84 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 104 of 333 --

According to (Latte, 1999), the rotation a midspan for a three-point bending test could be considered
equivalent to the rotation over an inner support in a continuous beams. Following this reasoning, the
plastic hinge length at midspan for a beam loaded with a point load can be determined as the plastic
hinge length at an inner support in a continuous beam. Therefore, Equation (5.35) is used here:
푙푝 = 0.5푑 + 0.1푙0 = 0.5 ⋅ 80 mm + 0.1 ⋅ 500 mm = 90 mm (8.20)
This value of plastic hinge length is comparable with the equivalent plastic hinge lengths calculated
with other methods, as shown in Table 8.4. The rotational capacity can be calculated according to
Equation (5.37).
휃푝푙,퐵푘25,푠 = 33 mrad (8.21)
The plastic hinge length according to Bk 25 derived for a plastic hinge located in the field is calculated
for the sake of comparison by using Equation (5.24):
푙푝 = 0.5푑 + 0.15퐿 = 0.5 ⋅ 80 mm + 0.15 ⋅ 1000 mm = 190 mm (8.22)
Subsequently, the corresponding value of rotational capacity is determined by means of Equation (5.33)
as
휃푝푙,퐵푘25,푓 = 69 mrad (8.23)
Note that the 휃푝푙,퐵푘25,푓 is more than twice as large as 휃푝푙,퐵푘25,푠; as well as much larger than the plastic rota-
tional capacity calculated according to the methodologies proposed in Eurocode 2 and Betonghandboken.
This could be due to the fact that the derivation of the expressions to calculate the plastic hinge length in
the Bk 25 method are based on a concrete beam subjected to a uniformly distributed load; therefore, the
rotational capacity on the field determined for a uniformly distributed load is expected to be larger than
the corresponding capacity for an external concentrated load.
8.3.5 Methods based on equivalent plastic hinge length
The first step to estimate the plastic rotational capacity consists in calculating the equivalent plastic hinge
length according to the empirical equations presented in Section 5.4.
Secondly, the plastic curvature should be determined. The curvature at failure, 휑푢, is initially calculated
for 휀푐푢 = 3.5 ‰, as described in Section 8.2.2, even though some methods suggest calculating a different
value of ultimate concrete strain. The purpose of assuming 휀푐푢 = 3.5 ‰ is to use a similar cross-sectional
strain distribution for the sake of comparison. Similarly, the curvature at yielding, 휑푦, is determined
from the results in Section 8.2.1. Table 8.3 summarizes such calculations.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 85	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 85	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 85

-- 105 of 333 --

Table 8.3 Determination of curvature.
State x [mm] 휀푠 [%] d [mm] 휑 [푚−1]
ULS 9.9 2.478 80 0.354
Yielding 19.4 0.293 80 0.048
Therefore, the plastic curvature is given by
휑푝푙 = 휑푢 − 휑푦 = 0.354 m−1 − 0.048 m−1 = 0.305 m−1 (8.24)
The plastic rotation capacity is estimated according to Equation (5.10). The values of plastic rotational
capacity for the different methods and the corresponding plastic deformation are shown in Table 8.4.
Table 8.4 Equivalent plastic hinge length and plastic rotational capacity according to different methods.
Method 푙푝
[mm]
휃푝푙
[mrad]
푢푝푙
[mm]
Mattock 107 32 16.1
Corley 96 29 14.5
Mattock’s discussion on Corley’s work 65 20 9.8
Sawyer 58 18 8.8
8.4 Dynamic Response According to 2DOF System
8.4.1 Overview
The setup of the 2DOF model according to the particular conditions of this project are discussed in
this section. Henceforth the subscripts 1 and 2 are used to represent the drop-weight and the beam,
respectively.
The response of both the drop-weight and the beam was modelled by a bi-linear elasto-plastic function,
as described in Section 2.2.3; that is, the material exhibits a linear behavior defined by an elastic stiffness,
푘, until the limit for elastic response is reached. From that point on, the material undergoes plastic
deformation and the resistance force cannot further increase above the capacity of the material.
Two different values of internal resistance were considered. Initially, the resistance was calculated based
on the moment capacity obtained with the average yield stress measured in the laboratory, 푓푦푚 = 575 MPa.
Additionally, a theoretical upper value of resistance was determined by assuming that the yield stress
is equal to the ultimate steel stress, 푓푦푚 = 686 MPa. The contribution of both top and bottom layer of
reinforcement was considered, see Table 8.1 for the adopted load capacities.
The impact load is introduced as initial velocity of body 1, namely 푣0 = 7.0 m∕s and 푣0 = 9.9 m∕s;
which in turn depends on the drop-height; that is, 2.5 m and 5.0 m respectively.
86 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	86 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	86 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 106 of 333 --

8.4.2 Maximum internal resistance
As described in Section 4.4, the internal resistance for the drop-weight, 푅푚,1, can be derived from the
strength of the material and the impact area as
푅푚,1 = 푓 ⋅ 퐴푖푚푝 (8.25)
Based on the work in (Lovén and Svavarsdóttir, 2016), the internal resistance of the drop-weight was
chosen as
푅푚,1 = 50 kN (8.26)
By choosing 푅푚,1 = 50 kN, the impact between the drop-weight and the beam is close to a plastic
impact.
The maximum internal resistance for the beam, 푅푚,2, can be determined from the maximum moment at
ultimate limit state, as calculated in Section 8.2.1, by using Equation (4.28) as
푅푚,2 = 4 ⋅ 푀푢
퐿 (8.27)
However, the beam is also statically loaded by its self-weight. To account for the self-weight, 푅푚,2
should be reduced by subtracting the equivalent static load pertaining to a beam subjected to a uniformly
distributed load according to Equation (4.29) as
푅푚,2,푚표푑 = 4 ⋅ 푀푢
퐿 − 푔푏푒푎푚 ⋅ 퐿
2 (8.28)
A summary of the values of internal resistance for the drop-weight and the beams is provided in
Table 8.5.
8.4.3 Stiffness
The stiffness of the drop-weight can determined as
푘1 = 퐸푠푚 ⋅ 퐴푑푟표푝
퐿푑푟표푝
(8.29)
On the other hand, the stiffness of the beam in the elastic range is assumed to be equivalent to the stiffness
in state II, that is
푘2 = 푘퐼퐼 = 48퐸푐푚퐼퐼퐼
퐿3 (8.30)
The calculated values of stiffness are listed in Table 8.5.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 87	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 87	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 87

-- 107 of 333 --

Table 8.5 Internal resistance and elastic stiffness for the bodies in the 2DOF model.
Body 푓푦푑
[MPa]
푅푚,푖
[kN]
푅푚,푖,푚표푑
[kN]
푘푖
[MN/m]
Drop-weight, 1 - - - 50 - - - 3.9⋅103
Beam, 2 575 10.7 10.6 2.4
686 12.1 12.0 2.4
8.4.4 Transformation factors
Considering that the drop-weight exhibits a much more rigid behavior than the beam, it is assumed that
the response of the drop-weight is closer to the behavior of a rigid body than to that of an elastic body.
Therefore, the transformation factors derived for plastic deformation have been adopted to model the
response of the steel rod in the 2DOF system.
휅푚,1 = 휅퐹 ,1 = 휅푘,1 = 1
휅푚퐹 ,1 = 1 (8.31)
As for the beam, when an elasto-plastic response of the material is assumed, the combined transformation
factor, 휅푚퐹 ,2, depends on both the elastic and plastic parts; therefore, a proper value for 휅푚퐹 ,2 would lie
between the values for ideal plastic and elastic response presented in Table 4.1. However, in (Andersson
and Antonsson, 2015) a comparison between a 2DOF system and a beam model in the software ADINA
was made. For the conditions in that experiment, it was found that the response of the beam in the FE
model was closer to the fully plastic condition. Based on these results, the transformation factors for a
fully plastic beam were assumed in this thesis work, so that
휅푚,2 = 0.333
휅퐹 ,2 = 휅푘,2 = 1
휅푚퐹 ,2 = 0.333
(8.32)
The value for 휅푚퐹 ,2 in Equation (8.32) is kept constant for the entire duration of the 2DOF analysis, which
is equivalent to the assumption that the beam undergoes plastic deformation and exhibits a triangular
deformed shape, as shown in Figure 8.3, from the beginning of loading. It should be highlighted that the
assumption of plastic deformation is only for the calculation of the transformation factors, as an elasto-
plastic response is considered for the determination of deformations, stiffness, and internal resistance of
the beam, as explained previously.
Figure 8.3 Assumed triangular shape of the beam pertaining to plastic response for calculation of
transformation factors.
88 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	88 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	88 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 108 of 333 --

8.4.5 Results from the 2DOF model
The 2DOF analysis was performed for four different conditions regarding drop-height and internal plastic
resistance of the beam. A summary of the results is shown in Table 8.6. Observe that the ratio between
the plastic deformation for a drop-height of 5.0 m and the plastic deformation for a drop-height of 2.5 m
is approximately equal to 2.2 for both values of yield stress, which in turn is close to 2, as originally
intended when selecting the drop-heights.
Table 8.6 Deformation according to 2DOF system.
Series Drop height
[m]
Impact
velocity
[m/s]
푅푚,2,푚표푑
[kN]
푢푚푎푥
[mm]
푢푝푙
[mm]
푢푚푎푥,5.0∕푢푚푎푥,2.5
[-]
푢푝푙,5.0∕푢푝푙,2.5
[-]
1 2.5 7.0 10.6 15.1 10.6 - - - - - -
12.0 13.9 8.8 - - - - - -
2 5.0 9.9 10.6 27.9 23.4 1.8 2.2
12.0 25.2 20.1 1.8 2.3
The deflection over time of the beam midpoint according to the 2DOF model is depicted in Figure 8.4.
More results regarding the dynamic response can be found in Appendix E.
0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
h = 5.0 m; f.y = 575 Mpa
h = 5.0 m; f.y = 686 Mpa
h = 2.5 m; f.y = 575 Mpa
h = 2.5 m; f.y = 686 Mpa
Figure 8.4 Deflection vs time curve for body 2 according to simplified 2DOF model.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 89	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 89	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 89

-- 109 of 333 --



-- 110 of 333 --

9 Experimental Results
9.1 Impact Loading Tests
9.1.1 Overview
The experimental procedure started with the dynamic testing of Series-1 and Series-2 from the prede-
termined drop-heights ℎ = 2.5 m, and ℎ = 5.0 m, respectively. This section presents results gathered
from the high-speed camera footages recorded during the impact events and subsequent digital image
correlation (DIC) analyses performed on the program GOM Correlate. The information treated in this
section covers, among others, the strain field of the beam specimens due to impact, beam midpoint
deflection over time, as well as the variation of the deflected shape of the beam over time.
9.1.2 Methodology
The DIC analysis was performed using GOM Correlate, as introduced in Section 7.6, where a surface
component was created over the recorded face of the specimen of interest in order to determine some of
the key parameters. After several trials, it was decided to construct the surface component using a facet
size of 21 pixels, point distance of 5 pixels, and high accuracy computation, as this setup was found
to yield interpretable results. Key parameters could thereafter be derived from the constructed surface
component, such as the major strain field, midpoint deflection, deformed beam shape, and displacement
of the beam over the supports.
The major strain field can be requested directly from the surface component. In order to determine beam
midpoint deflection and velocity, a surface point was created below the impact region close to the center
of the beam and associated with the surface component. Information regarding displacement and velocity
can be requested from such a point. Additionally, a single section was defined along a longitudinal axis
positioned on the geometrical center of the beam. The deformed shape of the beam for different times
can be determined from this section.
Finally, a facet point component was created on the drop-weight in order to determine velocity of the
drop-weight over time.
9.1.3 Midpoint deflection over time: Series-1
The deflection of the midpoint over time for dynamically loaded beams of Series-1 (drop-height
ℎ = 2.5 m) is shown in Figure 9.1. Based on this information, an average, maximum and minimum
value were calculated for each time step. The average deflection curve is presented in Figure 9.2, the
envelopes in the same figure mark the maximum and minimum recorded deflection over time for all
beams in Series-1.
As seen in Figure 9.2, the average deflection curve remains centered with respect to the outer envelopes
for the presented duration. The scatter of the results appears to be minor before maximum deflection is
reached. From that point onward, the deviation of the outer envelopes remains approximately constant.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 91	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 91	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 91

-- 111 of 333 --

0
5
10
15
0 	5 	10 	15
Deflection,
 u [mm]
Time, t [ms]
B-01
B-02
B-03
B-10
B-12
B-11
Figure 9.1 Deflection of midpoint over time for Series-1, drop-height of h = 2.5 m, from DIC analysis.
Beams from the first batch are listed in the upper part of the legend box, while beams from
the second batch are listed in the lower part.
0
5
10
15
0 	5 	10 	15
Deflection,
 u [mm]
Time, t [ms]
Average
Figure 9.2 Deflection of midpoint over time from DIC analysis. Outer envelopes and average values
for all beams of Series-1. Drop-height of h = 2.5 m.
92 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	92 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	92 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 112 of 333 --

Table 9.1 presents key parameters collected from DIC analysis, where the recorded impact velocity is
given as 푣0, and maximum deflection during dynamic response is given as 푢푚푎푥. Plastic deformation
due to impact is given as 푢푝푙. The parameter 푢푝푙 was determined based on the results from subsequent
DIC analysis of the respective static trials; a schematic procedure to determine 푢푝푙 is shown in Appendix
F.3.
Table 9.1 Key parameters collected from DIC analysis for Series-1, together with preliminary estima-
tions with the 2DOF model.
Batch Beam-ID 푣0
[m/s]
푢푚푎푥
[mm]
푢푝푙
[mm]
1
B-01 6.9 10.5 4.1
B-02 6.9 11.0 5.0
B-03 6.9 10.4 4.7
Average 6.9 10.6 4.6
2
B-10 6.9 10.5 5.1
B-11 6.9 11.2 4.3
B-12 6.9 10.7 4.7
Average 6.9 10.8 4.7
1 & 2 Average all 6.9 10.7 4.7
(a) Experimental results.
ℎ 푓푦
[MPa]
푣0
[m/s]
푢푚푎푥
[mm]
푢푝푙
[mm]
2.5 m 575 7.0 15.1 10.6
686 13.9 8.8
(b) 2DOF predictions.
Preliminarily, an overestimation by the 2DOF model is noticed when comparing average values of
푢푚푎푥 and 푢푝푙 from experimental results in Table 9.1a with predictions made with the 2DOF model in
Table 9.1b; this topic is addressed further in Section 9.6.3.
The recorded values of velocity have essentially equal magnitude in all cases presented in Table 9.1a.
However, the average recorded value is slightly smaller than the theoretical value calculated in Table 9.1b.
This can be due to the effect of air resistance and possible deviations in the drop-height during the
experiments. The theoretical value is, nonetheless, still considered sufficiently close to the experimental
values.
Ultimately, when comparing results presented in Figure 9.1 together with results given in Table 9.1a, no
definitive conclusions can be drawn regarding whether beams from a certain batch behave differently
than the beams from the other. Furthermore, while differences between individual beams are noticed,
such differences are regarded as relatively small when comparing them to the set of test data gathered
for Series-1. Consequently, the average curve presented in Figure 9.2 is considered to represent a
characteristic response of the impact behavior for the beams of Series-1.
9.1.4 Midpoint deflection over time: Series-2
Figure 9.3 presents the recorded midpoint deflection over time for Series-2, drop-height of ℎ = 5.0 m.
Average values over time are shown in Figure 9.4, and key results are presented in Table 9.2.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 93	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 93	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 93

-- 113 of 333 --

0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
B-04
B-05
B-06
B-13
B-14
B-15
Figure 9.3 Displacement of midpoint over time for Series-2, drop-height of h = 5.0 m, from DIC
analysis. Beams from the first batch are listed in the upper part of the legend box, while
beams from the second batch are listed in the lower part.
0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
Average
Figure 9.4 Displacement of midpoint over time from DIC analysis. Outer envelopes and average values
for all beams of Series-2. Drop-height of h = 5.0 m.
94 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	94 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	94 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 114 of 333 --

Table 9.2 Key parameters collected from DIC analysis for Series-2, together with preliminary estima-
tions with the 2DOF model.
Batch Beam-ID 푣0
[m/s]
푢푚푎푥
[mm]
푢푝푙
[mm]
1
B-04 9.8 20.4 13.0
B-05 9.8 20.6 12.8
B-06 9.8 20.0 12.7
Average 9.8 20.3 12.8
2
B-13 9.7 20.9 13.3
B-14 9.8 19.0 11.7
B-15 9.8 19.8 11.7
Average 9.8 19.9 12.2
1 & 2 Average all 9.8 20.1 12.5
(a) Experimental results.
ℎ 푓푦
[MPa]
푣0
[m/s]
푢푚푎푥
[mm]
푢푝푙
[mm]
5.0 m 575 9.9 27.9 23.4
686 25.2 20.1
(b) 2DOF predictions.
The scatter of the data is observed to be fairly symmetrical with respect to the average curve; although the
deviation appears to increase somewhat as time progresses. Similar conclusions regarding differences in
the behavior depending on the batch can be drawn as previously done for Series-1; that is, no significant
distinction between batches can be observed for the impact response, and therefore the average values
between all beams are assumed as representative of the dynamic response.
Once more, the recorded value of impact velocity is slightly smaller than the theoretical value, as seen
when comparing predicted values in Table 9.2b together with average values gathered from DIC analysis in
Table 9.2a. Furthermore, it is noticed that the 2DOF model overpredicts the deflection of the beam. A sum-
mary of experimental average values compared with 2DOF predictions is presented in Table 9.3.
As observed in Table 9.3, the maximum deflection increases for an increased drop-height. Moreover,
when comparing experimental results between drop-heights in Table 9.3a, it is noticed that the elastic
deflection increases for a higher drop-height, and could be an indication of strain rate effects, since
the beams have an extended linear-elastic behavior range for a larger impact energy. No consideration
of strain rate effects were taken into account in the 2DOF model, which produces the same elastic
deformation regardless of drop-height, as can be seen in Table 9.3b. Further verification of the results
from the 2DOF model is carried out in Section 9.6.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 95	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 95	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 95

-- 115 of 333 --

Table 9.3 Summary of average experimental values compared to 2DOF predictions.
Series ℎ
[m]
푢푚푎푥
[mm]
푢푝푙
[mm]
푢푒푙
[mm]
푢푚푎푥,5.0
∕푢푚푎푥,2.5
[-]
푢푝푙,5.0
/ 푢푝푙,2.5
[-]
푢푒푙,5.0
/ 푢푒푙,2.5
[-]
1 2.5 10.7 4.7 6.0 1.9 2.7 1.3
2 5.0 22.1 12.5 7.6
(a) Experimental results; average values
푓푦
[MPa]
ℎ
[m]
푢푚푎푥
[mm]
푢푝푙
[mm]
푢푒푙
[mm]
푢푚푎푥,5.0
∕푢푚푎푥,2.5
[-]
푢푝푙,5.0
/ 푢푝푙,2.5
[-]
푢푒푙,5.0
/ 푢푒푙,2.5
[-]
575 2.5 15.1 10.6 4.5 1.8 2.2 1
5.0 27.9 23.4
686 2.5 13.9 8.8 5.1 1.8 2.3 1
5.0 25.2 20.1
(b) 2DOF predictions
9.1.5 Strain field due to impact loading
The strain field was determined through the surface component established in GOM Correlate for each
beam. Major strain is the requested output parameter, which is displayed against the reference stage
(before impact). As previously mentioned in Section 7.4, the dynamic response of the impacted beams
was filmed using a high-speed camera recording at a frame-rate of 5000 fps, where the entire length
of each beam was recorded in order to capture any possible asymmetric response of the dynamically
loaded beams. A consequence of recording the whole beam was a reduction in the level of detailing
when outlining cracks in the strain field; as only main cracked regions could be reliably determined using
DIC analysis.
Before analyzing the cracking pattern obtained from DIC analysis, a comparison between DIC results
from the thesis work by Lovén and Svavarsdóttir (2016) and the results from this project was carried
out in order to gain insight regarding the quality of the cracking pattern obtained, to identify to what
extent the information can be used, and to draw conclusions regarding similarities between recording
half the beam and recording the entire beam. It should be noted that the impact tests described in (Lovén
and Svavarsdóttir, 2016) were performed by using the same recording equipment and adopting the same
frame-rate and resolution, but only half of the beam was recorded. Furthermore, while the geometry
of the beam specimens and drop-weight is identical and the material properties are similar, there is a
difference in the drop-height; which was set to ℎ = 5.5 m in (Lovén and Svavarsdóttir, 2016) whereas
the maximum drop-height adopted in this project is ℎ = 5.0 m.
Beam B-06 was selected as a reference beam for ℎ = 5.0 m based on the deflection of the midpoint over
time, as it can be seen in Figure 9.3 that the response of B-06 resembles the average curve the closest.
The reference beam in (Lovén and Svavarsdóttir, 2016) corresponds to beam RPC2, hereby referred to as
96 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	96 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	96 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 116 of 333 --

DIC-2016. The comparison is shown in Table 9.4.
Table 9.4 Comparison of strain fields for the characteristic beam from (Lovén and Svavarsdóttir, 2016)
together with B-06 from this thesis work. Note that the impact height for DIC-2016 is
ℎ = 5.5 푚, whereas B-06 was impacted from a drop-height of ℎ = 5.0 푚.
Time [ms] DIC-2016 B-06
0.2
G enerated with G O M C orrelate 2 0 1 6
t_2
X
Y
Z
1 3 .0 1 .2 0 1 5
0 .2 ms
O riginal alignment
0.4
G enerated with G O M C orrelate 2 0 1 6
t_4
X
Y
Z
1 3 .0 1 .2 0 1 5
0 .4 ms
O riginal alignment
0.6
G enerated with G O M C orrelate 2 0 1 6
t_6
X
Y
Z
1 3 .0 1 .2 0 1 5
0 .6 ms
O riginal alignment
0.8
G enerated with G O M C orrelate 2 0 1 6
t_8
X
Y
Z
1 3 .0 1 .2 0 1 5
0 .8 ms
O riginal alignment
1.0
G enerated with G O M C orrelate 2 0 1 6
t_10
X
Y
Z
1 3 .0 1 .2 0 1 5
1 .0 ms
O riginal alignment
2.0
G enerated with G O M C orrelate 2 0 1 6
t_20
X
Y
Z
1 3 .0 1 .2 0 1 5
2 .0 ms
O riginal alignment
4.0
G enerated with G O M C orrelate 2 0 1 6
t_40
X
Y
Z
1 3 .0 1 .2 0 1 5
4 .0 ms
O riginal alignment
Principal
strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.5 0.6 0.7 0.8 0.9 1.0 1.1 1.2 1.3 1.4 1.44
In Table 9.4 it is noticed that the strain field for beam B-06 is visibly coarser compared to DIC-2016.
While it is possible to outline the major crack regions, difficulty lies in identifying precise cracking
patterns, especially so if the location of the minor cracks are desired.
However, despite differences in drop-height, similarities can still be seen between the two alternatives.
For instance, the major cracks occurring at midspan have similar outlines for both beams, albeit with
less level of detail for B-06. Furthermore, indications of minor cracks occurring soon after impact at the
top edge can be detected, which then turn into minor cracks occurring at the bottom edge. However, due
to low resolution and the presence of noise in the measurements, there exists a risk of misinterpreting
results as far as the occurrence of minor cracks is concerned.
Based on the comparison made in Table 9.4, the lower limit of the colorscale when displaying the
principal strain with GOM Correlate was chosen to be the same value of 0.5 %; however, the upper
limit was set to 5 % so that lower values are damped out in order to facilitate a more reliable reading of
minor cracking. Using the adopted limits, the strain field at the time of maximum deflection is presented
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 97	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 97	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 97

-- 117 of 333 --

in Tables 9.5 and 9.6 for Series-1 and Series-2, respectively. For further information concerning the
dynamic response, refer to Appendix F.6, where the strain field of each beam is presented at certain
times until the time of maximum deflection.
Table 9.5 Strain field for beams of Series-1 at the time of maximum deflection.
Deflection /
Time Strain field at maximum deflection due to impact loading
Beam B-01
푢 = 10.5 mm
푡 = 5.6 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_56
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 2 .2 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
Beam B-02
푢 = 11.0 mm
푡 = 6.0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_60
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 5 4 .2 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
Beam B-03
푢 = 10.4 mm
푡 = 5.4 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_54
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 1 6 .4 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
Beam B-10
푢 = 10.5 mm
푡 = 6.0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_60
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 1 .8 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
Beam B-11
푢 = 11.2 mm
푡 = 6.4 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_64
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 7 .0 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
Beam B-12
푢 = 10.7 mm
푡 = 6.4 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_64
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 7 8 .8 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
Principal Strain
[%]
Most beams of Series-1 exhibit a similar strain field at the time of maximum deflection in that a major
bending crack is found at the bottom edge at midspan, below the impact region, for most beams. A
significant exception to this is the response of B-11, for which a more distributed cracking at the bottom
at midspan is observed. Coincidentally, B-11 is also the beam which exhibits the largest deflection and
the longest duration to maximum deflection.
Additionally, indications of cracking at the bottom edge can be seen along the span further away from
midspan for all specimens of Series-1. In general terms, and as far as the available information permits,
it can be stated that the strain field shows a relatively good degree of symmetry, where indications of
equivalent cracks can be found at both sides of the major bending crack at midspan.
Stronger indications of cracking can be measured for beams of Series-2, as can be seen in Table 9.6, due
to the higher external energy exerted by the drop-weight impact. Similarly to Series-1, an important
flexural crack can usually be distinguished at the bottom edge at midspan, although the magnitude of the
98 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	98 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	98 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 118 of 333 --

strains varies significantly. This flexural crack is more pronounced in B-05 and B-14, while only the
outline of a distributed cracked region is observed at the same location in B-04 and B-06.
Furthermore, more pronounced inclined shear cracks below the impact region are found for beams of
Series-2 compared to Series-1. It is also noted that the dynamic strain field exhibits in general a less
symmetrical pattern for beams of Series-2.
An important observation is the occurrence of an inclined shear crack originating in the web at a certain
distance from the midpoint in beams B-13 and B-15, though the length and width of such a crack are
visibly larger for B-13. The slope of the inclined cracks at midspan appear to be steeper and the extension
of the cracked area below the impact zone seems to be shorter for these two beams compared to the other
specimens. This phenomenon could indicate that the presence of an important shear crack at a distance
away from midspan influences and limits the spread of cracking at midspan during impact loading.
No reasonable relationship between the cracking pattern in Table 9.6 and the maximum displacement
can be found. B-13, for instance, exhibits the largest maximum deflection, while B-15 which shows a
fairly similar cracking response, showed the second smallest maximum deflection.
Table 9.6 Strain field for beams of Series-2 at the time of maximum deflection.
Deflection /
Time Strain field at maximum deflection due to impact loading
Beam B-04
푢 = 20.4 mm
푡 = 7.6 ms
G enerated with G O M C orrelate 2 0 1 6
1 3 /1 3
t_76
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 1 .2 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
Beam B-05
푢 = 20.6 mm
푡 = 8.2 ms
G enerated with G O M C orrelate 2 0 1 6
1 5 /1 5
t_82
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 2 6 .4 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
Beam B-06
푢 = 20.0 mm
푡 = 7.8 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_78
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 0 .4 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
Beam B-13
푢 = 20.9 mm
푡 = 8.2 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_82
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 2 .4 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
Beam B-14
푢 = 19.0 mm
푡 = 8.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_80
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 3 .0 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
Beam B-15
푢 = 19.8 mm
푡 = 7.6 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_76
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 1 .4 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
Principal Strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 99	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 99	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 99

-- 119 of 333 --

9.1.6 Deformed shape of the beam
Studying the variation of the deformed shape of the beam over time after impact loading is also of interest.
This information can be collected from the DIC analysis by creating a single section along the longitudinal
center line of a given specimen in GOM Correlate. Due to the large amount of information collected for
just one single specimen, it was decided to choose one reference beam for each drop-height (instead of
calculating average values from the results for all beams). The reference beams, which should exhibit
a response the closest to the average values, were selected according to the midpoint deflection-time
data. Beams B-06 and B-12 were chosen as representative for drop-heights ℎ = 5.0 m and ℎ = 2.5 m,
respectively. The deformed shape of B-06 is detailed in this subsection, whereas information regarding
B-12 is presented in Appendix F.2.
Figure 9.5 shows the deformed shape of beam B-06 during the first 2 milliseconds after impact. It can
clearly be seen that only a small portion of the beams deflects a short time after impact. In fact, at
푡 = 0.2 ms, about 300 mm of the beam show signs of deflection. The rest of the beam serves as a restraint
for the deflected inner portion, and the beam behaves in a similar manner as a double-fixed beam with a
shorter span. The negative curvature arising in the transition between active portion and the inactive
portion leads to cracking at the top side of the beam.
A change of curvature close to the impact region is also visible. This sudden change corresponds with
the inclined shear crack present in the impact region.
-2
0
2
4
6
8
10
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Deflection,
 u [mm]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure 9.5 Deformed shape of beam B-06 at different times after impact. B-06 is assumed to be
representative of the behavior of beams subjected to 5.0 m drop-weight impact.
The relative deflection of B-06 is illustrated in Figure 9.6. The information was adjusted correspondingly
to negate any deflection over the support, while maintaining the difference in deflection between the
100 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	100 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	100 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 120 of 333 --

support and any other point along the span. Moreover, all values of deflection were normalized in relation
to the corresponding maximum deflection at all times considered.
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Relative Deflection [-]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure 9.6 Relative deformed shape of beam B-06 at different times after impact. B-06 is assumed to
be representative of the behavior of beams subjected to 5.0 m drop-weight impact.
Figure 9.6 shows that the beam adopts a triangular deformed shape only after approximately 2.0 ms
have elapsed. This behavior is in conflict with the assumption of a deformed triangular shape adopted
in Section 4.3.2 for the determination of transformation factors for a beam element when ideal plastic
response is adopted.
9.1.7 Conclusions
No significant difference can be detected regarding the dynamic response between specimens from
different batches, regardless of the drop-height. As a consequence, the average midpoint deflection-time
curves are considered to represent a characteristic response for both Series-1 and Series-2, respectively.
Furthermore, it was noticed that the initial predictions made by the 2DOF model seem to overestimate
the resulting deflection, this topic is addressed further in Section 9.6.3.
Comparison of the strain fields due to the impact event between the results from (Lovén and Svavarsdóttir,
2016) and the results gathered in this project indicates that recording the entire beam while maintaining
the same frame rate and resolution results in a loss of information. As a consequence, detailing the
initiation and location of cracks becomes difficult and especially so for minor cracks, as random noise in
the strain field may be misinterpreted as minor cracks. It is possible, however, to detect cracked regions
corresponding to major cracks.
The analysis of the strain field due to impact loading for beams of Series-1 at the time of maximum
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 101	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 101	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 101

-- 121 of 333 --

deflection indicates that the major cracks which form at midspan are of a flexural nature and tend to
spread following a vertical path; whereas a stronger presence of inclined shear cracks below the impact
zone is noticed for Series-2. Furthermore, indications of web shear cracks have also been noted for some
specimens of Series-2.
When studying the deformed shape over time for B-06, it was observed that only a portion of the
beam deflects shortly after the impact event. Eventually, the entire beam becomes active in the dynamic
response, as the beam shows a triangular shape corresponding to plastic response at 푡 = 2.0 ms. Moreover,
good correspondence between the cracking pattern for the reference beam in (Lovén and Svavarsdóttir,
2016) and the deformed shape was found, such as crack occurrence at the top edge shortly after impact
in the region of transition between active and inactive portions, and indications of inclined cracking at
the impact region.
9.2 Static Tests
9.2.1 General introduction
After the impact loading tests were carried out, the damaged beams of Series-1 and Series-2 were brought
to failure by means of deformation-controlled static three-point loading. The undamaged beams of
Series-3 were also loaded to failure by the same procedure, and would serve as a reference to determine
residual rotational capacity for the previously damaged beams of Series-1 and Series-2.
This section presents results from the static testing. The behavior of the beams from each series is
studied with respect to each other and in between batches in terms of load-deflection data. Thereafter,
the rotational capacity of all beams is determined and presented. The calculations of plastic rotation
at a given load percentage 휃푝푙,푥% is performed in accordance to what has been previously described in
Section 5.3.4 and is schematically shown in Appendix F.3.2.
9.2.2 Load-deflection results: Series-3
Figure 9.7 presents load-deflection curves for beams of Series-3, where a comparison between the two
batches is made. Additionally, Figure 9.8 presents the average load at a given deflection together with the
maximum and minimum values registered among all specimens in Series-3. Important values gathered
and calculated are also presented in Table 9.7. For full overview of key parameters, refer to Appendix
F.4.3.
The beams of the first batch in Figure 9.7 exhibit a response which is closer to the average curve and
are overall better distributed, while beams of the second batch show a more erratic response between
beams after ultimate load has been reached. Noticeably so for beams B-16 and B-17, for which signs of
extensive concrete crushing can be observed, marked by a steep drop at the point of ultimate load. This
generally results in a lower rotational capacity 휃푝푙,푥% for a load level of 95 % of the peak load (and lower),
as can be seen for beams B-16 and B-17 in Table 9.7. However, the response of the beams of the second
batch approach the average curve from both sides; hence, no consistent pattern between batches can be
noted.
102 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	102 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	102 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 122 of 333 --

Figure 9.7 Load vs deflection for beams of Series-3 (undamaged beams). Beams from the first batch
are listed in the upper part of the legend box, while beams from the second batch are listed
in the lower part.
0
5
10
15
0 	10 	20 	30 	40 	50 	60
Load,
 F [kN]
Deflection, u [mm]
Average
F
u
Figure 9.8 Outer envelopes and average values of load-deflection curves for beams of Series-3.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 103	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 103	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 103

-- 123 of 333 --

Table 9.7 Average key parameters gathered and calculated based on load-deflection plots for Series-3.
Stiffness parameter, 푘, has been determined as a state II stiffness.
Beam-ID 푢푓 푎푖푙,푠
[mm]
푘
[kN/mm]
퐹100%
[kN]
휃푝푙,100%
[mrad]
휃푝푙,95%
[mrad]
휃푝푙,90%
[mrad]
휃푝푙,80%
[mrad]
B-07 48.4 2.0 13.7 20.5 34.1 40.4 77.1
B-08 - 2.2 13.9 20.0 25.7 37.8 77.9
B-09 52.9 2.4 14.1 22.1 34.4 48.3 92.1
Average 50.7 2.2 13.9 20.9 31.4 42.2 82.3
B-16 55.9 2.2 14.5 18.2 21.3 30.1 35.7
B-17 51.0 2.4 13.8 18.9 19.9 20.6 85.1
B-18 51.6 2.2 14.1 38.4 49.8 56.1 86.6
Average 52.8 2.3 14.1 25.2 30.3 35.6 69.1
Average
all beams 51.6 2.2 14.0 23.0 30.9 38.9 75.7
9.2.3 Load-deflection results: Series-1
Figure 9.9 shows load-deflection plots from static tests for beams of Series-1. Key values gathered and
calculated from the results of the static testing are presented in Table 9.8. For more extensive results
regarding key parameters, refer to Appendix F.4.1.
According to information in Figure 9.9, the beams deformed elastically until the onset of yielding. From
that point on, there is a gradual increase of the load capacity which corresponds to a response in state III.
This is more noticeable for some specimens, such as B-03, B-10 and B-12. Thereafter, the load required
to further deform the beam decreases until steel rupture is reached. Some specimens show a sudden drop
of load capacity after peak load; for instance, B-02 and B-03.
Similarly to what has been deduced in Section 9.1.3, a scatter of results can be noticed between beams in
Figure 9.9; however, no definitive conclusion can be drawn regarding whether the response of the beams
from one batch differs from the other. This is further strengthened by the results presented in Table 9.8.
The static response of the beams from Series-1 are therefore regarded to behave independently of the
concrete batch they were cast from.
104 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	104 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	104 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 124 of 333 --

Figure 9.9 Load vs deflection for beams of Series-1. The beams had previously been subjected to a
2.5 m drop-weight impact. Beams from the first batch are listed in the upper part of the
legend box, while beams from the second batch are listed in the lower part.
Table 9.8 Key parameters recorded and calculated for Series-1. The recorded deflection at which a
reinforcement bar ruptures is denoted 푢푓 푎푖푙,푠; the linear elastic material stiffness is given by
푘; and the permanent plastic rotation caused by impact is referred to as 휃푝푙,푖푚푝.
Beam-ID 푢푓 푎푖푙,푠
[mm]
푘
[kN/mm]
퐹100%
[kN]
휃푝푙,푖푚푝
[mrad]
휃푝푙,100%
[mrad]
휃푝푙,95%
[mrad]
휃푝푙,90%
[mrad]
휃푝푙,80%
[mrad]
B-01 43.1 2.1 13.6 8.2 8.2 25.3 39.2 -
B-02 - 2.1 14.1 10.0 19.5 29.0 42.2 59.7
B-03 36.9 2.3 14.7 9.4 12.9 15.3 26.0 -
Average 40 2.2 14.1 9.2 13.6 23.2 35.8 59.7
B-10 39.0 2.2 14.0 10.2 12.0 21.1 44.1 -
B-11 47.0 1.9 13.3 8.6 20.8 26.9 34.0 80.2
B-12 40.2 2.2 14.0 9.4 8.8 17.0 19.7 59.8
Average 41.2 2.1 13.8 9.4 13.8 21.6 32.6 70.0
Average
all beams 40.6 2.1 13.9 9.3 13.7 22.4 34.2 66.6
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 105	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 105	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 105

-- 125 of 333 --

9.2.4 Load-deflection results: Series-2
Figure 9.10 presents load-deflection graphs gathered from three-point static loading for beams of Series-2.
Table 9.9 presents a summary of important values for each batch gathered from the load-deflection plots,
refer to Appendix F.4.2 for more extensive results regarding the presented key parameters.
Most of the beams in Series-2 show a similar response, where a linear deformation is observed until
yielding load is reached. From that point on, the load required to deform the specimens decreases slightly.
This behavior resembles the elasto-plastic response described in Section 2.2.4, where a plateau can
clearly be distinguished after maximum peak load has been reached. Beam B-15, however, shows a
sudden drop in the load capacity when the midpoint deformation is approximately 30 mm.
A remarkable exception to the description in the previous paragraph is beam B-13, which is observed to
fail abruptly at a significantly low load level. It was concluded that the beam developed a shear failure
mechanism which gave rise to the brittle failure. Since beam B-13 exhibited a different failure mode, it
was excluded when calculating average values for the key parameters presented in Table 9.9. Ultimately,
no definitive distinction can be made between batches for statically loaded beams of Series-2.
Figure 9.10 Load vs deflection for beams of Series-2. The beams had previously been subjected to a
5.0 m drop-weight impact. Beams from the first batch are listed in the upper part of the
legend box, while beams from the second batch are listed in the lower part. Failure due to
shear was noted in B-13.
106 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	106 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	106 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 126 of 333 --

Table 9.9 Key parameters recorded and calculated for Series-2. The recorded deflection at which a
reinforcement bar ruptures is denoted 푢푓 푎푖푙,푠; the linear elastic material stiffness is given by
푘; and the permanent plastic rotation caused by impact is referred to as 휃푝푙,푖푚푝.
Beam-ID 푢푓 푎푖푙,푠
[mm]
푘
[kN/mm]
퐹100%
[kN]
휃푝푙,푖푚푝
[mrad]
휃푝푙,100%
[mrad]
휃푝푙,95%
[mrad]
휃푝푙,90%
[mrad]
휃푝푙,80%
[mrad]
B-04 - 1.6 12.3 26.0 22.1 37.5 81.1 102.7
B-05 50.0 1.5 12.0 25.6 15.8 65.3 79.5 -
B-06 49.3 1.8 13.1 25.4 11.2 44.8 81.7 -
Average 49.7 1.6 12.5 25.7 16.4 49.2 80.8 102.7
B-131 12.9 1.4 8.5 26.6 0.7 6.9 7.5 8.5
B-14 56.6 1.8 13.5 23.4 9.1 26.6 58.6 99.6
B-15 52.3 1.7 13.2 23.4 12.1 44.6 50.2 79.5
Average 54.5 1.8 13.4 24.5 10.6 35.6 54.4 89.5
Average
all beams 56.5 1.7 12.8 25.1 14.1 43.8 70.2 93.9
1 The beam developed a shear failure mechanism; it is not factored in the calculations of average
values.
9.2.5 Conclusions
In general, no significant difference is observed between specimens of the same series cast from different
batches, although specimens of the first batch for Series-3 were somewhat better distributed with respect
to the average curve than the beams of the second batch. However, it is concluded that the structural
response of the beams of a given series is fairly well represented by the average values calculated from
the results of the beams of said series.
It is noted that a steep drop due to excessive concrete crushing can lead to reduced rotational capacities
at a given load percentage; however, such beams do not necessarily deflect less before reaching steel
rupture despite small rotational capacities at, for instance, 휃푝푙,80%. This observation can be seen to happen
for B-16 in Table 9.7.
An important observation for Series-2 is that such beams exhibit, on average, steel rupture (that is, higher
values of 푢푓 푎푖푙,푠) at a later stage than the undamaged reference beams. The difference between testing
Series-2 and Series-3 increases when considering permanent deflection due to impact for Series-2; this
topic is addressed further in Section 9.3.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 107	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 107	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 107

-- 127 of 333 --

9.3 Comparison of Static Response of Impact-loaded Beams and
Undamaged Beams
9.3.1 Introduction
In this section, the residual static response of previously dynamically loaded beams is compared with the
static response of the undamaged beams of Series-3. The response of the undamaged beams is represented
by the average load-deformation curve and the outer envelopes, and the comparisons of load-deflection
curves are made batch-by-batch for the sake of clarity and interpretable results. Furthermore, the curves
have been adjusted in order to account for the plastic deformation due to impact by shifting the curves of
damaged beams accordingly.
9.3.2 Comparison of Series-1 and Series-3
Figure 9.11 presents the adjusted load-deflection curves of Series-1, batch 1, together with the average
values and outer envelopes gathered from Series-3. Similarly, results are also shown for batch 2 in
Figure 9.12.
Figure 9.11 Comparison of load-deflection curves of Series-1, batch 1, with average curve of Series-3.
Curves of Series-1 have been adjusted to consider plastic deformation due to impact.
The linear-elastic response of Series-1 shows similar stiffness compared to the response of the undamaged
beams from the initiation of cracking to the onset of yielding, which can be further verified when
comparing values presented in Tables 9.7 and 9.8. Generally, the dynamically loaded beams exhibit a
linear-elastic response until the load-deflection curve reaches the average curve of undamaged beams;
at this point, non-linear behavior resumes with a response which is within the boundaries of the outer
108 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	108 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	108 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 128 of 333 --

envelopes of the undamaged beams. The load increases until reaching ultimate load, where it can be
observed that the ultimate load capacity of the specimens has not been affected greatly due to impact
loading. As a matter of fact, the information stated in Tables 9.7 and 9.8 shows that the average maximum
load is, in practical terms, equal for impact-damaged and undamaged beams.
Visually, it can be seen that the deflection at which steel rupture takes place is on average lower for
beams of Series-1, even when factoring in permanent plastic deformation due to impact. This indicates
that rotational capacities at low load levels, such as 휃푝푙.80%, may not be registered, something which can
be noted for some specimens when examining Table 9.8.
Figure 9.12 Comparison of load-deflection curves of Series-1, batch 2, with average curve of Series-3.
Curves of Series-1 have been adjusted to consider plastic deformation due to impact.
9.3.3 Comparison of Series-2 and Series-3
Comparison of load-deflection curves between Series-2 and Series-3 with adjusted deflection due to
plastic deformation is presented in Figure 9.13 for specimens of batch 1, and in Figure 9.14 for beams of
batch 2.
The linear-elastic response of impacted beams in Series-2 is less stiff on average, which can be verified by
key values presented in Tables 9.7 and 9.9. This behavior can be related to the fact that the cross-sectional
area of the beams has decreased due to deterioration of the concrete after impact loading.
Similarly to what was noted when comparing Series-1 and Series-3, the linear elastic response of the
beams of Series-2 continues until meeting the descending branch of the average curve for undamaged
beams. Notice that, due to plastic deformation from impact loading, the load-deformation curves for
damaged beams meet the curve for the undamaged specimens after ultimate load has been reached.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 109	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 109	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 109

-- 129 of 333 --

Moreover, the static load capacity of the damaged specimens of Series-2 has been reduced approximately
9 % on average due to impact loading. Additionally, large deflections are registered for practically
constant values of load until steel rupture occurs for most specimens, as opposed to the gradual reduction
of load capacity after peak load for specimens of Series-1 and Series-3.
Two important observations can be discussed. Firstly, the deflection at which steel rupture takes places,
푢푓 푎푖푙,푠, is larger for all impact-damaged specimens – apart from B-13 – than for undamaged specimens.
This indicates that the beams subjected to a drop-weight impact from ℎ = 5.0 m can be expected to have
a plastic rotational capacity, after considering the plastic deformation due to drop-weight impact, that
supersedes that of the undamaged beams.
Secondly, the decrease of the load required to deform the beam after peak load appears to be less
pronounced for beams of Series-2 than for undamaged specimens. As discussed in Section 9.2.4, the
beams of Series-2 exhibit a behavior similar to elasto-plastic response.
Figure 9.13 Comparison of load-deflection curves of Series-2, batch 1, with average curve of Series-3.
Curves of Series-2 have been adjusted to consider plastic deformation due to impact.
110 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	110 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	110 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 130 of 333 --

Figure 9.14 Comparison of load-deflection curves of Series-2, batch 2, with average curve of Series-3.
Curves of Series-2 have been adjusted to consider plastic deformation due to impact.
9.3.4 Conclusions
The linear elastic stiffness exhibited by specimens of Series-1 corresponds fairly well with measured
stiffness values gathered for Series-3, whereas the stiffness of beams of Series-2 was approximately 20 %
lower. A possible reason to this phenomenon could be the loss of material and consequently reduction in
cross-sectional area caused by impact loading; another contributing factor could be that the concrete
close to the impact region was subjected to significantly large compressive strains, which might result in
the reduction of the concrete secant modulus when loading the impacted beams statically.
Trends regarding ultimate load, 퐹100%, showed that specimens of Series-2 exhibited a 9 % reduction of
static load capacity compared to Series-3, while beams of Series-1 showed similar average values of
load capacity in relation to Series-3.
The beams of Series-2 are able to deform further before reaching failure of the reinforcement bars than
the undamaged specimens of Series-3.
9.4 Plastic Rotational Capacity
9.4.1 Introduction
This section details the measured plastic rotational capacity of both the undamaged and impact-damaged
beams after static loading, where the permanent plastic rotation caused by impact loading, 휃푝푙,푖푚푝, is also
taken into account. Refer to Section 5.3.4 for information regarding the method used to calculate rotational
capacity at a given load percentage, 휃푝푙,푥%. Thereafter, the measured values of rotational capacity are
compared to the rotational capacity predicted by the different methods described in Section 5.4.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 111	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 111	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 111

-- 131 of 333 --

9.4.2 Results
Figure 9.15 provides with a summary of average values of rotational capacity at a given percentage, 휃푝푙,푥%,
per batch for all series. Furthermore, average values of 휃푝푙,푥% per series are presented in Figure 9.16.
Refer to Appendix F.5.1 for complete information regarding 휃푝푙,푥% for all beams.
It is noted in Figure 9.15 that no typical pattern can be distinguished when comparing values of 휃푝푙,푥%
between batches for a given series. Therefore, the average values presented in Figure 9.16, where the
results for the two batches are combined, are regarded as representative for the response of a given load
series.
0
20
40
60
80
100
120
140
160
1 	2 	1 	2 	1 	2
Rotational capacity
 θpl,x%
 	[mrad]
Batch number
100%
95%
90%
80%
Series-1: h = 2.5m 	Series-2: h = 5.0 m 	Series-3: Static only
Figure 9.15 Plastic rotational capacity with respect to a given load percentage, average values for
specimens within a batch and testing series. The upper value indicated by the gray bar for
Series-1 and Series-2 accounts for the permanent plastic rotation due to impact, 휃푝푙,푖푚푝.
9.4.2.1 Comparison of Series-1 with Series-3
When comparing values of 휃푝푙,100% in Figure 9.16, it is observed that Series-1 exhibit similar values for
all load levels compared to Series-3. This indicates that the impact-loaded beams tend to conserve the
total rotational capacity available for undamaged specimens.
As stated in Section 9.3.2, the response of the specimens of Series-1 conforms to the undamaged response
when the load-deformation curves meet. The results indicate that the residual rotational capacity of beams
subjected to a drop impact from ℎ = 2.5 m can be determined by subtracting the permanent rotation due
to impact from the total rotational capacity at a given load level of undamaged specimens.
However, only three out of six beams registered values for 휃푝푙,80% before steel rupture occurs, while all
beams in Series-3 reached a load level of 80 % after peak load. The smaller sample size regarding 휃푝푙,80%
112 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	112 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	112 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 132 of 333 --

in Series-1 indicates that the dynamic loading might influence the total ductility of impact loaded beams.
0
20
40
60
80
100
120
140
160
Rotational capacity
 θpl,x%
 	[mrad]
 
100%
95%
90%
80%
Series-1: h = 2.5m 	Series-2: h = 5.0 m 	Series-3: Static only
Figure 9.16 Plastic rotational capacity with respect to a given load percentage, average values for all
specimen within a testing series. The upper value indicated by the gray bar for Series-1
and Series-2 accounts for the permanent plastic rotation due to impact, 휃푝푙,푖푚푝.
9.4.2.2 Comparison of Series-2 with Series-3
The difference in values of 휃푝푙,푥% becomes more significant between Series-2 and Series-3, as specimens of
Series-2 possess an increased rotational capacity compared to undamaged specimens. This phenomenon
is related to the structural response described in Section 9.3.3. The impact-damaged beams deform
linear-elastically until they reach the load-deformation curve of the undamaged specimen. From that
point on, the response reaches a plateau and the load capacity start to decrease at a slow rate, resulting in
larger measurements of deflection, particularly so for load levels lower than peak load.
Therefore, the impact event seems to trigger a response which enables the beams of Series-2 to plastically
deform beyond their undamaged counterparts. A possible explanation could be related to the more
extended cracking pattern which arises due to dynamic loading, which would allow for a longer portion
of reinforcement steel to yield. This is further studied in Section 9.5. It should be noted that only for
three out of five beams that failed in bending it was possible to determine values of 휃푝푙,80% before rupture
of steel occurred; while one of the beams failed in an abrupt and brittle shear failure. This implies that
휃푝푙,80% may not be a reliably measurement for impact-loaded beams, as only few specimens would reach
that level.
9.4.3 Internal work
The plastic rotational capacity of a given concrete beam is related to its capacity to absorb energy when
subjected to a certain load. For this reason, it is of interest to determine the internal work in the specimens
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 113	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 113	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 113

-- 133 of 333 --

for different load levels, and compare such values to their respective rotational capacity. The internal
work can be calculated as the area below the curve if the load-deformation relationship of the structure
due to an external load is known. This procedure was briefly introduced in Section 3.2, though the
internal work in impulse loaded structures was treated there. The total internal work, 푊푖,푡표푡, determined
for all beams, as well as the accumulated internal work, 푊푖,푥%, for different load levels on the descending
branch of the load-deformation relationship, are presented in Appendix F.5.2. Observe that the internal
work was determined for static loading for all specimens.
Furthermore, a comparison of 푊푖,푥% to 휃푝푙,푥% is also made by introducing the ratio 푊푖,푥%∕휃푝푙,푥% for given
load levels for all specimens; the average results for all series are presented in Figure 9.17. It can be
observed that the proportion of internal work to rotational capacity decreases for lower load levels (after
peak load has been reached) for all series. This indicates that, even though the rotational capacity of the
specimens is larger for lower levels, the capacity to absorb energy in relation to the rotation capacity
decreases.
0
2
4
6
8
10
12
Wi,% / θpl,x%
 [J/mrad]
100%
95%
90%
80%
Series‐1: h = 2.5m 	Series‐2: h = 5.0 m 	Series‐3: Static only
Figure 9.17 Average values of the ratio 푊푖,푥%∕휃푝푙,푥% for all series at a given load level. Plastic rotation
due to impact, 휃푝푙,푑푦푛, is not taken into account.
The calculated ratios for Series-1 and Series-3 show similar values, apart from the values for maximum
load. The difference for 100 % is due to the fact that the specimens of Series-1 deform with a stiffness
equivalent to stiffness in state II from the beginning of loading. However, as the static loading progresses
and the response of Series-1 conforms to the response of the undamaged specimens, the influence of the
differences in deformation in the elastic range becomes less relevant. Thereafter, the difference in values
of 푊푖,푥%∕휃푝푙,푥% between the two testing series diminishes for subsequent load levels. This indicates that
a comparison of the deformation capacity between specimens of Series-1 and Series-3 based solely on
the plastic rotational capacity, 휃푝푙,푥%, is consistent and acceptable.
However, the results in Figure 9.17 point to significant differences between Series-2 and Series-3. Except
114 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	114 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	114 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 134 of 333 --

for a load level of 100%, the ratio 푊푖,푥%∕휃푝푙,푥% is consistently lower for Series-2, which indicates that
comparisons made for plastic rotational capacity between these two series may not result in a proper
assessment in terms of internal work. Moreover, it seems that the method used to determine rotational
capacity 휃푝푙,푥% for Series-2 yields an excessively large value for load levels of 95 % and less.
A new methodology for calculation of the rotational capacity from experimental results where the
maximum load level (used as a basis to calculate different load levels) corresponds to the average
load capacity of undamaged specimens, as described schematically in Figure 9.18, might give a better
description of the deformation capacity of the specimens of Series-2. In that sense, the blue column in
Figure 9.17 for Series-2, for instance, would not correspond to 100 %, but to a lower percentage of the
average maximum load measured in undamaged specimens, considering that the load capacity of the
beams of Series-2 is lower than that of undamaged specimens. This approach could be more reliable,
since, even though specimens of Series-2 can deform to a larger extent, the load needed to exert such
deformation is lower compared to the undamaged specimens.
F100%
ua 	ub u
F
F 80%
u 80%
<F 100%
Figure 9.18 Schematic illustration of an alternative method for determining the deformation of impact-
damaged beams at a given load level based on the average response of undamaged beams.
The linear elastic stiffness used to determine the plastic deformation is based on the state
II stiffness of the average undamaged response.
9.4.4 Conclusions
Comparison of Series-1 beams against undamaged beams indicates that the plastic rotational capacity is
conserved for such impact scenario. Therefore, the residual rotational capacity can be determined by
deducting permanent plastic rotation due to impact from the rotational capacity available for undamaged
specimens. However, the rotational capacity was observed to increase when comparing Series-2 against
undamaged beams. The impact scenario seems to trigger a response that allows for damaged beams to
rotate to a greater extent than their undamaged counterparts.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 115	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 115	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 115

-- 135 of 333 --

In the assessment of 푊푖,푥%∕휃푝푙,푥%, it was concluded that measurements of rotational capacity between
Series-1 and Series-3 provided with a fair comparison in terms of internal work generated between the
two testing series for load levels below 100%. However, rotational capacities between Series-2 and
Series-3 may not result in accurate comparisons in terms of internal work, since the response in terms of
load capacity and behavior differs.
9.5 DIC Analysis of Static Tests
9.5.1 Overview
The cracking pattern observed during static loading of the specimens is discussed in this section. The
principal strain field has been determined on GOM Correlate 2016 by adopting a facet size of 10 pixels,
a point distance of 15 pixels, and a standard computation method.
A summary of the cracking pattern for all specimens is presented at a load level equivalent to 95 % of
the peak load, 퐹95%, after peak load has been reached. It was decided to display the crack pattern at
this load level as it was found that generally no new cracks were formed beyond this stage; instead, the
already existing cracks would continue growing in size. Refer to Appendix F.6 for complete information
concerning the strain field of all beams, and to Appendix F.7 for details regarding the structural response
and crack pattern at given load levels for certain beams.
116 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	116 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	116 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 136 of 333 --

9.5.2 Crack patterns of Series-3
The cracking pattern for beams of Series-3 is presented in Table 9.10 as reference for comparison with
the strain field obtained for impact-damaged beams. Vertical flexural cracks and inclined flexural shear
cracks can be observed along the span for all specimens. The extension of the cracking region and the
numbers of cracks seem to be consistent among most specimens.
Table 9.10 Strain field for beams of Series-3 during static loading at a load level of 95 % of the maximum
load, 퐹95%, after maximum load has been reached.
Deflection/Load Strain field due to static loading
B-07
푢95% = 29.4 mm
퐹95% = 12.4 kN
G enerated with G O M C orrelate 2 0 1 6
4 /6
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+23.494 mm	
Load
DIM 	+12.976 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 5 	G eometry referenc e: 1
O riginal alignment
B-08
푢95% = 19.0 mm
퐹95% = 13.2 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.650 kN
Displacement
DIM 	+19.041 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 9 	G eometry referenc e: 1
O riginal alignment
B-09
푢95% = 22.8 mm
퐹95% = 13.4 kN
G enerated with G O M C orrelate 2 0 1 6
5 /7
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+13.962 kN
Displacement
DIM 	+22.774 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 9 	G eometry referenc e: 1
O riginal alignment
B-16
푢95% = 16.8 mm
퐹95% = 13.8 kN
G enerated with G O M C orrelate 2 0 1 6
5 /
95
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+16.612 mm	
Load
DIM 	+14.001 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 1 	G eometry referenc e:
O riginal alignment
B-17
푢95% = 15.4 mm
퐹95% = 13.1 kN
G enerated with G O M C orrelate 2 0 1 6
5 /
95
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+15.456 mm	
Load
DIM 	+14.056 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 7 	G eometry referenc e:
O riginal alignment
B-18
푢95% = 31.1 mm
퐹95% = 13.4 kN
G enerated with G O M C orrelate 2 0 1 6
5 /7
95
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+31.097 mm
Load
DIM 	+13.644 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 1 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 117	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 117	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 117

-- 137 of 333 --

9.5.3 Crack patterns of Series-1
Table 9.11 shows the cracking pattern for specimens subjected to an impact from a drop-height equal to
ℎ = 2.5 m. In contrast to specimens of Series-3, some beams of Series-1 exhibit inclined cracking in the
area close to the point of load application. Moreover, the cracks in the region between midspan and the
support show a larger rotation than observed for undamaged specimens. The emerging crack pattern
is mostly the result of cracks reopening; these cracks had previously been initiated by the drop-weight
impact event, this is covered further in Appendix F.7. This indicates that the previous damage due
to impact loading governs to some extent the cracking response of the beams when loaded statically.
However, some specimens, such as B-03 and B-10, still show vertical flexural cracks in the midspan
region, in a similar way to the cracking pattern observed for undamaged beams in Table 9.10.
Table 9.11 Strain field for beams of Series-1 during static loading at a load level of 95 % of the maximum
load, 퐹95%, after maximum load has been reached.
Deflection/Load Strain field due to static loading
B-01
푢95% = 12.2 mm
퐹95% = 12.9 kN
G enerated with G O M C orrelate 2 0 1 6
2 /2
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 8 	G eometry referenc e: 1
O riginal alignment
B-02
푢95% = 20.9 mm
퐹95% = 13.4 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+13.513 kN
Displacement
DIM 	+20.808 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 9 	G eometry referenc e: 1
O riginal alignment
B-03
푢95% = 13.8 mm
퐹95% = 13.9 kN
G enerated with G O M C orrelate 2 0 1 6
4 /5
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+13.794 mm	Load
DIM 	+12.930 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 0 	G eometry referenc e: 1
O riginal alignment
B-10
푢95% = 16.6 mm
퐹95% = 13.3 kN
G enerated with G O M C orrelate 2 0 1 6
4 /5
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.622 kN
Displacement
DIM 	+16.698 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 8 	G eometry referenc e: 1
O riginal alignment
B-11
푢95% = 20.3 mm
퐹95% = 12.7 kN
G enerated with G O M C orrelate 2 0 1 6
4 /7
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	
Load
DIM 	+12.476 kN
Displacement
DIM 	+20.506 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 2 5 	G eometry referenc e: 1
O riginal alignment
B-12
푢95% = 14.7 mm
퐹95% = 13.3 kN
G enerated with G O M C orrelate 2 0 1 6
1 3 /1 3
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+14.703 mm	Load
DIM 	+13.644 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 1 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
118 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	118 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	118 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 138 of 333 --

9.5.4 Crack patterns of Series-2
The beams of Series-2 show a markedly different cracking pattern compared to the undamaged specimens.
Inclined cracks are more prominent in the midspan region, as shown in Table 9.12. Moreover, by visual
inspection, it appears that the total number of cracks is less than what can be seen for undamaged beams.
As was found for Series-1 beams, the crack pattern developed at 퐹95% is largely due to pre-existing cracks
initiated during the impact event which reopened during the static tests.
Important shear cracks are visible for specimens B-13 and B-15. For B-13, this shear crack limited the
extension of cracking at midspan and reduced the load capacity considerably. As described in Appendix
F.7, the shear crack in B-13 became the most critical with increased load levels, whereas the propagation
of the shear crack in B-15 halted as cracks close to the center became critical instead.
Table 9.12 Strain field for beams of Series-2 during static loading at a load level of 95 % of the maximum
load, 퐹95%, after maximum load has been reached.
Deflection/Load Strain field due to static loading
B-04
푢95% = 26.0 mm
퐹95% = 11.7 kN
G enerated with G O M C orrelate 2 0 1 6
5 /7
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+11.279 kN	
Displacement
DIM 	+26.079 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 2 7 	G eometry referenc e: 1
O riginal alignment
B-05
푢95% = 40.5 mm
퐹95% = 11.4 kN
G enerated with G O M C orrelate 2 0 1 6
4 /5
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	Displacement
DIM 	+40.485 mm	Load
DIM 	+11.594 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 7 3 	G eometry referenc e: 1
O riginal alignment
B-06
푢95% = 29.4 mm
퐹95% = 12.4 kN
G enerated with G O M C orrelate 2 0 1 6
2
Untitled
[%
0
0
0
1
1
1
2
2
2
3
Load
DIM 	+12.567 kN
Displacement
DIM 	+29.536 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 0 	G eometry referen
O riginal alignment
B-13
푢95% = 6.9 mm
퐹95% = 8.1 kN
G enerated with G O M C orrelate 2 0 1 6
9 /
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+6.926 mm	
Load
DIM 	+7.849 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 7 	G eometry referenc e:
O riginal alignment
B-14
푢95% = 20.4 mm
퐹95% = 12.9 kN
G enerated with G O M C orrelate 2 0 1 6
4 /6
95
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	
Load
DIM 	+12.729 kN
Displacement
DIM 	+20.502 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 1 	G eometry referenc e: 1
O riginal alignment
B-15
푢95% = 29.6 mm
퐹95% = 12.5 kN
G enerated with G O M C orrelate 2 0 1 6
4 /6
95
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+13.089 kN
Displacement
DIM 	+29.510 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 3 9 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 119	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 119	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 119

-- 139 of 333 --

9.5.5 Major cracking pattern
Important differences were noticed regarding the crack distribution at 퐹95% obtained through DIC analysis
in specimens of Series-2 compared with beams of Series-1 and Series-3. Therefore, certain beams were
selected from all test series to highlight differences found in crack patterns between series. In Table 9.13,
the crack pattern after static testing can be seen for the chosen beams. The cracks which can be visually
detected are assumed to be major cracks; and the reinforcing steel is most likely to yield to a higher
extent in the close proximity of these observable cracks. Refer to Appendix F.8 for photos of all beams
after static loading.
The cracks present in the beams of Series-1 and Series-3 exhibit a pattern which is similar to flexural
cracks, and are localized in the midspan region. As mentioned in Section 9.5.3, minimal signs of new
crack initiation due to static loading were observed, instead cracks due to impact loading reopened during
the static experiments. These results suggest that the cracks caused by an impact from ℎ = 2.5 m tend to
distribute in a similar manner to the undamaged cracking response. This is also in agreement with the
observations regarding the load-deformation curves described in Section 9.3.2; that is, beams of Series-1
and Series-3 appear to converge to a common response.
When studying the cracks present in Series-2 beams, the differences become more apparent. More major
cracks can be observed and these are distributed over a larger zone across the midspan region; moreover,
most cracks have propagated with a pronounced inclination. As stated in Section 9.5.4, no new crack
initiation took place due to static loading, instead reopening of already present cracks generated due
to impact loading was observed in the DIC analysis; this indicates that the crack initiation due to an
impact from ℎ = 5.0 m differs from the static cracking response of undamaged specimens. Furthermore,
the longer length along which the cracks are distributed is most likely the main reason as to why larger
plastic rotations are observed for Series-2 compared to Series-3 and Series-1, as this would allow for
more sections of reinforcement to yield, effectively increasing the plastic hinge length.
An attempt to produce DIC results indicating the presence of major cracks at 퐹95% was made, as presented
in Table 9.14 for the same selected beams listed in Table 9.13. Here, the upper limit of the colorscale has
been adjusted to 20 % instead of the previous limit of 3 %, as doing so hides the presence of minor cracks
in the principal strain field. These DIC results are similar to the photos taken of the specimens after
static testing shown in Table 9.13. The strain field for all beams are presented in Appendix F.7.5.
120 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	120 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	120 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 140 of 333 --

Table 9.13 Photographs of selected beams displaying the cracks present after static testing was per-
formed.
Series Beam-ID Crack pattern at the end of the static test
B-07	•
3 B-09- 	•
	• 	•
B-16•
	.. 	-	
•
-
B-02
l
E I
1 B-03
B-10I	
'' 	•	
.,
,,'
B-05
.. 	•
2 B-06
B-14
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 121	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 121	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 121

-- 141 of 333 --

Table 9.14 Strain field for selected beams during static loading at a load level of 95 % of the maximum
load, 퐹95%, after maximum load has been reached. The upper limit of the colorscale has
been adjusted to enhance the presence of major cracks.
Series Beam-ID Strain field due to static loading
B-07
[%]
0.2
2.0
4.0
6.0
8.0
10.0
12.0
14.0
16.0
18.0
20.0
Displacement
DIM 	+23.494 mm	
Load
DIM 	+12.976 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
O riginal alignment
3 B-09
8
Untitled
[%]
0.20
2.00
4.00
6.00
8.00
10.00
12.00
14.00
16.00
18.00
20.00
Load
DIM 	+13.962 kN
Displacement
DIM 	+22.774 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 9 	G eometry referenc e:
O riginal alignment
B-16
G enerated with G O M C orrelate 2 0 1 6
8 /
Untitled
[%]
0.20
2.00
4.00
6.00
8.00
10.00
12.00
14.00
16.00
18.00
20.00	
Load
DIM 	+14.001 kN
Displacement
DIM 	+16.612 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 1 	G eometry referenc e:
O riginal alignment
B-02
G enerated with G O M C orrelate 2 0 1 6
2 /2
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
Load
DIM 	+13.513 kN
Displacement
DIM 	+20.808 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 9 	G eometry referenc e: 1
O riginal alignment
1 B-03
G enerated with G O M C orrelate 2 0 1 6
7 /7
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
Load
DIM 	+12.930 kN
Displacement
DIM 	+13.794 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 0 	G eometry referenc e: 1
O riginal alignment
B-10
G enerated with G O M C orrelate 2 0 1 6
6
Untitled
[%]
0.2
2.0
4.0
6.0
8.0
10.0
12.0
14.0
16.0
18.0
20.0	Displacement
DIM 	+16.698 mm	Load
DIM 	+12.622 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 8 	G eometry referenc e
O riginal alignment
B-05
G enerated with G O M C orrelate 2 0 1 6
7 /7
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000	Displacement
DIM 	+40.485 mm	Load
DIM 	+11.594 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 7 3 	G eometry referenc e: 1
O riginal alignment
2 B-06
G enerated with G O M C orrelate 2 0 1 6
Untitled
Load
DIM 	+12.567 kN
Displacement
DIM 	+29.536 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 0 	G eometry refe
O riginal alignment
B-14
G enerated with G O M C orrelate 2 0 1 6
7
Untitled
[%]
0.2
2.0
4.0
6.0
8.0
10.0
12.0
14.0
16.0
18.0
20.0	
Load
DIM 	+12.729 kN
Displacement
DIM 	+20.502 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 1 	G eometry referenc e
O riginal alignment
Principal strain
[%]
122 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	122 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	122 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 142 of 333 --

9.6 Verification of Predictions
9.6.1 Overview
In this section, the response of the reinforced concrete beams as observed during both the impact-loading
and static experiments is compared with the predictions presented in Chapter 8. The objective is to
evaluate the accuracy and suitability of the different theoretical methods discussed previously.
9.6.2 Predicted load-deflection curve and load capacity
Figure 9.19 presents the average load-deflection curves obtained from static experiments of undamaged
beams of Series-3, together with the theoretical load-deflection curves determined for two different
values of yield stress, namely: the mean measured value, 푓푦 = 575 MPa, and adopting a value of yield
stress equal to the ultimate tensile stress, 푓푦 = 푓푡 = 686 MPa.
Good correspondence concerning the cracking load and the stiffness in state I is observed in Figure 9.19,
although with slight deviations from experimental curves. The experimental stiffness of the response
between cracking initiation and the onset of yielding is also accurately represented. However, the two
theoretical alternatives show an underestimation of the ultimate load. The overall non-linear response
after peak load is predicted to a good extent by the design curve determined using 푓푦 = 686 MPa, whereas
the assumed elasto-plastic response for 푓푦 = 575 MPa is deemed to be too conservative from visual
inspection.
A possible explanation for the underestimation of the load carrying capacity of the beams could be devi-
ations in the position of reinforcement bars assumed during calculations. As explained in Section 7.2.1,
there existed a possibility that the bars were displaced from their intended position during casting of
concrete. For that reason, after the impact-loading and static tests were completed, the specimens were
sawed in order to measure the correct position of the reinforcement bars.
The cut was performed as close as possible to midspan, where the largest deviation was expected.
Some specimens had been damaged considerably after the static tests and, therefore, were disregarded.
The average distance measured in the laboratory for both the top and the bottom layer is presented in
Figure 9.20. Further information for all specimens can be found in Appendix C. It can be noticed that
the top bars were lowered in average by 2 mm, while the bottom bars were displaced downwards 3 mm
in average.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 123	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 123	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 123

-- 143 of 333 --

Figure 9.19 Theoretical load-deformation curves for different values of yield stress against experimental
load-deformation curve.
d' = 22
4ϕ6
1180
[mm]
d = 83
Figure 9.20 Average values of measured distances from the center of the bars to the concrete surface.
Nominal values for 푑 and 푑® correspond to 20 mm and 80 mm respectively.
New calculations were performed considering the real position of the reinforcing steel, following the
same methodology as explained in Section 8.2. Table 9.15 shows the calculated value of load capacity
for the nominal and adjusted position of the bars. An increase of around 6 % can be observed. However,
as can be seen in Table 9.15, the calculations still lead to an underprediction of the load capacity.
124 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	124 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	124 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 144 of 333 --

Table 9.15 Moment and external force at Ultimate Limit State for different positions of the reinforcement
bars; compared with experimental average values gathered from Series-3.
푓푦푑
[MPa] Position 푀푢
[kN m]
퐹푢
[kN]
575 Nominal 2.7 10.7
Adjusted 2.8 11.3
686 Nominal 3.0 12.1
Adjusted 3.2 12.8
(a) Calculated load and moment capacities.
푀푢
[kN m]
퐹푢
[kN]
3.5 14.0
(b) Experimental static load
capacity from Series-3.
9.6.3 Dynamic behavior according to 2DOF model
The experimental dynamic response of the specimens gathered through DIC analysis is presented in
terms of deflection at midspan over time in Figure 9.21 together with the predictions made by the 2DOF
model, using 푓푦 = 575 MPa or 푓푦 = 686 MPa, for the two drop-heights. Here, the 2DOF response is
based on the nominal position of the reinforcement bars; furthermore, the internal resistance of the beam
in the 2DOF model has been simplified to a bi-linear response by adopting state-II stiffness from the
moment of load application to ultimate load, as previously explained in Section 8.4. Key parameters are
presented in Table 9.16.
Figure 9.21 Dynamic response according to the 2DOF model due to impact from h = 2.5 m and
h = 5.0 m, together with experimental average values gathered from DIC analysis for the
two drop-heights.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 125	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 125	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 125

-- 145 of 333 --

Table 9.16 Comparison of values of maximum deflection due to impact-loading calculated with a
2DOF model with the experimental results obtained through DIC analysis.
Results DIC
Series-1
푓푦
575 MPa
푓푦
686 MPa
푢푚푎푥
[mm] 10.7 15.1 13.9
Relative error
to DIC - 42 % 30 %
(a) Drop-height, ℎ = 2.5 m
DIC
Series-2
푓푦
575 MPa
푓푦
686 MPa
20.1 27.9 25.2
- 39 % 26 %
(b) Drop-height, ℎ = 5.0 m
The dynamic response predicted by the 2DOF model consistently overestimates the maximum deflection
for both drop-heights. This is inherently related to the underprediction of load capacity shown in
Table 9.15. As a result, the internal resistance for the beam in the 2DOF model is lower than in reality,
and therefore overprediction of deflection is to be expected. Furthermore, strain rate effects have not
been considered when predicting deflection over time with the 2DOF models. These effects would
dynamically enhance properties such as stiffness and strength of concrete as well as reinforcing steel,
which would affect the internal resistance function and result in reduction of the deflection estimated by
the 2DOF system.
The 2DOF model based on 푓푦 = 686 MPa shows a higher correspondence to average experimental
measurements from DIC analysis. This can be coupled to its internal resistance function, as a higher
load capacity is obtained for 푓푦 = 686 MPa than for 푓푦 = 575 MPa. Considering that the impact event is
identical and that the stiffness in the two prediction models is essentially the same, it can be concluded that
a higher theoretical load capacity would ultimately result in lower estimated values of deflection.
2DOF analyses were also performed where the calculation of the internal resistance of the beam was
based on the measured average distances to reinforcement bars in Figure 9.20. A comparison of the
maximum midpoint deflection between analyses with the nominal position and the adjusted position for
푓푦 = 575 MPa and 푓푦 = 686 MPa is presented in Table 9.17.
While a higher correspondence is found when using adjusted positions, the change is rather small.
However, the results indicate that if a good prediction of the load carrying capacity under static loading
is achieved, and such capacity is used as internal resistance of the beam in an equivalent 2DOF system, a
good prediction of the dynamic behavior could be possible.
Another important factor that could influence significantly the predictions obtained with the 2DOF model
corresponds to the assumptions adopted when choosing transformation factors to transform the beam
into an equivalent spring-mass system. In Section 4.3.2 it is stated that the mass transformation factor,
휅푚, depends on the deformed shape of the beam, and two values were derived for different responses,
as presented in Table 4.1. During calculations with the 2DOF system, it was assumed that the beam
undergoes plastic deformation and takes a triangular deformed shape from the beginning of loading.
However, as described in Section 9.1.6, only a portion of the beam reacts shortly after impact, and
only after approximately 2 ms does the beam exhibit a triangular shape. These results show that mass
participation increases gradually after impact, and low values of mass are to be expected at the beginning
126 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	126 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	126 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 146 of 333 --

of the response. In that sense, assuming a constant mass transformation factor during the entire event
could lead to incorrect prediction of the response.
Table 9.17 Deformation according to 2DOF system considering the adjusted position of the reinforce-
ment bars.
Drop-height
[m]
푓푦
[MPa] Rebar Position 푢푚푎푥
[mm]
2.5
575 Nominal 15.1
Adjusted 14.4
686 Nominal 13.9
Adjusted 13.3
5.0
575 Nominal 27.9
Adjusted 26.5
686 Nominal 25.2
Adjusted 24.0
0.00
0.10
0.20
0.30
0.40
0.50
0 	5 	10 	15 	20
κm 	[-]
Time, 	t 	[ms]
DIC - B-06
Elastic Response
Plastic Response
Figure 9.22 Variation of 휅푚 over time for a beam specimen subjected to an impact from a 5.0 m drop-
height. Comparison of theoretical values according to elastic and plastic response with
experimental values for B-06.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 127	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 127	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 127

-- 147 of 333 --

In order to determine real values of mass transformation factors, experimental data obtained for B-06
from DIC analysis were used in Equation (4.8). The results are shown in Figure 9.22. It can be observed
that the mass participation at the moment of impact is much lower than the assumed value for plastic
response, 휅푚 = 0.333, and it increases until reaching a value close to 0.4 at approximately 푡 = 2 ms.
Thereafter, it is noticed that the response of the beam lies somewhere in between ideal plastic and ideal
elastic response, though it seems to be closer to a plastic response. Therefore, introducing a function for
휅푚 variable on time in the 2DOF model might lead to better predictions of the dynamic response, and
could be an important suggestion for future work.
Ultimately, the 2DOF model with an internal resistance function based on nominal positions of rein-
forcement bars and with 푓푦 = 푓푡 = 686 MPa was chosen as a base model. This base model would serve
for further comparisons with results from FE analyses performed in LS-DYNA (which are also based
on nominal distances), as detailed in Chapter 10. Furthermore, the effects of the adjusted position of
reinforcement bars in a LS-DYNA model are studied in Section 11.8.2.
9.6.4 Predicted rotational capacity
Figure 9.23 presents the calculated rotational capacity according to the methods presented in Section 5.4
in comparison with the average values of rotational capacity, 휃푝푙,푥%, for different load levels determined for
undamaged beams of Series-3, as previously presented in Figure 9.16. The rotation capacity according to
the ABC method corresponds to 휃푝푙,95%, whereas the remaining methods should yield a value of rotational
capacity equivalent to 휃푝푙,100%.
0
10
20
30
40
50
60
70
80
Rotational capacity [mrad]
Estimation
80%
90%
95%
100%
Figure 9.23 Comparison of predicted plastic rotational capacity according to different theoretical and
empirical methods with average plastic rotational capacity from Series-3.
Predictions according to the guidelines in Eurocode 2 (CEN, 2004) show high correspondence with
experimental values of 휃푝푙,100% measured for undamaged beams of Series-3. Moreover, the rotational
128 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	128 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	128 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 148 of 333 --

capacity calculated according to Sawyer’s and Modified Corley’s methods is less but close to the
experimental 휃푝푙,100%, meaning that the predictions become conservative. The results according to the
ABC method are also conservative, as they are closer to the experimental 휃푝푙,100% rather than 휃푝푙,95%, as
intended by its theoretical formulation. Mattock and Corley methods, on the other hand, give results
closer to 휃푝푙,95%.
Two different results are presented for the Bk 25 method in Figure 9.23. When the rotational capacity is
calculated assuming that the plastic hinge under a concentrated load is equivalent to the conditions at an
inner support in a continuous beam, a value close to 휃푝푙,95% is obtained. This result can be considered as
reasonable compared with the experimental values. On the other hand, when using the Bk 25 equation
for a plastic hinge located in the field of a continuous beam to determine the rotational capacity for a
concentrated loading in a simply supported beam, the obtained value seems to be unreasonable large,
as it is close to experimental 휃푝푙,80%. It should be highlighted that the Bk 25 method was developed for
impulse-loaded structures, so a higher value of rotational capacity is expected compared with the other
methods, which were formulated for estimation of rotational capacity of structures subjected to static
loading. Yet, the results indicate that using the Bk 25 equations as formulated for an inner support in a
continuous beam might be more appropriate for the experimental conditions in this thesis work.
In general, the results show that the decision of disregarding the top layer of reinforcement, which
was proven to be subjected to a low tensile force instead of compressive force, leads to acceptable
predictions. Besides, these methods (apart from Bk 25) were originally meant to be used during design
of the reinforced concrete beams under static loading, and therefore, conservative values should be
expected. In that sense – apart from Corley and Mattock methods, which show an overestimation – most
methods seem to provide with reasonable values of rotational capacity. Bk 25 (support), also seems to
be reasonable for impacted-loaded beams.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 129	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 129	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 129

-- 149 of 333 --



-- 150 of 333 --

10 Finite Element Model - Theory
10.1 Introduction
This chapter provides with a general description of the procedure followed in order to replicate the
impact-loading experiments using non-linear finite element analysis (FEA). The content of the chapter
includes the element types, material models, interaction between elements, and other parameters related
to finite element modelling of the experiments.
The models were created in the software package LS-DYNA developed by the Livermore Software
Technology Corporation (LSTC) in 1976, which has been continuously developed ever since. The
software can be used for, among others, simulation of high-speed, short-duration events.
Two different models were created to replicate the experiments. The only difference between the two
models is the solid element type used to model the concrete material, and some input data related to the
element type used.
The creation of the models and the preparation of input data was done specifically with the program
LS-PrePost1. The same program was also used for post-processing of the results. The analysis itself was
performed using a licensed version of a LS-DYNA solver2.
The solution method used by default by LS-DYNA is of an explicit nature. That implies that the equation
of motion is solved based on the displacement in previous time steps. A sufficiently small time step is
required in order to obtain acceptable results.
The material models and element types were chosen based to great extent on experience gained in
previous Master’s thesis projects within the Structural Engineering Division at Chalmers. Furthermore,
the decisions regarding modelling techniques were based on information provided in LS-DYNA Keyword
User’s Manual (LSTC, 2015) and LS-DYNA Theory Manual (LSTC, 2006).
LS-DYNA does not have a default unit system. The user must provide all the values in a consistent
system, which usually depends on in which units the results are desired. The system adopted during this
project are shown in Table 10.1.
Table 10.1 Consistent system of units.
Property Mass Length Time Force Stress Energy
Unit g mm ms N MPa N mm
10.2 Model Geometry
The global geometry of the specimens should be defined before creating a mesh and assigning material
properties to the model. LS-DYNA allows to replicate the real geometry of the specimens fairly
accurately.
1LS-PrePost 4.2 X64 release version 2016
2Redhat 5.9 (release 9.0.01. Linux, double precision)
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 131	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 131	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 131

-- 151 of 333 --

Four main parts (or sets of parts) were created, including the concrete beam, the reinforcement bars, the
drop-weight, and the roller supports. Figure 10.1 shows an isometric view of the setup of the model in
LS-DYNA.
Figure 10.1 LS-DYNA model geometry.
The beam was modelled as a solid box, while the roller supports were created as solid cylinders. The
drop-weight was also modelled as a solid cylinder, but with a curved surface on the side that hits the
beam. However, the hole present in the drop-weight, as explained in Section 7.4, was not included in the
model, as the element size required to create a suitable mesh in the drop-weight would need to be too
small due to the dimensions of the hole. The mass density of the drop-weight was adjusted accordingly
in order to maintain the correct weight.
10.3 Element Types and Properties
Two different types of solid elements were used to model the concrete beam, namely, hexahedron and
tetrahedron elements. For the hexahedron solids, underintegrated constant stress elements of equal sides
were used, as depicted in Figure 10.2. This element corresponds to Solid Type 1 in LS-DYNA and is the
default element. The hexahedron mesh can be generated by using the in-built meshing tool in LS-DYNA,
Solid Mesher. Provided some conditions, the standard solid element is capable of producing accurate
results while being relatively efficient with regards to computation time. The roller supports and the
drop-weight were modelled using only this element type.
132 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	132 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	132 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 152 of 333 --

1
2
3
4
8	5
6 7
Figure 10.2 8-node hexahedron element with one integration point.
The other solid element considered in this project is the four-node tetrahedron element with one integration
point, as shown in Figure 10.3. This element corresponds to Solid Type 10 in LS-DYNA. The tetrahedron
elements are generated by using Tetrahedron Mesher which is a meshing tool provided in LS-DYNA. A
merge tolerance must be introduced; for this project, the default value 0.001 was chosen. Additionally,
LS-DYNA provides two optional methods, Method 1 or Method 2, in order to remesh the surface of the
geometry after creating a trial mesh. Finally, three methods – Method 1, Method 2 or Method 3 – must
be chosen in order to create a definite mesh. The meshing procedure was performed using a Method 2
skin remesh; thereafter, the final tetrahedron mesh was generated by using Method 3. It should be noted
that not all sides of the individual tetrahedron elements correspond to the input value of edge size, as the
length of some sides deviates from the input parameter due to the geometry of the tetrahedron element
when the meshing tool adapts the local geometry to the global geometry of the structure.
2
1
4
3
Figure 10.3 4-node tetrahedron element with one integration point.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 133	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 133	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 133

-- 153 of 333 --

The reinforcement bars were modelled in a discrete manner using beam elements, specifically the Hughes-
Liu formulation, with circular cross-section. This beam element is based on a degenerated eight-node
solid element, which makes it compatible with hexahedron elements. The formulation is robust and
computationally efficient (LSTC, 2006). The integration could be evaluated with one integration point
along the axis and multiple points in the cross section. Different integration schemes are available by
default, such as 2x2 Gauss quadrature and 3x3 Gauss quadrature. However, to create the base model in
this project, only one integration point in the cross-section was initially considered; therefore, only the
axial stress on the bars are computed.
10.3.1 Hourglass control and volumetric locking
Since the chosen hexahedron elements are provided with only one integration point, there is a risk to
obtain spurious zero-energy modes, also called hourglass modes. Such modes, which are different to
modes corresponding to rigid body motion, create zero strain energy. Figure 10.4 illustrates two possible
hourglass modes, though a total of twelve modes exist.
Figure 10.4 Examples of hourglass modes of a hexahedron element with one integration point.
An hourglass control can be included in the model in order to avoid spurious zero-energy modes. This
control introduces fictitious forces within the element to prevent excessive hourglass deformation. This
method is more cost-effective than using fully integrated hexahedron elements, which may also give
rise to locking effects. There are several types of hourglass control available in LS-DYNA. Type 6 was
chosen for this project. It is formulated as a stiffness type stabilization based on elastic constants and an
assumed strain field, and is only available for 2D and 3D solid elements (LSTC, 2006).
An important parameter which can be defined by the user is the Hourglass Coefficient, QM, which scales
proportionally to the hourglass force. A value of QM = 1.0 is recommended for elastic materials if a
coarse mesh is used. For non-linear models, a smaller value of QM, usually in the interval from 0.001 to
0.01, is suggested. The default value is QM = 0.1.
As stated before, the roller supports and the drop-weight were all modelled using Type 1 hexahedron
elements. Since the deformations of these parts were expected to remain relatively small, it was not
considered necessary to use hourglass control for these parts (Lovén and Svavarsdóttir, 2016).
As for tetrahedron elements, while the theoretical formulation for this type of element is in line with the
formulation for one point hexahedron element, there are no spurious zero-energy modes for this type of
elements, and therefore hourglass control is not needed. However, this type of element may exhibit a
stiff response due to volumetric locking effects (Erhart, 2011).
134 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	134 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	134 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 154 of 333 --

10.4 Interaction Between Elements and Boundary Conditions
To model the interaction between the beam and the drop-weight, and between the beam and the roller
supports, a contact algorithm called Contact_Automatic_Surface_to_Surface was used. This command
allows for compression loads to be transferred from the slave surface to the master surface without
constraining elements. With this setup, the beam is able to bounce upwards from the supports when
needed.
The bottom nodes of the supports were fully restrained in the z-direction as shown in Figure 10.5.
Moreover, additional restraint in both x- and y-direction was included in some side nodes to avoid
undesired unreasonable displacements during the analysis.
x = 1 rx = 0
y = 1 ry = 0
z = 0 rz = 0
x = 0 y = 0 z = 1
rx = 0 ry = 0 rz = 0
z
x
Figure 10.5 Degree of restraint in roller supports.
10.5 Material Models
10.5.1 Material model for concrete
Material Type 273 was used to model the concrete. This material model is called Mat_CDPM in LS-
DYNA, which stands for Concrete Damage Plastic Model. The current version – referred to as CDPM2
by its authors – was developed by Grassl, Xenos, et al. (2013) as an extension to the damage plasticity
model CDPM presented by Grassl and Jirasek (2006).
CDPM2 is only available for solid elements. Several parameters can be defined by the user, although
most of them have default values based on experimental observations. The model is intended to describe
the failure of concrete structures subjected to multiaxial dynamic loading and was formulated as a
damage-plasticity constitutive model. The plasticity part of the model is based on the effective stress,
which is independent of damage. On the other hand, the damage model is based on plastic and elastic
strain measures.
The initiation of tensile damage takes place when the maximum equivalent strain of the material reaches
a threshold value, 휀0 = 푓푐푡∕퐸푐 . The model offers three different types of softening law to describe tensile
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 135	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 135	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 135

-- 155 of 333 --

damage; namely: linear, bi-linear, and exponential damage type. In the present study, bi-linear softening
was adopted. The stress-crack width relationship for bi-linear damage is illustrated in Figure 10.6.
w
σt
fct
wf1 = 0.15wf
G
fct1 = 0.3fct
wf
Figure 10.6 Bi-linear tensile damage as defined for CDPM2.
Two additional parameters, 푓푐푡1 and 푤푓 1, are needed for bi-linear softening. The default values included
in the material model are calculated according to
푓푐푡1 = 0.3푓푐푡
푤푐푓 1 = 0.15푤푓
(10.1)
The parameter 푤푓 represents the ultimate crack width; that is, the crack width at which no further transfer
of tensile stress between two elements of concrete on each side of the crack is possible. The parameter
푤푓 can be calculated from the fracture energy and the tensile concrete strength as
푤푓 = 4.444퐺푓
푓푐푡
(10.2)
A given input value of crack width, 푤, is converted into strain, 휀, by assuming a certain length along
which the cracks are assumed to spread. This length is termed crack band width, ℎ퐵푊 . In the material
model CDPM2, the crack band width is considered to be equivalent to the element size, 푙푒푙. The parameter
푙푒푙 is mesh-dependent and corresponds to the length of one finite element for cubic hexahedron elements.
However, when tetrahedron elements are used, 푙푒푙 is calculated in proportion to the volume of the element.
Equation (10.3) is used to determine the strain for given values of crack width and crack band width.
휀 = 푤
ℎ퐵푊
(10.3)
If tetrahedron elements are used to create the mesh, it is recommended in (Grassl, 2016) to use a modified
value of ultimate crack width equal to 0.56푤푓 to account for the overestimation of fracture energy for
tetrahedron elements, which is a result of the method used by LS-DYNA to calculate the element size 푙푒푙
for these elements.
136 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	136 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	136 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 156 of 333 --

Another input parameter to CDPM2 is the eccentricity parameter, 푒. This parameter is used to control
the shape of the deviatoric section of the yield surface and can be calculated according to
푒 = 1 + 휀
2 − 휀, where 휀 = 푓푐푡(푓 2
푏푐 − 푓 2
푐 )
푓푏푐 (푓 2
푐 − 푓 2
푐푡) (10.4)
The variable 푓푏푐 corresponds to the strength in equibiaxial compression, and can be approximated as
푓푏푐 = 1.16푓푐 .
The evolution of compressive damage is based on an exponential stress-inelastic strain function, as
depicted in Figure 10.7. The inclination of such softening curve is controlled by the parameter 휀푓 푐 ,
henceforth named compressive softening parameter. The smaller 휀푓 푐 is, the more brittle the nature of
the failure is. The default value is set to 휀푓 푐 = 1 ⋅ 10−4.
εc
σc
fc Gf
Figure 10.7 Compressive damage as defined for CPDM2.
The user-defined input parameters used to model the concrete material are shown in Table 10.2. Such
parameters were adjusted according to the material properties and the experimental conditions described
in Chapter 7. Note that the hardening parameter, HP, was set equal to 0.01, which is the value recom-
mended for analyses without consideration of strain rate effect. Other model parameters which are not
shown were set to their default values.
Table 10.2 Input parameters for CDPM2.
Notation in LS-DYNA Description Value
RO Density, 휌푐 2425 kg∕m3
E Elasticity modulus, 퐸푐 33.9 ⋅ 103MPa
PR Poisson’s ratio, 휈푐 0.2
ECC Eccentricity parameter, 푒 0.52
FT Concrete tensile strength, 푓푐푡 3.7 MPa
FC Concrete compressive strength, 푓푐 42.2 MPa
HP Hardening parameter 0.01
STRFLG Strain rate flag 0: No strain rate
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 137	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 137	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 137

-- 157 of 333 --

10.5.2 Material model for reinforcing steel
The reinforcing steel was modelled using Material Type 3, which is called Mat_Plastic_Kinematic. This
material model is computationally efficient and is suitable to model isotropic and hardening plasticity
for beam, shell and solid elements (LSTC, 2015). The stress-strain relationship depicted in Figure 10.8
illustrates the elasto-plastic behavior of the material.
E
ε
σ
fy Et
ft
εsy εsu
Figure 10.8 Elastic-plastic behavior as defined for Mat_Plastic_Kinematic.
Mat_Plastic_Kinematic is also able to consider strain rate effect; however, such option was not enabled
for this study. The input parameters listed in Table 10.3 were selected in accordance with the material
properties determined experimentally for the steel bars, as described in Chapter 7. Observe that the
tangent modulus, 퐸푡, is calculated as
퐸푡 = 푓푡 − 푓푦
휀푠푢 − 휀푠푦
(10.5)
Table 10.3 Input parameters for Mat_Plastic_Kinematic.
Notation in LS-DYNA Description Value
RO Mass density, 휌푠 7800 kg∕m3
E Elasticity modulus, 퐸푠 196 ⋅ 103MPa
PR Poisson’s ratio, 휈푆 0.30
SIGY Yield stress, 푓푦 575 MPa
ETAN Tangent Modulus, 퐸푡 1056 MPa
10.5.3 Material model for drop-weight and supports
The drop-weight and the roller supports were modelled using Material Type 1: Mat_Elastic in order to
reduce computational costs, since limited plastic deformation was assumed to occur for the supports
and drop-weight. This material model is designed to exhibit a simple isotropic elastic behavior and is
suitable for beam, shell and solid elements. The input parameters are shown in Table 10.4. Since the
drop-weight was modelled as a solid object, without consideration of the cavity described in Section 7.4,
the value of 휌푠 was adjusted accordingly in order to compensate for the difference in volume.
138 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	138 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	138 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 158 of 333 --

Table 10.4 Input parameters for Mat_Elastic.
Notation in LS-DYNA Description Value
RO Mass density, 휌푠 7829 kg∕m3
E Elasticity modulus, 퐸푠 200 ⋅ 103MPa
PR Poisson’s ratio, 휈푆 0.30
10.6 Interaction Between Reinforcement and Concrete
The reinforcement bars were assumed to be fully embedded in the concrete core. This response can be
achieved by defining the constraint type Constrained_Beam_in_Solid. This command constrains beam
or truss elements (slave components) to move along with solid elements (master elements). The meshes
for both materials can be created separately and then superimposed, and the displacement between the
nodes are automatically constrained to zero. When using this keyword, it is not necessary to align the
nodes of the beam elements to the nodes of the solid element.
10.7 Load Application
The dynamic load was introduced to the FE model by assigning an initial velocity to the drop-weight.
The values of velocity were chosen to be equal to the average values determined through DIC analysis
for both drop-heights. The gravitational force was not considered in the model, since its influence to the
behavior of the beam was regarded as negligible. This allows to reduce computational costs.
Besides impact analyses, separate analyses where a static load was applied to the beam were also
performed. This load was applied by prescribing velocity on the nodes on the top of the beam at midspan.
The velocity was increased gradually from 0 mm∕ms to 0.07 mm∕ms during the first 100 ms and kept
constant thereafter until reaching the desired deformation. The analysis was run for 500 ms, which yields
at maximum midspan deflection of 31.5 mm.
10.8 Solution Method and Time Step
The default numerical integration method in LS-DYNA to solve non-linear problems corresponds to an
explicit method. Its formulation is a modification to that of the Central Difference Method, whereby the
equation of motion is solved based on the displacement in previous time steps. CDPM2 has been adapted
to explicit methods; therefore, the default integration method was used in the computations in LS-DYNA.
The determination of a proper time step size is essential to obtain reasonable results when using an
explicit method, as the the time step must be small enough to be able to capture the wave propagation
through all elements. LS-DYNA calculates automatically an appropriate time step by choosing the
minimum value from all elements, as
Δ푡 = TSSFAC ⋅ 푚푖푛{Δ푡1, Δ푡2, ..., Δ푡푛푒푙 } (10.6)
where 푛푒푙 is the number of elements and TSSFAC corresponds to a scale factor set to a default value of
0.9, which can be reduced in order to improve numerical stability.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 139	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 139	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 139

-- 159 of 333 --

For solid elements, the calculation of the time step is based on the length of the element and the sound
speed, 푐, through such an element, and can be expressed as
Δ푡푒 = 푙푒
푐 (10.7)
Here, the length of the element depends on the solid element type and is given by
푙푒 = 푉푒
퐴푒,푚푎푥
for a hexahedron element
푙푒 = minimum height for a tetrahedron element
(10.8)
where 푉푒 is the element volume and 퐴푒,푚푎푥 is the area of the largest element side.
For materials with a constant bulk modulus, the sound speed depends on the modulus of elasticity, 퐸,
Poisson’s ratio, 휈, and the specific mass density, 휌, as
푐푠표푙푖푑 =
v
퐸(1 − 휈)
(1 + 휈)(1 − 2휈)휌 (10.9)
Equation (10.7) can also be used to determine the critical time step for Hughes-Liu beam elements;
however, the wave speed should be calculated as
푐푏푒푎푚 =
u퐸
휌 (10.10)
140 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	140 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	140 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 160 of 333 --

11 Finite Element Model - Results and Comparisons
11.1 Introduction
This chapter covers the results from the non-linear FE modelling procedure adopted and explained in
Chapter 10. Two different solid element types were used to model the concrete; namely, hexahedron
and tetrahedron elements. Initially, a convergence study of the impact event was performed in order to
determine a suitable mesh size for both element types. Subsequently, a verification of the two FE models
was performed, where comparisons with results gathered from DIC analysis, and when possible, from
the base 2DOF model established in Chapter 4 were carried out.
Further studies of the FE models were performed in order to investigate the sensitivity to various input
parameters used in the modelling procedure. These studies were conducted by changing the input value
for one parameter of interest at a time.
LS-DYNA was also used to perform static analyses. The purpose was to further study similarities and
differences between different element types. Considering that the behavior of beams under static loading
is better understood, a static FEA could provide with an appropriate insight about how well the simulation
can capture the real behavior of the structure.
Parametric studies were also conducted in order to gather further insight of the dynamic behavior of
impacted reinforced concrete beams by altering the loading conditions or material properties of the
established FE models.
Lastly, it is important to highlight that the effects of strain rate were not considered during the simulation.
Moreover, perfect bond was assumed between the reinforcement bars and the surrounding concrete
material.
11.2 Choice of Element Size
A convergence study was performed in order to determine a suitable mesh size for both hexahedron
and tetrahedron element types. Such analyses were performed for an impact loading from a drop-height
equal to 5.0 m, and were based on the deflection of the beam midpoint over time. Furthermore, besides
numerical convergence, a sufficient level of detail is also preferred in order to be able to properly represent
the crack pattern.
The different nominal mesh sizes adopted for the convergence study correspond to 20 mm, 10 mm, 5 mm,
and 2.5 mm. However, the amount of elements for a given nominal element size differs significantly
depending on the element type, as the number of elements is much larger for a tetrahedron mesh. For
this reason, a 2.5 mm tetrahedron mesh was not studied since it was assumed that such a mesh would be
too computationally demanding due to the large number of elements generated. The resulting meshes for
tetrahedron and hexahedron elements with varying input sizes are shown in Appendix G.
The reinforcement bars were modelled according to the nominal geometry, as detailed in Figure 7.1,
with an element length equal to the input size of the solid concrete elements.
The deflection over time at midpoint for the models with different mesh types and sizes, as well as the
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 141	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 141	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 141

-- 161 of 333 --

minimum and maximum envelopes and average values collected from DIC data, are shown in Figure 11.1.
Hexahedron and tetrahedron elements are denoted Hexa and Tetra in Figure 11.1 (as well as in subsequent
plots). The numerical values of 02.5, 05, 10 and 20 correspond to a given input value of edge size; that
is, 2.5 mm, 5 mm, 10 mm and 20 mm, respectively.
An important observation is that it was not possible to perform a successful analysis with the default value
of the compressive softening parameter, 휀푓 푐 = 1 ⋅ 10−4, with tetrahedron elements as all the attempts
reached convergence problems soon after impact occurred. Therefore, the magnitude of 휀푓 푐 needed to be
increased to 휀푓 푐 = 1 ⋅ 10−3 for the tetrahedron models in order to simulate a more ductile behavior of the
concrete material with CDPM2.
Results from the Tetra-20 model were omitted from Figure 11.1 since the analysis was terminated
prematurely due to convergence issues in the concrete material model, CDPM2. Furthermore, unrealistic
and excessively large local deformations were observed for this model. Additionally, the analysis for the
Tetra-05 model also terminates prematurely due to convergence problems; however, this occurs at about
12 ms after impact, and maximum deflection is clearly described by the model.
Additional key parameters from the convergence study are presented in Table 11.1. The relative error for
the maximum deflection for each model is calculated with respect to the maximum average experimental
midpoint deflection, equivalent to 20 mm. Observe that the number of elements for the tetrahedron mesh
is significantly larger for all nominal element sizes.
0
5
10
15
20
25
30
0 	5 	10 	15 	20
Deflection,
 u [mm]
Time, t [ms]
Hexa-02.5
Hexa-05
Hexa-10
Hexa-20
Average
Tetra-05
Tetra-10
Figure 11.1 Convergence study performed for different mesh sizes using different element types. Mid-
point deflection over time due to an impact from a drop-height of 5.0 m is presented.
142 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	142 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	142 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 162 of 333 --

All models based on hexahedron elements seem to overpredict the maximum deflection. Although, apart
from the Hexa-20 model, a rather good correspondence is observed for the different mesh sizes. Based
on these results, it was decided to use a 5 mm element size for hexahedron elements, which would also
be adequate to represent the crack pattern.
On the other hand, the tetrahedron models yield a smaller maximum deflection compared to the experi-
mental curve. Additionally, a significant difference is observed between the response of the two shown
element sizes. Based on the data available, it is not possible to guarantee that the model is converging
towards a given value for decreasing element size; however, the results for 5 mm mesh size are fairly
close to the experimental curve. For this reason, it was decided to also adopt a size of 5 mm for the
tetrahedron mesh.
Table 11.1 Maximum estimated deflection for various mesh sizes and element types, as well as the
number of elements generated for each type and size. The relative error of maximum deflec-
tion, 푢푚푎푥,푒푟푟표푟, is compared with respect to the maximum average deflection, 푢푚푎푥 = 20 mm,
obtained from DIC analysis for an impact from a height h = 5.0 m.
Description Hexa-
20
Hexa-
10
Hexa-
05
Hexa-
02.5
Tetra-
20
Tetra-
10
Tetra-
05
No. concrete elements
[⋅103] 2 12 99 755 13 103 896
푢푚푎푥
[mm] 26.9 25.0 24.6 25.3 - 16.4 19.5
푢푚푎푥,푒푟푟표푟
[%] 35 25 23 27 - -18 -2
11.3 Verification
11.3.1 Overview
In order to verify the accuracy of the models at representing the real behavior of the beam, different
analyses were carried out to ensure that all models exhibit a similar response to the experimental results.
Particularly, three parameters were considered: beam velocity at midpoint, drop-weight velocity, and the
displacement over the support. The experimental values were determined by means of DIC analysis,
presented in Section 9.1. When possible, results from the 2DOF model were also included in the
verification. Only a discussion for the analysis with a drop-height of 5.0 m is presented; however, similar
information corresponding to a drop-height of 2.5 m is provided in Appendix H.
11.3.2 Midpoint velocity
The velocity of the beam at the midpoint for a 5.0 m drop-height is shown in Figure 11.2. The two LS-
DYNA models show a higher peak value soon after impact and their response is similar until approximately
푡 = 1.2 ms. Thereafter, the tetrahedron LS-DYNA curve follows more closely the experimental curve.
As a matter of fact, both the tetrahedron and the DIC curve reach a negative value earlier than the 2DOF
and the hexahedron curve. Unfortunately, no information beyond 12.8 ms is available for the tetrahedron
model due to convergence issues. On the other hand, the hexahedron LS-DYNA curve shows noticeable
oscillation from 푡 = 1.2 ms until 푡 = 6.8 ms, when it meets the 2DOF curve. From that point, the velocity
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 143	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 143	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 143

-- 163 of 333 --

for both models is fairly similar until approximately 푡 = 14 ms.
Another observation is that the experimental curve and both LS-DYNA curves maintain a negative
velocity after reaching negative values (between 푡 = 7.0 ms and 푡 = 9.0 ms), while the 2DOF curve
oscillates approximately between −2 m∕s and 2 m∕s. This response is due to the fact that the boundary
conditions of the beam are not fully represented in the 2DOF model. Despite the differences regarding
phase and frequency of oscillation, good correlation between the numerical models and the experimental
results can be observed.
-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 vy [m/s]
Time, t [ms]
2DOF - f.y = 686 MPa
LS-Dyna - Hexa-05
LS-Dyna - Tetra-05
DIC - Average
Figure 11.2 Beam midspan velocity vs time for a drop-height h = 5.0 m for all models.
11.3.3 Drop-weight velocity
Another valuable parameter to study is the drop-weight velocity, as it is directly related to the impact
phenomenon; that is, the contact between the beam and the drop-weight. The variation of the drop-weight
velocity over time is illustrated in Figure 11.3. High correlation is noticed between both LS-DYNA
curves and the experimental curve during the first two milliseconds after impact. These curves show a
more rapid decrease of velocity than the 2DOF curve. The tetrahedron curve exhibits a better fit to the
experimental curve altogether, while the hexahedron curve comes closer to the 2DOF curve at 푡 = 6.8 ms.
All models eventually converge to a value of approximately −2 m∕s.
144 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	144 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	144 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 164 of 333 --

-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 vy [m/s]
Time, t [ms]
2DOF - f.y = 686 MPa
LS-Dyna - Hexa-05
LS-Dyna - Tetra-05
DIC - Average
Figure 11.3 Drop-weight velocity vs time for a drop-height h = 5.0 m for all models.
It can also be observed that the rate of decrease for the experimental curve and the 2DOF curve is
noticeably similar, albeit with a phase difference of a few milliseconds, until both curves reach the
convergence value.
In general, it can be stated that the numerical models are able to describe the drop-weight velocity
properly, with the tetrahedron LS-DYNA model producing more accurate results.
11.3.4 Displacement over the support
In (Lovén and Svavarsdóttir, 2016) it is explained that a simply supported beam subjected to a drop
impact will show a rapid uplift over the support almost immediately after impact, provided that the
uplift is not prevented by the conditions at the support. Such phenomenon was also observed in the
laboratory tests during this project. Information regarding the displacement over the support is shown in
Figure 11.4. Values larger than zero (equivalent to downward displacement) in the experimental curve
are attributed to the noise present in the DIC data.
The hexahedron model is able to accurately represent the uplift in time and magnitude, although its curve
shows a slight delayed rebound of the beam compared to the experimental curve. On the other hand,
according to the tetrahedron model the beam falls back to the support sooner.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 145	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 145	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 145

-- 165 of 333 --

-15
-10
-5
0
5
0 	5 	10 	15 	20 	25
Displacement,
 u [mm]
Time, t [ms]
LS-Dyna - Hexa-05
LS-Dyna - Tetra-05
DIC - Average
Figure 11.4 Displacement over the support for a drop-height h = 5.0 m for the LS-DYNA models and
DIC analysis.
11.4 Drop-weight Impact Analysis
11.4.1 Overview
The deflection of the beam at the midpoint obtained with the LS-DYNA models for different drop-heights,
in conjunction with the crack pattern, is discussed in this section. The values of deflection are compared
with the experimental results and the results from the 2DOF model.
In order to visualize the crack pattern from the FE analyses, the principal strain field can be requested.
The magnitude of the cracking strain differs depending on the element type and size, and can be calculated
by introducing 푤 = 푤푓 (or 푤 = 0.56푤푓 in the models with tetrahedron elements) in Equation (10.3).
As previously stated in Section 10.5.1, the crack band width, ℎ퐵푊 , is equivalent to the element size 푙푒푙
for hexahedron elements. On the other hand, if tetrahedron elements are used, ℎ퐵푊 varies proportionally
to the nominal size of the element. Hence, Equation (11.1) was adopted to estimate an equivalent cubic
element so that the number of cubic elements equals the number of tetrahedron elements, 푛푒푙, for a
given mesh size. The crack band width and cracking strain for different meshes are summarized in
Table 11.2.
ℎ퐵푊 ,푡푒푡푟푎 = 3
v
푉푏푒푎푚
푛푒푙
(11.1)
146 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	146 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	146 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 166 of 333 --

Table 11.2 Crack band width for 5 mm size for hexahedron and tetrahedron meshes and corresponding
cracking strain.
Mesh description ℎ퐵푊
[mm]
휀푐푟푎푐푘
[%]
5.0 mm hexahedron mesh 5.0 3.17
5.0 mm tetrahedron mesh 2.4 3.76
11.4.2 Impact from drop-height h = 5.0 m
The midpoint deflection over time obtained from the FE analyses, in conjunction with average results
gathered from DIC analysis and predictions made by the 2DOF model, are presented in Figure 11.5. Key
parameters of the dynamic responses are detailed in Table 11.3; where the maximum recorded deflection,
푢푚푎푥, and the time at which maximum deflection occurs, 푡푚푎푥, are presented. The principal strain field at
certain times after impact, including the time of maximum deflection, are shown in Table 11.4 for the
hexahedron LS-DYNA model and in Table 11.5 for the tetrahedron LS-DYNA model.
0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
2DOF - f.y = 686 MPa
LS-Dyna - Hexa-05
LS-Dyna - Tetra-05
DIC - Average
Figure 11.5 Deformation vs time for a drop-height h = 5.0 m for all models.
It should be noted that the FE analysis using tetrahedron element solids terminated prematurely due
to convergence issues, as can be seen in Figure 11.5. Nonetheless, for the duration of its run-time a
good degree of correspondence to the average values gathered from DIC can be noticed; although the
maximum deflection is reached sooner than observed in the laboratory tests.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 147	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 147	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 147

-- 167 of 333 --

Table 11.3 Key parameters for dynamic response due to impact loading, h = 5.0 m. The relative error
of maximum deflection, 푢푚푎푥,푒푟푟표푟, and time of maximum deflection, 푡푚푎푥,푒푟푟표푟, are calculated
with respect to the average values gathered from DIC analysis.
Model 푢푚푎푥
[mm]
푢푚푎푥,푒푟푟표푟
[%]
푡푚푎푥
[ms]
푡푚푎푥,푒푟푟표푟
[%]
2DOF - 푓푦 = 686 MPa 25.2 26 9.1 14
LS-DYNA Hexa-05 24.6 23 9.2 15
LS-DYNA Tetra-05 19.5 -3 7.4 -8
DIC - Average 20.0 - 8.0 -
Table 11.4 Strain field for impact-loading analysis of the 5 mm hexahedron LS-DYNA model for 5.0 m
drop-height.
Time Strain field for impact loading
푡 = 0.2 ms
푡 = 0.4 ms
푡 = 0.6 ms
푡 = 0.8 ms
푡 = 1.0 ms
푡 = 2.0 ms
푡 = 4.0 ms
푡 = 9.2 ms 1
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.32 0.63 0.95 1.27 1.59 1.90 2.22 2.54 2.85 3.17
1 Time at maximum deflection due to impact loading.
148 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	148 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	148 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 168 of 333 --

The overall dynamic response of the 2DOF model and the hexahedron FE model result in an overprediction
by over 20 % in terms of midpoint deflection compared to the DIC results. Moreover, the responses
between the two models are similar until approximately 푡 = 16 ms, when the deflection according to the
2DOF model begins to increase again.
When analyzing the response of the hexahedron FE model, it is observed that most distinct cracks
propagate following a straight vertical path, similar to a purely flexural cracking response, see Table 11.4.
While there are indications of inclined cracking underneath the impacted zone, this cracking is described
more as a cracked region rather than distinct cracks. This is also true for flexural cracks occurring at the
bottom of the beam at midspan. Distinct bending cracks can be distinguished at midspan at times shortly
after impact, however they eventually merge together and form a cracked region instead.
Also for the hexahedron model, flexural cracks occur at the top side of the beam at a time 푡 = 0.4 ms
after impact in a region between the midpoint and the support. These cracks eventually close, as bending
cracks are instead formed on the bottom side with a slight inclination. The response, as a whole, appears
to be rather symmetric; an exception is a distinct inclined shear crack located over the right support,
which can be seen at 푡 = 4.0 ms and remains until the time of maximum deflection.
On the other hand, the tetrahedron model in general exhibits a cracking response with a higher degree
of inclined shear cracking, see Table 11.5. The inclined cracks which appear below the impact zone
are clearly more distinct than for the hexahedron model. These cracks are localized into single element
rows, while the same cracking is spread over several rows in the hexahedron model. Other examples of
inclined cracking are the cracks occurring at some distance away from midspan at the time of maximum
deflection.
An interesting observation is the fact that the inclined cracks in the impact region do not seem to grow
significantly in length from approximately 푡 = 0.6 ms. Instead, the two bending cracks at the bottom
edge in the same region develop further, although they do not merge, as is the case for the hexahedron
model.
Furthermore, flexural cracks are also noted in the top edge shortly after impact at approximately one third
of the span length from the support. The initiation of top cracking takes place at a similar time as for the
hexahedron model. These cracks close with time, as cracking develops at the bottom edge of the beam.
In general terms, the strain field of the tetrahedron model at the time of maximum deflection seems
to exhibit less symmetry than what was observed for the hexahedron model as the strain distribution
becomes more random further away from midspan.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 149	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 149	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 149

-- 169 of 333 --

Table 11.5 Strain field for impact-loading analysis of the 5 mm tetrahedron LS-DYNA model for 5.0 m
drop-height.
Time Strain field for impact loading
푡 = 0.2 ms
푡 = 0.4 ms
푡 = 0.6 ms
푡 = 0.8 ms
푡 = 1.0 ms
푡 = 2.0 ms
푡 = 4.0 ms
푡 = 7.4 ms 1
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
1 Time at maximum deflection due to impact loading.
Figure 11.6 shows the deformed shape of the left-hand half of the beam for different times, namely:
푡 = 0.4 ms, 푡 = 1.0 ms, and 푡 = 2.0 ms. A comparison between the hexahedron LS-DYNA model, the
tetrahedron model, and DIC analysis of B-06 is made. The FE models both show high correspondence to
the experimental observations at 푡 = 0.4 ms. At that time, only a portion of the beam has been activated
due to the impact, and the deformation is localized in the region close to midspan. As a consequence,
a negative curvature is seen in the area indicated by the marking 퐴. This area corresponds with the
top cracks visible in Tables 11.4 and 11.5. Such phenomenon resembles the behavior of a beam with a
shorter span fixed at both ends.
A relevant change of curvature can also be observed in the area 퐵, which is an indication of the inclined
cracking below the impact region. This response is similar for both the hexahedron model and the
experimental results. The tetrahedron model, however, exhibits a sharper change of curvature at the
150 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	150 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	150 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 170 of 333 --

location marked by 퐶, which sees to remain as time progresses, as can be seen at 푡 = 2.0 ms indicated by
the marking 퐹 . This sudden change in curvature can be explained due to the localized inclined crack
present in the tetrahedron model.
At 푡 = 1.0 ms, the entire beam is participating in the response, and an uplift over the support can be
noticed, in accordance with the information in Figure 11.4. The deformed shape of the beam still shows
a region with negative curvature (thus, cracks are still present at the top edge of the beam); however, this
region has been shifted towards the support, as marked by 퐷.
Finally, at 푡 = 2.0 ms, the beam has adopted a deformed shape similar to the triangular shape described
for plastic deformation, although a change of curvature is still noticeable at 퐺.
More information concerning the deformed shape of the beams for both FE models can be found in
Appendix H.2.
-2
0
2
4
6
8
10
0 	100 	200 	300 	400 	500
Deflection,
 u [mm]
Length, l [mm]
Deformed shape over time Hexa-05 h5.0m
Hexa-05 - t = 0.4ms
Hexa-05 - t = 1.0ms
Hexa-05 - t = 2.0ms
Tetra-05 - t = 0.4ms
Tetra-05 - t = 1.0ms
Tetra-05 - t = 2.0ms
DIC B-06 - t = 0.4ms
DIC B-06 - t = 1.0ms
DIC B-06 - t = 2.0ms
A
B
C
D
F
G
Figure 11.6 Comparison of deformed shape of the beam due to impact loading for h = 5.0 m drop-height
for both LS-DYNA models and DIC analysis.
11.4.3 Impact from drop-height h = 2.5 m
Figure 11.7 presents the deflection over time due to dynamic loading of the FE models and the 2DOF
model together with the average results gathered from experimental testing using DIC for an impact from
a drop-height of ℎ = 2.5 m. Additional key parameters and measured values are presented in Table 11.6.
The principal strain field of the hexahedron model is depicted in Table 11.7 for different times after
impact, while the cracking pattern of the tetrahedron model is presented in Table 11.8.
In contrast to the analyses performed for ℎ = 5.0 m, no convergence issues was exhibited by the
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 151	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 151	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 151

-- 171 of 333 --

tetrahedron LS-DYNA model; therefore, the analysis ran for the full duration, as can be seen in Figure 11.7.
Both LS-DYNA models predict similar values of midpoint deflection until approximately 푡 = 4 ms,
from which the responses begin to diverge. Moreover, the dynamic response of the tetrahedron model
shows good correspondence to DIC measurements up to the point of maximum deflection and some
time afterwards, which can be verified with the values shown in Table 11.6. However, a clear difference
in response in terms of deflection and frequency is noted after the time of maximum deflection for
the tetrahedron model. This becomes evident at a time close to 푡 = 10 ms, from which the degree
of correspondence with experimental results decreases as the midpoint deflection according to the
tetrahedron model begins to decrease with a rate smaller than the experimental results; this occurrence
could point to the fact that the tetrahedron model has a stiffer behavior than the hexahedron model and
the experimental results.
0
5
10
15
0 	5 	10 	15
Deflection,
 u [mm]
Time, t [ms]
2DOF - f.y = 686 MPa
LS-Dyna - Hexa-05
LS-Dyna - Tetra-05
DIC - Average
Figure 11.7 Deformation vs time for drop-height h = 2.5 m for all models.
Table 11.6 Key parameters for dynamic response due to impact loading, h = 2.5 m. The relative error
of maximum deflection, 푢푚푎푥,푒푟푟표푟, and time of maximum deflection, 푡푚푎푥,푒푟푟표푟, are calculated
with respect to the average values gathered from DIC analysis.
Model 푢푚푎푥
[mm]
푢푚푎푥,푒푟푟표푟
[%]
푡푚푎푥
[ms]
푡푚푎푥,푒푟푟표푟
[%]
2DOF - 푓푦 = 686 MPa 13.9 30 6.9 15
LS-DYNA Hexa-05 12.3 15 6.9 15
LS-DYNA Tetra-05 10.5 -2 5.4 10
DIC - Average 10.7 - 6.0 -
152 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	152 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	152 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 172 of 333 --

A higher correspondence is found between the hexahedron FE model and DIC measurements for ℎ =
2.5 m than for ℎ = 5.0 m. While an overprediction of the maximum deflection is still observed in
Table 11.6, the relative error is smaller than for a ℎ = 5.0 m drop. By inspecting key parameters, the
2DOF model, on the contrary, shows less correspondence to average DIC measurements for a ℎ = 2.5 m
drop than for ℎ = 5.0 m.
Table 11.7 Strain field for impact-loading analysis of the 5 mm hexahedron LS-DYNA model for
h = 2.5 m drop-height.
Time Strain field for impact loading
푡 = 0.2 ms
푡 = 0.4 ms
푡 = 0.6 ms
푡 = 0.8 ms
푡 = 1.0 ms
푡 = 2.0 ms
푡 = 4.0 ms
푡 = 6.9 ms 1
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.32 0.63 0.95 1.27 1.59 1.90 2.22 2.54 2.85 3.17
1 Time at maximum deflection due to impact loading.
It is observed in Table 11.7 that the strain field due to impact loading of the hexahedron model for
ℎ = 2.5 m is similar to that of the model with a ℎ = 5.0 m drop in the sense that most of the cracks are
represented as straight vertical cracks. Moreover, the inclined cracks appearing underneath the area of
impact are yet again described as a cracked region rather than being localized to single element rows.
It is, however, noted that the magnitude of the principal strain is smaller for ℎ = 2.5 m drop than for
ℎ = 5.0 m. Furthermore, the cracked region is spread across fewer element rows, producing a fairly good
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 153	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 153	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 153

-- 173 of 333 --

representation of the location of the inclined cracks.
The inclined shear cracks do not reach the bottom edge with the same inclination; instead, they transition
into vertical cracks. This can be observed as early as 푡 = 0.6 ms. These vertical cracks grow in width and
length, until becoming fully open. Additionally, two flexural cracks can be seen to develop at midspan
soon after the impact. These two cracks initially localize in individual element rows; although, as time
progresses, they eventually form a cracked region, which can be seen at 푡 = 4.0 ms and beyond. This
behavior was also observed for ℎ = 5.0 m; however, the cracked region formed for ℎ = 2.5 m appears to
be smaller.
Table 11.8 Strain field for impact-loading analysis of the 5 mm tetrahedron LS-DYNA model for
h = 2.5 m drop-height.
Time Strain field for impact loading
푡 = 0.2 ms
푡 = 0.4 ms
푡 = 0.6 ms
푡 = 0.8 ms
푡 = 1.0 ms
푡 = 2.0 ms
푡 = 4.0 ms
푡 = 5.4 ms 1
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
1 Time at maximum deflection due to impact loading.
Much similar to before, flexural cracking is noted to occur on the top side shortly after impact for the
hexahedron model, these cracks eventually close and instead flexural cracks are formed on the bottom
edge and propagate with a slight inclination. In general terms, the cracking distribution for the hexahedron
model with ℎ = 2.5 m is similar to what was found for ℎ = 5.0 m, albeit with a seemingly more random
pattern.
154 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	154 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	154 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 174 of 333 --

On the other hand, the strain field predicted by the tetrahedron model is noted to have a more symmetrical
response at the time of maximum deflection, compared with the other models, see Table 11.8. The
presence of inclined cracking is clearly observed for the response for ℎ = 2.5 m. The inclined shear
cracks found underneath the impacted area propagate with varying angles and eventually merge with
flexural cracks formed at the bottom side at midspan. Further indications of inclined shear cracking can
be found away from midspan.
11.4.4 Conclusions
In order to draw conclusions and to highlight differences between the results for the solid element types
and the impact cases studied, Table 11.9 presents the strain fields gathered from FE analyses at the time
of maximum deflection.
Table 11.9 Strain field at the time when 푢푚푎푥 occurs for the two drop-height cases. The upper part
table presents the strain field for the hexahedron models, while the lower part presents the
strain field for the tetrahedron models.
Drop-height Strain field at point of maximum deflection
ℎ = 2.5 m
ℎ = 5.0 m
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.32 0.63 0.95 1.27 1.59 1.90 2.22 2.54 2.85 3.17
ℎ = 2.5 m
ℎ = 5.0 m
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
Visual comparison of the strain field of both LS-DYNA models shows that the tetrahedron model exhibits
a stronger tendency to describe inclined shear cracking. This is most likely related to the orientation of
the elements in the hexahedron model which are defined in an regular pattern of straight vertical and
horizontal rows which might lead to crack propagation bias following a vertical path, as suggested in
(Lovén and Svavarsdóttir, 2016); while the more irregular pattern generated with tetrahedron elements
could facilitate the propagation of inclined cracks.
Perhaps as a consequence of the crack propagation bias, the inclined cracks occurring underneath the
impact region are localized to single element rows for the tetrahedron models, whereas the corresponding
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 155	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 155	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 155

-- 175 of 333 --

cracking obtained with the hexahedron models are described more as cracked regions rather than distinct
individual cracks. The same observation holds true regarding the flexural cracking taking place at the
bottom edge at midspan, for which the hexahedron models also show a cracked region rather than distinct
cracks.
An unusual behavior is noted on the strain field distribution from the tetrahedron model for ℎ = 5.0 m,
in that it shows indications of large strains alongside the top reinforcement on the beam surface. This
response is not observed for ℎ = 2.5 m, nor is it noticed for the hexahedron models, and could serve as
an indication that cracking is occurring alongside reinforcement elements due to insufficient anchorage
capacity provided by the concrete solids, although this phenomenon was not observed in the laboratory
tests.
In general terms, it can be concluded that the ability to represent a realistic cracking pattern is more
satisfactory for the tetrahedron models, at least so for the conditions and modelling procedure described
in this thesis. This is partly due to the inability of the hexahedron model to capture inclined cracking.
This conclusion is further strengthened by the results gathered for the midpoint deflection, which shows
a better correspondence to experiments for the tetrahedron models than for the hexahedron ones.
Additionally, the relative error of maximum deflection for the hexahedron model to the average experi-
mental results obtained with DIC analysis diminished for ℎ = 2.5 m, and could indicate that the capacity
of capturing inclined cracking becomes less relevant for the prediction of the midpoint deflection for
lower values of impact energy, this topic is further addressed in Section 11.8.3.
The midpoint deflection over time depicted in Figure 11.7 for a ℎ = 2.5 m drop-height shows that the
tetrahedron model oscillates with a higher frequency than experimental results, and might indicate that
the tetrahedron model exhibits an overly stiff response. Results for ℎ = 5.0 m drop-height in Figure 11.5
also signal overly stiff response with the tetrahedron model, even though the analysis terminated before
reaching completion due to convergence issues. Further investigation on the possibility of overly stiff
response with tetrahedron elements is carried out for static analysis in Section 11.7.
11.5 Comparison with DIC Analysis Regarding Crack Pattern
As described in Section 9.1, the strain distribution during impact loading determined from the DIC
analysis performed in this thesis does not offer satisfactory level of detail regarding the cracking pattern
of the specimens. Hence, it was decided to use the DIC results for the reference beam in (Lovén and
Svavarsdóttir, 2016) in order to evaluate how accurately the LS-DYNA models represent the cracking
pattern. The DIC results from (Lovén and Svavarsdóttir, 2016) are henceforth denoted DIC-2016.
Table 11.10 shows the comparison between the results from DIC-2016 and the hexahedron model. Fairly
good correspondence can be observed. Cracking at the top of the beam along the span can be noticed for
both alternatives. Furthermore, the initiation of such cracking occurs at the same time and the cracks
continue to open until 푡 = 1.0 ms. At 푡 = 2.0 ms, the top cracks have closed, while bending cracks at
the bottom edge have distributed along the span. Moreover, the two principal bending cracks located at
midspan are clearly visible in the hexahedron model, though as time progresses, the two cracks merge
into a cracked region.
However, there are important dissimilarities between the DIC-2016 results and hexahedron LS-DYNA
156 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	156 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	156 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 176 of 333 --

model results. The major inclined cracks located near the area of impact cannot clearly be represented by
the hexahedron model, though a clear tendency to develop such cracks is noticed. This can be attributed
to the fact that the hexahedron model seems to have difficulties to represent the real inclination of the
cracks. There is an evident dependence on the element type and the direction of the element rows. The
cracks appears to be spread over a wider strip, which suggests that gathering the values of strain from
the region into a narrower strip, would yield a localized crack. Additionally, such inclined cracks appear
to extend further away from the midpoint and have a flatter slope for DIC-2016.
Table 11.10 Comparison of strain field from DIC-2016 (Lovén and Svavarsdóttir, 2016) with the results
for the hexahedron model. Note that the drop-height for DIC-2016 is h = 5.5 m , whereas
the impact was modelled from a drop-height of h = 5.0 m in the LS-DYNA analysis.
Time
[ms] DIC-2016 Hexahedron LS-DYNA model
0.2
0.4
0.6
0.8
1.0
2.0
4.0
8.0
10.0
Principal
Strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 157	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 157	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 157

-- 177 of 333 --

Additionally, new important bending cracks close to the midspan region can be observed at 푡 = 4.0 ms in
the hexahedron model. By then, the two original cracks at the bottom edge at midspan have merged into
a cracked region, while in the DIC-2016 results only two vertical cracks are present at midspan. Thus, it
is observed that the damage due to flexural action is more critical for the hexahedron model, which could
indicate that the concrete solids have been modelled to be more ductile than in reality. This could be an
explanation to the overprediction of the deflection by the hexahedron model, considering that deflection
is expected to be larger if bending action is considerably more dominant than shear action.
Table 11.11 Comparison of strain field from DIC-2016 (Lovén and Svavarsdóttir, 2016) with the results
for the tetrahedron model. Note that the drop-height from DIC-2016 is h = 5.5 m , whereas
the impact was modelled from a drop-height of h = 5.0 m in the LS-DYNA analysis.
Time
[ms] DIC-2016 Tetrahedron LS-DYNA model
0.2
0.4
0.6
0.8
1.0
2.0
4.0
8.0
10.0
Principal
Strain
[%]
158 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	158 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	158 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 178 of 333 --

The tetrahedron model, on the other hand, can very well represent the cracking pattern of the beam, as
depicted in Table 11.11. This model gives a better prediction of the real inclination of the cracks. The
major inclined shear crack close to the impact region is clearly visible in the model, although the real
crack seems to extend slightly further from the midspan region. The initiation of cracking at the top
of the beam also takes place at the same time. Similarly, the two bending cracks at the bottom edge at
midspan are visibly depicted in the LS-DYNA model. Some secondary cracks can also be predicted
accurately from the tetrahedron model.
Some noticeable differences related to the cracking pattern correspond to web cracking over the support
as well as a flexural crack formed at the top side close to the support from a time 푡 = 4.0 ms, which are
not observed in the DIC-2016 results.
11.6 Sensitivity Analysis
11.6.1 Overview
During the creation of the LS-DYNA models, different decisions were made regarding input parameters
to the FE models. Some of these values were assumed to be equal to the default or recommended values
according to the LS-DYNA manual and to the authors of the material models. However, the influence of
such parameters is uncertain as it depends on the conditions of a given model. Therefore, a detailed study
was carried out in order to analyze the effects of different parameters in the results of the FE simulation.
This study serves as a mean of further verification of the LS-DYNA models and to determine possible
suggestions for future analyses.
Only parameters concerning modelling procedure were investigated in this section. The experiment
conditions regarding geometry, boundary conditions, load application, and basic material properties
remained unchanged. Furthermore, for the sake of simplicity, only a drop-height equal to ℎ = 5.0 m was
considered.
The parameters chosen for the sensitivity analysis include the compressive softening parameter, 휀푓 푐 (or
EFC, according to LS-DYNA notations), and the hourglass coefficient, QM.
Furthermore, different beam element types, as well as truss element type, are available in LS-DYNA
which could be used to model the reinforcement bars. As discussed in Section 10.3, a beam element with
one integration point (1 × 1) on the cross-section was chosen to represent the bars in the base model.
However, in order to investigate the influence of this input parameter, a comparison was also made
when modelling the reinforcement bars using 2 × 2 Gauss integration scheme and also when using truss
elements instead of beam elements.
Additionally, the effects of reducing the time step was also evaluated, in accordance with the recom-
mendations in (Lovén and Svavarsdóttir, 2016). The scope of the sensitivity study is summarized in
Table 11.12.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 159	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 159	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 159

-- 179 of 333 --

Table 11.12 Scope of sensitivity study and studied parameters for both FE models. Underlined values
refer to input parameters chosen for respective base models.
Parameter Hexahedron
LS-DYNA model
Tetrahedron
LS-DYNA model
QM
0.01
Not used	0.1
1.0
EFC 1 ⋅ 10−4 1 ⋅ 10−4
1 ⋅ 10−3 -
Reinforcement
Elements
Beam (1 × 1 IP) Beam (1 × 1 IP)
Beam (2 × 2 IP) Beam (2 × 2 IP)
Truss Truss
Time step
factor
0.3 0.4
0.6 -
0.9 -
11.6.2 Hourglass coefficient, QM
The hourglass force, that is, the fictitious force needed in order to prevent zero-energy modes in under-
integrated hexahedron elements, is proportional to the hourglass coefficient, QM, as described in Sec-
tion 10.3. The choice of hourglass parameter is expected to have a significant influence on the results. In
order to test such influence, different analysis were performed for different values of QM; namely: 1.0, as
recommended for elastic materials; 0.1, the default value; and 0.01, as suggested for non-linear material
models. The parameter QM is only relevant for hexahedron solid elements, as tetrahedron elements do
not develop zero-energy modes and therefore it is not necessary to introduce the hourglass force in the
model constructed with tetrahedron elements.
Figure 11.8 shows the deflection of the midpoint over time for different values of hourglass coefficient,
compared with the average deflection measured in the laboratory tests. For a reduced value of QM,
the maximum deflection is clearly overpredicted. On the other hand, increasing QM to 1.0 reduces the
maximum deflection so that the predicted value corresponds rather well with the experimental results,
although the curve for QM = 1.0 falls out of phase with the experimental curve after maximum deflection
and exhibits a higher frequency, indicating a stiffer response.
160 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	160 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	160 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 180 of 333 --

0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
Hexa-05-QM 0.01
Hexa-05-QM 0.10
Hexa-05-QM 1.00
Average
Figure 11.8 Midspan deflection over time for model with 5 mm hexahedron elements for different values
of hourglass coefficient, QM.
The deflection-time curves in Figure 11.8 may suggest that using QM = 1.0 produces a better prediction
of the experimental results; however, the distribution of strains for an increased value of QM, shown in
Table 11.13, does not appear to be consistent with the experiments. The strain field shows even more
distributed cracked regions instead of individual cracks for the model with QM = 1.0; furthermore, more
cracks are detected along the span, which render the concrete more ductile. The vertical flexural cracks
which should take place at the bottom edge at midspan are spread over more than one element row at all
times. Additionally, even though there is a tendency for inclined cracking to develop below the impact
zone, the cracks are, once more, spread over the midspan region. The magnitude of the strains for QM =
1.0 is smaller than for a model with QM = 0.1, which suggests that gathering the summation of strain
into a smaller region could give a similar strain distribution to QM = 0.1. These results indicate that the
value of crack band width, assumed equal to the element length by CDPM2, should be larger if QM =
1.0 is used.
According to these results, it appears that choosing the default value of hourglass coefficient, QM = 0.1,
gives more accurate results for the conditions of the analyses performed compared to 0.01 and 1.0.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 161	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 161	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 161

-- 181 of 333 --

Table 11.13 Strain field for the 5 mm hexahedron LS-DYNA model for different values of hourglass
coefficient.
QM t = 0.2 ms t = 0.4 ms
0.01
0.1
1.0
QM t = 0.8 ms t = 2.0 ms
0.01
0.1
1.0
QM t = 4.0 ms t = 9.2 ms
0.01
0.1
1.0
Principal
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
0 0.32 0.63 0.95 1.27 1.59 1.90 2.22 2.54 2.85 3.17
strain [%]
11.6.3 Compressive softening parameter, 휀푓 푐
Another interesting study is the verification of the softening parameter in the material model CDPM2,
for which a value of 휀푓 푐 = 1 ⋅ 10−4 is set by default in the material model. As described in Section 10.5.1,
this parameter controls how ductile the concrete behaves in compression; larger values of 휀푓 푐 increase
the ductility of concrete elements. In Section 11.2 it was explained that 휀푓 푐 had to be adjusted for the
tetrahedron models in order to circumvent convergence problems, while the default value was kept for
the hexahedron models. Therefore, since the adopted values of 휀푓 푐 are different for hexahedron and
162 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	162 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	162 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 182 of 333 --

tetrahedron elements, an evaluation of the influence of a value of 휀푓 푐 = 1 ⋅ 10−3 in the hexahedron model
was performed.
The deformation-time relations can be seen in Figure 11.9. It can be observed that the maximum
deflection decreases for an increased value of 휀푓 푐 , which makes the response closer to the experimental
curve.
In Table 11.14, a comparison of the strain fields for different values of 휀푓 푐 is made. There does not
seem to be a significant difference in cracking pattern. However, two additional and longer vertical
flexural cracks at the bottom edge can be observed close to the impact region as early as 푡 = 0.8 ms for
the model with 휀푓 푐 = 1 ⋅ 10−3. These same cracks do appear for the base model, but later, at a time
푡 = 4.0 ms.
Furthermore, at 푡 = 4.0 ms, a wider bending crack can be observed along the span for the model with
휀푓 푐 = 1 ⋅ 10−3. This crack seems to correlate with the cracks observed in the experimental results and
the tetrahedron model, as shown in Table 11.11 from 푡 = 2.0 ms. These results indicate that choosing
휀푓 푐 = 1 ⋅ 10−3 for this type of analysis might give a better representation of the dynamic response when
using hexahedron elements, though the results are still fairly similar to those obtained with the default
value, 휀푓 푐 = 1 ⋅ 10−4.
0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
Hexa-05-EFC 1e-4
Hexa-05-EFC 1e-3
Average
Figure 11.9 Midspan deflection over time for model with 5 mm hexahedron elements for different values
of compressive softening parameter, EFC.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 163	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 163	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 163

-- 183 of 333 --

Table 11.14 Strain field for the 5 mm hexahedron LS-DYNA model for different values of compressive
softening parameter, EFC.
EFC 푡 = 0.2 ms 푡 = 0.4 ms
1 ⋅ 10−3
1 ⋅ 10−4
EFC t = 0.8 ms t = 2.0 ms
1 ⋅ 10−3
1 ⋅ 10−4
EFC t = 4.0 ms t = 9.2 ms
1 ⋅ 10−3
1 ⋅ 10−4
Principal
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
0 0.32 0.63 0.95 1.27 1.59 1.90 2.22 2.54 2.85 3.17
strain [%]
11.6.4 Element type for modelling the reinforcement bars
Different element types and integration schemes across the cross section are available in LS-DYNA to
model beam elements. Due to the cross-sectional size of the reinforcement bars in relation with the
beam cross-section, no large variation in the results is expected when choosing the number of integration
points (IP). However, a reduction in computational effort is likely for underintegrated beam elements, or
truss elements. As explained in Section 10.3, it was decided to use Hughes-Liu beam elements with
1 × 1 IP to model the reinforcement bars; however, a study of the influence of the integration scheme was
performed. Two additional alternatives were considered: truss element, and Hughes-Liu beam element
with 2x2 Gauss IP, which is the default option in LS-DYNA.
Figure 11.10 shows the deflection over time of the midpoint for the hexahedron LS-DYNA model for
different element types, whereas Table 11.15 shows the cracking pattern for all three models. Only a
minor difference can be observed, though the results show that the model with truss elements is closer to
the base model with 1 × 1 IP beam elements.
It can be concluded that the choice of the element type to model the reinforcement bars has a negligible
influence in terms of cracking distribution and deflection over time for the hexahedron model.
164 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	164 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	164 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 184 of 333 --

0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
Hexa-05 Beam Elements 1 IP
Hexa-05 Beam Elements 2 IP
Hexa-05 Truss Elements
DIC - Average
Figure 11.10 Midspan deflection over time for model with 5 mm hexahedron elements for different
modelling techniques of reinforcement bars. "1 IP" corresponds to 1 × 1 integration
point, while "2 IP" corresponds to 2 × 2 Gauss integration scheme.
0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
Tetra-05 Beam Elements 1 IP
Tetra-05 Beam Elements 2 IP
Tetra-05 Truss Elements
DIC - Average
Figure 11.11 Midspan deflection over time for model with 5 mm tetrahedron elements for different
modelling techniques of reinforcement bars.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 165	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 165	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 165

-- 185 of 333 --

Table 11.15 Strain field for the 5 mm hexahedron LS-DYNA model for different modelling techniques
of reinforcement bars.
IP t = 0.4 ms t = 2.0 ms
1 × 1
2 × 2
Gauss
Truss
element
IP t = 4.0 ms t = 9.2 ms
1 × 1
2 × 2
Gauss
Truss
element
Principal
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
0 0.32 0.63 0.95 1.27 1.59 1.90 2.22 2.54 2.85 3.17
strain [%]
The midpoint deflection over time for different element types is depicted in Figure 11.11 for the tetrahedron
model. It was also observed that the model with truss elements produces virtually the same results as
those of the model with one-integration point beam elements, although the truss-element model runs
for a slightly longer time before reaching convergence problems. On the other hand, the analysis with
2 × 2 IP beam elements can be performed until termination (25 ms). Besides, the maximum deflection
obtained with this model is about 5% smaller than the base model.
Since the tetrahedron model with 2 × 2 IP elements reaches no convergence issues, a comparison of the
deflection over time relation after maximum deflection can be made with the experimental results for
ℎ = 5.0 m in Figure 11.11. Here, it is evident that the response of this model is stiffer since oscillations
are found to occur at an earlier stage compared to the DIC results. Similar observations were found for
the base model with drop-height of ℎ = 2.5 m in Section 11.4.3 and may be a consequence of volumetric
locking when tetrahedron elements are used.
More relevant differences can be observed on the cracking pattern, as shown in Table 11.16. While
the three models exhibit a similar crack pattern during the first millisecond after impact, high values
of strains are present along the reinforcement bars from 푡 = 2.0 ms for the model with 2 × 2 IP. These
results can be considered unrealistic, as such behavior was not observed in the laboratory tests.
166 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	166 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	166 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 186 of 333 --

To the extent of the modelling techniques and conditions studied here, modelling the reinforcement bars
by using beam elements with one integration point or truss elements produces more reliable results in
terms of deflection over time as well as in crack pattern representation.
Table 11.16 Strain field for the 5 mm tetrahedron LS-DYNA model for different modelling techniques
of reinforcement bars.
IP 푡 = 0.2 ms 푡 = 0.4 ms
1 × 1
2 × 2
Gauss
Truss
element
IP 푡 = 0.8 ms 푡 = 2.0 ms
1 × 1
2 × 2
Gauss
Truss
element
IP 푡 = 4.0 ms 푡 = 7.4 ms
1 × 1
2 × 2
Gauss
Truss
element
Principal
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
strain [%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 167	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 167	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 167

-- 187 of 333 --

11.6.5 Time step factor, TSSFAC
As explained in Section 10.8, the calculated critical time step is multiplied by a factor TSSFAC, equal
to 0.9 by default. This time step proves to be small enough to perform the analysis for the hexahedron
models for different drop-heights. However, in order to circumvent convergence problems with the
tetrahedron models, TSSFAC needed to be reduced to 0.4 when performing FE analyses for ℎ = 5.0 m.
Similarly, static analyses for hexahedron model, detailed in Section 11.7, reached convergence problems
for a load closed to peak load, and the scale factor was then reduced to 0.6 to avoid such problems.
This shows that changing the time step has an effect on the computations. Therefore, it was decided to
perform several analyses for the hexahedron model for different values of time step factor. Figure 11.12
shows the deformation over time of the midpoint for all these different analyses. Only a minor difference
can be observed regarding the midpoint deflection, and virtually no difference was detected between
cracking patterns (not shown). This indicates that if the model is able to run until completion for a given
time step size, then a smaller value of time step would not significantly influence the response.
0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
Hexa-05 - TSSFAC = 0.3
Hexa-05 - TSSFAC = 0.6
Hexa-05 - TSSFAC = 0.9
Figure 11.12 Midspan deflection over time for the model with 5 mm hexahedron elements for different
values of time step factor, TSSFAC.
11.6.6 Conclusions
The hourglass coefficient used for one-integration point hexahedron elements was proved to have an
important influence on the results of the FE analysis. Using QM = 0.01 overpredicted the midpoint
deflection to a great extent, while the cracking pattern was found to be more concentrated than for the
default value, QM = 0.1. On the other hand, using an increased value, QM = 1.0, resulted in a value of
maximum deflection which closely corresponded to experimental results. However, the deflection-vs-
168 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	168 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	168 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 188 of 333 --

time relation indicates that the model exhibits a stiffer response compared with the experimental results;
which, in conjunction with an unrealistic cracking pattern, leads to the conclusion that using QM = 1.0
would be inappropriate for this type of FE analysis. Finally, the model with the default value, QM = 0.1,
produced the most reliable results in terms of deflection and cracking pattern.
When altering the compressive softening parameter for the hexahedron FE model from the default value
of 휀푓 푐 = 1 ⋅ 10−4 to a more ductile response, little change in terms of cracking distribution was noticed.
However, the deflection over time relationship showed a better correspondence to the experimental
values, which indicates that a value 휀푓 푐 = 1 ⋅ 10−3 may be a more reliable choice when using hexahedron
elements for the type of FE analysis described in this project.
Further studies were also conducted regarding reinforcement element types. The hexahedron FE model
showed little sensitivity in terms of cracking pattern as well as in deflection over time for the three types
studied. However, differences became more profound when performing the same study with tetrahedron
elements. The investigation showed minor differences between truss elements and 1 × 1 integration
points beam elements; however, significant differences were found for the tetrahedron model with 2 × 2
integration points in terms of midpoint deflection and cracking distribution, where large magnitude of
strains where observed alongside reinforcement bars. In conclusion, the choice of element type to model
the reinforcement bars might affect significantly the results if a tetrahedron mesh is used. This shows
that the tetrahedron elements should be used carefully, and different trials are required to find the most
suitable values for input parameters.
Finally, the study pertaining to the time step factor, TSSFAC, showed negligible differences regarding
deflection and cracking pattern for different sizes of time step, provided that a suitable value of time
step to reach completion of the analysis has been found. It was concluded that adjustments of TSSFAC
could reliably be utilized with minor influence on results when attempting to circumvent convergence
issues.
11.7 Static Analysis
11.7.1 General
As described in Section 10.7, an analysis simulating static tests was also performed on the LS-DYNA
models. The loading was applied as a prescribed velocity on the nodes on the top of the beam at midspan.
The velocity was increased gradually from 0 mm∕ms to 0.07 mm∕ms during the first 100 ms and kept
constant thereafter until reaching the desired deformation.
However, in order to ensure that inertial effects under a specific loading rate are negligible, two other
analysis with different loading rates were performed. This preliminary study was performed using a
20 mm mesh size due to computational costs, and was conducted using hexahedron elements. Table 11.17
shows the conditions for the different analyses.
The load-deformation relations for different loading rates are illustrated in Figure 11.13. It can be
observed that there is good equivalence between all relations, particularly so until a deflection of 12 mm.
From that point on, the structure exhibits a snap-through behavior. The results indicate that using the
fastest studied loading rate, 0.07 mm∕ms, is adequate to analyze the static behavior of the beam.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 169	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 169	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 169

-- 189 of 333 --

Table 11.17 Different loading rates to simulate static analysis in LS-DYNA.
Loading rate
[mm∕ms]
Final Deflection
[mm]
Loading Time
[ms]
0.070 31.5 500
0.033 31.4 1000
0.016 31.2 2000
0
2
4
6
8
10
12
14
16
0 	5 	10 	15 	20 	25 	30
Load,
 F [kN]
Deflection, u [mm]
LT 0.5 sec - LR 0.070 mm/ms
LT 1.0 sec - LR 0.033 mm/ms
LT 2.0 sec - LR 0.016 mm/ms
Figure 11.13 Static analysis for the model with 20 mm hexahedron elements for different loading rates.
LT and LR stand for "loading time" and "loading rate", respectively.
After deciding on a reasonable loading rate, analyses were performed on the models with 5 mm elements.
However, the static analysis using 5 mm tetrahedron elements could only be run until a deflection of
7.8 mm due to excessive computational costs since the number of elements for such model is close to
900 ⋅ 106. For this reason, the static analysis was also carried out on the model with 10 mm tetrahedron
elements, in an attempt to capture the behavior of the beam up to and beyond peak load. Figure 11.14
shows the static load-deformation relationships for all models.
The 5 mm hexahedron model leads to a rather good prediction of the ultimate load capacity of the beam.
Despite a slight underprediction, these results are closer to the mean experimental value of load capacity.
However, the response up to the onset of yielding is stiffer in the FE analysis compared to experimental
results.
170 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	170 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	170 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 190 of 333 --

0
2
4
6
8
10
12
14
16
0 	5 	10 	15 	20 	25 	30
Load,
 	F 	[kN]
Deflection, 	u 	[mm]
Load 	- 	Displament 	curve 	for 	different 	element 	types
Static Test - Average
Hexa-05
Hexa-20
Tetra-05
Tetra-10
Figure 11.14 Static analysis for different models. LR = 0.070 mm/ms.
The results for the 5.0 mm tetrahedron model show a significant overprediction in terms of load capacity
as well as stiffness. Recall that the analysis could only be simulated to a deflection of 7.8 mm due to
computational costs and limitations in run-time; however, judging by the shape of the load-deflection
relationship, the analysis should be run for a longer duration in order to reach the true load carrying
capacity of the model, which indicates that the degree of overprediction for the 5.0 mm tetrahedron
model is larger than documented.
As explained in Section 10.3, different meshing procedures can be adopted when creating a tetrahedron
mesh in LS-DYNA. Initially, only the 10 mm tetrahedron model created using skin remesh was considered.
However, the behavior appears to be unrealistic, as this beam fails due to shear mechanism, see Table 11.19.
It was observed in the experiments that the undamaged beams of Series-3 should fail in a bending failure
mechanism. In an attempt to reproduce this phenomenon, a new model with 10 mm tetrahedron elements
was created where the optional procedure of skin remeshing was disregarded. This new model shows
a considerable overprediction of the load capacity and a much stiffer response, although the dominant
failure mode is bending, as shown in Figure 11.15.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 171	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 171	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 171

-- 191 of 333 --

0
5
10
15
20
25
0 	5 	10 	15 	20 	25 	30
Load,
 F [kN]
Deflection, u [mm]
Static Test - Average
Tetra-10
Tetra-10 - No Skin Remesh
Figure 11.15 Static analysis for the model with 10 mm tetrahedron elements when using different
meshing procedures.
Values of peak load for the analyses are summarized in Table 11.18. The strain distributions at peak
load are shown in Table 11.19. Further information regarding cracking pattern at different times for all
the models considered can be found in Appendix H.4. The tetrahedron models seem to overpredict the
load capacity to a great extent, as long as the failure mode is bending; this effect also appears to be more
pronounced for larger element sizes. The overprediction could be attributed to volumetric locking due to
the geometry of the tetrahedron elements.
Table 11.18 Peak load for different static analysis.
Method Peak Load
[kN]
Hexa-05 13.0
Tetra-05 15.5
Tetra-10 12.6
Tetra-10 - no skin remesh 21.5
Static test - average 13.9
172 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	172 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	172 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 192 of 333 --

Table 11.19 Strain field at peak load for static analyses. Observe that the limits of the color-scale
varies depending on the mesh size and element type, refer to Appendix H.4.
Deflection/
Load Strain field at peak load
Hexa-05
푢 = 25.0 mm
퐹 = 12.3 kN
Tetra-05
푢 = 7.5 mm
퐹 = 15.4 kN
Tetra-10
푢 = 9.4 mm
퐹 = 9.6 kN
Tetra-10
(no remesh)
푢 = 15.0 mm
퐹 = 21.0 kN
11.7.2 Sensitivity analysis
The influence of some modelling parameters of the material model CDPM2 on the results of the static
analysis was also briefly verified, in order to gain further insight with respect to possible effects to the
dynamic analysis.
Initially, the compressive softening parameter was evaluated and the results were compared against
average experimental values and the predicted load-deflection relationship. The results are shown in
Figure 11.16. The behavior in state I and II is virtually unaffected by this parameter. The difference
commences to be noticeable for state III. The curve for 휀푓 푐 = 1 ⋅ 10−3 shows ascending behavior, while
there is a small decrease for the curve for 휀푓 푐 = 1 ⋅ 10−4. However, the model with 휀푓 푐 = 1 ⋅ 10−4 presents
convergence issues for a load level close to peak load. In order to circumvent this problem, the time
step factor (originally set to the default value, 0.9), was reduced to 0.6. Ultimately, the influence of the
compressive softening parameter does not appear to have a significant influence on the static analysis,
and it is observed that the hexahedron model yields similar results in terms of load capacity to the results
of the hand calculations.
Secondly, the hourglass coefficient, QM, was evaluated. The load-deformation relationship for different
values of QM is shown in Figure 11.17. For an increased value of hourglass coefficient, QM = 1.0, a
stiffer response and a larger load capacity was observed. This phenomenon is reflected on the behavior
of the models for impact loading, shown in the sensitivity study performed in Section 11.6.2, where the
maximum deflection due to impact loading has a smaller value for the model with QM = 1.0, and the
oscillations of the structure begin at an earlier stage and exhibit a higher frequency.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 173	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 173	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 173

-- 193 of 333 --

0
2
4
6
8
10
12
14
16
0 	5 	10 	15 	20 	25 	30
Load,
 F [kN]
Deflection, u [mm]
Static Test - Average
Hexa-05 - EFC = 1e-3
Hexa-05 - EFC = 1e-4
Design Curve fy = 686 MPa
Figure 11.16 Static analysis for model with 5 mm hexahedron elements for different values of softening
parameters, EFC.
0
2
4
6
8
10
12
14
16
0 	5 	10 	15 	20 	25 	30
Load,
 F [kN]
Deflection, u [mm]
Static Test - Average
Hexa-05 - QM = 1.0
Hexa-05 - QM = 0.1
Design Curve fy = 686 MPa
Figure 11.17 Static analysis for model with 5 mm hexahedron elements for different values of hourglass
coefficient, QM.
174 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	174 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	174 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 194 of 333 --

11.7.3 Conclusions
Results from the static analyses show that the hexahedron base model with 5 mm elements is able to
predict to a good extent the behavior of the beam specimens observed on the laboratory tests. The
tetrahedron base model, on the other hand, overpredicts load-deflection relationships in terms of stiffness
as well as load carrying capacity. This can be related to volumetric locking pertinent to tetrahedron
elements, resulting in an overly stiff behavior of the structure. Such phenomenon is expected to influence
the dynamic behavior during impact loading analysis, which was indeed observed in Section 11.4.4 and
Section 11.6.6, and affects output parameters such as maximum deflection, time at which maximum
deflection occurs, and frequency of oscillations.
Moreover, the distribution of tetrahedron elements and how the meshing procedure is performed was
found to significantly influence the response of the model for the simulated static load. When following
the meshing procedure used for the base model to create a 10 mm tetrahedron mesh, the structure failed
in a shear failure. However, when disregarding the skin remesh option to generate a different 10 mm
tetrahedron mesh, the predominant failure mode changed to flexural failure, with a significant increase
of stiffness and load carrying capacity. These results point yet again to an attentive modelling procedure
when using tetrahedron elements; since the element distribution seem to have a great effect on the
response of the FE model.
Additionally, the results show that is possible to use a compressive softening parameter corresponding to
휀푓 푐 = 1 ⋅ 10−3 for both hexahedron and tetrahedron models. A small influence on the static analysis is
noticed for hexahedron elements. On the other hand, the resultant maximum deflection in the dynamic
response decreases with about 8 %, which is closer to the experimental results. This suggests that using
the hexahedron model with 휀푓 푐 = 1 ⋅ 10−3 results in a more accurate representation of the real behavior
of the structure.
Finally, it was concluded that increasing the value of the hourglass parameter results in a stiffer response
as well as an increased load carrying capacity. This relationship was also observed in the sensitivity
study for dynamic loading.
11.8 Parametric Studies
11.8.1 Overview
A parametric study was conducted for the hexahedron and tetrahedron base models. This was carried out
in order to determine and assess how various loading scenarios would influence the dynamic response,
and may serve as a basis for future experimental studies.
11.8.2 Position of the reinforcement bars
As mentioned in Section 9.6.2, the position of reinforcement bars were found to be displaced when the
actual position was investigated by sawing the specimens. The mean adjusted position of the bars, shown
in Figure 9.20, was introduced in the LS-DYNA models to test the effect on the response. Figure 11.18
shows how the midpoint deflection varies over time for different positions of the bars. It can be observed
that the maximum deflection decreases for both models. This implies that the accuracy of the hexahedron
model to predict the deflection improves slightly. On the other hand, since the deflection according to
the tetrahedron model also decreases, the correspondence to experimental values diminishes.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 175	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 175	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 175

-- 195 of 333 --

0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
Tetra-05 - Nominal Position
Tetra-05 - Adjusted Position
Hexa-05 - Nominal Position
Hexa-05 - Adjusted Position
DIC - Average
Figure 11.18 Midpoint deflection over time for models with 5 mm elements for different positions of
the reinforcement bars.
The strain distribution for the hexahedron model (not shown) was not significantly affected by the change
of position of the reinforcement. However, some differences were observed in the strain field obtained
from the tetrahedron model, as seen in Table 11.20 for different times after impact. First, the magnitude
and extension of the flexural cracks at the bottom edge at midspan are smaller for the model with adjusted
position of the bars. Besides, a crack with a slight inclination which opens from the bottom edge can
be observed close to the midspan region in the modified model. A similar crack can be noticed for
the base model, but its magnitude and extension is much smaller. Finally, large values of strains can
be noticed along the top bar close to the support region for the model with adjusted bar position from
a time 푡 = 4 ms. Even though such differences can be considered as minor, the results indicate that
the tetrahedron model might be more sensitive to changes in the input parameters than the hexahedron
model.
176 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	176 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	176 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 196 of 333 --

Table 11.20 Strain field for the 5 mm tetrahedron LS-DYNA model for different positions of the rein-
forcement bars.
Position 푡 = 0.8 ms 푡 = 2.0 ms
Nominal
Adjusted
Position 푡 = 4.0 ms 푡 = 7.4 ms
Nominal
Adjusted
Principal
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
strain [%]
11.8.3 Influence of drop-weight position
Another parametric study was conducted by dynamically loading the tetrahedron FE model asymmetri-
cally with respect to a vertical axis crossing at midpoint of the reinforced concrete beam. The impact
height was set to ℎ = 5.0 m and the drop-weight was chosen to be displaced 50 mm towards the left
support from the midpoint, see Figure 11.19. The study was performed with the purpose of gaining
further insight of how the response might differ for a slightly asymmetric load case; an event which
could happen unintentionally during experimental testing.
v
1000 [mm]
450 50
Figure 11.19 Loading condition for the asymmetric loading FE analysis.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 177	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 177	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 177

-- 197 of 333 --

The analysis was performed on the tetrahedron FE model since an accurate representation of the strain
field due to the asymmetric loading was desired. Table 11.21 details the cracking distribution at given
times and at the time of maximum deflection. A comparison with the base tetrahedron model for
ℎ = 5.0 m at the time of maximum deflection is also made.
Table 11.21 Strain field for the 5 mm tetrahedron LS-DYNA model for asymmetric impact loading.
Time Strain field for impact loading
푡 = 0.2 ms
X 	Y	X 	Y
ZZ
max=0.0769181, at elem# 351707
min=-0.000916486, at elem# 298595
Contours of Max Prin Strain
Time = 	0.99987
LS-DYNA keyword deck by LS-PrePost
0.000e+00 _
3.760e-03 _
7.520e-03 _
1.128e-02 _
1.504e-02 _
1.880e-02 _
2.256e-02 _
2.632e-02 _
3.008e-02 _
3.384e-02 _
3.760e-02 _
Max Prin Strain
푡 = 0.4 ms
푡 = 0.6 ms
푡 = 0.8 ms
푡 = 1.0 ms
푡 = 2.0 ms
푡 = 4.0 ms
푡 = 7.0 ms 1
푡 = 7.2 m 2
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
1 Time at maximum deflection due to asymmetrical impact loading.
2 Strain field at maximum deflection for the tetrahedron base FE model
From visual inspection it is noted that the overall strain field response is rather similar to what has been
previously found for the base tetrahedron FE model. However, as a result of the asymmetric impact
loading, the inclined flexural shear cracks appearing to the right of the impact location are more frequent.
These cracks are also wider and thus propagate further than the cracks occurring to the left of the
impacted area. The deformed shape over time is presented in Figure 11.20, where more distinct shifts in
178 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	178 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	178 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 198 of 333 --

curvature can be detected towards the right support, which reflect the cracks in Table 11.21.
Conclusively, an asymmetrical strain field response was indeed generated. While the cracked region
underneath the impacted area appeared rather similar to the strain distribution of the base model,
dissimilarities between the strain fields were found further away from the impacted area. For instance,
indications of asymmetrical cracking over the supports can be noted for the asymmetrically loaded model,
as more extensive cracking is observed over the right support. Besides, large values of strain along the
top bar are noticed close to the right support.
Refer to Figure 11.20, where it can be noticed that the right end of the beam is lifted over the support to a
higher extent than the left end. Furthermore, after the initial uplift, the left portion of the beam falls back
on the support first, generating a reaction force of approximately 70 kN, see Figure 11.21. Eventually,
the right end of the beam collides with its respective support as well, almost in conjunction with the
second rebound of the left end. Presumably due to the higher uplift, a larger reaction force of 90 kN is
registered on the right support. This occurrence could explain why more extended cracking is observed
over the right support. Had the beam been loaded asymmetrically by a concentrated static load, a higher
reaction force would have occurred at the support closest to the loading point. In that sense, the results
of the asymmetrical impact loading differ from what would be expected from a static load case.
-20
-16
-12
-8
-4
0
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Deflection,
 u [mm]
Length, l [mm]
0.2 ms
1.0 ms
2.0 ms
3.0 ms
4.0 ms
7.0 ms
Figure 11.20 Deformed shape due to asymmetrical impact loading for the 5 mm tetrahedron LS-DYNA
model. Maximum displacement occurred at 푡 = 7.0 ms.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 179	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 179	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 179

-- 199 of 333 --

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
0 	2 	4 	6 	8 	10 	12
Time, t [ms]
Left Support
Right Support
Reaction Force [kN]
Figure 11.21 Calculated reaction force for each support due to asymmetrical impact loading for the
5 mm tetrahedron LS-DYNA model. Note that the beam falls repeatedly on the left support
with a higher frequency than on the right support.
11.8.4 Influence of drop-height on the dynamic response
An investigation regarding effects of the drop-height on the dynamic response of the two base LS-DYNA
models and the simplified 2DOF system was conducted. The additional studied drop-heights were
set to ℎ = 1.0 m and ℎ = 7.5 m. The results were compared to the response previously observed for
drop-heights of ℎ = 2.5 m and ℎ = 5.0 m. The deflection over time plots for the studied drop-heights are
presented in Figure 11.22; relevant parameters gathered from the plots are shown in Figure 11.23.
Based on the dynamic response for various drop-heights, all three models seem to converge towards a
similar response with decreasing drop-height, as can be seen in Figure 11.22. This is further strengthened
by the key parameters gathered in Figure 11.23, where it can be seen that the differences between the
three models decrease in terms of maximum deflection, 푢푚푎푥, and the time at which maximum deflection
occurs, 푡푚푎푥, with lower drop-heights.
Further comparisons are made in terms of cracking distribution at maximum deflection for various
drop-heights in Table 11.22. From visual inspection of the strain fields for the hexahedron model,
no traces of inclined cracking if found in the impact region for ℎ = 1.0 m. However, with increased
drop-height, the inclined crack region appears and is the most pronounced for the model with ℎ = 7.5 m,
where the inclined cracks and the vertical cracks in fact merge to form a large cracked region at midspan.
Furthermore, flexural cracks which form away from midspan for the model with ℎ = 1.0 m are wider and
more evenly spaced than in analyses conducted for larger drop-heights; such distribution resembles a
typical crack distribution of a simply supported beam subjected to a static point load at midspan.
180 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	180 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	180 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 200 of 333 --

0
10
20
30
40
0 	5 	10 	15 	20
Deflection,
 u [mm]
Time, t [ms]
Hexa
Tetra
2DOF
h = 7.5 m
h = 5.0 m
h = 2.5 m
h = 1.0 m
Figure 11.22 Deflection over time for different drop-heights for both LS-DYNA models and 2DOF
system.
0
3
6
9
12
15
0
10
20
30
40
50
1.0 	2.5 	5.0 	7.5 	1.0 	2.5 	5.0 	7.5
Deflection,
 u [mm]
Time,
 t [ms]
Tetra
Hexa
2DOF
Drop-height, h [m]
Time at maximum deflection,
t max
Maximum deflection,
u max
Figure 11.23 Maximum midpoint deflection, 푢푚푎푥, and time at maximum deflection, 푡푚푎푥, for different
drop-heights for both LS-DYNA models and 2DOF system.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 181	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 181	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 181

-- 201 of 333 --

When studying the strain distribution of the tetrahedron model for different drop-heights, similar trends
as observed for the hexahedron model are noticed. Namely, that the inclined cracks due to impact are
less pronounced for lower drop-heights. Additionally, the inclined crack pattern underneath the impact
region shows a relatively small propagation and a steeper inclination for ℎ = 1.0 m; these cracks extend
further and become wider for increased drop-heights.
Table 11.22 Comparison of strain fields at 푡푚푎푥 for the two LS-DYNA models for different drop-heights.
Drop-height Hexahedron FE model:
Strain field at time of maximum deflection
ℎ = 1.0 m
ℎ = 2.5 m
ℎ = 5.0 m
ℎ = 7.5 m
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.32 0.63 0.95 1.27 1.59 1.90 2.22 2.54 2.85 3.17
Drop-height Tetrahedron FE model:
Strain field at time of maximum deflection
ℎ = 1.0 m
ℎ = 2.5 m
ℎ = 5.0 m
ℎ = 7.5 m
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
182 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	182 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	182 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 202 of 333 --

Furthermore, the strain distribution appears to be more symmetrical and cracks are more uniformly
distributed along the span for lower drop-heights. In fact, cracks for ℎ = 1.0 m propagate in almost a
purely flexural form close to midspan, and exhibit a more noticeable inclination away from the midpoint
as the effect of shear force becomes more relevant. Therefore, the crack pattern for ℎ = 1.0 m strongly
resembles that of a static loading case.
Moreover, with increasing drop-heights, cracking along the top reinforcement bars are found to be more
pronounced. This behavior was also observed in the sensitivity study performed in Section 11.6.4 when
using 2 × 2 IP beam elements to model the reinforcement bars, and could be an indication that some sort
of anchorage failure is taking place or that there exist some compatibility issues when using material
model CDPM2 in conjunction with tetrahedron elements for this type of analysis.
Conclusively, it can be stated that the capacity of the FE model to properly describe inclined cracking
becomes less relevant with lower drop-heights. This can be due to the fact that the shear stresses generated
by the impact event become relatively smaller with respect to bending stresses, as indicated by the strain
distribution at 푡푚푎푥 for ℎ = 1.0 m for both models in Table 11.22. This could be an explanation as to why
the two LS-DYNA models seem to converge towards a common response in terms of 푢푚푎푥 and 푡푚푎푥 with
lower drop-heights, which can be noted in Figure 11.23.
11.8.5 Fracture energy
An investigation of the influence of the concrete fracture energy on the beam behavior was also carried out,
as the parameter is intrinsically related to crack initiation and propagation. As described in Section 10.5,
the fracture energy is used to determine the ultimate crack width, 푤푓 , by using Equation (10.2). Then,
the parameter 푤푓 was changed accordingly to consider the variation of fracture energy. Apart from the
base value determined experimentally, two other values of fracture energy were used on the FE models
for a drop-height equal to ℎ = 5.0 m, namely: 0.5퐺푓 = 66 N m∕m2 and 2.0퐺푓 = 264 N m∕m2.
Figure 11.24 shows the deflection over time for both LS-DYNA models for different values of fracture
energy. However, it was not possible to run an analysis with tetrahedron elements with 퐺푓 = 66 N m∕m2
due to convergence issues.
It can be observed that the deflection increases for a reduced fracture energy. Conversely, the models
with a larger fracture energy produce a smaller deflection. These results can be explained due to the fact
that cracking occurs for higher stresses for larger values of fracture energy; and therefore the stiffness of
the cross-section is larger.
Note that the ultimate crack width, 푤푓 , for the models with tetrahedron elements is reduced by a factor
of 0.56, as described in Section 10.5.1 according to recommendations in (Grassl, 2016). This implies
that when using 퐺푓 = 264 N m∕m2 for tetrahedron model, a similar response to a case when 푤푓 is not
reduced by a factor of 0.56 is obtained. The results show that using full fracture energy with tetrahedron
elements yields an underprediction of the deflection and an overly stiff response.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 183	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 183	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 183

-- 203 of 333 --

0
5
10
15
20
25
30
0 	5 	10 	15 	20 	25
Deflection,
 u [mm]
Time, t [ms]
Hexa-05 - GF = 66 Nm/m^2
Hexa-05 - GF = 132 Nm/m^2
Hexa-05 - GF = 264 Nm/m^2
Tetra-05 - GF = 132 Nm/m^2
Tetra-05 - GF = 264 Nm/m^2
Figure 11.24 Deflection over time for both LS-DYNA models with drop-height h = 5.0 m for different
values of fracture energy.
184 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	184 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	184 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 204 of 333 --

12 Discussion
12.1 General
A summary and discussion of relevant observations gathered during the development of the thesis is
presented in this chapter. Initially, the observations from the experiments are treated. Subsequently, the
results from the non-linear finite element analyses are discussed.
12.2 Experimental Results
12.2.1 Digital image correlation
Most experimental results were processed through digital image correlation (DIC) of photographs taken
with a high-speed camera during the impact tests, and with a set of normal-speed cameras during the
static tests. This tool has proven to be very useful throughout the work of this thesis, as it allowed
to determine several resulting parameters from the experiments in order to gain further insight of the
response of reinforced concrete structures subjected to different loading conditions.
There were some limitations regarding DIC as implemented in this thesis work, most of which were
related to the equipment used. It was decided to record the entire length of the specimens, as opposed to
the setup adopted in previous test-series in (Lovén and Svavarsdóttir, 2016), where only half the length
was recorded. The decision of recording the entire length maintaining the same level of resolution as in
(Lovén and Svavarsdóttir, 2016) resulted in a loss of detail regarding the location and size of individual
cracks, particularly so for minor cracks, which may be misinterpreted as random background noise.
Therefore, the DIC analysis of the impact event regarding cracking distribution was limited to identifying
the presence of cracked regions instead of individual cracks.
However, interesting observations could still be made by recording the whole beam. For example, signs
of asymmetric response could be captured in the strain field on the surface of some specimens through
DIC post-processing. Such phenomenon might have been overlooked if only half of the beam had been
recorded.
If determining the cracking distribution through DIC analysis is a relevant objective of a certain research,
it is important to ensure that the experiments are recorded with satisfactory resolution. For the conditions
of the equipment described in this project, recording only half of the beam with the same experimental
setup is recommended. An alternative approach consists in using a similar camera on each half of the
beam. Otherwise, when the deflection and velocity of the beam and the drop-weight are of interest, a
lower level of resolution is acceptable.
12.2.2 Impact loading and static tests
The structural response of the beams during impact loading was noticed to be markedly different to
the response usually observed on a concrete beam subjected to a static load. An important difference
in the cracking distribution of concrete beams during impact loading compared to a static load case
corresponds to the occurrence of inclined cracking in the impact area, which becomes more apparent
for a higher impact energy. Moreover, it was noticed that the cracks generated during impact loading
greatly influenced the cracking pattern of subsequent static tests. Only a minimum amount of new cracks
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 185	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 185	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 185

-- 205 of 333 --

developed as static loading progressed on previously impact-damaged specimens; instead, previously
initiated cracks due to impact loading were reopened during the static tests. As a result, as the presence
of inclined cracking was more pronounced on beams subjected to a stronger impact, it was observed that
the cracking distribution present in specimens of Series-2 (drop-height ℎ = 5.0 m) during static tests
differed to a greater extent to that of the undamaged specimens than beams of Series-1 (drop-height
ℎ = 2.5 m).
The static load-deflection relationship of specimens of Series-1 was observed to conform to the response
of the undamaged beams; consequently, the beams of Series-1 exhibited similar characteristics in terms
of stiffness, load capacity, as well as plastic rotational capacity, to those of the undamaged beams. Hence,
it was concluded that the plastic rotational capacity of the damaged beams of Series-1 could be estimated
by simply subtracting the permanent plastic rotation due to impact from the total rotational capacity of
undamaged specimens.
On the other hand, it was found that the response during static loading of the beams of Series-2 differed
significantly to that of Series-1 and Series-3, in terms of load capacity, stiffness and also overall behavior.
As described in Section 9.4.2.2, it was found that the residual rotational capacity of Series-2 was
higher than that of undamaged specimens for all load levels. This observation was attributed to the
difference in cracking pattern. However, as explained in Section 9.4.3, comparisons of rotational capacity
between testing series as performed in this project might not be fair since the calculated values of the
ratio 푊푖,푥%∕휃푝푙,푥% for specimens of Series-2 indicate that the values of rotational capacity do not relate
proportionally to the internal work.
A different procedure could be followed for a more fair assessment. Instead of calculating the rotational
capacity of Series-2 for different load levels based on the load capacity of each individual beam, an
average value of maximum load for undamaged specimens could be adopted as a basis for calculations
of load levels. In that sense, 휃푝푙,100% for Series-2 would correspond to a level lower than 100%, since
the load capacity of specimens of series-2 was observed to decrease after impact loading. However,
the procedure to determine the rotational capacity adopted in this project still holds true for specimens
of Series-1, as the load capacity of such specimens did not decrease due to impact loading, and their
load-deformation relationship conforms to that of the undamaged beams.
Furthermore, a tendency to develop shear failure was observed on some beams of Series-2. For instance,
B-13 failed unexpectedly in a shear mechanism during static testing after impact loading. Additionally,
signs of major shear cracking at the web were noticed in B-15 during residual static testing; however, the
shear crack never became critical to the same extent as it did in B-13. These observations indicate that
with a higher drop-height, members which are designed to fail in flexure under static load may instead
exhibit a brittle shear failure mechanism when loaded dynamically or when subjected to a subsequent
static load after impact loading.
12.2.3 Predictions according to hand calculations and 2DOF model
Predictions of static load carrying capacity resulted in underestimation compared to experimental values
of the undamaged beams of Series-3. Attempts to improve the predictions were performed by considering
the real position of the reinforcement bars (measured in the laboratory by sawing the beams after the
static loading tests) and by assuming that the yield strength of the reinforcing steel is equal to the ultimate
strength; however, underestimation of load carrying capacity up to 9 % was still found. Therefore, there
186 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	186 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	186 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 206 of 333 --

might exist some underlying effects which have not been accounted for in the calculations, or perhaps
the procedure used may be too conservative in this regard.
The maximum deflection during impact load according to the 2DOF model was overestimated, which
may be attributed to the underestimation of load carrying capacity and the omission of strain rate effects
from the model. By including strain effects in terms of amplified values of stiffness and strength of the
materials, an increase in correspondence between predictions by the 2DOF model and the experimental
results could be obtained.
Additionally, it has been observed that the entire mass of the beam is not partaking in the initial stage of the
dynamic response. To account for such effects, a variation over time of the beam mass could be adopted,
similarly to what has been depicted in Figure 9.22 or to the work made in (Asplund and Steckmest, 2014),
which may further improve the correspondence of the 2DOF predictions to experimental values.
12.3 Finite Element Analysis Results
12.3.1 Hexahedron FE model
The base 5 mm hexahedron FE model overpredicted the deflection over time for impact cases compared
to experimental results, as much as 20 % for a drop-height ℎ = 5.0 m. Furthermore, a crack propagation
bias was noticed in that the cracks propagate following a vertical path, which could be attributed to the
inherent element distribution of the hexahedron mesh. Thus, the FE analysis with hexahedron elements
displayed a limitation at representing inclined cracking due to impact and static loads.
However, the shape of the deflection-time relationship was in phase with the experimental results,
indicating that the general behavior of the structure was fairly well described by the hexahedron model.
This was further emphasized by the static analyses conducted in Section 11.7, which showed good
correspondence with average load-deflection relationships gathered from experimental results.
Sensitivity studies showed that the hourglass coefficient, QM, heavily influenced the overall response of
the hexahedron model. Higher correspondence to experimental results in terms of maximum deflection
was obtained by increasing the factor QM, and vice versa; although the increase of QM affected negatively
the description of cracking distribution. These findings show that the effects of the hourglass control
should be investigated carefully; however, they also prove that QM could be use for calibration of the
hexahedron FE model, although the default value was found to be satisfactory.
A sensitivity analysis was also performed on the parameter 휀푓 푐 , which controls compressive damage
softening of concrete in the material model CDPM2. When increasing from the default (휀푓 푐 = 1 ⋅ 10−4)
to 휀푓 푐 = 1 ⋅ 10−3, a higher correspondence to experimental results in terms of deflection over time was
found. This change had no observable effect on the cracking pattern described by the model, and would
seemingly be an appropriate value to adopt for this type of analyses.
Parametric studies conducted in Section 11.8.2 regarding the measure real position of the reinforcement
bars resulted, in accordance to expectations, in a higher correspondence of the deflection-time relationship
to experimental results. If an analysis were to be performed by considering the adjusted position of the
reinforcement bars in conjunction with the adjusted value of 휀푓 푐 = 1 ⋅ 10−3, an improvement in terms of
maximum deflection would most certainly be obtained; while hopefully, the overall shape of deflection-
time relationship would still be in phase with experimental results. Perhaps, if needed, additional
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 187	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 187	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 187

-- 207 of 333 --

adjustment could be performed by slightly modifying the hourglass control parameter, QM.
12.3.2 Tetrahedron FE model
At a first glance, the results of the analyses with the 5 mm tetrahedron model showed very satisfactory
results in terms of maximum deflection compared to experimental results, and in terms of cracking
pattern compared to the DIC results presented in (Lovén and Svavarsdóttir, 2016). However, as remarked
in Sections 11.4.3 and 11.6.4, an overly stiff response was noticed for the model with tetrahedron
elements. This issue was further highlighted by the static analyses performed in Section 11.7, where
the base tetrahedron model significantly overpredicted the load carrying capacity and stiffness of the
beam. Possible explanations have been attributed to volumetric locking inherent to tetrahedron solids.
Therefore, the high correspondence in terms of maximum deflection is most likely a consequence of the
stiffer behavior pertinent to the tetrahedron elements.
Further issues related to tetrahedron models include the fact that the meshing technique adopted, and
more specifically the element distribution within the mesh of the FE model, has a significant influence on
the results of the analyses conducted. As presented in Section 11.7, when adopting the skin remeshing
procedure used for the base models, a shear failure mechanism was noticed in the static analysis of
the base 10 mm tetrahedron model. Therefore, to investigate the influence of mesh distribution, an
additional analysis was conducted where the optional remeshing procedure was omitted. Consequently,
the failure mechanism of the loaded beam shifted from a shear failure to a flexural failure. However,
a great overestimation in terms of load carrying capacity was also observed as a consequence of the
different element distribution. It is apparent that the element distribution has a profound influence on the
outcome of the results.
Additionally, models with tetrahedron elements proved to be more sensitive to changes of input parameters
such as the compressive softening parameter, 휀푓 푐 , and the type of element used to model the reinforcement
bars. Conclusively, findings from the conducted FE analyses using tetrahedron elements show that the
modelling procedure and its influences should be studied more thoroughly. However, as shown in the
parametric study in Section 11.8.2 when investigating the influence of drop-weight position, the ability
of the tetrahedron model to accurately represent cracking pattern could be of great use. If a more reliable
response in terms of deflection over time relationship could be simulated using tetrahedron elements, it
may prove to be a powerful tool to predict the outcome of various impact scenarios.
188 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	188 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	188 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 208 of 333 --

13 Final Remarks
13.1 General Description
The general aim of this thesis was to deepen the understanding of the behavior of impact loaded simply
supported concrete beams, where emphasis in studying plastic rotational capacity and how impact loading
influences the rotational capacity of reinforced concrete structures was made. The work was divided into
three main parts; namely, literature survey, experiments, and non-linear finite element analysis.
Two different loading conditions were considered during the experiments. Initially, some beams were
subjected to drop-weight impact loading from two different heights. Subsequently, the impact-damaged
beams were tested for deformation-controlled static loading. A group of undamaged beams were also
tested for static loading. All experiments were recorded using a high-speed camera during the impact
tests, and two normal-speed cameras during the static tests. The information recorded was post-processed
using digital image correlation (DIC).
Concerning the FE analysis, two different solid elements were adopted to model the concrete beam;
namely, hexahedron elements and tetrahedron elements. Both element types were implemented with
one integration point. Based on a convergence study, it was decided to use an element size of 5 mm to
construct the base models for both types of elements. Due to the geometry of the tetrahedron elements,
the resulting amount of elements for this element type is much larger than the number of elements for a
corresponding hexahedron model.
Preliminary predictions regarding load capacity, rotational capacity, and deflection of the beams during
both impact and static loading could be validated based on the experimental results. Furthermore, results
from FE analyses could also be compared with experimental results in order to assess the reliability
of the FE models and how various input parameters could influence the behavior predicted by the FE
models.
13.2 Conclusions
During the development of the thesis it was observed that the digital image correlation (DIC) analysis
is a convenient tool for the study of the impact behavior of concrete beams. However, a good level of
resolution is needed if the cracking pattern during the impact event is of interest. On the other hand, if
information regarding deflection and velocity is needed, a lower resolution is acceptable.
Results gathered from impact tests showed that both the deformed shape and cracking distribution of
the concrete beams a short time after impact differ considerably to those commonly observed in static
loading tests. Significant differences in cracking pattern include temporary flexural cracking at the top
edge of the beams and inclined cracking underneath the impact region.
During subsequent static experiments after impact loading, it was noted that the development of cracking
depends to great extent on the cracks generated during the impact event. Furthermore, beams subjected to
a weak impact exhibited a similar response in terms of load-deformation relationship to that of undamaged
beams; therefore, the plastic rotation and load capacity for both cases were similar. Contrarily, the beams
subjected to a strong impact showed a reduced load capacity and an increased rotational capacity
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 189	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 189	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 189

-- 209 of 333 --

compared to undamaged beams. The increase in rotational capacity is likely a consequence of extensive
cracking in the impacted region, which could allow for a larger amount of reinforcement to yield at
ultimate limit state and beyond.
Regarding the non-linear FE analysis, it was observed that a rather good description of the impact
behavior is achieved with both the hexahedron and tetrahedron model. However, the hexahedron model
tended to overpredict the deflection of the beam and was shown to have difficulties at describing inclined
cracking due to the rectangular direction of the mesh elements. On the other hand, the tetrahedron model
predicted values of deflection closer to the experimental results, although an overstiff response was
observed for this model. Additionally, the tetrahedron model could describe the cracking distribution,
including secondary cracks, to a better extent than the hexahedron model. However, it was found that the
tetrahedron model is significantly sensitive to changes in input parameters such as mesh size, element
distribution on the mesh, and the element type used to model the reinforcement bars. In general terms, it
can be concluded that the FE models based on both element types produced satisfactory results with
respect to experimental results.
13.3 Future Studies
The experiments in this thesis work comprised impact loading tests followed by static testing of the
impact-damaged beams. Future studies could assess the dynamic (and subsequent static) response of
beams subjected to a second or more consecutive impact loads.
During the parametric studies presented in this document, the influence of variations in the loading
and geometrical conditions on the dynamic response of the concrete beam was briefly studied using
non-linear finite element analysis. It would be of interest to perform a similar parametric study through
experiments in a laboratory. Important factors to be tested could include: drop-heights different to
2.5 or 5.0 m; longer span length or larger section height, different amount of reinforcement, inclusion of
transverse reinforcement, and different location of the impact.
Regarding the post-processing of the experimental results, a relevant suggestion for future work is the
implementation of a different procedure for the calculation of the experimental rotational capacity of
impact-damaged beams. For instance, when the static load-deformation relationship of the impact-
damaged beams meet the undamaged load-deformation curve after peak load; the rotational capacity
could be determined based on the load capacity of undamaged beams, as opposed to the maximum load
capacity of each damaged beam.
As shown in this project, a 2DOF model could be a powerful tool to describe the response of impact
loaded concrete beams. However, some improvements could still be introduced to the model in future
studies, including consideration of strain rate effects on the material and the variation of the mass
transformation factor during the first milliseconds after impact.
Concerning the finite element modelling of the experiments, an interesting study would be the im-
plementation of a static analysis after running the impact-loading analysis, so that the response of
impact-damaged beams during static loading could be assessed further through finite element analysis.
This type of analysis could facilitate the study and provide with further insight regarding the cracking
distribution and the residual rotational capacity of damaged beams.
190 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	190 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	190 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 210 of 333 --

Furthermore, as described in this thesis, a model with tetrahedron elements is more suitable for describing
cracking distribution than a model with hexahedron elements. However, the tetrahedron elements produce
a stiffer response than what was observed in the experimental results as a consequence of volumetric
locking. Additionally, the tetrahedron model was more sensitive to changes in the input data. Further
studies regarding this type of element and its proper implementation is therefore deemed to be necessary.
A suggestion for further investigation could be the use of tetrahedron elements with more integration
points. A well implemented model could be of great use as it could, among others, accurately represent
cracking pattern as well as deflection-time relationships.
Moreover, it should be stressed that both finite element models were created by disregarding strain rate
effects and assuming full interaction between reinforcement bars and the surrounding concrete material.
Therefore, strain rate effects and bond-slip relationship could be incorporated in the models in future
studies with finite element analyses.
Finally, the response of the beams during impact loading, processed through DIC analysis, showed
a certain degree of asymmetry regarding cracking distribution and deformation. This occurrence
could indicate that the local properties of the material might vary from one section to the other. This
phenomenon could be described in a finite element analysis in future studies if randomized material
properties are assigned to the finite elements which form the concrete beam.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 191	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 191	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 191

-- 211 of 333 --



-- 212 of 333 --

References
Adhikary, S. D., B. Li, and K. Fujikake (2012). “Dynamic Behavior of Reinforced Concrete Beams
under Varying Rates of Concentrated Loading”. In: International Journal of Impact Engineering 47
(cit. on p. 63).
– (2015). “Residual Resistance of Impact-damaged Reinforced Concrete Beams”. In: International
Journal of Impact Engineering 67 (cit. on pp. 63, 64).
Andersson, J. and J. Antonsson (2015). “Design with Regard to Collision Impact”. MSc Thesis. Chalmers
University of Technology (cit. on p. 88).
Asplund, E. and D. Steckmest (2014). “Design with Regard to Collision Impact”. MSc Thesis. Chalmers
University of Technology (cit. on p. 187).
Biggs, J. (1964). Introduction to Structural Dynamics. McGraw-Hill (cit. on pp. 25, 26).
Bosco, C. and P. Debernardi (1992). Experimental Investigation on The Ultimate Rotational Capacity of
RC Beams. University of Turin (cit. on pp. 56, 60, 61).
Burström (2001). Byggnadsmaterial (Building Materials). Studentlitteratur (cit. on p. 9).
Carpinteri, A., M. Corrado, G. Mancini, and M. Paggi (2009). “Size-Scale effects on Plastic Rotational
Capacity of Reinforced Concrete Beams”. In: ACI Structural Journal 106 (cit. on p. 60).
CEB-FIP (1991). CEB-FIP Model Code 1990. Comité Euro-International du Béton (cit. on pp. 37, 40).
– (1998). CEB Bulletin No. 242: Ductility of Reinforced Concrete Structures: Synthesis Report and
Individual Contributions. Comité Euro-International du Béton (cit. on pp. 37, 39, 55–59).
CEN (2004). EN 1992-1-1 Eurocode 2: Design of concrete structures - Part 1-1: General rules and rules
for buildings. European Committee for Standardization (cit. on pp. 7, 8, 10, 11, 43, 45, 58, 128).
– (2009a). EN 12390-3: Testing Hardened Concrete - Part 3: Compressive Strength of Test Specimens.
European Committee for Standardization (cit. on pp. 11, 71).
– (2009b). EN 12390-6: Testing Hardened Concrete - Part 6: Tensile Splitting of Test Specimens.
European Committee for Standardization (cit. on pp. 12, 71).
Corley, W. (1966). “Rotational Capacity of Reinforced Concrete Beams”. In: Journal of the Structural
Division. ASCE 92 (cit. on pp. 51, 52).
– (1967). “Discussion of "Rotational Capacity of Reinforced Concrete Beams" by Alan H. Mattock”.
In: Journal of the Structural Division. ASCE 93 (cit. on p. 52).
Costovos, D., N. Stathopoulos, and C. Zeris (2010). “Behavior of RC Beams Subjected to High Rates of
Concentrated Loading”. In: Trends and Future Perspectives 134 (cit. on p. 62).
Craig, R. and A. Kurdila (2006). Fundamentals of Structural Dynamics. Second. New York: John Wiley
and Sons (cit. on p. 23).
Domone and Illston (2010). Construction Materials – Their nature and behaviour. Spon Press (cit. on
p. 11).
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 193	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 193	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 193

-- 213 of 333 --

Engström, B. (2001). Design and Analysis of Reinforced Concrete Structures. Chalmers University of
Technology (cit. on pp. 7, 9).
Engström, B. (2015). Design and Analysis of Continuous Beams and Columns. Chalmers University of
Technology (cit. on p. 13).
Erhart, T. ( (2011). Review of Solid Element Formulations in LS-DYNA: Properties, Limits, Advantages,
Disadvantages. URL: https://www.dynamore.de/de/download/papers/forum11 (visited on
07/15/2017) (cit. on p. 134).
Fransson, H. (1997). Rotation Capacity of Reinforced High Strength Concrete Beams. Royal Institute of
Technology (cit. on pp. 57, 60).
Fujikake, K., T. Senga, N. Ueda, T. Ohno, and M. Katagiri (2006). “Study on Impact Response of Reactive
Powder Concrete Beam and its Analytical Model”. In: Journal of Advanced Concrete Technology 4
(cit. on pp. 65, 66).
Grassl, P. (2016). User manual for MAT_CDPM (MAT_273) in LS-DYNA. URL: http://petergrassl.
com/Research/DamagePlasticity/CDPMLSDYNA/index.html (visited on 03/31/2017) (cit. on
pp. 136, 183).
Grassl, P. and M. Jirasek (2006). “Damage-plastic model for concrete failure”. In: International Journal
of Solids and Structures 43 (cit. on p. 135).
Grassl, P., D. Xenos, U. Nyström, R. Rempling, and K. Gylltoft (2013). “CDPM2: A damage-plasticity
approach to modelling the failure of concrete”. In: International Journal of Solids and Structures 50
(cit. on pp. 3, 135).
Johansson, M. (2000). “Structural Behaviour in Concrete Frame Corners of Civil Defence Shelters”.
PhD thesis. Chalmers University of Technology (cit. on pp. 22, 38).
Johansson, M. and L. Laine (2012). Bebyggelsens motståndsförmåga mot extrem dynamisk belastning,
Del 3 – Kapacitet hos byggnader. Swedish Civil Contingencies Agency (cit. on pp. 13, 25–27, 32, 33,
43, 46, 48, 49).
Kheyroddin, A. and H. Naderpour (2007). “Plastic Hinge Rotation Capacity of Reinforced Concrete
Beams”. In: International Journal of Civil Engineering 5 (cit. on pp. 61, 62).
Ko, M., S. Kim, and J. Kim (2001). “Experimental Study on the Plastic Rotation Capacity of Reinforced
High Strength Concrete Beams”. In: Materials and Structures 34 (cit. on p. 61).
Langer, P. and R. Eligehausen (1987). Rotation Capacity of Plastic Hinges and Allowable Degree of
Moment Redistribution. Universität Stuttgart (cit. on pp. 56, 59).
Latte, S. (1999). “Plastic Rotation Capacity of Reinforced Concrete Beams”. MSc Thesis. Chalmers
University of Technology (cit. on pp. 38, 43, 55, 58, 85).
Löfgren, I., J. F. Olesen, and M. Flansbjer (1981). Application of WST-method for fracture testing of
fibre-reinforced concrete. Chalmers University of Technology (cit. on p. 71).
Lopez, S. and L. Bernardo (2003). “Plastic Rotation Capacity of High-strength Concrete Beams”. In:
Materials and Structures 36 (cit. on p. 58).
194 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	194 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	194 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 214 of 333 --

Lovén, J. and E. Svavarsdóttir (2016). “Concrete Beams Subjected to Drop Weight Impact”. MSc Thesis.
Chalmers University of Technology (cit. on pp. 1, 2, 9, 28, 29, 31, 74–76, 87, 96, 97, 101, 102, 134,
145, 155–159, 185, 188).
LSTC (2006). LS-DYNA Theory Manual. Livermore Software Technology Corporation (cit. on pp. 131,
134).
– (2015). LS-DYNA Keyword User’s Manual - Volume I. Livermore Software Technology Corporation
(cit. on pp. 131, 138).
Magnusson, J. (2007). Structural Concrete Elements Subjected to Air Blast Loading. Royal Institute of
Technology (KTH) (cit. on pp. 57, 65–67).
Martin and Purkiss (2006). Concrete Design to EN 1992. Butterworth-Heinemann (cit. on p. 9).
Mattock, A. H. (1965). “Rotational Capacity of Hinging Regions in Reinforced Concrete Beams”. In:
Special Publication. American Concrete Institute 12 (cit. on p. 51).
Miyamoto, A., M. King, and M. Fuji (2008). “Non-Linear Dynamic Analysis and Design Concepts for
RC Beams under Impulsive Loads”. In: Journal of Structural Engineering 22 (cit. on pp. 62, 63).
Öberg, S. (1980). Gränslastmetodens Användning för Armerade Betongbalkar på Oeftergivliga Stöd
(Application of Lower Bound and Upper Bound Methods of Reinforced Concrete Beams on Rigid
Supports). Chalmers Tekniska Högskola. Institutionen för Konstruktionsteknik Betongbyggnad (cit.
on p. 46).
Park and Paulay (1975). Reinforced Concrete Structures. University of Canterbury (cit. on pp. 36, 37, 39,
41, 53).
Plem, E. (1981). The Rotation Capacity of Plastic Hinges in Reinforced Concrete Beams. Lund University
(cit. on p. 58).
Yoo, D.-Y., N. Banthia, and Y. -S. Yoon (2017). “Impact Resistance of Reinforced Ultra-High-Performance
Concrete Beams with Different Steel Fibers”. In: ACI Structural Journal 114 (cit. on pp. 66, 67).
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 195	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 195	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 195

-- 215 of 333 --



-- 216 of 333 --

A Prediction of Equivalent Plastic Hinge Length
This section presents the original equations used to determine a value of equivalent plastic hinge length,
푙푝, and ultimate concrete strain, 휀푐푢, for reinforced concrete beams according to the models proposed by
Mattock (1965) and Corley (1966).
The equations developed by Mattock (1965) in imperial units are given by
푙푝 = 0.5푑 + 0.5푑
H
1.14
u푙0
푑 − 1
I
⋅
H
1 − 휔푠 − 휔®
푠
휔푏
⋅
u 푑
16.2
I
(A.1)
휀푐푢 = 0.003 + 0.5
푙0
(A.2)
Additionally, the original expressions presented by Corley (1966) were formulated as
푙푝 = 0.5푑 + 0.2
√
푑
0푙0
푑
1
(A.3)
휀푐푢 = 0.003 + 0.02
0 푏
푙0
1
+
0휌®
푤 ⋅ 푓푦
20
12
(A.4)
Here, the effective height of the cross-section, 푑, and the distance between the points of zero and
maximum moments, 푙0, are given in inches [in]; the steel yield strength, 푓푦, is given in kilopound per
square inch [ksi].
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 A-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 A-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 A-1

-- 217 of 333 --



-- 218 of 333 --

B Material Properties Tests
B.1 Properties of Concrete
Table B.1 Results of compressive and tensile testing of concrete for different specimens, after 28 and
36 days. Specimen 10 was loaded on an incorrect face; therefore, results from that specimen
are discarded.
Specimen Batch Days b
[mm]
l
[mm]
h
[mm]
Force at
failure
[N]
Compressive
strength
[MPa]
Splitting
tensile strength
[MPa]
1 1 28 150 150 150 1098 49 -
2 1 28 150 150 150 1095 49 -
3 1 28 150 147 150 126 - 5.7
Average 49 5.7
4 2 28 150 151 150 1190 53 -
5 2 28 150 150 150 134 - 6.0
6 2 28 150 150 150 149 - 6.6
Average 53 6.3
Average
all 50 6.1
Specimen Batch Days b
[mm]
l
[mm]
h
[mm]
Force at
failure
[N]
Compressive
strength
[MPa]
Splitting
tensile strength
[MPa]
7 1 36 150 149 150 1124 50 -
8 1 36 150 150 150 142 - 6.3
9 1 36 150 147 150 129 - 5.9
Average 50 6.1
10 2 36 150 150 150 1048 - -
11 2 36 150 150 150 1241 55 -
12 2 36 150 150 150 150 - 6.7
Average 55 6.7
Average
all 53 6.3
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 B-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 B-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 B-1

-- 219 of 333 --

B.2 Wedge-Splitting Test
0
1
2
3
4
5
6
0 	0.5 	1 	1.5 	2 	2.5
Splitting load,
 Fsp 	[kN]
CMOD [mm]
Splitting Load - Crack Mouth Opening Displacement
WST-1
WST-2
WST-3
Figure B.1 Horizontal splitting load plotted against crack mouth opening displacement (CMOD). The
fracture energy calculated for each specimen is given as the area under each graph.
Table B.2 Summary of WST results.
Specimen ID Accumulated
퐺퐹 [Nm∕m2]
퐹푠푝,푚푎푥
[kN]
CMOD at
퐹푠푝,푚푎푥 [mm]
CMOD at
fracture [mm]
WST-1 114 5.6 0.06 2.02
WST-2 133 5.4 0.07 2.01
WST-3 149 5.7 0.07 2.19
B-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	B-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	B-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 220 of 333 --

B.3 Properties of Reinforcing Steel
0
100
200
300
400
500
600
700
0 	2 	4 	6 	8 	10 	12 	14
Axial tensile stress,
 σs 	[MPa]
Steel strain, εs [%]
Stress - strain curve
Sample 1
Sample 2
Sample 3
Sample 4
Sample 5
Sample 6
Sample 7
Figure B.2 Stress-strain curves of reinforcement bars samples used.
Table B.3 Results from tensile testing of reinforcing steel samples.
Sample 퐸푠
[GPa]
퐹푚푎푥
[kN]
휀푠푢
[%]
푓0.2
[MPa]
푓푡
[MPa]
1 197 19.5 11.6 576 688
2 207 19.4 11.4 572 684
3 178 19.3 11.0 592 684
4 193 19.6 10.9 570 691
5 193 19.2 9.7 563 679
6 196 19.5 11.4 580 690
7 212 19.5 9.5 574 689
Average 196 19.4 10.8 575 686
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 B-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 B-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 B-3

-- 221 of 333 --



-- 222 of 333 --

C Measured Position of Reinforcement Bars
In this section, a summary of the real position of the reinforcement bars determined through sawing
of the reinforced concrete beams is presented. Note that some specimens were severely damaged after
static loading; therefore, such specimens were discarded.
The information presented in Table C.1 is supported by the notation described in Figure C.1.
Table C.1 Measured position of the reinforcement bars.
Specimen d’
[mm]
d
[mm]
B-01 22 85
B-03 23 83
B-05 20 83
B-06 22 83
B-07 21 84
B-08 24 83
B-09 20 84
B-10 21 84
B-11 21 83
B-16 26 83
B-17 22 81
B-18 22 82
Average 22 83
d'
4ϕ6
1180
[mm]
d
Figure C.1 Notation for the distance from the center of the bars to the concrete surface.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 C-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 C-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 C-1

-- 223 of 333 --



-- 224 of 333 --

D Preliminary Static Test on an Impact-damaged Spec-
imen
The results of a preliminary static three-point loading test on an impact-damaged specimen are presented
in this section. The specimen had previously been impacted by the same drop-weight used in this thesis
work, but from a height of 3.5 m, as described in (Lovén and Svavarsdóttir, 2016). The geometrical
properties of such specimen, denoted RPC3 in (Lovén and Svavarsdóttir, 2016), are rather similar to
the properties determined during this project; while the dimensions of the specimen are equal to the
dimensions adopted for this thesis work.
The results of the static test on the impact-damaged beam are compared in Figure D.1 with the results
for undamaged specimens of equal characteristics tested under static loading.
0
2
4
6
8
10
12
14
0 	10 	20 	30 	40 	50
Load,
 F [kN]
Deflection, u [mm]
PC1
PC2
PC9
PC3
Figure D.1 Comparison of static response of a reinforced concrete specimen previously subjected to a
3.5 m drop-height impact to the response of undamaged specimens. Failure of specimen
PC3 was due to steel rupture. Specimens PC1, PC2, and PC9 were completely undamaged
before static testing.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 D-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 D-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 D-1

-- 225 of 333 --



-- 226 of 333 --

E 2DOF System
Complementary results concerning the velocity of the drop-weight and the beam midpoint during the
impact event according to the 2DOF model are presented in Figure E.1 and Figure E.2.
-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 v [m/s]
Time, t [ms]
h = 5.0 m; f.y = 575 Mpa
h = 5.0 m; f.y = 686 Mpa
h = 2.5 m; f.y = 575 Mpa
h = 2.5 m; f.y = 686 Mpa
Figure E.1 Velocity of body 1 (which represents drop-weight) according to 2DOF model.
-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 v [m/s]
Time, t [ms]
h = 5.0 m; f.y = 575 Mpa
h = 5.0 m; f.y = 686 Mpa
h = 2.5 m; f.y = 575 Mpa
h = 2.5 m; f.y = 686 Mpa
Figure E.2 Velocity of body 2 (which represents beam midpoint) according to 2DOF model.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 E-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 E-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 E-1

-- 227 of 333 --



-- 228 of 333 --

F Experimental Results
F.1 Velocity and Support Displacement
F.1.1 Velocity of the beam midpoint
-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 v y [m/s]
Time, t [ms]
Average
Figure F.1 Experimental values of velocity at beam midspan for a drop-height of 2.5 m.
-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 vy [m/s]
Time, t [ms]
Average
Figure F.2 Experimental values of velocity at beam midspan for a drop-height of 5.0 m.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-1

-- 229 of 333 --

F.1.2 Drop-weight velocity
-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 v y [m/s]
Time, t [ms]
Average
Figure F.3 Experimental values of velocity of the drop-weight for a drop-height of 2.5 m.
-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 vy [m/s]
Time, t [ms]
Average
Figure F.4 Experimental values of velocity of the drop-weight for a drop-height of 5.0 m.
F-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 230 of 333 --

F.1.3 Displacement over the support
-15
-10
-5
0
5
0 	5 	10 	15 	20 	25
Displacement,
 u [mm]
Time, t [ms]
Average
Figure F.5 Experimental values of displacement over the support for a drop height of 2.5 m.
-15
-10
-5
0
5
0 	5 	10 	15 	20 	25
Displacement,
 u [mm]
Time, t [ms]
Average
Figure F.6 Experimental values of displacement over the support for a drop-height of 5.0 m.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-3

-- 231 of 333 --

F.2 Deformed Shape of the Beam
F.2.1 Drop-height h = 2.5 m
-2
0
2
4
6
8
10
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Deflection,
 u [mm]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure F.7 Deformed shape of beam B-12 at different times after impact. B-12 is assumed to be
representative of the behavior of beams subjected to 2.5 m drop.
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Relative Deflection [-]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure F.8 Relative deformed shape of beam B-12 at different times after impact. B-12 is assumed to
be representative of the behavior of beams subjected to 2.5 m drop.
F-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 232 of 333 --

F.2.2 Drop-height h = 5.0 m
-2
0
2
4
6
8
10
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Deflection,
 u [mm]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure F.9 Deformed shape of beam B-06 at different times after impact. B-06 is assumed to be
representative of the behavior of beams subjected to 5.0 m drop.
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Relative Deflection [-]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure F.10 Relative deformed shape of beam B-06 at different times after impact. B-06 is assumed to
be representative of the behavior of beams subjected to 5.0 m drop.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-5

-- 233 of 333 --

F.3 Determination of Plastic Deformation
F.3.1 Permanent plastic deformation after impact
1000
500
[mm]
upl
Figure F.11 Schematic illustration showing the procedure adopted when determining the resulting
plastic deformation, 푢푝푙, due to impact loading. The analysis was performed trough DIC
of photographs from subsequent static tests. Note that 푢푝푙 was determined at the initial
stage of the tests, meaning that no static loading had been applied yet.
F-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 234 of 333 --

F.3.2 Methodology adopted to determine plastic rotational capacity
Schematic overview on how plastic deflection at a given load level was determined. Equation (5.11)
could then be used to calculate the resulting plastic rotation from the measured values of deflection.
F100%
u
F
F 80%
u 80%
u 100%
(a) Methodology used for Series-3 beams.
F100%
u
F
F 80%
u 80%
u 100%
u pl
(b) Methodology used for Series-1 and Series-2 beams.
Figure F.12 Methodology adopted to determine plastic deformation and consequently plastic rotation.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-7

-- 235 of 333 --

F.4 Results from Static Tests
F.4.1 Key parameters: Series-1
Table F.1 Summary of key values for Series-1.
Beam-ID B-01 B-02 B-03 B-10 B-11 B-12 Units
푢푝푙 8.5 7.0 8.0 7.5 10.0 9.5 [mm]
푢푓 푎푖푙,푠 43.1 - 36.9 39.0 47.0 40.2 [mm]
푢푝푙 + 푢푓 푎푖푙,푠 51.6 44.4 44.9 46.5 57.0 49.7 [mm]
푘 2.1 2.1 2.3 2.2 1.9 2.2 [kN∕mm]
퐹100% 13.5 14.1 14.7 14.0 13.3 14.0 [kN]
푢푎,100% 6.5 6.7 6.5 6.4 7.2 6.5 [mm]
푢푏,100% 10.6 16.5 12.9 12.4 17.6 10.9 [mm]
휃푝푙.100% 8.2 19.5 12.9 12.0 20.8 8.8 [mrad]
퐹95% 12.9 13.4 13.9 13.3 12.7 13.3 [kN]
푢푎,95% 6.2 6.4 6.2 6.1 6.8 6.2 [mm]
푢푏,95% 18.8 20.9 13.8 16.6 20.3 14.7 [mm]
휃푝푙.95% 25.3 29.0 15.3 21.1 26.9 17.0 [mrad]
퐹90% 12.2 12.7 13.2 12.6 12.0 12.6 [kN]
푢푎,90% 5.8 6.0 5.8 5.7 6.5 5.9 [mm]
푢푏,90% 25.5 27.1 18.8 27.8 23.5 15.8 [mm]
휃푝푙.90% 39.2 42.2 26.0 44.1 34.0 19.7 [mrad]
퐹80% - 11.3 - - 10.7 11.2 [kN]
푢푎,80% - 5.4 - - 5.8 5.2 [mm]
푢푏,80% - 35.2 - - 45.9 35.2 [mm]
휃푝푙.80% - 59.7 - - 80.2 59.8 [mrad]
F-8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 236 of 333 --

F.4.2 Key parameters: Series-2
Table F.2 Summary of key values for Series-2. Rupture of reinforcement bars was obtained for all
specimens, except for B-04.
Beam-ID B-04 B-05 B-06 B-131 B-14 B-15 Units
푢푝푙 17.0 19.0 16.0 20.0 16.0 18.0 [mm]
푢푓 푎푖푙,푠 - 50.0 49.3 12.9 56.6 52.3 [mm]
푢푝푙 + 푢푓 푎푖푙,푠 - 69.0 65.3 32.9 72.6 70.3 [mm]
푘 1.6 1.5 1.8 1.4 1.8 1.7 [kN∕mm]
퐹100% 12.3 12.0 13.1 8.5 13.5 13.2 [kN]
푢푎,100% 7.6 8.2 7.4 6.4 7.5 7.7 [mm]
푢푏,100% 18.7 16.1 13.0 6.7 12.1 13.7 [mm]
휃푝푙.100% 22.1 15.8 11.2 0.7 9.1 12.1 [mrad]
퐹95% 11.7 11.4 12.4 8.1 12.9 12.5 [kN]
푢푎,95% 7.2 7.8 7.0 6.1 7.2 7.3 [mm]
푢푏,95% 26.0 40.5 29.4 9.6 20.4 29.6 [mm]
휃푝푙.95% 37.5 65.3 44.8 6.9 26.6 44.6 [mrad]
퐹90% 11.1 10.8 11.8 7.6 12.2 11.9 [kN]
푢푎,90% 6.9 7.4 6.6 5.8 6.8 6.9 [mm]
푢푏,90% 47.4 47.2 47.5 9.6 36.1 32.0 [mm]
휃푝푙.90% 81.1 79.5 81.7 7.5 58.6 50.2 [mrad]
퐹80% 9.9 - - 6.8 10.8 10.6 [kN]
푢푎,80% 6.1 - - 5.2 6.1 6.2 [mm]
푢푏,80% 57.4 - - 9.5 55.8 45.9 [mm]
휃푝푙.80% 102.7 - - 8.5 99.6 79.5 [mrad]
1 B-13 developed a shear failure mechanism.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-9	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-9	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-9

-- 237 of 333 --

F.4.3 Key parameters: Series-3
Table F.3 Summary of key values for Series-3. Beams were undamaged, hence 푢푝푙 = 0 mm. Rupture of
reinforcement bars was obtained for all specimens, except for B-08.
Beam-ID B-07 B-08 B-09 B-16 B-17 B-18 Units
푢푝푙 0.0 0.0 0.0 0.0 0.0 0.0 [mm]
푢푓 푎푖푙,푠 48.4 - 52.9 55.9 51.0 51.6 [mm]
푘 2.0 2.2 2.4 2.2 2.4 2.2 [kN∕mm]
퐹100% 13.7 13.9 14.1 14.5 13.8 14.1 [kN]
푢푎,100% 6.7 6.4 5.8 6.5 5.8 6.5 [mm]
푢푏,100% 16.9 16.5 16.9 15.6 15.2 25.6 [mm]
휃푝푙.100% 20.5 20.0 22.1 18.2 18.9 38.4 [mrad]
퐹95% 13.0 13.2 13.4 13.8 13.1 13.4 [kN]
푢푎,95% 6.3 6.1 5.6 6.2 5.5 6.1 [mm]
푢푏,95% 23.4 19.0 22.8 16.8 15.4 31.1 [mm]
휃푝푙.95% 34.1 25.7 34.4 21.3 19.9 49.8 [mrad]
퐹90% 12.3 12.5 12.7 13.1 12.4 12.7 [kN]
푢푎,90% 6.0 5.8 5.3 5.9 5.2 5.8 [mm]
푢푏,90% 26.2 24.7 29.4 20.9 15.5 33.9 [mm]
휃푝푙.90% 40.4 37.8 48.3 30.1 20.6 56.1 [mrad]
퐹80% 11.0 11.1 11.3 11.6 11.0 11.3 [kN]
푢푎,80% 5.3 5.2 4.7 5.2 4.6 5.2 [mm]
푢푏,80% 43.9 44.1 50.7 23.1 47.1 48.5 [mm]
휃푝푙.80% 77.1 77.9 92.1 35.7 85.1 86.6 [mrad]
F-10 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-10 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-10 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 238 of 333 --

F.5 Plastic rotational capacity
F.5.1 Rotational capacity of all beams
0
20
40
60
80
100
120
140
160
01 	02 	03 	10 	11 	12 	04 05 	06 	13 	14 	15 	07 08 	09 	16 	17 	18
Rotational capacity
 θpl,x%
 	[mrad]
Beam number
Plastic rotational capacity
100%
95%
90%
80%
Series-1: h = 2.5m 	Series-2: h = 5.0 m 	Series-3: Static only
Figure F.13 Plastic rotational capacity with respect to a given load percentage of all beam specimens.
B-13 developed a shear failure mechanism.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-11	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-11	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-11

-- 239 of 333 --

F.5.2 Internal Work
Table F.4 Comparison of internal work. 푊푖,푡표푡 signifies total internal work, whereas
푊푖,푥% denotes the accumulated internal work for a given load level on
the descending branch. A comparison of the ratio of accumulated work
to plastic rotational capacity for given load levels is also made.
푊푖,푥%
[J]
푊푖,푥%∕휃푝푙,푥%
[J∕mrad]
Series Beam 푊푖,푡표푡
[J] 100% 95% 90% 80% 100% 95% 90% 80%
1
B-01 492 97 206 290 - 11.8 8.1 7.4 -
B-02 426 180 240 323 419 9.2 8.3 7.6 7.0
B-03 431 135 147 215 - 10.5 9.6 8.3 -
B-10 456 125 182 325 - 10.4 8.6 7.4 -
B-11 522 181 216 256 514 8.7 8.1 7.5 6.4
B-12 447 103 154 168 398 11.7 9.1 8.5 6.7
Averages 462 137 191 263 444 10.4 8.6 7.8 6.7
2
B-4 - 176 263 508 613 7.9 7.0 6.3 6.0
B-5 520 141 427 502 - 9.0 6.5 6.3 -
B-6 566 120 330 551 - 10.6 7.4 6.7 -
B-131 67 27 29 32 48 42.2 18.3 11.1 5.6
B-14 652 110 220 414 647 12.0 8.3 7.1 6.5
B-15 571 126 329 358 509 10.5 7.4 7.1 6.4
Averages 577 134 314 167 590 10.0 7.3 6.7 6.3
3
B-7 538 180 265 302 507 8.8 7.8 7.5 6.6
B-8 - 179 213 286 513 8.9 8.3 7.6 6.6
B-9 630 191 271 358 611 8.6 7.9 7.4 6.6
B-16 618 173 190 244 271 9.5 8.9 8.1 7.6
B-17 565 167 170 171 529 8.8 8.6 8.3 6.2
B-18 624 309 384 420 595 8.1 7.7 7.5 6.9
Averages 595 200 249 297 504 8.8 8.2 7.7 6.7
1 B-13 developed a shear failure mechanism, it is not factored in average values.
F-12 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-12 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-12 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 240 of 333 --

F.6 Strain field for Dynamic and Static Tests
F.6.1 Specimen B-01
Table F.5 Strain field due to impact loading from DIC analysis for B-01, drop-height h = 2.5 m.
Deflection /
Time Strain field for impact loading: B-01
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 7 .8 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
푢 = 0.1 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 7 .6 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
푢 = 0.7 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /9
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 7 .4 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
푢 = 1.4 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /9
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 7 .2 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
푢 = 2.0 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /9
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 7 .0 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
푢 = 2.5 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /9
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 6 .8 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
푢 = 4.9 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /9
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 5 .8 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
푢 = 9.4 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 3 .8 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
푢 = 10.5 mm 1
푡 = 5.6 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_56
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 2 .2 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-13	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-13	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-13

-- 241 of 333 --

Table F.6 Strain field due to static loading from DIC analysis for B-01. Note that the strain field of the
dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-01
푢 = 10.5 mm
푡 = 5.6 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_56
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 2 .2 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-01
푢 = 2.5 mm
퐹 = 5.1 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
3 2 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 10.4 kN
G enerated with G O M C orrelate 2 0 1 6
5 /5
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
6 8 	G eometry referenc e: 1
O riginal alignment
푢100% = 10.6 mm
퐹100% = 13.5 kN
G enerated with G O M C orrelate 2 0 1 6
1 /1
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
1 5 8 	G eometry referenc e: 1
O riginal alignment
푢95% = 12.2 mm
퐹95% = 12.9 kN
G enerated with G O M C orrelate 2 0 1 6
2 /2
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 8 	G eometry referenc e: 1
O riginal alignment
푢90% = 25.5 mm
퐹90% = 12.2 kN
G enerated with G O M C orrelate 2 0 1 6
3 /3
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 9 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-14 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-14 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-14 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 242 of 333 --

F.6.2 Specimen B-02
Table F.7 Strain field due to impact loading from DIC analysis for B-02, drop-height h = 2.5 m.
Deflection /
Time Strain field for impact loading: B-02
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 6 0 .2 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
푢 = 0.0 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 6 0 .0 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
푢 = 0.4 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /9
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 5 9 .8 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
푢 = 1.3 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /9
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 5 9 .6 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
푢 = 1.9 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /9
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 5 9 .4 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
푢 = 2.6 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /9
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 5 9 .2 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
푢 = 5.5 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /9
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 5 8 .2 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
푢 = 9.4 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 5 6 .2 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
푢 = 11.0 mm 1
푡 = 6.0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_60
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 5 4 .2 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-15	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-15	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-15

-- 243 of 333 --

Table F.8 Strain field due to static loading from DIC analysis for B-02. Note that the strain field of the
dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-02
푢 = 11.0 mm
푡 = 6.0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_60
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 5 4 .2 ms 	G eometry referenc e: - 1 8 2 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-02
푢 = 2.5 mm
퐹 = 4.4 kN
G enerated with G O M C orrelate 2 0 1 6
1 /1
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+2.522 mm	Load
DIM 	+4.376 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 5 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 9.8 kN
G enerated with G O M C orrelate 2 0 1 6
2 /2
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+9.763 kN
Displacement
DIM 	+4.993 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 8 	G eometry referenc e: 1
O riginal alignment
푢100% = 16.5 mm
퐹100% = 14.1 kN
G enerated with G O M C orrelate 2 0 1 6
3 /3
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+13.733 kN
Displacement
DIM 	+16.640 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 6 	G eometry referenc e: 1
O riginal alignment
푢95% = 20.9 mm
퐹95% = 13.4 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+13.513 kN
Displacement
DIM 	+20.808 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 9 	G eometry referenc e: 1
O riginal alignment
푢90% = 12.7 mm
퐹90% = 12.7 kN
G enerated with G O M C orrelate 2 0 1 6
5 /5
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+27.251 mm	Load
DIM 	+12.088 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 3 0 	G eometry referenc e: 1
O riginal alignment
푢80% = 35.2 mm
퐹80% = 11.3 kN
G enerated with G O M C orrelate 2 0 1 6
6 /6
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+11.499 kN
Displacement
DIM 	+35.219 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 5 4 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-16 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-16 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-16 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 244 of 333 --

F.6.3 Specimen B-03
Table F.9 Strain field due to impact loading from DIC analysis for B-03, drop-height h = 2.5 m.
Deflection /
Time Strain field for impact loading: B-03
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 2 2 .0 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
푢 = 0.4 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 2 1 .6 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
푢 = 1.2 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /9
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 2 1 .4 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
푢 = 2.0 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /9
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 2 1 .2 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
푢 = 2.6 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /9
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 2 1 .0 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
푢 = 3.1 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /9
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 2 0 .8 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
푢 = 5.7 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /9
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 1 9 .8 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
푢 = 9.6 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 1 7 .8 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
푢 = 10.4 mm 1
푡 = 5.4 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_54
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 1 6 .4 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-17	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-17	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-17

-- 245 of 333 --

Table F.10 Strain field due to static loading from DIC analysis for B-03. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-03
푢 = 10.4 mm
푡 = 5.4 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_54
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 1 6 .4 ms 	G eometry referenc e: - 1 4 5 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-03
푢 = 2.5 mm
퐹 = 5.4 kN
G enerated with G O M C orrelate 2 0 1 6
1 /2
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+2.580 mm	Load
DIM 	+5.368 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 5 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 10.8 kN
G enerated with G O M C orrelate 2 0 1 6
2 /2
F(5)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+4.996 mm	Load
DIM 	+10.800 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 8 	G eometry referenc e: 1
O riginal alignment
푢100% = 12.9 mm
퐹100% = 14.7 kN
G enerated with G O M C orrelate 2 0 1 6
3 /5
u100
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+14.075 kN
Displacement
DIM 	+12.825 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 7 5 	G eometry referenc e: 1
O riginal alignment
푢95% = 13.8 mm
퐹95% = 13.9 kN
G enerated with G O M C orrelate 2 0 1 6
4 /5
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+13.794 mm	Load
DIM 	+12.930 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 0 	G eometry referenc e: 1
O riginal alignment
푢90% = 18.8 mm
퐹90% = 13.2 kN
G enerated with G O M C orrelate 2 0 1 6
5 /5
u(90)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+18.755 mm	Load
DIM 	+13.364 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 7 	G eometry referenc e: 1
O riginal alignment
푢80% = 26.5 mm
퐹80% = 11.7 kN
G enerated with G O M C orrelate 2 0 1 6
6 /6
u(80)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+26.552 mm	Load
DIM 	+11.960 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 2 2 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-18 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-18 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-18 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 246 of 333 --

F.6.4 Specimen B-04
Table F.11 Strain field due to impact loading from DIC analysis for B-04, drop-height h = 5.0 m.
Deflection /
Time Strain field for impact loading: B-04
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /1 3
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .8 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 0.3 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /1 3
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .6 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 1.8 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /1 3
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .4 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 2.8 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /1 3
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .2 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 4.0 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /1 3
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .0 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 4.9 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /1 3
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 7 .8 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 8.7 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
1 1 /1 3
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 6 .8 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 15.3 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
1 2 /1 3
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 4 .8 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 20.4 mm 1
푡 = 7.6 ms
G enerated with G O M C orrelate 2 0 1 6
1 3 /1 3
t_76
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 1 .2 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-19	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-19	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-19

-- 247 of 333 --

Table F.12 Strain field due to static loading from DIC analysis for B-04. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-04
푢 = 20.4 mm
푡 = 7.6 ms
G enerated with G O M C orrelate 2 0 1 6
1 3 /1 3
t_76
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 1 .2 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-04
푢 = 2.5 mm
퐹 = 3.7 kN
G enerated with G O M C orrelate 2 0 1 6
1 /7
u(2.5)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+3.687 kN	
Displacement
DIM 	+2.547 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
3 5 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 7.8 kN
G enerated with G O M C orrelate 2 0 1 6
2 /7
u(5.0)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+7.761 kN	
Displacement
DIM 	+5.031 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 4 	G eometry referenc e: 1
O riginal alignment
푢100% = 18.7 mm
퐹100% = 12.3 kN
G enerated with G O M C orrelate 2 0 1 6
3 /7
u(100)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.332 kN	
Displacement
DIM 	+18.622 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 3 	G eometry referenc e: 1
O riginal alignment
푢95% = 26.0 mm
퐹95% = 11.7 kN
G enerated with G O M C orrelate 2 0 1 6
5 /7
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+11.279 kN	
Displacement
DIM 	+26.079 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 2 7 	G eometry referenc e: 1
O riginal alignment
푢90% = 47.4 mm
퐹90% = 11.1 kN
G enerated with G O M C orrelate 2 0 1 6
6 /7
u(90)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+47.432 mm
Load
DIM 	+11.264 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 9 3 	G eometry referenc e: 1
O riginal alignment
푢80% = 57.4 mm
퐹80% = 9.9 kN
G enerated with G O M C orrelate 2 0 1 6
7 /7
u(80)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+57.478 mm
Load
DIM 	+9.668 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 2 5 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-20 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-20 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-20 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 248 of 333 --

F.6.5 Specimen B-05
Table F.13 Strain field due to impact loading from DIC analysis for B-05, drop-height h = 5.0 m.
Deflection /
Time Strain field for impact loading: B-05
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /1 5
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 4 .6 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
푢 = 0.1 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /1 5
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 4 .4 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
푢 = 1.0 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /1 5
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 4 .2 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
푢 = 2.1 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /1 5
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 4 .0 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
푢 = 2.9 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /1 5
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 3 .8 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
푢 = 3.8 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /1 5
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 3 .6 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
푢 = 7.6 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
1 1 /1 5
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 2 .6 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
푢 = 14.5 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
1 2 /1 5
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 0 .6 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
푢 = 20.6 mm1
푡 = 8.2 ms
G enerated with G O M C orrelate 2 0 1 6
1 5 /1 5
t_82
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 2 6 .4 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-21	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-21	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-21

-- 249 of 333 --

Table F.14 Strain field due to static loading from DIC analysis for B-05. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-05
푢 = 20.6 mm
푡 = 8.2 ms
G enerated with G O M C orrelate 2 0 1 6
1 5 /1 5
t_82
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 2 6 .4 ms 	G eometry referenc e: - 1 5 1 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-05
푢 = 2.5 mm
퐹 = 3.5 kN
G enerated with G O M C orrelate 2 0 1 6
1 /5
u(2.5)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	Displacement
DIM 	+2.490 mm	Load
DIM 	+3.482 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 4 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 7.3 kN
G enerated with G O M C orrelate 2 0 1 6
2 /5
u(5.0)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	Displacement
DIM 	+5.008 mm	Load
DIM 	+7.272 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 7 	G eometry referenc e: 1
O riginal alignment
푢100% = 16.1 mm
퐹100% = 12.0 kN
G enerated with G O M C orrelate 2 0 1 6
3 /5
u(100)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	Displacement
DIM 	+16.229 mm	Load
DIM 	+11.948 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 6 	G eometry referenc e: 1
O riginal alignment
푢95% = 40.5 mm
퐹95% = 11.4 kN
G enerated with G O M C orrelate 2 0 1 6
4 /5
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	Displacement
DIM 	+40.485 mm	Load
DIM 	+11.594 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 7 3 	G eometry referenc e: 1
O riginal alignment
푢90% = 47.2 mm
퐹90% = 10.8 kN
G enerated with G O M C orrelate 2 0 1 6
5 /5
u(90)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	Displacement
DIM 	+47.105 mm	Load
DIM 	+10.864 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 9 4 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-22 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-22 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-22 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 250 of 333 --

F.6.6 Specimen B-06
Table F.15 Strain field due to impact loading from DIC analysis for B-06, drop-height h = 5.0 m.
Deflection /
Time Strain field for impact loading: B-06
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 8 .2 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
푢 = 0.4 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 8 .0 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
푢 = 1.6 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /9
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 7 .8 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
푢 = 2.6 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /9
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 7 .6 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
푢 = 3.7 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /9
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 7 .4 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
푢 = 4.5 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /9
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 7 .2 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
푢 = 8.3 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /9
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 6 .2 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
푢 = 15.3 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 3 .2 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
푢 = 20.1 mm 1
푡 = 7.8 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_78
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 0 .4 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-23	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-23	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-23

-- 251 of 333 --

Table F.16 Strain field due to static loading from DIC analysis for B-06. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-06
푢 = 20.1 mm
푡 = 7.8 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_78
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 0 .4 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-06
푢 = 2.5 mm
퐹 = 4.1 kN
Untitled
Displacement
DIM 	+2.652 mm
Load
DIM 	+4.443 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 3 	G eometry refer
O riginal alignment
푢 = 5.0 mm
퐹 = 8.9 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
Displacement
DIM 	+5.005 mm
Load
DIM 	+8.856 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 1 	G eometry refer
O riginal alignment
푢100% = 13.0 mm
퐹100% = 13.1 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
Displacement
DIM 	+12.978 mm
Load
DIM 	+13.290 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 1 	G eometry refer
O riginal alignment
푢95% = 29.4 mm
퐹95% = 12.4 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
[	Load
DIM 	+12.567 kN
Displacement
DIM 	+29.536 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 0 	G eometry refere
O riginal alignment
푢90% = 47.5 mm
퐹90% = 11.8 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
Displacement
DIM 	+47.482 mm
Load
DIM 	+12.042 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 9 6 	G eometry refe
O riginal alignment
Principal strain
[%]
F-24 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-24 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-24 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 252 of 333 --

F.6.7 Specimen B-07
Table F.17 Strain field due to static loading from DIC analysis for B-07. Note that B-07 was tested
only for static loading.
Deflection /
Load Strain field due to static loading: B-07
푢 = 2.5 mm
퐹 = 5.8 kN
1 /6
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	
Load
DIM 	+5.804 kN
Displacement
DIM 	+2.484 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
3 1 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 10.4 kN
G enerated with G O M C orrelate 2 0 1 6
2 /6
u(5.0)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+5.087 mm	
Load
DIM 	+10.394 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 1 	G eometry referenc e: 1
O riginal alignment
푢 = 7.5 mm
퐹 = 11.8 kN
G enerated with G O M C orrelate 2 0 1 6
7 /7
u(7.5)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	
Load
DIM 	+11.761 kN
Displacement
DIM 	+7.538 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 9 	G eometry referenc e: 1
O riginal alignment
푢100% = 13.0 mm
퐹100% = 13.1 kN
G enerated with G O M C orrelate 2 0 1 6
3 /6
u(100)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+16.812 mm	
Load
DIM 	+13.214 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 4 	G eometry referenc e: 1
O riginal alignment
푢95% = 29.4 mm
퐹95% = 12.4 kN
G enerated with G O M C orrelate 2 0 1 6
4 /6
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+23.494 mm	
Load
DIM 	+12.976 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 5 	G eometry referenc e: 1
O riginal alignment
푢90% = 47.5 mm
퐹90% = 11.8 kN
G enerated with G O M C orrelate 2 0 1 6
5 /6
u(90)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+26.118 mm	
Load
DIM 	+11.795 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 2 4 	G eometry referenc e: 1
O riginal alignment
푢80% = 47.5 mm
퐹80% = 11.8 kN
G enerated with G O M C orrelate 2 0 1 6
6 /6
u(80)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	
Load
DIM 	+11.264 kN
Displacement
DIM 	+43.771 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 7 8 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-25	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-25	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-25

-- 253 of 333 --

F.6.8 Specimen B-08
Table F.18 Strain field due to static loading from DIC analysis for B-08. Note that B-08 was tested
only for static loading.
Deflection /
Load Strain field due to static loading: B-08
푢 = 2.5 mm
퐹 = 6.3 kN
1 /1
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+6.311 kN
Displacement
DIM 	+2.483 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
3 1 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 10.1 kN
G enerated with G O M C orrelate 2 0 1 6
2 /2
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+10.132 kN
Displacement
DIM 	+5.008 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 4 	G eometry referenc e: 1
O riginal alignment
푢 = 7.5 mm
퐹 = 11.7 kN
G enerated with G O M C orrelate 2 0 1 6
5 /5
u(7.5)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+7.579 mm	Load
DIM 	+11.670 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 1 3 	G eometry referenc e: 1
O riginal alignment
푢100% = 16.5 mm
퐹100% = 13.9 kN
G enerated with G O M C orrelate 2 0 1 6
3 /3
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+16.391 mm	Load
DIM 	+13.354 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 0 	G eometry referenc e: 1
O riginal alignment
푢95% = 19.0 mm
퐹95% = 13.2 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.650 kN
Displacement
DIM 	+19.041 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 9 	G eometry referenc e: 1
O riginal alignment
푢90% = 24.7 mm
퐹90% = 12.5 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.650 kN
Displacement
DIM 	+19.041 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 9 	G eometry referenc e: 1
O riginal alignment
푢80% = 44.1 mm
퐹80% = 11.1 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.650 kN
Displacement
DIM 	+19.041 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 9 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-26 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-26 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-26 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 254 of 333 --

F.6.9 Specimen B-09
Table F.19 Strain field due to static loading from DIC analysis for B-09. Note that B-09 was tested
only for static loading.
Deflection /
Load Strain field due to static loading: B-09
푢 = 2.5 mm
퐹 = 7.6 kN
1 /7
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+7.559 kN
Displacement
DIM 	+2.556 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
3 3 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 11.3 kN
G enerated with G O M C orrelate 2 0 1 6
2 /7
u(5.0)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+4.936 mm
Load
DIM 	+11.325 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 2 	G eometry referenc e: 1
O riginal alignment
푢 = 7.5 mm
퐹 = 12.7 kN
G enerated with G O M C orrelate 2 0 1 6
3 /7
u(7.5)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+7.542 mm
Load
DIM 	+12.723 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 1 0 	G eometry referenc e: 1
O riginal alignment
푢100% = 16.9 mm
퐹100% = 14.1 kN
G enerated with G O M C orrelate 2 0 1 6
4 /7
u(100)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+16.704 mm
Load
DIM 	+14.130 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 0 	G eometry referenc e: 1
O riginal alignment
푢95% = 22.8 mm
퐹95% = 13.4 kN
G enerated with G O M C orrelate 2 0 1 6
5 /7
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+13.962 kN
Displacement
DIM 	+22.774 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 9 	G eometry referenc e: 1
O riginal alignment
푢90% = 29.4 mm
퐹90% = 12.7 kN
G enerated with G O M C orrelate 2 0 1 6
6 /7
u(90)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.720 kN
Displacement
DIM 	+29.578 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 3 1 	G eometry referenc e: 1
O riginal alignment
푢80% = 50.7 mm
퐹80% = 11.3 kN
G enerated with G O M C orrelate 2 0 1 6
7 /7
u(80)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+11.765 kN
Displacement
DIM 	+50.810 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 9 7 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-27	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-27	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-27

-- 255 of 333 --



-- 256 of 333 --

F.6.10 Specimen B-10
Table F.20 Strain field due to impact loading from DIC analysis for B-10, drop-height h = 2.5 m.
Deflection /
Time Strain field for impact loading: B-10
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 7 .8 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
푢 = 0.3 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 7 .6 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
푢 = 1.2 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /9
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 7 .4 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
푢 = 1.9 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /9
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 7 .2 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
푢 = 2.4 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /9
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 7 .0 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
푢 = 3.0 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /9
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 6 .8 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
푢 = 5.5 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /9
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 5 .8 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
푢 = 9.2 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 3 .8 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
푢 = 10.5 mm 1
푡 = 6.0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_60
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 1 .8 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-29	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-29	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-29

-- 257 of 333 --

Table F.21 Strain field due to static loading from DIC analysis for B-10. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-10
푢 = 10.5 mm
푡 = 6.0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_60
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 3 1 .8 ms 	G eometry referenc e: - 1 6 0 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-10
푢 = 2.5 mm
퐹 = 5.5 kN
G enerated with G O M C orrelate 2 0 1 6
1 /
u(2.5)
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+5.505 kN
Displacement
DIM 	+2.617 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
3 7 	G eometry referenc e:
O riginal alignment
푢 = 5.0 mm
퐹 = 11.0 kN
G enerated with G O M C orrelate 2 0 1 6
2 /
u(5.0)
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	Displacement
DIM 	+5.057 mm	Load
DIM 	+11.011 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 6 	G eometry referenc e:
O riginal alignment
푢100% = 12.4 mm
퐹100% = 14.0 kN
G enerated with G O M C orrelate 2 0 1 6
3 /
u(100)
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+13.318 kN
Displacement
DIM 	+12.349 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 7 8 	G eometry referenc e:
O riginal alignment
푢95% = 16.6 mm
퐹95% = 13.3 kN
G enerated with G O M C orrelate 2 0 1 6
4 /
u(95)
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+12.622 kN
Displacement
DIM 	+16.698 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 8 	G eometry referenc e:
O riginal alignment
푢90% = 27.8 mm
퐹90% = 12.6 kN
G enerated with G O M C orrelate 2 0 1 6
5 /
u(90)
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+12.170 kN
Displacement
DIM 	+27.818 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 3 3 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
F-30 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-30 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-30 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 258 of 333 --

F.6.11 Specimen B-11
Table F.22 Strain field due to impact loading from DIC analysis for B-11, drop-height h = 2.5 m.
Deflection /
Time Strain field for impact loading: B-11
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 2 3 .4 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
푢 = 0.1 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 2 3 .2 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
푢 = 0.8 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /9
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 2 3 .0 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
푢 = 1.7 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /9
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 2 2 .8 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
푢 = 2.4 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /9
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 2 2 .6 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
푢 = 3.0 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /9
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 2 2 .4 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
푢 = 6.0 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /9
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 2 1 .2 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
푢 = 9.5 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 9 .2 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
푢 = 11.2 mm 1
푡 = 6.4 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_64
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 7 .0 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-31	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-31	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-31

-- 259 of 333 --

Table F.23 Strain field due to static loading from DIC analysis for B-11. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-11
푢 = 11.2 mm
푡 = 6.4 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_64
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 7 .0 ms 	G eometry referenc e: - 4 6 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-11
푢 = 2.5 mm
퐹 = 4.2 kN
G enerated with G O M C orrelate 2 0 1 6
1 /6
u(2.5)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+2.507 mm	
Load
DIM 	+4.233 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 6 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 9.2 kN
G enerated with G O M C orrelate 2 0 1 6
2 /6
u(5.0)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	
Load
DIM 	+9.180 kN
Displacement
DIM 	+5.016 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 5 	G eometry referenc e: 1
O riginal alignment
푢100% = 17.6 mm
퐹100% = 13.3 kN
G enerated with G O M C orrelate 2 0 1 6
7 /7
u(100)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	
Load
DIM 	+13.089 kN
Displacement
DIM 	+17.508 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 5 	G eometry referenc e: 1
O riginal alignment
푢95% = 20.3 mm
퐹95% = 12.7 kN
G enerated with G O M C orrelate 2 0 1 6
4 /7
u(95)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	
Load
DIM 	+12.476 kN
Displacement
DIM 	+20.506 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 2 5 	G eometry referenc e: 1
O riginal alignment
푢90% = 45.9 mm
퐹90% = 10.7 kN
G enerated with G O M C orrelate 2 0 1 6
5 /7
u(90)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000	
Load
DIM 	+11.792 kN
Displacement
DIM 	+23.627 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 3 5 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-32 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-32 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-32 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 260 of 333 --

F.6.12 Specimen B-12
Table F.24 Strain field due to impact loading from DIC analysis for B-12, drop-height h = 2.5 m.
Deflection /
Time Strain field for impact loading: B-12
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 5 .2 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
푢 = 0.1 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 5 .0 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
푢 = 0.5 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /9
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 4 .8 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
푢 = 1.4 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /9
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 4 .6 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
푢 = 2.2 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /9
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 4 .4 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
푢 = 2.9 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /9
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 4 .2 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
푢 = 5.9 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /9
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 3 .2 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
푢 = 9.4 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 1 .2 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
푢 = 10.7 mm 1
푡 = 6.0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_64
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 7 8 .8 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-33	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-33	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-33

-- 261 of 333 --

Table F.25 Strain field due to static loading from DIC analysis for B-12. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-12
푢 = 10.7 mm
푡 = 6.0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_64
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 7 8 .8 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-12
푢 = 2.5 mm
퐹 = 5.1 kN
G enerated with G O M C orrelate 2 0 1 6
1 /1
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+2.495 mm	Load
DIM 	+5.093 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 5 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 10.8 kN
G enerated with G O M C orrelate 2 0 1 6
2 /2
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+10.556 kN
Displacement
DIM 	+4.968 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 4 	G eometry referenc e: 1
O riginal alignment
푢100% = 10.9 mm
퐹100% = 14.0 kN
G enerated with G O M C orrelate 2 0 1 6
1 4 /1 4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+10.931 mm	Load
DIM 	+13.919 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 6 7 	G eometry referenc e: 1
O riginal alignment
푢95% = 14.7 mm
퐹95% = 13.3 kN
G enerated with G O M C orrelate 2 0 1 6
1 3 /1 3
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+14.703 mm	Load
DIM 	+13.644 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 1 	G eometry referenc e: 1
O riginal alignment
푢90% = 15.7 mm
퐹90% = 12.6 kN
G enerated with G O M C orrelate 2 0 1 6
1 1 /1 1
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+13.434 kN
Displacement
DIM 	+15.700 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 4 	G eometry referenc e: 1
O riginal alignment
푢80% = 35.2 mm
퐹80% = 11.2 kN
G enerated with G O M C orrelate 2 0 1 6
1 0 /1 0
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+35.178 mm	Load
DIM 	+11.804 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 5 8 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-34 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-34 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-34 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 262 of 333 --

F.6.13 Specimen B-13
Table F.26 Strain field due to impact loading from DIC analysis for B-13, drop-height h = 5.0 m.
Deflection /
Time Strain field for impact loading: B-13
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 1 0 .6 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
푢 = 0.0 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 1 0 .4 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
푢 = 0.7 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 1 0 .2 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
푢 = 2.1 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
3 /9
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 1 0 .0 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
푢 = 3.0 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
4 /9
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 9 .8 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
푢 = 4.1 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
5 /9
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 9 .6 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
푢 = 7.9 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /9
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 8 .6 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
푢 = 14.8 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /9
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 6 .6 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
푢 = 20.9 mm 1
푡 = 8.2 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_82
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 2 .4 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-35	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-35	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-35

-- 263 of 333 --

Table F.27 Strain field due to static loading from DIC analysis for B-13. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-13
푢 = 20.9 mm
푡 = 8.2 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_82
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 2 .4 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-13
푢 = 2.5 mm
퐹 = 2.7 kN
G enerated with G O M C orrelate 2 0 1 6
1
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+2.547 mm	
Load
DIM 	+2.823 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 6 	G eometry referenc e:
O riginal alignment
푢 = 5.0 mm
퐹 = 4.0 kN
G enerated with G O M C orrelate 2 0 1 6
2
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+4.968 mm	
Load
DIM 	+6.372 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 4 	G eometry referenc e:
O riginal alignment
푢100% = 6.7 mm
퐹100% = 8.5 kN
G enerated with G O M C orrelate 2 0 1 6
7
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+8.594 kN
Displacement
DIM 	+6.693 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 1 	G eometry referenc e:
O riginal alignment
푢95% = 6.9 mm
퐹95% = 8.1 kN
G enerated with G O M C orrelate 2 0 1 6
9
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+6.926 mm	
Load
DIM 	+7.849 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 7 	G eometry referenc e:
O riginal alignment
푢90% = 7.2 mm
퐹90% = 7.6 kN
G enerated with G O M C orrelate 2 0 1 6
9
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+6.926 mm	
Load
DIM 	+7.849 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 7 	G eometry referenc e:
O riginal alignment
푢80% = 9.4 mm
퐹80% = 6.8 kN
G enerated with G O M C orrelate 2 0 1 6
1 0 /1
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+9.467 mm	
Load
DIM 	+6.195 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 4 9 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
F-36 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-36 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-36 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 264 of 333 --

F.6.14 Specimen B-14
Table F.28 Strain field due to impact loading from DIC analysis for B-14, drop-height h = 5.0 m.
Deflection /
Time Strain field for impact loading: B-14
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_0
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 9 .0 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 0.0 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_2
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .8 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 0.3 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .6 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 1.3 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
3 /9
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .4 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 2.4 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
4 /9
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .2 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 3.2 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
5 /9
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 8 .0 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 7.1 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /9
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 7 .0 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 13.6 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /9
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 5 .0 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
푢 = 19.0 mm 1
푡 = 8.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_80
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 3 .0 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-37	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-37	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-37

-- 265 of 333 --

Table F.29 Strain field due to static loading from DIC analysis for B-14. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-14
푢 = 19.0 mm
푡 = 8.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_80
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 8 3 .0 ms 	G eometry referenc e: - 1 0 5 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-14
푢 = 2.5 mm
퐹 = 4.3 kN
G enerated with G O M C orrelate 2 0 1 6
1 /
2.5
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+4.349 kN
Displacement
DIM 	+2.502 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
3 7 	G eometry referenc e:
O riginal alignment
푢 = 5.0 mm
퐹 = 9.1 kN
G enerated with G O M C orrelate 2 0 1 6
2
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+5.069 mm	
Load
DIM 	+9.061 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
8 2 	G eometry referenc e:
O riginal alignment
푢100% = 12.1 mm
퐹100% = 13.5 kN
G enerated with G O M C orrelate 2 0 1 6
3
100
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+6.996 mm	
Load
DIM 	+12.073 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 9 	G eometry referenc e:
O riginal alignment
푢95% = 20.4 mm
퐹95% = 12.9 kN
G enerated with G O M C orrelate 2 0 1 6
4
95
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+12.729 kN
Displacement
DIM 	+20.502 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 1 	G eometry referenc e:
O riginal alignment
푢90% = 36.1 mm
퐹90% = 12.2 kN
G enerated with G O M C orrelate 2 0 1 6
5
90
[%]
0.2
0.6
0.9
1.2
1.5
1.8
2.1
2.4
2.7
3.0
Displacement
DIM 	+36.176 mm	
Load
DIM 	+12.088 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 6 0 	G eometry referenc e
O riginal alignment
푢80% = 55.8 mm
퐹80% = 10.8 kN
G enerated with G O M C orrelate 2 0 1 6
6
80
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+4.675 kN
Displacement
DIM 	+55.724 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
3 2 2 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
F-38 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-38 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-38 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 266 of 333 --

F.6.15 Specimen B-15
Table F.30 Strain field due to impact loading from DIC analysis for B-15, drop-height h = 5.0 m.
Deflection /
Time Strain field for impact loading: B-15
푢 = 0 mm
푡 = 0 ms
G enerated with G O M C orrelate 2 0 1 6
1 /9
t_0
[%]
0.500
1.500
2.250
3.000
3.750
4.500
5.250
6.000
6.750
7.500
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 9 .0 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
푢 = 0.0 mm
푡 = 0.2 ms
G enerated with G O M C orrelate 2 0 1 6
2 /9
t_2
[%]
0.500
1.500
2.250
3.000
3.750
4.500
5.250
6.000
6.750
7.500
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 8 .8 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
푢 = 0.7 mm
푡 = 0.4 ms
G enerated with G O M C orrelate 2 0 1 6
3 /3
t_4
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 8 .6 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
푢 = 1.8 mm
푡 = 0.6 ms
G enerated with G O M C orrelate 2 0 1 6
4 /8
t_6
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 8 .4 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
푢 = 2.9 mm
푡 = 0.8 ms
G enerated with G O M C orrelate 2 0 1 6
5 /8
t_8
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 8 .2 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
푢 = 3.9 mm
푡 = 1.0 ms
G enerated with G O M C orrelate 2 0 1 6
6 /8
t_10
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 8 .0 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
푢 = 7.7 mm
푡 = 2.0 ms
G enerated with G O M C orrelate 2 0 1 6
7 /8
t_20
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 7 .0 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
푢 = 14.5 mm
푡 = 4.0 ms
G enerated with G O M C orrelate 2 0 1 6
8 /8
t_40
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 5 .0 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
푢 = 19.8 mm 1
푡 = 7.6 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_76
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 1 .4 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
Principal Strain
[%]
1 Maximum deflection due to impact loading.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-39	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-39	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-39

-- 267 of 333 --

Table F.31 Strain field due to static loading from DIC analysis for B-15. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-15
푢 = 19.8 mm
푡 = 7.6 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_76
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 1 .4 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-15
푢 = 2.5 mm
퐹 = 4.2 kN
G enerated with G O M C orrelate 2 0 1 6
1
2.5
[%]
0.2
0.6
0.9
1.2
1.5
1.8
2.1
2.4
2.7
3.0
Displacement
DIM 	+2.512 mm
Load
DIM 	+4.211 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 7 	G eometry referenc e
O riginal alignment
푢 = 5.0 mm
퐹 = 8.9 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+8.890 kN
Displacement
DIM 	+5.052 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 2 	G eometry referenc e:
O riginal alignment
푢100% = 13.7 mm
퐹100% = 13.2 kN
G enerated with G O M C orrelate 2 0 1 6
3
100
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+13.747 mm
Load
DIM 	+14.130 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 4 	G eometry referenc e:
O riginal alignment
푢95% = 29.6 mm
퐹95% = 12.5 kN
G enerated with G O M C orrelate 2 0 1 6
4 /
95
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+13.089 kN
Displacement
DIM 	+29.510 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 3 9 	G eometry referenc e:
O riginal alignment
푢90% = 32.0 mm
퐹90% = 11.9 kN
G enerated with G O M C orrelate 2 0 1 6
5
90
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+32.169 mm
Load
DIM 	+11.972 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 8 	G eometry referenc e:
O riginal alignment
푢80% = 45.9 mm
퐹80% = 10.6 kN
G enerated with G O M C orrelate 2 0 1 6
6
80
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+10.477 kN
Displacement
DIM 	+45.828 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 9 1 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
F-40 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-40 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-40 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 268 of 333 --

F.6.16 Specimen B-16
Table F.32 Strain field due to static loading from DIC analysis for B-16. Note that B-16 was tested
only for static loading.
Deflection /
Load Strain field due to static loading: B-16
푢 = 2.5 mm
퐹 = 6.7 kN
1
[%]
0.2
0.6
0.9
1.2
1.5
1.8
2.1
2.4
2.7
3.0
Displacement
DIM 	+2.554 mm	
Load
DIM 	+6.830 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 1 	G eometry referenc e
O riginal alignment
푢 = 5.0 mm
퐹 = 11.0 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+4.999 mm	
Load
DIM 	+10.992 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 3 	G eometry referenc e:
O riginal alignment
푢 = 7.5 mm
퐹 = 12.4 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+4.999 mm	
Load
DIM 	+10.992 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 3 	G eometry referenc e:
O riginal alignment
푢100% = 15.6 mm
퐹100% = 14.5 kN
G enerated with G O M C orrelate 2 0 1 6
4
100
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+15.744 mm	
Load
DIM 	+14.166 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 8 	G eometry referenc e:
O riginal alignment
푢95% = 16.8 mm
퐹95% = 13.8 kN
G enerated with G O M C orrelate 2 0 1 6
5
95
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+16.612 mm	
Load
DIM 	+14.001 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 1 	G eometry referenc e:
O riginal alignment
푢90% = 20.9 mm
퐹90% = 13.1 kN
G enerated with G O M C orrelate 2 0 1 6
6
90
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+12.473 kN
Displacement
DIM 	+20.988 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 6 	G eometry referenc e:
O riginal alignment
푢80% = 23.1 mm
퐹80% = 11.6 kN
G enerated with G O M C orrelate 2 0 1 6
7
80
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+22.995 mm	
Load
DIM 	+12.085 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 1 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-41	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-41	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-41

-- 269 of 333 --

F.6.17 Specimen B-17
Table F.33 Strain field due to static loading from DIC analysis for B-17. Note that B-17 was tested
only for static loading.
Deflection /
Load Strain field due to static loading: B-17
푢 = 2.5 mm
퐹 = 6.1 kN
1
[%]
0.2
0.6
0.9
1.2
1.5
1.8
2.1
2.4
2.7
3.0
Displacement
DIM 	+2.698 mm	
Load
DIM 	+6.808 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 2 	G eometry referenc e
O riginal alignment
푢 = 5.0 mm
퐹 = 10.9 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+10.895 kN
Displacement
DIM 	+5.099 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 2 	G eometry referenc e:
O riginal alignment
푢 = 7.5 mm
퐹 = 12.1 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+10.895 kN
Displacement
DIM 	+5.099 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 2 	G eometry referenc e:
O riginal alignment
푢100% = 15.2 mm
퐹100% = 13.8 kN
G enerated with G O M C orrelate 2 0 1 6
4
100
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+13.895 kN
Displacement
DIM 	+15.120 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 6 	G eometry referenc e:
O riginal alignment
푢95% = 15.4 mm
퐹95% = 13.1 kN
G enerated with G O M C orrelate 2 0 1 6
5
95
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+15.456 mm	
Load
DIM 	+14.056 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 7 	G eometry referenc e:
O riginal alignment
푢90% = 15.5 mm
퐹90% = 12.4 kN
G enerated with G O M C orrelate 2 0 1 6
6
90
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+14.502 kN
Displacement
DIM 	+15.886 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 8 	G eometry referenc e:
O riginal alignment
푢80% = 47.1 mm
퐹80% = 11.0 kN
G enerated with G O M C orrelate 2 0 1 6
7
80
[%]
0.2
0.6
0.9
1.2
1.5
1.8
2.1
2.4
2.7
3.0	
Load
DIM 	+11.841 kN
Displacement
DIM 	+47.009 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 8 7 	G eometry referenc e
O riginal alignment
Principal strain
[%]
F-42 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-42 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-42 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 270 of 333 --

F.6.18 Specimen B-18
Table F.34 Strain field due to static loading from DIC analysis for B-18. Note that B-18 was tested
only for static loading.
Deflection /
Load Strain field due to static loading: B-18
푢 = 2.5 mm
퐹 = 7.3 kN
1
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+2.518 mm
Load
DIM 	+7.272 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 3 	G eometry referenc e:
O riginal alignment
푢 = 5.0 mm
퐹 = 11.2 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+4.868 mm
Load
DIM 	+11.203 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
6 9 	G eometry referenc e:
O riginal alignment
푢 = 7.5 mm
퐹 = 12.7 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+4.868 mm
Load
DIM 	+11.203 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
6 9 	G eometry referenc e:
O riginal alignment
푢100% = 25.6 mm
퐹100% = 14.1 kN
G enerated with G O M C orrelate 2 0 1 6
4
100
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+14.520 kN
Displacement
DIM 	+25.453 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 2 3 	G eometry referenc e:
O riginal alignment
푢95% = 31.1 mm
퐹95% = 13.4 kN
G enerated with G O M C orrelate 2 0 1 6
5
95
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+31.097 mm
Load
DIM 	+13.644 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 1 	G eometry referenc e:
O riginal alignment
푢90% = 33.9 mm
퐹90% = 12.7 kN
G enerated with G O M C orrelate 2 0 1 6
6
90
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+12.680 kN
Displacement
DIM 	+33.859 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 5 0 	G eometry referenc e:
O riginal alignment
푢80% = 48.5 mm
퐹80% = 11.3 kN
G enerated with G O M C orrelate 2 0 1 6
7
80
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+11.255 kN
Displacement
DIM 	+48.553 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 9 6 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-43	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-43	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-43

-- 271 of 333 --



-- 272 of 333 --

F.7 Cracking Response
F.7.1 Overview
Here, the structural response as well as the strain field of certain beams from all three series will be
discussed in detail. The specimens investigated more thoroughly were selected in order to highlight
differences between beam responses. The strain field is presented at midspan deflections 푢 = 2.5 mm and
푢 = 5.0 mm for all beams, for which the specimens show a linear-elastic response. Moreover, 푢 = 2.5 mm
and 푢 = 7.5 mm are used to represent the cracking pattern when the undamaged beams exhibit a at
state-II and state-III response, respectively.
The strain field at 푢 = 5.0 mm for Series-3 happens to occur in close proximity to when a state-III
response of the midspan cross-section is initiated.
Thereafter, the strain field at ultimate load 퐹100% are presented for all beams, and following that, the
structural response is traced by presenting the strain fields at load levels of 95%, 90% and, if data is
available, at 80%.
F.7.2 Series-3
F.7.2.1 Beam B-08
The structural response at midspan for beam B-08 is presented in Figure F.14 together with highlighted
points; the strain field at given point of the structural response is presented in Table F.35. Beam B-08
exhibits values of 휃푝푙,% similar to average gathered for beams in Series-3
0
5
10
15
0 	10 	20 	30 	40 	50 	60
Load,
 F [kN]
Deflection, u [mm]
B-08
100%
95%
90%
80%
2.5 mm
5.0 mm
7.5 mm
F
u
Figure F.14 Load-deflection curve of B-08 with highlighted points.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-45	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-45	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-45

-- 273 of 333 --

Table F.35 Strain field due to static loading from DIC analysis for B-08.
Deflection /
Load Strain field due to static loading: B-08
푢 = 2.5 mm
퐹 = 6.3 kN
1 /1
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+6.311 kN
Displacement
DIM 	+2.483 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
O riginal alignment
푢 = 5.0 mm
퐹 = 10.1 kN
G enerated with G O M C orrelate 2 0 1 6
2 /2
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+10.132 kN
Displacement
DIM 	+5.008 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 4 	G eometry referenc e: 1
O riginal alignment
푢 = 7.5 mm
퐹 = 11.7 kN
G enerated with G O M C orrelate 2 0 1 6
5 /5
u(7.5)
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+7.579 mm	Load
DIM 	+11.670 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 1 3 	G eometry referenc e: 1
O riginal alignment
푢100% = 16.5 mm
퐹100% = 13.9 kN
G enerated with G O M C orrelate 2 0 1 6
3 /3
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+16.391 mm	Load
DIM 	+13.354 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 0 	G eometry referenc e: 1
O riginal alignment
푢95% = 19.0 mm
퐹95% = 13.2 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.650 kN
Displacement
DIM 	+19.041 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 9 	G eometry referenc e: 1
O riginal alignment
푢90% = 24.7 mm
퐹90% = 12.5 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.650 kN
Displacement
DIM 	+19.041 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 9 	G eometry referenc e: 1
O riginal alignment
푢80% = 44.1 mm
퐹80% = 11.1 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+12.650 kN
Displacement
DIM 	+19.041 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 9 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
As can be seen in Figure F.14, a state-II response has been initiated at midspan for 푢 = 2.5 mm. The
cracking pattern at this point is heavily governed by flexural cracks, where a slight indication of inclined
shear cracking is noted. A total of seven cracks can be outlined for 푢 = 2.5 mm.
A state-III response has now been initiated for deflections at 푢 = 5.0 mm and 푢 = 7.5 mm. Furthermore,
two additional cracks have been initiated to a total of nine, where previous cracks have further propagated
and widened. However, the two cracks closest to midspan have developed more than cracks further away
from midspan.
Further propagation of cracks is observed at ultimate load, where an additional crack close to midspan
has been initiated and has propagated towards the load-application point. It is observed that the cracks
closest to midspan are developing further for deformations beyond 100%, whereas the propagation of
other cracks have stagnated. This would indicate that reinforcement steel in close proximity to the
developing cracks at midspan would more than for reinforcement steel close to cracks further away from
midspan. The deformation-controlled testing was aborted shortly after reaching deformations beyond a
load level corresponding to 80%.
F-46 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-46 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-46 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 274 of 333 --

F.7.2.2 Beam B-16
The structural response at midspan for beam B-16 is presented in Figure F.15, with the strain field at
highlighted points is shown in Table F.36. Similarly to beam B-08, the structural response of the midspan
cross-section at 푢 = 2.5 mm is governed by a state-II response, where the cracking is governed by flexural
cracks to a total of six cracks. Four cracks at midspan are observed as mainly flexural, whereas the two
outermost cracks propagate with a slight inclination.
0
5
10
15
0 	10 	20 	30 	40 	50 	60
Load,
 F [kN]
Deflection, u [mm]
B-16
100%
95%
90%
80%
2.5 mm
5.0 mm
7.5 mm
F
u
Figure F.15 Load-deflection curve of B-16 with highlighted points. Note the sudden drops after 푢100%,
resulting in limited deformation before 푢95% is reached.
A state-III response has been initiated for deformations at 푢 = 5.0 mm as well as 푢 = 7.5 mm, where two
additional cracks has developed at the right hand side and one at the left hand side, to a total amount of
nine cracks. An additional crack can be detected closest to the support at the left hand side, it is however
regarded to be minor and therefore a limited influence on the response of the beam. The width and the
height of cracks at this point are observed to be rather equal for all cracks.
At ultimate load and beyond, the four flexural cracks closest to midspan have markedly developed towards
the load-application point, whereas minor propagation is noted for the other existing cracks. This again
could serve as an indication that reinforcement steel in close proximity to the four flexural cracks in
midspan would yield to a higher extent during non-linear behavior in state-III and at deformations
surpassing 푢100%.
At deformations beyond 푢100% a distinct reduction of load carrying capacity it noted in Table F.36, and is
followed by a small plateau and a subsequent drop. The sharp reduction in load carrying capacity can be
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-47	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-47	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-47

-- 275 of 333 --

attributed to extensive crushing of concrete, and as a consequence, relatively small values of 휃푝푙,푥% are
measured for 95%, 90% and 80% respectively. It should however be noted that beam B-16 deforms well
beyond measured values of 푢80% with a limited reduction of load carrying capacity.
Table F.36 Strain field due to static loading from DIC analysis for B-16.
Deflection /
Load Strain field due to static loading: B-16
푢 = 2.5 mm
퐹 = 6.7 kN
1
2.5
[%]
0.2
0.6
0.9
1.2
1.5
1.8
2.1
2.4
2.7
3.0
Displacement
DIM 	+2.554 mm	
Load
DIM 	+6.830 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 1 	G eometry referenc e
O riginal alignment
푢 = 5.0 mm
퐹 = 11.0 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+4.999 mm	
Load
DIM 	+10.992 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 3 	G eometry referenc e:
O riginal alignment
푢 = 7.5 mm
퐹 = 12.4 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+4.999 mm	
Load
DIM 	+10.992 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 3 	G eometry referenc e:
O riginal alignment
푢100% = 15.6 mm
퐹100% = 14.5 kN
G enerated with G O M C orrelate 2 0 1 6
4
100
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+15.744 mm	
Load
DIM 	+14.166 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 8 	G eometry referenc e:
O riginal alignment
푢95% = 16.8 mm
퐹95% = 13.8 kN
G enerated with G O M C orrelate 2 0 1 6
5
95
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+16.612 mm	
Load
DIM 	+14.001 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 1 	G eometry referenc e:
O riginal alignment
푢90% = 20.9 mm
퐹90% = 13.1 kN
G enerated with G O M C orrelate 2 0 1 6
6
90
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+12.473 kN
Displacement
DIM 	+20.988 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 6 	G eometry referenc e:
O riginal alignment
푢80% = 23.1 mm
퐹80% = 11.6 kN
G enerated with G O M C orrelate 2 0 1 6
7
80
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+22.995 mm	
Load
DIM 	+12.085 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 1 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
F-48 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-48 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-48 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 276 of 333 --

F.7.3 Series-1
F.7.3.1 Beam B-01
Figure F.16 shows the structural response for beam B-01 and Table F.37 presents the strain field at
highlighted points as well as the strain field of the dynamic response at maximum deflection. Beam
B-01 exhibits relatively small values of 휃푝푙,100% and 휃푝푙,95% compared to the remaining beams of Series-1.
Rotation of 휃푝푙,80% was not registered before failure of the test specimen was reached.
0
5
10
15
0 	10 	20 	30 	40 	50 	60
Load,
 F [kN]
Deflection, u [mm]
B-01
100%
95%
90%
2.5 mm
5.0 mm
F
u
Figure F.16 Load-deflection curve of B-01 with highlighted points where the strain field is detailed in
Table F.6.
The linear elastic response of the impact damaged beam is depicted by the strain field at deformations
푢 = 2.5 mm and 푢 = 5.0 mm. The strain field of the dynamic response gives a strong indication of the
location of the main flexural crack, however the correspondence becomes significantly weaker for cracks
further away. The crack formation compared to Series-3 is in general rather asymmetric with strong
influences of inclined flexural shear cracks due to previous impact loading. No indications of new cracks
being initiated due to static loading were found to be developed during the linear-elastic response, except
for a flexural crack developing in close proximity to midspan.
It is observed that cracks in vicinity to midspan have developed considerably at ultimate load and are
propagating towards the load-application point, where no new indications of cracks are observed. The
crack propagation of main cracks develops in the same manner for deformations beyond 푢100%, whereas
the propagation of cracks further away from midspan have halted. The cracks found around midspan are
relatively evenly distributed together with a comparatively small spacing between cracks. The structural
response show a comparatively small decrease in load capacity for deformations beyond 푢100%. The
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-49	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-49	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-49

-- 277 of 333 --

reason why the reinforcement steel ruptures before any value for 휃푝푙,80% is measured can be attributed to
the gradual decrease of load carrying capacity, where it should be noted that the structure still deforms
to large extents and therefore exhibits a ductile response.
Table F.37 Strain field due to static loading from DIC analysis for B-01. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-01
푢 = 10.5 mm
푡 = 5.6 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_56
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 2 .2 ms 	G eometry referenc e: - 8 0 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-01
푢 = 2.5 mm
퐹 = 5.1 kN
G enerated with G O M C orrelate 2 0 1 6
4 /4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
3 2 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 10.4 kN
G enerated with G O M C orrelate 2 0 1 6
5 /5
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
6 8 	G eometry referenc e: 1
O riginal alignment
푢100% = 10.6 mm
퐹100% = 13.5 kN
G enerated with G O M C orrelate 2 0 1 6
1 /1
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
1 5 8 	G eometry referenc e: 1
O riginal alignment
푢95% = 12.2 mm
퐹95% = 12.9 kN
G enerated with G O M C orrelate 2 0 1 6
2 /2
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 8 	G eometry referenc e: 1
O riginal alignment
푢90% = 25.5 mm
퐹90% = 12.2 kN
G enerated with G O M C orrelate 2 0 1 6
3 /3
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 9 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-50 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-50 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-50 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 278 of 333 --

F.7.3.2 Beam B-12
The structural response for beam B-12 is shown in Figure F.17 and the strain field is detailed in Table F.38.
Beam B-12 exhibits comparatively small values of 휃푝푙,푥% for 100% to 90%. It was also one of three beams
that had registered values for 80% in Series-2.
0
5
10
15
0 	10 	20 	30 	40 	50 	60
Load,
 F [kN]
Deflection, u [mm]
B-12
100%
95%
90%
80%
2.5 mm
5.0 mm
F
u
Figure F.17 Load-deflection curve of B-12 with highlighted points.
The linear-elastic response is presented in Table F.25 for deformations at 푢 = 2.5 mm and at 푢 = 5.0 mm,
respectively. There is some correspondence to the crack pattern established in this range to the dynamic
strain field at maximum deflection. Namely, the major flexural crack at midspan and the two cracks
appearing rather symmetrically with respect to the main flexural crack. It is further noted that no new
cracks are initiated in the linear-elastic response, instead the cracks formed have most likely been caused
due to the impact loading.
The crack propagation in the linear elastic range to ultimate load show distinct development of the three
main cracks in close proximity to midspan, especially so for deformations beyond 푢100%. The structural
response shows distinct drops for deformations close to 푢95%, and thereafter a plateau is reached with
very limited load reduction before 푢80% is eventually reached. This results in a relatively large difference
of measured values between 휃푝푙,90% and 휃푝푙,80%. A failure mechanism seems to develop to the left of the
midspan at load level of 80%, where it seems that the midspan crack and the one to its left have grown
critical.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-51	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-51	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-51

-- 279 of 333 --

Table F.38 Strain field due to static loading from DIC analysis for B-12. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-12
푢 = 10.7 mm
푡 = 6.0 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_64
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 7 8 .8 ms 	G eometry referenc e: - 1 0 8 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-12
푢 = 2.5 mm
퐹 = 5.1 kN
G enerated with G O M C orrelate 2 0 1 6
1 /1
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+2.495 mm	Load
DIM 	+5.093 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 5 	G eometry referenc e: 1
O riginal alignment
푢 = 5.0 mm
퐹 = 10.8 kN
G enerated with G O M C orrelate 2 0 1 6
2 /2
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+10.556 kN
Displacement
DIM 	+4.968 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 4 	G eometry referenc e: 1
O riginal alignment
푢100% = 10.9 mm
퐹100% = 14.0 kN
G enerated with G O M C orrelate 2 0 1 6
1 4 /1 4
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+10.931 mm	Load
DIM 	+13.919 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 6 7 	G eometry referenc e: 1
O riginal alignment
푢95% = 14.7 mm
퐹95% = 13.3 kN
G enerated with G O M C orrelate 2 0 1 6
1 3 /1 3
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+14.703 mm	Load
DIM 	+13.644 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 1 	G eometry referenc e: 1
O riginal alignment
푢90% = 15.7 mm
퐹90% = 12.6 kN
G enerated with G O M C orrelate 2 0 1 6
1 1 /1 1
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Load
DIM 	+13.434 kN
Displacement
DIM 	+15.700 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 4 	G eometry referenc e: 1
O riginal alignment
푢80% = 35.2 mm
퐹80% = 11.2 kN
G enerated with G O M C orrelate 2 0 1 6
1 0 /1 0
Untitled
[%]
0.200
0.600
0.900
1.200
1.500
1.800
2.100
2.400
2.700
3.000
Displacement
DIM 	+35.178 mm	Load
DIM 	+11.804 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 5 8 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-52 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-52 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-52 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 280 of 333 --

F.7.4 Series-2
F.7.4.1 Beam B-06
The structural response of beam B-06 is presented in Figure F.18 and the strain field at points of interest
is detailed in Table F.39. Values of 휃푝푙,80% were not registered for beam B-06, whereas remaining values
for 휃푝푙,푥%are comparatively close to average values gathered for beams of Series-2.
0
5
10
15
0 	10 	20 	30 	40 	50 	60
Load,
 F [kN]
Deflection, u [mm]
B-06
100%
95%
90%
2.5 mm
5.0 mm
F
u
Figure F.18 Load-deflection curve of B-06 with highlighted points.
The linear-elastic range show a crack formation where major cracks can be outlined according to the
strain field of the dynamic response at maximum deflection. Essentially no further cracking is initiated
during the linear-elastic response, instead previous cracks caused by impact loading are reopened during
the quasi-static loading. The crack pattern show a strong influence of inclined shear cracking due to
impact, except for the two flexural cracks appearing close to midspan.
At ultimate load, further flexural cracking have been initiated at midspan. Crack development until
this point is noted for all cracks, however more so for cracks at the vicinity of midspan. Furthermore,
some of the flexural cracks at midspan merge together with the already present inclined flexural shear
cracks.
As deformation progresses, further cracking at midspan can be observed together with widening of
existing cracks. The crack distribution at midspan is rather even, with relatively small distances between
cracks. These cracks have propagated towards a focal point located underneath the load-application point.
The structural response is similar to an elasto-plastic response, where large deformations are measured
without any significant decrease in load carrying capacity, and would also serve as an explanation as to
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-53	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-53	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-53

-- 281 of 333 --

why values of 휃푝푙,80% were not registered until rupture of reinforcement steel occurred.
Table F.39 Strain field due to static loading from DIC analysis for B-06. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-06
푢 = 20.1 mm
푡 = 7.8 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_78
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 5 0 .4 ms 	G eometry referenc e: - 7 4 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-06
푢 = 2.5 mm
퐹 = 4.1 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
Displacement
DIM 	+2.652 mm
Load
DIM 	+4.443 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 3 	G eometry refer
O riginal alignment
푢 = 5.0 mm
퐹 = 8.9 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
Displacement
DIM 	+5.005 mm
Load
DIM 	+8.856 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 1 	G eometry refer
O riginal alignment
푢100% = 13.0 mm
퐹100% = 13.1 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
Displacement
DIM 	+12.978 mm
Load
DIM 	+13.290 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 1 	G eometry refer
O riginal alignment
푢95% = 29.4 mm
퐹95% = 12.4 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
[	Load
DIM 	+12.567 kN
Displacement
DIM 	+29.536 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 0 	G eometry refere
O riginal alignment
푢90% = 47.5 mm
퐹90% = 11.8 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
Displacement
DIM 	+47.482 mm
Load
DIM 	+12.042 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 9 6 	G eometry refe
O riginal alignment
Principal strain
[%]
F-54 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-54 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-54 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 282 of 333 --

F.7.4.2 Beam B-13
The structural response for beam B-13 due to quasi-static loading is presented in Figure F.19, the strain
field at highlighted points are detailed in Table F.40. A shear crack was noted to originate and develop in
the web and therefore deformation at 푢 = 1.0 mm is also presented in order to depict the propagation of
said crack.
The dynamic strain field show a high correlation between cracked regions indicated at maximum
deflection due to impact loading and the cracks developed due to static loading. This means that the
crack development due to static loading is most likely a result of crack initiation caused by the earlier
impact loading. A shear crack originating from the web and an additional flexural crack to the right of
midspan can be distinguished at 푢 = 1.0 mm. As loading progresses further cracks to the left and at
midspan can be distinguished. However, most development is noted with said flexural crack and shear
crack observed on the right hand side.
The shear crack does not grow critical when ultimate load is achieved. It is instead the flexural cracks
situated close to midspan that propagate and connect with the point of load-application. The development
of other cracks for deformations beyond 푢100% have practically halted, whereas further cracking is observed
to occur at midspan together with rather extensive concrete crushing.
0
5
10
15
0 	10 	20 	30 	40 	50 	60
Load,
 F [kN]
Deflection, u [mm]
B-13
100%
95%
90%
80%
1.0 mm
2.5 mm
5.0 mm
F
u
Figure F.19 Load-deflection curve of B-13 with highlighted points where the strain field is detailed in
Table F.27.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-55	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-55	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-55

-- 283 of 333 --

Table F.40 Strain field due to static loading from DIC analysis for B-13. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-13
푢 = 20.9 mm
푡 = 8.2 ms
G enerated with G O M C orrelate 2 0 1 6
8 /9
t_82
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 2 .4 ms 	G eometry referenc e: - 1 2 7 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-13
푢 = 2.5 mm
퐹 = 2.7 kN
G enerated with G O M C orrelate 2 0 1 6
1
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+2.547 mm	
Load
DIM 	+2.823 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 6 	G eometry referenc e:
O riginal alignment
푢 = 5.0 mm
퐹 = 4.0 kN
G enerated with G O M C orrelate 2 0 1 6
2
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+4.968 mm	
Load
DIM 	+6.372 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
7 4 	G eometry referenc e:
O riginal alignment
푢100% = 6.7 mm
퐹100% = 8.5 kN
G enerated with G O M C orrelate 2 0 1 6
7
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00	
Load
DIM 	+8.594 kN
Displacement
DIM 	+6.693 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 1 	G eometry referenc e:
O riginal alignment
푢95% = 6.9 mm
퐹95% = 8.1 kN
G enerated with G O M C orrelate 2 0 1 6
9
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+6.926 mm	
Load
DIM 	+7.849 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 7 	G eometry referenc e:
O riginal alignment
푢90% = 7.2 mm
퐹90% = 7.6 kN
G enerated with G O M C orrelate 2 0 1 6
9
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+6.926 mm	
Load
DIM 	+7.849 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 7 	G eometry referenc e:
O riginal alignment
푢80% = 9.4 mm
퐹80% = 6.8 kN
G enerated with G O M C orrelate 2 0 1 6
1 0 /1
Untitled
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+9.467 mm	
Load
DIM 	+6.195 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 4 9 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
F-56 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-56 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-56 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 284 of 333 --

F.7.4.3 Beam B-15
Beam B-15 also exhibited a shear crack originating from the web due to dynamic loading. However, the
beam did not fail in a brittle shear failure mechanism like beam B-13, instead it deformed and failed
in a ductile response, as can be seen in Figure F.20. For beam B-15, the strain field in Table F.41 at
푢 = 1.0 mm is also presented in order to detail the web shear crack propagation.
Indications of a web shear crack is noted in the dynamic response at the point of maximum deflection in
Table F.41, unlike beam B-13, the web shear crack is initiated at one side of the midspan only. Further
cracking such as flexural at midspan and inclined shear cracks are also noted, where a high correlation is
found between cracks opening due in the linear-elastic response due to static loading and the indications
of cracked regions of the dynamic response. It is noted that web shear crack is re-opened during the
linear-elastic range. However, it does not become critical, it is instead the cracks close to midspan
that becomes critical at peak load. For larger deformations beyond peak load, the propagation of the
web-shear crack is halted, whereas cracking in close proximity to midspan continue to develop which
eventually brings the beam to failure.
0
5
10
15
0 	10 	20 	30 	40 	50 	60
Load,
 F [kN]
Deflection, u [mm]
B-15
100%
95%
90%
80%
1.0 mm
2.5 mm
5.0 mm
F
u
Figure F.20 Load-deflection curve of B-15 with highlighted points where the strain field is detailed in
Table F.41.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-57	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-57	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-57

-- 285 of 333 --

Table F.41 Strain field due to static loading from DIC analysis for B-15. Note that the strain field of
the dynamic response has different limits in the colorscale (from 0.5 % to 5 %).
Deflection /
Time Strain field due to impact loading at maximum deflection: B-15
푢 = 19.8 mm
푡 = 7.6 ms
G enerated with G O M C orrelate 2 0 1 6
9 /9
t_76
[%]
0.500
1.000
1.500
2.000
2.500
3.000
3.500
4.000
4.500
5.000
X
Y
Z
1 3 .0 1 .2 0 1 5
- 1 0 1 .4 ms 	G eometry referenc e: - 1 2 5 .0 ms
O riginal alignment
Deflection /
Load Strain field due to static loading: B-15
푢 = 2.5 mm
퐹 = 4.2 kN
G enerated with G O M C orrelate 2 0 1 6
1
2.5
[%]
0.2
0.6
0.9
1.2
1.5
1.8
2.1
2.4
2.7
3.0
Displacement
DIM 	+2.512 mm
Load
DIM 	+4.211 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
3 7 	G eometry referenc e
O riginal alignment
푢 = 5.0 mm
퐹 = 8.9 kN
G enerated with G O M C orrelate 2 0 1 6
2
5.0
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+8.890 kN
Displacement
DIM 	+5.052 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
7 2 	G eometry referenc e:
O riginal alignment
푢100% = 13.7 mm
퐹100% = 13.2 kN
G enerated with G O M C orrelate 2 0 1 6
3
100
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+13.747 mm
Load
DIM 	+14.130 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 4 	G eometry referenc e:
O riginal alignment
푢95% = 29.6 mm
퐹95% = 12.5 kN
G enerated with G O M C orrelate 2 0 1 6
4 /
95
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+13.089 kN
Displacement
DIM 	+29.510 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 3 9 	G eometry referenc e:
O riginal alignment
푢90% = 32.0 mm
퐹90% = 11.9 kN
G enerated with G O M C orrelate 2 0 1 6
5
90
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Displacement
DIM 	+32.169 mm
Load
DIM 	+11.972 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 8 	G eometry referenc e:
O riginal alignment
푢80% = 45.9 mm
퐹80% = 10.6 kN
G enerated with G O M C orrelate 2 0 1 6
6
80
[%]
0.20
0.60
0.90
1.20
1.50
1.80
2.10
2.40
2.70
3.00
Load
DIM 	+10.477 kN
Displacement
DIM 	+45.828 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 9 1 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
F-58 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-58 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-58 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 286 of 333 --

F.7.5 Adjusted colorscale
Table F.42 Strain field due to static loading from DIC analysis for beams of Series-3 at 95 % of the
peak load.
Deflection/Load Strain field due to static loading
B-07
푢95% = 29.4 mm
퐹95% = 12.4 kN
8 /
[%]
0.20
2.00
4.00
6.00
8.00
10.00
12.00
14.00
16.00
18.00
20.00
Displacement
DIM 	+23.494 mm	
Load
DIM 	+12.976 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
O riginal alignment
B-08
푢95% = 19.0 mm
퐹95% = 13.2 kN
G enerated with G O M C orrelate 2 0 1 6
6 /6
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
Load
DIM 	+12.650 kN
Displacement
DIM 	+19.041 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 9 	G eometry referenc e: 1
O riginal alignment
B-09
푢95% = 22.8 mm
퐹95% = 13.4 kN
G enerated with G O M C orrelate 2 0 1 6
8 /8
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
Load
DIM 	+13.962 kN
Displacement
DIM 	+22.774 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 9 	G eometry referenc e: 1
O riginal alignment
B-16
푢95% = 16.8 mm
퐹95% = 13.8 kN
G enerated with G O M C orrelate 2 0 1 6
8 /
Untitled
[%]
0.20
2.00
4.00
6.00
8.00
10.00
12.00
14.00
16.00
18.00
20.00	
Load
DIM 	+14.001 kN
Displacement
DIM 	+16.612 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 1 	G eometry referenc e:
O riginal alignment
B-17
푢95% = 15.4 mm
퐹95% = 13.1 kN
G enerated with G O M C orrelate 2 0 1 6
8 /
Untitled
[%]
0.20
2.00
4.00
6.00
8.00
10.00
12.00
14.00
16.00
18.00
20.00
Displacement
DIM 	+15.456 mm	
Load
DIM 	+14.056 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 7 	G eometry referenc e:
O riginal alignment
B-18
푢95% = 31.1 mm
퐹95% = 13.4 kN
G enerated with G O M C orrelate 2 0 1 6
9 /
Untitled
[%]
0.20
2.00
4.00
6.00
8.00
10.00
12.00
14.00
16.00
18.00
20.00
Displacement
DIM 	+31.097 mm
Load
DIM 	+13.644 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 1 	G eometry referenc e:
O riginal alignment
Principal strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-59	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-59	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-59

-- 287 of 333 --

Table F.43 Strain field due to static loading from DIC analysis for beams of Series-1 at 95 % of the
peak load.
Deflection/Load Strain field due to static loading
B-01
푢95% = 12.2 mm
퐹95% = 12.9 kN
G enerated with G O M C orrelate 2 0 1 6
6 /6
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
X
Y
Z
1 3 .0 1 .2 0 1 5
1 6 9 	G eometry referenc e: 1
O riginal alignment
B-02
푢95% = 20.9 mm
퐹95% = 13.4 kN
2 /2
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
Load
DIM 	+13.513 kN
Displacement
DIM 	+20.808 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 0 9 	G eometry referenc e: 1
O riginal alignment
B-03
푢95% = 13.8 mm
퐹95% = 13.9 kN
G enerated with G O M C orrelate 2 0 1 6
7 /7
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
Load
DIM 	+12.930 kN
Displacement
DIM 	+13.794 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
1 8 0 	G eometry referenc e: 1
O riginal alignment
B-10
푢95% = 16.6 mm
퐹95% = 13.3 kN
G enerated with G O M C orrelate 2 0 1 6
6 /6
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000	Displacement
DIM 	+16.698 mm	Load
DIM 	+12.622 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 8 	G eometry referenc e: 1
O riginal alignment
B-11
푢95% = 20.3 mm
퐹95% = 12.7 kN
G enerated with G O M C orrelate 2 0 1 6
8 /
Untitled
[%]
0.20
2.00
4.00
6.00
8.00
10.00
12.00
14.00
16.00
18.00
20.00
Displacement
DIM 	+20.506 mm	
Load
DIM 	+12.476 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 2 5 	G eometry referenc e:
O riginal alignment
B-12
푢95% = 14.7 mm
퐹95% = 13.3 kN
G enerated with G O M C orrelate 2 0 1 6
1 5 /1 5
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
Displacement
DIM 	+14.703 mm	Load
DIM 	+13.644 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 9 1 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
F-60 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-60 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-60 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 288 of 333 --

Table F.44 Strain field due to static loading from DIC analysis for beams of Series-2 at 95 % of the
peak load.
Deflection/Load Strain field due to static loading
B-04
푢95% = 26.0 mm
퐹95% = 11.7 kN
8 /8
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
Load
DIM 	+11.279 kN	
Displacement
DIM 	+26.079 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 2 7 	G eometry referenc e: 1
O riginal alignment
B-05
푢95% = 40.5 mm
퐹95% = 11.4 kN
G enerated with G O M C orrelate 2 0 1 6
7 /7
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000	Displacement
DIM 	+40.485 mm	Load
DIM 	+11.594 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
2 7 3 	G eometry referenc e: 1
O riginal alignment
B-06
푢95% = 29.4 mm
퐹95% = 12.4 kN
G enerated with G O M C orrelate 2 0 1 6
Untitled
[%
1
1
1
1
1
2
Load
DIM 	+12.567 kN
Displacement
DIM 	+29.536 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 4 0 	G eometry refere
O riginal alignment
B-13
푢95% = 6.9 mm
퐹95% = 8.1 kN
G enerated with G O M C orrelate 2 0 1 6
1 1 /1
Untitled
[%]
0.20
2.00
4.00
6.00
8.00
10.00
12.00
14.00
16.00
18.00
20.00
Displacement
DIM 	+6.926 mm	
Load
DIM 	+7.849 kN
X
Y
Z
1 3 .0 1 .2 0 1 5
1 0 7 	G eometry referenc e:
O riginal alignment
B-14
푢95% = 20.4 mm
퐹95% = 12.9 kN
G enerated with G O M C orrelate 2 0 1 6
7 /7
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000	
Load
DIM 	+12.729 kN
Displacement
DIM 	+20.502 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 1 1 	G eometry referenc e: 1
O riginal alignment
B-15
푢95% = 29.6 mm
퐹95% = 12.5 kN
G enerated with G O M C orrelate 2 0 1 6
7 /7
Untitled
[%]
0.200
2.000
4.000
6.000
8.000
10.000
12.000
14.000
16.000
18.000
20.000
Load
DIM 	+13.089 kN
Displacement
DIM 	+29.510 mm
X
Y
Z
1 3 .0 1 .2 0 1 5
2 3 9 	G eometry referenc e: 1
O riginal alignment
Principal strain
[%]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-61	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-61	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-61

-- 289 of 333 --

F.8 Photographs of Beams After Static Testing
Table F.45 Photographs of Series-3 beams after static testing.
Beam-ID Series-3
B-07	•
B-08
•
B-09- 	•
	• 	•
B-16•
	.. 	-	
•
-
B-17
B-18
• 	..
F-62 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-62 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-62 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 290 of 333 --

Table F.46 Photographs of Series-1 beams after static testing.
Beam-ID Series-1
B-01
-
•
B-02
l
E I
B-03
B-10I	
'' 	•	
.,
,,'
B-11
B-12	•	•
..
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-63	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-63	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 F-63

-- 291 of 333 --

Table F.47 Photographs of Series-2 beams after static testing.
Beam-ID Series-2
B-04
B-05
.. 	•
B-06
B-13...3
B-14
B-15•	•
/
• f
F-64 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-64 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	F-64 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 292 of 333 --

G Finite Element Model - Different Meshes
Table G.1 Hexahedron mesh pattern. Part of the entire beam is presented as well as a zoomed-in
pattern.
Mesh
size Hexahedron Mesh Zoomed in mesh
20 mm
10 mm
5 mm
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 G-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 G-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 G-1

-- 293 of 333 --

Table G.2 Tetrahedron mesh pattern. Part of the entire beam is presented as well as a zoomed-in
pattern.
Mesh
size Tetrahedron mesh Zoomed in mesh
20 mm
10 mm
5 mm
G-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	G-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	G-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 294 of 333 --

H Finite Element Model - Results
H.1 Velocity and Support Displacement
-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 vy [m/s]
Time, t [ms]
2DOF - f.y = 686 MPa
LS-Dyna - Hexa-05
LS-Dyna - Tetra-05
DIC - Average
Figure H.1 Midspan velocity vs time for drop-height h = 2.5 m for all models.
-4
-2
0
2
4
6
8
10
0 	5 	10 	15 	20 	25
Velocity,
 vy [m/s]
Time, t [ms]
2DOF - f.y = 686 MPa
LS-Dyna - Hexa-05
LS-Dyna - Tetra-05
DIC - Average
Figure H.2 Drop-weight velocity vs time for drop-height h = 2.5 m for all models.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-1

-- 295 of 333 --

-15
-10
-5
0
5
0 	5 	10 	15 	20 	25
Displacement,
 u [mm]
Time, t [ms]
LS-Dyna - Hexa-05
LS-Dyna - Tetra-05
DIC - Average
Figure H.3 Displacement over the support for a drop-height h = 2.5 m for the LS-DYNA models and
DIC analysis.
H.2 Deformed Shape of the Beam
-2
0
2
4
6
8
10
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Deflection,
 u [mm]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure H.4 Deformed shape of the beam according to the hexahedron LS-Dyna model at different times
after impact for a drop-height of 5.0 m.
H-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	H-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	H-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 296 of 333 --

-0.2
0.0
0.2
0.4
0.6
0.8
1.0
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Relative Deflection [-]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure H.5 Relative deformed shape of the beam according to the hexahedron LS-Dyna model at
different times after impact for a drop-height of 5.0 m.
-2.0
0.0
2.0
4.0
6.0
8.0
10.0
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Deflection,
 u [mm]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure H.6 Deformed shape of the beam according to the hexahedron LS-Dyna model at different times
after impact for a drop-height of 2.5 m.
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-3

-- 297 of 333 --

-2
0
2
4
6
8
10
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Deflection,
 u [mm]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure H.7 Deformed shape of the beam according to the tetrahedron LS-Dyna model at different times
after impact for a drop-height of 5.0 m.
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Relative Deflection [-]
Length, l [mm]
0.2ms 	1.2ms
0.4ms 	1.4ms
0.6ms 	1.6ms
0.8ms 	1.8ms
1.0ms 	2.0ms
Figure H.8 Relative deformed shape of the beam according to the tetrahedron LS-Dyna model at
different times after impact for a drop-height of 5.0 m.
H-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	H-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	H-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 298 of 333 --

-2
0
2
4
6
8
10
0 	100 	200 	300 	400 	500 	600 	700 	800 	900 	1000
Deflection,
 u [mm]
Length, l [mm]
0.2 ms 	1.2 ms
0.4 ms 	1.4 ms
0.6 ms 	1.6 ms
0.8 ms 	1.8 ms
1.0 ms 	2.0 ms
Figure H.9 Deformed shape of the beam according to the tetrahedron LS-Dyna model at different times
after impact for a drop-height of 2.5 m.
H.3 Comparison with Experimental Results
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
0 	100 	200 	300 	400 	500
Relative Deflection [-]
Length, l [mm]
Hexa-05 - t = 0.4ms
Hexa-05 - t = 1.0ms
Hexa-05 - t = 2.0ms
Tetra-05 - t = 0.4ms
Tetra-05 - t = 1.0ms
Tetra-05 - t = 2.0ms
DIC B-06 - t = 0.4ms
DIC B-06 - t = 1.0ms
DIC B-06 - t = 2.0ms
Figure H.10 Relative deformed shape at different times after impact for a drop-height of 5.0 m
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-5

-- 299 of 333 --

H.4 Static FE Analysis
H.4.1 5 mm hexahedron model
Table H.1 Strain field for static analysis of the 5 mm hexahedron LS-DYNA model.
Deflection/
Load Strain field for static loading
푢 = 0.2 mm
퐹 = 3.4 kN
푢 = 2.5 mm
퐹 = 9.1 kN
푢 = 3.7 mm
퐹 = 10.7 kN
푢 = 5.5 mm
퐹 = 11.8 kN
푢 = 10.0 mm
퐹 = 12.6 kN
푢 = 15.0 mm
퐹 = 12.5 kN
푢 = 25.0 mm
퐹 = 12.3 kN
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.32 0.63 0.95 1.27 1.59 1.90 2.22 2.54 2.85 3.17
H-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	H-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	H-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 300 of 333 --

H.4.2 5 mm tetrahedron model
Table H.2 Strain field for static analysis of the 5 mm tetrahedron LS-DYNA model.
Deflection/
Load Strain field for static loading
푢 = 0.2 mm
퐹 = 3.1 kN
푢 = 2.5 mm
퐹 = 11.0 kN
푢 = 3.7 mm
퐹 = 12.9 kN
푢 = 5.5 mm
퐹 = 14.3 kN
푢 = 7.5 mm
퐹 = 15.4 kN
Principal
Strain [%]
2
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.38 0.75 1.12 1.50 1.88 2.23 2.63 3.01 3.38 3.76
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-7

-- 301 of 333 --

H.4.3 10 mm tetrahedron model
Table H.3 Strain field for static analysis of the 10 mm tetrahedron LS-DYNA model with skin remesh.
Deflection/
Load Strain field for static loading
푢 = 0.2 mm
퐹 = 2.3 kN
푢 = 2.5 mm
퐹 = 8.6 kN
푢 = 3.7 mm
퐹 = 10.6 kN
푢 = 4.9 mm
퐹 = 12.0 kN
푢 = 7.7 mm
퐹 = 12.6 kN
푢 = 9.4 mm
퐹 = 9.6 kN
Principal
Strain [%]
2 http://www.nordtest.info/images/documents/nt-
methods/building/nt%20build%20511_wedge%20splitting%20test%20method_wst_fracture%20testi
ng%20of%20fibre-reinforced%20concrete_mode%20i_nordtest%20method.pdf
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.18 0.36 0.54 0.72 0.90 1.09 1.27 1.45 1.63 1.81
H-8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	H-8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	H-8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 302 of 333 --

H.4.4 10 mm tetrahedron model without skin remesh
Table H.4 Strain field for static analysis of the 10 mm tetrahedron LS-DYNA model without skin remesh.
Deflection/
Load Strain field for static loading
푢 = 0.2 mm
퐹 = 4.9 kN
푢 = 2.5 mm
퐹 = 16.2 kN
푢 = 3.7 mm
퐹 = 18.7 kN
푢 = 4.9 mm
퐹 = 19.9 kN
푢 = 10.0 mm
퐹 = 21.2 kN
푢 = 15.0 mm
퐹 = 21.0 kN
Principal
Strain [%]
2 http://www.nordtest.info/images/documents/nt-
methods/building/nt%20build%20511_wedge%20splitting%20test%20method_wst_fracture%20testi
ng%20of%20fibre-reinforced%20concrete_mode%20i_nordtest%20method.pdf
2.85
2.54
2.22
1.90
1.59
1.27
0.95
0.63
0.32
0.00
[×10-2]
0 0.18 0.36 0.54 0.72 0.90 1.09 1.27 1.45 1.63 1.81
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-9	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-9	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 H-9

-- 303 of 333 --



-- 304 of 333 --

Load Capacity of Reinforced Concrete Beam
The load capacity of a reinforced concrete beam is determined for a given cross section.
kN 	N 10
3
	 	MPa 	Pa 10 6
	
1. Input Data
1.1 Geometry
Beam height: 	h 	0.1m	
Beam width: 	b 	0.1m	
Effective span length: 	L 	1m	
Nominal bar diameter: 	Φ 	6mm	
Area of reinforcement bar: 	Abar 	π Φ2
4
 	28.274 mm
2
		
Stirrup dimension: 	Φs 	0mm	
Note: No stirrups
Number of bars in the top: 	n' 	2	
Number of bars in the bottom: 	n 	2	
I Calculations
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-1

-- 305 of 333 --

Area of top reinforcement: 	As 	n Abar	 	56.549 mm
2
		
Area of bottom reinforcement: 	A' s 	n' Abar	 	56.549 mm
2
		
Concrete cover: 	c 	0.02m Φ
2
 	0.017 m		
Distance from top edge to bottom reinforcement:
d 	h Φ
2 c		





 	80 mm			
Assuming nominal position of the bars:
Adopting the measured position of the bars: 	d 	h Φ
2 14mm		





	=
Distance from top edge to top reinforcement:
Assuming nominal position of the bars: 	d' Φ
2 c	 	20 mm			
Adopting the measured position of the bars: 	d' Φ
2 18.9mm		=
1.2 Material properties
Concrete: 	Mean compressive strength: 	fcm 	42.2MPa	
Mean tensile strength 	fctm 	3.7 MPa		
Mean modulus of elasticity 	E cm 	33.9GPa	
Reinforcing steel: 	Mean yield strength: 	fym 	575MPa	
Ultimate tensile stress: 	ft 	686MPa	
Mean modulus of elasticity: 	E sm 	196 GPa		
I-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 306 of 333 --

2. Stress-strain Relationship of Concrete
2.1 Mathematic formulation
The parabola-rectangle stress-strain diagram for concrete under compression (according t
EN 1992-1-1) is adopted.
Parameters for all concrete classes:
Concrete strain at maximum strength: 	εc2 	2 10 3	
	
Ultimate concrete strain: 	εcu2 	3.5 10 3	
	
Exponent: 	n 	2	
Stress-strain relationship: 	σc εc	 	 	1 	1 εc
εc2







n







 fcm	






 0 	εc	 	εc2		if
fcm 	εc2 	εc	 	εcu2		if

Create a vector with different values of strain: 	εc 	0 0.0001	 	εcu2		
Graphic representation of the stress-strain relationship:
0 100
 	1 10 3	
 	2 10 3	
 	3 10 3	
 	4 10 3	

0 100

1 107

2 107

3 107

4 107

5 107

Simplified stress-strain relationship of concrete
σc εc	 
εc
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-3

-- 307 of 333 --

2.2 Determination of block factors
Area under the curve for a given value of strain:
Area εc	 	 0
εc
εc	σc εc	 	


 d	
Area under the curve multiplied by the distance from the origin to the center of gravity of
area:
A_ε εc	 	 0
εc
εc	σc εc	 	 εc	


 d	
Determination of factors αR.S and βR.S
αR.S εc	 	 Area εc	 	
fcm εc	
 	αR.S εcu2	 	 	0.81	
βR.S εc	 	
εc
A_ε εc	 	
Area εc	 	

εc
 	βR.S εcu2	 	 	0.416	
I-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 308 of 333 --

3. Stress-strain Relationship of Reinforcing Steel
3.1 Mathematic formulation
Ultimate steel strain: 	εsu 	0.108	
Yield strain: 	εsy
fym
E sm
 	εsy 	2.934 	10 3	
	
Relationship parameters: 	p 1 εs	 	 εs 	εsy	
εsu 	εsy	

Stress-strain relationship: 	σs εs	 	 	E sm εs		 	 	εs 	εsy		if
fym 	p 1 εs	 	 ft 	fym		 			 	εs 	εsy		if

εs 	0 0.001	 	εsu		
Graphic representation of the stress-strain relationship for reinforcing steel:
0 	0.05 	0.1 	0.15
0
2 108

4 108

6 108

8 108

Bi-linear stress-strain relationship of steel
σs εs	 
εs
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-5

-- 309 of 333 --

4. Design Strength Values
4.1 Concrete
Partial factor: 	γC 	1.0	
Design compressive strength: 	fcd
fcm
γC
 	fcd 	42.2 MPa		
Concrete ultimate strain: 	εcu 	0.0035	
Stress block factors: 	αR 	αR.S εcu	 	 	0.81		
βR 	βR.S εcu2	 	 	0.416		
5%-fractile tensile strength: 	fctk0.05 	0.7 fctm	 	2.59 MPa			
Flexural tensile strength: 	κ 	0.6 0.4
4 h
m
 	1.311		
fct.fl 	κ fctm	 	4.852 MPa			
4.2 Reinforcing steel
γS 	1.0	
Partial factor:
Design yield stress: 	fyd
fym
γS
 	fyd 	575 MPa		
I-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 310 of 333 --

5. Load Capacity in Ultimate Limit State
5.1 Analysis of field section without top reinforcement
Number of bars in the top: 	n' 	0	
Number of bars in the bottom: 	n 	2	
Assume yielding: 	εs.1 	εsy	 	εs.1
d 	x 1	
x 1
εcu	=
Position of neutral axis:
Initial guess: 	x u.1 	20mm	
Calculated value: 	x u.1 	root αR fcd	 	b	 	x u.1	 	σs
d 	x u.1	
x u.1
εcu





 n	 	Abar		 	x u.1	







x u.1 	9.9 mm		
Check the strain in the reinforcement bars:
εs.1
d 	x u.1	
x u.1
εcu 	0.025		 	εsy 	2.934 	10 3	
	 	εs.1 	εsy	 	1	
Calculation of load capacity:
M u.1 	αR fcd	 	b	 	x u.1	 	d 	βR x u.1			 			 	M u.1 	2.566 kN m			
Fu.1
4 M u.1	
L
 	Fu.1 	10.266 kN		
Calculation of stress in the steel bars:
σs.1 	σs εs.1	 		 	σs.1 	598.083 MPa		
Calculation of curvature at failure:
εs.1 	0.025	 	φu.1
εs.1
d 	x u.1	 0.354 m 1	
	
5.2 Analysis of field section including top reinforcement
Number of bars in the top: 	n' 	2	
Number of bars in the bottom: 	n 	2	
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-7

-- 311 of 333 --

Assume tension in top and bottom and that the neutral axis is located above the top
reinforcerment.
Strain in bottom reinforcement: 	εs.2
d 	x u.2	
x u.2
εcu	=
Strain in top reinforcement: 	ε' s.2
d' 	x u.2	
x u.2
εcu	=
Position of neutral axis:
Initial guess: 	x u.2 	20mm	
Calculated value:
x u.2 	root αR fcd	 	b	 	x u.2	 	σs
d' 	x u.2	
x u.2
εcu





 A' s		 	σs
d 	x u.2	
x u.2
εcu





 As		 	x u.2	







x u.2 	14.288 mm		 	Note: The neutral axis is indeed located above the
top reinforcement. Top bars are subjected to tensile
stress.
Check the strain in the reinforcement bars:
εs.2
d 	x u.2	
x u.2
εcu 	0.016		 	εsy 	2.934 	10 3	
	 	εs.2 	εsy	 	1	
ε' s.2
d' 	x u.2	
x u.2
εcu 	1.399 	10 3	
		 	ε' s.2 	εsy	 	0	
Calculation of moment capacity:
M u.2 	αR fcd	 	b	 	x u.2	 	d 	βR x u.2			 		 	σs
d' 	x u.2	
x u.2
εcu





 A' s	 	d 	d'		( 	)			 	M u.2 	2.684 kN m			
Fu.2
4 M u.2	
L
 	Fu.2 	10.737 kN		
Calculation of stress in the steel bars:
σ's.2 	σs ε' s.2	 		 	σ's.2 	274.25 MPa		
σs.2 	σs εs.2	 		 	σs.2 	588.907 MPa		
Calculation of curvature at failure:
εs.2 	0.016	 	φu.2
εs.2
d 	x u.2	 0.245 m 1	
	
I-8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-8 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 312 of 333 --

6. Moment and Curvature at Onset of Yielding
6.1 Analysis of field section without top reinforcement
Yielding strain: 	εsy 	2.934 	10 3	
	
Definition of strain in the compressed edge:
εcc.y.1
x y.1
d 	x y.1	 εsy		=
Tensile force in the bottom reinforcement:
Fsy 	fyd n	 	Abar	 	32.515 kN			
Equivalent compressive force in concrete
FC.y.1 	αR.y fcd	 	b	 	x y.1		= 	αR.y 	αR.S εcc.y.1	 		=
Horizontal equilibrium condition:
Fsy 	FC.y	=
Assume 	x y.1 	19.425mm	
Total tensile force: 	Fsy 	32.515 kN		
Total compressive force: 	FC.y.1 	αR.S
x y.1
d 	x y.1	 εsy	





 fcd	 	b	 	x y.1	 	32.513 kN			
ΔF 	FC.y.1 	Fsy	 	2.503	 	10 3	
 	kN			
Note: Check that ΔF ≈ 0
Calculation of strains
εcc.y.1
x y.1
d 	x y.1	 εsy	 	9.408 	10 4	
		 	εcc.y.1 	εc2	 	1	
Calculation of moment at yielding:
αR.y 	αR.S εcc.y.1	 	 	0.397		 	βR.y 	βR.S εcc.y.1	 	 	0.349		
M y.1 	αR.y fcd	 	b	 	x y.1	 	d 	βR.y x y.1			 			 	M y.1 	2.381 kN m			 	Fy.1
4 M y.1	
L 9.523 kN			
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-9	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-9	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-9

-- 313 of 333 --

Determination of stresses in the reinforcement bars:
σs.y.1 	σs εsy	 		 	σs.y.1 	575 MPa		
Curvature at yielding
εsy 	2.934 	10 3	
	 	φy.1
εsy
d 	x y.1	 0.048 m 1	
	
6.2 Analysis of field section including top reinforcement
Assume tension in the top reinforcement bars
Yielding strain: 	εsy 	2.934 	10 3	
	
Definition of strain in the compressed edge and top reinforcement:
εcc.y.2
x y.2
d 	x y.2	 εsy		= 	ε' s.y.2
d' 	x y.2	
d 	x y.2	 εsy		=
Tensile force in the reinforcement:
Top reinforcement: 	F' sy.2 	σs ε' s.y.2	 	 A' s		=
Bottom reinforcement: 	Fsy 	fyd As	 	32.515 kN			
Equivalent compressive force in concrete
FC.y.2 	αR.y fcd	 	b	 	x y.2		= 	αR.y 	αR.S εcc.y.2	 		=
Horizontal equilibrium condition:
F' sy.2 	Fsy	 	FC.y.2	=
Assume 	x y.2 	19.505mm	
Total tensile force: 	FT.y.2 	Fsy 	σs
d' 	x y.2	
d 	x y.2	 εsy	





 A' s		 	32.782 kN			
Total compressive force: 	FC.y.2 	αR.S
x y.2
d 	x y.2	 εsy	





 fcd	 	b	 	x y.2	 	32.791 kN			
ΔF 	FC.y.2 	FT.y.2	 	9.902 	10 3	
 	kN			
Note: Check that ΔF ≈ 0
I-10 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-10 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-10 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 314 of 333 --

Calculation of strains
εcc.y.2
x y.2
d 	x y.2	 εsy	 	9.459 	10 4	
		 	εcc.y.2 	εc2	 	1	
ε' s.y.2
d' 	x y.2	
x y.2
εcc.y.2	 	2.4 	10 5	
		
Calculation of moment at yielding:
αR.y 	αR.S εcc.y.2	 	 	0.398		 	βR.y 	βR.S εcc.y.2	 	 	0.349		
M y.2 	αR.y fcd	 	b	 	x y.2	 	d 	βR.y x y.2			 		 	σs
d' 	x y.2	
x y.2
εcc.y.2






A' s	 	d 	d'		( 	)			
M y.2 	2.384 kN m			 	Fy.2
4 M y.2	
L 9.537 kN			
Determination of stresses in the reinforcement bars:
Top reinforcement: 	σ's.y.2 	σs ε' s.y.2	 		 	σ's.y.2 	4.705 MPa		
Bottom reinforcement: 	σs.y.2 	σs εsy	 		 	σs.y.2 	575 MPa		
Curvature at yielding
εsy 	2.934 	10 3	
	 	φy.2
εsy
d 	x y.2	 0.048 m 1	
	
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-11	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-11	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-11

-- 315 of 333 --

7. Shear Capacity of Reinforced Concrete Beam
Theoretical shear capacity:
Vc 	b d	 	fv		=
fv 	τRd κV	 	1.2 	40 ρ1			 			=
Tensile strength: 	fctm 	3.7 MPa		
5%-fractile tensile strength: 	fctk0.05 	2.59 MPa		
Factor: 	κV 	1	
Partial design factor: 	γc 	1	
τRd 	0.25 fctk0.05
γc
 	0.647 MPa			
Area of tensile reinforcement: 	As 	56.549 mm
2
	
Tensile reinforcement ratio: 	ρ1
As
b d	 7.069 	10 3	
		
Design Shear Strength: 	fv 	τRd κV	 	1.2 	40 ρ1			 		 	0.96 MPa			
Desing Shear Capacity: 	Vc 	b d	 	fv	 	7.681 kN			
Ultimate External Load: 	FV.c 	2 Vc	 	15.361 kN			
I-12 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-12 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-12 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 316 of 333 --

8. Summary
8.1 Moment and curvature at yielding without consideration of top reinforcement
M y.1 	2.381 kN m			 	x y.1 	19.425 mm		
Fy.1 	9.523 kN		 	φy.1 	0.048 m 1	

8.2 Moment and curvature at yielding considering both top and bottom
reinforcement
M y.2 	2.384 kN m			 	x y.2 	19.505 mm		
Fy.2 	9.537 kN		 	φy.2 	0.048 m 1	

8.3 Load Capacity at Ultimate State without consideration of top reinforcement
M u.1 	2.566 kN m			 	x u.1 	9.9 mm		
Fu.1 	10.266 kN		 	φu.1 	0.354 m 1	

8.4 Load Capacity at Ultimate State considering both top and bottom
reinforcement
M u.2 	2.684 kN m			 	x u.2 	14.288 mm		
Fu.2 	10.737 kN		 	φu.2 	0.245 m 1	

Increase in load capacity if top
reinforcement is considered:
Fu.2 	Fu.1	
Fu.1
4.592 %		
8.5 Shear Capacity
Vc 	7.681 kN		
FV.c 	15.361 kN		
FV.c 	Fu.2	 	1	 	Note: The dominant failure mode
corresponds to bending failure
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-13	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-13	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-13

-- 317 of 333 --

Theoretical Load vs Deformation Relationship
1. Determination of Cracking Moment and Cracking Curvature:
Modular ratio: 	αs
E sm
E cm
5.782		
Moment of inertia in State I: 	II
b h 3

12 αs 	1		 	2n Abar	 	d h
2
	





2
	 	8.82 	10 6
 	mm
4
		
Cracking stress: 	fct.fl
M cr
h
2







II
=
Cracking moment: 	M cr
fct.fl II	
h
2
0.856 kN m				
Cracking force: 	Fcr
4 M cr	
L 3.423 kN			
2. Determination of Moment of Inertia in State II
Calculation of position of neutral axis:
Number of bars in the top: 	n' 	2	
Number of bars in the bottom: 	n 	2	
Consider first moment of area around the neutral axis:
b x II
2

2 αs 	1		 	 A' s	 	x II 	d'		 			 	αs As	 	d 	x II		 			=
Initial guess:
x II 	50mm	
Calculated value:
x II 	root b x II
2

2 αs	 	 A' s	 	d' 	x II		 			 	αs As	 	d 	x II		 			 	x II	







x II 	19.855 mm		
I-14 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-14 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-14 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 318 of 333 --

Moment of inertia:
III
b x II
3

3 αs	 	 A' s	 	d' 	x II		 	2
	 	αs As	 	d 	x II		 	2
		
III 	1.444 	10 6	
 	m
4

3. Load-Deformation plot
3.1 Determination of equivalent stiffness
Stiffness in State I: 	KI
48 E cm	 	II	
L 3 14.352 kN
mm
		
Stiffness in State II: 	KII
48 E cm	 	III	
L 3 2.349 kN
mm
		
3.2 Deformation considering only State II until ultimate load
Peak load: 	Fu.2 	10.737 kN		
Deflection at peak load: u II
Fu.2
KII
4.571 mm			
Load as a function of displacement: 	Force 2 u	( ) 	u KII	 	u 	u II		if
Fu.2 	u 	u II		if

3.3 Deformation considering State I and State II
Cracking load: 	Fcr 	3.423 kN		
Deflection when cracking occurs: 	u cr
Fcr
KI
0.239 mm			
Peak load: 	Fu.2 	10.737 kN		
Deflection at peak load: 	u II 	4.571 mm		
Stiffness between cracking and yielding: 	Kcy
Fu.2 	Fcr	
u II 	u cr	 1.688 kN
mm
		
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-15	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-15	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-15

-- 319 of 333 --

Load as a function of displacement: 	Force u	( ) 	KI u		 	 	u 	u cr		if
Fcr 	u 	u cr		 	 Kcy			 	 	u 	u cr		if
Fu.2 	u 	u II		if

u 	0mm 0.01mm	 	30mm		
3.4 Load-deformation curves
0 	0.01 	0.02 	0.03
0
5 103

1 104

1.5 10 4

Force u	( )
Force2 u	( )
u
I-16 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-16 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-16 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 320 of 333 --

Prediction of Plastic Rotational Capacity
The plastic rotational capacity of a simply-supported reinforced concrete beam is to be
determine according to different equations.
1. Input Data
1.1 Geometry
Beam height: 	h 	0.1 m	
Beam width: 	b 	0.1 m	
Effective span length: 	L 	1 m	
Distance to critical section from support: 	l 0
L
2 500 mm			
Effective height: 	d 	0.08 m	
2. Rotation Capacity According to Eurocode 2
Determine allowable rotation for reference beam (λ = 3):
x u 	x u.1 	9.9 mm			 	Note: Position of neutral axis considering
only bottom reinforcement.
x u
d 0.124	
Rotation capacity from the chart:
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-17	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-17	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-17

-- 321 of 333 --

Θtotal.Eur.R 	0.031	
Correction for different values of shear slenderness:
λ l 0
d 6.25		 	κ λ
λ
3 1.443		
Θtotal.Eur 	κ λ Θtotal.Eur.R	 	0.045		
Consider:
Θtotal.Eur 	2 θpl.Eur		=
Rotational capacity according to Eurocode 2:
θpl.Eur
Θtotal.Eur
2 0.022		
u pl.Eur
θpl.Eur L	
2 11.186 mm			
3. Rotation Capacity According to Betonghandbok-Konstruktion
(ABC Method)
Mathematic expression:
θpl.ABC.95 	A B	 	C	 	10 3	
	=
When measured values of material strength are used in calculation, then:
A 	1 	1.3 ωv		 	3 ω's		 	5 ωs			=
Area of tensile reinforcement: 	As 	56.549 mm
2
	
ωs
As
b d	
fym
fcm
 	0.096		
Since no stirrups were included, the contribution of the top bars can be disregarded
Area of compression reinforcement: 	Ac 	0	 	Note: the top reinforcement has been
proved to be subjected to tensile stress.
ω's
Ac
b d	
fym
fcm
 	0		
I-18 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-18 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-18 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 322 of 333 --

Shear reinforcement 	Av 	0	
ωv 	0	
Calculation of factor A:
A 	1 	5 ωs		 	0.518		 	A 	0.05	 	1	
A 	2.3	 	1	
Parameter B depends on the steel type:
B 	1.0	
Parameter C takes into account the position of the plastic hinge.
C 	7 l 0
d
 	43.75		
Determination of plastic rotational capacity:
θpl.95.ABC 	A B	 	C	 	10 3	
 	0.023		
u pl.95.ABC
θpl.95.ABC L	
2 11.341 mm			
4 Rotation Capacity According to Bk 25
Empirical expression:
l p.Bk25.f 	0.5 d	 	0.15L		= 	Plastic hinge on the field
l p.Bk25.s 	0.5d 	0.1l 0		= 	Plastic hinge over the support
Plastic hinge length:
l p.Bk25.f 	0.5 d	 	0.15L	 	190 mm			
l p.Bk25.s 	0.5 d	 	0.1l 0	 	90 mm			
Dominant failure mode:
ωs.crit
0.8 εcu	
εcu 	εsu	 0.025		 	ωs 	0.096	
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-19	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-19	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-19

-- 323 of 333 --

ωs 	ωs.crit	 	1	 	Note: The dominant failure mode is concrete crushing
Determination of plastic rotation capacity:
θpl.Bk25.f
0.4 εcu	
ωs
1 	0.3 L
d
		




 0.069		 	u pl.Bk25.f
θpl.Bk25.f L	
2 34.523 mm			
θpl.Bk25.s
0.4 εcu	
ωs
1 	0.2 l 0
d
	





 0.033		 	u pl.Bk25.s
θpl.Bk25.s L	
2 16.353 mm			
5. Empirical Methods Based on Equivalent Plastic Hinge Length
5.1 Plastic curvature
Curvature at yielding: 	φy 	φy.1	
Curvature at failure: 	φu 	φu.1	
Plastic curvature: 	φpl 	φu.1 	φy	 	0.305 m 1	
	
5.2 Determination of equivalent plastic hinge length and rotational capacity
The plastic rotational capacity is determined according to: 	θpl 	φpl l p		=
M u 	M u.1	 	M y 	M y.1	
Mattock
Empirical expression:
l p.Mattock 	0.5 d	 	0.5d 	1.14 l 0
d
 	1	






 	1 ωs 	ω's	
ωb






d
411.48mm
	






		=
Mechanical tensile reinforcement ratio: 	ωs 	0.096	
Mechanical compressive reinforcement ratio: 	ω's 	0	
Balanced mechanical reinforcement ratio: 	ωb
0.8 εcu	
εcu 	εsy	 0.435		
I-20 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-20 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-20 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 324 of 333 --

Determination of plastic hinge length:
l p.Mattock 	0.5 d	 	0.5d 	1.14 l 0
d
 	1	






 	1 ωs 	ω's	
ωb






d
411.48mm
	






	 	106.779 mm			
Rotational capacity:
θpl.Mattock 	φu.1 	φy
M u
M y
	





 l p.Mattock	 	0.032		
Corley
Empirical expression:
l p.Corley 	0.5 d	 	1.008 	d l 0
d






		=
Determination of plastic hinge length:
l p.Corley 	0.5 d	 	1.008 	d mm 1	
 l 0
d






 	mm		 	96.349 mm			
Rotational capacity:
θpl.Corley 	φu 	φy
M u
M y
	





 l p.Corley	 	0.029		
Mattock's discussion on Corley's work
Empirical expression:
l p.Corley.Mattock 	0.5 d	 	0.05 l 0			=
Determination of plastic hinge length:
l p.Corley.Mattock 	0.5 d	 	0.05 l 0		 	65 mm			
Rotational capacity:
θpl.Corley.Mattock 	φu 	φy
M u
M y
	





 l p.Corley.Mattock	 	0.02		
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-21	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-21	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 I-21

-- 325 of 333 --

Sawyer
Empirical expression:
l p.Sawyer 	0.25 d	 	0.075 l 0			=
Determination of plastic hinge length:
l p.Sawyer 	0.25 d	 	0.075 l 0		 	57.5 mm			
Rotational capacity:
θpl.Sawyerr 	φpl l p.Sawyer	 	0.018		
6. Summary
Eurocode 2: 	θpl.Eur 	0.022 rad		
Bk25 method: 	θpl.Bk25.s 	0.033 rad		
ABC method : 	θpl.95.ABC 	0.023 rad		
Mattock: 	θpl.Mattock 	0.032 rad		
Corley: 	θpl.Corley 	0.029 rad		
Mattock's discussion on Corley's: 	θpl.Corley.Mattock 	0.02 rad		
Sawyer: 	θpl.Sawyerr 	0.018 rad		
I-22 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-22 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	I-22 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 326 of 333 --

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%% 	%%%%%%%%%%%
%%%%%%%%%%%% 	Plastic Deformation Capacity of Concrete Beams 	%%%%%%%%%%%
%%%%%%%%%%%% 	Subjected to Impact Loading 	%%%%%%%%%%%
%%%%%%%%%%%% 	%%%%%%%%%%%
%%%%%%%%%%%% 	Simplified 2DOF System 	%%%%%%%%%%%
%%%%%%%%%%%% 	%%%%%%%%%%%
%%%%%%%%%%%% 	%%%%%%%%%%%
%%%%%%%%%%%% 	Fabio Lozano Mendoza 	%%%%%%%%%%%
%%%%%%%%%%%% 	Josef Makdesi Aphram 	%%%%%%%%%%%
%%%%%%%%%%%% 	%%%%%%%%%%%
%%%%%%%%%%%% 	Chalmers University of Technology 	%%%%%%%%%%%
%%%%%%%%%%%% 	%%%%%%%%%%%
%%%%%%%%%%%% 	03 - April - 2017 	%%%%%%%%%%%
%%%%%%%%%%%% 	%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
clear all
close all
clc
%% MATERIAL PROPERTIES
% Concrete
r_c = 2425; 	% [kg/m^3] Mass density
E_c = 33.9e9; 	% [Pa] Modulus of elasticity
% Steel
r_s = 7800; 	% [kg/m^3] Mass density
E_s = 200e9; 	% [Pa] Modulus of elasticity
%% GEOMETRY
A_1 = 5027e-6; 	% [m^2] Area dropweight
A_2 = 0.1*0.1; 	% [m^2] Area beam
L_b = 1; 	% [m] Length Beam
L_d = 0.258; 	% [m] Length Drop-weight
%% TRANSFORMATION FACTORS
% Transformation factors for the beam
k_b_m_el = 0.486; 	% Elastic mass transformation factor
k_b_m_pl = 0.333; 	% Plastic mass transformation factor
k_b_F_el = 1; 	% Elastic load transformation factor
k_b_F_pl = 1; 	% Plastic load transformation factor
J MATLAB Script
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-1	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-1

-- 327 of 333 --

k_b_K_el = 1; 	% Elastic stiffness transformation factor
k_b_K_pl = 1; 	% Plastic stiffness transformation factor
% Trasnformation factors for the drop-weight
k_d_m = 1; 	% Plastic mass transformation factor
k_d_F = 1; 	% Plastic load transformation factor
k_d_K = 1; 	% Plastic stiffness transformation factor
%% MASS PROPERTIES
m_1 = 10.093; 	%[kg] mass of the drop-weight
m_2 = r_c*A_2*L_b; 	%[kg] mass of the beam
% Mass matrix
M = [m_1*k_d_m 0; 0 m_2*k_b_m_pl];
%% STIFFNESS PROPERTIES
% I_b_ii = 1.565e-6; 	% [m^4] Second moment of inertia of the beam
% 	% 	corresponding to the stiffness in state II.
% 	% 	Calculated beforehand for adjusted position of
% 	% 	reinforcement bars.
I_b_ii = 1.444e-6; 	% [m^4] Second moment of inertia of the beam
% 	corresponding to the stiffness in state II.
% 	Calculated beforehand for nominal position of
% 	reinforcement bars
K_el_1 = A_1*E_s/L_d; 	% [N/m] Elastic stiffness of the drop-weight
K_el_2 = 48*E_c*I_b_ii/L_b^3; 	% [N/m] Elastic stiffness of the beam
% Initial stiffness matrix
K_el = [K_el_1 -K_el_1;
-K_el_1 K_el_1+K_el_2];
%% MATERIAL RESPONSE
% Drop-weight
R_1 = 50000; 	% [N] Plastic resistance
u_el_1 = R_1/K_el_1; 	% [m] Limit of elastic deformation
u_rd_1 = 50; 	% [m] Limit of plastic deformation
J-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	J-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	J-2 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 328 of 333 --

% Beam
R_2_sw = r_c*9.81*A_2*L_b/2; % [N] Reduction of plastic resistance
% 	due to self-weight
R_2 = 12.138e3 - R_2_sw; 	% [N] Plastic resistance.
% 	Nominal position of the rebars.
% 	f.y = 686 MPa
R_2 = 10.737e3 - R_2_sw; 	% [N] Plastic resistance.
% 	Nominal position of the rebars.
% 	f.y = 575 MPa
%
% R_2 = 12.787e3 - R_2_sw; 	% [N] Plastic resistance.
% 	% 	Adjusted position of the rebars.
% 	% 	f.y = 686 MPa
%
% R_2 = 11.344e3 - R_2_sw; 	% [N] Plastic resistance.
% 	% 	Adjusted position of the rebars.
% 	% 	f.y = 575 MPa
u_el_2 = R_2/K_el_2; 	% [m] Limit of elastic deformation
u_rd_2 = 50; 	% [m] Limit of plastic deformation
%% DETERMINATION OF EIGENFREQUENCIES
[L,X] = eig(K_el, M); 	% "L" is a matrix containing the eigenvectors
% "X" is a matrix containing the eigenvalues
% Maximum eigenfrequency
w_max = sqrt(max(max(X)));
%% CRITICAL TIME STEP
h_crit = 2/w_max; 	% [s] Maximum admissible value
h = 0.1e-4; 	% [s] Chosen time step
t_end = 40e-3; 	% [s] End of sequence
t = linspace(0,t_end,t_end/h); 	% Time vector
if h >= h_crit
disp('ERROR, chosen time step too large')
end
%% INITIAL CONDITIONS
% Empty matrices
dofs = 2; 	% Number of degree of freedom
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-3	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-3

-- 329 of 333 --

u = zeros(dofs, length(t)); 	% Empty matrix storing displacement vectors
v = zeros(dofs, length(t)-1); 	% Velocity vectors
a = zeros(dofs, length(t)-1); 	% Acceleration vectors
% Assigning initial values
u(:,1) = [0;0]; 	% Initial Displacement
height = 5.0; 	% [m] Drop height
v_d = 9.76; 	% [m/s] Initial velocity of drop-weight
% [measured value]
% v_d = sqrt(2*9.81*height); 	% [m/s] Initial velocity of drop-weight
% 	% [theoretical value]
v(:,1) = [v_d; 0]; 	% Velocities at time t = 0
a_0 = inv(M)*(-K_el*u(:,1)); 	% Initial acceleration vector
a(:,1) = a_0; 	% Initial acceleration as calculated before
u_b0 = u(:,1)-h*v(:,1)+h^2/2*a(:,1); 	% Displacement at time step n-1
% Initial plastic deformation
u_pl_1 = 0; 	% Plastic deformation of rod
u_pl_2_pos = 0; 	% Plastic deformation of beam in compression
u_pl_2_neg = 0; 	% Plastic deformation of beam in tension
%% CENTRAL DIFFERENTIAL METHOD
m_b(1) = m_2*Kappa_mass(0);
for i =2:length(t)
du = u(1,i-1)-u(2,i-1); 	% [m] Relative displacement bewteen beam
% 	and drop-weight
u2 = u(2,i-1); 	% [m] Downwards beam displacement
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
J-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	J-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	J-4 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 330 of 333 --

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
%% CALCULATION OF ENERGY
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
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-5	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-5

-- 331 of 333 --

for i = 2:(length(t)-1)
DeltaWi(i) = 0.5*(Res(2,i-1)+Res(2,i))*(u(2,i)-u(2,i-1));
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
%% CREATING PLOTS
% Displacement vs Time plots
figure(1)
plot(t*1000,u(1,:)*1000,'LineWidth',3);
set(gca,'fontsize',16)
title('Displacement of mass 1', 'FontSize', 30)
xlabel('Time [ms]'); ylabel('Displacement [mm]');
figure(2)
plot(t*1000,u(2,:)*1000,'LineWidth',3);
set(gca,'fontsize',16)
title('Displacement of mass 2', 'FontSize', 30)
xlabel('Time [ms]'); ylabel('Displacement [mm]');
% Resistance vs Displacement
figure(3)
plot(u(2,1:length(u)-1)*1000,Res(2,:)/1000,'LineWidth',3);
set(gca,'fontsize',16)
title('Internal Resistance vs Displacement - Body 2', 'FontSize', 30)
xlabel('Displacement [mm]'); ylabel('Resistance [kN]');
figure(4)
plot(u(1,1:1500)*1000-u(2,1:1500)*1000,Res(1,1:1500)/1000,'LineWidth',3);
set(gca,'fontsize',16)
title('Internal Resistance vs Displacement - Body 1', 'FontSize', 30)
xlabel('Displacement [mm]'); ylabel('Resistance [kN]');
J-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	J-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21	J-6 , Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21

-- 332 of 333 --

% Resistance vs Time
figure(5)
plot(t(1:length(t)-1)*1000,Res(2,:)/1000,'LineWidth',3);
set(gca,'fontsize',16)
title('Internal Resistance vs Time - Body 2', 'FontSize', 30)
xlabel('Time [ms]'); ylabel('Resistance [kN]');
figure(6)
plot(t(1:1500)*1000,Res(1,1:1500)/1000,'LineWidth',3);
set(gca,'fontsize',16)
title('Internal Resistance vs Time - Body 1', 'FontSize', 30)
xlabel('Time [ms]'); ylabel('Resistance [kN]');
% Velocity vs Time
figure(7)
plot(t(1:(length(t)-1))*1000,v(1,:),'LineWidth',3);
set(gca,'fontsize',16)
title('Velocity of Body 1', 'FontSize', 30)
xlabel('Time [ms]'); ylabel('Velocity [m/s]');
figure(8)
plot(t(1:(length(t)-1))*1000,v(2,:),'LineWidth',3);
set(gca,'fontsize',16)
title('Velocity of Body 2', 'FontSize', 30)
xlabel('Time [ms]'); ylabel('Velocity [m/s]');
% Work vs Time
figure(9)
plot(t(1:(length(t)-1))*1000,We(:),'LineWidth',3);
hold on
plot(t(1:(length(t)-1))*1000,Wi(:),'LineWidth',3);
hold on
plot(t(1:(length(t)-1))*1000,Wk(:),'LineWidth',3);
hold on
plot(t(1:(length(t)-1))*1000,Wt(:),'LineWidth',3);
set(gca,'fontsize',16)
title('External Work of Body 2', 'FontSize', 30)
xlabel('Time [ms]'); ylabel('Velocity [m/s]');
height;
v_init = v(1,2);
maxdisp = max(max(u(2,:)));
u_pl = maxdisp - u_el_2;
[height v_init maxdisp u_pl]
, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-7	, Architecture and Civil Engineering, Master’s Thesis, BOMX02-17-21 J-7

-- 333 of 333 --