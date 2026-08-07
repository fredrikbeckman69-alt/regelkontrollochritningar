---
title: "L04 105 Design Of Reinforced Concrete Slab With Regard To Explosions"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-105_design-of-reinforced-concrete-slab-with-regard-to-explosions.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","armering","beräkning","explosion","figure","with","load"]
summary: "Design of reinforced concrete slab with regard to explosions Master of Science Thesis in the Master’s Programme Structural engineering and building performance design RICKARD AUGUSTSSON MARKUS HÄRENSTAM Department of Civil and Environmental Engine..."
---

Design of reinforced concrete slab with
regard to explosions
Master of Science Thesis in the Master’s Programme Structural engineering and
building performance design
RICKARD AUGUSTSSON
MARKUS HÄRENSTAM
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2010
Master’s Thesis 2010:38

-- 1 of 132 --



-- 2 of 132 --

MASTER’S THESIS 2010:38
Design of reinforced concrete slab with regard to
explosions
Master of Science Thesis in the Master’s Programme Structural engineering and
building performance design
RICKARD AUGUSTSSON
MARKUS HÄRENSTAM
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2010

-- 3 of 132 --

Design of reinforced concrete slab with regard to explosions
Master of Science Thesis in the Master’s Programme Structural engineering and
building performance design
RICKARD AUGUSTSSON
MARKUS HÄRENSTAM
© RICKARD AUGUSTSSON & MARKUS HÄRENSTAM, 2010
Examensarbete / Institutionen för bygg- och miljöteknik,
Chalmers tekniska högskola 2010:38
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000

-- 4 of 132 --

Chalmers Reproservice / Department of Civil and Environmental Engineering
Göteborg, Sweden 2010

-- 5 of 132 --



-- 6 of 132 --

I
Design of reinforced concrete slab with regard to explosions
Master of Science Thesis in the Master’s Programme Structural engineering and
building performance design
RICKARD AUGUSTSSON
MARKUS HÄRENSTAM
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete structures
Chalmers University of Technology
ABSTRACT
The design approach for structures submitted to explosions differ from the common
statically approach and are not well documented. This master thesis compiles
simplified methods used to design reinforced concrete beams and slabs against
impulse loads and will verify the reliability of these methods.
Two simplified methods are presented here, hand calculations based on energy
equations and a numerical solution method based on the equation of motion. Both
methods are based on that the structure can be reduced to a one degree of freedom
system (SDOF-system). The study is performed for elastic, plastic and elastoplastic
material response and is compared to results from the FE software ADINA (2009),
which is here assumed to correspond to a real structural response.
A comparison of the generated results concludes that the reliability for the SDOF
analyses, assuming elastic response, is good for both beams and slabs. A divergence is
found for the hand calculations which increase the longer the load is applied, but this
divergence is known and can be predetermined. For the plastic material a divergence
is found for both the beams and slabs. The analysis will approach the FE-analysis
when an increased load duration is used, but is not a reliable method for impulse
loaded structures. However, the results are on the safe side and can be used for
preliminary design. When assuming an elastoplastic response for the beams there is
certainly a good agreement between SDOF and FE-analysis, but because of the large
divergence in the plastic analysis more studies are needed before it can be assumed to
be reliable. The elastoplastic analysis for the slabs needs to be modified to receive
relatively acceptable results, this modification is described in the thesis.
Key words: Reinforced concrete, slab, beam, explosion, impulse load, dynamic,
SDOF system, equivalent static load, non-linear FEM

-- 7 of 132 --

II
Dimensionering av armerad betongplatta med avseende på explosioner
Examensarbete inom Structural Engineering and Building Performance Design
RICKARD AUGUSTSSON & MARKUS HÄRENSTAM
Institutionen för bygg- och miljöteknik
Avdelningen för Konstruktionsteknik
Chalmers tekniska högskola
SAMMANFATTNING
Tillvägagångssättet vid dimensionering mot explosioner skiljer sig från den
traditionella statiska dimensioneringen och är dåligt dokumenterad. Detta
examensarbete sammanställer förenklade metoder som används vid dimensionering
av armerade betongbalkar och plattor samt verifierar tillförlitligheten för dessa
metoder.
Två förenklade metoder presenteras här, handberäkningar baserade på
energiekvationer och en numerisk lösningsmetod baserad på rörelseekvationen. Båda
metoderna antar att den utsatta konstruktionen kan reduceras till ett
enfrihetsgradsystem (SDOF). Studien är utförd för elastiskt, plastiskt och
elastoplastisk materialrespons samt jämförs med resultat från FE-programmet ADINA
(2009), som här antas ge en respons motsvarande den för en riktig konstruktion.
Jämförelse mellan utförda resultat fastställer att tillförlitligheten för SDOF analyserna
vid elastisk respons är god för både balkar och plattor. En avvikelse synes för
handberäkningarna som avtar desto längre lasten appliceras, men denna avvikelse är
känd från tidigare och kan förutbestämmas. Däremot fås en avvikelse för både balkar
och plattor när en plastisk respons antas. Analysen närmar sig FE-analysen desto
längre lastvaraktighet som antas, men kan inte anses ha en bra tillförlitlighet för
impulsbelastade konstruktioner. Resultaten är dock på den säkra sidan och kan
användas som en preliminär dimensionering. När en elastoplastisk respons antas för
balkarna uppnås visserligen en bra överensstämmelse, men på grund av avvikelsen
vid plastisk analys behövs fler studier göras för att ett uttalande om
dimensioneringsmetodens tillförlitlighet kan göras. Den elastoplastiska analysen för
plattor behöver modifieras för att ge relativt acceptabla resultat, denna modifiering är
beskriven i rapporten.
Nyckelord: Armerad betong, platta, balk, explosion, impuls last, dynamik, SDOF
system, ekvivalent statisk last, olinjär FEM

-- 8 of 132 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2010:38 III
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
1.4 Limitations 2
1.5 Outline of the report 2
2 BACKGROUND THEORY 3
2.1 What is an explosion? 3
2.2 Simplified shockwave and load 4
2.3 Materials 5
2.3.1 Material behaviour 5
2.3.2 Simplified material behaviour 6
2.3.3 Theory of plasticity and plastic hinges 8
2.3.4 Plastic rotation capacity 11
2.4 Basic dynamics 12
2.4.1 Introduction 12
2.4.2 Velocity and acceleration 12
2.4.3 Force and pressure 13
2.4.4 Momentum, impulse and impulse intensity 13
2.4.5 Work 14
2.4.6 Equation of motion 18
2.5 Plate theory 20
2.5.1 Introduction 20
2.5.2 Elastic behaviour 20
2.5.3 Plastic behaviour 21
2.6 SDOF system 24
3 BEAMS 27
3.1 Introduction 27
3.2 Response of beams subjected to impulse load 27
3.3 Equation of motion 30
3.3.1 Introduction 30
3.3.2 Transformation factor for the mass κm 30

-- 9 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
IV
3.3.3 Transformation factor for the load κF 31
3.3.4 Examples of tabulated transformation factors 32
3.3.5 Solving the equation of motion 33
3.4 Hand calculation 33
3.5 FE-analysis 34
3.5.1 Restrictions 34
3.5.2 Cracked elasticity modulus 34
3.5.3 Choice of material responses in different sections 35
3.5.4 Element integration points 35
3.6 Example 37
3.6.1 Scenario 37
3.6.2 Assumptions and simplifications 37
3.6.3 Transformed mass 38
3.6.4 Stiffness and internal resistance 38
3.6.5 Required deformations 41
3.6.6 Equivalent static load 42
3.6.7 Maximum deformation capacity 43
3.6.8 Results 45
3.7 Comments to divergence between analysis 50
3.7.1 Elastic response 50
3.7.2 Ideal plastic response 51
3.7.3 Elastoplastic response 54
3.7.4 Numerical solution methods 56
4 SLABS 58
4.1 Introduction 58
4.2 Response of slabs subjected to impulse load 58
4.3 Transformation from slab to SDOF-system 61
4.3.1 Introduction 61
4.3.2 Transformation factor for the mass κm 61
4.3.3 Transformation factor for the load κF 62
4.3.4 Tabulated transformation factors 63
4.4 Equation of motion 64
4.5 Hand calculations 64
4.6 FE-analysis 64
4.6.1 Restrictions 64
4.6.2 How to model in ADINA 64
4.6.3 Verification of the model 69
4.7 Example – Simply supported slab 71
4.7.1 Scenario 71
4.7.2 Assumtions and simplifications 71
4.7.3 Transformed mass 72
4.7.4 Maximum static load 72
4.7.5 Stiffness and internal resistance 74
4.7.6 Required deformations 76

-- 10 of 132 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2010:38 V
4.7.7 Equivalent static load 77
4.7.8 Maximum deformation capacity 78
4.7.9 Results 80
4.8 Example – Fully fixed slab 86
4.8.1 Scenario, assumtions and simplifications 86
4.8.2 Transformed mass 86
4.8.3 Maximum static load 86
4.8.4 Stiffness and internal resistance 88
4.8.5 Required deformations 89
4.8.6 Maximum deformation capacity 90
4.8.7 Results 91
4.9 Comments to divergence between analysis 92
4.9.1 Introduction 92
4.9.2 Elastic 93
4.9.3 Ideal plastic 93
4.9.4 Elastoplastic 95
5 FINAL REMARKS 98
5.1 Conclusions 98
5.2 Further studies 98
6 REFERENCES 99
APPENDIX A CENTRAL DIFFERENCE METHOD 101
APPENDIX B MODIFIED TRANSFORMATION FACTOR FOR THE IDEAL
PLASTIC MATERIAL FOR A BEAM 102
APPENDIX C MODIFIED TRANSFORMATION FACTOR FOR THE
ELASTOPLASTIC MATERIAL FOR A BEAM 104
APPENDIX D ELASTIC TRANSFORMATION FACTORS FOR A SIMPLY
SUPPORTED SLAB WITH UNIFORMLY DISTRIBUTED LOAD
106
D.1 Indata 106
D.2 Transformation factor for the mass κm 106
D.3 Transformation factor for the load κF 107
APPENDIX E PLASTIC TRANSFORMATION FACTORS FOR A SIMPLY
SUPPORTED AND FULLY FIXED SLAB WITH UNIFORMLY
DISTRIBUTED LOAD 108
E.1 Indata 108
E.2 Transformation factor for the mass κm 108
E.3 Transformation factor for the load κF 110

-- 11 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
VI
APPENDIX F MODIFIED ALPHA FACTOR FOR THE FICTITIOUS YIELD
STRESS WHEN USING SEVEN INTEGRATION POINTS 112
APPENDIX G TRANSFORMATION FACTORS FOR ELASTOPLASTIC SLAB
114

-- 12 of 132 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2010:38 VII
Preface
In this Master’s thesis simplified design approaches for impulse loaded reinforced
concrete beams and slabs are compiled and investigated. The study has been carried
out in cooperation with Reinertsen Sverige AB and the Division of Structural
Engineering at Chalmers University of Technology. The work has been done at
Reinertsen’s office in Göteborg between January 2010 and June 2010.
Many thanks go out to Morgan Johansson, PhD, who has been our supervisor and has
helped us through harsh time. Thanks also to Håkan Lantz at Reinertsen who has
helped us with ADINA and to Reinertsen itself, which has provided us access to
helpful documents. Finally, thanks to Kent Gylltoft who has been our examination
during this project.
Göteborg June 2010
Rickard Augustsson, Markus Härenstam

-- 13 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
VIII
Notations
Roman upper case letters
A	
Area
s	
A	
Area of reinforcement
C	
Damping
D	
Flexural rigidity of a plate
E	
Modulus of elasticity
c	
E	
Young’s modulus for concrete
s	
E	
Young’s modulus for steel
k	
E	
Kinetic energy
F	
External force
e	
F	
Equivalent external force
I	
Moment of inertia
I	
Impulse (general)
c	
I	
Characteristic impulse
K	
Stiffness
v	
K	
Torsional stiffness
M	
Moment
rd	
M	
Moment capacity
el	
M	
Elastic moment
pl	
M	
Ultimate moment
P	
Pressure load
1	
P	
Peak pressure load
R	
Internal resisting force
e	
R	
Equivalent internal force
m	
R	
Maximum internal force
e	
W	
External work
i	
W	
Internal work
el	i	
W .	
Elastic internal work
pl	i	
W .	
Plastic internal work
ep	i	
W .	
Elastoplastic internal work
el	
W	
Elastic bending resistance
Q	
Total load
Roman lower case letters
a	
Acceleration
a	
Length of middle yield line for slabs
a	
Mean acceleration
c	
Distance of concrete layer
d	
Effective height of cross section
y	
f	
Yield stress (general)

-- 14 of 132 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2010:38 IX
sy	
f	
Yield stress for reinforcement
su	
f	
Ultimate capacity for reinforcement
cc	
f	
Concrete compression strength
y	
f '	
Fictitious yield stress
mod
y	
f	
Modified fictitious yield stress
h	
Height of cross-section
i	
Impulse intensity
k	
Stiffness
l	
Length of beam / width of slab
m	
Mass
'	m	
Mass per unit length
e	
m	
Equivalent mass
s	
Spacing between reinforcement steel
q	
Distributed load
e	
q	
Equivalent static load
el	
q	
Equivalent static load with elastic response
pl	
q	
Equivalent static load with plastic response
p	
Momentum
t	
Time
1
t	
Total time duration of transient load
u	
Deformation
u	
Velocity, first derivative of u with respect to time t
u	
Acceleration, second derivative of u with respect to time t
el	
u	
Elastic deformation
pl	
u	
Plastic deformation
ep	
u	
Elastoplastic deformation
s	
u	
Deformation of system point
v	
Velocity
v	
Mean velocity
s	
v	
Velocity in the system point
w	
Width of cross-section / length of slab
x	
Coordinate
y	
Coordinate
Greek lower case letters
	
Quota between the Young’s modulus for the reinforcement and concrete
	
Stress block factor
	
Modification factor for Young’s modulus
	
Modification factor for the maximal moment
	
Stress block factor
	
Deformation
	
Strain

-- 15 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
X
s	
	
Reinforcement strain
el	
	
Elastic strain
su	
	
Ultimate reinforcement strain
pl	
	
Plastic strain
sy	
	
Strain when yielding starts for the reinforcement
K	
	
Transformation factor for the internal force
m	
	
Transformation factor for the mass
mF	
	
Transformation factor for the mass and external load
F	
	
Transformation factor for the external load
	
Slenderness
	
Rotation
pl	
	
Plastic rotation
	
Density
	
Stress
	
Angular frequency
	
Number of the statically indeterminacy
	
Poisson’s ratio

-- 16 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 1
1 Introduction
1.1 Background
An explosion is a huge release of energy and it creates a shockwave that acts as an
impulse load on structures. In many applications it is of great importance to take this
accidental action in consideration when designing structures, for example in civil
defense, military installations, tunnels and processing industry. The methods used to
design against impulse loads are today not well documented and few controls of the
reliability for these methods can be found.
This master thesis is a continuation of earlier master thesis carried out by Nyström
(2006) and Ek and Mattsson (2010).
1.2 Aim
The aim of this master theses project is to put together information about design
approaches for impact loading on concrete structures. Since the knowledge regarding
designing with impulse loading is limited and engineers in practice are not used to
apply dynamic calculations there is a need to find simple calculation models that are
accurate to reality. From previous master theses carried out 2006 and 2009 by
Nyström respective Ek and Mattsson impulse loaded beams were investigated.
However, this master thesis will take the next step and investigate the response of
slabs.
Questions that will be considered in the project:
 What is the response of a concrete slab subjected to impulse loading by means
of simple hand calculation approaches? What is the agreement between such
simple methods and more advanced analyses as FE-analyses? How should
such a FE-analysis be done in order to be both easy to carry out and yield
correct results?
 What is the difference in response of a structural member when it has a plastic
response instead of a linear elastic response?
1.3 Method
Literature studies are carried out to get a deeper understanding on how a concrete
structure responds when exposed to an explosion. This is done by first searching for
present hand calculations on the subject and by studying the previous master theses on
beams.
A simplified hand calculation model describing the response of a concrete slab
subjected to an impulse load is established. To verify this model a FE model in the FE
software ADINA (2009) is done. There are no possibilities to perform any real tests
and the FE model is therefore considered to simulate the real behaviour of the
concrete slab. A comparison between the FE model and the simplified hand
calculations for linear elastic and plastic response is done separately. The elastic
model is expected to coincide well between the different analyses, while the plastic
analysis is expected to be more complicated and therefore be a main factor in this

-- 17 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
2
thesis. A study of beams is carried out before advancing to slabs, this is done in order
to get a better understanding of the behaviour for impulse loaded structures.
1.4 Limitations
Because of the complex material behaviour that arises for reinforced concrete
structures, the beam and slab is here modelled as a homogenous material. This means
that the strength of the reinforcement in one direction is smeared out over the entire
cross section. Also, only idealized material behaviour, i.e. linear elastic, ideal plastic
and elastoplastic, are used in the models. This is to simplify the calculations and to
reduce the parameters that can affect the results.
The explosion studied arises from a detonation of explosives in the air. Different
phenomenon, as reflection of the shockwave and vibrations in the ground, will not be
taken into account. The impact from the fragments of the bomb will also be neglected.
1.5 Outline of the report
The report is divided into Background theory (Chapter 2), Beams (Chapter 3),
Slabs (Chapter 4) and Final remarks (Chapter 5).
In Chapter 2, basic theory for explosion, material response, dynamic, plate and SDOF
system are explained to understand the rest of the report.
Chapter 3 explain the behaviour and the different approaches used to control the
resistance for a beam subjected to an impulse load. An example is established and is
followed by comments to the results obtained.
Chapter 4 has the same structure as Chapter 3 but here, slabs are investigated. It starts
with an explanation of the behaviour and the different approaches used for an impulse
loaded slab. Then, two examples are established, one with a simply supported slab
and the other with a fully fixed slab, and it followed by comments to the results
obtained.
Chapter 5 summarises the conclusions from the studies and give suggestions to further
studies.

-- 18 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 3
Positive phase
Negative phase
Pressure
Shock front
Peak pressure
Atmospheric
pressure
Time
2 Background theory
2.1 What is an explosion?
An explosion is an exothermal reaction, i.e. a sudden release of energy that creates a
shockwave. When a charge detonates its energy is suddenly released, the entire
explosion process is over in a couple of microseconds. The release will create a
shockwave front, i.e. a fast rise in pressure, temperature and density which will move
with a supersonic speed through the air. This initial energy will decrease with
increased distance to the centre of detonation as illustrated in Figure 2.1.
The pressure in a point when an idealized shockwave, i.e. a shockwave that is not
disturbed by any reflections, passes through will first have an initially positive
pressure phase and then a negative pressure phase, see Figure 2.2, Johansson and
Laine (2007).
As can be seen the shockwave front caused by the detonation is instantaneously
increased from normal atmospheric pressure to a higher pressure which can be seen as
a “wall” of compressed air molecules moving through space. When the shockwave
front is moving forward it compresses the air molecules that come in its way and as a
result of this a negative pressure arises behind the shockwave front where it is “a lack
of” air molecules. However, the shockwave front “borrows” air molecules from the
Figure 2.1 Shockwave with decreasing pressure and temperature outward from
the explosion centre.
Centre of detonation
The pressure and temperature
in the shock front decreases
with increased distance to the
centre of detonation
Figure 2.2 Idealized shockwave pressure in time.

