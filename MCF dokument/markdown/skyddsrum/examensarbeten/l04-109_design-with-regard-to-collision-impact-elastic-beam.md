---
title: "L04 109 Design With Regard To Collision Impact Elastic Beam"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-109_design-with-regard-to-collision-impact-elastic-beam.pdf"
fileType: "PDF"
keywords: ["betong","beräkning","time","figure","00000000000000","force","2dof","impact"]
summary: "-5.0 0.0 5.0 0.0 0.2 Time t… Displa… 2DOF FEM -0.5 0.0 0.5 1.0 1.5 2.0 0.0 0.1 0.2 Time t [s] Displacement u2 [mm] -100 0 100 200 300 400 0.0 0.1 0.2 Time t [s] Reaction force RA [kN] -50 0 50 100 150 200 0.0 0.1 0.2 Time t [s] Moment Mα [kNm] v0 ..."
---

-5.0
0.0
5.0
0.0 0.2	Time t…
Displa…	2DOF
FEM
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2
Time t [s]
Displacement u2 [mm]
-100
0
100
200
300
400
0.0 0.1 0.2
Time t [s]
Reaction force RA [kN]
-50
0
50
100
150
200
0.0 0.1 0.2
Time t [s]
Moment Mα [kNm]
v0
m1
v0
m1
k1
v = 0
m2
k2
v0
m1
k1
Design with Regard to Collision Impact
Comparison of Response between a Simplified 2DOF system
and FE analysis for Impact on a Simply Supported Elastic Beam
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Technology
ERIK ASPLUND
DANIEL STECKMEST
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2014
Master’s Thesis 2014:80

-- 1 of 227 --



-- 2 of 227 --

MASTER’S THESIS 2014:80
Design with Regard to Collision Impact
Comparison of Response between a Simplified 2DOF system and FE analysis for
Impact on a Simply Supported Elastic Beam
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Technology
ERIK ASPLUND
DANIEL STECKMEST
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2014

-- 3 of 227 --

Design with regard to collision impact
Comparison of Response between a Simplified 2DOF system and FE analysis for
Impact on a Simply Supported Elastic Beam
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Technology
ERIK ASPLUND
DANIEL STECKMEST
© ERIK ASPLUND & DANIEL STECKMEST, 2014
Examensarbete / Institutionen för bygg- och miljöteknik,
Chalmers tekniska högskola 2014:80
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover:
Illustration of how a vehicle impact on a simply supported beam can be transformed
into a FE model and a 2DOF system. Comparison of response in displacement u2,
support reaction force RA and moment Mα over time between 2DOF and FEM.
Chalmers Reproservice
Göteborg, Sweden 2014

-- 4 of 227 --

I
Design with regard to collision impact
Comparison of Response between a Simplified 2DOF system and FE analysis for
Impact on a Simply Supported Elastic Beam
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Technology
ERIK ASPLUND
DANIEL STECKMEST
Department of Civil and Environmental Engineering
Division of
Concrete Structures
Chalmers University of Technology
ABSTRACT
During a collision between two objects an impact load is generated. Such events could
for example happen when a vehicle crashes into a barrier or when an object is thrown
into a wall by strong wind. The response from such an impact can be very different
from when a static load is applied. The approach regarding collision impacts
presented in Eurocode is very limited and simplified, and the subject needs to be
investigated further. This Master’s thesis uses a simplified two degree of freedom
(2DOF) system and a finite element (FE) model to analyse the responses during a
collision between a moving object and a simply supported elastic beam.
Basic theory of dynamics and collision analysis are presented together with different
ways of approximating the material behaviour. Several dynamical models, such as
classic theory, 2DOF spring-mass system and FE analysis are described and
implemented. A parameter study is performed to decide which properties are most
critical. This shows that the ratio of the eigenfrequencies of the involved objects is a
governing factor for how the response of the system behaves.
The response from a collision depends greatly on the structural properties of the two
objects involved. Vehicle crash tests are therefore studied in order to determine
reasonable properties to be used for vehicles in a collision impact analysis. It is
established that the material response of a vehicle has a bilinear relationship with a
stiffness increase after a certain deformation, in contrast to Eurocode where a constant
stiffness value is used which also is very low compared to what is found in the tests.
To be able to implement a beam in the 2DOF system it needs to be treated as a single
degree of freedom system. For this purpose, transformation factors are derived to
translate the beam properties in order to be applicable in the spring-mass system.
A collision impact can be seen as a point load acting at various distances from the
support. This needs to be considered in the analysis which is carried out using several
different points of impact and elastic materials. A comparison of the results from the
2DOF and FE models is then made to assess how well the simplified system manages
to describe the response. It can be concluded that the 2DOF system shows a good
correlation with the FE analysis when the frequency ratio is low or when loading
close to midspan. When the frequency ratio is high the 2DOF response will be on the
unsafe side for all loading positions, but the deflection will still correlate well.
Key words: Collision impact, impulse load, 2DOF, FEM, dynamic response,
moment, shear force, transformation factors, vehicle stiffness, crash test

-- 5 of 227 --

II
Dimensionering med hänsyn till kollisionslast
Jämförelse av respons mellan ett förenklat tvåfrihetsgradssystem och en FE analys för
kollision med en fritt upplagd elastisk balk
Examensarbete inom mastersprogrammet Structural Engineering and Building
Technology
ERIK ASPLUND
DANIEL STECKMEST
Institutionen för bygg- och miljöteknik
Avdelningen för konstruktionsteknik
Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
Vid en krock mellan två kroppar skapas en kollisionslast. Detta kan vara när ett
fordon kör in i ett hinder eller när ett objekt slungas in i en vägg av stark vind.
Responsen från en sådan kollision kan vara mycket annorlunda jämfört med om lasten
vore statisk. Tillvägagångssättet i Eurokod är ganska förenklat och begränsat, och
detta ämne måste därför undersökas djupare. Detta examensarbete använder ett
förenklat tvåfrihetsgradssystem (2DOF-system) och en finita element (FE) modell för
att analysera responsen vid en kollision mellan ett inkommande föremål och en fritt
upplagd elastisk balk.
Grundläggande teori om dynamik och kollisionsanalys presenteras tillsammans med
olika metoder för att uppskatta materialets beteende. Flertalet dynamiska modeller,
såsom klassisk stötteori, ett 2DOF-massa-fjäder-system och en FE-modell beskrivs
och implementeras. En parameterstudie genomförs för att bestämma vilka egenskaper
som har störst betydelse. Denna visar att kvoten av de ingående kropparnas
egenfrekvenser är en viktig faktor för att beskriva hur systemet beter sig.
Den respons som uppstår vid en kollision beror till stor del på de strukturella
egenskaperna hos de två aktuella kropparna. Därför har krocktester av bilar studerats
för att kunna uppskatta vilka parametrar som är rimligt att använda vid en
kollisionsanalys. Det visar sig att fordon har en bilinjär arbetskurva där styvheten ökar
efter en viss deformation. Detta i motsats till Eurokod som använder ett konstant
värde på styvheten som dessutom är mycket lägre än vad som visas i testerna.
För att kunna implementera balken i 2DOF-systemet har transformationsfaktorer
härletts. Dessa omvandlar balkens egenskaper för att gälla i ett massa-fjäder-system.
En kollision kan ses som en punktlast som träffar på ett godtyckligt avstånd från
stödet, vilket tas till hänsyn i beräkningarna genom att flera olika träffpunkter ingår i
analysen. Resultaten från 2DOF-systemet och FE-modellen jämförs sedan för att
bedöma hur väl det förenklade systemet beskriver responsen. Det kan konstateras att
2DOF-systemet visar god överrensstämmelse med FE-analysen när frekvenskvoten är
låg eller när lasten träffar nära balkmitt. När frekvenskvoten istället är hög visar
2DOF-systemet resultat på osäker sida för alla träffpunkter, förutom för nedböjningen
som verkar stämma bra överrens för alla testade fall.
Nyckelord: Kollisionslast, impulslast, 2DOF-system, FEM, dynamisk respons,
moment, tvärkraft, transformationsfaktorer, fordonsstyvhet, krocktest.

-- 6 of 227 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2014:80 III
Contents
ABSTRACT I
SAMMANFATTNING II
CONTENTS III
PREFACE VII
NOTATIONS VIII
1 INTRODUCTION 1
1.1 Background 1
1.2 Objective 1
1.3 Scope and limitations 1
1.4 Method 2
1.5 Thesis outline 2
2 BASIC THEORY 4
2.1 Basic concepts of Dynamics 4
2.1.1 Velocity and acceleration 4
2.1.2 Force and pressure 4
2.1.3 Momentum and impulse 5
2.1.4 Work and kinetic energy 5
2.1.5 Equation of motion 6
2.2 Structural internal resistance 7
2.2.1 Structural response 7
2.2.2 Plastic rotation capacity 10
2.3 Dynamic models 13
2.3.1 Classic impact theory 13
2.3.2 Single degree of freedom 16
SDOF loaded with characteristic impulse Ic 18	2.3.2.1
Elastic system 19	2.3.2.2
Plastic system 20	2.3.2.3
Elasto-plastic system 20	2.3.2.4
2.3.3 Multi-degree of freedom 22
2.3.4 The Central Difference Method 25
3 ANALYSIS OF COLLISION MODELS AND PARAMETER STUDY 28
3.1 2DOF system without barrier 28
3.1.1 Elastic response 29
3.1.2 Plastic response 32
3.2 Analysis of 2DOF system with a barrier 35
3.2.1 Elastic response 35
3.2.2 Elasto-plastic response 43
3.3 Comparison of impact with and without barrier 43

-- 7 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
IV
4 COLLISION IMPACT DESIGN 45
4.1 Structural parameters 45
4.1.1 Reasonable parameters for vehicles 45
4.1.2 Parameters for concrete beam 54
4.2 Transformation of beam to spring-mass system 55
4.2.1 General principle 55
Conservation of kinetic energy 56	4.2.1.1
Conservation of external work 57	4.2.1.2
Conservation of internal work 57	4.2.1.3
4.2.2 Determination of transformation factors 58
Elastic response for a point load 59	4.2.2.1
Plastic response for a point load 60	4.2.2.2
Transformation factors for different cases 61	4.2.2.3
4.2.3 Stiffness of simply supported beam subjected to a point load 63
4.2.4 Equivalent static load 64
4.3 Impact load according to Eurocode 64
5 COLLISION IMPACT ON A SIMPLY SUPPORTED BEAM 67
5.1 2DOF - Effect of impact position on a beam 67
5.1.1 Original beam – Property set 1 69
5.1.2 Effect of beam stiffness 72
Stiffer beam – Property set 5 72	5.1.2.1
Softer beam – Property set 4 73	5.1.2.2
5.1.3 Effect of spring stiffness 74
5.2 Finite element model 74
5.2.1 Eigenmodes of a simply supported beam 76
5.2.2 Original beam - Property set 1 77
5.2.3 Effect of beam stiffness 81
Stiffer beam – Property set 5 81	5.2.3.1
Softer beam – Property set 4 82	5.2.3.2
5.2.4 Effect of spring stiffness 86
5.3 Comparison of model responses 86
5.3.1 Original beam - Property set 1 87
5.3.2 Effect of beam stiffness 92
Stiffer beam – Property set 5 92	5.3.2.1
Softer beam – Property set 4 95	5.3.2.2
5.3.3 Observations from the comparison 97
5.3.4 Comparison of support reaction forces 98
5.3.5 Comparison with calculation model from Biggs 102
5.3.6 Deflection of weak beams 106
5.3.7 Comparison of response assuming characteristic impulse 108
5.4 Design example with a bilinear stiffness relationship 111
5.4.1 Orientation 111
5.4.2 Results using the 2DOF system 113
Bilinear plastic behaviour – Material response 1 113	5.4.2.1
Bilinear elastic behaviour – Material response 2 114	5.4.2.2
Linear plastic behaviour – Material response 3 and 5 115	5.4.2.3

-- 8 of 227 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2014:80 V
Linear elastic behaviour – Material response 4 and 6 116	5.4.2.4
Comparison between material responses 117	5.4.2.5
5.4.3 Eurocode 118
5.4.4 Observations 119
5.4.5 Comparison 119
6 FINAL REMARKS 122
6.1 Conclusions 122
6.2 Recommendations of approach for analysis 123
6.3 Further studies 123
7 REFERENCES 125
APPENDIX A CENTRAL DIFFERENCE METHOD A-1
APPENDIX B RESULTS 2DOF SYSTEM WITHOUT BARRIER B-1
B.1 Elastic response B-1
B.2 Plastic response B-4
APPENDIX C RESULTS 2DOF SYSTEM WITH BARRIER C-1
C.1 Load factor βel C-1
C.2 Elastic response C-3
C.3 Elasto-plastic response C-14
APPENDIX D 2DOF EFFECT OF IMPACT POSITION ON A BEAM D-1
D.1 Original beam D-1
D.2 Stiffer beam D-2
D.3 Softer beam D-3
D.4 Stiffer colliding object D-4
D.5 Softer colliding object D-5
APPENDIX E RESULTS FROM FINITE ELEMENT ANALYSIS E-1
E.1 Original beam – Property set 1 E-2
E.2 Stiffer beam – Property set 5 E-6
E.3 Softer beam – Property set 4 E-10
E.4 Stiffer colliding object – Property set 3 E-14

-- 9 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
VI
E.5 Softer colliding object – Property set 2 E-18
APPENDIX F COMPARISON OF MODEL RESPONSES F-1
F.1 Original beam – Property set 1 F-2
F.2 Softer beam – Property set 4 F-7
F.3 Stiffer beam – Property set 5 F-10
F.4 Softer colliding object – Property set 2 F-13
F.5 Stiffer colliding object – Property set 3 F-16
APPENDIX G MATHCAD CALCULATIONS G-1
G.1 Beam transformation factors and stiffness G-1
APPENDIX H MATLAB ALGORITHMS H-1
H.1 2DOF system - main algorithm H-1
H.2 2DOF system - function file H-4
H.3 Classic theory H-5
APPENDIX I ADINA COMMAND FILES I-1
I.1 ADINA-IN command file for setting up the model I-1
I.2 ADINA-PLOT command file for extracting the result I-3

-- 10 of 227 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2014:80 VII
Preface
In this Master’s thesis the responses during a collision between a projectile and a
simply supported beam have been investigated, and a comparison between a 2DOF
system and FE model has been carried out.
The project has been carried out in collaboration with Reinertsen Sverige AB and the
Department of Civil and Environmental Engineering, Division of Structural
Engineering, Concrete Structures research group at Chalmers University of
Technology. The project has been carried out with Ph.D. Morgan Johansson,
Reinertsen Sverige AB, as supervisor and Ph.D. Joosef Leppänen, Chalmers
University of Technology, as examiner. The work has been carried out between
January and June 2014 at Reinertsen Sverige AB in Gothenburg, Sweden.
First of all we would like to thank Morgan Johansson for his devoted supervision of
our thesis project, thoughtful insights and helpful feedback. Secondly we also want to
thank Joosef Leppänen for his guidance as an examiner and important feedback.
Additionally we also want to express appreciation to Mattias Carlsson and Sebastian
Andersson who have both been very helpful when we experienced problems with the
finite element software. Also a big thanks to Reinertsen Sverige AB for the big private
office space of 60 square meters provided for us during the whole semester.
Finally we want to thank both each other and our fellow thesis worker colleagues for
all the pleasant coffee breaks and occasional Friday pastries.
Gothenburg June 2014
Erik Asplund and Daniel Steckmest

-- 11 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
VIII
Abbreviations
2DOF Two Degree of Freedom
COR Coefficient of Restitution e
EC Eurocode
Euro NCAP European New Car Assessment Programme
FEA Finite Element Analysis
FEM Finite Element Method
FWDB Full Width Deformable Barrier
FWRB Full Width Rigid Barrier
LCMDB Load Cell Moving Deformable Barrier
MDOF Multi Degree of Freedom
NHTSA National Highway Traffic Safety Administration
ODB Offset Deformable Barrier
SDOF Single Degree of Freedom
ULS Ultimate Limit State
Notations
Roman upper case letters
A Area
Acc Area of compression zone
As Amount (area) of tensile reinforcement
Aϕ Area of one reinforcement bar
AII Effective concrete area
C Damping matrix
E Modulus of elasticity (Young’s modulus)
EII Equivalent modulus of elasticity
Ec Modulus of elasticity of concrete
Es Modulus of elasticity of reinforcing steel
Ek Kinetic energy
EIb Bending stiffness of a beam
F (External) force
Fb Force acting on a beam
G Shear modulus
I Impulse
Ic Characteristic impulse
II Moment of inertia for a cross section in state I (uncracked)
III Moment of inertia for a cross section in state II (cracked)
K Stiffness matrix
M Bending moment
Mf Bending moment in field
Ms Bending moment at support
Mα Bending moment at point of impact
M Mass matrix
N Normal force
P Pressure
Q Equivalent static force
R1 Internal reaction force in body 1

-- 12 of 227 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2014:80 IX
R2 Internal reaction force in body 2
RA Reaction force at support A
RB Reaction force at support B
Rsta Static part of the reaction force
Rdyn Dynamic part of the reaction force
R Loading capacity (strength)
T Period (duration of one cycle)
V Shear force
W Work
Wi Internal work
We External work
Roman lower case letters
a Acceleration
a Distance between loading and support
b 1 – a
c Damping coefficient
c Concrete cover
c Wave speed
d Effective depth of cross-section for tensile reinforcement
d’ Effective depth of cross-section for compressive reinforcement
e Coefficient of restitution, COR
f Natural frequency
ftk Characteristic strength of reinforcement
fyk Characteristic yield strength of reinforcement
f1 Natural frequency of body 1
f2 Natural frequency of body 2
hb Height of cross-section of a beam
k Stiffness (spring constant)
k1 Stiffness of body 1
k1,1 Stiffness of first part of a bilinear force-displacement relationship
k2 Stiffness of body 2
k1,2 Stiffness of second part of a bilinear force-displacement relationship
k1,3 Stiffness of unloading part of a bilinear force-displacement relationship
kb Stiffness of a beam
kλ Correction factor for plastic rotation capacity
l Distance
l0 Distance between the zero and the maximum moment section
lb Length of beam
m Mass
m1 Mass of body 1
m2 Mass of body 2
mb Mass of beam
n Number of reinforcement bars
p Momentum
s Spacing of bars
t Time
∆t Time increment
u Displacement

-- 13 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
X
u1 Displacement of body 1
u1 Displacement corresponding to a change in stiffness for a bilinear curve
u2 Displacement of body 2
∆u Displacement increment
uel Elastic displacement
upl Plastic displacement
us Displacement of system point
u	
Velocity
u	
Acceleration
u′′(x) Curvature of a beam
v Velocity
v0 Initial velocity
vr Velocity at impact
wb Width of cross-section of a beam
x Depth of compression zone
x Coordinate of horizontal length axis
xcc Distance to equivalent force for compression zone
xu Depth of compression zone in ULS
Greek lower case letters
α Distance between loading and support in relation to the total length
αs Ratio of Es to Ec
β 1 – α
βshear Factor regarding shear stress
βel Load factor
γ The distribution of the load in relation to the total length of the beam
γ1,2 Load factor used when determining reaction force according to Biggs
γI Factor for characteristic impulse
κF Transformation factor for load
κk Transformation factor for stiffness
κm Transformation factor for mass
κm,el Transformation factor for mass, elastic response
κm,pl Transformation factor for mass, plastic response
κmF Transformation factor for both mass and load
εuk Ultimate strain of reinforcing steel
θ Rotation
θpl Plastic rotation capacity
θs Plastic rotation
λ Shear slenderness
ρ Density
ω Natural circular frequency
φ Angle between force and direction of displacement
φdyn Dynamic amplification factor
ϕ Diameter of reinforcing steel bar

-- 14 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 1
1 Introduction
1.1 Background
During a collision between two objects an impact load is generated. Such events could
for example happen when a vehicle crashes into a barrier, when an object is dropped
onto a floor or thrown into a wall by strong wind. The response from such an impact
can be very different from when a static load is applied and the structural properties of
the objects will be of great importance for the dynamic behaviour.
The approach regarding collision impact presented in Eurocode is very simplified and
the knowledge in this field of study is generally limited. Therefore the subject needs
to be investigated further and alternative methods for analysis, both detailed and
simplified, needs to be studied.
1.2 Objective
The objective of this Master’s thesis is to investigate a collision impact and the
resulting responses using both simplified and more advanced design approaches. The
different methods, including a two degree of freedom (2DOF) system and a finite
element (FE) model, will also be compared to see how well the simplified methods
are able to describe the real behaviour. Furthermore it needs to be studied under what
conditions it is adequate to use a simplified method and when a more refined method
needs to be implemented. A literature study treating the basic theory of dynamics will
also be carried out and a summary of this will be composed and implemented in the
thesis.
Furthermore it will be investigated how the response from a collision depends on
different structural properties of the involved objects. An important design situation in
real life is vehicle impact, but the knowledge about the structural parameters of such
an object is limited in the field of structural engineering. Therefore vehicle crash tests
are to be studied in order to determine reasonable properties to be used for vehicles in
collision impact analyses. A collision impact can be seen as a point load acting at
various distances from the support and the importance of impact position for different
responses, such as moment and shear force, will be examined.
1.3 Scope and limitations
In this thesis the effect of damping is omitted since it in most cases has a small
influence on the response of a collision impact, due to the relatively short duration of
the load. It would also make the analyses more complicated than what is needed.
Moreover this report only treats simply supported beams with elastic response. This
choice is made in order to be able to be thorough enough when studying different
aspects of the subject.

-- 15 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
2
1.4 Method
A literature study covering the basic theory of dynamics and collision analysis,
including different ways of approximating the material behaviour, is carried out.
Several dynamical models, such as classic theory, 2DOF spring-mass system and
FE analysis are then described and implemented. The 2DOF system is modelled in the
commercial software MATLAB and is based on the fundamental equation of motion.
The central difference method is then used to find a numerical solution of the
displacement in each time step. The FE analyses are performed in the commercial
software ADINA 900 nodes version, ADINA R & D, Inc (2014). Here the colliding
object is modelled as a point mass connected to a spring and the beam is modelled by
elastic 3D beam elements. The FE analyses are used as a reference throughout the
report and are assumed to be a sufficiently good representation of reality.
The response from a collision depends greatly on the structural properties of the two
objects involved. A parameter study is therefore performed, using the dynamical
models, to decide which properties are the most critical. Vehicle crash tests are also
studied in order to determine reasonable properties to be used for vehicles in collision
impact analyses.
To be able to implement a beam in the 2DOF system it needs to be treated as a single
degree of freedom (SDOF) system. To be able to do this, transformation factors are
derived in order to translate the beam properties. These can then be implemented in
the spring-mass system.
Each analysis is carried out using several different points of impact to simulate an
arbitrary impact position on the beam. This will also affect the transformation factors
since the shape and size of the deflection is different for different impact positions. A
comparison of the results from the 2DOF and FE models is then made to assess how
well the simplified system manages to describe the response.
Finally an example of an analysis is carried out where a vehicle crashing into a beam
is investigated. Here the 2DOF model, with different material responses for the
vehicle, is implemented and compared to the calculation method described in
Eurocode. A recommendation for which of the simplified analysis methods to use in
different situations is also proposed.
1.5 Thesis outline
Chapter 2 contains most of the background theory used for this thesis including basic
concepts of dynamics, how to treat different kind of material behaviours and a
description of dynamic models such as the spring-mass system.
Chapter 3 implements the dynamic models, previously described in Chapter 2, and
contains a parameter study to decide which variables are the most important. It also
examines the effect of a rigid barrier being present.
Chapter 4 examines what structural parameters are reasonable to use for vehicles that
crashes into a barrier, and also describes the beam studied in this thesis. A description
and derivation of how the beam is transformed for use in the 2DOF model is
presented. Furthermore a description of how impact load is treated in Eurocode is
included.

-- 16 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 3
Chapter 5 contains detailed analyses of impact on a simply supported beam. Both the
2DOF system and FE model are used for the analysis and the methods are well
described. The models are also compared to determine how well the simplified 2DOF
system is able to capture the response in the beam, and to decide when each model is
proper to use. The effect of the impact position on the beam response is also studied to
decide the most critical loading position. Finally a calculation example where a
vehicle crashing into a column is carried out using reasonable parameters previously
discussed in this thesis.
Results and the discussion of these are treated individually in each chapter, but a
concluding discussion of the whole report is carried out in Chapter 6 together with
recommendations for further studies. References used in this thesis can be found in
Chapter 7. Several appendices are attached at the end of the report and contain
additional results that are not included in the main chapters.

-- 17 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
4
2 Basic Theory
2.1 Basic concepts of Dynamics
To understand the mechanics behind what is happening during a collision between
two objects, it is necessary to be familiar with some basic dynamical concepts. In a
collision, the impact load will act during a very short time, in opposite to a static load.
Therefore some fundamental theory of dynamics is presented in this section, based on
Johansson and Laine (2012).
2.1.1 Velocity and acceleration
Mean velocity is defined as distance moved by an object, Δu, during a certain time
interval Δt,
t
u
v 

	
(2.1)
If the time step then is considered as infinitely small, i.e. Δt  0, the velocity v is
defined as the change of an objects position with each instant of time
u
dt
du
v 			
(2.2)
This is basically the same as the speed of an object, except that speed does not
describe in which direction an object is moving.
Analogously, the acceleration a is defined as the change of an objects velocity with
each instant of time t
u
dt
u	d
dt
dv
a 
 			
(2.3)
2.1.2 Force and pressure
Force can be described as the ability to accelerate the mass of a body. This relation
between force F, mass m and acceleration is stated in Newton’s second law of motion
a	m	F 		
(2.4)
To define the force per unit area A the physical quantity pressure P can be used
A
F
P 	
(2.5)

-- 18 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 5
2.1.3 Momentum and impulse
The momentum p of a body with mass m and velocity v can be defined as
v	m	p 		
(2.6)
If the body has an initial velocity of v0 and is subjected to a force F(t) during a certain
time period t0 ≤ t ≤ t1, it will have a final momentum of
					
1
0
)	(	0	1
t
t
dt	t	F	v	m	v	m	p	
(2.7)
The change in momentum can be described as the impulse I transferred to the body
	
1
0
)	(
t
t
dt	t	F	I	
(2.8)
and can be seen as the area under the graph in a force-time diagram, see Figure 2.1.
When studying impact loads the maximum force is often not the most relevant
parameter, instead the impulse is of major importance since it relates the acting force
with the duration of the impact, see Figure 2.1.
Elastisk r
F
F2,el I2
F
t
I0
F
t
F
t
F2,1
F2,2
t2,1 	t2,2	t2,0 → 0
F2,0 → ∞
I0
I0
Figure 2.1 The impulse I0 is equal to the area under the graph in the force-time
diagram. Here the impulse is of equal size in all three cases.
2.1.4 Work and kinetic energy
A force that is acting on a body is said to do work when the action results in a
displacement of the body. The work Wx done is only dependent on the force Fx that is
acting in the direction of the displacement u
u	F	u	F	W x	x 				 )	cos(
	
(2.9)
where φ is the angle between the acting force and the direction of the displacement,
see Figure 2.2a.
The work done by a variable force can more generally be written as

-- 19 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
6
	
u
x	x dx	x	F	W
0
)	(	
(2.10)
F
u
φ Fx x
F
F

l
M θ
a) b)
Figure 2.2 a) A force doing work on a body, b) a moment doing work on a body.
A moment M acting on a body can analogously do work W
 when a rotation θ is
generated
	
 	 M	W	
(2.11)
where the moment, see Figure 2.2b, is defined as
l	F	M 		
(2.12)
More generally when the moment varies with the angle
, the work can be defined as
	

	

	
0
)	( d	M	W	
(2.13)
The kinetic energy Ek of a body with mass m and velocity v is defined as
2
2
v	m
Ek

	
(2.14)
Both work and kinetic energy is quantities of energy and both of them needs to be
considered in a collision analysis to determine the total response of the objects.
2.1.5 Equation of motion
The equation of motion describes the behaviour of an object in terms of its motion in
time and is based on equilibrium of forces and Newton’s second law. The equation of
motion is used when studying a spring-mass system. The forces acting on a body is
divided into one external force F(t) and two internal forces, Rsta and Rdyn, as shown in
Figure 2.3. The internal forces are reactions due to boundary conditions, one static
and one dynamic, which are dependent on the displacement and velocity respectively,
this gives

-- 20 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 7
a	m	R	R	t	F dyn	sta 			 )	(	)	(	
(2.15)
The inner restraints can for a linearly elastic response be stated as
u	k	Rsta 		
(2.16)
and
u	c	Rdyn 			
(2.17)
where k represents the stiffness or spring constant and c the damping coefficient. If
these two expressions are combined with the equilibrium stated above, we get the
final expression for the equation of motion
)	(t	F	u	k	u	c	u	m 					 		
(2.18)
m
a
F(t) Rdyn
Rsta
F(t)
k
c
m
u
Figure 2.3 Illustration of forces acting on an accelerating body, and how this can
be modelled as a spring-mass system with damping.
2.2 Structural internal resistance
2.2.1 Structural response
The response of a structure can be divided into infinitely many cases, but the
following three are the most common and generalized cases; elastic, plastic and
elasto-plastic response, see Figure 2.4. According to equation (2.10) the internal work
Wi can be seen as the area under graphs in this figure.
u
R
Wi
uel
k
Rel
u
R
Rpl
Wi
upl
u
R
Wi
utot	uel
utot = uel + upl
k
stiffness k at
unloading
Rpl
a) b) c)
Figure 2.4 Load-displacement curves for different structural responses, a) elastic,
b) plastic and c) elasto-plastic.

-- 21 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
8
These responses are based on a simplification of the real behaviour of different
structures and materials which gives a good and useful approximation. For the linear
elastic response, the stiffness, k, is assumed to be constant and the elastic load
capacity Rel to be infinitely large. However, a specific point of failure, or maximum
load capacity, could also be specified. The deformation uel is fully elastic and will
return to zero after unloading. For the plastic response, the stiffness is not a relevant
parameter and the plastic load capacity Rpl is the only parameter influencing the
response. The deformation upl is fully plastic and will be permanent even after
unloading. The final response, elasto-plastic response, is a combination of the former
two; it has an elastic behaviour up to its load capacity and a plastic behaviour
afterwards. The total displacement utot consists of both an elastic uel and a plastic upl
part. The elasto-plastic response is the one closest to reality for most structures and is
therefore recommended for analyses. But, for simplicity, if the plastic deformation
capacity of a structure is small, it can be wise to use the elastic model and if the
stiffness of the structure is high, the plastic response can be used instead.
The stress-strain curves in Figure 2.5 are illustrations of the real material behaviour of
concrete and steel. The response for concrete, Figure 2.5a, is often simplified to an
elastic behaviour with a maximum capacity of fcc in compression. For a reinforced
concrete beam the strength of concrete in tension is, due to cracking, often neglected
in analysis. Instead the reinforcement determines the governing strength capacity in
tension. In the curve describing the reinforcement, Figure 2.5b, both an elastic and a
plastic part can be distinguished. The elastic part shows substantially a linear elastic
behaviour but the plastic part exhibits some strain hardening. This can be disregarded
and the curve can conservatively be estimated with a simplified elasto-plastic
behaviour, similar to the structural response seen in Figure 2.4c.
σc
εc
fct
fcc
compression
tension
a)
σs
εs
fy
tension
fu
εsu	b)
Figure 2.5 Stress-strain relationship for a) concrete and b) reinforcement in
tension.
The impulse created during a collision impact can be of various different shapes
depending on the structural properties of the colliding bodies, such as mass, stiffness
and loading capacity. For a simplified case where a body crashes into a non-
deformable barrier, three different types of impulses are illustrated in Figure 2.6,
where the force F acting on the barrier is plotted against time t, Johansson and Laine
(2012). However in reality both bodies will become deformed during the impact and
the resulting impulse will get a more complex form, this is discussed further in
Chapter 3.

-- 22 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 9
F, R
Wy
R
ut
Fk
F
t
tel
F2,el
F
t
tpl
F2,pl
F
t
telpl
F2,pl
I2,pl = I0 	I0 ≤ I2,elpl ≤ 2I0	I2,el = 2I0
a) 	b) 	c)
Figure 2.6 Different shape of impulse for three different responses in a body
during a collision into a rigid barrier; a) elastic response, b) plastic
response and c) elasto-plastic response.
In Figure 2.6 the different size of the impulse of reaction force I2 is visualized for the
three responses. F2,el and F2,pl are the maximum resulting load acting on the barrier in
the elastic respectively in the plastic case. As seen here, the impulse is twice as large
for the elastic response I2,el, compared to the impulse for the plastic response I2,pl. The
reason for this behaviour is that the momentum of the body, during the impact, will
change from p0 to zero for the plastic case, while it will change from p0 to –p0 for the
elastic case. This can be thought of as two impulses, if the total impulse in Figure 2.6a
is divided at the time of maximum force, into two equally big parts. Then the first
impulse is acting when the body has a positive velocity, and the second impulse is
acting during the bounce back period, when the velocity is negative. For the elasto-
plastic response, the impulse will be somewhere between the impulses of the other
two responses.
The ability of a structure to absorb energy is vital for its performance under impulse
loading. An external work is done from the impact load F and can be set equal to the
kinetic energy of a projectile. An internal work, based on the internal resistance R and
deformation capacity, is then created to balance up the external work, see Figure 2.7.
The external and internal work, We and Wi, can be seen as the integrals of the force-
deformation curve. The barrier is here seen as a body which can be deformed.
t
F
I 	F
F2,el
F 	F
I2,pl = I0 	I0 ≤ I2,elpl ≤ 2I0	I2,el = 2I0
m 	a
F(t)
R(t)
m 	u
F(u)
R(u)u
F, R
utot
F(u)
R(u)
We
Wi
Figure 2.7 Illustration of how internal work is created from an impulse load to
balance the external work.

-- 23 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
10
Here F is the force from the incoming object acting on the barrier, and R is the
reaction force acting in the barrier. The incoming object is here assumed to have an
elastic response and the barrier is assumed to have a nonlinear plastic response.
This internal work can be achieved in different ways depending on the structural
properties. A structure with high stiffness will get small deformations but large
reaction forces, while a low stiffness will give large deformations but small reaction
forces. In opposite to what is preferable for a structure subjected to static loading, it is
therefore often better for a structure to have a low stiffness and large deformation
capacity when subjected to impulse loading. The latter case will in general give higher
energy absorption capacity by using the material in a more efficient way, see Figure
2.8.
R
u
u1 	u2
R1
Wi,1
R2
Wi,2
Wi,2 > Wi,1
Figure 2.8 Internal work done in two different materials, one with high strength
and low deformation capacity and one with low strength and high
deformation capacity.
2.2.2 Plastic rotation capacity
When a plastic or elasto-plastic response is used for a beam it means that the concept
of moment redistribution is utilized and that the maximum deflection is the governing
factor for the design of the beam. This deflection can be translated, using
trigonometry, into a maximum rotation, or plastic rotation θs, at the points where the
plastic hinges are formed, see Figure 2.9. The method for determining the plastic
rotation capacity described in this section is based on Eurocode 2 (CEN, 2004) and is
only valid for the ultimate limit state (ULS). In design, the plastic rotation should not
exceed the rotation capacity, θs ≤ θpl.
0.6 h 0.6 h
h	θ
Figure 2.9 Plastic rotation θs of a reinforced concrete section in a continuous
beam, CEN (2004).

-- 24 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 11
The plastic analysis in Eurocode can be used, without further check of rotation
capacity, if the following three conditions are fulfilled, CEN (2004)
I. the area of the tensile reinforcement is limited as
a. xu / d < 0.25 for concrete strength class ≤ C50/60
b. xu / d < 0.15 if concrete class ≥ C55/67
II. reinforcement used is of either class B or C, see Table 2.1
III. the ratio between intermediate support moment Ms and field moment Mf
should fulfil 0.5 ≤ Ms / Mf ≤ 2.0
where xu is the depth of the compression zone in the ultimate limit state, ULS, and d is
the effective depth of the cross-section.
These conditions for use of the plastic design are presumably based on a static loading
point of view and are therefore not valid for an impulse load. For this kind of load the
plastic rotations can be considerably larger, and more detailed checks of the rotation
capacity are therefore needed in collision analysis; this is further described below.
Table 2.1 Definition of reinforcing steel classes according to Eurocode 2
CEN (2004).
Class fyk [MPa] ftk / fyk [-] εuk [%]
A 400 - 600 ≥ 1.05 ≥ 2.5
B 400 - 600 ≥ 1.08 ≥ 5.0
C 400 - 600 ≥ 1.15 & < 1.35 ≥ 7.5
The reinforcement classes specified in Eurocode 2 are of the new European standard
which replaced the old Swedish system about 20 years ago. When analysing older
structures it can therefore be difficult to translate the old types of reinforcement to
today’s standards. The old types were in general more ductile and some of them even
more ductile than today’s class C, meaning they allowed a greater plastic rotation,
Johansson and Laine (2012). This is important to keep in mind when dealing with
older structures.
The plastic rotation capacity θpl for a beam with specified reinforcement and concrete
class is given as a diagram in Figure 2.10. Here is only reinforcement class B and C
represented, since class A is not recommended to be used in plastic analysis. The
diagram is clearly visualising how the reinforcement will fail first if the amount of
reinforcement is small and how the concrete will fail first if the beam is well
reinforced. For an optimal plastic behaviour it is necessary to have a reinforcement
amount near the boundary between these two failure mechanisms.

