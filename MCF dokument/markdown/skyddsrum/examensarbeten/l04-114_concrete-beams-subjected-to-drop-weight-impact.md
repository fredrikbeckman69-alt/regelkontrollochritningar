---
title: "L04 114 Concrete Beams Subjected To Drop Weight Impact"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-114_concrete-beams-subjected-to-drop-weight-impact.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","beräkning","explosion","beam","model","that","figure"]
summary: "Department of Civil and Environmental Engineering Division of Structural Engineering Concrete Structures CHALMERS UNIVERSITY OF TECHNOLOGY Gothenburg, Sweden 2016 Master’s Thesis BOMX02-16-28 Concrete Beams Subjected to Drop Weight Impact Comparis..."
---

Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2016
Master’s Thesis BOMX02-16-28
Concrete Beams Subjected to Drop
Weight Impact
Comparison of experimental data and
numerical modelling
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
JIMMY LOVÉN
ERLA SARA SVAVARSDÓTTIR

-- 1 of 231 --



-- 2 of 231 --

MASTER’S THESIS BOMX02-16-28
Concrete Beams Subjected to Drop Weight Impact
Comparison of experimental data and numerical modelling
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
JIMMY LOVÉN
ERLA SARA SVAVARSDÓTTIR
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2016

-- 3 of 231 --



-- 4 of 231 --

I
Concrete Beams Subjected to Drop Weight Impact
Comparison of experimental data and numerical modelling
Master’s Thesis in the Master’s Programme Structural Engineering and Building
Technology
JIMMY LOVÉN
ERLA SARA SVAVARSDÓTTIR
© JIMMY LOVÉN & ERLA SARA SVAVARSDÓTTIR, 2016
Examensarbete BOMX02-16-28/ Institutionen för bygg- och miljöteknik,
Chalmers tekniska högskola 2016
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover:
Crack patterns of the experimental beam and the beam in LS-DYNA, respectively,
0.8 ms after impact.
Chalmers Reproservice
Göteborg, Sweden, 2016

-- 5 of 231 --



-- 6 of 231 --

I
Concrete Beams Subjected to Drop Weight Impact
Comparison of experimental data and numerical modelling
Master’s thesis in the Master’s Programme Structural Engineering and Building
Technology
JIMMY LOVÉN
ERLA SARA SVAVARSDÓTTIR
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
When a structure is subjected to impulse loading, e.g. in explosions, high wind loads or
collisions, the response can differ greatly compared to static loading. The purpose of
this thesis was therefore to increase the knowledge and understanding of the structural
response for concrete when subjected to impact loading. The current research available
is incomplete, which is why the Division of Structural Engineering at Chalmers has
ongoing research projects on this topic. The objective of this thesis was to support this
research by comparing the results from experiments, where a drop weight was hitting a
concrete beam, to numerical models of different complexity: using a 2DOF spring mass
model, and finite element models with beam elements and solid elements, respectively.
In order to extract results from the experiments, it was filmed using a high speed camera
and information was extracted using digital image correlation (DIC). These results were
then compared with a 2DOF model created in Matlab, a finite element model with beam
elements created in ADINA and a finite element model with 3D solid elements created
in LS-DYNA.
The comparisons showed good correspondence in general. The overall behaviour was
well captured in all models, even if the magnitude of e.g. displacements differed with
different magnitude depending on the complexity of the model. The crack pattern over
time in the LS-DYNA model showed very good resemblance to the experimental
results, although it had problems capturing the appearance of inclined shear cracks that
appeared in the experiment.
A general conclusion for all models was that they showed less stiff behaviour than the
beam in the experiment. The main reason for this is believed to be the difficulty or
inability to capture strain rate effects, which more significantly increases the strength
of the beam during the impact.
If, however, a simplified model to capture the influence of impact loading is desired,
mass-spring or FE-models using just beam elements will show sufficient results.
Key words: Impact loading, 2DOF, FEM, dynamic response, DIC, concrete beam,
impulse, transformation factors, crack patterns

-- 7 of 231 --

II
Betongbalkar utsatta för fallviktsbelastning
Jämförelse mellan experimentella data och numerisk modellering
Examensarbete inom masterprogrammet Structural Engineering and Building
Technology
JIMMY LOVÉN
ERLA SARA SVAVARSDÓTTIR
Institutionen för bygg- och miljöteknik
Avdelningen för konstruktionsteknik
Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
När en konstruktion utsätts för impulsbelastning, t. ex. via explosioner, höga vindlaster
eller kollisioner, kan responsen skilja sig väsentligt jämfört med en statisk belastning.
Syftet med detta examensarbete var därför att öka kunskapen och förståelsen för
responsen hos armerad betong utsatt för stötbelastning. Den forskning som finns
tillgänglig är ofärdig, varför avdelningen för konstruktionsteknik på Chalmers har
pågående forskning inom detta område. Målet med detta arbete var att stödja denna
forskning genom att jämföra resultat från experiment, där en fallvikt träffar en
betongbalk, med numeriska modeller av olika komplexitet, som en massa-fjädermodell
med två frihetsgrader och FE-modeller med balkelement respektive solida element.
För att få ut resultat från experimenten, filmades de med en höghastighetskamera och
information extraherades med hjälp av digital bildkorrelation (DIC). Dessa resultat
jämfördes sedan med en 2DOF-modell som skapats i Matlab, en FE-modell med
balkelement som skapats i ADINA och en FE-modell med 3D-element som skapats i
LS-DYNA.
Jämförelserna visade generellt sett bra korrelation. Det generella beteendet fångades på
ett bra sätt i alla modeller, även om magnituden av till exempel nedböjningar skiljde
beroende på komplexiteten på modellen. Sprickmönstret som funktion av tiden i
LS-DYNA-modellen visade väldigt stor likhet med resultaten från experimentet, även
om modellen hade problem att fånga uppkomsten av de lutande skjuvsprickorna, som
var framträdande i experimentresultaten.
En generell slutsats för alla modeller var att de visade mindre styvhet än balken i
experimentet. Det huvudsakliga skälet till detta antas vara svårigheter med att fånga
effekter som beror på töjningshastigheter, som ökar styrkan hos balken märkbart.
Om det emellertid är önskvärt med en relativt förenklad modell för att fånga dynamiska
effekter, visar både 2DOF- och FE-modeller med endast balkelement tillräckligt bra
resultat.
Nyckelord: Impulsbelastning, 2DOF, FEM, dynamisk respons, DIC, betongbalk,
impuls, transformationsfaktorer, sprickmönster

-- 8 of 231 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 III
Contents
ABSTRACT I
SAMMANFATTNING II
CONTENTS III
PREFACE VII
NOTATIONS VIII
INTRODUCTION 1
1.1 Background 1
1.2 Aim and objective 1
1.3 Method 2
1.4 Limitations 2
1.5 Thesis outline 3
MATERIAL AND STRUCTURAL RESPONSE 4
2.1 Introduction 4
2.2 Basic mechanics 4
2.3 Structural response of materials 5
2.3.1 Linear elastic material 5
2.3.2 Ideal plastic material 6
2.3.3 Elastoplastic material 7
2.4 Concrete 8
2.4.1 Plain concrete 8
2.4.2 Reinforced concrete 12
2.4.3 Plastic rotational capacity 14
DYNAMICS 16
3.1 Basic dynamics 16
3.1.1 Equivalent static load 18
3.1.2 Linear elastic material 18
3.1.3 Ideal plastic material 19
3.1.4 Elastoplastic material 20
3.2 Equation of motion 21
3.3 Single degree of freedom systems 22
3.3.1 Free vibration of an undamped SDOF system 22
3.3.2 Free vibration of a damped SDOF system 24
3.3.3 Forced excitation of SDOF systems 25
3.3.4 SDOF systems subjected to an impulse load Ik 29
3.4 2DOF systems 30
3.4.1 Classic impact theory 30
3.4.2 2DOF mass-spring systems 32

-- 9 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
IV
3.4.3 Free vibration of an undamped 2DOF system 34
3.5 Numerical methods 35
3.5.1 General 35
3.5.2 Central Difference Method 35
3.6 Strain rate effects 39
TRANSFORMATION OF STRUCTURAL MEMBERS TO SPRING-MASS
SYSTEMS 41
4.1 Introduction 41
4.2 Beam to SDOF 42
4.2.1 Conservation of the kinetic energy -
m 43
4.2.2 Conservation of the external energy –
F 45
4.2.3 Conservation of the internal energy –
k 46
4.2.4 Summary of the transformation factors 48
4.3 Drop weight to SDOF 49
4.3.1 Conservation of the kinetic energy -
m 50
4.3.2 Conservation of the external energy –
F 52
4.3.3 Conservation of the internal energy –
k 52
4.3.4 Summary of the transformation factors 52
4.4 Equivalent 2DOF-system 53
4.4.1 Maximum internal resistance, Rm 55
4.4.2 Transformation factors 57
EXPERIMENT AND FE-MODELLING 60
5.1 Introduction 60
5.2 Experiments 60
5.2.1 Test setup 60
5.2.2 Digital Image Correlation 67
5.2.3 Reflection on previous experiments 67
5.3 FE-modelling – ADINA 69
5.3.1 General 69
5.3.2 Element types and properties 70
5.3.3 Boundary conditions 71
5.3.4 Material models 72
5.3.5 Meshing and time steps 74
5.3.6 Choice of load application 78
5.3.7 Solution methods 80
5.4 FE-modelling – LS-DYNA 81
5.4.1 General 81
5.4.2 Element types and properties 82
5.4.3 Boundary conditions 82
5.4.4 Material models 83
5.4.5 Meshing and time steps 86
5.4.6 Choice of load application 87
5.4.7 Solution methods 87

-- 10 of 231 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 V
RESULTS AND COMPARISONS 88
6.1 Introduction 88
6.2 Verification of the models 88
6.3 Displacement of the midpoint over time 93
6.3.1 General 93
6.3.2 2DOF and ADINA models 97
6.3.3 LS-DYNA 100
6.4 Beam response at supports 102
6.5 Crack patterns 108
6.6 Displacement shape of the beam 118
PARAMETRIC STUDIES 128
7.1 Introduction 128
7.2 Bilinear fracture energy in the CDPM2 material model 128
7.3 Magnitude of fracture energy in the CDPM2 material model 131
7.4 Boundary condition study 133
7.5 The influence of strain rate on material response 139
7.6 Flexible supports in the ADINA model 144
FINAL REMARKS 148
8.1 Conclusions 148
8.2 Further studies 149
REFERENCES 150
APPENDIX A TRIGONOMETRIC DERIVATIONS A-1
APPENDIX B MATHCAD CALCULATIONS B-1
APPENDIX C DATA FROM MATERIAL EXPERIMENTS C-1
APPENDIX D RESULTS D-1
D.1 Results from 2DOF model D-1
D.2 Results from ADINA model D-3
D.3 Results from LS-DYNA model D-8
D.4 Results from experiment D-13
D.4.1 Results D-13
D.4.2 Velocity study D-15
D.5 Crack pattern/displacement shapes during the first 2 ms D-17

-- 11 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
VI
APPENDIX E MATLAB SCRIPT FOR 2DOF MODEL E-1
E.1 Main algorithm E-1
E.2 Central Difference Method Solver E-4
E.3 Plot algorithm E-7
APPENDIX F SCRIPT FILES FROM ADINA F-1
F.1 ADINA IN command file, ADINA model 1 F-1
F.2 ADINA IN command file, ADINA model 2 F-3
F.3 ADINA PLOT command file, ADINA model 1 F-5
F.4 ADINA PLOT command file, ADINA model 2 F-7
APPENDIX G SCRIPT FILES FROM LS-DYNA G-1
APPENDIX H PARAMATER STUDIES OF FE MODELS H-1
H.1 Convergence studies in ADINA H-1
H.2 Convergence study on mesh size LS-DYNA H-4
H.3 Strain rate estimation in LS-DYNA H-4
H.4 Abnormal behaviour due to low fracture energy H-5

-- 12 of 231 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 VII
Preface
In this Master’s thesis the response of a reinforced concrete beam subjected to impact
loading has been studied. Experiments were conducted and the results were analysed
and compared with numerical models of different levels of complexity.
The project was carried out from January to June 2016 and the experiments were
conducted in February 2016. The project has been a part of a research promoted by ÅF
and the Department of Structural Engineering, Chalmers University of Technology,
Sweden. The project is intended to compliment an ongoing Ph.D. project at the
university, carried out by Jonas Ekström. Ph.D. Morgan Johansson has supervised this
thesis, and Ph.D. Joosef Leppänen has been the examiner.
Morgan Johansson is highly appreciated for his invaluable support during the thesis
work. We would also like to give special thanks to Joosef Leppänen and Jonas Ekström
for important comments and inputs throughout the course of this work, and Sebastian
Almfeldt for his work during the experiments. Ph.D. Mattias Flansbjer is also
appriceated for his supervision and help regarding the DIC and the software related to
this.
Finally, we would like to thank each other for excellent cooperation and all the hard
work during this rewarding period, and our fellow students from the Master’s thesis
office for the good times and delicious fredagsfikas.
Gothenburg, June 2016
Jimmy Lovén and Erla Sara Svavarsdóttir

-- 13 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
VIII
Notations
Roman upper case letters
A Area
Ae Area of element side in FE modelling
C Damping matrix, calculation factor in Cowper and Symons model
DIF Dynamic increase factor
E Modulus of elasticity
Ecm Mean value of modulus of elasticity for concrete
Ek Kinetic energy
Et Second slope of a bilinear stress-strain curve
F Force, load, force matrix
G Shear modulus
Gf Fracture energy
I Impulse, moment of inertia
Ik Characteristic impulse
K Stiffness matrix
L Length
M	
Mass matrix, momeny
MEd Design bending moment
N Normal force
P Pressure
R Internal resisting force, response ratio
Rd Dynamic resistance
Rm Maximum internal resisting force
Rs Static resistance
Tn Undamped natural period
U Amplitude
V Shear force
Ve Volume of largest element in FE modelling
VEd Design shear force
W Work, section modulus
Q Equivalent static load
Xcompr Continuous compression measure factor in CDPM2
Roman lower case letters
a Acceleration
ā Average acceleration
c Damping, wave speed
d Effective depth of cross section in a beam, diameter
e Eccentricity factor

-- 14 of 231 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 IX
f Strength of a material
fbc Concrete strength in equbiaxial direction
fc Compressive strength of concrete
fcm Mean compressive strength of concrete
fctm Mean tensile strength of concrete
fd Dynamic resistance
fs Static resistance
ft Characteristic tensile strength of steel, stress at crack initiation in concrete
ft1 Stress level of a bilinear damage curve slope change
fu Ultimate strength of steel
fy Yield strength of steel
h Crack band width
i Impulse intensity
k Stiffness
l Length, distance
lelement Length of one element in FE analysis.
m Mass
p Momentum, calculation factor in Cowper and Symons model
q Uniformly distributed load
s Coordinate
sm Mean crack spacing
sr,max Maximum crack spacing
t Time
Δt Time step
Δtcr Critical time step
u Displacement
uel,1 Elastic part of total elastoplastic displacement
upl,1 Plastic part of total elastoplastic displacement
us Displacement at the system point
utot Total elastoplastic displacement
u	
Velocity
u	
Acceleration
v Velocity
v	
Average velocity
w Crack width
wu Ultimate crack width
wu1 Crack width level of a bilinear damage curve slope change
x Coordinate in the length direction
xu Depth of compression zone in a beam

-- 15 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
X
Greek letters
 Phase angle
r Rate parameter for strain rate effect in CDPM2
rt Scale factor for tensile strain rate effect in CDPM2
ct Scale factor for compressive strain rate effect in CDPM2
 Natural response ratio, shape factor
 Ductility ratio
 Change in value, used as a prefix
 Strain
	
Strain rate
c1 Concrete strain at peak stress
cu1 Nominal ultimate strain of concrete
uk Steel strain at maximum force
y Steel strain at first yield
h Steel strain at hardening initiation
crack Strain when a crack has fully developed in concrete.
 Viscous damping factor
pl Plastic rotation
F Transformation factor for the load
k Transformation factor for the stiffness
m Transformation factor for the mass
mF Transformation factor for the mass and the load
 Slenderness factor
 Poisson’s ratio
 Density
 Stress
R Stress capacity of a material
y Yield stress
 Mode shape
 Angle method
n Undamped circular natural frequency
Index
0 Initial position
1 Body 1
2 Body 2
avg Average
b Beam
bar Bar

-- 16 of 231 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 XI
c Compression, complementary solution
const Constant
cr Critical
e External, equivalent
Ed Design value
el Elastic, element
i First state (uncracekd)
I Second state (cracked)
II Internall
max Maximum
mod Modified
p Particular solution
pl Plastic
Rd Capacity
s System point
SDOF Single degree of freedom
t Tension
tot Total

-- 17 of 231 --



-- 18 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 1
Introduction
1.1 Background
When a structure is subjected to impact loading, the response can differ greatly compared to
static loading. Examples of impact loading can be collisions, high wind loads or explosions.
The response of static loading has been studied to a large extent, while the dynamic response
from impact loading has not.
Therefore, there is a need to increase the knowledge and understanding of the structural
response for concrete when subjected to impact loading. The current research available is
incomplete, which is why the division of Structural Engineering at Chalmers has ongoing
research projects on this topic. The theory that has already been developed should be further
advanced by performing experiments to see the correlation between numerical models, theory
and experimental results. There are previous experiments made, as well as comparisons
between experiments and numerical modelling (e.g. in (Ågårdh et al. 1997)). However, these
studies were mainly focused on unreinforced and fibre reinforced beams.
This thesis is a continuation of the previous Master’s theses (Johansson & Fredberg 2015),
(Andersson & Antonsson 2015) and (Asplund & Steckmest 2014).
1.2 Aim and objective
The aim of this thesis was to improve the knowledge of the structural behaviour of concrete
when it is subjected to impact loading. Using simplified methods to get an indication of the
structural response, for example 2DOF models, can often be of interest. There is a need to
investigate the accuracy of these simplified models compared to more detailed FE-analyses. In
this report, the results obtained from these analyses were compared to experimental results,
which were used as a reference of the real behaviour. This way, it could be seen if and in which
situations the models were valid to use.
One objective of this thesis was to support the research in a current PhD-project at Chalmers
University of Technology, where one aim is to analyse experiments using a drop weight on a
concrete beam. The results from these tests were obtained using Digital Image Correlation
(DIC). The experiments treated plain, fibre reinforced and conventionally reinforced concrete.
Regarding the FE modelling, the models were made in the FE-software ADINA (ADINA R &
D Inc. 2015) and LS-DYNA (LS-DYNA 2014b). With ADINA, the beam was modelled using
beam elements. As a more extensive analysis, LS-DYNA was used to model the beam with
solid 3D elements. The simplified 2DOF models followed basic dynamics theory, and were
modelled with the Central Difference Method using the numerical evaluation software
MATLAB (The Mathworks Inc. 2015).
Depending on the results from the experiments, there might be a need to further develop future
experimental test series. This thesis evaluates such needs.
In the previous Master’s thesis by (Johansson & Fredberg 2015), it was evaluated how a
prestressed concrete beam behaved when subjected to impact loading. This thesis checked the
behaviour of reinforced concrete beams, with the support from numerical and analytical models
with different complexity, and experimental results.

-- 19 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
2
Initial questions:
- In what way is it possible to use simplified calculation tools? What is the influence of
different degrees of simplification?
- Is the test setup in the experiment satisfactory, or can improvements be made on future
tests?
- How should the stiffness and mass of the falling objects be handled in impact, is there
a need of changing material models in the different analyses, and how accurate are
they?
1.3 Method
The first part of the thesis consists of a literature study, which was performed in order to deepen
the knowledge about the fundamental theory and concepts of dynamic loading on concrete
structures.
Early in the process a pre-test experiment took place. It consisted of simply supported concrete
beams (both reinforced and unreinforced) subjected to an impact load from a drop weight
applied to the centre of the beam. The results were analysed and used to evaluate the structural
response and compare to pertinent models mentioned below.
Different numerical studies were performed in the report. A simplified model using a 2-DOF
mass-spring system was developed based on dynamic elastoplastic theory. This model was
developed in MATLAB using the Central Difference Method.
The beams and drop weights in the system were modelled using the FE software ADINA and
LS-DYNA with different types of elements and degrees of complexity, where ADINA was used
to analyse the system with simple beam elements for the beam. Two different ADINA models
were evaluated, one where the drop weight was modelled as a point mass and one where the
drop weight was modelled with beam elements. LS-DYNA was used to perform a more
extensive study, with 3D solid elements for the structural members involved in the system.
The results from the simplified 2DOF model, the FE-models, and the experimental results were
evaluated and compared. If needed, improvements were suggested regarding modelling
methods and experimental setup.
In order to see the sensitivity of different parameters in the different models, parameter studies
were made where different factors are changed and evaluated.
1.4 Limitations
The thesis only covers the response of reinforced concrete beams, although the experiment
performed also included fibre reinforced and unreinforced concrete. Regarding the FE-
modelling, beam elements with bilinear material behaviour were used in ADINA. 3D solid
elements were used in LS-DYNA, and the material model used in LS-DYNA was CDPM2,
developed at Chalmers University.
Perfect bond was assumed between the concrete and the reinforcement. The damping effect of
the beam and the drop weight was disregarded in the 2DOF model and in the FE-models, as it
could be considered negligible for short duration loads. This assumption was on the safe side,
and simplified the calculations significantly.

-- 20 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 3
1.5 Thesis outline
In order to have a proper knowledge of the different phenomena and behaviours of the topics
of this thesis, Chapters 2 - 4 are an introductory part, describing pertinent theory and
approaches used later on. The next part of the thesis is focused on describing the experiment
setup and creating numerical models. The concluding part of the thesis focuses on evaluation
and discussion of the results and conclusions drawn from this.
Chapter 2: The theory behind the materials used in this thesis is presented, together with basic
mechanic concepts.
Chapter 3: Basic dynamic theory is described in this chapter. Different models are introduced,
such as SDOF/2DOF systems and numerical solution methods.
Chapter 4: In order to make a simple SDOF/2DOF model, the actual beam and drop weight
needs to be transformed. This chapter describes the method and theory behind the
transformation of structural members into lumped mass systems.
Chapter 5: The test set up is described along with the high speed camera used to capture the
test results and the DIC software used to extract and analyse the results. A connection to
previous experiments is made. Detailed information concerning the FE modelling is provided
as well.
Chapter 6: The results from the different analyses are presented, compared and discussed.
Chapter 7: Parameter studies are introduced in this chapter, where different factors are changed
in order to evaluate the sensitivity in the analyses.
Chapter 8: This is the concluding chapter of this thesis. Here, conclusions are made from the
comparisons and discussions in the previous chapters.
Chapter 9: This chapter contains the references used in the thesis.

-- 21 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
4
Material and Structural Response
2.1 Introduction
General theory behind material response is described in this chapter. Special attention is given
to the behaviour of plain and reinforced concrete, ductility and the concept of fracture energy.
In order to fully understand the material behaviour, some basic mechanical concepts that are
considered to be relevant are stated based on (Ekengren et al. 2005), (Nyström 2006) and
(Johansson & Laine 2012).
2.2 Basic mechanics
Average velocityv	 [m/s] is defined as a distance divided by the time it takes to move that
distance:
0	1
0	1
t	t
s	s
v 

	
(2.1)
where s [m]is the distance and t [s] is the time.
Velocity at a specific time t is defined as the time derivative of the displacement:
dt
ds
v 	
(2.2)
Average acceleration	a	 [m/s2] is defined as the change in velocity during a certain time
interval:
0	1
0	1
t	t
v	v
a 

	
(2.3)
In the same manner as before, a value for acceleration at a specific time t is defined as the time
derivative of the velocity:
2
2
dt
s	d
dt
dv
a 		
(2.4)
According to Newton’s second law of motion, force, denoted F [N], can be described as the
product of mass m [kg] and acceleration a:
a	m	F 		
(2.5)
Pressure P [Pa] is defined as a force acting on a surface area:
A
F
P 	
(2.6)
where the surface area is denoted A [m2].
Moment M [Nm] with regard to a certain point is defined as the product of force F and its
vertical distance, or lever arm l [m], from that point:

-- 22 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 5
l	F	M 		
(2.7)
Stress
 [Pa] is defined as the internal force F in a material created by applying load to that
material divided by the affected area, often the cross sectional area, of the object that is
subjected to the loading. In general cases, stress can be calculated using
A
F

		
(2.8)
Strain
 [-] is the one-dimensional displacement in a body divided by a reference length:
l
l	

		
(2.9)
where Δl is the change in length and l is the reference length.
Strain rate is defined as the time derivative of strain with respect to time:
dt
d

 		
(2.10)
This is used to describe how fast a material deforms.
2.3 Structural response of materials
When a structure is subjected to loading it will create a certain response within the structure.
That response depends on the material properties and boundary conditions of the structure and
the way it is loaded. Three basic concepts of material response are described here. The chapter
is based on (Ekengren et al. 2005) and (Nyström 2006).
2.3.1 Linear elastic material
A perfectly elastic material behaves linearly in accordance to Hooke’s law:

	 	 E	
(2.11)
where σ is the stress, ε is the strain and E [Pa] is the modulus of elasticity, as described in the
previous section. This can be seen graphically in Figure 2.1.
ε
σ
E
Figure 2.1 Stress-strain relation for a linear elastic material.

-- 23 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
6
The reaction of the structure will be linear as well. This is described by using an internal
resisting force R [N]:
u	k	R 		
(2.12)
where k [N/m] is the stiffness of the structure and u [m] is the displacement. The relation is
shown in principle in Figure 2.2.
u
R
k
Figure 2.2 The internal resisting force and displacement relation for a linear elastic
material.
This means that no energy is dissipating during linear elastic behaviour of a structure and all
displacements can be reversed by removing the load that has been applied to the structure.
2.3.2 Ideal plastic material
A perfectly plastic material will not display any strain until the material capacity is reached,
after that point it will be able to deform to infinity. Stress will not increase above the capacity
limit. This is shown in Figure 2.3, where σR represents the stress capacity of the material.
σR
ε
σ
Figure 2.3 Stress-strain relation for an ideal plastic material.
The internal resisting force created by applying the load F follows the same principles and can
be described as
0
0





 u
u
if
if
R
F
R
m
(2.13)

-- 24 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 7
Where Rm is the force that corresponds to the stress capacity σR. In Figure 2.4 this behaviour is
shown.
Rm
u
R
Figure 2.4 The internal resisting force and displacement relation for an ideal plastic
material.
2.3.3 Elastoplastic material
The elastoplastic material model is a combination of the elastic and the plastic model. It is
assumed that the material will have elastic behaviour until the limit for elastic response, uel, is
reached. After that point, the material will have plastic behaviour. This can be seen in
Figure 2.5.
Rm
uel,1 	u
R
k
Figure 2.5 The internal resisting force and displacement relation for an elastoplastic
material.
The internal resisting force for an elastoplastic material is defined as
1,
1,
el
el
m u	u
u	u
if
if
R
u	k
R 



 
	
(2.14)
where the elastic limit uel,1, can be calculated as
k
R
u m
el 	1,	
(2.15)

-- 25 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
8
Further information about displacements and other properties of material models can be found
in Section 3.1.
2.4 Concrete
The material response of plain concrete and the structural response of reinforced concrete, is
briefly described in the following sections along with concepts that are important concerning
the behaviour of concrete.
The compressive and tensile strength of concrete under uniaxial loading is shown in principle
in Figure 2.6 as described in (Ekengren et al. 2005). Note that the tensile part of the curve takes
a steep drop after the maximum tensile load has been reached. This is due to concrete being a
brittle material.


ft
fc
Figure 2.6 Stress-strain relationship for concrete.
2.4.1 Plain concrete
Concrete is a composite material mainly made of cement, water and aggregates. Cement and
water form a cement paste and the hardened cement paste is referred to as HCP. When subjected
to compression, the individual stress-strain behaviour of aggregates and HCP is very close to
linear. However, when these materials are mixed together, the resulting behaviour will be
nonlinear. This behaviour can be seen in Figure 2.7.

-- 26 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 9
ε
σ Aggregate
Concrete
HCP
Figure 2.7 Stress-strain relation of aggregates, HCP and concrete as shown in (Domone
& Illston 2010)
The strength of concrete is dependent on age and loading history. Short-term response is within
the scope of this report and therefore, no theory concerning long-term effects such as creep or
shrinkage will be discussed.
To describe concrete in compression, Figure 2.8 shows idealized stress-strain relations as
presented by (CEN 2004) for concrete subjected to uniaxial compression.


ft
fc
fcm 
c1	
cu1	


0,4 fcm
α
tan(α)=Ecm
Figure 2.8 Stress-strain relation of concrete in compression for structural analysis.
Mean compressive strength is denoted by fcm, Ecm stands for mean value of modulus of
elasticity, εc1 is the strain when peak stress is reached and εcu1 is the nominal ultimate strain.
In design, simplified conservative stress-strain relations are often used. Two suggestions
presented in (CEN 2004) can be seen in Figure 2.9.

-- 27 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
10
c1	
cu1	


fc
c1	
cu1	


fc
a) Parabola-rectangle diagram. b) Bi-linear diagram.
Figure 2.9 Simplified stress-strain relations of concrete.
The bilinear relationship shown in Figure 2.9b) corresponds to the elastoplastic material model
discussed in Section 2.3.3.
The influence of lateral confinement is best described by a cylindrical concrete sample
subjected to axial compression based on (Engström 2011) and (Ekengren et al. 2005). When
compressing the sample, it will become shorter and wider. If the sample is laterally confined it
will not be able to expand in the lateral direction. The material is forced to give in by squeezing
the particles in the concrete closer together, instead of moving them by allowing lateral
expansion. This creates more resistance within the sample and the loading capacity increases
significantly. The material becomes more ductile and the strain at maximum stress and the
ultimate strain increase. This is shown in Figure 2.10 where p1, p2 and p3 represent different
magnitudes of lateral pressure applied to the sample.
Figure 2.10 The influence of lateral confinement on concrete in compression, from
(Ekengren et al. 2005).
Reinforcement, stirrups in particular, create a confinement effect in concrete members and can
be placed strategically to increase the capacity and ultimate strain within the members.
Regarding concrete subjected to tension, the concept of fracture energy according to
(Plos 2000) is fundamental. To understand this concept, it is important to bear in mind the
cracking process of concrete when subjected to tension. In order to explain this in a simple
manner, a cylindrical concrete specimen under uniaxial tensile load is considered.

-- 28 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 11
When the specimen is subjected to tensile loading, microcracks will start to form evenly
throughout the concrete, this can be measured as concrete strain. The number of microcracks
increases with increasing load and they start to connect and localize in the weakest part of the
specimen. The strain will increase continuously during this process. When the loading has
reached the tensile strength of the concrete, denoted ft as shown in Figure 2.11, a certain strain
limit is also reached. Cracks will start to localize and ultimately the specimen will fail and the
applied stress will return to zero.


ft
fc


ft
Figure 2.11 Stress strain relationship for concrete in tension
The final step in the tensile loading process, from where localized cracks start to form at
maximum stress until failure of the specimen is the one that is used to define the fracture energy.
When a localized crack appears, it is more convenient to have a graph showing stress-crack
width instead of the more conventional stress-strain relationship. A graph for the stress-crack
width is shown in Figure 2.12. The area under the curve is defined as the fracture energy,
G [J/m2].
w
σ
wu
Gf
ft
Figure 2.12 Internal work for elastoplastic materials, where wu is the maximum crack
width when the stress reaches zero.
The fracture energy can be described using the equation:

-- 29 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
12
	
u	w
f dw	w	G
0
)	(	
	
(2.16)
where w [m] is the width of crack opening.
2.4.2 Reinforced concrete
To compensate for the low tensile strength of concrete, reinforcement is placed within the areas
where tensile forces are expected. Traditionally, this reinforcement is made of steel with tensile
strength that is two orders of magnitude higher than that of concrete. The compressive strength
of steel in this context is not of interest. In Figure 2.13a) the stress-strain relations for typical
hot rolled steel is shown, based on (CEN 2004).
fu
u	


fy
y	
h	u	


fy
Elastic perfectly
plastic behaviour
Strain hardening
considered
ft
a) Stress-strain diagram. b) Idealised stress-strain behaviour.
Figure 2.13 Stress-strain relations for hot rolled reinforcing steel.
The yield strength is denoted fy [Pa], and the maximum tensile strength with ft. εu corresponds
to the strain at maximum force, εy is the strain at first yield and εh is the strain at hardening
initiation. In Figure 2.13b) a simplified stress-strain curve is shown along with design curves,
they are modelled with a bilinear curve similar to elastoplastic behaviour described in
Section 2.3.3. One of the design curves considers strain hardening of the steel and the other one
follows the elastoplastic model fully.
Reinforced concrete members are a composite material. The steel is embedded within the
concrete and interacts with it by transferring forces over the boundaries between them. This is
called bonding and it can be modelled in different ways, the simplest way being full interaction,
or fully embedded reinforcement.
A basic case of reinforced concrete members is a simply supported reinforced beam. The
reaction of the beam due to loading is described using different states of the composite material,
see Figure 2.14. The principles are based on (Engström 2011).
The first state, or state I, is valid while the beam is uncracked. The material response in state I
is considered to be linear elastic dominated by concrete properties. This is a simplification; in
reality the reinforcement influences the cross sectional response. However, the contribution
from the steel is so small that it is often considered to be negligible.

-- 30 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 13
When the beam is fully cracked it is considered to be in state II, the cracked state. The stiffness
in this state depends mainly on the material properties of the reinforcement in the cracked area
of the beam. The response is again considered to be linear elastic, but with substantially lower
stiffness than in state I.
The behaviour of the beam moves from state I to state II in a nonlinear way as it cracks. This is
due to tension stiffening. The uncracked concrete sections show higher stiffness than the
cracked sections that are dominated by reinforcement stiffness, resulting in a change in stiffness
as cracking progresses.
State III begins when the beam reaches the yield limit of the reinforcement steel in one of the
beam sections. The beam will show abrupt loss of stiffness and the material response is no
longer considered to be linear. The beam will fail due to ultimate strain being reached either in
the reinforcement or in the concrete.
The three stages of beam reaction are useful to describe the principle relation between loading
and displacement. The following description of the behaviour of reinforced members subjected
to impact loading is based on (Johansson & Laine 2012).
Ductility is an important quality of structural members when handling impact loading. Any
ductile behaviour of reinforced concrete relies greatly on the ductile qualities of the
reinforcement, since concrete has a more brittle behaviour. The formation of plastic hinges in
cracked regions allows for moment redistribution in the structural member through
displacement and it is of great advantage for structures to be able to absorb energy by utilising
their displacement capacity.
In this context, the ratio between the yield strength of steel, fy, and the ultimate strength of steel,
fu, is of interest. This ratio is denoted γ [-] and is shown in equation (2.17).
y
u
f
f

		
(2.17)
This factor is considered to describe the ductility of steel well, since it shows the ratio between
the start point and the peak of the yielding process. A high value of γ represents high ductility
and consequently a high capability of ductile displacements in the structural member the steel
will be used to reinforce.
A simplified load-displacement relation of a reinforced simply supported concrete beam is
shown in Figure 2.14 along with the assumed response following state I, II and III.

-- 31 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
14
u
q
Crack
initiation
(state I)
Plastic limit
(state II)
Strain hardening
of reinforcement,
maximum capacity
reached u
q
Fracture capacity
(state III)
Simplified response
plastic	elastic
uel upl
Stiffness of fully cracked
beam (state II)
Figure 2.14 Response of a simply supported reinforced concrete beam, based on
(Johansson & Laine 2012).
The simplified response is elastoplastic. It is assumed that the beam is fully cracked from the
beginning and the elastic displacement turns into plastic displacement at first yield.
2.4.3 Plastic rotational capacity
When a beam is subjected to loading and the material response is plastic or elastoplastic, it will
form plastic hinges before failure. A plastic hinge is a section in the beam where reinforcement
has started to yield and the section uses deformation to distribute the load to other areas of the
beam. The upper limit of this deformation is usually measured using the rotational angle of the
hinge. Rotational capacity represents the maximum rotational angle that a plastic hinge can
undergo before collapsing.
According to (Johansson & Laine 2012) there are many proposed methods of calculating the
rotational capacity. For reinforced concrete with reinforcement steel of ductility class B or C,
which is common in new concrete structures, the method proposed by Eurocode (CEN 2004)
is recommended. It is not tailored for impact loading specifically, but it is considered to give a
reasonable estimation of the rotational capacity for this case as well.
To obtain maximum rotational capacity it is important to have the right amount of reinforcement
in the beam. Larger amount of reinforcement results in increased rotational capacity until the
point where failure in the beam is dominated by concrete compression instead of reinforcement
tension. After this the rotational capacity decreases with increasing amount of reinforcement.
This can be seen in Figure 2.15 where xu [m] is the depth of the compression zone in the section
of the plastic hinge, d [m] is the effective depth of the cross section and θpl is the plastic rotation
in the hinge, measured in [rad].

-- 32 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 15
xu / d
pl [10 -3 rad]
Concrete
failure
Reinforcement
Class C
Class B
failure
Figure 2.15 Design values for plastic rotation for various concrete and steel types, based
on (CEN 2004). The limit between reinforcement failure and concrete failure
in the case of concrete class ≤ C50/60 and reinforcement class C is shown.
The rotational capacity is dependent on the slenderness of the beam, denoted λ [-]. Slenderness
is defined as
d	V
M
Ed
Ed


		
(2.18)
Where MEd is the design bending moment of the beam, and VEd is the design shear force. The
values in Figure 2.15 apply for beams with shear slenderness λ = 3.0. In other cases, the
rotational capacity should be multiplied with a correction factor kλ [-]
pl	d	pl k	

	  		,	
(2.19)
The correction factor is calculated using
3

 	k	
(2.20)
In addition, there are some restrictions regarding the reinforcement in regions of plastic hinges:
xu/d < 0,45 for concrete class ≤ C50/60
xu/d < 0,35 for concrete class ≥ C50/60

