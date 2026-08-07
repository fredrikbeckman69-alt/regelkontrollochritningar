---
title: "Dynamic Behaviour Of Concrete Structures Subjected To Blast And Fragment Impacts Lic"
category: "akademiska-avhandlingar"
originalFile: "skyddsrum/akademiska-avhandlingar/dynamic-behaviour-of-concrete-structures-subjected-to-blast-and-fragment-impacts_lic.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","armering","beräkning","explosion","splitter","concrete","with"]
summary: "Dynamic Behaviour of Concrete Structures subjected to Blast and Fragment Impacts JOOSEF LEPPÄNEN Department of Structural Engineering Concrete Structures CHALMERS UNIVERSITY OF TECHNOLOGY Göteborg, Sweden 2002 -- 1 of 96 -- -- 2 of 96 -- THESIS FO..."
---

Dynamic Behaviour of Concrete Structures
subjected to Blast and Fragment Impacts
JOOSEF LEPPÄNEN
Department of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2002

-- 1 of 96 --



-- 2 of 96 --

THESIS FOR THE DEGREE OF LICENTIATE OF ENGINEERING
Dynamic Behaviour of Concrete Structures subjected to Blast and Fragment Impacts
JOOSEF LEPPÄNEN
Department of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2002

-- 3 of 96 --

Dynamic Behaviour of Concrete Structures subjected to Blast and Fragment Impacts
JOOSEF LEPPÄNEN
© JOOSEF LEPPÄNEN, 2002
ISSN 1650-514X
Publication no. 02:4
Archive no. 31
Department of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover:
Steel projectile impacting a concrete target; see Figure 6.6.
Chalmers Reproservice
Göteborg, Sweden 2002

-- 4 of 96 --

I
Dynamic Behaviour of Concrete Structures subjected to Blast and Fragment Impacts
JOOSEF LEPPÄNEN
Department of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
For protective structures, reinforced concrete is commonly used. Concrete structures
subjected to explosive loading in a combination of blast and fragments will have very
different response than statically loaded structure. During the blast and the fragment
impacts the structure will shake and vibrate, severe crushing of concrete occurs and a
crater forms (spalling) in the front of the concrete; for large penetration, scabbing may
occur at the backside of the wall, or even perforation, with a risk of injury for people
inside the structure.
This thesis is intended to increase the knowledge of reinforced concrete structures
subjected to explosive loading, i.e. effects of blast and fragmentation. A further aim is
to describe and use the non-linear finite element (FE) method for concrete penetration
analyses. Particular attention is given to dynamic loading, where the concrete
behaviour differs compared to static loading. The compressive and tensile strengths
increase due to the strain rate effects. Initial stiffness increases, and moreover the
concrete strain capacity is increased in dynamic loading.
Traditionally, for prediction of the depth of penetration and crater formation from
fragments and projectiles, empirical relationships are used, which are discussed here
together with the effects of the blast wave that is caused by the explosion.
To learn more about the structural behaviour of concrete subjected to severe loading,
a powerful tool is to combine advanced non-linear FE analyses and experiments. A
trustworthy model must be able to capture correct results from several experiments,
including both the depth of penetration and the crater size. In this thesis, FE analyses
of concrete penetration with steel projectiles have been performed and compared to
existing experimental results. By using the non-linear FE program AUTODYN, the
depth of penetration and crater sizing can be predicted.
Key words: 	concrete, blast, fragment, projectile, impact, penetration, perforation,
dynamic 	loading, 	strain 	rate, 	non-linear 	finite 	element 	analyses,
protective structures.

-- 5 of 96 --

II
Splitterbelastade Betongkonstruktioners Dynamiska Verkningssätt
JOOSEF LEPPÄNEN
Institutionen för konstruktionsteknik
Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
Armerade 	betongkonstruktioner 	utsatta 	för 	explosionslaster 	i 	kombination 	med
stötvågs- och splitterbelastning skiljer sig avsevärt från statisk belastning. Under
belastningen av stötvågen och splittrets inträngning kommer konstruktionen att skaka
och vibrera, och omfattande krossning och sprickutveckling sker. På belastningssidan
av konstruktionen uppstår en krater genom splittrets kontaktverkan. Dessutom kan
splittret penetrera betongen. Om inträngningsdjupet är tillräckligt stort kan utstötning
ske på baksidan, eller till och med perforation, med risk att skada människor bakom
konstruktionen.
Målet med denna studie är att öka kunskapen om armerade betongkonstruktioner
utsatta för explosionslaster i kombination med stötvågs- och splitterbelastning. Vidare
beskrivs och nyttjas icke-linjär finit elementmetod för penetrationsanalyser i betong.
Särskilt intresse har ägnats åt betongens egenskaper vid dynamisk belastning där
beteendet 	skiljer 	sig 	från 	den 	statiska 	belastningen. 	Betongens 	tryck- 	och
draghållfasthet ökar på grund av töjningshastighetseffekten. Även styvheten och
betongens deformationskapacitet ökar vid dynamisk belastning.
Traditionellt har empiriska samband nyttjats för att bedöma inträngningsdjup och
kraterstorlek från splitter och projektiler som träffar en betongkonstruktion. Dessa,
tillsammans med effekter av stötvågen från en explosion, har studerats.
För att öka kunskapen om det strukturella beteendet hos betongkonstruktioner utsatta
för 	extrema 	belastningar 	är 	en 	kombination 	med 	experiment 	och 	finita
elementanalyser 	en 	bra 	metod. 	En 	trovärdig 	modell 	skall 	kunna 	förutsäga
experimentella resultat från flera experiment med olika utformning både gällande
inträngningsdjup 	och 	kraterstorlek. 	I 	den 	här 	studien 	har 	FE-analyser 	med
stålprojektiler som penetrerar betongen utförts och jämförts med existerande försök.
Med det icke-linjära finita elementprogrammet AUTODYN blir överensstämmelsen
med jämförda experiment god både gällande inträngningsdjup och kraterstorlek.
Nyckelord: 	Betong, stötvåg, splitter, projektil, penetration, perforation, dynamik,
töjningshastighet, icke-linjära finita elementanalyser, skyddsrum.

-- 6 of 96 --

III
Contents
1 	INTRODUCTION 	1
1.1 	Background and aim 	1
1.2 	Research area 	2
1.3 	Outline of contents 	2
2 	BLAST, STRESS AND SHOCK WAVE THEORY 	3
2.1 	Introduction 	3
2.2 	Blast waves and reflections 	3
2.2.1 	Blast waves 	3
2.2.2 	Blast wave reflections 	6
2.3 	Stress waves, reflections and transmission 	8
2.3.1 	Stress waves 	8
2.3.2 	Reflection and transmission of one-dimensional waves 	10
2.4 	Shock waves 	12
3 	CONCRETE UNDER SEVERE LOADING 	14
3.1 	Introduction 	14
3.2 	Weapon systems 	14
3.3 	Fragmentation 	14
3.4 	Penetration with steel fragments into different materials 	16
3.5 	Spalling and scabbing 	19
3.6 	Concrete penetration with steel projectiles 	20
3.7 	Concrete slabs loaded with steel fragments 	21
3.8 	Combined blast wave and fragment loading 	23
4 	BEHAVIOUR OF CONCRETE UNDER DYNAMIC LOADING 	27
4.1 	General 	27
4.2 	Behaviour of concrete under static loading 	28
4.3 	Strain rate effects for concrete under uniaxial loading 	29
4.4 	Strain rate effects of confined concrete 	32
4.4.1 	Strain rate effects of confined concrete in compression 	32
4.4.2 	Strain rate effects of confined concrete in tension 	33
5 	FE MODELLING OF CONCRETE UNDER SEVERE DYNAMIC LOADING 34
5.1 	Introduction 	34
5.2 	Lagrangian, Eulerian and SPH techniques 	34

-- 7 of 96 --

IV
5.3 	Abaqus/Explicit 	35
5.4 	AUTODYN 	37
5.4.1 	Equation of state 	37
5.4.2 	Constitutive models 	38
5.5 	Treatment of blast, shock and stress waves 	40
5.6 	Erosion models 	41
5.7 	Parameter study 	42
5.7.1 	Mesh dependency 	43
5.7.2 	Residual strength 	48
5.7.3 	Erosion criteria 	50
5.7.4 	Strain rate effect of tensile strength 	52
5.8 	Discussion 	53
6 	FE ANALYSES OF CONCRETE PENETRATION 	54
6.1 	Experimental series 	54
6.1.1 	Heavy steel projectile 	54
6.1.2 	Light steel projectile 	55
6.2 	Analyses with Abaqus/Explicit 	56
6.3 	Analyses with AUTODYN 	56
6.3.1 	Mesh descriptions 	58
6.3.2 	Results 	59
6.4 	Discussion 	64
6.5 	Concluding remarks 	65
7 	CONCLUSIONS 	66
7.1 	General conclusions 	66
7.2 	Future research 	67
8 	REFERENCES 	68
APPENDIX A 	Input data to the RHT-model in AUTODYN 	A1
APPENDIX B 	Parameter study 	B1
APPENDIX C 	Empirical formulas for penetration with projectiles 	C1
APPENDIX D 	Empirical formulas for penetration with fragments 	D1

-- 8 of 96 --

V
Preface
This licentiate thesis is a part of the PhD project “Dynamic behaviour of concrete
structures subjected to blast and fragments”, and was carried out from February 2000 to
April 2002 at the Department of Structural Engineering, Concrete Structures, Chalmers
University of Technology. The project is financially supported by the Swedish Rescue
Services Agency.
I wish to thank my supervisor and examiner Professor Kent Gylltoft for his guidance and
support throughout the project. Great thanks also to the members of the reference group
in this project, for creative discussions and continuous progress of the project work. The
group members are M.Sc. Björn Ekengren from the Swedish Rescue Services Agency,
Professor Kent Gylltoft and Dr Mario Plos from Chalmers, and Dr. Morgan Johansson
from Reinertsen AB.
Finally I would like to thank my colleagues 	at Concrete Structures for fruitful
discussions.
Göteborg, April 2002
Joosef Leppänen

-- 9 of 96 --

VI

-- 10 of 96 --

VII
Notations
Roman upper case letters
A 	Area, parameter for compressive yield surface
B 	Parameter for residual yield surface
C 	Constant to predict the depth of penetration
D 	Damage
E 	Young´s Modulus
E0, E1 	Energy per unit mass and time; initial and time unit one
GF 	Fracture energy
I 	Acoustic impedance
I1, I2 	Acoustic impedance; for medium one and medium two
K 	Bulk Modulus
M 	Parameter for residual yield surface
N 	Parameter for compressive yield surface
Mc 	Weight of the case
Mx , Mr 	Mach number for incident shock and reflected shock
P0, P1 	Pressure; initial and time unit one
Pr 	Reflected pressure
Ps+, Ps- Peak pressures
Q 	Charge weight
R 	Distance from explosion
T +, T - Positive time duration, negative time duration
T x , Ty , T r 	Temperature at location x, y, and reflected temperature
U 	Particle velocity, shock velocity
U0 ,U1 	Particle velocity; initial and time unit one
Vs 	Striking velocity
W 	Equivalent weight of TNT
Y 	Yield strength
Y *comp 	Normalized compressive fairlure surface
Y *res 	Residual yield surface
Z 	Scaling parameter

-- 11 of 96 --

VIII
Roman lower case letters
b 	Constant for describe pressure–time history
c 	Stress wave velocity
c0, cL, cT 	Initial, longitudinal and transversal stress wave velocity
c1, c2 	Stress wave velocity in medium one and medium two
d 	Projectile diameter
e 	Specific internal energy
f t 	Ultimate tensile strength
k 	Slope of Rayleigh line
l 	length
i + Positive impulse
i - Negative impulse
m 	Mass, mass per time unit and area
mf 	Fragment mass
mp 	Projectile mass
p 	Pressure
pcrush 	Initial compaction pressure
p0 	Atmospheric pressure
rσ, r u 	Reflected stress and velocity
t 	Time
t 0 , t1 	Initial time, time unit one
tσ, t u 	Transmitted stress and velocity
u 	Displacement
t	r	i 	u	,	u	,	u 	&	&	& 	Initial, reflected and transmitted velocity
v 	Specific volume
v0, v1 	Specific volume; initial and time unit one
vi 	Initial fragment velocity
vr 	Fragment velocity after a distance r
vp 	Fragment velocity for perforation in a steel plate
w 	Crack opening
w u 	Ultimate crack opening
x 	Depth of penetration

-- 12 of 96 --

IX
Greek letters
Λ 	Reflection coefficient for normal blast wave reflection
β, δ 	Reflection angles
δ 	Strain rate factor
ε 	Strain
εc 	Concrete strain
εu 	Ultimate concrete strain in tension
εxx 	Strain in x-direction
ε& 	Strain rate
0	
ε& 	Strain rate for static loading
θ 	Coefficient to estimate fragment velocity
μ 	Compression
ν 	Poisson´s ratio
ρ 	Density
ρ0, ρ1 	Density; initial and time unit one
ρ0, ρs 	Initial density, solid density
ρ1, ρ2 	Density; medium one and medium two
σ 	Stress
σ1, σ2, σ3 	Principal stresses
σc 	Concrete stress
σi, σr, σt 	Initial, reflected and transmitted stress
σlat 	Lateral stress
σxx 	Stress in x-direction

-- 13 of 96 --



-- 14 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 1
1 	Introduction
1.1 	Background and aim
Concrete structures are usually large and massive. For protective structures, e.g. civil
defence shelters, concrete is commonly used. For civil defence shelters the main
threat arises from explosions caused by military weapons, such as conventional and
nuclear weapons; the latter are not considered in this thesis.
Chalmers University of Technology has long collaborated with the Swedish Rescue
Services Agency. In earlier projects a combination of experiments and non-linear
finite element (FE) analyses of a new reinforcement detailing in frame corners of civil
defence shelters has been carried out at Chalmers; see Plos (1994), Johansson (1996),
Johansson and Karlsson (1997), and Johansson (2000). These works have resulted in a
new 	reinforcement 	detailing 	that 	has 	been 	introduced 	in 	the 	Swedish 	Shelter
Regulations, Swedish Rescue Services Agency (1998).
The experiments and appertaining FE analyses mentioned above have been performed
for static loading. However, a civil defence shelter must resist transient loading
caused by explosions and falling debris from a collapsing building. Non-linear FE
analyses have been performed by Johansson (1999) and Johansson (2000), where the
blast wave from the detonation was taken into account, and a study of falling debris
from a collapsing building was carried out. In this work it was shown how the shelter
subjected to blast wave was responding at the most critical stage for the first few
milliseconds. If the load was applied fast enough, some parts of the structure were not
aware of the loading where other parts of it had already gone to failure. Furthermore,
it was shown that the civil defence shelter could withstand the design load for the
blast, according to the Swedish Shelter Regulations, Swedish Rescue Services
Agency (1998).
In addition, from a detonation of a General Purpose (GP) bomb, besides the shock
wave, fragments will fly against the civil defence shelter. The influence of the
fragments that impact the shelter has not been taken into account by the earlier
projects at Chalmers, Concrete Structures.
The work presented in this thesis is a part of a research project where the long-term
aim is to increase the knowledge of reinforced concrete structures subjected to
explosive loading, i.e. combination of blast wave and fragmentation. To reach the
aim, a powerful tool is to combine experiments with advanced non-linear FE analyses.
The work presented in this thesis is intended to give a strong basis of knowledge in
the field of structures subjected to explosive loading. This includes the weapon
effects, i.e. blast and fragmentation, knowledge of the material behaviour for concrete
subjected to severe dynamic loading, and the damage mechanisms. Analysing a civil
defence shelter subjected to explosive loading is very complex, since both the shock
wave and fragmentation from a detonation must be included in the analyses. In this
work the analyses are limited to a steel projectile impacting a concrete target.

-- 15 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
2
1.2 	Research area
The research area in this thesis is to study reinforced concrete structures subjected to
an explosive loading from conventional weapons. From a high-explosive bomb, the
explosive weight causes a blast wave and fragments fly in all directions from the
bomb case. The physics of the detonation process is of interest, from initiation to the
formation of the shock front, blast wave and fragmentation. Depending on the
distance between the charge and target, the fragments can impact the target before, at
the same time or after the blast wave.
A concrete structure subjected to impulse loading will have a very different response
than a statically loaded structure. When fragments fly into a concrete target, spalling
occurs in the front of the concrete surface as a result of the direct impact. When a
shock wave propagates through the 	concrete and reaches the backside of the
construction, it will reflect as a tensile wave, since concrete is very weak in tension,
and this will lead to scabbing at the backside.
Design against fragments and projectiles is critical and an important issue for
protective structures. To predict the depth of penetration in concrete targets, empirical
equations have been developed from large series of experiments. The depth of
penetration is a function of the impact velocity, mass, and form of the fragment or
projectile, and of the target material. For concrete, the latter parameter is normally
related to the compressive strength.
Furthermore, using non-linear FE analyses of concrete penetration is an issue, where
the depth of penetration and crater size is of interest. In this thesis, the FE programs
Abaqus/Explicit and AUTODYN have been used.
1.3 	Outline of contents
In Chapter 2 the creation of a blast wave, the physics of shock waves and wave
propagation are discussed.
Chapter 3 describes general weapon effects. A detonation produces a shock wave and
fragmentation of the case. Further, empirical formulas for penetration and for
fragment and projectile velocities are discussed. Experimental series are discussed
together with damage mechanisms in concrete subjected to severe loading from
explosion.
In Chapter 4 the behaviour of concrete under dynamic loading is discussed. Important
parameters are the strain rate and confinement effects in concrete for uniaxial and
multiaxial stress states.
Chapter 5 describes in general how to model dynamic loading in FE codes, such as
blast and impact loading. In Chapter 6, comparisons with existing experiments and
non-linear FE analyses with Abaqus/Explicit and AUTODYN are carried out.
In Chapter 7, conclusions are drawn from the thesis.