-- 19 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
4
bypassing area. With time and distance from the blast the energy and shockwave
decreases. The air molecules that were moved away in the shockwave front will return
to the zone where the pressure is negative. Finally, there is equilibrium between air
molecules.
In case of a reflected shockwave the pressure over time will not have the same
appearance as the idealized shockwave shown in Figure 2.2. Instead, the distribution
of the pressure over time will vary depending on how the shockwave is reflected,
Johansson (2002). Figure 2.3 shows an unreflected and reflected hit on a building.
The reflected hit is a so called normal reflection, i.e. the shockwave hits the building
perpendicular to the surface, and can be up many times larger than the unreflected
shockwave.
r
reflected
impact
r
unreflected
impact
Bomb
Plan
Vy	stötvågsfront
Byggnad	Byggnad
Building
Building
Figure 2.3 Reflected and unreflected shockwave. From Johansson and Laine
(2009).
There is two main different degrees of explosives, called high and low. When using
low explosives the movement of the shockwave happens in subsonic, i.e. with a
velocity under speed of sound. This ignition of low explosive explosion is called
deflagration. In contrast to low explosives the high explosive shockwave moves in
supersonic, i.e. with a velocity over speed of sound. The ignition of a high explosive
explosion is called detonation, Johansson (2002).
2.2 Simplified shockwave and load
In Figure 2.2 the pressure variation at a point is illustrated. A simplification of the
shockwave is done to easier be able to calculate the intensity and the load it will give
rise to. This is done by assuming a linear decrease of pressure in time and also,
because of the relatively small peak pressure in the negative phase, by neglecting the
negative phase, see Figure 2.4a. From now on this idealization of the impulse load is
to be used. However, a modification has been made with a small inclination from zero
pressure to the peak pressure for the FE-analysis due to convergence problems in
model, see Figure 2.4b.

-- 20 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 5
(a)
P1
t1
Time
Pressure
simplified
Time
(b)
P1
t1
Pressure
Figure 2.4 Simplified shockwave.
Due to limitations in performing a real test or doing a nonlinear numerical calculation
empirical expressions are used to calculate the impulse load from an explosion. These
empirical expressions from e.g. Baker (1973) can be used in order to compile
parameters like peak pressure and impulse intensity. For a deeper investigation and
understanding about how to define an impulse load the reader is referred to Johansson
and Laine (2007) and Johansson (2002).
In this master thesis, a reference bomb provided by the authority will be used. It
consists of 125 kg high explosive TNT with a distance of 5 meter from the studied
structure.
2.3 Materials
2.3.1 Material behaviour
The material studied in this master thesis is reinforced concrete. The material
behaviour of reinforcement and reinforced concrete is shown in Figure 2.5.
(b)
upl	uel
u
q
Deflection , u
Load , q
Concrete
cracks
(state I)
Reinfrocement
start to yeild
(state II)
Strain hardening
Ultimate Limit
Ductile
Brittle
Ultimate capacity
(state III 	)
(a)
upl	ue
l
fsy
fsu
s,fsu	
 su
Strain,

Stress,

sy
Figure 2.5 Material behaviour for (a) reinforcement and (b) reinforced concrete.
The reinforcement behaviour is linear elastic until it yields, which happens when the
stress reaches the yield limit fsy. The stress can then increase further to the ultimate
capacity fsu because of a phenomenon called strain hardening. When the ultimate
strain εsu is reached the reinforcement cannot deform anymore and will be torn off.
The value of the total strain will depend on the plastic rotation capacity, which is

-- 21 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
6
essential for the capacity of a concrete structure and will be described further in
Section 2.3.4.
Because of the high stiffness of uncracked concrete the reinforced concrete will have
a high stiffness in the beginning, called state I, and only small deformations will
occur. However, the concrete has a low tensile capacity and when it cracks, state II, it
will leave the reinforcement to resist the tensile stresses. When designing a reinforced
concrete structure it is assured that the reinforcement in the tensile zone can develop
its ultimate capacity, state III, before the structure collapse. Assuming this, the
reinforced concrete will have a similar material behaviour after it has cracked as the
reinforcement. Note here that the load in Figure 2.5 increases for state III while the
stress remains constant at fsy. This is because the structure will start to redistribute the
moment to other parts where the yield moment not is reached.
Depending on how the reinforced concrete structure is designed, i.e. amount and
location of reinforcement, the structure can have a ductile or brittle response. The
response that will arise depends on the plastic rotation capacity and will be presented
in Section 2.3.4. A general rule is that a ductile response is preferred since the
structure can then deform more and that crushing of concrete should occur and not a
torn off of the reinforcement.
As can be seen the response may be rather complex and further studies will not be
done here. Instead, simplified models of reinforcement and reinforced concrete are
established to simplify the different methods used in this master thesis.
2.3.2 Simplified material behaviour
2.3.2.1 Reinforcement
A common simplification of the behaviour of reinforcement is to neglect the strain
hardening. It can then be described as in Figure 2.6, with the maximum capacity set to
the yield limit, fsy.
fsy
su


sy
Figure 2.6 Simplified reinforcement behaviour.
2.3.2.2 Linear elastic
The unckracked and cracked part of the concrete, state I and II, is following Hooke’s
law

	 E		
(2.1)
where ζ is stress, E is Young’s modulus and ε is concrete strain. To simplify
calculations here either a case with uncracked concrete or with cracked concrete will
be assumed. The internal resisting force R can for the cracked case be calculated as

-- 22 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 7
ku	R 	
(2.2)
where u is the deflection and k is the stiffness, see Figure 2.7.
ζ
ε
”Real”	Uncracked
ed 	R
u
(a) 	(b)
E k
Figure 2.7 Linear elastic uncracked case (a) material response (b) structural
response.
The stiffness k depends on Young’s modulus and the moment of inertia. Its function
will differ depending on the system, i.e. boundary conditions, choice of material and
form of structure. For the cracked part the moment of inertia will be lower than for the
uncracked part, resulting in a lower stiffness. The cracked case is assumed to have a
constant stiffness and the internal resisting force can then be calculated in the same
way as for the cracked case, equation (2.2) , but with a lower stiffness and hence a
higher deformation, see Figure 2.8.
ζ
ε
”Real”
Cracked
Uncracked
ed 	R
u
(a) 	(b)
E
k
Figure 2.8 Linear elastic cracked case (a) material response (b) structural
response.
2.3.2.3 Ideal plastic
Since strain hardening is neglected for the reinforcement the idealized plastic,
state III, material behaviour for reinforced concrete will be assumed to have a
constant value equal to the yield stress, see Figure 2.9. A result from this assumption
is that no deformations will occur until the stress has reached the yield stress. If a
system is subjected to a load F the relation can be written as
0
0
		
		
u	and	Rm	F	for	Rm	R
u	and	Rm	F	for	F	R
(2.3)
where Rm is the maximum value of the internal force, i.e the resisting internal force
when the steel is yielding.

-- 23 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
8
ζ
ε
(a)
fy
(b)
R
Rm
u
Figure 2.9 Idealized plastic case (a) material response (b) structural response.
2.3.2.4 Elastoplastic
The simplified elastoplastic material is more similar to the “real behaviour”, see
Figure 2.5, than the elastic and the ideal plastic material. It will have an elastic part
equal to the cracked concrete and when the stress equals the yield stress it will enter
the plastic part, see Figure 2.10. Note here that when unloading the system the elastic
deformation will go back while the plastic deformation will remain. So if a system is
subjected to a load P the relation can be written as
m	m
m	el
R	F	for	R	R
R	F	for	ku	R
	
	
(2.4)
where uel is the elastic part of the deformations. The cracked case has been chosen
because it gives an upper limit for the elastic deformations and the model will
therefore be a “worst case scenario”.
ζ
ε
ε
R
u
ε
Rm
(a) (b)
Unloading and
reloading
Unloading and
reloading
fy
εpl
εpl
upl
εel
Figure 2.10 Elastoplastic case (a) material response (b) structural response.
2.3.3 Theory of plasticity and plastic hinges
As long as the stress in the most stressed fibres in the cross section is less than the
yield stress the cross section will have an elastic response and Hooke’s law,
equation (2.1), will apply. For a rectangular double symmetric cross section the stress
and strain distribution will be symmetric as shown in Figure 2.11. The elastic moment
for a rectangular cross section is

-- 24 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 9
2	h
I
M el

	
(2.5)
where I is the moment of inertia which for a rectangular cross section can be
calculated as
12
3
wh
I 	
(2.6)
where w is the width and h is the height of the cross section. A limiting case is when
the maximum stress equals the yield stress, Figure 2.12a, the moment is then equal to
2	h
I	f
M y
el 	
(2.7)
E	

	 	
M
F
F
h
w
Cross-section Stress distribution	Strain distribution
Figure 2.11 Stress- and strain distribution for a double symmetric cross section.
If the load is increased further the cross section will enter an elastoplastic state.
Hooke’s law will only apply for the elastic part while the plastic part will have a
linear strain response but the stresses will be modified so it doesn’t exceed the yield
limit, see Figure 2.12b. The maximum moment capacity is reached when the whole
cross section has plasticised, as shown in Figure 2.12c. It can be calculated for a
rectangular cross section to be
4
2
wh
f	M y	pl 	
(2.8)

-- 25 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
10
el	
M	M 
pl	el M	M	M 	
y	

y	

y	

y	
	s	

s	

a)
b)
s	

s	

y	

s	
			y	

		s	

pl	
M	M 
c)
Figure 2.12 Stress- and strain distribution for (a) yielding starts (b) part of the
cross section is yielding (c) the whole cross section is yielding
(ultimate moment capacity).
When the ultimate moment capacity Mpl is reached in a section the deformations will
increase rapidly in the affected area. Because the yield area is small it can be assumed
that all the deformations take place in one small deformable element called a plastic
hinge. If the structure is statically determined, for example for a simply supported
beam, a plastic hinge will lead to a mechanism, see Figure 2.13a. In other cases when
the structure is statically indeterminate, for example for a fully fixed beam or a slab,
more plastic hinges are needed to form a mechanism, see Figure 2.13b. The number of
plastic hinges needed is equal to
1		
	hinges	plastic	number	
(2.9)
where μ is the number of the statically indeterminacy for the structure. This means
that although the ultimate moment capacity is reached in one part of the structure
more load can be applied since the moments are distributed to other parts.
For a statically loaded structure a mechanism will lead to a collapse of the structure.
This is however not true for a dynamic loaded structure. Here, the only limit is the
maximum internal force Rm of the structure.

-- 26 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 11
Plastic hinge Plastic hinge
Plastic hinge
(a) (b)
Figure 2.13 A mechanism for (a) statically determinate structure (b) statically
indeterminate structure
2.3.4 Plastic rotation capacity
As mentioned above the maximum moment capacity is reached when the whole cross
section yields. This is however an idealized state where the strains are infinite large
and the real maximum moment capacity may be reached before. The limit depends on
how much the deformable element can deform before a plastic hinge is created. The
deformations that start after yield limit is reached are called plastic deformations and
will give rise to plastic rotations in the region. The plastic rotation capacity is a
measure of the maximum plastic rotation, i.e. the plastic rotation when a plastic hinge
is formed. This means that although the yield stress is reached the deformations can
increase further, see Figure 2.14.
u
ζ
θ
fy 	fy
uel 	upl
utot
uu 	θu
ζ
(a) 	(b)
Figure 2.14 Plastic capacity for (a) deformation (b) rotation.
In Eurocode 2 CEN (2004) the maximum allowed plastic rotation is presented in a
diagram, shown in Figure 2.15.

-- 27 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
12
x / d
pl [10 -3 rad]
betong-
krossning	avsliten
armering
Crushing of
Concrete
Steel
Ripped off
Ripped off
Figure 2.15 Diagram from Eurocode 2 CEN (2004) describing maximum allowed
plastic rotation.
Here, the plastic rotation capacity is based on the quality of the concrete, the
reinforcement class and the ratio between the height of the compressed zone and the
effective height.
2.4 Basic dynamics
2.4.1 Introduction
An explosion will give rise to a high pressure under a short amount of time. This
pressure will be much larger than the static pressure the structure is normally designed
for and still the structure will not always collapse. The reason for this is that the static
pressure is applied on the structure for infinite time while the explosion only has a
short duration and hence, can have a larger maximum pressure. This means that
another way of resolving the problem has to be used. One way to do this is by
considering the energy applied by the explosion and the energy the structure can
absorb before it collapses. In this chapter basic dynamics needed to understand this
way of designing will be presented.
2.4.2 Velocity and acceleration
The velocity is defined as the movement over time. If a particle moves from uo to u1
over the time t0 to t1 the mean velocity is
0	1
0	1
t	t
u	u
v 

	
(2.10)
By letting the time difference t1-t0 go towards zero the difference in distance will also
go towards zero and the velocity of the particle will approach a value defined as the
velocity at time t. The equation is

-- 28 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 13
u
dt
du
t	t
u	u
v	t	v t	t
		


	  0	1
0	1
1	0
lim	)	(	
(2.11)
The acceleration is defined as the difference in velocity over time, i.e. if the velocity
increases from v0 to v1 over the time t0 to t1 the mean acceleration is
0	1
0	1
t	t
v	v
a 

	
(2.12)
Analogous with the velocity the acceleration will reach a value at time t when the time
difference goes toward zero. The equation is
u
dt
dv
t	t
v	v
a	t	a t	t
		


	  0	1
0	1
1	0
lim	)	(	
(2.13)
2.4.3 Force and pressure
The force is according to Newton’s second law
ma	F 	
(2.14)
where m is the mass and a the acceleration of the body, respectively.
The pressure P is defined as the force acting on an area, i.e.
A
F
P 	
(2.15)
where F is the force acting on the area A.
2.4.4 Momentum, impulse and impulse intensity
The momentum p for a body with the mass m and velocity v is defined as
mv	p 	
(2.16)
If the body is moving with the velocity v0 and is subjected to a force F under the time
t0-t1, see Figure 2.16, the new momentum can be calculated as
		
1
0
)	(	0	1
t
t
dt	t	F	mv	mv	
(2.17)
where v1 is the new velocity of the body and the integral to the right is defined as the
impulse I transferred to the body, i.e.
	
1
0
)	(
t
t
dt	t	F	I	
(2.18)

-- 29 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
14
l
F(t)	vo 	v1 x
t1	t0 m
Figure 2.16 Difference in momentum when a body is subjected to an external force.
By inserting equation (2.13) and (2.14) into (2.18) the impulse can be redefined as
mv	dt	t	a	m	dt	t	ma	dt	t	F	I
t
t
t
t
t
t
			 		
1
0
1
0
1
0
)	(	)	(	)	(	
(2.19)
If the body instead is subjected to a pressure P under the time to-t1 the new momentum
is calculated as
		
1
0
)	(	0	1
t
t
dt	t	P	A	mv	mv	
(2.20)
where the integral is defined as the impulse intensity i transferred to the body, i.e.
	
1
0
)	(
t
t
dt	t	P	i	
(2.21)
By looking at Figure 2.4 again the impulse intensity can be illustrated as the area
under the force-time relation. From Figure 2.17 and by combining equations (2.15),
(2.18) and (2.21) it can be seen that
Ai	I 	
(2.22)
1	
P
1
t)	(b
1	
P
1	
t
i	i
)	(a
Figure 2.17 Impulse intensity for an idealized shockwave.
2.4.5 Work
2.4.5.1 External
The kinetic energy Ek for a body with the mass m and velocity v is defined as
2
2
mv
E k 	
(2.23)

-- 30 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 15
By inserting the equation (2.19) into (2.23) the external work We, i.e. the kinetic
energy Ek, for a body with the mass m and subjected to an impulse load I can be
expressed as
m
I
E	W k	e
2
2
		
(2.24)
However, this equation is only correct when the impulse is infinitely short. In other
cases a resistance against transferring the kinetic energy into the structure must be
considered. This resistance depends on the stiffness of the structure and will increase
with time. By introducing a so called characterized impulse Ic that has an infinite high
pressure and infinite short duration, see Figure 2.18, the equation (2.24) can be stated
in a more correct way as
m
I
E	W c
k	e
2
2
		
(2.25)
Force, F
Time, t
Ic
dt
Figure 2.18 Characterized impulse.
This means that when comparing the external work for an impulse load with longer
duration the longer impulse will result in a lower external work on the structure. Study
for example the impulse for the idealized shockwave shown in Figure 2.4.The
external work for this idealized shockwave will be lower than for a characterized
impulse load with the same total impulse, see Figure 2.19.

-- 31 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
16
We1 - characterized impulse
We2 - for idealized shockwave
Force, F
Time, t
dt
I1=I2 but We1>We2
Figure 2.19 Different external work on the structure for the same total impulse but
with different durations.
2.4.5.2 Internal
The internal work of a body is defined as
	
1
0
)	(
u
u
i u	R	W	
(2.26)
where u is the deformation and R(u) is the internal resisting force of the structure.
Note here that this resisting force is not the same as the resistance against transferring
the kinetic energy into the structure mentioned in Section 2.4.5.1. The internal work
can be illustrated by the area under the structural response curve described in
Section 2.3.2, see Figure 2.20. As can be seen the internal work will develop
differently in time depending on what material is used, but the final internal work will
always be the same.
F
u
(a)
F
u
(b)
F
u
(c)
k 	Rm 	Rm
Wi
Wi Wi
uel 	upl 	uel upl
Figure 2.20 The internal work for the materials (a) elastic (b) plastic
(c) elastoplastic.
By combining equation (2.2) and (2.26) the elastic internal work can be stated as

-- 32 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 17
2
)	(
2
0	0
.
el
u
el
u
el	el	i
ku
ku	u	R	W
el	el
		 		
(2.27)
By combining equation (2.3) and (2.24) the ideal plastic work can be stated as
pl	pl
u	u
pl	pl	i Ru	Ru	R	P	u	R	W
pl	pl
					 		 0	)	(
0
0
0	0
.	
(2.28)
By combining equation (2.4) and (2.24) the elastoplastic work can be stated as
pl
el
u
u
u
el
u
pl	ep	i Ru
ku
R	ku	u	R	W
tot
el
el	tot
				 		 2
)	(
2
0	0
.	
(2.29)
2.4.5.3 Equilibrium
For a body to be in energy equilibrium the external work must be equal to the internal
work, i.e.
i	e W	W 	
(2.30)
By combining equation (2.25), (2.27) and (2.30) the elastic deformations that will
arise in the structure can be calculated to
	m
I
km
I
u c	c
el 		
(2.31)
where ω is the angular frequency. In the same way the plastic deformations can be
calculated by combining equation (2.25), (2.28) and (2.30) to
m
c
pl
mR
I
u 2
2
	
(2.32)
and the elastoplastic deformations can be calculated as
pl	ep	el	ep	ep u	u	u .	. 		
(2.33)
where uep.el and uep.pl is the elastic respectively plastic parts of the deformations. Note
here that for the elastoplastic case the elastic part will add additional resistance and
therefore less plastic deformation is needed. However, since the elastic part has a
linear response and is limited by the ultimate internal resistance, the deformation will
be twice as large compared with the plastic contribution, see Figure 2.21.

-- 33 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
18
R
u
upl
R
u uel= upl·2
ΔWi 	ΔWi
Rm 	Rm
Figure 2.21 Difference in required deformation for same internal energy.
This will result in a larger total deformation for the beam than if an ideal plastic
material was used. The maximum elastic deformation can be calculated as
k
R
u el	ep 	.	
(2.34)
and the plastic reductions will then be according to Figure 2.21.
2
.el	ep
pl
u
u 		
(2.35)
This will give the plastic deformation
pl	pl	pl	ep u	u	u 			.	
(2.36)
2.4.6 Equation of motion
Study Figure 2.22a, the rigid mass m is attached to a spring with the internal force R
and the force F(t) and damping C acting on the system. If the system is vibrating with
help of an external force the motion is referred to as forced vibration. Since an
impulse load will hit the structure when it is exposed to explosions this will be the
case in the beginning. But the impulse load has a short duration and the force is after
only a short time equal to zero and the continued motion can then be described as a
damped free vibration. The damping on the system will have a positive effect since it
reduces the displacement for the system and hence, the work done by the system. Due
to the short time duration, the effect of damping is, on the safe side, often neglected
when considering explosions. The system will then only consist of a rigid mass
attached to a spring with a force F(t) acting on it, see Figure 2.22b. In this master
thesis the focus will lie on the time when the impulse load is acting and shortly after
so whenever the equation of motion is mentioned it is this undamped forced vibration
system, shown in Figure 2.22b, that is considered. It should be kept in mind, thought,
that when the load duration is short and when the impulse load has expired, the force
F(t) will be equal to zero and the system will act as an undamped free vibration
system.

-- 34 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 19
R	C
m
R
m
(a) (b)
)	(t	F	)	(t	F
Figure 2.22 Mechanical forced vibration system a) damped b) undamped.
The impulse load will result in a deformation u for the mass as shown in Figure 2.23a.
The body will then start to oscillate around its equilibrium point. Since the system is
undamped the same deformation will occur in the opposite direction and in the same
direction again for infinity or until the oscillation is interrupted. This means that the
same work will be done in both directions and also that the gravitation must be
neglected since it will accelerate in one direction and retard in the other direction. By
isolating the rigid body m the Figure 2.23b can be established. For the body to be in
equilibrium the sum of all forces must equal zero. With this condition the equation of
motion for an undamped forced vibration can be stated as
 	t	F	R	u	m 			