-- 33 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
16
Dynamics
3.1 Basic dynamics
Dynamic response of structures differs from static behaviour, in many cases it could be
favourable to include the dynamic response in structural design. To reach a better understanding
of structural dynamics, it is important to be aware of basic mechanics. In order to prepare for
dynamic theory, the fundamentals will be explained based on (Ekengren et al. 2005), (Nyström
2006) and (Johansson & Laine 2012).
The momentum p [Ns] of a particle with mass m and velocity v is
v	m	p 		
(3.1)
If a force F is applied to the particle, the momentum will change.
			
t
t
dt	t	F	v	m	p
0
)	(	0	
(3.2)
The change in momentum is defined as impulse I [Ns] acting on the particle.
			
t
t
dt	t	F	p	I
0
)	(	
(3.3)
The impulse can also be presented by combining equations (3.1), (3.2) and (3.3).
v	m	v	m	p	I 					 0	
(3.4)
In Figure 3.1 the impulse is shown as the area under the curve in a load-time graph where Favg
is the average force during the time interval from t0 to t.
t
F
t
Favg
t0
I
Figure 3.1 Impulse during a time interval as described by (Nyström 2006).
A factor called impulse intensity i [Pa s] can also be used to calculate impulse. Impulse intensity
is defined as pressure over time as shown in Figure 3.2.
	
t
t
dt	t	P	i
0
)	(	
(3.5)

-- 34 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 17
P
t
i
t0 t1
Figure 3.2 Impulse intensity.
The impulse can then be calculated by multiplying the impulse intensity by the loaded area A.
			
t
t
dt	t	P	A	A	i	I
0
)	(	
(3.6)
Kinetic energy Ek [J] of a particle with mass m and velocity v is defined as
2
2
v	m
Ek

	
(3.7)
When a force is acting on a point and manages to move it a certain length, work has been
performed. Work W [Nm] is defined as
l	F	l	F	W 				 1	)	cos(
	
(3.8)
where φ is the angle between the direction of the force and the direction of displacement and
F1 is the projection of the force onto the direction parallel to the displacement shown in
Figure 3.3.
Figure 3.3 Work explained using forces acting on a particle.
For a variable load, work can be expressed as
dx	x	F	W
l
)	(
0
1			
(3.9)
Work can also be expressed in the terms of change in kinetic energy, in that case it is referred
to as external work.
m
I
m
v	m	v	m	v	m
E	W k	e 2	2
)	(
2	2
2	2	2
0
2

	




			
(3.10)

-- 35 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
18
Where v > v0 which means that the kinetic energy has increased. A force that is applied to a
particle causes the change in kinetic energy, shown in Figure 3.4.
Figure 3.4 Change in kinetic energy.
In order to maintain energy equilibrium there must be an internal reaction to the external work.
That reaction is called internal work and it must be equal to the external work in magnitude.
e	i W	W 	
(3.11)
3.1.1 Equivalent static load
In order to work with dynamic impulse loading in calculations in a simpler way it is possible to
convert it to an equivalent static load. The definition of equivalent static load is the static load
that produces the same amount of external work as the dynamic impulse load. This definition
of equivalent static load and the following chapters describing properties of different material
models are based on (Johansson & Laine 2012).
3.1.2 Linear elastic material
The internal work in the structure that is formed when it is loaded can be calculated using the
stiffness of the structure. For the elastic behaviour the internal work is calculated using
2	2
2
el	el
i
u	k	u	R
W 


	
(3.12)
Where uel denotes the maximum elastic displacement of the structure. The internal work
corresponds to the area under the curve in Figure 3.5 showing reaction force as a function of
displacement.
u
R
Wi
uel
k
Figure 3.5 Internal work for linear elastic materials.
Combining equations (3.12) with (3.10) and (3.11), an expression for the elastic displacement
is obtained:

-- 36 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 19
k	m
I
uel

	
(3.13)
The external work We caused by a static load Q can be defined using
2
el
e
u	Q
W 
	
(3.14)
According to equation (3.11), the external work applied to the system, defined in
equation (3.14), is equal to the internal work defined in equation (3.12). This ultimately leads
to the expression
el	u	k	Q 		
(3.15)
Combining (3.15) and (3.13) gives an expression for the equivalent static load for linear elastic
materials.
m
k
I	Q 		
(3.16)
3.1.3 Ideal plastic material
In a similar manner as for linear elastic materials, the resisting force–displacement curve is used
to define the internal work in the system, shown in Figure 3.6.
pl	m	i u	R	W 		
(3.17)
where upl denotes the plastic displacement of the structure.
u
R
Rm
Wi
upl
Figure 3.6 Internal work for ideal plastic materials.
Combining equations (3.17) with (3.10) and (3.11) an expression for the plastic displacement
is obtained.
m
pl mR
I
u 2
2
	
(3.18)
The external work We caused by a static load Q can be defined using:

-- 37 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
20
pl	e u	Q	W 		
(3.19)
The external work applied to the system is equal to the internal work according to
equation (3.11).
m	R	Q 	
(3.20)
Combining equation (3.18) and (3.20) gives an expression for equivalent static load for ideal
plastic materials.
pl	u	m
I
Q 
 2
2
(3.21)
3.1.4 Elastoplastic material
Since the elastoplastic material model is a combination of elastic and plastic material models
the resulting internal work is calculated using both principles.
u
R
Rm
Wi
utot	uel,1
Figure 3.7 Internal work for elastoplastic materials.
The elastic displacement is defined in equation (3.13). The plastic displacement does not
happen until after the elastic displacement has taken place, using equations (3.13) and (3.18)
the plastic part of the elastoplastic displacement is:
k	m
I
R	m
I	u
u	u
m
el
pl	pl



		 2	2	2
2
1,
1,	
(3.22)
The total elastoplastic displacement is the sum of the elastic and plastic part:
1,	1, pl	el	tot u	u	u 		
(3.23)
The internal work is calculated as the area under the curve in Figure 3.7.
)	2	(
2	2
1 1,	1,	1,	1, pl	el
m
pl	m	el	m	i u	u
R
u	R	u	R	W 							
(3.24)
In the case of elastoplastic material, the equivalent static load can be defined in the same way
as for ideal plastic material:

-- 38 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 21
R	Q 	
(3.25)
In this case however, R is not constant and must be determined using the stiffness k for the
elastic part of the displacement. The expression for equivalent static load in elastoplastic
material can be expressed by combining equations (3.25), (2.14) and (2.15).
1,
1,
1, el
el
el u	u
u	u
if
if
u	k
u	k
Q 






	
(3.26)
3.2 Equation of motion
Some fundamental dynamical concepts are presented in this section and the sections that
follows, mostly based on (Craig Jr & Kurdila 2006).
If looking at a simple spring-mass system subjected to a force F(t) according to Figure 3.8, it
can be stated that the structure consists of a resistance R(u), which can store and release potential
energy, and a mass, which can store and release kinetic energy. Generally, there is also some
kind of damping effect.
R(u) u
F(t)
c
m
Figure 3.8 Spring-mass system.
The fundamental equation in dynamics is based on Newton’s second law, as described in
equation (2.5). To obtain a mathematical model for a structure, a free-body diagram of the mass
is created, where the external force acting on the structure is resisted by internal forces, divided
into the static and dynamic resistances Rs and Rd, respectively, shown in Figure 3.9.
Rs
a=ü
F(t)
Rd
m
Figure 3.9 Free body diagram of the system.
Using this, Newton’s second law is applied:
ma	F 		
(3.27)
Acceleration is given as the second derivative of the displacement with regard to time, similarly
the velocity is the first derivative of the displacement. Consequently;
u	v
u	a




(3.28)
in accordance with Section 2.2.

-- 39 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
22
By assuming that the mass is displaced a distance u to the right of the position where the spring
force is zero, the spring is in tension and wants to get back to its original position. This will
create a force according to the free-body diagram in Figure 3.9. The damping effect has the
same influence on the mass, and force equilibrium of the free-body-diagram yields:
u	m	t	F	R	R s	d 				 )	(	
(3.29)
Furthermore, there are constitutive relations connecting the forces to the displacement. Here,
linear relationships between the forces and the displacement and velocity, respectively, are
assumed.
ku	Rs 	
(3.30)
u	c	Rd 		
(3.31)
where k is the stiffness and c is the damping of the system. If combining and rearranging
equations (3.29), (3.30) and (3.31), the equation of motion for the damped spring-mass model
is obtained:
)	(t	F	ku	u	c	u	m 		 		
(3.32)
3.3 Single degree of freedom systems
The structure in Figure 3.8 is commonly known as a single degree of freedom (SDOF) system.
It is, in most cases, a simplified model for a dynamically loaded structure. This means that the
equation of motion derived in the previous section applies for a SDOF system as well.
In static loading, it is always assumed that the structure is in equilibrium. If a mechanical system
is disrupted from equilibrium, retaining forces as described in the previous section are formed.
If there exist external forces on the structure, the interaction between the external and retaining
forces will, depending on the mechanical properties of the system, achieve some sort of
movement. If the system is e.g. linear elastic, oscillation of the system is achieved.
3.3.1 Free vibration of an undamped SDOF system
If the damping is neglected in the system, which might be reasonable if the structure is studied
during a short time interval, the system will look like in Figure 3.10 when subjected to free
vibrations (i.e. no external force).
k u
m
Figure 3.10 Undamped spring-mass system.
For the undamped system, the equation of motion can be written as
0		 ku	u	m 	
(3.33)

-- 40 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 23
Which can be rewritten as
02 	 u	u n	
		
(3.34)
where
m
k
n 2
	
(3.35)
is called the undamped circular natural frequency and is given in radians per seconds [rad/s].
If the mass is stretched a distance u0 from the state of equilibrium, and then released, the internal
and external forces will induce a harmonic motion of the system, which can be described as
)	cos(	)	( 1	

	 	 t	U	t	u n	
(3.36)
where U1 is the amplitude and α is the phase angle. In order to derive the unknown constants in
a simpler way, equation (3.36) can according to (Råde & Westergren 2004) be rewritten as
  	 	t	A	t	A	t	u n	n	

	 sin	cos	)	( 2	1 		
(3.37)
Where A1 and A2 are real constants to be determined from the initial conditions. The initial
conditions can be stated as
0
0
)	0	(
)	0	(
v	u
u	u



(3.38)
Inserting equation (3.38) into (3.37) yields
n	A	v	u
A	u	u
	2	0
1	0
)	0	(
)	0	(
	
	

(3.39)
Thus;
  	 	t
v
t	u	t	u n
n
n	

 sin	cos	)	( 0
0 		
(3.40)
which is the free vibration response of an undamped SDOF system. The response is plotted in
Figure 3.11.

-- 41 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
24
u(t)
u0
v0
t
Figure 3.11 Free vibration of an undamped SDOF system.
3.3.2 Free vibration of a damped SDOF system
Usually, a system is subjected to some form of damping effect, in addition to the effects
described in Section 3.3.1, see Figure 3.12. The damping will reduce the amplitude of the
system with time, and eventually the dynamic movement will approach zero. The damping
effect will make the equation more complex, but the response will be closer to reality when
damping is considered.
k u
m
c
Figure 3.12 Damped spring-mass system.
With damping, equation (3.32) is valid with F(t) as zero for free vibration, and can be rewritten
as
0	2 2 		 u	u	u n	n	

	 		
(3.41)
where ζ is the dimensionless viscous damping factor defined by
km
c
2

		
(3.42)
The response of the damped system will differ depending on the damping factor. If ζ < 1, the
system is underdamped and will oscillate several times before dying out. If ζ > 1, the system is
overdamped, the response will die out without oscillating and if ζ = 1 the system is critically
damped, meaning that the system is exactly on the border of the oscillatory and nonoscillatory
response. The damping effects are shown in Figure 3.13.

-- 42 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 25
Figure 3.13 Vibration of a damped SDOF system.
3.3.3 Forced excitation of SDOF systems
If having some sort of load or force acting on the system, the total solution can be divided into
two parts, the particular solution and the complementary (or homogeneous) solution.
c	p	tot u	u	u 		
(3.43)
The particular solution is the response from the loading, while the complementary solution is
the response from the part that consists of the free vibration only, i.e. the natural motion when
the applied load is zero. After some time, the free vibration of the system is considered to have
died out, and the response will consist of the particular solution only, if subjected to continuous
loading. This is called the steady state response.
To get the particular solution, the response is assumed to have the same shape as the applied
load. The particular response is then inserted in the equation of motion and an expression is
derived. The complementary solution is acquired in the same manner as in Section 3.3.1, but
the different constants are derived with the total solution according to equation (3.43).

-- 43 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
26
3.3.3.1 Ideal step input
Consider a force applied to the structure of Figure 3.8. The force can be considered to be applied
as an ideal step input according to Figure 3.14, meaning that there is no time dependency with
regard to the application of the load.
F(t)
F0
t
Figure 3.14 Ideal step input.
Let the system be at rest at t = 0, giving the initial conditions
0	)	0	(	)	0	( 	 u	u 	
(3.44)
The particular solution is then
k
F
u p
0
	
(3.45)
If the damping effect is neglected, the total solution for the system is:
)	sin(	)	cos(	)	( 2	1
0 t	A	t	A
k
F
t	u n	n	

	 			
(3.46)
and if the initial conditions are used,
0	2
0
1

	
A
k
F
A
(3.47)
we get
))	cos(	1	(	)	( 0 t
k
F
t	u n	
			
(3.48)
A useful way of examining the dynamic response is to consider the dynamic load factor (or
response ratio) defined by
)	cos(	1
)	(
)	(
max
t
F
t	ku
t	R n	
				
(3.49)
For an undamped system, Rmax = 2 shown in (Johansson & Laine 2012). This means that when
a load is applied instantaneously to an undamped system, a maximum displacement of twice
the static displacement is attained which, of course, has a big influence on the structure.

-- 44 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 27
3.3.3.2 Rectangular pulse
F(t)
F0
t	td
Figure 3.15 Rectangular pulse input.
If the applied load is removed at any point td, the load duration will have an effect on the system.
The response can be divided into two parts; the forced-vibration era and the residual-vibration
era. The forced-vibration era is the time when the load is acting on the structure, and the
residual-vibration era is the time after the load has been removed.
The dynamic load factor for the first era is
)	cos(	1	)	(	1 t	t	R n	
			)	0	( d	t	t 		
(3.50)
i.e. R(t) is the same as for an ideal step.
The residual-vibration era is basically free vibration with the initial conditions R1(td) and
).	(	1 d	t	R	
According to (Craig Jr & Kurdila 2006), the response for the residual-vibration era is
))	(	sin(
)	(
))	(	cos(	)	(	)	( 1
1	2 d	n
n
d
d	n	d t	t
t	R
t	t	t	R	t	R 			
	

 )	( t	td 	
(3.51)
If the undamped natural period Tn [s] is introduced as
n
n	T

	2
	
(3.52)
it can be shown that any pulse of duration longer than Tn/6 will cause a displacement larger than
the static displacement F0/k, and for any pulse longer than Tn/2 the maximum displacement will
be twice the static value.
3.3.3.3 Short duration impulse
A special form of excitation – important for this report – is the short duration impulse of the
type shown in Figure 3.16. Considering an undamped SDOF system subjected to a constant
force F(t) = F0 of the duration td << Tn.

-- 45 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
28
F(t)
F0
t	td
td<<Tn
Figure 3.16 Short duration impulse.
In accordance to equation (3.3), the impulse of the load is then defined as
d
t	t
t	F	dt	F	dt	t	F	I
d	d
0
0
0
0
)	( 		 		
(3.53)
When td approaches zero, i.e. the duration of the load becomes infinitesimal, and F0 is infinitely
high, the impulse is called the characteristic impulse, denoted Ik.
Rearranging equation (3.49) with Fmax = F0, the response from a dynamic load can be expressed
as
)	(	)	( 0 t	R
k
F
t	u 	
(3.54)
Combining equation (3.50) with (3.54) and evaluating the response at time td;
))	cos(	1	(	)	( 0
d	n	d t
k
F
t	u	
			
(3.55)
The velocity at that time is
))	sin(	)	( 0
d	n
n
d t
k
F
t	u	


		
(3.56)
From equation (3.52),	.	2

	 	n	nT
Since it is a short duration impulse, td << Tn,	.	2

	 	d	n t
If the values of td are small:
d	n	d	n t	t	

	 	)	sin(	
(3.57)
And according to Appendix A:
2
)	(
2
1
))	cos(	1 d	n	d	n t	t	

	 		
(3.58)
This gives, since I = F0td from equation (3.53):

-- 46 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 29
m
t	I
t
m
k
k
F
t
k
F
t	u d
d	d	n	d 2	2
)	(
2
1
)	( 2	0	2	0 		
		
(3.59)
and
m
I
t
km
k	F
t
k
F
t	u d	d	n
n
d 		 0	0	
)	(	

	
(3.60)
The response during the residual-vibration era is evaluated using equations (3.51) and (3.54),
with the “initial” conditions from (3.59):
))	(	sin(	))	(	cos(
2
)	( d	n
n
d	n
d t	t
m
I
t	t
m
t	I
t	u 			
	

	
(3.61)
Which, when	,	0		d	t	 finally becomes
)	sin(	)	( t
m
I
t	u n
n


	
(3.62)
This is the impulse response of an undamped system.
3.3.4 SDOF systems subjected to an impulse load Ik
Using equation (3.10), it can be stated that the external work is the initiated kinetic energy
generated by a characteristic impulse load Ik:
m
I
E	W k
k	e 2
2
		
(3.63)
In order to prevent this initiated movement, an equally large internal work is required, hence
the equilibrium condition in equation (3.11). As described in Section 2.3 the internal work
varies depending on the material response. The energy equilibrium of an undamped SDOF
system according to equation (3.11) for different material responses is shown in Figure 3.17.

-- 47 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
30
u
F, R
uel
k
Wi
We
R
u
F, R
upl
Wi
We
R
u
F, R
utot
Wi
We
R
uel,1
utot = uel,1 + upl,1
(a) (b) (c)
Figure 3.17 Energy equilibrium between external work We and internal work Wi for a
system with: (a) elastic response, (b) plastic response, (c) elastoplastic
response. (Johansson & Laine 2012).
3.4 2DOF systems
3.4.1 Classic impact theory
Two bodies that collide have certain initial behaviours, and the collision will make the bodies
influence each other to change their behaviour in different ways. The following discussion is
based on (Johansson & Laine 2012). The system is studied in Figure 3.18, where two bodies
with masses m1 and m2 have the initial velocities v0 and 0, respectively. Depending on the
impact response of the bodies, the influence of the collision will have different effects. If a
purely elastic response is assumed, the bodies will have two different velocities after the
collision, while a purely plastic collision will result in the same velocity for both bodies.
v0
m1
v=0
m2
Figure 3.18 Two bodies before impact.
v1
m1
v2
m2
Elastic response
m1
v3
m2
Plastic response
Figure 3.19 Two bodies after impact.

-- 48 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 31
The real behaviour will generally be somewhere in between these two ideal cases, but for
simplicity the responses are treated separately.
Using Section 3.1, the kinetic energy and momentum for the first body before impact can be
described as
2
2
0	1
0,
v	m
Ek 	
(3.64)
and
0	1	0 v	m	p 	
(3.65)
respectively.
In a purely elastic impact, both kinetic energy and momentum have the same total value before
and after the impact. Based on these conditions, the velocities for the different masses can be
calculated as
0
2	1
2	1
,1 v
m	m
m	m
v el 


(3.66)
0
2	1
1
,2
2 v
m	m
m
v el 

(3.67)
It can be noted that if m1<m2, the first body will have a negative velocity, i.e. change direction
after impact. The velocity of the second body will always have a positive value. The kinetic
energy for the different bodies is then
0,
2
2	1
2	1	2
0
2
2	1
2	1	1
2
,1	1
1, 2	2 k
el
k E
m	m
m	m
v
m	m
m	m	m	v	m
E 







	







		
(3.68)
 	 0,	2
2	1
2	1	2
0
2
2	1
1	2
2
,2	2
2,
4	2
2	2 k
el
k E
m	m
m	m
v
m	m
m	m	v	m
E 
	






	
(3.69)
As stated earlier, the total value of the kinetic energy should be equal before and after impact.
If, however, an expression is wanted for the total kinetic energy acting in the same direction as
the second body, it can be stated that
2	1
2	1
,2,
,2,	,1,
,	, m	m
m	m
if
if
E
E	E
E el	k
el	k	el	k
tot	el	k 



 
	
(3.70)
In a purely plastic impact, only the momentum is preserved after the collision, while the kinetic
energy decreases. The decrease is due to a transformation to potential energy in the first body
when plastic work is performed in the contact surface between the first and second body. After
the impact, the bodies will have a common velocity stated as

-- 49 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
32
0
2	1
1 v
m	m
m
vpl 

(3.71)
The total kinetic energy after impact is then
 	 	 	 0,
2	1
1
2
0
2	1
1	1	1
2
1	1
,	, 2	2 k
pl
tot	pl	k 	E
m	m
m
v
m	m
m	m	m	v	m	m
E 
	









	
(3.72)
In order to see what different effect the plastic and elastic impact has on the bodies, a mass ratio
m1 / m2, can be plotted against an energy ratio, defined as Ek, tot / Ek, 0. This is illustrated in
Figure 3.20, where it can be seen that the type of impact has a large role in how much kinetic
energy is being preserved in the positive direction. A case between the purely elastic and purely
plastic impact will be somewhere in between the different lines.
Figure 3.20 Energy ratio as a function of mass ratio for a purely elastic case (e=1) and a
purely plastic case (e=0).
3.4.2 2DOF mass-spring systems
In accordance with Section 3.3, the SDOF-system can be extended to a multi-degree-of-
freedom (MDOF) system. This report will focus on a system with two DOF:s according to
Figure 3.21, since the model is of interest when transforming the beam and the drop weight to
a spring-mass system.
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
0.001 	0.01 	0.1 	1 	10 	100 	1000
Energy ratio,
 Ek,2 	/ E
k,0
 	[-]
Mass ratio, m1 / m2 [-]
e = 1,0
e = 0,0

-- 50 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 33
c2
k2 u2
m2
k1 u1
c1
m1 F(t)
Figure 3.21 2DOF spring-mass system.
Similar to Section 3.3, a free-body diagram of the system is drawn, and the forces are gathered
in Newton’s second law for each mass.
Rs2
Rd2
m2
Rd2
Rs2
a2=ü2	a1=ü1
Rs1
Rd2
m1 F(t)
Figure 3.22 Free body diagram of the system.
Using this, Newton’s second law is applied:
2	2	2
1	1	1
a	m	F
a	m	F




(3.73)
By assuming that the masses are displaced the distances un to the right of the position where the
spring forces are zero, the springs are in tension and want to get back to their original positions,
creating forces according to the free-body diagram. The damping effects have the same
influence on the masses. Force equilibrium of the free-body-diagram yields:
2	2	2	2
1	1	2	2	1	1
)	( u	m	t	F	R	R
u	m	R	R	R	R
s	d
s	d	s	d


			
				
(3.74)
If linear relations between the displacement and forces are assumed, the constitutive relations
of the system are
)	(
)	(
1	2	2	2
1	2	2	2
1	1	1
1	1	1
u	u	c	R
u	u	k	R
u	c	R
u	k	R
d
s
d
s
	

	
	


(3.75)
From this, two equations are formed
)	(	)	(	)	(
0	)	(	)	(
1	2	2	1	2	2	2	2
1	2	2	1	1	1	2	2	1	1	1	1
t	F	u	u	k	u	u	c	u	m
u	u	k	u	k	u	u	c	u	c	u	m
				
						
		
			
(3.76)
In matrix form, this becomes

-- 51 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
34
 	 	 				 		 	



	 		 	



		
F(t)	u	K	u	C	u	M
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

	
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

	
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
0
0
0
2
1
2	2
2	2	1
2
1
2	2
2	2	1
2
1
2
1
t	F	u
u
k	k
k	k	k
u
u
c	c
c	c	c
u
u
m
m
(3.77)
or
F(t)	Ku	u	C	u	M 		 		
(3.78)
which is the equation of motion of the dynamic 2DOF system. To solve this equation, both
numerical and analytical methods can be used. Analytical methods are exact, but only
manageable if the systems are simple. In this report, a numerical method called Central
Difference Method will be used, described in Section 3.5.
3.4.3 Free vibration of an undamped 2DOF system
If damping is not considered and the response from free vibrations is of interest, equation (3.78)
is reduced to
0	Ku	u	M 			
(3.79)
In accordance with Section 3.3.1, the response of the system can be assumed to undergo
harmonic motion:
)	cos(	)	(
)	cos(	)	(
2	2
1	1

	

	
	
	
t	U	t	u
t	U	t	u
(3.80)
Combining equations (3.79) and (3.80), the factor cos(ωt – α) becomes superfluous and the
equation system is reduced to the algebraic eigenvalue problem:
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

	
0
0
0
0
2
1
2
1	2
2	2
2	2	1
U
U
m
m
k	k
k	k	k
	
(3.81)
The solution U = 0 is trivial, so the only nontrivial solution is
0
0
0
2
1	2
2	2
2	2	1 	
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

	
m
m
k	k
k	k	k i	
	
(3.82)
This equation gives the circular natural frequencies of the system, which will have two values,
since there are two degrees of freedom.
In order to see how the system moves when subjected to a natural frequency, mode shapes are
determined. A mode shape is defined as the pattern of motion in which all parts of the system
move with a sinusoidal shape and with a fixed phase relation. In order to determine the mode
shapes of the system, each natural frequency is put back into equation (3.81), and a ratio
β = U2 / U1 is defined. The n:th mode shape of a system is then defined as
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


	
 1
2
1
n	n A	φ	
where	2	,	1		n	 (3.83)

-- 52 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 35
The total solution of a 2DOF system is then
t	B	t	A	t	B	t	A
t	u
t	u
t 2	2	2	2	2	2	1	1	1	1	1	1
2
1 sin	cos	sin	cos
)	(
)	(
)	(	

	
	
	 φ	φ	φ	φ	u 				





	
(3.84)
Where A1, A2, B1 and B2 are determined from initial conditions.
3.5 Numerical methods
3.5.1 General
In order to solve complex systems, there are a number of different numerical methods available.
Most methods are using time steps on the matrix equations in order to come up with a result.
The different numerical methods can be divided into implicit and explicit methods. In explicit
schemes, the discretized fields un+1 are described using the fields at previous times; un, u̇n and
ün, , while implicit schemes uses the fields at present times u̇n+1, ün+1 and earlier. This has the
effect that implicit schemes are unconditionally stable, i.e. they always provide a solution
regardless of the time step. They may, however, be inaccurate if too large time steps are used.
Explicit schemes are conditionally stable, i.e. they will result in stable solutions provided that
the time steps are small enough. If the time steps are too large, the solutions become unstable
and the error increases without bond. Since explicit schemes are using the fields at previous
times to describe the fields at present time, it also means that no convergence is needed, the
solution will always proceed forward until the specified number of time steps is reached.
3.5.2 Central Difference Method
For undamped SDOF or 2DOF systems, the Central Difference Method (CDM) is pertinent to
use. CDM is an explicit method, and preferable because of it’s simplicity and relatively high
accuracy. In order for the solution to be stable, the time step Δt must be smaller than the critical
time step Δtcr. This is to prevent initial errors propagating with time. According to (Johansson
& Laine 2012), the critical time step can be expressed as
max
2

	 cr	t	
(3.85)
where ωmax is the highest eigenfrequency for
 	 0	det 2 	 M	K	
	
(3.86)
The physical meaning of the critical time step is that the propagation of the wave should not be
longer than the actual length of the structural member, or an element length of it. In this sense,
the critical time step is expressed as
c
l
t el
cr 		
(3.87)
where lel is the length of an element of e.g. a bar, and c is the wave propagation speed in the
material, defined as

-- 53 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
36

E
c 	
(3.88)
where
 is the density of the material. The physical meaning of the critical time step for a bar
(for simplicity) is shown in Figure 3.23.
lel lel lel lel lel
tlcr∙c
Figure 3.23 Maximum critical time step.
Considerably smaller time steps than the critical time step may be required, however, due to a
necessary level of accuracy. The time step that is suitable for a given case can vary and depends
on the load and the response time of the system, but a time step smaller than one percent of the
duration of the load usually works (Johansson & Laine 2012). Hence,




	
100
1t
t
t cr
(3.89)
where t1 is the load duration.
Recall the equation of motion from Section 3.4.2:
F(t)	Ku	u	C	u	M 		 		
(3.90)
with the initial conditions
0
0
v	u
u	u


)	0	(
)	0	(

(3.91)
The fundamental concept of the Central Difference Method is shown in Figure 3.24.
u
un+1
t
un
un-1
Δt Δt
tn-1 tn tn+1
Figure 3.24 Central difference scheme, based on (Carlsson & Kristensson 2012).
From the figure, it can be approximated that

-- 54 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 37
t
n	n
n 

 	
2
1	1 u	u
u	
(3.92)
The acceleration is defined as the derivative of the velocity with regard to time. To get the
acceleration at a point tn, the difference of the middle point between the time steps of the
intervals in Figure 3.24 is used.
 	  	
 2
1	1	1	1	½	½ 2
2
2
2
2 t	t	t	t
n	n	n	n	n	n	n	n	n
n

	

	
		



 					 u	u	u	u	u	u	u	u	u
u 	

(3.93)
Inserting this in equation (3.90) yields, after some rearrangements:
  	  	  (t)
t	t	t	t	t n	n	n	n F	u	C	M	u	M	K	u	C	M 	








	






		







 	 1	2	2	1	2 2
1	1	2
2
1	1
(3.94)
which ultimately can be written as
 	 	   	  	
















	






					 
	
 1	2	2
1	1	2
1 2
1	1	2
2 n	n	n	n t	t	t
(t)	t	t u	C	M	u	M	K	F	C	M	u	
(3.95)
if the matrices M and C are diagonal, which is the case for a lumped mass-spring system.
Thereby, the solution in the next time step can be solved using the solutions from previous time
steps only, i.e. information that is already known. If damping is omitted, the solution becomes
    	  	








	






			 

 1	2	2
1	2
1
1	2 n	n	n	n
t	t
(t)	t Mu	u	M	K	F	M	u	
(3.96)
As can be seen, the time step un-1 is needed, which becomes a special case when the first time
step is calculated. For this, a particular starting step is used, expressed as
  0
2
0	0	1 2 u	v	u	u 
t
t 
					
(3.97)
derived from Taylor series expansion.
In short, the algorithm for the Central Difference Method is stated in Table 3.1.

-- 55 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
38
Table 3.1 Algorithm for Central Difference Method, in accordance with (Craig Jr &
Kurdila 2006).
Step Activity
Step 0 (0.1) Input the mass, damping and stiffness matrices M, C, K.
(0.2) Input the initial conditions u0 and v0 = u̇0.
(0.3) Select the time step Δt.
(0.4) Calculate the initial acceleration from equation of motion,
using initial conditions:
 		0	0
1
0 0 Ku	Cv	)	F(	M	u 		 	

(0.5) Calculate the “effective” mass matrix, defined as:
  










 C	M	M t	t 2
1	1	ˆ 2
(0.6) Calculate the starting step according to equation (3.97).
Step 1 Loop for each time step, n=1,2…
Step 2 Calculate the displacements at the next time step using
equation (3.96), with1	ˆ 
M	 as	 	 	1	1	2 2 	 		 C	M t	t
Step 4 If there is an interest of the velocity or acceleration at the specific time
step, evaluate these according to equations (3.92) and (3.93).
Step 5 Set n to n+1 and continue to next step
If the material has non-linear material response, which can often be the case, the stiffness matrix
will change with time. The Central Difference Method handles this in a relatively easy manner.
It is possible to use a secant stiffness at the time t+Δt, to describe a non-linear response.
However, if damping is present it is important to always state the factor c as a function of the
elastic stiffness kel, and not the secant stiffness at time ti
Instead of stiffness, it is more convenient to refer to the inner resistance that is applied on the
system at time t. The resistance at an arbitrary time can then be described according to
Figure 3.25.

-- 56 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 39
u
R
u(tk)
R(ti)
k(u(ti)) k(u(tj))
u(ti) u(tj)
k(u(tk))
R(tj)
Figure 3.25 Secant stiffness k at time t for a system with an arbitrary response (Johansson
& Laine 2012).
3.6 Strain rate effects
When a structure is subjected to some sort of transient load, the effect of strain rate [s-1] will
have an effect on the response. Strain rate is best explained as the change of strain over time as
previously mentioned, and is usually denoted	.	
	 The strain rate effect is a factor that influences
the dynamic loading to have a larger effect on the structure than what would have been the case
with regular static loading. The magnitude of the strain rate for different types of loading is
shown in Figure 3.26.
10-8 10-7 10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
creep static earthquake hard impact blast
strain rate [s-1]
Figure 3.26 Strain rate influence for different load cases. (Johansson 2000)
Particularly high strain rates can greatly influence the material properties for a given material,
as is shown in Figure 3.27 where the concrete strength is enhanced significantly when subjected
to high strain rates. The strain rate effects are measured in dynamic implification factor, DIF,
defined as:
sta
dyn
F
F
DIF 	
(3.98)
where Fdyn is the dynamic load and Fsta is the static load.

-- 57 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
40
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
Figure 3.27 Different studies of the dynamic implification factor-strain rate relations for
concrete in tension. (Johansson 2000)
The reason for the strength increase at high strain rates is mainly due to structural effects such
as inertia and confinement. When the load is applied at a pace that can be regarded as static
loading, the crack gets the time it needs to find the weakest path in the material, i.e. finds a path
that demands a lower energy consumption. If the strain rate is high enough in the case of impact
loading, however, this time is not given, and it is no longer possible for the crack to choose the
path of minimum energy consumption. Instead, the crack is forced to propagate through
stronger zones.
The same increase is present for reinforcement, and at high strain rates both the yield and the
ultimate stresses increase. Strain rate effects are more thoroughly treated in e.g.
(Johansson 2000).

-- 58 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 41
Transformation of Structural Members to Spring-Mass
Systems
4.1 Introduction
In order to treat the system with the beam and the drop weight as a simplified 2DOF system
described in the previous chapter, there are certain measures to be taken to transform the
parameters of the structural members into lumped masses and stiffness properties. Since it is a
simplification, it will introduce errors in the analysis. However, one of the tasks in this report
is to see if the errors are negligible. According to the 2DOF model, the lowest eigenfrequency
for the beam and the lowest eigenfrequency for the drop weight with the corresponding mode
shapes will only be accounted for, while in reality the number of eigenfrequencies are infinite.
This is nevertheless considered to be a reasonable approximation since only the lowest
eigenfrequencies will have a significant effect on the system, at least when looking at
deformations. If moments and shear forces where to be considered in an accurate way, more
effort regarding the eigenfrequencies would have been required.
For the same reasons as in previous chapters, the damping effect is omitted in further
calculations. In order to convert the real system into the equivalent system in terms of load,
mass, resistance and stiffness, dimensionless transformation factors are introduced. By
multiplying the real structure parameters with the corresponding transformation factors, the
parameters for the equivalent 2DOF system are obtained.
L2, E2, m2, I2
L1, E1, m1, A1	v1
v1 m1,e
m2,e
R(u)1
R(u)2
Figure 4.1 The beam-drop weight system and the equivalent transformed mass-spring
system.
The transformation factors are denoted
. Looking at one structural member only, the mass,
stiffness and load, respectively, can be transformed to the equivalent SDOF system by the
following expressions (Biggs 1964):
m	m m	e	
		
 (4.1)
k	k k	e	
		
 (4.2)
F	F F	e	
		
 (4.3)
where index e stands for equivalent. If linear elastic response is assumed (R(u) = ku), the
undamped equation of motion is
)	(t	F	ku	u	m 				
 (4.4)

-- 59 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
42
Combining equations (4.1) – (4.3) and equation (4.4), the equivalent SDOF system is
)	(t	F	ku	u	m F	k	m	

	
	 				
 (4.5)
or, in a more general way:
)	(	)	( t	F	u	R	u	m F	k	m	

	
	 				
 (4.6)
where R(u) is the internal resistance of the member when subjected to some sort of loading.
4.2 Beam to SDOF
Another fundamental concept in the transformation process is the system point of the structural
member. If the member is assumed to have a linear elastic response, the displacement shape
will be a function of the type of loading and the given boundary conditions. The shape will
remain the same regardless of the magnitude of the load. The system point makes it possible to
describe the displacement along the beam by using one point only. The point is supplied with
certain characteristics so that the displacement us corresponds to the displacement in a SDOF
system, see Figure 4.2. The system is transformed to a SDOF system by applying the equivalent
parameters from equations (4.1) – (4.3) in the system point.
L, E, m, I us
us
F(t)
Fe(t)
me
ke
Figure 4.2 A beam transformed into an equivalent SDOF system.
The system point of a structural member is usually chosen to be the point with maximum
displacement, or the midpoint of the member (Johansson & Laine 2012). For the beam in
Figure 4.2, these two points coincide:
SDOF	s u	u 	
 (4.7)
The only load case considered in this thesis is where the beam is simply supported with a point
load at the centre of the span, and this case is the only case treated when deriving the
transformation factors in the forthcoming sections.
To get the pertinent transformation factors for the beam, they are derived under the condition
that the energy should be conserved between the two systems, both regarding the mass and the
work done by the external force F(t) and the internal resistance R (Johansson & Laine 2012).

-- 60 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 43
4.2.1 Conservation of the kinetic energy -
m
4.2.1.1 Derivation
The kinetic energy for a prismatic beam is
dx
x	v	x	m
E
L
b	k  

0
2
, 2
)	(	)	(
(4.8)
where v(x) is the vertical velocity at x and m’(x) is the mass in kg/m. Since the beam has a
constant cross section, the mass per unit length will be constant, m’(x)=m’const and the total
mass of the beam will be
L	m	m const	'		
(4.9)
The kinetic energy for the equivalent mass-spring system is
2
2
,
s	e
e	k
v	m
E 	
(4.10)
And since the energy should be conserved between the two systems:
dx
L
x	mv	v	m L
s	e
	
0
2	2
2
)	(
2
(4.11)
The velocities in equation (4.11) are defined as
t
u
v s
s 

	
(4.12)
and
t
x	u
x	v 

 )	(
)	(	
(4.13)
making equation (4.11)
dx	x	u
L
m
u	m
L
s	e 	
0
2	2 )	(	
(4.14)
Combining equations (4.1) and (4.14), the transformation factor for the mass of the system can
be defined as:
dx	x	u
Lu
L
s
m 	
0
2
2 )	(
1
	
(4.15)
This means that the transformation factor for the mass is dependent on the displacement shape
of the beam, hence the loading of the beam and the type of response matters.

-- 61 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
44
4.2.1.2 Linear elastic material
When linear elastic material response is assumed, the displacement shape will look like in
Figure 4.3 and the response can according to (Jensen 2013) be described by





 	 2
3	2 4
3
48
)	( L
x
x
EI
FL
x	u	
(4.16)
F
L
x
Figure 4.3 Displacement shape of a simply supported beam with a point load at the
centre, linear elastic response.
From equation (4.16) it can be seen that the displacement in the system point (i.e. at x=L/2) is
EI
FL
us 48
3
	
(4.17)
Using equation (4.15), the elastic mass transformation factor can be derived:
L	L	L
el	m L
x
L
x
x
L
dx
L
x
x
L
dx
L
x
x
EI
FL
L
EI
FL
0
4
7
2
5
3
3
0
2
2
3
3
0
2
2
3
2	3
2	2
, 7
16
5
24
3
1	4
3
1	4
3
48
48 




 			




 		




 
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

 		
	
(4.18)
which finally yields
486	.	0
35
17
, 		el	m	
	
(4.19)
4.2.1.3 Ideal plastic material
For a simply supported beam with plastic response subjected to a point load, the displacement
varies linearly according to Figure 4.4. If the beam has constant material parameters across the
length, a plastic hinge will form in the section subjected to the largest moment, i.e. the centre
of the beam in the case with a point load at the midpoint. When the plastic hinge has formed, a
mechanism is formed and the displacement will go to infinity.
F
L
x
Figure 4.4 Displacement shape of a simply supported beam with a point load at the
centre, ideal plastic response.

-- 62 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 45
The maximum displacement of the beam will take place in the system point, and the response
at the section x can be expressed as
s	u
L
x
x	u 2
)	( 2
0 L
x 	
s	u
L
x	L
x	u )	(	2
)	( 
	L	x
L 	
2
(4.20)
Again, using equation (4.15), the transformation factor for a beam with purely plastic response
is
 	
 	
3
1
24	24
4
3	3
4
4	)	(	2	2	1
3	3
3
2
3	2
0
3
3
2
2
2
0
2
3
2
2	2
0
2
2	,
	




 	















 
	

















		















 
	





 			
L	L
L
x	L	x
L
dx	x	L	dx	x
L
dx	u
L
x	L
dx	u
L
x
Lu
L
L
L
L
L
L
L
L
s
L
s
s
pl	m	

(4.21)
4.2.2 Conservation of the external energy –
F
The external energy for a beam with constant cross section is:
dx	x	u	x	q	W
L
b	e  	
0
, )	(	)	(	
(4.22)
where q(x) [N/m] is an arbitrary load acting on the beam. The external energy for the equivalent
mass-spring system is:
s	e	e	e u	t	F	W )	(	, 	
(4.23)
Like before, in order to conserve the energy:
dx	x	u	x	q	u	t	F
L
s	e  	
0
)	(	)	(	)	(	
(4.24)
Using equation (4.3), the expression for the transformation factor for the load becomes:
dx	x	u	x	q
Fu
L
s
F  	
0
)	(	)	(
1
	
(4.25)
If the load acting on the beam is a concentrated load acting in the middle of the beam (at x=xs),

-- 63 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
46
dx	x	u
Lu
L
s
s
F 	
0
)	(
1
	
(4.26)
Looking at equation (4.26), it can be concluded that independent of the material response, the
transformation factor for the load when having a concentrated load at the centre of the beam is
always the same, namely:
0	.	1	,	, 	 pl	F	el	F	

		
(4.27)
4.2.3 Conservation of the internal energy –
k
The resistance of a structural element is the internal force trying to restore the element to its
unloaded shape. In elastic cases, this will have an oscillating effect on the system, since the
resisting force will change signs as it passes the unloaded point. The internal work is directly
dependent on the material response of the system.
As stated in Section 3.1, the internal energy can be defined as:
2	2
2
el	el
i
u	K	u	R
W 


	
(4.28)
for a linear elastic material or:
pl	i u	R	W 		
(4.29)
for an ideally plastic material.
4.2.3.1 Linear elastic material
According to (Nyström 2006), the internal work for a beam with linear elastic response can be
stated as:
dx
dx
u	d
x	M
GA
V
EA
N
W
L
b	i  




 		
0
2
2	2	2
, )	(
2
1	

(4.30)
where
E	
Young’s modulus
G	
Shear modulus
A	
Cross sectional area
N	
Normal force
V	
Shear force
	
Shape factor for shear
)	(x	M	
Moment along the beam length
If there is no normal force in the beam, and the beam height is small enough to neglect the
shear as the case is in Euler-Bernoulli beams, the expression is reduced to:

-- 64 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 47
dx
dx
u	d
x	M	W
L
b	i 	
0
2
2
, )	(
2
1
(4.31)
The internal work for a linear elastic SDOF system is stated as:
2
2
,
s	e
e	i
u	k
W 
	
(4.32)
Energy conservation between the systems is presumed:
dx
dx
u	d
x	M
u	k L
s	e
	

0
2
2	2
)	(
2
1
2
(4.33)
and, similar to previous sections, equations (4.2) and (4.33) are combined to get the
transformation factor for the stiffness:
dx
dx
u	d
x	M
ku
L
s
el	k 	
0
2
2
2	, )	(
1
	
(4.34)
Since
s	u
F
k 	
(4.35)
the final expression for the transformation factor becomes:
dx
dx
u	d
x	M
Fu
L
s
el	k 	
0
2
2
, )	(
1
	
(4.36)
4.2.3.2 Ideally plastic material
Again, according to (Nyström 2006), the internal work for a beam with plastic response is:
dx
dx
u	d
x	M	W
L
b	i 	
0
2
2
, )	(	
(4.37)
where M(x)=M, i.e. the moment is constant in the regarded segment of the beam. When the
equivalent SDOF system has an ideally plastic material response, the internal work is:
s	e	m	e	i u	R	W ,	, 	
(4.38)
where Rm,e is the maximum equivalent resisting force of the system. In accordance with
equations (4.1) to (4.3), if plastic response is assumed:
m	pl	k	me R	R ,	
		
 (4.39)

-- 65 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
48
Using this, and applying the principles of energy conservation, the transformation factor for the
stiffness can ultimately be written as
dx
dx
u	d
x	M
u	R
L
s	m
pl	k 	
0
2
2
, )	(
1
	
(4.40)
4.2.4 Summary of the transformation factors
The resisting force of the structure should, according to previous sections, perform a work that
is as big as the external work performed by the system. This statement ultimately gives that the
transformation factors for external and internal work, respectively, is equal as well
(Biggs 1964):
F	k	

	 	
(4.41)
By dividing equation (4.6) with the transformation factor for the load:
)	(	)	( t	F	u	R	u	m
F
m 		


 (4.42)
If introducing a new factor
F
m	b
mF


 	
 (4.43)
the differential equation for the equivalent SDOF system can be written as
)	(	)	( t	F	u	R	u	mb
mF 			
	
 (4.44)
Note that since	
F=1.0, the only factor affecting the equivalent SDOF system is the
transformation factor for the mass. Nevertheless, the different factors for the case with a point
load in the midpoint of a simply supported beam are summarized in Table 4.1.
Table 4.1 Transformation factors for a beam.
Case Material
response
m
	
F	
k	
bmF
F
l
x
Elastic 0.486 1.00 1.00 0.486
Plastic 0.333 1.00 1.00 0.333

-- 66 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 49
4.3 Drop weight to SDOF
The transformation of the drop weight into the equivalent SDOF system is made in a similar
way as for the beam. A large difference in this case, however, is that the drop weight will have
to be able to handle axial displacement instead of transversal displacement, i.e. it is a bar instead
of a beam.
u2
u1
u2
u1 u3
u4
Figure 4.5 Degrees of freedom for a beam and a bar, respectively.
The assumptions regarding the system point of the bar still holds. If the member is assumed to
have a linear elastic response, the displacement shape will be a function of the load, but the
shape will remain the same regardless of the magnitude of the load. The system point of a
structural member is, as mentioned in the previous chapter, often chosen either in the midpoint
of the member or at the point with maximum displacement. Unlike the beam case, these two
points do not coincide in a bar.
q(x,t)
E,A,L
x
(x)
Figure 4.6 A bar and the corresponding compression shape, assuming linear elastic
material response and a uniformly distributed load.
Consider Figure 4.6. If the bar is not subjected to any point loads, only a distributed load (e.g.
the self-weight of the drop weight), the maximum strain takes place where x = L, independent
of the ability for the base to move, which might be the case.
Now consider a falling bar that hits a fixed surface, displayed in Figure 4.7.
A,E,L v(t)
A,E,L
q(x,t)
Figure 4.7 A falling bar.

-- 67 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
50
Using this way of thinking, it is easy to see that the maximum displacement due to the effect of
the self-weight of the bar will take place in the bottom of the bar, i.e. where x = L.
A,E,L us
q(x,t)
Fe(t)
us
Figure 4.8 A bar transformed into an equivalent SDOF system.
The system point of the bar is then suitably chosen as the point where x=L, which means that
)	(L	u	us 	
(4.45)
In this report, the assumption that the base of the system in Figure 4.8 will be fixed, at least
when deriving the pertinent parameters for the equivalent SDOF system is made. When creating
a 2DOF system of the bar and the beam, this is no longer true since the equivalent mass of the
bar will be placed on top of the equivalent SDOF system for the beam (which can move
according to the previous section). A discussion can be held about this assumption, taking
classic impact theory into account. However, the fact that the velocity of the movement of the
beam will be small in comparison to the velocity of the bar when hitting the beam makes this
effect relatively small, which is why this effect is omitted when deriving the transformation
factors and transforming the bar into a SDOF system. In order to somehow take this
phenomenon into account when looking at the real behaviour of the system, further discussion
is made in Section 4.4.2.
As for the beam system, the transformation factors for a bar will be based on the principle of
energy conservation.
4.3.1 Conservation of the kinetic energy -
m
The kinetic energy for a bar with constant cross section is, similar to the beam:
dx
x	v	x	m
E
L
bar	k  

0
2
, 2
)	(	)	(
(4.46)
where v(x) is the vertical velocity at x and m(x) is the mass in kg/m. Since the expression is
identical to the beam, it can be concluded that the transformation factor for the mass,
m, is
derived using the same expression as well:
dx	x	u
Lu
L
s
m 	
0
2
2 )	(
1
	
(4.47)
If linear elastic material properties are assumed:

-- 68 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 51
)	(	)	( x	ku	x	x	q 	
(4.48)
where k = AE/L since it is a bar.
The displacement u(x), i.e. the change in length of the bar, can then be expressed as
AE
xL	x	q
x	u )	(
)	( 	
(4.49)
In the static case, the load acting on the bar is from the self-weight only. If the mass is
considered evenly distributed along the bar, and constant across the cross section, the load q(x)
can be described as
g	x	m	x	q )	(	)	( 	
(4.50)
where g is the gravitational acceleration. If the bar is prismatic; m(x)=m’const. The displacement
at the system point can be expressed as
AE
gL	m
L	u	u const
s
2
'
)	( 		
(4.51)
Inserting the expressions for the displacement into equation (4.47):
3
1
3
1	1
0
3
3
0
2
2	2
2
0
2
2	2
	


















	











 	
L	L
const
const
L
const
const
m
x
L
dx	x
AE
gL	m
L
AE
gL	m
dx
AE
gxL	m
AE
gL	m
L
	
(4.52)
which is the same result as for the plastic response in the beam case. This is reasonable, since
the plastic response of a beam and the response of the bar has the same triangular shape
according to Figure 4.9.
F
L
x
q(x,t)
E,A,L
x
Figure 4.9 Displacement shape of a simply supported beam with ideal plastic response
and the response of a bar.
The bar will, however, hit the beam in the system, making the actual load application on the bar
to resemble a point load hitting the bar. In that sense, it can be discussed if the response of the
displacement shape will look like in Figure 4.9 or if it will resemble a displacement shape of a
rigid body. This is more discussed in Section 4.4.2.

-- 69 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
52
4.3.2 Conservation of the external energy –
F
As for the beam, the external energy for a prismatic bar is
dx	t	x	u	t	x	q	W
L
bar	e  	
0
, )	,	(	)	,	(	
(4.53)
The external energy for the equivalent mass-spring system is
s	e	e	e u	t	F	W )	(	, 	
(4.54)
Using equations (4.3), (4.54) and (4.56), and the fact that
	
L
dx	t	x	q	t	F
0
)	,	(	)	(	
(4.55)
it can be stated that
dx	t	x	u	t	x	q
dx	t	x	q	u
L
L
s
F 

	
0
0
)	,	(	)	,	(
)	,	(
1

(4.56)
In case of a uniformly distributed load along the bar, q(x,t)=mconstg. Equations (4.56) and (4.51)
then give the value of the transformation factor:
 
500	.	0
2
1
2
1
2
1
1 2
0
2
0
2	2	2
2	2
0
0
2	2	2 			





		 
 L
L
L
x
x
AE
L	g	m
AE
L	g	m
dx
AE
gxL	m
g	m
dx
AE
L	g	m
L
L	const
const
	L
const
const	L
const
F	
	
(4.57)
4.3.3 Conservation of the internal energy –
k
In accordance with Section 4.2.3, the transformation factors for elastic and plastic response, is
derived from equation (4.30). However, in the case with bars there is no moment present.
Instead there is a normal force, which ultimately gives:
dx
EA
N
Fu
L
s
el	k 	
0
2
,
1
	
(4.58)
dx
EA
N
u	R
L
s	m
pl	k 	
0
2
,
1
	
(4.59)
4.3.4 Summary of the transformation factors
As with the case with the beam, the principle of energy conservation gives that
F	k	

	 	
(4.60)

-- 70 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 53
according to (Biggs 1964), which ultimately means that
500	.	0		k	
	
(4.61)
when looking at the transformation of the drop weight to a SDOF system. This, in turn, means
that the factor before R(u) in equation (4.62) becomes 1.
Consequently, the differential equation for the equivalent SDOF for bars system can, similarly
to beams, be written as
)	(	)	(	, t	F	u	R	u	m	bar	mF 			
	
 (4.62)
In this case, however,
F≠1, as was the case for beams. This means that both the transformation
of the mass and the transformation of the load affects the equivalent SDOF system for bars. The
transformation factors for a bar are summarized in Table 4.2.
Table 4.2 Transformation factors for a bar.
Case Material
response
m
	
F	
k	bar	mF,	

q(x,t)
E,A,L
x
Elastic/plastic 0.3333 0.5000 0.5000 0.6667
4.4 Equivalent 2DOF-system
Since the model itself assumes lumped masses for the different structural members, it has the
effect that the mass equations will be uncoupled when creating a 2DOF system. This means
that the beam and bar SDOF systems presented in previous chapters can be added to form one
2DOF system in accordance with Figure 4.10.
+
bar
beam	m2,e m1,e
R2,e R1,e
R1,e
R2,e
m1,e
m2,e
Figure 4.10 Two SDOF system becomes one 2DOF system.
In accordance with Section 3.4, where the equation of motion for a 2DOF system is derived, it
can be stated that:

-- 71 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
54
0	Ku	u	M 			
(4.63)
if linear elastic material is assumed, where






 e
e
m
m
,2
,1
0
0
M	
(4.64)
and






	

 e	e	e
e	e
k	k	k
k	k
,2	,1	,1
,1	,1
K	
(4.65)
This ultimately becomes:







2
1
0
0
m
m
b
mF
bar
mF


M	
(4.66)
and












	


3
2
2	2
1
1	1
1
1	1
1
1	1
1
1	1
48
L
I	E
L
E	A
L
E	A
L
E	A
L
E	A
K	
(4.67)
where index 1 is for the bar and index 2 is for the beam. If elastoplastic response is assumed,
equation (4.63) is instead expressed as:
0	R	u	M 			
(4.68)
where






	


2	1	1
1	1
R	R	R
R	R
R	
(4.69)
R1 and R2 are found using equation (2.14), which can be written:
1,
1,
, el
el
i	m
i
i u	u
u	u
if
if
R
u	k
R 



 
	
(4.70)
Since R depends on the size of the load and, more importantly in this case, the displacement, it
must be updated in each time step when calculating the response using the Central Difference
Method.
The mass-spring system described has, in this case, a crucial flaw if comparing its results with
the real behaviour of the beam – drop weight system. The internal resisting force of the spring
between the masses (denoted R1,e in Figure 4.10) only has a value separated from zero if the
spring is in compression. If the spring is in tension, and the bar is moving away from the beam
(which is the case if the collision is e.g. purely elastic), there is nothing that connects the two
members, so the stiffness in this case must be zero.

-- 72 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 55
This is not captured if using the conventional method of deriving R1 described by
equation (4.70), so in order to capture this behaviour, equation (4.70) is extended to:







	

0	0
1,
1,
,
u
u	u
u	u
if
if	R
if	u	k
R el
el
i	m
i
i	
(4.71)
4.4.1 Maximum internal resistance, Rm
Regarding the maximum plastic resistance, Rm, it obviously differs depending on if it is the
beam or the bar that is considered. For the beam, the maximum internal resistance Rm is derived
by looking at the moment capacity of the beam subjected to a point load F in the middle of the
span, similar to Figure 4.9. The maximum moment of the beam is then expressed as:
4
FL
M Ed 	
(4.72)
If the beam is loaded until it fails in bending, equation (4.72) can be rewritten as:
m
Rd R
L
M
F 	 4
(4.73)
which is the maximum plastic internal resisting force of the beam.
This force does not take the self-weight of the beam into account, however. The self-weight
acts as a static load on the beam, but will have an influence of the dynamic response. How static
loads effect the dynamic response is treated in (Johansson 2014). In short, the self-weight can
be taken into account by modifying the internal resistance in accordance with Figure 4.11. This
way, Rm,mod is used in the 2DOF model and will be slightly lower than the original value, hence
the self-weight will make the response slightly more prone to plasticize.
u
R
Rm
R’
u’ Fsta
Rm,mod
Figure 4.11 Influence of static loads on the dynamic response. Based on (Johansson 2014).
Rm,mod is then calculated as:
8
4 2
mod	,
gL
L
M
F	R	R Rd
sta	m	m 				
(4.74)
if it is the self-weight that is considered as the static load, where g is the self-weight [kN/m].

-- 73 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
56
For the bar, the maximum internal resistance Rm can be derived from the definition of normal
stress (equation (2.8)):
A
R
f
A
F m	
		
		
(4.75)
where f is the strength [Pa]. Using this, Rm ultimately becomes:
4
2
d
f	Rm

	
(4.76)
if a circular impact area is assumed, where d is the diameter of the impact zone.
The value of the strength depends on what is happening at impact. Apart from the resistance of
the bar, the local behaviour of where the bar hits the beam must also be considered, shown in
Figure 4.12. This local zone will not have the stiffness properties of the entire beam, but will
be reduced to the local stiffness of the concrete itself.
L2, E2, m2, I2
L1, E1, m1, A1	v1 v1
Figure 4.12 The beam-drop weight system and the equivalent transformed mass-spring
system.
This means that Rm of the bar/local impact zone will have a value between:
4	4
2	2 d
f	R
d
f y	m	cc

	 		
(4.77)
where fcc is the concrete compression strength and fy is the yield strength of the steel in the bar.
The values of fcc are in the range of 25–40 MPa for ordinary concrete, and fy of the steel is often
in the range of 250–400 MPa for ordinary steel. This means that the value of Rm can differ
vastly, at most with a factor of 10.
However, the influence of lateral confinement described in Section 2.4.1 will have an effect on
the lower bond of equation (4.77). The concrete compression strength will be higher in the
impact zone due to the lateral confinement provided by the surrounding material in the beam.
Strain rate effects will also have an effect on the concrete strength, making it stronger. The
increase of Rm due to these effect is uncertain, but it will probably have a value that is 3–5 times
higher than the value of Rm using fcc only.

-- 74 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 57
This is not treated in the current version of Eurocode, but the fact that the strength of the
concrete increases locally is treated in e.g. (Boverket 2004), where a modified value of fcc could
be obtained.
4.4.2 Transformation factors
The values of the transformation factors of a bar according to Table 4.2 in Section 4.3.4 are the
theoretical values, only taking the properties of the bar into account. It can be discussed,
however, how these values correlate to the real behaviour of the system. The derived values for
the bar come from the assumption that both the elastic and plastic deformation shape is
triangular according to the right part of Figure 4.13. This statement is based on the fact that the
base is fixed, which is not entirely true for the 2DOF system, since the base of the spring rests
on the other mass of the system, i.e. the transformed beam.
F(t)
E,A,L
x
u(x) q(x,t)
E,A,L
x
u(x)
Figure 4.13 Different displacement shapes of a bar, depending on the applied load.
If the compression of the bar is disregarded, and only the movement of the base (i.e. the beam)
is considered, the bar will move as a rigid body and the displacement shape will look like the
left part of Figure 4.13.
In the experiment, the only – if any – part that will plasticize in the drop weight will be close to
the part that hits the beam, making the plastic influence of the displacement shape looking like
in Figure 4.14.
u(x)
plastic
zone
Figure 4.14 Displacement shape of the bar in the experiment.
In reality, the behaviour will be somewhere in between the described shapes, and the influence
of the respective shape depends on the stiffness of the springs in the systems. If the bending
stiffness of the beam is high, the shape will have more influence of the triangular shape, since
the base of the bar will resemble a fixed support more. If the bending stiffness of the beam is

-- 75 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
58
low, however, the bar will behave more like a rigid body and the shape will have more
resemblance to the pure rectangular shape.
Low k1
(More influence of the
rectangular shape)
High k1
(More influence of
the triangular shape)
u u
Figure 4.15 Influence on the displacement shapes from the boundary conditions.
Since the influence of the boundary conditions has an effect on the displacement shape, it will
also have an influence on the transformation factors of the bar. The cases described in previous
sections have assumed ideal behaviours. In Section 4.3 an ideal triangular shape, with the
corresponding transformation factors derived from this shape is presented. When the
displacement shape is ideally rectangular, the transformation factors will be 1.0 since the
displacement are constant (u(x) = u = us) along the member. To show this, equation (4.15) is
used:
  	000	.	1
1 2
2
0
2
2 		  L
Lu
u
dx	u
Lu s
L
s
m	
	
(4.78)
In accordance with equation (4.26),
F,
k and
mF is also 1.0. To conclude, it can be stated that
the transformation factors for the bar is going to be in between the values of the ideal cases
depending on the stiffness of the “support” and the bar, according to Table 4.3.

-- 76 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 59
Table 4.3 Transformation factors for a bar, influence of the boundary conditions.
Ideal displacement shape	
m
	
F	
kbar
mF	

E,A,L
x
u(x)
0.333 0.500 0.500 0.667
E,A,L
x
u(x)
1.000 1.000 1.0000 1.000
If looking at the combined transformation factor
mF only, it can be stated that depending on
the shape of the displacement of the bar, the factor will have a value in the range:
000	.	1	667	.	0 	 mF	
	
(4.79)
In the case covered in this report, the stiffness of the bar will be large compared to the stiffness
of the beam, hence:
000	.	1		mF	
	
(4.80)

-- 77 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
60
Experiment and FE-modelling
5.1 Introduction
The experiments performed and further described in Section 5.2 is simulated using finite
element (FE) software. This chapter describes the set up and parameters of the performed
experiments, and the theory and choice of pertinent indata for the different FE-analyses.
Different material models, meshing etc. will be discussed. Two simplified FE-models are made
using ADINA (ADINA R & D Inc. 2015) explained in Section 5.3, and a more advanced FE-
model is created using LS-DYNA (LS-DYNA 2014b) (Section 5.4). The intention was to
compare the results from these FE-models with the experimental results and at a later stage
evaluate how well the models followed the real behaviour of the loaded beam.
5.2 Experiments
The tests described in this chapter was a part of a PhD project carried out by Jonas Ekström at
the department of Civil and Environmental Engineering at Chalmers University of Technology.
They served as a pre-test for the main test series conducted at a later stage, which was beyond
the scope of this thesis. The experiment set up was inspired by (Ågårdh et al. 1997) where a
concrete beam was subjected to a falling drop weight. The main purpose of the test series was
to contribute to the understanding of the influence of impact loading on concrete structures, by
obtaining reasonable test results that can be compared to results from calculation models. A
secondary purpose was to investigate whether high speed recording and the use of an analytical
software was a viable method to perform such tests, and to make suggestions on how this
method can be improved in further research.
5.2.1 Test setup
A concrete beam was placed on top of two roller supports made of steel. The beam was simply
supported with no restraints in the upwards direction, shown in Figure 5.1 and Figure 5.2. One
side of the concrete beam was painted white and a black pattern was spread over approximately
half of the white background in order for the visual contrast to be enhanced. A high speed
camera was placed directly in front of the beam, and was facing the painted side. It was assumed
that the reaction of the beam would be close to symmetric. Due to these symmetry conditions,
only half of the beam was included in the camera frame. This saved data storage and added to
the resolution quality of the recorded pictures. Two lamps were placed in front of the beam in
order to have optimal lighting conditions for the high speed camera recording.

-- 78 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 61
Figure 5.1 Test set up showing the beam geometry and boundary conditions.
Figure 5.2 Test set up in the laboratory. Photo by Jimmy Lovén.
Above the centre of the beam, there was a device to pull up and release the drop weight. The
device consisted of three slender rods forming a long cage that directed the drop weight to hit
the centre of the beam, shown in Figure 5.3.

-- 79 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
62
Figure 5.3 Test set up showing the drop weight device. Photo by Erla Sara Svavarsdóttir.
At the top of the cage, a simple truss system was placed to pull the drop weight up to the desired
height. The drop weight itself was a cylindrical steel rod with a rounded tip, dimensions are
shown in Table 5.1 and the cross section is shown in Figure 5.4. A hole was drilled in the centre
of the drop weight in order for an accelerometer to be placed inside. However, the accelerometer
turned out to be malfunctional and did therefore not contribute to the experiment results. After
pulling the drop weight up it was released from the truss system by pulling on a lever, allowing
it to accelerate towards the beam.

-- 80 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 63
Table 5.1 Properties of the drop weight.
Length [mm] 260
Diameter [mm] 80
Weight [kg] 10.093
Radius of rounded tip [mm] 400
Steel type 1.4301/07
Modulus of elasticity, E [GPa] 200
0.2%-strength, f0.2 [MPa] 270
Ultimate steel strength, fu [MPa] 600
Figure 5.4 Cross section of the drop weight.
A sensor was placed in the lower end of the drop weight cage. When the drop weight passed
the sensor, it activated the recording of the high speed camera, which then documented the
impact of the drop weight on the beam and the following response of the beam.
[mm]
m=10.093kg

-- 81 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
64
The number of components in the drop weight system was kept to a minimum. The simplicity
of the system was considered to be important since it allows for a clearer visualisation of what
was happening in each part.
The test was performed on 16 beams according to Table 5.2, all having the same dimensions as
shown in
Table 5.3. Seven of those beams contained fibre reinforcement and three were plain concrete
with no reinforcement. Those beams were not within the scope of this thesis. The remaining
beams were six reinforced plane concrete (RPC) beams with reinforcement arrangement as
shown in
Table 5.3 and Figure 5.5.
Table 5.2 Beams used in the experimental series.
Plain concrete (3) PC
Reinforced plan concrete (6) RPC
Fibre concrete (3) FC
Reinforced fibre concrete (4) RFC
Table 5.3 Properties of the RPC beams.
Height [m] 0.10
Width [m] 0.10
Length [m] 1.18
Span [m] 1.00
Number of tested beams [-] 6
Reinforcement diameter, φ [mm] 6
Number of tensile reinforcement
bars [-] 2
Number of compression
reinforcement bars [-] 2
Concrete cover (distance to
centre of reinforcement) [mm] 20
Reinforcement class [-] K500C-T

-- 82 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 65
Figure 5.5 Cross section of the concrete beam.
For the first RPC beam the drop weight was released from a height of 3.5 m, and it was then
decided to increase the drop height to 5.5 m. The result from the first test was disregarded in
the analysis in this thesis, since the drop height was different.
The concrete beams that do not contain fibres were all casted from the same mixture. The
concrete mix description can be seen in Table 5.4.
Table 5.4 Description of concrete mixture for plane concrete and plane reinforced
concrete specimens.
Concrete constituents Description Amount [kg/m3]
Cement CEM II/A-LL 42.5 R 335
Limestone filler Limus 40 (Nordkalk) 160
Sand Natural from Sköllunga (Ucklum) 747.3
Aggregates 4-8mm Crushed 268.9
Aggregates 8-16mm Crushed 717.1
Superplasticiser MasterGlenium 51/18 (BASF) 0.268
Water 184.3
w-c ratio 0.55
In order to get material properties for the concrete, specimens were casted for testing purposes
using the same concrete batch. The specimens were both cylinder and cubic with dimensions
according to (CEN 2009a) and (CEN 2009b). Compressive strength tests using cylinders were
performed 28 days after casting and again 45 days after casting, which is the day after the drop
weight experiments were performed. The tests followed the procedures described in
(CEN 2009a). A tensile strength test using cubic concrete samples as prescribed (CEN 2009b)
was performed 45 days after casting. The resulting values for all concrete strength tests can be
seen in Appendix C. In Table 5.5 the calculated average values from all the tested specimens

-- 83 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
66
are shown. They represent the mean values of the material strength. These values are used to
calculate the modulus of elasticity as:
3.0
10
22 





	 cm
cm
f
E	
(5.1)
where fcm is the mean compressive strength of a cylinder in MPa and the resulting value for Ecm
is in GPa, as presented in (CEN 2004). The resulting values are shown in Table 5.5.
The theoretical fracture energy of the concrete was calculated according to (Fib 2013) using the
following equation:
18	.0
73 cm	f f	G 		
(5.2)
The fracture energy was also determined using test results shown in Appendix C. Both values
are shown in Table 5.5. The test result value was considered to be the true value and was used
in further simulations and calculations.
Table 5.5 Mechanical properties of the dried concrete mix.
Mean compressive strength of cylinders after
28 days, fcm [MPa] 40.8
Mean compressive strength of cylinders after
45 days, fcm [MPa] 45.5
Mean tensile strength of cubes after 45 days,
fctm [MPa] 3.28
Modulus of elasticity after 28 days, Ecm [GPa] 33.5
Modulus of elasticity after 45 days, Ecm [GPa] 34.7
Theoretical fracture energy, Gf [N/m] 145
Fracture energy from test results, Gf [N/m] 113
The steel for the reinforcement bars was also tested in order to get more accurate values for the
strength properties than the average values. The test derived the strength properties by testing
the tensile strength of the steel by pulling some of the bars in the batch until failure. Six bars
were tested, and the averaged strength properties derived from the tests are shown in Table 5.6.

-- 84 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 67
Table 5.6 Mechanical properties of the reinforcement bars.
Mean ultimate tensile strength of
reinforcement, fu [MPa] 665
Mean yield strength of reinforcement, fy [MPa] 610
Young’s modulus of reinforcement, Es [GPa] 200
It can be noted that the reinforcement class was K500C-T, which means that the mean yield
strength was expected to be around 550 MPa. By doing this test, it could be stated that the mean
yield strength of the steel in the reinforcement bars that was used for this experiment is 11%
higher, i.e. 610 MPa.
The test data for the concrete and reinforcement tests is shown in Appendix C, together with
methods of deriving the values.
5.2.2 Digital Image Correlation
The results of the experiment were obtained from the recordings of the high speed camera. The
camera captures a frame every 0.2 ms (5000 fps) giving a rather detailed documentation of the
process. The resolution of the recording is 1024 x 512 pixels. The data obtained from the
pictures was analysed using a method called Digital Image Correlation (DIC). The method is
based on the movements between pixels in the footage and uses the pattern painted on the beam
to locate displacements and strains in the material. The recording equipment was provided by
SP Technical Research Institute of Sweden.
The DIC software that were used to extract the results from the high speed recording was
ARAMIS, (GOM 2016). It was developed for optical measurement systems and is intended to
provide a verification of FE simulations and help to improve material models used in modelling.
The software detects surface coordinates in 3D and uses them to document all deformations.
Rigid body movement can be eliminated to provide an accurate result. The extracted data can
be provided in various formats, for example numerical data, colour scaled figures and movies.
The numerical data was used to compare experimental results to all types of models, 2DOF,
ADINA and LS-DYNA. In addition, the colour scaled figures was used to compare crack
patterns from experiments to the ones simulated using the LS-DYNA model.
Since the DIC is capable of capturing detailed information about deformations and strains, there
was no need to include strain gauges and other measuring equipment in the experiment. This
allowed for a relatively simple experiment set up while still maintaining high level of accuracy
in the test results. The advantages of using DIC are discussed in Section 5.2.3 along with a
comparison and discussion about previous experiments concerning impact loading on concrete
members.
5.2.3 Reflection on previous experiments
The topic of impact loading has been a subject of interest among researchers in the recent
decades and it is beneficial to reflect upon the previous work that has been done in the field.
The idea of using DIC to extract experimental results from drop weight impact loading though
is relatively new. Recent developments in high resolution digital camera technology have made

-- 85 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
68
this method possible. Previous experiments have relied on gauges, accelerometers, load cells
and other similar devices to capture the reaction in systems subjected to impact loading.
Early experiments focused on testing fibre reinforced concrete (FRC) to, among other things,
determine the impact strength of FRC. A method proposed in (Barr & Bouamrata 1988) was
inspired by attempting to simplify these types of experiments and provide a reasonably priced
testing equipment. A drop weight apparatus applying multiple blows to a concrete specimen
was suggested. The set up consisted of a drop weight that could be released from a certain
height, and a guiding system that directed the drop weight down towards a concrete beam which
was simply supported. This concept was the basis of many other experiments that followed,
even though they may have focused on single blow tests and/or concrete without fibres.
A drop weight experiment where a force transducer, an accelerometer and strain gauges were
being used to capture the impact response of concrete beams was described in (Wu et al. 2015).
The impact mechanism used consisted of many different parts. The hammer that exerted the
impact had a curved tup made of another material (aluminium or rubber) and was aimed to hit
the force transducer that had been placed on top of the concrete beam. The force transducer
recorded the total force between the tup and the concrete specimen regardless of the rebound
of the beam. According to (Banthia et al. 1989), the total force consisted of two components,
deforming force and inertial force, that had to be identified and separated in order to estimate
the displacement of the beam numerically. This added a certain complexity to the analysis of
test results and many ways have been proposed to estimate these force components, or reduce
the extent of this problem.
In some cases, boundary conditions have been engineered to minimise the rebound of the
concrete beam. An extra set of roller supports above the beam could be used, some have placed
a pad of EPS foam on top supports to soften the reaction (Hao et al. 2014) and others have
equipped steel frames around the ends of the beam (Fujikake et al. 2009). These solutions
created a certain degree of fixation, so that the beam could not be considered as perfectly simply
supported.
In other cases, the boundary conditions were kept as simply supported and the amount of
deforming force was estimated using elastic theory (Wu et al. 2015) or by recording reaction
forces in the supports and calculating the deforming force based on that data (Soleimani &
Banthia 2014).
The high speed camera and DIC technology provided a new way of dealing with this problem
since the camera could effectively capture both the rebound and the displacements in the beam.
This method reduced the complexity of the experiment set up, as previously mentioned. It might
however be problematic to accurately determine which movements belonged to the rebound
and which belonged to the deformation of the beam and some discussion has been made on
whether to adjust the boundary conditions in forthcoming test series.
Friction between the drop weight and the surrounding equipment could be a source of problems
to some degree, this was discussed in (Banthia et al. 1989). The acceleration of the drop weight
might reduce below the acceleration of gravity (g) due to friction. This effect was not considered
in the tests covered by this thesis, since the contact between the drop weight and the control
rods turned out to be negligible. It might be of advantage to verify this assumption by placing
a working accelerometer in a strategic place or, preferably, by measuring the acceleration of
the drop weight using DIC and apply markings to the drop weight itself.
The shape of the drop weight could vary between different experiments, a round tipped bar
similar to the one used in this experiment has been widely used. Another shape was being used
in (Soleimani & Banthia 2014), where the drop weight had a thinner front making the upper

-- 86 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 69
limit of the impact area smaller. For a rod such as the one described in Section 5.2, it could be
difficult to estimate the impact area, since it can range from a single point to the full diameter
of the rod. This might be an interesting subject of further investigation.
The results and conclusions of the mentioned reports above were not within the scope of this
thesis, but might be interesting when evaluating similarities of these results and the results from
this report.
5.3 FE-modelling – ADINA
5.3.1 General
In order to simulate the behaviour using relatively simple FE-models, the problem was
modelled in two ways using the finite element software ADINA (ADINA R & D Inc. 2015).
First as a simply supported beam with a point mass attached using a spring, shown in Figure 5.6.
This model was denoted ADINA model 1. Second, the drop weight was modelled as a rod
instead of a point mass according to Figure 5.7. This model was denoted ADINA model 2. The
point mass and the rod, respectively, are given an initial velocity in order to simulate the impact
on the beam, similar to the 2DOF model.
L2, EIIII, A2, ρ2
v1 m1,e
R(u)1
,e
Figure 5.6 The model used in the first ADINA analysis (ADINA model 1), with a point
mass hitting a beam.
L2, EIIII, A2, ρ2
v1 L1, E1, ρ1, A1
R(u)1
Figure 5.7 The model used in the second ADINA analysis (ADINA model 2), with a rod
hitting a beam.
The spring in the first model represented the same stiffness parameters and ultimately the same
value as the spring described in Section 4.4, while the stiffness of the spring in the second model
was set to a very high value. In ADINA model 2, the spring was only there to make sure that
the beam and the rod are in contact. The actual stiffness of the rod was handled by the elements
in the rod itself.

-- 87 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
70
5.3.2 Element types and properties
For the two models in ADINA, Hermitian beam elements was used when modelling the beam.
When having a simply supported beam where the strains are small, this type of element is
beneficial to use and was likely to provide good results when conducting dynamic analyses.
The elements had constant cross sections, and 2 nodes per element. The material properties of
the beam elements were restricted to being homogeneous and isotropic, so equivalent cross
section parameters valid for the entire cross section must be derived, see Section 5.3.4 for more
information. This means that the results of interest when looking at the analyses in ADINA was
displacements of the beam, velocities etc. from a global point of view, and not cracking patterns,
strain rate effects etc. as can be done with more detailed element types (e.g. 3D solid elements).
In ADINA the user has the option of choosing 2D or 3D beam elements. 3D elements use 7
integration points over the cross section to calculate searched quantities, and this cannot be
altered. However, if using 2D elements, it was possible to state the desired number of
integration points manually. This was an advantage because more control of the calculation is
obtained. According to (Carlsson & Kristensson 2012), if having to many integration points,
the result can be less accurate than having a smaller amount of integration points. This
behaviour is shown in Figure 5.8.
fy
fy
b)
fy
fy
a)
Figure 5.8 Stress distribution using a) 7 integration points b) 3 integration points. Based
on (Carlsson & Kristensson 2012).
When using 7 integration points, ADINA calculates the stress distribution using a 6th degree
polynomial, while for 3 integration points the stress varies linearly. Given the complexity of 7
integration points, 3 integration points are used in ADINA models 1 and 2.
In ADINA, the beam element was able to consider not only transverse and rotational degrees
of freedom, but axial movements as well. In this sense, the finite element in ADINA was a mix
of a theoretical beam and rod element, shown in Figure 5.9.