-- 16 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 3
2 	Blast, stress and shock wave theory
2.1 	Introduction
To understand the behaviour of concrete structures subjected to severe loading from
military weapons, the nature and physics of explosions and the creation of a blast
wave and reflections from a bomb must be understood. When the blast wave hits a
concrete surface, a shock wave propagates through the concrete. There are two main
theories to describe the response, the Eulerian and Lagrangian methods, which are
further described in section 5.2. When treating the shock wave with the Eulerian
method, where a fixed reference in space is chosen and the motions are derived with
respect to that region, the shock wave theory is based on the conservation of mass,
momentum and energy. When treating the shock wave by the Lagrangian method,
with moving reference, the stress wave theory is based on the classic wave equation of
motion, where equilibrium and compatibility are considered.
An explosion is characterized by a physical or a chemical change in the material,
which happens under sudden change of stored potential energy into mechanical work,
with creation of a blast wave and a powerful sound; see FortH1 (1987). The explosive
material can react in two ways, as a deflagration or a detonation. For deflagration, the
chemical change in the reaction zone occurs below the sonic speed through the
explosive material. In the case of a detonation, the chemical change in the reaction
zone occurs 	over 	the 	sonic speed 	through 	the explosive material. 	In 	military
situations, detonations are most common; for example, if a TNT charge explodes, this
means that it decays as a detonation. In present thesis, by explosion is meant a
detonation unless stated otherwise.
2.2 	Blast waves and reflections
2.2.1 	Blast waves
A shock wave resulting from an explosive detonation in free air is termed an air-blast
shock wave, or simply a blast wave. The blast environment will differ depending on
where the explosion takes place. In the case of an airburst, when the blast wave hits
the ground surface, it will be reflected. The reflected wave will coalesce the incident
wave and a mach front is created, as shown in Figure 2.1. The point where the three
shock fronts meet – incident wave, reflected wave and the mach front – is termed the
triple point, which is further discussed in Section 2.2.2.3.

-- 17 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
4
Incident wave
Path of triple point
Ground surface
Mach front
Reflected wave
Shelter
Detonation
point
Figure 2.1 	Blast environment from an airburst, based on Krauthammer (2000).
In the case of a surface burst, the reflection happens instantaneously against the
ground surface and a shock wave is created; this is termed a ground-reflected wave, as
shown in Figure 2.2. At a short distance from the burst, the wave front can be
approximated by a plane wave.
Ground surface
Assumed plane
wave front
Ground reflected wave
Shelter
Detonation
point
Figure 2.2 	Surface burst blast environment, based on Krauthammer (2000).
The pressure–time history of a blast wave can be illustrated with a general shape as
shown in Figure 2.3. The illustration is an idealization for an explosion in free air.
The pressure–time history is divided into a positive and a negative phase. In the
positive phase, maximum overpressure, Ps+, rises instantaneously and decays to
atmospheric pressure, p 0, in the time T +. The positive impulse, i +, is the area under the
positive phase of the pressure–time curve. For the negative phase, the maximum
negative pressure, Ps-, has much lower amplitude than the maximum overpressure.
The duration of the negative phase, T -, is much longer compared to the positive
duration. The negative impulse, i -, is the area under the negative phase of the
pressure–time curve.
The positive phase is more interesting in studies of blast wave effects on concrete
buildings because of its high amplitude of the overpressure and the concentrated
impulse.

-- 18 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 5
p
i +
T + T -
i -
t
p0 +Ps+
p0
p0 +Ps-
Figure 2.3 	Pressure–time history from a blast.
The pressure–time history in Figure 2.3 can be approximated by the following
exponential form, first noted by Friedlander (1939) according to Bulson (1997).
+
	−
