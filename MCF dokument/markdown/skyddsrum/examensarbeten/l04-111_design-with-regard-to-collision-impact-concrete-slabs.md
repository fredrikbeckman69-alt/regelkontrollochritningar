---
title: "L04 111 Design With Regard To Collision Impact Concrete Slabs"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-111_design-with-regard-to-collision-impact-concrete-slabs.pdf"
fileType: "PDF"
keywords: ["betong","beräkning","explosion","body","collision","2dof","figure","displacement"]
summary: "Department of Civil and Environmental Engineering Division of Structural Engineering Concrete Structures CHALMERS UNIVERSITY OF TECHNOLOGY Gothenburg, Sweden 2015 Master’s Thesis 2015:87 Design with Regard to Collision Impact Comparison between 2D..."
---

Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2015
Master’s Thesis 2015:87
Design with Regard to Collision Impact
Comparison between 2DOF and FE Analysis
for Collision Impact on Concrete Slabs
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
JONATAN ANDERSSON
JOHAN ANTONSSON
-5
0
5
10
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
FEM
2DOF
0
100
200
300
400
500
600
700
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
m1
v0
k1 k2
v = 0	v0
m2	m1
v0
m1
k1

-- 1 of 228 --



-- 2 of 228 --

MASTER’S THESIS 2015:87
Design with Regard to Collision Impact
Comparison between 2DOF and FE Analysis for Collision Impact on Concrete Slabs
Master’s Thesis in the Master’s Programme Structural Engineering and Building
Technology
JONATAN ANDERSSON
JOHAN ANTONSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2015

-- 3 of 228 --

Design with Regard to Collision Impact
Comparison between 2DOF and FE Analysis for Collision Impact on Concrete Slabs
Master’s Thesis in the Master’s Programme Structural Engineering and Building
Technology
JONATAN ANDERSSON
JOHAN ANTONSSON
© JONATAN ANDERSSON & JOHAN ANTONSSON, 2015
Examensarbete 2015:87/ Institutionen för bygg- och miljöteknik,
Chalmers tekniska högskola 2015
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover:
Illustration of a how a vehicle impact on a simply supported slab can be simplified in
FEM and to a 2DOF system. Comparison of response in displacement u2 and velocity
v2 over time between FEM and 2DOF, with a țmF = 0.1.
Chalmers Reproservice
Göteborg, Sweden 2015

-- 4 of 228 --

I
Design with Regard to Collision Impact
Comparison between 2DOF and FE Analysis for Collision Impact on Concrete Slabs
Master’s Thesis in the Master’s Programme Structural Engineering and Building
Technology
JONATAN ANDERSSON
JOHAN ANTONSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
During collisions between a moving object and a resisting structure, an impact load is
obtained which can act very different from a static load. Examples of such collisions
are when a structure is exposed to a vehicle crash, or if a strong wind throws an object
at it. These scenarios will create a dynamic response which can be of great importance
for the behaviour of the structure. The methods that regard collision impact in
Eurocode are very simplified and further studies of the subject are needed. Therefore,
the purpose of this master’s thesis is to evaluate how the design with regard to
collision impact between an incoming object and a reinforced concrete member, can
be carried out using both advanced and simplified methods. This thesis compares
impact loaded finite element (FE) models, with two degree of freedom (2DOF) mass-
spring systems. The resisting structure and the incoming object are simplified to have
either an elastic behaviour, or an elastic and plastic (elasto-plastic) bilinear behaviour.
The structures studied are mainly simply supported quadratic slabs.
Basic theory of dynamics and collision impact is described and a parametric study of
collisions using 2DOF is performed for the understanding of basic principles of
collision impact. It is described how beams and slabs can be transformed into a mass
and a spring, so it can be used in the 2DOF, in addition it is also described how the
used FE models are built.
When modelling a slab with FE software in this thesis, the target was first to use a
grid of beams (beam grillage), which in turn are made of 3D beam elements.
However, it appears that the beam grillage has the wrong behaviour when acting
plastically compared to both theory and alternative FE models made of shell elements.
So for slabs with elasto-plastic behaviour, shell elements are used instead. It is shown
that the 2DOF and FE models correspond well for beams, particularly when the
collision impact is in the centre of the beam and especially for elastic beams. For
elastic slabs, 2DOF and FE models correspond quite well but less so when the impact
is far from the centre. For elasto-plastic slabs however, the correspondence is not so
good, but a corresponding maximum displacement can be found between the 2DOF
and FE. It is believed that the 2DOF model can be improved in several ways, which
are discussed, to be able to fully describe the elasto-plastic behaviour of a simply
supported reinforced concrete slab.
Key words: Collision impact, impulse load, 2DOF, FEM, dynamic response,
transformation factor, beam grillage, elasto-plastic

-- 5 of 228 --

II
Dimensionering med hänsyn till kollisionsstöt
Jämförelse mellan 2DOF och FE-analys för kollisionsstöt på betongplattor
Examensarbete inom mastersprogrammet Structural Engineering and Building
Technology
JONATAN ANDERSSON
JOHAN ANTONSSON
Institutionen för bygg- och miljöteknik
Avdelningen för konstruktionsteknik
Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
Vid kollisioner mellan en kropp i rörelse och en mothållande konstruktion så kommer
en stötlast att skapas som kan agera mycket olikt en statisk last. Exempel på sådana
kollisioner är när en konstruktion blir påkört av ett fordon, eller om en stark vind får
ett objekt att flyga in i den från sidan. Dessa scenarier kommer att skapa en dynamisk
respons som kan spela en stor roll i beteendet av konstruktionen. Eurocode behandlar
kollisionsstötar med mycket förenklade metoder och mer fördjupade studier av ämnet
behövs. Därför är syftet med detta examensarbete att undersöka hur dimensionering
med hänsyn till kollisionsstöt, mellan ett inkommande objekt och en armerad
betongstruktur, kan utföras med både avancerade och förenklade beräkningsmetoder.
Denna rapport jämför stötbelastade finita element- (FE) modeller, med två
frihetsgraders (2DOF) massa-fjäder-system. Den mothållande konstruktionens och det
inkommande objektet är förenklat till att ha antingen ett elastiskt beteende, eller ett
elastiskt och plastiskt (elastoplastiskt) bilinjärt beteende. Det som studeras främst i
den här rapporten är kollisionsstöt på fritt upplagda kvadratiska betongplattor.
Grundläggande teori om dynamik och kollisionsstötar beskrivs och en parameter-
studie av kollisioner med hjälp av 2DOF genomförs för att skapa en grundläggande
förståelse av kollisionsstöt. Det är också beskrivit hur balkar och plattor kan bli
transformerade till en massa och en fjäder för användning i 2DOF, och hur de
använda FE-modellerna är uppbyggda.
Det var meningen att FE-modellerna av plattor, skulle byggas upp med ett rutnät av
balkar (balkrost), utgjorda av tredimensionella balkelement. Det visar sig dock att
denna balkrost har fel beteende när plattan plasticerar jämfört med både teori och
alternativa FE-modeller utgjorda av skalelement. Därför används skalelement för
plattor med elastoplastiskt beteende. För balkar så stämmer 2DOF och FE-modellerna
väl överens med varandra, särskilt för elastiska balkar utsatta för stöt i mittpunkten.
För elastiska plattor, så har 2DOF och FE-modellerna ganska likt beteende, men
också för dessa så skiljer modellerna sig mer från varandra ju längre stöten sker från
mitten av plattan. För elastoplastiska plattor är dock korrespondensen inte så bra, men
en motsvarande maximal nedböjning kan hittas mellan 2DOF och FE. 2DOF-
modellen kan förbättras på flera sätt, vilka diskuteras, för att mer fullständigt kunna
beskriva det elastoplastiska beteendet av en fritt upplagd armerad betongplatta.
Nyckelord: Kollisionsstöt, impulslast, 2DOF, FEM, dynamisk respons,
transformationsfaktor, balkrost, elasto-plastisk

-- 6 of 228 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2015:87 III
Contents
ABSTRACT I
SAMMANFATTNING II
CONTENTS III
PREFACE VII
NOTATIONS VIII
1 INTRODUCTION 1
1.1 Background 1
1.2 Aim and objective 1
1.3 Limitations 1
1.4 Method 2
1.5 Thesis outline 3
2 THEORY 5
2.1 Orientation 5
2.2 Basic dynamics 5
2.2.1 Force and pressure 5
2.2.2 Momentum and impulse 5
2.2.3 Work and kinetic energy 6
2.2.4 Dynamic equation of motion 7
2.3 Impact theory 8
2.3.1 Classic impact theory 8
2.3.2 Importance of mass 11
2.3.3 Energy absorption from deformation 12
2.4 Single degree of freedom systems 13
2.4.1 Orientation 13
2.4.2 Elastic response 15
2.4.3 Plastic response 16
2.4.4 Elasto-plastic response 16
2.5 Equivalent static load 17
2.5.1 Orientation 17
2.5.2 Elastic response 17
2.5.3 Plastic response 18
2.5.4 Elasto-plastic response 18
2.6 Two degrees of freedom mass-spring systems 19
2.7 Central Difference Method 21
2.8 Structural response of reinforced concrete 24
2.8.1 Orientation 24
2.8.2 Structural response of reinforced concrete beams 24
2.8.3 Structural response of reinforced concrete slabs 25

-- 7 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
IV
2.8.4 Rotational capacity 27
3 STUDY OF 2DOF COLLISION MODELS 30
3.1 Orientation 30
3.2 Without barrier 30
3.2.1 Orientation 30
3.2.2 Elastic collision 31
3.2.3 Plastic collision 35
3.2.4 Elasto-plastic collision 40
3.3 Elastic collision with barrier 44
4 TRANSFORMATION OF STRUCTURAL MEMBER TO SDOF SYSTEM 50
4.1 Transformation of beams to SDOF systems 50
4.1.1 Orientation 50
4.1.2 Conservation of kinetic energy 51
4.1.3 Conservation of external work 52
4.1.4 Conservation of internal work 53
4.1.5 Summary 53
4.2 Determination of transformation factors for a beam 54
4.2.1 Orientation 54
4.2.2 Elastic response for a point load 54
4.2.3 Plastic response for a point load 55
4.3 Transformation of slabs to SDOF systems 56
4.3.1 Orientation 56
4.3.2 Conservation of kinetic energy 57
4.3.3 Conservation of external work 57
4.3.4 Conservation of internal work 58
4.4 Derivation of transformation factors for a slab 58
4.4.1 Orientation 58
4.4.2 Elastic response for a point load 59
4.4.3 Theoretical plastic response for a point load 60
5 FE MODELLING 63
5.1 Orientation 63
5.2 Equivalent Young’s modulus 63
5.3 Elasto-plastic response for the incoming object 64
5.4 Shell elements 67
5.5 Beam elements 69
5.5.1 Beam grillage 69
5.5.2 Moment-curvature relation 70
5.5.3 Torsion-twisting relation 72
6 COMPARISON BETWEEN 2DOF AND FE MODELS 75

-- 8 of 228 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2015:87 V
6.1 Comparison for a beam 75
6.1.1 Orientation 75
6.1.2 Elastic body 1 and body 2 76
6.1.3 Elasto-plastic body 1 and elastic body 2 77
6.1.4 Elastic body 1 and elasto-plastic body 2 80
6.1.5 Discussion 83
6.2 Comparison for a slab 84
6.2.1 Orientation 84
6.2.2 Elastic body 1 and body 2 86
6.2.3 Elasto-plastic body 1 and elastic body 2 90
6.2.4 Elastic body 1 and elasto-plastic body 2 95
6.2.4.1 Orientation 95
6.2.4.2 Static study of the elasto-plastic slab model 95
6.2.4.3 Reduction of the plastic transformation factor țmF,pl 105
6.2.4.4 Comparison between 2DOF and shell element model 107
6.2.5 Discussion 115
7 FINAL REMARKS 117
7.1 Conclusions 117
7.2 Further studies 118
8 REFERENCES 119
CENTRAL DIFFERENCE METHOD A-1	APPENDIX A
RESULTS FROM 2DOF ANALYSIS B-1	APPENDIX B
B.1 Elastic response without barrier B-1
B.2 Plastic response without barrier B-6
B.3 Elasto-plastic response without barrier B-11
B.4 Elastic response with barrier B-14
2DOF AND FEM COMPARISON C-1	APPENDIX C
C.1 Elastic body 1 and body 2 for a beam C-1
C.2 Elasto-plastic body 1 and elastic body 2 for a beam C-2
C.3 Elastic body 1 and elasto-plastic body 2 for a beam C-6
C.4 Elastic body 1 and body 2 for a slab C-9
C.5 Elasto-plastic body 1 and elastic body 2 for a slab C-22
C.6 Elastic body 1 and elasto-plastic body 2 for a slab C-31
TRANSFORMATION FACTORS D-1	APPENDIX D
D.1 Transformation factors for beams D-1
D.2 Plastic transformation factors for slabs D-1

-- 9 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
VI
LOAD FACTOR ΒEL E-1	APPENDIX E
SLAB MODELLING F-1	APPENDIX F
F.1 Deformation shape for different load cases F-1
F.2 Load-displacement diagrams F-6
F.3 Plastic strain distribution for shell element model F-8
MATHCAD CALCULATIONS G-1	APPENDIX G
MATLAB ALGORITHMS H-1	APPENDIX H
H.1 2DOF algorithm H-1
H.2 Transformation factor algorithm H-3
ADINA COMMAND FILES I-1	APPENDIX I
I.1 ADINA command file for shell element model I-1
I.2 ADINA command file for beam grillage model I-3

-- 10 of 228 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2015:87 VII
Preface
In this master’s thesis, the response of a simply supported concrete structure subjected
to an impact load is evaluated, and how this can be used in design with regard to
collision impact. A comparison between a simplified method, consisting of a 2DOF
mass-spring system, and FE models is carried out.
The work has been carried out at the office of Reinertsen Sverige AB in Gothenburg
during the period of January to June 2015. This master’s thesis is a collaboration
between Reinertsen Sverige AB and the Department of Civil and Environmental
Engineering, Division of Structural Engineering, Concrete Structures research group
at Chalmers University of Technology.
We would like to thank our supervisor and examiner Adjunct Professor Morgan
Johansson for his guidance and his helpful feedback throughout the project. We would
also like to thank Reinertsen Sverige AB for the time at their office. Finally we would
like to thank our fellow thesis worker colleagues who have been our closest company
during this study.
Gothenburg, June 2015
Jonatan Andersson and Johan Antonsson

-- 11 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
VIII
Abbreviations
2DOF Two Degrees of Freedom
CDM Central Difference Method
FE Finite Element
FEM Finite Element Method
SDOF Single Degree of Freedom
Notations
Roman upper case letters
A Area
C Damping matrix
E Young’s modulus
Ecm Mean Young’s modulus for concrete
Eeq Equivalent Young’s modulus
EI Stiffness
Ek Kinetic energy
Ek,tot Kinetic energy after collision in the direction of body 2
Ek,0 Kinetic energy before collision
Ek,1 Kinetic energy for body 1 after collision
Ek,2 Kinetic energy for body 2 after collision
Es Young’s modulus for steel
F Force
Fb Force acting on a beam
Fsl Force acting on a slab
Fx Force in x-direction
F1 Force acting on body 1
F2 Force acting on body 2
G Shear modulus
I Impulse
I Moment of inertia
Ik Characteristic impulse load
K Stiffness matrix
M Moment
M Mass matrix
MRd Bending moment capacity
Mf Field moment
Ms Support moment
N Normal force
P Pressure
Q Equivalent static load
R Internal resistance
Rb Internal resistance of a beam
Rsl Internal resistance of a slab
R1 Internal resistance of body 1
R1,max Maximum internal resistance of body 1
R2 Internal resistance of body 2
R2,max Maximum internal resistance of body 2

-- 12 of 228 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2015:87 IX
Rsta Static internal resistance
Rsta,1 Static internal resistance of body 1
Rsta,2 Static internal resistance of body 2
Rdyn Dynamic internal resistance
T Torsional moment
TI Torsional moment of state I
TII Torsional moment of state II
V Shear force
VEd Design value of shear force
W Work
We External work
We,1 External work of body 1
We,2 External work of body 2
Wi Internal work
Wi,1 Internal work of body 1
Wi,1 Internal work of body 2
X Axis in global coordinate system
Y Axis in global coordinate system
Z Axis in global coordinate system
Roman lower case letters
a Acceleration
c Damping coefficient
c Concrete cover
d Effective height of the cross-section
d’ Distance from cross-section edge to compressed reinforcement
e Coefficient of restitution
f Frequency
fy Yield stress
fy,mod Modified yield stress
f Force vector
fcc Concrete compressive strength
fct Concrete tensile strength
fsy Yield stress of reinforcing steel
fsu Ultimate strength of reinforcing steel
f1 Frequency of body 1
f2 Frequency of body 2
h Time step
hb Height of a beam
hcr Critical time step
k Stiffness
kb Stiffness of a beam
ksl Stiffness of a slab
kλ Correction factor for plastic rotation capacity
k1 Stiffness of spring 1
k2 Stiffness of spring 2
k2 Stiffness of body 2
l Length
le Element length

-- 13 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
X
l0 Distance between zero and maximum moment section
lb Length of a beam
m 	Mass
mb Mass of a beam
m1 Mass of body 1
m2 Mass of body 2
n An arbitrary positive integer
p Momentum
p0 Initial momentum
q Distributed load
r Axis in local coordinate system
r Radius
s Axis in local coordinate system
t Axis in local coordinate system
t Time
t Thickness
t0 Time at start
t1 Time at unloading
∆t Time increment
∆tcr Critical time increment
u Displacement
uc Displacement in the centre of the slab
us Displacement in the system point
u1 Displacement of body 1
u2 Displacement of body 2
uel Elastic deformation
upl Plastic deformation
utot Total deformation
u Velocity
u Acceleration
1	u Acceleration of body 1
2	u	 Acceleration of body 2
∆u Deformation of spring 1
∆u Change of displacement
∆us Change of displacement in the system point
u′′(x) Curvature of a beam
v Velocity
vpl Velocity after plastic collision
v0 Initial velocity
v1 Velocity of body 1
v2 Velocity of body 2
wb Width of a beam
xu Depth of the compression zone
x Coordinate of horizontal length axis
Greek lower case letters
α Angle
α Displacement factor
α Distance between loading and support in relation to the total length

-- 14 of 228 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2015:87 XI
α Yield stress correction factor
ȕ Distance between loading and support in relation to the total length, 1 - α
ȕel Load factor
ȕshear Factor considering shear stress
Ȗ Factor for stiffness of a slab
Ȗsl Factor for stiffness of the quadratic slab at hand
Ȗ2 Factor for stiffness of an arbitrary quadratic slab
εsfsu Strain corresponding to fsu
εsy Yield strain of reinforcing steel
εsh Strain at hardening of reinforcing steel
εsu Ultimate strain of reinforcing steel
 Rotation
pl Plastic rotation
pl,d Plastic rotation capacity, design value
țF Transformation factor for the load
țk Transformation factor for the stiffness
țm Transformation factor for the mass
țmF Transformation factor for both mass and load
Ȝ Shear slenderness
υ Poisson’s ratio
ρc Concrete density
φ Angle between force and direction of displacement
φ Twisting
ω Angular frequency
Greek upper case letter
Φ Diameter of reinforcement

-- 15 of 228 --



-- 16 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 1
1 Introduction
1.1 Background
During collisions between a moving object and a resisting structure, an impact load is
obtained which can act very different from a static load. Examples of such collisions
are when a structure is exposed to a vehicle crash, when an object is dropped on it
during lifting, or if a strong wind throws an object at it.
These scenarios will create a dynamic response which can be of great importance for
the behaviour of the structure. The methods that regard collision impact in Eurocode,
CEN (2004), are very simplified and further studies of the subject are needed.
Therefore, both simplified and advanced methods have to be developed.
This study is a continuation of a previous master’s thesis, Asplund and
Steckmest (2014).
1.2 Aim and objective
The aim of this thesis is to evaluate how the design with regard to collision impact
between simply supported concrete members, mainly quadratic slabs, and incoming
objects, can be carried out using both advanced and simplified methods. The
simplified approach is made with a two degrees of freedom (2DOF) mass-spring
model, which is compared to more advanced finite element (FE) models. The FE
models are seen as reference models because they are supposed to describe the reality
better than the 2DOF model. From this comparison it can be evaluated if and when
the 2DOF model corresponds to the FE model and under which circumstances it is
not.
It is also investigated how the response of the collision depends on the structural
properties of the two objects involved. Even though it is the resisting concrete
member that is of interest, the behaviour of the incoming object can change the
overall behaviour of the collision.
In the previous master’s thesis by Asplund and Steckmest, the behaviour of a linear
elastic object colliding with a linear elastic simply supported concrete beam is
evaluated. This is further developed in this thesis by introducing elastic and plastic
non-linear (elasto-plastic) behaviour for both the incoming object and the resisting
structure. The study is then extended to regard simply supported concrete slabs, which
are of main interest, and it is evaluated whether similar concepts to that of beams can
be used when making a 2DOF model. Different ways to model a concrete slab with an
elasto-plastic behaviour are also studied, and it is checked if these models correspond
to theory and hand calculations.
1.3 Limitations
In this thesis the damping effect of both the structure subjected to the impact load and
the incoming object is neglected, since in most cases it has a small influence due to
the relatively short duration of the applied load. This will be slightly on the safe side
and unnecessary complicated calculations are avoided.

-- 17 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
2
No long-term effects such as creep or shrinkage are considered, because it is only the
parameters prior, during and after the collision impact that are of interest. For the
same reason, thermal expansion is not considered because of that the temperature
change during collision will not affect the structure sufficiently. When subjected to
impulse loading, the reinforced concrete can obtain high strain rates. These higher
strain rates can lead to a considerable increase in strength for the reinforced concrete,
this is however neglected. Also, the influence of compressive membrane action is
neglected.
A slab is significantly more complex than a beam, which gives a large number of
combinations regarding geometry, boundary conditions and placement of the load.
With regard to this, only a finite number of combinations will be investigated. To
further limit the studied number of combinations, and to avoid unnecessary
complexities, all investigated slabs and beams in this thesis will be simply supported
and without subjection to normal force.
In this thesis, no physical tests are performed and the results from the 2DOF model
are solely compared to the results from FE analysis, which is considered as describing
reality better than the 2DOF model. To avoid numerical problems and long simulation
times when modelling reinforced concrete in FE models in this thesis, the concrete
and the reinforcement are not modelled separately, but as one single equivalent
material. This equivalent material model will not give as accurate results as the
separate material model during the collision, but it is deemed to be a good enough
approximation for this study.
1.4 Method
A literature study is carried out covering the basic theory of dynamics and collisions,
mass-spring systems and the structural response of reinforced concrete. A parametric
study of several simplified dynamic 2DOF mass-spring models, that describes a
collision between an incoming object and a concrete member, are made for the basic
understanding of collision impact. These models are based on the fundamental
equation of motion and are solved with a numerical integration method, called the
Central Difference Method (CDM), in the commercial software MATLAB (2014).
This 2DOF model is also verified and compared with classic impact theory.
The 2DOF model represents two bodies where one is the resisting structure. If this
body is studied separately it is called a single degree of freedom (SDOF) model. To
be able to use the SDOF as a representation of a slab or a beam, some of its
parameters needs to be adjusted, which is done by multiplying the parameters with
transformation factors. These transformation factors are derived using energy
equations which are solved analytically for beams and numerically for slabs. The
numerical derivation uses FE analysis with the commercial software ADINA 900
nodes version, ADINA (2014), to extract the displacement of a slab, and MATLAB to
calculate the transformation factors with an algorithm that uses the derived equations.
Dynamic FE models are made in ADINA which are compared to the 2DOF model in
a collision study. In this study, the FE analysis is considered to be describing the
reality best. When comparing the results from 2DOF and FE models a number of
parameters can be evaluated. One parameter that is of special interest is the
displacement of the resisting structure over time, since it can be directly transferred to
load bearing capacity. The evaluated collisions cover different parameters for the

-- 18 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 3
incoming object and different impact locations for the resisting object so that more
general results are gained and more conclusions can be drawn.
In the FE models, the concrete and reinforcement are modelled as one single material.
The input parameters for this composite material are modified to approximately
represent reinforced concrete using hand calculations in the commercial software
Mathcad (2011).
Both beam elements and shell elements are tested for the modelling of a slab in the FE
software ADINA. When modelling a slab with beam elements, a grid of beams is used
where each beam represents one strip of the slab. These beams are created for both
directions of the slab. For the elasto-plastic behaviour of the beam elements, moment-
curvature and torsion-twisting relations and limits are manually implemented, which
is done to better control the behaviour of each beam. This manually implemented
behaviour is calculated using hand calculations in Mathcad. The beam grillage model
is tested for different torsion-twisting relations to see how the torsional stiffness
affects the slab.
In order to keep the 2DOF model regarding a slab with elasto-plastic behaviour
simple, a hand calculated yield limit based on the moment capacity of the slab is
needed, which is obtained using the strip method. The strip method is intended for
distributed load and in this thesis, it is the point loads that are of interest. Therefore,
yield lines of the slabs must be assumed and it is presumed that the yield lines go
straight from the point load to the four corners of the slab.
1.5 Thesis outline
In Chapter 2, the basic theory used in this thesis is presented. This covers basic
concepts of dynamics and impact theory, introduction to mass spring systems, the
numerical integration method CDM, and how to treat the behaviour of reinforced
concrete.
Chapter 3 contains a parametric study of different collision cases, with and without
barrier, for a 2DOF model based on the theory of Chapter 2. The parametric study is
made for the understanding of collisions and 2DOF systems and to decide which
parameters are of importance. The results from the analysis are verified and compared
to classic impact theory.
In Chapter 4, it is described how an elastic or plastic beam or slab, can be transformed
into a SDOF system with the help of so called transformation factors. The theory of
how to calculate these transformation factors and some of the derived factors is
presented.
In Chapter 5, it is defined how the FE analysis of this thesis is carried out. It contains
explanations of the equivalent Young’s modulus, how to model elasto-plastic
behaviour of the incoming object, different alternatives of how to model slabs and
elasto-plastic behaviour of beam elements.
Chapter 6 covers a brief study of impact on simply supported beams and a more
thoroughly study for simply supported slabs. This study handles both elastic and
elasto-plastic behaviour of both the resisting structure and the incoming object. It also
contains a thorough comparison between shell element modelling and beam grillage
modelling for an elasto-plastic behaviour of the slab, and interesting discoveries for
the SDOF transformation factors.

-- 19 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
4
Chapter 7 is the concluding chapter of this thesis. Here, a final discussion is presented,
which summarises the previous discussions and discoveries. A final conclusion is also
presented in this chapter and some examples of further studies.
Chapter 7.2 contains the references used in this thesis. Additional information that is
not presented in the main chapters is attached as appendices at the end.

-- 20 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 5
2 Theory
2.1 Orientation
The structural behaviour of structures can differ depending on if the applied load is
static or dynamic, especially if the dynamic load is an impact load. In many cases this
different behaviour is not taken into consideration when designing structures. Instead,
as an approximation, a static load is used which corresponds to a simplified version of
the dynamic load, Johansson and Laine (2012). This simplified load is in the form of a
static load which has a corresponding load configuration that does the same amount of
work as the dynamic load. This is called an equivalent static load.
It is important to know that a specific equivalent static load depends on a specific
dynamic load with its own conditions and the structural response of the loaded
member. If these conditions are not fulfilled it is uncertain if the static load will be
valid. This gives room for errors while trying to interpret the rules of Eurocode, CEN
(2004). This along with unclear instructions in the rules on how to translate dynamic
loads to static loads may make it difficult to make a reliable assessment for the
structure at hand. Therefore it can be necessary to have a deeper understanding of the
dynamic response of the structure.
In this chapter basic knowledge about structural dynamics, impact theory with
corresponding mass-spring system and structural behaviour of reinforced concrete
regarding impact is presented. This chapter is based on work presented in Johansson
and Laine (2012), Craig and Kurdila (2006), Al-Emrani (2011) and Engström (2014).
2.2 Basic dynamics
2.2.1 Force and pressure
The term force can be described as the ability to accelerate the mass of a body. The
relation between the force F, the mass m and its acceleration a is defined by Newton’s
second law of motion as
a	m	F 	 	(2.1)
The force per unit area is defined as pressure P
A
F
P  	(2.2)
where F is the force acting on the area A.
2.2.2 Momentum and impulse
The momentum p of a body m is defined as
v	m	p 	 	(2.3)
where v is the velocity of the body.

-- 21 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
6
If the body at hand has an initial velocity v0 and is subjected to a force F(t) during the
time period t0 ≤ t ≤ t1, the final momentum will be
					
1
0
)	(	1
t
t
0 dt	t	F	v	m	v	m	p 	(2.4)
where the change of momentum is defined as the transferred impulse I
mv	dt	t	a	m	dt	t	ma	dt	t	F	I
t
t
t
t
t
t
			 		 1
0
1
0
1
0
)	(	)	(	)	( (2.5)
and is equal to the area under the graph in a force-time diagram, see Figure 2.1.
F
t
I
F
t
F
t
F2
F3
t2 t3	t1 → 0
F1 → ∞
I
I
Figure 2.1 The impulse I is of equal magnitude in all three cases even though the
load Fi and time ti differs.
2.2.3 Work and kinetic energy
If a force F acting on a body is causing a displacement u of the body it is said that the
force has done the work W
u	F	u	F	W x 					
	cos (2.6)
where φ is the angle between the force and the direction of the displacement. The
work done is only dependent on the force Fx acting in the direction of the
displacement, see Figure 2.2a. The work done by a variable load can be expressed as
	
u
x	x dx	x	F	W
0
)	( 	(2.7)

-- 22 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 7
F
u
φ Fx x
F
F

l
M θ
a) b)
Figure 2.2 Work done by a) a force, and b) a moment.
A corresponding measurement is the work done by a moment M, defined in
Figure 2.2b as
l	F	M 	 	(2.8)
for a given rotation

		 M	W 	(2.9)