-- 88 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 71
u2
u1
u2
u1 u3
u4 +
u3
u2 u5
u6
u1 u4
Figure 5.9 Degrees of freedom for a beam element in ADINA.
This made it possible to model the rod in ADINA model 2 as 2D beam elements as well, with
a Young’s modulus equal to the actual Young’s modulus of the steel in the rod.
5.3.3 Boundary conditions
In the experiments, the boundary conditions were created to resemble a theoretical simply
supported beam as much as possible. The beam was supported by two rolls, which rested on a
hard surface. This meant that the actual beam were going to behave as a simply supported beam
as long as it wanted to move down, i.e. in the negative y-direction according to Figure 5.10.
When the beam wanted to lift from the supports, however, there was nothing stopping it. This
was, at least in the initial analyses, not covered in the ADINA models. In ADINA model 1 and
2 the beam was modelled as a theoretical simply supported beam, i.e. fixed at the supports in
both the positive and negative y-direction. This means that the results differed in the FE-models
in ADINA compared to the LS-DYNA model and the experimental results, but only after the
beam reached zero velocity and started to move in the opposite direction. More about this in
Chapter 6. Furthermore, the beam is fixed in the x-direction at one support, to prevent rigid
body motion in the models.
x
y
z
Figure 5.10 Boundary conditions for the FE-models in ADINA.

