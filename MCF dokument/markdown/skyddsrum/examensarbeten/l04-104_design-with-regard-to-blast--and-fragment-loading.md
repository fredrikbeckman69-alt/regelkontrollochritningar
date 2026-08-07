---
title: "L04 104 Design With Regard To Blast  And Fragment Loading"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-104_design-with-regard-to-blast--and-fragment-loading.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","armering","beräkning","explosion","kontroll","tryckvåg","splitter"]
summary: "Design with Regard to Blast- and Fragment Loading Master’s Thesis in the Master’s programme Structural Engineering and Building Performance Design KARL-JOHAN EK PÄR MATTSSON Department of Civil and Environmental Engineering Division of Structural ..."
---

Design with Regard to Blast- and
Fragment Loading
Master’s Thesis in the Master’s programme Structural Engineering and Building
Performance Design
KARL-JOHAN EK
PÄR MATTSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2009
Master’s Thesis 2009:81

-- 1 of 140 --



-- 2 of 140 --

MASTER’S THESIS 2009:81
Design with Regard to Blast- and Fragment Loading
Master’s Thesis in the Master’s programme Structural Engineering and Building
Performance Design
KARL-JOHAN EK
PÄR MATTSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2009

-- 3 of 140 --

Design with Regard to Blast- and Fragment Loading
Master’s Thesis in the Master’s programme Structural Engineering and Building
Performance Design
KARL-JOHAN EK
PÄR MATTSSON
© KARL-JOHAN EK & PÄR MATTSSON, 2009
Examensarbete 2009:81
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Chalmers Reproservice /Department of Civil and Environmental Engineering
Göteborg, Sweden 2009

-- 4 of 140 --

I
Design with Regard to Blast- and Fragment Loading
Master’s Thesis in the Master’s programme Structural Engineering and Building
Performance Design
KARL-JOHAN EK
PÄR MATTSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
When a bomb detonates a blast wave is created and the case of the bomb is
fragmentized into many fragments, which are released with a very high initial
velocity. The fragmental impact is commonly considered in a simplified way, but
studies carried out shows that fragments, combined with the blast load, can seriously
damage a reinforced concrete structure if the detonation takes place close to a
building. Hence, focus in this project is to simulate the fragments and their effects in a
more advanced way and investigate how these results differ from simplified analyses.
A simply supported, reinforced concrete beam, with geometry and reinforcement
configuration corresponding to a civil defence shelter wall, is to be analysed. The
blast wave is consistently applied as an uniformly distributed load with a constant
duration and amplitude. The fragmental impact on the other hand is analysed in
various ways to see how the structural response in simplified analyses differ from
more advanced ones. The fragmental impact and penetration into the concrete is also
analysed, where the beam loses bearing capacity and mass.
To be able to analyse such a complex problem, transient, finite element analyses have
been performed in the general finite element programme ADINA. The results
obtained in these analyses have been compared to results obtained by single degree of
freedom analysis and simplified hand calculation in order to verify the FE-results.
Concerning the impact of the fragmental loads appearance, it turned out that
simplified and more advanced analyses, generates similar results. However, when the
loss of stiffness and mass, due to fragmental penetration of the beam, are taken into
account, this have significant influence on its dynamic behaviour.
Key words: Explosion, impulse load, fragment load, blast load, dynamics, single
degree of freedom system (SDOF).

-- 5 of 140 --

II
Dimensionering med Hänsyn till Stötvågs- och Splitterbelastning
Examensarbete inom masterprogrammet Konstruktion och Byggnadsteknik
KARL-JOHAN EK
PÄR MATTSSON
Institutionen för bygg- och miljöteknik
Avdelningen för Konstruktionsteknik
Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
När en bomb detonerar skapas en tryckvåg, varvid bombens mantel fragmenteras och
mängder av splitter frigörs med mycket hög begynnelsehastighet. Splittrets påverkan
på en konstruktion behandlas ofta på ett förenklat sätt men utförda studier visar att
splitter tillsammans med stötvågen påtagligt kan skada en armerad betongkonstruktion
som ligger i nära anslutning till explosionen. Fokus i detta projekt ligger därför på att
simulera splitter och dess inverkan på ett mer nyanserat sätt för att kontrollera hur
resultaten skiljer sig gentemot förenklade analyser.
En fritt upplagd, armerad betongbalk med geometri och armeringskonfiguration
motsvarande en skyddsrumsvägg analyseras. Stötvågen behandlas konsekvent som en
jämnt utbredd impulslast, med konstant varaktighet och amplitud, medan splittrets
inverkan på balken analyseras på olika sätt för att undersöka hur responsen från
förenklade analyser skiljer sig mot mer avancerade. Även splittrets anslag och
inträngning i betongen analyseras, varvid balken förlorar lastkapacitet och massa.
För att kunna analysera sådana komplexa problem har tidsberoende, finita
elementanalyser utförts i det generella finita elementprogrammet ADINA. Resultaten
från dessa analyser har jämförts med förenklade enfrihetsgradsanalyser samt
förenklade handberäkningar för att kunna verifiera resultaten.
Rörande inverkan av splitterlastens utseende visar sig förenklade och mer nyanserade
analyser ge likvärdiga resultat. När balkens förlust av styvhet och massa, i samband
med splitterinträngning, beaktas visar sig detta dock ha en betydande inverkan på
balkens dynamiska beteende.
Nyckelord: Explosion, impulslast, splitterlast, stötvågslast, dynamik, enfrihetsgrad–
system (SDOF).

-- 6 of 140 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2009:81 III
Contents
ABSTRACT I
SAMMANFATTNING II
CONTENTS III
PREFACE VII
NOTATIONS VIII
1 INTRODUCTION 1
1.1 Background 1
1.2 Aim 1
1.3 Method 1
1.4 Limitations 1
1.5 Outline of the report 2
1.6 Comments about references 2
2 BASIC THEORY 4
2.1 Outline 4
2.2 Explosions 4
2.2.1 Orientation 4
2.2.2 Blast wave 4
2.2.3 Fragments 5
2.3 Dynamic modification of concrete 11
2.4 Materials 13
2.4.1 Material responses 13
2.4.2 Theory of plasticity and plastic hinges 16
2.5 Simply supported reinforced concrete beam 18
2.5.1 Mechanical properties 18
2.5.2 Analysis of cross-sections subjected to bending 20
2.6 Load-displacement relations for simply supported beam subjected to
uniformly distributed load 25
2.7 Basic dynamics 26
2.7.1 Orientation 26
2.7.2 Force and pressure 26
2.7.3 Momentum, impulse and impulse intensity 26
2.7.4 Momentum and kinetic energy 27
2.7.5 Internal energy 28
2.7.6 The fundamental equation of motion 31
2.8 SDOF system 32
2.8.1 Orientation 32
2.8.2 Differential equation for an SDOF system 33
2.8.3 Transformation factors 34

-- 7 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
IV
2.9 The central difference method 36
3 THE STUDIED CASE 38
3.1 Orientation 38
3.2 Geometry 38
3.3 Material 40
3.4 Load 41
3.4.1 Orientation 41
3.4.2 Reference bomb 41
3.5 Blast load 42
3.6 Fragment loads 43
3.6.1 Fragmental impact on the beam 47
3.6.2 Combination of fragment and blast load 48
3.6.3 Simulation of fragments 50
3.6.4 Fragmental load angle 56
3.6.5 Fragment arrival time 57
3.6.6 Comments about load angle and arrival time 58
4 THE FE-MODEL 59
4.1 General description 59
4.2 Beam element model 60
4.2.1 Material properties 60
4.2.2 Elastic analysis 61
4.2.3 Elasto-plastic analysis 62
4.3 2D-solid element model 63
4.3.1 Element mesh and material properties 63
4.3.2 Elastic analysis 64
4.3.3 Elasto-plastic analysis 64
4.4 Simulation of removal of concrete due to fragmental impact 65
5 RESULTS 68
5.1 Orientation 68
5.2 Linear elastic analysis 68
5.2.1 Beam element model 68
5.2.2 Conclusion 75
5.3 Plastic analysis 76
5.4 Bilinear elasto-plastic analysis 77
5.4.1 Conclusion 85
5.5 SDOF results 85
5.6 2-D solid model 87
5.6.1 Comparison with beam element 87
5.6.2 Results when removing concrete due to the fragmental impact 89

-- 8 of 140 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2009:81 V
6 CONCLUSIONS 91
7 REFERENCES 92
APPENDIX A INPUT DATA IN ANALYSIS 93
APPENDIX B.1 CALCULATION OF CRACKING MOMENT 94
APPENDIX B.2 CALCULATION OF YIELDING MOMENT 95
APPENDIX B.3 CALCULATION OF ULTIMATE MOMENT 96
APPENDIX C LOAD-DISPLACEMENT RELATION 98
APPENDIX D MATERIAL AND CROSS SECTION CONSTANTS 99
APPENDIX E HAND CALCULATION FOR DISPLACEMENTS 101
APPENDIX F ERRORS IN ADINA WHEN USING EXPLICIT SOLVER 104
APPENDIX G DIFFERENT RESULTS DUE TO NUMBER OF ELEMENTS 106
APPENDIX H MOMENT AND REACTION FORCES 108
APPENDIX I HAND CALCULATION WHEN MASS IS REDUCED 113
APPENDIX J METHOD TO DERIVE TRANSFORMATION FACTORS 116
APPENDIX K SDOF - TRANSITION FROM ELASTIC TO PLASTIC 117
APPENDIX L INDATA FILE FOR ADINA 120

-- 9 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
VI

-- 10 of 140 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2009:81 VII
Preface
In this Master’s Thesis, blast- and fragmental load obtained by an explosion is
analysed in accordance to a reference case from Räddningsverket (2006). Focus has
been on the fragment load and how it should be considered. The project has been
carried out in cooperation between the Division of Structural Engineering, Concrete
Structures, at Chalmers University of Technology and Reinertsen Sverige AB. We
had the opportunity to work at their office in Göteborg. It is a continuation of a
previous Master’s Thesis performed by Ulrika Nyström, 2006. The major part of this
thesis have been carried out during the period from February to October 2009 and the
report was finalized in August 2010.
Morgan Johansson, PhD from Reinertsen Sverige AB has been our supervisor in this
project and we gratefully thank him for his commitment and engagement during the
project. We would also like to thank the rest of the staff at Reinertsen for contributing
to a nice working climate and for answering many questions during the project.
Our opponent, Jonas Ekström, has throughout the project contributed and given us
good ideas and we would like to thank him. We would also like to thank Patrik
Johansson and Håkan Lantz, who also did their Master’s Thesis at Reinertsen, for
great support and help during the project.
Finally, we would like to thank our adorable girlfriends for their support.
Göteborg August 2010
Karl-Johan Ek & Pär Mattsson

-- 11 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
VIII
Notations
Roman upper case letters
ᠧ Area
ᠧ【 Equivalent area in state 1
ᠧ【【 Equivalent area in state 2
ᠧ〰〰 Area of concrete
ᠧう Area of reinforcement in tension zone
ᠧう䖓 Area of reinforcement in compression zone
ᠨ Width of cross section
ᠱ Young’s modulus
ᠱ〰぀ Young’s modulus for concrete, mean value
ᠱ〰.〳〶〰ぇ Fictive Young’s modulus for the beam, concerning state 1 and 2
ᠱう Young’s modulus for steel
ᠲ Force
ᠲ〰 Concrete force
ᠲ〰ぅ Load when first crack appears
ᠲ〲 Equivalent load
ᠲぃ〹 External load corresponding to the plastic capacity
ᠲうぃ〹 Load when the reinforcement starts to yield
ᠲう Steel force in tensioned reinforcement bars
ᠲう䖓 Steel force in compressed reinforcement bars
ᠹ〙 Internal resisting moment
ᠴ Height of cross section
ᠵ Impulse, moment of inertia
ᠵ【 Moment of inertia for state 1
ᠵ【【 Moment of inertia for state 2
ᠵ【【【 Moment of inertia for state 3
ᠷ Stiffness
ᠷ䖓 Stiffness in the elasto-plastic range
ᠷ【 Stiffness in state 1
ᠷ【【 Stiffness in state 2
ᠸ Length
ᠹ Mass, Moment
ᠹ。 Fragment distribution factor
ᠹ〲 Equivalent mass
ᠹ〵 Bomb shell mass
ᠹ〙 Internal resisting moment
ᠹげ Moment when the reinforcement starts to yield
ᡂ Pressure
ᡂ⡸ Positive peak pressure
ᡂ⡹ Negative peak pressure
ᡃ Load, mass of explosive
ᡄ Internal resisting force, distance from the detonation to the structure under
consideration
ᡄ〲 Equivalent resisting force
ᡄ〔 Maximum internal resisting force
ᡄうぇ〨ぇ Internal static force

-- 12 of 140 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2009:81 IX
ᡄ〱げぁ Internal dynamic force
ᡆ⡸ Duration of positive phase
ᡆ⡹ Duration of negative phase
ᡉ〲 External energy
ᡉ〶 Internal energy
ᡉ〸 Kinetic energy
ᡒ Flexural resistance
ᡒ〲〹 Elastic flexural resistance
ᡒぃ〹 Plastic flexural resistance
Roman lower case letters
ᡓ Acceleration
ᡕ Damping constant
ᡖ Effective height of cross section
ᡖ䖓 Distance between the top reinforcement and the compressed edge
ᡗ Height of the elastic zone of the cross-section
ᡘ〰〰 Compressive strength for concrete
ᡘ〰げ Yield stress for concrete
ᡘ〰ぇ぀ Stress for which concrete cracks
ᡘげ〸 Characteristic yield stress for reinforcement
ᡡ Impulse intensity
ᡡ⡸ Positive impulse intensity
ᡡ⡹ Negative impulse intensity
ᡥ Mass
ᡥ〶 Fragment mass
ᡦ Number of fragments
ᡨ Momentum
ᡨ⡨ Atmospheric pressure
ᡩ Distributed load
ᡲ Time
ᡲ〨 Arrival time for the pressure wave
∆ᡲ Time increment
ᡳ Displacement
ᡳ〰ぅ Displacement when first crack appears
ᡳ〲〹 Elastic displacement
ᡳぃ〹 Displacement corresponding to the ultimate load
ᡳうぃ〹 Displacement when the reinforcement starts to yield
ᡳ䙢 Displacement velocity
ᡳ䙣 Acceleration
ᡴ Velocity
ᡴ⡨ Initial velocity
ᡶ Coordinate, height of compression zone
ᡶ〴〰 Centre of gravity
ᡷ Coordinate
ᡸ Coordinate, distance from neutral axis to a certain level of the cross-
section
ᡸう Distance between reinforcement in tensile zone and the neutral axis

-- 13 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
X
ᡸう䖓 Distance between reinforcement in compressive zone and the neutral axis
Greek lower case letters
Relation between the Young’s modulus between concrete and
reinforcement, parameter considering the shape of the blast wave
〰 Stress block factor
‐〰 Stress block factor
– Strain
–䙢 Strain rate
–〰 Strain in concrete
–〰⡩ Strain in compressed concrete
–〰⡰ Strain in tensioned concrete
–〰え Ultimate compressive strain in concrete
–う Steel strain
–う䖓 Steel strain in compressed reinforcement
–うげ Yield strain in steel
∆– Difference in strain
‑ Reduction factor for the elasticity of modulus
‘〒 Transformation factor for the internal force
‘〒〇 Combined transformation factor for the internal force and external load
‘〔 Transformation factor for the mass
‘〔〇 Combined transformation factor for the mass and external load
‘〇 Transformation factor for the external load
‥ Density
φ Diameter
… Stress
…〰 Concrete stress
…〰⡩ Concrete stress in compressive zone
…〰⡰ Concrete stress in tensile zone
…〳〶〰ぇ Stress when the beam goes from linear elastic to ideally plastic response
…う Steel stress
…う䖓 Steel stress in compressed reinforcement
…げ Yield stress
″ Angular frequency

-- 14 of 140 --



-- 15 of 140 --



-- 16 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 1
1 Introduction
1.1 Background
Explosives are used for many different purposes in today’s society. In the building
industry explosives are used as an efficient method to demolish structures and to make
space for roads and railways. Explosives play, in this context, an important role in
order to improve the infrastructure.
Explosions can, on the other hand, also be a threat for both society and for human
beings and explosives are unavoidable tools during war and terrorist attacks. An
explosion can also occur by accident and cause large damage. These kinds of actions
may be devastating and there is a need to improve the knowledge about explosions in
order to make society more resistant against such events.
Swedish Rescue Service Agencies (Räddningsverket) has for several years run
projects concerning explosions and their impacts. In previous projects most of the
focus has been either on the blast wave or on fragment loading, while the combined
load part from these two often has been either neglected or simplified approximately.
However, it has been discovered by recent research (Leppänen, 2009 and Nyström,
2008) that the fragmental load plays a substantial part of the total damage obtained by
the blast- and fragment loads.
1.2 Aim
The main goal for this work is to increase the knowledge about how explosions affect
concrete structures. A structure subjected to combined blast load and impact loading
is studied, but focus will be on how fragments from a bomb should be considered
when a structure is subjected to an explosion. In this thesis different ways to apply the
fragmental load are studied and should result in recommendations and guidelines
about how fragments should be taken into account.
1.3 Method
Literature studies have been done in order to obtain knowledge and understanding
how structures behave when they are exposed to dynamic loadings. The studied case
is taken from the Swedish shelter regulations, Räddningsverket (2006), and is
analysed using a SDOF system (single degree of freedom) and hand calculations and
compared to the “true” behaviour which is obtained by a commercial finite element
software.
1.4 Limitations
Concrete is a complex material, which requires advanced calculations, and hence
simplified material behaviors have been used in this project. These are linear elastic,
ideally plastic and bi-linear elasto-plastic material properties. Material effects such as
shrinkage, creep, temperature and the dead weight is not considered in the concrete
calculations.

-- 17 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
2
A reference case from Räddningsverket (2006) is used in this thesis where a civil
shelter is exposed to impact from an explosion. The geometry and material
requirements are chosen in accordance to the regulations stated in
Räddningsverket (2006).
The fragmental impact which occurs during the penetration phase will not be analysed
in this project, instead an approximated method used, which simulates the removal of
concrete, is used.
1.5 Outline of the report
The outline of the report can be divided into basic theory (Chapter 2), conditions and
choices (Chapter 3), FE-model (Chapter 4), Results (Chapter 5) and conclusions
(Chapter 6).
Chapter 2 is an introduction to explosions and in a comprehensive way describes the
loads and their effects. It also describes important parts in a general way for a good
understanding in the rest of the report, such as: materials, basic concrete material
properties and how to analyse it, basic dynamics, and single degree of freedom-
system.
Chapter 3 can be seen as a continuation of chapter 2, the conditions and choices for
further analysis is presented. A more careful description of the loads is presented and
also how the subdivision of the fragment loads is performed.
Chapter 4 describes the FE models, the input data and how the models are built up.
Chapter 5 presents the results from the analysis, for the linear elastic, plastic as well as
the elasto-plastic response. Displacements are mainly presented and compared to the
results obtained by SDOF and simplified hand calculations. The results from the
removal of material due to the loads are also presented in chapter 5. After each section
in this chapter, a conclusion regarding the result is presented.
Finally, Chapter 6 is a discussion where the results are concluded and the authors give
their own reflections and recommendations about how the fragmental load should be
considered.
1.6 Comments about references
Large parts of the theories presented in this report are based on, and sometimes
directly collected from other reports. This means that the reader is sometimes not
referred to the main source but referred to a report where material from the main
source is used and where the reference to the main source can be found. The theory
presented in this report is mainly based on the following reports; Johansson and Laine
(2009), Leppänen (2009), Nyström (2006) and Nyström (2008).
Material has also been collected from Räddningsverket (2006), in swedish:
Myndigheten för samhällsskydd och beredskap, denoted as MSB in this report. This is
an authority responsible for unifying, coordinating, and supportive tasks prior to,
during and after emergencies in Sweden. This authority was formed from three
existing national government authorities on the 1st January 2009. Former reports
might refer to the Swedish Rescue Services Agencies which was one out of the three

-- 18 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 3
former authorities. MSB has published the Swedish Shelter Regulation (SR) which
will be an important reference in this work.

-- 19 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
4
2 Basic theory
2.1 Outline
A structure subjected to an explosion will have a complex behaviour. Good
knowledge about the properties of the load, the material response, the dynamical
behaviour of the structure and analytical tools is necessary in order to analyse the
response of the structure. Basic theory within these subjects is presented in this
chapter.
2.2 Explosions
2.2.1 Orientation
A bomb consists of a charge with a certain amount of explosives and a shell with a
certain mass. A bomb can be seen as stored potential energy which will be
transformed into mechanical work when the bomb detonates. The impact on a
structure from an explosion can be divided into impact from the blast wave and
impact from fragments which are released when the bomb case cracks.
2.2.2 Blast wave
When the charge detonates, a blast wave with high pressure and temperature will
spread out from the centre of the detonation, see Figure 2.1. The pressure will
decrease with increasing distance from the detonation centre and the pressure front,
referred to as the blast wave, will travel in supersonic speed. A blast wave consists of
a positive and a negative phase and an idealized wave is illustrated in Figure 2.2. As
can be seen, the positive phase is followed by a negative one.
Figure 2.1 Schematic figure for detonation in air .
Centre of detonation
The pressure and temperature
in the blast front decreases with
increased distance to the centre
of detonation

-- 20 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 5
Figure 2.2 Idealized blast wave
The duration of the shock wave is very short and the load is applied very sudden. The
loading velocity for a shock wave can be compared to other types of loads, see
Figure 2.3. The reference case is a static load which is equal to 1 and for example, the
creep is 100-1000 times smaller and a blast load is up to 100 million times larger.
1	0.1	0.01	0.001 	10 100 1000 104 105 106 107 108
Earthquake	Statical	Creep 	Impact Blast load
Figure 2.3 Difference in loading velocity between different types of loading, the
values are obtained in relation to static load. From Räddningsverket
(2006).
2.2.3 Fragments
2.2.3.1 Fragmentation
In addition to the blast wave, fragments will be released during the explosion. The
appearance of the fragmentation process is directly affected by the properties of the
bomb. This is why the properties and geometry of the bomb has to be known in order
to predict the fragmentation.
When the bomb detonates, very high pressure is generated inside the bomb. The case
will expand and tensile stresses are generated causing the envelope to crack into small
fragments, see Figure 2.4.
Time
Positive phase
Negative phase
Pressure
Blast front