-- 25 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
12
crushing of
concrete
reinforcement
failure
Figure 2.10 Plastic rotation capacity θpl for different reinforcement and concrete
classes. Limit between reinforcement and concrete failure for one type
of concrete with class C reinforcement is visualised. The values apply
only for a shear slenderness λ of 3, CEN (2004).
For the plastic hinges to be formed in the considered regions, the following conditions
regarding the area of the tensile reinforcement needs to be met
I. xu / d < 0.45 for concrete strength class ≤ C50/60
II. xu / d < 0.35 if concrete class ≥ C55/67
The values for the plastic rotation capacity given in Figure 2.10 needs to be multiplied
with a correction factor kλ for beam cross sections with a shear slenderness, λ, other
than 3
pl	d	pl k	

	  		,	
(2.19)
and
3

 	k	
(2.20)
The shear slenderness is defined as
d
l0

		
(2.21)
where l0 is the distance between the zero moment section and maximum moment
section after redistribution and d is the effective depth. The shear slenderness can in a
simplified way be calculated as
d	V
M
sd
sd


		
(2.22)

-- 26 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 13
where Msd and Vsd are the design bending moment and the corresponding design shear
force.
Eurocode 2 is the only standard treated in this section but not the only design code
which gives recommendations for how to calculate the plastic rotation capacity.
Bk 25:2 (Fortifikationsförvaltningen, 1973) and Betonghandboken (Cederwall, et al.,
1990) are two other handbooks, though a little bit older, that treats the same subject.
In Johansson and Laine (2012) a comparison is made between the methods presented
in these three standards. The result shows that Eurocode produces reasonable values
for the rotation capacity that lies somewhere in between the values from the other two
methods.
2.3 Dynamic models
2.3.1 Classic impact theory
A simple way to study a one-dimensional collision between two bodies is to use the
classic impact theory. It is based on the assumptions that the first body has an initial
velocity of v0 and a mass of m1 and the second body has no initial velocity and
mass m2. After the impact the velocities are assumed to be v1 and v2 respectively as
shown in Figure 2.11.
m1 m2
v0
Before impact
m1 m2
v2
After impact
v = 0
v1
Figure 2.11 Illustration of a body with a certain velocity colliding with another
body without any velocity. After the collision both bodies will have a
new velocity.
The kinetic energy and momentum before the impact are
2
2
0	1
0,
v	m
Ek

	
(2.23)
0	1	0 v	m	p 		
(2.24)
The classic impact theory can describe both an elastic and a plastic collision by
changing the coefficient of restitution (COR) e, between 0 (plastic impact) and 1
(elastic impact). If the COR is 0 < e < 1 it means that the impact is somewhere in
between elastic and plastic, the COR is defined by
0
1	2
v
v	v
e 
	
(2.25)
The final velocities of the two bodies after the impact are consequently

-- 27 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
14
0
2	1
2	1
1 v
m	m
m	e	m
v 

	
	
(2.26)
0
2	1
1
2
)	1	( v
m	m
m	e
v 

	
	
(2.27)
For an elastic collision both the kinetic energy and momentum are preserved in the
impact. This gives a COR of e = 1 and the final velocities become
0
2	1
2	1
,1 v
m	m
m	m
v el 


	
(2.28)
0
2	1
1
,2
2 v
m	m
m
v el 


	
(2.29)
From these equations it can be noted that v1,el is negative if m1 < m2, meaning that
body 1 will be moving in the opposite direction after the impact. Body 2 on the other
hand will always be moving in the positive direction; i.e. the initial direction of
movement of body 1. If m1 = m2 body 1 will be stationary after the impact and all
energy will be transferred to body 2.
For a plastic collision only the momentum is preserved and e = 0. The kinetic energy
is here reduced because of the transformation to potential energy during the duration
of the plastic impact. The final velocity of the two bodies will be equal, thus they
move together after the impact
0
2	1
1
,2,1 v
m	m
m
v pl 

	
(2.30)
From this equation it can be seen that v1,2,pl will be half the size of v0 when m1 = m2
and that v1,2,pl  0 when m1 << m2, meaning all kinetic energy will be transformed
and absorbed in body 1.
It is also possible to describe an elasto-plastic behaviour for a case when 0 < e < 1,
which means that the response lies somewhere between the elastic and plastic case.
The difficulty with this case is how to decide on what value of the COR to use.
The kinetic energy after the impact can be stated as a function of the initial kinetic
energy. For an elastic collision
0,
2
2	1
2	1
2
0
2	1
2	1	1
2
,1	1
,1, 2	2 k
el
el	k E
m	m
m	m
v
m	m
m	m	m	v	m
E 












 




	
(2.31)
 	 0,	2
2	1
2	1
2
0
2	1
1	2
2
,2	2
,2,
4	2
2	2 k
el
el	k E
m	m
m	m
v
m	m
m	m	v	m
E 

	





 




	
(2.32)
and for a plastic collision the total kinetic energy is

-- 28 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 15
 	 0,
2	1
1
2
0
2	1
1	2	1
2
,2,1	2	1
, 2	2 k
pl
pl	k E
m	m
m
v
m	m
m	m	m	v	m	m
E 






 



	
	
(2.33)
The amount of kinetic energy acting in the positive direction of the system, regardless
the value of e, can be described as





2,	1,
2,
3,
k	k
k
k E	E
E
E	
for0
0
1
1


v
v (2.34)
With the help of this equation a ratio between the initial and final kinetic energy
acting in the positive direction can be calculated, Ek,3 / Ek,0, as a function of the ratio
of the bodies masses m1 / m2. The relationship is here presented for different values of
the COR in a graph, see Figure 2.12.
Figure 2.12 Ratio of kinetic energy, acting in the positive direction, as a function of
the mass ratio, for different values of the coefficient of restitution, e.
If m1 < m2, which is usually true for the type of collision that will be studied in this
report, the difference in response for an elastic and plastic collision can be expressed
as a ratio of the final kinetic energies acting in the positive direction
1
4	4
2
1	2	1
2
,
,2,
,3,
,3,




	
m
m	m	m
m
E
E
E
E
pl	k
el	k
pl	k
el	k
(2.35)
From this ratio it is clear that the kinetic energy for the elastic case is larger, which
makes sense since, as stated before, all kinetic energy is preserved. When m1 / m2  0
the kinetic energy is four times larger for the elastic case and when m1 / m2  1 it is
two times larger.
0.0
0.2
0.4
0.6
0.8
1.0
1.2
0.001 0.01 0.1 1 10 100 1000
Ratio of kinetic energy
 Ek3 / Ek0 [-]
Mass ratio m1 / m2 [-]
e=0
e=0.5
e=1

-- 29 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
16
This relation can also be seen in Figure 2.12, and it is clear that the difference is not
evened out until m1 / m2 > 100. From this, one can understand the importance of
choosing a correct value for the COR.
2.3.2 Single degree of freedom
Perhaps the simplest dynamical model is a spring-mass oscillator shown in
Figure 2.13.
u(t)
k
F(t)
F(t)
Rsta
m
m
c
c
x
c
Rdyn
Figure 2.13 Single degree of freedom spring mass oscillator.
Since only one variable, u, is needed to describe the instantaneous position of the
mass, this is called a single degree of freedom (SDOF) system. The equation of
motion for this system can be written as
)	(t	F	ku	u	c	u	m 		 		
(2.36)
The effect of the damping c is considered negligible for applications dealt with in this
report due to the short time period of the load application and that only the maximum
displacement u is of interest. If the system undergoes free vibration, meaning F(t) = 0,
the homogeneous second-order differential equation becomes
0		 ku	u	m 	
(2.37)
The general solution of equation (2.37) is
t	A	t	A	t	u n	n	

	 sin	cos	)	( 2	1 		
(2.38)
where A1 and A2 are constants that are chosen so that the initial conditions will be
satisfied. In this case, the initial conditions for displacement and velocity are
0	)	0	( u	u 	
(2.39)
0	0	)	0	( v	u	v 	 	
(2.40)
Also ωn is the undamped natural circular frequency, defined by

-- 30 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 17
 	s
rad
m
k
n 
		
(2.41)
So by applying the initial conditions to equation (2.38), the time-dependent
displacement for free vibration of an undamped mass-spring oscillator is
  	t
v
t	u	t	u n
n
n	

 sin	cos 0
0 		
(2.42)
Equation (2.42) only applies for free vibration, and equation (2.43) is a more general
solution that is used to determine the complementary solution when the external force
F(t) ≠ 0
k
t	F
t	A	t	A	t	u n	n
)	(
sin	cos	)	( 2	1 		
	
		
(2.43)
A very important special case is the response of an undamped SDOF system to a short
duration impulse. If we consider a force with a duration, td, much smaller than the
period time, T, of the SDOF system, that is td << Tn, the impulse is defined as
 		
dt
dt	t	F	I
0
(2.44)
If the system is at rest for t ≤ 0, the equation of motion and initial conditions are


 	
	 0
0
0
)	( d	t	t	t	F
ku	u	m 
    0	0	0 	 u	u 
(2.45)
By integrating equation (2.45) with respect to time and applying the initial conditions
we get
  	I	t	ku	t	u	m d	avg	d 			
(2.46)
where uavg is the average displacement in the time interval 0 < t < td. By letting
td  0, mening that impulse corresponds to the characteristic impulse, the second
term in equation (2.46) can be ignored, which gives
 	 	I	u	m 
0		
(2.47)
Thus the impulse gives the mass an initial velocity of
 	 m
I
u 
0		
(2.48)
but leaves the initial displacement to

-- 31 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
18
 	 	0	0 
u	
(2.49)
These expressions can be used as “initial” conditions for the free vibration problem.
By using these conditions in equation (2.42) we get the impulse response
  	t
m
I
t	u n
n

 sin		
(2.50)
The unit impulse response function is obtained by letting I = 1, and is by convention
often called h(t)
  	t
m
t	h n
n

 sin
1
	
(2.51)
SDOF loaded with characteristic impulse Ic	2.3.2.1
In Figure 2.14 a characteristic impulse for an ideal impulse load, a time dependent
load with infinitely high pressure acting during an infinitely short time, is shown.
Ic
F
t
ta
Figure 2.14 Illustration of the characteristic impulse Ic.
The action of an impulse, Ic, acting on a body with mass m can be expressed as
v	m	Ic 		
(2.52)
The kinetic energy, Ek, for the same body with velocity v is
2
2
v	m
Ek

	
(2.53)
which means that by combining equations (2.52) and (2.53) the kinetic energy
generated by an impulse acting on a body with mass m can be expressed as

-- 32 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 19
m
I
Ek 2
2
	
(2.54)
The kinetic energy, Ek, transferred into an impulse loaded structure can be seen as
exterior work, We. This needs to be in equilibrium with the interior work, Wi, of the
body in order to counteract the initiated movement coming from the impulse. This
means an energy balance is obtained
i	e W	W 	
(2.55)
which is the basis used in the calculation model for an impulse loaded structure. The
interior work can act in different ways depending on its type of response. Here an
elastic, a plastic and an elasto-plastic structural response will be further examined.
Elastic system	2.3.2.2
For an elastic system, see Figure 2.15, the interior reaction force, R(u), is expressed as
  	u	k	u	R 		
(2.56)
where k is a constant stiffness and u is the displacement. Based on this the interior
work can be calculated as
 
2	2
2
el	el	el
i
ku	u	u	R
W 

	
(2.57)
where uel is the elastic displacement needed to absorb the external work according to
Figure 2.15c. By combining equations (2.54) and (2.57) the needed elastic
deformation can be expressed as
n
c
el m
I
u

	
(2.58)
F(t)
R(u)
m u
u
R
Wi
uel
k
u
F, R
uel
k
Wi
We
R
a) b) c)
Figure 2.15 System with linear elastic response: (a) SDOF-system, (b) load-
deflection relationship, (c) energy equilibrium between external and
internal work.

-- 33 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
20
Plastic system	2.3.2.3
When considering a plastic system, see Figure 2.16, the internal reaction force is set to
a constant capacity, R. The internal work can then be expressed as
 	 	pl	pl	pl	i Ru	u	u	R	W 			
(2.59)
where upl is the plastic displacement needed to absorb the external work according to
Figure 2.16c. By combining equations (2.54) and (2.59) the needed elastic
deformation can be expressed as
mR
I
u c
pl 2
2
	
(2.60)
F(t)
R(u)
m u
u
R
R
Wi
upl
u
F, R
upl
Wi
We
R
a) b) c)
Figure 2.16 System with plastic response: (a) SDOF-system, (b) load-deflection
relationship, (c) energy equilibrium between external and internal
work.
Elasto-plastic system	2.3.2.4
For an elasto-plastic system, see Figure 2.17, the internal reaction force R(u) is
expressed as
  





1,
1
,
,
el
el,
u	u	R
u	u	ku
u	R	
(2.61)
where uel,1 is the limit for elastic response, which is
k
R
uel 	1,	
(2.62)
The internal work can on the basis of this be expressed as
 		1,	1, 2
2 pl	el	i u	u
R
W 		
(2.63)

-- 34 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 21
and by combining equation (2.63) with equations (2.54) and (2.55) the required plastic
deformation can be calculated as
2	2	2
1,	1,
2
1,
el
pl
el	k
pl
u
u
u
mR
I
u 				
(2.64)
where upl is the plastic response for a pure plastic system. The total deformation can
then be calculated to
2
1,
1,	1,
el
pl	pl	el	tot
u
u	u	u	u 				
(2.65)
F(t)
R(u)
m u
u
R
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
a) b) c)
Figure 2.17 System with elastic-plastic response: (a) SDOF-system, (b) load-
deflection relationship, (c) energy equilibrium between external and
internal work.

-- 35 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
22
2.3.3 Multi-degree of freedom
u1 u2
k1 k2
c1 c2
F1(t) F2(t)
m1
m2
Figure 2.18 Two-degree of freedom system (2DOF) consisting of two masses,
springs and dampers respectively.
In Figure 2.18 we see a two-degree of freedom system (2DOF) consisting of two
masses. In order to derive the equation of motion for this system Newton’s Second
Law is applied. Firstly free-body diagrams are drawn for each of the masses with the
unknown internal forces labelled, see Figure 2.19.
Rdyn1
F1(t) 	F2(t)
m1
m2
Rdyn1 	Rdyn2
Rsta1 Rsta1 	Rsta2
Figure 2.19 Free-body diagrams showing all forces, both internal and external,
acting on the two masses.
Force equilibrium for the two masses gives
1	1	1	1	1	1 )	(	: dyn	sta R	R	t	F	u	m	F 					  	
(2.66)
2	2	1	1	2	2	2	2 )	(	: dyn	sta	dyn	sta R	R	R	R	t	F	u	m	F 							  	
(2.67)
The spring forces, Rsta1 and Rsta2, are related to the displacements and the viscous
damping forces, Rdyn1 and Rdyn2, are related to the velocities
 		2	1	1	1 u	u	k	Rsta 		
(2.68)
 		2	1	1	1 u	u	c	Rdyn 	 		
(2.69)
2	2	2 u	k	Rsta 	
(2.70)
2	2	2 u	c	Rdyn 		
(2.71)
By combining and simplifying the above expressions the following is obtained
 	  	 	)	(	1	2	1	1	2	1	1	1	1 t	F	u	u	k	u	u	c	u	m 				 			
(2.72)
 	 	 	 	)	(	2	2	1	2	1	1	2	1	2	1	1	2	2 t	F	k	k	u	u	k	c	c	u	u	c	u	m 						 			
(2.73)

-- 36 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 23
Equations (2.72) and (2.73) can be written on matrix form






	











	

	











	

	











)	(
)	(
0
0
2
1
2
1
2	1	1
1	1
2
1
2	1	1
1	1
2
1
2
1
t	F
t	F
u
u
k	k	k
k	k
u
u
c	c	c
c	c
u
u
m
m




(2.74)
or with symbolic matrix notation
 	t	F	Ku	u	C	u	M 		 		
(2.75)
where M is the mass matrix, C is the viscous damping matrix, K is the stiffness
matrix, u is the displacement vector and F(t) is the load vector,
Craig Jr. and Kurdila (2006). When comparing equation (2.75) to the equation of
motion for a SDOF system (2.18), it can be seen that they have the same arrangement.
In order to calculate the natural frequencies and mode shapes of the system the
damping is set to zero. To keep it more general the equation of motion is from now on
written on a more general form






	











	











)	(
)	(
2
1
2
1
22	21
12	11
2
1
22	21
12	11
t	F
t	F
u
u
k	k
k	k
u
u
m	m
m	m


(2.76)
where k11 = k1, k12 = k21 = -k1 and k22 = k1-k2. In the same way as for a SDOF-system
the solution will consist of one complementary solution, obtained by setting the force
vector to zero, plus a particular solution.
  	  	 	t	u	t	u	t	u c	p 		
(2.77)
The complementary solution determines the natural frequencies and natural modes of
the system which is very important for further analyses. The equation of motion now
has the form






	











	











0
0
2
1
22	21
12	11
2
1
22	21
12	11
u
u
k	k
k	k
u
u
m	m
m	m


(2.78)
The system is assumed to undergo harmonic motion of the form
  	 		

	 	 t	U	t	u cos	1	1
  	 		

	 	 t	U	t	u cos	2	2
(2.79)
where U1 and U2 are signed constants that are used in order to determine the
amplitudes of the two sinusoidal motions. This is then substituted into equation (2.78)
in order to obtain the algebraic eigenvalue problem






	



















	





0
0
2
1
22	21
12	11	2
22	21
12	11
U
U
m	m
m	m
k	k
k	k
	
(2.80)

-- 37 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
24
The only non-trivial solution to this set of homogeneous linear algebraic equations
correspond to values of ω2 that satisfy the characteristic equation






	





	





0
0
22	21
12	11	2
22	21
12	11
m	m
m	m
k	k
k	k
	
(2.81)
Equation (2.81) is solved for the two roots labelled ω12 and ω22, these are the
eigenvalues and ω1 ≤ ω2. The parameters ω1 and ω2 are the circular natural
frequencies of the system expressed in rad/s. In order to calculate the natural modes,
or the eigenvectors, ω12 is substituted back into the first row of equation (2.80) in
order to obtain the mode shape ratio
 1	1
2
1 





 U
U
	
(2.82)
In the same way ω22 is substituted into the second row to obtain
 2	1
2
2 





 U
U
	
(2.83)
The mode shapes is characterized by the following notation
2	,	1
1
2
1 	





	





	 r	A
r
r

	

(2.84)
where Ar is a constant. The general solution of equation (2.76) is then with natural
frequencies and mode shape ratios inserted
  	 	 	 	
  	 	 	 		2	2	2	2	1	1	1	1	2
2	2	2	1	1	1	1
cos	cos
cos	cos

	
	
	
	
	

	
	
	
			
			
t	A	t	A	t	u
t	A	t	A	t	u
(2.85)
where the constants A1, A2, α1 and α2 are determined by initial conditions,
Craig Jr. and Kurdila (2006). Usually the initial conditions are u1(0), u2(0), u1(0) and
u2(0). In this solution the damping is neglected, since it has little effect on the
maximum response during a short term impact. An alternate way to write the general
solution is
  	  	  	  	 
  	  	  	  	 	t	B	t	A	t	B	t	A	t	u
t	B	t	A	t	B	t	A	t	u
2	2	2	2	2	2	1	1	1	1	1	1	2
2	2	2	2	1	1	1	1	1
sin	cos	sin	cos
sin	cos	sin	cos

	
	
	
	
	
	
	

	
	
	
			
			
(2.86)
Where the constants A1, A2, B1 and B2 are determined by initial conditions. It is also
possible to write equation (2.86) on vector form using the notation in equation (2.84),
it then becomes
  	  	  	  	 	t	B	t	A	t	B	t	A	t 2	2	2	2	2	2	1	1	1	1	1	1 sin	cos	sin	cos	

	
	
	 								u	
(2.87)

-- 38 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 25
2.3.4 The Central Difference Method
The Central Difference Method is an explicit solution method for the numerical
solution of second-order differential equations in structural dynamics applications.
Recall the equation of motion, here written on matrix form
)	(t	F	u	K	u	C	u	M 						 		
(2.88)
where M is the mass matrix, C is the damping matrix, K is the stiffness matrix, F(t) is
exterior load vector and , and u is acceleration-, velocity- and displacement-
vectors respectively. It is a conditionally stable method where each time-step, ∆t, must
be less than a critical time-step ∆tcrit, otherwise there will be an error that grows to
such proportions that the obtained solution quickly becomes worthless. The critical
time step can be expressed as
1
max
2
2 
			 	MK

crit	t	
(2.89)
where ωmax is the highest eigenfrequency of the system. It should be noted that in
particular for SDOF-systems, a substantially smaller time-step might still be necessary
in order to obtain an accurate solution. Which time-step to use in different situations
depends on a combination of the load configuration and the response time of the
system, but usually a time-step in the magnitude of one hundredth of the duration of
the load works well, Johansson and Laine (2012).
The basis of the Central Difference Method is the simple finite-difference expressions
for velocity and acceleration
t
t	t	t	t
t 	

 			
2
u	u
u	
(2.90)
2
2
t
t	t	t	t	t
t 
		
 			 u	u	u
u	
(2.91)
When the finite-difference expressions for the first and second derivatives are
substituted into the governing equation of motion evaluated at time t, the discrete
governing equation results in
)	(
2
2
2 2	2	2 t
t	t	t	t	t t	t	t	t	t F	u
C	M
u
M
K	u
C	M 	





	


	







		





	

 				
(2.92)
Ultimately the deflection at time t+∆t can be written as
 	 	




 





	


	







						 	
	
	 t	t	t	t	t t	t	t
t	t	t u
C	M
u
M
K	F	C	M	u 2
2
)	(	2 2	2
1	1	2
(2.93)
As seen all terms on the right hand side in equation (2.93) is from the time t or t − Δt,
which means that the deflection ut+Δt can be solved using already known information.
Also a reasonable approximation, which is on the safe side for an impulse loaded
structure, is to put the damping to zero, C = 0. This is due to the fact that an impulse
load is normally acting during a very short time, meaning that the effect of the

-- 39 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
26
damping on the maximum deflection is negligible, Johansson and Laine (2012). This
simplifies equation (2.93) to
 	 	




 






	







			 	

	 t	t	t	t	t t	t
t	t u
M
u
M
K	F	M	u 2	2
1	2 2
)	(	
(2.94)
From equation (2.94) it can be seen that the Central Difference Method needs a
special starting step since in the first step when calculating the displacement uΔt
information about the deflection at time −Δt is needed. For this reason a special
starting step is used, expressed as
0
2
0	0 2 u	u	u	u 	 

						
t
t	t	
(2.95)
in order to start the numerical analysis.
The Central Difference Method is summarized as an algorithm in Appendix A.
There is several other related methods to solve this type of problem, for example the
Newmark-β Method and the Wilson-θ Method. These methods are not discussed
further in this thesis; instead readers are referred to Craig Jr. and Kurdila (2006).
Earlier in this section the stiffness, K, is assumed to show a linear elastic behaviour.
However, it is relatively easy to use the same expressions but with a non-linear
material response. Since the stiffness, K, is given for time t when calculating the
displacement at time t+∆t, it is possible to use a secant stiffness in order to describe a
non-linear response, see Figure 2.20. That is, by letting the stiffness at time t be a
function of the present deflection, u(t), meaning, kt = kt(ut), it is possible to compute
the stiffness for an arbitrary material response. In equation (2.94) it is not really of
interest to describe the stiffness per se, but the internal force, Rt, acting in the current
time-step
t	t	t u	k	R 		
(2.96)
The secant stiffness is therefore expressed as
t
t
t u
R
k 	
(2.97)

-- 40 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 27
u
R
u(tk)
R(ti)
k(u(ti)) k(u(tj))
u(ti) u(tj)
k(u(tk))
R(tj)
u
R
k(u(tj-∆t))
u(tj-∆t)
R(u(tj-∆t))
k(u(t0))
k(u(tj)
R(u(tj)
u(tj)
a) b)
Figure 2.20 Secant stiffness at time t for a system with arbitrary material properties.
In the same way it is possible to adapt the stiffness during off-loading. By keeping
track of if the current stiffness should correspond to loading or off-loading it is
possible to adapt the stiffness to the present case. For example, it is possible that for a
plastic response allow the off- and on-loading correspond to a desired linear-elastic
stiffness up to a certain yield-stress, and for further loading, with growing plastic
deformations, let the secant stiffness take over.

-- 41 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
28
3 Analysis of Collision Models and Parameter Study
In this chapter collisions will be simulated and their responses studied. For this
purpose an algorithm for a 2DOF spring-mass system was created using the
commercial software MATLAB, see Appendix H, where the central difference
method is used to find a numerical solution of the displacement in each time step.
3.1 2DOF system without barrier
In this section the response of a system during a collision will be studied. With the
starting point in the classic impact theory the 2DOF system, with the stiffness of
body 2 k2 set to zero, can be utilized for the analysis, see Figure 3.1.
Classic theory 	2DOF system
m1 m2
v0 v = 0 v0
m1 m2
k1
v = 0
Figure 3.1 Illustration of how the classic theory can be analysed using a 2DOF
spring-mass system.
The response of an impact according to the classic theory is presented in Figure 2.12.
Based on this four points were chosen, to be studied further in this section. These
correspond to elastic and plastic response, e = 1 and e = 0, when the mass ratio is
equal to 0.1 and when it is equal to 10, see Figure 3.2.
0.0
0.2
0.4
0.6
0.8
1.0
1.2
0.001 0.01 0.1 1 10 100 1000
Ratio of kinetic energy
 Ek3 / Ek0 [-]
Mass ratio m1 / m2 [-]
e=0
e=0.5
e=1
Figure 3.2 Points of interest in the classic impact theory to be studied further,
based on Figure 2.12.

-- 42 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 29
3.1.1 Elastic response
The collision with elastic response is first studied. The spring will have a linear elastic
behaviour when the deformation is positive and a stiffness of zero when the
deformation is negative. This is due to the fact that the two bodies should only interact
through compression forces, not tension forces, see Figure 3.3.
R1
k1
∆u = u1 – u2
Figure 3.3 The force-displacement relationship used for the spring when studying
a classic impact with elastic response.
The parameters for the analyses are chosen to correspond to the points marked in
Figure 3.2 by letting the mass of the second body m2 be constant and varying the mass
of the first body m1 in order to obtain the correct mass ratio. For the collisions with a
mass ratio of ten, two different stiffnesses are also considered, see Table 3.1.
Table 3.1 Input parameters for the elastic classic collision analyses.
Case m1
[kg]
m2
[kg]
k1
[kN/m]
v0
[m/s]
Collision 1 1 000 10 000 100 20
Collision 2 100 000 10 000 100 20
Collision 3 100 000 10 000 1 000 20
The results from the analyses are compared in a force-time diagram where the force in
the spring during the impact period is shown in Figure 3.4. This and all other analyses
in this section are studied during a time period of 1.0 second, and with an initial
velocity v0 of 20 m/s (72 km/h).

-- 43 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
30
Figure 3.4 Force vs time during an impact in an elastic classic collision, for
parameters in the different cases see Table 3.1.
In Figure 3.4 for Collision 2 the duration of the impact is roughly 0.95 seconds, while
it is only about 0.3 seconds for Collision 1. This is due to that a larger impulse needs
to be transferred to the second body when the momentum of the first body is larger.
For Collision 3 the stiffness is ten times larger, but the mass ratio is the same as for
Collision 2. Here the impulse, the area under the force-time graph, is equally large as
for Collision 2 because of the same momentum. But the duration of the impact is now
the same as for Collision 1 because of the higher stiffness, and the maximum force
therefore needs to be higher.
In Figure 3.5 various other results from the analysis of Collision 1 are presented,
namely the displacement u, the velocity v, the impulse I and the work W, for both
bodies and as a function of time. Figure 3.5a shows the displacement over time for the
two bodies. During the impact body 1 is deformed initially before body 2 is set in
motion. After about 0.15 seconds body 1 is stationary, velocity equal to zero, before it
changes direction and the deformation decreases again. After about 0.3 seconds the
impact is over and the two bodies are no longer in contact with each other, this can
also be seen in Figure 3.5b. As discussed in Section 2.3.1, the first body will obtain a
negative velocity after impact if it has smaller mass compared to the second body, and
this is confirmed in this analysis, see Figure 3.5b. Figure 3.5c clearly shows how the
impulse, or momentum, is transferred from the first body to the second body, as the
two curves are exactly mirrored. Finally Figure 3.5d shows how the internal work
develops in body 1 and how an external work is transferred to body 2. The work done
in body 1 increases in the beginning of the impact, but decreases after the object
changes direction, due to that a negative work is done. The work done on body 2
increases slowly and ends up at the same level as the work done in object 1. The
results for collision 1 are compared with the classic impact theory in Table 3.2. As
seen they are almost identical and gives the same energy ratio Ek3 / Ek0 as in
Figure 3.2
For the corresponding results for Collision 2 and Collision 3, see Appendix B.
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Force
 R1 [MN]
Time t [s]
Collision 1
Collision 2
Collision 3

-- 44 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 31
Table 3.2 Comparison of results between classic impact theory and the 2DOF
system for elastic response, collision 1.
Classic 2DOF
e [-] 1 1.000
v1 [m/s] -16.364 -16.364
v2 [m/s] 3.636 3.636
Ek0 [kJ] 200 200
Ek3 [kJ] 66.120 66.117
Ek3/Ek0 0.331 0.331
a) b)
c) d)
Figure 3.5 Results from an elastic collision, Collision 1, where m1 = 1 000 kg,
m2 = 10 000 kg, k1 = 100 kN/m and v0 = 20 m/s.
-12
-10
-8
-6
-4
-2
0
2
4
0.0 0.5 1.0
Displacement
 u [m]
Time t [s]
u1
u2
-20
-15
-10
-5
0
5
10
15
20
25
0.0 0.5 1.0
Velocity
 v [m/s]
Time t [s]
v1
v2
-20
-10
0
10
20
30
40
0.0 0.5 1.0
Impulse
 I [kNs]
Time t [s]
Im1
Im2
0
50
100
150
200
250
0.0 0.5 1.0
Work
 W [kNm]
Time t [s]
Wi1
We2

-- 45 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
32
3.1.2 Plastic response
The collision with plastic response is now studied. The spring will have a plastic
behaviour when the deformation is positive, and as before, a stiffness of zero when
the deformation is negative, see Figure 3.6.
R1
R1
k1
∆u = u1 – u2
Figure 3.6 The force-displacement relationship used for the spring when studying
a classic impact with plastic response.
The parameters for the analyses are chosen to correspond to the points in Figure 3.2,
this time the points on the curve for plastic response where e = 0. This is
accomplished by again letting the mass of the second body m2 be constant while
varying the mass of the first body m1. For the higher mass ratio two different load
capacities are considered in the analysis. To be able to simulate an entirely plastic
behaviour, the stiffness of the spring is given a sufficiently high value, see Table 3.3.
The COR e is subsequently calculated for the three analyses according to
equation (2.25), to ensure that it is close to zero.
Table 3.3 Input parameters for the plastic classic collision analyses.
Case m1
[kg]
m2
[kg]
k1
[MN/m]
R1
[kN]
v0
[m/s] e
Collision 4 1 000 10 000 100 200 20 0.033
Collision 5 100 000 10 000 100 200 20 0.011
Collision 6 100 000 10 000 100 400 20 0.021
The results from the analyses are compared in a force-time diagram where the force in
the spring during the impact period is visualized in Figure 3.7.

-- 46 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 33
Figure 3.7 Force vs time during an impact in a plastic classic collision, for
parameters in the different cases see Table 3.3.
The shape of the impulse for all three cases in Figure 3.7 is almost a perfect rectangle,
which is characteristic for a plastic response. The fact that the stiffness is not infinitely
large is the reason for the small inclinations of the loading and unloading curves. The
plastic response gives a constant force applied to the second body during most of the
impact period. This leads to that the duration of impact for Collision 5 is much longer,
about 0.93 seconds, compared to Collision 4 which has a duration of about
0.1 seconds. This is due to the larger impulse that needs to be transferred in
Collision 5, where the mass m1 is larger. When the load capacity, or yield force, is
doubled in Collision 6 the impact duration is half as long, roughly 0.47 seconds,
compared to Collision 5. This means that the transferred impulse is equal in the two
collisions, which should also be the case because of the same momentum the bodies
have prior to the collision.
In Figure 3.8 several other results from the analysis of Collision 4 are presented,
namely the displacement u, the velocity v, the impulse I and the work W, for both
bodies and as a function of time. In Figure 3.8a the displacement over time is
visualized, and it can be seen how the plastic deformation of the first body takes place
entirely during the first 0.1 seconds of the impact. After this time, the impact is over
and the two bodies are not in contact any more. This is however not correct since in a
fully plastic impact the bodies will stay in contact with each other. What is seen here
is because of the elastic behaviour at loading and unloading that are used in the
calculations. That the plasticization process is finished is confirmed in Figure 3.8b
where it is seen that the velocities will be constant after this period, with body 2
having the highest velocity. Figure 3.8c shows how the impulse is transferred between
the bodies, and it is exactly mirrored as it was for the elastic collisions. Figure 3.8d
shows a different behaviour of body 1 compared to the elastic analysis. Here the work
done in body 1 is larger than in body 2 due to the fact that plastic deformation takes
place in the former. The work done on body 2 is on the other hand a lot smaller. This
is interpreted as that the impact energy is mostly consumed in the plasticization
process of body 1, instead of acting on body 2. Another observation is that for a
plastic analysis the first body will never bounce back and get a negative velocity, in
opposite to what happens in the elastic analysis when m1 < m2. The results for
collision 4 are compared with the classic impact theory in Table 3.4. There is a small
difference in the results, but the energy ratio Ek3 / Ek0 is still very close to each other
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
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Force
 R1 [MN]
Time t [s]
Collision 4
Collision 5
Collision 6

-- 47 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
34
and has the same value as given in Figure 3.2. For a better correlation with the classic
theory a higher stiffness could be used, i.e. a lower value of the COR would be
obtained.
For the corresponding results for Collision 5 and Collision 6, see Appendix B.
Table 3.4 Comparison of results between classic impact theory and the 2DOF
system for plastic response, collision 4.
Classic 2DOF
e [-] 0 0.033
v1 [m/s] 1.8182 1.214
v2 [m/s] 1.8182 1.879
Ek0 [J] 200 000 200 000
Ek3 [J] 18 182 18 382
Ek3/Ek0 0.091 0.092
a) b)
c) d)
Figure 3.8 Results from a plastic collision, Collision 4, where m1 = 1 000 kg,
m2 = 10 000 kg, k1 = 100 MN/m, R1 = 200 kN and v0 = 20 m/s.
0.0
0.5
1.0
1.5
2.0
2.5
0.0 0.5 1.0
Displacement
 u [m]
Time t [s]
u1
u2
0
5
10
15
20
25
0.0 0.5 1.0
Velocity
 v [m/s]
Time t [s]
v1
v2
0
5
10
15
20
25
0.0 0.5 1.0
Impulse
 I [kNs]
Time t [s]
Im1
Im2
0
50
100
150
200
250
0.0 0.5 1.0
Work
 W [kNm]
Time t [s]
Wi1
We2

-- 48 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 35
3.2 Analysis of 2DOF system with a barrier
For impact against a non-rigid barrier, for example body 2 in a 2DOF system, the load
response R2(t) will depend on the mass and stiffness of both bodies.
m1 m2
v0 v = 0 v0
m1 m2
k1
v = 0
k2	k1
Figure 3.9 Illustration of a) Previous system used in section 3.1 b) 2DOF system
used in this section.
3.2.1 Elastic response
u2
R2
k2
k2
R1
k1
∆u = u1 – u2
Figure 3.10 The force-displacement relationship used for the two springs when
studying a 2DOF system with elastic responses.
The spring stiffness k1 has a linear elastic behaviour when the deformation is positive
and a stiffness of zero when the deformation is negative. This is due to the fact that
the two bodies should only interact through compression forces, not tension forces.
The stiffness of the second spring k2 is considered to be linear elastic, see Figure 3.10.
The displacement of the second body, u2, and thereby also the response in time R2(t) is
affected by the eigenfrequency of both body 1, f1, and body 2, f2, thereby giving it a
more complex appearance. This relation can be expressed as a mass ratio m1 / m2 and
a frequency ratio, f1 / f2, for body 1 and body 2. The approach presented here is based
on the assumption that the dynamic load that arises during impact can be transformed
to an equivalent static load, F2,sta, which can be used for static analysis of the structure
in question. A useful tool is then to use a loading factor βel that describes the relation
between the equivalent static load F2,sta and the maximum dynamic load F2,el
el	el	sta F	F ,2	,2 	
	
(3.1)
It should be noted that the equivalent static load corresponds to the interior force R2
acting on body 2 as seen in Figure 2.19

-- 49 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
36
2,	2	2	,2 el	sta u	k	R	F 		
(3.2)
The dynamic load F2,el for a hard impact, i.e impact against a rigid barrier, can be
found by letting the initial kinetic energy Ekinetic be equal to the elastic strain energy
Estrain of the colliding object
strain	kinetic E	E 	
(3.3)
The external work We which is equal to the initial kinetic energy is expressed as
2
2
0	mv
E	W kinetic	e 		
(3.4)
∆u
Estrain
u1
el	F ,2
k1
Figure 3.11 Stress-strain curve showing the elastic strain energy.
The area under the stress-strain curve is the elastic strain energy Estrain, which is equal
to the internal work
2
1	,2 u	F
E	W el
strain	i 		
(3.5)
where the deflection u can be expressed as
1
,2
1 k
F
u el
	
(3.6)
Thereby the elastic strain energy can be expressed as
1
2
,2
2k
F
E el
strain 	
(3.7)
By putting the initial kinetic energy equal to the elastic strain energy
1
2
,2
2
0	1
2	2 k
F	v	m el
	