+
+ −	+	= T	/	bt
s	0 	e	)
T
t
1	(	P	p	)	t	(	p 	(2.1)
where p(t) is the overpressure at time t, and T + (the positive duration) is the time for
the pressure to return to atmospheric pressure, p0,. By selecting a value for the
constant b, various pressure–time histories can be described. The peak pressure, Ps+,
is dependent on the distance from the charge and the weight of the explosives. In
addition, if the peak pressure, the positive impulse and the positive time duration are
known, the constant b can be calculated, and then the pressure–time history is known.
The equation (2.1) is often simplified with a triangular pressure-time curve; see
Bulson (1997):
)
T
t
1	(	P	p	)	t	(	p 	s	0 	+
+ −	+	= 	(2.2)
Conventional high explosives tend to produce different magnitudes of peak pressure.
As a result, the environments produced by these chemicals will be different from each
other. In order to establish a basis for comparison, various explosives are compared to
equivalent 	TNT 	values, 	which 	can 	be 	found 	in 	the 	literature, 	as 	in
Krauthammer (2000), with the pressure range for different chemicals.
A 	scaling 	parameter 	is 	introduced, 	first 	noted 	by 	Hopkinson 	(1915); 	see
Bulson (1997). With the parameter Z, in equation (2.3), it is possible to calculate the
effect of a detonated explosion, conventional or nuclear, as long as the equivalent
weight of charge in TNT is known:
3	/	1
W
R
Z = 	(2.3)
where R is the distance from the detonation and W is the equivalent weight of TNT.
The peak pressure, the positive duration time and the positive impulse are now
functions of Z, and the pressure–time history in Figure 2.3 can be described.

-- 19 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
6
)	Z	(
W
i
),	Z	(
W
T
),	Z	(	P 3	3	s
+	+
+ (2.4)
In the literature there are several empirical formulas for the expressions in (2.4); see
Bulson (1997). In US Army Technical Manual Fundamentals of Protective Design,
No. TM5-855-1 (1965) there are tables and diagrams for different types of explosive
materials.
2.2.2 	Blast wave reflections
When a blast wave strikes a surface, which is not parallel to its direction of
propagation, a reflection of the blast wave takes place. The reflection can be either
normal reflection or an oblique reflection. There are two types of oblique reflection,
either regular or Mach reflection; the type of reflection depends on the incident angle
and shock strength.
2.2.2.1 	Normal reflection
A normal reflection takes place when the blast wave hits perpendicular to a surface, as
shown in Figure 2.4.
The medium has a particle velocity, Ux, before the incident shock wave, Us, passes the
medium; 	after 	passage 	the 	particle 	velocity increases 	to 	Up. 	Furthermore, 	the
overpressure increases from px to py (px refers usually to atmospheric overpressure),
the temperature increases from T x to T y and the sonic speed increases from ax to ay
(ax is approximately 340 m/s in undisturbed air).
When the blast wave hits a rigid surface, the direction will be shifted rapidly, and, as a
consequence, the particles at the surface possess a velocity relative to those further
from the surface that are still in motion. This relative velocity is equal in magnitude
and opposite in direction to the original particle velocity and gives the effect of a new
shock front moving back through the air; the reflected shock, Ur. However, since the
air conditions have changed, the reflected shock will have different properties. The
reflected overpressure increases to pr, temperature increases to T r and sonic speed will
be ar.
For shock waves it is common to describe the velocity as a Mach number, which is
defined as the actual velocity (of the shock front) in the medium divided by the sonic
speed of the undisturbed medium. For example, the shock front will have a velocity
with a Mach number Mr into air that had a velocity with Mx at the incident shock.

-- 20 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 7
Ur
pr=p0 +Pr+, T r, ar	px =p0, T x, ax, Ux=0
Us
Incident Shock at Mx
Up
Up
Reflected Shock at Mr
py = p0+Ps+, T y, ay 	py = p0+Ps+, T y, ay
Figure 2.4 	Normal reflection in air from a rigid wall, based on Baker (1973).
The properties of the reflected blast wave can be described in terms of a reflection
coefficient, defined as the ratio of reflected overpressure to the overpressure in the
incident blast wave. It can be shown that for an ideal gas with a specific gas constant
ratio of 1.4, the reflection coefficient Λ is, according to Baker (1973),
5	M
4	M	8
p	p
p	p
2
x
2
x
x	y
x	r
+
+
=
−
−
=
	Λ 	(2.5)
From equation (2.5) it can be seen that for a shock front moving with Mx equal to one,
i.e. at sonic speed, the reflection coefficient will be two. This means that the
overpressure is twice in the reflected blast wave. With increasing speed for the shock
front, Mx, the reflection coefficient approaches eight. However, that is for ideal gas
with a specific gas constant ratio of 1.4. In a real blast wave, the specific gas constant
ratio is not constant, and the coefficient is pressure-dependent; see Johansson (2002).
The reflection coefficient increases with increasing pressure.
2.2.2.2 	Regular reflection
In a regular reflection the blast wave has an incident shock at Mx with an angle of β
and reflection takes place. The reflected shock at Mr has an angle of δ as shown in
Figure 2.5. The angle of reflection is not generally equal to the angle of incidence.
The air conditions in front of the incident shock (region 1) are still at pressure px and
temperature T x. Behind the incident shock (region 2), the air conditions are the same
as for free air shock, with pressure py and temperature T y. The air conditions from the
reflected shock (region 3), have the pressure pr and temperature T r.
Incident Shock at Mx	Reflected Shock at Mr
pr ,T r 	px ,T x
py ,T y
δ 	β
3
1
2
Figure 2.5 	Oblique reflection, based on Baker (1973).

-- 21 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
8
2.2.2.3 	Mach stem formation
There is a critical angle that depends on the shock strength, where an oblique
reflection cannot occur. According to Baker (1973), Ernst Mach [Mach and Sommer
(1877)] showed that the incident shock and the reflected shock coalesce to form a
third shock front. The created shock front is termed the Mach stem or Mach front,
which is moving approximately parallel to the ground surface, as shown in Figure 2.6,
with increasing height of the shock front. The point where the three shock fronts
meets is termed the triple point. The Mach front and the path of the triple point are
also shown in Figure 2.1.
Incident Shock
Mach stem
Reflected Shock
Triple point
Figure 2.6 	Mach stem formation, based on Baker (1973). The arrows indicate the
direction of the shock waves.
2.3 	Stress waves, reflections and transmission
2.3.1 	Stress waves
When a concrete member is subjected to dynamic loading, a stress wave will
propagate through it. The stress wave propagates in the longitudinal and the transverse
directions in the structure. By using constitutive laws, equilibrium and compatibility
the classic wave equation in one dimension for elastic materials can be derived; see
Figure 2.7. In real structures when the blast wave or fragment hits the concrete, the
concrete behaviour is far from elastic, and the elastic wave equations is not valid.
However, the elastic assumption of the classic wave equation illustrates phenomena
for concrete in dynamic loading.
σxx	
σxx +(
δσxx /
δx )
δx
δx
Figure 2.7 	Model for one-dimensional elastic wave propagation.

-- 22 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 9
From Newton’s second law, the equation of motion, å 	= ma	F 	, yields
2
2
xx
t
u
x	A	x
x
A ∂
∂
=
∂
∂
δ	ρ
	δσ (2.6)
where	
ρ 	is the density, A is the cross section area, and u is the displacement. By
using Hooke’s law for the stress 	xx	xx 	E
ε
	σ 	= 	, and the definition of strain x
u
xx ∂
∂
=
	ε 	,
the classic wave equation can be derived in one dimension:
2
2
2
2
x
u
E
t
u
∂
∂
=
∂
∂
ρ 	(2.7)
and the wave propagates with a velocity of
ρ
E
c0 = 	. 	(2.8)
For normal concrete the wave propagates with a velocity of approximately 3500 m/s.
The solution to the differential equation (2.7) is
)	(	)	( 	0	0 	x	t	c	f	x	t	c	F	u 	+	+	−	= 	(2.9)
where F and f are arbitrary functions, which are dependent on the initial conditions.
The wave’s propagation is described by F in the positive x-direction and f in the
negative x-direction.
By considering a wave propagating in the negative x-direction, it can be shown, as in
Krauthammer (2000), that the particle velocity is
c	t
u 	xx
ρ
σ
=
∂
∂ . 	(2.10)
The particle velocity is proportional to the stress and indirectly proportional to the
acoustic impedance (
ρc). The acoustic impedance is the resistance to the wave
propagation, where the mass and stiffness are parameters that determine the particle
velocity in the medium. By using this model, comparison of concrete and steel shows
that the particle velocity is approximately four to five times higher for concrete than
for steel.
In three-dimensional space the stress wave propagates faster in the longitudinal
direction. For concrete the stress wave propagates in the transverse direction with
approximately 60 % of the velocity in longitudinal direction. With three-dimensional
wave theory, according to Geradin and Rixen (1994), the longitudinal particle
velocity, cL, becomes

-- 23 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
10
( 	)
( 	)( 	)ρ	2	1	1
1	E
c L
ν
	ν
ν
−	+
−
= 	(2.11)
and the transversal particle velocity, cT, becomes
( 	)
( 	)
	ν
ν
−
−
= 1	2
2	1
c	c 	L	T 	. 	(2.12)
For normal concrete with E = 29 GPa, ν = 0.2 and ρ = 2400 kg/m 3 the wave is
propagated in the longitudinal direction with a velocity of approximately 3690 m/s,
and in the transverse direction with a velocity of approximately 2260 m/s.
2.3.2 	Reflection and transmission of one-dimensional waves
When a stress wave reaches a medium from another medium, the initial wave will be
reflected and transmitted at the boundary between these two media. The reflected and
transmitted stress waves’ amplitudes and velocities depend on the media. The stress
wave can propagate as a compressive or tensile wave.
For example, a compressive stress wave in concrete that is propagating will reflect at
the boundary. If the boundary is air, the reflected stress will be equal to the incident
stress but with opposite sign. This means that the reflected wave will propagate as a
tensile wave, since concrete is very weak in tension; the reflected wave can cause
scabbing.
Stress wave theory in one dimension explains this type of phenomenon; a model for
this theory is shown in Figure 2.8.

-- 24 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 11
ρ1 c1 	r	u&	
ρ2 c2
i	u& 	t	u&
t
medium 1 	medium 2
r 	t
i
c 2
-c 1
c 1
Figure 2.8 	Reflection and transmission of one-dimensional stress wave, where i is
the incident wave, r is the reflected wave and t is the transmitted wave,
based on Krauthammer (2000).
The acoustic impedances (ρc) can be used to characterize the media. For air, the
acoustic impedance is approximately zero.
By using equilibrium and compatibility at the boundary it can be shown, as in
Krauthammer (2000), that
å
−
= I
I	I
r 1	2
σ 	, å
−
= I
I	I
r 2	1
u& 	(2.13)
å
= I
I	2
t 2
σ 	, å
= I
I	2
t 1
u&
where	
σ	r , 	u	r& ,	
σ	t 	and u	t & 	are scalars that describes the changes in reflected and
transmitted amplitudes of the stress and velocity, 	1	1	1 	c	I	
ρ	= 	and 	2	2	2 	c	I	
ρ	= 	.
By definition:
i
r
r
σ
σ
σ ≡ 	,
i
r
u u
u
r &
&
& ≡ 	(2.14)
i
t
t
σ
σ
σ ≡ 	,
i
t
u u
u
t &
&
& ≡

-- 25 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
12
where
i	
σ = initial stress, 	r	
σ 	= reflected stress, 	t	
σ = transmitted stress,
i	u& = initial velocity, 	r	u& = reflected velocity, 	t	u& = transmitted velocity.
From a blast wave or fragment impact, a compressive stress wave propagates through
the concrete member. When the stress wave reaches the backside of the construction,
normally air, with acoustic impedance of approximately zero, from equation (2.13), it
can be seen that the reflected stress will be equal; it will reflect as a tensile wave, but
with the same velocity. The transmitted stress will be zero and double in velocity.
If the stress wave reaches a fixed end, the same stress will be reflected at the boundary
with the same velocity and magnitude but with opposite sign.
2.4 	Shock waves
By choosing a fixed reference in space (the shock front), where the material motions
are derived with respect to that region, the fundamental shock wave equations, known
as the Rankine-Hugoniot equations, are derived from the equations for conservation
of mass, momentum, and energy in the medium. Consider the one-dimensional model
in Figure 2.9, where the material is moving with a velocity of U0 against the shock
front, and the material velocity is U1 after passing the shock front. The pressure is P0
and the density ρ0 before the material reaches the shock front, and the pressure is P1
and density ρ1 after passage.
U0
P0 , ρ0
U1
P1 , ρ1
Shock front
Figure 2.9 	Model for one-dimensional shock waves.
Consider the conservation of mass flow per unit time and area in the model in
Figure 2.9. It can be expressed for times t 0 and t 1 as
1	1	0	0	1	1	0	0 	U	U	t	A	U	t	A	U	m	
ρ
	ρ
	∆
	ρ
	∆
	ρ 	=	⇔	=	= 	(2.15)
Considering the conservation of momentum, mass times the change in velocity is
equal to the impulse of external forces. By using equation (2.15) the conservation of
momentum can be derived as

-- 26 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 13
0	1	1	0 	P	P	)	U	U	(	m 	−	=	− 	(2.16)
where m is the flow of mass per time unit and area. The change in internal energy and
kinetic energy is equal to the work done by external forces. It can be shown, as in
Baker (1973), that the conservation of energy per unit mass can be expressed as
)
1	1
)(	P	P	(
2
1
E	E
1	0
0	1	0	1
ρ
	ρ −	+	=	− 	(2.17)
Equations 	(2.15), 	(2.16) 	and 	(2.17) 	are 	the 	Rankine-Hugoniot 	equations. 	The
Hugoniot curve expresses the relationship for pressure and specific volume as shown
in Figure 2.10. However, the material state is described by a discontinuous jump from
one state to another, known as the Rayleigh line.
Pressure, p
P1
Rayleigh line
Hugoniot
v1 	Specific volume, v	v0
P0
v1 - v0
P1 - P0
k =
Figure 2.10 	Hugoniot curve and Rayleigh line, k is the slope of the Rayleigh line.

-- 27 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
14
3 	Concrete under severe loading
3.1 	Introduction
To understand the behaviour of concrete structures subjected to severe loading from
military weapons, the nature and physics of explosions, the creation of a blast wave
and reflections must be known, as described in Chapter 2. Furthermore, fragments
will be released from the bomb case, which will fly against the structure. The
fragment size, area density (kg/m2 ) and striking (impact) velocity are important
parameters for the fracture mechanism in concrete. Prediction of the depth of
penetration is an important factor for design of protective structures. These subjects
will be discussed in this chapter. The effects in concrete slabs loaded by fragments
and combined loading of blast and fragment into concrete walls are discussed as well.
3.2 	Weapon systems
Weapon systems can 	be divided into conventional weapons, nuclear weapons,
biological and chemical weapons. Nuclear weapons, the most powerful weapon
systems 	in 	human 	history, 	are 	of 	two 	kinds, 	A-bomb 	(atomic) 	and 	H-bomb
(hydrogen). An A-bomb is created by fission of uranium and an H-bomb by fusion of
hydrogen. 	The 	H-bomb 	gives 	much 	higher 	energy 	release 	than 	the 	A-bomb.
Biological weapons cause diseases by releasing bacteria or viruses; an example is
anthrax. Chemical weapons are direct chemical attacks. An example is mustard gas,
first introduced in World War I.
However, the aim in this thesis is to study the effects of conventional weapon attacks
in reinforced concrete structures, especially the combination of blast wave and
fragments. Conventional weapons are divided into direct and indirect projectiles with
and without explosives; see FortH1 (1987). The damage of a direct projectile without
explosives is caused by the mass and velocity of the projectile. For direct projectiles
with explosives such as grenades, bombs, torpedoes, missiles and robots, the damage
is caused not only by the primary kinetic energy from the projectile, but also by the
shock wave due to the explosion. Furthermore, fragments are produced from the
projectile case, which will fly against the target. Indirect projectiles are weapons that
produce a projectile after being discharged.
3.3 	Fragmentation
When high explosives such as grenades, bombs, torpedoes, missiles or robots
detonate, fragments will fly out in all directions when the case is broken. The
fragments from the same kind of weapon can be of different sizes. An example of
fragmentation of a 15.5 cm bursting shell is shown in Figure 3.1.

-- 28 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 15
Figure 3.1 	Fragmentation of 15.5 cm bursting shell, based on FortH1 (1987).
The damage to concrete depends on the fragment properties, i.e. the striking velocity,
mass 	and 	area 	density. 	In 	the 	literature 	there 	are 	empirical 	formulas 	– 	as
Janzon (1978), ConWep (1992), 	Krauthammer 	(2000), or 	FortH1 	(1987) – for
estimating the velocity of the fragments. Here formulas from FortH1 (1987) are
presented.
The initial velocity of the fragments depends on the amount of the explosive material
and the size of the case, which can be estimated with equation (3.1), where Q is the
charge weight and Mh is the weight of the case.
)	e	1	(	2400	v 	h	M	/	Q	2
i −
−	= 	[m/s] 	(3.1)
The fragment velocity is retarded in the air, depending on the initial fragment
velocity, the fragment mass and the type of fragment. The velocity is retarded
differently after a distance r, and for steel fragments can be calculated as
3 	f	m	/	r	0456	.	0
i	r 	e	v	v −
= 	[m/s] 	(3.2)
where r is the distance, v i is the initial fragment velocity from equation (3.1) and mf is
the fragment mass. Fragments from an explosion can fly through the air over very
long distances, more than 1000 m for heavy fragments; FortH1 (1987).

-- 29 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
16
According to Swedish Rescue Services Agency (1994), a shelter must be able to resist
the effect of a 250 kg GP bomb (with 50 weight per cent TNT) that bursts freely
outside from a distance of 5 m from the shelter. The fragments masses from a 250 kg
GP bomb are normally distributed from 1 to 50 g; FortH1 (1987). By using equations
(3.1) and (3.2) the impact velocity at a distance of 5 m varies between 1650-1950 m/s
for fragments with mass of 1 to 50 g. In Figure 3.2 fragments velocities from a 250 kg
GP bomb are shown for varying fragment weights.
1500
1700
1900
2100
0 	2 	4 	6 	8 	10 	12
Distance from explosion [m]
5
25
50
100
200
400
Fragment velocity [m/s]
[g]
Figure 3.2 	Fragment velocity from a 250 kg GP bomb (with 50 weight per cent
TNT) that bursts freely outside, for fragment weights from 5 to 400 g,
based on equations from FortH1 (1987).
3.4 	Penetration with steel fragments into different
materials
The depth of penetration depends on the fragment mass, form, velocity and inclination
angle of impact, and the material of the target.
For spherical fragments, it has been empirically found by Janzon (1978) that the
velocity for perforation at different thicknesses of steel plates is
α
	θ 	sin	m
t
v 3	/	1
f
p ×	×
= 	(3.4)
where θ is a constant depending on the form of the fragment and the target material.
The inclination of the impact is α, the mass of the fragments is mf, and the thickness of
the steel plate is t.
An example of penetration with fragments of 15.5 cm bursting shell into soft steel is
shown in Figure 3.3, with an impact inclination of 90°.

-- 30 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 17
0
20
40
60
80
0 	500 	1000 	1500 	2000
Impact velocity [m/s]
1
10
25
100
400
800
Depth of penetration [mm]
[g]
Figure 3.3 	Depth of penetration into steel, from equation (3.4), impact inclination
90°, θ = 39x10-6 ; see Janzon (1978).
Approximate depth of penetration into other materials than steel is given by multiples
of the depth of penetration for soft steel by a factor; these factors are given in
Table 3.1.
Table 3.1 Penetration depth of common materials, FortH1 (1987).
Material 	Factor
Armour-plate 	0.75
Soft steel 	1,0
Aluminium 	2
Reinforced fibre-glass plastic 	4
Concrete (K40, reinforced) 	6
Pine wood 	15
Sand 	18
Water 	50
Wet snow 	70
Dry snow 	140

-- 31 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
18
By using a direct formula, in Krauthammer (2000), the depth of penetration can be
estimated for fragments penetrating massive concrete, as shown in Figure 3.4. For
equations, see the Appendix D. The depth of penetration is a function of the fragment
weight, the striking velocity and the concrete compressive strength.
0
200
400
600
0 	500 	1000 	1500 	2000
Striking velocity [m/s]
m = 5
m = 25
m = 50
m = 100
m = 200
m = 400
Depth of penetration [mm]
Figure 3.4 	Penetration of fragments into massive concrete, compressive strength
30 MPa, for fragment weights from 5 to 400 g with striking velocities
up to 2000 m/s, based on equations from Krauthammer (2000).
In Figure 3.4 the penetration depth for fragments into massive concrete is shown.
However, for a concrete structures, for 70 % penetration, perforation may be
expected; see Krauthammer (2000).
According to Swedish Rescue Services Agency (1994), shelter above ground must
have a minimum thickness of 350 mm. For the normally distributed (1–50 g)
fragments from a 250 kg GP bomb with 125 kg TNT, perforation will not be a
problem. However, if single fragments of large size are released from the bomb,
perforation may become a problem.
Table 3.2 shows the required thickness of a concrete wall to just prevent perforation
for fragment weights from 5 to 400 g with striking velocities up to 3000 m/s. As seen,
both the striking velocity and the mass are important factors for the design of
protective structures. The area marked grey gives a thickness above 350 mm massive
concrete (the required minimum thickness of a civil defence shelter above ground).
For equations, see the Appendix D.
[g]

-- 32 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 19
Table 3.2 	Thickness of concrete wall that just prevents perforation, compressive
strength 30 MPa, for fragment weights from 5 to 400 g with striking
velocities 	up 	to 	3000 	m/s, 	based 	on 	equations 	from
Krauthammer (2000).
Fragment mass [g]	Striking
velocity [m/s] 5 	25 	50 	100 	200 	400
300 	22 	39 	50 	65 	84 	108
600 	30 	54 	70 	91 	118 	153
900 	39 	74 	97 	127 	167 	220
1200 	53 	101 	134 	177 	235 	312
1500 	70 	135 	180 	239 	318 	424
1800 	90 	175 	233 	312 	416 	556
2100 	112 	220 	295 	394 	528 	707
2400 	138 	271 	363 	487 	653 	877
2700 	166 	327 	439 	590 	792 	1064
3000 	196 	389 	522 	702 	943 	1268
3.5 	Spalling and scabbing
Concrete has a high compressive strength but is very weak in tension. The fragment or
projectile impact will cause severe cracking and crushing in the concrete, which must
be supported by reinforcement in order to prevent failure. When a fragment or a
projectile hits a target of concrete, it will penetrate into the concrete and the impact
will cause crushing of the material at the point of contact (spalling) and possible
scabbing on the backside of the wall; see Figure 3.5. When 50 % penetration is
achieved, scabbing will become a problem; see Krauthammer (2000).
The cause of scabbing is the reflected shock wave (tensile wave). The amount of
reinforcement is a very important parameter in regard to scabbing. Experiments shows
that the scabbing is reduced by increasing the amount of reinforcement – see
Jonasson (1990) – since the reinforcement will hold the concrete intact (confinement
effect).

-- 33 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
20
Figure 3.5 	Spalling and scabbing, based on FortH1 (1987). Spalling in the front
of the concrete wall and scabbing at the backside of the wall.
3.6 	Concrete penetration with steel projectiles
Reinforced concrete structures for military protection have been the most widely used
material. Protective structures in concrete have been built since the beginning of the
20th century. During and after World War II there were large research projects for
studying penetration effects on concrete.
Poncelet (1829), according to Bulson (1997) is known as the first who came up with a
penetration formula for projectiles. He assumed that the course of forces between the
projectile and the target was a function of the projectile weight, diameter, nose shape,
impact velocity, vi, and two parameters that took account of the target material.
Since Poncelot there has been further development of the formulas by Beth (1943),
Bergman (1950), Hughes (1984) and Forrestal et al. (1994), but the same basic idea
has been used. The depth of penetration is a function of the impact velocity of the
projectile with a general form of
)	v	(	f	C	x 	i	×	= 	(3.5)
where x is the depth of penetration, and C is a constant which depends on the
projectile mass, the nose shape of the projectile, the diameter of the projectile and a
parameter that takes account of the target material. For concrete this last parameter is
normally related to the compressive strength.
For the empirical formula developed by Bergman (1950) see the Appendix C. The
work published by Beth (1943) was later incorporated in the US Army Technical
Manual on the Fundamentals of Protective Design (1965); see Appendix C. The
formula used in the manual had been further developed.
Hughes (1984) derived an empirical formula; see Appendix C. He used the same
principal ideas that Bergman and Beth used, i.e. that the depth of penetration was
dependent on the projectile mass, the nose shape of the projectile, the diameter of the
projectile and a parameter that takes account of the target material. However, Hughes
used the tensile strength of the concrete as a parameter, whereas Bergman and Beth
had used the concrete compressive strength. Furthermore, the concrete strength
depends on the strain rate. This approach gives more realistic behaviour of the
concrete. Forrestal et al. (1994) derived an analytical formula for penetration into
concrete; see Appendix C.

-- 34 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 21
The formula developed by Forrestal gives the most accurate prediction of the depth of
penetration; the agreement with experimental data is good for wide range. The
empirical formulas from the time around World War II cannot predict the depth of
penetration for as wide a range of data as Forrestal. Here a comparison for a 0.906 kg
projectile impacting a concrete target, with varying striking velocity has been
performed with the different empirical formulas; see Figure 3.6. This experimental
series has been compared with FE analyses in Chapter 6.
0
0.2
0.4
0.6
0.8
1
1.2
0 	200 	400 	600 	800 	1000
Impact velocity [m/s]
Bergman *
Whiffen
Beth **
Hughes
Forrestal
Exprimental data
Depth of penetration [m]
* 	Experiments out of limitations of the empirical formula.
** 	The Formula is based on Beth´s work (1943).
Figure 3.6 	Penetration data and comparison with empirical relationships for
prediction of 0.906 kg, 26.9 mm projectile impacting concrete with a
compressive strength of 36 MPa.
3.7 	Concrete slabs loaded with steel fragments
FOA 1 made a series test of fragment-loaded concrete slabs; see Nordström (1992),
Nordström (1993) and Nordström (1995). The experiments were made in scale 1:4.
The aim with the experimental series was to investigate the effects against concrete
slabs loaded with fragments of different size, velocities, form and area density. In the
experimental series the energy absorption capacity was calculated for undamaged and
damaged (pre-loaded by fragments) slabs. After each shot, the slabs were cleaned and
loaded with a point load, the deformation was measured, and the energy absorption
was calculated as the area under the load–deformation curve.
1 Försvarets Forskningsanstalt, in English: National Defence Research Establishment.

-- 35 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
22
In general, the experimental results showed that the slabs which were damaged had a
lower maximum capacity than undamaged slabs, and that with increasing fragment
area density the maximum capacity decreases. The maximum capacity was reduced
for the pre-damaged slabs, and with increasing area density the capacity decreased
since the craters from the fragments are so many that they coincide and the slab
thickness is reduced.
During the loading, the deflections were measured. For small deflections (25 mm) of
the concrete slab, the energy absorption was higher for undamaged slabs and for slabs
with small fragment area density (0.10 kg/m3 ) than for slabs with higher fragment
area density (above 0.10 kg/m3 ); see Figure 3.7. This is due to the maximum capacity,
which is reduced for the concrete slabs that had higher fragment area density. The
fragment area density from a 250 kg GP-bomb at distance of 4 m in scale 1:4 is
approximately 0.2 kg/m3 , according to Nordström (1995).
However, for further loading, the energy absorption was lower for the undamaged
slabs at a deflection of 100 mm; see Figure 3.7. This is explained by the fact that for
pre-damaged slabs the behaviour is much more ductile; this can be attributed to the
cracking 	and 	shaking 	of 	the 	slabs 	before 	loading 	with 	the 	point 	load. 	The
reinforcement can yield at several points at the same time and the behaviour becomes
more ductile. For undamaged slabs the cracks in the concrete are normally localized
under the point load and the reinforcement yields locally. Another cause is that the
bond between reinforcement and concrete has been lost or reduced due to the shaking
and vibration of the slab after a shot with fragments, and the reinforcement slides in
the slab.
Load [kN]
Deformation [mm]	100
5
25
10
no fragments
0.10 kg/m 3
0.20 kg/m 3
Figure 3.7 	Schematic load–deformation relationship for undamaged slabs, with
fragment area density of 0.10 kg/m3 and 0.20 kg/m3 , based on results
from Nordström (1995).

-- 36 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 23
3.8 	Combined blast wave and fragment loading
A building is not only exposed to fragments or only a blast wave; from a bomb the
loading is a combination of both the blast wave and fragmentation. Experiments show
that a concrete buildings which is exposed to a combination of blast wave and
fragments will collapse more easily than one which is exposed only to a blast wave or
fragments; see Forsén and Edin (1991).
The load from a detonation can be divided into a blast wave and a stress wave, which
is caused by the direct impact from the fragments. Depending on the charge and the
distance between the bomb and the target, the fragments may impact the concrete
surface before, at the same time or after the blast wave. Figure 3.8 shows an example
of a 250 kg GP bomb (with an equivalent charge weight of 125 kg) with the arrival
time for the blast wave calculated with ConWep (1992), and the arrival time for the
fragments; see equation (3.2). For a 250 kg GP bomb the arrival times for the blast
and the fragments are the same for a distance of approximately 5 m, and for a distance
above that the fragments will impact the target before the blast wave.
0
2
4
6
8
10
0 	2 	4 	6 	8 	10
Distance [m]
Fragments
Blast wave
Arrival time [ms]
Figure 3.8 	Arrival time for blast wave and fragments from a 250 kg GP–bomb.
The difference in arrival time between blast and fragments is not so important at short
distances; see Forsén and Nordström (1992). This is due to the fact that the response
time of the reinforced concrete wall is usually very long compared to the difference
between arrival times of blast and fragments. The wall is going to be damaged by the
fragments before it has started moving. A very good estimation of the deflection can
be made by simply superposing the fragment impulse on the positive impulse of the
blast wave, with the maximum blast pressure, and rearing it to a triangular shape and
considering the resistance to be decreased by the fragments from the very beginning
of the load; see Forsén and Nordström (1992).
In an experimental series carried out by Forsén and Edin (1991), reinforced multi-
storey concrete buildings were studied. Different structural solutions were analysed,
with reinforcement in each storey that was either non-continuous or continuous to the
next storey, and with and without inner walls. To simulate the load from storeys

-- 37 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
24
higher up in the building, which cause a normal force in the wall, a load of 800 kg
was placed above the wall. The weight of the load corresponds to a building
approximately six storeys high.
The reinforcement was arranged in four different ways. Type 1, weak reinforcement;
the reinforcement was not continuous in the wall between two storeys. Type 2, strong
reinforcement: continuous through the building. Type 3 was weak reinforcement with
a structural solution that has inner walls perpendicular to the outer wall. Type 4 was
strong reinforcement with inner walls, which are perpendicular to the outer wall.
The experiments were made in scale 1:4. The charge was simulated as a 250 kg GP
bomb in full scale, scaled with 1:4 in the experiments. An example of the results from
the study is shown in Figure 3.10.
Earlier experiments at FOA, according to Forsén and Edin (1991) showed that walls
exposed only to a shock wave differed little with weak and strong reinforcement.
However, the damage when combining blast and fragment at the same time is much
higher than with only a blast.
The fragment impulse density is relatively small compared to the positive impulse
density of the blast wave, as seen in Figure 3.9.
0
2
4
6
8
10
12
0 	2 	4 	6 	8 	10
Distance [m]
Sum
Blast wave
Fragments
Impulse density [kPas]
Figure 3.9 	Impulse density of blast and fragments. At level 5.4 kPas, collapse is
expected for a 150 mm concrete wall; based on results from Forsén
and Edin (1991).
The increase in the impulse density does not explain the higher damage of the
structure, since the increase is relatively small. The damage mechanisms are not
known in detail. The increased damage is explained by the following. The resistance
to horizontal displacement depends on the normal force in the wall. When the wall is
subjected to a blast, it will have a sudden displacement and the mass above will
accelerate; this will increase the normal force. By taking account of the accelerating
mass and the reduced cross section, the combination of blast and fragment loading
gives a more unsafe construction.

-- 38 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 25
In addition, inner walls perpendicular to the outer wall increase the stiffness of the
wall. In the study it was concluded that the inner walls had a great resisting effect.
Comparison of the horizontal wall velocity shows that the walls without the inner wall
perpendicular to the outer wall had the highest velocities. The weak reinforcement
will give higher horizontal velocities.
Figure 3.10 	Damage after blast, heavy reinforcement, with inner walls; Forsén and
Edin (1991).
A detonation inside a building will give more damage than if the detonation were
outside the building. This is due to the fact that, besides the short duration of a blast
wave, a long-duration blast wave will be added by gas and heat from the explosion,
which cannot leak out from the limited space. If the amplitude and the duration of the
pressure are high, the walls and roof may jerk. An important parameter with cased
buildings is the relationship between openings, the so-called leakage area. With large
leakage areas the duration can be shortened and the damage possibly reduced.
Forsén (1989) studied the effects of cased buildings. The experiments showed that the
walls 	were 	not 	broken 	into 	small 	pieces 	by 	charges 	without 	fragments; 	see
Figure 3.11. The walls were jerked in almost whole pieces. Charges with fragments
showed a different behaviour; the walls were crushed at the height of the charge, and
were still standing after the explosion as shown in Figure 3.12.

-- 39 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
26
Figure 3.11 	Blast wave without fragments, based on Forsén (1989). The marked
area shows a wall that is jerked in almost one piece.
Figure 3.12 	Blast wave combined with fragments; Forsén (1989).

-- 40 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 27
4 	Behaviour of concrete under dynamic loading
4.1 	General
The behaviour of concrete differs in dynamic loading compared to static loading. The
initial stiffness, as well the ultimate strength, increases in both compression and
tension. Furthermore, the concrete strain capacity is extended in dynamic loading.
Under severe loading, when a projectile or fragments hit a concrete target, the
concrete will crush and crack, and the structure will shake and vibrate. The pressure at
the front of the nose of the projectile is several times higher than the static uniaxial
strength of concrete, also the lateral confining pressure. In addition, a stress wave is
propagating from the tip of the nose of the projectile. In front of the nose of the
projectile, the impact may cause crushing. Since concrete is very weak in tension, the
tensile wave obtained when the compressive wave hits the backside of the wall may
cause scabbing at the backside, and cracking in the lateral direction. Both the
compressive strength and the tensile strength of concrete are important parameters for
the depth of penetration. Moreover, the crater size depends on the tensile strength.
The material behaviour of concrete in dynamic loading is discussed in this chapter.
At Delft University, Zielinski (1982) followed a phenomenological approach where
he compared static and impact tensions. He observed a changing geometry of the
fracture plane. With increasing loading rate, the amount of aggregate fracture
increased. Furthermore, multiple fractures were observed at high loading rates, as
shown in Figure 4.1.
STATIC 	IMPACT
microcracks
macrocracks
aggregate
particles
cement
matrix
Figure 4.1 	Crack path for tensile static and dynamic loading; based on
Zielinski (1982).
These fracture mechanisms have a direct influence upon the stress–strain relationship
for concrete in dynamic loading; the energy absorption is much higher for the multiple
fracture planes. Furthermore, the stiffness is increased; stress levels at failure for high
loading rates and deformation capacity increase. In addition, the elastic stiffness is
increased. This is schematically shown in Figure 4.2.

-- 41 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
28
σ
ε
Impact
Static
Effect of changed
fracture path for
a single macrocrack
Effect of multiple
cracking
Figure 4.2 	Schematic view of the effect of fracture mechanisms on the stress –
strain relationship, based on Zielinski (1982).
4.2 	Behaviour of concrete under static loading
Concrete is often characterized with the uniaxial stress−strain relationship as shown in
Figure 4.3. For normal-strength concrete, the ultimate tensile strength is less than one
tenth of the ultimate compressive strength.
σc
εc
Figure 4.3 	Concrete stress
−strain relationship under uniaxial loading.
However, real structures are subjected to multiaxial stresses. Confined concrete has
increased strength and stiffness, and furthermore, strains are extended. In Figure 4.4
the stress−strain relationship for concrete in compression is shown for increasing
lateral pressure (confined concrete).
σc
εc
σlat = p3
σlat = p2
σlat = 0
σlat = p1 0<p1 <p2 <p3
σlat
σc
σc
Figure 4.4 	Schematic 	view 	of 	stress
−strain 	relationship 	increasing 	lateral
pressure for concrete in compression.

-- 42 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 29
When concrete is subjected to very high pressures as in an impact situation, the lateral
pressure will increase. Under the nose of the missile, concrete is exposed to enormous
confining pressures and behaves plastically, dissipating a large amount of energy. In
addition, 	civil 	defence 	shelters 	have 	heavy reinforcement, 	which 	gives 	further
confinement 	effects. The confining pressure in impact loading can 	be several
hundreds MPa. In a standard static tri–axial test, the ultimate strength of concrete can
increase 	enormously. 	Experiments 	by 	Bazant 	et 	al. 	(1986), 	with 	a 	uniaxial
compressive strength of 46 MPa, showed that the ultimate strength increased up to
800 MPa, and the strains were extended as shown in Figure 4.5.
0
200
400
600
800
1000
0 	10 	20 	30 	40 	50
Strain [mm/m]
Axial Stress [MPa]
σ lat = 20 MPa
σ lat = 100 MPa
σ lat = 200 MPa
σ lat = 400 MPa
σlat
σc
σc
Figure 4.5 	Stress
−strain relationship for confined concrete; based on triaxial
compression test data from Bazant et al. (1996).
Concrete is very weak in tension; the ultimate tensile strength is less than one tenth of
the ultimate compressive strength. When concrete cracks, the tensile strength has
reached a maximum and thereafter decreases quickly (tensile softening). The ultimate
tensile strength is hardly affected by lateral compression as concrete in compression.
This is further discussed in section 4.4.2.
4.3 	Strain rate effects for concrete under uniaxial loading
The behaviour of concrete depends on the loading rate; this is called the strain rate
effect. The strain rate in the material depends on the loading case, as shown in
Figure 4.6 for different loading cases such as creep, static, earthquake, hard impact
and blast loads.

-- 43 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
30
10 -8 	10 -7 	10 -6 	10 -5 	10 -4 	10 -3 	10 -1 	1 	10 	10 2 	10 3
CREEP 	STATIC 	EARTHQUAKE 	HARD IMPACT BLAST
Strain rate [s -1 ]
Figure 4.6 	Strain rates on different loading cases; based on
Bischoff and Perry (1991).
The strength, deformation capacity, and fracture energy are important parameters for
characterizing and describing the response of concrete. For dynamic loading, these
parameters change relative to static loading. When concrete is subjected to impact
loading, the material strength will increase. The dynamic increase factor (DIF) is the
proportional increase of the dynamic ultimate strength relative to the static ultimate
strength. For dynamic loading, the ultimate compressive strength can be more than a
doubling. Compilations by Bischoff and Perry (1991) show the relative change in the
ultimate strength for concrete in uniaxial compression; see Figure 4.7.
Figure 4.7 	Relative increase in the ultimate uniaxial compressive strength as
function of the strain rate; Bischoff and Perry (1991).
Additionally, according to Ross et al. (1996) the concrete ultimate uniaxial strength in
tension increases by multiples of 5 to 7 at very high strain rates, as shown in
Figure 4.8.

-- 44 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 31
Figure 4.8 	Strain rate dependency for concrete in tension; Ross et al. (1996).
Dispersions in the test results are explained by the difficulties of measurement in
dynamic tests, and the method of testing is altered. Another explanation is that the
amount of moisture in the concrete influences the viscous effects of concrete. Wet
concrete is more sensitive to strain rate than dry concrete; see Ross et al. (1996).
The increased strength is explained by the change in the fracture plane. With
increased loading rate, concrete will have multiple fractures and the amount of
aggregate fracture increases; see Figure 4.1.
The viscous effects are explained by the following. When concrete is subjected to
compressive loading, the pores tend to close. Because of the water, viscous effects
develop an inner pressure in the pores that are filled with water, which gives an
increasing strength of the material. When loading parallel to the pores, a resistance
force is created; see Rossi and Toutlemonde (1996). For concrete in tension, the
resistance force is created when the pores are opening. The DIF curve has a flat part
and a steep part; see Figure 4.7 and Figure 4.8. For concrete in tension, when the
strain rate is less than approximately 1 s -1 the viscous effects dominate, and when the
strain rate exceeds approximately 10 s-1 the forces of inertia dominate. For concrete in
compression, the forces of inertia dominate at strain rates of approximately 60–80 s -1 ;
see Ross et al. (1996).

-- 45 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
32
4.4 	Strain rate effects of confined concrete
The research in the area of strain rate effects has been focused mainly on uniaxial
loading conditions. For multiaxial loading conditions, the relevant research has been
done by Takeda et al. (1974), Zielinski (1982) and Weerheijm (1992). In real
structures as blast shelters, the concrete members are in a multiaxial state of stresses;
therefore, material behaviour in impact loading situations under multi–axial loading
conditions at high rates must be known.
4.4.1 	Strain rate effects of confined concrete in compression
Takeda (1974) demonstrated that the rate effects for confined concrete in compression
are consistent at various compression levels, as shown in Figure 4.9. The static
condition (S) has a strain rate of approximately 10-6 s -1 , the intermediate condition
(III) has a strain rate of approximately 10-2 s -1 , and the impact condition (I) has a
strain rate of approximately 1 s-1 . From the static tests, it can be seen that the ultimate
strength is increased with increasing lateral pressure. For intermediate and impact
conditions, the increase in ultimate strength is a combination of lateral pressure and
strain rate effects; the increase is proportional to the static tests, according to Takeda.
However, in the case of impact condition (I) for increasing lateral pressure, it seems
from Figure 4.9 that the increase in ultimate strength is no longer proportional.
No experiments have been done to the author’s knowledge, on confined concrete
behaviour at high strain rates, where the forces of inertia dominate. Similar tests with
higher strain rates would therefore be very interesting.
0
50
100
0 	15 	30
Lateral Stress [MPa]
I
III
S
Axial Stress
[MP ]
Figure 4.9 	Confined 	concrete, 	strain 	rate 	dependency; 	based 	on
Takeda et al. (1974). Curves: Impact (I), intermediate (III) and Static
conditions (S).

-- 46 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 33
4.4.2 	Strain rate effects of confined concrete in tension
Zielinski (1985) performed a series of tests where the loading condition consisted of
static lateral compression and axial static or impact tensile loading. In the static tests,
the axial tensile force was gradually increased up to failure; the rate of loading was
approximately 0.1 N/mm 2 /s. In the impact tests, a drop-weight was used and the rate
of loading was about 104 N/mm/s. In Figure 4.10 the ultimate tensile strength is
shown for either static compression – static tension or static compression – impact
tension. The results show that, at all levels of compressive stress tested, the impact
tensile strength of concrete is higher than the strength with the static load. However,
the ultimate tensile strength of concrete is hardly affected by lateral compressive
stresses up to about 0.7 of the concrete cylinder strength. The lines that are plotted in
Figure 4.10 correspond to the Mohr-Coulomb failure envelope.
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
0.0 	0.1 	0.2 	0.3 	0.4
c
2
f ′
σ
c
1
f ′
σ
f´c 	static 	impact
34.3
14.0
Figure 4.10 	Strength of concrete under biaxial compression–tension. Test results;
based on Zielinski (1985). Lines correspond to the Mohr-Coulumb
failure envelope.
Furthermore, for high static lateral compression, the strains are extended for both
static and impact tensile loading. And for low static lateral compression, the strains
are barely affected; see further Zielinski (1985).

-- 47 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
34
5 	FE modelling of concrete under severe dynamic
loading
5.1 	Introduction
The development of computers during recent decades has created the possibility to
use the finite element (FE) method for severe dynamic loading such as blast waves, or
for penetration analyses of concrete. In this chapter it is described how to use the FE
method for this type of loading situations.
In this thesis the non-linear FE analyses are limited to concrete penetration. The FE
programs 	that 	have 	been 	used 	in 	the 	thesis 	are 	Abaqus/Explicit; 	see
Abaqus/Explicit (2001) 	and 	AUTODYN; 	see 	AUTODYN 	(2001). 	These 	are
discussed in greater detail in sections 5.3 and 5.4. Comparisons with experimental
results and analyses of a projectile impacting a concrete target are discussed in
Chapter 6.
5.2 	Lagrangian, Eulerian and SPH techniques
In FE codes there are two main descriptions for the material movement, i.e. the
Lagrangian and Eulerian descriptions as shown in Figure 5.1. In the Lagrangian
description, the numerical mesh distorts with the material movement. In the Euler
description, the numerical mesh is fixed in space, and the material moves in the
elements. To allow the material movement, the fixed numerical mesh is larger than
the original body.
Figure 5.1 	The Lagrangian description (left) and the Eulerian description (right).
With large displacements, by using the Lagrangian description of the material
movement, numerical problems arise due to distortion and grid tangling of the mesh.
This leads to loss of accuracy and can yield small time steps or even terminate the
calculation. To overcome the numerical problems, a rezoning or erosion algorithm can
be used. Rezoning transforms the current numerical mesh onto a new numerical mesh.
With great distortion or grid tangling, an erosion algorithm must be used to continue
the calculation. Erosion is defined as removal of elements in the analysis when a
predefined criterion is reached; normally this criterion is taken to be the plastic

-- 48 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 35
strains. With the erosion algorithm, a non-physical solution is obtained because of
mass and thus internal strain energy is removed from the system.
Both the Lagrangian and Eulerian techniques are grid-based methods. The Smooth
Particle Hydrodynamics (SPH) technique is a grid less technique, which is relatively
new and has problems such as stability and consistency. Advances are that the
numerical problems with grid tangling are overcome, since the technique is grid less,
and modelling of fracture can be done in a more realistic way. Kernel approximation
is used in the SPH technique; the body is created with interpolation points which are
randomly distributed; see Figure 5.2. Each point will be influenced from points close
to its neighbourhood, which are at some predefined distance. For example, to
calculate the density of point I in Figure 5.2, the marked area will influence the
density for that point with different weights, depending on the distance from that point
– the weighting function. The SPH technique has not been used in this thesis, and thus
is not discussed further.
I
W
I
Figure 5.2 	Principle of the Kernel approximation, based on Clegg et al. (1997).
To the left: particle neighbourhood. To the right: weighting function.
5.3 	Abaqus/Explicit
For non-linear analyses in Abaqus/Explicit there is no unique material models for
both compression and tension. Which model is chosen depends on the type of
analysis. For example if cracking is studied (where the compressive stresses is in the
elastic zone) the brittle cracking model is used. In the case of compressive failure, the
elastic-plastic model is used. The input in the elastic-plastic model is the uniaxial
stress−strain relationship obtained from uniaxial tests as shown in Figure 5.3.
E
σc
εc
Figure 5.3 	Elastic-plastic model for concrete in compression.

-- 49 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
36
The brittle cracking model is used for concrete in tension, as shown in Figure 5.4. The
model is linear−elastic in compression; for tension the softening is described as a
bilinear stress−strain relationship. Here a model proposed by Gylltoft (1983) is used,
which is based on the stress−crack opening relationship. To calculate the maximum
crack width w u, the fracture energy GF and the tensile strength f t of concrete are used.
The crack width is smeared out to a distance, l, as shown in equation (5.1). In two-
dimensional 	models 	for 	un-reinforced 	concrete, 	this 	distance 	is 	normally
approximated by the square root of the area of the element, Johansson (2000).
l	f
G	4
l
w
t
F	u
u 	=	=
	ε 	(5.1)
For crack initiation, Rankine’s criterion is used, i.e. the crack is initiated when the
maximum principal stress reaches the concrete tensile strength.
σ	
σ
f t
w u = 4GF /ft
ε
f t /3
GF
w u/6 	w u 	w
Figure 5.4 	Bilinear uniaxial stress
−strain relationship for concrete in tension,
based 	on 	the 	stress
−crack 	opening 	relationship; 	based 	on
Gylltoft (1983).
The strain rate dependency with the elastic-plastic model can be entered directly as a
tabular function of the equivalent plastic strain rate. The rate dependency is the
dynamic increase factor (DIF), i.e. the relation of dynamic strength to static strength
as a function of strain rate.
For the brittle cracking model, the rate dependency cannot be taken into account.
For the steel, a perfect elastic-plastic model with the von Mises yield criterion is used.

-- 50 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 37
5.4 	AUTODYN
In AUTODYN – AUTODYN (2001) – there are Lagrangian, Eulerian and SPH
techniques 	for 	describing the 	material 	movement. 	In 	this 	thesis 	two 	types 	of
techniques have been used, the Lagrangian and Euler techniques. As described in
section 5.2, in Lagrangian mesh the material is remaining in the elements (cells), and
in Eulerian mesh the material is transported between the elements. With ALE
(Arbitrary Lagrange Euler), the Eulerian and Lagrangian techniques are combined.
The 	governing 	equations 	in 	AUTODYN 	are 	the 	Rankine-Hugoniot 	equations,
conservation of mass, momentum and energy; see equations (2.15), (2.16) and (2.17)
in Chapter 2. To complete the description of the continuum, two further relations
describing the material behaviour are required (besides the load and boundary
conditions): first the equation of state (EOS), and secondly a constitutive model.
5.4.1 	Equation of state
The equation of state (EOS) relates the pressure to the local density (or specific
volume) and the local specific internal energy in the material, with the general form of
)	e	,	(	p	p	
ρ	= 	(5.2)
Where ρ is density and e is specific internal energy.
In FE programs used for static analysis, a constitutive model without any explicit
description of the EOS normally describes the material behaviour. For these programs
at high hydrostatic pressures (all principal stress components are equal), the material
behaviour is linear (if the model has no cap combined with the original yield surface).
For severe loading, e.g. explosion or penetration into concrete, the hydrostatic
pressures levels are so high that the non-linearity of the material behaviour must be
taken into account.
5.4.1.1 	Concrete
When concrete is applied to hydrostatic pressure, the relationship between hydrostatic
pressure and density becomes non-linear at a certain pressure level as shown in
Figure 5.5. Initially, for low-pressure levels the relationship for pressure and density is
linear (elastic loading). With further loading, micro cracking occurs in concrete. Since
concrete is porous, the pores collapse and the material will be compacted; this is
termed as the plastic compaction phase.
At very high pressure levels, when the concrete is fully compacted (all pores are
collapsed), the relationship between pressure and density becomes linear again. The
EOS used in analyses in Chapter 6 is a combined P-Alpha and a polynomial EOS
(implemented in the RHT model: see section 5.4.2.1). The P-Alpha EOS (in P-Alpha
the plastic compaction phase is ten-point piecewise linear; P stands for pressure, and

-- 51 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
38
Alpha is defined as the current porosity) defines the starting point for plastic
compaction, and the polynomial EOS defines the compaction phase. In Figure 5.5 the
initial density, ρ0, is the undisturbed concrete density, and the solid density, ρs, is
defined as the density at zero pressure of the fully compacted solid. The material
behaves elastically until the initial compaction pressure, pcrush, is reached; thereafter
the plastic compaction phase takes place.
p
ρ0	
ρs	
ρ
p crush 	Elastic unloading/reloading
Elastic
loading
Plastic compaction Fully compacted
Figure 5.5 	Equation of state (EOS), combined P-Alpha and polynomial.
5.4.1.2 	Steel
For hydrostatic pressure, steel compression is approximately proportional to the
pressure level. Thus, a linear EOS for steel is used. The pressure level is dependent on
the bulk modulus, K, and the compression, μ (ρ = density), as shown in Figure 5.6.
ρ0
K
p
μ
p=K
μ
ρ
1	/ 	0 −	=
	ρ
	ρ
	μ
Figure 5.6 	Equation of state for steel.
5.4.2 	Constitutive models
The constitutive model relates the stress to the strains (ε), strain rates ( )
	ε& , internal
energy (e) and damage (D), with the general form.
( 	)	D	,	e	,	,	f 	ij	ij	ij	
ε
	ε
	σ 	&	= 	(5.3)

-- 52 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 39
5.4.2.1 	Concrete
The constitutive model used in analyses in this thesis with AUTODYN is the RHT
model, developed by Riedel (2000); see Figure 5.7. The model includes pressure
hardening, strain hardening, strain rate hardening, third-invariant dependence for
compressive and tensile meridians, and a damage model for model strain softening.
Residual Strength
Elastic Limit Surface
Failure Surface
Yield strength, Y
Pressure, p
Figure 5.7 	RHT-model.
The model consists of three pressure-dependent surfaces: a failure surface, an elastic
limit surface, and a surface for residual strength.
The failure surface is a function of pressure and strain rate. The third-invariant
dependence is included in the failure surface; see AUTODYN (2001), which defines
the transfusion from the compressive meridian to tensile meridian and stress states
between these. In equation (5.4) the normalized failure surface (the compressive
meridian) is shown for static loading:
( 	)N
spall
*	*	*
comp 	p	p	A	Y 	−	= 	(5.4)
where A and N define the form of the compressive meridian that is a function of
pressure, p* is the normalized pressure by f c and p*spall is defined as p * (f t /f c ).
The residual strength is defined by the parameters B and M, and is a function of the
pressure level as shown in equation (5.5).
M	*
res
* p	B	Y 	×	= 	(5.5)
5.4.2.2 	Steel
In this thesis, for steel a perfect (non-hardening) von Mises strength model is used as
shown in Figure 5.8. The yield surface can be calculated from the second invariant of
the stresses.

-- 53 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
40
σ2
σ1
σ3
p
Figure 5.8 	von Mises strength model.
5.5 	Treatment of blast, shock and stress waves
Traditionally, for a concrete wall subjected to a blast wave, the load is applied to the
surface as a time-dependent boundary load, where the pressure is often simplified
with 	a 	triangular 	pressure-time 	curve 	according 	to 	equation 	(5.6); 	see 	also
section 2.2.1.
)
t
t
1	(	p	)	t	(	p
+
+ 	−	= 	(5.6)
With new advanced FE techniques, it is possible to follow the analysis from the
explosion to creation of a blast wave and its propagation against the target, although,
with a high computational time. In AUTODYN, time can be saved with a re-mapping
technique, which allows the solution from an analysis to be taken to second analysis.
By using a 1D model of the explosion and the blast wave propagation, it can be
mapped to a 2D or 3D model as an initial load. This method gives more accurate
prediction of the blast wave than using the traditional method with time-dependent
boundary load as described in equation (5.6).

-- 54 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 41
5.6 	Erosion models
With non-linear FE programs it is possible to simulate penetration in concrete by
fragments or projectiles. When a fragment or projectile penetrates concrete, the
elements in the FE model will have large movements. With large displacement, in a
Lagrangian description of the material, the numerical mesh may become highly
distorted, 	leading 	to 	an 	inaccurate 	and 	inefficient 	solution. 	Further, 	this 	may
ultimately lead to a termination of the calculation. To overcome the problem of
distortion and grid tangling, an erosion algorithm can or must be used, implying an
erosion model.
With an Eulerian description of the material movement, the problems of distortion and
grid tangling are overcome, and hence no erosion algorithm is needed, implying a
non-erosion model.
To get realistic solutions, the criterion for erosion (the plastic strain), is normally set
above 150 % (natural strain). A parameter study by Johnson et al. (1998), where a
concrete target was penetrated by a steel projectile, concludes that erosion criteria
above 300 % will give realistic results. In the study, erosion criteria of 200, 300 and
400 % were used. The results for radial stresses and depth of penetration, as well as
the mesh dependency, were compared. The study concluded that the higher the
criterion for erosion is, the more accurate the results will be. However, the results
regarding the general response were similar between the criteria of 300 and 400 %.
The study also showed that with an erosion criterion of 200 %, the depth of
penetration falls in the range of the test data, but the radial stresses become jumpy.
If the erosion criterion is set too low, the behaviour of the system will be inaccurate.
For instance, the stress wave propagation and confined effects will be reduced since
the strain energy cannot be transmitted.
Erosion criteria that are available in AUTODYN are the geometric strain, incremental
geometric strain or effective plastic strain.
In Abaqus/Explicit the criteria for erosion is taken to be the plastic strains for the
elastic-plastic model; see section 5.3.1.1. In the brittle cracking model – see section
5.3.1.1 – the erosion criterion is set to the direct cracking failure strain; the options are
to have an erosion criterion for one, two or three cracks. One crack indicates that an
element will be removed when any local direct cracking strain component reaches the
failure value. Alternatively, two or three cracks indicate that the element will be
removed when two or three cracking strains, respectively, reach the failure value.

-- 55 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
42
5.7 	Parameter study
Here a parameter study with AUTODYN is carried out for a steel projectile impacting
a concrete target. In a study with Abaqus/Explicit; see Leppänen (2001), a parameter
study was performed. The study concluded that the residual strength and the criteria
for erosion influence the depth of penetration. By increasing the residual strength and
the criteria for erosion, the depth of penetration is decreased. A trustworthy model
must capture both the crater size and the depth of penetration, which are used for
comparison in the present parameter study.
To sum up, the parameters of the target that influence the depth of penetration and the
crater size are shown in Table 5.1, with values of large or small influence on the
results. The parameters that will influence the response of the concrete are: the
compressive strength, the tensile strength, the fracture energy, and the strain rate
dependency for both compression and tension. The size of meshing, and with the
Lagrangian method the criteria of erosion, will also influence the results.
Table 5.1 	Parameters that influence the depth of penetration and crater size of
the concrete target.
Parameter 	Influence to the depth
of penetration
Influence to crater size
of the concrete target
Compressive strength 	large 	small
Tensile strength 	small 	large
Fracture energy 	small 	large
Strain rate dependency for
compression
large 	small
Strain rate dependency for
tension
small 	large
Residual strength 	large 	small
Erosion criteria 	large 	small
Mesh dependency 	large 	small
As listed in Table 5.1, the important parameters that influence the depth of penetration
are the compressive strength, the strain rate dependency for compression, the level of
the residual strength, the erosion criteria (with Lagrangian method) and the mesh
dependency. The first three are well known from experimental results but, as far as
the author is aware, the results in the literature are at low strain rates in the case of the
strain rate dependency for compression, while the results on residual strength are for
static and not dynamic loading. Furthermore, the depth of penetration is mesh-
dependent.

-- 56 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 43
The parameters that influence the crater size are the tensile strength, the fracture
energy, and the strain rate dependency for tension. These are well known from
literature, but in the last case only for uniaxial loading. For multiaxial loading at high
strain rates, no experimental results have been reported to the author’s knowledge.
Other factors that influence the depth of penetration and the crater size are the
geometry of the target and the properties of the projectile. For example, the crater size
will increase with increasing projectile diameter. In this comparison, a 6.28 kg
projectile, with a diameter of 75 mm, impacted a concrete cylinder with diameter of
1.6 m and length of 2.0 m at striking velocity of 485 m/s.
A more detailed parameter study has been performed with the Lagrangian method,
according to the parameters of mesh dependency, residual strength and the criteria for
erosion. In addition, a phenomenological study of the strain rate dependency for
tension has been carried out.
5.7.1 	Mesh dependency
It is well know that the size of the numerical mesh affects the results and that with a
refined mesh the computational time increases dramatically. For dynamic loading, the
mesh dependency is even more important since more terms are added to the
constitutive models (the strain rate effect). Johansson (2000) studied the mesh
dependency by comparison of static and dynamic loading. He concluded that if the
strain rate effect was included in the constitutive model, the general behaviour
changed considerably. The strain rate was dependent on the numerical mesh, and
therefore also the increase in dynamic strength is mesh-dependent. Solutions can be
totally invalidated by poor choice of mesh. However, there is a risk of having too fine
a mesh – see Wiberg (1974) – due to discretization and manipulation. Discretization
error is dependent on the numerical modelling, and with an increasing number of
elements the error is reduced. On the other hand, the manipulation error increases with
the number of elements. Manipulation error is due to truncation, round-offs, and
wrong input (too few numbers).
To treat the mesh dependency, the common method is to halve the mesh and compare
the first coarse mesh with the halved finer mesh, and if the results differ negligibly the
analyst is satisfied. In FE analyses with dynamic loading, it is important to use several
meshes to ensure the accuracy of the results. Moreover, changing a mesh size in the
structure must be done with great care.
In FE analyses in Abaqus/Explicit, the effects of meshing have been compared; see
Figure 5.9. In these analyses the criterion for erosion is taken to be 200 % equivalent
plastic strain. In Figure 5.9, the fifth mesh has converged according to the depth of
penetration, by refining the mesh; the result as regard the depth of penetration will
hardly be affected. This is, in principle, treatment of mesh dependency for impact
loading.

-- 57 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
44
Figure 5.9 	Effects of meshing in Abaqus/Explicit.
Zukas and Scheffler (2000) made a study on the effects of meshing. They concluded
that, for accuracy, there should be at least three elements across the radius of the
projectile. With AUTODYN, the mesh dependency was carried out with comparison
of a projectile impacting a concrete target, as shown in Figure 5.10. By starting with
the thumb rule having three elements across the radius of the projectile, the mesh has
been further refined. The mesh sizes and number of elements are shown in Table 5.2.
steel culvert
projectile
Figure 5.10 	Mesh dependency in AUTODYN, four numerical meshes; the size and
number of elements are shown in Table 5.1.
a) 	d)	c)	b)