(2.37)
Combining equation (2.37) with (2.2) a linear elastic equation of motion can be
expressed as
 	t	F	Ku	u	m 			
(2.38)
1	
R
1	2 R	R 
m
m	u
)	(t	F
u	m 
R
(a) (b)
u
m2	3 R	R 
Figure 2.23 a) Rigid body undergoing undamped forced vibration b) forces acting
on the rigid body.

-- 35 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
20
2.5 Plate theory
2.5.1 Introduction
A plate is a flat body with a relatively thin thickness compared to its length and width.
The bending properties of the plate depend strongly on its thickness compared to the
size of the flat area. According to Timoshenko (1959) the plates are divided into three
different sub categories: thin plates with small deformations, thin plates with large
deformations and thick plates. The slabs studied in this master thesis will have a
relatively small thickness compared to its other dimensions and the deformations will
be relatively small. Therefore, the slab can be assumed to have the same behaviour as
a thin plate with small deformations. In this chapter and further on, only theory of thin
plates with small deformations will be presented. However, the structural behaviour of
plates is rather complex and will in some extent be simplified.
2.5.2 Elastic behaviour
If the plate is studied from the side it will have the same deformation shape as a beam.
By combining the two beams in different directions the final shape for the elastic plate
is established. To easier be able to calculate the deformations it is assumed that the
plate has a sinusoidal shape, Timoshenko (1959). The deformations along the plate
can then be expressed as
max	
)	/	sin(	)	/	sin(	)	,	( u	l	y	w	x	y	x	u 		
	
		
(2.39)
where w is the width, x is the width coordinate, l is the length, y is the length
coordinate and umax is the maximum deformation, i.e. the deformation in the middle
of the plate, see Figure 2.24.
l
w
x	y
umax
umax
Figure 2.24 Elastic deformation for a plate.
The maximum deformation for a simply supported plate with uniformly distributed
load is, according to Timoshenko (1959), equal to

-- 36 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 21
 





	











1 1
2
2
2
2
2
1
2
6	max
)	1	(	16
m n
n	m
l
n
w
m
mn
D
q
u
	
(2.40)
where q is a uniformly distributed load, m and n are an odd series as m=1,3,5…
n=1,3,5… and D is the flexural rigidity of a plate defined as
2
1	
	
 EI
D	
(2.41)
where ν is the Poisson’s ratio and I is the moment of inertia per meter .
2.5.3 Plastic behaviour
2.5.3.1 Method
The plastic behaviour of the plate is here described according to the yield line method
in Hultin (1983). This method is a so called upper bound approach, meaning that it’s
an upper limit for the capacity of the plate and hence, an upper limit for the
deformations.
2.5.3.2 Yield line figure
The plastic behaviour will start when the yield limit is reached for the most stressed
fiber in the plate and a hinge is formed. For a rectangular plate with uniformly
distributed load this will happen in the middle. The hinge will then spread along a
yield line and eventually branch off to the corners. When the hinge lines reaches the
corners a mechanism is formed and the full capacity of the plate is reached, see
Figure 2.25.
(a) 	(b) 	(c)
Figure 2.25 a) A hinge is formed in the middle b) The hinge is spreading along the
yield line c) The yield line branches off to the corners and a
mechanism is formed.
The assumed yield line figure must be kinematic possible, meaning that the different
plate portions divided by the yield lines must fit together when the plate deflects. This
criterion is fulfilled as long as the yield line between two slab portions or the yield
lines extension passes through the intersection of the rotation axes for the two slab
parts. The principle is illustrated for Figure 2.25c. The yield line in the corner between

-- 37 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
22
slab portions 1 and 2 will pass through the intersections of the rotation axes A-A and
B-B, see Figure 2.26a. The same can be said for all yield lines in the corners.
However, the yield line in the middle is an exception. Since it is parallel to its rotation
axes, A-A and D-D, either the rotation axes or the yield line will intersect. One way to
bypass this is by extending the axes and line to eternity. This will create an optical
illusion that the axes and line will intersect, see Figure 2.26b.
2
1 	3
4
A-A
B-B 	C-C
D-D
(a) 	(b)
Figure 2.26 Criterion for the yield line method (a) The corner yield lines passes
through the intersection of the affected rotation axes (b) By letting the
axes and line extend to eternity an optical illusion will arise that the
axes intersect the line.
A phenomenon that can arise in the plate corners is the so called corner demerging.
What happens then is that the corners of the plate rises above their support, resulting
in a split of the corner yield line into two lines, see Figure 2.27. However, according
to Hultin (1983) this phenomenon has a very small impact on four sided plates with
uniformly distributed loads and is therefore here neglected.
Yield line
(a)
(b)
Figure 2.27 (a) Yield line figure according to yield line theory (b) yield line figure
with corner demerging.

-- 38 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 23
2.5.3.3 Maximum load capacity
When a yield line figure has been established the maximum capacity for the plate can
be calculated with either equilibrium equations or with the virtual work principle.
The internal virtual work for the slab is
i	i	i	i l	M	W	
			
(2.42)
where Mi is the moment, li the length of the affected yield line and θi is the angel
between the undeformed and deformed shape, see Figure 2.28. Since the deformations
are small the angel can be calculated to
x

 	1	
(2.43)
y

 	2	
(2.44)
where δ is the deformation for the plate.
x
y
θ1
θ 2
θ 1+ θ 2
Yield line
M
δ
Figure 2.28 Yield line figure for a simply supported one-way plate.
The external virtual work done by the load is
	 i	TP	i	i	e A	q	W .	
	
(2.45)
where δTP,i is the deformation in the centre of gravity for each part.
By setting the internal work equal to the external work (Wi = We) the maximum
uniformly distributed load on the plate can be calculated to


i	TP	i
i	i	i
A
l	m
q
.	


(2.46)

-- 39 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
24
2.6 SDOF system
When considering a beam or a slab it can be of interest to reduce the entire structure
to a single degree of freedom system (SDOF), i.e. describing the behaviour of a
system in one point. This will simplify the structure and make it easier to calculate its
response. In Figure 2.29 an illustration of the transformation concept for both a beam
and a slab is presented.
e	
R
q(x,y,t)
q(x,t)	e	
R
e	
m
Fe(t)
e	
m
Fe(t)
Figure 2.29 Concept of transforming a beam and a slab to a SDOF system.
The SDOF-system has one dimension and is therefore prevented from movements in
other undescribed directions. For a multi degree of freedom system (MDOF), as the
beam and slab, there are three-dimensions resulting in 3 directions where the body is
able to move.
It is possible to reduce a MDOF-system to a SDOF-system which describes the
response of the structure in one point called the system point, see Figure 2.30. It is
also possible to choose position of the system point anywhere, but it is often of
interest to place this point where maximum deformation occurs.