-- 21 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
6
Figure 2.4 Fragmentation process of the case, Leppänen (2009).
A bomb consists of a charge with a certain amount of explosives and a case, see
Figure 2.5. The case consists of a nose, a tail and an envelope. The distance from the
surface of the bomb to the outer parts of the charge is normally much thicker in the
nose and the tail compared to the envelope, something that also affect the
fragmentation process.
The fragments will be thrown out at high velocities in directions indicated by the light
grey segments in Figure 2.5. The nose and tail will be separated from the bomb and
thrown out in opposite directions as indicated by the darker arrows in Figure 2.5.
r/r0 = 1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
skjuvspricka
dragspricka
bomb
Tensile crack
Bomb
Shear crack

-- 22 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 7
Figure 2.5 Schematic geometry of a bomb with the charge and the parts of the case
with direction for how these parts behave when the charge detonates.
A structure that is hit by fragments will be exposed to an impact load that not only
will increase the load on the structure but also locally damage the structure. How the
structure is damaged depends on the magnitude of the fragmental impact and the
properties of the structure itself. Three phenomenon can occur; penetration,
perforation and scabbing. These will be explained in the following sections with a
schematic description in Figure 2.6.
Figure 2.6 Different fragmental impacts, Leppänen (2009).
kraterbildning
inträngning
utstötning
Nose
Envelope Envelope
Charge
Tail
Crater formation
Scabbing
Penetration

-- 23 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
8
2.2.3.2 Penetration
A fragment that hits a concrete structure will penetrate into the structure. The concrete
close to the surface will crush and a crater is formed i.e. spalling. In regions close to
the crater the concrete will substantially crack and the effective height of the structural
part will decrease, resulting in a reduced bearing capacity for the structural part. The
reinforcement can also be cut off or get damaged, and the bond between concrete and
reinforcement may decrease due to vibrations in the concrete during the penetration.
The penetration depth can, according to Leppänen (2009) be approximated as:
ᡶ 㐄 26.9 · ᡥ〳
⡨.⡱⡵ · ᡴ〳
⡨.⡷
ᡘ〰⡨.⡰⡳ for ᡶ 㐉 117 · ᡥ〳
⡩/⡱
and (2.1)
ᡶ 㐄 4.35 · ᡥ〳
⡨.⡲ · ᡴ〳
⡩.⡶
ᡘ〰⡨.⡳ ㎗ 40.6 · ᡥ〳
⡩/⡱ for ᡶ 㐈 117 · ᡥ〳
⡩/⡱
where mf is the mass of the fragment in [kg], vf is the velocity of the fragment when it
hits the structure in [m/s] and fc is the compressive strength of concrete in [Pa].
Penetration depths as function of the velocity for fragments with different mass are
presented in Figure 2.7.
Figure 2.7 Penetration depths as a function of velocity for different fragment
masses.
0
50
100
150
200
250
300
350
400
450
500
0 250 500 750 1000 1250 1500 1750 2000
Penetration depth [mm]
Fragment velocity [m/s]
300 gram
200 gram
100 gram
50 gram
30 gram
10 gram
5 gram
1 gram

-- 24 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 9
2.2.3.3 Perforation
Perforation is the same as penetration with the difference that the fragment penetrates
through the beam. As a rule of thumb Leppänen (2009) means that, if 70 % of the
concrete member is penetrated, perforation will occur.
2.2.3.4 Scabbing
When the fragment hits a concrete structure, extruding at the back side may occur, so
called scabbing. This happens because the pressure wave in the concrete created by
the fragment impact will be transformed into a tension wave at the back side of the
beam, causing the concrete to crack. This is a phenomenon also influenced by the
blast wave.
Leppänen (2009) refers to Krauthammer, who means that as a rule of thumb can be
used what concerns scabbing, which follows: if fragments are penetrating 50 % or
more of the members’ thickness, scabbing will occur.
2.2.3.5 Fragmental distribution
The complexity of the geometrical properties of a bomb results in a non uniformly
distribution of fragment when the charge detonates. As mentioned in section 2.2.3.1,
the tail and the nose will remain fairly intact and thrown out as large masses in
opposite directions, see Figure 2.8. The small fragments released from the envelope
will be thrown out as a relatively concentrated swarm. According to Leppänen (2009)
it is a good estimation to say that 60 percent of the total mass of the case will be
thrown out as small fragments within an angle of 40 degrees as shown in Figure 2.8,
which shows a simplified bomb compared to Figure 2.5.
The fragmental impact from a bomb on a structure will be very different depending on
the position of the bomb when it detonates, i.e. if the structure is exposed to the small
fragments within the swarm or for the large fragments made up of the nose and tail.
Charge
Case
40°
Tail direction
Nose direction

-- 25 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
10
Figure 2.8 Simplified figure of a bomb with fragmental distribution after
detonation.
2.2.3.6 Fragment velocity
The initial velocity of a fragment directly after the fragmentation is a function of the
amount of explosives inside the bomb and the mass of the case and can, according to
Leppänen (2009), be calculated as:
ᡴ⡨ 㐄 2400 · 㐵1 ㎘ ᡗ⡹⡰·〘/〔㊃ 㐹 (2.2)
where Q is the mass of the explosives and Mh is the mass of the bomb shell.
The velocity of a fragment is decreased by the air resistance as a function of the
distance from the centre of the detonation and the mass of the fragment itself. The
velocity of a fragment at a certain distance from the centre of the detonation is,
according to Leppänen (2009), defined as:
ᡴ〶䙦ぅ,぀㊄䙧 㐄 ᡴ⡨ · ᡗ⡹⡨,⡨⡲⡳⡴·〙/ 㒓぀㊄
ㄙ (2.3)
where R is the distance from the centre of the detonation and ᡥ〶 is the mass of the
fragment. Fragment velocities as function of fragment mass at a distance of 5 meters
are presented in Figure 2.9.
Figure 2.9 Relation between striking velocities and mass for a distance R=5 m,
initial velocity of 1950 m/s and 125 kg TNT.
It can be observed that fragments with larger mass will have higher velocity at a
certain distance than fragment with smaller mass. This is due to that the air resistance
can decelerate a lighter fragment more efficiently. The effect is most obvious when
the fragmental weight is less than about 5 gram.
0
500
1 000
1 500
2 000
2 500
0 10 20 30 40 50
Striking velocity [m/s]
Mass of fragment [g]

-- 26 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 11
2.2.3.7 Fragment mass distribution
When the bomb envelope cracks, fragments with different mass (i.e size since the
envelope consists of homogenous material) are released. The mass distribution of
these fragments is different for different kinds of bombs.
Leppänen (2009) uses the following empirical expression to calculate the mass
distribution:
ᡦ䙦぀㊔䙧 㐄 ᠹ〵
2 · ᠹ。
ᡗ⡹㒕぀㊔
〔㉐ (2.4)
where ᡦ䙦぀㊔䙧 is the number of fragments with a mass larger than ms, Mh is the total
mass of the case and MA is a fragment distribution factor depending on the type of
bomb.
2.3 Dynamic modification of concrete
A concrete structure exposed to dynamic load behaves different compared to a
structure exposed to static load, especially for an intense impulse load with very short
duration. This can partly be described by the structural response which behaves
differently due to the time effects and also the material properties changes
substantially.
The strain velocity –䙢 describes how fast the material deforms and is defined as the
strain per unit time:
–䙢 㐄 ∆–
∆ᡲ
(2-5)
The faster the load is applied to the structure, the higher the strain rate will be. In
experimental tests it has been discovered that for increased strain rates the dynamic
magnification factor, defined as the relation between the dynamic and the static
strength, increases for concrete in both compression and tension. The dynamic
magnification factors are presented in Figure 2.10 and Figure 2.12 for compression
and tension respectively with varying strain velocities.

-- 27 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
12
Dynamic magnification factor
10-8 10-7 10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain velocity
2.5
2.0
0.5
1.5
1.0
Figure 2.10 Relation between dynamic magnification factor and strain velocity for
compressed concrete. Räddningsverket (2006).
Figure 2.11 Relation between dynamic magnification factor and strain velocity for
tensioned concrete. Räddningsverket (2006).
The behaviour can be explained by study the crack paths when the material cracks,
see Figure 2.12. When a concrete structure is exposed to a static load, the material
will find the most energy efficient way to reach failure. Since the aggregates are
stronger than the paste, in normal strength, the crack will go through the paste and
around the aggregate to find “the weakest way” when static loading is applied. For a
dynamic load with short duration the material will find the fastest way to reach
failure. The crack will now go straight through the paste and the aggregate. More
energy is consumed in the latter case and this is one reason for an increased resistance
can be assumed for a dynamic load with short duration.
0
1
2
3
4
5
6
7
8
Strain velocity
Dynamic magnification factor
10 -6 10-5 10 -4 10 -3 10 -2 10 -1 10 0 10 1 10 2 10 3

-- 28 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 13
Figure 2.12 Principle crack paths for static and dynamic loads respectively. Based
on Räddningsverket (2006).
A concrete beam subjected to a dynamic load will behave different compared to a
static case. When the load is applied very fast there can be local failures in the beam
before other parts of the beam and the supports even are aware of the load. This can
be explained by that it takes a certain time for the information to be spread out along
the beam. The velocity for which information is spread in concrete is approximately
3500 m/s. Hence, for a beam with a length of 2.7 m it will take 2.7/(2·3500) ≈ 0.39 ms
for the information of a load acting in the mid section to reach the support. Hence, it
will take a total of 0.78 ms for the information to go to the support and back to the
loaded midsection again. The phenomenon is illustrated in Figure 2.13 where a typical
example of direct shear failure is shown.
Figure 2.13 Principle initial behaviour of beam subjected to a dynamic uniformly
distributes load.
2.4 Materials
2.4.1 Material responses
The response of a structural system when subjected to a certain load depends on the
material responses in the structural parts and the boundary conditions between the
parts. This is why it is important to predict the material response in a structural part in
order to predict the global response of the structural system.
The true response of a building material exposed to a load is often complex with both
linear and non-linear stages. It is, however, possible to simplify the behaviour in a
satisfactory way. Ideally elastic, plastic or elasto-plastic responses are examples of
Zones with risk of cracking
Microcracks
Macrocracks
Paste
Ballast
Static Dynamic

-- 29 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
14
simplifications of a complex material response. These three responses will be
explained in the following sections. Of these simplifications, the bilinear elasto-plastic
is the most realistic response of a reinforced concrete structure and closest to the true
behaviour, but the elastic and plastic are also analysed in order to increase the
understanding.
2.4.1.1 Linear elastic material
The relation between stress and strain in the linear elastic material response can be
seen in Figure 2.14. The stress, σ, is linearly proportional to the strain, ε, and the curve
originates from Hook’s law:
where E is the Young’s modulus.
When the load is removed for a structure with linear elastic response the member will
go back to its original position and the material will not gain any permanent
deformations.
Figure 2.14 Linear elastic material response, where (a) is the material response and
(b) the structural response.
Since the material properties are linear, the internal resisting force will also behave
linearly. That means the resisting force, R, which the structure gains when it deflects,
is linearly proportional to the deflection, u, i.e.:
ᡄ 㐄 ᠷ · ᡳ (2-7)
where K is the system’s stiffness.
2.4.1.2 Ideal plastic material
The relation between stress and strain in the ideal plastic material response can be
seen in Figure 2.15. The body will stay undeformed as long as the applied stress is
lower than the yield stress, σy. Once the yield stress is reached, though, the strain will
increase without increased stress.
… 㐄 ᠱ · – (2-6)
σ
ε
ε
E
u
ε
R
K
(a) (b)

-- 30 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 15
Figure 2.15 Ideal plastic material response, where (a) is the material response and
(b) the structural response.
The internal resisting force, R, for a body with plastic material response that is
exposed to a load, F, can be expressed as:
ᡄ 㐄 ᠲ for ᠲ 㐇 ᡄ぀ i.e. ᡳ 㐄 0 (2-8)
ᡄ 㐄 ᡄ぀ for ᠲ 㐐 ᡄ぀ i.e. ᡳ 㐅 0
where Rm is the maximum internal force.
2.4.1.3 Bilinear elasto-plastic material
The bilinear elasto-plastic material response is a combination of the linear elastic and
plastic response and is equal to the linear elastic response until the material/materials
yields. As can be seen in Figure 2.17 the material response will be plastic after
yielding is initiated. The deformation after yielding is unlimited assuming ideal plastic
material behavior. When the structure is unloaded after the yield stress is passed, the
response will follow the linear elastic stiffness as shown in Figure 2.17.
Figure 2.16 Bilinear elasto-plastic material response where (a) is the material
response and (b) the structural response.
σ
σ
ε
ε
σy
ε
ε
Rm
u
ε
R
R
u
ε
Rm
(a) (b)
(b)	(a)
Unloading
and reloading
Unloading
and reloading
σy

-- 31 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
16
In the plastic response the structure will, if passing the yield strength, gain permanent
deformations and also consume much more energy compared to the linear elastic
response for the same load.
The expression for the internal force needs to be divided into two intervals, one for
the elastic part and another one for the plastic part, see equations (2-9).
ᡄ 㐄 ᠷ · ᡳ For ᠲ䙦ᡲ䙧 㐇 ᡄ぀ (2-9)
ᡄ 㐄 ᡄ぀ For ᡄ぀ 㐉 ᠲ䙦ᡲ䙧
where K is the stiffness of the systems and Rm is the maximum value of the resisting
force.
2.4.2 Theory of plasticity and plastic hinges
A beam with elasto-plastic material response that is exposed to a bending moment
will start to yield when the moment give rise to stress in the outer fibres in the most
critical section that is equal to the yielding stress of the material. The material will
have elastic response until yielding is reached. As can be seen in Figure 2.17a the
stress distribution will be linearly distributed over the height of the cross section as
long as the stress is equal to or less than the yielding stress in the outer fibres. When
the moment increases further, more fibres has to yield in the cross-section in order to
increase the internal resisting moment, see Figure 2.17b. When all fibres over the
height of the cross section have reach the yielding stress, see Figure 2.17c, the
maximal internal moment is reached, the plastic moment.

-- 32 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 17
Figure 2.17 Stress and strain distribution for beam subjected to pure bending when
a) yielding starts in the outer, most stressed fibres, b) parts of the cross
section has yielded and c) the whole section has yielded.
The internal resisting moment can be calculated as:
ᠹ〙 㐄 ᡒ · …げ (2-10)
where Z is the flexural resistance and σy is the yield stress.
The flexural resistance can for a partly plastic section be calculated according to
equation (2-11) and Figure 2.18.
ᡒ 㐄 ᠨ · 䙸ᠴ⡰
4 ㎘ ᡗ⡰
12䙹 (2-11)
ε
ε
ε
ε
∞ ε
ε ∞
σy
σy
σy
σy
σy
σy
(a)
(c)
(b)

-- 33 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
18
Figure 2.18 Stress distribution when the cross section goes from elastic to fully
plastic.
When the material starts to yield, Figure 2.17a, the stress distribution is equal to the
elastic stress distribution and the flexural resistance is:
ᡒ〲〹 㐄 ᠨ · 䙸ᠴ⡰
4 ㎘ ᠴ⡰
12䙹 㐄 ᠨᠴ⡰
6 (2-12)
The flexural resistance for a fully plastic section, Figure 2.17c, is:
ᡒぃ〹 㐄 ᠨᠴ⡰
4 (2-13)
When the beam reaches its fully plastic capacity in the most stressed section, the
majority of the deformations will occur in this region, which will generate a large
plastic rotation. This rotation will be rather concentrated, which makes it possible to
assume that all the deformation takes place in this region. A small, deformable
element over which all the deformations occurs is called a plastic hinge and for a
simply supported beam a failure mechanism is formed when one plastic hinge is
created in the most critical section, i.e. the mid section, see Figure 2.19.
Figure 2.19 Plastic hinge for a simply supported beam.
2.5 Simply supported reinforced concrete beam
2.5.1 Mechanical properties
A simply supported, reinforced concrete beam will have different behaviour for
different load magnitudes. The stiffness of the beam for a certain load magnitude will
be strongly influenced by the material properties of concrete and steel and the
geometrical properties of the cross section. Three different states: uncracked, cracked
and failure, can be distinguished for the beam. The behaviour of a reinforced concrete
beam can be described by the load versus displacement relation shown in Figure 2.20
with its various states.
M M
e/2
e/2 H
+σy
B
z
y
-σy
Plastic hinge

-- 34 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 19
As long as the beam is uncracked, i.e. the tensile stress in the concrete is lower than
the tensile strength, the bending stiffness of the beam is high and the reinforcement
has small influence on the member’s stiffness. The displacement will increase linearly
for an increased load and the beam is said to be in state I.
The concrete cracks when the tensile stress in the most critical section reaches the
tensile strength for concrete. Tensile forces will now be carried by the reinforcement
and the stiffness in the cracked sections will decrease. When the load increases, more
and more sections will crack but the displacement will still increase linearly for
increased load. The beam is said to be in state II.
When the load is further increased, the tensile stress in the reinforcement will finally
reach the yielding stress. The beam will now get a plastic behaviour and the
displacements increases for almost constant load amplitude. A small increase of the
load is possible due to strain hardening in the reinforcement and/or increased internal
lever arm due to reduced height of the compression zone. Either, the compressive
stress in the concrete will exceed the maximum capacity and the concrete will get
crushed in compression or the tensile strength in the reinforcement is passed and a
tensile rapture occurs in the beam. The beam is said to be in state III.
Finally, the beam cannot endure the load and there will be a flexural failure. The
failure can be either ductile or brittle depending on the relation between the quality
and arrangement of reinforcement and the quality of the concrete.
Displacement, u
Load, q
Concrete
cracks
(state I)
Plastic
behaviour in
concrete/
reinforcement
(state II)
Strain hardening,
maximum capacity
is achived
Ductile
behaviour
Brittle
behaviour
u
q
Ultimate load
(state III)
Figure 2.20 Schematic figure of the response of a reinforced concrete beam with
ductile as well as brittle behaviour, based on Johansson and Laine,
(2008).
The load versus displacement relation in Figure 2.20 may be simplified in order to
simplify the calculations. Figure 2.21b shows a common choice of a simplified tri-
linear load versus displacement relation. Fcr is the load for when cracking occurs and
ucr the corresponding displacement and Fpl is the value for the load when the ultimate
capacity of the concrete is reached and upl the corresponding displacement. The curve
can be even more simplified by a bi-linear load versus displacement curve, see
Figure 2.21a. Such a simplification is possible to do when the displacements are
known to be large. The area under the load-displacement curve can be seen as

-- 35 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
20
consumed energy while the beam deflects and the difference in consumed energy
between the tri-linear the bi-linear curve will be relatively small when the
displacements are relatively large. In Nyström (2006), it is stated that the effect of
using a tri-linear material response compared to a bilinear response is very small and
that is also why the bilinear material response is adopted in this thesis.
Figure 2.21 Simplified load versus displacement relations; a) common choice of
simplified load versus displacement curve, b) load versus displacement
curve used in this report.
2.5.2 Analysis of cross-sections subjected to bending
2.5.2.1 Orientation
Analysis of a reinforced concrete section has to be performed for each state since the
behaviour of the cross section changes when the concrete cracks and when the
reinforcement yields. Assumptions and theories for analysis in each state are
presented in the following sections.
2.5.2.2 Assumptions
The following assumption has been made in order to calculate the response for a cross
section:
• The section is assumed to be subjected to pure bending which means that no
axial force is present.
• The strain distribution is assumed to be linearly distributed over the cross-
section with full interaction between concrete and steel.
• Concrete in tension will be neglected for a cracked section even if the concrete
can carry a small part of the tensile forces.
• It is assumed that the steel will yield before the ultimate capacity of the
concrete in the compressed edge is reached.
• In state I and state II linear elastic response is assumed for both steel and
concrete:
…〰 㐄 ᠱ〰぀ · –〰 ( 2-14)
…う 㐄 ᠱう · –う ( 2-15)
Failure
First crack occurs
K´
Fpl
Fcr
KI
KII
F
upl u upl
u
F
Fpl
ucr
(a) (b)

-- 36 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 21
2.5.2.3 Reinforced cross section in state I
Figure 2.22 shows a double symmetric cross section in state I subjected to pure
bending. The centre of gravity will coincide with the neutral axis (where the normal
stress is zero). The tensioned reinforcement is placed in the tensile zone at a distance
zs from the neutral axis.
ᡸう 㐄 ᡖ ㎘ ᡶ〴〰 ( 2-16)
The compressed reinforcement is placed in the compressed zone at a distance z’s from
the neutral axis.
ᡸう
䖓 㐄 ᡖ䖓 ㎘ ᡶ〴〰 ( 2-17)
Figure 2.22 Double symmetric cross section in state I with strain distribution,
subjected to pure bending.
The moment of inertia for a cross section in state I can be calculated by neglecting the
relatively small contribution from the reinforcement:
ᠵ【 㐄 ᡔᡠ⡱
12 (2-18)
The stress in the concrete at a certain level z is calculated as:
…〰䙦ᡸ䙧 㐄 ᠹ
ᠵ【
ᡸ (2-19)
The stress in the steel is calculated as:
…う 㐄 · …〰䙦ᡸう䙧 (2-20)
…う
䖓 㐄 · …〰䙦ᡸう
䖓䙧 (2-21)
where α is the ratio between the Young’s modulus of steel and concrete:
M
xgc
d’
d
z
Center of
gravity
(CG)
εc2
εc1
εs’
εs
b
h
As’
As