(3.8)
the dynamic load can be expressed as
1	1	0	,2 m	k	v	F el 		
(3.9)

-- 50 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 37
The load factor in equation (3.1) can be defined as
el
el F
R
,2
2	

		
(3.10)
In Johansson (2014a) a diagram showing the relation between the load factor βel and
the frequency ratio f1 / f2 is presented for different values of the mass ratio m1 / m2, this
is shown in Figure 3.12. The tabulated values for the load factor βel can be found in
Appendix C.
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
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0 1.1 1.2 1.3 1.4 1.5
Load factor
 βel [-]
Frequency ratio f1 / f2 [-]
Hard impact
0.10
0.20
0.50
1.0
1.5
2.0
3.0
5.0
10
50
100
Figure 3.12 Relationship between load factor βel and frequency ratio f1 / f2 for
different relations of the mass ratio m1 / m2 based on
Johansson (2014a).
A total amount of ten comparisons thought to be interesting have been carried out
using different combinations of the mass ratio m1 / m2 and frequency ratio f1 / f2 in
order to demonstrate the behaviour of an elastic impact, see Table 3.5. These
combinations are marked in Figure 3.12.
Table 3.5 Table showing the coordinates of tested impacts from Figure 3.12.
Impact test number Mass ratio
m1 / m2
Frequency ratio
f1 / f2
Loading factor βel
F2,sta / F2,el
1 0.1 0.6 1.72
2 0.5 0.5 1.55
3 1.5 0.4 1.29
4 0.2 0.2 1.08
5 2.0 0.2 1.09
6 0.2 0.15 1.17
7 2.0 0.5 0.97
8 3.0 1.0 0.52
9 1.5 1.0 0.81
10 0.5 1.0 1.22

-- 51 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
38
Impact test number 2 is presented in Figure 3.13 and Figure 3.14 and impact test
number 8 is presented in Figure 3.15 and Figure 3.16. The rest of the impact tests are
presented in Appendix C.
a) Deformation b) Velocity
c) Impulse for body 1 d) Impulse for body 2
Figure 3.13 Impact test number 2: m1 = 5 000kg, m2 = 10 000kg k1 = 1.25 MN/m,
k2 = 10 MN/m, v0 = 20 m/s.
In impact test number 2 it can be seen from Figure 3.13 that the impact lasts for about
0.2 seconds. One thing that might seem a bit strange at first glance is that the impulse
of reaction force Ir from body 1 shown in Figure 3.13c has an almost twice as large
value as the original impulse of mass Im, or momentum, of body 1. This is due to the
fact that body 1 bounces back with a velocity v1 ≈ -v0 as seen in Figure 3.13b. In order
to achieve a change in the momentum for body 1 from p0 to p1 ≈ -p0 an impulse of
Ir ≈ 2p0 is needed, see also Figure 2.6.
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.0 0.2 0.4 0.6
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-25
-20
-15
-10
-5
0
5
10
15
20
25
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-150
-100
-50
0
50
100
150
200
250
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-100
-50
0
50
100
150
200
250
300
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r

-- 52 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 39
a) Kinetic energy - internal work body 1 b) Kinetic energy - work body 2
c) Kinetic energy - internal work body 1 d) Load pulse
Figure 3.14 Impact test number 2: m1 = 5 000 kg, m2 = 10 000 kg, k1 = 1.25 MN/m,
k2 = 10 MN/m, v0 = 20 m/s.
In Figure 3.14a it can be seen how the internal work and kinetic energy of body 1
interact with each other with regard to time. The kinetic energy reduces with the same
amount as the internal energy increases, this can also be seen in Figure 3.14c which
shows the same plot but with regard to the deflection of body 1 instead of time.
0
200
400
600
800
1 000
1 200
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
50
100
150
200
250
300
350
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
200
400
600
800
1 000
1 200
0.0 0.5 1.0 1.5
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
2.5
3.0
0.0 0.2 0.4 0.6
Force [MN]
Time t [s]
R1
R2

-- 53 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
40
a) Deformation b) Velocity
c) Impulse for body 1 d) Impulse for body 2
Figure 3.15 Impact test number 8: m1 = 30 000 kg, m2 = 10 000 kg, k1 = 30 MN/m,
k2 = 10 MN/m, v0 = 20 m/s.
In impact test number 8 it can be seen from Figure 3.15 that the impact lasts for a little
bit more than 0.2 seconds, but compared to impact test number 2 the behaviour of the
impact is different. Both the velocity and the impulse of body 1, see Figure 3.15b and
Figure 3.15c, change in a step-like behaviour over time. This is due to that there are
multiple impacts between body 1 and body 2, this phenomenon is discussed further
with Figure 3.17. Except from this, the impulse displays again the same behaviour of
having a larger value than the original impulse of body 1.
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.0 0.2 0.4 0.6
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-800
-600
-400
-200
0
200
400
600
800
1 000
1 200
1 400
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-400
-200
0
200
400
600
800
1 000
1 200
1 400
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r

-- 54 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 41
a) Kinetic energy - internal work body 1 b) Kinetic energy - work body 2
c) Kinetic energy - internal work body 1 d) Load pulse
Figure 3.16 Impact test number 8: m1 = 30 000 kg, m2 = 10 000 kg, k1 = 30 MN/m,
k2 = 10 MN/m, v0 = 20 m/s.
In Figure 3.16a it can be seen how the internal work and kinetic energy of body 1
interact with each other with regard to time. The step-like behaviour is visible and the
kinetic energy is mirrored by the internal energy, this can also be seen in Figure 3.16c
that shows the same plot but with regard to the deflection of body 1 instead of time.
0
1 000
2 000
3 000
4 000
5 000
6 000
7 000
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
1 000
2 000
3 000
4 000
5 000
6 000
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
1 000
2 000
3 000
4 000
5 000
6 000
7 000
0.0 0.5 1.0 1.5
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-4.0
-2.0
0.0
2.0
4.0
6.0
8.0
10.0
12.0
14.0
16.0
0.0 0.2 0.4 0.6
Force [MN]
Time t [s]
R1
R2

-- 55 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
42
The shape of the load pulse that arises during impact between body 1 and body 2 has
great influence on the response of the latter. How the shape of the load pulse is
affecting the response is fairly complicated and depends on a combination of different
properties such as mass ratio and frequency ratio for the two bodies.
a) m1 / m2 = 0.5, f1 / f2 = 0.5 b) m1 / m2 = 2, f1 / f2 = 0.2
c) m1 / m2 = 3, f1 / f2 = 0.5 d) m1 / m2 = 3, f1 / f2 = 1
Figure 3.17 Load pulses for impact test numbers 2,5,7 and 8.
The relations presented for an elastic impact using classic impact theory in
section 2.3.1 is valid when body 2 does not have a support, meaning k2 = 0. In that
case there will only be a single impact between the bodies as described by
equations (2.28) and (2.29). However for a case where k2 ≠ 0 and v1 > 0 after impact,
body 1 will catch up with body 2 and thereby causing one or several secondary
impacts. This can be seen in Figure 3.17d where R1 after the initial impact reduces
until body 1 again comes into contact with body 2. This phenomenon is especially
common when both mass ratio m1 / m2 and frequency ratio f1 / f2 has relatively high
values.
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
2.5
3.0
0.0 0.2 0.4 0.6
Force [MN]
Time t [s]
R1
R2
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
2.5
3.0
0.0 0.2 0.4 0.6
Force [MN]
Time t [s]
R1
R2
-4.0
-2.0
0.0
2.0
4.0
6.0
8.0
10.0
12.0
0.0 0.2 0.4 0.6
Force [MN]
Time t [s]
R1
R2
-4.0
-2.0
0.0
2.0
4.0
6.0
8.0
10.0
12.0
14.0
16.0
0.0 0.2 0.4 0.6
Force [MN]
Time t [s]
R1
R2

-- 56 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 43
3.2.2 Elasto-plastic response
The case with elasto-plastic response is a combination of the elastic and the plastic
responses, for both bodies. The material has a maximum load capacity R for which the
plasticization starts. These results are not discussed in the main report but are included
in Appendix C since it might be interesting to see how an elasto-plastic system
behaves.
3.3 Comparison of impact with and without barrier
In order to get a clearer picture of what the difference in response is for an impact
with and without a barrier some impact tests are made where all properties are the
same except for the use of a barrier, represented in the 2DOF system by the stiffness
k2. Three collisions are demonstrated, one without a barrier, one with a relatively
weak barrier and one with a relatively stiff barrier, see Table 3.6.
Table 3.6 The properties used for each impact test.
m1
[kg]
m2
[kg]
k1
[N/m]
k2
[N/m]
v0
[m/s]
No barrier 1000 10000 1e6 0 20
Weak barrier 1000 10000 1e6 1e7 20
Strong barrier 1000 10000 1e6 1e10 20
The difference in response for various parameters are shown in Figure 3.18
From Figure 3.18a it can be seen that the impulse, the area under the force-time graph,
varies both in size and duration depending on the stiffness of the barrier. Since the
impulse can be expressed as I = mv it means that the soft barrier should take the
longest time to reach its final velocity. This can also be seen in Figure 3.18c, which
shows how the velocity of body 1 changes. For the tests using a barrier body 1
bounces back with almost the same velocity as the incoming, while it in the test
without a barrier receives a much lower velocity. The velocity of body 2, illustrated in
Figure 3.18d, shows that for the impact without a barrier the velocity remains constant
after the impact while the impact with a weak barrier receives a sinusoidal movement
due to the lack of damping. The stiff barrier also gets this behaviour but here both the
amplitude and period time is so small that it is not possible to see in this diagram.
Figure 3.18b displays how the kinetic energy Ek of body 1 varies with time. Since this
is also dependent on the velocity the impacts gets different final energy levels.

-- 57 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
44
a) Force Body 1 b) Kinetic Energy Body 1
c) Velocity Body 1 d)Velocity Body 2
Figure 3.18 Comparison of response between impacts with and without a barrier.
-2000	200
0.0 0.1 0.2 0.3	
Imp
ulse
I
[kN
s]
Time, t, [s]
No Barrier Weak Barrier Strong Barrier
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
0.0 0.1 0.2 0.3
Force
 R1 [MN]
Time [s]
0
200
400
600
800
1 000
1 200
0.0 0.1 0.2 0.3
Kinetic Energy
 Ek [kJ]
Time, t, [s]
-25
-20
-15
-10
-5
0
5
10
15
20
25
0.0 0.1 0.2 0.3
Velocity,
 v, [m/s]
Time, t, [s]
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
0.0 0.1 0.2 0.3
Velocity
 v [m/s]
Time, t, [s]

-- 58 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 45
4 Collision Impact Design
This chapter will treat how to analyse a collision in different ways and with different
tools. The objects studied here is a projectile colliding with a barrier of some kind.
The barrier is seen as a simply supported beam and the projectile mainly as a vehicle.
The projectile and the barrier can be translated into two bodies, each with a certain
mass and stiffness, see Figure 4.1. This way the collision can be studied either
according to the classic impact theory, as a 2DOF spring-mass system or with a finite
element analysis (FEA).
m1 m2
v0 v = 0
body 1 body 2
v0
m1
m2
v0
m1 m2
k1 k2
Figure 4.1 Illustration of how the two colliding objects can be translated into a
model with two bodies with certain stiffness and mass.
4.1 Structural parameters
Structural parameters such as mass, stiffness and load capacity for the studied objects
can be of great importance in an analysis and needs to be chosen carefully. In this
section it is studied which values of the structural parameters that are appropriate to
use for different objects.
4.1.1 Reasonable parameters for vehicles
Before 1951 vehicle designers believed that a stiffer vehicle body resulted in a safer
vehicle for passengers subjected to a collision. This thinking, however, changed when
Béla Barényi, a Mercedes-Benz engineer, invented the concept of crumple zones,
Wikipedia (2014). According to this a vehicle is divided into three parts, a safety cage
around the passenger compartment and two crumple zones, one in the front and one in
the rear, see Figure 4.2.
safety
cage
crumple zones
Figure 4.2 The crumple zones in a modern vehicle are made out of lower strength
material and have embedded weaknesses, Volvo Cars (2013).

-- 59 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
46
The crumple zone can be described as a deformation zone with lower stiffness and
load capacity than the safety cage, see Figure 4.3. This means that the crumple zone
will absorb most of the energy during the impact due to large plastic deformations.
The duration of the impact will then also be prolonged, resulting in a decreased
deceleration of the vehicle which is desirable for the passengers. In analysis it is on
the safe side to assume the safety cage to be infinitely stiff and that all internal work is
done by the crumple zone.
R
u
usc ucz
Wi,cz
Wi,sc
Wi = Wi,cz + Wi,sc
response in
safety cage
response in
crumple zone
Figure 4.3 Load-deflection curves and internal work for the safety cage and
crumple zone, assuming there is a low load capacity for the crumple
zone.
To get a better picture of how load-deflection curves for vehicles really look like and
what structural property values are appropriate to use, it is necessary to study results
from real life crash tests. The response from different vehicles can vary quite a lot,
depending on its size and weight. The results can also depend on which testing facility
carried out the tests and how they were made. Different crash test results are therefore
analysed and discussed in this section, to find appropriate structural values to use in
the analyses to be carried out. The common types of crash tests discussed in this
section are presented in Table 4.1.
Table 4.1 Common types of crash tests discussed in this section.
Description Abbreviation
Offset deformable barrier test – There is an overlap between the
vehicle and the barrier. The barrier is made out of a aluminium
honeycomb material to simulate another vehicle.
ODB
Full width deformable barrier test – The barrier width equals the
entire width of the vehicle. The barrier is made out of a
aluminium honeycomb material to simulate another vehicle.
FWDB
Full width rigid barrier test – The barrier is the entire width of the
vehicle and is assumed non-deformable. FWRB
The Euro NCAP frontal impact crash test is performed with a 40 percent overlap
between the vehicle and the barrier, called an offset deformable barrier (ODB) test,
see Figure 4.4. The barrier consists of a honeycomb structure made out of aluminium,

-- 60 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 47
which will get a plastic deformation under loading in a controlled manner, see
Figure 4.5.
40 % overlap = 40 % of the width of the car
64 km/h
540 mm
1000 mm
Figure 4.4 Frontal offset impact test according to Euro NCAP, based on
EURO NCAP (2014).
a) b)
Figure 4.5 a) deformable barrier consisting of an aluminium honeycomb structure
b) deformable barrier used in Euro NCAP ODB crash test,
Dynamore GmbH (2014) and EURO NCAP (2007).
The first results come from a test discussed in a paper by Huibers and de Beer (2001).
In this paper was the front stiffness of modern European vehicles studied, by
comparing results from Euro NCAP frontal impact crash tests carried out by TNO
Crash Safety Centre in the Netherlands. Some of these results, in form of
force-displacement diagrams, are presented for different types of vehicles in
Figure 4.6 and the corresponding vehicle properties are presented in Table 4.2. The
vehicles are grouped into three different categories, medium family cars such as
Toyota Corolla, large saloon cars such as Volvo S70 and MPV’s or minivans such as
Chrysler Voyager. To estimate the behaviour of these three vehicle categories a
bilinear curve was fitted to the graphs and the stiffnesses were calculated. These
approximated stiffnesses are also presented in Figure 4.6, where k1,1 and k1,2 are the
two stiffnesses during loading, ubi is the deformation where the stiffness is changed
and k1,3 is the stiffness at unloading.

-- 61 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
48
Table 4.2 Vehicle properties from crash tests with a 40 % overlap and a velocity
of about 17.8 m/s, based on Huibers and de Beer (2001).
Car model Kerb mass
[kg]
Test mass
[kg]
Velocity
[m/s]
Medium size family cars
VW Golf 1140 1336 17.8
Citroen Xsara 1080 1100 17.8
Mitsubishi Lancer 1244 1257 17.8
Renault Megane 1060 1296 17.8
Suzuki Baleno 960 1170 17.8
Toyota Corolla 1060 1275 17.8
VW Beatle 1228 1518 17.8
Ford Focus 1080 1383 17.9
Opel Astra 1100 1325 17.8
Ford Escort 1080 1363 17.9
Mercedes A-class 1070 1267 17.8
Large saloon cars
BMW 520I 1485 1682 17.9
Saab 95 1485 1713 17.7
Toyota Camry 1385 1604 17.8
Mercedes E200 1440 1650 17.8
Opel Omega 1455 1666 17.8
Audi A6 1400 1663 17.8
Volvo S70 1430 1597 17.8
MPV's
Renault Espace 1520 1713 17.9
Chrysler Voyager 1800 2040 17.8
Mitsubishi Space wagon 1570 1768 17.9
VW Sharan 1690 1906 18
Peugeot 806 1550 1748 17.8
Vauxhall Sintra 1650 1933 17.8
Kerb mass in Table 4.2 is the mass of the vehicle without passengers or cargo, but
with standard equipment and fuel included.

-- 62 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 49
k1,1 = 260 kN/m
k1,2 = 1 200 kN/m
k1,3 = 6 000 kN/m
ubi = 0.7 m
Force
 F [kN]
Displacement u [m]
Force
 F [kN]
Force
 F [kN]
Displacement u [m]
Displacement u [m]
Medium family cars
Large saloon cars
MPV’s (minivans)
k1,1 = 100 kN/m
k1,2 = 890 kN/m
k1,3 = 4 000 kN/m
ubi = 0.5 m
k1,1 = 290 kN/m
k1,2 = 790 kN/m
k1,3 = 5 000 kN/m
ubi = 0.5 m
obtained by m∙a
unless otherwise
specified
Figure 4.6 Force-displacement graphs from crash tests with a 40 % overlap and a
velocity of about 17.8 m/s, based on Huibers and de Beer (2001).
Approximate stiffnesses for different parts of the curves are presented.

-- 63 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
50
The fact that the Euro NCAP frontal impact crash test is performed with a 40 percent
overlap is a problem for the analysis in this thesis since a full width collision is of
higher interest. This is because of the higher vehicle stiffnesses it exhibits, due to
larger impacting area, thus leading to larger impact forces. In order to adjust the
values from this kind of tests to better fit the purpose of this thesis, the stiffnesses are
later multiplied by two to simulate a full frontal impact, see Table 4.3. This
corresponds quite well to a full frontal crash test, as will be shown later in this section.
The breakpoints where the stiffness changes however, are supposed to be the same
regardless of the size of the overlap. The velocity of the vehicles are set to 64 km/h
(17.8 m/s) in the above crash tests, but the stiffnesses are here assumed to be constant
in a limited interval around this impact speed.
Another problem with the Euro NCAP crash test, for the subject of this thesis, is that a
deformable barrier is used in order to simulate a collision with another vehicle. This
means that the barrier will absorb some of the impact energy and give a lower overall
stiffness, see Figure 4.5. In order to minimize the effect of the barrier on the stiffness
distribution, the first 40 centimetres of the force-displacement curve is ignored when
approximating the stiffnesses, as proposed by Huibers and de Beer (2001).
The next crash test studied was found in Struble (2014) where the topic, how to
analyse load cell barrier data, was discussed. This is a full width rigid barrier (FWRB)
collision which means that the full width of the car crashes into a non-deformable
barrier. The test was performed by the National highway traffic safety administration
(NHTSA). The force-displacement graph from the test with an approximated bilinear
curve superimposed on top can be seen in Figure 4.7.
Displacement u [in]
Total barrier force
 F [lb
∙10
3]
k1,1 = 790 kN/m
Rmax = 400 kN
k1,3 = 7 900 kN/m
ubi = 0.5 m
k1,1
k1,3
Rmax
ubi
Figure 4.7 Force-displacement graphs from full frontal crash test (fixed barrier
NCAP test) of a Toyota Corolla 2004 with a velocity of 15.6 m/s,
obtained from load cells in NHTSA test no 5404, based on
Struble (2014).
The results in Figure 4.7 clearly display a much higher stiffness than the results in
Figure 4.6. This seems reasonable since, as discussed above, a full frontal impact

-- 64 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 51
should exhibit a stiffer response. Figure 4.7 also indicates a maximum load capacity
beyond which no further increase of load can be made, but where the deformations
continues to grow.
Another crash test study is described in a paper by Takizawa, et al. (2005) for Honda
R&D Co. Ltd., where load cell moving deformable barrier (LCMDB) crash tests were
evaluated. Here both full width deformable barrier (FWDB) and offset deformable
barrier (ODB) tests were studied. Two force-displacement graphs for a Honda from
this paper with approximated bilinear curves superimposed on top can be seen in
Figure 4.8.
k1,1 = 680 kN/m
k1,2 = 1 700 kN/m
ubi = 0.4 m
k1,1
k1,2
ubi
k1,1 = 370 kN/m
k1,2 = 900 kN/m
ubi = 0.6 m
k1,1
k1,2
ubi
Displacement u [mm]
Force
 F [kN]
Displacement u [mm]
Force
 F [kN]
a)
b)
Figure 4.8 Force-displacement graphs from two different crash tests of Honda
cars obtained from load cells, a) full width frontal impact with a
velocity of 15.6 m/s and b) offset frontal impact with a velocity of
17.8 m/s, based on Takizawa, et al. (2005).
From these two tests one can see that the previous assumption about a doubled
stiffness for full width impact, compared to offset impact, is reasonable.

-- 65 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
52
The last crash test results studied are taken from a master thesis carried out at the
University of Utah, Tolman (2008). In this thesis several results from FWRB tests
were compared for different vehicles with different impact velocities. In Figure 4.9
are the results for a Volvo S40 presented in shape of force-displacement graphs, with
approximated bilinear curves superimposed on top, for two different velocities.
k1,1 = 1 000 kN/m
k1,2 = 4 200 kN/m
k1,3 = 8 000 kN/m
ubi = 0.3 m
k1,1
k1,2
ubi
Displacement u [mm]
Force
 F [N]
k1,3
Figure 4.9 Force-displacement graphs from two full width impact crash tests of a
Volvo S40, one with a velocity of 11.2 m/s and one with 15.6 m/s.
Results from NHTSA tests no 5092 and no 5441, data is obtained from
load cells, based on Tolman (2008).
From Figure 4.9 can it be concluded that the force-displacement relationship for
different velocities shows a similar behaviour, and the same stiffnesses can,
approximately, be used independent of the velocity. One can also see that this test
shows a much higher stiffness than the former tests discussed. This is probably due to
the full width barrier that is also rigid, and can thus not deform.
The respective calculated stiffnesses and breakpoints between them for all seven crash
tests are presented together with the mean masses for each type of vehicle, in
Table 4.3. The corresponding force-displacement curves, for an internal work equal to
the kinetic energy before the impact for each vehicle, are illustrated in Figure 4.10.
The stiffnesses from the ODB tests are here multiplied by two, as proposed earlier.

-- 66 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 53
Table 4.3 Frontal stiffness for different stages of loading and for different types of
vehicles, based on Figure 4.6, Figure 4.7, Figure 4.8 and Figure 4.9.
m
[kg]
k1,1
[kN/m]
k1,2
[kN/m]
k1,3
[kN/m]
ubi
[m]
Medium family cars,
ODB 1 300 520 2 400 12 000 0.70
Large saloon cars, ODB 1 700 200 1 800 8 000 0.50
MPV’s (minivans), ODB 1 900 580 1 600 10 000 0.50
Toyota Corolla 04,
FWRB 1 300 790 0 7 900 0.50
Honda, ODB - 740 1 800 ∞ 0.60
Honda, FWDB - 680 1 700 ∞ 0.40
Volvo S40, FWRB 1 600 1 000 4 200 8 000 0.30
Figure 4.10 Force-displacement diagrams for three different types of vehicles, data
from Table 4.3. Internal work done for each type corresponds to the
kinetic energy prior to impact.
The behaviour of the different vehicles is quite similar, with a few exceptions, see
Figure 4.10. The saloon cars generally have a large crumple zone and it is therefore
possible to have a low stiffness. This fact together with their relatively high weight is
the reason for the large deformations seen in this type of vehicle. The Toyota Corolla
is the only vehicle that does not exhibit a stiffening behaviour after a certain
displacement. Instead it shows an ideal plastic behaviour, which probably would look
different in an impact with higher velocity, i.e. larger deformations. One of the
vehicles has a much higher stiffness than all the others, the Volvo S40. The reasons
therefore are hard to identify, one is that the barrier is rigid but that should not make
such an apparent difference. The impact speed in this test, 15.6 m/s, was also lower
than in some of the other tests. It has to be considered though, that the approach used
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
1.1
1.2
1.3
1.4
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Force
 F [MN/m]
Displacement u [m]
Medium family cars
Large saloon cars
MPV’s (minivans)
Toyota Corolla 2004
Honda, ODB
Honda, FWDB
Volvo S40, FWRB

-- 67 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
54
to determine all of the stiffnesses was very approximate, and the error margin is
therefore of noticeable size.
4.1.2 Parameters for concrete beam
The concrete beam represents a low protective barrier of some kind and can, for
simplicity reasons, be seen as simply supported, see Figure 4.11.
lb
a) b) hb
wb
hb
v0 EIb
m1
Figure 4.11 Illustration of the beam representing the barrier, a) top view and
b) cross section. For dimensions and reinforcement specifications see
Table 4.4.
A beam with reasonable geometry and amount of reinforcement is chosen, to be
studied further in collision impact analyses in later sections, see Table 4.4. The
section and stiffness properties are calculated according to Appendix G.
Table 4.4 Properties of the beam, representing a barrier, studied in this thesis.
Length lb 5 m
Height hb 0.3 m
Width wb 1 m
Mass mb 3600 kg
Concrete class C30/37
Ec 33 GPa
Reinforcement B500B Φ16 s100
Es 200 GPa
Concrete cover c 40 mm
Effective height d 252 mm
II 2.25∙109 mm4
III 6.10∙108 mm4
EIb = Ec∙III 18.30 MNm2

-- 68 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 55
4.2 Transformation of beam to spring-mass system
4.2.1 General principle
To be able to use the simplified 2DOF model for the collision, the beam needs to be
transformed into a SDOF spring-mass system, see Figure 4.12. From this figure it is
clear that the displacement in the system point of the beam and in the spring-mass
system is the same. Here the system point coincides with the section with largest
deflection in the beam, but it can also be chosen to be placed at the section where a
point load is acting Johansson and Laine (2012). As said before, damping is neglected
when dealing with impact loads due to the very short duration of the impact.
EIb
us
mb
l
x
q(x,t)
u(x)
u = us
F(t)
R(u)
m
Figure 4.12 Illustration of how a loaded beam is transformed into an equivalent
SDOF system.
The relationship between the properties of the beam and the SDOF system, assuming
a linear elastic response in the spring, can be stated as
b	m m	m 	
	
(4.1)
b	k k	k 	
	
(4.2)
b	F F	F 	
	