This can be expressed more generally if the moment varies with the angle α, as
	
 

	
0
)	( d	M	W 	(2.10)
The kinetic energy Ek for a body with mass m and the velocity v is defined as
2
2
v	m
Ek

 	(2.11)
Work and kinetic energy are both a measure of energy and are often used to determine
the total response in a collision analysis.
2.2.4 Dynamic equation of motion
By dividing the forces acting on a body into external forces F(t) and internal forces
R(u)sta and R( u )dyn, where the latter are referring to static respectively dynamic
internal forces, a free body diagram can be obtained, see Figure 2.3. This free body
can be expressed as a mass m, a spring with stiffness k and a damping c.
m
a
F(t) F(t)
k
c
m
u
R( u )dyn
R(u)sta
Figure 2.3 Schematic illustration of forces acting on an accelerating body.
Force equilibrium of the system in Figure 2.3 gives

-- 23 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
8
ma	u	R	u	R	t	F dyn	sta 		 )	)	(	)	(	(	)	(  	(2.12)
If the structural members are considered to behave linear elastically, the internal
forces can be expressed as
ku	Rsta  	(2.13)
u	c	Rdyn 	 	(2.14)
where u is the displacement of the body, u is the velocity and the derivative of u with
respect to time, k is the stiffness of the spring, and c is the damping factor. With
equation (2.13) and (2.14) inserted in equation (2.12) the dynamic equation of motion
can be expressed as
)	(t	F	ku	u	c	u	m 		 	 	(2.15)
where u = a is the acceleration and the secondary derivative of u with respect to time.
2.3 Impact theory
2.3.1 Classic impact theory
To explain the behaviour of an impact, a simple model of two masses, where one of
them collides with the other can be used. One such simple system is illustrated in
Figure 2.4, where one body with mass m1 and velocity v0 collides with a second body
with mass m2 and no velocity. After the collision the first body has the velocity v1 and
the second body has the velocity v2.
m1 m2
v0
Before impact
m1 m2
v2
After impact
v = 0
v1
Figure 2.4 Example of an impact between one moving and one still body.
The momentum and kinetic energy before the collision is stated as the momentum and
kinetic energy for the first mass
0	1	0 v	m	p 	 	(2.16)
2
2
0	1
k,0
v	m
E 
 	(2.17)
and after the collision they are

-- 24 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 9
2	2	1	1 v	m	v	m	p 			 	(2.18)
2	2
2	2
2	2	1	1
k
v	m	v	m
E 


 	(2.19)
The impact procedure can be divided into two extreme cases named elastic collision
and plastic collision. For an elastic collision both the momentum and the kinetic
energy is preserved, which means that Ek,0 = Ek and p0 = p, and the velocities after
collision can be derived as
0
2	1
2	1
el	1, v
m	m
m	m
v 


 	(2.20)
0
2	1
1
el	2, v
m	m
m
v 

 2 (2.21)
From this it can be noted that v1,el < 0 if m1 < m2. The kinetic energy for the two
bodies after collision is then
,0	k
2	1
2	1
0
2	1
2	1	1	el	1,	1
el	1	k E
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
2	2	2
,	, 2	2 (2.22)
 	 0	k
2	1
2	1
0
2	1
1	2	el	2,	2
el	k,2, E
m	m
m	m
v
m	m
m	m	v	m
E ,	2
2	2
4	2
2	2 







 



 (2.23)
From this, the total kinetic energy after collision Ek,el,tot that is acting in the same
direction as body 2 (positive direction) can be stated as




	

2	1	el	k,2,
2	1	el	k,2,	el	k,1,
tot	el	k m	m	,	E
m	m	,	E	E
E ,	, (2.24)
For a plastic collision only the momentum is preserved during the collision. The
kinetic energy lost during the impact depends on the kinetic energy transformed to
potential energy in body 1, when body 1 is doing a plastic work in the contact area
towards body 2. The two bodies then have a common velocity which is stated as
0
2	1
1
pl	2,	pl	1,	pl v
m	m
m
v	v	v 

		 	(2.25)
Thus, the total kinetic energy after collision is
 	 k,0
2	1
1
0
2	1
1	2	1	pl	2	1
tot	pl	k E
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
2	2
,	, 2	2 (2.26)

-- 25 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
10
To be able to describe elastic and plastic collisions, a coefficient of restitution e, is
introduced. The coefficient of restitution is defined as
0
1	2
v
v	v
e 
 	(2.27)
If e = 1 it is an elastic collision and if e = 0 it is a plastic collision and if 0 < e < 1 it is
something in between. The velocities after collision when 0 ≤ e ≤ 1 can be stated as
0
2	1
2	1
1 v
m	m
m	e	m
v 

	
 	(2.28)
0
2	1
1
2 	v
m	m
m	e)	(
v 	

	
 1 (2.29)
and the corresponding kinetic energy for the two separate bodies are
2
2
1	1
k,1
v	m
E 
 	(2.30)
2
2
,
2	2
2	k
v	m
E 
 	(2.31)
The total kinetic energy can then for any e be stated as



	

 0
0
,
1	k,2	k,1
1	k,2
tot	k v	,	E	E
v	,	E
E 	(2.32)
An energy ratio Ek,tot / Ek,0 between the kinetic energy before and after the collision
can be determined for different e and different mass ratios m1 / m2. This is illustrated
in Figure 2.5, where it can be seen that the type of collision which depends on e and
the mass ratio m1 / m2 plays a large role in how much of the kinetic energy in the
positive direction is being preserved.
If m1 < m2 for an elastic collision, body 1 will move in the opposite direction
compared to body 2, which means that v1,el < 0. If the preserved kinetic energy in the
positive direction for this elastic collision is divided with the preserved kinetic energy
from the corresponding plastic collision, the following can be stated
1
4	4
,	,
,	,




2
1	2	1
2
tot	pl	k
el	2	k
m
m	m	m
m
E
E
(2.33)

-- 26 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 11
Figure 2.5 Energy ratio Ek,tot / Ek,0 as a function of the mass ratio m1 / m2 for e = 1
(elastic), e = 0.25, e = 0.5, e = 0.75 and e = 0 (plastic).
So, when m1 / m2 → 0, the elastic collision preserves a kinetic energy in the positive
direction that is four times larger than the plastic collision. Also, when m1 / m2 = 1, the
preserved kinetic energy in the elastic case is two times larger than for the plastic
case. As illustrated in Figure 2.5, elastic and plastic collision preserve the same
kinetic energy when m1 / m2 ≈ 100 or larger.
From this it can be concluded that there may be a considerable difference between
elastic and plastic collision. To assume elastic collision gives results on the safe side,
though it can be excessive. On the contrary, the assumption of plastic collision can
give results on the unsafe side.
2.3.2 Importance of mass
According to Section 2.2.2, the impulse I can be stated as
v	m	I 	 	(2.34)
and the kinetic energy for the same body is
2
2
v	m
Ek

 (2.35)
Using equation (2.34) and (2.35) the kinetic energy can be stated as a function of the
impulse and the mass
m
I
Ek 2
2
 	(2.36)
0.0
0.2
0.4
0.6
0.8
1.0
0.001 0.01 0.1 1 10 100 1000
Ratio of kinetic energy,
 Ek,tot
 / Ek,0 [-]
Mass ratio, m1 / m2 [-]
e = 1
e = 0.75
e = 0.5
e = 0.25
e = 0

-- 27 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
12
As can be seen, a higher mass gives a lower need for energy absorption. This can be
compared with Newton’s second law of motion
a	m	F 	 	(2.37)
where it can be seen that a higher mass generates a lower acceleration, and therefore
also a lower response for the exposed body.
During a collision impact, a large load is acting during a very short time. In such a
case, it may be more relevant to study the collision impulse, than the magnitude of the
load. In Figure 2.6 a plastic collision is illustrated, where m1 for example can be a
simplification of a colliding vehicle, and m2 the resisting structure.
m1 m2
v1
Before impact
m1 m2
v2
After impact
v = 0
Figure 2.6 A schematic illustration of a plastic collision.
In Section 2.3.1, the preserved kinetic energy after a plastic collision is stated as
 	 k,0
2	1
1
0
2	1
1	2	1	pl	2	1
tot	pl	k E
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
2	2
,	, 2	2 (2.38)
which means that Ek,pl,tot < Ek,0. This can be explained by kinetic energy being
transformed into potential energy within body 1. As can be seen in equation (2.38) a
larger mass of body 2 m2 generates a lower preserved kinetic energy and therefore a
larger potential energy, which for collisions is seen as advantageous.
2.3.3 Energy absorption from deformation
Civil engineers are used to static models where a structure is supposed to withstand a
load with limited deformations, Johansson and Laine (2012). In such static cases the
stiffness and the load capacity are critical for design. However, when the structure is
subjected to a large impulse load, the maximum static load capacity is often reached
and it is therefore necessary to use the resilience of the structure in the design instead.
As can be seen in equation (2.6) the ability to absorb energy in a structure is a
combination of force and deformation. This means that for a structural member
subjected to an impulse load, it is often more important for the structure to be able to
deform, than to have a high stiffness and load capacity, see Figure 2.7.

-- 28 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 13
R
u
u1 u2
R1
Wi,1
R2
Wi,2
Wi,2 > Wi,1
Figure 2.7 Comparison in work absorption between a structure with low stiffness
and high ability to deform, and a structure with high stiffness and low
ability to deform.
The structural response in this thesis is studied with three types of simplified
responses: linearly elastic response (elastic response), ideal plastic response (plastic
response) and a combination of elastic and plastic response (elasto-plastic response),
see Figure 2.8. These simplifications are good approximations for many kinds of
structures and are easily understood, Johansson and Laine (2012).
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
Rpl
a) b) c)
Figure 2.8 Structural response with assumption of a) linear elastic response,
b) ideal plastic response, and c) elasto-plastic response.
2.4 Single degree of freedom systems
2.4.1 Orientation
When a simplified model for a dynamically loaded structure is requested, or as in this
thesis a reinforced concrete member, a single degree of freedom (SDOF) system can
often be used. In Figure 2.9 a SDOF model is illustrated where F(t) is a load varying
with time, R(u) represents the static internal resistance and c is the damping
coefficient. Damping reduces the amplitude of vibration over time. Usually when
designing with regard to collision impact it is the maximum amplitude of vibration
that is of interest. The influence of the damping effect is negligible for short
collisions, and hence the damping will be neglected in this thesis.

-- 29 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
14
F(t)
c u	R(u)
m u
F(t)
R(u)
m u
Figure 2.9 A SDOF system where the effect of damping c is neglected.
According to Johansson and Laine (2012) there are two extreme ways to describe
dynamic loads, which are illustrated in Figure 2.10. The first is to use a characteristic
impulse for an ideal impulse load, which means infinite high pressure acting at an
infinitesimal short time. The second is to use a characteristic pressure load, with zero
rise time, for an eternal shock wave.
Load, F
Time, t
Ik
t0
Load, F
Time, t	t0
Fk
a) b)
Figure 2.10 The two dynamic extreme cases where t0 is the starting time
a) characteristic impulse Ik, and b) characteristic pressure load Fk. In
both cases, the load rise time is zero.
In this thesis only characteristic impulse load Ik is used because of the relatively short
duration of the studied loads.
To stop the kinetic energy Ek, initiating the motion of a body, an equally large internal
work Wi is needed. The kinetic energy Ek can be approximated as the external work
We if there is no barrier. This means that
e	i W	W  	(2.39)
where
k	e E	W  	(2.40)
and as described in Section 2.3.2
m
I
E	W k
k	e 2
2
	 	(2.41)

-- 30 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 15
Wi is solved differently depending on whether elastic, plastic or elasto-plastic
response is assumed.
2.4.2 Elastic response
For an elastic response, the stiffness k is constant, and the inner resistance R(u) can be
stated as
  ku	u	R  (2.42)
where u is the deformation. Using this, the internal work Wi can now be calculated as
the marked area in Figure 2.11b.
 
2	2
2
el	el	el
i
ku	u	u	R
W 

 	(2.43)
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
Figure 2.11 A SDOF system with elastic response a) dynamic SDOF system,
b) force-deformation relation where the resistance force is linear, and
c) energy balance between internal and external work.
A combination of Wi = Ek and equation (2.43) gives the elastic deformation uel
	m
I
u k
el  (2.44)
where ω is the angular frequency defined as
m
k
	
 	(2.45)
This gives the angular frequency in rad/s, but it can also be expressed in Hz as
m
k
f

	

2
1
2 	 	(2.46)

-- 31 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
16
2.4.3 Plastic response
For a plastic system R(u) is constant, which is illustrated in Figure 2.12b. The internal
work can thus be stated as
 	 	pl	pl	pl	i Ru	u	u	R	W 		 (2.47)
Where upl is the plastic deformation that is needed for the system to absorb the
external work We, see Figure 2.12c.
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
Figure 2.12 A SDOF system with plastic response a) dynamic SDOF system,
b) force-deformation relation where the resistance force is constant,
and c) energy balance between inner and external work.
The plastic deformation can thus be derived by a combination of equation (2.41) and
(2.47) as
mR
I
u k
pl 2
2
 	(2.48)
2.4.4 Elasto-plastic response
For an elasto-plastic system, a bilinear relation between resistance force and
deformation is sought. This relation is stated as
  





el,1
,1	el
u	u	,	R
u	u	,	ku
u	R 	(2.49)
where uel,1 is the limit for the elastic response. The internal work for the elasto-plastic
response can be calculated as the area marked in Figure 2.13b, which is
 		pl,1	el,1	i u	u
R
W 2
2 	 	(2.50)

-- 32 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 17
where upl,1 is the required plastic response for an elasto-plastic system whereas upl is
the pure plastic response for a plastic system.
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
Figure 2.13 A SDOF system with elasto-plastic response a) dynamic SDOF system,
b) force-deformation relation where the resistance is bilinear, and
c) energy balance between internal and external work.
The required plastic deformation can be stated by combining equation (2.41) with
equation (2.50) as
2	2
,
2
1,
1	el	k
pl
u
mR
I
u 	 	(2.51)
Because of the pure plastic deformation as in equation (2.48), and the total
deformation as in Figure 2.13b, the total deformation can be stated as
2
,1	el
pl	tot
u
u	u 	 	(2.52)
2.5 Equivalent static load
2.5.1 Orientation
In many cases it is more convenient to work with static loads instead of dynamic
loads. Hence there is an interest in translating the dynamic loads into an equivalent
static load. This simplified equivalent static load is considering a static load which
does the same amount of external work as the dynamic load Johansson and
Laine (2012).
2.5.2 Elastic response
The equivalent static load Q is obtained, for an elastic system, by combining the
relationship
2
el
e
Qu
W  	(2.53)

-- 33 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
18
with equation (2.43)
2
2
el
e
ku
W  	(2.54)
Q can be written as
el	ku	Q  	(2.55)
Combining equation (2.44), (2.45) and (2.55) gives
	k	k I
m
k
I	Q 	 	(2.56)
This is the static equivalent load Q which corresponds to the load that generates the
same displacement as the impulse Ik.
2.5.3 Plastic response
For a case with plastic response the static equivalent load Q can be determined by
setting the external work in equation (2.41) equal to
pl	e Qu	W  	(2.57)
This gives
pl
k
u	m
I
Q 
 2
2
(2.58)
which combined with equation (2.48) gives
R	Q  (2.59)
where R is the resisting force obtained from the maximum allowed displacement upl.
2.5.4 Elasto-plastic response
An elasto-plastic response is a combination of elastic and plastic response. This means
that the equivalent static load is, as for the case with plastic response, determined by
R	Q  (2.60)
but here is R determined by the elastic stiffness k, via the resulting elastic deformation
u1,el from equation (2.49) and the allowed plastic deformation u1,pl from
equation (2.52).

-- 34 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 19
2.6 Two degrees of freedom mass-spring systems
In this section, results from different collision scenarios using two degrees of freedom
(2DOF) mass-spring systems are presented and evaluated. Additional results are also
presented in Appendix B. The calculations are made using the Central Difference
Method described in Section 2.7 in the commercial software MATLAB. For the code,
see Appendix H.1. For more collision scenarios and additional studies and evaluation,
see Asplund and Steckmest (2014).
A 2DOF system is a system where two separate displacements can occur. In this
thesis is a 2DOF system referring to a mass-spring system consisting of two bodies
with corresponding displacements which can be used as a simplified method to
describe collisions, see Figure 2.14. The viscous damping forces are neglected as
discussed in Section 2.4.1.
v0
m1 m2
R1(u1,u2,t) R2(u2,t)
u1 u2
m1
F1(t)
R1(u1,u2,t) m2
F2(t)
R2(u2,t)
u2	u1
Figure 2.14 Illustration of a 2DOF mass-spring system which is used to analyse
collisions in this thesis.
This system of two bodies and springs are able to express the behaviour of the bodies
during the entire collision, compared to the classic impact theory described in
Section 2.3.1, which only express the behaviour before and after the collision.
It is possible to derive the dynamic equation of motion, described in Section 2.2.4 for
a SDOF system, of the mass-spring system in Figure 2.14 by applying Newton’s
second law of motion. A free body diagram of the mass-spring system is presented in
Figure 2.15.
Rsta,1
m1
1	u
F1 Rsta,1 Rsta,2
m2
2	u
Figure 2.15 Free body diagram of a 2DOF mass-spring system.
Force equilibrium of the free body diagram gives
1	1	sta,1	1 	u	m	R	F 				: 	(2.61)
2	2	sta,2	sta1 	u	m	R	R 				: 	(2.62)
If the structural members are considered having a linear elastic response the internal
forces Rsta can be expressed as
 		2	1	1	sta,1 	u	u	k	R 		 	(2.63)
2	2	sta,2 u	k	R  	(2.64)

-- 35 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
20
where u is the displacement of the body, u is the acceleration, and the secondary
derivative of u with respect to time, and k is the stiffness of the spring. By inserting
equation (2.63) and (2.64) into equation (2.61) and (2.62) the dynamic equation of
motion for the two bodies can be expressed as
 	 1	2	1	1	1	1 F	u	u	k	u	m 			 (2.65)
 	 0				 	2	1	2	1	1	2	2 	k	k	u	u	k	u	m 	 	(2.66)
which can be written on matrix form as
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
0	0
0 	1
2
1
2	1	1
1	1
2
1
2
1 	F
u
u
k	k	k
k	k
u
u
m
m

 (2.67)
and with symbolic matrix notations as
f	Ku	u	M 		 	(2.68)
where M is the mass matrix, K is the stiffness matrix, u is the displacement vector, u
is the acceleration vector and f is the load vector.
In this thesis, the mass in Figure 2.16a is referred to as body 1 and the mass in
Figure 2.16b is referred to as body 2.
m1
k1 k2
m2
a) b)
Figure 2.16 Illustration of a) body 1 with mass m1 and stiffness k1, and b) body 2
with mass m2 and stiffness k2.
The change of internal work dWi of the bodies are defined as the internal resistance
force R of the body times the change in displacement du, i.e.
1	1	i,1 du	R	dW 	 	(2.69)
2	2	i,2 du	R	dW 	 	(2.70)
In the same way, the change of external work dWe of the bodies are defined as the
external load F times the change in displacement du. In this thesis body 1 has an
initial velocity v0 and F1 = 0 which means that the external energy is equal to the
kinetic energy of body 1 We,1 = Ek,1 before collision. The external force acting on
body 2 is equal to the internal resistance force of body 1 F2 = R1 which gives
0	, 	1	e	dW 	(2.71)

-- 36 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 21
2	1	e,2 du	R	dW 	 	(2.72)
2.7 Central Difference Method
There are several methods that are used to numerically solve the dynamic equation of
motion. The Central Difference Method (CDM) is one of the most fundamental of
these and it is widely used because it is an exceedingly simple method to describe,
and it is a second-order accurate algorithm. Experience in actual engineering
problems suggests that second-order accurate techniques are required in many
applications, see Craig and Kurdila (2006). If the dynamic equation of motion,
equation (2.15), is written with symbolic matrix notations it becomes
)	(t	f	u	K	u	C	u	M 			 	 	(2.73)
If u(tn) = un is stated, where tn is the time at iteration n, the velocity n	u at the time tn
can be written as
h
n	n
n 2
1	1 	 
 u	u
u 	(2.74)
where h is the chosen time step. As can be seen, the derivative at time tn in equation
(2.74) is an approximation based on the slope of the line between u(tn-1) and u(tn+1),
see Figure 2.17. To maintain this order of approximation the velocity can be written
for step n + 1/2 as
h
n	n
n
u	u
u 
 

1
2/1	
 	(2.75)
and for step n - 1/2 as
h
n	n
n
1
2/1



 u	u
u 	(2.76)
The value of the acceleration n	u , can then be stated as
2
1	1	2/1	2/1 	2
h	h
n	n	n	n	n
n
			 		


 u	u	u	u	u
u 	
 	(2.77)
which is illustrated in Figure 2.17.

-- 37 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
22
t
u
t-h
un-1
un+1
n	u
t t+h t
t
2	1/	n	u 	

u
n	u
2	1/	n	u 	

t+h/2	t-h/2
Figure 2.17 Illustration the approximate calculation of the velocity n	u and the
acceleration n	u .
If equation (2.74) and (2.77) is inserted in equation (2.73) it can be formulated as
)	(
2
2
2 1	2	2	1	2 	t
h	h	h	h	h n	n	n 	f	u
C	M
u
M
K	u
C	M 	




 		




 		




  		 	(2.78)
which can be rewritten as





 




 		




 		




 	 	

 	1	2	2
1
2	1 2
2
)	(
2 n	n	n h	h	h
t
h	h u
C	M
u
M
K	f
C	M
u 	(2.79)
The damping is in this thesis neglected due to its small effect on the system during the
studied time, as discussed in Section 2.4.1. Without the damping, equation (2.79) can
be written as

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
	




 		





 	

 	1	2	2
1
2	1
2
)	( n	n	n h	h
t
h u
M
u
M
K	f
M
u 	(2.80)
When observing equation (2.80) it can be seen that the displacements un-1 when n = 0
is needed. It can be stated as
0
2
0	0	1 2 u	u	u	u 		 h
h 			 	(2.81)
The CDM algorithm is conditionally stable, which in this case means that the method
is stable provided that the time step h is selected to be smaller than a critical step size
hcr. According to Johansson and Laine (2012), the critical step size can be stated as
k
m
hcr 2
2 	
 (2.82)
When solving a SDOF or 2DOF system, an even lower step size is most often needed,
and a step size that is one hundredth of the load duration t1 – t0 is often valid, where t0
is the time at the start of the loading. That is, the step size should fulfil

-- 38 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 23





	
100
0	t	t
h
h 1
cr
(2.83)
When deriving equation (2.80), constant stiffness matrix K is used. However, it is
possible to use the CDM with these matrices varying over time. For the stiffness, this
is done by letting the time varying k(t) be a function of the current displacements u(t),
see Figure 2.18. This is a secant stiffness and it can be stated as tk = tk(tu). In practice,
the actual concern is not the stiffness, but the internal force tR which is defined as
u	k	R t	t	t 	 (2.84)
u
R
u(tk)
R(ti)
k(u(ti)) k(u(tj))
u(ti) u(tj)
k(u(tk))
R(tj)
Figure 2.18 Secant stiffness k at time t for a system with an arbitrary response.
The stiffness at unloading can be modelled in the same way. For a plastic response, it
is possible to model the loading and unloading with a desired linearly elastic stiffness,
and then at a certain yield-stress, use the secant stiffness instead, see Figure 2.19.
u
R
k(u(tj-∆t))
u(tj-∆t)
R(u(tj-∆t))
k(u(t0))
k(u(tj))
R(u(tj))
u(tj)
Figure 2.19 Stiffness at unloading for a system with plastic properties.
The CDM is an explicit numerical integration method, but in this thesis when using
the commercial FE software ADINA (2014), implicit numerical integration is used.
This decision is based on a study in Carlsson and Kristensson (2012) where the
explicit and implicit integration methods in ADINA are compared to hand
calculations. For a summarised step by step algorithm of how to use the Central
Difference Method, see Appendix A.

-- 39 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
24
2.8 Structural response of reinforced concrete
2.8.1 Orientation
A reinforced concrete member can be considered as a composite of concrete and
reinforcement where concrete has a high compressive strength and the reinforcement
has a high tensile strength, Al-Emrani (2011). For an impact loaded structure, the
ductility is of great importance and the ductility of a composite is dependent on the
properties of the involved materials. Concrete is a brittle material whereas
reinforcement steel is ductile, see Figure 2.20 and Figure 2.21 respectively. Therefore
the ability of reinforced concrete to show a ductile behaviour highly depends on the
properties of the reinforcement steel.
σ
ε
fct
fcc
Compression
Tension
Figure 2.20 Stress-strain behaviour of concrete showing tensile strength fct and
compressive strength fcc.
fsy
fsu
s,fsu	
su


sy	
sh
Figure 2.21 Stress-strain behaviour of reinforcement steel showing yield stress fsy,
ultimate strength fsu, yield strain εsy, strain at hardening εsh, and strain
at ultimate strength εs,fsu.
2.8.2 Structural response of reinforced concrete beams
During increased loading of a reinforced concrete beam, different states are studied.
State I is the uncracked state where no cracking has occurred and the beam has a
linear elastic behaviour with primarily concrete properties. During state II the beam
starts to crack and the reinforcement has an increasing importance for the behaviour.
State III is the phase when the reinforcement starts to yield and the end of state III is
the ultimate state for which the beam is designed. After state III the reinforcement of

-- 40 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 25
the beam can be subjected to some strain hardening before the maximum capacity is
reached. These states can be described using a simplified, bilinear, elasto-plastic
model where the elastic part is based on a fully cracked beam and the elastic part on
the ultimate state, see Figure 2.22.
Deflection, u
Load, q
State I
State II
Strain hardening
u
q
State III
Simplified response
Plastic	Elastic
uel upl
Stiffness of cracked
concrete (State II)
Figure 2.22 Stress-strain behaviour of a simply supported reinforced concrete beam
subjected to uniformly distributed load, illustrating the different
response stages and a simplified response.
2.8.3 Structural response of reinforced concrete slabs
A slab is a structural member with a thickness relatively small in relation to its length
and width. In Eurocode 2, CEN (2004), it is stated that a slab has a ratio between
width and thickness not smaller than five. There are three main types of slabs found in
the literature: one-way slabs, two-way slabs and cantilever slabs. The first two slab
types carries the load in one and two directions, respectively, and are supported on
two or more edges. It is also possible with intermediate supports such as columns. The
edges of slabs may be simply supported, partly fixed, fixed or free. Cantilever slabs
also carry the load in one direction since they are only supported on one edge,
Engström (2014). A slab is significantly more complex than a beam, which gives a
large number of combinations regarding geometry, boundary conditions and
placement of loads.
There are different methods of how to design according to moment distribution and
deformations in the ultimate limit state. The strip method, which is a lower bound
method, and the yield line method, which is an upper bound method, are two
commonly used approaches, Engström (2014). Both methods are based on the plastic
capacity of the slab.
The plastic capacity of a slab will first be reached in the most stressed point where a
plastic hinge is formed. For a simply supported rectangular slab subjected to a
uniformly distributed load the most stressed point is located in the centre and this is
where the hinge will form. The hinge will spread along a yield line and branch off to

-- 41 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
26
the corners and form a mechanism after which the slab cannot carry any increased
loading, see Figure 2.23, Hultin (1994). For each slab a yield figure must be assumed
and the capacities can be determined by equilibrium equations, which are different
between the two methods.
Figure 2.23 Illustration of how a plastic hinge is formed in the centre of a simply
supported rectangular slab subjected to uniformly distributed load and
how the yield line develops towards the corners.
In this thesis the yield figure assumed for a slab subjected to a point load is based on
the same principles as for a slab subjected to a uniformly distributed load, as
illustrated in Figure 2.23, Johansson (2014).
A A
Figure 2.24 Illustration of how the yield lines are assumed to from at simply
supported slabs subjected to a point load in the centre.
The hand calculated capacities of the slabs in this thesis are calculated with the
principles of the strip method. But instead of calculating the required amount of
reinforcement for a given load, the ultimate load capacity is calculated for a given
reinforcement. The moment capacity Mx of the simply supported slab in Figure 2.24 is
defined with the strip method in the same manner as for a slab subjected to a
uniformly distributed load, as illustrated in Figure 2.25. The strip method is described
in Engström (2014).

-- 42 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 27
b A
a
Mx
Mx
q
Mx
P
Figure 2.25 Illustration of how the moment capacity Mx for a slab subjected to a
point load is defined in the same manner as for a slab subjected to a
uniformly distributed load.
For all strip method calculations with point loads in this thesis, the yield lines are
assumed to stretch from the point of loading to the corners, see Figure 2.26.
Figure 2.26 Illustration of how the yield lines are formed at a simply supported
quadratic slab subjected to an arbitrary point load.
2.8.4 Rotational capacity
When the load capacity of a structure is evaluated with a plastic or elasto-plastic
response it is often the allowed deformation u that is the governing factor. Hence it is
needed to calculate the deformation u to find the structural capacity. It is also needed
to calculate the deformation u to determine the equivalent load Q, as described in
Section 2.5. It is possible to calculate the deformation with the rotational capacity
 of
the structure, which is a measure of the structure’s ability for plastic redistribution, see
Figure 2.27. This rotational capacity is calculated in the point where a plastic hinge is
formed. A plastic hinge is where a critical section experience substantial deformations
when subjected to a bending moment, provided that the ductility of the reinforcing
steel is sufficient, for a slab this critical section is along a yield line. It does not mean
that the load bearing capacity in the structural member is reached. In fact, if the
structural member is statically indeterminate it can carry more load until another
plastic hinge is formed. A collapse mechanism in beams consists only of a critical
number of plastic hinges, whereas for slabs a yield line is needed. When the number
of critical plastic hinges is reached or a yield line is formed a collapse mechanism is
formed, Johansson and Laine (2012).

-- 43 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
28
θ2	θ1
Figure 2.27 Plastic rotation
i of a continuous beam, where
i should not exceed the
rotational capacity
pl.
A method to calculate the rotational capacity for dynamic load cases is stated in
Eurocode 2 CEN (2004). The rotational capacity is here dependent on concrete and
reinforcement class, see Figure 2.28.
xu / d [-]
pl,d [10 -3 rad]
Crushing of
concrete	Failure of
reinforcement
Class C
Class B
Figure 2.28 Design value for the plastic rotation capacity
pl,d for different
concrete and reinforcement steel classes according to Eurocode 2
CEN (2004). The limit between reinforcement and concrete failure is
visualized for concrete class C50/60 and reinforcement class C.
There is however a restriction regarding the reinforcement for the relationship
presented in Figure 2.28 and for concrete classes ≤ C50/60 it is xu / d ≤ 0.45 and
xu / d ≤ 0.35 for classes > C50/60.
The relationship presented in Figure 2.28 is only valid for shear slenderness Ȝ = 3.0.
For other values of the shear slenderness the plastic rotational capacity presented in
Figure 2.28 should be multiplied by a correction factor kλ
pl	d	pl k	

	  		, 	(2.85)
where
3

 	k 	(2.86)
and the shear slenderness is defined as

-- 44 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 29
d
l0
	
 	(2.87)
where l0 is the distance between the considered maximum moment section and the
adjacent zero moment section after plastic redistribution, and d is the effective depth
of the cross-section. As a simplification the shear slenderness Ȝ may be estimated as
d	V
M
Ed
Ed

	
 	(2.88)
where MEd is the design value of the bending moment and VEd is the design value of
the shear force, Engström (2011).
It is possible to calculate the maximum deformation upl,d which the structural member
can withstand with the plastic rotation presented in equation (2.85). According to
Eurocode 2, for a simply supported beam that is subjected to either a uniformly
distributed load or a point load in the mid-span, the maximum deformation can be
calculated as
2
,
,
l
u d	pl
d	pl


 (2.89)
where l is the length of the span.
There are other design codes that give recommendations for how to calculate
rotational capacity. In Johansson and Laine (2012) a comparison between the
recommendations given in Betonghandboken Cederwall (1990), Bk25:2
Fortifikationsförvaltningen (1973) and Eurocode 2 is made.

-- 45 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
30
3 Study of 2DOF Collision Models
3.1 Orientation
This chapter covers a parametric study of collisions for a 2DOF model. This 2DOF
model is used throughout this thesis and is made with the Central Difference Method
in the commercial software MATLAB, see Appendix H.1.
In Section 3.2 are collisions without a barrier analysed, and in Section 3.3 are
collisions with a barrier analysed. The barrier is in the form of an additional spring
which is attached to body 2 at one side, and attached to a fixed support at the other
side.
3.2 Without barrier
3.2.1 Orientation
In this section, elastic and plastic response will be studied for a 2DOF system where
only body 1 has a spring; i.e. body 2 is free without any barrier preventing the
movement. This system is then easily compared to a collision according to classic
theory, see Figure 3.1. In Section 2.3.1, two bodies are studied before and after
collision with classic impact theory.
Classic impact theory 2DOF system
m1 m2
v0 v = 0 v0
m1 m2
k1
v = 0
Figure 3.1 Schematic illustration of how the classic impulse theory can be
modelled using a 2DOF mass-spring system.
An important difference between the two models is that the 2DOF system can
describe the whole course of the collision, prior to, during and after the impact while
the classic impact theory only is capable of describing the velocities before and after
the collision. The response of a collision between two bodies, according to the classic
impact theory is presented in Figure 3.2 for elastic cases, e = 1, and plastic cases,
e = 0.
Two points on both the elastic and the plastic response curve are chosen to be further
evaluated in this section. These points correspond to a mass ratio m1 / m2 of 0.2 and 2,
see Figure 3.2. Ek,tot and Ek,0 are defined as described in Section 2.3.1. The analyses
are made with the 2DOF algorithm in Appendix H.1.

-- 46 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 31
Figure 3.2 Points of interest for the elastic and plastic cases in the classic impact
theory for further studies. Marked mass ratios m1 / m2 are 0.2 and 2.
3.2.2 Elastic collision
The parameters for the evaluation of the elastic response of a 2DOF system without
barrier are chosen so that the mass ratios m1 / m2 are equal to the chosen points of
interest in Figure 3.2. The mass ratios are met by having a constant mass of body 2 m2
and vary the mass of body 1 m1. Here, m2 = 7 500 kg is symbolising a reinforced
concrete member, while m1 = 1 500 kg and m1 = 15 000 kg are symbolising a car and
a lorry, respectively. In addition to the difference in mass, a change in stiffness of
spring k1 is also considered. The initial velocity v0 is set to 27.8 m/s, which
corresponds to a velocity of 100 km/h. The input parameters of collision A1-A4 can
be seen in Table 3.1.
Table 3.1 Input parameters for collision A1-A4 with elastic response for the
2DOF system.
Case v0
[m/s]
k1
[kN/m]
m1
[kg]
m2
[kg]
Collision A1 27.8 100 1 500 7 500
Collision A2 27.8 100 15 000 7 500
Collision A3 27.8 1 000 1 500 7 500
Collision A4 27.8 1 000 15 000 7 500
The two bodies involved in the collision should only interact when there is a
compressive force in the spring, which means that the tensile response of the spring
must be excluded. This is done by setting a linear elastic response of the spring when
0.0
0.2
0.4
0.6
0.8
1.0
0.001 0.01 0.1 1 10 100 1000
Ratio of kinetic energy,
 Ek,tot
 / Ek,0 [-]
Mass ratio, m1 / m2 [-]
e = 1
e = 0

-- 47 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
32
the deformation ∆u = u1 – u2 is positive and a stiffness of zero when the deformation
is negative, see Figure 3.3.
∆u = u1 – u2
R
k1
Figure 3.3 Illustration of how the spring stiffness k1 varies with the deformation ∆u
for an elastic case.
In Table 3.2 the 2DOF analysis of collision A1-A4 are compared to calculations
according to classic impact theory described in Section 2.3.1. After testing different
time steps h for the 2DOF model it is concluded that smaller time steps give results
closer to the classic impact theory. In this section, a time step of h = 1 ms is used for
the 2DOF model which gives identical results between the two theories. As can be
observed in Table 3.2 collision A1 and A3 give the same results. This is due to the
fact that the stiffness k does not affect the final velocities v after the collision, but only
the behaviour during the collision. This is also the case for collision A2 and A4. For
collision A1 and A3, I1 < 0, which means that body 1 moves in the negative direction
after the collision and that body 2 has a larger impulse than the initial impulse, I2 > I0.
For all four collisions is the total impulse preserved.
Table 3.2 Comparison of results between the 2DOF system and the classic impact
theory with elastic response, collision A1-A4.
Collision A1 and A3 Collision A2 and A4
2DOF Classic theory 2DOF Classic theory
v0 [m/s] 27.80 27.80 27.80 27.80
v1 [m/s] -18.53 -18.53 9.27 9.27
v2 [m/s] 9.3 9.3 37.1 37.1
Ek,0 [kJ] 580 580 5 796 5 796
Ek,tot [kJ] 322 322 5 796 5 796
I0 [kNs] 41.70 41.70 417 417
I1 [kNs] -27.80 -27.80 139.05 139.05
I2 [kNs] 69.75 69.75 278.25 278.25
The displacement u, velocity v, internal resistance R and impulse I as a function of
time for collision A1 are illustrated in Figure 3.4. In collision A1, the mass of body 1

-- 48 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 33
is less than the mass of body 2, i.e. m1 < m2. As discussed in Section 2.3.1 body 1 will
move in the opposite direction after the collision, as can be seen by the negative
displacement in Figure 3.4a. This is also shown in Figure 3.4b where body 1 receives
a negative velocity after the collision while body 2 moves in the positive direction.
The duration of collision A1 is about 0.35 s as seen in Figure 3.4c where the internal
force in the spring is illustrated. Here it is clear that the spring is only active when
there is a compressive force and that the tensile response is excluded. Figure 3.4d
illustrates how the impulse, or momentum, is transferred from body 1 to body 2 and as
the two curves are mirrored it is clear that the momentum is preserved during the
collision. In Figure 3.4 it can be seen that the displacement u during the collision
reaches 3.5 m for body 1, which might seem to be unreasonably large. The reason that
the displacement is large is due to the combination of low spring stiffness k1 and high
initial velocity v0.
a) b)
c) d)
Figure 3.4 Response for collision A1 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
The displacement u, velocity v, internal resistance R and impulse I as a function of
time for collision A3 are illustrated in Figure 3.5. As can be observed the duration of
the impact for collision A3 is approximately 0.1 s, which is shorter than collision A1.
However, the shape of the response curves is the same for both collision A1 and A3.
This demonstrates that the stiffness k1 has a great influence on the duration of the
impact. Greater stiffness gives shorter duration of impact and vice versa. For
corresponding results for collisions A2 and A4, see Appendix B.1.
-15
-10
-5
0
5
10
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 -20
-10
0
10
20
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
100
200
300
400
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
-40
-20
0
20
40
60
80
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 49 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
34
a) b)
c) d)
Figure 3.5 Response for collision A3 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
In Figure 3.6 the kinetic energy in the positive direction of body 2 Ek,tot is illustrated
as a function of time for collision A1-A4. For collision A2 and A4 the mass of body 2
is lower than the mass of body 1, i.e. m1 > m2, and this is seen as there is no loss in
kinetic energy after the collision. However, for collision A1 and A3 there is a loss in
the kinetic energy after the collision since m1 < m2, i.e. body 1 bounce back and get a
negative velocity after impact. This is the same response as calculated with the classic
impact theory presented in Table 3.2. As can be seen in Figure 3.6 the time of the
collisions is varying between the collisions which have different spring stiffness k1.
This means that a higher stiffness gives shorter collision time and vice versa.
-20
-15
-10
-5
0
5
10
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 -20
-10
0
10
20
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
200
400
600
800
1000
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
-40
-20
0
20
40
60
80
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 50 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 35
a) b)
Figure 3.6 Change in kinetic energy Ek,tot in the positive direction of body 2 during
a) collision A1 and A3, and b) collision A2 and A4.
In Figure 3.7 the internal work Wi of the spring is illustrated as a function of time t for
collision A1-A4. As can be observed in Figure 3.7a, body 1 moves in the opposite
direction compared to body 2 after the collision, and therefore a loss in internal work
Wi in the final phase of the collision. As can be observed in Figure 3.7b, in
collision A2 and A4 both bodies are moving in the same direction after the collision.
It can also be observed that collision A1 and A2 has lower stiffness k1 than
collision A3 and A4 since the durations of the collisions are larger.
a) b)
Figure 3.7 Change in internal work Wi during a) collision A1 and A3, and
b) collision A2 and A4.
3.2.3 Plastic collision
The plastic response of a 2DOF system without barrier is now studied for the same
collisions as in Section 3.2.2, with the exception that in these cases, two different
internal resistances R1,max are considered instead of two separate stiffness k1. The
reason for this is that for a plastic collision, the internal resistance of body 1 R1 is
constant and there is no stiffness k1. Four plastic collisions are analysed in this
section, see Table 3.3 for the input parameters.
0
100
200
300
400
500
600
0.0 0.2 0.4 0.6 0.8 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision A1
Collision A3 0
1000
2000
3000
4000
5000
6000
0.0 0.2 0.4 0.6 0.8 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision A2
Collision A4
0
100
200
300
400
500
600
0.0 0.2 0.4 0.6 0.8 1.0
Internal work,
 Wi [kJ]
