---
title: "L04 106 Structural Response Of Reinforced Concrete Beams Subjected To Explosions"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-106_structural-response-of-reinforced-concrete-beams-subjected-to-explosions.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","armering","explosion","shear","load","this","figure"]
summary: "Structural Response of Reinforced Concrete Beams Subjected to Explosions Time dependent transformation factors, support reactions and distribution of section forces Master of Science Thesis in the Master’s Programme Structural Engineering and Buil..."
---

Structural Response of Reinforced
Concrete Beams Subjected to Explosions
Time dependent transformation factors, support reactions and
distribution of section forces
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Performance Design
SEBASTIAN ANDERSSON
HAMPUS KARLSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2012
Master’s Thesis 2012:103
Deformation
 us [mm]
Coordinate, x [m]
Deformation
Rigid body
0.3
0.5
0.8
1.0
1.5
2.0
P(t)

-- 1 of 236 --



-- 2 of 236 --

MASTER’S THESIS 2012:103
Structural Response of Reinforced Concrete Beams
Subjected to Explosions
Time dependent transformation factors, support reactions and distribution of section
forces
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Performance Design
SEBASTIAN ANDERSSON
HAMPUS KARLSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2012

-- 3 of 236 --

Structural Response of Reinforced Concrete Beams Subjected to Explosions
Time dependent transformation factors, support reactions and distribution of section
forces
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Performance Design
SEBASTIAN ANDERSSON
HAMPUS KARLSSON
© SEBASTIAN ANDERSSON & HAMPUS KARLSSON, 2012
Examensarbete / Institutionen för bygg- och miljöteknik,
Chalmers tekniska högskola 2012:103
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover: Initial displacement shape for an elasto-plastic simply supported beam
subjected to an explosion compared to a rigid body motion.
Chalmers Reproservice
Göteborg, Sweden 2012

-- 4 of 236 --

I
Structural Response of Reinforced Concrete Beams Subjected to Explosions
Time dependent transformation factors, support reactions and distribution of section
forces
Master of Science Thesis in the Master’s Programme Structural Engineering and
Building Performance Design
SEBASTIAN ANDERSSON
HAMPUS KARLSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
A shock wave in air resulting from an explosion is a highly impulsive load. A
structural element subjected to an impulse load will behave differently than when
subjected to a static load. This Master's thesis uses finite element analyses and
simplified single degree of freedom systems to describe the structural response for a
simply supported reinforced concrete beam subjected to an impulse load.
Theory about design of reinforced concrete members and how the member can be
described with a single degree of freedom system, denoted SDOF system, are
presented. Further, the magnitude and distribution of section forces are investigated
for an impulse loaded reinforced concrete beam and how well these can be described
different methods. Special attention is given to the phenomenon dynamic direct shear
failure and how this is considered in Swedish and American design codes.
The transformation factors used to transform a structural member into an SDOF
system come from an assumed deformation shape. The deformation shape is initially
governed by wave propagation and the theoretical transformation factors do not
describe the response fully adequate. Therefore, the concept of time dependent
transformation factors is introduced. This concept, require an energy preservation
method that is presented in this thesis, and makes the deformations in the SDOF
approach and the finite element agree very well.
The use of an equivalent static load is shown to provide section forces on the unsafe
side. It is also shown that their distribution cannot be adequately described with an
equivalent static load.
The initial value of the support reaction may obtain a high magnitude when the
structural member is subjected to a highly impulsive impulse load. This is treated in
the literature in different ways. The current Swedish approach overestimates the
support reaction considerably and the best approach is to use obtained time dependent
transformation factors and a varying stiffness. Nevertheless, a more general approach
on how to describe this is needed to describe the exact peak value and the time of its
appearance. The SDOF model for design against direct shear is vague and further
study is needed in order to treat this problem.
Key words: Explosion, impulse load, SDOF, direct shear, finite element analysis,
concrete, dynamic response, time dependent transformation factors, support reaction

-- 5 of 236 --

II
Strukturell respons för armerade betongbalkar utsatta för explosioner
Tidsberoende transformationsfaktorer, reaktionskrafter och fördelning av
sektionskrafter
Examensarbete inom mastersprogrammet Structural Engineering and Building
Performance Design
SEBASTIAN ANDERSSON
HAMPUS KARLSSON
Institutionen för bygg- och miljöteknik
Avdelning för konstruktionsteknik
Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
En stötvåg i luft från en explosion är en impulsiv last. En konstruktion som är utsatt
för en impulsiv last kommer bete sig annorlunda jämfört med en statisk last. Det här
examensarbetet behandlar fritt upplagda armerade betongbalkar som är utsatta för en
impulsiv last. Detta görs genom FE analys och förenklade enfrihetsgradsmetoder.
Teori om hur armerade betongbalkar dimensioneras och hur de kan bli förenklade till
enfrihetsgradssystem presenteras. Vidare undersöks storlek och fördelning på
sektionskrafter och hur väl dessa kan bli förklarade med förenklade metoder. Speciellt
fokus är lagt på fenomenet dynamic direct shear failure och hur detta dimensioneras
för i svensk och amerikansk designkod.
Transformationsfaktorer som används för att göra om ett konstruktionselement till ett
enfrihetsgradssystem kommer från en antagen utböjningsform. I ett tidigt skede beror
utböjningsformen på vågutbredning vilket gör att de teoretiska värdena på
transformationsfaktorerna inte är tillräckligt korrekta. Därför har tidsberoende
transformationsfaktorer introducerats. Energin måste dock bevaras och ett
tillvägagångssätt är presenterat i rapporten. Metoden som använts gör att
deformationen i FE analysen och enfrihetsgradssystemet överensstämmer väldigt väl.
En statisk ekvivalent last undervärderar sektionskrafter nämnvärt. Även den
tillhörande fördelningen kan inte beskrivas med en statisk ekvivalent last.
Stödreaktionen är väldigt hög initialt. Det beaktas av olika dimensioneringsregler på
olika sätt. Dagens svenska metod övervärderar stödreaktionen och den bästa metoden
är att använda tidsberoende transformationsfaktorer och en varierande styvhet. En mer
exakt metod för att bestämma storleken och tidpunkten för den initiala toppen måste
dock hittas.
Enfrihetsgradssystem för direct shear failure behöver utredas mer för att kunna
tillämpas. De undersökta balkarna hade gått sönder i böjning om direct shear failure
inträffar i ett tidigt skede.
Nyckelord: Explosion, impulsiv last, enfrihetsgradssystem, direct shear, finit element
analys, armerad betong, dynamisk, tidsberoende transformationsfaktorer,
stödreaktion

-- 6 of 236 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2012:103 III
Contents
ABSTRACT I
SAMMANFATTNING II
CONTENTS III
PREFACE VIII
NOTATIONS IX
1 INTRODUCTION 1
1.1 Background 1
1.2 Aim 2
1.3 Method 2
1.4 Limitations 3
1.5 Outline of the report 3
2 THEORY 5
2.1 Explosions 5
2.2 Structural response of reinforced concrete subjected to static load 7
2.2.1 Beams 7
2.2.1.1 Introduction 7
2.2.1.2 Moment 8
2.2.1.3 Shear 10
2.2.2 Slabs 13
2.2.2.1 Introduction 13
2.2.2.2 Strip method 14
2.2.2.3 Yield line method 16
2.2.2.4 Shear 17
2.2.3 Plastic rotation capacity 17
2.3 Simplified material behaviour 18
2.3.1 Introduction 18
2.3.2 Linear elastic 18
2.3.3 Ideal plastic 18
2.3.4 Elasto-plastic 19
2.4 Impulse loaded systems 20
2.4.1 Definitions of dynamic parameters 20
2.4.1.1 Force 20
2.4.1.2 Pressure 20
2.4.1.3 Momentum and Impulse 20
2.4.1.4 Work 22
2.4.1.5 Strain rate 23
2.4.1.6 Wave propagation 24
2.4.2 Equivalent SDOF system 26
2.4.2.1 Introduction 26
2.4.2.2 Equation of motion 27

-- 7 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
IV
2.4.2.3 Transformation into an equivalent SDOF-model 27
2.4.2.4 Work 30
2.4.2.5 Dynamic reaction 32
2.4.2.6 Equivalent static load 34
2.4.2.7 Iso-damage curves 36
2.5 Direct shear 39
2.5.1 Static response 39
2.5.2 Dynamic response 40
2.5.3 Simplified model for dynamic direct shear 43
2.5.4 Design approaches 47
2.5.4.1 Swedish design approach 47
2.5.4.2 American design approach 50
3 REINFORCED CONCRETE BEAM SUBJECTED TO IMPULSE LOAD 53
3.1 Introduction 53
3.2 Definition of geometry and loading 53
3.3 Equivalent SDOF system 55
3.3.1 Mass 55
3.3.2 Stiffness 55
3.3.3 Maximum internal resistance 56
3.4 Hand calculations 58
3.4.1 Maximum required deformation 58
3.4.2 Dynamic reactions 59
3.5 FE-analysis ADINA – considerations and restrictions 62
3.5.1 Introduction 62
3.5.2 Equivalent Young’s Modulus 62
3.5.3 FE-elements 64
3.5.4 Wave propagation 65
3.5.4.1 Introduction 65
3.5.4.2 Beam elements 66
3.5.4.3 2D-solid elements 68
3.5.4.4 Influence by choice of time step 70
3.5.5 Integration schemes 71
3.5.6 Output 72
3.5.6.1 Shear force 72
3.5.6.2 Moment 74
4 DISPLACEMENT 75
4.1 Midpoint displacement 75
4.1.1 Elastic analysis 75
4.1.2 Ideal plastic analysis 76
4.1.3 Elasto-plastic analysis 77
4.2 Deformation shape 79
4.2.1 Introduction 79
4.2.2 Elastic analysis 79
4.2.3 Ideal plastic 81

-- 8 of 236 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2012:103 V
4.2.4 Elasto-plastic analysis 83
4.3 Energy balance 83
4.3.1 Introduction 83
4.3.2 Elastic analysis 85
4.3.3 Ideal plastic analysis 86
4.3.4 Elasto-plastic analysis 87
4.4 Transformation factors 89
4.4.1 Calculation of factors 89
4.4.2 Elastic analysis 90
4.4.3 Ideal plastic analysis 91
4.4.4 Elasto-plastic analysis 92
4.5 Implementation of varying transformation factors into the equivalent SDOF
model 93
4.5.1 Introduction 93
4.5.2 Preservation of energy 93
4.5.3 Elastic analysis 95
4.5.4 Ideal plastic analysis 97
4.5.5 Elasto-plastic analysis 98
4.6 Discussion of results 100
5 MOMENT AND SHEAR FORCE 102
5.1 Introduction 102
5.2 Elastic analysis 102
5.2.1 Comparison with equivalent static load 105
5.2.2 Influence of damping 108
5.3 Ideal plastic analysis 110
5.3.1 Comparison with equivalent static load 112
5.4 Elasto-plastic analysis 114
5.4.1 Comparison with the equivalent static load 116
5.5 Discussion of results 117
6 SUPPORT REACTION 119
6.1 Definition of used methods 119
6.2 Elastic analysis 120
6.3 Ideal plastic analysis 127
6.4 Elasto-plastic 130
6.5 Discussion of results 132
7 DIRECT SHEAR 134
7.1 SDOF model 134
7.2 Failure criteria 134
7.3 Iso-damage curves 136

-- 9 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
VI
7.4 Discussion of results 138
8 FINAL CONCLUSIONS AND RECOMMENDATIONS 140
8.1 Conclusions 140
8.2 Further studies 142
9 REFERENCES 143
APPENDIX A THE CENTRAL DIFFERENCE METHOD A1
APPENDIX B DERIVATION OF EXPRESSIONS FOR MAXIMUM SHEAR B1
B.1 Fortifikationsverket B1
B.2 Position of resultant in Biggs’ max reaction calculation expression B3
APPENDIX C DERIVATION OF SHEAR SPAN C1
APPENDIX D ENERGY PRESERVATION WHILE VARYING
TRANSFORMATION FACTORS D1
APPENDIX E ENERGY BALANCE FOR OTHER LOAD CASES E1
E.1 Introduction E1
E.2 Beam L=3 m E1
E.2.1 Elastic load case 0 E1
E.2.2 Elastic load case 3 E3
E.2.3 Plastic load case 3 E4
E.2.4 Elasto-plastic load case 3 E6
E.3 Beam L=5 m E8
E.3.1 Elastic load case 1 E8
E.3.2 Plastic load case 1 E9
E.3.3 Elasto-plastic load case 1 E11
APPENDIX F TRANSFORMATION FACTORS FOR DIFFERENT LOAD
CASES AND DIMENSIONS F1
F.1 Introduction F1
F.2 Beam L=3 m F1
F.2.1 Load case 1 F1
F.2.2 Load case 2 F2
F.2.3 Load case 3 F3
F.3 Beam L=5 m F4
F.3.1 Load case 1 F4
APPENDIX G DEFORMATIONS AND MOMENT AND SHEAR
DISTRIBUTIONS OVER TIME G1

-- 10 of 236 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2012:103 VII
G.1 Elastic G1
G.2 Ideal plastic G6
G.3 Elasto-plastic G12
APPENDIX H INFLUENCE OF DAMPING H1
H.1. Undamped case H2
H.2 Damped case H5
APPENDIX I DETAILED ANALYSIS I1
I.1 Orientation I1
I.2 Modelling technique I1
I.2.1 Introduction I1
I.2.2 Geometry I1
I.2.2 Loading and solution method I2
I.2.3 Concrete I3
I.2.4 Reinforcement I5
I.2.5 Bond between reinforcement and concrete I6
I.2.6 Verification I7
I.3 Results I11

-- 11 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
VIII
Preface
This Master’s thesis investigates the response of reinforced concrete beams subjected
to impulse loading. It has been carried out in cooperation with the Division of
Structural Engineering at Chalmers University of Technology and Reinertsen Sverige
AB. The studies were carried out at Reinertsen’s office in Göteborg between January
and June 2012.
Thanks go out to Reinertsen for providing necessary literature, stationery and
computer programs as well as a place to perform the studies. The supervision and
guidance given by Morgan Johansson, PhD Reinertsen, is highly appreciated. We
would also want to thank Kent Gylltoft who has been our examiner.
Finally, we want to thank each other for having worked hard throughout the project.
Göteborg
Sebastian Andersson and Hampus Karlsson

-- 12 of 236 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2012:103 IX
Notations
Roman upper case letters
A Area
AI Equivalent area state I
AII Equivalent area state II
As Area of reinforcement
C Damping
E Young’s modulus
Ec Young’s modulus for concrete
Eeq Equivalent Young’s modulus for cracked reinforced concrete
Es Young’s modulus for steel
F External force
Fc Force in concrete
Fs Force in steel
G Shear modulus
I Moment of inertia
I Impulse
Ic Moment of inertia for concrete
II Moment of inertia state I
III Moment of inertia state II
Ik Characteristic impulse
K Stiffness
L Length
M Moment
Mcr Cracking moment
MEd Designing moment
Mf Bending moment in midpoint
MRd Ultimate moment capacity
Myd Moment capacity when yielding starts
N Normal force
P Pressure
Ppeak Peak pressure load
R Internal resisting force
Rm Maximum internal resisting force
Rs Direct shear resistance

-- 13 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
X
T Natural period
V Shear force
VEd Designing shear force
Vel Elastic support reaction
Vpl Plastic support reaction
Vs Support reaction
We External energy
Wi Internal energy
Wk Kinetic energy
Wtot Total energy
Qeq Total equivalent load
Qel Elastic equivalent load
Qpl Plastic equivalent load
Roman lower case letters
a	
Acceleration
a	
Length of slab
	a	
Shear span
b	
Width of cross-section
b	
Width of slab
c	
Concrete cover
c	
Damping
p	c	
Pressure wave velocity
s	c	
Shear wave velocity
d	
Effective depth of cross-section
cc	f	
Concrete compressive strength
cd	f	
Design value of concrete compressive strength
k	f	
Characteristic value of material property
d	f	
Design value of material property
y	f	
Yield stress
yd	f	
Design value of yield stress
h	
Height of cross-section

-- 14 of 236 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2012:103 XI
i	
Impulse intensity
ki	
Characteristic impulse intensity
k	
Stiffness
e	k	
Equivalent stiffness
I	k	
Stiffness state I
II	k	
Stiffness state II
l	
Length
m	
Mass
e	m	
Equivalent mass
el	m	
Equivalent elastic mass
f	m	
Dynamic bending moment
pl	m	
Equivalent plastic mass
p	
Momentum
q	
Distributed load
cr	q	
Distributed crack load
eq	q	
Equivalent distributed load
u	q	
Ultimate distributed load
r	
Radius of curvature
s	
Reinforcement bar spacing
t	
Time
a	t	
Arrival time
	t	
Load duration
u	
Displacement
u	
First derivative of u with respect to time t, velocity
u	
Second derivative of u with respect to time t, acceleration
el	u	
Elastic displacement
ep	u	
Elasto-plastic displacement
el	ep	u ,	
Elastic par of elasto-plastic displacement
pl	ep	u ,	
Plastic par of elasto-plastic displacement
pl	u	
Plastic displacement

-- 15 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
XII
s	u	
Displacement of system point
tot	u	
Total displacement
x	u	
Displacement of wave in vertical direction
y	u	
Displacement of wave in horizontal direction
v	
Velocity
s	v	
Velocity in system point
x	
Coordinate
x	
Depth of compression zone
I	x	
Depth of compression zone state I
II	x	
Depth of compression zone state II
y	
Coordinate
z	
Coordinate
z	
Coordinate from neutral axis
z	
Internal lever arm for reinforcement
Greek upper case letters
	
Direct shear slip
	
First derivative of
with respect to time t, velocity
	
Second derivative of
with respect to time t, acceleration
	
Deformation shape
Greek lower case letters
	
Damping constant Rayleigh damping
R	
	
Stress block factor
s	
	
Ratio between Young's modulus for steel and concrete
	
Damping constant Rayleigh damping
R	
	
Stress block factor
el	
	
Displacement error
	
Strain
	
Strain rate
cc	
	
Concrete compression strain
ct	
	
Concrete tensile strain

-- 16 of 236 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2012:103 XIII
cu	
	
Ultimate concrete strain
s	
	
Steel strain
y	
	
Yield strain
el	
	
Elastic strain
pl	
	
Plastic strain
	
Bar diameter
	
Damping ratio
F	
	
Ratio between actual peak force and characteristic peak force
I	
	
Ratio between actual impulse and characteristic impulse
k	
	
Transformation factor for the internal force
F	
	
Transformation factor for the external load
m	
	
Transformation factor for the mass
mF	
	
Transformation factor for the mass and the external load
	
Wave length
s	
	
Shear span
	
Support rotation
pl	
	
Plastic rotation
d	pl,	
	
Maximum plastic rotation
	
Density
	
Amount of reinforcement
	
Stress
cc	
	
Concrete compressive stress
ct	
	
Concrete tensile stress
'
y	
	
Fictitious yield stress
	
Shear stress
	
Poisson's ratio
	
Angular frequency

-- 17 of 236 --



-- 18 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 1
1 Introduction
1.1 Background
An explosion occurs when there is a sudden expansion of matter. This rapid
expansion creates a shock wave that in turn results in an impulse load acting on the
surroundings. Explosions can either be intentional or accidental; an act of war or
terror versus an industrial or traffic accident for example. The consequences of such
an event can be devastating to nearby structures and people. As they are spontaneous
events and difficult to predict it is important to build defence structures and to adapt
the design of potentially targeted buildings so that they can withstand this type of
extreme loading. Explosions have recently struck Nordic capital cities, Oslo in July
2011 and Stockholm in December 2010.
Explosion shock waves are highly impulsive and dynamic loads. They are intense and
occur over a very short period of time, typically a few milliseconds. The response of a
structure to a dynamic load varies considerably to that of a static load. The dynamic
response is more difficult to explain and therefore simplified approaches are often
used in order to explain the behaviour of the structure. A well established method is to
transform the structural element into an equivalent single degree of freedom system,
often referred to as an SDOF system, by choosing a system point in the structure.
Transformation factors are used to relate the element’s mass, resistance, damping and
external force to the corresponding equivalent parameters in the simplified SDOF
system. Subsequently, the maximum moments and shear forces acting on the structure
can be found.
The material behaviour will significantly influence the resistance of a structure.
Reinforced concrete has been proven to perform well when subjected to explosions
due to its high mass and ductile behaviour, which dissipates a large amount of energy.
However, it has a complex stress-strain relationship since the concrete cracks and the
steel reinforcement yields. Therefore, the relationship is often idealised to linear
elastic, ideal plastic and elasto-plastic relationships. The same idealisations can be
used for other materials but this thesis will largely focus on reinforced concrete
members.
This work is a continuation of three previous Master’s theses. Nyström (2006), Ek and
Mattsson (2009), and Augustsson and Härenstam (2010) dealt with the response of
reinforced concrete beams and slabs to an explosion by using simplified approaches,
where the main focus was bending response. The results from the simplified design
approach were compared to more detailed finite element methods where it was
concluded that the equivalent SDOF approach using transformation factors could be
somewhat misleading. This was especially the case for plastic and elasto-plastic
analyses. More investigations will therefore be carried out in order to explain the
influence of transformation factors and how the member can be designed for moment
and shear force.
Moment and shear force distributions in an impulse loaded structure differ
significantly compared to the expected static distributions. A phenomenon that has
been observed in some reinforced concrete structures subjected to impulse loads is
called direct shear. Short after detonation, often within the first millisecond, large
shear forces will occur close to the supports, which will cause an almost vertical crack
propagating through the member. This does not occur when the same structure is
subjected to a static load. Knowledge about dynamic direct shear failure is limited.

-- 19 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
2
The Swedish Fortifications Agency (in Swedish; Fortifikationsverket) has recently
given out a handbook, which treats direct shear failure briefly and MSB,
(Myndigheten för samhällsskydd och beredskap), Swedish Civil Contingencies
Agency, requests to know more about it in order to take it into account in design if
needed.
1.2 Aim
The aim of this Master’s thesis is to complement the analyses carried out in previous
Master’s theses and provide a more comprehensive understanding about design
considerations for structures subjected to explosions. The report considers two main
areas:
1) The moment and shear force caused by an impulse load was studied in detail
for reinforced concrete beams. The thesis also investigates and presents how
the shear force can be determined and designed for. Additional attention was
given to the phenomenon of direct shear failure and how it can be taken into
account in design with regard to explosions.
2) Transformation factors have been proven to be somewhat misleading
according to Ek and Mattsson (2009) and Augustsson and Härenstam (2010).
This thesis presents how these differ from more detailed finite element
analyses and how can it be taken into account in a simplified design approach.
1.3 Method
A literature review of previous work in the area of interest was carried out in order to
understand and generally describe explosions, impulse loading and design
methodology. The literature review was extended to include how shear force and the
direct shear phenomenon behave and how they are taken into account today in
Swedish and American design code. The American design approach against
explosions is chosen as a reference since it is one of the most comprehensive methods.
Investigations were carried out by performing detailed analyses in the commercial
finite element software ADINA, which is suitable for dynamic analyses. These
analyses are the reference for simplified methods and are assumed to represent the
real behaviour of a structure subjected to an explosion. It is important to realise the
software’s limitations and restrictions. The result of the finite element analyses was
therefore critically been evaluated by questioning the procedure and the modelling
assumptions made in the analyses. Several analyses with different input data were
performed in order to obtain a reliable result, which is more general to any explosion
situation.
The simplified approaches were used with three material idealisations including,
linear elastic, ideal plastic and elasto-plastic. The first two are used in order to
describe the more complicated elasto-plastic material description, which is the most
realistic material response despite overlooking strain hardening.

-- 20 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 3
In this study an SDOF approach with different material responses was compared with
their assumed real behaviour. It was also updated in order to correlate better by
investigating the transformation factors. The design moment and shear force on the
structure according to design codes are compared to the real loads and the rightness is
evaluated. The issues of time dependent transformation factors were also addressed to
consider possible effects of the loads on the structure.
1.4 Limitations
The analyses only treat reinforced concrete beams. It is most common to use concrete
when designing structures against explosions due to the great mass and the possibility
of ductile behaviour that consume a lot of energy. However, much of the basic
equations are applicable to other materials as well. The reinforced concrete stress-
strain relationship will be simplified to a linear elastic response, plastic response and
elasto-plastic response to reduce the calculation efforts when investigating the shear
force. This is a relatively good approximation.
The studies are limited to a simply supported beam. However, some variation of
cross-section, length and loading will be done to validate the behaviour. No analyses
will be carried out on slabs but some theory about their behaviour is presented.
A more detailed analysis of reinforced concrete beams was intended to be used to
compare with the simplified method by taking both concrete cracking and
reinforcement yielding into account. However, the detailed model was not completed
and is therefore only documented in Appendix I in order to not take focus from other
investigations.
This thesis will investigate the primary effects of impulse loads induced by shock
waves in air from an explosion. It will focus on the early behaviour of the structure by
investigating moment, shear force and displacement. The influence of ground shock
waves and bomb fragments will be neglected, as will secondary effects such as the
load from collapsing structures.
The thesis will not consider the material effect of high strain rates, which act to
enhance the performance of the structure. By neglecting the positive effects of an
increasing strain rate the worst case scenario will be studied. It is discussed in the
American design code and is therefore further described in the Section 2.4.1.5.
1.5 Outline of the report
Chapter 2 is a theory chapter that covers basic explosion theory, reinforced concrete
behaviour and design approaches. In addition, dynamic systems are described and the
transformation from a real structure into an equivalent single degree of freedom
system is presented.
Chapter 3 will describe a cross section and some load cases that will be used for
further studies. Hand calculations will be shown for the example and parameters that
will be used in further studies are calculated. It will also cover some consideration that
needs to be taken into account when using finite element modelling of the problem.

-- 21 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
4
Chapter 4 is the first result part in this thesis. Here deformation of the structure is
discussed and this leads to an introduction of time dependent transformation factors
for the equivalent SDOF system.
Chapter 5 compares the section forces obtained by the equivalent static load and
compares these with finite element solutions. The magnitude and distribution are
discussed.
Chapter 6 investigates the support reaction, which must be found if direct shear failure
can be described adequately. Several methods are compared in order to see which is
the most preferable in design.
Chapter 7 evaluates the simplified single degree of freedom system for direct shear.
This is done by constructing iso-damage curves to be able to see whether a bending
failure or a direct shear failure will occur.
The different results are discussed individually in every chapter and then followed by
a more general discussion and conclusion. The Appendix will give a more
comprehensive picture of the investigations performed in here. In Appendix I, a
detailed analysis where a solid 2D model taking concrete cracking and reinforcement
yielding into account is presented. This model had convergence problems when
subjected to an impulse load and is presented in Appendix I in order to not take focus
from other investigations.

-- 22 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 5
2 Theory
2.1 Explosions
An explosion occurs when there is a need of energy release. Energy is released when
an amount of matter with a certain volume suddenly expands. This sudden release of
energy manifests in the form of light, sound, temperature and pressure, all of which
we recognise as an explosion. The pressure will create a shock wave, which will
spread outwards spherically from the point of energy release, see Figure 2.1. As the
shock wave advances away from its origin the pressure will decrease rapidly and
return to the standard atmospheric pressure. The speed of this process is supersonic,
ending after a few milliseconds.
Explosion centre
Pressure decreases further
away from the centre
Figure 2.1. An illustration of how the energy propagates outwards from the source
of the explosion.
A shock wave can be described through a pressure curve in relation to time. After
some time, the arrival time, the shock wave front will reach the area of interest and
subject it to a positive pressure. Because the shockwave forces the air to move as it
spreads outward from the explosion centre it will create a lack of air behind, causing a
partial vacuum or negative pressure phase. A principal pressure-time curve of an
idealised shock wave is illustrated in Figure 2.2. The positive pressure phase is of a
higher magnitude and has a shorter duration than the negative phase. However, a
shock wave is according to Johansson and Laine (2007), often simplified by assuming
a linear decrease of pressure and by neglecting the negative phase due to its relatively
low amplitude, see Figure 2.3. In order to avoid convergence problems when
modelling, a very steep inclination is given to the pressure line between arrival time
and peak pressure.

-- 23 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
6
Pressure
Time
Negative pressure
Positive pressure
Shock front
1 Atm
ta
Figure 2.2. An idealised shock wave from an explosion. The high amplitude positive
phase is followed by a longer negative phase with lower amplitude.
Pressure
Time
Shock front
1 Atm
ta
Figure 2.3. A simplified shockwave assumes linearly decreasing pressure and
neglects the negative phase.
An idealised shock wave progresses through air without being disturbed. However, in
a real environment the magnitude and spreading of the shock wave will be affected by
many phenomena. When a shock wave reaches a stiffer object the wave is reflected
against its surface. This reflection causes some major changes in the properties of the
shock wave and can result in an increase of pressure up to twenty times larger than
that of the original wave, see Johansson and Laine (2007).
There are two main types of reflection: regular reflection and mach reflection. Regular
reflection is further divided into normal reflection and skewed reflection. Normal
reflection happens when the incoming wave approaches the surface perpendicularly as
shown in Figure 2.4. Mach reflection is a special case of skewed reflection and
happens when the angle between the incoming wave and the reflecting surface is

-- 24 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 7
around 40o, see Figure 2.4. It is characterised by a part of the shock wave reflecting
regularly with another part just sliding along the surface.
Mach reflection
Normal reflection
Reflection surface
≈40˚
Skewed reflection
90˚
Figure 2.4. A shock wave is reflected at a surface. Two special cases of reflection
are normal reflection and Mach reflection.
Diffraction is another phenomenon that affects the waves’ magnitude and duration,
describing how the shock wave spreads behind and past a building or an object. This
is a very complex proceeding and depends on the geometry of the structure.
Nevertheless, effects of reflections and diffractions are taken into account by applying
a larger load. Specific consideration of how a wave is reflected will not be taken. For
more detailed information regarding reflections and diffractions, the reader is referred
to Johansson and Laine (2007).
There are empirical expressions for the values of peak pressure and duration from a
certain explosion at scaled distances, Johansson and Laine (2007). The Swedish Civil
Contingencies Agency, MSB (2011), has defined a load that a protective facility
should be able to resist. This is in Johansson and Laine (2007) referred to as an
archive bomb. The archive bomb consists of 125 kg of high explosive TNT exploding
in air at a distance of 5 metres from the structure.
2.2 Structural response of reinforced concrete subjected to
static load
2.2.1 Beams
2.2.1.1 Introduction
Engström (2011a) defines a beam as a linear structural member predominantly loaded
in flexure. According to Eurocode 2, CEN (2004), the structural member is a beam if
the span to depth ratio is greater than 3 and the width is less than 5 times the depth of
the member. The load is transferred to the supports in one direction. There are two
main design issues that need to be addressed: moment and shear. These are described
in the following sections.

-- 25 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
8
2.2.1.2 Moment
There are three models to explain the behaviour of concrete beams in Eurocode 2,
CEN (2004). They are called state I, state II and state III and can be seen in
Figure 2.5.
State Figure 	Strain,
 	Stress,