-- 89 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
72
5.3.4 Material models
ADINA is not good at recognizing cracks in state II when using beam elements. The software
will instead use the stiffness of an uncracked cross section, which will vastly overestimate the
stiffness of the member. In order to get around this problem, an equivalent Young’s modulus
can be derived with the approach described in Section 2.4.2, see also Figure 5.11.
u
F
u
q
Simplified response
Real response
Eeq
EI
feq
Figure 5.11 Equivalent Young’s modulus.
The equivalent Young’s modulus is stated by multiplying the Young’s modulus for state I
(which is approximated to Ec) with the ratio between the moment of inertia in state II and I,
respectively:
I
I
II
eq E
I
I
E 	
(5.3)
The stiffness in ADINA was then the same value as it would have been if the stiffness of the
fully cracked beam would have been derived the conventional way (using a moment of inertia
for the cracked section), shown by:
  	II	I	I	I
I
II
I	eq	FEM I	E	I	E
I
I
I	E	EI 			
(5.4)
The input values for the stiffness properties in ADINA were derived in Appendix B and
Appendix F.
However, this way of working around the stiffness problem in ADINA has consequences. By
altering the Young’s modulus to a value that has a fictional physical meaning, the speed of the
pressure wave travelling within the beam will be somewhat altered, since the speed is defined
according to equation (3.88). This phenomena and its effects are described more thoroughly in
(Andersson & Karlsson 2012). It can be concluded, though, that the influence of the wave speed
is negligible, if the value of EII does not differ more than with a factor of around 25. In this
thesis, the factor between the real and the altered value of E will not exceed 6, so the influence
of the wave speed is considered small enough.

-- 90 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 73
Figure 5.12 Study of the influence of different E for the response of a beam subjected to a
point load (Andersson & Karlsson 2012).
A similar principle also holds for the yield strength of the element. A fictional yield strength
valid for the entire cross section is derived by dividing the moment capacity of the beam with
the section modulus W [m3]:
el
R
eq W
M
f 	
(5.5)
As in Section 4.4.1, the self-weight needs to be considered. In a similar manner, MRd is reduced
to MRd,mod by reducing the moment resistance with the moment due to the statically implemented
self-weight:
g	R	R M	M	M 		mod	.	
(5.6)
Hence:
el
R
eq W
M
f mod	.
mod	. 	
(5.7)
Since the beam elements in ADINA were modelled as elastoplastic, Eeq and feq.mod were the only
parameters needed for the material model for the beam.
In ADINA model 1, the spring between the beam and the point mass must have pertinent
attributes. When the mass hit the beam, and as long as it pushed the beam down, it must have
had an elastic behaviour in accordance with Section 4.4. However, as soon as the mass got
negative velocity (i.e. went up) all stiffness values vanished since the drop weight and the beam
in the real case are not connected with anything in tension. The shape of the material model for
the spring in ADINA model 1 is shown in Figure 5.13.

-- 91 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
74
ε

compression
tension
Figure 5.13 Behaviour of spring in the FE-models.
In ADINA model 2, the drop weight is initially assumed to have a purely elastic behaviour,
which was considered a reasonable assumption since the drop weight is much stronger than the
concrete it is hitting. An analysis to see the influence of the material model of the drop weight
was made to verify this assumption, shown in Appendix H. The spring connecting the drop
weight and the beam was only there to make sure that there is contact between the drop weight
and the beam. The behaviour of the spring was identical to the one in ADINA model 1(but with
different stiffnesses) to ensure that the contact between the drop weight and the beam vanished
when in tension. The actual stiffness was taken care of by the beam elements of the drop weight.
5.3.5 Meshing and time steps
Regarding the size of the elements of the beam in the ADINA models, it must be certified that
the number of elements was high enough in order to have accurate results. A convergence study
showed that 60 elements over the length of the beam gave satisfactory results for ADINA model
1. This amount of elements for the beam was also used in ADINA model 2, and the rod was
modelled with 100 elements, which is considered good enough for the analyses that were
performed. The convergence study is shown in Appendix H.
In the analyses in ADINA, an implicit method was used (more about direct integration methods
in Section 5.3.7). This means that the solution was unconditionally stable, and a result was
obtained regardless of the time step. However, in order to get good and accurate results, the
reasoning in Section 3.5 regarding size of the time steps was used. Even though an implicit
method does not have a critical time step per se, it was still deemed to be important that the
time step can capture the wave propagation in one element:
el
el
cr l
E	c
l
t

			
(5.8)
This means that the time step was influenced by the mass and stiffness of the structural elements
in the system. As mentioned in Section 3.5, equation (5.8) will in most cases be a value that is
too high, and the actual time step can according to (Johansson & Laine 2012) be estimated by:

-- 92 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 75




	
100
1t
t
t cr
(5.9)
The duration of the load, t1, can be estimated in the 2DOF model even though the load consists
of an initial velocity. By plotting the reaction force in the drop weight over time, an indication
of the duration of the load is obtained.
Figure 5.14 Reaction force of the drop weight, used to get an estimation of the load duration.
The figure is extracted from the 2DOF model.
As can be seen in Figure 5.14, the drop weight hit the beam several times during the first 14 ms
when using the 2DOF model, so it was interpreted that the load duration lasts for that amount
of time.
Another argument for the size of the time steps of the models was that the experiment used a
frame rate on the high speed camera and in the DIC-transformation of 0.2 ms. This implied that
the chosen time step should be well under this value, in order to get similar results to compare
with.
With this given, a check was first made in order to see that the “critical” time step was not
reached if having time steps of well under 0.2 ms:
ms	011	.	0	0167	.	0
10	99	.	5
2400 9 	

				 el
FEM
cr l
E
t	t

(5.10)
Secondly, the second argument in equation (5.9) was checked using the information in
Figure 5.14:
ms	14	.	0
100
14
100
1 			 t
t	
(5.11)

-- 93 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
76
This means that



 	
	
ms	2	.	0
ms	14	.	0
ms	011	.	0	cr	t
t	
(5.12)
The running time of the analyses, both in FEM and for the 2DOF model was chosen to 45 ms.
At this time, all important initial chain of events are considered to have happened.
With the factors described above in mind, 4500 time steps over the analysis time were
considered to capture the events in a good way. Hence, the time step of the analyses was:
ms	01	.	0		t	
(5.13)
This size of the time step was fine for ADINA model 1, but when the rod was modelled in
ADINA model 2, the wave speed of the rod had to be taken into account as well in order to get
results that were accurate enough. The rod was much stiffer than the beam, so the wave speed
differed:
m/s	1581
2400
10	99	.	5 9


	

FEM
beam
E
c	
(5.14)
m/s	5032
7900
10	200 9


	

s
dropweight
E
c	
(5.15)
Due to this, the time step needed to be significantly lower in ADINA model 2. In Appendix H,
this can also be seen in the convergence study, since 4500 time steps do not show satisfactory
results. The time step size needed in theory was:
ms	0005	.	0
100
258	.	0
10	200
7900 9 	







				 el
FEM
cr l
E
t	t

(5.16)
This would mean that approximately 88000 time steps were needed. However, as concluded in
Appendix D and shown in Figure 5.15 and Figure 5.16, the response when using 18000 time
steps were good enough, which was why this was used in ADINA model 2.
In Figure 5.16, it can be noted that there is a significant difference in impulse between the
different time step analyses in ADINA model 2, the analysis with lesser amount of time steps
is somewhat below the other analyses, while when increasing the number of time steps the
solution converges towards the other solutions. This supports the discussion in previous
paragraphs, and shows the need for more time steps when modelling the rod, even though the
actual difference in deformation is relatively low (about 3% of the total deformation, see
Appendix D).

-- 94 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 77
Figure 5.15 Convergence study for ADINA model 2, different time steps.
Figure 5.16 Impulse of the load for the different models.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Dsiplacements [mm]
Time [ms]
ADINA model 1
(4500)
ADINA model 2
(4500/100)
ADINA model 2
(18000/100)
0
0.02
0.04
0.06
0.08
0.1
0.12
0.14
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Impulse [kNs]
Time [ms]
2DOF
ADINA model 1
ADINA model 2
(4500)
ADINA model 2
(18000)

-- 95 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
78
To conclude, the different parameters that were chosen for the analyses regarding meshing and
time steps are displayed in Table 5.7.
Table 5.7 Mesh size and time steps for the models in ADINA.
Parameters ADINA model
1
ADINA model
2
Number of elements in beam 60 60
Number of elements in bar - 100
Time step 0.01ms (4500) 2.5μs (18000)
5.3.6 Choice of load application
The velocity of the drop weight at impact can be calculated theoretically by using the fact that
the potential and kinetic energy of the drop weight are equal at rest:
gh	v
mv
mgh 2
2
2
			
(5.17)
When the drop weight was released from 5.5 m, the theoretical value of the velocity is:
m/s	4	.	10	5	.	5	82	.	9	2	2 				 gh	v	
(5.18)
The value of the initial velocity has a high influence on the response of the system, so the
accuracy is of great importance.
In Appendix D, the derivation of the speed in one case is shown, and similar to this, proper
values for the velocities for each beam in the test series can be derived which are shown in
Table 5.8.

-- 96 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 79
Table 5.8 Initial velocities for the beams in the test series, derived using digital image
correlation.
Test beam Velocity at impact
[m/s]
RPC1 10.46
RPC2 10.35
RPC3 8.26
RPC4 10.45
RPC5 10.43
RPC6 10.40
The velocity of RPC3 was lower due to the different drop height described earlier. The
velocities of the rest of the beams correlated quite well with the theoretical value, the small
difference can be explained by small differences in drop height, scatter in measurements etc.
The value of the initial velocity in the ADINA analyses was based on the values of RPC2, which
showed a representative response in the experiment (see Section 6.3). Hence:
m/s	35	.	10	,1 	FEM	v	
(5.19)
Since the load on the system was implemented as an initial velocity of the drop weight, there is
no external force per se that influences the system. The initial velocity, however, resulted in
reaction forces in the structural models, according to Figure 5.17.

-- 97 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
80
Figure 5.17 Reaction force/accumulated impulse over time.
The reaction forces are hard to read since the scatter is large in the plot. However, one way to
get a sense of the magnitude was to look at the accumulated impulse over time that affect the
system. By doing this, it can be shown in a clearer way what effect the initial velocity has on
the beam, as is shown in Figure 5.17.
5.3.7 Solution methods
There are a number of direct integration methods that can be chosen in ADINA. An implicit
method was used for the ADINA analyses unlike the 2DOF model, where the explicit Central
Difference Method was used.
The implicit methods available in ADINA are the Newmark method, the Wilson-θ method and
the Bathe composite method. The Wilson- θ method is just a version of the Newmark method,
and will not be used. The Newmark method is based on generalized Taylor series and is
explained in detail in (Craig Jr & Kurdila 2006). The Bathe composite method (Bathe 2007) is
a method used when the Newmark method has troubles conserving energy and momentum, i.e.
being unstable. By default, ADINA uses the Bathe composite method which will also be used
in the ADINA model in this thesis. A short study that compares Newmark and Bathe is shown
in Appendix H, which concludes that the use of the Bathe composition method can be used to
get satisfactory results.
0.00
0.02
0.04
0.06
0.08
0.10
0.12
0.14
0
200
400
600
800
1 000
1 200
1 400
0 	5 	10 	15 	20
Accumulated impulse [kNs]
Reaction force [kN]
Time [ms]
2DOF
ADINA model 1
ADINA model 2
2DOF (Imp.)
ADINA model 1 (Imp.)
ADINA model 2 (Imp.)

-- 98 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 81
5.4 FE-modelling – LS-DYNA
5.4.1 General
The content in this section is based on the LS-DYNA manual (LS-DYNA 2014b).
The computer program was created to perform stress analysis of structures subjected to impact
loading and dates back to 1976. It has been developed continuously ever since and is now
considered to be a very powerful FE analysis tool and is widely used within the automotive
industry.
A free interface called LS-PrePost-4.2 is available from the manufacturer. In this study the
interface was used as a pre- and postprocessor to create models and view results. The actual
computation was performed through an external server that contains the full LS-DYNA licensed
software.
The choices made in the modelling regarding element generation and material models were
based on experience gained in previous Master’s thesis work of other students within the same
field and the descriptions provided in the LS-DYNA manual.
The model had four main parts in order to simulate the experiment as closely as possible. Those
parts were the roller supports, concrete beam, reinforcement and drop weight shown in
Figure 5.18.
Figure 5.18 LS-DYNA model set up.
The drop weight presented in Section 5.2.1 had a hole in the middle to allow for the placement
of an accelerometer. An attempt was made to include this hole in the LS-DYNA model. The
hole has three different diameters and does not go all the way through the drop weight. The
drop weight also has a curved face on the side that hits the beam. This was possible to model
in four separate parts, but since the geometry was quite complicated, the attempt to model the
whole drop weight in one part proved to be unsuccessful. The curved edge where the drop
weight hits the beam was important, and the elastic reaction of the drop weight as a whole was
important as well. In order to keep these features the hole in the middle was not included in the
model and instead, the self-weight of the material in the drop weight was altered so that the
total weight remained the same as for the drop weight used in the experiment. This adjustment
is considered to have negligable effects on the result.

-- 99 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
82
5.4.2 Element types and properties
The concrete beam was modelled using standard solid 3D elements. The standard 3D element
uses one-point linear reduced integration and hourglass control. The hourglass control is
important to prevent hourglass behaviour, which is a common problem when solid elements
with reduced integration are loaded with bending moment. Since the elements have only one
integration point they will exhibit zero energy deformation modes that are not a part of the
physical behaviour of the elements. As shown in Figure 5.19, the centre lines keep the same
length and have the same angle between them even though the angles of the element change
when using reduced integration (i.e. one integration point instead of 2 x 2 x 2 = 8). There are
not enough integration points within the element to account for the angular displacement,
resulting in an overestimation of these displacements. Hence, such hourglass behaviour can
distort the results and render them meaningless.
M M
Figure 5.19 Hourglass behaviour of solid 3D elements.
Providing more integration points within the elements would solve the problem, but that can
result in a model that is computationally expensive. Another solution is the previously
mentioned hourglass control, where so called hourglass forces are applied within the element
to resist the excessive hourglass deformation. This method is not as expensive as adding more
integration points and has proven to provide reasonable results. In LS-DYNA there are many
different types of hourglass control available. The one used in this analysis is what is called
TYPE 6 in LS-DYNA, which is based on enhanced assumed strain method.
The reinforcement was modelled using beam elements with cylindrical cross section and the
drop weight and supports were modelled with standard solid 3D elements. It was not considered
to be beneficial to model hourglass behaviour in these elements since the local deformations
within the parts are not expected to be large.
5.4.3 Boundary conditions
The reinforcement was considered to be fully embedded within the concrete. This means that
no bond slip between the concrete elements and the reinforcement elements was allowed. That
was modelled by defining full restraint between the two parts. The restraint type is called
LAGRANGE_IN_SOLID and is the recommended method of modelling the coupling of beam
elements to solid elements in LS-DYNA.
The beam was simply supported on roller supports which was modelled by defining an interface
between the top support nodes and the beam part. The interface connects the beam to the
supports without constraining it, allowing the beam to dislocate from the support if necessary.
The bottom nodes of the roller supports were fully restricted from moving and rotating in all
directions. It proved to be important to restrict movement in more than one row of nodes in the
supports, in order for them not to have odd deformations and roll away (in the model) when the
drop weight hits the beam.

-- 100 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 83
The drop weight was at first in contact with the beam in the beginning of the analysis. Similar
to the beam-support boundary condition, an interface between the beam part and the drop
weight was defined.
5.4.4 Material models
The material model that was used to model the behaviour of the concrete elements is called
273 – CONCRETE _ DAMAGE _ PLASTIC _ MODEL (CDPM2) developed at Chalmers by
Peter Grassl (Grassl et al. 2013). The model was designed to be used for impulse loaded
concrete structures, but can be used for other similar materials as well. The material itself has
the option to consider strain rate-dependent multi-axial loading which has been utilized in this
study. The response follows the principles of effective stress plasticity. The material parameters
selected for this model were the same as discussed in Section 5.2.1, for clarification they are
shown in Table 5.9. The damage in the material was calculated based on both elastic and plastic
strain history caused by the loading. The elements loose stiffness when subjected to stress that
exceeds the plastic limit The input for the damage part of the material model is the measured
fracture energy shown in Table 5.5. In this case it is assumed to be a linear stress-strain relation
represented with tensile stress and crack width values as shown in Table 5.9 and Figure 5.20.
ft
w
σ
wu
Gf
Figure 5.20 A linear damage curve for the CDPM2 material model.
The crack width is calculated using equation (5.20).
t
f
u f
G
w 
 2
(5.20)
It order to understand the computational process of strain in LS-DYNA, the concept of crack
band width, h, should be clarified. The crack band width represents the length over which the
cracks are assumed to spread. The input for crack width, w, is translated into strain, ε, by using
this factor, as shown in equation (5.21).
h
w

		
(5.21)
In (Johansson 2000) it is explained how the crack band width should be chosen for different
situations. In most cases it is recommended to use the length of one element for crack band
width. However, in the case of fully embedded reinforcement, i.e. no bond slip between
reinforcement and concrete, the recommended crack band width is the calculated mean crack
spacing, sm. The LS-DYNA model used in this analysis has fully embedded reinforcement,
however, the CDPM2 material model performs the damage calculations based on the

-- 101 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
84
assumption that the crack band width is the same length as one element. The influence of this
assumption and a sensitivity study regarding fracture energy magnitude can be seen in
Section 7.3. The details of the damage formulation can be seen in (Grassl et al. 2013) along
with mathematical derivations of the parameters used to estimate the damage.
The eccentricity factor e is a parameter used to control the deviatoric strains that form within
the elements of the model as described in (Grassl et al. 2013). The factor is as:




 2
1
e	
, where	2	2
2	2
t	c
c	bc
bc
t
f	f
f	f
f
f


	
		 (5.22)
The factor fbc is the strength of the concrete in equibiaxial direction, calculated as:
c	bc f	f 	 16	.	1	
(5.23)
Table 5.9 Input values for the CDPM2 material model.
Parameter LS-DYNA notation Value
Density, ρ [kg/m3] RO 2400
Modulus of elasticity, E [GPa] E 34.7
Poissons ratio, υ [-] PR 0.2
Eccentricity factor, e [-] ECC 0.516
Concrete tensile strength, fct [MPa] FT 3.28
Concrete compressive strength, fc [MPa] FC 45.5
Ultimate crack width, wu [mm] WF 0.069
Strain rate dependent STRFLG 1.0/yes
Other parameters in the model are default values as specified in (LS-DYNA 2014a).
The material model used for the reinforcement is called 003 – PLASTIC _ KINEMATIC. This
is a computationally inexpensive material model which is capable of describing elastoplastic
behaviour in beam-, shell- and solid elements. The material model is capable of considering
strain rate effects, but that option has not been used in this basic model. A bilinear stress strain
curve is defined as an input value using yield stress and a value for each slope, see Figure 5.21.

-- 102 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 85
fy
ε
σ
E
Et
fu
Figure 5.21 The bilinear elastoplastic behaviour of material model
003 – PLASTIC _ KINEMATIC.
The input values are based on the values derived in Section 5.2.1 and are presented in
Table 5.10.
Table 5.10 Input values for the 003 – PLASTIC _ KINEMATIC material model.
Parameter LS-DYNA notation Value
Density, ρ [kg/m3] RO 7850
Modulus of elasticity, E [GPa] E 200
Poissons ratio, υ [-] PR 0.3
Yield strength, fy [MPa] SIGY 609.8
Second slope of the bilinear curve, Et [GPa] ETAN 584.4
The drop weight and roller supports were both modelled using 001 – ELASTIC material model.
The value of the density in Table 5.11 was to get the correct value of the mass in the experiment,
since the drop weight has holes that were not modelled in the LS-DYNA model. The
001 – Elastic material model has simple isotropic elastic behaviour and can be used for any
element type in LS-DYNA. The input values used are shown in Table 5.11.
Table 5.11 Input values for the 001 – ELASTIC material model.
Parameter LS-DYNA notation Value
Density, ρ [kg/m3] RO 7753
Modulus of elasticity, E [GPa] E 200
Poissons ratio, υ [-] PR 0.3
It would probably have been more accurate to adopt a material model that was elastoplastic
with a high plastic limit to simulate the stainless steel used in the experiment in detail, but since
most of the response of the drop weight and supports was expected to be within the elastic range
the elastic model should provide a result that is accurate enough. A study of this has been done
in ADINA, shown in Appendix H, and there was no reason to expect different behaviour in

-- 103 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
86
LS-DYNA. An elastoplastic material model would have been more computationally expensive,
and not add much value to the results.
5.4.5 Meshing and time steps
One of the results that was studied was the crack pattern of the beam and how it correlated with
the crack pattern detected by the DIC. For the model to be detailed enough to detect strains that
show the crack pattern clearly, a rectangular mesh with element size of 5 mm was chosen for
the beam. Other results may not require the same detail level as can be seen in a convergence
study on element sizes in Appendix H. For consistency purposes, other parts in the model had
the same element size as the beam.
Time steps in the analysis were automatically calculated by the LS-DYNA program. These
calculations were based on the size of the smallest elements in the model. As was the case for
the ADINA model discussed in Section 5.3, the time steps must be capable of capturing wave
propagation in the elements. The underlying equations are explained in the online help manual
(LS-DYNA n.d.). In this model there were beam elements and solid elements, the critical time
step was calculated for both element types and the smaller one was used. For beam elements,
the wave propagation speed is calculated as:

E
c 	
(5.24)
The wave propagation speed, c, and element length, L, are then used to determine the critical
time step as:
c
L
tcr 		
(5.25)
In the case of solid elements, the wave propagation speed is calculated with equation (5.26).
 	2
1	

	 
 E
c	
(5.26)
The critical time step is determined using equation (5.27)
e
e
cr A	c
V
t 
		
(5.27)
where Ve is the element volume and Ae is the area of the largest element side.
The critical time step determined automatically by LS-DYNA for this analysis was
Δtcr = 0.0005 ms.
The time step can be determined manually. In that case, one should do hand calculations and
be sure to select a time step that is sufficiently small to capture the wave propagation. If the
time step is poorly selected, LS-DYNA will provide false results. Altering the time step might
be an interesting parameter study to make in further analysis.

-- 104 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 87
5.4.6 Choice of load application
The dynamic load was modelled by defining an initial velocity in the drop weight part. The
intention was to compare the results with the experimental results obtained using DIC for all
the tested beams, special focus was put on comparisons with beam RPC2. Therefore, the initial
velocity was chosen to be v = 10.35 m/s the same as the one measured in the velocity study for
RPC2, see Appendix D and Table 5.8. A specific unit weight was assigned to the drop weight
as well. The velocity of the drop weight produced an impact when it hit the concrete beam
simulating the real conditions in the drop weight test. All model parts had a defined density, but
in order to save computational time, gravity was not considered in the model. Dead weight was
therefore not accounted for in this analysis, which is considered to have negligible influence on
the final result since the span between supports was only 1.0 m.
5.4.7 Solution methods
The integration method used was a modification of the CDM, which is the default method in
the LS-DYNA program. The CDM calculation process is discussed in Section 3.5.2. This
method is explicit, which means that it relies on previous displacement values to calculate the
next step in the analysis. The main difference between CDM and the modified version that is
used in LS-DYNA is that instead of basing calculations on the displacement, u, in the previous
time step, they are based on the coordinates, x, in the previous time step. A more detailed
description of the integration method can be found in (LS-DYNA n.d.). The choice of time
steps is critical when using explicit methods such as this one, in order to capture the behaviour
accurately. Any errors made by having too large time steps will influence the result calculated
in the next time step, and will therefore accumulate as the calculations proceed.
In general, explicit methods are considered to be more suitable for the FE modelling of dynamic
events. Nevertheless, they can become computationally expensive if the duration of the analysis
is very long. Then switching to an implicit method might be more suitable and it is possible to
prescribe a different integration method in LS-DYNA. This, however, was not the case in this
study, and the explicit modification of the CDM was well suited for the type and duration of
the analysis performed.

-- 105 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
88
Results and comparisons
6.1 Introduction
In this chapter, the results from the different analytical models, (2DOF-model,
ADINA model 1-2 and the model from LS-DYNA) and the results from the experiment are
presented, evaluated, compared and discussed. The response of the different analyses could be
compared in many different ways, but to get consistency, three different key responses were
chosen; the displacement of the midpoint over time u(t), the crack patterns of the beam at
different time steps and the displacement over the length of the beam at different time steps u(x).
Each of these responses is evaluated and discussed in the sections below. Not all analyses could
be evaluated for the different key-responses, however. Since the 2DOF-model transformed the
beam into a point mass, this model could only be evaluated using the midpoint displacement
response, u(t). Since the two models in ADINA used beam elements, these models could not
evaluate the crack pattern response, here the LS-DYNA and experimental results only were
evaluated.
6.2 Verification of the models
Regarding all models, it could be hard knowing if the indata for the analysis was correct, as
discussed in Chapter 4 and 5. There were questions regarding the accuracy of the
transformation factors over time, the actual stiffness of the beam-drop weight spring since it
was dependent on both the strength of the steel in the drop weight and the local strength of the
concrete at impact, among other factors. In order to verify the accuracy of the models,
sensitivity checks were made to make sure that the response of the different members behaved
in a similar and expected way as the rest of the models and the experimental results. To verify
the models used in this thesis, beam velocity, reaction forces and drop weight velocity have
been analysed and evaluated.
One way of verifying the results was to check the velocity over time for the system. By doing
so, it could be stated if the analyses behaved similarly regarding the plastic and elastic response
after impact, described in Section 3.4.1. The velocities of the midpoint in the different models
are displayed in Figure 6.1.

-- 106 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 89
Figure 6.1 Velocity over time for midpoint of the beam.
The experimental beam RPC2 was chosen to represent the experimental results, which is
discussed in more detail in Section 6.3.1. Judging from Figure 6.1, it could be stated that the
models correlated quite well during the first 10 ms, and after that the LS-DYNA model and
RPC2 had negative velocity only, while the other models oscillated around a fixed point. The
fact that the LS-DYNA model and RPC2 had negative velocity and the other models oscillated
around 0 was mainly because the 2DOF and ADINA models were not able to lift, but were
attached to the supports at all times. In contrast, LS-DYNA and RPC2 lifted from the support
and hence they had a velocity below 0 after a certain time. The amplitude of the velocity seemed
to correlate quite well between the ADINA models and the 2DOF model and between
LS-DYNA model and the beam RPC2, respectively. There were of course differences
depending on the complexity of the models, but the appearance of the plots verified that the
models behaved in a somewhat similar manner. Regarding the difference in phase and
frequency of the oscillations, it was considered to be of minor importance, since it did not have
a significant effect on the response regarding displacements and the other quantities studied.
Other than this, the main thing that differed was that the velocity of the experimental beam
RPC2 seems to be lower in the first 10-15 ms compared to the analytical models. The reason
for this was probably due to a difference in the elastic/plastic impact, which can depend on
strain rate effects. However, the verification of the models was still considered accurate enough.
The reaction force in the beam or in the spring between the beam and the drop weight was
another result that could be used to verify the models. This concept was introduced in order to
get proper values as indata for the ADINA models in Section 5.3, and in order to get more clear
results that handle the extensive scatter in the reaction force/time plot, impulse is plotted in the
same graph, see Figure 6.2.
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Velocity [m/s]
Time [ms]
ADINA model 1
ADINA model 2
2DOF model
LS-DYNA
RPC2

-- 107 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
90
Figure 6.2 Reaction force/Accumulated impulse (denoted as imp.) for the analytical
models.
Figure 6.3 Reaction force of 2DOF and LS-DYNA model only.
0.00
0.02
0.04
0.06
0.08
0.10
0.12
0.14
0
200
400
600
800
1 000
1 200
1 400
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Accumulated impulse [kNs]
Reaction force [kN]
Time [ms]
2DOF
ADINA model 1
ADINA model 2
LS-DYNA
2DOF (Imp.)
ADINA model 1 (Imp.)
ADINA model 2 (Imp.)
LS-DYNA (Imp.)
0
10
20
30
40
50
60
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Reaction force [kN]
Time [ms]
2DOF
LS-DYNA

-- 108 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 91
The fact that the ADINA models had very high peak values of the reaction force according to
Figure 6.2 was because the drop weight was modelled with a linear elastic material response
only.
The 2DOF and ADINA models showed very good correlation if looking at the accumulated
impulse. The 2DOF model had a plastic capacity of the drop weight/beam spring of 50 kN,
which was why the reaction force stopped at this value. As can be seen, this did not affect the
impulse values. The ADINA models did not have this restriction of the plastic capacity, but all
models still showed similar impulse regardless of the detailed response of the reaction force. It
can be noted, however, that the LS-DYNA model also showed a low limit in reaction force
(shown in a clearer way in Figure 6.3), the maximum value of the reaction force at a specific
time was 57 kN, which showed that the limit of 50 kN for the 2DOF model was a reasonable
choice. The impulse from the LS-DYNA model was somewhat higher than the impulse from
the rest of the models. This could be because of the higher accuracy of this model compared to
the 2DOF/ADINA models. One big difference between the LS-DYNA model and the other
models was that it took strain-rate effects into account, which might be an explanation for the
larger impulse, since it might have increased the elastic response of the system, and thus the
initial stiffness of the beam. However, the LS-DYNA model only took strain rate effects into
account for the concrete. In the main model used in this chapter, the reinforcement did not take
strain rate effects into account; i.e. the strength of the reinforcement was not increased due to
dynamic loading.
In order to verify the elastic/plastic limits and to see that the impact behaved somewhat similar
in the models, it could be of interest to see the response of the drop weight velocity over time,
as shown in Figure 6.4. Both ADINA models showed similar results for the drop weight
velocity, but due to a large scatter in ADINA model 2 (since it has 18000 time steps), the
response from ADINA model 1 only is plotted.
Figure 6.4 Drop weight velocity.
-4
-2
0
2
4
6
8
10
12
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Velocity [m/s]
Time [ms]
ADINA model 1
2DOF
RPC2
LS-DYNA

-- 109 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
92
From this it can be seen that, the response of the drop weight was quite similar for the different
models. As in Figure 6.1, the velocity in the RPC2-test was lower after impact than in the
models, which might be due to the reasons discussed above. An interesting observation in
Figure 6.4 is that the LS-DYNA model had a larger value for the velocity after the rebound than
the experimental results, meaning that the drop weight in LS-DYNA had a response that was
more elastic than in the experiment. This might have been because of modelling issues for the
drop weight in LS-DYNA, since the real drop weight had a hole which was not considered in
the LS-DYNA model. It could also depend on uncertainties in the material properties.
Regarding the plastic limit of the drop weight/beam spring in the 2DOF model, a short study
was made to see the influence it had on the response of the system. As already mentioned,
50 kN seemed to correlate well if looking at the response from the LS-DYNA model, but this
study also included values of the plastic limit of R1=20 kN and R1=500 kN, respectively. The
results and the response of RPC2 are shown in Figure 6.5.
Figure 6.5 Velocity of the drop weight to study of the plastic limit of the 2DOF model.
As can be seen, if using R1=500 kN the response was highly dominated by elastic response,
which was not the case in the experiment. To get a proper response, the line during the first
15 ms should have been smooth, but the velocity after 15 ms (when the drop weight rebounced)
should have been as close to the real response as possible. These two factors counteract each
other, and it was concluded that 50 kN was a fair choice, which Figure 6.3 is implying as well.
It can be concluded from Figure 6.1 to Figure 6.4 that the response from the different models
gave reasonable results. The response of all models with the input data used in this section was
therefore considered eligible for further analysis.
-4
-2
0
2
4
6
8
10
12
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Velocity [m/s]
Time [ms]
Rm1=20kN
Rm1=50kN
Rm1=500kN
RPC2

-- 110 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 93
6.3 Displacement of the midpoint over time
6.3.1 General
Figure 6.6 shows the displacement of the midpoint for all the reinforced beams in the
experiment.
Figure 6.6 Results for the displacement of the midpoint for the beams used in the
experiments.
Note that RPC3 had a significantly lower maximum displacement, due to the lower drop weight
height, as mentioned in Section 5.2.1. Due to this, the results from RPC3 were not regarded
further in the evaluation.
However, there was some scatter in the other beams There could be a number of reasons for
this, e.g. small deviations in drop height, scatter in the measurements, deviations in the material
etc. In order to be able to evaluate the response from the models with the experiment, one beam
was chosen to be representative for all beams. This was done by comparing the response of the
beams, and picking a beam that had an intermediate response. The input data based on this
beam was then implemented in the models as described in Chapter 5. By comparing the
maximum displacements for all the beams, shown in Figure 6.7, which shows the results for
the first 10 ms of the same response as in Figure 6.6, the beam named RPC2 was chosen for
further analysis, given the intermediate response of that beam.
-10
-5
0
5
10
15
20
25
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacements [mm]
Time [ms]
RPC4
RPC5
RPC6
RPC2
RPC1
RPC3

-- 111 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
94
Figure 6.7 Maximum displacement for the beams in the experiment, with RPC2 highlighted.
When this beam was chosen, the numerical models were given the indata (i.e. initial velocity)
that belonged to this beam in order to have a response that represented RPC2. As stated in
Section 5.3.6, the initial velocity of all the numerical models was therefore chosen to 10.35 m/s.
The response from the different numerical analyses is shown in Figure 6.8. The displacement
of the midpoint of the beam was of importance to evaluate how the response of the different
models differed with various magnitude from the response of the beams in the experiments.
15
16
17
18
19
20
21
22
23
24
25
3 	4 	5 	6 	7 	8 	9 	10
Displacements [mm]
Time [ms]
RPC4
RPC5
RPC6
RPC2
RPC1

-- 112 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 95
Figure 6.8 Displacement of the midpoint from the different analytical models.
The fact that the response in the LS-DYNA model had a descending slope while the other
models oscillated around a specific value, was because of how the boundary conditions were
modelled. In LS-DYNA, as in the experiment, there was nothing preventing the beam from
lifting from the supports, which was what was happening in these cases. For the ADINA-models
and the 2DOF model, the beam was not able to move in the y-direction (vertical direction) at
the supports, hence the response oscillated around a fixed displacement value.
Since only some models had the ability to lift, the only comparison that was relevant if
considering all the models was the response that took place as long as the reaction force by the
supports had a positive value, i.e. was in compression. Figure 6.9 shows this, and there it can
be seen that the maximum displacement differed with different magnitudes depending on the
model.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacements [mm]
Time [ms]
ADINA model 1
ADINA model 2
2DOF model
LS-DYNA

-- 113 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
96
Figure 6.9 Maximum displacement for the analytical models and RPC2 from the
experiment.
Apart from the fact that the maximum displacement differed, the time for the peak displacement
in Figure 6.9 differed as well. The maximum displacements were derived and compiled into
Table 6.1, and the time for the peak values are shown in Table 6.2.
Table 6.1 Difference of maximum displacement.
Model Max. displacement
[mm]
Difference from
RPC2 [%]
RPC2 23.2 -
2DOF 31.0 33
ADINA model 1 32.4 40
ADINA model 2 32.4 40
LS-DYNA 28.1 21
0
5
10
15
20
25
30
35
0 	2 	4 	6 	8 	10 	12 	14
Displacements [mm]
Time [ms]
ADINA model 1
ADINA model 2
2DOF model
LS-DYNA
RPC2