Time, t [s]
Collision A1
Collision A3 0
1000
2000
3000
4000
5000
6000
0.0 0.2 0.4 0.6 0.8 1.0
Internal work,
 Wi [kJ]
Time, t [s]
Collision A2
Collision A4

-- 51 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
36
Table 3.3 Input parameters for collision B1-B4 with plastic response for the
2DOF system.
Case v0
[m/s]
R1,max
[kN]
m1
[kg]
m2
[kg]
Collision B1 27.8 250 1 500 7 500
Collision B2 27.8 250 15 000 7 500
Collision B3 27.8 500 1 500 7 500
Collision B4 27.8 500 15 000 7 500
As discussed in Section 3.2.2 for the elastic collisions, the two bodies involved in the
collision interact only when there is a compressive force in the spring, and the tension
response of the spring is excluded. This is done by using a constant internal resistance
R1 when the deformation ∆u is positive and no resistance when the deformation is
negative, see Figure 3.8.
R1,max
∆u = u1 – u2
R
Figure 3.8 Illustration of how the internal resistance R1 is constant for the
deformation ∆u for a plastic case.
In Table 3.4 the 2DOF analysis of collision B1-B4 are compared to calculations
according to classic impact theory described in Section 2.3.1. As can be observed in
Table 3.4, the results for plastic collision B1-B4 is not fully identical between the
2DOF and the classic theory, as they are for the elastic collision A1-A4 in Table 3.2.
This is due to the fact that it is difficult to obtain a fully plastic collision with a 2DOF
system, as can be seen in Table 3.4 where the coefficient of restitution is e ≠ 0 for the
2DOF systems. The coefficient of restitution e is for the 2DOF system calculated
according to equation (2.27), whereas for the classic impact theory it is one of the
input data. In this section is a time step h = 0.1 ms used, however, the results are
relatively close but can be improved further by using a smaller time step.

-- 52 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 37
Table 3.4 Comparison of results between the 2DOF system and the classic impact
theory with plastic response, collision B1-B4.
Case e
[-]
v0
[m/s]
v1
[m/s]
v2
[m/s]
Ek,0
[kJ]
Ek,tot
[kJ]
Collision B1
2DOF 0.001 27.80 4.61 4.64 580 97
Classic
theory 0 27.80 4.63 4.63 580 97
Collision B2
2DOF 0.001 27.80 18.52 18.55 5 796 3 864
Classic
theory 0 27.80 18.53 18.53 5 796 3 864
Collision B3
2DOF 0.001 27.80 4.44 4.67 580 97
Classic
theory 0 27.80 4.63 4.63 580 97
Collision B4
2DOF 0.001 27.80 18.52 18.55 5 796 3 864
Classic
theory 0 27.80 18.53 18.53 5 796 3 864
In Figure 3.9, displacement u, velocity v, internal resistance R and impulse I are
illustrated as a function of time t for collision B1. From Figure 3.9a and Figure 3.9b it
can be confirmed that the collision is plastic since v1 ≈ v2 and the curves for u1 and u2
are more or less parallel. There is a small difference between v1 and v2 which can be
reduced further by a reduced time step h. In Figure 3.9c it can be observed that the
spring works plastically because R1 holds a constant value of R1,max during the whole
collision, and then after the collision, the spring stops to act and R1 = 0. In
Figure 3.9d, the transfer of impulse from body 1 to body 2 can be confirmed. It is also
possible to see that the total impulse is conserved and holds a constant value for
I1 + I2. All four graphs of Figure 3.9 show that the collision lasts for approximately
0.14 s. For corresponding results for collision B2-B4, see Appendix B.2.

-- 53 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
38
a) b)
c) d)
Figure 3.9 Response for collision B1 with a time step of h = 1 ms
a) displacement u, b) velocity v, c) internal resistance R, and
d) impulse I.
In Figure 3.10 the total kinetic energy Ek,tot in the positive direction is illustrated as a
function of time t for collision B1-B4. As can be seen, the initial kinetic energy is ten
times larger for collision B2 and B4 than for collision B1 and B3, which is correct
since the mass of body 1 is ten times larger for the former two. The reason that
collision B2 and B4 takes a longer time than collision B1 and B3 is also due to the
difference in mass, and the reason that collision B2 takes a longer time than
collision B4 is the lower maximum internal resistance R1,max for collision B2. It is also
possible to observe that a large portion of the kinetic energy is transformed into
potential energy during the collision, as it should for a plastic collision.
0
1
2
3
4
5
6
7
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 0
5
10
15
20
25
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
100
200
300
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
0
10
20
30
40
50
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 54 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 39
a) b)
Figure 3.10 Change in kinetic energy Ek,tot in the positive direction of body 2 during
a) collision B1 and B3, and b) collision B2 and B4.
In Figure 3.11 the internal work Wi of the spring is illustrated as a function of time t
for collision B1-B4. As can be observed in Figure 3.11a, body 1 do not move in the
opposite direction compared to body 2 after the collision since there is no loss in
internal work Wi during the final phase of the collision. This happens despite body 1
has a lower mass than body 2, and indicates a plastic collision. It can also be observed
that collision B1 and B2 has lower stiffness k1 than collision B3 and B4 since the
durations of the collisions are greater.
a) b)
Figure 3.11 Change in internal work Wi during a) collision B1 and B3, and
b) collision B2 and B4.
As for the elastic analysis, smaller time steps h for the numerical integration gives
results closer to the classic impact theory and here a time step of h = 1 ms is used. The
importance of a valid time step is even more noticeable for the plastic collisions than
for the elastic collisions, because when larger time steps are used, a large difference
between the velocities v1 and v2 is received, but for a plastic collision v1 should be
equal to v2 after the collision. Figure 3.12a shows a displacement of body 2 that is
greater than the displacement of body 1, i.e. u2 > u1 after the collision. It can also be
observed in Figure 3.12b that the velocity v1 and v2 are far from equal after the
collision when a time step of h = 25 ms is used. These type of errors can occur when a
to large time step h is used. The graphs in Figure 3.12 where a time step of h = 25 ms
0
100
200
300
400
500
600
0.0 0.2 0.4 0.6 0.8 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision B1
Collision B3
0
1000
2000
3000
4000
5000
6000
0.0 0.2 0.4 0.6 0.8 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision B2
Collision B4
0
100
200
300
400
500
600
0.0 0.2 0.4 0.6 0.8 1.0
Internal work,
 Wi [kJ]
Time, t [s]
Collision B1
Collision B3 0
1000
2000
3000
4000
0.0 0.2 0.4 0.6 0.8 1.0
Internal work,
 Wi [kJ]
Time, t [s]
Collision B2
Collision B4

-- 55 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
40
is used can be compared to the more accurate results presented in Figure 3.9 where a
time step of h = 1 ms is used.
a) b)
Figure 3.12 Response for collision B1 with a to large time step of h = 25 ms
a) displacement u, and b) velocity v.
3.2.4 Elasto-plastic collision
As for the elastic and plastic 2DOF collision analysis without barrier in Section 3.2.2
and 3.2.3, the corresponding elasto-plastic study is also carried out for different
collision cases. Two different collision cases based on input data that gives the most
interesting elasto-plastic responses, from the previous collisions in Section 3.2.2 and
3.2.3, are analysed here. The input data for the two collisions is presented in Table 3.5
where collision C1 has the same stiffness k1 as collision A1, the same internal
resistance force R1 as collision B1, and the same masses as both. Collision C2 gains
its input data from collision A2 and B2 in a corresponding way.
Table 3.5 Input parameters for collision C1 and C2 with elasto-plastic response
for the 2DOF system.
Case v0
[m/s]
R1,max
[kN]
k1
[kN/m]
m1
[kg]
m2
[kg]
Collision C1 27.8 250 100 1 500 7 500
Collision C2 27.8 250 100 15 000 7 500
As for the corresponding elastic and plastic analysis, the two bodies involved in the
collision only interact when there is a compressive force in the spring, which means
that the tension response of the spring is excluded. This is done by using R1 = k ∙ ∆u
until R1 = R1,max and then a constant internal resistance R1 when the deformation ∆u is
positive, and no resistance when the deformation is negative, see Figure 3.13.
0
1
2
3
4
5
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 0
5
10
15
20
25
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2

-- 56 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 41
R1,max
R
k1
∆u = u1 – u2
∆uel
Figure 3.13 Illustration of a case with elasto-plastic response which is a
combination of an elastic case with a spring stiffness k1 that varies with
the deformation ∆u and a plastic case where the internal resistance R1
is constant for the deformation ∆u.
The two collisions are analysed with a 2DOF elasto-plastic model and the coefficient
of restitution e is calculated with equation (2.27). The different e is then used with the
classic impact theory, and the results in Table 3.6 are obtained. As for the elastic and
plastic analysis, smaller time steps h for the numerical integration gives results closer
to the classic impact theory, therefore a time step of h = 1 ms is used.
Table 3.6 Comparison of results between the 2DOF system and the classic impact
theory with elasto-plastic response, collision C1 and C2.
Collision C1 Collision C2
2DOF Classic theory 2DOF Classic theory
e [-] 0.804 0.804 0.402 0.402
v0 [m/s] 27.80 27.80 27.80 27.80
v1 [m/s] -14.00 -13.99 14.81 14.81
v2 [m/s] 8.36 8.36 25.99 25.99
Ek,0 [kJ] 580 580 5 796 5 796
Ek,tot [kJ] 262 262 4 177 4 177
In Figure 3.14, displacement u, velocity v, internal resistance R and impulse I are
illustrated as a function of time t for collision C2. Collision C2 has a coefficient of
restitution of e ≈ 0.4, which means that it has 40 % elastic behaviour and 60 % plastic
behaviour. In Figure 3.14a and Figure 3.14b it is hard to see that the collision acts
more in a plastic than in an elastic manner. But it can be observed that the collision is
not elastic because in that case, a much larger difference between v1 and v2 would
have been obtained and it is not plastic since then v1 and v2 would have had the same
value. Figure 3.14c shows that the two bodies respond in an elasto-plastic manner
since the response follows Figure 3.13 as

-- 57 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
42



		
				
u	u	R	R
u	u	u	k	R
el	max	1,	1
el	1	1
,
, (3.1)
In Figure 3.14d, the transfer of impulse from body 1 to body 2 can be confirmed. It is
possible to observe that the total impulse is conserved and holds a constant value for
I1 + I2. All four graphs of Figure 3.14 show that the collision lasts for approximately
0.95 s. For corresponding results for collision C1, see Appendix B.3.
a) b)
c) d)
Figure 3.14 Response for collision C2 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
In Figure 3.15 the total kinetic energy Ek,tot in the positive direction is illustrated as a
function of time t for collision C1 and C2. Similarly to the elastic and plastic analysis,
the initial kinetic energy is ten times larger for collision C2 than for collision C1,
which is correct since the mass of body 1 is ten times larger in collision C2 than in
collision C1. The difference in mass is also one reason that collision C2 has a longer
duration than collision C1, another reason is the difference in coefficient of
restitution e.
For collision C1, a large portion of the total kinetic energy Ek,tot is lost before the
minimum value in Figure 3.15 is reached. After the minimum value of the total
kinetic energy is reached, the collision regains a portion of its kinetic energy again.
This proves that it is a mixture of elastic and plastic response. The same could be said
of collision C2, but in this case, not all of the kinetic energy in the positive direction is
0
5
10
15
20
25
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2
0
5
10
15
20
25
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
50
100
150
200
250
300
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1 0
100
200
300
400
500
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 58 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 43
transferred to internal energy Wi, but also to kinetic energy in the negative direction,
see Figure 3.15, Figure 3.16 and Table 3.6.
Figure 3.15 Change in kinetic energy Ek,tot in the positive direction of body 2 during
collision C1 and C2.
In Figure 3.16 the internal work Wi of the spring is illustrated as a function of time t
for collision C1 and C2. As can be observed for collision C1, body 1 loses internal
energy in the final phase of the collision, this means that body 1 is moving in the
opposite direction of body 2 after the collision, which indicates that the collision is not
fully plastic.
Figure 3.16 Change in internal work Wi during collision C1 and C2.
0
500
1000
1500
2000
2500
3000
3500
4000
4500
5000
5500
6000
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision C1
Collision C2
0
500
1000
1500
2000
2500
3000
3500
4000
4500
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Internal work, W
i [kJ]
Time, t [s]
Collision C1
Collision C2

-- 59 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
44
3.3 Elastic collision with barrier
In the collision impacts that are of interest in this thesis, the structural member which
is symbolized by body 2, is attached to a larger system. Therefore, a barrier in the
form of an additional spring attached to body 2 at one side and fixed at the other is
introduced, as illustrated in Figure 3.17.
m1 m2
v0 v = 0 	v0
m1 m2
k1
v = 0
k2	k1
Figure 3.17 Illustration of how a 2DOF system without barrier is transformed into a
system with a barrier.
The structural response of body 1 during a collision, is significant for what kind of
load F2(t) that is acting on body 2, and therefore also what type of dynamic response
that can be expected from body 2. The two extremes are as in Section 3.2 elastic and
plastic response, with elasto-plastic response in between.
If an elasto-plastic analysis is considered, a very large number of collision scenarios
may be obtained, even if only one of the bodies is studied with elasto-plastic response.
This can be complicated to describe thoroughly and it demands more input data in the
form of stiffness k and internal resistance R. Hence, in this section only an elastic
response for both bodies is considered. The elasto-plastic response of reinforced
concrete structures, is instead treated in Chapter 6.
The shape of the load acting on body 2 F2(t) that is created when body 1 collides with
body 2 can have a great importance for the response of body 2. How this shape affects
the resulting response is complex and depends on the properties of both the involved
bodies. As an example, it is not only the mass ratio m1 / m2 and the load F2(t) that
affects the structural response in form of the internal resistance for spring 2 R2, but
also the frequency ratio f1 / f2, Johansson (2014).
The two bodies involved in the collision interact only when there is a compressive
force in the spring of body 1, which means that the tensile response of the spring must
be excluded. Hence, the stiffness of spring 1 k1 has a linear elastic response while the
deformation ∆u is positive and no stiffness when the deformation is negative. The
response of spring 2 depends solely on the displacement of body 2 u2 and has a linear
elastic response for both the positive and the negative displacement. The reason for
this is that body 2 corresponds to a structural member that is connected to a larger
structural system and therefore strives to return to its original state, see Figure 3.18.

-- 60 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 45
R1 	R2
k1
k2
k2
∆u = u1 – u2 u2
Figure 3.18 Illustration of how the spring stiffness k1 varies with the deformation ∆u
and how the spring stiffness k2 varies with the deformation u2 for an
elastic case.
The method used here is based on converting the dynamic load to an equivalent static
load F2,sta. An advantageous tool is to determine a load factor ȕel which describes the
relation between the dynamic load F2,dyn and the equivalent static load F2,sta as
el	2,	el	sta	2, F	F 	
 	(3.2)
F2,el is the maximum dynamic load, derived for a collision with a fully stiff member,
so called hard impact, and it is determined by setting internal work and the kinetic
energy that acts on body 1 equal to Ek,0 = Wi,el,1, where the kinetic energy is
2
2
0
,0	k
mv
E  (3.3)
The area under the curve in Figure 3.19 is the internal work
1
el	1	el	1	1
1	el	i k
R	u	k
W 2	2
2
,
2
,
,	, 	 (3.4)
u
R
Wi,el,1
u1,el
k1
R1,el
Figure 3.19 Force-displacement relation showing the internal work Wi,el,1 as the
area under the curve.
By putting the dynamic load equal to the internal resistance F2,el = R1,el, the maximum
dynamic load can be expressed as

-- 61 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
46
1	1	0	el	2 m	k	v	F 		, 	(3.5)
The equivalent static load F2,sta also corresponds to the internal resistance of body 2
R2, described as
2	el	2	2	sta	2 	u	k	R	F 	,	, 		 	(3.6)
The load factor ȕel in equation (3.2) can therefore be expressed as
el	2,
2
el F
R
	
 (3.7)
The relation between the load factor ȕel and the frequency ratio f1 / f2 for different
mass ratio m1 / m2 can be seen in Figure 3.20. The input values for the curves based
on data from Johansson (2014), are presented in Appendix E.
Figure 3.20 Relationship between load factor ȕel and frequency ratio f1 / f2 for
different mass ratio m1 / m2, based on Johansson (2014). Circles in
diagram mark cases that are further studied in this section.
The marked cases in Figure 3.20 are selected mass ratios m1 / m2 which are further
investigated in this section. The input values for the selected ratios are listed in
Table 3.7. These collisions are based on the collisions in Section 3.2.2, with the same
initial velocity v0 = 27.8 m/s and the same masses, but with a different stiffness k1 and
now also k2.
If the collision cases in Table 3.7 are compared to the more practical collision cases
studied in Chapter 6, the stiffness k1 and k2 in this section can seem to be of a very
small magnitude and large displacements are obtained. However, from the results in
this section, one can still gain the understanding of elastic collisions with barriers.
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
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0 1.1 1.2 1.3 1.4 1.5
Load factor,
 
ȕel [-]
Frequency ratio, f1 / f2 [-]
Hard impact
0.2
2
10
100

-- 62 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 47
Table 3.7 Input parameters for collision D1-D4 with elastic response for the
2DOF system with initial velocity v0 = 27.8 m/s.
Collision
D1
Collision
D2
Collision
D3
Collision
D4
k1 [kN/m] 100 1 000 400 4 000
k2 [kN/m] 2 000 2 000 2 000 2 000
m1 [kg] 1 500 15 000 1 500 15 000
m2 [kg] 7 500 7 500 7 500 7 500
Mass ratio m1 / m2 [-] 0.2 2 0.2 2
Frequency ratio f1 / f2 [-] 0.5 0.5 1 1
Load factor ȕel [-] 1.65 1.15 1.42 0.69
The displacement u, velocity v, impulse I and internal resistance R for both bodies
during collision D4 is presented in Figure 3.21. From Figure 3.21c it can be seen that
the impact duration is approximately 0.3 s. Spring 2 has an elastic response at tension,
as shown in Figure 3.18, which is why the response of body 2 after the impact is a
wave motion, see Figure 3.21. Accordingly, body 2 will sway back and forth with no
reduced effect since no damping effect is regarded. As can be seen from the internal
resistance R for body 1 in Figure 3.21c, spring 1 endures two separate collisions, a
phenomenon which happens due to k1 and m1 being much larger than k2 and m2. This
double collision is also observable in Figure 3.21a where u1 – u2 ≤ 0 at t ≈ 0.15 s.
In Figure 3.21c, the dynamic load F2,el(t) from a hard impact is added to the graph to
illustrate the difference compared to R1(t) for collision D4.

-- 63 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
48
a) b)
c) d)
Figure 3.21 Response for collision D4 a) displacement u, b) velocity v, c) internal
resistance R and dynamic load F2,el, and d) impulse I.
The change in internal energy Wi and kinetic energy Ek for both bodies during
collision D4 is presented in Figure 3.22. The wave motion which appears for body 2
after the impact is clearly seen in Figure 3.22b, where the internal work Wi,2 is zero
when the kinetic energy Ek,2 is maximum and vice versa.
a) b)
Figure 3.22 Response for collision D4 a) internal work Wi,1 and kinetic energy Ek,1
for body 1, and b) internal work Wi,2, external work We,2 and kinetic
energy Ek for body 2.
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
-6
-4
-2
0
2
4
6
8
0.0 0.1 0.2 0.3 0.4 0.5
Forces,
 F, R
 [MN]
Time, t [s]
R Body 1
R Body 2
F2el -0.6
-0.4
-0.2
0.0
0.2
0.4
0.6
0.0 0.1 0.2 0.3 0.4 0.5
Impulse,
 I [MNs]
Time, t [s]
Body 1
Body 2
0
1
2
3
4
5
6
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi1
Ek1
0
1
2
3
4
5
6
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi2
We2
Ek2

-- 64 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 49
The phenomena seen from collision D4 due to spring 1 being fully compressed before
spring 2 starts to compress is also seen in Figure 3.23. There is a tendency for the
same phenomena for collision D2, but not as clear. Collision D1 and D3 shows no
such thing and this are due to the relatively low stiffness of spring 1 k1 and low mass
m1. The time of the four impacts are clearly shown in Figure 3.23, where it can be
observed that the internal resistance of body 1 R1 is zero after the collision.
a) b)
Figure 3.23 Internal resistance of body 1 R1 for a) collision D1 and D3, and
b) collision D2 and D4.
The internal resistance of body 2 for collision D1-D4 is presented in Figure 3.24.
After the collision all four collisions shows a wave motion for body 2.
Figure 3.24 Internal resistance of body 2 R2 for collision D1-D4.
For corresponding diagrams for collision D1-D3, see Appendix B.4.
0.0
0.3
0.6
0.9
0.0 0.1 0.2 0.3 0.4 0.5
Internal resistance,
 R [MN]
Time, t [s]
Collision D1
Collision D3
0
2
4
6
8
0.0 0.1 0.2 0.3 0.4 0.5
Internal resistance,
 R [MN]
Time, t [s]
Collision D2
Collision D4
-3
-2
-1
0
1
2
3
4
5
0.00 0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40 0.45 0.50
Internal resistance,
 R [MN]
Time, t [s]
Collision D1
Collision D2
Collision D3
Collision D4

-- 65 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
50
4 Transformation of Structural Member to SDOF
System
4.1 Transformation of beams to SDOF systems
4.1.1 Orientation
In Chapter 3, collisions and impacts are analysed using 2DOF-models. However, if
these mass-spring models should be valid, they must first be transformed from the real
structure that is of interest.
If a beam with linear elastic material properties and retained boundary conditions is
loaded with a point or distributed static load, the displacement shape of the beam is
always the same no matter what the magnitude of the load is. This enables the
possibility to describe the displacement along the entire beam with only one
displacement us in a certain location of the beam, see Figure 4.1. A beam with plastic
material properties can be described in the same way even though the displacement
shape is different.
us
us	
ui ui
F(t)
R(u)
m u
Figure 4.1 A change in displacement of a beam with a factor α means that the
constant shape of displacement is scaled along the whole beam with
this factor.
This location of the beam is called the system point and the properties of the SDOF-
model should be adjusted so that
s	SDOF u	u  (4.1)
It is common to have the system point located at the point where the displacement is
the largest, or at the centre of the beam, Johansson and Laine (2012). In this thesis
point loads are of interest and the system point is chosen to be at the point of loading.
The transformation to a SDOF system from a beam is made through applying a mass
m, a resisting force R(u), and an external load F(t), see Figure 4.2. As discussed in
Section 2.4, the damping effect is neglected in this thesis.
EIb
q(x,t)
us
mb
l
x
u = us
F(t)
R(u)
m
Figure 4.2 Illustration of how to transform a beam to an equivalent SDOF system.

-- 66 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 51
For linear elastic response with R(u) = k∙u, a relation between the equivalent SDOF
system and the beam can be made using different transformation factors ț
b	m m	m 	
 	(4.2)
b	k k	k 	
 	(4.3)
b	F F	F 	
 	(4.4)
where mb, kb and Fb is the mass, stiffness and external load of the beam. By using this,
the dynamic equation of motion, equation (2.15), can be written as
 	t	F	u	k	u	m b	F	b	k	b	m	

	
	 		 	(4.5)
For a system with plastic or elasto-plastic response, it can instead be written as
  	 	t	F	u	R	u	m b	F	b	k	b	m	

	
	 		 (4.6)
where Rb(u) describes the static response of the beam. The transformation factors ț
are derived on the basis of the theory of energy conservation where the kinetic energy
of the mass m, the work done by the external force F(t) and the internal resistance R
should be equal between the two systems, Johansson and Laine (2012).
4.1.2 Conservation of kinetic energy
To conserve the kinetic energy Ek between the two systems illustrated in Figure 4.2
the energy can be written as
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
2	2 (4.7)
where vs is the velocity at the system point, m’(x) is the mass per unit length and v(x)
is the velocity per unit length. By using that
t
u
v s
s 

 	(4.8)
and
   
t
x	u
x	v 

 	(4.9)
where ∆us and ∆u(x) are the displacements at the system point and along the beam,
equation (4.7) for a beam with constant mass per unit length m’(x) = m’, can be
expressed as

-- 67 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
52
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
(4.10)
The transformation factor țm can be derived by combining equation (4.2) and (4.10)
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
 	(4.11)
4.1.3 Conservation of external work
To conserve the external work We between the two systems illustrated in Figure 4.2
the energy can be written as
   	


			
l	x
x
s	e dx	x	u	x	q	u	F	W
0
(4.12)
where q(x) is the load per unit length. The external force for a beam Fb with constant
uniformly distributed load q(x) = q can be expressed as
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
(4.13)
With this inserted in equation (4.12) and by using equation (4.4), the transformation
factor țF can be expressed as
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
 	(4.14)