(4.3)
where mb and kb are the mass and stiffness of the beam and Fb is the external force
acting on the beam. κm, κk and κF are the corresponding transformation factors for the
three properties. The equation of motion for a SDOF system without damping from
equation (2.36)
)	(t	F	ku	u	m 			
(4.4)
can now be written as
 	t	F	u	k	u	m b	F	b	k	b	m	

	
	 			
(4.5)
By utilizing that the response in the beam under static load is
  	u	k	u	R b	b 		
(4.6)
equation (4.5) finally becomes

-- 69 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
56
  	 	t	F	u	R	u	m b	F	b	k	b	m	

	
	 			
(4.7)
The transformation factors are decided based on the theory of energy conservation
between the beam model and the spring-mass system. The kinetic energy of the mass
and the work done by the external and the internal force should in the two systems,
according to this, be equal, Johansson and Laine (2012).
Conservation of kinetic energy	4.2.1.1
The conservation of kinetic energy between the two systems gives
   



	



l	x
x
s
k dx
x	v	x	m	v	m
E
0
2	2
2	2
(4.8)
where vs is the velocity of the SDOF system as well as the system point and m′(x) and
v(x) are the mass per unit length and the velocity at section x of the beam respectively.
For a beam with constant mass per unit length equation (4.8) becomes
 	


	
l	x
x
b
s dx	x	v
l
m
v	m
0
2	2
(4.9)
By using that
t
u
v s
s 

	
(4.10)
and
   
t
x	u
x	v 

	
(4.11)
where ∆us and ∆u(x) are the displacements at the system point and along the beam
respectively, equation (4.9) can, for an arbitrary time step, be written as
 	


	
l	x
x
b
s dx	x	u
l
m
u	m
0
2	2
(4.12)
By combining this with equation (4.1) the transformation factor can be stated as
 




l	x
x s
m dx
u
x	u
l 0
2
2
1
	
(4.13)

-- 70 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 57
Conservation of external work	4.2.1.2
The conservation of external work between the two systems gives
   	


			
l	x
x
s	e dx	x	u	x	q	u	F	W
0
(4.14)
where q(x) is the load per unit length along the beam. The total external force acting
on the beam is
  		




	
l	x
x
b
l	x
x
b dx
l
F
dx	x	q	F
0	0
(4.15)
and if inserted in equation (4.14)
 	


		
l	x
x
b
s dx	x	u
l
F
u	F
0
(4.16)
By now using equation (4.3) the transformation factor can be written as
 




l	x
x s
F dx
u
x	u
l 0
1
	
(4.17)
For a beam with concentrated load equation (4.14) becomes
s	b	s	e u	F	u	F	W 				
(4.18)
which will, by using equation (4.3), give a transformation factor of
1		
s
s
F u
u
	
(4.19)
Conservation of internal work	4.2.1.3
The conservation of internal work between the systems finally needs to be studied.
The equilibrium yields
  	     	









 					
l	x
x
shear	s
i dx	x	u	x	M
GA
x	V
EA
x	N	ku
W
0
2	2	2
2
1
2

(4.20)
where N(x), V(x) and M(x) are normal force, shear force and bending moment along
the beam and E is the elastic modulus, A is the cross sectional area, βshear is a factor
regarding the shear stress, G is the shear modulus and u′′(x) is the curvature of the
beam. In general the contributions from normal and shear force are small in
comparison to the effect of the moment, thus they can be neglected and
equation (4.20) is simplified to

-- 71 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
58
   	


		
l	x
x
s dx	x	u	x	M	ku
0
2
(4.21)
By combining this with equation (4.2), the transformation factor becomes
   


 
	

l	x
x s	b
k dx
u	k
x	u	x	M
0
2	
	
(4.22)
The stiffness of the beam can also be written as
s
b
b u
F
k 	
(4.23)
and by using this the transformation factor can now be written
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
(4.24)
4.2.2 Determination of transformation factors
According to Chapter 5 in Biggs (1964)
F	k	

	 	
(4.25)
This fact can be used by dividing all terms in equation (4.5) by κF
 	t	F	u	k	u	m b	b
F
k
b
F
m 	



 	
(4.26)
and by introducing the factor κmF
F
m
mF


 	
(4.27)
Equation (4.26) can now be stated as
 	t	F	u	k	u	m b	b	b	mF 			
	
(4.28)
which shows that only the mass of the beam needs to be transformed when the
equation of motion is formed for the SDOF system.
To determine both κm and κF the variables u(x) and us needs to be determined. us can
be determined from u(x) by defining the position of the system point, which is chosen
to coincide with the point load. The factor κF, is as stated in equation (4.19), equal to 1
for a point load.

-- 72 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 59
Elastic response for a point load	4.2.2.1
When the beam is assumed to have an elastic response and is subjected to a point
load, the displacements u(x) and us can be defined as
2	2
3
3

	
b
b
s EI
l	F
u 	
(4.29)
and







			
	

)	)	(	)	(	)	1	((
6
)	)	1	((
6
)	( 3	2	2
3	2	2
x	l	x	l	l
EI
F
x	x	l
EI
F
x	u
b
b
b
b




for
l	x	l
l	x
	
	

	0
 (4.30)
where
, β, Fb, l, x and EIb are explained in Figure 4.13, and β = 1-
, based on
Lundh (2000).
Fb (t)
us
mb, EIb
l
x βl	
 l
Figure 4.13 Elastic response of a beam subjected to a point load.
By using equation (4.13) together with equation (4.29) and (4.30), the transformation
factor can be stated as
and after solving the integrals it can be written as a function of
 and β
10	12
1
10	12
2
105
)	2	10	23	(
28 2	2
2
2
2
2
3
,


	





	
	


 		


	
		el	m	
(4.32)

















 			












 	

l	x
l	x
b
b
b
b
l	x
x
b
b
b
b
el	m
dx
EI
l	F
x	l	x	l	l
EI
F
l
dx
EI
l	F
x	x	l
EI
F
l



	


	


2
2	2
3
2
3	2	2
0
2
2	2
3
2
3	2	2
,
3
)	)	(	)	(	)	1	((
6	1
3
)	)	1	((
6	1 
(4.31)

-- 73 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
60
Plastic response for a point load	4.2.2.2
If the beam instead is assumed to have a plastic response when it is subjected to a
point load, the displacement u(x) can be defined as








l
x	l
u
l
x
u
x	u
s
s


)	(	
for
l	x	l
l	x
	
	

	0
 (4.33)
where
, β, x and l are explained in Figure 4.14.
Fb (t)
us
mb, EIb
l
x βl	
l
Figure 4.14 Plastic response of a beam subjected to a point load.
By using equation (4.13) together with equation (4.33), the transformation factor for
the mass is then stated as
and finally the transformation factor can be defined as a function of
 and β
3
1
)
3	3
1
(
1
3
3
2
2	, 					


	


 pl	m	
(4.35)
	









 








l	x
l	x s
s	l	x
x s
s
el	m dx
u
l
x	l
u
l
dx
u
l
x
u
l	



	
 2
2
0
2
2
,
1	1	
(4.34)

-- 74 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 61
Transformation factors for different cases	4.2.2.3
The transformation factors κm, κF and κmF are now calculated for different values of

and β, using equations (4.19), (4.32) and (4.35), for both the elastic and the plastic
response and the results are presented in Table 4.5.
Table 4.5 Transformation factors for point loads at different distances from the
support, with the system point coinciding with the point load.
 0.5 0.4 0.3 0.2 0.1
Elastic response
m	
	
0.486 0.518 0.642 1.011 2.803
F	
	
1.000 1.000 1.000 1.000 1.000
mF	
	
0.486 0.518 0.642 1.011 2.803
Plastic response
m	
	
0.333 0.333 0.333 0.333 0.333
F	
	
1.000 1.000 1.000 1.000 1.000
mF	
	
0.333 0.333 0.333 0.333 0.333
In reality, the incoming object in a collision always has a certain area and the load
should therefore more accurately be treated as a distributed load, see Figure 4.15.
qb (t)	mb, EIb
l
x βl	
l
γl
Figure 4.15 Beam subjected to a distributed load with limited distribution.
Transformation factors for a distributed load, acting at different distances from the
support and with different lengths of the distribution, were calculated numerically and
are presented in Table 4.6, Table 4.7 and Table 4.8, based on work by
Johansson (2014b). In these tables γ = 0 corresponds to a point load, and only the
elastic response is treated for the distributed load.

-- 75 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
62
Table 4.6 Comparison of transformation factors for different values of the
distribution γ, when
 = 0.5.
 = 0.5
γ 0.0 0.1 0.2 0.3 0.4
Elastic response
m	
	
0.486 0.486 0.488 0.491 0.494
F	
	
1.000 0.995 0.982 0.961 0.933
mF	
	
0.486 0.489 0.497 0.511 0.529
Table 4.7 Comparison of transformation factors for different values of the
distribution γ, when
 = 0.3.
 = 0.3
γ 0.0 0.1 0.2 0.3 0.4
Elastic response
m	
	
0.642 0.644 0.650 0.658 0.668
F	
	
1.000 0.994 0.979 0.955 0.919
mF	
	
0.642 0.648 0.664 0.689 0.727
Table 4.8 Comparison of transformation factors for different values of the
distribution γ, when
 = 0.1.
 = 0.1
γ 0.0 0.1 0.2
Elastic response
m	
	
2.803 2.853 2.988
F	
	
1.000 0.955 0.942
mF	
	
2.803 2.989 3.171

-- 76 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 63
When studying Table 4.6, Table 4.7 and Table 4.8 one can conclude that the
difference in the transformation factor κmF is slightly increased when the distribution
is larger. This difference also grows larger when
 get smaller, i.e. when the load acts
close to the support. As can be seen in Table 4.6, when the load acts at midspan, the
difference in κmF is only about 8 percent when γ = 0.4 compared to a point load, i.e.
γ = 0. For the case when
 = 0.3, see Table 4.7, the same difference in κmF is about
12 percent. When
 = 0.1, see Table 4.8, the difference in κmF is about 12 percent
when γ = 0.2 compared to a point load. With this in mind, it can be assumed safe to
treat a load with limited distribution as a concentrated point load, as long as the
distribution is not too large and not acting too close to the support.
4.2.3 Stiffness of simply supported beam subjected to a point load
During the elastic response, the stiffness of the beam kb can be determined by using
the fundamental correlation between load and displacement. For a point load this
correlation can be written as
s	b	b u	k	F 		
(4.36)
If now the definition of us in equation (4.29) is utilized together with equation (4.36),
the stiffness kb as a function of
 and β can be defined as
2	2	3
3

		l
EI
k b
b 	
(4.37)
The beam stiffness was calculated for different values of
 using equation (4.37) and
the results and presented in Table 4.9.
Table 4.9 Beam stiffness kb for point loads at different distances from the support,
with the system point coinciding with the point load.
 0.5 0.4 0.3 0.2 0.1
Elastic response
kb 48.00	





 3
l
EIb 52.08	





 3
l
EIb 68.03	





 3
l
EIb 117.2	





 3
l
EIb 370.4	





 3
l
EIb
In Table 4.9 it can be seen that the beam stiffness kb is proportional to the bending
stiffness of the beam EIb, while it is inversely proportional to the length of the beam to
the power three, l3. This means that the length of the beam will have much more
influence on the stiffness than the bending stiffness EIb. Regarding the position of
loading, the stiffness grows exponentially when the load acts closer and closer to the
support. The stiffness is almost eight times higher when
 = 0.1 compared to loading
at midspan.

-- 77 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
64
4.2.4 Equivalent static load
Since most civil engineers are more familiar working with static loads, it is
convenient to translate the dynamic impulse load into an equivalent static load. This is
done by determining the static load Fsta that generates the same amount of exterior
work We on the structure as the dynamic impulse I. For an elastic structure the
equivalent static load is obtained by using the relationship for the external work
2
el	sta
y
u	F
W 	
(4.38)
which if combined with equation (4.39)
2
2
el	b
y
u	k
W 	
(4.39)
results in
el	b	sta u	k	F 	
(4.40)
where kb is the stiffness of the beam and uel is the elastic deformation. An alternative
way to find the equivalent static load for an elastic response is to use the load factor
βel discussed in section 3.2.1.
4.3 Impact load according to Eurocode
Impact is, according to annex C in Eurocode 1-7, defined in the following way:
“Impact is an interaction phenomenon between a mo ing object and a structure, in
which the kinetic energy of the object is suddenly transformed into energy of
deformation”, CEN (2010).
According to Eurocode, actions that depend on impact should be determined by a
dynamic analysis or represented by an equivalent static force that gives the same
effects on the structure. For cars the collision force should be applied at an
height h of 0.5 m above the carriageway, over an application area, a, of
0.25 m (height) 1.5 m (width) or the member width. For trucks the collision force
may be applied at any height between 0.5 m-1.5 m above the carriageway and over an
application area of 0.5 m (height) x 1.5 m (width) or the member width,
see Figure 4.16.
a
h
Figure 4.16 Application area of collision force on supporting substructure, based on
CEN (2010).

-- 78 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 65
Eurocode uses two different approaches to determine the equivalent static force. The
first approach is based on suggested equivalent static forces in the direction of vehicle
travel, given in section 4.3 of EC 1-7. These have a magnitude of 1 000 kN, 750 kN
and 500 kN for structures adjacent to national roads, rural roads and roads in urban
areas, respectively, CEN (2010). It should be noted that this method involves many
uncertainties since the effects of mass and stiffness for both the vehicle and structure
is not taken into account here. Therefore the result may be inaccurate,
Al-Thairy and Wang (2013).
The alternative approach can be found in annex C in EC 1-7, called the dynamic
impulse approach, where a distinction is made between hard impact and soft impact.
For hard impact the colliding object is assumed to deform linearly during the impact
phase while the structure is considered to be rigid and immovable. For a soft impact it
is the other way around, the colliding object is considered as rigid and the structure is
assumed to absorb all of the impact energy. This means that preventive measures
should be made so that the ductility of the structure is sufficient enough to absorb the
total kinetic energy of the colliding object. The maximum resulting dynamic
interaction force is derived by letting the initial kinetic energy be equal to the elastic
strain energy of the colliding object, for a complete derivation see section 3.2.1.
k
F	v	m
2	2
2	2


(4.41)
So the force is
m	k	v	F r 		
(4.42)
where vr is the object velocity at impact, k is the equivalent elastic stiffness of the
object in case of hard impact or the stiffness of the structure in case of soft impact and
m is the mass of the incoming colliding object.
The force may also be considered as a rectangular pulse on the surface of the structure
with a pulse duration, Δt, that is derived by substituting equation (4.42) into the
momentum conservation stated in equation (4.43).
r	v	m	t	F 				
(4.43)
which gives
r	r v	m	t	m	k	v 					
(4.44)
that leads to
k
m
t 		
(4.45)
It is not specified in the code but the way that equation (4.43) is stated implies that a
plastic material response for the vehicle is used. If an elastic response was used the
change in momentum would create an impulse twice as large compared to the one
used here, see also section 3.2.1.

-- 79 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
66
Equation (4.42) gives the maximum dynamic force on the surface of the structure, but
inside the structure these forces may give rise to dynamic effects. An upper limit for
these effects can be determined if the structure is considered elastic and the load is
applied by a step function. In that case the dynamic amplification factor φdyn = 2.0. If
the rise time of the impulse is taken into consideration, calculations will lead to
amplification factors ranging from below 1.0 up to 1.8, depending on the dynamic
characteristics of both structure and object. For a general case it is recommended that
a direct dynamical analysis is used to determine φdyn CEN (2010). The amplification
factor corresponds well to the load factor βel described in section 3.2.1, even though it
is only derived for elastic material response.
In this approach either the deformations of the impacting object or the structure is not
considered depending on the assumption of hard or soft impact. This is a
simplification since in most cases both the vehicle and the structure will undergo
some deformation and hence absorb some of the impact energy. This means that the
impact force between the vehicle and structure is overestimated for hard impact and
underestimated for soft impact, Al-Thairy and Wang (2013).

-- 80 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 67
5 Collision Impact on a Simply Supported Beam
This chapter presents and discusses the results from two computational models, the
2DOF system and a FE model, and compares the difference in their responses.
5.1 2DOF - Effect of impact position on a beam
To analyse the effect of the position of impact on a beam, the theory of beam to
spring-mass system transformation from section 0 was implemented in the 2DOF
algorithm, described in Chapter 3. The impact load is seen as a point load, meaning
that the distribution is seen as infinitely small. The mass mb was adjusted using the
transformation factor κm,el from equation (4.32) giving the corresponding mass in the
2DOF system m2 and the stiffness of the beam kb was calculated using
equation (4.37), see Appendix G. This means that the beam is seen as both stiffer and
heavier when the load is applied closer to the support. This can be seen in Figure 5.1
where the relative size of the mass and stiffness, kb,rel and κm,el,rel, is plotted against the
loading position α on the beam, which describes the magnitude of the parameter in
comparison to when loading at midspan, i.e. α = 0.5, see equation (5.1) and (5.2).
)	5	.	0	(
)	(
,
b
b
rel	b k
k
k

	
(5.1)
)	5	.	0	(
)	(
,
,
,	,
el	m
el	m
rel	el	m


	
 	
(5.2)
Figure 5.1 Relative size of the mass and stiffness is plotted against the loading
position.
Not only the mass and stiffness of the beam will grow larger closer to the support, but
also the eigenfrequency of the beam fb. This is because kb changes more than κm,el and
can be understood from equation (5.3), which is based on equation (2.41).
0
1
2
3
4
5
6
7
8
0.00 0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40 0.45 0.50
kb,rel
 and
 κm,el,rel
 [-]
α [-]
k_b_rel
kappa_m_el_rel

-- 81 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
68
 	Hz
2
1
)	(
, b	el	m
b
b m
k
f 


		
(5.3)
The relative size of the eigenfrequency fb,rel, see equation (5.4), and the theoretical
natural frequency fnatural of the beam are plotted against α in Figure 5.2.
natural
b
rel	b f
f
f )	(
,

	
(5.4)
The difference between these is small close to midspan but is over twenty percent at
α = 0.05, which could lead to a difference in response between the 2DOF and the FE
model.
Figure 5.2 Relative size of the calculated frequency of the beam and the theoretical
natural frequency is plotted against the loading position.
The study in this section is based on the concrete beam described in section 4.1.2. The
velocity v0 of the incoming object is set to 20 m/s, the mass m1 is set to 1 000 kg and
the stiffness k1 is set to 300 kN/m. These values correspond sufficiently well with a
vehicle, and the same stiffness is recommended in Eurocode, see section 4.3. The
stiffness values are then varied to create five different property sets for the analyses,
where property set 1 corresponds to the original case described above, see Table 5.1.
0.95
1.00
1.05
1.10
1.15
1.20
1.25
0.00 0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40 0.45 0.50
fb,rel
 and
 
fnatural
α [-]
f_b_rel
natural frequency

-- 82 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 69
Table 5.1 The different sets of properties used in the analyses.
Property set
number
Spring stiffness
k1 [kN/m]
EIb
[MNm2]
1 300 18.302
2 75 18.302
3 1 200 18.302
4 300 4.576
5 300 73.208
The study is first performed with the original values for the stiffnesses, while then
also the other property sets are analysed. In the following sections are only results
presented for some of the property sets, but all of the results can be seen in
Appendix D.
5.1.1 Original beam – Property set 1
The first study is made with the exact same beam as described in section 4.1.2. The
results are presented in form of graphs for how the reaction force R, displacement u
and velocity v for the two bodies depend on time during the impact. Five different
positions of impact, from α = 0.5 to α = 0.1, are treated and described in this section.
See Figure 5.3 for the response of the incoming object and Figure 5.4 for the response
of the beam.
In Figure 5.3 it can be seen that the responses for the incoming object does not change
very much when α varies. The reaction force R1 is a little bit higher and the maximum
force is reached a little bit earlier for lower α values. The displacement ubi and
velocity v1 are on the other hand nearly identical for the different loading positions.
This is probably due to that the stiffness of the beam is, already in midspan, over
twenty times larger than the stiffness of the incoming object. The influence of the
increased stiffness closer to the support is therefore negligible.
If instead Figure 5.4 is studied, it is clear that the responses differs a little bit more for
the beam. The reaction force R2 is this time lower for lower values of α, which is the
opposite case compared to the force R1. This may seem odd since from a static point
of view a higher force from the incoming object should result in a higher reaction
force in the beam. The reason for this however is that the load factor βel decreases
when α decreases, in this particular case. When α decreases both the frequency ratio
and the mass ratio decreases. This reasoning can be seen in the graphs in Figure 3.12,
together with the fact that the frequency ratio is roughly 0.27 and the mass ratio 0.57
when the impact load is applied at midspan.
For the displacement u2 and velocity v2 the difference is really significant. The values
gets smaller and smaller with decreasing α while the shape of the graphs is virtually
maintained. This is understandable since a higher stiffness and larger mass should
give smaller displacements and velocities.

-- 83 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
70
Figure 5.3 Results from the simulated collision describing the differences in
position of impact, for the incoming object. Reaction force R1,
displacement u1 and velocity v1 are plotted against time.
0
50
100
150
200
250
300
350
400
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Reaction force
 R1 [kN]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1
-2.5
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Displacement
 u1 [m]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1
-25
-20
-15
-10
-5
0
5
10
15
20
25
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Velocity
 v1 [m/s]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1

-- 84 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 71
Figure 5.4 Results from the simulated collision describing the differences in
position of impact, for the beam. Reaction force R2, displacement u2 and
velocity v2 are plotted against time.
-200
-100
0
100
200
300
400
500
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Reaction force
 R2 [kN]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.03
0.04
0.05
0.06
0.07
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Displacement
 u2 [m]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Velocity
 v2 [m/s]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1

-- 85 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
72
5.1.2 Effect of beam stiffness
Stiffer beam – Property set 5	5.1.2.1
The beam from section 4.1.2, studied in the previous section, is now made four times
as stiff, to be able to examine the difference in response. The results are again
presented in form of graphs, but this time only displaying how the reaction force R for
the two bodies varies during the impact. Five different positions of impact are treated
and described here with the corresponding value of α, see Figure 5.5. The rest of the
results can be found in Appendix D.
Figure 5.5 Results from the simulated collision with a stiffer beam, describing the
differences in position of impact for both the incoming object and the
beam.
The reaction force R1 in the object displays in this case almost the exact same
response regardless the position of loading, see Figure 5.5. The reason is the same as
discussed in the previous case, that the beam is so much stiffer than the colliding
object. And this time the beam is even stiffer, making it over 80 times as stiff as the
object when loading at midspan. The reaction force in the beam R2 behaves in a
similar way as for the original beam, when loading at different positions.
0
50
100
150
200
250
300
350
400
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Reaction force
 R1 [kN]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1
-100
0
100
200
300
400
500
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Reaction force
 R2 [kN]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1

-- 86 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 73
Softer beam – Property set 4	5.1.2.2
The same beam from section 4.1.2 is now made one fourth as stiff, to be able to
examine new differences in the response. The results are again presented in form of
graphs, displaying how the reaction force R for the two bodies varies during the
impact. Five different positions of impact are treated and described here with the
corresponding value of α, see Figure 5.6. The rest of the results can be found in
Appendix D.
Figure 5.6 Results from the simulated collision with a softer beam, describing the
differences in position of impact for both the incoming object and the
beam.
For the softer beam the difference in reaction force R1 for different loading positions
is more significant, see Figure 5.6. This is due to that the difference in stiffness
between the object and the beam is now smaller, with a beam that is five times stiffer
than the incoming object when loading at midspan. So the increase in stiffness when
moving towards the support now has a larger impact. The reaction force in the beam
R2 for different α values has the same relation as before, but this time the force
increases when α decreases. This is because the lower beam stiffness gives a new
position in the graphs in Figure 3.12, as discussed before, and this leads to that the
load factor βel this time increases when α decreases. The frequency ratio f1 / f2 is for
this case approximately 0.55.
0
50
100
150
200
250
300
350
400
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Reaction force
 R1 [kN]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1
-600
-400
-200
0
200
400
600
800
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Reaction force
 R2 [kN]
Time t [s]
alpha=0.5
alpha=0.4
alpha=0.3
alpha=0.2
alpha=0.1

-- 87 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
74
5.1.3 Effect of spring stiffness
If instead the stiffness of the spring is changed by a factor four, property sets 2 and 3
from Table 5.1, the behaviour are identical to when the stiffness of the beam is
changed, but the magnitude of the response is different. This is due to that the
deciding factor when determining the response of the system is the frequency ratio
between the beam and the impacting body. Since this remain unchanged compared to
before the response also remains constant. Increasing the spring stiffness a certain
amount is equivalent to decreasing the beam stiffness with the same amount and will
produce results with equal behaviour. Therefore these results are only presented in
Appendix D.
5.2 Finite element model
To perform detailed analyses of the system the finite element software ADINA is used
ADINA R & D, Inc (2014). The FE model consists of a simply supported concrete
beam that is connected to a moving mass through a spring which represents the
impacting object. If this beam model is compared with the 2DOF system used
previously the beam represents the second mass and spring, see Figure 5.7.
EIIII
mb
m1 v0
k1	mb, EIIII
l
x βl	
 l
v0	m1
k1
Figure 5.7 The 2DOF system implemented in the FE software.
Elastic 3D beam elements with an element length of 2 percent of the total length are
used to model the beam. The impacting object is modelled by a spring element with a
point mass travelling with an initial velocity. One potential problem when using
ADINA is that when calculations of a concrete beam in state II are performed,
ADINA is not able to recognise that the section is cracked. Instead the software uses
the moment of inertia for the uncracked concrete section and thereby greatly
overestimates the stiffness of the beam. In order to overcome this problem an
equivalent Young’s modulus EII is used to obtain the correct state II bending stiffness
of the beam. This is done by multiplying the original Young’s modulus with the ratio
between the moment of inertia in state II and state I
c
I
II
II E
I
I
E 	
(5.5)
See also Appendix G for calculation of the equivalent Young’s modulus and
Appendix A for ADINA command files.

-- 88 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 75
By changing the Young’s modulus the speed of the force wave in the material is also
changed. The wave speed is dependent on Young’s modulus and the density of the
material

E
c 	
(5.6)
Firstly, a reference test is performed using a beam with what is assumed to be of a
reasonable size and stiffness with properties according to section 4.1.2. The spring is
considered to be linear elastic and the stiffness k1 is chosen to be 300 kN/m, in
accordance with what is used for a vehicle impact in Eurocode 1-7, CEN (2010). The
impacting object is assumed to have a mass of 1 000 kg and an initial velocity of
20 m/s. In the following analyses the stiffness of the beam and spring respectively is
altered by a factor 4, thereby changing the natural frequency f and period time T of the
system with a factor 2, in accordance with equation (2.41). From this five different
sets of properties are created and summarized in Table 5.2.
Table 5.2 The different set of properties used in each analysis.
Property set
number
Spring stiffness
k1 [kN/m]
Equivalent
Young’s modulus
EII [GPa]
EIb = EII∙II
[MNm2]
1 300 8.134 18.302
2 75 8.134 18.302
3 1200 8.134 18.302
4 300 2.034 4.576
5 300 32.537 73.208
For each set of properties there is also five different load application points on the
beam to simulate an arbitrary impact position, see Figure 5.8.
 0.5 0.4 0.3 0.2 0.1
Figure 5.8 The different load application points.
To understand the results from an FE analysis it is important to know how they are
obtained and what they really describe. In the FE software used the shear force in
each element is taken as a mean value over the element. When extracting the shear
force results the value in the first local node of each element had to be chosen, see
Figure 5.9. This leads to that the obtained curve is offset to the left with the length of
half an element and the values are a little bit lower than they should be. But because
of the large amount of elements used, namely fifty, the error will be negligible. The
moment along the beam is obtained in the same way as the shear force. The

-- 89 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
76
displacement, on the other hand, can be obtained specifically for each node along the
beam and the response will more or less be exact, see Figure 5.9 again.
1
1
2 3 4 5
3 4 5 6	2
V(x)
u(x)
Figure 5.9 Illustration of how the shear force and displacement is extracted from
the FE results, with the beam elements and nodes numbered.
5.2.1 Eigenmodes of a simply supported beam
The beam corresponding to property set 1, called the original beam, is studied with a
modal analysis in ADINA. This in order to find the mode shapes for the most
important eigenmodes, i.e. the eigenmodes that contribute the most to the actual
deflection shape of the beam. These mode shapes can be seen in Figure 5.10, where
five eigenmodes are presented. The eigenfrequencies of these modes are presented in
Table 5.3. In the figure and table are some mode numbers missing, because they
correspond to deflections that do not take place in the two dimensional x-y plane.
These eigenmodes exist because three dimensional elements are used, but they are not
of interest here.
Table 5.3 The five most important eigenmodes and their corresponding
eigenfrequency for the original beam, property set 1.
Mode number Eigenfrequency
fb [Hz]
Theoretical Eigenfrequency
fnatural [Hz]
1 10.00 10.09
2 39.83 40.36
5 88.98 90.81
8 156.60 161.44
11 241.70 252.25

-- 90 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 77
Figure 5.10 The mode shapes corresponding to the five most important eigenmodes
of the studied beam.
From Figure 5.10 it can be seen that the first mode shape has a simple shape
consisting of one curved line, while the higher mode shape numbers have more local
extrema along the beam. It can also be seen that loading at different positions on the
beam would give deflection shapes that trigger different mode shapes. Eigenmodes of
higher number are more important when the load is applied closer to the support,
compared to loading at midspan. This will be discussed more in the following
sections.
5.2.2 Original beam - Property set 1
The first study is with a beam and spring of property set 1, as described in Table 5.2.
The results presented in Figure 5.11 shows the shape of the response at the time when
the maximum value is reached for each load case. As expected, the maximum moment
increases as the impact position moves closer to the middle of the beam, and in the
opposite way the shear force increases for impacts closer to the support. The
deflection is largest close to the midspan regardless of where the impact occurs. In
Figure 5.12 it can be seen that both the moment at the impact node and the support
reaction force RA occurs at almost the same time regardless of where on the beam the
impact is. It is also visible that the second bump on the curve becomes less
pronounced when the impact is close to the support. This is probably due to that in
addition to the first most dominant eigenmode some additional eigenmodes becomes
more important close to the support.
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
mode 1
mode 2
mode 5
mode 8
mode 11

-- 91 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
78
Figure 5.11 Maximum moment M, shear force V and displacement u over the length
of the original beam for different impact positions, at the time when the
maximum response is reached for each load case.
alpha=0.5 alpha=0.4 alpha=0.3 alpha=0.2 alpha=0.1
0
100
200
300
400
500
600
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Moment
 M [kNm]
x [m]
-300
-200
-100
0
100
200
300
400
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Shear Force
 V [kN]
x [m]
0
10
20
30
40
50
60
70
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Displacement
 u [mm]
x [m]

-- 92 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 79
Figure 5.12 Moment at impact node with regard to time and support reaction force
RA with regard to time for different impact positions.
It can also be of interest to study how the reactions along the beam increases with
time, this is essentially what leads up to the graphs in Figure 5.11 and can be seen in
Figure 5.13 for α = 0.1. Here it can be seen how the shape of the moment curve
changes with time. Early during the impact, the moment is even negative at the
opposite half of the beam to where the load is applied. The shape then changes as the
moment grows and becomes more curved in the positive direction. But when the
maximum moment is reached, the shape has gone back to consist of almost straight
lines, similar to the shape of a static response. The shear force, on the other hand,
grows larger with time without changing its shape very much. One interesting
observation is that the shear force at the opposite support stays very close to zero
during the first half of the studied time interval, while it grows constantly at the
support closest to the load. When looking at the displacement curve it may be
observed that the maximum displacement occurs at different positions at different
times. At first the maximum is close to the point of loading, but with time it moves
closer and closer to the midspan.
alpha=0.5 alpha=0.4 alpha=0.3 alpha=0.2 alpha=0.1
-300
-200
-100
0
100
200
300
400
500
600
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Moment
 M [kNm]
Time t [s]
-150
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
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Reaction force
 RA [kN]
Time t [s]

-- 93 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
80
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
18
20
22
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Displacement
 u(x)
 [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.0785
Figure 5.13 Moment M, shear force V and displacement u over the length of the
original beam at different times during the impact up to when the
maximum response is reached, when loading at α = 0.1.
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.080
t=0.089
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.0895

-- 94 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 81
5.2.3 Effect of beam stiffness
Stiffer beam – Property set 5	5.2.3.1
For property set 5, see Table 5.2, the maximum moment M, shear force V and
deflection u along the beam shows almost identical behaviour to property set 1, see
Figure 5.11, with only small differences in magnitude. These results are therefore only
shown in Appendix E. The moment and reaction force over time, seen in Figure 5.14,
is however displaying a different behaviour showing three bumps. This is due to that
the stiffness of the beam is so large that the eigenfrequency has a much shorter period
time than the duration of the impact. Again, these smaller bumps become less
pronounced closer to the support due to additional eigenmodes coming into play.
Figure 5.14 Moment M at impact node with regard to time and support reaction
force RA with regard to time for different impact positions.
0	1 000
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00	
M
o
m
e	
nt
M
x [m]
alpha=0.5 alpha=0.3 alpha=0.1
-100
0
100
200
300
400
500
600
0.00 0.02 0.04 0.06 0.08 0.10 0.12 0.14 0.16 0.18 0.20
Moment
 M [kNm]
Time t [s]
-50
0
50
100
150
200
250
300
350
0.00 0.02 0.04 0.06 0.08 0.10 0.12 0.14 0.16 0.18 0.20
Reaction force
 RA [kN]
Time t [s]

-- 95 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
82
Softer beam – Property set 4	5.2.3.2
The bending stiffness is now made four times smaller compared to the original beam,
see Table 5.2. One interesting thing about this case, shown in Figure 5.15, is that the
increase in shear force does not show the step like behaviour seen in other cases when
the impact moves closer to the support. Instead the increase in shear force between
α = 0.3 and α = 0.1 is more or less negligible. This phenomenon occurs when the
beam has a relatively low stiffness compared to the stiffness of the impacting object.
One reason for this to happen may be that some additional eigenmodes becomes more
dominant close to the support, thereby influencing the result. These eigenmodes have
higher natural frequencies and therefore the frequency ratio will decrease.
It can also be seen from Figure 5.16 that when the impact is close to the support it
reaches its maximum reaction force much faster compared to if the impact is at the
midspan, 0.08 seconds compared to 0.12 seconds. This time difference is due to that
the beam is so soft that it takes some extra time for the force wave in the beam to
reach the support section. This is because the wave speed is changed when using the
equivalent Young’s modulus EII to modify the bending stiffness EIb of the beam, see
equation (5.6).

-- 96 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 83
Figure 5.15 Maximum moment, shear force and deflection over the length of the soft
beam for different impact positions, at the time when the maximum
response is reached for each load case.
0	1 000
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00	
M
o
m
e	
nt
M
x [m]
alpha=0.5 alpha=0.3 alpha=0.1
0
100
200
300
400
500
600
700
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Moment
 M [kNm]
x [m]
-400
-300
-200
-100
0
100
200
300
400
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Force
 F [kN]
x [m]
0
50
100
150
200
250
300
350
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Displacement
 u [mm]
x [m]

-- 97 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
84
Figure 5.16 Moment at impact node with regard to time and support reaction force
RA with regard to time for different impact positions.
In Figure 5.17 it is presented how the moment and shear force along the beam
increases with time, for impact at α = 0.3 and α = 0.1. For α = 0.3 the moment
behaves in a similar way to the original beam, see section 5.2.2, except that the shape
of the moment is more curved when the maximum response occurs. For α = 0.1 the
moment curve behaves in a different way. In the beginning the moment grows in a
similar way to the other cases. But this time the maximum moment occurs not directly
under the point of impact, but closer to midspan. This behaviour is very different
compared to the moment curve of a static response, and appears to occur when the
frequency ratio f1 / f2 is large. The shear force for the two loading positions behaves in
a similar way as the original beam. However the shape when loading at α = 0.3 is a lot
more curved with a larger force at the supports. In the beginning of the impact though
the shear force is largest at the point of impact.
0	1 000
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00	
M
o
m
e	
nt
M
x [m]
alpha=0.5 alpha=0.3 alpha=0.1
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
600
700
0.00 0.05 0.10 0.15 0.20 0.25
Moment
 M [kNm]
Time t [s]
-300
-250
-200
-150
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
0.00 0.05 0.10 0.15 0.20 0.25
Reaction force
 RA [kN]
Time t [s]

-- 98 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 85
α = 0.3
α = 0.1
Figure 5.17 Moment M and shear force V over the length of the soft beam at
different times during the impact up to when the maximum response is
reached, when loading at α = 0.3 and α = 0.1.
-100
0
100
200
300
400
500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
t=0.010
t=0.020
t=0.040
t=0.060
t=0.080
t=0.100
t=0.127
-300
-200
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V [kN]
x [m]
t=0.010
t=0.020
t=0.040
t=0.060
t=0.080
t=0.100
t=0.130
-50
0
50
100
150
200
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.100
t=0.12
t=0.131
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V [kN]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.0995

-- 99 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
86
5.2.4 Effect of spring stiffness
As mentioned for the 2DOF system in section 5.1.3 the behaviour of the response is
identical when the spring stiffness is changed, compared to when the bending stiffness
of the beam is changed, as long as the frequency ratio remains constant. The results
for property sets 2 and 3, see Table 5.2, are therefore only presented in Appendix E.
5.3 Comparison of model responses
The collision responses for the 2DOF system and FE model presented in section 5.1
and 5.2 are in this section compared. The incoming object has a velocity v0 of 20 m/s,
the mass m1 is set to 1 000 kg and the stiffness k1 is set to 300 kN/m. The beam
stiffness kb is based on the beam from section 4.1.2, which corresponds to property set
1.
Five different property sets are defined and analysed with both the 2DOF system and
the FEM software, see Table 5.4. This table also shows the properties for different
loading positions and what the frequency ratio is for each case. In property set 2 and 3
the spring stiffness k1 is varied and in property set 4 and 5 the bending stiffness EIb
and subsequently the beam stiffness kb is varied. The stiffnesses are changed with
multiples of four, in order to change the eigenfrequencies by a factor two.
In the following sections the comparisons for property set 1, 4 and 5 are presented, i.e.
for the original beam and when the stiffness of the beam changes. The comparisons
for the cases with changed stiffness of the colliding object , property sets 2 and 3, are
here omitted because the responses are equal in both shape and relative size, see
instead Appendix F. The reason for this is that the frequency ratio is exactly equal for
the two cases; property set 2 is equal to property set 5 and property set 3 is equal to
property set 4, see Table 5.4.
The responses presented in this comparison are the displacements u1 and u2, the
support reaction force RA, which is the maximum shear force, and the moment at the
section where the load is applied Mα, all with regard to time. The support reaction
force for the 2DOF system is calculated according to

 	
	
 2
2
2,
)	( R
l
l	l	R
R DOF	A	
(5.7)
where R2 is the force in the beam at the position of impact and β = 1−α. The moment
is then calculated according to
l	R	l	R	M DOF	A	

	
		
 				 2	2,	
(5.8)
All of the results from the comparison can be seen in Appendix F.

-- 100 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 87
Table 5.4 Input parameters for the different property sets and for three different
loading positions.
α Property
set
k1
[kN/m]
EIb
[MNm2]
kb
[MN/m]
m1
[kg]
m2
[kg]	2
1
m
m	
f1
[Hz]
f2
[Hz]	2
1
f
f
0.5
1 300 18.302 7.028 1 000 1 748.6 0.572 2.757 10.09 0.273
2 75 18.302 7.028 1 000 1 748.6 0.572 1.378 10.09 0.137
3 1 200 18.302 7.028 1 000 1 748.6 0.572 5.513 10.09 0.546
4 300 4.576 1.757 1 000 1 748.6 0.572 2.757 5.045 0.546
5 300 73.208 28.112 1 000 1 748.6 0.572 2.757 20.18 0.137
0.3
1 300 18.302 9.960 1 000 2 310.8 0.433 2.757 10.45 0.264
2 75 18.302 9.960 1 000 2 310.8 0.433 1.378 10.45 0.132
3 1 200 18.302 9.960 1 000 2 310.8 0.433 5.513 10.45 0.528
4 300 4.576 2.490 1 000 2 310.8 0.433 2.757 5.225 0.528
5 300 73.208 39.842 1 000 2 310.8 0.433 2.757 20.90 0.132
0.1
1 300 18.302 54.229 1 000 10 092 0.099 2.757 11.67 0.236
2 75 18.302 54.229 1 000 10 092 0.099 1.378 11.67 0.118
3 1 200 18.302 54.229 1 000 10 092 0.099 5.513 11.67 0.473
4 300 4.576 13.557 1 000 10 092 0.099 2.757 5.833 0.473
5 300 73.208 216.92 1 000 10 092 0.099 2.757 23.33 0.118
5.3.1 Original beam - Property set 1
The first comparison is made with the same beam as described in section 4.1.2. The
results are presented in form of graphs for how the reaction force RA , moment Mα and
displacements u1 and u2 for the two bodies during the impact. Three different
positions of impact, from α = 0.5 to α = 0.1, are treated and described in this section.

-- 101 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
88
a) u1, α = 0.5 b) u2, α = 0.5
c) u1, α = 0.3 d) u2, α = 0.3
e) u1, α = 0.1 f) u2, α = 0.1
Figure 5.18 Comparison of response in displacement u1 and u2 over time between
2DOF and FEM, for three different positions of loading and with
property set 1.
-2.5
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
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
60
70
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-2.5
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-30
-20
-10
0
10
20
30
40
50
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-2.5
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-4
-2
0
2
4
6
8
10
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM

-- 102 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 89
a) RA, α = 0.5 b) Mα, α = 0.5
c) RA, α = 0.3 d) Mα, α = 0.3
e) RA, α = 0.1 f) Mα, α = 0.1
Figure 5.19 Comparison of response in support reaction force RA and moment Mα
over time between 2DOF and FEM, for three different positions of
loading and with property set 1.
-150
-100
-50
0
50
100
150
200
250
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-300
-200
-100
0
100
200
300
400
500
600
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-150
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
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-300
-200
-100
0
100
200
300
400
500
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-100
-50
0
50
100
150
200
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM

-- 103 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
90
From Figure 5.18 the conclusion can be made that the correlation for the displacement
u1 is very good and no difference can be seen in any of the loading positions. This is
also the case for all the other property sets, which is why this comparison is left out in
the following sections. The reason for this is probably that the incoming object is
modelled as a simple spring-mass system with the same stiffness k1 in both models.
If instead u2 is analysed a difference between the models can be observed. The
correlation is almost perfect when loading at midspan, while it gets worse when
loading closer to the support. The difference is still small at α = 0.3 and the shape of
the responses is almost equal. At α = 0.1, though, the difference is larger and the
shape of the curves differ quite a lot. The 2DOF response has a noticeable increase in
displacement at the second impact while the FEM response shows only a small saddle
point. The maximum displacement for u2 is on the other hand quite similar in both
models, with a slightly larger value from the FE model response. Hence, the 2DOF is
able to predict the maximum displacement rather well
In Figure 5.19 the support reaction force RA and moment Mα is compared, and the
difference are here more evident; again more so when the load is applied closer to the
support. For the support reaction force RA the response is slightly higher for the FE
model when loading at midspan, while it is the other way around when loading at
α = 0.3. When α = 0.1 the reaction force is noticeable larger for the 2DOF model,
while the shape of the graphs is clearly different. Neither does the FE model have a
noticeable second bump on the curve here, which it does when the load is applied at
midspan. The 2DOF system shows a similar behaviour in all three cases with a second
bump after approximately 0.15 seconds.
The moment diagrams show a similar behaviour as the reaction force, but here the
response from the 2DOF model is always larger. It can also be noted that for α = 0.1
the shape of the response from the FE analysis regarding moment and support reaction
force is almost identical with the values for the reaction force being roughly twice as
large compared to the moment.
One conclusion from these comparisons is that the correlation between 2DOF and
FEM always gets worse when moving closer to the support, i.e. making α smaller.
This probably has to do with that other eigenmodes than the first one have a large
impact when loading close to the support. For the case when loading at midspan the
first eigenmode is the most significant one. The 2DOF system created can on the other
hand only simulate the first eigenmode of the beam.
Another way of presenting the comparison between the 2DOF system and FE model
is to create envelopes of the moment and shear force curves along the beam. This is
done by superimposing the maximum responses for five different positions of loading.
For the FE response this can be explained as superimposing the curves from
Figure 5.11. The envelopes are mirrored to be valid for impacts on both sides of the
midspan. The comparison of the envelopes can be seen in Figure 5.20. As seen
previously in this section, the 2DOF system response is on the safe side for the whole
length of the beam.

-- 104 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 91
Figure 5.20 Comparision of the envelopes for the Moment M and shear force V over
the length of the beam, between the 2DOF and FE responses.
0
100
200
300
400
500
600
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
FEM
2DOF
-400
-300
-200
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Force
 V [kN]
x [m]
FEM
2DOF

-- 105 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
92
5.3.2 Effect of beam stiffness
The beam stiffness is now made one fourth as stiff and four times as stiff compared to
the original beam, to study the outcome of varying stiffnesses, see Table 5.4.
Stiffer beam – Property set 5	5.3.2.1
The correlation in displacement u2 for the stiffer beam is about the same as for the
original beam, see Figure 5.21. The correlation is again very good when loading at
midspan and it gets worse when loading closer to the support. As for the original
beam the FE model displays the highest values in all loading positions, but the
difference is small. The shape also for this case differs more when loading closer to
the support, where the FE model loses some of the peaks which was visible closer to
midspan, while the 2DOF model virtually preserves its shape regardless of loading
position.
a) u2, α = 0.5 b) u2, α = 0.3
c) u2, α = 0.1
Figure 5.21 Comparison of response in displacement u2 over time between 2DOF
and FEM, for three different positions of loading and with
property set 5
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
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-4
-2
0
2
4
6
8
10
12
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-0.5
0.0
0.5
1.0
1.5
2.0
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM

-- 106 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 93
The correlation of reaction forces and moments have the same behaviour as for the
original beam, with a much smaller difference in response compared to the weak
beam, see Figure 5.22. At α = 0.3 the correlation is still very good, as was the case
with the original beam. For α = 0.1 the difference is larger but still relatively small,
and thus, fully acceptable.
a) RA, α = 0.5 b) Mα, α = 0.5
c) RA, α = 0.3 d) Mα, α = 0.3
e) RA, α = 0.1 f) Mα, α = 0.1
Figure 5.22 Comparison of response in support reaction force RA and moment Mα
over time between 2DOF and FEM, for three different positions of
loading and with property set 5.
-50
0
50
100
150
200
250
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-100
0
100
200
300
400
500
600
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-100
-50
0
50
100
150
200
250
300
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-100
0
100
200
300
400
500
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
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
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-50
0
50
100
150
200
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM

-- 107 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
94
The comparison of the envelopes for moment and shear force between the 2DOF
system and the FE model can be seen in Figure 5.23. Also this time the 2DOF system
response is on the safe side for the whole length of the beam, but the difference is
small.
Figure 5.23 Comparision of the envelopes for the Moment M and shear force V over
the length of the stiffer beam, between the 2DOF and FE responses.
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
FEM
2DOF
-400
-300
-200
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Force
 V [kN]
x [m]
FEM
2DOF

-- 108 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 95
Softer beam – Property set 4	5.3.2.2
The correlation in displacement u2 is for the softer beam a little bit worse than for the
original beam, compare Figure 5.24 and Figure 5.18. For loading at midspan the
correlation is still very good but it gets worse when loading closer to the support. This
time the 2DOF model displays the highest values in all loading positions, in contrast
to the original beam.
a) u2, α = 0.5 b) u2, α = 0.3
c) u2, α = 0.1
Figure 5.24 Comparison of response in displacement u2 over time between 2DOF
and FEM, for three different positions of loading and with
property set 4.
The correlation of reaction forces and moments show the same behaviour as for the
original beam, with higher differences closer to the support, see Figure 5.25.
However, this time the differences is a lot larger than before, as the 2DOF system
overestimates the response by over 50 percent compared to the FE analysis, when
loading at α = 0.1.
-300
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-200
-150
-100
-50
0
50
100
150
200
250
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-30
-20
-10
0
10
20
30
40
50
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM

-- 109 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
96
a) RA, α = 0.5 b) Mα, α = 0.5
c) RA, α = 0.3 d) Mα, α = 0.3
e) RA, α = 0.1 f) Mα, α = 0.1
Figure 5.25 Comparison of response in support reaction force RA and moment Mα
over time between 2DOF and FEM, for three different positions of
loading and with property set 4.
-300
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-600
-400
-200
0
200
400
600
800
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-300
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-600
-400
-200
0
200
400
600
800
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
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
600
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-200
-150
-100
-50
0
50
100
150
200
250
300
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM

-- 110 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 97
The comparison of the envelopes for moment and shear force between the 2DOF
system and the FE model can be seen in Figure 5.26. Also this time the 2DOF system
response is on the safe side for the whole length of the beam, and the overestimation
is significant.
Figure 5.26 Comparison of the envelopes for the Moment M and shear force V over
the length of the soft beam, between the 2DOF and FE responses.
5.3.3 Observations from the comparison
From the comparisons in the previous sections it is clear that the correlation between
the 2DOF and FE models are quite good for all property sets when the load is applied
close to midspan. When the load is applied closer to the support, the correlation will
be worse. The cause of this could be that other eigenmodes than the first one is
important when loading close to the support and, as discussed earlier, the 2DOF
system cannot simulate these properly.
When making the beam softer the difference in response increased a lot, in
comparison to the original and stiffer beam which had similar difference in response.
If at the same time looking at the frequency ratios f1 / f2 for the different cases, it gets
clear that the higher the frequency ratio the worse the correlation.
This phenomenon is quite interesting and needs to be investigated further. From now
on the focus is set on the correlation of the shear force, because it often is more
critical and of bigger importance when collision impacts are treated. The bending
0
100
200
300
400
500
600
700
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
FEM
2DOF
-600
-400
-200
0
200
400
600
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Force
 V [kN]
x [m]
FEM
2DOF

-- 111 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
98
moment could also be of importance, but it does not in general lead to a beam failure
because of yielding and plastic redistribution.
5.3.4 Comparison of support reaction forces
To study the shear force the support reaction force RA is investigated, since it is in
general equal to the maximum shear force in a beam. The correlation between the
2DOF and FE models are studied by using the ratio of the reaction forces
RA,2DOF / RA,FEM. In Table 5.5 this ratio is presented together with the frequency ratio
f1 / f2, for all of the loading positions and for even more property sets than presented
before. To clearly be able to see how the correlation of reaction forces depends on the
frequency ratio, these values are also plotted in Figure 5.27 and Figure 5.28. If the
original beam corresponded to a vehicle colliding with a barrier, one could think of
the highest frequency ratios as a rigid steel projectile colliding with a barrier, rather
than a vehicle colliding with an unreasonably soft barrier.
In Figure 5.27 it can be seen once again that the correlation is best when loading at
α = 0.3. When loading at midspan, α = 0.5, the 2DOF system underestimates the
response, meaning it is not on the safe side. This could still be acceptable since the
moment utilizes plastic redistribution and the shear force is considerably larger when
the load is applied close to the support. When α = 0.1 the largest differences in
reaction force can be seen and here the 2DOF system overestimates the shear forces.
What is positive about this is that using the 2DOF system is on the safe side and the
response when loading close to the support is likely the governing one in a design
process, i.e. the largest one. The downside is that using the 2DOF system could result
in very oversized structures, which is not sustainable from an environmental and
economic viewpoint.
The trend in Figure 5.27 shows a decreasing correlation when the frequency ratio
increases. After further studies, it was found out that this is not really true when the
frequency ratio has a higher value than 1, see Figure 5.28. From this it can be seen
that the ratio of the reaction forces starts to decrease for higher values of the
frequency ratio. This results in a better correlation at first, but subsequently leads to
that the 2DOF model underestimates the response for all loading positions, making it
not safe to use anymore. For the case when α = 0.1 the 2DOF model will not be safe
to use anymore when the frequency ratio exceeds 2.5. When the frequency ratio
exceeds a value of approximately 3.5 for the same loading position the ratio of the
reaction force is even lower than for the case when α = 0.3. This occurrence could be
interesting to study further to see what happens to the force ratio at even higher
frequency ratios than 4.5, because it looks like it could decrease even more.

-- 112 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 99
Table 5.5 Input parameters and reaction forces for the different property sets and
for three different loading positions.
α Property
set
Max of
RA,2DOF
[kN]
Max of
RA,FEM
[kN]FEM	A
DOF	A
R
R
,
2,	
k1
[kN/m]
EIb
[MNm2]
kb
[MN/m]
f1
[Hz]
f2
[Hz]	2
1
f
f
0.5
1 221.0 238.5 0.927 300 18.302 7.028 2.757 10.09 0.273
4 263.5 304.6 0.865 300 4.576 1.757 2.757 5.045 0.546
5 198.6 207.3 0.958 300 73.208 28.112 2.757 20.18 0.137
6 191.2 250.6 0.763 300 1.144 0.439 2.757 2.523 1.093
7 185.5 189.5 0.979 300 292.83 112.45 2.757 40.36 0.068
8 254.3 285.9 0.890 300 9.151 3.514 2.757 7.135 0.386
9 192.3 201.3 0.955 300 36.604 14.056 2.757 14.27 0.193
10 240.3 293.4 0.819 300 2.288 0.879 2.757 3.567 0.773
11 99.89 152.3 0.656 300 0.286 0.110 2.757 1.262 2.186
12 90.55 140.7 0.644 300 0.071 0.028 2.757 0.630 4.371
0.3
1 307.0 293.5 1.046 300 18.302 9.960 2.757 10.45 0.264
4 381.8 338.1 1.129 300 4.576 2.490 2.757 5.225 0.528
5 276.1 271.9 1.015 300 73.208 39.842 2.757 20.90 0.132
6 294.6 243.2 1.211 300 1.144 0.623 2.757 2.612 1.055
7 259.3 256.7 1.010 300 292.83 159.37 2.757 41.79 0.066
8 359.7 339.0 1.061 300 9.151 4.980 2.757 7.388 0.373
9 273.8 259.0 1.057 300 36.604 19.921 2.757 14.78 0.187
10 358.7 294.3 1.219 300 2.288 1.245 2.757 3.694 0.746
11 203.0 229.4 0.885 300 0.286 0.156 2.757 1.306 2.111
12 102.7 127.7 0.804 300 0.071 0.039 2.757 0.653 4.221
0.1
1 378.0 332.2 1.138 300 18.302 54.229 2.757 11.67 0.236
4 522.3 334.0 1.564 300 4.576 13.557 2.757 5.833 0.473
5 342.7 324.0 1.058 300 73.208 216.92 2.757 23.33 0.118
6 478.6 281.7 1.699 300 1.144 3.389 2.757 2.917 0.945
7 326.5 317.7 1.028 300 292.83 867.66 2.757 46.66 0.059
8 462.5 353.8 1.307 300 9.151 27.114 2.757 8.249 0.334
9 364.3 308.4 1.181 300 36.604 108.46 2.757 16.50 0.167
10 531.6 313.9 1.694 300 2.288 6.779 2.757 4.125 0.668
11 285.3 255.9 1.115 300 0.286 0.847 2.757 1.458 1.890
12 148.2 205.6 0.721 300 0.071 0.212 2.757 0.729 3.781
13 105.5 177 0.596 300 0.036 0.106 2.757 0.516 5.349

-- 113 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
100
Figure 5.27 Illustration of how the ratio of the support reaction force RA for the
2DOF and FE model varies with the frequency ratio of the two objects.
Figure 5.28 Illustration of how the ratio of the support reaction force RA for the
2DOF and FE model varies with the frequency ratio of the two objects.
Same as Figure 5.27 but for higher values of the frequency ratio.
It is now known how the ratio of the reaction force varies with the frequency ratio. It
can also be of interest to see how the two reaction forces behave separately from each
other, to understand why the ratio looks like it does. This is shown for the FE model
in Figure 5.29 and for the 2DOF model in Figure 5.30.
0.7
0.8
0.9
1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0 1.1
RA,2DOF
 
/ RA,FEM
 [-]
f1 / f2 [-]
alpha = 0.1
alpha = 0.3
alpha = 0.5
0.5
0.6
0.7
0.8
0.9
1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0 5.5
RA,2DOF
 
/ RA,FEM
 [-]
f1 / f2 [-]
alpha = 0.1
alpha = 0.3
alpha = 0.5

-- 114 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 101
Figure 5.29 Illustration of how the reaction force from the FE model RA,FEM varies
with the frequency ratio of the two objects.
Figure 5.30 Illustration of how the reaction force from the 2DOF model RA,2DOF
varies with the frequency ratio of the two objects.
In Figure 5.29 it is seen that the support reaction force RA,FEM has its largest value for
all loading positions at a frequency ratio of about 0.5. In the region close to this
frequency ratio the difference is also the smallest between the loading positions. The
reaction force when loading at α = 0.1 is generally the largest one for all frequency
ratios, which confirms that it can be the governing load case in a design process.
The reaction force from the 2DOF system RA,2DOF also has its maximum for all
loading positions at a frequency ratio of about 0.5. In opposite to the FE model, the
difference in response between load cases is largest here, while the responses seem to
come closer to each other when the frequency ratio increases. The behaviour of these
lines virtually follows the behaviour of the load factor βel, which is plotted for two
mass ratios, approximately corresponding to the three loading positions, in
Figure 5.31. This is also expected since the load factor diagram is based on a
2DOF model.
100
150
200
250
300
350
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0 5.5
RA,FEM
 
[kN]
f1 / f2 [-]
alpha = 0.1
alpha = 0.3
alpha = 0.5
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
550
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0 5.5
RA,2DOF
 
[kN]
f1 / f2 [-]
alpha = 0.1
alpha = 0.3
alpha = 0.5

-- 115 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
102
Figure 5.31 Illustration of how the load factor βel varies with the frequency ratio for
two different mass ratios, corresponding to the different loading
positions.
From Figure 5.29 it can also be seen that the FE response has a slightly different
appearance than the 2DOF response, and this gives the idea that a diagram for a load
factor corresponding to the FE response could be created, similar to Figure 3.12. This
can also be a topic of further studies.
5.3.5 Comparison with calculation model from Biggs
To try and find a more accurate approximation of the support reaction force RA,
compared to FE analysis, that is on the safe side for frequency ratios above 2.0, the
conventional calculation model according to Biggs (1964) is implemented. Here the
support reaction force RA is calculated by
  	 	t	R	t	R	R Biggs	A 1	2	2	1	,	

	 		
(5.9)
where R1(t) is the external load and R2(t) is the reaction force obtained from the 2DOF
system. The two load factors γ1 and γ2 depend on the impact position on the beam and
are for impact at midspan, α = 0.5, presented by Biggs (1964). The load factors used
for other impact positions have previously been determined by Johansson (2014b) and
are presented in Table 5.6. If the load factors are studied it can be seen that adding
them together gives a value of β corresponding to each loading position in the table

	
	 	 2	1	
(5.10)
where, according to Figure 5.7

	 	 1	
(5.11)
See also equation (5.7) for similarities with equation (5.9) and both equations gives
the same response when R1(t) = R2(t).
0.8
0.9
1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
1.8
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0 1.1 1.2 1.3 1.4 1.5
Load factor
 βel [-]
Frequency ratio f1 / f2 [-]
0.50
0.10

-- 116 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 103
Table 5.6 Load factors used to determine support reaction force RA,Biggs by
conventional method, values from Johansson (2014b).
α γ1 γ2
0.05 1.429 -0.479
0.10 1.357 -0.457
0.15 1.286 -0.436
0.20 1.214 -0.414
0.25 1.143 -0.393
0.30 1.071 -0.371
0.35 0.999 -0.349
0.40 0.926 -0.326
0.45 0.854 -0.304
0.50 0.781 -0.281
In the following analyses only impacts close to the support, α = 0.1, is studied since
these are the most critical both with regard to shear force and the ability of the 2DOF
system to represent an accurate structural response at this impact position. In order to
study the response of the system for even higher frequency ratios than before an
additional property set with a beam stiffness 512 times lower than the original beam
(property set 1) is created giving a frequency ratio f1 / f2 of 5.35 see Table 5.7.
Table 5.7 The property sets used with Biggs, only impacts at α=0.1 is tested.
Property
set
Max of
RA.FEM
[kN]
Max of
RA.Biggs
[kN]	FEM	A
Biggs	A
R
R
.
.	
k1
[kN/m]
EIb
[MNm2]
kb
[MN/m]
f1
[Hz]
f2
[Hz]	2
1
f
f
1 332.2 424.1 1.277 300 18.302 54.229 2.76 11.67 0.236
8 353.8 540.9 1.529 300 9.151 27.114 2.76 8.25 0.334
4 334.0 648.9 1.943 300 4.576 13.557 2.76 5.83 0.473
10 313.9 767.2 2.444 300 2.288 6.779 2.76 4.13 0.668
6 281.7 721.6 2.562 300 1.144 3.389 2.76 2.92 0.945
11 256.6 430.1 1.676 300 0.286 0.847 2.76 1.46 1.891
12 206.7 223.5 1.081 300 0.071 0.212 2.76 0.739 3.782
13 177.0 159.0 0.898 300 0.0357 0.106 2.76 0.516 5.349

-- 117 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
104
Figure 5.32 Illustration of how the utilization of the reaction force from the 2DOF
model and Biggs, compared to the FE model, varies with the frequency
ratio of the two objects.
As seen in Figure 5.32 the correlation between Biggs and FEM is similar to the 2DOF
model used before up to a frequency ratio of about 0.4, but as the reaction force ratio
for 2DOF do not longer increase at a frequency ratio of about 0.7, the overestimation
using Biggs still increases, reaching a maximum value of more than 2.5 for a
frequency ratio of 0.95. It then starts to decrease but is on the safe side all the way up
to a frequency ratio of around 4, and then appears to be converging at a utilization
ratio of around 0.8. But further studies are needed to confirm that this is the case for
even higher frequency ratios.
In Figure 5.33a it is seen that both 2DOF and Biggs gives a reasonably good
approximation of the maximum reaction force, but both shows double bumps that is
not visible in the FE-analysis. From Figure 5.33b and Figure 5.33c it can be seen that
the reaction force is overestimated but the shape of the curve shows the same
sinusoidal behaviour. The behaviour in Figure 5.33b shows that the force becomes
almost zero after the initial impact, a response that occurs in all three calculation
models. Figure 5.33d shows that neither 2DOF nor Biggs gives a good approximation
of the reaction force, instead both methods greatly overestimates it. The maximum
value is also delayed by 0.1 seconds compared to the FE analysis. In Figure 5.33e is
the 2DOF and Biggs responses again delayed, but this time the 2DOF gives a very
good maximum value for the reaction force. In Figure 5.33f it can be seen that 2DOF
now gives a smaller maximum value compared to the FE analysis, putting it on the
unsafe side, while Biggs give a really good approximation of the maximum support
reaction force RA. However both 2DOF and Biggs shows a much longer loading pulse
that reaches its maximum 0.3 seconds later than the FE-analysis. Evidently neither
method is able to represent the result in the FE analysis.
0.4
0.6
0.8
1.0
1.2
1.4
1.6
1.8
2.0
2.2
2.4
2.6
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0 5.5
RA / RA,FEM
 [-]
f1 / f2 [-]
Biggs alpha = 0.1
2DOF alpha = 0.1
2DOF alpha = 0.3
2DOF alpha = 0.5

-- 118 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 105
a) Property set 1 – original beam
f1 / f2 = 0.236
b) Property set 8 – kb / 2
f1 / f2 = 0.334
c) Property set 4 – kb / 4
f1 / f2 = 0.473
d) Property set 6 – kb / 16
f1 / f2 = 0.945
e) Property set 11 – kb / 64
f1 / f2 = 1.891
f) Property set 12 – kb / 256
f1 / f2 = 3.782
Figure 5.33 Curves comparing how the support reaction force RA changes over time
for the different calculation models, when impact at α = 0.1.
-2 0000	2 000
0.00 0.10 0.20 0.30
R	
A
[	
k
N
Time t [s]
FEM 2DOF Biggs
-300
-200
-100
0
100
200
300
400
500
0.0 0.1 0.2 0.3
RA [kN]
Time t [s]
-100
0
100
200
300
400
500
600
0.0 0.1 0.2 0.3
RA [kN]
Time t [s]
-600
-400
-200
0
200
400
600
800
0.0 0.1 0.2 0.3
RA [kN]
Time t [s]
-600
-400
-200
0
200
400
600
800
0.0 0.1 0.2 0.3
RA [kN]
Time t [s]
-300
-200
-100
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
RA [kN]
Time t [s]
-150
-100
-50
0
50
100
150
200
250
0.0 0.1 0.2 0.3 0.4 0.5
RA [kN]
Time t [s]

-- 119 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
106
One conclusion that can be drawn on the basis of this is that, for frequency ratios
below 2.5, the 2DOF system produces the most accurate result and is on the safe side.
For frequency ratios above 2.5, Biggs is still on the safe side up to a frequency ratio of
about 4.5. For higher frequency ratios the utilization ratio seems to converge at a
value around 0.8, meaning the reaction force is underestimated by 20 percent, but
further studies are needed to be able to confirm whether this is really the case.
It also needs to be clarified again that the beam stiffness EIb in the FE software is
modified by changing the value of the Young’s modulus, instead of changing the
moment of inertia. This implies that also the wave speed, dependent on Young’s
modulus and the density, in the material is changed, see equation (5.6). This could be
a reason why the response behaves so different when the beam is very soft and should
be investigated further.
When dealing with very soft beams one also needs to remember that damping is
ignored in this project. The assumption to do so was valid for stiffer beams but one
can argue that the importance of damping is larger when the beam is soft, i.e. for high
frequency ratios. This could be because the response is much slower and the effect of
damping would have time to make an impact.
5.3.6 Deflection of weak beams
As seen in Figure 5.33 the difference in time between 2DOF and FEM to reach the
maximum support reaction force RA increases for the softer beams with the 2DOF
system being much slower. Therefore further studies are performed to study the
behaviour of the deflection as the stiffness of the beam k2 decreases. In this section,
the deflection at the point of impact u2 is compared, this is however not the maximum
deflection of the beam that instead will occur close to the midspan regardless of
impact position as previously shown in Figure 5.13. The comparison presented in
Figure 5.34 shows the deflection u2 over time when loading at α = 0.1. As seen in
Figure 5.34a to Figure 5.34d the 2DOF system gives a good estimate of both the size
of the maximum deflection and at which time it occurs. In Figure 5.34e and
Figure 5.34f the FE analysis shows a double top with the second one being the larger.
This is thought to be due to that the impact is so close to the support that the force
wave, created from the impact, bounces back from the support with mirrored
amplitude. This creates the local minimum that occurs before the absolute maximum
is reached. This behaviour is not captured by the 2DOF system which shows a
sinusoidal behaviour. The maximum from 2DOF is reached almost at the same time
as the FE model has a local minimum but the overall period time seem to correlate
well.

-- 120 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 107
a) Property set 1 – original beam
f1 / f2 = 0.236
b) Property set 8 – kb / 2
f1 / f2 = 0.334
c) Property set 4 – kb / 4
f1 / f2 = 0.473
d) Property set 6 – kb / 16
f1 / f2 = 0.945
e) Property set 11 – kb / 64
f1 / f2 = 1.891
f) Property set 12 – kb / 256
f1 / f2 = 3.782
Figure 5.34 Comparison of how the deflection u2 changes over time at position
α = 0.1 for different property sets.
-4
-2
0
2
4
6
8
0.0 0.1 0.2 0.3
Deflection
 u2 [mm]
Time t [s]
2DOF
FEM
-10
-5
0
5
10
15
20
0.0 0.1 0.2 0.3
Deflection
 u2 [mm]
Time t [s]
2DOF
FEM
-30
-20
-10
0
10
20
30
40
50
0.0 0.1 0.2 0.3
Deflection
 u2 [mm]
Time t [s]
2DOF
FEM
-200
-150
-100
-50
0
50
100
150
200
0.0 0.1 0.2 0.3 0.4 0.5
Deflection
 u2 [mm]
Time t [s]
2DOF
FEM
-300
-200
-100
0
100
200
300
400
0.0 0.1 0.2 0.3 0.4 0.5
Deflection
 u2 [mm]
Time t [s]
2DOF
FEM-800
-600
-400
-200
0
200
400
600
800
0.0 0.2 0.4 0.6 0.8 1.0
Deflection
 u2 [mm]
Time t [s]
2DOF
FEM

-- 121 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
108
To see if the phenomenon occurring in Figure 5.34e and Figure 5.34f continues
throughout the beam the deflection is also examined at midspan for the same loading
position, α = 0.1, see Figure 5.35. There it can be seen that the curve from the
FE analysis becomes smoother and more stable, showing the same behaviour as the
2DOF model. The maximum response is a little bit delayed in the FE analysis, which
is probably due to that it takes some time for the midspan of the beam to react to the
impact. This is more noticeable for the soft beams since the wave speed is lower, see
equation (5.6).
In opposite to the reaction force the deflection from 2DOF seems to always be on the
safe side. This suggests that the reason for the decreasing reaction force for softer
beams has something to do with how the reaction force is obtained from the deflection
by using the equivalent static load.
a) Property set 11 – kb / 64
f1 / f2 = 1.891
b) Property set 12 – kb / 256
f1 / f2 = 3.782
Figure 5.35 Comparison of how the deflection at midspan umid changes over time for
α = 0.1 for property sets 11 and 12.
5.3.7 Comparison of response assuming characteristic impulse
For collisions with high frequency ratios, the beam is much softer than the colliding
object. This implies that almost all deformation takes place in the beam and that the
duration of the impact is short compared to the period Tb of the beam. With this in
mind, it is assumed that the impulse in such cases can be seen as a characteristic
impulse, with an infinitely short duration. In Figure 5.36 it can be seen how the
duration of the impulse decrease when the frequency ratio increases. This is made by
changing the stiffness of the colliding object rather than stiffness of the beam, to make
the difference easy to compare. The three highest frequency ratios appear to have an
impulse that is short enough to be seen as characteristic, see also Figure 5.37. The
same reasoning will be valid when changing the stiffness of the beam instead, but in
this case the duration of the impact will remain almost constant while the period of the
beam Tb increases. This concludes that the governing factor, for when it is reasonable
to assume a characteristic impulse, will be the relationship between the duration of
impact and the period of the beam.
-0.6
-0.4
-0.2
0.0
0.2
0.4
0.6
0.8
1.0
0.0 0.1 0.2 0.3 0.4 0.5
Deflection
 u2 [m]
Time t [s]
2DOF
FEM-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.2 0.4 0.6 0.8 1.0
Deflection
 u2 [m]
Time t [s]
2DOF
FEM

-- 122 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 109
Figure 5.36 Illustration of the shape of the impulse for five different frequency
ratios.
Whether this is true or not is investigated in this section by studying the reaction force
from a characteristic impulse.
First, the deflection of the beam subjected to a characteristic impulse is written,
according to section 2.3.2.2, as
b
c	c
el
k	m
I
m
I
u 



2	2	2
,2

(5.12)
where the characteristic impulse is defined as
0	1	2 v	m	Ic 			
(5.13)
when the response is elastic. The reaction force can, by utilizing equation (3.2) and
(5.7) together with (5.12), be written as
			 el	b	char	A u	k	R ,2	,	
(5.14)
This reaction force is now calculated for the property sets with highest frequency
ratios, and the result is plotted together with the 2DOF and Biggs results in
Figure 5.37. It can be seen that the characteristic impulse gives values that lies
somewhere in between the 2DOF and Biggs response when the frequency ratio f1 / f2
is above 1.0. This is quite good results if you consider the simple formula for
obtaining them, where only the masses, beam stiffness and initial velocity needs to be
known. This formula can be used for rough estimates where the reaction force or
displacement needs to be estimated with a simple method.
0
1
2
3
4
5
6
7
8
0.00 0.01 0.02 0.03 0.04 0.05 0.06 0.07 0.08 0.09
Force
 R1 [MN]
Time t [s]
f1/f2=0.473
f1/f2=0.945
f1/f2=1.891
f1/f2=3.782
f1/f2=5.673

-- 123 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
110
Figure 5.37 Illustration of how the ratio of the support reaction force RA / RA,FEM
when assuming a characteristic impulse varies with the frequency ratio,
in comparison to the 2DOF and Biggs responses. Loading at α = 0.1.
0.4
0.6
0.8
1.0
1.2
1.4
1.6
1.8
2.0
2.2
2.4
2.6
2.8
3.0
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0 5.5
RA / RA,FEM
 [-]
f1 / f2 [-]
Biggs
2DOF
Characteristic impulse

-- 124 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 111
5.4 Design example with a bilinear stiffness relationship
5.4.1 Orientation
In this section an example of an analysis is carried out and the aim is to come as close
to a real life design problem as possible. The problem consists of analysing a column
which is subjected to a collision impact from a moving vehicle, see Figure 5.38. The
column is represented by the same elastic beam as was used in previous sections, for a
detailed description see section 4.1.2. In order to better capture the real behaviour of a
vehicle impact, as described in section 4.1.1, a bilinear load-displacement relationship
for the spring representing the vehicle is utilized and the material response is fully
plastic, meaning that the displacement remains constant at unloading. A fully plastic
vehicle response is also what is assumed in Eurocode, with which a comparison will
be conducted. Only the 2DOF model is used for analysis in this section because in
ADINA it is not possible to use a plastic response for spring elements.
The analysis is carried out with, in addition to the one described above, five more
load-displacement relationships for the vehicle in order to study the difference in
response and determine if a simplified relationship can produce acceptable results, see
Figure 5.38. The second relationship exhibits an elastic behaviour instead of plastic,
the third and fifth relationship exhibits a linear plastic curve and the fourth and sixth a
linear elastic curve.
lb
hb
v0
m1
R1
k1,1
∆u	ubi
k1,2
R1
k1,1
ubi
k1,2
∆u
R1
∆u
R1
∆u
k1,1
1
3
2
4
α∙lb
R1
∆u
k1,2
5
R1
∆u
k1,2
6
k1,1
Figure 5.38 Illustration of the vehicle colliding with a beam representing a column
and the six different load-displacement relationships for the vehicle
studied in this example. The dashed line represents the unloading path.
The properties of both the beam and the vehicle are presented in Table 5.8. The
stiffness k1,1 is set to 300 kN/m in accordance with Eurocode, k1,2 is four times greater,
1 200 kN/m and the change in stiffness is assumed to happen when the deformation of
k1,1 has reached 0.5 m, which is a reasonable assumption according to Figure 4.10.

-- 125 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
112
The loading position is chosen to be at α = 0.1, also in accordance with Eurocode. The
stiffness of the beam kb and the transformation factor κm,el is calculated according to
the method presented in section 0 where the transformation to a 2DOF system is
described. The mass m1 is specified as 1 500 kg for cars in Eurocode, and the
velocity v0 is stated as 25 m/s for motorways, so these values are chosen for the study.
According to Eurocode the force should be applied as a distributed load with a height
of 0.25 m. This small distribution, γ = 0.05, can according to section 0 be regarded as
a point load.
Due to the relatively low frequency ratio in this example the 2DOF system will,
according to Figure 5.27, produce a result that is a good estimate of the FE response.
Therefore the 2DOF system can, in this case, be seen as a good reference and
representation of reality.
Table 5.8 Properties of the beam and the vehicle for use in the 2DOF model, see
section 5.1 for explanation of variables.
Beam
lb 5 m
mb 3 600 kg
EIb = Ec∙III 18.302 MNm2
α 0.1
kb 54.23 MN/m
κm,el 2.803
m2 10 092 kg
fb 11.67 Hz
Vehicle
m1 1 500 kg
v0 25 m/s
k1,1 300 kN/m
k1,2 1 200 kN/m
ubi 0.5 m
f1,1 2.251 Hz
f1,2 4.502 Hz
Ratios
f1,1 / fb 0.193
f1,2 / fb 0.386
m1 / m2 0.149

-- 126 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 113
5.4.2 Results using the 2DOF system
The results from the 2DOF system using the different load–displacement relationships
are presented and compared with each other in the following sections. Only the forces
are shown since it is the most important parameter and the displacement u2 follows
the same response as the force R2.
Bilinear plastic behaviour – Material response 1	5.4.2.1
a) b)
Figure 5.39 Force – Displacement curve and Force – Time curve using material
response 1.
In Figure 5.39a the force R1 is plotted against the deformation ∆u and R2 is plotted
against u2. It can clearly be seen by the shape of R1 that the vehicle has a plastic
material response with a bilinear stiffness. The beam is fully elastic and much stiffer
than the vehicle which is confirmed by the shape of R2. In Figure 5.39b it can be seen
that the impulse from R1 is cut off after reaching the maximum force value and this is
when the impact is over. The velocity is at that time zero and the vehicle will change
direction. This behaviour is typical for plastic material responses. The maximum force
in the beam, seen in both Figure 5.39a and Figure 5.39b, is R2 = 1 504 kN.
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
0.0 0.5 1.0 1.5
Force [MN]
Displacement u [m]
R1
R2
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2
Force [MN]
Time t [s]
R1
R2

-- 127 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
114
Bilinear elastic behaviour – Material response 2	5.4.2.2
a) b)
Figure 5.40 Force – Displacement curve and Force – Time curve using material
response 2.
The material response of the vehicle is now fully elastic, which is seen in
Figure 5.40a. The load R1 now follows the same path both at loading and unloading,
in the same way as the load in the beam R2. Because of this the impulse is twice as
large compared to Figure 5.39b, the maximum force in the second body is on the other
hand not much larger than before, reaching a value of R2 = 1 536 kN.
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
0.0 0.5 1.0 1.5
Force [MN]
Displacement u [m]
R1
R2
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2
Force [MN]
Time t [s]
R1
R2

-- 128 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 115
Linear plastic behaviour – Material response 3 and 5	5.4.2.3
a) b)
Figure 5.41 Force – Displacement curve and Force – Time curve using material
response 3, stiffness k1,1 = 300 kN/m.
The material response of the vehicle is now linearly plastic using the lower stiffness
k1,1. Compared to the bilinear case the deformation ∆u is much larger and the forces
are lower, see Figure 5.41. However the work done by the vehicle, equal to the area
under R1, is about the same as before. The maximum force in the second body now
reaches a value of R2 = 554.5 kN.
a) b)
Figure 5.42 Force – Displacement curve and Force – Time curve using material
response 5, stiffness k1,2 = 1 200 kN/m.
The material response of the vehicle is again linearly plastic but using the higher
stiffness k1,2. Compared to the bilinear case the deformation ∆u is now smaller but the
forces are a little bit larger, see Figure 5.42. The maximum force in the second body
now reaches a value of R2 = 1 629 kN, which is a good approximation of the response
in the bilinear case.
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.0 0.5 1.0 1.5 2.0
Force [MN]
Displacement u [m]
R1
R2
-0.6
-0.4
-0.2
0.0
0.2
0.4
0.6
0.8
0.0 0.1 0.2
Force [MN]
Time t [s]
R1
R2
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
0.0 0.5 1.0
Force [MN]
Displacement u [m]
R1
R2
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.00 0.05 0.10
Force [MN]
Time t [s]
R1
R2

-- 129 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
116
Linear elastic behaviour – Material response 4 and 6	5.4.2.4
a) b)
Figure 5.43 Force – Displacement curve and Force – Time curve using material
response 4, stiffness k1,1 = 300 kN/m.
a) b)
Figure 5.44 Force – Displacement curve and Force – Time curve using material
response 6, stiffness k1,2 = 1 200 kN/m.
The material response is now linearly elastic. The results for both forces are almost
the same compared to the plastic case, with slightly higher values due to the larger
impulse. The maximum force in the second body is for the lower stiffness
R2 = 588.7 kN and for the higher stiffness R2 = 1 661 kN.
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.0 0.5 1.0 1.5 2.0
Force [MN]
Displacement u [m]
R1
R2
-0.2
-0.1
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.0 0.1 0.2 0.3
Force [MN]
Time t [s]
R1
R2
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
0.0 0.5 1.0
Force [MN]
Displacement u [m]
R1
R2
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.00 0.05 0.10 0.15 0.20
Force [MN]
Time t [s]
R1
R2

-- 130 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 117
Comparison between material responses	5.4.2.5
In Figure 5.45 the force in the beam R2 is compared for the bilinear and linear material
responses for both the elastic and plastic cases. The case with linear response and
lower stiffness is omitted because of the lower force level.
Figure 5.45 Force – Time curve for comparison between the different material
responses.
For the elastic responses the maximum force R2 is slightly larger, due to the double
size of the impulse. However, for the plastic cases it can be seen that the amplitude of
R2 is larger after the initial impact compared to the elastic cases, i.e. at t > 0.1 seconds.
This is due to that for the elastic case the force on the beam R1 is still acting when the
beam is moving in the negative direction, while for the plastic case the force on the
beam R1 stops acting when the vehicle changes direction. The difference in force
between the different plastic and elastic material responses are presented in Table 5.9.
Table 5.9 Comparison between the different load – displacement relationships.
Material response
Plastic unloading Elastic unloading
,pl
,el
R
R
2
2
R2,pl
[kN]	1	2
2
,pl,
,pl
R
R	
R2,el
[kN]	1	2
2
,pl,
,el
R
R
Bilinear loading,
response 1 and 2 1 504 1.000 1 536 1.021 1.021
Linear loading k1,1,
response 3 and 4 554.5 0.369 588.7 0.391 1.062
Linear loading k1,2,
response 5 and 6 1 629 1.083 1 661 1.104 1.020
As seen in Table 5.9 the ratio between elastic and plastic unloading is close to one,
1.021 when using the bilinear loading curve and 1.062 and 1.020 for the linear loading
curves. It is also seen that the resulting load when using the bilinear curve is almost
three times as large compared to when the linear curve with the lower stiffness k1,1 is
used. If instead the higher stiffness k1,2 is used the resulting load in the beam is
slightly overestimated compared to the bilinear curve, with about 8 percent for the
plastic case and 10 percent for the elastic case.
This implies that, for the parameters used in this example, the linear response with
high stiffness can be used for the vehicle to estimate the real behaviour of the collision
impact. This is also on the safe side for both elastic and plastic material response.
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Force
 R2 [MN]
Time t [s]
Bilinear pl.
Bilinear el.
Linear pl. k2
Linear el. k2

-- 131 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
118
5.4.3 Eurocode
The resulting force on the structure is calculated according to Eurocode 1-7, as
described in section 4.3. Specifically it is in annex C, “Dynamic design for impact”,
that the design process is described.
The impact position for cars is given as 0.5 m above the ground in Eurocode, which is
the same value as α∙lb used for the 2DOF analysis. All other input values used are as
given in Table 5.8.
The theory of hard impact given in Eurocode is used in this study because it states that
the vehicle deforms more than the barrier. More precise it assumes a rigid barrier and
a vehicle that deforms linearly, hence Eurocode neglects any bilinearity in the vehicle
response. The code then states an expression for the maximum resulting dynamic
interaction force F, which is given in equation (5.15)
1	1 m	k	v	F r 			
(5.15)
where vr is the object velocity at impact. This is the same expression as the dynamic
load for a hard impact, derived in section 3.2.1.
If now the current values are inserted into equation (5.15), the response becomes
kN	33	.	530	1500	10	300	25 3 					F	
(5.16)
This is the maximum dynamic force value that is acting on the outer surface of the
structure, corresponding to R1 in the 2DOF system. Eurocode then states that this
value needs to be multiplied with an amplification factor φdyn to account for dynamic
effects inside the structure, thus giving a force corresponding to R2. It is not explicitly
explained how the amplification factor should be calculated, only that a direct
dynamic analysis is recommended to use. In fact the amplification factor corresponds
well to the load factor βel described in section 3.2.1, even though it is derived for
elastic response instead of plastic. Using this load factor would increase the maximum
force with about 10 percent in this case, see Figure 3.12. The force in the beam R2
then becomes
kN	36	.	583	33	.	530	1	.	1	2 				 F	R el	
	
(5.17)
which is a good approximation of the linear plastic response obtained in
section 5.4.2.3. Because of the great importance of the secondary stiffness k1,2, seen in
the previous section, it is now natural to instead use that stiffness in equation (5.15) to
find a better correlation with the bilinear 2DOF model. By doing so and also
multiplying with the corresponding load factor the force in the structure will get a
better value
kN	3	.	1665	1500	10	1200	25	57	.	1 3
2 						R	
(5.18)
The force is now a lot bigger compared to when using recommended values and it is
even on the safe side of the bilinear 2DOF response. It can also be noted that the force
is now really close to the 2DOF system when linear response with high stiffness is
used, see Table 5.9.

-- 132 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 119
5.4.4 Observations
The different material behaviours of the vehicle proved to give quite big differences in
response with the stiffer part of the load-displacement curve to be governing. This is
really interesting since, as mentioned before, Eurocode only assumes a linear material
relationship with a relatively low stiffness. This leads to that the maximum force R2
obtained according to Eurocode is only about 40 percent of the maximum force
obtained from the 2DOF model using a bilinear material response. This proves that it
sometimes can be dangerous to trust the values and formulas in Eurocode without
having the proper background knowledge. It should also be mentioned that the
stiffness values used for the bilinear material response in this example is much lower,
about one third, compared to what was discovered in section 4.1.1, see Figure 4.10.
One would think that a better result would be obtained by using the higher secondary
stiffness in the formula from Eurocode. Of course, this is also the case and the
response, after multiplying with the load factor, becomes slightly higher compared to
the bilinear plastic 2DOF system, meaning it is on the safe side.
Another conclusion from this example is how important the second stiffness is,
especially when the velocity of the vehicle is high. On the other hand, for low
velocities resulting in deformations below or close to the point of stiffness change, the
first stiffness will be dominant.
It should also be pointed out that although the effect of plastic material response
proved to be small in this example, the effect is believed to become much larger for
collision impacts with a high frequency ratio. For these cases the response of the
second body will be much slower than the response of the first. Thereby the entire
impulse will be transferred before the second body reaches its maximum deflection,
thus will the difference in size of impulse between elastic and plastic response make
more difference.
5.4.5 Comparison
It can be interesting to investigate the correlation between Eurocode and the
2DOF model for different velocities when using the higher secondary stiffness
value k1,2. The load factor βel used in the Eurocode calculation is again obtained from
the diagram in Figure 3.12, and the values are presented in Table 5.10. Figure 5.46
shows a magnified version of the graph from Figure 3.12 with the coordinates marked
by a cross. Eurocode also provides structural parameters for heavy vehicles and they
are therefore included in this comparison. The same stiffness values should be used
for all types of vehicles according to Eurocode, therefore the stiffness k1,2 is used for
both types of vehicle.
Table 5.10 Properties used for obtaining the load factor βel in the example.
Vehicle m1
[kg]
k1,2
[kN/m]
f1,2
[Hz]	2
1
m
m
b	f
f 2,1	
βel
[-]
Car 1 500 1 200 4.502 0.149 0.386 1.57
Heavy vehicle 30 000 1 200 1.007 2.973 0.086 1.08