d
d’	
s’
s
zs
)	( s	c	s	s z	
	
	 
z
I
M
z
I
c 	)	(	
c
s
s E
E

		
As’
As
z
GC
h
b
I
z
x
II
III 	z
x
s<
y

s’

zs
s	s	s A	F	
		
)	( s	c	s z	

	 
z
I
M
z
II
c 	)	(	

Fs’

s>
sy

s’

s	y	s A	f	F 	

x
Rx 	Fs’

bx	f	F c	R	c	
		

cc	R f	
	

x
Figure 2.5. The different states of a concrete section and internal forces.
State I is when the concrete is not cracked and the behaviour is assumed to be linear
elastic. It is often reasonable to neglect the influence of reinforcement in this state.
Thus, the crack resisting moment of the cross-section can be easily determined with
help of the moment of inertia I, the location of the neutral axis and concrete tensile
strength.
Concrete is weak in tension and will crack early. A state II model is often used when a
cracked concrete beam is studied for low loads. This model assumes linear elastic
behaviour both for concrete and reinforcement but neglects the influence of cracked
zones. It is an adequate assumption for the reinforcing steel and for concrete at
stresses below the steel yield stress. The reinforcement can be converted into an
equivalent concrete area. Thereafter a moment of inertia for state II can be calculated
and consequently the moment capacity.
When the steel begins to yield and the concrete has a non-linear compression strength
a state III model is used. It takes both concrete cracking and steel reinforcement
yielding into account. The moment capacity is determined by using moment
equilibrium. The ultimate capacity can be calculated by assuming reinforcement

-- 26 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 9
yielding and ultimate compressive strain in concrete in most outer fibre. Concrete
stress block factors
R and βR are used to approximate the non-linear distribution in
the concrete with a stress block with a lever arm to the neutral axis. If the steel in a
state III model has not begun to yield, the concrete will suddenly fail in compression.
This is brittle failure mode and should be avoided if possible.
These three different states can be demonstrated in a moment-curvature relationship
for a continuous concrete beam. A moment curvature relationship can also be
described with a force displacement relationship where the force is the external force.
A typical moment-curvature relationship for a small reinforced concrete region can be
seen in Figure 2.6a. This moment-curvature relationship can be modified due to time
dependent deformation and creep but will not be considered in this thesis. An
additional axial force will change this relationship and a specific case for each axial
force must be obtained.
The moment-curvature relationship can be simplified from a multi-linear to a bi-linear
relationship where the slope of the curve is an approximation of the flexural stiffness
at the different stages. This bi-linear relationship is illustrated in Figure 2.6b. It is
sufficient to use this simplification if the purpose is to calculate the need for plastic
rotation according to Engström (2011a). In order to determine the yield bending
moment and its corresponding curvature at the breakpoint, a state II section analysis
should be carried out assuming tension reinforcement strain has just reached the yield
strain. For more detailed description how to do such an analysis the reader is referred
to Engström (2011a).
(b)
(a)
u	y r	r 










 1	1





r
1
 	(b)
u	y r	r 










 1	1





r
1
MRd
Myd
Mcr
M 	M
MRd
Myd
Mcr
Figure 2.6. A moment curvature diagram (a) and the corresponding simplified
moment curvature diagram (b).
When a section in a reinforced concrete beam cracks, it will suddenly lose stiffness
and the remaining stiffness will depend on the provided reinforcement. The parts that
are uncracked will be stiffer and moment redistribution will take place as they attract
more moment. When the concrete cracks it is often assumed that the cracked part of
the section cannot take any stress. However, the uncracked concrete between flexural
cracks will carry some stress with help of the bond between the reinforcement and the
concrete. This contribution is large just when the concrete cracks but declines as more

-- 27 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
10
sections crack. This is referred to as the tension stiffening effect and can be seen in
Figure 2.7. In further investigations, this thesis does not consider tension stiffening.
With tension
stiffening
Without tension
stiffening
State I
”uncracked”
State II ”fully cracked”
r
1
M
Mcr -
Figure 2.7. Response of a region with regard to ‘tension stiffening’ in a concrete
member subjected to pure bending. Based on linear stress-strain
relationship for both concrete and steel.
After a while cracking will exist all along the length of the concrete beam and the
stiffness of each section is merely dependent on the amount of reinforcement. The
stiffness distribution in the cracked state may be different from that in the uncracked
state due to uneven reinforcement arrangement within the beam. Loading the beam
even further will result in reinforcement yielding. The yielding will start in the highest
stressed section and in this section the steel deforms more than in adjacent sections
where the steel still have an elastic response. This will create a region with
concentrated plastic rotation, a so called plastic hinge.
2.2.1.3 Shear
A load on a concrete structure will in addition to moment give rise to shear stresses
over the span. The flexural stress and the shear stress can be combined by using
principal stresses. The concrete will crack if the principal stress exceeds the concrete’s
tensile strength at any point in the beam. Failure due to shear forces is often brittle and
happens suddenly.
For a beam loaded in pure shear this means that the principal stresses will be 45o to
the longitudinal axis, see Figure 2.8. Eventually, the tension principal stresses exceed
the tensile strength and a crack will occur. The crack will propagate in the direction of
the maximum principal stress, i.e. 45o to the longitudinal axis. The crack can either
start as a flexural crack in the outermost fibre and then develop as a shear crack
through the depth of concrete, Figure 2.9a, or proceed as a web shear crack in the
centre of the depth Figure 2.9b.

-- 28 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 11
(a) (b)
max
max
2 =
max
1 =
max
Figure 2.8. Principal stresses due to pure shear.
(a) 	(b)
Figure 2.9. Different shear cracks: (a) Flexural shear crack and (b) Web shear
crack.
A strut-and-tie model can be used to explain the behaviour in shear and is illustrated
in Figure 2.10. The remaining uncracked concrete compression zone can be
interpreted as a compression chord, the concrete between the cracks as a compression
strut and the tensile reinforcement as a tension tie. A shear failure is characterised by
either slip along the crack or crushing of the compression strut. The resistance against
compression of a concrete compression strut can be obtained by equilibrium
equations.
VEd	z ≈ 0.9d
z ≈ 0.9d
Fcw
2
z
Fc
Fs
Fcw VEd
Fs
(a) 	(b)
Figure 2.10. Strut-and-tie model for shear cracks.
There are four main mechanisms that resist shear failure along a cracked section in a
flexure reinforced concrete beam, see Figure 2.11.
1. The crack is not smooth and will therefore have some friction during slip.
2. Ballast can be trapped in the crack and create mechanical interlocking.
3. The remaining uncracked concrete compression zone will resist slip along the
crack.

-- 29 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
12
4. Dowel action of the tension reinforcement acts as a significant resistance
mechanism for large deformations.
(a) (b) (c)
Figure 2.11. Mechanisms for crack resistance (a): friction in crack (b), mechanical
interlocking (b), uncracked compression zone and dowel action of
tensile reinforcement (c) .
However, these mechanisms are often not sufficient to rely on when designing against
shear failure. Firstly, the capacity against concrete crushing and slippage along the
crack needs to be considered. Shear reinforcement should be introduced if the
capacity is too low to take tension forces across the cracks. The shear reinforcement
also ties the main reinforcement bars together and confines the concrete. The designer
can, within some limitations, decide in which angle the final shear crack will form at
by designing the shear reinforcement in static load cases.
Shear reinforcement are commonly made up of stirrups or links perpendicular to the
axis of the beam, shown in Figure 2.12a, but can also be at an angle. By using inclined
reinforcement as shown in Figure 2.12b, more shear reinforcement may cross the
crack, which means that a higher resistance will be obtained. However, the installation
is more complex and can be more expensive than using more reinforcement. The
direction of shear forces will alternate in a dynamically loaded system meaning that
shear reinforcement must be provided in both directions. Lacing, shown in
Figure 2.12c, can be used for this purpose and provides large rotational capacity
according to DoD (2008).
(a) 	(b) (c)
Figure 2.12. Different shear reinforcement: (a) stirrups, (b) inclined reinforcement
and (c) lacing.

-- 30 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 13
2.2.2 Slabs
2.2.2.1 Introduction
It was initially intended to extend the analyses in this thesis to include slabs. Due to
this projects time limitation though, it was not possible to analyse slabs further.
Although the theory presented below will not be further used it shows how a slab can
be designed and can therefore be of interest.
A slab is a structural element, often concrete material, which has significantly greater
width than height, Engström (2011b). The main difference compared to a beam
element is that transverse action will also have to be considered due to the great
width.
A slab can carry the load in one or two directions, often supported by continuous
walls or beams. A one-way slab can be seen as a wide beam and designed accordingly
per unit width. However, a two way slab carries the load in two directions and will
therefore require 3-D analysis in order to obtain proper reaction forces and
deformations. In this report, slab will refer to a two way slab.
Figure 2.13. One-way and two-way slabs. The dotted lines show that the edges are
simply supported.
A slab is normally statically indeterminate, which means that the choice of material
model will influence the result. The material behaviour is the same as for the
described beam behaviour in Section 2.2.1.2 but stresses will exist in 3 directions. The
reinforced concrete slab will go from uncracked to cracked, to reinforcement yielding
and further up to failure as the load is increased. The non-linear behaviour allows the
designer to decide the behaviour of reinforced concrete by arranging the
reinforcement accordingly. The reinforcement configuration will change the stiffness
and the corresponding reactions throughout the sections.
Since reinforced concrete slabs are rather complex to analyse, models are often
simplified. There are three methods for designing reinforced concrete in the ultimate
limit state. The most detailed is a non-linear finite element method with the real
behaviour. It requires a finite element solution that explicitly models the
reinforcement yielding and the concrete cracking. The other alternatives are strip and
yield line method. These assume ideal plastic behaviour and since there is no
relationship between moment and curvature in the plastic state, the collapse load
cannot be solved directly. It has to be approached from either upper bound or lower
bound solutions.

-- 31 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
14
2.2.2.2 Strip method
The strip method is a static method providing lower bound results when analysing
plastic reinforced concrete slabs (Engström, 2011b). The general idea is to assume a
moment distribution in the slab in the ultimate limit state and then calculate a
corresponding maximum load.
The moment distribution must be in equilibrium in the ultimate limit state. The slab is
divided into strips in both main directions. The load should be carried by the strips
together. Any load distribution is allowed as long as the load that is carried by the
strips together is the same as the actual load on a considered element lying on both
strips. The slab can be divided into different strip patterns and load distributions, see
Figure 2.14, which will give different accuracy of the predicted failure load. The more
the division of the slab looks like the final mechanism, the better the lower bound
solution will converge with the actual load and the better the behaviour up to failure
can be estimated. The obtained failure load is however, always underestimated.
Moments in the main directions are easily obtained on the safe side.

-- 32 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 15
2
q
2
q
2
q
= +
2
q
2
q
2
q
2
q	q
(a)
= 	+	0
q/2
q/2 q/2
q/2
q q q
q/2
q/2 q/2
q/2
0 0
q centre strip
q/2 edge strips q
centre strip edge strips
q/2
q
(b)
= +	q 0 q 0 q 0
q
(c)
Figure 2.14. (a) The easiest and the least accurate strip division. (b) Load division
with more accurate results. (c) Strip division following the natural load
dividing lines, which gives the most accurate solution, based on
Engström (2011b).
The designer has a great influence when designing a slab. Wrong assumptions of how
the slab will act will lead to ineffective use and unnecessarily high amount of
reinforcement. The designer can also decide how the force is resisted at the supports.
General rules and guidelines for how to choose strips or load division for different
support conditions can be found in Engström (2011b). It is also explained how
unrealistic and extreme solutions can be avoided.

-- 33 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
16
2.2.2.3 Yield line method
A yield line is a line with plastic hinges where the deformation has reached the yield
strain and the moment capacity cannot be further increased. It starts at the most
stressed point and will, as in theory of plastic hinges, eventually form a mechanism
and the slab will fail. The yield line method is an upper bound approach and will
therefore always provide an answer on the unsafe side since the slab will fail in the
failure mechanism that requires least energy. As a result, it might be a lengthy process
to find the worst failure mechanism. The development of a potential failure
mechanism is shown in Figure 2.15 for a slab simply supported on four edges. This
might not be the most dangerous collapse mechanism. However, the yield line method
is a very effective approach when analysing existing slabs, where a simple crack
pattern can be used and a collapse load higher than the actual collapse load will be
obtained.
(a) 	(b) 	(c)
Figure 2.15. Yield line development. The most stressed point starts to yield and the
yield line will develop until a mechanism is formed
When the slab deflects, the parts defined by a yield line must fit together. This is a
kinematic requirement which needs to be fulfilled for all collapse mechanisms. The
kinematic requirement can be ensured if a yield line or its extension passes through
the intersection of the adjacent part’s rotational axes. From Figure 2.16 it is clear that
the yield line between parts 1 and 2 passes through the intersection of rotation axes
AB and AC. However, the yield line between part 2 and 3 does not intersect the
intersection between rotation axes AC and BD because the axis never intersect. To
overcome this, the rotational axes AC and BD are extended to infinity which creates
and illusion that they intersect. The centre yield line between parts 2 and 3 will
approach the imaginary intersection and therefore the kinematic requirement can be
seen as fulfilled.
A
B
C
D
1
2
3
4
Figure 2.16. The kinematic requirement must be fulfilled for the mechanism to form.

-- 34 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 17
2.2.2.4 Shear
Shear forces in slabs can be resisted in the same manner as for beams in B-zones,
which are zones where plane sections remain plane under loading,
Al-Emrani et al. (2008). A strip model can be used to calculate the shear resistance
and placement of shear reinforcement. Shear failure of a slab supported on continuous
walls subjected to uniform loading is generally not the governing failure mode since
the shear force per unit length is relatively small. However, close to concentrated
forces or supports, i.e. discontinuity regions, great shear forces can occur. A flat slab
supported on columns for instance. Flat slabs or point load action will not be
considered in this thesis. Since the shear force occurs in two directions for slabs it is
rather complex and will not be treated further in this thesis.
2.2.3 Plastic rotation capacity
Reinforced concrete members have a limited plastic rotation capacity. Therefore, the
predicted failure mechanism may not occur if sufficient rotation at a plastic hinge
cannot develop and the member may consequently fail before the full mechanism is
developed. Experiments of plastic rotation capacity may show low accuracy with
theoretical models (Johansson and Laine, 2009). Several methods exist for calculating
the rotational capacity, giving varying results. One potential source of the difference
in results is that steel properties have changed significantly over the last decades,
Johansson (1997). The method used in Eurocode 2 can be used to estimate a
conservative value of the maximum allowed rotation. The method uses a diagram
taking concrete strength, reinforcement class and the ratio between the compressed
zone and the effective depth into account, see Figure 2.17.
x / d
pl [10 -3 rad]
Figure 2.17. Diagram for evaluating the plastic rotation capacity according to
Eurocode 2, CEN (2004).
For low values of the ratio between compressed zone height and the effective depth
the limitation will be governed by the ultimate steel strain. Concrete crushing strain
will govern the limitation for higher ratios. For higher values of the ratio than shown
in the diagram, a sudden abrupt failure will occur.

-- 35 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
18
2.3 Simplified material behaviour
2.3.1 Introduction
As realised in Section 2.2, reinforced concrete is a complex material. Therefore it can
be preferable to simplify the behaviour. Three simplified models are used in this
thesis to describe the behaviour of reinforced concrete: linear elastic, plastic and
elasto-plastic. The response of these models often gives a reasonably accurate result
but is seen as potential sources of error in previous Master’s theses, Augustsson and
Härenstam (2010), Nyström (2006) and Ek and Mattsson (2009). This thesis intended
to in addition to analyses with simplified material behaviour also model the material’s
non-linear behaviour, explicitly taking reinforcement yielding and cracking of
concrete into account. This model was never completed but is documented in
Appendix I.
2.3.2 Linear elastic
The simplest way to model the material behaviour is to model it as a linear elastic
material. By doing so, no permanent deformations will remain after unloading and the
stress strain relationship will be linear as shown in Figure 2.18. From Hooke’s law, a
force-displacement relationship can be determined as
u	k	R 		
(2-1)
where the internal resistance force is denoted R, the stiffness k and the displacement
u. The stiffness can be found for any structure by relating the deformation to the load
instead of moment to curvature.
u
k
R
1
Figure 2.18. Linear elastic force-displacement relationship.
2.3.3 Ideal plastic
When modelling the material with ideal plastic behaviour, the deformations are zero if
the stress in the material is kept below the yield stress. It also means that the material
cannot take higher stresses than the yield stress. As soon as the yield stress is reached
it will start to deform, where the limit of this deformation is in theory infinitely large.
However, the deformation is in practice limited by the plastic rotation capacity. The
ideal plastic force-displacement relationship is illustrated in Figure 2.19. Rm is the
internal resistance force corresponding to the yield stress.

-- 36 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 19
u
Rm
R
Figure 2.19. Ideal plastic force-displacement relationship.
The relationship can be described with equation (2-2) where F denotes the external
force and u the displacement.



	
	
 0	or	for
0	and	for
u	R	F	R
u	R	F	F
R
m	m
m
(2-2)
2.3.4 Elasto-plastic
The simplified elasto-plastic material behaviour is constructed by combining the
simplified elastic and ideal plastic material responses described in Section 2.3.2 and
Section 2.3.3 respectively. Thus, a force-displacement relationship can be obtained,
see Figure 2.20a. Initially, as the load increases the material response has elastic
behaviour until the material reaches the yield limit. The elastic deformation is
completely reversible. When the limit is reached, the material cannot take more stress
and permanently deforms. Therefore, it can be modelled with the ideal plastic
behaviour. If the structure is unloaded when permanent deformations has developed,
the unloading curve will be parallel to the elastic curve and when it is loaded again the
plastic deformations will take place where it last ended, see Figure 2.20b.
Rm
u	u
k 	k
Rm
R 	R
Plastic deformation starts
Reloading	Unloading	
Loading
Permanent deformation
1
Figure 2.20. Elasto-plastic (a) force-displacement relationship (b) response while
loading, unloading and reloading.

-- 37 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
20
The elasto-plastic relationship can be written as




	

m	m
m	el
R	F	R
R	F	u	k
R for
for
(2-3)
2.4 Impulse loaded systems
2.4.1 Definitions of dynamic parameters
2.4.1.1 Force
According to Newton’s second law, force F is defined as the product of mass m and
acceleration a.
ma	F 	
(2-4)
The force is defined as positive in the direction the acceleration is taking place. It can
also be recognised that if the mass is increased, the acceleration response due to a
force F will decrease.
2.4.1.2 Pressure
Pressure P is defined as a force F acting on an area A.
A
F
P 	
(2-5)
2.4.1.3 Momentum and Impulse
A body with mass m and velocity v has, per definition, a momentum p.
mv	p 	
(2-6)
When an external force acts on a body, the body will gain or lose momentum ∆p. This
change in momentum is defined as the impulse. If a body is subjected to a positive
force F from time t0 to t1, the velocity will increase and the momentum will increase
to p1. The new momentum can be calculated by using Newton’s second law
dt	t	F	mv	p
t
t
		
1
0
)	(	1	
(2-7)
where the right expression is the generated impulse I from a force.
dt	t	F	I
t
t
	
1
0
)	(	
(2-8)

-- 38 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 21
This represents the area under the force-time graph. The shock wave from an
explosion is measured in pressure, which is a measurement of force acting on an area.
Therefore, the impulse can also be written as
dt	t	P	A	I
t
t
		
1
0
)	(	
(2-9)
The area under the pressure-time graph is sometimes referred to as the impulse
intensity i, transferred to the body indicated in Figure 2.21.
i
Pressure, P
Time, t
Figure 2.21. Simplified pressure-time curve.
There are two extreme values of an impulse: infinitely high pressure for an
infinitesimally short time and lower pressure for an infinitely long time, see
Figure 2.22. The latter is more similar to a static load. A real impulse load will be
somewhere in between. The infinitely high pressure during a very short time is called
the characteristic impulse.
Pressure, P
Time, t
∞
ik
Pressure, P
Time, t
(a) 	(b)
∞
Pk
Figure 2.22. Two extreme cases of the pressure impulse: a) Characteristic impulse
and b) pressure load.
The response to a more general impulse can be explained by using damage curves.
Those are curves that show the same damage for different combinations of forces and
impulses. The concept of damage curves are further discussed and presented in
Section 2.4.2.7. The characteristic impulse will be used in this thesis to estimate a
response on the safe side when estimating the external work done.

-- 39 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
22
2.4.1.4 Work
Work equilibrium is a well-established method for analysing the response of a
structure subjected to an external force. It relies on the law of energy conservation,
which says that no energy can disappear, just transform. If a force acts on a structure
the resulting work must be converted into kinetic or potential energy within the
structure. Therefore, the method puts the external work We, caused by the external
load, equal to the internal work Wi made by the structure; i.e.
i	e W	W 	
(2-10)
The external work is force times distance, for example a force that moves an object. It
can also be an impact where kinetic energy is transferred into potential energy. This is
more similar to an explosion, where an impulse load strikes a structure and causes it
to absorb energy by deforming. A characteristic impulse has a very short duration and
the external energy can therefore be assumed to be the kinetic energy of the structure.
This means that no energy is resisted as internal work. As soon as the impulse acts for
a longer time, the structure will absorb some of the energy and the external work done
will be smaller than for the characteristic impulse. The kinetic energy for a body with
mass m is
2
2
mv
Ek 	
(2-11)
where v is the velocity of the body. By using equation (2-6) and assuming a
characteristic impulse load, the external work can be described by the kinetic energy
of the impulse as
m
I
E	W k
k	e 2
2
		
(2-12)
Energy is absorbed in the structure by deformation. Consequently, the stiffness of the
structure and its ability to deform is important for the final response. As described in
Section 2.3, three idealisations of materials are used. They will behave slightly
different, and the internal work will be:
Elastic2
2
el
i
ku
W 	
(2-13)
Plastic	pl	i Ru	W 	
(2-14)
plastic	Elasto pl	ep	m
el	ep
i u	R
ku
W ,
2
,
2 		
(2-15)
The internal work can be interpreted as the area under the force-displacement curves
shown in Figure 2.23.

-- 40 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 23
pl	ep	el	ep	ep u	u	u 	,	, 		R
u
(a) 	(b)
R
u
Rm
R
u
Rm
(c)
uel 	upl 	utot	uep,el
Figure 2.23. Three different idealised material relations; linear elastic, ideal plastic
and elasto-plastic.
The maximum deformation can later be found from the work equilibrium
equation (2-10). The deformation in the elasto-plastic model will follow the equation
(2-13) until the reaction force reaches the yield reaction when the total deformation
needs to be considered.
	m
I
u c
el m
k

		where	
(2-16)
m
c
pl mR
I
u 2
2
	
(2-17)
k
R
mR
I
u
u
u	u	u	u m
m
c
el	ep
el	ep
pl	el	ep	pl	ep	ep 2	2	2
2
,
,
,	, 		




 				el	ep	tot u	u ,	if 	
(2-18)
It is most often preferable to use a ductile material in extreme load situations, as long
as the obtained displacement can be allowed. The ductile material will deform and
dissipate more energy. The structure will be damaged through plastic deformation and
will require reparation. However, this can be overlooked as long as safety is
guaranteed for involved functions and people. To avoid total collapse and ensure
safety, the deformation of columns for example must be limited so that they do not
fail through second order effects.
2.4.1.5 Strain rate
The closer a structure is to an explosion, the higher the amplitude and the shorter the
duration of the load. Consequently, structures close to an explosion may be subjected
to a very intense, impulsive load. In this case the structural response differs
considerably to a static load response; the design approach must therefore also differ.
The loading from an explosion can be up to 100 million times faster than a static load.
The high velocity of an explosion load results in a very high strain rate compared to a
case with static loading. For static loading the value of strain rate is around 10-5 s-1 and
for blast loading somewhere between 102 s-1 and 103 s-1 as illustrated in Figure 2.24.

-- 41 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
24
10-5
10-6
10-7
10-8 10-4 10-3 10-2 10-1 1 10 102 103
Earthquake	Static	Creep 	Hard impact Blast
Strain rate [s-1]
Figure 2.24. Approximate strain rates for different loadings, based on
Johansson (2000).
A change of strain rate can also result in a change of properties for the material. It is
known that the mechanical properties of concrete are affected by the rate of loading.
Much research has been done on this subject in order to establish a relationship for the
Dynamic Increase Factor (DIF), which is the ratio between static strength and
dynamic strength. These studies show that the increased strain rate also results in an
increased material strength, as shown in Figure 2.25. The value of the DIF differs a lot
between tensile and compressive strength and it is also hard to evaluate the different
test results that cause a large scatter.
Dynamic increase factor, DIF
Strain velocity	 , [s-1]
2
1
0
10-8 10-7 10-6 10-5 10-4 10-3 10-2 10-1 1 10 102 103
Figure 2.25. An approximated relationship between the dynamic magnification factor
and the strain velocity for compressed concrete, based on
Johansson (2000).
The effects due to the change in strain rate are divided into two main effects: viscous
effects for lower strain rates and structural effects for higher strain rates. These effects
are not discussed in here and for more information the reader is referred to
Johansson (2000). The change of strain rate is also shown to affect the reinforcement
steel, which results in some increase of yield and ultimate stress for higher strain
rates. Strain rate is for example considered in the American design code, DoD (2008)
but is neglected in this thesis.
2.4.1.6 Wave propagation
Explosions are rapid processes in which the whole structure may not be active. For
instance, after an explosion the maximum moment in the front wall of a box structure
can occur before any of the impacts are realised by the back wall. The information
travels through a material as both a longitudinal and a transverse wave, see
Figure 2.26. These are commonly referred to as pressure wave and shear waves. Shear
waves cannot occur in liquids or gases and are weak in comparison to the pressure
wave, Laine (2012).

-- 42 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 25
ux
Wave length

(II)
(I)
(III)
uy
Wave length

Figure 2.26. Waves through a specimen: (I) material at rest (II) pressure wave, (III)
shear wave, Laine (2012).
According to Laine (2012) a pressure wave has the velocity
)	1	( 2

	 	
 E
c p	
(2-19)
where E is the elastic modulus and
is the density of the material. This should be the
case if an axial force acted on the beam. However, the information in a beam loaded
perpendicularly to its longitudinal axis is more likely to be transferred by transverse
waves to the support. The speed of a shear wave through a material depends on the
material’s shear modulus G, Laine (2012).

G
cs 	
(2-20)
where, the shear modulus can be written as
 		
	
 1	2
E
G	
(2-21)

-- 43 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
26
2.4.2 Equivalent SDOF system
2.4.2.1 Introduction
A single degree of freedom system, abbreviated SDOF, is a convenient model to use
when analysing dynamically loaded systems. It consists of a body with the mass m
and a spring with stiffness k, see Figure 2.27. The body is only free to move in one
direction and the position can be described with one coordinate, Biggs (1964). This
body is also considered completely rigid with no internal movement within. In reality
vibrations of a system will always have some damping from internal friction forces
for example. Therefore, the mass-spring system is often complemented with a damper
c, which will decrease the amplitude for every oscillation.
(a) 	(b)
F(t)
m
k
F(t)
m
k 	c
Figure 2.27. Forced SDOF-systems: a) damped b) undamped.
The SDOF system can either vibrate freely or be forced by a time-dependent force. If
the system is subjected to explosion loading, it is initially forced to deform for a very
short time. After a short time the external force will disappear and the behaviour is
better represented by a freely vibrating system. Although the shock wave forces the
system to deform during the first milliseconds, the maximum displacement and
section forces can often occur much later. This depends on the load and the properties
of the structure.
The maximum displacement is of interest and they occur very soon after the load
arrival. The effect of damping will be low on the first oscillation, where the maximum
displacement normally occurs but affects the later oscillations more. Therefore, it is
not necessary to include dampers when considering maximum displacement as a
result of explosion loads, Johansson and Laine (2009). However, it is important to
realise that dampers should be included if the continuing state of vibration is to be
considered. In a real structure it is not likely that the maximum values occur after the
first oscillation. With that in mind, damping effect is mainly neglected in this thesis
apart from in the theory section for comprehensiveness.