For an arbitrary distributed load which acts at x = x1 to x = x2 the transformation factor
țF can be expressed as
 


	


2
1
x	x
x	x s	1	2
F dx
u
x	u
x	x
1
 	(4.15)
In the case of a beam subjected to a point load, equation (4.12) can be rewritten as
s	b	s	e u	F	u	F	W 			 	(4.16)
and the transformation factor țF will, with equation (4.4), become
1		
s
F u
u
 	(4.17)

-- 68 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 53
4.1.4 Conservation of internal work
The internal work Wi for a linear elastic material can be written as
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
i 	dx	x	u	x	M
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
 (4.18)
where E is the Young’s modulus, G is the shear modulus, ȕshear is a factor to consider
the shear stress, A is the sectional area, N(x) is the normal force, V(x) is the shear
force, M(x) is the moment and u′′(x) is the curvature of the beam,
Johansson and Laine (2012). The contribution from the normal and shear forces are in
general small and can be neglected, and equation (4.18) can thus be simplified to
   	


				
l	x
x
s
i dx	x	u	x	M
ku
W
0
2
2
1
2 (4.19)
By combining this with equation (4.3) the transformation factor țk can be written as
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
 	(4.20)
The stiffness of a beam with elastic response can be determined in the same way as
for a spring, which means using the elastic correlation between load and
displacement. For an elastic beam subjected to a point load the correlation can be
written as
s	b	b u	k	F 	 	(4.21)
which combined with equation (4.20) gives
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
 	(4.22)
where Fb is derived from equation (4.13).
4.1.5 Summary
According to Biggs (1964), the transformation factors for internal and external work
are equal, i.e.
F	k	

	  (4.23)
If using equation (4.23) and dividing equation (4.6) by the transformation factor țF,
the dynamic equation of motion can be written as
 	t	F	u	k	u	m b	b
F
k
b
F
m 	



  	(4.24)

-- 69 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
54
By introducing a combined transformation factor țmF
F
m
mF


  	(4.25)
equation (4.24) can be rewritten as
 	t	F	u	k	u	m b	b	b	mF 			
 	(4.26)
This means that it is only the mass of the beam mb that is affected by a transformation
factor țmF when transforming a beam to a SDOF system.
In the case of a beam subjected to a point load the transformation factor țmF according
to equation (4.17) can be expressed as
m	mF	

	  	(4.27)
4.2 Determination of transformation factors for a beam
4.2.1 Orientation
Derivation of the transformation factors țm and țF for beams for different load cases
with elastic response is done in Johansson (2014) and in Asplund and
Steckmest (2014). The transformation factors used in this thesis for beams are
presented in Appendix D.1.
4.2.2 Elastic response for a point load
The displacement u(x) of a simply supported beam with an elastic response subjected
to a point load is defined according to Lundh (2000) as







					
			

l	x	l	x	l	x	l	l
EI
F
l	x	x	x	l
EI
F
x	u
b
b
b
b

	


	
),	)	(	)	(	)	1	((
6
0	),	)	1	((
6
)	( 3	2	2
3	2	2
(4.28)
where x, l, α, ȕ, Fb and EIb are illustrated in Figure 4.3.
Fb(t)
us
mb, EIb
l
x ȕl	
 l
Figure 4.3 Illustration of a simply supported beam with elastic response subjected
to a point load.

-- 70 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 55
The displacement at the system point us = u(α∙l) can be written as
2	2
3
3

	
b
b
s EI
l	F
u  (4.29)
By inserting equation (4.28) and (4.29) in equation (4.11) and using the fact that the
transformation factor țF,el is equal to one for cases with a beam subjected to a point
load, the following țmF,el can be derived as
If equation (4.21) and (4.29) is combined, the beam stiffness kb can be written as
2	2	3
3

		l
EI
k b
b  (4.31)
As can be seen from equation (4.31), a smaller length of the beam l gives a much
higher stiffness and vice versa, since it is to the power of three. The stiffness also
increases rapidly when the load acts closer to the supports, when either α or ȕ is close
to zero, see Asplund and Steckmest (2014).
4.2.3 Plastic response for a point load
For a simply supported beam with plastic response the displacement u(x) varies
linearly when subjected to a point load, see Figure 4.4.
10	12
1
10	12
2
105
)	2	10	23	(
28
3
)	)	(	)	(	)	1	((
6	1
3
)	)	1	((
6	1
2	2
2
2
2
2
3
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

	


	




		


	
	
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





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
el	mF
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
(4.30)

-- 71 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
56
Fb(t)
us
mb, EIb
l
x ȕl	
 l
Figure 4.4 Illustration of a simply supported beam with plastic response subjected
to a point load.
If the displacement u(x) is stated as a function of us instead of the force Fb, it can be
written as







	

	

l	x	l
l
x	l
u
l	x
l
x
u
x	u
s
s




,
0	,
)	( (4.32)
By inserting equation (4.32) in equation (4.11) and using the fact that the
transformation factor țF,pl is equal to one for a case with a beam subjected to a point
load, țmF,pl can be written as
4.3 Transformation of slabs to SDOF systems
4.3.1 Orientation
The transformation of a slab into a SDOF system is done similarly to the
transformation of beams done in Section 4.1. The equation of motion can be written
according to equation (4.26) as
 	t	F	u	k	u	m sl	sl	sl	mF 			
 	(4.34)
where
F
m
mF


  	(4.35)
3
1
3	3
1	1
3
1	1
3
2
2
2
2
0
2
2
,





 				






 







 	






	



	


 	l	x
l	x s
s	l	x
x s
s
pl	mF dx
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
l 	(4.33)

-- 72 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 57
is the transformation factor handling both the mass and the force. The transformation
factor for one-way slabs is the same as for beams. Whilst the properties for beams and
one-way slabs can vary in the longitudinal direction, the properties for two-way slabs
can vary in both longitudinal and transversal direction. This means that the derivation
of the transformation factors for two-way slabs must be done for two directions.
4.3.2 Conservation of kinetic energy
To conserve the kinetic energy Ek between a slab and a 2DOF system, the energy can
be written as
    dy	dx
y	x	v	y	x	m	v	m
E
l	x
x
l	y
y
s
k
y
	




	



0
2
0
2
2
,	,
2 (4.36)
where vs is the velocity at the system point, m’(x,y) is the mass per unit length and
v(x,y) is the velocity per unit length. By using that
t
u
v s
s 

 	(4.37)
and
   
t
y	x	u
y	x	v 

 ,
, 	(4.38)
where ∆us and ∆u(x,y) are the displacements at the system point and along the slab,
equation (4.36) for a slab with constant mass m’(x,y) = m’, can be expressed as
 		



	

	
x	y l	x
x
l	y
y	y	x
e
s dxdy	y	x	u
l	l
m
u	m
0
2
0
2 , (4.39)
By combining
sl	m m	m 	
 	(4.40)
and equation (4.39) it is possible to express the transformation factor țm as
 
	



	


x	y l	x
x s
l	y
y	y	x
m dxdy
u
y	x	u
l	l 0
2
2
0
,	1
 	(4.41)
4.3.3 Conservation of external work
To conserve the kinetic energy We between a slab and a 2DOF system the energy can
be written as

-- 73 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
58
   		




			
x	y l	x
x
l	y
y
s	e dxdy	y	x	u	y	x	q	u	F	W
0	0
,	, (4.42)
where q(x,y) is the load per unit length. The external force Fsl for a slab with constant
uniformly distributed load q(x,y) = q can be expressed as
  				







 
	
x	y	x	y l	x
x
sl
l	y
y
l	x
x
l	y
y
sl dxdy
w	l
F
dxdy	y	x	q	F
0	0	0	0
, (4.43)
By combining
sl	F F	F 	
 	(4.44)
with equation (4.42) and (4.43) it is possible to express the transformation factor țF as
 
	



	


x	y l	x
x s
l	y
y	y	x
F dxdy
u
y	x	u
l	l 0	0
,	1
 	(4.45)
For a constant distributed load q(x,y) = q, with an arbitrary area of distribution which
acts at x = x1 to x = x2, and y = y1 to y = y2, the transformation factor țF can be
expressed as
 	 	
 
	



	
	

2
1
,	1 x	x
x	x s
y	y
y	y	1	2	1	2
F dxdy
u
y	x	u
y	y	x	x
2
1
 	(4.46)
As for a beam subjected is the transformation factor țF = 1 for a slab subjected to a
point load.
4.3.4 Conservation of internal work
As for beams the transformation factors regarding internal and external work are
equal, according to Biggs (1964)
F	k	

	  	(4.47)
4.4 Derivation of transformation factors for a slab
4.4.1 Orientation
A slab is significantly more complex than a beam, which gives a multitude of
combinations regarding geometry, boundary conditions and placement of the load.
With regard to this, only a limited number of combinations are investigated and only
for a quadratic slab. Three load cases are chosen for further evaluation and the slab is
modelled as simply supported on all four sides. The slab and the three load cases are
presented in Figure 4.5. Unlike for beams, the transformation factors for slabs cannot
be as easily derived analytically and a numerical FE analysis is therefore used instead.

-- 74 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 59
l
αy∙l = 0.25
l
αy∙l = 0.5
l
l
αx∙l = 0.5l
αx∙l = 0.25l
5
Figure 4.5 Illustration of the points for the applied point load at the reinforced
concrete slab which is used for derivation of the transformation factors
țmF. The points are defined using the length factors αx and αy and the
simply supported quadratic slab has the side length l.
4.4.2 Elastic response for a point load
The FE analysis for the evaluation of the transformation factors in this thesis for cases
with elastic response uses shell elements and is described more thoroughly in
Chapter 5. Because of the shell elements being sensitive to stress concentrations, the
point load is distributed over a small area, which is described more in detail in
Section 5.4. This will influence the value of the transformation factor țF to a value
less than one, i.e. țF < 1. The transformation factors are numerically derived
according to Section 4.3 from FE analyses, see Appendix H.2. The derived
transformation factors for the three load cases are presented in Table 4.1. The length
factors αx and αy are defined as illustrated in Figure 4.5. Load case 1-3 is used for the
remaining slab analysis conducted in this thesis.
Table 4.1 Transformation factors țm, țF, țmF, slab stiffness ksl and displacement at
the system point us for load case 1-3 with a load of 100 kN.
Load case 1 Load case 2 Load case 3
αx [-] 0.5 0.5 0.25
αy [-] 0.5 0.25 0.25
țm [-] 0.200 0.231 0.236
țF [-] 0.987 0.982 0.977
țmF [-] 0.203 0.235 0.241
ksl [MN/m] 10.79 15.94 22.02
us [mm] 9.27 6.27 4.54
Ȗsl [m/GN] 655.5 655.5 655.5
It should be noted that these transformation factors are unique for these load cases and
only for quadratic slabs with elastic response. The values of the transformation factors
are also unique for the length-thickness ratio l / t of the slab. In this thesis, a quadratic
slab with length l = 5.6 m and thickness t = 0.2 m is used which gives a length-

-- 75 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
60
thickness ratio l / t = 28. In fact, the values of the transformation factors are valid for
an arbitrary slab with the same length-thickness ratio, Johansson (2014).
In Johansson (2014), transformation factors and slab stiffness are derived and
presented for different load cases and different slabs. The values of țmF in Table 4.1
differ a bit from the corresponding values in Johansson, where a length-thickness ratio
of 20 is used. However, the difference between the transformation factor țmF
presented in Table 4.1 and in Johansson is approximately 0.4 %, 1.4 % and 3.2 % for
load case 1-3 and can arguably be considered negligible. This difference can also be a
result of the difference in the number of element used in each model.
As for the beam, țmF and ksl grows larger when the load and the system point are
closer to the support, as can be seen in Table 4.1. It should be noted that ksl is unique
for these set of properties and load cases. However, it is possible to express any slab
stiffness without having to do a FE analysis for cases with an elastic response of the
slab, Johansson (2014). The equivalent stiffness k2 of an arbitrary slab can be
calculated as
sl
2
sl
2 k	k 	

 (4.48)
where
3
2
t	E
l

	
 	(4.49)
is a factor which considers the length of the slab l, the Young’s modulus E and the
slab thickness t. The factor Ȗsl is the ratio for the slab which ksl is calculated for while
Ȗ2 is the ratio for an arbitrary quadratic slab.
4.4.3 Theoretical plastic response for a point load
For a simply supported slab with plastic response, the displacement u(x,y) varies
linearly when subjected to a point load as handled in Section 2.8.3, see Figure 4.6.

-- 76 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 61
Fsl(t)
us
msl, EIsl
lx
x ȕx lx	
 lx
lx
ȕx lx	αx lx
ly
αy ly
ȕy ly
a) b)
Figure 4.6 Illustration of a simply supported slab with plastic response subjected
to a point load a) section, and b) plane.
The plastically deformed slab illustrated in Figure 4.6 has the shape of a pyramid and
țm,pl can be derived analytically with equation (4.41). To be able to solve the integral
in this equation, the slab is divided into four parts according to Figure 4.7.
ȕx lx	αx lx
α
αy ly
ȕy ly
A1
A2
A3
A4
Figure 4.7 Illustration of a simply supported slab with plastic response divided
into four areas A1, A2, A3 and A4.
If the displacement u(x,y) is stated as a function of us instead of the force Fsl, it can be
written as


















 








 





4
x
s
x
3
y
s
y
2	s
x	x
1	s
y	y
A
u
l
x
A
u
l
y
A	u
l
x
A	u
l
y
y	x	u
,	1
,	1
,
,
)	,	( 




(4.50)

-- 77 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
62
By inserting equation (4.50) into equation (4.41) and using the fact that the
transformation factor țF,pl = 1 for a case with a slab subjected to a point load, țmF,pl
can be written as
Area 2, 3 and 4 are calculated in the same fashion and by using the fact that
αx + ȕx = αy + ȕy = 1, țmF,pl becomes























 




 	







 







 	





 









 


	

 
 
3 4
1 2
2	2
2	2
2	,
1	1
1
A A x
s
x	y
s
y
A A
s
x	x
s
y	y
s	y	x
pl	mF
dA
u
l
x
dA
u
l
y
dA	u
l
x
dA	u
l
y
u	l	l

	

	
 	(4.51)
The integral for part A1 becomes
12
...
1
1
2
0
3	2
2
0
2
y
y
l
l
l	x
y
l
l
x
l	y
y	y	y	x
s
y	y
y
l
l
l	x
y
l
l
x
l	y
y	s	y	x
dxdy	y
l	l
dxdy	u
l
y
u	l	l
y	y
x	x
x
y	y
x	x
y	y
y	y
x	x
x
y	y
x	x
y	y













	













	




















 


	
	
	



	




	




	




	

(4.52)
  6
1
1	1
12
1
12	12	12	12
, 							 x	y	x	y
pl	mF

	
	
	
 	(4.53)

-- 78 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 63
5 FE Modelling
5.1 Orientation
This chapter covers how the incoming object and the resisting structure are modelled
with FE software for this thesis. It is the FE software ADINA (2014) 900 Nodes
Version 9.0 that is used and as the name implies, a maximum of 900 nodes can be
used. The slab geometry and element size examined is largely based on this limit.
During the uncracked state, state I, of the reinforced concrete behaviour the
reinforcement has a small influence on the total stiffness and the beam can be
simplified to a solid concrete beam. However, in the cracked state, state II, the
reinforcement has a large influence on the stiffness and must therefore be considered.
In this thesis, the focus is not on modelling each state of the concrete behaviour
thoroughly, thus the more roughly estimated elasto-plastic behaviour discussed in
Section 2.8 is enough.
Based on this, it is sufficient to model the elastic part of the reinforced concrete as one
equivalent material based on state II, instead of modelling the reinforcement and
concrete separately in the commercial software ADINA. In this thesis, the equivalent
material is modelled with an equivalent Young’s modulus when shell elements are
used, and manually implemented moment-curvature and torsion-twisting relations
when beam elements are used.
For the FE slab models of this thesis, both a shell element model and a beam grillage
model are evaluated. The beam grillage model uses a grid with beams in two
directions, where the beams are modelled with beam elements. The usage of shell and
beam elements for slabs is more thoroughly described in Section 5.4 and Section 5.5.
5.2 Equivalent Young’s modulus
The cross-section defined in ADINA is the cross-section of state I, hence the moment
of inertia I that is calculated by ADINA is II. Therefore, the input value for the
Young’s modulus in ADINA is a reduced equivalent Young’s modulus Eeq so that the
stiffness of state II is used. The equivalent Young’s modulus is calculated as
cm
I
II
eq E
I
I
E  	(5.1)
where Ecm is the mean Young’s modulus of the concrete and II and III are the moments
of inertia for state I and state II, respectively. The stiffness used by ADINA is then
II	cm	I	cm
I
II
I	eq	b I	E	I	E
I
I
I	E	EI 		 	(5.2)
where EIb is the stiffness of the beam in state II. However, Young’s modulus is not an
input to ADINA when using moment-curvature relations, which is explained further
in Section 5.5.2. Hence, the equivalent Young’s modulus Eeq is only used for FE
models modelled with shell elements.

-- 79 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
64
5.3 Elasto-plastic response for the incoming object
As described in Section 3.2.4, body 1 should have an elasto-plastic response in
compression and no tensile stiffness. However, no element type in the commercial
software ADINA (2014) can account for this. It is possible to model a non-linear
elastic spring element in ADINA. A comparison between the response of body 1
modelled with a 2DOF and a FE model using non-linear elastic spring element, is
illustrated in Figure 5.1. In both Figure 5.1a and Figure 5.1b it can be observed that
there has not occurred any plastic deformation, where the shape of the loading and the
unloading stage is the same. The 2DOF model and the FEM model are giving
identical results.
a) b)
Figure 5.1 Comparison between a 2DOF model and the corresponding FE model
with a non-linear spring for the same case as the elasto-plastic case.
a) Internal resistance R as a function of difference in displacement
u1 - u2, and b) internal resistance R as a function of time t.
To account for plastic deformations, a spring element cannot be used. For the plastic
deformations, a truss element can instead be used, but it requires the same
compressive and tensile properties. In order to be able to model the elasto-plastic
response, and have different properties in compression and tension, a spring element
is combined with a truss element. The spring element acts as a non-linear elastic
member until the plastic limit is reached, whilst the truss element acts as an elasto-
plastic member, which account for plastic deformations, see Figure 5.2.
0
100
200
300
400
500
0.0 0.5 1.0 1.5	
Internal resistance,
 R [kN]
Displacement, u1 -u2 [m]
2DOF
FEM 0
100
200
300
400
500
0.0 0.1 0.2	
Internal resistance,
 R [kN]
Time, t [s]
2DOF
FEM

-- 80 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 65
∆u
R1
k1
Spring element
∆u
R1
k1
Combined
R1,max	
Truss element
∆u
R1
Very stiff
R1,max
=
Figure 5.2 Illustration of how the properties of a spring and truss element are
combined to simulate the elasto-plastic behaviour of body 1.
In Figure 5.3b it can be observed that there has indeed occurred a plastic deformation,
where there is a different shape between the loading and the unloading stage. In
Figure 5.3 the elasto-plastic response of the 2DOF and the FEM model can be
observed and both models have identical response.
a) b)
Figure 5.3 Comparison between a 2DOF model and the corresponding FE model
with elasto-plastic response of body 1 and elastic response of body 2
with a time step of h = 0.3 ms. a) Internal resistance R as a function of
difference in displacement u1 – u2, and b) internal resistance R as a
function of time t.
The truss element in ADINA is not fully plastic but rather elasto-plastic. It has a
stiffness k which is chosen to be as large as possible for the model to be stable. Which
is found to be approximately 1 GN/m for the cases in this thesis, which gives
satisfying results as observed in Figure 5.3.
0
100
200
300
400
500
0.0 0.5 1.0 1.5	
Internal resistance,
 R [kN]
Displacement, u1 -u2 [m]
2DOF
FEM 0
100
200
300
400
500
0.0 0.1 0.2	
Internal resistance,
 R [kN]
Time, t [s]
2DOF
FEM

-- 81 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
66
The choice of time step in ADINA is critical and can result in major differences. By
using a time step of h = 0.3 ms, no visible difference between the 2DOF and the FE
analysis will be seen, as can be observed in Figure 5.3. Whilst a time step of h = 1 ms
will result in a noticeable difference between the two analyses as illustrated in
Figure 5.4. The results even suggest that the FE analysis is modelled with an initial
internal resistance, which of course is false.
Figure 5.4 Comparison between a 2DOF model and the corresponding FE model
with elasto-plastic response of body 1 and elastic response of body 2
with a time step of h = 1 ms.
The model with a non-linear elastic spring element without a truss element does not
account for the plastic deformations and when compared to the elasto-plastic model
there is a difference in the response of body 2. The displacement of body 2 u2 as a
function of time for both models is illustrated in Figure 5.5. As can be observed, the
main difference between the two models is during the unloading stage and after the
collision. However, if the purpose of the analysis is to find the maximum value or the
response after collision, it might be sufficient to model the incoming object with a
non-linear elastic spring element. Although, it is uncertain if this model is valid if
body 2 is subjected to multiple collisions after each other, since the plastic
deformation then will have a larger influence. The model with a non-linear elastic
spring element without a truss element is therefore not further used in this thesis.
Figure 5.5 Comparison between the displacement of body 2 u2 for the FE model
with a non-linear spring and the elasto-plastic case modelled with a
spring and a truss.
0
100
200
300
400
500
0.0 0.5 1.0 1.5	
Internal resistance,
 R [kN]
Displacement, u1 -u2 [m]
2DOF
FEM
-0.8
-0.4
0.0
0.4
0.8
1.2
1.6
0.0 0.1 0.2 0.3
Displacement,
 u [mm]
Time, t [s]
Spring
Spring & truss

-- 82 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 67
5.4 Shell elements
It is possible to model slabs with shell elements in the commercial software
ADINA (2014) and it is shell elements that are used when deriving the transformation
factors in Section 4.4. In this thesis, for all the FE models with shell elements, 28 x 28
4-node shell elements are used together with a length-thickness ratio of l / t = 28 for
the slab. Normally a Poisson’s ratio of υ = 0.2 is used for reinforced concrete.
However, since beams deform only in one direction, υ = 0 is chosen throughout this
thesis for better consistency between the shell element and beam grillage model which
is treated in Section 5.5.1.
However, there are some issues when using shell elements that must be taken into
account. When applying a point load to a slab modelled with shell elements, an
unreasonable large deformation will occur at the node where the load is applied,
because of the shell elements being sensitive to high stress concentrations. To avoid
this error the point load can be distributed over a small area as illustrated in
Figure 5.6. In this thesis the area in which the point load is distributed over is chosen
to have a side length of twice the element length c = 2le = 0.4 m. This is the smallest
area that can be used if the centre of the distributed load should remain in the same
point as where the point load is applied.
c
c
Figure 5.6 Illustration of how a point load can be distributed over an area with a
side length c.
The difference in displacement at the system point us between applying the load as a
static point load and as a static distributed point load is illustrated in Figure 5.7. Even
though the difference seems to be small, it will have an influence of large magnitude
since the displacement at the system point us is squared in the derivation of the
transformation factor țm, see Section 4.1.2. For the models subjected to dynamic
loads, the load is distributed in the same manner because otherwise a local instability
in the node where the load is applied will occur for slabs with elasto-plastic response.

-- 83 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
68
a) b)
Figure 5.7 Comparison of the displacement u2 along a line described in the upper
right hand corner, between a point load and a distributed point load.
The maximum displacement illustrated is at the system point. For a) the
whole slab, and b) magnified.
When modelling slabs with plastic or elasto-plastic response in ADINA using shell
elements, there will be an unintended increase of the moment capacity. This is due to
that ADINA uses von Mises plastic theory and thereby automatically uses a Poisson’s
ratio of υ = 0.5 during the plastic phase, no matter what input value that is given,
Augustsson and Härenstam (2010). However, this phenomenon will not appear when
using a beam grillage model, which is further discussed in Section 5.5.1.
To be able to verify the beam grillage model, an elasto-plastic shell element model is
made for comparison even though the problem with υ = 0.5 during the plastic phase
still exists. In ADINA, the stress distribution is described by a polynomial of order six
as illustrated in Figure 5.8b, Augustsson and Härenstam (2010).
 	
	a) b)
Figure 5.8 Illustration of the a) expected stress distribution with seven integration
points, and b) stress distribution with seven integration points used by
ADINA.
The stress distribution in Figure 5.8b will result in a lower section modulus W and
therefore a lower bending moment resistance than the stress distribution in
Figure 5.8a, since MRd = W∙fy. To gain the same bending moment resistance as the
stress distribution in Figure 5.8a, a modified yield stress fy,mod is used in ADINA. This
modified yield stress can be expressed for rectangular homogenous cross section as
0
2
4
6
8
10
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [mm]
Length, x [m]
Point load
Distributed point load 8.0
8.5
9.0
9.5
2.2 2.4 2.6 2.8 3.0 3.2 3.4
Displacement,
 u2 [mm]
Length, x [m]
Point load
Distributed point load

-- 84 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 69
y	mod	y f	f

1
,  	(5.3)
where α is a correction factor. In this thesis is α = 0.231 used, which is derived in
Augustsson and Härenstam (2010).
5.5 Beam elements
5.5.1 Beam grillage
A grillage of beams using beam elements can be used when studying an elasto-plastic
response of a slab. This simplified method uses a grid with beams in two directions,
where the width of each beam wb is equal to the spacing between the beams as
illustrated in Figure 5.9.
ly
wb
lx
t
wb
ly
Figure 5.9 Illustration of the beam grillage model with evenly distributed beams in
two directions creating a slab.
It should be noted that this grid will cause the beams to overlap in each intersection of
the nodal points. Hence, the beam grillage will have a mass which is twice the
intended. The solution which is used in this thesis to solve this issue is to reduce the
density ρ to half of the intended value. However, this will change the velocity of the
propagating impulse wave c in the material, see equation (5.4), Carlsson and
Kristensson (2012). However, the frequencies will remain unchanged and this
solution will therefore be sufficient.

E
c  	(5.4)
An important advantage with the beam grillage model is that the behaviour of the
beam elements can be manually controlled by using moment-curvature and torsion-
twisting relations, which are treated in Section 5.5.3. This means that the problem
during the plastic phase with shell elements, discussed in Section 5.4 with a Poisson’s
ratio of υ = 0.5, will not exist. Another advantage with a beam grillage model is that,
orthotropic behaviour, different reinforcement arrangement in different sections, and

-- 85 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
70
different amount of reinforcement in top and bottom can be modelled. In this thesis
the properties of the studied slab is equal for both directions and in all sections.
The problem with stress concentration occurring when applying a point load using
shell elements discussed in Section 5.4 can be avoided by using a beam grillage
model. Therefore, the load for both the static analysis and the dynamic analysis are
acting in one point for the beam grillage model, and does not need to be distributed.
Beam elements with the beam width wb equal to the slab thickness t will give the best
results for the FE analysis using beam grillage, Lim (2013). A reinforced concrete
slab with a thickness of t = 0.2 m is used in this thesis, hence the beam width in the
beam grillage model wb = 0.2 m. However, this can be seen as a disadvantage since it
limits the width of the elements to the thickness of the slab.
In Figure 5.10, the local coordinate system of the beam elements and the global
coordinate system used by ADINA (2014) are illustrated. As can be observed, the
local coordinate system uses r, s and t and the global uses X, Y and Z directions. The
main local axes that are used for the beam grillage are r and s. It is around the s axis
that the main bending occurs and it is around the r axis that torsion occurs.
X Y
Z
t
rs
Figure 5.10 Illustration of the global and local coordinate system for beam
elements.
5.5.2 Moment-curvature relation
To ensure that the model behaves as intended, the behaviour of the resisting structure
can be modelled with moment-curvature and torsion-twisting relations, that are
directly implemented in the commercial software ADINA (2014). This is only done
for beams and slab models using beam elements.
For the elasto-plastic cases, the moment-curvature relation used in ADINA is based
on the principle which is discussed in Section 2.8 and illustrated in Figure 2.22. This
means that the beam elements have linear elastic response with the stiffness of state II
until the moment capacity of state III is reached, MRd. The corresponding curvature at
this point is calculated as
b
Rd
pl EI
M
r 	




 1 (5.5)
and for larger curvatures, the beam has a plastic response with no limit in curvature.
This is illustrated in Figure 5.11.

-- 86 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 71
Moment, M
Curvature, 





r
1
MRd
pl	r 




 1
Figure 5.11 Illustration of an ideal moment-curvature relation.
In ADINA, it may be difficult to obtain convergence in the analysis if the inclination
of the moment-curvature relation in the plastic region is zero. Therefore, a small
inclination in this part is used which can be changed depending on how stable the
model is. In Figure 5.12a, an applied load-displacement curve is presented from the
results of an ADINA model for a beam where moment-curvature relation is used. This
relation curve can be used to check if the beam behaves as it should and that the
moment-curvature relation is valid. In Figure 5.12b the same applied load-
displacement curve is presented but with a longer displacement range. For such a
relation curve it can also be observed how stable the model is by seeing how large the
displacement can be before the model stops to work. If the model cannot handle a
sufficiently large plastic displacement, a steeper plastic inclination can be used for the
moment-curvature relation. As can be seen in Figure 5.12b, a small inclination is used
for the plastic part.
a) b)
Figure 5.12 Illustration of the load-displacement relation used in the FE analysis
a) curve illustrating elastic and plastic part, and b) same curve
illustrating the full range of the displacement until the model collapses.
The inclination of the plastic part of the moment-curvature relation which is used in
this thesis is illustrated in Figure 5.13. This inclination results in a small error, but this
is deemed to be small and negligible. When modelling slabs with beam elements the
moment-curvature is used in a corresponding way.
0
1
2
3
4
0.00 0.02 0.04 0.06 0.08 0.10	
Internal resistance,
 R2 [MN]
Displacement, u2 [m]
0
1
2
3
4
0 5 10 15	
Internal resistance,
 R2 [MN]
Displacement, u2 [m]

-- 87 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
72
Moment, M
Curvature, 





r
1
pl	r 




 1 100 m-1