-- 114 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 97
Table 6.2 Time of maximum displacement.
Model Time of maximum
displacement [ms]
Difference from
RPC2 [%]
RPC2 8.40 -
2DOF 10.83 29
ADINA model 1 11.14 33
ADINA model 2 11.15 33
LS-DYNA 9.60 15
In order to analyse further, each model was treated separately and discussed in relation to the
beam RPC2 from the experiments.
6.3.2 2DOF and ADINA models
The 2DOF model was the model where the biggest simplifications were made. Both the beam
and the drop weight were treated like two point masses, which were combined in a lumped mass
matrix. Due to the simplicity of the model, the response could be expected to differ most from
the real response. However, according to Table 6.1, this was not the case.
The fact that there was a difference of around 33 % for the 2DOF model was not strange, since
the 2DOF model was simplified in a quite extensive way. As can be seen in Figure 6.9, one
interesting observation instead occured if comparing the ADINA models with the response of
RPC2. The difference here was about 40 %, which makes the maximum displacements obtained
in the ADINA models less accurate than the 2DOF model. The response of the ADINA models
and 2DOF model only is shown in Figure 6.10, in order to compare these numerical models
with each other.

-- 115 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
98
Figure 6.10 Maximum displacements of the ADINA models and 2DOF model, respectively.
Firstly, it could be seen that the response for the two ADINA models showed very similar
values. The initial response and the response in the peaks were basically identical, while the
models showed a slight difference in the lower values of the oscillation.
Secondly, it could be stated that the difference in maximum displacement for the ADINA and
2DOF models was quite low (about 4 %). This meant that the results from the ADINA and
2DOF models in one sense could be considered as basically equal. The fact that the frequency
of the oscillation was not equal was not considered as a major issue, since it was the global
response that was of interest, i.e. maximum displacement and elastic/plastic response. As
already stated, one interesting observation was that the displacements of the 2DOF system were
lower than both ADINA models, hence more close to the value of the experimental result. Since
the 2DOF model consisted of a simple mass-spring system, it could be expected that the
response compared to the more advanced FE-response would be less accurate. On the other
hand, if disregarding the response from the real beams, the fact that the 2DOF model showed
smaller displacements meant that the 2DOF system behaved in a stiffer way than the more
accurate ADINA models. This was reasonable, and one explanation for the divergence in the
response since if modelling the system with larger and fewer elements, a stiffer behaviour was
expected.
The fact that the 2DOF response was stiffer than the ADINA models was confirmed when
looking at other reports as well, e.g. (Andersson & Antonsson 2015), where the same behaviour
was experienced.
The reason for the difference in the 2DOF model compared to the experiment response could
partially be explained by the choice of the transformation factors. The factors derived in
Chapter 4 were based on a fixed displacement shape. The displacement shape was not fixed,
however, but altered with time. This was not accounted for in the code for the model. Instead,
a plastic deformation shape was assumed at all times, which was not the case in the early stages
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacements [mm]
Time [ms]
ADINA model 1
ADINA model 2
2DOF model

-- 116 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 99
of the impact. Displacement shapes of the beam at different times is discussed further in
Section 6.4 and the change of transformation factors over time has thoroughly been discussed
in (Andersson & Karlsson 2012). The implementation of the transformation factors on the mass
only would also have effects. This methodology was originally based on SDOF models, and
may not be accurate enough when considering MDOF models, even though the system was
uncoupled. Another way of handling the transformation factors would be to put them on the
different terms in the equation of motion separately, instead of only implementing them in the
mass matrix as described in Chapter 4.
The maximum displacement was reached at approximately the same time for the 2DOF and
ADINA models, after about 11 ms, which was somewhat after the peak displacement for the
experimental beam (8.4 ms) as displayed in Table 6.2. This fact might be explained if assuming
that the impulse was higher in the experimental beams than in the 2DOF and ADINA models.
Even though the impulse from the experiment was not there, it can be seen that the LS-DYNA
results showed higher impulse than the rest of the models, and this points to that the 2DOF and
ADINA models probably capture the reaction force less well, indicating that the impulse in the
experiment was higher as well.
A big issue with the 2DOF and ADINA models, and one explanation to the divergent results if
comparing to the experimental results, was that none of these models were able to capture
strain-rate effects, which might have a big influence on the response of the beam in the
experiment, since it may raise the local strength significantly.
In order to get a visualization of the sensitivity of the results regarding the strength of the beam,
a short study was made where the yield strength in the reinforcement in the 2DOF model was
reduced and increased with 10% from the used value in the model, and the results are shown in
Figure 6.11.
Figure 6.11 Influence of yield strength on the beam response in the 2DOF model.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacements [mm]
Time [ms]
2DOF model, 90% fy
2DOF model
2DOF model, 110% fy

-- 117 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
100
As can be seen, the results differed significantly, and the maximum displacement for all three
cases are shown in Table 6.3.
Table 6.3 Difference of maximum displacement of the 2DOF model when altering the yield
strength.
Model Max. displacement
[mm]
Difference from
2DOF [%]
2DOF 31.0 -
2DOF with decreased fy 33.8 9.0
2DOF with increased fy 28.7 -7.4
The difference in displacement of the midpoint if changing the yield strength in the models was
around 7-9%, so it can be concluded that the models were fairly dependent on the value of the
yield strength of the reinforcement, and hence, the influence of strain rate effects.
If considering the scatter in the yield strength derivation according to Appendix C, it must be
kept in mind that the value used might differ from the real value, and the effect it will have on
the response. This can be one reason for the overestimation of the displacements of the
midpoint.
6.3.3 LS-DYNA
The LS-DYNA model was the model that resembled the experiment most, since the detail level
in the model was high. As has been shown in Section 6.3.1, the LS-DYNA model was able to
capture the behaviour at the supports in a way that the real experiment did; i.e. separating the
LS-DYNA model from the rest of the models. A comparison of the midpoint displacement over
time for the LS-DYNA model and RPC2 is shown in Figure 6.12.

-- 118 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 101
Figure 6.12 Displacement over time for the LS-DYNA model and RPC2, respectively.
As discussed in Section 6.3.1, the descend in displacement after the peak was due to the fact
that the beam lifts from the supports. The difference in maximum displacements was, according
to Table 6.1, 21 % where the FE-model showed a less stiff behaviour than experienced in the
experiment. The LS-DYNA model was the only model that considered strain-rate effects (at
least in the concrete material model), which is one factor that could explain the fact that the
maximum displacements from LS-DYNA was lower than the results from the other models
since the strain-rate effects would increase the strength and stiffness of the beam at impact. The
fact that it still differed to the real behaviour can be due to the fact that it did not capture the
full effect of the increased strength due to the strain-rate effects, since the magnitude of this
strengsth increase was hard to model and estimate, and the fact that the material model for the
reinforcement did not take strain-rate effects into account. The strain-rate effects in the
reinforcement could have a large influence of the response of the beam, since an increased
strength of the reinforcement had a considerable influence on the total response according to
Section 6.3.2. A parametric study on the influence of strain rate effect in the reinforcement can
be seen in Section 7.5. Another uncertainty in the model was the difficulty of modelling
geometrical imperfections, which has not been considered in the numerical models of this
report.
Since the inclination of the response after the maximum displacement was similar, the velocity
of the beam after the maximum displacement could be assumed to be similar as well, despite
the difference in maximum displacement magnitude. This observation was confirmed in
Figure 6.1, and to make it more clear, the velocity over time for the LS-DYNA model and RPC2
are plotted in Figure 6.13.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacements [mm]
Time [ms]
LS-DYNA
RPC2

-- 119 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
102
Figure 6.13 Velocity over time of the midpoint for the LS-DYNA model and RPC2.
As could be seen if comparing Figure 6.12 and Figure 6.13, the velocity passed zero at the time
where the peak displacement was reached.
6.4 Beam response at supports
An interesting observation of the experimental results was that the beam at an initial stage lifted
from the supports during a short time interval according to Figure 6.14, where a slight gap
between the support and the beam can be discerned.
Figure 6.14 Response of RPC2 after 2.0 ms, when the maximum lift occurs over the support.
This observation was confirmed by plotting the displacement of a point above the support over
time, shown in Figure 6.15.
-4
-2
0
2
4
6
8
10
12
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Velocity [m/s]
Time [ms]
LS-DYNA
RPC2

-- 120 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 103
Figure 6.15 Beam displacement by the support over time, where negative displacement
represents the beam going in positive y-direction (vertical direction).
As can be seen, a clear bump took place during the first 3-4 ms. The reason for this could be
investigated more thoroughly by first investigating if the numerical models captured the same
phenomenon. In order to study this, an initial analysis was to plot the reaction force of the
support over time, shown in Figure 6.16. In order to account for the fact that the 2DOF model
has one support spring while the other models rests on 2 supports, the spring reaction force in
the 2DOF model is divided by 2.
-25
-20
-15
-10
-5
0
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacement over support[mm]
Time [ms]
RPC2

-- 121 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
104
Figure 6.16 Reaction force over support for the numerical models.
ADINA model 1 and 2 showed very similar response, but due to big scatter in the ADINA
model 1 plot, the results from model 2 only is plotted in Figure 6.16. The oscillation of the
ADINA and 2DOF models around 0 kN was due to the fact that they are attached to the support
and not able to lift, as previously discussed in Chapter 5. Once the oscillation started, at around
15 ms, the beam had lifted and these results were therefore irrelevant. The fact that there were
negative values of the reaction forces in the ADINA and 2DOF models implied that the beam
wanted to lift from the support. Figure 6.17 shows the same plot as Figure 6.16 but only during
the first 18 ms, and the plot has been modified so that if the reaction force was negative, it is
displayed as zero in order to make it resemble the real behaviour in a better way.
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Reaction force [kN]
Time [ms]
ADINA model 2
LS-DYNA
2DOF
150kN 60kN

-- 122 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 105
Figure 6.17 Reaction force over supports during the first 15ms, adjusted for lift.
Figure 6.17 implies that both the ADINA and LS-DYNA models had reaction force values of
zero, i.e. wanted to lift in the first 3 ms. One interesting fact that the ADINA models showed
was that there was a second “bounce” after around 6-7 ms, where the beam wanted to lift again.
The reason for this might be because it was prevented from lifting the first time. LS-DYNA had
several bounces after the first reaction. The 2DOF model did not show negative values in the
beginning for the reaction force at the support, hence it was not able to capture the lift of the
beam. This is reasonable, since the beam was modelled as a point mass in the 2DOF model, and
the force from the drop weight hit the beam directly, instead of having to propagate through the
beam, as was the case with the other models.
Another interesting observation from Figure 6.17 is that the ADINA models showed a big
reaction force after a short amount of time (approx. 0.2 ms, which should approximately be the
time it took for the shear wave to reach the support, see Section 6.6), and then wanted to lift.
The LS-DYNA model showed this reaction as well at the same time, but not with the same
magnitude. This implies that the LS-DYNA did not depend much on the supports during the
initial phase of the time range, i.e. it was without a big initial reaction in the supports to help
the beam to lift. This is discussed more in Section 6.6.
The actual displacement of the beam above the supports was not modelled in the ADINA
models at this point, since the node by the support was fixed. For the LS-DYNA model,
however, the displacement was plotted together with RPC2 in Figure 6.18.
-10
0
10
20
30
40
50
0 	2 	4 	6 	8 	10 	12 	14 	16 	18
Reaction force [kN]
Time [ms]
ADINA model 2
LS-DYNA
2DOF
150kN 60kN

-- 123 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
106
Figure 6.18 Beam displacement over the support over time, results from RPC2 and the
LS-DYNA model.
As can be seen, the response during the first 5 ms was basically identical, showing that the
LS-DYNA model captured the lift at the support in a very good way.
One way of trying to capture the behaviour using displacements in the ADINA model as well
was to model the beam with slightly modified boundary conditions, resting on two springs
instead of rigid supports, as shown in Figure 6.19.
x
y
z
Figure 6.19 Modified boundary conditions to capture behaviour over supports.
The springs were modelled so that they had a stiffness depending on the steel in the rollers as
long as it was in compression, and as soon as the spring was in tension the stiffness was zero.
This should allow for the beam to lift from the supports initially. The response of this analysis
is shown in Figure 6.20, and as can be seen, there was a clear lift starting at the same time as in
the other plots, which showed that it behaved similarly in the ADINA model as well. The model
-25
-20
-15
-10
-5
0
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacement over support[mm]
Time [ms]
LS-DYNA
RPC2

-- 124 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 107
was not, however, able to let the beam return to the initial position without giving it stiffness as
soon as the beam got downward pointing displacements.
Figure 6.20 Beam displacement over the support over time, results from RPC2, LS-DYNA
and ADINA models.
Since the beam would have stiffness as soon as the reaction was positive, and not when it landed
on the support again, the response was somewhat misleading. It can be concluded, however,
that ADINA was able to capture the phenomenon itself.
Since the behaviour after 5 ms showed when the beam has landed on the supports again,
Figure 6.21 shows the response during the first 5 ms only, which clearly shows the resemblance
between the different analyses.
-25
-20
-15
-10
-5
0
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacement over support[mm]
Time [ms]
ADINA
LS-DYNA
RPC2

-- 125 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
108
Figure 6.21 Beam displacement over support during the first 4ms.
It can be noted that the ADINA model had a significantly higher displacement during this initial
lift, and the time frame did not correlate as well as desired between the models. The reason for
the longer time in ADINA could be due to the inability for the spring to have zero stiffness,
since as soon as the beam was heading down towards the support, the spring stiffness set in and
affected the response. The other results when having spring supports in the ADINA models (i.e.
u(t) and u(x,t)) were treated in a parameter study in Section 7.6.
It has now been stated that the numerical models were able to capture the phenomenon with
different levels of accuracy, but the reason for the initial lift needed more investigation, and is
evaluated further in Section 6.6.
6.5 Crack patterns
Crack formations due to impact loading are discussed in this section. The 1st principal strain
was used as a measuring tool to represent the crack positions and width. As discussed in Section
6.5, the only model able to capture the crack pattern was the LS-DYNA model, which was
compared to the crack patterns obtained from the experimental results using DIC. Firstly, the
crack patterns obtained by DIC were investigated and then compared to the crack patterns from
the LS–DYNA model. In order to keep the presentation of results consistent, all crack patterns
are shown for half a beam and then assumed to be very close to symmetric. The area which is
used to display results is shown in Figure 6.22.
-5
-4
-3
-2
-1
0
1
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0 	3.5 	4.0 	4.5 	5.0
Displacement over support[mm]
Time [ms]
ADINA
LS-DYNA
RPC2

-- 126 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 109
Figure 6.22 Area of beam used in crack analysis.
The strains are shown in the form of a contour scale. The contour scale was intended to show
clearly where cracks were forming, in order to do that a value of strain representing a fully open
crack was obtained. As mentioned earlier, LS-DYNA makes strain calculations based on the
assumption that a crack forms within the length of one element, lelement, the corresponding strain,
εcrack, can therefore be calculated using equation (6.1).
%	38	.	1	0138	.	0
5
069	.	0 			
element
u
crack l
w
	
(6.1)
The crack patterns observed in the experiments by the DIC software for all RPC beams with
drop height 5.5 m are shown in Table 6.4 at four different time steps. The first time step,
t = 0.2 ms, was the one that showed the initiation of cracks directly after impact. The second
time step, t = 0.8 ms, was selected so that all initial cracks could be seen. The third time step,
t = 2.0 ms, showed cracks that form later in the process, and finally the fourth time step,
t = 8.4 ms, was taken at the median time where the beams were at maximum midpoint
displacement, based on the data presented in Section 6.3.
At time t = 0.2 ms, both shear and bending cracks had started to form in the middle of the beam.
Other parts of the beam, though, had not started to show any reaction. Three types of cracks
could be observed in the beam 0.8 ms after impact. The first two types could be seen in the
middle of the beam where there were both bending cracks in the bottom part and inclined cracks
at an approximately 45° angle stretching from the area of impact. Another inclined crack had
started to form as well further towards the support area. The third type could be seen between
the middle area and the support area where there was a formation of cracks in the upper part of
the beam. The crack pattern observed after 2.0 ms showed no such cracks, which meant that
they close rather quickly. This was something that differed from a static load case and will be
investigated in more detail further down in this section. Other cracks propagated between the
observed time steps and some additional bending cracks formed further away from the middle
area. It is of interest to look upon how the steepness of the shear cracks interfered with the
bending crack formation. In the cases where the angle of the middle shear cracks was steep, a
large bending crack was able to form outside of the middle crack area (RPC4, RPC5 and RPC6).
In the cases where the angle was less steep (RPC1 and RPC2) the middle shear crack ended
exactly where the extra bending cracks formed in the other beams and “swallowed” it.

-- 127 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
110
Table 6.4 Crack patterns of RPC beams at four different time steps.
t = 0.2 ms t = 0.8 ms
RPC1
RPC2
RPC4
RPC5
RPC6
t = 2.0 ms t = 8.4 ms
RPC1
RPC2
RPC4
RPC5
RPC6
The inclined crack that formed further towards the support area appeared to be a shear crack at
first glance. However, when the crack formations were investigated more closely and for more
time steps than the ones provided in Table 6.4, it could be seen that a minor shear damage
occured in this area very early in the cracking process when cracks on top of the beam were
propagating. This shear damage weakened the material and later, when bending cracks started
to form outside of the middle area, an initially straight bending crack landed in the weakened
area and followed the inclination of the old crack when it propagated. Signs of this cracking
behaviour can be seen in Table 6.5 where the crack initiation and propagation of RPC2 is
shown.
As mentioned in Section 6.2, RPC2 has been selected as a representative beam for the
experiment and was therefore analysed in more detail. The LS-DYNA model has been
fashioned to simulate RPC2 as closely as possible. Regarding details for both the experiment
set up and the LS-DYNA model the reader is reffered to Chapter 5. The crack patterns from
RPC2 and the LS-DYNA model were compared at different time steps, this is shown in
Table 6.5. Time steps close to the time of impact were of special interest since they provided
information about initial crack formation and propagation.

-- 128 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 111
Table 6.5 1st principal strain showing crack patterns of RPC2 and LS-DYNA model at
various time steps. Note that the time steps do not increase linearly in the table.
t [ms] RPC2 beam LS-DYNA beam
0
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
3.0
4.0
6.0
8.0
10.0
15.0
20.0
30.0

-- 129 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
112
The LS-DYNA model seemed to be able to simulate the bending cracks in the lower part of the
beam and the initial cracks in the upper part of the beam quite well. Note that the time step
when the cracks in the upper part initiated and disappeared are very similar in the experiment
and in the analysis.
The largest difference between the RPC2 crack pattern and the LS-DYNA crack pattern was
the inclined cracks which represented shear behaviour. The RPC2 showed a massive shear crack
in the middle of the beam, and another inclined crack closer to the support. In the LS-DYNA
results, the middle shear crack was detected, but the magnitude of it was highly underestimated.
The strains seemed to be dispersed over a larger area and it could be argued that if the strains
were to be accumulated into fewer elements, the magnitude would be similar as for the shear
crack shown in RPC2. Since the crack patterns shown in Table 6.5 are represented with 1st
principal strain (tension), it was possible to extract a vector plot from LS-DYNA that showed
the direction of the stress. In Figure 6.23 the middle area of the beam is shown with a contour
plot for the 1st principal strains and a corresponding vector plot, showing the direction of the 1st
principle strains in the same area.
Figure 6.23 1st principle strain 0.8 ms after impact along with a vector plot showing the
direction of the strain for the middle area of the beam.

-- 130 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 113
The vector plot shows that the direction of the strains was consistent to the shear crack
formation observed in the experiment. This supported the suggestion that the LS–DYNA model
detected the shear crack, but failed to accumulate the stress into the respective elements,
forming a distinct localized shear crack. As described in Section 5.4.4, the fracture energy
calculations in the LS-DYNA model was based on crack band width the size of one element. If
the crack band width was larger, the strains might have been forced to form further away from
each other and a better strain accumulation could have been reached. This is discussed in more
detail in Section 7.3.
The inclined crack that formed closer to the support in RPC2 was not captured in the LS-DYNA
model, nevertheless a very distinct vertical bending crack formed in the same area. This
supported the observation made earlier, that the inclined crack was in fact a bending crack and
the inclination of the crack shown in the RPC2 results was due to initial shear damage that
weakened the material so that the bending crack was steered into an inclined path.
The difficulty to detect inclined cracks in the LS-DYNA results could to some extent be due to
the rectangular mesh pattern chosen for the beam part in LS-DYNA. According to (Rots 1988),
cracks tend to follow a certain row of elements in a mesh, and since all the element rows were
vertical or horizontal, the cracks would behave accordingly. This was beneficial for the bending
cracks that were in fact supposed to form in this way, but for the purpose of detecting shear
cracks, other measures should be taken. If the mesh were to be altered, so that it would have an
angle of 45° from the initial beam surface it is logical to assume that the shear cracks would be
detected in a better way. According to the same logic, information about the bending cracks
would be insufficient in such type of mesh. Altering the prescribed fracture energy could also
help with detecting the shear cracks, the fracture energy model could be changed and it could
also be varied so that the material would be weakened in the elements where shear cracks are
expected to form. A parameter study on the influence of fracture energy can be seen in
Section 7.2 and Section 7.3.
The initiation of the shear and bending cracks in the middle of the beam seemed to be
simultaneous when looking at the data shown in Table 6.5. That could very well have been
caused by the size of the time step that was used and it would be interesting to look into the
crack initiation in more detail. Unfortunately, the high speed camera only provided results with
the interval of 0.2 ms. The LS-DYNA model however,was capable of providing results with
any time interval above the critical time step discussed in Section 5.4.5. It was therefore
possible to provide some insight into what happened in the early stages of the impact by looking
more closely at the LS-DYNA model. It would be interesting as a future study to perform the
experiment using a high speed camera with a higher frame rate to capture the initial
milliseconds in more detail, that is however not within the scope of this thesis. In Table 6.6,
carefully selected time steps obtained from a model using a time step of 0.01 ms, are shown
with a contour scale adjusted to better capture small strains.

-- 131 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
114
Table 6.6 1st principal strain contour plots showing initial crack formation in the beam
modelled in LS-DYNA. Note that the time steps do not increase linearly
throughout the table.
t [ms] Strains
0.07
0.08
0.09
0.10
0.12
0.14
0.16
0.18
0.20
0.30
1.00
1.37
1.40
2.00
The first sign of strains in the middle appeared after 0.07 ms when viewing the beam using the
contour scale shown in Table 6.6. This strain can be seen in the area close to the top of the beam
where the shear crack was initiated. The first sign of strains where bending cracks appeared
was detected after 0.08 ms. These strains turned into fully developed cracks after 0.16 ms
simultaneously. Hence, this indicated that the shear crack appeared first in LS-DYNA, based
on the initial strains. On the other hand, the strains that appeared directly under the area of
impact could also be due to local crushing rather than shear. This was supported by looking at
the cracks in the tested beams. A photograph of RPC2 taken directly after the test was
performed, see Figure 6.24. The figure shows a horizontal crack in the same area, which did
not connect to the shear cracks at all.

-- 132 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 115
Figure 6.24 Crack pattern displaying a horizontal crushing crack, shear cracks and bending
cracks. Photo by Erla Sara Svavarsdóttir.
The crushing could also be detected when looking at the 3rd principle strain at the same time
point as the cracking initiated since 3rd principle strain displays negative strain values. This is
shown in Figure 6.25 where it is clear that negative strains did occur in the area.
Figure 6.25 3rd principle strain (compression) 0.07 ms after impact.
In Table 6.6, it is unclear at which time the strains in the middle went from showing local
crushing to showing a shear crack. It was very clear however that the first bending crack
initiated very early and propagated during the following time steps, consequently one was
inclined to interpret the strains to be showing the bending crack first. As discussed earlier, the
LS-DYNA model was not capable of capturing shear behaviour in a good way, making this
estimate of which crack comes first a guess rather than a proper result.
Since the correlation between the LS-DYNA model and the RPC2 was quite good if the shear
cracks were excluded, it could be stated that the LS-DYNA model was capable of simulating
the behaviour of the real impact to an acceptable level of detail regarding the formations and
propagations of vertical cracks. The initial formation of cracks in the upper part of the beam
was the part of the experiment that differed the most from a static case and was therefore an
interesting topic for further inspection. The cracks in the upper part could be detected in
Table 6.6 appearing around 0.30 ms from first contact. In Table 6.7 this is investigated in more
detail.

-- 133 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
116
Table 6.7 1st principal strain contour plots showing how cracks form and close in the
upper part of the beam modelled in LS-DYNA. Note that the time steps do not
increase linearly throughout the table.
t [ms] Strains
0.26
0.27
0.30
0.35
0.45
0.49
0.60
0.73
1.00
1.20
1.27
1.30
The first signs of the cracks that formed in the upper part of the beam appeared after
approximately 0.27 ms. The strains started indicating a full crack after 0.49 ms which reached
a maximum magnitude after 0.73 ms. After 1.27 ms all signs of top cracks had disappeared.
This behaviour was due to the rapid impact of the load application. When the drop weight hit
the beam, the middle part of the beam was “not aware” that it was simply supported some
distance away. The information took some time to travel throughout the beam and the different
sections took time to react. In the mean time, the middle part of the beam had started to react to
the impulse. This caused the middle part to have a rapid downwards displacement, and cracks
formed in the upper part of the beam at a small distance from the middle area as if the beam
was fixed in that location. After a few more parts of a millisecond, all sections of the beam had
“become aware” of the loading and started to react. After this, the displacement of the beam as
a whole became more similar to that of a static case. This caused the top part of the beam to go
into compression, closing the top cracks. The impact wave could be seen travelling through the
beam by looking at the stress distribution in the beam during the first parts of a milliseconds,
see Table 6.8. The topic of initial reaction and impact wave is discussed in more detail in
Section 6.6.

-- 134 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 117
Table 6.8 3rd principal stress contour plot showing an impact wave travelling through the
beam modelled in LS-DYNA during the first parts of a millisecond.
t [ms] Strains
0.02 [MPa]
0.03
0.04
0.05
0.07
0.09
0.11
0.13
0.15
The impact wave traveled through the beam within the first 0.15 ms and therefore this
information was entirely lost in the time interval that had been used by the camera in the
experiment. This further supports the suggestion made earlier, to perform an experiment using
a high speed camera capable of providing data with a shorter time interval. Actual test results
showing this load wave would be valuable.
An interesting check was if the wave speed shown in Table 6.8 correlated well with the
theoretical wave speed. The wave speed theory described in Section 3.5.2 is based on pressure
waves, i.e. the wave created by e.g. a hammer blow at the end of a rod. The wave present in this
case was a shear wave, and the wave speed of a shear wave is described in a similar way as the
pressure wave, namely:

G
c 	
(6.2)
where G is the shear modulus. The shear modulus can be expressed in Yong’s modulus and
Poisson’s ratio by the relation:
 		
	
 1	2
E
G	
(6.3)
The exact stiffness of the cross section will be influenced by both the concrete and the
reinforcement, but if a simplification is made and the cross section is considered to consist of
concrete only, the value of the time it takes for the wave to propagate from the drop weight to
the support is:

-- 135 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
118
  	 	
ms
E
l
c
l
t 204	.	0
2	.	0	1	2
10	7	.	34
2400	5	.	0
1	2
9 




	


(6.4)
which correlates fairly well with the wave speed seen in Table 6.8. The slight difference is most
likely due to uncertainties in the material properties.
6.6 Displacement shape of the beam
Much of the theory behind transforming the system into a mass-spring system, described in
Chapter 4, relies on having a constant displacement shape present at all times. This was not the
case in the initial response of the system, when the impact was propagating through the beam.
In order to see the actual shape of the beam at different times regardless of the actual magnitude
of the displacement, the displacement values along the length of the beam were made relative
by dividing all values with the maximum displacement value at the specific time. The
displacements from the experiment and the model that captured the initial lift of the support
were adjusted so that the displacement over the support was zero and displacements in other
parts of the beam were relating accordingly to the support. Figure 6.26 shows the displacement
shape of half the beam during the first 2 ms, from the results of the experiment.
Figure 6.27 - Figure 6.29 show the same plot but from the numerical models.
Figure 6.26 Displacement shape of RPC2 during the first 2 ms.
-1.0
-0.8
-0.6
-0.4
-0.2
0.0
0.2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
RPC2 (adjusted for jump)
t = 0.2 ms
t = 0.4 ms
t = 0.6 ms
t = 0.8 ms
t = 1.0 ms
t = 1.2 ms
t = 1.4 ms
t = 1.6 ms
t = 1.8 ms
t = 2.0 ms

-- 136 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 119
Figure 6.27 Displacement shape of the beam in ADINA model 1 during the first 2 ms.
Figure 6.28 Displacement shape of the beam in ADINA model 2 during the first 2 ms.
-1.0
-0.8
-0.6
-0.4
-0.2
0.0
0.2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
ADINA model 1
t = 0.2 ms
t = 0.4 ms
t = 0.6 ms
t = 0.8 ms
t = 1.0 ms
t = 1.2 ms
t = 1.4 ms
t = 1.6 ms
t = 1.8 ms
t = 2.0 ms
-1
-0.8
-0.6
-0.4
-0.2
0
0.2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
ADINA model 2
t = 0.2 ms
t = 0.4 ms
t = 0.6 ms
t = 0.8 ms
t = 1.0 ms
t = 1.2 ms
t = 1.4 ms
t = 1.6 ms
t = 1.8 ms
t = 2.0 ms

-- 137 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
120
Figure 6.29 Displacement shape of the beam in the LS-DYNA model during the first 2 ms.
Figure 6.30 Comparison of the displacement shapes of the experimental beam and the
numerical models at chosen times.
As can be seen from these figures, all the models captured the displacement shape at different
times quite well. It is clearly shown that the displacement shape was not triangular initially, but
-1
-0.8
-0.6
-0.4
-0.2
0
0.2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
LS-DYNA (adjusted for jump)
t = 0.2 ms
t = 0.4 ms
t = 0.6 ms
t = 0.8 ms
t = 1.0 ms
t = 1.2 ms
t = 1.4 ms
t = 1.6 ms
t = 1.8 ms
t = 2.0 ms
-1.0
-0.8
-0.6
-0.4
-0.2
0.0
0.2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
t = 0.2 ms RPC2
t = 0.2 ms ADINA
t = 0.2 ms LS-DYNA
t = 1.0 ms RPC2
t = 1.0 ms ADINA
t = 1.0 ms LS-DYNA
t = 2.0 ms RPC2
t = 2.0 ms ADINA
t = 2.0 ms LS-DYNA

-- 138 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 121
over time, that was the shape the beam would receive. Judging by the figures, it was obvious
that after 2 ms in all figures above, the assumed triangular shape was achieved.
As stated earlier and shown in Table 6.8, the time it took for the impact wave to reach the
supports was approximately 0.2 ms. The reaction of the beam, however, did not happen
instantaneously, instead the beam needed some time to react to the impact wave.
The reason for the appearance of the displacement shapes during 0.2 - 1.4 ms needs further
discussion. Considering the shapes during 0.2 - 0.4 ms, it was clear that the motion due to the
impact only affected the part of the beam that was closest to the impact zone, and as the reaction
wave propagated, a bigger part of the beam reacted. The motion of the reaction wave became
very apparent using this way of presenting the results. In Section 6.5, the fact that bending
cracks appeared in the top part of the beam during a certain time interval was discussed, and
the reason for those cracks was better understood by observing the displacement shapes. At the
impact zone, plastic behaviour was dominant and the impact tried to form the perfectly plastic
shape (i.e. the triangular shape) of the beam instantaneously when being subjected to the impact
wave. In order to do so, the reaction wave propagated through the beam, trying to deform it to
fit the perfectly plastic shape. The fact that the beam wanted to deform would create a reaction
force in the beam, which explained the fact that the top bending cracks closed after a certain
time, when the beam had the time to react.
All this happened before the beam was “aware” that it rested upon supports, which explained
the fact that in the LS-DYNA model, the initial lift of the beam over the support happened
before there was a big reaction force in the support, mentioned in Section 6.4 and shown in
Figure 6.31. This made the initial behaviour and displacement shape of the beam basically
independent of its boundary conditions.
Figure 6.31 Displacement over support/Reaction force of support during the first 10 ms from
the LS-DYNA results.
-200
-160
-120
-80
-40
0
40
80
120
160
200
-5
-4
-3
-2
-1
0
1
2
3
4
5
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Reaction force [kN]
Displacement over support [mm]
Time [ms]
u(t) at support
Reaction force at support

-- 139 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
122
As can be seen in the Figure 6.10, the reaction force correlated well with the displacements,
showing a reaction at every bounce. The reason that the displacement was not zero at the time
when there was a reaction force can be explained by the fact that the node where the
displacements were measured moved slightly in a horizontal direction at every bounce, making
its displacement relative to the contact point to be separated from zero.
This meant that the deformation shapes shown in Figure 6.26 - Figure 6.29 were independent
of the boundary conditions of the beam, at least if considering the boundary conditions present
in the system. This is confirmed by Figure 6.32, which shows the response of a beam during
the first 2 ms without boundary conditions, i.e. floating freely in space.
Figure 6.32 Displacement shape of the beam in the LS-DYNA model with no supports during
the first 2 ms.
As can be seen, the response in Figure 6.32 is very similar to the response in Figure 6.29.
The general shape of the beam during the initial phase of the impact is shown in Figure 6.33.
The figure shows the wave propagation from the reaction of the impact through the beam until
the time when the beam hit the supports, and the beam’s response when trying to keep its wanted
shape during this phase.
-1.0
-0.8
-0.6
-0.4
-0.2
0.0
0.2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
LS-DYNA (No supports)
t = 0.2 ms
t = 0.4 ms
t = 0.6 ms
t = 0.8 ms
t = 1.0 ms
t = 1.2 ms
t = 1.4 ms
t = 1.6 ms
t = 1.8 ms
t = 2.0 ms

-- 140 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 123
cracks appear
but no yielding
plastic zone
closed cracks
global
movement
rotation of
beam
Figure 6.33 Elastic and plastic deformation of the bar shortly after impact, during the
reaction wave propagation.
If looking at the response after the beam landed on the supports again, the response would be
influenced by the supports. The displacement shape would, though, still be dominated by plastic
behaviour in the middle of the beam, and even if the magnitude of the displacements increased,
the shape was basically constant, as shown in Figure 6.34 where the experimental results are
displayed. The different numerical models displayed the same conceptual behaviour.

-- 141 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
124
Figure 6.34 Displacement shape at different times for RPC2.
In order to see how the cracks in the beam developed during the reaction wave propagation, the
crack pattern was plotted next to the displacement shape over the length for the experimental
results and the results from LS-DYNA, respectively. The contour scale is the same as in
Table 6.5. The response at selected times during the first 2 ms is shown in
Figure 6.35 – Figure 6.39, where the dashed line in the displacement shape plot represents the
undeformed beam. The full response during the first 2 ms is plotted in Appendix D.
-1.0
-0.8
-0.6
-0.4
-0.2
0.0
0.2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
t = 2.0 ms
t = 5.0 ms
t = 10 ms

-- 142 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 125
t = 0.2 ms
a) b)
Figure 6.35 Response after 0.2 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
t = 0.4 ms
a) b)
Figure 6.36 Response after 0.4 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
t = 0.6 ms
a) b)
Figure 6.37 Response after 0.6 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).

-- 143 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
126
t = 0.8 ms
a) b)
Figure 6.38 Response after 0.8 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
t = 2.0 ms
a) b)
Figure 6.39 Response after 2.0 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
When comparing the experimental results with the LS-DYNA results previous in this section,
it was stated that the correlation was good. Both the displacement shapes and the cracks at
different times were very similar. If studying the figures, the reaction in the beam due to the
impact was apparent during the first 0.8 ms for both the experimental case and in the LS-DYNA
model. After 0.2 ms, the beam had reached the plastic shape and the displacement shape was
basically constant after this time.
If studying the response in the upper side of the beam, it could be seen in
Figure 6.37 – Figure 6.38 that the cracks in the top correlated in a good way as well. In both the
experiment and in the model, distinct cracks appeared at around 0.4 ms and closed at around
1.4 ms. If studying the displacement shapes at this period, it can be seen that the curvature at
the points of the cracks was high (i.e. the change of inclination of the displacement shape),
which explained the cracks appearing at these points. In the figures, distinct curvature shifts
could even be discerned at the crack locations in both the experiment and the model. This was
reasonable, since there was a distinct stiffness change at the crack locations. In order to
investigate this more, the response after 0.8 ms, when the top cracks were most apparent was
plotted together with the displacement shape in Figure 6.40 - Figure 6.41.
As can be seen, the location of the distinct curvature shifts was at the same place as the top
cracks, both in the experiment and in LS-DYNA.

-- 144 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 127
Figure 6.40 Crack pattern/displacement shape for RPC2 after 0.8 ms, with the distinct
curvature shifts, at the places where the top cracks appeared.
Figure 6.41 Crack pattern/displacement shape for LS-DYNA model after 0.8 ms, with the
distinct curvature shifts, at the places where two top cracks appeared.
Both the LS-DYNA model and the experiment showed the behaviour shown in Figure 6.33,
and the wave in the beam was distinguishable during the first 1.4 ms, if looking at the
displacement shapes for both cases. After this time, the displacement shape was basically
formed as in the ideal plastic case.

-- 145 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
128
Parametric studies
7.1 Introduction
In order to see the effect different parameters had on the results, parameter studies were
conducted, where one parameter at a time was changed in the main analysis of the different
models. The influence was then evaluated and analyzed as described in this chapter.
The type of parameter and the type of model is specified in each section, together with the
purpose and result of each parameter study. Regarding the influence in ADINA,
ADINA model 1 was used. The response of this model was considered to be representative for
both models.
Regarding the LS-DYNA model, as stated in Appendix Appendix H, a model consisting of
10 mm elements was considered to be suitable to perform these parameter studies. The methods
used to estimate how the results varied are displacement of midpoint as a function of time and
crack patterns. Some parameters however, required more types of results to fully understand
the influence.
7.2 Bilinear fracture energy in the CDPM2 material model
The influence of changing the fracture energy damage input in CDPM2 from a linear model to
a bilinear model was investigated. All information presented in this chapter concerning the
material model was based on (LS-DYNA 2014a). The LS–DYNA model used in this study was
the same as described in Section 5.4, except for the mesh size, which was 10 mm. The
parameters of both the linear and bilinear damage models are explained in Figure 7.1.
ft
w
σ
wu
Gf
ft
w
σ
wu
Gf
wu1
ft1
a) Linear fracture energy damage model b) Bilinear fracture energy damage model
Figure 7.1 Two fracture energy damage models used in CDPM2.
Since the fracture energy value, Gf, and the maximum tensile stress value, ft, were known from
test results they were assumed to be constant. The values for ft1 and wu1 were calculated based
on the values shown in Figure 7.2.