-- 58 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 45
Table 5.2 	Mesh dependency, size and number of elements for the target. Target
radius is 800 mm and length is 2000 mm. Projectile radius is 37.5 mm.
Mesh 	Size of element
[mm]
Number
of elements
a) 	12.5 	64 x 160
b) 	6.25 	128 x 320
c) 	4.17 	192 x 480
d) 	3.13 	256 x 640
In dynamic loading the strain rate is dependent on the numerical mesh. Here two
comparisons have been performed.
First, the strain rate dependency for tensile strength is overestimated (with δ = 0.11;
see section 5.7.4), and the criterion for erosion (instantaneous geometric strain) is
taken to be 70 %. Secondly, the parameters of strain rate dependency for both tension
and compression are chosen with realistic values.
For the first comparison, as seen in Figure 5.11 the second mesh has converged
according to the depth of penetration. The depth will hardly be affected by further
refining of the mesh. The difference between the coarse mesh “a” and the fine
mesh “c” is approximately 6 % according to the depth of penetration, and respectively
less than 1 % between the medium mesh “b” and the fine mesh “c”.
By further refining of the numerical mesh “d”, the depth of penetration surprisingly
decreases again.
0
200
400
600
800
0.0 	1.0 	2.0 	3.0
Time [ms]
Depth of penetration [mm]
Figure 5.11 	Effects of meshing on depth of penetration, AUTODYN.
Mesh a
Mesh b
Mesh c
Mesh d

