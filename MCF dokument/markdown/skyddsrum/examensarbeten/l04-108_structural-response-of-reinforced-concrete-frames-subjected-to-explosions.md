---
title: "L04 108 Structural Response Of Reinforced Concrete Frames Subjected To Explosions"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-108_structural-response-of-reinforced-concrete-frames-subjected-to-explosions.pdf"
fileType: "PDF"
keywords: ["skyddsrum","pelare","betong","armering","beräkning","explosion","kontroll","load"]
summary: "Structural Response of Reinforced Concrete Frames Subjected to Explosions Master of Science Thesis in the Master’s Programme Structural Engineering and Building Technology JOANNA KLOREK ANNA SANDBERG Department of Civil and Environmental Engineeri..."
---

Structural Response of Reinforced
Concrete Frames Subjected to Explosions
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Technology
JOANNA KLOREK
ANNA SANDBERG
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2013
Master’s Thesis 2013:87
Local response
t = t1
Global response
t = t2, t2 > t1
P(t) 	P(t)

-- 1 of 335 --



-- 2 of 335 --

MASTER’S THESIS 2013:87
Structural Response of Reinforced Concrete Frames
Subjected to Explosions
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Technology
JOANNA KLOREK
ANNA SANDBERG
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2013

-- 3 of 335 --

Structural Response of Reinforced Concrete Frames Subjected to Explosions
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Technology
JOANNA KLOREK
ANNA SANDBERG
© JOANNA KLOREK & ANNA SANDBERG, 2013
Examensarbete / Institutionen för bygg- och miljöteknik,
Chalmers tekniska högskola 2013:87
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover:
Illustration of the initial local and general global structural response of a 2D frame
subjected to an explosion where t2 > t1.
Chalmers Reproservice
Göteborg, Sweden

-- 4 of 335 --

I
Structural Response of Reinforced Concrete Frames Subjected to Explosions
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Technology
JOANNA KLOREK
ANNA SANDBERG
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
The knowledge of the response of reinforced concrete structures subjected to
explosions and impulse load is limited. The design methodology is often simplified
and there is a great need for further investigations within this subject. This Master’s
Thesis is a continuation of several previous Master’s Theses and part of a long time
project carried out as collaboration between Chalmers, the Swedish Civil
Contingencies Agency (MSB) and Reinertsen.
A parametric beam study is carried out in order to investigate the important
parameters for impulse loaded structures. Depending on how the effective depth is
interpreted in Eurocode 2, CEN (2004), the deformation capacity of the structure will
differ, which is investigated. It is proved that for most cases it can be considered
conservative to neglect the top reinforcement and to calculate the effective depth as
the distance between the top of the beam to the centre of gravity of the bottom
reinforcement.
The main focus of this report is on structures composed of a few members, such as
frame structures, which are investigated both in 2D and 3D finite element (FE)
analysis, considered to present the reality in a sufficient degree. The analysed
structures with infinite number of degrees of freedom are transformed into single
degree of freedom (SDOF) systems in order to simplify the analysis. The SDOF
system is created in Matlab R2013a and checked using hand calculation methods and
more detailed numerical methods based on the central difference method.
The 2D analysis focuses on the response models of the structures. Both the local
model of the front column of the frame and the global model of the whole frame has
proved to have trilinear response models. This results in that the first sway of the
structure have a higher magnitude than the following sways for the elasto-plastic case.
It is also proved that the interaction between the local and global model may increase
the total plastic deformation of the frame.
In the 3D analysis a comparison is done between applying the impulse load directly
on the front column of the frame, and applying the load on the wall and transferring it
to the column by the reaction forces of the wall. A parametric study is done in order to
investigate the influence of the walls structural properties. It is proven that applying
the load directly on the column is conservative compared to the 3D FE analysis.
However, the relative properties of the wall and column have a large influence on the
results.
Key words: Explosion impulse load, reinforced concrete, SDOF, frame structure,
elastic, elasto-plastic, 3D analysis, finite element analysis, dynamic

-- 5 of 335 --

II
Strukturell respons för ramar i armerad betong utsatta för explosioner
Examensarbete inom Structural Engineering and Building Technology
JOANNA KLOREK
ANNA SANDBERG
Institutionen för bygg- och miljöteknik
Avdelningen för konstruktionsteknik
Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
Kunskapen om hur armerade betongkonstruktioner reagerar på explosions-last är
begränsad. Design-metodiken förenklas ofta och det finns ett stort behov av vidare
efterforskningar inom området. Detta examensarbete är en fortsättning på flera
tidigare examensarbeten samtidigt som det är en del av ett större samarbete mellan
Chalmers, Myndigheten för Samhällsskydd och beredskap (MSB) och Reinertsen.
En parametrisk studie har utförts för att undersöka vilka som är de viktigaste
parametrarna för konstruktioner utsatta för impulslast. Beroende på hur den effektiva
höjden tolkas erhålls olika plastiska rotationskapaciteter från Eurocode 2, vilket också
undersöks. Studien visar att det för de flesta studerade fall kan anses konservativt att
försumma topp-armeringen samt att beräkna den effektiva höjden som avståndet
mellan botten-armeringen och toppen på balken.
Examensarbetets huvudfokus ligger på sammansatta konstruktioner, så som ramverk,
vilka undersöks i både 2D och 3D finita element (FE) analyser vilka anses
representera verkligheten i tillräcklig utsträckning. De analyserade strukturerna, som
har oändligt många frihetsgrader, förenklas till enfrihetsgradssystem (SDOF-system).
SDOF-systemen programmeras i Matlab R2013a och kontrolleras med enkla
handberäkningar samt mer detaljerade numeriska metoder baserade på centrala
differens-metoden.
2D-analysen fokuserar på strukturernas respons-modeller. Både den lokala modellen
av den främre pelaren samt den globala modellen av hela ramen har uppvisat tri-linjärt
beteende. Detta har, för det elasto-plastiska fallet, visat sig resultera i en högre första
deformations-topp jämfört med de efter-följande. Det har även visat sig att
interaktionen mellan den lokala och globala modellen kan öka ramens plastiska
deformation.
I 3D-analysen görs en jämförelse mellan att applicera impulslasten direkt på ramens
främre pelare och att applicera den på väggen som får föra lasten vidare till pelaren
genom reaktionskrafter. En parametrisk studie utförs för att undersöka hur väggens
styvhet och resistans påverkar resultaten. Studien visar att det är konservativt att
applicera lasten direkt på pelaren jämfört med 3D FE analysen. Vidare har de relativa
egenskaperna mellan väggen och pelaren stor påverkan på resultaten.
Nyckelord: Explosion, impulslast, armerad betong, enfrihetsgradssystem, ramverk,
elastisk, elasto-plastisk, 3D-analys, finit element analys, dynamisk

-- 6 of 335 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2013:87 III
Contents
ABSTRACT I
SAMMANFATTNING II
CONTENTS III
PREFACE IX
NOTATIONS X
1 INTRODUCTION 1
1.1 Background 1
1.2 Method 1
1.3 Limitations 1
1.4 Aim 2
1.5 Outline of report 2
2 BACKGROUND THEORY 4
2.1 References 4
2.2 Explosions 4
Definition of explosion 4	2.2.1
Idealized shock wave 4	2.2.2
Strain rate due to a shock wave 5	2.2.3
Blast load 6	2.2.4
Wave propagation 7	2.2.5
2.3 Material response due to static load 9
Concrete 9	2.3.1
Reinforcement 10	2.3.2
2.4 Structural response due to static load 11
Orientation 11	2.4.1
Linear elastic model 11	2.4.2
Ideal plastic model 13	2.4.3
Elasto-plastic model 14	2.4.4
2.5 Plastic hinges and plastic rotation capacity 15
Theory of plastic hinges 15	2.5.1
Definition of plastic rotation capacity 18	2.5.2
Calculation method for plastic rotation capacity 20	2.5.3
2.6 Structural response of statically indeterminate structures 22
2.7 Structural response due to impulse load 23
Difference between impulse and static load 23	2.7.1
Force and Pressure 24	2.7.2
Momentum, impulse and impulse intensity 24	2.7.3
External work and energy 25	2.7.4
Internal work and corresponding deformation 27	2.7.5
Modification factors for impulse loads other than characteristic 30	2.7.6

-- 7 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	IV
Essential parameters for impulse loaded structures 34	2.7.7
2.8 Equivalent static load 35
Introduction 35	2.8.1
Elastic model 35	2.8.2
Plastic model 35	2.8.3
Elasto-plastic model 35	2.8.4
2.9 Transformation into SDOF system 36
Introduction to SDOF system concept 36	2.9.1
Equation of motion 37	2.9.2
Differential equation for equation of motion 38	2.9.3
3 PARAMETRIC BEAM STUDY 42
3.1 Introduction 42
3.2 Different interpretations of x/d 43
Case 1 43	3.2.1
Case 2 44	3.2.2
Case 3 45	3.2.3
3.3 Geometry and properties of the beam 45
Introduction 45	3.3.1
Parameters studied 46	3.3.2
3.4 Results and comparisons 47
Orientation 47	3.4.1
Resistance versus deformation capacity for Case 1 48	3.4.2
Rotation capacity, internal work and resistance for Case 1 51	3.4.3
Comparison of Case A and Case B 56	3.4.4
Different interpretation of d for Case 2 60	3.4.5
3.5 Concluding remarks 63
4 STRUCTURAL RESPONSE OF A 2D FRAME 64
4.1 Introduction and method 64
4.2 Geometry and properties of the studied frame 64
4.3 Reflected impulse load 66
4.4 Adaption of frame into SDOF system 67
4.4.1 Introduction 67
4.4.2 Local SDOF model 68
4.4.3 Global SDOF model 72
4.4.4 Combination of the global and local SDOF model 75
4.5 Modelling in ADINA 76
4.6 Results of the elastic model 78
4.6.1 Local elastic model 78
4.6.2 Global elastic model 79
4.6.3 Combination of the local and global elastic model 80
4.7 Results of the elasto-plastic model 83
4.7.1 Local elasto-plastic model 83

-- 8 of 335 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2013:87 V
4.7.2 Global elasto-plastic model 102
4.7.3 Combination of the local and global elasto-plastic model 115
4.8 Concluding remarks 117
5 STRUCTURAL RESPONSE OF A 3D FRAME 119
5.1 Introduction and method 119
5.2 Geometry and properties 119
5.3 Adaptation into SDOF system 121
SDOF model of the wall 121	5.3.1
SDOF model of the front column 122	5.3.2
5.4 Application of impulse load 123
Introduction 123	5.4.1
Direct application of load 124	5.4.2
Delayed application of load 125	5.4.3
5.5 Modelling in ADINA 131
Introduction 131	5.5.1
2D model 131	5.5.2
3D model 132	5.5.3
5.6 Results and comparison 134
Elastic model 134	5.6.1
Elasto-plastic model 151	5.6.2
Comparison of elastic and elasto-plastic model 161	5.6.3
5.7 Parametric study 163
Orientation 163	5.7.1
Elastic model 163	5.7.2
Elasto-plastic model 175	5.7.3
5.8 Concluding remarks 185
6 CONCLUSIONS 187
6.1 Final comments 187
Parametric beam study 187	6.1.1
Structural response of a 2D frame 187	6.1.2
Structural response of a 3D frame 188	6.1.3
6.2 Further investigations 188
7 REFERENCES 190
APPENDIX A HAND CALCULATIONS 192
Introduction 192	A.1
Deformations 192	A.2
Stiffness and moment of inertia 192	A.3
Moment resistance 193	A.4
A.4.1 Main concept 193

-- 9 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	VI
A.4.2 Section without top reinforcement 194
A.4.3 Section with top reinforcement 195
Maximum deformation capacity 196	A.5
Internal and external work 197	A.6
Equivalent static load 198	A.7
APPENDIX B ADDITIONAL GRAPHS FOR PARAMETRIC BEAM STUDY 199
Introduction 199	B.1
B.1.1 Case 1 199
B.1.2 Case 2 199
Resistance versus deformation for Case 1 200	B.2
Plastic rotation capacity for Case 1 203	B.3
Internal work for Case 1 205	B.4
Internal resistance for Case 1 206	B.5
Maximum plastic deformation for Case 1 208	B.6
Sections with and without top reinforcement for Case 1 209	B.7
Resistance versus deformation for Case 2 215	B.8
Plastic rotation capacity for Case 2 221	B.9
Internal work for Case 2 222	B.10
Internal resistance for Case 2 224	B.11
Maximum plastic deformation for Case 2 225	B.12
Sections with and without top reinforcement for Case 2 227	B.13
APPENDIX C TRILINEAR STRUCTURAL RESPONSE MODELS 232
Introduction 232	C.1
Ultimate moments and resistances for the local frame model 232	C.2
Structure subjected to impulse load 234	C.3
Structure subjected to a static load 237	C.4
APPENDIX D CENTRAL DIFFERENCE METHOD 240
Introduction 240	D.1
Calculation method 240	D.2
Response models 241	D.3
D.3.1 Introduction 241
D.3.2 Elastic response model 242
D.3.3 Bilinear elasto-plastic response model 242
D.3.4 Trilinear elasto-plastic response model 243

-- 10 of 335 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2013:87 VII
APPENDIX E HAND CALCULATIONS FOR 2D FRAME 246
Input data 246	E.1
Global and local elastic frame models 249	E.2
E.2.1 Deformation 249
Local elasto-plastic frame model 251	E.3
E.3.1 Deformation 251
E.3.2 Plastic deformation capacity 253
APPENDIX F STUDY OF 3D STRUCTURE 255
Input data 255	F.1
F.1.1 Wall 255
F.1.2 Front Column 257
Plastic deformation capacity of the front column 259	F.2
Hand calculations of the dynamic reaction from the wall 261	F.3
Verification of the SDOF models 262	F.4
F.4.1 Elastic model 262
F.4.2 Elasto-plastic model 265
Support reactions in 3D FE analysis 266	F.5
F.5.1 Elastic response 266
F.5.2 Elasto-plastic response 270
APPENDIX G PARAMETRIC STUDY OF 3D STRUCTURE 275
Orientation 275	G.1
Verification of SDOF model 275	G.2
G.2.1 Elastic response 275
G.2.2 Elasto-plastic response 280
Comparison of deformation in SDOF and 3D FE analysis 281	G.3
G.3.1 Elastic response 281
G.3.2 Elasto-plastic response 286
Reaction loads 288	G.4
G.4.1 Elastic response 288
G.4.2 Elasto-plastic response 295
Comparison of delayed load in SDOF and 3D FE analysis 303	G.5
G.5.1 Elastic response 303
G.5.2 Elasto-plastic response 304
APPENDIX H INDATA FILES FOR ADINA 306
2D Frame with elasto-plastic material model 306	H.1
3D Frame with elasto-plastic material model 308	H.2

-- 11 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	VIII

-- 12 of 335 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2013:87 IX
Preface
In this study, impulse loaded reinforced concrete structures have been investigated
with focus on frame structures. The work has been carried out between January and
June 2013. The project was carried out at Reinertsen Sverige AB in Gothenburg and
in collaboration with the Department of Civil and Environmental Engineering,
Division of Structural Engineering, Concrete Structures, Chalmers University of
Technology, Sweden. The project has been carried out with Ph.D. Morgan Johansson
as supervisor and Senior Lecturer Joosef Leppänen as examiner.
We would especially like to thank Morgan Johansson for his commitment to the work
carried out in this Master’s Thesis. His engagement to the subject has made the
analyses very interesting and motivating to perform. We also want to show our
gratitude to our examiner at the Department of Structural Engineering, Joosef
Leppänen, for cheering on the project and giving helpful feedback.
Moreover, we want to express our gratitude to the staff at Reinertsen Sverige AB in
Gothenburg for welcoming us to their office. Sebastian Andersson and Mattias
Carlsson at Reinertsen Sverige AB have especially been very helpful throughout the
project.
Finally, we want to thank each other for all the hard work, learning outcomes and fun
times during the work with this project.
Gothenburg June 2013
Joanna Klorek
Anna Sandberg

-- 13 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	X
Notations
Roman upper case letters
A Area
As Area of reinforcement
B Roof span
E Young’s modulus
Ec Young’s modulus for concrete
Es Young’s modulus for steel
Ek Kinetic energy
F External force
F´ Impulse load acting on the wall length w
Fc Force in concrete
Fk Characteristic pressure load
Fs Force in steel
I Impulse, moment of inertia
Ik Characteristic impulse
L Length
0	L	
Distance from plastic hinge to zero moment section
M Moment
Mcr Cracking moment
Mrd Ultimate moment capacity
Myd Moment capacity when yielding starts
P Pressure
P0 Ambient air pressure
Ppeak Peak pressure load
Ps+ Unreflected pressure load, positive phase
R Internal resisting force, support reaction
Rm Maximum internal resisting force
Rmf Ultimate resistance at the support
Rms Ultimate resistance in the field
T Natural period
Vrd Shear force
W Amount of energy
We External energy
Wel Elastic section modulus

-- 14 of 335 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2013:87 XI
Wi Internal energy
Wk Kinetic energy
Wpl Plastic section modulus
Q Equivalent static load
Roman lower case letters
a	
Acceleration, distance, length of middle line for slab
b	
Width of cross-section
c	
Damping
c	
Distance from the edge of the beam to the centre of reinforcement
1	c	
Concrete cover
d	
Effective depth of cross-section
f	
Frequency
cc	f	
Concrete compressive strength
cd	f	
Design value of concrete compressive strength
su	f	
Ultimate reinforcement strenght
sy	f	
Yield stress for reinforcement
yd	f	
Characteristic value of yield stress
yk	f	
Design value of yield stress
h	
Height of cross-section
i	
Impulse intensity
k	
Stiffness
	k	
Multiplying factor for allowed rotation capacity
pl	l	
Extension length of plastic hinge
m	
Mass
n	
Total number
p	
Momentum
q	
Distributed load
cr	q	
Distributed crack load
rd	q	
Distributed load when ultimate capacity is reached
yd	q	
Distributed load when yielding starts
r	
Detonation distance, radius of curvature

-- 15 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	XII
s	
Column spacing, reinforcement bar spacing
t	
Time
at	
Arrival time
1	t	
Load duration
el	t	
Time when maximum uel is reached in elasto-plastic model
max	t	
Time for which umax is reached
peak	t	
Time for which pressure load reaches maximum value Ppeak
u	
Displacement
u	
Velocity
u		
Acceleration
el	u	
Elastic deformation
ep	u	
Elasto-plastic deformation
el	,	ep	u	
Elastic part of elasto-plastic deformation
pl	,	ep	u	
Plastic part of elasto-plastic defromation
max	u	
Maximum deformation
pl	u	
Plastic deformation
rd	u	
Ultimate plastic deformation
res	u	
Residual plastic deformation
s	u	
Displacement of system point
sum	u	
Sum of global and local deformation
w	
Length of slab, length of wall section
v	
Velocity
x	
Lenght coordinate
x	
Height of compression zone
cg	x	
Distance to centre of gravity
u	x	
Height of compression zone in ULS
z	
Coordinate from neutral axis, internal lever arm for reinforcement
Greek upper case letters
	
Incremental
	
Ratio between the reflected pressure and a shock wave

-- 16 of 335 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2013:87 XIII
Greek lower case letters
	
Deformation relation factor
	
Ratio between Young's modulus for steel and concrete
el	
	
Displacement error for elastic response
pl	
	
Displacement error for plastic response
	
Strain
c	
	
Concrete strain
cc	
	
Concrete compressive strain
ct	
	
Concrete tensile strain
cu	
	
Ultimate concrete strain
pl	
	
Plastic strain
acc	.	pl	
	
Accumulated plastic strain
s	
	
Reinforcement strain
sh	
	
Reinforcement strain at hardening
fsu	,s	
	
Reinforcement strain at the ultimate tensile stress fsu
su	
	
Ultimate reinforcement strain
sy	
	
Reinforcement strain when yielding begins
	
Bar diameter
	
Heat capacity ratio
I	
	
Impulse load factor
F	
	
Pressure load factor
Rm	
	
Ratio between Rm of beam with and without top reinforcement
rd	u	
	
Ratio between urd of beam with and without top reinforcement
i	W	
	
Ratio between Wi of beam with and without top reinforcement
	
Transformation factor
F	
	
Transformation factor for the external load
k	
	
Transformation factor for the internal force
m	
	
Transformation factor for the mass
mF	
	
Transformation factor for the mass and the external load
	
Wave length, shear slenderness

-- 17 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	XIV
pl	
	
Plastic rotation capacity
rev	.	pl	
	
Plastic rotation capacity with regard to shear slenderness λ
	
Density, reinforcement amount
	
Stress
c	
	
Concrete stress
cc	
	
Concrete compressive stress
ct	
	
Concrete tensile stress
s	
	
Reinforcement stress
y	
	
Yield stress
	
Angular frequency
Index
	
Indicates positive phase
0	
Initial position
3,4	,	1,2	
Numbering
III	,	II	,	I	
Indicate state I (uncracked), II (cracked), III (plastic)
a	
Indicates indata to FE program (ADINA)
b	
Bilinear
ba	
Indicates back column
c	
Indicates column
cr	
Cracking, indicates critical value
d	
Indicates decreased value
dyn	
Dynamic
e	
Equivalent
el	
Elastic
ep	
Elasto-plastic
f	
Indicates span
fr	
Indicates front column
gl	
Global
i	
Indicates increased value
k	
Characteristic
l	
Local

-- 18 of 335 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2013:87 XV
mod	
Indicates modified value
pl	
Plastic
r	
Indicates roof
s	
Indicates support
sta	
Static
t	
At time t , trilinear
tot	
Total
u	
Indicates ultimate value, indicates unchanged value
w	
Indicates wall
x	
Vertical direction
y	
Horizontal direction, yielding

-- 19 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	XVI

-- 20 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 1
1 Introduction
1.1 Background
Explosions can be both accidental and intentional. The accidental explosions are
typically occurring in the processing industry or in tunnels while intentional
explosions can be connected to military or terrorist activity.
An explosion can be characterized as an instantaneous expansion of matter resulting
in high pressure and temperature that propagates away from the centre of detonation.
The result is a load that might differ considerably from the type of static or quasi-
static loads normally used for design of structures. Due to the fact that the knowledge
of the response of the structures in these situations is limited and the designing
methodology often is simplified, there is a great need for further investigations within
this subject.
The response of reinforced concrete structures due to explosive load has been studied
in a long time project performed by Chalmers in collaboration with the Swedish Civil
Contingencies Agency (MSB) and Reinertsen. This Master’s Thesis carries on the
studies as a continuation of five previous Master’s Theses carried out by
Nyström (2006), Ek and Mattsson (2009), Augustusson and Härenstam (2010),
Andersson and Karlsson (2012) and Carlsson and Kristensson (2012).
1.2 Method
In order to get a deeper knowledge about the response of concrete structures with
regard to explosive loading a literature study is carried out. In order to simplify the
analysis the analysed structures with infinite degrees of freedom are transformed into
single degree of freedom (SDOF) systems. The SDOF systems are adapted to consider
the local and global response of the frame structure. The SDOF system is created in
Matlab R2013a and analysed using simplified hand calculation methods and a more
detailed numerical method based on the central difference method. The FE program
ADINA (2011) is used to create models in 2D and 3D which is considered to present
the reality in sufficient degree.
1.3 Limitations
The material studied is reinforced concrete without taking the effects of temperature,
creep or shrinkage into consideration. However, the methodology with some
adjustments could be used for other materials.
The material response models are approximated with elastic and elasto-plastic
material response models. These models have proved to give satisfying results in
previous studies. For the elasto-plastic model, plastic transformation factors are used,
which is a simplification.
The Master’s Thesis investigates the early response of impulse loaded structures. The
impulse loads studied are induced by shock waves in air from an explosion and it is
mainly the displacement that is studied. The influence of ground shock waves, bomb
fragments and secondary effects from collapsing structures will be neglected.

-- 21 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	2
The effect of strain hardening and increasing the resistance of the structure due to
high strain rates is also neglected.
1.4 Aim
The aim of this Master’s Thesis is to further investigate the response of reinforced
concrete structures subjected to explosions. This is based on the previous Master’s
Theses and the intention is to provide a more comprehensive understanding of the
subject. The main focus of this report is on structures composed of a few members,
such as a frame structure which is investigated both in 2D and 3D analysis.
Since the capacity of an impulse loaded structure depends on its ability to develop
internal work, a parametric study is carried out in order to investigate the important
parameters for impulse loaded structures. Depending on how the neutral axis is
interpreted in Eurocode 2, the plastic deformation capacity of the structure will differ.
This is investigated in order to find the most appropriate way of performing the
calculations.
The aim of the 2D analysis is to further investigate the SDOF models of a frame
proposed in Johansson (2013) for the elastic case as well as the elasto-plastic. The
focus for the elasto-plastic case is on the response models of the structures. The
relationship between the resistance of the structure and the deformation is investigated
with the aim to evaluate whether an SDOF system is appropriate for such cases. An
intention is also to find a combination of the two SDOF models in order to provide a
more realistic response.
In the 3D analysis a comparison is carried out between applying the impulse load
directly on the front column of the frame, and applying the load on the wall and
transferring it to the column by the reaction forces of the wall. The aim of the study is
to investigate how realistic the direct application of the load, proposed in
Johansson (2013), is and if there are alternative ways of calculating the load in the
SDOF model. A parametric study is done in order to investigate the differences for
when the stiffness and resistance of the wall is varied.
1.5 Outline of report
This report is divided into five chapters starting with Chapter 1, Introduction.
Chapter 2, Background theory, covers the theoretical background of explosions and
impulse load as well as the material and structural response models of structures
subjected to both static and impulse load. The chapter also includes the theory of
plasticity and plastic hinges. Finally, the concept of equivalent static load and
transformation into a SDOF system is described.
In Chapter 3, Parametric beam study, the important parameters for impulse loaded
beams are investigated. A study is carried out in order to find an appropriate
interpretation of the effective depth, d, for calculating the plastic deformation capacity
in Eurocode 2. It is also examined whether the top reinforcement should be neglected
or not in the hand calculations.
Chapter 4, Structural response of a 2D frame, describes a simplified SDOF model of a
frame consisting of a local and global model used for the front column and the whole
frame, respectively. Both the elastic and elasto-plastic models are investigated with

-- 22 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 3
focus on the structural response models. The SDOF calculations are compared with
FE analyses.
Chapter 5, Structural response of a 3D frame, focuses on the front wall and front
column of the frame. A comparison is done between applying the impulse load
directly on the front column of the frame, and applying the load on the wall and
transferring it to the column by the reaction forces from the wall. Finally, a parametric
study is carried out in order to investigate the effects of varying the stiffness and
resistance of the wall.
The results are presented and discussed in each chapter followed by a main
concluding discussion at the end of the report, Chapter 6. References can be found in
Chapter 7. In the appendices further background theory, hand calculations and
additional graphs are presented. Appendix C discusses trilinear response models
which are essential for this Master’s Thesis.

-- 23 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	4
2 Background theory
2.1 References
The main information presented in Chapter 2 is based on Johansson and
Laine (2012a) and several figures are also taken from this reference. Some general
information about the theory of plastic hinges and plastic rotation capacity are based
on Engström (2011). Eurocode 2, CEN (2004), is used to present the calculation
method for plastic rotation capacity.
2.2 Explosions
Definition of explosion	2.2.1
An explosion is an instantaneous release of energy which creates a fast increase in
pressure, see Figure 2.1. The explosion is an exothermal reaction which is over within
a few microseconds. From the explosion a wave front, called a shock wave, is formed
and spreads spherically. The temperature and pressure decreases with increasing
distance from the centre of detonation. After a few milliseconds the whole process is
over and then the pressure returns to atmospheric pressure.
Explosion centre
Pressure decreases further
away from the centre
Figure 2.1 The energy spreads outwards from the source of the explosion.
The magnitude of the explosion is measured in the released energy, Joule. However, it
also depends on the density of the explosive and the speed of ignition. Another, more
applicable, way of measuring the magnitude of explosions is the effect that is obtained
from the detonation of 1 kg TNT, corresponding to about 4.6 MJ.
Idealized shock wave	2.2.2
An idealized shock wave has both a positive and a negative phase, see Figure 2.2. The
shock wave forces the air to move as it spreads and it will create a lack of air behind
it, causing partial vacuum or negative pressure. At the time of arrival, ta, there is an
instantaneous increase in pressure followed by the positive and negative phase. The
negative phase is normally neglected and the positive phase is considered to be
critical.

-- 24 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 5
Pressure
Time
Negative pressure
Positive pressure
Shock front
P0
ta
Figure 2.2 Idealised shock wave from an explosion showing the positive and
negative phase.
A simplification of the shock wave is often made to make it easier to describe the load
that the wave will give rise to. Usually, the negative phase is neglected and the
pressure is assumed to be linear as illustrated in Figure 2.3.
(a)
Ppeak
t1
Time
Pressure
simplified curve
Time
(b)
Pressure
t1
Ppeak
Figure 2.3 (a) Idealised shock wave indicating the simplified curve. (b) Simplified
shock wave.
Strain rate due to a shock wave	2.2.3
The load intensity applied on a structure subjected to an explosion results in a strain
rate of the structure. A comparison of the strain rates obtained in a structure due to
different loads is shown in Figure 2.4. The strain rate due to a static load is used as a
reference and is therefore shown as 1.
1	0.1	0.01	0.001 	10 100 1000 104 105 106 107 108
Earthquake	Statical	Creep 	Impact Blast load
Figure 2.4 Comparison of strain rate between different types of loading where the
static load is the reference load.
The load due to an explosion is characterized by a very high load magnitude acting
during a very short period of time. An explosion load is shown as an impact or blast

-- 25 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	6
load in Figure 2.4 and the strain rate due to an explosion load can be up to 100 million
times larger than a static load.
The difference in strain rate demands different structural designs depending on which
type of load the structure is subjected to. It is important to consider the fact that high
strain rates influences the input material parameter of the structure. However this
effect is not further discussed in this Master’s Thesis.
Blast load	2.2.4
There are several things affecting the load from an explosion, such as the energy
content, the surroundings and the complexity of the target. The distance between the
explosion and the target as well as the position of the target has a large influence on
the size of the load.
The shock wave can hit a building in several different ways and the distribution of
pressure over time will differ depending on how it is reflected. For example, the angle
between the structure and the explosion will matter, but most important is if the wave
is reflected or not.
Reflection occurs when a shock wave hits a building as illustrated in Figure 2.5. The
size of the pressure depends on the magnitude of the explosion, the angle of which the
explosion hits the structure as well as the distance between the structure and the
explosion. When a shock wave hits the building perpendicular to the surface it is
called a normal reflection and this type of reflection results in the highest pressure.
Plan
Vy	stötvågsfront
Byggnad	Byggnad
r
reflected
impact
r
unreflected
impact
Explosion
Building
Building
Figure 2.5 Reflected and unreflected shock wave.
The difference in pressure between a reflected and an unreflected shock wave is at
least two times but can be up to 20 times. The ratio between the reflected pressure and
the shock wave,
, can be described as
 	
 	 	0
0
2	1
4	1	3
P	P
P	P
s
s

	

	
 	
	
 

(2.1)
where the heat capacity ratio, γ, varies with the pressure. For a pressure lower than
1000 kPa the heat capacity ratio can be put as 1.4.

-- 26 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 7
The shock wave hits the different parts of the building at slightly different times,
something that is often neglected since the difference in time is very small. The
loading will also differ at different parts of the building, which can be dealt with in
several ways. Either the worst load case is chosen for every part of the building, the
load size closest to the explosion, or the load can be divided into different parts with
different magnitudes.
In a city environment, the complexity of the structures gives rise to several different
phenomena such as diffraction and reflection. Diffraction is a decrease in pressure
which occurs after a shock wave has hit an irregularity of a building and spread
behind it. When a shock wave reaches the irregularity of the structure an air vortex is
created and the pressure on the back side of the structure will decrease.
Explosion
Diffraction
Diffraction
Reflection
Reflection
Figure 2.6 Graphical presentation of shock wave phenomena due to an explosion.
Wave propagation	2.2.5
An impulse load which hits a body starts a mechanical wave that travels through the
body and affects the different parts of the structure gradually with time. The effect of
an explosion will therefore not always be active in the whole structure at the same
time. This phenomenon occurs for all types of loads, but for impulse loads in
particular it is noticeable due to the fact that it happens so fast.
Figure 2.7 shows a three meter high and five meter deep concrete structure exposed to
an explosion. The longitudinal wave propagation in concrete is about 3500 m/s why
the rear wall isn´t affected by the load until about 1.4 milliseconds from the time the
front wall is affected.
In the figure it can be seen that after one millisecond the rear wall is not affected by
the load. However, after two milliseconds the rear wall has begun to react to the
loading.

-- 27 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	8
t = 1 ms t = 2 ms
t = 3 ms t = 5 ms
Figure 2.7 Response of a shelter subjected to an impulse load acting on the left
wall. The deformations are enhanced 20 times and the dark colour
marks fully developed cracks. From Johansson and Laine (2012a).
There are different types of mechanical waves which all need a medium to propagate
through. The longitudinal waves, also called pressure waves, travels parallel to the
direction of the energy. These are stronger and faster than the other mechanical waves
and they are able to travel through all types of mediums. Mechanical waves that travel
perpendicular to the direction of energy are called transverse or shear waves. These
can only travel through solids. Surface waves travel in elliptical patterns such as
ripples on a water surface.
An illustration of a material at rest, a pressure wave and shear wave are shown in
Figure 2.8.

-- 28 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 9
Half wave length λ/2
Wave length λ
(a)
(b)
(c)
uy ux
ux
Figure 2.8 Waves propagating through a body for: (a) material at rest; (b) pressure
wave; (c) shear wave.
Normally, a wave propagates as a combination of all waves but it´s the type and
direction of load that decides which wave type will be dominant. If a beam, for
example, is axially loaded the dominant wave type will be a pressure wave and if it is
loaded perpendicularly to its longitudinal axis, the dominant wave type will be a shear
wave.
2.3 Material response due to static load
Concrete	2.3.1
The stress-strain relationship for concrete is presented in Figure 2.9. The material
behaviour is close to linear at the very beginning of loading, after which it becomes
non-linear. As can be seen in the figure, the concrete strength is much higher for
compression compared to tension.

-- 29 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	10
σc
εc
σct
σcc
compression
tension
Figure 2.9 Stress-strain relationship for concrete.
Reinforcement	2.3.2
The structural response of reinforcement is presented in Figure 2.10a where fsy is the
yield strength, fsu is the ultimate tensile strength,
sy is the strain at which the
reinforcement start to yield,
sh is the strain at which steel hardening begins,
s,fsu is
the strain at the ultimate tensile stress fsu and
su is the ultimate strain. The point when
the stresses reach the yielding value, fsy, is followed by a plastic plateau, after which
strain hardening begins.
A simplification of this response, according to Eurocode 2, involves two alternatives
shown in Figure 2.10b. The first alternative is characterised by a horizontal top branch
with no strain limit, which is appropriate for hot rolled steel. The other alternative,
with an inclined top branch and with a certain strain limit, is recommended for cold
worked steel.

fsy
fsu
s,fsu	
su

sy	
sh
(a) (b)
fsy
fsu


s,fsu
Figure 2.10 (a) Stress-strain relationship for a hot-rolled reinforcement bar and (b)
idealized bilinear model according to Eurocode 2.
The ductility of reinforcement has an important influence on the plastic rotation
capacity and plastic deformation capacity, further described in Section 2.5. As these
parameters are essential for impulse loaded structures, it is worth to mention the
classification of reinforcement steel according to Eurocode 2, see Table 2.1.

-- 30 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 11
Table 2.1 Classification of reinforcing steel according to Eurocode 2.The
notations fsu, fsy and εs,fsu are illustrated in Figure 2.10.
Class fyk
[MPa]
fsu / fsy
[-]
εs,fsu
[%]
A 400 - 600 ≥ 1,05 ≥ 2,5
B 400 - 600 ≥ 1,08 ≥ 5,0
C 400 - 600 ≥ 1,15
< 1,35 ≥ 7,5
2.4 Structural response due to static load
Orientation	2.4.1
Reinforced concrete structures subjected to loading involve both linear and nonlinear
behavior and depend on the material response for both the reinforcement and the
concrete. The typical response of a reinforced concrete section, subjected to
increasing load, is presented in Figure 2.11. The section shows linear behavior as long
as it is uncracked (state I). After the first crack has occurred, the stiffness decreases
but the response is still linear (state II). When the concrete in the compression zone
has started to show nonlinear behavior or the reinforcement has started to yield, the
response of the section becomes plastic (state III).
Moment, M
Deformation, u
Mcr
Myd
Mrd
State I
State II
State III
Figure 2.11 Typical response of a reinforced concrete section.
This non-linear behavior makes the analyses of concrete structures complicated and
induces a need of introducing simplifications. Thus, the typical reinforced concrete
response is often approximated to a linear relationship. Models simulating the
response of the reinforced concrete, which are used in this Master’s Thesis, are further
described in Sections 2.4.2 and 2.4.4. Despite that these models present the real
structural behavior in a simplified way, their correctness is assumed to be sufficient to
understand the differences in response of investigated structure.
Linear elastic model	2.4.2
The simplest model is linear elastic which is characterized by unlimited elastic
deformations and constant stiffness. The stiffness can be chosen as either the stiffness

-- 31 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	12
in state I or state II, i.e. for an uncracked or a cracked section, respectively. This is
illustrated in Figure 2.12. The behaviour simulated by this model corresponds best to
the response of a reinforced concrete structure subjected to limited loads, before
state III is reached.
Load, q
Deformation, u
qcr
qyd
qrd
u
q
State I State II
Figure 2.12 Typical response for a reinforced concrete structure marked with a
dashed line and assumed linear elastic response marked with continuous
lines for stiffness of state I and state II.
If the stiffness of state II is used, the influence of the uncracked part is neglected.
Nyström (2006) has investigated models where the uncracked stiffness is taken into
consideration with the conclusion that the uncracked part does not have a significant
influence on the response of the structure why it is neglected in this Master’s Thesis.
However, the elastic model with stiffness in state I can be useful when dealing with
pre tensioned structures for which the value of cracking resistance is significantly
increased compared to reinforced concrete and thus state I is extended.
The linear elastic model agrees with the response of steel before reaching its yield
strength fsy, see Figure 2.10a. Linear elastic material is described by Hooke’s law and
presented in Figure 2.13a.
E
σ
ε
ε	(a)
k
R
u
ε	(b)
Figure 2.13 Linear elastic response for: (a) material; (b) structure.
By following Hooke’s law, a relation for the linear elastic response of the concrete
structure is established, Figure 2.13b. The elastic displacement u increases
proportionally with increasing the internal resisting force R while the structural
stiffness k remains constant. This can be described as
u	k	=	R 	
(2.2)

-- 32 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 13
The structure or material returns to its initial shape after removal of the load. This
means that there will be no remaining deformation after the load is removed.
Ideal plastic model	2.4.3
The behaviour described by the ideal plastic model corresponds to the response in
ultimate limit state, state III, when the yielding strength of the material or the ultimate
load capacity of the structure is reached. A comparison of this model to the typical
response of a reinforced concrete structure is presented in Figure 2.14 where upl is the
plastic deformation.
Load, q
Deformation, u
qcr
qyd
qrd
u
q
upl
Figure 2.14 Typical response for a reinforced concrete structure marked with a
dashed line and assumed plastic response marked with a continuous
line.
The response of the ideally plastic material is presented in Figure 2.15a. The
deformations are equal to zero until the stresses reach the material yield strength.
After that, the plastic deformation develops without increasing the stresses. The model
for the structure is established in Figure 2.15b.
σ
ε
ε	(a)
R
u
ε	(b)
σy Rm
Figure 2.15 Ideal plastic response for: (a) material; (b) structure.
The structural model can be described as
(2.3)
where F is the external load and Rm is the maximum internal force. This model
assumes that the region of the structure where the plastic capacity has been reached
0
0
		
		
u	and	R	F	for	R	R
u	and	R	F	for	F	R
m	m
m

-- 33 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	14
has an ideally plastic behavior. This results in the formation of a plastic hinge. The
plastic deformation remains after removal of the load.
In an ideal plastic model the plastic deformation capacity is unlimited. However it
must be remembered that this is not the case in reality and a concrete structure has
limited plastic deformability. In order to assure that a plastic hinge can develop it is
necessary to provide the structure with a sufficient plastic rotation capacity. The
subject of plastic rotation capacity is discussed in Section 2.5.
Elasto-plastic model	2.4.4
The elasto-plastic behavior combines linear elastic and ideal plastic response. It is
characterized by elastic behavior with a constant stiffness that corresponds to the
stiffness in state II and elastic deformations up to the material yielding strength or the
ultimate load capacity of the structure. After exceeding this value the plastic state with
plastic deformation is reached. A comparison of this model to the typical behavior of
a reinforced concrete structure is presented in Figure 2.16, where uep,el is the elastic
deformation and uep,pl is the plastic deformation.
Load, q
Deformation, u
qcr
qyd
qrd
u
q
uep,el uep.pl
Figure 2.16 Typical response for a simply supported beam of reinforced concrete
marked with a dashed line and assumed elasto-plastic response marked
with a continuous line.
If the structure is unloaded in the plastic stage the response will be parallel to the
inclination in the elastic stage governed by the elastic stiffness in state II, Figure 2.17.
If the structure is loaded again, the deformations will follow the elastic response up to
the yield strength and after reaching this value the deformations will continue from
the value reached in the previous loading cycle.

-- 34 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 15
Rm
R
(b)
k
ε
Unloading and
reloading
u
ε
σy
σ
(a)
E
ε
Unloading and
reloading
ε
ε uep.el
Figure 2.17 Elasto-plastic response for: (a) material; (b) structure.
Depending on if the external load F has reached the maximum internal force Rm the
elasto-plastic relationship can be expressed as
(2.4)
where uep,el is the elastic deformation in the elasto-plastic response model.
This model is the more realistic than the elastic and ideally plastic models presented
in Section 2.4.2 and 2.4.3, respectively.
2.5 Plastic hinges and plastic rotation capacity
Theory of plastic hinges	2.5.1
At the stage when a section has reached its moment capacity, Mrd, and shows an
ideally plastic behaviour, the deformation capacity is unlimited. If a section with such
properties develops in a beam, it will deform much more than the neighbouring
regions, which still shows elastic response. This plastic section will connect the
regions with elastic response and the shape of the beam will differ. As this region,
with such a large curvature, is comparatively small, it can be assumed that the
developing deformation will concentrate only in this plastic section, i.e. plastic hinge.
The regions with plastic behaviour as well the corresponding curvature and the model
assumed in the calculation methodology for a simply supported beam and a beam with
fixed edges is presented in Figure 2.18.
el	ep	m	m
el	ep	m
u	u	and	R	F	for	R	R
u	u	and	R	F	for	u	k	R
,
,
		
			

-- 35 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	16
Curvature 	Curvature
Model 	Model
Parts with yielding	Part with yielding
Plastic hinge 	Plastic hinges
Part where plastic hinge develops 	Parts where plastic hinges develop
Figure 2.18. Plastic hinges and corresponding curvature for a: (a) simply supported
beam; (b) fixed beam, Nyström (2006).
When the load is further increased, more than one plastic hinge can develop,
depending on the support conditions. In case of static loading, failure of the structure
occurs when the collapse mechanism is created. However, this is not the case for the
structures subjected to dynamic loading. For such type of loading collapse of the
structure occurs when the plastic rotation capacity is reached.
For a statically determinate structure such as a simply supported beam, only one
plastic hinge is formed, which is the condition for the collapse mechanism to be
created. The continuous beams and the beams fully restrained at the supports are more
redundant. The structures which are n-order indeterminate can develop n + 1 plastic
hinges.
Thus, for example, a beam which is fully fixed at one edge and simply supported at
the other develops plastic hinges in the span as well as at the fixed support. When it is
subjected to a uniformly distributed load the yielding starts at the fixed support. If the
load is further increased, a plastic hinge develops at this section. Since the moment
cannot increase further in this section, it can be assumed that the restraint at this
support corresponds to a simply supported boundary condition. Thus, the studied
beam can be considered as simply supported, loaded with a constant moment, i.e. the
plastic moment, at the fixed support. The formation of a plastic hinge at the fixed

-- 36 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 17
support, however, has not triggered the collapse mechanism yet. There is still capacity
left in the span section and the load can be increased until yielding starts in the span
and the plastic hinge is formed there as well, at which time a collapse mechanism is
created. The calculation of the moment at the fixed support and in the span in ultimate
limit state, when the collapse mechanism is formed, is presented in Section 2.6.
The formation of plastic hinges for a continuous beam, together with its extension
length lpl and its development of plastic rotation θpl, is schematically presented in
Figure 2.19. A continuous beam with an increasing load q is illustrated in
Figure 2.19a. In Figure 2.19b, the deformed shape of the studied beam, before
yielding is reached in any section, is illustrated. As the load increases the first plastic
hinge develops at the intermediate support, Figure 2.19c. The rotation θpl continues to
develop until two additional plastic hinges are formed in the span sections and the
collapse mechanism is created, Figure 2.19d.
q
(a)
(b)
(c)
(d)
θpl
θpl
θpl
lpl
Figure 2.19 Formation of plastic hinges and development of plastic rotation for a
continuous beam loaded with an increasing load q. The extension length
of the plastic hinge, lpl, is schematically presented.
According to Engström (2011) two types of plastic hinges can be distinguished, single
and double. A single plastic hinge is formed at the fixed support, Figure 2.20a. A
double plastic hinge develops in the span (Figure 2.20b) or at the support section in a
continuous beam, Figure 2.20c.

-- 37 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	18
(a)
(b)
(c)
θpl
θpl1 θpl2
θpl1 θpl2
Figure 2.20 (a) Single plastic hinge at fixed support; (b) double plastic hinge in the
span; (c) double plastic hinge in the section above the support of the
continuous beam, Engström (2011).
Definition of plastic rotation capacity	2.5.2
When analysing an impulse loaded structure with a plastic or an elasto-plastic model,
not only the ultimate resistance should be checked but also the ultimate deformation.
The deformation is estimated by using the concept of plastic rotation, θpl,
schematically shown in Figure 2.21. Plastic rotation describes the increasing curvature
of the section, due to the development of plastic deformations, which begins when the
moment capacity of the section has been reached and continues until the section
collapses.
u
pl
L/2 L/2
h
Figure 2.21 Plastic rotation and deflection for the plastic model.
In the moment curvature diagram, presented in Figure 2.22, the plastic rotation begins
when the curvature reaches the value of (1/r)y and develops until its ultimate
magnitude (1/r)u is reached.

-- 38 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 19
Mrd






r
1
M
u	r 




 1
y	r 




 1
θ pl
Figure 2.22 A moment curvature diagram. The plastic rotation begins at the first
yielding (at curvature (1/r)y) and continues until the collapse mechanism
develops (at curvature (1/r)u ).
In order to calculate the plastic rotation, θpl, an integration of the curvature over the
extension length lpl is done, according to equation (2.5). The extension length of a
plastic hinge is schematically presented in Figure 2.19c.
 





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


pl	l y
pl dx
r	r
1	1
	
(2.5)
The definition of the curvature, which is the inclination in the strain distribution
diagram, Figure 2.23, can be calculated as
u
s
u
cc
x	d	x	r
1

	

	
(2.6)
where εcc, is the concrete strain at the compressed edge of the section, εs is the steel
strain in state III, xu is the height of the compression zone in ultimate limit state and d
is the effective depth.
εcc
xu
εs
d
Figure 2.23 The strain distribution diagram, where the curvature of the section is its
inclination.
When dealing with plastic rotation capacity it is good to recall how the magnitude of
the compressive concrete zone x to the effective depth d influences the strain
distribution in the loaded section. The steel strain for the cross section can be
calculated as

-- 39 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	20
cu	s x
x	d

	 
	
(2.7)
If the ratio of x1 to d is too large, the steel strain will not reach its maximum value
when the section reaches its capacity, see Figure 2.24a. In the compressed zone of the
concrete the failure will be brittle and caused by crushing of the concrete. In this case,
the area of the steel bars should be decreased in order to utilize the yielding strength
of the steel. Another solution could be to increase the height of the section or to
increase the compressive strength of the concrete. This would provide a lower ratio of
x2 to d and a more effective use of the steel strength which secures plastic response.
This is presented in Figure 2.24b.
εcu
εs1
x1
εs1 < εsy σs < fyd εsy = fyd / Es
d
(a) (b)
εcu
εs2
d
x2
εs2 > εsy σs = fyd εsy= fyd / Es
Figure 2.24 Strain and stress values for a reinforced concrete section reaching its
capacity. (a) For a high value of the compressive zone x1 in relation to
the effective depth d, the steel stresses are lower than the yielding
strength. (b) For lower ratios of x2 to d, the stresses reach the yielding
strength.
Calculation method for plastic rotation capacity	2.5.3
There are several calculation methods for plastic rotation capacity, established by
different authorities. The parametric beam study in Chapter 3 is conducted according
to the recommendations found in Eurocode 2, CEN (2004), which are briefly
described in the following paragraphs. A more detailed description can be found in
Section A.5.
The base for methodology in Eurocode 2 is the graph illustrated in Figure 2.25, where
the plastic rotation capacity is a function of the compressed concrete zone x to the
effective depth d, with consideration to the reinforcement ductility and the concrete
strength class.

-- 40 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 21
x / d
pl [10 -3 rad]
Concrete
crushing
Reinforcement
failure
Class C
Class B
Figure 2.25 Graph for plastic rotation capacity from Eurocode 2, CEN (2004).
The plastic rotation capacity, θpl, obtained from the graph should be multiplied with a
factor k calculated as
where
d
L0

		
(2.9)
and L0 is the distance between the plastic hinge and the section where the moment is
zero. Thus, the revised plastic rotation capacity is
pl	rd k	

	  		
(2.10)
According to the graph for plastic rotation capacity, failure of the section is caused by
either crushing of the concrete or by rupture of the reinforcement. In the interval with
small values of x/d, where the rotation capacity is limited by the ultimate steel strain,
the rotation capacity increases with increasing ratio of x/d and failure is caused by
rupture of the reinforcement. For larger values of x/d, where the rotation capacity is
limited by the ultimate concrete stain, failure occurs due to crushing of the concrete.
According to Engström (2011) this simple method gives conservative results.
Moreover, it was developed for statically loaded structures but is also applicable for
impulse loading.
3

 	k	
(2.8)

-- 41 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	22
2.6 Structural response of statically indeterminate
structures
In this section, a short description of the non-linear response of statically
indeterminate structures is given. The description is based on the beam which is
simply supported at one edge and fixed at the other, illustrated in Figure 2.26. It is
assumed that the section at the support is provided with more reinforcement than the
section in the span. Thus, the stiffness EIs is larger than EIf.
q
Span section,
EIf
Support section,
EIs
Figure 2.26 The studied beam is simply supported at one edge and fixed at the other,
for which the response and changes in moment distribution due to an
increase of load is studied.
During the uncracked stage, the beam shows linear structural response. The moment
distribution increases in proportion to the increase of the load and corresponds to
line 1 in Figure 2.27a. When the load is further increased, cracking begins at the fixed
support since the moment is higher there. The section at this support cracks, and the
stiffness EIs decreases. As a consequence, the moment is attracted to the stiffer
regions in the span section since they are still uncracked. The moment diagram, for
that stage, is defined as line 2 in Figure 2.27a. Further increase of the load results in
cracking of the span sections.
When both the sections in the span and at the fixed support are cracked, the moment is
attracted to the stiffer regions at the fixed support, as it is provided with higher
stiffness. The moment distribution at that stage is defined as line 3 in Figure 2.27.
Now yielding starts at the fixed support, before the design load is reached and the first
plastic hinge is formed. This corresponds to a moment distribution shown as line 4 in
Figure 2.27b.
However, there is still capacity left as the section in the span has not reached its
ultimate moment resistance yet. The load can be further increased up to the point
when the ultimate capacity of the critical section in the span is reached after which a
plastic hinge is created in the span and a collapse mechanism forms. The moment
distribution is defined as line 5 in Figure 2.27b. From this point the load cannot be
further increased. Local failure occurs, in the plastic region, as a result of either
concrete crushing or reinforcement rupture.

-- 42 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 23
(a) (b)
3
2
1 3
4
5
Figure 2.27 The changes in the moment distribution for a span of a continuous beam,
due to an increase of load: (a) stages 1-3; (b) stages 3-5.
2.7 Structural response due to impulse load
Difference between impulse and static load	2.7.1
An explosion leads to an impulse load which can contain a maximum pressure that is
many times larger than an equivalent static load. In addition to the large difference in
load magnitude, the duration of the impulse load is significantly shorter than a
constant static load, see Figure 2.28. These are the reasons for the considerable
difference in the structural responses that may be obtained due to impulse load and
static load, respectively. Thus, the calculation methodology for the impulse loaded
structures, used in this Master’s Thesis, involves dynamic analysis based on the
equivalent single degree of freedom (SDOF) system, described in Section 2.9.
Time
Pressure
Static load
Blast load
Figure 2.28 Comparison of the duration and magnitude of a blast load and
equivalent static load acting on a civil defence shelter (Johansson and
Laine (2012a)).
Impulse loaded structures are normally provided with an equal reinforcement amount
on both edges of the cross section. This is essential due to the fact that when a

-- 43 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	24
structure subjected to an impulse load sways back and forward, the compressed edge
becomes tensioned and tensioned edge compressed.
In order to provide knowledge about the response of structures subjected to impulse
load, it is essential to introduce some basics dynamic concepts. The most important
concepts are presented in the following sections.
Force and Pressure	2.7.2
The force F is defined, according to Newton’s second law, as the correlation between
the mass m and the acceleration a as
ma	F 	
(2.11)
The definition of pressure, P, which is used to describe the magnitude of the shock
waves, is
A
F
P 	
(2.12)
where P is the pressure and A is the area subjected to the force F.
Momentum, impulse and impulse intensity	2.7.3
The momentum, p, for a body with the mass m and the velocity v is expressed as
mv	p 	
(2.13)
The change in momentum for a body with an initial velocity v0 caused by the force F
within the time interval from t0 to t1 can be expressed as
				
1
0
)	(	0	1
t
t
dt	t	F	v	m	v	m	
(2.14)
The impulse I transmitted to the body is generated from the force F
	
1
0
t
t
dt	)	t	(	F	I	
(2.15)
The impulse intensity is the integral of the pressure-time-curve as illustrated in
Figure 2.29 and it is expressed as
	
1
0
t
t
dt	)	t	(	P	i	
(2.16)

-- 44 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 25
P
t
i
t0 t1
Figure 2.29 The impulse intensity.
The correlation of the pressure, which describes the magnitude of the shock wave, to
the total impulse I acting on the area A can also be recognized as
 				
1
0
t
t
dt	t	P	A	A	i	I	
(2.17)
When discussing the concepts of pressure and impulse, two types of dynamic loading
are worth mentioning. Figure 2.30a presents the ideal impulse load described by the
concept of characteristic impulse Ik which is an infinite high pressure, acting during an
infinite small time interval. In this case, the force instantaneously increases and
decreases. Figure 2.30b illustrates a pressure load defined by a characteristic pressure
load Fk which is a shock wave acting during an infinite long time with constant
magnitude.
Force, F
Ik
ta
(a)
Time, t
(b)
Force, F
Time, t
ta
Fk
Figure 2.30 Two cases of dynamic loading: (a) ideal impulse load;
(b) pressure load.
External work and energy	2.7.4
Work is a parameter that describes the transfer of energy based on the law of energy
conservation. It can be represented by potential or kinetic energy and it can be
classified as external and internal work.
The external work, We, is the work done by the external force, i.e. impulse load due to
an explosion acting on the structure. The internal work, Wi, is a result of the action of
the internal resistance of the structure. The measure of the structural response due to
external work is a resulting deformation and is further discussed in Section 2.7.5.

-- 45 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	26
According to the law of energy conservation, no energy disappears. If a certain force
acts on the structure, the work done by this force is converted into kinetic or potential
energy within the structure. Thus, the work done by the force acting on the body is
equal to the increase in kinetic energy of this body, causing its movement or
deformation. This is valid only when there is no friction or other forces causing
energy losses. According to the law of energy conservation, the work equilibrium,
where the kinetic energy should be balanced by the internal energy Wi, is
k	i	e W	W	W 		
(2.18)
The definition of the external work, for impulse loaded structures, involves the
concepts of impulse and kinetic energy transferred into the structure. The action of the
impulse I on the body with mass m and velocity v can be described as
mv	I 	
(2.19)
The kinetic energy Ek that is transferred by the impulse to the structure is defined as
2
2
v	m
Ek

	
(2.20)
This equation is most appropriate to use when the impulse I corresponds to the
characteristic impulse Ik. If this is the case, the external energy can be assumed to be
equal to the kinetic energy. The internal work done by the structure when the kinetic
energy is transferred into potential energy within the structure can be disregarded. If
the impulse is prolonged in time, the structure has time to develop the resistance and
absorb the energy. This means that the external work done by the impulse will be
smaller than in case of a characteristic impulse. This is illustrated in Figure 2.31.
We,1 - characteristic impulse
We,2 - for an arbitrary shockwave
Force, F
Time, t
dt
I1 = I2 but We,1 > We,2
t1
Figure 2.31 External work for a characteristic impulse and an impulse prolonged in
time. Both impulses have the same magnitude.
Thus, by inserting equation (2.19) into (2.20), the external work can be presented as
the result of the characteristic impulse acting on the mass m, calculated as
m
I
E	W k
k	e 2
2
		
(2.21)

-- 46 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 27
The concept of internal energy for different response models is further described in
Section 2.7.5, where also the calculation method is explained for deformations of
impulse loaded structure.
Internal work and corresponding deformation	2.7.5
2.7.5.1 Introduction
One of the most important concerns when dealing with structures subjected to impulse
load is the ability of the structure to deform due to assimilation of the kinetic energy
resulting from the dynamic load. The energy equilibrium, equation (2.18), is the base
for the calculation methodology for impulse loaded structures. The kinetic energy,
which represents the external energy, We, should be balanced by the internal energy,
Wi. By involving this condition, the resulting deformation can be assessed, Johansson
and Laine (2012a). This deformation is of the minimum magnitude that assures that
the structure is able to take care of the evolved energy, when the impulse affects the
structure, without local failure or collapse. As the response of the structure subjected
to the increasing load is nonlinear, approximate models simulating the structural
behaviour are introduced. Sections 2.7.5.2 to 2.7.5.4 presents the resulting
deformation for structures subjected to characteristic impulse load for elastic, plastic
and elasto-plastic response models, respectively. Section 2.7.6 presents how the
calculation should be modified for impulse loads other than characteristic.
2.7.5.2 Elastic response
In case of the elastic response, the magnitude of the internal work, Wi, presented in
Figure 2.32 where uel corresponds to the elastic deformation in the elastic response
model, can analytically be described as
 
2	2
2
el	el	el
i
ku	u	u	R
W 

	
(2.22)
u
R
Wi
uel
k
Figure 2.32 Resistance-displacement relation for a structure with elastic response.
The work equilibrium and the resulting elastic deformation, which is schematically
presented in Figure 2.33, is calculated as

-- 47 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	28
	m
I
u
ku
m
I
W	W k
el
el	k
i	e 				 2	2
2	2
(2.23)
where ω is angular frequency which can be described as
m
k

		
(2.24)
u
F, R
uel
k
Wi
We
R
Figure 2.33 Work equilibrium for the elastic response.
2.7.5.3 Plastic response
The internal work, Wi, shown in Figure 2.34, where upl corresponds to the plastic
deformation in the plastic response model, is calculated as
 	 	pl	m	pl	pl	m	i u	R	u	u	R	W 			
(2.25)
u
R
Rm
Wi
upl
Figure 2.34 Resistance-displacement relation for a structure with plastic response.
The work equilibrium and the resulting plastic displacement presented in Figure 2.35
can be calculated as
m
k
pl	pl	m
k
i	e mR
I
u	u	R
m
I
W	W 2	2
2	2
					
(2.26)

-- 48 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 29
u
F, R
upl
Wi
We
Rm
Figure 2.35 Work equilibrium for the plastic response.
2.7.5.4 Elasto-plastic response
The internal work shown in Figure 2.36, where uep,el corresponds to the elastic and
uep,pl to the plastic deformation in the elasto-plastic response model, is calculated as
 		pl	,	ep	el,	ep
m
i u	u
R
W 2
2 		
(2.27)
u
R
Rm
Wi
uep,pl	uep,el
uep = uep,el + uep,pl
Figure 2.36 Resistance-displacement relation for a structure with elasto-plastic
response.
The work equilibrium and resulting plastic displacement presented in Figure 2.37 can
be calculated as
 	 2	2	2
2
2	2
2	2
el,	ep
pl
el,	ep
m
k
pl	,	ep	pl	,	ep	el,	ep
m	k
i	e
u
u
u
mR
I
u	u	u
R
m
I
W	W 									
(2.28)
Together with the elastic part the total deformation the elasto-plastic deformation can
be calculated as
m
k	m	el,	ep
pl	pl	,	ep	el.	ep	ep mR
I
k
R	u
u	u	u	u 2	2	2
2
						
(2.29)

-- 49 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	30
u
F, R
uep,pl
Wi
We
Rm
uep,el
uep = uep,el + uep,pl
Figure 2.37 Work equilibrium for the elasto-plastic response.
Modification factors for impulse loads other than characteristic	2.7.6
2.7.6.1 Orientation
The definitions of deformation due to impulse load presented in Section 2.7.5 are
established with regard to a characteristic impulse load. For impulse loads that are not
considered as characteristic, the equations deliver results on the safe side since the
resulting deformation is overestimated. In order to modify the result, the impulse load
factor γ1 and pressure load factor γF, should be used together with the damage curves,
according to Johansson and Laine (2012a).
A random impulse load with maximum load F1 and impulse I1 is presented in
Figure 2.38.
t
F
F1
t1
I1
Figure 2.38 A random impulse load.
2.7.6.2 Elastic model
For the elastic response, γI describes the relation of the impulse I1 to the corresponding
characteristic impulse load Ik in equation (2.30). The notation γF describes the relation
of the maximum load F1 to the corresponding characteristic pressure load Fk. in
equation (2.31).
k
I I
I1

		
(2.30)

-- 50 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 31
k
F F
F1

		
(2.31)
By involving the ratio of periodicity T to the duration of the load t1 and a type of load
according to Figure 2.39, the correct value of modification factor is established from
Table 2.2. The frequency f and periodicity T are calculated as


2
	f	
(2.32)
f
T 1
	
(2.33)
t
F
t1
F1
I1
n = 0
(a) (b)
t
F
t1
F1
I1
n = 1
(c)
t
F
t1
F1
I1
n = 2
Figure 2.39 Type of impulse loads used in the estimation of the correct value of
deformation where the factor n describes how the load decreases,
Johansson and Laine (2012a).

-- 51 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	32
Table 2.2 The correlation of error δel , the ratio T/t1, impulse load factor γI and
pressure load factor γF, for the load types according to Figure 2.39.
From Johansson and Laine (2012a).
δel	
II
F
t
T


 	
1	I
F
t
T


	 	 2	1	I
F
t
T


	 	 3	1
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
If γI = 1, the studied impulse corresponds to a characteristic impulse. The notation δel
indicates how much the deformation calculated from equation (2.23) is overestimated.
In order to get the correct value of deformation, the magnitude of the studied impulse
is increased with δel when it is inserted into equation (2.23). For example, for a ratio
of T/t1 = 4.75 and a type of load corresponding to n = 1, δel = 5 % and γ1 = 1.05. Thus,
the value of the impulse Ik inserted into equation (2.23) is II /1.05.
2.7.6.3 Plastic model
For the plastic response, similarly as for the elastic, γI describes the relation of the
random impulse I1 to the corresponding characteristic impulse load Ik, see
equation (2.34). The notation γF describes the relation of the random load F1 to the
internal resistance R, equation (2.35).
k
I I
I1

		
(2.34)

-- 52 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 33
R
F
F
1

		
(2.35)
By using the correlation between F1 and R together with the type of load, according to
Figure 2.39, the error in the estimation of the deformation when using equation (2.26)
for the random impulse load, δpl, can be calculated.
Table 2.3 The correlation of the estimation error δpl , the impulse load factor γI
and the pressure load factor γF, for the load types according to
Figure 2.39. From Johansson and Laine (2012a).
δpl	
IR
F
F
1

	R
F
F
1

	R
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
The correct value of the deformation is obtained by modifying the value of Ik inserted
in equation (2.26). For example, for an impulse load corresponding to n = 1 and
γF = 10, an error estimation of δpl = 15 % and an impulse load factor of γI = 1.072 is
obtained according to Table 2.3. This means that the deformation for this impulse load
is overestimated with 15 % when equation (2.26) is used, why the impulse Ik inserted
in this equation should be decreased. Thus when Ik is inserted in equation (2.26) it is
modified to Ik = I1 /1.072 for the correct plastic deformation to be obtained.

-- 53 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	34
Essential parameters for impulse loaded structures	2.7.7
Besides the mass of the structure, which decreases the effect of the impulse load, the
most important parameter of the structure is its ability to absorb the external energy.
When a shock wave hits a structure the external energy is transferred into internal
energy of the beam in form of potential and kinetic energy due to deformations. The
structure will resist the impact when its maximum internal work Wi reaches the value
of the external work We. In such case, the maximum allowable deformation is
obtained. Figure 2.40 presents a combination of these two parameters which results in
a certain deformation utot.
u
F, R
utot
F(u)
R(u)
We
Wi
Figure 2.40 Combination of the external work We resulting from the external
force F(u) and the internal work Wi done by the internal force R(u).
In general, the response of a structure with high stiffness is characterised by small
deformations and high resisting force while for a structure with low stiffness, the case
is the opposite. The capacity of the structure to absorb energy is a combination of its
ability to deform and its maximum resistance. Thus, for explosion load a high
resistance combined with a small deformation is not always beneficial, Johansson and
Laine (2012a). For an impact load, the internal work Wi,1 needed to balance the
external load, can be less than the internal work Wi,2 for a structure with low stiffness.
This is illustrated in Figure 2.41.
R
u
u1 u2
R1
Wi,1
R2
Wi,2
Wi,2 > Wi,1
Figure 2.41 Comparison of a structure with high stiffness, high resistance and low
deformation ability with a structure provided with low stiffness, low
resistance and large plastic deformation ability.
A ductile material behaviour, with high plastic rotation capacities, is desired for
structures subjected to impulse loading. For the statically loaded structures, on the
other hand, it is preferred to obtain a high strength and small deformation through
high load capacity and high stiffness.

-- 54 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 35
2.8 Equivalent static load
Introduction	2.8.1
To make further simplifications when dealing with the assessments of the impulse
loaded structures, the dynamic load can be transferred into an equivalent static load.
Johansson and Laine (2012a) have presented this procedure based on the assumption
that the acting impulse load Ik involves the same amount of transferred energy as the
work done by the static load Q. The equivalent static load for the elastic, plastic and
elasto-plastic model is presented in the following sections.
Elastic model	2.8.2
In case of an elastic response model, the work done by the external force Q is
2
el
e
Qu
W 	
(2.36)
and by comparing this to the work done by the characteristic impulse load Ik, the
equivalent static load resulting in the elastic deformation is established as

 k
k	k	k	el I	Q
m
I
m
QI
m
I	Qu 				 2	2	2	2
2	2
(2.37)
Plastic model	2.8.3
For the plastic response the work done by the external force Q is
pl	e Qu	W 	
(2.38)
Following the same procedure as in case of the elastic response the equivalent static
load Q is
m
k
m
k	k
pl 	R	Q
m
I
mR
I
Q
m
I
Qu 					 2	2	2
2	2	2
(2.39)
Elasto-plastic model	2.8.4
For the elasto-plastic response the equivalent static load Q corresponds, similarly as in
the case of plastic response, to the ultimate resistance Rm, which is established by the
stiffness k for the elastic phase and the deformation uep,el for the elastic phase, see
Figure 2.36.
m	R	Q 	
(2.40)
where Rm=kuep,el

-- 55 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	36
2.9 Transformation into SDOF system
Introduction to SDOF system concept	2.9.1
Deformable structures have an infinite number of degrees of freedom. However, the
system can be discretized into an arrangement with a finite number of degrees of
freedom. By simplifying the system it can be transformed into a system with a single
degree of freedom, i.e. SDOF.
q(x,t)
m, L, E, I, c
Re ce
me
Fe(t)
Figure 2.42 Transformation of the beam into a SDOF system.
In the SDOF system, equivalent quantities for mass as well as internal and external
load are used. The quantities are written without an index e for the untransformed
body and with an index e for the equivalent body of the SDOF system. The
transformation is done using transformation factors, κ, which depend on both the
applied load and the deflected shape of the structure. Transformation factors are
further described in Section 2.9.3.
The SDOF system is one-dimensional and can therefore only move in one direction
while the real structure is three dimensional and can move in three directions.
To be able to transform a structural system into a SDOF system a deflection shape has
to be assumed. A structure has an infinite number of bending modes, but when
creating a SDOF system the deflection shape is based on a static case similar to the
first bending mode.
First bending mode
Second bending mode
Third bending mode
Figure 2.43 The three first bending modes.
A condition for using a SDOF system is that a uniform change of deformation is
assumed, meaning that a change in displacement for every part of the beam is
proportional to all other parts.

-- 56 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 37
Based on this a SDOF system can describe the behaviour of the structure in any point.
For a simply supported beam or a cantilever beam the chosen point is often the one
with maximum deflection. For a beam fixed at one edge and simply supported at the
other the chosen point is often in the middle. The chosen point represented by the
SDOF system is called the system point.
System point
Figure 2.44 System point in the middle of a simply supported beam.
Equation of motion	2.9.2
Bearing in mind Newton’s second law, equation (2.11), it can be noticed that the body
with mass m and acceleration a, as in Figure 2.45a, is subjected to a system of forces
which results in the following equilibrium
ma	)	R	R	(	)	t	(	F dyn	sta 			
(2.41)
where F(t) is the external force and Rdyn and Rsta describes the dynamic respective
static internal resistance of the body.
m
a
F(t) Rdyn
Rsta
F(t)
k
c
m
u
(a) (b)
Figure 2.45 (a) Forces acting on the rigid body; (b) Forced damped SDOF system.
As presented in Figure 2.45b, this can also be described in form of a SDOF system
with a damper and a spring. Thus the internal static resistance, Rsta, of the body can be
expressed as the correlation between the spring stiffness k and the displacement u
ku	Rsta 	
(2.42)
and the internal dynamic resistance can be expressed as the damping c times the
velocity of the bodyu
u	c	Rdyn 		
(2.43)
By combining the forces with force equilibrium the equation of motion is obtained as
 	t	F	ku	u	c	u	m 			 		
(2.44)

-- 57 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	38
where ü is acceleration.
Differential equation for equation of motion	2.9.3
It has been shown in Section 2.9.2 that the equation of motion for a structure can be
written as
)	t	(	F	ku	u	c	u	m 		 		
(2.45)
where m is the untransformed body mass, ü is the acceleration, c is the damping,u	 is
the velocity, k is the stiffness, u the displacement and F(t) the external force acting on
the untransformed body. However, for structures subjected to impulse loading the
damping is usually not important and is therefore often neglected in these
calculations.
For the case of one degree of freedom, the damping is neglected and therefore the
equation of motion can be written as
)	(t	F	R	u	m 			
(2.46)
where R is the internal force
ku	R 	
(2.47)
Transformation factors are used to transform the quantities of the original structure to
a SDOF system. These are defined as
m
me
m 
		
(2.48)
R
Re
K 
		
(2.49)
)	(
)	(
t	F
t	Fe
F 
		
(2.50)
Based on conservation of kinetic energy and by assuming that the mass is constant per
meter, the transformation factor κm can be written as




L	x
x s
m dx
u
x	u
L 0
2
2
)	(	1
	
(2.51)
The conservation of applied load for a uniformly distributed load q(x) = q gives a
transformation factor κF described as




L	x
x s
F dx
u
x	u
L 0
)	(	1
	
(2.52)

-- 58 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 39
For further information about the transformation factors the reader is referred to
Johansson and Laine (2012a). Inserting the transformation factors into the equation of
motion gives
)	(t	F	R	u	m F	K	m	

	
	 			
(2.53)
Dividing by κF the equation can be written as
)	(t	F	R	u	m
F
K
F
m 	



 	
(2.54)
According to Biggs (1964)
F	K	

	 	
(2.55)
A new transformation factor κmF is introduced
F
m
mF


 	
(2.56)
Now, the equation of motion for a SDOF system can be written as
)	(t	F	R	u	m	mF 			
	
(2.57)
This shows that it is only the body mass that is affected by a factor κmF in order to
transform the structure into a SDOF system.
Transformation factors for different structural elements with different boundary
conditions and loading cases are presented in Table 2.4, Table 2.5 and Table 2.6.

-- 59 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	40
Table 2.4 Transformation factors for a beam subjected to a point load. From
Johansson and Laine (2012a).
Point load on beam element
Elastic deformation curve
M	
	
0.486 0.371 0.445 0.236
F	
	
1.000 1.000 1.000 1.000
MF	
	
0.486 0.371 0.446 0.236
Plastic deformation curve
M	
	
0.333 0.333 0.333 0.333
F	
	
1.000 1.000 1.000 1.000
MF	
	
0.333 0.333 0.333 0.333
Table 2.5 Transformation factors for a beam subjected to a uniformly distributed
load. From Johansson and Laine (2012a).
Uniformly distributed load on beam element
Elastic deformation curve
M	
	
0.504 0.406 0.483 0.257
F	
	
0.640 0.533 0.600 0.400
MF	
	
0.788 0.762 0.805 0.642
Plastic deformation curve
M	
	
0.333 0.333 0.333 0.333
F	
	
0.500 0.500 0.500 0.500
MF	
	
0.667 0.667 0.667 0.667

-- 60 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 41
Table 2.6 Transformation factors for a plate subjected to a uniformly distributed
load, based on Augustsson and Härenstam (2010).
Uniformly distributed load on slab element
w
a
w
a
Elastic deformation curve
M	
	
0.250
F	
	
4/2
MF	
	
0.617
Plastic deformation curve
M	
	
(1+a/w)/6 (1+a/w)/6
F	
	
(1+a/2w)/3 (1+a/2w)/3
MF	
	
(1+a/w)/(2+a/w) (1+a/w)/(2+a/w)

-- 61 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	42
3 Parametric beam study
3.1 Introduction
This section is a continuation of the researches presented in the previous
Master’s Theses, Andersson and Karlsson (2012) and Carlsson and Kristensson (2012),
where two different reinforced concrete beams, subjected to impulse loading, were
analysed. The analyses were based on the method presented in Johansson and
Laine (2012a) which allows for a simple and straight forward assessment of the
deformation of impulse loaded structures on the basis of the energy equilibrium
condition, see Section 2.7.5. In this method only the reinforcement at the bottom edge
of the beam is considered while the reinforcement at the top is disregarded. However,
in Carlsson and Kristensson (2012), it is pointed out that there might be some
incompatibilities for this routine when not considering the top reinforcement. In order
to get an idea of how much this simplification influences the results and to provide a
better understanding for the assumptions in this method, a parametric study of the
beams is carried out. The beam dimensions and the parameters that are assumed to
have the greatest influence on its response are varied. The results in form of internal
resistance, maximum plastic deflection and internal work are compared. The
importance of those parameters for the impulse loaded structures is discussed in
Section 2.7.7. The equations used in these calculations are stated in Appendix A. The
numerical results can be found in Andersson and Karlsson (2012) and Carlsson and
Kristensson (2012).
The other issue studied in this chapter concerns the methodology for calculation of
plastic rotation capacity recommended in Eurocode 2, which is presented in
Section 2.5.3. The fact that Eurocode 2 does not clearly specify how the effective
depth, d, and the width of the compression zone, x, should be considered, leads to
some uncertainty. Impulse loaded structures should be provided with reinforcement
bars at both edges as mentioned in Section 2.7.1. In case of a low reinforcement
amount, the neutral axis can be positioned above the top reinforcement layer which
then becomes in tension, see Figure 3.1. In such a case it is not obvious how the
effective depth should be calculated.
(a)
As
x
d
h
b
As
x
d= h/2
h
As’= As	
As’= As
(b)
b
Figure 3.1 Alternative assumption of effective depth used in this parametric beam
study. Neutral axis is located: (a) below top reinforcement layer;
(b) above top reinforcement layer.
Moreover, in Eurocode 2 it is not specified for what type of section the plastic rotation
capacity graph (Figure 2.25) has been established. For example, it is not clear if the

-- 62 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 43
section is provided with top reinforcement or not. Thus, for the conducted parametric
study of the beam a few alternatives, described in Section 3.2, have been controlled.
Moreover, according to Eurocode 2, the contribution to the moment capacity of the
compressive reinforcement can only be taken into account if stirrups with minimum
allowable spacing are provided, which is assumed in this parametric study.
In the Swedish code Betonghandboken, the method for calculating the plastic rotation
capacity is established for a section with reinforcement at both edges of the beam
while in BK 25 a section with only reinforcement at the bottom is considered. A
further description as well as comparisons and an evaluation of these methods are
presented in Johansson and Laine (2012a).
3.2 Different interpretations of x/d
Case 1	3.2.1
For a section where the neutral axis is located below the top reinforcement level, as
shown in Figure 3.2a, the effective depth d is taken as the distance from the centre of
gravity of the bottom reinforcement to the top edge of the beam. The height of the
compressive zone, x, is calculated with consideration to the top reinforcement, which
results in a smaller value of x compared to when neglecting the top reinforcement.
At the beginning of the analysis it is unknown how the top reinforcement will
contribute to the response of the beam, i.e. whether it will be in tension or in
compression. When the neutral axis is above the top reinforcement there are different
ways of interpreting d. For Case 1, d is calculated as shown in Figure 3.2 regardless of
whether the top reinforcement is in tension or not. In short, a constant value of d is
used independently on the position of the neutral axis.

-- 63 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	44
b
As
x
d h
As’
(a)
εs’
εs
b
As
x
d h
As’
εs’
εs
(b)
Figure 3.2 Assumption of effective depth for Case 1. Neutral axis is located:
(a) below top reinforcement layer; (b) above.
Case 2	3.2.2
Another alternative of calculating the effective depth d, for a case when the top
reinforcement is in tension, is established with regard to the reinforcement amount
and its distance from the top edge. If the reinforcement amount is the same at the top
and bottom of the beam, its centre of gravity will coincide with the centre of gravity
of the uncracked section, see Figure 3.3.
For Case 2, d is calculated with regard to the location of the neutral axis. If the top
reinforcement is still compressed, d is assumed to be as in Case 1 (see Figure 3.2a). If
not, d is established with regard to the reinforcement amount at both edges,
Figure 3.3.
εs
εs’
b
As
x
d=h/2
h
As’= As
Figure 3.3 Assumption of effective depth for Case 2 when the neutral axis is
located above the top reinforcement layer.

-- 64 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 45
Case 3	3.2.3
A third way of interpreting d when the top reinforcement is in tension is by
considering the magnitude of the force acting in the reinforcement as shown in
Figure 3.4. However, this case would result in a more complex definition of d and is
not investigated in this parametric study.
εs
εs’
b
As, σb
x
d=(σ’·c+σ·db)/(σ’+σ)
At, σt
As, σ
As’=As, σ’
c
db
Figure 3.4 Assumption of effective depth for Case 3 when the neutral axis is located
above the top reinforcement layer.
3.3 Geometry and properties of the beam
Introduction	3.3.1
The analysis carried out in this section is based on the dimensions which were used in
the previous Master’s Thesis Andersson and Karlsson (2012) and Carlsson and
Kristensson (2012). However, for these two beams the reinforcement amount, height
of the section and concrete cover differ. In this study the properties used by
Andersson and Karlsson (2012) for a 400 mm thick beam are applied to the 200 mm
thick beam used by Carlsson and Kristensson (2012) and vice versa. Additionally a
beam with a height of 300 mm is analysed.
All geometric data are presented in Figure 3.5. It is to be noticed that the parameter c
is the distance from the edge of the beam to the centre of the reinforcement. All
calculations are done for a width b of 1 m. The parameters varied are further
described in Section 3.3.2.

-- 65 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	46
q
L
h
b
As	c
h
b
As	c As’
l = 3.0 m
b = 1000 mm
c = 30 mm, 50 mm
h = 200 mm, 300 mm, 400 mm
d = h - c
As = As’ =  10 s 150,  20 s 200
fcd = 25 MPa
fyd = 500 MPa
Es = 200 GPa
Ec = 33 GPa
Figure 3.5 Dimensions and material properties used in the analysis.
The considered cross sections has been analysed for only one reinforcement layer and
for the same amount of reinforcement at both edges, which is recommended for
structures subjected to explosions explained in Section 2.7.1. According to
Eurocode 2, the contribution to the moment capacity of the compressive
reinforcement can only be taken into account if stirrups with minimum allowable
spacing are provided. In this study it is assumed that such stirrups are provided.
Parameters studied	3.3.2
In this parametric beam study three different cases are analysed according to
Table 3.1. Moreover, the effective depth d is defined according to Case 1 and Case 2
in Section 3.2.1 and Section 3.2.2, respectively. As an addition, the sectional height h
and reinforcement amount As is varied according to Table 3.2.
Table 3.1 Concrete cover and reinforcement for Case A, B and C.
Case Concrete cover, c
[mm]
Reinforcement
Case A 50 Top and bottom reinforcement.
Case B 50 No top reinforcement.
Case C 30 Top and bottom reinforcement.

-- 66 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 47
x
d
σ'
Case A
x
d
Case B
x
d
σ'
Case C
Figure 3.6 Three different sections analysed with the effective depth d according
to Case 1.
x
d = h/2
Case A, x c
σ'	x
d
σ'
Case A, x > c
x
d
Case B
x
d = h/2
Case C, x c
σ'	x
d
σ'
Case C, x > c
Figure 3.7 Three different sections analysed with the effective depth d according
to Case 2.
Table 3.2 Cross-sections used in the parametric beam study.
Height, h
[mm]
Reinforcement bar diameter, ϕ
[mm]
Spacing, s
[mm]
200 10 150
200 20 200
300 10 150
300 20 200
400 10 150
400 20 200
3.4 Results and comparisons
Orientation	3.4.1
In the first stage of the study, Section 3.4.2, the relation between internal resistance
and increasing deformation is compared for sections of Case A, Case B and Case C
with parameters according to Table 3.1.

-- 67 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	48
In the next part of the study, Section 3.4.3, Case A and B are in focus. For each
studied height, the dependency of the reinforcement amount of the internal work,
internal resistance and plastic deformation capacity is obtained and evaluated.
The last part of the research, Section 3.4.4, aims in assessing the magnitude of
difference when neglecting the top reinforcement. Thus, the internal work, internal
resistance and plastic deformation capacity is presented as a ratio of Case A to B.
In all these three sections, d is calculated according to Case 1 in Section 3.2.1. The
results obtained from changing the interpretation of d to Case 2, according to
Section 3.2.2, are shown in Section 3.4.5. A selected amount of the obtained graphs
are shown and discussed. The additional results from the parametric study can be
found in Appendix B.
The internal work, internal resistance, plastic deformation capacity and plastic
rotation capacity is plotted against the reinforcement amount, ρ, calculated according
to equation (3.1). It is important to keep in mind that the reinforcement amount is
always calculated with d according to Case 1, even for the graphs presenting Case 2.
d	b
As


		
(3.1)
Resistance versus deformation capacity for Case 1	3.4.2
Due to that the plastic rotation capacity has a large influence on the maximum
deflection, the position in the plastic rotation capacity graph from Eurocode 2 for
Case A, B and C is presented next to the internal resistance graph, see Figure 3.8 to
Figure 3.11. The resistance-deformation relation has been established only for the
elasto-plastic model as it reflects the behaviour of the beam in the most realistic way.
The results for how the resistance varies with the deformation for a height of 200 mm
and 400 mm are presented here. The graphs for a 300 mm beam and for Case 2 can be
found in Section B.2 and B.8, respectively.

-- 68 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 49
Figure 3.8 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
200 mm and reinforcement
10 s 150.
Figure 3.9 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
200 mm and reinforcement
 20 s 200.
0
25
50
75
100
125
150
0.00 	0.01 	0.02 	0.03 	0.04 	0.05 	0.06 	0.07
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_200_fi10
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2
0
50
100
150
200
250
300
350
0.00 	0.01 	0.02 	0.03 	0.04 	0.05 	0.06
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_200_fi20
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2

-- 69 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	50
Figure 3.10 Internal resistance, ultimate deflection and position in the plastic
rotation graph capacity (Eurocode 2) for a section with a height of
400 mm and reinforcement
 10 s 150.
Figure 3.11 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
400 mm and reinforcement
 20 s 200.
For the cases with low amount of reinforcement (Figure 3.8 and Figure 3.10) the top
reinforcement is yielding in Case A which will affect the resistance beneficially. It
follows that the resistance of the beam without top reinforcement (Case B) is up to
20 % lower than for Case A. For Case C, with a distance of 30 mm between the
reinforcement and concrete edge, the top reinforcement is not yielding and therefore
has a lower resistance in comparison to Case A, despite the increase in effective
0
50
100
150
200
250
300
0.000 	0.005 	0.010 	0.015 	0.020 	0.025 	0.030
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_400_fi10
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A
BC
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2
0
100
200
300
400
500
600
700
800
0.000 	0.005 	0.010 	0.015 	0.020 	0.025 	0.030 	0.035
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_400_fi20
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A	
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2

-- 70 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 51
depth. In the cases studied here the rotation capacity, and therefore the total deflection
capacity, is highest for Case A and lowest for Case B.
For sections with high amount of reinforcement (Figure 3.9 and Figure 3.11) it
appears that disregarding the top reinforcement only slightly decreases the internal
resistance. Introducing thinner concrete cover affects the resistance beneficially since
it increases the effective depth. If neglecting the top reinforcement when calculating
the deformation, errors can occur as the height of the neutral axis is influenced.
Therefore the size of the plastic rotation capacity is affected. Due to the shape of the
plastic rotation capacity curve from Eurocode 2, Figure 2.25, the deformation can be
both underestimated and overestimated.
For both the higher and lower reinforcement amounts investigated, the largest
difference in maximum resistance is for the thinnest section of 200 mm. The
simplification introduced by Johansson and Laine (2012a) gives lower values of
resistance which can be considered to be on the safe side, i.e. conservative. However,
due to the shape of the plastic rotation graph from Eurocode 2, Figure 2.25, it is more
complicated to predict if the maximum deformation will be over- or underestimated
and it is recommended to be careful with simplifications here.
For the cases studied, a small reinforcement amount assures a more ductile behaviour
of the section and larger deformation. However, this is not a general conclusion since
the difference depends on the position in the plastic rotation capacity graph,
Figure 2.25. Yielding of the top reinforcement, independently of the height of the
cross section, occurs for the investigated cases with c = 50 mm and lower amounts of
reinforcement. This assures a higher resistance as the strength of the steel is fully
utilized. Decreasing the concrete cover to 30 mm increases the effective depth and
also results in a higher resistance. However, it lowers the chances of the top
reinforcement yielding why it is not always beneficial.
Rotation capacity, internal work and resistance for Case 1	3.4.3
This part of the study considers only Case A and B. The behaviour of the two types of
sections is analysed for different reinforcement amounts and for heights of 200 mm,
300 mm and 400 mm. The response in form of plastic rotation capacity, internal work
and internal resistance is compiled and compared. A compilation of all the results can
be found in Section B.3, B.4 and B.5, respectively.
In order to visualize what a certain reinforcement amount implies, a short compilation
of different reinforcement dimensions and spacing is presented in Table 3.3. The
reinforcement amounts used in this rapport are underlined.

-- 71 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	52
Table 3.3 Values of reinforcement amount for different sectional heights,
reinforcement dimensions and spacing. The distance between the
reinforcement and the concrete edge, c, is 50 mm.
Height, h
[mm]
Reinforcement amount, ρ [%]
Spacing of 150 mm Spacing of 200 mm
Diameter of reinforcement bar, ϕ [mm]
10 12 16 20 25
200 0.35 0.50 0.89 1.40 2.18
300 0.21 0.30 0.54 0.84 1.31
400 0.15 0.22 0.38 0.60 0.93
The response of the section can clearly be followed by studying the changes in plastic
rotation capacity θpl when varying the reinforcement amount, Figure 3.12 and
Figure 3.13. The calculation of plastic rotation capacity is based on the
recommendations found in Eurocode 2 which is described in Section 2.5.3. It is worth
to mention that the graph of the plastic rotation capacity in Eurocode 2 (Figure 2.25)
does not provide exact values and the user has to approximate the values, which can
lead to different interpretations. The equations used in these calculations are stated in
Appendix A and the numerical results can be found in Andersson and Karlsson (2012)
and Carlsson and Kristensson (2012).
Figure 3.12 Plastic rotation capacity θpl vs. reinforcement amount ρ for a section
with a height of 200 mm (Case 1).
0.0
2.5
5.0
7.5
10.0
12.5
15.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic rotation
 θpl [10
-3 rad]
Reinforcement amount, ρ [%]
Theta-ro for d1 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 72 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 53
Figure 3.13 Plastic rotation capacity θpl vs. reinforcement amount ρ for a section
with a height of 400 mm (Case 1).
The maximum value of the plastic rotation capacity, which corresponds to
x/d = 0.159, can clearly be spotted as a sharp deviation in the graphs. There is a clear
connection between the graph of the maximum deformation and plastic rotation
capacity. Simultaneously with increasing the reinforcement amount, the concrete
compressive zone is increasing. At the point when the reinforcement amount is
increased so much that the yielding stops, when σ’ = fyd, a sharp change of inclination
in the graph can be noticed. Further increase in reinforcement amount leads to
progressive lowering of the neutral axis to the point when it reaches the centre of the
top reinforcement which at that specific point becomes compressed, when σ’ = 0. This
is a unique situation that corresponds to a case with no top reinforcement, and at this
point the graphs will overlap. Further increase in reinforcement amount leads to a
decrease in the rotation capacity which follows from the plastic rotation capacity
function established in Eurocode 2. When the reinforcement amount reaches a value
corresponding to the limiting ratio x/d no further development of plastic rotation
capacity can be established. That is clearly marked with the point at the end of
curve B where the ratio x/d = 0.45 and after this point there is no information given in
Eurocode 2.
Focusing on Case A in Figure 3.12, it can be noticed that for the lowest amount of
reinforcement, the top reinforcement is in tension due to that the neutral axis is
located above it, and it is yielding. The section with top reinforcement, Case A,
reaches the maximum plastic rotation value faster than section without top
reinforcement, Case B. The reason for this is that the height of the compressive
concrete zone is increased when the top reinforcement is introduced.
The internal energy capacity of a structure can be calculated as the area under the
resistance-deformation graph, according to equation (3.2). The internal energy is
therefore depending on both the internal resistance R and the total deformation u.
 du	u	R	Wi )	(	
(3.2)
0.0
2.5
5.0
7.5
10.0
12.5
15.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic rotation
 θpl [10
-3 rad]
Reinforcement amount, ρ [%]
Theta-ro for d1 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 73 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	54
For very high amounts of reinforcement, Case A shows a higher internal energy,
which is beneficial for impulse loaded structures, see Figure 3.14 and Figure 3.15.
However it should be noticed that the reinforcement amount, for the impulse loaded
structures, should not exceed a maximum recommended value. Different authorities
indicate different limits, depending on the proposed calculation methodology.
According to Fortifikationsverket (2011) the maximum amount of reinforcement
should be limited to 0.5 % while MSB (2009) considers 1.1 % to still be sufficient to
assure a ductile behaviour of the structure. Eurocode 2, on the other hand, does not
provide any information for x/d > 0.45.
Figure 3.14 Internal work vs. reinforcement amount ρ for a section with a height of
200 mm (Case 1).
Figure 3.15 Internal work vs. reinforcement amount ρ for a section with a height of
400 mm (Case 1).
0.0
2.5
5.0
7.5
10.0
12.5
15.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d1 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A
0
10
20
30
40
50
60
70
80
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d1 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 74 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 55
For Case B with a height of 400 mm the increase of the internal work starts to
stagnate after around 0.8 % amount of reinforcement, which can be noticed in
Figure 3.15. This happens due to that the maximum deformation decreases
(Figure 3.13) and the maximum resistance increases (Figure 3.17) simultaneously
creating a total internal work which is more or less constant with the reinforcement
amount.
Figure 3.16 Internal resistance vs. reinforcement amount ρ for a section with a
height of 200 mm (Case 1).
Figure 3.17 Internal resistance vs. reinforcement amount ρ for a section with a
height of 400 mm (Case 1).
For Case A with a height of 400 mm, the maximum resistance is increasing with
higher amount of reinforcement (Figure 3.17) and the maximum deformation is
0
100
200
300
400
500
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal resistance
 Rm [kN]
Reinforcement amount, ρ [%]
Rm-ro for d1 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A
0
500
1 000
1 500
2 000
2 500
3 000
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal resistance
 Rm [kN]
Reinforcement amount, ρ [%]
Rm-ro for d1 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 75 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	56
decreasing with a lower rate than for the case with top reinforcement (Figure 3.13),
resulting in higher values of the internal work (Figure 3.15). This is due to that the
height of the compression zone increases slower for the case with top reinforcement,
which makes the maximum deformation decrease slower.
Comparison of Case A and Case B	3.4.4
A comparison between Case A and B, which is plotted in Figure 3.18 to Figure 3.23,
is presented as a function of γ and varies with the reinforcement amount. The value of
γ has been established for the internal resistance (equation (3.3)), ultimate plastic
deformation (equation (3.4)) as well as internal work (equation (3.5)). For each of
those parameters, γ is a ratio of the case with top reinforcement (Case A) to the case
without top reinforcement (Case B). The effective depth is always calculated
according to Case 1.
B	m
A	m
R R
R
m
.
.

		
(3.3)
where Rm.A is the internal resistance for Case A and Rm.B is the internal resistance for
Case B.
B	rd
A	rd
u u
u
rd
.
.

		
(3.4)
where urd.A is the ultimate plastic rotation for Case A and urd.B is the ultimate plastic
rotation for Case B.
B	i
A	i
W W
W
.
.
1 
		
(3.5)
where Wi.A is the internal work for Case A and Wi.B is the internal work for Case B.
The parameters that change the inclination of the curves can be followed with varying
reinforcement amount in the different graphs. Therefore, for Case A, the
reinforcement amounts at which the top reinforcement stops to yield or becomes
compressed can be distinguished. For Case B, the points corresponding to the upper
and lower limits of the plastic rotation capacity can be found.
In Figure 3.18 and Figure 3.19 there is a sharp deviation of the resistance at the point
where the reinforcement stops to yield (when σ’ = fyd). In another point of the
curve (when σ’ = 0) the maximum resistance for both cases is equal. At that point the
neutral axis is positioned close to the top reinforcement, hence removing its positive
effect and making the case similar to a case without top reinforcement.

-- 76 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 57
Figure 3.18 Ratio of internal resistance, γRm, vs. reinforcement amount ρ. Section
with a height of 200 mm (Case 1).
Figure 3.19 Ratio of internal resistance, γRm, vs. reinforcement amount ρ. Section
with a height of 400 mm (Case 1).
0.9
1.0
1.1
1.2
1.3
1.4
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma R
m [-]
Reinforcement amount, ρ [%]
gamma rm d1 h=200



x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Rm
0.9
1.0
1.1
1.2
1.3
1.4
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma R
m [-]
Reinforcement amount, ρ [%]
gamma rm d1 h=400



x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Rm

-- 77 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	58
Figure 3.20 Ratio of ultimate plastic deformation, γurd, vs. reinforcement amount ρ.
Section with a height of 200 mm (Case 1).
Figure 3.21 Ratio of ultimate plastic deformation, γurd, vs. reinforcement amount ρ.
Section with height of 400 mm (Case 1).
Figure 3.22 and Figure 3.23 indicate that there is a large benefit when introducing the
top reinforcement in the calculations. The magnitude of the internal work can be
increased up to 60 % in the cases studied when introducing the top reinforcement.
This is evidently resulting from the larger difference in the ultimate plastic rotation
and internal resistance, comparing Figure 3.18 to Figure 3.21.
For an interval when γWi < 1 the internal work is higher for Case B than for Case A.
This is when the section without top reinforcement reaches its maximum plastic
rotation capacity at x/d = 0.159 and therefore reaches a higher maximum deformation
0.8
1.0
1.3
1.5
1.8
2.0
2.3
2.5
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma u
rd [-]
Reinforcement amount, ρ [%]
gamma urd d1 h=200

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
uRd
0.8
1.0
1.3
1.5
1.8
2.0
2.3
2.5
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma u
rd [-]
Reinforcement amount, ρ [%]
gamma urd d1 h=400

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
uRd

-- 78 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 59
than in Case A. When increasing the height of the section, the size of this interval
decreases.
Figure 3.22 Ratio of internal work, γWi, vs. reinforcement amount ρ. Section height is
200 mm (Case 1).
Figure 3.23 Ratio of internal work, γWi, vs. reinforcement amount ρ. Section height is
400 mm (Case 1).
Again, the top of the rotation capacity curve can be spotted as a sudden change in the
graph (Figure 3.22). For the 400 mm case, the point where the top reinforcement stops
yielding also results in a sudden change in the graph (Figure 3.23). At this point the
difference between the cases goes from increasing to decreasing.
0.8
1.0
1.2
1.4
1.6
1.8
2.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma wi d1 h=200

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Wi
0.8
1.0
1.2
1.4
1.6
1.8
2.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma wi d1 h=400

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Wi

-- 79 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	60
Different interpretation of d for Case 2	3.4.5
There are different ways of interpreting the rotation capacity curve in Eurocode 2 and
here Case 2, according to Section 3.2.2, is investigated. A compilation of all the
results can be found in Appendix A. It is important to notice that the amount of
reinforcement on the horizontal axis is still calculated with d from Case 1 in order to
be able to compare the graphs.
To understand the changes in the internal work it is preferred to analyse the
development of the maximum plastic deformation, see Figure 3.24. For Case A, the
sharp deviation at the interval 1.03 - 1.35 % can be noticed. This corresponds to the
state when the effective depth d is transferred from being the average distance from
the top of the beam to the centre of gravity of the top and bottom reinforcement, to
being the distance from the top to the bottom reinforcement only. The end of the first
part of the curve for Case A, marked with the round white point, corresponds to the
stage when the considered section, where x ≤ c, reaches the ratio x / d = 0.45, which is
the upper limit of the function established in Eurocode 2. Attaining this value for
Case B means no further development of plastic rotation. However, for Case A, which
is designed depending on the location of the neutral axis, reaching this point means a
continuation of plastic rotation development from the beginning but with a new
effective depth and with x > c . Thus, at the triangular point the curve A becomes
identical to the graph for Case 1.
Figure 3.24 Maximum plastic deformation vs. reinforcement amount for a section
with a height of 200 mm (Case 2).
Bearing this in mind, it is easy to analyse the changes in the internal energy, presented
in Figure 3.25. Here, after reaching the ultimate value of x/d in the first part of the
curve for Case A, the line does not drop to zero but continues, at a somewhat lower
level, with a certain inclination until it comes back on track again (at 1.35 %). This
interval corresponds to the elastic part of the elasto-plastic response model. Here, the
plastic rotation capacity is considered to be zero, hence only the elastic response is
left.
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.045
0.050
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Maximum plastic deformation
 urd [m]
Reinforcement amount, ρ [%]
Urd-ro for d2 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B

-- 80 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 61
Before the sharp deviation, at 1.03 %, the difference between the cases with and
without top reinforcement is larger than for Case 1. This is due to that d is smaller for
low amounts of reinforcement and therefore x/d becomes larger. The plastic rotation
capacity and maximum deformation reaches a higher value, increasing the internal
energy before the neutral axis passes below the top reinforcement.
The internal work relations are shown in Figure 3.25 and Figure 3.26, and the
corresponding ratios are shown in Figure 3.27 and Figure 3.28.
Figure 3.25 Internal work vs. reinforcement amount for a section with a height of
200 mm (Case 2).
Figure 3.26 Internal work vs. reinforcement amount for a section with a height of
400 mm (Case 2).
0.0
2.5
5.0
7.5
10.0
12.5
15.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d2 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
0
10
20
30
40
50
60
70
80
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d2 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B

-- 81 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	62
The largest difference in a jump in the graphs, when the transformation of d occurs, is
for the thinnest section. For this section, similarly as for Case 1, there is a significant
interval for which the internal work is larger for Case B, comparing Figure 3.25 and
Figure 3.26. The differences between Case A and B decreases with increasing height
of beam.
The development of internal resistance for considered height is the same as in Case 1
and the graphs are presented in Section B.11.
Figure 3.27 Ratio of internal work, γWi, vs. reinforcement amount ρ. Section height is
200 mm (Case 2).
Figure 3.28 Ratio of internal work, γWi, vs. reinforcement amount ρ. Section height is
400 mm (Case 2).
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
2.25
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma Wi d2 h=200

x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
Wi
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
2.25
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma Wi d2 h=400

x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
Wi

-- 82 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 63
3.5 Concluding remarks
When considering a statically loaded structure the maximum resistance is the critical
parameter and here it is always on the safe side to disregard the top reinforcement.
However, for an impulse loaded structure, the critical parameter is the internal work,
which makes it more complicated. In this study the answer should be given to if the
top reinforcement should be neglected or not, and how the effective depth d should be
considered. It is obvious that omitting the top reinforcement and calculating d
according to Case 1, presented in Section 3.2, is the simplest method for designing an
impulse loaded structure. In most cases it can be considered conservative to neglect
the top reinforcement. However, for a certain interval the internal energy will be
higher for a case without top reinforcement than for a case with top reinforcement due
to the plastic rotation capacity curve from Eurocode 2. Within these intervals the
conservative way would be to consider the top reinforcement. Some concern should
also be given to the yielding of the top reinforcement. If the ultimate strain of the top
reinforcement has not been reached, it would be correct to disregard it as it does not
influence the internal resistance in a significant way.
Since interpreting d according to Case 2 provides higher values of the internal energy
in certain intervals, from where the cases are identical, it can be considered
conservative to follow Case 1. For the thinnest section it seems reasonable to use the
effective depth defined as Case 2, up to the point when the top reinforcement stops to
yield. For the other studied heights it is rational to use d defined as Case 2 up to the
point when the top reinforcement becomes compressed. However such interpretation
of effective depth would make the calculation methodology, presented in Johansson
and Laine (2012a), more complicated to implement.
These are the reasons why it is not recommended to define d to depend on the position
of the neutral axis. Moreover, it is preferred not to introduce the top reinforcement in
the calculations in order to keep the calculations as simple as possible. The design
procedures for civil defence shelters define the minimum allowable height of the roof
and outer wall structure to be 350 mm (Swedish shelter regulations, MSB (2009)). In
such case, the differences in the considered concepts are much smaller than for a
structure with a height of 200 mm. There is also upper limit for the reinforcement
amount of 1.1 %. The difference in the results for the studied methods was largest for
the highest reinforcement amounts, which is not the standard solution for reinforced
concrete structures.
The studies in this report have been performed considering steel of Class B, on the
curve for concrete ≤ C50/60. If another curve had been considered, i.e. Class C, the
size as well as the relationships between the different cases of maximum deflection
would have been different. The curve chosen for the plastic rotation capacity has a
large influence on the maximum deformation and the internal energy. However, the
aim of the work has been to study the fundamental differences and therefore
reinforcement of Class B has been chosen as an example.
Finally, Betonghandboken presents a different method of receiving the plastic rotation
capacity where the equation for θpl considers the compressive reinforcement.
However, this contribution can only be taken into account if there are stirrups to
prevent the compressive reinforcement from breaking.

-- 83 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	64
4 Structural response of a 2D frame
4.1 Introduction and method
The aim of this study is to investigate and evaluate the reliability of the simplified
SDOF calculations for a frame structure subjected to impulse load. This is a
continuation of the researches conducted in the previous Master’s Theses, where a
simply supported beam and a slab were studied. The calculation methodology is based
on Johansson (2013). In this chapter a 2D analysis is performed. A 3D analysis of the
structure, where two different concepts of applying the load on the structure is
investigated, is found in Chapter 5.
The calculation methodology is based on the principles of the SDOF system, see
Section 2.9, adapted with regard to the properties of a frame. The SDOF system is
solved by the use of Matlab R2013a. The results from the SDOF model are compared
to the results obtained in FE analyses, conducted in ADINA (2011). It is assumed that
the response obtained in ADINA simulates, in the most appropriate way, the real
behaviour of the structure subjected to impulse load. The analyses are conducted for
both elastic and elasto-plastic models.
4.2 Geometry and properties of the studied frame
The analysed frame structure is presented in Figure 4.1. In this section a 2D-analysis
is performed, and the response of a 1.0 meter strip of the wall and roof section is
studied.
L
B
Wall 2
EI2, m2
Roof
EA3, m3
Wall 1
EI1, m1
1.0 m
P(t)
Figure 4.1 3D-illustration of the frame structure.
The reinforced concrete frame has dimensions according to Figure 4.2a. The walls
supporting the roof beam are fully fixed at the base and simply supported at the
connection with the roof beam. The dimensions of the considered cross section for the
wall as well for the roof beam are presented in Figure 4.2b and the material properties
in Table 4.1. Other parameters which are introduced in SDOF or in ADINA are
presented in the sections describing particular method. The studied 1.0 meter strip of
the front and back wall is, for simplicity, called for front and back column,
respectively.

-- 84 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 65
(a)
B = 15 m
L = 7 m
EI1, m1 EI2, m2
EA3, m3
(b) h = 0.2 m
b = 1.0 m
As = 6  10
Figure 4.2 (a) Dimensions of the studied frame. (b) Dimensions of the considered
cross section for the wall and for the roof beam.
Table 4.1 Material properties of the frame.
Part Ec
[GPa]
fcd
[MPa]
Es
[GPa]
fyd
[MPa]
Front column (1) 33 25 200 500
Back column (2) 33 25 200 500
Roof beam (3) 33 25 200 500
In order to simplify the SDOF analysis, the roof beam is assumed to be much stiffer
than the supporting columns. Moreover, it is connected to the columns with hinges.
Only the case when the impulse load, P(t), acts from the side on the front column is
considered, Figure 4.3. Thus, when the structure is subjected to the chosen impulse,
the roof beam is only displaced horizontally and remains undeformed, see
Figure 4.3.

-- 85 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	66
P(t)
u(t) u(t)
Figure 4.3 Deformed shape of the frame structure subjected to the impulse at a
certain time t.
When assuming the properties of the structural parts of the frame, reinforcement of
Class B is the preliminary choice. This is based on the regulations in Eurocode 2
which allows reinforcement of Class B to be used when an ability to deform
plastically and develop plastic hinges is required. In Section 4.7.1.4 a comparison of
the plastic rotation capacity of the front column provided with reinforcement of
Class B and Class C is done.
4.3 Reflected impulse load
The load is applied on the front column as a reflected impulse load, see Figure 4.4.
P(t)
Figure 4.4 Application of impulse load on the frame.
The shape and magnitude of the chosen impulse load, as well as its duration, is
assumed to be according to Figure 4.5 and Table 4.2. This load corresponds to about
500 kg TNT at 50 meters distance.

-- 86 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 67
t [s]
P [kPa]
Ppeak
tpeak t1
Figure 4.5 Properties of the chosen impulse load.
Table 4.2 Parameters for the chosen load.
Ppeak
[kPa]
tpeak
[s]
t1
[s]
60 0.00025 0.25
The first branch, in the pressure-time curve is assumed to be inclined. The time for
which the pressure reaches its maximum value, tpeak, is 1/100 of the duration of the
impulse t1. This assumption is made since ADINA does not manage to find the
solution for a case with a completely vertical branch, which can also be used to
symbolise the development of the impulse load.
4.4 Adaption of frame into SDOF system
4.4.1 Introduction
In order to describe the structural behaviour due to an impulse load, the studied frame
is analysed with regard to its local and global response. The concept of dividing the
SDOF system into a global and local model is based on Johansson (2013).
The analysis of the local response is made for the front column, as it is not only the
most exposed element but it is also provided with a relatively low mass compared
with the whole structure. Thus, the initial behaviour of the front column is critical for
the frame structure, which makes it important for the study.
In the global analysis the whole frame is considered as a structure. This means that
not only the front column withstands the impact but also the roof beam contributes
with its mass and the back column contributes with its mass and its stiffness.
A description of the central difference method as well as the calculations of the
response models used for the elastic and elasto-plastic cases are described in
Appendix D. The parameters used in the following sections can be found in
Section E.1.

-- 87 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	68
4.4.2 Local SDOF model
4.4.2.1 Orientation
In the local SDOF model only the response of the front column, with mass m1 and
stiffness EI1, is considered. The boundary conditions of the local model are presented
in Figure 4.6 where the top of the column is assumed to be restrained in the horizontal
direction. This assumption is based on the fact that at the beginning of the loading, the
horizontal displacement at the top of the frame is very small and can be disregarded,
Johansson (2013). Further theoretical explanations behind the structural behaviour of
the model can be found in Appendix C.
L/2
L/2
u2(t)
P(t) P(t)
L/2
L/2
u1(t)
αu1(t)
Figure 4.6 Local response model for the front column of the frame. The
deformation, u2, is measured in the middle of the column.
4.4.2.2 Elastic response
When using the elastic response model, Figure 4.7, in this study of the local
behaviour, the stiffness for state II, k1, is used. With the assumed boundary
conditions of the local model and moment of inertia for the cracked section III, the
stiffness in state II is calculated as
3	1
192
L
I	E
k II	c 	
	
(4.1)
where III is the moment of inertia calculated according to equation (E.4) and Ec can be
found in Table 4.1.
k1
R
u
Figure 4.7 Elastic response model.

-- 88 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 69
4.4.2.3 Elasto-plastic response
The elasto-plastic response of the local front column follows a trilinear model as
shown in Figure 4.8. This phenomenon is due to the fact that the structure has the
ability to develop two plastic hinges, one at the fixed support and one in the span.
Rmf
Rms
k1
R
u
k2
Figure 4.8 Trilinear, elasto-plastic model.
The inclination of the first branch in the elasto-plastic response model is obtained
according to equation (4.1) and corresponds to the stiffness in state II for a structure
with one fixed edge and one simply supported. The first point of deviation in
Figure 4.8 describes that the ultimate resistance at the fixed support, Rms, is reached.
Rms is calculated as
L
M
R rd
ms

 8
(4.2)
where Mrd is the moment capacity of the section calculated according to
equation (E.12).
Reaching the point Rms is followed by a significant decrease in stiffness due to a
change in boundary conditions. When the maximum capacity of the fixed support is
reached, the plastic hinge starts to develop, Figure 4.9b. Due to the plastic hinge the
restraint at the fixed support does not prevent rotation any longer and the structure
changes boundary conditions from fully restrained at one support and simply
supported at the opposite one, to simply supported at both edges, as shown in
Figure 4.9c.
Now, the stiffnessis changed to k2 considering the new simply supported boundary
conditions, and calculated as
3	2 5
384
L
I	E
k II	c

	
	
(4.3)
where III is calculated according to equation (E.4) and Ec can be found in Table 4.1.
The ultimate capacity of the column is reached when the maximum resistance at the
critical section in the span, Rmf, is developed according to equation (4.4). Rmf is the
ultimate resistance of the section when a plastic hinge is developed in the field as
illustrated in Figure 4.9d.

-- 89 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	70
where Mrd is calculated according to equation (E.12).
(a) (b)
q q
q	q
(d)	(c)
Figure 4.9 (a) Boundary conditions of the studied structure. (b) Formation of
plastic hinge when the maximum capacity is reached at the fixed
support. (c) Transformation of boundary condition from fixed to simply
supported. (d) Formation of plastic hinge in span. The plastic hinges
are marked with black points.
To simplify the calculations, a bilinear elasto-plastic response model can be
considered, as shown in Figure 4.10. The results obtained, by employing this
response model in the SDOF system shows to be significantly different comparing
to the results obtained in the FE analysis. This problem is further described in
Section 4.7.1.
k1
u
R
Rmf
Figure 4.10 Bilinear, elasto-plastic model introduced in the study of the local
response.
L
M
R rd
mf

 12
(4.4)

-- 90 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 71
4.4.2.4 SDOF system
For the local response, when transforming it into an SDOF system, the system point
is chosen to be located in the mid span of the front column, see Figure 4.11a. The
resistance of this section is used in the structural response model. However, it is
worth to mention that this position of the system point does not match the point
where the maximum moment and thus maximum deformation is obtained,
Figure 4.11b.
0.5 L 0.5 L
(a)
~0.575 L ~0.425 L
(b)
~0.575 L ~0.425 L
Ms= Mrd
Mf= Mrd
Figure 4.11 (a) Assumed deformation and location of system point for the SDOF
system. (b) Deformation and location of the plastic hinges as well as
moment distribution in ultimate limit state.
The equation of motion with the appropriate transformation factors for the local
response is
)	t	(	P	)	u	(	R	u	m 	F	K	m	

	
	 				1	
(4.5)
When dividing equation (4.5) by κF and introducing κk = κF according to Section 2.9 as
well as introducing κmF as
F
m
mF


 	
(4.6)
the equation of motion for this local SDOF system can now be written as
)	t	(	P	)	u	(	R	u	m	mF 			1	
	
(4.7)
The input data for the equation of motion for the elastic, bilinear elasto-plastic and
triliear elasto-plastic structural response is presented in Table 4.3, Table 4.4 and
Table 4.5, respectively. The calculations of these parameters can be found in
Section E.1 and the resistance R(u) in Section D.3.
Table 4.3 Mass, stiffness and transformation factors used for the elastic model.
Part κmF
[-]
m
[kg]
I = III
[10-4 m4]
k1
[kN/m]
Front column (1) 0.805 3 360 0.54 1 007.6

-- 91 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	72
Table 4.4 Mass, stiffness and transformation factors used for the elasto-plastic
bilinear model.
Part κmF
[-]
m
[kg]
III
[10-4 m4]
k1
[kN/m]
Mrd
[kNm]
Rmf
[kN]
Front column (1) 0.607 3 360 0.54 1 007.6 37.8 64.9
Table 4.5 Mass, stiffness and transformation factors used for the elasto-plastic
trilinear model.
Part κmF
[-]
m
[kg]
III
[10-4 m4]
k1
[kN/m]
k2
[kN/m]
Mrd
[kNm]
Rms
[kN]
Rmf
[kN]
Front
column
(1)
0.607 3 360 0.54 1 007.6 403.0 37.8 43.3 64.9
4.4.3 Global SDOF model
4.4.3.1 Orientation
The global response is simulated according to the model in Figure 4.12a, and it is
described by the response of a cantilever. The stiffness of this cantilever, EI, as well
as its mass, m, is a combination of both the front and back column. The contribution
from the roof beam to the model is its concentrated mass, m3, at the top of the
cantilever. All together, the global response is the sum of the response of the front
column directly exposed to an impulse load and the back column loaded with the
force transferred by the roof beam, Figure 4.12b.
L
EI1 + EI2
m1+ m2
m3
P(t)
(b)	(a)
L
P(t)
L
Front column Back column
EI1
m1
EI2
m2
u1(t) u1(t)	u1(t)
Figure 4.12 (a) Assumed model for the simulation of the global response and its
deformation u1. (b) This model is the sum of the response of the front
and back column, according to Johansson (2013).

-- 92 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 73
4.4.3.2 Elastic response
When the elastic response model is considered, the stiffness for the front column,
k1,fr, and back column, k1,ba, is described according to equation (4.8) and
equation (4.9), respectively and corresponds to the stiffness in state II.
where III is the moment of inertia of the cracked section calculated according to
equation (E.4) and Ec can be found in Table 4.1.
4.4.3.3 Elasto-plastic response
In this Master’s Thesis an attempt has been made to implement the SDOF system for
a frame simulated with an elasto-plastic model, but the response of the studied
structure has been proven to be more complicated than expected.
The static structural response model of the elasto-plastic global model has in the
FE analysis shown a trilinear behaviour due to the two plastic hinges that can be
developed at the fixed support and at the back. However, when this static structural
response model is used in the SDOF calculations for the considered load, the response
is still elastic, while the FE analysis shows some plastic deformations. The results,
investigations and discussion of this behaviour can be found in Section 0
For simplicity, the elastic structural response model is used for the elasto-plastic
global model since they show the same response for the considered load.
4.4.3.4 SDOF system
When transforming the structure into a SDOF system it should be noticed that the
deformation u is the same for the front column, roof beam as well as for the back
column, see Figure 4.13. The system point for which the deformation is calculated
by using a SDOF system is located at the free edge for both columns and in the
centre of the concentrated mass for the roof beam.
3
8
L
I	E
k II	c
1,fr
	
	
(4.8)
3
3
L
I	E
k II	c
1,ba
	
	
(4.9)

-- 93 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	74
P(t)
Front column Roof beam Back column
m1
k1,fr
m2
k1,ba
m3
u1(t) u1(t) u1(t)
Figure 4.13 Position of the system point which is represented by the grey point.
Deformation in the system point is the same for all members in the frame
structure.
In the global analysis, each member of the frame contributes, in a certain degree, to
the total response of the structure. Thus, the equation of motion can be described as
the sum of the contributions from each part of the frame adapted by using the
appropriate transformation factors. The equation of motion for the global model can
be expressed as
))	(	(	)	(	)	( t	P	u	k	u	m
n
i	i
F
n
i	i
i	k
n
i	i
i	m 		 		
	
	
	
	 	
(4.10)
where n is the number of the members in the structure.
When the model and the assumptions for the SDOF system are made, the
transformations factors can be introduced. The transformations factors, together
with the input data for the mass and stiffness used in the SDOF calculations for the
elastic response are presented in Table 4.6. The calculations of these parameters can
be found in Section E.1. The transformation factor for the mass of the roof beam is
1.000, but the transformation factors for the stiffnes and force are put to zero since
the roof beam is connected with hinges to the columns and does not restrain the
movement of the frame in any way.
Table 4.6 Mass, stiffness and transformation factors used for the elastic model.
Part κm
[-]
m
[kg]
κk = κF
[-]
I = III
[10-4 m4]
k1
[kN/m]
Front column (1) 0.257 3 360 0.400 0.54 41.9
Back column (2) 0.236 3 360 1.000 0.54 15.7
Roof beam (3) 1.000 7 200 0 0.54 0

-- 94 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 75
4.4.4 Combination of the global and local SDOF model
So far, the calculation method for the resulting deformation has been introduced
separately for the local, initial, response and for the global response. For the local
response the system point is located in the mid span of the front column and the
deformation at the top of the column is neglected. For the global response, the system
point is placed at the top of the column, where the biggest deformation is obtained. In
order to obtain the actual deformation in the middle of the front column, a
combination of the two models is made in this point.
For statically loaded structures, the magnitude of deformation in each point of the
structure can be calculated. Recalling from the elementary case, the deformation at the
free edge of a cantilever, u1, shown in Figure 4.14, is described as
EI
qL
u 8
=
4
1	
(4.11)
The deformation αu1 at the distance a from the fixed edge is described as
)
L
a
L
a
(
EI
L	qa
u 2
2	2	2
1
4
6
24
= 	
		
(4.12)
When the distance a is equal to L/2, the deformation can be further expressed as
EI
qL
u 384
17
=
4
1	
	
(4.13)
By a comparison of the deformations at the free edge and in the middle of the coumn,
the factor α, describing the relation of those two deformations is received as
48
17
=	
	
(4.14)
u1
αu1
L/2
a=L/2
q
Figure 4.14 The deformation in the middle of the column is a factor α times the
deformation at the free edge.
The deformation in the middle of the column in the frame structure, u2.tot (t), can be
described as the sum of the local deformation u2 (t) and the deformation, for the same
point, in the global model, αu1(t). This concept is presented in the Figure 4.15 and can
be expressed as

-- 95 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	76
)	t	(	u	)	t	(	u	)	t	(	u tot	. 1	2	2	
			
(4.15)
L/2
L/2
u2(t)
P(t) P(t)
L/2
L/2
u1(t)
αu1(t)
Figure 4.15 The total deformation in the middle of the front column for the frame
can be approximated as the sum of the deformation of the local response
and the global response in that point.
4.5 Modelling in ADINA
The FEM-analyses are conducted in the program ADINA (2011). When choosing the
methods of modelling in this program, the recommendations from previous Master’s
Theses are followed. This subject is not studied in depth in this Master’s Thesis, as the
main focus is to adapt the SDOF system to the response of the frame structure. The
input files for the elasto-plastic frame model is presented in Section H.1.
When performing the dynamic analyses, two methods with two integration schemes
are available. One is implicit, where Newmarks’s constant-average-acceleration
method with δ=0.5 and α=0.25, is used. The other method is an explicit method,
which is a special case of Newmark’s method for which δ=0.5 and α=0. The solution
for this method is stable and delivers reliable results only when a sufficiently small
time step is provided. This means that the chosen time step should not be larger than a
certain critical time step, according to Bathe (1996). One example, for which this
method is used, is the central difference method, explained in Appendix D. This
method is beneficial to use for the central difference method as the explosion pressure
increases almost instantaneously, within a very short time span, which provides very
short time steps. Moreover the central difference method works well when the lumped
mass is introduced (Bathe (1996)), which fits the principles of the SDOF system
method. Carlsson and Kristensson (2012) have proved that the dynamic analysis
which employs the implicit method provides results in agreement with the results
obtained from the hand calculations. The explicit method, on the other hand, delivers
a solution which differs in both magnitude and frequency. These are the reasons
which govern the implicit method in the FE analysis and explicit method in the SDOF
system.
For both models, local and global, 2D beam elements with three integration points
along the height of the cross section are used, Figure 4.16.

-- 96 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 77
fyd
fyd
Figure 4.16. Stress distribution in ADINA for three integration points according to
Augustsson and Härenstam (2010).
In order to simulate different behaviour of reinforced concrete and assure more
comprehensive understanding of such a complex material, two material models are
studied in ADINA. The first model is an elastic isotropic material model, which
simulates the response before the yielding strength of the material is reached. The
second model is an elasto-plastic bilinear material model.
The input parameters for the elastic and elasto-plastic material model is equivalent to
Young’s modulus, EII, which is calculated as
GPa	70	2	33
10	64	0
10	54	0
4
4
.
.
.
E
I
I
E I
a.I
II
II 	


	 

(4.16)
where III is the moment of inertia for the cracked section presented in Table 4.3 and
II.a is the moment of inertia for the uncracked section calculated according to
Section E.1. EI is Young’s modulus in the state I which can be found in Table 4.1.
Moreover, for the elasto-plastic material model a yield limit must be introduced. In
case of 2D beam elements with three integration points, where the stress varies
linearly across the section, the fictional yield stress is calculated according to
Figure 4.16 as
MPa	68	5
6	2	0	0	1
10	8	37 2
3
.
/	)	.	.	(
.
W
M
f
el
rd
yd 	


		
(4.17)
where Mrd is the moment capacity of the section found in Table 4.4 and calculated
according in Section E.1 and Wel is elastic section modulus.
When discussing the elasto-plastic material model, it is worth to mention that ADINA
has difficulty to find a solution for the same time step size as used for the elastic
material model. Thus, for the elasto-plastic analysis it is reasonable to increase the
number of time steps.
Modelling with elasto-plastic material makes the analysis more complicated and
demanding. However, by implementing this model, the results, in good agreement
with the real behaviour of concrete structures, are obtained.
For the local response, the beam with restrains according to Figure 4.6 is modelled.
The number of elements is chosen as 30. For the global analysis a model of the frame
structure where all members are divided into 30 elements is used. For the frame

-- 97 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	78
model, the connections between the columns and the roof beams are modelled as rigid
links. Rigid links provide a restraint between the master node (node at the top of the
column) and slave node (node at the edge of the roof beam). When the structure is
subjected to loading, the nodes are displaced. The slave node translates so that its
distance to the master node is constant. The rotation of the slave node is the same as
the rotation of the master node, according to ADINA manual. In general, the
introduction of rigid links, where only translations are allowed, provided a connection
that corresponds to the restrains for a simply supported element.
4.6 Results of the elastic model
4.6.1 Local elastic model
The local elastic front column with corresponding material model is shown in
Figure 4.17. The results obtained from the SDOF calculations, hand calculations and
the analysis in ADINA agrees well which can be seen in Figure 4.18. Thus it can be
stated that the methodology proposed in Johansson (2013) for the local elastic
response is reliable. The hand calculations can be found in Section E.2.
u2(t)
P(t)
(b)	(a)
ε
σ
Figure 4.17 Illustration of: (a) the local SDOF and FE model as well as the
deformation u2(t); (b) the elastic material response model.

-- 98 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 79
Figure 4.18 The deformations obtained in the local analysis of the frame subjected to
an impulse load of 60 kPa and 0.025 s. Both the material and the
structural response are elastic.
It can be noticed that the SDOF system provides a smooth curve which is not fully the
case for the curve from the FE analysis. The reason for the unevenness in the FE
analysis is the fact that ADINA considers several bending modes. The SDOF system,
on the other hand, only uses the first bending mode, see Section 2.9.1.
The hand calculations, which can be found in Section E.2, give a very close
estimation of the maximum deformations obtained in the SDOF and FE calculations.
This implies that the load can be seen as a characteristic impulse load for this
structure. The γI-value is equal to 1.0, meaning that the hand calculations do not need
to be modified.
4.6.2 Global elastic model
The global SDOF model and the elastic material response model are shown in
Figure 4.19. The elastic deformations of the global model obtained with the SDOF
model, the FE analysis and the hand calculations can be seen in Figure 4.20. The hand
calculations can be found in Section E.2.
-0.125
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
SDOF - u
FE - u
Hand - u
2
2
2
u2
ε
σ

-- 99 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	80
(a) (c)
ε
σ
P(t)
u1(t)
P(t)
u1(t)
(b)
Figure 4.19 An illustration of: (a) the global SDOF model and the deformation
u1(t); (b) the global FE model and the deformation u1(t); (c) the elastic
material response model.
Figure 4.20 The deformations obtained in the global analysis of the frame subjected
to an impulse load of 60 kPa and 0.025 s. Both the material and the
structural response models are elastic.
The magnitude of the deformations agrees well for the FE model, the SDOF model
and the hand calculations. Since the hand calculation agrees well, the load can be seen
as a characteristic impulse load for this structure. It can be noticed that the SDOF
solution shows a slightly higher frequency than the FE analysis. The unevenness in
the FE analysis is due to that ADINA considers several bending modes while the
SDOF model considers only first one.
4.6.3 Combination of the local and global elastic model
When comparing the local and global elastic models, Figure 4.21, some differences
can be found. The frequency for the local model is about ten times larger than for the
global model. This means that for each sway of the whole frame, the front column
manages to sway ten times. This is a consequence of the higher mass and lower
-0.150
-0.125
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Deformation,
 u [m]
Time, t [s]
SDOF - u
FE - u
Hand - u
1
1
1
ε
σ
u1

-- 100 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 81
stiffness of the global model. In Section E.2.1 the calculations of the frequency for
both cases can be found.
Figure 4.21 The local and global deformations obtained from the SDOF models
when the frame is subjected to an impulse load of 60 kPa and 0.025 s.
Both the material and the structural response models are elastic.
The local model aims to simulate the response in the initial stage of the loading when
the displacement of the top of the column is relatively small, which can be seen in
Figure 4.21. Thus, the support at the top of the local model can be seen as simply
supported and the simplification of the local model should be realistic.
The response in the middle of the front column when combining the global and local
SDOF model is presented in Figure 4.22. The combination of the SDOF models is
carried out according to Section 4.4.4. The corresponding deformation obtained in the
FE analysis is shown in Figure 4.23.
-0.150
-0.125
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Deformation,
 u [m]
Time, t [s]
SDOF - u
SDOF - u
1
2
u2
u1

-- 101 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	82
Figure 4.22 A combination of the local and global deformations due to an impulse
load of 60 kPa and duration of 0.025 s. Both the material and the
structural response models are elastic.
Figure 4.23 The deformations, u2, obtained in the FE analysis for the considered
impulse load of 60 kPa and duration of 0.025 s. Both the material and
the structural response models are elastic.
When comparing the results obtained by implementing these two methods,
Figure 4.24, the magnitude of the deformation as well as the frequency seems to agree
quite well. The SDOF model provides results on the safe side and the combined
SDOF method presented in Section 4.4.4 seems to give an approximate estimation of
the behaviour in the middle of the front column. However, a significant difference in
deformation magnitude is obvious at certain intervals. The difference can for example
-0.150
-0.125
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Deformation,
 u [m]
Time, t [s]
SDOF - usum
u2
u1
αu1
usum
ε
σ
-0.150
-0.125
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.0 	1.0 	2.0 	3.0 	4.0 	5.0 	6.0 	7.0 	8.0 	9.0 	10.0
Deformation,
 u [m]
Time, t [s]
FE - u 2
ε
σ
u2

-- 102 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 83
easily be spotted between 2 and 5 seconds where the FE model shows a decrease in
magnitude while the SDOF model does not. It seems that the FE structure possesses
some damping which decreases the magnitude of the deformation at certain intervals.
This phenomenon is not investigated further in this Master’s Thesis since it is
assumed not to be critical for the structure.
Figure 4.24 The deformations obtained from the SDOF system and FE modelling in
the global analysis for the middle of the front column. Both the material
response and structural response are elastic.
4.7 Results of the elasto-plastic model
4.7.1 Local elasto-plastic model
4.7.1.1 Response of the structure
The elasto-plastic model, shown in Figure 4.25, proved to be more complicated than
the elastic model. The development of the deformation over time for the impulse
loaded front column obtained in the FE analysis and SDOF system is presented in
Figure 4.26. The hand calculations can be performed in different ways and are further
described in Section 4.7.1.2.
-0.150
-0.125
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Deformation,
 u [m]
Time, t [s]
SDOF - u
FE - u
sum
2
u2
u1
αu1
usum
u2
u2
u1
αu1
usum
u2

-- 103 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	84
u2(t)
P(t)
(a) (b)
ε
σ
fyd
Figure 4.25 Illustration of (a) the local SDOF model and the deformation u2(t), and
(b) the elasto-plastic material response model.
Figure 4.26 The deformations obtained in the local analysis of the frame subjected to
an impulse load of 60 kPa and 0.025 s. Both the material and the
structural response are elasto-plastic.
The studied front column shows elastic response at the beginning of the loading. After
the yield strength has been reached the deformation becomes plastic until the structure
starts to sway back again. The following oscillations are elastic but since the column
has gained some plastic deformation, the structure will oscillate elastically at a higher
position in the graph.
The overall shape of the deformation curve is the same in the FE analysis as in the
SDOF calculations. However, some differences in magnitude of deformation and
frequency are obvious. The reason for the differences may lie in the choice of
transformation factors in the SDOF model. For both the plastic and elastic part of the
SDOF response model, plastic transformation factors have been used. A solution to
this problem could be to vary the transformation factors in time with transformation
factors obtained from the FE analysis, proposed by Andersson and Karlsson (2012).
This has however not been evaluated in this Master’sThesis.
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
SDOF - u
FE - u
2
2
u2
ε
σ

-- 104 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 85
The most evident difference comparing the response of the studied front column to the
response of a simply supported beam is the higher magnitude of deformation at the
first peak.
This study has shown that the structural and material response models do not always
have the same shape. To use the same shape is correct for studies of simply supported
beams where both the structural and material models are bilinear. However, for the
studied column, with one fixed edge and one simply supported, the material model is
bilinear while the structural response model has been proven to be trilinear. This is
due to the fact that the local front column can develop two plastic hinges, one at the
fixed support and one in the span.
A compilation of the material response models and the structural response models for
the two types of beams are presented in Table 4.7. In order to understand the theory of
plasticity and plastic hinges, the reader is referred to Section 2.5.
Table 4.7 A summary of the material response models and structural response
models for a simply supported beam and a beam with one edge fully
fixed and the other simply supported.
Support
conditions
q	q
Material
response
model
ε
σ
fyd
ε
σ
fyd
Structural
response
model
u
R
Rmf
R
u
Rms
Rmf
The structural response model of the front column subjected to the considered impulse
load is presented in Figure 4.27. The development of resistance over time is illustrated
in Figure 4.28 where the stiffness and plastic hinges are described in Table 4.8. The
resistance follows the arrows until the end of the line where they start to oscillate
elastically. The response model used for the SDOF model is programmed in Matlab
according to Appendix D with the corresponding response model described in

-- 105 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	86
Section D.3.4. The concept of impulse loaded structures with a trilinear response
model is described in Section C.3.
Figure 4.27 Structural response of the local frame model subjected to an impulse
load of 60 kPa and 0.025 s in the SDOF analysis. Both the material and
the structural response are elasto-plastic.
R
u
k1
k2
Rms
Rmf
k1
Rms
k2
k1
Figure 4.28 Illustration of the response of the local frame model. The arrows
indicate the development of resistance and deformation, R(u), over time.
When the end of the line is reached the deformation starts to oscillate
elastically.
-50
-30
-10
10
30
50
70
-0.02 	0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14
Resistance,
 R [kN]
Deformation, u [m]
R
ε
σ
 local

-- 106 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 87
Table 4.8 Description of the notations in Figure 4.28.
Notation Description
k1
Stiffness of the local front column with one fixed edge and one simply
supported.
Rms Plastic hinge formed at fixed support. Stiffens of beam is changed to k2.
k2 Stiffness for a simply supported beam.
Rmf Plastic hinge formed in the span. Ultimate resistance is reached.
The studied front column is a statically indeterminate structure since it develops two
plastic hinges in ultimate limit state. Each change of inclination in the structural
response curve corresponds to reaching the maximum resistance at a certain critical
section, as described in Section 4.4.2.3. The first change of stiffness simulates
developing maximum capacity at the fixed support. For the studied structure this
happens at a value of 43.3 kN. The second hinge occurs in the span and ultimate
resistance for the whole structure is reached at 65 kN, see Figure 4.27.
After both the fixed support and the span have yielded, the deformation increases
further while the resistance is constant. An increase in deformation after reaching the
maximum resistance is possible since the structure has a certain plastic rotation
capacity. When the structure starts to sway back, before reaching the ultimate plastic
deformation, the structure has a stiffness corresponding to k1. After a certain point,
yielding at the fixed support occurs in the opposite direction and the stiffness changes
to k2. At the point where the structure switches direction of swinging again, at a
resistance of -38 kN, the structure begins to oscillate back and forth, following this
line with a stiffness of k1.
4.7.1.2 Hand calculations
Due to the trilinear response model of the local front column, there are different ways
of performing the hand calculations. The main concept of estimating the deformations
are described in Section A.2.
The elasto-plastic estimation of the deformation uep can be calculated according to
equation (4.18).
m
k	m
pl	ep	el	ep	ep mR
I
k
R
u	u	u 2	2
2
,	, 				
(4.18)
where Ik is the characteristic impulse load, m and k is the mass and stiffness and Rm is
the resistance.
However, this equation is created for a bilinear case and therefore the stiffness has to
be estimated for the trilinear case. Two extreme cases are created according to
Figure 4.29 where the stiffness is taken as the stiffness for a beam with one fixed edge

-- 107 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	88
and one simply supported k1, as well as the stiffness, k3. The stiffness that would give
the correct results should lie in between these values.
R
u
k1
k2
R
u
k1
R
u
k3
(a) (b) (c)
Figure 4.29 (a) Stiffness of the elasto-plastic local front column. (b) Simplified
bilinear case with stiffness k1 (continuous line). (c) Simplified bilinear
case with stiffness k3 (continuous line).
The non-modified values of the hand calculations together with the SDOF
calculations and FE analysis in are shown in Figure 4.30. The hand calculations can
be found in Section E.3.1. Since the true value should lie in between the lines it can be
seen that the estimation correspond well with the SDOF calculations and is on the safe
side of the FE analyses.
Figure 4.30 The deformations obtained in the local analysis, in the middle of the
column, for the elasto-plastic case.
4.7.1.3 Comparison of bilinear and trilinear response models
The true structural behaviour of the studied front column follows a trilinear response
model. However, since a trilinear response model is more complicated than a bilinear,
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
SDOF - u
FE - u
Hand k - u
Hand k - u
2
2
2
u2
2	3
1
ε
σ

-- 108 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 89
a comparison is done in order to investigate the differences in the obtained
deformation. All calculations in this comparison are carried out in Matlab R2013a and
the SDOF models and response models are created according to Section E.3.
The bilinear model is created with a stiffness identical to the stiffness before any
plastic hinge is formed, k1. The ultimate resistance is the same as for the trilinear
model, Rmf. The conceptual deformations and corresponding response models for the
bilinear and trilinear case can be seen in Figure 4.31.
u
t
(a) (b)
Rmf
Rms
R
u
k1
k2
Figure 4.31 (a) Deformation for trilinear (continous line) and bilinear (dashed line)
response. (b) Trilinear and bilinear (dashed line) response models.
In order to further understand the behaviour of the two models, Figure 4.32 and
Figure 4.33 shows the considered response models and resulting development of
deformations in time for the two cases. The numbered points in the resistance-
deformation curve corresponds to the same numbers in the deformation graph and the
areas W1, W2, W3 and W4 refer to the work done when reaching the corresponding
points. The areas W1 and W2 as well as W3 and W4 are equal, meaning that the internal
work of the two pairs equalise each other.

-- 109 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	90
(a) (b)
t
u
u
W1
W2
R
W1 = W2
1 1
2 2
2
1
Figure 4.32 (a) Deformation in time; (b) Structural response for a bilinear response
model. The numbered points on the resistance-deformation curve
corresponds to the same numbers in the deformation graph.
(a)
t
u
(b)
W1
W2
W3
W4
R W1 = W2
W3 = W4
t 	u
3 	3
2 	2
1
3
1
1
2
Figure 4.33 (a) Deformation in time; (b) Structural response for a trilinear response
model. The numbered points on the resistance-deformation curve
corresponds to the same numbers in the deformation graph.
The biggest difference between assuming a bilinear response model instead of a
trilinear one is that the trilinear model results in a higher maximum deformation
followed by elastic sways with a lower magnitude than the first one, see Figure 4.33a.
In order to investigate how the deformation-time curve changes depending on the
magnitude of the impulse load, and therefore the position in the resistance-
deformation curve, a study is carried out for three different impulse loads shown in

-- 110 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 91
Table 4.9. The position reached in the resistance-deformation curve for each load is
marked with a black point in Figure 4.34.
Table 4.9 Loads investigated in order to compare bilinear and trilinear response
models.
Magnitude, P
[kPa]
Duration, t1
[s]
20 0.025
40 0.025
60 0.025
Rmf
Rms
R
u
urd
Load 20 kPa
Load 40 kPa Load 60 kPa
Figure 4.34 The maximum deformation in the resistance-deformation curve for the
three different impulse magnitudes.
The resulting deformation for the three loads as well as the resistance-deformation
curves obtained in the SDOF system, when employing the trilinear model are
presented in Figure 4.35 and Figure 4.36, respectively. It can be noticed that the first
deformation peak is higher than the following only for the two largest loads. The
reason for this is explained in the following paragraphs.

-- 111 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	92
Figure 4.35 The deformations obtained for the three loads when the response model
is trilinear.
Figure 4.36 The resistance-deformation curves for the three loads when the response
model is trilinear.
When the local column is subjected to an impulse load with a magnitude of 20 kPa
and duration of 0.025 s, the deformations are completely elastic. In this stage the
inclination of the first branch in the trilinear model coincides with the bilinear model,
meaning that the stiffness, magnitude of deformation and frequency is equal for these
two cases. This is illustrated in Figure 4.37 where the work is the same for both
models and the area under the resistance curve for the trilinear model, Wt, coincides
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
20 kPa
40 kPa
60 kPa
u2
ε
σ
-50
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
-0.05 	-0.03 	-0.01 	0.01 	0.03 	0.05 	0.07 	0.09 	0.11 	0.13 	0.15
Resistance,
 R [kN]
Deformation, u [m]
20 kPa
40 kPa
60 kPa
ε
σ

-- 112 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 93
with the area for the bilinear model, Wb. Also, the deformation in the bilinear model
ub is equal to deformation in the trilinear model ut.
Rmf
Rms
R
u
urd	ub = ut
Wb = Wt
Figure 4.37 A comparison of a bilinear and trilinear response model for an impulse
load with a magnitude of 20 kPa and duration of 0.025 s.
Thus, the shape of deformation in time and the resistance-deformation curve is the
same for both models, see Figure 4.38 and Figure 4.39.
Figure 4.38 Comparison of deformation obtained by employing a trilinear and
bilinear model for an impulse load of 20 kPa and duration of 0.025 s.
-0.04
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.03
0.04
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
u - bilinear
u - trilinear
2
u2
ε
σ
2

-- 113 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	94
Figure 4.39 Comparison of resistance-deformation curves obtained by employing a
trilinear and bilinear model for an impulse load of 20 kPa and duration
of 0.025 s.
When the column is subjected to an impulse load of with a magnitude of 40 kPa and
duration of 0.025 s, the resistance and deformation in the trilinear model reaches the
second branch, i.e. the fixed support has yielded. At this stage the trilinear model
differs from the bilinear. The work done by the structure and the area under resistance
curve for the two models must be the same, Wt = Wb, given that the load is a
characteristic impulse load. As a result of the different shapes of the resistance curves,
the deformation for the trilinear model, ut, is higher than for the bilinear model ub, see
Figure 4.40. This means that the deformation will be underestimated when employing
the bilinear model. The stiffness at the maximum deformations is different for the two
models, following that also the frequency is expected to differ.
Rmf
Rms
R
u
urd	ub
Wb = Wt
ut
ub < ut
Figure 4.40 A comparison of the bilinear and trilinear response model for an
impulse load with a magnitude of 40 kPa and duration of 0.025 s.
For an impulse load of 40 kPa, the resistance of the structure in the bilinear model has
reached its ultimate value, Rmf, which can be seen in Figure 4.42. As the structure has
-45
-35
-25
-15
-5
5
15
25
35
45
-0.04 	-0.03 	-0.02 	-0.01 	0.00 	0.01 	0.02 	0.03 	0.04
Resistance,
 R [kN]
Deformation, u [m]
R
R
ε
σ
bilinear
trilinear

-- 114 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 95
started to develop some plastic deformations, the resulting deformations oscillate at a
higher position than its initial position, which can be seen in Figure 4.41. However,
the structure simulated with a trilinear model has not reached its ultimate resistance,
even though the fixed support has yielded and reached its resistance Rms. The first
deformation peak is higher for the trilinear model than for the bilinear in Figure 4.41,
which agrees with the difference in deformations in Figure 4.40. However, the
following elastic deformations are much smaller than the value reached in the first
peak due to the shape of the response model.
Figure 4.41 Comparison of deformations obtained by employing a trilinear and a
bilinear model for an impulse load of 40 kPa and duration of 0.025 s.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
u - bilinear
u - trilinear
2
u2
ε
σ
2

-- 115 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	96
Figure 4.42 Comparison of resistance-deformation curves obtained by employing a
trilinear and bilinear response model for an impulse load of 40 kPa and
duration of 0.025 s.
For an impulse load of 60 kPa and duration of 0.025 s, the structure simulated with
bilinear and trilinear models reaches their ultimate resistance, Rmf, see Figure 4.43.
Similarly as for the impulse load of 40 kPa, the deformation obtained when using the
bilinear model is underestimated.
Rmf
Rms
R
u
urd	ub
Wb = Wt
ut
ub < ut
Figure 4.43 Comparison of a trilinear and bilinear response model for an impulse
load of 60 kPa and duration of 0.025 s.
A comparison of deformations in time as well as the resistance–deformation curves
for the two response models is presented in Figure 4.44 and Figure 4.45, respectively.
-75
-60
-45
-30
-15
0
15
30
45
60
75
-0.06 	-0.04 	-0.02 	0.00 	0.02 	0.04 	0.06 	0.08
Resistance,
 R [kN]
Deformation, u [m]
R
R
ε
σ
bilinear
trilinear

-- 116 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 97
Figure 4.44 Comparison of deformation obtained by employing a trilinear and a
bilinear response model for an impulse load of 60 kPa and duration of
0.025 s.
Figure 4.45 Comparison of resistance-deformation curves obtained by employing
trilinear and bilinear response model for an impulse load of 60 kPa and
duration of 0.025 s.
The fact that the magnitude of deformation is underestimated in the first sway when
employing the bilinear model may be critical for the structure. If the deformation in
the first sway exceeds the value of the ultimate plastic deformation, urd, the structure
collapses. The bilinear model provides lower values of resulting deformation, ub, due
to the shape of the resistance-deformation curve which does not fully agree with the
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
u - bilinear
u - trilinear
2
u2
ε
σ
2
-75
-60
-45
-30
-15
0
15
30
45
60
75
-0.02 	0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14
Resistance,
 R [kN]
Deformation, u [m]
R
R
ε
σ
bilinear
trilinear

-- 117 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	98
deformation delivered by the more accurate, trilinear model, ut. This difference is
especially important for a structure provided with a low value of ultimate plastic
deformation, see Figure 4.46. For the illustrated impulse load, the bilinear model
indicates that the structure resists the load, while the trilinear model will lead to
collapse. The difference between the area under the bilinear and trilinear response
model is for this case relatively large compared to the total area of the work done by
the structure.
Rmf
Rms
R
u
urd	ub
Wb = Wt
ut
ub < urd < ut
Area resulting from the difference between the
shapes of the bilinear and trilinear response model
Figure 4.46 A comparison between the trilinear and bilinear model for a structure
with a low value of plastic deformation capacity, urd. For the considered
load, the trilinear model exceeds the critical value, urd, while the
bilinear does not.
For the studied local, elasto-plastic front column the difference in obtained
deformation between the trilinear and bilinear model is relatively small. Therefore the
bilinear model can be considered to give an acceptable approximation of the
deformation for the studied case. The concept of deformation capacity is further
discussed in Section 4.7.1.4.
If the ultimate plastic deformation, urd, is large compared to the elastic deformation,
uep.el, a large part of the internal energy, Wi, will be within the plastic part of the
deformation, uep.pl. For this case, the bilinear model will give a satisfying
approximation of the deformation.
A real structure provides a certain amount of natural damping, thus the true
deformation will be a bit lower than the calculated. When the purpose of the
calculations is to perform a capacity check, the simplified bilinear model can be
assumed, as it is simple and easy to implement. However, in order to deliver more
comprehensive understanding of the response of this statically indeterminate structure
it is essential to implement the trilinear response model.
4.7.1.4 Plastic deformation capacities
The trilinear structural response model of the local front column complicates the
estimation of the plastic deformation capacity, urd. The plastic rotation at the fixed
support begins to develop when the moment at this support, Ms, reaches the value
that the section was designed for, Mrd.s. This is shown as stage 1 in Figure 4.47a,
with corresponding plastic deformation capacity, urd.s, in Figure 4.47b. When the
load is further increased, the span reaches its maximum moment capacity, Mrd.f. This
is presented as stage 2 in Figure 4.47a. At this point the plastic rotation in the span

-- 118 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 99
starts and the corresponding plastic deformation capacity is termed as urd.f in
Figure 4.47b. When the fixed support has reached its limit, urd.s, failure occurs in the
plastic hinge. This is showed as a sudden vertical jump in Figure 4.47b. After this,
the boundary conditions and therefore the resistance of the structure correspond to a
simply supported beam.
Ms= Mrd.s
Mf < Mrd.f
1
2
(a)
Ms= Mrd.s
Mf= Mrd.f
(b)
M
u
1
2
utot
urd.s
urd.f
Figure 4.47 (a)Moment distribution for stage 1 and stage 2. (b) Moment-deformation
curve with plastic deformation capacities. The dashed line corresponds
to the response of a simply supported beam.
In this study, a simplification has been made when estimating the plastic rotation
capacity. The plastic deformation capacity for the structure has been assumed to
correspond to urds which provides results on the safe side. If a bilinear model is used,
urds should also be used, starting from when the fixed support yields, illustrated in
Figure 4.48.
R
u
urd.s
Rmf
Rms
Figure 4.48 For a bilinear model, urd.s should be used, starting from when the fixed
support yields.
The plastic deformation capacity urd.s is calculated from the plastic rotation capacity
with regard to shear slenderness, θrd, according to Eurocode 2 where

-- 119 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	100
pl	rd k	

	  		
(4.19)
The distance between the considered maximum moment section and the adjacent
zero moment section is called L0 in the calculation of the shear slenderness λ in
equation (4.20). In order to further calculate the factor kλ, equation (4.21), L0 is
taken as L1 according to Figure 4.49.
d
L0

		
(4.20)
L1
Ms = Mrd
Mf = Mrd
L2 L2
Figure 4.49 Possible choices of the distance between the considered maximum
moment section and the adjacent zero moment section.
A check of the plastic deformation capacity was performed for the chosen load of
60 kPa and 0.025 s. The results are presented in Table 4.10 and the calulations can be
found in Section E.3. The check showed that the front column did not possess the
required plastic deformation capacity for either reinforcement of Class B or Class C.
However, it can be noticed that the plastic deformation capacity was almost twice as
large when reinforcement Class C was used compared to Class B.
Table 4.10 Comparison of plastic rotation capacity and maximum deformation
obtained from an impulse load of 60 kPa and 0.025 s.
Reinforcement urds
[m]
umax
[m]
Class B 0.066 0.13
Class C 0.115 0.13
4.7.1.5 Plastic strain
In order to better understand the local elasto-plastic response of the frame the
development of plastic strain is investigated. Plastic hinges can be formed at the fixed
support and in the mid span, point A and B in Figure 4.50, respectively.
3

 	k	
(4.21)

-- 120 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 101
B B
A
A A
A
Figure 4.50 Critical sections marked with black points in the local elasto-plastic
model.
The plastic strain in point A and the deformation for the local model, u2, are plotted
together in Figure 4.51. It can be noticed that there is only one main peak for the
plastic strain in the interval 0 - 0.3 s. The peak is followed by an almost straight line,
with insignificant changes in plastic strain. When the plastic strain is constant with
time, it means that the response is elastic. An initiation of plastic strain means that a
plastic hinge has been reached in point A. When the plastic strain is increasing the
structure is swinging in the positive direction, and when it is decreasing it is swinging
in the opposite direction. The deformation in the interval 0 – 0.3 s corresponds well
with the changes in plastic strain.
Figure 4.51 A comparison of deformation, u2, in the local model to the plastic strain,
εpl, in point A.
0
5
10
15
20
25
30
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic strain,
 εpl 	[10
-3]
Deformation,
 u [m]
Time, t [s]
FE - u
ε
σ
 2
εpl - A
u2
A

-- 121 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	102
4.7.2 Global elasto-plastic model
4.7.2.1 Response of the structure
The SDOF and FE model of the global elasto-plastic frame with corresponding
material model is shown in Figure 4.52.
(a) (c)
P(t)
u1(t)
P(t)
u1(t)
(b)
ε
σ
fyd
Figure 4.52 An illustration of: (a) the global SDOF model and the deformation
u1(t); (b) the global FE model and the deformation u1(t) and (c) the
elasto-plastic material response model.
The deformations, u1, obtained for the global elasto-plastic model from the FE
analysis and the SDOF model are presented in Figure 4.53.
Figure 4.53 The deformations obtained in the global analysis, at the top of column in
the frame subjected to impulse load for the elasto-plastic case.
It can be noticed that the FE model experiences some plastic deformation since the
centre of the oscillations is above the zero axis. The value of the maximum
deformation also seems to decrease with time, which can be noticed especially for the
positive deformations. This phenomenon is in disagreement with the SDOF response
which is completely elastic.
-0.15
-0.10
-0.05
0.00
0.05
0.10
0.15
0.20
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Deformation,
 u [m]
Time, t [s]
SDOF - u
FE - u1
ε
σ
1
u1

-- 122 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 103
The static FE analysis resulted in the resistance curve shown in Figure 4.54. However,
the dynamic FE analysis showed that for the maximum deformation obtained in the
FE analysis the response is expected to be elastic since the first plastic hinge
according to the expected resistance-deformation curve, R(u), is not reached. An
illustration of the expected resistance is shown in Figure 4.55. Nevertheless, the
dynamic analysis showed that the deformation possesses some plastic parts.
Figure 4.54 The resistance-deformation curve obtained in the static analysis of the
frame.
Rm2
Rm1
R
u
urd
Load 60 kPa
Figure 4.55 The maximum deformation reached, shown in the resistance-
deformation curve for an impulse load of 60 kPa and 0.025 s. The first
plastic hinge is not reached.
Since the FE analysis of the global frame shows some plastic behaviour, it seems that
the static structural response model is not enough to describe the true behaviour of the
global frame in a SDOF system. In order to better understand the behaviour of the
global frame, the deformations at the top of the frame, u1, and in the middle of the
front column, u2, are studied together in Figure 4.56. It can be noticed that a decrease
in magnitude of u1 occurs after the oscillations in u2 have been magnified, i.e. before
the intervals where some damping of the oscillations for u2 has occurred. The
0.0
2.5
5.0
7.5
10.0
12.5
15.0
17.5
20.0
22.5
25.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35
Resistance,
 R [kN]
Deformation, u [m]
Total
Front column
Back column
ε
σ

-- 123 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	104
behaviour is studied more closely, in relation to other parameters, in the following
sections.
Figure 4.56 A comparison of the deformations u1 and u2.
4.7.2.2 Stress and plastic strain
In order to better understand the global response of the frame the development of
plastic strain and stresses for the critical sections are further investigated. The critical
sections are those that gain the largest plastic strain and where plastic hinges are
formed. Thus, the sections at the supports and in the mid span of the first column are
compared and analysed, see Figure 4.57. Plastic hinges can be developed in tension
and compression.
B
C	A
A C
B
Figure 4.57 Critical sections marked with black points in the global elasto-plastic
model.
A change in plastic strain means that a plastic hinge has been reached. When the
plastic strain is increasing, a plastic hinge is reached in tension, and when it is
decreasing it is reached in compression. When the plastic strain is constant with time,
the response is elastic.
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0 	2 	4 	6 	8 	10 	12 	14 	16 	18 	20
Deformation,
 u [m]
Time, t [s]
FE - u
FE - u
1
2
ε
σ
u1
u2

-- 124 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 105
The plastic strain for the three critical sections A, B and C in Figure 4.57 are plotted
together in Figure 4.58. The plastic strain at the back column, point C, is very small
compared to the plastic strain in the front column, point A. The plastic strain in the
mid span, point B, is only changing in magnitude at the very first time interval. This
shows that point B is mostly relevant for the initial stage in the frame analysis, i.e. the
local model. The main focus in this analysis is on the plastic strain at the fixed support
of the front column, since it is expected to have the main influence on the behaviour
of the global frame structure.
Figure 4.58 Plastic strain obtained in point A, B and C in the global FE analysis.
In Figure 4.59 the deformation from the FE analysis at the top of the front column, u1,
and in the middle of the front column, u2, are plotted together with the plastic strain in
point A.
-0.010
-0.005
0.000
0.005
0.010
0.015
0.020
0.025
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Plastic strain,
 εpl 	[-]
Time, t [s]
Point A
Point B
Point C
ε
σ
A 	C
B

-- 125 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	106
Figure 4.59 A comparison of deformations u1 and u2 to the plastic strain in point A
for a time interval of 10 seconds.
Studying Figure 4.59 it can be noticed that there are some sudden changes in plastic
strain around 0 to 1 seconds and 5 to 6 seconds. When analysing this time interval it is
obvious that these changes coincide with the maximum deformations in the middle of
the front column, u2. The intervals are magnified in Figure 4.60 and Figure 4.61.
When u2 reaches a maximum or minimum peak, the plastic strain increases or
decreases simultaneously.
Figure 4.60 A comparison of the deformations u1 and u2 to the plastic strain in
point A for a time interval of 0 to 2 seconds.
0
5
10
15
20
25
30
-0.10
-0.05
0.00
0.05
0.10
0.15
0.20
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Plastic strain,
 εpl 	[10
-3]
Deformation,
 u [m]
Time, t [s]
FE - u
FE - u
ε
σ
1
2
εpl - A
u1
u2
A
0
5
10
15
20
25
-0.05
0.00
0.05
0.10
0.15
0.20
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic strain,
 εpl 	[10
-3]
Deformation,
 u [m]
Time, t [s]
FE - u
FE - u
ε
σ
1
2
εpl - A
u1
u2
A

-- 126 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 107
Figure 4.61 A comparison of deformations u1 and u2 to the plastic strain in point A
for the time interval of 5 to 7 s.
In order to get a better understanding of the deformed shape of the frame at different
points in time a comparison is made between the graphs, see Figure 4.62. The
deformed shapes of the frame are shown in Table 4.11. Two of the most extreme
shapes, which occur at point 1 and 7, seem to coincide with changes in plastic strain.
Figure 4.62 A comparison of the deformations u1 and u2 to the plastic strain in
point A for a time interval of 10 seconds. The points are described in
Table 4.11.
0
5
10
15
20
25
-0.10
-0.05
0.00
0.05
0.10
0.15
5.0 	5.2 	5.4 	5.6 	5.8 	6.0 	6.2 	6.4 	6.6 	6.8 	7.0
Plastic strain,
 εpl 	[10
-3]
Deformation,
 u [m]
Time, t [s]
FE - u
FE - u
ε
σ
1
2
εpl - A
u1
u2
A
-0.10
-0.05
0.00
0.05
0.10
0.15
0.20
0.0 	1.0 	2.0 	3.0 	4.0 	5.0 	6.0 	7.0 	8.0 	9.0 	10.0
Deformation,
 u [m]
Time, t [s]
FE - u
FE - u
1
2
ε
σ
u1
u2
A
εpl - A
1
2
3
4
5
6
7

-- 127 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	108
Table 4.11 The deformed shape of the global frame at the first three deformations
peaks for u2 and at the stage when u1 is equal to u2.
Point Time
[s]
Deformation
[m]
Deformed shape Description
1 0.109 u1 = 0.013
u2 = 0.117
u2 >> u1
First maximum peak of
u2.
Plastic hinge at point A
and point B is formed.
2 0.273 u1 = 0.062
u2 = 0.022
u2 < u1
First minimum peak of
u2.
Plastic hinge at point A is
formed, in opposite
direction.
3 0.436 u1 = 0.091
u2 = 0.120
u2 > u1
Second maximum peak
of u2.
Plastic hinge formed
again at point A.
4 1.075 u1 = 0.162
u2 = 0.137
u2 < u1
Maximum deformation
of u2 and of u1 occurring
at the same time.
5 2.361 u1 = -0.051
u2 = 0.052
u2 > u1
Deformation peaks in
opposite directions for u2
and u1.
No plastic hinge is
formed.
6 4.412 u1 = 0.159
u2 = 0.127
u2 < u1
Deformation peaks in the
same direction for both
u2 and of u1.
7 5.695 u1 = -0.038
u2 = 0.073
u2 > u1
Deformation peaks in
opposite directions for u2
and u1. Case is more
extreme than point 5.
Plastic hinge is formed at
point A.

-- 128 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 109
To further investigate the behaviour of the global frame model the stress and plastic
strain at the fixed support as well as the deformation at the top of the frame are
evaluated together. The stress versus strain at the fixed support of the front column is
plotted in Figure 4.63. The colours in the figure correspond to the same period in time
as the plastic strain plotted in Figure 4.64 and as in the deformations shown in
Figure 4.65 and Figure 4.66.
Figure 4.63 Stress-strain relationship at the fixed support for the front column.
Figure 4.64 Plastic strain development over time at the fixed support for the front
column.
-6
-4
-2
0
2
4
6
0.000 	0.005 	0.010 	0.015 	0.020 	0.025 	0.030
Stress,
 σ [MPa]
Plastic strain, εpl [-]
ε
σ
Point A
A
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic strain,
 εpl [-]
Time, t [s]
ε
σ
Point A
A
ε
σ
Point A
A

-- 129 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	110
Figure 4.65 Deformation u2 over time for the global elasto-plastic model.
Figure 4.66 Deformation u1 over time for the global elasto-plastic model.
A further explanation of the phenomena at every colour can be found in Table 4.12.
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
ε
σ
u2
FE - u2
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
ε
σ
FE - u1
u1

-- 130 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 111
Table 4.12 Description of the phenomena at different points in time.
Colour Phenomenon Plastic strain,
εpl
Stress,
σ
Deformation,
u2
Red Elastic
behaviour.
Elastic behaviour,
no plastic strain
occurs.
Increases. Increases.
Green
Plastic hinge
has been formed
at the fixed
support.
Plastic strain
increases.
Maximum stress
has been reached.
Stress is constant.
Increases.
Blue
Elastic
behaviour.
Maximum
deformation has
been reached.
Plastic strain is
constant. Starts to decrease.
Starts to
decrease, i.e.
swinging back.
Orange
Plastic hinge
has been formed
at the fixed
support, frame
is swinging in
the opposite
direction.
Plastic strain
decreases.
The stress has
reached its
ultimate value in
its opposite
direction and is
constant.
Decreases.
Pink
Elastic
behaviour.
Deformation
has reached its
minimum value
and its first
negative peak.
Plastic strain is
constant.
Stress is
increasing.
Starting to
increase again.
Grey
A plastic hinge
has been formed
at the fixed
support again.
Plastic strain
increases.
Maximum value
reached. Stress is
constant.
Increasing.
Black
Mainly elastic
behaviour.
Small changes
in plastic strain
and stress when
maximum stress
is reached.
Constant.
Increases and
decreases
elastically.
Starts to
decrease.
Sways back
and forth
elastically.
Purple Unevenness due to higher modes.

-- 131 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	112
The plastic strain studied so far increases and decreases when plastic hinges are
formed in the different directions. This means that when the structure is swinging in
the positive direction, the plastic strain increases and when it is swingning in the
negative direction the plastic strain decreases. Until now, it has been assumed that the
plastic hinges are formed when the maximum stress is reached without any
consideration of the history of the steel. It can be questioned if the reinforcement
changes properties after the plastic hinges have been formed in both directions several
times. Therefore, the accumulated plastic strain, εpl.acc, is described in equation (4.20)
and plotted in Figure 4.67 in order to get an understanding of the total strain the
section has been exposed to. This is however not further investigated in this report.
	 pl	acc	pl	

	 .	
(4.22)
Figure 4.67 Accumulated plastic strain, εpl.acc, for point A in the global elasto-plastic
model.
4.7.2.3 Moment and damping
In order to investigate the structural behaviour of the frame even further, the moment
at the fixed support is investigated in relation to the plastic strain. In Figure 4.68 it can
be noticed that the plastic strain changes when MA > Mrd, i.e. when the maximum
capacity for the considered section has been reached. In reality, the moment will reach
Mrd but never exceed it. Here, the fact that the values are larger than Mrd is due to the
size of the elements used in ADINA.
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.045
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Accumulated plastic strain,
 εpl.acc
 	[-]
Time, t [s]
Point A
ε
σ
A

-- 132 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 113
Figure 4.68 A comparison of the moment and plastic strain at the fixed support of
the front column.
In reality, a structure subjected to an impulse load experiences a certain degree of
natural damping. A reinforced concrete structure with considerable cracking normally
has a damping of about 3 - 5 %. In order to get further information about damping, the
reader is directed to Carlsson and Kristensson (2012).
Figure 4.69 and Figure 4.70 shows the moment when a modal damping of 1 % and
5 %, respectively, is implemented. For both cases it can be noticed that the moment is
decreased with time and is lower than Mrd after the first second. Figure 4.71 illustrates
the plastic strain for different percentage of damping together.
The moment within the first second still exceeds the ultimate moment resistance, even
if a damping of 5 % is implemented. This shows that in reality, where a certain degree
of damping will exist, the critical moments seem to occur only at the very beginning.
However, this needs to be investigated further in order to not make any premature
conclusions.
0.0
2.5
5.0
7.5
10.0
12.5
15.0
17.5
20.0
22.5
25.0
-50
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
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Plastic strain,
 εpl 	[10
-3]
Moment,
 M 	[kNm]
Time, t [s]
M
M
ε
σ
A
M
A
rd
εpl - A

-- 133 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	114
Figure 4.69 Moment at the fixed support of the front column for a modal damping of
1 %.
Figure 4.70 Moment at the fixed support of the front column for a modal damping of
5 %.
-45
-35
-25
-15
-5
5
15
25
35
45
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Moment,
 M 	[kNm]
Time, t [s]
M
M
ε
σ
A
M
A
rd
-45
-35
-25
-15
-5
5
15
25
35
45
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Moment,
 M 	[kNm]
Time, t [s]
M
M
ε
σ
A
M
A
rd

-- 134 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 115
Figure 4.71 Plastic strain at the fixed support of the front column for a modal
damping of 0, 1 and 5 %. The change in plastic strain at 5.5 seconds is
absent when damping is applied.
4.7.3 Combination of the local and global elasto-plastic model
The local and global elasto-plastic SDOF models are plotted together in Figure 4.72.
The frequency for the local model is, similarly as for the elastic model, much larger
than for the global model.
Figure 4.72 The local and global deformations obtained from the SDOF model when
the frame is subjected to an impulse load of 60 kPa and 0.025 s for the
elsto-plastic case.
0.000
0.005
0.010
0.015
0.020
0.025
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Plastic strain,
 εpl 	[-]
Time, t [s]
0%
1 %
5%
ε
σ
A
-0.150
-0.125
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Deformation,
 u [m]
Time, t [s]
SDOF - u
SDOF - u
1
2
u2
u1

-- 135 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	116
The response in the middle of the front column when combining the global and local
SDOF model is presented in Figure 4.73. The combination of the SDOF models is
carried out according to Section 4.4.4. The deformations obtained in the FE analysis
are shown in Figure 4.74.
Figure 4.73 A combination of the local and global deformations due to an impulse
load of 60 kPa and duration of 0.025 s for the elasto-plastic case.
Figure 4.74 The deformations, u2, obtained in the FE analysis for the considered
impulse load of 60 kPa and duration of 0.025 s for the elasto-plastic
case.
When comparing the results obtained by implementing these two methods,
Figure 4.75, the magnitude of the deformations differs between the two cases. The
frequency, however, seems to agree quite well. The small difference in frequency is
due to the transformation factors used.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Deformation,
 u [m]
Time, t [s]
SDOF - usum
u2
u1
αu1
usum
ε
σ
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Deformation,
 u [m]
Time, t [s]
FE - u 2
u1
u2
ε
σ
u2
ε
σ
u2
u1
αu1
usum
u2
u2
ε
σ

-- 136 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 117
The SDOF model shows a larger magnitude in the deformations than the FE model.
On the other hand, the FE model has gained a larger plastic deformation why the
SDOF calculations do not provide results on the safe side. As can be seen in the
elastic model in Section 4.6.3, a significant difference in deformation magnitude is
obvious at certain intervals.
Figure 4.75 The deformations obtained from the SDOF system and FE modelling in
the global analysis for the middle of the front column. Both the material
response and structural response are elasto-plastic.
Since the global elasto-plastic SDOF model is still not completely corresponding to
the FE analysis, this combination of the local and global elasto-plastic case will also
differ. The combined SDOF model gives a rough estimation of the behaviour of the
frame, but should not be trusted completely.
4.8 Concluding remarks
This study of the structural response of a 2D frame has brought some interesting
results. For starters, the elastic local and global SDOF models agree well with the FE
analysis. Thus, it can be stated that the methodology proposed in Johansson (2013) for
the local and global elastic response is reliable.
The local model is proposed to primarily represent the initial stage after the loading
has occurred. Since the global model has a frequency about ten times smaller than the
local model, it has not had any significant deformations at the time when the local
model reaches its first peak. This means that at the initial stage, the top of the local
column can be approximated to be simply supported by the frame, why the local
model should be appropriate at the initial stage.
The local and global elastic models give a behaviour that corresponds well with the
FE analysis when combined. However, the FE analysis shows a decrease in
deformation magnitude at certain intervals, a behaviour that has not been examined
further since it is not considered to be critical.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Deformation,
 u [m]
Time, t [s]
SDOF - u
FE - u
sum
2
u2
u1
αu1
usum
u2
sum
2
u2
u1
αu1
usum
u2
u2
u1
αu1
usum
u2

-- 137 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	118
The elasto-plastic case is more complicated than the elastic. The structural response
model of the local frame model proved to be trilinear, even though the material model
is bilinear. This is due to the fact that it can develop two plastic hinges, one at the
fixed support and one in the span. The trilinear response model will, when the load is
large enough, result in a higher first deformation peak.
Since a trilinear response model is more complicated than a bilinear model, a
comparison between the two cases was made. It showed that the obtained deformation
is roughly the same for the two models, and a bilinear response model can be used for
estimations of the deformation. However, since the bilinear model provides results on
the unsafe side it is recommended to use the trilinear model when the obtained
deformation from the bilinear model is close to reaching the deformation capacity. For
cases with a low plastic deformation capacity, it is also suggested to be more careful
when choosing the response model.
The global elasto-plastic model was also proven to have a trilinear response model.
However, this static response model did not fully represent the behaviour of the global
frame since it showed some plastic deformations even though the response model did
not indicate this. This response seems to be connected to the relationship between the
local and global deformations and the corresponding shapes. However, the response
of the elasto-plastic global model is not completely understood. Due to this fact, the
combination of the local and global model does not correspond as well with the
FE analysis as the elastic combination did.

-- 138 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 119
5 Structural response of a 3D frame
5.1 Introduction and method
This chapter studies the structural response of a front column in a 3D frame structure
subjected to a load applied on both the column itself and on the surrounding wall. The
aim of the study is to evaluate the difference between when the total load is applied
directly on the column, and when it is delayed in form of dynamic reaction from the
adjacent wall. The effect of the dynamic reaction is expected to be less destructive
than the direct application of the load as the magnitude of the reaction is much lower
and its duration is prolonged in time. An evaluation of the simplifications used for
applying the impulse load in the frame analysis, proposed in Johansson (2013), is also
performed.
A SDOF model, similar to the local model in the 2D frame study in Chapter 4, is
created to simulate the response of the front column. Both elastic and elasto-plastic
response models are introduced. The SDOF system is solved by the use of the
software Matlab R2013a and the results are compared to the response obtained in FE
analyses conducted in ADINA (2011).
5.2 Geometry and properties
The structure analysed in this study is presented in Figure 5.1. The roof beam with
supporting columns stabilizes the walls and the roof. The columns are fully fixed to
the ground. The wall is supported only on the columns and transfers the load only in
the horizontal direction. The front column is considered to carry the load to the
ground and through the roof beam to the back column while the wall only transfers
the load to the column. The analysed section of the structure is marked in Figure 5.2.
Front wall
EIw1, mw1 L
B
s
s
Back column
EIc2, mc2
Roof
EAr, mr
Front column
EIc1, mc1
Figure 5.1 3D-illustration of the structure.

-- 139 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	120
Front wall 1
EIw1, mw1
L
B
w
Front column
EIc1, mc1
Figure 5.2 The analysed section of the structure is marked as a hatched area.
A top view of the considered section is schematically illustrated in Figure 5.3. It is
assumed that the column is provided with longitudinal reinforcement, parallel to the
length L, where As,c = 3ϕ20. The wall is provided with the reinforcement, where
As,w = ϕ10 s 150 mm, parallel to the width of considered section w. Material properties
are presented in Table 5.1. The study is performed with reinforcement of Class B as
well as Class C in order to compare the deformation capacities. The dimensions are
presented in Table 5.2.
hw
bw
As,w=10 s150 mm 	As,w=10 s150 mm
bw
bc
w
As,c=320 	hc
Figure 5.3 Top view of the analysed front column and wall with main dimensions
and reinforcement amounts.

-- 140 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 121
Table 5.1 Material properties of the frame.
Part Ec
[GPa]
fcd
[MPa]
Es
[GPa]
fyd
[MPa]
Front column 33 25 200 500
Front wall 33 25 200 500
Table 5.2 Dimensions of the structure.
Part bw / bc
[m]
hw / hc
[m]
w
[m]
s
[m]
B
[m]
L
[m]
Wall 3.0 0.2 6.0 6.0 15.0 7.0
Column 0.5 0.6 - - 15.0 7.0
5.3 Adaptation into SDOF system
SDOF model of the wall	5.3.1
The wall is simply supported on the columns and can therefore be described as a
simply supported beam, Figure 5.4.
(a) (b)
EIc1,
mc1+ mw1
L
w
EIw1, mw1
P(t)
R(t)
P(t)
Figure 5.4 SDOF model of the wall.
The properties and dimensions of the wall are described in Section 5.2 and the load
applied on it, P(t), is described in Section 5.4.1. The input data for the SDOF system
for the wall panel of 1 m width is calculated in Section F.1.1 and presented in
Table 5.3. The elasto-plastic response is simulated with a bilinear resistance-
deformation curve, R(u), where the inclination of the first branch k1.w corresponds the
stiffness in state II. The resistance Rm.w corresponds to the ultimate resistance of the
critical span section. When implementing the SDOF system for the elasto-plastic
response, the plastic transformation factors are used.

-- 141 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	122
Table 5.3 Mass, stiffness and transformation factors used for the elastic and
elasto-plastic model for wall panel of 1 m width.
Model κmF
[-]
mw
[kg]
Iw=III.w
[10-4 m4]
k1.w
[kN/m]
Mrd.w
[kNm]
Rm.w
[kN]
Elastic 0.788 2 880 0.54 640 - -
Elasto-
plastic 0.667 2 880 0.54 640 37.8 50
SDOF model of the front column	5.3.2
The front column of the frame structure is fixed at the ground. Similarly as the front
column in the 2D analysis in Chapter 4, the top support can be approximated as
simply supported at the initial stage of the analysis. The SDOF model of the front
column is illustrated in Figure 5.5. The model is established in agreement with the
method proposed by Johansson (2013).
(b)
EIc1,
mc.w=mc1+ mw1
L	F’(t)
R(t)
Figure 5.5 SDOF model of the front column. The mass of the model is the total
mass of the column and considered wall section. The stiffness only
corresponds to the stiffness of the column.
Since the wall contributes with its mass to the structure, the mass of this SDOF model
is the total mass of the column and wall. However, since the wall is only transferring
load between the columns it does not contribute to the stiffness of the column.
Therefore, the stiffness of the SDOF model corresponds to the stiffness of the column.
The structure is subjected to two load types, F’(t) and R(t), described in Section 5.4.
The parameters of the column are established in the same manner as for the local front
column described in Chapter 4. The calculations of these parameters can be found in
Section F.1.2 and the values are presented in Table 5.4. The elasto-plastic response is
simulated with a trilinear resistance-deformation curve, R(u), where the stiffness k1.c
corresponds to the inclination of the first branch and k2.c to the inclination of the
second branch. Only the stiffness in state II is considered. The resistance Rms.c
corresponds to the ultimate resistance at the fixed support while Rmf.c to the ultimate
resistance of the critical span section. When implementing the SDOF system for the

-- 142 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 123
elasto-plastic response plastic transformation factors are used, as they provide
satisfactory results, according to Andersson and Karlsson (2012).
Table 5.4 Mass, stiffness, resistance and transformation factors used for the elastic
and elasto-plastic response model of the front column.
Model κmF
[-]
mc.w.
[kg]
Ic=III.c
[10-4 m4]
k1.c
[kN/m]
k2.c
[kN/m]
Mrd.c
[kNm]
Rms.c
[kN]
Rmf.c
[kN]
Elastic 0.805 25 200 11 20 967 - - - -
Elasto-
plastic 0.667 25 200 11 20 967 8 128 211 241 361
5.4 Application of impulse load
Introduction	5.4.1
In this study the considered area, which is marked in Figure 5.6, is subjected to an
impulse load with a magnitude of 60 kPa and duration of 0.025 s which is the same as
in the 2D frame study. This load is referred to as External load in the following
paragraphs.
The response of the front column subjected to this load is studied. The paramters of
the load are described in Figure 5.7 and Table 5.5.
Front wall
EIw1, mw1
L
B
w
Front column
EIc1, mc1
1.0 m
P(t)
Figure 5.6 3D-illustration of how the External load, P(t), hits the structure. P(t) is
applied on the marked area.

-- 143 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	124
Table 5.5 Parameters for the chosen load.
Ppeak
[kN/m]
tpeak
[s]
t1
[s]
60 0.00025 0.025
t [s]
P [kPa]
Ppeak
tpeak t1
Figure 5.7 Properties of the chosen impulse load.
There are two different ways of applying the External load on the front column. The
simplified version is when the total load is directly applied on the column, which is
further described in Section 5.4.2. The second version, where consideration is taken to
the delay due to the dynamic reaction of the walls, is described in Section 5.4.3.
Direct application of load	5.4.2
The simplest way of applying the load on the column is to apply the total impulse load
from the considered area, marked in Figure 5.8, directly on the column.
Front wall 1
EIw1, mw1
L
B
w
Front column
EIc1, mc1
P(t)
Figure 5.8 The total load from the marked area is applied on the front column at
the same time.

-- 144 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 125
The shape and duration of the load applied on the column will be the same as for the
External load, P(t), described in Section 5.4.1. However, the magnitude of the load
will be larger since the area of where the load is applied is larger than one meter. The
total load, F’(t), applied directly on the front column is calculated according to
equation (5.1) and is referred to as Direct load in this chapter.
m
kN
t	P	w	t	F 360	60	6	)	(	)	(	' 					
(5.1)
This calculation methodology, where the load is directly applied on the front column,
is used in Johansson (2013). It is expected to provide conservative results since the
load will have a higher magnitude than the load described in Section 5.4.3.
F’(t)
EIc1,
mc1 + mw1
L
Figure 5.9 Direct application of the total impulse load, F’(t), gathered from the
marked area of the wall section.
Delayed application of load	5.4.3
5.4.3.1 Concept of delayed load
The front column is considered to carry the impulse load to the ground and through
the roof beam to the back column while the wall only transfers the load to the column.
When the impulse load hits the wall, the load is transferred to the column in form of
support reaction. The transfer path of the load applied on the wall as well as the load
direction within the column is presented in Figure 5.10.

-- 145 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	126
Front wall
EIw1, mw1
L
B
w
Front column
EIc1, mc1
1.0 m
P(t)
P(t)
Figure 5.10 Path of the External load, P(t), transferred through the wall to the
column. The load is further transmitted to the restraints of the
column, at the ground and at the top.
The dynamic reaction induced in the wall section by the External load P(t) is
presented Figure 5.11a and the concept used in its estimation can be found in
Section F.3. This dynamic reaction is loading the supporting column, according to
Figure 5.11b. It is reasonable to expect that the effect on the structure of this dynamic
reaction is less destructive than in case of the direct application of the load. The
magnitude of the dynamic reaction is much lower and its duration is prolonged in
time.
P(t)
w
0.5R(t) 0.5R(t)
EIw1, mw1
(a) (b)
R(t)
EIc1
mc1
L
Figure 5.11 (a) The External load P(t) acting on the wall induces the dynamic
reaction 0.5 R(t). (b) The dynamic reaction R(t), from the wall
sections on both sides of column, becomes the load on the column.
The dynamic reaction from the wall, R(t), is calculated by implementing the central
difference method, see Appendix D. The wall is modelled as a simply supported
beam. The reaction, R(t), is simulated for both an elastic and an elasto-plastic SDOF
model of the wall. The development of the dynamic reaction and its correlation to the
External load as well as the deformation and resistance is presented in Table 5.6.

-- 146 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 127
It can be noticed that the maximum deformation of the wall is obtained at time tmax
when the wall has absorbed the entire energy delivered by the External impulse load.
The total impulse Ik, marked in Table 5.6a, multiplied by the area on which the
impulse is acting corresponds to the marked area under the reaction-time curve in
Table 5.6d. After the maximum deformation umax is reached, the structure starts to
oscillate elastically as it has been provided with a surplus of energy.

-- 147 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	128
Table 5.6 Elastic and elasto-plastic models for: (a) the External load;
(b) deformations obtained in wall; (c) resistance-deformation
relationship; (d) development of resistance in time i.e. delayed load.
Elastic response Elasto-plastic response
(a)
umax
t1
t
P
Ppeak
Ik
umax
t1
t
P
Ppeak
Ik
(b)
(b)
t
umax
tmax
u
t
umax
uel.max
tel tmax
u
(c)(d)
kumax
R
u
umax
Rm
R
u	umax	uel.max
(d)
Rm
u
Ik
ΔIel
R
tmax
kuel
t
Ik
ΔIep
Rm
R
ttmax	tel

-- 148 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 129
The reaction R(t) in Table 5.6d will oscillate as the wall sways back and forth and
therefore there are several different ways of interpreting the load from the wall which
is transferred to the column. The different loads used for the elastic and elasto-plastic
cases are described in Section 5.4.3.2 and 5.4.3.3, respectively.
5.4.3.2 Elastic reaction loads
The support reaction for the elastic model is simulated in four different ways,
illustrated in Figure 5.12 and described in Table 5.7.
R
(a)
(c)
R
t
tmax
kuel
Ik
(b)
(d)
R
t
tmax
kuel
ΔIel
Ik
R
t
tmax
kuel
ΔIel
Ik
R
t
tmax
kuel
ΔIel
Ik
Figure 5.12 The reaction loads used in the study of the structure simulated with
the elastic response curve: (a) Reaction load ; (b) Reaction load 2;
(c) Reaction load 3; (d) Reaction load 4.

-- 149 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	130
Table 5.7 Description of the four different loads shown in Figure 5.12. Elastic
model is used.
Reaction load Description
Reaction load 1
Figure 5.12a
This load operates until the time tmax when the External load, P(t),
has been transmitted into the structure. This means that the Direct
load, F’(t), and Reaction load 1 will contain the exact same
impulse Ik and are therefore comparable with regard to impulse
size.
Reaction load 2
Figure 5.12b
Reaction load 2 is a continuation of Reaction load 1. For this
load, the total impulse Ik is increased with an extra impulse ΔIel of
the same magnitude as Ik. Thus, this reaction load is expected to
result in larger deformation.
Reaction load 3
Figure 5.12c
For Reaction load 3 an additional impulse ΔIel, but with a
negative sign, is added. The positive and negative additional
impulse ΔIel cancel out each other. Thus the total impulse
transmitted into the structure corresponds to the impulse Ik, which
is the same as for Reaction load 1.
Reaction load 4
Figure 5.12d
Reaction load 4 is based on that the wall sways back and forth,
creating an infinite oscillating reaction force. This is the most
realistic interpretation of the load, except for the natural damping
which would occur in reality. For Reaction load 4 the positive
and negative additional impulse ΔIel continues to cancel each
other.
5.4.3.3 Elasto-plastic reaction loads
Two different reaction loads, illustrated in Figure 5.13 and described in Table 5.8, are
investigated for the elasto-plastic case.
Ik
Rm
R
tmax	tel
(a)
t
Ik
ΔIep
Rm
R
tmax	tel
(b)
t
Figure 5.13 The reaction loads used in the study of the structure simulated with
the elasto-plastic response curve: (a) Reaction load 5; (b) Reaction
load 6.

-- 150 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 131
Table 5.8 Description of the loads shown in Figure 5.13. Elasto-plastic model is
used.
Reaction load Description
Reaction load 5
Figure 5.13a
The concept of this load corresponds to Reaction load 1 for the
elastic case. The load operates until the External load, P(t), has
been transmitted into the structure. The size of the impulse, Ik., is
identical to the Direct load
Reaction load 6
Figure 5.13b
Reaction load 6 has the same concept as Reaction load 2 for the
elastic case. Reaction load 5 is increased with an additional
positive impulse ΔIep. Since the impulse is larger than for
Reaction load 5, the effect and resulting deformation is predicted
to be larger.
5.5 Modelling in ADINA
Introduction	5.5.1
The response of the considered structure is also studied with a FE analysis, where two
different models are simulated in ADINA. The 2D model, further described in
Section 5.5.2 corresponds to the SDOF model. The 3D model, described in
Section 5.5.3, is created with both the wall and column in order to reassemble the real
situation. Input files for the 3D model for elasto-plastic response can be found
Section H.2.
2D model	5.5.2
The 2D model describes the front column. The boundary conditions, geometry and
properties are identical to the SDOF model described in Section 5.3.2.
The method of modelling is the same as for the local response of the 2D frame
structure, described in Section 4.5. 2D beam elements with three integration points
across the height of the cross sections are used. The value of the equivalent Young’s
modulus EII is calculated as
GPa	16	4	33
10	0	9
10	1	1 3
3
.
.
.
E
I
I
E I
a.c.I
c.	II
II 	


	 

(5.2)
where III.c is the moment of inertia for the cracked section found in Table 5.4 and II.c.a
is the moment of inertia for the uncracked section. The calculation of these parameters
can be found in Section F.1.2. EI is Young’s modulus in state I from Table 5.1. The
fictional yield limit fyd is established as
MPa	03	7
6	6	0	5	0
10	211 2
3
.
/	)	.	.	(	W
M
f
c.	el
c.	rd
yd 


		
(5.3)

-- 151 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	132
where Mrd.c is the moment capacity of the section which can be found in Table 5.4 and
Wel.c is the elastic bending resistance.
The 2D model is used to confirm the correctness of the SDOF calculations. The
comparison of the results from these two methods is presented in Section F.4.
3D model	5.5.3
The 3D model is created to better simulate the real behaviour of the analysed structure
consisting of the wall, on where the load is applied, and the column. The real
behaviour of the structure means that ADINA considers the speed of propagation of
the impulse within the structure and the fact that it takes a certain time before the
impulse applied on the wall has reached the column. Furthermore, the interaction of
the wall’s and column’s dynamic response is included.
Both the column and the wall are modelled with their real dimensions and properties
according to Section 5.2. The transfer of the load within the structure occurs in two
directions while the deformation occurs in the third. Therefore it is not possible to
describe the response by mean of a two dimensional space and a third direction must
be introduced. The model implemented in ADINA is schematically presented in
Figure 5.14. The column is modelled with mass mc1, stiffness EIc1 while the wall is
provided with mass mw1 and stiffness EIw1. The calculations of these parameters can
be found in Section F.1. The External load P(t) is applied only on the wall. The
column is therefore subjected only to the support reaction, R(t), induced by External
load P(t), transferred from the wall through the wall supports.
EIc1, mc1
EIw1, mw1
P(t)
EIw1, mw1
P(t)
EIw1, mw1
P(t)
EIw1, mw1
P(t)
w/2
R(t)/2 L
Figure 5.14 Schematic illustration of the 3D model implemented in ADINA. In the
true model there are seven wall panels on each side of the column.
The response obtained in ADINA is assumed to simulate the real behaviour of the
structure. However, the wall in this 3D FE model consists of 7 wall panels, resulting
in seven point loads on the column instead of a uniformly distributed load. This means
that the 3D FE model is an approximation of the reality, but it is assumed to
reassemble the true behaviour of the structure more closely than the SDOF model and
the 2D FE model.

-- 152 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 133
For 3D beam elements, the Equivalent Young’s modulus can be calculated in the
same way as in the 2D analysis. For the wall and column, respectively, the equivalent
Young’s modulus is calculated as
GPa	70	2	33
10	64	0
10	54	0 3
3
.
.
.
E
I
I
E I
a.w.I
w.	II
II 	


	 

(5.4)
GPa	16	4	33
10	0	9
10	1	1 3
3
.
.
.
E
I
I
E I
a.c.I
c.	II
II 	


	 

(5.5)
where III.w, III.c, II.w.a and II.c.a are calculated in Section F.1. The values of Young’s
modulus in state I EI can be found in Table 5.1.
When using 3D beam elements ADINA sets the number of integration points across
the height of the section to 7 and it is not possible to choose any other option.
According to Augustsson and Härenstam (2010) and Ek and Matsson (2009) the
expected stress distribution for 7 integration point should be as in Figure 5.15b which
differs from the theoretical distribution for a fully plasticised section, Figure 5.15a.
Moreover, the yield stress obtained in ADINA, Figure 5.15c, has been proven to not
agree with the expected stress distribution in Figure 5.15b. Therefore the input value
of the yield stress must be modified.
The bending resistance for the fully plasticised section, Figure 5.15a, and for the
section with stress distribution corresponding to the expected distribution in ADINA,
Figure 5.15b, is calculated as
2
4
1 bh	Wpl 	
(5.6)
2
54
13 bh	´	W pl 	
(5.7)
where b is the width of the section and h is the height.
It can be noticed that Wpl is about 4 % larger than W´pl. Moreover, Ek and
Matsson (2009) have shown that in order to obtain the assumed value of the stress
distribution as in Figure 5.15b, the input yield strength should be increased with
4.3 %. Therefore, when using the theoretical stress distribution, Figure 5.15a, the
input yield strength should be increased with 8.3 %.
yd	mod	.	yd f	.	f 083	1		
(5.8)
where
pl
rd
yd W
M
f 	
(5.9)
Thus, the modified yield stress for the wall and column, respectively, to be used in
ADINA in order to get the correct response is calculated as

-- 153 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	134
MPa	10	4
2	0	1
4	10	38
083	1	083	1 	2
3
.
.
.
W
M
.	f
w.	pl
w.	rd
w.	mod	.	yd 	

	
				
(5.10)
MPa	07	.	5
6	.	0	5	.	0
4	10	211
083	.	1	083	.	1 	2
3
.
.
.	mod	. 	

	
			
c	pl
c	rd
c	yd W
M
f	
(5.11)
where Mrd.w and Mrd.c. is calculated in Section F.1.1 and F.1.2, respectively.
fyd	fyd
(c)	(b)
fyd
fyd
(a)
fyd fyd
Figure 5.15. (a) Stress distribution for a fully plasticised section. (b) Assumed stress
distribution for 7 integration points. (c) Stress distribution in ADINA for
3D beam elements according to Augustsson and Härenstam (2010).
The simply supported connection of the wall to the column is modelled with rigid
links which is shortly described in Section 4.5.
5.6 Results and comparison
Elastic model	5.6.1
5.6.1.1 Deformation obtained in SDOF and 3D FE analysis
In the SDOF model, presented in Figure 5.16a, the deformation of the column is
obtained for the Direct load and for the reaction loads simulating the delayed loading.
Comparison of these loads is done in Figure 5.17. The deformation, u(t), is measured
in the middle of the column. In the 3D FE analysis the delayed load corresponds to the
reactions at the supports of the wall. The reactions from the wall are induced by the
External load P(t) acting only on the wall.

-- 154 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 135
u(t)
P(t)
(b)	(a)
ε
σ
Figure 5.16 Illustration of: (a) the SDOF model of the front column and its
deformation u(t); (b) the elastic material response model.
Figure 5.17 Load types used in the SDOF analysis of the structure simulated with
the elastic response model. The loads are the sum of the load from the
total considered area.
In Figure 5.17 the area under the Direct load curve, i.e. the impulse I, is the same as
the area under the curve for Reaction load 1. The sizes of the impulses for the
different loads are shown in Table 5.9 where positive and negative impulses are
considered to cancel out each other.
-1 000
-500
0
500
1 000
1 500
2 000
2 500
3 000
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Load,
 F, R [kN]
Time, t [s]
coparison loads-elasto
Direct load 	Reaction load 1 	Reaction load 2
Reaction load 3 	Reaction load 4

-- 155 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	136
Table 5.9 Total impulse transmitted to the structure for different loads.
Load type I=∫F(t)dt
[kNs]
Direct load 32.5
Reaction load 1 32.5
Reaction load 2 65
Reaction load 3 32.5
Reaction load 4 0 - 65
The deformation obtained from the 3D FE analysis due to External load P(t) and the
deformation due to the Direct load applied on the SDOF model are presented in
Figure 5.18.
Figure 5.18 Comparison of deformation in the middle of the column obtained in
the 3D FE analysis due to External load P(t) and in the SDOF
analysis for the Direct load.
It can be noticed that the deformation of the column obtained in the SDOF analysis is
almost twice as large as in case of the deformation from the 3D FE analysis. This
shows that the simplified method of the frame structure provides results considerably
on the safe side.
An FE analysis is also done where only the first bending mode is considered, which
corresponds to the SDOF model. An FE analysis with only the first bending mode of
the structure allows deformation of the column whereas the wall remains undeformed.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 1
SDOF 	FE 3D

-- 156 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 137
The results delivered from this FE analysis agrees well with the deformation obtained
in the SDOF calculations, see Figure 5.19.
Figure 5.19 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis due to External load P(t) for the first bending
mode and in the SDOF calculation for the Direct load.
In addition to verifying the simplified SDOF method, which has shown to provide
conservative results, a comparison of the deformation in the 3D FE analysis to the
deformation obtained in SDOF for the delayed loading is also done. The reaction
loads, presented in Figure 5.17 for the whole considered wall area, are created in order
to simulate the true loading of the column, i.e. the reactions at the wall supports
induced by the impulse load. The deformations obtained in SDOF for the studied
reaction loads are compared to the results from the 3D FE analysis in Figure 5.20 and
Figure 5.21.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 1
SDOF 	3D FE - 1 mode

-- 157 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	138
Figure 5.20 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis due to External load P(t) and in the SDOF for
Reaction load 1 and Reaction load 2.
Figure 5.21 Comparison of deformation in the middle of the column obtained in
the 3D FE analysis due to External load P(t) and in the SDOF for
Reaction load 3 and Reaction load 4.
A summary of the maximum deformations obtained in SDOF and in the FE model can
be found in Table 5.10. For each type of load, the SDOF analysis provides results on
the safe side.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 2
FE 3D 	SDOF Reaction load 1 	SDOF Reaction load 2
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 3
FE 3D 	SDOF Reaction load 3 	SDOF Reaction load 4

-- 158 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 139
Table 5.10 Maximum deformation in the middle of column obtained in the FE
analysis and SDOF calculations.
Load type SDOF
umax
[m]
FE 3D
umax
[m]
Direct load 0.047
0.027
Reaction load 1 0.038
Reaction load 2 0.047
Reaction load 3 0.062
Reaction load 4 0.062
The SDOF deformations are further discussed in Section 5.6.1.2 and the reasons for
the shape of the deformation curve from the 3D FE analysis are discussed in
Section 5.6.1.3.
5.6.1.2 Discussion of the SDOF deformation
When comparing the loads used for the study of the structure, which are presented in
Figure 5.17, the difference in time at which their maximum value is reached is
obvious. The Direct load reaches its peak value instantaneously at tpeak equal to 0 ms,
while the reaction loads at tpeak around 100 ms.
The deformation due to the Direct load, Reaction load 1 and Reaction load 2 are
shown in Figure 5.22.

-- 159 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	140
Figure 5.22 Deformation in the middle of the column obtained from the SDOF
calculations for Direct load, Reaction load 1 and Reaction load 2.
A comparison of the loads and deformation for the Direct load and Reaction load 1 is
shown in Figure 5.23. The Direct load and Reaction load 1 contains the same impulse,
see Table 5.7. However, the duration of the Direct load is seven times shorter than the
duration of Reaction load 1 while its magnitude is around four times larger. The fact
that Reaction load 1 is prolonged in time enables the structure to develop a resistance
against the energy transferred when the impulse hits the structure. Thus, the external
work done by the Direct load is larger than the external work done by Reaction load 1.
When comparing the internal work for these two cases of loading, the deformation is
larger for the Direct load as the area under resistance-deformation curve for this load
is also larger than for Reaction load 1, see Figure 5.24.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic SDOF
Direct load 	Reaction load 1 	Reaction load 2

-- 160 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 141
Figure 5.23 Comparison of the deformation in the middle of the column due to the
Direct load and Reaction load 1.
R
u
udirect load
Wi.reaction load 1
ureaction load 1
Wi.direct load
Figure 5.24 Comparison of internal work and resulting deformation for the
structure subjected to the Direct load and Reaction load 1.
For Reaction load 1 all deformation peaks reaches the same magnitude, which can be
seen in Figure 5.22. In this case, the load has stopped before the deformation has
reached its maximum value, see Figure 5.25.
Reaction load 2 is a continuation of Reaction load 1. Both the duration and the total
impulse for Reaction load 2 are twice as large as for Reaction load 1. Thus, the
resulting deformation from Reaction load 2 is expected to be also larger. However, the
difference in deformation for the two loads is only 0.004 m, see Figure 5.25. The
external work done by Reaction load 2 is not significantly larger than for Reaction
load 1. The fact that the load is prolonged in time gives the structure time to develop
resistance against the kinetic energy transferred when the load hits the structure.
0.00
0.01
0.02
0.03
0.04
0.05
0.06
0.07
0
500
1 000
1 500
2 000
2 500
3 000
3 500
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Deformation,
 u [m]
Load,
 F, R [kN]
Time, t [s]
coparison loads-deformations-elasto
Direct load 	Reaction load 1
u 	u	Direct load 	Reaction load 1

-- 161 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	142
Figure 5.25 Comparison of the deformations in the middle of the column due to
Reaction load 1 and Reaction load 2.
The first peak of the deformation caused by Reaction load 2 is higher than the
following peaks, see Figure 5.22. This is a result of the prolonged duration of this
load. At the time when the first peak occurs, the load is still acting, pushing the
deformation to a higher value. This can be seen in Figure 5.26 where the development
of the deformation due to the Direct load and Reaction load 2 is compared.
Figure 5.26 Comparison of the deformations in the middle of the column due to
the Direct load and Reaction load 2.
The deformation induced by Reaction load 3 is larger than for the Direct load, see
Figure 5.27. Moreover, the common assumption that the initial response is the most
critical for dynamically loaded structures does not agree here.
0.00
0.02
0.04
0.06
0.08
0
200
400
600
800
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Deformation,
 u [m]
Load,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
Reaction load 1 	Reaction load 2
u 	u	Reaction load 1 	Reaction load 2
0.00
0.01
0.02
0.03
0.04
0.05
0.06
0.07
0
500
1 000
1 500
2 000
2 500
3 000
3 500
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Deformation,
 u [m]
Load
, F
, R [kN]
Time, t [s]
coparison loads-deformations-elasto
Direct load 	Reaction load 2
u 	u	Direct load 	Reaction load 2	Direct load 	Reaction load 2

-- 162 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 143
Figure 5.27 Deformation in the middle of the column due to the Direct load and
Reaction load 3.
For Reaction load 3 the additional negative impulse, –ΔIel, theoretically
counterbalances the positive additional impulse, ΔIel, in order to get a total impulse Iel,
see Table 5.7. However, in this case the frequency of the reaction load coincides with
the frequency of the structure which thus enhances the effect of the load and pushes
the negative deformation to a higher value, see Figure 5.28.
Figure 5.28 Comparison of the deformation in the middle of the column and
Reaction load 3.
The deformation obtained due to Reaction load 4 is compared with the deformation
caused by the Direct load in Figure 5.29. It can be noticed that the highest
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic SDOF
Direct load 	Reaction load 3
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
-1 000
-750
-500
-250
0
250
500
750
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Load,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
Reaction load 3 	u Reaction load 3

-- 163 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	144
deformation due to Reaction load 4 is obtained after several sways. Moreover, this
deformation is larger than the maximum deformation caused by the Direct load.
These results does not agree with the common assumption for impulse loaded
structures that the impulse load is the most destructive, nor that the most critical part
is the initial response. However, since the structures in reality have a certain amount
of damping the deformations decreases significantly with time. Therefore, the higher
deformation obtained after several sways can be disregarded.
Figure 5.29 Deformation in the middle of the column due to the Direct load and to
Reaction load 4.
Reaction load 4 and the resulting deformation are presented in Figure 5.30. The shape
of the deformation curve is a result of how the development of deformations coincides
with the frequency of the reaction load.
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic SDOF
Direct load 	Reaction load 4

-- 164 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 145
Figure 5.30 Deformation in the middle of the column due to Reaction load 4.
The maximum deformations obtained for different loads are presented together with
the theoretical size of the impulse load in Table 5.11. It can be seen that the most
critical deformation obtained in the SDOF calculations is for Reaction load 3 and 4.
However, since those deformations are obtained after several sways, they might still
not be the most critical in reality due to the natural damping.
Table 5.11 Maximum deformation and total impulse transmitted to the structure for
different loads.
Load type umax
[m]
I=∫F(t)dt
[kNs]
Direct load 0.047 32.5
Reaction load 1 0.038 32.5
Reaction load 2 0.047 65
Reaction load 3 0.062 32.5
Reaction load 4 0.062 0 - 65
5.6.1.3 Structural response of wall panels in 3D FE analysis
In order to better understand the behaviour of the 3D structure, the wall panels are
investigated. The points where the deformation in the middle of the wall is measured
are illustrated in Figure 5.31.
-0.1
-0.075
-0.05
-0.025
0
0.025
0.05
0.075
-1 000
-750
-500
-250
0
250
500
750
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Load,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
Reaction load 4 	u Reaction load 4

-- 165 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	146
1
2
3
4
5
6
7
Figure 5.31 The different points along the column, for which the support reactions
and the deformations in the middle of the wall, are measured.
A comparison of the deformation obtained in the middle of the wall as well as in the
middle of the column is presented in Figure 5.32. The deformations of the wall are
also compared to the deformation of a simply supported beam with the same
properties and dimensions as the wall panels. The best agreement of deformations for
all points is at the beginning of the response i.e. within the first 0.3 seconds.
The deformation that agrees best with the simply supported beam is the deformation
for the point which is closest to the fixed support, i.e. point 1. This region of the
column is characterised by the highest stiffness and lowest deformation of the column
and therefore the support of the wall corresponds to a simple support. The largest
deformations of the wall is obtained for the panels located in the middle of the column
and panels closer to the simply supported edge of the column, i.e. point 4 and 5. The
deformations in these points becomes delayed while their magnitudes increase.
The deformation in the middle of the column is much smaller than in the middle of
the wall. This is partly due to the difference in stiffness and boundary conditions of
the wall and column as well as due to difference between the loads acting on column
and wall. Since the 3D FE wall model is made of seven wall panels on each side of
the column, the column is exposed to seven support reactions instead of one
uniformly distributed load. Figure 5.33 shows those reactions acting on the column at
the locations illustrated in Figure 5.31.

-- 166 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 147
Figure 5.32 The deformations in the middle of the wall, measured in different
points along the column, are compared to the deformation of a simply
supported beam and to the deformation in the middle of the column.
Figure 5.33 A comparison of deformation in the middle of the column and the
support reactions acting on the column. The reactions are the sum from
the wall panels on both sides of the column.
-0.240
-0.160
-0.080
0.000
0.080
0.160
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
FE analysys-coparison def i middle of wall to middle of column
Column 	Wall - Point 1 	Wall - Point 2
Wall - Point 3 	Wall - Point 4 	Wall - Point 5
Wall - Point 6 	Wall - Point 7 	Simply supported beam
-0.07
-0.05
-0.03
-0.01
0.01
0.03
-80
-40
0
40
80
120
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Deformation,
 u [m]
Reaction,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
R 	R 	R
R 	R 	R
R 	u Column
Point 1 	Point 2 	Point 3
Point 4 	Point 5 	Point 6
Point 7

-- 167 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	148
In Figure 5.33 it can be seen that the reaction forces transferred from the wall to the
column do not coincide. For a certain time interval the load case can be illustrated as
in Figure 5.34.
1
2
3
4
5
6
7
R1(t)
R2(t)
R3(t)
R4(t)
R7(t)
R5(t)
R6(t)
Figure 5.34 The reactions transferred from the wall to the column have different
frequencies and do not coincide. At a certain time interval both the
magnitude and the direction of reactions vary.
The behaviour of the reaction forces is partly a consequence of that the wall is
modelled with a number of independent wall panels in ADINA. Their action
corresponds to the action of the beam supported on springs. The stiffness of the
springs is decided by the stiffness of the column, which varies along the length of the
column, see Figure 5.35. Thus, for the different wall panels the supports are provided
with different stiffnesses. For example, the stiffness of the wall panel next to the fixed
edge of the column, k1, is larger than for the wall panel in the middle of column, k4. As
a result the different wall panels have different frequency.
(a) (b)
k1
k4
k1>k4 P(t)
k4
P(t)
k1
R1(t)
R2(t)
R3(t)
R4(t)
R7(t)
R5(t)
R6(t)
1
2
3
4
5
6
7
Figure 5.35 (a) The stiffness of the column supporting the wall panels differ for
different regions. (b) The stiffness of the support of the wall panel is
decided by the stiffness of the column at the corresponding location.

-- 168 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 149
The fact that the reaction forces doesn´t coincide is a probable reason for the uneven
development of deformation in the middle of the column. The counteraction of the
reaction forces can be considered as a sort of damping.
In order to understand the behaviour of the reaction forces better, point 1 and 4 in
Figure 5.35 are investigated further. The reaction transferred from the wall panel to
the column at those point during the first second is presented in Figure 5.36 and
Figure 5.37. The reaction force is compared to the support reaction for a simply
supported beam. The support reactions for all other points along the column can be
found in Section F.5.1.
Similarly as for the deformation the best agreement with the simply supported beam is
for the wall panel with its support next to the fixed support of the column, i.e. point 1.
For the wall supports towards the middle of the column, the reaction is delayed due to
the decresed stiffnesses in this region. The supports in the middle of the column
corresponds to a spring, since it is not fixed in the vertical direction.
Figure 5.36 A comparison of reaction forces for a simply supported beam and the
reaction transferred from the wall panel to the column at location 1.
-100
-75
-50
-25
0
25
50
75
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 12
Simply supported beam 	Wall - Point 1

-- 169 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	150
Figure 5.37 A comparison of reaction forces from a simply supported beam and the
reaction transferred from the wall panel to the column at location 4.
In order to compare the delayed load in the 3D FE analysis with the delayed load from
the SDOF analysis, the reactions from the wall panels are added according to
equation (5.12) and plotted together with the delayed load from SDOF in Figure 5.38.
Figure 5.38 A comparison of the delayed loading in SDOF and 3D FE analysis.
-100
-75
-50
-25
0
25
50
75
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 73
Simply supported beam 	Wall - Point 4
-1 000
-750
-500
-250
0
250
500
750
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 145
SDOF 	FE 3D


7
1	i
i	tot )	t	(	R	)	t	(	R	
(5.12)

-- 170 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 151
It can be noticed that Rtot(t) from the 3D FE analysis is decreasing with time. This is
caused by the fact that the vibrations of the different wall panels do not coincide,
which can be considered as a sort of damping.
The magnitude of the total reaction calculated in SDOF is higher than in the 3D FE
analysis, which agrees with the fact that the dynamic reaction is overestimated when it
is calculated with regard to the assumption for the static load according to Andersson
and Karlsson (2012). The concept of calculation the dynamic reaction can be found in
Section F.3. The reactions obtained in the SDOF and 3D FE analysis, presented in
Figure 5.38, agrees best at the very beginning of the response. The frequency is
somewhat similar. However, the total reaction in the FE analysis becomes delayed
since the supports of the wall panels in this FE analysis have different stiffnesses.
However, the supports in the SDOF model of the wall are fixed in the vertical
direction.
The development of the total reaction acting on the column in the FE analysis in a
longer time interval is plotted in Figure 5.39.§
Figure 5.39 Total reaction acting on the column in the 3D FE analysis.
At around 2.5 seconds, when the total reaction reaches its lowest magnitude, the
reactions at the stiffer regions of the column are working in another direction than the
reactions in the regions with lower stiffness, see Figure 5.34. At around 4.5 seconds
the highest magnitude of the total reaction is reached since the support reactions are
working in the same direction. This effect makes the simulation of the response
difficult to conduct in the SDOF system.
Elasto-plastic model	5.6.2
5.6.2.1 Deformation obtained in SDOF and FE 3D analysis
The deformation of the column in the SDOF analysis is obtained for the Direct load
and for the reaction loads which simulate the delayed loading. The deformation u(t) is
measured in the middle of the column, shown in Figure 5.40. In the 3D FE analysis
-750
-500
-250
0
250
500
750
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0 	3.5 	4.0 	4.5 	5.0 	5.5 	6.0
Reaction,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
Rtot

-- 171 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	152
the delayed load corresponds to the reactions at the supports of the wall which are
induced by the External load P(t) acting only on the wall. An illustration of all loads
used for the study of the structure in SDOF analysis is shown in Figure 5.41.
u(t)
P(t)
(a) (b)
ε
σ
fyd
Figure 5.40 Illustration of: (a) the SDOF model of the front column and the
deformation u (t); (b) the elasto-plastic material response model.
Figure 5.41 Load types used in the analysis of the structure simulated with the
elasto-plastic response curve. The loads are the sum of the load from the
total considered area.
When studying Figure 5.41, it can be noticed that the duration of the Direct load is
shorter than the duration of the reaction loads, while its magnitude is around
seven times larger. Reaction load 5 contains the same impulse as the Direct load, see
Table 5.8. The area under the Direct load curve, i.e. the impulse I, is the same as the
area under the curve for Reaction load 5. The sizes of the impulses for the different
loads are shown in Table 5.12.
0
500
1 000
1 500
2 000
2 500
3 000
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Load,
 F, R [kN]
Time, t [s]
coparison loads-elasto-plastic
Direct load
Reaction load 5
Reaction load 6

-- 172 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 153
Table 5.12 Total impulse transmitted to the structure for different loads.
Load type I=∫F(t)dt
[kNs]
Direct load 32.5
Reaction load 5 32.5
Reaction load 6 51.6
The deformation obtained from the 3D FE analysis due to External load P(t) and the
deformation for the Direct load and the reaction loads applied on the SDOF model are
presented in Figure 5.42.
Figure 5.42 Comparison of deformation in the middle of the column obtained in
the 3D FE analysis due to External load P(t) and in the SDOF for the
Direct load and reaction loads.
The maximum magnitude of the deformation in the 3D FE analysis is 0.02 m, while it
is almost 0.09 m in the SDOF for the Direct load. Thus, it can be stated that the
method proposed by Johansson (2013) provides conservative results which are very
much on the safe side.
The reaction loads implemented in SDOF provide smaller deformation than the Direct
load, i.e. the results for the delayed loads are still on the safe side. The elasto-plastic
reaction models are further discussed in Section 5.6.2.2. The probable reasons for the
behaviour of the column in the 3D FE analysis is explained in Section 5.6.2.3. A
comparison of maximum deformations in Figure 5.42 is presented in Table 5.13.
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
SDOF Direct load 	SDOF Reaction load 5
SDOF Reaction load 6 	FE 3D

-- 173 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	154
Table 5.13 Maximum deformation obtained in SDOF and FE analysis.
Load type SDOF umax
[m]
FE umax
[m]
Direct load 0.088
0.020	Reaction load 5 0.051
Reaction load 6 0.077
5.6.2.2 Discussion of SDOF deformation
An illustration of all loads used for the study of the structure, simulated with the
elasto-plastic response curve in SDOF, is shown in Figure 5.41. The deformation due
to these loads are shown in Figure 5.43.
Figure 5.43 Deformation in the middle of the column for the Direct load, Reaction
load 5 and Reaction load 6.
Reaction load 5 is prolonged in time compared to the Direct load, see Figure 5.41,
which enables the structure to develop a resistance against the energy transferred
when the impulse load hits the structure. This resistance increases with time and
depends on the stiffness of the structure. Thus, the external work done by the Direct
load is larger than the work done by Reaction load 5. When comparing this to the
position on the resistance-deformation curve in Figure 5.44, the deformation is larger
for the Direct load than for Reaction load 5 as the area under this curve,
corresponding to internal work, is also larger.
0.000
0.025
0.050
0.075
0.100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
Direct load 	Reaction load 5 	Reaction load 6

-- 174 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 155
R
u
uDirect load
Wi.Reaction load 5
uReaction load 5
Wi.Direct load
Figure 5.44 Comparison of internal work and resulting deformation for the
structure with elasto-plastic response subjected to the Direct load and
to Reaction load 5.
Reaction load 6 is a continuation of Reaction load 5 and since it is prolonged in time,
see Figure 5.41, the impulse is almost twice as large as in case of Reaction load 5.
Therefore, the internal work done by the structure subjected to Reaction load 6 and
the resulting deformation is larger compared to Reaction load 5.
The maximum deformations as well as the total impulse transmitted by the studied
loads are compiled in Table 5.14.
Table 5.14 Maximum deformation and total impulse transmitted to the structure for
the different loads.
Load type umax
[m]
I=∫F(t)dt
[kNs]
Direct load 0.088 32.5
Reaction load 5 0.051 32.5
Reaction load 6 0.077 51.6
5.6.2.3 Structural response of wall panels in 3D FE analysis
The deformation obtained in the 3D FE analysis in the middle of the wall is
investigated at the points illustrated in Figure 5.45.

-- 175 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	156
1
2
3
4
5
6
7
Figure 5.45 The deformations and reaction forces are measured at different points
along the column.
A comparison of the deformations obtained in the middle of the wall in the different
points as well as the deformation in the middle of the column are presented in
Figure 5.46. The deformation in the middle of the wall is also compared to the
deformation of a simply supported beam with the same properties and dimensions. In
this figure, it can be noticed that at the beginning of the loading, within the first
0.2 seconds, the deformation for the wall panels which are near the supports of the
column i.e. in point 1, 2 and 7 are similar to the deformation of the simply supported
beam. Similarly as for the elastic model, the deformation for the wall panel closest to
the fixed support of the column is most similar to the deformation of the simply
supported beam since the column is stiffest there. The largest deformation of the wall
is obtained for the panels in the middle of the column i.e. in point 4 and 5. Similarly
as for the elastic response, the difference in the frequency and magnitude of the
deformation is a result of different stiffnesses of the column in its different regions.
A comparison of the deformation in the middle of the column and the reaction forces
from the different wall supports along the column is done and presented in
Figure 5.47. It can be noticed that the reactions do not coincide but works against each
other, as they did for the elastic model. This effect, caused by the different frequencies
of the wall panels, decreases the deformation of the column.

-- 176 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 157
Figure 5.46 The deformation in the middle of the wall, measured in different
points along the column, are compared to the deformation of a simply
supported beam and to the deformation in the middle of the column.
Figure 5.47 A comparison of the deformation in the middle of the column and the
support reactions acting on the column. The reactions are the sum from
the wall panels on both sides of the column.
The elasto-plastic reactions from the wall supports reach the maximum value at the
beginning of the response and decreases after the first 0.7 seconds. The counteraction
of the reactions is a possible explanation for the small deformation of the column.
In order to investigate the behaviour of the reaction forces further, point 1 and 4 are
plotted against the support reaction of a simply supported beam in Figure 5.48 and
-0.10
-0.05
0.00
0.05
0.10
0.15
0.20
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
Column 	Wall - Point 1 	Wall - Point 2
Wall - Point 3 	Wall - Point 4 	Wall - Point 5
Wall - Point 6 	Wall - Point 7 	Simply supported beam
-0.04
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.03
-20
-10
0
10
20
30
40
50
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Deformation,
 u [m]
Reaction,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
R 	R 	R
R 	R 	R
R 	u Column
Point 1 	Point 2 	Point 3
Point 4 	Point 5 	Point 6
Point 7

-- 177 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	158
Figure 5.50, respectively. Figure 5.49 shows the reactions of point 1 for a longer time
interval. The support reactions for all other points along the column can be found in
Section F.5.2.
As for the elastic case the largest similarity to the simply supported beam is for the
wall panel with its support next to the fixed support of the column, i.e. point 1,
Figure 5.48. For the wall panels with supports towards the middle of the column, the
reaction is delayed due to the stiffness of this region which differs more than in case
of a simple support, Figure 5.50.
In Figure 5.49 the magnitude of the support reaction decreases from 36 kN to 15 kN.
This behaviour can be compared to damping, which agrees with the general
consideration of the elasto-plastic response as a source of damping. After 0.7 seconds
the reaction continues with the same amplitude of oscillations and the same maximum
deformation.
Figure 5.48 A comparison of the reactions for a simply supported beam and the
reactions transferred from the wall panel to the column at point 1.
-50
-30
-10
10
30
50
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 12
Simply supported beam 	Wall - Point 1

-- 178 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 159
Figure 5.49 The reaction transferred from the wall panel to the column at point 1 for
the first 6 seconds.
Figure 5.50 A comparison of the reactions for a simply supported beam and the
reactions transferred from the wall panel to the column at point 4.
A comparison between the delayed loads obtained in the 3D FE analysis, which is
calculated as the sum of all support reactions according to equation (5.12), to the
assumed delayed load established in SDOF is presented in Figure 5.51.
-40
-30
-20
-10
0
10
20
30
40
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0 	3.5 	4.0 	4.5 	5.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 12
Wall - Point 1
-50
-30
-10
10
30
50
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 73
Simply supported beam 	Wall - Point 4

-- 179 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	160
Figure 5.51 A comparison of the total delayed load in SDOF and in the 3D FE
analysis.
The total reaction in SDOF is overestimated when it is calculated with regard to the
assumption for the static load. This concept of calculation of the dynamic reaction can
be found in Section F.3. According to Andersson and Karlsson (2012) the correct
value of the dynamic reaction for a simply supported beam is not 0.5Rm but 0.39Rm.
The total reaction in the FE analysis Rtot, equation (5.12), becomes delayed and
decreases due to different frequencies of the wall panels. Its development for a longer
time interval is presented in Figure 5.52.
Figure 5.52 Total reaction acting on the column in the 3D FE analysis.
-600
-400
-200
0
200
400
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 145
SDOF 	FE 3D
-400
-300
-200
-100
0
100
200
300
400
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0 	3.5 	4.0 	4.5 	5.0 	5.5 	6.0
Reaction,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
Rtot

-- 180 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 161
The shape of the total reaction in Figure 5.52 is caused by the difference in frequency
of the support reactions from wall, similarly as for the elastic response. At the time
2.5 s, when the total reaction reaches the lowest magnitude, the reactions at the
regions with the highest and lowest stiffness are working against each other. After this
the frequency of the support reactions starts to coincide more. At the time of around
4.5 s all reactions are working in the same direction and the total reaction Rtot reaches
higher value.
5.6.2.4 Check of deformation capacity
The check of the plastic deformation capacity of the front column is presented in this
section. The studied here SDOF model of the front column is similar to the model of
the front column in the 2D frame analysis performed in Chapter 4. The concept of
calculating the deformation capacity for a structure with a trilinear response model is
described in Section 4.7.1.4. The calculations are presented in Section F.2 and the
results in Table 5.15.
Table 5.15 Comparison of plastic deformation capacity and maximum deformation
obtained for the different loads.
Reinf.
Class
urds
[m]
SDOF 3D FE
Direct load
umax
[m]
Reaction load 5
umax
[m]
Reaction load 6
umax
[m]
umax
[m]
B 0.040 0.088 0.051 0.077 0.020
C 0.102 0.088 0.051 0.077 0.020
This check shows that for the Direct load, the deformation capacity is sufficient for
reinforcement of Class C, but not for reinforcement of Class B. The maximum
deformation due to Reaction load 5 and 6 is lower than due to the Direct load, but the
deformation capacity is still not sufficient when reinforcement of Class B is used.
Since all SDOF calculations has been proven to be on the safe side, and the maximum
deformation obtained in the 3D FE analysis is 0.020 m the structure would not
collapse for the considered load, for both reinforcement of Class B and Class C.
Comparison of elastic and elasto-plastic model	5.6.3
When comparing the deformation in the middle of the column for the elastic and
elasto-plastic response, a difference in magnitude is obvious while the frequency is
similar, see Figure 5.53.

-- 181 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	162
Figure 5.53 The deformation in the middle of the column for the elastic and
elasto-plastic response.
The fact that the deformation for the elasto-plastic response is smaller is a result of a
lower reaction load induced at the supports of the wall panels which are simulated
with an elasto-plastic response curve. For both response models the frequency of
deformation and the support reactions are the same. The support reactions of wall
panel 1 for two models are compared in Figure 5.54.
Figure 5.54 The support reaction for the wall panel at point 1, i.e. next to the
fixed support of column, for the elastic and elasto-plastic response.
-0.04
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.03
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
Elastic model 	Elasto-plastic model
-80
-60
-40
-20
0
20
40
60
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 12
Elastic model 	Elasto-plastic model

-- 182 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 163
For the studied structure the elastic reactions are larger than the elasto-plastic. The
maximum value for the elastic response is 52 kN while for the elasto-plastic response
it is 35 kN. In this study the simulation of the response of the structure with the elastic
model results in higher load acting on the column and thus in higher deformation. In
general, however, a larger deformation is more often obtained when implementing the
elasto-plastic response. The difference in magnitudes of deformation between the
elastic and elasto-plastic model depends on the chosen parameters of the structure.
Thus, further investigation of the influence of different parameters on the response of
the studied frame is done and presented in Section 5.6.
5.7 Parametric study
Orientation	5.7.1
The results obtained in Section 5.6 are in this section compared to structures where
the stiffness and internal resistance of the wall is varied for the elastic and elasto-
plastic model, respectively. The other properties of the wall and column are the same
as in the previous study, see Section 5.2.
This parametric study is conducted in the same manner as the previous analysis in
Section 5.6. The Direct load and the dynamic reaction from the supports of the wall
are simulated and applied on the column in the SDOF system. The results are verified
with a 2D FE analysis, and a 3D FE analysis of the structure is performed in
ADINA (2011).
In this section a selection of the results is presented and discussed. The other results
such as the verification of the SDOF model with 2D FE analysis, a comparison of
wall support reactions with a simply supported beam as well as a comparison of the
delayed loading in SDOF and in the 3D FE analysis can be found in Appendix G.
Elastic model	5.7.2
5.7.2.1 Parameters studied
For the elastic model only the stiffness of the wall is varied. Three different cases are
considered here, see Figure 5.55. The first case is an unchanged stiffness ku which is
the same as in the previous study, see Table 5.3 and equation (F.6). The second case is
stiffness kd which corresponds to the stiffness used in the previous study decreased
with factor 4. The last stiffness, ki, is increased with factor 4 compared to ku. The
frequency for the studied cases differs with factor 2, according to Figure 5.55. Studied
values of stiffnesses are complied in Table 5.16.

-- 183 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	164
ki = 4ku, fi = 2fu
u
R
ku, fu
kd = ku/4, fd = fu/2
Figure 5.55 Three different stiffnesses of the wall used in the elastic response
model.
Table 5.16 The values of stiffnesses for which the study is conducted.
Stiffness Decreased
kd
[kN/m]
Unchanged
ku
[kN/m]
Increased
ki
[kN/m]
Wall 160 640 2560
Column 20967
5.7.2.2 Loads and deformation
The studied column simulated in SDOF is subjected to the Direct load, Reaction
load 1, 2 and 3.
Reaction load 1 for the different values of the stiffnesses together with the Direct load
is presented in Figure 5.56.

-- 184 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 165
Figure 5.56 Reaction load 1 obtained in SDOF for different values of stiffnesses of
the wall together with the Direct load.
The resulting deformation in the middle of the column for each case of stiffness due to
Reaction load 1 is compared with the deformation obtained for the Direct load in
Figure 5.57.
Figure 5.57 Comparison of deformation in the middle of column obtained in
SDOF for different cases of Reaction load 1 together with the Direct
load.
0
500
1 000
1 500
2 000
2 500
3 000
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Load,
 	F, R [kN]
Time, t [s]
coparison loads-elasto reactioni load1
k 	k 	k 	Direct load	unchanged 	decreased 	increased
-0.08
-0.06
-0.04
-0.02
0.00
0.02
0.04
0.06
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
SDOFdef elastic reaction load 1
k 	k
k 	Direct load
unchanged 	decreased
increased

-- 185 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	166
In Figure 5.57 the largest deformation is obtained for the structure subjected to the
Direct load. Morover when comparing those results with Figure 5.56, it can be
noticed that an increase in stiffness leads to a higher magnitude and a shorter duration
of reaction load making it more similar to the impulse load. Thus, the deformation
induced by Reaction load 1 increases with increasing stiffness of the wall.
Reaction load 2 for different values of wall stiffness is shown in Figure 5.58 together
with the Direct load.
Figure 5.58 Reaction load 2 obtained in SDOF for different values of stiffnesses of
the wall together with the Direct load.
The deformation due to the different loads from Reaction load 2 is compared to the
deformation caused by the Direct load in Figure 5.59.
0
500
1 000
1 500
2 000
2 500
3 000
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40
Load,
 F, R [kN]
Time, t [s]
coparison loads-elastic reaction 2
k 	k 	k 	Direct load	unchanged 	decreased 	increased

-- 186 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 167
Figure 5.59 Comparison of deformation in the middle of column obtained in
SDOF for different cases of Reaction load 2 together with the Direct
load.
Similarly as for Reaction load 1, the largest deformation is obtained for the wall with
the highest stiffness. Moreover, this deformation is larger than the deformation
induced by the Direct load. As mentioned in Section 5.6, this effect is caused by the
fact that Reaction load 2 is prolonged in time and increases the deformation to a
higher value, see Figure 5.60.
Figure 5.60 Comparison of the deformation in the middle of column and loads for
the Direct load and Reaction load 2 for a case with the increased
stiffness ki. All results are obtained in SDOF.
-0.15
-0.10
-0.05
0.00
0.05
0.10
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
SDOFdef elastic reaction load 2
k 	k
k 	Direct load
unchanged 	decreased
increased
-0.10
-0.05
0.00
0.05
0.10
0.15
-2 000
-1 000
0
1 000
2 000
3 000
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Deformation,
 u [m]
Load,
 F , R [kN]
Time, t [s]
coparison loads-deformations-elasto
Direct load 	Reaction load 2
u 	u	Direct load 	Reaction load 2

-- 187 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	168
For the wall with decreased stiffness the deformation is compared to causing it Direct
load and Reaction load 2 in Figure 5.61. The elongated shape of deformation is
caused by the prolonged Reaction load 2 which is still active after reaching the
highest deformation and sustains the positive deformation.
Figure 5.61 Comparison of the deformation in the middle of the column and loads
for the Direct load and Reaction load 2 for a case with decreased
stiffness kd. All results are obtained in SDOF.
Reaction load 3 for different stiffnesses of the wall is illustrated in Figure 5.62
together with the Direct load. The resulting deformation for those loads is presented in
Figure 5.63.
-0.06
-0.04
-0.02
0.00
0.02
0.04
0.06
0.08
-3 000
-2 000
-1 000
0
1 000
2 000
3 000
4 000
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45 	0.50
Deformation,
 u [m]
Load,
 F, R
 [kN]
Time, t [s]
coparison loads-deformations-elasto
Direct load 	Reaction load 2
u 	u	Direct load 	Reaction load 2

-- 188 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 169
Figure 5.62 Reaction load 3 obtained in SDOF for the different values of stiffness
of the wall together with the Direct load.
Figure 5.63 Comparison of deformation in the middle of column obtained in
SDOF for different cases of Reaction load 3 together with the Direct
load.
Similarly as for Reaction load 1 and 2, the largest deformation is obtained for the wall
with increased stiffness. The first deformation peak is smallest due to the change of
direction of the load at the time when this deformation occurs. The negative load
starts to act before this deformation peak is reached. It cannot reach a higher value
since it is pushed back by the load acting in the opposite direction.
-2 000
-1 000
0
1 000
2 000
3 000
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45 	0.50 	0.55 	0.60
Load,
 F, 	R [kN]
Time, t [s]
coparison loads-elasto reaction load 3
k 	k 	k 	Direct load	unchanged 	decreased 	increased
-0.20
-0.15
-0.10
-0.05
0.00
0.05
0.10
0.15
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
SDOF def elastic reaction load 3
k 	k
k 	Direct load
unchanged 	decreased
increased

-- 189 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	170
In order to assess the simplified method recommended by Johansson (2013), the
deformation due to the Direct load obtained in the SDOF system is compared to the
deformation in the 3D FE analysis. Figure 5.64 presents this comparison for different
stiffnesses of the wall introduced in the FE model.
Figure 5.64 Comparison of deformation in the middle of the column obtained in
the 3D FE analysis for varied stiffness of the wall to the deformation
obtained in SDOF, caused by the Direct load.
The simplified method, i.e. the Direct load, provides results on the safe side for all
three stiffnesses of the wall. The maximum deformations obtained for the Direct load
in SDOF and for the different stiffnesses in the 3D FE analysis is presented in
Table 5.17. Increased stiffness of the wall in the FE analysis leads to increased
deformation of the column.
Table 5.17 Maximum deformation of the column obtained in SDOF for the Direct
load is compared to the deformation from the 3D FE analysis for the
different cases of stiffnesses of the wall.
SDOF Direct load
All cases of k
3D FE
Increased
stiffness of wall,
ki
3D FE
Unchanged
stiffness of wall,
ku
3D FE
Decreased
stiffness of wall,
kd
umax
[m] 0.047 0.037 0.026 0.020
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
3D el
FE 3D k 	FE 3D k
FE 3D k 	SDOF - Direct load
unchanged 	decreased
increased

-- 190 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 171
5.7.2.1 Investigation of wall panels in FE model
The support reactions and deformations for the wall panels are measured along the
column in points illustrated in Figure 5.65. The deformation in the middle of the
column is plotted against the support reactions for point 1 and 4 for the decreased and
increased stiffness of the wall in Figure 5.66 and Figure 5.67, respectively. The
support reactions in all points along the column compared to the support reactions
from a simply supported beam are shown in Section G.4.
1
2
3
4
5
6
7
Figure 5.65 The different points along the column, for which the support reactions
and the deformations, in the middle of the wall, are measured.
Figure 5.66 Comparison of the deformation in the middle of the column and the
support reactions from wall panels at point 1 and 4 for the case with
decreased stiffness of the wall.
-0.02
-0.01
0.00
0.01
0.02
0.03
0.04
-20
-10
0
10
20
30
40
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Deformation,
 u [m]
Reaction,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
R 	R 	u	Point 1 	Point 4 	Column

-- 191 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	172
Figure 5.67 Comparison of the deformation in the middle of the column and the
support reactions from wall panels at point 1 and 4 for the case with
increased stiffness of the wall.
Comparing Figure 5.66 and Figure 5.67 it is obvious that the amplitude of sways in
the deformation curve of the column is strongly influenced by the magnitude of the
support reactions which is larger for the wall with increased stiffness.
The deformations in the middle of wall for point 1 and 4, for the decreased and
increased stiffness of wall, is also measures and presented in Figure 5.68 and
Figure 5.69.
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
-100
-75
-50
-25
0
25
50
75
0.00 	0.05 	0.10 	0.15 	0.20
Deformation,
 u [m]
Reaction,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
R 	R 	u	Point 1 	Point 4 	Column

-- 192 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 173
Figure 5.68 The deformation in the middle of the wall with decreased stiffness kd,
measured for point 1 and 4 compared to the deformation of a simply
supported beam.
Figure 5.69 The deformation in the middle of the wall with increased stiffness ki,
measured for point 1 and 4 are compared to the deformation of a
simply supported beam.
It can be noticed that for the wall with decreased stiffness the frequency of the support
reactions and deformation in the middle of the wall in the studied points along the
column are relatively similar to each other, compare Figure 5.66 and Figure 5.68.
This indicates that the response of the wall panels with such properties can be
compared to the response of a simply supported beam. Thus, the fact that the stiffness
-0.4
-0.3
-0.2
-0.1
0.0
0.1
0.2
0.3
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Deformation,
 u [m]
Time, t [s]
FE analysys-coparison def i middle of wall to middle of column
Wall - Point 1 	Wall - Point 4 	Simply supported beam
-0.15
-0.10
-0.05
0.00
0.05
0.10
0.15
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
FE analysys-coparison def i middle of wall to middle of column
Wall - Point 1 	Wall - Point 4 	Simply supported beam

-- 193 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	174
of the column varies along its length is not so important when dealing with a structure
where the stiffness of the wall is considerably decreased.
For the wall with increased stiffness, on the other hand, the fact that the stiffness of
the column varies has a considerable influence on the reaction at the wall supports as
well as on the deformation in the middle of the wall, compare Figure 5.67 and
Figure 5.69. This indicates that the wall with increased stiffness can be compared to a
beam supported on springs, which stiffness corresponds to the stiffness of the column
in the points along its length. In summary, the stiffness of the column becomes an
important parameter for a structure with a wall panel provided with higher stiffness.
5.7.2.2 Influence of stiffness
For the elastic model, the stiffness of the wall has been varied according to
Section 5.7.2.1. The column simulated in SDOF has been subjected to the Direct load,
Reaction load 1, 2 and 3 according to Figure 5.56, Figure 5.58 and Figure 5.62,
respectively. For each case of reaction load the resulting deformation of the column
has been compared to the deformation caused by application of the Direct load, see
Figure 5.57, Figure 5.59, Figure 5.60, Figure 5.61 and Figure 5.63. The deformation
obtained from the Direct load in the SDOF calculations has been compared to the
deformation obtained in the 3D FE analysis, Figure 5.64. The support reactions and
deformation for wall panel 1 and 4 according to Figure 5.65, for the decreased and
increased stiffness of the wall, have been also compared.
A conclusion that can be drawn is that if the stiffness of the wall is decreased, the wall
can be related to the behaviour of a simply supported beam. If the stiffness of the wall
is increased, the response of the wall corresponds to the response of a beam supported
on springs where the stiffness of the springs corresponds to the stiffness of the column
in different regions along its length. This is illustrated in Figure 5.70.
A structure with an infinitively stiff wall is briefly mentioned in Section 5.6.1.1,
where the results from the analysis of the first bending mode of the 3D FE model are
presented. The first bending mode only allows for deformation of the column, and
hence, the wall stays undeformed. Thus, the behaviour of the wall corresponds to the
behaviour of an infinitively stiff element. The deformation of the column in such case
corresponds the deformation obtained when the column is subjected to the Direct
load. This means that the load applied on the wall is instantaneously transferred from
the wall to the column. The wall does not deflect but rather translates in the direction
of the load application, i.e. the deformation for each point along every wall panel is
the same.

-- 194 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 175
(a) (b)
kcolumn
kwall.decreased
kwall.decreased << kcolumn
kcolumn
kwall.increased
kwall.increased >> kcolumn
uc ≠ 0
uc ~ 0
uw
uw
Figure 5.70 (a) When the stiffness of the wall is decreased, the behaviour of the
structure becomes similar to the behaviour of a simply supported
beam. (b) When the stiffness of the wall is increased, the response
corresponds to the response of a beam supported on springs.
In summary, different responses are obtained depending on the stiffness of the wall.
Thus, the stiffness of the wall has proved to be an important parameter which
considerably influences the response of the column. The Direct load application in
SDOF is on the safe side compared to the 3D FE analysis for all stiffnesses of the
wall.
Elasto-plastic model	5.7.3
5.7.3.1 Parameters studied
For the elasto-plastic model, only the internal resistance of the wall is varied while the
stiffness is unchanged and corresponds to the stiffness of the wall in the previous
study, ku, see Table 5.3. The first internal resistance used in the parametric analysis is
the unchanged resistance, Rm.u, which is the same as in the previous study. It is
calculated according to equation (F.10) with the dimensions and properties as shown
in Figure 5.3, Table 5.1 and Table 5.2. The other resistances used corresponds to the
resistance from the previous study, Rm.u, decreased and increased with a factor 2,
resulting in Rm.d and Rm.i, respectively. The studied cases for the elasto-plastic model
are presented in Figure 5.71. In Table 5.18 the values of the internal resistance of the
wall for which the study is conducted are presented.

-- 195 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	176
u
R
Rm.u
Rm.i =2Rm.u
Rm.d = Rm.u/2
ku
Figure 5.71 Studied cases of the elasto-plastic response model adapted for the
wall in a frame structure. Only the internal resistance is varied. The
stiffness is the same for all cases.
Table 5.18 The studied values of internal resistance of one wall panel.
Internal resistance of wall
panel
Rm.d
[kN]
Rm.u
[kN]
Rm.i
[kN]
25 50 100
5.7.3.2 Loads and deformation
For the elasto-plastic model the column simulated in SDOF is subjected to the Direct
load, Reaction load 5 and 6, according to Figure 5.41.
Reaction load 5 obtained for the studied values of resistances is presented in
Figure 5.72 together with the Direct load.

-- 196 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 177
Figure 5.72 Reaction load 5 obtained in SDOF for different values of internal
resistance of the wall together with the Direct load.
For each case of Reaction load 5 the resulting deformation of the column is compared
to the deformation caused by the application of the Direct load in Figure 5.73.
Figure 5.73 Comparison of the deformation in the middle of the column obtained
in SDOF for the different cases of Reaction load 5 in Figure 5.72 and
the deformation caused by the Direct load.
The largest deformation is obtained for the Direct load. For Reaction load 5, the
simplified method for the analytical calculations of the deformation of the frame,
proposed in Johansson (2013), provides results on the safe side. The magnitudes of
deformation for analysed cases are presented in Table 5.19. Similarly as when the
0
500
1 000
1 500
2 000
2 500
3 000
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Load
 F, R [kN]
Time, t [s]
loads-elasto-plastic reaction load 5
R 	R 	R 	Direct load	m - unchanged 	m - decreased 	m - increased
-0.02
0.00
0.02
0.04
0.06
0.08
0.10
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
SDOF-elastio-plastic reaction 5
R 	R 	R 	Direct load	m - unchanged 	m - decreased 	m - increased

-- 197 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	178
stiffness of the wall was varied, an increase in the internal resistance leads to an
increase in deformation, which is explained in following paragraphs.
Table 5.19 Maximum deformation of the column obtained for the Direct load and
for Reaction load 5 in SDOF.
Direct load Reaction load 5
All cases of Rm Increased Rm,
Rm.i
Unchanged Rm,
Rm.u
Decreased Rm,
Rm.d
umax
[m] 0.088 0.061 0.050 0.018
For Reaction load 5 the magnitude of the impulse I is the same for each case of
internal resistance, see Figure 5.74. As the stiffness ku is also the same, the maximum
value of resistance Ri reached for the case with increased resistance Rm.i is higher than
for the case with decreased resistance Rm.u, compare Figure 5.74a to Figure 5.74b.
Thus, the reaction acting on the column and the corresponding deformation of the
column for a case with increased internal resistance is also higher.
(a)
t
R
Rm.i = 4Rm.d
Rm.d
t
R
Rm.i
Rm.d
Rd
(b)
Ri
ku ku
ti td
I
I
Figure 5.74 The maximum value of reaction for Reaction load 5 in case of a wall
with: (a) increased resistance; (b) decreased resistance.
Moreover the duration of Reaction load 5 for a case with increased resistance, ti, is
shorter than for the case with decreased resistance, tu. Thus, the effect of the support
reaction for the case with increased resistance is more similar to the effect of the
Direct load.
Reaction load 6 for the considered magnitudes of internal resistance is presented in
Figure 5.75. For the case when the wall has an increased resistance Rm.i, Reaction
load 6 corresponds to the elastic model. The chosen impulse is not big enough for the
resistance of wall to reach the limiting value Rm.i. Instead, after absorbing all energy
transferred from the impulse, the reaction load starts to decrease before reaching Rm.i.
This effect is further explained in following paragraphs.

-- 198 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 179
Figure 5.75 Reaction load 6 obtained in SDOF for different values of internal
resistance of the wall together with the Direct load.
The deformation of the column caused by Reaction load 6 for the different cases of
internal resistance are compared to the deformation caused by the direct application of
the impulse load in Figure 5.76. The magnitudes are compiled in Table 5.20.
Figure 5.76 Comparison of the deformations in the middle of column, obtained in
SDOF for the different cases of Reaction load 6 together with the
deformation caused by the Direct load.
0
500
1 000
1 500
2 000
2 500
3 000
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30
Load
 F, R [kN]
Time, t [s]
loads-elasto-plastic reactio load 6
R 	R 	R 	Direct load	m - unchanged 	m - decreased 	m - increased
-0.04
0.00
0.04
0.08
0.12
0.16
0.20
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
SDOF-elastio-plastic reaction load 6
R 	R 	R 	Direct load	m - unchanged 	m - decreased 	m - increased

-- 199 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	180
Table 5.20 Maximum deformation of the column obtained for the Direct load and
for Reaction load 6 in SDOF.
Direct load Reaction load 6
All cases of Rm Increased Rm,
Rm.i
Unchanged Rm,
Rm.u
Decreased Rm,
Rm.d
umax
[m] 0.088 0.170 0.077 0.018
Here, it can be noticed that the case with increased resistance results in a larger
deformation of the column than the Direct load. For this case of Reaction load 6 the
position on the curves describing the development of the reaction in time is illustrated
Figure 5.77.
t
R
Rm.u
Rm.i = 2Rm.u
Rm.d = 0.5Rm.u
Ii
Figure 5.77 Development of the support reaction of the wall with increased internal
resistance, Rm.i, for Reaction load 6.
As can be seen in Figure 5.77, the considered reaction does not reach the value of the
resistance of the wall, Rm.i, as the chosen impulse magnitude for the Direct load Ik (see
Table 5.8) is not large enough. In this case the response is completely elastic. Thus,
the total impulse for this reaction load, Ii, is twice as large as for the Direct load, Ik.
For the wall provided with internal resistance Rm.u the Reaction load 6 reaches the
value of the internal resistance of the wall, see Figure 5.78.
t
R
Rm.u
Rm.i = 2Rm.u
Rm.d = 0.5Rm.u
Iu
Figure 5.78 Development of the support reactions coming of the wall with internal
resistance as in the previous study, Rm.u, for Reaction load 6.

-- 200 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 181
The deformation obtained from the Direct load in SDOF is compared to the
deformation obtained in the 3D FE analysis in Figure 5.79. The maximum
deformation obtained for the different cases is presented in Table 5.21.
Figure 5.79 Comparison of deformations in the middle of the column obtained in
SDOF for the Direct load and the deformation from the FE 3D
analysis for the different cases of internal resistance of the wall.
Studying Figure 5.79 and Table 5.21 it is obvious that the simplified method, i.e. the
Direct load, provides results on the safe side and the deformation of the column
increases with increasing internal resistance of the wall.
Table 5.21 Maximum deformation of the column obtained in SDOF for the Direct
load the deformation from the 3D FE analysis for the different cases
of internal resistance of the wall according to Figure 5.71.
SDOF Direct load
All cases of Rm
FE 3D
Increased Rm,
Rm.i
FE 3D
Unchanged Rm,
Rm.u
FE 3D
Decreased Rm,
Rm.d
umax
[m] 0.088 0.046 0.020 0.019
5.7.3.3 Investigation of wall panels in FE model
The support reactions and deformation for the wall panels are measured along the
column in points illustrated in Figure 5.80. The deformation in the middle of the
column is plotted against the wall support reactions for point 1 and 4 for the decreased
and increased resistance in Figure 5.81 and Figure 5.82, respectively. The support
reactions in all points along the column compared to the support reactions for a
-0.04
-0.02
0.00
0.02
0.04
0.06
0.08
0.10
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
3D el-l
FE 3D R 	FE 3D R
FE 3D R 	SDOF - Direct load
m - unchanged 	m - decreased
m - increased

-- 201 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	182
simply supported beam are shown in Section G.4.2. The deformation in the middle of
the wall for point 1 and 4 for the decreased and increased resistance of the wall are
compared to the deformation of a simply supported beam in Figure 5.83 and
Figure 5.84, respectively.
1
2
3
4
5
6
7
Figure 5.80 The different points along the column, for which the support reactions
and the deformations, in the middle of the wall, are measured.
Figure 5.81 Comparison of the deformation in the middle of the column and the
support reactions from one wall panel in point 1 and 4 for the case with
decreased internal resistance of the wall.
-0.02
-0.01
0.00
0.01
0.02
0.03
0.04
-20
-10
0
10
20
30
40
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Deformation,
 u [m]
Reaction,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
R 	R 	u	Point 1 	Point 4 	Column

-- 202 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 183
Figure 5.82 Comparison of the deformation in the middle of the column and the
support reactions from one wall panel in point 1 and 4 for the case with
increased internal resistance of the wall.
Comparing Figure 5.81 and Figure 5.82 it is evident that the amplitude of sways in the
deformation curve of the column is strongly influenced by the magnitude of the
support reactions which is larger for the wall with increased resistance.
Figure 5.83 The deformation in the middle of the wall with decreased internal
resistance, measured in point 1 and 4, compared to the deformation
of a simply supported beam.
-0.02
0.00
0.02
0.04
0.06
-20
0
20
40
60
0.00 	0.02 	0.04 	0.06 	0.08 	0.10 	0.12 	0.14 	0.16 	0.18 	0.20
Deformation,
 u [m]
Reaction,
 R [kN]
Time, t [s]
coparison loads-deformations-elasto
R 	R 	u	Point 1 	Point 4 	Column
-0.05
0.00
0.05
0.10
0.15
0.20
0.25
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
Wall - Point 1 	Wall - Point 4 	Simply supported beam

-- 203 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	184
Figure 5.84 The deformation in the middle of the wall with increased internal
resistance, measured in point 1 and 4, compared to the deformation
of a simply supported beam.
It can be noticed that wall panels with decreased internal resistance show elasto-
plastic behaviour and the frequencies are quite similar. When the internal resistance is
very low, the reaction forces and deformations of the wall behave more similar to
each other. The wall panels with increased internal resistance have elastic behaviour
since the internal resistance is not reached (see Figure 5.77)and thus the frequencies
are quite different.
5.7.3.4 Influence of internal resistance
For the elasto-plastic model, the internal resistance of the wall is varied according to
Section 5.7.3.1. The column simulated in SDOF has been subjected to the Direct load,
Reaction load 5 and 6, according to Figure 5.41. For each case of Reaction load the
resulting deformation of the column has been compared to the deformation caused by
application of the Direct load, see Figure 5.73 and Figure 5.76. The deformation
obtained from the Direct load in SDOF has been compared to the deformation
obtained in the 3D FE analysis, Figure 5.79. The deformation and support reactions
for the wall panel 1 and 4, according to Figure 5.80, for the decreased and increased
resistance of the wall, have also been compared.
It is clear that the deformation of the column as well as the reaction forces from the
wall panels increases with increasing internal resistance of the wall.
When the internal resistance of the wall is decreased, the simplified method in SDOF
always provides results on the safe side. For the case when the internal resistance of
the wall panels is increased, the simplified method is on the safe side for all cases
except for Reaction load 6, see Figure 5.76. However, Reaction load 6 can be
considered to be excessive since the impulse of the load is twice as large as the
impulse of the External load applied on the structure, see Figure 5.77. Moreover, the
deformation from 3D FE analysis, which is considered to provide the most realistic
-0.20
-0.15
-0.10
-0.05
0.00
0.05
0.10
0.15
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
Wall - Point 1 	Wall - Point 4 	Simply supported beam

-- 204 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 185
results, are lower than in SDOF when the Direct load is applied. Therefore, the
simplified method can be considered to be on the safe side.
When the wall panels have decreased internal resistance, the internal resistance is
reached and the panels have elasto-plastic behaviour. For the case of wall panel with
resistance Rm.i, the internal resistance is not reached why the panels have elastic
behaviour for the considered load, see Figure 5.77.
5.8 Concluding remarks
The aim of this study was to evaluate the concept of load application in the simplified
method of the frame analysis proposed by Johansson (2013). Both this method, when
applying a direct load, as well as applying the load due to dynamic reaction of the
wall, on the column, has been implemented in the SDOF system. The results from the
analytical method have been compared with a 3D FE analysis. Finally, a parametric
study is carried out in order to provide a more comprehensive understanding of the
response of the studied structure subjected to impulse load.
One main conclusion from this study is that when comparing the SDOF analysis and
the 3D FE analysis, for each type of load studied, the SDOF analysis provides results
on the safe side.
When comparing the results obtained in SDOF for the different loads for the elastic
model, the direct load did not result in the largest deformation. This was due to the
fact that the frequency of the reaction loads coincided with the frequency of the
deformation, which increased the deformation further. The largest deformation was
obtained for the reactions prolonged in time which can be considered as critical.
However, as the largest deformation occurs further in time it can be disregarded with
consideration to the natural damping effect.
For the elasto-plastic response the direct application of load provided results much on
the safe side compared to the 3D analysis. Substituting this load for the dynamic
reaction still provided conservative results but the difference to the response of the 3D
FE analysis was decreased.
The plastic deformation capacity check showed that for the SDOF simulations, the
structure did not possess the capacity to withstand the different loads if reinforcement
of Class B was used. If Class C was used, the structure did possess the capacity to
withstand the Direct load and the first part of the delayed load, but not when it was
extended. The 3D FE analysis showed that the structure would not collapse for
reinforcement of Class B nor Class C, proving that the SDOF calculations are well on
the safe side.
When adapting the support reactions of a simply supported beam in the analytical
method, it is obvious that they cannot be fully simulated using a SDOF model. This is
due to the fact that the support of the wall panels is the column, which stiffness
corresponds to a spring and not a fixed support. Because of this the true behaviour of
the structure is very complicated to create in the SDOF model.
The 3D FE analysis also showed that the shape of the deformation curve for the
column does not act as in a 2D FE analysis. This issue has been proved to be strongly
influenced by the difference in frequencies of the different support reactions from the
wall panels. The divergence of the frequencies in reaction loads decreases the effect
of the load on the column and makes the simulation of the response difficult to

-- 205 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	186
conduct in the analytical method. It should be remembered that this method of
analysis should be simple and fast to implement. Simultaneously it should provide
good results with an acceptable margin of safety. The analytical method has not
provided satisfactory results in this study. The obtained differences with regard to the
FE analysis are large and even though they are on the safe side they cannot be fully
accepted. Further investigations of the 3D response are recommended.
The 3D FE model was built of several wall panels instead of one wall, which created
seven point loads along the column instead of one uniformly distributed load. In
reality, these wall panels would be connected as one and it is not studied if the
reaction forces in the different support points would counteract in the way they did in
this analysis, creating an uneven behaviour of the column.
It is worth to mention that the different response models provided different values of
deformation of the column. For the simplified method conducted in SDOF the
difference between the deformation of the column simulated with the elastic and
elasto-plastic response model is about 50 %. This is due to the fact that the internal
resistance in the elasto-plastic case forces the reaction from the wall panels to have a
lower magnitude and a longer duration, which is less destructive for the column.
The parametric study proved that for high values of stiffness and internal resistance of
the wall the deformation of the wall is small. However the deformation of the column
is larger than for the case with low stiffness and low internal resistance of the wall.
Thus, the proper choice of wall parameters becomes a critical issue as it affects the
response of the column which is the load bearing element in the considered structure.
A conclusion that can be drawn is that if the stiffness of the wall is decreased, the wall
can be related to the behaviour of a simply supported beam. If the stiffness of the wall
is increased, the response of the wall corresponds to the response of a beam supported
on springs.
Moreover, when comparing the results from the simplified method to the deformation
obtained in the 3D FE analysis, the analytical method proposed by Johansson (2013)
provides results on the safe side for all cases studied. However, when the parameters
for which the study is done are further increased the difference between the results
from the analytical and numerical method decreases.

-- 206 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 187
6 Conclusions
6.1 Final comments
Parametric beam study	6.1.1
A parametric beam study was carried out in order to investigate the important
parameters for the concrete sections with reinforcement at both sides subjected to
impulse load. The influence of including the top reinforcement in the calculations was
also evaluated. It was proven that for most cases it could be considered conservative
to neglect the top reinforcement when calculating the internal work. However, for a
certain interval the internal energy was higher for a case without top reinforcement
than for a case with top reinforcement due to decrease in the plastic rotation capacity
curve in Eurocode 2. Within these intervals the conservative way would be to
consider the top reinforcement. However, if the top reinforcement did not yield it did
not influence the internal resistance in a significant way and could then be
disregarded.
A study of different interpretations of the distance to the reinforcement from the top
of the beam, d, depending on the neutral axis was also carried out for calculations of
the plastic deformation capacity. However, the conclusion is to follow the simplest
way of interpreting d, which is only considering the bottom reinforcement. For the
studied cases, this provided results on the safe side for most cases.
Structural response of a 2D frame	6.1.2
A single degree of freedom system, SDOF system, was used in order to simulate a 2D
frame where the front column was presented by a local SDOF model and the whole
frame was modelled with a global SDOF model. The response from the elastic local
and global model agreed well with the FE analysis. Thus it can be stated that a SDOF
system can be used in order to describe the linear elastic response of both the local
and global model. The local and global elastic models proved to provide results, in the
middle of the front column, that corresponded well with the FE analysis when
combined.
The elasto-plastic models were to be more complicated than the elastic. The structural
response model of the local frame model proved to be trilinear, even though the
material response model was bilinear, resulting in a higher first deformation peak. The
trilinear response model is due to the fact that the structure can develop two plastic
hinges, one at the fixed support and one in the span. A comparison between the
bilinear and trilinear structural response models showed that the obtained deformation
was roughly the same for the two models, and a bilinear response model is not on the
safe side, but can be used for estimations of the deformation. For cases with a low
plastic deformation capacity, it is suggested to be more careful when choosing a
simplified response model.
The global elasto-plastic model also proved to have a trilinear static response model in
the SDOF system. However, this static response model did not fully represent the
behaviour of the global frame since it showed some plastic deformation even though
the response obtained in the SDOF model was limited to elastic behaviour. The
response of the global model seemed to be affected by the local model and therefore,
it became complicated to describe in SDOF. An interaction between the local and

-- 207 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	188
global model is the probable reason for the behaviour in the 3D FE model. However,
this is not captured by the simplified models used in this study and to capture the
behaviour a more complex model is needed in order to describe the interaction of
additional modes of the frame. A complete understanding of this behaviour has not
been found and further investigations are needed in order to improve the
understanding.
Structural response of a 3D frame	6.1.3
The 3D behaviour of the front wall and front column of the frame has been
investigated where the wall was modelled as seven wall panels on each side of the
front column. A comparison was done between a simplified SDOF model, when the
total load was applied on the front column at the same time, and when the load
application was delayed due to the dynamic reaction of the wall. The approximated
method of simulating the 3D effect in the SDOF calculations was to first calculate a
load from a SDOF analysis simulating the response of the wall. The delayed load was
modelled by a 3D FE model with a column supporting the wall panels.
When comparing the SDOF analyses and the 3D FE analyses, for each type of load
studied, the SDOF analyses always provided results on the safe side. The simplified
method can be considered to be on the safe side, but since the difference can be quite
large compared to the FE model it can be concluded that there is room for
improvement.
The reaction loads with an impulse bigger than the direct load have proven not to
correspond better to the 3D FE analysis. Therefore the delayed load in SDOF is
recommended to be modelled with the same impulse as the external load.
Applying the load though the wall to the column in form of dynamic reaction, instead
of directly applying it on the column can have a favourable effect on the response of
the column. A less stiff wall induced less stress in the column down to a certain level
depending on the relationship between the stiffness and capacity of the column and
wall. A wall with a low stiffness and internal resistance provided a lower load on the
column.
6.2 Further investigations
The knowledge of reinforced concrete structures subjected to impulse load is limited.
Consequently, there are several investigations that can be carried out in order to get a
deeper knowledge within this subject, focusing on frame structures.
In the 2D frame study, the global elasto-plastic case was not fully understood why
further studies are recommended. The static response model did not completely
correspond with the dynamic results obtained in the FE analysis why further
investigations are recommended. Considering the interaction between the local and
global elasto-plastic models it is suggested that further investigations are carried out
to better predict the true behaviour of the frame. To study the interaction between the
local and global analysis a two degrees of freedom system is probably required.
Carlsson and Kristensson (2012) found a transformation factor for damping in the
central difference method for a simply supported beam. For a frame structure, this
transformation factor would differ from a simply supported beam and also would

-- 208 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 189
differ for the local and global models. A future study is recommended in order to find
these transformation factors and to explain the theoretical background of how to
determine them.
In this Master’s Thesis it has been assumed that the plastic hinges are formed when
the maximum stress is reached without any consideration to the history of the
reinforcement. It can be questioned if the reinforcement changes properties after the
plastic hinges have been formed in both directions several times. This is a subject
which has not been further investigated in this Master’s Thesis.
In the 3D FE analysis, the 3D FE model was built of several wall panels instead of
one wall model. This created seven point loads along the column instead of one
uniformly distributed load. In reality, these wall panels would be connected and it is
not sure if the reaction forces at the different wall supports would counteract in the
same way as in this analysis. Therefore, this FE model cannot be considered to
simulate the true behavior of the structure. Further studies of the 3D structure are
desierable to provide a deeper understand the resulting response and to capture it with
a more simple model.

-- 209 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	190
7 References
ADINA (2011): Theory and Modelling Guide, Vol 1: ADINA Solids & Structures
Report ARD 10-8, ADINA R & D, Inc., Watertown, MA. USA.
Al-Emrani, M. Engstöm, B. Johansson, M. Johansson. P. (2011): Bärande
konstruktioner. Report 2011:11, Chalmers University of Technology, Division of
Structural Engineering, Göteborg, Sweden.
Andersson S. och Karlsson H. (2012): Structural Response of Reinforced Concrete
Beams Subjected to Explosions. Division of Structural Engineering, Concrete
Structures, Chalmers University of Technology, Master’s Thesis 2012:103,
Göteborg, Sweden.
Augustsson R. och Härenstam M. (2010): Design of reinforced concrete slab with
regard to explosions. Division of Structural Engineering, Concrete Structures,
Chalmers University of Technology, Master’s Thesis 2010:38, Göteborg, Sweden.
Bathe K-J. (1996): Finite Element procedures. Prentice Hall, New Jersey, USA.
Biggs J.M. (1964): Introduction to Structural Dynamics. McGraw-Hill Inc., New
York, USA.
Carlsson M. och Kristensson R. (2012): Structural Response With Regard to
Explosions - Mode Superposition, Damping and Curtailment. Division of
Construction Sciences, Structural Mechanics, Lund University of Technology,
Report TVSM - 5185, Göteborg, Sweden.
CEN (2004): Eurocode 2: Design of concrete Structures – Part 1-1: General rules and
rules for buildings. European Comittee for Standardization, Brussels, Belgium.
Engström B. (2011): Design and analysis of continuous beams and columns, Report
2007:3, Edition 2011. Division of Structural Engineering, Concrete Structures,
Chalmers University of Technology, Göteborg, Sweden.
Fortifikationsverket (2011): FortSkydd. Bilaga till Fortifikationsverkets
Konstruktionsregler FKR 2011. Dnr 4535/2011, Försvarsmakten
Johansson M. och Laine L. (2007): Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 1: Last av luftstötvåg. Räddningsverket, Rapport
B54-232/07, Karlstad.
Johansson M. och Laine L. (2012a): Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 3: Kapacitet hos byggnader. MSB, Rapport MSB
0142-10, Sverige.
Johansson, M. (2013), Ph. D., Reinertsen Sverige AB, Sweden.
Johansson M. (2013): Stålram. Myndigheten för samhällsskydd och beredskap
(MSB), MSB:s dokumentserie för beräkning av impulsbelastad konstruktion,
Dokument B05-102, Karlstad.
Lundh H. (2005): Hållfasthetslära. Kungliga Tekniska Högskolan, Stockholm,
Sweden
MATLAB. Version R 2013 a.

-- 210 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 191
Nyström U. (2006): Design with regard to explosions. Division of Structural
Engineering, Concrete Structures, Chalmers University of Technology, Master’s
Thesis 2006:14, Göteborg, Sweden.
MSB (2009): Skyddsrumsregler SR 09. Myndighete för samhällsskydd och beredskap
(MSB), författad av Ekengren B., Beställningsnummer: B54-141/09, Karlstad,
Sweden.

-- 211 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	192
APPENDIX A Hand Calculations
Introduction	A.1
In order to fast get a result of the maximum values, hand calculations can be used
instead of numerical SDOF calculations or FE analyses. The hand calculations are not
time dependent. The equations used are stated in following sections.
Deformations	A.2
The maximum deformations for the elastic, plastic and elasto-plastic case are
calculated as
m
k
pl mR
I
u 2
2
	
(7.2)
m
k	m
pl	,	ep	el,	ep	ep mR
I
k
R
u	u	u 2	2
2
				
(7.3)
where Ik is the characteristic impulse load, m is the mass, k is the stiffness, ω is the
angular frequency and Rm is the resistance. The transformation factors used to create
the equivalent mass and stiffness are found in Table 2.4 and Table 2.5.
Stiffness and moment of inertia	A.3
The stiffness for a simply supported beam is calculated as
3
5
384
L
EI
k 	
(7.4)
where E is the Young´s modulus and L is the length. The moment of inertia, I, is for
the elastic case is calculated in different ways depending on if the section is cracked
or not. For an uncracked rectangular cross section, state I, the moment of inertia is
calculated as
2	2	2
3
)	(	(	)	'	(	'	(	)
2
(
12 cg	s	cg	s	cg	I x	d	A	x	d	A	x
h
bh
bh
I 															
	
		
(7.5)
where b is the width, h is the height and xcg is the distance from the top of the beam to
the centre of gravity of the cross section. The notations As´ and As represents the area
of the top and bottom reinforcement and d´ and d is the distance from the top of the
beam to the top and bottom reinforcement, respectively. The parameters used for
calculating the moment of inertia of the uncracked beam are shown in Figure 7.1.
	m
I
km
I
u k	k
el 		
(7.1)

-- 212 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 193
b
As
xcg=h/2
d h
c1
d'
As’
Figure 7.1 Model illustrating the parameters of the beam.
The factor α is the relation between the Young’s modulus of steel Es and concrete Ec
calculated as
c
s
E
E

		
(7.6)
For a case where the cross section is symmetric, the centre of gravity, xcg, is calculated
as
2
h
xcg 	
(7.7)
For a case where the cross section is cracked, state II, equation (7.8) is used to
calculate the moment of inertia:
2
3
3 )	x	d	(	A	)	'	d	x	(	'	A
bx
I II	s	II	s
II
II 						
	
		
(7.8)
where xII is the distance from the top of the beam to the neutral axis. For a cracked
beam the neutral axis and the centre of gravity doesn´t coincide like it does for the
uncracked section. In a case where no axial forces are acting on the beam, the neutral
axis is calculated, using area equilibrium, as
)	x	d	(	A	)	'	d	x	(	'	A	(
bx II	s	II	s
II 							
	
	
2
2
(7.9)
Moment resistance	A.4
A.4.1 Main concept
For a plastic case, the maximum resistance needs to be calculated in order to calculate
the displacement. For a simply supported beam with a uniformly distributed load, the
maximum resistance, Rm, is calculated as
L
M
R rd
m
8
	
(7.10)

-- 213 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	194
where L is the length. The resisting moment, Mrd, is calculated by force and moment
equilibrium from Figure 7.2. The calculations depend on if the section has top
reinforcement or not and if the reinforcement yielding or not. The different
calculations are presented in Section A.4.2 and A.4.3.
b
As
x
d h
c1
εcu
εs
d-x
x
fcd
Fs
0.4x	0.8x
Fc
d = h – c1 z = d – 0.4x
zMrd
d'
As’
εs’ Fs’
d'
Figure 7.2 Concrete bream with top and bottom reinforcement.
The design values for steel, fyd, and concrete strength, fcd, are calculated as
2	.	1
ck
cd
f
f 	
(7.11)
0	.	1
yk
yd
f
f 	
(7.12)
where fck is the characteristic concrete strength and fyk is the characteristic yield
strength. The relation between the steel yield strength, fyd, and the modulus of
elasticity of steel, Es, is noted by	sy	
 and calculated as
s
yd
sy E
f

		
(7.13)
A.4.2 Section without top reinforcement
For a case without top reinforcement, the neutral axis, xIII, when the ultimate concrete
strain is reached is calculated using equation (7.14) assuming that the bottom
reinforcement is yielding.
b	f	.
f	A
x
cd
yd	s
III 	

 8	0
(7.14)
To check if the reinforcement is yielding or not, a control of the strain at the level of
bottom reinforcement, εs, is done as
sy	cu
III
III
s x
x	d

	
	 	

	
(7.15)

-- 214 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 195
where	cu	
 is the ultimate concrete strain.
For a case when the bottom reinforcement is not yielding, a new position of the
neutral axis, xIII, is calculated by solving
0	8	0 			

			 s	cu	s
III
III
III	cd E	A
x
x	d
b	x	.	f	
	
(7.16)
Now, the moment capacity, Mrd, can be calculated by moment equilibrium around the
bottom reinforcement:
)	x	.	d	(	b	x	.	f	M 	III	III	cd	rd 							 	4	0	8	0	
(7.17)
A.4.3 Section with top reinforcement
For a case with top reinforcement, the neutral axis is first calculated assuming only
yielding at the bottom reinforcement. The neutral axis, xIII, is then decided from
0	8	0 	

							 s
III
cu	s	yd	s	III	cd E
x
x	'	d
'	A	f	A	b	x	.	f	
	
(7.18)
To check if the top reinforcement is yielding or not, the strain at the top reinforcement
is calculated using equation (7.19) and compared with the steel yield strain	sy	
 :
cu
III
III
s x
x	´	d
´	

	 

	
(7.19)
If the top reinforcement is not yielding, εs´ < εsy, the moment resistance is found as
)	'	d	d	(	E
x
x	'	d
'	A	)	x	.	d	(	b	x	.	f	M s
III
III
cu	s	III	III	cd	rd 		

									
		4	0	8	0	
(7.20)
However, if the top reinforcement is yielding, εs´ ≥ εsy, a new neutral axis, xIII, is
estimated from
0	8	0 						 yd	s	yd	s	III	cd f	A	f	'	A	b	x	.	f	
(7.21)
The moment resistance for this case is
)	'	d	d	(	f	'	A	)	x	.	d	(	b	x	.	f	M yd	s	III	III	cd	rd 										 4	0	8	0	
(7.22)
According to Eurocode 2, the contribution to the moment capacity of the compressive
reinforcement can only be taken into account if stirrups with minimum allowable
spacing are provided.

-- 215 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	196
Maximum deformation capacity	A.5
The maximum deformation can be calculated by multiplying the plastic rotation
capacity with regard to shear slenderness, θrd, with the distance between a point with
zero moment and a point where a plastic hinge has occurred, L0. For a simply
supported beam this is shown in Figure 7.3.
L0
θrd
urd
Figure 7.3 Plastic rotation capacity and distance to the plastic hinge in the middle
of the span for a simply supported beam.
The maximum deformation, urd, can be then calculated as
0	0	´ L	k	L	u pl	rd	rd 				
	
	 	
(7.23)
The plastic rotation, θpl, is received from a graph, Figure 7.4, according to
Eurocode 2, CEN (2004).
x / d
pl [10 -3 rad]
Class C
Class B
Figure 7.4. Diagram for evaluating the plastic rotation capacity according to
Eurocode 2, CEN (2004).
Since the graph doesn´t contain exact values, an interpretation of the graph used for
the analyses conducted in this Master’s Thesis is the following for reinforcement of
Class B, ≤ C 50/60.
For	159	.	0	0 	 d
x

-- 216 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 197
3
10
159	.	0
7
7 
	




 		 d
x
pl	
	
(7.24)
For	45	.	0	159	.	0 	 d
x
3
10	159	.	0
291	.	0
5	.	8
7	.	13 
	




 




 			 d
x
pl	
	
(7.25)
For reinforcement of Class C, ≤ C 50/60, the interpretation of the graph is as follows.
For	085	0	0 .
d
x 	
3
10
085	0
6	16
7	16 
	




 		 d
x
.
.
.	pl	
	
(7.26)
For	45	0	085	0 .
d
x
. 	
3
10	085	0
365	0
9	25
3	33 
	




 




 			 .
d
x
.
.
.	pl	
	
(7.27)
pl	
	
is multiplied by a factor kλ calculated as
where
d
L0

		
(7.29)
Internal and external work	A.6
The internal energy Wi can be calculated as the area under the graph describing the
relationship between the static load and the deformation. For an elastic case the
internal energy is expressed as
2
2
el
el.i
u	k
W 
	
(7.30)
where k is the stiffness and uel is the elastic deformation. For the plastic case the
internal energy can be calculated as
3

 	k	
(7.28)

-- 217 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	198
pl	m	pl	.i u	R	W 		
(7.31)
For a characteristic impulse Ik where Rm is the internal resistance and upl is the plastic
deformation the external energy can be calculated as
m
I
W k
e 
 2
2
(7.32)
where Ik is the characteristic impulse load and m is the mass.
Equivalent static load	A.7
In order to approximate a load that is easier to relate to for most engineers, a dynamic
load can be translated into an equivalent static load. The size of the equivalent static
load in an elastic case, Qel, is
el	el u	k	Q 		
(7.33)
where the stiffness k and the deformation uel is depending on if the structure is in
state I or II, i.e. if it is uncracked or cracked.
For a plastic case the equivalent static load, Qpl, is equal to the maximum
resistance Rm
m	pl R	Q 	
(7.34)
From the equivalent static loads, the resulting moment, Mrd, and shear, Vrd, can for a
simply supported beam be calculated as
8
L	Q
M rd

	
(7.35)
2
Q
Vrd 	
(7.36)

-- 218 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 199
APPENDIX B Additional graphs for Parametric
beam study
Introduction	B.1
A compilation of the graphs from the parametric beam study, discussed in Section 3,
is presented in Section B.2 to Section B.13. The parametric beam study was
performed for two cases of calculating the effective depth d, called Case 1 and Case 2,
which are further described in Section B.1.1 and B.1.2, respectively.
B.1.1 Case 1
Case 1 is when the effective depth d is calculated as the distance from the centre of
the bottom reinforcement to the top edge of the beam, not depending on the position
of the neutral axis, as shown in Figure 3.2.
(a)
b
As
x
d h
As’
εs’
εs
(b)
b
As
x
d h
As’
εs’
εs
Figure B.1 Effective depth according to Case 1. Neutral axis is located: (a) below
top reinforcement layer, and (b) above.
B.1.2 Case 2
Case 2 considers the location of neutral axis when calculating the effective depth, d,
which is calculated as the distance from the centre of the bottom reinforcement to the
top edge of the beam when the neutral axis is below the top reinforcement. However,
if the neutral axis is located above the top reinforcement, d is the distance from the top
edge to the centre of gravity of the uncracked cross section, see Figure 3.3.

-- 219 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	200
εs
εs’
b
As
x
d=h/2
h
As’= As
Figure B.2 Calculation of effective depth for Case 2 when the neutral axis is
located above the centre of gravity of the top reinforcement.
Resistance versus deformation for Case 1	B.2
Figure B.3 Internal resistance, ultimate deflection and position on the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
200 mm and reinforcement
10 s 150.
0
25
50
75
100
125
150
0.00 	0.01 	0.02 	0.03 	0.04 	0.05 	0.06 	0.07
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_200_fi10
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2

-- 220 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 201
Figure B.4 Internal resistance, ultimate deflection and position on the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
200 mm and reinforcement
 20 s 200.
Figure B.5 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
300 mm and reinforcement
10 s 150.
0
50
100
150
200
250
300
350
0.00 	0.01 	0.02 	0.03 	0.04 	0.05 	0.06
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_200_fi20
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2
0
25
50
75
100
125
150
175
200
0.00 	0.01 	0.02 	0.03 	0.04
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_300_fi10
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A
BC
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2

-- 221 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	202
Figure B.6 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
300 mm and reinforcement
20 s 200.
Figure B.7 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
400 mm and reinforcement
 10 s 150.
0
100
200
300
400
500
600
0.00 	0.01 	0.02 	0.03 	0.04 	0.05
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_300_fi20
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2
0
50
100
150
200
250
300
0.00 	0.01 	0.01 	0.02 	0.02 	0.03 	0.03
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_400_fi10
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A
BC
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2

-- 222 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 203
Figure B.8 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
400 mm and reinforcement
 20 s 200.
Plastic rotation capacity for Case 1	B.3
Figure B.9 Plastic rotation capacity θpl vs. reinforcement amount ρ for a section
with a height of 200 mm.
0
100
200
300
400
500
600
700
800
0.000 	0.005 	0.010 	0.015 	0.020 	0.025 	0.030 	0.035
Resistance R
 [kN]
Deformation, u [m]
R_u_d1_400_fi20
Case A
Case B
Case C
x
d σ'
Case A
x
d
Case B
x
d
σ'
Case C
A	
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.05 	0.10 	0.15 	0.20 	0.25 	0.30 	0.35 	0.40 	0.45	
Plastic rotation
 	θpl[10
-3 rad]
x/d [-]
Plastic rotation 	θpl 	according to EC 2
0.0
2.5
5.0
7.5
10.0
12.5
15.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic rotation
 θpl [10
-3 rad]
Reinforcement amount, ρ [%]
Theta-ro for d1 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 223 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	204
Figure B.10 Plastic rotation capacity θpl vs. reinforcement amount ρ for a section
with a height of 300 mm.
Figure B.11 Plastic rotation capacity θpl vs. reinforcement amount ρ for a section
with a height of 400 mm.
0.0
2.5
5.0
7.5
10.0
12.5
15.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic rotation
 θpl [10
-3 rad]
Reinforcement amount, ρ [%]
Theta-ro for d1 h=300
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A
0.0
2.5
5.0
7.5
10.0
12.5
15.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic rotation
 θpl [10
-3 rad]
Reinforcement amount, ρ [%]
Theta-ro for d1 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 224 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 205
Internal work for Case 1	B.4
Figure B.12 Internal work vs. reinforcement amount ρ for a section with a height of
200 mm.
Figure B.13 Internal work vs. reinforcement amount ρ for a section with a height of
300 mm.
0.0
2.5
5.0
7.5
10.0
12.5
15.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d1 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A
0
5
10
15
20
25
30
35
40
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d1 h=300
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 225 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	206
Figure B.14 Internal work vs. reinforcement amount ρ for a section with a height of
400 mm.
Internal resistance for Case 1	B.5
Figure B.15 Internal resistance vs. reinforcement amount ρ for a section with a
height of 200 mm.
0
10
20
30
40
50
60
70
80
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d1 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A
0
100
200
300
400
500
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal resistance
 Rm [kN]
Reinforcement amount, ρ [%]
Rm-ro for d1 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 226 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 207
Figure B.16 Internal resistance vs. reinforcement amount ρ for a section with a
height of 300 mm.
Figure B.17 Internal resistance vs. reinforcement amount ρ for a section with a
height of 400 mm.
0
250
500
750
1 000
1 250
1 500
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal resistance
 Rm [kN]
Reinforcement amount, ρ [%]
Rm-ro for d1 h=300
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A
0
500
1 000
1 500
2 000
2 500
3 000
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal resistance
 Rm [kN]
Reinforcement amount, ρ [%]
Rm-ro for d1 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 227 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	208
Maximum plastic deformation for Case 1	B.6
Figure B.18 Maximum plastic deformation vs. reinforcement amount ρ for a section
with a height of 200 mm.
Figure B.19 Maximum plastic deformation vs. reinforcement amount ρ for a section
with a height of 300 mm.
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Maximum plastic deformation
 urd [m]
Reinforcement amount, ρ [%]
Ur-ro for d1 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Maximum plastic deformation
 urd [m]
Reinforcement amount, ρ [%]
Ur-ro for d1 h=300
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 228 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 209
Figure B.20 Maximum plastic deformation vs. reinforcement amount ρ for a section
with a height of 400 mm.
Sections with and without top reinforcement for	B.7
Case 1
In this section, the cases with top reinforcement, Case A, are compared with the ones
without top reinforcement, Case B, as described in equation (B.1) to (B.3). The ratio,
γ, varies with the reinforcement amount ρ and a compilation of the results are
presented in Figure 3.22 to Figure B.29. The effective depth, d, is calculated
according to Case 1 which is described in Section B.1.1.
B.	m
A.	m
R R
R
m 
		
(B.1)
where Rm.A is the internal resistance for Case A and Rm.B is the internal resistance for
Case B.
B.	rd
A.	rd
u u
u
rd 
		
(B.2)
where urd.A is the ultimate plastic deformation for Case A and urd.B is the ultimate
plastic deformation for Case B.
B.i
A.i
W W
W
i 
		
(B.3)
where Wi.A is the internal work for Case A and Wi.B is the internal work for Case B.
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Maximum plastic deformation
 urd [m]
Reinforcement amount, ρ [%]
Ur-ro for d1 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d
Case B
' = fyd
' = 0
x
d σ'
Case A

-- 229 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	210
Figure B.21 Ratio of internal work, Gamma Wi, vs. reinforcement amount ρ. The
section has a height of 200 mm.
Figure B.22 Ratio of internal work, Gamma Wi, vs. reinforcement amount ρ. The
section has a height of 300 mm.
0.8
1.0
1.2
1.4
1.6
1.8
2.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma wi d1 h=200

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Wi
0.8
1.0
1.2
1.4
1.6
1.8
2.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma wi d1 h=300

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Wi

-- 230 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 211
Figure B.24 Ratio of ultimate plastic deformation, Gamma urd, vs. reinforcement
amount ρ. The section has a height of 200 mm.
0.8
1.0
1.3
1.5
1.8
2.0
2.3
2.5
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma u
rd [-]
Reinforcement amount, ρ [%]
gamma urd d1 h=200

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
uRd
Figure B.23 Ratio of internal work, Gamma Wi, vs. reinforcement amount ρ. The
section has a height of 400 mm.
0.8
1.0
1.2
1.4
1.6
1.8
2.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma wi d1 h=400

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Wi

-- 231 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	212
Figure B.25 Ratio of ultimate plastic deformation, Gamma urd, vs. reinforcement
amount ρ. The section has a height of 300 mm.
Figure B.26 Ratio of ultimate plastic deformation, Gamma urd, vs. reinforcement
amount ρ. The section has a height of 400 mm.
0.8
1.0
1.3
1.5
1.8
2.0
2.3
2.5
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma u
rd [-]
Reinforcement amount, ρ [%]
gamma urd d1 h=300

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
uRd
0.8
1.0
1.3
1.5
1.8
2.0
2.3
2.5
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma u
rd [-]
Reinforcement amount, ρ [%]
gamma urd d1 h=400

x/d = 0.159

x/d = 0.45

x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
uRd

-- 232 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 213
Figure B.27 Ratio of internal resistance, Gamma Rm, vs. reinforcement amount ρ for
a section with a height of 200 mm.
Figure B.28 Ratio of internal resistance, Gamma Rm, vs. reinforcement amount ρ for
a section with a height of 300 mm.
0.9
1.0
1.1
1.2
1.3
1.4
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma R
m [-]
Reinforcement amount, ρ [%]
gamma rm d1 h=200



x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Rm
0.9
1.0
1.1
1.2
1.3
1.4
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma R
m [-]
Reinforcement amount, ρ [%]
gamma rm d1 h=300



x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Rm

-- 233 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	214
Figure B.29 Ratio of internal resistance, Gamma Rm, vs. reinforcement amount ρ for
a section with a height of 400 mm.
0.9
1.0
1.1
1.2
1.3
1.4
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma R
m [-]
Reinforcement amount, ρ [%]
gamma rm d1 h=400



x
d
Case B
 ' = fyd
' = 0
x
d σ'
Case A
Rm

-- 234 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 215
Resistance versus deformation for Case 2	B.8
x
d=h/2
Case A, xc
σ' 	x
d σ'
Case A, x>c
x
d
Case B
x
d=h/2
Case C, xc
x
d
σ'
Case C, x>c
Figure B.30 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
200 mm and reinforcement
 10 s 150.
0
25
50
75
100
125
150
0.00 	0.01 	0.02 	0.03 	0.04 	0.05 	0.06 	0.07
Resistance R
 [kN]
Deformation, u [m]
R_u_d2_200_fi10
Case A
Case B
Case C
A	B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.10 	0.20 	0.30 	0.40 	0.50
Plastic rotation
 θpl[10
-3 rad]
x/d [-]
Plastic rotation θpl according to EC 2

-- 235 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	216
x
d=h/2
Case A, xc
σ' 	x
d σ'
Case A, x>c
x
d
Case B
x
d=h/2
Case C, xc
x
d
σ'
Case C, x>c
Figure B.31 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
200 mm and reinforcement
 20 s 200.
0
50
100
150
200
250
300
350
0.00 	0.01 	0.02 	0.03 	0.04 	0.05 	0.06
Resistance R
 [kN]
Deformation, u [m]
R_u_d2_200_fi20
Case B
Case C
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.10 	0.20 	0.30 	0.40 	0.50
Plastic rotation
 θpl[10
-3 rad]
x/d [-]
Plastic rotation θpl according to EC 2

-- 236 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 217
x
d=h/2
Case A, xc
σ' 	x
d σ'
Case A, x>c
x
d
Case B
x
d=h/2
Case C, xc
x
d
σ'
Case C, x>c
Figure B.32 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
300 mm and reinforcement
 10 s 150.
0
25
50
75
100
125
150
175
200
0.00 	0.01 	0.02 	0.03 	0.04 	0.05 	0.06
Resistance R
 [kN]
Deformation, u [m]
R_u_d2_300_fi10
Case A
Case B
Case C
A
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.10 	0.20 	0.30 	0.40 	0.50
Plastic rotation
 θpl[10
-3 rad]
x/d [-]
Plastic rotation θpl according to EC 2

-- 237 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	218
x
d=h/2
Case A, xc
σ' 	x
d σ'
Case A, x>c
x
d
Case B
x
d=h/2
Case C, xc
x
d
σ'
Case C, x>c
Figure B.33 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for section with a height of
300 mm and reinforcement
 20 s 200.
0
100
200
300
400
500
600
0.00 	0.01 	0.02 	0.03 	0.04 	0.05
Resistance R
 [kN]
Deformation, u [m]
R_u_d2_300_fi20
Case A
Case B
Case C
A
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.10 	0.20 	0.30 	0.40 	0.50
Plastic rotation
 θpl[10
-3 rad]
x/d [-]
Plastic rotation θpl according to EC 2

-- 238 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 219
x
d=h/2
Case A, xc
σ' 	x
d σ'
Case A, x>c
x
d
Case B
x
d=h/2
Case C, xc
x
d
σ'
Case C, x>c
Figure B.34 Internal resistance, ultimate deflection and position in the plastic
rotation graph capacity (Eurocode 2) for a section with a height of
400 mm and reinforcement
 10 s 150.
0
50
100
150
200
250
300
0.00 	0.01 	0.02 	0.03 	0.04 	0.05
Resistance R
 [kN]
Deformation, u [m]
R_u_d2_400_fi10
Case A
Case B
Case C
A
B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.10 	0.20 	0.30 	0.40 	0.50
Plastic rotation
 θpl[10
-3 rad]
x/d [-]
Plastic rotation θpl according to EC 2

-- 239 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	220
x
d=h/2
Case A, xc
σ' 	x
d σ'
Case A, x>c
x
d
Case B
x
d=h/2
Case C, xc
x
d
σ'
Case C, x>c
Figure B.35 Internal resistance, ultimate deflection and position in the plastic
rotation capacity graph (Eurocode 2) for a section with a height of
400 mm and reinforcement
 20 s 200.
0
100
200
300
400
500
600
700
800
0.000 0.005 0.010 0.015 0.020 0.025 0.030 0.035 0.040
Resistance R [kN]
Deformation, u [m]
R_u_d2_400_fi20
Case A
Case B
Case C
A	B
C
5.0
7.5
10.0
12.5
15.0
0.00 	0.10 	0.20 	0.30 	0.40 	0.50
Plastic rotation
 θpl[10
-3 rad]
x/d [-]
Plastic rotation θpl according to EC 2

-- 240 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 221
Plastic rotation capacity for Case 2	B.9
Figure B.36 Plastic rotation capacity θpl vs. reinforcement amount ρ for a section
with a height of 200 mm.
Figure B.37 Plastic rotation capacity θpl vs. reinforcement amount ρ for a section
with a height of 300 mm.
0.0
2.5
5.0
7.5
10.0
12.5
15.0
17.5
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic rotation
 θpl[10
-3 rad]
Reinforcement amount, ρ [%]
Theta-ro for d2 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
0.0
2.5
5.0
7.5
10.0
12.5
15.0
17.5
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic rotation
 θpl[10
-3 rad]
Reinforcement amount, ρ [%]
Theta-ro for d2 h=300
Case A 	x/d = 0.159
Case B 	
x/d = 0.45 	 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B

-- 241 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	222
Figure B.38 Plastic rotation capacity θpl vs. reinforcement amount ρ for a section
with a height of 400 mm.
Internal work for Case 2	B.10
Figure B.39 Internal work Wi vs. reinforcement amount ρ for a section with a height
of 200 mm.
0.0
2.5
5.0
7.5
10.0
12.5
15.0
17.5
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Plastic rotation
 θpl[10
-3 rad]
Reinforcement amount, ρ [%]
Theta-ro for d2 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45

x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B	 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
0.0
2.5
5.0
7.5
10.0
12.5
15.0
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d2 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B

-- 242 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 223
Figure B.40 Internal work Wi vs. reinforcement amount ρ for a section with a height
of 300 mm.
Figure B.41 Internal work Wi vs. reinforcement amount ρ for a section with a height
of 400 mm.
0
5
10
15
20
25
30
35
40
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d2 h=300
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
0
10
20
30
40
50
60
70
80
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal work,
 Wi [kNm]
Reinforcement amount, ρ [%]
Wi-ro for d2 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B

-- 243 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	224
Internal resistance for Case 2	B.11
Figure B.42 Internal resistance Rm vs. reinforcement amount ρ for a section with a
height of 200 mm.
Figure B.43 Internal resistance Rm vs. reinforcement amount ρ for a section with a
height of 300 mm.
0
100
200
300
400
500
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal resistance
 Rm [kN]
Reinforcement amount, ρ [%]
Rm-ro for d2 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
0
250
500
750
1 000
1 250
1 500
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal resistance
 Rm [kN]
Reinforcement amount, ρ [%]
Rm-ro for d2 h=300
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B

-- 244 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 225
Figure B.44 Internal resistance Rm vs. reinforcement amount ρ for a section with a
height of 400 mm.
Maximum plastic deformation for Case 2	B.12
Figure B.45 Maximum plastic deformation urd vs. reinforcement amount ρ for a
section with a height of 200 mm.
0
500
1 000
1 500
2 000
2 500
3 000
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Internal resistance
 Rm [kN]
Reinforcement amount, ρ [%]
Rm-ro for d2 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.045
0.050
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Maximum plastic deformation
 urd [m]
Reinforcement amount, ρ [%]
Urd-ro for d2 h=200
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B

-- 245 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	226
Figure B.46 Maximum plastic deformation urd vs. reinforcement amount ρ for a
section with a height of 300 mm.
Figure B.47 Maximum plastic deformation urd vs. reinforcement amount ρ for a
section with a height of 400 mm.
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.045
0.050
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Maximum plastic deformation
 urd [m]
Reinforcement amount, ρ [%]
Urd-ro for d2 h=300
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.045
0.050
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Maximum plastic deformation
 urd [m]
Reinforcement amount, ρ [%]
Urd-ro for d2 h=400
Case A
Case B
x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B

-- 246 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 227
Sections with and without top reinforcement for	B.13
Case 2
The ratios, γ, plotted in this section are described in Section B.7.
Figure B.48 Ratio of internal work, Gamma Wi, vs. reinforcement amount ρ. The
section has a height of 200 mm.
Figure B.49 Ratio of internal work, Gamma Wi, vs. reinforcement amount ρ. The
section has a height of 300 mm.
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
2.25
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma Wi d2 h=200

x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
Wi
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
2.25
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma Wi d2 h=300

x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
Wi

-- 247 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	228
Figure B.50 Ratio of internal work, Gamma Wi, vs. reinforcement amount ρ. The
section has a height of 400 mm.
Figure B.51 Ratio of ultimate plastic deformation, Gamma urd, vs. reinforcement
amount ρ. The section has a height of 200 mm.
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
2.25
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma W
i [-]
Reinforcement amount, ρ [%]
gamma Wi d2 h=400

x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
Wi
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma u
rd [-]
Reinforcement amount, ρ [%]
gamma urd d2 h=200

x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
URd

-- 248 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 229
Figure B.52 Ratio of ultimate plastic deformation, Gamma urd, vs. reinforcement
amount ρ. The section has a height of 300 mm.
Figure B.53 Ratio of ultimate plastic deformation, Gamma urd, vs. reinforcement
amount ρ. The section has a height of 400 mm.
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma u
rd [-]
Reinforcement amount, ρ [%]
gamma urd d2 h=300

x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
URd
0.0
0.5
1.0
1.5
2.0
2.5
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma u
rd [-]
Reinforcement amount, ρ [%]
gamma urd d2 h=400

x/d = 0.159

x/d = 0.45
 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
URd

-- 249 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	230
Figure B.54 Ratio of internal resistance, Gamma Rm, vs. reinforcement amount ρ for
a section with a height of 200 mm.
Figure B.55 Ratio of internal resistance, Gamma Rm, vs. reinforcement amount ρ for
a section with a height of 300 mm.
0.9
1.0
1.1
1.2
1.3
1.4
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma
 Rm [-]
Reinforcement amount, ρ [%]
gamma Rm d2 h=200


 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
Rm
0.9
1.0
1.1
1.2
1.3
1.4
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma
 Rm [-]
Reinforcement amount, ρ [%]
gamma Rm d2 h=300


 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
Rm

-- 250 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 231
Figure B.56 Ratio of internal resistance, Gamma Rm, vs. reinforcement amount ρ for
a section with a height of 400 mm.
0.9
1.0
1.1
1.2
1.3
1.4
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Gamma
 Rm [-]
Reinforcement amount, ρ [%]
gamma Rm d2 h=400


 ' = fyd
' = 0
x
d=h/2
Case A, xc
σ'
x
d σ'
Case A, x>c
x
d
Case B
Rm

-- 251 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	232
APPENDIX C Trilinear structural response
models
Introduction	C.1
The object of this study is the beam shown in Figure C.1. The critical sections which
influences the response of this structure are presented in Figure C.1a. Point s in
Figure C.1b defines the section at the fixed support and Point f defines the midsection,
for which the maximum stresses are analysed.
q, P(t)
s f
s
f
(a) (b)
Figure C.1 (a) Critical sections in the studied beam. (b) Positions, within the
sections, where the maximum stresses occur.
Ultimate moments and resistances for the local frame	C.2
model
The resistance of the span and the critical support section can be established by
superimposing the moment diagrams for separate load cases. For a beam fixed at
both supports, the moment distribution in ultimate limit state, when the plastic
hinges at both considered sections has been formed, is presented in Figure C.2.

-- 252 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 233
q
L
Ms1 =Mrd
L/2 L/2
Ms2 =Mrd
Mf=Mrd
qL2/8
Figure C.2 Superimposing the moment diagrams for separate load cases.
This can be described as
 		2	1
2
2
1
8 s	s	f M	M	M
L	q 		

(C.1)
In the local model of the frame studied in Chapter 4, the column is described as a
structure with one fixed edge and one simply supported. In this case
0	2 	s	M	
(C.2)
and the equation (C.1) can approximately be written as
1
2
2
1
8 s	f M	M
L	q 	

(C.3)
Both critical sections, at the fixed support and in the span, are provided with the
same amount of reinforcement and as the calculations are made in ultimate limit
state, both sections will reach the moment capacity they were designed for, Mrd.
Thus,
rd	.	s	f M	M	M 	 1	
(C.4)
When the beam is subjected to increasing load, the section at the fixed support first
reaches its ultimate capacity for the load qs. The ultimate moment it can withstand is
8
2
1
L	q
M s
s

	
(C.5)

-- 253 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	234
When the load is further increased to qf, the ultimate moment which the section in
the span can withstand when the plastic hinge at the fixed support and in the span is
created and the collapse mechanism forms is calculated from equation (C.3) as
rd
f M
L	q
2
3
8
2


(C.6)
12
2
L	q
M f
f

	
(C.7)
Knowing the ultimate moment for both sections, Ms and Mf, the maximum resistance
for the section at the fixed support is established as
L
M
R rd
ms

 8
(C.8)
and for the critical section in the span as
L
M
R rd
mf

 12
(C.9)
Structure subjected to impulse load	C.3
The general model for the response of a statically indeterminate structure subjected to
impulse load is developed by simulating the loading and is presented in Figure C.3.
Wel.1
u
k1
1
R
Rmf
Rms
Rmf
2
3
4
5
6
7
k2
Wel.2
Wel.3
Wel.4
Rms
Rms
8
Figure C.3 The response model, representing the response of an impulse loaded
statically indeterminate structure for the elasto-plastic case.
In this model, resisitance Rms and Rmf corresponds to the resistance for which yielding
at section s and section f in Figure C.1 begins. The notations k1 and k2 represents the

-- 254 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 235
stiffnesses of the beam before reaching the ultimate resistance at the fixed support,
Rms, and in the span, Rmf , respectively.
When the load is applied, the resistance and deformation increases. The studied model
represents a case where the structure starts to sway back when its ultimate resistance
is reached (at point 2) and then starts to sway dynamically. For the load direction
presented in Figure C.1a, the beam deforms downwards which is indicated as positive
deformation.
A description of the response model in Figure C.3 is presented in Table C.1 while the
development of the stress and strain for both critical sections is illustrated in
Figure C.4.
(a)
1
εs
σs
fyd
2
3
4
5
6
7
(b)
1
εf
σf
fyd
2
3
4
5 6
7
Figure C.4 Development of stresses for (a) section s and (b) section f.

-- 255 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	236
Table C.1 Course of events when the structure shown in Figure C.1 is hit by an
impulse load P(t). The numbered points can be seen in Figure C.3 and
Figure C.4.
Point Description
1 To start with, the structure yields in section s, which is described as point 1
in Figure C.3 and Figure C.4. The obtained stresses for section s and f are
positive tensile stresses. When the structure reaches point 1, a decrease in
stiffness, from k1 to k2, occurs. The stiffness k1 corresponds to the stiffness
of a beam which is fixed at one support and simply supported at the other.
Stiffness k2 represents the stiffness of a simply supported beam.
2 When the load is further increased, yielding in section f occurs and point 2 is
reached. If the load had been further increased, a plastic plateau would have
been developed, which is described with a dashed line in Figure C.3. At
point 2 the structure starts to sway back since the total external work has
been taken by the internal work of the structure. From this point the
structure starts to sway dynamically without any external load. At first, the
structure follows the elastic stiffness k1 which is a consequence of the
changed direction.
3 Point 3 defines when the stresses at section s reach zero, see Figure C.4a.
After passing this point the stresses in the section increases, but in the other
direction, i.e. the stresses at section s becomes compressive instead of
tensile.
4 When section A begins to yield again point 4 is reached, and as a
consequence the stiffness is again decreased to k2.
5 Point 5 indicates when yielding occurs in the span again. However, for this
impulse loaded structure, point 5 is never reached since the structure starts
to sway back before this happens. This phenomenon is due to the fact that
the structure deforms depending on the elastic energy which is illustrated as
the area below the graph in Figure C.3.
6 When the areas Wel.1 and Wel.2 are equal, the structure changes direction and
starts to sway in the positive direction again.
7 After point 6 the structure starts to oscillate elastically between point 6 and 7
since the work Wel.3 and Wel.4 are equal. The stiffness of these oscillations is
k1.
8 At point 8 in Figure C.3 the structure only possesses kinetic energy and the
potential energy is zero.

-- 256 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 237
Structure subjected to a static load	C.4
When the local frame model, a beam with one edge simply supported and one edge
fully fixed, is subjected to a static load the areas under the resistance-deformation
curve does not necessarily have to match as for an impulse loaded structure.
If the static load is increasing, the resistance, deformation or both will increase
depending on the position on the resistance-deformation curve and vice versa.
Figure C.5 illustrates the response curve of a structure where the deformation is
increasing up to point 3, decreasing to point 5 and increasing again to point 7. The
response of the structure is further described in Table C.2.
u
k1
1
R
Rms
Rmf 2
4
5
6	k2
ΔR
ΔR
3, 7
Figure C.5 The response model of a statically loaded structure where the
deformation is increasing from point 1 to 3, decreasing from point 3 to 5
and increasing again between point 5 and 7.
The course of events is described in Table C.2.

-- 257 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	238
Table C.2 Course of events for the structure subjected to a static load q. The
numbered points are shown in Figure C.5.
Point Description Deformation
1 The structure yields at the fixed support, point 1, and the
stiffness is decreased from k1 to k2.
Increases
2 The structure yields at the span, point 2, and a plastic plateau
is developed. Here, the static load is constant but the
deformation is increasing.
Increases
3 At point 3 the deformation starts to decrease and the resistance
decreases with a stiffness k1.
Starts to
decrease
4 At point 4 the resistance has decreased with the amount ΔR,
corresponding to two times the resistance Rms. The section
yields at the fixed support in the opposite direction.
Decreases
5 At point 5 the static load starts to increase again and the
resistance is increasing with a stiffness of k1.
Starts to
increase
6 The resistance increases from point 5, with a stiffness of k1,
until the amount ΔR is reached and a plastic hinge at the fixed
support is developed at point 6.
Increasing
7 The resistance increases with the stiffness k2 until the plastic
plateau is reached and the section yields in the span at point 7.
Increasing
The development of the resistance and deformation for the structure described in
Figure C.6 is explained in Table C.3. In this case the deformation increases up to
point 2 where it starts to decrease until point 5. From point 5 to point 8 the
deformation is increasing.

-- 258 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 239
u
k1
1
R
Rms
Rmf
2
3
4
5
6
7
k2
8
ΔR
Figure C.6 The response model of a statically loaded structure where the
deformation is increasing from point 1 to 2, decreasing from point 2 to 5
and increasing again between point 5 and 8.
Table C.3 Course of events for the local front column subjected to a static load q.
The numbered points are shown in Figure C.6.
Point Description Deformation
1 The structure yields at the fixed support, point 1, and the
stiffness if decreased from k1 to k2.
Increases
2 The static load starts to decrease and therefore the resistance
start to decrease before the span has yielded. The resistance
decreases with a stiffness of k1.
Starts to
decrease
3 At point 3 the fixed support yields in the opposite direction
and the stiffness is changed from k1 to k2.
Decreases
4 At point 4 the span yields and a plastic plateau starts to
develop. At this point the static load is constant.
Decreases
5 At point 5 the static load starts to increase again and the
resistance is increasing with a stiffness k1.
Starts to
increase
6 The resistance increases from point 5, with a stiffness k1, until
the amount ΔR is reached and a plastic hinge at the fixed
support is developed at point 6 where the stiffness is changed
to k2.
Increasing
7 The resistance increases with the stiffness k2 until the plastic
plateau is reached and the section yields in the span at point 7.
Increasing
8 As the load increases further the deformation increases and
the resistance is constant on the plastic plateau.
Increasing

-- 259 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	240
APPENDIX D Central difference method
Introduction	D.1
The central difference method, described in equation (D.1), is an explicit calculation
method which can be used for approximating the solution of the equation of motion at
a certain time t.
where m is the mass, ü is the acceleration, c is the damping,u	 is the velocity, k is the
stiffness, u is the displacement and F(t) is the external force.
Calculation method	D.2
The calculation method uses the displacements at time t and t -
t, ut and ut-
t, in order
to find the displacement at time t +
t, ut+
t, as shown in Figure D.1. Equation (D.1)
can be written as
where the index t implies the time. The mass m, stiffness k and damping c are constant
in time, i.e. m = mt, c = ct and k = kt.
ut+
t
ut
ut-
t
t
u
Figure D.1 In the central difference method, ut-
t and ut is used to find the solution of
ut+
t (Andersson and Karlsson (2012)).
The accelerationu	 at time t can be written as
The velocityu	 at time t is
)	(t	F	ku	u	c	u	m 		 		
(D.1)
 	t	F	ku	u	c	u	m t	t	t 		 		
(D.2)
 		t	t	t	t	t	t u	u	u
t
u 			 	

 2
12
	
(D.3)
 		t	t	t	t	t u	u
t
u 			 

 2
1
	
(D.4)

-- 260 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 241
Inserting equation (D.3) and (D.4) into equation (D.2) gives the following equation
for the displacement at time t + Δt:
where R(ut) depends on the material model and structural response model, which are
further described in Section D.3.
To calculate the deformation at time t + Δt, information is needed about the
deformation at both time t and t - Δt. To solve this, a start value is required and the
deformation at time –Δt, u-
t, can be calculated as
When using the central difference method to solve the equation of motion, a constant
time step,
t, is used. For the method to be stable, the time step must be smaller than a
certain critical time step.
where
To increase the accuracy, especially for a SDOF system, it can be wise to use an even
smaller time step,	1	t		 , according to
where t1 is the duration of the load.
Response models	D.3
D.3.1 Introduction
When calculating the deformation according to the central difference method in this
Master’s Thesis, Matlab is used. The resistances used in the calculations are estimated
differently depending on if the response model is elastic or elasto-plastic. For the
elasto-plastic model a distinction must be done depending on if the model can develop
    	














		








 	

	 t	t
t	t	t	t
t
t	t
t	t u
t
c
t
m
t
u	m
u	R	t	F
t
c
t
m
u 2
2
2 2	2
1
2	
(D.5)
0
2
0	0 2 u
t
u	t	u	u t 	 
						
(D.6)
cr	t	t 			
(D.7)
k
m
tcr 2
2 		

(D.8)




	
100
1	1 t
t
t
cr
(D.9)

-- 261 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	242
one or two plastic hinges, i.e. if it is bilinear or trilinear. The different response
models are explained in Section D.3.2 to D.3.4.
D.3.2 Elastic response model
For the elastic response model, the resistance Rt in equation (D.5) can be written as
where k is the stiffness and ut is the deformation.
D.3.3 Bilinear elasto-plastic response model
A bilinear elasto-plastic response model is illustrated in Figure D.2 where
and where Rm the maximum resistance.
u
R
k
1
Rm
u1
k
1
ures
umax
Figure D.2 Resistance-deformation curve for a bilinear elasto-plastic model.
For	m	t R	ku 		0
t	t ku	R 	
(D.10)
k	/	R	u m	1 	
(D.11)
t	t ku	R 	
(D.12)

-- 262 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 243
For	m	t R	ku 
When the deformation starts to decrease, the maximum deformation is reached and
the resistance goes back to the elastic mode, though with a plastic deformation. When
t	t	t u	u 			
the resistance is changed to
where the residual plastic deformation, ures, can be calculated as
D.3.4 Trilinear elasto-plastic response model
A trilinear elasto-plastic model is illustrated in Figure D.3 where u1 and u2 are the
deformations for the corresponding resistances Rm1 and Rm2 where the first and second
plastic hinges is reached. The deformations u1 and u2 can be calculated as
and
m	t R	R 	
(D.13)
 		res	t	t u	u	k	R 		
(D.14)
k
R
u	u m
res 	 max	
(D.15)
1
m1
1 k
R
u 	
(D.16)
2	m1	m2	1	2 )/k	R	(R	u	u 			
(D.17)

-- 263 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	244
u
R
k1
1
Rm2
u1
umax
k2
1
Rm1
Rm3
u2
k1
1
k2
1
k1
1
uresC uresA uresB
uturn
Rturn
Figure D.3 Resistance-deformation curve for a trilinear elasto-plastic model.
For	1	1	0 m	t R	u	k 	
For	 		 	 	2	1	2	1	1 m	t	m	m R	u	u	k	R	R 			
For	 	 	2	1	2	1 m	t	m R	u	u	k	R 		
When	t	t	t u	u 			 the resistance is changed to
where the residual plastic deformation, uresA can be calculated as
t	t u	k	R 1		
(D.18)
 		 		1	2	1 u	u	k	R	R t	m	t 			
(D.19)
2	m	t R	R 	
(D.20)
 		resA	t	t u	u	k	R 	 1	
(D.21)
1	2	max / k	R	u	u m	resA 		
(D.22)

-- 264 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 245
where the index max indicates the time at which the maximum deformation is
reached.
Now, when the resistance passes a certain value, Rm3, calculated in equation (D.23)
the stiffness changes to k2.
When	3	m	t R	R 	 the resistance changes to
where
When the deformation starts to increase again, at uturn, a new residual plastic
deformation, uresC, can be calculated as
The resistance have now found equilibrium and will oscillate with the resistance
1	2	3 2 m	m	m R	R	R 		
(D.23)
 		resB	t	t u	u	k	R 	 2	
(D.24)
1	1	2	3	max /	2	/ k	R	k	R	u	u m	m	resB 			
(D.25)
1	/ k	R	u	u turn	turn	resC 		
(D.26)
 		3	1 res	t	t u	u	k	R 		
(D.27)

-- 265 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	246
APPENDIX E Hand calculations for 2D frame
Input data	E.1
The cross section of the front and back column as well as of the roof beam is
presented in Figure E.1. Additional dimensions and the reinforcement amount are
presented in Figure E.2 and Table E.1. The boundary conditions and load type for the
local and global response model are presented in Figure E.2a and b, respectively,
while the material parameters are presented in Table E.2. The design values of
concrete and reinforcement strength, fcd and fyd, are calculated according to
equation (7.11) and (7.12). Following the recommendation from Chapter 3 the top
reinforcement is not introduced in the calculation of sectional stiffness and moment
resistance. The general equations are presented is Appendix A.
d = 0.15 m
c1 = 0.05 m b = 1.0 m
As.w = 6 ϕ 10
x
hw = 0.2 m
Figure E.1 Model illustrating the cross section of the 2D frame.
L
(b)	(a)
L	L
Front column Back column
P(t)	P(t)
Figure E.2 (a) Local response model; (b) global response model.
Table E.1 Additional parameters of the frame.
Length
of the column, L
[m]
Length
of the roof beam, B
[m]
Reinforcement
amount, As
[10-4 m4]
7.0 15.0 5.3

-- 266 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 247
Table E.2 Material parameters of the frame.
Ec
[GPa]
fcd
[MPa]
Es
[GPa]
fyd
[MPa]
ρ
[kg/m3]
33 25 200 500 2 400
The factor α, i.e. the ratio between Es and Ec, for the considered section, calculated
according to equation (7.6), is
06	6
33
200 .		
		
(E.1)
The moment of inertia for the uncracked section, without consideration to the
reinforcement, is established according to
4	4
3	3
m	10	64	0
12
2	0	1
12
	
	

	 .
.	bh
I a.I	
(E.2)
For a case where the cross section is cracked, state II, and where no axial forces are
acting on the section, the distance from the top of the cross section to the neutral axis,
xII, is calculated according to equation (7.9). Thus, for the cross section of the 2D
frame the distance to the neutral axis, xII, is calculated as
)	(0.15	10	24	5	06	6
2
2	0 4
2
II
II x	.	.
x	. 				
 	
(E.3)
resulting in 0.028 m.
In order to calculate the moment of inertia of the section in state II, equation (7.8) is
used, which for the 2D frame results in
4	4	2	4
3
m	10	54	0	)	028	0	(0.15	10	24	5	06	6
3
028	0	2	0 		 						

 .	.	.	.
.	.
III	
(E.4)
The inclination of the first and second branch in the elasto-plastic response curve, k1
and k2, for local SDOF model with boundary conditions and load type as in
Figure E.2a is calculated as
kN/m	6	1007
7
10	54	0	10	33	192	192 3
4	9
3	1 .
.
L
I	E
k II	c 
			

	


(E.5)
kN/m	0	403
7	5
10	54	0	10	33	384
5
384
3
4	9
3	2 .
.
L
I	E
k II	c 

			


	


(E.6)
In the global model the stiffnesses for the front and back column, illustrated in
Figure E.2b, is established as

-- 267 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	248
kN/m	9	41
7
10	54	0	10	33	8	8 3
4	9
3 .
.
L
I	E
k II	c
fr	.1 
			

	


(E.7)
kN/m	7	15
7
10	54	0	10	33	3	3 3
4	9
3 .
.
L
I	E
k II	c
1.ba 
			

	


(E.8)
The neutral axis for when the ultimate concrete strain is reached, state III, is
calculated using equation (7.14) assuming that the bottom reinforcement is yielding.
For the 2D frame this results in
m	013	0
1	10	25	8	0
10	500	10	24	5 6
6	4
.
.
.
xIII 
		
		


(E.9)
The yielding strain, εsy, for the reinforcement is calculated according to
equation (7.13). Thus for the considered section it is
3
9
6
10	5	2
10	200
10	500 
	


 .	sy	
	
(E.10)
A control of the strain at the bottom reinforcement, εs, is made according to
equation (7.15) where the ultimate concrete strain εcu = 0.0035.
3	3	3 10	5	2	10	8	36	10	5	3
013	0
013	0	15	0 		 					

 .	.	.
.
.	.
s	
	
(E.11)
The moment capacity, Mrd, is calculated according to equation (7.17) and for the 2D
frame it is
kNm	37.8	0.013)	0.4	(0.15	1	013	.	0	8	.	0	10	25 6 									rd	M	
(E.12)
For the local model the resistance Rms corresponds to the ultimate resistance at the
fixed support and the resistance Rmf corresponds to the ultimate resistance of the
critical span section. These are calculated according to equation (E.30) and (E.31)
resulting in
kN	3	43
7
8	37	8	8 .
.
L
M
R rd
ms 



	
(E.13)
kN	8	64
7
8	37	12	12 .
.
L
M
R rd
mf 



	
(E.14)
The mass of the front and back column is
kg	3360	2400	0	7	2	0	0	1 								 .	.	.	L	h	b	m	
	
(E.15)
The mass of the roof beam is
kg	7200	2400	0	15	2	0	0	1 								 .	.	.	B	h	b	m	
	
(E.16)

-- 268 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 249
Global and local elastic frame models	E.2
E.2.1 Deformation
The elastic deformation of the structure, subjected to characteristic impulse load, is
calculated from the condition of work equilibrium which is explained in Section 2.7.5.
The parameters used in this section are calculated in Section E.1 and the values for the
local and global model are presented in Table E.3 and Table E.4, respectively.
Table E.3 Mass, stiffness and transformation factors used for the local elastic
model.
Part m
[kg]
κm
[-]
k1
[kN/m]
κmF
[-]
Front column (1) 3 360 0.486 1 007.6 0.805
Table E.4 Mass, stiffness and transformation factors used for the global elastic
model.
Part κm
[-]
m
[kg]
κk= κF
[-]
III
[10-4 m4]
k1
[kN/m]
Front column (1) 0.257 3 360 0.400 0.54 41.9
Back column (2) 0.236 3 360 1.000 0.54 15.7
Roof beam (3) 1.000 7 200 0 0.54 0
The resulting deformation, uel, is described as
	m
I
u k
el 	
(E.17)
where Ik is the characteristic load, m the mass and ω the angular frequency,
calculated as
m
k

		
(E.18)
For the studied structure, the angular frequency for the local and global system,
respectively is
rad/s	3	19
805	0	3360
10	6	1007 3
.
.
.
l.	el 



		
(E.19)

-- 269 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	250
rad/s	92	1
1	7200	236	0	3360	257	0	3360
10	0	1	7	15	4	0	9	41 3
.
.	.
)	.	.	.	(
gl	.	el 
				
				

		
(E.20)
The total impulse load acting on the considered area of the structure is established as
Ns	5250	7	1
2
025	0	10	60
2
3
1 		
	
		

		 .
L	b
t	P
A	i	I peak
(E.21)
The elastic deformation for the local and global model is
m	10	0
3	19	805	0	3360
5250 .
.	.	m
I
u k
l.	el 
	
	

(E.22)
 	 m	12	0
92	1	1	7200	236	0	3360	257	0	3360
5250 .
.	.	.	m
I
u k
gl	.	el 
					
	

(E.23)
This definition of deformation is established with regard to a characteristic impulse
load. In order to get the correct value of the deformation for the chosen impulse load
the deformation should be modified, see Section 2.7.6.
Thus, the frequency of the dynamic loaded structure, f, and its periodicity, T must be
established accordingly


2
	f	
(E.24)
f
T 1
	
(E.25)
For the local and global model this gives
Hz	07	3.	f l.	el 	
(E.26)
Hz	30	0.	f gl	.	el 	
(E.27)
s	32	0.	T l.	el 	
(E.28)
s	28	3.	T gl	.	el 	
(E.29)
The ratio of the periodicity, T, to the duration of the load, t1, for the local and global
model, respectively is
8	12
025	0
32	0
1
.
.
.
t
T l.	el 		
(E.30)

-- 270 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 251
2	131
025	0
28	3
1
.
.
.
t
T gl	.	el 		
(E.31)
For n = 1, which corresponds to a triangular load, and for the calculated relations of T
to t1, the impulse factors γ1, according to Section 2.7.6.2 are
0	1.	l.I 
		
(E.32)
0	1.	gl	.I 
		
(E.33)
This means that the chosen load, with a peak value of 60 kPa and a duration of
0.025 s, corresponds to a characteristic impulse load. Therefore the magnitudes of the
calculated deformations are realistic and do not need to be modified.
Local elasto-plastic frame model	E.3
E.3.1 Deformation
The parameters used in this section are calculated in Section E.1 and are presented in
Table E.5.
Table E.5 Mass, stiffness and transformation factors used for the local elasto-
plastic model.
Part m
[kg]
κm
[-]
k1
[kN/m]
k2
[kN/m]
κk= κF
[-]
Mrd
[kNm]
Rms
[kN]
Rmf
[kN]
Front
column
(1)
3 360 0.333 1 007.6 403.0 0.500 37.8 43.3 64.9
The elasto-plastic deformation of the structure, uep, is described as
m
k	m
pl	,	ep	el,	ep	ep mR
I
k
R
u	u	u 2	2
2
				
(E.34)
where uep,el and uep.pl are the elastic and plastic parts of the elasto-plastic deformation.
Rm is the maximum resistance, Ik is the characteristic load and m and k is the mass and
stiffness, respectively.
The total impulse acting on the considered area of the structure has a magnitude
of 5250 Ns according to equation (E.21).
The deformations u1 and u2 is

-- 271 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	252
mm	9	42
1
1 .
k
R
u ms 		
(E.35)
mm	5	96
2
1	2 .
k
R	R
u	u ms	mf 

		
(E.36)
Since the stiffness in equation (E.34) is meant for a bilinear case, two stiffnesses are
used in these hand calculations. The first stiffness is taken as the stiffness for a beam
with one fixed edge and one simply supported, k1. The second stiffness is taken as the
secant stiffness, k3, according to Figure E.3. The stiffness that would give the correct
results should lie in between these values.
R
u
k1
k2
R
u
k1
R
u
k3
(a) (b) (c)
Rms
Rmf
u1
u2
Figure E.3 (a) Stiffness of the elasto-plastic local front column (b) Simplified
bilinear case with stiffness k1 (c) Simplified bilinear case with
stiffness k3.
The stiffness k3 is calculated as follows
m
kN
671
2
3 	 u
R
k mf
(E.37)
Now the deformations can be calculated. Deformation for stiffness k1 respective
stiffness k3, estimated according to equation (E.34) is
 	 m	127	0
10	8	64	5	0	3360	333	0	2
5250	5	0
10	6	1007	5	0	2
10	8	64	5	0 3
2
3
3
1 .
.	.	.
.
.	.
.	.
uep 
				


		
	
	
(E.38)
 	 m	143	0
10	8	64	5	0	3360	333	0	2
5250	5	0
10	671	5	0	2
10	8	64	5	0 3
2
3
3
3 .
.	.	.
.
.
.	.
uep 
				


		
	
	
(E.39)

-- 272 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 253
E.3.2 Plastic deformation capacity
The calculation of the plastic deformation capacity for the local elasto-plastic frame
model is presented in this section. The concept of calculating the required deformation
capacity for a trilinear model is described in Section E.3.1 and the hand calculation
method is presented in Section A.5. Parameters and dimensions of the studied frame
are presented in Section E.1. Properties of the chosen impulse load can be found in
Section 4.3.
In order to calculate the distance from the simply supported edge to where the
maximum moment is, L0, the reaction force at the simply supported edge, R1, and the
equivalent static load, q1, is calculated as
m
kN
60	1 		 b	P	q peak	
(E.40)
kN	205
7
10	8	37
2
7	10	60
2
3	3
1
1 	




 

	
	

 N
.
L
M	L	q
R rd
(E.41)
L0 can now be calculated as
m	18	0	m
10	60
10	205	2
7
2
3
3
1
1
0 .
q
R
L	L 	






	
	

		
(E.42)
The shear slenderness λ and the factor for allowed plastic rotation capacity, kλ, is
20	1
15	0
18	0	0 .
.
.
d
L 		
		
(E.43)
The plastic rotation capacity, θpl, for reinforcement of Class B and Class C is
calculated according to Section A.5 which for the local frame gives
The modified values of the plastic rotation capacities with regard to shear slenderness,
θrd, can now be calculated as
The plastic deformation capacities, urd, can be calculated as
63	0
3 .	k 	

	
(E.44)
rad	10	7	10 3	
	 .	plB	
	
(E.45)
rad	10	1	33 3	
	 .	plC	
	
(E.46)
rad	10	8	6 3	
			 .	k	plB	rdB	
	

		
(E.47)
rad	10	0	21 3	
			 .	k	plC	rdC	
	

		
(E.48)

-- 273 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	254
The total deformation capacity, urd.tot, is the sum of the elastic deformation, u1, and the
plastic deformation capacity, urd, and is calculated as
where the elastic deformation u1 is calculated in equation (E.35).
mm	1	23
1
1 .
q
R
u rdB	rdB 		
	
(E.49)
mm	6	71
1
1 .
q
R
u rdC	rdC 		
	
(E.50)
 	 	mm	0	66	mm	9	42	1	23	1 .	.	.	u	u	u rdB	tot	.	rdB 					
(E.51)
 	 	mm	5	114	mm	9	42	6	71	1 .	.	.	u	u	u rdC	tot	.	rdC 					
(E.52)

-- 274 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 255
APPENDIX F Study of 3D structure
Input data	F.1
F.1.1 Wall
The cross section of the wall panels is presented in Figure F.1. Additional dimensions
and the reinforcement amount are presented in Table 5.2 and the material parameters
are presented in Table F.2. The design values of the concrete and reinforcement
strength, fcd and fyd, are calculated according to equation (7.11) and (7.12). Following
the recommendation from Chapter 3 the top reinforcement is not introduced in the
calculation of the sectional stiffness and moment resistance.
d = 0.15 m
c1 = 0.05 m b = 1.0 m
As.w = 6 ϕ 10
x
hw = 0.2 m
Figure F.1 Model illustrating the cross section of a wall panel with a width of 1 m.
Table F.1 Additional parameters of the wall panel.
Part Length of wall panel, w
[m]
Reinforcement amount, As.w
[10-4 m4]
Wall 6.0 5.3
Table F.2 Material parameters
Part Ec
[GPa]
fcd
[MPa]
Es
[GPa]
fyd
[MPa]
ρ
[kg/m3]
Front wall 33 25 200 500 2 400
The factor α, i.e. the ratio between Es and Ec, is calculated according to equation (7.6),
which for the wall panel is
06	6
33
200 .		
		
(F.1)
The moment of inertia for the uncracked section, state I, without any consideration to
the reinforcement is calculated as

-- 275 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	256
4	4
3	3
m	10	64	0
12
2	0	1
12
	
	

	 .
.	bh
I w
a.w.I	
(F.2)
For a case where the cross section is cracked, state II, and where no axial forces are
acting on the section, the distance to the neutral axis xII is calculated according to
equation (7.9). Thus, for the considered section the location of the neutral axis is
calculated as
)	(0.15	10	24	5	06	6
2
2	0 4
2
II
II x	.	.
x	. 				
 	
(F.3)
m	028	0.	xII 		
(F.4)
In order to calculate the moment of inertia of the section in state II, equation (7.8) is
used which for the wall panels becomes
4	4	2	4
3
m	10	54	0	)	028	0	(0.15	10	24	5	06	6
3
028	0	2	0 		 						

 .	.	.	.
.	.
I w.	II	
(F.5)
The stiffness for a simply supported wall panel in state II is calculated using
equation (7.4), resulting in
kN/m	640
6	5
10	54	0	10	33	384 3
4	9
1 

			


.
k w.	
(F.6)
The neutral axis when the ultimate concrete strain is reached (state III) is calculated
using equation (7.14) where the bottom reinforcement is assumed to reach yielding.
For the wall panels xIII is calculated as
m	013	0
1	10	25	8	0
10	500	10	24	5 6
6	4
.
.
.
xIII 
		
		


(F.7)
Yielding strain, εsy, for reinforcement is calculated according to equation (7.13) and
for the studied section it is
3
9
6
10	5	2
10	200
10	500 
	


 .	sy	
	
(F.8)
A control of the strain at the bottom reinforcement, εs, is made according to
equation (7.15) where the ultimate concrete strain, εcu, is 0.0035.
3	3	3 10	5	2	10	8	36	10	5	3
013	0
013	0	15	0 		 					

 .	.	.
.
.	.
s	
	
(F.9)
The moment capacity for the wall, Mrd.w, is calculated according to equation (7.17):
kNm	37.8	0.013)	0.4	(0.15	1	013	.	0	8	.	0	10	25 6
. 										w	rd	M	
(F.10)
The maximum resistance for a simply supported wall panel with a uniformly
distributed load, is established using equation (7.10), and calculated as

-- 276 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 257
kN	4	50
6
8	37	8 .
.
R w.m 

	
(F.11)
The mass of the wall panel is
kg	2880	2400	0	6	2	0	0	1 								 .	.	.	w	h	b	m w	w	
	
(F.12)
F.1.2 Front Column
The cross section of the front column is presented in Figure F.3. Additional
dimensions and the reinforcement amount are shown in Table F.3 and the material
parameters can be found in Table F.4. The design values of the concrete and
reinforcement strength, fcd and fyd, are calculated according to equation (7.11) and
(7.12).
d = 0.55 m
c1 = 0.05 m
bc = 0.5 m
As,c = 3 ϕ 20
x
hc = 0.6 m
As,c´ = 3 ϕ 20	d´ = 0.05 m
Figure F.2 Model illustrating the cross section of the front column.
Table F.3 Additional parameters of the front column.
Part Length, L
[m]
Reinforcement amount, As,c = As,c´
[10-4 m4]
Column 7.0 7.8
Table F.4 Material parameters of the front column
Part Ec
[GPa]
fcd
[MPa]
Es
[GPa]
fyd
[MPa]
ρ
[kg/m3]
Front column 33 25 200 500 2 400
The factor α for the column, calculated according to equation (7.6), is

-- 277 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	258
06	6
33
200 .		
		
(F.13)
The moment of inertia for state I without consideration to the reinforcement is
established as
4	4
3	3
m	10	90
12
6	0	5	0
12
	
	

	 .	.	h	b
I c	c
a.c.I	
(F.14)
For a case where the cross section is cracked, state II, and where no axial forces are
acting on the section, the distance to the neutral axis xII is calculated according to
equation (7.9). Thus, for the considered section the location of the neutral axis is
found as
In order to calculate the moment of inertia of the section in state II, equation (7.8) is
used and III.c is calculated as
4	4	2	4
2	4
3
m	10	0	11	)	05	0	(0.09	10	85	7	06	6
)	9	0	(0.55	10	85	7	06	6
3
09	0	5	0
		

						
				


.	.	.	.
.	.	.
.	.
I c.	II
(F.17)
The stiffness of the column before and after the plastic hinge at the fixed support is
reached, k1.c and k2.c, respectively, is calculated as
kN/m	20967
7
10	0	11	10	33	192	192 3
4	9
3	1 
			

	


.
L
I	E
k c.	II	c
c.	
(F.18)
kN/m	8128
7	5
10	0	11	10	33	384	384 3
4	9
3	2 

			

	


.
L
I	E
k c.	II	c
c.	
(F.19)
The neutral axis when the ultimate concrete strain is reached, in state III, is calculated
using equation (7.18). Assuming that the bottom reinforcement is yielding and that the
ultimate concrete strain εcu = 0.0035 the neutral axis, xIII, can be calculated as
0	10	200
05	0
0035	0	10	85	7
10	500	10	85	7	5	0	8	0	10	25
9	4
6	4	6
		

			
							


III
III
III
x
x	.
.	.
.	.	x	.
(F.20)
m	045	0.	xIII 		
(F.21)
A yielding strain for the reinforcement is calculated according to equation (7.13) and
for the column it is
)	(0.55	10	85	7	06	6	0.05)	-	(	10	85	7	1)	(6.06
2
5	0 4	4
2
II	II
II x	.	.	x	.
x	. 						
 		
(F.15)
m	09	0.	xII 		
(F.16)

-- 278 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 259
3
9
6
10	5	2
10	200
10	500 
	


 .	sy	
	
(F.22)
A control of the strain at the top reinforcement, εs´, is made according to
equation (7.18) as
3	3	3 10	5	2	10	39	0	10	5	3
045	0
045	0	05	0 		 					

 .	.	.
.
.	.
´	s	
	
(F.23)
The moment capacity of the front column, Mrd.c, is calculated according to
equation (7.20). Thus
The resistance Rms.c, which corresponds to the ultimate resistance at the fixed support,
and Rmf.c, which corresponds to the ultimate resistance of the critical span section, are
calculated accordingly
kN	1	241
7
211	8	8 .
L
M
R c.	rd
c.	ms 	



	
(F.25)
kN	7	361
7
211	12	12 .
L
M
R c.	rd
c.	mf 	



	
(F.26)
The mass of the column including the mass of the wall, used in SDOF and the 2D
FE analysis, is
kg	25200	2400	0.6)	0.5	7	6.0	0.2	1.0	(7 										w.c	m	
(F.27)
The mass of only the column, used in the 3D FE analysis, is
kg	5040	2400	0.6	0.5	7 					c	m	
(F.28)
Plastic deformation capacity of the front column	F.2
The calculation of the plastic deformation capacity for the elasto-plastic model of the
front column in the 3D study is presented in this section. The concept of calculating
the required deformation capacity for a trilinear model is described in Section E.3.1
and the hand calculation method is presented in Section A.5. Parameters and
dimensions of the front column are presented in Section F.1.2 and properties of the
chosen impulse load can be found in Section 4.3.
The deformation u1 according to equation (E.35) and Figure E.3 is calculated as
kNm	211	0.05)	(0.55	10	200
0.045
0.045	0.05
0.0035	10	7.85
0.045)	0.4	(0.55	0.5	045	0	8	0	10	25
9	4
6
				

			
							

.	.	M c.	rd
(F.24)

-- 279 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	260
mm	5	11
20967
1	241
1
1 .
.
k
R
u
c.
c.	ms 			
(F.29)
In order to calculate the distance from the simply supported edge to where the
maximum moment is, L0, the reaction force at the simply supported edge, R1, and the
equivalent static load, q1, needs to be calculated.
m
kN
30	1 		 c	peak b	P	q	
(F.30)
kN	8	74
2
1
1 .
L
M	L	q
R c.	rd 	

	
(F.31)
L0 can now be calculated as
m	0	2
2
1
1
0 .
q
R
L	L 

		
(F.32)
The shear slenderness λ and the factor for allowed plastic rotation capacity kλ is
6	30 .
d
L 	
		
(F.33)
The plastic rotation capacity, θpl, for reinforcement of Class B and Class C is
calculated according to Section A.5. For the front column it is calculated as
The modified values of the plastic rotation capacities, θrd , can now be calculated as
The plastic deformation capacities, urd, can now be calculated as
1	1
3 .	k 	

	
(F.34)
rad	10	5	10 3	
	 .	plB	
	
(F.35)
rad	10	7	32 3	
	 .	plC	
	
(F.36)
rad	10	5	11 3	
			 .	k	plB	rdB	
	

		
(F.37)
rad	10	1	36 3	
			 .	k	plC	rdC	
	

		
(F.38)
mm	8	28
1
1 .
q
R
u rdB	rdB 		
	
(F.39)

-- 280 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 261
The total deformation capacity is the sum of the elastic deformation, where u1 is
calculated in equation (E.35), and the plastic deformation capacity
Hand calculations of the dynamic reaction from the	F.3
wall
An approximation of the size of the dynamic reaction is found by using the equivalent
static load, see Section 2.8. For the elastic and plastic response the equivalent static
load Q is expressed as
	k	el I	Q 	
(F.43)
pl
k
pl mu
I
Q 2
2
	
(F.44)
where Ik is the characteristic load, m is the mass, ω is the angular frequency and upl is
the plastic deformation.
The equivalent static load provides a value of the maximum deformation of the
structure and corresponds to the ultimate resistance. For the elastic and elasto-plastic
response it can be described as
el	el ku	Q 	
(F.45)
m	ep R	Q 	
(F.46)
where
el	ep	m ku	R .		
(F.47)
and where uep,el is the elastic deformation in the elasto-plastic response model
according to Figure 2.16.
By applying the equivalent static load on the wall the dynamic reaction is calculated
for the elastic and elasto-plastic model as
2	2
el	el
el
ku	Q
R 		
(F.48)
mm	1	90
1
1 .
q
R
u rdC	rdC 		
	
(F.40)
 	 	mm	3	40	mm	5	11	8	28	1 .	.	.	u	u	u rdB	tot	.	rdB 					
(F.41)
 	 	mm	6	101	mm	5	11	1	90	1 .	.	.	u	u	u rdC	tot	.	rdC 						
(F.42)

-- 281 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	262
2	2
m	ep
ep
R	Q
R 		
(F.49)
Verification of the SDOF models	F.4
F.4.1 Elastic model
The accuracy of the SDOF model is verified with the response obtained in a 2D FE
analysis. For all types of loads the deformation obtained in the SDOF calculations
agrees with the results from the 2D FE analysis, see Figure F.3 to Figure F.7. A
simple check of the frequency for the two methods is also done and presented below.
Parameters of the column can be found in Section F.1.2.
For the elastic response the angular frequency, ω, of the structure is estimated to be
rad/s	1	32
805	0	25200
10	20967 3
1 .
.	m
k
w.c
c. 


	
		
(F.50)
The frequency and periodicity is established as
z	.
.
f H	1	5
2
14	32
2 		

	

(F.51)
s	195	0
11	5
1	1 .
.	f
T 			
(F.52)
A frequency of 5.1 corresponds well to the frequency obtained in the 2D FE analysis
which is 5.09. The accuracy is obvious when comparing the shapes of the deformation
curves from the SDOF calculations and the FE analysis, shown in
Figure F.3 to Figure F.7.

-- 282 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 263
Figure F.3 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for the Direct load.
Figure F.4 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for Reaction load 1.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 1
SDOF 	FE 2D
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
SDOF 	FE 2D

-- 283 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	264
Figure F.5 The accuracy of the SDOF calculations is verified with the results
from the 2D FE analysis for Reaction load 2.
Figure F.6 The accuracy of the SDOF calculations is verified with the results
from the 2D FE analysis for Reaction load 3.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 2
SDOF 	FE 2D
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 3
SDOF 	FE 2D

-- 284 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 265
Figure F.7 The accuracy of the SDOF calculations is verified with the results
from the 2D FE analysis for Reaction load 4.
F.4.2 Elasto-plastic model
The response obtained in the SDOF calculations is verified with the response of the
same structure in the 2D FE analysis, see Figure F.8. It can be noticed that there are
some divergences between the results from the two methods, both in magnitude and in
frequency. A possible reason for the differences is the transformations factors applied
in the SDOF system, which are plastic for the elasto-plastic calculations. Despite the
fact that the structure is modelled with the elasto-plastic response curve, only the
plastic transformations factors are used.
-0.100
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.075
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic total reaction
SDOF 	FE 2D

-- 285 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	266
Figure F.8 The accuracy of the SDOF calculations is verified with the results
from the 2D FE analysis.
Support reactions in 3D FE analysis	F.5
F.5.1 Elastic response
The reaction forces transferred from the wall panels to the column during the first
second are presented in Figure F.10 to Figure F.16. The locations along the column
are chosen according to Figure 5.45. The reactions are compared to the reaction from
a simply supported beam with the same dimensions and parameters as the wall.
-0.050
-0.025
0.000
0.025
0.050
0.075
0.100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
SDOF Direct load 	SDOF Reaction load 5 	SDOF Reaction load 6
FE 2D direct load 	FE 2D Reaction load 5 	FE 2D Reaction load 6

-- 286 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 267
1
2
3
4
5
6
7
Figure F.9 The deformations and reaction forces are measured at different points
along the column.
Figure F.10 A comparison of the reaction forces from a simply supported beam and
the reaction transferred from the wall panel to the column at Point 1.
-100
-75
-50
-25
0
25
50
75
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 12
Simply supported beam 	Wall - Point 1

-- 287 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	268
Figure F.11 A comparison of the reaction forces from a simply supported beam and
the reaction transferred from the wall panel to the column at Point 2.
Figure F.12 A comparison of the reaction forces from a simply supported beam and
the reaction transferred from the wall panel to the column at Point 3.
-100
-75
-50
-25
0
25
50
75
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 25
Simply supported beam 	Wall - Point 2
-100
-75
-50
-25
0
25
50
75
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 49
Simply supported beam 	Wall - Point 3

-- 288 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 269
Figure F.13 A comparison of the reaction forces from a simply supported beam and
the reaction transferred from the wall panel to the column at Point 4.
Figure F.14 A comparison of the reaction forces from a simply supported beam and
the reaction transferred from the wall panel to the column at Point 5.
-100
-75
-50
-25
0
25
50
75
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 73
Simply supported beam 	Wall - Point 4
-100
-75
-50
-25
0
25
50
75
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 97
Simply supported beam 	Wall - Point 5

-- 289 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	270
Figure F.15 A comparison of the reaction forces from a simply supported beam and
the reaction transferred from the wall panel to the column at Point 6.
Figure F.16 A comparison of the reaction forces from a simply supported beam and
the reaction transferred from the wall panel to the column at Point 7.
F.5.2 Elasto-plastic response
The reactions that are induced at the wall supports and transferred to the column are
presented in Figure F.17 to Figure F.23. The studied points along the column are
illustrated in Figure 5.45. The reactions are compared to the reaction from a simply
supported beam with the same dimensions and parameters as the wall in a frame
structure.
-100
-75
-50
-25
0
25
50
75
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 121
Simply supported beam 	Wall - Point 6
-100
-75
-50
-25
0
25
50
75
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 145
Simply supported beam 	Wall - Point 7

-- 290 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 271
Figure F.17 A comparison of reaction forces from a simply supported beam and the
reaction transferred from the wall panel to the column at Point 1.
Figure F.18 A comparison of reaction forces from a simply supported beam and the
reaction transferred from the wall panel to the column at Point 2.
-50
-30
-10
10
30
50
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 12
Simply supported beam 	Wall - Point 1
-50
-30
-10
10
30
50
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 25
Simply supported beam 	Wall - Point 2

-- 291 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	272
Figure F.19 A comparison of reaction forces from a simply supported beam and the
reaction transferred from the wall panel to the column at Point 3.
Figure F.20 A comparison of reaction forces from a simply supported beam and the
reaction transferred from the wall panel to the column at Point 4.
-50
-30
-10
10
30
50
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 49
Simply supported beam 	Wall - Point 3
-50
-30
-10
10
30
50
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 73
Simply supported beam 	Wall - Point 4

-- 292 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 273
Figure F.21 A comparison of reaction forces from a simply supported beam and the
reaction transferred from the wall panel to the column at Point 5.
Figure F.22 A comparison of reaction forces from a simply supported beam and the
reaction transferred from the wall panel to the column at Point 6.
-50
-30
-10
10
30
50
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 97
Simply supported beam 	Wall - Point 5
-50
-30
-10
10
30
50
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 121
Simply supported beam 	Wall - Point 6

-- 293 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	274
Figure F.23 A comparison of reaction forces from a simply supported beam and the
reaction transferred from the wall panel to the column at Point 7.
-50
-30
-10
10
30
50
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 145
Simply supported beam 	Wall - Point 7

-- 294 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 275
APPENDIX G Parametric study of 3D structure
Orientation	G.1
In this appendix additional graphs are presented for the parametric study of the 3D
structure where the stiffness and internal resistance is varied for the elastic and elasto-
plastic case, respectively. The results of the case with unchanged stiffness, ku, and
unchanged internal resistance, Rm.u, are presented calculated according to
equation (F.6) and (F.11), respectively.
For the elastic model, two cases of stiffnesses of the wall are considered. The first one
is stiffness kd which corresponds to the stiffness used in the previous study decreased
with a factor 4. The second case is stiffness ki which is 4 times larger than ku. The
values of these parameters can be found in Table 5.16 and Figure 5.55.
For the elastio-plastic model, two cases of resistance of the wall are considered here
which corresponds to the resistance from the previous study decreased and increased
with a factor 2, Rm.d and Rm.i, respectively. The values of these parameters can be
found in Table 5.18 and Figure 5.71.
Verification of SDOF model	G.2
G.2.1 Elastic response
G.2.1.1 Decreased stiffness of the wall
The accuracy of the SDOF model is verified with the response obtained in the
2D FE analysis, see Figure G.1 to Figure G.4. For all types of loads the deformation
obtained in the SDOF calculations agrees well with the results from 2D FE analysis.

-- 295 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	276
Figure G.1 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for the Direct load.
Figure G.2 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for Reaction load 1.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic direct load1
SDOF 	FE 2D
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 1
SDOF 	FE 2D

-- 296 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 277
Figure G.3 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for Reaction load 2.
Figure G.4 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for Reaction load 3.
-0.010
-0.005
0.000
0.005
0.010
0.015
0.020
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 2
SDOF 	FE 2D
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 3
SDOF 	FE 2D

-- 297 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	278
G.2.1.2 Increased stiffness of the wall
The SDOF model is verified with the response obtained in the 2D FE analysis, see
Figure G.5 to Figure G.8. For all types of loads the deformation obtained in the SDOF
calculations agrees well with the results from 2D FE analysis.
Figure G.5 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for the Direct load.
Figure G.6 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for Reaction load 1.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic direct load1
SDOF 	FE 2D
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 1
SDOF 	FE 2D

-- 298 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 279
Figure G.7 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for Reaction load 2.
Figure G.8 The accuracy of the SDOF calculations is verified with results from
the 2D FE analysis for Reaction load 3.
-0.150
-0.100
-0.050
0.000
0.050
0.100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 2
SDOF 	FE 2D
-0.15
-0.10
-0.05
0.00
0.05
0.10
0.15
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 3
SDOF 	FE 2D

-- 299 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	280
G.2.2 Elasto-plastic response
G.2.2.1 Decreased internal resistance of the wall
The SDOF model is verified with the response obtained in the 2D FE analysis, see
Figure G.9. For all types of loads the deformation obtained in the SDOF calculations
is simular to the results from the 2D FE analysis. However, the elasto-plastc results do
not correspond as well as the elastic results.
Figure G.9 The accuracy of the SDOF calculations is verified with the results
from the 2D FE analysis for the Direct load, Reaction load 5 and
Reaction load 6.
G.2.2.2 Increased internal resistance of the wall
The SDOF model is verified with the response obtained in the 2D FE analysis, see
Figure G.10. For all types of loads the deformation obtained in the SDOF calculations
is similar to the results from the 2D FE analysis. However, the elasto-plastc results do
not correspond as well as the elastic.
-0.025
0.000
0.025
0.050
0.075
0.100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
SDOF Direct load 	SDOF Reaction load 5 	SDOF Reaction load 6
FE 2D Direct load 	FE 2D Reaction load 5 	FE 2D Reaction load 6

-- 300 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 281
Figure G.10 The accuracy of the SDOF calculations is verified with the results
from the 2D FE analysis for the Direct load, Reaction load 5 and
Reaction load 6.
Comparison of deformation in SDOF and 3D FE	G.3
analysis
G.3.1 Elastic response
G.3.1.1 Decreased stiffness of the wall
The deformation of the column for the different loads in the SDOF model is compared
to the deformations of the 3D FE model, see Figure G.11 to Figure G.14.
0.00
0.05
0.10
0.15
0.20
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
SDOF Direct load 	SDOF Reaction load 5 	SDOF Reaction load 6
FE 2D Direct load 	FE 2D Reaction load 5 	FE 2D Reaction load 6

-- 301 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	282
Figure G.11 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF analysis for the Direct load.
Figure G.12 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF calculations for
Reaction load 1.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic direct load
SDOF 	FE 3D
-0.04
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.03
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 1
SDOF 	FE 3D

-- 302 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 283
Figure G.13 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF calculations for Reaction
load 2.
Figure G.14 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF calculations for Reaction
load 3.
-0.04
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.03
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 2
SDOF 	FE 3D
-0.03
-0.02
-0.01
0.00
0.01
0.02
0.03
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 2
SDOF 	FE 3D

-- 303 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	284
G.3.1.2 Increased stiffness of the wall
The deformation of the column for the different loads in the SDOF calculations is
compared to the deformations of the 3D FE model.
Figure G.15 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF analysis for the Direct load.
Figure G.16 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF calculations for Reaction
load 1.
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 1
SDOF 	FE 3D
-0.075
-0.050
-0.025
0.000
0.025
0.050
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 1
SDOF 	FE 3D

-- 304 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 285
Figure G.17 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF calculations for Reaction
load 2.
Figure G.18 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF calculations for Reaction
load 3.
-0.150
-0.100
-0.050
0.000
0.050
0.100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 2
SDOF 	FE 3D
-0.15
-0.10
-0.05
0.00
0.05
0.10
0.15
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
def elastic reaction load 2
SDOF 	FE 3D

-- 305 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	286
G.3.2 Elasto-plastic response
G.3.2.1 Decreased internal resistance of the wall
The deformation of the column for the different loads in the SDOF calculations is
compared to the deformation of the 3D FE model, see Figure G.19 to Figure G.20.
Figure G.19 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF analysis for the Direct load.
Figure G.20 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF analysis for Reaction load 5
and 6.
-0.02
0.00
0.02
0.04
0.06
0.08
0.10
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
direct load
SDOF 	FE 3D
-0.02
-0.01
0.00
0.01
0.02
0.03
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
SDOF Reaction load 5 	SDOF Reaction load 6 	FE 3D

-- 306 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 287
G.3.2.2 Increased internal resistance of the wall
The deformation of the column for the different SDOF loads are compared to the
deformation of the 3D FE model, see Figure G.21 to Figure G.22.
Figure G.21 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF analysis for the Direct load.
Figure G.22 Comparison of the deformation in the middle of the column obtained
in the 3D FE analysis and in the SDOF analysis for Reaction load 5
and 6.
-0.025
0.000
0.025
0.050
0.075
0.100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic direct load
SDOF 	FE 3D
-0.05
0.00
0.05
0.10
0.15
0.20
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Deformation,
 u [m]
Time, t [s]
comparison def. 2D to 3D and SDOF-elastio-plastic
SDOF Reaction load 5 	SDOF Reaction load 6 	FE 3D

-- 307 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	288
Reaction loads	G.4
G.4.1 Elastic response
G.4.1.1 Decreased stiffness of the wall
The reaction forces in the different points along the column are compared to a simply
supported beam, see Figure G.23 to Figure G.29.
Figure G.23 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 1.
-60
-40
-20
0
20
40
60
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 12
Simply supported beam 	Wall - Point 1

-- 308 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 289
Figure G.24 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 2.
Figure G.25 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 3.
-60
-40
-20
0
20
40
60
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 25
Simply supported beam 	Wall - Point 2
-60
-40
-20
0
20
40
60
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 49
Simply supported beam 	Wall - Point 3

-- 309 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	290
Figure G.26 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 4.
Figure G.27 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 5.
-60
-40
-20
0
20
40
60
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 73
Simply supported beam 	Wall - Point 4
-60
-40
-20
0
20
40
60
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 97
Simply supported beam 	Wall - Point 5

-- 310 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 291
Figure G.28 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 6.
Figure G.29 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 7.
G.4.1.2 Increased stiffness of the wall
The reaction forces in the different points along the column are compared to a simply
supported beam in Figure G.30 to Figure G.36.
-60
-40
-20
0
20
40
60
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 121
Simply supported beam 	Wall - Point 6
-60
-40
-20
0
20
40
60
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 145
Simply supported beam 	Wall - Point 7

-- 311 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	292
Figure G.30 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 1.
Figure G.31 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 2.
-100
-75
-50
-25
0
25
50
75
100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 12
Simply supported beam 	Wall - Point 1
-100
-75
-50
-25
0
25
50
75
100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 25
Simply supported beam 	Wall - Point 2

-- 312 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 293
Figure G.32 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 3.
Figure G.33 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 4.
-100
-75
-50
-25
0
25
50
75
100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 49
Simply supported beam 	Wall - Point 3
-100
-75
-50
-25
0
25
50
75
100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 73
Simply supported beam 	Wall - Point 4

-- 313 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	294
Figure G.34 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 5.
Figure G.35 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 6.
-100
-75
-50
-25
0
25
50
75
100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 97
Simply supported beam 	Wall - Point 5
-100
-75
-50
-25
0
25
50
75
100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 121
Simply supported beam 	Wall - Point 6

-- 314 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 295
Figure G.36 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 7.
G.4.2 Elasto-plastic response
G.4.2.1 Decreased internal resistance of the wall
The reaction forces in the different points along the column are compared to a simply
supported beam in Figure G.37 to Figure G.43.
-100
-75
-50
-25
0
25
50
75
100
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction el point 145
Simply supported beam 	Wall - Point 7

-- 315 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	296
Figure G.37 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 1.
Figure G.38 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 2.
-30
-20
-10
0
10
20
30
40
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 12
Simply supported beam 	Wall - Point 1
-30
-20
-10
0
10
20
30
40
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 25
Simply supported beam 	Wall - Point 2

-- 316 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 297
Figure G.39 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 3.
Figure G.40 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 4.
-30
-20
-10
0
10
20
30
40
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 49
Simply supported beam 	Wall - Point 3
-30
-20
-10
0
10
20
30
40
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 73
Simply supported beam 	Wall - Point 4

-- 317 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	298
Figure G.41 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 5.
Figure G.42 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 6.
-30
-20
-10
0
10
20
30
40
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 97
Simply supported beam 	Wall - Point 5
-30
-20
-10
0
10
20
30
40
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 121
Simply supported beam 	Wall - Point 6

-- 318 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 299
Figure G.43 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 7.
G.4.2.2 Increased internal resistance of the wall
The reaction forces in the different points along the column are compared to a simply
supported beam in Figure G.44 to Figure G.50.
Figure G.44 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 1.
-30
-20
-10
0
10
20
30
40
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 145
Simply supported beam 	Wall - Point 7
-80
-60
-40
-20
0
20
40
60
80
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 12
Simply supported beam 	Wall - Point 1

-- 319 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	300
Figure G.45 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 2.
Figure G.46 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 3.
-80
-60
-40
-20
0
20
40
60
80
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 25
Simply supported beam 	Wall - Point 2
-80
-60
-40
-20
0
20
40
60
80
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 49
Simply supported beam 	Wall - Point 3

-- 320 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 301
Figure G.47 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 4.
Figure G.48 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 5.
-80
-60
-40
-20
0
20
40
60
80
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 73
Simply supported beam 	Wall -Point 4
-80
-60
-40
-20
0
20
40
60
80
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 97
Simply supported beam 	Wall - Point 5

-- 321 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	302
Figure G.49 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 6.
Figure G.50 A comparison of the reaction forces from a simply supported beam and
the reaction forces transferred from the wall panel to the column in
point 7.
-80
-60
-40
-20
0
20
40
60
80
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 121
Simply supported beam 	Wall - Point 6
-80
-60
-40
-20
0
20
40
60
80
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0.7 	0.8 	0.9 	1.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 145
Simply supported beam 	Wall - Point 7

-- 322 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 303
Comparison of delayed load in SDOF and 3D FE	G.5
analysis
G.5.1 Elastic response
G.5.1.1 Decreased stiffness of the wall
In the 3D FE analysis the delayed load is calculated as the sum of all support reactions
acting on the column. Here, it is compared to the total delayed load simulated in
SDOF in Figure G.51.
Figure G.51 A comparison of the delayed load in SDOF and in the 3D FE analysis.
G.5.1.2 Increased stiffness of the wall
In the 3D FE analysis the delayed load is calculated as the sum of all support reactions
acting on the column. Here, it is compared to the total delayed load simulated in
SDOF in Figure G.52.
-400
-200
0
200
400
600
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 145
SDOF 	FE 3D

-- 323 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	304
Figure G.52 A comparison of the delayed loading in SDOF and in the 3D FE
analysis.
G.5.2 Elasto-plastic response
G.5.2.1 Decreased internal resistance of the wall
In the 3D FE analysis the delayed load is calculated as the sum of all support reactions
acting on the column. Here, it is compared to the total delayed load simulated in
SDOF in Figure G.53.
Figure G.53 A comparison of the delayed loading in SDOF and in the 3D FE
analysis.
-1 200
-800
-400
0
400
800
1 200
1 600
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 145
SDOF 	FE 3D
-200
-100
0
100
200
300
400
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 145
SDOF 	FE 3D

-- 324 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 305
G.5.2.2 Increased internal resistance of the wall
In the 3D FE analysis the delayed load is calculated as the sum of all support reactions
acting on the column. Here, it is compared to the total delayed load simulated in
SDOF in Figure G.54.
Figure G.54 A comparison of the delayed loading in SDOF and in the 3D FE
analysis.
-600
-400
-200
0
200
400
600
800
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Reaction,
 R [kN]
Time, t [s]
reaction elplpoint 145
SDOF 	FE 3D

-- 325 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	306
APPENDIX H Indata files for ADINA
2D Frame with elasto-plastic material model	H.1
DATABASE NEW SAVE=NO PROMPT=NO
FEPROGRAM ADINA
CONTROL FILEVERSION=V88
*************************** ANALYSIS TYPE *************************
MASTER’S ANALYSIS=DYNAMIC-DIRECT-INTEGRATION MODEX=EXECUTE,
TSTART=0 IDOF=1110 OVALIZAT=NONE,
FLUIDPOT=AUTOMATIC CYCLICPA=1 IPOSIT=STOP REACTION=YES,
INITIALS=NO FSINTERA=NO IRINT=DEFAULT CMASS=NO,
SHELLNDO=AUTOMATIC AUTOMATI=OFF SOLVER=SPARSE,
CONTACT-=CONSTRAINT-FUNCTION TRELEASE=0,
RESTART-=NO FRACTURE=NO LOAD-CAS=NO LOAD-PEN=NO SINGULAR=YES,
STIFFNES=0.0001 MAP-OUTP=NONE MAP-FORM=NO,
NODAL-DE='' POROUS-C=NO ADAPTIVE=0 ZOOM-LAB=1 AXIS-CYC=0,
PERIODIC=NO VECTOR-S=GEOMETRY EPSI-FIR=NO STABILIZ=NO,
STABFACT=1E-10 RESULTS=PORTHOLE FEFCORR=NO,
BOLTSTEP=1 EXTEND-S=YES CONVERT-=NO DEGEN=YES TMC-MODE=NO,
ENSIGHT-=NO IRSTEPS=1 INITIALT=NO TEMP-INT=NO ESINTERA=NO,
OP2GEOM=NO
*
ANALYSIS DYNAMIC-DIRECT-INTEGRATION METHOD=NEWMARK,
DELTA=0.5 ALPHA=0.25,
THETA=1.4 TIMESTEP=TOTALTIME NCRSTEP=1,
CRSTEP=0 MASS-SCA=1,
DTMIN1=0 DTMIN2=0,
GAMMA=0.5
****************************** GEOMETRY ***************************
COORDINATES POINT SYSTEM=0
@CLEAR
1 0 0 0 0
2 0 7 0 0
3 0 7.01 0 0
4 15 7.01 0 0
5 15 7 0 0
6 15 0 0 0
7 0 8 0 0
8 16 0 0 0
@
*
LINE STRAIGHT NAME=1 P1=1 P2=2
LINE STRAIGHT NAME=2 P1=3 P2=4
LINE STRAIGHT NAME=3 P1=5 P2=6
*
CROSS-SECTIO RECTANGULAR NAME=1 WIDTH=0.2,
HEIGHT=1 SC=0 TC=0,
TORFAC=1 SSHEARF=0,
TSHEARF=0 ISHEAR=NO SQUARE=NO
***************************** MATERIAL*****************************
MATERIAL PLASTIC-BILINEAR NAME=1 HARDENIN=ISOTROPIC,
E=2.7001E+09 NU=0,
YIELD=5684900 ET=100 EPA=0,

-- 326 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 307
STRAINRA=0 DENSITY=2400 ALPHA=0,
TREF=0 DEPENDEN=NO TRANSITI=0.0001,
EP-STRAI=0 BCURVE=0 BVALUE=0,
XM-INF=0 XM0=0,
ETA=0 MDESCRIP='NONE'
*********************** BOUNDARY CONDITIONS *********************
FIXBOUNDARY POINTS FIXITY=ALL
@CLEAR
1 'ALL'
6 'ALL'
@
*
RIGIDLINK NAME=1 SLAVETYP=POINT SLAVENAM=2 MASTER’STY=POINT
MASTER’SNA=3,
DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0 DOF=ALL,
DOFSI=123
*
RIGIDLINK NAME=2 SLAVETYP=POINT SLAVENAM=4 MASTER’STY=POINT
MASTER’SNA=5,
DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0 DOF=ALL,
DOFSI=123
*
RIGIDLINK NAME=1 SLAVETYP=POINT SLAVENAM=3 MASTER’STY=POINT
MASTER’SNA=2,
DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0 DOF=ALL,
DOFSI=123
**************************** ELEMENTS *****************************
SUBDIVIDE MODEL MODE=DIVISIONS SIZE=0 NDIV=30,
PROGRESS=GEOMETRIC MINCUR=1
*
EGROUP BEAM NAME=1 SUBTYPE=TWO-D DISPLACE=DEFAULT MATERIAL=1 RINT=5,
SINT=3 TINT=DEFAULT RESULTS=STRESSES INITIALS=NONE CMASS=DEFAULT,
RIGIDEND=NONE MOMENT-C=NO RIGIDITY=0 MULTIPLY=1000000,
RUPTURE=ADINA OPTION=NONE BOLT-TOL=0 DESCRIPT=,
'NONE' SECTION=1 PRINT=DEFAULT SAVE=DEFAULT TBIRTH=0,
TDEATH=0 SPOINT=4 BOLTFORC=0,
BOLTNCUR=0 TMC-MATE=1 BOLT-NUM=0 BOLT-LOA=0,
WARP=NO
*
GLINE NODES=2 AUXPOINT=8 NCOINCID=ENDS NCENDS=12,
NCTOLERA=1E-05 SUBSTRUC=0 GROUP=1 MIDNODES=CURVED,
XO=0 YO=0 ZO=0,
XYZOSYST=SKEW
@CLEAR
1
3
@
*
EGROUP BEAM NAME=2 SUBTYPE=TWO-D DISPLACE=DEFAULT MATERIAL=1 RINT=5,
SINT=3 TINT=DEFAULT RESULTS=STRESSES INITIALS=NONE CMASS=DEFAULT,
RIGIDEND=NONE MOMENT-C=NO RIGIDITY=0 MULTIPLY=1000000,
RUPTURE=ADINA OPTION=NONE BOLT-TOL=0 DESCRIPT=,
'NONE' SECTION=1 PRINT=DEFAULT SAVE=DEFAULT TBIRTH=0,
TDEATH=0 SPOINT=4 BOLTFORC=0,
BOLTNCUR=0 TMC-MATE=1 BOLT-NUM=0 BOLT-LOA=0,
WARP=NO

-- 327 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	308
*
GLINE NODES=2 AUXPOINT=7 NCOINCID=ENDS NCENDS=12,
NCTOLERA=1E-05 SUBSTRUC=0 GROUP=2 MIDNODES=CURVED,
XO=0 YO=0 ZO=0,
XYZOSYST=SKEW
@CLEAR
2
@
************************** DYNAMIC LOAD **************************
LOAD LINE NAME=1 MAGNITUD=-60000
*
APPLY-LOAD BODY=0
@CLEAR
1 'LINE' 1 'LINE' 1 0 1 0 0 -1 8 0 0 'NO',
0 0 1 0 'MID'
@
*
TIMEFUNCTION NAME=1 IFLIB=1 FPAR1=0,
FPAR2=0 FPAR3=0,
FPAR4=0 FPAR5=0,
FPAR6=0
@CLEAR
0 0
0.00025 1
0.025 0
2 0
@
*
TIMESTEP NAME=LOAD
@CLEAR
8000 0.00025
@
3D Frame with elasto-plastic material model	H.2
DATABASE NEW SAVE=NO PROMPT=NO
FEPROGRAM ADINA
CONTROL FILEVERSION=V88
*
FEPROGRAM PROGRAM=ADINA
*
*************************** ANALYSIS TYPE *************************
*
MASTER’S ANALYSIS=DYNAMIC-DIRECT-INTEGRATION MODEX=EXECUTE,
TSTART=0 IDOF=0 OVALIZAT=NONE FLUIDPOT=AUTOMATIC,
CYCLICPA=1 IPOSIT=STOP REACTION=YES INITIALS=NO FSINTERA=NO,
IRINT=DEFAULT CMASS=NO SHELLNDO=AUTOMATIC AUTOMATI=OFF,
SOLVER=SPARSE CONTACT-=CONSTRAINT-FUNCTION,
TRELEASE=0.00000000000000 RESTART-=NO FRACTURE=NO LOAD-CAS=NO,
LOAD-PEN=NO SINGULAR=YES STIFFNES=0.000100000000000000,
MAP-OUTP=NONE MAP-FORM=NO NODAL-DE='' POROUS-C=NO ADAPTIVE=0,
ZOOM-LAB=1 AXIS-CYC=0 PERIODIC=NO VECTOR-S=GEOMETRY EPSI-FIR=NO,
STABILIZ=NO STABFACT=1.00000000000000E-10 RESULTS=PORTHOLE,
FEFCORR=NO BOLTSTEP=1 EXTEND-S=YES CONVERT-=NO DEGEN=YES,
TMC-MODE=NO ENSIGHT-=NO IRSTEPS=1 INITIALT=NO TEMP-INT=NO,
ESINTERA=NO OP2GEOM=NO
*
ANALYSIS DYNAMIC-DIRECT-INTEGRATION METHOD=NEWMARK,

-- 328 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 309
DELTA=0.5 ALPHA=0.25,
THETA=1.4 TIMESTEP=TOTALTIME NCRSTEP=1,
CRSTEP=0 MASS-SCA=1,
DTMIN1=0 DTMIN2=0,
GAMMA=0.5
****************************** GEOMETRY ***************************
COORDINATES POINT SYSTEM=0
@CLEAR
1 0 0 0 0
2 7 0 0 0
3 0 1 0 0
4 0.5 0 0.01 0
5 0.5 0 3 0
6 0.5 0 -3 0
7 0.5 0 -0.01 0
9 0 0 3 0
10 0.5 1 3 0
11 0.25 0 0 0
12 0.5 0 0 0
13 0.75 0 0 0
14 1 0 0 0
15 1.25 0 0 0
16 1.5 0 0 0
17 1.75 0 0 0
18 2 0 0 0
19 2.25 0 0 0
20 2.5 0 0 0
21 2.75 0 0 0
22 3 0 0 0
23 3.25 0 0 0
24 3.5 0 0 0
25 3.75 0 0 0
26 4 0 0 0
27 4.25 0 0 0
28 4.5 0 0 0
29 4.75 0 0 0
30 5 0 0 0
31 5.25 0 0 0
32 5.5 0 0 0
33 5.75 0 0 0
34 6 0 0 0
35 6.25 0 0 0
36 6.5 0 0 0
37 6.75 0 0 0
38 7 0 0 0
39 1.5 0 0.01 0
40 1.5 0 3 0
41 1.5 0 -0.01 0
42 1.5 0 -3 0
43 2.5 0 0.01 0
44 2.5 0 3 0
45 2.5 0 -0.01 0
46 2.5 0 -3 0
47 3.5 0 0.01 0
48 3.5 0 3 0
49 3.5 0 -0.01 0
50 3.5 0 -3 0
51 4.5 0 0.01 0

-- 329 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	310
52 4.5 0 3 0
53 4.5 0 -0.01 0
54 4.5 0 -3 0
55 5.5 0 0.01 0
56 5.5 0 3 0
57 5.5 0 -0.01 0
58 5.5 0 -3 0
59 6.5 0 0.01 0
60 6.5 0 3 0
61 6.5 0 -0.01 0
62 6.5 0 -3 0
63 1.5 1 3 0
64 2.5 1 3 0
65 3.5 1 3 0
66 4.5 1 3 0
67 5.5 1 3 0
68 6.5 1 3 0
@
*
LINE STRAIGHT NAME=1 P1=1 P2=2
*
LINE STRAIGHT NAME=2 P1=5 P2=4
*
LINE STRAIGHT NAME=3 P1=7 P2=6
*
LINE STRAIGHT NAME=4 P1=39 P2=40
*
LINE STRAIGHT NAME=5 P1=41 P2=42
*
LINE STRAIGHT NAME=6 P1=43 P2=44
*
LINE STRAIGHT NAME=7 P1=45 P2=46
*
LINE STRAIGHT NAME=8 P1=47 P2=48
*
LINE STRAIGHT NAME=9 P1=49 P2=50
*
LINE STRAIGHT NAME=10 P1=51 P2=52
*
LINE STRAIGHT NAME=11 P1=53 P2=54
*
LINE STRAIGHT NAME=12 P1=55 P2=56
*
LINE STRAIGHT NAME=13 P1=57 P2=58
*
LINE STRAIGHT NAME=14 P1=59 P2=60
*
LINE STRAIGHT NAME=15 P1=61 P2=62
*
CROSS-SECTIO RECTANGULAR NAME=1 WIDTH=0.6,
HEIGHT=0.5 SC=0 TC=0,
TORFAC=1 SSHEARF=0,
TSHEARF=0 ISHEAR=NO SQUARE=NO
*
CROSS-SECTIO RECTANGULAR NAME=2 WIDTH=1,
HEIGHT=0.2 SC=0 TC=0,
TORFAC=1 SSHEARF=0,
TSHEARF=0 ISHEAR=NO SQUARE=NO

-- 330 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 311
***************************** MATERIAL*****************************
MATERIAL PLASTIC-BILINEAR NAME=1 HARDENIN=ISOTROPIC,
E=2.7001E+09 NU=0,
YIELD=4101600 ET=100 EPA=0,
STRAINRA=0 DENSITY=2400 ALPHA=0,
TREF=0 DEPENDEN=NO TRANSITI=0.0001,
EP-STRAI=0 BCURVE=0 BVALUE=0,
XM-INF=0 XM0=0,
ETA=0 MDESCRIP='wall'
*
MATERIAL PLASTIC-BILINEAR NAME=2 HARDENIN=ISOTROPIC,
E=4.1619E+09 NU=0,
YIELD=5069100 ET=100 EPA=0,
STRAINRA=0 DENSITY=2400 ALPHA=0,
TREF=0 DEPENDEN=NO TRANSITI=0.0001,
EP-STRAI=0 BCURVE=0 BVALUE=0,
XM-INF=0 XM0=0,
ETA=0 MDESCRIP='column'
*********************** BOUNDARY CONDITIONS *********************
FIXITY NAME=2
@CLEAR
'Y-TRANSLATION'
'OVALIZATION'
@
*
FIXITY NAME=5
@CLEAR
'X-TRANSLATION'
'Z-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'Z-ROTATION'
'OVALIZATION'
@
*
FIXBOUNDARY POINTS FIXITY=ALL
@CLEAR
1 'ALL'
2 '2'
5 '5'
6 '5'
40 '5'
44 '5'
48 '5'
52 '5'
56 '5'
60 '5'
62 '5'
58 '5'
54 '5'
50 '5'
46 '5'
42 '5'
@
*
RIGIDLINK NAME=1 SLAVETYP=POINT SLAVENAM=4 MASTER’STY=POINT
MASTER’SNA=12,

-- 331 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	312
DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0 DOF=ALL,
DOFSI=123
*
RIGIDLINK NAME=2 SLAVETYP=POINT SLAVENAM=7 MASTER’STY=POINT
MASTER’SNA=12,
DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0 DOF=ALL,
DOFSI=123
*
RIGIDLINK NAME=3 SLAVETYP=POINT SLAVENAM=41 MASTER’STY=POINT,
MASTER’SNA=16 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=4 SLAVETYP=POINT SLAVENAM=39 MASTER’STY=POINT,
MASTER’SNA=16 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=5 SLAVETYP=POINT SLAVENAM=43 MASTER’STY=POINT,
MASTER’SNA=20 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=6 SLAVETYP=POINT SLAVENAM=45 MASTER’STY=POINT,
MASTER’SNA=20 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=7 SLAVETYP=POINT SLAVENAM=47 MASTER’STY=POINT,
MASTER’SNA=24 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=8 SLAVETYP=POINT SLAVENAM=49 MASTER’STY=POINT,
MASTER’SNA=24 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=9 SLAVETYP=POINT SLAVENAM=51 MASTER’STY=POINT,
MASTER’SNA=28 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=10 SLAVETYP=POINT SLAVENAM=53 MASTER’STY=POINT,
MASTER’SNA=28 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=11 SLAVETYP=POINT SLAVENAM=55 MASTER’STY=POINT,
MASTER’SNA=32 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=12 SLAVETYP=POINT SLAVENAM=57 MASTER’STY=POINT,
MASTER’SNA=32 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=13 SLAVETYP=POINT SLAVENAM=59 MASTER’STY=POINT,
MASTER’SNA=36 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
*
RIGIDLINK NAME=14 SLAVETYP=POINT SLAVENAM=61 MASTER’STY=POINT,
MASTER’SNA=36 DISPLACE=DEFAULT OPTION=0 SLAVEBOD=0 MASTER’SBO=0,
DOF=ALL DOFSI=123
**************************** ELEMENTS *****************************
EGROUP BEAM NAME=1 SUBTYPE=THREE-D DISPLACE=DEFAULT MATERIAL=2 RINT=5,
SINT=DEFAULT TINT=DEFAULT RESULTS=FORCES INITIALS=NONE,

-- 332 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 313
CMASS=DEFAULT RIGIDEND=NONE MOMENT-C=NO RIGIDITY=0,
MULTIPLY=1000000 RUPTURE=ADINA OPTION=NONE,
BOLT-TOL=0 DESCRIPT='column' SECTION=1,
PRINT=DEFAULT SAVE=DEFAULT TBIRTH=0,
TDEATH=0 SPOINT=4 BOLTFORC=0,
BOLTNCUR=0 TMC-MATE=1 BOLT-NUM=0 BOLT-LOA=0,
WARP=NO
*
EGROUP BEAM NAME=2 SUBTYPE=THREE-D DISPLACE=DEFAULT MATERIAL=1 RINT=5,
SINT=DEFAULT TINT=DEFAULT RESULTS=FORCES INITIALS=NONE,
CMASS=DEFAULT RIGIDEND=NONE MOMENT-C=NO RIGIDITY=0,
MULTIPLY=1000000 RUPTURE=ADINA OPTION=NONE,
BOLT-TOL=0 DESCRIPT='wall' SECTION=2,
PRINT=DEFAULT SAVE=DEFAULT TBIRTH=0,
TDEATH=0 SPOINT=4 BOLTFORC=0,
BOLTNCUR=0 TMC-MATE=1 BOLT-NUM=0 BOLT-LOA=0,
WARP=NO
*
SUBDIVIDE LINE NAME=1 MODE=LENGTH SIZE=0.25
*
GLINE NODES=2 AUXPOINT=3 NCOINCID=ENDS NCENDS=12,
NCTOLERA=1E-05 SUBSTRUC=0 GROUP=1 MIDNODES=CURVED,
XO=0 YO=0 ZO=0,
XYZOSYST=SKEW
@CLEAR
1
@
*
SUBDIVIDE LINE NAME=2 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=3 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=4 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=5 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=6 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=7 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=8 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=9 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=10 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=11 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=12 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO

-- 333 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87	314
*
SUBDIVIDE LINE NAME=13 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=14 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
SUBDIVIDE LINE NAME=15 MODE=DIVISIONS NDIV=12 RATIO=1,
PROGRESS=GEOMETRIC CBIAS=NO
*
GLINE NODES=2 AUXPOINT=9 NCOINCID=ENDS NCENDS=12,
NCTOLERA=1E-05 SUBSTRUC=0 GROUP=2 MIDNODES=CURVED,
XO=0 YO=0 ZO=0,
XYZOSYST=SKEW
@CLEAR
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
13
14
15
@
************************** DYNAMIC LOAD **************************
LOAD LINE NAME=1 MAGNITUD=-60000.0000000000
*
APPLY-LOAD BODY=0
@CLEAR
1 'LINE' 1 'LINE' 3 0 1 0 0 -1 10 0 0 'NO',
0 0 1 0 'MID'
2 'LINE' 1 'LINE' 2 0 1 0 0 -1 10 0 0 'NO',
0 0 1 0 'MID'
3 'LINE' 1 'LINE' 4 0 1 0 0 -1 63 0 0 'NO',
0 0 1 0 'MID'
4 'LINE' 1 'LINE' 5 0 1 0 0 -1 63 0 0 'NO',
0 0 1 0 'MID'
5 'LINE' 1 'LINE' 6 0 1 0 0 -1 64 0 0 'NO',
0 0 1 0 'MID'
6 'LINE' 1 'LINE' 7 0 1 0 0 -1 64 0 0 'NO',
0 0 1 0 'MID'
7 'LINE' 1 'LINE' 8 0 1 0 0 -1 65 0 0 'NO',
0 0 1 0 'MID'
8 'LINE' 1 'LINE' 9 0 1 0 0 -1 65 0 0 'NO',
0 0 1 0 'MID'
9 'LINE' 1 'LINE' 10 0 1 0 0 -1 66 0 0 'NO',
0 0 1 0 'MID'
10 'LINE' 1 'LINE' 11 0 1 0 0 -1 66 0 0 'NO',
0 0 1 0 'MID'
11 'LINE' 1 'LINE' 12 0 1 0 0 -1 67 0 0 'NO',
0 0 1 0 'MID'
12 'LINE' 1 'LINE' 13 0 1 0 0 -1 67 0 0 'NO',

-- 334 of 335 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2013:87 315
0 0 1 0 'MID'
13 'LINE' 1 'LINE' 14 0 1 0 0 -1 68 0 0 'NO',
0 0 1 0 'MID'
14 'LINE' 1 'LINE' 15 0 1 0 0 -1 68 0 0 'NO',
0 0 1 0 'MID'
@
*
TIMEFUNCTION NAME=1 IFLIB=1 FPAR1=0,
FPAR2=0 FPAR3=0,
FPAR4=0 FPAR5=0,
FPAR6=0
@CLEAR
0 0
0.00025 1
0.025 0
2 0
@
*
TIMESTEP NAME=LOAD
@CLEAR
8000 0.00025
@
*

-- 335 of 335 --