-- 44 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 27
2.4.2.2 Equation of motion
If a forced damped SDOF system is considered, it is recognised that the displacement
and velocity will create resisting forces from the damper and the spring. If the body is
accelerating it will have an inertia force in the accelerating direction according to
Newton’s second law.
F(t)
m
u	c	Rdamper 		
c
u	k	Rspring 	u
Figure 2.28. Free body diagram of a SDOF-system.
As velocity and acceleration are the derivative and second derivative, respectively, of
the displacement with respect to time, the equation of motion can be found as,
)	(t	F	ku	u	c	u	m 		 		
(2-22)
from established force equilibrium.
2.4.2.3 Transformation into an equivalent SDOF-model
A structure has multiple degrees of freedom (MDOF) but it can be turned into an
SDOF system by choosing a “system point” and applying an equivalent mass, a
damper and a resisting force Biggs (1964). The system point is often chosen as the
centre point or the point where the displacement is largest, Johansson and Laine
(2009). The relation between the parameters in the equivalent SDOF system and in
the MDOF system can be described with transformation factors.
Transformation factors are derived from an assumed deformation shape u(x),
Johansson and Laine (2009). They must be chosen with regard to support conditions,
stiffness distribution, load profile and material model. Therefore, advanced analytical
solutions may be necessary for complex loading cases and when the stiffness
distribution varies. Since the factors are directly influenced by the assumed
deformation shape, they must be individually derived for every structural element and
load condition.
Since the damping effect is neglected, see Section 2.4.2.1, three transformation factors
are of interest when converting a structural element into an equivalent SDOF system
for impulse loading. They are denoted with a κ with index to the parameter they affect
m	m m	e	
		
(2-23)
k	k k	e	
		
(2-24)
F	F F	e	
		
(2-25)
Where letters without index are the structural elements real mass, stiffness and force
respectively and index e stands for equivalent parameters in the SDOF-system. By
considering energy conservation for the structural element and the corresponding
equivalent SDOF the factors can be derived. κm comes from the conservation of

-- 45 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
28
kinetic energy, κk comes from conservation of internal energy and κF from
conservation of external energy. According to Biggs (1964) the transformation factors
for internal and external energy are equal, i.e.
F	k	

	 	
(2-26)
The transformation factors can be found from,
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
(2-27)
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
(2-28)
the derivation is shown in e.g. Johansson and Laine (2009). By implementing (2-26)
in equation (2-22), the equation of motion for a structural element can be written as
)	(t	F	ku	u	c	u	m	mF 		 		
	
(2-29)
where
F
m
mF


 	
(2-30)
Values of these transformation factors for some different load cases and material
models for beams and slabs can be seen in Table 2.1, Table 2.2 and Table 2.3.

-- 46 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 29
Table 2.1. Transformation factors for a beam subjected to a point load. From
Johansson and Laine (2009).
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
Table 2.2. Transformation factors for a beam subjected to uniform load. From
Johansson and Laine (2009).
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

-- 47 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
30
Table 2.3. Transformation factors for a plate subjected to a uniformly distributed
load, Based on Augustsson and Härenstam (2010).
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
The transformation factors have a good agreement with reality when an elastic
response of the structure is assumed, see Augustsson and Härenstam (2010). In the
aforementioned thesis, significant divergence between hand calculations and FE-
analyses is found for beams assuming ideal plastic behaviour and for plates assuming
both plastic and elasto-plastic behaviour. This is believed to be influenced by the
assumption about constant deformation shape and the influence of multi-linear
response in beams. Moreover, it recommends that more studies on these phenomena
must be carried out. The problems with transformation factors are also addressed by
further studies in Chapter 4.
2.4.2.4 Work
A system in motion is affected by external, internal and kinetic energy, which must
always be in equilibrium. The transformation factors described in Section 2.4.2.3,
relate the real energy in the system with the energy in an equivalent SDOF system.
2
2
s	m
k
mv
W

	
(2-31)
s	F	i Ru	W	
		
(2-32)

-- 48 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 31
s	F	e Fu	W	
		
(2-33)
As shown in section 2.4.1.4, the external energy of a SDOF-system for an impulse
load can be expressed as:
e
k
k
SDOF
e m
I
W	W 2
2
		
(2-34)
This assumes no energy is lost from deformation and that the work done by the
external force is equal to the external all energy will become kinetic energy. The
problematic part is deciding which mass should be used in equation (2-34). Johansson
and Laine (2009) have used me=
mF ∙m. This results in an equivalent SDOF energy,
which will only be adequate if external and internal energy levels are compared in the
SDOF system. However, if the SDOF energy is going to be compared with another
analysis, it is necessary to consider equation of motion for the equivalent SDOF-
system in its basic form when investigating and comparing energy levels with a FE-
solution, i.e.
F	ku	u	m F	F	m	

	
	 			
(2-35)
instead of using the simplified expression in equation (2-29). In order to derive the
real work for an SDOF model, it is necessary to go back to the definition of impulse
in Section 0.
mv	dt	t	F	I
t
t
	 1
0
)	(	
(2-36)
For an equivalent SDOF-system this should be multiplied with the transformation
factors, i.e.
 	
1
0
)	(
t
t
s	m	F
SDOF mv	dt	t	F	I	

		
(2-37)
A characteristic impulse means that
 			
1
0
)	(
t
t
k l	b	i	dt	t	F	I	
(2-38)
and hence, the momentum for the equivalent mass in the SDOF-system can be
expressed as
k	F	s	m I	mv	

	 	
(2-39)
and the square of the midpoint velocity can be obtained as

-- 49 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
32
2
2






 m
I
v
m
k	F
s


(2-40)
If this is inserted into equation (2-31) the kinetic energy becomes
F
mF
k
F
m
k
k m
I
m
I
E	


 2	2
2
2
2
		
(2-41)
If this is compared with the expression used by Johansson and Laine (2009), it can be
seen that the additional term
F is not considered and that it would result in a too high
energy since
F < 1.0. Moreover, the internal work is also overestimated since a
transformation factor is only used on the kinetic energy.
Calculating the energy incorrectly will not affect the energy balance nor the resulting
displacement since the transformation factor for the load cancels out when
considering the individual parts of the equation of motion, i.e.
i	F	F
mF
k
k W
ku
m
I
E 		 2	2
2	2

	

(2-42)
Nevertheless, if the absolute energy in a FE-analysis and an equivalent SDOF-system
is compared it is necessary to calculate the external and internal energy as shown in
equation (2-41) and (2-42).
2.4.2.5 Dynamic reaction
In order to determine the maximum shear forces in the system it is of interest to
determine the dynamic reaction force at the supports. The equivalent SDOF-system is
modelled to have the same displacement as the system point in the real system, but the
internal reaction force in the SDOF-system is not necessarily the same as the real
reaction force. In order to obtain this reaction, it is necessary to set up a dynamic
equilibrium where the inertia force I(t) is considered in the calculations. The inertia
force has the same shape as the assumed deflection shape of the structure. The
magnitude and the position of the resultant of the inertia force can be determined, as
shown in Appendix B.2. Moment equilibrium can be established around the resultant
and an expression for the dynamic reaction can be obtained. In Biggs (1964) this
dynamic reaction is solved for beams and two-way slabs with different kinds of
boundary conditions and load cases for both elastic and plastic analysis. The data is
then presented in tables.
For clarification, an example of a simply supported beam with evenly distributed load
can be studied, see Figure 2.29a. To establish dynamic equilibrium, half of the beam
is considered as shown in Figure 2.29b. It is known that in the middle of the beam the
shear force S is equal to zero and the dynamic bending moment can be expressed in
terms of the resistance R as:
8
RL
m f 	
(2-43)

-- 50 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 33
I(t)
L	t	q	t	F )	(	)	( 
V(t)
L
V(t)
q(t)
(a) 	(b)
V(t)
)	(
2
1 t	I
L
192
61
2
L
mf(t)
V=0
4
L
)	(
2
1 t	F
Figure 2.29. Determination of dynamic reactions. Based on Biggs (1964).
As mentioned above, the distribution of the inertia force corresponds to the assumed
deflection shape which is used to determine the position of the resultant. For a simply
supported beam with an evenly distributed load, this shape can be expressed as:
  	 	4	3	3
2 2
5
16 x	Lx	x	L
L
x 				
(2-44)
When the position of the resultant is known, see Appendix B.2, moment equilibrium
is established around the resultant of the inertia force and the following expression is
obtained:
0
4
1
192
61
2
1
192
61 	




 			 L	L	m	L	V c	
(2-45)
Equation (2-45) is then solved for V with help of the expression for the dynamic
bending moment and an expression for the dynamic reaction in terms of load and
resistance is obtained, see Equation (2-46).
F	R	V 11	.	0	39	.	0 		
(2-46)
Both R and F in this case are functions of time but this equation must also be valid for
a static case where the shear force V should be equal to 0.5F. If equation (2-46) is
studied and the fact that R=F in case of static loading, it can be seen that this equation
also holds for this case.
The same procedure can be performed for various support conditions for plastic and
elastic cases. These are tabulated in Biggs (1964). The dynamic reaction for a simply
supported beam with ideal plastic behaviour can be written as
F	R	V 12	.	0	38	.	0 		
(2-47)
Fortifikationsverket (2011) has derived an expression, shown in Appendix B.1, for the
reaction force at the support for a simply supported beam as





 




 	 R	F	V
m
F
m
F



 2	2
1
2
1
(2-48)

-- 51 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
34
where κF and κm are the transformation factors for force and mass respectively. This
method is very similar to that of Biggs (1964)
504	.	0	640	.	0 	 m	F	

	
R	F	R	F	V
m
F
m
F 406	.	0	094	.	0	1
2
1 2	2
	







 




 	



	
(2-49)
and for the plastic case
333	.	0	500	.	0 	 m	F	

	
R	F	R	F	V
m
F
m
F 375	.	0	125	.	0	1
2
1 2	2
	







 




 	



	
(2-50)
However, an advantage of Fortifikationsverket’s approach is that it lets the designer
use a varying deformation shape by assuming the transformation factors over time and
hence the position of the resultant may not have to be calculated for all displacement
shapes that might occur. It is also clearer what actually affects the support reaction
and will therefore also be used in this thesis.
2.4.2.6 Equivalent static load
A dynamic load can be translated into an equivalent static load in order to make it
more convenient to calculate section forces. Moreover, designers are generally more
familiar with static loads. The corresponding static load is obtained by deciding the
load that generates the same external work as the impulse load. In line with definitions
of internal work, Section 2.4.1.4, different expressions will be obtained depending on
which material response is assumed. The equivalent static load corresponds to the
response that is obtained when the maximal deformation is obtained and consequently
does not follow the behaviour up to that point. The equivalent static load can be
written as
m
k
ω	I	Q k	el 	 where	
	
(2-51)
pl
k
pl mu
I
Q 2
2
	
(2-52)
for elastic and plastic response respectively, Johansson and Laine (2009). Ik is the
characteristic impulse, m is the mass, k is the stiffness and upl is the plastic
displacement. This corresponds to the ultimate resistance in the structure i.e.
el	el ku	Q 	
(2-53)
m	pl R	Q 	
(2-54)

-- 52 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 35
When the equivalent static load is established it can be applied on the structure and
the moment and shear force distributions can be found. The static equilibrium
calculations mean that the reaction forces on the system are not governed by the same
parameters as the normal static approach. This gives the reaction force in the support
as
2	2
el	el
el
ku	Q
V 		
(2-55)
2	2
m	pl
pl
R	Q
V 		
(2-56)
And bending moment in the centre as
8	8
,
L	ku	L	Q
M el	el
el	f 		
(2-57)
8	8
,
L	R	L	Q
M m	pl
pl	f 		
(2-58)
The dynamic bending moment is the same as derived in Biggs (1964). However, the
support reaction is higher according to this method once the positive phase of the
pressure wave has passed i.e. F = 0. Moreover, the equivalent static load does not take
the early shear force resulting from the inertia forces into account as Biggs’ and
Fortifikationsverket’s approaches do, Section 2.4.2.5. Johansson and Laine (2009)
explain that high shear forces can initially occur close to the supports and that these
must be further investigated. This statement refers to this phenomenon of initial high
shear forces.
Since the plastic equivalent load is governed by the plastic deformation, an upper
limit to the displacement must be introduced and will consequently be the failure
criterion. The possibility of large rotational deformations will decrease the needed
equivalent static load and hence the reaction forces, Johansson and Laine (2009). The
elastic approach is rather straight forward as the moment and shear capacities are
compared with the maximum load effect. However, the maximum section forces in a
linear elastic analysis do not depend on the parameters taken into account in a static
analysis. The maximum field moment in a simply supported structure with elastic
response can be calculated as
m
k	L	i	L	I	L	Q
M k	el
el	f
2
, 8	8	8

		

(2-59)
For a rectangular section the stiffness for an equivalent SDOF system can be written
3
3
3 60
384
5
384
L
Ebh
L
EI
k F	F	

	 		
(2-60)
And the mass for the equivalent SDOF model is

-- 53 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
36
L	h	b	m m 			
	
		
(2-61)
The maximum field moment can therefore be calculated to

	
	
	 mF	mF
el	f
E	h	i
bhL
Ebh	L	i
M 10	60
384
8 4
3	2
,



	
(2-62)
This shows that the maximum field moment in a structure with elastic response is
independent of the length.
2.4.2.7 Iso-damage curves
The worst case scenarios are defined by extreme cases and these are often used for
design. The two extreme cases for an impulse load are described in Section 0, which
are infinitely high pressure with infinitesimally short duration or a low pressure for an
infinitely long duration. The response to a more general load, as seen in Figure 2.30,
can be obtained by using iso-damage curves. These are curves that show the structural
response to different combinations of pressure and impulse. The curve defines the
combination of pressure and impulse that will cause a certain deformation, which can
later be used to investigate if the structure will fail. As long as the actual pressure and
impulse is lower than the limiting line, no failure is expected.
Time, t
Pressure, P
P1
i1
t1
Figure 2.30. A general pressure-time curve.
An iso-damage curve can be found by solving the equation of motion for different
load cases and thereby obtain a failure line for any combination of pressure and
impulse. As a consequence, the shape of the curve is dependent on the material
resistance and the load shape. Iso-damage curves are constructed by e.g.
Nyström (2006) and Johansson and Laine (2009), the reader is referred to those for
more information. The general appearance of iso-damage curves for different load
shapes are shown in Figure 2.31. It is often convenient to express pressure and
impulse with ratios between the actual peak pressure and impulse intensity and their
characteristic values.
k
I i
i1

		
(2-63)
k
F P
P1

		
(2-64)

-- 54 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 37
Pressure
 P1/Pk
Impulse i1/ik
P
P
P
t
t
t
Figure 2.31. Iso-damage curves for 3 load shapes. Based on Krauthammer
et. al. (2008)
In many cases it is adequate to use the characteristic impulse. Johansson and
Laine (2009) give an estimation of how large the error will be when using the
characteristic impulse compared to the real load. This is in an elastic case a function
of the structural period T and the load duration t1, see Table 2.4. The type of load
curve is defined by n, which denotes the power of the load curve.
I
is the ratio
between the actual impulse and the characteristic impulse and
F is the ratio between
peak force and the characteristic peak force as shown in equation (2-63) and (2-64). It
means that if the ratio between the structural period and the load duration is higher
than the number in the table, the percentage of difference in displacement shown in
the left column can be expected. For plastic response, no structural period can be
determined and the difference in displacement is only a function of
I and
F and is
shown in Table 2.5.

-- 55 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
38
Table 2.4. Displacement error for elastic response when using the characteristic
impulse compared to the real load curve. From Johansson and
Laine (2009).
el [%]	
I [-]
I
F
t
T



1
n = 0
I
F
t
T


2
1
1

 n = 1
I
F
t
T


3
1
1

 n = 2
1 1.01 12.89 10.60 8.84
2 1.02 9.22 7.45 6.13
3 1.03 7.51 6.10 5.00
4 1.04 6.52 5.33 4.35
5 1.05 5.86 4.75 3.90
10 1.10 4.20 3.41 2.78
15 1.15 3.48 2.82 2.29
20 1.20 3.06 2.47 1.98
25 1.25 2.78 2.23 1.77
50 1.50 2.10 1.56 1.18
75 1.75 1.80 1.23 0.91
100 2.00 1.57 1.02 0.74
Table 2.5. Displacement error for plastic response when using the characteristic
impulse compared to the real load curve. From Johansson and
Laine (2009).
pl [%]	
I [-]	
F [-]
n = 0
F [-]
n = 1
F [-]
n = 2
1 1.005 100 - -
2 1.010 52 70 77
3 1.015 35 46 52
4 1.020 27 35 39
5 1.025 21 29 32
10 1.049 11 15 17
15 1.072 7.7 10 12
20 1.095 6.0 8.0 9.0
25 1.118 5.0 6.7 7.5
50 1.225 3.0 4.0 4.5
75 1.323 2.3 3.1 3.5
100 1.414 2.0 2.7 3.0

-- 56 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 39
In general, it is likely that the structure has more than one failure mode with another
governing equation of motion, Krauthammer et al. (2008). This can be incorporated in
the diagram easily. The structure’s damage curve will then be a threshold curve of the
lower values as seen in Figure 2.32. Failure will occur in both failure modes if the
combination of pressure and impulse is in the upper right quadrant. In the example
given, failure in only mode 1 will occur for low impulses with high pressure while
low pressure with long duration will cause the structure to fail in mode 2.
Pressure P, [MPa]
Impulse I, [MPa∙s]
25
20
15
10
5
0
0.001 0.01 0.1 	1 10
t
P
Failure
mode 1
Failure mode 2
Figure 2.32. Iso-damage curves for two potential failure modes. The lower values of
these will create a threshold curve indicated with a dotted line. Based on
Krauthammer et al. (2008).
2.5 Direct shear
2.5.1 Static response
The direct shear phenomenon has been observed in static loadings with small shear
span to effective depth, i.e. in deep members, Kriz and Raths (1965) as cited by
Ross (1983). Direct shear can occur in areas with geometrical or load discontinuity,
Crawford et al. (1999), tending to be brittle and to cause a sudden failure. It is a
localised shear response of a structural concrete element characterised by cracking
and slippage almost perpendicular to the longitudinal axis. Mattock and
Hawkins (1972) gave a hypothesis of the phenomenon from experimental testing.
Firstly, small inclined cracks develop along a shear plane, see Figure 2.33a. These
cracks will define compression struts analogous to normal shear cracks but much
smaller, both in length and width. The compression struts will carry the applied shear
force by compression and transverse action since they are surrounded by uncracked
concrete on both sides. Force equilibrium of such a strut can be established, as shown
in Figure 2.33c, where V is the applied shear force, C is the compression component
of the resistance, V’ is the transverse resistance of the strut, T is the tension
reinforcement force and N is a potential tensile normal force. As the load increases the
struts will rotate and compress, creating a “slip” along the shear plane. Flexural
reinforcement will be strained and work in dowel action when slip takes place. A
consequence of the rotation is that the ends of the cracks will propagate vertically. A

-- 57 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
40
failure plane can therefore either form in the shear plane or a plane parallel to the
shear plane. Eventually, the concrete compression struts will fail in combined
compression and shear action, and the reinforcement steel will yield, causing the
whole section to shear off with a more or less vertical failure surface.
V	V
T+N
V
C
(a) 	(b) 	(c)
Figure 2.33. (a) Small diagonal cracks form along a shear plane. As they rotate, the
cracks will propagate slightly vertically (b). Hence, the actual failure
can occur in a parallel plane to the original shear plane. The resistance
can be described with a strut and tie analogy (c), based on Mattock and
Hawkins (1972).
Consequently, vertical stirrups will not contribute to the shear resistance except by
confining the concrete and providing support for the flexural reinforcement which acts
in dowel action.
Concrete shrinkage or accidental damage can cause a pre-existing crack through the
depth of the member. The direct shear resistance will always be lower for a shear
plane with an existing crack since the resistance is only governed by shear transfer
along the cracks, aggregate interlocking and dowel action of the reinforcement,
Mattock and Hawkins (1972). However, if the section is heavily reinforced, it will
have a similar response to an initially uncracked section. In this thesis shrinkage of
concrete will not be considered and the elements are assumed to be intact when
loaded.
2.5.2 Dynamic response
Dynamic direct shear failures have been reported in experiments by Kieger
et al. (1980-1984) and Slawson (1984), see Figure 2.34. These are observed close to
the supports short after the arrival of the shock wave for highly impulsive loads.
According to Low and Hao (2002) a high stiffness with a short span increases the risk
for direct shear failure. It has also been shown that a load with high amplitude for a
short duration increases the risk for direct shear failure. If the structure survives the
direct shear mode, it will go into flexible mode. The early behaviour of a beam
subjected to an impulse load must therefore be studied in order to explain what causes
these types of failures.

-- 58 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 41
Figure 2.34. Slab that has developed direct shear behaviour, Slawson (1984)
It has been shown in previous research (Slawson 1984; Kieger and Getchell 1980-
1984; Johansson and Laine; 2009, Nyström, 2006; Augustsson and Härenstam; 2010)
that the initial deformation shape for a structure subjected to blast loading is not the
same as that predicted at maximum deformation. Within the first few milliseconds
after load arrival the deformation shape is characterised by a nearly rigid body motion
of the centre part of the element as shown in Figure 2.35. The un-deformed parts of
the element close to the supports have not deformed as much, which creates a large
difference in deformation over a small length. No flexible behaviour is observed in
the early time span, which suggests that the direct shear failure mode and the flexible
failure mode can be considered independent of one another.
Figure 2.35. Research has indicated that a structural element subjected to an impulse
load will initially deform as a rigid body motion.
The theory behind dynamic direct shear failure mode is not well understood. One
possible reason of the early behaviour is explained by Ross (1983). He uses simple
elastic wave propagation theory to explain reflections of the shock wave approaching
the element, see Figure 2.36. After the wave has progressed through the depth of the
member, it encounters a boundary between the edge and the air or supports. The wave
is transmitted into the supports while it completely reflects at the edge of the beam in
between the supports since the impedance of air is close to zero. As a result, the
relative difference between the velocities will be twice the previous velocity, which
will cause a velocity discontinuity close to the support, and therefore a high shear
force.

-- 59 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
42
v1
v1
v1	v1
Risk for high
shear forces
I)
II)
Figure 2.36. Ross (1983) explains the dynamic direct shear phenomenon with elastic
wave theory in which the wave is transmitted at the supports and totally
reflected in the centre. This generates a relative difference of double
velocity in the centre part compared to the velocity at the supports.
Another way of explaining the early behaviour is made by Johansson and
Laine (2009) and previous Master’s theses; Nyström, (2006), Augustsson and
Härenstam, (2010). They realise that the information of a load travels with an
approximate velocity of 3500 m/s in concrete. As a result, the centre part will not be
aware of the support conditions before information about this has reached them. The
boundary conditions can therefore be seen as time dependent, where they are initially
not active and later moves with the information speed in the structure. The governing
speed should probably be the velocity of a shear wave.
Since the centre part moves much more and faster than the supports, a discontinuity
region will occur close to the supports with very high shear inertia forces. These can
be calculated with for example, Biggs (1964) or the equivalent static load concept
described in Section 2.4.2.6. However, it is important to remember that these methods
are only valid when the assumed deformation shape takes place.
Ardila-Geraldo (2010) stated that a structure will fail in shear if the shear demand is
larger than the capacity. He investigated the actual shear demand at the supports by
comparing with experiments and found that the support reaction can be found by
varying the deformation shape and stiffness in an SDOF model. He derived an
expression for the initial stiffness by taking the rigid body motion into account. This
expression was later calibrated by FE analysis and experimental testing. He proposed
that the stiffness should be taken as

-- 60 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 43





	




 	

T	k
T
T
t
k
t	k
s
s
e
0.1	t	if
0.1	t	if	9	1	10
)	(	
(2-65)
where T is the structural period and ks is the theoretical bending stiffness assuming the
elastic flexural displacement shape. The relationship is illustrated in Figure 2.37.
Stiffness, k
Time, t
0.1T
ks -
10ks
Figure 2.37. Stiffness variation derived by Ardila-Geraldo (2010), assuming a near
rigid body motion.
The support reaction is then calculated with a modified Biggs equation
R	t	F	t	V	

	 	 )	(	)	(	
(2-66)
where
 and
have been calibrated from FE-analyses and
T	t 1	.	0	when	12	.	0	02	.	0 		
	
(2-67)

	 	 5	.	0	
(2-68)
It is important to find the correct initial reaction force at the supports in order to
investigate the direct shear behaviour. Therefore a study on the shear force at early
stages will be carried out in Chapter 6.
2.5.3 Simplified model for dynamic direct shear
An SDOF model can be used to explain the behaviour of direct shear analogously to
the flexible case. The system point should be taken in a point very close to the
supports. The shear force at the support should be evaluated and used in this model.
This is done by using the flexible equation of motion, equation (2-29), and calculating
the dynamic reaction force with Biggs’, Fortifikationsverket’s or the equivalent static
load method, described in Sections 2.4.2.5 and 2.4.2.6. Since the direct shear happens
very early, before any significant flexible behaviour, the flexible SDOF equation of
motion and the direct shear equation of motion, equation (2-29) and (2-69) can be
considered uncoupled.
The initial response when a structure is subjected to an explosion is a rigid body
motion, which means that the transformation factors used to transform the structure to
the single degree of freedom system is close to
mF = 1. The shear slip,
, at the

-- 61 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
44
supports can then be calculated with the simplified equation of motion for the direct
shear case, see Figure 2.38. As for the flexible case, damping is neglected.
)	(t	V	R	M s	s 			 	
(2-69)
V(t)
     	t	t	t 		 ,	, 		
Rs
Ms
Figure 2.38. Equivalent SDOF-model for direct shear, based on Crawford et al.,
1999). The stiffness Rs can be taken from the direct shear resistance
function in Figure 2.39. Damping effects are neglected.
The resistance Rs is taken from the direct shear resistance function developed by
Hawkins (1974). He used static tests to find a relationship between the shear slip and
the shear stress. The relationship was later modified by Krauthammer (1986) in order
to take rate effects and normal forces into account by applying a factor 1.4 to the
relationship found by Hawkins. The relationship is shown in Figure 2.39 and is
explained below. In this thesis, rate effects have been ignored to give results on the
safe side.

-- 62 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 45
Shear stress

, [MPa]
Shear slip,
[mm]
m
e
L
1	
2	
3	
max
D 	E
C	B
A
ke
ku
C’	B’
D’ 	E’
A’
Enhanced
Original
∆ 

 0.3 0.6
0
Figure 2.39. Shear resistance versus the slip along a shear plane. The enhanced
curve takes strain rate and normal forces into account. Based on
Mattock and Hawkins (1972) and later modified by Krauthammer
(1986).
The resistance function is an empirical model based on static tests. The first segment
from 0-A has an elastic response until a slip of 0.1 mm has been reached. For shear
slip in this range, the influence of reinforcement dowel action can be neglected. Thus,
the elastic part is independent of the amount of reinforcement crossing the shear
plane. For very low slips, the slip can be approximated with the crack width. This
leads to the formulation of the shear resistance in segment 0-A, see Table 2.6. The
first equation can be used for both pre-cracked and uncracked sections. For larger
shear slips, >1, dowel action becomes significant and should be considered.
Between A and B the shear resistance will increase until a shear slip of 0.3 mm is
reached. The resistance will remain constant until a slip of 0.6 mm is reached. For
large specimens, the plateau can be somewhat longer. The stiffness is negative
between C and D, independent of the amount of reinforcement and only slightly
dependent on the concrete strength. The resistance will later remain constant until a
failure shear slip ∆max is reached. This segment is merely dependent on reinforcement
dowel action. The resistance function equations are shown in Table 2.6.

-- 63 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
46
Table 2.6. Definition of Direct Shear Resistance Function converted into SI-units
see Figure 2.39. Based on Crawford et al. (1999).
Region Definition
0-A The response is elastic, and the slope, ke of the curve defined by the shear
resistance,
e, for a slip of
1 = 0.1 mm. That resistance is given by the
expression
c	e f	157	.	0	138	.	1 	
	
Where both
e and fc are in MPa. The initial part should be taken as elastic
to not more than2
m
e

 	 .
A-B The slope of the curve decreases continuously with increasing
displacements until a maximum shear strength,
m, is reached at a slip of
2 = 0.3 mm. The maximum strength is given by the expression
c	y	vt	c	m f	f	f 35	.	0	8	.	0	664	.	0 		
	
	
where
m, fc and fy are in MPa and
vt is the ratio between the total area of
reinforcement crossing the shear plane divided by the area of the plane. fy
is the yield strength of the reinforcement crossing the plane. The direction
of the reinforcement is not discussed but should have an impact on the
resistance.
B-C The shear capacity remains constant with increasing slips. C corresponds
to a slip of
3 = 0.6 mm.
C-D The slope of the curve is negative, constant and independent of the amount
of reinforcement crossing the shear plane. The slope is given as
 	3
N/mm	0295	.	0	543	.	0 c	u f	k 	
D-E The shear capacity remains constant. The deformation at E varies with the
level of damage, with a failure at a slip of
 		1	423	.	0	max 		 x
e
Where
b	c d	f
x /
18	.	5

And db is the bar diameter in mm. The limiting shear stress is defined as
su
c
sb
L f
A
A






 85	.	0	

where is Asb the area of the bottom reinforcement, Ac is the area of the
concrete section and fsu is the ultimate strength of the bottom
reinforcement.

-- 64 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 47
Chee (2008), evaluated previous carried out experiments by Kieger and Getchell
(1982), with the two SDOF models. These experiments were performed on slabs and
the resistance function was obtained by combining the direct shear resistance in each
direction. Chee (2008), found good agreement and could use the SDOF models to
predict which failure mode that would occur. The resistance function was taken as:
y	x R	R	R 		
(2-70)
Where Rx and Ry are the resistance function for the slab in each direction. Reliability
analyses have also been performed with this resistance function by Low and How
(2002) with good accuracy.
2.5.4 Design approaches
2.5.4.1 Swedish design approach
The concepts of direct shear, described by Swedish fortification Agency,
Fortfikationsverket, (2010), are presented in this section. First it is shown how the
shear force effect is calculated and then how the resistance is calculated. The shear
force should be checked for the initial elastic response and in the elasto-plastic
oscillating phase.
A shear span is calculated by taking the early rigid body motion into account and is
used to give a lower limit for when normal shear resistance can be used. If the shear
span to effective depth is less than 1.5 a strut and tie model should be used according
to Boverket (2004). This could be seen as the direct shear resistance. The limit is
defined as
5	.	1	
d
a

(2-71)
The procedure will not be explained in detail, but worth mentioning that the strut and
tie method does not take into account that the crack is almost vertical. For more
information the reader is referred to Chapter 6 in Boverket (2004).
The normal approach for shear design is described below. The maximum total
reaction can be calculated as:
b	a	q	b	a	p	V eq
m
F
m
F
tot 				




 	



 2	2
1	
(2-72)
where a and b are the length and width of a slab and for a beam a is the length and b
is the loaded width of the beam. κF and κm are the transformation factors for the
element, see section 2.4.2.6 for values, qeq is the equivalent static load and p is the
peak pressure. Plastic response is assumed if
2	
eq	q
p
(2-73)
and the plastic transformation factors should then be used. From this, the support
reaction can be calculated as

-- 65 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
48
tot	v	Sd V	k	V 	
(2-74)
where kv depends on the deformation shape of the structure. For a simply supported
beam kv will be 0.5.
The shear capacity shall be examined in the shear span, i.e. half the distance between
the support and zero shear force. It can be shown that the shear effect at this point is
half the support reaction, see Appendix C for derivation.
TOT	v	d V	k	V 5	.	0		
(2-75)
The shear span aτ can be calculated as
supports	simply	for	25	.	0	025	.	0 p
q
L
a eq
		
	
(2-76)
supports	fixed	for	35	.	0	01	.	0 p
q
L
a eq
	

(2-77)
where L is the length of the span, qeq is the equivalent static load and p is the peak
pressure. For slabs, L should be replaced by the shorter width b since it gives a
smaller shear span and a higher shear effect. From this expression it can be identified
that the shear span is increasing for lower pressures. Moreover, it is clear that using
equation (2-71) the limit for using normal shear force resistance for a simply
supported beam is defined as
5	.	1	25	.	0	025	.	0 






 	 d
L
p
q
d
a d	

(2-78)
The capacity of a concrete section without influence of shear reinforcement is a limit
for a form of crushing of compression strut and is defined as
bd	k	V c	c 	
(2-79)
where d is the effective depth and kc is depending on the shear span, the protection
level and reinforcement amount.
s
f
k	kc

		
(2-80)
Here s is a factor for the protection level used by the Swedish military and depends on
how much damage the exposed structure can be allowed:
B3	and	B2	B1,	level	protection	for	2	.	1		s
C	level	protection	for	0	.	1		s
and fρ is a factor that depends on the amount of reinforcement (ρ)

-- 66 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 49
3
1	.	0
7	.	0 
	

	f	
(2-81)
d	b
As


		where	
(2-82)
and kτ depends on the shear span and the concrete strength.
45	.	0	if	25	.	0	0, 		 d
a
f	k	k c


		
(2-83)
45	.	0	if	45	.	0 0, 	 d
a
d
a
k
k



	
(2-84)
If the shear force capacity is not sufficient, i.e. Vd>Vc according to equations (2-75)
and (2-79), shear reinforcement must be introduced. The required shear reinforcement
can be calculated as







 	
d
c
tot	s V
V
V	V 1	
For the initial elastic response (2-85)







 		 L
a
V
V
V	V
d
c
tot	s
	8
2
1
min	,
min	,	
For the oscillating elasto-plastic response (2-86)
where minimum values Vd,min and Vtot,min are obtained by setting p/q=1 and L as the
shorter span b for slabs. The shear reinforcement can then be calculated as
(2-87)
where θ is the angle of shear reinforcement to the flexural reinforcement in tension.
Consequently, no consideration is taken that the shear crack can be vertical.
In case of elastic response the shear reinforcement should be evenly distributed over
the length







 			
d
c
V
V
a	x 1	1	
	
(2-88)
In case of elasto-plastic response the shear reinforcement should be evenly distributed
over the length







 
					 L
a
V
V
L	x
d
c	
	8
1	1	25	.	0
min	,
(2-89)
  yk
s
t f
A
V 

	sin

-- 67 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
50
where the distance between the shear reinforcement should not be greater than
0.75∙(1+cotθ)∙d. L should be set as the shorter span b for slabs.
2.5.4.2 American design approach
DoD (2008) defines direct shear as the rapid growth of a vertical crack through the
depth of a concrete member. Diagonal steel reinforcement anchored in the support can
prevent this and is required if the
 design support rotations are greater than 2°
 concrete direct shear capacity is insufficient
 section is in tension.
The direct shear capacity of concrete is considered to be zero if the rotation is greater
than 2° or if the section is in tension, which can be the case with an indoor explosion.
Diagonal reinforcement is not recommended to be designed in beams. Instead,
rotations should be limited and the concrete direct shear capacity sufficient. The direct
shear capacity is not zero for simply supported members even if the support rotation is
greater than 2°. Consequently there is no need for diagonal reinforcement if the direct
shear capacity is adequate. The direct shear capacity for concrete can be written as for
a slab and beam respectively.
slabs	for	'	16	.	0 bd	f	V dc	d 	
(2-90)
beams	for	'	18	.	0 bd	f	V dc	d 	
(2-91)
where Vd is the direct shear capacity of an element with width b and effective depth d.
f’dc is the ultimate dynamic compression strength of the concrete, which is 10%
greater than the ultimate compression strength.
c	dc f	f 	 1	.	1	'	
(2-92)
If diagonal bars are required, the required area can be expressed as
 	
 	
	sin	' 


ds
d	s
s f
V	b	V
A	
(2-93)
Where As is the required shear reinforcement bar area, Vs is the ultimate shear force at
the face of the support per unit width,
 is the angle of the bars and f’ds is the dynamic
design stress for the reinforcement, which depends on the maximum support rotation.
How to determine the dynamic design stress for different support rotations is
presented in DoD (2008), with a lower value corresponding to the yield stress fyd for
small values of the maximum support rotations.
For an unreinforced concrete member loaded in bending the maximum allowable
shear stress, Vc, can be calculated with equation (2-94) or (2-95).
  2	/1
2 dc	c f	V 		
(2-94)

-- 68 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 51
 	 	 	  2/1	2/1 5	.	3	2500	9	.	1 dc	dc	c f	f	V 				
		
(2-95)
Where
is the reinforcement ratio of tensile reinforcement at the support.
According to DoD (2008), the ultimate shear force at the face of a support is
reasonably estimated for a short duration blast load as a function of the maximum
internal resistance only. If the ultimate resistance is not reached, the actual elastic
resistance value should be used to obtain the shear forces at the supports. This
corresponds to using the equivalent static load introduced in Section 2.4.2.6. The
values for different support and load conditions are shown in Table 2.7.
An interesting observation is that this corresponds to using the equation as in the
Swedish approach, see equation (2-72), with transformation factors assuming a rigid
body motion, i.e.
m =
F = 1. Consequently, the contribution from the load is not
taken into account as it is for the Swedish approach. This should be on the unsafe side
initially but conservative during the plastic oscillation.
Table 2.7. The maximum support reaction according to DoD (2008). Ru and ru are
the ultimate internal resistance force and force per unit length.
Edge Conditions and Loading
diagrams
Support Reactions, Vs
Left support Right support
2
u	R
2
u	R
16
11 u	R
16
5 u	R
2
u	R
2
u	R
u	R	
2
u	R
2
u	R
2
L	ru
2
L	ru
8
5 L	ru
8
3 L	ru
2
L	ru
2
L	ru
L	ru	

-- 69 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
52
The shear force at the supports of a slab is harder to determine but expressions can be
found in DoD (2008). It is derived by using the yield line procedure and depends on
which yield line figure that is chosen. The reader is referred to DoD (2008) for more
information.

-- 70 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 53
3 Reinforced concrete beam subjected to impulse
load
3.1 Introduction
In order to give a better understanding of the behaviour of a reinforced concrete beam
subjected to an explosion, an example is carried out. The beam is modelled in the
finite element program ADINA which is considered to best represent the real
behaviour. The result will be compared to the result that can be obtained by simplified
hand calculations and with an equivalent SDOF approach described in Section 2.4.2.
The problem will be simplified by only considering four material responses, namely;
linear elastic state I, linear elastic state II, ideal plastic and elasto-plastic. The beam is
modelled in ADINA with beam elements with the different simplified material
behaviours. The example will later be extended by modelling the real non-linear
behaviour in Appendix I.
3.2 Definition of geometry and loading
A 3 metre high and 400 mm deep reinforced concrete wall in a protective facility or a
building without windows will be analysed. The wall is reinforced with steel
reinforcement B500B s which is placed 40mm from the edge. Since a
dynamically loaded system will be strained in both directions it is important to
reinforce both sides of the member equally. The concrete strength is C30/37. The wall
is subjected to a uniform pressure that decreases with time. For this case the so called
archive bomb, introduce in Section 2.1, has been used as a reference load; i.e. 125 kg
of TNT detonated 5 metres away from the wall and assuming spherical spreading,
Johansson and Laine (2007). This will give a peak pressure of 5000 kPa and an
impulse intensity of 2800 Ns/m2, which corresponds to load duration of 1.12 ms when
assuming a triangular load impulse as mentioned in Section 2.1. The archive bomb is
referred to as load case 1, also denoted LC1. The wall will be subjected to other load
cases with the same impulse intensity. All load cases and their corresponding values
are presented in Figure 3.1. Further, when no specific load case is mentioned load
case 1 is used.

-- 71 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
54
Load case Ppeak [kPa] t
 [ms]
LC0 	10,000 0.56
LC1 	5,000 	1.12
LC2 	2,500 	2.24
LC3 	1,250 	4.48
t
t
Ppeak
Ppeak, 0
Ppeak, 1
Ppeak, 2
Ppeak, 3
t
, 0 	t
, 1 	t
, 2 	t
, 3
Figure 3.1. An illustration of the different load cases and their corresponding values
of peak pressure Ppeak and load duration t
. All loads have the same
impulse intensity i.
The wall is not hindered to rotate at the rigid supports, which only support the wall in
one direction. Thus, the wall can be simplified as a simply supported beam element
with a width of 1 metre, see Figure 3.2. The data is summarised in Table 3.1.
1.0m
0.4m
A-A
3.0m
A
A
q
Figure 3.2. The dimensions of the beam used in the example.
Table 3.1. Summarised data for the example beam.
Data for the example
Length, L 3.0 m Impulse intensity, i 2800 Ns/m2
Depth, h 0.4 m Peak pressure, Pc 5000 kPa
Width, b 1.0 m Active time, t
 1.12 ms
Reinforcement 20s200 B500B
Concrete C30/37
Concrete cover, c 50 mm

-- 72 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 55
The beam can be simplified into a single-degree of freedom system by choosing a
system point and then applying an equivalent mass, stiffness and force to it. The
centre point of the beam has been chosen as the system point in this example. The
transformation of a beam into a SDOF-system is done by using transformation factors.
The transformation factors depend on the shape of the beam deflection, which means
that different transformation factors will be used for the different material behaviour.
They are tabulated in Section 2.4.2.3. The equation of motion can then be solved
analytically or numerically. The central difference method will be implemented in
MATLAB for this example, and is presented further in Appendix A.
3.3 Equivalent SDOF system
3.3.1 Mass
The hand calculation uses the work equilibrium method described in Section 2.4.2.4.
In order to calculate the maximum deflection and the work equilibrium, the stiffness,
equivalent mass and the maximum resistance force must be calculated. The mass can
be calculated to
kg	2880	0	.	3	0	.	1	4	.	0	2400 								 L	w	h	m	
	
(3-1)
As shown in Section 2.4.2.3, the only parameter needed to be transformed into an
equivalent parameter is the mass. It will depend on the deflection shape and hence we
obtain different equivalent masses for the elastic and plastic cases, respectively. The
κmF values are presented in Section 2.4.2.3. The equivalent mass for the elastic and the
plastic materials respectively is
kg	2270	2880	788	.	0 			 m	m mF	el	
	
(3-2)
kg	1921	2880	667	.	0 			 m	m mF	pl	
	
(3-3)
3.3.2 Stiffness
The stiffness for a simply supported beam can be calculated as
3
5
384
L
EI
k 	
(3-4)
Hence, the moment of inertia for state I and II is to be found. The influence of the
reinforcement in the compression zone in state I and II can be neglected. The tension
reinforcement is considered by transforming the steel area into a corresponding
equivalent concrete area.
s	s
c
s
eq	s A	A
E
E
A	
			,	
(3-5)
where

-- 73 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
56
2	20 mm	1571
2	.	0
314 		 s
A
As

(3-6)
36	.	6
33
200 		
c
s
E
E
	
(3-7)
(3-8)
The effective depth is
mm	350	50	400 				 c	h	d	
(3-9)
Then the moment of inertia for state I can be calculated as
 	
 	 4	9
2	2	3
2	2	3
mm	10	71	.	5	50
2
400
2
400
350	1	36	.	6	1571
12
400	1000
2	2
1
12
	







 




 		




 				










 




 			




 				 	d
h	h
d	A
bh
I s	I	

(3-10)
In state II, the moment of inertia must be calculated from the cracked cross-section.
By assuming negligible normal forces, the height of the compressed zone x can be
calculated by area equilibrium
s
s
A	bx
d	A
x
b
x




 2
2
(3-11)
The height of the compressed zone is then obtained
mm	74		x	
(3-12)
The moment of inertia in state II can then be calculated as
 	 	 	 4	8	2
3
2
3
mm	10	97	.	8	74	350	1571	36	.	6
3
74	1000
3 					

			 x	d	A
bx
I s	II	

(3-13)
The stiffness for the cracked and uncracked state can be calculated using
equation (3-4).
m
N
10	00	.	5
3	5
10	33	.	5	10	33	384 8
3
3	9
	

			


I	k
m
N
10	42	.	8
3	5
10	97	.	8	10	33	384 7
3
4	9
	

			


II	k
(3-14)
(3-15)
3.3.3 Maximum internal resistance
When the plastic case is considered, there is no stiffness and instead the internal
resistance is explained by the maximum capacity. As a simplification, the plastic
material behaviour is modelled as a straight line, which starts to yield at the maximum
capacity. A comparison is made and the difference is only 2% between the ultimate
moment capacity and moment capacity when the steel just yields, see equation (3-20).