-- 133 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
120
1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
1.8
0.00 0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40 0.45 0.50 0.55 0.60
Load factor
 βel [-]
Frequency ratio f1 / f2 [-]
Hard impact
0.10
0.20
0.50
1.0
1.5
2.0
3.0
5.0
10
50
100
Figure 5.46 Load factor diagram with coordinates used in the example.
The comparison for different velocities can be seen in Figure 5.47 for the two types of
vehicle. The correlation between Eurocode and the 2DOF model is acceptable for the
case with the car, as long as the initial velocity is not too low. This is due to that the
bilinear material response is used in the 2DOF system and the secondary stiffness k1,2
will not influence the response at initial velocities under about 8 m/s, see Figure 5.47.
At such low initial velocities Eurocode will overestimate the response with up to
170 percent. In these cases it would be wiser to use the lower stiffness k1,1 in the
Eurocode calculation. When the heavy vehicle is studied the correlation is very good.
The bilinear response is still used for the vehicle but since the mass is very large the
secondary stiffness is reached at a much lower velocity, about 1.6 m/s. This velocity
can be obtained by using equation (5.19)
1
1,1
0 m
k
u	v bi		
(5.19)
It should be noted that the stiffness still changes at the same force level and
deformation as before, see Figure 5.39a.
a) Car b) Heavy vehicle
Figure 5.47 Comparison of resulting force in the beam between Eurocode and
bilinear 2DOF for different initial velocities.
0.0
0.5
1.0
1.5
2.0
2.5
3.0
0 5 10 15 20 25 30 35 40
Force
 R2 [MN]
Velocity v0 [m/s]
Eurocode
2DOF
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
0 5 10 15 20 25 30 35 40
Force
 R2 [MN]
Velocity v0 [m/s]
Eurocode
2DOF

-- 134 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 121
From this example it can be concluded that the method provided in Eurocode can be a
good estimation in a design process, as long as the correct value of the vehicle
stiffness and load factor is used. The method seems to always be on the safe side
because it assumes a hard impact. It should though be noted that the results may not
really be accurate for the highest velocities presented, due to the unknown response of
the vehicles at such large corresponding deformations. This is especially important for
the heavy vehicle where the deformation will be larger at the same velocity.
A suggestion for Eurocode would be to use a stiffness which depends on the initial
velocity and mass of the colliding vehicle. This would give a response that was closer
to the bilinear 2DOF response at different initial velocities. This would not be too
complicated to introduce if only the properties of the bilinear material response is
fully known. More detailed studies of the load-displacement relationship in vehicles
during collision impact needs to be conducted. This needs to be made also for
different initial velocities to determine if the bilinear material response is dependent
on the velocity as well.

-- 135 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
122
6 Final Remarks
The objective of this Master’s thesis has been to investigate a collision impact and the
resulting responses using both simplified and more advanced design approaches. The
different methods, including a two degree of freedom (2DOF) system and a finite
element (FE) model, have also been compared. This is made in order to see how well
the simplified methods are able to describe the behaviour of a collision impact against
a simply supported beam with elastic response.
6.1 Conclusions
The overall behaviour of an impact is not dependent on the individual properties of
the involved objects but rather on the relationship between the properties. Therefore, a
convenient parameter to use as a base in linear elastic analyses is the ratio of the
eigenfrequencies of the two objects, which depends on the mass and stiffness of both
objects.
For a 2DOF system the load factor βel is a very convenient tool for obtaining the
resisting force in the second body from the dynamic load of an hard impact. A good
way of presenting the load factor is to plot it as a function of the frequency ratio and
for different values of the mass ratio.
The response in a beam during a collision can be very different from when a static
load is applied at the same position. This is more pronounced for collisions with high
frequency ratios where, for example, the maximum moment might occur at a different
section than at the point of impact.
For a collision on a simply supported beam, the correlation between the shear force
from the 2DOF system and FE analysis greatly depends on the frequency ratio. The
correlation is also different depending on the impact position. It is best when the
frequency ratio is close to zero and around two. Between these values the 2DOF
response is on the safe side for impacts close to the support, but the maximum shear
force might be greatly overestimated. For frequency ratios above 2.5 the 2DOF
system produces results that are on the unsafe side compared to the FE analysis. When
using the conventional model, also referred to as Biggs model, to calculate the
maximum shear force the results are larger compared to the 2DOF system for all
frequency ratios. This implies that the Biggs response produces better results for high
frequency ratios, although it will be unsafe as well if the ratio is high enough.
In opposite to the shear force, the maximum deflection of a beam obtained from the
2DOF model always has a good correlation with the FE analysis. It is also on the safe
side for all frequency ratios treated in this thesis. This suggests that using the
equivalent static load for obtaining the sectional forces may not be valid for high
frequency ratios.
The load-displacement relationship for cars during a collision seems to have a bilinear
response with a considerable stiffness increase after a certain deformation. Even
though the overall behaviour obtained from crash tests are similar, it should be noted
that there are some variation in the results depending on the model of the car and test
method used. The material response of the colliding vehicle was successfully
implemented in the 2DOF system and produced reasonable results. However, these
were for some cases significantly different to what was found when using the linear

-- 136 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 123
stiffness proposed by Eurocode. Furthermore, it was found that the 2DOF response
can easily be estimated by utilizing the theory of hard impact and using an appropriate
vehicle stiffness. This stiffness depends on the velocity at impact and should be higher
for high velocities and lower for low velocities. Which stiffness to use is also highly
dependent on the mass of the vehicle.
The theory of hard impact is also utilized in Eurocode but here the same stiffness is
used for all types of vehicles and for all impact velocities, i.e. a linear response is
assumed. This stiffness is also very low compared to what was found from the studied
crash tests, indicating that the obtained response might be too low. A proposed
revision for Eurocode is to use different vehicle stiffnesses for different type of roads
and vehicles.
6.2 Recommendations of approach for analysis
The following recommendations are valid for analyses of collisions against simply
supported beams.
 To estimate the shear force the 2DOF system should be used for frequency
ratios below 2.5 and Biggs for frequency ratios between 2.5 and 4.5. For
higher frequency ratios both the 2DOF system and Biggs will be on the unsafe
side and an FE analysis may be necessary.
 For frequency ratios above 1.5 it is possible to make a rough estimation of the
beam response using the deflection from the characteristic impulse. For the
shear force this response will always lie between the 2DOF and Biggs
responses.
 For vehicle impact against a rigid barrier, such as a heavy concrete structure,
the response can be estimated by utilizing the theory of hard impact and using
an appropriate vehicle stiffness. This will always give results on the safe side.
6.3 Further studies
In this thesis only elastic material response of the beam has been studied. To make the
analysis more refined a plastic material behaviour should be implemented in the
models in order to study what effect this might have on the beam response. Nonlinear
response of the incoming object should also be investigated further.
To confirm that vehicles have a bilinear load-deflection curve more studies of crash
tests need to be conducted. It is also of interest to study if this behaviour differs for
different impact velocities and different types of vehicles, for example heavy trucks.
Furthermore, it is important to determine what stiffnesses to use since these, from
what is found in this thesis, seem to be much larger compared to what is given in
Eurocode.
The correlation in shear force between the 2DOF system and FE analysis is, in this
thesis, studied up to a frequency ratio of about five. But at this frequency ratio the
tendency is that the correlation between the models will converge as the frequency
ratio becomes even higher, with the 2DOF model producing results on the unsafe side.
It also appears like the difference between the impact positions will disappear for high
frequency ratios. These phenomena need to be investigated further to confirm that this
really is the case.

-- 137 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
124
A similar diagram as the one describing the load factor βel as a function of the
frequency ratio could be created, but this time for the FE responses, both shear force
and moment, rather than the 2DOF response. This should be made for both an elastic
and plastic material response for both objects. The diagram should include high
frequency ratios to also make it valid for a so called soft impact.
In this thesis only collision against a simply supported beam is studied, but it could
also be interesting to study a beam with other support conditions. Furthermore, it
would be of interest to analyse a collision against a plate with different boundary
conditions. It then needs to be investigated how the sectional forces should be
calculated and how the response and crack pattern differs from static loading. In the
same way as for the beam it should be determined how well a 2DOF system is able to
describe the response of a plate.
The bending stiffness EIb used in the FE analysis is modified by changing the value of
the Young’s modulus E, rather than changing the moment of inertia I. This means that
also the wave speed in the material is changed and could be a reason why the response
is so different for very soft beams. This potential problem should be investigated
further by changing the beam stiffness by modifying the moment of inertia directly.
An intense impact on a concrete structure could cause spalling at the back of the
structure. A study of this phenomenon should be carried out in order to be able to
describe it in detail. It would also be useful to determine what simplified models to
use in order to predict the size and velocity of the spalled concrete.
A modal analysis of the beam deflection shape could be made, by using Fourier
transformations, in order to better understand the importance of each of the different
eigenmodes for different impact positions.

-- 138 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 125
7 References
ADINA R & D, Inc., 2014. ADINA System 9.0 Release Notes, Watertown: s.n.
Al-Thairy, H. & Wang, Y., 2013. An assesment of the current Eurocode 1 design
methods for building structure steel columns under vehicle impact. Journal of
Constructional Steel Research, Issue 88, pp. 164-171.
Biggs, J. M., 1964. Introduction to Structural Dynamics. Boston: McGraw-Hill Inc..
Cederwall, K., Lorentsen, M. & Östlund, L., 1990. Betonghandboken - Konstruktion.
2nd ed. Stockholm: Svensk byggtjänst.
CEN, 2004. Eurocode 2: Design of concrete structures Part 1-1, Stockholm: SIS
Förlag AB.
CEN, 2010. Eurocode 1 - Actions on structures - Part 1-7: General actions -
Accidental actions, Stockholm: SIS Förlag AB.
Craig Jr., R. R. & Kurdila, A. J., 2006. Fundamentals of Structural Dynamics. 2nd ed.
Hoboken, New Jersey: John Wiley & Sons, Inc.
Dynamore GmbH, 2014. Frontal Barrier Models. [Online]
Available at: http://www.dynamore.de/en/products/models/front-barrier
[Accessed February 2014].
EURO NCAP, 2007. Media player Fiat 500 pictures. [Online]
Available at: http://www.euroncap.com/Player.aspx?nk=1bc0cec3-7e65-4838-b48c-
313eef8a5361&t=2&sel=402bb7a8-480f-48cb-b92a-50792cfaf662
[Accessed February 2014].
EURO NCAP, 2014. The tests explained - Frontal impact. [Online]
Available at: http://www.euroncap.com/tests/frontimpact.aspx
[Accessed 21 February 2014].
Fortifikationsförvaltningen, 1973. Provisoriska anvisningar för dimensionering av
armerade betongkonstruktioner som skydd mot verkan av konventionella vapen inom
närmissområde. Bk 25:2 ed. Stockholm: Fortifikationsförvaltningen -
Befästningsavdelningen.
Huibers, J. & de Beer, E., 2001. Current front stiffness of European vehicles with
regard to compatability, The Netherlands: TNO Automotive Crash Safety Centre.
Johansson, M., 2014a. Beräkningsmetodik Stötlast, Gothenburg: Reinertsen Sverige
AB.
Johansson, M., 2014b. Personal communication and working notes [Interview]
(March 2014b).
Johansson, M. & Laine, L., 2012. Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Del 3: Kapacitet hos byggnader, s.l.: MSB.
Lundh, H., 2000. Grundläggande Hållfasthetslära. Stockholm: s.n.
Struble, D. E., 2014. Automotive Accident Reconstruction: Practices and Principles.
Boca Raton: Taylor & Francis Group.
Takizawa, S., Higuchi, E. & Iwabe, T., 2005. Study of load cell MDB crash tests for
evaluation of frontal impact compatibility, s.l.: Honda R&D Co. Ltd. , PSG Co. Ltd..

-- 139 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
126
Tolman, S. S., 2008. Analysis of Load Cell Barrier Data for Accident Reconstruction
Applications, Salt Lake City: Department of Mechanical Engineering, The Univeristy
of Utah.
Volvo Cars, 2013. The all-new Volvo V40 makes it Malaysian debut at Mid Valley.
[Online]
Available at:
http://www.volvocars.com/my/PublishingImages/news_events/2013/20130820_innov
ation3.jpg
[Accessed February 2014].
Wikipedia, 2014. Crumple zone. [Online]
Available at: http://en.wikipedia.org/wiki/Crumple_zone
[Accessed 19 February 2014].

-- 140 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 A-1
Appendix A Central difference method
The central difference method is summarized as a step by step algorithm in this
appendix, see Table A.1, based on Craig Jr. and Kurdila (2006).
Table A.1 Algorithm for the central difference method, a tool for solving the
equation of motion.
Step 0 (0.1) Input the mass, damping and stiffness matrices M, C, K
(0.2) Calculate the LU factorization of M
(0.3) Input the initial conditions u0 and v0
(0.4) Set the simulation parameters including the time-step Δt
(0.5) Calculate the initial acceleration from the equations of motion
 		0	0
1
0 )	0	( u	v	F	u 				  K	C	M	
(0.6) Calculate the LU-factorization of ‘
t	t 	

 22
C	M
(0.7) Calculate the starting displacement value from the equation
0
2
0	0 2 u
t
u	t	u	u t 	 

						
Step 1 Loop for each time-step Δt
Step 2 Solve the displacements for the next time-step
 	 	




 





	


	







						 	
	
	 t	t	t	t	t t	t	t
t	t	t u
C	M
u
M
K	F	C	M	u 2
2
)	(	2 2	2
1	1	2
Step 3 Evaluate the set of velocities and accelerations as needed
t
u	u
u t	t	t	t
t 	

 			
2

2
2
t
u	u	u
u t	t	t	t	t
t 
		
 			

Step 4 set t=t+Δt and continue to the next time-step

-- 141 of 227 --



-- 142 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 B-1
Appendix B Results 2DOF system without barrier
B.1 Elastic response
In this section results for Collision 1, Collision 2 and Collision 3 are presented,
according to the analysis discussed in section 3.1.1.
Table B.1 Input parameters for the elastic classic collision analyses.
Case m1
[kg]
m2
[kg]
k1
[kN/m]
v0
[m/s]
Collision 1 1 000 10 000 100 20
Collision 2 100 000 10 000 100 20
Collision 3 100 000 10 000 1 000 20
a) b)
c) d)
Figure B.1 Results from an elastic classic collision, Collision 1, where
m1 = 1 000 kg, m2 = 10 000 kg, k1 = 100 kN/m and v0 = 20 m/s.
-12
-10
-8
-6
-4
-2
0
2
4
0.0 0.5 1.0
Displacement
 u [m]
Time t [s]
u1
u2
-20
-15
-10
-5
0
5
10
15
20
25
0.0 0.5 1.0
Velocity
 v [m/s]
Time t [s]
v1
v2
-20
-10
0
10
20
30
40
0.0 0.5 1.0
Impulse
 I [kNs]
Time t [s]
Im1
Im2
0
50
100
150
200
250
0.0 0.5 1.0
Work
 W [kNm]
Time t [s]
Wi1
We2

-- 143 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
B-2
a) b)
c) d)
Figure B.2 Results from an elastic classic collision, Collision 2, where
m1 = 100 000 kg, m2 = 10 000 kg, k1 = 100 kN/m and v0 = 20 m/s.
0
5
10
15
20
25
0.0 0.5 1.0
Displacement
 u [m]
Time t [s]
u1
u2
0
5
10
15
20
25
30
35
40
0.0 0.5 1.0
Velocity
 v [m/s]
Time t [s]
v1
v2
0.0
0.5
1.0
1.5
2.0
2.5
0.0 0.5 1.0
Impulse
 I [MNs]
Time t [s]
Im1
Im2
0
1
2
3
4
5
6
7
0.0 0.5 1.0
Work
 W [MNm]
Time t [s]
Wi1
We2

-- 144 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 B-3
a) b)
c) d)
Figure B.3 Results from an elastic classic collision, Collision 3, where
m1 = 100 000 kg, m2 = 10 000 kg, k1 = 1 000 kN/m and v0 = 20 m/s.
0
5
10
15
20
25
30
35
0.0 0.5 1.0
Displacement
 u [m]
Time t [s]
u1
u2
0
5
10
15
20
25
30
35
40
0.0 0.5 1.0
Velocity
 v [m/s]
Time t [s]
v1
v2
0.0
0.5
1.0
1.5
2.0
2.5
0.0 0.5 1.0
Impulse
 I [MNs]
Time t [s]
Im1
Im2
0
1
2
3
4
5
6
7
0.0 0.5 1.0
Work
 W [MNm]
Time t [s]
Wi1
We2

-- 145 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
B-4
B.2 Plastic response
In this section results for Collision 4, Collision 5 and Collision 6 are presented,
according to the analysis discussed in section 3.1.2.
Table B.2 Input parameters for the plastic classic collision analyses.
Case m1
[kg]
m2
[kg]
k1
[MN/m]
R1
[kN]
v0
[m/s] e
Collision 4 1 000 10 000 100 200 20 0.033
Collision 5 100 000 10 000 100 200 20 0.011
Collision 6 100 000 10 000 100 400 20 0.021
a) b)
c) d)
Figure B.4 Results from a plastic classic collision, Collision 4, where
m1 = 1 000 kg, m2 = 10 000 kg, k1 = 100 MN/m, R1 = 200 kN and
v0 = 20 m/s.
0.0
0.5
1.0
1.5
2.0
2.5
0.0 0.5 1.0
Displacement
 u [m]
Time t [s]
u1
u2
0
5
10
15
20
25
0.0 0.5 1.0
Velocity
 v [m/s]
Time t [s]
v1
v2
0
5
10
15
20
25
0.0 0.5 1.0
Impulse
 I [kNs]
Time t [s]
Im1
Im2
0
50
100
150
200
250
0.0 0.5 1.0
Work
 W [kNm]
Time t [s]
Wi1
We2

-- 146 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 B-5
a) b)
c) d)
Figure B.5 Results from a plastic classic collision, Collision 5, where
m1 = 100 000 kg, m2 = 10 000 kg, k1 = 100 MN/m, R1 = 200 kN and
v0 = 20 m/s.
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
20
0.0 0.5 1.0
Displacement
 u [m]
Time t [s]
u1
u2
0
5
10
15
20
25
0.0 0.5 1.0
Velocity
 v [m/s]
Time t [s]
v1
v2
0.0
0.5
1.0
1.5
2.0
2.5
0.0 0.5 1.0
Impulse
 I [MNs]
Time t [s]
Im1
Im2
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
0.0 0.5 1.0
Work
 W [MNm]
Time t [s]
Wi1
We2

-- 147 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
B-6
a) b)
c) d)
Figure B.6 Results from a plastic classic collision, Collision 6, where
m1 = 100 000 kg, m2 = 10 000 kg, k1 = 100 MN/m, R1 = 400 kN and
v0 = 20 m/s.
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
20
0.0 0.5 1.0
Displacement
 u [m]
Time t [s]
u1
u2
0
5
10
15
20
25
0.0 0.5 1.0
Velocity
 v [m/s]
Time t [s]
v1
v2
0.0
0.5
1.0
1.5
2.0
2.5
0.0 0.5 1.0
Impulse
 I [MNs]
Time t [s]
Im1
Im2
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
0.0 0.5 1.0
Work
 W [MNm]
Time t [s]
Wi1
We2

-- 148 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 C-1
Appendix C Results 2DOF system with barrier
C.1 Load factor βel
In Johansson (2014a) a table and diagram showing the relation between the load
factor βel and the frequency ratio f1 / f2 is presented for different values of the mass
ratio m1 / m2, this is shown in Tables C.1 and C.2 and Figure C.1.
Table C.1 Values for load factor βel
βel = R2 / F2,el [-]
f1 / f2 Hard m1 / m2 [-]
[-] impact 0.10 0.20 0.50 1.0 1.5 2.0 3.0 5.0 10 50 100
0.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000
0.005 1.006 1.005 1.005 1.005 1.005 1.005 1.005 1.005 1.005 1.005 1.004 1.004
0.050 1.050 1.050 1.049 1.049 1.048 1.047 1.046 1.044 1.041 1.032 0.986 0.993
0.100 1.100 1.099 1.099 1.098 1.095 1.093 1.091 1.086 1.076 1.048 0.874 0.925
0.125 1.125 1.124 1.122 1.118 1.110 1.103 1.095 1.080 1.050 1.005 0.802 0.651
0.150 1.174 1.172 1.171 1.166 1.158 1.150 1.141 1.125 1.091 1.006 0.874 0.578
0.175 1.158 1.157 1.156 1.153 1.148 1.143 1.137 1.123 1.092 1.002 0.672 0.517
0.200 1.083 1.084 1.085 1.087 1.090 1.091 1.091 1.086 1.066 0.981 0.615 0.461
0.225 1.180 1.172 1.165 1.143 1.108 1.074 1.042 1.027 1.024 0.949 0.563 0.420
0.250 1.268 1.258 1.249 1.221 1.176 1.134 1.094 1.021 0.976 0.915 0.515 0.382
0.275 1.348 1.335 1.323 1.288 1.233 1.182 1.134 1.047 0.927 0.879 0.479 0.352
0.300 1.418 1.403 1.389 1.347 1.281 1.220 1.164 1.063 0.899 0.843 0.447 0.324
0.350 1.536 1.515 1.495 1.437 1.349 1.269 1.196 1.069 0.873 0.776 0.389 0.281
0.400 1.625 1.598 1.572 1.498 1.387 1.288 1.200 1.051 0.830 0.713 0.347 0.248
0.450 1.689 1.656 1.624 1.534 1.400 1.284 1.183 1.016 0.777 0.655 0.310 0.221
0.500 1.732 1.693 1.655 1.549 1.395 1.264 1.152 0.971 0.722 0.602 0.281 0.200
0.550 1.757 1.712 1.668 1.548 1.375 1.232 1.111 0.920 0.667 0.552 0.256 0.182
0.600 1.768 1.717 1.668 1.534 1.345 1.192 1.064 0.867 0.627 0.506 0.235 0.167
0.650 1.766 1.710 1.656 1.510 1.308 1.146 1.014 0.814 0.605 0.465 0.217 0.154
0.700 1.755 1.693 1.635 1.478 1.266 1.098 0.964 0.763 0.583 0.429 0.202 0.143
0.750 1.736 1.670 1.608 1.442 1.220 1.049 0.913 0.714 0.560 0.405 0.188 0.133
0.800 1.710 1.640 1.575 1.402 1.173 0.999 0.863 0.667 0.537 0.386 0.177 0.125
0.850 1.680 1.607 1.538 1.359 1.126 0.951 0.816 0.624 0.513 0.367 0.166 0.118
0.900 1.646 1.570 1.499 1.315 1.078 0.903 0.770 0.583 0.489 0.349 0.157 0.111
0.950 1.609 1.531 1.458 1.270 1.032 0.858 0.727 0.548 0.466 0.332 0.149 0.105
1.000 1.571 1.490 1.416 1.225 0.986 0.815 0.687 0.518 0.445 0.316 0.141 0.100
1.125 1.471 1.387 1.310 1.117 0.883 0.721 0.606 0.456 0.397 0.281 0.126 0.089
1.250 1.373 1.288 1.211 1.020 0.797 0.648 0.543 0.408 0.358 0.253 0.113 0.080
1.375 1.283 1.198 1.122 0.936 0.725 0.588 0.492 0.377 0.325 0.230 0.103 0.073
1.500 1.200 1.116 1.042 0.864 0.666 0.538 0.450 0.350 0.298 0.210 0.094 0.067

-- 149 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
C-2
Table C.2 Values for load factor βel for hard impact.
f1 / f2 βel f1 / f2 βel f1 / f2 βel
[-] [-] [-] [-] [-] [-]
1.625 1.125 4.5 0.439 13 0.154
1.75 1.058 4.75 0.417 14 0.143
1.875 0.997 5 0.396 15 0.133
2 0.943 5.5 0.361 16 0.125
2.125 0.893 6 0.331 17 0.118
2.25 0.849 6.5 0.306 18 0.111
2.375 0.808 7 0.284 19 0.105
2.5 0.770 7.5 0.266 20 0.100
2.75 0.705 8 0.249 21 0.095
3 0.650 8.5 0.235 22 0.091
3.25 0.602 9 0.222 23 0.087
3.5 0.560 9.5 0.210 24 0.083
3.75 0.520 10 0.200 25 0.080
4 0.493 11 0.181
4.25 0.465 12 0.166
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
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0 1.1 1.2 1.3 1.4 1.5
Load factor
 βel [-]
Frequency ratio f1 / f2 [-]
Hard impact
0.10
0.20
0.50
1.0
1.5
2.0
3.0
5.0
10
50
100
Figure C.1 Relationship between load factor βel and frequency ratio f1 / f2 for
different relations of the mass ratio m1 / m2.

-- 150 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 C-3
C.2 Elastic response
The load factor diagram together with the coordinates for the different impact tests are
presented in Figure C.2.
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
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0 1.1 1.2 1.3 1.4 1.5
Load factor
 βel [-]
Frequency ratio f1 / f2 [-]
Hard impact
0.10
0.20
0.50
1.0
1.5
2.0
3.0
5.0
10
50
100
Figure C.2 Relationship between load factor βel and frequency ratio f1 / f2 for
different relations of the mass ratio m1 / m2.
All results from the analysis discussed in section 3.2.1 are presented in this section.
Table C.3 Table showing the coordinates in Figure C.1 of tested impacts
Impact test number Mass ratio Frequency ratio Load factor βel
1 0.1 0.6 1.72
2 0.5 0.5 1.55
3 1.5 0.4 1.29
4 0.2 0.2 1.08
5 2 0.2 1.09
6 0.2 0.15 1.17
7 2 0.5 0.97
8 3 1 0.52
9 1.5 1 0.81
10 0.5 1 1.22

-- 151 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
C-4
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.3 Impact test number 1.
-1.0
-0.5
0.0
0.5
1.0
1.5
0.0 0.2 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
40
50
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-40
-20
0
20
40
60
80
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
50
100
150
200
250
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
5
10
15
20
25
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
50
100
150
200
250
0.0 0.5 1.0 1.5
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-0.8
-0.6
-0.4
-0.2
0.0
0.2
0.4
0.6
0.8
0.0 0.1 0.2 0.3 0.4
Force [MN]
Time t [s]
R1
R2

-- 152 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 C-5
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.4 Impact test number 2.
-1.0
-0.5
0.0
0.5
1.0
1.5
0.0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-150
-100
-50
0
50
100
150
200
250
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-100
-50
0
50
100
150
200
250
300
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
200
400
600
800
1 000
1 200
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
50
100
150
200
250
300
350
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
200
400
600
800
1 000
1 200
0.0 0.5 1.0 1.5
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-2.0
-1.0
0.0
1.0
2.0
3.0
0.0 0.1 0.2 0.3 0.4
Force [MN]
Time t [s]
R1
R2

-- 153 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
C-6
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.5 Impact test number 3.
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-400
-200
0
200
400
600
800
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-200
0
200
400
600
800
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
500
1 000
1 500
2 000
2 500
3 000
3 500
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
200
400
600
800
1 000
1 200
1 400
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
500
1 000
1 500
2 000
2 500
3 000
3 500
0.0 1.0 2.0
Work,
 W, [kJ]
Deflection, u, [m]
W_i
E_k
-1.0
0.0
1.0
2.0
3.0
4.0
5.0
6.0
0.0 0.1 0.2 0.3 0.4
Force [MN]
Time t [s]
R1
R2

-- 154 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 C-7
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.6 Impact test number 4.
-4
-2
0
2
4
0.0 0.2 0.4 0.6
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-60
-40
-20
0
20
40
60
80
100
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-10
0
10
20
30
40
50
60
70
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
100
200
300
400
500
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
1
2
3
4
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
100
200
300
400
500
0.0 2.0 4.0
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-0.1
0.0
0.1
0.1
0.2
0.2
0.3
0.3
0.0 0.2 0.4 0.6
Force [MN]
Time [s]
R1
R2

-- 155 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
C-8
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.7 Impact test number 5.
-4
-2
0
2
4
0.0 0.2 0.4 0.6
Displacement
 u [m]
Time t [s]
Body 1
Body 2-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-600
-400
-200
0
200
400
600
800
1 000
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-200
0
200
400
600
800
1 000
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
1 000
2 000
3 000
4 000
5 000
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
100
200
300
400
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
1 000
2 000
3 000
4 000
5 000
0.0 2.0 4.0
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-1.0
0.0
1.0
2.0
3.0
0.0 0.2 0.4 0.6
Force [MN]
Time t [s]
R1
R2

-- 156 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 C-9
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.8 Impact test number 6.
-4
-2
0
2
4
6
0.0 0.2 0.4 0.6 0.8
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6 0.8
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-60
-40
-20
0
20
40
60
80
100
0.0 0.2 0.4 0.6 0.8
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-20
0
20
40
60
80
100
0.0 0.2 0.4 0.6 0.8
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
100
200
300
400
500
0.0 0.2 0.4 0.6 0.8
Work
 W [kJ]
Time t [s]
W_i
E_k
0.0
0.5
1.0
1.5
2.0
2.5
3.0
0.0 0.2 0.4 0.6 0.8
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
100
200
300
400
500
0.0 2.0 4.0 6.0
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-0.1
0.0
0.1
0.1
0.2
0.2
0.3
0.0 0.2 0.4 0.6 0.8
Force [MN]
Time t [s]
R1
R2

-- 157 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
C-10
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.9 Impact test number 7.
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-1 000
-500
0
500
1 000
1 500
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-500
0
500
1 000
1 500
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
1 000
2 000
3 000
4 000
5 000
6 000
7 000
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
1 000
2 000
3 000
4 000
5 000
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
1 000
2 000
3 000
4 000
5 000
6 000
7 000
0.0 1.0 2.0
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-4.0
-2.0
0.0
2.0
4.0
6.0
8.0
10.0
12.0
0.0 0.1 0.2 0.3 0.4
Force [MN]
Time t [s]
R1
R2

-- 158 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 C-11
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.10 Impact test number 8.
-1.0
-0.5
0.0
0.5
1.0
1.5
0.0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-1 000
-500
0
500
1 000
1 500
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-500
0
500
1 000
1 500
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
1 000
2 000
3 000
4 000
5 000
6 000
7 000
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
1 000
2 000
3 000
4 000
5 000
6 000
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
1 000
2 000
3 000
4 000
5 000
6 000
7 000
0.0 0.5 1.0 1.5
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-5.0
0.0
5.0
10.0
15.0
0.0 0.1 0.2 0.3 0.4
Force [MN]
Time t [s]
R1
R2

-- 159 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
C-12
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.11 Impact test number 9.
-1.0
-0.5
0.0
0.5
1.0
0.0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-400
-200
0
200
400
600
800
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-200
0
200
400
600
800
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
500
1 000
1 500
2 000
2 500
3 000
3 500
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
500
1 000
1 500
2 000
2 500
3 000
3 500
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
500
1 000
1 500
2 000
2 500
3 000
3 500
0.0 0.5 1.0
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-2.0
0.0
2.0
4.0
6.0
8.0
0.0 0.1 0.2 0.3 0.4
Force [MN]
Time t [s]
R1
R2

-- 160 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 C-13
a) Displacement b) Velocity
c) Impulse Body 1 d) Impulse Body 2
e) Kinetic energy - internal work body 1 f) Kinetic energy - work body 2
g) Kinetic energy - internal work body 1 h) Load pulse
Figure C.12 Impact test number 10.
-1.0
-0.5
0.0
0.5
1.0
0.0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6
Velocity
 v [m/s]
Time t [s]
Body 1
Body 2
-100
-50
0
50
100
150
200
0.0 0.5 1.0
Impulse
 I [kNs]
Time t [s]
I_m
I_r
-200
-100
0
100
200
300
0.0 0.2 0.4 0.6
Impulse
 I [kNs]
Time t [s]
I_m
I_r
0
200
400
600
800
1 000
1 200
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
0
200
400
600
800
0.0 0.2 0.4 0.6
Work
 W [kJ]
Time t [s]
W_i
E_k
W_e
0
200
400
600
800
1 000
1 200
0.0 0.5 1.0
Work
 W [kJ]
Deflection u [m]
W_i
E_k
-4.0
-2.0
0.0
2.0
4.0
0.0 0.1 0.2 0.3 0.4
Force [MN]
Time t [s]
R1
R2

-- 161 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
C-14
C.3 Elasto-plastic response
The elasto-plastic test uses the indata from Table C.4 as a base, then changes are made
to one parameter at a time in order to find the impact of each parameter.
These results are not discussed in the main report but are included here since it might
be interesting to see how a elasto-plastic system behaves.
Table C.4 Base parameters for the analysis in this section.
m1 2 000 [kg]
m2 10 000 [kg]
v0 20 [m/s]
k1 1 [MN/m]
k2 100 [MN/m]
R1 400 [N]
R2 200 [N]

-- 162 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 C-15
a) m1 = 1 000 kg d) v0 = 15 m/s
b) m1 = 2 000 kg e) v0 = 20 m/s
c) m1 = 5 000 kg f) v0 = 25 m/s
Figure C.13 a, b and c shows the load pulses for different mass of the impacting
object, d, e and f shows the load pulses for different initial velocities.
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
0 0.05 0.1 0.15 0.2
Force
 R [kN]
Time t [s]
R1
R2
-200
-100
0
100
200
300
400
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
Force
 R [kN]
Time t [s]
R1
R2
-200
-100
0
100
200
300
400
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
Force
 R [kN]
Time t [s]
R1
R2
-200
-100
0
100
200
300
400
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
Force
 R [kN]
Time t [s]
R1
R2
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
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
Force
 R [kN]
Time t [s]
R1
R2
-200
-100
0
100
200
300
400
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
Force
 R [kN]
Time t [s]
R1
R2

-- 163 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
C-16
a) k1 = 1x105 N/m d) m1 = 1 000 kg
b) k1 = 1x106 N/m e) m1 = 2 000 kg
c) k1 = 1x107 N/m f) m1 = 5 000 kg
Figure C.14 a, b and c shows how the load pulses changes for different stiffness of
the impacting object, d, e, and f shows the displacement for different
values to mass 1.
-200
-100
0
100
200
300
400
0 0.1 0.2 0.3 0.4 0.5
Force
 R [kN]
Time t [s]
R1
R2
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0 0.05 0.1 0.15 0.2 0.25
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-200
-100
0
100
200
300
400
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
Force
 R [kN]
Time t [s]
R1
R2
0
0.2
0.4
0.6
0.8
1
1.2
0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
-200
-100
0
100
200
300
400
0 0.05 0.1 0.15 0.2 0.25 0.3
Force
 R [kN]
Time t [s]
R1
R2
0
0.5
1
1.5
2
2.5
3
0 0.1 0.2 0.3 0.4 0.5
Displacement
 u [m]
Time t [s]
Body 1
Body 2

-- 164 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 C-17
a) v0 = 15 m/s d) k1 = 1x105 N/m
b) v0 = 20 m/s e) k1 = 1x106 N/m
c) v0 = 25 m/s f) k1 = 1x107 N/m
Figure C.15 a, b and c shows the displacement for different initial velocities of body
1, d, e and f shows the displacement for different values of the stiffness
k1.
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0 0.05 0.1 0.15 0.2 0.25 0.3
Displacement
 u [m]
Time t [s]
Body 1
Body 2
0
0.5
1
1.5
2
2.5
3
0 0.1 0.2 0.3 0.4 0.5
Displacement
 u [m]
Time t [s]
Body 1
Body 2
0
0.2
0.4
0.6
0.8
1
1.2
0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
0
0.2
0.4
0.6
0.8
1
1.2
0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2
0
0.2
0.4
0.6
0.8
1
1.2
1.4
1.6
1.8
0 0.1 0.2 0.3 0.4 0.5
Displacement
 u [m]
Time t [s]
Body 1
Body 2
0
0.2
0.4
0.6
0.8
1
1.2
0 0.1 0.2 0.3 0.4
Displacement
 u [m]
Time t [s]
Body 1
Body 2

-- 165 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
C-18
a) m1 = 1 000 kg d) v0 = 25 m/s
b) m1 = 2 000 kg e) v0 = 25 m/s
c) m1 = 5 000 kg f) v0 = 25 m/s
Figure C.16 a, b and c shows how the velocity changes for different values of mass
1, d, e and f show how the velocity changes for different values of the
velocity v0.
-15
-10
-5
0
5
10
15
20
0 0.05 0.1 0.15 0.2
Velocityt
 v [m/s]
Time t [s]
Body 1
Body 2
-10
-5
0
5
10
15
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
Velocityt
 v [m/s]