1.05MRd
MRd
Figure 5.13 Illustration of the inclination of the plastic part of the moment-
curvature relation used in the FE analyses.
In this thesis, the yield curvature is (1/r)pl = 2.56∙10-3 m-1 for the beam and
(1/r)pl = 17∙10-3 m-1 for the beams in the beam grillage model.
5.5.3 Torsion-twisting relation
As for moment-curvature relation, a torsion-twisting relation for the beam elements is
manually added to the FE model in the commercial software ADINA (2014). The
torsion-twisting relation is added as a fully linear relation that represents the cracked
cross-section of state II. Torsional moments do not matter when analysing two
dimensional beams, but for the beam grillage model it is essential. The torsional
stiffness and its corresponding torsion-twisting relation is calculated and presented in
Appendix G. A torsional stiffness which corresponds to the stiffness of a cracked
cross-section TII(φ), is used in this thesis. The torsional stiffness can be expressed as
)	(	)	(	

	 I
I
II
II T
I
I
T  	(5.6)
where TI(φ) is the torsional stiffness of an uncracked cross-section and TII(φ) is the
torsional stiffness of a cracked cross-section.
In Table 5.1 the results for different ways to model the torsional stiffness are
presented, where model 1 and 2 uses the torsional stiffness calculated by ADINA. For
model 3 to 6 the torsion-twisting relation is manually inserted and the torsion used in
the current model is defined as T(φ). The values in Table 5.1 are calculated from the
reinforced concrete slab used in this thesis, where the moment of inertia ratio is
III / II = 0.181, see Appendix G. The input data of the studied slab is more thoroughly
presented in Section 6.2.1.

-- 88 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 73
Table 5.1 Comparison between different methods to model the torsional stiffness
T(φ). The values are based on the slab used in this thesis, presented in
Section 6.2.1, where the moment of inertia ratio is III / II = 0.181.
Model țmF
[-]
ksl
[MN/m]
us
[mm]
f
[Hz]
Model 1: Shell element 0.203 10.79 9.27 8.98
Model 2: Beam grillage with default
moment-curvature and torsion-twisting 0.197 10.35 9.67 8.87
Model 3: Beam grillage with
T(φ) = TII(φ) = 0.181TI(φ) 0.196 10.31 9.70 8.87
Model 4: Beam grillage with
T(φ) = TI(φ) 0.168 28.77 3.48 15.44
Model 5: Beam grillage with
T(φ) = 0.1TI(φ) 0.203 8.27 12.10 7.87
Model 6: Beam grillage with
T(φ) = 0.001TI(φ) 0.212 5.68 17.60 6.45
As can be observed from Table 5.1, the transformation factor țmF, the stiffness ksl and
the fundamental eigenfrequency f of the beam grillage model is highly dependent on
the torsional stiffness, especially for model 4 where the torsional stiffness of an
uncracked section is used. The results of model 6 are also relatively different
compared to the other models, but model 6 uses a torsional stiffness T(φ) that is far
from TII(φ), compared to model 4 which uses a T(φ) that is relatively close to TII(φ). It
is not uncommon to have a moment of inertia ratio III / II lower than the one used in
this thesis. For such cases, a model using the torsional stiffness of an uncracked
section will be even more deviant.
The displacement u2 along a straight line is presented in Figure 5.14a and in
Figure 5.14b, where the line is presented in each figure. In Figure 5.14a it can be
noted that model 4 has a deviant shape and it can be the reason why the
transformation factor țmF differs so much for this model. The difference between
model 3 and model 4 is greater in Figure 5.14b than in Figure 5.14a which means that
the beam grillage model corresponds to shell elements better in the centre of the slab
than closer to the supports.

-- 89 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
74
a) b)
Figure 5.14 Comparison between four methods to model the torsional stiffness T(φ)
for a load of 100 kN, a) displacement u2 along a straight line described
in the upper right hand corner, and b) displacement u2 along a straight
line described in the upper right hand corner.
When calculating the moment distribution in a slab by hand with either strip method
or yield line method, see Section 2.8.3, the slab is considered to have lost all its
torsional stiffness, therefore the stiffness is set to zero, Engström (2014). However in
reality some torsional stiffness still exists even though the slab is in state II.
The importance of torsional stiffness is not further analysed in this thesis, and a
torsional stiffness of T(φ) = TII(φ) is chosen. This is because the torsional stiffness TII
corresponds well to the stiffness which is used by ADINA when analysing slabs with
shell elements and a comparison between the two FE models can be conducted.
0
4
8
12
16
20
0.0 1.4 2.8 4.2 5.6
Displacement,
 u2 [mm]
Length, x [m]
0
4
8
12
16
20
0.0 1.4 2.8 4.2 5.6
Displacement,
 u2 [mm]
Length, x [m]
Model 1
Model 3
Model 4
Model 6

-- 90 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 75
6 Comparison between 2DOF and FE Models
6.1 Comparison for a beam
6.1.1 Orientation
In the FE analysis a simply supported reinforced concrete beam is analysed, which
can be compared to a 2DOF model with a barrier. For simplicity the reinforcement is
placed symmetrically in equal amounts at the top and bottom of the beam as
illustrated in Figure 6.1. The FE analysis is carried out with the commercial software
ADINA (2014).
wb
hb
EIb
 l ȕ l
lb
P
Figure 6.1 The simply supported reinforced concrete beam with stiffness EIb, width
wb, length lb, height hb and the load placement factors α and ȕ.
The geometry and parameters of the beam used in the FE model are presented in
Table 6.1. The material and cross-sectional properties presented are calculated in the
same manner as the calculations presented in Appendix G, where the properties of the
beams in the beam grillage model are calculated. The properties in Table 6.1 are used
for both elastic and elasto-plastic beams, but for elastic cases the moment-curvature
relation continues to be linear elastic after the moment capacity is reached.
The chosen beam presented in Table 6.1 is very large and has therefore a very large
mass mb of 15 000 kg. The reason for this is that the beam, which in the 2DOF model
represents body 2, should have a mass after multiplication with the transformation
factor țmF that is approximately equal to 7 500 kg, which is the mass m2 used earlier
in this thesis.
The comparison for beams is conducted for elastic body 1 and body 2, elasto-plastic
body 1 and elastic body 2 and finally, elastic body 1 and elasto-plastic body 2. Not so
many collisions are analysed for beams, since the main interest of this thesis is slabs.

-- 91 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
76
Table 6.1 Properties of the simply supported reinforced concrete beam, with
corresponding input parameters to ADINA.
Length lb 5 m
Height hb 1 m
Width wb 1.25 m
Mass mb 15 000 kg
Density ρc 2 400 kg/m3
Concrete class C30/37
Concrete Young’s modulus Ecm 33 GPa
Reinforcement B500B Φ16 s200
Reinforcement Young’s modulus Es 200 GPa
Concrete cover c 40 mm
Moment capacity MRd 519 kNm
Yielding curvature pl	r 




 1 2.56∙10-3 m-1
The stiffness of body 2 k2, used in the 2DOF model, is calculated for a beam
according to equation (4.31), as
2	2	3
3

		l
EI
k b
b  (6.1)
6.1.2 Elastic body 1 and body 2
To be able to perform valid comparisons between 2DOF and FEM for slab and beam
collisions with elasto-plastic response, the 2DOF and FEM models are verified for an
elastic beam collision case. This is evaluated more thoroughly in the precedent
master’s thesis Asplund and Steckmest (2014).
A collision with elastic response for both involved bodies is evaluated and the bodies
have properties according to Table 6.1 and Table 6.2.The position of the point load is
represented by the factor α and is illustrated in Figure 4.3.
Table 6.2 2DOF input parameters for collision E1 with an elastic response for
both body 1 and body 2.
Case α
[-]
țmF
[-]
k1
[MN/m]
k2
[MN/m]
m1
[kg]
Collision E1 0.5 0.486 1.0 77.8 1 500
The parameters are chosen so that they approximately correspond to the collision
examples presented in Chapter 3. The parameters m2, Eeq, EIb and kb for the 2DOF
model are calculated according to Section 4.2.2.

-- 92 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 77
The displacement for body 2 u2 and the internal resistance of body 1 R1 for the 2DOF
and FE model are illustrated in Figure 6.2. In Figure 6.2b it is observed that the
duration of the collision is approximately 0.12 s. As can be observed, the two models
are quite comparable, though there are some differences. The two models are showing
the same response until the unloading stage and after the collision there is a slight
shift in the phase of the beam oscillation. These shifts can origin from a slight
difference in eigenfrequency.
a) b)
Figure 6.2 Comparison between the 2DOF model and the FE model for
collision E1, a) displacement of body 2 u2, and b) internal resistance of
body 1 R1.
The transformation factor țmF is calculated from the results achieved from the
corresponding static FE analysis according to equation (4.27). The factor țmF is
calculated to 0.485 which is close to the theoretically derived factor țmF = 0.486, see
Appendix D.1.
As can be observed in Appendix D.1, where elastic collisions are presented for the
2DOF system studied in Section 3.2.2, collision E1 corresponds well to earlier studied
impacts.
6.1.3 Elasto-plastic body 1 and elastic body 2
In reality the bodies involved in a collision may have more of an elasto-plastic
response. In this section, a series of four different collisions with elasto-plastic
response of body 1 and elastic response of body 2 are evaluated. The studied beam
and the colliding object have properties according to Table 6.1 and Table 6.3. The
position of the point load is represented by the factor α and is illustrated in Figure 6.1.
-10
0
10
20
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM
0
300
600
900
1200
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM

-- 93 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
78
Table 6.3 2DOF input parameters for collision F1-F4 with elasto-plastic
response of body 1 and elastic response of body 2.
Case α
[-]
țmF
[-]
k1
[MN/m]
k2
[MN/m]
m1
[kg]
R1,max
[kN]
Collision F1 0.5 0.486 1.0 77.8 1 500 500
Collision F2 0.5 0.486 1.0 77.8 1 500 250
Collision F3 0.25 0.774 1.0 138.4 1 500 500
Collision F4 0.25 0.774 1.0 138.4 1 500 250
The parameters are chosen so that they approximately correspond to the collision
examples presented in Chapter 3. The parameters m2, Eeq, EIb and k2 for the 2DOF
model are calculated according to Section 4.2.3.
The displacement of body 1 for collision F1 for both the 2DOF and FE model are
illustrated in Figure 6.3a and as can be observed, the 2DOF and FE models generate
identical results. Figure 6.3b illustrates the internal resistance of body 1 and it can be
observed that the duration of the collision is approximately 0.15 s. However, when
comparing the displacement and velocity of body 2 between the two methods, there
are some very small differences as can be observed in Figure 6.3c and Figure 6.3d.
The two models are showing the same response until the unloading stage and after the
collision there is a slight shift in the phase. It is due to the same reason as for
collision E1 in Section 6.1.2.
The maximum displacement of body 2 u2 for collision F1 is not similar to that of
collision E1 in Figure 6.2a, even if these two collisions have the same input data,
except for the maximum internal resistance of body 1 R1,max. The elasto-plastic
collision F1 causes a smaller maximum displacement of body 2 u2 than the elastic
collision E1. This is due to the fact that an elastic body 1 creates a larger internal
resistance R1, which means a larger load on body 2.
Note that the duration of the collision is 0.15 s, but the difference in displacement
u1 – u2 = 0 at the time 0.22 s. This difference is due to the fact that body 1 has endured
plastic deformations.

-- 94 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 79
a) b)
c) d)
Figure 6.3 Illustration of the response for collision F1, a) displacement of body 1
u1, b) internal resistance of body 1 R1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
The displacement of body 1 for collision F3 for both the 2DOF and FE model are
illustrated in Figure 6.4a and as can be observed, the two models generate identical
results. Figure 6.4b illustrates the internal resistance of body 1 and it can be observed
that the duration of the collision is approximately 0.15 s. This is the same as for
collision F1 which is expected since they both have the same maximum internal
resistance R1,max. However, there are some differences when comparing the
displacement and velocity of body 2 between the two methods, as can be observed in
Figure 6.4c and Figure 6.4d. The differences are larger than for collision F1 and it is
due to the change in the position of the point load. However, the maximum
displacement for body 2 is corresponding.
The transformation factor țmF is derived from static load cases which correspond well
to the dynamic load cases if the load is applied in the centre of the span. However, the
closer to the supports the point load is applied the larger the difference between static
and dynamic cases. This is discussed more thoroughly in both Asplund and
Steckmest (2014) and Johansson (2014).
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
-5
0
5
10
15
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM
-1.0
-0.5
0.0
0.5
1.0
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 95 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
80
a) b)
c) d)
Figure 6.4 Illustration of the response for collision F3, a) displacement of body 1
u1, b) internal resistance of body 1 v1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
For corresponding response diagrams for collision F2 and F4, see Appendix C.2.
6.1.4 Elastic body 1 and elasto-plastic body 2
To model a realistic behaviour for the structure, an elasto-plastic response of the beam
is used. However, the transformation factor țmF is dependent on both elastic and
plastic response and is unique for each set of properties. For a beam with the impact
applied in the centre, three cases with different transformation factors are evaluated
further. The further evaluated transformation factors are fully elastic țmF = 0.486,
fully plastic țmF = 0.333 and one in between țmF = 0.410. These cases are presented in
Table 6.4, where MRd, α and lb is described in Table 6.1 and Figure 6.1.
Body 1 is modelled with elastic response for all three cases. The studied beam has
properties according to Table 6.1. The position of the point load is represented by the
factor α as illustrated in Figure 4.3. Collision G1a-G1c are all identical except for the
transformation factor țmF, i.e. only the 2DOF model varies between the three cases.
The maximum internal resistance of body 2 R2,max is calculated with moment
equilibrium as
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
-4
0
4
8
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM
-0.4
-0.2
0.0
0.2
0.4
0.6
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 96 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 81
b
Rd
max	2, l
M
R )	1	(	

	 
 (6.2)
where MRd, α and lb is described in Table 6.1 and Figure 6.1.
Table 6.4 2DOF input parameters for collision G1a-G1c with different
transformation factor țmF and with elastic response of body 1 and
elasto-plastic response of body 2.
Case α
[-]
țmF
[-]
k1
[MN/m]
k2
[MN/m]
m1
[kg]
R2,max
[kN]
Collision G1a 0.5 0.486 0.5 77.8 1 500 415
Collision G1b 0.5 0.410 0.5 77.8 1 500 415
Collision G1c 0.5 0.333 0.5 77.8 1 500 415
The displacement of body 1 for collision G1a for both the 2DOF and FE model are
illustrated in Figure 6.5a and as can be observed, the two models generates similar
results Even though the transformation factor țmF differs between the three cases, the
displacement of body 1 for the 2DOF model is very similar. This is due to the fact that
the internal resistance R1 is the same for all three cases and that the magnitude of the
displacement u1 and the velocity v1 is so large in comparison to the difference between
the transformation factors țmF. The reason u1 and v1 are large is because the stiffness
ratio k1 / k2 is small. As illustrated in Figure 6.5b the duration of the collision is
approximately 0.16 s.
However, when comparing the displacement and velocity of body 2 for the two
methods, there are some differences as can be observed in Figure 6.5c and
Figure 6.5d. It shows that the response of the collision modelled in ADINA is not
corresponding to the case modelled with a fully elastic țmF, collision G1a. This is
expected since it is an elasto-plastic model.

-- 97 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
82
a) b)
c) d)
Figure 6.5 Illustration of the response for collision G1a, a) displacement of body 1
u1, b) internal resistance of body 1 R1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
When comparing the displacement and velocity of body 2 for the two methods, there
are some differences as can be observed in Figure 6.6a and Figure 6.6b. It shows that
the response of the collision modelled in ADINA is not directly in between the fully
elastic and fully plastic case. However, it is closer than for collision G1a, which
shows that it is closer to the fully plastic case.
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM -1.0
0.0
1.0
2.0
3.0
4.0
5.0
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 98 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 83
a) b)
Figure 6.6 Illustration of the response for collision G1b, a) displacement of body 2
u2, and b) velocity of body 2 v2.
When comparing the displacement and velocity of body 2 between the two models for
collision G1c there are some minor differences as can be observed in Figure 6.7a and
Figure 6.7b. It clearly shows that the response of the collision modelled in ADINA is
very close to fully plastic. However, this result is unique for this specific beam and
incoming object, since the response is highly dependent on the properties of the two
bodies.
a) b)
Figure 6.7 Illustration of the response for collision G1c, a) displacement of body 2
u2, and b) velocity of body 2 v2.
6.1.5 Discussion
The 2DOF has good correspondence with the FE model when body 2 has a fully
elastic response, the correspondence is however better the closer the impact is to the
centre of the beam. When comparing the response of the displacement of body 2 u2
for collision E1 in Figure 6.2a, with u2 for collision F1 in Figure 6.3c, the results are
different. The elasto-plastic collision F1 causes a smaller maximum displacement of
body 2 than the elastic collision E1, which means that there is a large difference if
body 1 is elastic or elasto-plastic. However, it is on the safe side to assume an elastic
behaviour of body 1, which agrees with the theory given in Section 2.3.1.
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM -1.0
0.0
1.0
2.0
3.0
4.0
5.0
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM -1.0
0.0
1.0
2.0
3.0
4.0
5.0
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 99 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
84
The elasto-plastic behaviour of body 2 has good correspondence between the 2DOF
and the FE model for beams subjected to an impact in the centre of the beam, if a
correct transformation factor țmF is chosen. The usage of țmF can be improved by
finding an approach that calculates an optimised țmF for each collision. This approach
could be based on calculation of the elastic displacement uel and plastic displacement
upl of the beam. If upl ≈ 0, an elastic țmF is used, if upl >> uel a plastic țmF is used, and
if upl ≈ uel a mean value of an elastic and plastic țmF is used.
The response for both elastic and elasto-plastic behaviour for body 1 is the same for
both the FE model and the 2DOF model, which validates that ADINA handles a mass
and a spring similar to the 2DOF model using the Central Difference Method.
This section handles beams subjected to collisions, however if further conclusions
should be drawn, more collision cases need to be analysed. This is not treated in this
thesis since the main focus is collision impact at slabs.
6.2 Comparison for a slab
6.2.1 Orientation
In the FE analysis a simply supported reinforced concrete slab is used which is
compared to a 2DOF model with a barrier. For simplicity is the reinforcement placed
symmetrically in equal amounts at the top and at the bottom of the slab, as illustrated
in Figure 6.8. The FE analyses are carried out with the commercial software
ADINA (2014).
lx
αy∙l
αx∙l
ly
tsl
EIsl
Figure 6.8 The simply supported reinforced concrete slab with stiffness EIsl, length
lx, length ly, thickness tsl and the load placement factors αx and αy.
The geometry and the parameters of the slab modelled with shell elements are
presented in Table 6.5. The length, width and thickness ratios of the slab is chosen so
that 28 x 28 elements can be used and a length thickness ratio l / t = 28 is gained as
discussed in Section 4.4.2. The magnitude of the length, width and thickness of the
slab is chosen so that the mass of the slab msl becomes approximately the same as the
mass of the beam in Section 6.1, i.e. 15 000 kg. The reinforcement arrangement and
the concrete class are chosen to represent a standard, but quite stiff slab. In this
chapter, more collisions are analysed than for beams in Section 6.1 since the main
interest of this thesis is slabs.

-- 100 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 85
Table 6.5 Properties of the concrete slab used in the shell element model and for
hand calculations.
Length x-direction lx 5.6 m
Length y-direction ly 5.6 m
Thickness tsl 0.2 m
Mass msl 15 052.8 kg
Density ρc 2 400 kg/m3
Concrete class C30/37
Concrete Young’s modulus Ecm 33 GPa
Reinforcement B500B Φ16 s200
Reinforcement Young’s modulus Es 200 GPa
Concrete cover c 30 mm
Equivalent Young’s modulus Eeq 5.98 GPa
Moment capacity mRd,m 67.2 kNm/m
The geometry and the parameters of the beams used in the beam grillage model which
is used for further analysis are presented in Table 6.6. The material and cross-
sectional properties for the two slab models presented in the tables are calculated
according to Appendix G.
Note that there is a difference in the density ρ between the two slab models, this is
discussed more thoroughly in Section 5.5.1.
Table 6.6 Properties of the concrete beams used in the beam grillage model.
Length lb 5.6 m
Height hb 0.2 m
Width wb 0.2 m
Density ρc 1 200 kg/m3
Concrete class C30/37
Concrete Young’s modulus Ecm 33 GPa
Reinforcement B500B Φ16 s200
Steel Young’s modulus Es 200 GPa
Concrete cover c 30 mm
Moment capacity MRd,b 13.4 kNm
Yield curvature pl	r 




 1 17∙10-3 m-1
Torsional stiffness relation

II	T 674.4 kNm2

-- 101 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
86
6.2.2 Elastic body 1 and body 2
To be able to perform valid comparisons between 2DOF and FEM for slab collisions
with elasto-plastic response, the 2DOF and FE models are confirmed for a series of
twelve collisions with an elastic response for both body 1 and body 2. The input
parameters for these collisions are presented in Table 6.7. The transformation factor
țmF and the stiffness of the slab ksl used for these collisions are the corresponding
factors derived in Section 4.4.2, for a slab modelled with shell elements. The length
factors αx and αy are defined as illustrated in Figure 6.8.
Table 6.7 2DOF and FE input parameters for collision H1-H12 with initial
velocity v0 = 27.8 m/s.
Case αx [-] αy [-] țmF [-] k1 [MN/m] m1 [kg] ksl [MN/m]
Collision H1 0.5 0.5 0.203 0.5 1 500 10.79
Collision H2 0.5 0.25 0.235 0.5 1 500 15.94
Collision H3 0.25 0.25 0.241 0.5 1 500 22.02
Collision H4 0.5 0.5 0.203 1 1 500 10.79
Collision H5 0.5 0.25 0.235 1 1 500 15.94
Collision H6 0.25 0.25 0.241 1 1 500 22.02
Collision H7 0.5 0.5 0.203 0.5 15 000 10.79
Collision H8 0.5 0.25 0.235 0.5 15 000 15.94
Collision H9 0.25 0.25 0.241 0.5 15 000 22.02
Collision H10 0.5 0.5 0.203 1 15 000 10.79
Collision H11 0.5 0.25 0.235 1 15 000 15.94
Collision H12 0.25 0.25 0.241 1 15 000 22.02
A comparison between the responses for the 2DOF and the FE models modelled with
both shell elements and as a beam grillage, for collision H1, can be seen in Figure 6.9.
As can be observed, the response for the two FE models is almost the same. The
response of body 1 is identical between the 2DOF and the FE models. However, there
is a difference in the response for body 2 between the 2DOF and the FE models.
As can be seen from the internal resistance of body 1 R1 in Figure 6.9b, the collision
has a duration of approximately 0.17 s. In Figure 6.9c, the correspondence between
the displacements of body 2 u2 is approximately the same for the first 0.13 s between
the models, but after that it differs a bit. The small difference seen in Figure 6.9c
during the rebound is believed to cause the phase shift and difference in amplitude
after the collision. The overall behaviour during the collision seems to be good, and it
is this response that is of main interest.

-- 102 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 87
a) b)
c) d)
Figure 6.9 Illustration of collision H1, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, d) velocity of
body 2 v2.
In Figure 6.10, collision H1 is compared with collision H4 for the shell element
model. When comparing these collisions, it is only the stiffness of body 1 k1 that is
different and it is collision H4 that has a stiffer body 1. The duration of the collision is
shorter with a larger k1 as seen in Figure 6.10b, and discussed in Chapter 3. To be
noted is that a larger stiffness also gives larger maximum displacement of body 2 u2,
as seen in Figure 6.10a.
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-40
0
40
80
120
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-2
-1
0
1
2
3
4
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 103 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
88
a) b)
Figure 6.10 Comparison in response between collision H1 and collision H4 for the
shell element model, a) displacement of body 2 u2, and b) internal
resistance of body 1 R1.
A comparison between the responses for the 2DOF and the FE models modelled with
both shell elements and as a beam grillage, for collision H12, can be seen in
Figure 6.11. As can be observed, the response for the two FE models is almost the
same. The response of body 1 is identical between the 2DOF and the FE models.
However, there is a difference in the response for body 2 between the 2DOF and the
FE models.
As can be seen from the internal resistance of body 1 R1 in Figure 6.11b, the collision
has a duration of approximately 0.39 s. In Figure 6.11c, the maximum displacements
of body 2 u2 is approximately the same even though the 2DOF model has a slightly
different response. Even though there is a difference after the collision, is the overall
behaviour during the collision good, and it is this response that is of main interest.
-100
0
100
200
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Collision H1
Collision H4
0
200
400
600
800
1000
1200
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Collision H1
Collision H4

-- 104 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 89
a) b)
c) d)
Figure 6.11 Illustration of collision H12, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
In Figure 6.12, collision H9 is compared with collision H12 for the shell element
model. When comparing these collisions, it is only the stiffness of body 1 k1 that is
different and it is collision H12 that has a stiffer body 1. The duration of the collision
is shorter with a larger k1 as seen in Figure 6.12b. To be noted is that a larger stiffness
also gives larger maximum displacement of body 2 u2, as seen in Figure 6.12a.
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0
500
1000
1500
2000
2500
3000
3500
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-50
0
50
100
150
200
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell -4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 105 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
90
a) b)
Figure 6.12 Comparison in response between collision H9 and collision H12 for the
shell element model, a) displacement of body 2 u2, and b) internal
resistance of body 1 R1.
The overall correspondence between the 2DOF and FE models are in this section
good. However, this is probably not the case for all property combinations of body 1
and body 2.
For response diagrams for collision H2-H11, see Appendix C.4.
6.2.3 Elasto-plastic body 1 and elastic body 2
In reality, the involved bodies in a collision may have more of an elasto-plastic
response. In this section a series of eight collisions is evaluated, where body 1 is
modelled with an elasto-plastic response and body 2 is modelled with elastic response.
The input parameters for the studied cases are presented in Table 6.8. To avoid a large
number of collision cases, the point load is applied in the centre of the slab for all
collisions, i.e. αx = αy = 0.5, țmF = 0.203 and ksl = 10.79 MN/m.
Table 6.8 2DOF and FE input parameters for collision I1-I8 with initial velocity
v0 = 27.8 m/s. The point load is applied in the centre of the slab, i.e.
αx = αy = 0.5, țmF = 0.203 and ksl = 10.79 MN/m.
Case k1 [MN/m] m1 [kg] R1,max [MN]
Collision I1 0.5 1 500 0.3
Collision I2 0.5 1 500 0.6
Collision I3 1 1 500 0.3
Collision I4 1 1 500 0.6
Collision I5 0.5 15 000 1
Collision I6 0.5 15 000 2
Collision I7 1 15 000 1
Collision I8 1 15 000 2
A comparison between the responses for the 2DOF and the FE model modelled with
both shell elements and as a beam grillage, for collision I1 can be seen in Figure 6.13.
-50
0
50
100
150
200
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
Collision H9
Collision H12
0
500
1000
1500
2000
2500
3000
3500
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [kN]
Time, t [s]
Collision H9
Collision H12

-- 106 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 91
As can be observed, the response for the two FE models is almost the same. The
response of body 1 is identical between the 2DOF and the FE models. However, there
is a difference in the response for body 2 between the 2DOF and the FE models.
As for collision H1 presented in Figure 6.9, the response of u2 in Figure 6.13c is quite
similar between the models during, but not after the collision, which has the duration
of approximately 0.24 s according to Figure 6.13b. However, it is the response during
the collision that is of main interest.
a) b)
c) d)
Figure 6.13 Illustration of collision I1, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, d) velocity of
body 2 v2.
In Figure 6.14, collision I1 is compared with collision I3 for the shell element model.
When comparing these collisions, it is only the stiffness of body 1 k1 that is different
and it is collision I3 that has a stiffer body 1. The duration of the collision is shorter
with a larger k1 as seen in Figure 6.14b, but the responses of body 1 are similar. As
illustrated in Figure 6.14a, the responses of body 2 are also similar in this comparison,
even though k1 is twice as large for collision I3 as for collision I1. That the responses
are similar is due to that both collisions has the same maximum internal resistance of
body 1 R1,max, and this parameter is more dominant than k1 for these collisions.
However, a larger stiffness still gives larger maximum displacement of body 2 u2.
-2
-1
0
1
2
3
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
50
100
150
200
250
300
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-40
-20
0
20
40
60
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 107 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
92
a) b)
Figure 6.14 Comparison in response between collision I1 and collision I3 for the
shell element model, a) displacement of body 2 u2, and b) internal
resistance of body 1 R1.
A comparison between the responses for the 2DOF and the FE model modelled with
both shell elements and as a beam grillage, for collision I8 can be seen in Figure 6.15.
As can be observed, the response for the two FE models is almost the same. The
response of body 1 is identical between the 2DOF and the FE models. However, there
is a difference in the response for body 2 between the 2DOF and the FE models.
As for collision I1 presented in Figure 6.13, the response of u2 in Figure 6.15c is quite
similar between the models during, but not after the collision, which has the duration
of approximately 0.42 s according to Figure 6.15b. However, it is the response during
the collision that is of main interest.
-50
0
50
100
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Collision I1
Collision I3
0
50
100
150
200
250
300
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Collision I1
Collision I3

-- 108 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 93
a) b)
c) d)
Figure 6.15 Illustration of collision I8, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
In Figure 6.16, collision I6 is compared with collision I8 for the shell element model.
When comparing these collisions, it is only the stiffness of body 1 k1 that is different
and it is collision I8 that has a stiffer body 1. The duration of the collision is shorter
with a larger k1 as seen in Figure 6.16b. A larger stiffness also gives larger maximum
displacement of body 2 u2, as seen in Figure 6.16a. In this comparison however, there
is a small difference in maximum displacements of body 2 u2 between collision I6 and
collision I8, this is due to the influence of the maximum internal resistance of body 1
R1,max.
-8
-6
-4
-2
0
2
4
6
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0.0
0.5
1.0
1.5
2.0
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [MN]
Time, t [s]
2DOF
Grillage
Shell
-100
0
100
200
300
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-6
-4
-2
0
2
4
6
8
10
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 109 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
94
a) b)
Figure 6.16 Comparison in response between collision I6 and collision I8 for the
shell element model, a) displacement of body 2 u2, and b) internal
resistance of body 1 R1
In Figure 6.17, a comparison between collision H1, I1 and I2 is presented for the
responses of the shell element analysis. The response of u2 for collision I1 is not
similar at all with the response of u2 for collision H1, even if these two collisions have
the same input data, except for the maximum internal resistance of body 1 R1,max. The
elasto-plastic collision I1 causes a smaller maximum displacement of body 2 u2 than
the elastic collision H1. However, collision I2 has a higher R1,max than collision I1 and
is therefore closer to the fully elastic collision H1.
a) b)
Figure 6.17 Comparison in response between collision H1, collision I1 and
collision I2 for the shell element model, a) displacement of body 2 u2,
and b) internal resistance of body 1 R1.
The overall correspondence between the 2DOF and FE models are in this section
good. However, this is probably not the case for all property combinations of body 1
and body 2.
For response diagrams for collision I2-I7, see Appendix C.5.
-100
-50
0
50
100
150
200
250
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
Collision I6
Collision I8
0.0
0.5
1.0
1.5
2.0
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [MN]
Time, t [s]
Collision I6
Collision I8
-50
0
50
100
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Collision H1
Collision I1
Collision I2
0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Collision H1
Collision I1
Collision I2

-- 110 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 95
6.2.4 Elastic body 1 and elasto-plastic body 2
6.2.4.1 Orientation
For the collision analysis with an elasto-plastic slab, some issues exist. Firstly, it is of
interest to examine the collision impact at an elasto-plastic slab using a beam grillage
model. However, it is concluded in Section 6.2.4.2 that the elasto-plastic beam
grillage model does not have a sufficiently good behaviour. Therefore, shell elements
are used instead for the elasto-plastic slab.
Secondly, it is discovered that the transformation factor țmF, has a lower value than
expected for elasto-plastic slabs modelled with shell elements. This is more
thoroughly evaluated in Section 6.2.4.3.
6.2.4.2 Static study of the elasto-plastic slab model
The concrete slab can be modelled as a beam grillage according to Section 5.5.1. One
way to verify the model is to show the response during loading in a load-displacement
diagram. An increasing prescribed displacement is applied in the system point of the
slab us = u2 to create an internal resistance force R2 in the system point. This response
is illustrated in Figure 6.18 for torsional stiffness model 3 to 6, which are presented in
Section 5.5.3, together with the load capacity calculated with strip method according
to Appendix G.
The analysis shows that a local inaccuracy in the model occurs at the node where the
prescribed displacement is applied, which causes the sharp stop in load capacity for
model 3 to 5 as illustrated in Figure 6.18. The local inaccuracy occurs in one node
which deflects at a much faster rate than the other nodes after a certain point. For
model 6, which is modelled with no torsional stiffness, this local inaccuracy is not
occurring. The reason for this is that model 6 does not reach a load level which is as
high as for model 3 to 5, because model 6 is limited by its moment capacity. Whereas
model 3 to 5 have no load limit since they have no limit in torsional stiffness.
Since the strip method is on the safe side and does not account for torsional stiffness,
it is expected to have the lowest load capacity. Model 6 is showing a load capacity
which is about half the load capacity obtained with the strip method, according to
Appendix G. This indicates that the response of the beam grillage model used is non-
viable.
Figure 6.18 Illustration of the load-displacement response for torsional stiffness
model 3 to 6, see Section 5.5.3, for load case 1 and the load capacity
calculated with the strip method.
0
200
400
600
800
1000
0.0 0.2 0.4 0.6 0.8 1.0
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Model 3
Model 4
Model 5
Model 6
Strip method