-- 74 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 57
The ultimate moment capacity must therefore be calculated. An explanation is given
in Figure 2.5. The compressed zone, x, can be calculated from equation (3-16), if is
assumed that the steel yields and that the section reaches its ultimate capacity when
the concrete reaches the ultimate compressive strain in the outermost fibre. Factors
R
and βR are stress block factors that are 0.81 and 0.416 respectively when the section
has reached its ultimate capacity according to Eurocode 2, CEN (2004).
mm	42
1000
5	.	1
30
81	.	0
1571
15	.	1
500

	

	 w	f
A	f
x
cd	R
s	yd

(3-16)
The partial coefficients used for steel and concrete are equal to 1.15 and 1.5
respectively. An explosion is categorised as an accidental load and therefore these
partial coefficients should be set to 1.0 for steel and 1.2 for concrete. Nevertheless, the
values used in this thesis will not affect the comparison. However, it should be
noticed that in design the correct partial coefficients corresponding to an accidental
load should be used. The moment capacity can then be established by moment
equilibrium around the steel reinforcement.
 	 						 x	d	b	x	f	M cd	R	Rd	

	
 	 	kNm	227	042	.	0	416	.	0	35	.	0	1	042	.	0
5	.	1
30
81	.	0 							
(3-17)
According to Biggs (1964) the maximum internal resistance is defined as
kN	606
3
10	227	8	8 3

	
	 L
M
R Rd
m	
(3-18)
The moment capacity when the reinforcement steel start to yield is calculated by
assuming the strain in the tension reinforcement is equal to the yield strain. The
moment at this point can be calculated as
kNm	223
3	2
2
	




 		

	 II
II
II	sy	C
yd
x
d	b
x	d
x	E
M

(3-19)
The ratio between the two moment capacities are stated as
.98	0	
Rd
yd
M
M
(3-20)
The state II stiffness has been used in the elasto-plastic model. This will give a
slightly larger elastic deformation than in the real case. This is because a bi-linear
relationship is assumed which will give a longer elastic branch, see Figure 3.3.

-- 75 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
58
u
Rm -
R
Assumed behaviour
Real behaviour
uel,Real uel,Assumed
Figure 3.3. The difference between the real behaviour and the assumed bi-linear
elasto-plastic behaviour used in the SDOF model.
3.4 Hand calculations
3.4.1 Maximum required deformation
The required deformation for having energy equilibrium assuming linear elastic
behaviour can be calculated as
	m
I
u c
el 	
(3-21)
The deformations in state I and state II can be obtained as
mm	9	.	7
10	00	.	5	2270
3	1	2800
8
	, 
	
	
	I	el	u	
(3-22)
mm	2	.	19
10	42	.	8	2270
3	1	2800
7	, 
	
	
	II	el	u	
(3-23)
According to equation (2-17) the plastic deformation can be expressed as
mR
I
u c
pl 2
2
	
(3-24)
This will give the required plastic deformation
 	 mm	3	.	30
10	5	.	605	1921	2
1	3	2800 3
2

		
	
	pl	u	
(3-25)

-- 76 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 59
The total deformation for the elasto-plastic case can be calculated according to
equation (2-18) as
k
R
mR
I
u c
ep 2	2
2
		
(3-26)
The total elasto-plastic deformation will therefore be
mm	9	.	33
10	42	.	8	2
10	605
10	3	.	30 7
3
3 
	

		 
ep	u	
(3-27)
Of which the elastic deformation is
mm	1	.	7
10	42	.	8
10	605 7
3
, 


	 k
R
u el	ep	
(3-28)
Then the plastic part of the deformation can be calculated as
mm	8	.	26	,	, 		 el	ep	ep	pl	ep u	u	u	
(3-29)
In the ideal plastic and the elasto-plastic cases, the maximum capacity is assumed and
the energy is dissipated with plastic deformation. The failure criterion will therefore
not be the moment capacity. It is rather the rotational capacity of the section that is
important.
3.4.2 Dynamic reactions
The dynamic reactions can be calculated for the instant when maximum deformation
takes place by using an equivalent static load, described in Section 2.4.2.6. For the
elastic case it is
	c	el I	Q 	
(3-30)
This gives a value for the uncracked case
kN	3942
2270
10	00	.	5
1	3	2800
8
, 

				I	el	Q	
(3-31)
And for the cracked case
kN	1618
2270
10	42	.	8
1	3	2800
7
, 

				II	el	Q	
(3-32)
The plastic equivalent load is calculated from
kN	606		 m	pl R	Q	
(3-33)

-- 77 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
60
Rm is calculated according to equation (3-18). The moment effect on the beam at mid
span can then be calculated as
8
QL
M Ed 	
(3-34)
According to Johansson and Laine (2009) the support reaction can be found as
2
Q
VEd 	
(3-35)
This gives the dynamic reaction presented in Table 3.2. Johansson and Laine (2009)
also mention that higher support reactions can occur at an early stage when the beam
is subjected to an impulse load.
Table 3.2. Dynamic reactions at maximum deflection
u [mm] MEd [kNm] VEd [kN]
Elastic state I 7.9 1478 1971
Elastic state II 19.2 607 809
Plastic 30.3 227 303
An interesting observation is that less stiff elements will deform more but will not
require as much capacity. However, there is an upper limit for how much an element
can deform. For the elastic cases a simple capacity check can be carried out. For the
plastic case the plastic rotation capacity must be limited.
The Eurocode 2 approach to perform this check is described in section 2.2.3. Firstly,
the shear slenderness should be checked. This is done by dividing the shear span with
the effective depth of the member. The shear span for a simply supported beam is half
the length.
29	.	4
35	.	0	2
3
2
0 

		 d
L
d
x
s	
	
(3-36)
The diagram in Figure 3.4 is used for finding the plastic rotation capacity. It is only
valid for λs=3. For other values it should be corrected with
20	.	1
3 	 s
k

	
(3-37)

-- 78 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 61
x / d
pl [10 -3 rad]
Figure 3.4. Diagram for evaluating the plastic rotation capacity according to
Eurocode 2, CEN (2004).
In this example, the ratio between the compressed zone and the effective depth of the
beam is
12	.	0
350
42 	
d
xu
(3-38)
Class B reinforcement is used, then the plastic rotation capacity can be found as
θpl = 12.5∙10-3 rad from Figure 3.4. It can be observed that the capacity is limited by
the ultimate steel strain. However, it is a good design since the plastic rotation
capacity is high.
The maximum plastic rotation capacity can then be calculated as
rad	10	15	10	5	.	12	20	.	1 3	3
,
	 					 pl	d	pl k

	 	
(3-39)
The plastic rotation capacity can be related to the plastic displacement for a simply
supported beam as
mm	5	.	22
2
10	15	3
2
3
,
, 
	
	

d	pl
d	pl
L
u

(3-40)
which is smaller than the deformation in the elasto-plastic model. However, in
equation (3-32) it is shown that the plastic deformation needed is 26.8 mm, i.e. larger
than the capacity, which means that the beam will not be able to resist the blast load
and will fail when the deformation reaches 22.5 mm.

-- 79 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
62
3.5 FE-analysis ADINA – considerations and restrictions
3.5.1 Introduction
For detailed analyses the finite element program ADINA will be used. It is a good
choice when analysing a structure’s dynamic response. However, some important
considerations and modelling simplifications must be introduced such as: usage of
equivalent Young's modulus, FE elements, wave propagation, integration schemes,
output and damping.
3.5.2 Equivalent Young’s Modulus
The choice of modelling a simplified material in ADINA is by using a linear or bi-
linear material response. Hence, this will cause some modelling issues concerning the
correct Young’s Modulus and thereby the correct speed of the waves in the material.
When the calculation in state II is performed, ADINA will not recognise that the
section is cracked and will use the moment of inertia of the full uncracked concrete
section. In order to model a cracked section and obtain the state II stiffness, the
Young’s modulus will be multiplied with the ratio between the moment of inertia in
state II and state I from equation (3-10) and (3-13).
GPa	18	.	5	33
10	71	.	5
10	97	.	8 3
4
	


	 

I
I
II
II E
I
I
E	
(3-41)
ADINA cannot model ideal plastic material behaviour. Instead, a bi-linear relation
with a Young’s modulus multiplied with 100 to approximate a fully plastic behaviour
is used.
GPa	3300	100 	 I	pl E	E	
(3-42)
It could be argued that the wave speed in the material should be maintained by
changing the moment of inertia instead of Young’s modulus. This will affect the
fictional yield stress and the geometry of the beam and will consequently be a more
complex way of modelling. The modelling can be performed in three ways, shown in
Figure 3.5. The first scheme is used above in order to calculate an effective Young’s
modulus. This method does not maintain the wave speed in the beam, see
equation (2-19), which will change with the square root of the factor used for the
Young’s modulus. Scheme 2 maintains the wave speed by only changing the moment
of inertia I. As a result, the geometry and the fictional yield stress must be changed. If
the height of the beam is increased to more than three times the span length it
becomes a deep beam and ADINA cannot guarantee accurate solutions when using
beam elements with the Euler-Bernoulli beam theory formulation. Therefore, a third
scheme is introduced, which maintains the wave speed by increasing the density.
Since the mass must be constant this unfortunately also affects the geometry and
fictional yield stress. This is the most complicated scheme and is not preferable since
it does not provide a solution to the deep beam problem.

-- 80 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 63
E, A,
,
y
b
h
b’
h’
E’, A’,
',y’
(EI)’=∙EI
E’=
∙E
I’=I
A’=A
’=

h’=h
b’=b
y’=2
'
'
h
I
M Rd
c’ =		c
(EI)’=∙EI
E’=E
I’=
∙I
A’= A
’ =

h’='
'	12
A
I
b’=A’/h’
y’=2
'
'
h
I
M Rd
c’ = c
(EI)’=∙EI
E’=
∙E
'=
∙

m’=m
A’=
A
I’=I
h’='
'	12
A
I
b’=A’/h’
y’=2
'
'
h
I
M Rd
c’ = c
c’=c
Scheme 1 	Scheme 2 	Scheme 3
b
h 	E’, A’,
',y’
Figure 3.5. The methods for changing stiffness when a cracked section or an ideal
plastic section is considered.
If the bending stiffness EI decreases and schemes 2 or 3 are used, the equivalent
section will become wider and lower. Consequently, the deep beam formulation will
never occur and these schemes are applicable at all times provided that the original
section is not a deep beam. The ideal plastic case is modelled with larger bending
stiffness EI. This will mean that the depth of the beam increases and problems in the
modelling can occur.
Scheme 1 is preferable to use since it only changes the Young’s modulus. Therefore,
the influence of the wave speed must be investigated. This is carried out by keeping
EI constant, i.e. changing Young’s modulus and the moment of inertia with the same
factor, i.e.

I
I 	'	
and	EI	EI 	)'	(	 (3-43)
It is carried out in an elasto-plastic case but gives the same results in the elastic and
ideal plastic cases. As can be seen in Figure 3.6, the deformation changes when the
wave speed is decreased. The solution with 9 times less elasticity modulus diverges
slightly after having reached the turn point. This corresponds to 3 times lower wave
speed. Considerable change is not noticed until the velocity is wrong with a factor of
five, i.e. E / 25. If the moment of inertia is increased 100 times, the beam becomes a
deep beam and the deformation diverges a lot; i.e. such a combination cannot be used.
The solution using an equivalent elasticity modulus, though, agrees well with the real
behaviour. It can therefore be justified to use scheme 1 when modelling the state II
behaviour.

-- 81 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
64
Figure 3.6. The displacement in midpoint for different wave speeds in the beam.
The deformation in the midpoint is very similar if the wave speed is the “real” wave
speed or higher. Therefore, the model with ideal plastic behaviour is believed to be
reasonably correct. It is not possible to investigate how the wave speed influences an
ideal plastic 3 metres beam since the moment of inertia cannot be increased
considerably before deep beam is obtained. Therefore, Studies of a 15 metres long
beam have also been carried out. The -value was 100. The deformation is higher for
the model with higher wave speed while scheme 2 and 3 provide the same result.
The wave speed in the beam is complicated and is researched by ADINA at the
moment. As will be seen in Section 3.5.4, the time-step also influences the wave
propagation and the existing problems with wave propagation should be known.
However, the currently used modelling techniques are sufficiently accurate for this
case and small changes in the wave speed can be neglected.
3.5.3 FE-elements
Beam elements will mainly be used for this thesis. A detailed analysis will be
performed using 2D-solid plane stress elements will also be performed.
All elements in the beam will be modelled as elastic, plastic or elasto-plastic. Ek and
Mattsson (2009) modelled the beam with one plastic element in the midpoint. They
obtained a large divergence in their result since the elastic elements oscillated around
the plastic element.
0
5
10
15
20
25
30
35
40
0 10 20 30 40 50
Deformation,
 us [mm]
Time, t [ms]
100E
E=33 GPa
Eeq
E/9
E/25
E/100

-- 82 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 65
ADINA chooses 7 integration points over the height of the cross-section, regardless of
the user’s choice, when performing 3D beam analyses. It has been shown in previous
master theses (Ek and Mattsson, 2009; Augustsson and Härenstam, 2010) that
ADINA will not have the assumed capacity of a 3D beam cross-section. The stress are
correct at the integration points but the stress distribution in between is described with
a polynomial which gives another capacity compared to what would be expected. This
is illustrated in Figure 3.7.
Expected stress distributon
fyd
fyd
Stress distribution using
7 integration points
fyd
fyd
Figure 3.7. The stress distribution over the height using 7 integration points.
However, when 2D beam elements are used it is possible to use 3 integration points
over the height in ADINA, which will make the stress vary linearly through the cross
section, see Figure 3.8. In this example only 2D action is used, which means that 2D-
beam elements with 3 integration points over the height are used. A fictional yield
stress can therefore be introduced. The input fictional yield stress is dependent on the
stress distribution and indirectly dependent of the integration points. The input
fictional yield stress can therefore be calculated to
Figure 3.8. Stress distribution when using 3 integration points over the height. A
fictional yield stress, fyd can be introduced.
3.5.4 Wave propagation
3.5.4.1 Introduction
Wave speed is of importance when investigating the initial behaviour of an impulse
loaded structural element. Therefore, the modelling of wave propagation in ADINA
needs to be investigated. This is done for both beam elements and solid 2D-elements.
It should be mentioned that ADINA always uses the elastic wave regardless of the
structures response, ADINA (2010). The investigation has been made with an impulse
with constant amplitude for 1 ms, see Figure 3.9.
Stress distribution
(z)
fyd
fyd
6
with
2
bh
W
W
M
f el
el
Rd
yd 	
MPa	51	.	8
4	.	0	1
10	227	6 2
3


	
	yd	f
(3-44)

-- 83 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
66
t
t = 1 ms
F
Figure 3.9. Impulse load used for wave propagation studies.
3.5.4.2 Beam elements
The two cases shown in Figure 3.10 were investigated. The support reaction was
investigated and the wave was assumed to arrive when the magnitude reached 0.5% of
the maximum value. As presented in Section 2.4.1.6, the time until a pressure wave in
one dimension would arrive at the support should be:
s	10	404	.	0
2400
10	33
5	.	1 3
9

	

	 c
L
t
(3-45)
The time until a shear wave would arrive should be:
s	10	627	.	0
2400	)	2	.	0	1	(	2
10	33
5	.	1 3
9

	
		

	 c
L
t
(3-46)
Large divergence between the theoretical wave speed and the analysis were found.
The first case should correspond very well to a pressure wave and the second case to a
transverse wave. Both cases have approximately the same arrival time. It is 0.21 and
0.22 ms respectively. For case one a major shock front seems to arrive approximately
at the theoretical arrival time but some disturbance has arrived before. This could be
due to some numerical errors in the calculation.

-- 84 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 67
-10000
-5000
0
5000
10000
0 	0.5 	1 	1.5
Reaction force,
 V [N]
Time, t [ms]
0.21
-2000
-1000
0
1000
2000
0 	0.5 	1 	1.5
Reaction force,
 V [N]
Time, t [ms]
0.22
F=5000 N
F=5000 N
L=1.5 m 	L/2=1.5 m
E =33 GPa
I =5.333∙10-3 m4
=2400 kg/m3
(a) 	(b)
Figure 3.10. Support reaction over time for the two experiments. The blue dotted line
represent the theoretical arrival time for the waves.
The wave speed in the beam model seems to be independent of Poisson’s ratio. The
same result is obtained if no transverse deformation is allowed, i.e.  = 0. This
suggests that the wave speed is calculated as the speed of a pressure wave when using
beam elements regardless of the actual speed. This should not be true for a shear wave
and therefore it may not be appropriate to model the wave propagation with beam
elements.
The wave speed depends on Young’s modulus, E, of the material as seen in
Section 2.4.1.6. The elastic modulus was therefore varied while the area and bending
stiffness was kept constant, according to scheme 1 in Section 3.5.2, in order to see
how the arrival time to the support changed. The elastic modulus was increased 25
times, which gives the following input variables.
c	c
I
I	E	E 5	'
25
'	25	' 			
(3-47)
The result is visualised in Figure 3.11. According to equations (3-45) and (3-46) with
parameters from equation (3-47) the arrival time should be approximately 0.08 ms for
a pressure wave and 0.125 ms for a shear wave. The theoretical values are represented
with a blue dotted line. Again, it can be seen that the support reaction has some
disturbance before the major front arrives. The shear wave does not seem to be
modelled appropriately using beam elements.

-- 85 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
68
Figure 3.11. The reaction force over time for a beam with a higher Young’s modulus,
E’ = 25E.
It was not possible to model a much lower elastic modulus since the program
interprets the high moment of inertia as a deep beam section, which does not give
adequate values using Euler-Bernoulli beam theory, compare reasoning in
Section 3.5.2. This is a modelling limitation but will not influence the results in
further analyses since Young’s modulus is always higher and the moment of inertia is
always lower.
3.5.4.3 2D-solid elements
The wave speed may not be modelled correctly with linear beam elements and in
order to get a better understanding, the wave speed was also studied using 2D solid
plain stress elements. It is also interesting to study whether the model distinguishes a
shear wave from a pressure wave. The influence of Poisson's ratio is also studied to
see how much it influences the wave speed for the two cases.
To study the wave speed the simple cantilever beam of length 1.5m was used, see
Figure 3.12a. A load in the form of a pressure load is applied to the tip of the beam.
This load is applied in the axial direction to the beam, see Figure 3.12a. To measure
the wave speed the reaction in the horizontal direction of the beam is studied at the
support. For this case the influence of Poisson's ratio is very small, this can be seen in
Figure 3.12b. The wave speed is higher when studied in the FE-analysis compared to
the expected theoretical value. The theoretical wave speed for the pressure wave is
 	 	 	 m/s	3785
2	.	0	1	2400
10	33
1 2
9
2 
	





	
E
c	
(3-48)
and the corresponding arrival time is
ms	40	.	0
3785
5	.	1 		 c
L
ta	
(3-49)
-15000
-10000
-5000
0
5000
10000
15000
0 	0.25 	0.5
Reaction force,
 V [N]
Time, t [ms]
0.043
-10000
-5000
0
5000
10000
0 	0.25 	0.5
Reaction force,
 V [N]
Time, t [ms]
0.043

-- 86 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 69
It can also be observed that the influence of Poisson’s ratio is very small leading to
that this is presumably a pressure wave.
-80
-60
-40
-20
0
20
40
60
80
0 0.2 0.4 0.6 0.8 1
Reaction,
 V [N]
Time, t [ms]


(a) 	(b)
1.5 m
Figure 3.12. The wave speed when using 2D-solid elements. The dot in (a) indicates
in which point the reaction is measured.
When studying the shear wave the same cantilever beam model is used. The load is
applied as a shear load at the tip of the beam and is distributed along the whole height
of the beam, see Figure 3.13a. The reaction in the vertical direction is then studied at
the support.
This study shows that that the influence of Poisson's ratio is higher for the shear wave
than a pressure wave, see Figure 3.13b. This is expected due to the influence of
Poisson's ratio when calculating the shear modulus. The fact that the wave speed
obtained in the second analysis is lower strengthens the assumption that it is a shear
wave not a pressure wave. As for the first case the wave speed obtained in the FE-
analysis is higher compared with the theoretical value. The theoretical shear wave
speed is
 	 m/s	2394
2	.	0	1	2	2400
10	33 9

	

	

G
c	
(3-50)
and the corresponding arrival time is
ms	629	.	0
2394
5	.	1 		 c
L
ta	
(3-51)

-- 87 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
70
-40
-20
0
20
40
0 0.2 0.4 0.6 0.8 1
Reaction,
 V [N]
Time, t [ms]


(a) 	(b)
1.5 m
Figure 3.13. The modelling of a shear wave. Larger difference between the model
with v = 0.2 or v = 0 implies that shear action is of more importance.
3.5.4.4 Influence by choice of time step
The wave propagation problem was investigated in contact with ADINA support,
ADINA (2012). ADINA suggested that the initial disturbed region before the wave
front occurs because the critical time has not been used and therefore numerical errors
occur. According to ADINA, using a time-step close to the critical time step is vital in
order to capture the wave properly. It is also suggested that the implicit method should
be carried out with the Bathe Composite Method, which provides better results. The
shear wave propagation is currently a researched subject ADINA (2012), and a
straightforward recommendation for the critical time step for a shear wave does not
exist. Reasonably, it would be the element length over the shear wave speed but this
relationship could not be found. The critical time step is the time the wave propagates
one element, ADINA (2010) and defined as
c
L
t e
c 		
(3-52)
Where Le is the element length and

	
G
c
E
c Beam	Beam 	 or	
(3-53)
 		

	
	
G
c
E
c Dsolid	Dsolid 

 2	2	2 or
1
(3-54)
for beam and 2D-solid elements, respectively, according to ADINA (2010).
The chosen time step affects the wave propagation considerably. Figure 3.14 shows
the support reaction when the critical time step is used. As seen, the agreement
between the theoretical wave front (blue dotted line) and the wave front in ADINA is
good. The previous found numerical errors before the wave front are decreased
considerably. However, it does not seem like the shear wave can be well explained by
beam elements and this is further supported by the fact that Poisson’s ratio does not
affect the answer.

-- 88 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 71
Figure 3.14. Support reaction when using the critical time step for a) beam elements
with axial force, b) beam elements with transverse force, c) solid 2D-
elements with axial force and d) solid 2D-elements with transverse
force.
Since wave propagation affects the result it is necessary to model the wave correctly.
However, other simplifications may induce problems when modelling the wave speed
but it is important to know the real solution.
3.5.5 Integration schemes
ADINA can use two integration schemes; the implicit method and the explicit
method. For the implicit time integrations the trapezoidal rule is used. This method is
also referred to as the constant-average acceleration method of Newmark, which is
obtained if the Newmark method is used and the parameters
 and
are set to 0.5 and
0.25, respectively. For explicit time integration the Central Difference Method is used.
This is described in Appendix A and is the Newmark method with
 = 0.5 and
 = 0.
The explicit method is a faster method but has a small critical time step that has to be
fulfilled in order to get stable results. Since analyses of explosions require small time
steps anyways, though, it can be beneficial to use the explicit method in more
complex analyses. Augustsson and Härenstam (2010) showed that there is not a
significant difference when using a 2D beam element, but the trapezoidal rule
integration scheme is preferable when 3D beam elements are considered.
When using the explicit method for a linear elastic beam modelled with beam
elements, the deformations did not correspond well to the expected one using hand
calculations or the implicit method, see Figure 3.15. The latter two, though, agree
-10000
-5000
0
5000
10000
0 	0.5 	1 	1.5
Reaction force,
 V [N]
Time, t [ms]
(a)
tc=0.2697 ms
-2000
-1000
0
1000
2000
0 	0.5 	1 	1.5
Reaction force,
 V [N]
Time, t [ms]
(b)
tc=0.4178 ms
-10000
-5000
0
5000
10000
0 	0.5 	1 	1.5
Reaction force,
 V [N]
Time, t [ms]
(c)
tc=0.1321 ms
-2000
-1000
0
1000
2000
0 	0.5 	1 	1.5
Reaction force,
 V [N]
Time, t [ms]
(d)
tc=0.2089 ms

-- 89 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
72
very well as also seen in for example previous Master’s theses. According to ADINA,
this is due to the fact that the explicit method always uses a lumped mass matrix while
the trapezoidal rule uses a consistent mass matrix. However, using the implicit
method with a lumped mass matrix does not correspond to the explicit solution. An
interesting observation is that there is a very good agreement between the simplified
SDOF method using the transformation factor
mF =1 and the explicit solution.
This problem is identified but will not be treated further in this thesis and the implicit
method will be used in further analyses. A recommendation for further work is that
care should be taken when the explicit integration scheme is used.
Figure 3.15. ADINA’s two integration schemes give different results. The explicit
method always uses a lumped mass which gives incorrect values.
3.5.6 Output
Section forces can be extracted in two ways; either by using section forces in the
integration points or as nodal forces. Section forces can only be used when the
response is linear elastic. Otherwise, nodal forces must be obtained in every element
node. Therefore, nodal forces have been used and further treated in other programs.
3.5.6.1 Shear force
The shear force is constant within an element as shown in Figure 3.16. The constant
shear force corresponds to the shear force in the centre of the element. This means
that the nodal force is the same in both element nodes but with opposite sign because
of ADINA’s sign convention. The shear force has been taken as the nodal force in the
first node of every element and positioned in the centre of the element.
-20
-10
0
10
20
0 	10 	20 	30 	40 	50
Displacement,
 us [mm]
Time t [ms]
Implicit
Explicit

-- 90 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 73
ADINA
Analytical
Shear force, V
Coordinate, x
q
Figure 3.16. ADINA gives output in the nodes. The analytical support reaction can be
obtained by interpolation in static cases. This is impossible for dynamic
cases where the shear force does not vary linearly.
The nodal force in the first node of the element closest to the support is not the same
as the support reaction. For a static case, the nodal forces in two nodes can be used to
linearly interpolate the support reaction. However, if the shear force distribution is
non-linear, as it is for a dynamic case, this cannot be done. Instead, the actual value of
the support reaction can be found in ADINA and used for the support reaction.
The support reaction is slightly higher than the nodal force in the first element at the
beginning of an impulse loading and then decreases to obtain a lower value. The
results should reasonably agree better if more elements are used. 30 elements seem to
have adequate accuracy compared to 100 elements as shown in Figure 3.17. The
support reaction is exactly the same for both choices of number of elements.
Figure 3.17. Comparison between support reaction and shear force in node closest to
the supports for different number of elements
-1500
-1000
-500
0
500
1000
1500
0 5 10 15 20
Support reaction [kN]
Time, t [ms]
(a)
Reaction 30
Reaction100
-1500
-1000
-500
0
500
1000
1500
0 5 10 15 20
Nodal force/Support reaction [kN]
Time, t [ms]
(b)
Nodal force 30
Reaction 30

-- 91 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
74
3.5.6.2 Moment
The moment varies linearly over an element and has been taken as the moment in the
first node of every element and positioned in the node. The moment in a structure
with plastic response can never exceed the maximum moment capacity. However, as
will be seen in Chapter 5, the nodal moment can be higher for some time steps. The
reason for this is unknown but is believed to depend on numerical errors in ADINA.
The stresses in an analysis with the same input data never exceed the input fictional
yield stress calculated in Section 3.5.3.
Nodal moments are only a post-process of the results and the analyses use stresses
when calculating the result. Consequently, the actual result remains accurate.
Figure 3.18 shows the moment in midpoint when using nodal moments or by
calculating a moment from corresponding stress. The curves follow each other, but
the nodal moment exceeds the maximum at two points. The moment calculated with
the stress distribution is never greater than the maximum moment. This raises the
question that the moment distributions should possibly be examined with stresses
instead of nodal moments.
Figure 3.18. Comparison between nodal moment results and moment calculated from
the stress distribution.
150
170
190
210
230
250
0 2 4 6 8 10
Midpoint Moment,
 M [kNm]
Time, t [ms]
Stress
nodal moment

-- 92 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 75
4 Displacement
4.1 Midpoint displacement
4.1.1 Elastic analysis
The SDOF-model represents the deformation obtained by the FE-analysis well when a
linear elastic material behaviour is considered. The only pronounced difference is that
the SDOF method gives a smooth curve while the oscillations from the FE-analysis
are uneven. The result for the linear elastic material behaviour in state I and II are
shown in Figure 4.1. It can be seen that the state II section, which is less stiff, gives a
higher deformation but oscillates with a lower frequency. The simplified hand
calculation method generally gives a slightly larger maximum deformation than what
can be obtained in the more accurate methods due to the simplification of a
characteristic impulse load. Very good agreement is also found for less impulsive
loads but they, as expected, diverge more from the hand calculation since the load is
less like a characteristic impulse load.
(a) (b)
Figure 4.1. Displacement versus time for different analyses for a concrete beam
with linear elastic response modelled in a) state I and b) state II
subjected to a load with peak pressure 5000 kPa and load duration of
1.12 ms.
The small oscillations in the midpoint deformation in the FE-analysis occur because
the FE-analysis takes higher modes of vibration into account, see Figure 4.2. The
SDOF-model does only consider the fundamental mode of vibration, which makes it
smooth.
1:st mode 	2:nd mode 	3:rd mode
Figure 4.2. Modes of vibration for a simply supported beam.

-- 93 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
76
4.1.2 Ideal plastic analysis
There is a significant divergence between the FE-analysis, equivalent SDOF-model
and hand calculations for the ideal plastic material model. These convergence
problems have also been encountered in e.g. Augustsson and Härenstam (2010). The
difference between the SDOF analysis and the hand calculation method is dependent
on the assumption of a characteristic impulse load. According to Section 2.4.2.7, the
error in displacement for an ideal plastic structure, can be evaluated from
8	.	24
605
3	5000 

	
m
peak
F R
F
	
(4-1)
For a triangular load this corresponds to an error in displacement of approximately 5-
10 %. For decreasing
F, the error increases. This means that for a less impulsive load,
load case 3, the difference should increase. This is also the case in Figure 4.3 and
Figure 4.4, which show the response for load case 1 and 3, respectively.
The difference between the SDOF calculations and the FE analysis may arise due to
an incorrect assumption of the deformation shape. Consequently, the transformation
factor used in the SDOF-model will be underestimated and the maximum deflection
overestimated. The midpoint deformation for an ideal plastic beam using the three
approaches can be seen in Figure 4.3. The SDOF and FE-solutions agree better if load
case 3, with lower peak pressure and longer duration is used, see Figure 4.4. However,
there is still a significant divergence that must be investigated.
Figure 4.3. Displacement versus time for different analyses for a reinforced
concrete beam with ideal plastic response subjected to load case 1.
0
10
20
30
40
0 10 20 30 40 50
Displacement,
 us [mm]
Time, t [ms]
Hand Calculations
SDOF
FE analysis

-- 94 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 77
Figure 4.4. Displacement versus time for different analyses for a concrete beam
with ideal plastic response subjected to load case 3.
4.1.3 Elasto-plastic analysis
The elasto-plastic model is the most realistic model and consequently the most
interesting. The deflection in an elasto-plastic SDOF-model can be found by
combining the linear elastic and the ideal plastic material models. The main problem
in the elasto-plastic simplification is which transformation factors should be used.
Three alternatives are studied here:
Elastic response:
788	.	0		mF	
	
(4-2)
Plastic response
667	.	0		mF	
	
(4-3)
Elasto-plastic response






m
m
mF R	R
R	R
when	667	.	0
when	788	.	0
	
(4-4)
The midpoint deformation for the different alternatives is shown in Figure 4.5 for load
case 1 and in Figure 4.6 for load case 3.
0
10
20
30
40
0 10 20 30 40 50
Displacement,
 us [mm]
Time, t [ms]
Hand calculations
SDOF
FE-analysis

-- 95 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
78
Figure 4.5. Displacement versus time for different analyses for a concrete beam
with elasto-plastic response subjected to load case 1.
Figure 4.6. Displacement versus time for different analyses for a concrete beam
with elasto-plastic response subjected to load case 3.
Presumably, the best modelling should be to have an elastic transformation factor in
the elastic region and a plastic transformation factor when the structure has started to
yield in the midpoint. However, this approach underestimates the deformation
significantly. If the transformation factor for linear elastic response is used, the
deformation is slightly better estimated. The best convergence is obtained when the
plastic transformation factor is used during the whole deformation process.
0
5
10
15
20
25
30
35
40
0 10 20 30 40 50
Midpoint displacment,
 us [mm]
Time, t [ms]
FE-analysis
= 0.67
= 0.788
= 0.788 0.667
hand calculation
mF
mF
mF
0
5
10
15
20
25
30
35
40
0 10 20 30 40 50
Midpoint displacment,
 us [mm]
Time, t [ms]
FE-analysis
= 0.67
= 0.788
= 0.788 0.667
hand calculation
mF
mF
mF

-- 96 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 79
This has been seen as a coincidence resulting from combining incorrect assumptions,
Johansson (2012). Knowing that this is not correct it can be used as a crude
simplification. It is better for less impulsive loads, load case 3. Nevertheless, this is
not sufficient accuracy and more precise transformation factors can be found from a
detailed FE-analysis similar to the simpler material models. This is done in
Section 4.4.4.
4.2 Deformation shape
4.2.1 Introduction
The transformation factors come from an assumed displacement shape. Therefore, it is
of interest to investigate the real deformation shape and compare it to the assumed
theoretical deformation shape. This has been seen as a potential reason why the SDOF
solutions have not agreed perfectly with the more detailed FE analyses. The
deformation shapes that vary with the peak load and time duration have been taken
out from FE analyses for every time step and are then compared to get better
understanding of the beam’s behaviour when it is subjected to an impulse load. The
deformation shape for many time steps are shown in Appendix G.
4.2.2 Elastic analysis
The initial response for a linear elastic beam is not the same as that assumed. This is
seen for all load cases although the difference is greater for a more impulsive load,
load case 1 than for load case 3, see Figure 4.7 and Figure 4.8. Notice the different
scales. The early deformation is characterised with a near rigid body motion.
Figure 4.7. The early deformation shape for a linearly elastic beam subjected to
load case 1, Ppeak = 5000 kPa and t
 = 1.12 ms.
0
5
10
0 1 2 3
Deformation,
 u [mm]
Coordinate, x [m]
2.5
2.0
1.5
1.0
0.5

-- 97 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
80
Figure 4.8. The early deformation shape for a linearly elastic beam subjected to
load case 3, Ppeak = 1250 kPa and t
 = 4.48 ms.