-- 40 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 25
Figure 2.30 System point in the middle of (a) a simply supported beam (b) a simply
supported slab.
In order to reduce the beam or the slab to a SDOF-system a deflection shape of the
structure has to be assumed. Here, the assumed deflection shape for linear elastic case
is chosen from elementary cases as the first eigen mode and for the plastic case a
mechanism form is used for the deflection shape, see Figure 2.31.
(a) Linear elastic case for beam 	(b) Plastic case for beam
(b) Plastic case for slab	(a) Linear elastic case for slab
Figure 2.31 Assumed mode shapes for elastic and plastic material.
Now when the deformation shapes are established the equation of motion can be
calculated as
)	(t	F	R	u	m 			
(2.47)
System point
(a) Beam
(b) Slab

-- 41 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
26
where m is the total mass for the untransformed body, ü is the acceleration, R is the
internal force and F(t) is the external force acting on the untransformed body. The
untransformed MDOF body has a different physical behaviour than a SDOF-system
which is assumed to have a rigid body. To solve this problem so called transformation
factors are added to each quantity so the equivalent quantities in the SDOF-system
equal the quantities in the untransformed body. The definition of the transformation
factors for each quantity is
m
m e
m 
		
(2.48)
R
R e
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
where the index e is for the equivalent body (SDOF) and without an index is for the
untransformed body. Inserting equations (2.48) to (2.50) into (2.47) the equation of
motion for a transformed body, i.e. a SDOF-system as the beam or slab, can be
written as
By dividing all terms with κF the equation can be rewritten as
According to Biggs (1964) the relation between κK and κF is
and together with a new transformation factor defined as
the equation of motion can finally be expressed as
)	(t	F	R	u	m F	K	m	

	
	 			
(2.51)
)	(t	F	R	u	m
F
K
F
m 	



 	
(2.52)
F	K	

	 	
(2.53)
F
m
mF


 	
(2.54)
)	(t	F	R	u	m	mF 			
	
(2.55)

-- 42 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 27
3 Beams
3.1 Introduction
A beam can be seen as a one way slab, i.e. a slab with supports and reinforcement in
one direction. Therefore, as an introduction to slabs, beams and their behaviour under
impulse load is briefly studied. From previous master thesis by Nyström (2006)
simplified models and FE-analysis to describe the response of the beam have been
established and a short summery is presented in this chapter. Special attention is given
to the plastic and elastoplastic cases, which has given a large divergence between the
FE-analyses, equation of motion and hand calculations for the previous master thesis
Ek and Mattsson (2010).
3.2 Response of beams subjected to impulse load
The response of a beam subjected to a uniformly distributed impulse load is illustrated
in Figure 3.1. The impulse load has a triangular shape as shown in Figure 2.4b.
Figure 3.1a shows the response when the impulse load is zero and the beam is
unloaded. Figure 3.1b shows the response of the beam subjected to the impulse load
when the load has reached its peak and the beam has just started to deform. It may be
noted here that the maximum deformation is not in the centre. This is because the
wave velocity is about 3500 m/s in longitudinal direction for concrete and the middle
of the beam is not yet aware of the existence of any supports. One way to describe this
phenomenon is to look at it as transport of information. When the impulse hit the
beam, information of the load will spread through the beam with the velocity of 3500
m/s. The information will travel through the beam and when reaching the two
supports it will turn back with this information to the rest of the beam again, see
Figure 3.2.
Figure 3.1 Response of beam at different time.

-- 43 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
28
Figure 3.2 Transportation of load through a beam.
This means that if the beam is 2.7 m long and the impulse is a characteristic impulse
with an infinite small duration, see Figure 2.18, it will take about 0.39 ms
((2.7/2)/3500) for the supports to be aware of the entire load. After this the
information will spread through the beam again making it deform accordingly to the
boundary condition between the beam and the support. So, in Figure 3.1c the
information has gone further through the beam but the information about the full load
has still not reached the middle of the beam. Finally, in the last picture, the entire
impulse has reached the middle of the beam resulting in the maximum deformation
which has the same appearance as a statically loaded beam. This happens after 0.78
ms when the information has travelled another 1.35 m (2.7/2). It can further be
pointed out here that the maximum deformation happens after the impulse has ended.
The deformation in different points along the beam can be seen in Figure 3.3 where
point 1 - 3 are located as shown in Figure 3.1. Figure 3.3 is illustrative in order to get
a better understanding on how the impulse loaded beam behaves. It is a clear
difference in behaviour from a statically loaded beam to an impulse loaded beam. The
deformation for each point is similar to each other in the initial part, see Figure 3.4, of
the impulse and will then increase almost sinusoidal.
Figure 3.3 Deformation in different points along the impulse loaded beam.

-- 44 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 29
Figure 3.4 Deformation in different points along the beam in an early stage.
This is however not the case for a statically loaded beam. When applying a load
gradually and slowly, i.e. statically, the deformation can often be simplified with the
form of a half sinus wave from the beginning and until the full load is applied.
However, for the static loaded beam the curvatures in Figure 3.3 will never coincide
with each other, as for the impulse loaded beam. The difference is clearly shown in
Figure 3.5.
Figure 3.5 Deformation in different points along the static loaded beam.
As mentioned in Section 2.4.6 a dynamic load will make the mass, here the beam,
oscillate around its equilibrium point. If no damping is assumed the deformation of
the beam will be the same in both vertical directions. Consequently, when designing a
beam subjected to a dynamic load, in contrast to static case, the dynamic case need to
be designed for maximum displacement in both vertical directions.
In an early stage there is a significant deformation near the supports compared to the
deformation in the mid section of the structure, see Figure 3.6. These deformations
will give rise to large shear stresses which results in a large risk of cracking. However,
although this problem requires more investigation it is outside the limits of this master
thesis and will therefore not be further investigated.

-- 45 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
30
3.3 Equation of motion
3.3.1 Introduction
As mentioned in Section 2.4 it is the energy that can be absorbed by the structure that
is of main interest. This can be calculated by studying a point on the beam where the
maximum deformations occur, i.e. in the middle of the beam. Henceforth this point,
denoted the system point, can be used to transform the beam to an undamped SDOF-
system. According to Section 2.6 the equation of motion is
)	(t	F	R	u	m	mF 			
	
(3.1)
where m, R and F(t) are properties of the untransformed beam and κmF is the
transformation factor that is based on a division between the transformation factors κm
and κF as
F
m
mF


 	
(3.2)
3.3.2 Transformation factor for the mass κm
The transformation factor for the mass is derived based on the requirement that the
kinetic energy for the untransformed beam is the same as the kinetic energy for the
point in the SDOF-system. The kinetic energy for an untransformed beam and SDOF-
system can then be expressed as





l	x
x
beam
k dx
x	v	x	m
E
0
2
2
)	(	)	('
(3.3)
2
2
s	e	SDOF
k
v	m
E 	
(3.4)
Where m’(x) is the mass per unit length, vs is the velocity in the system point and me is
the equivalent mass.
The velocity in both cases can be written as
Zones with risk of cracking
Figure 3.6 Zone where there is a high risk of cracking in the early stage. From
Nyström (2006).

-- 46 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 31
dt
x	du
x	v )	(
)	( 	
(3.5)
dt
du
v s
s 	
(3.6)
Combining equations (3.3) to (3.6) with the requirement of equal kinetic energy for
both systems results in the equation



	
l	x
x
s	e dx	x	u	x	m	u	m
0
2	2 )	(	)	('	
(3.7)
Thus, the equivalent mass me can be expressed as
m	m m	e	
		
(3.8)
and together with equation (3.7) and (3.8) the general equation for the mass
transformation factor can be stated as
2
0
2
)	(	)	('
s
l	x
x
m
mu
dx	x	u	x	m	




	
(3.9)
When considering a case when the mass along the beam is constant the equation (3.9)
can be rewritten with
l	m	m '		
(3.10)
to be
2
0
2
)	(
1
s
l	x
x
m
u
dx	x	u
l




	
(3.11)
3.3.3 Transformation factor for the load κF
The same principle is used for the load as for the mass but here, the untransformed
beam shall absorb the same amount of external work as the SDOF-system. The
external work done by a static external load for an untransformed beam and a SDOF-
system is



	
l	x
x
beam
e dx	x	u	x	q	W
0
)	(	)	(	
(3.12)
s	e
beam
e u	F	W 	
(3.13)

-- 47 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
32
As defined in Section 2.6 the equivalent load for the SDOF-system is
F	F F	e	
		
(3.14)
By using equations (3.12) to (3.14) and the requirement of equal external work for
both systems the expression for the transformation factor can be written as
s
l	x
x
F
Fu
dx	x	u	x	q	



 0
)	(	)	(

(3.15)
When considering a case where the load along the beam is constant the
equation (3.15) can be rewritten together with
ql	dx	x	q	F
l	x
x
	 

 0
)	(	
(3.16)
to be
s
l	x
x
F
u
dx	x	u
l



 0
)	(
1

(3.17)
3.3.4 Examples of tabulated transformation factors
The transformation factors for beams are not derived in this master thesis since the
emphasis of this project is to study the plate. Instead, examples of tabulated
transformation factors collected from Johansson and Laine (2009) are presented in
Table 3.1 and Table 3.2.
Table 3.1 Tabulated transformation factors for distributed load. From Johansson
and Laine (2009).
Uniformly distributed load
Deformation curve elastic case
m	
	
0.504 0.406 0.483 0.257
F	
	
0.640 0.533 0.600 0.400
mF	
	
0.787 0.762 0.805 0.642
Deformation curve plastic case

-- 48 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 33
m	
	
0.333 0.333 0.333 0.333
F	
	
0.500 0.500 0.500 0.500
mF	
	
0.667 0.667 0.667 0.667
Table 3.2 Tabulated transformation factors for point load. From Johansson and
Laine (2009).
Point load
Deformation curve elastic case
m	
	
0.486 0.371 0.445 0.236
F	
	
1.000 1.000 1.000 1.000
mF	
	
0.486 0.371 0.446 0.236
Deformation curve plastic case
m	
	
0.333 0.333 0.333 0.333
F	
	
1.000 1.000 1.000 1.000
mF	
	
0.333 0.333 0.333 0.333
3.3.5 Solving the equation of motion
The equation of motion can be solved analytically. However, this may be a very time
consuming solution depending on what case is studied. Another way to solve it is by
using numerical solution methods. Such methods are approximate but will, correctly
handled, give a result close to the analytical methods. In this master thesis the “central
difference method” is used together with the software Matlab. This method is an
explicit method, meaning that the new calculated value is based on the previous time
step value. The algorithm for this method is adopted from Johansson and Laine (2009)
and is presented in APPENDIX A.
3.4 Hand calculation
As in the equation of motion model the hand calculations can be based on the SDOF-
system and the information of energy balance. It is important to know that the hand
calculation model is only to be used in the preliminary design to get a rough
estimation of the response for the structural element. Even though simple, it may still
be very useful in order to get an estimate of the final response of the structure.

-- 49 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
34
The capacity of the beam is decided by how much the beam can deform before it
collapses. From Section 2.4.5 the deformations can be calculated as
m	k
I
km
I
u
mF
c
e
c
el

		
(3.18)
for an elastic material,
m	mF
c
m	e
c
pl
mR
I
R	m
I
u
	2	2
2	2
		
(3.19)
for a plastic material, and
pl	ep	el	ep	ep u	u	u .	. 		
(3.20)
for an elastoplastic material where
k
R
u el	ep 	.	
(3.21)
and
2
.
.
el	ep
pl	pl	ep
u
u	u 		
(3.22)
3.5 FE-analysis
3.5.1 Restrictions
The finite element (FE) analysis is carried out in the software ADINA. 2-D beam
elements will be used in order to simplify the analysis. The reinforcement and
concrete is modelled as an equivalent material. Because of this, some special cautions
have been made. The following Sections describe the modifications made in order to
model the reinforced concrete.
3.5.2 Cracked elasticity modulus
In the uncracked state the reinforcement have almost no effect at all and the beam can
be modelled as a solid concrete beam. However, when the beam is in the cracked state
the reinforcement have a large impact and need to be considered. To capture the
stiffness for the cracked reinforced concrete a new Young’s modulus has been
calculated as
I
I
II
II E
I
I
E 	
(3.23)

-- 50 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 35
where EI, II and EII, III is the Young’s modulus and moment of inertia for uncracked
and cracked state, respectively. Note here that this is only done in order to capture the
stiffness of the equivalent material and that Young’s modulus in reality is constant.
3.5.3 Choice of material responses in different sections
The only difference between the plastic and elastoplastic case is the choice of
Young’s modulus. The ideal plastic material shown in Figure 2.9 cannot be modelled
in ADINA. Instead, the Young’s modulus has been multiplied with 100 times the
uncracked stiffness which will result in a response that is close enough to the ideal
plastic case. For the elastoplastic case the stiffness is chosen to be the same as in the
cracked state and can be calculated according to (3.23). This assumption will result in
a larger deformation than if the bilinear model of both uncracked and cracked
modulus would have been used.
The earlier Master theses, Nyström (2006) and Ek and Mattsson (2010), have
modelled the beam with a plastic or elastoplastic element in the middle and elastic
elements in the rest of the beam. The problem with such modelling is that when the
middle element plasticises the elastic elements will start to oscillate on each side of
the plasticised element as shown in Figure 3.7. This is believed to be one of the
reasons why the earlier Master theses, Nyström (2006) and Ek and Mattsson (2010),
have found a divergence between FE-analysis and the calculations based on the
equation of motion. To avoid this problem here, all the elements will be modelled as
plastic or elastoplastic depending on which case is of interested.
Figure 3.7 The elastic element oscillates on each side of the plastic element.
3.5.4 Element integration points
In this master thesis, compared to previous master thesis, there has been an interest of
changing the ultimate moment capacity from a shape of nearly ideal plastic to a shape
where yielding in the outer fibers is the limit, see Figure 3.8. Previous studies by Ek
and Mattsson (2010) with 7 integration points over the height showed that the output
moment capacity was not equal to the expected moment capacity. The change of the
shape of ultimate moment capacity to 3 integration points is done in order to get the
expected moment capacity.
Plastic
element

-- 51 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
36
(b)	(a)
stress	stress
Figure 3.8 The Stress distribution over the height of the beam for (a) 7integration
points (b) 3 integration points.
Since the FE-model is simplified to a homogenous and isotropic material there is a
need to calculate a so called fictitious yield stress. This fictitious yield stress will be
inserted in ADINA to get the same material response as the reinforced concrete beam.
From basic equations a required moment capacity, Mrd, can be calculated and with
this information the fictitious yield stress f’y can be expressed as
rd
el
y
M
W
f 	'	
(3.24)
where Wel is the elastic bending resistance, for a stress distribution shown in
Figure 3.8b, may be expressed as
6
2
wh
W el 	
(3.25)
The integration method, Newton-Cotes, is here chosen for the stiffness matrix in the
FE equations. This choice is done because the positions of the outer integration points
are located in the edge fibers in the height direction of the element, and the limit for
the yield stress is located at the outmost fibers. The positions of the integration points
in Newton-Cotes can be seen in Figure 3.9. This method is default in ADINA when
using beam elements.
1
2
3
h
Figure 3.9 The position of the integration point in height direction for the Newton-
Cotes method.

-- 52 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 37
It is of importance to choose 2D-beam elements when using 3 integration points due
to limitations in the software program ADINA. Otherwise, when choosing 3D-beam
elements, ADINA automatically sets to 7 integration points.
3.6 Example
3.6.1 Scenario
A charge of 125 kg TNT detonates on a distance of 5 m from a building resulting in
an impulse load of 2800 Ns/m2, with a maximum peak pressure of 5000 kPa, hitting
one of the building sides. The building is a multi-story building with a height of 2.7 m
for each floor. The wall facing the explosion is a reinforced concrete wall with a
cross-section as shown in Figure 3.10. The concrete is of quality C20/25 and the
reinforcement is in class B500. Will the wall be able to resist the explosion?
The control will be made for four cases – uncracked (state I), cracked (state II), ideal
plastic (state III) and the elastoplastic case which is the case most accurate to reality.
3.6.2 Assumptions and simplifications
 The load is assumed to be triangular and uniformly distributed over the entire
wall.
 There are no windows or other irregularities in the wall.
 The connection wall to slab is free to rotate and the wall is not continuous over
the floor slabs.
 The supports are rigid.
 The wall is simplified to a beam with only supported at two opposite sides.
With these assumptions the wall can be simplified to a 2.7 m long simply supported
beam with a wide per unit length, i.e. a width of 1 m, see Figure 3.11.
Figure 3.10 Cross-Section of the studied wall.
m	35	.	0		h
s	
A	
-
5Φ16
m	31	.	0		d
s	
A 	
-
5Φ16
l = 2.7 m w = 1.0 m
Figure 3.11 Dimensions of the wall.

-- 53 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
38
This system can then be simplified further to the SDOF-system described in
Section 2.6. Note here that the equation of motion for the SDOF-system is
)	(t	F	R	u	m	mF 			
	
(3.26)
which means that only the mass needs to be transformed to an equivalent quantity
while the stiffness and load will remain the same.
3.6.3 Transformed mass
The total mass of the beam is
kg	2268	7	.	2	35	.	0	0	.	1	2400 								 l	h	w	m	
	
(3.27)
This will then be modified with the factor κmF, which depends on the boundary
conditions, typ of load and if the beam has an elastic or plastic response. According to
Table 3.1 κmF is
788	.	0	,	, 	 II	mF	I	mF	

		
(3.28)
for the elastic cases and
667	.	0	, 	III	mF	
	
(3.29)
for the plastic and elastoplastic cases, and the equivalent mass will finally be
kg	1787	2268	788	.	0	, 					 m	m	m I	mF	II	I	
	
(3.30)
kg	1512	2268	667	.	0	, 				 m	m III	mF	III	
	
(3.31)
3.6.4 Stiffness and internal resistance
The deformation of a simply supported beam subjected to an uniformly distributed
load is according to Johannesson and Vretblad (2005) equal to
EI
ql
u
4
348
5 		
(3.32)
which will give the stiffness
3
5
384
l
EI
u
ql
u
Q
k 				
(3.33)
The moment of inertia for the uncracked beam is approximately
4	9
3	3
mm	10	57	.	3
12
350	1000
12 	

	 wh
I I	
(3.34)

-- 54 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 39
where w and h is the width and height of the beam. The moment of inertia for the
cracked beam is determined approximately, i.e. assuming pure bending and neglecting
the effect of the top reinforcement. The equation is
2
3
)	(
3 x	d	A
wx
I s	II 		
		
(3.35)
where x is the height of the compressed zone, α is the ratio between the Young’s
modulus for the reinforcement and concrete as
7	.	6
30
200 		
c
s
E
E
	
(3.36)
As is the amount of reinforcement
2	16
mm	1005
200	.	0
201 		 s
A
As

(3.37)
and d is the effective height
mm	310	40	350 				 c	h	d	
(3.38)
The height of the compressed zone can now be expressed with help of equilibrium
s
s
A	wx
d	A
x
wx
x




 2	
(3.39)
and can be rearranged to
 	 0
2	2 		 d	x
w
A
x s	

(3.40)
The equation (3.40) is solved to
mm	58
1000
310	1005	7	.	6	2
1000
1005	7	.	6
1000
1005	7	.	6	2
2
2

		
	




 


			





		 w
d	A
w
A
w
A
x s	s	s	

	
	
(3.41)
and inserting this in (3.35) gives
 	 4	8	2
3
mm	10	8	.	4	58	310	1005	7	.	6
3
58	1000 					

	II	
I	
(3.42)
The ratio between the uncracked respectively cracked moment of inertia is

-- 55 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
40
438	.	7		
II
I
I
I
	
(3.43)
Finally, the stiffness for an uncracked and a cracked beam can be calculated as
N/m	10	2	.	4
2700
10	57	.	3	10	30
5
384 8
3
9	3
	
		
		I	
k	
(3.44)
N/m	10	6	.	5
2700
10	8	.	4	10	30
5
384 7
3
8	3
	
		
		II	
k	
(3.45)
When the plastic case is studied the deformation of the beam is no longer following
the elastic deformation shape and the stiffness is of no importance. Instead, it is the
internal resistance which is of importance and it can be calculated by setting the
moment capacity equal to the maximum field moment. The moment capacity for a
rectangular beam is
 		x	d	A	f	M s	y	rd	
			
(3.46)
where fy is the yield stress for the reinforcement and β is a stress block factor from
Eurocode 2 CEN (2004). The height of the compressed zone x is calculated as
mm	31
1000	20	81	.	0
1005	500 
	

	 w	f
A	f
x
cc
s	y

(3.47)
where fcc is the concrete compression strength and α is another stress block factor
from Eurocode 2 CEN (2004). Equation (3.46) together with (3.47) gives the final
moment capacity as
kNm	150	)	31	416	.	0	310	(	1005	500 						rd	
M	
(3.48)
The maximum field moment for a simply supported beam is
8
2
ql
M fd 	
(3.49)
where q is a static load and together with equation (3.48) the internal resistance can be
calculated to
kN	444
7	.	2
150	8	8 

		 l
M
ql	R rd
(3.50)
For the elastoplastic case the stiffness of the elastic part is approximated to correspond
to that of the cracked state. This will give a larger deflection than in reality and is
therefore on the safe side, see Figure 3.12. When the ultimate internal resistance R is
reached the material will enter the plastic state and start to yield.

-- 56 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 41
R
u
”Real”
Assumed Assumed
”Real”
u”Real” uAssumed
Figure 3.12 Assumed elastoplastic material response.
3.6.5 Required deformations
The total impulse load that acts on the beam is
Ns	7560	2800	7	.	2	0	.	1 						 i	l	w	I	
(3.51)
The elastic deformation is then calculated as
mk
I
u el 	
(3.52)
which gives
for the uncracked state
mm	7	.	8
10	2	.	4	1787
7560
8

	
	I	
u	
(3.53)
and for the cracked state
mm	9	.	23
10	6	.	5	1787
7560
7

	
	II	
u	
(3.54)
The plastic deformation is given by
Rm
I
u pl
2
2
	
(3.55)
and with current indata
mm	6	.	42
1512	10	444	2
7560
3
2

		
	III	
u	
(3.56)

-- 57 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
42
For the elastoplastic material the elastic part will add additional resistance and
therefore less plastic deformation is needed. The maximum elastic deformation is
calculated as
mm	9	.	7
10	6	.	5
10	444
7
3
. 


	 k
R
u II	ep	
(3.57)
and the plastic reduction will therefore be
mm	0	.	4
2
.
		 II	ep
III
u
u	
(3.58)
This will give the plastic deformation
mm	6	.	38	0	.	4	6	.	42	. 					 III	III	III	ep u	u	u	
(3.59)
and the total elastoplastic deformation can be calculated to
mm	6	.	46	7	.	38	9	.	7	.	. 				 III	ep	II	ep	ep u	u	u	
(3.60)
3.6.6 Equivalent static load
The equivalent static load is a static load that gives the same deformations as the
impulse does. For structural engineers, it can be used to give a better understanding
for the loads acting on the structure since they are more experienced with static loads
and have developed a “feeling” for them.
The impulse is uniformly distributed so the equivalent static load will also be
uniformly distributed. From equation (3.50) it can be calculated to
l
R
q e 	
(3.61)
So for a beam with elastic response the equivalent static load is
l
ku
l
R
q el
el 		
(3.62)
which for the uncracked state gives
kN/m	1353
7	.	2
10	7	.	8	10	2	.	4 3	8

		


el	
q	
(3.63)
and for the cracked state
kN/m	496
7	.	2
10	9	.	23	10	6	.	5 3	7

		


el	
q	
(3.64)
For a beam with a plastic response the equivalent static load can be calculated as

-- 58 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 43
l
R
q pl 	
(3.65)
and with current indata
kN/m	164
7	.	2
10	444 3


	III	
q	
(3.66)
With the equivalent static loads and equation (3.49) the maximum field moments can
be calculated to
kNm	1233
8
7	.	2	1353 2


	I	
M	
(3.67)
kNm	452
8
7	.	2	496 2


	II	
M	
(3.68)
kNm	149
8
7	.	2	164 2


	III	
M	
(3.69)
It should be noticed that an assumed elastic response results in high demands on the
moment capacity for the structure.
3.6.7 Maximum deformation capacity
For the elastic case there are no limits for the deformation capacity and therefore such
a control is not necessary. Instead the maximum field moment, calculated from the
equivalent load, is compared with the load capacity of the beam, i.e. the beam is
controlled as a normal static case with the equivalent load as a uniformly distributed
load. However, for the plastic case the rotation capacity will be the limiting factor for
the beam and a deformation control according to Eurocode 2 CEN (2004) is therefore
carried out.

-- 59 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
44
According to Johansson and Laine (2009) the diagram in Eurocode 2 CEN (2004), see
Figure 3.13, can be used for impulse loaded structures.
x / d
pl [10 -3 rad]
betong-
krossning	avsliten
armering
Crushing of
Concrete
Steel
Ripped off
Ripped off
Figure 3.13 Diagram from Eurocode 2 CEN (2004) showing plastic rotation
capacity. From Johansson and Laine (2009).
The diagram can only be used for concrete quality lower than C50/60 if
45	.	0	
d
x
(3.70)
and with current indata
45	.	0	1	.	0
310
31 		
d
x
(3.71)
this is okay.
The diagram is only accurate if the shear slenderness λ=3.0, for other values the
rotation capacity should be multiplied by a factor
3

 	k	
(3.72)
where λ is
d
x 0	

		
(3.73)
and x0 is the distance between the maximum moment and the zero moment, see
Figure 3.14.

-- 60 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 45
x0
Plastic hinge
Figure 3.14 Simply supported beam showing distance x0.
For this example when the beam is simply supported the shear slenderness is
35	.	4
310
2	/	2700	2	/	0 			 d
l
d
x
	
(3.74)
and the rotation capacity should be multiplied with a factor
2	.	1
3
35	.	4 		
	k	
(3.75)
So with a concrete quality of C20/25, the reinforcement in class B and the x/d = 0.1
the plastic rotation capacity is according to Figure 3.13
rad
3
10	11 
	
		
(3.76)
and with the kλ factor the plastic rotation is
rad	k	pl
3	3 10	2	.	13	2	.	1	10	11 	 							
	

		
(3.77)
Now the maximum deformation capacity for the beam can be calculated to
mm	8	.	17
2
7	.	2	10	2	.	13
2
3

	




l
u rd

(3.78)
3.6.8 Results
The required deformation for the plastic and elastoplastic case is almost the double of
what the beam can deform; i.e. the wall will not be able to resist the explosion. It will
first crack, and then plasticise and when the rotation exceeds the capacity the wall will
finally collapse. Since the plastic state is reached the elastic state has been passed and
the elastic case does therefore not need to be controlled.
The deformation against time for the elastic material is plotted in Figure 3.15 for the
different calculation methods. As can be seen the elastic analyses coincide very well
in between the different methods. However, this is not the case for the plastic and
elastoplastic analyses as shown in Figure 3.16 and further discussion on this subject is
done in Section 3.7.

-- 61 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
46
(b)
(a)
Figure 3.15 Deformations over time for (a) uncracked case (b) cracked case.

-- 62 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 47
(b)
(a)
Figure 3.16 Deformations over time for (a) plastic case (b) elastoplastic case.
Figure 3.17 shows the relation between force and deformation for the two cases;
elastic and plastic. The area under the curves is equal to the executed work and should
be the same for both the internal and external work.

-- 63 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
48
(a)
(b)
(c)
Figure 3.17 The relation between force and deformation for (a) uncracked case (b)
cracked case (c) plastic case.
The internal work is calculated from the Figure 3.17 to

-- 64 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 49
kJ	8	.	15
2
10	7	.	8	10	5	.	3629 3	3
. 
		


iI	
W	
(3.79)
kJ	0	.	16
2
10	6	.	23	10	4	.	1354 3	3
. 
		


i	II	
W	
(3.80)
kJ	9	.	18	10	7	.	42	10	5	.	442 3	3
. 				 
i	III	
W	
(3.81)
The work for the plastic case has a higher value. This is because the effective mass is
lower for the plastic case, compare equation (3.30) and (3.31), and will therefore be
easier to set into motion, resulting in a larger external work. The external work is, for
a characteristic impulse load, defined in Section 2.4.5 to
m
I
W c
e
2
2
	
(3.82)
and with current indata
kJ	0	.	16
1787	2
7560 2
.	, 

	e	II	I	
W	
(3.83)
kJ	9	.	18
1512	2
7560 2
. 

	e	III	
W	
(3.84)
which is the same as the internal energy for each case. The work against time is
plotted in Figure 3.18 for elastic and plastic response. When the external work equals
the internal work the maximum deformation is obtained.

-- 65 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
50
.
(a)
(b)
Figure 3.18 The relation between work and time for (a) elastic cracked case (b)
plastic case.
As can be seen the hand calculations differs from the equation of motion calculations
for the plastic case. This is because the hand calculations are based on the fact that the
load has a characteristic form as shown in Figure 2.18, but in this example the load
has been assumed to be triangular. The same problem arises for the elastic case, but
here the difference is much smaller. One way to determine this error is by using so
called damage curves, which is based on the knowledge that the divergence depends
on the force F(t) and the angular frequency ω for the elastic case and the force F(t)
and internal resistance R for the plastic case. Deeper studies on this subject will not be
carried out here but instead the reader is referred to Johansson and Laine (2009).
3.7 Comments to divergence between analysis
3.7.1 Elastic response
When using linear elastic material in the different models there is not any significant
difference between the results from SDOF and FE-model, as can be seen in

-- 66 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 51
Figure 3.15. It can be stated that the assumed deformation shape, see Figure 3.19,
when deriving the transformation factor κ for linear elastic material is a good
assumption. One minor difference is the somewhat unsmooth response in the FE-
analysis compared to the smooth response in the SDOF-analysis. This difference
arises because ADINA considers higher order of eigenmodes while the SDOF-model
only considers one mode.
Figure 3.19 Deformation shape when using linear elastic material.
It is also observed that there is a phase shift between the results from SDOF-analysis
and FE-analysis. The reason for this phase shift is unknown, but a control of the
eigenfrequencies for the two different models shows that they are the same.
3.7.2 Ideal plastic response
The difference between the FE-analysis compared to the hand calculations or the
SDOF analysis is rather large for the ideal plastic material behaviour, about 5 and 14
percent, as can be seen in Figure 3.20. The difference between the SDOF- and hand
calculation model depends on the assumption about a characteristic impulse load in
the hand calculations and is described in Section 2.4.5.1.
(a)
Figure 3.20 Deformations over time for plastic case.
The reason for the divergence between SDOF- and FE-analysis is believed to depend
on the assumed deformation shape used when deriving the transformation factor κ, see
Figure 3.21. In the derivation of the SDOF-model κmF is equal to 0.667, but in the FE-
model the shape changes with time.

-- 67 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
52
Figure 3.21 Deformation shape when using ideal plastic material.
A small comparison study between the models, SDOF and FEM, with three different
loads and time duration has been made for better understanding and illustration of the
problem. The three different cases are chosen to have a pressure of 5000, 2500 and
1000 kPa and time durations of 1.12, 2.24 and 5.60 ms. It should be pointed out that
the total impulse for the three different cases is the same and that the first pressure and
time duration, P=5000 kPa and t1=1.12 ms, are the same as the example done in
Section 3.6. Also, since the impulse intensity is the same, the results from hand
calculations will be analogous.
As mentioned earlier, a large divergence can be seen for the pressure 5000 kPa and
time duration 1.12 ms. The deformation shape for the FE-analysis in early stages is
shown in Figure 3.22 where it is clear that the assumed deformation shape shown in
Figure 3.21 have not yet been formed when the impulse load has ended. Thus, the
assumption used when deriving κmF for the SDOF-model is not correct.
(a) 	(b)
Figure 3.22 Response of beam with P=5000kPa and t1=1.12ms. (a) Deformation
vs. time. (b) Deformation shape along the beam at different time steps
in FE-analysis.
However, when decreasing the pressure and increasing the time duration of the load a
better convergence is reached, as can be seen in Figure 3.23a,c. This is because an
increased load duration give more time for the structure to acquire a response more
similar to that in Figure 3.21 and consequently, the results from the SDOF and FEM
converge towards each other. Note here, that when studying the Figure 3.22b and
Figure 3.23b,d the time t1 is not the same. The time 0.8t1 in Figure 3.22b is equal to
0.4t1 in Figure 3.23b and 0.2t1 in Figure 3.23d.

-- 68 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 53
(a)
(b)
Figure 3.23 (a) Deformation vs. time and deformation shape along the beam at
different time steps for P=2500kPa and t1=2.24ms in FE-analysis.
(b) Deformation vs. time and deformation shape along the beam at
different time steps for P=1000kPa and t1=5.6ms in FE-analysis.
Now when the “real” deformation shape is found for the example in 3.6, it is of
interest to calculate a new transformation factors. This factor will be based on the
deformation shape shown in Figure 3.24, which is a simplification of the shape in
Figure 3.22b.
2
a	l 
2
a	l 
a
Figure 3.24 Modified deformation shape of the beam with ideal plastic material.
The derivation of the new transformation factors for this modified deformation shape
is presented in APPENDIX A. By running SDOF-analysis with a pressure of 5000
kPa and time duration of 1.12 ms together with different length of a, a response close
enough to the FE-analysis is found when a is equal to 0.5 m, see Figure 3.25. This
value corresponds to a transformation factor κmF of 0.771. This indicates that when a
load with short duration is acting on a structure the value of 0.667 for κmF cannot be
used, but a new transformation factor needs to be calculated.

-- 69 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
54
Figure 3.25 Deformation over time for old and new modified transformation factor
for P=5000kPa and t1=1.12ms.
3.7.3 Elastoplastic response
The elastoplastic response of the different models is illustrated in Figure 3.26. The
input data from Section 3.6 is used.
(a) 	(b)
Figure 3.26 Response of beam with P=5000kPa and t1=1.12ms. (a) Deformation
over time. (b) Deformation shape for the beam at different time steps in
FE-analysis.
The same study as for the ideal plastic material, Section 3.7.2, with three different
loads and time durations is also carried out here, see Figure 3.27. The reasoning about
the assumed deformation shape is similar to the ideal plastic discussion, i.e. the longer
load duration the closer the two analyses are to each other. However, the deformation
shape here is more developed compared to the ideal plastic case and the difference
between the SDOF-analysis and FE-analysis are smaller.

-- 70 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 55
(c) 	(d)
(a) 	(b)
Figure 3.27 (a) Deformation vs. time for P=2500kPa and t1=2.24ms.
(b) Deformation shape along the beam at different time steps for
P=2500kPa and t1=2.24ms in FE-analysis. (c) Deformation vs. time
for P=1000kPa and t1=5.6ms. (d) Deformation shape along the beam
at different time steps for P=1000kPa and t1=5.6ms in FE-analysis.
The calculation of transformation factors κmF for different stages and with indata taken
from the FE-analysis is done in APPENDIX C. The result is presented in Table 3.3. A
misleading value of the transformation factor is found in the early stage. This is
because the maximum deformation point is not in the chosen system point for the
early stages as was assumed when the transformation factor where calculated.
Table 3.3 Variation of transformation factors from FE-analysis.
us [mm] t [ms] κm κF κmF
2.4 1.11 0.853 0.871 0.979
10 2.81 0.491 0.627 0.783
20 5.51 0.484 0.619 0.782
30 8.31 0.435 0.583 0.747
40 12.4 0.424 0.573 0.739

-- 71 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
56
47.3 20 0.408 0.561 0.728
Another notation is that the value of the transformation factor tends to approach a
mean value between the elastic and plastic transformation factor. However, when
using this mean value a larger divergence is found and the SDOF-analysis gives a
result on the unsafe side.
It is also worth mentioning that the transformation factor κmF used in the SDOF-model
for the elastoplastic material is the same as the ideal plastic transformation factor, i.e.
κmF = 0.667. However, the elastoplastic material is elastic for an amount of time and
should then have a transformation factor κmF equal to the elastic factor, which is
higher. Since a higher value of the transformation factor results in a lower
deformation this could be the reason for why the FE-analysis has a larger deformation
than the SDOF-analysis.
3.7.4 Numerical solution methods
There are two different types of numerical solution methods in the software program
ADINA, the implicit solution method Newmark and the explicit solution method
central difference method. In the example the latter one has been used in the SDOF-
model while the implicit Newmark solution method has been used for the FE-analysis.
Since different solution methods for the SDOF- and FE-model are used it is of interest
to perform a control in ADINA with the different solution methods to see if they
differ.
When using 2D-beam elements there is not a significant difference in the response
between the two solution methods, see Figure 3.28. As can be seen in the figure a
better agreement is found for this example when both the FE-analysis and the SDOF
system use the central difference method.
Figure 3.28 Response between explicit- and implicit solution method with 2D-beam
elements.
In contrast to the 2D-beam elements the 3D-beam elements generates a significant
difference for the two different solution methods, see Figure 3.29. The result when
using the explicit solution method is on the unsafe side, i.e. it tends to overestimate
the response. According to ADINA, the larger difference that arises for 3D-beam

-- 72 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 57
elements depends on that more integration orders are used for the 3D-beam elements
than for 2D-beam elements. Another reason for the difference in the 3D-beam element
analysis is, according to ADINA, that too large time increment in the explicit solution
method is used for a nonlinear analysis. However, this is not the case here since a
control with smaller time increment has been carried out and the same result was
obtained.
Figure 3.29 Response between explicit- and implicit solution method with 3D-beam
elements.
The conclusions that can be drawn from these analyses is that both methods can be
used in ADINA for 2D-beam element analysis while when nonlinear FE-analysis is
carried out with 3D-beam elements it is of importance to choose the implicit solution
method Newmark in order to gain satisfactory results.

-- 73 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
58
4 Slabs
4.1 Introduction
A slab is supported on two supports or more. If the load is carried in one direction it is
classified as a one-way slab and hence, only need reinforcement in this direction. If
the load is carried in two directions it is classified as a two-way slab and will therefore
need reinforcement in two directions. The amount of reinforcement can differ in the
different directions of the slab resulting in a different stiffness and bearing capacity in
these directions.
The behaviour of a one-way slab is similar to the behaviour of a beam described in
Chapter 3. In this chapter, rectangular two-way slabs with constant thickness and
support on all four sides is studied, see Figure 4.1. What should be pointed out here is
that in contrast to the beam studies the parameters of a slab will always be per width
unit, i.e. the parameters is calculated with a width of 1.0 m.
(a) 	(b)
Figure 4.1 Rectangular two-way slabs: (a) fully fixed (b) simply supported.
4.2 Response of slabs subjected to impulse load
The response of the slab subjected to a uniformly distributed impulse load is rather
similar to the response of a beam, but here the slab acts in two directions. The
deformation shape at different stages for the slab is illustrated in Figure 4.2. A strip
located in the middle of the slab in both the short and long direction is taken from the
slab and is coupled together for the same stage.

-- 74 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 59
(a) 	(b)
Figure 4.2 Response of slab subjected to an impulse load at different time.
(a) Short side strip. (b) Long side strip.
The theory on why this deformation form appears is the same as for a beam and is
described in Section 3.2. What can be noticed in Figure 4.2 is that more time is
required for the long side to fully develop the final deformation shape.
The deformation distribution for a slab subjected to a static and impulse load can be
seen in Figure 4.3. Notice that the maximum deformation at an early stage for the
impulse loaded slab is not located in the centre of the slab, as it is for a static load.
However, by studying the development of the deformation along time for the impulse
loaded slab it can be seen that the response approaches the static response.

-- 75 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
60
(a) 	(b)
Static load 	Dynamic load
Figure 4.3 Deformation plots for (a) static load and (b) impulse (dynamic) load.
As can be seen in Figure 4.2 there appears to be large deformations near the supports
in an early stage also for the slab. This will lead to large curvature and high shear
stresses near the supports in the early loading stage with a significant risk of cracks at
the underside of the slab, see Figure 4.4. As mentioned before in Section 3.2 this
problem requires more investigation and it is outside the limits of this master thesis
and will therefore not be further investigated.
Zones with risk of cracking
Figure 4.4 Zone where there is a high risk of cracking at the underside of the slab
in the early stage.

-- 76 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 61
4.3 Transformation from slab to SDOF-system
4.3.1 Introduction
The reduction of a slab to a SDOF system is similar to the reduction of beams. The
equation of motion can be written, according to equation (2.55), as
where
F
m
mF


 	
(4.2)
which is analogous with the beam calculations. However, while the beam could be
assumed to only vary in one direction, i.e. length direction, the slab varies in two
directions, i.e. length and width. This means that another dimension, read variable,
needs to be added for slabs.
4.3.2 Transformation factor for the mass κm
The kinetic energy for a slab and a SDOF-system can then be stated as
 




	


l	y
y
w	x
x
slab
k dy	dx	y	x	m
v	v	m
E
0 0
2	2
)	,	('
2	2
(4.3)
2
2
s	e	SDOF
k
v	m
E 
	
(4.4)
where the velocity is equal to
dt
y	x	du
x	v )	,	(
)	( 	
(4.5)
dt
du
v s
s 	
(4.6)
By combining equation (4.3) and (4.4) with the knowledge of equal kinetic energy
and by using the relations from equation (4.5) and (4.6) the equivalent mass can be
calculated to
 	 








			
l	y
y
w	x
x s
l	y
y
w	x
x s
e dy	dx	y	x	m
u
u
dy	dx	y	x	m
v
v
m
0 0
2
2
0 0
2
2
)	,	('	)	,	('	
(4.7)
The transformation factor for the mass κm is defined as
)	(t	F	R	u	m	mF 			
	
(4.1)

-- 77 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
62
m
m e
m 
		
(4.8)
and the final expression for the mass transformation factor is
 	 








				
l	y
y
w	x
x s
l	y
y
w	x
x s
m dy	dx	y	x	m
u
u
dy	dx	y	x	m
v
v
m 0 0
2
2
0 0
2
2
)	,	('	)	,	('
1
	
(4.9)
By assuming that the mass is constant over the slab, the total mass can be calculated
as
l	w	m	m 		 '	
(4.10)
and the equation (4.9) can then be reduced to
 	 







 
		
	

l	y
y
w	x
x s
l	y
y
w	x
x s
m dy	dx
u
u
l	w
dy	dx	m
v
v
l	w	m 0 0
2
2
0 0
2
2 1
'
'
1
	
(4.11)
4.3.3 Transformation factor for the load κF
The external work for an untransformed slab and a SDOF system is
u	F	W slab
e 		
(4.12)
s	e
SDOF
e u	F	W 		
(4.13)
The total force on the slab is
	





w	x
x
l	y
y
dy	dx	y	x	q	F
0	0
)	,	(	
(4.14)
and the external work for the untransformed slab can then be rewritten to
	




	
w	x
x
l	y
y
slab
e dy	dx	y	x	u	y	x	q	W
0	0
)	,	(	)	,	(	
(4.15)
With the information of equal external work and equation (4.13) and (4.15) the
equivalent force Fe can be expressed as
	




	
w	x
x s
l	y
y
e dy	dx
u
y	x	u
y	x	q	F
0	0
)	,	(
)	,	(	
(4.16)
The transformation factor for the load κF is defined as
F
Fe
F 
		
(4.17)

-- 78 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 63
and together with equation (4.14) and (4.16) the final expression for the load
transformation factor can be calculated to
	
	









 w	x
x
l	y
y
w	x
x s
l	y
y
F
dy	dx	y	x	q
dy	dx
u
y	x	u
y	x	q
0	0
0	0
)	,	(
)	,	(
)	,	(
	
(4.18)
When considering a case with uniformly distributed load the total force on the slab
can be rewritten to
w	l	q	dy	dx	y	x	q	F
w	x
x
l	y
y
			 	



 0	0
)	,	(	
(4.19)
Inserting equation (4.19) into (4.18) the load transformation factor can be reduced to
dy	dx
u
y	x	u
w	l	l	w	q
dy	dx
u
y	x	u
q l	y
y
w	x
x s
l	y
y
w	x
x s
F  
  










	


0 0
0 0 )	,	(	1
)	,	(

(4.20)
4.3.4 Tabulated transformation factors
Due to the complex calculations that arise for slabs, only a few transformation factors
for basic examples have been derived. The elastic factors are derived in APPENDIX
D and the plastic factors are derived in APPENDIX E, the results are presented in
Table 4.1. Note that the transformation factor for the internal force κk is, according to
Biggs (1964), equal to the transformation factor for the load κF and is therefore not
presented here.
Table 4.1 Tabulated transformation factors for a slab.
Uniformly distributed load
Simply supported Fully fixed
Deformation curve elastic case
κm 0.250 -
κF 4/π2 -
κmF 0.617 -
Deformation curve plastic case
κm (1+a/w)/6 (1+a/w)/6
κF (1+a/2w)/3 (1+a/2w)/3

-- 79 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
64
κmF (1+a/w)/(2+a/w) (1+a/w)/(2+a/w)
4.4 Equation of motion
The approach for solving the equation of motion for a slab is very similar to the beam
approach described in Section 3.3. The energy absorbed by the slab can be described
0by studying the maximum deformation that occurs. This will happen in the middle of
the slab for the elastic material and along the yield line in the middle for the plastic
material, see Figure 2.25c. A point in the middle of the slab is chosen to represent the
system point for the undamped SDOF-system. The equation of motion can then be
stated as
)	(t	F	R	u	m b	b	b	mF 			
	
(4.21)
Similar to the beam model the equation of motion will be solved with the “central
difference method” together with the software Matlab. This method is further
described in Nyström (2006).
4.5 Hand calculations
Also here, the approach is very similar to the beam approach. The calculations are
based on energy balance and the SDOF-system with a system point in the middle of
the slab. As for the beam model, these calculations should only be used in preliminary
design. The deformations for the different materials are calculated analogous with the
calculations for the beam. The difference between the models is that different
transformation factors are used and that the maximum internal force will be based on
the yield line theory for the plastic material in the slab model.
4.6 FE-analysis
4.6.1 Restrictions
The FE-analysis is carried out using the software ADINA. The reinforcement and
concrete will be modeled as one homogenous material. The cracked elasticity
modulus and the choice of materials response in different sections of the structure is
the same as for the beam, see Section 3.5 for more information. A slab has a more
complex behaviour than a beam, for example will the Poisson’s ratio influence the
slab stiffness. To have the same conditions as the hand- and SDOF-models some
special arrangements have been made in the FE model.
4.6.2 How to model in ADINA
4.6.2.1 Choice of elements
Shell elements would probably be the most obvious and common choice of element
when modeling a slab. However, when using shell elements in a two-way slab and in
combination with plastic material a biaxial effect will appear that increase the moment

-- 80 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 65
capacity of the slab. To avoid this increased capacity shell elements were not used to
model the slab, instead a grid of beams were used to approximate the slab.
The effect can be described by studying a slab with supports on two opposite sides,
i.e. a one-way slab. Figure 4.5 shows the response of the slab at different stages. The
biaxial effect arises between point 2 and 3. If no biaxial effect appeared this part
would have a constant resistance as the red bilinear response curve in Figure 4.5 has
and hence, a constant reaction force. However, as can be seen there is an inclination
of the curve which increase the bearing capacity of the slab in a way that is not
intended.
2 3
1 Uniaxial stress
Biaxial stress
Figure 4.5 Comparison at different stages for a plastic beam response modeled by
shell elements and subjected to a uniaxial or biaxial stress.
So for point 1 when the slab is elastic and the Poisson’s ratio is set to zero there is
only stresses in one direction, as can be seen in Figure 4.6. This means that there is
zero moment around x-axis, Mx.
ζx 	ζx
y
x
Figure 4.6 Stresses acting on one element in elastic state.
By continuing loading the slab it will enter the plastic stage, point 2 and forward,
where the biaxial effect arises, see Figure 4.7. Here, the moment around the x-axis,
Mx, is no longer zero and stresses arise in the y direction.

-- 81 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
66
ζx 	ζx
y
x
ζy
ζy
Figure 4.7 Stresses acting on one element in plastic state.
The reason for this effect is that the plastic material model used in ADINA is based on
Von Mises plastic theory so no matter if the Poisson’s ratio is set to zero or not, it
automatically sets the poisons ratio to 0.5 in the plastic state. Because of this, a lateral
contraction will take place and the stresses that arise can be calculated with Hooke’s
law.
So instead of using shell elements a model with beam elements in two directions is to
be used, called beam grid. For this to work 3D beam elements in different directions
must be connected with the same nodes at the intersection points, see Figure 4.8.
Beam element x-direction
Beam element y-direction
Intersection point
Figure 4.8 Arrangement of beam elements in slab model.
In this Master thesis, a slab with an area of 5x2.7 m and a thickness of 0.350 m is
studied. The beam grid is then composed by beams with a cross section of
0.135x0.350 and with a distance of 0.135 m between each other, see Figure 4.9. Note
that the width of the slab is 4.995 m. This is due to not exceed the limitation of 900
nodes in the evaluation copy of ADINA and also, to have a quadratic grid, i.e. the
same distance between the nodes in both directions.

-- 82 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 67
l = 2.7 m
w = 4.995 m
0.135 m
0.135 m
0.350 m
Figure 4.9 Arrangement of beam elements in slab model.
4.6.2.2 Element integration points
Previously when studying the beam in Chapter 3, 2D beam elements were used.
However, 2D beam elements cannot be used when the purpose is to model a slab
since a third direction needs to be considered, i.e. 3D beam elements have to be used.
As mentioned in Section 3.5.4 there is a limitation of choice of number of integration
points when using 3D beam elements in the software ADINA. ADINA automatically
sets the number of integration points to seven in 3D beam elements. In earlier reports,
Ek and Mattsson (2010), the stress distribution was expected to have the appearance
as shown in Figure 4.10.
stress	yield
6
h
6
h
6
h
6
h
6
h	6
h
Figure 4.10 Expected stress distribution with seven integration points.
However, this is not the case in ADINA. Instead, ADINA calculates the stress
distribution with a polynomial of order six as shown in figure Figure 4.11.

-- 83 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
68
stress	yield
Figure 4.11 ADINA Stress distribution with a polynomial of order six.
When calculating the moment around the neutral axis for the stress distributions in
Figure 4.10 and Figure 4.11 the latter is 4.2 % lower. Hence, to be able to use the
expected stress distribution shown in Figure 4.10 a modified yield stress,mod
y	
f	 , is to
be used in ADINA. The equation for this modified yield stress is derived in
APPENDIX F and is
2
mod 1
h	w
M
f rd
y



(4.22)
where α is a factor that consider the difference between the two different stress
distributions. Note that equation (4.22) only works for rectangular homogenous cross
sections.
4.6.2.3 Modified elasticity modulus
A problem that arises when using a beam grid is the reduction of the torsional
stiffness. Depending on how fine mesh is used, i.e. how many beam elements each
side has, the reduction will be different. That is, the finer mesh used the larger will de
reduction be. The problem can be described by studying one beam element in each
direction of the slab, see Figure 4.12. If for example the beam in x-direction is loaded
by a uniformly distributed load it will deform as a normal beam. However, since the
beam element in y-direction is connected to the loaded beam in the intersection point
it will add an additional stiffness to the loaded beam, i.e. its torsional stiffness.
Depending on how fine mesh is used, the beam elements will have different widths
and since the torsional stiffness is greatly dependent on the width it will have a larger
stiffness when fewer elements are used.

-- 84 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 69
Beam element y-direction
Beam element
x-direction
Figure 4.12 Studying one beam element in each direction.
Another way to describe the problem is by studying the equations for the torsional and
bending stiffness stated as
)	,	min(	,	)	,	max(
3
1 w	h	b	w	h	a	where	b	a	c	K v 					
(4.23)
12
3
wh
E	EI 		
(4.24)
where c1 is a factor depending on the ratio between the height and width of the cross-
section. Since the bending stiffness is direct proportional to the width there is no
effect on the bending stiffness when dividing the width into smaller parts. However,
the torsional stiffness may be greatly reduced. If for example the width w would be
divided into two elements, the new torsional moment would be
3
1
3	1
3
1
4	2
2 hw	c	hw
c	w
h	c	K v 		





	
(4.25)
To solve this problem the elasticity modulus has been modified as
E	E 	

mod
(4.26)
where α is a factor that is established by controlling that the eigenfrequency and the
deformation are equal to the values from hand calculations. This will give the beam
grid the same total stiffness as the studied slab.
4.6.3 Verification of the model
A static analysis of the beam grid in ADINA has been carried out to verify the model.
Figure 4.13 shows where the model plasticises just before the structure collapses, i.e.
it shows the maximum plastic strain in the two different directions which are parallel
to the sides. As can be seen there are some difference compared to the yield line
model, see Figure 2.25c, used in hand and SDOF calculations.

-- 85 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
70
In difference with the yield line figure the plasticised area is much larger for the FE-
model. The difference depends on that the yield line theory is based on the assumption
that all the plastic deformations takes place in one small deformable element, while in
reality the plastic strain will be spread out to a larger area. Another difference noted is
that the yield line model assumes that all the yield lines at the sides reaches the
corners, but this is not the case in the FE-analysis, compare Figure 2.25c and
Figure 4.13b. This difference arises because the yield line method assumes that the
ultimate moment capacity is reached along the yield lines all the way to the corners,
while in reality the slab will collapse before this happens. The reason for this collapse
is unknown, but a consequence of it is that the FE-model will collapse for a lower
load than the hand and SDOF calculations.
(a)
(b)
Yield strain
Higher strain
Yield strain
Higher strain
Figure 4.13 Plastic strain for an uniformly distributed static load. A very thin layer
of shell elements are placed in the beam grid to get a visual effect. The
strain is parallel to (a) long side (b) short side.
When verifying the ultimate moment capacity of a single beam in the beam grid for
the FE-model it has a somewhat higher value than expected. The difference between
the expected and obtained moment capacity corresponds to the torsional moment. As
mentioned in Section 4.6.2.3 the torsional moment depends on the chosen mesh, so if
an enough fine mesh is chosen the torsional moment will be small and the difference
can be neglected.

-- 86 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 71
4.7 Example – Simply supported slab
4.7.1 Scenario
A charge of 125 kg TNT detonates on a distance of 5 m from a building resulting in
an impulse load of 2800 Ns/m2, with a maximum peak pressure of 5000 kPa, hitting
one of the building sides. The building is a multi-story building with a height of 2.7 m
for each floor. The wall facing the explosion is a reinforced concrete wall with a
cross-section as shown in Figure 4.14.The amount of reinforcement is the same in
both directions. Behind the wall there are columns placed at a distance of 5 meters
from each other. The concrete wall is of quality C20/25 with reinforcement in class
B500. Will the wall be able to resist the explosion?
w
m	35	.	0		h
s	
A	
- 5Φ16
m	31	.	0		d
s	
A 
- 5Φ16
Figure 4.14 Rectangular cross-section of the studied wall.
The control will be made for four cases – uncracked (state I), cracked (state II), ideal
plastic (state III) and the elastoplastic case.
4.7.2 Assumtions and simplifications
 The load is triangular and uniformly distributed over the entire wall.
 There are no windows or other irregularities in the wall.
 The connections between wall/slab and wall/column are free to rotate and the
wall is not continuous over the floor slabs or columns.
 The supports are rigid.
With these assumptions the wall can be simplified to a 2.7x5 m long simply supported
slab, see Figure 4.15.
2.7 m
5 m
This system can then further be simplified to a SDOF system with the equation of
motion
Figure 4.15 Dimensions of the slab.

-- 87 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
72
)	(t	F	R	u	m	mF 			
	
(4.27)
4.7.3 Transformed mass
The total mass for the slab is
kg	11340	7	.	2	35	.	0	0	.	5	2400 								 l	h	b	m	
	
(4.28)
According to Table 4.1 the κmF is
617	.	0	,	, 	 II	mF	I	mF	

		
(4.29)
for the elastic case and
567	.	0	, 	III	mF	
	
(4.30)
for the plastic case. From equation (4.28), (4.29) and (4.30) the equivalent mass can
be calculated to
kg	6997	11340	617	.	0	, 					 m	m	m I	mF	II	I	
	
(4.31)
kg	6430	11340	567	.	0	, 				 m	m III	mF	III	
	
(4.32)
4.7.4 Maximum static load
The maximum static load is here calculated with the virtual work principle and
according to the yield line theory. The moment capacity for the slab per 1,0 m width
in both directions is
 		x	d	A	f	M s	y	rd	
			
(4.33)
The height of the compressed zone x is calculated as
mm	31
1000	20	81	.	0
1005	500 
	

	 w	f
A	f
x
cc
s	y

(4.34)
Equation (4.33) together with (4.34) gives the final moment capacity as
kNm	150	)	31	416	.	0	310	(	1005	500 						rd	
M	
(4.35)
The deformation has been normalized, i.e. set to 1, and Figure 4.16 can then be
established.

-- 88 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 73
2.7 m
5 m
a
x 	x
1/x
1/x
δ=1	δ=1
δ=1 2/2.7
2/2.7
Mx
My
2.7/2
Figure 4.16 Collapse figure for a simply supported slab.
The external work is defined as
	 i	TP	i	i	e A	q	W .	
	
(4.36)
and by dividing the slab into different parts as shown in Figure 4.17, the external work
can be calculated to





 


											
		

			

							
												
3
7	.	2
2
7	.	2	5
)
3
1
2
2
1
7	.	2	)	2	5	((
2
3
1
2
7	.	2
4
3
1
2
2
2
1
)	2	5	(
2
7	.	2
2	4	2
3
2
7.2
2	1
.	3	.	2	.	1
x
q	l	x	x	q
x
q
x
q	x	q
A	q	A	q	A	q	W i	TP	i	i	TP	i	i	TP	i	e	

	
	
(4.37)
2.7 m
5 m
1 2
3
1
2
2 	2
3
Figure 4.17 The slab divided into 3 different parts.
The internal work is defined as
i	i	i	i l	M	W	
			
(4.38)
and with current indata

-- 89 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
74
7	.	2
10	3000	10	810
7	.	2
2
7	.	2
2
5	10	150	2
1
7	.	2	10	150
3	3
3	3 


	




 									 x	x
W i	
(4.39)
By setting the external work equal to the internal work the uniformly distributed load
q can be described by a function of x as
x	x	x
q 9	.	0	75	.	6
7	.	2
10	3
9	.	0	75	.	6
10	810
6
2
3








 




(4.40)
The maximum distributed load is calculated by differentiating the equation (4.40)
with regard to x and setting it equal to zero
m	178	.	3	m	720	.	1	0
)	9	.	0	75	.	6	(
)	8	.	1	75	.	6	(	10	810
)	9	.	0	75	.	6	(
10	1000
2	1	2	2
3
2
3
			

		



 	x	x
x	x
x
x	dx
dq
(4.41)
The second value is obviously only a theoretical value since the length must be
positive. The first value is shorter than the length of the slab so the right mechanism
has been chosen. Inserting x1 into equation (4.40) the maximum distributed load can
be calculated to
2
6
2
3
kN/m	304
720	.	1	9	.	0	75	.	6
7	.	2
10	3
720	.	1	9	.	0	720	.	1	75	.	6
10	810 
	







 

		

	q
(4.42)
4.7.5 Stiffness and internal resistance
The stiffness of a slab can be expressed as
max	
u
qlw
u
Q
k 		
(4.43)
where the maximum deformation umax is according to equation (2.40)
 





	











1 1
2
2
2
2
2
1
2
6	max
)	1	(	16
m n
n	m
l
n
w
m
mn
D
q
u
	
(4.44)
and the flexural rigidity D is
2
1	
	
 EI
D	
(4.45)
Usually a Poisson’s ratio of 0.2 is used for concrete. However, it has here been set to
0 in order to reduce the parameters that can differ between the models. Usually, a

-- 90 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 75
Poisson’s ratio of 0.2 is used for a concrete slab. The moment of inertia for the
uncracked cross section is calculated in Section 3.6.4 and is according to equation
(3.34)
4	9 mm	10	57	.	3 		I
I	
(4.46)
The cracked behaviour of a slab is rather complex. When the stresses increases the
slab will crack and the stiffness in the different directions will no longer be equal.
However, in this example the cracked behaviour has been simplified to have a
constant stiffness, i.e. the same simplification as in the beam model. The moment of
inertia can then be calculated in the same way as for the beam, i.e. the moment of
inertia for the cracked cross section is according to equation (3.42)
4	8 mm	10	8	.	4 		II	
I	
(4.47)
With current indata the flexural rigidity D can be calculated to
2	6	2	12
2
9	3
Nm	10	1	.	107	Nmm	10	1	.	107
0	1
10	57	.	3	10	30 			

		
	I	
D	
(4.48)
2	6	2	12
2
8	3
Nm	10	8	.	14	Nmm	10	8	.	14
0	1
10	8	.	4	10	30 			

		
	II	
D	
(4.49)
The double summation in equation (4.44) converges rapidly and a good
approximation can be found by only taking the two first term of the series. The
maximum deformation is then equal to
9
6	6
3
1
3
1
2
2
2
2
2
1
2
6	max, 	10	71	.	4	32	.	30
10	1	.	107
16	)	1	(	16 	
 

	
			
	











	
   q
q
l
n
w
m
mn
D
q
u
m n
n	m
I
I

		
(4.50)
8
6	6
1 1
2
2
2
2
2
1
2
6	max, 10	41	.	3	32	.	30
10	8	.	14
16	)	1	(	16 





	
			
	











	
   q
q
l
n
w
m
mn
D
q
u
m n
n	m
II
II

		
(4.51)
and the stiffness can finally be calculated to
9
9
max
10	86	.	2
10	71	.	4
5	7	.	2 	
	
	
		 
q
q
u
qlw
u
Q
k I	
(4.52)
8
8
max
10	96	.	3
10	41	.	3
5	7	.	2 	
	
	
		 
q
q
u
qlw
u
Q
k II	
(4.53)
The internal resistance is calculated as

-- 91 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
76
w	l	q	R 			
(4.54)
And with current indata
kN	4104	5	7	.	2	10	304 3 					R	
(4.55)
4.7.6 Required deformations
The total impulse load on the slab is
Ns	37800	2800	7	.	2	5 						 i	l	w	I	
(4.56)
The elastic deformation is calculated as
k	m
I
u
e
el 	
(4.57)
which for the uncracked state gives
mm	5	.	8
10	86	.	2	6997
37800
9

	
	I	
u	
(4.58)
and for the cracked state
mm	7	.	22
10	96	.	3	6997
37800
8

	
	II	
u	
(4.59)
The plastic deformation is given by
e
pl
Rm
I
u 2
2
	
(4.60)
and with current indata
mm	1	.	27
6430	10	4104	2
37800
3
2

		
	III	
u	
(4.61)
The elastoplastic material will have a larger total deformation than the ideal plastic
material but less plastic deformations. Since it is only the plastic deformations that
affect the capacity the elastoplastic material will be able to carry more load than the
ideal plastic material. The maximum deformation for the elastic part is calculated as
mm	4	.	10
10	96	.	3
10	4104
8
3
. 


	 k
R
u II	ep	
(4.62)
and the plastic reduction will therefore be

-- 92 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 77
mm	2	.	5
2
.
		 II	ep
III
u
u	
(4.63)
This will give the plastic deformation
mm	9	.	21	2	.	5	1	.	27	. 					 III	III	III	ep u	u	u	
(4.64)
and the total elastoplastic deformation can be calculated to
mm	3	.	32	9	.	21	4	.	10	.	. 				 III	ep	II	ep	ep u	u	u	
(4.65)
4.7.7 Equivalent static load
The equivalent static load for the elastic material can be calculated by rearranging
equation (2.40) to
 





	











1 1
2
2
2
2
2
1
2
6
)	1	(
16
m n
n	m	e
l
n
w
m
mn
u	D
q

(4.66)
So, the equivalent static load for the uncracked state is
2
3	6	6
. kN/m	1084
32	.	30
10	5	.	8
16
10	1	.	107 
		



I	e	
q	
(4.67)
and for the cracked state
2
3	6	6
. kN/m	666
32	.	30
10	7	.	22
16
10	8	.	14 
		



II	e	
q	
(4.68)
The equivalent static load for the plastic material was calculated in Section 0 and is
according to equation (4.42) equal to
2
. kN/m	304		III	e	
q	
(4.69)
The maximum field moments for the elastic material is according to
Timoshenko (1959)
2
max	. qa	M x	
		
(4.70)
2
1	max	. qa	M y	
		
(4.71)
where β and β1 are tabulated values and a is the length of the shortest side. These
values, β and β1, can be found in Timoshenko (1959, p. 120, table 8) and are for this
example equal to

-- 93 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
78
0.09665	
		
(4.72)
0475	.	0	1 
		
(4.73)
The elastic maximum field moment can now be calculated for the uncracked state to
kNm	764	7	.	2	1084	09665	.	0 2
max	. 				x	
M	
(4.74)
kNm	375	7	.	2	1084	0475	.	0 2
max	. 				y	
M	
(4.75)
and for the cracked state to
kNm	469	7	.	2	666	09665	.	0 2
max	. 				x	
M	
(4.76)
kNm	231	7	.	2	666	0475	.	0 2
max	. 				y	
M	
(4.77)
The maximum moment for the plastic material is equal to the maximum moment
capacity Mrd, which is according to (4.35)
kNm	150	max	. 	 x	rd M	M	
(4.78)
Since the system point is in the middle of the slab and the yield line method only carry
the load in one direction for this point, no moments will arise in the other direction.
This means that the moment in y direction My is equal to zero.
4.7.8 Maximum deformation capacity
Similar to the beam model the deformation capacity for the elastic slab is controlled
by a static calculation for the equivalent load. For the plastic and elastoplastic material
a control of the rotation capacity will be done.

-- 94 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 79
According to Johansson and Laine (2009) the diagram in Eurocode 2 CEN (2004), see
Figure 4.18, can be used for impulse loaded structures.
x / d
pl [10 -3 rad]
betong-
krossning	avsliten
armering
Crushing of
Concrete
Steel
Ripped off
Ripped off
Figure 4.18 Diagram from Eurocode 2 CEN (2004) showing plastic rotation
capacity. From Johansson and Laine (2009).
The diagram can only be used for concrete quality lower than C50/60 if
45	.	0	
d
x
(4.79)
and with current indata
45	.	0	1	.	0
310
31 		
d
x
(4.80)
this is okay.
The shear slenderness is calculated as
d
x 0

		
(4.81)
where x0 is the distance between the maximum moment and the zero moment. To be
on the safe side the minimum shear slenderness of the different directions is used, see
Figure 4.19.
The shear slenderness can then be calculated for the different directions to
35	.	4
310
2	/	2700	.0 		 d
x x
x	
	
(4.82)
55	.	5
310
1720	.0
		 d
x y
y	
	
(4.83)

-- 95 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
80
and since the shear slenderness is larger than three, the rotation capacity can be
multiplied with a factor of
2	.	1
4
35	.	4 		
	k	
(4.84)
xo.x 	xo.x
xo.y
Figure 4.19 Simply supported slab showing distance x0.
So, with a concrete quality of C20/25, the reinforcement in class B and the x/d ratio of
0.1 the plastic rotation capacity is according to Figure 4.18
rad
3
10	11 
	
		
(4.85)
and with the kλ factor the plastic rotation is
rad	10	2	.	13	2	.	1	10	11 3	3 	 							
	

	 k	pl	
(4.86)
The maximum deformation capacity for the slab can now be calculated to
mm	8	.	17
2
7	.	2	10	2	.	13
2
3

	




l
u rd

(4.87)
4.7.9 Results
The deformation required is larger than the deformation capacity for both plastic and
elastoplastic case so the slab will not be able to resist the explosion. Since the plastic
capacity, state III, is too low the cracked and uncracked, state I and state II, will also
be too low and no calculations on elastic case is necessary.
The elastic deformations over the time are shown in Figure 4.20. As can be seen the
different methods coincide rather well.

-- 96 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 81
(a)
(b)
Figure 4.20 Deformations over time for (a) uncracked case (b) cracked case.
The plastic and elastoplastic deformations over time are shown in Figure 4.21. Here, a
large divergence is found between the maximum values for SDOF and FE-analysis
while the hand and SDOF calculations coincide well. Further discussion on the
divergence that arises for the FE-analysis is carried out in Section 4.9.

-- 97 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
82
(a)
(b)
Figure 4.21 Deformations over time for (a) plastic case (b) elastoplastic case.
The relation between the force and deformation for elastic and plastic cases in the
SDOF calculation is shown in Figure 4.22. The area under the curves is equal to the
executed work and should be the same for both the internal and external work.

-- 98 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 83
(a)
(b)
(c)
Figure 4.22 The relation between force and deformation for (a) uncracked case (b)
cracked case (c) plastic case.

-- 99 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
84
The internal work is calculated from Figure 4.22 to
kJ	2	.	99
2
10	34	.	8	10	38	.	2 3	7
. 
		


iI	
W	
(4.88)
kJ	6	.	101
2
10	78	.	22	10	92	.	8 3	6
. 
		


i	II	
W	
(4.89)
kJ	89	,	101	10	94	.	24	10	09	.	4 3	6
. 				 
i	III	
W	
(4.90)
The external work is calculated with the equation
m
I
W c
e
2
2
	
(4.91)
and with current indata
kJ	10	.	102
6997	2
37800 2
,	, 

	e	II	I	
W	
(4.92)
kJ	11	.	111
6430	2
37800 2
. 

	e	III	
W	
(4.93)
The difference between the internal and external work depends on the assumption
about a characteristic load in the hand calculations. The internal work that is based on
the SDOF system will always be lower or equal to the external work that is based on
the hand calculations. The divergence will be smaller the shorter the load is applied.
This difference can be calculated with so called damage curves, the reader is referred
to Johansson and Laine (2009). What can be seen for this example is that the
difference is larger for the plastic case than for the elastic case.
The work over time is shown in Figure 4.23. What can be seen here, except for the
divergence between hand and SDOF calculations, is that the plastic case needs the
longest time to fully develop its internal resistance while the cracked case has the
shortest time. This is logical since the plastic case also has the largest deformation
while the uncracked case has the smallest.

-- 100 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 85
(a)
(b)
(c)
Figure 4.23 The relation between work and time for (a) uncracked case (b) cracked
case (c) plastic case.

-- 101 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
86
4.8 Example – Fully fixed slab
4.8.1 Scenario, assumtions and simplifications
The same scenario as in the previous example, Section 4.7, is here studied. The only
difference is the connections wall to slab which are assumed to be fully fixed in
contrast to previous example, where they were assumed to be free to rotate. The
control will be made for two cases – Ideal plastic (state III) and elastoplastic case.
With these assumptions the wall can be simplified to a 2.7x5 m long fully fixed slab,
see Figure 4.24, and further on to a SDOF system with the equation of motion equal
to
)	(t	F	R	u	m	mF 			
	
(4.94)
Figure 4.24 A fully fixed slab
4.8.2 Transformed mass
The total mass for the slab is
kg	11340	7	.	2	35	.	0	0	.	5	2400 								 l	h	b	m	
	
(4.95)
According to Table 4.1 the κmF is
567	.	0	, 	III	mF	
	
(4.96)
for the plastic case. From equation (4.95) and (4.96) the equivalent mass can be
calculated to
kg	6430	11340	567	.	0	, 				 m	m III	mF	III	
	
(4.97)
which is the same as for the simply supported slab studied in previous example.
4.8.3 Maximum static load
The field and support moment capacity for the fully fixed slab is also the same as the
field moment capacity for the simply supported slab, i.e.

-- 102 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 87
kNm	150	)	31	416	.	0	310	(	1005	500 						rd	
M	
(4.98)
The deformation figure is assumed to have the shape as shown in Figure 4.30.
2.7 m
5 m
a
x 	x
1/x
1/x
δ=1	δ=1
δ=1 2/2.7
2/2.7
Mx
M’x
2.7/2 	M’y
My
Figure 4.25 Collapse figure for a fully fixed slab.
The external work is defined as
	 i	TP	i	i	e A	q	W .	
	
(4.99)
and by dividing the slab into different parts as shown in Figure 4.29, the external work
can be calculated to





 


											
		

			

							
												
3
7	.	2
2
7	.	2	5
)
3
1
2
2
1
7	.	2	)	2	5	((
2
3
1
2
7	.	2
4
3
1
2
2
2
1
)	2	5	(
2
7	.	2
2	4	2
3
2
7.2
2	1
.	3	.	2	.	1
x
q	l	x	x	q
x
q
x
q	x	q
A	q	A	q	A	q	W i	TP	i	i	TP	i	i	TP	i	e	

	
	
(4.100)
2.7 m
5 m
1 2
3
1
2
2 	2
3
Figure 4.26 The slab divided into 3 different parts.
The internal work is defined as
i	i	i	i l	M	W	
			
(4.101)

-- 103 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
88
and with current indata
7	.	2
10	6000	10	1620
2
2
7	.	2
1
5	10	150
1
7	.	2	10	150
7	.	2
2
7	.	2
2
5	10	150	2
1
7	.	2	10	150
3	3
3
3	3	3



	






		
					




 									
x
x	x
W i
(4.102)
By setting the external work equal to the internal work the uniformly distributed load
q can be described by a function of x as
x	x	x
q 9	.	0	75	.	6
7	.	2
10	6
9	.	0	75	.	6
10	1620
6
2
3








 




(4.103)
The maximum distributed load is calculated by differentiating the equation (4.103)
with regard to x and setting it equal to zero
m	178	.	3	720	.	1
0
)	9	.	0	75	.	6	(
)	8	.	1	75	.	6	(	10	1620
)	9	.	0	75	.	6	(
10	2000
2	1
2	2
3
2
3
		


		




x	m	x
x	x
x
x	dx
dq
(4.104)
The second value is obviously only a theoretical value since the length must be
positive. The first value is shorter than the length of the slab so the right mechanism
has been chosen. Inserting x1 into equation (4.103) the maximum distributed load can
be calculated to
2
6
2
3
kN/m	608
720	.	1	9	.	0	75	.	6
7	.	2
10	6
720	.	1	9	.	0	720	.	1	75	.	6
10	1620 
	







 

		

	q
(4.105)
4.8.4 Stiffness and internal resistance
The stiffness of a fully fixed slab can be expressed as
max	
u
qlw
u
Q
k 		
(4.106)
where maximum deformation umax for a slab with the length and width ratio of 1.75
can, according to Timoshenko (1959), be calculated as
D
l	q
u
4
max
00247	.	0 	
	
(4.107)
The flexural rigidity D is calculated in the same way as for the simply supported slab
and is for the cracked case equal to

-- 104 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 89
2	6 Nm	10	8	.	14 		II	
D	
(4.108)
The maximum deformation can then be calculated to
9
6
4
max 10	869	.	8
10	8	.	14
7	.	2	00247	.	0 
		

	
 q
q
u	
(4.109)
and the stiffness is then equal to
9
9
max
10	52	.	1
10	869	.	8
5	7	.	2 	
	
	
		 
q
q
u
qlw
u
Q
k II	
(4.110)
The internal resistance is calculated as
w	l	q	R 			
(4.111)
And with current indata
kN	8208	5	7	.	2	10	608 3 					R	
(4.112)
4.8.5 Required deformations
The total impulse load on the slab is
Ns	37800	2800	7	.	2	5 						 i	l	w	I	
(4.113)
The plastic deformation is given by the equation
e
pl
Rm
I
u 2
2
	
(4.114)
and with current indata
mm	5	.	13
6430	10	8208	2
37800
3
2

		
	III	
u	
(4.115)
The maximum deformation for the elastic part is calculated to
mm	4	.	5
10	52	.	1
10	8208
9
3
. 


	 k
R
u II	ep	
(4.116)
and the plastic reduction will therefore be
mm	7	.	2
2
.
		 II	ep
III
u
u	
(4.117)
This will give the plastic deformation

-- 105 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
90
mm	8	.	10	7	.	2	5	.	13	. 					 III	III	III	ep u	u	u	
(4.118)
and the total elastoplastic deformation can be calculated to
mm	2	.	16	8	.	10	4	.	5	.	. 				 III	ep	II	ep	ep u	u	u	
(4.119)
4.8.6 Maximum deformation capacity
The diagram in Figure 4.18 can only be used for concrete quality lower than C50/60 if
45	.	0	
d
x
(4.120)
and with current indata
45	.	0	1	.	0
310
31 		
d
x
(4.121)
which is okay.
The shear slenderness is calculated as
d
x 0

		
(4.122)
where x0 is the distance between the maximum moment and the zero moment. Since
the maximum moment will occur both in the middle of the slab and at the supports, x0
will be approximately half of the length of x, see Figure 4.25, in the x-direction and
approximately a fourth of the length l in y-direction. To be on the safe side the
minimum shear slenderness of the different directions is used, see Figure 4.27.
The shear slenderness can then be calculated for the different directions to
18	.	2
310
4	/	2700	.0 		 d
x x
x	
	
(4.123)
77	.	2
310
2	/	1720	.0
		 d
x y
y	
	
(4.124)
and since the shear slenderness is less than three, no modification of the rotation
capacity is needed.

-- 106 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 91
xo.x=x/2 	xo.x
xo.y
Figure 4.27 Fully fixed slab showing distance x0.
So, with a concrete quality of C20/25, the reinforcement in class B and the x/d ratio of
0.1 the plastic rotation capacity is according to Figure 4.18
rad
3
10	11 
	
		
(4.125)
The maximum deformation capacity for the slab can now be calculated to
mm	8	.	14
2
7	.	2	10	11
2
3

	




l
u rd

(4.126)
4.8.7 Results
The slab will be able to resist the load for both the plastic and elastoplastic response.
The deformation over time for the different cases is shown in Figure 4.28. As in the
simply supported analyses a divergence is found between the SDOF and FE-analysis,
but here it is larger. Further discussion on this subject is presented in Section 4.9.

-- 107 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
92
(a)
(b)
Figure 4.28 Deformations over time for (a) plastic case (b) elastoplastic case.
4.9 Comments to divergence between analysis
4.9.1 Introduction
The response for the simply supported and fully fixed slabs, Section 4.7 and
Section 4.8, is rather similar. The fully fixed slab has a decreased deformation
compared to the simply supported slab and the divergences between SDOF and FE-
analyses have different magnitudes, but the principle is the same. Therefore, only the
results from the simply supported slab are presented in this Section, the comments
made though also hold true for the fixed slab.

-- 108 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 93
4.9.2 Elastic
The response of the slab for linear elastic material is similar for the SDOF, hand
calculations and FE-model, see Figure 4.20. As for beams, the agreement can be
explained by a good assumption of the deformation shape used when deriving the
transformation factors. Also as for the beam, the unsmooth response in the FE
analysis arises due to the influence of higher order eigenmodes in the latter. However,
the influence of these higher order eigenmodes is larger than for a beam, perhaps due
to more possible eigenmodes. A phase shift between the SDOF-analysis and FE-
analysis is also found here. The reason for this phase shift is not known but a control
of the eigenfrequency shows that they do not explain the difference.
4.9.3 Ideal plastic
The difference between the SDOF-analyses and hand calculations depends on the
assumption of a characteristic impulse load in the hand calculations as described in
Section 2.4.5.1. When the same study as for the beam is carried out here, i.e. a
different pressure and load duration but the same impulse, the same response as in the
beam is observed, see Figure 4.29. This means that the more static the load is the
better agreement between the different methods is reached. The reason for this is
believed to depend on the assumption of a constant deformation shape when deriving
the κ transformation factor, see Figure 4.30. The longer the load is applied, the less
effect on the total response will the time when the deformation shape is assumed
wrong have and the smaller will the divergence between the different analyses be.

-- 109 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
94
(a)
(b)
(c)
Figure 4.29 Response of the slab subjected to (a) P=5000 kPa and t1=1.12 ms (b)
P=2500 kPa and t1=2.24 ms (c) P=1000 kPa and t1=5.6 ms.

-- 110 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 95
(a) 	(b)
Figure 4.30 Deformation shape for the slab when using ideal plastic material.(a)
short side and (b) long side.
However, as can be seen in Figure 4.29c the deformation in the SDOF system
bypasses the deformation in the FE-analysis and when studies with longer load
durations are done it can be seen that this divergence increases. One reason for this is
that the static FE-analysis results in a lower capacity for the slab, and since the same
amount of energy must be absorbed more deformation is required for the FE-analyses.
However, this difference cannot be the only reason for the divergence between the
SDOF and FE-analysis and the main reason for it remains unknown.
4.9.4 Elastoplastic
A large divergence in the maximum deformation for the elastoplastic slab is found
between the SDOF, hand and FE-analysis, see Figure 4.21 and Figure 4.28. One
reason can be found by studying the slabs response in a static analysis, see
Figure 4.31. The assumed bilinear structural response used in the SDOF model
overestimate the stiffness of the slab, resulting in lower deformations. This divergence
has also been observed for the beam, but is there much less significant and has
therefore been neglected. The energy absorbed by the structure is the same for the
different structural responses, i.e. ΔWi,1 = ΔWi,2.
q
u
Slab response
uslab	uassumed
Assumed response
ΔWi,1
ΔWi,2
Figure 4.31 Elastoplastic material response with different approaches.
When modifying the response for the SDOF system with a multi linear response that
corresponds to the slabs response shown in Figure 4.31, a better agreement is found
between SDOF and FEM, see Figure 4.28. However, there is still a difference
between SDOF and FE analysis and the reason for this remains unknown.

-- 111 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
96
Figure 4.32 Response of the slab subjected to a load of P=5000 kPa and
t1=1.12 ms.
A study of the variation for the transformation factors has also been carried out here
for different pressure and load durations but with the same impulses. The
transformation factors are calculated from the FE model and are presented in
APPENDIX G. Figure 4.33 illustrate the development of the κmF factor for two
different loads. As can be seen the difference for the two loads is very small. The final
value is reached for both loads after approximately 8 ms, which corresponds to the
theoretical plastic value of the transformation factor. This shows, as mentioned in
Section 4.9.3, that the longer load duration the longer time is needed, and the less
effect on the total response will the time when the deformation shape is assumed
wrong have.
(a) 	(b)
Figure 4.33 Variation of transformation factor κmF (a) over time and (b) over
deformation.
An interesting notation is done for the transformation factor κmF in a static analysis,
see Figure 4.34. The value starts close to the theoretical elastic value and ends close to
the theoretical plastic value. The factor should, according to theory, gradually
approach the theoretical plastic value the more load is applied, i.e. the longer the time
goes. The higher value of the transformation factor found in the beginning is
considered to depend on that the maximum deformation is not found in the system
point, as was assumed in the theory. Note that the scale for both axis in Figure 4.34 is
different compared to Figure 4.33.

-- 112 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 97
Figure 4.34 Variation of transformation factor κmF over time for a static load
Another notation done is that a large divergence in the deformation appears between
the first and the rest cycles for the FE analysis. A control is done by checking the
moments in the system point for three different time stages in order to acquire a better
understanding for why the difference appears. Figure 4.35 shows that the maximum
moment capacity is reached in both directions for point 1 and 2, but not for point 3.
However, the moments are gradually decreasing indicating a small damping, but this
cannot be the reason for the divergence found between the first and second cycle and
the reason for the divergence remains unknown.
(a)	(a)(a)
(b) 	(c)
1
3
2
3
2
1 	1
2
3
(a)
Figure 4.35 Investigation of moments at critical points. (a) Response of slab
(b) moment in x-direction, Mx (c) moment in y-direction, My. Yield
moment is 20.16 kNm.

-- 113 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
98
5 Final remarks
5.1 Conclusions
In this master thesis different design approaches for structures exposed to explosions
has been gathered. The reliability of these methods has then been controlled by
comparing the results to FE analyses. The two different methods presented are hand
calculations based on work equations and a numerical solution method based on the
equation of motion. The analysis has been carried out on beams and slabs which has
been reduced to a SDOF system.
The reliability of the design approaches for elastic response is good for both beams
and slabs. The divergence found for the hand calculations depends on the assumption
about a characterized impulse load, and can be predetermined.
The plastic response shows a large divergence for both beams and slabs and cannot be
assumed to be reliable. The divergence is believed to depend on that a constant
deformation shape is assumed when calculating the transformation factor κmF while in
reality, the deformation shape changes with time. This theory is strengthened by
analyses showing that the transformation factor greatly changes in the early stage for
impulse loaded structures. However, the results for the design approaches are on the
safe side so the methods can be used for preliminary design.
The elastoplastic response has a good reliability for beams, but because of the
divergence found for the plastic response more studies are needed before it can be
said to be reliable. A divergence is found for the elastoplastic slab analyses which are
not acceptable. One reason for this is that the structure has a multi linear response that
differs a lot from the bilinear response that was first assumed. To receive relatively
reliable results for the elastoplastic slab, this multi linear structural response needs to
be considered.
5.2 Further studies
Some simplifications of the behaviour for both slabs and beams have been done in
this Master’s thesis. A sequel to this thesis could be to investigate a slab with the
reinforcement correctly modeled. Another important investigation is to control the
residual strength of the beam or slab after it has been exposed to an impulse load. Is
the residual strength greatly reduced in comparison with an equivalent static load?
In the examples carried out in this thesis, a reference bomb provided by the authorities
is used, but only three of four structures are able to resist the load. A reason for this
could be effects that increase the capacity of the structure but is not considered in this
Master thesis. Another reason could be that the graph used from Eurocode 2 CEN
(2004) when calculation the maximum rotation capacity may be on the safe side.
Further investigation is here needed to check if the capacity of the slab can be utilized
more.

-- 114 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 99
6 References
WRITTEN SOURCES:
ADINA (2009): Theory and Modelling Guide, Vol 1: ADINA Solids & Structures
Report ARD 09-5, ADINA R & D, Inc., Watertown, USA.
Al-Emrani, M. Engstöm, B. Johansson, M. Johansson. P. (2006): Bärande
konstruktioner. Chalmers University of Technology, Division of Structural
Engineering, Göteborg, Sweden.
Balazs P. (1997): Beräkningsmetoder vid stötvågsbelastade konstruktioner. Försvarets
forskningsanstalt, Avdelningen för vapen och skydd, FOA-R – 97-00473-311 –
SE, Stockholm.
Biggs J.M. (1964): Introduction to Structural Dynamics. McGraw-Hill, New-York,
USA.
CEN (2004): Eurocode 2: Design of concrete Structures – Part 1-1: General rules and
rules for buildings. Euoropean Comittee for Standardization, Bryssel, Belgien.
Craig, R. Kurdila, A. (2006): Fundamentals of Structural Dynamics. John Wiley &
Sons, Inc, New Jersey, USA.
Ek K.J. och Mattsson P. (Planned to be published in 2010): Design with Regard to
Blast- and Fragment Loading. Division of Structural Engineering, Concrete
Structures, Chalmers University of Technology, Master Thesis 2009:81, Göteborg,
Sweden.
Engström B. (2008): Design and analysis of continuous beams and columns. Division
of Structural Engineering, Concrete Structures, Chalmers University of
Technology, Göteborg, Sweden.
Engström B. (2009): Design and analysis of slabs and flat slabs. Division of
Structural Engineering, Concrete Structures, Chalmers University of Technology,
Göteborg, Sweden.
Granström S. (1958): Beräkningsmetod för stötvågsbelastade konstruktioner.
Forskning och försökssektionen, Befästningsbyrån, Kungliga
Fortifikationsförvaltningen, Rapport nr 103:18, Stockholm.
Hultin E. (1983): Betongplattor Föreläsningskoncept. Avdelningen för
Betongbyggnad, Chalmers Tekniska Högskola, Kompendium 90:4, Göteborg.
Johansson M. (2002): Stötvågsutbredning i luft. Räddningsverket, Rapport B54-
223/02, Karlstad.
Johansson M. och Laine L. (2007): Begyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 1: Last av luftstötvåg. Räddningsverket, Rapport
B54-232/07, Karlstad.
Johansson M. och Laine L. (2009): Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 3: Kapacitet hos byggnader. MSB, Rapport MSB
0142-10, Sverige.
Johannesson P. och Vretblad B. (2005): Byggformler och tabeller. Liber, Stockholm.
MATLAB R2010a

-- 115 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
100
Nyström, U. (2006): Design with regard to explosions. Division of Structural
Engineering, Concrete Structures, Chalmers University of Technology, Master
Thesis 2006:14, Göteborg, Sweden.
Ottosen, N. and Petersson, H. (1992): Introduction to the Finite Element Method.
Prentice Hall, England.
Råde, L. och Westergren, B. (1988): Mathematics Handbook for Science and
Engineering. Studentlitteratur Lund.
Samuelsson, A. och Wiberg, N.E. (1988): Byggnadsmekanik Hållfasthetslära.
Studentlitteratur Lund.
Samuelsson, A. och Wiberg, N.E. (1995): Byggnadsmekanik Strukturmekanik.
Studentlitteratur Lund.
Timoshenko S. (1959): Theory of plates and shells. McGraw-Hill, New-York, USA.
WEB SOURCE:
http://www.msb.se/Upload/Insats_och_beredskap/Olycka_kris/Skyddsrum/Artiklar_f
orskning/Dynamisk%20lastp%C3%A5verkan%20referensbok.pdf

-- 116 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 101
APPENDIX A Central difference method
The basic equation of motion can be written as equation (A.1) where u is solved for
t+Δt by equilibrium in time t.
)	(t	F	R	u	c	u	m t	t	t	t 		 		
(A.1)
The acceleration for time t in the central difference method is
 		u	u	u
t
u t	t	t	t	t	t 			 	

 2
1
2
	
(A.2)
and the velocity for time t is
 		u	u
t
u t	t	t	t	t 			 

 2
1
	
(A.3)
When inserting equation (A.2) and (A.3) into equation (A.1) the deformation u for
time t+Δt can be stated as




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






	
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
 	

	 u
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
u t	t
t	t	t	t
t	t
t	t
t	t
2
2
2 2	2
1
2	
(A.4)
The central difference method requires information about the previous deformation
u
t	
to be able to calculate the new deformation at time t+Δt. This deformation is
calculated as
u
t
u	t	u	u
t 	 0
2
0	0
2

				
	
(A.5)

-- 117 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
102
APPENDIX B Modified transformation factor for
the ideal plastic material for a
beam
In Section 3.7.2 there was a discussion about the reliability of the assumed
deformation shape in the SDOF-model when using ideal plastic material. Here, a
derivation of a modified transformation factor for the ideal plastic material is done.
The deformation shape derived is illustrated in Figure B.1.
θ 	θ
2
a	l 
2
a	l 
a
l
Figure B.1 Modified deformation shape for the ideal plastic material.
The deformation shape along the simply supported beam subjected to a uniformly
distributed load is in this case
2
0	,
2
)	( a	l
x	x
a	l
u
x	u s 
	


(B.1)
2	2
,	)	( l
x
a	l
u	x	u s 	

	
(B.2)
The definition of the transformation factor for the mass is derived in Section 3.3.2 to
2
0
2
)	(
1
s
l	x
x
m
u
dx	x	u
l




	
(B.3)
By inserting equation (B.1) and (B.2) into (B.3) the expression for the mass
transformation factor can be calculated to
 
l
a	l
x
u
u
l	u
x
a	l
u
l	u
dx	u
l	u
dx	x
a	l
u
l
l
a	l
s
s
s
a	l
s
s
l
x
a	l
x
s
s
a	l
x
x
s
m


	
	











 
	
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

 






 	
3	2
1
1
3
2	1	1	2	1 2
2
2
2
2
2
0
3
2
2
2
2
2
2
2
2
0
2

(B.4)
The definition of the transformation factor for the load is derived in Section 3.3.3 to

-- 118 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 103
s
l	x
x
F
u
dx	x	u
l



 0
)	(
1

(B.5)
By inserting equation (B.1) and (B.2) into (B.5) the expression for the load
transformation factor can be calculated to
 
l
a	l
x
u
u
l	u
x
a	l
u
l	u
dx	u
l	u
xdx
a	l
u
l
l
a	l
s
s
s
a	l
s
s
l
x
a	l
x
s
s
a	l
x
x
s
F


	
	







	

 







	
4	2
1
1
2
2	1	1	2	1 2
2
2
0
2	2
2
2
0
	
(B.6)
The transformation factor κmF can now be calculated
l
a	l
l
a	l
F
m
mF






	
4	2
1
3	2
1


	
(B.7)
Table B.1 Tabulated transformation factor κmF for different a.
mF	
	
a
0.667 0
0.690 0.1
0.713 0.2
0.733 0.3
0.753 0.4
0.771 0.5
0.788 0.6
0.804 0.7
0.819 0.8
0.833 0.9
0.847 1.0

-- 119 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
104
APPENDIX C Modified transformation factor for
the elastoplastic material for a
beam
In Section 3.7.3 there was a discussion about the reliability of the assumed
deformation shape for the elastoplastic response in the SDOF-model. Here, a
calculation of a modified transformation factor for the elastoplastic material is done
for a beam with a length of 2.7m and with an applied load of P=5000kPa, t1=1.12ms.
The deformation shape used is taken from FE-analysis at time t1=1.12ms and is
illustrated in Figure C.1.
Figure C.1 Deformation shape for the elastoplastic material at time t1=1.12ms.
The definition of the transformation factor for the mass is derived in Section 3.3.2 to
2
0
2
)	(
1
s
l	x
x
m
u
dx	x	u
l




	
(C.1)
and can be rewritten to be

 


n
i s
i
m
n	u
l	u
l 1
2
2
1
	
(C.2)
where n is the number of free nodes in the FE-model, i.e. the nodes which is not fixed
at the supports.
The definition of the transformation factor for the load is derived in Section 3.3.3 to

-- 120 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 105
s
l	x
x
F
u
dx	x	u
l



 0
)	(
1

(C.3)
and can be rewritten to

 


n
i s
i
F
n	u
l	u
l 1
1
	
(C.4)
where n is the number of free nodes in the FE-model.
The transformation factors for different time stages can be seen in Table C.1.
Table C.1 Transformation factors taken from FE-analysis for the elastoplastic
beam.
us [mm] t [ms] κm κF κmF
2.4 1.11 0.853 0.871 0.979
10 2.81 0.491 0.627 0.783
20 5.51 0.484 0.619 0.782
30 8.31 0.435 0.583 0.747
40 12.4 0.424 0.573 0.739
47.3 20 0.408 0.561 0.728

-- 121 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
106
APPENDIX D Elastic transformation factors for a
simply supported slab with
uniformly distributed load
D.1 Indata
The slab can, according to Granström (1958), be assumed to have a sinusoidal shape.
The deformation along the slab can then be calculated as
max	
)	/	sin(	)	/	sin(	)	,	( u	l	y	w	x	y	x	u 		
	
		
(D.1)
The maximum deformation umax is found in the middle of the slab and the system
point is therefore chosen to the middle of the slab, see Figure D.1.
l
w
x	y
us
us
system
point
Figure D.1 Deformation shape for an elastic slab.
D.2 Transformation factor for the mass κm
The transformation factor for the mass is according to equation (4.11)
 



	


l	y
y
w	x
x s
m dy	dx
u
u
l	w 0 0
2
2
1
	
(D.2)
Inserting equation (D.1) into (D.2) gives

-- 122 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 107
25	.	0
2	2
1
4
)	2	sin(
2	2
1
2
)	/	(sin(
1
4
)	2	sin(
2
)	/	(sin(
1
))	/	sin(	)	/	(sin(
1
0
0
2
0
0
2
0 0
2
		


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

	
	


	


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

	
	


	


	
 








l	w
l	w
l
y
l	y	w
l	w
w
l	y
l	w
dy
w
x
w	x
l	y
l	w
dy	dx	l	y	w	x
l	w
l
l	y
y
w
l	y
y
l	y
y
w	x
x
m







	
	
(D.3)
D.3 Transformation factor for the load κF
The transformation factor for the load is according to equation (4.20)
dy	dx
u
y	x	u
w	l
l	y
y
w	x
x s
F  







0 0
)	,	(	1
	
(D.4)
Inserting equation (D.1) into (D.4) gives
2
0	0
0
0	0
0 0
4
2	2
1
)	1	(	)	1	(	2
1
)	cos(	2
1
2	)	/	sin(
1
)	1	(	)	1	(	)	/	sin(
1
)	cos(	)	/	sin(
1
))	/	sin(	)	/	(sin(
1

	
	
	
	
	



	


	



	

	
	
			

	




 								


	




 					

			


	




 							


	




 				


		





 










l	w
w	l
l	l	w
w	l
l
l
y	w
w	l
dy
w
l	y
w	l
dy
w	w
l	y
w	l
w
w
x
l	y
w	l
dy	dx	l	y	w	x
w	l
l	l	y
y
l	y
y
w	l	y
y
l	y
y
w	x
x
F
(D.5)

-- 123 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
108
APPENDIX E Plastic transformation factors for a
simply supported and fully fixed
slab with uniformly distributed
load
E.1 Indata
The calculations done here are based on the yield line theory. The assumed
deformation shape is shown in Figure E.1.
l
w
a
b 	b
1/b us	us
us
2/b
l/2
Figure E.1 Deformation shape for an elastic slab.
From the figure and by normalising the system point, i.e. setting us to 1, the following
relations can be stated:
2
a	w
b 
	
(E.1)





 

				

		 y
l
b
x
l
y	x
b
l
and	b	x	for
b
x
y	x	u 2
0
2	2
0	)	,	(	
(E.2)
2
0
2
2
)	,	( l
y	and
w
x	b	for
l
y
y	x	u 			

	
(E.3)





 		

				

 b	x	y
l
b
b
x	l
y	and	b	x	for
l
y
y	x	u 2
2
0	0
2
)	,	(	
(E.4)
E.2 Transformation factor for the mass κm
The transformation factor for the mass is according to equation (4.11)
 



	


l	y
y
w	x
x s
m dy	dx
u
u
l	w 0 0
2
2
1
	
(E.5)

-- 124 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 109
Inserting the deformation conditions stated by equation (E.2), (E.3) and (E.4) into
(E.5) gives
 		)	3	(	)	2	(	)	1	(
4	2
2	4
2 2
0
2
0
2
0
2
0
2
2
2
	












 






	




 
	







 
 	 
 



	 


l	w
dy	dx
l
y
dy	dx
l
y
dy	dx
b
x
l	w
w
b	x
l
y
b
x
x
b
l
y
b
x
l
x
b
l
	y
m	

(E.6)
b	l
b	l
b
x	x
b
l
dx
b
x
x
b
l
dx
b
x	y
dy	dx
b
x
b
b
x
l
x
b
l
b
x
b
x
l
x
b
l
	y
			




 

	









	




 

	




 
 		  	

	 


24
1
4
1
3
1
2	4	3	2
1
2
)	1	(
0
4	3
2
2
0
2
2
2
0
2
2
0
2
2
2
2
(E.7)
!	)	1	(
24
1
12	2	4	3	2
3	8
4
3
4	4
)	2	(
0
4
3
3
0
3
3
2
2
0	0
3
2
0
2
0
2
2
OK	b	l
b	l	x
b
l
dx
x
b
l
l
dx
y
l
dy	dx
l
y
b
b
x
x
b
l
b
x
b
x
x
b
l
y
			


	





	



		




 	

		  


	



(E.8)
  	b	l
b
w
b
w
b	l	b
w	l
x
l
dx
l
l
dx
y
l
dy	dx
l
y
w
b
w
b	x
l
w
b	x
w
b	x
l
y
		




 			




 					




 		
			







		  		 
2
24
2
2
12
1
2	6	6
3
1
8
4
3
4	4
)	3	(
2/
2	3
2
2
0
2 3
2
2 2
0
2
2
(E.9)

-- 125 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
110
 	





 		






	
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
 




 
		




 			




 		


	




 		
	




 




 		



		


w
a
w
a
w
a	w
w
b
w
b
b
w
w	l
b	l
b
w
b
w	b	l
l	w	l	w
m
1
6
1
2	2
1
1
3
1
2
1
3
1
1
3
1
1
3
1
1
24
8
2	2	1	1
24
4
)	3	(	)	2	(	)	1	(
4

(E.10)
E.3 Transformation factor for the load κF
The transformation factor for the load is according to equation (4.20)
dy	dx
u
y	x	u
w	l
l	y
y
w	x
x s
F  







0 0
)	,	(	1
	
(E.11)
Inserting the deformation conditions stated by equation (E.2), (E.3) and (E.4) into
(E.11) gives
 		)'	3	(	)'	2	(	)'	1	(
4	2
2	4
2 2
0
0
2
0	0
2
2
	



















 
 	 
 



	 


l	w
dy	dx
l
y
dy	dx
l
y
dy	dx
b
x
l	w
w
b	x
l
y
b
x
x
b
l
y
b
x
l
x
b
l
	y
m	

(E.12)
12	3
1
2
1
2	3	2	2
2
)'	1	(
0
3	2
2
0
2
2
0	0
2
2
b	l	b	l
b
x	x
b
l
dx
b
x
x
b
l
dx
b
x	y
dy	dx
b
x
b
b
x
l
x
b
l
b
x
b
x
l
x
b
l
	y

	




 

	









	






 






 
 		  	

	 


(E.13)
!	)	1	(
12	3	4
2
1
4
2
2
2	2
)'	2	(
0
3
2
2
0
2
2	2
0	0
2
0
2
0
OK
b	l	x
b
l
dx	x
b
l
l
dx
y
l
dy	dx
l
y
b
b
x
x
b
l
b
x
b
x
x
b
l
y


	







	

		







		  


	



(E.14)

-- 126 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 111
  	b	l
b
w
b
w	l
x
l
dx
l
l
dx
y
l
dy	dx
l
y
w
b
w
b	x
l
w
b	x
w
b	x
l
y
		




 			




 		
				







		  		 
2
8
1
2	4	4
2
1
4
2
2
2	2
)'	3	(
2/
2	2
2
0
2 2	2 2
0	
(E.15)
 	





 		




 		
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
 




 

		




 
	
	




 




 		



		