-- 59 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
46
A comparison of the crater size for the four meshes shows that they are approximately
the same size, as shown in Figure 5.12.
Mesh a) 	Mesh b)
Mesh c) 	Mesh d)
Figure 5.12 	Effects of meshing on crater size, AUTODYN.
For the second comparison, with a realistic description of the material parameters, and
with an erosion criterion of 125 % (instantaneous geometric strain), the depth of
penetration will not converge as in the first comparison by refining the mesh; see
Figure 5.13. The depths of penetration of the coarse mesh “a” and medium mesh “b”
are approximately the same. The difference between the medium mesh and the fine
mesh “c” is 6 %. By refining the mesh, the depth of penetration will increase.

-- 60 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 47
0
200
400
600
800
0.0 	1.0 	2.0 	3.0
Time [ms]
Depth of penetration [mm]
Figure 5.13 	Parameter study, mesh dependency, depth of penetration.
It is therefore obvious that the results are mesh-dependent, and it is important to
notice that the mesh affects the strain rate in the material, and, thus the strength and
behaviour of the material. When comparing the crack propagation (the damage) by
refining the mesh, the number of fine cracks will increase as shown in Figure 5.14.
Mesh a) 	Mesh b)
Mesh c) 	Mesh d)
Figure 5.14 	Parameter study, mesh dependency of crater size.
Mesh a
Mesh b
Mesh c
Mesh d

-- 61 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
48
5.7.2 	Residual strength
When a fragment or projectile impacts concrete, it will penetrate the concrete. The
concrete will be crushed and the strength of the crushed concrete is the residual
strength. In the uniaxial stress state, the residual strength is always zero. However, in
multiaxial stress states as in real structures, the crushed concrete will contribute to the
resistance. During the penetration, the crushed concrete will be pushed in both
longitudinal and lateral directions, with confining effects.
In AUTODYN the level of the residual strength is estimated by parameters B and N;
see section 5.4.2.1. Here a comparison of residual strengths is made with the
parameter B equal to 0.9, 1.1 and 1.5, and N equal to 0.7. The corresponding yield
surface and the uniaxial stress–strain relationship for confined concrete are shown in
Figure 5.15 and Figure 5.16 respectively (for B equal to 0.9 and 1.5).
0
1
2
3
4
5
6
0 	1 	2 	3 	4
Figure 5.15 	Residual yield surface.
0
50
100
150
0.00 	0.02 	0.04 	0.06 	0.08 	0.10
Axial strain
Axial stress [MPa]
σ lat = 8.6 MPa
σ lat = 0
σ lat = 30.1 MPa
σlat
σc
σc
Figure 5.16 	Stress–strain relationship for confined concrete.
B = 0.9
B = 1.5
failure
surface
B = 0.9
B = 1.5
Y *
p*