In order to investigate if the beam follows a rigid body motion this was compared by
modelling the rigid body motion in the FE analysis for the same load but without
supports, see Figure 4.9. In this is can be observed that some parts of the beam will
eventually start to move faster than a rigid body motion after 0.5 milliseconds. Two
arcs start to form close to the supports and progress towards the centre where they
come together and the assumed elastic deflection shape will emerge at around 2
milliseconds. The centre part has now deformed more than a rigid body motion. The
reason for why some parts move faster than a rigid body motion is unknown but is
believed to depend on the force propagating through the beam in a wave motion. The
duration of this behaviour is approximately the same as for the wave propagating 3
metres, i.e. the length of the beam.
m	95	.	2	002	.	0
2400
10	18	.	5 9
	

				 t
E
t	c	L

(4-5)
0
1
2
3
4
5
0 1 2 3
Deformation,
 u [mm]
Coordinate, x [m]
2.5
2.0
1.5
1.0
0.5

-- 98 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 81
Figure 4.9. Comparison between a rigid body motion and the elastic deformation.
The numbers denote which time, in milliseconds, the deformation
occurs.
A parameter study was performed according to scheme 1 in Section 3.5.2. The
bending stiffness, EI, was kept constant by varying Young’s modulus, E and the
moment of inertia I. These models generate the same response in static analyses,
while the dynamic analyses differ. The wave speed depends on Young’s modulus and
the influence of wave propagation can therefore be investigated by implementing this
scheme. A higher Young’s modulus will make this wave form occur earlier. Problems
were encountered when decreasing Young’s modulus; this is discussed in
Section 3.5.2. This means that the initial deformation shape depends on the wave
speed. When increasing Young’s modulus, the wave speed increases and the wave
propagates faster through the structural element.
4.2.3 Ideal plastic
The initial deformation shapes have been investigated for the ideal plastic material
model. It can be seen that there is a very pronounced rigid body motion in the centre
when subjected to load case 1, see Figure 4.10. The length of this zone decreases and
the deformation will eventually be concentreated in the midpoint. It takes more than
5 ms until a concentrated plastic hinge has formed in the centre and the deformation
shape is somewhat like that assumed for plastic response. The significance of the rigid
body motion is decreased for a less impulsive load, load case 3, as seen in
Figure 4.11.
0.0
2.0
4.0
6.0
Deformation
 us [mm]
Coordinate, x [m]
Deformation
Rigid body
0.3
0.5
0.8
1.0
1.5
2.0

-- 99 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
82
Figure 4.10. Deformation shape versus time for a concrete beam with ideal plastic
response subjected to a load with peak pressure 5000 kPa and a load
duration of 1.12 ms.
Figure 4.11. Deformation shape versus time for a concrete beam with ideal plastic
response subjected to a load with peak pressure 1250 kPa and a load
duration of 4.48 ms.
The ideal plastic model assumes a very high Young’s modulus and since
ADINA (2010) always uses the elastic wave propagation this may induce
incorrectness with the wave propagation. If the displacement shape is investigated at a
very early phase, i.e. 0.05 ms, the wave form that occurs in an elastic structure takes
place.
0
2
4
6
8
0 1 2 3
Deformation,
 u [mm]
Coordinate, x [m]
2.5
2.0
1.5
1.0
0.5
0
2
4
0 1 2 3
Deformation,
 u [mm]
Coordinate, x [m]
2.5
2.0
1.5
1.0
0.5

-- 100 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 83
4.2.4 Elasto-plastic analysis
The elasto-plastic deformation picture is the most realistic one and can be explained
with the two simplified material models in Section 4.2.2 and 4.2.3. The initial
deformation shape is similar to the one obtained in the linear elastic case until the
structure starts to yield. Close to the edges the beam will be displaced more than in the
centre. Yield will not start in the centre as expected in a static case. It will start closer
to the edges and move towards the centre. This is further shown when the moment
and shear distribution is investigated in Chapter 5.
The deformation shape for load case 1 is exactly the same as for the linearly elastic
case for the first 2.5 ms, see Figure 4.7 for load case 1 and Figure 4.8 for load case 3.
The deformation shape is then affected by plasticity somewhere in the beam.
After the initial elastic deformation the response will be more similar to the plastic
response. A concentrated plastic hinge will eventually form in the midpoint of the
beam as seen in Figure 4.12.
Figure 4.12. Later deformation shape for the elasto-plastic material model subjected
to load case 1.
4.3 Energy balance
4.3.1 Introduction
The energy balance in the FE and SDOF analyses was compared. In line with the
definition of work, the system has kinetic energy, Wk, internal energy, Wi, and external
energy, We. The sum of the internal and kinetic energy should be equal to the external
energy to have balance in the system.
k	i	e W	W	W 		
(4-6)
The external energy is simply the force times the displacement. This is done in the
FE-analysis by integrating the force acting on every node times the corresponding
displacement for that node at every time according to equation (4-7). The same
calculation is performed for the SDOF-approach but using the system point
0
5
10
15
20
25
30
0 1 2 3
Deformation,
 u [mm]
Coordinate, x [m]
12.5
10
7.5
5

-- 101 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
84
displacement. The kinetic energy is also found easily by multiplying the square of the
velocity in every node with the mass for that node, see equation (4-8). In the SDOF
method this is done by multiplying the equivalent mass with the square of the system
point velocity. The last energy is the internal energy. This can be calculated as the
integral of the moment times the change in curvature over an element if no
consideration is taken to shear or normal deformations, see equation (4-9). In the
SDOF model it is simply the integral of the resistance times the deformation. The
formulas are summarised in Table 4.1.
Table 4.1. Definition of work for the FE analysis and the SDOF model
respectively.
FE analysis SDOF model
Kinetic energy	dx
x	v	x	m
W
L	x
x
k 



0
2
2
)	(	)	(
2
2
s	m
k
mv
W

	 (4-7)
Internal energy	



L	x
x
i dx	x	u	x	M	W
0
)	(	''	)	(
2
1s	F	i Ru	W	
		 (4-8)
External energy	



L	x
x
e dx	x	u	x	q	W
0
)	(	)	(	s	F	e Fu	W	
		 (4-9)
It is important to realise that the energy in the system is proportional to
m
F
W

 2
	
(4-10)
and that the deformation is proportional to
m
F
u


	
(4-11)
This can give a higher energy level although the deformation is lower. For instance, if
the transformation factors are increased with the same factor, say
,
m
F
m
F
new	m
F





 	





(4-12)
 
m
F
m
F
new	m
F






 2	2	2
		





(4-13)
This will make the energy increase while the deformation of the midpoint remains
unaffected.

-- 102 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 85
4.3.2 Elastic analysis
The theoretical external work for the state II linearly elastic model can be determined
J	9949	64	.	0
2880	788	.	0	2
8400 2
	
	
	 k	e W	W	
(4-14)
The energy in the two systems can be seen in Figure 4.13 and Figure 4.14. The first
observation is that the energy in the FE-analysis is higher than that expected using
hand calculations. The kinetic energy is very similar but the system gets some internal
energy which makes the total work somewhat larger than the theoretical work
obtained using hand calculations. It is shown in Appendix E, in which several load
cases are examined, that for a load more similar to a characteristic impulsive load,
load case 0 in Figure 3.1, the total work is even higher while a load more similar to a
static load has a better agreement with hand calculations. The external energy is in
equilibrium with the internal energy. This is believed to depend on that the
transformation factors are higher for a very impulsive load, while they are more
similar to the theoretical transformation factors for a less impulsive load, load case 3.
The total work in the FE-analysis is reasonably well described by the equivalent
SDOF model as seen in Figure 4.13 and Figure 4.14. The total work is slightly lower
and much smoother in the SDOF model than in the FE-analysis. This is again since
the SDOF model only considers the first mode of vibration. The first peaks of the
kinetic energy in the two systems are almost identical. The energy in the SDOF model
is the same as the theoretical energy.
Figure 4.13. The energy balance in the FE analysis for load case 1.
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
Wk
Wtot
We
We hand

-- 103 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
86
Figure 4.14. Energy balance in the SDOF model for load case 1.
4.3.3 Ideal plastic analysis
Similarly to the elastic case, the work has been investigated for the plastic case. The
theoretical external work can be estimated to
J	9183	5	.	0
2880	667	.	0	2
8400
2
2	2

	
		 F
mF
k
k	e m
I
W	W	


(4-15)
As for the elastic case, the total work is slightly underestimated with hand calculations
but acceptable agreement is obtained. The kinetic energy, Wk, is much lower than
what the theoretical solution predicts, which means that the structure absorbs more
energy as internal energy in the beginning; i.e. the load intensity is lower than that
corresponding to a characteristic load. The structure decreases its velocity and
eventually the external energy is balanced with internal energy.
Figure 4.15. Energy balance for the FE-analysis with ideal plastic response.
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We
0
2000
4000
6000
8000
10000
12000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
Wk
Wtot
We
Wy hand

-- 104 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 87
The energy in the SDOF model is lower than in the FE analysis. This is because the
actual transformation factors are higher than what the theoretical value suggests,
compare with reasoning in Section 4.3.2. As a result all the energies will be lower.
The SDOF energy is also lower than the theoretical energy. This is probably a
consequence of that the internal energy increases very fast and that it cannot be said
that all energy is transformed to the structure as kinetic energy.
Figure 4.16. The energy balance in the SDOF-model.
Although the energy is lower in the SDOF model, the displacement is larger as seen in
Section 4.1.2. This is due to that the displacement depends on the factor
R	m
I
u
mF
k
pl 	

	2
2
(4-16)
where the theoretical
mF is initially underestimated, which makes the deformation
become larger. The work depends on
F
mF
k
e m
I
W	

 

2
(4-17)
and this transformation factor ratio is underestimated with the theoretical values,
compare reasoning in equations (4-12) and (4-13).
4.3.4 Elasto-plastic analysis
In the elasto-plastic case two hand calculations were made, using either the elastic
transformation factors or the plastic transformation factors. As seen in both the linear
elastic and ideal plastic case, the total energy is higher in the FE model than in the
hand calculations, for load case 1 shown in Figure 4.17. The same reasoning is made
here. The theoretical transformation factors are underestimated and will decrease the
external energy.
At around 1 ms, when the load has just disappeared, a sudden change in energy
happens. This can also be seen in the elastic case and is believed to depend on elastic
oscillations. It can also be seen that the internal energy initially is larger than in the
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We

-- 105 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
88
SDOF analyses, see Figure 4.18, Figure 4.19 and Figure 4.20, and that the external
energy is not the same as the kinetic energy.
Figure 4.17. The energy balance for an elasto-plastic beam subjected to load case 1
analysed with FE.
The energy balance is calculated for the SDOF-model with different transformation
factors, see Figure 4.18, Figure 4.19 and Figure 4.20. Common for all cases is that the
energies are lower than the energy in the FE-model. It is lowest for the plastic
transformation factor. This is due to that the transformation factors for this assumption
are most incorrect.
The methods that use the elastic transformation factor have the same external and
internal work until it changes to the plastic transformation factor in the latter method.
There is a sudden drop in the kinetic energy at this time. This results in an unbalanced
energy while the other two methods keep the balance between total work and external
work.
Figure 4.18. Energy balance for an SDOF solution with transformation factors
elastic theoretical transformation factors.
0
2000
4000
6000
8000
10000
12000
0 10 20 30 40 50
Energy,
 W [kJ]
Time, t [ms]
Wi
We
Wk
Wtot
Wy hand el
Wy hand pl
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We

-- 106 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 89
Figure 4.19. Energy balance for an SDOF solution with ideal plastic transformation
factors.
Figure 4.20. Energy balance for an SDOF solution using theoretical elastic
transformation factors until the maximum resistance is reached and then
by using theoretical plastic transformation factors.
4.4 Transformation factors
4.4.1 Calculation of factors
The disagreement between the displacement of the midpoint in the FE-analysis and
the SDOF-model is believed to be affected by assuming the wrong deformation shape
at early phases of the deformation. As shown in Section 4.2, a beam subjected to an
impulse load will initially not have the assumed deformation shape.
The transformation factors for the actual deflection shape for every time step can be
found from the FE-analysis. The transformation factors are found with the formulas
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We

-- 107 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
90
   
 
 
 
 
 	t	u
t	u
n	t	u
L	t	u
L
dx
t	u
t	x	u
L
t
s
n
i
i
s
i
n
i
i	L
s
m
2
2
2
0
2
2 1	1	,	1 	
 			
	
(4-18)
   
 
 
 
 
 	t	u
t	u
n	t	u
L	t	u
L
dx
t	u
t	x	u
L
t
s
n
i
i
s
i
n
i
i	L
s
F
	
 			 1	1	,	1
0

(4-19)
where n is the number of free nodes, i.e. all nodes except the support nodes. Li is the
length of an element and is constant for every element which means that it can be
expressed as the total length divided with number of elements. ui is the displacement
in the i:th node and us is the deformation of the system point, in this case the centre.
These transformation factors are only of interest when the energy is considered as
shown in Section 2.4.2.4.
The load-mass transformation factor can then be found as
   
 	t
t
t
F
m
mF


 	
(4-20)
The time dependent transformation factors are also shown in Appendix F. The
individual transformation factors for the load and mass respectively are also shown
here.
4.4.2 Elastic analysis
The midpoint deflection for assuming linear elastic response can be very well
approximated with an equivalent SDOF-model; the solutions agree very well as seen
in Section 4.1.1. As a result, the currently used transformation factor should be a good
approximation of the elastic behaviour. The theoretical value of the load-mass
transformation factor for elastic deformation is
788	.	0		mF	
	
(4-21)
If the transformation factor is calculated from the resulting deformation at every time
step, seen in Figure 4.21, the theoretical value of the transformation factor agrees very
well after a few milliseconds for all load cases. In addition, the agreement is improved
if the load has a lower peak pressure and longer duration, i.e. load case 3.

-- 108 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 91
(a) (b) (c)
Time, t [ms] Time, t [ms] Time, t [ms]

mF
 (t)

mF
 (t)

mF
 (t)
mF theory
mF
0 10 20 30 0 10 20 30 0 10 20 30
1.0
0.8
0.6
0.4
0.2
0
1.0
0.8
0.6
0.4
0.2
0
1.0
0.8
0.6
0.4
0.2
0
1.0
0.8
0.6
0.4
0.2
0
mF theory
mF
mF theory
mF
Figure 4.21. Transformation factor for elastic material model obtained from FE-
analysis as a function of time for a) Load case 1, b) Load case 2 and c)
Load case 3.
As shown in the Figure 4.21, there is a peak in the first few milliseconds. This occurs
for all load cases and is of approximately the same magnitude and duration. The
displacement shape at this time span is different to the shape assumed for an elastic
deflection and is more similar to a rigid body motion, see Figure 4.9.
However, this first peak in the transformation factor does not seem to have a
significant influence on the midpoint deformation since the agreement is very good
for the elastic case even when using a constant value of
mF. It can also be noted that
the transformation factor goes quickly towards the theoretical value.
4.4.3 Ideal plastic analysis
The midpoint deformations in an SDOF model and an FE-analysis diverge
significantly for the ideal plastic case. If the deformation shape is obtained from
ADINA, a transformation factor can be calculated for every time step. In Figure 4.22,
the transformation factor
mF is shown for different load cases.
(a) 	(b) 	(c)
Time, t [ms] 	Time, t [ms] 	Time, t [ms]

mF
 (t)
0 10 20 30
1.0
0.8
0.6
0.4
0.2
0
mF theory
mF
0 10 20 30
1.0
0.8
0.6
0.4
0.2
0
0 10 20 30
1.0
0.8
0.6
0.4
0.2
0
mF theory
mF
mF theory
mF

mF
 (t)

mF
 (t)
Figure 4.22. The transformation factor κmF versus time compared with the plastic
theoretical values for a concrete beam with ideal plastic response
subjected to a) load case 1, b) load case 2 and c) load case 3.
It appears like the first few milliseconds have a higher value of the transformation
factor for all load cases. The transformation factor is initially higher for a more load
case 1 but is not as high as for the linear elastic case, in Section 4.4.2. The duration of
the higher value of the transformation factor is longer and the actual value approaches

-- 109 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
92
the theoretical but does not fully reach it in the first 30 milliseconds. Again, a more
intense load, load case 1, has a higher value and diverge more from the ideal plastic
theoretical solution, which is 0.667. The final value is 0.731 and the decrease has
ceased for load case 1. For the longer load duration, load case 3, a value of 0.707 is
the final value. Therefore, it can be stated that the deformation shape is dependent on
how intense the load is. If the load would be completely static, the theoretical
transformation factor would be in perfect agreement with the obtained result.
Augustsson and Härenstam (2010) investigated this problem briefly, and found that a
modified value of the transformation factor κmF should be taken as 0.771 for a 2.7
metre long and 0.35 metre high beam subjected to load case 1. Their beam had a
lower internal resistance value and it is of interest to investigate if the transformation
factor is affected by the maximum capacity.
If the transformation factor was changed so that it fitted the ideal plastic deformation
curve, the best agreement was found when
mF = 0.771, i.e. the same as Augustsson
and Härenstam (2010). Hence, this implies that the ultimate resistance has no
significant influence on the transformation factors. The transformation factor
decreases with the load magnitude. For load case 2 it is 0.752 and load case 3 it is
0.724. Therefore, the transformation factor seems to be dependent on the load and not
the ultimate resistance. The reason for why these two values agree is further studied in
Section 4.5 where a time dependent transformation factor is implemented.
Figure 4.23. Midpoint deformation for an ideal plastic beam subjected to load case 1,
assuming a constant transformation factor of 0.771.
4.4.4 Elasto-plastic analysis
The different transformation factors obtained from the FE-analyses for the elasto-
plastic material behaviour are compared both with the plastic and elastic theoretical
values. This indicates that using the theoretical plastic value will generate a result on
the safe side and give a larger deflection. As expected, though, the real values of the
transformation factors are somewhere in between the theoretical values. For very high
peak pressures and short load duration
mF will converge towards a mean value
between these theoretical values, see Figure 4.24a. In contrast, for a beam subjected to
0
10
20
30
40
0 	10 	20 	30 	40 	50
Midpoint displacement,
 us [mm]
Time, t [ms]
FE-analysis
SDOF

-- 110 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 93
a lower load with longer duration,
mF converges towards a lower value which
corresponds more to the plastic theoretical value, see Figure 4.24b and Figure 4.24c.
(a) 	(b) 	(c)
Time, t [ms] 	Time, t [ms] 	Time, t [ms]

mF
 (t)
0 10 20 30
1.0
0.8
0.6
0.4
0.2
0
0 10 20 30
1.0
0.8
0.6
0.4
0.2
0
0 10 20 30
1.0
0.8
0.6
0.4
0.2
0
mF theory el
mF
mF theory pl

mF
 (t)

mF
 (t)
mF theory el
mF
mF theory pl
mF theory el
mF
mF theory pl
Figure 4.24. The transformation factor κmF versus time compared with the elastic and
plastic theoretical values for a concrete beam with elasto-plastic
response subjected to a) load case 1, b) load case 2 and c) load case 3.
The early peak can be recognised as the near rigid body motion that takes place soon
after load arrival, also seen in the linear elastic case. Subsequently, the beam starts to
plasticise and the value of the transformation factor approaches a value between the
theoretical plastic and elastic values respectively.
4.5 Implementation of varying transformation factors into
the equivalent SDOF model
4.5.1 Introduction
The time dependent transformation factors have been implemented in the SDOF
model in order to see if they would generate a better agreement with the FE analysis.
The time dependent transformation factors are taken from the transformation factor
figures for every material model and load case in Section 4.4. The equation of motion
can be written as
)	(	)	( t	F	ku	u	m	t	mF 			
	
(4-22)
4.5.2 Preservation of energy
Initial investigations of this subject showed that the deformations became smaller
when using the time dependent transformation factors. This is on the unsafe side. This
is believed to depend on two reasons. Firstly, the mass is increased when the impulse
load is working on the structure. This means that the acceleration will be lower
according to Newton’s second law, see equation (2-4). Secondly, the kinetic energy is
changed every time the mass is changed since it is proportional to the mass.
It is clear when investigating the energy balance that something happens when time
dependent transformation factors are used, see Figure 4.25. The energy level is
initially higher when the transformation factors are high but decreases suddenly when
they decrease as seen in Section 4.4. This creates unbalanced energy levels and must

-- 111 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
94
be compensated with energy preservation. This is unrealistic since energy cannot
disappear in the structure and gives a completely wrong deformation.
Figure 4.25. Energy balance in an SDOF model with varying transformation factors.
A sudden drop occurs when the transformation factors decreases.
The sudden drop in energy can be compensated by preserving the kinetic energy, see
Figure 4.26. This is done by calculating the deformation and corresponding velocity
with the transformation factor for the previous time step and correct these by
increasing the velocity with the square root of the change in transformation factor of
the load. This is further explained in Appendix D. The energy balance will be shown
for all material models in Sections 4.5.3, 4.5.4 and 4.5.5.
Figure 4.26. Energy balance when preserving the kinetic energy according to
Appendix D.
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We

-- 112 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 95
4.5.3 Elastic analysis
The theoretical linear elastic analyses have a good agreement but for
comprehensiveness and understanding of the more realistic material models it is
desirable to vary the transformation factors also in the elastic case.
If the varying transformation factors are used without preserving energy, the
deformation of the midpoint is lower than in the simplified method and the FE-
analysis as shown in Figure 4.27. If the kinetic energy is preserved, it can be seen that
a very good agreement between the FE analysis and the SDOF model is obtained.
Figure 4.27. Displacement in midpoint when varying the transformation factors.
Since the transformation factors are changed to a higher value initially, the external
energy becomes higher. The energy in the theoretical SDOF model is lower than the
FE analysis and the change of transformation factors should make the energy levels
agree better. However, the energy is slightly higher in the SDOF system than in the
FE analysis, see Figure 4.29 and Figure 4.30. As a result, a small difference in the
displacement can occur and, as seen in Figure 4.27, it is somewhat higher than in the
FE-analysis. This could be a consequence of not capturing every displacement shape
perfectly and the corresponding transformation factor.
The energy preservation is shown in Figure 4.28 and Figure 4.29. As seen the
maximum level is not affected, which supports the hypothesis that it is the estimation
of transformation factors that causes the slight overestimation of the maximum energy
in the system.
-25
-15
-5
5
15
25
0 10 20 30 40 50
Displacement,
 us [mm]
Time, t [ms]
FE-analysis
Varying
Varying
with Energy loss
mF
mF

-- 113 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
96
Figure 4.28. Time dependent transformation factors cause a sudden drop in energy.
Figure 4.29. Preserved energy in the SDOF model with time dependent
transformation factors.
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We

-- 114 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 97
Figure 4.30. The energy balance in the FE-analysis. The maximum level is slightly
lower than what is obtained with SDOF model.
4.5.4 Ideal plastic analysis
Similar to the elastic case transformation factors are found from the FE analysis and
used in the SDOF approach. As a result, the displacement decreases since kinetic
energy “disappears” when the transformation decreases, see Figure 4.31. The energy
decrease is not as sudden as for the linear elastic case since the transformation factors
decrease gradually. If the energy is preserved, Figure 4.32, as for the elastic case, a
very good agreement between the displacement in the SDOF model and the
FE analysis is found, see Figure 4.33. The total energy is also here overestimated,
compare reasoning in Section 4.5.3. For comprehensiveness, more load cases can be
seen in Appendix E.
Figure 4.31. Energy balance when time dependent transformation factors are used
without preserving energy levels.
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
Wk
Wtot
We
We hand
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We

-- 115 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
98
Figure 4.32. Preserved energy when using time dependent transformation factors.
Figure 4.33. Displacement when the transformation factors are varied.
4.5.5 Elasto-plastic analysis
Since very good agreement has been found when varying the transformation factors
for the simplified material models, this is also done in the elasto-plastic case.
Actually, this has already been done when the transformation factors were varied from
the theoretical elastic to the theoretical plastic ones. This gave lower midpoint
deformation and this is also the case when using the transformation factors from the
FE analysis, see Figure 4.34. When using time dependent transformation factors from
the FE analysis and preserving the energy, a very good agreement for the midpoint
displacement is obtained, see Figure 4.34.
If the energy balance is investigated, there is a clear drop where the transformation
factors are varied, see Figure 4.35. This is preserved and the energy is in balance see
Figure 4.36.
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We
0
10
20
30
0 10 20 30 40 50
Displacement,
 us [mm]
Time, t [ms]
FE
Varying
Varying with Energy loss	
mF
mF

-- 116 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 99
Figure 4.34. Midpoint displacement vs. time when varying the transformation factors.
Figure 4.35. Energy balance before preserving energy.
Figure 4.36. Energy balance when preserving energy.
0
10
20
30
40
0 10 20 30 40 50
Displacement,
 us [mm]
Time, t [ms]
FE
Varying
Varying
with Energy loss
mF
mF
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We
0
5000
10000
15000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We

-- 117 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
100
The same procedure is carried out for the case when the transformation factor changes
from the theoretical elastic value to ideal plastic when the internal resistance has
reached its maximum value in the SDOF model. This also gives very good agreement,
which is better than using the transformation factors from the FE analysis. This shows
that this simple modification is sufficient to increase the accuracy in the elasto-plastic
analysis.
Figure 4.37. Midpoint displacement when preserving energy and using time
dependent transformation factors with theoretical elastic values when
the SDOF model has elastic response and plastic theoretical values
when it has plastic response.
4.6 Discussion of results
The deformation when using theoretical transformation is not well described for a
beam with ideal plastic or elasto-plastic response. This is because the deformation
shape differs from that assumed. For the elasto-plastic case, it was found that it is
possible to use the plastic transformation factors with good results. However, the
reason for this is unknown and is believed to be due to a combination of two errors.
The resulting deformation shape in FE-analysis carried out has been investigated and
it is shown that implementation of time dependent transformation factors makes the
deformation from an SDOF model agree better with finite element solutions.
However, this requires that an energy preservation scheme is used.
The time dependent transformation factors have been taken from an FE analysis. It
would not be practical to calculate transformation factors from an FE analysis in order
to implement in a simplified method. However, if a relationship for time dependent
transformation factors can be found in the future, this method can be used directly in a
simplified SDOF method. This relationship should take load, material parameters and
corresponding deformation shape into account. It is further interesting to see how
accurate these transformation factors must be in order to describe the response
adequately.
The investigation in this Chapter shows that even a simplified relationship for the
transformation factors can be used for the elasto-plastic model. This uses the elastic
theoretical and the plastic theoretical transformation factors when the response is
elastic or plastic respectively. The ideal plastic case has a longer duration of error
0
10
20
30
0 10 20 30 40 50
Displacement,
 us [mm]
Time, t [ms]
FE-analysis
SDOF
Hand

-- 118 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 101
when using theoretical transformation factors and does never reach the theoretical
value. Therefore, the influence of the transformation factors become larger and could
be described with a linear decreasing function. The elastic transformation factors can
be seen as a good approximation already.
It is interesting to discuss how the wave actually propagates through the beam. The
proposed method makes the solution agree well with the FE-analyses. The question is
whether the FE-analyses describe reality well enough. It is shown in Section 3.5.4 that
the wave propagation in a model made with beam elements and solid 2D elements
differs. This is especially the case with shear waves that is not described well at all
with beam elements. A critical time step, where the wave only propagates one element
per time step, must be used in order to capture the wave properly. There is however
no recommendation from ADINA which critical time step that should be used for a
shear wave. The developed method for implementing transformation factors can
however be used for other displacement shapes. Consequently, the above method can
be used, although the deformation shapes are not correctly described.
The above discussion only concerns the deformations. It is also indispensable to
describe the section forces and the support reaction. They are influenced by the
deformation shape and consequently the transformation factors. The influence of time
dependent transformation factors on section forces and support reaction will be
investigated and discussed in Chapters 5 and 6.

-- 119 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
102
5 Moment and shear force
5.1 Introduction
Ultimately, the maximum shear force and moment effect are of interest in the
structure. Therefore, a study on how the moment and shear force are distributed in the
beam has been carried out. As will be seen in this chapter, they can differ markedly to
the expected distributions for static loadings.
When the structure has a plastic or elasto-plastic response, the moment is limited to
the maximum moment and the structure dissipates energy by plastic deformation.
Therefore, in these cases, the failure criterion is displacement rather than moment
resistance. Nevertheless, the moment distributions are still of interest since they are
used for reinforcement arrangement. However, if the structure is assumed to have an
elastic response it is necessary to check the moment capacity.
The shear force must be checked for all material models. The maximum shear force is
not necessarily found at the supports, and the distribution may differ significantly to
that predicted in an equivalent static case.
Johansson and Laine (2009) suggest that a static equivalent load can be used in order
to design the structure for moment and shear forces. This is applied to the structure as
a uniformly distributed load and section forces can be found. This method is here used
in order to compare with results from FE analyses.
The shear and moment distribution is shown together with the deformation shape for
many time steps within the first oscillations in appendix G.
5.2 Elastic analysis
The shear and moment distributions have been found for the linear elastic beam. This
is done by finding the nodal forces and moments for many time steps. The
distributions are initially not at all similar to that obtained in a static case.
The moment in midpoint is shown in Figure 5.1. The moment in the midpoint is very
small the first millisecond and then it increases to the maximum value around the
same time that the maximum deformation is the largest. It can be seen that the
moment is approximately the same during the second oscillation. This is not realistic
since the beam has some damping and the value at the second oscillation will be
smaller. Also the negative moment is as large as the positive

-- 120 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 103
Figure 5.1. Midpoint moment for a linear elastic beam.
In Section 4.2.2, it is shown that the initial deformation shape is different to what
would be expected in a static load case. The largest deformations start closer to the
supports and it is not until after about 2 ms that the largest displacement can be found
in midpoint. The moment is directly influenced by curvature and will consequently
develop from supports and progress to the centre. This is shown in Figure 5.2.
Initially, the moment is slightly negative in the midpoint until. After about 1.5 ms the
moment starts to decrease in the sections closest to the supports and the moment in the
centre increases. This continues after about 2.5 ms and a somewhat expected moment
distribution is obtained.
Figure 5.2. The moment distribution early after load arrival. The numbers denotes
the time for the adjacent or, in the centre, the above line. The moment
develops from the edges towards the centre.
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
0 10 20 30 40 50
Midpoint moment,
 M [kNm]
Time, t [ms]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
2.0
1.5
1.0
0.3
2.5

-- 121 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
104
Between 2.5 ms and the time for maximum displacement, as seen in Figure 4.1 at
about 8 ms, the moment distribution is relatively similar to the expected, see
Figure 5.3. At maximum deformation, the same peculiar distribution as the initial
response occurs, where the centre part oscillates between the adjacent parts.
Figure 5.3. Moment distribution at the time t=8 ms.
The support reaction is shown in Figure 5.4. Initially, a peak occurs within the first
milliseconds but the maximum value is not obtained until the maximum deformation
is reached. It can also be seen that the reaction force is the same in both direction
since it is an elastic oscillation. The support reaction is further investigated in
Chapter 6.
Figure 5.4. Support reaction for a linear elastic beam.
The shear force distribution is the derivative of the moment and will consequently
also have a peculiar shape. High shear stresses occur soon after load arrival close to
the supports. This is where the moment is changing quickly due to large rotations. The
shear force is always zero in the midpoint. The area close to the midpoint has no shear
force shortly after load arrival because a near rigid body movement takes place.
However, the shear force builds up and becomes very high near the midpoint after
some time. The early shear force distribution is shown in Figure 5.5.
-200
0
200
400
600
800
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-2000
-1500
-1000
-500
0
500
1000
1500
2000
0 10 20 30 40 50
Support reaction,
 Vs [kN]
Time, t [ms]

-- 122 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 105
Figure 5.5. Shear force distribution soon after load arrival. High shear stresses
occur close to the supports.
For some time increments the reaction at the support is lower than the adjacent value
in the centre of an element. This is believed to depend on accelerations of the nodes
closest to the support. The support node does not accelerate at all. This is also
discussed in 3.5.6.
5.2.1 Comparison with equivalent static load
The equivalent static load is used in order to compare the magnitude and distribution
of moment and shear force in Figure 5.6 and Figure 5.7. It is calculated for state II in
section 3.4.2 and is
kN	1618	, 	II	el	Q	
(5-1)
The corresponding uniformly distributed load is then
kN	809
3
1618	,
, 		 L
q
q II	el
II	el	
(5-2)
The moment and shear force varies over the length as
 	2	,
2
)	( x	Lx
q
x	M II	el 		
(5-3)
 		x	L
q
x	V II	el 2
2
)	( , 		
(5-4)
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
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
2.5
1.5
1.0 0.8 0.5
0.3
2.0

-- 123 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
106
The moment envelop has been found for a linearly elastic beam and is shown in
Figure 5.6. The envelop covers two oscillations, i.e. 50 ms. The envelop was the same
if only the first oscillation was considered. The moment envelop is shown together
with the corresponding moment distribution from the equivalent static load. The
equivalent static load underestimates the moment obtained from the FE-analysis
especially in the midpoint of the beam.
Figure 5.6. Moment envelop compared to the moment from the static equivalent
load. The static equivalent load underestimates the moment distribution
from a more sophisticated Fe-analysis.
The shear envelop is shown in Figure 5.7 together with the corresponding shear force
from the equivalent static load. The shear force is also considerably underestimated if
the equivalent static load is used. Moreover, the distributions are very different. The
shear force envelop from the FE-analysis looks like the distribution from a point load;
i.e. constant level until the midpoint where it changes direction.
The shear force and moment are very similar in both directions since the oscillation is
elastic as can be seen in for the moment in midpoint Figure 5.1 and the reaction force
at the supports Figure 5.4.
0
200
400
600
800
1000
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelop
Eq. Static load

-- 124 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 107
Figure 5.7. Shear force envelop from the FE-analysis compared to the equivalent
static load. The shear force underestimated by using the equivalent
static load.
If the peak pressure is decreased to 1250 kPa and the duration is increased to 4.48 ms
i.e. load case 3, the solutions agree much better as seen in Figure 5.8. Nevertheless,
the equivalent static load still provides values somewhat on the unsafe side.
Figure 5.8. The moment and shear envelops for a less impulsive load with peak
pressure 1250 kPa and duration 4.48 ms.
For comprehensiveness a table has been compiled where the relative error,	
,
compared to the ratio between peak pressure and equivalent static load is shown. The
envelops are shown in Appendix H and the results are summarised in Figure 5.9,
which shows the relative error compared to the ratio between peak pressure and
equivalent static load for midpoint moment and support reaction. The relative error is
defined as
sta
sta	dyn
sta
sta	dyn
M
M	M
V
V	V 



	
	 or	
(5-5)
The shear force is taken as the support reaction and the moment is taken as the
midpoint moment.
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
Shear envelop
Eq. Static load
0
200
400
600
800
1000
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelop
Eq. Static load
-1000
-500
0
500
1000
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
Shear envelop
Eq. Static load

-- 125 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
108
The result shows that a large error is found for very high ratios of Pc/qeq and even for
relatively small ratios it gives a significant error. The error is larger for shear forces,
which can be underestimated with up to 150 %. This is very dangerous to use in
design. The absence of damping in the model may influence the result considerably.
This is further investigated in Section 5.2.2.
Figure 5.9. Relative error vs. ratio between peak pressure and equivalent static load
for a) moment and b) shear force, where load case 1 is marked with
circles and load case 3 with squares.
The equivalent static load takes no consideration to contribution from the load on the
support reaction. This is done by for example FortV (2011). The support reaction is
then overestimated according to Figure 5.10. It seems like the best agreement is found
for a ratio between peak pressure and equivalent static load of around 5.
Figure 5.10. The relative error for different ratios using FortV’s approach for the
support reaction, where load case 1 is marked with circles and load
case 3 with squares.
5.2.2 Influence of damping
If Rayleigh damping with 5% as described in Section 4.4, is assumed for the normal
beam subjected to a high intense load the error is decreased considerably but a
relatively large divergence still exists, Figure 5.11. Load case 1 is used and the Pc/qeq
value is 5.4. This is reasonably a better explanation of a real elastic concrete structure.
The shear force and moment is still very high close to the centre of the beam. This
must be considered in design of an elastic structure. The errors, though, are now
lower:
0
10
20
30
0 10 20 30 40 50 60
Pc/qeq
Relative error,
 [%]