Time t [s]
Body 1
Body 2
-10
-5
0
5
10
15
20
0 0.05 0.1 0.15 0.2 0.25 0.3
Velocityt
 v [m/s]
Time t [s]
Body 1
Body 2
-10
-5
0
5
10
15
20
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
Velocityt
 v [m/s]
Time t [s]
Body 1
Body 2
-5
0
5
10
15
20
0 0.1 0.2 0.3 0.4 0.5
Velocityt
 v [m/s]
Time t [s]
Body 1
Body 2
-10
-5
0
5
10
15
20
25
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
Velocityt
 v [m/s]
Time t [s]
Body 1
Body 2

-- 166 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 D-1
Appendix D 2DOF Effect of impact position on a beam
In this appendix all the results from the analysis discussed in section 5.1 are
presented.
D.1 Original beam
Figure D.1 Results from the simulated collision, describing the differences in
position of impact for both the incoming object and the beam.
alpha=0.5 alpha=0.4 alpha=0.3 alpha=0.2 alpha=0.1
0
50
100
150
200
250
300
350
0.00 0.10 0.20 0.30
Reaction force
 R1 [kN]
Time t [s]
-200
-100
0
100
200
300
400
500
0.00 0.10 0.20 0.30
Reaction force
 R2 [kN]
Time t [s]
-2.5
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.03
0.04
0.05
0.06
0.07
0.00 0.10 0.20 0.30
Displacement
 u2 [m]
Time t [s]
-25
-20
-15
-10
-5
0
5
10
15
20
25
0.00 0.10 0.20 0.30
Velocity
 v1 [m/s]
Time t [s]
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.00 0.10 0.20 0.30
Velocity
 v2 [m/s]
Time t [s]

-- 167 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
D-2
D.2 Stiffer beam
Figure D.2 Results from the simulated collision with a stiffer beam, describing the
differences in position of impact for both the incoming object and the
beam.
alpha=0.5 alpha=0.4 alpha=0.3 alpha=0.2 alpha=0.1
0
50
100
150
200
250
300
350
0.00 0.10 0.20 0.30
Reaction force
 R1 [kN]
Time t [s]
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
0.00 0.10 0.20 0.30
Reaction force
 R2 [kN]
Time t [s]
-3.0
-2.5
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
-0.004
-0.002
0.000
0.002
0.004
0.006
0.008
0.010
0.012
0.014
0.016
0.00 0.10 0.20 0.30
Displacement
 u2 [m]
Time t [s]

-- 168 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 D-3
D.3 Softer beam
Figure D.3 Results from the simulated collision with a softer beam, describing the
differences in position of impact for both the incoming object and the
beam.
alpha=0.5 alpha=0.4 alpha=0.3 alpha=0.2 alpha=0.1
0
50
100
150
200
250
300
350
0.00 0.10 0.20 0.30
Reaction force
 R1 [kN]
Time t [s]
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
600
0.00 0.10 0.20 0.30
Reaction force
 R2 [kN]
Time t [s]
-2.5
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
-0.2
-0.2
-0.1
-0.1
0.0
0.1
0.1
0.2
0.2
0.3
0.3
0.00 0.10 0.20 0.30
Displacement
 u2 [m]
Time t [s]

-- 169 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
D-4
D.4 Stiffer colliding object
Figure D.4 Results from the simulated collision with a stiffer object, describing the
differences in position of impact for both the incoming object and the
beam.
alpha=0.5 alpha=0.4 alpha=0.3 alpha=0.2 alpha=0.1
0
100
200
300
400
500
600
700
0.00 0.05 0.10 0.15 0.20
Reaction force
 R1 [kN]
Time t [s]
-800
-600
-400
-200
0
200
400
600
800
1 000
1 200
0.00 0.05 0.10 0.15 0.20
Reaction force
 R2 [kN]
Time t [s]
-2.5
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
0.00 0.05 0.10 0.15 0.20
Displacement
 u1 [m]
Time t [s]
-0.15
-0.10
-0.05
0.00
0.05
0.10
0.15
0.20
0.00 0.05 0.10 0.15 0.20
Displacement
 u2 [m]
Time t [s]

-- 170 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 D-5
D.5 Softer colliding object
Figure D.5 Results from the simulated collision with a softer object, describing the
differences in position of impact for both the incoming object and the
beam.
alpha=0.5 alpha=0.4 alpha=0.3 alpha=0.2 alpha=0.1
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
0.00 0.10 0.20 0.30 0.40 0.50
Reaction force
 R1 [kN]
Time t [s]
-50
0
50
100
150
200
0.00 0.10 0.20 0.30 0.40 0.50
Reaction force
 R2 [kN]
Time t [s]
-3
-2
-1
0
1
2
3
0.00 0.10 0.20 0.30 0.40 0.50
Displacement
 u1 [m]
Time t [s]
-0.01
0.00
0.01
0.02
0.03
0.00 0.10 0.20 0.30 0.40 0.50
Displacement
 u2 [m]
Time t [s]

-- 171 of 227 --



-- 172 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-1
Appendix E Results from finite element analysis
In this appendix all the results from the analysis discussed in section 5.2 are
presented. In Table E.1 the properties used in the different analyses can be seen.
Table E.1 The different set of properties used in each analysis.
Property set
number
Spring stiffness k1
[kN/m]
Equivalent Young’s
modulus EII [GPa]
1 300 8.134
2 75 8.134
3 1 200 8.134
4 300 2.034
5 300 32.537

-- 173 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-2
E.1 Original beam – Property set 1
Figure E.1 Development of moment up to maximum moment over time for five
different impact positions.
-100
0
100
200
300
400
500
600
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.077
-100
0
100
200
300
400
500
600
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.077
-100
0
100
200
300
400
500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.076
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.0755
-50
0
50
100
150
200
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.080
t=0.089

-- 174 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-3
Figure E.2 Development up to maximum shear force over time for five different
impact positions.
-300
-200
-100
0
100
200
300
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.077
-300
-200
-100
0
100
200
300
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.0725
-200
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.074
-200
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.076
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.0895

-- 175 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-4
Figure E.3 Development up to maximum deflection over time for five different
impact positions.
0
10
20
30
40
50
60
70
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Displ.
 u(x)
 [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.0775
-10
0
10
20
30
40
50
60
70
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Displ.
 u(x)
 [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.0775
-10
0
10
20
30
40
50
60
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Displ.
 u(x)
 [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.0775
-10
0
10
20
30
40
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Displ.
 u(x)
 [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.078
-5
0
5
10
15
20
25
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Displ.
 u(x)
 [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.0785

-- 176 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-5
Figure E.4 Comparison of maximum responses for five different impact positions.
alpha=0.5 alpha=0.4 alpha=0.3 alpha=0.2 alpha=0.1
0
100
200
300
400
500
600
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
-300
-200
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear Force
 V [kN]
x [m]
0
10
20
30
40
50
60
70
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
-200
0
200
400
600
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Moment
 M

[kNm]
Time t [s]
-200
-100
0
100
200
300
400
0.00 0.05 0.10 0.15 0.20 0.25 0.30
Force
 Ra [kN]
Time t [s]

-- 177 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-6
E.2 Stiffer beam – Property set 5
Figure E.5 Development of moment up to maximum moment over time for three
different impact positions.
-100
0
100
200
300
400
500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.080
t=0.0860
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.080
t=0.0865
-50
0
50
100
150
200
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.080
t=0.0855

-- 178 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-7
Figure E.6 Development up to maximum shear force over time for three different
impact positions.
-250
-200
-150
-100
-50
0
50
100
150
200
250
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.080
t=0.0880
-150
-100
-50
0
50
100
150
200
250
300
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.080
t=0.086
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.080
t=0.0855

-- 179 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-8
Figure E.7 Development up to maximum deflection over time for three different
impact positions.
0
2
4
6
8
10
12
14
16
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.080
t=0.0875
0
2
4
6
8
10
12
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.080
t=0.0875
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
4.5
5.0
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.060
t=0.070
t=0.080
t=0.0875

-- 180 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-9
Figure E.8 Comparison of maximum responses for three different impact positions.
-500	500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0	
M
o
m
e	
n
t
x [m]
alpha=0.5 alpha=0.3 alpha=0.1
-100
0
100
200
300
400
500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment M [kNm]
x [m]
-300
-200
-100
0
100
200
300
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Shear force
 V [kN]
x [m]
0
5
10
15
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [m]
x [m]
0
100
200
300
400
500
0.00 0.02 0.04 0.06 0.08 0.10 0.12 0.14 0.16 0.18 0.20
Moment
 M(
α) [kNm]
time [s]
0
100
200
300
400
0.00 0.02 0.04 0.06 0.08 0.10 0.12 0.14 0.16 0.18 0.20
Force
 Ra [kN]]
time [s]

-- 181 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-10
E.3 Softer beam – Property set 4
Figure E.9 Development of moment up to maximum moment over time for three
different impact positions.
-100
0
100
200
300
400
500
600
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
t=0.010
t=0.020
t=0.040
t=0.060
t=0.080
t=0.100
t=0.125
-100
0
100
200
300
400
500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
t=0.010
t=0.020
t=0.040
t=0.060
t=0.080
t=0.100
t=0.127
-50
0
50
100
150
200
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.100
t=0.12
t=0.131

-- 182 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-11
Figure E.10 Development up to maximum shear force over time for three different
impact positions.
-400
-300
-200
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V [kN]
x [m]
t=0.010
t=0.020
t=0.040
t=0.060
t=0.080
t=0.100
t=0.120
t=0.123
-300
-200
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V [kN]
x [m]
t=0.010
t=0.020
t=0.040
t=0.060
t=0.080
t=0.100
t=0.120
t=0.130
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V [kN]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.0995

-- 183 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-12
Figure E.11 Development up to maximum deflection over time for three different
impact positions.
-50
0
50
100
150
200
250
300
350
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
t=0.010
t=0.020
t=0.040
t=0.060
t=0.080
t=0.100
t=0.125
-50
0
50
100
150
200
250
300
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
t=0.010
t=0.020
t=0.040
t=0.060
t=0.080
t=0.100
t=0.120
t=0.127
-20
0
20
40
60
80
100
120
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.100
t=0.120
t=0.130

-- 184 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-13
Figure E.12 Comparison of maximum responses for three different impact positions.
-500	500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0	
M
o
m
e	
n
t
x [m]
alpha=0.5 alpha=0.3 alpha=0.1
0
200
400
600
800
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Moment M [kNm]
x [m]
-400
-200
0
200
400
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Force
 F [kN]
x [m]
0
50
100
150
200
250
300
350
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Deflection
 u [mm]
x [m]
-100
0
100
200
300
400
0.00 0.02 0.04 0.06 0.08 0.10 0.12 0.14 0.16 0.18 0.20
Force
 Ra [kN]
time [s]
0
100
200
300
400
500
600
0.00 0.02 0.04 0.06 0.08 0.10 0.12 0.14 0.16 0.18 0.20	
Moment
 M(
α) [kNm]
time [s]

-- 185 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-14
E.4 Stiffer colliding object – Property set 3
Figure E.13 Development of moment up to maximum moment over time for three
different impact positions.
0
200
400
600
800
1 000
1 200
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.0625
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.064
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.0661

-- 186 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-15
Figure E.14 Development up to maximum shear force over time for three different
impact positions.
-750
-500
-250
0
250
500
750
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.0605
-500
-300
-100
100
300
500
700
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.066
-200
-100
0
100
200
300
400
500
600
700
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V [kN]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.0495

-- 187 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-16
Figure E.15 Development up to maximum deflection over time for three different
impact positions.
0
20
40
60
80
100
120
140
160
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.0625
0
20
40
60
80
100
120
140
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.063
-10
0
10
20
30
40
50
60
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u [mm]
x [m]
t=0.010
t=0.020
t=0.030
t=0.040
t=0.050
t=0.0645

-- 188 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-17
Figure E.16 Comparison of maximum responses for three different impact positions.
-500	500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0	
M
o
m
e	
n
t
x [m]
alpha=0.5 alpha=0.3 alpha=0.1
0
200
400
600
800
1 000
1 200
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Moment M [kNm]
x [m]
-750
-500
-250
0
250
500
750
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Force
 F [kN]
x [m]
0
50
100
150
200
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00
Deflection
 u [m]
x [m]
-1 000
-500
0
500
1 000
1 500
0.00 0.02 0.04 0.06 0.08 0.10 0.12 0.14
Moment
 M(
α) [kNm]
time [s]
-500
-250
0
250
500
750
0.00 0.02 0.04 0.06 0.08 0.10 0.12 0.14
Force
 Ra [kN]
time [s]

-- 189 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-18
E.5 Softer colliding object – Property set 2
Figure E.17 Development of moment up to maximum moment over time for three
different impact positions.
-50
0
50
100
150
200
250
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.120
t=0.140
t=0.160
t=0.1765
-50
0
50
100
150
200
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.120
t=0.140
t=0.160
t=0.1725
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M(x)
 [kNm]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.100
t=0.120
t=0.140
t=0.168

-- 190 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-19
Figure E.18 Development up to maximum shear force over time for three different
impact positions.
-150
-100
-50
0
50
100
150
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.100
t=0.120
t=0.140
t=0.1725
-100
-50
0
50
100
150
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.100
t=0.120
t=0.140
t=0.1705
-50
0
50
100
150
200
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear force
 V(x)
 [kN]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.100
t=0.120
t=0.140
t=0.168

-- 191 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
E-20
Figure E.19 Development up to maximum deflection over time for three different
impact positions.
0
5
10
15
20
25
30
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u(x)
 [mm]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.120
t=0.140
t=0.160
t=0.175
-5
0
5
10
15
20
25
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u(x)
 [mm]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.120
t=0.140
t=0.160
t=0.175
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
9
10
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Deflection
 u(x)
 [mm]
x [m]
t=0.010
t=0.040
t=0.060
t=0.080
t=0.120
t=0.140
t=0.160
t=0.175

-- 192 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 E-21
Figure E.20 Comparison of maximum responses for three different impact positions.
-500	500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0	
M
o
m
e	
n
t
x [m]
alpha=0.5 alpha=0.3 alpha=0.1
0
50
100
150
200
250
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
-150
-100
-50
0
50
100
150
200
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Shear Force
 V [kN]
x [m]
0
5
10
15
20
25
30
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Displacement
 u [mm]
x [m]
0
50
100
150
200
250
0.00 0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40
Moment
 M

[kNm]
time t [s]
-50
0
50
100
150
200
0.00 0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40
Force
 Ra [kN]
time t [s]

-- 193 of 227 --



-- 194 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 F-1
Appendix F Comparison of model responses
The comparison of responses from a collision modelled with the 2DOF system in
MATLAB and with FEM software ADINA are presented in this appendix. The study
in this section is based on the concrete beam described in section 4.1.2. The velocity
v0 of the incoming object is set to 20 m/s and the stiffness k1 is set to 300 kN/m. These
stiffnesses corresponds to property set 1, and the stiffnesses are then varied to create
the other property sets, see Table F.1.
Table F.1 Input parameters for the different collision analyses.
α Property
set
k1
[kN/m]
EIb
[MNm2]
kb
[MN/m]
m1
[kg]
m2
[kg]	2
1
m
m	
f1
[Hz]
f2
[Hz]	2
1
f
f
0.5
1 300 18.302 7.028 1 000 1 748.6 0.572 2.757 10.09 0.273
2 75 18.302 7.028 1 000 1 748.6 0.572 1.378 10.09 0.137
3 1 200 18.302 7.028 1 000 1 748.6 0.572 5.513 10.09 0.546
4 300 4.576 1.757 1 000 1 748.6 0.572 2.757 5.045 0.546
5 300 73.208 28.112 1 000 1 748.6 0.572 2.757 20.18 0.137
0.3
1 300 18.302 9.960 1 000 2 310.8 0.433 2.757 10.45 0.264
2 75 18.302 9.960 1 000 2 310.8 0.433 1.378 10.45 0.132
3 1 200 18.302 9.960 1 000 2 310.8 0.433 5.513 10.45 0.528
4 300 4.576 2.490 1 000 2 310.8 0.433 2.757 5.225 0.528
5 300 73.208 39.842 1 000 2 310.8 0.433 2.757 20.90 0.132
0.1
1 300 18.302 54.229 1 000 10 092 0.099 2.757 11.67 0.236
2 75 18.302 54.229 1 000 10 092 0.099 1.378 11.67 0.118
3 1 200 18.302 54.229 1 000 10 092 0.099 5.513 11.67 0.473
4 300 4.576 13.557 1 000 10 092 0.099 2.757 5.833 0.473
5 300 73.208 216.92 1 000 10 092 0.099 2.757 23.33 0.118

-- 195 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
F-2
F.1 Original beam – Property set 1
a) u1, α = 0.5 b) u1, α = 0.4
c) u1, α = 0.3 d) u1, α = 0.2
e) u1, α = 0.1
Figure F.1 Comparison of response in displacement u1 over time between 2DOF
and FEM, for five different positions of loading and with property set 1.
-7
-6
-5
-4
-3
-2
-1
0
1
2
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-7
-6
-5
-4
-3
-2
-1
0
1
2
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-7
-6
-5
-4
-3
-2
-1
0
1
2
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-7
-6
-5
-4
-3
-2
-1
0
1
2
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-7
-6
-5
-4
-3
-2
-1
0
1
2
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM

-- 196 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 F-3
a) u2, α = 0.5 b) u2, α = 0.4
c) u2, α = 0.3 d) u2, α = 0.2
e) u2, α = 0.1
Figure F.2 Comparison of response in displacement u2 over time between 2DOF
and FEM, for five different positions of loading and with property set 1.
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
60
70
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM-30
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
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-30
-20
-10
0
10
20
30
40
50
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM-15
-10
-5
0
5
10
15
20
25
30
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-4
-2
0
2
4
6
8
10
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM

-- 197 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
F-4
a) RA, α = 0.5 b) RA, α = 0.4
c) RA, α = 0.3 d) RA, α = 0.2
e) RA, α = 0.1
Figure F.3 Comparison of response in support reaction force RA over time between
2DOF and FEM, for five different positions of loading and with
property set 1.
-150
-100
-50
0
50
100
150
200
250
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-150
-100
-50
0
50
100
150
200
250
300
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-150
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
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM

-- 198 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 F-5
a) Mα, α = 0.5 b) Mα, α = 0.4
c) Mα, α = 0.3 d) Mα, α = 0.2
e) Mα, α = 0.1
Figure F.4 Comparison of response in moment Mα over time between 2DOF and
FEM, for five different positions of loading and with property set 1.
-300
-200
-100
0
100
200
300
400
500
600
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-300
-200
-100
0
100
200
300
400
500
600
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-300
-200
-100
0
100
200
300
400
500
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-100
-50
0
50
100
150
200
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM

-- 199 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
F-6
a) Moment Envelope
b) Shear Envelope
Figure F.5 Moment and shear envelope for property set 1
-600
-500
-400
-300
-200
-100
0
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
FEM
2DOF
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
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Force
 V [kN]
x [m]
FEM
2DOF

-- 200 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 F-7
F.2 Softer beam – Property set 4
a) u1, α = 0.5 b) u2, α = 0.5
c) u1, α = 0.3 d) u2, α = 0.3
e) u1, α = 0.1 f) u2, α = 0.1
Figure F.6 Comparison of response in displacement u1 and u2 over time between
2DOF and FEM, for three different positions of loading and with
property set 4.
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-300
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-200
-150
-100
-50
0
50
100
150
200
250
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-2.5
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
1.5
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-30
-20
-10
0
10
20
30
40
50
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM

-- 201 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
F-8
a) RA, α = 0.5 b) Mα, α = 0.5
c) RA, α = 0.3 d) Mα, α = 0.3
e) RA, α = 0.1 f) Mα, α = 0.1
Figure F.7 Comparison of response in support reaction force RA and moment Mα
over time between 2DOF and FEM, for three different positions of
loading and with property set 4.
-300
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-600
-400
-200
0
200
400
600
800
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-300
-200
-100
0
100
200
300
400
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-600
-400
-200
0
200
400
600
800
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
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
600
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-200
-150
-100
-50
0
50
100
150
200
250
300
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM

-- 202 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 F-9
a) Moment Envelope
b) Shear Envelope
Figure F.8 Moment and shear envelope for property set 4.
-700
-600
-500
-400
-300
-200
-100
0
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
FEM
2DOF
-600
-400
-200
0
200
400
600
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Force
 V [kN]
x [m]
FEM
2DOF

-- 203 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
F-10
F.3 Stiffer beam – Property set 5
a) u1, α = 0.5 b) u2, α = 0.5
c) u1, α = 0.3 d) u2, α = 0.3
e) u1, α = 0.1 f) u2, α = 0.1
Figure F.9 Comparison of response in displacement u1 and u2 over time between
2DOF and FEM, for three different positions of loading and with
property set 5.
-3
-2
-1
0
1
2
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
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
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-3
-2
-1
0
1
2
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-4
-2
0
2
4
6
8
10
12
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-3
-2
-1
0
1
2
0.00 0.10 0.20 0.30
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-0.5
0.0
0.5
1.0
1.5
2.0
0.00 0.10 0.20 0.30
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM

-- 204 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 F-11
a) RA, α = 0.5 b) Mα, α = 0.5
c) RA, α = 0.3 d) Mα, α = 0.3
e) RA, α = 0.1 f) Mα, α = 0.1
Figure F.10 Comparison of response in support reaction force RA and moment Mα
over time between 2DOF and FEM, for three different positions of
loading and with property set 5.
-50
0
50
100
150
200
250
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-100
0
100
200
300
400
500
600
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-100
-50
0
50
100
150
200
250
300
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-100
0
100
200
300
400
500
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
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
0.00 0.10 0.20 0.30
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-50
0
50
100
150
200
0.00 0.10 0.20 0.30
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM

-- 205 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
F-12
a) Moment Envelope
b) Shear Envelope
Figure F.11 Moment and shear envelope for property set 5.
-600
-500
-400
-300
-200
-100
0
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
FEM
2DOF
-400
-300
-200
-100
0
100
200
300
400
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Force
 V [kN]
x [m]
FEM
2DOF

-- 206 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 F-13
F.4 Softer colliding object – Property set 2
a) u1, α = 0.5 b) u2, α = 0.5
c) u1, α = 0.3 d) u2, α = 0.3
e) u1, α = 0.1 f) u2, α = 0.1
Figure F.12 Comparison of response in displacement u1 and u2 over time between
2DOF and FEM, for three different positions of loading and with
property set 2.
-3
-2
-1
0
1
2
3
0.00 0.10 0.20 0.30 0.40 0.50
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-5
0
5
10
15
20
25
30
0.00 0.10 0.20 0.30 0.40 0.50
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-3
-2
-1
0
1
2
3
0.00 0.10 0.20 0.30 0.40 0.50
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-5
0
5
10
15
20
25
0.00 0.10 0.20 0.30 0.40 0.50
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-3
-2
-1
0
1
2
3
0.00 0.10 0.20 0.30 0.40 0.50
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-1
0
1
2
3
4
0.00 0.10 0.20 0.30 0.40 0.50
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM

-- 207 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
F-14
a) RA, α = 0.5 b) Mα, α = 0.5
c) RA, α = 0.3 d) Mα, α = 0.3
e) RA, α = 0.1 f) Mα, α = 0.1
Figure F.13 Comparison of response in support reaction force RA and moment Mα
over time between 2DOF and FEM, for three different positions of
loading and with property set 2.
-20
0
20
40
60
80
100
120
0.00 0.10 0.20 0.30 0.40 0.50
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-50
0
50
100
150
200
250
300
0.00 0.10 0.20 0.30 0.40 0.50
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
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
0.00 0.10 0.20 0.30 0.40 0.50
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-50
0
50
100
150
200
250
0.00 0.10 0.20 0.30 0.40 0.50
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-50
0
50
100
150
200
0.00 0.10 0.20 0.30 0.40 0.50
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-20
0
20
40
60
80
100
0.00 0.10 0.20 0.30 0.40 0.50
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM

-- 208 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 F-15
a) Moment Envelope
b) Shear Envelope
Figure F.14 Moment and shear envelope for property set 2.
-300
-250
-200
-150
-100
-50
0
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
FEM
2DOF
-200
-150
-100
-50
0
50
100
150
200
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Force
 V [kN]
x [m]
FEM
2DOF

-- 209 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
F-16
F.5 Stiffer colliding object – Property set 3
a) u1, α = 0.5 b) u2, α = 0.5
c) u1, α = 0.3 d) u2, α = 0.3
e) u1, α = 0.1 f) u2, α = 0.1
Figure F.15 Comparison of response in displacement u1 and u2 over time between
2DOF and FEM, for three different positions of loading and with
property set 3.
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
0.00 0.05 0.10 0.15 0.20
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-150
-100
-50
0
50
100
150
200
0.00 0.05 0.10 0.15 0.20
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
0.00 0.05 0.10 0.15 0.20
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-100
-50
0
50
100
150
0.00 0.05 0.10 0.15 0.20
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM
-2.0
-1.5
-1.0
-0.5
0.0
0.5
1.0
0.00 0.05 0.10 0.15 0.20
Displacement
 u1 [m]
Time t [s]
2DOF
FEM
-20
-15
-10
-5
0
5
10
15
20
25
0.00 0.05 0.10 0.15 0.20
Displacement
 u2 [mm]
Time t [s]
2DOF
FEM

-- 210 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 F-17
a) RA, α = 0.5 b) Mα, α = 0.5
c) RA, α = 0.3 d) Mα, α = 0.3
e) RA, α = 0.1 f) Mα, α = 0.1
Figure F.16 Comparison of response in support reaction force RA and moment Mα
over time between 2DOF and FEM, for three different positions of
loading and with property set 3.
-600
-400
-200
0
200
400
600
800
0.00 0.05 0.10 0.15 0.20
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-1 000
-500
0
500
1 000
1 500
0.00 0.05 0.10 0.15 0.20
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-600
-400
-200
0
200
400
600
800
0.00 0.05 0.10 0.15 0.20
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
-1 000
-500
0
500
1 000
1 500
0.00 0.05 0.10 0.15 0.20
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM
-800
-600
-400
-200
0
200
400
600
800
1 000
1 200
0.00 0.05 0.10 0.15 0.20
Reaction force
 RA [kN]
Time t [s]
2DOF
FEM
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
600
0.00 0.05 0.10 0.15 0.20
Moment
 Mα [kNm]
Time t [s]
2DOF
FEM

-- 211 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
F-18
a) Moment Envelope
b) Shear Envelope
Figure F.17 Moment and shear envelope for property set 3.
-1 400
-1 200
-1 000
-800
-600
-400
-200
0
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Moment
 M [kNm]
x [m]
FEM
2DOF
-1 500
-1 000
-500
0
500
1 000
1 500
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
Force
 V [kN]
x [m]
FEM
2DOF

-- 212 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 G-1
Appendix G MathCad calculations
G.1 Beam transformation factors and stiffness
Transformation factors:
 0.5	  1 	 0.5		 3
2 2

48	
Point load:
m.pl
1
3 	 1
	( )2
1
3 	 2
 3
3







	 0.333333		
m.el
3
28 2

23 2
 10 		 2		 	 	
105 2

 2 2	
12 	
 
10 2

 1
12 	 2

 
10
 0.485714		
Stiffness of a beam:
Ec 30GPa	 Es 200GPa	 wb 1m	 hb 0.3m	 s
Es
Ec
6.666667		
srebars 0.10m	  16mm	 A
  2

4
 As
A
srebars
wb		
c 40mm	 d hb c	 
2
 0.252m		 d´ hb d	 0.048m		
x 60.35mm	 (guess) xcc
x
3 0.020117m		
Acc wb x		
AII Acc s 1		 	 As		 s As			
xII
Acc xcc	 s 1		 	 As	 d´		 s As	 d		
AII
60.351289mm			
III
wb x3

12 Acc x xcc		 	2
	 s 1		 	 As	 x d´		( )2
	 s As	 d x		( )2
	 6.100744 108
 mm
4
		
II
wb hb3

12 2.25 109
 mm
4
		
EIb Ec III	 1.830223 107
 N m2
			 l 5m	
kb
3 EIb	
l3 2
 2

7.028057 103
 kN
m
		

-- 213 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
G-2
ADINA indata:
Equivalent Youngs modulus:
EII
III
II
Ec	 8.134325GPa			
stiffer with a factor 4:
E4x EII 4	 32.537299GPa			
kb.4x
3 E4x	 II	
l3 2
 2

2.811223 104
 kN
m
		
E4x II	 7.320892 107
 N m2
		
weaker with a factor 4:
E0.25x
EII
4 2.033581GPa			 kb.0.25x
3 E0.25x	 II	
l3 2
 2

1.757014 103
 kN
m
		
E0.25xII	 4.575558 106
 N m2
		
2DOF vs FEM comparison:
kb 7.028057 103
 kN
m
	
k1 1 300	 kN
m

kuse kb
1
1
 7.028057MN
m
		
m1 1000kg	 mb 3600kg	 m2 m.el mb	 1.748571 103
 kg		
f1
1
2
k1
m1
2.7566441
s
	 f2
1
2 	
kuse
m2
10.0901141
s
	
f1
f2
0.273203	
Comparison of deflection with characteristic impulse and elastic response:
v0 20 m
s
 Ik 2m1 v0	 40 kN s			
u2
Ik
m2 kuse	 360.828372mm			 theoretical value of the beam deflection
Fsta kuse u2	 2.535922 103
 kN			
RA Fsta 	 1.267961 103
 kN			

-- 214 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 H-1
Appendix H MATLAB algorithms
H.1 2DOF system - main algorithm
%---------------------- 2-DOF SYSTEM ---------------------------
% A program that calculates the response of a 2-DOF system
containing
% 2 masses and 2 springs connected to a fixed support. This
system
% represents a collision between two bodies and works for both
plastic
% and elastic response plus a bilinear material relationship with
linear
% plastic behaviour.
%
% Developed for the Master's Thesis "Design with regard to
collision impact"
% by Erik Asplund and Daniel Steckmest
%
% Last modified: 2014-05-26
%----------------------------------------------------------------
%----------------------------------------------------------------
clear all
close all
clc
%%---------------------------------------------------------------
%---------------INDATA-------------------------------------------
m1=1500; %Mass of body 1 [kg]
m2=10092; %Mass of body 2 [kg]
k1=300e3; %Stiffness of spring 1 [N/m]
k1_2=4*k1; %Stiffness of second stiffer part of spring 1
response
k2=10e6; %Stiffness of spring 2 [N/m]
R1=400e100; %Load capacity of body 1 [N]
R2=400e100; %Load capacity of body 2 [N]
v0=[25;0]; 	%Initial velocity of body 1 and 2 [m/s]
U_Rd=[1e100 1e100]; %Ultimate plastic deformation [m]
u_stiffness=0.5; %After what displ. the change in stiffness
occurs [m]
%--------------Beam Parameters-----------------------------------
%position of impact load
alpha=0.5;
beta=1-alpha;
%mass
h=0.3; 	%Height of beam [m]
w=1; 	%Width of beam [m]
l=5; 	%Lenght of beam [m]
rho=2400; 	%Density of beam [kg/m^3]
m_beam=h*w*l*rho; %Mass of beam [kg]
%beam stiffness
EI_b=1.830223e7; %bending stiffness of beam
EI_b=(1/64)*EI_b;
k2=3*EI_b/(l^3*alpha^2*beta^2); %Beam stiffness used in 2DOF
%transformation factor from beam to 2DOF
kappa_m_el=alpha^3/(28*beta^2)+(23*alpha^2+10*alpha+2)*beta/(105*
alpha^2)...
+(beta^2-2)/(12*alpha)-
alpha/(10*beta^2)+1/(12*alpha*beta^2)+alpha/10;
%transformed mass used in 2DOF
m2=kappa_m_el*m_beam;
%----------------------------------------------------------------
% Mass matrix
M=[m1 0;
0 m2];
% Stiffness matrix
K=[k1 -k1;
-k1 k1+k2];
K_el=[k1 k2 k1_2]; 	%elastic stiffnesses
U_el=[R1/k1 R2/k2 u_stiffness]; %maximum elastic displacement
%Calculating the eigenvalues and eigenvectors using a direct
%eigenvalue solver
[Lambda, Egv]=eigen(K,M);
%--- Central difference method --------------------------
%Following the algorithm presented in Craig Jr, Kurdila (2006)
%Initial conditions
u0=zeros(length(K),1); %Displacement
a0=zeros(length(K),1); %Acceleration
p0=zeros(length(K),1); %External force
%Calculating the time step
%h_crit=2/max(sqrt(Lambda)); %critical time step
% h=0.01*h_crit; 	%decreased time step, increased
precision
% t_analysis=0.6; 	%time period for analysis [s]
% n=ceil(t_analysis/h); %number of iterations
n=1000; %using a predefined number of steps
h=0.0005; %using a predefined time step
%Starting values
u_n_minus1=u0-h*v0+(h^2/2)*a0;
p_n=p0;
%Predefining
u=zeros(length(K),n); %Displacement
v=zeros(length(K),n); %Velocity
a=zeros(length(K),n); %Acceleration

-- 215 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
H-2
U_pl=zeros(length(K),n); %Plastic deformation
R=zeros(length(K),n); %Reaction forces
du=zeros(1,n); 	%Deformation of spring 1
k=zeros(2,n); 	%stiffness vector
Wi=zeros(length(K),n); %Internal work
We=zeros(length(K),n); %External work
Ek=zeros(length(K),n); %Kinetic energy
Im=zeros(length(K),n); %Impulse of mass
I_R=zeros(length(K),n); %Impulse of reaction force
R_biggs=zeros(n,1);
kkk=zeros(1,n);
for i=1:n
%Since an elasto-plastic material model is used the stiffness
matrix,
%K, is updated in each iteration. Also the reaction forces
are
%calculated.
[U_pl, 	R, 	du, 	K, 	k1,
k2,kkk]=Rforce(u,du,i,U_el,U_pl,U_Rd,K_el,R,kkk);
k(:,i)=[k1;k2]; %stiffness vector
%Right hand side terms of the iteration in central difference
method
RHSn=p_n-(K-(2/(h^2))*M)*u(:,i)-((1/h^2)*M)*u_n_minus1;
%Solves the displacement for the next timestep
u(:,i+1)=((1/h^2)*M)\RHSn;
%Calculating velocity and acceleration for each timestep
if i==1
v(:,i)=v0;
a(:,i)=a0;
else
v(:,i)=(u(:,i+1)-u(:,i-1))/(2*h);
a(:,i)=(u(:,i+1)-2*u(:,i)+u(:,i-1))/h^2;
end
%Calculating internal and external work, kinetic energies and
impulse
if i==1 %Skips the first step
else
dWi(1)=(R(1,i)+R(1,i-1))/2*(u(1,i)-u(1,i-1));
Wi(1,i)=Wi(1,i-1)+dWi(1);
dWi(2)=(R(2,i)+R(2,i-1))/2*(u(2,i)-u(2,i-1));
Wi(2,i)=Wi(2,i-1)+dWi(2);
dWe(2)=(R(1,i)+R(1,i-1))/2*(u(2,i)-u(2,i-1));
We(2,i)=We(2,i-1)+dWe(2);
dI_R(1)=(R(1,i)+R(1,i-1))/2*h;
I_R(1,i)=I_R(1,i-1)+dI_R(1);
dI_R(2)=(R(2,i)+R(2,i-1))/2*h;
I_R(2,i)=I_R(2,i-1)+dI_R(2);
end
Ek(:,i)=(M*v(:,i).^2)/2;
Im(:,i)=M*v(:,i);
%Reactionforce according to Biggs
a_1=1.357;
a_2=-0.457;
R_biggs(i)=a_1*R(2,i)+a_2*R(1,i);
%Updating the values
u_n_minus1=u(:,i);
end
%---values for comparison with classic theory---
if v(1,n)>0
Ek3=Ek(1,n)+Ek(2,n);
else
Ek3=Ek(2,n);
end
E_k_ratio(1)=Ek3/Ek(1,1);
e=(v(2,n)-v(1,n))/v0(1);
------------------------------------------------
%Remove the last values in the displacement vector since not
needed
u(:,n+1)=[];
%%
%----------------------------------------------------------------
%Plotting the graphs
%----------------------------------------------------------------
t=linspace(0,h*n,n); %Creates a time vector to be able to plot
figure(1)
plot(t,u(1,:),'m');
hold on
plot(t,u(2,:),'r--')
%plot(t,du)
title('Displacement for mass 1 and 2 ')
legend('Displacement mass 1 ', 'Displacement mass 2',
'Location','SouthWest')
xlabel('Time [s]')
ylabel('Displacement [m]')
figure(2)
plot(t,v(1,:),'m');
hold on
plot(t,v(2,:),'r--')
title('Velocity for mass 1 and 2 ')
legend('Velocity mass 1 ','Velocity mass 2')
xlabel('Time [s]')