2
6
1
1	3
6
1	2
2
3
6
1	2
3
6
1
2	3	2	2
24
4
)'	3	(	)'	2	(	)'	1	(
4
w
a
w
a
w
a	w
w
b
b
w	b	l
l	w	l	w
m	

(E.16)

-- 127 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
112
APPENDIX F Modified alpha factor for the
fictitious yield stress when using
seven integration points
When Newton-Cotes integration method with seven integration points is used in
ADINA, the software replaces the actual stress distribution with a polynomial of order
six. Here, a derivation is done to acquire a factor that can transform ADINA’s stress
distribution to the expected stress distribution.
The equation of the ultimate moment capacity for the expected stress distribution, see
Figure F.1 can be stated as
2	2
2
'
54
13
54
1
54
12
'
2
3
1
6
1
6
1
9
2
'	2
3
2
6	2
1
6
'
6
2
6
2
'
h	w	f	h	w	f
h	w	f	w
h	h
f
h	h
f	M
y	y
y	y	y	rd
				




 				





 										




 		




 					




 
	
(F.1)
y	
f '
6
h
6
h
6
h
6
h
6
h	6
h
y	
f '
x
Figure F.1 Expected stress distribution.
By normalizing the height to 2 and yield stress to 1 the polynomial of order six can be
stated as
1	1	05	.	4	75	.	6	7	.	3 5	3 					 x	x	x	x	
	