0
10
20
30
0 50 100 150
Pc/qeq
Relative error,
 [%]
0
10
20
30
-60 -50 -40 -30 -20 -10 0
Pc/qeq
Relative error,
 [%]

-- 126 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 109
support	at	force	shear	for	%	18
808
808	951
e
moment	for	%	11
607
607	678





	e
(5-6)
Figure 5.11. Envelops when 5% Rayleigh damping has been used.
The damping does not affect the maximum deformation in the midpoint considerably,
but the peaks in the support reaction and moment are reduced rather much, see Figure
5.12. The early peak in the support reaction is not reduced, hence, it can be considered
to be correct in the undamped analysis.
Figure 5.12. The undamped and damped support reaction and displacement and
moment in midpoint.
The influence of damping and comparisons for different cross sections with and
without damping are shown in Appendix H.
The relative error is decreased considerably if damping is introduced as can be seen in
Figure 5.13. The equivalent static load actually overestimates the moment and support
reaction for very low ratios Pc/qeq.
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
0
100
200
300
400
500
600
700
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
-20
-10
0
10
20
0 	10 	20 	30 	40 	50
Displacement,
 us [mm]
Time, t [ms]
-1500
-1000
-500
0
500
1000
1500
0 	10 	20 	30 	40 	50
Support reaction,
 Vs [kN]
Time, t [ms]
-1500
-1000
-500
0
500
1000
1500
0 	10 	20 	30 	40 	50
Support reaction,
 Vs [kN]
Time, t [ms]
-1000
-500
0
500
1000
0 	10 	20 	30 	40 	50
Midpoint moment,
 M [kNm]
Time, t [ms]

-- 127 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
110
Figure 5.13. The relative error for damped elastic case. Load case 1 is marked with
circles and load case 3 with squares.
Fortifikationsverket’s approach will overestimate the support reaction even more
since the support reaction is even lower for a damped case.
5.3 Ideal plastic analysis
The moment and shear distribution in the ideal plastic case has been studied. The ideal
plastic beam has a maximum moment capacity of 227 kNm and this value is reached
soon after load arrival in most sections of the beam since almost no elastic
deformations take place, see Figure 5.14. The moment will then decrease from the
edges until a concentrated plastic hinge is formed in the midpoint. This can be shown
by the plastic strain in the beam Figure 5.15. The plastic strain starts closer to the
edges and increases and becomes concentrated in the centre.
Figure 5.14. The moment distribution for different times in the ideal plastic case. The
adjacent number denotes the time when the specific distribution occurs.
0
10
20
30
-10 0 10 20 30 40
Pc/qeq
Relative error,
 [%]
0
10
20
30
-20 -10 0 10 20 30 40
Pc/qeq
Relative error,
 [%]
0
200
400
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
2.5 1.5 1.0 0.3	10.0

-- 128 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 111
Figure 5.15. Plastic strain in the ideal plastic beam.
Once the maximum deformation is reached, the moment will alternate between
positive and negative yield moment, see Figure 5.16. This is due to elastic oscillations
with a very high stiffness, which should not happen in an ideal plastic material.
Actually, the deformation oscillates with a high frequency and low amplitude when
the maximum deformation is reached in the ideal plastic case. It is easier to
understand in an elasto-plastic case where it is clear that the midpoint oscillates. The
worst case will occur soon after load arrival and therefore the beam should be
designed for the first response in both directions.
Figure 5.16. Moment in midpoint in an ideal plastic beam over time.
The shear force has the same behaviour to that in the linear elastic case, i.e. not
similar to the static distribution. It starts as high values close to the supports which
later decreases and stabilises on a level until the maximum displacement is reached.
0.000
0.005
0.010
0.015
0.020
0 1 2 3
Plastic strain,

pl [-]
Coordinate, x [m]
10
1.5
	1.0
0.3
2.5
-300
-200
-100
0
100
200
300
0 10 20 30 40 50
Midpoint moment,
 M [kNm]
Time, t [ms]

-- 129 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
112
The shear force is zero close to the midpoint in the beginning. Thereafter, it increases
and has eventually a linear distribution between the two plateaus.
Figure 5.17. Shear distribution for different times. The shear force is high close to the
supports in the early phase of the response.
5.3.1 Comparison with equivalent static load
The equivalent static load in the plastic load case is calculated in equation (3-33) and
is
kN	606		pl	Q	
(5-7)
The corresponding uniformly distributed line load can be written as
kN	202
3
606 		 L
Q
q pl
pl	
(5-8)
The section forces can then be obtained by
 	2
2
)	( x	Lx
q
x	M pl 		
(5-9)
 		x	L
q
x	V pl 2
2
)	( 		
(5-10)
The maximum moment in midpoint is well described by the equivalent static load.
However, it does not take into account that almost the whole beam will have this
moment at some time. The large moment close to the beam edges only occur in the
initial phase as shown in Section 5.3. This will provide an adequate reinforcement
amount but an unwanted reinforcement arrangement would be obtained if curtailment
and anchorage lengths would be designed by considering the moment distribution
from the equivalent static load.
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
2.5
1.5
1.0
0.3
10.0

-- 130 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 113
Figure 5.18. The moment envelop compared to the eq. static load. The equivalent
static load does not describe the high moments close to the supports.
Similarly, the shear force is relatively well described by the equivalent static load.
However, the shear force close to the support is considerably higher in the beginning
close to the support. This is a direct consequence of the sudden moment changes that
occur over a short beam length in the initial phase.
Figure 5.19. Shear force envelop compared to the shear force from the equivalent
static load. The shear force close to the supports is underestimated when
it is based on the equivalent static load.
The same relation can be found for a less intense load, load case 3. The divergence is
smaller as can be seen in Figure 5.20 but is still not accurate.
0
200
400
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelop
Eq. Static load
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
Shear envelop
Eq. Static load

-- 131 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
114
Figure 5.20. The envelops compared to the internal forces generated from the
equivalent static load for a less intense load, load case 3.
5.4 Elasto-plastic analysis
The shear and moment distribution in linear elastic and ideal plastic models may not
be possible in reality. They are just simplifications in order to understand the more
realistic elasto-plastic model. Ultimately, it is important to find the reaction forces in
an elasto-plastic model. Since the moment can increase to infinity in an elastic model
and peculiar moment distributions can be obtained from several modes, it cannot be
seen as a good representation of a concrete structure. In a similar way the ideal plastic
model does not deflect if it has not begun to yield. Therefore, the moment, and
consequently the shear force, will be overestimated in the initial phase close to the
supports since the gradient of the moment is larger than expected.
Initially, the behaviour for is identical to the linear elastic case, see Figure 5.21 and
Figure 5.22. The moment builds up from the edges and the moment in the midpoint is
not increasing until after around 2 ms. Compared to the linear elastic case there is no
difference until 2.5 ms when the moment has reached the maximum moment capacity.
The shear force also follows the linear elastic model until yielding occurs in the
structure. The shear force peak close to the centre in the linear elastic model is evened
out because the moment does not increase beyond the yield moment. Therefore, the
increase in moment is less drastic and the shear is lower.
Figure 5.21. Moment distribution in the elasto-plastic model.
0
200
400
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelop
Eq. Static load
-1000
-500
0
500
1000
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
Shear envelop
Eq. Static load
-200
0
200
400
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
2.0
1.5
1.0
0.3
2.5

-- 132 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 115
Figure 5.22. Shear force distribution in the elasto-plastic model.
Yielding occurs away from centre after 1.5 ms as can be realised by the plastic strain
in the beam, shown in Figure 5.23. There is no plastic strain before this time. The
plastic strain becomes more concentrated in the centre and forms a plastic hinge.
Figure 5.23. Plastic strain in the beam for different times.
The maximum shear in the linear elastic model does not occur initially. It occurs at
the maximum deformation; this will never occur in the elasto-plastic model since the
structure starts to yield, which affects the change in moment considerably and
consequently the shear force. Therefore, the shear force will be smaller than obtained
using the linear elastic model.
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
2.5
1.5
0.5
0.3
2.0
1.0
0
0.005
0.01
0.015
0.02
0 1 2 3
Plastic strain,

pl [-]
Coordinate, x [m]
10
1.5
5.0
2.5

-- 133 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
116
5.4.1 Comparison with the equivalent static load
In the maximum moment and shear force are compared to the distribution when using
the equivalent static load. The moment is limited to 227 kNm as for the ideal plastic
case. The shear force can initially be governed by the elastic behaviour and is
therefore compared to the shear force resulting from both the elastic and plastic
equivalent static load, see Sections 5.2.1 and 5.3.1 for values.
The maximum moment along the beam is shown Figure 5.24. It is similar to the
plastic distribution but will not be as high close to the supports. As a result, the
moment can be better explained by the equivalent static load although it does not take
into account that a large part of the beam reaches the yield stress at some point. As
mentioned for the ideal plastic case, care has to be taken when anchorage and
curtailment of reinforcement are designed.
It can also be seen that the moment is higher than the maximum moment in some
parts of the beam. This is impossible and depends on that the moment has been
extracted from nodal moments. This is discussed in Section 3.5.6.2.
Figure 5.24. Moment envelop compared to the equivalent static load for load case 1.
The maximum positive shear force from the elastic static equivalent load, which is
based on elastic state II stiffness, agrees much better with the shear force in the
structure from the FE analysis than what the plastic equivalent static load does, see
Figure 5.25. Nevertheless, it overlooks that the shear force can be higher closer to the
centre. Further, the shear force is not the same in both directions. Early after load
arrival large negative shear forces will occur close to the centre in the elastic phase,
see Figure 5.22, when the moment is much less in the centre than close to the edges.
The negative peak disappears and negative shear force does not occur until the beam
starts to oscillate back. It is then better explained with the plastic equivalent static
load.
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelop
Plastic Eq. Static load

-- 134 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 117
Figure 5.25. Shear envelop and the two static loads for load case 1.
The result is similar for a less intense load, load case 3. The difference is that the
moment will be smaller close to the edges and is better predicted with the plastic
equivalent static load, see Figure 5.26a. The shear force is close to the elastic
equivalent static load in the centre and close to the plastic equivalent static load at the
edges, Figure 5.26b.
Figure 5.26. The moment and shear envelop for a less intense load, load case 3.
5.5 Discussion of results
The moment demand on an impulse loaded elastic beam is higher than what is
predicted using the static equivalent load. The more intense the load is, the larger
deviation is obtained. This may not be of any importance in a concrete structure,
which will yield and redistribute moments. However, for timber and high class steel
cross sections that do not possess any plastic behaviour, such an underestimation of
the moment may cause failure.
More studies need to be carried out using the steel and timber properties in order to
investigate the actual response for those materials. For instance, timber is not a
preferable material for very intense loads. It will break anyways since it has
insufficient resistance. Therefore, only a load corresponding to load case 3 or an even
less intense load will in reality be of interest for acting on the timber structure. The
deviation is also much smaller for such cases.
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
Shear envelop
Elastic Eq. Static load
Plastic Eq. Static load
0
200
400
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelop
Plastic Eq. Static load -1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
Shear envelop
Elastic Eq. Static load
Plastic Eq. Static load

-- 135 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
118
If an elastic material is to be used in design, an up scaling factor could be introduced
for moments and shear forces. More investigations should be carried out in this
subject and since this thesis mainly investigates concrete structures this elastic effect
will not be considered further.
The shear force is not adequately described using the equivalent static load. Both the
support reaction and the shear force close to the centre are underestimated. The
support reaction is the largest shear force and is further investigated in Chapter 6.
Damping effects have been neglected when performing the elastic analysis. Damping
does not affect the displacement of the midpoint significantly. However, the moment
and shear force demand is affected considerably. Damping exists in all real structures
and even a 5 % damping ratio will decrease the deviation considerably. For timber
structures it is possible to have a very large damping up to 20 %, Johansson (2012).
The plastic and elasto-plastic analyses show that the distribution of shear forces and
moments are not the same as that predicted by a static equivalent load.
Fortifikationsverket (2011) and MSB (2011) demand that no curtailment of the steel
reinforcement is done. Having seen the moment distribution in Sections 5.2.1, 5.3.1
and 5.4.1, this is a very reasonable requirement. Moreover, anchorage of reinforce-
ment bars should be performed with care. Alternatively, existing structures with
varying reinforcement arrangement could be analysed with a varying stiffness in order
to see the effect of the moment redistributions. The observation that high shear forces
occur close to the centre for all material models implies that the distance where shear
force reinforcement is arranged should be extended towards the centre.
The shear force demand is governed by the elastic behaviour soon after load arrival.
However, the shear force in the ideal plastic material model is not reliable since it
depends on the initial stiffness, which has been overestimated by the modelling. The
elasto-plastic model assumes an equivalent state II young’s modulus. Initially, though,
the concrete is uncracked and a state I model should possibly be used instead. This is
difficult to take into account in a simplified model. A brief discussion of this problem
is given in Section 6.2.
A shear crack in a statically loaded structure starts at an angle close to 45 degrees to
the flexural reinforcement. As load redistribution occurs, the angle of the shear crack
can be flatter. This flatter angle is used for static shear design. However, the small
duration of the shear force that occurs in an impulsively loaded beam may mean that
load redistribution may not be possible and consequently that shear cracks cannot
have a small angle as used in static design. Moreover, the time for a crack to form
should be investigated since the small duration mean that a whole crack may not have
time to form. A more detailed analysis taking concrete cracking and reinforcement
yielding into account could therefore be used to determine more accurate behaviour.

-- 136 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 119
6 Support reaction
6.1 Definition of used methods
The support reaction is of interest when analysing a structure with respect to direct
shear and shear force design. As seen in Chapter 5, the support reaction is very high
initially. It is therefore necessary to find the reaction at the support. The obtained
support reactions from the FE analysis were compared to the to the method used by
Biggs (1964), Fortifikationsverket (2011) and the equivalent load approach described
in Sections 2.4.2.5 and 2.4.2.6 in order to see whether they can be used to estimate the
actual shear force adequately.
The three alternative, simplified methods are intended to be used in order to estimate
the maximum value of the support reaction, Vd. However, it is possible to use all
methods with a varying external load and internal resistance from the SDOF-model.
Since Biggs’ (1964) and Fortifikationsverket’s (2011) methods are very similar for
theoretical values of the transformation factors, see Section 2.4.2.5, they are here
described with Fortifikationsverket’s approach. Fortifikationsverket’s (2011)
approach is beneficial since it can use varying transformation factors studied in
Chapter 5. The methods used in further analyses are
constant	and	with	1	)	( F	m
2	2

	



 m
m
F
peak
m
F
MAX R	F	t	V 




 		
(6-1)
constant	and	with	)	(	)	(	1	)	( F	m
2	2

	



	
 t	R	t	F	t	V
m
F
m
F
d 




 		
(6-2)
(t)	and	(t)	with	)	(
)	(
)	(
)	(
)	(
)	(
1	)	( F	m
2	2
)	(

	



	
 t	R
t
t
t	F
t
t
t	V
m
F
m
F	t
d 







 		
(6-3)
2
)	(
)	( t	R
t	V eq
d 	
(6-4)
In later diagrams these are referred to as Max V, theoretical
mf, time dependent
mf
and equivalent static load respectively.
The internal resistance obtained from the SDOF-model where the energy is preserved
will be used when the time dependent transformation factors are used, see Section 4.5.
The constant transformation factors used are
case	elastic	for	0.504	and	0.64 m	F 	
	
		
(6-5)
case	plastic	for	0.333	and	0.50 m	F 	
	
		
(6-6)
Ardila-Geraldo (2010) uses varying transformation factors and varying internal
resistance within a tenth of the structure’s period in order to describe the support
reaction. It is only a mathematical trick in order to describe the support reaction and
the varying stiffness is not implemented into the SDOF model, see Figure 6.1. In other
words, this means that the SDOF internal resistance is calculated and then initially

-- 137 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
120
increased when the support reaction is considered. This method uses equation (6-3)
with the internal resistance:





	




 	

0.1T	t	if	)	(
0.1T	t	if	9	1	)	(	10
)	(
t	R
T
t
t	R
t	R	
(6-7)
Internal
resistance, R
Displacement, u
ks
Rm -
Stiffness, k
Time, t
ks -
10ks
0.1T
1
(a) 	(b)
Figure 6.1. Definition of the internal resistance and initial increased stiffness
according to Ardila-Geraldo (2010).
In further analyses, this approach will be referred to as varying
mf and stiffness. This
will only be used for the elastic and the elasto-plastic material models since Ardila-
Geraldo (2010) only considered the elastic phase. Consequently, five different
approaches are compared to the result from the FE-analysis.
6.2 Elastic analysis
The support reaction forces for a linear elastic reinforced concrete beam subjected to
an impulse load were found using several approaches. The initial peak reaction can
occur when the concrete is uncracked and has state I behaviour. However, it is here
assumed that it is cracked and an equivalent young’s modulus corresponding to state
II is used.
The FE-analysis provides a rough curve, which oscillates up and down. The reason for
this is likely because several modes and that no damping were considered. As seen in
Section 5.2.2 damping has considerable influence on the peaks. The highly varying
reaction curve can be smoothed out by plotting a mean value for 1000 points, i.e. 500
points after the actual value and 500 before, see Figure 6.2. The time-step is 0.01 ms
so this corresponds to an average over 10 ms.
  n
t	V
t	V
n
i
i
FE
mean





1000
0
500 )	(
(6-8)

-- 138 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 121
Figure 6.2. The roughness of the Fe-curve can be relieved by using a mean value for
every 10th millisecond.
In Figure 6.3 it can be seen that Fortifikationsverket’s maximum support reaction with
theoretical transformation factors is greatly overestimated compared to the FE-
analysis. The reason for this deviation is that it combines the maximum values of the
internal resistance and peak load, which in reality never overlap. Initially, when the
load is active, the internal resistance is insignificant. At a later phase the support
reaction is merely affected by the internal resistance.
The equivalent load concept will give a maximum support reaction force that does not
capture the peaks of the FE-analysis, see Figure 6.3. Also, the early peaks of the two
simplified methods are overlooked by using the equivalent load. However, it lies
above the mean value of the FE-analysis and Fortifikationsverket’s solution for later
times. This means that it is slightly conservative when estimating the mean value of
the support reaction.
-1500
-1000
-500
0
500
1000
1500
0 10 20 30 40 50
Support reaction,
 V [kN]
Time, t [ms]
FE
FE Mean

-- 139 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
122
Figure 6.3. Reactions for the linear elastic model calculated with the different
methods for load case 1.
Fortifikationsverket’s approach combined with time dependent internal resistance,
from an SDOF solution, and external force seems to correspond to a mean value of
the FE analysis. It can be seen in Figure 6.4 that the reaction force is approximately a
mean value of the reaction force obtained in the FE-analysis. The initial difference
can be due to that the methods initially assume an elastic deformation shape while the
actual deformation is close to a rigid body motion.
-1500
-1000
-500
0
500
1000
1500
2000
2500
0 10 20 30 40 50
Support reaction,
 V [kN]
Time, t [ms]
FE Max V
Eq. Static Load Theoretical

-- 140 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 123
Figure 6.4. The reaction force using theoretical transformation factor method
compared to the mean value of the support reaction from FE-analysis
for every 5th ms.
Figure 6.5 shows a magnification of the first five milliseconds for the different
methods in Figure 6.3. Varying values of the transformation factor and internal
resistance have been implemented in Fortifikationsverket’s approach. It underrates the
actual value significantly although it has a similar shape to the FE analysis.
Figure 6.5. The early support reaction with the different methods for a load with
peak pressure 5000 kPa and 1.12 ms duration.
-1500
-1000
-500
0
500
1000
1500
0 10 20 30 40 50
Support reaction,
 V [kN]
Time, t [ms]
Theoretical
FE Mean
mF
-500
0
500
1000
1500
2000
2500
0 1 2 3 4 5
Support reaction,
 V [kN]
Time, t [ms]
Max V
Theoretical
FE
Time dependent
Varying and stiffness
mF
mF
mF

-- 141 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
124
Here, the stiffness is also varied according to equation (6-7) together with the
transformation factors. This results in a good estimation of the maximum value.
However, the maximum value does not occur at the same time. The maximum value
in the FE analysis is obtained at half the load duration, while the proposed method’s
maximum value occurs at half the structure’s period. After some time, the reaction
force from these methods is the same as for the one with constant transformation
factors.
In order to investigate if this is just a coincidence, the same studies were performed
for load case 3. It can be seen in Figure 6.6 that the support reaction is lower and that
the peaks are reduced. The solution with theoretical transformation factors agree well
with the mean value of the support reaction. The static equivalent load overestimated
the support reaction and the maximum support reaction is greatly overestimated.
Figure 6.6. The support reactions over time for load case 3 with peak pressure
1250 kPa and 4.48 ms duration.
Figure 6.7, shows the support reaction during the initial five milliseconds. It can be
seen that using varying transformation factors will again underestimate the support
reaction, see. The solution with a varying stiffness still provides a very good
agreement, but does not occur at the correct time. It can also be seen that the
theoretical transformation factors do not overestimate the support reaction as was the
case for load case 1.
-1000
-500
0
500
1000
0 10 20 30 40 50
Support reaction,
 V [kN]
Time, t [ms]
Max V
Eq. Static Load
Theoretical
FE
mF

-- 142 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 125
Figure 6.7. FortV with varying transformation factor and equivalent static load
overrates the reaction for load case 3.
The above analyses have used an equivalent state II model. The concrete may be
uncracked initially, which mean that a state I model should be used. More detailed
analyses must be carried out in order to determine which Young's modulus that should
be used. This must take concrete cracking and reinforcement yielding into account.
An attempt was made and is presented in Appendix I. However, a good convergence
was never found for that model.
A higher Young's modulus will increase the magnitude of the support reaction and
shear forces, see Figure 6.8. It can also be seen that the small local peaks occur more
frequently in state I because of the faster wave propagation. The time between the
local peaks in both states is approximately the time it takes for the load to travel three
metres, i.e. the beam length. The initial peak support reaction is considered to be true,
but the magnitude of the later peaks is probably lower because of damping as seen in
Section 5.2.2.
Figure 6.8. The support reaction for a state I and II model respectively subjected to
different load cases 0, 1, 2 and 3. The dotted line is the support reaction
with the equivalent static load.
-500
0
500
1000
0 1 2 3 4 5 6
Support reaction,
 V [kN]
Time, t [ms]
Max V
Theoretical
FE
Time dependent and R
Varying and stiffness
mF
mF
mF
-1000
-500
0
500
1000
1500
0 1 2 3 4 5
Support reaction,
 Vs [kN]
Time, t [ms]
State II
-1000
-500
0
500
1000
1500
2000
2500
3000
0 1 2 3 4 5
Support reaction,
 Vs [kN]
Time, t [ms]
State I

-- 143 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
126
The magnitude increase happens because the support reaction depends on the internal
resistance. When the internal resistance increases, the static equivalent load also
increases. This is represented in Figure 6.8 with a black dotted line. In state II, the
peak initial support reaction for both load case 0 and 1 cannot be described by the
equivalent load. In contrast, the initial support reaction for load case 1 is taken into
account in state I. It seems like the equivalent load can be used to estimate the initial
peak conservatively if the ratio between the peak pressure and static equivalent load is
small. A maximum value of the ratio between peak pressure and equivalent static
load, for which the peak support reaction is lower than the equivalent static load, was
obtained as 19. This was found by using other load cases until the equivalent static
load did not describe the initial peak conservatively. The equivalent static load is
consequently on the safe side if
m	peak R	F 19		
(6-9)
However, only some load situations have been considered and more investigations
must be performed in order to determine this constant accurately.
If the time dependent transformation factors are used together with a varying stiffness
according to equation (6-7) it can be seen that the magnitude of the initial support
reaction is reasonably well described for both the state I, Figure 6.9, and state II,
Figure 6.10, models for the different load cases. It is only for load case 0 in the state II
model that it gives an unsafe peak value. The time when it occurs is however not
correct. The method describes the second peak. The agreement would probably be
improved if the stiffness is calculated for every deformation shape and not just taken
from the calibrated relationship in equation (6-7).
Figure 6.9. The support reaction in state I for different load cases obtained from FE
analysis (solid line) and SDOF model with time dependent
transformation factors and stiffness (dotted line).
-1000
-500
0
500
1000
1500
2000
2500
0 1 2 3 4 5
Support reaction,
 V [kN]
Time, t [ms]
STATE I

-- 144 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 127
Figure 6.10. The support reaction in state II for different load cases obtained from
FE analysis (solid line) and SDOF model with time dependent
transformation factors and stiffness (dotted line).
6.3 Ideal plastic analysis
The same analyses as in section 6.2 are carried out for the ideal plastic case. As can be
seen in Figure 6.11, the support reaction has a high peak in the first milliseconds and
later oscillates between maximum and minimum plastic reaction force. The later
oscillations start when the maximum deflection of the midpoint is reached and are
believed to occur since the FE-analysis actually has not an ideal plastic response, just
a very high Young’s Modulus. The response will consequently be similar to an elasto-
plastic response with very high Young's modulus but with much smaller
displacements than in the case of elasto-plastic analysis.
Similarly to the elastic case, the maximum value of the support reaction is
overestimated with Fortifikationsverket’s approach. However, the mean value of the
FE-analysis’ reaction force over time can be well estimated when the actual internal
resistance is used in the method. It takes the initial peak into consideration before it
corresponds to the peak values of the plastic support reactions. For higher peak
pressures, load case 1, it gets slightly overestimated, as seen in Figure 6.11, while
there is a better agreement for less intense loads, load case 3, see Figure 6.12. This
could be because actual deformation shape is not the expected.
-1000
-500
0
500
1000
1500
0 1 2 3 4 5
Support reaction,
 V [kN]
Time, t [ms]
STATE II

-- 145 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
128
Figure 6.11. Reactions for the ideal plastic model calculated for load case 1.
Figure 6.12. The reaction over time for a less intense load, load case 3.
The equivalent static load slightly overestimates the peaks in the late oscillations of
the FE-model well but misses the first peak. This is because it does only consider
contribution from half the internal resistance as discussed. The difference between the
peak obtained in the FE analysis and the reaction due to the equivalent static load is
relatively large, for a load with peak pressure P = 5000 kPa the difference is four
times as large, as can be seen in Figure 6.13. The time dependent transformation
factors are also introduced here, but they give a slightly lower reaction force.
-1000
-500
0
500
1000
1500
2000
2500
0 10 20 30
Reaction,
 V [kN]
Time, t [ms]
Max V
Theoretical
FE
Time dependent
Eq. Static load
mF
mF
-500
0
500
1000
0 10 20 30
Reaction,
 V [kN]
Time, t [ms]
Max V
Theoretical
FE
Time dependent
Eq. Static load
mF
mF

-- 146 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 129
Figure 6.13. Early reactions according to the different methods for load case 1.
If the plastic analysis is performed with load case 3, it can be seen that the theoretical
values of the transformation factors give a good agreement with the average of the FE
analysis and will not overestimate the peak value in the early stage, see Figure 6.12
and Figure 6.14. Also, the peak is very well approximated with the maximum value.
This is a consequence of that the internal resistance is close to the maximum internal
resistance at the same time as the peak load is present.
Figure 6.14. Reactions in early stage of the analysis for load case 3.
-1000
-500
0
500
1000
1500
2000
2500
0 1 2 3
Reaction,
 V [kN]
Time, t [ms]
Max V
Theoretical
FE
Time dependent
Eq. Static load
mF
mF
-500
0
500
1000
0 1 2 3
Reaction,
 V [kN]
Time, t [ms]
Max V
Time dependent
FE
Theoretical
Eq. Static load
mF
mF

-- 147 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
130
6.4 Elasto-plastic
The dynamic support reaction has been calculated similarly to the linear elastic and
ideal plastic cases by using the proposed methods. The initial support reaction
becomes high compared to the later support reaction in the oscillations, see
Figure 6.15. This reaction will be overlooked or overestimated by the different
approaches, as seen in Figure 6.16.
The hand calculation of maximum support reaction overestimates the reaction force
considerably. This is discussed for the other material idealisations and depends on that
the maximum internal resistance does not occur at the same time as the peak load.
The equivalent load gives a slightly conservative value of the late oscillations but does
not capture the early peak. It agrees well with the peak values in the late phase.
The theoretical transformation factor used for the elasto-plastic model is the plastic
transformation factor
mF = 0.667. This gives a good estimation of the reaction force
when the structure oscillates but a phase shift occurs similarly to the displacement
described in Section 4.1.3. In addition, it will give a conservative large support
reaction initially.
If the varying transformation factors are used in Fortifikationsverket’s approach with
an internal resistance from the modified SDOF approach, this phase shift will not
occur and the reaction force will be in good agreement in the late oscillations.
However, the initial support reaction will be underestimated, i.e. the same response as
to what has been observed for the linear elastic and the ideal plastic material models
in Sections 6.2 and 6.3, respectively.
Figure 6.15. Reactions for the elasto-plastic model calculated for load case 1.
If a varying stiffness is also introduced, according to equation (6-7) a good estimation
of the initial peak is obtained, see Figure 6.16. The peak support reaction will
however not occur at the same time, which has also been observed in the linear elastic
case.
-1000
-500
0
500
1000
1500
2000
2500
0 10 20 30 40 50
Reaction,
 V [kN]
Time, t [ms]
Max V Theoretical
Time dependent FE
Eq. Static load
mF
mF

-- 148 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 131
Figure 6.16. The early reaction force with different methods for load case 1.
The same observations are made for a less intense load, load case 3, see Figure 6.17.
The maximum values overestimate the reaction. However, neither of the proposed
methods captures the early peak. It is only if a varying stiffness according to equation
(6-7) is introduced that the initial peak is covered as seen in Figure 6.18.
Figure 6.17. Reactions for the elasto-plastic model calculated for load case 3.
-1500
-1000
-500
0
500
1000
1500
2000
2500
0 1 2 3 4 5
Reaction,
 V [kN]
Time, t [ms]
Time dependent FE
Eq. Static load Theoretical
Max V Varying and stiffness
mF
mF
mF
-1000
-500
0
500
1000
0 10 20 30 40 50
Reaction,
 V [kN]
Time, t [ms]
Time dependent FE
Eq. Static load Theoretical
Max V
mF
mF

-- 149 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
132
Figure 6.18. Reactions in early stage of the analysis for the elasto-plastic model for
load case 3.
6.5 Discussion of results
A large support reaction occurs initially in a structure subjected to a highly intensive
impulse load. Since this reaction force occurs very early, the behaviour of the
structure is elastic. The initial peak is higher than the later support reaction when the
structure has a plastic behaviour.
Several methods have been compared and the result suggests that the following could
be concluded about the design approaches:
The maximum support reaction is greatly overestimated with the method that does not
vary with time since the maximum external force does not occur at the same time as
the maximum internal resistance.
The initial support reaction cannot be adequately predicted using by the static
equivalent load only. The static equivalent load is only based on the maximum
internal resistance, which leads to an underestimation of the initial peak. In addition,
the support reaction for the later oscillations is overestimated with 25%. However, it
can be used for conservative estimations for the later phase if knowledge about the
early peak support reaction exists.
The support reaction for the late phase is dependent on the transformation factors
according to Fortifikationsverket’s approach. However, the initial support reaction is
overestimated when using theoretical transformation factors. This could also be used
conservatively in design.
Implementation of varying transformation factors provides initial support reactions on
the unsafe side. The stiffness is higher initially, because of the different displacement
shape and the internal resistance could be increased according to Ardila-Geraldo
(2010) soon after load arrival. This estimates the peak very well but not the time when
it happens. A more general stiffness could be taken out for every time step to get a
better agreement. However, the maximum value is of main importance and not the
-500
0
500
1000
0 1 2 3 4 5
Reaction,
 V [kN]
Time, t [ms]
Max V Theoretical
FE Eq. Static load
Time dependent Varying and stiffness	
mF	
mF
mF

-- 150 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 133
time of occurrence. This approach is the most accurate approach to determine the
early peak support reaction, but also the most complex. The theoretical transformation
factors could be used in a conservative design. This would be preferable since the
method is less time consuming.
In a real reinforced concrete beam, the section could be uncracked and a state I model
should be used. This would introduce larger initial forces in the structure. However,
the suggested design approach with using a varying stiffness and time-dependent
transformation factors can capture this response as well. More research needs to be
done to see which state model that describes the initial peak the best.

-- 151 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
134
7 Direct shear
7.1 SDOF model
The simplified SDOF-approach for direct shear, described in Section 2.5.3, has been
used for the beam described in Chapter 3 in order to examine the risk of failure in
direct shear.
)	(	)	( t	V	R	m s					 	
(7-1)
where m is the beam’s mass,
 is the shear slip, R(
) is the direct shear resistance and
Vs(t) is the support reaction. Here, m represents the full mass since the initial
transformation factors are almost 1.0 due to the initial near rigid body motion.
The direct shear resistance function was calculated according to Table 2.6 and is
shown in Figure 7.1. The ultimate slip,
max, becomes very large, due to much
bending reinforcement and large diameter bars. Since the resistance function is purely
empirical, this value should probably be handled with great care. The steel used when
the method was proposed did in general have more plastic deformation than today,
Johansson (2012). The large ultimate slip gives a high direct shear capacity since it
consumes much energy.
Figure 7.1. Direct shear resistance function. a) The entire resistance curve, b)
magnification of the initial resistance.
7.2 Failure criteria
When examining the risk of dynamic direct shear failure,
3 = 0.6 mm is used as a
failure criterion with a tri-linear resistance function. This is the same criterion that
Krauthammer et al. (1993) has used in previous work. Another alternative has been
used by Low and How (2002), who have simplified it further to just a bilinear
relationship with the same area under the graph in order to investigate the failure
mode, see Figure 7.2. This makes the potential incorrectness with
max unimportant.
Using
max as failure criterion makes the direct shear capacity unreasonably high.
0
0.5
1
1.5
2
2.5
3
3.5
0 20 40 60 80
Shear stess,

