---
title: "L04 103 Design With Regard To Explosions"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-103_design-with-regard-to-explosions.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","beräkning","explosion","vatten","load","beam","material"]
summary: "Design with regard to explosions Master’s Thesis in the International Master’s Programme Structural Engineering ULRIKA NYSTRÖM Department of Civil and Environmental Engineering Division of Structural Engineering Concrete Structures CHALMERS UNIVER..."
---

Design with regard to explosions
Master’s Thesis in the International Master’s Programme Structural Engineering
ULRIKA NYSTRÖM
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2006
Master’s Thesis 2006:14
Shelter

-- 1 of 221 --



-- 2 of 221 --

MASTER’S THESIS 2006:14
Design with regard to explosions
Master’s Thesis in the International Master’s Programme Structural Engineering
ULRIKA NYSTRÖM
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2006

-- 3 of 221 --

Design with regard to explosions
Master’s Thesis in the International Master’s Programme Structural Engineering
ULRIKA NYSTRÖM
© ULRIKA NYSTRÖM, 2006
Master’s Thesis 2006:14
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Chalmers Reproservice / Department of Civil and Environmental Engineering
Göteborg, Sweden 2006

-- 4 of 221 --

I
Design with regard to explosions
Master’s Thesis in the International Master’s Programme Structural Engineering
ULRIKA NYSTRÖM
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
When designing a construction to be able to withstand the high pressure caused by a
shock wave simplifications can be used in order to facilitate the calculations. By
literature studies simplified methods used to analyse beams subjected to dynamic
loads are compiled and in some cases also compared with FE-analysis in order to
verify the results.
The method of transforming and reducing deformable structures into single degree of
freedom system, giving calculations easy to handle, is discussed in this report. When a
beam is simplified into a single degree of freedom system the beam is assumed to
have a specific shape of deformation and therefore tabled beam equations can be used
in order to estimate the capacity of the beam. The beam equations can be used when
the load is either infinity short (impulse load) or infinity long (pressure load). In order
to utilize these equations also for arbitrary load durations so called damage curves are
used. The behaviour of the structure subjected to dynamic loads can also be analysed
by using an equivalent static load, where the impulse load is substituted with a static
load that will give deflections corresponding to the ones achieved with the impulse
load.
The simplified methods discussed above are valid for beams in general but since
shelters often are made of reinforced concrete, which have a complex behaviour, these
beams and their response to both static and dynamic loads will be studied more in
detail. A short and brief review of the minimum requirements when designing shelters
due to the Swedish shelter regulation will be done.
Key words: Explosions, dynamics, impulse load, reinforced concrete, SDOF system,
equivalent static load, damage curves

-- 5 of 221 --

II
Konstruktion med avseende på explosioner
Examensarbete inom civilingenjörsprogrammet Väg och vattenbyggnad
ULRIKA NYSTRÖM
Institutionen för bygg- och miljöteknik
Avdelningen för Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
Vid analyser och beräkningar av byggnader utsatta för explosionsartade laster kan
förenklade 	handberäkningsmetoder 	användas. 	Genom 	litteraturstudier 	har 	några
förenklade beräkningsmetoder studerats och sedan samlats i denna rapport. I vissa fall
är resultat beräknade med hjälp av den förenklade beräkningsmetoden jämförda med
resultat från FE-analys för att verifiera metoden.
Balkar, och andra deformerbara kroppar, kan omvandlas till ett enfrihetsgardsytem
som 	tillskrivs 	ekvivalenta 	egenskaper 	för 	att 	ge 	samma 	deformation 	som den
deformerbara kroppen. När balken har omvandlats till ett enfrihetsgardsystem kan
tabellerade, så kallade, balkekvationer användas för att direkt uppskatta balkens
respons, dessa är dock begränsade till att bara vara applicerbara för laster som beter
sig mycket likt antingen en idealisk impuls- eller steglast. Med hjälp av skadetabbeler
eller skadekurvor kan också responsen för mer generella laster uppskattas. För att
kunna utnyttja den för ingenjörer välbekanta beräkningsgången för statiska lastfall
kan en ekvivalent statisk last beräknas utifrån det dynamiska lastfallet.
De förenklade beräkningsmetoderna är generella och kan användas för olika balkar
och materialtyper. Eftersom skyddsrum, och andra byggnader som dimensioneras för
explosionslaster oftast är gjorda av armerad betong behandlas detta material mer i
detalj.
Användningen av de ovan nämnda förenklade beräkningsmetoderna kräver dock en
viss förståelse av hur balkar utsatta för starka, dynamiska laster uppför sig i
verkligheten.
Nyckelord: 	Explosioner, dynamik, impuls last, armerad betong, enfrihetsgradsystem,
SDOF-system, ekvivalent statisk last, skadekurvor

-- 6 of 221 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2006:14 	III
Contents
ABSTRACT 	I
SAMMANFATTNING 	II
CONTENTS 	III
PREFACE 	IX
NOTATIONS 	X
1 	INTRODUCTION 	1
1.1 	Background 	1
1.2 	Aim 	1
1.3 	Method 	1
1.4 	Limitations 	2
1.5 	Outline of the report 	2
2 	EXPLOSIONS 	4
3 	MATERIALS 	7
3.1 	Material responses 	7
3.1.1 	Linear elastic material 	7
3.1.2 	Ideal plastic material 	8
3.1.3 	Trilinear material 	9
3.2 	Theory of plasticity and plastic hinges 	12
4 	BASIC DYNAMICS 	18
4.1 	Kinematics 	18
4.1.1 	Velocity 	18
4.1.2 	Acceleration 	19
4.2 	Kinetics 	19
4.2.1 	Definitions of impulse and work 	19
4.2.1.1 	Impulse 	19
4.2.1.2 	Work 	21
4.2.2 	Mechanical vibrations 	22
4.2.2.1 	Undamped free vibration 	23
4.2.2.2 	Undamped forced vibration 	25
4.2.2.3 	Damped free vibration 	26
4.2.2.4 	Damped forced vibration 	27
4.2.3 	Beam vibrations 	28

-- 7 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	IV
5 	SOLUTION OF EQUILIBRIUM EQUATIONS IN DYNAMIC ANALYSIS 	30
5.1 	The Newmark method 	31
5.2 	The central difference method 	33
5.2.1 	Linear elastic material 	34
5.2.2 	Ideal plastic material 	37
6 	TRANSFORMATION FROM DEFORMABLE BODY TO SDOF SYSTEM 40
6.1 	Differential equation for SDOF system 	41
6.2 	Transformation factors for beams 	42
6.2.1 	Transformation factor for the mass 	42
6.2.2 	Transformation factor for the load 	44
6.2.3 	Transformation factor for internal force 	45
6.2.3.1 	Linear elastic material 	46
6.2.3.2 	Ideal plastic material 	49
6.2.3.3 	Trilinear response material 	51
6.2.4 	Tabled transformation factors for beams 	51
7 	COMPARISON OF SDOF AND FE ANALYSES FOR BEAMS 	53
7.1 	Typical examples 	53
7.1.1 	SDOF analysis 	56
7.1.2 	FE model 	57
7.2 	Results 	60
7.2.1 	Linear elastic material 	60
7.2.2 	Ideal plastic material 	61
7.2.3 	Trilinear material 	62
7.2.3.1 	Elastic range 	62
7.2.3.2 	Elastoplastic range 	63
7.2.3.3 	Plastic range 	64
8 	COMMENTS TO AND DISCUSSION ABOUT CHAPTER 7 	68
8.1 	Transformation factors for trilinear material 	68
8.1.1 	Sudden change of transformation factors 	68
8.1.2 	Constant transformation factors 	71
8.2 	Discussion about FE models used in analyses 	72
9 	PRESSURE AND IMPULSE LOAD ACTING ON SDOF SYSTEM 	73
9.1 	Pressure load 	73
9.2 	Impulse load 	75
9.3 	Determination of capacity for beams transformed to SDOF systems 	77
9.3.1 	Linear elastic material 	78
9.3.2 	Ideal plastic material 	79
9.3.3 	Summary of capacity for beams transformed to SDOF systems 	80
9.4 	Capacity for SDOF systems 	81

-- 8 of 221 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2006:14 	V
10 	EQUIVALENT STATIC LOAD 	83
10.1 	SDOF system 	83
10.1.1 	Linear elastic material 	84
10.1.2 	Ideal plastic material 	85
10.2 	Beams 	85
10.2.1 	Linear elastic material 	86
10.2.2 	Ideal plastic material 	87
11 	DAMAGE CURVES 	89
11.1 	Calculation equations 	89
11.1.1 	Linear elastic material 	90
11.1.1.1 	P	
γ 	known 	91
11.1.1.2 	I	
γ 	known 	91
11.1.2 	Ideal plastic material 	92
11.1.2.1 	P	
γ 	known 	93
11.1.2.2 	I	
γ 	known 	93
11.2 	Results 	93
11.3 	Practical use of tables of damage 	97
11.3.1 	Solution process 	97
11.3.2 	Example 	98
11.4 	Practical use of damage curves 	100
11.4.1 	Solution process 	100
11.4.2 	Example 	102
12 	CONCRETE 	104
12.1 	Material behaviour 	105
12.2 	Analysis of cross-sections subjected to bending 	108
12.2.1 	Calculations in stadium I and II 	109
12.2.1.1 	Strain distribution for the cross-section 	109
12.2.1.2 	Assumptions 	111
12.2.1.3 	Transformed cross-section 	112
12.2.1.4 	Crack criteria 	113
12.2.1.5 	Reinforced cross-section in stadium I 	114
12.2.1.6 	Reinforced cross-section in stadium II 	115
12.2.2 	Calculations in stadium III 	116
12.2.2.1 	Failure criteria 	117
12.2.2.2 	Reinforced rectangular cross-section in stadium III 	117
12.2.2.3 	Rotational capacity 	119
12.3 	Requirements of structural parts and materials in shelters due to Swedish
shelter regulations 	122
12.4 	Example; minimum amount of reinforcement 	124
12.4.1 	Linear elastic behaviour 	127
12.4.2 	Ideal plastic behaviour 	128
12.5 	Example; not minimum amount of reinforcement 	129

-- 9 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	VI
13 	CONCLUSIONS AND IDEAS OF FURTHER INVESTIGATIONS 	131
14 	REFERENCES 	132

-- 10 of 221 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2006:14 	VII
APPENDICIES
APPENDIX A 	TRANSFORMATION 	FACTORS 	FOR 	LINEAR 	ELASTIC
MATERIAL
APPENDIX B 	TRANSFORMATION 	FACTORS 	FOR 	IDEAL 	PLASTIC
MATERIAL
APPENDIX C 	COMPARISON 	WITH 	TRANSFORMATION 	FACTOR
ACCORDING TO GRANSTRÖM AND BALAZS
APPENDIX D 	INPUT DATA IN ANALYSES
APPENDIX E 	VARYING NUMBER OF ELEMENTS AND SIZE OF MODULUS
OF ELASTICITY IN FE-ANALYSES
APPENDIX F 	STANDARDIZED SHAPES OF DEFLECTION
APPENDIX G 	BEAM 	EQUATIONS 	FOR 	LINEAR 	ELASTIC 	AND 	IDEAL
PLASTIC MATERIAL
APPENDIX H 	TABLES OF DAMAGE
APPENDIX I 	CALCULATIONS TO EXAMPLE

-- 11 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	VIII

-- 12 of 221 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2006:14 	IX
Preface
In this Master’s Thesis methods to simplify analyses of beams subjected to dynamic
loads, arose from explosions, are compiled and investigated. The project has been
performed within a co-operation between Reinertsen Sverige AB and the Division of
Structural Engineering at the Department of Civil and Environmental Engineering of
Chalmers University of Technology, Göteborg. The work has been carried out at
Reinertsen’s office in Göteborg from August 2005 to February 2006.
Morgan Johansson, PhD, and Ulrika Wendt, PhD, both from Reinertsen Sverige AB,
have supervised me with engagement. I specially thank them for their support and
good ideas. Thanks also to the rest of Reinertsen’s staff for answering sundry
questions appeared during the work.
My opponent, David Martínez, has continually assisted with the development of this
thesis and I thank him for grateful help and good ideas of improvements.
Finally, I want to thank my family and friends especially Hans Gunnarsson for great
support.
Göteborg February 2006
Ulrika Nyström

-- 13 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	X
Notations
Roman upper case letters
A 	Area
I	A 	Equivalent area in stadium I
II	A 	Equivalent area in stadium II
C 	Damping
e	C 	Equivalent damping
E 	Modulus of elasticity
E′ 	Inclination of stress-strain relation in elastoplastic range
c	E 	Modulus of elasticity for concrete
s	E 	Modulus of elasticity for steel
G 	Shear modulus
I 	Moment of inertia
I 	Impulse (general)
c	I 	Characteristic impulse
K 	Stiffness
K ′ 	Inclination of load-displacement curve in elastoplastic range
e	K 	Equivalent stiffness
L 	Length of the beam
M 	Mass
M 	Moment
B	A M	M 	, 	Moments at support A and B, respectively
e	M 	Equivalent mass
el	M 	Maximum moment in elastic range
pl	M 	Ultimate moment, all fibres in a cross-section have yielded
f	M 	Maximum field moment
s	M 	Support moment
spl	M 	Moment when yielding starts
N 	Axial force
P 	External load
P 	Mean value of external load
static
P 	Equivalent static, concentrated, load
c	P 	Characteristic pressure load
cr	P 	External load when first crack occurs
spl	P 	External load when yielding starts
pl	P 	External, ultimate load
1	P 	Peak value of transient load
R 	Internal force
cr	R 	Internal force when first crack occurs
e	R 	Equivalent internal force
m	R 	Maximum internal force

-- 14 of 221 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis 2006:14 	XI
spl	R 	Internal force when yielding starts
V 	Shear force
k	W 	Kinetic energy
Roman lower case letters
a 	Acceleration
a 	Mean acceleration
b 	Width of beam/cross-section
d 	Effective height of cross-section
k	f 	Characteristic value of material property
d	f 	Design value of material property
st	f 	Yield stress for steel
h 	Height of beam/cross-section
i 	Distributed impulse
q 	Distributed load
static
q 	Equivalent static, uniformly distributed, load
cr	q 	Distributed load when first crack occurs
el	q 	Maximum value of distributed load in elastic range
pl	q 	Distributed ultimate load
spl	q 	Distributed load when yielding starts
elpl	q 	Load when plastic hinges are formed but the beam is not yet a mechanism
p 	Momentum
t 	Time
1t 	Total time duration of transient load
u 	Displacement/deflection
u& 	First derivative of u with respect to time t, velocity
u&& 	Second derivative of u with respect to time t, acceleration
)	(x	u ′′ 	Curvature
cr	u 	Displacement/deflection when first crack occurs
pl	u 	Displacement/deflection corresponding to ultimate load
s	u 	Displacement of system point
spl	u 	Displacement/deflection when yielding starts
v 	Velocity
v& 	First derivative of v with respect to time t, acceleration
v 	Mean velocity
s	v 	Velocity of system point
x 	Coordinate
z 	Coordinate, distance fro compressed edge in cross-section

-- 15 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	XII
Greek upper case letters
Π 	Work
i	Π 	Internal work
e	Π 	External work
Greek lower case letters
ε 	Strain
ε& 	Strain velocity
c	
ε 	Concrete strain
cr	
ε 	Strain when first crack occurs
cu	
ε 	Ultimate concrete strain
pl	
ε 	Strain for ultimate load
spl	
ε 	Strain when yielding starts
I	
γ 	Impulse load factor
n	
γ 	Partial safety factor taking the safety class into consideration
m	
γ 	Partial safety factor taking the insecurity when determining parameters
into consideration
P	
γ 	Pressure load factor
η 	Partial safety factor used in the Swedish code BBK 04
el
κ 	Transformation factor for linear elastic material
elpl
κ 	Average value of transformation factor for linear elastic and ideal plastic
material
pl
κ 	Transformation factor for ideal plastic material
K	
κ 	Transformation factor for the internal force
KP	
κ 	Combined transformation factor for the internal force and external load
M	
κ 	Transformation factor for the mass
MP	
κ 	Combined transformation factor for the mass and external load
P	
κ 	Transformation factor for the external load
ρ 	Density
ρ 	Reinforcement amount
σ 	Stress
c	
σ 	Concrete stress
cr	
σ 	Stress when first crack occurs
pl	
σ 	Ultimate stress/Yield stress
s	
σ 	Steel stress
spl	
σ 	Stress when yielding starts
y	
σ 	Yield stress
ω 	Circular frequency
τ 	Shear stress
ν 	Poisson’s ratio

-- 16 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	1
1 	Introduction
1.1 	Background
Explosions are accidental or intentional actions that need to be considered in the
design of structures for various applications. Except from apparent cases, such as
military installations and civil defence shelters, design with regard to explosions is
required for instance in the processing industry and for tunnels.
When designing a construction to be able to withstand the high pressure caused by a
shock wave (for example shelters), simplifications can be used in order to facilitate
the calculations.
The methods used are rather well documented when having a linear elastic or ideal
plastic material but shelters, and other structures exposed for shock loads, are often
made of reinforced concrete which has a more complex behaviour. This makes the
application of the methods more complicated and in order to keep the calculations
easy to handle simplifications must be used. In practice, engineers usually not need to
perform dynamic calculations why it is of interest to translate a dynamic load and its
affects to a static load case giving similar response.
1.2 	Aim
The aim of this thesis is to put together information about available design approaches
for impact loading on structures in general and reinforced concrete structures in
particular.
It shall be described how structures can be designed for impulse loading by means of
simple hand-calculation approaches and to examine the agreement between such
simple methods and more advanced analyses like FE analyses. These methods and the
corresponding calculation processes shall be carefully described and documented.
The response of a structure subjected to a load also depends on the material behaviour
and the difference in the response for linear elastic and ideal plastic materials shall be
examined.
1.3 	Method
Literature studies have been done in order to find, understand and compile different
simple methods used when analysing the behaviour of structures exposed for transient
loads. The agreement between such simple methods is investigated by comparing
analyse results with the real behaviour, assumed to be found by using finite element
method. The finite element analyses are made by means of the commercial finite
element software ADINA (2004). Literature studies have also been made in order to
get a deeper understanding of explosions, their appearance, laps and effects.

-- 17 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	2
A beam with cross-section chosen according to requirements in the Swedish shelter
regulations will be analysed. The capacity of the beam is calculated by means of the
Swedish code BBK 04, see Boverket (1994), and directions in the Swedish shelter
regulations, Räddningsverket (2003).
1.4 	Limitations
The methods described in this thesis, used in order to simplify analyses of structures
subjected to transient loads, can be used on different types of deformable structures.
However, only the application on beams is shown in this thesis.
Complex material behaviour leads to complex calculations and expressions why only
idealized material behaviours; linear elastic, ideal plastic and trilinear material
respectively, is used here. When analysing concrete beams the effects of temperature,
creep and shrinkage is not taken into account.
Explosions and their effects is a huge subject which requires long time to fully
understand. Due to the limited time and in order to keep this scope within reasonable
limits only explosions in air and the transient loads caused by them are discussed in
this thesis. Secondary effects from the explosions such as collapse of nearby buildings
are also not taken into account.
1.5 	Outline of the report
The outline of the report can be divided into basic theory (Chapters 2 to 5), design
methods (Chapters 6 to 11) and application of the design methods (Chapter 12).
In Chapters 2, to 5 basic theory of explosions in air, material responses, dynamics and
solutions methods for differential equations are shown in order to facilitate the
understanding for the rest of the report.
Since analyses of the response of beams subjected to dynamic loads requires a good
knowledge of dynamics and heavy calculations, not manageable to perform by hand,
it is of interest to simplify these calculations. In Chapter 6 it is discussed how the
response of beams subjected to dynamic loads can be calculated by transforming the
beam to an equivalent single degree of freedom system (SDOF system) which will
achieve the same displacement as a prescribed point in the beam, the so called system
point. When transforming beams to equivalent single degree of freedom systems
transformation factors for the load, mass and the internal force are used. These are
derived for linear elastic and ideal plastic material respectively In case of trilinear
material the transformation factors are not derived instead it is discussed how the
transformation factors for linear elastic and ideal plastic material can be used in order
to transform beams with trilinear material behaviour, for example reinforced concrete
beams, to equivalent single degree of freedom systems.

-- 18 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	3
In Chapter 7 the response of a beam calculated by use of the method described above
is compared with results from finite element analyses, which are assumed to give
results close enough to the reality.
The choice of transformation factors in case of trilinear material is not trivial and is
further discussed in Chapter 8 where also the FE models used in Chapter 7 are
discussed.
Characteristic pressure and impulse loads are two idealized loads which are defined
and discussed in Chapter 9. Here also expressions for the maximum displacement for
single degree of freedom systems and to beams equivalent single degree of freedom
systems are derived.
When calculating the response of a beam subjected to a dynamic load differential
equations have to be solved for each time step in the analysis. Even though the use of
equivalent single degree of freedom systems simplifies the calculations a lot it is very
hard to perform results for a general load case without use of computers.
The response of a general impulse load acting on a beam or single degree of freedom
system can be calculated by replacing the impulse load with an equivalent static load.
The expressions for the, to the impulse load, equivalent static load is derived and
shown in Chapter 10.
In case of a general load, somewhere in between a characteristic impulse and pressure
load, the response of a single degree of freedom system can be estimated by use of
either tables of damage or damage curves. In Chapter 11 the values in the tables of
damage are calculated and the corresponding damage curves are shown for linear
elastic and ideal plastic material. It is also discussed and shown how these can be used
in practice.
Concrete is a complex material and therefore also the response of reinforced concrete
beams are complex. In Chapter 12 the behaviour of a reinforced concrete beam
subjected to dynamic loads is discussed.
In Chapter 13 conclusions and ideas on further investigations are shown.

-- 19 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	4
2 	Explosions
Here only a very brief review of explosions and their resulting shock waves are
shown. For more and detailed information about this subject the reader is referred to
for example Räddningsverket (2004).
When a charge detonates in the air a sphere with very high temperature and pressure
will form. This sphere will expand very fast and is spread as a shock wave from the
centre of detonation. The temperature and the pressure will decrease with increased
distance from the detonation centre, see Figure 2.1 below.
Figure 2.1 	Schematic figure for detonation in air.
An idealized shock wave is shown in Figure 2.2 where the different phases can be
seen. The shock front gives an instantaneously increase of pressure (and temperature)
and is followed by the compression and negative phase. The meaning of the phases,
and the devastation they can cause, are illustrated in Figure 2.2.
Figure 2.2 	Idealized shock wave.
Time
Compression phase
Negative phase
Pressure
Shock front
Centre of detonation
The pressure and temperature
in the shock front decreases
with increased distance to the
centre of detonation

-- 20 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	5
Pressure
T
i
m
e
2
3
5
4
1
Figure 2.3 	House exposed to shock wave. Based on NATO (1996).
When analysing buildings exposed for shock waves the transient load is often even
more idealized than the one shown in Figure 2.2. In analyses made in this report the
transient loads are assumed to have a simplified appearance, see Figure 2.4 where P1
and t 1 is the maximum value of the load and the duration of the load respectively. The
negative phase is not taken into account and the load is often assumed to be triangular
in time.
Figure 2.4 	Idealized transient load caused by explosions used in this report.
When a bomb detonates close to a reflecting surface the intensity and the spreading of
the resulting shock wave will be affected. For an idealized case, where the reflecting
1	P
1t

-- 21 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	6
surface is assumed not to absorb any energy, the shock wave spreading close to the
surface will have twice the energy of a shock wave spreading in the air without any
nearby reflecting surfaces as shown in Figure 2.5. This can be explained by the fact
that half the energy amount is prevented from spreading in its natural direction,
instead the energy is reflected.
Figure 2.5 	Explosion in air and close to reflecting surface respectively. Based on
Räddningsverket (2004) where the notation W represents the size of the
charge.
Free
explosion Explosion close
to reflecting
surface
Corresponding free
explosion
Half the energy is prevented
by the reflecting surface

-- 22 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	7
3 	Materials
The response of a loaded structure is highly dependent of the material and its
behaviour. In this report only idealized material behaviour are discussed; linear
elastic, ideal plastic and a trilinear material. For ideal plastic and trilinear behaviour
the fibres in the loaded structure can yield, meaning that the theory of elasticity is not
applicable. In order to analyse a structure with plastic behaviour theory of plasticity
and plastic hinges (further discussed in Section 3.2) are used in order to predict the
response.
3.1 	Material responses
3.1.1 	Linear elastic material
In case of linear elastic material the stress σ is linear proportional to the strain ε in
compliance with Hooke’s law:
ε	
σ 	⋅	= E 	(3.1)
where E is the modulus of elasticity. A principle relation between stress and strain for
a linear elastic material is shown in Figure 3.1.
Figure 3.1 	Principal 	relation 	between 	stress 	and 	strain 	for 	a 	linear 	elastic
material.
The internal resisting force R in a structure subjected to a load will thus be linear
proportional to the displacement u, i.e.:
u	K	R 	⋅	= 	(3.2)
where K is the stiffness of the structure. A principle relation between the internal force
and the displacement for a linear elastic material is shown in Figure 3.2.
ε
σ
E

-- 23 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	8
Figure 3.2 	Principal relation between internal force and displacement for a linear
elastic material.
The maximum value of the internal force in a structure with linear elastic material is:
max	m 	u	K	R 	⋅	= 	(3.3)
where umax is the maximum value of the displacement. When the load is removed the
structure will return to its unloaded position.
3.1.2 	Ideal plastic material
The relation between stress σ and strain ε for an ideal plastic material is shown in
Figure 3.3 where σy is the yield stress.
Figure 3.3 	Principal 	relation 	between 	stress 	and 	strain 	for 	an 	ideal 	plastic
material.
As seen in Figure 3.3 no deformations will occur until the stress is higher or equal to
the yielding stress but as soon as the yield stress is reached and deformation starts the
stress in the structure equals the yielding stress.
The internal force R in a structure, with ideal plastic material, subjected to a load P
can now be expressed as:
m	R	R
P	R
=
=
0	or	for
0	also	if	for
≠	≥
=	<
u	R	P
u	R	P
m
m
(3.4)
where Rm is the maximum value of the internal force. A principle relation between the
internal force and the displacement for an ideal plastic material is shown in Figure
3.4.
σ
ε
y	
σ
u
R
K

-- 24 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	9
Figure 3.4 	Principal relation between internal force and displacement for an ideal
plastic material.
3.1.3 	Trilinear material
Reinforced 	concrete 	beams 	have 	a 	trilinear 	material 	response. 	This 	is 	further
discussed in Chapter 12 but here the idealized behaviour of reinforced concrete beams
is shown. The idealized load-displacement curve for a concrete beam is shown in
Figure 3.5 where Rcr is the internal force when the first crack occurs in the beam and
Rm is the maximum value of the internal force valid when the ultimate load level is
reached. ucr and upl are the values of the displacement when the first crack occurs and
when the ultimate load level is reached respectively. K is the stiffness before the first
crack occurs and K' is the inclination of the curve in the range in between ucr and upl.
Figure 3.5 	Principal relation between internal force and displacement for a
trilinear material.
The internal force R in a structure, with trilinear material, subjected to a dynamic load
P(t) can be expressed as:
m
cr	cr
R	R
u	u	K	R	R
Ku	R
=
−	′	+	=
=
)	(
)	(	for
)	(	for
)	(	for
t	P	R
R	t	P	R
R	t	P
m
m	cr
cr
≤
<	≤
<
(3.5)
where Rcr also can be written as:
cr	cr 	u	K	R 	⋅	= 	(3.6)
u
R
m	R
cr	u 	pl	u
cr	R
R
u
K′
K
m	R

-- 25 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	10
The trilinear material response can be divided into elastic, elastoplastic and plastic
range as shown in Figure 3.6.
R
u	Elastoplastic range 	Plastic range
Elastic range
Figure 3.6 	The different ranges for a trilinear material.
A reinforced concrete beam will have linear elastic behaviour until yielding starts.
However, in this report linear elastic behaviour is assumed until the ultimate load is
reached meaning that the stiffness of the beam in the range in between Rcr and Rm will
change when the load increases, see Figure 3.7. This behaviour can be explained by
the fact that more and more cracks will occur in the beam when the load increases.
Figure 3.7 	Stiffness in the elastoplastic range for a reinforced concrete beam.
Consider a beam subjected to a transient load with maximum value P1 large enough to
give the internal force a value R1. If the load is removed when Rcr <R1 <Rm the beam
will return to its unloaded position and the corresponding relation between the internal
force and displacement is shown in Figure 3.8.
2	1 	K	K > 	for 	2	1 	R	R <
u
R
2	K
1	u 	2	u
2	R
1	R 1	K

-- 26 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	11
Figure 3.8 	Response of a concrete beam when loading and unloading a force 	1	P .
The beam is reloaded with a transient load with maximum value P2 and the internal
force will now reach a value R2. If the beam still is in the elastoplastic range
(Rcr <R2 <Rm) and the load is removed again the response curve is as shown in Figure
3.9.
Figure 3.9 	Response of a concrete beam when loading and unloading a force 	2	P .
If, once again, a transient load is applied, this time with maximum value P3, big
enough to reach the plastic range of the response curve (R3=Rm) and then the load is
removed there are plastic deformations, see Figure 3.10. The stiffness when unloading
is the same as the secant stiffness to the point (upl,Rm). As soon as the plastic range is
reached the stiffness of the beam is constant, as long as the failure criterion is not
fulfilled.
u
R
1	u
1	R
1	K
u
R
2	K
1	u 	2	u
2	R
1	R 1	K

-- 27 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	12
Figure 3.10 	Response of a concrete beam when loading and unloading a force 	3	P .
3.2 	Theory of plasticity and plastic hinges
In this section theory of plasticity and plastic hinges for beams with double symmetric
cross-sections are discussed. Theory of plasticity, as well as theory of elasticity,
assumes a linear strain distribution over the height of the cross-section.
In the elastic range, when no fibres in the cross-section yield, Hooke's law is used as
constitutive 	relation 	and 	the 	stress 	is 	linear 	proportional 	to 	the 	strain, 	see
Equation (3.1). Therefore also the stress distribution will be linear distributed over the
height of the cross-section in the elastic range. The stress and strain distributions in
the elastic range for a cross-section in a beam subjected to pure bending are shown in
Figure 3.11.
Figure 3.11 	Stress and strain distribution in beam subjected to bending (in elastic
range).
When the load applied to the beam, and consequently the bending moment inside the
beam, has increases the outer, most stressed, fibres in the most strained section will
reached the yield stress, see Figure 3.12.a. The maximum elastic moment has been
reached and can be expressed as:
u
R
2	K
2	u
2	R
m	R	R =	3
Plastic displacement 	3	u
Stress distribution
σ	Strain distribution
ε	Cross-section 	Part of the beam
M 	( ) E	z	z 	⋅	=
ε
	σ 	)	(	( )	z	
ε
z

-- 28 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	13
2	h
I
M y
el
σ
= 	(3.7)
where σy is the yield stress, I is the moment of inertia and h is the height of the cross-
section.
For a rectangular cross-section the moment of inertia is:
12
3
bh
I = 	(3.8)
where b is the width of the beam.
Inserting Equation (3.7) into Equation (3.8) the maximum elastic moment for a
rectangular cross-section can be expressed as:
6
2
bh
M 	y	el	
σ	= 	(3.9)
If the load increases the elastoplastic range is entered and the stress will only be linear
proportional to the strain in the part of the cross-section where yielding have not
started, see Figure 3.12.b. The higher load the smaller elastic part and a proportional
increasing curvature.
Just before all fibres in the cross-section has yielded the ultimate value of the moment
M pl is reached. The case when the whole cross-section has yield is an idealized state
where the strain-stress curve has an infinitely long plastic range see Figure 3.12.c.
Since the elastic part of the cross-section is infinitely small just before all fibres yield
the ultimate moment, according to Samuelsson, Wiberg (1999), can be expressed as:
4
2
bh
M 	y	pl	
σ	= 	(3.10)

-- 29 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	14
Figure 3.12 	Stress and strain distributions in beam subjected to bending when a)
yielding starts in the outer, most stressed, fibres, b) parts of the cross-
section (and fibres close to the cross-section) have yielded and c) the
whole cross-section has yielded (idealized case).
When the ultimate moment M pl is reached in the most strained section almost all
deformation occur here and in the very surrounding. The curvature is very large in this
section while it is rather small in the rest of the beam. Since the length of the part with
large curvature is very limited it can be assumed that all deformation takes place in a
very small deformable element, a so called plastic hinge. The rest of the beam is
assumed to be elastic and are therefore straight and the moment in the plastic hinges
are assumed to be constantly equal to the ultimate moment M pl. This reasoning is
shown in Figure 3.13 for a simply supported and a fixed beam respectively.
Yielding starts in
the 	outer 	fibres
el	M	M =
Parts 	of 	the
cross-section 	has
yielded
pl	el 	M	M	M 	<	<
y	
σ
y	
σ
y	
σ
y	
σ	s	
ε
s	
ε
s	
ε
s	
ε
a)
b)
Yielding in the
whole cross-
section
pl	M	M =
∞	→	s	
ε
s	
ε	←	∞ 	y	
σ
y	
σ
c)

-- 30 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	15
Figure 3.13 	Models with plastic hinges for a) a simply supported beam and b) a
fixed beam.
In case of simply supported beam only one plastic hinge is needed to create a
mechanism and if the load increases even more the beam will undergo uncontrolled
deformation.
For a fixed beam, with constant capacity, yielding starts at the supports and for a
certain load plastic hinges are formed here. Since no mechanism is formed yet the
load can be increased and the beam now acts as a simply supported beam subjected to
moment M pl at the supports. If the load remains constant at this level unlimited
deformations can, in theory, occur. However, when the load is increased yielding
starts also in the middle of the beam and when all fibres in this section have yielded a
plastic hinge is formed and the beam has become a mechanism, see Figure 3.13.b.
This is further discussed below where also the expressions for the moment at the
different stages are shown.
For the fixed beam, subjected to a uniformly distributed load, the outer most stressed
fibres at the supports will start to yield when the moment in this section is:
curvature 	curvature
model 	model
Parts with yielding	Part with yielding
Plastic hinge 	Plastic hinges
a) 	b)

-- 31 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	16
12
2
L	q
M el
el 	−	= 	(3.11)
where qel is the corresponding value of the uniformly distributed load and L is the
length of the beam.
Figure 3.14 	Moment distribution in beam subjected to uniformly distributed load
according to theory of elasticity ( 	el	q	q ≤ 	).
If the load is increased even more yielding zones will be formed at the supports and
for a certain load qelpl plastic hinges have been formed in these sections and the
moment is:
12
2
L	q
M elpl
pl 	−	= 	(3.12)
Due to the plastic hinges by the supports the beam now behaves like a simply
supported beam subjected to support moments M pl and the uniformly distributed load
q if the load increases. The moment distribution is statically determinable. When the
load increases even more the moment in the midpoint of the beam will reach the
ultimate value M pl and the beam is just about to form a plastic hinge in the midpoint.
The moment in the midpoint is calculated by use of equilibrium conditions:
pl	pl	middle 	M
qL
M	M 	−	=	= 8
2
(3.13)
The uniformly distributed load q in Equation (3.13) is the load for which the
mechanism is about to form and it is expressed as:
2
16
L
M
q	q pl
pl =	= 	(3.14)
q
L
8
2
qL
12
2
qL
24
2
qL
Moment distribution

-- 32 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	17
Figure 3.15 	Moment distribution in beam subjected to uniformly distributed load
when mechanism is about to form ( 	pl	q	q = 	).
q
q
B	M
L
pl	M
qL =
16
2
pl	M
qL =
16
2
8
2
qL
L
A	M

-- 33 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	18
4 	Basic dynamics
The term dynamics is used for theory of moving systems and can be subdivided into
kinematics 	and 	kinetics. 	Kinematics 	is 	a 	pure 	geometrical 	description 	of 	the
movement while kinetics describes the cause of the movement (forces).
4.1 	Kinematics
The simplest form of motion of a particle is when the particle moves along a linear
axis (the x-axis in Figure 4.1) and the position of the particle is described by a vector
x(t) at time t. At time t+∆t the position of the vector is x+∆x.
x
x
t
x	x 	∆	+
t	t 	∆	+
Figure 4.1 	Linear motion of particle.
4.1.1 	Velocity
The velocity of a particle moving linearly can be derived by studying how fast the
position of the particle is changing. At time t the particle has position x and at time
t+∆t the position is x+∆x meaning that during the time interval ∆t the particle has
moved the distance ∆x. The mean velocity during the movement from position x to
x+∆x can then be stated as:
t
x
v ∆
∆
= 	(4.1)
Letting the time interval ∆t go towards zero the change of distance ∆x will approach 0.
The mean value of the velocity will then approach a boundary value that is defined as
the velocity of the particle at time t. The velocity of the particle is thus given by:
x
dt
dx
t
x
v	t	v t
&	≡	=
∆
∆
=	= →	∆ 	0
lim	)	( 	(4.2)
By definition the particle is moving in positive direction if the velocity is positive and
vice versa.

-- 34 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	19
4.1.2 	Acceleration
The acceleration of a particle that is moving linearly can be derived by studying how
fast the velocity of the particle is changing. At time t the particle has position x and
velocity v and at time t+∆t the position is x+∆x and the corresponding velocity is
v+∆v meaning that during time interval ∆t the velocity of the particle has increased
with ∆v. The average value of the acceleration can be stated as:
t
v
a ∆
∆
= 	(4.3)
In the same way as when deriving the velocity of the particle the acceleration can be
written as:
x
dt
x	d
v
dt
dv
t
v
a	t	a t
&&	& 	≡	=	≡	=
∆
∆
=	= →	∆ 	2
2
0
lim	)	( 	(4.4)
When the particle is moving in the positive direction and the acceleration is positive,
the velocity is increasing. A negative value of the acceleration gives retardation. If,
instead, the particle is moving in the negative direction a positive value of the
acceleration gives retardation and if the acceleration is negative the value of the
velocity is increasing.
4.2 	Kinetics
The response of bodies subjected to dynamic forces can be described by means of
differential equations. Before deriving these equations of motions for dynamic loads
the impulse of a load and the work performed by a load are defined.
4.2.1 	Definitions of impulse and work
4.2.1.1 	Impulse
Even though static, constant loads often are used in analyses loads are often varying in
time and in order to describe how these forces influences the motion of the structure
the impulse is introduced.
The impulse is defined as a step change in an object’s momentum. For a mass, M,
with velocity, v, the momentum is:
v	M	p 	⋅	= 	(4.5)
At time t the impulse is I and at time t+∆t the impulse is I+∆I (see Figure 4.2)
meaning that the increase of the impulse during time ∆t is ∆I. As mentioned above the
impulse is defined as the change in the momentum and the increase of the impulse can
therefore, by means of Equation (4.5), be written as:

-- 35 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	20
v	M	p	I 	∆	⋅	=	∆	=	∆ 	(4.6)
where ∆p is the change of the momentum during time ∆t and ∆v is the change of
velocity during time ∆t.
Figure 4.2 	Load-time diagram where 	P 	is the average value of the load in
between time t and 	t	t 	∆	+ 	.
The average value of the acceleration a is defined in Equation (4.3) and together with
Equation (4.6) the change of impulse during time ∆t can be written as:
t	a	M	I 	∆	⋅	⋅	=	∆ 	(4.7)
By use of the second law of Newton where the force P is defined as the product of the
mass and the acceleration the average value of the force P is defined as:
a	M	P 	⋅	= 	(4.8)
By use of Equations (4.7) and (4.8) the change of impulse can now be written as:
t	P	I 	∆	⋅	=	∆ 	(4.9)
giving:
t
I
P ∆
∆
= 	(4.10)
Letting the time interval ∆t go towards zero the change of impulse ∆I will approach
zero as long as the impulse is not a characteristic impulse as shown in Figure 4.3. The
meaning of a characteristic impulse is further discussed in Section 9.2.
Time t
Load 	)	(t	P
t	t 	∆	+	t
I	∆
I
P

-- 36 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	21
)	(t	P
t
∞
t
1	)	( 	=	= ∫∆	+ t	t
t
c 	dt	t	P	I
t	t 	∆	+
Figure 4.3 	Characteristic impulse.
The mean value of the force will then approach a boundary value that is defined as the
force applied to the particle at time t. The force applied to the particle is thus given
by:
dt	t	P	dI
dt
dI
t
I
P	t	P t
⋅	=	⇔	=
∆
∆
=	= →	∆
)	(	lim	)	( 0 (4.11)
The change of the impulse can now, finally, be written as:
∫	∫	∫
∆	+	=
=
∆	+	=
=
∆	+
=	∆	⇔	=
t	t	t
t	t
t	t	t
t	t
I	I
I
dt	t	P	I	dt	t	P	dI 	)	(	)	( 	(4.12)
The impulse for a load is thus:
∫
=
=
=
1
0
)	(
t	t
t
dt	t	P	I 	(4.13)
where t 1 is the time for which the load is removed.
4.2.1.2 	Work
Work is a transfer of energy from one physical system to another, for example from a
load to a structure. When there is no frictional force and a force acts on a body, the
work done by the force is equal to the increase of the kinetic and potential energy of
the body since all the energy expended by the exerting force must be gained by the
body. However, in practice some energy will be lost due to friction and heat
development.
When a particle is at position x the work is Π and at position x+∆x the work
performed by the external load is Π+∆Π (see Figure 4.4) meaning that the increase of
work when the particle is moving the distance ∆x is ∆Π.

-- 37 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	22
Figure 4.4 	Load-distance diagram.
The change of work, represented by the shaded area in Figure 4.4, is expressed as:
x
P	x	P ∆
∆Π
=	⇔	∆	⋅	=	∆Π 	(4.14)
where P is the average value of the force within the distance ∆x.
Letting the distance ∆x go towards zero the change of work ∆Π will approach 0. The
mean value of the force will then approach a boundary value that is defined as the
force causing the displacement x of the particle. This force is thus given by:
dx	x	P	d
dx
d
x
P	x	P x
⋅	=	Π	⇔
Π
=
∆
∆Π
=	= →	∆
)	(	lim	)	( 0 (4.15)
The change of the work can now, finally, be written as:
∫	∫	∫
∆	+	=
=
∆	+	=
=
∆Π	+	Π
Π
=	∆Π	⇔	=	Π
x	x	x
x	x
x	x	x
x	x
dx	P	dx	P	d 	(4.16)
The total work performed by a load P is thus:
∫
=
=
=	Π
max	x	x
x
dx	P
0
(4.17)
where xmax is the total displacement caused by the load.
4.2.2 	Mechanical vibrations
When deriving basic dynamic equations a body where the position can be defined by
one coordinate is used. Such structure is said to have one degree of freedom and is
also referred to as single degree of freedom system and abbreviated as SDOF system
(compare with MDOF, Multi Degree Of Freedom system). The mass-spring system in
Figure 4.5 is an example of a system with one degree of freedom.
Distance x
Load P
x	x 	∆	+	x
∆Π
Π
P

-- 38 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	23
R 	C
M
Figure 4.5 	Mass-spring system with single degree of freedom, (SDOF).
The single degree of freedom system in Figure 4.5 represents a rigid mass, M,
attached to a spring. In a rigid body there is no relative displacement between
arbitrary points in the body. R is the internal force in the spring and C is the damping
of the system.
When a mechanical system is moved from its unloaded equilibrium position the
internal forces (for most materials) endeavour to bring it back to equilibrium position.
This behaviour causes oscillations.
If vibrations take place in the absence of external forces but in presence of internal
frictional forces the motion is referred to as damped free vibrations. If also the
frictional forces are assumed to be absent the motion is called an undamped free
vibration. If an external force is applied to the system the resulting motion is called
forced vibration. The oscillation behaviour depends on whether the system is damped
or undamped and if the vibrations are forced or not.
The undamped vibration is a hypothetical case but is, in many cases, assumed to be an
adequate approximation of the actual damped vibration experienced by real structures,
which always have more or less internal friction. In this report the behaviour of
damped systems are only briefly described since the influences of damping is
neglected in the following chapters.
4.2.2.1 	Undamped free vibration
Consider a mass attached to a spring as illustrated in Figure 4.6 where the mass can
move only in the vertical direction and therefore has only one degree of freedom. The
unloaded equilibrium position for the system is noted as ue and is the static
equilibrium position when the dead weight is the only present load. u is the coordinate
describing the distance from the unloaded equilibrium position to the current position.
The mass M is attached to a spring with linear elastic behaviour with stiffness K. The
stiffness factor K is equal to the force required to move the system a distance. The
internal force R for a linear elastic system can be expressed as:
Ku	R = 	(4.18)

-- 39 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	24
K
K
M
M
e	u
u
Figure 4.6 	Mass undergoing undamped free vibration.
When the body is moved a distance u from the unloaded equilibrium position and then
released, the system will undergo an undamped free vibration about the unloaded
equilibrium position. The forces acting on the isolated body is shown in Figure 4.7
where Mg is the dead weight of the system.
Mg
u	M &&
Ku	Mg +
Figure 4.7 	Forces acting on the mass in Figure 4.6.
Due to dynamic equilibrium conditions the sum of the forces shall be zero.
( 	) 	0	=	−	+	− 	u	M	Ku	Mg	Mg 	&& 	(4.19)
where u varies in time i.e. u=u(t).
By rearranging the terms in the equation above the differential equation of motion for
an undamped system with linear elastic behaviour is defined as:
0	=	+ Ku	u	M && 	(4.20)
Introducing the definition of the circular frequency 	M	K	=
	ω 	Equation (4.20) can
be written as:
02 =	+ 	u	u	
ω	&& 	(4.21)
In a more general form the differential equation in Equation (4.20) can be written as:
0	=	+ R	u	M && 	(4.22)

-- 40 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	25
where the expression for the internal force R is depending on the material behaviour.
In expression (4.22) the internal force R is not necessarily given by a linear expression
(such as Equation (4.18)) and generally it holds that R≠Ku.
4.2.2.2 	Undamped forced vibration
Still neglecting the frictional effects, consider again the system shown in Section
4.2.2.1. Now the system is subjected to an external dynamic load P(t) as shown in
Figure 4.8.
K
K
M
M
e	u
u	)	(t	P
)	(t	P
Figure 4.8 	Mass undergoing undamped forced vibration.
The forces acting on the isolated body is shown in Figure 4.9.
Mg
u	M &&
Ku	Mg +
)	(t	P
Figure 4.9 	Forces acting on the mass in Figure 4.8.
Due to dynamic equilibrium conditions the sum of the forces shall be zero.
( 	) 	0	)	( 	=	−	+	−	+ 	u	M	Ku	Mg	t	P	Mg 	&& 	(4.23)
where the displacement u varies in time i.e. u=u(t).
By rearranging the terms in the equation above the differential equation of motion for
an undamped system with linear elastic behaviour subjected to a dynamic load is
defined as:

-- 41 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	26
)	(t	P	Ku	u	M 	=	+	&& 	(4.24)
In a more general form the differential equation can be written as:
)	(t	P	R	u	M 	=	+	&& 	(4.25)
where the expression for the internal force R is depending on the material behaviour,
and again it generally holds that R≠Ku.
4.2.2.3 	Damped free vibration
Using the same notations as in the case of undamped free vibrations (see Section
4.2.2.1) but also taking the damping into consideration the differential equation of
motion of a damped free system can be derived.
The system in Figure 4.10 where the damping of the system is noted as C is studied.
K
K
M
M
e	u
u
C
C
Figure 4.10 	Mass undergoing damped free vibration.
When the body is moved a distance u from the unloaded equilibrium position and then
released the system will undergo a damped free vibration about the unloaded
equilibrium position. The forces acting on the isolated body is shown in Figure 4.11.
Mg
u	M &&
Ku	Mg +
u	C &
Figure 4.11 	Forces acting on the mass in Figure 4.10.

-- 42 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	27
Due to dynamic equilibrium conditions the sum of the forces shall be zero.
( 	) 	0	=	−	−	+	− 	u	C	u	M	Ku	Mg	Mg 	&	&& 	(4.26)
where the displacement u varies in time i.e. u=u(t).
By rearranging the terms in the equation above the differential equation of motion for
a damped system with linear elastic behaviour is defined as:
0	=	+	+ 	Ku	u	C	u	M 	&	&& 	(4.27)
In a more general form the differential equation can be written as:
0	=	+	+ 	R	u	C	u	M 	&	&& 	(4.28)
where the expression for the internal force R is depending on the material behaviour,
and generally R≠Ku.
4.2.2.4 	Damped forced vibration
Again consider the damped mass-spring system in Section 4.2.2.3 but now subjected
to an external dynamic load P(t) as shown in Figure 4.12.
K
K
M
M
e	u
u
C
C
)	(t	P
)	(t	P
Figure 4.12 	Mass undergoing damped forced vibration.
The forces acting on the isolated body is shown in Figure 4.13.

-- 43 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	28
)	(t	P
u	M &&
Ku	Mg +
u	C &
Mg
Figure 4.13 	Forces acting on the mass in
Figure 4.12.
Due to dynamic equilibrium conditions the sum of the forces shall be zero:
( 	) 	0	)	( 	=	−	−	+	−	+ 	u	C	u	M	Ku	Mg	t	P	Mg 	&	&& 	(4.29)
where the displacement u varies in time, i.e. u=u(t).
By rearranging the terms in the equation above the differential equation of motion for
a damped system with linear elastic behaviour subjected to a dynamic load is defined
as:
)	(t	P	Ku	u	C	u	M 	=	+	+ 	&	&& 	(4.30)
In a more general form the differential equation can be written as:
)	(t	P	R	u	C	u	M 	=	+	+ 	&	&& 	(4.31)
where the expression for the internal force R is depending on the material behaviour,
and generally R≠Ku.
4.2.3 	Beam vibrations
The eigenfrequencies for a structure are the frequencies for which the structure will
vibrate of its own accord when exposed to a perturbation. The shapes of the structure
for the different eigenfrequencies are called eigenmodes where each eigenmode is
related to one specific eigenfrequency.
Three different mode shapes, for a simply supported beam, are shown in Figure 4.14
where the first eigenmode corresponds to the lowest value of the eigenfrequency.

-- 44 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	29
Figure 4.14 	Eigenmodes for simply supported beam.
Normally, when a beam is subjected to a dynamic load, the frequency will not
coincide with the eigenfrequencies and therefore the shape of deformation will not be
the same as any of the eigenmodes. However, the dominating shape of deformation is
the first eigenmode but it is influenced by higher modes. SDOF systems have only
one eigenmode and hence there are no influences from higher modes.
Second bending mode
Third bending mode
First bending mode

-- 45 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	30
5 	Solution 	of 	equilibrium 	equations 	in 	dynamic
analysis
The equations of motion derived in Section 4.2.2.1 to 4.2.2.4 can mathematically be
solved by analytical procedures. However, these standard procedures, proposed for
solving general systems of differential equations, can be very expensive since heavy
equations and calculation are required. Therefore the use of more effective methods is
motivated even though they give approximate results.
In this report two solution procedures are used where both are special cases of the
Newmark method. The Newmark method is a direct integration solution method
where 	the 	equations 	of 	motion 	are 	integrated 	using 	a 	numerical 	step-by-step
procedure. By the term “direct” it is meant that no transformation of the equations into
a different form is carried out before the numerical integration.
For a large structure where it is hard to find a solution that holds for the entire region
the region is divided into smaller parts, so-called finite elements, for which the
approximated solution is carried out over each element. Even though the searched
variable is varying in a nonlinear manner over the entire region it may be a fair
approximation to assume that the variable varies linearly over each element.
The stability of the Newmark method depends on the parameters α and δ, see
Section 5.1. The so called central difference method is, according to Bathe (1996), a
special case of Newmark. with α=0 and δ=0.5. The central difference method is a
conditionally stable method meaning that the time step increment ∆t must be smaller
than a critical value of the time increment, ∆t cr, in order to generate a stable solution.
If the time step increment is larger than ∆t cr the solution is unstable.
The differential equation of motion for a damped body subjected to an external
dynamic load is the most general form of the equation of motion. For single degree of
freedom systems the equation of motion is shown in Equation (4.31). In order to
facilitate when using finite elements the differential equation can be written in matrix
and vector form.
P	R	U	C	U	M 	=	+	+ 	&	&& 	(5.1)
M , C and R are the notations for the matrices of mass, damping and internal force
respectively. P is the vector of externally applied loads and U , U& 	and U&& 	are the
displacement, velocity and acceleration vectors respectively. When analysing a mass-
spring system with only one degree of freedom only one element is used. In the
following the displacement, velocity and acceleration vectors at time 0, denoted as
U0 , 	U&	0 and 	U&&	0 , respectively, are assumed to be known.

-- 46 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	31
5.1 	The Newmark method
In the Newmark method it is necessary to triangularize the stiffness matrix, see
Bathe (1996). Only the case of linear elastic behaviour is discussed here, since other
materials may give rather complex stiffness matrices to triangularize, however, the
principle is the same.
In the Newmark method the acceleration and displacement at time t+∆t are assumed
to be:
( 	)	[ 	] tt	t	t	t	t	t ∆	+	−	+	= ∆	+	∆	+ U	U	U	U 	&&	&&	&	&	
δ
	δ	1 	(5.2)
( 	)	[ 	] 2
2
1 	t	t t	t	t	t	t	t	t ∆	+	−	+	∆	+	= ∆	+	∆	+ U	U	U	U	U 	&&	&&	&	
α
	α 	(5.3)
where α and δ are parameters that can be determined to obtain integration accuracy
and stability. When setting α=0.25 and δ=0.5 in the Newmark method you get,
according to Bathe (1996) the constant-average-acceleration method (or trapezoidal
rule), illustrated in Figure 5.1.
( 	)	U	U 	&	&	&	& 	t	t	t 	∆	+
+	2
1 	U&	&	t	t ∆	+
U&	&	t
t	t 	∆	+	t
Figure 5.1 	Newmark method with
α =0.25 and
δ =0.5.
In case of linear elastic material the internal force at time t+∆t can be written as:
U	K	R t	t	t	t 	∆	+	∆	+ = 	(5.4)
where K is the stiffness matrix.
By using Equation (5.4) the equation of motion in Equation (5.1) can be expressed as:
P	KU	U	C	U	M 	=	+	+ 	&	&& 	(5.5)
The equation of motion at time t+∆t is:
P	U	K	U	C	U	M t	t	t	t	t	t	t	t 	∆	+	∆	+	∆	+	∆	+ =	+	+ 	&	&& 	(5.6)
By rearranging the terms in Equation (5.3) the acceleration at time t+∆t can be
expressed as:
( 	) 	U	U	U	U	U	U 	&&	&&	&	&& 	t	t	t	t	t	t	t	t
t	t +	−
∆
−	−
∆
= ∆	+	∆	+
α
	α
	α 	2
1	1	1 2 	(5.7)

-- 47 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	32
By substituting Equation (5.7) into Equation (5.2) the expression for the velocity at
time t+∆t are found. The relations for the acceleration and velocity at time t+∆t are
used in the equation of motion (see Equation (5.6)) in order to solve for the
displacement at time t+∆t. The complete algorithm for the Newmark method,
according to Bathe (1996) is given in Table 5.1 below.
Table 5.1 	Algorithm for Newmark method when having linear elastic behaviour,
according to Bathe (1996).
A. Initial calculations:
a. 	Form stiffness matrix K , mass matrix M and damping matrix C .
b. 	Initialize 	U0 , 	U&	0 and 	U&&	0 .
c. 	Select time step 	t	∆ 	and parameters	
α 	and	
δ 	to calculate integration
constants:
50	.	0	≥
	δ 2
)	5	.	0	(	25	.	0	
δ
	α 	+	≥
2	0
1
t
a ∆
=
α 	t
a ∆
=
α
δ
1 t
a ∆
=
α
1
2 	1
2
1
3 	−	=
α
a
1	4 	−	=
α
δ
a 	




 −
∆
= 	2
2
5
α
δ	t
a 	( 	)	δ	−	∆	= 	1	6 	t	a 	t	a 	∆	=
δ	7
d. 	Form effective stiffness matrix Kˆ .
C	M	K	K 	1	0
ˆ 	a	a 	+	+	=
B. 	For each time step:
a. 	Calculate effective loads at time 	t	t 	∆	+ 	.
( 	) 	( 	)	U	U	U	C	U	U	U	M	P	P 	&&	&	&&	& 	t	t	t	t	t	t	t	t	t	t a	a	a	a	a	a 	5	4	1	3	2	0
ˆ 	+	+	+	+	+	+	= ∆	+	∆	+
b. 	Solve for displacements at time 	t	t 	∆	+ 	.
P	U	K 	ˆ	ˆ 	t	t	t	t 	∆	+	∆	+ =
c. 	Calculate accelerations and velocities at time 	t	t 	∆	+ 	.
( 	) 	U	U	U	U	U 	&&	&	&& 	t	t	t	t	t	t	t a	a	a 	3	2	0 	−	−	−	= ∆	+	∆	+
U	U	U	U 	&&	&&	&	& 	t	t	t	t	t	t a	a ∆	+	∆	+ +	+	= 	7	6

-- 48 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	33
5.2 	The central difference method
When α=0 and δ=0.5 are chosen the central difference method is obtained, according
to Bathe (1996). In the central difference method it is assumed that the acceleration
for time t can be written as:
( 	)	U	U	U	U t	t	t	t	t	t
t
∆	+	∆	− +	−
∆
= 	2
1 2
&& 	(5.8)
The velocity expression is written as:
( 	)	U	U	U t	t	t	t	t
t
∆	+	∆	− +	−
∆
= 2
1	& 	(5.9)
The displacement at time t+∆t is obtained by considering the equation of motion see
Equation (5.1) at time t, i.e.:
P	R	U	C	U	M t	t	t	t =	+	+ 	&	&& 	(5.10)
Since the equations are set up in a known state it is an explicit method.
By using Equations (5.8) and (5.9) Equation (5.10) can be written as:
U	C	M	U	M	R	P	U	C	M t	t	t	t	t	t	t
t	t	t	t	t
∆	−	∆	+ 





∆
−
∆
−
∆
+	−	=	





∆
+
∆ 	2
1	1	2
2
1	1 2	2	2 	(5.11)
The displacement at time t+∆t can now be solved but the solving algorithm is slightly
different for different material responses.
In the very beginning of the calculations 	U0 , 	U&	0 and 	U&&	0 are initialized but also the
value of 	Ut∆	−	0 is required in order to calculate 	Ut∆	+	0 (see Equation(5.11)). The
displacement at time 0-∆t can be expresses by means of displacement, velocity and
acceleration at time 0. For sufficiently small 	t	∆ 	the change of displacement during
the time ∆t is:
U	U	U	U 	&&	& 	0
2
0	0	0
2
t
tt 	∆
+	⋅	∆	−	=∆	− (5.12)
In order to use less storage space and less processing time the consistent mass matrix
can be reduced to one with a more manageable size and structure. The preferable
structure is a diagonal matrix as shown in Equation (5.13), called a lumped (or
effective) mass matrix.












=
n	M
M
M
.	0	0
.	.	.	.
0	.	0
0	.	0
2
1
M 	(5.13)

-- 49 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	34
Different methods can be used to transform the consistent mass matrix and obtain a
diagonal matrix, one of them is HRZ lumping. However this is not discussed here but
further information can be found in KTH (2006).
5.2.1 	Linear elastic material
A material response curve linear elastic material can be seen in Figure 5.2.
Figure 5.2 	Material response curve for linear elastic material.
In case of linear elastic material the internal force at time t can be written as:
U	K	R t	t = 	(5.14)
where K is the stiffness matrix see also Section 3.1.1.
Substituting Equation (5.14) into Equation (5.11) gives:
U	C	M	U	M	K	P	U	C	M t	t	t	t	t	t
t	t	t	t	t
∆	−	∆	+ 





∆
−
∆
−	





∆
−	−	=	





∆
+
∆ 	2
1	1	2
2
1	1 2	2	2 	(5.15)
Equation (5.15) can be written as:
P	U	M 	ˆ	ˆ 	t	t	t =∆	+ 	(5.16)
Where
C	M	M t	t 	∆
+
∆
= 2
1	1	ˆ 2 	(5.17)
and
U	C	M	U	M	K	P	P t	t	t	t	t
t	t	t
∆	−






∆
−
∆
−	





∆
−	−	= 2
1	1	2	ˆ 2	2 	(5.18)
The displacement at time t+∆t is calculated by use of Equation (5.16) as:
P	M	U 	ˆ	ˆ 	1 t	t	t 	−	∆	+ = 	(5.19)
u
m	R
R
max	u

-- 50 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	35
The time increment ∆t must be smaller than a critical value of the time increment, ∆t cr,
which can be calculated from the mass and stiffness properties of the complete
element assemblage. For linear problems, this critical time step ∆t cr is:
max
2
ω
=	∆ cr	t 	(5.20)
where ωmax is the maximum eigenfrequency, bounded by the maximum frequency of
the individual finite elements.
Since M	ˆ 	does not varies in time, for linear elastic material (see Equation (5.17)), it is
calculated only in the initial stage of the analysis together with the stiffness matrix K ,
mass matrix 	M 	and damping matrix 	C 	(if not neglected). The values of the
displacement, 	velocity 	and 	acceleration 	at 	time 	0, 	noted 	U0 , 	U&	0 and 	U&&	0
respectively, are also initialized in the initial stage and after selecting time step size
the displacement at time -∆t are calculated by means of Equation (5.12). Since Pˆ
varies in time it has to be calculated for each time step in the analysis and for each
time the displacement is calculated by means of Equation (5.19).
The complete algorithm, according to Bathe (1996), for the central difference method
when having a linear elastic material is given in Table 5.2.

-- 51 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	36
Table 5.2 	Algorithm for central difference method when having linear elastic
behaviour according to Bathe (1996).
A. Initial calculations:
a. 	Form stiffness matrix K , mass matrix M and damping matrix C .
b. 	Initialize 	U0 , 	U&	0 and 	U&&	0 .
c. 	Select time step 	t	∆ 	( 	cr	t	t 	∆	≤	∆ 	).
d. 	Calculate 	U	U	U	U 	&&	& 	0
2
0	0
2
t
tt 	∆
+	∆	−	=∆	−
e. 	Form effective mass matrix M	ˆ .
C	M	M t	t 	∆
+
∆
= 2
1	1	ˆ 2
B. For each time step:
a. 	Calculate effective loads at time t .
U	C	M	U	M	K	P	P t	t	t	t	t
t	t	t
∆	−






∆
−
∆
−	





∆
−	−	= 2
1	1	2	ˆ 2	2
b. 	Solve for displacements at time 	t	t 	∆	+ 	.
P	U	M 	ˆ	ˆ 	t	t	t =∆	+
c. 	If required evaluate accelerations and velocities at time t .
( 	)	U	U	U	U t	t	t	t	t	t
t
∆	+	∆	− +	−
∆
= 	2
1 2
&&
( 	)	U	U	U t	t	t	t	t
t
∆	+	∆	− +	−
∆
= 2
1	&

-- 52 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	37
5.2.2 	Ideal plastic material
A material response curve for ideal plastic material can be seen in Figure 5.3.
Figure 5.3 	Material response curve for ideal plastic material.
The internal force R equals to the maximum value Rm if the external load is higher
than the maximum value of the internal force or if the displacement is larger than
zero. If the external load is lower than the maximum value of the internal force and
there are no displacements the internal force will be equal to the external load. (See
also Section 3.1.2).
P	R
R	R
t	t
m
t
=
=
0	also	if	when
0	or	when
=	<
≠	≥
U	R	P
U	R	P
t
m
t
t
m
t
(5.21)
where 	m	R 	is the maximum value of the internal force and 	Pt is the external load
matrix at time t.
The equation of motion in Equation (5.1) at time t is then:
0	U	C	U	M
P	R	U	C	U	M
=	+
=	+	+
&	&&
&	&&
t	t
t
m
t	t
0	also	if	when
0	or	when
=	<
≠	≥
U	R	P
U	R	P
t
m
t
t
m
t
(5.22)
Equation (5.11) can in case of ideal plastic material written as:
U	C	M	U	M	R	P	U	C	M t	t	t	t	t	t	t
t	t	t	t	t
∆	−	∆	+ 





∆
−
∆
−
∆
+	−	=	





∆
+
∆ 	2
1	1	2
2
1	1 2	2	2 	(5.23)
Equation (5.23) can be written as:
P	U	M 	ˆ	ˆ 	t	t	t =∆	+ 	(5.24)
where
C	M	M t	t 	∆
+
∆
= 2
1	1	ˆ 2 	(5.25)
and
u
R m	R

-- 53 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	38
U	C	M	U	M	R	P	P t	t	t	t	t	t
t	t	t
∆	−






∆
−
∆
−
∆
+	−	= 2
1	1	2	ˆ 2	2 	(5.26)
The displacement at time t+∆t is calculated by use of Equation (5.24).
P	M	U 	ˆ	ˆ 	1 t	t	t 	−	∆	+ = 	(5.27)
In Equations (5.26) it is seen that as long as the external load is lower than the
maximum value of the internal force and the displacement and acceleration for time t
and t-∆t respectively is zero there will be no motion since 	Pˆ	t becomes zero giving
that 	Ut	t ∆	+ , calculated as in Equation (5.27), becomes zero.
Since M	ˆ 	does not varies in time for ideal plastic material, see Equation (5.25), it is
calculated only in the initial stage of the analysis together with the stiffness matrix K ,
mass matrix 	M 	and damping matrix 	C 	(if not neglected). The values of the
displacement, velocity and acceleration at time t=0, denoted 	U0 , 	U&	0 and 	U&&	0
respectively, are also initialized in the initial stage and after selecting time step size
the displacement at time -∆t are calculated by means of Equation (5.27). Since R
depends on the size of the load and the displacement it must be calculated for each
time step, see Equation (5.21). Also Pˆ varies in time and has to be calculated for each
time step in the analysis, see Equation (5.26) and the displacement at time t+∆t is
calculated by means of Equation (5.27).
The complete algorithm for the central difference method when having an ideal
plastic material is given in Table 5.3.

-- 54 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	39
Table 5.3 	Algorithm for central difference method when having ideal plastic
behaviour.
A. 	Initial calculations:
a. 	Form mass matrix M and damping matrix C .
b. 	Initialize 	U0 , 	U&	0 and 	U&&	0 .
c. 	Select time step 	t	∆ 	( 	cr	t	t 	∆	≤	∆ 	).
d. 	Calculate 	U	U	U	U 	&&	& 	0
2
0	0
2
t
tt 	∆
+	∆	−	=∆	−
e. 	Form effective mass matrix M	ˆ .
C	M	M t	t 	∆
+
∆
= 2
1	1	ˆ 2
B. For each time step:
a. 	Determine the matrix of internal force for time t .
P	R
R	R
t	t
m
t
=
=
0	also	if	when
0	or	when
=	<
≠	≥
U	R	P
U	R	P
t
m
t
t
m
t
b. 	Calculate effective loads at time t .
U	C	M	U	M	R	P	P t	t	t	t	t	t
t	t	t
∆	−






∆
−
∆
−
∆
+	−	= 2
1	1	2	ˆ 2	2
c. 	Solve for displacements at time 	t	t 	∆	+ 	.
P	U	M 	ˆ	ˆ 	t	t	t =∆	+
d. 	If required evaluate accelerations and velocities at time t .
( 	)	U	U	U	U t	t	t	t	t	t
t
∆	+	∆	− +	−
∆
= 	2
1 2
&&
( 	)	U	U	U t	t	t	t	t
t
∆	+	∆	− +	−
∆
= 2
1	&

-- 55 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	40
6 	Transformation from deformable body to SDOF
system
In order to simplify analyses of deformable bodies, which have an infinite number of
degrees of freedom, the system can be discretized to a system with a finite number of
elements and the degrees of freedom belonging to them. Beams and plates have, in
practice, a limited possibility to move. This makes it possible to transform the
structures to single degree of freedom systems here denoted as SDOF systems, see
Figure 6.1. This simplification introduces errors into the analyses. For example the
user assumes a shape of deflection valid for the SDOF system, in this report the shape
of deformation corresponding to the first eigenmode is assumed, while the shape of
deformation for beams are influenced by higher modes, see Section 4.2.3.
y	C	I	E	L	M	
σ	,	,	,	,	,
)	,	( 	t	x	q
e	R 	e	C
e	M
)	(t	Pe
Figure 6.1 	Transformation from deformable body to SDOF system.
The properties of the deformable body will be transformed to the SDOF system by
assigning equivalent quantities for the mass, the internal force and the load applied to
a system point. The SDOF system is assumed to have the same function describing
the deflection in the system point. Since, in most cases, the maximum displacement is
to be calculated the location of the system point in the deformable body is chosen to
coincide with the point that achieves the larges displacement but it can be an arbitrary
point along the beam. One condition, for the transformation of the properties to be
possible, is that a uniform change of the deformation is assumed. That is if the
displacement in one point of the beam increases the displacements in all the other
points will increase proportional to this as illustrated in Figure 6.2. Another way to
express this is to say that the principle shape of deformation is assumed to be the
same, and hence be known at all times.

-- 56 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	41
Figure 6.2 	Shape of deformation at time 	1t 	and 	2	t .
The transformation of the properties for the real structure to the equivalent properties
for the SDOF system is made by use of transformation factors. The equivalent
quantities and the transformation factors are derived from the condition that the
energy exerted by the equivalent SDOF system must be equal to the energy exerted by
the beam, when exposed to a certain load. Hence, the transformation factors will
depend on the applied load and the deflection shape of the beam.
6.1 	Differential equation for SDOF system
The differential equation for the SDOF system in Figure 6.1 is:
)	(t	P	R	u	C	u	M 	e	e	s	e	s	e 	=	+	+ 	&	&& 	(6.1)
where M e is the equivalent mass, R e is the equivalent internal force and Pe(t) is the
equivalent load applied which is varying with time. The damping, Ce, of the system is
here chosen to be neglected since it has little influence on the value of the maximum
displacement which is of interest. Neglecting the influences of damping also involves
calculations that are easier to handle and gives results on the safe side because the
capacity 	of 	the 	system 	is 	underestimated. 	When 	neglecting 	the 	damping 	the
differential equation for the SDOF system in Equation (6.1) can be rewritten as:
)	(t	P	R	u	M 	e	e	s	e 	=	+	&& 	(6.2)
The equivalent quantities for the mass, the internal force and the load can be
expressed by means of transformation factors.
)	(t	P	R	u	M 	P	K	s	M	
κ	
κ	
κ 	=	+	&& 	(6.3)
Equation (6.2) and (6.3) gives the definition of the transformation factors.
Shape of
deformation at
time 	2	t	t =
Shape of
deformation at
time 	1t	t =
)	,	( 	1t	x	u
)	,	(	)	,	( 	1	2 	t	x	u	t	x	u 	⋅	=
α
)	,	(	)	1	(	)	,	(	)	,	( 	1	1	2 	t	x	u	t	x	u	t	x	u 	−	=	−
	α
System point
x

-- 57 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	42
M
M e
M =
	κ 	(6.4)
R
R e
K =
	κ 	(6.5)
)	(
)	(
t	P
t	Pe
P =
	κ 	(6.6)
In order to simplify the expression of the differential equation further two new
transformation factors are defined.
P
M
MP
κ
κ
κ 	= 	(6.7)
P
K
KP
κ
κ
κ 	= 	(6.8)
By use of Equations (6.3), (6.7) and (6.8) the differential equation for the SDOF
system can be expressed as:
)	(t	P	R	u	M 	KP	s	MP 	=	+
κ
	κ 	&& 	(6.9)
6.2 	Transformation factors for beams
6.2.1 	Transformation factor for the mass
The transformation factor for the mass can be derived from the condition that the
equivalent mass M e, following the oscillation of the system point us, shall generate the
same amount of kinetic energy as the real system.
The kinetic energy generated by the equivalent mass in the SDOF system is:
2
2
s	e	SDOF
k
v	M
W 	= 	(6.10)
where t
u
v s
s ∆
∆
= 	is the velocity of the system point in vertical direction.
The kinetic energy for the beam is:
∫
=
=
=
L	x
x
beam
k 	Adx
v
W
0
2
2
ρ 	(6.11)

-- 58 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	43
where 	x 	coordinate with origin in one end of the beam 	[m]
A 	cross-section area 	[m2 ]
ρ 	density 	[kg/m3 ]
t
u
x	v	v ∆
∆
=	= 	)	( 	velocity of arbitrary point in vertical direction 	[m/s]
Due to the statement above Equation (6.10) shall be equal to Equation (6.11), i.e.:
∫	∫
=
=
=
=
=	⇔	=
L	x
x 	s
e
L	x
x
s	e Adx
v
v
M	Adx
v	v	M
0
2
2
0
2	2
2	2
ρ
	ρ 	(6.12)
The change of the displacement in an arbitrary point in the beam can be expressed as:
)	,	(	)	1	(	)	,	(	)	,	(	)	,	(	)	,	( 	1	1	1	1	2 	t	x	u	t	x	u	t	x	u	t	x	u	t	x	u	u 	−	=	−	=	−	=	∆
	α
	α 	(6.13)
where u(x,t 1) is the displacement at time t=t 1 at the distance x from one end of the
beam and u(x,t 2 ) is the displacement at the same position in the longitudinal direction
of the beam at time t=t 2. Due to the constant shape of the beam deflection u(x,t 2 ) can
be said to be a factor α times larger than u(x,t 1 ), see Figure 6.2.
This is also valid for the system point where the change of deformation when time
goes from t 1 to t 2 thus can be expressed as, see Figure 6.2:
)	(	)	1	(	)	(	)	(	)	(	)	( 	1	1	1	1	2 	t	u	t	u	t	u	t	u	t	u	u 	s	s	s	s	s	s 	−	=	−	=	−	=	∆
	α
	α 	(6.14)
Since the assumption of uniform deformation is valid for all times, t, Equations (6.13)
and (6.14) can be written in a more general form:
)	,	(	)	1	( 	t	x	u	u 	−	=	∆
	α 	(6.15)
)	(	)	1	( 	t	u	u 	s	s 	−	=	∆
	α 	(6.16)
The velocity of an arbitrary point in vertical direction and the velocity of the system
point in the same direction can be expressed as v=∆u/∆t and vs =∆us /∆t 	respectively.
Using these expressions together with Equation (6.15) and (6.16), Equation (6.12) can
be written as:
( 	)
( 	) Adx
t	u
t	x	u
Adx
t	u
t	x	u
M
L	x
x 	s
L	x
x 	s
e	
ρ
	ρ
α
α ∫	∫
=
=
=
=
=
−
−
=
0
2
2
0
2
2
)	(
)	,	(
)	(	)	1	(
)	,	(	)	1	( (6.17)
If the definition of the transformation factor κM (see Equation (6.4)) is used and the
beam is assumed to have a uniformly distributed mass the expression for the
transformation factor for the mass can be written as:

-- 59 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	44
dx
t	u
t	x	u
L
Adx
t	u
t	x	u
M
L	x
x 	s
L	x
x 	s
M 	∫	∫
=
=
=
=






=





=
0
2
0
2
)	(
)	,	(	1
)	(
)	,	(	1
ρ
	κ 	(6.18)
i.e. the transformation factor for the mass is depending on the assumed shape of the
deformation.
6.2.2 	Transformation factor for the load
The transformation factor for the load can be derived from the condition that the
equivalent load, following the oscillation of the system point, shall generate the same
amount of work as the total real load does in the real MDOF system.
The work generated by the equivalent load in the SDOF system during a time
increment ∆t is:
)	(	)	(	e 	t	u	t	P 	s
SDOF =	Π 	(6.19)
The corresponding work for the beam is:
∫
=
=
=	Π
L	x
x
beam dx	t	x	u	t	x	q
0
)	,	(	)	,	( 	(6.20)
where 	x 	coordinate with origin at one end of the beam 	[m]
)	(	)	,	(
0
t	P	dx	t	x	q
L	x
x
=	∫
=
=
total load on the beam 	[N]
Due to the statement above Equation (6.19) shall be equal to Equation (6.20)
∫	∫
=
=
=
=
=	⇔	=
L	x
x 	s
L	x
x
s 	dx
t	u
t	x	u
t	x	q	t	P	dx	t	x	u	t	x	q	t	u	t	P
0
e
0
e )	(
)	,	(
)	,	(	)	(	)	,	(	)	,	(	)	(	)	( 	(6.21)
The transformation factor for the load, see Equation (6.6), can now be written as:
∫
∫ =
=
=
=
= 	L	x
x
L	x
x 	s
P
dx	t	x	q
dx	t	x	q
t	u
t	x	u
0
0
)	,	(
)	,	(
)	(
)	,	(
κ 	(6.22)
Also the transformation factor for the external load is depending on the assumed
shape of deformation. It is further depending on the shape of the load.

-- 60 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	45
6.2.3 	Transformation factor for internal force
The transformation factor for the internal force, following the oscillation of the system
point, can be derived from the condition that the equivalent internal force shall
perform a work that is equivalent to the work of deformation for the beam.
The internal force and the work it performs are depending on the behaviour of the
material. For the SDOF system this is shown in Figure 6.3, where the shaded areas
represent the total internal work for each material. Rme is the maximum value of the
equivalent internal force. In case of linear elastic material the maximum internal force
is corresponding to Rme=Ke·us,max.
Figure 6.3 	Internal work for SDOF system for a) Linear elastic material b) ideal
plastic material c) trilinear material.
The internal force for the SDOF system can be expressed for the three different types
of spring relations shown in Figure 6.3.
Linear elastic behaviour:
s	e	e 	u	K	R 	= 	(6.23)
where Ke is the stiffness of the linear spring in the SDOF system.
Ideal plastic behaviour:
( ) 	0	for 	≠	= 	t	u	R	R 	me	e 	(6.24)
Because of the ideal plastic behaviour there will be no displacement until the load,
Pe(t), has reached the value of the maximal internal force, Rme.
Trilinear behaviour:
s
pl	s	cr	s
cr	s
me
cr	s	s	e	cr	s	e
s	e
e
u	u
u	u	u
u	u
R
u	u	K	u	K
u	K
R
<
≤	≤
≤





−	′	+	=
pl	s,
,	s	,
,	s
,	,
for
for
for
)	( 	(6.25)
a) 	b) 	c)
s	u
1
e	K
e	R
me	R
max	,s	u s	u
e	R
me	R
s	u
e	R
pl	s	u ,	cr	s	u ,
me	R
cre	R
e	K
e	K′
1
1

-- 61 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	46
6.2.3.1 	Linear elastic material
Following Samuelsson and Wiberg (1999) the work of deformation for the beam
made of linear elastic material can be derived by studying a lamella of length ∆x and
the sectional forces, N , and deformations, ∆n , belonging to it, see Figure 6.4.
N	N
V
V
M
M
x	∆
z
Figure 6.4 	Segment, with length 	x	∆ 	, of the beam.
The constitutive relationship between the sectional forces N and the deformations
∆n are:
∆n	N










∆
=
EI
GA
EA
x 0	0
0	0
0	0
1
β 









=
M
V
N
N 	,










∆
∆
∆
=
m
t
n
∆n 	(6.26)
where 	E 	modulus of elasticity 	[Pa]
A 	cross-section area 	[m2 ]
)	1	(	2	
υ	+
= E
G 	shear modulus 	[Pa]
υ 	Poisson’s ratio 	[-]
β 	constant, shape factor 	[-]
I 	moment of inertia 	[m4 ]
The meanings of the deformations ∆n, ∆t and ∆m are shown in Figure 6.5.

-- 62 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	47
Figure 6.5 	Deformation of beam lamella.
The constant β can be derived from the statement that the work of deformation due to
shear force shall be equal to the work of deformation due to shear stress.
dz	z	b	z	z
GA
V
V	V
h	z
z
)	(	)	(	)	(
0
γ
	τβ
γ 	∫
=
=
=	= 	(6.27)
where GA
V
β
γ = 	average value of shear angle 	[-]
τ 	shear stress 	[Pa]
b 	width of the cross-section 	[m]
h 	height of the cross-section 	[m]
G
τ
γ = 	shear angle 	[-]
For a certain time in the loading the sectional forces will increase from N to 	N	N 	d	+
and the deformations will increase from 	n	∆ 	to 	∆n	∆n 	d	+ 	. The change of the work of
deformation is defined as the change of the work during the change of deformation
∆n	d 	.
m	Md	t	Vd	n	Nd	d s
i 	∆	+	∆	+	∆	=	Π 	(6.28)
where index s and i stands for segment and internal respectively.
When using Hooke’s law Equation (6.28) can be rewritten
∆n	N d	m	d	m
x
EI
t	d	t
x
GA
n	d	n
x
EA
d t	s
i 	=	∆	⋅	∆
∆
+	∆	⋅	∆
∆
+	∆	⋅	∆
∆
=	Π
β (6.29)
In order to get the total work of deformation of the segment, Equation (6.29) will be
integrated over the deformation ∆n .
m	∆	n	∆
t	∆

-- 63 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	48
x
m	EI	t
GA
n	EA
m	d	m
x
EI
t	d	t
x
GA
n	d	n
x
EA
n
n
m
m
t
t
s
i
∆	




 ∆	+	∆	+	∆	=
=	∆	∆
∆
+	∆	∆
∆
+	∆	∆
∆
=	Π 	∫ 	∫	∫
∆
=	∆
∆
=	∆
∆
=	∆
2
1
)	(	)	(	)	( 2	2	2
0 	0	0
β
β (6.30)
Once again using Hooke’s law and integrating the work of deformation for the
segment over the length, L, of the beam will give the total work of deformation for the
beam.
∫	∫
=
=
=
=





 ′′	+	+	=
∆
Π
=	Π
L	x
x
L	x
x
s
i	beam
i 	dx	x	u	x	M
GA
V
EA
N
dx
x 	0
2	2
0 	2
1
)	(	)	(
β (6.31)
If the influences from the normal- and shear forces are neglected the total work of
deformation for the beam can be written as:
∫
=
=
′′	=	Π
L	x
x
beam
i 	dx	x	u	x	M
0
)	(	)	(
2
1 (6.32)
Equilibrium position
Position when the force in the spring is
e	R 	larger than in equilibrium position
ξ
e	M
e	M
a)
b)
Figure 6.6 	Mass in a) equilibrium position and b) moved ξ from equilibrium
position.
Study the undamped SDOF system in Figure 6.6. The displacement ξ causes an
internal work for the SDOF system which by use of Equation (6.23) can be written as:
2	2
2	2
0	0
s
K
s	e
u
e
u
e
SDOF
i
Ku	u	K
d	K	d	R
s	s
κ
	ξ	ξ
	ξ
ξ
ξ
ξ
ξ
=	=	=	=	Π 	∫	∫
=
=
=
=
(6.33)

-- 64 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	49
As stated in Section 6.2.3 the total internal work of the SDOF system shall be equal to
the total work of deformation of the beam, meaning that Equation (6.32) shall be
equal to Equation (6.33).
∫
=
=
′′	=
L	x
x
s
K 	dx	x	u	x	M
Ku
0
2
)	(	)	(
2
1
2
κ 	(6.34)
The stiffness K of the beam is depending on the shape of the load and is determined
by:
s
L	x
x
Ku	dx	t	x	q 	=	∫
=
=0
)	,	( 	(6.35)
The definition of stiffness K of the beam according to Equation (6.35) together with
Equation (6.34) gives the final expression of the transformation factor for the internal
force when having a linear elastic material.
∫
∫
∫ 	=
=
=
=
=
=
′′
=	′′	= 	L	x
x
L	x
x
s
L	x
x	s
K
dx	t	x	q
dx	x	u	x	M
u
dx	x	u	x	M
Ku
0
0
0
2
)	,	(
)	(	)	(
1
)	(	)	(
1
κ 	(6.36)
For high beams it might be necessary to include the influences from the shear forces
to get adequate results, see Section 6.2.4 for further discussion.
6.2.3.2 	Ideal plastic material
As when deriving the work of deformation for the beam made of linear elastic
material a lamella of the ideal plastic beam with length ∆x is studied. For ideal plastic
material the influence of the normal- and the shear force is neglected in the following
derivation of the transformation factor. For high beams the influence of shear will
cause the transformation factor to change noticeable.
Consider 	a 	situation 	when 	the 	moment, 	M, 	will 	increase 	to 	M+dM 	and 	the
deformation of the segment, ∆m will increase to ∆m+d∆m. The increase of the work
of deformation is defined as the work achieved during the deformation d∆m.
m	Md	d s
i 	∆	=	Π 	(6.37)
where the moment M is constant within the segment.
In order to obtain the total work of deformation for the segment Equation (6.37) will
be integrated over the deformation ∆m.

-- 65 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	50
m	M	m	d	M	m	Md
m	m
s
i 	∆	=	∆	=	∆	=	Π 	∫	∫
∆	∆
0	0
(6.38)
Integration of the work of deformation for the segment over the length, L, of the beam
will give the total work of deformation for the beam.
∫	∫	∫
=
=
=
=
=
=
′′	=
∆
∆
=
∆
Π
=	Π
L	x
x
L	x
x
L	x
x
s
i	beam
i 	dx	x	u	M	dx
x
m
M	dx
x 	0	0	0
)	( 	(6.39)
The internal work for the SDOF system, when the spring has ideal plastic behaviour,
can be derived in the same way as for linear elastic behaviour (see Section 6.2.3.1).
For an ideal plastic material the internal force is constantly equal to Rme if the
displacement ξ exists (see Equation (6.24)).
s	m	K	s	me
u
e
SDOF
i 	u	R	u	R	d	R
s
κ
	ξ
ξ
ξ
=	=	=	Π 	∫
=
=0
(6.40)
As stated in Section 6.2.3 the total internal work of the SDOF system shall be equal to
the total work of deformation of the beam, that is Equation (6.39) shall be equal to
Equation (6.40).
∫
=
=
′′	=
L	x
x
s	m	K 	dx	x	u	M	u	R
0
)	(	
κ 	(6.41)
This gives the final expression of the transformation factor for the internal force when
having an ideal plastic material.
∫
=
=
′′	=
L	x
x	s	m
K 	dx	x	u	M
u	R 	0
)	(
1
κ 	(6.42)
The maximum value of the internal force is equal to the external load (since the
external load shall generate the same work of deformation as the internal resisting
force).
∫
=
=
=
L	x
x
m 	dx	t	x	q	R
0
)	,	( 	(6.43)
If Equation (6.43) is inserted in Equation (6.42) the transformation factor for the
internal resisting force in case of ideal plastic behaviour is expressed as:
∫
∫
∫ 	=
=
=
=
=
=
′′
=	′′	= 	L	x
x
L	x
x
s
L	x
x	s	m
K
dx	t	x	q
dx	x	u	M
u
dx	x	u	M
u	R
0
0
0 	)	,	(
)	(
1
)	(
1
κ 	(6.44)

-- 66 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	51
6.2.3.3 	Trilinear response material
The trilinear response curve in Figure 6.3.c can represent the response of a reinforced
concrete beam subjected to pure bending, see Chapter 12 for the application on
concrete material.
The derivation of the transformation factor for internal force and trilinear material is
rather complex. Due to the difficulties to derive the expression of the transformation
factor for a multilinear material it is here assumed to be convenient to use the
transformation factor for linear elastic material in the analyses of trilinear material.
The choice of transformation factor for the internal force for trilinear material is
further discussed in Chapter 8.
6.2.4 	Tabled transformation factors for beams
The values of the transformation factors for mass, load and internal force for the
beams shown in Figure 6.7 are calculated in Appendix A to B and are shown in Table
6.1. The system point is placed in the middle of the beam for all cases except of
cantilever beams, when it is placed in the free end of the beam. When having linear
elastic material the natural shape of deformation, meaning the shape of deformation
according to theory of elasticity for a beam subjected to a static load, is assumed. In
case of ideal plastic material the mechanisms according to theory of plastic hinges is
assumed (see examples in Appendix B).
L 	L
L 	L
Case (1.1) 	Case (1.2)
Case (2.2)	Case (2.1)
L 	L
Case (3.2)	Case (3.1)
Figure 6.7 	The six different cases.

-- 67 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	52
Table 6.1 	Transformation factors for beams shown in Figure 6.7
Material 	P	
κ 	M	
κ 	K	
κ 	MP	
κ 	KP	
κ
Elastic 	1.0 	0.486 	1.0 	0.486 	1.0
Case (1.1)
Plastic 	1.0 	1/3 	1.0 	1/3 	1.0
Elastic 	0.640 	0.504 	0.640 	0.787 	1.0
Case (1.2)
Plastic 	0.5 	1/3 	0.5 	2/3 	1.0
Elastic 	1.0 	0.371 	1.0 	0.371 	1.0
Case (2.1)
Plastic 	1.0 	1/3 	1.0 	1/3 	1.0
Elastic 	0.533 	0.406 	0.533 	0.762 	1.0
Case (2.2)
Plastic 	0.5 	1/3 	0.5 	2/3 	1.0
Elastic 	1.0 	0.236 	1.0 	0.236 	1.0
Case (3.1)
Plastic 	1.0 	1/3 	1.0 	1/3 	1.0
Elastic 	0.400 	0.257 	0.400 	0.642 	1.0
Case (3.2)
Plastic 	0.5 	1/3 	0.5 	2/3 	1.0
Granström (1958) and Balasz (1997) have used a different expression for the
transformation factor for the internal force, the relation with the transformation factor
used here are shown in Appendix C.
When taking the influences from shear into account the transformation factor depends
also on the shear modulus and consequently the Poisson's ratio ν. In case of a fixed
concrete 	beam 	(ν≈0.15) 	with 	linear 	elastic 	material, 	subjected 	to 	a 	uniformly
distributed load and the length of the beam is ten times the height (L=10h) the
contribution from the shear to the transformation factor for internal force is 0.01
according to Wendt (2006). In Table 6.1 it is seen that in this case, when the influence
of shear is not taken to account, the transformation factor for the internal force is
0.533. The transformation factor for the internal force is thus 0.533+0.01=0.543 when
influences from shear are included. When the length of the beam is five times the
height (L=5h) the contribution from the shear to the transformation factor for internal
force is 0.06 according to Wendt (2006) and the value of the transformation factor for
internal force is 0.533+0.06=0.593 when influences of shear are taken into account.

-- 68 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	53
7 	Comparison of SDOF and FE analyses for beams
In order to verify the results of the analysis where the beam is represented by an
SDOF system, a comparison to the results in a finite element analysis (FE analysis) is
made. The FE analysis is here assumed to give results accurate enough to be equal to
the real behaviour of the beam.
Due to limitations in the SDOF analysis the influences of higher order modes are not
taken into account while it is in the FE analysis. When analysing a beam with trilinear
material response a difference between the SDOF and FE results is expected since the
transformation factors for linear elastic material is used in this case as discussed in
Section 4.2.3.
7.1 	Typical examples
Comparisons are made for four different cases; simply supported beam subjected to
concentrated and uniformly distributed load respectively, and beam with fixed ends
subjected to concentrated and uniformly distributed load respectively. The different
cases are shown in Figure 7.1.
Each case will be analysed for linear elastic (1 analysis), ideal plastic (1 analysis) and
trilinear material (3 analyses) as described in Chapter 6. Further each case with each
material model will be analysed as a SDOF system as well as a MDOF system. This
summons up in 	40	2	)	3	1	1	(	4 	=	⋅	+	+	⋅ 	analyses. The MDOF system is analysed by use
of the commercial code ADINA (2004).
m	5	.	2	=	L 	m	5	.	2	=	L
m	5	.	2	=	L 	m	5	.	2	=	L
Case (1.1) 	Case (1.2)
Case (2.2)	Case (2.1)
Figure 7.1 	The four different cases.
The choice of material properties and geometry of the beam is based on the
requirements 	in 	the 	Swedish 	shelter 	regulations, 	Räddningsverket 	(2003), 	also

-- 69 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	54
discussed in Section 12.3. The geometry of the beam will be the same for all cases
with a length of 2.5 meters and a cross-section as shown in Figure 7.2.
b
h
m	35	.	0
m	0	.	1
=
=
h
b
Figure 7.2 	The cross-section of the beams used in the typical examples.
It is necessary to use material properties and loads that agree in both FE and SDOF
analyses in order to facilitate the comparison of the results from the different analyses.
The load applied is triangular in time, as shown in Figure 7.3. Where the total time for
the load is 1.0 ms and the maximum value of the load ( 1	P ), also called the peak value
of the load, is chosen to occur when 10% of the total time for the load has elapsed. In
reality the peak load occurs at time 0.0 ms but since this can cause numerical
problems the approximation described above is used.
0.1 	1 	time [ms]
load [kN]
1	P
Figure 7.3 	Time function of the load.
The peak value of the load differs in the analyses. When having a trilinear material
three different analyses are made for each typical example. One for a load small
enough to stay in the elastic range, one for a load large enough to leave the elastic
range but still small enough not to reach the plastic range and one with a load large
enough to reach the plastic range, see Figure 7.4.

-- 70 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	55
R
u	Elastoplastic range 	Plastic range
Elastic range
Figure 7.4 	The different ranges for a trilinear material.
In case of trilinear material the maximum load value when elastic behaviour is wanted
is chose to be P1=0.8Pcr , when elastoplastic behaviour is wanted P1=0.8(Rm-Pcr) and
for plastic behaviour P1=2Rm. Table 7.1 shows the values of the peak load for the
different analyses. In case of uniformly distributed load the peak value of the load is
q1 =P1 /L.
Table 7.1 	Peak values for the loads applied to the beams.
Case (1.1) 	Case(1.2) 	Case (2.1) 	Case (2.2)
Material Peak load,
1	P [kN]
Peak load,
1	P [kN]
Peak load,
1	P [kN]
Peak load,
1	P [kN]
Linear elastic 	132 	268 	120 	184
Ideal plastic 	4810 	9640 	4220 	8560
Elastic range 	132 	268 	120 	184
Elastoplastic
range
1954 	3920 	1715 	3467
Trilinear
Plastic range 	4810 	9640 	4220 	8560
In the SDOF analyses the total time for the analysis is set to 30 ms and 10000 time
steps are used which gives a constant time increment, ∆t, equal to 0.003 ms. This time
step is also used in case of elastic material in the FE analyses. In case of ideal plastic
and trilinear material 	the time step is decreased since otherwise convergence
problems will occur in ADINA (2004), see Section 7.1.2. In these analyses a time step
increment of 0.0015 ms are used. The time increment of 0.003 ms in the SDOF
analyses for ideal plastic and trilinear material remains.

-- 71 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	56
When analysing a beam as a SDOF system with trilinear behaviour (for example a
reinforced concrete beam) the material properties are often given as the relation
between load and displacement while in the FE analyses the stress-stain relation is
required. 	How 	to 	obtain 	an 	approximate 	stress-strain 	relation 	from 	the 	load-
displacement curve for the beams in the typical examples are shown in Appendix D.
The 	corresponding 	notations 	when 	using 	a 	stress-strain 	relation 	and 	a 	load-
displacement relation are shown in Figure 7.5.
u
P
K′
pl	u	cr	u
pl	P
cr	P
K
ε
σ
E′
pl	
ε	cr	
ε
pl	
σ
cr	
σ
E
Figure 7.5 	Notations for material properties for load-displacement relation and
stress-strain relation respectively.
It shall be observed that the modelled beams in ADINA (2004) will not vibrate as a
reinforced concrete beam since plastic deformations occur also in the elastoplastic
range while a reinforced concrete beam have elastic behaviour in both elastic and
elastoplastic range, see Section 3.1.3. The solution of the SDOF analyses are here
forced to have the same behaviour meaning that plastic deformations will occur as fast
as the elastoplastic range is entered. However, this will not influence the value of the
maximum deflection and are therefore application able on analyses of reinforced
concrete beams as long as the maximum value of the displacement is to be found.
7.1.1 	SDOF analysis
Analyses of the SDOF system are made in OCTAVE using MATLAB programming
language, developed for this project that computes the displacement for each time step
for the three different types of material responses. The computations are made by
using the explicit central differential method, see Section 5.2. The material data
needed to perform the calculations for the different materials are calculated in
Appendix D and shown in Table 7.2 where the meaning of the notations can be seen
in Figure 7.5.

-- 72 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	57
Table 7.2 	Material properties for SDOF analysis.
Material 	cr	P 	[kN] 	pl	P 	[kN] 	K	K ′ 	pl	
σ 	[MPa] 	E [GPa]
Linear elastic 	- 	- 	- 	- 	38.6
Ideal plastic 	- 	- 	- 	4.45 	-
Case (1.1) 	53.8 	218.2
Case (1.2) 	107.7 	436.4
Case (2.1) 	107.7 	436.4
Trilinear
Case (2.2) 	161.5 	872.9
0.0774 	- 	38.6
7.1.2 	FE model
The program used for the FE analyses is the commercial code ADINA (2004) where
the solution method is Newmark with δ=0.5 and α=0.25. This method is also called
the trapezoid method or constant-average-acceleration method, see Section 5.1.
Different FE models are used for the different material responses. Due to limitations
in the ADINA (2004) program the elements used to model the beam will not be the
same for all cases. In the cases of elastic and ideal plastic material the beam is
modelled with 2-node beam elements as shown in Figure 7.6. When having elastic
material the beam is divided into twenty equally sized elements (see Appendix E).
Figure 7.6 	Beam element with constant, rectangular cross-section.
In case of an ideal plastic material the beam is divided into parts modelled with ideal
plastic material and parts with linear elastic material in order to imitate the assumed
mechanisms. The elements with ideal plastic material are located where the assumed
plastic hinges are located, see Figure 3.13. The linear elastic part of the beam is
divided into 48 elements and the total number of ideal plastic elements differs due to
the different numbers of plastic hinges for different beams. In case of simply
supported beams the total length of the part modelled with linear elastic material is
2.45 m and in case of a beam fixed in both ends the total length of the elastic part is
2.4 m. For all beams the length of the ideal plastic elements are 2.5 cm. Constraints
are used in the nodes belonging to the elastic part of the beam in order to have no
curvature. The rotation of these nodes is constrained to be the same as in the node in
between the element with plastic material in the middle, in case of simply supported

-- 73 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	58
beam, and at the supports, in case of fixed beam, and the last elastic element. This is
done in order to imitate the assumed mechanisms even more. The beams in the ideal
plastic analyses are shown in Figure 7.7 and Figure 7.8.
2 ideal plastic elements
with length 2.5 cm each
24 linear elastic elements
Total length 1.225 m
Figure 7.7 	Modelled beam (simply supported) for ideal plastic material.
1 ideal plastic
element with
length 2.5 cm
1 ideal plastic
element with
length 2.5 cm
2 ideal plastic
elements with
length 2.5 cm each
24 linear elastic elements
Total length 1.2 m
Figure 7.8 	Modelled beam (fixed in both ends) for ideal plastic material.
When having a trilinear material (modelled with multilinear material) the beam cannot
be modelled with beam elements in ADINA (2004). Instead 2-node isobeam elements
are used. The beam is divided in three hundred parts in the longitudinal direction in
case of uniformly distributed loads. In case of concentrated loads an odd number of
elements will be used in order to avoid an unrealistic deformation in the midzone. 299
elements are used in these cases (see Appendix E) and the middle element has
trilinear material behaviour while the other elements will have a material response as
shown in Figure 7.9, here called bilinear material behaviour, in order to avoid large
plastic deformations here. The length of the midpoint element is 2.5 cm, see Figure
7.10 and Figure 7.11.

-- 74 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	59
ε
σ
E′
pl	
ε	cr	
ε
pl	
σ
cr	
σ
E
Figure 7.9 	Bilinear material behaviour used in all elements except the midpoint
element in case of trilinear material and concentrated load.
1 element with
trilinear material
and length 2.5 cm
149 elements with total length
of 1.2375 m and bilinear
material
Figure 7.10 	Modelled beam (simply supported) for trilinear material in case of
concentrated load.
1 element with
trilinear material
and length 2.5 cm
149 linear elastic elements
Total length 1.225 m
Figure 7.11 	Modelled beam (fixed in both ends) for trilinear material in case of
concentrated load.
The main difference between beam and isobeam elements is that beam elements have
2 nodes while isobeam elements can have 2, 3 or 4 nodes where 3- and 4-node
isobeam elements can be used to define curved beams (see Figure 7.12). Even though
there are some calculation differences when using 2-noded isobeam elements instead
of beam elements the results will be very similar. For further information see
ADINA (2004). The material data used to perform the calculations for the different
materials are shown in Table 7.3.

-- 75 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	60
Figure 7.12 	General 3-D isobeam elements. From ADINA (2004).
Table 7.3 	Material properties for FE analysis
Material 	E
[GPa]
E′
[GPa]
cr	
σ
[MPa]
pl	
σ
[MPa]
cr	
ε
[‰]
pl	
ε
[‰]
Linear elastic 	38.6 	- 	- 	- 	- 	-
Ideal plastic 	50001) - 	- 	4.452) - 	-
Trilinear 	38.6 	2.99 	1.65 	4.45 	0.043 	0.98
1) 	In ADINA (2004) it is not possible to model an ideal plastic material but in order to imitate this
behaviour a bilinear plastic material is used where the modulus of elasticity in the elastic part is
chosen to be large enough to get accurate result. By testing it was found that a suitable value of
the modulus of elasticity was 5000 GPa see Appendix E.
2) 	The elements in the beam that are not connected to any assumed plastic hinge are modelled with
linear elastic material in order to avoid yielding in these elements.
7.2 	Results
7.2.1 	Linear elastic material
In the SDOF- and FE analyses with linear elastic material the input shown in Table
7.2 and Table 7.3 were used. The displacement-time relations from SDOF and FE
analyses for linear elastic material are compared in Figure 7.13.
2-node isobeam
3-node isobeam
4-node isobeam

-- 76 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	61
SDOF 	FEM
-0,12
-0,06
0
0,06
0,12
0 	5 	10 	15 	20 	25 	30
Tim e [ms]
Displacement [mm]
-0,15
-0,1
-0,05
0
0,05
0,1
0,15
0 	5 	10 	15 	20 	25 	30
Time [m s]
Displacement [mm]
-0,06
-0,03
0
0,03
0,06
0 	5 	10 	15 	20 	25 	30
Tim e [ms]
Displacement [mm]
-0,04
-0,02
0
0,02
0,04
0 	5 	10 	15 	20 	25 	30
Time [m s]
Displacement [mm]
Figure 7.13 Displacement-time relations from analyses for linear elastic material.
As predicted there are influences from higher modes in the results from the FE
analyses. These are represented by a non smooth character of the curve. When
comparing the FE results for the different cases it can be observed that the higher
modes influence the beams subjected to a concentrated load more than they affect the
results for a beam subjected to a uniformly distributed load.
There is a good agreement between the curves representing the SDOF and FE
solution.
A phase shift between the results from the SDOF and FE analysis can be noticed in
case of concentrated load.
7.2.2 	Ideal plastic material
In the SDOF- and FE analyses with ideal plastic material the input shown in Table 7.2
and Table 7.3 were used. The displacement-time relations from SDOF and FE
analyses for ideal plastic material are shown in Figure 7.14.

-- 77 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	62
SDOF 	FEM
0
4
8
12
16
20
0 	5 	10 	15 	20 	25 	30
Time [m s]
Displacement [mm]
0
4
8
12
16
20
0 	5 	10 	15 	20 	25 	30
Tim e [ms]
Displacement [mm]
0
2
4
6
8
0 	5 	10 	15 	20 	25 	30
Time [m s]
Displacement [mm]
0
2
4
6
8
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
Figure 7.14 	Displacement-time relations from analyses for ideal plastic material.
The values of the maximum displacement from the SDOF analysis are lower than the
values from the FE analyses but the difference is rather small for all cases and the
SDOF results are acceptable approximations of the FE results. The lower value can be
may be explained by the fact that the same behaviour are not exactly the same in
SDOF and FEM.
7.2.3 	Trilinear material
The results from the analyses when having a trilinear material are presented in this
section. Due to the change in behaviour for different loads three different values of
loads are used for each case see Table 7.1. In the SDOF- and FE analyses with
trilinear material the input shown in Table 7.2 and Table 7.3 are used.
7.2.3.1 	Elastic range
For a load small enough all points in the beam will remain elastic meaning that the
beam will vibrate about the position of the unloaded beam. Since the only differences
between these analyses and the analyses for linear elastic material is that the beam is
modelled with isobeam elements instead of beam elements and that more elements are

-- 78 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	63
used (300 or 299 instead of 20) the results will be identical or nearly identical in those
cases see Section 7.2.1. The displacement-time relations from SDOF and FE analyses
for trilinear material, elastic range, are shown in Figure 7.15.
SDOF 	FEM
-0,15
-0,1
-0,05
0
0,05
0,1
0,15
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
-0,15
-0,1
-0,05
0
0,05
0,1
0,15
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
-0,06
-0,04
-0,02
0
0,02
0,04
0,06
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
-0,05
-0,025
0
0,025
0,05
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
Figure 7.15 	Displacement-time relations from analyses for trilinear material,
elastic range.
The results are very similar to the results achieved in the analysis of linear elastic
material, see Section 7.2.1, but one difference worth attention is that the phase shifts
have increased for all cases. One difference between the two analyses that could be
the reason for this difference is that for the trilinear material isobeam elements are
used while beam elements are used for the linear elastic material. Also the element
mesh differs in the two analyses. In case of linear elastic material 20 elements are
used while 300 or 299 are used in case of trilinear material. With these exceptions the
comments are the same as for the results achieved in the analyses of linear elastic
material.
7.2.3.2 	Elastoplastic range
For a load large enough to leave the linear elastic range but still small enough not to
reach the plastic range there will be plastic deformations of the beam leading to
oscillations about a value not identical to the unloaded position. The displacement-
time relations from SDOF and FE analyses for trilinear material, elastoplastic range,
are shown in Figure 7.16.

-- 79 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	64
SDOF 	FEM
0
1
2
3
4
5
0 	5 	10 	15 	20 	25 	30
Tim e [ms]
Displacement [mm]
0
1
2
3
4
5
6
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
0
0,5
1
1,5
2
0 	5 	10 	15 	20 	25 	30
Tim e [ms]
Displacement [mm]
0
0,5
1
1,5
2
2,5
0 	5 	10 	15 	20 	25 	30
Time [m s]
Displacement [mm]
Figure 7.16 	Displacement-time relations from analyses for trilinear material,
elastoplatic range.
The SDOF analyses overestimate the maximum displacement of the system point for
all cases. A reason for the differences in value of the maximum displacement,
comparing the SDOF with the FE solution, is that the transformation factor for the
linear 	elastic 	material 	is 	used 	through 	the 	whole 	analyses 	instead 	of 	using
transformation factors especially derived for this kind of material, see Section 6.2.3.3.
Another reason, probably the most important, is that the relation between the load and
displacement is not exactly the same for the SDOF and FE analyses see Appendix D.
In the FE analyses there is a difference between the maximum displacements in the
first oscillation compared to the maximum displacements in the following oscillations.
This loss in maximal displacement is not represented in the SDOF analysis where all
the oscillations have the same maximal displacement.
7.2.3.3 	Plastic range
For a load large enough to reach the plastic range there will be plastic deformations in
the beam, causing the beam to oscillate around a value not identical to the unloaded
position. The displacement-time relations from SDOF and FE analyses for trilinear
material, plastic range, are shown in Figure 7.17.

-- 80 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	65
SDOF 	FEM
0
4
8
12
16
20
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
0
6
12
18
24
0 	5 	10 	15 	20 	25 	30
Tim e [ms]
Displacement [mm]
0
2
4
6
8
10
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
0
2
4
6
8
10
0 	5 	10 	15 	20 	25 	30
Tim e [ms]
Displacement [mm]
Figure 7.17 	Displacement-time relations from analyses for trilinear material,
plastic range.
As seen in Figure 7.17 the difference between the SDOF and FE analyses is rather
large for beams subjected to concentrated loads. Even though the FE models of the
beam in case (1.1) and (2.1) are made in order to avoid large and unrealistic midpoint
displacements in the very beginning of the analyses the fast load application probably
influences the FE results more than the SDOF results. In Figure 7.18 where the
standardized deflection along the beam from the FE analysis in case (1.1) and (2.1)
are shown together with the assumed shape of deformation in the SDOF analysis. The
two shapes of deformation (meaning SDOF and FE) are not the same which partly
explains the difference between results from the SDOF and FE analyses in case of
concentrated loads.

-- 81 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	66
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of plasticity
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformaton due to theory of plasticity
Figure 7.18 	Standardized displacement along the beam in a) case (1.1) and b) case
(2.1) compared to the assumed shape of displacement in the SDOF
analyses.
The 	standardized 	shapes 	of 	deflection 	for 	case 	(1.2) 	and 	(2.2) 	are 	shown 	in
Appendix F.
In case of uniformly distributed loads the results agree more even though unrealistic
deflections appear at the supports in case (2.2). This behaviour can be explained by
the fact that the information is spread with delay inside the beam meaning that in the
very beginning of the loading the zones at the supports reaches high stresses before
the information has been transported to the rest of the beam (further discussed in
Section 12.1). This phenomenon is not taken into account in the SDOF analyses. A
more realistic value of the midpoint deformation can be estimated as shown below.
The deformation along the beam in case (2.2) is shown in Figure 7.19 where an
unrealistic deformation occurring at the supports can be seen. These appear in the
very beginning of the analysis and affects values of the midpoint deflection. A more
realistic value of the displacements at the supports from the FE analysis is shown in
Figure 7.20. In Figure 7.21 the more realistic midpoint displacement is shown
together with the SDOF result and the unrealistic FE result.
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
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Displacement [mm]
Figure 7.19 	Displacement along the beam in case (2.2).
a) 	b)

-- 82 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	67
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
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Displacement [mm]
Shape of deflection from FE analysis 	More realistic shape of deflection
Figure 7.20 	Estimated displacement for the beam in case (2.2)
0
2
4
6
8
10
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
SDOF 	FEM 	More realistic value to FEM
Figure 7.21 	More realistic displacement for the beam in case (2.2) compared to the
SDOF result.

-- 83 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	68
8 	Comments to and discussion about Chapter 7
8.1 	Transformation factors for trilinear material
In the analyses made in Chapter 7 the linear elastic transformation factors are used
when analysing SDOF systems with trilinear material since the derivation of the
transformation factor for internal force and trilinear material is rather complex. The
choice of transformation factors in case of trilinear material is discussed here.
Different approximations and simplifications can be used in order to facilitate
dynamic analyses of trilinear materials. Two approximation methods, convenient to
use in many cases according to Norris (1959), is discussed here.
8.1.1 	Sudden change of transformation factors
Norris (1959) declares that, even though a sudden change of transformation factors is
unrealistic when analysing an elastoplastic material, it is often assumed to be
convenient to use this approximation for purposes of analysis. This means that it is
assumed to be convenient to use the transformation factor for linear elastic material in
the elastic range and the transformation factor for plastic case in the plastic range.
When this statement is applied on trilinear material also the elastoplastic range has to
be considered.
In the elastoplastic range the transformation factor can be derived in the same way as
in the case of linear elastic and ideal plastic material. However, this is not done here
since the expression will depend on the value of the internal force where there is a
drastic change of material behaviour. In order to avoid these complex expressions it is
assumed to be suitable to use transformation factor for linear elastic materials in the
elastic range, an average value of the elastic and plastic transformation factor in the
elastoplastic range and transformation factor for ideal plastic materials in plastic
range.
2
pl	el
elpl	
κ
	κ
κ +
= 	(8.1)
where κelpl, κel and κpl are the transformation factors in the elastoplastic, elastic and
plastic range respectively.
In case of trilinear material the differential equation in the different ranges is:
In the elastic range
e	e	e 	P	u	K	u	M 	=	+	&& (8.2)
In the elastoplastic range
e	cr	e	cr	e	e 	P	u	u	K	u	K	u	M 	=	−	′	+	+ 	)	(	&& (8.3)

-- 84 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	69
In the plastic range
e	me	e 	P	R	u	M 	=	+	&& (8.4)
By use of transformation factors Equations (8.2) to (8.4) can be written as:
In the elastic range
P	Ku	u	M el
P
el
K
el
M	
κ
	κ
	κ 	=	+	&& (8.5)
In the elastoplastic range
( 	) 	P	u	u	K	Ku	u	M elpl
P	cr	cr
elpl
K
elpl
M	
κ
	κ
	κ 	=	−	′	+	+ 	)	(	&& (8.6)
In the plastic range
P	R	u	M pl
P	m
pl
K
pl
M	
κ
	κ
	κ 	=	+	&& (8.7)
or
In the elastic range
P	Ku	u	M el
KP
el
MP 	=	+
κ
	κ 	&& (8.8)
In the elastoplastic range
( 	) 	P	u	u	K	Ku	u	M 	cr	cr
elpl
KP
elpl
MP 	=	−	′	+	+ 	)	(	
κ
	κ 	&& (8.9)
In the plastic range
P	R	u	M 	m
pl
KP
pl
MP 	=	+
κ
	κ 	&& (8.10)
In case of a fixed beam subjected to a uniformly distributed load the transformation
factors in Equations (8.8) and (8.10), shown in Table 6.1 ,are:
0	.	1
762	.	0
=
=
el
KP
el
MP
κ
κ
0	.	1
3	/	2
=
=
pl
KP
pl
MP
κ
κ
(8.11)
and the transformation factors in the elastoplastic range, calculated by means of
Equation (8.1) are:
0	.	1
714	.	0
2
667	.	0	762	.	0
=
=
+
=
elpl
KP
elpl
MP
κ
κ (8.12)
The transformation factor κKP equals 1.0 in all ranges why only the value of the
equivalent mass will change. Since the value of κMP decreases when a new range is
entered it can be compared with taking away or losing mass. This means that when
using this method, where a sudden change of the transformation factors is allowed, the
energy will be drastically decreased when a new range is entered. This is graphically

-- 85 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	70
shown in Figure 8.1 where the energy of the SDOF system is studied when analysing
the beam in Section 12.4. The total energy used by the SDOF system will be lower
than the total energy applied to the system which is not realistic and will result in
underestimated value of the final displacement.
0
2
4
6
8
10
12
14
16
0 	5 	10 	15 	20
Deformation [mm]
Energy [kNm]
Total energy applied
to the system
Total energy used by
the SDOF system
Potential energy
Kinetic energy
Figure 8.1 	Energy, applied and internal, for SDOF system analysed by use of
different transformation factors in different ranges.
This is easily seen by studying areas representing the total internal energy when the
maximum displacement is reached, see Figure 8.2. When the maximum displacement
is reached the total internal energy equals the maximum potential energy R·umax. Since
the internal resisting force is equal in the two cases, if it is assumed that the ideal
plastic range is reached, the maximum displacement in umax,2 case 2 must be larger
than the maximum displacement umax,1 in case 1.
Figure 8.2 	Total internal energy in case 1, where energy is lost due to change of
transformation factors, and case 2 where no energy is lost.
In order to compensate the loss of mass, and hence energy, when entering a new range
the value of the acceleration can be increased in this point. This is here only shown
Total applied energy
Energy loss
Total internal
energy 	1	max,	u	R ⋅
Total internal
energy 	2	max,	u	R ⋅
Case 1 	Case 2

-- 86 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	71
when going from the elastic range to the elastoplastic range but the same method is
used when going from the elastoplastic to the plastic range.
Just before the elastoplastic range is entered the displacement is ucr- and the
differential equation is:
P	Ku	u	M 	cr
el
KP	cr
el
MP 	=	+ −	−
κ
	κ 	&& 	(8.13)
The displacement when the elastoplastic range is entered is ucr and the differential
equation is:
P	Ku	u	M 	cr
elpl
KP	cr
elpl
MP 	=	+
κ
	κ 	&& 	(8.14)
The transformation factor κKP is equal to 1.0 and in order to keep the energy constant
in this specific point Equation (8.15) must be fulfilled.
−
= 	cr
el
MP	cr
elpl
MP 	u	M	u	M 	&&	&&	
κ
	κ 	(8.15)
giving:
−
= 	cr	elpl
MP
el
MP
cr 	u	u 	&&	&&
κ
κ (8.16)
However, this is not done in the analyses discussed in this report. Instead constant
values of the transformation factors are used trough the analyses giving no energy
loss.
8.1.2 	Constant transformation factors
Norris (1959) also states that, since the difference between the transformation factors
in case of linear elastic and ideal plastic material is not great it is often permissible to
use an average value of the transformation factors throughout the elastoplastic
dynamic analysis.
This can be assumed to be valid also for trilinear material where the transformation
factors thus are calculated as shown in Equation (8.1). However, it can be discussed if
this is the best value to use in the analyses. The energy required to get motions of the
system depends, among other quantities, on the mass. More energy is required to get
motion of a heavy body than for a less heavy body. Since the equivalent mass
becomes smaller when an average value of the transformation factors is used less
energy will be consumed when starting the motion. This is here assumed to influence
the results so much that it motivates to use the transformation factor for linear elastic
material in the analyses. In the analyses made in Chapter 7 the applied transient load
is active only in the elastic range which motivates the choice even more.

-- 87 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	72
8.2 	Discussion about FE models used in analyses
In Chapter 7 the time-displacement curve calculated by use of the simplified method
of transforming beams into SDOF systems is compared with results from finite
element analyses. This is made in order to verify the SDOF method. Even though
there is not full agreement between the results the SDOF method is assumed to be
results that are accurate enough. In these FE analyses the beams are modelled so that
yielding will only occur in the points where the plastic hinges are assumed to form.
However, in the reality, the zones with yielding are larger than just a point why this
way of modelling the beams can be questioned.
If the simply supported beam subjected to a concentrated load, case(1.1), are modelled
in the same way as in Section 7.1.2 but this time all elements have trilinear material
behaviour the maximum midpoint displacement are almost twice the value achieved
with the FE model used in the FE analyses in Chapter 7, see Figure 8.3.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
SDOF 	FEM, as modelled in Chapter 7 	FEM, all elements have trilinear material
Figure 8.3 	Time-displacement relation for case(1.1) from FE analyses where two
different types of FE models are and the time-displacement curve from
SDOF analyses.
The increased value of the maximum midpoint deflection can be explained by the fact
that also elements around the midelement will reach the plastic range and will
therefore achieve larger deformations. This is hence not a problem in case of linear
elastic material or if the plastic range is not reached in case of trilinear material. The
comparisons made in Chapter 7, when having plastic effects, can therefore be said to
verify that the method of transforming deformable bodies into SDOF systems is rather
well corresponding to the idealized reality rather than the “real” reality. This means
that rather the assumptions made for plastic effects made in the SDOF analyses than
the method it self shall be questioned.
This effect does not appear in case of uniformly distributed loads even though the
plastic range is reached.

-- 88 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	73
9 	Pressure and impulse load acting on SDOF system
In this chapter the concepts of pressure and impulse load are shown and discussed. Let
the loads act on a SDOF system, as shown in Figure 9.1, where damping is neglected.
The SDOF system is assumed to be in equilibrium position (no movement) before the
loading starts.
u
P
M 	R
Figure 9.1 	SDOF system with mass M , load P and internal force R .
In the case of pressure load the load will reach the maximum value instantaneously
and keep this value for unlimited time. The impulse load increases and decreases
instantaneously and the duration of time the load is applied is infinitely small. The
small duration of the load time is compensated by a very high value of the load.
Figure 9.2 illustrates the principals of the two extreme cases.
)	(t	P
t
c	P
)	(t	P
t
Figure 9.2 	Characteristic pressure and impulse load respectively.
9.1 	Pressure load
If a pressure load is acting on the system in Figure 9.1 the mass will move in the same
direction as the load if the load is larger than the internal force. The system will
accelerate as long as the value of the load is higher than the value of the internal force.
Once the internal force equals the load the acceleration will stop and the system will
achieve the maximum value of velocity. When the value of the internal force is higher

-- 89 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	74
than the value of the load the retardation of the system starts. The maximum
displacement is reached as the work performed by the external load equals the work
carried out by the internal force, and the velocity then becomes zero. This course of
events is shown in Figure 9.3.
R	P,
Acceleration
of the system
u
max	u
R	Pc = 	Internal work
External work
Retardation of
system
c	P	P =
R
Figure 9.3 	Internal and external work for SDOF system subjected to pressure load.
The expressions for external and internal work are used when deriving the maximum
value of the characteristic pressure load, Pc, that the system can stand for an allowed
maximum displacement umax . The maximum external and internal works are shown
graphically as the areas in Figure 9.3 and the expressions for these areas are:
∫
=
=
=	Π
max
0
)	(
u	u
u
ernal	int 	du	u	R 	(9.1)
max	, 	u	Pc	P	external 	=	Π 	(9.2)
As the maximum displacement is reached, and the velocity becomes zero, the internal
work equals the external work, meaning that Equation (9.1) equals (9.2). Using this
relation and rearranging the terms the expression for the maximum load that the
system can stand for a given value of the allowed maximum displacement is:
max
0
max
)	(
u
du	u	R
P
u	u
u
c
∫
=
=
= (9.3)
Hence, if a maximum displacement, umax , is allowed a maximum value of the pressure
load according to Equation (9.3) is allowed.

-- 90 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	75
9.2 	Impulse load
For a characteristic impulse load, I c, the system, with a mass M, obtains an
instantaneous and maximum velocity. The expression of the velocity can be derived
by using the second law of Newton that normally is expressed as:
a	M	P 	⋅	= 	(9.4)
where 	P 	external load 	[N]
M 	mass 	[kg]
a 	acceleration 	[m/s2 ]
The acceleration can then be expressed (by rearranging the terms in Equation (9.4))
as:
M
P
a = 	(9.5)
By definition the acceleration is the first derivate of the velocity with respect to time
and can be written as:
( 	)	v
dt
dv
a 	&	=	= 	(9.6)
Using Equations (9.5) and (9.6) gives:
∫	=	⇒	=
t
dt
M
t	P
v
M
P
dt
dv
0
)	( (9.7)
The mass is constant and the velocity can thus be expressed as:
∫	=
t
dt	t	P
M
v
0
)	(
1 (9.8)
The impulse is represented by the area under the load curve as shown in Figure 9.4
and is by definition:
∫	=
t
c 	dt	t	P	I
0
)	( 	(9.9)

-- 91 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	76
)	(t	P
t
∫	=
t
c 	dt	t	P	I
0
)	(
Figure 9.4 	Characteristic impulse.
Since the load duration of a characteristic load is infinity short the instantaneous
velocity can be expressed by means of Equations (9.8) and (9.9).
M
I
v c
= 	(9.10)
The characteristic impulse load is an idealized load not represented in the reality even
though general impulse loads can resemble it. For these general impulse loads, where
the load duration is not infinity short, the instantaneous velocity and hence the
acceleration will depend also on the load-time relation.
After removal of the load, due to the internal resistance, the velocity decreases. When
the velocity, and consequently the kinetic energy, becomes zero the maximum
displacement, and consequently the maximum internal work, is reached. Initially,
when the displacement of the system is zero and thus the potential energy is zero, the
external work has a maximum value. So, all kinetic energy becomes potential energy
when the maximum displacement is reached. The expressions for the maximum
internal and external work are:
∫
=
=
=	Π
max
0
)	(
u	u
u
ernal	int 	du	u	R 	(9.11)
M
I	M
I
M
Mv 	c
c
I	external 2	2	2
2
2
2
, 	=






=	=	Π (9.12)
For the maximum displacement Equation (9.11) equals Equation (9.12). Rearranging
the terms gives the expression for the maximum value of the impulse load that the
system can carry.
∫
=
=
⋅	=
max
0
)	(	2
u	u
u
c 	M	du	u	R	I 	(9.13)
So, if a maximum displacement, umax , is allowed a maximum value of the impulse
load according to Equation (9.13) is allowed.

-- 92 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	77
9.3 	Determination of capacity for beams transformed to
SDOF systems
When 	determining 	the 	capacity 	for 	a 	beam 	transformed 	to 	a 	SDOF 	system
Equations (9.3) and (9.13) are used but with equivalent values as described in
Section 6.1. Equations (9.3) and (9.13) expressed with equivalent internal force Re,
equivalent mass M e, equivalent pressure load Pce and equivalent impulse load I ce
become:
max
0
max
)	(
u
du	u	R
P
u	u
u
e
ce
∫
=
=
= (9.14)
∫
=
=
⋅	=
max
0
)	(	2
u	u
u
e	e	ce 	M	du	u	R	I 	(9.15)
where
c	P	ce 	P	P	
κ	= 	(9.16)
c	P	ce 	I	I	
κ	= 	(9.17)
R	R 	K	e	
κ	= 	(9.18)
M	M 	M	e	
κ	= 	(9.19)
and M is the total mass of the beam.
Equations (9.16) to (9.19) inserted in Equations (9.14) and (9.15) gives:
max
0
max
)	(
u
du	u	R
P
u	u
u
KP	c
∫
=
=
=
κ (9.20)
∫
=
=
⋅	=
max
0
)	(	2
u	u
u
MP	KP	c 	M	du	u	R	I	
κ
	κ 	(9.21)
where as before 	P	K	KP	
κ	
κ	
κ 	= 	and 	P	M	MP	
κ	
κ	
κ 	= 	.

-- 93 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	78
9.3.1 	Linear elastic material
For a linear elastic material the internal force, R, varies linearly with the displacement,
u, as shown in Figure 9.5 and is expressed as:
max	Ku	R
Ku	R
m =
= (9.22)
u
K
R
m	R
max	u
Figure 9.5 	Internal force for linear elastic material.
The integral in Equations (9.20) and (9.21) is here represented by the shaded area in
Figure 9.5:
2
)	(
2
max
0
max Ku
du	u	R
u	u
u
=	∫
=
=
(9.23)
By use of Equations (9.20), (9.21) and (9.23) the expressions for the pressure load and
impulse load that the system can endure for a certain value of the allowed maximum
displacement can be written as:
2	2	2
max
max
2
max 	m
KP	KP	KP	c
R	Ku
u
Ku
P	
κ
	κ
	κ 	=	=	= 	(9.24)
ωκ
	κ
	κ
	κ
	κ
	κ m
MP	KP	m	MP	KP	MP	KP	c
R
R
K
M
M
Ku
I 	=	=	= 2
2
max
2
2 	(9.25)
where 	M	K	=
	ω 	is the circular frequency of the SDOF system.
In Figure 9.5 it can be seen that in case of linear elastic material the maximum
displacement, umax , can be expressed as:
K
R
u m
=	max 	(9.26)

-- 94 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	79
Rearranging the terms in Equations (9.24) and (9.25) and using Equation (9.26) gives
the expressions for the maximum displacement, umax , with respect to the pressure load
and impulse load respectively.
K
P
K
P	R
P	u
KP
c	c	m
c
κ
2	)	(
)	(	max 	=	= 	(9.27)
ω
	κ
	κ
κ
	κ
M
I
K
M	K	I
K
I	R
I	u c
MP	KP
MP	KP	c	c	m
c
1	)	(
)	(	max 	=	=	= 	(9.28)
9.3.2 	Ideal plastic material
For an ideal plastic material the internal force, R, is constantly equal to the maximum
internal force, Rm, when the displacement, u, is nonzero, as shown in Figure 9.6.
u
R
m	R
max	u
Figure 9.6 	Internal force for ideal plastic material.
The integral in Equations (9.20) and (9.21) is here represented by the shaded area in
Figure 9.6:
max
0
max
)	( 	u	R	du	u	R 	m
u	u
u
=	∫
=
=
(9.29)
By use of Equations (9.20), (9.21) and (9.29) the expressions for the pressure load and
impulse load that the system can stand for a certain value of the allowed maximum
displacement can be written as:
m	KP
m
KP	c 	R
u
u	R
P	
κ
	κ 	=	=
max
max (9.30)
M	u	R	M	u	R	I 	m	MP	KP	MP	m	KP	c 	max	max 	2	2	
κ
	κ
	κ
	κ 	=	= 	(9.31)
In case of ideal plastic material the maximum displacement, umax , cannot be expressed
with respect to the pressure load as in case of linear elastic material. However, by

-- 95 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	80
using Equation (9.31) the maximum displacement, umax , can be expressed with respect
to the impulse load.
M	R
I
I	u
m	MP	KP
c
c 2
)	(
2
max
κ
	κ
= 	(9.32)
9.3.3 	Summary of capacity for beams transformed to SDOF systems
The capacity of an equivalent SDOF system subjected to pressure and impulse load
are determined for linear elastic material and ideal plastic material respectively. For a
general shape of the deflection the beam equations are shown in Table 9.1.
Table 9.1 	General beam equations.
I. 	Linear elastic material
2
m
KP	c
R
P	
κ	= 	(a)
M	K
R
I m
MP	KP	c
/
κ
	κ	= 	(b)
K
P
P	u c
KP
c
2	1
)	(	max
κ
= 	(c)
KM
I
I	u c
MP	KP
c
κ
	κ
1
)	(	max 	= 	(d)
II. 	Ideal plastic material
m	KP	c 	R	P	
κ	= 	(e)
M	u	R	I 	m	MP	KP	c 	max	2	
κ
	κ	= 	(f)
M	R
I
I	u
m
c
MP	KP
c 2
1
)	(
2
max
κ
	κ
= 	(g)
In Appendix G the expressions in Table 9.1 are developed for a simply supported
beam as well as for a beam fixed in both ends subjected to a concentrated and
uniformly distributed load.

-- 96 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	81
9.4 	Capacity for SDOF systems
The equations in Table 9.1 can be written in a general form for a SDOF system by
letting the equivalent values of the quantities be equal to the actual values.
M	M e = 	(9.33)
R	Re = 	(9.34)
P	Pe = 	(9.35)
Meaning that the transformation factors κ in Table 9.1 shall be 1.0 (compare to
Equations (9.16) to (9.19)). The general equations for SDOF systems are shown in
Table 9.2.
Table 9.2 	General equations for SDOF system
I. 	Linear elastic material
2	2
Ku	R
P m
c 	=	= 	(a)
M	K
R
I m
c
/
= 	(b)
K
P
P	u c
c
2
)	(	max 	= 	(c)
KM
I
I	u c
c 	=	)	(	max 	(d)
II. 	Ideal plastic material
m	c 	R	P = 	(e)
M	u	R	I 	m	c 	max	2	= 	(f)
M	R
I
I	u
m
c
c 2
)	(
2
max 	= 	(g)
The relation between the pressure load Pc and the impulse load I c can be expressed for
the different materials. In case of linear elastic material the fact that the maximum
displacement umax shall be equal for the two loads can be used.

-- 97 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	82
)	(	)	( 	max	max 	c	c 	I	u	P	u 	= 	(9.36)
Using (c) and (d) in Table 9.2 and using the circular frequency of vibration ω the
relation between Pc and I c in the linear elastic case can be expressed.
mass	the	is	and	stiffness	the	is	where 	M	K
M
K
=
	ω 	(9.37)
ω
ω 	2
2 c	c	c	c 	P	I	I	P 	=	⇔	= 	(9.38)
In case of ideal plastic material the pressure load Pc must be equal to the maximum
value of the internal force Rm if the system shall move. Using Equations (e) and (f) in
Table 9.2 gives the relation between Pc and I c for ideal plastic material.
M	u
I
P	M	u	P	I c
c	c	c
max
2
max 2
2 	=	⇔	= 	(9.39)
where umax = umax (I c).

-- 98 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	83
10 Equivalent static load
In order to simplify the analysis of a structure subjected to an impulse load the load
can be transformed to a static equivalent load. This means a static load chosen in such
a way that it will result in the same maximum displacement as the impulse load.
As discussed in Section 9.2 the total energy, kinetic energy plus potential energy, for
an undamped structure subjected to a dynamic load is constant. If the velocity
(consequently also the kinetic energy) is zero the potential energy, as well as the
displacement, has a maximum value. Even though it takes a while before the
maximum velocity is reached when a dynamic load is applied it can be assumed that
the maximum value of the kinetic energy occurs when the displacement is zero. This
is at least a good approximation for a hard, short impulse loads. Hence, the maximum
value of the kinetic energy equals the maximal value of the potential energy. In case
of a static load there is only potential energy (no kinetic energy).
Due to the condition that the displacement in case of a static load must equal the
maximum displacement for the dynamic load the potential energy in the static case
must equal the maximum potential energy for the dynamic load. Using this statement
together with the statement made above gives:
Potential energy for static case = Maximum kinetic energy for dynamic case 	(10.1)
From this statement the expression of the equivalent static load Pstatic can be defined
with respect to the characteristic impulse load I c.
10.1 SDOF system
An SDOF system subjected to an impulse load will achieve vibrations and the
instantaneous velocity, caused by a characteristic impulse load, derived in Section 9.2,
is for a load, regarded as an impulse load, written as:
M
I
v = 	(10.2)
The maximum value of the kinetic energy is thus:
M
I
M
I	M	Mv
W k 2	2	2
2	2	2
=	





=	= 	(10.3)
By means of the equations above the external work (the work due to the impulse) can
be expressed as the difference in kinetic energy from time to time.
M
I	I
I	external 2
2
1
2
2
,
−
=	Π 	(10.4)

-- 99 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	84
The maximum external work equals the maximum kinetic energy since the system is
at rest before the load is applied, v 1 = 0 and v2 = v = v max, and therefore has no initial
kinetic energy:
{ 	} M
I
I	I
M
I
I	external 2	2
2
2
2
2
, 	=	=	=	=	Π 	(10.5)
The increase of work, 	static
	P	external
	d 	,	
Π 	, of the external static load causing a differential
displacement du, for a system subjected to the static load Pstatic can be expressed as:
du	P	d static
P	external static 	⋅	=	Π 	, 	(10.6)
By integrating Equation (10.6) over the total displacement the total work of the
external static load is achieved.
∫
=
=
=	Π
u	u
u
static
P	external 	du	P	static
0
, 	(10.7)
The expression for the total work of the load will be different for different materials.
10.1.1 Linear elastic material
In case of linear elastic material the static external load, Pstatic, can be expressed by
use of the stiffness, K, and the displacement u from the unloaded equilibrium position.
u	K	P static ⋅	= 	(10.8)
Equations (10.7) and (10.8) give the total work of the external static load as:
2
2
0	0
,
Ku
du	Ku	du	P
u	u
u
u	u
u
static
P	external static 	=	⋅	=	=	Π 	∫	∫
=
=
=
=
(10.9)
The total work of the external static load in Equation (10.9) shall be equal to the work
of motion caused by the impulse load in Equation (10.5).
( 	) M
I
K
P
M
I	Ku static 	2	2	2	2
2	2 =	⇒	= 	(10.10)
The static load equivalent to the impulse load acting on a SDOF system, with linear
elastic behaviour, can now be expressed as:
I	I
M
K
P static
SDOF	
ω	=	= 	(10.11)
where ω is the circular frequency of the SDOF system.

-- 100 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	85
10.1.2 Ideal plastic material
In case of a SDOF system with ideal plastic behaviour subjected to a constant load
Pstatic the displacement will go from 0 	to u and the total external work can be
expressed by use of Equation (10.7).
u	P	du	P static
u	u
u
static
P	external static 	⋅	=	=	Π 	∫
=
=0
, 	(10.12)
The total work of the external static load in Equation (10.12) shall be equal to the
work of motion, caused by the impulse load in Equation (10.5).
M
I
u	P static
2
2
=	⋅ 	(10.13)
The static load equivalent to the impulse load acting on a SDOF system, with ideal
plastic behaviour, can now be expressed as:
u	M
I
P static
SDOF ⋅
= 2
2
(10.14)
10.2 Beams
For beams the method of transforming the beams into SDOF systems shown in
Chapter 6 is used. The expressions for the equivalent static load for beams are derived
in the same manner as for the SDOF system (see Sections 10.1.1 and 10.1.2) but
equivalent values of the mass, M, the internal force, R, and the external load, P, are
used. The equivalent values of the mass, stiffness and external load are noted as M e,
Re and Pe and are in Chapter 6 defined as:
beam	M	e 	M	M	
κ	= 	(10.15)
beam	K	e 	R	R	
κ	= 	(10.16)
beam	P	e 	P	P	
κ	= 	(10.17)
The transformation factors, κ, have different values depending on material and
assumed shape of deformation and are shown in Table 6.1 for linear elastic and ideal
plastic material.
The internal stiffness of the beam, Kbeam, can be expressed as:
∫
=
=
=
L	x
x	s
beam 	dx	t	x	q
t	u
K
0
)	,	(
)	(
1 (10.18)

-- 101 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	86
If the uniformly distributed load q(x,t) is varying in time the distributed impulse, i
[Ns/m], can be expressed as:
∫
=
=
=
2
1
)	,	(
t	t
t	t
dt	t	x	q	i 	(10.19)
The total impulse acting on the beam is:
dx	dt	t	x	q	dx	i	I
L	x
x
t	t
t	t
L	x
x
∫ ∫	∫
=
=
=
=
=
=
=	=
0	0
2
1
)	,	( 	(10.20)
10.2.1 Linear elastic material
In case of linear elastic material the equivalent static load, to a general impulse load,
acting on a SDOF system is determined by inserting Equations (10.15) to (10.17) and
(10.20) into Equation (10.11).
dx	dt	t	x	q
M
K
I
M
K
I
M
K
P
L	x
x
t	t
t	t
P
beam	M
beam	K
P
beam	M
beam	K
e
e
e	static
SDOF 	∫ ∫
=
=
=
=
=	=	=
0
2
1
)	,	(	
κ
κ
κ
κ
κ
κ (10.21
)
where transformation factors for linear elastic behaviour shall be used.
The beam capacity can also be analysed by using an, to the general impulse load,
equivalent static load directly on the beam. If this equivalent static load is a
concentrated load acting in the system point the expression is:
dx	dt	t	x	q
M
K	P
P
L	x
x
t	t
t	t	beam	M
beam	K
P
static
SDOF	static
beam 	∫ ∫
=
=
=
=
=	=
0
2
1
)	,	(
κ
κ
κ (10.22)
If the equivalent static load is a uniformly distributed load acting on the beam the
expression is:
dx	dt	t	x	q
M
K
L	L
P
q
L	x
x
t	t
t	t	beam	M
beam	K
P
static
beam	static
beam 	∫ ∫
=
=
=
=
=	=
0
2
1
)	,	(
1
κ
κ
κ (10.23)
If the impulse load is a concentrated load the impulse can be written as:
∫
=
=
=
2
1
)	(
t	t
t	t
dt	t	P	I 	(10.24)
and Equations (10.22) can be expressed as:

-- 102 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	87
∫
=
=
=	=
2
1
)	(
t	t
t	t	beam	M
beam	K
P
static
SDOF	static
beam 	dt	t	P
M
K	P
P
κ
κ
κ (10.25)
If the impulse load is a uniformly distributed load the impulse can be written as:
∫
=
=
=
2
1
)	(
t	t
t	t
dt	t	q	L	I 	(10.26)
and Equations (10.23) can be expressed as:
∫
=
=
=
2
1
)	(
t	t
t	t	beam	M
beam	K	static
beam 	dt	t	q
M
K
q
κ
κ (10.27)
10.2.2 Ideal plastic material
In case of ideal plastic material the equivalent static load, to a general impulse load,
acting on a SDOF system is determined by inserting Equations (10.15), (10.17) and
(10.20) into Equation (10.14).
2
0
2 	2
1
)	,	(
2
1
2 	







⋅
=
⋅
= 	∫ ∫
=
=
=
=
dx	dt	t	x	q
u	M	u	M
I
P
L	x
x
t	t
t	t
P
max	M	max	e
e	static
SDOF	
κ
κ (10.28)
where transformation factors for ideal plastic behaviour shall be used.
The beam capacity can also be analysed by using an, to the general impulse load,
equivalent static load directly on the beam. If this equivalent static load is a
concentrated load acting in the system point the expression is:
2
0
2
1
)	,	(
2 	







⋅
=	= 	∫ ∫
=
=
=
=
dx	dt	t	x	q
u	M
P
P
L	x
x
t	t
t	t	max	M
P
P
static
SDOF	static
beam
κ
κ
κ (10.29)
If the equivalent static load is a uniformly distributed load acting on the beam the
expression is:
2
0
2
1
)	,	(
2
1








⋅
=	= 	∫ ∫
=
=
=
=
dx	dt	t	x	q
u	M	L	L
P
q
L	x
x
t	t
t	t	max	M
P
P
static
beam	static
beam
κ
κ
κ (10.30)
If the impulse load is a concentrated load the impulse can be written as:
∫
=
=
=
2
1
)	(
t	t
t	t
dt	t	P	I 	(10.31)

-- 103 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	88
and Equation (10.30) can be expressed as:
2
2
1
)	(
2 	







⋅
= 	∫
=
=
t	t
t	t	max	M
P	static
beam 	dt	t	P
u	M
P
κ
κ (10.32)
If the impulse load is a uniformly distributed load the impulse can be written as:
∫
=
=
=
2
1
)	(
t	t
t	t
dt	t	q	L	I 	(10.33)
and Equation (10.31) can be expressed as:
2
2
1
)	(
2 	







⋅
⋅
= 	∫
=
=
t	t
t	t	max	M
P	static
beam 	dt	t	q
u	M
L
q
κ
κ (10.34)

-- 104 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	89
11 Damage curves
In Section 6.2.3 the relation between deformation and load are shown for the extreme
load duration cases that is obtained when the system is subjected to a characteristic
pressure and impulse load, respectively. In order to calculate this relation for a general
load, as schematically shown in Figure 11.1 so called damage curves can be used.
)	(t	P
t
1	P
1t
I
Figure 11.1 	General load-time relation.
Damage curves are valid for an SDOF system or an equivalent SDOF system. In this
chapter the notations of the quantities are written in a general form. If it is an
equivalent SDOF system the following equations are valid:
e	P	P = 	(11.1)
e	R	R = 	(11.2)
e	M	M = 	(11.3)
Where the index e indicates that it is the equivalent value of the quantity.
11.1 Calculation equations
The differential equation for an SDOF system, when damping is neglected, is:
)	(t	P	R	u	M 	=	+	&& 	(11.4)
and can for a general case be solved by use of for example the central difference
method described in Section 5.2.
Using the relative simplicity to analyse structures subjected to pressure load, Pc, and
impulse load, I c, the results from the general load case will be related to these results.
So, if a structure can endure the extreme values Pc and I c obtaining maximum
deformation umax , the structure also will endure every general load (see Figure 11.1),

-- 105 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	90
resulting in a displacement less or equal to umax . This discussion can be concluded in
the following two equations, where fp and f I indicates functions and f p ≠ f I.






=	⇔





=
c
I
c	c
P
c 	I
I
f
P
P
P
P
f
I
I 	1	1 (11.5)
The relation between I and Ic is called the impulse load factor and is written as:
c
I I
I
=
	γ 	(11.6)
The relation between P1 and Pc is called the pressure load factor and is written as:
c
P P
P1
=
	γ 	(11.7)
The strategy to calculate the impulse load factor and the pressure load factor are
further discussed in Sections 11.1.1 and 11.1.2.
Calculations are here made for three different types of transient loads as shown in
Figure 11.2. The expression for the loads are:
( 	)n
t	t	P	t	P 	1	1 1	)	( 	−	= 	(11.8)
where n is given in Figure 11.2.
)	(t	P
t
1P
1t
I
)	(t	P
t
1P
1t
)	(t	P
t
1P
1t
I
I
0	=	n 	1	=	n 	2	=	n
a) 	b) 	c)
Figure 11.2 	Transient 	loads; 	a) 	rectangular 	load 	b) 	triangular 	load 	and 	c)
quadratic decreasing load.
11.1.1 Linear elastic material
In case of linear elastic material the internal resistance is proportional to the
displacement, R=Ku and Equation (11.4) can be written as:
)	(t	P	Ku	u	M 	=	+	&& 	(11.9)

-- 106 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	91
11.1.1.1 	P	
γ 	known
When the pressure load factor γP and either Pc or P1 are known the value of the
corresponding Pc or P 1 can be calculated by use of Equation (11.7). I c can be
calculated with Equation (9.38).
ω
2
c	c 	P	I 	= 	(11.10)
The time t 1 for the general load can be calculated by solving Equation (11.9) with the
central difference method (see Section 5.2) in an iterative process where the
maximum displacement caused by the general load shall equal the maximum
displacement due to the pressure load Pc, see Table 9.2:
K
P
P	u c
c
2
)	(	max 	= 	(11.11)
When the time t 1 is calculated the impulse I is calculated as:
∫
=
=
=
1
0
)	(
t	t
t
dt	t	P	I 	(11.12)
For the rectangular load in Figure 11.2.a the impulse I is:
1	1
0
1
0
0
1	1
1	1
)	1	( 	t	P	dt	P	dt	t	t	P	I
t	t
t
t	t
t
⋅	=	=	+	= 	∫	∫
=
=
=
=
(11.13)
The triangular load in Figure 11.2.b results in the impulse I:
2
)	1	(	)	1	( 1	1
0
1	1
0
1
1	1
1	1 t	P
dt	t	t	P	dt	t	t	P	I
t	t
t
t	t
t
⋅
=	+	=	+	= 	∫	∫
=
=
=
=
(11.14)
For the quadratic decreasing load in Figure 11.2.c the impulse I is:
3
)	1	( 1	1
0
2
1	1
1 t	P
dt	t	t	P	I
t	t
t
⋅
=	+	= ∫
=
=
(11.15)
By using Equation (11.6) the impulse load factor γI can be calculated.
11.1.1.2 	I	
γ 	known
When the impulse load factor γI is known and either I c or I1 are known the value of the
corresponding I c or I 1 can be calculated by use of Equation (11.6). Pc can be
calculated with Equation (9.38).

-- 107 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	92
2
ω
c	c 	I	P = 	(11.16)
The time t 1 for the general load can be calculated by solving Equation (11.9) with the
central difference method (see Section 5.2) in an iterative process where the
maximum displacement caused by the general load shall equal the maximum
displacement due to the impulse load I c, see Table 9.2:
KM
I
I	u c
c 	=	)	(	max 	(11.17)
The maximum value of the general load P1 is not known in the iterative process but
the relation between P1 and the impulse is known for the different load cases (see
Equation (11.12)). For the rectangular load in Figure 11.2.a the maximum value P1 of
the transient load is, see Equation (11.13):
1
1 t
I
P = 	(11.18)
The maximum value of the transient load in Figure 11.2.b is, see Equation (11.14):
1
1
2
t
I
P = 	(11.19)
For the quadratic decreasing load in Figure 11.2.c the maximum value of the load is,
see Equation (11.15):
1
1
3
t
I
P = 	(11.20)
When the time t 1 and the corresponding value of P1 are known Equation (11.7) is used
to calculate the impulse load factor γP.
11.1.2 Ideal plastic material
In case of ideal plastic material the internal force has a constant value, R=Rm if
P1 ≥ Rm and if u ≠ 0 and Equation (11.4) can be written as:
)	(t	P	R	u	M 	m =	+	&& 	(11.21)
If P1 < Rm there will be no motion (u = 0 for all times) since Equation (11.4) is then:
0	=	u	M && 	(11.22)
The characteristic value of the pressure load Pc equals the maximum value of the
internal force Rm in case of ideal plastic material.

-- 108 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	93
11.1.2.1 	P	
γ 	known
The relation between γP and γI is definite determined so when γP and I c is known the
maximum displacement umax can be calculated by use of Equation (g) in Table 9.2:
M	R
I
I	u
m
c
c 2
)	(
2
max 	= 	(11.23)
Observe that umax(Pc ) is undefined.
Solve, 	by 	means 	of 	an 	iterative 	process, 	the 	load 	duration 	time 	t 1 	with
Equations (11.18) to (11.20) so umax(P1 ,t 1 ) equals umax(I c ). Now the value of I is
calculated by inserting t 1 into Equations (11.18) to (11.20). By using Equation (11.6)
the impulse load factor γI can be calculated.
11.1.2.2 	I	
γ 	known
When the impulse load factor γI is known and either I c or I1 are known the value of the
corresponding I c or I 1 can be calculated by use of Equation (11.6). The maximum
displacement umax can be calculated by use of Equation (g) in Table 9.2:
M	R
I
I	u
m
c
c 2
)	(
2
max 	= 	(11.24)
The time t 1 for the general load can be calculated by solving Equation (11.9) with the
central difference method (see Section 5.2) in an iterative process where the
maximum displacement caused by the general load shall equal the maximum
displacement due to the impulse load I c, see Equation (11.16) and Table 9.2:
The maximum value of the general load P1 is not known in the iterative process but
the relation between P1 and the impulse is known for the different load cases (see
Equation (11.12)). The maximum value P1 of the loads, shown in Figure 11.2, are
calculated in the same way as in case of linear elastic material, see Equations (11.18)
to (11.20).
When the time t 1 and the corresponding value of P1 are known Equation (11.7) is used
to calculate the impulse load factor γP.
11.2 Results
Table 11.1 and Table 11.2 show the relation between the pressure factor and the
impulse factor for the three transient load cases shown in Figure 11.2 when having
linear elastic and ideal plastic behaviour, respectively. In Appendix H more complete

-- 109 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	94
tables of damage are shown, see Table H.1 and Table H.2, the values in Table 11.1
and Table 11.2 are extracts from these.
The 	tables 	says 	that 	if 	a 	certain 	allowed 	displacement 	u 	is 	wanted 	and 	the
characteristic pressure load Pc and impulse load I c result in this displacement the
maximum allowed value of the impulse I can be estimated if the maximum value of
the load P1 is known and vice versa. For example:
• 	If P1 is allowed to be 2 times larger than Pc (γP = 2) the maximum, allowed
value of the impulse is I = γI·I c = 1.166·I c in case of linear elastic and
triangularly decreasing load (n=1).
• 	In 	the 	same 	way; 	the 	maximum 	value 	of 	P1 	is 	allowed 	to 	be
P1 = γP·Pc = 1.269·Pc if the impulse I is allowed to be 5 times larger than I c
(γI = 5) in case of ideal plastic material and triangularly decreasing load (n=1).
Table 11.1 	Relation between 	P	
γ 	and 	I	
γ 	for linear elastic and ideal plastic
material respectively when 	P	
γ 	is known.
c
I I
I
=
	γ
Linear elastic behaviour 	Ideal plastic behaviour
c
P P
P1
=
	γ
n =0 	n =1 	n =2 	n =0 	n =1 	n =2
1.01 	1.444 	41.13 	65.15 	10.05 	441.8 	587.5
1.05 	1.324 	8.491 	11.17 	4.583 	42.87 	56.25
1.1 	1.255 	4.570 	5.931 	3.317 	16.57 	21.58
1.5 	1.095 	1.490 	1.776 	1.732 	2.756 	3.330
2 	1.047 	1.166 	1.293 	1.414 	1.732 	1.957
3 	1.020 	1.057 	1.094 	1.225 	1.342 	1.414
5 	1.007 	1.019 	1.029 	1.118 	1.168 	1.196
10 	1.002 	1.005 	1.007 	1.054 	1.074 	1.085
100 	1.000 	1.000 	1.000 	1.005 	1.001 	1.007

-- 110 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	95
Table 11.2 	Relation between 	P	
γ 	and 	I	
γ 	for linear elastic and ideal plastic
material respectively when 	I	
γ 	is known.
c
P P
P1
=
	γ
Linear elastic behaviour 	Ideal plastic behaviour
c
I I
I
=
	γ
n =0 	n =1 	n =2 	n =0 	n =1 	n =2
1.01 	4.144 	6.813 	8.525 	50.72 	67.67 	76.13
1.05 	1.959 	3.177 	3.911 	10.76 	14.34 	16.14
1.1 	1.469 	2.389 	2.924 	5.763 	7.688 	8.645
1.3 	1.066 	1.691 	1.984 	2.452 	3.269 	3.678
1.5 	1.003 	1.493 	1.694 	1.800 	2.400 	2.700
2 	1.000 	1.296 	1.409 	1.333 	1.775 	1.966
3 	1.000 	1.167 	1.228 	1.125 	1.453 	1.562
5 	1.000 	1.090 	1.122 	1.042 	1.269 	1.367
10 	1.000 	1.042 	1.056 	1.010 	1.148 	1.182
100 	1.000 	1.005 	1.013 	1.001 	1.028 	1.034
Figure 11.3 and Figure 11.4 show the tables of damage, Table 11.1 and Table 11.2,
graphically for the transient loads in Figure 11.2 for linear elastic and ideal plastic
material respectively. The diagrams are called damage curves.

-- 111 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	96
1
10
1 	10
I/Ic
P 1/P c n=0
n=1
n=2
n=0	P
t
n=2
P
t
n=1
P
t
Figure 11.3 	Damage curves for rectangular load pulse (n=0), triangular load pulse
( n =1) and quadratic decreasing load pulse (n=2) in case of linear
elastic material
1
10
1 	10
I/Ic
P1 /P c n=0
n=1
n=2
n=0	P
t
n=2
P
t
n=1
P
t
Figure 11.4 	Damage curves for rectangular load pulse ( n =0), triangular load pulse
( n =1) and quadratic decreasing load pulse ( n =2) in case of ideal
plastic behaviour

-- 112 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	97
11.3 Practical use of tables of damage
11.3.1 Solution process
In practise, different inputs are known when using the tables of damage. Here some
different cases are discussed.
The approach is the same for linear elastic material and ideal plastic material. The
relation between γP and γI (and thus P1/Pc and I/Ic) in case of linear elastic material
and ideal plastic material are shown in Table H.1 and Table H.2 in Appendix H,
extracts from these tables are shown in Table 11.1 and Table 11.2.
Known: 	1	P , 	c	P and thus also 	c	I
Searched: allowed load duration time 1	t
a. 	The pressure load factor 	P	
γ 	is calculated, 	c	P 	P	P1	=
	γ
b. 	The corresponding value of 	I	
γ 	are determined by means of tables of
damage.
c. 	I are determined from 	I	c	I	I	
γ	⋅	=
d. 	The allowed load duration time 1	t 	is calculated by use of 	∫=
=
1
0
)	(
t
t
dt	t	P	I
Known: 	c	I , I and thus also 	c	P
Searched: allowed load duration time 1	t
a. 	The pressure load factor 	I	
γ 	is calculated, 	c	I 	I	I	=
	γ
b. 	The corresponding value of 	P	
γ 	are determined by means of tables of
damage.
c. 	1	P are determined from 	P	c	P	P	
γ	⋅	=	1
d. 	The allowed load duration time 1	t 	is calculated by use of 	∫=
=
1
0
)	(
t
t
dt	t	P	I
Known: 	1	P , 1	t , 	I	
γ 	and	
ω	2	=	c	c P	I
Searched: 	c	P and 	c	I 	(see also example below)
a. 	Calculate the impulse, 	∫=
=
1
0
)	(
t
t
dt	t	P	I

-- 113 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	98
b. 	Determine a value of
1	P
P
I
I 	c
c	P
I ⋅	=
γ
γ where the relation between I 	and
1	P are found in point a. above
c. 	Find in the tables of damage (Appendix H) a combination of 	I	
γ 	and
P	
γ 	fulfilling
P
I
γ
γ in point b. above
d. 	Calculate
I
c
I
I
γ
= 	and
P
c
P
P
γ
1
= 	(in order to check the results it can be
controlled if	
ω	2	=	c	c 	P	I 	and if 	)	(	)	( 	max	max 	c	c 	P	u	I	u 	= 	)
11.3.2 Example
Assume linear elastic material and that P1, t1 and Pc/Ic = 2/ω are known and search for
Pc and I c. The beam for which the characteristic pressure and impulse load shall be
calculated is the reinforced fixed concrete beam subjected to a uniformly distributed
load used in Chapter 7, with density ρ=2400 kg/m3 . This beam is also analysed in
Appendix D, Section D.2.4, where the values of the stiffness K is calculated. Since
linear elastic material is assumed these transformation factors are used, see Table 6.1.
The load and load duration t 1 represents an, to the equivalent static load q=50 kN/m2
from the Swedish shelter regulations, Räddningsverket (2003), approximated transient
load.
12500	1 =	P 	kN, 	12	.	1	1 =	t 	ms, 	2100	2400	5	.	2	35	.	0	0	.	1 	=	⋅	⋅	⋅	=	⋅	⋅	⋅	=
	ρ	L	h	b	M 	kg,
1456
2100	762	.	0
10	3392	0	.	1 6
=
⋅
⋅	⋅
=	= M
K
el
MP
el
KP
κ
κ
ω 	rad/s
The approximated transient load is assumed to be triangular in time (as shown in
Figure 11.2.b).





 −	=
1
1 1	)	( t
t
P	t	P
a. 	The impulse I is calculated:
7000
2
12	.	1	12500
2
1	)	( 1	1
0 	1
1
0
1	1
=
⋅
=
⋅
=




 −	=	= 	∫	∫ t	P
dt
t
t
P	dt	t	P	I
t	t
Ns
b. 	The relation
P
I
γ
γ is:

-- 114 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	99
408	.	0
2	10	12500
1456	7000
2 3
1	1
=
⋅	⋅
⋅
=	⋅	=	⋅	=
ω
γ
γ
P
I
I
P
P
I
c
c
P
I
c. 	Search in the tables of damage for linear elastic material (see Appendix H) for
a combination of 	I	
γ 	and 	P	
γ 	fulfilling 	408	.	0	=
P
I
γ
γ .
In Table H.1 in Appendix H it can be seen that 	I	
γ 	is in between 2.6 and 2.8
since 	4154	.	0	=
P
I
γ
γ when 	6	.	2	=	P	
γ 	and 	3812	.	0	=
P
I
γ
γ when 	8	.	2	=	P	
γ 	. Linear
variation is assumed in between these values (as shown in Figure 11.5) and the
values of 	I	
γ 	and 	P	
γ 	can be calculated as:
( 	) 	( 	) 	08	.	1	07	.	1	07	.	1	08	.	1
381	.	0	415	.	0
381	.	0	408	.	0 =	+	−
−
−
=	+	−






−











−





= 	I,min	I,min	I,max
min	P
I
max	P
I
min	P
I
known	P
I
I	
γ
	γ
	γ
γ
γ
γ
γ
γ
γ
γ
γ
γ
64	.	2
408	.	0
08	.	1
408	.	0
408	.	0 	=	=	=	⇒	= I
P
P
I	
γ
γ
γ
γ
d. 	The values of 	c	P and 	c	I 	can now be calculated:
4735
64	.	2
12500	1 =	=	=
P
c
P
P
γ kN
6500
08	.	1
7000 =	=	=
I
c
I
I
γ Ns
Checks:
ω
ω
2
10	37	.	1
1456
2	2
10	37	.	1
10	4735
6500
3
3
3
=	⇒






⋅	=	=
⋅	=
⋅
=
−
−
c
c	c
c
P
I	P
I
)	(	)	(
mm	79	.	2
1600	1456
10	4735	2	2	2
)	(
mm	79	.	2
1600	1456
6500
)	(
2
3
2
c	max	c	max
e
c
e
c
c	max
e
c
e	e
c
c	max
P	u	I	u
M
P
K
P
P	u
M
I
M	K
I
I	u
=	⇒







=
⋅
⋅	⋅
=	=	=
=
⋅
=	=	=
ω
ω

-- 115 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	100
Figure 11.5 	Linear variation is assumed between the values in Table H.1 in
Appendix H.
11.4 Practical use of damage curves
11.4.1 Solution process
The damage curves can be used to determine the maximum impulse and pressure
values of a general load corresponding to a certain maximum displacement umax . This
method can be apprehended as old-fashioned compared to other methods, especially
today when computational tools are easily accessible, but it shows principally how
general loads can be interpreted.
The characteristic impulse and pressure loads are calculated by means of umax as
shown 	in 	Section 	9.4 	and 	together 	they 	represent 	the 	characteristic 	point
corresponding to the origin, (γI, γP)=(1,1), in the damage curves above (see Figure
11.3 and Figure 11.4). One way to perform the analysis is shown:
1 	Plot the damage curve of interest on a transparent paper, as shown in Figure
11.6. If the analysis is made on a computer no transparent papers are needed,
instead the following points are performed directly in the computer.
P
I
γ
γ
I	
γ
max	I ,	
γ	I	
γ	min	I ,	
γ
( 	)max	P	I	
γ	
γ
( 	)known	P	I	
γ	
γ
( 	)min	P	I	
γ	
γ
( 	) 	( 	)
( 	) 	( 	) ( 	) 	min	I	min	I	I
min	P	I	max	P	I
min	P	I	known	P	I
I 	,	,	
γ
	γ
	γ
γ
	γ
	γ
	γ
γ
	γ
	γ
	γ
γ 	+	−
−
−
=

-- 116 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	101
Figure 11.6 	Diagram for linear elastic material and n=1, see Figure 11.3.
2 	Plot coordinate axis, in the same scale as for point 1 above, on a new paper.
The impulse load I shall be plotted on the horizontal axis and the maximum
value of the pressure load P1 on the vertical axis. Diagonals shall also be
drawn where I/P1 is constant. The diagonals in Figure 11.7 correspond to
t 1 =(n+1) I/P 1 where the load with n=1 is used, see Figure 11.2.
Figure 11.7 	Diagram for damage curve with same scale as in Figure 11.6 for n=1
(see Figure 11.2.b).
3 	Mark the characteristic point in the diagram where the characteristic point is
the values of I c and Pc give umax . Draw a vertical line marking the value of 	c	I
and a horizontal line marking the value of Pc, see Figure 11.8.
4 	Lay the transparent paper with the damage curve from Figure 11.6 on the
diagram in Figure 11.7 where also the characteristic point (see point 3) is
plotted. The asymptotes in Figure 11.6 shall coincide with the lines plotted in
point 3.
1
10
100
1 	10 	100
I [MN*ms]
P 1 [MN]
t 1=2 ms
t 1=4 ms
t 1=10 ms

-- 117 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	102
5 	The created damage curve is now representing all combinations of P1 and I,
for a certain load-time curve and material, giving the maximum displacement
umax for which I c and Pc have been calculated. The diagonal lines give
information about the time duration t 1.
11.4.2 Example
The same beam as used in the example in Section 11.3.2 is used here but here the
values of P1 and I shall be estimated by use of damage curves. The maximum allowed
displacement 	umax 	corresponds 	to 	umax (Pc) 	= 	umax (I c) 	calculated 	in example 	in
Section 11.3.2. Also here linear elastic material is assumed:
max	u 	=2.79 mm, 	=	= 	M	M el
MP	e	
κ 	0.762·2100=1600 kg, 	=	= M
K
el
MP
el
KP
e
κ
κ
ω 	1456 rad/s,
12	.	1
2
1
1 	=	= P
I
t 	ms
Search for the values of the maximum value of the load P1 and the impulse I resulting
in the maximum allowed displacement umax .
The load is assumed to be triangular in time (as shown in Figure 11.2.b).





 −	=
1
1 1	)	( t
t
P	t	P
The characteristic values of the impulse and pressure load, Ic and Pc, is calculated by
use of Equation c) and d) in Table 9.1:
kN	4732
2
1600	1456	10	79	.	2
2
2	2
)	(
2	3	2
2	max
=
=
⋅	⋅	⋅
=	=	⇔	=	=
−
M	u
P
M
P
K
P
P	u
el
MP	e	max
c	el
MP	e
c
el
KP
c
c
κ
	ω
κ
	ω
	κ
Ns	6500	1600	1456	10	79	.	2
1
)	(
3 =	⋅	⋅	⋅	=	⋅	⋅	=
⇔	=	=
−
M	u	I
M
I
KM
I
I	u
el
MP	e	max	c
el
MP	e
c	c
el
MP
el
KP
c	max
κ
	ω
κ
	ω
	κ
	κ
By following point 1 to 5 above the damage curve of interest is created and the values
of the impulse and maximum pressure load can be determined, see Figure 11.8.
7000	=	I 	Ns 	and 	12500	1 =	P 	kN
If the maximum allowed displacement for a SDOF system umax is 2.79 mm and the
mass and circular frequency is 1600 kg and 1456 rad/s respectively the maximum
value of the pressure load (which is triangular in time) is P1=12500 kN. The
maximum allowed impulse is I=7000 Ns if the time duration of the load t1 is 1.12 ms.

-- 118 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	103
Figure 11.8 	Diagram for damage curve for example 1.
If the duration of the load t 1 instead was 5 ms the values of P1 5850 kN is and I is
14500 Ns, see Figure 11.9.
Figure 11.9 	Diagram for damage curve for example 1, if t 1 = 5 ms.
1
10
100
1 	10 	100
I [MN*ms]
P 1 [MN]
Characteristic point
t1=5 ms
1
10
100
1 	10 	100
I [MN*ms]
P1 [MN]
Characteristic point
t1=1.12 ms

-- 119 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	104
12 Concrete
Principal relations between the load and deflection of a simply supported, reinforced
concrete beam for different loading cases are shown in Figure 12.1 where the loads
are applied by gradual stages.
q	P	M 	,	,
u
q
P
M 	M
u
u
u
First crack appears
Yielding in steel
or concrete
Failure
Figure 12.1 	Principal relations between load and deflection of a simply supported
beam subjected to different loads based on Svensk byggtjänst (1990).
At first the beam is uncracked and the bending stiffness of the beam is high. The
deflection of the beam increases linearly with the load, the beam is in stadium I. When
the load has reached a value that gives stresses in the most tensioned section that is
equal to the flexural strength of the concrete the section will crack. Due to the crack
the change of stiffness is sharp, now the reinforcement in the tensioned zone carries
the tensional forces. For increasing load more and more cross-sections will crack, but
this will not influence the behaviour of the beam very much and the deflections
increases almost linearly with the increasing load, the beam is in stadium II.
Reinforced beams are normally designed to get yielding in the reinforcement before
the ultimate compressive strain is reached. When the reinforcement starts to yield the
beam gets a plastic behaviour and the deflection increases even though the load is
almost constant, the beam is in stadium III. At last the beam can not endure the load
and there will be flexural failure.
An idealization of the load-displacement relation is shown in Figure 12.2 where Pcr is
the load for which the first crack occurs and ucr is the corresponding deflection. Ppl is
the ultimate load and upl is the corresponding deflection. K is the stiffness of the
uncracked beam and K’ is the inclination of the load-displacement curve after the first
crack occurs. In the following analyses of reinforced beams it is assumed that the steel
starts to yield before the concrete and the load for which yielding starts in the steel is
Pspl and uspl is the corresponding deflection. This idealized behaviour of a reinforced
concrete beam will be used in this report and the idealized relation between the load

-- 120 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	105
and deflection can be found by using crack and failure criteria as shown in
Section 12.2.
P
u
K
K′
pl	P
cr	P
cr	P
cr	u 	pl	u
P
u
K
K′
pl	P
cr	P
cr	P
cr	u 	spl	u
spl	P	spl	P
spl	u
Failure
Yielding in steel
First crack occurs
a) 	b)
Figure 12.2 	a) Idealized load-displacement curve used in this report b) idealized
principal load-displacement curve for reinforced concrete beam, based
on Figure 12.1.
12.1 Material behaviour
A structure subjected to a dynamic load behaves different from a structure subjected
to a static load especially when the load is an intensive impulse load with short
duration.
The strain velocity
ε& , defined as the strain per time unit, describes how fast the
material deforms and is defined as:
t	∆
=
ε
ε& 	(12.1)
The faster the load is applied to the structure the higher strain velocity is attained in
the concrete. In Figure 12.3 strain velocities for some different load situations are
shown.
Figure 12.3 	Strain velocity for common load situations. From Räddningsverket
(2004).
10 -8 	10 -7 	10 -6 	10 -5 	10 -4 	10 -3 	10 -2 	10 -1 	10 0 	10 1 	10 2 	10 3
Creep 	Static 	Earthquake 	Hard shock 	Shock wave
Strain velocity [s -1 ]

-- 121 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	106
By experimental tests it has been found that if the strain velocity is higher than 10 s-1
the dynamic magnification factor, defined as the relation between the dynamic and the
static strength, can be more than doubled if the concrete is compressed and magnified
by up to seven if the concrete is tensioned, Räddningsverket (2004). The relation
between the strain velocity and the dynamic magnification factor are shown in Figure
12.4 and Figure 12.5 for compressed and tensioned concrete respectively.
Dynamc magnification factor
10 -8 10-7 10-6 10-5 10-4 10 -3 10-2 10-1 100 101 102 10 3
Strain velocity [s-1 ]
2.5
2.0
0.5
1.5
1.0
Figure 12.4 	Relation between dynamic magnification factor and strain velocity for
compressed 	concrete, 	experimental 	results. 	From 	Räddningsverket
(2004).
Figure 12.5 	Relation between dynamic magnification factor and strain velocity for
tensioned 	concrete, 	experimental 	results. 	From 	Räddningsverket
(2004).
0
1
2
3
4
5
6
7
8
Strain velocity [s-1]
Dynamic magnification factor
10-6 10-5 10-4 10-3 	10-2 10-1 	100 	101 	102 	103

-- 122 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	107
The increased strength for concrete structures subjected to dynamic loads, discussed
above, can partly be explained by the crack way trough the material. When a concrete
specimen is subjected to a static tensional force the cracks will find the most energy
effective way through the concrete. Since the ballast often is stronger than the paste in
concrete the most energy effective way is to go in the paste around the ballast, see
Figure 12.6. In case of dynamic loading there is no time for this and the cracks are
very often forced to go also through the ballast, which gives a higher tensile strength
of the concrete. Even though each individual crack will be more brittle in case of
dynamic loading more cracks will appear and the overall ability to take up energy
may increase somewhat. The increased strength of the concrete can also be explained
by viscose effects.
Figure 12.6 	Principle crack way for static and dynamic load respectively. Based on
Räddningsverket (2004).
A concrete beam subjected to a dynamic load behaves differently from the static load
case, especially initially. For a very fast load application there can be local failures in
some sections of the beam before other parts even are aware of the load (principle
illustrated in Figure 12.7). This phenomenon can be explained by the time required to
spread the information of the external load in the material. For concrete the
longitudinal wave velocity is approximately 3500 m/s and for a 2.5 meter long beam
subjected 	to 	a 	concentrated 	load, 	applied 	at 	the 	midpoint, 	it 	will 	take
36	.	0	3500	25	.	1 	≈ 	ms until the information has reached the supports.
Microcracks
Macrocracks
Paste
Ballast
Static 	Dynamic

-- 123 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	108
Figure 12.7 	Principle 	initial 	behaviour 	of 	beam 	subjected 	to 	a 	dynamic
concentrated load.
When using equivalent static loads this initial behaviour is not taken into account even
though the use of equivalent static load gives a well estimated value of the maximum
displacement.
12.2 Analysis of cross-sections subjected to bending
Due to the complexity of the behaviour of a reinforced concrete beam the analysis is
made in different stages depending on if cracks have occurred or not. Analyses of
cross-sections in stadium I and II are in case of static load often calculated in service
limit state but since all calculations when designing shelters shall be made in ultimate
limit state (Räddningsverket (2003)) only this case are treated here. Also analyses of
cross-sections in stadium III are made in ultimate limit state. By following Engström
(2001) the expressions useful in the analysis are stated for stadium I, II and III
respectively.
In ultimate limit state safety factors are used when calculating the design values of the
material properties.
n	m
k
d
f
f
γ
	ηγ
= 	(12.2)
n	m
k
d
E
E
γ
	ηγ
= 	(12.3)
In the Swedish shelter regulation the design value of the tensile stress for the steel is:
yk	st 	f	f 	9	.	0	= 	(12.4)
The partial safety factor γn (in Equations (12.2) and (12.3)) taking the safety class into
consideration is equal to 1.0 in case of accidental load, no matter which safety class it
is. The product of the safety factor γm (in Equations (12.2) and (12.3)) taking the
Zones with risk of cracking

-- 124 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	109
insecurity when determining the material parameters and η are, for accidental load,
shown in Table 12.1.
Table 12.1 	Partial safety factors for concrete and reinforcing steel for accidental
load.
Material 	m	
ηγ
Strength parameters 	1.2
Concrete
Modulus of elasticity 	1.0
Strength parameters 	1.0
Reinforcing steel
Modulus of elasticity 	1.0
Due to the fact that the compressive strength of concrete increases the faster the load
is applied the design value of the compressive strength can be increased when the load
is an accidental load with dynamic behaviour.
ccd
accidental
ccd 	f	f 	1	.	1	= 	(12.5)
In case of dynamic load a higher value of the modulus of elasticity for the concrete is
used, according to the Swedish design code BBK 04, Boverket (2004):
n	m
ck	dynamic
cd
E
E
γ
	ηγ
⋅
= 2	.	1 (12.6)
12.2.1 Calculations in stadium I and II
Stadium I is earlier defined as the stadium when the cross-section is uncracked and
stadium II is defined as the stadium when the cross-section is cracked but there is still
no yielding of the material. In stadium I and II the beam has elastic behaviour.
12.2.1.1 Strain distribution for the cross-section
The deformation of the cross-section is described by the strain distribution which is
characterized by a mean strain εcm and a curvature 1/r, see Figure 12.8. The mean
strain represents the strain in the centre of gravity of the cross-section meaning the
centre of gravity of the transformed cross-section calculated with respect to stiffness.
The meaning of a transformed cross-section is further explained in Section 12.2.1.3.
The curvature is represented by the strain gradient meaning the inclination of the
strain curve.

-- 125 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	110
Figure 12.8 	The 	deformation 	of 	the 	cross-section 	is 	described 	by 	the 	strain
distribution based on Engström (2001).
At a distance z form the centre of gravity the strain can be seen as a result of the mean
strain plus a strain depending on the curvature as:
z
r
z 	cm	c
1
)	( 	+	=
ε
	ε 	(12.7)
The curvature is expressed by using the radius of curvature r. The curvature can be
seen as the change of angle per unit length and can for a beam element with constant
value of the curvature be expressed as:
dx
d
r
ϕ
=
1 (12.8)
where dφ is the change of angle over the element length dx. The meanings of the
notations are also seen in Figure 12.9.
Figure 12.9 	Relation between the radius of curvature and flexural deformation for a
beam element with constant curvature based on Engström (2001).
The neutral layer is defined as the layer in the cross-section where the strain and the
stress is zero. In case of pure bending the neutral layer coincides with the centre of
cc	
ε
CG	x
Centre of gravity
(CG)
r
1
z 	cm	
ε
dx 	CG	x
r
ϕ	d

-- 126 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	111
gravity meaning that the mean strain εcm is zero and the strain at a distance z from the
centre of gravity is:
z
r
z	c
1
)	( 	=
	ε 	(12.9)
12.2.1.2 Assumptions
The analysis methods described in this chapter are used to calculate normal stresses in
cross-sections subjected to pure bending (no axial forces are present). The strain
distribution is assumed to be linearly over the height of the cross-section and full
interaction is assumed between the steel and the concrete. The meaning of the full
interaction between the steel and the concrete is illustrated in Figure 12.10 where the
concrete strain εc equals the steel strain εs at the level of the reinforcement.
Figure 12.10 Strain distribution in uncracked rectangular cross-section of reinforced
concrete subjected to pure bending.
εc1 and εc2 are the concrete strain in the compressed and tensioned edges respectively
and x CG is the distance from the compressed edge to the centre of gravity calculated
with respect to stiffness. The cross-section is subjected to a moment M.
In stadium II, when the beam is cracked due to bending, the influence of the concrete
in tension underneath the neutral layer is neglected even tough the tensioned concrete
in between the cracks influences the load carrying capacity of the beam. The influence
from the tensioned concrete is largest directly after the appearance of the first crack
and decreases when the load increases, see Figure 12.11.
Yielding are here assumed to always start in the steel meaning that the steel in the
tensile zone is assumed to reach the yield stress before the concrete strain in the
compressed edge reaches the ultimate concrete strain.
2	c	
ε
1c	
ε
s	
ε
M 	CG	x
z
Centre of gravity
(CG)
d

-- 127 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	112
Figure 12.11 Principal relation between the moment and mean curvature for zone
with flexural cracks. Influence from tensioned concrete between the
cracks result in a relation that smoothly approach the stadium II
stiffness.
Since stadium I or II is assumed elastic response is assumed for both concrete and
reinforcement steel.
c	c	c 	E
ε	
σ 	= 	(12.10)
s	s	s 	E
ε	
σ 	= 	(12.11)
where 	c	
σ normal stress in concrete
c	E modulus of elasticity for concrete
c	
ε 	concrete strain
s	
σ normal stress in steel
s	E modulus of elasticity for steel
s	
ε 	steel strain
All analyses and calculation method used in this chapter neglects long time influences
such as shrinkage and creep deformations.
12.2.1.3 Transformed cross-section
In order to facilitate the calculations the steel and concrete cross-section can be
replaced with an equivalent concrete cross-section, also called a transformed cross-
section, 	without 	influencing 	the 	results. 	The 	expressions 	for 	the 	area 	of 	the
transformed cross-section, for a double reinforced concrete beam, in stadium I is:
r
1
cr	M Stadium II
Stadium I
I	EI
II	EI
M
cr	M 	- crack moment

-- 128 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	113
s	s	c	I 	A	A	A	A 	)	1	(	)	1	( 	−	+
′
−	+	=
	α
	α 	(12.12)
where 	c	A 	whole 	area 	of 	the 	concrete 	(without 	reduction 	for 	the
reinforcement area)
′
s	A 	area of compressed reinforcement
s	A 	area of tensioned reinforcement
The factor α is the relation between the modulus of elasticity for steel and concrete
and is defined as:
c
s
E
E
=
	α 	(12.13)
For cracked cross-sections (stadium II) the transformed cross-section is (using the
same notations as in Equation (12.12)):
s	s	cc	II 	A	A	A	A	
α
	α 	+
′
−	+	= 	)	1	( 	(12.14)
where Acc is the area of the compressed zone (without reduction for the reinforcement
area).
12.2.1.4 Crack criteria
Due to the crack criterion for a beam subjected to pure bending the cross-section will
remain uncracked as long as the maximum value of the tensional stress fulfils:
ζ
σ cbt
ct
f
<	max	, 	(12.15)
ζ is the crack security factor chosen to be 1.0 in order to assume a realistic crack
pattern and f cbt is the flexural strength calculated as:
ct	cbt 	f	k	f 	⋅	=
4
4	.	0
6	.	0 h
k 	+	= 	and 	45	.	1	0	.	1 	≤	≤ k
(12.16)
where h is the total height of the beam and f ct is the concrete tensile strength.
This means that the cross-section will crack when the maximum value of the tensile
stress is:

-- 129 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	114
ζ
σ cbt
ct
f
=	max	, 	(12.17)
In Navier’s formula the concrete stresses in the cross-section can be calculated by
using the moment M in the cross-section together with the equivalent value of the
moment of inertia, I I and I II respectively and the distance from the neutral layer. With
z defined as shown in Figure 12.8 the stress in the concrete for an uncracked cross-
section is calculated as:
z
I
M
z
I
c 	=	)	(	
σ 	(12.18)
In case of a cracked cross-section the concrete stress at distance z from the neutral
layer is calculated as:
z
I
M
z
II
c 	=	)	(	
σ 	(12.19)
12.2.1.5 Reinforced cross-section in stadium I
Studying the uncracked single symmetric cross-section in Figure 12.10 subjected to
pure bending. The tensioned reinforcement, with total area As, is placed in the
tensioned 	zone 	at 	the 	distance 	zs from the 	neutral 	layer 	and 	the 	compressed
reinforcement, with a total area As ’, is placed in the compressed zone.
CG	s 	x	d	z 	−	= 	(12.20)
Here d is the effective height of the cross-section meaning the distance from the
compressed edge to the layer of reinforcement. x CG is the distance from the
compressed edge to the centre of gravity calculated with respect to the stiffness (see
Figure 12.10).
Due to the assumption of full interaction between the steel and the concrete the steel
stress can be calculated as:
)	( s	c	s 	z	
ασ
	σ 	= 	(12.21)
where the concrete stress at the reinforcement layer σc(z s ) is calculated as shown in
Equation (12.18):
s
I
s	c 	z
I
M
z 	=	)	(	
σ 	(12.22)
where the moment of inertia in case of an uncracked cross-section is calculated as:

-- 130 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	115
( 	) 	( 	)2	2
3
)	1	(	)	1	(
12 CG	s	CG	s	I 	x	d	A	d	x	A
bh
I 	−	−	+	′	−
′
−	+	=
	α
	α 	(12.23)
12.2.1.6 Reinforced cross-section in stadium II
In stadium II the cross-section is assumed to be cracked and the influences from the
concrete in tension is neglected (see Section 12.2.1.2). The stress distribution in the
transformed cross-section is calculated by multiplying the concrete strain with the
modulus of elasticity for concrete (see Equation (12.10)) why only the stresses in the
concrete are shown in Figure 12.12. Underneath the neutral layer fictive concrete
stresses are calculated and the steel stress is calculated from the fictive concrete stress
at the steel level.
Figure 12.12 Strain and stress distribution in cracked rectangular cross-section of
reinforced concrete subjected to pure bending.
The height x of the compressed concrete zone is calculated by using an equation of
equilibrium. As mentioned in Section 12.2.1.1 the centre of gravity, calculated with
respect to the stiffness, for the transformed cross-section coincides with the neutral
layer meaning:
CG	x	x = 	(12.24)
The distance from the compressed edge to the centre of gravity for the transformed
cross-section is calculated as (for a rectangular cross-section):
II
s	s
CG A
d	A	d	A
x
bx
x
2	2
)	1	(
2
α
	α 	+	′′
−	+
= (12.25)
Using Equations (12.14), (12.24) and (12.25) the equilibrium equation can be written
as:
( 	) 	d	A	d	A
x
bx	A	A	bx	x 	s	s	s	s	
α
	α
	α
	α 	+	′′
−	+	=	+
′
−	+ 	)	1	(
2
)	1	( 	(12.26)
1c	
ε 	1c	
σ
2	c	
σ	2	c	
ε
M 	x
z
s	
ε
cc	A
s	A
Fictive concrete stress
α	
σ	
σ 	s	s	c z 	=	)	(
)	(	)	( 	z	E	z 	c	c	c	
ε	
σ 	=

-- 131 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	116
Rearranging the terms in Equation (12.26) the equation from which x can be
calculated is:
( 	) 	( 	) 	0	)	1	(
2
2
=	−	+	′	−
′
−	+ 	d	x	A	d	x	A
bx s	s	
α
	α 	(12.27)
or
0	)	1	(
2
)	1	(
2	2 =	



 	+	′′
−	−	



 	+
′
−	+ 	d	A	d	A
b
x	A	A
b
x 	s	s	s	s	
α
	α
	α
	α 	(12.28)
The moment of inertia in case of a cracked rectangular cross-section is calculated as:
( 	) 	( 	)2	2
2	3
)	1	(
2	12 x	d	A	d	x	A	x
x
bx
bx
I 	s	s	CG	II 	−	+	′	−
′
−	+	




 −	+	=
	α
	α 	(12.29
)
Using Equation (12.24) together with Equation (12.29) gives the expression for the
moment of inertia in stadium II for a rectangular cross-section.
( 	) 	( 	)2	2
3
)	1	(
3 x	d	A	d	x	A
bx
I 	s	s	II 	−	+	′	−
′
−	+	=
	α
	α 	(12.30)
The concrete stress at the steel level is:
s
II
s	c 	z
I
M
z 	=	)	(	
σ 	(12.31)
Due to the assumption of full interaction between the steel and the concrete ant that
yielding starts in the reinforcement the concrete stress at steel level can be calculated
as:
α
σ
σ sy
s	c z 	=	)	( 	(12.32)
The moment M can now be calculated by using Equations (12.31) and (12.32).
s
II	sy	sy
s
II 	z
I
M	z
I
M
α
σ
α
σ =	⇔	= 	(12.33)
12.2.2 Calculations in stadium III
In this chapter calculation models are shown for flexural failure due to pure bending
of reinforced concrete beams with rectangular cross-section. Only a method with
simplified stress block is shown.

-- 132 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	117
12.2.2.1 Failure criteria
In stadium III plastic behaviour of the materials are both possible and wanted.
Yielding of the material gives a ductile behaviour and facilitates force redistribution
in the structure.
The failure is determined by the deformation capacity of the materials. In the Swedish
calculation code BBK 04, Boverket (2004), the failure criteria are:
For ordinary concrete (with characteristic compressive strength 	60	≤	cck	f 	MPa):
• 	ultimate concrete strain is limited to
3
10	5	.	3 −
⋅	≤	cc	
ε 	(12.34)
For cold-worked reinforcing steel:
• 	The strain is limited to
01	.	0	−	≤ 	g	s	
ε	
ε 	(12.35)
where εg is the limit strain.
For hot-rolled reinforcing steel there is no limitation of the strain because the capacity
of deformation is very high.
12.2.2.2 Reinforced rectangular cross-section in stadium III
For cross-section with flexural cracks and hot-rolled reinforcing steel subjected to
pure bending the determining failure criteria is always limited by Equation (12.34),
.i.e. This means that the concrete strain in the compressed edge εcc has reached the
maximum value εcu.
3
10	5	.	3 −
⋅	=	= 	cu	cc	
ε
	ε 	(12.36)
When the maximum value of the concrete strain in the compressed edge is reached the
cross-section is about to fail and the cross-section has reached the ultimate limit for
which the bearing capacity shall be calculated.
The same cross-section used in Section 12.2.1.5 and 12.2.1.6 shall be studied but in
stadium III. As in stadium II a compressive zone is formed but in here the stress
distribution is no longer linear because of the yielding, see Figure 12.13.

-- 133 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	118
Figure 12.13 Strain and stress distribution in cracked rectangular cross-section of
reinforced concrete subjected to pure bending where the maximum
value of the concrete strain in the compressed edge is reached
In case of a simplified rectangular stress block the values of α and β are 0.8 and 0.4
respectively.
The assumption of linear strain distribution means that the steel strain is equal to the
concrete strain at the reinforcement layer and the steel strain can be expressed as:
cu	s x
x	d
ε
	ε −
= 	(12.37)
and as in stadium II the influence of the tensioned concrete is neglected.
The compressive resultant Fc, placed at the distance βx=0.4x from the compressed
edge, can be calculated as:
x	b	f	x	b	f	F 	cc	cc	c 	8	.	0	⋅	⋅	=	⋅	⋅	=
	α 	(12.38)
The internal lever arm is:
x	d	x	d	z 	4	.	0	−	=	−	=
	β 	(12.39)
Equilibrium equations for the rectangular cross-section can be expressed as:
s	s	cc 	A	x	b	f 	⋅	=	⋅	⋅
	σ	8	.	0 	(12.40)
)	4	.	0	(	8	.	0 	x	d	x	b	f	M 	cc	pl 	−	⋅	⋅	= 	(12.41)
where 	pl	M 	is the ultimate moment capacity.
M 	x
cu	
ε
z
s	
ε
cc	A
s	A 	s	s	s 	A	F 	⋅	=
σ
x	b	f	F 	cc	c 	⋅	⋅	⋅	=
α
M x	⋅
	β
zcc	f	⋅
	α
x	d −
cc	f

-- 134 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	119
12.2.2.3 Rotational capacity
The yielding capacity in case of bending, called the rotational capacity, is the largest
change of angle that a plastic hinge can undergo and still keep its maximum moment
capacity. Calculations of the rotational capacity are here made by following Svensk
byggtjänst (1990).
According to Svensk byggtjänst (1990) the rotational capacity, expressed in radians,
can be calculated as:
3
10−
⋅	⋅	⋅	= 	C	B	A	pl	
θ 	(12.42)
where the factors A, B and C depends on the reinforcement arrangement, the strain-
stress relation for reinforcing steel and the position of the plastic hinge respectively.
The factor A (where A≥0.05 must be fulfilled) is calculated as:
bal
s
s	v	A
ω
ω
ω
	ω 	4	.	1	7	.	1	6	.	0	1 	−	′	+	+	= 	(12.43)
where
ct	c
sv	sv
v f	s	b
f	A
⋅	⋅
⋅
=
	ω 	(12.44)
sv	A 	total area of the shear reinforcement
sv	f 	shear strength of reinforcing steel
c	b 	width of the compressed block
s 	spacing of shear reinforcement in between the plastic hinge and
where the moment is zero
ct	f 	tensional strength of the concrete
cc	c
sc	s
s f	d	b
f	A
⋅	⋅
⋅	′
=	′
	ω 	(12.45)
s	A′ 	total area of the reinforcement in compressed block
sc	f 	compressive strength of reinforcing steel
d 	effective height
cc	f 	compressive strength of the concrete

-- 135 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	120
cc	c
st	s
s f	d	b
f	A
⋅	⋅
⋅
=
	ω 	(12.46)
s	A 	total area of tensioned reinforcement
st	f 	tensile strength of reinforcing steel
s	st
bal E	f	+	⋅
⋅
= 	−
−
3
3
10	5	.	3
10	5	.	3
8	.	0	
ω 	(12.47)
s	E 	modulus of elasticity for reinforcing steel
However, there are some limitations for the expressions in Equations (12.44), (12.45)
and (12.46).
0	.	2	≤	v	
ω 	if 	c	b	s 	⋅	≤ 	8	.	0 	otherwise 	0	=	v	
ω 	(12.48)
s	s	
ω	
ω 	≤	′ 	provided that 	)	min(	15 	s	s	
φ ′	⋅	≤ 	otherwise 	0	=	′s	
ω 	(12.49)
where 	s	
φ ′ is the diameter of the reinforcement bars subjected to compression.
bal	s	
ω	
ω 	≤ 	(12.50)
The factor B is equal to 1.0 for hot rolled, not weldable, reinforcement bars and 0.8
for hot rolled, weldable, reinforcement bars. For further information about the factor
B and its values see Svensk byggtjänst (1990).
In field the value of factor C is:
d	l	C 	0	7 ⋅	= 	(12.51)
and by supports the value is:
d	l	C 	0	10 ⋅	= 	(12.52)
where 	0	l 	is the distance from the plastic hinge to the place where the moment is zero.
The calculations of required rotational capacity are made by the principle that if the
plastic hinges have to rotate in order to form the assumed failure mechanism. In each
plastic hinge the moment is known (it is the yielding moment) and the structure is
then statically determinable and the required rotation can be calculated.
The mechanism for a fixed beam is shown in Figure 12.14 below where θsupport and
θfield is 	the 	total 	rotations 	in 	the 	plastic 	hinges 	at 	the 	support 	and 	midpoint
respectively.

-- 136 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	121
Figure 12.14 Mechanism and rotations.
Due to symmetry the total rotation at the supports is equal and the total rotation at the
plastic hinge in the middle of the beam is twice the size of the support rotation.
support	field	
θ	
θ 	2	= 	(12.53)
where the total rotation at the supports in case of a fixed beam is:
L
u
support
2
=
	θ 	(12.54)
The total rotation can be divided into a plastic and an elastic part as shown in
Figure 12.15.
support	pl	support	el	support 	,	,	
θ	
θ	
θ 	+	= 	(12.55)
field	pl	field	el	field 	,	,	
θ	
θ	
θ 	+	= 	(12.56)
Figure 12.15 Elastic 	and 	plastic 	rotations 	of 	fixed 	beam 	(compare 	with
Figure 12.14).
By means of elementary cases in Samuelsson, Wiberg (1999) the value of the elastic
part of the rotation can be calculated. For a fixed beam subjected to a uniformly
distributed load q the midpoint deflection, in case of static load and linear elastic
behaviour, is:
EI
qL
u el 384
4
= 	(12.57)
The maximum value of q for which Equation (12.57) is valid is calculated by use of
the maximum elastic moment at the support, where yielding starts:
field	
θ
support	
θ
u
support	pl ,	
θ
support	el,	
θ
el	u	u −
el	u

-- 137 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	122
2
2 12
12 	L
M
q
qL
M el
el 	=	⇒	= 	(12.58)
and Equation (12.58) can be written as:
EI
L	M
EI
L	M
u el	el
el 32	384
12 2	2
=	= 	(12.59)
The corresponding rotational capacity at the support can be calculated as:
L
u el
support	el
2
, 	=
	θ 	(12.60)
which is easily seen in Figure 12.15.
Due to symmetry the elastic rotation capacity at the supports is equal and the elastic
rotation capacity in the middle of the beam is twice the size of the support rotation.
L
u el
support	el	field	el
4
2 	,	, 	=	=
	θ
	θ 	(12.61)
The plastic support rotation can now be calculated as:
EI
L	M
L
u
L
u
L
u 	el	el
support	el	support	support	pl 16
2	2	2
,	, 	−	=	−	=	−	=
	θ
	θ
	θ 	(12.62)
and the plastic filed rotation is:
EI
L	M
L
u
L
u
L
u 	el	el
field	el	field	field	pl 8
4	4	4
,	, 	−	=	−	=	−	=
	θ
	θ
	θ 	(12.63)
12.3 Requirements 	of 	structural 	parts 	and 	materials 	in
shelters due to Swedish shelter regulations
In order to fulfil demands on functionality and durability of a shelter some minimum
requirements on design and material are presented in the Swedish shelter regulation
where the shelter is assumed to be built of reinforced concrete. Here only a brief
review of the requirements is done, for further information see Räddningsverket
(2003). The characteristic values of the loads shall be used in the analyses and safety
coefficients for accidental loads shall be used.
Minimum requirements for thicknesses of structural elements in a shelter due to the
Swedish shelter regulation are shown in Table 12.2. The values in Table 12.2 are valid
for structures assumed to have no significant protection from other buildings and are
based on thicknesses required to protection from splinter and radioactive radiation.

-- 138 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	123
Table 12.2 	Minimum thickness of structural members in shelters
Structural part 	Minimum thickness [mm]
Roof 	350
Floor 	200
Wall (outer) 	350
The concrete used in the shelter shall have at least strength class C25/30 and the
amount of reinforcement is limited to:
%	1	.	1	%	14	.	0 	≤	≤
ρ 	where d	b
As
⋅
=
	ρ 	(12.64)
The reinforcement shall be placed in two perpendicular layers with maximum
200 mm spacing between the parallel bars. No shortening of the reinforcement in
fields 	is 	allowed 	and 	the 	maximum 	thickness 	of 	concrete 	cover 	is 	50 	mm.
Reinforcement shall be placed both in tensile and compression zone.
Due to the Swedish shelter regulations a shelters shall endure an impulse load caused
by a bomb containing 125 kg of the explosive substance TNT (trotyl) exploding
5 meters from the wall. This impulse load is assumed to, at the most, correspond to
the equivalent static load q=50 kN/m2 which is applied as shown in Figure 12.16.
Figure 12.16 Load application due to Swedish shelter regulation where q=50 kN/m2 .
The support moment M s shall not be more than 50 per cent higher than the moment in
the field M f in order to get a ductile behaviour of the structure, i.e.:
f	s 	M	M 	5	.	1	≤ 	(12.65)
q 	q
q

-- 139 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	124
12.4 Example; minimum amount of reinforcement
A wall in a shelter will be analysed. The design and geometry of the wall is chosen to
fulfil the minimum requirements in Section 12.3. The measurements of the wall and
the load applied are shown in Figure 12.17 below.
Figure 12.17 Shelter wall subjected to a uniformly distributed load q .
The wall in the shelter can be seen as a fixed beam with length 2.50 m subjected to a
uniformly distributed load q as shown in Figure 12.18. Influences from the normal
force in the wall, caused by the uniformly distributed load subjected to the shelter roof
are neglected, giving calculations on the safe side.
Figure 12.18 Idealization of shelter wall.
Studying a 1.0 meter wide strip of the beam gives a cross-section as shown in Figure
12.19.
Figure 12.19 Cross-section of idealized beam in Figure 12.18.
2.50 m
q
m	35	.	0	=	h
m	0	.	1	=	b
m	30	.	0	=	d
s	A 	- area of reinforcement in tensile zone
s	A′ - area of reinforcement in compression zone
0.350 m
2.50 m
0.200 m
0.350 m	q
q

-- 140 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	125
Concrete C25/30 and reinforcement bars B500B are used and calculations are made in
order to get the load-displacement curve for the beam, shown in Appendix I.
The stiffness K (see Figure 12.2) of the uncracked beam is:
3332	=	K 	MN/m 	(12.66)
The inclination of the load-displacement curve after the first crack has occurred, K'
(see Figure 12.2) is:
7	.	102	=	′	K 	MN/m 	(12.67)
The maximum value of the internal force Rm is:
4	.	502	=	=	⋅	= 	pl	pl	m 	P	L	q	R 	kN 	(12.68)
By means of empirical relations in Räddningsverket (2004) the corresponding impulse
load to the equivalent static load q can be determined. Here q corresponds to an
impulse load where the maximum value of the load P1 is approximately 5000 kN/m2
and the impulse is about 2800 Ns/m2 . If the load is assumed to be a triangular load (in
time) as shown in Figure 12.20 the duration of the load can be calculated by means of
Equation (12.69).
12	.	1
10	5000
2800	2	2
2
)	( 	3
1
1
1	1
0
1
=
⋅
⋅
=	=	⇔
⋅
=	= ∫
=
= 	P
I
t
t	P
dt	t	P	I
t	t
t
m
s
(12.69
)
)	(t	P
t
1P
1t
I
1	=	n
Figure 12.20 Triangular load (in time)
The value of the maximum deflection of the beam subjected to a dynamic load is
calculated by means of transforming the beam into an SDOF system as described in
Chapter 7. The equivalent values of the load, internal force and the mass is for the
studied beam:
M	M 	M	e	
κ	=
R	R 	K	e	
κ	=
(12.70)

-- 141 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	126
P	P 	P	e	
κ	=
In case of trilinear material the differential equations in the different ranges are:
In the elastic range
e	e	e 	P	u	K	u	M 	=	+	&& (12.71)
In the elastoplastic range
e	cr	e	cr	e	e 	P	u	u	K	u	K	u	M 	=	−	′	+	+ 	)	(	&& (12.72)
In the plastic range
e	me	e 	P	R	u	M 	=	+	&& (12.73)
The transformation factors for linear elastic material is used in all ranges and
Equations (12.71), (12.72) and (12.73) can now be written as:
In the elastic range
P	Ku	u	M el
P
el
K
el
M	
κ
	κ
	κ 	=	+	&& (12.74)
In the elastoplastic range
( 	) 	P	u	u	K	Ku	u	M el
P	cr	cr
el
K
el
M	
κ
	κ
	κ 	=	−	′	+	+ 	)	(	&& (12.75)
In the plastic range
P	R	u	M el
P	m
el
K
el
M	
κ
	κ
	κ 	=	+	&& (12.76)
The transformation factors for linear elastic material are listed in Table 6.1:
The maximum displacement, umax , for the SDOF system, with equivalent quantities
for mass, internal force and external load, is calculated by means of the central
difference method (see Section 5.2) and by use of an in OCTAVE program, developed
for this project, see Section 7.1.1.
=	max	u 	31.1 mm 	(12.77)
If instead the transformation factors for ideal plastic material are used in Equations
(12.74) to (12.76) the maximum displacement found by SDOF analysis is:
=	max	u 	35.2 mm 	(12.78)
The maximum deflection when using transformation factors for linear elastic material
in 	the 	SDOF 	analysis 	is 	smaller 	than 	the 	deflection 	achieved 	when 	using
transformation factors for ideal plastic material in the analysis. This is expected since
when using linear elastic values the mass becomes larger than when using the ideal
plastic values since κMel
> κMpl, meaning that less energy is consumed when starting up
the system with ideal plastic values, see discussion in Section 8.1.

-- 142 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	127
Available rotational capacity, in support and field respectively, for the beam is, see
Appendix I:
0092	.	0	,	, 	=	support	pl	d	
θ 	rad 	(12.79)
0155	.	0	,	, 	=	field	pl	d	
θ 	rad 	(12.80)
The required rotational rotation capacity, in support and field respectively, for the
beam is, see Appendix I:
0235	.	0	, 	=	support	pl	
θ 	rad 	(12.81)
0470	.	0	, 	=	field	pl	
θ 	rad 	(12.82)
The required rotational capacity is much higher than the available rotational capacity
(compare Equations (12.79) and (12.80) with Equations (12.81) and (12.82)) meaning
that the wall in the shelter, see Figure 12.18, subjected to the transient load, in Figure
12.20, will not endure the load and will collapse.
The equivalent load used in the Swedish shelter regulations, Räddningsverket (2003)
is based on a load with long duration since this load is the one assumed to be most
unfavourable. However, the results above indicate that this might not be true. On the
other hand, the calculation method used when estimating the rotational capacities in
Svensk byggtjänst (1990) might be to conservative. When the equivalent load used in
the Swedish shelter regulations where determined the way of calculating the rotational
capacity used in Svensk byggtjänst (1990) where not known, or at least not well-
known.
Now also consider linear elastic and ideal plastic material behaviour. In the linear
elastic case the stiffness K is assumed to be the same as the stiffness K for the trilinear
material (see Equation (12.66)). For ideal plastic material the maximum value of the
internal force Rm is the same as in case of trilinear material, see Equation (12.68).
12.4.1 Linear elastic behaviour
In case of linear elastic material the differential equation is:
e	e	e 	P	R	u	M 	=	+	&& 	(12.83)
For linear elastic material the internal force is:
u	K	R 	⋅	= 	(12.84)
where the stiffness K is assumed to be the same as in the trilinear case:
3332	=	K 	MN/m 	(12.85)

-- 143 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	128
Inserting Equations (12.70) and (12.84) into Equation (12.83) the differential equation
is:
P	Ku	u	M 	P	K	M	
κ	
κ	
κ 	=	+	&& 	(12.86)
where the transformation factors for the linear elastic material (in Table 6.1) are used:
533	.	0
533	.	0
406	.	0
=
=
=
K
P
M
κ
κ
κ
(12.87)
The maximum displacement, umax , calculated by use of an OCTAVE program,
developed for this project.
=	max	u 	2.81 mm 	(12.88)
A very small deflection is achieved when having linear elastic material and the same
elastic stiffness is used as in case of trilinear material.
12.4.2 Ideal plastic behaviour
In case of ideal plastic material the differential equation is:
e	me	e 	P	R	u	M 	=	+	&& 	when 	m	R	t	P 	≥	)	( 	or 	0	)	( 	≠	t	u 	(12.89)
The maximum value of the internal force Rm is assumed to be the same as in case of
trilinear material (see Equation (12.68)):
4	.	502	=	m	R 	kN 	(12.90)
Inserting Equations (12.70) into Equation (12.89) the differential equation is:
P	R	u	M 	P	K	M	
κ	
κ	
κ 	=	+	&& 	(12.91)
where the transformation factors for the ideal plastic material (in Table 6.1) are used:
5	.	0
5	.	0
3	1
=
=
=
K
P
M
κ
κ
κ
(12.92)
The maximum displacement, umax , for the SDOF system, calculated by use of an
OCTAVE program, developed for this project is:
=	max	u 	32.7 mm 	(12.93)

-- 144 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	129
The maximum value of the deflection for ideal plastic material, Equation (12.93), is
lower than the maximum deflection achieved when using transformations factors for
ideal plastic material in the analysis of trilinear material, Equation (12.82). This is
expected since more energy is consumed initially in the ideal plastic material case.
Of the same reason, it can be probable that the maximum deflection in case of ideal
plastic material shall be larger than when using transformation factors for linear
elastic material in the trilinear material case. However, this can not be guaranteed
since the equivalent mass in case of ideal plastic material is larger than for trilinear
material when transformation factors for linear elastic material is used. When
comparing Equations (12.93) and (12.77) it is seen that the displacement for the
trilinear material is smaller than for ideal plastic material.
12.5 Example; not minimum amount of reinforcement
The beam analysed in Chapter 7 had a chosen amount of reinforcement not equal to
the minimum amount, as in the example above. Since the beam is the same as used in
Chapter 7 there is no need to calculate the load-displacement relation again, instead
the values are found in Appendix D. However, the rotational capacities where not
calculated in Appendix D, these calculations are made in Appendix I.
The maximum displacement, umax , for the SDOF system with trilinear material, when
using transformation factors for linear elastic case, is:
=	max	u 	18.3 mm 	(12.94)
If, instead, the transformation factors for the ideal plastic material is used the
maximum deflection is:
=	max	u 	22.4 mm 	(12.95)
Available rotational capacity, in support and field respectively, for the beam is, see
Appendix I:
0090	.	0	,	, 	=	support	pl	d	
θ 	rad 	(12.96)
0157	.	0	,	, 	=	field	pl	d	
θ 	rad 	(12.97)
The required rotational rotation capacity, in support and field respectively, for the
beam is, see Appendix I:
0132	.	0	, 	=	support	pl	
θ 	rad 	(12.98)
0264	.	0	, 	=	field	pl	
θ 	rad 	(12.99)
Also for this amount of reinforcement the available rotational capacity is smaller than
the required rotational capacity.

-- 145 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	130
In case of ideal plastic material the maximum deflection is:
=	max	u 	18.1 mm 	(12.100)
The same comments as in Example above is applicationable here when comparing the
maximum deflection for trilinear material with transformation factors for linear elastic
and 	ideal 	plastic 	material, 	respectively. 	Also 	when 	comparing 	the 	maximum
deflection when having ideal plastic material and transformation factors for the ideal
plastic material in the analysis of the trilinear material the comments in example
above are valid here. When comparing Equations (12.94) and (12.100) it is seen that
the maximum displacement for ideal plastic material is smaller than the displacement
for trilinear material with transformation factors for linear elastic material which was
not the case in the example above.

-- 146 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	131
13 	Conclusions and ideas of further investigations
In this project simplified hand-calculation methods are compiled and discussed. For
transient loads, for example loads caused by explosions, structures behave different
from when subjected to static loads. Hence, the dynamic effects and the devastation
they can cause is hard to take into account in the simplified hand-calculation methods.
For example influences of higher modes and spread out yielding areas are not taken
into account in the simplified calculation methods described in this thesis. Another
thing, not taken to account in the hand-calculation methods, is that when a load with
very short duration is applied to a beam large local deformations can occur in the
application area before the rest of the beam is even aware of the load. This means that
in order not to overlook any negative effects when designing with regard to
explosions it is important that the real behaviour of the beam, or at least a good
approximation of it, is known by the designer.
In this report the methodology of transforming beams to SDOF systems are shown
and transformation factors for some typical cases and material behaviours are derived.
The method of transforming deformable bodies into SDOF systems is useful since it
simplifies the analyses of deformable structures subjected to transient loads. When the
SDOF method is applicationable equivalent static loads, tabled beam equations and
damage tables/curves can be used in order to simplify the analyses even more.
However, due to limited available time the limit for when a load can be assumed to be
an impulse load is not dealth with in this thesis but is worth further investigation.
The agreement between the response of beams calculated by use of SDOF systems
and the real behaviour of the beam is investigated by comparing the results with
results from FE analyses. When the FE models of the beams are made in order to
imitate the assumed behaviour in the SDOF analyses the agreement between the
results are good. However, this way of modelling can be questioned since the SDOF
method must also agree with the real behaviour of the beams. When modelling the
beams for a more realistic behaviour, where yielding can occur also in areas outside
the points where plastic hinges are assumed to appear the agreement differs for
different material behaviour. In case of linear elastic material the agreement is still
accurate since there is no plasticity but in case of plastic effects the agreement is less
pleasing; at least for beams subjected to concentrated loads. Hence the use of this
method when analysing structures made of reinforced concrete shall be used with
caution, at least before further, deeper and more carefully investigations are made.
When the SDOF method is used to analyse a wall in a shelter, represented by a
reinforced concrete beam, subjected to a load corresponding to the load that the
shelter shall withstand due to the Swedish shelter regulations, it turns out that the
beam can not withstand the load. This indicates that either the equivalent load given in
the Swedish shelter regulations are too small or the calculation method for the
rotational capacity according to Svensk byggtjänst (1990) is too conservative.
However, even if the available rotational capacity is too small compared to the
required rotational capacity this will probably not cause failure. The analyses used
utilize simplifications and idealizations of the reality that result in capacities on the
safe side.

-- 147 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	132
14 References
WRITTEN SOURCES:
ADINA (2004): Theory and Modelling Guide Version 8.2.2. ADINA R&D, Inc.,
Volume 1, Watertown, USA.
Balazs, 	P. 	(1997): 	Beräkningsmetoder 	vid 	stötvågsbelastade 	konstruktioner.
Avdelningen 	för 	vapen 	och 	skydd, 	Försvarets 	forskningsanstalt, 	Rapport
FOA-R- -97-00473-311- -SE, Stockholm, Sweden.
Bathe K.-J. (1996): Finite Element Procedures. Prentice Hall, Englewood Cliffs, New
Jersey, USA.
Boverket (2004): Boverkets handbok om betongkonstruktioner BBK 04. Boverket,
Karlskrona, Sweden.
Engström, B. (2001): Beräkning av betong- och murverkskonstruktioner, Del II –
Beräkningsmodeller. 	Institutionen 	för 	konstruktionsteknik, 	Betongbyggnad,
Chalmers University of Technology, Kompendium no. 94:2B, Sweden.
Granström, 	S. 	(1958): 	Beräkningsmetod 	för 	stötvågsbelastade 	konstruktioner.
Forsknings 	och 	försökssektionen, 	Befästningsbyrån, 	Kungliga
Fortifikationsförvaltningen, Rapport nr 103:18, Sweden.
Norris, C. (1959): Structural Design for Dynamic Loads. McGraw-Hill Book
Company, Inc, USA.
OCTAVE. Version 2.17.1.
Räddningsverket (2004): Sakkunnig fysiskt skydd, Seminarium om dynamisk
påverkan. Räddningsverket, Karlstad, Sweden.
Räddningsverket (2003) Skyddsrumsregler SR, SR 03. Räddningsverket, Karlstad,
Sweden.
Samuelsson, 	A., 	Wiberg, 	N-E. 	(1999): 	Byggnadsmekanik 	Hållfasthetslära.
Studentlitteratur, No 2., Lund, Sweden.
Svensk byggtjänst (1990): Betonghandbok, Svensk byggtjänst, Solna, Sweden.
ORAL SOURCES:
Wendt, U (2006): Personal information from PhD Ulrika Wendt, Reinertsen Sverige
AB. A report, written by Ulrika Wendt, concerning simplified design methods,
among other things, will be publicised in the near future.

-- 148 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	133
WEB SOURCES:
NATO (1996) NATO Handbook on the Medical Aspects of NBC Defence Operations
AMedP-6(B) Part I- Nuclear. http://www.fas.org/nuke/guide/usa/doctrine/dod/fm8
-9/1toc.htm.
KTH (2006) Notes for lesson in Structural Dynamics at the Royal institute of
Technology, Stockholm. http://www2.mech.kth.se/~jean/dynamics/dc8.ppt#6.

-- 149 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	134
APPENDIX A 	Transformation factors for linear
elastic material
The transformation factors for linear elastic material are derived in Sections 6.2.1,
6.2.2 and 6.2.3.1:
dx
t	u
t	x	u
L
L	x
x 	s
M 	∫
=
=






=
0
2
)	(
)	,	(	1
κ 	(A.1)
∫
∫ =
=
=
=
= 	L	x
x
L	x
x 	s
P
dx	t	x	q
dx	t	x	q
t	u
t	x	u
0
0
)	,	(
)	,	(
)	(
)	,	(
κ 	(A.2)
∫
∫ =
=
=
=
′′
= 	L	x
x
L	x
x
s
K
dx	t	x	q
dx	x	u	x	M
u
0
0
)	,	(
)	(	)	(
1
κ 	(A.3)
In case of concentrated loads applied in the system point 	)	(	)	,	(
0
t	P	dx	t	x	q
L	x
x
=	∫
=
=
and the
transformation factor for the load Equation (A.2) can be written as:
0000	.	1
)	(
)	(
)	(
)	,	(
)	(
)	,	(
)	(
)	,	(
0 	=	=	=
∫
=
=
t	P
t	P
t	u
t	x	u
t	P
dx	t	x	q
t	u
t	x	u
s
s
L	x
x 	s
P	
κ (A.4)
The relation between the bending moment and the curvature u''(x) is, in case of linear
elastic material:
EI
x	M
x	u )	(
)	( 	=	′′ 	(A.5)
The transformation factor for the internal force in Equation (A.3) when the beam is
subjected to a concentrated load can thus be written as:
)	(
)	(
1 	0
2
t	P
dx	x	M
EI	u
L	x
x
s
K
∫
=
=
	=
	κ (A.6)
The transformation factor for the mass Equation (A.1) is not influenced by the load
shape.

-- 150 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	135
In case of a uniformly distributed load 	L	t	q	dx	t	x	q
L	x
x
⋅	=	∫
=
=
)	(	)	,	(
0
and the transformation
factor for the load in Equation (A.2) can be written as:
∫	∫
=
=
=
=
=
⋅
=
L	x
x 	s
L	x
x 	s
P 	dx
t	u
t	x	u
L
dx
t	u
t	x	u
L	t	q
t	q
0	0 	)	(
)	,	(	1
)	(
)	,	(
)	(
)	(
κ 	(A.7)
By 	use 	of 	Equation 	(A.5) 	the 	transformation 	factor 	for 	the 	internal 	force 	in
Equation (A.3) when the beam is subjected to a uniformly distributed load can be
written as:
L	t	q
dx	x	M
EI	u
L	x
x
s
K ⋅
=
∫
=
=
)	(
)	(
1 	0
2
κ (A.8)
A.1 Case (1.1)
For a simply supported beam subjected to a concentrated load, as in Figure A.1, the
deflection along the beam (tabled in Samuelsson and Wiberg (1999)) is:
2
0	for
4
3
48
)	( 	2
3	2 L
x	P
L
x
x
EI
L
x	u 	≤	<	⋅




 −	= 	(A.9)
where x is a coordinate in longitudinal direction with start point at one end of the
beam.
Figure A.1 	Simply supported beam subjected to a concentrated load.
The deflection of the system point, located in the middle of the beam, is:
EI
PL
L	x	u	u s 48
)	2	(
3
=	=	= 	(A.10)
By rearranging the terms in Equation (A.10) the expression for the load can be written
as:
s	u
L
EI
P 	3
48
= 	(A.11)
and the moment distribution along the beam can be expressed as:

-- 151 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	136
2
0	for
2
)	( L
x
Px
x	M 	≤	<	= 	(A.12)
By means of Equation (A.1) and due to symmetry the transformation factor for the
mass can be calculated as:
4857	.	0
7
16
5
24
3
2
16	24	9
2
4
3
48
48	2
2
0
4
7
2
5
2
3
2
0
4
6
2
4
2
3
2
0
2
2
3	2
3
=	




 +	−	=
=




 +	−	=
=












 −	⋅	=
=
=
=
=
=
=
∫
∫
L	x
x
L	x
x
L	x
x
M
L
x
L
x
x
L
dx
L
x
L
x
x
L
dx
L
x
x
EI
L
L
EI
L
κ
(A.13)
Concentrated load applied in the system point gives (see Equation (A.4)):
0000	.	1	=	P	
κ 	(A.14)
By inserting Equations (A.10) to (A.12) into Equation (A.6) the transformation factor
for the internal force is calculated.
0000	.	1
3
24
2
48
48
2
2
48
)	(
1
2
0
3
3
2
0
2
6
2	3
2
0
2
2
3
0
2
=	





=	=
=	





=	=
=
=
=
=
=
=
=
=
∫
∫	∫
L	x
x
L	x
x
L	x
x	s
L	x
x	s
K
x
L
dx	x
L
EI
EI
L
dx
Px
EI	u	EI
L
dx	x	M
EI	Pu
κ
(A.15)
Finally the values of 	MP	
κ 	and 	MP	
κ 	are calculated.
4857	.	0	0000	.	1	4857	.	0 	=	=	= 	P	M	MP	
κ	
κ	
κ 	(A.16)
0000	.	1	0000	.	1	0000	.	1 	=	=	= 	P	K	KP	
κ	
κ	
κ 	(A.17)
A.2 Case (1.2)
For a simply supported beam subjected to a uniformly distributed load, as in Figure
A.2, the deflection along the beam (tabled in Samuelsson and Wiberg (1999)) is:
q
L
x
L
x
x
EI
L
x	u 	⋅




 +	−	= 	3
4
2
3	3 2
24
)	( 	(A.18)
where x is a coordinate in longitudinal direction with start point at one end of the
beam.

-- 152 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	137
Figure A.2 	Simply supported beam subjected to a uniformly distributed load.
The deflection of the system point, located in the middle of the beam, is:
EI
qL
L	x	u	u s 384
5
)	2	(
4
=	=	= 	(A.19)
By rearranging the terms in Equation (A.19) the expression for the load can be written
as:
s	u
L
EI
L	q 	3
5
384
=	⋅ 	(A.20)
and the moment distribution along the beam can be expressed as:
2
2	2
)	( 	x
q
x
qL
x	M 	−	= 	(A.21)
By means of Equation (A.1) the transformation factor for the mass can be calculated
as:
5039	.	0
9
1
8
4
7
4
6
2
5
4
3
1
25
256
2
5
16	1
0
6
9
5
8
4
7
3
6
2
5
3
3
0
2
3
4
2
3
=
=	




 +	−	+	+	−
⋅
=
=












 +	−	=
=
=
=
=
∫
L	x
x
L	x
x
M
L
x
L
x
L
x
L
x
L
x
x
L
dx
L
x
L
x
x
L	L
κ
(A.22)
Uniformly distributed load gives (see Equation (A.7)):
6400	.	0
25
16
5	2	2	5
16	2
5
16	1
0
3
5
2
4	2
2
0
3
4
2
3
=	=
=	




 +	−	=












 +	−	=
=
=
=
=
∫
L	x
x
L	x
x
P L
x
L
x	x
L
dx
L
x
L
x
x
L	L
κ
(A.23)
By inserting Equations (A.19) to (A.21) into Equation (A.8) the transformation factor
for the internal force is calculated.

-- 153 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	138
( 	)
6400	.	0
25
16
2	5	3	4	5
384
4	5
384
2	12	2
1
0
4	5	3	2
5
0
2	2
8	2
2	2
0
2
2
2
=	=	




 −	+
⋅	⋅
=
=	−
⋅	⋅
=
=




 −	−	=
=
=
=
=
=
=
∫
∫
L	x
x
L	x
x	s
s
L	x
x	s
K
Lx	x	x	L
L
dx	x	Lx
u	L
EIu
dx	x
q	qL
x
qL
EI	qLu
κ
(A.24)
Finally the values of 	MP	
κ 	and 	MP	
κ 	are calculated.
7873	.	0	6400	.	0	5039	.	0 	=	=	= 	P	M	MP	
κ	
κ	
κ 	(A.25)
0000	.	1	6400	.	0	6400	.	0 	=	=	= 	P	K	KP	
κ	
κ	
κ 	(A.26)
A.3 Case (2.1)
For a fixed beam subjected to a concentrated load, as in Figure A.3, the deflection
along the beam (tabled in Samuelsson and Wiberg (1999)) is:
2
0	for
4
3
48
)	(
3
2 	L
x	P
L
x
x
EI
L
x	u 	≤	<	⋅




 −	= 	(A.27)
where x is a coordinate in longitudinal direction with start point at one end of the
beam.
Figure A.3 	Fixed beam subjected to a concentrated load.
The deflection of the system point, located in the middle of the beam, is:
EI
PL
L	x	u	u s 192
)	2	(
3
=	=	= 	(A.28)
By rearranging the terms in Equation (A.28) the expression for the load can be written
as:
s	u
L
EI
P 	3
192
= 	(A.29)
and the moment distribution along the beam can be expressed as:

-- 154 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	139
2
0	for
8	2
)	( L
x
PL	Px
x	M 	≤	<	−	= 	(A.30)
By means of Equation (A.1) and due to symmetry the transformation factor for the
mass can be calculated as:
3714	.	0
7
16
6
24
5
9	32
4
3
4	2
2
0
2
7	6
5
5
2
0
2
	3
2
2
=	




 +	+	=
=












 −	=
=
=
=
=
∫
L	x
x
L	x
x
M
L
x
L
x
x
L
dx
L
x
x
L	L
κ
(A.31)
Concentrated load applied in the system point gives (see Equation (A.4)):
0000	.	1	=	P	
κ 	(A.32)
By inserting Equations (A.28) to (A.30) into Equation (A.6) the transformation factor
for the internal force is calculated.
0000	.	1
4	16	3	2
192
2	16	2
192
192
8	2
2
192
2
0
2	2	3
3
2
0
2
2
6
2	3
2
0
2
2
3
=	




 −	+	=
=




 −	+	=
=	




 −	=
=
=
=
=
=
=
∫
∫
L	x
x
L	x
x
L	x
x	s
K
Lx	x	L	x
L
dx
Lx	L
x
L
EI
EI
L
dx
PL	Px
EI	u	EI
L
κ
(A.33)
Finally the values of 	MP	
κ 	and 	MP	
κ 	are calculated.
3714	.	0	0000	.	1	3714	.	0 	=	=	= 	P	M	MP	
κ	
κ	
κ 	(A.34)
0000	.	1	0000	.	1	0000	.	1 	=	=	= 	P	K	KP	
κ	
κ	
κ 	(A.35)
A.4 Case (2.2)
For a simply supported beam subjected to a uniformly distributed load, as in Figure
A.4, the deflection along the beam (tabled in Samuelsson and Wiberg (1999)) is:
q
L
x
EI
L	x
x	u 	⋅	




 −	=
2	2	2
1
24
)	( 	(A.36)
where x is a coordinate in longitudinal direction with start point at one end of the
beam.

-- 155 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	140
Figure A.4 	Fixed beam subjected to a uniformly distributed load.
The deflection of the system point, located in the middle of the beam, is:
EI
qL
L	x	u	u s 384
)	2	(
4
=	=	= 	(A.37)
By rearranging the terms in Equation (A.37) the expression for the load can be written
as:
s	u
L
EI
L	q 	3
384
=	⋅ 	(A.38)
and the moment distribution along the beam can be expressed as:
2
2
2	12	2
)	( 	x
q	qL
x
qL
x	M 	−	−	= 	(A.39)
By means of Equation (A.1) the transformation factor for the mass can be calculated
as:
4063	.	0
9
1
2
1
7
6
3
2
5
1	16
2	1
16	1
0
8
9
7
8
6
7
5
6
4
5	2
0
2
2
2
2
2
=	




 +	−	+	+	=
=












 −	+	=
=
=
=
=
∫
L	x
x
L	x
x
M
L
x
L
x
L
x
L
x
L
x
L
dx
L
x
L
x
x
L	L
κ
(A.40)
Uniformly distributed load gives (see Equation (A.7)):
5333	.	0
5
1
2
1
3
1	16
2	1
16	1
0
4
5
3
4
2
3
0
2
2
2
2
=	




 +	−	=
=












 −	+	=
=
=
=
=
∫
L	x
x
L	x
x
P
L
x
L
x
L
x
L
dx
L
x
L
x
x
L	L
κ
(A.41)
By inserting Equations (A.37) to (A.39) into Equation (A.8) the transformation factor
for the internal force is calculated.

-- 156 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	141
5333	.	0
15
8
5	2	9
4
6	36
96
6	4
384
2	2
1
384
2	2
1
0
5	4	3	2	2	3	4
5
0
2
2
2
5
0
2
2
3
0
2
2
=	=	




 +	−	+	−	=
=




 −	−
⋅
=
=	




 −	=
=	




 −	=
=
=
=
=
=
=
=
=
∫
∫
∫
L	x
x
L	x
x
L	x
x	s	s
L	x
x	s
K
x	Lx	x	L	x	L	x	L
L
dx	x
L
Lx
L
dx	x
q
x
qL
EI	u	EIu
L
dx	x
q
x
qL
EI	qLu
κ
(A.42)
Finally the values of 	MP	
κ 	and 	MP	
κ 	are calculated.
7619	.	0	5333	.	0	4063	.	0 	=	=	= 	P	M	MP	
κ	
κ	
κ 	(A.43)
0000	.	1	5333	.	0	5333	.	0 	=	=	= 	P	K	KP	
κ	
κ	
κ 	(A.44)
A.5 Case (3.1)
For a cantilever beam subjected to a concentrated load, as in Figure A.5, the
deflection along the beam (tabled in Samuelsson and Wiberg (1999)) is:
P
L
x
EI
L	x
x	u 	⋅	




 −	= 3
1
2
)	(
2
(A.45)
where x is a coordinate in longitudinal direction with start point at the support.
Figure A.5 	Cantilever beam subjected to a concentrated load.
The deflection of the system point, located in the free end of the beam, is:
EI
PL
L	x	u	u s 3
)	(
3
=	=	= 	(A.46)
By rearranging the terms in Equation (A.46) the expression for the load can be written
as:
s	u
L
EI
P 	3
3
= 	(A.47)
and the moment distribution along the beam can be expressed as:

-- 157 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	142
PL	Px	x	M 	−	=	)	( 	(A.48)
By means of Equation (A.1) the transformation factor for the mass can be calculated
as:
2357	.	0
7
1
5
9
4
1
3
1
2
3	1
0
6
2
7
5
5
0
2
2
2
=	




 −	+	=
=




 




 −	=
=
=
=
=
∫
L	x
x
L	x
x
M
L
x
L
x
x
L
dx
L
x
L
x
L
κ
(A.49)
Concentrated load applied in the system point gives (see Equation (A.4)):
0000	.	1	=	P	
κ 	(A.50)
By inserting Equations (A.46) to (A.48) into Equation (A.6) the transformation factor
for the internal force is calculated.
( 	)
( 	)
0000	.	1
3
3
2
1
0
2	2
3
3
0
2	2
0
2
=	




 +	−	=
=	+	−	=
=	−	=
=
=
=
=
=
=
∫
∫
L	x
x
L	x
x	s
L	x
x	s
K
x	L	Lx
x
L
dx	L	Lx	x
EI	u
P
dx	PL	Px
EIP	u
κ
(A.51)
Finally the values of 	MP	
κ 	and 	MP	
κ 	are calculated.
2357	.	0	0000	.	1	2357	.	0 	=	=	= 	P	M	MP	
κ	
κ	
κ 	(A.52)
0000	.	1	0000	.	1	0000	.	1 	=	=	= 	P	K	KP	
κ	
κ	
κ 	(A.53)
A.6 Case (3.2)
For a cantilever beam subjected to a uniformly distributed load, as in Figure A.6, the
deflection along the beam (tabled in Samuelsson and Wiberg (1999)) is:
q
L
x
L
x
EI
L	x
x	u 	⋅




 +	−	=
2
2
2	2	2 4
6
24
)	( 	(A.54)
where x is a coordinate in longitudinal direction with start point at the support.

-- 158 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	143
Figure A.6 	Cantilever beam subjected to a uniformly distributed load.
The deflection of the system point, located in the free end of the beam, is:
EI
qL
L	x	u	u s 8
)	(
4
=	=	= 	(A.55)
By rearranging the terms in Equation (A.37) the expression for the load can be written
as:
s	u
L
EI
L	q 	3
8
=	⋅ 	(A.56)
and the moment distribution along the beam can be expressed as:
2
2
2	2
)	( 	x
q	qL
qLx	x	M 	−	−	= 	(A.57)
By means of Equation (A.1) the transformation factor for the mass can be calculated
as:
2568	.	0
9
1	4	8
5
36
9
1
4	6
3
1	1
0
8
9
7
8
6
7
5
6
4
5
0
2
2
2
2
2
=	




 +	−	+	+	=
=












 −	+	=
=
=
=
=
∫
L	x
x
L	x
x
M
L
x
L
x
L
x
L
x
L
x
L
dx
L
x
L
x
x
L	L
κ
(A.58)
Uniformly distributed load gives (see Equation (A.7)):
4000	.	0
15
1
3
1
3
2	1
4	6
3
1
0
4
5
3
4
2
3
0
2
2
2
2
=	




 +	−	=
=












 −	+	=
=
=
=
=
∫
L	x
x
L	x
x
P
L
x
L
x
L
x
L
dx
L
x
L
x
L
x
L
κ
(A.59)
By inserting Equations (A.55) to (A.57) into Equation (A.8) the transformation factor
for the internal force is calculated.

-- 159 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	144
4000	.	0
5
2
20	4	2	2	4
8
4	2
3
4
8
2	2
8
2	2
1
0
5	4	3	2	2	3	4
5
0
4
3
2	2
3
4
5
0
2	2	2
5
0
2
2
2
=	=	




 +	−	+	−	=
=




 +	−	+	−	=
=




 −	−	=
=




 −	−	=
=
=
=
=
=
=
=
=
∫
∫
∫
L	x
x
L	x
x
L	x
x
L	x
x	s
K
x	Lx	x	L	x	L	x	L
L
dx
x
Lx
x	L
x	L
L
L
dx
x	L
Lx
L
dx	x
q	qL
qLx
EI	qLu
κ
(A.60)
Finally the values of 	MP	
κ 	and 	MP	
κ 	are calculated.
6420	.	0	4000	.	0	2568	.	0 	=	=	= 	P	M	MP	
κ	
κ	
κ 	(A.61)
0000	.	1	4000	.	0	4000	.	0 	=	=	= 	P	K	KP	
κ	
κ	
κ 	(A.62)

-- 160 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	145
APPENDIX B 	Transformation 	factors 	for 	ideal
plastic material
The transformation factors for ideal plastic material are derived in Sections 6.2.1,
6.2.2 and 6.2.3.2:
dx
t	u
t	x	u
L
L	x
x 	s
M 	∫
=
=






=
0
2
)	(
)	,	(	1
κ 	(B.1)
∫
∫ =
=
=
=
= 	L	x
x
L	x
x 	s
P
dx	t	x	q
dx	t	x	q
t	u
t	x	u
0
0
)	,	(
)	,	(
)	(
)	,	(
κ 	(B.2)
∫
∫
∫ 	=
=
=
=
=
=
′′
=	′′	= 	L	x
x
L	x
x
s
L	x
x	s	m
K
dx	t	x	q
dx	x	u	M
u
dx	x	u	M
u	R
0
0
0 	)	,	(
)	(
1
)	(
1
κ 	(B.3)
B.1 Case (1.1) and (1.2)
For a simply supported beam one plastic hinge will develop in the middle of the beam
(the system point) if the load is symmetrical. The mechanisms in case of a
concentrated and uniformly distributed load respectively can be seen in Figure B.1.
Figure B.1 	Simply supported beam subjected to a) concentrated load b) uniformly
distributed load.
The deflection 	)	(x	u 	along the beam can be expressed as:
2	for
2
)	( 	L	x	x
L
u	x	u 	s 	<	= 	(B.4)
a) 	L
u s	4
L
u s	2
q	P
L
u s	4
L
u s	2
b)

-- 161 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	146
where 	s	u 	is the displacement of the system point, x is a coordinate in longitudinal
direction of the beam with start point at one end of the beam and L is the length of the
beam.
The first derivative of 	)	(x	u 	is:
L
u	x	u 	s
2
)	( 	=	′ 	2	for 	L	x < 	(B.5)
Equation (B.1) gives the expression of the transformation factor for the mass:
dx
t	u
t	x	u
L
L	x
x 	s
M 	∫
=
=






=
0
2
)	(
)	,	(	1
κ 	(B.6)
By means of Equation (B.4) this expression can be rewritten as:
3
1	2	2 2
0
2
=	





= 	∫
=
=
dx
L
x
L
L	x
x
M	
κ 	(B.7)
The value of the transformation factor for mass is the same for both case (1.1) and
(1.2) in case of ideal plastic material.
The transformation factor for the load is (see Equation (B.2)):
∫
∫ =
=
=
=
= 	L	x
x
L	x
x 	s
P
dx	t	x	q
dx	t	x	q
t	u
t	x	u
0
0
)	,	(
)	,	(
)	(
)	,	(
κ 	(B.8)
In case of concentrated load acting in the system point Equation (B.8) can be written
as:
( 	)
( 	)
0000	.	1
1
)	,	(
)	,	(
)	(
)	,	(
0
2
2 =	=	=
∫
∫
=
=
=
=
+
−
s
s
L	x
x
L	x
L	x 	s
P u
P	u
P
dx	t	x	q
dx	t	x	q
t	u
t	x	u
κ 	(B.9)
since 	P	dx	t	x	q
L	x
x
=	∫
=
=0
)	,	( 	and 	0	)	,	( 	=	t	x	q 	when 	2	L	x ≠
By means of Equation (B.4) the expression for transformation factor in Equation (B.8)
in case of a uniformly distributed load can be written as:

-- 162 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	147
∫
∫ =
=
=
=
	= 	L	x
x
L	x
x
P
dx	t	x	q
dx	t	x	q
L
x
0
2
0
)	,	(
)	,	(
2
2
κ 	(B.10)
The expression for the transformation factor for the internal resisting force, when
having an ideal plastic material is (see Equation (B.3)):
∫
=
=
′′	=
L	x
x	s	m
K 	dx	x	u	M
u	R 	0
)	(
1
κ 	(B.11)
The curvature 	)	(x	u ′′ 	is zero everywhere in the beam except in the system point
(which is located in the middle of the beam) where the moment has a known constant
value, Equation (B.11) can be written as:
( 	)
( 	)
( 	)
( 	)
∫	∫
+
−
+
−
′′	=	′′	=
2
2
2
2
)	(	)	(
1 L
L	s	m
pl
L
L	s	m
K 	dx	x	u
u	R
M
dx	x	u	M
u	R
κ 	(B.12)
The integral of the curvature in the system point is one way to express the change of
the angle in this point. Due to symmetry the change of angle in the system point is
twice the change of angle over the supports.
( 	)
( 	)
L
u
L	u	u	L	u	dx	x	u s
L
L
4	)	(	2	)	0	(	2	)	2	(	)	(
2
2
=	′	⋅	=	′	⋅	=	′	=	′′∫
+
−
(B.13)
The maximum internal resistance 	m	R 	is equal to the external load needed to create the
mechanism, 	pl	P , (or 	L	q pl ⋅ 	for uniformly distributed load) (see
Figure B.1). The moment in the system point is equal to the plastic moment, 	pl	M 	.
B.1.1 Case (1.1)
For a simply supported beam subjected to a concentrated load (see
Figure B.1.a) the plastic moment is:
4
L	P
M pl
pl = 	(B.14)
Equation (B.9) gives the transformation factor for the load for case (1.1).
0000	.	1	=	P	
κ 	(B.15)

-- 163 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	148
Equations (B.13) and (B.14) inserted into Equation (B.12) gives the transformation
factor for the internal resisting force for case (1.1).
( 	)
( 	)
0000	.	1
4
1
4
)	(
2
2
=
=	=	=
⋅
=	′′	= 	∫
+
− 	pl
pl
m
pl	s
s	m
pl
L
L	s	m
pl
K P
P
R
P
L
u
u	R
L	P
dx	x	u
u	R
M
κ (B.16)
B.1.2 Case (1.2)
For a simply supported beam subjected to a uniformly distributed load (see
Figure B.1.b) the plastic moment is:
8
2
L	q
M pl
pl = 	(B.17)
Equation (B.10) gives the transformation factor for the load for case (1.2).
2
1
2
4
4
)	,	(
)	,	(
2
2 	2
0
2
2
2
0
0
2
0 =	





=
⋅
=	=
=
=
=
=
=
=
=
=
∫
∫
∫ 	L	x
x
L	x
x
L	x
x
L	x
x
P
x
L	L	q
dx	x
L
q
dx	t	x	q
dx	t	x	q
L
x
κ 	(B.18)
Equation (B.13) and (B.17) inserted in Equation (B.12) gives the transformation
factor for the internal resisting force for case (1.2).
( 	)
( 	)
2
1
2
1	4	1
8
)	(
2	2
2
=	=	=	′′	= 	∫
+
− 	L	q
L	q
L
u
u	R
L	q
dx	x	u
u	R
M
pl
pl	s
s	m
pl
L
L	s	m
pl
K	
κ 	(B.19)
B.2 Case (2.1) and (2.2)
For a beam fixed at both ends there will be one plastic hinge in the middle of the
beam (the system point) and one hinge at each support if the load is symmetrical. The
mechanism can be seen in Figure B.2.

-- 164 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	149
Figure B.2 	Fixed beam subjected to a) concentrated load b) uniformly distributed
load.
The deflection 	)	(x	u 	along the beam can be expressed as:
2	for
2
)	( 	L	x	x
L
u	x	u 	s 	<	= 	(B.20)
where 	s	u 	is the displacement of the system point, x is a coordinate in longitudinal
direction of the beam with start point at one end of the beam and L is the length of the
beam.
And the first derivative of 	)	(x	u 	is:
L
u	x	u 	s
2
)	( 	=	′ 	(B.21)
Since the mechanisms in case (2.1) and (2.2) are the same as in case (1.1) and (1.2)
respectively the transformation factors for the mass and the load calculated in
Appendix B.1 can be used. The transformation factor for the mass is than:
3
1	2	2 2
0
2
=	





= 	∫
=
=
dx
L
x
L
L	x
x
M	
κ 	(B.22)
The value of the transformation factor for mass is the same for both case (2.1) and
(2.2). The transformation factor of the load depends on the shape of the load and
differs in case (2.1) and (2.2).
The expression for the transformation factor for the internal resisting load when
having an ideal plastic material is (see Equation (6.42)).
∫
=
=
′′	=
L	x
x	s	m
K 	dx	x	u	M
u	R 	0
)	(
1
κ 	(B.23)
The curvature 	)	(x	u ′′ 	is zero everywhere in the beam except in the hinges where the
moment has a known constant value. Equation (B.23) can be written as:
b) L
u s	4
L
u s	2
a) L
u s	4
L
u s	2
q	P

-- 165 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	150
( 	)
( 	)
( 	)
( 	)







 ′′	+	′′	+	′′	=
=







 ′′	+	′′	+	′′	=
∫	∫	∫
∫	∫	∫
+
−
+
−
+
−
+
−
+
−
+
−
L
L
L
L	s	m
pl
L
L
L
L	s	m
K
dx	x	u	dx	x	u	dx	x	u
u	R
M
dx	x	u	M	dx	x	u	M	dx	x	u	M
u	R
)	(	)	(	)	(
)	(	)	(	)	(
1
2
2
0
0
2
2
0
0
κ
(B.24)
The integral of the curvature in the hinges is one way to express the change of the
angle in these points. Due to symmetry the change of angle in the system point is
twice the change of angle over the supports.
( 	)
( 	)
L
u
L	u	u	L	u	dx	x	u s
L
L
4	)	(	2	)	0	(	2	)	2	(	)	(
2
2
=	′	⋅	=	′	⋅	=	′	=	′′∫
+
−
(B.25)
The maximum internal resistance 	m	R 	is equal to the external load needed to create the
mechanism, 	pl	P , (or 	L	q pl ⋅ 	for uniformly distributed load) (see Figure B.2). The
moment in the system point is equal to the plastic moment, 	pl	M 	.
B.2.1 Case (2.1)
For a beam subjected to a concentrated load (see Figure B.2.a) the plastic moment is:
8
L	P
M pl
pl = 	(B.26)
The transformation factor for the load is the same as in case (1.1).
0000	.	1	=	P	
κ 	(B.27)
Equation (B.25) and (B.26) inserted in Equation (B.23) gives the transformation
factor for the internal resisting force for case (2.1).
( 	)
( 	)
0000	.	1
2	4	2	1
8
)	(	)	(	)	(
2
2
0
0
=	=	=	




 +	+	=
=







 ′′	+	′′	+	′′	= 	∫	∫	∫
+
−
+
−
+
−
pl
pl
m
pl	s	s	s
s	m
pl
L
L
L
L	s	m
pl
K
P
P
R
P
L
u
L
u
L
u
u	R
L	P
dx	x	u	dx	x	u	dx	x	u
u	R
M
κ
(B.28)

-- 166 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	151
B.2.2 Case (2.2)
For a beam subjected to a uniformly distributed load (see Figure B.2.b) the plastic
moment is:
16
2
L	q
M pl
pl = 	(B.29)
The transformation factor for the load is the same as in case (1.2).
2
1
=	P	
κ 	(B.30)
Equation (B.25) and (B.29) inserted in Equation (B.23) gives the transformation
factor for the internal resisting force for case (2.2).
( 	)
( 	)
2
1
2	2
2	4	2	1
16
)	(	)	(	)	(
2
2
2
0
0
=	=	=	




 +	+	=
=







 ′′	+	′′	+	′′	= 	∫	∫	∫
+
−
+
−
+
−
L	q
L	q
R
L	q
L
u
L
u
L
u
u	R
L	q
dx	x	u	dx	x	u	dx	x	u
u	R
M
pl
pl
m
pl	s	s	s
s	m
pl
L
L
L
L	s	m
pl
K	
κ
(B.31)
B.3 Case (3.1) and (3.2)
For a cantilever beam there will be one plastic hinge at the support. The mechanism
can be seen in
Figure B.3.
Figure B.3 	Cantilever 	beam 	subjected 	to 	a) 	concentrated 	load 	b) 	uniformly
distributed load.
The deflection 	)	(x	u 	along the beam can be expressed as:
x
L
u
x	u s
=	)	( 	(B.32)
where 	s	u 	is the displacement of the system point, x is a coordinate in longitudinal
direction of the beam with start point at one end of the beam and L is the length of the
beam.
L
u s
L
u s
b)	a)

-- 167 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	152
And the first derivative of 	)	(x	u 	is:
L
u
x	u s
=	′ 	)	( 	(B.33)
Equation (6.18) gives the expression of the transformation factor for the mass:
dx
t	u
t	x	u
L
L	x
x 	s
M 	∫
=
=






=
0
2
)	(
)	,	(	1
κ 	(B.34)
By means of Equation (B.32) this expression can be rewritten as:
3
1
3
1	1
0
3
3
0
2
=	





=	





=
=
=
=
=
∫
L	x
x
L	x
x
M
x
L
dx
L
x
L
κ 	(B.35)
The value of the transformation factor for mass is the same for both case (3.1) and
(3.2).
The transformation factor for the load is (see Equation (6.22)):
∫
∫ =
=
=
=
= 	L	x
x
L	x
x 	s
P
dx	t	x	q
dx	t	x	q
t	u
t	x	u
0
0
)	,	(
)	,	(
)	(
)	,	(
κ 	(B.36)
In case of concentrated load acting in the system point Equation (B.36) can be written
as:
0000	.	1
1
)	,	(
)	,	(
)	(
)	,	(
0
=	=	=
∫
∫
=
=
=
=
+
−
s
s
L	x
x
L	x
L	x 	s
P u
P	u
P
dx	t	x	q
dx	t	x	q
t	u
t	x	u
κ 	(B.37)
since 	P	dx	t	x	q
L	x
x
=	∫
=
=0
)	,	( 	and 	0	)	,	( 	=	t	x	q 	when 	L	x ≠
By means of Equation (B.32) the expression for transformation factor in Equation
(B.36) in case of a uniformly distributed load can be written as:
∫
∫=
=
=
=
= 	L	x
x
L	x
x
P
dx	t	x	q
dx	t	x	q
L
x
0
0
)	,	(
)	,	(
κ 	(B.38)

-- 168 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	153
The expression for the transformation factor for the internal resisting load when
having an ideal plastic material is (see Equation (6.42)):
∫
=
=
′′	=
L	x
x	s	m
K 	dx	x	u	M
u	R 	0
)	(
1
κ 	(B.39)
The curvature 	)	(x	u ′′ 	is zero everywhere in the beam except in the plastic hinge where
the moment has a known constant value. Equation (B.39) can be written as:
∫	∫
+
−
+
−
′′	=	′′	=
0
0
0
0
)	(	)	(
1 dx	x	u
u	R
M
dx	x	u	M
u	R 	s	m
pl
s	m
K	
κ 	(B.40)
The integral of the curvature in the hinges is one way to express the change of the
angle in this point.
L
u
u	dx	x	u s
=	′	=	′′∫
+
−
)	0	(	)	(
0
0
(B.41)
The maximum internal resistance 	m	R 	is equal to the external load needed to create the
mechanism, 	pl	P , (or 	L	q pl ⋅ 	for uniformly distributed load) (see
Figure B.3). The moment in the system point is equal to the plastic moment, 	pl	M 	.
B.3.1 Case (3.1)
For a cantilever beam subjected to a concentrated load (see
Figure B.3.a) the plastic moment is:
L	P	M 	pl	pl = 	(B.42)
Equation (B.37) gives the transformation factor for the internal resisting force for case
(3.1).
0000	.	1	=	P	
κ 	(B.43)
Equation (B.42) and (B.44) inserted in Equation (B.40) gives the transformation
factor for the internal resisting force for case (3.1).
0000	.	1	)	(
0
0
=	=	=	′′	= 	∫
+
− 	pl
pl	s
s	m
pl
s	m
pl
K P
P
L
u
u	R
L	P
dx	x	u
u	R
M
κ 	(B.44)

-- 169 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	154
B.3.2 Case (3.2)
For a beam subjected to a concentrated load (see
Figure B.3.b) the plastic moment is:
2
2
L	q
M pl
pl = 	(B.45)
Equation (B.38) gives the transformation factor for the internal resisting force for case
(3.2).
2
1	1
)	,	(
)	,	(
0
0
0 	=	=	= 	∫
∫
∫ 	=
=
=
=
=
=
L	x
x
L	x
x
L	x
x
P 	qdx
L
x
qL
dx	t	x	q
dx	t	x	q
L
x
κ 	(B.46)
Equation (B.42) and (B.45) inserted in Equation (B.40) gives the transformation
factor for the internal resisting force for case (4.2.5).
2
1
2
1	1
2
)	( 	2
2	2	0
0
=	=	=	′′	= 	∫
+
− 	L	q
L	q
L
u
u	R
L	q
dx	x	u
u	R
M
pl
pl	s
s	m
pl
s	m
pl
K	
κ 	(B.47)

-- 170 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	155
APPENDIX C 	Comparison 	with 	transformation
factor according to Granström and
Balazs
Granström 	(1958) 	and 	Balazs 	(1997) 	have 	used 	a 	different 	definition 	of 	the
transformation factor for the internal resisting load than used in this report. The
definition for the ideal plastic case according to Granström and Balazs (here called
B	G
K
/
κ 	) is:
∫
=
=
′′	=
1
0 	*
/ )	(
)	(
8
1
ζ
ζ
ζ
	ζ
	ηζ
κ 	d
M
M	B	G
K 	(C.1)
where 	L	x	=
	ζ 	relation between coordinate x and the length of the beam
)	(
ζ	M 	moment
s	u
u 	)	(
)	(
ζ
ζ	η 	= 	relation between deflection and the deflection of the system
point
*	M 	moment in section of comparison (often coinciding with the
system point)
In order to make it possible to compare the two different expressions for the
transformation factor the expression of 	K	
κ 	in ideal plastic case (see Equation (6.42))
can be rewritten as:
∫
∫	∫
=
=
=
=
=
=
′′	=






′′	=	′′
=
=
=	′′	=	′′	=
1
0
2
1
0	0
)	(	)	(
1
)	(	)	(
)	(	)	(
)	(	)	(
1
)	(	)	(
1
ζ
ζ
ζ
ζ
ζ
	ζ
	η
	ζ
ζ
	η
ζ
ζ
	κ
d	M
L	R	L	u	x	u
L	M	x	M
d	x	u	x	M
u	R
dx	x	u	x	M
u	R
m	s
s	m
L	x
x	s	m
K
(C.2)
The relation between B	G
K
/
κ 	and 	K	
κ 	is then:
*
1
0
1
0 	*
/
8
)	(	)	(
1
)	(
)	(
8
1
M
LR
d	M
L	R
d
M
M
m
m
K
B	G
K =
′′
′′
=
∫
∫
=
=
=
=
ζ
ζ
ζ
ζ 
ζ
	ζ
	η
	ζ
ζ
	ζ
	ηζ
κ
κ (C.3)
Equation (C.3) can be rewritten as:

-- 171 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	156
m
B	G
K	K LR
M *	/ 	8
⋅	=
κ
	κ 	(C.4)
The equation of motion used in this report, for a SDOF system with ideal plastic
material, is:
)	(t	P	R	u	M 	P	m	K	s	M	
κ	
κ	
κ 	=	+	&& 	(C.5)
The differential equation according to Granström (1958) and Balazs (1997) can by use
of Equations (C.4) and (C.5) be written as :
)	(
8 	*	/ t	P
L
M
u	M 	P
B	G
K	s	M	
κ
	κ
	κ 	=	⋅	+	&& 	(C.6)

-- 172 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	157
APPENDIX D 	Input data in analyses
The cross-section of the reinforced concrete beam, shown in Figure D.1, is chose in
order to fulfil minimum requirements in the Swedish shelter regulation described in
Section 12.3.
Figure D.1 	Cross-section of reinforced concrete beam.
Equation (9.1) gives the limitations of the amount of reinforcement and for this beam
the amount of reinforcement close to 	%	30	.	0	=
	ρ 	are wanted. For this amount the total
area of reinforcement 	s	A 	is:
2
mm	900	=	⋅	⋅	= 	d	b	As	
ρ 	(D.1)
In order to have even values 	200	16 s	
φ 	is used (meaning reinforcement bars of
diameter 16 mm with spacing 200 mm) the total area of reinforcement per meter is:
m	mm	1005 2
=	s	A 	(D.2)
and by use of Equation (9.1) the amount of reinforcement is calculated.
%)	1	.	1	%	335	.	0	%	14	.	0	(	%	335	.	0 	<	<	=
⋅
= d	b
As
ρ 	(D.3)
The beam is double reinforced (meaning that reinforcement bars are placed both in
tensile and compression zone). The area of the tensile steel is chosen to be the same as
for the compressed steel.
m	mm	1005 2
=	′s	A 	(D.4)
The support moment is assumed to be equal to the maximum field moment.
f	s 	M	M 	= 	(D.5)
The characteristic values of the material properties of interest for concrete C25/30 and
reinforcement steel B500B are shown in Table 7.1 and Table D.2 respectively.
m	35	.	0	=	h
m	0	.	1	=	b
m	30	.	0	=	d
s	A 	- area of reinforcement in tensile zone
s	A′ - area of reinforcement in compression zone

-- 173 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	158
Table D.1 	Material properties for concrete quality C25/30
Table D.2 	Material properties for reinforcement quality B500B
D.1 Moment capacities for the different stadiums
In order to get the material response curve (load-deflection curve) the values of the
load when the material cracks 	cr	P , when the reinforcement starts to yield 	pl	P 	and the
ultimate 	load 	u	P 	must 	be 	calculated. 	In 	case 	of 	uniformly 	distributed 	load
L	q	P 	cr	cr 	⋅	= 	, 	L	q	P 	pl	pl 	⋅	= 	and 	L	q	P 	u	u 	⋅	= 	. Due to the Swedish shelter regulations all
calculations are preformed in ultimate limit state.
In Section 12.2.2 the relation between the design and characteristic values of the
material properties in ultimate limit state for concrete and steel are presented as:
n	m
k
d
f
f
γ
	ηγ
= 	(D.6)
n	m
k
d
E
E
γ
	ηγ
= 	(D.7)
yk	st 	f	f 	9	.	0	= 	(D.8)
where the values of the safety factors (here meaning 	m	
γ	
η ⋅ 	and 	n	
γ 	) are 1.0 in all cases
except when calculating the design value of the strength parameters for concrete, then
η	
γ m 	equals 1.2. The compression strength and the modulus of elasticity of the
C25/30
Compressive strength, 	cck	f 	24 MPa
Tensile strength, 	ctk	f 	1.7 MPa
Modulus of elasticity, 	ck	E 	31 GPa
B500B
Yielding stress, 	yk	f 	500 MPa
Modulus of elasticity, 	sk	E 	200 GPa

-- 174 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	159
concrete are multiplied with a factor 1.1 and 1.2 respectively in case of accidental and
dynamic load.
ccd
accidental
ccd 	f	f 	1	.	1	= 	(D.9)
n	m
ck	dynamic
cd
E
E
γ
	ηγ
⋅
= 2	.	1 (D.10)
• 	Concrete C25/30:
22
2	.	1
24
1	.	1
2	.	1
1	.	1 	=	





=	





= cck
ccd
f
f 	MPa
417	.	1
2	.	1 =	= ctk
ctd
f
f 	MPa
2	.	37	2	.	1 	=	= 	ck	cd 	E	E 	GPa
• 	Reinforcing steel B500B:
450	500	9	.	0	9	.	0 	=	⋅	=	⋅	= 	yk	st 	f	f 	MPa
200	=	= 	sk	sd 	E	E 	GPa
The factor
α is defined in Equation (12.13) and is in this case: 	38	.	5
2	.	37
200 =	=
	α
D.1.1 Stadium I
Due to the crack criteria in Section 12.2.1.4 the beam remains uncracked as long as
the maximum value of the tensile stress in the most exposed cross-section fulfils
ζσ cbt
ct
f
< 	(D.11)
meaning that the cross-section cracks when:
ζ
σ cbt
ct
f
=	max	, 	(D.12)
where
ζ 	is 1.0 and the flexural strength is calculated as:
ct	cbt 	f	k	f 	⋅	= 	(D.13)

-- 175 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	160
4
4	.	0
6	.	0 h
k 	+	= 	and 	45	.	1	0	.	1 	≤	≤ k
Applied on this example the value of the flexural strength is:
12	.	1
35	.	0
4	.	0
6	.	0 4 =	+	=	k
59	.	1	417	.	1	12	.	1 	=	⋅	=	cbt	f 	MPa
(D.14)
By use of Equation (D.12) the value of the tensile stress when the cross-section cracks
can be calculated.
59	.	1
0	.	1
59	.	1
max	, 	=	=	=
ζ
σ cbt
ct
f MPa 	(D.15)
The 	equivalent 	area 	for 	a 	cross-section 	in 	stadium 	I 	is 	calculated 	as 	in
Equation (12.12) and for a rectangular cross-section with reinforcement in the
compressed zone the equation can be written and calculated as:
( 	) 	( 	) 	=	⋅	⋅	−	+	⋅	⋅	−	+	=
=	−	+	′	−	+	⋅	=
−	− 	6	6 10	1005	1	38	.	5	10	1005	1	38	.	5	35	.	0
)	1	(	)	1	( 	s	s	I 	A	A	h	b	A	
α	
α
=0.359 m2
(D.16)
The distance to the centre of gravity, measured from the most compressed edge of the
cross-section is, due to symmetry:
175	.	0
2
35	.	0
2 =	=	= h
x CG 	m 	(D.17)
The moment of inertia for the rectangular cross-section is calculated by means of
Equation (12.23).
( 	) 	( 	) 	=	−	−	+	′	−	−	+	= 2	2
3
)	1	(	)	1	(
12 CG	s	CG	s	I 	x	d	A	d	x	A
bh
I	
α
	α
( 	) 	( 	)
( 	) 	( 	) 	=	−	⋅	⋅	−
+	−	⋅	⋅	−	+	=
−
−
2	6
2	6
3
175	.	0	3	.	0	10	1005	1	38	.	5
05	.	0	175	.	0	10	1005	1	38	.	5
12
35	.	0
3
10	71	.	3 −
⋅	= 	m4
(D.18)
By rearranging the terms in Equation (12.22) and using the concrete stress in the
tensioned edge for which the cross-section cracks 	max	,	ct	
σ 	(see Equation (D.15)) the

-- 176 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	161
moment for which the cross-section cracks 	cr	M 	can be calculated. The distance z
from the neutral layer to the tensioned edge is 	CG	x	h	z 	−	= 	.
=
−
⋅	⋅	⋅
=
⋅
=
−
175	.	0	35	.	0
10	71	.	3	10	59	.	1 3	6
max	,
z
I
M I	ct
cr
σ
64	.	33	= 	kNm
(D.19)
The load for which the cross-section cracks can now easily be calculated, however,
the expressions depend on boundary conditions and type of load.
D.1.2 Stadium II
Once the beam has cracked the calculations is made in stadium II as long as no
yielding take place in the material.
Figure D.2 	Strain and stress distribution in cracked rectangular cross-section of
reinforced concrete subjected to pure bending.
For cross-section subjected to pure bending the neutral layer coincides with the centre
of gravity of the equivalent cross-section.
CG	x	x = 	(D.20)
By use of Equation (12.28) the distance from the most compressed edge to the neutral
layer is calculated.
M x
z
cc	A
cc	
σ
Fictive concrete stress
α
σ
σ s
s	c z 	=	)	(
cc	
ε
s	
ε
s	
ε ′

-- 177 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	162
( 	)	( 	) 	( 	)	( 	)	1
2
1
2	2 ⋅	+	′	⋅	′	−	−	+	′	−	+ 	d	A	d	A
b
x	A	A
b
x 	s	s	s	s	
α
	α
	α
	α
⇒
( 	)
( 	) ( 	)	( 	)
( 	)
( 	)
( 	)	( 	)
m	0517	.	0
3	.	0	38	.	5	05	.	0	1	38	.	5
0	.	1
10	1005	2
0	.	1
10	1005	38	.	5	10	1005	1	38	.	5
0	.	1
10	1005	38	.	5	10	1005	1	38	.	5
1
2	1
1
6
2	6	6
6	6
2
=
=	⋅	+	⋅	−
⋅	⋅
+
+




 	⋅	⋅	+	⋅	⋅	−
+
⋅	⋅	+	⋅	⋅	−
−	=
=	⋅	+	′	⋅	′	−	+	




 	+	′	−
+
+	′	−
−	=
−
−	−
−	−
d	A	d	A
b	b
A	A
b
A	A
x
s	s
s	s
s	s
α
	α
α
	α
α
	α
(D.21)
The 	equivalent 	area 	of 	the 	cracked 	cross-section 	is 	calculated 	by 	means 	of
Equation (12.14).
( 	) 	( 	) 	=	+	′	−	+	⋅	=	+	′	−	+	= 	s	s	s	s	cc	II 	A	A	x	b	A	A	A	A	
α	
α	
α	
α 	1	1
( 	) 2	6
6
m	0615	.	0	10	1005	38	.	5
10	1005	1	38	.	5	0517	.	0	0	.	1
=	⋅	⋅
+	⋅	⋅	−	+	⋅	=
−
− 	(D.22)
By use of Equation (12.29) the moment of inertia for the cracked cross-section is
calculated.
( 	) 	( 	) 	( 	) 	=	−	+	′	−	′	−	+	= 2	2
3
1
3 x	d	A	d	x	A
bx
I 	s	s	II	
α
	α
( 	) 	( 	)
( 	) 	=	−	⋅	⋅
+	−	⋅	⋅	−	+	=
−
−
2	6
2	6
3
0517	.	0	3	.	0	10	1005	38	.	5
05	.	0	0517	.	0	10	1005	1	38	.	5
3
0517	.	0
4
10	79	.	3 −
⋅	= 	m4
(D.23)
It is assumed that the steel will start to yield before concrete does (always assumed
even though it might not be true). When the yielding starts in the reinforcement bars
the stress in the steel is equal to the yield stress.
st	s 	f	=
	σ 	(D.24)
the concrete is correct.

-- 178 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	163
By use of Equation (12.31) the fictive concrete stress at the steel level, 	)	( s	c z	
σ 	, when
the reinforcement starts to yield can be calculated.
7	.	83
38	.	5
10	450
)	(
6
=
⋅
=	=	=
α
	α
σ
σ st	sy
s	c
f
z 	MPa 	(D.25)
By rearranging the terms in Equation (12.19) and using the concrete stress at the steel
level when the steel starts to yield (see Equation (D.25)) the moment for which the
yielding starts 	spl	M 	can be calculated. The distance 	s	z 	from the neutral layer to the
steel level is 	CG	s 	x	d	z 	−	= 	.
=
−
⋅	⋅	⋅
=
⋅
=
−
0517	.	0	3	.	0
10	79	.	3	10	7	.	83	)	( 4	6
s
II	s	c
spl z
I	z
M
σ
8	.	127	= 	kNm
(D.26)
The load for which the steel starts to yield can now easily be calculated, however, the
expressions depend on boundary conditions and type of load. For a beam subjected to
D.1.3 	Stadium III
The stress and strain distributions, when using simplified stress block, in the cross-
section for stadium III are shown in Figure D.3 where
α 	and	
β 	are 0.8 and 0.4
respectively.
Figure D.3 	Strain and stress distribution in cracked rectangular cross-section of
reinforced concrete subjected to pure bending and where the maximum
value of the concrete strain in the compressed edge is reached. (When
using simplified stress block).
The tensile steel is assumed to have a plastic behaviour when the ultimate state is
reached meaning that the strain in the steel 	s	
ε 	is higher than the value of the strain
when yielding starts 	sy	
ε 	:
sy	s	
ε	
ε 	≥ 	(D.27)
c	F
M x
z
cc	A
cc	f	⋅
	α	cu	
ε
s	
ε 	s	F
cc	f	⋅
	β
s	
ε ′
s	F′

-- 179 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	164
As soon as the value of the strain when yielding starts 	sy	
ε 	is reached in the
reinforcement bars the stress in the bars 	s	
σ 	is equal to the yield stress 	st	f 	:
st	s 	f	=
	σ 	(D.28)
By means of Hook’s law the force 	s	F in the steel is calculated as:
25	.	452	10	1005	10	450 6	6 =	⋅	⋅	⋅	=	⋅	= −
s	st	s 	A	f	F 	kN 	(D.29)
The reinforcement in the compressed zone is assumed not to yield and has therefore
elastic behaviour.
s	s	s 	E	
ε	
σ 	′	⋅	=	′ 	(D.30)
Where the strain in the compressed steel 	s	
ε ′ is calculated in the same way as 	s	
ε 	in
Equation (12.32). The ultimate concrete strain 	cu	
ε 	is reached in the compressed edge.
( 	) cu	s x
d	x
ε
	ε ′	−
=	′ 	(D.31)
By means of Hook’s law the force 	s	F ′ in the steel is calculated as:
( 	)
( 	)
kN
175	.	35
5	.	703
10	1005	10	5	.	3
05	.	0
10	200 6	3	9
x
x
x
A
x
d	x
E	A	E	A	F 	s	cu	s	s	s	s	s	s	s
−	=
=	⋅	⋅	⋅
−
⋅	=
=	′	⋅
′	−
⋅	=	′	⋅	′	⋅	=	′	⋅	′	=	′
−	−
ε
	ε
	σ
(D.32)
The resulting force in the compressed concrete is calculated by use of Equation
(12.38).
x	x	x	b	f	F 	cc	c 	⋅	=	⋅	⋅	⋅	=	⋅	⋅	⋅	= 	17600	8	.	0	0	.	1	10	22 6
α 	kN 	(D.33)
Horizontal equilibrium conditions gives:
s	s	c 	F	F	F 	=	′	+
( 	)
m	0381	.	0
17600
175	.	35
17600	2
25	.	251
17600	2
25	.	251
0	175	.	35	25	.	452	5	.	703	17600
25	.	452
175	.	35
5	.	703	17600
2
2
=	+	





⋅
+
⋅
−	=
=	−	−	+
=	−	+
x
x	x
x
x
(D.34)

-- 180 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	165
Now control that the assumptions made in Equations (D.28) and (D.30) are correct.
The ultimate strain of concrete is 3
10	5	.	3 −
⋅	=	cu	
ε 	and the steel strains are calculated by
use of Equation (12.37).
0	.	24	10	5	.	3
0381	.	0
0381	.	0	3	.	0 	3 =	⋅	⋅
−
=
−
= −
cu	s x
x	d
ε
	ε 	‰ 	(D.35)
09	.	1	10	5	.	3
0381	.	0
05	.	0	0381	.	0 	3 −	=	⋅	⋅
−
=
′	−
=	′ −
cu	s x
d	x
ε
	ε 	‰ 	(D.36)
The yield strain in the steel is:
25	.	2
10	200
10	450 9
6
=
⋅
⋅
=	=	=
s
st
s
y
sy E
f
E
σ
ε 	‰ 	(D.37)
and it is seen that the assumptions made are correct.
By means of a moment equation about x , as in Equation (12.41), gives the value of
the ultimate moment capacity of the beam.
( 	) =	′	−	⋅	⋅	′	+	−	⋅	⋅	= 	d	d	A	E	x	d	x	b	f	M 	s	s	s	cc	pl	
ε	)	4	.	0	(	8	.	0
( 	)
( 	) 	=	−	⋅	⋅	⋅	⋅	⋅	−
+	⋅	−	⋅	⋅	⋅	⋅	⋅	=
−	− )	05	.	0	3	.	0	(	10	1005	10	200	10	09	.	1
0381	.	0	4	.	0	3	.	0	0381	.	0	0	.	1	10	22	8	.	0
6	9	3
6
4	.	136	= 	kNm
(D.38)
D.2 Load-displacement relations
D.2.1 Case(1.1)
In stadium I and II a reinforced concrete beam behaves elastically and the maximum
moment appears, in this case, in the middle of the beam and is calculated as:
L
M
P
PL
M 4
4 =	⇔	= 	(D.39)
The load for which the first crack occurs is then:
8	.	53
5	.	2
64	.	33	4	4 =
⋅
=	= L
M
P cr
cr 	kN 	(D.40)
The reinforcement in the tensile zone starts to yield when the load is:
5	.	204
5	.	2
8	.	127	4	4 =
⋅
=	= L
M
P spl
spl 	kN 	(D.41)

-- 181 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	166
When having elastic response the stiffness K can be calculated as:
3
48
L
EI
K = 	(D.42)
In stadium I the stiffness is:
0	.	424
5	.	2
10	71	.	3	10	2	.	37	48	48
3
3	9
3 	=
⋅	⋅	⋅	⋅
=	=
−
L
I	E
K I	c
I 	MN/m 	(D.43)
Just before yielding starts in the reinforcing steel in the tensile zone the stiffness is:
3	.	43
5	.	2
10	79	.	3	10	2	.	37	48	48
3
4	9
3 	=
⋅	⋅	⋅	⋅
=	=
−
L
I	E
K II	c
II 	MN/m 	(D.44)
The values of the midpoint deflection corresponding to 	cr	P 	and 	pl	P 	is calculated as:
K
P
u = 	(D.45)
The midpoint deflection is than for load 	cr	P :
127	.	0
10	0	.	424
10	8	.	53 6
3
=
⋅
⋅
=	=
I
cr
cr K
P
u 	mm 	(D.46)
and the midpoint deflection for load 	pl	P 	is:
72	.	4
10	3	.	43
10	5	.	204 6
3
=
⋅
⋅
=	=
II
spl
spl K
P
u 	mm 	(D.47)
The inclination of the load-displacement curve in between the occurrence of the first
crack and the ultimate state is calculated as:
( 	)
( 	) 8	.	32
10	127	.	0	72	.	4
10	8	.	53	5	.	204 3
3
=
⋅	−
⋅	−
=
−
−
=	′ −
cr	spl
cr	spl
u	u
P	P
K 	MN/m 	(D.48)
In stadium III, the ultimate state, the beam is a mechanism and for a simply supported
beam a plastic hinge is formed in the middle of the beam. The ultimate force is
calculated as:
2	.	218
5	.	2
4	.	136	4	4 =
⋅
=	= L
M
P pl
pl 	kN 	(D.49)
The relation between the load and displacement is shown graphically in Figure D.4.

-- 182 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	167
0
50
100
150
200
250
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Displacement [mm]
Load [kN]
P cr
P pl
P spl
Figure D.4 	Relation between load and displacement for case(1.1).
D.2.2 Case(1.2)
In stadium I and II a reinforced concrete beam behaves elastically and the maximum
moment appears, in this case, in the middle of the beam and is calculated as:
L
M
P
PL	qL
M 8
8	8
2
=	⇔	=	= 	(D.50)
The load for which the first crack occurs is then:
7	.	107
5	.	2
64	.	33	8	8 =
⋅
=	= L
M
P cr
cr 	kN 	(D.51)
The reinforcement in the tensile zone starts to yield when the load is:
0	.	409
5	.	2
8	.	127	8	8 =
⋅
=	= L
M
P spl
spl 	kN 	(D.52)
When having elastic response the stiffness K can be calculated as:
3
5
384
L
EI
K = 	(D.53)
In stadium I the stiffness is:
4	.	678
5	.	2	5
10	71	.	3	10	2	.	37	384
5
384
3
3	9
3 	=
⋅
⋅	⋅	⋅	⋅
=	=
−
L
I	E
K I	c
I 	MN/m 	(D.54)
Just before yielding starts in the reinforcing steel in the tensile zone the stiffness is:
Plastic hinge
1
2
3	1
2
3

-- 183 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	168
3	.	69
5	.	2	5
10	79	.	3	10	2	.	37	384
5
384
3
4	9
3 	=
⋅
⋅	⋅	⋅	⋅
=	=
−
L
I	E
K II	c
II 	MN/m 	(D.55)
The values of the midpoint deflection corresponding to 	cr	P 	and 	pl	P 	is calculated as:
K
P
u = 	(D.56)
The midpoint deflection is than for load 	cr	P :
159	.	0
10	4	.	678
10	7	.	107 6
3
=
⋅
⋅
=	=
I
cr
cr K
P
u 	mm 	(D.57)
and the midpoint deflection for load 	spl	P 	is:
90	.	5
10	3	.	69
10	0	.	409 6
3
=
⋅
⋅
=	=
II
spl
spl K
P
u 	mm 	(D.58)
The inclination of the load-displacement curve in between the occurrence of the first
crack and the ultimate state is calculated as:
( 	)
( 	) 5	.	52
10	159	.	0	90	.	5
10	7	.	107	0	.	409 3
3
=
⋅	−
⋅	−
=
−
−
=	′ −
cr	spl
cr	spl
u	u
P	P
K 	MN/m 	(D.59)
In stadium III, the ultimate state, the beam is a mechanism and for a simply supported
beam a plastic hinge is formed in the middle of the beam. The ultimate force is
calculated as:
4	.	436
5	.	2
4	.	136	8	8 =
⋅
=	= L
M
P pl
pl 	kN 	(D.60)
The relation between the load and displacement is shown graphically in Figure D.5.

-- 184 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	169
0
100
200
300
400
500
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Displacement [mm]
Load [kN]
P cr
P pl
P spl
Figure D.5 	Relation between load and displacement for case(1.2).
D.2.3 Case(2.1)
In stadium I and II a reinforced concrete beam behaves elastically and the maximum
moment appears, in this case, at the supports and in the middle of the beam at the
same time and is calculated as:
L
M
P
PL
M 8
8 =	⇔	= 	(D.61)
The load for which the first crack occurs is then:
7	.	107
5	.	2
64	.	33	8	8 =
⋅
=	= L
M
P cr
cr 	kN 	(D.62)
The reinforcement in the tensile zone starts to yield when the load is:
0	.	409
5	.	2
8	.	127	8	8 =
⋅
=	= L
M
P spl
spl 	kN 	(D.63)
When having elastic response the stiffness 	K 	can be calculated as (Samuelsson,
Wiberg (1999):
3
192
L
EI
K = 	(D.64)
In stadium I the stiffness is:
Plastic hinge
1
2
3	1
2
3

-- 185 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	170
1	.	1696
5	.	2
10	71	.	3	10	2	.	37	192	192
3
3	9
3 	=
⋅	⋅	⋅	⋅
=	=
−
L
I	E
K I	c
I 	MN/m 	(D.65)
Just before yielding starts in the reinforcing steel in the tensile zone the stiffness is:
3	.	173
5	.	2
10	79	.	3	10	2	.	37	192	192
3
4	9
3 	=
⋅	⋅	⋅	⋅
=	=
−
L
I	E
K II	c
II
MN/m
(D.66)
The values of the midpoint deflection corresponding to 	cr	P 	and 	pl	P 	is calculated as:
K
P
u = 	(D.67)
The midpoint deflection is than for load 	cr	P :
0635	.	0
10	1	.	1696
10	7	.	107 6
3
=
⋅
⋅
=	=
I
cr
cr K
P
u 	mm 	(D.68)
and the midpoint deflection for load 	spl	P 	is:
36	.	2
10	3	.	173
10	0	.	409 6
3
=
⋅
⋅
=	=
II
spl
spl K
P
u 	mm 	(D.69)
The inclination of the load-displacement curve in between the occurrence of the first
crack and the ultimate state is calculated as:
( 	)
( 	) 2	.	131
10	0635	.	0	36	.	2
10	7	.	107	0	.	409 3
3
=
⋅	−
⋅	−
=
−
−
=	′ −
cr	spl
cr	spl
u	u
P	P
K 	MN/m 	(D.70)
In stadium III, the ultimate state, the beam is a mechanism and for a fixed beam
plastic hinge are formed at the supports and in the middle of the beam. The ultimate
force is calculated as:
4	.	436
5	.	2
4	.	136	8	8 =
⋅
=	= L
M
P pl
pl 	kN 	(D.71)
The relation between the load and displacement is shown graphically in Figure D.6.

-- 186 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	171
0
100
200
300
400
500
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Displacement [mm]
Load [kN]
P cr
P pl
P spl
Figure D.6 	Relation between load and displacement for case(2.1).
D.2.4 Case(2.2)
In stadium I and II a reinforced concrete beam behaves elastically and the maximum
moment appears, in this case, at the supports and is calculated as:
L
M
P
PL	qL
M 12
12	12
2
=	⇔	=	= 	(D.72)
The load for which the first crack occurs is then:
5	.	161
5	.	2
64	.	33	12	12 =
⋅
=	= L
M
P cr
cr 	kN 	(D.73)
The reinforcement in the tensile zone starts to yield when the load is:
5	.	613
5	.	2
8	.	127	12	12 =
⋅
=	= L
M
P spl
spl 	kN 	(D.74)
When having elastic response the stiffness K can be calculated as:
3
384
L
EI
K = 	(D.75)
In stadium I the stiffness is:
3392
5	.	2
10	71	.	3	10	2	.	37	384	384
3
3	9
3 	=
⋅	⋅	⋅	⋅
=	=
−
L
I	E
K I	c
I 	MN/m 	(D.76)
Just before yielding starts in the reinforcing steel in the tensile zone the stiffness is:
Plastic hinges
1
2
3	1
2
3

-- 187 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	172
7	.	346
5	.	2
10	79	.	3	10	2	.	37	384	384
3
4	9
3 	=
⋅	⋅	⋅	⋅
=	=
−
L
I	E
K II	c
II 	MN/m 	(D.77)
The values of the midpoint deflection corresponding to 	cr	P 	and 	pl	P 	is calculated as:
K
P
u = 	(D.78)
The midpoint deflection is than for load 	cr	P :
0476	.	0
10	3392
10	5	.	161 6
3
=
⋅
⋅
=	=
I
cr
cr K
P
u 	mm 	(D.79)
and the midpoint deflection for load 	spl	P 	is:
77	.	1
10	7	.	346
10	5	.	613 6
3
=
⋅
⋅
=	=
II
spl
spl K
P
u 	mm 	(D.80)
The inclination of the load-displacement curve in between the occurrence of the first
crack and the ultimate state is calculated as:
( 	)
( 	) 5	.	262
10	0476	.	0	77	.	1
10	5	.	161	5	.	613 3
3
=
⋅	−
⋅	−
=
−
−
=	′ −
cr	spl
cr	spl
u	u
P	P
K 	MN/m 	(D.81)
In stadium III, the ultimate state, the beam is a mechanism and for a fixed beam
plastic hinge are formed at the supports and in the middle of the beam. The ultimate
force is calculated as:
9	.	872
5	.	2
4	.	136	16	16 =
⋅
=	= L
M
P pl
pl 	kN 	(D.82)
The relation between the load and displacement is shown graphically in Figure D.7.

-- 188 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	173
0
200
400
600
800
1000
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Displacement [mm]
Load [kN]
P cr
P pl
P spl
Figure D.7 	Relation between load and displacement for case(2.2).
D.3 Stress-strain relation
The material properties used as input in ADINA (2004) is the relation between the
stress and strain why these have to be calculated from the relations between load and
displacement in Section 7.1.1. It shall be observed that the method used here to
calculate the stress-strain relation corresponding to the load-displacement relation is
an approximate method. A static analyses made in ADINA (2004) will probably not
give a load-displacement curve equal to the one used when calculating the stress-
strain relation. In order to verify that the method used here give useful results a
comparison between the load-displacement curve used when calculating the stress-
strain relation and the resulting load-displacement curve from a static analyses made
in ADINA (2004) is made for each case.
Since the beam used in the FE analysis has a constant cross-section through the whole
analysis while the cross-section of the reinforced concrete will change the stresses
corresponding to the crack moment M cr, moment where yielding starts M spl and the
ultimate moment M pl are calculated as shown in Figure D.8. In the SDOF- and FE
analysis the cross-section in Figure 7.2 is used and the moment of inertia is:
3
3	3
10	57	.	3
12
35	.	0	0	.	1
12
−
⋅	=
⋅
=	=	= bh
I	I analysis m4 (D.83)
Plastic hinges
1
2
3
1
2
3

-- 189 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	174
Figure D.8 	Stresses for the cross-section used in the analysis.
65	.	1	6
35	.	0	0	.	1
10	64	.	33
6
2
12
2
3
2	3 	=
⋅
⋅
=	=	= bh
M	h
bh
M 	cr	cr	analysis
cr	
σ 	MPa 	(D.84)
26	.	6	6
35	.	0	0	.	1
10	8	.	127
6
2
12
12
2
3
2	3 	=
⋅
⋅
=	=	= bh
M	h
bh
M 	spl	spl	analysis
spl	
σ 	MPa 	(D.85)
45	.	4
35	.	0	0	.	1
10	4	.	136	4	4
2
3
2 	=
⋅
⋅	⋅
=	= bh
M pl	analysis
pl	
σ 	MPa 	(D.86)
Since the value of the ultimate stress σpl is lower than the value of σspl the value of σpl
is used as the maximum stress in the FE analysis.
For the reinforced concrete beam the moment of inertia will change as soon as the
first crack occurs (P=Pcr). The relation between the load and the displacement for a
simply supported, reinforced concrete beam is principally shown in Figure D.9 and
the stiffness K1 and K2 are expressed as (according to Samuelsson and Wiberg
(1999)):
3	1 5
384
L
I	E
K I	c
= 	(D.87)
Most strained cut in
the concrete beam
cr	M
Most strained cut in the
beam used in the analysis
cr	M 2
h
I
M cr
cr =
	σ
spl	M 	spl	M 2
h
I
M spl
spl =
	σ
cr	
σ
spl	
σ
pl	M 	pl	M 	2
4
bh
M pl
pl =
	σ
cr	P	P =
spl	P	P =
pl	P	P =
pl	
σ

-- 190 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	175
3	2 5
384
L
I	E
K II	c
= 	(D.88)
where I I and I II are equivalent values of the moment of inertia for the reinforced cross-
section, for further information see Section 12.2.1.3. Ec is the modulus of elasticity of
the concrete.
cr	
ε
2	K 2	E
E′	spl	
σ
K ′	pl	P
u
P
spl	u	cr	u
pl	P
cr	P
1	K
ε
σ
pl	
ε
cr	
σ
1	E
Figure D.9 	Notations for material properties for load-displacement relation and
stress-strain relation respectively
The corresponding stiffness in the SDOF- and FE-analyses (with moment of inertia in
Equation (D.88)) is:
3
1
1 5
384
L
I	E
K analysis = 	(D.89)
3
2
2 5
384
L
I	E
K analysis = 	(D.90)
The stiffness in the analyses must be equal to the stiffness of the beam and Equation
(D.87) shall be equal to Equation (D.89) and Equation (D.88) shall be equal to
Equation (D.90).
I
I
E	E
L
I	E
L
I	E 	I
c
I	c =	⇒	= 	1	3	3
1
5
384
5
384 (D.91)
I
I
E	E
L
I	E
L
I	E 	II
c
II	c =	⇒	= 	2	3	3
2
5
384
5
384 (D.92)
The moment of inertia in stadium I and II and the modulus of elasticity for the
reinforced concrete beam is calculated in Appendix D and the modulus of elasticity
for the analysis can be calculated as:
6	.	38
10	57	.	3
10	71	.	3
10	2	.	37 	3
3
9
1 	=
⋅
⋅
⋅	=	= 	−
−
I
I
E	E I
c 	GPa 	(D.93)

-- 191 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	176
95	.	3
10	57	.	3
10	79	.	3
10	2	.	37 	3
4
9
2 	=
⋅
⋅
⋅	=	= 	−
−
I
I
E	E II
c 	GPa 	(D.94)
The strains corresponding to 	cr	
σ 	and 	pl	
σ 	is calculated as:
043	.	0
10	6	.	38
10	65	.	1 9
6
1
=
⋅
⋅
=	=	= E
cr
cr
analysis
cr
σ
ε
	ε 	‰ 	(D.95)
6	.	1
10	95	.	3
10	26	.	6 9
6
2
=
⋅
⋅
=	=	= E
spl
spl
analysis
spl
σ
ε
	ε 	‰ 	(D.96)
The inclination of the stress-strain curve in between 	cr	
σ 	and 	pl	
σ 	is:
( 	)
( 	) 99	.	2
10	043	.	0	6	.	1
10	65	.	1	26	.	6 3
6
=
⋅	−
⋅	−
=
−
−
=	′ −
cr	spl
cr	spl
E
ε
	ε
σ
	σ GPa 	(D.97)
The strain corresponding to the ultimate stress σpl can be calculated as:
=
′
−
+	=	= E
cr	u
cr	u
analysis
pl
σ	
σ
ε
	ε
	ε
( 	) 98	.	0
10	99	.	2
10	65	.	1	45	.	4
10	043	.	0 	9
6
3 =
⋅
⋅	−
+	⋅	= − ‰
(D.98)
In Figure D.10 the input stress-strain relation used in ADINA (2004) is shown
graphically.
0
1
2
3
4
5
0 	0,2 	0,4 	0,6 	0,8 	1 	1,2 	1,4
Strain [‰]
Stress [MPa]
σ u
σ cr
ε cr 	ε u
Figure D.10 	Stress-strain relation used as input in FE analysis (ADINA (2004)), in
figure 	u	
σ 	represents the value of 	pl	
σ 	.

-- 192 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	177
The resulting load-displacement relation found in static analyses for each beam and
loading case are presented in Figure D.11.
Output from static analyses in ADINA 	Input to SDOF analyses
0
50
100
150
200
250
0 	2 	4 	6 	8 	10
Displacement [m]
Load [kN]
0
100
200
300
400
500
0 	2 	4 	6 	8 	10
Displacement [mm]
Load [kN]
0
100
200
300
400
500
0 	2 	4 	6 	8 	10
Displacement [m]
Load [kN]
0
200
400
600
800
1000
0 	2 	4 	6 	8 	10
Displacement [m]
Load [kN]
Figure D.11 	Relations between load and displacements for SDOF and FE analysis.
The load-displacement curves used in the FE analysis have a more stiff behaviour
than 	the 	load-displacement 	curves 	used 	in 	the 	SDOF 	analysis. 	However, 	the
approximated values of the stress-strain relation used as input in the FE analysis are
assumed to be good enough.

-- 193 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	178
APPENDIX E 	Varying number of elements and
size of modulus of elasticity in FE-
analyses
In order to confirm that the number of elements used are enough and that the modulus
of elasticity is high enough in case of ideal plastic material different numbers and
values are used in the FE-analyses and the results compared.
In Figure E.1 it can bee seen that in case of linear elastic material it is enough to use
20 elements since the results are very similar to the results when 50 elements is used.
20 equally sized 2-node beam elements are thus used when having linear elastic
material.
-0,12
-0,06
0
0,06
0,12
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
FEM 20 elements
FEM 50 elements
Figure E.1 	Displacement-time curves when modelling beam with different numbers
of elements for case (1.1), P1 =132 kN, t 1 =1 ms.
In Figure E.2 it can bee seen that in case of trilinear material it is enough to use 299
elements in case of concentrated load since the results are the same as the results
when 199 elements is used. It is hence also assumed that 300 elements are enough in
case of uniformly distributed load.

-- 194 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	179
0
4
8
12
16
20
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
FEM 199 elements
FEM 299 elements
Figure E.2 	Displacement-time curves when having different numbers of elements
for case (1.1), 	=	1	P 	4220 kN and 	1	1 =	t 	ms.
Due to limitations in ADINA (2004) ideal plastic material can not be modelled but in
order to imitate the ideal plastic behaviour a very high elastic stiffness is used instead.
Since the analysis, when having very stiff material, are computationally because very
small time steps are required in order to have enough convergence for a suitable
number of iteration, a sufficiently good value of the modulus of elasticity shall be
found. This is done by comparing results from analyses where different values of the
modulus of elasticity is used. In Figure E.3 it is seen that when having 	=	E 	5000 GPa
no noticeable vibrations occurs after the maximum value of the displacement is
reached. This behaviour is wanted since for ideal plastic material there will be no
vibrations when the maximum value of the displacement is reached, see Figure E.4.
0
4
8
12
16
20
0 	5 	10 	15 	20 	25 	30
Time [ms]
Displacement [mm]
FEM E=200 GPa
FEM E=5000 GPa
Figure E.3 	Displacement-time curves when having different values of the modulus
of elasticity for case (1.1), 	=	1	P 	4810 kN and 	1	1 =	t 	ms.

-- 195 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	180
Figure E.4 	For ideal plastic material (a) no vibrations will occur after the
maximum value is reached but for elastic-plastic material (b) vibrations
will occur
R
u
max	u
R
u
max	u
min	u
a) 	b)

-- 196 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	181
APPENDIX F 	Standardized shapes of deflection
In this Appendix the standardized shapes of deflections in from the FE analyses in are
shown together with the assumed shape of deformation used in the SDOF analyses.
Only the cases not shown in Section 7.2.3 are shown here.
F.1 Elastic range
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of elasticity
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis Assumed shape of deformation due to theory of elasticity
Figure F.1 	Standardized displacement along the beam in a) case (1.1) and b) case
(1.2) compared to the assumed shape of displacement in the SDOF
analyses.
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of elasticity
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of elasticity
Figure F.2 	Standardized displacement along the beam in a) case (2.1) and b) case
(2.2) compared to the assumed shape of displacement in the SDOF
analyses.
F.2 Elastoplastic range
In the elastoplastic range the assumed shape of deformation in the SDOF analyses is
not defined. However, it shall be in between the assumed shape in the elastic range
and the assumed shape in the plastic range.
a) 	b)
a) 	b)

-- 197 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	182
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of elasticity
Assumed shape of deformation due to theory of plasticity
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of elasticity
Assumed shape of deformation due to theory of plasticity
Figure F.3 	Standardized displacement along the beam in a) case (1.1) and b) case
(1.2) compared to the assumed shape of displacement in the SDOF
analyses.
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5	
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of elasticity
Assumed shape of deformaton due to theory of plasticity
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of elasticity
Assumed shape of deformation due to theory of plasticity
Figure F.4 	Standardized displacement along the beam in a) case (1.2) and b) case
(2.2) compared to the assumed shape of displacement in the SDOF
analyses.
F.3 Plastic range
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of plasticity
0
0,2
0,4
0,6
0,8
1
1,2
0 	0,5 	1 	1,5 	2 	2,5
Coordinate [m]
Standardized displacement [-]
Shape of deformation from FE analysis 	Assumed shape of deformation due to theory of plasticity
Figure F.5 	Standardized displacement along the beam in a) case (1.2) and b) case
(2.2) compared to the assumed shape of displacement in the SDOF
analyses.
a) 	b)
a) 	b)
a) 	b)

-- 198 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	183
APPENDIX G 	Beam equations for linear elastic
and ideal plastic material
In this appendix beam equations for case (1.1), (1.2), (2.1) and (2.2), shown in Figure
6.7, with linear elastic and ideal plastic material are derived. Analytical expressions
for the maximum value of the deflection for the beams subjected to characteristic
impulse loads are derived.
G.1 Simply supported beam subjected to concentrated load -
Case (1.1)
Beam equations for a simply supported beam subjected to a concentrated load, shown
in Figure G.1, are here derived for linear elastic and ideal plastic material.
L
Figure G.1 	Simply supported beam subjected to concentrated load.
G.1.1 Linear elastic material
If the most stressed part of the cross-section is located at the distance z 	from the
neutral layer the maximum value of the moment can, in case of linear elastic material,
be expressed as:
z
I
M el	
σ	= 	(G.1)
where σ is the stress and I is the moment of inertia.
The maximum value of the moment will appear in the middle of the beam and can in
case of a simply supported beam be expressed as (brought from elementary cases):
4
PL
M el = 	(G.2)
The maximum value of the internal resisting force is equal to the highest value of the
load. Equations (G.1) and (G.2) gives the expression for the maximum internal
resisting force in case of linear elastic material:

-- 199 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	184
zL
I
L
M
P	R el
m
σ	4	4
max 	=	=	= 	(G.3)
The expression for the midpoint deflection can be found in elementary cases and is:
EI
PL
u 48
3
= 	(G.4)
and the stiffness of the linear elastic beam K is:
3
48
L
EI
u
P
K 	=	= 	(G.5)
Using Table 9.1, Equations (G.3), (G.4) and the values of the transformation factors,
listed in Table 6.1, the equations for the simply supported beam with linear elastic
material, subjected to a concentrated load can be expressed as:
zL
I
zL
I	R
P 	KP
m
KP	c
σ
	σ
κ
	κ 2
2
4
2 =	=	= 	(G.6)
z
I
EI
ML
EI
ML
zL
I
M	K
R
I m
MP	KP	c
σ
	σ
κ
	κ 	402	.	0
48
4
4857	.	0
3
≈	=	= 	(G.7)
EI
L	P
EI
L	P
K
P
P	u c	c
KP
c
c
3	3
max 	0417	.	0
48
2	2
)	( 	≈	=	=
κ (G.8)
EIM
L	I
EIM
L	I
MK
I
I	u c	c
MP	KP
c
c
3	3
max 	207	.	0
48	4857	.	0
)	( 	≈
⋅
=	=
κ
	κ (G.9)
G.1.2 Ideal plastic material
The maximum value of the moment is the plastic moment, M pl, and appears in the
middle of the beam, where a plastic hinge is assumed. In case of a simply supported
beam subjected to a concentrated load M pl is (brought from elementary cases):
4
L	P
M pl
pl = 	(G.10)
where Ppl is the value of the external load when yielding starts.
The maximum value of the internal resisting force is equal to the external load for
which yielding starts and can by means of Equation (G.10) be expressed as:

-- 200 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	185
L
M
P	R pl
pl	m
4
=	= 	(G.11)
Using Table 9.1, Equations (G.10), (G.11) and the values of the transformation
factors, listed in Table 6.1, the equations for the simply supported beam with ideal
plastic material, subjected to a concentrated load can be expressed as:
L
M
R	P pl
m	KP	c 	4	=	=
κ 	(G.12)
L
Mu	M
L
Mu	M
M	u	R	I pl	pl
m	MP	KP	c
max	max
max 	63	.	1
4
3
2
2 	≈	=	=
	κ
	κ 	(G.13)
M	M
L	I
M	M
L	I
M	R
I
I	u
pl
c
pl
c
m	MP	KP
c
c
2	2	2
max 	375	.	0
4	3	2	2
)	( 	=
⋅
=	=
κ
	κ (G.14)
G.1.3 Summary of beam equations for case (1.1)
The beam equations derived in Section G.1.1 and G.1.2 are summarised in Table G.1 .
Table G.1 	Beam equations for a simply supported beam subjected to concentrated
load.
I. 	Linear elastic material
zL
I
Pc
σ	2
=
z
I
EI
ML
I c
σ
402	.	0	≈
t
c
c EI
L	P
P	u
3
max 	0417	.	0	)	( 	≈
EIM
L	I
I	u c
c
3
max 	207	.	0	)	( 	=≈
II. 	Ideal plastic material
L
M
P pl
c 	4	=
L
Mu	M
I pl
c
max
63	.	1	≈
M	M
L	I
I	u
pl
c
c
2
max 	375	.	0	)	( 	=

-- 201 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	186
G.2 Simply supported beam subjected to distributed load -
Case (1.2)
Beam equations for a simply supported beam subjected to a uniformly distributed
load, shown in Figure G.2, are here derived for linear elastic and ideal plastic
material.
L
Figure G.2 	Simply supported beam subjected to uniformly distributed load
G.2.1 Linear elastic material
If the most stressed part of the cross-section is located at the distance z 	from the
neutral layer the maximum value of the moment can, in case of linear elastic material,
be expressed as:
z
I
M el	
σ	= 	(G.15)
where σ is the stress and I is the moment of inertia.
The maximum value of the moment will appear in the middle of the beam and can in
case of a simply supported beam be expressed as (brought from elementary cases):
8
PL
M el = 	(G.16)
where P is the value of the external load.
The maximum value of the internal resisting force is equal to the highest value of the
load. Equations (G.15) and (G.16) gives the expression for the maximum internal
resisting force in case of linear elastic material:
zL
I
L
M
P	R el
m
σ	8	8
max 	=	=	= 	(G.17)
The expression for the midpoint deflection can be found in elementary cases and is:

-- 202 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	187
EI
PL
u 384
5 3
= 	(G.18)
and the stiffness of the linear elastic beam K is:
3
5
384
L
EI
u
P
K 	=	= 	(G.19)
Using Table 9.1, Equations (G.17), (G.19) and the values of the transformation
factors, listed in Table 6.1, the equations for the simply supported beam with linear
elastic material, subjected to a uniformly distributed load can be expressed as:
zL
I
zL
I	R
P 	KP
m
KP	c
σ
	σ
κ
	κ 4
2
8
2 =	=	= 	(G.20)
z
I
EI
ML
EI
ML
zL
I
M	K
R
I m
MP	KP	c
σ
	σ
κ
	κ 	801	.	0
384
5	8
7875	.	0
3
≈	=	= 	(G.21)
EI
L	P
EI
L	P
K
P
P	u c	c
KP
c
c
3	3
max 	0206	.	0
384
10	2
)	( 	≈	=	=
κ (G.22)
EIM
L	I
EIM
L	I
MK
I
I	u c	c
MP	KP
c
c
3	3
max 	129	.	0
384	7875	.	0
5
)	( 	≈
⋅
=	=
κ
	κ (G.23)
G.2.2 Ideal plastic material
The maximum value of the moment is the plastic moment, 	pl	M 	, and it will appear in
the middle of the beam, where a plastic hinge is assumed, and can in case of a simply
supported beam be expressed as (brought from elementary cases):
8
L	P
M pl
pl = 	(G.24)
where Ppl is the value of the external load when yielding starts.
The maximum value of the internal resisting force is equal to the external load for
which yielding starts and can by means of Equation (G.10) be expressed as:
L
M
P	R pl
pl	m
8
=	= 	(G.25)
Using Table 9.1, Equations (G.24), (G.25) and the values of the transformation
factors, listed in Table 6.1, the equations for the simply supported beam with ideal
plastic material, subjected to a uniformly distributed load can be expressed as:

-- 203 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	188
L
M
R	P pl
m	KP	c 	8	=	=
κ 	(G.26)
L
Mu	M
L
Mu	M
M	u	R	I pl	pl
m	MP	KP	c
max	max
max 	27	.	3
8
3
4
2 	≈	=	=
	κ
	κ 	(G.27)
M	M
L	I
M	M
L	I
M	R
I
I	u
pl
c
pl
c
m	MP	KP
c
c
2	2	2
max 	0938	.	0
8	3	4	2
)	( 	=
⋅
=	=
κ
	κ (G.28)
G.2.3 Summary of beam equations for case (1.2)
The beam equations derived in Section G.2.1 and G.2.2 are summarised in Table G.2
below.
Table G.2 	Beam equations for a simply supported beam subjected to uniformly
distributed load.
I. 	Linear elastic material
zL
I
Pc
σ
4	=
z
I
EI
ML
I c
σ
810	.	0	≈
EI
L	P
P	u c
c
3
max 	0260	.	0	)	( 	≈
EIM
L	I
I	u c
c
3
max 	129	.	0	)	( 	≈
II. 	Ideal plastic material
L
M
P pl
c 	8	=
L
Mu	M
I pl
c
max
27	.	3	≈
M	M
L	I
I	u
pl
c
c
2
max 	0938	.	0	)	( 	=

-- 204 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	189
G.3 Fixed beam subjected to concentrated load - Case (2.1)
Beam equations for a beam fixed in both ends subjected to a concentrated load, shown
in Figure G.3, are here derived for linear elastic and ideal plastic material.
L
Figure G.3 	Fixed beam subjected to concentrated load
G.3.1 Linear elastic material
If the most stressed part of the cross-section is located at the distance z 	from the
neutral layer the maximum value of the moment can, in case of linear elastic material,
be expressed as:
z
I
M el	
σ	= 	(G.29)
where σ is the stress and I is the moment of inertia.
The maximum value of the moment will appear in the middle of the beam and at the
supports and can in case of a beam, fixed in both ends, be expressed as (brought from
elementary cases):
8
PL
M el = 	(G.30)
where P is the value of the external load.
The maximum value of the internal resisting force is equal to the highest value of the
load. Using this statement together with Equations (G.29) and (G.30) gives the
expression for the maximum internal resisting force in case of linear elastic material:
zL
I
L
M
P	R el
m
σ	8	8
max 	=	=	= 	(G.31)
The expression for the midpoint deflection can be found in elementary cases and is:
EI
PL
u 192
3
= 	(G.32)
and the stiffness of the linear elastic beam K is:

-- 205 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	190
3
192
L
EI
u
P
K 	=	= 	(G.33)
Using Table 9.1, Equations (G.31), (G.33) and the values of the transformation
factors, listed in Table 6.1, the equations for the beam fixed in both ends with linear
elastic material, subjected to a concentrated load can be expressed as:
zL
I
zL
I	R
P t
KP
m
KP	c
σ
	σ
κ
	κ 4
2
8
2 =	=	= 	(G.34)
z
I
EI
ML
EI
ML
zL
I
M	K
R
I m
MP	KP	c
σ
	σ
κ
	κ 	352	..	0
192
8
3714	.	0
3
≈	=	= 	(G.35)
EI
L	P
EI
L	P
K
P
P	u c	c
KP
c
c
3	3
max 	0104	.	0
192
2	2
)	( 	=	=	=
κ (G.36)
EIM
L	I
EIM
L	I
MK
I
I	u c	c
MP	KP
c
c
3	3
max 	118	.	0
192	3714	.	0
)	( 	≈
⋅
=	=
κ
	κ (G.37)
G.3.2 Ideal plastic material
The maximum value of the moment is the plastic moment, M pl, and it will appear in
the middle of the beam and at the supports, where plastic hinges are assumed if it is
assumed that the field moment equals the support moments. M pl is in case of a beam,
fixed in both ends, be expressed as (brought from elementary cases):
8
L	P
M pl
pl = 	(G.38)
where Ppl is the value of the external load when yielding starts.
The maximum value of the internal resisting force is equal to the external load for
which yielding starts and can by means of Equation (G.38) be expressed as:
L
M
P	R pl
pl	m
8
=	= 	(G.39)
Using Table 9.1, Equations (G.38), (G.39) and the values of the transformation
factors, listed in Table 6.1, the values for the beam fixed in both ends with ideal
plastic material, subjected to a concentrated load can be expressed as:
L
M
R	P pl
m	KP	c 	8	=	=
κ 	(G.40)

-- 206 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	191
L
Mu	M
L
Mu	M
M	u	R	I pl	pl
m	MP	KP	c
max	max
max 	31	.	2
8
3
2
2 	≈	=	=
	κ
	κ 	(G.41)
M	M
L	I
M	M
L	I
M	R
I
I	u
pl
c
pl
c
m	MP	KP
c
c
2	2	2
max 	188	.	0
8	3	2	2
)	( 	=
⋅
=	=
κ
	κ (G.42)
G.3.3 Summary of beam equations for case (2.1)
The beam equations derived in Section G.3.1 and G.3.2 are summarised in Table G.3
below.
Table G.3 	Beam equations for fixed beam subjected to concentrated load.
I. 	Linear elastic material
zL
I
Pc
σ
4	=
z	E
IML
I c
σ
352	.	0	≈
EI
L	P
P	u c
c
3
max 	0104	.	0	)	( 	≈
EIM
L	I
I	u c
c
3
max 	118	.	0	)	( 	≈
II. 	Ideal plastic material
L
M
P pl
c 	8	=
L
Mu	M
I pl
c
max
31	.	2	≈
M	M
L	I
I	u
pl
c
c
2
max 	188	.	0	)	( 	≈
G.4 Fixed beam subjected to distributed load - Case (2.2)
Beam equations for beam, fixed in both ends, subjected to a uniformly distributed
load, shown in Figure G.4, are here derived for linear elastic and ideal plastic
material.

-- 207 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	192
L
Figure G.4 	Fixed beam subjected to uniformly distributed load
G.4.1 Linear elastic material
If the most stressed part of the cross-section is located at the distance z 	from the
neutral layer the maximum value of the moment can, in case of linear elastic material,
be expressed as:
z
I
M el	
σ	= 	(G.43)
where σ is the stress and I is the moment of inertia.
The maximum value of the moment will appear at the supports and can in case of a
beam, fixed in both ends, be expressed as (brought from elementary cases):
12
PL
M el = 	(G.44)
where P is the value of the external load.
The maximum value of the internal resisting force is equal to the highest value of the
load. Using this statement together with Equations (G.43) and (G.44) gives the
expression for the maximum internal resisting force in case of linear elastic material:
zL
I
L
M
P	R el
m
σ	12	12
max 	=	=	= 	(G.45)
The expression for the midpoint deflection can be found in elementary cases and is:
EI
PL
u 384
3
= 	(G.46)
and the stiffness of the linear elastic beam K is:
3
384
L
EI
u
P
K 	=	= 	(G.47)

-- 208 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	193
Using Table 9.1, Equations (G.45), (G.47) and the values of the transformation
factors, listed in Table 6.1, the equations for the beam, fixed in both ends, with linear
elastic material, subjected to a uniformly distributed load can be expressed as:
zL
I
zL
I	R
P t
KP
m
KP	c
σ
	σ
κ
	κ 6
2
12	´
2 =	=	= 	(G.48)
z
I
EI
ML
EI
ML
zL
I
M	K
R
I m
MP	KP	c
σ
	σ
κ
	κ 	534	.	0
384
12
7617	.	0
3
≈	=	= 	(G.49)
EI
L	P
EI
L	P
K
P
P	u c	c
KP
c
c
3	3
max 	00521	.	0
384
2	2
)	( 	=	=	=
κ (G.50)
EIM
L	I
EIM
L	I
MK
I
I	u c	c
MP	KP
c
c
3	3
max 	0585	.	0
384	7617	.	0
)	( 	≈
⋅
=	=
κ
	κ (G.51)
G.4.2 Ideal plastic material
The maximum value of the moment is the plastic moment, M pl, and it will appear in
the middle of the beam and at the supports, where a plastic hinges are assumed, and
can in case of a beam, fixed in both ends, be expressed as (brought from elementary
cases):
16
L	P
M pl
pl = 	(G.52)
where Ppl is the value of the external load when yielding starts.
The maximum value of the internal resisting force is equal to the external load for
which yielding starts and can by means of Equation (G.52) be expressed as:
L
M
P	R pl
pl	m
16
=	= 	(G.53)
Using Table 9.1, Equations (G.52), (G.53) and the values of the transformation
factors, listed in Table 6.1, the equations for the beam, fixed in both ends, with ideal
plastic material, subjected to a uniformly distributed load can be expressed as:
L
M
R	P pl
m	KP	c 	16	=	=
κ 	(G.54)
L
Mu	M
L
Mu	M
M	u	R	I pl	pl
m	MP	KP	c
max	max
max 	26	.	3
16
3
2
2 	≈	=	=
	κ
	κ 	(G.55)

-- 209 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	194
M	M
L	I
M	M
L	I
M	R
I
I	u
pl
c
pl
c
m	MP	KP
c
c
2	2	2
max 	0938	.	0
16	3	2	2
)	( 	=
⋅
=	=
κ
	κ (G.56)
G.4.3 Summary of beam equations for case (2.2)
The beam equations derived in Section G.4.1 and G.4.2 are summarised in Table G.4.
Table G.4 	Beam equations for fixed beam subjected to uniformly distributed load.
I. 	Linear elastic material
zL
I
Pc
σ
6	=
z
I
EI
ML
I c
σ
534	.	0	≈
EI
L	P
P	u c
c
3
max 	00521	.	0	)	( 	≈
EIM
L	I
I	u c
c
3
max 	0585	.	0	)	( 	≈
II. 	Ideal plastic material
L
M
P pl
c 	16	=
L
Mu	M
I pl
c
max
26	.	3	≈
M	M
L	I
I	u
pl
c
c
2
max 	0938	.	0	)	( 	≈

-- 210 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	195
APPENDIX H 	Tables of damage
In case of linear elastic material the relation between the impulse load factor 	I	
γ 	and
pressure load factor 	P	
γ 	, calculated as in Section 11.1.1, is shown in Table H.1.
Observe that some of the values also are shown in Table 11.1.
Table H.1 	Relation between 	P	
γ 	and 	I	
γ 	for linear elastic material.
c	I 	I	I	=
	γ 	c	P 	P	P1	=
	γ
c
P P
P1
=
	γ
n =0 	n =1 	n =2 	c
I I
I
=
	γ
n =0 	n =1 	n =2
1.01 	1.444 	41.13 	64.15 	1.01 	4.144 	6.813 	8.525
1.05 	1.324 	8.491 	11.17 	1.05 	1.959 	3.177 	3.911
1.1 	1.255 	4.570 	5.931 	1.1 	1.469 	2.389 	2.924
1.3 	1.141 	1.984 	2.455 	1.3 	1.066 	1.691 	1.984
1.5 	1.095 	1.490 	1.776 	1.5 	1.003 	1.493 	1.694
1.6 	1.080 	1.373 	1.610 	1.6 	1.000 	1.434 	1.607
1.7 	1.069 	1.294 	1.494 	1.7 	1.000 	1.388 	1.541
1.8 	1.060 	1.237 	1.408 	1.8 	1.000 	1.351 	1.488
1.9 	1.053 	1.196 	1.343 	1.9 	1.000 	1.321 	1.445
2.0 	1.047 	1.166 	1.293 	2.0 	1.000 	1.296 	1.409
2.2 	1.038 	1.126 	1.220 	2.2 	1.000 	1.256 	1.353
2.4 	1.032 	1.099 	1.171 	2.4 	1.000 	1.226 	1.310
2.6 	1.026 	1.080 	1.137 	2.6 	1.000 	1.202 	1.277
2.8 	1.023 	1.067 	1.112 	2.8 	1.000 	1.183 	1.250
3 	1.020 	1.057 	1.094 	3 	1.000 	1.167 	1.228
3.5 	1.014 	1.040 	1.064 	3.5 	1.000 	1.138 	1.187
4 	1.011 	1.030 	1.047 	4 	1.000 	1.117 	1.159
4.5 	1.008 	1.023 	1.037 	4.5 	1.000 	1.102 	1.138
5 	1.007 	1.019 	1.029 	5 	1.000 	1.090 	1.122
6 	1.005 	1.013 	1.020 	6 	1.000 	1.073 	1.099
7 	1.003 	1.009 	1.015 	7 	1.000 	1.062 	1.083
8 	1.003 	1.007 	1.011 	8 	1.000 	1.053 	1.072

-- 211 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	196
c	I 	I	I	=
	γ 	c	P 	P	P1	=
	γ
c
P P
P1
=
	γ
n =0 	n =1 	n =2 	c
I I
I
=
	γ
n =0 	n =1 	n =2
9 	1.002 	1.006 	1.009 	9 	1.000 	1.047 	1.063
10 	1.002 	1.005 	1.007 	10 	1.000 	1.042 	1.056
20 	1.000 	1.001 	1.002 	20 	1.000 	1.020 	1.028
30 	1.000 	1.000 	1.001 	30 	1.000 	1.014 	1.019
40 	1.000 	1.000 	1.000 	40 	1.000 	1.010 	1.014
50 	1.000 	1.000 	1.000 	50 	1.000 	1.008 	1.015
100 	1.000 	1.000 	1.000 	100 	1.000 	1.005 	1.013
In case of ideal plastic material the relation between the impulse load factor 	I	
γ 	and
pressure load factor 	P	
γ 	, calculated as in Section 11.1.2, is shown in Table H.2
Table H.2 	Relation between 	P	
γ 	and 	I	
γ 	for ideal plastic material.
c	I 	I	I	=
	γ 	c	P 	P	P	=
	γ
c
P P
P1
=
	γ
n =0 	n =1 	n =2 	c
I I
I
=
	γ
n =0 	n =1 	n =2
1.01 	10.05 	441.8 	587.5 	1.01 	50.73 	67.67 	76.13
1.05 	4.583 	42.87 	56.25 	1.05 	10.76 	14.34 	16.14
1.1 	3.317 	16.571 	21.58 	1.1 	5.763 	7.688 	8.645
1.3 	2.082 	4.454 	5.569 	1.3 	2.452 	3.269 	3.678
1.5 	1.732 	2.756 	3.330 	1.5 	1.800 	2.400 	2.700
1.6 	1.633 	2.385 	2.839 	1.6 	1.641 	2.188 	2.459
1.7 	1.558 	2.137 	2.508 	1.7 	1.529 	2.039 	2.286
1.8 	1.500 	1.961 	2.270 	1.8 	1.446 	1.929 	2.154
1.9 	1.453 	1.831 	2.094 	1.9 	1.383 	1.8433 	2.050
2.0 	1.414 	1.732 	1.957 	2.0 	1.333 	1.775 	1.966
2.2 	1.354 	1.593 	1.762 	2.2 	1.260 	1.671 	1.837
2.4 	1.309 	1.500 	1.631 	2.4 	1.210 	1.595 	1.742
2.6 	1.275 	1.433 	1.537 	2.6 	1.174 	1.537 	1.668

-- 212 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	197
c	I 	I	I	=
	γ 	c	P 	P	P	=
	γ
c
P P
P1
=
	γ
n =0 	n =1 	n =2 	c
I I
I
=
	γ
n =0 	n =1 	n =2
2.8 	1.247 	1.382 	1.468 	2.8 	1.146 	1.491 	1.610
3 	1.225 	1.342 	1.414 	3 	1.125 	1.453 	1.562
3.5 	1.183 	1.272 	1.324 	3.5 	1.089 	1.382 	1.474
4 	1.155 	1.225 	1.266 	4 	1.067 	1.333 	1.412
4.5 	1.134 	1.193 	1.225 	4.5 	1.052 	1.297 	1.367
5 	1.118 	1.168 	1.196 	5 	1.042 	1.269 	1.332
6 	1.095 	1.134 	1.155 	6 	1.029 	1.228 	1.280
7 	1.080 	1.111 	1.128 	7 	1.021 	1.199 	1.245
8 	1.069 	1.095 	1.110 	8 	1.016 	1.178 	1.218
9 	1.061 	1.084 	1.095 	9 	1.013 	1.162 	1.198
10 	1.054 	1.074 	1.085 	10 	1.010 	1.148 	1.182
20 	1.026 	1.035 	1.040 	20 	1.003 	1.087 	1.106
30 	1.017 	1.023 	1.026 	30 	1.001 	1.064 	1.079
40 	1.013 	1.017 	1.019 	40 	1.001 	1.052 	1.064
50 	1.010 	1.014 	1.015 	50 	1.004 	1.045 	1.055
100 	1.005 	1.001 	1.007 	100 	1.001 	1.028 	1.034

-- 213 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	198
APPENDIX I 	Calculations to example
When analysing cross-section in Chapter 7 a reinforced concrete cross-section with a
chosen value of the amount of reinforcement ρ=0.335% where used. Here the
minimum reinforcement du to the Swedish shelter regulations, see Räddningsverket
(2003) is used. Since only the amount of reinforcement is changed the material
properties are the same as used in Appendix D, where the beams used in Chapter 7 are
analysed.
I.1 	Moment capacity and load-displacement relation
An estimated value of the required steel area in the tensile zone, according to
Engström (2001) is calculated as:
d	f
M
A
st
s 9	.	0	⋅
= 	(I.1)
where f st is the yield stress in steel, 0.9d is an estimated value of the internal level arm
and M is the maximum moment in the beam, which, in case of a uniformly distributed
load applied on a fixed beam can be calculated as:
8	2
2
⋅
= qL
M 	(I.2)
provided that it is assumed that the support moment M s equals the moment in the
midpoint M f.
The estimated value of the required steel area in the tensile zone can now be
calculated as:
160
3	.	0	9	.	0	10	450	8	2
5	.	2	10	50
9	.	0	8	2 6
2	3	2
=
⋅	⋅	⋅	⋅	⋅
⋅	⋅
=
⋅	⋅	⋅
= d	f
qL
A
st
s 	mm2 (I.3)
The minimum required amount of reinforcement is 0.14%, due to the Swedish shelter
regulations, Räddningsverket (2003):
2	2	2
min	, 	mm	420	3	.	0	0	.	1	10	14	.	0	10	14	.	0
%	14	.	0
=	⋅	⋅	⋅	=	⋅	⋅	⋅	=	⇒
≥
⋅
=
−	− d	b	A
d	b
A
s
s
ρ (I.4
)
In order to have even values of reinforcing steel 	150	10 s	
φ 	is used, the total area of
reinforcement per meter is than:
524	=	s	A 	mm2 /m 	(I.5)

-- 214 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	199
The same amount of reinforcement is assumed in the compression zone.
524	=	=	′ 	s	s 	A	A 	mm2 /m 	(I.6)
The beam capacity is calculated in the same way as when analysing the beams used in
Chapter 7, see Appendix D, and since the calculations is very similar only calculated
values of interest are shown here, when analysing the beam used in Section 11.4.2.
I.1.1 	Stadium I
The equivalent area for the cross-section in stadium I is:
355	.	0	=	I	A 	mm2 (I.7)
and the moment of inertia for stadium I is:
3
10	64	.	3 −
⋅	=	I	I 	mm4 (I.8)
The moment when the first crack occurs in the beam is:
1	.	33	=	cr	M 	kNm 	(I.9)
For a fixed beam subjected to a uniformly distributed load the value of the load
corresponding to the crack moment M cr is (qcr =Pcr /L):
6	.	158
5	.	2
10	1	.	33	12	12 3
=
⋅	⋅
=	= L
M
P cr
cr 	kN 	(I.10)
The stiffness in the elastic range is:
0	.	3332	=	I	K 	MN/m 	(I.11)
and the midpoint deflection of the beam when the first crack occurs is:
0476	.	0	=	cr	u 	mm 	(I.12)
I.1.2 	Stadium II
The equivalent area for the cross-section in stadium II is:
0441	.	0	=	II	A 	mm2 (I.13)
and the moment of inertia for stadium II is:
4
10	12	.	2 −
⋅	=	II	I 	mm4 (I.14)

-- 215 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	200
The moment when yielding starts in the steel is:
0	.	68	=	spl	M 	kNm 	(I.15)
For a fixed beam subjected to a uniformly distributed load the value of the load
corresponding to the moment when yielding starts M spl is (qspl =Pspl /L):
3	.	326
5	.	2
10	0	.	68	12	12 	3
=
⋅	⋅
=	= L
M
P spl
spl 	kN 	(I.16)
The stiffness, just before yielding starts, is:
8	.	193	=	II	K 	MN/m 	(I.17)
and the midpoint deflection when yielding starts is:
68	.	1	=	spl	u 	mm 	(I.18)
The inclination of the load-displacement curve in between the occurrence of the first
crack and the ultimate state is:
7	.	102	=	′	K 	MN/m 	(I.19)
I.1.3 	Stadium III
The height of the compression zone in stadium III is:
0288	.	0	=	x 	m 	(I.20)
and the ultimate moment is:
5	.	78	=	pl	M 	kNm 	(I.21)
For a fixed beam subjected to a uniformly distributed load the value of the load
corresponding to the ultimate moment Mpl is (qpl =Ppl /L):
4	.	502
5	.	2
10	5	.	78	16	16 	3
=
⋅	⋅
=	= L
M
P pl
pl 	kN 	(I.22)
The inclination of the load-displacement curve K' is used up to the load Ppl and the
deflection for load Ppl is:
40	.	3	=	pl	u 	mm 	(I.23)

-- 216 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	201
I.2 	Rotational capacity
The rotational capacity of a fixed beam subjected to a uniformly distributed load is
calculated as in Section 12.2.2.3. Since no shear reinforcement is used ωv is zero 	s	
ω′
is 	calculated 	as 	in 	Equations 	(12.45) 	and 	(12.46) 	where 	524	=	′s	A 	mm2 ,
=	= 	st	sc 	f	f 	450 MPa, 	3	.	0	=	d 	m, 	0	.	1	=	= b	bc 	m and 	22	=	cc	f 	MPa.
03573	.	0
10	22	3	.	0	0	.	1
10	450	10	524 6
6	6
=
⋅	⋅	⋅
⋅	⋅	⋅
=
⋅	⋅
⋅	′
=	′
−
cc	c
st	s
s f	d	b
f	A
ω 	(I.24)
s	
ω 	is calculated as in Equation (12.46) where 	524	=	s	A 	mm2 , 	450	=	st	f 	MPa,
3	.	0	=	d 	m, 	0	.	1	=	= b	bc 	and 	22	=	cc	f 	MPa.
03573	.	0
10	22	3	.	0	0	.	1
10	450	10	524 6
6	6
=
=	′	=
⋅	⋅	⋅
⋅	⋅	⋅
=
⋅	⋅
⋅
=
−
s
cc	c
st	s
s f	d	b
f	A
ω
	ω (I.25)
Since ωs must be larger than or equal to 0.05 ωs=0.05 is used.
bal	
ω 	is calculated as in Equation (12.47) where 	450	=	st	f 	MPa and 	200	=	s	E 	GPa.
( 	) ( 	)	s	bal	
ω
	ω 	>	=
⋅	+	⋅
⋅
= 	−
−
4870	.	0
10	200	450	10	5	.	3
10	5	.	3
8	.	0 	3	3
3
(I.26)
Factor A is then:
9413	.	0
4870	.	0
05	.	0
4	.	1	05	.	0	7	.	1	1
4	.	1	7	.	1	6	.	0	1
=	−	⋅	+	=
=	−	′	+	+	=
bal
s
s	v	A
ω
ω
ω
	ω
(I.27)
The use of not weld able, hot rolled reinforcement gives that the factor B is equal to
0.8 and 	7	.	1	7530	.	0	9413	.	0	8	.	0 	<	=	⋅	=	⋅ B	A 	.
8	.	0	=	B 	(I.28)
In Fel! Hittar inte referenskälla. the moment distribution in the beam is shown when
the mechanism is about to form and an expression for the distance 	support	l ,0 	from the
support to the location where the moment is zero is derived.

-- 217 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	202
Figure I.1 	Moment distribution in beam subjected to uniformly distributed load
when mechanism is about to form ( 	pl	q	q = 	) and derivation of distance
support	l ,0 	.
Factor C , calculated as in Equations (12.51) and (12.52), depends on the location of
the plastic hinge and the distance 	support	l ,0 	is:
366	.	0	5	.	2	14645	.	0	14645	.	0	,0 	=	⋅	=	⋅	= 	L	l support 	m 	(I.29)
The distance 	field	l ,0 	is:
L
q
L
q
B	M	A	M
8
2
qL
u	M
qL =
16
2
u	M
qL =
16
2
support	l ,0 	field	l ,0
0	)	( 	=	x	M
2
L	q u
u	q
16
2
L	q
M u
u =
x
x : 	( )
L
L	L
x
l	L
L	L
x
L	L	L
x
L
x	L	x
x
L	q	x	q	L	q
x	M
0,support
u	u	u
⋅	=	+	=
=	⋅	=	−	=	⇒
−	±	=	⇒
=	+	⋅	−	⇒
−	+	=
85355	.	0
8
´
2
14645	.	0
8	2
8	4	2
0
8
2	2	16
2
1
2	2
2
2
2	2

-- 218 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	203
884	.	0	5	.	2	14645	.	0
2
5	.	2
2 sup	,0	,0 	=	⋅	−	=	−	= 	port	fieldt 	l
L
l 	m 	(I.30)
Factor C for the support and field are then:
20	.	12	3	.	0	366	.	0	10	10 	,0 	=	⋅	=	⋅	= 	d	l	C 	support	support 	(I.31)
63	.	20	3	.	0	884	.	0	7	7 	,0 	=	⋅	=	⋅	= 	d	l	C 	field	field 	(I.32)
Insert Equations (I.40), (I.41), (I.44) and (I.45) into Equation (12.42) and the available
rotational capacities for the plastic hinges are calculated:
0092	.	0	10	20	.	12	8	.	0	9413	.	0 3
,	, 	=	⋅	⋅	⋅	= −
support	pl	d	
θ 	rad 	(I.33)
0155	.	0	10	63	.	20	8	.	0	9413	.	0 3
,	, 	=	⋅	⋅	⋅	= −
field	pl	d	
θ 	rad 	(I.34)
The required rotational capacity is calculated as shown is Section 12.2.2.3.
By means of Equations (12.62) and (12.53) the required plastic rotation capacity can
be calculated. M el in Equations (12.62) corresponds here to the moment where
yielding starts in the reinforcing steel, see Equation (I.15)..
=	−	=
II	c
spl	s
support	pl I	E
L	M
L
u
16
2
,	
θ
=
⋅	⋅	⋅	⋅
⋅	⋅
−
⋅	⋅
= 	−
−
4	9
3	3
10	12	.	2	10	2	.	37	16
5	.	2	10	0	.	68
5	.	2
10	0	.	31	2
0.0235 rad
(I.35)
0470	.	0	0235	.	0	2	2	, 	=	⋅	=	⋅	= 	pl,support	field	pl	
θ	
θ 	rad 	(I.36)
I.3 	Rotational capacity for beam analysed in Appendix D
Since the same cross-section used in this example also where used when comparing
the SDOF analyses with FE analyses in Chapter 7 the analysis of the beam capacity is
found in Appendix D, see case (2.2).
The rotational capacity is calculated in the same way as in Appendix I.2 therefore
only some interesting values and the results are shown here.
1005	=	′s	A 	mm2 , 	=	= 	st	sc 	f	f 	450 MPa, 	3	.	0	=	d 	m, 	0	.	1	=	= b	bc 	m and 	22	=	cc	f 	MPa.
06852	.	0
10	22	3	.	0	0	.	1
10	450	10	1005 6
6	6
=
⋅	⋅	⋅
⋅	⋅	⋅
=
⋅	⋅
⋅	′
=	′
−
cc	c
st	s
s f	d	b
f	A
ω 	(I.37)

-- 219 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14	204
( 	)	05	.	0	06852	.	0
10	22	3	.	0	0	.	1
10	450	10	1005 6
6	6
>	=
=	′	=
⋅	⋅	⋅
⋅	⋅	⋅
=
⋅	⋅
⋅
=
−
s
cc	c
st	s
s f	d	b
f	A
ω
	ω (I.38)
( 	) ( 	)	s	bal	
ω
	ω 	>	=
⋅	+	⋅
⋅
= 	−
−
4870	.	0
10	200	450	10	5	.	3
10	5	.	3
8	.	0 	3	3
3
(I.39)
Factor A is then:
9195	.	0
4870	.	0
06852	.	0
4	.	1	06852	.	0	7	.	1	1
4	.	1	7	.	1	6	.	0	1
=	−	⋅	+	=
=	−	′	+	+	=
bal
s
s	v	A
ω
ω
ω
	ω
(I.40)
The use of not weld able, hot rolled reinforcement gives that the factor B is equal to
0.8 and 	7	.	1	74	.	0	9195	.	0	8	.	0 	<	=	⋅	=	⋅ B	A 	.
8	.	0	=	B 	(I.41)
Factor C , calculated as in Equations (12.51) and (12.52), depends on the location of
the plastic hinge and the distance 	support	l ,0 	, as in Appendix I.2, is:
366	.	0	5	.	2	14645	.	0	14645	.	0	,0 	=	⋅	=	⋅	= 	L	l support 	m 	(I.42)
The distance 	field	l ,0 	, as in Appendix I.2, is:
884	.	0	5	.	2	14645	.	0
2
5	.	2
2 sup	,0	,0 	=	⋅	−	=	−	= 	port	fieldt 	l
L
l 	m 	(I.43)
Factor C for the support and field are then:
20	.	12	3	.	0	366	.	0	10	10 	,0 	=	⋅	=	⋅	= 	d	l	C 	support	support 	(I.44)
63	.	20	3	.	0	884	.	0	7	7 	,0 	=	⋅	=	⋅	= 	d	l	C 	field	field 	(I.45)
Insert Equations (I.40), (I.41), (I.44) and (I.45) into Equation (12.42) and the available
rotational capacities for the plastic hinges are calculated:
0090	.	0	10	20	.	12	8	.	0	9195	.	0 3
,	, 	=	⋅	⋅	⋅	= −
support	pl	d	
θ 	rad 	(I.46)
0157	.	0	10	63	.	20	8	.	0	9195	.	0 3
,	, 	=	⋅	⋅	⋅	= −
field	pl	d	
θ 	rad 	(I.47)
The required rotational capacity is calculated as shown is Section 12.2.2.3.

-- 220 of 221 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis 2006:14 	205
By means of Equations (12.62) and (12.53) the required plastic rotation capacity can
be calculated. M el in Equations (12.62) corresponds here to the moment where
yielding starts in the reinforcing steel, see Equation (D.26).
=	−	=
II	c
spl	s
support	pl I	E
L	M
L
u
16
2
,	
θ
=
⋅	⋅	⋅	⋅
⋅	⋅
−
⋅	⋅
= 	−
−
4	9
3	3
10	79	.	3	10	2	.	37	16
5	.	2	10	8	.	127
5	.	2
10	3	.	18	2 0.0132 rad
(I.48)
0264	.	0	0132	.	0	2	2	, 	=	⋅	=	⋅	= 	pl,support	field	pl	
θ	
θ 	rad 	(I.49)

-- 221 of 221 --