-- 146 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 129
ft
w
σ
wu
Gf
wu
ft
3
6
Figure 7.2 Calculated values for a bilinear fracture energy damage model.
This way of establishing a bilinear model came from (Johansson 2000) where the method is
described in more detail.
The resulting displacement of the beam midpoint is shown in Figure 7.3 for both damage curves
along with the test result from RPC2.
Figure 7.3 Displacement as a function of time for bilinear and linear damage curves
compared to test results of RPC2.
The bilinear damage curve model obtained somewhat larger maximum displacement than the
linear damage curve. The maximum displacements for the bilinear and linear models were
28.4 mm and 27.5 mm respectively, which was a difference of 3%. This was not a large
difference, it was however concerning that the bilinear model gave a result with a higher
displacement, i.e. it was somewhat weaker than the linear model. The bilinear model should
have been a more accurate way of simulating real behaviour and yet the results in Figure 7.3
showed that the difference in the displacement results inceased.
-35
-30
-25
-20
-15
-10
-5
0
5
10
15
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50	
Displacement [mm]
Time [ms]
Bilinear
Linear
RPC2

-- 147 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
130
Based on this observation, it seemed that having a bilinear damage model made the reaction of
the beam slightly less stiff. That was not necessarily a worse representation of the real
behaviour. Other factors may have caused the LS-DYNA model to show a less stiff response
in general compared to the experimental results. Even if the bilinear results differed somewhat
more from the real behaviour, it made the model more detailed, since it represents the real
behaviour of the concrete in tension in a better way.
The influence of the damage model on crack formations was of interest as well. The crack
pattern at chosen time steps is shown in Table 7.1 for both damage models.
Table 7.1 1st principle strain showing crack patterns of the LS-DYNA model with a linear
and a bilinear damage model at various time steps. Note that the time steps do
not increase linearly throughout the table.
t [ms] Linear Bilinear
0.6
1.0
4.4
7.0
10.0
The difference between the linear and bilinear model could be seen well in the middle area of
the beam. The bilinear model showed more scattered strains where the shear crack was expected
to form, but the combined magnitude of the shear crack looked higher compared to the one in
the linear model. The bending cracks in the middle were smaller in magnitude in the bilinear
model. The shear crack in the middle in the bilinear model eventually spread over an even larger
area and combined with the bending cracks, making the entire middle area cracked. Signs of
top bending cracks were detected in the bilinear model, but the magnitude of the shear did not
represent fully developed cracks. The linear model did not show top cracks either in this 10 mm
mesh, but the strains in that area are considerably higher than in the bilinear model. An inclined
strain path was detected in the bilinear model over the support, this path did not develop into a
crack. Bottom bending cracks outside of the middle area did not form in the bilinear model,
however some strains were detected in those areas. It is possible that the wide scatter of the
shear crack was interfering with other crack formations in the beam. A model that would better
capture the concentration of the middle shear crack paired with a bilinear damage model would
be an interesting future study.
The fact that the reaction of the beam using bilinear damage model was slightly weaker, as
shown in Figure 7.3 related to the magnitudes of middle shear cracks being higher. Larger
strains result in higher values of global displacements.

-- 148 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 131
7.3 Magnitude of fracture energy in the CDPM2 material model
The magnitude of fracture energy, Gf, controls the stress barrier for crack initiation in the
CDPM2 material model. The crack formations in the beam should therefore have been highly
dependent on this parameter. The global behaviour of the beam (e.g. displacement) would be
influenced by this change in local damage behaviour as well. Figure 7.4 shows displacement as
a function of time for three different magnitudes of fracture energy along with the displacement
of RPC2 for comparison. Since the stress at fracture initiation, ft, was considered to be known,
it was only the crack width factor, wu, that was altered.
Figure 7.4 Displacement as a function of time for three different magnitudes of fracture
energy.
The maximum displacement of the midpoint varied between the models, the values are shown
in Table 7.2.
Table 7.2 Maximum displacements in the midpoint of the beam for different magnitudes of
fracture energy.
Change in fracture energy Crack width input,
wu [mm]
Maximum
displacement [mm]
Difference from
basic model [%]
Increase x 2 0.138 25.7 -6.5
Basic model 0.069 27.5 -
Decrease x 0.75 0.052 28.0 1.9
Varying the fracture energy had a clear influence on the displacement of the midpoint of the
beam. Higher fracture energy made it more difficult for cracks to initiate and this resulted in a
-35
-30
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Displacement [mm]
Time [ms]
Decrease x0.75
Unchanged
Increase x2
RPC2

-- 149 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
132
stiffer response of the beam, and vice versa. A test where the fracture energy was decreased by
x0.5 was performed as well, and yielded odd results that most likely had to do with a
computational error rather than a real physical behaviour. The results can be seen in Appendix
H.4.
The crack patterns for different fracture energy magnitudes are shown in Table 7.3.
Table 7.3 Crack patterns at two different time steps for different magnitudes of fracture
energy Gf.
Change
in Gf
t = 0.8 ms t = 4.4 ms
x 2
x 1
x 0.75
The model with increased fracture energy showed very high magnitudes in the middle bending
crack compared to the basic model. The strains that appeared further away from the middle area
did not reach the magnitude of a full crack. This showed clearly that the cracks tended to
accumulate in fewer places when fracture energy was increased. Unfortunately, this did not
make the middle shear crack more distinct. It seemed that much of the magnitude had
transferred into the middle bending crack instead. Since crack initiation was more difficult, the
initial strains in the top of the beam were not as distinct as they were in the basic model.
The model with decreased fracture energy showed lower magnitudes in the middle bending
crack than the basic model, as was to be expected given the result for the increased fracture
energy. More strain paths with high magnitude appeared further away from the middle area,
however, the magnitude was not high enough to represent a crack. The middle shear crack was
more distinct in the beginning, see time t = 0.8 ms in Table 7.3, but when strain paths started to
form further away from the middle area the shear crack lowered in magnitude and bending
cracks became dominating, see time t = 4.4 ms in Table 7.3. The lowered fracture energy did
not seem to have a big influence on the formation of initial strains in the top of the beam, there
was only a slight difference in the positioning of the strain paths.
As mentioned in Section 5.4 the computational process in LS-DYNA is based on the
assumption that crack band width is one element size, which did not correlate well with the
recommended choice. It was therefore of interest to inspect the value of wu if it was calculated
based on mean crack spacing instead of the element size. First, the value of maximum crack
spacing, sr,max, was calculated according to (CEN 2004), see Appendix B. The value of mean
crack spacing was then determined using equation (7.1) according to common practice in FEM.
mm	72
7	.	1
max	, 	 r
m
s
s	
(7.1)
The corresponding mean crack width, wm, was calculated using equation (7.2).

-- 150 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 133
mm
mm
mm
mm
s
l
w	w
m
el
u	m 010	.	0
72
10
069	.	0 					
(7.2)
The calculated mean crack width turned out to be very low compared to the value that had been
chosen in the LS-DYNA model. This suggested that in order to include the proper crack band
width, the fracture energy input should have been significantly lower. As can be seen in
Figure 7.4 this change would not yield a stiffer response of the beam, on the contrary, lowering
the fracture energy provided results that showed weaker behaviour. As mentioned earlier in this
section, the CDPM2 material model seems to have problems handeling such low values of
fracture energy and the results from such a model would therefore not be credible, as described
in Appendix H.4. On the other hand, if the fracture energy was increased, the overall behaviour
of the beam would be stiffer and the results more similar to the exprimental results.
The frequently mentioned problem of modelling shear cracks in LS-DYNA could be a factor
that influenced the overall crack formation. A model that is better equipped to handle shear and
has a better way of handeling fracture energy could prove to be more accurate than the one that
has been used in this study, that is however not within the scope of this thesis. Increasing the
fracture energy input did make the response of the beam stiffer, but the increase in stiffness was
not very high. This indicated that there were other factors that could be adjusted to better capture
the stiffness and the overall behaviour of the beam.
7.4 Boundary condition study
In Section 6.6 an LS-DYNA model with no supports was tested and yielded very similar results
for displacement shape u(x) as the ones obtained from the simply supported model. A different
boundary condition has been investigated as well, where roller supports were added to the top
surface of the beam, see Figure 7.5.
Figure 7.5 New boundary condition with roller supports on the top and bottom of the
concrete beam.

-- 151 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
134
The displacement of the midpoint of the beam after impact was extracted, see Figure 7.6, along
with the displacement for the basic simply supported model. The maximum displacements of
the beam with and without top supports are shown in Table 7.4.
Figure 7.6 Displacement of midpoint as a function of time for two different support
conditions.
Table 7.4 Maximum displacements in the midpoint of the beam for both boundary
conditions.
Boundary condition Maximum
displacement [mm]
Difference from
basic model [%]
No top supports 27.5 -
Top and bottom supports 27.7 0.8
It was clear that the difference in maximum displacements between the two cases was
negligible.
The initial displacement was almost identical in the two cases, the first 2 ms in particular. It
was not until after 17-18 ms where the displacements started to differ, but that was the point
when the beam with no top supports started to rebound. The displacement amplitude of the
beam with top supports was higher than one would have expected from looking at the inclined
amplitude of the beam with no top supports.
A slight difference that initiated after around 3.5 ms was detected. That happened to be the same
time as when the bump discussed in Section 6.4 had finished and the beam rested firmly on the
supports again. It is possible that these two factors were related so that when the beam without
top supports had finished the support bump it had a slight decrease in the rate of displacement
-30
-25
-20
-15
-10
-5
0
5
10
15
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Displacement [mm]
Time [ms]
No top support
Top support

-- 152 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 135
in the middle. The beam that had supports on top was restricted from having this initial bump
over the supports and did not show the same decrease in the rate of displacement in the midpoint
as the one with no top supports. The general behaviour of the beam with top supports was not
as smooth as the one without top supports. It seemed to be fluctuating within the larger initial
displacement. A very likely explanation is that two mode shapes were being detected, a strong
one with a large amplitude and low frequency, and a weaker one with a small amplitude but
higher frequency, see Figure 7.7. The top supports forced the beam into a more complex
reaction that contained these two visible mode shapes.
a) First mode shape b) Third mode shape
Figure 7.7 The two mode shapes that were detected in the beam response when having top
supports.
In the numerical 2DOF model, and in the ADINA models discussed in Section 6.3.2, the jump
of the beam was restricted as well. The displacements from these two models compared with
the LS-DYNA model with top roller supports is shown in Figure 7.8.
Figure 7.8 Displacement as a function of time from ADINA, 2DOF calculations and
LS-DYNA model with top supports.
Since the initial displacement was almost identical in LS-DYNA, regardless of whether there
were top supports or not, the comparison is the same as in Section 6.3. After 17 ms, when the
support arrangement had more influence on the response, the comparison differed. The
-35
-30
-25
-20
-15
-10
-5
0
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Displacement [mm]
Time [ms]
ADINA
2DOF
LS-DYNA w. top supports

-- 153 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
136
amplitude of the LS-DYNA model was significantly larger than the amplitude obtained using
ADINA and 2DOF. This means that the LS-DYNA model had lower stiffness in the elastic
response, which may be caused by the cracking in the material having a large influence on the
stiffness of the beam. Further, the frequency was lower and did not seem to align well with the
other models. An experiment where the beam is restricted from lifting at the supports would be
an interesting comparison to have. It is possible that the LS-DYNA model with top supports
was overestimating the amplitude of the response after 17 ms.
The reaction force between the beam and the bottom support for the beam with and without top
supports can be seen in Figure 7.9. Since the reaction force had high fluctuation and the results
were difficult to interpret, accumulated impact is shown as well.
Figure 7.9 Reaction force and accumulated impulse in the beam - bottom support interface
for both the model with top supports and without.
The initial bump that happened in the model without top supports delayed the reaction force
initiation. When the beam was restricted from moving in the positive vertical direction, the
reaction initiated around 2 ms after impact, versus the almost 4 ms it took for the beam with no
top supports. The accumulated impact showed a very similar shape during the first 6 ms from
reaction force initiation. To clarify, a delayed curve for the beam with top support has been
added to Figure 7.9. After that, the accumulated impact for the beam with top supports exceeded
the one for no top supports. No energy went into the jump, but instead the beam was repeatedly
being pushed back onto the bottom supports by the top supports.
As discussed in Section 6.4, the initial displacement shape of the beam was not very influenced
by not having any supports. The same study has been performed for the model with no top
supports and the model with top supports, the displacement shapes for selected time steps are
shown in Figure 7.10. As before, the displacement magnitude was not shown. The graph has
been scaled to show only the displacement shape from the point where the support was to the
midpoint of the beam.
0.00
0.04
0.08
0.12
0.16
0.20
0.24
0.28
0.32
0.36
0.40
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Accumulated impulse [kNs]
Reaction force [kN]
Time [ms]
Top supports
No top supports
Top supports (Imp.)
Top supports "delayed" (Imp.)
No top supports (Imp.)

-- 154 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 137
Figure 7.10 Displacement shape u(x) of a LS-DYNA modelled beam with three types of
support conditions for three different time steps.
As discussed in Section 6.6, the simply supported beam and the beam without supports had
very similar displacement shapes. The beam that had bottom and top supports had a
displacement shape that was very similar to the other ones. It can be seen though, that the shape
for the top supports case took slightly longer time to take on the smooth shape of a static load
case. The fact that the beam could not move freely in the positive vertical direction restricted
the rotation of the beam over the supports and slowed down the global response. As shown in
Figure 7.9 the reaction force between the beam and bottom supports did not initiate until after
the first 2 ms, the displacement shapes shown in Figure 7.10 happened before that time.
The crack patterns that formed in the beam are shown in Table 7.5.
-1.0
-0.8
-0.6
-0.4
-0.2
0.0
0.2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
t = 0.2 ms bottom supp.
t = 0.2 ms bottom and top supp.
t = 0.2 ms no supp.
t = 1.0 ms bottom supp.
t = 1.0 ms bottom and top supp.
t = 1.0 ms no supp.
t = 2.0 ms bottom supp.
t = 2.0 ms bottom and top supp.
t = 2.0 ms no supp.

-- 155 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
138
Table 7.5 Crack patterns of the beam having no top supports versus having top supports
at several time points after impact.
t [ms] No top supports Top supports
0.8
1.0
2.0
3.0
4.4
The crack patterns seemed to follow a similar trend as the displacement results. For the first
two milliseconds there was not much difference between having top supports or not. In later
stages there were some variants. The bending cracks at the bottom of the beam were larger and
more condensed towards the middle when the beam had top supports. They also seemed to
merge with the middle shear crack in that area.
Having supports on the top of the beam might have introduced a degree of fixation into the
system. The fixation level was investigated by looking into the stress levels in the x-direction
close to the upper support as shown in Figure 7.11.
Figure 7.11 Element chosen for stress investigation.
The stress in the element was plotted as a function of time for both support cases and shown in
Figure 7.12.

-- 156 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 139
Figure 7.12 Stress in the x-direction in the upper side of the beam as a function of time,
shown for both support cases.
The stress curves were almost identical in the initial phase, but started to deviate after around
1 ms. The general behaviour was still very similar, supporting the assumption that the level of
fixation that the top support brought to the system was very small.
A beam that is fully fixed at both ends would be interesting to investigate and compare with
these results, the first two milliseconds of the response in particular. This is suggested as a
future study.
The results presented in this section, along with the results in Section 6.6, indicate that initial
response to impact loading is rather independent of boundary conditions, i.e. the support
arrangement. Furthermore, it can be stated that when conducting an experiment on a simply
supported beam, where the initial response of the beam is of interest, it does not matter whether
there are top supports or not since the influence on the results is negligible.
7.5 The influence of strain rate on material response
As discussed in Section 3.6, strain rate can have a significant influence on the strength of a
material. Higher strain rate increases the apparent material strength, making the response stiffer.
Since the LS-DYNA model that was used in this thesis showed a response that was less stiff
than the test results, it was of interest to investigate this influence in more detail.
In Appendix H.3 the strain rate at crack initiation in a bottom bending crack was estimated. The
value varied with time, but had approximate minimum and maximum limits shown in
equation (H.1):
1	1 s	152	s	45 	 	
	
(H.1)
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Stress [MPa]
Time [ms]
Top supports
No top supports

-- 157 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
140
The CDPM2 material model used for concrete in LS-DYNA has the option to take strain rate
into account. According to (Grassl 2013), the method is to scale the inelastic strain and the
strain rate propagation in each calculation step based on the current strain rate variable. The
scaling factor αr ≥ 1 is calculated using equation (7.3):
 	 	rc	compr	rt	compr	r X	X	

	
	 		 1	
(7.3)
The αrt and αrc factors represent tension and compression, and are based on maximum and
minimum strain rates, respectively. The factor Xcompr is a continuous compression measure,
equal to 1 for pure compression and 0 for pure tension. The material model allows for the strain
rate effect to vary with time, so the strain rate factor was updated for each time step.
The basic LS-DYNA model included this strain rate dependency in the concrete. The effect of
disregarding strain rate was tested as well and the resulting midpoint displacement as a function
of time is shown in Figure 7.13.
Since the basic model only accounted for strain rate effect in the concrete, but not in the
reinforcement, there was a possibility that changing this would provide a stiffer response that
would come even closer to the RPC2 test result. The material model used for reinforcement,
003_PLASTIC_KINEMATIC, has the option to take this effect into account. The method is
however not the same as the one used in the CDPM2 material model. In this case the strain rate
effect is based on the Cowper and Symonds model (LS-DYNA 2014a). The resulting
displacement can be seen in Figure 7.13 and Table 7.6.
Figure 7.13 Displacement of midpoint as a function of time when strain rate influence was
included and excluded in the material models, along with RPC2 test result.
Excluding the strain rate influence in both concrete and reinforcement provided a response that
was less stiff than the basic model, as was to be expected. The difference was not large, in
Table 7.6 the maximum displacement values are shown for each curve.
-35
-30
-25
-20
-15
-10
-5
0
5
10
15
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Displacements [mm]
Time [ms]
No strain rate influence
Concrete has strain rate influence
RPC2
Concrete and reinf. have strain rate influence

-- 158 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 141
The response of the beam was stiffer when both the reinforcement and the concrete took strain
rate into account, compared to the basic model. The maximum displacement was very close to
the one obtained from the RPC2 test results.
Table 7.6 Maximum displacements in the midpoint of the beam for all strain rate
conditions and RPC2 test result.
Model Maximum
displacement [mm]
Difference from
basic model [%]
Only concrete is strain rate dependent 27.48 -
No strain rate dependency 28.61 4.1
Concrete and rebars are strain rate dependent 23.10 15.9
RPC2 test result 23.20 15.6
The shape of the curve however, did not have good correlation to the RPC2 test results. The
peak in displacement had a different shape and the oscillations that happened after the beam
jumped from the supports were almost indistinguishable. The reason for this was most likely
the fact that the material model used for the reinforcement scaled the yield strength so that it
would increase. This caused more of the response to happen within the elastic range, and a part
of the plastic deformations was lost in the process.
The crack patterns that formed in the beam were observed as well. In Table 7.7 the crack
patterns are shown for the three variants of strain rate dependency at the time points that were
considered to provide the most interesting results.

-- 159 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
142
Table 7.7 Crack patterns at four different time steps for different strain rate effect models.

dep. t = 0.8 ms t = 3.0 ms
None
Only
concrete
Concrete
and rebars
t = 4.2 ms t = 10.0 ms
None
Only
concrete
Concrete
and rebars
Looking at 0.8 ms after impact, the crack pattern was quite similar regardless of strain rate
dependency. All models detected the initial strains in the top side of the beam. The only
difference was that the middle bending crack showed the most concentration in the basic model
where only the concrete was strain rate dependent. This trend continued in the crack patterns
3.0 ms after impact. The middle crack was most distinct in the basic model and other strain
paths had a lower magnitude and were fewer. The model where both concrete and reinforcement
were strain rate dependant showed a very distinct shear crack, which was closer to the RPC2
behaviour than the other models. However, after 4.2 ms this shear crack seemed to be getting
out of hand. It clearly followed the path of the reinforcement creating a large horizontal crack.
A distinct shear strain path formed over the support as well which was not the case in the basic
model, or in RPC2, and much lower in magnitude in the model that was not strain rate
dependant. This was the place where shear forces could be expected to be high, but in this beam,
not so high that a crack should be able to form. After 10.0 ms the horizontal crack had stretched
all the way to the end of the beam, dominating the entire crack formation. The model with no
strain rate dependency still showed a very similar behaviour to the basic model throughout,
except for slightly more distribution of strains.
When looking at the model where both concrete and reinforcement were strain rate dependent
it could be suggested that the reinforcement modelling may not be suitable for this type of study.
It had been assumed to be fully embedded within the concrete, which clearly interfered with
the cracking behaviour in later stages so that the cracks in the concrete followed the
reinforcement path. Modelling an interface between the reinforcement and the concrete,
allowing for some slip, might have provided a more reasonable result. It is interesting how the
initial shear crack in the middle was detected at 3.0 ms instead of having massive bending
cracks. The influence of capturing this crack on the global stiffness of the beam was probably

-- 160 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 143
one of the factors that contributed to the increased stiffness, along with the increased material
strength. It is also possible that the different strain rate models are not compatible, since they
are based on different calculation models.
A future study could be to attempt to create a model that captures the strain rate effect and the
interaction between the concrete and reinforcement in a better way. This could provide better
results regarding both the stiffness of the beam and crack formations.
In order to see the magnitude of the increase of strength of the reinforcement when the
reinforcement has strain rate effects taken into account, the stress in the reinforcement in an
element close to the centre of the beam is shown in Figure 7.14, where the results with and
without strain rate dependency are plotted.
Figure 7.14 Stress in reinforcement.
According to the Figure 7.14, the reinforcement yielded in the basic model around the stress
that was expected, i.e. around 610 MPa. However, in the model where the strain rate effect is
accounted for, the stress was able to reach significantly higher levels. The maximum stress
obtained was around 1200 MPa, which implies that the strain rate effects doubles the capacity
of the reinforcement, i.e. DIF ≈ 2. The behaviour of the curve in the figure implies that yielding
has not yet occurred since there is no upper “roof”, which means that the reinforcement still
was in the elastic range.
In order to improve the results and the shape of the u(t) graph when taking strain rate effects
into account, to get a behaviour more similar to the behaviour of the experimental beam and the
beams in the basic FE-models, the yield strength was increased to 1200 MPa and an analysis
was made with this yield strength but without strain rate effects of the reinforcement. This was
considered a way of getting around the problem with the strange shape of the graph in
-400
-200
0
200
400
600
800
1000
1200
1400
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Stress [MPa]
Time [ms]
Stress (Strain rate dep.)
Stress (Not strain rate dep.)
Static yield strength

-- 161 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
144
Figure 7.13 but still having the temporary strength shown from the strain rate dependency. The
results from this analysis is shown in Figure 7.15.
Figure 7.15 Displacement of midpoint as a function of time including response of the beam
with reinforcement with increased yield strength.
As can be seen, the behaviour of the beam with increased yield strength is similar to the
behaviour when strain rate effects is included. The proper behaviour was not able to be captured
with this methodology, and while the magnitude of the maximum displacement remains
accurate, the behaviour is not, which implies that the wrong failure mode is obtained.
Regarding the magnitude of the strain rate effects of the steel, it could be concluded that the
DIF in the analysis was very high, hence not reasonable. (Rodríguez - Martínez et al. 2010)
discusses DIF magnitude of steel, and the results in that article are spanning in the range of a
factor of 1.1-1.2. This is far from the DIF experienced in the analysis, which is around 2. To
conclude, the strain rate effects of the reinforcement should not be considered as reliable results,
which is also shown by the non-physical behaviour displayed in Figure 7.13.
7.6 Flexible supports in the ADINA model
As discussed in Section 6.4, the ADINA model could be modelled with non-linear spring
supports instead of the simply supported boundary conditions used in the ADINA models. The
rest of the model is based on ADINA model 1, with a point mass as the drop weight. The model
is shown in Figure 7.16.
-35
-30
-25
-20
-15
-10
-5
0
5
10
15
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Displacements [mm]
Time [ms]
No strain rate influence
Concrete has strain rate influence
RPC2
Concrete and reinf. have strain rate influence
fy = 1200 MPa

-- 162 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 145
x
y
z
me
Figure 7.16 ADINA model with spring supports.
This way, the lift of the beam from the supports could be captured, making the behaviour of the
beam resemble the LS-DYNA model and the response of the experimental beam in a better
way. In Section 6.4, the spring support model was used to capture the initial lift of the beam,
but in this section, the midpoint displacement over time u(t) and the displacement over the
length of the beam at different times u(x,t) is evaluated and compared with the regular numerical
models. Figure 7.17 shows the displacement of the midpoint over time for the ADINA model
with spring supports compared to ADINA model 1 and 2.
Figure 7.17 Displacement of midpoint over time for the ADINA models.
As can be seen, the spring support model was able to capture when the beam lifts from the
support, like the LS-DYNA model. However, one big issue with this ADINA model was that it
did not behave in an entirely physical way. The support springs in the model was modelled as
having stiffness as long as the reaction force of the support is negative (i.e. in compression),
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacements [mm]
Time [ms]
ADINA model 1
ADINA model 2
ADINA spring supports

-- 163 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
146
but as soon as it was in tension the beam was released by having zero stiffness in the supports.
This worked well in the initial phase, but the beam was oscillating in a later stage, when it lifted
from the support. This meant that the part of the oscillation that pushed the beam in a downward
direction had stiffness, even if the beam was up in the air. With this response it can be concluded
that the reaction force in the midpoint had the same shape as the LS-DYNA model and the
experimental beam, but the magnitude of the displacement after the peak was not captured in a
good way. The comparison between the ADINA spring supports model and the LS-DYNA
model and experimental beam is shown in Figure 7.18.
The response over the length of the beam at different times is shown in Figure 7.19, where a
comparison is made between the regular ADINA model and the model with spring supports.
Figure 7.18 Displacement of midpoint over time.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacements [mm]
Time [ms]
ADINA spring supports
LS-DYNA
RPC2

-- 164 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 147
Figure 7.19 Displacement over length of the beam at different times for the model with the
spring supports and ADINA model 1, respectively.
If comparing the graphs in Figure 7.19, where the response from ADINA model 1 is plotted
together with the response from the model with the spring supports, it can be seen that the spring
supports model reached the plastic shape significantly faster. The reason for this, however,
ought to be because of the modelling problem described above, since it would not have any
displacement when it tried to oscillate in the “negative” direction, i.e. the node in contact with
the support would not have the proper downward displacement when the beam was in the air.
This would make the plastic shape appear during a shorter period.
-1.0
-0.8
-0.6
-0.4
-0.2
0.0
0.2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
t = 0.2 ms spring supports
t = 0.2 ms ADINA model 1
t = 1.0 ms spring supports
t = 1.0 ms ADINA model 1
t = 2.0 ms spring supports
t = 2.0 ms ADINA model 1

-- 165 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
148
Final remarks
8.1 Conclusions
The aim and objective of this Master’s thesis has been to improve the knowledge of the
structural behaviour of concrete when subjected to impact loading. Another objective has been
to assess the accuracy of numerical models with different complexity, e.g. a 2DOF mass spring
system, FE-models using 2D beam elements (in ADINA) and FE-models using solid 3D
elements (in LS-DYNA). As a reference in this thesis, an experiment has been used where a
drop weight hits reinforced concrete beams. The initial questions in this report treated the
influence of the different degrees of simplification in the numerical models, if the test setup
was satisfactory or if improvements can be made and how to handle the material properties
when modelling the dynamic system.
The overall behaviour of all numerical models showed a significantly less stiff behaviour than
the experimental results, hence larger displacements. The model that came closest to the real
result was the LS-DYNA model, but it can be concluded that both a 2DOF model and a beam
element FE-model showed reasonable correlation as well.
In general, the more refined a FE model is, the closer to reality the response is expected to be.
This was not the case in neither the ADINA nor the LS-DYNA model. Instead, the more refined
each model became, the response got further away from the real behaviour since the stiffness
decreased.
Regarding the displacement shape of the beam, it can be concluded that the different FE-models
were able to capture the wave propagation in an accurate way. A distinction was observed
regarding the impact wave from the drop weight and the corresponding reaction of the beam. If
generalizing, the impact wave was approximately 10 times faster to propagate through the beam
than the time the beam took to react. After the reaction wave had passed through the beam, the
beam basically had a purely plastic displacement shape similar to a general static case. In
general, a big part of the impact obtained was a plastic impact in all models and the experiment.
The crack patterns of the beams in the experiment was dominated by shear cracks close to the
middle of the beam and bending cracks in the midspan. The shear behaviour proved to be hard
to capture in the LS-DYNA model, at least in the form of localized cracks. However, bending
cracks showed very good correspondence. Both the experimental results and the LS-DYNA
model showed bending cracks opening and closing at the same instant in the top part of the
beam during the reaction wave propagation phase. The formation of these top cracks is a big
difference from the static case, where they would not appear.
It can be concluded that the behaviour during the reaction wave propagation phase (i.e. during
the first 2 ms) contains much information of interest. This phase is basically independent of the
boundary conditions treated in this thesis.
Regarding the 2DOF model, it can be concluded that it has a good prediction of the overall
behaviour, but this is very dependent on how the reaction force in the spring between the beam
and the drop weight is handled. If a proper value of this is used, this model will be powerful. It
is, however, hard to have a proper estimate and this requires more studies. Another factor for
the 2DOF model to show better correlation with the experimental results would be to change
the transformation factors with time, since the factors used are based on the purely plastic
displacement shape. This is not the case during the reaction wave propagation.
In order to better capture the phase during the reaction wave of the beam, it can be concluded
that future experiments would gain much on having a better high speed camera able to capture

-- 166 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 149
more frames per second, desirably a frequency capacity of a factor 3-4 larger than the camera
used in this experiment.
In general, it can be concluded that an important reason for the divergence in results of the
models compared to the experiment is most likely the difficulty of capturing the strain rate
effects. The LS-DYNA model was the only model able to capture some of this effect, but it
probably did not capture it well enough. Other factors might also influence the difference in the
response, e.g. measurement errors in the experiment and material tests, but the strain rate effect
is believed to have most influence.
When using the transformation factors in the equivalent 2DOF system, a simplification was
made where
mF was used on the different masses. This simplification is probably too rough. It
will not make a large different in this case since the stiffness of the bar is significantly higher
than the stiffness of the beam, although in other cases this will have greater importance. In order
to increase the accuracy when transforming structural elements to an equivalent MDOF system,
mF,
mF and
mF should be handled separately in each part of the equation of motion.
8.2 Further studies
In this thesis the beam was simply supported, future studies can evaluate the response with
different boundary conditions, different span length and different reinforcement amount. Beams
with fibre reinforced concrete with or without bending reinforcement would also be of interest
to evaluate more in detail. Other initial conditions would be of interest, to evaluate the response
if having e.g. another mass or drop height.
An important factor that is not covered in all models in this thesis is the effect of strain rate.
The effect the strain rate has on the system could therefore be studied more in detail, both how
well LS-DYNA really handles this effect, and what the response would be on the simpler
models if strain rate effects would be regarded. A more detailed analysis of the dynamic
increase factor or the reinforcement could be conducted.
Regarding the 2DOF model, it has already been concluded that it can be a powerful model if a
good value of the impact response, Rm1, is provided. In order to get a good value of Rm1, further
studies on the local effect the drop weight has on the beam at impact is needed. Parameters such
as impact area, material models etc. has an influence on Rm1, and it needs more clarity how
large these effects are.
The theory behind the implementation of transformation factors in a spring mass system with
more than one degree of freedom needs to be refined. Higher accuracy of the models would
probably be attained if the transformation factors were implemented separately instead of
collecting them in the mass matrix.
The response during the first 2 ms is of interest, and more information could be analyzed in this
phase, for example higher detail regarding the crack propagation during this period, the order
of the cracks etc. As mentioned in Section 8.1, a camera able to capture more fps would be of
interest, as well as smaller time steps in the FE-models.
Using a bond-slip relation for the interaction between the reinforcement and the concrete in the
LS-DYNA model would be good, in order to see if the strain rate effects of the reinforcement
will behave differently. Is it possible to make the strain rate effects in the concrete and
reinforcement, respectively, work together?

-- 167 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
150
References
ADINA R & D Inc., 2015. ADINA System 9.0 Release Notes, Watertown. Available at:
http://www.adina.com/relnotes_90.pdf.
Andersson, J. & Antonsson, J., 2015. Design with Regard to Collision Impact Comparison
between 2DOF and FE Analysis for Collision Impact on Concrete Slabs. Chalmers
University of Technology.
Andersson, S. & Karlsson, H., 2012. Structural Response of Reinforced Concrete Beams
Subjected to Explosions.
Asplund, E. & Steckmest, D., 2014. Design with Regard to Collision Impact Comparison of
Response between a Simplified 2DOF system. Chalmers University of Technology.
Banthia, N. et al., 1989. Impact testing of concrete using a drop-weight impact machine.
Experimental Mechanics, 29(1), pp.63–69.
Barr, B. & Bouamrata, A., 1988. Development of a repeated dropweight impact testing
apparatus for studying fibre reinforced concrete materials. Composites, 19(6), pp.453–466.
Bathe, K.J., 2007. Conserving energy and momentum in nonlinear dynamics: A simple implicit
time integration scheme. Computers and Structures, 85(7-8), pp.437–445.
Biggs, J.M., 1964. Introduction to Structural Dynamics, McGraw-Hill, Inc.
Boverket, 2004. BBK 04 3rd ed., Karlskrona: Boverket.
Carlsson, M. & Kristensson, R., 2012. Structural Response with regard to explosions - Mode
superposition, damping and curtailment. Lund University.
CEN, 2004. EN 1992-1 Eurocode 2: Design of concrete structures - Part 1-1: General rules
and rules for buildings, Available at:
http://esearch.cen.eu/esearch/Details.aspx?id=5445849.
CEN, 2009a. SS-EN 12390-3:2009 Testing hardened concrete - Part 3: Compressive strength
of test specimens,
CEN, 2009b. SS-EN 12390-6:2009 Testing hardened concrete - Part 6: Tensile splitting
strength of test specimens,
Craig Jr, R.R. & Kurdila, A.J., 2006. Fundamentals of structural dynamics 2nd ed., New Jersey:
John Wiley & Sons, Inc.
Domone, P. & Illston, J., 2010. Construction Materials 4th ed., Abingdon: Spon Press.
Ekengren, B. et al., 2005. Dynamisk lastpåverkan - Referensbok, Karlstad: Räddningsverket.
Engström, B., 2011. Design and analysis of continuous beams and columns, Gothenburg.
Fib, 2013. Model code for concrete structures 2010. , p.434.
Fujikake, K., Li, B. & Soeun, S., 2009. Impact Response of Reinforced Concrete Beam and Its
Analytical Evaluation. Journal of Structural Engineering, (August 2009), pp.938–950.
GOM, 2016. ARAMIS. Available at: http://www.gom.com/metrology-systems/digital-image-
correlation.html.
Grassl, P. et al., 2013. CDPM2: A damage-plasticity approach to modelling the failure of
concrete. International Journal of Solids and Structures, 50(24), pp.3805–3816. Available
at: http://dx.doi.org/10.1016/j.ijsolstr.2013.07.008.

-- 168 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 151
Grassl, P., 2013. mat_concrete_damage_plastic_model.
Hao, Y., Hao, H. & Chen, G., 2014. Experimental investigation of the behaviour of spiral steel
fibre reinforced concrete beams subjected to drop-weight impact loads. Materials and
Structures. Available at: http://link.springer.com/10.1617/s11527-014-0502-5.
Jensen, B.C., 2013. Teknisk Ståbi 22nd ed., Copenhagen: Nyt Teknisk Forlag.
Johansson, A. & Fredberg, J., 2015. Structural Behaviour of Prestressed Concrete Beams
During Impact Loading. Chalmers University of Technology.
Johansson, M., 2014. B01-103, Beräkning av impulslastad konstruktion, Frågor och svar,
Available at:
https://www.msb.se/Upload/Insats_och_beredskap/Olycka_kris/Skyddsrum/Konstruktio
nsberakningar/B01. Samlingsdokument/B01-103 - Frågor och svar_140416.pdf [Accessed
April 13, 2016].
Johansson, M., 2000. Structural Behaviour in Concrete Frame Corners of Civil Defence
Shelters: Non-linear Finite Element Analyses and Experiments. Chalmers University of
Technology.
Johansson, M. & Laine, L., 2012. Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Del 3 – Kapacitet hos byggnader 2nd ed., Myndigheten för samhällsskydd och
beredskap.
LS-DYNA, 2014a. Keyword User ’ S Manual Volume Ii R7.1,
LS-DYNA, 2014b. LS-DYNA Keyword User ’ S Manual Volume I, Troy: LCTS. Available at:
http://www.dynasupport.com/manuals/ls-dyna-manuals/ls-dyna-manual-r-7.1-vol-i.
LS-DYNA, Time integration. Available at: http://www.dynasupport.com/tutorial/ls-dyna-
users-guide/time-integration.
LS-DYNA, Time step size. Available at: http://www.dynasupport.com/tutorial/ls-dyna-users-
guide/time-step-size.
Löfgren, I., Olesen, J.F. & Flansbjer, M., 2005. Application of WST-method for fracture testing
of fibre- reinforced concrete. , (0170).
Nyström, U., 2006. Design with regard to explosions. Chalmers University of Technology.
Available at: http://publications.lib.chalmers.se/records/fulltext/19630.pdf.
Plos, M., 2000. Finite element analyses of reinforced concrete structures, Gothenburg.
Rodríguez-Martínez, J.A., Rusinek, A. & Pesci, R., 2010. Experimental survey on the
behaviour of AISI 304 steel sheets subjected to perforation. Thin-Walled Structures,
48(12), pp.966–978.
Rots, J.G., 1988. Computational Modelling of Concrete Fracture. Delft University of
Technology.
Råde, L. & Westergren, B., 2004. Mathematics Handbook for Science and Engineering 5th ed.,
Lund: Studentlitteratur.
Soleimani, S.M. & Banthia, N., 2014. A Novel Drop Weight Impact Setup for Testing
Reinforced Concrete Beams. Experimental Techniques, 38, pp.72–79.
The Mathworks Inc., 2015. Matlab User’s Guide R2015b, Natick: The Mathworks Inc.
Available at: http://se.mathworks.com/help/releases/R2015b/pdf_doc/matlab/getstart.pdf.
Wu, M., Chen, Z. & Zhang, C., 2015. Determining the impact behavior of concrete beams