-- 62 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 49
The area under the stress−strain curve is a measurement of the energy absorption of
the concrete. The combination of high residual strength and high erosion criterion,
will lead to more energy absorption than a lower residual strength with lower erosion
criteria. This is shown uni−axially schematic form by Figure 5.17. Here, for the
comparison with varying residual strength, the criterion for erosion (the instantaneous
geometric strain) is taken to be 125 %.
εc
σc
Erosion criterion, εf pl
Residual strength
Figure 5.17 	Energy absorption capacity according to residual strength and erosion
criterion.
By increasing the level of the residual strength, the concrete energy absorption is
increased, and the depth of penetration is influenced as shown in Figure 5.18.
However, the crater size is hardly affected by the level of the residual strength, as
shown in Figure 5.19.
0
200
400
600
800
1000
0.0 	1.0 	2.0 	3.0 	4.0 	5.0 	6.0
Time [ms]
Depth of penetration [mm]
Figure 5.18 	Parameter study, residual strength and depth of penetration.
B = 0.9
B = 1.1
B = 1.5

-- 63 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
50
B = 0.9
B = 1.1
B = 1.5
Figure 5.19 	Parameter study, residual strength and crater size.
5.7.3 	Erosion criteria
When studying fragment or projectile penetration into concrete, the Lagrangian
method requires use of an erosion algorithm as described in section 5.6.1. The criteria
for erosion will strongly influence the depth of penetration, as shown in Figure 5.20.
The maximum crater diameter is barely affected by the level of the erosion criterion
as shown in Figure 5.21.

-- 64 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 51
0
200
400
600
800
0.0 	1.0 	2.0 	3.0
Time [ms]
Depth of penetration [mm]
Figure 5.20 	Parameter study, erosion criteria and depth of penetration.
60 %
120 %
180 %
Figure 5.21 	Parameter study, erosion criteria and crater size.
60 %
120 %
180 %

-- 65 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
52
5.7.4 	Strain rate effect of tensile strength
Concrete subjected to impact loading will have an increased strength, in both tension
and compression – the strain rate effect. The increase in tension is as important as the
increase in compression. During the penetration by the projectile, the concrete will be
compressed in both the longitudinal and radial directions. Due to the compression in
the radial direction, a tensile ring will be created around the projectile.
In the RHT model, the increase in tensile strength due to the strain rate effect is
calculated as an increase in the yield surface by a factor FRATE, The increase is
dependent 	on 	the 	strain 	rate 	of 	the 	material 	and 	a 	factor 	δ; 	see 	further
AUTODYN (2001).
δ
ε
ε ÷÷
ø
ö
çç
è
æ
=
0
RATE	F &
&
where 0	
ε& 	refers to static loading.
A phenomenological study of the influence of the tensile strain rate dependency
shows 	that, 	with 	increasing strength, 	the 	crater 	size is 	reduced, 	as 	shown 	in
Figure 5.22. In addition, the depth of penetration is influenced by the tensile strength
as shown in Figure 5.23. Therefore, modelling the increase in tensile strength is as
important as modelling the increase in compressive strength.
δ = 0 	δ = 0.03
δ = 0.07 	δ = 0.11
Figure 5.22 	Phenomenological study of the effect of tensile strength on crater size.

-- 66 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 53
0
200
400
600
800
0.0 	1.0 	2.0 	3.0
Time [ms]
Depth of penetration [mm]
Figure 5.23 	Phenomenological study of the effect of tensile strength on depth of
penetration.
5.8 	Discussion
The complexity of the mesh dependency can be solved by numerical methods, such as
non-local models; see Needleman (1988). However, by using the traditional method
of refining the mesh, reasonable results can still be obtained.
The residual strength has been studied by Attard and Setunge (1996). A model was
developed for determining the full stress–strain curve from standard tri–axial tests,
including the residual strength. The confining pressure varied between 1 and 20 MPa.
In the severe loading case, as in concrete penetration, the confining pressure will
exceed the range of that study. However, the model proposed by Attard and Setunge
will indicate the level of the residual strength, and is used to calculate the residual
strength in this thesis. Furthermore, the yield surface of the residual strength will
approach the failure surface at high pressures; see Imran and Pantazopoulou (2001).
This is captured with the model proposed by Attard and Setunge as well.
As noted above, with the Lagrangian method an erosion algorithm must be used to
avoid numerical problems. By removing elements during the analyses, mass and strain
energy are removed from the system, and non-physical results are obtained. The
Eulerian method is preferable since no erosion algorithm is needed. However, it
increases the computational time and for rapid initial estimation the Lagrangian
method is preferable.
δ = 0
δ = 0.03
δ = 0.07
δ = 0.11

-- 67 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
54
6 	FE analyses of concrete penetration
A FE model with good material models should be able to predict the crater size and
the depth of penetration of a steel projectile impacting a concrete target. In this
chapter, FE analyses have been compared to experimental results. To ensure that the
model can predict the depth of penetration and crater size, results from more than one
experiment must be reproduced. In this thesis two experimental series with a total of 6
shots have been compared.
In a study by Leppänen (2001), FE program Abaqus/Explicit was evaluated, which is
summarized in section 6.2. Furthermore, analyses with AUTODYN by using the RHT
model for the concrete target have been carried out, as described in section 6.3. Two
experimental series have been compared with FE analyses: first, with a 6.28 kg
projectile impacting a concrete cylinder, by Hansson (1998), and secondly with a
0.906 kg projectile impacting a concrete cylinder, by Forrestal et al. (1994). The first
series 	both 	the 	Lagrangian 	and 	Eulerian 	methods, 	and 	the 	second 	series 	the
Lagrangian method have been used for the non-linear FE analyses.
6.1 	Experimental series
In the first of these series, the 6.28 kg steel projectile impacted a concrete cylinder
with a striking velocity of 485 m/s. Two shots are compared, one with support and the
other without any support at the backside of the target. 	In the second series, with a
projectile mass of 0.906 kg, the results of several striking velocities from 277 m/s to
800 m/s are compared with FE analyses.
6.1.1 	Heavy steel projectile
In the experimental series reported by Hansson (1998), a 6.28 kg steel projectile was
used with a length of 225 mm, diameter of 75 mm, density of 7830 kg/m 3 , bulk
modulus of 159 GPa, shear modulus of 81.8 GPa, and yield stress of 792 MPa.
The target was a concrete cylinder cast in a steel culvert with a diameter of 1.6 m and
a length of 2 m. The concrete cube strength was approximately 40 MPa (tested on a
150 mm cube). Two shots were made with the same impact velocity, first with
support and secondly without support at the backside of the target; the results are
shown in Table 6.1.

-- 68 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 55
Table 6.1 	Data summary for the experiments with 6.28 projectile impacting a
concrete cylinder.
Striking velocity
[m/s]
Projectile mass
[kg]
f c,cube
[MPa]
Depth of
penetration
[m]
485 	6.28 	40 	0.655-0.660*
* Two shots were made, first with support and second without support at the backside of the target.
6.1.2 	Light steel projectile
In the series reported by Forrestal et al. (1994), projectiles made from 4,340 steel rods
and heat-treated to a hardness of Rc 43-45 were used. Moreover, filler material was
used in the projectiles, with a density of 1580 kg/m 3 . The projectile length, l, was
242.4 mm; its diameter d was 26.9 mm, and the ogival radius s was 53.8 mm.
The concrete targets were cast in galvanized, corrugated steel culverts with diameter
of 1.37 m and target length of 0.76 m. The shots had striking velocities of 277 m/s and
499 m/s. For two other experiments with impact velocities of 642 and 800 m/s, the
target diameter was 1.22 m and the length 1.83 m. The concrete had a density of
2370 kg/m 3 and the unconfined uniaxial compressive cylinder strength varied between
32.4 and 35.2 MPa. Totally four experiments are compared in this thesis, and their
results are summarized in Table 6.2.
Table 6.2 	Data summary for the experiments with 0.906 kg steel projectile
impacting a concrete cylinder.
Striking velocity
[m/s]
Projectile mass
[kg]
f c
[MPa]
Depth of
penetration
[m]
277 	0.906 	35.2 	0.173
499 	0.912 	33.5 	0.480
642 	0.905 	34.7 	0.620
800 	0.904 	32.4 	0.958

-- 69 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
56
6.2 	Analyses with Abaqus/Explicit
Analyses performed with Abaqus/Explicit are only compared to the experimental
series by Hansson (1998). The FE model was 2-D axi–symmetric with quadratic
elements; for the target of sizing 12.5 mm x 12.5 mm, see Leppänen (2001).
For analysis with large deformations in Abaqus/Explicit, an erosion algorithm must be
used to avoid numerical problems. The erosion algorithm works by removing
elements which have reached a user-specified criterion, in Abaqus/Explicit the plastic
strain.
As previously described in section 5.4, Abaqus/Explicit has no material model that
considers non-linearity for compression and tension at the same time for one element.
With a combination of compression and tension models, it is possible to achieve
results that agree with experiments regarding the depth of perforation and the crater
size, see Figure 6.1 and, for further details, Leppänen (2001).
Figure 6.1 	Analysis with Abaqus/Explicit. Projectile impact a concrete target.
6.3 	Analyses with AUTODYN
The EOS used in the numerical model is a combined P-Alpha EOS and polynomial
EOS; see Figure 5.5. The material parameters is shown in Appendix A. Detailing of
the material parameters are described in AUTODYN (2001); here the compaction
phase (polynomial EOS) is chosen to have the default values from the material library
in AUTODYN. In the experimental series with 6.28 kg projectile, the density of the
concrete is assumed to be 2400 kg/m3 ; see Betonghandboken (1994) (density of plain
concrete).

-- 70 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 57
The constitutive model used in the study is the RHT model shown in Figure 5.7, as
described 	in 	section 	5.4.3. 	Parameters 	A 	and 	N 	describe 	the 	failure 	surface
(compressive meridian); see Appendix A for values. From the knowledge of the
concrete behaviour in tri–axial stress states, the parameters can be decided. In this
thesis, parameters used are calculated according to the model proposed by Attard and
Setunge (1996), as shown in Figure 6.2 for low confining pressures. The proposed
model by Attard and Setunge (1996) is limited to low confining pressures. However,
the parameters A and N used in this thesis fit the experimental data presented by
Bazant et al. (1996), with f’c= 46 MPa; see Figure 4.5.
0
2
4
6
8
10
-2 	0 	2 	4 	6 	8 	10
Figure 6.2 	Failure surface (compressive meridian). F RATE (
ε& ) = 1, Y * and p* is
normalized by f c . Cross markers show input according to model by
Attard 	and 	Setunge 	(1996), 	and 	rectangular 	markers 	show
experimental data from Bazant et al. (1996).
The residual strength, as shown in Figure 6.3, is calculated on the basis of the model
proposed by Attard and Setunge (1996), as previously discussed in section 5.6.
p *
Y *

-- 71 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
58
0
1
2
3
4
5
6
0 	1 	2 	3 	4
Figure 6.3 	Residual 	strength. 	Triangular 	markers 	show 	input 	from 	model
proposed by Attard and Setunge (1996). Dotted line is the failure
Surface.
The material parameters for the constitutive model used in analyses are shown in
Appendix A. In the experimental series by Hansson (1998), the tested concrete cube
strength was 40 MPa. However, the cylinder strength is used as input in the material
model, which is calculated from the cube strength according to the CEB-FIB Model
Code 1990 (1993). In addition, the CEB Model Code 90 is used for calculating the
material parameters, for instance the bulk modulus or tensile strength.
6.3.1 	Mesh descriptions
6.3.1.1 	Numerical mesh 1
The numerical mesh 1 is shown in Figure 6.4, where the results from analysis are
compared to experiments from Hansson (1998). The target is of concrete cast in a
steel culvert. The model is axisymmetric, created by quadratic elements with an
element length of 6.25 mm, totaling 128 x 320 elements (for the target).
steel culvert
projectile
Figure 6.4 	Numerical mesh 1.
Y *
p*

-- 72 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 59
6.3.1.2 	Numerical mesh 2
The numerical mesh 2 is shown in Figure 6.5, where the results from analysis are
compared to experiments from Forrestal et al. (1994). The target is of concrete cast in
a galvanized steel culvert. The model is axisymmetric, created by rectangular
elements with an element length of approximately 4 mm. For a target length of
0.76 m, the mesh size is 190 x 172 elements as seen in Figure 6.5, and for the target
length of 1.83 m the mesh size is 153 x 458 elements.
filler
steel culvert
projectile
Figure 6.5 	Numerical mesh 2.
6.3.2 	Results
For the experimental results from Hansson (1998) the crater size and depth of
penetration have been compared with both the Lagrangian and Eulerian method.
For the experimental results from Forrestal et al. (1994) the depth of penetration has
been compared with the Lagrangian method, and, the crater sizes are shown for the
numerical results.
6.3.2.1 	Experiments with 6.28 kg projectile impacting a concrete cylinder
In the experiments two shots were made, first one with support and secondly one
without any support at the backside. The depths of penetration were 655 mm and
660 mm respectively. The crater diameter was approximately 0.8 m for both shots.
For 	the 	numerical 	comparison 	without 	support 	at 	the 	backside, 	the 	depth 	of
penetration by the was 636 mm with the Lagrangian technique (erosion criterion
of 125 %), and 649 mm with the Eulerian technique, as shown in Figure 6.6.
With the Eulerian technique both the crater size and the depth of penetration agrees
very well with the experimental results. Using the Lagrangian technique, the crater
with erosion criterion of 125 % is too large. By increasing the criterion to 140 %, the
crater size agrees with experiments, but the depth of penetration becomes 584 mm.
For numerical results with support at the backside, the depth of penetration was
627 mm with the Lagrangian technique and erosion criterion of 125 %. With erosion
criteria of 140 % the depth of penetration was 575 mm.

-- 73 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
60
125 	%
140 %
Euler
Figure 6.6 	Cratering and the depth of penetration. Above: Lagrangian mesh;
erosion criteria, e = 125 % and e = 140 %. Below: Eulerian mesh.
Comparison with experiments by Hansson (1998).
6.3.2.2 	Experimental 0.906 kg projectile impacting a concrete cylinder
In 	the 	numerical 	model 	used 	for 	comparison 	with 	experimental 	results 	by
Forrestal et al. (1994), the material parameters (strain rate dependency, residual
strength, and criteria for erosion) for the concrete target are the same as in comparison
with the experimental 	results with 6.28 kg projectile (except for the uniaxial
compressive strength and density; see Appendix A). Totally four experimental results
have been compared, all with a projectile diameter of 26.9 mm, and with varying
impact velocities. The results from the analysis are shown in Figure 6.7, where the
depth of penetration is analysed with the RHT model for different impact velocities.
The projectile was made of steel with hardness of Rc 43–45. The yield strength for this
Rc 43–45 steel is 972 MPa and the ultimate strength is 1448 MPa. In the numerical
model, a von Mises material model is used for the steel. Since the von Mises material
model has no hardening in AUTODYN, the yield strengths of 972 MPa and
1448 MPa were used in the analyses; this gives a lower and an upper limit of the
strength of steel.

-- 74 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 61
0.0
0.2
0.4
0.6
0.8
1.0
1.2
0 	200 	400 	600 	800 	1000
Impact velocity [m/s]
Forrestal et al. *
Exprimental data
AUTODYN *1
AUTODYN *2
Depth of penetration [m]
* Empirical formula from Forrestal et al. (1994).
*1 Yield strength of steel is 1448 MPa.
*2 Yield strength of steel is 972 MPa.
Figure 6.7 	Comparison 	of 	numerical 	results 	with 	experimental 	results 	from
Forrestal et al. (1994).
The same model that was used previously for comparison with experimental results
from the larger projectile having a mass of 6.28 kg – can predict the depth of
penetration of the smaller projectile having a weight of approximately 0.906 kg. In
Figure 6.8 the crater size and depth of penetration are shown from the analyses. The
depth of penetration, maximum crater diameter and the lateral damage are increased
for higher impact velocities. In these analyses the yield strength of the steel in the
projectile was 1448 MPa. The crater size is smaller for the light projectile than in
experiments with the heavier projectile (with mass of 6.28 kg and diameter of
75 mm).

-- 75 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
62
Vs = 277 m/s 	Vs = 499 m/s
Vs = 642 m/s
Vs = 800 m/s
Figure 6.8 	Cratering and the depth of penetration for varying impact velocities of
the projectile. Lagrangian mesh; erosion criterion = 140 %. The yield
strength for the steel of the projectile in the analyses was 1448 MPa.
Comparison with experiments by Forrestal et al. (1994).