-- 111 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
96
The local inaccuracy is believed to happen due to a stress concentration which is
caused by the fact that the torsion-twisting relation is modelled with linear response
and has no limit. Hence, the concrete slab will continue to carry load after the bending
moment capacity of the beam grillage has been reached. A new test where the beam
elements also yield in torsion is conducted, with the yield limit presented in Table 6.9.
The torsion-twisting relation is modelled with a bilinear curve, in the same manner as
the moment-curvature relation for model 3, see Appendix G for the calculation of this
yield limit for the torsional moment.
Table 6.9 Properties for the bilinear torsional stiffness used in the beam grillage
model.
Yield twist φ 4.165 km-1
Torsional moment TII 2.80 kNm
The response is illustrated in Figure 6.19 and as can be observed, the local inaccuracy
phenomenon is now gone. However, the load capacity is still far below the load
capacity obtained with the strip method, which suggests that this beam grillage model
is also non-viable. For corresponding load-displacement relations for load case 2
and 3 and for a rectangular slab, see Appendix F.2.
Figure 6.19 Illustration of the load-displacement response of a beam grillage model
based on torsional stiffness model 3 for load case 1, but with a bilinear
torsion-twisting response.
The response of the same slab modelled with shell elements, according to Section 5.4,
is illustrated in Figure 6.20. Even though the shell elements show a load capacity
which is slightly lower than the load obtained from the strip method, it has a much
more satisfactory response than the response from the beam grillage model. To obtain
a load-displacement curve for the beam grillage model which is somewhat close to the
response from the shell element model, both the moment-curvature and the torsion-
twisting limits needs to be increased with a factor of square root of two. The beam
grillage model with increased strength is illustrated in Figure 6.20.
0
200
400
600
0.0 0.1 0.2 0.3 0.4
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Beam grillage
Strip method

-- 112 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 97
Figure 6.20 Illustration of the load-displacement response of the slab modelled with
shell elements and the slab modelled as a beam grillage with torsion-
twisting and moment-curvature limits increased with a factor of 2 .
It is believed that the reason why the beam grillage model generates a load capacity
which is far below both what the strip method and what the shell element model
suggests, is that the beam grillage model is having trouble distributing the load once
the yield limit is reached in a local beam element. To verify this, the displacement
along a line which goes through the point of loading is plotted for both the beam
grillage and the shell element model. The response between the two failure modes
should be similar with a peak in the centre. As illustrated in Figure 6.21, this is also
the case when compared to the theoretical displacement, discussed in Section 4.4.3.
0
200
400
600
0.0 0.1 0.2 0.3 0.4
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Beam grillage
Shell
Strip method

-- 113 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
98
Figure 6.21 Illustration of the displacement of body 2 u2 on a quadratic slab along a
line for the theoretical assumed model, the beam grillage and the shell
element model. The line and the point of loading are presented in the
upper right hand corner.
The expected failure mode is that there will be a plateau between the yield lines, as
illustrated by the theoretical displacement illustrated in Figure 6.22. It is possible to
observe that the shell element model is having a response which vaguely reminds of a
plateau-in contrast to the beam grillage model which instead has a response which is
similar to the one observed in Figure 6.21. Even though the shell element is showing a
plateau like behaviour, none of the two models is close to the theoretically assumed
displacement, which clearly indicates that there is a major difference between the
assumed failure mode and the obtained. The beam grillage and shell element model
are corresponding better in the centre of the slab, when the load is applied at the
centre of the slab, which agrees with the results obtained in Section 5.5.3.
0.0
0.1
0.2
0.3
0.4
0.5
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical

-- 114 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 99
Figure 6.22 Illustration of the displacement of body 2 u2 on a quadratic slab along a
line for the theoretical assumed model, the beam grillage and the shell
element model. The line and the point of loading are presented in the
upper right hand corner.
In Figure 6.23, the deformation of the whole beam grillage model is illustrated from
different angles of view. From this, the results of Figure 6.21 and Figure 6.22 can be
confirmed, and it can also be stated that the areas close to the corners of the slab is not
deforming as expected.
Figure 6.23 Illustration of the element grid and the deformation of the beam
grillage model in ADINA from two different angles of view.
Based on Figure 6.21, Figure 6.22 and Figure 6.23, the failure mode for the beam
grillage model is believed to be according to Figure 6.24a. This means that the area in
which the moment is distributed at is reduced to half of the area in the expected
failure mode used in the strip method calculations, as schematically illustrated in
Figure 6.24b. This is believed to be the reason why the load capacity for the beam
grillage model without torsional resistance is half of the load capacity according to the
strip method in Figure 6.18.
0.00
0.05
0.10
0.15
0.20
0.25
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical

-- 115 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
100
a) b)
Figure 6.24 Illustration of the suggested failure modes for a simply supported
reinforced concrete slab for load case 1, modelled a) as a beam
grillage, and b) with shell elements. The marked area is the load
carrying part of the slab.
Since the beam grillage model is having trouble distributing the load to the corners of
the slab, a beam grillage model with diagonally placed beams is analysed, see
Figure 6.25. To still have a quadratic cross section of the beams, the distance between
the nodes in x- and y-direction is increased to 0.28 m, which gives a width of the
beams that is 0.28 / 2 = 0.198 m ≈ 0.2 m. Therefore, the same moment-curvature
and torsion-twisting relations as the normal beam grillage model are used.
0.2m
0.2m
0.28m
0.2m
Figure 6.25 Illustration of the diagonal beam grillage model and the cross-section
of the beams.
This model with diagonal beams, is having the expected failure mode and almost the
expected load capacity for a load placed in the centre, see Figure 6.26.

-- 116 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 101
a) b)
Figure 6.26 Study of diagonal beam grillage model for load case 1, a) element grid
and the deformation of the model in ADINA, and b) load-displacement
response.
However, the failure mode and load capacity for a load placed unsymmetrically is not
as expected for the diagonal beam grillage model, see Figure 6.27. Hence, this type of
modelling is non-viable.
a) b)
Figure 6.27 Study of diagonal beam grillage model for load case 3, a) element grid
and the deformation of the model in ADINA, and b) load-displacement
response.
Finally, a beam grillage model with both a normal grid of beams and a diagonal grid
of beams is analysed, see Figure 6.28. The node positions of this model are the same
as for the diagonal beam grillage model. Therefore, the beams in the normal directions
have a width of 0.28 m and the diagonal beams have a width of 0.2 m. The beams with a
width of 0.28 m have moment-curvature and torsion-twisting relations which are calculated in
the same manner as for the normal beam grillage model, see Appendix G. Since this model
now has beams in four directions, whereas the normal beam grillage model has in two
directions, the moment capacity and torsional stiffness capacity is divided by two. The density
is divided by four since it is divided by two for the normal beam grillage model.
0
200
400
600
0.0 0.1 0.2 0.3
Load,
 P [kN]
Displacement, u2 [m]
Beam grillage
Strip method
0
200
400
600
800
0.00 0.05 0.10 0.15
Load,
 P [kN]
Displacement, u2 [m]
Beam grillage
Strip method

-- 117 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
102
0.2m
0.2m
0.28m
0.2m
Figure 6.28 Illustration of the beam grillage model with both a normal grid of
beams and a diagonal grid of beams and the cross-section of the beams.
This model has a quite good plastic deformation shape, as illustrated in Figure 6.29.
However, this model is unstable and cannot handle large displacements and therefore
no distinct load capacity can be found. The response indicates that there are two
different yield limits. The reason for this is believed to be that there are both normal
and diagonal beams with different capacities. It is also difficult to use correct input
data since both normal and diagonal directions are used. This makes it hard to utilise
the advantages of the beam grillage model, i.e. moment-curvature, torsion-twisting,
orthotropic behaviour and different reinforcement arrangement in different sections.
This model can therefore be considered as non-viable as well.
a) b)
Figure 6.29 Illustration of how the element grid and the deformation of the beam
grillage model with both a normal grid of beams and a diagonally grid
of beams. For a) load case 1, and b) unsymmetrical load case.
Based on this, the elasto-plastic slab used for the analyses in this thesis is modelled
with shell elements. This despite that ADINA (2014) will set the Poison’s ratio to
υ = 0.5 when the shell elements yields, which causes an unintended increase of the
moment capacity, as discussed in Section 5.4.
The failure mode for a slab modelled with shell elements is not completely as
expected and has a smoother deformation shape than expected, as seen in Figure 6.22.
This is believed to depend on the fact that the failure mode for a slab subjected to a
point load cannot be derived from the same principles used for a uniformly distributed
load. Hence, the obtained failure mode is different from the expected one. This is
believed to be the reason why the load capacity for a slab modelled with shell
elements is slightly lower than the expected load capacity obtained from the strip
method, as illustrated in Figure 6.20.
In Figure 6.30 the plastic strain distribution is illustrated for load case 1 and 3, were
purple and blue indicates that the strain is low or around the yield limit and red and

-- 118 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 103
pink indicates a very high plastic strain. The plastic strain can be interpreted as
yielding in the reinforcement, which means that the yield strain can be seen as an
illustration of the yield lines. For load case 1 in Figure 6.30a, it can be observed that
the failure mode reminds of the expected one, which explains why the load capacity
obtained is close to that calculated with the strip method. However, for load case 3 the
failure mode is different from the expected, as illustrated in Figure 6.30b. The same
goes for load case 2 and for load cases on rectangular slabs, which are presented with
corresponding illustrations in Appendix F.2.
No yield strain
High yield strain
a) b)
Figure 6.30 Illustration of the distribution of the plastic strain in x-direction for
a) load case 1, and b) load case 3.
In Figure 6.31a, the load-displacement response for load case 1 is illustrated. It can be
stated that the strip method calculations has very similar load capacity to that of the
shell element model. This is probably a result of that the failure mode reminds of the
expected one, as seen in Figure 6.30a. However, the load capacity calculated with the
strip method is not on the safe side for load case 1, even if it is close. In Figure 6.31b,
the load-displacement response for load case 3 is illustrated. The load capacity
calculated with the strip method is in this case clearly overestimated if compared to
that from the FE analysis. This is probably a result of that the failure mode is far from
the expected one, as seen in Figure 6.30b.
a) b)
Figure 6.31 Illustration of the load-displacement response of the shell element
model for a slab subjected to a point load a) load case 1, and b) load
case 3.
To verify that the shell element model is valid, a uniformly distributed load is applied
on the same quadratic slab and on a rectangular slab with side length lx = 2ly. As can
0
200
400
600
0.0 0.1 0.2 0.3 0.4
Load,
 P [kN]
Displacement, u [m]
Shell
Strip method 0
200
400
600
800
0.0 0.1 0.2 0.3
Load,
 P [kN]
Displacement, u [m]
Shell
Strip method

-- 119 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
104
be observed in Figure 6.32 the failure mode is the same as the expected one as
discussed in Section 2.8.3. Purple and blue indicates that the strain is low or around
the yield limit and red and pink indicates a very high plastic strain.
No yield strain
High yield strain
a) b)
Figure 6.32 Illustration of the distribution of the plastic strain in x-direction for
a) quadratic slab subjected to a uniformly distributed load, and
b) rectangular slab with side length lx = 2ly subjected to a uniformly
distributed load.
The load capacity is calculated with the strip method according to Appendix G for
both of the cases with uniformly distributed load. As can be observed in Figure 6.33,
the load capacity obtained with the strip method is below the load obtained from the
shell element model, hence the strip method is on the safe side as expected. This
means that the shell element model is valid. However, this also means that it is not
possible to directly translate the analogy of the strip method used for slabs subjected
to uniformly distributed loads, onto slabs subjected to point loads.
a) b)
Figure 6.33 Illustration of the load-displacement response, where the displacement
uc is measured in the centre of the slab, of the shell element model for a
slab subjected to a uniformly distributed load a) quadratic slab, and
b) rectangular slab with side length lx = 2ly.
To further verify the shell element model for a quadratic slab with a uniformly
distributed load, its displacement lines are compared to the theoretical displacement
lines, see Figure 6.34. From this comparison it can be concluded that the
displacements are also close to the expected, just as the strains illustrates in
Figure 6.32.
0
20
40
60
0 0.1 0.2 0.3 0.4 0.5
Distributed load,
 q [kN/m
2]
Displacement, uc [m]
Strip method
Distributed load 0
10
20
30
40
0 0.1 0.2 0.3 0.4 0.5
Distributed load,
 q [kN/m
2]
Displacement, uc [m]
Strip method
Distributed load

-- 120 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 105
a) b)
Figure 6.34 Displacement of body 2 u2, on a quadratic slab subjected to a uniformly
distributed load, along a line for the shell element model and the
theoretical assumed model. For a) a line through the centre, and b) a
line between the centre and the edge.
For additional plastic strain distribution diagrams for load case 2 and for a rectangular
slab with side length lx = 2ly subjected to a point load in the centre, see Appendix F.3.
6.2.4.3 Reduction of the plastic transformation factor κmF,pl
The slab modelled with shell elements subjected to a point load, does not have the
shape of a pyramid when having elasto-plastic behaviour, as illustrated in Figure 6.21
and Figure 6.22. More figures illustrating this phenomenon is shown in Appendix F.1.
This result do not agree with Section 4.4.3, where a pyramid like deformation shape
of the slab is assumed when țmF,pl is derived. The displacement in the system point us,
is larger than for a pyramid shaped yield response, if this is compared to the mean
displacements for all the nodes of the slab. This leads to a lower țm,pl, and thereby a
lower țmF,pl according to equation (6.3) derived in Section 4.1.2.
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
 	(6.3)
In Figure 6.35, țmF is plotted as a function of the displacement at the system point us,
for the static load cases 2 and 3 presented in Section 4.4.2. As can be seen, țmF do not
have one single value for the plastic part. Instead țmF seems to decrease with
increasing displacement in the system point us. It can also be observed that țmF is
lower than the derived țmF,pl = 1/6 in Section 4.4.3. For corresponding diagrams for țm
and țF, see Appendix D.2.
In Figure 6.35, it can also be seen that the curve for țmF depends on the actual load
case. Load case 2 has a value for țmF of approximately 0.10 when the displacement in
the system point us of the slab is 0.6 m. Load case 3 on the other hand has a value of
approximately 0.07 for țmF when the displacement in the system point us of the slab is
0.6 m.
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Shell
Theoretical 0.0
0.1
0.2
0.3
0.4
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Shell
Theoretical

-- 121 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
106
a) b)
Figure 6.35 Illustration of the transformation factor țmF plotted as a function of the
displacement at the system point of body 2 u2 for a) load case 2, and
b) load case 3.
Since of the transformation factors being different for different static load cases and
different plastic displacements, it can be suspected that țmF does not have the same
curve for a dynamic case, where the load duration is short and load magnitude is high,
as for a static case where the load is stepwise applied. Figure 6.36a shows țmF as a
function of the displacement of body 2 u2 for the static load case 1 and the
corresponding curve for a dynamic case. The dynamic case is a collision impact with
properties of body 1 according to collision H10 in Table 6.7 but with an initial
velocity of v0 = 10 m/s. The displacement of body 2 u2 as a function of time for the
dynamic case is illustrated in Figure 6.36b. The values of țmF for the dynamic case are
derived during the first 0.27 s of the collision, until the maximum displacement u2 has
occurred.
Figure 6.36a clearly shows that the values for țmF are not the same for static and
dynamic cases. The dynamic case has lower values for țmF than the static case, which
means that the dynamic case has a more locally shaped deformation around the load
application area according to equation (6.3). The reason for this is believed to be that
the slab does not have the time to distribute the deformation completely, because of
the relatively short duration of the collision impact. However, the dynamic case will
have a țmF which is the same as for a static case when the deformation has reached its
maximum value.
0.08
0.12
0.16
0.20
0.24
0.0 0.2 0.4 0.6
Transformation factor
, țmF [-]
Displacement, u2 [m]
Elastic
Static plastic
0.06
0.10
0.14
0.18
0.22
0.26
0.0 0.2 0.4 0.6
Transformation factor
, țmF [-]
Displacement, u2 [m]
Elastic
Static plastic

-- 122 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 107
a) b)
Figure 6.36 Illustration of a) the transformation factor țmF plotted as a function of
the displacement at the system point of body 2 u2 for load case 1, and
the first 0.25 s of a dynamic case based on collision H10 but with an
initial velocity v0 = 10 m/s, and b) the displacement at the system point
us as a function of time for the current dynamic case.
In Figure 6.37, the static displacement is compared to the dynamic case used in
Figure 6.36. These plots further confirms that slabs subjected to an impact load can
have more local displacements around the load application area than slabs subjected
to static point loads.
a) b)
Figure 6.37 Displacement of body 2 u2, on a quadratic slab subjected to a static
point load and a dynamic case 0.14 s into the collision used in
Figure 6.36. For a) a line through the centre, and b) a line between the
centre and the edge.
Based on this, it can be stated that țmF can have a lower value than the theoretically
derived value of 1/6, and especially for dynamic cases. Therefore, when analysing an
elasto-plastic slab with 2DOF in Section 6.2.4.4, țmF = 0.1 is tested.
6.2.4.4 Comparison between 2DOF and shell element model
To model a more realistic behaviour for the simply supported reinforced concrete
slab, an elasto-plastic response is used, as discussed in Section 6.2.4.3. A series of
twelve collisions with an elastic response of body 1 and an elasto-plastic response of
0.10
0.12
0.14
0.16
0.18
0.20
0.22
0.0 0.5 1.0 1.5 2.0
Transformation factor
, țmF [-]
Displacement, u2 [m]
Elastic
Static plastic
Dynamic plastic
0
500
1000
1500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
0.0
0.2
0.4
0.6
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Static
Dynamic 0.00
0.05
0.10
0.15
0.20
0.25
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Static
Dynamic

-- 123 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
108
body 2 is conducted with input parameters according to Table 6.10. As described in
Section 6.2.4.3, only shell element models are used for the FE analysis in this section.
Table 6.10 FE and 2DOF input parameters for collision J1-J12.
Case αx
[-]
αy
[-]
k1
[MN/m]
m1
[kg]
v0
[m/s]
2DOF k2
[MN/m]
2DOF R2,max
[kN]
Collision J1 0.5 0.5 0.5 1 500 27.8 10.79 537.7
Collision J2 0.5 0.25 0.5 1 500 27.8 15.94 537.7
Collision J3 0.25 0.25 0.5 1 500 27.8 22.02 716.9
Collision J4 0.5 0.5 1 1 500 27.8 10.79 537.7
Collision J5 0.5 0.25 1 1 500 27.8 22.02 537.7
Collision J6 0.25 0.25 1 1 500 27.8 22.02 716.9
Collision J7 0.5 0.5 0.5 15 000 10 10.79 537.7
Collision J8 0.5 0.25 0.5 15 000 10 15.94 537.7
Collision J9 0.25 0.25 0.5 15 000 10 22.02 716.9
Collision J10 0.5 0.5 1 15 000 10 10.79 537.7
Collision J11 0.5 0.25 1 15 000 10 15.94 537.7
Collision J12 0.25 0.25 1 15 000 10 22.02 716.9
The reason for having the lower value of v0 = 10 m/s, or 36 km/h, for collision J6-J12
instead of v0 = 27.8 m/s, as in the previous parts of this thesis, is that v0 = 27.8 m/s
gives extremely large displacements in the slab. The stiffness of body 2 in the 2DOF
model is taken from the stiffness of the slab ksl presented in Table 4.1, and the
maximum internal resistance of body 2 R2,max is derived using the strip method
explained in Section 2.8.3. The length factors αx and αy are defined as illustrated in
Figure 6.8.
Similarly to the beam with elasto-plastic response in Section 6.1.4 the transformation
factor țmF now depends on both elastic and plastic response and is unique for each set
of properties. In Section 6.2.4.3, it is also shown that țmF can be lower than the
theoretically derived value of 1/6 during plastic response, for the slab model used in
this thesis. Because of this uncertainty, different țmF are tested in the 2DOF model for
collision J1-J12. The țmF used in the 2DOF are, the elastic țmF presented in Table 4.1
for different load cases, the theoretically derived plastic țmF = 1/6 from Section 4.4.3,
and țmF = 0.1 as discussed in Section 6.2.4.3.
In Figure 6.38, the load-displacement relation for load case 1 and 3 are illustrated for
both the shell element model and the 2DOF model. As can be seen in Figure 6.38b,
the maximum internal resistance of body 2 R2,max, is very different in the 2DOF model
compared to the shell element model for load case 3. The reason for this is that the
strip method gives a load capacity that is approximately 18 % higher than the load
capacity obtained by the shell element model. It is believed that the assumed failure
mode used in the strip method is not correct. See Appendix F.2 for more load-
displacement diagrams.

-- 124 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 109
The load-displacement relations would have been better if R2,max in the 2DOF model
had been based on the load capacity of the shell element model. However, the strip
method is still used to calculate R2,max for the 2DOF model so that the input data for
the 2DOF model can be based on hand calculations.
a) b)
Figure 6.38 Illustration of the load-displacement relation for the shell element and
the 2DOF model for a) load case 1, and b) load case 3.
A comparison between the responses for the 2DOF system and the FE model with
shell elements for collision J1 can be seen in Figure 6.39. The internal resistance of
body 1 R1 is plotted as a function of time in Figure 6.39b. In this diagram, all the
2DOF model curves and the shell element model correspond well and it can be stated
that the collision has a duration of approximately 0.17 s. However, in contrast to the
analysis carried out with a slab modelled with an elastic response there is now a slight
difference after the collision for the displacement of body 1 u1 as seen in Figure 6.39a.
In Figure 6.39c, the displacement of body 2 u2 as a function of time is illustrated. It
can be seen that the 2DOF closest to the shell element model is the one using
țmF = 0.1, which has a maximum displacement quite close to shell elements, but not
on the safe side.
The response after 0.17 s is not corresponding well between the 2DOF and the shell
element model. A part of this difference is believed to be a result of the difference in
load-displacement relations for load case 1, where the 2DOF model has a sharper
curve than the shell element model, see Figure 6.38. In addition, the load-
displacement relation for the shell element model may be different for dynamic cases
compared to the static cases presented in Figure 6.38. The fact that the actual
transformation factor țmF from the shell element model varies so much is also
believed to affect the correspondence.
0
200
400
600
0.0 0.1 0.2 0.3 0.4
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Shell
2DOF 0
200
400
600
800
0.0 0.1 0.2 0.3
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Shell
2DOF

-- 125 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
110
a) b)
c) d)
Figure 6.39 Illustration of collision J1, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
A comparison between the responses for the 2DOF and the FE model with shell
elements for collision J3 can be seen in Figure 6.40. The internal resistance of body 1
R1 is plotted as a function of time in Figure 6.40b. In this diagram, the 2DOF and the
shell element model do not correspond as well as for body 1 in previous sections of
this thesis. But all models seem to have the same collision duration of approximately
0.17 s. However, in contrast to the analysis carried out with a slab modelled with an
elastic response there is now a slight difference after the collision for the displacement
of body 1 u1 as seen in Figure 6.40a.
In Figure 6.40c, the displacement of body 2 u2 as a function of time is illustrated. It
can be seen that the 2DOF and the shell element model do not correspond at all. One
reason for this is believed to be the great difference in the maximum internal
resistance of body 2 R2,max between the models for load case 3, see Figure 6.38b.
-10
-8
-6
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203 0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203
0
100
200
300
400
500
600
700
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203 -5
0
5
10
15
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203

-- 126 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 111
a) b)
c) d)
Figure 6.40 Illustration of collision J3, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
To decrease the large difference observed in Figure 6.40, the maximum internal
resistance of body 2 R2,max obtained from the FE analysis is used as input data for the
2DOF model instead of the hand calculated R2,max. This is illustrated in Figure 6.41
were it can be observed that the difference between the 2DOF and shell element
model is smaller than in Figure 6.40, but still large.
-12
-9
-6
-3
0
3
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241 0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
-2
0
2
4
6
8
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241

-- 127 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
112
a) b)
Figure 6.41 Illustration of the response for collision J3 with R2,max obtained from the
FE analysis as input data, a) displacement of body 2, and b) internal
resistance of body 1 R1.
A comparison between the responses for the 2DOF and the FE model with shell
elements for collision J7 can be seen in Figure 6.42. The internal resistance of body 1
R1 is plotted as a function of time in Figure 6.42b. In this diagram, the 2DOF and the
shell element model do not correspond as well as for body 1 in previous sections of
this thesis. The models have a collision duration of about 0.55 – 0.6 s. However, in
contrast to the analysis carried out with a slab modelled with an elastic response there
is now a slight difference after the collision for the displacement of body 1 u1 as seen
in Figure 6.42a.
In Figure 6.42c, the displacement of body 2 u2 as a function of time is illustrated. It
can be seen that the 2DOF model closest to the shell element model is the one using
țmF = 0.1, and that all 2DOF model curves maximum displacements are close to the
shell element models.
When comparing collision J7 with collision J10, which is presented in Appendix C.6,
it is only the stiffness of body 1 k1 that is different. As seen the duration of the
collision is shorter with a larger k1 and a larger stiffness gives slightly larger
displacement of body 2 u2.
-200
-100
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241 0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241

-- 128 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 113
a) b)
c) d)
Figure 6.42 Illustration of collision J7, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
A comparison between the responses for the 2DOF and the FE model with shell
elements for collision J9 can be seen in Figure 6.43. The internal resistance of body 1
R1 is plotted as a function of time in Figure 6.43b. In this graph, the 2DOF and the
shell element model do not correspond as well as for body 1 in previous sections of
this thesis. The models have a collision duration of about 0.55 – 0.6 s. However, in
contrast to the analysis carried out with a slab modelled with an elastic response there
is now a difference after the collision for the displacement of body 1 u1 as seen in
Figure 6.43a.
In Figure 6.43c, the displacement of body 2 u2 as a function of time is illustrated. It
can be seen that the 2DOF and the shell element model do not correspond at all, just
as for collision J3. This too is believed to partly depend on the great difference in the
maximum internal resistance of body 2 R2,max between the models for load case 3, see
Figure 6.38b.
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203 -800
-400
0
400
800
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203
0
500
1000
1500
2000
2500
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203
-15
-10
-5
0
5
10
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203

-- 129 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
114
a) b)
c) d)
Figure 6.43 Illustration of collision J9, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
To decrease the large difference observed in Figure 6.43, the maximum internal
resistance of body 2 R2,max obtained from the FE analysis is used as input data for the
2DOF model instead of the hand calculated R2,max. This is illustrated in Figure 6.44
were it can be observed that the difference between the 2DOF and shell element
model is much smaller than in Figure 6.43. As illustrated in Figure 6.44a, the
maximum displacement of body 2 u2 is not so different between the 2DOF and FE
model. This can however be a coincidence.
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241 -600
-300
0
300
600
900
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
0
500
1000
1500
2000
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
-12
-8
-4
0
4
8
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241

-- 130 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 115
a) b)
Figure 6.44 Illustration of the response for collision J9 with R2,max obtained from the
FE analysis as input data, a) displacement of body 2, and b) internal
resistance of body 1 R1.
The overall correspondence between the 2DOF and FE models are in this section
good when the collision impact is located in the centre of the slab. However, when the
collision impact is not located at the centre of the slab, the correspondence is not so
good.
See Appendix C.6 for the corresponding response diagrams regarding collision J1-
J12.
6.2.5 Discussion
The 2DOF has an overall good correspondence compared to both of the FE models
when body 2 has a fully elastic response, the correspondence is however better the
closer the impact is to the centre of the slab. Whether body 1 has elastic or elasto-
plastic response, does not seem to be of high importance for the correspondence of
body 2 between the 2DOF and FE models. However, when comparing the response of
the displacement of body 2 u2 for collision H1 in Figure 6.9c, with u2 for collision I1
in Figure 6.13c, the results are different. The elasto-plastic collision I1 causes a much
smaller maximum displacement of body 2 than the elastic collision H1, i.e. there is a
large difference if body 1 is elastic or elasto-plastic. However, it is on the safe side to
assume an elastic behaviour of body 1, which agrees with the theory in Section 2.3.1.
The shell element model and the beam grillage model have almost the exact same
behaviour for an elastic response of body 2. However, when the slab is yielding in the
FE models, the shell element model and the beam grillage model do not have the
same behaviour at all, and it is decided that the shell element model has the better
behaviour of the two, see Section 6.2.4.2. However, it can be discussed whether the
shell element model produce results close to that expected in a reinforced concrete
slab, since it does not have the expected failure mode. How to model an elasto-plastic
reinforced concrete slab with shell elements needs to be further studied.
The shell element model have the disadvantages that moment-curvature and torsion-
twisting relations cannot be manually implemented, and that the Poisson’s ratio is set
to υ = 0.5 during yielding. It is also hard to have orthotropic behaviour, different
reinforcement arrangement in different sections, and different amount of
reinforcement in top and bottom when shell elements are used. When studying a beam
0
500
1000
1500
2000
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
-600
-300
0
300
600
900
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241

-- 131 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
116
in Section 6.1, the beam elements have good elasto-plastic behaviour and it is first
when the beam elements are used in a beam grillage, it starts to have problems with
the stress distribution.
The correspondence is not good at all if the maximum internal resistance of body 2
R2,max differs to much between the models, which is expected. As an example, for load
case 3, the difference between the hand calculated R2,max = 717 kN, and the
R2,max = 608 kN obtained from FEM, is almost 20 %. Also, the correspondence
between the models is good when the impact is located in the centre of the slab, but
not otherwise.
The correspondence between the 2DOF model and the shell element model for body 1
is less good for collision J7 in Figure 6.42, than for collision tests in earlier sections.
On the other hand, the correspondence between the two models is quite good for
body 2 in this case. The reason for this is believed to be the difference in the load-
displacement relations illustrated in Figure 6.38a.
It can be stated that the 2DOF model with an elasto-plastic response of body 2 can be
improved by having more accurate ways to calculate R2,max and by having a multi-
linear k2 function so that it corresponds to the load-displacement diagram in
Figure 6.38. It is believed that a more accurate stiffness k2 is resulting in an overall
better correspondence between the FE and 2DOF model.
The usage of the transformation factor țmF can also be improved, either by finding an
approach that calculates an optimised țmF for each collision, or by having a varying
țmF. In this section, guessed and constant values for țmF are used, but as discussed in
Section 6.2.4.3, the behaviour of țmF is complex.
By increasing the stiffness of body 1 k1 the duration of the collision is decreased but
most important, the load on body 2 is increased and therefore also the displacement,
as seen in Section 6.2.2, 6.2.3 and 6.2.4.4. This means that by choosing a stiffness
which is larger than expected, a result which is on the safe side is obtained. This is
also more thoroughly discussed in the precedent master’s thesis by Asplund and
Steckmest (2014).

-- 132 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 117
7 Final Remarks
7.1 Conclusions
This thesis is evaluating how the design with regard to collision impact between
simply supported reinforced concrete members and incoming objects, can be carried
out using both FE analysis and a 2DOF model. The studies evaluate elastic and elasto-
plastic response for both the incoming object and the resisting structure. Quadratic
slabs are of main interest but beams are also evaluated. When slabs are evaluated, the
2DOF model is compared to both a shell element model and a beam grillage model.
The FE and 2DOF models have good correspondence for beams with both elastic and
elasto-plastic behaviour and for quadratic slabs with elastic behaviour.
If body 1 has elastic or elasto-plastic response is not of greater importance for the
correspondence between the 2DOF and FE models for body 2. However, a body 1
with elastic behaviour gives larger displacement in the resisting structure than a
body 1 with elasto-plastic behaviour for the same collision, which means that an
elastic body 1 gives results on the safe side. Also, a higher stiffness k1 of body 1 gives
a higher displacement in the resisting structure, and therefore it is on the safe side to
assume a higher stiffness than expected for the incoming object.
When comparing the 2DOF and FE models the latter are seen as reference models
because they are supposed to describe the reality better than the 2DOF model.
However, the beam grillage model with elasto-plastic behaviour does not give the
expected response, even though single beams modelled in the same way have the
correct behaviour. It is therefore concluded that a shell element model better represent
the real behaviour of an elasto-plastic reinforced concrete slab than the case using a
beam grillage model.
For a quadratic slab with elasto-plastic behaviour, the 2DOF and FE model shows
good correspondence when the load is applied at the centre of the slab. One reason for
this is the fact that the hand calculated maximum slab resistance is quite similar to that
from the FE model in this case. However, the hand calculated resistance is not always
on the safe side, as expected when using the strip method.
When the impact location is not located at the centre of the slab, the hand calculated
resistance is not similar to that achieved from the FE model. This because the failure
modes assumed in the hand calculations, do not correspond to those obtained in the
FE model. That is one of the reasons that there is not so good correspondence between
the 2DOF and FE model for these cases. On the other hand, the correspondence is
better if the resistance used in the 2DOF is based on the results from the FE analysis.
However, if the resistance needs to be derived for each case with FE software, then
the collision can be analysed with FE software instead of a 2DOF model. It is
believed that the 2DOF model can be improved if a more accurate way of deriving the
maximum slab resistance is found.
When comparing different values for the transformation factor țmF in the 2DOF model
with the FE model, for a quadratic slab with an elasto-plastic behaviour, there is a
large difference. The result shows that the obtained value of țmF is lower than the
theoretical plastic value of țmF = 1/6, which gives an underestimated value of the
displacement of the slab. This is due to the fact that the theoretical plastic failure
mode is different from the obtained failure mode in the FE model.