[MPa]
Slip,
 [mm]
(a)
0
0.5
1
1.5
2
2.5
3
3.5
0 1 2 3 4
Shear stess,

[MPa]
Slip,
 [mm]
(b)

-- 152 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 135
Shear stress

, [MPa]
Shear slip,
[mm]
m
e
L
1	
2	
3
 0.3 0.6
Original relation
Simplified bilinear relation
Figure 7.2. Simplified bilinear relation used by Low and How (2002) compared with
the original relation used by Krauthammer et al. (1993). The areas
under the graphs are equal.
Since the flexural and direct shear response occurs at different times, they are
uncoupled and the support reaction could be calculated with the SDOF model for
flexure using FortV’s method. As seen in Chapter 6 this provides a conservative
estimate of the reaction force but is here used as an estimate. The general appearance
of the support reaction is shown in Figure 7.3. The first peak is dependent on how
impulsive the load is.
Figure 7.3. General appearance of the support reaction for elasto-plastic response.
The criterion of failure in bending is taken from the plastic rotational capacity. The
maximum plastic deformation is in Section 3.4.1 calculated to
mm	6	.	22		pl	u	
(7-2)
The elastic deformation will dissipate some energy and the total allowed deformation
can in line with definition of elasto-plastic deformation in Section 2.4.1.4 be
expressed as
.	mm	2	.	26
10	42	.	8	2
606
6	.	22
2	2 7	.	, 
	
					 k
R
u
u
u	u d	pl
el
pl	d	ep	
(7-3)
-500
0
500
1000
1500
2000
0 10 20 30 40 50
Reaction,
 V [kN]
Time, t [ms]

-- 153 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
136
7.3 Iso-damage curves
Iso-damage curves were constructed for flexure and direct shear failures by
investigating at which pressure and impulse intensity the failure criteria were reached.
The direct shear failure was assumed to happen early before any significant bending
effect happens.
Figure 7.4. Iso-damage curves for bending and direct shear.
In Figure 7.4, it can be seen that for any combination of peak pressure and impulse
intensity, the beam will fail in bending and hence the direct shear failure would not
need to be considered for this beam. If direct shear would occur, the beam would have
failed in bending anyway a couple of milliseconds later.
In previous experiments and comparisons by Chee (2008), it is shown that direct shear
failure occurs if the load is very impulsive and of high magnitude and that flexural
failure happens when the load has lower magnitude with longer duration, see Figure
7.5. The experiment indicated with a triangle would fail in both modes but failed
firstly in direct shear.
The requirement for bending failure used by Chee (2008) is much greater than what is
used in this thesis. The slab element used is 1.2 x 4.8 x 0.15 m and has an ultimate
displacement of 14 inch, i.e. 355 mm. This had a reinforcement percentage of 0.5 %.
It was not possible to find which steel class that was used. The concrete had cylinder
compression strength 52 MPa i.e. higher than in this example. The authors of this
thesis did not succeed to recreate the iso-damage curves in Figure 7.5. This was due to
that a slab flexural resistance curve has been used, which is not treated in this thesis.
Also, some parameters may have been misinterpreted.
0
5
10
15
20
0 5000 10000 15000 20000
Peak Pressure,
 P [Mpa]
Impulse Intensity, i [Pa∙s]
Direct Shear Failure
Bending Failure

-- 154 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 137
Figure 7.5. Iso-damage curves for one of the experiments carried out by Kieger and
Getchell (1982), from Chee (2008)
The failure criterion used in Eurocode 2, CEN (2004), can be an underestimation of
the allowed bending deformation therefore the beam was given a higher plastic
rotational capacity in order to examine the effect of this.
mm	45	2 , 		 d	pl	pl u	u	
(7-4)
and the total deformation
mm	50
2
, 		 el	ep
pl	ep
u
u	u	
(7-5)
Using this modified failure criterion, the moment failure is still the governing
parameter for all loads but the failure curves are closer to each other. It could be seen
that a three times as high rotational capacity would give a risk of direct shear failure
and iso-damage curves more similar to Figure 7.5.

-- 155 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
138
Figure 7.6. Iso-damage curves when using a larger rotational capacity for bending
failure.
In the reliability analyses performed by Low and How (2002), it was found that a
stiffer and shorter beam would be more susceptible to fail in direct shear. Therefore,
the simplified SDOF system for direct shear were also implemented for shorter and
deeper beams, but the flexible mode of failure still turned out to be the most
dangerous, i.e. the iso-damage curves were schematically the same as in Figure 7.4.
The influence of the concrete strength was also analysed. This study was made with
the same beam but with a lower concrete strength. The results show that the difference
between bending and direct shear capacity decreased with decreased concrete
strength, but that the beam would still fail in bending for all load cases. The influence
of using the state I stiffness when calculating the reaction force was also investigated.
A direct shear failure would still only occur if the beam would fail in bending.
7.4 Discussion of results
In this chapter iso-damage curves for direct shear and bending failure were created.
Direct shear failure will not be the governing failure criterion in these analyses. If it
would occur, the structure would have failed in bending later anyway.
The calculations carried out in this thesis show that it is not necessary to consider the
direct shear failure phenomenon the simply supported beam studied here. This can
depend on that the design rotational capacity of the structure used in Eurocode is too
conservative, which leads to a lower capacity in bending. For instance, the allowed
deformation in bending used by Chee (2008) is 350 mm for a 4.8 m slab compared to
Eurocode, which gives a value of 22 mm for a 3 m slab. These two sections have
approximately the same reinforcement ratio but the steel class used by Chee (2008)
could not be found. Evidently, more parameters govern the plastic rotation capacity
but the principle difference can be seen.
The constructed iso-damage curves for direct shear failure may therefore be correctly
described with the used approach. However, more investigations are needed to
determine whether this is true. The direct shear resistance function is empirical and it
0
5
10
15
20
0 5000 10000 15000 20000
Peak Pressure,
 P [Mpa]
Impulse Intensity, i [Pa∙s]
Direct Shear Failure
Bending Failure

-- 156 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 139
is important to investigate if it is up to date. In Europe, new types of reinforcement
steel are used today compared to those used in for example the 1980’s, which may not
have the same properties. This is probably the reason why the ultimate failure slip is
very high. This is however no problem if the shear slip corresponding to 0.6 mm is
seen as the failure criterion. Since the definitions of the different regions are fixed
values, these should be further investigated for smaller or larger cross sections.
Intuitionally, empirical models should be handled with care and this is also what is
recommended here.
More studies of how the boundary conditions affect the reaction force needs to be
carried out. It is possible that a clamped beam may have another response than for a
simply supported beam. Most of the reported direct shear failures have occurred in
slabs. This may also be a subject for further studies.
Regarding the actual design, it is important to realise that the shear reinforcement
should not be arranged vertically when strengthening a structure against direct shear
failure. This would not contribute to the resistance of direct shear since the direct
shear crack propagates almost vertically. The reinforcement should therefore be
placed with an angle to the shear plane. In Section 5.5 the arrangement of the bending
reinforcement is discussed. It is there recommended that no curtailment is performed.
Since the moment close to the edges is very small when the direct shear takes place,
this reinforcement can contribute to the direct shear resistance. If the shear
reinforcement is placed with an angle to the longitudinal axis it could contribute to the
normal shear capacity as well as the direct shear capacity of the beam.

-- 157 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
140
8 Final conclusions and recommendations
8.1 Conclusions
The initial deformation shape for a beam subjected to a uniformly distributed impulse
load differs considerably to the expected shape when statically loaded. This means
that the current theoretical values of transformation factors for the plastic and elasto-
plastic material response poorly describe the early deformation. However, later on
there is a rather good agreement with the theoretical transformation factors.
Time dependent transformation factors can be obtained from FE analyses and
implemented in the SDOF system. This will cause an energy loss in the system and
consequently too small displacements. Therefore, a method for preserving energy in
the system, while varying the transformation factors, is introduced. This makes the
displacement agreeing well with the FE analyses for all material models studied.
Even a simplified relationship for the time dependent transformation factors can be
used if the preserve energy scheme is used in the SDOF model with elasto-plastic
material model. This relationship uses the transformation factors for elastic and plastic
theoretical deformation shape when the response is elastic and plastic, respectively.
The moment for a beam with elastic material response will be underestimated when
using the equivalent static load. The more intense the load is the larger deviation.
However, damping decreases the deviation considerably. Similarly, the shear force is
not described adequately with the equivalent static load. Both the support reaction and
the shear force close to the centre are underestimated.
Distribution of moment and shear force will not be as expected for a static load. This
means that care should be taken when the reinforcement is arranged in a concrete
member. A recommendation is to not make any curtailment and that shear
reinforcement, if needed, should be extended towards the centre.
The initial reaction force is governed by elastic behaviour and will be of great
magnitude. Several methods for determining the support reaction have been
investigated:
 Using the maximum value of Biggs’ and FortV’s approach will result in a
considerable overestimation of the reaction.
 Determining the reaction with the static equivalent load leads to an
underestimation for the initial reaction. For the later phase, though, the
reaction is overestimated with 25 %.
 Using time dependent pressure and internal resistance together with the
theoretical transformation factors in FortV’s approach will cause an
overestimation of the initial reaction. This approach will represent the later
phase rather well.
 Implementation of varying transformation factors provides initial support
reactions on the unsafe side. The internal resistance could be increased
according to Ardila-Geraldo soon after load arrival. This estimates the peak
very well but not the time when it occurs.

-- 158 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 141
The evaluated simplified SDOF model for direct shear failure shows that this failure
criterion will not be governing for the case presented in this thesis. The examined
examples in this report will always also fail in bending later if it fails in direct shear.
This may be a consequence of that the model is empirical or that input data have been
misinterpreted. This should be handled with great care. This can also be due to a very
strict value for the plastic rotation capacity used for bending, which has been seen to
be less strict in other studies.
Using an equivalent Young’s modulus in ADINA will have a significant impact on
the results, but as long as the corresponding change in velocity is less than 3 times the
initial value it is seen as a good approximation. For higher changes the user should be
cautious.

-- 159 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
142
8.2 Further studies
The method using energy preservation in the SDOF analysis works well. Some further
work investigating how high accuracy that is needed for the transformations factors
can be done. It is interesting to investigate if the relationship can be further simplified
or if values for more time increments should be used. It would be preferable to
determine a simplified relationship that can be used to calculate both the displacement
and reaction for different load cases and boundary conditions.
It is not clear how the initial peak value of the support reaction is supposed to be
treated and it can differ a lot between different design codes. This is a subject that
needs further study, although some investigations are covered in this report. A
suggestion is to find a reaction force as a function of the properties of the impulse
load and the transformation factors, which represent a good estimate of the peak value
and time of occurrence.
Investigations of to what extent the equivalent static load can be used for design is
needed. In this report it is shown that it is not always on the safe side to base the
design on an equivalent static load. It would be of interest to study the influence of
varying stiffness i.e. how the moment and shear distribution would be affected by
curtailment of the reinforcement. Moreover, the response when using other material
properties such as steel and timber should be explored. Some suggestions of how to
treat this in design is preferable. If an elastic material is going to be used in design, an
up-scaling factor could be introduced for moments and shear forces. This factor could
take damping into account. More investigations should be carried out in this subject.
This thesis presents how the direct shear problem is treated in different design codes
today and also tried to implement this into a simplified SDOF model. However, the
knowledge of the direct shear failure phenomenon is still vague, and there is need of
further study. A suggestion is to study the importance of direct shear design and how
this should be treated. Also study when the risk of direct shear failure occurs and how
a so called direct shear crack propagates through the member. This is not treated well
in design today and further study of this crack propagation and how it should be
designed for should be investigated.
The Young's modulus affects the wave propagation through the beam. It is necessary
to investigate which Young's modulus that should be used in a FE analysis with a
simplified bi-linear material behaviour in order to describe cracking and
reinforcement yielding and how this will affect the deformation shape.

-- 160 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 143
9 References
ADINA, 2010. Theory and Modelling Guide. Vol 1: ADINA Solids & Structures
Report ARD 10-7, ADINA R & D, Inc., Watertown, MA. USA.
ADINA (2012), E-mail contact with Zhang X., Ph.D., Wang R., Walczak J., Ph.D.
ADINA R&D, Inc. Watertown, MA. USA.
Al-Emrani, M. Engstöm, B. Johansson, M. Johansson. P., 2008. Bärande
konstruktioner. Report 2008:12, Chalmers University of Technology, Division of
Structural Engineering, Göteborg, Sweden.
Ardila-Giraldo, O. A., 2010. Investigation on the Initial Response of Beams to Blast
and Fluid Impact. Ph. D. Purdue University.
Augustsson R. och Härenstam M., 2010. Design of reinforced concrete slab with regard
to explosions. Division of Structural Engineering, Concrete Structures, Chalmers
University of Technology, Master Thesis 2010:38, Göteborg, Sweden.
Biggs J.M., 1964. Introduction to Structural Dynamics. McGraw-Hill Inc., New
York, USA.
Boverket, 2004. Boverkets handbok om betongkonstruktioner, BBK 04. Boverket.
Karlskrona
CEB, 1993. CEB-FIP model code. Comité Euro-international du béton. EPF Laussanne. T
Telford, London, Great Britain, p. 437.
CEN, 2004. Eurocode 2: Design of concrete Structures – Part 1-1: General rules and rules
for buildings. European Comittee for Standardization, Brussels, Belgium.
Chee K. H., 2008. Analysis of shallow buried box structures subjected to airblast
loads. Master’s thesis. University of Florida.
Craig Jr., R. R. and Kurdila, A. J., 2006. Fundamentals of Structural Dynamics. 2nd
ed. Holboken, New Jersey. John Wiley & Sons, Inc.
Crawford, J. E., Krauthammer, T., Karagozian, J. and Hinman, E. (1999). “Structural
components – Analysis and design examples.” Structural design for physical
security: state of the practice. Chapter 4, ASCE, SEI, Reston, Va.
Department of Defense (DoD), 2008. Unified Facilities Criteria: Structures to Resist
the Effects of Accidental Explosions. UFC 3-340-02.
Ek K.J. och Mattsson P., 2009. Design with Regard to Blast- and Fragment Loading.
Division of Structural Engineering, Concrete Structures, Chalmers University of
Technology, Master Thesis 2009:81, Göteborg, Sweden.
Engström B., 2011a. Design and analysis of continuous beams and columns, Report
2007:3, Edition 2011. Division of Structural Engineering, Concrete Structures,
Chalmers University of Technology, Göteborg, Sweden.
Engström B., 2011b. Design and analysis of slabs and flat slabs. Division of
Structural Engineering, Concrete Structures, Chalmers University of Technology,
Göteborg, Sweden.
Fortifikationsverket, (2011). FortSkydd. Bilaga till Fortifikationsverkets
Konstruktionsregler FKR 2011. Dnr 4535/2011, Försvarsmakten

-- 161 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
144
Low, Y. L., Hao, H., 2002. Reliability analysis of direct shear and flexural failure
modes of RC slabs under explosive loading. Engineering Structures. 24. pp.189-
198.
Johansson, M. 1997. Armeringsseghetens inverkan på deformationsförmågan hos
betongkonstruktioner. Avdelningen för Betongbyggnad, Chalmers Tekniska
Högskola, Rapport 97:1, Göteborg.
Johansson, M. 2000. Structural Behaviour in Concrete Frame Corners of Civil
Defence Shelters, Non-linear Finite Element Analyses and Experiments.
Department of Structural Engineering, Division of Concrete Structures, Chalmers
University of Technology, Göteborg, Sweden.
Johansson, M. och Laine, L., 2007. Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 1: Last av luftstötvåg. Räddningsverket, Rapport
B54-232/07, Karlstad.
Johansson, M. och Laine L., 2009. Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 3: Kapacitet hos byggnader. MSB, Rapport MSB
0142-10, Sverige.
Johansson, P. and Lantz, H., 2009. Crack Control of Reinforced Concrete with
Continuous Edge Restraint. Master’s thesis 2009:43. Division of Structural
Engineering, Concrete structures, Chalmers University of Technology.
Johansson, M. (2012), Ph. D., Reinertsen Sverige AB, Sweden.
Kieger S. A., Getchell J. V., Slawson T. R. and Hyde D. W. 1980-1984, Vulnerability
of shallow-buried flat-roof structures. Technical Report SL-80-7, Parts 1-6. U.S.
Army Waterways Experiment Station, Vicksburg, MA.
Krauthammer, T., Bazeos, N., and Holmquist, T.J., 1986. “Modified SDOF analysis
of RC box type structures.” J. Struct. Eng., ASCE 112 (4), 726–744.
Krauthammer, T., Assadi-Lamouki, A. and Shanaa, H. M., 1993. Analysis of
impulsively loaded reinforced structural elements. Computers & Structures. 48 (5).
pp. 851-871.
Krauthammer, T., 2008. Modern Protective Structures. CRC Press, Chapters 5&6, pp
195-290.
Laine, L., 2012. Markstötvåg. MSB. Publikationsnummer: MSB344. Sverige
Mattock, A. H., and Hawkins, N. M., 1972. Shear Transfer in Reinforced Concrete-
Recent Research. PCI Journal, pp. 55-75.
MSB, 2011. Skyddsrum SR 09. Med tillägg 2011. Beställningsnummer: B54-141/11.
Sverige
Nyström, U., 2006. Design with regard to explosions. Division of Structural Engineering,
Concrete Structures, Chalmers University of Technology, Master Thesis 2006:14,
Göteborg, Sweden.
Ross, T.J., 1983. Direct Shear Failure in Reinforced Concrete Beams under Impulsive
Loading, Technical Report AFWL-TR-83-84, Air Force Weapons Laboratory,
Kirtland AFB, NM.

-- 162 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 145
Slawson, T. R., 1984. Dynamic shear failure of shallow-buried flat-roofed reinforced
concrete structures subjected to blast loading. Technical Report SL-84-7,
Structures Laboratory, U.S. Army Waterways
Experiment Station, Vicksburg, MS
Svedbjörk, G., 2010. Tvärkraft i FKR. Presentation på möte för verkansgruppen,
2010-05-27, Drammen, Norge.

-- 163 of 236 --



-- 164 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 A1
APPENDIX A The central difference method
The central difference method is an explicit method for approximating the solution for
a second order differential equation such as the equation of motion. The deformation
at time t+Δt is approximated by considering the equation of motion at time t.
)	(t	F	ku	u	c	u	m t	t	t 		 		
(A-1)
where m is the mass, c is the damping, k is the stiffness, F(t) is the external force
acting on the structure at time t and	t	u	 ,	t	u	 and	t	u	 is the displacement, velocity and
acceleration respectively.
By using the central difference approximations as shown in Figure A.1, the
acceleration at time t can be written as:
 		t	t	t	t	t	t u	u	u
t
u 			 	

 2
2
1
	
(A-2)
The velocity at time t can correspondingly be approximated as:
 		t	t	t	t	t u	u
t
u 			 

 2
1
	
(A-3)
ut+
t
ut
ut-
t
t
u
Figure A.1. The central difference scheme. The method uses ut-
t and ut in order to
solve ut+
t
Following expression is obtained if equation (A-2) and (A-3) are inserted into the
equation of motion (A-1):
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
t	t
t	t
t	t u
t
c
t
m
t
u	m
R	F
t
c
t
m
u 2
2
2 2	2
1
2	
(A-4)
where
t	t	t u	k	R 		
(A-5)
The above equation can be solved if the deformation at time t and for the previous
time t-Δt is known. This method needs a start value of the displacement which
corresponds to the time -t. This start value can be calculated as
0
2
0	0 2 u
t
u	t	u	u t 	 
							
(A-6)

-- 165 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
A2
Hence, the deformation at time t+Δt can be found if the deformation at time t is
known. This can be a problem when dealing with a non-linear response while
unloading and reloading, because the equation (A-4) is derived with the assumption of
linear elastic response. It is relatively easy to apply this function with a non-linear
response by calculating a corresponding internal resistance force for the actual time t
as a function of the displacement at time t, the stiffness k and the residual deformation
ures. In Figure A.2 below this is illustrated how this is solved for an elasto-plastic
material model.
where
k
R
t	u	u m
res 	 )	(	max
(A-7)
  	 	 		res	u	i	u	k	i	R 			
(A-8)
Note that umax(t) can change with time because at the time step i the absolute
maximum value may not have occurred yet, it is the maximum value so far.
u
R
k
1
Rm
Rm/k
k
1
u(i)
u(i)-ures
R(i)
ures
umax(t)
Figure A.2. Illustration of how the resistance is calculated for an elasto-plastic
material model when using the Central Difference Method.
It can be seen that if u(i) is the actual maximum umax(t) then the resistance Rm is
obtained, which is the expected case.

-- 166 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 B1
APPENDIX B Derivation of expressions for
maximum shear
B.1 Fortifikationsverket
In this appendix the expressions used in the Swedish design approach, FortV (2011),
is presented. These expressions have been derived by Svedbjörk (2010).
x V(x)
M(x)	P(x,t)
F1 m, EI
Figure B.1. A cut of a simply supported beam showing load, reaction force and
section forces.
Vertical force equilibrium
1
0	0
)	(	)	,	(	)	(	: F	x	V	dx	t	x	P	dx	u	x	m
x	x
			 	 	
(B-1)
where
constant	)	( 	 m	x	m
constant	)	( 	 P	x	P
Establish equilibrium when	2	/	L	x 	s	u	L	u	L	V 		 )	2	/	(	,	0	)	2	/	(
The integral in the left hand expression in equation (B-1) can be rewritten as:
s
L L
s
u
L
dx
u
x	u
L
m	dx	u	m 


 2
)	(	2
2/
0
2/
0
			 	
(B-2)
Because the acceleration has the same shape as the deformations the definition of the
transformation factor in equation (B-4) can be used. By considering this
equation (B-2) can be rewritten with help of equation (B-4) as
2
2/
0
L	u	m
dx	u	m s
F
L 
	
		
where
(B-3)
	
L
s
F dx
u
x	u
L 0
)	(	1
	
(B-4)
The right hand side expression in equation (B-1) is reduced to

-- 167 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
B2
1	1
2/
0 2
)	(	)	2	/	(	)	,	( F
L
t	p	F	L	V	dx	t	x	p
L
						
(B-5)
which combined with equation (B-3) results in
1
2
)	(
2 F
L
t	p
L	u	m s
F 		

	
(B-6)
Next, the free body of a single degree of freedom system in the centre point of the
beam is considered
M
F(t) R
u
Figure B.2. A free body diagram of a single degree of freedom system.
L	t	p	t	F
qL	R
)	(	)	( 

(B-7)
Horizontal force equilibrium gives
L	t	p	qL	u	M F	k	s	m )	(	:	

	
	 			 
(B-8)
where
F	k	

	 
mL	M 
Combining equation (B-6) and (B-8) yields
 	 	L	t	p	qL	F	L	t	p F	F
F
m )	(	2	)	( 1 				
	
	


(B-9)
which can be rewritten as
2
)	(	1	)	(
2	2
1
L
q	t	p	t	F
m
F
m
F 




 




 	




(B-10)

-- 168 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 B3
B.2 Position of resultant in Biggs’ max reaction
calculation expression
When calculating the dynamic reaction the expressions derived by Biggs (1964) are
commonly used. In this appendix it is shown how the expression for the lever arm of
the inertia force is derived for a simply supported beam.
Make cut and take moment equilibrium to get an expression for the moment along the
beam.
x V(x)
M(x)	P
V1 m, EI
Figure B.3. A cut of a simply supported beam showing load, reaction force and
section forces.
  	x	V
Px
x	M 1
2
2
:	x	around	Moment 		
(B-11)
Bernoulli beam equation gives us the definition of the moment as:
 	x	M
dx
w	d
EI 	 2
2
(B-12)
Integrating over time results in:
  	C
PLx	Px
dx	x
PL	Px	PL
V	dx	x	M
dx
dw
EI 						





 			 	 4	6	2	2	2
2	3	2
1	
(B-13)(
A second integration is performed in order to obtain an expression for the
displacement:
  EI
D	Cx
PLx	Px
EI
dx	Cx
PLx	Px
x	w
		


		
  12	24	4	6
3	4	2	3
(B-14)
It is known that the displacement at the supports is zero i.e.
0	)	(
0	)	0	(


L	w
w
(B-15)
The integration constants can then be determined as:

-- 169 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
B4
24	12	24
0
12	24
0
3	4	4	4	4 PL
C
PL	PL
CL	CL
PL	PL
D
								

(B-16)
By inserting (B-11) into (B-9), the expression for the deflection can be written as:
  	 		x	L	Lx	x
EI
P
EI
x
PL	PLx	Px
x	w 3	3	4
3	3	4
2
24
24	12	24 		





 		

(B-17)
In order to obtain an expression for the deflection shape the expression for the
deflection is divided with the maximum deflection at the midpoint which is:
EI
PL
w 384
5 4
max 	
(B-18)
and this result in the expression for the deflections shape:
     	  		x	L	Lx	x
L
EI
PL
x	L	Lx	x
EI
P
w
x	w
x 3	3	4
4	4
3	3	4
max
2
5
16
384
5
2
24 		
	
	
		
(B-19)
The lever arm used in Biggs (1964) is calculated as the area times the lever arm for
each small element divided with total area which can be stated as
 
 
 	
 	
L	L
L	L	L	L
L	L	L	L
x	Lx	x	L
x	Lx	x	L
dx	x	L	Lx	x
L
dx	x	L	Lx	x
L
dx	x
dx	x	x
L 	L
L
L
L
L
L
i
192
61
40
1
8
1
2
1
96
1
20
1
6
1
40	16
2
2	4
96	40
2
6	4
5	4
2
2
6	5
2
3
2
5
16
2
5
16
3	3	3	2
4	4	4	2
2
0
5	4	2	3
2
0
6	5	3	3
2
0
3	3	4
4
2
0
2	3	4	5
4
2
0
2
0

	
	






 	





 	







 	





 	

	
	
	



 


(B-20)

-- 170 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 B5
Figure B.4. The assumed distribution of the inertia force I and the
corresponding lever arm for a simply supported beam.
Figure B.4 can later on be used to set up equilibrium and obtain the expression for the
dynamic reaction. This is shown in section 2.4.2.5.

-- 171 of 236 --



-- 172 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 C1
APPENDIX C Derivation of shear span
In this appendix the expressions used in the Swedish design approach, FortV (2011),
is presented. The derivation of the shear span is for the early response where a direct
shear failure can occur. A cut is made in the midpoint of the beam, see Figure C.1.
Because of the initial rigid body response the moment is assumed to be zero in the
midpoint and maximum close to the supports, see Figure C.2. Therefore the shear
force distribution is obtained as illustrated in Figure C.3.
Figure C.1. A simply supported beam with a cut in the midpoint.
Moment, due to rigid body motion in the early stage there will be zero moment in the
middle of the beam. The moment will occur close to the supports where a
concentrated curvature is obtained.
Figure C.2. Moment distribution in the early stage of a beam subjected to an
impulse load. Due to the rigid body response the moment is zero in
the midpoint.
Shear force
Vs
xm
Vd
a

Figure C.3. The shear force distribution in the early stage of a beam subjected to
an impulse load. This shear force distribution corresponds to the
moment distribution in Figure C.2.
Vd is the design shear force and should be determined at a distance a
 from the
support.
The resistance function for shear force g(x), the ratio between the design shear force
Vd and the shear force capacity VRd, can be written as
Rd
d
V
V
x	g 	)	(	
(C-1)
The shear force at the distance x from the support can be approximated as





 	
m
s	d x
x
V	V 1	
(C-2)

-- 173 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
C2
The expression in equation (C-2) assumes a linear variation of the shear force. This is
not the case when the beam is subjected to an intense impulse load. So this
approximation is not valid in this case.
The shear resistance can be assumed as
d	x
k
x	VRd /
)	( 	
(C-3)
where k is just a constant not of importance and is not shown in the derivation.
Inserting (C-2) and (C-3) into (C-1) gives
x
x
x
kd
V
x	g
m
s





 	 1	)	(	
(C-4)
The maximum value of the resistance function is obtained when
2
m	x
x 	
(C-5)
Therefore, the shear force capacity should be controlled at a distance of half the
distance between zero-shear force points.
2
m	x
a 	
	
(C-6)
In order to find where the shear force is zero, xm, inertia forces close to the supports
must be considered. This is done by assuming acceleration in the zero-shear force
point equal to the rigid body motion acceleration and let it decrease linearly until zero
at the supports, as shown in Figure C.4.
xmm	u	m 
Mm
P
Figure C.4. A cut of the beam at the distance xm from the support.
For a rigid body motion no resistance will impede the acceleration and the max value
of the inertia force is
P	u	m 		
(C-7)
Moment equilibrium around the support is established
0
3
2
2	2
2
			 m
m	m	m M
x	Px	Px
(C-8)
The maximum moment Mm can be expressed as the ultimate moment resistance

-- 174 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 C3
8
2
L	q
M eq
m 	
(C-9)
By using equation (D-9) and (D-8)
P
q
L
x eq	m


 4
3
(C-10)
If the inertia forces close to the support are neglected the length xm will increase and
the beam must be examined at a greater distance from the support. This corresponds
to setting the term3
2
2
m	m x	Px 	 in equation (C-8) to zero and equation (C-11) will be
obtained. This is used in FortV (2010) as design value. There is also an additional
term that provides safety because a
 is not zero for very high pressures. The safe side
estimation of xm can be obtained from
0
8	2
2	2
	 L	q	Px eq	m	
(C-11)
And is
P
q
L
x eq	m


 4
1
(C-12)
A term 0.05 is added to this distance to provide safe side solutions
P
q
L
x eq	m 5	.	0	05	.	0 		
(C-13)
Finally, the shear span can be calculated from equation (D-6) as
P
q
a eq
25	.	0	025	.	0 		
	
(C-14)
The same method can be used to show how the shear span is calculated for a beam
with fixed supports.
P
q
a eq
7	.	0	02	.	0 		
	
(C-15)

-- 175 of 236 --



-- 176 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 D1
APPENDIX D Energy preservation while varying
transformation factors
A consequence of varying the transformation factors, and thereby the mass, is that the
kinetic energy will drop. Since energy cannot disappear the kinetic energy is
preserved in the SDOF-model by using the following calculation scheme.
The procedure follows the central difference method described in Appendix A until
the mass changes. When it does, the previous mass is used to obtain the deformation
that should have been if the mass had been constant i.e. if mass changes at time t:
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
	


	 t	t
t	t	t	t
t	t
t	t
t	t u
t
c
t
m
t
u	m
R	F
t
c
t
m
u 2
2
2 2
1
2
1
1
2
1
(D-1)
The mean velocity between time t and t+
t can be found as
t
u	u
u t	t	t
t 

 		
	
(D-2)
The kinetic energy is now
2
2
,
t	t
t	k
u	m
W 
	
(D-3)
This is a slightly larger or smaller value than what it should be because of the change
of mass in the system. Therefore the velocity is altered so that the same kinetic energy
is maintained:
t	m
t	m
t
t
t
t	t u
m
m
u	u
,
1	,	1
'

 	 	 			
(D-4)
This velocity can be used to calculate the displacement at time t+
t as
t	t	t	t u	t	u	u '					 		
(D-5)
ut+
t
ut
ut-
t
t	u
tu
u’t+
t
The deformation
obtained while
preserving energy
The deformation
without energy
preservation
t
u
t
u
Figure D.1. Calculation scheme for preserving the energy. A new velocity	t	u		 at time
t is calculated to preserve the kinetic energy and is then used to find the
deformation u’t+
t at time t+
t.

-- 177 of 236 --



-- 178 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 E1
APPENDIX E Energy balance for other load cases
E.1 Introduction
While varying transformation factors in the SDOF system a sudden loss of energy
occurs which is due to the change in mass, i.e. change in kinetic energy. Due to this
problem a method to preserve the energy is introduced. The difference between
energy levels when not preserving energy, when preserving energy and the energy
obtained in the FE analysis is presented in the graphs below for different load cases
and beams. Where load case 0 have a peak pressure Ppeak = 10 Mpa and load duration
t
 = 0.56 ms, load case 1 have a peak pressure Ppeak = 5 Mpa and load duration
t
 = 1.12 ms and load case 3 have a peak pressure Ppeak = 1.25 Mpa and load duration
t
 = 4.48 ms.
They are presented for two different beams; a beam with the length L = 3 m with the
width b = 1 m and the depth h = 0.4 m and a beam with the length L = 5 m and with
the same cross-section.
E.2 Beam L=3 m
E.2.1 Elastic load case 0
SDOF without energy preservation
0
2000
4000
6000
8000
10000
12000
14000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot

-- 179 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
E2
SDOF with energy preservation
FE analysis
0
2000
4000
6000
8000
10000
12000
14000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
0
2000
4000
6000
8000
10000
12000
14000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
We hand

-- 180 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 E3
E.2.2 Elastic load case 3
SDOF without energy preservation
SDOF with energy preservation
0
2000
4000
6000
8000
10000
12000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wk
Wi
Wtot
We
0
2000
4000
6000
8000
10000
12000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
We
Wtot

-- 181 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
E4
FE analysis
E.2.3 Plastic load case 3
SDOF without energy preservation
0
2000
4000
6000
8000
10000
12000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
We hand
0
1000
2000
3000
4000
5000
6000
7000
8000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot

-- 182 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 E5
SDOF with energy preservation
FE analysis
0
1000
2000
3000
4000
5000
6000
7000
8000
9000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
0
1000
2000
3000
4000
5000
6000
7000
8000
9000
10000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
We hand

-- 183 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
E6
E.2.4 Elasto-plastic load case 3
SDOF without energy preservation
SDOF with energy preservation
0
2000
4000
6000
8000
10000
12000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
0
2000
4000
6000
8000
10000
12000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot

-- 184 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 E7
FE analysis
0
2000
4000
6000
8000
10000
12000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
We hand elastic
We hand plastic

-- 185 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
E8
E.3 Beam L=5 m
E.3.1 Elastic load case 1
SDOF without energy preservation
SDOF with energy preservation
0
5000
10000
15000
20000
25000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
0
5000
10000
15000
20000
25000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot

-- 186 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 E9
FE analysis
E.3.2 Plastic load case 1
SDOF without energy preservation
0
4000
8000
12000
16000
20000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
We hand
0
4000
8000
12000
16000
20000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot

-- 187 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
E10
SDOF with energy preservation
FE analysis
0
4000
8000
12000
16000
20000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
0
4000
8000
12000
16000
20000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
We hand

-- 188 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 E11
E.3.3 Elasto-plastic load case 1
SDOF without energy preservation
SDOF with energy preservation
0
5000
10000
15000
20000
25000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
0
5000
10000
15000
20000
25000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot

-- 189 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
E12
FE analysis
0
2000
4000
6000
8000
10000
12000
14000
16000
18000
20000
0 10 20 30 40 50
Energy,
 W [J]
Time, t [ms]
Wi
We
Wk
Wtot
We hand elastic
We hand plastic

-- 190 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 F1
APPENDIX F Transformation factors for
different load cases and dimensions
F.1 Introduction
Here values of the transformations factors
m,
f and
mf for load case 1, 2 and 3 are
presented. Where load case 1 have a peak pressure Ppeak = 5 Mpa and load duration
t
 = 1.12 ms, load case 2 have a peak pressure Ppeak = 2.5 Mpa and load duration
t
 = 2.24 ms and load case 3 have a peak pressure Ppeak = 1.25 Mpa and load duration
t
 = 4.48 ms.
They are presented for two different beams; a beam with the length L = 3 m with the
width b = 1 m and the depth h = 0.4 m and a beam with the length L = 5 m and with
the same cross-section.
F.2 Beam L=3 m
F.2.1 Load case 1
Elastic
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory
m
m theory
mF
mF theory
F
F theory
Plastic
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory
m
m theory
mF
mF theory
F
F theory

-- 191 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
F2
Elasto-plastic
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory elastic
km theory plastic0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory elastic
kf theory plastic0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory elastic
kmf theory plastic
m
m theory elastic
m theory plastic
F
F theory elastic
F theory plastic
mF
mF theory elastic
mF theory plastic
F.2.2 Load case 2
Elastic
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory
m
m theory
mF
mF theory
F
F theory
Plastic
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory
m
m theory
mF
mF theory
F
F theory

-- 192 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 F3
Elasto-plastic
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory elastic
km theory plastic0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory elastic
kf theory plastic0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory elastic
kmf theory plastic
m
m theory elastic
m theory plastic
F
F theory elastic
F theory plastic
mF
mF theory elastic
mF theory plastic
F.2.3 Load case 3
Elastic
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory
m
m theory
mF
mF theory
F
F theory
Plastic
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory
m
m theory
mF
mF theory
F
F theory
Elasto-plastic
0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory elastic
km theory plastic0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory elastic
kf theory plastic0
0.2
0.4
0.6
0.8
1
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory elastic
kmf theory plastic
m
m theory elastic
m theory plastic
F
F theory elastic
F theory plastic
mF
mF theory elastic
mF theory plastic

-- 193 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
F4
F.3 Beam L=5 m
F.3.1 Load case 1
Elastic
0.0
0.2
0.4
0.6
0.8
1.0
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory0.0
0.2
0.4
0.6
0.8
1.0
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory0.0
0.2
0.4
0.6
0.8
1.0
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory
m
m theory
mF
mF theory
F
F theory
Plastic
0.0
0.2
0.4
0.6
0.8
1.0
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory0.0
0.2
0.4
0.6
0.8
1.0
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory0.0
0.2
0.4
0.6
0.8
1.0
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory
m
m theory
mF
mF theory
F
F theory
Elasto-plastic
0.0
0.2
0.4
0.6
0.8
1.0
0 	10 	20 	30
m(t)
Time, t [ms]
km
km theory elastic
km theory plastic0.0
0.2
0.4
0.6
0.8
1.0
0 	10 	20 	30
f(t)
Time, t [ms]
kf
kf theory elastic
kf theory plastic0.0
0.2
0.4
0.6
0.8
1.0
0 	10 	20 	30
mf(t)
Time, t [ms]
kmf
kmf theory elastic
kmf theory plastic
m
m theory elastic
m theory plastic
F
F theory elastic
F theory plastic
mF
mF theory elastic
mF theory plastic

-- 194 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 G1
APPENDIX G Deformations and moment and
shear distributions over time
The deformation shape and the moment and shear distributions are described in
Chapter 4, 5 and 6. This appendix gives a more comprehensive picture of how the
deformation changes with time. The corresponding moment and shear distributions
are shown together with the deformation shape for simply supported beams assuming
linear elastic, ideal plastic and elasto-plastic response. The load case that has been
used here is load case 1, which has a peak pressure of 5000 kPa with a time duration
of 1.12 ms. The intention here is to show the variation and this is the same for all the
load cases although it is more extreme for highly intense loads.
Firstly the variation in time of displacement and moment in midpoint and the support
reaction is shown. Further, the normalised deformation shape and the moment and
shear distribution are shown for different times. The time interval is concentrated in
the early phase since this deviates most from the expected deformations. The results
are only shown for the first oscillation.
G.1 Elastic
t=0.1 ms
t=0.2 ms
-30
-20
-10
0
10
20
30
0 5 10 15 20
Midpoint displacment,
 us [mm]
Time, t [ms]
-2000
-1500
-1000
-500
0
500
1000
1500
2000
0 5 10 15 20
Support reaction,
 Vs [kN]
Time, t [ms]
-1000
-500
0
500
1000
0 5 10 15 20
Midpoint moment,
 Mf [kNm]
Time, t [ms]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 195 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
G2
t=0.3 ms
t=0.4 ms
t=0.5 ms
t=0.6 ms
t=0.7 ms
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 196 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 G3
t=0.8 ms
t=0.9 ms
t=1 ms
t=1.5 ms
t=2 ms
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 197 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
G4
t=2.5 ms
t=3 ms
t=3.5 ms
t=4 ms
t=4.5 ms
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
600
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
600
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
0
200
400
600
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
600
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 198 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 G5
t=5 ms
t=6 ms
t=7 ms
t=8 ms
t=9 ms
0
200
400
600
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
0
200
400
600
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
0
200
400
600
800
1000
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
600
800
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
0
200
400
600
800
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 199 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
G6
t=10 ms
t=11 ms
t=12 ms
t=13 ms
G.2 Ideal plastic
-200
0
200
400
600
800
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
600
800
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
0
200
400
600
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
600
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
0
10
20
30
0 5 10 15 20
Midpoint displacment,
 us [mm]
Time, t [ms]
-2000
-1500
-1000
-500
0
500
1000
1500
2000
0 5 10 15 20
Support reaction,
 Vs [kN]
Time, t [ms]
-1000
-500
0
500
1000
0 5 10 15 20
Midpoint moment,
 Mf [kNm]
Time, t [ms]

-- 200 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 G7
t=0.1 ms
t=0.2 ms
t=0.3 ms
t=0.4 ms
t=0.5 ms
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-2000
-1000
0
1000
2000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 201 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
G8
t=0.6 ms
t=0.7 ms
t=0.8 ms
t=0.9 ms
t=1 ms
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 202 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 G9
t=1.5 ms
t=2 ms
t=2.5 ms
t=3 ms
t=3.5 ms
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 203 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
G10
t=4 ms
t=4.5 ms
t=5 ms
t=6 ms
t=7 ms
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 204 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 G11
t=8 ms
t=9 ms
t=10 ms
t=11 ms
t=12 ms
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 205 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
G12
t=13 ms
t=14 ms
G.3 Elasto-plastic
t=0.1 ms
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
0
10
20
30
40
0 5 10 15 20
Midpoint displacment,
 us [mm]
Time, t [ms]
-2000
-1500
-1000
-500
0
500
1000
1500
2000
0 5 10 15 20
Support reaction,
 Vs [kN]
Time, t [ms]
-1000
-500
0
500
1000
0 5 10 15 20
Midpoint moment,
 Mf [kNm]
Time, t [ms]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 206 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 G13
t=0.2 ms
t=0.3 ms
t=0.4 ms
t=0.5 ms
t=0.6 ms
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 207 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
G14
t=0.7 ms
t=0.8 ms
t=0.9 ms
t=1 ms
t=1.5 ms
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 208 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 G15
t=2 ms
t=2.5 ms
t=3 ms
t=3.5 ms
t=4 ms
-200
0
200
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 209 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
G16
t=4.5 ms
t=5 ms
t=6 ms
t=7 ms
t=8 ms
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 210 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 G17
t=9 ms
t=10 ms
t=11 ms
t=12 ms
t=13 ms
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 211 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
G18
t=14 ms
t=15 ms
t=16 ms
t=17 ms
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]
-200
0
200
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-500
0
500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
0.2
0.4
0.6
0.8
1
0 1 2 3
Deformation shape
Coordinate, x [m]

-- 212 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 H1
APPENDIX H INFLUENCE OF DAMPING
In the elastic case, it is seen that the moment and shear demand is underestimated
when using an equivalent static load. However, the analyses in Section 5.2 do not
consider damping and it is shown that this has a significant impact on the result. This
Appendix will firstly show the moment and shear envelops for the undamped case
Section H.1, and then for damped case, Section H.2. Some basic theory of how the
damping is introduced is also presented in Section H.2.
Three different cross-sections with elastic response have been used. The height is
varied while the amount of reinforcement is kept constant. The level of reinforcement
is also kept constant, see Figure H.1. The investigation is performed with the load
case 1 and 3, described in Section 3.2Error! Reference source not found..
As
h
Pc
ta	1.0 m Time, t
Pressure, PReinforcement amount,	.	const
h	b
As 


	
c
Figure H.1. Description of the used cross sections and the load
The results have been compared and shown as the ratio between peak pressure and
equivalent static load for the section. Input data is shown in Table H.1.
Table H.1. Investigated cross sections and loads.
h [mm] As [mm2] qeq [kN/m2] Pc [kPa] Pc/qeq
400 1571 539 1250 2.32
300 1178 384 1250 3.26
200 785 228 1250 5.48
400 1571 539 5000 9.27
300 1178 384 5000 13.02
200 785 228 5000 21.93
Firstly, the envelops and their relative error
 when not considering damping is shown
for the different ratios. The envelops are taken for one oscillation. The value of the
support reaction obtained by using Fortifikationsverket’s approach is also shown next
to the diagrams.

-- 213 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
H2
H.1. Undamped case
Ratio Figure Relative error
32	.	2	
eq
c
q
P
%	9	.	8
607
607	661 


	
kN	1010		FortV
s	V
%	6	.	4
809
809	847 


	
26	.	3	
eq
c
q
P
%	7	.	19
432
432	517 


	
%	2	.	27
576
576	733 


	
kN	819		FortV
s	V
0
200
400
600
800
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]
0
100
200
300
400
500
600
700
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]