-- 76 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 63
In analyses where steel strength used for the projectile was 972 MPa, the results were
very similar at low impact velocities, i.e. 277 m/s and 499 m/s. The crater size and
depth of penetration were hardly affected by the lower steel strength. For the
experiments with higher impact velocities, i.e. 642 m/s and 800 m/s the depth of
penetration is less than when using the ultimate strength of steel in the analyses, see
Figure 6.9.
Vs = 642 m/s
Vs = 800 m/s
Figure 6.9 	Cratering and the depth of penetration. Lagrangian mesh; erosion
criterion = 140 %. The yield strength for the steel of the projectile in
the 	analyses 	was 	972 	MPa. 	Comparison 	with 	experiments 	by
Forrestal et al. (1994).
For the higher impact velocities, the steel strength of the projectile is important. The
projectile deforms when using the true yield strength of the material in the material
model (von Mises), as shown in Figure 6.10. However, when using the ultimate
strength of the steel the projectile will not deform.
Figure 6.10 	Projectile deformations for different yield strengths of steel. Impact
velocity of 800 m/s. Above: The yield strength for steel of the projectile
in the analysis was 1448 MPa. Below: The yield strength for steel in
the projectile of the analysis was 972 MPa.

-- 77 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
64
6.4 	Discussion
Abaqus/Explicit has no material model that can combine non-linearity of compression
and tension at the same time for one element. Normally, two different material models
are combined: for areas where the compressive stresses are high, the compression
model is used, and for areas where tensile stresses are high (where the compressive
stresses are linear) the tension model is used. With a combination of a compression
model and a tension 	model, it is possible to achieve results that 	agree with
experiments 	regarding 	the 	depth 	of 	perforation 	and 	the 	crater 	size. 	However,
Abaqus/Explicit cannot be used for general impact loading, since by using the method
with combined models there can be errors in the analysis even if the end result seems
to be correct. First of all, the stresses will vary from high compressive stresses to high
tensile stresses; this leads to defaults in the analysis. Secondly, the distinction in
where to use the compression and tension models is hard to draw, especially for
analysis with multiple hits, such as fragments impacting a concrete wall.
AUTODYN, on the other hand, was created for analyses with large deformations. For
reliable model, results from several experiments must be reproduced, regarding both
the crater size and the depth of penetration. For example, correct results on depth of
penetration can be obtained by changing, for instance, the residual strength or the
erosion criterion (with the Lagrangian method).
In this thesis, numerical comparisons to experiments by Hansson (1998) were made
with both Lagrangian and Eulerian methods. The erosion criterion, the instantaneous
geometric strain for Lagrangian analyses, was calibrated to fit the experimental
results. 	This 	erosion 	criterion 	was 	further 	used 	for 	comparison 	with 	another
experimental series, in Forrestal et al. (1994), with varying impact velocities for the
projectile.
For the experiments by Forrestal et al. (1994) the projectile was modelled with the
von Mises material model. The model has no hardening, and the difference between
the ultimate strength and the yield strength of the steel is so great that, by using the
yield strength of the material, the depth of penetration will be underestimated.
Therefore, analyses using the ultimate strength as the yield strength in the model were
also carried out. This gives lower and upper limits according to the strength of the
steel in the projectile. At low impact velocities the difference in depth of penetration
is negligible, but for the higher impact velocities the increase of the steel strength is
important as shown in Figure 6.7. In the experiments, non-deforming projectiles were
used. As shown in Figure 6.10, in the analysis the projectile will deform when the
increase in steel strength is not modelled. Hence, modelling the steel accurately,
i.e. including 	hardening 	in 	the 	material 	model, 	is 	important 	at 	higher 	impact
velocities.

-- 78 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 65
6.5 	Concluding remarks
Abaqus/Explicit is limited for impact analyses and is not suitable for general
penetration analyses. With a knowledge of concrete under tri–axial stress states
(failure surface, residual strength etc.), and with sophisticated material models such as
the RHT model in AUTODYN, the depth of penetration and the crater size can be
predicted.
In this thesis two experimental series has been compared, with varying projectile
weights and impact velocities; in all cases the depth of penetration was predicted well.
The Eulerian method is preferable. With the Lagrangian method, by using the erosion
algorithm, elements are removed from the model and thus also mass and strain
energy, and non-physical results are obtained. However, the Lagrangian method is
time-saving.
For the concrete target, the material parameters that mostly influence the depth of
penetration are the compressive strength, the strain rate dependency for compression,
and the level of the residual strength. The fracture energy, tensile strength, and strain
rate dependency for tension are the material parameters that mostly influence the
crater size. The projectile impact velocity, mass, diameter and shape are of course also
important factors for the depth of penetration and crater size.

-- 79 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
66
7 	Conclusions
7.1 	General conclusions
The main aim of this thesis was to increase the knowledge of concrete structures
subjected to explosive loading. A further intention has been to describe how to use the
non-linear FE method for severe loading cases. FE analyses with a combination of
blast and fragment impacts are very complex; in this thesis the analyses are limited to
projectiles impacting a concrete target.
The theory of blast waves and their reflections describes the nature of the explosion.
By using this, the load can be applied to a concrete structure in a realistic way. The
classic stress wave theory describes the stress wave propagation in concrete at
dynamic loading for elastic materials. Concrete under severe loading is far from
elastic and the classic elastic assumptions are not valid; the shock wave theory is used
to describe the material behaviour. The fundamental shock wave equations are based
on the equations for conservation of mass, momentum and energy.
The concrete behaviour changes under dynamic loading. The initial stiffness, the
ultimate strength, in both compression and tension will increase, and the concrete
strain capacity is extended in dynamic loading. Furthermore, the fracture of a concrete
member changes at dynamic loading and multiple fracture planes are obtained.
For design of protective structures, their penetration by fragments and projectiles is an
important issue, and traditionally empirical equations are used to predict the depth of
penetration. In the literature there are empirical equations to predict the depth of
penetration for fragments and projectiles impacting a concrete target. The empirical
equations give a good prediction of the depth of penetration, but will not describe the
structural behaviour of the concrete structure. To increase the knowledge of concrete
subjected to severe loading, a combination of experiments with the FE method is a
powerful tool. It can be used for detailed analysis of the structural behaviour.
In this thesis, the FE programs Abaqus/Explicit and AUTODYN have been used for
projectiles impacting a concrete target. Abaqus/Explicit has limitations; the program
lacks material models that describe non-linearity for both compression and tension
(for the same element). In Abaqus/Explicit, an erosion algorithm must be used to
avoid numerical problems. By using the erosion algorithm, elements during the
analyses are removed, thus mass and strain energy, and non-physical results are
obtained.
AUTODYN was created originally for large deformation analyses. In AUTODYN
there are several methods – Lagrangian, Eulerian and SPH – to describe the material
movement. In this thesis the SPH technique has not been investigated. With the
Lagrangian method, an erosion algorithm must be used to avoid numerical problems,
and the level of erosion influences the depth of penetration. With the Eulerian method
the numerical grid is fixed in space and the material moves in the grid, so that no
erosion algorithm is needed. The Eulerian method is preferable since physical
solutions are obtained, although, the computational time increases. For saving time,
the Lagrangian method is preferable, and it is recommended for first estimations in
new problems.

-- 80 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 67
A reliable model must be able to describe experimental results. The RHT model in
AUTODYN seems to be able to predict both the depth of penetration and the crater
size for projectile impact analyses in concrete.
The material parameters that mostly influence the depth of penetration are the
concrete compressive strength, the strain rate dependency for compression, and the
level of the residual strength. Furthermore, the numerical mesh influences the depth of
penetration. The mesh dependency is commonly treated by refining the mesh until the
differences are negligible. However, the results obtained in this thesis are reasonable.
The material parameters that mostly influence the size of the crater are the tensile
strength, the fracture energy and the strain rate dependency for tension.
7.2 	Future research
The work presented in this thesis is a part of a research project whose long-term aim
is to increase the knowledge of reinforced concrete structures subjected to loading
with a combination of blast and fragments from an explosion. To reach the aim,
combining experiments with non-linear FE analyses is a powerful tool, and is a
natural continuation of this thesis.
From the explosion, besides the blast wave and fragmentation, much energy is
released in the form of increasing temperature in the materials. In this thesis the
temperature effects are neglected, and further study is needed where they are taken
into account.
A large research area has been the behaviour of concrete under dynamic loading. The
experiments carried out so far in the literature are mainly for uniaxial loading.
Experiments on dynamic loading for confined concrete are limited to low strain rates.
There is need of experimental results on confined concrete under loading at high
strain rates, for both compression and tension, to increase the knowledge of concrete
behaviour and the input for material models.
From standard tri–axial static tests, the residual strength can be estimated, and has
been used for non-linear FE analyses in this thesis. However, it is not obvious that the
residual 	strength 	is 	equal 	for 	dynamic 	loading 	compared 	to 	static 	loading.
Experimental results under dynamic loading would thus be very interesting.
For FE analyses the strain rate in the material is mesh-dependent. The traditional way
to treat the mesh dependency is to refine the mesh. There are various methods of
overcoming the mesh dependency, such as using non-local material models, and these
should also be developed further.

-- 81 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
68
8 	References
Abaqus/Explicit Manuals (1998). Abaqus/Explicit Manuals, Version 5.8, Hibbitt,
Karlsson & Sorensen, Inc. 1998, USA.
Attard M. M. and Setunge S. (1996): Stress-strain relationship of confined and
unconfined concrete. Aci Materials Journal, Vol. 93, No. 5, Sep-Oct 1996,
pp. 432-442.
AUTODYN Manuals (2001): AUTODYN Manuals, Version 4.2, Century Dynamics,
Inc. 2001, Sam Ramon, USA.
Baker W. E. (1973): Explosions in air, Univ. of Texas Press, Austin, 268 pp.
Bazant Z. P., Bishop F. C. and Chang T. P. (1986): Confined Compression Tests of
Cement Paste and Concrete up to 300-ksi. Journal of the American Concrete
Institute, Vol. 83, No. 4, Jul-Aug 1986, pp. 553-560.
Bazant Z. P., Xiang Y. Y., Adley M. D., Prat P. C. and Akers S. A. (1996):
Microplane model for concrete .2. Data delocalization and verification. Journal of
Engineering Mechanics-Asce, Vol. 122, No. 3, Mar 1996, pp. 255-262.
Bergman S. G. A. (1950): Inträngning av pansarbrytande projektiler och bomber i
armerad betong (in Swedish). FortF/F TM B 2, 1950, pp. 179-217.
Betonghandbok (1994): Betonghandbok, Material, utgåva 2 (Handbook for Concrete
Material, second edition, in Swedish), AB Svensk Byggtjänst och Cementa AB,
Solna, 1127 pp.
Bischoff P. H. and Perry S. H. (1991): Compressive behaviour of concrete at high
strain rates. Materials and Structures, Vol. 24, 1991, pp. 425-450.
Bulson P. S. (1997): Explosive loading of engineering structures, E & FN Spon,
London, 233 pp.
CEB-FIB Model Code 1990 (1993): CEB-FIB Model Code 1990, Design Code,
Thomas Telford, Lausanne, Switzerland, 437 pp.
Clegg R. A., Sheridan J., Hayhurst C. J. and Francis N. J. (1997): The application of
SPH techniques in AUTODYN-2D to kinetic energy penetrator impacts on multi-
layered soil and concrete targets. 8 th International Symposium on Interaction of the
Effects of Munitions with Structures, Virginia, USA, pp. 9.
ConWep (1992): Collection of conventional weapons effects calculations based on
TM 5-855-1, Fundamentals of Protective Design for Conventional Weapons, U. S.
Army Engineer Waterways Experiment Station, Vicksburg, USA.
Forrestal M. J., Altman B. S., Cargile J. D. and Hanchak S. J. (1994): An Empirical
Equation for Penetration Depth of Ogive-Nose Projectiles into Concrete Targets.
International Journal of Impact Engineering, Vol. 15, No. 4, Aug 1994,
pp. 395-405.
Forsén R. (1989): Initialverkan, verkan på byggnader av inneslutna explosioner (in
Swedish). C 20747-2.6, FOA Rapport, Stockholm, 37 pp.
Forsén R. and Edin K. (1991): Vapenverkan mot flervånings betongbyggnad III.
Bestämning av skador från splitterladdningar mot husfasad i skala 1:4 (in
Swedish). C 20860-2.3, FOA report, Sundbyberg, 40 pp.

-- 82 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 69
Forsén R. and Nordström M. (1992): Damage to Reinforced Concrete Slabs Due to
the Combination of Blast and Fragment Loading (In Swedish). B 20101-2.6,
National Defence Research Establishment (FOA), Tumba, 12 pp.
FortH1 (1987): Fortifikationshandbok del 1, Kapitel 1-3 (In Swedish), Stockholm,
50 pp.
Geradin M. and Rixen D. (1994): Mechanical Vibrations, Theory and Application to
Structural Dynamics, Wiley, Paris, 411 pp.
Gylltoft K. (1983): Fracture mechanics models for fatigue in concrete structures.
Doctoral Thesis, Division of Structural Engineering, Luleå University of
Technology, Luleå, Sweden, 210 pp.
Hansson H. (1998): Numerical simulation of concrete penetration. 98-00816-311--SE,
FOA-R, Defence Research Establishment, Tumba, 17 pp.
Hughes G. (1984): Hard missile impact on reinforced concrete. Nuclear Engineering
and Design, Vol. 77, 1984, pp. 23-35.
Imran I. and Pantazopoulou S. J. (2001): Plasticity model for concrete under triaxial
compression. Journal of Engineering Mechanics-ASCE, Vol. 127, No. 3, March
2001, pp. 281-290.
Janzon B. (1978): Grundläggande Stridsdelsfysik (in Swedish). C 20261-D4, FOA
Rapport, Stockholm, 164 pp.
Johansson J. P. M. and Karlsson S. (1997): Nytt armeringsutförande i betongramhörn
utsatta för positivt moment (in Swedish). Master Thesis 97:5, Division of Concrete
Structures, Chalmers University of Technology, Göteborg, Sweden, 145 pp.
Johansson M. (1996): New Reinforcement Detailing in Concrete Frame Corners of
Civil Defence Shelters. Licentiate Thesis, Publication 96:1, Department of
Structural Engineering, Division of Concrete Structures, Chalmers University of
Technology, Göteborg, 78 pp.
Johansson M. (1999): Non-linear Finite Element Analyses of Civil Defence Shelter
Subjected to Explosion Load or Collapse Load. Report 99:8, Department of
Structural Engineering, Division of Concrete Structures, Chalmers University of
Technology, Göteborg, 85 pp.
Johansson M. (2000): Structural Behaviour in Concrete Frame Corners of Civil
Defence Shelters, Non-linear Finite Element Analyses and Experiments. Doctoral
Thesis, Department of Structural Engineering, Chalmers University of Technology,
Göteborg, Sweden, 204 pp.
Johansson M. (2002): Stötvågsutbredning i luft (in Swedish). Publication B54-223/02,
Swedish Rescue Service Agency, Karlstad, Sweden.
Johnson G. R., Beissel S. R., Holmquist T. J. and Frew D. J. (1998): Computed radial
stresses in a concrete target penetrated by a steel projectile. Fifth International
Conference on Structures Under Shock and Impact V, pp. 793-806.
Jonasson T. (1990): Kontaktverkan 1, Sprängladdningars kontaktverkan på armerade
betongplattor. C 20809-2.6, FOA rapport, Sundbyberg, 58 pp.
Krauthammer T. (2000): Modern Protective Structures, Design, Analysis and
Evaluation. Course notes, The Pennsylvania State University, 358 pp.

-- 83 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4
70
Leppänen J. (2001): Finita Elementanalyser av splitterbelastade
betongkonstruktioner, Inledande studie med ABAQUS/Explicit (in Swedish).
Rapport 01:1, Institutionen för konstruktionsteknik, Betongbyggnad. Chalmers
Tekniska Högskola, Göteborg, 72 pp.
Needleman A. (1988): Material Rate Dependence and Mesh Sensitivity in
Localization Problems. Computer Methods in Applied Mechanics and Engineering,
Vol. 67, No. 1, Mar 1988, pp. 69-85.
Nordström M. (1992): Splitterbelastning av betongplattor 1, Metodik för bestämning
av energiupptagande förmåga hos armerade betongplattor belastade med olika
splittertätheter (in Swedish). D 20209-2.3, FOA rapport, Sundbyberg, 54 pp.
Nordström M. (1993): Splitterbelastning av betongplattor II, Energiupptagande
förmåga hos armerade betongplattor belastade med olika splittertätheter. (in
Swedish). D 20226-2.3, FOA rapport, Sundbyberg, 30 pp.
Nordström M. (1995): Splitterbelastning av betongplattor III, Energiupptagande
förmåga hos armerade betongplattor belastade med olika kombinationer av
splitterhastigheter, splittertätheter och splitterstorlekar. (in Swedish). 95-00094-
7(6,2.6)--SE, FOA-R, Stockholm, 101 pp.
Plos M. (1994): Ny armeringsskarv för ramhörn i skyddsrum (in Swedish). Report
94:2, Division of Concrete Structures, Chalmers University of Technology,
Göteborg, Sweden, 27 pp.
Riedel W. (2000): Beton unter dynamischen Lasten Meso- und makromechanische
Modelle und ihre Parameter (in German). Doctoral Thesis, Institut
Kurzzeitdynamik, Ernst-Mach-Institut, der Bundeswehr Munchen, Freiburg,
210 pp.
Ross C. A., Jerome D. M., Tedesco J. W. and Hughes M. L. (1996): Moisture and
strain rate effects on concrete strength. Aci Materials Journal, Vol. 93, No. 3, May-
Jun 1996, pp. 293-300.
Rossi P. and Toutlemonde F. (1996): Effect of loading rate on the tensile behaviour of
concrete: Description of the physical mechanisms. Materials and
Structures/Materiaux et Constructions, Vol. 29, No. 186, Mars 1996, pp. 116-118.
Swedish Rescue Services Agency (1994): Shelter Regulations, SR - English edition,
Publication B54-168/94, Karlstad, Sweden, 94 pp.
Swedish Rescue Services Agency (1998): Skyddsrumsregler SR - Produktion och
vidmakthållande, (Shelter Regulations - Production and Maintenance. in Swedish),
Publication B54-141/98, Karlstad, Sweden.
Takeda J., Tachikawa H. and Fujimoto K. (1974): Mechanical behavior of concrete
under higher rate loading than in static test. Proc. Mechanical Behaviour of
Materials, pp. 479-486.
US Army Fundamentals of Protective Design (Non-nuclear) (1965): US Army
Fundamentals of Protective Design (Non-nuclear), Department of Army Technical
Manual TM5-855-1, Washington.
Weerheijm J. (1992): Concrete under impact tensile loading and lateral compression.
Doctoral Thesis, Delft University of Technology, The Netherlands, 157 pp.