-- 169 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
152
through experimental testing and meso-scale simulation: I. Drop-weight tests. Engineering
Fracture Mechanics, 135, pp.94–112. Available at:
http://dx.doi.org/10.1016/j.engfracmech.2014.12.019.
Ågårdh, L., Bolling, K.G. & Laine, L., 1997. Fibre reinforced concrete beams loaded by
impact, Stockholm.

-- 170 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 A-1
Appendix A Trigonometric derivations
In order to get an expression without trigonometric functions, consider the unit circle, shown
in Figure A.1.
r=1
(1,0)
x
y
(0,1)
1–cos(
ntd)
ntd
sin(
ntd)
Figure A.1 Unit circle.
It is clear from the figure that, if mirroring the line around the x-axis as shown in Figure A.2,
the length of the vertical section,
h in the figure, is 2sin(
ntd).
r=1
(1,0)
x
y
(0,1) 
x
ntd	
h
Figure A.2 Mirroring the line around the x-axis.
When td approaches zero, which is the case with characteristic impulse,
x can according to
(Råde & Westergren 2004) be expressed as
 
r
h
x 8
2

		
(A.1)

-- 171 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
A-2
when looking at a segment of a circle and
x<<r.
Since
h=2sin(
ntd) and
x=1–cos(
ntd):
 	  	
2
sin
cos	1
2
d	n
d	n
t
t

 		
(A.2)
which is supported by Figure A.3.
a) Shape of the expressions b) Shape of the expressions when td is
approaching 0
Figure A.3 Response of the expressions in equation (A.2).
If the values of td are small:
d	n	d	n t	t	

	 	)	sin(	
(A.3)
Combining equations (A.2) and (A.3) gives
2
)	(
2
1
))	cos(	1 d	n	d	n t	t	

	 		
(A.4)
which is used in Section 3.3.3.

-- 172 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 B-1
Appendix B MathCad calculations

-- 173 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
B-2

-- 174 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 B-3

-- 175 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
B-4

-- 176 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 B-5

-- 177 of 231 --



-- 178 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 C-1
Appendix C Data from material experiments
Table C.1 Mechanical properties of concrete
Compressive strength test on PC specimens 28 days after casting. The concrete specimens
tested are 100 x 200 mm cylinders.
Test specimen no Maximum compressive force [kN] Mean compressive strength, fcm
[MPa]
1 299.1 38.1
2 315.5 40.2
3 347.2 44.2
Average 320.6 40.8
Compressive strength test on PC specimens 45 days after casting. The concrete specimens
tested are 100 x 200 mm cylinders.
Test specimen no Maximum compressive force [kN] Mean compressive strength, fcm
[MPa]
1 369.0 47.0
2 333.1 42.4
3 369.9 47.1
Average 357.3 45.5
Tensile strength test on PC specimens 45 days after casting. The concrete specimens tested
are 150 mm cubes.
Test specimen
no
Maximum tensile
force [kN]
Calculated stress, fct
[MPa]
Mean tensile strength,
fctm [MPa]
1 133.7 3.78 3.40
2 128.5 3.64 3.27
3 124.5 3.52 3.17
Average 128.9 3.65 3.28

-- 179 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
C-2
Fracture energy tests performed as prescribed in (Löfgren et al. 2005).
Test specimen no Accumulated fracture energy, Gf [Nm/m2]
1 120.3
2 87.0
3 132.4
Average 113.2
Figure C.1 Accumulated fracture energy measured in three different test specimens.
0
50
100
150
0.0 	0.5 	1.0 	1.5 	2.0
Dissipated energy,
 Gf [Nm/m
2]
CMOD [mm]
150-3-CTH
150-1-CTH
150-2-CTH

-- 180 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 C-3
Table C.2 Mechanical properties of reinforcement
Tensile strength tests on reinforcement. The reinforcement specimens tested were 293 mm
long, 6 mm diameter and the load speed was 166 N/s.
Test specimen
no
Yield strength, fy
[MPa]
Ultimate strength, fu
[MPa]
Estimated modulus of
elasticity, E [GPa]
2 606 661 213
3 606 660 214
4 607 661 212
5 616 677 216
6 610 661 214
7 612 666 217
Average 610 664.49 214
The values for modulus of elasticity in the table are approximations made by fitting a straight
line to a stress-strain curve obtained from testing the rebars and assuming that the smallest
diameter of the bar is 5,3 mm. This value is the lowest one obtained from diameter
measurements on a rebar from the same batch. The cross section of rebars is not regular and is
therefore difficult to estimate with high accuracy by measuring only diameter. The diameter is
most likely underestimated which causes the cross sectional area to be underestimated as well.
Modulus of elasticity extracted from a stress-strain curve has a magnitude inversely
proportional to the cross sectional area. Therefore the values in the table are considered to be
slightly overestimated and the true modulus of elasticity for the reinforcement bars is assumed
to be the one presented by the manufacturer, or 200 GPa. The table values are still within 10 %
accuracy of the true value, which is considered to be acceptable.

-- 181 of 231 --



-- 182 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-1
Appendix D Results
D.1 Results from 2DOF model
Figure D.1 Results from 2DOF model.

-- 183 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-2
Figure D.2 Results from 2DOF model, continued.

-- 184 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-3
D.2 Results from ADINA model
Figure D.3 Midpoint displacement over time of ADINA models.
Figure D.4 Displacement over length of ADINA model 1.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Dsiplacements [mm]
Time [ms]
ADINA model 1
ADINA model 2
ADINA model 2
(4500/100)
-1,0
-0,8
-0,6
-0,4
-0,2
0,0
0,2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
ADINA model 1
t=0.2ms
t=0.4ms
t=0.6ms
t=0.8ms
t=1.0ms
t=1.2ms
t=1.4ms
t=1.6ms
t=1.8ms
t=2.0ms

-- 185 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-4
Figure D.5 Displacement over length of ADINA model 2.
Figure D.6 Midpoint velocity over time for ADINA models.
-1,00
-0,80
-0,60
-0,40
-0,20
0,00
0,20
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
ADINA model 2
t=0.2ms
t=0.4ms
t=0.6ms
t=0.8ms
t=1.0ms
t=1.2ms
t=1.4ms
t=1.6ms
t=1.8ms
t=2.0ms
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Velocity [m/s]
Time [ms]
ADINA model 1
ADINA model 2
ADINA rod model
(4500/100)

-- 186 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-5
Figure D.7 Drop weight velocity over time for ADINA models.
Figure D.8 Midpoint acceleration over time for ADINA models.
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Velocity [m/s]
Time [ms]
ADINA model 2
ADINA model 1
ADINA rod
(4500)
-200 000
0
200 000
400 000
600 000
800 000
1 000 000
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Acceleration [m/s2]
Time [ms]
ADINA model 1
(4500)
ADINA model 2
(4500/100)
ADINA model 2
(18000/100)

-- 187 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-6
Figure D.9 Reaction force/Accumulated impulse from the drop weight in the ADINA models.
Figure D.10 Reaction force from the supports in the ADINA models.
In ADINA model 2, a discussion can be made which material model that can be used for the
drop weight. Either a purely elastic behaviour is assumed, or a bilinear response with a certain
number of the yield stress, after which the material shows ideal plastic behaviour. A study of
this is made, shown in Figure D.11.
0.00
0.02
0.04
0.06
0.08
0.10
0.12
0.14
0
200
400
600
800
1 000
1 200
1 400
0 	5 	10 	15 	20
Accumulated impulse [kNs]
Reaction force [kN]
Time [ms]
ADINA model 1
ADINA model 2 (4500)
ADINA model 2
ADINA model 1 (Imp.)
ADINA model 2 (4500)
(Imp.)
ADINA model 2 (Imp.)
-50
-30
-10
10
30
50
70
0 	5 	10 	15 	20 	25 	30 	35 	40 	45	
Reaction force [kN]
Time [ms]
ADINA model 1
ADINA model 2

-- 188 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-7
Figure D.11 Comparison elastic/bilinear material response of the drop weight.
As can be seen, the impulse is similar between the elastic and bilinear material response, when
the yield strength is 400 MPa. Hence, for simplicity in the model, an elastic material model is
used.
0
0,02
0,04
0,06
0,08
0,1
0,12
0,14
0,16
0
200
400
600
800
1 000
1 200
1 400
1 600
0 	10 	20 	30 	40 	50
Accumulated impulse [kNs]
Reaction force [kN]
Time [ms]
Elastic
Bilinear fy=400
Bilinear fy=80
Elastic
Bilinear fy=400
Bilinear fy=80

-- 189 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-8
D.3 Results from LS-DYNA model
Figure D.12 Midpoint displacement over time of LS-DYNA models.
Figure D.13 Support displacement over time of LS-DYNA models
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Dsiplacements [mm]
Time [ms]
LS-DYNA
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacement over support[mm]
Time [ms]
LS-DYNA

-- 190 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-9
Figure D.14 Displacement over length for LS-DYNA model, adjusted for jump at supports-
Figure D.15 Displacement over length for LS-DYNA model with no supports,
-1
-0,8
-0,6
-0,4
-0,2
0
0,2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
LS-DYNA (adjusted for jump)
t=0.2ms
t=0.4ms
t=0.6ms
t=0.8ms
t=1.0ms
t=1.2ms
t=1.4ms
t=1.6ms
t=1.8ms
t=2.0ms
-1,0
-0,8
-0,6
-0,4
-0,2
0,0
0,2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
LS-DYNA (No supports)
t=0.2ms
t=0.4ms
t=0.6ms
t=0.8ms
t=1.0ms
t=1.2ms
t=1.4ms
t=1.6ms
t=1.8ms
t=2.0ms

-- 191 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-10
Figure D.16 Midpoint velocity in LS-DYNA model.
Figure D.17 Velocity of rod in LS-DYNA model.
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Velocity [m/s]
Time [ms]
LS-DYNA
-4
-2
0
2
4
6
8
10
12
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Velocity [m/s]
Time [ms]
LS-DYNA

-- 192 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-11
Figure D.18 Acceleration of the midpoint in LS-DYNA model.
Figure D.19 Reaction force/Accumulated impulse for LS-DYNA model.
-30 000
-20 000
-10 000
0
10 000
20 000
30 000
40 000
50 000
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Acceleration [m/s2]
Time [ms]
LS-DYNA
0,00
0,02
0,04
0,06
0,08
0,10
0,12
0,14
0
200
400
600
800
1 000
1 200
1 400
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Accumulated impulse [kNs]
Reaction force [kN]
Time [ms]
LS-DYNA
LS-DYNA (Imp.)

-- 193 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-12
Figure D.20 Reaction force of support for LS-DYNA model during the first 10 ms.
-10
10
30
50
70
90
110
130
150
170
0 	2 	4 	6 	8 	10 	12 	14 	16 	18
Reaction force [kN]
Time [ms]
LS-DYNA

-- 194 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-13
D.4 Results from experiment
D.4.1 Results
Figure D.21 Midpoint displacement over time from experiment.
-10
-5
0
5
10
15
20
25
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacements [mm]
Time [ms]
RPC4
RPC5
RPC6
RPC2
RPC1
RPC3

-- 195 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-14
Figure D.22 Displacement over length of RPC2.
Figure D.23 Midpoint velocity of RPC2.
-1,0
-0,8
-0,6
-0,4
-0,2
0,0
0,2
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Relative displacement [
-]
Length coordinate [mm]
RPC2 (adjusted for jump)
t=0.2ms
t=0.4ms
t=0.6ms
t=0.8ms
t=1.0ms
t=1.2ms
t=1.4ms
t=1.6ms
t=1.8ms
t=2.0ms
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Velocity [m/s]
Time [ms]
Velocity of the mid point (experimental results only)
RPC1
RPC2
RPC3
RPC4
RPC5
RPC6

-- 196 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-15
Figure D.24 Drop weight velocity of the beams in the experiment.
D.4.2 Velocity study
In order to get the initial parameters as close to the experiment as possible, certain values has
to be derived from the digital image correlation. By defining a point on the drop weight before
the impact, the velocity at different times can be read. This approach has some errors, due to a
scatter in the information of the digital image correlation. This can be made in a better way by
having a clearly defined point marked on the drop weight. In order to get a proper value for this
test series, however, the velocity from the drop weight is plotted over time, and a trend line is
created in order to get a more precise value at the time of impact.
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
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Velocity [m/s]
Time [ms]
RPC1 	RPC2
RPC3 	RPC4
RPC5 	RPC6

-- 197 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-16
Figure D.25 Part of the experiment showing the drop weight and the beam just before impact
when digital image correlation has been made.
Figure D.26 Derivation of a value for the velocity at impact in the experiment.
-10800
-10600
-10400
-10200
-10000
-9800
-9600
-9400
-9200
-9000
1 	2 	3 	4 	5 	6
Velocity [mm/s]
Time [s]
Velocity of the drop weight (RPC4)
Velocity of
drop weight
Time of
impact

-- 198 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-17
D.5 Crack pattern/displacement shapes during the first 2 ms
a) b)
Figure D.27 Response after 0.2 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
a) b)
Figure D.28 Response after 0.4 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).

-- 199 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-18
a) b)
Figure D.29 Response after 0.6 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
a) b)
Figure D.30 Response after 0.8 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
a) b)
Figure D.31 Response after 1.0 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).

-- 200 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 D-19
a) b)
Figure D.32 Response after 1.2 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
a) b)
Figure D.33 Response after 1.4 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
a) b)
Figure D.34 Response after 1.6 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).

-- 201 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
D-20
a) b)
Figure D.35 Response after 1.8 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).
a) b)
Figure D.36 Response after 2.0 ms: a) Crack pattern for RPC2 and LS-DYNA, respectively
and b) Displacement shape for RPC2 (black) and LS-DYNA (grey).

-- 202 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 E-1
Appendix E Matlab script for 2DOF model
E.1 Main algorithm
%-------------------------------------------------------------
% Drop weight impact loading
% Main algorithm for SDOF and 2DOF models
% Authors: Erla Sara Svavarsdóttir & Jimmy Lovén
% Last modified: 01.03.2016 by Erla Sara
% Chalmers University of Technology
% Department of structural engineering
%-------------------------------------------------------------
clc
clear all
close all
%% Input values
ttot=45*10^-3; %[s] Total time
dt=1*10^-5; %[s] Selected time step
Rm1=[50e3 50e3]; %[N] Comp. Tens.
Rm2=[10.3798e3 10.3798e3];%[N] Comp. Tens.
umaxb=[50 -50]; %[m] Maximum displacement at failure for beam
umaxd=[60 -60]; %[m] Maximum disp. at failure for drop weight
% Initial state of the system
u01=0; %[m] Initial displacement of the drop weight
v01=10.35; %[m/s] Initial velocity of the drop weight
u02=0; %[m] Initial displacement of the beam
v02=0; %[m/s] Initial velocity of the beam
f01=0; %[N] Initial force acting on the drop weight
f02=0; %[N] Initial force acting on the beam
% Concrete beam
rho_c=2400; %[kg/m3] Unit weight of reinforced concrete
l_c=1; %[m] Length of concrete beam
h_c=0.1; %[m] Height of concrete beam
b_c=0.1; %[m] Width of concrete beam
d_rt=6; %[mm] Diameter of reinforcement in tensile area
n_rt=2; %[-] Number of reinforcement bars in tensile area
d_rc=6; %[mm] Diameter of reinforcement in compression area
n_rc=2; %[-] Number of reinforcement bars in compression area
cover=0.02; %[m] Distance to centre of reinforcement
E_c=34.7*10^9; %[Pa] Modulus of elasticity for concrete
% Drop weight
rho_s=7900; %[kg/m3] Unit weight of drop weight material
r_s=0.040; %[m] Radius of drop weight
L_s=0.258; %[m] Length of drop weight

-- 203 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
E-2
E_r=200*10^9; %[Pa] Modulus of elasticity for reinforcing steel
E_s=200*10^9; %[Pa] Modulus of elasticity for drop weight material
% Transformation factors
kmfel1=0.5;
kmfpl1=(2/3); % Theoretical value, see report
kmfpl1=1.0; % Value in practice, see report
kmfel2=0.486;
kmfpl2=(1/3);
trans=[kmfpl1 kmfpl1 kmfpl2 kmfpl2]; % Plastic response
%% Calculated values
alpha=E_r/E_c;
m1=10.093; %[kg] Mass of falling object
m2=rho_c*l_c*h_c*b_c; %[kg] Mass of beam subjected to loading
M=[m1 0;0 m2]; % Mass matrix
Mtr=[m1*trans(1) 0; % Mass matrix with elastic transf. factors
0 m2*trans(3)];
A_c=h_c*b_c; %[m^2] Cross sectional area of the beam
A_rt=(d_rt/2000)^2*pi*n_rt; %[m^2] Cross sectional area of tensile bars
A_rc=(d_rc/2000)^2*pi*n_rc;%[m^2] Cross sectional area of comp. bars
A_r=A_rt+A_rc; %[m^2] Total cross sectional area of reinf.
d=h_c-cover;
A_s=r_s^2*pi; %[m^2] Cross sectional area of drop weight
I2I=b_c*(h_c^3)/12; %[m^4] Moment of inertia for beam in state I
a=alpha*A_rt/b_c;
b=2*d*a;
x=-a+(a^2+b)^0.5;
I2II=b_c*x^3/3+alpha*A_rt*(d-x)^2; %[m^4] I for beam in state II
E_cII=(I2II/I2I)*E_c;
%% Stiffness values
k2c=(48*E_cII*I2I)/(l_c^3); % Stiffness in compression for beam
k2t=0;
k1c=E_s*A_s/L_s; % Stiffness in compression for dw
k1t=0;
K=[k1c -k1c;-k1c k1c+k2c]; % Stiffness matrix for compression
%% Eigenfrequencies
lambdaS=eig(k2c,m2*kmfel2);
w1=sqrt(lambdaS);
lambda2=eig(K,Mtr);
w2=sqrt(min(lambda2));
% Create a time vector
tcritS=2/w1;

-- 204 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 E-3
tcrit2=2/w2;
tcrit=max(tcritS,tcrit2); % Select a critical timestep for both models
if dt>tcrit
disp(['The time step you have selected is too large. ',...
'Select a time step that is smaller than ',num2str(tcrit),'s'])
return
end
t=[0:dt:ttot]';
if t(end)~=ttot
t=[t;ttot];
end
%% 2DOF system
% Input values for 2DOF system solver
M=[m1 0;0 m2]; % Mass matrix
kset=[k1c k1t k2c k2t]; % Stiffness set, c=compression, t=tension
u0=[u01;u02]; % Initial displacement vector
v0=[v01;v02]; % Initial velocity vector
f0=[f01;f02]; % Initial force vector
RM=[Rm1;Rm2]; % Resisting force at elastic-plastic limit
urd=[umaxd;umaxb]; % Maximum deflections, failure limit
%CDM solver for 2DOF
[u2,v2,a2,R2,We2,Wi2,Im,IR,Ek]=CDM2D(M,kset,trans,u0,v0,f0,t,RM,urd);
%% Results - plot files
% Plot function for the 2DOF system
plot2DOF(t,u2,R2,v2,a2,Im,IR,We2,Wi2,Ek)

-- 205 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
E-4
E.2 Central Difference Method Solver
function[u,v,a,R,We,Wi,Im,IR,Ek]=CDM2D(M,kset,trans,u0,v0,f0,t,RM,urd,C)
%-------------------------------------------------------------
% Authors: Erla Sara Svavarsdóttir & Jimmy Lovén
% Last modified: 01.03.2016 by Erla Sara
% Chalmers University of Technology
% Department of structural engineering
%-------------------------------------------------------------
% Allow for no damping input
if nargin == 9
C=[0 0;0 0];
end
% Elastic stiffness
kel1c=kset(1);
kel1t=kset(2);
kel2c=kset(3);
kel2t=kset(4);
% Initial stiffness matric assuming compression in both springs
K=[kset(1) -kset(1);-kset(1) kset(1)+kset(3)];
% Masses
m1=M(1,1);
m2=M(2,2);
% Transformed mass matrix of the system
% Limits for elastic response
uel1=RM(1,:)./[kel1c kel1t];
uel2=RM(2,:)./[kel2c kel2t];
uel=[uel1;uel2];
% Length of time step
dt=t(2)-t(1);
% Create vectors and variables to save iteration results
u=zeros(length(t),2); % Displacements
v=u; % Velocity
a=u; % Acceleration
R=u; % Internal resisting force
uplp=u; % Account for positive plastic deformation
upln=u; % Account for negative plastic deformation
We=u; % External work

-- 206 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 E-5
Wi=u; % Internal work
Im=u; % Impulse from mass
IR=u; % Impulse from internal resisting force
Ek=u; % Kinetic Energy
uk=u; % Log the displacement of springs
% First iteration step
a0=Mt\(f0-C*v0-K*u0); % Initial acceleration
us=u0-dt.*v0+((dt)^2/2).*a0; % Initial displacement
ui=[0;0];
% Save first values
u(1,:)=ui';
R(1,:)=[0 0];
a(1,:)=a0';
v(1,:)=v0';
% Other iteration steps
for i=2:length(t)-1
% Log individual spring deformation
umax=[max(uk(:,1)) max(uk(:,2))];
umin=[min(uk(:,1)) min(uk(:,2))];
uk(i,:)=[ui(1)-ui(2) ui(2)];
% Calculate plastic deformation and update the mass matrix
if uk(i,1)>uel(1,1) && uk(i,1)>umax(1)
dupl1p=uk(i,1)-max(umax(1),uel(1,1));
mn1=m1*trans(2);
elseif uk(i,1)<uel(1,2) && uk(i,1)<umin(1)
dupl1n=uk(i,1)-min(umin(1),uel(1,2));
mn1=m1*trans(2);
else
dupl1p=0;
dupl1n=0;
mn1=m1*trans(1);
end
if uk(i,2)>uel(2,1) && uk(i,2)>umax(2)
dupl2p=uk(i,2)-max(umax(2),uel(2,1));
mn2=m2*trans(4);
elseif uk(i,2)<uel(2,2) && uk(i,2)<umin(2)
dupl2n=uk(i,2)-min(umin(2),uel(2,2));
mn2=m2*trans(4);
else
dupl2p=0;
dupl2n=0;
mn2=m2*trans(3);
end
Mt=[mn1 0;0 mn2]; % Transformed mass matrix

-- 207 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
E-6
% Plastic deformation in step i
uplp(i,1)=uplp(i-1,1)+dupl1p;
upln(i,1)=upln(i-1,1)+dupl1n;
uplp(i,2)=uplp(i-1,2)+dupl2p;
upln(i,2)=upln(i-1,2)+dupl2n;
% Calculate internal resisting forces
if upln(i,1)<urd(1,2) || uplp(i,1)>urd(1,1)
R(i,1)=0;
elseif uk(i,1)<0
R(i,1)=kel1t*(uk(i,1)-upln(i,1));
else
R(i,1)=max(0,kel1c*(uk(i,1)-uplp(i,1)));
end
if upln(i,2)<urd(2,2) || uplp(i,2)>urd(2,1)
R(i,2)=0;
elseif uk(i,2)<0
R(i,2)=kel2t*(uk(i,2)-upln(i,2));
else
R(i,2)=kel2c*(uk(i,2)-uplp(i,2));
end
% Create a "fake K matrix" to use in next step
if uk(i,1)==0
k1=kel1c;
elseif uplp(i,1)>urd(1,1) || upln(i,1)<urd(1,2)
k1=0;
else
k1=R(i,1)/uk(i,1);
end
if uk(i,2)==0
k2=kel2c;
elseif uplp(i,2)>urd(2,1) || upln(i,2)<urd(2,2)
k2=0;
else
k2=R(i,2)/uk(i,2);
end
K=[k1 -k1;-k1 k1+k2];
% Calculate the deformation vector for step i+1
unew=(Mt./(dt^2)+C./(2*dt))\(f0-(K-(2/dt^2).*Mt)*ui-...
((Mt./(dt^2)-C./(2*dt))*us));
% Failure criteria
if unew(2)>urd(2)
disp('The beam has failed.')
break