-- 133 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
118
In addition, the analysis shows that țmF derived from collision cases is even lower
than that derived from static cases. Since the main interest is the response during the
collision, this phenomenon may be of great importance. The fact that țmF can have a
lower value during collision leads to an even more underestimated value of the slab
displacement.
7.2 Further studies
In this thesis simply supported quadratic concrete slabs are studied and with limited
load cases. To further extend the study, other boundary conditions, different slab
geometries and more load cases should be evaluated.
To get improved results with the 2DOF model for slabs with elasto-plastic behaviour,
hand calculations approaches for the load capacity that gives more accurate results
and on the safe side need to be found. It is believed that the failure mode obtained
from the FE model is different from the failure mode assumed in the hand
calculations, where the yield lines goes straight from the point of loading to the
corners of the slab. To improve the response further in the 2DOF model it is possible
to use a multi-linear stiffness of the slab for better correspondence with the load-
displacement relation of the FE model.
The reality of a slab with elasto-plastic behaviour is in this thesis represented by a FE
model using shell elements. This model could be compared to physical tests or a more
detailed FE model with concrete and reinforcement modelled separately, to verify that
the behaviour of the model is sufficient. Also, the shell element model in this thesis is
made in the commercial FE software ADINA, and can be verified and compared to
models made in other FE software.
The beam grillage model with elasto-plastic response can be further evaluated. Even
though the beam grillage model does not have a good response in this thesis, it has a
large theoretical advantage since manually implemented moment-curvature and
torsion-twisting relations can be used, which gives more control of the slab behaviour
than what is possible using the shell element model. Hence, using a beam grillage
model, orthotropic behaviour, different reinforcement arrangement in different
sections, and different amount of reinforcement in top and bottom can be modelled.
Further studies of how torsion-twisting relations should be handled in a FE model of a
slab can also be done for a beam grillage model. The beam grillage model in this
thesis is made in the commercial FE software ADINA, and it may be possible that this
way of modelling works different in other FE software.
It is discovered in this thesis that the transformation factor țmF is varying when the
slab is yielding and can decrease to a value well below the theoretical derived plastic
value țmF = 1/6, especially for dynamic cases. Therefore, țmF needs to be derived for
different load cases and for different slabs and if necessary, even for different
incoming objects with altering velocities. It is of special interest to evaluate if țmF
differ more between static and dynamic cases when the slab is large, due to local
displacements. It could also be evaluated if it is best to use a constant or a varying
transformation factor țmF during the 2DOF analyse.

-- 134 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 119
8 References
ADINA R and D, Inc., 2014. ADINA System 9.0 Release Notes, Watertown: s.n.
Al-Emrani, M., Engström, B., Johansson, M. and Johansson, P., 2011. Bärande
Konstruktioner, del 1, Göteborg: Chalmers University of Technology.
Asplund, E. and Steckmest, D., 2014. Design with Regard to Collision Impact, Göteborg:
Chalmers University of Technology.
Augustsson, R. and Härenstam, M., 2010. Design of reinforced concrete slab with regard
to explosion, Göteborg: Chalmers University of Technology.
Biggs, J. M., 1964. Introduction to Structural Dynamics. Boston: McGraw-Hill Inc..
Carlsson, M. and Kristensson, R., 2012. Structural Response with Regard to Explosions,
Lund: Lund University.
Cederwall, K., Lorentsen, M. and Östlund, L., 1990. Betonghandboken - Konstruktion.
2nd ed. Stockholm: Svensk byggtjänst.
CEN, 2004. Eurocode 2: Design of concrete structures Part 1-1, Stockholm: SIS
Förlag AB.
Craig Jr., R. R. and Kurdila, A. J., 2006. Fundamentals of Structural Dynamics. 2nd
ed. Hoboken: John Wiley & Sons, Inc..
Engström, B., 2011. Design and analysis of continous beams and columns, Göteborg:
Chalmers University of Technology.
Engström, B., 2014. Design and analysis of slabs and flat slabs, Göteborg: Chalmers
University of Technology.
Fortifikationsförvaltningen, 1973. Provisoriska anvisningar för dimensionering av
armerade betongkonstruktioner som skydd mot verkan av konventionella vapen inom
närmissområde. Bk 25:2 ed. Stockholm: Fortifikationsförvaltningen -
Befästningsavdelningen.
Hultin, E., 1994. Betongplattor, Göteborg: Chalmers University of Technology.
Johansson, M., 2014. Beräkningsmetodik, transportmissöden och trombgenererade
missiler, Göteborg: Reinertsen Sverige AB.
Johansson, M. and Laine, L., 2012. Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 3: Kapacitet hos byggnader, Göteborg: Reinertsen
Sverige AB.
Lim, S., 2013. Redistribution of force concentrations in reinforced concrete cantilever
slab using 3D non-linear FE analyses, Göteborg: Chalmers University of Technology.
Lundh, H., 2000. Hållfasthetslära, Stockholm: Royal Institute of Technology.
Parametric Technology Corporation, 2011. Mathcad 15.0, Needham, MA: Parametric
Technology Corporation.
The Mathworks Inc., 2014. MATLAB r2015b, Natick, MA: The Mathworks Inc..

-- 135 of 228 --



-- 136 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 A-1
Central Difference Method	Appendix A
In this appendix, the Central Difference Method presented in Section 2.7 is
summarised step by step, based on the algorithm in Craig and Kurdila (2006).
Table A.1 Algorithm to solve Newton’s second law of motion with the Central
Difference Method based on Craig and Kurdila (2006).
Step Action
0 (0.1) Input the mass, damping and stiffness matrices M, C, K
(0.2) Calculate the LU factorization of M
(0.3) Input the initial conditions u0 and v0
(0.4) Set the simulation parameters, including the time step h
(0.5) Calculate the initial acceleration from the equations of motion
 		0	0
1
0 )	0	( Ku	Cv	f	M	u 		 

(0.6) Calculate the LU-factorization of
h	h 22
C	M 
(0.7) Calculate the starting displacement value from the equation
0
2
0	0	1 2 u	u	u	u 		 h
h 			
1 Loop for each time step, n = 1 …, tn = t1 …
2 Solve the displacements for the next time step





 




 		




 		




 	 	

 	1	2	2
1
2	1 2
2
)	(
2 n	n	n h	h	h
t
h	h u
C	M
u
M
K	f
C	M
u
3 Evaluate the set of velocities and accelerations, as needed
h
n	n
n 2
1	1 	 
 u	u
u
2
1	1 2
h
n	n	n
n
	 	
 u	u	u
u
4 set n = n+1 and continue to the next time step

-- 137 of 228 --



-- 138 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-1
Results from 2DOF Analysis	Appendix B
B.1 Elastic response without barrier
In this section, results for collision A1-A4 are presented according to the analysis
discussed in Section 3.2.2.
Table B.1 Input parameters for collision A1-A4 with elastic response for the
2DOF system.
Case v0
[m/s]
k1
[kN/m]
m1
[kg]
m2
[kg]
Collision A1 27.8 100 1 500 7 500
Collision A2 27.8 100 15 000 7 500
Collision A3 27.8 1 000 1 500 7 500
Collision A4 27.8 1 000 15 000 7 500
a) b)
c) d)
Figure B.1 Response for collision A1 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
-15
-10
-5
0
5
10
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 -20
-10
0
10
20
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
100
200
300
400
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
-40
-20
0
20
40
60
80
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 139 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
B-2
a) b)
c) d)
Figure B.2 Response for collision A2 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
0
5
10
15
20
25
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 0
10
20
30
40
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
100
200
300
400
500
600
700
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
0
100
200
300
400
500
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 140 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-3
a) b)
c) d)
Figure B.3 Response for collision A3 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
-20
-15
-10
-5
0
5
10
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 -20
-10
0
10
20
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
200
400
600
800
1000
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
-40
-20
0
20
40
60
80
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 141 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
B-4
a) b)
c) d)
Figure B.4 Response for collision A4 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
0
10
20
30
40
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2
0
10
20
30
40
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
500
1000
1500
2000
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
0
100
200
300
400
500
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 142 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-5
a) b)
c) d)
Figure B.5 Response for collision A1-A4 a) kinetic energy Ek,tot for collision A1 and
A3, b) kinetic energy Ek,tot for collision A2 and A4, c) internal work Wi
for collision A1 and A3, and d) internal work Wi for collision A2 and
A4.
0
100
200
300
400
500
600
0.0 0.2 0.4 0.6 0.8 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision A1
Collision A3 0
1000
2000
3000
4000
5000
6000
0.0 0.2 0.4 0.6 0.8 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision A2
Collision A4
0
100
200
300
400
500
600
0.0 0.2 0.4 0.6 0.8 1.0
Internal work,
 Wi [kJ]
Time, t [s]
Collision A1
Collision A3 0
1000
2000
3000
4000
5000
6000
0.0 0.2 0.4 0.6 0.8 1.0
Internal work,
 Wi [kJ]
Time, t [s]
Collision A2
Collision A4

-- 143 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
B-6
B.2 Plastic response without barrier
In this section, results for collision B1-B4 are presented according to the analysis
discussed in Section 3.2.3.
Table B.2 Input parameters for collision B1-B4 with plastic response for the
2DOF system.
Case v0
[m/s]
R1,max
[kN]
m1
[kg]
m2
[kg]
Collision B1 27.8 250 1 500 7 500
Collision B2 27.8 250 15 000 7 500
Collision B3 27.8 500 1 500 7 500
Collision B4 27.8 500 15 000 7 500
a) b)
c) d)
Figure B.6 Response for collision B1 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
0
1
2
3
4
5
6
7
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 0
5
10
15
20
25
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
100
200
300
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
0
10
20
30
40
50
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 144 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-7
a) b)
c) d)
Figure B.7 Response for collision B2 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
0
5
10
15
20
25
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2
0
5
10
15
20
25
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
100
200
300
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
0
100
200
300
400
500
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 145 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
B-8
a) b)
c) d)
Figure B.8 Response for collision B3 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
0
2
4
6
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2
0
5
10
15
20
25
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
100
200
300
400
500
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
0
10
20
30
40
50
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 146 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-9
a) b)
c) d)
Figure B.9 Response for collision B4 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
0
5
10
15
20
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2
0
5
10
15
20
25
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
100
200
300
400
500
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
0
100
200
300
400
500
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 147 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
B-10
a) b)
c) d)
Figure B.10 Response for collision B1-B4 a) kinetic energy Ek,tot for collision B1 and
B3, b) kinetic energy Ek,tot for collision B2 and B4, c) internal work Wi
for collision B1 and B3, and d) internal work Wi for collision B2 and
B4.
0
100
200
300
400
500
600
0.0 0.2 0.4 0.6 0.8 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision B1
Collision B3
0
1000
2000
3000
4000
5000
6000
0.0 0.2 0.4 0.6 0.8 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision B2
Collision B4
0
100
200
300
400
500
600
0.0 0.2 0.4 0.6 0.8 1.0
Internal work,
 Wi [kJ]
Time, t [s]
Collision B1
Collision B3 0
1000
2000
3000
4000
0.0 0.2 0.4 0.6 0.8 1.0
Internal work,
 Wi [kJ]
Time, t [s]
Collision B2
Collision B4

-- 148 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-11
B.3 Elasto-plastic response without barrier
In this section, results for collision C1 and C2 are presented according to the analysis
discussed in Section 3.2.4.
Table B.3 Input parameters for collision C1 and C2 with elasto-plastic response
for the 2DOF system.
Case v0
[m/s]
R1,max
[kN]
k1
[kN/m]
m1
[kg]
m2
[kg]
Collision C1 27.8 250 100 1 500 7 500
Collision C2 27.8 250 100 15 000 7 500
a) b)
c) d)
Figure B.11 Response for collision C1 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
-10
-5
0
5
10
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2
-20
-10
0
10
20
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
50
100
150
200
250
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1
-40
-20
0
20
40
60
80
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2

-- 149 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
B-12
a) b)
c) d)
Figure B.12 Response for collision C2 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
Figure B.13 Change in kinetic energy Ek,tot in the positive direction of body 2 during
collision C1 and C2.
0
5
10
15
20
25
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2
0
5
10
15
20
25
30
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
50
100
150
200
250
300
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R [kN]
Time, t [s]
Body 1 0
100
200
300
400
500
0.0 0.2 0.4 0.6 0.8 1.0
Impulse,
 I [kNs]
Time, t [s]
Body 1
Body 2
0
500
1000
1500
2000
2500
3000
3500
4000
4500
5000
5500
6000
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Kinetic energy,
 Ek,tot
 [kJ]
Time, t [s]
Collision C1
Collision C2

-- 150 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-13
Figure B.14 Change in internal work Wi during collision C1 and C2.
0
500
1000
1500
2000
2500
3000
3500
4000
4500
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Internal work, W
i [kJ]
Time, t [s]
Collision C1
Collision C2

-- 151 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
B-14
B.4 Elastic response with barrier
In this section, results for collision D1-D4 are presented according to the analysis
discussed in Section 3.3.
Table B.4 Input parameters for collision D1-D4 with elastic response for the
2DOF system with initial velocity v0 = 27.8 m/s.
Collision
D1
Collision
D2
Collision
D3
Collision
D4
k1 [kN/m] 100 1 000 400 4 000
k2 [kN/m] 2 000 2 000 2 000 2 000
m1 [kg] 1 500 15 000 1 500 15 000
m2 [kg] 7 500 7 500 7 500 7 500
Mass ratio m1 / m2 [-] 0.2 2 0.2 2
Frequency ratio f1 / f2 [-] 0.5 0.5 1 1
Load factor ȕel [-] 1.65 1.15 1.42 0.69

-- 152 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-15
a) b)
c) d)
Figure B.15 Response for collision D1 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
a) b)
Figure B.16 Response for collision D1 a) internal work Wi,1 and kinetic energy Ek,1
for body 1, and b) internal work Wi,2, external work We,2 and kinetic
energy Ek for body 2.
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 -30
-20
-10
0
10
20
30
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
-600
-400
-200
0
200
400
600
0.0 0.1 0.2 0.3 0.4 0.5	
Ineternal resistance
, R [MN]
Time, t [s]
R Body 1
R Body 2 -60
-40
-20
0
20
40
60
0.0 0.1 0.2 0.3 0.4 0.5
Impulse,
 I [MNs]
Time, t [s]
Body 1
Body 2
0
200
400
600
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi1
Ek1
0
20
40
60
80
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi2
We2
Ek2

-- 153 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
B-16
a) b)
c) d)
Figure B.17 Response for collision D2 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
a) b)
Figure B.18 Response for collision D2 a) internal work Wi,1 and kinetic energy Ek,1
for body 1, and b) internal work Wi,2, external work We,2 and kinetic
energy Ek for body 2.
-1
0
1
2
3
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 -30
-20
-10
0
10
20
30
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
0
1
2
3
4
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance
, R [MN]
Time, t [s]
R Body 1
R Body 2 -0.6
-0.4
-0.2
0.0
0.2
0.4
0.6
0.0 0.1 0.2 0.3 0.4 0.5
Impulse,
 I [MNs]
Time, t [s]
Body 1
Body 2
0
1
2
3
4
5
6
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi1
Ek1
0
1
2
3
4
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi2
We2
Ek2

-- 154 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-17
a) b)
c) d)
Figure B.19 Response for collision D3 a) displacement u, b) velocity v, c) internal
resistance R, and d) impulse I.
a) b)
Figure B.20 Response for collision D3 a) internal work Wi,1 and kinetic energy Ek,1
for body 1, and b) internal work Wi,2, external work We,2 and kinetic
energy Ek for body 2.
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2 -30
-20
-10
0
10
20
30
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
-1000
-500
0
500
1000
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance
, R [MN]
Time, t [s]
R Body 1
R Body 2 -60
-40
-20
0
20
40
60
0.0 0.1 0.2 0.3 0.4 0.5
Impulse,
 I [MNs]
Time, t [s]
Body 1
Body 2
0
200
400
600
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi1
Ek1
-200
-100
0
100
200
300
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi2
We2
Ek2

-- 155 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
B-18
a) b)
c) d)
Figure B.21 Response for collision D4 a) displacement u, b) velocity v, c) internal
resistance R and dynamic load F2,el, and d) impulse I.
a) b)
Figure B.22 Response for collision D4 a) internal work Wi,1 and kinetic energy Ek,1
for body 1, and b) internal work Wi,2, external work We,2 and kinetic
energy Ek for body 2.
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u [m]
Time, t [s]
Body 1
Body 2
-30
-20
-10
0
10
20
30
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v [m/s]
Time, t [s]
Body 1
Body 2
-0.6
-0.4
-0.2
0.0
0.2
0.4
0.6
0.0 0.1 0.2 0.3 0.4 0.5
Impulse,
 I [MNs]
Time, t [s]
Body 1
Body 2
-6
-4
-2
0
2
4
6
8
0.0 0.1 0.2 0.3 0.4 0.5
Forces,
 F, R
 [MN]
Time, t [s]
R Body 1
R Body 2
F2el
0
1
2
3
4
5
6
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi1
Ek1
0
1
2
3
4
5
6
0.0 0.1 0.2 0.3 0.4 0.5
Energy, [MJ]
Time, t [s]
Wi2
We2
Ek2

-- 156 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 B-19
a) b)
Figure B.23 Internal resistance of body 1 R1 for a) collision D1 and D3, and
b) collision D2 and D4.
Figure B.24 Internal resistance of body 2 R2 for collision D1-D4.
0.0
0.3
0.6
0.9
0.0 0.1 0.2 0.3 0.4 0.5
Internal resistance,
 R [MN]
Time, t [s]
Collision D1
Collision D3
0
2
4
6
8
0.0 0.1 0.2 0.3 0.4 0.5
Internal resistance,
 R [MN]
Time, t [s]
Collision D2
Collision D4
-3
-2
-1
0
1
2
3
4
5
0.0 0.1 0.1 0.2 0.2 0.3 0.3 0.4 0.4 0.5 0.5
Internal resistance,
 R [MN]
Time, t [s]
Collision D1
Collision D2
Collision D3
Collision D4

-- 157 of 228 --



-- 158 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-1
2DOF and FEM Comparison	Appendix C
C.1 Elastic body 1 and body 2 for a beam
In this section, results for collision E1 are presented according to the analysis
discussed in Section 6.1.2.
Table C.1 2DOF input parameters for the collision E1 with an elastic response for
both body 1 and body 2.
Case α
[-]
țmF
[-]
k1
[MN/m]
k2
[MN/m]
m1
[kg]
Collision E1 0.5 0.486 1 506.2 1 500
a) b)
Figure C.1 Comparison between the 2DOF model and the FE model for
collision E1, a) displacement of body 2 u2, and b) internal resistance of
body 1 R1.
-10
0
10
20
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM
0
300
600
900
1200
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM

-- 159 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-2
C.2 Elasto-plastic body 1 and elastic body 2 for a beam
In this section, results for collision F1-F4 are presented according to the analysis
discussed in Section 6.1.3.
Table C.2 2DOF input parameters for collision F1-F4 with elasto-plastic
response of body 1 and elastic response of body 2.
Case α
[-]
țmF
[-]
k1
[MN/m]
k2
[MN/m]
m1
[kg]
R1,max
[kN]
Collision F1 0.5 0.486 1 506.2 1 500 500
Collision F2 0.5 0.486 1 506.2 1 500 250
Collision F3 0.25 0.774 1 899.8 1 500 500
Collision F4 0.25 0.774 1 899.8 1 500 250
a) b)
c) d)
Figure C.2 Illustration of the response for collision F1, a) displacement of body 1
u1, b) internal resistance of body 1 R1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
-5
0
5
10
15
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM
-1.0
-0.5
0.0
0.5
1.0
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 160 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-3
a) b)
c) d)
Figure C.3 Illustration of the response for collision F2, a) displacement of body 1
u1, b) internal resistance of body 1 R1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
0
1
2
3
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
100
200
300
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
-5
0
5
10
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM
-0.6
-0.4
-0.2
0.0
0.2
0.4
0.6
0.8
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 161 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-4
a) b)
c) d)
Figure C.4 Illustration of the response for collision F3, a) displacement of body 1
u1, b) internal resistance of body 1 R1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
-4
0
4
8
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM
-0.4
-0.2
0.0
0.2
0.4
0.6
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 162 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-5
a) b)
c) d)
Figure C.5 Illustration of the response for collision F4, a) displacement of body 1
u1, b) internal resistance of body 1 R1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
0
1
2
3
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
100
200
300
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM
-0.3
0.0
0.3
0.6
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 163 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-6
C.3 Elastic body 1 and elasto-plastic body 2 for a beam
In this section, results for collision G1a-G1c are presented according to the analysis
discussed in Section 6.1.4.
Table C.3 2DOF input parameters for collision G1a-G1c with different
transformation factor țmF and with elastic response of body 1 and
elasto-plastic response of body 2.
Case α
[-]
țmF
[-]
k1
[MN/m]
k2
[MN/m]
m1
[kg]
R2,max
[MN]
Collision G1a 0.5 0.486 1 506.2 15 000 3.1
Collision G1b 0.5 0.41 1 506.2 15 000 3.1
Collision G1c 0.5 0.333 1 506.2 15 000 3.1
a) b)
c) d)
Figure C.6 Illustration of the response for collision G1a, a) displacement of body 1
u1, b) internal resistance of body 1 R1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM -1.0
0.0
1.0
2.0
3.0
4.0
5.0
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 164 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-7
a) b)
a) b)
Figure C.7 Illustration of the response for collision G1b, a) displacement of body 1
u1, b) internal resistance of body 1 R1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM -1.0
0.0
1.0
2.0
3.0
4.0
5.0
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 165 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-8
a) b)
a) b)
Figure C.8 Illustration of the response for collision G1c, a) displacement of body 1
u1, b) internal resistance of body 1 R1, c) displacement of body 2 u2, and
d) velocity of body 2 v2.
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
FEM
0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
FEM
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
FEM -1.0
0.0
1.0
2.0
3.0
4.0
5.0
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
FEM

-- 166 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-9
C.4 Elastic body 1 and body 2 for a slab
In this section, results for collision H1-H12 are presented according to the analysis
discussed in Section 6.2.2.
Table C.4 2DOF and FE input parameters for collision H1-H12 with initial
velocity v0 = 27.8 m/s.
Case αx [-] αy [-] țmF [-] k1 [MN/m] m1 [kg] ksl [MN/m]
Collision H1 0.5 0.5 0.203 0.5 1 500 10.79
Collision H2 0.5 0.25 0.235 0.5 1 500 15.94
Collision H3 0.25 0.25 0.241 0.5 1 500 22.02
Collision H4 0.5 0.5 0.203 1 1 500 10.79
Collision H5 0.5 0.25 0.235 1 1 500 15.94
Collision H6 0.25 0.25 0.241 1 1 500 22.02
Collision H7 0.5 0.5 0.203 0.5 15 000 10.79
Collision H8 0.5 0.25 0.235 0.5 15 000 15.94
Collision H9 0.25 0.25 0.241 0.5 15 000 22.02
Collision H10 0.5 0.5 0.203 1 15 000 10.79
Collision H11 0.5 0.25 0.235 1 15 000 15.94
Collision H12 0.25 0.25 0.241 1 15 000 22.02

-- 167 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-10
a) b)
c) d)
Figure C.9 Illustration of collision H1, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-40
0
40
80
120
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-2
-1
0
1
2
3
4
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 168 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-11
a) b)
c) d)
Figure C.10 Illustration of collision H2, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-40
0
40
80
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-2
-1
0
1
2
3
4
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 169 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-12
a) b)
c) d)
Figure C.11 Illustration of collision H3, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-20
0
20
40
60
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-2
-1
0
1
2
3
4
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 170 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-13
a) b)
c) d)
Figure C.12 Illustration of collision H4, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-12
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
200
400
600
800
1000
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-80
-40
0
40
80
120
160
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-6
-2
2
6
10
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 171 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-14
a) b)
c) d)
Figure C.13 Illustration of collision H5, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-12
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
200
400
600
800
1000
1200
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-80
-40
0
40
80
120
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-6
-4
-2
0
2
4
6
8
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 172 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-15
a) b)
c) d)
Figure C.14 Illustration of collision H6, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-12
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
200
400
600
800
1000
1200
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-40
0
40
80
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-2
-1
0
1
2
3
4
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 173 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-16
a) b)
c) d)
Figure C.15 Illustration of collision H7, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-18
-12
-6
0
6
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0
500
1000
1500
2000
2500
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-50
0
50
100
150
200
250
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-6
-4
-2
0
2
4
6
8
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 174 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-17
a) b)
c) d)
Figure C.16 Illustration of collision H8, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-15
-12
-9
-6
-3
0
3
6
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0
500
1000
1500
2000
2500
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-60
0
60
120
180
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-2
0
2
4
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 175 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-18
a) b)
c) d)
Figure C.17 Illustration of collision H9, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-15
-12
-9
-6
-3
0
3
6
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0
500
1000
1500
2000
2500
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-40
0
40
80
120
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-4
-2
0
2
4
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 176 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-19
a) b)
c) d)
Figure C.18 Illustration of collision H10, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0
500
1000
1500
2000
2500
3000
3500
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-160
-80
0
80
160
240
320
400
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell -6
-4
-2
0
2
4
6
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 177 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-20
a) b)
c) d)
Figure C.19 Illustration of collision H11, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0
500
1000
1500
2000
2500
3000
3500
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-80
0
80
160
240
320
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell -6
-4
-2
0
2
4
6
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 178 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-21
a) b)
c) d)
Figure C.20 Illustration of collision H12, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0
500
1000
1500
2000
2500
3000
3500
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-50
0
50
100
150
200
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell -4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 179 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-22
C.5 Elasto-plastic body 1 and elastic body 2 for a slab
In this section results, for collision I1-I8 are presented according to the analysis
discussed in Section 6.2.3.
Table C.5 2DOF and FE input parameters for collision I1-I8 with initial velocity
v0 = 27.8 m/s. The point load is applied in the centre of the slab, i.e.
αx = αy = 0.5, țmF = 0.203 and ksl = 10.79 MN/m.
Case k1 [MN/m] m1 [kg] R1,max [MN]
Collision I1 0.5 1 500 0.3
Collision I2 0.5 1 500 0.6
Collision I3 1 1 500 0.3
Collision I4 1 1 500 0.6
Collision I5 0.5 15 000 1
Collision I6 0.5 15 000 2
Collision I7 1 15 000 1
Collision I8 1 15 000 2

-- 180 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-23
a) b)
c) d)
Figure C.21 Illustration of collision I1, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-2
-1
0
1
2
3
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
50
100
150
200
250
300
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-40
-20
0
20
40
60
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 181 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-24
a) b)
c) d)
Figure C.22 Illustration of collision I2, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-8
-6
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
100
200
300
400
500
600
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-60
-30
0
30
60
90
120
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-3
0
3
6
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 182 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-25
a) b)
c) d)
Figure C.23 Illustration of collision I3, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
50
100
150
200
250
300
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-60
-40
-20
0
20
40
60
80
100
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-4
-2
0
2
4
6
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 183 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-26
a) b)
c) d)
Figure C.24 Illustration of collision I4, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell
0
100
200
300
400
500
600
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
2DOF
Grillage
Shell
-40
0
40
80
120
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-4
-2
0
2
4
6
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 184 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-27
a) b)
c) d)
Figure C.25 Illustration of collision I5, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
0
2
4
6
8
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0.0
0.2
0.4
0.6
0.8
1.0
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [MN]
Time, t [s]
2DOF
Grillage
Shell
-50
0
50
100
150
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell -3
0
3
6
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 185 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-28
a) b)
c) d)
Figure C.26 Illustration of collision I6, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-12
-9
-6
-3
0
3
6
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0.0
0.5
1.0
1.5
2.0
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [MN]
Time, t [s]
2DOF
Grillage
Shell
-100
-50
0
50
100
150
200
250
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-3
0
3
6
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 186 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-29
a) b)
c) d)
Figure C.27 Illustration of collision I7, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
0
1
2
3
4
5
6
7
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0.0
0.2
0.4
0.6
0.8
1.0
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [MN]
Time, t [s]
2DOF
Grillage
Shell
-100
-50
0
50
100
150
200
250
300
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-6
-3
0
3
6
9
12
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 187 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-30
a) b)
c) d)
Figure C.28 Illustration of collision I8, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-8
-6
-4
-2
0
2
4
6
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u1 [m]
Time, t [s]
2DOF
Grillage
Shell 0.0
0.5
1.0
1.5
2.0
0.0 0.2 0.4 0.6 0.8 1.0	
Internal resistance,
 R1 [MN]
Time, t [s]
2DOF
Grillage
Shell
-100
0
100
200
300
0.0 0.2 0.4 0.6 0.8 1.0
Displacement,
 u2 [mm]
Time, t [s]
2DOF
Grillage
Shell
-6
-4
-2
0
2
4
6
8
10
0.0 0.2 0.4 0.6 0.8 1.0
Velocity,
 v2 [m/s]
Time, t [s]
2DOF
Grillage
Shell

-- 188 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-31
C.6 Elastic body 1 and elasto-plastic body 2 for a slab
In this section, results for collision J1-J12 are presented according to the analysis
discussed in Section 6.2.4.4.
Table C.6 2DOF and FE input parameters for collision J1-J12.
Case αx
[-]
αy
[-]
k1
[MN/m]
m1
[kg]
v0
[m/s]
2DOF k2
[MN/m]
2DOF R2,max
[kN]
Collision J1 0.5 0.5 0.5 1 500 27.8 10.79 537.7
Collision J2 0.5 0.25 0.5 1 500 27.8 15.94 537.7
Collision J3 0.25 0.25 0.5 1 500 27.8 22.02 716.9
Collision J4 0.5 0.5 1 1 500 27.8 10.79 537.7
Collision J5 0.5 0.25 1 1 500 27.8 22.02 537.7
Collision J6 0.25 0.25 1 1 500 27.8 22.02 716.9
Collision J7 0.5 0.5 0.5 15 000 10 10.79 537.7
Collision J8 0.5 0.25 0.5 15 000 10 15.94 537.7
Collision J9 0.25 0.25 0.5 15 000 10 22.02 716.9
Collision J10 0.5 0.5 1 15 000 10 10.79 537.7
Collision J11 0.5 0.25 1 15 000 10 15.94 537.7
Collision J12 0.25 0.25 1 15 000 10 22.02 716.9

-- 189 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-32
a) b)
c) d)
Figure C.29 Illustration of collision J1, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-10
-8
-6
-4
-2
0
2
4
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203 0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203
0
100
200
300
400
500
600
700
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203 -5
0
5
10
15
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203

-- 190 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-33
a) b)
c) d)
Figure C.30 Illustration of collision J2, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-12
-9
-6
-3
0
3
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235 0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235
0
200
400
600
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235 -5
0
5
10
15
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235

-- 191 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-34
a) b)
c) d)
Figure C.31 Illustration of collision J3, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-12
-9
-6
-3
0
3
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241 0
200
400
600
800
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
-2
0
2
4
6
8
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241

-- 192 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-35
a) b)
c) d)
Figure C.32 Illustration of collision J4, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203 0
200
400
600
800
1000
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203
0
200
400
600
800
1000
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203 -6
-3
0
3
6
9
12
15
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203