-- 216 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 H-3
ylabel('Velocity [m/s]')
figure(3)
plot(t,a(1,:),'m');
hold on
plot(t,a(2,:),'r--')
title('Acceleration for mass 1 and 2 ')
legend('Acceleration mass 1 ','Acceleration mass
2','Location','SouthEast')
xlabel('Time [s]')
ylabel('Acceleration [m/s^2]')
figure(4)
plot(t,k)
title('Change in stiffness ')
legend('k1 ','k2')
xlabel('Time [s]')
ylabel('Stiffness [N/m]')
figure(5)
plot(t,Wi(1,:),'m');
hold on
plot(t,We(1,:),'r')
plot(t,Ek(1,:),'b')
title('Work and kinetic energy mass 1 ')
legend('Internal work mass 1 ','External work mass 1'...
,'Kinetic energy mass 1','Location','NorthEast')
xlabel('Time [s]')
ylabel('Work, W [J]')
figure(6)
plot(t,Wi(2,:),'m');
hold on
plot(t,We(2,:),'r')
plot(t,Ek(2,:),'b')
title('Work and kinetic energy mass 2 ')
legend('Internal work mass 2 ','External work mass 2'...
,'Kinetic energy mass 2','Location','NorthEast')
xlabel('Time [s]')
ylabel('Work, W [J]')
figure(7)
plot(t,Im(1,:),'m');
hold on
plot(t,I_R(1,:),'r')
title('Impulse mass 1')
legend('Impulse of mass','Impulse of reaction force'...
,'Location','NorthEast')
xlabel('Time [s]')
ylabel('Work, W [J]')
figure(8)
plot(t,Im(2,:),'m');
hold on
plot(t,I_R(2,:),'r')
title('Impulse mass 2 ')
legend('Impulse of mass','Impulse of reaction force'...
,'Location','NorthEast')
xlabel('Time [s]')
ylabel('Work, W [J]')
figure(9)
plot(t,R(1,:),'m');
hold on
plot(t,R(2,:),'r')
plot(t,R_biggs,'b')
title('Load - Deformation curve ')
legend('R1','R2'...
,'Location','NorthEast')
xlabel('Time [s]')
ylabel('Load, [N]')
figure(10)
plot(du,R(1,:),'m');
hold on
plot(u(2,:),R(2,:),'r')
xlim([0 max(max(u))])
title('Load - Deformation curve ')
legend('R1','R2'...
,'Location','NorthEast')
xlabel('Deformation [m]')
ylabel('Load, [N]')
max(u(2,:))

-- 217 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
H-4
H.2 2DOF system - function file
function[U_pl,R,du,K,k1,k2,kkk]=Rforce(u,du,i,U_el,U_pl,U_
Rd,K_el,R,kkk)
%---------------------------------------------------------
---------
% Function file that updates the stiffness matrix and the
reaction forces
% when using the central difference method to solve a 2-
DOF system using a
% elastic, plastic or elasto-plastic linear/bilinear
material model.
%
% Developed for the Master's Thesis "Design with regard to
collision impact"
% by Erik Asplund and Daniel Steckmest
%
% Last modified: 2014-05-26
%---------------------------------------------------------
%---------------------------------------------------------
du(i)=u(1,i)-u(2,i);
%------ONLY USE FOR LINEAR PLASTIC BEHAVIOUR-----
Q=0;
if i==1
elseif du(i)<max(du)
du(i)=max(du); %make sure the deformation stays at
the max value
Q=1;
end
-------------------------------------------------
%calculate the additional plastic deformation
U_max=[max(du(1:i-1)) max(u(2,1:i-1))];
%for body 1
if du(i)>U_el(1) && du(i)>U_max(1)
dU_pl(1)=du(i)-max(U_max(1),U_el(1));
else
dU_pl(1)=0;
end
%for body 2
if u(2,i)>U_el(2) && u(2,i)>U_max(2)
dU_pl(2)=u(2,i)-max(U_max(2),U_el(2));
else
dU_pl(2)=0;
end
%calculation of plastic deformation
if i==1
else
U_pl(:,i)=dU_pl'+U_pl(:,i-1);
end
%Calculation of reaction forces
%for body 1
if du(i)<0 || U_pl(1,i)>U_Rd(1) || Q==1
R(1,i)=0;
elseif du(i)>U_el(3)
%R(1,i)=max(0,K_el(3)*(du(i)-U_pl(1,i)));
%R(1,i)=max(0,R(1,i-1)+K_el(3)*(du(i)-du(i-1)-
U_pl(1,i)));
R(1,i)=max(0,U_el(3)*K_el(1)+K_el(3)*(du(i)-U_el(3)-
U_pl(1,i)));
kkk(i)=1;
else
R(1,i)=max(0,K_el(1)*(du(i)-U_pl(1,i)));
kkk(i)=0.5;
end
%for body 2
if U_pl(2,i)>U_Rd(2)
R(2,i)=0;
else
R(2,i)=K_el(2)*(u(2,i)-U_pl(2,i));
end
%update the values for the stiffnesses
%for body 1
if du(i)==0
k1=K_el(1);
elseif U_pl(1)>U_Rd(1)
k1=0;
else
k1=R(1,i)/du(i);
end
%for body 2
if u(2,i)==0
k2=K_el(2);
elseif U_pl(2)>U_Rd(2)
k2=0;
else
k2=R(2,i)/u(2,i);
end
%assembly of stiffness matrix
K=[k1 -k1;
-k1 k1+k2];

-- 218 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 H-5
H.3 Classic theory
%----------------------------------------------------------------
% Collision impact according to classical theory
%----------------------------------------------------------------
clc
clear all
close all
%Indata
m1=1000;
m2=10000;
v0=20;
M=[m1 m2];
%Coefficient of restitution
e=0; % 1 = elstic impact 0 = plastic impact
%Kinetic energy before impact
E_k0=m1*v0(1).^2/2
%Momentum before impact
p_0=m1*v0(1)
%Velocity after impact
v_cl(:,1)=v0(1)*(m1-(e*m2))/(m1+m2);
v_cl(:,2)=v0(1)*((1+e)*m1)/(m1+m2);
%Kinetic energy after impact
E_k=M.*v_cl.^2/2;
%Kinetic energy actiong in the same direction as mass 2, exterior
work on
%second body
if v_cl(1)>0
E_k(3)=E_k(1)+E_k(2);
else
E_k(3)=E_k(2);
end
%Energy quota, shows how much of the initial kinetic energy that
is
%continuing in the direction of body 2
v_cl
E_k
E_k_q=E_k(3)/E_k0

-- 219 of 227 --



-- 220 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 I-1
Appendix I ADINA command files
I.1 ADINA-IN command file for setting up the model
* Command file created from session file information stored
within AUI database
*--- Database created 28 March 2014, 00:00:00 ---*
*--- by ADINA: AUI version 9.0.1 ---*
*
DATABASE NEW SAVE=NO PROMPT=NO
FEPROGRAM ADINA
CONTROL FILEVERSION=V90
*
FEPROGRAM PROGRAM=ADINA
*
CONTROL PLOTUNIT=PERCENT VERBOSE=YES ERRORLIM=0 LOGLIMIT=0
UNDO=5,
PROMPTDE=UNKNOWN AUTOREPA=YES DRAWMATT=YES DRAWTEXT=EXACT,
DRAWLINE=EXACT DRAWFILL=EXACT AUTOMREB=YES ZONECOPY=NO,
SWEEPCOI=YES SESSIONS=YES DYNAMICT=YES UPDATETH=YES
AUTOREGE=NO,
ERRORACT=CONTINUE FILEVERS=V90 INITFCHE=NO SIGDIGIT=6,
AUTOZONE=YES PSFILEVE=V0 ELEMENT-=REPEAT
*
FEPROGRAM PROGRAM=ADINA
*
MASTER ANALYSIS=DYNAMIC-DIRECT-INTEGRATION MODEX=EXECUTE,
TSTART=0.00000000000000 IDOF=0 OVALIZAT=NONE
FLUIDPOT=AUTOMATIC,
CYCLICPA=1 IPOSIT=STOP REACTION=YES INITIALS=NO FSINTERA=NO,
IRINT=DEFAULT CMASS=NO SHELLNDO=AUTOMATIC AUTOMATI=OFF,
SOLVER=SPARSE CONTACT-=CONSTRAINT-FUNCTION,
TRELEASE=0.00000000000000 RESTART-=NO FRACTURE=NO LOAD-
CAS=NO,
LOAD-PEN=NO SINGULAR=YES STIFFNES=0.000100000000000000,
MAP-OUTP=NONE MAP-FORM=NO NODAL-DE='' POROUS-C=NO
ADAPTIVE=0,
ZOOM-LAB=1 AXIS-CYC=0 PERIODIC=NO VECTOR-S=GEOMETRY EPSI-
FIR=NO,
STABILIZ=NO STABFACT=1.00000000000000E-10 RESULTS=PORTHOLE,
FEFCORR=NO BOLTSTEP=1 EXTEND-S=YES CONVERT-=NO DEGEN=YES,
TMC-MODE=NO ENSIGHT-=NO IRSTEPS=1 INITIALT=NO TEMP-INT=NO,
ESINTERA=NO OP2GEOM=NO INSITU-D=NO OP2ERCS=ELEMENT 2DPL-
AX=YZ-Z
*
ANALYSIS DYNAMIC-DIRECT-INTEGRATION METHOD=NEWMARK,
DELTA=0.500000000000000 ALPHA=0.250000000000000,
THETA=1.40000000000000 TIMESTEP=TOTALTIME NCRSTEP=1,
CRSTEP=0.00000000000000 MASS-SCA=1.00000000000000,
DTMIN1=0.00000000000000 DTMIN2=0.00000000000000,
GAMMA=0.500000000000000 MIDLOAD=TIMEFUNCTION,
GAMAP=0.540000000000000
*
COORDINATES POINT SYSTEM=0
@CLEAR
1 0.00000000000000 0.00000000000000 0.00000000000000 0
2 2.50000000000000 0.00000000000000 0.00000000000000 0
3 5.00000000000000 0.00000000000000 0.00000000000000 0
4 2.50000000000000 2.50000000000000 0.00000000000000 0
@
*
LINE STRAIGHT NAME=1 P1=1 P2=2
*
LINE STRAIGHT NAME=2 P1=2 P2=3
*
MATERIAL ELASTIC NAME=1 E=8.13400000000000E+09
NU=0.200000000000000,
DENSITY=2400.00000000000 ALPHA=0.00000000000000 MDESCRIP=,
'Concrete'
*
CROSS-SECTIO RECTANGULAR NAME=1 WIDTH=1.00000000000000,
HEIGHT=0.300000000000000 	SC=0.00000000000000
TC=0.00000000000000,
TORFAC=1.00000000000000 SSHEARF=0.00000000000000,
TSHEARF=0.00000000000000 ISHEAR=NO SQUARE=NO
*
LINE-ELEMDAT BEAM
@CLEAR
1 1 1 0 'DEFAULT' 'DEFAULT' 0.00000000000000 0.00000000000000
'NO',
0.00000000000000 0.00000000000000 0.00000000000000
2 1 1 0 'DEFAULT' 'DEFAULT' 0.00000000000000 0.00000000000000
'NO',
0.00000000000000 0.00000000000000 0.00000000000000
@
*
FIXITY NAME=SIMPLY_SUPPORTED
@CLEAR
'X-TRANSLATION'
'Y-TRANSLATION'
'Z-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'OVALIZATION'
'FLUID-POTENTIAL'
'PORE-FLUID-PRESSURE'
'TEMPERATURE'
'BEAM-WARP'
@
*
FIXITY NAME=SIMPLY_SUPPORTED_ROLLER
@CLEAR
'Y-TRANSLATION'
'Z-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'OVALIZATION'
'FLUID-POTENTIAL'
'PORE-FLUID-PRESSURE'
'TEMPERATURE'
'BEAM-WARP'

-- 221 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
I-2
@
*
FIXITY NAME=SPRING_TOP
@CLEAR
'X-TRANSLATION'
'Z-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'Z-ROTATION'
'OVALIZATION'
'FLUID-POTENTIAL'
'PORE-FLUID-PRESSURE'
'TEMPERATURE'
'BEAM-WARP'
@
*
FIXBOUNDARY POINTS FIXITY=ALL
@CLEAR
1 'SIMPLY_SUPPORTED'
3 'SIMPLY_SUPPORTED_ROLLER'
4 'SPRING_TOP'
@
PROPERTY NONLINEAR-K NAME=1 RUPTURE=NO
@CLEAR
-1.00000000000000 -300000.000000000
0.00000000000000 0.00000000000000
1.00000000000000 0.00000000000000
@
*
PROPERTYSET NAME=1 K=0.00000000000000 M=0.00000000000000,
C=0.00000000000000 NONLINEA=YES NK=1 NM=0 NC=0
*
MASSES POINTS
@CLEAR
4 0.00000000000000 1000.00000000000 0.00000000000000
0.00000000000000,
0.00000000000000 0.00000000000000
@
*
EGROUP BEAM NAME=1 SUBTYPE=THREE-D DISPLACE=DEFAULT MATERIAL=1
RINT=5,
SINT=DEFAULT TINT=DEFAULT RESULTS=FORCES INITIALS=NONE,
CMASS=DEFAULT RIGIDEND=NONE MOMENT-C=NO RIGIDITY=1,
MULTIPLY=1000000.00000000 RUPTURE=ADINA OPTION=NONE,
BOLT-TOL=0.00000000000000 DESCRIPT='Beam' SECTION=1,
PRINT=DEFAULT SAVE=DEFAULT TBIRTH=0.00000000000000,
TDEATH=0.00000000000000 SPOINT=2 BOLTFORC=0.00000000000000,
BOLTNCUR=0 TMC-MATE=1 BOLT-NUM=0 BOLT-LOA=0.00000000000000,
WARP=NO ENDRELEA=ACCURATE
*
EGROUP SPRING NAME=2 PROPERTY=1 RESULTS=FORCES NONLINEA=NO,
SKEWSYST=NO OPTION=NONE DESCRIPT='spring' PRINT=DEFAULT,
SAVE=DEFAULT 	TBIRTH=0.00000000000000
TDEATH=0.00000000000000,
6DOF-SPR=NO
*
SPRING POINTS
@CLEAR
1 4 2 2 2 1 'DEFAULT' 'DEFAULT' 0.00000000000000
0.00000000000000
@
*
SUBDIVIDE LINE NAME=1 MODE=LENGTH SIZE=0.100000000000000
@CLEAR
2
@
*
GLINE NODES=2 AUXPOINT=0 NCOINCID=ENDS NCENDS=12,
NCTOLERA=1.00000000000000E-05 SUBSTRUC=0 GROUP=1
MIDNODES=CURVED,
XO=0.00000000000000 YO=0.00000000000000 ZO=1.00000000000000,
XYZOSYST=SKEW
@CLEAR
1
2
@
*
TIMESTEP NAME=DEFAULT
@CLEAR
1000 0.000500000000000000
@
*
INITIAL VELOCITIES SUBSTRUC=0 REUSE=1
@CLEAR
1 0.00000000000000 -20.0000000000000 0.00000000000000,
0.00000000000000 0.00000000000000 0.00000000000000,
0.00000000000000
@
*
EGROUP BEAM NAME=1 SUBTYPE=THREE-D DISPLACE=DEFAULT MATERIAL=1
RINT=5,
SINT=DEFAULT TINT=DEFAULT RESULTS=STRESSES INITIALS=NONE,
CMASS=DEFAULT RIGIDEND=NONE MOMENT-C=NO RIGIDITY=1,
MULTIPLY=1000000.00000000 RUPTURE=ADINA OPTION=NONE,
BOLT-TOL=0.00000000000000 DESCRIPT='Beam' SECTION=1,
PRINT=DEFAULT SAVE=DEFAULT TBIRTH=0.00000000000000,
TDEATH=0.00000000000000 SPOINT=2 BOLTFORC=0.00000000000000,
BOLTNCUR=0 TMC-MATE=1 BOLT-NUM=0 BOLT-LOA=0.00000000000000,
WARP=NO ENDRELEA=ACCURATE
*
EGROUP SPRING NAME=2 PROPERTY=1 RESULTS=STRESSES NONLINEA=NO,
SKEWSYST=NO OPTION=NONE DESCRIPT='spring' PRINT=DEFAULT,
SAVE=DEFAULT 	TBIRTH=0.00000000000000
TDEATH=0.00000000000000,
6DOF-SPR=NO
****
*** ADINA OPTIMIZE=SOLVER FILE=,
*** 	'Q:\1_Projekt\EXJOBB\Daniel_Erik_2014\ADINA\a=0,5\SS-
Beam_a=0,
*** 5.dat' FIXBOUND=YES OVERWRIT=YES

-- 222 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 I-3
I.2 ADINA-PLOT command file for extracting the result
NODEPOINT NAME=U1 SUBSTRUC=0 REUSE=1 NODE=1
*
NODEPOINT NAME=U2 SUBSTRUC=0 REUSE=1 NODE=2
*
NODEPOINT NAME=RA SUBSTRUC=0 REUSE=1 NODE=3
*
NODEPOINT NAME=RB SUBSTRUC=0 REUSE=1 NODE=52
*
NODEPOINT NAME=Mid SUBSTRUC=0 REUSE=1 NODE=2
*
*********CHANGE TO CORRECT COORDINATE FOR EACH
IMPACT*****************
*
ELPOINT NAME=U2_element SUBSTRUC=0 REUSE=1 GROUP=1 ELEMENT=26
LAYER=1,
OPTION=LABEL LABEL=1
*
ELLINE NAME=BEAM_COMPLETE SUBSTRUC=0 REUSE=1 GROUP=1 ELEMENT=1,
LAYER=1 OPTION=LABEL LABEL=1 FACTOR=1.00000000000000
@CLEAR
0 1 1 1 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 2 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 3 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 4 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 5 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 6 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 7 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 8 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 9 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 10 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 11 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 12 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 13 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 14 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 15 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 16 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 17 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 18 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 19 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 20 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 21 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 22 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 23 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 24 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 25 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 26 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 27 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 28 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 29 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 30 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 31 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 32 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 33 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 34 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 35 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 36 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 37 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 38 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 39 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 40 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 41 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 42 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 43 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 44 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,

-- 223 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
I-4
0.00000000000000 1.00000000000000
0 1 1 45 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 46 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 47 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 48 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 49 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 50 1 'LABEL' 0 1 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
0 1 1 50 1 'LABEL' 0 2 1 0.00000000000000 0.00000000000000,
0.00000000000000 1.00000000000000
@
********MOVE NODE 2 TO CORRECT POSITION FOR EACH LOAD
APPLICATION*********
*
NODELINE NAME=BEAM_NODE_LIST SUBSTRUC=0 REUSE=1 NODE=1,
FACTOR=1.00000000000000
@CLEAR
0 1 3 1.00000000000000
0 1 4 1.00000000000000
0 1 5 1.00000000000000
0 1 6 1.00000000000000
0 1 7 1.00000000000000
0 1 8 1.00000000000000
0 1 9 1.00000000000000
0 1 10 1.00000000000000
0 1 11 1.00000000000000
0 1 12 1.00000000000000
0 1 13 1.00000000000000
0 1 14 1.00000000000000
0 1 15 1.00000000000000
0 1 16 1.00000000000000
0 1 17 1.00000000000000
0 1 18 1.00000000000000
0 1 19 1.00000000000000
0 1 20 1.00000000000000
0 1 21 1.00000000000000
0 1 22 1.00000000000000
0 1 23 1.00000000000000
0 1 24 1.00000000000000
0 1 25 1.00000000000000
0 1 26 1.00000000000000
0 1 27 1.00000000000000
0 1 2 1.00000000000000
0 1 28 1.00000000000000
0 1 29 1.00000000000000
0 1 30 1.00000000000000
0 1 31 1.00000000000000
0 1 32 1.00000000000000
0 1 33 1.00000000000000
0 1 34 1.00000000000000
0 1 35 1.00000000000000
0 1 36 1.00000000000000
0 1 37 1.00000000000000
0 1 38 1.00000000000000
0 1 39 1.00000000000000
0 1 40 1.00000000000000
0 1 41 1.00000000000000
0 1 42 1.00000000000000
0 1 43 1.00000000000000
0 1 44 1.00000000000000
0 1 45 1.00000000000000
0 1 46 1.00000000000000
0 1 47 1.00000000000000
0 1 48 1.00000000000000
0 1 49 1.00000000000000
0 1 50 1.00000000000000
0 1 51 1.00000000000000
0 1 52 1.00000000000000
@
*****************************************************************
*********
*
FRAME LOWER=0.00000000000000 UPPER=0.00000000000000 ROTATION=0,
LINE=YES SIZE=SURFACE ISOSIZE=4.00000000000000,
WIDTH=100.000000000000 HEIGHT=100.000000000000,
XOFFSET=0.00000000000000 YOFFSET=0.00000000000000 INDEX=YES,
CUTMARK=NO 	WINDOW=PREVIOUS 	UNITLOWE=PERCENT
UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO ASPECT=1.33333337306976,
CHARSIZE=0.250000000000000 UNITCHAR=CM HSTRING=' ',
ADINATEX=VERTICAL
*
RESPONSESHOW 	XVARIABL=TIME 	XPOINT=U2_element
YVARIABL=NODAL_MOMENT-S,
YPOINT=U2_element RESPRANG=DEFAULT XSMOOTHI=DEFAULT,
YSMOOTHI=DEFAULT XRESULTC=DEFAULT YRESULTC=DEFAULT
GRAPH=YES,
CURVEDEP=DEFAULT XAXIS=DEFAULT_X YAXIS=DEFAULT_Y,
GRAPHDEP=DEFAULT SUBFRAME=DEFAULT LIST=NO
*
SAVEBMP FILENAME='Results\Moment_u2.jpg',
SIZE=FRAME SCALE=1.00000000000000 XSIZE=640 YSIZE=480
*
FRAME LOWER=0.00000000000000 UPPER=0.00000000000000 ROTATION=0,
LINE=YES SIZE=SURFACE ISOSIZE=4.00000000000000,
WIDTH=100.000000000000 HEIGHT=100.000000000000,
XOFFSET=0.00000000000000 YOFFSET=0.00000000000000 INDEX=YES,
CUTMARK=NO 	WINDOW=PREVIOUS 	UNITLOWE=PERCENT
UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO ASPECT=1.33333337306976,
CHARSIZE=0.250000000000000 UNITCHAR=CM HSTRING=' ',
ADINATEX=VERTICAL
*
RESPONSESHOW 	XVARIABL=TIME 	XPOINT=U2_element
YVARIABL=NODAL_FORCE-T,

-- 224 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 I-5
YPOINT=U2_element RESPRANG=DEFAULT XSMOOTHI=DEFAULT,
YSMOOTHI=DEFAULT XRESULTC=DEFAULT YRESULTC=DEFAULT
GRAPH=YES,
CURVEDEP=DEFAULT XAXIS=DEFAULT_X YAXIS=DEFAULT_Y,
GRAPHDEP=DEFAULT SUBFRAME=DEFAULT LIST=NO
*
SAVEBMP FILENAME='Results\Force_u2.jpg',
SIZE=FRAME SCALE=1.00000000000000 XSIZE=640 YSIZE=480
*
FRAME LOWER=0.00000000000000 UPPER=0.00000000000000 ROTATION=0,
LINE=YES SIZE=SURFACE ISOSIZE=4.00000000000000,
WIDTH=100.000000000000 HEIGHT=100.000000000000,
XOFFSET=0.00000000000000 YOFFSET=0.00000000000000 INDEX=YES,
CUTMARK=NO 	WINDOW=PREVIOUS 	UNITLOWE=PERCENT
UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO ASPECT=1.33333337306976,
CHARSIZE=0.250000000000000 UNITCHAR=CM HSTRING=' ',
ADINATEX=VERTICAL
*
RESPONSESHOW XVARIABL=TIME XPOINT=U1 YVARIABL=Y-DISPLACEMENT
YPOINT=U1,
RESPRANG=DEFAULT XSMOOTHI=DEFAULT YSMOOTHI=DEFAULT,
XRESULTC=DEFAULT 	YRESULTC=DEFAULT 	GRAPH=YES
CURVEDEP=DEFAULT,
XAXIS=DEFAULT_X YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT,
SUBFRAME=DEFAULT LIST=NO
*
SAVEBMP FILENAME='Results\u1_graph.jpg',
SIZE=FRAME SCALE=1.00000000000000 XSIZE=640 YSIZE=480
*
FRAME LOWER=0.00000000000000 UPPER=0.00000000000000 ROTATION=0,
LINE=YES SIZE=SURFACE ISOSIZE=4.00000000000000,
WIDTH=100.000000000000 HEIGHT=100.000000000000,
XOFFSET=0.00000000000000 YOFFSET=0.00000000000000 INDEX=YES,
CUTMARK=NO 	WINDOW=PREVIOUS 	UNITLOWE=PERCENT
UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO ASPECT=1.33333337306976,
CHARSIZE=0.250000000000000 UNITCHAR=CM HSTRING=' ',
ADINATEX=VERTICAL
*
RESPONSESHOW XVARIABL=TIME XPOINT=U2 YVARIABL=Y-DISPLACEMENT
YPOINT=U2,
RESPRANG=DEFAULT XSMOOTHI=DEFAULT YSMOOTHI=DEFAULT,
XRESULTC=DEFAULT 	YRESULTC=DEFAULT 	GRAPH=YES
CURVEDEP=DEFAULT,
XAXIS=DEFAULT_X YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT,
SUBFRAME=DEFAULT LIST=NO
*
SAVEBMP FILENAME='Results\u2_graph.jpg',
SIZE=FRAME SCALE=1.00000000000000 XSIZE=640 YSIZE=480
*
FRAME LOWER=0.00000000000000 UPPER=0.00000000000000 ROTATION=0,
LINE=YES SIZE=SURFACE ISOSIZE=4.00000000000000,
WIDTH=100.000000000000 HEIGHT=100.000000000000,
XOFFSET=0.00000000000000 YOFFSET=0.00000000000000 INDEX=YES,
CUTMARK=NO 	WINDOW=PREVIOUS 	UNITLOWE=PERCENT
UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO ASPECT=1.33333337306976,
CHARSIZE=0.250000000000000 UNITCHAR=CM HSTRING=' ',
ADINATEX=VERTICAL
*
RESPONSESHOW XVARIABL=TIME XPOINT=RA YVARIABL=Y-REACTION
YPOINT=RA,
RESPRANG=DEFAULT XSMOOTHI=DEFAULT YSMOOTHI=DEFAULT,
XRESULTC=DEFAULT 	YRESULTC=DEFAULT 	GRAPH=YES
CURVEDEP=DEFAULT,
XAXIS=DEFAULT_X YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT,
SUBFRAME=DEFAULT LIST=NO
*
SAVEBMP FILENAME='Results\R_graph.jpg',
SIZE=FRAME SCALE=1.00000000000000 XSIZE=640 YSIZE=480
*
FRAME LOWER=0.00000000000000 UPPER=0.00000000000000 ROTATION=0,
LINE=YES SIZE=SURFACE ISOSIZE=4.00000000000000,
WIDTH=100.000000000000 HEIGHT=100.000000000000,
XOFFSET=0.00000000000000 YOFFSET=0.00000000000000 INDEX=YES,
CUTMARK=NO 	WINDOW=PREVIOUS 	UNITLOWE=PERCENT
UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO ASPECT=1.33333337306976,
CHARSIZE=0.250000000000000 UNITCHAR=CM HSTRING=' ',
ADINATEX=VERTICAL
*
RESPONSESHOW XVARIABL=TIME XPOINT=mid YVARIABL=Y-DISPLACEMENT
YPOINT=mid,
RESPRANG=DEFAULT XSMOOTHI=DEFAULT YSMOOTHI=DEFAULT,
XRESULTC=DEFAULT 	YRESULTC=DEFAULT 	GRAPH=YES
CURVEDEP=DEFAULT,
XAXIS=DEFAULT_X YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT,
SUBFRAME=DEFAULT LIST=NO
*
SAVEBMP FILENAME='Results\u_midpoint_graph.jpg',
SIZE=FRAME SCALE=1.00000000000000 XSIZE=640 YSIZE=480
*
FRAME LOWER=0.00000000000000 UPPER=0.00000000000000 ROTATION=0,
LINE=YES SIZE=SURFACE ISOSIZE=4.00000000000000,
WIDTH=100.000000000000 HEIGHT=100.000000000000,
XOFFSET=0.00000000000000 YOFFSET=0.00000000000000 INDEX=YES,
CUTMARK=NO 	WINDOW=PREVIOUS 	UNITLOWE=PERCENT
UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO ASPECT=1.33333337306976,
CHARSIZE=0.250000000000000 UNITCHAR=CM HSTRING=' ',
ADINATEX=VERTICAL
*
RESPONSESHOW XVARIABL=TIME XPOINT=RB YVARIABL=Y-REACTION
YPOINT=RB,
RESPRANG=DEFAULT XSMOOTHI=DEFAULT YSMOOTHI=DEFAULT,
XRESULTC=DEFAULT 	YRESULTC=DEFAULT 	GRAPH=YES
CURVEDEP=DEFAULT,
XAXIS=DEFAULT_X YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT,
SUBFRAME=DEFAULT LIST=NO
*

-- 225 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80
I-6
SAVEBMP FILENAME='Results\RB_graph.jpg',
SIZE=FRAME SCALE=1.00000000000000 XSIZE=640 YSIZE=480
*
FRAME LOWER=0.00000000000000 UPPER=0.00000000000000 ROTATION=0,
LINE=YES SIZE=SURFACE ISOSIZE=4.00000000000000,
WIDTH=100.000000000000 HEIGHT=100.000000000000,
XOFFSET=0.00000000000000 YOFFSET=0.00000000000000 INDEX=YES,
CUTMARK=NO 	WINDOW=PREVIOUS 	UNITLOWE=PERCENT
UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO ASPECT=1.33333337306976,
CHARSIZE=0.250000000000000 UNITCHAR=CM HSTRING=' ',
ADINATEX=VERTICAL
*
MESHPLOT MESHSTYL=DEFAULT ZONENAME=WHOLE_MODEL RESPONSE=DEFAULT,
MODELDEP=DEFAULT VIEW=DEFAULT MESHWIND=DEFAULT
PLOTAREA=DEFAULT,
SUBFRAME=DEFAULT ELDEPICT=DEFAULT NODEDEPI=DEFAULT,
BOUNDEPI=DEFAULT GPDEPICT=DEFAULT GLDEPICT=DEFAULT,
GSDEPICT=DEFAULT GVDEPICT=DEFAULT MESHREND=DEFAULT,
MESHANNO=DEFAULT FRONDEPI=DEFAULT CONDEPIC=DEFAULT,
VSDEPICI=DEFAULT CRACKDEP=DEFAULT RESULTCO=DEFAULT,
CUTSURFA=DEFAULT ELFACESE=0 ELEDGESE=0
*
MOVIESHOOT LOAD-STEP TSTART=EARLIEST TEND=LATEST FRAMES=100
MOVIENUM=1
*
SAVEAVI FILENAME='Results\vid.avi',
SPEED=5 XSIZE=640 YSIZE=480 MOVIENUM=1 SIZE=FRAME,
SCALE=1.00000000000000 COLORBIT=16
*
RESPRANGE LOAD-STEP NAME=LISTA TSTART=EARLIEST
TEND=0.200000000000000,
INCREMEN=TINCREMENT TINCREME=0.0100000000000000
*
Filelist o=File f='Results\Moment+shear.text'
LINELIST 	LINENAME=BEAM_COMPLETE 	SMOOTHIN=DEFAULT
RESULTCO=DEFAULT,
RESPOPTI=RESPRANGE RESPONSE=DEFAULT RESPRANG=LISTA,
VARIABLE=NODAL_MOMENT-S NODAL_FORCE-T
*
Filelist o=File f='Results\max_moment+shear_time.text'
LINEMAX LINENAME=BEAM_COMPLETE TYPE=ABSMAX NUMBER=1
SMOOTHIN=DEFAULT,
RESULTCO=DEFAULT RESPOPTI=RESPRANGE RESPONSE=DEFAULT,
RESPRANG=DEFAULT VARIABLE=NODAL_MOMENT-S NODAL_FORCE-T
*
Filelist o=File f='Results\Deflection_time.text'
LINELIST LINENAME=BEAM_NODE_LIST SMOOTHIN=DEFAULT
RESULTCO=DEFAULT,
RESPOPTI=RESPRANGE RESPONSE=DEFAULT RESPRANG=LISTA,
VARIABLE=Y-DISPLACEMENT
*
Filelist o=File f='Results\max_deflection_time.text'
LINEMAX LINENAME=BEAM_NODE_LIST TYPE=ABSMAX NUMBER=1
SMOOTHIN=DEFAULT,
RESULTCO=DEFAULT RESPOPTI=RESPRANGE RESPONSE=DEFAULT,
RESPRANG=DEFAULT VARIABLE=Y-DISPLACEMENT
*
Filelist o=File f='Results\Ra.text'
POINTLIST POINTNAM=RA SMOOTHIN=DEFAULT RESULTCO=DEFAULT,
RESPOPTI=RESPRANGE RESPONSE=DEFAULT RESPRANG=DEFAULT,
VARIABLE=Y-REACTION
*
Filelist o=File f='Results\Rb.text'
POINTLIST POINTNAM=RB SMOOTHIN=DEFAULT RESULTCO=DEFAULT,
RESPOPTI=RESPRANGE RESPONSE=DEFAULT RESPRANG=DEFAULT,
VARIABLE=Y-REACTION
*
Filelist o=File f='Results\u_topspring.text'
POINTLIST POINTNAM=U1 SMOOTHIN=DEFAULT RESULTCO=DEFAULT,
RESPOPTI=RESPRANGE RESPONSE=DEFAULT RESPRANG=DEFAULT,
VARIABLE=Y-DISPLACEMENT
*
Filelist o=File f='Results\u_bottomspring.text'
POINTLIST POINTNAM=U2 SMOOTHIN=DEFAULT RESULTCO=DEFAULT,
RESPOPTI=RESPRANGE RESPONSE=DEFAULT RESPRANG=DEFAULT,
VARIABLE=Y-DISPLACEMENT
*
Filelist o=File f='Results\u_midpoint.text'
POINTLIST POINTNAM=mid SMOOTHIN=DEFAULT RESULTCO=DEFAULT,
RESPOPTI=RESPRANGE RESPONSE=DEFAULT RESPRANG=DEFAULT,
VARIABLE=Y-DISPLACEMENT
*
Filelist o=File f='Results\Moment_impactnode_t.text'
POINTLIST POINTNAM=U2_element SMOOTHIN=DEFAULT RESULTCO=DEFAULT,
RESPOPTI=RESPRANGE RESPONSE=DEFAULT RESPRANG=DEFAULT,
VARIABLE=NODAL_MOMENT-S
*
Filelist o=File f='Results\Force_impactnode_t.text'
POINTLIST POINTNAM=U2_element SMOOTHIN=DEFAULT RESULTCO=DEFAULT,
RESPOPTI=RESPRANGE RESPONSE=DEFAULT RESPRANG=DEFAULT,
VARIABLE=NODAL_FORCE-T
*
********Moment
envelope***************************************************
*
RESPONSE ENVELOPE NAME=ENVELOPE_MIN TYPE=MINIMUM OPTION=RANGE,
TSTART=EARLIEST TEND=LATEST INCREMEN=AVAILABLE,
TINCREME=1.00000000000000 NSTEP=1 INTERPOL=NO NSKIP=0
*
Filelist o=File f='Results\Moment_env_min.text'
LINEEXCEED 	LINENAME=BEAM_COMPLETE 	TYPE=MINIMUM
VALUE=0.00000000000000,
SMOOTHIN=DEFAULT RESULTCO=DEFAULT RESPOPTI=RESPONSE,
RESPONSE=ENVELOPE_MIN 	RESPRANG=DEFAULT
VARIABLE=NODAL_MOMENT-S
*
RESPONSE ENVELOPE NAME=ENVELOPE_ABSMAX TYPE=ABSMAX OPTION=RANGE,
TSTART=EARLIEST TEND=LATEST INCREMEN=AVAILABLE,
TINCREME=1.00000000000000 NSTEP=1 INTERPOL=NO NSKIP=0
*
Filelist o=File f='Results\Moment_env_absmax.text'
LINEEXCEED 	LINENAME=BEAM_COMPLETE 	TYPE=ABSMAX
VALUE=0.00000000000000,

-- 226 of 227 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2014:80 I-7
SMOOTHIN=DEFAULT RESULTCO=DEFAULT RESPOPTI=RESPONSE,
RESPONSE=ENVELOPE_ABSMAX RESPRANG=DEFAULT,
VARIABLE=NODAL_MOMENT-S
*
*****Shear 	force
envelope*************************************************
*
RESPONSE ENVELOPE NAME=ENVELOPE_MAX TYPE=MAXIMUM OPTION=RANGE,
TSTART=EARLIEST TEND=LATEST INCREMEN=AVAILABLE,
TINCREME=1.00000000000000 NSTEP=1 INTERPOL=NO NSKIP=0
*
Filelist o=File f='Results\Shear_env_min.text'
LINEEXCEED 	LINENAME=BEAM_COMPLETE 	TYPE=MINIMUM
VALUE=0.00000000000000,
SMOOTHIN=DEFAULT RESULTCO=DEFAULT RESPOPTI=RESPONSE,
RESPONSE=ENVELOPE_MIN RESPRANG=DEFAULT VARIABLE=NODAL_FORCE-
T
*
Filelist o=File f='Results\Shear_env_max.text'
LINEEXCEED 	LINENAME=BEAM_COMPLETE 	TYPE=MAXIMUM
VALUE=0.00000000000000,
SMOOTHIN=DEFAULT RESULTCO=DEFAULT RESPOPTI=RESPONSE,
RESPONSE=ENVELOPE_MAX RESPRANG=DEFAULT VARIABLE=NODAL_FORCE-
T
*
Filelist o=File f='Results\Shear_env_absmax.text'
LINEEXCEED 	LINENAME=BEAM_COMPLETE 	TYPE=ABSMAX
VALUE=0.00000000000000,
SMOOTHIN=DEFAULT RESULTCO=DEFAULT RESPOPTI=RESPONSE,
RESPONSE=ENVELOPE_ABSMAX 	RESPRANG=DEFAULT
VARIABLE=NODAL_FORCE-T
****************************************************************

-- 227 of 227 --