(F.2)
and have the appearance as shown in Figure F.2.

-- 128 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 113
Figure F.2 Deformation shape for an elastic slab.
The moment for the normalized stress distribution in ADINA can now be stated as
 		 				
1
0
5	3 4619	.	0	05	.	4	75	.	6	7	.	3 dx	x	x	x	x	M Adina	
(F.3)
And the moment for the normalized expected stress distribution can be stated as
  	4815	.	0	3
1
3/1
3/1
0
exp 				 	 dx	x	dx	x	x	M ected	
(F.4)
The difference between ADINA’s stress distribution and the expected stress
distribution is
9593	.	0
4815	.	0
4619	.	0 	
(F.5)
So, ADINA’s stress distribution generates 4.07% smaller value compared to the
expected stress distribution, i.e.
ected	y	y f	f exp	
'	9593	.	0	' 		
(F.6)
This lead to
	 2
exp
2 '	'	9593	.	0	'	'
54
13 h	w	f	f	f	h	w	f	M actual	y	ected	y	y	y	rd 										
		
(F.7)
where α is
231	.	0	9593	.	0
54
13 		
		
(F.8)

-- 129 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
114
APPENDIX G Transformation factors for
elastoplastic slab
Transformation factors are here tabulated for a simply supported respectively fully
fixed slab with different loads. The transformation factors are calculated for the same
principle as in APPENDIX C, i.e. with information from the FE analysis.

 
	