-- 208 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 E-7
end
% Update vectors and save information
v(i,:)=((unew-us)./(2*dt))'; % Velocity
a(i,:)=((unew-2*ui+us)./(dt^2))'; % Acceleration
dWi=(R(i,:)+R(i-1,:)).*(ui'-us')*1/2; % Change in internal work
Wi(i,:)=Wi(i-1,:)+dWi; % Total internal work
dWe=(R(i,1)+R(i-1,1))*(ui(2)-us(2))/2; % Change in external work
We(i,2)=We(i-1,2)+dWe; % Total external work
Im(i,:)=(Mt*v(i,:)')'; % Mass impulse
IR(i,:)=IR(i-1,:)+(R(i,:)+R(i-1,:))*dt/2; % R impulse
Ek(i,:)=(1/2)*(Mt*v(i,:).^2')'; % Kinetic energy
% Prepare for next loop
u(i+1,:)=unew';
us=ui;
ui=unew;
end
end
E.3 Plot algorithm
function[]=plot2DOF(t,u,R,v,a,Im,IR,We,Wi,Ek)
%-------------------------------------------------------------
% Authors: Erla Sara Svavarsdóttir & Jimmy Lovén
% Last modified: 22.02.2016 by Erla Sara
% Chalmers University of Technology
% Department of structural engineering
%-------------------------------------------------------------
figure(1)
plot(t*1000,u(:,1)*1000,'LineWidth',1.5)
hold on
plot(t*1000,u(:,2)*1000,'-.','LineWidth',1.5)
title('u(t)')
xlabel('Time [ms]')
ylabel('Displacements [mm]')
plot_settings
legend('Body 1 (Drop weight)','Body 2 (Beam)','Location','SouthEast')
figure(2)
plot(t*1000,R(:,1)/1000,'LineWidth',1.5)
hold on
plot(t*1000,R(:,2)/1000,'-.','LineWidth',1.5)
title('R(t)')
xlabel('Time [ms]')
ylabel('Reaction force [kN]')
plot_settings
legend('Body 1 (Drop weight)','Body 2 (Beam)','Location','NorthEast')

-- 209 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
E-8
figure(3)
plot(t*1000,v(:,1),'LineWidth',1.5)
hold on
plot(t*1000,v(:,2),'-.','LineWidth',1.5)
title('Velocity')
xlabel('Time [ms]')
ylabel('Velocity [m/s]')
plot_settings
legend('Body 1 (Drop weight)','Body 2 (Beam)','Location','NorthEast')
figure(4)
plot(t*1000,a(:,1),'LineWidth',1.5)
hold on
plot(t*1000,a(:,2),'-.','LineWidth',1.5)
title('Acceleration')
xlabel('Time [ms]')
ylabel('Acceleration [m/s^2]')
plot_settings
legend('Body 1 (Drop weight)','Body 2 (Beam)','Location','NorthEast')
figure(5)
plot(u(:,1)*1000,R(:,1)/1000,'LineWidth',1.5)
hold on
plot(u(:,1)*1000,R(:,2)/1000,'-.','LineWidth',1.5)
title('R(u_1)')
xlabel('Displacements [mm]')
ylabel('Load [kN]')
plot_settings
legend('Body 1 (Drop weight)','Body 2 (Beam)','Location','NorthEast')
figure(6)
plot(u(:,2)*1000,R(:,1)/1000,'LineWidth',1.5)
hold on
plot(u(:,2)*1000,R(:,2)/1000,'-.','LineWidth',1.5)
title('R(u_2)')
xlabel('Displacements [mm]')
ylabel('Load [kN]')
plot_settings
legend('Body 1 (Drop weight)','Body 2 (Beam)','Location','NorthEast')
figure(7)
plot(t*1000,Im(:,1)/1000,'LineWidth',1.5)
hold on
plot(t*1000,IR(:,1)/1000,'-.','LineWidth',1.5)
title('Impulse (Body 1)')
xlabel('Time [ms]')
ylabel('Impulse [kNs]')
plot_settings
legend('I(m_1)','I(R_1)','Location','East')

-- 210 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 E-9
figure(8)
plot(t*1000,Im(:,2)/1000,'LineWidth',1.5)
hold on
plot(t*1000,IR(:,2)/1000,'-.','LineWidth',1.5)
title('Impulse (Body 2)')
xlabel('Time [ms]')
ylabel('Impulse [kNs]')
plot_settings
legend('I(m_2)','I(R_2)','Location','East')
figure(9)
plot(t*1000,We(:,1),'--','LineWidth',1.5)
hold on
plot(t*1000,Wi(:,1),'-.','LineWidth',1.5)
plot(t*1000,Ek(:,1),'LineWidth',1.5)
title('W(t) (Body 1)')
xlabel('Time [ms]')
ylabel('Work [J]')
plot_settings
legend('W_e','W_i','E_k','Location','East')
figure(10)
plot(t*1000,We(:,2),'LineWidth',1.5)
hold on
plot(t*1000,Wi(:,2),'-.','LineWidth',1.5)
plot(t*1000,Ek(:,2),'--','LineWidth',1.5)
title('W(t) (Body 2)')
xlabel('Time [ms]')
ylabel('Work [J]')
plot_settings
legend('W_e','W_i','E_k','Location','East')
figure(11)
plot(u(:,1)*1000,We(:,1),'LineWidth',1.5)
hold on
plot(u(:,1)*1000,Wi(:,1),'-.','LineWidth',1.5)
plot(u(:,1)*1000,Ek(:,1),'--','LineWidth',1.5)
title('W(u) (Body 1)')
xlabel('Displacements [mm]')
ylabel('Work [J]')
plot_settings
legend('W_e','W_i','E_k','Location','East')
figure(12)
plot(u(:,2)*1000,We(:,2),'LineWidth',1.5)
hold on
plot(u(:,2)*1000,Wi(:,2),'-.','LineWidth',1.5)
plot(u(:,2)*1000,Ek(:,2),'--','LineWidth',1.5)
title('W(u) (Body 2)')

-- 211 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
E-10
xlabel('Displacements [mm]')
ylabel('Work [J]')
plot_settings
legend('W_e','W_i','E_k','Location','East')
end

-- 212 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 F-1
Appendix F Script files from ADINA
F.1 ADINA IN command file, ADINA model 1
*** Geometry ***
COORDINATES POINT SYSTEM=0
@CLEAR
* x y z sys
1 0.0 0.0 0.0 0
2 0.5 0.0 0.0 0
3 1.0 0.0 0.0 0
4 1.0 1.0 0.0 0
5 0.5 0.5 0.0 0
@
*
LINE STRAIGHT NAME=1 P1=1 P2=2
LINE STRAIGHT NAME=2 P1=2 P2=3
*
CROSS-SECTIO RECTANGULAR NAME=1
WIDTH=0.10,
HEIGHT=0.10 SC=0.0 TC=0.0 TORFAC=1.0
SSHEARF=0.0,
TSHEARF=0.0 ISHEAR=NO SQUARE=YES
*
*** Mass ***
MASSES POINTS
@CLEAR
5 0.0 10.093 0.0 0.0 0.0 0.0
@
*
INITIAL-COND NAME=VELOCITY INITIALS=NO
@CLEAR
'Y-VELOCITY' -10.35
@
*
SET-INITCOND POINTS CONDITIO=VELOCITY
@CLEAR
5 'VELOCITY'
@
*
*** Spring ***
PROPERTY NONLINEAR-K NAME=1 RUPTURE=NO
@CLEAR
-1.0 -3.8965E9
0.0 0.0
1 0.0
*
PROPERTYSET NAME=2 K=0.0 M=0.0,
C=0.0 NONLINEA=YES NK=1 NM=0 NC=0
*
EGROUP SPRING NAME=1 PROPERTY=2
RESULTS=FORCES NONLINEA=NO,
SKEWSYST=NO OPTION=NONE
DESCRIPT='NONE' PRINT=DEFAULT,
SAVE=DEFAULT TBIRTH=0.0
TDEATH=0.0,
6DOF-SPR=NO
*
SPRING POINTS
@CLEAR
3 2 2 5 2 2 DEFAULT DEFAULT 0.0 0.0
@
*
*** Boundary conditions ***
FIXITY NAME=TXYZRXY
@CLEAR
'X-TRANSLATION'
'Y-TRANSLATION'
'Z-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'OVALIZATION'
@
*
FIXITY NAME=TYZRXY
@CLEAR
'Y-TRANSLATION'
'Z-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'OVALIZATION'
@
*
FIXITY NAME=TXZRXYZ
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
1 'TXYZRXY'
3 'TYZRXY'
4 'ALL'
5 'TXZRXYZ'
@
*
*** Material properties ***
MATERIAL PLASTIC-BILINEAR NAME=1
HARDENIN=ISOTROPIC,
E=5.996E+09 NU=0.2
YIELD=1.557E+07 ET=0.0,
EPA=0.0 STRAINRA=0 DENSITY=2400.0
ALPHA=0.0 TREF=0.0 DEPENDEN=NO,
TRANSITI=0.0001 EP-STRAI=0.0
BCURVE=0,
BVALUE=0.0 XM-INF=0.0 XM0=0.0
ETA=0.0 MDESCRIP='Elastoplastic
equivalent reinf. beam'
*
EGROUP BEAM NAME=2 SUBTYPE=TWO-D
DISPLACE=DEFAULT MATERIAL=1 RINT=3,
SINT=DEFAULT TINT=DEFAULT
RESULTS=STRESSES INITIALS=NONE,
CMASS=DEFAULT RIGIDEND=NONE
MOMENT-C=NO RIGIDITY=1,
MULTIPLY=1000000.0 RUPTURE=ADINA
OPTION=NONE,
BOLT-TOL=0.0 DESCRIPT='NONE'
SECTION=1,

-- 213 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
F-2
PRINT=DEFAULT SAVE=DEFAULT
TBIRTH=0.0,
TDEATH=0.0 SPOINT=2 BOLTFORC=0.0,
BOLTNCUR=0 TMC-MATE=1 BOLT-NUM=0
BOLT-LOA=0.0,
WARP=NO ENDRELEA=ACCURATE
*
*** Meshing etc ***
SUBDIVIDE LINE NAME=1 MODE=DIVISIONS
NDIV=30 RATIO=1.0,
PROGRESS=GEOMETRIC CBIAS=NO
@CLEAR
1
2
@
*
GLINE NODES=2 AUXPOINT=4 NCOINCID=ENDS
NCENDS=12,
NCTOLERA=1.0E-05 SUBSTRUC=0
GROUP=2 MIDNODES=STRAIGHT,
XO=0.0 YO=0.0 ZO=0.0,
XYZOSYST=SKEW
@CLEAR
1
2
@
*
*** Time steps etc ***
TIMESTEP NAME=DEFAULT
@CLEAR
4500 0.00001
@
*
*** Analysis ***
MASTER ANALYSIS=DYNAMIC-DIRECT-
INTEGRATION MODEX=EXECUTE,
TSTART=0.0 IDOF=0 OVALIZAT=NONE
FLUIDPOT=AUTOMATIC,
CYCLICPA=1 IPOSIT=STOP
REACTION=YES INITIALS=NO
FSINTERA=NO,
IRINT=DEFAULT CMASS=NO
SHELLNDO=AUTOMATIC AUTOMATI=OFF,
SOLVER=SPARSE CONTACT-
=CONSTRAINT-FUNCTION,
TRELEASE=0.0 RESTART-=NO
FRACTURE=NO LOAD-CAS=NO,
LOAD-PEN=NO SINGULAR=YES
STIFFNES=0.0001,
MAP-OUTP=NONE MAP-FORM=NO NODAL-
DE='' POROUS-C=NO ADAPTIVE=0,
ZOOM-LAB=1 AXIS-CYC=0 PERIODIC=NO
VECTOR-S=GEOMETRY EPSI-FIR=NO,
STABILIZ=NO STABFACT=1.0E-10
RESULTS=PORTHOLE,
FEFCORR=NO BOLTSTEP=1 EXTEND-
S=YES CONVERT-=NO DEGEN=YES,
TMC-MODE=NO ENSIGHT-=NO IRSTEPS=1
INITIALT=NO TEMP-INT=NO,
ESINTERA=NO OP2GEOM=NO INSITU-
D=NO OP2ERCS=ELEMENT 2DPL-AX=YZ-Z
*
ANALYSIS DYNAMIC-DIRECT-INTEGRATION
METHOD=BATHE,
DELTA=0.5 ALPHA=0.25 THETA=1.4
TIMESTEP=USER NCRSTEP=1,
CRSTEP=0.0 MASS-SCA=1.0
DTMIN1=0.0 DTMIN2=0.0,
GAMMA=0.5 MIDLOAD=TIMEFUNCTION
GAMAP=0.54 BATHE-DE=0.5,
BATHE-AL=0.25
*
*ANALYSIS DYNAMIC-DIRECT-INTEGRATION
METHOD=NEWMARK,
* DELTA=0.5 ALPHA=0.25 THETA=1.4
TIMESTEP=USER NCRSTEP=1,
* CRSTEP=0.0 MASS-SCA=1.0
DTMIN1=0.0 DTMIN2=0.0,
* GAMMA=0.5 MIDLOAD=TIMEFUNCTION
GAMAP=0.54 BATHE-DE=0.5,
* BATHE-AL=0.25
*

-- 214 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 F-3
F.2 ADINA IN command file, ADINA model 2
*** Geometry
COORDINATES POINT SYSTEM=0
@CLEAR
* x y z sys
1 0.0 0.0 0.0 0
2 0.5 0.0 0.0 0
3 1.0 0.0 0.0 0
4 1.0 1.0 0.0 0
5 0.5 0.5 0.0 0
6 0.5 0.758 0.0 0
@
*
LINE STRAIGHT NAME=1 P1=1 P2=2
LINE STRAIGHT NAME=2 P1=2 P2=3
LINE STRAIGHT NAME=3 P1=5 P2=6
*
CROSS-SECTIO RECTANGULAR NAME=1
WIDTH=0.10,
HEIGHT=0.10 SC=0.0 TC=0.0 TORFAC=1.0
SSHEARF=0.0,
TSHEARF=0.0 ISHEAR=NO SQUARE=YES
*
CROSS-SECTIO PIPE NAME=2 DIAMETER=0.08
THICKNESS=0.04 SC=0.0,
TC=0.0 TORFAC=1.0 SSHEARF=0.0
TSHEARF=0.0 SOLID=NO
*
*** Spring
PROPERTY NONLINEAR-K NAME=1 RUPTURE=NO
@CLEAR
-1.0 -1.2E15
0.0 0.0
1 0.0
*
PROPERTYSET NAME=2 K=0.0 M=0.0,
C=0.0 NONLINEA=YES NK=1 NM=0 NC=0
*
EGROUP SPRING NAME=1 PROPERTY=2
RESULTS=FORCES NONLINEA=NO,
SKEWSYST=NO OPTION=NONE
DESCRIPT='NONE' PRINT=DEFAULT,
SAVE=DEFAULT TBIRTH=0.0
TDEATH=0.0,
6DOF-SPR=NO
*
SPRING POINTS
@CLEAR
3 2 2 5 2 2 DEFAULT DEFAULT 0.0 0.0
@
*
*** Boundary conditions
FIXITY NAME=TXYZRXY
@CLEAR
'X-TRANSLATION'
'Y-TRANSLATION'
'Z-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'OVALIZATION'
@
*
FIXITY NAME=TYZRXY
@CLEAR
'Y-TRANSLATION'
'Z-TRANSLATION'
'X-ROTATION'
'Y-ROTATION'
'OVALIZATION'
@
*
FIXITY NAME=TXZRXYZ
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
1 'TXYZRXY'
3 'TYZRXY'
4 'ALL'
5 'TXZRXYZ'
@
*
*** Material properties
MATERIAL PLASTIC-BILINEAR NAME=1
HARDENIN=ISOTROPIC,
E=5.996E+09 NU=0.2
YIELD=1.5746E+07 ET=0.0,
EPA=0.0 STRAINRA=0 DENSITY=2400.0
ALPHA=0.0 TREF=0.0 DEPENDEN=NO,
TRANSITI=0.0001 EP-STRAI=0.0
BCURVE=0,
BVALUE=0.0 XM-INF=0.0 XM0=0.0
ETA=0.0 MDESCRIP='Elastoplastic
equivalent reinf. beam'
*
MATERIAL ELASTIC NAME=2 E=2.00E+11
NU=0.3 DENSITY=7900 ALPHA=0.0
MDESCRIP='Steel'
*
*MATERIAL PLASTIC-BILINEAR NAME=2
HARDENIN=ISOTROPIC,
* E=2.00E+11 NU=0.3 YIELD=4.0E+8
ET=0.0,
* EPA=0.0 STRAINRA=0
DENSITY=7900.0 ALPHA=0.0 TREF=0.0
DEPENDEN=NO,
* TRANSITI=0.0001 EP-STRAI=0.0
BCURVE=0,
* BVALUE=0.0 XM-INF=0.0 XM0=0.0
ETA=0.0 MDESCRIP='Bilinear Steel'
*
EGROUP BEAM NAME=2 SUBTYPE=TWO-D
DISPLACE=DEFAULT MATERIAL=1 RINT=3,
SINT=DEFAULT TINT=DEFAULT
RESULTS=STRESSES INITIALS=NONE,
CMASS=DEFAULT RIGIDEND=NONE
MOMENT-C=NO RIGIDITY=1,
MULTIPLY=1000000.0 RUPTURE=ADINA
OPTION=NONE,
BOLT-TOL=0.0 DESCRIPT='NONE'
SECTION=1,

-- 215 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
F-4
PRINT=DEFAULT SAVE=DEFAULT
TBIRTH=0.0,
TDEATH=0.0 SPOINT=2 BOLTFORC=0.0,
BOLTNCUR=0 TMC-MATE=1 BOLT-NUM=0
BOLT-LOA=0.0,
WARP=NO ENDRELEA=ACCURATE
*
EGROUP BEAM NAME=3 SUBTYPE=TWO-D
DISPLACE=DEFAULT MATERIAL=2 RINT=3,
SINT=DEFAULT TINT=DEFAULT
RESULTS=STRESSES INITIALS=NONE,
CMASS=DEFAULT RIGIDEND=NONE
MOMENT-C=NO RIGIDITY=1,
MULTIPLY=1000000.0 RUPTURE=ADINA
OPTION=NONE,
BOLT-TOL=0.0 DESCRIPT='NONE'
SECTION=2,
PRINT=DEFAULT SAVE=DEFAULT
TBIRTH=0.0,
TDEATH=0.0 SPOINT=2 BOLTFORC=0.0,
BOLTNCUR=0 TMC-MATE=1 BOLT-NUM=0
BOLT-LOA=0.0,
WARP=NO ENDRELEA=ACCURATE
*
*** Meshing etc
SUBDIVIDE LINE NAME=1 MODE=DIVISIONS
NDIV=30 RATIO=1.0,
PROGRESS=GEOMETRIC CBIAS=NO
@CLEAR
1
2
@
*
SUBDIVIDE LINE NAME=3 MODE=DIVISIONS
NDIV=100 RATIO=1.0,
PROGRESS=GEOMETRIC CDIAS=NO
*
GLINE NODES=2 AUXPOINT=4 NCOINCID=ENDS
NCENDS=12,
NCTOLERA=1.0E-05 SUBSTRUC=0
GROUP=2 MIDNODES=STRAIGHT,
XO=0.0 YO=0.0 ZO=0.0,
XYZOSYST=SKEW
@CLEAR
1
2
@
*
GLINE NODES=2 AUXPOINT=4 NCOINCID=ENDS
NCENDS=12,
NCTOLERA=1.0E-05 SUBSTRUC=0
GROUP=3 MIDNODES=STRAIGHT,
XO=0.0 YO=0.0 ZO=0.0,
XYZ0SYST=SKEW
@CLEAR
3
@
*
INITIAL-COND NAME=VELOCITY INITIALS=NO
@CLEAR
'Y-VELOCITY' -10.35
@
*
SET-INITCOND LINE CONDITIO=VELOCITY
@CLEAR
3 'VELOCITY'
@
*
*** Time steps etc
TIMESTEP NAME=DEFAULT
@CLEAR
18000 0.0000025
@
*
*** Analysis
MASTER ANALYSIS=DYNAMIC-DIRECT-
INTEGRATION MODEX=EXECUTE,
TSTART=0.0 IDOF=0 OVALIZAT=NONE
FLUIDPOT=AUTOMATIC,
CYCLICPA=1 IPOSIT=STOP
REACTION=YES INITIALS=NO FSINTERA=NO,
IRINT=DEFAULT CMASS=NO
SHELLNDO=AUTOMATIC AUTOMATI=OFF,
SOLVER=SPARSE CONTACT-
=CONSTRAINT-FUNCTION,
TRELEASE=0.0 RESTART-=NO
FRACTURE=NO LOAD-CAS=NO,
LOAD-PEN=NO SINGULAR=YES
STIFFNES=0.0001,
MAP-OUTP=NONE MAP-FORM=NO NODAL-
DE='' POROUS-C=NO ADAPTIVE=0,
ZOOM-LAB=1 AXIS-CYC=0 PERIODIC=NO
VECTOR-S=GEOMETRY EPSI-FIR=NO,
STABILIZ=NO STABFACT=1.0E-10
RESULTS=PORTHOLE,
FEFCORR=NO BOLTSTEP=1 EXTEND-
S=YES CONVERT-=NO DEGEN=YES,
TMC-MODE=NO ENSIGHT-=NO IRSTEPS=1
INITIALT=NO TEMP-INT=NO,
ESINTERA=NO OP2GEOM=NO INSITU-
D=NO OP2ERCS=ELEMENT 2DPL-AX=YZ-Z
*
ANALYSIS DYNAMIC-DIRECT-INTEGRATION
METHOD=BATHE,
DELTA=0.5 ALPHA=0.25 THETA=1.4
TIMESTEP=USER NCRSTEP=1,
CRSTEP=0.0 MASS-SCA=1.0
DTMIN1=0.0 DTMIN2=0.0,
GAMMA=0.5 MIDLOAD=TIMEFUNCTION
GAMAP=0.54 BATHE-DE=0.5,
BATHE-AL=0.25
*
*ANALYSIS DYNAMIC-DIRECT-INTEGRATION
METHOD=NEWMARK,
* DELTA=0.5 ALPHA=0.25 THETA=1.4
TIMESTEP=USER NCRSTEP=1,
* CRSTEP=0.0 MASS-SCA=1.0
DTMIN1=0.0 DTMIN2=0.0,
* GAMMA=0.5 MIDLOAD=TIMEFUNCTION
GAMAP=0.54 BATHE-DE=0.5,
* BATHE-AL=0.25
*

-- 216 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 F-5
F.3 ADINA PLOT command file, ADINA model 1
LOADPORTHOLE OPERATIO=CREATE FILE=,
'C:\Users\Jimmy\OneDrive – VBK\Master
Thesis\Calculations\ADINA\RPC\Beam_spr
ing_mass\RPC_spring_mass.por'
TAPERECO=0 DUMPFORM=NO PRESCAN=NO
RANGE=ALL,
TIMESTAR=0.00000000000000
TIMEEND=0.00000000000000 STEPSTAR=0,
STEPEND=0 STEPINCR=1 ZOOM-MOD=0
INITIAL-=AUTOMATIC CPSTART=1,
CPEND=0 SEQFILE=SINGLE
MULTIFIL=10
*
NODEPOINT NAME=MIDPOINT SUBSTRUC=0
REUSE=1 NODE=1
*
NODEPOINT NAME=ROD SUBSTRUC=0 REUSE=1
NODE=2
*
ELPOINT NAME=SPRING SUBSTRUC=0 REUSE=1
GROUP=1 ELEMENT=3 LAYER=1,
OPTION=LABEL LABEL=1
*
FRAME LOWER=0.0 UPPER=0.0 ROTATION=0,
LINE=YES SIZE=SURFACE
ISOSIZE=4.0,
WIDTH=100.0 HEIGHT=100.0,
XOFFSET=0.0 YOFFSET=0.0
INDEX=YES,
CUTMARK=NO WINDOW=PREVIOUS
UNITLOWE=PERCENT UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT
UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO
ASPECT=1.33333337306976,
CHARSIZE=0.25 UNITCHAR=CM
HSTRING=' ',
ADINATEX=VERTICAL
*
MESHPLOT MESHSTYL=DEFAULT
ZONENAME=WHOLE_MODEL RESPONSE=DEFAULT,
MODELDEP=DEFAULT VIEW=DEFAULT
MESHWIND=DEFAULT PLOTAREA=DEFAULT,
SUBFRAME=DEFAULT ELDEPICT=DEFAULT
NODEDEPI=DEFAULT,
BOUNDEPI=DEFAULT GPDEPICT=DEFAULT
GLDEPICT=DEFAULT,
GSDEPICT=DEFAULT GVDEPICT=DEFAULT
MESHREND=DEFAULT,
MESHANNO=DEFAULT FRONDEPI=DEFAULT
CONDEPIC=DEFAULT,
VSDEPICI=DEFAULT CRACKDEP=DEFAULT
RESULTCO=DEFAULT,
CUTSURFA=DEFAULT ELFACESE=0
ELEDGESE=0
*
*MOVIESHOOT LOAD-STEP TSTART=EARLIEST
TEND=LATEST FRAMES=150 MOVIENUMBER=1
*
*SAVEAVI filename='Results\vid.avi'
SPEED=30 XSIZE=640 YSIZE=480
MOVIENUM=1 SIZE=FRAME SCALE=1.0
COLORBIT=16
*
FRAME LOWER=0.0 UPPER=0.0 ROTATION=0,
LINE=YES SIZE=SURFACE
ISOSIZE=4.0,
WIDTH=100.0 HEIGHT=100.0,
XOFFSET=0.0 YOFFSET=0.0
INDEX=YES,
CUTMARK=NO WINDOW=PREVIOUS
UNITLOWE=PERCENT UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT
UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO
ASPECT=1.33333337306976,
CHARSIZE=0.25 UNITCHAR=CM
HSTRING=' ',
ADINATEX=VERTICAL
*
SUBFRAME NAME=1 SIZE=2133
*
RESPONSESHOW XVARIABL=TIME
XPOINT=MIDPOINT,
YVARIABL=Y-DISPLACEMENT
YPOINT=MIDPOINT,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=MIDDISPLACEMENTS
CURVEDEPICTION=LINE,
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=1 LIST=NO
*
*SAVEBMP
FILENAME='ResultsMidpoint_defl.jpg',
* SIZE=SPECIFIED SCALE=1.0
XSIZE=1600 YSIZE=1024
*
SUBFRAME NAME=2 SIZE=2233
*
RESPONSESHOW XVARIABL=TIME
XPOINT=MIDPOINT,
YVARIABL=Y-VELOCITY
YPOINT=MIDPOINT,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=VELOCITY
CURVEDEPICTION=LINE,
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=2 LIST=NO
*
SUBFRAME NAME=3 SIZE=2132
*
RESPONSESHOW XVARIABL=TIME
XPOINT=MIDPOINT,
YVARIABL=Y-ACCELERATION
YPOINT=MIDPOINT,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=ACCELERATION
CURVEDEPICTION=LINE,

-- 217 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
F-6
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=3 LIST=NO
*
SUBFRAME NAME=2 SIZE=2232
*
RESPONSESHOW XVARIABL=TIME XPOINT=ROD,
YVARIABL=Y-VELOCITY
YPOINT=ROD,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=ROD_VELOCITY
CURVEDEPICTION=LINE,
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=2 LIST=NO
*
SUBFRAME NAME=1 SIZE=2131
*
RESPONSESHOW XVARIABL=TIME
XPOINT=SPRING,
YVARIABL=NODAL_FORCE-Y
YPOINT=SPRING,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=SPRING_FORCE
CURVEDEPICTION=LINE,
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=1 LIST=NO
*
FILELIST OPTION=FILE
FILE='Results\MIDDISP.txt' LINPAG=0
Eject=no
POINTLIST POINTNAM=MIDPOINT
RESPOPTI=RESPRANGE VARIABLE=Y-
DISPLACEMENT
*
FILELIST OPTION=FILE
FILE='Results\MIDVEL.txt' LINPAG=0
Eject=no
POINTLIST POINTNAM=MIDPOINT
RESPOPTI=RESPRANGE VARIABLE=Y-VELOCITY
*
FILELIST OPTION=FILE
FILE='Results\MIDACC.txt' LINPAG=0
Eject=no
POINTLIST POINTNAM=MIDPOINT
RESPOPTI=RESPRANGE VARIABLE=Y-
ACCELERATION
*
FILELIST OPTION=FILE
FILE='Results\RODVEL.txt' LINPAG=0
Eject=no
POINTLIST POINTNAM=ROD
RESPOPTI=RESPRANGE VARIABLE=Y-VELOCITY
*
FILELIST OPTION=FILE
FILE='Results\SPRINGFORCE.txt'
LINPAG=0 Eject=no
POINTLIST POINTNAM=SPRING
RESPOPTI=RESPRANGE
VARIABLE=NODAL_FORCE-Y
*
FILELIST OPTION=INTERFACE
*

-- 218 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 F-7
F.4 ADINA PLOT command file, ADINA model 2
LOADPORTHOLE OPERATIO=CREATE FILE=,
'C:\Users\Jimmy\OneDrive – VBK\Master
Thesis\Calculations\ADINA\RPC\Beam_rod
\RPC_rod.por' TAPERECO=0 DUMPFORM=NO
PRESCAN=NO RANGE=ALL,
TIMESTAR=0.00000000000000
TIMEEND=0.00000000000000 STEPSTAR=0,
STEPEND=0 STEPINCR=1 ZOOM-MOD=0
INITIAL-=AUTOMATIC CPSTART=1,
CPEND=0 SEQFILE=SINGLE
MULTIFIL=10
*
NODEPOINT NAME=MIDPOINT SUBSTRUC=0
REUSE=1 NODE=1
*
NODEPOINT NAME=ROD SUBSTRUC=0 REUSE=1
NODE=2
*
ELPOINT NAME=SPRING SUBSTRUC=0 REUSE=1
GROUP=1 ELEMENT=3 LAYER=1,
OPTION=LABEL LABEL=1
*
FRAME LOWER=0.0 UPPER=0.0 ROTATION=0,
LINE=YES SIZE=SURFACE
ISOSIZE=4.0,
WIDTH=100.0 HEIGHT=100.0,
XOFFSET=0.0 YOFFSET=0.0
INDEX=YES,
CUTMARK=NO WINDOW=PREVIOUS
UNITLOWE=PERCENT UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT
UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO
ASPECT=1.33333337306976,
CHARSIZE=0.25 UNITCHAR=CM
HSTRING=' ',
ADINATEX=VERTICAL
*
MESHPLOT MESHSTYL=DEFAULT
ZONENAME=WHOLE_MODEL RESPONSE=DEFAULT,
MODELDEP=DEFAULT VIEW=DEFAULT
MESHWIND=DEFAULT PLOTAREA=DEFAULT,
SUBFRAME=DEFAULT ELDEPICT=DEFAULT
NODEDEPI=DEFAULT,
BOUNDEPI=DEFAULT GPDEPICT=DEFAULT
GLDEPICT=DEFAULT,
GSDEPICT=DEFAULT GVDEPICT=DEFAULT
MESHREND=DEFAULT,
MESHANNO=DEFAULT FRONDEPI=DEFAULT
CONDEPIC=DEFAULT,
VSDEPICI=DEFAULT CRACKDEP=DEFAULT
RESULTCO=DEFAULT,
CUTSURFA=DEFAULT ELFACESE=0
ELEDGESE=0
*
*MOVIESHOOT LOAD-STEP TSTART=EARLIEST
TEND=LATEST FRAMES=150 MOVIENUMBER=1
*
*SAVEAVI filename='Results\vid.avi'
SPEED=30 XSIZE=640 YSIZE=480
MOVIENUM=1 SIZE=FRAME SCALE=1.0
COLORBIT=16
*
FRAME LOWER=0.0 UPPER=0.0 ROTATION=0,
LINE=YES SIZE=SURFACE
ISOSIZE=4.0,
WIDTH=100.0 HEIGHT=100.0,
XOFFSET=0.0 YOFFSET=0.0
INDEX=YES,
CUTMARK=NO WINDOW=PREVIOUS
UNITLOWE=PERCENT UNITUPPE=PERCENT,
UNITWIDT=PERCENT UNITHEIG=PERCENT
UNITXOFF=PERCENT,
UNITYOFF=PERCENT UPDATE=NO
ASPECT=1.33333337306976,
CHARSIZE=0.25 UNITCHAR=CM
HSTRING=' ',
ADINATEX=VERTICAL
*
SUBFRAME NAME=1 SIZE=2133
*
RESPONSESHOW XVARIABL=TIME
XPOINT=MIDPOINT,
YVARIABL=Y-DISPLACEMENT
YPOINT=MIDPOINT,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=MIDDISPLACEMENTS
CURVEDEPICTION=LINE,
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=1 LIST=NO
*
*SAVEBMP
FILENAME='ResultsMidpoint_defl.jpg',
* SIZE=SPECIFIED SCALE=1.0
XSIZE=1600 YSIZE=1024
*
SUBFRAME NAME=2 SIZE=2233
*
RESPONSESHOW XVARIABL=TIME
XPOINT=MIDPOINT,
YVARIABL=Y-VELOCITY
YPOINT=MIDPOINT,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=VELOCITY
CURVEDEPICTION=LINE,
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=2 LIST=NO
*
SUBFRAME NAME=3 SIZE=2132
*
RESPONSESHOW XVARIABL=TIME
XPOINT=MIDPOINT,
YVARIABL=Y-ACCELERATION
YPOINT=MIDPOINT,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=ACCELERATION
CURVEDEPICTION=LINE,

-- 219 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
F-8
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=3 LIST=NO
*
SUBFRAME NAME=2 SIZE=2232
*
RESPONSESHOW XVARIABL=TIME XPOINT=ROD,
YVARIABL=Y-VELOCITY
YPOINT=ROD,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=ROD_VELOCITY
CURVEDEPICTION=LINE,
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=2 LIST=NO
*
SUBFRAME NAME=1 SIZE=2131
*
RESPONSESHOW XVARIABL=TIME
XPOINT=SPRING,
YVARIABL=NODAL_FORCE-Y
YPOINT=SPRING,
RESPRANGE=DEFAULT
XSMOOTHING=DEFAULT YSMOOTHING=DEFAULT,
XRESULTCONTROL=DEFAULT
YRESULTCONTROL=DEFAULT GRAPH=YES,
GRAPHNAME=SPRING_FORCE
CURVEDEPICTION=LINE,
XAXIS=DEFAULT_X
YAXIS=DEFAULT_Y GRAPHDEP=DEFAULT
SUBFRAME=1 LIST=NO
*
FILELIST OPTION=FILE
FILE='Results\MIDDISP.txt' LINPAG=0
Eject=no
POINTLIST POINTNAM=MIDPOINT
RESPOPTI=RESPRANGE VARIABLE=Y-
DISPLACEMENT
*
FILELIST OPTION=FILE
FILE='Results\MIDVEL.txt' LINPAG=0
Eject=no
POINTLIST POINTNAM=MIDPOINT
RESPOPTI=RESPRANGE VARIABLE=Y-VELOCITY
*
FILELIST OPTION=FILE
FILE='Results\MIDACC.txt' LINPAG=0
Eject=no
POINTLIST POINTNAM=MIDPOINT
RESPOPTI=RESPRANGE VARIABLE=Y-
ACCELERATION
*
FILELIST OPTION=FILE
FILE='Results\RODVEL.txt' LINPAG=0
Eject=no
POINTLIST POINTNAM=ROD
RESPOPTI=RESPRANGE VARIABLE=Y-VELOCITY
*
FILELIST OPTION=FILE
FILE='Results\SPRINGFORCE.txt'
LINPAG=0 Eject=no
POINTLIST POINTNAM=SPRING
RESPOPTI=RESPRANGE
VARIABLE=NODAL_FORCE-Y
*
FILELIST OPTION=INTERFACE
*

-- 220 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 G-1
Appendix G Script files from LS-DYNA
$# LS-DYNA Keyword file created by LS-PrePost(R) V4.2 - 21Jun2015(14:00)
$# Created on Apr-14-2016 (10:47:39)
*KEYWORD
*TITLE
$# title
Drop weight on concrete beam 5mm mesh
*CONTROL_TERMINATION
$# endtim endcyc dtmin endeng endmas
50.0 0 0.0 0.01.000000E8
*DATABASE_ELOUT
$# dt binary lcur ioopt option1 option2 option3 option4
1.0 2 0 1 0 0 0 0
*DATABASE_GLSTAT
$# dt binary lcur ioopt
1.0 2 0 1
*DATABASE_MATSUM
$# dt binary lcur ioopt
1.0 2 0 1
*DATABASE_NCFORC
$# dt binary lcur ioopt
1.0 2 0 1
*DATABASE_NODFOR
$# dt binary lcur ioopt
1.0 2 0 1
*DATABASE_NODOUT
$# dt binary lcur ioopt option1 option2
1.0 2 0 1 0.0 0
*DATABASE_RCFORC
$# dt binary lcur ioopt
1.0 2 0 1
*DATABASE_SECFORC
$# dt binary lcur ioopt
1.0 2 0 1
*DATABASE_SLEOUT
$# dt binary lcur ioopt
1.0 2 0 1
*DATABASE_SSSTAT
$# dt binary lcur ioopt
1.0 2 0 1
*DATABASE_BINARY_D3CRACK
$# dt lcdt beam npltc psetid
1.0 0 0 0 0
*DATABASE_BINARY_D3PLOT
$# dt lcdt beam npltc psetid
0.2 0 0 0 0
$# ioopt
0
*DATABASE_BINARY_D3THDT
$# dt lcdt beam npltc psetid
1.0 0 0 0 0
*DATABASE_BINARY_INTFOR
$# dt lcdt beam npltc psetid
1.0 0 0 0 0
$# ioopt
0
*BOUNDARY_SPC_SET
$# nsid cid dofx dofy dofz dofrx dofry dofrz
5 0 0 1 0 0 0 0
*SET_NODE_LIST_TITLE
NODESET(SPC) 5
$# sid da1 da2 da3 da4 solver
5 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8
104577 104693 104809 104925 105041 105157 105273 105389
105505 105621 105737 105853 105969 106085 106201 106317

-- 221 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
G-2
106433 106549 106665 106781 106897 250234 250402 250570
...
*BOUNDARY_SPC_SET
$# nsid cid dofx dofy dofz dofrx dofry dofrz
6 0 1 1 1 1 1 1
*SET_NODE_LIST_TITLE
NODESET(SPC) 6
$# sid da1 da2 da3 da4 solver
6 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8
250232 250233 250234 250235 250236 250400 250401 250402
250403 250404 250568 250569 250570 250571 250572 250736
250737 250738 250739 250740 250904 250905 250906 250907
...
*CONTACT_AUTOMATIC_SURFACE_TO_SURFACE_ID
$# cid title
1Contact drop-weight beam
$# ssid msid sstyp mstyp sboxid mboxid spr mpr
5 1 3 3 0 0 0 0
$# fs fd dc vc vdc penchk bt dt
0.0 0.0 0.0 0.0 0.0 0 0.01.00000E20
$# sfs sfm sst mst sfst sfmt fsf vsf
1.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0
*CONTACT_AUTOMATIC_SURFACE_TO_SURFACE_ID
$# cid title
2Contact beam support
$# ssid msid sstyp mstyp sboxid mboxid spr mpr
1 3 3 3 0 0 0 0
$# fs fd dc vc vdc penchk bt dt
0.0 0.0 0.0 0.0 0.0 0 0.01.00000E20
$# sfs sfm sst mst sfst sfmt fsf vsf
1.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0
*PART
$# title
beam
$# pid secid mid eosid hgid grav adpopt tmid
1 1 1 0 1 0 0 0
*SECTION_SOLID_TITLE
Section beam
$# secid elform aet
1 1 0
*MAT_CONCRETE_DAMAGE_PLASTIC_MODEL_TITLE
Concrete
$# mid ro e pr ecc qh0 ft fc
1 0.0024 34700.0 0.20.515999970.30000001 3.28 45.5
$# hp ah bh ch dh as df fc0
0.5 0.08 0.003 2.01.00000E-6 15.00.85000002 10.0
$# type bs wf wf1 ft1 strflg failflg
0.0 1.0 0.069 0.0 0.0 1.0 0.0
*HOURGLASS_TITLE
Hourglass definition beam
$# hgid ihq qm ibq q1 q2 qb/vdc qw
1 6 0.1 0 1.5 0.06 0.1 0.1
*PART
$# title
supports
$# pid secid mid eosid hgid grav adpopt tmid
3 3 5 0 0 0 0 0
*SECTION_SOLID_TITLE
Section support
$# secid elform aet
3 1 0
*MAT_ELASTIC_TITLE
drop weight elastic
$# mid ro e pr da db not used
5 0.007753 200000.00.30000001 0.0 0.0 0
*PART
$# title

-- 222 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 G-3
reinforcement
$# pid secid mid eosid hgid grav adpopt tmid
4 4 4 0 0 0 0 0
*SECTION_BEAM_TITLE
Section reinforcement
$# secid elform shrf qr/irid cst scoor nsm
4 1 1.0 2 1 0.0 0.0
$# ts1 ts2 tt1 tt2 nsloc ntloc
6.0 6.0 0.0 0.0 0.0 0.0
*MAT_PLASTIC_KINEMATIC_TITLE
Reinforcement
$# mid ro e pr sigy etan beta
4 0.00785 200000.00.30000001 609.78003 584.38 0.0
$# src srp fs vp
0.0 0.0 0.0 0.0
*PART
$# title
dropweight
$# pid secid mid eosid hgid grav adpopt tmid
5 2 5 0 0 0 0 0
*SECTION_SOLID_TITLE
Section drop weight
$# secid elform aet
2 1 0
*MAT_RIGID_TITLE
Steel
$# mid ro e pr n couple m alias
20.00802679 200000.00.30000001 0.0 0.0 0.0
$# cmo con1 con2
0.0 0 0
$#lco or a1 a2 a3 v1 v2 v3
0.0 0.0 0.0 0.0 0.0 0.0
*INITIAL_VELOCITY_NODE
$# nid vx vy vz vxr vyr vzr icid
79 0.0 -10.347 0.0 0.0 0.0 0.0 0
80 0.0 -10.347 0.0 0.0 0.0 0.0 0
81 0.0 -10.347 0.0 0.0 0.0 0.0 0
...
*SET_NODE_LIST_TITLE
NODESET(SPC) 1
$# sid da1 da2 da3 da4 solver
1 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8
107013 107129 107245 107361 107477 107593 107709 107825
107941 108057 108173 108289 108405 108521 108637 108753
108869 108985 109101 109217 109333 104577 104693 104809
...
*SET_NODE_LIST_TITLE
NODESET(SPC) 2
$# sid da1 da2 da3 da4 solver
2 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8
107013 107129 107245 107361 107477 107593 107709 107825
107941 108057 108173 108289 108405 108521 108637 108753
108869 108985 109101 109217 109333 104577 104693 104809
...
*SET_NODE_LIST_TITLE
NODESET(SPC) 3
$# sid da1 da2 da3 da4 solver
3 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8
128982 128996 129010 129024 129038 129052 129066 129080
129094 129108 129122 129136 0 0 0 0
*SET_NODE_LIST_TITLE
NODESET(SPC) 4
$# sid da1 da2 da3 da4 solver
4 0.0 0.0 0.0 0.0MECH
$# nid1 nid2 nid3 nid4 nid5 nid6 nid7 nid8

-- 223 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
G-4
106897 104577 104693 104809 104925 105041 105157 105273
105389 105505 105621 105737 105853 105969 106085 106201
106317 106433 106549 106665 106781 128982 128996 129010
...
*CONSTRAINED_LAGRANGE_IN_SOLID_TITLE
$# coupid title
1Constraint reinforcement beam
$# slave master sstyp mstyp nquad ctype direc mcoup
4 1 1 1 0 2 1 0
$# start end pfac fric frcmin norm normtyp damp
0.01.00000E10 0.1 0.0 0.5 0 0 0.0
$# cq hmin hmax ileak pleak lcidpor nvent blockage
0.0 0.0 0.0 0 0.1 0 0 0
$# iboxid ipenchk intforc ialesof lagmul pfacmm thkf
0 0 0 0 0.0 0 0.0
*ELEMENT_SOLID
$# eid pid n1 n2 n3 n4 n5 n6 n7 n8
6555 1 145698 145699 145936 145935 150675 150676 150913 150912
6556 1 145699 145700 145937 145936 150676 150677 150914 150913
6557 1 145700 145701 145938 145937 150677 150678 150915 150914
...
*ELEMENT_BEAM
$# eid pid n1 n2 n3 rt1 rr1 rt2 rr2 local
5611 4 144750 144751 0 0 0 0 0 2
5612 4 144751 144752 0 0 0 0 0 2
5613 4 144752 144753 0 0 0 0 0 2
...
*NODE
$# nid x y z tc rc
1 630.0 204.0 50.0 0 0
2 628.042236 204.0 37.63932037 0 0
3 622.360657 204.0 26.48859024 0 0
...
*END

-- 224 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 H-1
Appendix H Paramater studies of FE models
H.1 Convergence studies in ADINA
When deciding which direct integration method to be used in the ADINA analyses, a
comparison is made between the different methods available in ADINA, shown in Figure H.1.
Figure H.1 Comparison of the response in ADINA when using Bathe or Newmark method
as direct integration-solver.
Since the response is similar when using the direct integration methods, the Bathe method will
be used, since it shows more stability and is the default choice in ADINA.
In ADINA model 2, the spring between the drop weight and the beam is considered eternally
stiff. In order to see which value to use, a study with different spring stiffness is made, and
shown in Figure H.2.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Dsiplacements [mm]
Time [ms]
ADINA model 1
ADINA model 1
(Newmark4500)

-- 225 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
H-2
Figure H.2 Response of midpoint using different spring stiffness for ADINA model 2.
Judging by Figure H.2, it is concluded that a spring stiffness of -1.5∙1015N/m is pertinent for
the spring to be considered stiff enough.
0
5
10
15
20
25
30
35
0 5 10 15 20 25 30 35 40 45 50
Dsiplacements [mm]
Time [ms]
Displacement of the mid point
ADINA model 2 (-1.2e12)
ADINA model 2 (-1.2e15)
ADINA model 2 (-1.2e18)

-- 226 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 H-3
Figure H.3 Response of the midpoint using different material models for the rod in ADINA
model 2.
Figure H.4 Convergence study of number of elements for the beam in ADINA.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacement [mm]
Time [ms]
Bilinear fy=400
Elastic
Bilinear fy=80
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Displacements [mm]
Time [ms]
10 elements
30 elements
60 elements
120 elements
240 elements
240 elements (9000 time steps)
30 elements (9000 time steps)

-- 227 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
H-4
H.2 Convergence study on mesh size LS-DYNA
The choice of mesh size in a finite element model is governed by the information that the model
is meant to provide. As mentioned in Section 5.4.5, the limiting factor for reducing mesh size
is that it must be able to show crack patterns at a certain level of detail. Regarding more global
parameters, such as displacements, this level of detail might be excessive. The computational
cost must be taken into account when selecting the mesh size since it will increase rapidly as
the mesh size decreases. A parameter study is performed for three different mesh sizes. The
first one is very coarse, the beam length (1180 mm) is divided into 20 elements which gives the
element length 59 mm. The height (100 mm) is divided into five elements, which gives the
element height 20 mm. A more refined square mesh of 10 mm in is tested as well. These are
compared with the 5 mm mesh that has been used for the basic model. An even finer mesh is
not included in this study even though it would be interesting to see the convergence. The
computational cost for the 5 mm mesh is already high and the gain from testing an even finer
mesh is not considered to be worth all the computational cost. In Figure H.5 displacements of
the middle of the beam are shown as a function of time for all tested mesh sizes.
Figure H.5 Displacement of the middle of the beam as a function of time for three different
mesh sizes.
It can be seen that the displacement of the 10mm mesh is very close to the displacement of the
5mm mesh. The maximum displacement values are -27.5 mm and -28.1 mm respectively. The
conclusion is made that for analysis other than the crack pattern of the beam, the 10 mm mesh
is capable of providing results with adequate accuracy and will therefore be used in parameter
studies performed on the LS-DYNA model. This is done to save on computational cost and
time.
H.3 Strain rate estimation in LS-DYNA
In order to estimate a value for the strain rate in the LS-DYNA model, the strain in the element
where first bottom bending crack appears was investigated in more detail. The basic model with
10 mm mesh size was used in this study.
-40
-30
-20
-10
0
10
20
30
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Displacement [mm]
Time [ms]
5mm
10mm
59mm

-- 228 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 H-5
The maximum principal strain was plotted as a function of time for the first 2 ms, see
Figure H.6. The crack initiation was considered to happen within that time.
Figure H.6 Strain as a function of time for an element where a bending crack was initiated.
It can be seen that the curvature of the strain curve varied with time. The slope of the curve is
the factor that describes the strain rate. In Figure H.6, two slopes were considered. The initial
steep slope of 152 s-1 represented the very first moments of crack initiation and could be
considered as an upper limit for the strain rate at crack initiation. The other slope was less steep
with a value of 45 s-1. It was taken as an average slope from first nonzero strain value until 1 ms
had passed. This value was considered to be a lower limit for the strain rate at crack initiation.
The conclusion was that the strain rate at crack initiation varied within the range;
1	1 152	45 	 	 s	s	
	
(H.1)
H.4 Abnormal behaviour due to low fracture energy
While performing a parameter study on the influence of changing the fracture energy in the
CDPM2 material model in LS-DYNA it was discovered that reducing the fracture energy too
much provided abnormal and unrealistic results. The fracture energy was decreased with the
multiplication factor x0.5 from the basic model used in this thesis, making the LS-DYNA input
value wu go from 0.069 mm to 0.0345 mm. The displacement of the beam midpoint can be seen
in Figure H.7 along with the basic LS-DYNA model, a multiplication factor of x0.75 and RPC2
test result.
y = 0.0451x + 0.0021
y = 0.1524x - 0.0141
0.00
0.01
0.02
0.03
0.04
0.05
0.06
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 	1.2 	1.4 	1.6 	1.8 	2.0
Strain [
-]
Time [ms]
Strain
Strain rate 2
Strain rate 1
Linear (Strain rate 2)
Linear (Strain rate 1)

-- 229 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28
H-6
Figure H.7 The midpoint displacement for three values of fracture energy along with the
RPC2 test result.
The maximum displacement of the midpoint from the different LS-DYNA models are shown
in Table H.1.
Table H.1 Maximum displacements in the midpoint of the beam for different magnitudes of
fracture energy.
Multiplication factor Crack width input,
wu [mm]
Maximum
displacement [mm]
Difference from
basic model [%]
x 1.0 0.069 27.5 -
x 0.75 0.052 28.0 1.9
x0.5 0.0345 49.0 78.5
Considering the small difference in midpoint displacement when the fracture energy was
decreased by x0.75 it seemed unrealistic that a decrease by x0.5 would give such a massive
difference. Both the magnitude of the maximum displacement and the shape of the
displacement-time curve were odd. The material response seemed to have crossed some kind
of a barrier when decreasing the fracture energy this much. The beam took on an odd,
asymmetrical, rubber like shape shown in Figure H.8. The strain distribution was not
symmetrical either, and followed the placement of the reinforcement. A computational error
was considered to be the most likely reason for this odd behaviour. The beam where the fracture
energy was multipied with x0.75 did not present such odd behaviour but showed similar strain
behaviour as the basic model.
-60
-50
-40
-30
-20
-10
0
10
20
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Displacement [mm]
Time [ms]
Decrease x0.75
Unchanged
Decrease x0.5
RPC2

-- 230 of 231 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-28 H-7
Figure H.8 Beam shape from an LS-DYNA model where the fracture energy input has been
reduced by x0.5.

-- 231 of 231 --