-- 37 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
22
㐄 ᠱう
ᠱ〰
(2-22)
The section will start to crack when the stress in the most tensioned edge reaches the
concrete tensile strength, fct, and the moment for which cracking occurs can now be
calculated by rearranging the terms in equation (2-19).
ᠹ〰ぅ 㐄 ᡘ〰ぇ · ᠵ【
ᡠ ㎘ ᡶ〰〴
(2-23)
2.5.2.4 Reinforced cross section in state II
In state II the section is assumed to be cracked and concrete in tension is neglected,
see Figure 2.23.
Figure 2.23 Double symmetric cross section in state II with strain distribution,
subjected to pure bending.
Calculations in state II is often simplified by replacing the steel and concrete with an
equivalent cross section. The expression of the equivalent area for a double symmetric
cross-section in state II is written as:
ᠧ【【 㐄 ᠧ〰〰 ㎗ 䙦 ㎘ 1䙧ᠧう
䖓 ㎗ · ᠧう (2-24)
where Acc is the area for the compressed zone, i.e.
ᠧ〰〰 㐄 ᡔ · ᡶ (2-25)
For a cross section subjected to pure bending, i.e. no normal forces, the height x of the
compressed zone will coincide with the centre of gravity of the transformed cross
section, i.e.
ᡶ 㐄 ᡶ〄〈 (2-26)
The expression for the centre of gravity can be written by considering an equilibrium
condition as:
ᡶ〄〈 㐄 ᡔᡶ ᡶ
2 ㎗ 䙦 ㎘ 1䙧ᠧう
䖓 ᡖ䖓 ㎗ ᠧうᡖ
ᠧ【【
(2-27)
εc2
εs
εs’
εc1
x
M
σc2
As’
z
σc1
As
Acc
Fictive concrete stress
…〰䙦ᡸう䙧 㐄 …う
䖓/
…〰䙦ᡸ䙧 㐄 ᠱ〰 –〰䙦ᡸ䙧
…〰䙦ᡸう䙧 㐄 …う/

-- 38 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 23
The expression for the height of the neutral layer can now be written by combining
equation (2-24) and equation (2-27) and rearrange the terms as:
ᡔ · ᡶ⡰
2 ㎗ 䙦 ㎘ 1䙧ᠧう
䖓 䙦ᡶ ㎘ ᡖ䖓䙧 ㎘ · ᠧう䙦ᡶ ㎘ ᡖ䙧 㐄 0 (2-28)
where x can be determined by solving the second order equation (2-28). The moment
of inertia for a concrete section in state II is calculated as:
ᠵ【【 㐄 ᡔᡶ⡱
3 ㎗ 䙦 ㎘ 1䙧ᠧう
䖓 䙦ᡶ ㎘ ᡖ䖓䙧⡰ ㎗ ᠧう䙦ᡖ ㎘ ᡶ䙧⡰ (2-29)
The concrete stress at a certain distance z from the neutral layer can now be calculated
in the same way as for the section in state I:
…〰䙦ᡸ䙧 㐄 ᠹ
ᠵ【【
ᡸ (2-30)
The steel will start to yield when the stress in the tensioned reinforcement reaches the
characteristic yielding stress. The fictive concrete stress can be calculated at the
reinforcement layer as:
…〰䙦ᡸう䙧 㐄 ᠹ
ᠵ【【
ᡸう (2-31)
The yield stress, fy, can now be expressed as:
ᡘげ 㐄 · …〰䙦ᡸう䙧 (2-32)
By inserting equation (2-31) into equation (2-32) and rearrange the terms the
expression for the moment when the tensile reinforcement yields, My, can be written
as:
ᠹげ 㐄 ᡘげᠵ【【
ᡸう
(2-33)
2.5.2.5 Reinforced cross section in state III
In state III the reinforcement in tension has reached yielding. The compressive stress
in the concrete will increase and the assumption about linear stress distribution is no
longer valid for concrete. The non-linear stress distribution however can be simplified
with a rectangular stress distribution by using a factor αc and a factor βc which takes
into account the average stress and the location of the force resultant for the concrete
respectively, see Figure 2.24.

-- 39 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
24
Figure 2.24 Double symmetric cross section in state III with strain distribution,
subjected to pure bending.
The failure criteria for a cross-section with flexural cracks and hot-rolled reinforcing
steel subjected to pure bending is limited by the maximum compressive strain in the
concrete, εcu .
–〰え 㐄 3.5 · 10⡹⡱ (2-34)
When this maximum value of the compressive strain in concrete is reached, the cross-
section is about to fail and has reached its ultimate limit.
The parameters αc and βc are functions of the strain in the compressed concrete. The
values for these parameters when the maximum strain is reached in the concrete
C25/30 is:
Table 2.1 Concrete parameters in ultimate limit state for classes C12/15-C50/60,
Engström (2008).
αc 0.81
βc 0.416
The height of the compression zone x can be calculated from the condition that the
sum of the forces Fc in the compressed concrete, Fs in the tensile reinforcement and
Fs’ in the compressive reinforcement (assumed to be compressed) should be equal to
zero, i.e.:
ᡘ〰 · ᡔ · 〰 · ᡶ ㎗ …う
䖓 · ᠧう
䖓 ㎘ ᡘげ · ᠧう 㐄 0 (2-35)
The stress in the compressed reinforcement is calculated as a function of the ultimate
strain in concrete and the location of the compressed reinforcement.
…う
䖓 㐄 ᠱう · 䙦ᡶ ㎘ ᡖ䖓䙧
ᡶ · –〰え when –う
䖓 㐉 –うげ (2-36)
…う
䖓 㐄 ᡘげ when –う
䖓 㐐 –うげ (2-37)
where yield strain for the reinforcement can be calculated as:
x
fcc
‐〰 · ᡶ
〰 · ᡘ〰〰
ᠲ〰 㐄 · ᡘ〰〰 · ᡔ · ᡶ
ᠲう䖓 㐄 …う
䖓 · ᠧう
䖓
ᠲう 㐄 …う · ᠧう
εcu
εs’
εs
As’
Acc
As
M

-- 40 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 25
–うげ 㐄 ᡘげ
ᠱう
(2-38)
The moment, Mu, when the ultimate limit of the cross-section is reached can now be
calculated by considering the moment around the tensile reinforcement as:
ᠹえ 㐄 〰 · ᡘ〰 · ᡔ · ᡶ · 䙦ᡖ ㎘ ‐〰 · ᡶ䙧 ㎗ …う
䖓 · ᠧう
䖓 · 䙦ᡖ ㎘ ᡖ䖓䙧 (2-39)
2.6 Load-displacement relations for simply supported
beam subjected to uniformly distributed load
Consider the simply supported beam in Figure 2.25. The beam is subjected to a
uniformly distributed load F=q·L.
Figure 2.25 Simply supported beam with uniformly distributed load.
The maximum moment will occur in the mid section of the beam and can be
calculated as:
ᠹ 㐄 ᠲ
2 · ᠸ
2 ㎘ ᠲ
ᠸ · ᠸ
2 · ᠸ
4 㐄 ᠲ · ᠸ
8 (2-40)
If a restriction concerning the moment in the mid section is known, the corresponding
load can be calculated as:
ᠲ 㐄 8 · ᠹ
ᠸ (2-41)
The stiffness K for the beam in Figure 2.25 can be calculated according to linear
elastic theory as:
ᠷ 㐄 384ᠱᠵ
5ᠸ⡱ (2-42)
The deflection u in the mid section can be expressed as a function of the applied load
and the stiffness as:
L
q=F/L

-- 41 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
26
ᡳ 㐄 ᠲ
ᠷ (2-43)
2.7 Basic dynamics
2.7.1 Orientation
In order to understand how an explosion affects a concrete structure, good knowledge
in dynamics is necessary. Basic dynamic expressions will be presented and explained
in the following sections.
2.7.2 Force and pressure
A force can be seen as the capability to accelerate mass. The relation between Force,
F, mass, m, and acceleration, a, is defined according to Newton´s law of acceleration:
ᠲ 㐄 ᡥ · ᡓ (2-44)
Pressure, P is defined as force per unit area, A, as:
ᡂ 㐄 ᠲ
ᠧ
(2-45)
2.7.3 Momentum, impulse and impulse intensity
For a body with mass ᡥ and velocity v, the momentum p is defined as:
ᡨ 㐄 ᡥ · ᡴ (2-46)
If the body is subjected to a force, F=F(t), during a certain time, see Figure 2.26, the
new momentum can be written:
ᡥ · ᡴ⡩ 㐄 ᡥ · ᡴ⡨ ㎗ 㔅 ᠲ䙦ᡲ䙧ᡖᡲ
ぇㄗ
ぇㄖ
(2-47)
The integral in equation (2-43) is the change of momentum and is defined as the
impulse, I, transmitted to the body.
∆ᡨ 㐄 ᠵ 㐄 㔅 ᠲ䙦ᡲ䙧ᡖᡲ
ぇㄗ
ぇㄖ
(2-48)

-- 42 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 27
Figure 2.26 Force acting on a body.
For pressure loads the term impulse intensity is used and is equal to the impulse over a
certain area:
ᡡ 㐄 ᠵ
ᠧ 㐄 㔅 ᡂ䙦ᡲ䙧ᡖᡲ
ぇㄗ
ぇㄖ
(2-49)
2.7.4 Momentum and kinetic energy
Consider a collision between two bodies where the first body has a mass m1 and
velocity v1 and the second body has a mass m2 and velocity v2. Assuming that the two
bodies are attached to each other after the collisions, see Figure 2.27.
Figure 2.27 Collision between two bodies.
The law of conserved momentum yields:
ᡥ⡩ᡴ⡩ ㎗ ᡥ⡰ᡴ⡰ 㐄 䙦ᡥ⡩ ㎗ ᡥ⡰䙧ᡴ⡩⡰ (2-50)
The unknown velocity for the two bodies, attached to each other, can be calculated as:
m F(t) v1
t0
v0
t1
x
l
v1
v2
v12
(m1+m2)
m1
m2

-- 43 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
28
ᡴ⡩⡰ 㐄 ᡥ⡩ᡴ⡩ ㎗ ᡥ⡰ᡴ⡰
ᡥ⡩ ㎗ ᡥ⡰
(2-51)
If the initial velocity of the second body is equal to zero, the law of conserved
momentum yields:
ᡴ⡩⡰ 㐄 ᡥ⡩
ᡥ⡩ ㎗ ᡥ⡰
· ᡴ⡩ (2-52)
If m2 is much larger than m1, equation (2-52) can be simplified to:
ᡴ⡩⡰ 㐄 ᡥ⡩ᡴ⡩
ᡥ⡰
げ〶〲〹〱う
䙗᝕᝕᝕䙔 ᡥ⡩ᡴ⡩ 㐄 ᡥ⡰ᡴ⡰ (2-53)
The larger body will stop the movement of the smaller body with a certain force,
during a certain time. This can also be seen as that impulse is transmitted from the
smaller body to the larger body during the collision.
The kinetic energy for the larger body is:
ᡉ〸 㐄 ᡥ⡰ᡴ⡰
⡰
2
(2-54)
Which, by use of equation (2-53) can be written as:
ᡉ〸 㐄 䙦ᡥ⡩ · ᡴ⡩䙧⡰
2ᡥ⡰
㐄 ᠵ⡰
2ᡥ⡰
(2-55)
The kinetic energy can be seen as external energy and in order to stop the movement,
an equally large internal resisting energy is required.
2.7.5 Internal energy
2.7.5.1 Concept
In order to stop the movement, or the deflection, in a structural system exposed to an
impulse load, the applied external energy has to be resisted by internal energy. The
internal energy in a resisting structure is provided by a combination of deformation
and internal resisting forces. A large deflection requires smaller internal forces than a
small deflection in order to create the same internal energy. The energy equivalence
will in the following be described for linear elastic, plastic, and bilinear elasto-plastic
material response.
2.7.5.2 Elastic Response
For an elastic material, the internal resisting force for an elastic response can be
written as:
ᡄ䙦ᡳ䙧 㐄 ᠷᡳ (2-56)
where K is the stiffness and u the displacement.

-- 44 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 29
The internal resisting energy can be expressed as the area under the curve in
Figure 2.28 (b) and is equal to:
ᡉ〶 㐄 ᡄ䙦ᡳ䙧 · ᡳ〲〹
2 㐄 ᠷ · ᡳ〲〹
⡰
2
(2-57)
where uel is the required displacement in order to equalize the internal energy to the
external energy.
A combination of equation (2-55) and (2-57) yields the expression for the elastic
displacement:
ᡳ〲〹 㐄 ᠵ
ᡥ″
(2-58)
where ω is the angular frequency, equal to:
″ 㐄 㒖ᠷ
ᡥ
(2-59)
F(t)
R(u)
m u
u
R
Wi
uel
K
(a) (b) (c)
Figure 2.28 System with elastic response: (a) Single degree of freedom system, (b)
Force displacement relation, (c) Energy equilibrium between external,
We, and internal energy, Wi.
2.7.5.3 Plastic response
For a plastic material behavior, the material capacity is limited. Thus, the maximum
internal resisting force in the structural system is also limited. A large displacement
capacity in the system is therefore the only way to increase the internal energy. This is
why a ductile behavior is to be preferred for a plastic material exposed to a dynamic
impulse load.
The internal resisting force, R, is constant in a plastic system, see Figure 2.30, and
equal to:
ᡄ䙦ᡳ䙧 㐄 ᡄ (2-60)
The internal resisting energy can be written as:
u
F, R
uel
K
Wi
Wy
R
We

-- 45 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
30
ᡉ〶 㐄 ᡄ㐵ᡳぃ〹㐹 · ᡳぃ〹 㐄 ᡄ · ᡳぃ〹 (2-61)
where upl is the required displacement in order to equalize the internal energy to the
external.
The plastic displacement can be calculated by combining equation (2-55) and (2-61).
ᡳぃ〹 㐄 ᠵ⡰
2ᡥᡄ
(2-62)
u
F, R
upl
Wi
We
R
(a) (b) (c)
Figure 2.29 System with plastic response: (a) Single degree of freedom system, (b)
Force displacement relation, (c) Energy equilibrium between external,
We, and internal energy, Wi.
2.7.5.4 Elastic-plastic response
An elastic-plastic material response is a combination of elastic and plastic behavior.
The internal resisting forces will increase as a function of the displacement up to a
certain limit where plastic behavior is reached.
The internal resisting force is defined as:
ᡄ䙦ᡳ䙧 㐄 㐠 ᠷᡳ, ᡳ 㐉 ᡳ〲〹,⡩
ᡄ, ᡳ 㐈 ᡳ〲〹,⡩
	
(2-63)
where uel,1 is the limit for when the material behavior goes from elastic to plastic,
defined as:
The internal energy can now be calculated:
ᡉ〶 㐄 ᡄ
2 䙦ᡳ〲〹,⡩ ㎗ 2ᡳぃ〹,⡩䙧 (2-65)
The required plastic displacement in order to equalize the internal and external energy
can now be calculated by combining equation (2-55) and (2-65).
F(t)
R(u)
m u
u
F
R
Wi
upl
ᡳ〲〹,⡩ 㐄 ᡄ
ᠷ (2-64)

-- 46 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 31
ᡳぃ〹,⡩ 㐄 ᠵ⡰
2ᡥᡄ ㎘ ᡳ〲〹,⡩
2 㐄 ᡳぃ〹 ㎘ ᡳ〲〹,⡩
2
(2-66)
where upl is the response for an ideally plastic system. The total displacement can now
be calculated as:
ᡳぇあぇ 㐄 ᡳ〲〹,⡩ ㎗ ᡳぃ〹,⡩ 㐄 ᡳぃ〹 ㎗ ᡳ〲〹,⡩
2
(2-67)
u
F
R
Wi
utot	uel,1
utot = uel,1 + upl,1
u
F, R
utot
Wi
We
R
uel,1
utot = uel,1 + upl,1
(a) (b) (c)
Figure 2.30 System with elasto-plastic response: (a) Single degree of freedom
system, (b) Force displacement relation, (c) Energy equilibrium
between external ,We, and internal energy, Wi.
2.7.6 The fundamental equation of motion
A beam subjected to a load F(t), can be seen as a body with a certain mass subjected
to internal and external forces where F(t) is the external force acting on the body.
When the beam deflects, an internal resisting force proportional to the deflection will
appear. This force can be seen as a static force.
ᡄうぇ〨ぇ 㐄 ᠷ · ᡳ (2-68)
where ᠷ is a constant which depends on the support conditions and material
properties, and ᡳ is the displacement.
In addition to the static resistance, a dynamic resistance will be created proportional to
the velocity. This force can be seen as internal friction when the beam deflects, see
equation (2-69).
ᡄ〱げぁ 㐄 ᡕ · ᡳ䙢 (2-69)
where c is the damping constant and ᡳ䙢 is the velocity for the displacement.
The equilibrium condition according to Newton equation now yields:
ᡥᡳ䙣 ㎗ ᡕᡳ䙢 ㎗ ᡣᡳ 㐄 ᠲ䙦ᡲ䙧 (2-70)
This equation is referred to as the fundamental equation of motion.
F(t)
R(u)
m u