-- 84 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 71
Wiberg N. E. (1974): Finita Elementmetoden, en datoranpassad beräkningsmetod för
ingenjörsproblem (in Swedish), LiberTryck, Göteborg, Sweden, 1974, 427 pp.
Zielinski A. J. (1982): Fracture of concrete and mortar under uniaxial impact tensile
loading. Doctoral Thesis, Delft University of Technology.
Zielinski A. J. (1985): Concrete under biaxial loading: Static compression-impact
tension. Stevin Report 5-85-1, Delft University of Technology.
Zukas J. A. and Scheffler D. R. (2000): Practical aspects of numerical simulations of
dynamic events: effects of meshing. International Journal of Impact Engineering,
Vol. 24, No. 9, Oct 2000, pp. 925-945.

-- 85 of 96 --



-- 86 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4 	A1
Appendix A: Input data to RHT model in AUTODYN
Input data for concrete: RHT model, equation of state (EOS).
Parameter 	Experiments
with 6.28 kg
projectile
Experiments
with 0.906
kg projectile
Porous density (g/cm 3 ) 	2400 	2370
Porous soundspeed (m/s) 	2920 	2920
Initial compaction pressure 	2.33e4 	2.33e4
Solid compaction pressure 	6e6 	6e6
Compaction exponent n 	3 	3
Solid EOS: 	Polynomial 	Polynomial
Compaction curve: 	Standard 	Standard
A1 (kPa) 	3.527e7 	3.527e7
A2 (kPa) 	3.958e7 	3.958e7
A3 (kPa) 	9.04e6 	9.04e6
B0 	1.22 	1.22
B1 	1.22 	1.22
T1 (kPa) 	3.527e7 	3.527e7
T2 (kPa) 	0 	0

-- 87 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4	A2
Input data for concrete: RHT model, constitutive model.
Parameter
Experiments
with 6.28 kg
projectile
Experiments
with 0.906 kg
projectile
Shear Modulus (kPa) 	1.433e7 	1.433e7
Compressive Strength f´ c (kPa) 	3.38e4 	f´ c
Tensile Strength f t /f c 	0.078 	0.078
Shear Strength f s/f c 	0.18 	0.18
Failure Surface Parameter A 	2 	2
Failure Surface Parameter N 	0.7 	0.7
Tens./Compr. Meridian Ration 	0.6805 	0.6805
Brittle to Ductile Transit. 	1.05e-2 	1.05e-2
G(elas.)/G(elas-plas.) 	2 	2
Elastic Strength/f t 	0.7 	0.7
Elastic Strength/f´ c 	0.53 	0.53
Use Cap on Elastic Surface 	Yes 	Yes
Residual Strength Const. B 	1.5 	1.5
Residual Strength Exp. M 	0.7 	0.7
Comp. Strain Rate Exp. a 	0.032 	0.032
Tens. Strain Rate Exp. D 	0.025 	0.025
Max. Fracture Strength Ratio 	1e20 	1e20
Damage constant D1 	0.04 	0.04
Min. Strain to Failure 	0.01 	0.01
Residual Shear Modulus Frac. 	0.13 	0.13
Tensile Failure model 	Hydro Tens. 	Hydro Tens.
Erosion Strain/instantaneous
geometric strain (Lagrange) 1.25 and 1.4 	1.4

-- 88 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4 	B1
Appendix B: Parameter study
The parameter study has been carried out with experiments using a 6.28 kg projectile,
where the material parameters are shown in Appendix A.
Influence of 	Residual
Strength
Erosion
criteria
Mesh 	Strain
rate
factor δ
Depth of
penetration
[mm]
Maximum
crater size
[mm]
Residual
Strength, B 	0.9 	1.25 	mesh a 	0.025 	811 	600
1.1 	1.25 	mesh a 	0.025 	662 	640
1.5 	1.25 	mesh a 	0.025 	601 	665
Erosion
criteria 	1.5 	0.6 	mesh a 	0.025 	732 	755
1.5 	1.2 	mesh a 	0.025 	529 	780
1.5 	1.8 	mesh a 	0.025 	411 	575
Mesh
dependency 	1.5 	1.25 	mesh a 	0.025 	629 	615
1.5 	1.25 	mesh b 	0.025 	636 	605
1.5 	1.25 	mesh c 	0.025 	675 	610
1.5 	1.25 	mesh d 	0.025 	721 	635
Strain rate
factor δ 	1.5 	1.25 	mesh a 	0 	651 	760
1.5 	1.25 	mesh a 	0.03 	572 	615
1.5 	1.25 	mesh a 	0.07 	481 	585
1.5 	1.25 	mesh a 	0.11 	417 	340

-- 89 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4	C1
Appendix C: Empirical formulas for penetration with
projectiles
Bergman (1950)
)	V	*	*	005	.	0
V	*
18	.	0
44	.	1	(
s
73	.1
s	73	.1
s
V	*	*	86	.	4
d
x	
χ
χ
	χ +	+
= 	for ≥ 3.5 	(C.1)
If 	5	.	3
d
x < 	then
5	.	3	*
V
V
d
x
5	.	3
s
= 	(C.2)
where V3.5 is the velocity that corresponds to 	5	.	3
d
x = 	.
In these formulas,
8
8	.	2
c
p 10	*	57	.	7	*
d	*
m	*	N −
=
σχ 	(C.3)
and x = depth of penetration [m], mp = projectile mass [kg],
σc = concrete compressive
cube strength [MPa], Vs= impact velocity [m/s], d = projectile diameter, and N is
given from Figure C.1.
d
h
27	.	0	70	.	0	N 	+	=
h
d
Figure C.1 	Nose shape factors.
The experimental ranges in which the equation is valid for ogival projectiles with nose
shapes between calibre diameters of d: 0.1 to 0.4 [m], N: 0.8 to 1.2,
mp: 0.02 to 1,000 [kg],
σc: 30 to 50 [MPa], D: 0.1 to 0.4 [m] and Vs< 1,200 [m/s].

-- 90 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 	C2
Whiffen (1983)
British Road Research Laboratory produced an empirical formula, Whiffen (1983),
according to Bulson (1997):
n
s
1	.	0
2
p
5	.	0
c 1750
V
c
d
d
m	870
x 	÷
ø
ö
ç
è
æ
÷
ø
ö
ç
è
æ
÷
÷
ø
ö
ç
ç
è
æ
÷
÷
ø
ö
ç
ç
è
æ
=
σ (C.4)
where x = depth of penetration [in], mp = projectile mass [lb],
d = projectile diameter [in],
σc = crushing strength of concrete [lb/in2
],
Vs = striking velocity [ft/sec], c = maximum aggregate size [in],
and
25	.0
c
7	.	10
n
σ
= 	(C.5)
The experimental ranges on which the equation was based were for ogival projectiles
with nose shapes between 0.8 and 3.5 calibre radius and
σc: 800 to 10,000 (lb/in2 ),
mp: 0.3 to 22,000 (lb), d: 0.5 to 38 (in), d/c: 0.5 to 50, Vs: 0 to 3700 (ft/sec).
(The formula fitted experimental data within a scatter, slightly less than ± 15 % wide.)
US Army Technical Manual on the Fundamentals of Protective Design (1965),
based on the work by Beth (1943)
The units are the same as those in the British formula, see equation (C.4), and the
accuracy was said to be within ± 15%.
5	.	1
s	215	.	0
2
p
5	.	0
c 1000
V
d
d
m	4	222
x 	÷
ø
ö
ç
è
æ
÷
÷
ø
ö
ç
ç
è
æ
=
π
	σ , [in] 	(C.6)
Hughes (1983)
S
I
*	*	19	.	0
d
x
κ	= 	(C.7)
Where
κ = nose shape coefficient (= 1, 1.12, 1.26 and 1.39 for flat, blunt, spherical and very
sharp noses respectively), I = impact parameter (= mp Vs2 /(σt d3)), S = strain rate factor
(= 1+12.3 ln(1+0.03xI)), mp = missile mass [kg], Vs = impact velocity [m/s],
σt = concrete tensile strength (modulus of rupture test) [Pa], d = missile diameter [m],
2	/1
c	t 	)	(	63	.	0	
σ
	σ 	= 	. 	(C.8)

-- 91 of 96 --

CHALMERS, Structural Engineering, Publication no.02:4	C3
Forrestal et al. (1994)
a	4	)
S
V	N
1	ln(
N	a	2
m
x
c
2
1
2
p +	+	=
σ
ρ
ρ
	π for x>4a 	(C.9)
1	)
m
N	)	a	4	x	(	a	2
exp(	)
m
N	a	4
1	(
1
*
V	N
S
p
2
p
3
c
2
s
−
−
+
=
ρ
	π
	ρ
	π
	σ
ρ (C.10)
2
24
1	8
N
ψ
ψ −
= 	(C.11)
ρ
	π
σ
	π
N	a	4	m
S	a	4	V	m
V 3
p
c
3	2
s	p	2
1 +
−
= 	(C.12)
where
mp = projectile mass [kg], a = shank radius [m], s = ogive radius [m], ψ = s/2a,
σc = concrete compressive strength, ρ = target density [kg/m 3 ], Vs = striking
velocity [m/s], and the proportionality S is estimated as
544	.0
c )	´	f	(	6	.	82	S −
= 	(C.13)
Limitations
The empirical formulas are validated for a diverse range of experimental data. The
limitations of the formulas are shown in Table C.1.
Table C.1. 	Limitations of the empirical formulas.
Formula by 	Impact
velocity
[m/s]
Projectile
weight
[kg]
Projectile
diameter
[m]
Concrete
strength, f´ c
[MPa]
I *
Bergman 	<1200 	0.02-1000 	0.1-0.4 	25.5-42.5 	-
Beth 	- 	- 	- 	- 	-
Forrestal 	<1200 	0.064-5.9 	<0.0762 	13.5-96.7 	-
Hughes 	- 	- 	- 	- 	40-3500
Whiffen 	<1128 	0.1368-
10000
0.0127-
0.9652
5-58.6 	-
* I=mp v 2
/(σtd 3
), I<40 corresponds to h/d<3.5 and x/d<0.7, and I<3500 corresponds to the range of test data.

-- 92 of 96 --

CHALMERS, Structural Engineering, Publication no. 02:4 	D1
Appendix D: Empirical formulas for penetration with
fragments
The depth of penetration
The depth of penetration is estimated by equations (D.1) and (D.2), according to
Krauthammer (2000).
25	.	0
c
9	.	0
s
37	.	0
f
f
V	m	95	.	0
x ′
= 	for 3	/	1
f	m	4	.	1	x ≤ 	(D.1)
or
3	/	1
f	25	.	0
c
8	.	1
s
4	.	0
f m	4	.	0
f
V	m	32	.	0
x 	+
′
= 	for 3	/	1
f	m	4	.	1	x > 	(D.2)
where mf = fragment weight [oz], Vs = the fragment striking velocity [kfps] and
f´ c = the concrete compressive strength [psi].
The thickness of concrete wall that just prevent perforation
For steel fragments, the thickness of concrete wall that just prevents perforation is
calculated as in Krauthammer (2000):
33	.	0
f
033	.	0
f	pf 	m	91	.	0	xm	09	.	1	t 	+	= 	inches 	(D.3)
where x is the penetration depth from equations (D.1) and (D.2), and mf is the
fragment weight.

-- 93 of 96 --



-- 94 of 96 --

Licentiate Theses and Doctoral Theses, Department of Structural Engineering –
Concrete Structures, Chalmers University of Technology, 1990-
90:1 	Stig Öberg: Post Tensioned Shear Reinforcement in Rectangular RC Beams.
Publication 90:1. Göteborg, April 1990. 603 pp. (No. 1021). Doctoral Thesis.
90:2 	Johan Hedin: Långtidsegenskaper hos samverkanskonstruktioner av stål och
betong (Long Time Behaviour of Composite Steel Concrete Structures).
Publication 90:2. Göteborg, August 1990. 53 pp. (No. 1079). Licentiate
Thesis.
92:1 	Björn Engström: Ductility of Tie Connections in Precast Structures.
Publication 92:1. Göteborg, October 1992. 368 pp. (Nos. 936, 999, 1023,
1052). Doctoral Thesis.
93:1 	Mario Plos: Shear Behaviour in Concrete Bridges - Full Scale Shear Test.
Fracture Mechanics Analyses and Evaluation of Code Model. Publication
93:1. Göteborg, April 1993. 70 pp. (Nos. 1088, 1084). Licentiate Thesis.
93:2 	Marianne Grauers: Composite Columns of Hollow Steel Sections Filled with
High Strength Concrete. Publication 93:2. Göteborg, June 1993. 140 pp.
(No. 1077). Doctoral Thesis.
93:4 	Li An: Load Bearing Capacity and Behaviour of Composite Slabs with
Profiled Steel Sheet. Publication 93:4. Göteborg, September 1993. 134 pp.
(No. 1075). Doctoral Thesis.
93:5 	Magnus Åkesson: Fracture Mechanics Analysis of the Transmission in Zone in
Prestressed Hollow Core Slabs. Publication 93:5. Göteborg, November, 1993.
64 pp. (No 1112). Licentiate Thesis.
95:1 	Christina Claeson: Behavior of Reinforced High Strength Concrete Columns.
Publication 95:1. Göteborg, June 1995. 54 pp. (No. 1105). Licentiate Thesis.
95:2 	Karin Lundgren: Slender Precast Systems with Load-Bearing Facades.
Publication 95:2. Göteborg, November 1995. 60 pp. (No. 1098). Licentiate
Thesis.
95:3 	Mario Plos: Application of Fracture Mechanics to Concrete Bridges. Finite
Element Analysis and Experiments. Publication 95:3. Göteborg, November
1995. 127 pp. (Nos. 1067, 1084, 1088, 1106). Doctoral Thesis.
96:1 	Morgan Johansson: New Reinforcement Detailing in Concrete Frame Corners
of Civil Shelters. Non-linear Finite Element Analyses and Experiments.
Publication 96:1. Göteborg, November 1996. 77 pp. (No. 1106). Licentiate
Thesis.
96:2 	Magnus Åkesson: Implementation and Application of Fracture Mechanics
Models for Concrete Structures. Publication 96:2. Göteborg, November 1996.
159 pp. (No. 1112). Doctoral Thesis.

-- 95 of 96 --

97:1 	Jonas Magnusson: Bond and Anchorage of Deformed Bars in High-Strength
Concrete. Publication 97:1. Göteborg, November 1997. 234 pp. (No. 1113).
Licentiate Thesis.
98:1 	Christina Claeson: Structural Behavior of Reinforced High-Strength Concrete
Columns. Publication 98:1. Göteborg 1998. 92 pp + I-IV, 75 pp. (No. 1105).
Doctoral Thesis.
99:1 	Karin Lundgren: Three-Dimensional Modelling of Bond in Reinforced
Concrete. Theoretical Model, Experiments and Applications. Publication 99:1.
Göteborg, November 1999. 129 pp. (No. 37). Doctoral Thesis.
00:1 	Jonas Magnusson: Bond and Anchorage of Ribbed Bars in High-Strength
Concrete. Publication 00:1. Göteborg, February 2000. 300 pp. (No. 1113).
Doctoral Thesis.
00:2 	Morgan Johansson: Structural Behaviour in Concrete Frame Corners of Civil
Defence Shelters. Publication 00:2. Göteborg, March 2000. 220 pp.
(No. 1106). Doctoral Thesis.
00:3 	Rikard Gustavsson: Static and Dynamic Finite Element Analyses of Concrete
Sleepers. Publication 00:3. Göteborg, March 2000. 58 pp. (No. 41). Licentiate
Thesis.
00:4 	Mathias Johansson: Structural Behaviour of Circular Steel-Concrete Columns.
Non-linear Finite Element Analyses and Experiments. Publication 00:4.
Göteborg, March 2000. 64 pp. (No. 48). Licentiate Thesis.
01:3 	Gunnar Holmberg: Fatigue of Concrete Piles of High Strength Concrete
Exposed to Impact Load. Publication 01:3. Göteborg, August 2001. 69 pp.
(No. 55). Licentiate Thesis.
02:1 	Peter Harryson: Industrial Bridge Construction – merging developments of
process, productivity and products with technical solutions. Publication 02:1.
Göteborg, January 2002. 90 pp. (No. 34). Licentiate Thesis.
02:2 	Ingemar 	Löfgren: 	In-situ 	concrete 	building 	systems 	– 	developments 	for
industrial constructions. Publication 02:2. Göteborg, March 2002. 125 pp.
(No. 35). Licentiate Thesis.

-- 96 of 96 --