-- 193 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-36
a) b)
c) d)
Figure C.33 Illustration of collision J5, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235 0
200
400
600
800
1000
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235
0
200
400
600
800
1000
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235 -4
0
4
8
12
16
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235

-- 194 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-37
a) b)
c) d)
Figure C.34 Illustration of collision J6, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-12
-10
-8
-6
-4
-2
0
2
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241 0
400
800
1200
0.0 0.1 0.2 0.3 0.4 0.5	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
-300
0
300
600
900
0.0 0.1 0.2 0.3 0.4 0.5
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241 -5
0
5
10
15
20
0.0 0.1 0.2 0.3 0.4 0.5
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241

-- 195 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-38
a) b)
c) d)
Figure C.35 Illustration of collision J7, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203 -800
-400
0
400
800
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203
0
500
1000
1500
2000
2500
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203
-15
-10
-5
0
5
10
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203

-- 196 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-39
a) b)
c) d)
Figure C.36 Illustration of collision J8, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235 -800
-400
0
400
800
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235
0
500
1000
1500
2000
2500
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235
-15
-10
-5
0
5
10
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235

-- 197 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-40
a) b)
c) d)
Figure C.37 Illustration of collision J9, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241 -600
-300
0
300
600
900
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
0
500
1000
1500
2000
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
-12
-8
-4
0
4
8
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241

-- 198 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-41
a) b)
c) d)
Figure C.38 Illustration of collision J10, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203 -1000
-500
0
500
1000
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203
0
500
1000
1500
2000
2500
3000
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203
-20
-15
-10
-5
0
5
10
15
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.203

-- 199 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
C-42
a) b)
c) d)
Figure C.39 Illustration of collision J11, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235 -900
-600
-300
0
300
600
900
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235
0
500
1000
1500
2000
2500
3000
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235
-20
-15
-10
-5
0
5
10
15
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.235

-- 200 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 C-43
a) b)
c) d)
Figure C.40 Illustration of collision J12, a) displacement of body 1 u1, b) internal
resistance of body 1 R1, c) displacement of body 2 u2, and d) velocity of
body 2 v2.
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u1 [m]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241 -1200
-800
-400
0
400
800
1200
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7	
Internal resistance,
 R1 [kN]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
0
500
1000
1500
2000
2500
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Displacement,
 u2 [mm]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241
-15
-10
-5
0
5
10
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
Velocity,
 v2 [m/s]
Time, t [s]
Shell
2DOF kmf=0.1
2DOF kmf=0.167
2DOF kmf=0.241

-- 201 of 228 --



-- 202 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 D-1
Transformation Factors	Appendix D
D.1 Transformation factors for beams
In this section, transformation factors țm, țF and țmF are presented for beams
subjected to a point load for different load cases where the system point is coinciding
with the point of loading, by Asplund and Steckmest (2014).
Table D.1 Transformation factors for point loads at different distances from the
support, with the system point coinciding with the point of loading, by
Asplund and Steckmest (2014).
α 0.5 0.4 0.3 0.2 0.1
Elastic response
țm 0.486 0.518 0.642 1.011 2.803
țF 1.000 1.000 1.000 1.000 1.000
țmF 0.486 0.518 0.642 1.011 2.803
Plastic response
țm 0.333 0.333 0.333 0.333 0.333
țF 1.000 1.000 1.000 1.000 1.000
țmF 0.333 0.333 0.333 0.333 0.333
D.2 Plastic transformation factors for slabs
In this section, the plastic transformation factors țm, țF and țmF for a quadratic simply
supported slab subjected to a point load are presented as a function of the
displacement at the system point of body 2 u2 for load case 1-3 presented in
Section 4.4.2. The system point is coinciding with the point of loading. These
transformation factors are derived from a FE model with shell elements and are
unique for each load case. The slab is presented in Section 6.2.1.

-- 203 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
D-2
a) b)
c)
Figure D.1 Illustration of the transformation factors as a function of the
displacement at the system point of body 2 u2 for load case 1 and a
dynamic case based on collision J10 a) țm, b) țF, and c) țmF.
0.08
0.12
0.16
0.20
0.0 0.5 1.0 1.5 2.0
Transformation factor
, țm [-]
Displacement, u2 [m]
Elastic
Static plastic
Dynamic plastic
0.92
0.94
0.96
0.98
1.00
0.0 0.5 1.0 1.5 2.0	
Transformation factor
, țF [-]
Displacement, u2 [m]
Elastic
Static plastic
Dynamic plastic
0.10
0.12
0.14
0.16
0.18
0.20
0.22
0.0 0.5 1.0 1.5 2.0
Transformation factor
, țmF [-]
Displacement, u2 [m]
Elastic
Static plastic
Dynamic plastic

-- 204 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 D-3
a) b)
c)
Figure D.2 Illustration of the transformation factors as a function of the
displacement at the system point of body 2 u2 for load case 2 a) țm,
b) țF, and c) țmF.
0.08
0.12
0.16
0.20
0.24
0.0 0.2 0.4 0.6
Transformation factor
, țm [-]
Displacement, u2 [m]
Elastic
Static plastic
0.92
0.94
0.96
0.98
1.00
0.0 0.2 0.4 0.6	
Transformation factor
, țF [-]
Displacement, u2 [m]
Elastic
Static plastic
0.08
0.12
0.16
0.20
0.24
0.0 0.2 0.4 0.6
Transformation factor
, țmF [-]
Displacement, u2 [m]
Elastic
Static plastic

-- 205 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
D-4
a) b)
c)
Figure D.3 Illustration of the transformation factors as a function of the
displacement at the system point of body 2 u2 for load case 3 a) țm,
b) țF, and c) țmF.
0.06
0.10
0.14
0.18
0.22
0.26
0.0 0.2 0.4 0.6
Transformation factor
, țm [-]
Displacement, u2 [m]
Elastic
Static plastic
0.92
0.94
0.96
0.98
1.00
0.0 0.2 0.4 0.6	
Transformation factor
, țF [-]
Displacement, u2 [m]
Elastic
Static plastic
0.06
0.10
0.14
0.18
0.22
0.26
0.0 0.2 0.4 0.6
Transformation factor
, țmF [-]
Displacement, u2 [m]
Elastic
Static plastic

-- 206 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 E-1
Load Factor βel	Appendix E
In this appendix is the relation between the load factor ȕel and the frequency ratio
f1 / f2 presented for different values of the mass ratio m1 / m2 used in Section 3.3, by
Johansson (2014).
Table E.1 Values for load factor ȕel, by Johansson (2014).
ȕel = R2 / F2,el [-]
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

-- 207 of 228 --



-- 208 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 F-1
Slab Modelling	Appendix F
F.1 Deformation shape for different load cases
In this section is the deformation shapes along a line for different load cases
illustrated for both quadratic and rectangular slabs. The line and the point of loading
are presented in each diagram.
Figure F.1 Illustration of the displacement of body 2 u2 on a quadratic slab along a
line for the theoretical assumed model, the beam grillage and the shell
element model. The line and the point of point loading are presented in
the upper right hand corner.
0.0
0.1
0.2
0.3
0.4
0.5
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical

-- 209 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
F-2
Figure F.2 Illustration of the displacement of body 2 u2 on a quadratic slab along a
line for the theoretical assumed model, the beam grillage and the shell
element model. The line and the point of point loading are presented in
the upper right hand corner.
Figure F.3 Illustration of the displacement of body 2 u2 on a quadratic slab along a
line for the theoretical assumed model, the beam grillage and the shell
element model. The line and the point of point loading are presented in
the upper right hand corner.
0.00
0.05
0.10
0.15
0.20
0.25
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical
0.0
0.1
0.2
0.3
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical

-- 210 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 F-3
Figure F.4 Illustration of the displacement of body 2 u2 on a quadratic slab along a
line for the theoretical assumed model, the beam grillage and the shell
element model. The line and the point of point loading are presented in
the upper right hand corner.
Figure F.5 Illustration of the displacement of body 2 u2 on a quadratic slab along a
line for the theoretical assumed model, the beam grillage and the shell
element model. The line and the point of point loading are presented in
the upper right hand corner.
0.00
0.05
0.10
0.15
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical
0.00
0.03
0.06
0.09
0.12
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical

-- 211 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
F-4
Figure F.6 Illustration of the displacement of body 2 u2 on a rectangular slab
along a line for the theoretical assumed model, the beam grillage and
the shell element model. The line and the point of point loading are
presented in the upper right hand corner.
Figure F.7 Illustration of the displacement of body 2 u2 on a rectangular slab
along a line for the theoretical assumed model, the beam grillage and
the shell element model. The line and the point of point loading are
presented in the upper right hand corner.
0.0
0.1
0.2
0.3
0.4
0.5
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical
0.0
0.1
0.2
0.3
0.4
0.5
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical

-- 212 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 F-5
Figure F.8 Illustration of the displacement of body 2 u2 on a rectangular slab
along a line for the theoretical assumed model, the beam grillage and
the shell element model. The line and the point of point loading are
presented in the upper left hand corner.
Figure F.9 Illustration of the displacement of body 2 u2 on a rectangular slab
along a line for the theoretical assumed model, the beam grillage and
the shell element model. The line and the point of point loading are
presented in the upper left hand corner.
0.0
0.1
0.2
0.3
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical
0.00
0.05
0.10
0.15
0.20
0.25
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical

-- 213 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
F-6
Figure F.10 Illustration of the displacement of body 2 u2 on a rectangular slab
along a line for the theoretical assumed model, the beam grillage and
the shell element model. The line and the point of point loading are
presented in the upper right hand corner.
F.2 Load-displacement diagrams
In this section are the load-displacement diagrams for load case 1-3 illustrated, which
are discussed in Section 6.2.4.2. Additionally are two load cases for a rectangular slab
illustrated.
0.00
0.05
0.10
0.15
0.20
0.25
0.30
0.0 0.8 1.6 2.4 3.2 4.0 4.8 5.6
Displacement,
 u2 [m]
Length, x [m]
Beam grillage
Shell
Theoretical

-- 214 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 F-7
a) b)
c)
Figure F.11 Illustration of the load-displacement response on a quadratic slab of a
beam grillage model, a slab modelled with shell elements and the
expected load capacity obtained from the strip method, a) load case 1,
b) load case 2, and c) load case 3.
a) b)
Figure F.12 Illustration of the load-displacement response on a rectangular slab,
lx = 2ly, of a beam grillage model, a slab modelled with shell elements
and the expected load capacity obtained from the strip method, a) with
the point load acting as described in the top right hand corner, and
b) with the point load acting as described in the top right hand corner.
0
200
400
600
0.0 0.1 0.2 0.3 0.4
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Beam grillage
Shell
Strip method 0
200
400
600
0.0 0.1 0.2 0.3
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Beam grillage
Shell
Strip method
0
200
400
600
800
0.0 0.1 0.2 0.3
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Beam grillage
Shell
Strip method
0
100
200
300
400
500
0.0 0.2 0.4 0.6	
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Beam grillage
Shell
Strip method 0
100
200
300
400
500
0.0 0.1 0.2 0.3 0.4	
Internal resistance,
 R2 [kN]
Displacement, u2 [m]
Beam grillage
Shell
Strip method

-- 215 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
F-8
F.3 Plastic strain distribution for shell element model
In this section, the plastic strain distribution diagram for various load cases on both a
quadratic and a rectangular slab are illustrated in addition to the diagrams presented in
Section 6.2.4.2. Purple and blue indicates that the strain is low or around the yield
limit and red and pink indicates a very high plastic strain.
No yield strain
High yield strain
a) b)
Figure F.13 Illustration of the distribution of the plastic strain for load case 2 in
a) x-direction, and b) y-direction.
No yield strain
High yield strain
Figure F.14 Illustration of the distribution of the plastic strain in x-direction for a
rectangular slab with side length lx = 2ly subjected to a point load in the
centre.
No yield strain
High yield strain
Figure F.15 Illustration of the distribution of the plastic strain in y-direction for a
rectangular slab with side length lx = 2ly subjected to a point load in the
centre.

-- 216 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 G-1
Mathcad Calculations	Appendix G

-- 217 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
G-2

-- 218 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 G-3

-- 219 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
G-4

-- 220 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 H-1
MATLAB Algorithms	Appendix H
H.1 2DOF algorithm
%========================2DOF model==============================
% This program simulates a collision between two bodies with or
% without barrier using a two degree of freedom (2DOF) mass
% spring system. The 2DOF model is made of two masses and two
% springs connected to a fixed support and works for both
% elastic, plastic or elasto-plastic response.
%
% Program written by: Jonatan Andersson 880626
% 	Johan Antonsson 900716
%
% 	Date: 2015-05-05
%================================================================
clear all
close all
clc
%======================Input data================================
%Time interval:
time_interval=0.5; %[s]
%Properties of body 1:
m1=1500; %[kg] (Mass)
k1=1e6; %[N/m] (Stiffness, put to a very high number for an ideal
% 	plastic response of body 1)
R1=0; %[N] (Put to zero if linear elastic analysis)
v1=27.8; %[m/s] (Initial velocity)
u_pl_max1=inf; %[-] (Maximum plastic displacement)
u1=0; %[m] (Initial displacement)
p1=0; %[N] (Initial force)
%Properties of body 2:
kappa_mf=0.203; %[-] (Transformation factor)
m_structure=15052.8; %[kg] (Mass of resisting structure)
k2=10.79e6; %[N/m] (Stiffness, put to zero for collision without
% 	barrier, put to a very high number for ideal
% 	plastic response)
R2=0; %[N] (Put to zero if linear elastic analysis)
v2=0; %[m/s] (Initial velocity)
u_pl_max2=inf; %[-] (Maximum plastic displacement)
u2=0; %[m] (Initial displacement)
p2=0; %[N] (Initial force)
%======================Initial calculations======================
%Time interval:
t=linspace(0,time_interval,time_interval*1000+1);
%Time step:
h=t(2);
%Relative mass of body 2:
m2=kappa_mf*m_structure;
%Maximum elastic displacement:
u_el_max=[R1/k1; R2/k2];
if R1 == 0
u_el_max(1)=inf;
end
if R2 == 0
u_el_max(2)=inf;
end
%Initial stiffness matrix:
K=[k1 -k1;
-k1 k1+k2];
%Mass matrix:
M=[m1 0;
0 m2];
%Initial velocity, displacement and force vector:
v0=[v1; v2];
u0=[u1; u2];
p0=[p1; p2];
%Predefining variables to save computational time:
u=zeros(2,length(t)+1);
v=zeros(2,length(t));
a=zeros(2,length(t));
Ek=zeros(2,length(t));
Ekpos=zeros(1,length(t));
Wi=zeros(2,length(t));
We2=zeros(1,length(t));
Ir=zeros(2,length(t));
dui=zeros(1,length(t));
u_pl=zeros(2,length(t));
R=zeros(2,length(t));
%===============Central Difference Method (CDM)==================
%Using the Central Difference Method (CDM) to numerically
%calculate the displacement at different times
%Initial acceleration vector:
a0=M\(p0-K*u0);
%Starting displacement value:
u_start=u0-h*v0+h^2/2*a0;
%Start values for forces
p_n=p0;
%For loop to calculate displacements and other parameters at
%different times using the CDM:
for i=1:length(t)
%Calculate the deformation of spring 1:
dui(i)=u(1,i)-u(2,i);

-- 221 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
H-2
%New additional plastic deformation for body 1:
if dui(i) > u_el_max(1) && dui(i) > max(dui(1:i-1))
dui_pl_1=dui(i)-max(max(dui(1:i-1)), u_el_max(1));
else
dui_pl_1=0;
end
%New additional plastic deformation for body 2
if u(2,i) > u_el_max(2) && u(2,i) > max(u(2,1:i-1))
dui_pl_2=u(2,i)-max(max(u(2,1:i-1)), u_el_max(2));
else
dui_pl_2=0;
end
%Updating the plastic deformation:
if i ~= 1
u_pl(:,i)=u_pl(:,i-1)+[dui_pl_1; dui_pl_2];
end
%Calculating reaction forces for spring 1:
if dui(i) < 0 || u_pl(1,i) > u_pl_max1
R(1,i)=0;
else
R(1,i)=max(0,k1*(dui(i)-u_pl(1,i)));
end
%Calculating reaction forces for spring 2:
if u_pl(2,i) > u_pl_max2
R(2,i)=0;
else
R(2,i)=k2*(u(2,i)-u_pl(2,i));
end
%Calculating current stiffnesses for spring 1:
if dui(i)==0
k1_cdm=k1;
else
k1_cdm=R(1,i)/dui(i);
end
%Calculating current stiffnesses for spring 2:
if u(2,i)==0
k2_cdm=k2;
else
k2_cdm=R(2,i)/u(2,i);
end
%Updating the stiffness matrix:
K=[k1_cdm -k1_cdm;
-k1_cdm k1_cdm+k2_cdm];
%CDM equation:
if i ~= 1
u(:,i+1)=(M/h^2)\(p_n-(K-2*M/h^2)*u(:,i)-(M/h^2)*u(:,i-
1));
else
u(:,i+1)=(M/h^2)\(p_n-(K-2*M/h^2)*u(:,i)-
(M/h^2)*u_start);
end
%Calculating velocity and acceleration:
if i~=1
v(:,i)=(u(:,i+1)-u(:,i-1))/(2*h);
a(:,i)=(u(:,i+1)-2*u(:,i)+u(:,i-1))/h^2;
else
v(:,i)=v0;
end
%Calculating kinetical energy for body 1 in positive
% direction:
if v(1,i) > 0
Ekpos(i)=m1*v(1,i)^2/2;
end
%Calculating internal work for body 1 and 2:
if i~=1
Wi(:,i)=Wi(:,i-1)+(R(:,i)+R(:,i-1))/2.*(u(:,i)-u(:,i-1));
end
%Calculating external work from body 2 to body 1:
if i~=1
We2(i)=We2(i-1)+(R(1,i)+R(1,i-1))/2.*(u(2,i)-u(2,i-1));
end
%Calculating impulse from internal resistance:
if i~=1
Ir(:,i)=Ir(:,i-1)+(R(:,i)+R(:,i-1))/2*h;
end
end
%Erasing the last u because it is out of the chosen time
%interval:
u=u(:,1:length(t));
%======================Other results=============================
%Kinetical energy for body 1 and 2:
Ek(1,:)=m1*v(1,:).^2/2;
Ek(2,:)=m2*v(2,:).^2/2;
%Total kinetic energy in positive direction:
Ek_tot_positive=Ekpos+Ek(2,:);
%Frequency ratio:
freq_rat=sqrt(k1/m1)/sqrt(k2/m2);
%Mass ratio:
mass_rat=m1/m2;
%Load factor beta_el:
beta=max(R(2,:))/(v0(1)*sqrt(k1*m1));

-- 222 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 H-3
H.2 Transformation factor algorithm
%==========================2DOF model============================
% This program calculates the transformation factors that makes
% it possible to use mass-spring systems to model the behaviour
% of a slab
%
% Program written by: Jonatan Andersson 880626
% 	Johan Antonsson 900716
%
% 	Date: 2015-05-05
%================================================================
clear all
close all
clc
%=========================Input data=============================
F=1e5; %[N] Applied static force
system_node=421; %[-] The node where the load is applied
nodes=841; %Number of nodes
%======================Extracting data===========================
%Opening txt file with all deflections of the slab
txtfil=fopen('u2_whole_model.txt');
A=textscan(txtfil, '%s %s %s');
fclose(txtfil);
%Making the information from the txt file to a vector
for j = 1:length(A{3})
str=A{3}{j};
defl(j)=str2num(str);
end
%Extracting the deflection at the system node, u_s
str=A{3}{system_node};
u_s=str2num(str)
%================Calculating transformation factors==============
%Calculating kappa_m
k_m=sum(defl.^2)/(u_s^2*(sqrt(length(defl))-1)^2)
%Calculating kappa_f for a load distributed over four elements
k_f=(4*u_s+2*(defl(system_node-sqrt(nodes))+defl(system_node-1)+
defl(system_node+1)+defl(system_node+sqrt(nodes)))
+defl(system_node-sqrt(nodes)-1)+defl(system_node-sqrt(nodes)+1)
+defl(system_node+sqrt(nodes)-
1)+defl(system_node+sqrt(nodes)+1))/(16*u_s)
%kappa_f for a point load
%k_f=1
%Calculating kappa_mf
k_mf=k_m/k_f
%Calculating the stiffness of the slab
k_sl=F/u_s

-- 223 of 228 --



-- 224 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 I-1
ADINA Command Files	Appendix I
I.1 ADINA command file for shell element model
**********INPUT DATA**********
PARAMETER E '5.979E9'
PARAMETER NU '0'
PARAMETER YIELDSTRESS '1.68E6'
PARAMETER YIELDSTRAIN '1'
PARAMETER ALPA '0.231'
PARAMETER DENSITY '2400'
PARAMETER MASSNODE '842'
PARAMETER POINTMASS '1500'
PARAMETER VELOCITY '27.8'
PARAMETER K '1E6'
PARAMETER TIMESTEP '1000'
PARAMETER STEPMAGNITUDE '0.001'
PARAMETER ALPAX '0.5'
PARAMETER ALPAY '0.5'
PARAMETER LENGTH '5.6'
PARAMETER THICKNESS '0.2'
**********PARAMETER CALCULATIONS**********
PARAMETER SUBDIV '$THICKNESS'
PARAMETER LOADPOINTX '$ALPAX*$LENGTH'
PARAMETER LOADPOINTX1 '$LOADPOINTX+$SUBDIV'
PARAMETER LOADPOINTXMINUS1 '$LOADPOINTX-$SUBDIV'
PARAMETER LOADPOINTY '$ALPAY*$LENGTH'
PARAMETER LOADPOINTY1 '$LOADPOINTY+$SUBDIV'
PARAMETER LOADPOINTYMINUS1 '$LOADPOINTY-$SUBDIV'
PARAMETER YIELDSTRESSMOD '$YIELDSTRESS/$ALPA'
PARAMETER MINUSK '-$K/16'
PARAMETER K1 '$MINUSK*4'
PARAMETER K2 '$MINUSK*2'
PARAMETER K3 '$MINUSK'
**********POINTS**********
COORDINATES POINT SYSTEM=0
@CLEAR
1 0 0 0 0
2 $LENGTH 0 0 0
3 $LENGTH $LENGTH 0 0
4 0 $LENGTH 0 0
5 $LOADPOINTXMINUS1 $LOADPOINTYMINUS1 0 0
6 $LOADPOINTX $LOADPOINTYMINUS1 0 0
7 $LOADPOINTX1 $LOADPOINTYMINUS1
8 $LOADPOINTX1 $LOADPOINTY 0 0
9 $LOADPOINTX1 $LOADPOINTY1 0 0
10 $LOADPOINTX $LOADPOINTY1 0 0
11 $LOADPOINTXMINUS1 $LOADPOINTY1 0 0
12 $LOADPOINTXMINUS1 $LOADPOINTY 0 0
13 $LOADPOINTX $LOADPOINTY 0 0
14 $LOADPOINTX $LOADPOINTY -1 0
@
**********SURFACES**********
SURFACE VERTEX NAME=1 P1=1 P2=2 P3=3 P4=4
**********BOUNDARY CONDITIONS**********
FIXITY NAME=HORN
@CLEAR
'X-TRANSLATION'
'Y-TRANSLATION'
'Z-TRANSLATION'
'OVALIZATION'
FIXITY NAME=HORNX
@CLEAR
'Y-TRANSLATION'
'Z-TRANSLATION'
'OVALIZATION'
FIXITY NAME=HORNY
@CLEAR
'X-TRANSLATION'
'Z-TRANSLATION'
'OVALIZATION'
FIXITY NAME=RULL
@CLEAR
'Z-TRANSLATION'
'OVALIZATION'
@
FIXITY NAME=SPRING
@CLEAR
'X-TRANSLATION'
'Y-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'Z-ROTATION'
'OVALIZATION'
FIXBOUNDARY POINTS FIXITY=ALL
1 'HORN'
2 'HORNX'
4 'HORNY'
14 'SPRING'
FIXBOUNDARY LINES FIXITY=ALL
@CLEAR
1 'RULL'

-- 225 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
I-2
2 'RULL'
3 'RULL'
4 'RULL'
**********POINT MASS**********
MASSES POINTS
@CLEAR
14 0 0 $POINTMASS 0 0 0
@
**********TIME STEP**********
TIMESTEP NAME=DEFAULT
@CLEAR
$TIMESTEP $STEPMAGNITUDE
@
**********MESHING SLAB**********
MATERIAL PLASTIC-BILINEAR NAME=1 HARDENIN=ISOTROPIC E=$E
NU=$NU,
YIELD=$YIELDSTRESSMOD EPA=$YIELDSTRAIN
STRAINRA=0 DENSITY=$DENSITY,
MDESCRIP='Elastoplast'
EGROUP SHELL NAME=1 DISPLACE=DEFAULT MATERIAL=1 TINT=7
RESULTS=STRESSES STRESSRE=GLOBAL,
DESCRIPT='NONE' THICKNES=$THICKNESS TINT-
TYP=NEWTON-COTES
SFTHICKNESS THICK-2D=VARIABLE
@CLEAR
1 $THICKNESS 0 0 0 0
@
SUBDIVIDE MODEL MODE=LENGTH SIZE=$SUBDIV NDIV=1,
PROGRESS=GEOMETRIC MINCUR=1
GSURFACE NODES=4
@CLEAR
1
@
**********MESHING SPRINGS**********
PROPERTY NONLINEAR-K NAME=1
@CLEAR
-1 $K3
0 0
1 0
@
PROPERTYSET NAME=1 NONLINEA=YES NK=1 NM=0 NC=0
PROPERTY NONLINEAR-K NAME=2
@CLEAR
-1 $K2
0 0
1 0
@
PROPERTYSET NAME=2 NONLINEA=YES NK=2 NM=0 NC=0
PROPERTY NONLINEAR-K NAME=3
@CLEAR
-1 $K1
0 0
1 0
@
PROPERTYSET NAME=3 NONLINEA=YES NK=3 NM=0 NC=0
EGROUP SPRING NAME=2 PROPERTY=1 RESULTS=STRESSES
DESCRIPT='SPRING1'
SPRING POINTS
@CLEAR
1 14 3 5 3
2 14 3 7 3
3 14 3 9 3
4 14 3 11 3
EGROUP SPRING NAME=3 PROPERTY=2 RESULTS=STRESSES
DESCRIPT='SPRING2'
SPRING POINTS
5 14 3 6 3
6 14 3 8 3
7 14 3 10 3
8 14 3 12 3
EGROUP SPRING NAME=4 PROPERTY=3 RESULTS=STRESSES
DESCRIPT='SPRING3'
SPRING POINTS
9 14 3 13 3
@
**********APPLYING INITIAL VELOCITY**********
INITIAL VELOCITIES SUBSTRUC=0 REUSE=1
@CLEAR
$MASSNODE 0 0 $VELOCITY 0 0 0 0
@
**********MAKING IT DYNAMIC**********
MASTER ANALYSIS=DYNAMIC-DIRECT-INTEGRATION
ANALYSIS DYNAMIC-DIRECT-INTEGRATION

-- 226 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87 I-3
I.2 ADINA command file for beam grillage model
*To avoid a large number of pages are the parts where points and
*lines are assigned and meshed excluded. There is a point in each
*intersection in the grillage and there is a line connecting each
*point vertically and horizontally. When there is a repetition of
*a command it is written as three dots "..." which means that the
*points and lines in between are done in the same way.
**********POINTS**********
COORDINATES POINT SYSTEM=0
@CLEAR
1 0 0 0 0
2 0.2 0 0 0
...
841 5.6 5.6 0 0
842 2.8 2.8 -1 0
@
**********LINES***********
LINE STRAIGHT NAME=1 P1=1 P2=2
LINE STRAIGHT NAME=2 P1=2 P2=3
...
LINE STRAIGHT NAME=1623 P1=783 P2=812
LINE STRAIGHT NAME=1624 P1=812 P2=841
**BOUNDARY CONDITIONS points**
FIXITY NAME=HORN
@CLEAR
'X-TRANSLATION'
'Y-TRANSLATION'
'Z-TRANSLATION'
'OVALIZATION'
@
FIXITY NAME=HORNX
@CLEAR
'Y-TRANSLATION'
'Z-TRANSLATION'
'OVALIZATION'
@
FIXITY NAME=HORNY
@CLEAR
'X-TRANSLATION'
'Z-TRANSLATION'
'OVALIZATION'
@
FIXITY NAME=RULL
@CLEAR
'Z-TRANSLATION'
'OVALIZATION'
@
FIXITY NAME=SPRING
@CLEAR
'X-TRANSLATION'
'Y-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'Z-ROTATION'
'OVALIZATION'
@
FIXBOUNDARY POINTS FIXITY=ALL
@CLEAR
1 'HORN'
29 'HORNX'
813 'HORNY'
842 'SPRING'
@
**BOUNDARY CONDITIONS lines**
*The boundary condition "Rull" is assigned to all outer lines.
FIXBOUNDARY LINES FIXITY=ALL
@CLEAR
1 'RULL'
2 'RULL'
...
1623 'RULL'
1624 'RULL'
@
**********POINT MASS**********
MASSES POINTS
@CLEAR
842 0 0 1500 0 0 0
@
**********TIME STEP**********
TIMESTEP NAME=DEFAULT
@CLEAR
1000 0.001
@
*******MOMENT-CURVATURE/TORSION-TWISTING *******
FORCE-STRAIN NAME=1
@CLEAR
-0.003 -160000
-0.001 -160000
0 0
0.001 160000
0.003 160000
@
TWIST-MOMENT NAME=2
@CLEAR
-100 -2928.45

-- 227 of 228 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2015:87
I-4
-0.004165 -2789
0 0
0.004165 2789
100 2928.45
@
MOMENT-TWIST NAME=2
@CLEAR
-1E6 2
0 2
1E6 2
@
CURVATURE-MO NAME=3
@CLEAR
-100 -14115.15
-0.017 -13443
0 0
0.017 13443
100 14115.15
@
MOMENT-CURVA NAME=3
@CLEAR
-1E6 3
0 3
1E6 3
@
CURVATURE-MO NAME=4
@CLEAR
-100 -13991.25
-0.019 -13325
0 0
0.019 13325
100 13991.25
@
MOMENT-CURVA NAME=4
@CLEAR
-1E6 4
0 4
1E6 4
@
**********MESHING SLAB**********
RIGIDITY-MOM PLASTIC-MULTILINEAR NAME=1 FORCE-AX=1 MOMENT-R=2
MOMENT-S=3,
MOMENT-T=4 DENSITY=1200 MASS-ARE=0.04,
ACURVE-T=UNSYMMETRIC TCURVE-T=UNSYMMETRIC BCURVE-T=UNSYMMETRIC
EGROUP BEAM NAME=1 SUBTYPE=THREE-D MATERIAL=1 RESULTS=STRESSES
MOMENT-C=YES RIGIDITY=1 DESCRIPT='BEAM' SECTION=1
GLINE GROUP=1 XO=0 YO=-1 ZO=0
@CLEAR
1
2
...
811
812
@
GLINE GROUP=1 XO=1 YO=0 ZO=0
@CLEAR
813
814
...
1623
1624
@
**********MESHING SPRING**********
PROPERTY NONLINEAR-K NAME=1
@CLEAR
-1 -1000000
0 0
1 0
@
PROPERTYSET NAME=1 K=0 M=0 C=0 NONLINEA=YES NK=1 NM=0 NC=0
EGROUP SPRING NAME=2 PROPERTY=1 RESULTS=STRESSES
SPRING POINTS
@CLEAR
1 842 3 421 3 0 'DEFAULT' 'DEFAULT' 0 0
@
**********APPLYING INITIAL VELOCITY**********
INITIAL VELOCITIES SUBSTRUC=0 REUSE=1
@CLEAR
842 0 0 27.8 0 0 0 0
@
**********MAKING IT DYNAMIC**********
MASTER ANALYSIS=DYNAMIC-DIRECT-INTEGRATION
ANALYSIS DYNAMIC-DIRECT-INTEGRATION

-- 228 of 228 --