-- 47 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
32
In order to simplify calculations regarding the maximum deflection, the dynamic
internal resistance can be neglected if it is small enough, i.e. if it marginally affects
the displacement for the time period of interest. This is the case for an explosion in
which the time to maximum displacement is short and the equation of motion will be
simplified to:
ᡥᡳ䙣 ㎗ ᡣᡳ 㐄 ᠲ䙦ᡲ䙧 (2-71)
2.8 SDOF system
2.8.1 Orientation
A simply supported beam can be divided into an infinite number of sections. For an
applied load, each of these sections will deflect with different magnitude, i.e. the
beam has an infinite number of degrees of freedom. By simplifying the problem and
only imitating the first bending mode, see Figure 2.31, the global shape of the
deflection is approximated in such a way that it is possible to transform the beam into
a single degree of freedom system, a so called SDOF system, see Figure 2.32.
Figure 2.31 The three first bending modes.
y	C	I	E	L	M	
σ	,	,	,	,	,
)	,	( t	x	q
e	R e	C
e	M
)	(t	Fe
Figure 2.32 Transformation of the beam into a single degree of freedom system.
The main goal when transforming the beam into an SDOF system is to describe a
motion in a certain point. This point is called the system point. It can be chosen
anywhere over the length of the beam but since the maximum deflection often is of
interest, the system point is usually chosen to be in the mid span in case of a simply
supported beam.
Second bending mode
Third bending mode
First bending mode

-- 48 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 33
The SDOF system consists of a single mass, an applied load, an internal resistance
and a damping which all have to reflect the real system in a satisfied way. The
damping will decrease the amplitude of the oscillation as function of the mass velocity
and its influence will only have considerable effects after a certain periods. This is
why the damping often can be neglected when a beam is exposed to a load originated
from an explosion since it is the largest deflection during the first period that is of
interest. In order to transform the beam into an SDOF-system equivalent mass, force
and resistance have to be used. Transformation factors are derived from assumptions
regarding energy equivalence between the SDOF and the real system. The
transformation factors will be explained (and derived) in the following sections.
2.8.2 Differential equation for an SDOF system
If neglecting the damping, the differential equation for an SDOF system is:
ᠹ〲ᡳ䙣う ㎗ ᡄ〲 㐄 ᠲ〲 䙦ᡲ䙧 (2.72)
where notation e denotes equivalent mass, resistance and load, respectively.
Equation (2.72) can also be written by means of transformation factors as:
‘〔ᠹᡳ䙣う ㎗ ‘〒ᡄ 㐄 ‘〇ᠲ䙦ᡲ䙧 (2.73)
where M, R and F(t) is the real mass, resistance and load respectively.
The definition of transformation factors is given by equations (2.74), (2.75) and
(2.76).
‘〔 㐄 ᠹ〲
ᠹ
(2.74)
‘〒 㐄 ᡄ〲
ᡄ
(2.75)
‘〇 㐄 ᠲ〲
ᠲ
(2.76)
Equation (2.73) can be further simplified by introducing another two transformation
factors:
‘〔〇 㐄 ‘〔
‘〇
(2.77)
‘〒〇 㐄 ‘〒
‘〇
(2.78)
It can be shown that κK is equal to κF which result in that κKF will be equal to one,
Nyström (2006). The final fundamental equation of motion for the SDOF system can
now be written:
‘〔〇ᠹᡳ䙣う ㎗ ᡄ 㐄 ᠲ䙦ᡲ䙧 (2.79)

-- 49 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
34
2.8.3 Transformation factors
2.8.3.1 Orientation
Nyström (2006) derives the transformation factors for the mass, load and internal
force, which all where defined in section 2.8.2. A basic knowledge about how to
calculate these factors is, however, necessary in order to better understand problems
that may occur when transforming a beam into an SDOF system. A fundamental
discussion about how to derive the transformation factors will therefore be presented
in this section. The reader is referred to Nyström (2006) for a complete derivation of
the transformation factors.
2.8.3.2 Transformation factor for the mass
The transformation factor for the mass can be calculated using the condition that the
oscillation of the equivalent mass in the SDOF system has to generate the same
amount of kinetic energy as for the real beam.
ᡉ〸
〠々〖〇 㐄 ᡉ〸
〃〲〨぀ (2.80)
The kinetic energy for the SDOF system can easily be stated but with the equivalent
mass and its velocity as unknown. The kinetic energy for the beam can be calculated
by summing up the contribution from all infinitesimal sections along the beam. The
mass is here known but the velocities for the sections are unknown.
The velocity, or the displacement during a very short time, for the system point in the
beam has to be the same as the velocity of the mass in the SDOF system. The
deformed shape of the beam is, for a point load or a distributed load, known since the
first bending mode is assumed. When the bending shape of the beam is known, the
deflection in all points along the beam can be expressed as function of the deflection
of the system point. Both sides of equation (2.80) can now be divided by the
deflection of the system point and the relation between the equivalent and the real
mass can be calculated.
The transformation factor for the mass depends thus, for a certain load case, on the
deflection shape of the beam and can be calculated according to equation (2.81).
‘〔 㐄 1
ᠹ 㔅 㐶ᡳ䙦ᡶ, ᡲ䙧
ᡳう䙦ᡲ䙧 㑀
⡰
‥ᠧᡖᡶ 㐄 1
ᠸ 㔅 㐶ᡳ䙦ᡶ, ᡲ䙧
ᡳう䙦ᡲ䙧 㑀
⡰
ᡖᡶ
け⢀〓
け⢀⡨
け⢀〓
け⢀⡨
(2.81)
where M is the mass, u is displacement, ρ is density and A is the cross section area.
2.8.3.3 Transformation factor for the load
The transformation factor for the load can be derived from the condition that the
equivalent load in the SDOF system should create the same amount of work as the
total load in the real system does.
The work is defined as the force acting on a body during a certain distance. In the
SDOF system the load and the unknown deflection is the same as for the system point
in the real system.
The load in the real system is known, and the deflection shape is assumed for a given
load. The deflection for all sections can now be written as function of the deflection of

-- 50 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 35
the system point. The total work in the beam can thus be calculated by integrating the
contribution from all infinitesimal section, over the length of the beam. When
calculating the transformation factor for the mass, both sides can be divided by the
system point’s deflection, leaving the equivalent force as the only unknown.
The transformation factor for the load can be calculated according to equation (2.82).
‘〇 㐄
ᔖ 㐶ᡳ䙦ᡶ, ᡲ䙧
ᡳう䙦ᡲ䙧 㑀 ᡩ䙦ᡶ, ᡲ䙧ᡖᡶ
け⢀〓
け⢀⡨
ᔖ ᡩ䙦ᡶ, ᡲ䙧ᡖᡶ
け⢀〓
け⢀⡨
(2.82)
2.8.3.4 Transformation factor for the resistance
The transformation factor for the internal resistance can be derived from the condition
that the equivalent internal force in the SDOF system should perform the same work
as the internal resistance in the real system does.
The resisting force depends on material behavior and is for an elastic material a
function of the stiffness and constant for a plastic material.
The total internal work in a beam is a sum of the work performed by moment, shear
and normal forces. The work performed by shear and normal force, though, is
relatively small and can often be negligible. The work performed by the moment can
be calculated by integrating the contribution from every infinitesimal section over the
length of the beam.
The reader is referred to Nyström (2006) for a complete derivation of the
transformation factor for the resistance. The factor can be calculated according to
equation (2.83).
‘〒 㐄 1
ᠷᡳう
⡰ 㔅 ᠹ䙦ᡶ䙧ᡳ䖓䖓䙦ᡶ䙧ᡖᡶ 㐄 1
ᡳう
ᔖ ᠹ䙦ᡶ䙧ᡳ䖓䖓䙦ᡶ䙧ᡖᡶ
け⢀〓
け⢀⡨
ᔖ ᡩ䙦ᡶ, ᡲ䙧ᡖᡶ
け⢀〓
け⢀⡨
け⢀〓
け⢀⡨
(2.83)
2.8.3.5 Transformation factors for simply supported beam
Nyström (2006) derives transformation factors for load and mass for a simply
supported beam with point load and distributed load; see case 1 and 2 in Table 2.2.
Two additional load situations have been considered in this work; see case 3 and 4 in
Table 2.2. These are of interest since they are two likely load situations for fragmental
loading that may occur when a bomb detonates and the fragments are released.
Derivation of the transformation factors for the two latter cases can be found in
Appendix J.
The tabled values enable a possibility for simplified hand calculations when having an
elastic or ideally plastic material response. For a bilinear elasto-plastic material
response however, it is not possible to directly use the elastic transformation factor for
the elastic part and the plastic transformation factor for the plastic part since a sudden
change of transformation factor will result in a sudden loss of energy. That is why an
incremental transition needs to be used. Information about how this transition has
been considered in this thesis can be found in Appendix K.

-- 51 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
36
Table 2.2 Transformation factors for a simply supported beam.
Material κF κM κMF
Case 1
Elastic 1.0 0.486 0.486
Plastic 1.0 1/3 1/3
Case 2
Elastic 0.640 0.504 0.787
Plastic 0.5 1/3 2/3
Case 3
Elastic 0.810 0.499 0.616
Plastic 2/3 1/3 0.5
Case 4
Elastic 0.475 0.512 1.077
Plastic 1/3 1/3 1
2.9 The central difference method
In this project, the Central Difference Method is used as solution procedure. The
method is a special case of the Newmark Method with certain values for the
parameters α and δ, which are determined in order to obtain integration accuracy and
stability. The Newmark method is a direct integration solution method where the
equation of motion is integrated using a numerical stepwise procedure. By the term
“direct” it is meant that no transformation of the equations into a different form is
carried out before the numerical integration.
The Central Difference Method is, according to Craig and Kurdila (2006), perhaps the
most fundamental algorithm for the approximate numerical solution of second order
differential equations in structural dynamics. They argue that it is a simple method
which is easy to understand and deal with, and also is an accurate second order
algorithm. And by vast experience they mean that second order algorithm is often
L
L
L
L

-- 52 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 37
required in many engineering problems. The method is also a conditionally stable
algorithm, provided that the time step, ∆t, is selected to be smaller than a critical time
step ∆tcr, which depends on the eigenvalues of the iteration matrix.
In the Newmark method the velocity and displacement at time tn+1 are assumed to be:
ᡳ䙢ぁ⡸⡩ 㐄 ᡳ䙢ぁ ㎗ 㐵䙦1 ㎘ ‒䙧ᡳ䙣ぁ ㎗ ‒ᡳ䙣ぁ⡸⡩㐹ᦆᡲ (2.84)
ᡳぁ⡸⡩ 㐄 ᡳぁ ㎗ ᡳ䙢ぁᦆᡲ ㎗ 䙦䙦1 ㎘ 2 䙧ᡳ䙣ぁ ㎗ 2 ᡳ䙣ぁ⡸⡩䙧 ᦆᡲ⡰
2
(2.85)
When the parameters alfa, α = 0 and delta, δ = 0.5 the Central difference method is
obtained.
To be able to establish the expression for the Central Difference Method the equation
of motion needs to be recalled from section 2.7.6.
ᠹᡳ䙣 ㎗ ᠩᡳ䙢 ㎗ ᠷᡳ 㐄 ᡘ䙦ᡲ䙧 (2.86)
The foundation of the Central Difference Algorithm is the simple finite- difference
expression:
ᡳ䙢ぁ 㐄 ᡳぁ⡸⡩ ㎘ ᡳぁ⡹⡩
2ᡠ
(2.87)
The derivative at time tn is approximated by the slope of the line passing through the
values of the function at tn-1 and tn+1. In order to maintain the consistency of the
approximation, the value of the second derivative is calculated as the difference of the
first-order forward and backward finite differences.
ᡳ䙣ぁ 㐄 ᡳぁ⡸⡩ ㎘ 2ᡳぁ ㎗ ᡳぁ⡹⡩
ᡠ⡰
(2.88)
When the equations (2.87) and (2.88), are inserted into the equation of motion the
following expression is obtained and evaluated at time, tn:
㐶 1
ᡠ⡰ ᠹ ㎗ 1
2ᡠ ᠩ㑀 ᡳぁ⡸⡩ ㎗ 㐶ᠷ ㎘ 2
ᡠ⡰ ᠹ㑀 ᡳぁ ㎗ 㐶 1
ᡠ⡰ ᠹ ㎘ 1
2ᡠ ᠩ㑀 ᡳぁ⡹⡩ 㐄 ᡘぁ
(2.89)
In case of neglecting the damping the equation (2.89) will look like:
1
ᡠ⡰ ᠹᡳぁ⡸⡩ ㎗ 㐶ᠷ ㎘ 2
ᡠ⡰ ᠹ㑀 ᡳぁ ㎗ 1
ᡠ⡰ ᠹᡳぁ⡹⡩ 㐄 ᡘぁ
(2.90)
For a more accurate establishment of the expressions for The Newmark Method and
The Central Difference Method and a working scheme for the methods the reader is
referred to Nyström (2006).

-- 53 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
38
3 The studied case
3.1 Orientation
In order to increase the knowledge about how an explosion affects a structural part, a
specific case has been studied. Choices regarding the geometry of the structure and
the properties of the bomb follow the Swedish shelter regulations, stated by the
Swedish Civil Contingencies Agency (MSB), the authority which controls regulations
of civil shelters in Sweden. Other choices and assumption are based on the theory
presented in chapter two.
3.2 Geometry
Räddningsverket (2006) proposes a standard case schematically shown in Figure 3.1
with the minimal thicknesses of structural members for the ground slab, walls and the
roof and also the considered distance between the detonation and the affected wall. In
this project, the height where the bomb detonates is assumed to be at a height equal to
half the wall’s height to simulate a worst case scenario. Since the wall is a member of
the civil structure that will get hit by the blast- and fragment loads, a wall strip
consisting of one meter in width is to be analysed.
Figure 3.1 Studied case concerning explosion proposed by Räddningsverket
(2006).
According to Räddningsverket (2006), the wall thickness needs to be at least 350 mm,
and in previous research, Leppänen (2009), Nyström (2008), the height of the wall is
set to be 2.7 m and is so in this thesis as well. All the measures and data concerning
the beam’s geometry are shown in Figure 3.2 and Figure 3.3.
Due to the structural response obtained by dynamic loading the wall has to be
reinforced in both the external and the internal edge of the wall, with a maximum
spacing of 200 mm between the bars and no shortening of the reinforcement in the
field is allowed.
The reinforcement amount at each edge should be in the following interval:
0,14 % < ρ < 1,1 % (3.1)
5000
200
350
350	125 Kg
TNT
[mm]
Ground level

-- 54 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 39
where ρ is:
‥ 㐄 ᠧう
ᡔ · ᡖ
(3.2)
As = Reinforcement area
b = width of the wall strip
d = effective height
Leppänen (2009) has chosen the amount of reinforcement to be 5φ16 with a spacing
of 200 mm. This corresponds to an area of 1005 mm2/m and ρ = 0.335 %. The cross
section can be visualized in Figure 3.2. This amount and arrangement of
reinforcement is also adopted in this thesis.
Figure 3.2 Cross section of the analysed beam.
In the calculations the wall strip is treated as a simply supported beam, see Figure 3.3.
This does not correspond to the true support condition in the civil defence shelter. The
real condition is something between simply supported and fixed, but it is a
simplification that makes the calculations easier and is good enough for the purposes
in this thesis.
Figure 3.3 The simply supported wall strip that is analysed.
φ16 200
350
50
1000
2700
350
50
50

-- 55 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
40
3.3 Material
According to Räddningsverket (2006), civil defence shelters should be built of
reinforced concrete with some material specific data. The material data used in this
project is presented in Table 3.1 and Table 3.2 for the concrete and the reinforcement
respectively.
Table 3.1 Concrete data used in the calculations.
Concrete data
Class C 25/30
fcc 25 MPa
Ec 31 GPa
ρ 2400 kg/m3
Table 3.2 Reinforcement data used in calculations.
Reinforcement data
Class B 500 BT
Fy 500 MPa
Es 200 GPa
In this report three simplified material responses are established with the real
behaviour under consideration. These three responses are: linear elastic, ideally plastic
and bilinear elastic-plastic.
A simplified bilinear load-deflection curve to describe the complex behaviour of
concrete is introduced in section 2.5.1. An expression for how to calculate the
ultimate moment together with an expression for the load-displacement relation is
presented in the same section 2.5.1. The load versus deflection curve for an elasto-
plastic material can be seen in Figure 3.4 and the corresponding calculations are
performed in Appendix C.
Rpl
upl
u
R
Rpl = 449.2 kN
upl = 8.35 mm
KII = 53.8 MN/m
KII
u
L
q
R=qL

-- 56 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 41
Figure 3.4 Load-displacement curve for simplified bi-linear elasto-plastic material
response.
When having elastic response the same stiffness as for the elastic part of the elasto-
plastic material response is used. The load-displacement curve will look like
Figure 3.5.
Figure 3.5 Load-displacement curve for linear elastic material response.
For an ideal plastic material response the maximum internal force is chosen to be the
same as for the elasto-plastic material response. The load-deflection curve can be seen
in Figure 3.6.
Figure 3.6 Load-displacement curve for ideal plastic material response.
3.4 Load
3.4.1 Orientation
As mentioned in section 2.2.1, the impact of an explosion on a structure can be
divided into impact from the blast wave and from the fragments. The properties of the
bomb will affect the magnitude and characteristic of these impacts considerably.
Räddningsverket (2006) uses a reference bomb to define the load conditions. This
reference bomb, together with impact from the blast and fragments, will be treated in
the following sections.
3.4.2 Reference bomb
The bomb has a total weight of 250 kg, 125 kg out of these are TNT explosives and
the remaining 125 kg is shell mass (fragments). As described in Figure 3.1, the bomb
detonates 5.0 m from the wall at a height of 1.55 m.
u
R
KII = 53.8 MN/m
KII
Rpl
u
R
Rpl = 449.2 kN
u
L
q
R=qL
u
L
q
R=qL

-- 57 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
42
3.5 Blast load
Basic theory about the blast load was presented in section 2.2.2. An idealized blast
wave was also presented in the same section, this blast wave is presented once again
in Figure 3.7.
Figure 3.7 Idealized blast wave.
The blast wave, or the pressure as function of time curve, consists of a positive phase,
followed by a negative phase. The effect of the negative phase is often neglected and
will not be considered in this thesis.
The shape of the curve for the positive part can, according to Ekengren et al. (2004),
be approximated as:
ᡂ䙦ᡲ䙧 㐄 ᡨ⡨ ㎗ ᡂ⡸ 㐶1 ㎘ ᡲ ㎘ ᡲ〨
ᡆ⡸ 㑀 ᡗ⡹ぇ⡹ぇ㉶
む (3.3)
P+ is the pressure in the front of the pressure wave, ta is the arrival time, T+ is the time
for which the pressure is positive and α is a parameter considering the shape of the
pressure curve. The atmospheric pressure p0 is often not considered in equation (3.3)
since the difference in pressure over boundaries for a structural part is of interest.
For the reference case presented earlier Pr+ is equal to 5000 kPa, T+ is equal to
8.974 ms, ta is equal to 2.66 ms and α is equal to 0.5983 in accordance with Leppänen
(2009). The resulting impulse intensity for the positive part is equal to 2800 Pas.
The impulse intensity i+ is the area under the time versus pressure curve for the time
T+ and can be calculated by excluding p0 from equation (3.3) and integrate the
expression over the time T+.
The pressure versus time relation for the positive phase in Figure 3.7 has, in this
thesis, been even more simplified by a triangular curve, see Figure 3.8 and equation
(3.4). The impulse intensity, the arrival time and the peak pressure is the same as for
p0 + P+
p0 + P-
p0
i -
i +
ta T+ T-
t
P

-- 58 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 43
the equation used by Leppänen. Furthermore, the peak pressure P+ will occur after 0,1
ms since a too large increment of the load can result in numerical problems in the FE
analysis.
Figure 3.8 Simplified pressure versus time relation used in calculations made in
this report.
ᡂ䙦ᡲ䙧 㐄 0 when 0 㐉 ᡲ 㐇 䙦ᡲ〨 ㎘ 0.1 · ᡆ⡸䙧
ᡂ䙦ᡲ䙧 㐄 ᡂ⡸
0.1 · ᡆ⡸ 䙦ᡲ ㎘ 䙦ᡲ〨 ㎘ 0.1ᡆ⡸䙧䙧 when 䙦ᡲ〨 ㎘ 0.1 · ᡆ⡸䙧 㐉 ᡲ 㐇 ᡲ〨
(3.4)
ᡂ䙦ᡲ䙧 㐄 ᡂ⡸ ㎘ ᡂ⡸
0.9 · ᡆ⡸ 䙦ᡲ ㎘ ᡲ〨䙧 when ᡲ〨 㐉 ᡲ 㐇 䙦ᡲ〨 ㎗ ᡆ⡸䙧
ᡂ䙦ᡲ䙧 㐄 0 when 䙦ᡲ〨 ㎗ ᡆ⡸䙧 㐉 ᡲ 㐇 ∞
The time T+ for the simplified curve can be calculated from the condition that the
impulse should remain the same:
ᡆ⡸ 㐄 2 · ᡡ⡸
ᡂ⡸ 㐄 2 · 2800
5000 · 10⡱ 1.12 ms (3.5)
3.6 Fragment loads
Basic theory about fragments and the fragmentation process was presented in section
2.2.3.1. It is assumed, in this thesis, that the bomb detonates with its nose downwards
and its tail upwards which implies that the beam (wall strip) will be exposed to a
swarm of relatively small fragments.
P+
0.9T+
i+
ta
T+
t
P

-- 59 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
44
As mentioned in section 2.2.3.5, 60 percent of the case mass will strike in a segment
of 40 degrees. From Figure 3.9.a. and equation (3.6) it can be concluded that the total
height of the wall will be within these 40 degrees for the studied reference case.
The percentage of the total case mass hitting a wall strip of 1,0 m in width can now be
calculated by also consider Figure 3.9.b. and equations (3.6) and (3.7).
Figure 3.9 Fragmental distribution from (a), side and from (b), above
㐄 tan⡹⡩ 㐶 ᡠ
2ᡄ㑀 㐄 䙰ᡠ 㐄 2.7 m, ᡄ 㐄 5 m䙱 㐄 15,11° (3.6)
‐ 㐄 tan⡹⡩ 䙲 ᡵ
2ᡄ䙳 㐄 䙰ᡵ 㐄 1 m䙱 㐄 5,71° (3.7)
The total amount of fragments striking 1 meter of the wall then becomes:
ᠹ〵 · 㐶2 ·
40° 㑀 · 0.6 · 㐶2 · ‐
360°㑀 㐄 0.0144 · ᠹ〵 㐄 0.0144 · 125 kg 㐄 1.8 kg (3.8)
The total mass hitting the wall strip will thus be 1.8 kg which, for a wall of height
2.7 m, is equal to 0.67 kg/m2.
Ground level h
R	α40°
β
w
(b)
(a)

-- 60 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 45
An empirical equation for how to calculate the mass distribution of the fragments for
a certain bomb was presented in section 2.2.3.7. The same expression is once again
presented:
ᡦ䙦぀㊔䙧 㐄 ᠹ〵
2 · ᠹ。
ᡗ⡹㒕぀㊔
〔㉐ (3.9)
The fragment distribution, MA, factor depends on the shape and the properties of the
bomb. This parameter is not defined for the reference bomb. However, a similar bomb
(American GP-bomb Mk82) can be used to estimate the value of MA and
Nyström (2008) estimates this parameter to be 1.758 g.
The total amount of fragments is obtained by putting ᡥう to zero in equation (3.9) and
is equal to 35 552 fragments. The number of fragments, larger than a certain mass can
be seen in Figure 3.10.
Figure 3.10 Number of fragments larger than a certain mass.
According to equation (3.8) only 1.44 % of these fragments will strike the wall which
gives a total number of 526 fragments.
The mass distribution for the fragments can be obtained by dividing the total amount
of fragments into 0.1 g intervals:
ᡥ 㐄 䙰0, 0.1, 0.2, 0.3, … , 100䙱 䙰ᡙ䙱
The average mass in each interval is calculated according to equation (3.10).
ᡥ〨ぉ㊄ 㐄 ᡥ〶 ㎗ ᡥ〶⡸⡩
2
(3.10)
Equation (3.10) is a simplification of the real distribution but it is assumed to be a
good enough approximation since the mass intervals are relatively small.
The amount of fragments in each interval is calculated according to equation (3.11).
ᡦ〶ぁぇ㊄ 㐄 䙦ᡦ䙦぀㊄䙧 ㎘ ᡦ䙦぀㊄ㄦㄗ䙧䙧 · 0.0144 (3.11)
The total mass in each interval can now be calculated as:
0
5 000
10 000
15 000
20 000
25 000
30 000
35 000
40 000
0 20 40 60 80 100
Number of fragments
Mass of fragment [g]

-- 61 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
46
ᡥぇあぇ㊄ 㐄 ᡥ〨ぉ㊄ · ᡦ〶ぁぇ㊄ (3.12)
which gives a mass distribution according to Figure 3.11.
Figure 3.11 Fragment mass distribution for the studied case.
Striking velocities for the average mass in each interval can be calculated by
equation (2.3) and the impulse for each interval can now be expressed as:
ᠵ〶 㐄 ᡴ〶 · ᡥぇあぇ㊄ (3.13)
This gives an impulse distribution according to Figure 3.12.
Figure 3.12 Impulse distribution from fragments for the studied case.
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
0 20 40 60 80 100
Mass [g/g]
Mass of fragments [g]
Total Mass = 1.8 kg
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
0 20 40 60 80 100
Impulse [Ns/g]
Mass of fragments [g]
Total impulse=3272 Ns

-- 62 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 47
3.6.1 Fragmental impact on the beam
The fragmental impact on the beam can be seen as impulse loading since the
fragments hits the beam at very high velocities and will be decelerated by the beam
during a very short time.
As mentioned in section 2.2.3.2 the fragments will also penetrate the beam.
Penetration depths as function of the fragment mass when the bomb detonates at a
distance of 5 meters are presented in Figure 3.13 below. These penetration depths are,
compared to more advanced simulations in Nyström (2008), rather high but
nevertheless show a principal relation between penetration depth and fragment mass.
Figure 3.13 Penetration depth as function of fragment mass at a distance R=5m.
The duration from when the fragment strikes the wall until it has been fully stopped
by the wall can be calculated by considering the penetration depth and the average
velocity during the penetration, assuming linear retardation, as:
ᡆ〳 㐄 ᡶ
ᡴ〨ぉ㊄
㐄 2 · ᡶ
ᡴ〶
(3.14)
where ᡶ is the penetration depth which depends on the velocity, mass and shape of the
fragment.
Leppänen (2009) estimates this time for a 6 gram fragment to be 0.1 ms. This value
will also be used as an approximation for the fragment load duration for all fragments,
independently of mass in this thesis.
The time from when the bomb detonates until the fragment reach the surface of the
beam can be calculated by assuming linear retardation of the fragment in the air as:
0
50
100
150
200
250
300
350
0 20 40 60 80 100
Penetration depth [mm]
Mass of fragments [g]

-- 63 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
48
ᡲ〨㊄ 㐄 ᡄ
ᡴ〨ぉ㊄
(3.15)
ᡴ〨ぉ〲ぅ〨〴〲 㐄 ᡴ⡨ ㎗ ᡴ〶
2
(3.16)
By assuming a force-time relation according to Figure 3.14 the peak force for a
fragment can be calculated as:
ᠲぃ〲〨〸 㐄 2 · ᠵ〶
ᡲ 㐄 2 · ᡥ〶 · ᡴ〶
ᡲ
(3.17)
Figure 3.14 Load versus time relation for fragments.
3.6.2 Combination of fragment and blast load
Figure 3.15 shows the arrival time for the blast wave and for a 50 gram fragment as
function of the distance to the centre of the detonation. It can be observed that at a
distance of five meters the fragment and the blast wave will hit the wall at
approximately the same time, according to Nyström (2008) which is a worst case
scenario. Since the mass of the fragments are not constant the arrival time for a single
fragment might deviate a little from Figure 3.14. It can however be assumed that the
total amount of fragments will hit the wall within a relatively short time period.
ta
F
Fpeak
t
Tf

-- 64 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 49
Figure 3.15 Time when the fragment and the blast wave reaches the beam as
function of the distance to the bomb, Leppänen (2009).
The fragmental impact will later on be simulated as several point loads and as one
(simplified) uniformly distributed load. When the fragments are simulated as point
loads the real arrival time and load amplitude will be calculated for each point load,
i.e. for each fragment. However, the duration for the load will still be kept to 0.1 ms.
When the fragments on the other hand are simulated as one distributed load the arrival
time has to be chosen. A conservative assumption is to say that the peak value from
the blast load and the distributed fragment load will occur at the same time. This is
also a scenario relatively close to reality and will be used in this work.
Figure 3.16 and Figure 3.17 show the pressure versus time relation for the blast load
and for the fragment load respectively and Figure 3.18 shows the total load versus
time relation.
Figure 3.16 Load versus time relation for blast load.
0
2
4
6
8
10
0 2 4 6 8 10
Avstånd [m]
Ankomsttid [ms]
Stötvåg
Splitter
0
1 000
2 000
3 000
4 000
5 000
6 000
0 0,5 1 1,5
Load [kN]/m
Time [ms]
Blast Load
Distance [m]
Blast wave
Fragment (50 g)

-- 65 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
50
Figure 3.17 Pressure versus time relation for fragment load when applied as
simplified uniformly.
Figure 3.18 Total load versus time relation for blast- and fragment load.
In order to use the same time functions throughout all simulations, a gap of 0.12 ms
between zero to the time when the blast load starts has been left since a large fragment
could hit before the blast load arrives when all fragment are simulated as separate
point loads.
3.6.3 Simulation of fragments
The simulation of fragments is usually simplified in calculations by distributing the
total impulse from the fragments as a uniform pressure over the beam. Another
possible simplification, very conservative and extreme, is to simulate the total impulse
of the fragments as one point load acting in the middle of the beam, which would lead
to a maximum displacement in mid span. The most realistic simulation, though, would
be to use a random generator and let fragments with different size and velocity strike
the wall in different points. In order to see how simulations of the fragments affect the
response of the beam, different simulations has to be run in between the two extreme
cases.
According to Räddningsverket (2006), shelters do not need to be designed for
fragments with a mass larger than 50 gram. Therefore, fragments with mass larger
0
5 000
10 000
15 000
20 000
25 000
30 000
0 0,5 1 1,5
Load [kN]/m
Time [ms]
Fragment Load
0
5 000
10 000
15 000
20 000
25 000
30 000
35 000
0 0,5 1 1,5
Load [kN]/m
Time [ms]
Total Load

-- 66 of 140 --

CHALMERS, Civil and Environmental Engineering
than 50 gram will not be considered in the study carried out here
impulse generated by these larger fragments will be taken into consideration.
The choice of how to simulate the fragments in between the two extreme cases can be
made in many different ways. However, the main goal in this project has been to
imitate the reality as good as possible but still be able to see how a proper simulation,
close to reality, may differ from a more theoretical one. By considering the amount of
fragments in different mass intervals and also consider the total impulse in each
interval a good base for how to simulate the fragments is achieved.
By use of equation (3.9) the amount of fragments with mass up to 50 grams can be
calculated and is equal to
be to use a random generator based on the mass distribution but in such a case the
impulse intensity will not be the same for different runs. Hence, if the impulse shall be
constant, which is the objective here, the masses of the fragments has to be chosen in
advance. In this report, eight different groups of fragments have been chosen in the
interval from zero to fifty grams, see
Figure 3.19 Subdivision of fragments into eight groups. The total mass of fragments
larger than 50 g has been transformed to fragments with less mass.
Each group contains a certain amount of fragments wi
amount of fragments will furthermore be different for all the groups. As a first
simulation, all of the fragments from the same group will be thrown out in one,
randomly chosen, point on the beam. In the second run, each grou
into two equally sized sub groups and each sub group will be thrown out in two
randomized points. This simulation will continue until each subgroup contains only
one fragment, see Figure 3
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
0 10 20
Impulse [Ns/g]
1 2 3 4 5 6 7 8
Civil and Environmental Engineering, Master’s Thesis 2009:81
than 50 gram will not be considered in the study carried out here.
impulse generated by these larger fragments will be taken into consideration.
The choice of how to simulate the fragments in between the two extreme cases can be
in many different ways. However, the main goal in this project has been to
imitate the reality as good as possible but still be able to see how a proper simulation,
close to reality, may differ from a more theoretical one. By considering the amount of
ments in different mass intervals and also consider the total impulse in each
interval a good base for how to simulate the fragments is achieved.
the amount of fragments with mass up to 50 grams can be
culated and is equal to 511 pieces. A good way to simulate these fragments would
be to use a random generator based on the mass distribution but in such a case the
impulse intensity will not be the same for different runs. Hence, if the impulse shall be
nstant, which is the objective here, the masses of the fragments has to be chosen in
advance. In this report, eight different groups of fragments have been chosen in the
interval from zero to fifty grams, see Figure 3.19.
Subdivision of fragments into eight groups. The total mass of fragments
larger than 50 g has been transformed to fragments with less mass.
Each group contains a certain amount of fragments with the same mass. The mass and
amount of fragments will furthermore be different for all the groups. As a first
simulation, all of the fragments from the same group will be thrown out in one,
randomly chosen, point on the beam. In the second run, each group will be divided
into two equally sized sub groups and each sub group will be thrown out in two
randomized points. This simulation will continue until each subgroup contains only
3.20.
20 30 40 50 60 70 80
Mass of fragments [g]	1 2 3 4 5 6 7 8
51
. However, the
impulse generated by these larger fragments will be taken into consideration.
The choice of how to simulate the fragments in between the two extreme cases can be
in many different ways. However, the main goal in this project has been to
imitate the reality as good as possible but still be able to see how a proper simulation,
close to reality, may differ from a more theoretical one. By considering the amount of
ments in different mass intervals and also consider the total impulse in each
the amount of fragments with mass up to 50 grams can be
A good way to simulate these fragments would
be to use a random generator based on the mass distribution but in such a case the
impulse intensity will not be the same for different runs. Hence, if the impulse shall be
nstant, which is the objective here, the masses of the fragments has to be chosen in
advance. In this report, eight different groups of fragments have been chosen in the
Subdivision of fragments into eight groups. The total mass of fragments
larger than 50 g has been transformed to fragments with less mass.
th the same mass. The mass and
amount of fragments will furthermore be different for all the groups. As a first
simulation, all of the fragments from the same group will be thrown out in one,
p will be divided
into two equally sized sub groups and each sub group will be thrown out in two
randomized points. This simulation will continue until each subgroup contains only
90 100

-- 67 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
52
Figure 3.20 Simulation of fragments in the three first runs, containing 8, 16 and 32
groups of fragments.
Since groups and subgroups will be divided into 2, the amount of fragments in each
group has chosen to be multiples of 2. The number of fragment per group in Table 3.3
gives a similar distribution to reality.
Table 3.3 Mass intervals for the subdivided groups comparing the columns 2 and
3 which is the true subdivision and in 5 and 6 the division used in this
project.
Reality Chosen division in this work
Mass interval
[g] Fragments % of total Group Fragments % of total
0 – 0.9 261 51.1% 1 256 50.2%
0.9 – 3.4 125 24.5% 2 128 25.1%
3.4 – 7.6 63 12.3% 3 64 12.5%
7.6 – 13.4 32 6.0% 4 32 6.3%
13.4 – 20.8 16 3.1% 5 16 3.1%
20.8 – 29.6 8 1.6% 6 8 1.6%
29.6 – 39.4 4 0.8% 7 4 0.8%
39.4 - 50 2 0.4% 8 2 0.4%
Total amount 511 Total
amount 510
Run 1
Run 2
Run 3

-- 68 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 53
The size of fragments in each group can be calculated by respecting the condition that
the real impulse should remain the same between the mass interval and the
corresponding group. Even if masses over 50 g not will be taken into consideration,
the impulse of these fragments will. The impulse for these larger fragments will be
added to the mass interval as function of how large impulse each group contains in
relation to the total impulse up to 50 g. The total impulse and corresponding choice of
mass for the groups can be seen in Table 3.4 and Table 3.5. The choice of mass for the
fragments in Table 3.5 has been made by respecting the condition that the impulse for
the different groups should be the same as for the corresponding mass intervals.
Table 3.4 The impulse for the various intervals including the extra impulse
obtained from the fragments larger than 50 g.
Mass interval [g] Impulse
[Ns]
% of impulse
from 0-50 g
Impulse for fragments
larger than 50 g [Ns]
Total
impulse
0 – 0,9 101,3 3,4% 9,5 110,8
0,9 – 3,4 398,9 13,3% 37,4 436,3
3,4 – 7,6 590,4 19,7% 55,4 645,8
7,6 – 13,4 592,2 19,8% 55,6 647,8
13,4 – 20,8 500,4 16,7% 47 547,4
20,8 – 29,6 375,2 12,6% 35,2 410,5
29,6 – 39,4 258,8 18,7% 24,3 283,1
39,4 - 50 173,6 5,8% 16,3 189,9
Total impulse 0–50 g 2991 281 3272
Impulse for fragments
larger than 50 g 280,8

-- 69 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
54
Table 3.5 The chosen mass for the various runs with corresponding velocity and
impulse.
Group Fragments Mass [g] Velocity [m/s] Impulse [Ns]
1 256 0,3 1473 110,8
2 128 2,0 1730 436,3
3 64 5,5 1824 645,8
4 32 10,8 1872 647,8
5 16 18,0 1902 547,4
6 8 26,7 1923 410,5
7 4 36,5 1937 283,1
8 2 48,7 1950 189,9
Total impulse 3272
A total number of 9 different runs are prepared, see Table 3.6. In each run, the same
number of striking points as loads will be chosen. These points will be equally
distributed over the length of the beam. Furthermore, each load will be assigned to
one single, randomly chosen, point.
Each run will be performed five times in order to see how the distribution affects the
deflection of the loaded beam.
Table 3.6 Number of fragments and loads in the different runs. The subgroups in
the grey marked zone consist of one fragment and can therefore not be
further subdivided.
run 1 run 2 run 3 run 4 run 5 run 6 run 7 run 8 run 9
subgroups
	fragments
	subgroups
	fragments
	subgroups
	fragments
	subgroups
	fragments
	subgroups
	fragments
	subgroups
	fragments
	subgroups
	fragments
	subgroups
	fragments
	subgroups
	fragments
Group 1 1 256 2 128 4 64 8 32 16 16 32 8 64 4 128 2 256 1
Group 2 1 128 2 64 4 32 8 16 16 8 32 4 64 2 128 1 128 1
Group 3 1 64 2 32 4 16 8 8 16 4 32 2 64 1 64 1 64 1
Group 4 1 32 2 16 4 8 8 4 16 2 32 1 32 1 32 1 32 1
Group 5 1 16 2 8 4 4 8 2 16 1 16 1 16 1 16 1 16 1
Group 6 1 8 2 4 4 2 8 1 8 1 8 1 8 1 8 1 8 1
Group 7 1 4 2 2 4 1 4 1 4 1 4 1 4 1 4 1 4 1
Group 8 1 2 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1
number of loads 8 16 30 54 94 158 254 382 510

-- 70 of 140 --

CHALMERS, Civil and Environmental Engineering
The impulse distributions for run 1 and run 5 are presented in figure 3.21 and 3.22
respectively. The loads ha
which will be used as a “worst case scenario”.
Figure 3.21 Impulse distribution for the various cases in run 1.
1 5	4	3	2
Civil and Environmental Engineering, Master’s Thesis 2009:81
s for run 1 and run 5 are presented in figure 3.21 and 3.22
respectively. The loads have been randomly distributed for all runs except for run 1A
which will be used as a “worst case scenario”.
Impulse distribution for the various cases in run 1.
8	7	6
55
s for run 1 and run 5 are presented in figure 3.21 and 3.22
for all runs except for run 1A

-- 71 of 140 --

CHALMERS
56
Figure 3.22 Impulse distribution for the various cases in run 5.
3.6.4 Fragmental load angle
As a first step, all fragmen
regardless of where on the beam a fragment strikes. This is, in reality, only true for
fragments that strike in the middle of the beam. This assumption will therefore
somewhat overestimate the forces acting closer to the support and totally ignore the
horizontal resultant of the force.
with the 8 fragment groups represented as forces which all acts perfectly
perpendicular to the beam.
load angel has been taken into consideration.
L
x
CHALMERS, Civil and Environmental Engineering, Master’s Thesis
Impulse distribution for the various cases in run 5.
Fragmental load angle
As a first step, all fragments will be assumed to strike the beam at an angle of 90
where on the beam a fragment strikes. This is, in reality, only true for
fragments that strike in the middle of the beam. This assumption will therefore
somewhat overestimate the forces acting closer to the support and totally ignore the
rizontal resultant of the force. Figure 3.23a presents one of the load cases in run 1
with the 8 fragment groups represented as forces which all acts perfectly
perpendicular to the beam. Figure 3.23b presents the same load case but where the
load angel has been taken into consideration.
, Master’s Thesis 2009:81
ts will be assumed to strike the beam at an angle of 90○
where on the beam a fragment strikes. This is, in reality, only true for
fragments that strike in the middle of the beam. This assumption will therefore
somewhat overestimate the forces acting closer to the support and totally ignore the
a presents one of the load cases in run 1
with the 8 fragment groups represented as forces which all acts perfectly
ents the same load case but where the

-- 72 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 57
Figure 3.23 Fragment load where load angle has, and has not been taken into
consideration, (a) and (b) respectively.
If the load angel is taken into consideration, each load can be subdivided into two
resultants according to Figure 3.24.
Figure 3.24 Fragment load subdivided into two resultants with a certain load angle.
3.6.5 Fragment arrival time
The time from when the bomb detonates until a fragment reaches the wall has been
simplified by assuming that the distance from the center of the bomb to the striking
points, R, is equal to five meters. This is, as for the load angle, only true for fragments
hitting the mid section of the beam as can be seen in Figure 3.25.
(a)
(b)
α
F	FV = F·sinα
FH = F·cosα

-- 73 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
58
Figure 3.25 Distance from the bomb to any point on the beam.
Since the distance will be underestimated for fragments closer to the supports, the
time from when the bomb detonates until a fragment reaches this point will also be
underestimated. Fragments hitting closer to the supports will also have somewhat
lower velocity when they arrive, since the distance is longer, which results in less
impact for these fragments.
3.6.6 Comments about load angle and arrival time
A simplified model where the fragment load angle is constantly equal to 90○ and
where the fragment arrival time is independent of where the fragment hit the beam
(i.e. based on R = 5 m) will be used as a standard case in the simulations. The
difference in load angle and arrival time will however be considered in order to see
deviations compared to the simplified assumptions.
β
R / sin β	R

-- 74 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 59
4 The FE-model
4.1 General description
The concrete wall strip is analysed numerically by using the finite element program
ADINA (2008). Two different models are created, one simplified beam element
model and a 2-D solid element model. Both these models are analysed with elastic,
plastic and elastic-plastic material properties as described in section 3.3. For both
models, an equivalent elasto-plastic material is used with the same simplified load-
displacement curve as for the real material, Figure 3.4. The beam can in this way be
modelled by only one material instead of two; one for concrete and one for
reinforcement. By using an equivalent material, the FE-models will also be much
more stable, since the simulation of cracking is not considered.
The beam element model is used to investigate how the beam’s behaviour differs
when the fragmental load is either applied as various numbers of point loads or as a
uniformly distributed. The 2-D solid element model, though, is mainly used to
simulate removal of concrete due to the fragmental impact when penetrating the
concrete.
The beam is exposed to a blast load which is acting as a uniformly distributed load,
while the fragment loads are either applied as a uniformly distributed load or as
randomly distributed point loads corresponding to run 1,5 and 9. The fragment loads
can vary between uniformly distributed load and point loads because the beam’s
difference in behaviour is to be checked.
In ADINA the loads are applied by using time functions to make the simulation more
realistic. In the first case, the blast- and fragment loads are applied as uniformly
distributed loads in such a way that they hit the beam at the same time. In the other
case, the fragment loads are applied with varying arrival times, depending on the
fragment mass and velocity.
Plastic material response is modelled in the same way as elastic-plastic response but
the stiffness for the elastic part is increased by using rotational constraints for the
elastic elements. The support nodes are used as master nodes and the elastic nodes in
between the supports and the plastic element are used as slave nodes in order to
constrain the beam’s deflection to imitate that assumed according to yield theory.
To use the linear elastic, plastic and elastic-plastic material responses, a fictive
young’s modulus and fictive yield strength needs to be calculated. The fictive
Young’s modulus is calculated with the equations (4-1) and (4-2), this is achieved by
reducing the Young’s modulus with a constant γ, which is the quotient of the moment
of inertias from state I and state II to get a representative value for the two states, see
Figure 2.21. This will be input data for the FE-models in the elastic as well as the
elastic-plastic analysis.
γ 㐄 ᠵ【
ᠵ【【
(4-1)
ᠱ〰.【【 㐄 ᠱ〰.⡩
γ
(4-2)

-- 75 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
60
γ Reduction factor for the Young’s modulus
II Moment of inertia in state 1
III Moment of inertia in state 2
Ec.1 Young’s modulus for concrete in state 1
Ec.II Fictive Young’s modulus
The ultimate capacity of the beam is calculated in Appendix B according to the theory
presented in chapter two. The fictive yield strength can now be calculated according
to equation (4-3).
Mu Ultimate moment capacity
ᡘげ
䖓 Fictive yield stress used to describe when the beam goes from linear
elastic to ideally plastic response
Z Flexural resistance
4.2 Beam element model
4.2.1 Material properties
A beam element model is used to model the beam in a simplified way. The beam
element is a two node element, which in ADINA may be provided with a maximum
of seven integration points over the height. This means, that the cross-section can not
be fully plasticized, but at most acquire a stress state as that shown in Figure 4.1.
Therefore the flexural resistance will be modified on the basis of the seven integration
points and be used in the input file for FE-analysis.
Figure 4.1 Maximum stress state over cross section with seven integration points
in ADINA.
ᡘげ
䖓 㐄 ᠹえ
ᡒ
(4-3)
h/6
h/6
h/6
h/6
h/6
h/6
fy
fy
Integration point

-- 76 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 61
The flexural resistance has been calculated by using equation (2-11) and the following
expression is obtained:
Z䖓 㐄 13
54 b · h⡰ (4-4)
The flexural resistance obtained by equation (2-11) differs approximately 4 %
compared to the flexural resistance when the cross-section can reach its full plastic
capacity, i.e. Z=bh2/4.
During the analysis, the models were deformation controlled by point loads at the
plastic nodes. It turned out that the expected internal resisting force when the beam
reached yielding was not obtained. The reason for this is unknown but in order to
describe a correct moment capacity of the beam the yield strength is increase with
another 4 %, i.e.
ᡘげ
䖓 㐄 1.04 · ᡘげ (4-5)
where
ᡘげ 㐄 ᠹ〗〹
Z䖓
(4-6)
In Table 4.1 the modified input data, concerning the material properties for the elastic
and plastic elements are presented. The values for the Young’s modulus and the yield
stress are calculated and described in Appendix B.
Table 4.1 Modified input data for the beam elements for the elastic elasto-plastic
response.
Elements Young’s modulus [GPa] Yield stress [MPa]
Elastic 3.86 -
Plastic 3.86 (constraints) 5.358
Elasto-Plastic 3.86 5.358
Since the runs have different numbers of point loads, the subdivision of elements will
be different for all the runs, since the points where the fragment loads hit must agree
with the nodes in the mesh.
4.2.2 Elastic analysis
In Table 4.2, the number of elements is presented for run 1, 5 and 9 for the elastic
analysis.
Table 4.2 Number of elastic beam elements in runs 1, 5 and 9.

-- 77 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
62
Run Number of elements
Run 1 48
Run 5 188
Run 9 510
The beam elements model can be seen in Figure 4.3 and is only consisting of linear
elastic elements.
Figure 4.2 Beam element model for the linear elastic material response.
4.2.3 Elasto-plastic analysis
The plastic hinge phenomenon, discussed in section 2.4.2 is modeled with one elasto-
plastic element in the midsection and the rest of the beam with linear elastic elements.
The elasto-plastic element is approximately ten times smaller than the elastic
elements. The numbers of elastic- and elasto-plastic elements are presented for run 1,
5 and 9 in Table 4.3.
Table 4.3 Number of elastic- and plastic beam elements in runs 1, 5 and 9.
Run Number of elastic elements Number of plastic elements
Run 1 32 1
Run 5 188 1
Run 9 510 1
In Figure 4.3 the concept of the beam model is visualized with the elastic and elasto-
plastic parts.
Elastic elements

-- 78 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 63
Elastic elements
Figure 4.3 Beam element for the beam element model in the elasto-plastic analysis.
4.3 2D-solid element model
4.3.1 Element mesh and material properties
A 2D-solid, plane stress model is used to be able to analyze the wall strip in a more
advanced way. The main aim with this model is to simulate the removal of concrete
after the fragmental impact has destroyed parts of the concrete surface.
To avoid stress concentrations in the support area, two support blocks are used to
distribute the stresses and the support conditions are applied to the lower face of them,
see Figure 4.4. These blocks are modelled with steel material properties.
Figure 4.4 2-D solid model with support blocks to avoid stress concentrations.
In the 2-D solid model, four node elements are used, this means that the flexural
resistance depends on the number of elements, since the number of elements affects
the total number of integration points over the cross sections height. But it turned out
that, for 8 elements or more over the height, the cross section can be assumed to reach
its fully plastic capacity.
Elasto-plastic element
q
Support blocks

-- 79 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
64
The input data concerning material properties for the elastic as well as the elasto-
plastic analysis is presented in Table 4.4.
Table 4.4 Input data for the 2-D solid elements for the elastic and elasto-plastic
response.
Elements Young’s modulus [GPa] Yield strength [MPa]
Elastic 3.86 -
Elasto-Plastic 3.86 4.95
4.3.2 Elastic analysis
In the elastic analysis the mesh is equally sized throughout the beam and the number
of elements can be seen in Table 4.5. In Figure 4.5 the 2-D solid model can be seen
with the exception of the plastic part.
Table 4.5 Number of elastic 2-D solid elements.
Number of elastic elements Number of plastic elements
441 none
4.3.3 Elasto-plastic analysis
In the elasto-plastic analysis the mesh is divided into two elastic parts and one elasto-
plastic part placed in the middle of the beam, see Figure 4.5. This is done to achieve
the plastic hinge phenomenon as discussed in section 2.4.2. The number of elements
can be seen in Table 4.6.
Table 4.6 Number of elastic- and plastic 2-D solid elements in the elasto-plastic
analysis.
Number of elastic elements Number of plastic elements
434 7
In Figure 4.5, the 2-D solid model can be seen with the division of the elastic and
elasto-plastic parts and as can be seen the elastic- and elasto-plastic elements are
equally sized.

-- 80 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 65
Elastic elements
Figure 4.5 Element mesh for the 2-D solid model in the plastic analysis with the
elastic- and elasto-plastic parts marked out.
4.4 Simulation of removal of concrete due to fragmental
impact
In this section, a simulation of removal of concrete due to the fragmental impact is
presented. To be able to calculate the penetrations depth for the fragmental impact,
equations are taken from section 2.2.3.2.
When fragments hit the wall strip, penetration will occur and concrete material will be
partly destroyed. This phenomenon causes serious local damage to a certain depth in
the concrete depending on the fragments mass and velocity. The material in regions
close to the holes and in between the holes can no longer contribute to the stiffness.
This loss of stiffness is to be modelled, and to achieve this behaviour in ADINA,
elements on the outer edge of the wall strip will be removed.
The 2-D solid element model is used to model this behaviour, since these elements
enable the removal of the outer edge elements with the remaining elements still
contributing to the stiffness. Both the blast- and fragment load are applied and both
loads are only applied as uniformly distributed loads.
In this project, three methods for simulating the removal of material when the
fragments hit the wall strip have been analysed. A value for all the fragments has been
calculated and a value of about 50 mm is obtained. The different methods for
analyzing the removal are presented below:
1. The cross-section is initially reduced which means that the beam’s moment
capacity and internal resisting force decreases, also the yield strength needs to
be changed to a somewhat higher value, see calculations in Appendix D.
Hence, the beam is analysed with a height of 300 mm instead of the original
350 mm, i.e. an initial removal of 50 mm of concrete, see Figure 4.6.
2. The cross-section is reduced by removing the concrete layer that gets directly
hit by the fragment load at a certain time. This means that the beam’s stiffness
Plastic elements

-- 81 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
66
will decrease substantially and the loss of mass will also influence the
behaviour of the beam. The removal consists of 50 mm concrete at a time
during loading, when the fragmental load duration is over, tremove = 0.22 ms,
See Figure 4.7.
3. The cross-section is reduced by removing stiffness material in the top layer,
while the remaining part will consist of a mass material with a significantly
lower Young’s modulus to simulate destroyed concrete. This means that the
top layer’s stiffness will disappear while the mass will decrease depending on
how much of the mass that is to be removed. The layer that is to be removed is
modelled with two different materials. The concrete which is called the
stiffness material has its original material properties except the weight, will be
removed at the time when the fragmental load duration is over, i.e. tremove =
0.22 ms and another material here called mass material with a low Young’s
modulus will remain. This enables to avoid reduce all the mass of the 50 mm
layer. A removal of 0, 25, 50 and 100 % of the mass is to be analysed. The
amount of removed material for the various cases can be seen in Table 4.8. In
Figure 4.8, a schematic description explains how the removal of stiffness and
mass takes place.
Figure 4.6 Initially reduced cross section with a height of 300 mm.
Figure 4.7 Cross section when removing all mass and stiffness of the top layer.
All the cross sections that is analysed when simulating the removal of concrete due to
the fragmental impact, have the same cross section and material properties as the
beam with a height of 300 mm. These properties can be seen in Table 4.7.
Table 4.7 Material data concerning yield stress and Young’ modulus for the
analysed beam with a height of 300 mm.
fy 5.36 MPa
E 4.15 GPa
For the beam, which is modelled with two materials in the top layer, the cross section
with the different layers is clarified in Figure 4.8. The material and cross section data
50
300
300

-- 82 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 67
for the different layers are presented in Table 4.9. The stiffness material is modelled
with bilinear elasto-plastic material properties in the midsection and the rest with
linear elastic material properties, while the mass material is modelled with linear
elastic material properties throughout the entire length.
Figure 4.8 Cross section when the top layer consisting of a stiffness material and a
mass material and the stiffness material layer will be removed to
simulate the fragmental impact.
Table 4.8 Masses in the top layer that is to be removed and the remaining masses
for the different cases.
Removal of mass
[%]
Removed material
Mass [kg] Modified density [kg/m3]
0 0 2400
25 81 1800
50 162 1200
100 324 0
Table 4.9 Material properties for the two materials which are modelled in the top
layer.
Material Young’s modulus Yield stress (elasto-plastic element)
Stiffness material 4.15 GPa 5.36 MPa
Mass material 0.4 MPa -
300
50 Stiffness material
Mass material
+

-- 83 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
68
5 Results
5.1 Orientation
In this chapter the results from the different analysis are presented and discussed. The
results obtained using ADINA have been compared and verified with the SDOF
results and with simplified hand calculations which also are presented in this chapter.
In all the results presented in this section, the blast load is applied as a uniformly
distributed load and the fragment load is either applied as various numbers of point
loads or as a uniformly distributed load and the difference in behaviour is to be
checked. All figures concerning displacement as a function of time are treating the
midpoint displacement.
The results from linear elastic and ideally plastic analysis are mainly used to verify
the model and to get a better understanding for the structural behaviour. Focus will be
on the results obtained when using bilinear elasto-plastic material response which is
the response closest to reality.
5.2 Linear elastic analysis
5.2.1 Beam element model
As a first step to verify the beam element model, the displacement is compared to the
ones obtained by SDOF and hand calculation. In Figure 5.1, the comparison between
the beam element model, SDOF and hand calculation is presented. As can be seen the
results between the different analysis methods is agreeing very well.
-40
-30
-20
-10
0
10
20
30
40
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
FE beam model
SDOF
Hand calculation

-- 84 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 69
Figure 5.1 Comparison of midpoint displacements for the beam model in ADINA,
SDOF and hand calculation. Blast- and fragment load is applied as a
uniformly distributed load.
In linear elastic analysis, it is possible to super position different loads and get an
identical result as if the loads where applied together at the same time. This can be
explained by the following expression which calculates the elastic displacement:
ᡳ〲〹 㐄 ᠵ⡩
ᠩ〲〹
㎗ ᠵ⡰
ᠩ〲〹
㐄 ᠵ⡩ ㎗ ᠵ⡰
ᠩ〲〹
(5.1)
where
ᠩ〲〹 㐄 㒓‘〔〇.〲〹 · 㒓ᠹ · ᠷ【【 (5.2)
In Figure 5.2 this is presented for the blast- and fragment load and by adding the
contribution from the single responses, the total response is obtained.
Figure 5.2 Midpoint displacements for the single response of the blast- and
fragment load and the blast- and fragment load acting together for the
FE beam element model.
A comparison in displacement between when the fragment load is applied normally
and when the true arrival time, true distance and the inclination of the fragment loads
are considered has been performed. The blast load is in both cases applied as a
uniformly distributed load. In Figure 5.3, run 1B is presented for the two cases, and as
can be seen, the difference is negligible. The small difference can be explained by the
fact that the force inclination is small and therefore the reduced force perpendicular to
the beam strip is almost the same as the original one. The fragment loads are also less
-40
-30
-20
-10
0
10
20
30
40
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Fragment load
Blast load
Blast- and Fragment load

-- 85 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
70
influencing regarding the displacement compared to the blast wave. In further
analysis, the true arrival time, distance and inclined force will not be considered.
Figure 5.3 Comparison in displacement for run 1 B when the load is applied
normally and when the true arrival time, force and inclination are taken
into consideration.
In Figure 5.4 the results from the linear elastic analysis are presented for run 1. As can
be seen, the difference in displacement between the various runs and when the
fragment load is applied as a uniformly distributed load is small. Run 1 A is a worst
case scenario, see section 3.6.3, where the largest fragments are applied in the middle
of the beam with decreasing size towards the supports and that is why this
displacement curve differs somewhat from the other ones.
Since the difference in displacement between the various runs and the uniformly
distributed is so small, a zoomed version of the original results is needed to be able to
distinguish the various curves. The zoomed version is presented in Figure 5.5 and as
the figure shows once again, the difference in displacement is rather small.
-36
-34
-32
-30
-28
-26
6 7 8 9 10 11 12
Displacement [mm]
Time [ms]
Run 1 B
Run 1 B concerning time,
force, and inclination

-- 86 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 71
Figure 5.4 Displacement for the linear elastic analysis Run 1 and when the
fragments are applied as uniformly distributed.
Figure 5.5 Zoomed displacements for the linear elastic analysis, Run 1 and when
the fragments are applied as uniformly distributed.
-40
-30
-20
-10
0
10
20
30
40
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Run 1 A
Run 1 B
Run 1 C
Run 1 D
Run 1 E
Uniformly distributed
-38
-36
-34
-32
-30
-28
-26
6 7 8 9 10 11 12
Displacement [mm]
Time [ms]
Run 1 A
Run 1 B
Run 1 C
Run 1 D
Run 1 E
Uniformly distributed

-- 87 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
72
In Figure 5.6 the displacements for Run 5 are presented and it should be noticed that
the difference among the curves are now much smaller compared to Run 1. It depends
on that it is many smaller point loads applied compared to Run 1 and therefore it
looks more or less like the uniformly distributed case.
Figure 5.6 Displacements for Run 5 and when the fragment loads are applied as
uniformly distributed.
In the zoomed version of Figure 5.6, Figure 5.7, the displacements are presented once
again. The magnitude differences in displacement are approximately 1 mm for Run 5
compared to run 1 where it is approximately 2 mm. Run 5 D has significantly larger
displacement than the other cases which can be described by the subdivision, since the
largest fragment group cannot be further divided than into one single fragment. And if
these large fragments strike in the middle of the beam the displacement will be
somewhat larger.
-40
-30
-20
-10
0
10
20
30
40
50
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Run 5 A
Run 5 B
Run 5 C
Run 5 D
Run 5 E
Uniformly distributed

-- 88 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 73
Figure 5.7 Zoomed displacements for Run 5 and when the fragment loads are
applied as uniformly distributed.
The displacements for Run 9 are presented in Figure 5.8 and it reminds much of the
results obtained in run 5. Still there is some difference between the cases which can be
described by the subdivision once again. However, all cases are though very close to
the uniformly distributed curve, which can be more easily seen in Figure 5.9.
-36
-34
-32
-30
-28
-26
6 7 8 9 10 11 12
Displacement [mm]
Time [ms]
Run 5 A
Run 5 B
Run 5 C
Run 5 D
Run 5 E
Uniformly distributed

-- 89 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
74
Figure 5.8 Midpoint displacements for Run 9 and when the fragment loads are
applied as uniformly distributed.
Figure 5.9 Zoomed midpoint displacements for Run 9 and when the fragment loads
are applied as uniformly distributed.
-40
-30
-20
-10
0
10
20
30
40
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Run 9 A
Run 9 B
Run 9 C
Run 9 D
Run 9 E
Uniformly distributed
-36
-34
-32
-30
-28
-26
6 7 8 9 10 11 12
Displacement [mm]
Time [ms]
Run 9 A
Run 9 B
Run 9 C
Run 9 D
Run 9 E
Uniformly distributed

-- 90 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 75
5.2.1.1 Solid element model
In this chapter, the results from the 2-D solid model with linear elastic material
properties are presented. Since the 2-D solid model mainly is used for simulating the
removal of concrete, it will only be presented with the fragment loads applied as a
uniformly distributed load. The displacements are compared to the ones obtained by
the beam element model in order to verify the model.
In Figure 5.10, the displacements for the 2-D solid model and beam element model
are presented and as can be seen, the curves are similar, but differ marginally
concerning displacement and period.
Figure 5.10 Midpoint displacements for the 2-D solid- and the beam element model
when the fragment loads are applied as uniformly distributed.
5.2.2 Conclusion
The different analyses methods that have been used: beam element model, 2-D solid
model, SDOF and hand calculation have all generated agreeing results in the linear
elastic analysis.
For all the runs and cases that have been performed in the linear elastic analysis it
seems to be a good estimation to apply the fragmental point loads as a uniformly
distributed load. For each further subdivision, the results among them tend to differ
less and come closer to the uniformly distributed one.
-40
-30
-20
-10
0
10
20
30
40
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
FE 2-D solid model
FE beam model

-- 91 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
76
5.3 Plastic analysis
A first step in the plastic analysis is to verify the results obtained by the FE-analysis,
this is achieved by comparing them with the results from SDOF and hand calculation.
In Figure 5.11 the displacements are presented for the blast- and fragment load
separately and the two loads applied together for the three analysis methods.
Figure 5.11 Midpoint displacements with ADINA-,SDOF- and hand calculation
results for the fragment load, the blast load and the blast and fragment
load applied together (c).
In section 5.2.1, it was concluded that for linear elastic material properties it is
possible to super position the contribution from various loads independently of the
load type. This is not possible when analyzing a structure with plastic material
properties, as equation (5.3) describes.
ᡳぃ〹 㐄 䙦ᠵ⡩ ㎗ ᠵ⡰䙧⡰
ᠩぃ〹
㐅 ᠵ⡩
⡰
ᠩぃ〹
㎗ ᠵ⡰
⡰
ᠩぃ〹
(5.3)
where
ᠩぃ〹 㐄 ‘〒〇 · ‘〔〇 · 2 · ᡄぃ〹 · ᠹ (5.4)
-100
-90
-80
-70
-60
-50
-40
-30
-20
-10
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
FE beam model SDOF Hand calculation
Fragment load
Blast load
Blast- and fragment load

-- 92 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 77
If the plastic displacements from different impulse loads are first taken to the power
of two and divided by Cpl and then added, the term ⡰【ㄗ【ㄘ
〄㊑㊇
is not taken into account,
which results in a much smaller displacement.
This can also be verified with Figure 5.11, where the blast- and fragment loads are
applied separately and they do not, if summarized, correspond to the curve which both
loads are applied at the same time.
During the analysis, problems occurred when trying to imitate an ideally plastic
material behaviour, by increasing the Young’s modulus by a factor hundred for both
the elastic- and bilinear plastic elements. The result is presented in Figure 5.12 and as
can be seen, the result differs much if compared to the curve which represents an
increased Young’s modulus and constraints for the elastic nodes. The difference is not
expected and cannot be explained.
Figure 5.12 Midpoint displacements when the elastic- and bilinear elasto-plastic
element’s Young’s modulus is increased with a factor hundred.
5.4 Bilinear elasto-plastic analysis
As a first step in the bilinear elasto-plastic analysis, the FE-results are compared to the
results obtained in SDOF and by hand calculation in order to verify them. This is done
for the blast- and fragment load separately and also when the two loads are applied
together at the same time. The verification is presented in Figure 5.13, Figure 5.14
and Figure 5.15 and as the figures shows, the difference between the results obtained
by the FE analyses differs to the ones obtained in SDOF analysis and hand
-400
-350
-300
-250
-200
-150
-100
-50
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
E11-E11
E11-E11 constraints

-- 93 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
78
calculation. Worth mentioning, the SDOF and hand calculation result are agreeing
well.
Figure 5.13 Comparison in midpoint displacement for the fragment load applied as
uniformly distributed and analysed with ADINA, SDOF and hand
calculation.
Figure 5.14 Comparison in midpoint displacement for the blast load analysed with
ADINA, SDOF and hand calculation.
-14
-12
-10
-8
-6
-4
-2
0
2
4
6
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
FE beam model
SDOF
Hand calculation
-60
-50
-40
-30
-20
-10
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
FE beam model
SDOF
Hand calculation

-- 94 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 79
Figure 5.15 Comparison in midpoint displacement for the blast- and fragment load
analysed with ADINA, SDOF and hand calculation.
The moment obtained in midsection of the beam is presented in Figure 5.16 and it is
compared to the expected moment curve based on the displacements acquired in
SDOF analysis. As can be seen, there are dips in the moment curve for the FE
analysis, which means that the beam does not consume as much energy as the SDOF
moment curve. This will influence the displacement, since the FE analysis needs
larger displacement to reach the same amount of internal energy as the SDOF system,
to level out the external energy. This can be one of the reasons for the substantial
difference in displacement between the two analysis methods.
-120
-100
-80
-60
-40
-20
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
FE beam model
SDOF
Hand calculation

-- 95 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
80
Figure 5.16 Midsection moment as a function of time obtained by the FE analysis
compared to the intended moment obtained in the SDOF analysis.
As Figure 5.16 shows, yielding occurs with tensioned upper side in an early state of
the analysis. The corresponding deformation shape when this happens is illustrated in
Figure 5.17.
-200
-150
-100
-50
0
50
100
150
200
0 5 10 15 20 25 30 35 40
Moment [kNm]
Time [ms]
SDOF analysis
FE analysis

-- 96 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 81
Figure 5.17 Yielding in the beam with tensioned upper side at time t = 1.39 ms.
Figure 5.18 Deformation shapes at time t = 4.72 ms and 7.09 ms where the dashed
lines represents the elastic elements as completely straight.
-6
-5
-4
-3
-2
-1
0
0 0,675 1,35 2,025
Displacement [mm]
x-coordinate [m]
u(x), t=1.39ms
-50
-40
-30
-20
-10
0
0 0,675 1,35 2,025 2,7
Displacement [mm]
Time [ms]
time 4.72 ms
time 7.09 ms

-- 97 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
82
Moment as a function of time for the sections x = 0.25L and x = 0.5L is presented in
Figure 5.19 when both the blast- and fragment load are applied as uniformly
distributed. The yield moment for the plastic element situated in the midsection is
151.6 kNm and as can be seen, the moment in the section x = 0.25L is by far
exceeding this value in a few time intervals. This means, that the model is not
behaving the way it is intended to do and this can also explain the difference between
the FE beam model result and the SDOF-result and hand calculation result which is
presented in Figure 5.15.
Figure 5.19 Moment when the blast- and fragment load are applied as uniformly
distributed in sections X=0.25L and X=0.5L.
With the bilinear elasto-plastic analysis, it is as in the plastic analysis, not possible to
super position loads. In case of an elasto-plastic material response, contribution from
both the elastic- and plastic parts of the material response needs to be included to get
the corresponding displacement. Equation (5.5) is used to calculate the displacement
for the bilinear elasto-plastic response.
ᡳ〲〹.ぃ〹 㐄 ᡳぃ〹 ㎗ ᡳ〲〹
⡰
4 · ᡳぃ〹
(5.5)
where upl is calculated with equation (5.3) and uel is calculated with equation (5.1).
The results from this analysis can be seen in Figure 5.22 with the blast- and fragment
load applied separately and one curve represents the two loads applied together.
-400
-300
-200
-100
0
100
200
0 5 10 15 20 25 30 35 40
Moment [kNm]
Time [ms]
Moment in section X=0.5L
Moment in section X=0.25L

-- 98 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 83
Figure 5.20 Midpoint displacements for the blast- and fragment loads separately
and both the loads applied at the same time as uniformly distributed.
Figure 5.21 Midpoint displacements for run 1 D when the fragments are applied
normally and when the true time, force and inclination of the fragments
are considered.
-120
-100
-80
-60
-40
-20
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Fragment load
Blast load
Blast- and fragment load
-120
-100
-80
-60
-40
-20
0
0 5 10 15 20 25 30 35 40
Dsiplacement [mm]
Time [ms]
Run 1 D
Run 1 D concerning time,
force and inclination

-- 99 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
84
When the fragment load is applied, concerning true time, true force and an inclination,
the result is more or less the same as when the load is applied normally, this is
presented in Figure 5.21. Hence, these factors will be neglected in further analysis.
The elasto-plastic displacements for run 1 are presented in Figure 5.22, where the
broken line represents the fragment load applied as a uniformly distributed load. It
should be noticed that run 1 A simulates a worst case scenario, where the largest point
loads are placed in the middle, with decreasing size towards the supports, i.e. a
triangle load, see section 3.6.3.
The difference in displacement between the various runs differs approximately 10 %
with run 1 A not considered. Consequently, to apply the load applied as uniformly
distributed seems to be a good estimation for the fragment point loads.
Figure 5.22 Midpoint displacements for run 1 with bilinear elasto plastic material
properties.
In Figure 5.23 the displacements for run 5 are presented. If these results are compared
to the ones obtained in run 1, the difference in displacement magnitude in between the
runs is much smaller. The various runs seem to agreeing even better with the
uniformly distributed line.
-120
-100
-80
-60
-40
-20
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Run1 A
Run 1 B
Run 1 C
Run 1 D
Run 1 E
Uniformly distributed

-- 100 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 85
Figure 5.23 Midpoint displacements for run 5 with bilinear elasto plastic material
properties.
5.4.1 Conclusion
The FE-results in the elasto-plastic analysis did not agree well with the results
obtained by SDOF and simplified hand calculation. Two possible reasons for the
substantial difference were discussed previously in this section. Though, the results
when applying the fragmental load as a uniformly distributed load still seems to be a
good approximation.
5.5 SDOF results
Values for elastic and plastic transformation factors for the four different load cases
presented in section 2.8.3.5 and the load cases can once again be seen in Table 5.1.
The corresponding deflection curves when the beam is exposed to only the fragment
load with the appearance according to the four different cases is present in and for
elastic and plastic material response respectively.
-120
-100
-80
-60
-40
-20
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Run 5 A
Run 5 B
Run 5 C
Run 5 D
Run 5 E
Uniformly distributed

-- 101 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
86
Table 5.1 The cases which are analysed in SDOF.
Case 1 Case 3
Case 2 Case 4
Displacements for all the cases with the corresponding transformation factors are
presented in Figure 5.24 and Figure 5.25 with linear elastic and ideally plastic
material responses respectively.
Figure 5.24 Elastic response for beam exposed to fragment load with appearance
corresponding to four different load cases.
-20
-15
-10
-5
0
5
10
15
20
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Case 1
Case 2
Case 3
Case 4
L
L L
L

-- 102 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 87
Figure 5.25 Plastic response for beam exposed to fragment load with appearance
corresponding to four different load cases.
5.6 2-D solid model
5.6.1 Comparison with beam element
In order to verify the results obtained by the 2-D solid model, it is compared to the
results obtained by the beam element model. This is presented in Figure 5.26 and as
can be seen, the displacements from the two models differ somewhat.
-35
-30
-25
-20
-15
-10
-5
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Case 1
Case 2
Case 3
Case 4

-- 103 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
88
Figure 5.26 Midpoint displacement comparison for the beam- and 2-D solid element
model.
Since removal of concrete is to be modelled due to the fragmental impact, it is
required to use an explicit solver, because equilibrium conditions do not need to be
fulfilled when this solver is used. Hence, a control is performed that the two solver
methods, i.e. implicit and explicit integration schemes, give comparable results. As
Figure 5.27 shows, the two solver methods do agree very well.
-120
-100
-80
-60
-40
-20
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
FE beam element
FE 2-D solid element

-- 104 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 89
Figure 5.27 Comparison in midpoint displacement for implicit and explicit solver
when using 2-D solid elements.
5.6.2 Results when removing concrete due to the fragmental impact
The FE-simulation of the removal of concrete due to the fragmental impact is
illustrated in Figure 5.28. As can be seen, the loss of mass in the top layer seems to be
positive for the beam, since the displacement decreases with increasing removed
mass. A corresponding analysis has been performed in the SDOF-program. The result
is illustrated in Figure 5.29, and it seems that the loss of mass has the opposite effect
on the beam compared to the results obtained by the 2-D solid model.
Hand calculations have also been performed in order to understand the behaviour
when beam looses stiffness and mass. The result from this analysis agrees with the
results obtained by the SDOF program, i.e. the difference in displacement when
removing different parts of the top layer should be small and tend to increase when
the removed mass increases. For a detailed derivation of these calculations, see
Appendix I.
-120
-100
-80
-60
-40
-20
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
2-D solid implicit
2-D solid explicit

-- 105 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
90
Figure 5.28 2-D solid displacements for the different analyse methods when
removing material due to the fragmental impact.
Figure 5.29 SDOF displacements for the different analyse methods when removing
material due to the fragmental impact.
-180
-160
-140
-120
-100
-80
-60
-40
-20
0
0 10 20 30 40 50 60 70
Displacement [mm]
Time [ms]
H=350
H=300
100 % killing
50 % killing
25 % killing
0 % killing
-140
-120
-100
-80
-60
-40
-20
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
H=350mm
H=300mm
100 % killing
50 % killing
25 % killing
0 % killing

-- 106 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 91
6 Conclusions
In all the analyses with different material responses it seems to be a good estimation
to apply the fragmental load as a uniformly distributed load. For each further division
of the fragment groups, the displacements in between the cases seems to differ less
and is getting closer to the uniformly distributed displacement.
The force inclination and the true distance between the detonation and the wall have
also been investigated, and the difference was very small compared to applying the
fragments as a vertical load with a distance of 5 m between the bomb and the wall.
Hence, the fragment load is well approximated assuming a uniformly distributed load
with a constant distance between the wall and the bomb, i.e. R = 5 m.
In the elasto-plastic analysis, the beam does not behave as it is intended to do. The
elastic part of the beam is exposed to moments more than the doubled yield moment
in the elasto-plastic element in the mid section. Using elasto-plastic elements over the
entire length of the beam would probably result in a more realistic behaviour of the
beam.
The simplified FE-methods for simulating the fragmental impact used in this thesis do
not correspond to the expected behaviour which is generated by the SDOF and hand
calculation. The analysis indicates that something is missing when using SDOF. The
differences is probably due to that κMP in SDOF does not correspond to the real
response. Hence, this simple way to model such a complex problem needs to be
further investigated and in this thesis it is mainly presented as a way to simulate the
fragmental impact.
Removing concrete in the FE analysis resulted in less displacement than if the
concrete was not removed. However, SDOF and hand calculations resulted in the
opposite effect, i.e. removal of concrete increases the displacements. This
phenomenon cannot be explained in this thesis and further research is suggested.

-- 107 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
92
7 References
ADINA (2008): Theory and Modelling Guide, Vol 1: ADINA Solids & Structures
Report ARD 08-7, ADINA R & D, Inc., Watertown, USA, 2008.
Al-Emrani, M. Engstöm, B. Johansson, M. Johansson. P. (2006): Bärande
konstruktioner. Chalmers University of Technology, Division of Structural
Engineering, Göteborg, Sweden, 2006.
Craig, R. Kurdila, A. (2006): Fundamentals of Structural Dynamics. John Wiley &
Sons, Inc, New Jersey, USA.
Engström. B. (2008): Design and analysis of continuous beams and columns.
Chalmers University of Technology, Division of Structural Engineering, Göteborg,
Sweden, 2008.
Johansson. M. Laine. L. (2009): Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 3: Kapacitet hos byggnader. MSB 2009.
Avdelningen för utbildning, övning och beredskap. Karlstad. Sweden 2009.
Lundh, H. (2000): Hållfasthetslära. Studentlitteratur, KTH, Stockholm. Sweden
Nyström, U. (2008): Concrete Structures Subjected to Blast and Fragment Impacts.
Thesis for the Degree of Licentiate of Engineering 2008:4. Division of Structural
Engineering, Chalmers University of Technology, Göteborg, Sweden, 2008.
Nyström, U. (2006): Design with regard to explosions. Master Thesis 2006:14.
Division of Structural Engineering, Chalmers University of Technology, Göteborg,
Sweden, 2006.
Räddningsverket (2006) Skyddsrumsregler SR, SR 06. Räddningsverket, Karlstad,
Sweden.

-- 108 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 93
Appendix A
Table A.1 Material properties for concrete quality C25/30
C25/30
Compressive strength, fck 25 MPa
Tensile strength, fctm 2.6 MPa
Ultimate strain, εcu 0.0035
Modulus of elasticity, Ecm 31 GPa
Table A.2 Material properties for reinforcement quality B500B
B500B
Yielding stress, fyk 500 MPa
Yielding strain, εyk 0.0025
Modulus of elasticity, Es 200 GPa
Table A.3 Geometrical properties of the beam
Length of beam, L 2.7 m
Height of beam, h 0.35m
Width of strip, w 1 m
Area of reinforcement in compression, As’ 1005 mm2/m
Distance from compressed edge to
reinforcement in compression, d’ 0.05 m
Area of reinforcement in tension, As 1005 mm2/m
Distance from compressed edge to
reinforcement in tension, d 0.3 m
Input data in analysis

-- 109 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
94
Appendix B.1
The cracking moment for the concrete section in figure B.1 will be calculated
according to the equations presented in the thesis.
Figure B.1 Double symmetric cross section in state I with strain distribution,
subjected to pure bending.
The location of the centre of gravidity for a double symmetric, uncracked section is:
ᡶ〰〴 㐄 ᡠ
2 㐄 0.35
2 㐄 0.175 ᡥ (B-1)
The moment of inertia is calculated without consider the reinforcement as:
ᠵ【 㐄 ᠨᠴ⡱
12 㐄 1 · 0.35⡱
12 㐄 3.57 · 10⡹⡱ ᡥ⡲ (B-2)
The cracking stress in concrete is equal to:
…〰ぇ,぀〨け 㐄 ᡘ〰ぇ぀ 㐄 2.6 ᠹᡂᡓ (B-3)
The cracking moment can now be calculated as:
ᠹ〰ぅ 㐄 ᡘ〰ぇ぀ · ᠵ【
ᡶ〰〴
㐄 2.6 · 10⡴ · 3.57 · 10⡹⡱
0.175 㐄 53.1 ᡣᡀᡥ (B-4)
M
xgc
d’
d
z	Center of gravity
(CG)
εc2
εc1
εs’
εs
Calculation of cracking moment

-- 110 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 95
Appendix B.2
The moment for when the tension reinforcement yields in the cracked section seen in
figure B.2 will here be calculated.
Figure B.2 Double symmetric cross section in state II with strain distribution,
subjected to pure bending.
The expression for the location of the neutral layer for a cracked section was derived
in section (xx) and can be calculated as:
ᡔ · ᡶ⡰
2 ㎗ 䙦 ㎘ 1䙧ᠧう
䖓 䙦ᡶ ㎘ ᡖ䖓䙧 ㎘ · ᠧう䙦ᡶ ㎘ ᡖ䙧 㐄 0 (B-5)
፲ ᡶ 㐄 0.056 ᡥ
where α is the ration between the modulus of elasticity of steel and concrete:
㐄 ᠱう
ᠱ〰぀
㐄 200
31 㐄 6.45 (B-6)
The moment of inertia for a concrete section in state II is calculated as:
ᠵ【【 㐄 ᡔᡶ⡱
3 ㎗ 䙦 ㎘ 1䙧ᠧう
䖓 䙦ᡶ ㎘ ᡖ䖓䙧⡰ ㎗ ᠧう䙦ᡖ ㎘ ᡶ䙧⡰ 㐄 (B-7)
㐄 0.056⡱
3 ㎗ 䙦6.45 ㎘ 1䙧 · 1005 · 10⡹⡴ · 䙦0.056 ㎘ 0.05䙧⡰ ㎗ 6.45 · 1005
· 10⡹⡴ · 䙦0.3 ㎘ 0.056䙧⡰ 㐄 4.45 · 10⡹⡲ ᡥ⡲
The tensioned reinforcement is located at a distance zs from the neutral layer:
ᡸう 㐄 ᡖ ㎘ ᡶ 㐄 0.3 ㎘ 0.056 㐄 0.244 ᡥ (B-8)
The moment for when the reinforcement yields can now be calculated as:
ᠹうぃ〹 㐄 ᡘげ〸ᠵ【【
ᡸう
㐄 500 · 10⡴ · 4.45 · 10⡹⡲
6.45 · 0.244 㐄 141.146 ᡣᡀᡥ (B-9)
εc2
εs
εs’
εc1
x
M
σc2
As’
z
σc1
As
Acc
Fictive concrete stress
…〰䙦ᡸう䙧 㐄 …う
䖓/
…〰䙦ᡸ䙧 㐄 ᠱ〰 –〰䙦ᡸ䙧
…〰䙦ᡸう䙧 㐄 …う/
Calculation of yielding moment

-- 111 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
96
Appendix B.3
The ultimate moment for the section in figure(xx) will be calculated
Figure B.3 Double symmetric cross section in state II with strain distribution,
subjected to pure bending.
The expression for the location of the neutral layer when the ultimate concrete strain
is reached was derived in section 2.5.2.4 and can be calculated as:
ᡘ〰〸 · ᡔ · 〰 · ᡶ ㎗ ᠱう · 䙦ᡶ ㎘ ᡖ䖓䙧
ᡶ · –〰え · ᠧう
䖓 ㎘ ᡘげ〸 · ᠧう 㐄 0 (B-10)
፲ ᡶ 㐄 0.037 ᡥ
The yield strain for the reinforcement can be calculated according to equation (xx).
–うげ 㐄 ᡘげ〸
ᠱう
(B-11)
The strain in the compressed and tensioned reinforcement can now be calculated
according to equation B-12 and equation B-13 and the assumptions can be verified.
–う 㐄 䙦ᡖ ㎘ ᡶ䙧
ᡶ –〰え 㐄 䙦0.3 ㎘ 0.037䙧
0.037 · 0.0035 㐄 0.025 㐐 –うげ ᡁᠷ! (B-12)
–う
䖓 㐄 䙦ᡶ ㎘ ᡖ䖓䙧
ᡶ –〰え 㐄 䙦0.037 ㎘ 0.05䙧
0.037 · 0.0035 㐄 ㎘0.001229 㐉 –うげ ᡁᠷ! (B-13)
The moment, Mpl, for when the ultimate limit of the section is reached can now be
calculated by consider the moment around the tensioned reinforcement according to
the following equation:
ᠹぃ〹 㐄 〰 · ᡘ〰〸 · ᡔ · ᡶ · 䙦ᡖ ㎘ ‐〰 · ᡶ䙧 ㎗ –う
䖓 · ᠱう · ᠧう
䖓 · 䙦ᡖ ㎘ ᡖ䖓䙧 㐄 (B-14)
x
fck
‐ · ᡶ
· ᡘ〰〰
ᠲ〰 㐄 · ᡘ〰〸 · ᡔ · ᡶ
ᠲう䖓 㐄 …う
䖓 · ᠧう
䖓
ᠲう 㐄 …う · ᠧう
εcu
εs’
εs
As’
Acc
As
M
Calculation of ultimate moment

-- 112 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 97
㐄 0.81 · 25 · 10⡴ · 0.037 · 䙦0.3 ㎘ 0.416 · 0.037䙧 ㎘ 0.001229
· 200 · 10⡷ · 1005 · 10⡹⡴ · 䙦0.3 ㎘ 0.05䙧
㐄 151.6 ᡣᡀᡥ

-- 113 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
98
Appendix C
The internal force for when the ultimate moment (calculated in appendix B.3) is
reached in the mid section can be calculated according to equation C-1.
ᡄぃ〹 㐄 8 · ᠹぃ〹
ᠸ 㐄 8 · 151.6
2.7 㐄 449.2 ᡣᡀ (C-1)
The stiffness can be calculated according to linear elastic theory, the modulus of
elasticity and the moment of inertia in state II were calculated in Appendix B.
ᠷ【【 㐄 384ᠱ〰぀ᠵ【【
5ᠸ⡱ 㐄 384 · 31 · 10⡷ · 4.45 · 10⡹⡲
5 · 2.7⡱ 㐄 53.8 ᠹᡀ
ᡥ (C-2)
The deflection in the mid section can now be expressed as function of the applied load
and the stiffness as:
ᡳぃ〹 㐄 ᡂぃ〹
ᠷ【【
㐄 449.2 · 10⡱
53.8 · 10⡴ 㐄 0.00835ᡥ 㐄 8.35ᡥᡥ (C-3)
Load-displacement relation

-- 114 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 99
Appendix D
In this Appendix, a representative Young’s modulus for state I and state II and the
yield stress is calculated for both the wall strip with H = 350 and H = 300 mm.
H = 350 mm
The Young’s modulus is calculated by reducing the Young’s modulus for concrete
with a factor gamma, which is the quotient of the moment of inertias from state I and
state II to get a representative value for the two states.
ᠱ〰.【【 㐄 ᠱ〰぀
γ (D-1)
where γ is:
γ 㐄 ᠵ【
ᠵ【【
(D-2)
II and III are the moment of inertias for the state 1 and state 2 respectively and is
calculated with expressions (D-2) and (D-7) respectively. This gives:
γ 㐄 8.03 (D-3)
And the corresponding Young’s modulus for the two states becomes:
ᠱ〰.【【 㐄 ᠱ〰぀
γ 㐄 31 ᠳᡂᡓ
8.03 㐄 3.86 ᠳᡂᡓ (D-4)
The yield stress is calculated by the following expression:
ᡘげ 㐄 ᠹえ
ᡒ (D-5)
Mu Ultimate moment capacity, calculated with expression (D-14)
ᡘげ Stress when the beam goes from linear elastic to ideally plastic response
Z Flexural resistance
Since beam element in ADINA at maximum have seven integration points, the
flexural resistance needs to be calculated with this kept in mind. The following
expression is used:
ᡒ 㐄 ᠨ · 䙸ᠴ⡰
4 ㎘ ᡗ⡰
12䙹 (D-6)
With H = 0.35 m, B = 1 m and e = h/6 the yield stress becomes:
ᡘげ 㐄 ᠹえ
ᡒ 㐄 151.6 ᡣᡀᡥ
13
54 · ᡔᡠ⡰
㐄 5.141 ᠹᡂᡓ (D-7)
Material and cross section constants

-- 115 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
100
It turned out that the beam element model in ADINA did not reach the intended
internal resisting force, therefore the yield stress was further modified with 4.22 %:
ᡘげ
䖓 㐄 ᡘげ · 1.0422 㐄 5.358 ᠹᡂᡓ (D-8)
The value above is used in the elasto-plastic analysis for the beam element model. For
the 2-D solid element model, the same Young’s modulus is being used as the one
presented above in equation (D-4), but the yield stress is calculated by assuming a
stress state corresponding to a fully plastic cross section. The yield stress for the 2-D
solid model then becomes:
ᡘげ 㐄 ᠹえ
ᡒ 㐄 151.6 ᡣᡀᡥ
ᡔᡠ⡰
4
㐄 4.95 ᠹᡂᡓ (D-9)
By using the same equations as presented above in this Appendix, but inserting H =
300 instead of 350, the following material and cross section parameters are obtained
for the 2-D solid model:
ᠱ〰.【【 㐄 4.15 ᠳᡂᡓ (D-10)
ᡘげ 㐄 5.36 ᠹᡂᡓ (D-11)

-- 116 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 101
Appendix E
In this appendix, simplified hand calculations concerning displacement are presented
in a more detailed way. The formulas used in this appendix are taken from Nyström,
2006 and for a more detailed derivation the reader is referred to Nyström, (2006).
In order to verify the results obtained by the FE model, hand calculations are
performed for both the linear elastic analysis as well as the bilinear elasto-plastic
material response. In table E.1, the data concerning the geometry, density and
Young’s modulus are presented.
Table E.1 Input data for the hand calculations concerning displacement.
Length (l) 2.7 m
Width (w) 1.0 m
Height (h) 0.35 m
Density (ρ) 2400 kg/m3
Young’s modulus (Ecm) 31 GPa
The total mass, M is to be calculated as the volume of concrete times the density, see
equation (E-1).
M 㐄 l · w · h · ρ 㐄 2268 kg (E-1)
The loads generated by the reference bomb are in the hand calculations applied as
impulse loads and the magnitude of these loads are presented in table E.2.
Table E.2 Impulse loads.
Blast load (IBlast) 7546 Ns
Fragment load (IFragment) 3272 Ns
Linear elastic analysis
In case of linear elastic material properties, the displacement for different load cases
can be super positioned, which is not possible for the bilinear elasto-plastic material
response. In table E.3, the transformations factors for mass, load and internal force are
presented for the simply supported beam which is considered in this project.
Hand calculations for
displacements

-- 117 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
102
Table E.3 Transformations factors for the linear elastic hand calculations.
κP κM κK κMP κKP
0.640 0.504 0.640 0.787 1.0
By following formula the displacement can be calculated:
u⤕⤢⤑⤩⤰⤙⤓ 㐄 I⢆⤢⤑⤩⤰ ㎗ I⢐⤨⤑⤗⤣⤕⤤⤰
√κ⢗⤀ · 㒓M · K⢓⢓
(E-2)
where KII is calculated by equation (E-3):
K⢓⢓ 㐄 384 · E⤓⤣ · I⢓⢓
5 · l⡱ 㐄 53.814 MN
m
(E-3)
III is taken from Appendix B and is equal to:
I⢓⢓ 㐄 4.449 · 10⡹⡲m⡲
This calculation gives a displacement of uelastic=0.0349 m and this value is compared
to the results obtained by ADINA and SDOF in section 5.2.
Ideally plastic analysis
In case of ideally plastic material properties, the transformations factors presented in
table E.4 are being used.
Table E.4 Transformations factors for the ideally plastic hand calculations.
κP κM κK κMP κKP
0.5 1/3 0.5 2/3 1.0
The following equation is used to calculate the displacement:
u⤦⤢⤑⤩⤰⤙⤓ 㐄 䙦I⢆⤢⤑⤩⤰ ㎗ I⢐⤨⤑⤗⤣⤕⤤⤰䙧⡰
κ⢕⤀ · κ⢗⤀ · 2 · R⤣ · M
(E-4)
This gives a displacement of:
u⤦⤢⤑⤩⤰⤙⤓ 㐄 0.0862 m (E-5)
Bilinear elasto-plastic analysis
When calculating the displacement with the bilinear elasto-plastic material response,
the contribution from both the elastic and the plastic part is calculated and
summarized. The transformation factors for the plastic material properties are
presented in table E.4.

-- 118 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 103
By use of the equation for displacement in case of ideally plastic material properties,
the displacement for the plastic part is expressed as:
u⤦⤢⤑⤩⤰⤙⤓ 㐄 䙦I⤁⡸I⤀䙧⡰
κ⢕⤀ · κ⢗⤀ · 2 · R⤣ · M
(E-6)
From the cross section analysis, the ultimate Moment capacity, Mpl is equal to:
M⤀⢖ 㐄 151.6 kNm (E-7)
The internal resisting force then becomes:
R⢗ 㐄 8 · M⤀⢖
L 㐄 449.2 kN (E-8)
This gives a plastic displacement equal to:
u⤦⤢⤑⤩⤰⤙⤓ 㐄 0.0862 m (E-9)
The total displacement taking both the elastic and plastic response under consideration
is calculated by following expression:
u⤕⤢⤑⤩⤰⤥⡹⤦⤢⤑⤩⤰⤙⤓ 㐄 u⤦⤢⤑⤩⤰⤙⤓ ㎗ u⤕⤢⤑⤩⤰⤙⤓⡰
4 · u⤦⤢⤑⤩⤰⤙⤓
㐄 0.0897 m (E-10)

-- 119 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
104
Appendix F
During the analysis, problems occurred in ADINA which resulted in values not
comparable to the ones obtained by SDOF and hand calculations. To solve these
problems many different things were tried and when using explicit solver instead of
the implicit, it turned out that for beam elements with linear elastic material properties
the explicit solution generates displacements around 14 % smaller compared to the
ones obtained by the implicit solver. The curves for the two different solver methods
and the displacement obtained by hand calculation can be seen in figure F.1. The
maximum value obtained by the implicit method corresponds well to the hand
calculated value. As the figure also shows, the period seems to be somewhat delayed
for the explicit method compared to the implicit.
Figure F.1 Difference in displacements for implicit- and explicit solver with linear
elastic material properties.
In theory, it is possible with a small difference between the two solver methods, but
not as large as the results turned out to be in this project.
The results differ also for plastic- and for elastic material response as can be seen in
figure F.2 and figure F.3.
-0,04
-0,03
-0,02
-0,01
0
0,01
0,02
0,03
0,04
0 0,005 0,01 0,015 0,02 0,025 0,03 0,035 0,04
Displacement [m]
Time [s]
Implicit
Explicit
Hand calculation
Error in Adina when analyzing the
dynamic problem with the explicit
solver with beam elements

-- 120 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 105
Figure F.2 Difference in displacements for implicit- and explicit solver with plastic
material properties.
Figure F.3 Difference in displacements for implicit- and explicit solver with
bilinear elasto-plastic material properties.
-90
-75
-60
-45
-30
-15
0
0 5 10 15 20 25 30 35 40
Dsiplacement [mm]
Time [ms]
Implicit
Explicit
SDOF
Hand calculation
-120
-100
-80
-60
-40
-20
0
0 5 10 15 20 25 30 35 40
Displacement [mm]
Time [ms]
Implicit
Explicit
Hand calculation
SDOF

-- 121 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
106
Appendix G
When the wall strip was analysed in ADINA, a controlled deformation was performed
for the model with two controlled point loads acting on the plastic elements, see
Figure G.1. This was done in order to control that the material properties correspond
to the input data and was only analysed for the model with two linear elastic parts and
one bilinear elasto-plastic in the middle.
Figure G.1 Controlled deformation for the bilinear elasto-plastic model with two
point loads acting on the elasto-plastic nodes.
When controlling the behaviour for different number of elements, following numbers
were used: 3, 5, 9, 27, 45, 75, 135, 225 and 375. The internal resisting forces for the
corresponding number of elements are presented in Figure G.2. The resisting force
obtained by the analytical solution is also shown in Figure G.2, and as can be seen, it
differs approximately 4 % from the value that the curve tends to reach. This error in
ADINA can not be explained and to be able to get accurate results the calculated yield
stress is increased with a factor 0.0422.
P	P
Different results obtained in
ADINA when using different
number of elements

-- 122 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 107
Figure G.2 Internal resisting force for the bilinear elasto-plastic model with
different number of elements compared to the resisting force obtained
by the analytical method.
0
20000
40000
60000
80000
100000
120000
140000
160000
180000
0 50 100 150 200 250 300 350 400
Internal resisting force
Number of elements
ADINA
Analytical

-- 123 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
108
Appendix H
In this appendix is moment and reaction forces presented in figures for the linear
elastic and the bilinear elasto-plastic material properties. The moments are presented
in three points along the beam as a function of time. The three are: the midpoint, a
quarter of the beams length, i.e. 0.675 m and three quarters of the beams length, i.e.
2.025.
Due to amount of data, only a few runs chosen are and analysed. The following runs
will be presented: run 1 A, run 1 B, run 5 D and uniformly distributed.
Linear elastic results
In the elastic analysis, the fragmental load is applied separately to see how the beam’s
behaviour differs between the different runs and when the load is applied as a
uniformly distributed.
Figure H.1 Controlled deformation for the bilinear elasto-plastic model with two
point loads acting on the elasto-plastic nodes.
-800
-600
-400
-200
0
200
400
600
800
0 5 10 15 20 25 30 35 40
Moment [kNm]
Time [ms]
Run 1 A L/4
Run 1 A L/4
Moment and reaction forces

-- 124 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 109
Figure H.2 Controlled deformation for the bilinear elasto-plastic model with two
point loads acting on the elasto-plastic nodes.
Figure H.3 Controlled deformation for the bilinear elasto-plastic model with two
point loads acting on the elasto-plastic nodes.
-1000
-800
-600
-400
-200
0
200
400
600
800
1000
0 5 10 15 20 25 30 35 40
Moment [kNm]
Time [ms]
Run 1 A L/2
Run 1 A L/2
-800
-600
-400
-200
0
200
400
600
800
0 5 10 15 20 25 30 35 40
Moment [kNm]
Time [ms]
Run 1 A 3L/4
Run 1 A 3L/4

-- 125 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
110
Figure H.4 Controlled deformation for the bilinear elasto-plastic model with two
point loads acting on the elasto-plastic nodes.
Figure H.5 Controlled deformation for the bilinear elasto-plastic model with two
point loads acting on the elasto-plastic nodes.
-3000
-2000
-1000
0
1000
2000
3000
0 5 10 15 20 25 30 35 40
Reaction force [kN]
Time [ms]
L=0
L=2.7
-500
-400
-300
-200
-100
0
100
200
300
400
500
0 5 10 15 20 25 30 35 40
Moment [kNm]
Time [ms]
Elastic L=0.25L Elastic L=0.25L

-- 126 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 111
Figure H.6 Controlled deformation for the bilinear elasto-plastic model with two
point loads acting on the elasto-plastic nodes.
Figure H.7 Controlled deformation for the bilinear elasto-plastic model with two
point loads acting on the elasto-plastic nodes.
-600
-400
-200
0
200
400
600
0 5 10 15 20 25 30 35 40
Moment [kNm]
Time [ms]
Elastic L=0.5L
Elastic L=0.5L
-500
-400
-300
-200
-100
0
100
200
300
400
500
0 5 10 15 20 25 30 35 40
Moment [kNm]
Time [ms]
Elastic L=0.75L Elastic L=0.75L

-- 127 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
112
Figure H.8 Controlled deformation for the bilinear elasto-plastic model with two
point loads acting on the elasto-plastic nodes.
-2000
-1500
-1000
-500
0
500
1000
1500
2000
0 5 10 15 20 25 30 35 40
Reaction [kN]
Time [ms]
X=0
X=2.7

-- 128 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 113
Appendix I
Consider figure I.1 where a simply supported beam is exposed to a distributed load
q(t). The beam will, after a certain time t1, loose a certain part of its mass. The total
load can be subdivided into two parts; one where the mass is indifferent and the other
where the mass has been decreased.
Figure I.1 Impulse loaded, simply supported beam where part of the mass is
removed.
The impulse for each of the parts can be calculated as:
ᠵ⡩ 㐄 㔅 ᠲ䙦ᡲ䙧ᡖᡲ
ぇㄗ
ぇㄖ
(I-1)
t
t
F(t)
I1
I2
t1 t2
m0
m1
t1
m(t)
t0
t0
L
F(t)=q(t)·L
F(t)
m(t) v(t)
Hand calculations for deflections
when mass is reduced during
impulse loading

-- 129 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
114
ᠵ⡰ 㐄 㔅 ᠲ䙦ᡲ䙧ᡖᡲ
ぇㄘ
ぇㄗ
(I-2)
The momentum just before the beam loses a part of its mass can be written:
ᡨ⡩ 㐄 ᡥ⡨ · ᡴ⡩ 㐄 ᡥ⡨ · ᡴ⡨ ㎗ ᠵ⡩ 㐄 ᠵ⡩ ፲ ᡴ⡩ 㐄 ᠵ⡩
ᡥ⡨
(I-3)
The kinetic energy at this energy can, at this time, be calculated as:
ᡉ⡩ 㐄 ᡥ⡨ · ᡴ⡩
⡰
2 㐄 ᡥ⡨ · ᠵ⡩
⡰
2 · ᡥ⡨
⡰ 㐄 ᠵ⡩
⡰
2 · ᡥ⡨
(I-4)
The beam will now lose a certain part of its mass. In this case one seventh of the
height of the beam will be affected by the mass removal and a certain proportion α of
the mass in this layer will be decreased. The remaining part of the mass, m1, is
expressed by a factor β times the initial mass, m0. The mass removal is illustrated by
the equations below:
0 㐉 㐉 1
‐ 㐄 7 ㎘
7 (I-5)
ᡥ⡩ 㐄 ‐ · ᡥ⡨
By assuming that the energy in the beam is uniformly distributed over the volume, the
energy after the mass removal has to decrease with the same proportion as the mass
was decreased. The energy after the loss of mass can now be written:
ᡉ⡰ 㐄 ‐ · ᡉ⡩ 㐄 ‐ · ᠵ⡩
⡰
2 · ᡥ⡨
(I-6)
We can now calculate the velocity of the remaining part directly after the mass loss
as:
‐ · ᠵ⡩
⡰
2 · ᡥ⡨
㐄 ‐ · ᡥ⡨ · ᡴ⡰
2 ፲ ᡴ 㐄 ᠵ⡩
ᡥ⡨
㐄 ᡴ⡩ (I-7)
We can see that the velocity will be conserved due to the fact that the kinetic energy is
directly proportional to the mass.
The momentum in the body at time t2 when the load is removed can be expressed as:
ᡨ⡰ 㐄 ᡥ⡩ · ᡴ⡰ 㐄 ᡥ⡩ · ᡴ⡩ ㎗ ᠵ⡰ (I-8)
The velocity at time t2 can now, by combine equation (I-7) and (I-8) be written as:
ᡴ⡰ 㐄 ᠵ⡩
ᡥ⡨
㎗ ᠵ⡰
‐ · ᡥ⡨
(I-9)

-- 130 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 115
The kinetic energy, or the externally applied energy, can now finally be calculated as:
ᡉ⡰ 㐄 ᡉげ 㐄 ᡥ⡩ · ᡴ⡰
⡰
2 㐄
‐ · ᡥ⡨ · 㐶 ᠵ⡩
ᡥ⡨ ㎗ ᠵ⡰
‐ · ᡥ⡨㑀
⡰
2
(I-10)
The displacements can now be calculated for elastic, plastic and elasto-plastic
material response with the equations below.
ᡳ〲〹 㐄 㒗‐ · ᡥ⡨,〲〹 · 㐶 ᠵ⡩
ᡥ⡨,〲〹 ㎗ ᠵ⡰
‐ · ᡥ⡨,〲〹㑀
⡰
ᠷ
where ᡥ⡨,〲〹 㐄 ᡥ⡨ · ‘〔〗,〲〹 (I-11)
ᡳぃ〹 㐄
‐ · ᡥ⡨,ぃ〹 · 㐶 ᠵ⡩
ᡥ⡨,ぃ〹 ㎗ ᠵ⡰
‐ · ᡥ⡨,ぃ〹
㑀
⡰
2 · ᡄぃ〹
where ᡥ⡨,ぃ〹 㐄 ᡥ⡨ · ‘〔〗,ぃ〹 (I-12)
ᡳ〲〹,ぃ〹 㐄 ᡳぃ〹 ㎗ ᡳ〲〹
⡰
4 · ᡳぃ〹
(I-13)

-- 131 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
116
Appendix J
Transformation factors for load and mass for a simply supported beam can usually be
solved from the analytical expressions presented in Chapter 2. The expressions
require however knowledge about the deformed shape which, for more complex load
situations, can be hard to find.
Consider load case three and four in figure J.1. When having plastic material
response, the deformed shape is known and the transformation factors can be solved
from the equations presented in Chapter 2. For elastic material response however, the
deformed shape is more complex and an analytical solution is not easy to find. An
alternative solution for the transformation factors is however possible.
In commercial software for structure analysis, it is possible to plot the deflection
along a simply supported beam with elastic response subjected to a certain load. In
this case ADINA was used.
The shape of the deflection can then be satisfactory described by a 4th order
polynomial. When the expression of the deformed shape, u(x), is known for the actual
load case, it can be inserted in the equations presented in Chapter 2 together with the
expression for the load, q(x), and the transformation factors can be solved.
Figure J.1 Load case 3 and 4.
L L
q(x)
x
q(x)
Case 4	Case 3
Plastic response
x
Elastic response
us us
u(x) u(x)
Alternative method to derive
tranformation factors

-- 132 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 117
Appendix K
The transformation factors for ideal plastic and ideal elastic material response were
derived from the condition that the deformed shape and the material response were the
same independently of the magnitude of the load and the deflection.
When the material response changes during the deflection, as for an elastic-plastic
material response, the transformation factor has to be changed in order to perform
calculations based on the proper shape of deformation, i.e. the proper internal energy.
The transformation factor for the load κF is the same even if the material response
changes but the transformation factor for the mass κM will change which result in a
change of the combined transformation factor κMF.
The transformation factor for the mass is larger for elastic material response than for
plastic material response which can be seen as that the effective mass will decrease
when the response changes from elastic to plastic. When using the central difference
method to calculate the deflection for an SDOF-system the effective mass has to be
changed during the calculation. A sudden change of the effective mass will however
result in a sudden loss of internal energy which might result in unwanted effects. This
is why the transformation factor for the mass cannot be changed suddenly.
A better way to describe the transition from elastic- to plastic material response is to
change the transformation factor and the effective mass gradually. Since the material
response is a function of the internal resistance the transition should also be a function
of the internal resistance.
Figure K.1 illustrates how such a transition can be done. For a certain resistance
where the deformed shape starts to change from elastic towards plastic, the
transformation factor starts its transition too. A linear transition is the simplest one but
more advanced functions for the transition can of course be used, the linear transition
is however used in this project.
Another choice that has to be considered is when, at what resistance, the
transformation should start. The purpose of the transition is to imitate the reality as
good as possible which is why the start point of the transition should be consistent
with the behaviour of the material
For reinforced concrete, it can be assumed that the material response will start to go
from elastic towards plastic at the same internal resistance as when the reinforcement
yields.
Transition from elastic to plastic
material response in SDOF

-- 133 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
118
Figure K.1 Linear transition for transformation factors.
The results obtained for kappa plastic, kappa elastic and kappa as function of the
resistance are presented in figure K.2
Figure K.2 Deflection as function of time when using kappa plastic, kappa elastic
and kappa as function of the resistance. The same load is used.
-100
-90
-80
-70
-60
-50
-40
-30
-20
-10
0
0 5 10 15 20 25 30
Displacement [mm]
Time [ms]
kappa plastic
kappa elastic
kappa = f(R)
κMFpl
R
Rpl
R1
upl	u1
Rpl	R1
u
R
κMFel
κMF
Linear transition

-- 134 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 119
The effective mass as function of time when changing the kappa value is presented in
figure K.3. As can be seen, the duration of the transition is very short but it is still not
a sudden loss of energy.
Figure K.3 Effective mass as function of time.
1500
1550
1600
1650
1700
1750
1800
0 0,5 1 1,5 2 2,5 3
Effectiv mass [kg]
Time [ms]

-- 135 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
120
Appendix L
DATABASE NEW SAVE=NO PROMPT=NO
FEPROGRAM ADINA
CONTROL FILEVERSION=V85
*
FEPROGRAM PROGRAM=ADINA
*
COORDINATES POINT SYSTEM=0
@CLEAR
1 0 0 0 0
2 0 1.34 0 0
3 0 1.36 0 0
12 0 2.7 0 0
13 0 0 1 0
@
LINE STRAIGHT NAME=1 P1=1 P2=2
LINE STRAIGHT NAME=2 P1=2 P2=3
LINE STRAIGHT NAME=3 P1=3 P2=12
FIXITY NAME=SIMPLY1
@CLEAR
'X-TRANSLATION'
'Y-TRANSLATION'
'Z-TRANSLATION'
@
FIXITY NAME=SIMPLY2
@CLEAR
'X-TRANSLATION'
'Z-TRANSLATION'
@
Indata file for ADINA with elasto-
plastic material response

-- 136 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 121
FIXBOUNDARY POINTS FIXITY=ALL
@CLEAR
1 'SIMPLY1'
12 'SIMPLY2'
@
CROSS-SECTIO RECTANGULAR NAME=1 WIDTH=0.350000000000000,
HEIGHT=1.00000000000000 SC=0.00000000000000 TC=0.00000000000000,
TORFAC=1.00000000000000 SSHEARF=0.00000000000000,
TSHEARF=0.00000000000000 ISHEAR=NO SQUARE=NO
************************** MATERIAL *************************
MATERIAL ELASTIC NAME=1 E=3.86E9 NU=0.200000000000000,
DENSITY=2400.00000000000 ALPHA=0.00000000000000 MDESCRIP='concrete'
MATERIAL PLASTIC-BILINEAR NAME=2 E=3.86E9 NU=0.2 YIELD=5.358e6
DENSITY=2400
************************** ELEMENTS *****************************
EGROUP BEAM NAME=1 MATERIAL=1 RINT=7 SECTION=1
EGROUP BEAM NAME=2 MATERIAL=2 RINT=7 SECTION=1
RESULTS=FORCES
SUBDIVIDE LINE NAME=1 MODE=DIVISIONS NDIV=14
RATIO=1.00000000000000 PROGRESS=GEOMETRIC CBIAS=NO
@CLEAR
1
3
@
SUBDIVIDE LINE NAME=2 MODE=DIVISIONS NDIV=1
RATIO=1.00000000000000 PROGRESS=GEOMETRIC CBIAS=NO
@CLEAR
2
@

-- 137 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
122
GLINE NODES=2 AUXPOINT=13 NCOINCID=ALL GROUP=1
@CLEAR
1
3
@
GLINE NODES=2 AUXPOINT=13 NCOINCID=ALL GROUP=2
@CLEAR
2
@
************************ DYNAMICS *******************************
KINEMATICS DISPLACE=small STRAINS=SMALL UL-FORMU=DEFAULT
PRESSURE=NO INCOMPAT=AUTOMATIC RIGIDLIN=NO
MASTER ANALYSIS=DYNAMIC-DIRECT-INTEGRATION
MODEX=EXECUTE TSTART=0.00000000000000 IDOF=0 OVALIZAT=NONE
FLUIDPOT=AUTOMATIC CYCLICPA=1 IPOSIT=STOP REACTION=YES
INITIALS=NO FSINTERA=NO IRINT=DEFAULT CMASS=NO
SHELLNDO=AUTOMATIC AUTOMATI=OFF, SOLVER=SPARSE
CONTACT-=CONSTRAINT-FUNCTION,TRELEASE=0.00000000000000
RESTART-=NO FRACTURE=NO LOAD-CAS=NO,
LOAD-PEN=NO MAXSOLME=0 MTOTM=2 RECL=3000 SINGULAR=YES,
STIFFNES=0.000100000000000000 MAP-OUTP=NONE MAP-F§ORM=NO,
NODAL-DE='' POROUS-C=NO ADAPTIVE=0 ZOOM-LAB=1 AXIS-CYC=0,
PERIODIC=NO VECTOR-S=GEOMETRY EPSI-FIR=NO STABILIZ=NO,
STABFACT=1.00000000000000E-10 RESULTS=PORTHOLE FEFCORR=NO,
BOLTSTEP=1 EXTEND-S=YES CONVERT-=NO DEGEN=YES TMC-
MODE=NO, ENSIGHT-=NO
ITERATION METHOD=BFGS LINE-SEA=DEFAULT MAX-ITER=50
PRINTOUT=ALL PLASTIC-=1
**************TIME FUNCTIONS*********************************
TIMESTEP NAME=DEFAULT
@CLEAR
4000 0.00001

-- 138 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81 123
@
*****Blast load*****
TIMEFUNCTION NAME=1 IFLIB=1
@CLEAR
0.0 0
0.00012 0
0.00022 1
0.00124 0
0.04 0
@
*****Fragment loads*****
TIMEFUNCTION NAME=2 IFLIB=1
@CLEAR
0.0 0
0.00017 0
0.00022 1
0.00027 0
0.04 0
@
**************************Loads********************
***Blast load***
LOAD LINE NAME=1 MAGNITUD=4991071
***Fragment load***
LOAD LINE NAME=2 MAGNITUD=24234412
APPLY-LOAD BODY=0
@CLEAR
1 'LINE' 1 'LINE' 1 0 1 0.00000000000000 0 -1 13 0 0 'NO',
0.00000000000000 0.00000000000000 1 0
2 'LINE' 1 'LINE' 2 0 1 0.00000000000000 0 -1 13 0 0 'NO',
0.00000000000000 0.00000000000000 1 0
3 'LINE' 1 'LINE' 3 0 1 0.00000000000000 0 -1 13 0 0 'NO',
0.00000000000000 0.00000000000000 1 0
6 'LINE' 2 'LINE' 1 0 2 0.00000000000000 0 -1 13 0 0 'NO',

-- 139 of 140 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2009:81
124
0.00000000000000 0.00000000000000 1 0
7 'LINE' 2 'LINE' 2 0 2 0.00000000000000 0 -1 13 0 0 'NO',
0.00000000000000 0.00000000000000 1 0
8 'LINE' 2 'LINE' 3 0 2 0.00000000000000 0 -1 13 0 0 'NO',
0.00000000000000 0.00000000000000 1 0
***************************** THE END **************************

-- 140 of 140 --