-- 214 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 H3
Ratio Figure
48	.	5	
eq
c
q
P
%	4	.	26
257
257	325 


	
%	0	.	69
342
342	578 


	
kN	620		FortV
s	V
27	.	9	
eq
c
q
P
%	9	.	40
607
607	855 


	
%	5	.	85
809
809	1501 


	
kN	2060		FortV
s	V
0
100
200
300
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
0
200
400
600
800
1000
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 1 2 3
Shear force,
 V [kN]
Coordinate, x [m]

-- 215 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
H4
Cross-section Load case 1
02	.	13	
eq
c
q
P
%	6	.	48
432
432	642 


	
%	120
576
576	1266 


	
kN	1870		FortV
s	V
93	.	21	
eq
c
q
P
%	9	.	52
257
257	393 


	
%	148
342
342	847 


	
kN	1640		FortV
s	V
0
100
200
300
400
500
600
700
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
0
100
200
300
400
0 1 2 3
Moment,
 M [kNm]
Coordinate, x [m]
-1000
-500
0
500
1000
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]

-- 216 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 H5
H.2 Damped case
A real structure always has some damping but this is not considered in the thesis since
it should not affect the initial result considerably. Since the moment and shear force
are much higher than expected in the linear elastic case, a check has been performed
to see if the peaks are significantly affected by damping. The damping that has been
used is 5 % Rayleigh damping.
Rayleigh damping is defined with two factors
 and
. These relate the damping ratio
to every mode.
 tends to damp lower modes and
 tends to damp higher modes. The
damping ratio for mode i can according to Craig Jr. and Kurdila (2006) be written as
(H-1)
where
i is the damping ratio for mode i. Damping is introduced with a damping
matrix, which depends on the mass and stiffness matrices
(H-2)
In explosion design many frequency modes are of interest; for instance, the rigid body
motion can only be described by using many modes. It is of interest to see how much
the peaks in support reactions and moments are influenced by using a damping ratio
of 5 %. Rayleigh damping is constructed so that it will have a lower value between the
two specified values and higher value for higher or lower modes.
An example of how the - and -factors for the normal cross-section with subjected
to load case 1 is shown below.
The period of the oscillations is rather regular and hence the mode frequency can be
calculated. It is estimated that 5 peaks occur during approximately 20 ms for load case
1. This would give a natural period of
(H-3)
And a corresponding natural frequency of
(H-4)
The damping ratio for this mode can be set to 5% but in order to not overdamp this
mode a factor of 1.5 has been applied to the frequency.
(H-5)
All modes below this frequency are of interest and the fundamental mode of vibration
can be written as
2	2
i
i
i

	


 
	
K	M	C 			
	
	
ms	4
5
20
2 		T
rad/s	1571
10	4
2	2 3
2
2 

	 

	
 T
rad/s	2356	1571	5	.	1	2 		
	

-- 217 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
H6
(H-6)
The damping ratio is also set to 5 % for this mode. By using eq. (2-46) with mode
frequencies from (H-4) and (H-6) the input parameters for ADINA can be found as.
(H-7)
Figure H.2. Typical Rayleigh damping used for the cross-sections.
rad/s	192
4	.	0	2400
10	33	.	5	10	547	.	5
3	/
3	9
2
2
2
2
1 

		
	


	
 l	m
EI
l
5
10	92	.	3
79	.	17

	



0%
2%
4%
6%
8%
10%
0 100 200 300 400 500 600
Damping ratio,

[%]
Natural frequency, f [Hz]

-- 218 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 H7
Ratio Figure Relative error
32	.	2	
eq
c
q
P
%	5
607
607	576 	


	
kN	1010		FortV
s	V
%	18
809
809	667 	


	
26	.	3	
eq
c
q
P
%	3
432
432	443 


	
%	6
576
576	544 	


	
kN	819		FortV
s	V
0
100
200
300
400
500
600
700
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
0
100
200
300
400
500
600
700
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]

-- 219 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
H8
Ratio Figure
48	.	5	
eq
c
q
P
%	3
257
257	264 


	
%	4
342
342	357 


	
kN	620		FortV
s	V
27	.	9	
eq
c
q
P
%	12
607
607	678 


	
%	18
809
809	951 


	
kN	2060		FortV
s	V
0
100
200
300
400
500
600
700
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
0
100
200
300
400
500
600
700
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]

-- 220 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 H9
Ratio Figure Relative error
02	.	13	
eq
c
q
P
%	17
432
432	506 


	
%	30
576
576	748 


	
kN	1870		FortV
s	V
93	.	21	
eq
c
q
P
%	30
257
257	275 


	
%	29
342
342	441 


	
kN	1640		FortV
s	V
0
100
200
300
400
500
600
700
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]
0
100
200
300
400
500
600
700
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
-1500
-1000
-500
0
500
1000
1500
0 	1 	2 	3
Shear force,
 V [kN]
Coordinate, x [m]

-- 221 of 236 --



-- 222 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 I1
APPENDIX I Detailed Analysis
I.1 Orientation
The choice of material model influences the result considerably as seen in previous
Chapters 4 to 6. The choice of Young’s modulus affects the wave speed, which in turn
changes the deformation shape. It has also been shown that the magnitude of the
support reaction depends on the initial stiffness, which may be the uncracked
stiffness. The deformation shape then affects the simplified models significantly and
thereby the result. The non-linearity of a reinforced concrete beam is above modelled
by a simplified plastic bi-linear relationship.
In order to obtain better accuracy of the solutions the model could be refined. For this
purpose a 2D-solid finite element model is going to be used, explicitly modelling
concrete cracking and reinforcement yielding. Furthermore, the crack pattern will be
investigated and perhaps intentions of a direct shear crack can be detected.
The previously used reinforced concrete beam will be further examined and compared
to the solution in previous chapter and differences will be discussed.
Due to this thesis time limitation, the detailed analysis was never completed. The
model assuming bond slip between concrete and reinforcement bars was created but
provided strange results. Therefore, results will only be shown for the full bond model
in order to give a brief discussion of encountered problems and results.
I.2 Modelling technique
I.2.1 Introduction
There is a possibility to use a concrete model in ADINA in which non-linearity of the
concrete is taken into account. This is of interest because the beam is going to be
modelled as detailed as possible. It requires much more information than a linear
elastic material model. Therefore, it is not often used unless the problem requires
great accuracy. However, it provides the designer with crack patterns, and possibility
of reinforcement yielding, making it a more complicated model. The modelling
technique follows the procedure in Johansson and Lantz (2009), which considers
restraint cracking of concrete edge beams, and will be described below. Their way of
modelling can be used with some modifications for this problem.
I.2.2 Geometry
The beam that is going to be analysed has the same dimensions as the example carried
out in Chapter 3, see Figure I.1. It will be modelled with a symmetric boundary
condition, only allowed to deform in vertical direction without rotations, in the centre
since the two sides are symmetric. The support at the edges is difficult to model
appropriately to get convergence. Therefore, an elastic material has been used closest
to the support, indicated with a shaded area in Figure I.1. The beam is simply
supported, which means that only the vertical movement is prevented. This will not
influence the result significantly and it avoids concrete crushing locally.

-- 223 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
I2
L=1.5
m
h=0.4
Figure I.1. The model of the simply supported reinforced concrete beam.
The concrete in the beam will be modelled with four node 2D-solid plain stress
elements, quadratic with side lengths 50 mm. The numbers of elements cannot be
increased in the vertical direction due to node limitations of 900 nodes. Since it is of
interest to investigate a direct shear crack close to the support, the mesh has been
refined to 10 mm in longitudinal direction while keeping the length in the vertical
direction 50 mm.
The steel reinforcement is modelled with two node truss elements with the same
length as the concrete elements. They are modelled on the actual level of the
reinforcement in the top and bottom with distributed areas. The connection between
the steel reinforcement and the concrete is made with either full bond, where the
reinforcement bars and concrete share a node or with non-linear springs, described in
Section I.2.5.
I.2.2 Loading and solution method
The beam will be subjected to the archive bomb, load case 1, see Section 3.2.
The analysis will be performed with an implicit method since the explicit method has
given strange solutions in Chapter 3. The explicit method would otherwise be
preferred for this type of problem since it would reduce the calculation effort. The
composite bathe method for implicit integration is used since ADINA (2010)
recommends it. The time step must be set to a very small value in order to get
convergence. Convergence was found for a time step of 1 ms.

-- 224 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 I3
I.2.3 Concrete
Concrete is weak in tension and strong in compression. This can be shown with the
uniaxial stress-strain relationship in Figure I.2.
c
c
fct
fcc
ct	
ctu	
cu	
cc
Figure I.2. Uniaxial stress-strain relationship for concrete
Some different parameters must be input in ADINA in order to describe the material
response. The values of strengths, ultimate strengths and the corresponding strains can
be input as they are but the ultimate tensile strain in concrete is a function of fracture
energy Gf, Young’s modulus Ec, concrete tensile strength fct, a length. The relationship
can be described as
ct	ctu	
	
	 		
(9-1)
Where
is the input variable in ADINA defined as
 	 98	.	7
10	9	.	2	05	.	0
10	33	50	2	2
2	6
9
2 
	
		


	

ct
c	f
f	l
E	G
	
(9-2)
The length for perfectly bonded reinforcement bars is described with the average
crack distance, sm , Johansson (2000). This can be found from Eurocode 2.
7	.	1
max	s
sm 	
(9-3)
eff	p
b	d
k	k	k	c	k	s
.
4	2	1	3	max

					
(9-4)
eff	c
s	s
eff	p A
A	A
.
.
'	

		
(9-5)
s	s	eff	c	eff	c A	A	b	h	A '	.	. 				
(9-6)
 	








h
x	h
d	h
h u
eff	c
5	.	0 3
5	.	2
min	.	
(9-7)

-- 225 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
I4
where, h is the height of the cross-section, d is the effective depth, xu is the height of
the compression zone in the ultimate limit state, b is the width, As and A’s are the area
of the top and bottom reinforcement respectively, db is the bar diameter and c is the
concrete cover. The factors k are
value	d	recommende	425	.	0
value	d	recommende	4	.	3
bending	for	5	.	0
conditions	bond	good	for	8	.	0
4
3
2
1




k
k
k
k
(9-8)
Inserting values will eventually give the mean crack distance of
mm	154		m	s	
(9-9)
This will give the input value for ADINA as
 	 1	.	4
10	9	.	2	154	.	0
10	33	80	2	2
2	6
9
2
1,

	
		


	

ct	el
c	f
f	l
E	G
	
(9-10)
If the bond is described with a stress-slip relationship the length should be taken as the
element length, Johansson (2000). The element length should be taken as the element
length perpendicular to the crack propagation see Figure I.3.
lel.2
lel,1
l=lel,1
l=lel,2
Figure I.3. Definition of the element length for different crack directions through an
element.
The cracks will propagate mainly vertically and therefore the element length that
should be used is the longitudinal length. This requires different element lengths for
the
 value model since the mesh is refined closer to the supports.
 	 98	.	7
10	9	.	2	05	.	0
10	33	80	2	2
2	6
9
2
1,
1 
	
		


	

ct	el
c	f
f	l
E	G
	
(9-11)
 	 24	.	39
10	9	.	2	01	.	0
10	33	80	2	2
2	6
9
2
2,
2 
	
		


	

ct	el
c	f
f	l
E	G
	
(9-12)

-- 226 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 I5
The compressive ultimate stress
cu can be described as
 	 cc	cu f
k
k


	
 2	1
2
	

	
(9-13)
where
cc
c
c f
E	k 1
05	.	1

	
(9-14)
1c
cu


 	
(9-15)
cu is the ultimate strain and
c1 is the strain at maximum stress Engström (continuous
beams). According to Eurocode 2, CEN (2004)
‰	5	.	3	and	‰	0	.	2	1 	 cu	c	

		
(9-16)
which gives
MPa	8	.	16		cu	
	
(9-17)
The input variables in ADINA are shown in Table I.1.
Table I.1. Input variables for the concrete material model in ADINA.
fc - 20 MPa	
 39.24
fcu - 16.8 MPa Gf 80 Nm/m2
fct 2.9 MPa	
c1 - 2.0 ‰
Ec 33 GPa	
cu - 3.5 ‰
 4.1	
 2400 kg/m3
 7.98	
 0.2
I.2.4 Reinforcement
The steel reinforcement has a simpler stress strain relationship and it can be explained
by a bilinear material model similar to the idealised elasto-plastic model used in
Chapter 4. It is explained by Table I.2. The steel reinforcement is modelled with a
small strain hardening in order to avoid convergence problems in the FE-analysis.
c
c
fct
fcd
ct	
cu
cu	
c1
fcu

-- 227 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
I6
Table I.2. Input variables for the steel reinforcement material model in ADINA.
fyd 435 MPa
E 200 GPa
E’ 0.2 GPa
u 10 %
 7800 kg/m3
 0.3
I.2.5 Bond between reinforcement and concrete
Bond between steel reinforcement and concrete depends on mechanical interlocking
and friction. It can be explained by bond stress-slip relationship according to
Figure I.4. The bond can either fail by pull-out of the reinforcement bars or transverse
splitting of the concrete. This relationship does only consider pull out of the
reinforcement.
b
s
s1
max
s2 s3
0.4
max
Figure I.4. Bond stress-slip relationship for concrete and steel reinforcement bars.
The initial bond stress before the maximum stress is reached can according to CEB-
FIP (1993) be expressed as
4.0
1
max 





	 s
s
b	

		
(9-18)
The input parameters are described in Table I.3 for good bond conditions, CEB-FIP
(1993)
Table I.3. Data for bond stress between reinforcement and concrete
max	7	.	13	5	.	2 	ck	f	 MPa
s1 1.0 mm
s2 3.0 mm
s3 Clear rib spacing = 7.0 mm


fyd
fyd
E
y	
u
E’

-- 228 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 I7
In a simplified model, full bond between the reinforcement and the concrete can be
assumed. This is achieved in ADINA by making sure that the nodes of the
reinforcement bars and the concrete nodes coincide.
However, in a more detailed model, the bond between steel reinforcement and
concrete needs to be modelled in ADINA with non-linear springs. To model this, the
reinforcement nodes are placed 2 mm displaced in the horizontal direction from the
concrete nodes they are bonded with, see Figure I.5. The reinforcement nodes are then
fixed in the vertical direction relative to the concrete nodes and are therefore forced to
have the same displacement in this direction. In the horizontal the reinforcement is
connected to the concrete nodes with the non-linear springs to simulate the bond-slip
relation. The relationship described in Figure I.4. with data from Table I.3. was used
for the non-linear springs. The springs require a force and therefore the stress must be
multiplied with the total surface area i.e.
el	b	surf	b	b l	n	A	F 						
		
	
		
(9-19)
In the end nodes only half of the force will be used since the length is only half the
length.
Concrete node
Reinforcement node
2 mm
Figure I.5. The non-linear springs connects the reinforcement to the concrete with a
bond stress-slip relationship. The springs are actually placed horizontal
to the reinforcement node but are shown above for clarity.
I.2.6 Verification
For verification of the 2D-solid element model in ADINA, the displacement results
from elastic beam elements have been used. 2D-solids provide a similar initial
deformation shape and size for a state II beam modelled with equivalent Young’s
modulus. The wave is propagating somewhat differently and it is probably due to this
fact that the solutions diverge slightly, see Figure I.6. The wave propagation is
different for a shear wave, see Section 3.5.4. The correct wave form is hard to
determine since ADINA must use the critical time step in order to model the wave
propagation correctly. This time step has not been used in the comparisons made here
since it is hard to determine for a shear wave. The midpoint displacement is almost
the same although a slight divergence in the structures Eigen period is present in
Figure I.7.

-- 229 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
I8
Figure I.6. Initial deformation between 2D-solid elements and beam elements
Figure I.7. Midpoint displacement for the two element types.
The material model must also be verified in order to use it for dynamic analyses.
Verification is only done for the full bond model, which is the only model that
dynamic results are presented for. A study of a single element is performed and gave
the input values back. Another verification follows and is performed with an
incremented static load until failure. The moment capacity is calculated in Section 3.3
to be
kNm	227		Rd	M	
(9-20)
Cracks will occur when the stress in the lower fibre is greater than the concrete tensile
stress. If the influence of reinforcement is neglected it can be calculated as
		




 			 el	ct	el	b	ct	crit W
h
f	W	f	M 1000
1	,
kNm	93
6
4	.	0
1000
400
1	10	9	.	2
2
6 		




 		
(9-21)
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
0 1 2 3
Deformation,
 u [mm]
Coordinate, x [m]
2D-solids
Beam elements
-25.0
-20.0
-15.0
-10.0
-5.0
0.0
5.0
10.0
15.0
20.0
25.0
0 10 20 30 40 50
Midpoint displacment,
 us [mm]
Time, t [ms]
2D-solids
Beam elements

-- 230 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 I9
The moment My that causes the reinforcement to yield is calculated with a state II
model with steel strain equal to the yield strain. The concrete is assumed to remain
elastic and the concrete stress can therefore be calculated. From force equilibrium
x	d
x	bx	E
A	f s	c
c	c
s	yd 
		
	
	
 with
2
:	
(9-22)
assuming no normal force is present, the height of compression zone can be calculated
as
mm	2	.	74	2
2
	








		 b	E
d	A	f
b	E
A	f
b	E
A	f
x
y	c
s	yd
y	c
s	yd
y	c
s	yd

	
	
(9-23)
And the moment My can be determined as
 	  	 	kNm	205
3	2
2
		

 x	d	A	f
x
x	d
bx	E
M s	yd
y	c
y

(9-24)
The moment in mid span is plotted against the corresponding curvature Figure I.8.
The presented theoretical values are also shown here for comparison. The moment has
been calculated by using the stress distribution in the concrete and the stress
reinforcement. The curvature is taken as the strain,
, in the outermost fibre divided by
the height of the compressed zone, x. This assumes a linear distribution of strain.
 	
A
dA	z	M	
	
(9-25)
x


r
1
(9-26)
These have reasonable accuracy. The crack initiation is more obvious when
investigating the appearance of cracks in the result window and starts at M = 88 kNm.
Yield occurs in the reinforcement at M = 217 kNm. This is also reasonable. The
ultimate capacity is higher than expected. A small steel hardening has been
introduced, and can be one of the reasons. Another reason is that it seems like the
beam has too high fracture energy.

-- 231 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
I10
Figure I.8. Moment-curvature relationship for section in mid span of the reinforced
concrete model subjected to a static load. The crack patterns for the
times denoted with numbers are shown in Figure I.9.
The crack pattern for the beam statically loaded until failure is shown in Figure I.9.
The crack patterns are shown for the times shown in Figure I.8 above. It can be seen
that cracks form close to the support, which is modelled with an elastic material, for a
very low load. This is not expected. Cracking starts in the centre. It can be seen that
the cracks have a small distance between them. The distance is larger for fully
developed cracks.
1
2
3
4
5
(a) (b)
Figure I.9 Crack pattern for a statically loaded reinforced concrete beam. a) open
cracks, b) fully developed cracks.
0
50
100
150
200
250
300
0 2 4 6 8 10 12 14
Moment,
 M [kNm]
Curvature, 1/r [10-3 m-1]
1
2
3
4
5

-- 232 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 I11
I.3 Results
Due to this project’s time limitation the results of the detailed analysis is not complete
and needs to be further investigated in future studies. Nevertheless, they are
incorporated in this thesis in order to provide some guidelines and observations made
using the concrete model available in ADINA. Several problems were encountered
when loading the reinforced concrete beam with a very high impulsive load. The load
cases used when examining the behaviour of an idealised reinforced concrete beam
using beam elements in Chapters 3 and 4 were too impulsive and caused early failure.
The failure occurred close to the support and depended on the layout of the elastic
area. Convergence was not achieved when the whole structure was modelled with the
concrete model.
The failure close to the support is not believed to be a direct shear crack due to
problems modelling the support. Several support models were tried out, Figure I.10:
a). Support in mid plane, with and without elastic materials.
b). Modelling of an extended support with boundary condition further away.
c and d). Increasing size of elastic area, both vertically and horizontally.
Pressure, P
time, t
i
(a) 	(b)
(c) 	(d)
Figure I.10. Different support layouts give different results.
Schematic pictures of the failures at the supports are shown in Figure I.11.

-- 233 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
I12
Pressure, P
time, t
i
Pre
i
(a) 	(b)
(c) 	(d)
Figure I.11. Schematic picture of how cracks developed close to the support or the
elastic zone.
For a smaller impulse intensity, i = 1000 Pa•s, see Figure I.12, failure close to the
supports is not initially obtained and the concrete beam get a behaviour closer to the
expected. Since no expected behaviour was found for the model with perfect bond or
the model assuming a bond slip relationship for highly impulsive loads, results for the
less intense load will only be shown for perfectly bonded reinforcement.
Pressure, P
Time, t
Ppeak=1785 kPa
t
t=1.12 ms
Figure I.12. The load used for the detailed reinforced concrete model.
When the response of the detailed analysis is compared against the corresponding
SDOF system and a FE-analysis with elasto-plastic beam elements the real concrete
behaviour gives a smaller displacement, see Figure I.13. A slight divergence is
expected since the simplified model uses an equivalent stiffness, compare Figure 3.3.
The displacement for the SDOF model is solved with load-mass transformation factor
0.667 which gives a slightly different period but a reasonable description of the
maximum value as seen in Section 4.1.3.

-- 234 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103 I13
Figure I.13. Midpoint displacement for impulse loading according to Figure I.12.
The initial displacement shape, shown in Figure I.14, is similar to what has been seen
for the elasto-plastic case. It is shown with symmetry across mid span. The wave form
can be identified after 0.5 ms but disappears and the deformed shape of the beam will
be more similar to an elastic bending shape. There is also a tendency to a rigid body
motion in the beginning. The displacement at the support is non-zero since the chosen
line is the centre line and will consequently be compressed.
Figure I.14. Displacement shape for the concrete model for impulse loading
according to Figure I.12.
The reinforcement will just yield before the structure will oscillate back. It fails close
to the support when the structure oscillates back, which supports the hypothesis that
there is modelling issues close to the support and that the crack is not a direct shear
crack when the structure is subjected to a higher load.
The crack pattern for the statically loaded reinforced concrete beam is shown in
Figure I.15 for different times. This figure shows all cracks to the left and fully
developed cracks to the right. Cracks occur at the boundary between the elastic area
-5
0
5
10
15
0 5 10 15 20
Midpoint deformation,
 us [mm]
Time, t [mm]
Concrete model
Elasto-plastic beam elements
SDOF
0
0.5
1
0 0.5 1 1.5
Deflection shape,
 u/u
max
 [-]
Coordinate, x [m]
0.5 ms
1 ms
1.5 ms
2 ms

-- 235 of 236 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2012:103
I14
and concrete area, which is not expected. The only interesting about crack pattern is
the order they occur. Bending cracks form closer to the support before in the centre.
This is a consequence of the rigid body motion. It can also be seen that reasonable
distance between the cracks is obtained although some small cracks occur between the
reinforcement and the bottom edge between the main cracks. No fully developed
cracks have formed in the centre part until 1 ms. It can also be seen that the cracks
close when the beam oscillates back.
0.5 ms
1.0 ms
2.0 ms
5.0 ms
8.0 ms
15.0 ms
(a) (b)
Figure I.15. Crack pattern for a) open cracks and b) fully developed cracks for
different times for impulse loading according to Figure I.12.
As mentioned in the introduction of the result section, more studies need to be done in
this subject. The result from this investigation can be taken into account and evaluated
further. Especially, the problem modelling the support must be solved in order to get a
better behaviour of the beam with real reinforced concrete behaviour.

-- 236 of 236 --