n
i s
i
m
n	u
w	l	u
w	l 1
2
2
1
	
(G.1)

 
	


n
i s
i
F
n	u
w	l	u
w	l 1
1
	
(G.2)
F
m
mF


 	
(G.3)
Table G.1 Transformation factors for a simply supported slab subjected to the
uniformly distributed impulse load P=5000kPa and t1=1.12ms.
us [mm] t [ms] κm κF κmF
2 1.11 0.844 0.838 1.008
5 1.81 0.543 0.651 0.834
10 3.01 0.440 0.561 0.784
20 5.01 0.295 0.450 0.655
30 7.01 0.226 0.383 0.591
40 10.01 0.196 0.350 0.558
41.5 11.81 0.203 0.358 0.567
Table G.2 Transformation factors for a simply supported slab subjected to the
uniformly distributed impulse load P=1000kPa and t1=5.6ms.
us [mm] t [ms] κm κF κmF
2 1.85 0.548 0.656 0.833
5 2.97 0.460 0.577 0.796
10 4.28 0.360 0.503 0.717
20 6.27 0.243 0.399 0.609

-- 130 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38 115
30 8.43 0.192 0.342 0.561
38.4 12.66 0.181 0.331 0.547
Table G.3 Transformation factors for a simply supported slab subjected to a
uniformly distributed static load (loaded until failure).
us [mm] t [ms] κm κF κmF
2 185 0.279 0.435 0.642
5 455 0.278 0.434 0.641
10 650 0.238 0.396 0.601
20 810 0.220 0.375 0.586
30 885 0.216 0.370 0.583
40 910 0.214 0.368 0.581
Table G.4 Transformation factors for a fully fixed slab subjected to the uniformly
distributed impulse load P=5000kPa and t1=1.12ms.
us [mm] t [ms] κm κF κmF
2 1.01 0.673 0.713 0.944
5 1.71 0.414 0.531 0.780
10 3.01 0.324 0.439 0.737
20 5.41 0.185 0.325 0.568
25.5 8.21 0.143 0.274 0.522

-- 131 of 132 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2010:38
116
Table G.5 Transformation factors for a fully fixed slab subjected to the uniformly
distributed impulse load. P=1000kPa and t1=5.6ms.
us [mm] t [ms] κm κF κmF
0.7 1.11 0.534 0.618 0.864
2 1.81 0.359 0.482 0.745
5 3.11 0.325 0.442 0.735
10 4.71 0.240 0.380 0.631
19.2 8.51 0.132 0.257 0.515
Table G.6 Transformation factors for a fully fixed slab subjected to a uniformly
distributed static load (loaded until failure).
us [mm] t [ms] κm κF κmF
2 345 0.210 0.338 0.622
5 560 0.204 0.335 0.610
10 670 0.198 0.333 0.594
20 750 0.181 0.321 0.563
25 775 0.174 0.315 0.552
30 795 0.170 0.312 0.545
33.5 810 0.173 0.315 0.550

-- 132 of 132 --