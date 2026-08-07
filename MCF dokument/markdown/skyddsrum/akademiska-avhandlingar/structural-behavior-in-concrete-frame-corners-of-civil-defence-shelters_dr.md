---
title: "Structural Behavior In Concrete Frame Corners Of Civil Defence Shelters Dr"
category: "akademiska-avhandlingar"
originalFile: "skyddsrum/akademiska-avhandlingar/structural-behavior-in-concrete-frame-corners-of-civil-defence-shelters_dr.pdf"
fileType: "PDF"
keywords: ["skyddsrum","pelare","betong","armering","beräkning","explosion","that","concrete"]
summary: "civil defence shelter Structural Behaviour in Concrete Frame Corners of Civil Defence Shelters Non-linear Finite Element Analyses and Experiments MORGAN JOHANSSON Division of Concrete Structures Department of Structural Engineering Chalmers Univer..."
---

civil defence
shelter
Structural Behaviour in Concrete Frame Corners
of Civil Defence Shelters
Non-linear Finite Element Analyses and Experiments
MORGAN JOHANSSON
Division of Concrete Structures
Department of Structural Engineering
Chalmers University of Technology
Göteborg, Sweden 2000

-- 1 of 242 --



-- 2 of 242 --

THESIS FOR THE DEGREE OF DOCTOR OF PHILOSOPHY
Structural Behaviour in Concrete Frame Corners
of Civil Defence Shelters
Non-linear Finite Element Analyses and Experiments
MORGAN JOHANSSON
Division of Concrete Structures
Department of Structural Engineering
Chalmers University of Technology
Göteborg, Sweden 2000

-- 3 of 242 --

Structural Behaviour in Concrete Frame Corners of Civil Defence Shelters
Non-linear Finite Element Analyses and Experiments
MORGAN JOHANSSON
ISBN 91-7197-889-5
©MORGAN JOHANSSON, 2000
Doktorsavhandlingar vid Chalmers tekniska högskola
Ny serie nr 1576
ISSN 0346-718X
Publication 00:2
Arb nr: 1106
Division of Concrete Structures
Department of Structural Engineering
Chalmers University of Technology
SE-41296 Göteborg
Sweden
Telephone + 46 (0)31-772 1000
Cover:
Schematic view of crack pattern obtained in opening (left) and closing (right) frame
corners of civil defence shelter subjected to external pressure.
Chalmers Reproservice
Göteborg, Sweden 2000

-- 4 of 242 --

Structural Behaviour in Concrete Frame Corners of Civil Defence Shelters
Non-linear Finite Element Analyses and Experiments
MORGAN JOHANSSON
Division of Concrete Structures
Department of Structural Engineering
Chalmers University of Technology
ABSTRACT
From a safety point of view it is important that a concrete structure, apart from necessary load
capacity, also is able to show ductile behaviour that allows redistribution of forces so that a
local failure not lead to total collapse of the structure. A structure’s ability to exhibit such
behaviour is highly dependent on the reinforcement detailing of the joint connections between
its independent members. Accordingly, to obtain sound structural behaviour, the joints should
ideally be as strong as the structural members connected to them and show ductile behaviour
in the ultimate limit state. Even though fulfilling these requirements, the reinforcement
detailings in frame corners previously prescribed in the Swedish Shelter Regulations for the
design of civil defence shelters were difficult to apply correctly. Therefore, a simpler method,
by which all reinforcement bars are spliced within the corner region, was proposed and
evaluated.
To examine the effectiveness of the new detailing when subjected to a positive (opening of the
corner) or a negative (closing of the corner) moment, a combination of a literature survey,
static full-scale tests and static non-linear finite element analyses has been carried out. The
main parameters varied were the reinforcement detailing and the reinforcement ratio, and it
was found that the new alternative is suitable to use. However, since a civil defence shelter is
designed to withstand transient loading, such as blast waves from a nearby explosion or the
impact of falling masses from 	a collapsing building, 	this 	also 	has 	to 	be taken 	into
consideration.
When subjected to such loads, the response of a structure may be quite different from that of
static loading. The peak load for transient loads is often several times higher than the
“equivalent” static load used in the design of the shelter. Further, if the load is applied fast
enough, it is possible that part of the structure will still “not be aware” of the loading when
another part reaches failure. Therefore, non-linear finite element analyses based on explicit
integration were carried out to increase the knowledge of how a structure behaves when
subjected to such transient loads. It was found that even though the global structural behaviour
may differ widely there are still large similarities in the local behaviour between a static and a
transient load case. The results imply that the conclusions made in the previous static studies
are valid also for a transient loaded structure.
Keywords: Concrete, frame corners, reinforcement detailing, spliced reinforcement, non-
linear finite element analyses, civil defence shelters, blast load, impact load.

-- 5 of 242 --



-- 6 of 242 --

LIST OF PUBLICATIONS
The following papers are included in this thesis:
Paper I
“Reinforcement Detailing in Concrete Frame Corners”
Submitted to ACI Structural Journal.
Paper II
“Nonlinear Finite-Element Analyses of Concrete Frame Corners”
Published in ASCE Journal of Structural Engineering, Vol. 126, No. 2, February, 2000,
pp. 190-199.
Paper III
“FE Analyses of Concrete Civil Defence Shelters Subjected to Transient Loading”
Submitted to ASCE Journal of Structural Engineering.

-- 7 of 242 --



-- 8 of 242 --

Preface
This study deals with the reinforcement detailing in concrete frame corners of civil defence
shelters and the response of such structures when subjected to transient loads. Experiments
and finite element analyses, based on non-linear fracture mechanics, were conducted to
evaluate a new design proposal. The work presented in this thesis was carried out from
November 1994 to March 2000 at the Division of Concrete Structures, Chalmers University
of Technology. The project was financed by the Swedish Rescue Services Agency.
I wish to thank my supervisor, Professor Kent Gylltoft, for his guidance and support. I would
also like to thank Björn Ekengren, from the Swedish Rescue Services Agency, for his
encouraging engagement in the project, which has resulted in many valuable discussions.
Special thanks are due to Mario Plos, who was an invaluable support in my first year as a
doctoral student, and after that also has provided valuable advice. For their joyful, never-
ending support and encouragement, I thank my fellow colleagues at the Department of
Structural Engineering, especially the doctoral students at the Division of Concrete Structures,
and in particular my colleague Jonas Magnusson who, despite his peculiar behaviour, has
been of great help. Special thanks are also due to my master thesis workers, Mikael Olsson,
Mathias Johansson, Stefan Karlsson and Peter Grassl, whom I have had the pleasure to
supervise within the project and whose contribution is much appreciated. Thanks also to the
staff 	of 	the 	Structural 	Engineering 	Laboratory, 	for 	their 	invaluable 	assistance 	in 	the
experimental part of this work. Special thanks are due to Lars Wahlström for help with photos
and scanned figures. Last, but not least, I would like to express my gratitude to Yvonne
Juliusson for her assistance and help.
Göteborg, March 2000
Morgan Johansson

-- 9 of 242 --



-- 10 of 242 --

I
Contents
Abstract
List of Publications
Preface
Contents
Notations
1 	Introduction 	1
1.1 	Background 	1
1.2 	Research significance 	2
1.3 	Aim of the study 	5
1.4 	Limitations 	6
1.5 	Outline of contents 	7
2 	Reinforcement Detailings in Frame Corners 	9
2.1 	Introduction 	9
2.1.1 	Requirements 	9
2.1.2 	Frame corners studied 	10
2.1.3 	Definition of corner efficiency 	12
2.2 	Mechanical behaviour of different detailings 	14
2.2.1 	Opening frame corners 	14
2.2.2 	Closing frame corners 	21
2.2.3 	Spalling of the side concrete cover 	22
2.3 	Corner efficiency 	26
2.3.1 	Comparison of opening and closing corners 	26
2.3.2 	Influencing parameters
2.3.2.1 	Inclined bars 	29
2.3.2.2 	Radial stirrups 	34
2.3.2.3 	Other important parameters 	35
2.3.2.4 	Detailings that might attain full efficiency 	38
2.3.3 	Estimation of corner efficiency in opening corners 	39
2.3.3.1 	General remarks 	39
2.3.3.2 	Equilibrium model 	40
2.3.3.3 	Empirical expressions 	42

-- 11 of 242 --

II
2.4 	Discussion 	45
2.4.1 	Opening corners 	45
2.4.1.1 	Choosing detailing 	45
2.4.1.2 	Expected efficiency 	46
2.4.1.3 	Use of mechanical reinforcement ratio in the design 	50
2.4.2 	Closing corners 	53
2.5 	Concluding remarks 	54
3 	Non-linear Finite Element Analyses of Concrete Structures 	57
3.1 	Why use finite element modelling? 	57
3.2 	Fracture mechanics for concrete 	57
3.3 	Crack models 	59
3.3.1 	General 	59
3.3.2 	Discrete crack models 	60
3.3.3 	Smeared crack models 	60
3.3.4 	Embedded crack models 	62
3.4 	Localisation 	63
3.4.1 	Tension 	63
3.4.2 	Compression 	67
3.4.3 	Possible solution 	68
3.5 	Numerical approach 	69
3.6 	Finite element analyses of frame corners 	71
3.7 	Concluding remarks 	76
4 	Structural Behaviour at Dynamic Loading 	77
4.1 	General remarks 	77
4.2 	Response at transient loading 	78
4.3 	Blast load 	81
4.3.1 	Explosive shock in air 	81
4.3.2 	Reflection of shock waves 	83
4.3.3 	Diffraction of shock waves 	86
4.3.4 	Pressure-time relation used in finite element analyses 	87
4.4 	Impact load 	88

-- 12 of 242 --

III
5 	Strain Rate Effects in Concrete 	91
5.1 	Introduction 	91
5.2 	Testing at high strain rates 	92
5.3 	Strain rate influence of concrete strength 	95
5.4 	Possible explanations for the increase in concrete strength 	96
5.4.1 	Characterisation of strain rate effects 	96
5.4.2 	Viscous effects 	97
5.4.3 	Structural effects 	102
5.5 	Effect of concrete strength on strain rate sensitivity 	103
5.6 	Effect of strain rate on other material parameters 	106
5.7 	Influence of strain rate on reinforcement 	108
5.8 	Strain rate mesh dependency in finite element analyses 	109
6 	Numerical Solution Methods for Dynamic Problems 	115
6.1 	General 	115
6.2 	Mode superposition 	115
6.3 	Direct integration methods 	116
6.3.1 	General 	116
6.3.2 	Explicit integration method 	117
6.3.3 	Implicit integration method 	119
6.3.4 	Solution of non-linear problems 	119
6.3.5 	Stability 	120
6.3.6 	Way of loading 	122
6.3.7 	Choosing integration method 	124
6.3.8 	Central difference method in Abaqus/Explicit 	125
7 	Conclusions 	127
7.1 	General 	127
7.2 	Suggestions for future research 	129
8 	References 	131
Appendix A 	Summary of Frame Corner Tests
Appendix B 	Simply Supported Beams Reinforced with Spliced Reinforcement
Loops

-- 13 of 242 --

IV
Notations
Roman upper case letters
Aelement 	area of element
As 	reinforcement area
As* active reinforcement area when inclined bars are accounted for
As,i 	reinforcement area of inclined bars
As,r 	reinforcement area of radial stirrups
As,red 	reduced reinforcement area of reinforcement loops
A
φ 	reinforcement area of one bar
C 	compressive force, charge, damping matrix
E 	Young’s modulus
EB 	energy needed to break one floor slab
Ec 	Young’s modulus of concrete
Eimpact 	kinetic energy of falling masses just prior to impact
Es 	Young’s modulus of reinforcement
F 	load
Fc 	compressive force
Fs 	tensile force, resisting force due to the Stéfan effect
FR 	resisting force
Fdyn 	dynamic load capacity
Fsta 	static load capacity
Gc 	shear modulus of uncracked concrete
Gcrack 	shear modulus of cracked concrete
GF 	fracture energy
H 	height of collapsing building
I 	incident shock wave
K 	empirical factor, stiffness matrix
L 	length
M 	moment, mass matrix
MA 	moment in section A
MB 	moment in section B
Mtot 	total mass
Muc 	estimated moment capacity
Muc* estimated moment capacity when inclined bars are accounted for

-- 14 of 242 --

V
Muc,A 	estimated moment capacity in section A
Muc,B 	estimated moment capacity in section B
Mue 	estimated moment capacity using equilibrium model
Mut 	moment capacity in test
P 	load vector, load
Ps- peak underpressure
Ps+ peak overpressure
R 	tensile force, reflected shock wave
T 	tensile force
T - duration of negative phase
T + duration of positive phase
U 	velocity of incident wave, displacement vector
U& 	velocity vector
U&& 	acceleration vector
V 	volume
VI 	velocity of incident wave
VR 	velocity of reflected wave
Roman lower case letters
b 	width
c 	side concrete cover, stress wave velocity
d 	effective height
f c 	compressive cylinder strength of concrete
f c 	characteristic compressive cylinder strength of concrete
f c,cube 	compressive cube strength of concrete
f su 	ultimate strength of reinforcement
f sy 	yield strength of reinforcement
f t 	tensile strength of concrete
f t,dyn 	dynamic tensile strength of concrete
f t,sta 	static tensile strength of concrete
f yk 	characteristic yield strength of reinforcement
f sy,r 	tensile strength of radial stirrups
f(w) 	softening function
g 	gravity

-- 15 of 242 --

VI
h 	distance between two plates
h& 	separation velocity
ht 	distance from top of shelter to centre of collapsing building
i + impulse intensity of positive phase
i - impulse intensity of negative phase
ht 	distance from top of shelter to centre of collapsing building
k 	stiffness
l 	lever arm, crack extension
l A 	lever arm to section A
l B 	lever arm to section B
l crack , l dc 	effective length in equilibrium model
l element 	element length
m 	mass, mass per unit area
n 	number of floors in collapsing building, number of bars
p 	pressure
p0 	ambient pressure
q 	distributed load, dynamic pressure
qimpact 	equivalent static impact load
qweapon 	equivalent static weapon load
r 	radius of bent bar
s 	spacing of reinforcement
s m 	mean crack spacing
t 	width of localisation band, time
t0 	time constant
t a 	time of arrival
u 	displacement
v 	velocity
v0, vr, vs, 	particle velocity
vimpact 	mass velocity at impact
w 	crack opening
w/c 	water-cement ratio
w u 	ultimate crack opening
z, z1 , z2 , z* internal lever arm

-- 16 of 242 --

VII
Greek letters
α 	angle, factor controlling decaying overpressure, factor in the Newmark method
αI 	angle of incident wave
αI,crit 	critical angle at which Mach reflection occurs
αR 	angle of reflected wave
β 	angle, shear retention
γ 	ratio between tensile forces
∆F 	load increment
∆L 	elongation
L&	∆ 	elongation velocity
∆t 	time increment
∆t cr 	critical time step
δ 	displacement, numerical damping in the Newmark method
ε& 	strain rate
εc 	concrete strain
εc1 	strain within localisation band in element using embedded crack model
εc2 	strain in element using smeared crack model
εel 	elastic strain
εcrack 	crack strain
εs 	reinforcement strain
εu 	ultimate concrete strain in tension
εu,l 	ultimate concrete strain in tension when l = l element
εu,s 	ultimate concrete strain in tension when l = s m
ζ 	amount of extra reinforcement loops
η 	efficiency, liquid viscosity
θ 	angle between cracks
θ0,
θr,
θs 	temperature
ξ 	damping coefficient
ρ 	reinforcement ratio, line describing location of triple point, density
ρcrit 	critical reinforcement ratio
ρi 	reinforcement ratio of inclined bars
ρr 	density in reflected wave
ρs 	density in incident wave
σ 	stress
σ1,
σ2 	principal stresses

-- 17 of 242 --

VIII
σc 	concrete stress
σs 	reinforcement stress
σsp 	tensile strength
σx 	tensile stress in x-direction
σy 	tensile stress in y-direction
φ 	bar diameter, eigenvector
ω 	angular frequency
ωcrit 	critical mechanical reinforcement ratio
ωmax 	maximum angular frequency
ωs 	mechanical reinforcement ratio
ωs* mechanical reinforcement ratio when the presence of inclined bars is considered
max
shelter	
ω 	maximum mechanical reinforcement ratio in Swedish civil defence shelters
min
shelter	
ω 	minimum mechanical reinforcement ratio in Swedish civil defence shelters

-- 18 of 242 --

1
1 	Introduction
1.1 	Background
From a safety point of view it is important that a concrete structure, apart from necessary load
capacity, also is able to exhibit ductile behaviour that allows redistribution of forces so that a
local failure not lead to total collapse of the structure. A concrete frame structure’s ability to
meet these requirements is highly dependent on the reinforcement detailing of the joint
connections 	between 	its 	independent 	members. 	Despite 	this, 	the 	discussion 	and
recommendations given in the Swedish building codes and handbooks (e.g. BBK 94, Boverket
1994; Betonghandboken 1990; and BRO 94 1994) about what reinforcement detailing must be
used in reinforced concrete joint connections are rather limited. Accordingly, there is a need
as well as a demand in Sweden for more knowledge in this field, something that apart from
the work presented herein is also made clear by the number of valuable contributions recently
made by, for example, Plos (1995), Karlsson (1999) and Lundgren (1999).
The Swedish Rescue Services Agency, though, presents detailed instructions in its Shelter
Regulations 	on 	how 	the 	reinforcement 	in 	a 	civil 	defence 	shelter 	is 	to 	be 	arranged.
Nevertheless, the detailings for frame corners prescribed in the previous Shelter Regulations,
Swedish Rescue Services Agency (1990, 1994), shown in Figures 1.1a and 1.1b were regarded
as time-consuming and rather difficult to carry out correctly. Consequently, the Swedish
Rescue Services Agency wanted a simpler corner detailing to be used and a research project
was therefore initiated at the Division of Concrete Structures at Chalmers University of
Technology; see Plos (1994a, b). The criterion set up was that the new detailing should be
able to withstand loading at least as well as the conventional ones but also be easier to
assemble at the construction site. With this as a basis the proposal shown in Figure 1.1c,
making use of reinforcement loops spliced within the corner, was worked out. This detailing
has then been thoroughly evaluated and the results obtained and conclusions drawn are
presented in this thesis.
When designing a civil defence shelter according to the present Shelter Regulations, it is for
practical reasons regarded as a statically loaded structure. However, in reality a shelter must
be able to withstand highly dynamic loading due to, for example, blast waves from a nearby
explosion or the impact of falling masses from a collapsing building. When subjected to such
loads, the global response of a structure can be considerably different compared to that of
static loading. The peak load for transient loads is, for instance, often several times higher

-- 19 of 242 --

2
than the “equivalent” static load used in the design of the shelter, but their duration is instead
very limited in time. Further, if the load is applied fast enough, it is possible that part of the
structure will still not even “be aware” of the external loading when another part reaches
failure. Simplified, it can be said that the boundary conditions of the structure change with
time. Due to the strain rates obtained in this kind of loading, the material properties of both
concrete and reinforcement will also change, making the response of the structure even more
complicated to understand. Therefore, the change in material behaviour and change in
structural response of a civil defence shelter, when subjected to such loading, were also
included in the study.
Opening moment
Both closing and
opening moments
Conventional detailings
New detailing
(a)
(c)
inclined
bars
(b)
Closing moment
Figure 1.1 	Reinforcement detailings previously used in the Swedish Shelter Regulations in
(a) closing and (b) opening frame corners. The new reinforcement detailing
evaluated herein is shown in (c).
1.2 	Research significance
When making the design drawing it may seem as easy to use, for instance, the L-shaped
reinforcement detailing shown in Figure 1.1a as that of reinforcement loops in Figure 1.1.c.
However, there are several occasions when this is not true. A good example is the
construction of a civil defence shelter within an existing building. The work is then made

-- 20 of 242 --

3
substantially more complicated by the severe lack of space when reinforcing and casting the
shelter’s concrete members. According to Ekengren (1996) such shelters are approximately
three to four times as expensive to build as those in a newly constructed building. An
important reason for this considerable increase in cost is the difficulty of carrying out the
reinforcement detailings in the structure’s joint connections. When for example the shelter
roof slab is constructed inside an existing building, it is first cast on the ground and then lifted
up to its final position; see Ekengren (1998). After this, the adjoining walls are reinforced, and
it is when the connections between the slab and these walls are to be solved that it becomes
clearly a significant advantage if the joint detailing can be carried out using reinforcement
loops as shown in Figure 1.1c. Accordingly, the advantage of the new proposal is not to
decrease the total amount of reinforcement needed; on the contrary, this detailing may even
result in an increased amount. Instead, the gain is of practical value. By simplifying the frame
corner detailing in this way, the construction work can be carried out in less time and, above
all, with a decreased risk of incorrect positioning of the reinforcement. Consequently, the
simplification may result in a structure of higher quality that is also less expensive to
construct.
Figure 1.2 	Casting and lifting of roof slab in civil defence shelter inside an existing building.
Another 	advantage 	with 	this 	detailing 	is 	its 	potential 	use 	in 	structures 	made 	up 	of
prefabricated members. Here, the possibility to produce the structural members at a factory
during controlled conditions and then just cast the remaining connections at the construction
site seems desirable. When using the conventional detailings, though, this has not been
possible. However, since the reinforcement in the new proposal is spliced within the corner
region only, such solutions may be considerably easier to use.

-- 21 of 242 --

4
Further, when handling very large structural parts, such as the tunnel segments used in the
Arlanda Link, between the centre of Stockholm and Arlanda Airport, e.g. Mörnstad (1998),
the use of the proposed detailing might be very advantageous. Here, the reinforcement cages
for the roof and floor slabs were prefabricated in factory. However, the U-shapes necessary if
the wall reinforcement were included, would render difficulties with transportation and
handling of the cages. Therefore, it was regarded a better solution to instead add the wall
reinforcement at the construction site as shown in Figure 1.3a. The result was that only about
60% of the total reinforcement in the final cages were prefabricated. If reinforcement loops
could have been used instead, though, a simplified substructure of the different structural
members as shown in Figure 1.3b had also been possible. This had then considerably
increased the prefabricated part of the reinforcement cages, and hence made the construction
process be more effective, Mörnstad (2000).
Reinforcement cages before assembling
(a)
prefabricated reinforcement
cages when using
reinforcement loops
Reinforcement cages after assembling
splicing zone between
individual reinforcement
cages
zone where additional
reinforcement were
added
(b)
prefabricated reinforcement
cages when using L-shaped
bars in corners
Figure 1.3 	Schematic view of reinforcement cages before and after assembling in tunnel
segment when using the reinforcement detailings similar to those shown in
Figures1.1a and 1.1c, respectively.

-- 22 of 242 --

5
The traditional approach in the study of concrete structures is to carry out experiments.
However, to study the structural behaviour more thoroughly, the finite element method may
also be used. It has been found that this approach, in which the non-linear behaviour of
concrete may be simulated using non-linear fracture mechanics and plasticity, provides an
important complement to experiments and that its use may result in further understanding of
the concrete response that otherwise would not be possible. Even though the use of non-linear
finite element analyses on concrete structures are comparably new in Sweden, there are still
quite a few that posses the knowledge necessary to adequately simulate their response when
subjected to static loading. Even so, there are still many problems to be solved, of which some
are presented and dealt with in this thesis. However, the use of non-linear finite element
analyses on concrete structures, subjected to transient loads such as impulse loading from a
nearby explosion or impact of falling masses, is still quite modest. Such studies have
previously been made mostly by the military, e.g. the Defence Research Establishment, FOA.
However, such analyses may also be of substantial interest for civilian purposes, e.g.
accidental explosions in the process industry or the impact from a truck colliding at full speed
with a concrete column in a bridge. Further, even though Sweden so far has been more or less
free from terrorist attacks, one should not forget that important installations, such as nuclear
power plants, may still be a potential target. Consequently, the need for further knowledge of
how to carry out both static and dynamic analyses must not be underestimated. Hence, it is
also important to create a foundation at a university where this kind of knowledge can grow
and develop.
1.3 	Aim of the study
The main aim of this research project was to evaluate a new design proposal in Swedish civil
defence shelters and to determine whether it was appropriate to replace the detailings
previously used in closing and opening frame corners with the new alternative. As stated in
Section 1.1 the structural service criterion set up by the Swedish Rescue Services Agency was
that 	the new 	reinforcement 	detailing must 	withstand 	loading at 	least 	as 	well 	as 	the
conventional detailing so that a safe and ductile structure is obtained. To determine whether
this criterion is fulfilled, a better understanding of the behaviour of frame corners under
loading to failure and of the structural response in the corner area is required. Therefore, apart
from a thorough literature survey, full-scale tests and non-linear finite element analyses were
carried out. Experiments provide information on the real behaviour in a structure, while the
latter approach makes it possible to simulate the progressive cracking and change in strain and

-- 23 of 242 --

6
stress states under increased load, and thus provides the means for further understanding and
increased knowledge that otherwise would not be possible. Hence, such a combination may be
a very powerful tool and allows a better understanding of the structural behaviour of the frame
corner.
The load conditions used in the design of a Swedish civil defence shelter are static equivalents
to the dynamic loads expected. However, whether this approximation is appropriate has not
been sufficiently examined. Therefore, the main aim of the dynamic study was to increase the
knowledge of how a shelter behaves when subjected to such transient loads, which was done
by using non-linear finite element analyses. Based on this study, the question whether
conclusions gained in static tests and analyses also are valid for structures subjected to
transient load cases hoped to be answered. Another aim was to gather knowledge about what
influence high strain rate may have on different concrete parameters such as strength and
stiffness.
1.4 	Limitations
The work presented herein can roughly be divided into two parts: static studies of the
behaviour in concrete frame corners and what reinforcement detailing should be used, and
dynamic studies of a civil defence shelter subjected to transient loading. Although the work
presented in this thesis was originally initiated to improve the reinforcement detailing of civil
defence shelters, the results and conclusions reached can of course also be used in other kinds
of concrete structures. Nevertheless, the comparisons and discussions of 	the 	different
detailings made are generally concentrated on their use in civil defence shelters. The corner
study was limited to frame corners of 90°. Further, the influence of haunches in the corner,
and the possible effect that the corner size may have, were not included. The former, though,
are normally not used in a civil defence shelter and the latter is not considered to be a problem
since the dimensions examined are similar to those used in such a structure. However, in
larger structures, such as a concrete bridge, the dimensions used may be far larger than those
studied herein, and consequently a somewhat different behaviour may also be obtained. Some
of the finite element analyses presented were unable to accurately simulate the behaviour
observed in tests. This was due to the material models used and the approximations chosen in
the modelling. As briefly discussed in Section 7.2, though, these shortcomings may be solved,
among other things, by the use of better material models now available.The type of transient
loads that may act on a civil defence shelter causes high load rates on the structure. This in

-- 24 of 242 --

7
turn leads to high strain rates in the material, which is known to affect the properties of both
concrete and reinforcement. Nevertheless, the influence of high strain rates on the material
properties was not taken into account in the dynamic analyses. This simplification was made
mainly for two reasons. First, in the finite element programme used it was not possible to
include these effects in the concrete material models. Second, even though it was possible to
take these effects into account for the reinforcement it was decided not to do so, since the
strain rate obtained here was found to be mesh-dependent; see Section 5.8. Consequently, all
dynamic analyses were carried out using non-rate-dependent material models. Further, no
experimental tests were performed to verify the dynamic analyses. Nevertheless, it is believed
that the knowledge gained will be of significant use.
Another limitation in the dynamic study was that the effects of splinter were neglected in the
finite element analyses. To generalise, the influences of splinter essentially mean two things:
their impact contribution to the impulse load, and the considerable damage the splinters may
cause in both concrete and reinforcement. Further, to complicate matters one cannot be sure
whether the splinter or the blast load will reach the structure first since this, among other
things, depends on the weight of the exploding device and its distance to the structure. What
effect these different cases have on the structure’s ability to withstand the explosion, though,
is not clear. Consequently, to include this part here would have complicated the study too
much and it was thought better to postpone its introduction to a continuing project.
1.5 	Outline of contents
This thesis is composed of an introductory part and three papers published or submitted for
publication in reviewed scientific journals. The introductory part gives a background to the
material treated in the papers, but also discusses subjects not included there. Further, some
sections in the former stand for themselves, and the introductory part and the three papers
should, therefore, be regarded as a whole.
Chapter 2 presents a literature survey of frame corners subjected to opening or closing
moment (static loading). The mechanical behaviour obtained when using different detailings,
primarily the three types shown in Figure 1.1, are discussed. Proposals of how to use this
knowledge in the design are also given. Non-linear finite element analyses and their use to
better understand the mechanical behaviour of frame corners are treated in Chapter 3. In
Chapter 4 a discussion about what structural response is obtained when using transient

-- 25 of 242 --

8
loading is presented. Further, a brief background for the blast and impact analyses carried out
is given. Chapter 5 deals with the high strain rates obtained when a concrete structure is
subjected to such loads, and what effect they may have on the concrete material parameters.
Different approaches found in the literature and possible explanations for this phenomenon
are presented and discussed. The inclusion of strain rate effects in dynamic finite element
analyses is also treated briefly. Chapter 6 describes the background for different integration
methods, and especially the explicit central difference method used in the dynamic finite
element analyses carried out herein. Finally, the major conclusions and suggestions for future
research are given in Chapter 7.
Papers I and II deal with the static behaviour of concrete frame corners. The former presents
full-scale tests of both opening and closing corners carried out by the author and compares the
results with those found in the literature. Paper II, though, presents non-linear finite element
analyses simulating some of the closing corners in these tests. Finally, dynamic finite element
analyses are used in Paper III to simulate the structural behaviour of a civil defence shelter
subjected to the blast load of a nearby explosion and the impact of falling masses from a
collapsing building.

-- 26 of 242 --

9
2 	Reinforcement Detailings in Frame Corners
2.1 	Introduction
2.1.1 	Requirements
In many types of reinforced concrete structures, sectional forces have to be transmitted
between adjoining members, as shown in Figure 2.1. From a safety point of view it is
important that such structures, apart from necessary load capacity, also exhibit ductile
behaviour so that a local failure does not lead to total collapse of the structure. A structure’s
ability to meet this requirement is highly dependent on the reinforcement detailing used in the
joint connections. The positioning of the reinforcing steel in the adjoining members is often
obvious; however, this is not the case in corner joints. Compared with the former, the
detailing of corners in reinforced concrete frame structures represents a relatively untouched
field. Despite important contributions made by, for instance, Nilsson (1973), Mayfield et al.
(1971, 1972), and Stroband and Kolpa (1981, 1983), for every test made on a corner joint
several hundred tests to check the bending and shear capacity of beams have been carried out.
Ideally, a joint should resist a moment at least as large as the calculated failure moment of the
members framing into it, and ensure ductile behaviour in the ultimate limit state. Nilsson
summarises the requirements for a corner subjected to bending as:
• 	the joint shall be able to withstand a moment of at least the same magnitude as those on the
adjoining sections;
• 	for joints which do not satisfy this design criterion, the ductility shall be sufficient to
prevent brittle failure so that redistribution of forces in the structure will be possible;
• 	crack widths at corners under service load shall be limited to an acceptable magnitude;
• 	the reinforcement shall be easy to fabricate and position; the risk of incorrect detailing is
significantly decreased when a simplified detailing is used.
In the following sections, the structural behaviour of frame corners is presented and different
reinforcement detailings are discussed. Since the design criteria in civil defence shelters refer
to the ultimate limit state, the requirement of crack widths at service load mentioned as point
three above are not further considered; the other three criteria, though, are regarded in the
presentation and discussed below.

-- 27 of 242 --

10
gravity loads
internal
pressure
external pressure
explosion
civil defence
shelter
Figure 2.1 	Structures with corners subjected to opening or closing moments. Based on Nilson
and Winter (1991), and Johansson and Karlsson (1997).
2.1.2 	Frame corners studied
A concrete frame corner can be separated into two principal types: those that are subjected to
a positive moment (opening of the corner) and those subjected to a negative moment (closing
of the corner) as shown in Figure 2.2. Generally, the first case is more difficult to detail
properly; see Mayfield et al. (1971) and Nilsson and Losberg (1976). The reason is
schematically shown in Figure 2.3, which shows the difference in the structural behaviour of a
frame corner subjected to an opening or a closing moment. By the use of a very simplified
strut-and-tie model, it can be shown that an opening of the corner tries to split the corner in
two by pushing off the outside concrete portion. This is opposite to what happens when
closing the corner; the tensile and compressive forces then instead interact in a way that
confines the concrete within the corner. This also means that the two cases will present quite
different difficulties in the detailing. However, since the reinforcement detailing in opening
corners is more sensitive than that in closing corners, the former is also treated in this thesis
more thoroughly. A corner region in a structure may, due to different load combinations,
usually be subjected to both opening and closing moments during its service time. This is
especially true in structures subjected to dynamic loading, since the structure then might sway
back and fourth. For simplicity, though, the following presentation treats only the case of
monotonic loading until failure.

-- 28 of 242 --

11
opening moment
closing moment
Figure 2.2 	Definition of positive (opening) and negative (closing) moment.
C
T
C 	T
R
R
T
C
T 	C
R
R
(a) 	(b)
Figure 2.3 	Sketch of the principal forces in a corner subjected to (a) positive (opening)
moment and (b) negative (closing) moment.
As shown in Figure 2.2 a frame corner may be of any angle; experimental studies of opening
corners with other angles than 90° have been reported by Nilsson (1973), Kordina (1984),
Abdul-Wahab and Ali (1989), Abdul-Wahab and Al-Roubai (1998), and Abdul-Wahab and
Salman (1999). To the author’s knowledge no such tests have been carried out on corners
subjected to closing moment. Only frame corners at an angle of 90°, though, are treated here.
In the following sections the structural behaviour of such frame corners subjected to opening
or closing moment is discussed; a thorough summary of the tests treated in this dissertation
can be found in Appendix A.

-- 29 of 242 --

12
2.1.3 	Definition of corner efficiency
As stated in the first point in Section 2.1.1, the strength of a corner shall ideally be at least as
large as that of its adjoining members. In what degree this requirement is fulfilled, is normally
expressed as corner efficiency, and in the following sections this term will also be frequently
used in the presentation and discussion of different reinforcement detailings of frame corners.
The corner efficiency is here defined as the ratio between the moment capacity obtained in
tests, independent of what final failure mode is obtained, to the theoretically estimated
moment capacity of the members (weakest member used) making up the corner. The former
was determined as the product of the external force and the lever arm between its acting axis
and the critical section as defined in Figure 2.4. These sections mark the border between the
corner and its adjoining members, and from this it is clear that somewhat different critical
sections are used for opening and closing moments, respectively. The estimated moment
capacity was calculated in these sections by a cross-sectional analysis using a rectangular
stress block as described in, for example, Betonghandboken (1990) and Eurocode 2, CEN
(1991), where the influence of any possible normal force due to the external load and the
reinforcement on the compressive side was accounted for (if not stated otherwise, the
influence of dead weight was not taken into account).
l
F
M
M
l F
M
M
critical
section
expected
crack
M = F
⋅ l
(a) 	(b)
Figure 2.4 	Definition of critical sections used when determining moment capacity obtained in
tests for: (a) opening moment and (b) closing moment.

-- 30 of 242 --

13
The definition made above may appear as clear and simple. However, when additional
reinforcement is positioned within the corner in order to strengthen it, the extra reinforcement
may also affect the capacity of the adjoining members. This is, for example, the case when
inclined bars are added at the inside of a corner subjected to opening moment, as shown in
Figure 1.1c. 	Whether 	such 	additional 	reinforcement 	should 	be 	accounted 	for, 	when
determining the estimated moment capacity of the adjoining member, can be discussed. In all
previous evaluations of opening frame corners referred to in this thesis, the influence of the
inclined bars have been neglected when estimating the moment capacity of the weakest
adjoining member. Therefore, this approach is herein denoted as the conventional evaluation
method. However, the presence of such bars would of course not only affect the corner
capacity, but also the capacity of the adjoining members. Consequently, it is more correct to
take their contribution into account when determining the moment capacity of the member.
Rather surprisingly, this approach has, to the author’s knowledge, not previously been used in
the evaluation of opening frame corners, and it is therefore denoted here as the new evaluation
method. This approach also makes it possible to consistently compare the efficiency of
different reinforcement detailings. It also gives a rather good indication whether a ductile
behaviour will be obtained, since 100% efficiency in use of an under-reinforced cross-section
will lead to yielding of the reinforcement. Of the detailings compared in the following
sections, though, only the one using inclined bars at the inside of the corner will differ in
efficiency; for the rest of the detailings, the two evaluation methods are exactly the same.
It can be argued that if the corner capacity reached in a test is equal to or higher than that
necessary in the design, all is well. This may be true if only the structure’s strength is
important, and its ductility is of no interest; i.e. the extra reinforcement has then filled its
purpose, and what structural response is obtained at loads higher than the design load is
regarded to be of no importance. Hence, it would then be possible to purposely increase the
amount of tensile reinforcement at the corner in order to provide the corner strength necessary.
However, the magnitude and distribution of the loads that may act on a structure is often not
entirely known, and in such cases it is important that a structure shows ductile behaviour that
allows redistribution of forces. To obtain this, the structure must be capable of large
deformations before final failure. Therefore, an increased moment capacity of the corner joints
may not be an adequate solution since ductile behaviour of the corner may be at least as
important if the structure is to withstand the external load designed for. Especially in a civil
defence shelter, such ductile behaviour is of great importance in enabling the structure to
withstand severe impulse loading, in which very large loads act during a limited time period;
see Chapter 4 and Paper III. Hence, since the dissipation of energy is considerably larger in

-- 31 of 242 --

14
plastic response than in elastic, ductile corner behaviour is more advantageous than that
provided by a corner reaching higher load capacity, but fails in brittle manner. Accordingly, it
might be more important that the second point given in Section 2.1.1, regarding the joint
ductility, is fulfilled than the first point, stating that the joint shall be at least as strong as its
weakest adjoining member.
2.2 	Mechanical behaviour of different detailings
2.2.1 	Opening frame corners
For the opening moment it is quite clear that a crack will form at the inside of the corner.
However, it is perhaps not as obvious that there is also risk of a second inclined crack within
the corner that has to be taken into account when determining the detailing. Figure 2.5a shows
a detailing, denoted Type 1, where this has not been done. This solution was common before
the extensive experimental studies carried out in the late sixties and early seventies (e.g.
Swann 1969; Mayfield et al. 1971, 1972; Balint and Taylor 1972; and Nilsson 1973) that
showed its substantial shortcoming. It was found that this detailing was far from satisfactory,
resulting in efficiencies (i.e. the ratio of the measured capacity divided by the calculated
capacity in the adjoining members) as low as 8%. The reason is that there was no diagonal
reinforcement to resist the diagonal tensile force in the corner (compare Figure 2.3a) and the
compressed concrete outside the tensile reinforcement is therefore pushed off as shown in
Figure 2.5b. When this occurs, the compressive zone suddenly disappears and the corner fails
in a very brittle manner. The presence of L-shaped reinforcement around the outside of the
corner serves little purpose since this reinforcement normally is compressed and, therefore,
cannot prevent failure of the corner. Instead, it might even have a negative effect since it may
assist in pushing the corner off. A comparison with the strut-and-tie model shown in
Figure 2.3 makes it clear that such a corner, without any diagonal reinforcement, depends only
on the resistance of the concrete tensile strength to counteract the tensile force R; thus, using
more reinforcement on either the tensile or compressive sides is of little help.
Nilsson (1973) derived an expression to estimate what bending moment can be applied on an
opening corner when the reinforcement detailing matches that of Type 1. Based on linear
elastic behaviour, he assumed a parabolic stress distribution along an effective length l dc as

-- 32 of 242 --

15
shown in Figure 2.6a, and was thereby able to express what reinforcement ratio
ρ is allowed if
the reinforcement is to yield before concrete tensile failure occurs within the corner. That is, if
the reinforcement ratio
ρ fulfils the requirement
d
l
f
f 	dc
sy
t ⋅	⋅	≤ 3
2
ρ 	(2.1)
where f t is the concrete tensile strength, f sy is the reinforcement yield strength and d is the
effective height, the capacity should be sufficient according to Nilsson. When comparing this
expression to test results, Nilsson also found that it rather well predicts the capacity of corners
reinforced with Type 1 detailing. However, for detailings different from this, the expression
might underestimate the corner capacity very much. Perhaps the main disadvantage of this
expression is that the effective length l dc is not known in advance but has to be determined
from tests or estimated through assumptions. Therefore, a somewhat simplified model, where
all geometrical parameters are given from the dimensions of the corner to estimate a lower
limit of the frame corner capacity, is presented below.
crack 2
crack 1
C
T
T	C
R
C
C
R R
(a) 	(b)
Figure 2.5 	(a) 	Reinforcement 	detailing 	in 	earlier 	practice 	(Type 1) 	which 	is 	not 	very
successful; (b) typical crack pattern at failure when such a detailing is used (no
compressive reinforcement included here, though). From Nilsson (1973).

-- 33 of 242 --

16
R
l crack
f t
β
C2
T2
T1	C1
M1
z1 ≈ 0.9d1
z2 ≈ 0.9d2
α
M1 = T1
⋅z1 ≈ 0.9
⋅T1
⋅d1
M2 = T2
⋅z2 ≈ 0.9
⋅T2
⋅d2
M2
(a) 	(b)
Figure 2.6 	(a) Truss idealisation of corner subjected to positive moment, according to Nilsson
(1973); (b) stress distribution assumed in the corner for the derivation made by the
author.
This derivation is similar to that made by Nilsson, the main difference being that Nilsson used
a parabolic stress distribution and that the effective length used was to be determined from
tests. Here, however, the effective length is assumed to be 2
2
2
1 	z	z	l crack 	+	= 	as shown in
Figure 2.6b, where z1 and z2 are the internal lever arms in the adjacent members. To
compensate for a larger effective length, a triangular stress distribution is assumed instead of
the parabolic one used by Nilsson. In a corner subjected to pure bending, the diagonal force R
acting in the corner can be determined as
2
1
2
2
2
1 	1	
γ	+	=	+	= 	T	T	T	R 	(2.2)
where T1 and T2 are the tensile forces in the smaller and larger adjoining members,
respectively, and
1
2
2
1
T
T
z
z =	=
	γ 	(2.3)

-- 34 of 242 --

17
is a factor obtained from the moment equilibrium M1 = M2 shown in Figure 2.6b. Unless using
over-reinforced cross-sections, yielding of the tensile reinforcement will be obtained before
maximum moment capacity is reached. Hence, the requirement of full efficiency is here
approximated to be fulfilled if the tensile reinforcement yields, i.e.
2
1,
2
1 	1	1	
γ
	γ 	+	=	+	= 	s	sy A	f	T	R 	(2.4)
where f sy is the yield strength of the reinforcement and As,1 is the cross-section area in
member 1. If assuming a triangular stress distribution within the corner as shown in
Figure 2.6b, the concrete resistance force FR offered by the concrete can be estimated as
β	cos
2 ⋅	= crack	t
R
bl	f
F 	(2.5)
where f t is the concrete tensile strength, b is the width of the corner, l crack is the effective
length, and
β is the angle between the direction of the tensile force R and the normal to the
assumed crack direction. Using the assumption for l crack given above, expressing
2
2
2
1
2	1	2
cos	sin	2	cos z	z
z	z
+
=	=
	α
	α
	β 	(2.6)
and setting z1 ≈ 0.9d1 , where d1 is the effective height in the smallest adjacent member, the
force FR can be written as
2
1
1
9	.	0
γ	+
= bd	f
F t
R 	(2.7)
Finally, by setting R = FR it is possible to estimate a reinforcement ratio
ρ in the smallest
adjacent member, below which the reinforcement will yield, as
sy
t	s
f
f
bd
A ⋅
+
=	= 	2
1
1,
1 1
9	.	0
γ
ρ 	(2.8)
However, since
1
2
1 ≤	= d
d
γ 	(2.9)

-- 35 of 242 --

18
this means that different sizes of the adjoining members result in larger resistance against
cracking within the corner. Hence, according to this model the maximum reinforcement ratio
that always would be possible to use, while still reaching yielding in the reinforcement, is
sy
t
crit f
f	45	.	0
=
	ρ 	(2.10)
which corresponds to the case when the two adjoining members are of equal dimensions.
Evidently, the efficiency of detailing Type 1 depends on the concrete tensile strength, the
reinforcement ratio and the steel yield strength. This conclusion also holds true for the
detailings presented below, even though they are not as critical as this detailing.
A possible solution to balance the tensile force R, and thus the failure of the corner, would be
to position reinforcement bars perpendicular to it as shown in Figure 2.7a. Tests on such
detailings, here denoted as Type 2, have also been carried out by several researchers (see
Appendix A), and it has been shown that the use of such radial reinforcement within the
corner 	substantially 	improves 	the 	structural 	behaviour 	of 	the 	corner, 	resulting 	in 	a
considerable increase of the efficiency. The amount of diagonal reinforcement needed across
the crack can be determined by using equation (2.4), making sure that the whole tensile force
R is taken by the reinforcement. Nevertheless, even though this detailing gives considerably
improved behaviour, it does still not fulfil the requirement of full efficiency. This is because
the radial reinforcement is not anchored at the outside of the corner and the equilibrium
requirement of the strut-and-tie model (see Figure 2.3a) can, therefore, not be fulfilled.
Instead, a critical crack can therefore form outside the L-shaped reinforcement as shown in
Figure 2.7b, and the outer concrete part is pushed off. Further, the detailing does not fulfil the
requirement that it should be easy to carry out; see point four in Section 2.1.1. The use of
stirrups may be possible in beam-column corners, but in wall-slab corners such a detailing
could be quite complicated to carry out. Therefore, another solution is necessary if the demand
for an easily fabricated detailing is to be met.

-- 36 of 242 --

19
C
radial
stirrups
T
T	C
(a) 	(b)
Figure 2.7 	(a) Reinforcement detailing of Type 2 where stirrups are positioned perpendicular
to the expected secondary crack. (b) Crack pattern at failure when using this
detailing. From Nilsson (1973).
A possible solution that fulfils this requirement, i.e. easy assembly at the construction site is
detailing Type 3 shown in Figure 2.8a. As in the Type 2 proposal this solution will, due to the
180° bend bars, also present a certain amount of reinforcement perpendicular to crack 2.
Further, when the reinforcement is tensioned at the inside, the loops confine the concrete
sprint, and hinder the forming of a crack here. Hence, as in the Type 2 detailing, the
reinforcement loops force the diagonal crack (i.e. crack 2 in Figure 2.5a) out in the corner
where the tensile stresses are less pronounced. Instead of forming a diagonal crack within the
corner, the cracks then follow the loops until close to the compressive reinforcement, at which
point they deviate in the direction of the adjoining members. Eventually, the cracks propagate
as shown in Figure 2.9 and the concrete outside the reinforcement is pushed off. The
anchorage of the loops is then reduced and the load capacity decreases with increasing rotation
of the loops. Nevertheless, as shown in Paper I, a rather ductile behaviour may still be
obtained.

-- 37 of 242 --

20
C
T
T	C
C
T
T	C
As
0.5 As
As
(a) 	(b)
Figure 2.8 	Reinforcement detailing of (a) Type 3 and (b) Type 4 using reinforcement loops to
confine the concrete within the corner. Type 4 also uses inclined bars to strengthen
the corner.
this part of the corner
is pushed off
1
2
2
3
3
4
(a) 	(b)
Figure 2.9 	Crack pattern in frame corner when using detailing Type 3 or Type 4. The numbers
in (a) show the order of appearance of the crack propagation; (b) shows the crack
pattern after failure for a frame corner using detailing Type 3. Photo from
Johansson and Karlsson (1997).

-- 38 of 242 --

21
Most researchers working with opening frame corners have tested detailing Type 3 or similar
proposals and it has been shown that the efficiencies of this detailing and that of Type 2 are
comparable. However, full efficiency is not obtained with either detailing and since this,
together with an easily fabricated detailing, was the main goal, further studies were carried
out. After an extensive experimental test series, Nilsson (1967, 1973) concluded that such a
solution is possible (when using the conventional evaluation method, see Section 2.1.3) if the
Type 3 detailing is strengthened by inclined bars positioned at the inside of the corner as
shown in Figure 2.8b. Quite naturally, the structural behaviour of this detailing is very similar
to that of Type 3. The inclined bars, though, delay the growing of the first crack at the inside
of the corner and thereby also delay the propagation of the crack outside the compressive
reinforcement. Nilsson determined experimentally that the area of the inclined bars should be
about one-half that of the main reinforcement; see Figure 2.8b. According to Karlsson (1999)
this detailing is nowadays accepted in many countries, possibly in combination with diagonal
stirrups positioned similarly to those in Type 2.
2.2.2 	Closing frame corners
As stated in Section 2.1.2, a frame corner subjected to closing moment is not as sensitive as
one subjected to an opening moment. This is because it in the former case is considerably
easier to attain a reinforcement detailing that may balance the internal forces also after
concrete cracking has occurred. For opening corners, though, this is not the case, and it can
therefore be said that the behaviour of such corners is characterised by the concrete tensile
strength, 	while 	closing 	corners 	depend 	more 	on 	the 	concrete 	compressive 	strength.
Consequently, there also exist several suitable solutions, of which detailing Type 1 and
Type 3, shown in Figures 2.4 and 2.7a, respectively, are two good possibilities.
Since the internal lever arm increases within the corner, it might appear that a joint region in a
closing corner is always stronger than its adjoining members. Yet it has been shown in tests
that the corner in certain cases fails before yielding of the tensile reinforcement, and hence
results in capacities lower than that expected. The possible causes of this behaviour are,
according to Stroband and Kolpa (1983), the following:
• 	premature crushing of the concrete at the inside of the corner in the concrete compressive
zone;
• 	crushing failure of the diagonal compressive strut within the corner;
• 	spalling of the side concrete cover, which causes anchorage failure of the reinforcement.

-- 39 of 242 --

22
Further, if the tensile reinforcement is spliced within the corner, the possibility of an
anchorage failure exists in the same way, as is the case in an ordinary beam with spliced
reinforcement. Of the possible failure types mentioned here, spalling of the side concrete
cover is regarded as especially interesting and is therefore treated more thoroughly in
Section 2.2.3.
Premature crushing of the concrete at the inside of the corner is possible when the
combination 	of 	the 	concrete 	compressive 	strength, 	reinforcement 	yield 	strength 	and
reinforcement ratio is such that a high mechanical reinforcement ratio,
ωs, is obtained. High
compressive stresses are then concentrated in the region of the internal angle; compare the
strut-and-tie model in Figure 2.3b. However, in this region there also exists a favourable
multiaxial compressive state of stress that wholly or partly compensates for these large
stresses and, hence, usually give the corner the strength required to resist concrete crushing.
Such a favourable stress state, though, is not necessarily the case in the diagonal compressive
strut (it might be if confining stirrups are positioned within the corner) and for large values of
ωs there is risk of compressive failure in this part. Stroband and Kolpa derived an expression
which suggests that
ωs must be limited to 0.240 if such a failure is to be avoided.
2.2.3 	Spalling of the side concrete cover
When a bar changes direction, there will be radial compressive stresses as shown in
Figure 2.10a. These stresses give rise to tensile stresses that try to split the concrete in the
plane of the bend. Tests and theoretical studies of this kind of failure in beams have been
carried out by, for instance: Timm (1969), Leonhardt et al. (1973), Franz and Timm (1972),
Kordina and Fuchs (1972), Dragosavic et al. (1975), and Grassl (1999). Wästlund (1935),
Östlund (1963), Elinder and Hallhagen (1967), and Stroband and Kolpa (1983) have
examined the effect of spalling in frame corners. In this section the effects of this phenomenon
and how it can be treated are briefly discussed. For a thorough summary of the behaviour in
the 	concrete 	around 	bent 	reinforcement 	bars 	the 	reader 	is 	referred 	to, 	for 	example,
Timm (1969) or Grassl (1999).
It has been found that the magnitude of the splitting stresses depends on the bar diameter, their
bending radius and the steel yield strength. Further, experimental results indicate that the risk
of spalling failure increases when reinforcement loops such as those in detailing Type 3 are
used, compared to the L-shaped bars in detailing Type 1; see Stroband and Kolpa and Paper II.

-- 40 of 242 --

23
Because of the positive effect of confinement a large side concrete cover has a positive effect
on the resistance against spalling. Further, transverse reinforcement bars within the loops or
radial stirrups around the loops may help in restraining the tensile stresses perpendicular to the
bend. However, although such reinforcement may be easy to assemble in a beam-column joint
it might be very difficult to do this in a wall-slab connection at the construction site.
σ
σ
φ
φ 	π σ	r
s s
s
A
r 	r
= 	= 	⋅ 4
s	c
φ
As
σs
r
As
σs
(a) 	(b)
Figure 2.10 	Schematic view of (a) radial compressive stresses and (b) possible splitting
cracks in the plane of the bent bar. Based on Stroband and Kolpa (1983).
If the splitting stresses reach the tensile strength of the concrete, cracks are formed in the
plane of the loops and spalling of the side concrete cover is possible; see Figures 2.10b and
2.11. If this happens, the reinforcement bars close to the free concrete sides lose their
anchorage and the load capacity decreases, something that according to Stroband and Kolpa
occurs suddenly. However, tests carried out by the author and reported by Grassl show that
this is not necessarily the case; see Appendix B. The reason is that even though the outer
reinforcement bars are lost, resulting in fewer bars available to transmit the load, the
confinement of the interior bars still provides enough anchorage to considerably delay a total
failure. Hence, the post-peak response, i.e. the behaviour after maximum load, depends to a
large degree on what percentage of the total reinforcement amount is affected. That is, if for
instance a beam-column connection reinforced with only a small number of bars (Stroband
and Kolpa had two φ6 in their tests; see Appendix A) loses the outer bars, there is substantial
risk of a brittle behaviour. However, if only a limited number of the total reinforcement bars
available are affected, as is the case in a wall-slab joint, the spalling will have little effect on
the total load capacity, and ductile behaviour is therefore still possible.

-- 41 of 242 --

24
Figure 2.11 	Spalling of side concrete cover in frame corner (Type 3) when using spliced
reinforcement 	loops. 	Photos 	from 	Johansson 	(1996) 	and 	Grassl 	(1999),
respectively.
Spalling of the side concrete cover may be a problem for both opening and closing frame
corners. In the former case, though, failure is often introduced due to other reasons, and side
concrete spalling is therefore not regarded as such a large problem for opening corners. For
closing corners, though, it is considerably larger risk that this failure mode will cause total
corner failure, and then also limit the corner capacity. Nevertheless, tests on opening corners,
presented in Paper I, showed that this phenomena might b very important to better understand
and interpret the test results of opening corners.
Different proposals of how to take into account the spalling of the side concrete cover can be
found in the literature; three of these are compared below. The final expressions are generally
derived to give a minimum ratio r /
φ between the radius of the bend bars and the bar diameter
at which the detailing still is able to avoid spalling of the side concrete cover. CEB-FIP Model
Code, CEB (1993), presents such an expression based on the concrete response when
subjected to splitting forces:
c
sy
f
f
c
r ⋅
+
⋅	≥
φ
φ
φ 	2
6	.	1
2 (2.11)

-- 42 of 242 --

25
where c is the concrete cover perpendicular to the plane of the bend bars, f sy is the steel yield
strength and f c is the compressive strength of the concrete. Using the approximate relation
between the compressive stress f c and the concrete tensile stress f t, given in equation (2.20), it
can be rewritten as
t
sy
f
f
c
r ⋅
+
⋅	≥ 5	.	0
1
042	.	0
φ
	φ (2.12)
which is very similar to that presented in Stroband and Kolpa (1983), i.e.
t
sy
f
f
c
r ⋅
+
⋅	≥ 5	.	0
1
050	.	0
φ
	φ (2.13)
Neither of the above, though, takes into account at what angle the bars are bent, something
that is considered in the Swedish Concrete Code BBK 94, Boverket (1994). Here, an
empirical expression
ö
çç
è
æ +	⋅	−	−	⋅	≥ 	5	.	0
)	2	sin(
1
5	.	0	028	.	0
φ
	α
	φ
c
f
f	r
t
sy where 	5	.	3	≤
φ
c (2.14)
somewhat different from that proposed by CEB and by Stroband and Kolpa is used. Except
for the introduction of the bending angle
α (
α = 180° for a reinforcement loop), though, the
ratio r /
φ depends on the same parameters as above. This introduction of the bending angle
seems reasonable, since tests by both Stroband and Kolpa and the author indicated that the
risk of spalling failure increases when using reinforcement loops, compared to when using L-
shaped bars as in the Type 1 detailing. Dragosavic et al. (1975) also proposed an empirical
expression, in which the influence of transverse bars is taken into account. It is not included
here, though, since it requires a large side concrete cover (c ≥ 4.5
φ) to be valid for use. The
results of the other three expressions are compared in Figure 2.12a. From this it can be seen
that the minimum value of the ratio r /
φ varies quite widely for low values of f sy / f t. For
instance, at a strength ratio of 250, which is quite a reasonable ratio when using mean
strengths, the requirement in BBK 94 is only about 60% of that predicted by the CEB-FIP
Model Code. A possible reason might be that the expression in the former is based on the
characteristic tensile strengths used in BBK 94, which are generally somewhat lower than
those given in, for example, the Model Code for concrete of the same compressive strength.
Nevertheless, in the tests on frame corners presented in Paper I, spalling of the side concrete
cover also occurred despite fulfilling the requirements set by both BBK 94 and the Model
Code. Even when more than doubling the side concrete cover in the tests of opening moment,

-- 43 of 242 --

26
there were strong indications that splitting stresses caused by the bend bars influenced the
response of the outer reinforcement loops. Figure 2.12b compares the ratio r /
φ in the frame
corners, presented in Paper I, using such loops as that required by the Model Code. Here, the
ratio between the side concrete cover and the bar diameter varied as 2 ≤ c /
φ ≤ 4.5, which also
has a considerable influence on the predicted ratio r /
φ allowed. Thus, this very limited
comparison suggests that the expressions given in the literature may be inadequate to use for
spliced reinforcement loops in frame corners.
0
5
10
15
20
100 	200 	300 	400 	500
Stroband
CEB
BBK 94
f sy / ft
r /
φ
0
5
10
15
20
100 	200 	300 	400 	500
f sy / ft
r /
φ
c /
φ = 2
c /
φ = 3.5
c /
φ = 4.5
c /
φ = 3.5
c /
φ = 4.5
c /
φ = 2
(a) 	(b)
Figure 2.12 	(a) Comparison of ratio r /
φ required in different references to avoid spalling of
the side concrete cover when the ratio c /
φ = 2; (b) comparison between tests
and allowable ratio r /
φ according to CEB (1993). Black dot means spalling
failure, grey means that spalling was initiated, and white means no spalling.
2.3 	Corner efficiency
2.3.1 	Comparison of opening and closing corners
When comparing the efficiencies of different corner detailings it is common to plot them as a
function of the reinforcement ratio,
ρ. However, since in Section 2.2.1 it was concluded that
both the concrete and steel qualities are of high importance, it is better to plot the efficiency as
a function of the mechanical reinforcement ratio,
ωs; i.e.:

-- 44 of 242 --

27
c
sy	s
c
sy
s bdf
f	A
f
f =	=
ρ
	ω 	(2.15)
where f c is the cylinder compressive strength of the concrete.
A comparison of the efficiency obtained in tests of opening frame corners reinforced with the
four detailings presented (or similar to those, see Appendix A) is shown in Figure 2.13. To
better visualise the background for the conclusions drawn by Nilsson and others, the
efficiencies were here determined using the conventional evaluation method, i.e. no account
was taken to the extra moment capacity in the adjoining members provide by the inclined bars
in the Type 4 detailing; see Section 2.1.3. Further, of the results containing detailing Type 2
only those tests where the amount of stirrups were able to counteract the tensile force, R, are
included; all tests of this detailing, though, are compared in Appendix A. The reinforcement
ratios 	used 	varied 	between 	0.38 	and 	3.02%, 	and 	the 	approximate 	concrete 	cylinder
compressive strength ranged from 10 to 52 MPa. From this comparison the considerable
inefficiency of the Type 1 detailing and the apparent advantage of the Type 4 detailing,
respectively, are clear (for a complete summary of these test results, see Appendix A). Further,
it can be seen that detailing Type 3 is rather effective even though not reaching full efficiency;
Type 2, though, seems to be somewhat less reliable. Therefore, in the following treatment of
opening corners only the Type 3 and Type 4 detailings are dealt with. A closer look at
Figure 2.13 shows that the efficiency of these two detailings seems to drop dramatically when
ωs exceeds 0.200, thus suggesting that neither detailing should be particularly appropriate to
use for mechanical reinforcement ratios higher than this limit.
The efficiencies of the Type 1 and Type 3 detailings in closing frame corners are compared in
Figure 2.14. It is found that for mechanical reinforcement ratios
ωs below a value of about
0.300 the efficiency is usually in the vicinity of or above 100%. Those results that did not
meet this requirement showed for most cases, a different failure mode than the expected
flexural failure; see also Paper I and Paper II for further discussion. Nevertheless, since one
aim of the work presented in this dissertation was to investigate whether the Type 1 detailing
could be replaced by Type 3, it is especially interesting to note that the two detailings, for
practical purposes, seem to be quite equivalent. Thus, this indicates that such a change also
should be appropriate.

-- 45 of 242 --

28
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 1
Type 2
Type 3
Type 4
Figure 2.13 	Efficiency of reinforcement detailings in frame corner subjecting to opening
moment. In the Type 4 detailing, no account is taken to the inclined bar’s
contribution to the expected moment capacity; see Section 2.1.3.
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 1
Type 3
Figure 2.14 	Efficiency of different reinforcement detailings in a frame corner subjected to
closing moment.

-- 46 of 242 --

29
Figure 2.15 compares the efficiencies of detailings Type 1 and Type 3 in frame corners
subjected to opening and closing moments. From this it is very clear that frame corners
subjected to opening moment are considerably more sensitive than frame corners subjected to
closing moment. This is especially true for the Type 1 detailing, which in closing moment
generally reaches an efficiency of 100%, while it for opening moment usually is below 50%.
The Type 3 detailing provides a substantial larger resemblance when subjected to opening or
closer moment even though the difference in efficiency obtained is still evident. Thus, it can
be concluded that the use of reinforcement loops within the corner seems to be a good choice
for frame corners that might be subjected to both opening and closing moment. Hence, this
detailing is further used in the following section, in which different approaches that might
further increase the corner efficiency in opening frame corners is presented and discussed.
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 1
opening moment
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 3
closing moment
(a) 	(b)
Figure 2.15 	Comparison of reinforcement detailings when subjected to opening or closing
moment: (a) Type 1 detailing; (b) Type 3 detailing.
2.3.2 	Influencing parameters
2.3.2.1 	Inclined bars
According to the comparison made in Figure 2.13 the Type 4 detailing should without doubt
be superior to that of Type 3. However, a comment on these results should be made before any
hasty conclusions 	are 	made. 	As 	mentioned 	in 	Section 2.1.3, 	when 	Nilsson 	and 	other

-- 47 of 242 --

30
researchers determined the efficiency of the Type 4 detailing, they did not include the
contribution to the moment capacity in the critical section from the inclined bars. Neither did
they take this extra reinforcement into account when determining the reinforcement ratio of
the detailing. This approach, the conventional evaluation method, was also used for the results
presented in Figure 2.13. Therefore, it is somewhat deceptive to interpret reported test results
of opening frame corners that make use of inclined bars positioned at the inside of the corner.
However, by using the new evaluation method, described in Section 2.1.3, a consistent
comparison of different reinforcement detailings is possible. As shown in Figure 2.16, the
active amount of reinforcement As* counteracting the crack in the critical section can be
determined as
is	s	s 	A	A	A 	,
*
2
1
+	= 	(2.16)
where As and As,i are the reinforcement areas of the loops and inclined bars, respectively.
Using 	this 	area 	As* when 	estimating 	the 	corner’s 	moment 	capacity 	and 	mechanical
reinforcement ratio, the result will also be quite different; see Figure 2.17. Here, the efficiency
of Type 3 is compared to the modified efficiency of Type 4. It is then clear that their
efficiencies are rather similar, something that also was confirmed in tests by the author; see
Paper I.
i	s	s	s 	F	F	F 	,
*
2
1
+	=
F s
Fs 	Fs,i
Fs*
Fs*
Type 3
A s*	As,i 	As
Type 4
Figure 2.16 	How to take into account the contribution of the inclined bars in detailing Type 4
when transforming it into a Type 3 detailing.
Consequently, from the author’s point of view the Type 4 detailing does not fulfil the
requirement of 100% efficiency. It can be argued that the purpose of adding inclined bars at
the inside of an opening corner is not explicitly there to provide full efficiency in the critical
section, as defined in the new evaluation method described in Section 2.1.3, but to force the
final failure to occur outside the corner. This is also what often happened in tests by Nilsson
and others, which led to the detailing being regarded as successful. However, as discussed

-- 48 of 242 --

31
below and in Paper I, the appearance of a critical crack outside the corner depends to a large
degree on the moment distribution close to the corner and whether the reinforcement loops are
spliced to straight bars just outside the corner or not. If the external moment decreases at
increasing distance from the corner, as is usually the case, one cannot be sure that a critical
crack forms in any of the adjoining members prior to corner failure. Due to the crack distance
obtained in reinforced concrete, the moment acting in a potential critical section outside the
corner may be considerably lower than that in the corner. If this crack section is positioned too
close to the corner, the inclined bars might increase the section’s moment capacity, and hence
further reduce the chance for the final failure to occur there. Therefore, if the inclined bars are
to have a negligible effect on the adjoining member’s moment capacity, the critical crack must
at least form close to the section where the inclined bars reach the compressive zone.
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 3
Type 4
Figure 2.17 	Comparison of the efficiencies of detailing Type 3 and Type 4 when the inclined
bars in Type 4 are considered in determining the capacity and reinforcement ratio
of the detailing, i.e. using the new evaluation method described in Section 2.1.3.

-- 49 of 242 --

32
l A
l B
A
B
C
F 	F	F
F
M B = F
⋅l B
M A = F
⋅l A
Figure 2.18 	Schematic view of potential critical crack sections in an opening corner.
Figure 2.18 shows a schematic case of a corner subjected to opening moment. Here, crack A
corresponds to the critical defined in Section 2.1.3. Crack B is the crack in the adjoining
member that is closest to the corner and even though it in this case forms close to the corner, it
is assumed here that the inclined bars have a negligible influence on the section’s moment
capacity. Depending on what effect the inclined bars have on the moment capacity in
section B, it might instead be crack C that has to develop into a critical crack if final failure is
to occur outside the corner region. Nevertheless, if failure is to be obtained in section B, the
moment MB has to reach the section’s capacity Muc,B before the moment MA reaches the
capacity Muc,A of the corner. The relation between these capacities can be expressed as
Muc,A =
η⋅Muc,B 	(2.17)
where
η represents the efficiency for detailing Type 4. According to Figure 2.18 it varies
between about 0.90 and 1.25 when
ωs ≤ 0.200. Thus, if the critical crack is to form outside the
corner region, the ratio MA / MB has to be larger than the efficiency
η. But since there are an
infinite number of possible load cases, it is difficult to give a general statement of whether this
will happen or not.
Nevertheless, Figure 2.19 shows some examples of the ratio between these moments that may
be obtained for different load cases of an elastic beam with constant stiffness over its length.
Here, the critical section in the adjoining member (i.e. crack B) is assumed to form at a
distance of 0.2 m from crack A. Regarding the combined effect of the inclined bars and the
mean crack distance in the concrete, this distance is in most cases probably underestimated,
which also means that it is an assumption on the safe side. Comparing the moment ratios
MA / MB, obtained in the presented load cases, it is clear that they for most cases are higher

-- 50 of 242 --

33
than the efficiencies reached when using the Type 4 detailing. Hence, failure will occur within
the corner before any critical cracks are able to form in the adjoining members. The
exceptions are the cantilever beams, which for beam lengths of about 4 m and 2 m,
respectively, lead to ratios below 1.10, which makes it reasonable to believe that failure in
these cases may occur in an adjoining member.
2 	3 	4 	5 	6 	7 	8
Beam length, L [m]
1.0
1.1
1.2
1.3
1.4
1.5
MA / MB
L
L
L
1.0
1.1
1.2
1.3
1.4
1.5
MA / MB
2 	3 	4 	5 	6 	7 	8
Beam length, L [m]
L
L
L
(a) 	(b)
Figure 2.19 	Ratio between moment in fixed support and moment at a distance of 0.2 m.
However, if inclined bars are used and the aim to prevent failure within the corner shall be
met, one must make sure that the reinforcement loops are not spliced to straight bars just
outside the corner region. Under no circumstances shall such splices be positioned closer to
the corner than the section where the inclined bars reach the compressive zone; see
Figure 2.20. If they are, the presence of extra reinforcement next to the corner will no doubt
prevent the forming of a critical crack in this region. When using just reinforcement loops,
though, the positioning of the splice probably does not make any difference since the critical
cracks then will form within the corner in either case.

-- 51 of 242 --

34
correct
positioning
of splice
incorrect
positioning
of splice
Figure 2.20 	Correct and incorrect positioning of splices when using inclined bars.
2.3.2.2 	Radial stirrups
As shown in Figure 2.13 the addition of radial stirrups within the corner of detail Type 1, thus
transforming it into detail Type 2, has a very positive effect on the corner efficiency. This
influence has inspired some researchers (Mayfield et al. 1971, 1972; Stroband and Kolpa
1981; and Skettrup et al. 1984) to investigate the influence of such radial bars in combination
with reinforcement loops, i.e. detailings of Type 3 and Type 4. The results of these tests are
summarised in Figure 2.21, and from this it can be seen that the influence of the stirrups (the
amount varying between 25% and 141% of that necessary to counteract the tensile force R) is
not particularly pronounced. In fact it is only for very high mechanical reinforcement ratios
(
ωs > 0.300) in the Type 4 detailing that the stirrups’ presence seems to have any particular
effect. Hence, this suggests that the adding of such diagonal reinforcement within the corner
has a very limited effect if reinforcement loops, such as those in detailing Type 3 and Type 4,
are used. This can be interpreted as that the reinforcement loops are sufficient to prevent the
forming of a critical crack within the loops. Instead, final failure will be similar to that
obtained when no radial stirrups are used, i.e. loss of the concrete part outside the loops and
eventually result in an anchorage failure; see Figure 2.9. That additional stirrups within the
corner do not have the intended effect is not surprising though. Recalling the strut-and-tie
model shown in Figure 2.3a, the tensile force R still has to be balanced by reinforcement
adequately anchored at the outside of the corner. This is still not the case here and full
efficiency is therefore not either to be expected.
Thus, the radial stirrups will more or less act as surplus reinforcement and therefore have little
effect on the ultimate capacity of the detailing. Nevertheless, the improved efficiencies at high
mechanical reinforcement ratio in the Type 4 detailing indicate that the reinforcement
provided still might be of some use. A closer look at those tests without stirrups (carried out

-- 52 of 242 --

35
by Swann 1969 and Skettrup et al. 1984; see Appendix A) shows that all of them failed due to
spalling of the side concrete cover (for a further discussion about this type of failure, see
Section 2.2.3 and Paper I). Accordingly, it seems reasonable to believe that the presence of
radial stirrups within the corner might strengthen the detailing’s resistance against this kind of
failure. It can be concluded that the use of stirrups in combination with the Type 3 and Type 4
detailings may be effective if there is a risk of concrete spalling. Further, the presence of
stirrups may also have a positive effect on the post-peak response; i.e. by confinement the
loops are better tied together and the corner ductility may increase.
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 3 	Type 3s
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 4 	Type 4s
(a) 	(b)
Figure 2.21 	Influence of stirrups in detailing (a) Type 3 and (b) Type 4.
2.3.2.3 	Other important parameters
From Figure 2.13 it is clear that the scatter of the efficiency for detail Type 3 is quite
substantial, and it is therefore of interest to understand better what other factors have a
decisive influence on the corner efficiency.
In most works treating opening frame corners, found in the literature, the reinforcement ratio
is used when comparing the efficiencies of the detailings examined. In this dissertation,
though, the mechanical reinforcement ratio is used to better consider the influence of what
reinforcement and concrete strength are used. Nevertheless, it might still be of interest to
examine whether the reinforcement ratio itself plays a vital role in what efficiency a detailing

-- 53 of 242 --

36
will show. Such a comparison for detailing Type 3 is shown in Figure 2.22 for various
mechanical reinforcement ratios, and from this it can be seen that it is not very obvious
whether a low reinforcement ratio has a positive effect or not when the mechanical
reinforcement ratio is the same. This indicates that it might just as well be parameters other
than the reinforcement ratio that play a vital role in what corner efficiency is obtained.
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
ρ < 0.6%
0.6% ≤
ρ < 0.7%
0.7% ≤
ρ < 0.8%
0.8% ≤
ρ < 1.0%
1.0% ≤
ρ < 1.4%
ρ > 3.0%
Type 3
Figure 2.22 	Efficiencies of Type 3 in opening corner when examining the influence of the
reinforcement ratio.
Jackson (1995) presents an interesting idea that it is the confining effect that is achieved with
the reinforcement loops that is important. Thus, even though a frame corner is made of the
same type of concrete and has the same amount of reinforcement, it will still behave very
differently depending on the number of bars used, i.e. many small bars are better than a few
large 	ones. 	Accordingly, 	Jackson 	suggests 	that 	the 	corner 	efficiency 	depends 	on 	the
reinforcement bar diameter. This idea also supports the statement made in Section 2.2.2 that
the spalling of the side concrete cover is important; see also Paper I. If larger bars are used,
there is also an increased risk of transverse spalling failure. Further, if such a failure is
initiated its effect is, due to a higher percentage of outermost bars, also larger in a frame
corner containing large bars. Figure 2.23a shows the influence of the bar diameter on the
corner 	efficiency. 	Apart 	from 	the 	two 	results 	of 	Abdul-Wahab 	and 	co-workers, 	the
comparison indicates that a smaller bar diameter also results in a higher load capacity, thus
supporting the findings of Jackson.

-- 54 of 242 --

37
In addition, since in the tests presented in Paper I it was concluded that spalling of the side
concrete cover probably affected the maximum load and the risk of spalling depends on the
ratio between loop diameter and bar diameter, this relation was also further examined; see
Figure 2.23b. The loop diameter was here assumed to be proportional to the effective height,
i.e. the ratio shown is d/
φ. These results suggest that a high value of this ratio also results in
higher efficiency. The exception to this is the results reported by Kordina and Fuchs (1970),
who obtained rather high efficiencies even though the d/
φ ratio was relatively low. Their
specimens, though, had a width of 700 mm and were reinforced with a total of six bars, which
may explain the limited influence of a possible transverse spalling failure. Further, one result
from Jackson’s test series obtained a low efficiency despite a high value of the ratio d/
φ.
However, the final crack pattern in this specimen strongly indicates that it spalled on at least
one of its free sides, thus inevitably also decreasing the final efficiency.
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
6 mm
8 mm
10 mm
12 mm
16 mm
19 mm
Abdul-W.
Type 3
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
Jackson
Kordina
Type 3
d/φ > 16
14 > d/
φ ≥ 16
12 > d/
φ ≥ 14
10 > d/
φ ≥ 12
d/
φ = 6.5
(a) 	(b)
Figure 2.23 	Efficiencies of detailing Type 3 in opening corner when examining the influence
of (a) bar diameter, and (b) ratio of effective height and bar diameter.

-- 55 of 242 --

38
2.3.2.4 	Detailings that might attain full efficiency
From the above it is clear that neither of the detailings previously discussed could guarantee
full efficiency when this is defined as in the new evaluation method shown presented in
Section 2.1.3. To succeed in this task, it is necessary to ensure that spalling of the outside part
of the corner does not occur. As shown in Section 2.3.2.2 the adding of radial stirrups around
the reinforcement loops has proven to be insufficient. This is because such reinforcement is
unable to prevent the forming of critical cracks at the outside of the corner; instead the cracks
evade the reinforcement and propagate behind it. Accordingly, to hinder such cracks the
reinforcement bars have to be anchored at the outside of the corner. A detailing that might
fulfil this requirement but which is complicated to carry out is shown in Figure 2.24a. Here,
the radial stirrups within the corner are connected to a anchorage plate positioned outside the
corner, thus enabling the reinforcement to counteract the tensile force R, shown in Figure 2.3a,
once cracking of the concrete has occurred. The amount of stirrups should then be determined
to correspond to this force R. Further, no extra reinforcement loops or inclined bars should be
needed since the stirrups and anchorage plate then fill their purpose. Finally, eventual splices
of loops and straight bars in the adjoining members should, as discussed in Section 2.3.2.1, be
positioned at a certain distance from the corner to enable the forming of critical cracks in the
adjoining members. Whether such a solution would behave as intended, though, has to be
further examined before used in practice. In any case, it is the author’s belief that this
detailing, due to its rather high complexity, might not be very desirable. Nevertheless, it is still
mentioned here as a possible solution to this complex problem.
anchorage plate concrete of
higher quality
(a) 	(b)
Figure 2.24 	Suggestion of possible improvements in the detailings used in opening frame
corners.

-- 56 of 242 --

39
Another way to achieve full efficiency, when using reinforcement loops only, is to make sure
that the mechanical reinforcement ratio
ωs does not exceed the limit given in equation (2.18).
With sufficiently small reinforcement ratios, this might be possible by using concrete of
higher 	strength 	in 	just 	the 	corner 	region; 	see 	Figure 2.24b. 	Hence, 	the 	mechanical
reinforcement ratio in the corner would be determined based on the basis of this higher
concrete strength. Especially fibre-reinforced concrete would then be of great use in such a
procedure, as has also been shown in tests and non-linear finite element analyses of spliced
beams, e.g. Broo and Broo (1997). In addition, due to a more favourable relation between the
tensile and compressive strength compared to that of plain concrete, the value of
ωcrit derived
in 	equation (2.18) 	could 	be 	increased 	when 	using 	fibre-reinforced 	concrete. 	Further,
depending on what fibre amount is used, the considerable increase in fracture energy in such
concrete implies that a more rectangular stress distribution would be more accurate than the
triangular one assumed in Figure 2.6b. Thus, by using fibre-reinforced concrete within the
corner only, it is reasonable to believe that the mechanical reinforcement ratio that guarantees
yielding of the reinforcement could be considerably increased, probably at least as high as
ωcrit = 0.060. Abdul-Wahab and Al-Roubai (1998), for instance, obtained an efficiency of 97%
when the mechanical reinforcement ratio was 0.089 and the fibre volume used was 1%; see
Appendix A. Thus, the use of higher concrete strength in the corner region can be of
considerable advantage. Especially when using prefabricated members such a procedure
seems to be a preferable method, while for in situ casting it may perhaps be somewhat more
difficult to realise.
2.3.3 	Estimation of corner efficiency in opening corners
2.3.3.1 	General remarks
From the comparison of different detailings in opening frame corners presented in Figure 2.13
it is evident that the scatter of the efficiencies obtained is quite large. Even so, some attempts
have been made in the literature to propose an expression to estimate the efficiency of frame
corners using detailing Type 3 or Type 4. It is the author’s opinion, though, that none have
been very successful. Although such an expression is not proposed in this dissertation, the
attempts previously reported are briefly summarised and discussed. For closing corners,
though, it can be concluded that as long as flexural failure is obtained and side concrete
spalling does not limit the corner capacity, the conventional evaluation method, introduced in
Section 2.1.3, is sufficient to use when estimating the expected capacity.

-- 57 of 242 --

40
2.3.3.2 	Equilibrium model
As mentioned above, Nilsson derived an expression that is based on an equilibrium model, see
equation (2.1), and a simplified version of it was presented in Section 2.2.1. Figure 2.25
compares the estimated efficiencies determined according to this method with those obtained
in tests of detailing Type 1, Type 2 and Type 3. The estimated efficiencies for detailings
Type 1 and Type 3 were determined by calculating the tensile stress in the reinforcement by
use of equation (2.8). For Type 2, though, the influence of the radial stirrups was accounted
for by modifying equation (2.7) as
ï
ï
ý
ü
ï
ï
î
ï
ï
í
ì
+
=	⋅
+
+
=
2
,	,
,	,
,
	2
1
1
2
cos
1
9	.	0
max
γ
γ
β
γ
r	s	s	sy
r	s	r	sy
r	s	ct
c
s	ct
R A	f
A	f
A	f
E
E	bd	f
F 	(2.18)
before setting it equal to the tensile force R. Here, Es and Ec are the Young’s modulus for steel
and concrete, respectively; As,s is the cross-section area of the inclined stirrups and f sy ,s is their
yield strength. The tensile stress in the main reinforcement was determined and then used to
estimate the related moment capacity. The estimated efficiency was finally obtained by
dividing this capacity by the estimated ultimate moment capacity in the critical section as
defined in Section 2.1.3; the efficiency, though, was limited to 100%. From Figure 2.25 it can
be seen that when the estimated efficiency is lower than 60% all but four cases are estimated
on the safe side. However, of the tests for detailings Type 1 and Type 2 in which the estimated
efficiency is higher than this, the method’s prediction is generally on the unsafe side. When
comparing the test results of the frame corners using reinforcement loops (i.e. Type 3) it is
evident, though, that the equilibrium model clearly underestimates their efficiency. Hence, it
seems safe to use the expression given in equation (2.10) to determine an upper limit on the
mechanical reinforcement ratio, where yielding of the reinforcement is guaranteed when using
the Type 3 detailing.
According to the CEB-FIP Model Code, CEB (1993), the mean tensile strength, f t, can be
determined as
( 	) 3/2
8	30	.	0 	−	= 	c	t 	f	f 	(2.19)

-- 58 of 242 --

41
Type 2
0
20
40
60
80
100
120
140
0 	20 	40 	60 	80 	100
Estimated efficiency [%]
Efficiency from test [%]
Expected
Type 3
Type 1
Figure 2.25 	Comparison of efficiencies obtained in tests for detailings Type 1, Type 2 and
Type 3 with that estimated by using a equilibrium model.
where f c is the mean compressive cylinder strength. However, in the range of 15 to 50 MPa, a
satisfactory approximation of this expression is
c	t 	f	f 	075	.	0	≈ 	(2.20)
If using concrete with higher strength than this, up to strength of 80 MPa, the approximate
relation
c	t 	f	f 	067	.	0	≈ 	(2.21)
can be applied instead. Using these approximations together with equations (2.10) and (2.15)
it is possible to derive a lower limit of the mechanical reinforcement ratio where the tensile
reinforcement yields as
c
sy
crit	crit f
f
ρ
	ω 	= 	≈ 0.033 when 15 ≤ f c ≤50 MPa 	(2.22a)
≈ 0.030 when 50 < f c ≤80 MPa 	(2.22b)

-- 59 of 242 --

42
2.3.3.3 	Empirical expressions
Below, when comparing the efficiencies of tests using detail Type 4, the conventional
evaluation method is used when determining the efficiencies. That is, the increase in estimated
moment capacity due to the inclined bars is not taken into account, the reason being that this
is the method used when the expressions presented below were originally derived.
Noor (1977) proposed two empirical expressions to estimate the moment capacity Muc for
frame corners reinforced with detailing Type 3 or Type 4, respectively, i.e.
( 	) 	cube	c
Type
uc 	f	bd	M 	,
3 42	.	0	05	.	0 	⋅	+	=
	ρ 	(2.23)
and
cube	c
cube	c
sy
i
Type
uc 	f	bd
f
f
M 	,
,
4 0035	.	0	42	.	0	05	.	0 	⋅
ö
ç
ç
è
æ +	+	=
	ρ
	ρ 	(2.24)
based on his own tests and tests reported by Swann (1969), Mayfield et al. (1972), and
Nilsson (1973). Here
ρ and
ρi are the reinforcement ratios of the reinforcement loops and the
inclined bars, respectively, and f c,cube is the cube compressive strength of the concrete. Noor
also proposed a lower limit
cube	c	uc 	f	bd	M 	,	16	.	0 	⋅	≥ 	(2.25)
determined from test results of frame corners using the Type 1 detailing.
Further, Abdul-Wahab and Al-Roubai (1998) recently proposed an empirical expression to
estimate the moment capacity of opening frame corners reinforced with detailing Type 3 or
Type 4. Here it is also possible to take into account the corner angle
α and whether fibre-
reinforced concrete (FRC) is used or not:

-- 60 of 242 --

43
( 	) 	( 	)	2	cos	2	sin	1
,
2
α
	α	+
⋅
= cube	c
uc
f	bd	K
M 	(2.26)
where K = 0.471 (detail Type 3)
= 0.769 (detail Type 4)
= 0.610 (detail Type 3, FRC)
= 0.833 (detail Type 4, FRC)
This expression has certain similarities to the equilibrium model discussed above, in that it
depends 	on 	the 	corner 	dimensions 	b 	and 	d 	and 	also 	on 	the 	concrete 	strength
( 	cube	cf , 	corresponds here to the tensile strength f t). However, in the absence of a more
thorough theoretical analysis the coefficient K was based on a total of 35 tests carried out by
Abdul-Wahab and Al-Roubai, and Abdul-Wahab and Salman (1999), to match the positive
effect that the reinforcement loops and possibly inclined bars have on the corner capacity.
A comparison of the corner efficiencies obtained when using these expressions to that
obtained in tests is made in Figures 2.26 and 2.27. From these figures it is also evident that the
predictions made using Noor’s expression are far from satisfactory, the worst case predicting
an efficiency of more than 100% (no limitation is given) but not even reaching 40% real
efficiency. Consequently, it would be unsafe to use this expression in the design of an opening
frame corner. However, Abdul-Wahab and Al-Roubai are rather successful in their attempt to
predict a capacity on the safe side. The drawback is that the predictions made in several cases
underestimate the capacity considerably. A major reason for this is that their expression does
not take into account the amount of reinforcement in the corner or what strength it has, i.e.
neglecting two parameters that have proven to have a substantial influence on the corner
efficiency. Although a useful start, such an expression, to be fully satisfying, should also be
able to take into account these two important parameters. Further, it is not clear what
minimum ratio of inclined bars must be present in the corner to use the K-value for the Type 4
detailing. The amount of inclined reinforcement used in the comparison of detailing Type 4
made in Figure 2.27 is never lower than 45% of the main reinforcement. Therefore, it is the
author’s recommendation that if the inclined reinforcement amount is lower than this the
coefficient K for detailing Type 3 should be used.

-- 61 of 242 --

44
0
20
40
60
80
100
120
140
0 	20 	40 	60 	80 	100 	120 	140
Estimated efficiency [%]
Efficiency from test [%]
Expected
Type 3
Type 4
Figure 2.26 	Comparison of efficiencies obtained in tests for detailings Type 3 and Type 4,
with the expressions in equations (2.19) and (2.20), respectively, given by Noor
(1977).
Expected
Type 3
Type 4
0
20
40
60
80
100
120
140
0 	20 	40 	60 	80 	100 	120 	140
Estimated efficiency [%]
Efficiency from test [%]
Figure 2.27 	Efficiencies obtained in tests for detailings Type 3 and Type 4 compared with the
prediction by equation (2.22) given by Abdul-Wahab and Al-Roubai (1998).

-- 62 of 242 --

45
2.4 	Discussion
2.4.1 	Opening corners
2.4.1.1 	Choosing detailing
The comparison made in Section 2.3.2.1 of the structural behaviour of opening corners,
regarding whether to use inclined bars or not, suggests that if the moment distribution close to
the corner is not constant the adding of inclined bars does not have the effect intended.
Consequently, in a real structure the final failure will most likely take place within the corner
region. This together with the discussion presented in Paper I, shows that the inclined bars can
just as well be replaced by reinforcement loops that are simpler to position, i.e. the detailing
proposed in Figure 1.1c. Still, it is important to point out that this solution also is unsuccessful
in guaranteeing full efficiency. However, the aim of adding extra reinforcement loops is to
provide a detailing that leads to a structural response similar to that obtained when using the
generally accepted detailing using inclined bars proposed by Nilsson (1973). The presence of
such extra reinforcement provides an additional strength to the corner so that its final capacity
corresponds to what would have been obtained in the original detailing if fulfilling the
requirement of full efficiency. It should be emphasised that even though the capacities
obtained will be approximately the same, the total structural response will differ. In the latter
case a ductile response similar to that of a reinforced beam would, due to the expected
yielding of the reinforcement, have been the result. In the former, though, final failure will
occur due to loss of anchorage when the compressed concrete outside the loops is pushed off.
Due to this, reinforcement yielding is not reached, and accordingly the joint ductility is
affected negatively. Nevertheless, tests by the author of opening corners, presented in Paper I,
show that a ductile response is still possible. In two of these tests, the reinforcement loops
even yielded at the inside of the corner but still full efficiency was not obtained. It may
therefore be argued that the statements made in Section 2.2.1 that reinforcement yielding will
result in full efficiency is not true. Yet, this can be explained by the occurrence of side
concrete spalling in both tests. The bars at which the strain was registered were positioned far
from the concrete edges and were therefore not affected by the loss of side concrete cover.
Instead, the strain in these bars increased in order to balance the external load when the outer
reinforcement loops unloaded. Consequently, it can be concluded that while neither of these
detailings reaches an efficiency of 100%, they may still satisfy the ductility requirement set in
Section 2.1.1. If the detailing is based on the recommendations given by Nilsson, in which the

-- 63 of 242 --

46
amount of inclined bars shall be at least half that of the main reinforcement, equation (2.16)
states that an amount of at least 35% extra reinforcement loops can be used instead, i.e.
As* = 1.35As. As a result of the author’s work this solution is also what is now prescribed in
the present Swedish Shelter Regulations, Swedish Rescue Services Agency (1998).
Before continuing the discussion it must be clarified that the use of inclined bars, in a
structural sense, is not inferior to the detailing proposed herein, using reinforcement loops
only. Inclined bars may even result in a better solution since there is then still a chance that the
final failure will occur outside the corner region. Tests carried out by the author, though (see
Paper I), indicated that if a failure does occur within the corner, then the presence of a larger
amount of reinforcement loops might have a positive influence on the post-peak ductility. The
major advantage with the detailing using just reinforcement loops, however, is that it may be
considerably easier to carry out and also presents some other advantages as initially discussed
in Section 1.2. Nevertheless, perhaps the greatest gain is that the designer may now have the
freedom to choose the detailing that he or she thinks fits best. There may for instance be cases
where it is regarded as easier to add inclined bars to the detailing rather than extra
reinforcement loops, and then such a detailing should of course be used.
2.4.1.2 	Expected efficiency
In Section 2.3.3.2 it was shown that an upper limit of the mechanical reinforcement ratio, at
which the tensile reinforcement is guaranteed to yield within the corner, could be derived as
ωcrit = 0.033. Thus, it would be appropriate to use the Type 3 detailing without adding any
extra reinforcement loops when fulfilling this requirement. However, it seems reasonable that
even though a frame corner with a mechanical reinforcement ratio of, say, 0.040 would need
some extra reinforcement to reach the moment capacity wanted, it would probably not need all
the extra 35% of reinforcement loops as is currently the case. At what ratio the full amount of
extra reinforcement loops needs to be added is not clear, but an attempt is made here to give a
reasonable estimation that can be used in practice. To do this, the expression proposed by
Abdul-Wahab and Al-Roubai (1998) presented in Section 2.3.3.3 is used. If approximating the
estimated moment capacity as
Mu = 0.9f sy As 	(2.27)

-- 64 of 242 --

47
and set this equal to the estimated capacity in equation (2.26), it is possible to derive a
maximum reinforcement ratio where the efficiency of the detailing reaches 100%. Using
K = 0.471 (i.e. reinforcement loops in plain concrete) and setting
α = 90° the maximum
reinforcement ratio can be written as
sy
cube	c
f
f ,
349	.	0	=
	ρ 	(2.28)
which is similar to the expression derived in equation (2.10). When evaluating the test results
from 	different 	researchers 	the 	relation 	between 	the 	compressive 	cube 	strength 	and
compressive cylinder strength was set to f c,cube = 1.35f c; see Appendix A. Using the same
relation here, the mechanical reinforcement ratio can be expressed as
c
s
f
405	.	0
=
	ω 	(2.29)
This expression is compared to that derived by the author in Figure 2.28, and from this it is
clear that the latter seems to be quite conservative compared to the former. However, this is
mainly due to how the expressions were derived. The critical reinforcement ratio proposed by
the 	author 	is 	based 	on 	the 	equilibrium 	model 	for 	the 	Type 1 	detailing 	presented 	in
Section 2.2.1, while the expression proposed by Abdul-Wahab and Al-Roubai is an empirical
relation based directly on tests results of the Type 3 detailing. Further, it should be pointed out
that the former has an advantage since it predicts a mechanical reinforcement ratio where the
reinforcement is guaranteed to yield before failure of the corner. This is not the case in the
latter 	expression, 	which 	in 	some 	cases 	overestimates 	the 	capacity 	at 	high-predicted
efficiencies. Therefore, the limit of
ωs = 0.033 is herein also preferred. Nevertheless, the
expression in equation (2.29) may still be used to estimate at which mechanical reinforcement
ratio all the extra amount of 35% reinforcement loops must be added. From Figure 2.28 it can
be seen that the value of this expression decreases with increasing value of the compressive
strength. Abdul-Wahab and Al-Roubai give no limit on the concrete strength for using their
expression. But, the maximum cube strength used in the tests on which they based their
expression was about 30 to 40 MPa; using the relation f c,cube = 1.35f c,cyl as above, this
corresponds to a (cylinder) compressive strength of about 22 to 30 MPa. Further, as
previously stated in Section 2.3.1, the maximum compressive strength used in all the tests that
are compared in Figure 2.13 was approximately 52 MPa. This indicates that the expression
proposed by Abdul-Wahab and Al-Roubai should be valid for concrete strengths up to at least
50 MPa. 	Hence, 	using 	f c = 50 MPa 	in 	equation (2.29) 	yields 	a 	mechanical 	reinforce-

-- 65 of 242 --

48
0.000
0.020
0.040
0.060
0.080
0.100
0.120
0 	10 	20 	30 	40 	50 	60 	70 	80
Compressive strength, f c [MPa]
Mechanical reinforcement ratio,
ωs
Abdul-Wahab
and Al-Roubai
Author
Upper limit
Figure 2.28 	Comparison of upper limit of the mechanical reinforcement ratio when yielding
of the tensile reinforcement can be guaranteed.
ment ratio
ωs = 0.058. It is important to point out that this value refers to the mechanical
reinforcement ratio before adding any extra reinforcement loops; once they are added, the
resulting mechanical reinforcement ratio will instead be
ωs* = 1.35⋅
ωs = 0.078. Hereby, an
upper and a lower limit of
ωs are derived in which the amount of extra reinforcement loops
necessary is 0 and 35%, respectively. Recalling that the aim of adding such extra loops by
35%, thus getting a theoretical moment capacity of
Muc* = f sy As*
⋅z * = 1.35⋅f sy As
⋅z * (2.30)
was to make it possible to obtain a corner capacity at least as large as that obtained by the
original detailing if full efficiency would have been reached there; i.e.
Muc = f sy As
⋅z 	(2.31)
Hence, if approximating the internal lever arms as z * = z, an estimated efficiency can be
determined as
74	.	0	* ≈	=
uc
uc
M
M
η 	(2.32)

-- 66 of 242 --

49
These results can be summarised as shown in Table 2.1. When
ωs ≥ 0.058 the minimum
efficiency expected is 74% while for
ωs ≤ 0.033 it is 100%; between these values a linear
interpolation can be used. However, as mentioned in Section 2.3.1, it is not recommended to
use the Type 3 detailing for
ωs > 0.200 and, since 35% extra reinforcement loops are added,
this means that the maximum ratio allowed before adding such loops is
ωs = 0.148.
Table 2.1 	Expected efficiency when using different mechanical reinforcement ratios. Values
are compared to test results in Figure 2.27.
Mechanical
reinforcement
ratio,
ωs 1
Amount of extra
reinforcement loops, γ
[%]
Resulting mechanical
reinforcement ratio,
ωs* 2
Expected
efficiency,
η
[%]
0.033 ≤
ωs 	0 	0.033 ≤
ωs* 100
0.033 <
ωs ≤ 0.058 	0 < γ ≤ 35 	0.033 <
ωs* ≤ 0.078 	100 >
η ≥ 74
0.058 <
ωs ≤ 0.148 	35 	0.078 <
ωs* ≤ 0.200 	74
1Before adding extra reinforcement loops.
2After adding extra reinforcement loops.
Since the work presented herein was initiated to examine the use of reinforcement detailings
in civil defence shelters, it is also of interest to compare the limits of the mechanical
reinforcement ratio with that allowed in the Swedish Shelter Regulations, Swedish Rescue
Services Agency (1998). Here, the minimum reinforcement ratio is set to
ρ = 0.14%. Further,
the concrete used in Swedish shelters shall be of at least strength class K30, resulting in a
mean compressive cylinder strength of about 27 MPa; the mean yield strength of the hot-
rolled deformed bars of type K500 presently used in Sweden is about 550 MPa. Accordingly,
the minimum reinforcement ratio in such shelters corresponds to a mechanical reinforcement
ratio 	029	.	0min ≈	shelter	
ω 	, i.e. somewhat lower than
ωs =0.033 proposed in Table 2.1 at which
yielding 	of 	the 	reinforcement 	is 	guaranteed 	prior 	to 	corner 	failure. 	The 	maximum
reinforcement ratio allowed in the Swedish Shelter Regulations, though, is 1.1%. Combined
with the mean strength values used above, this results in a mechanical reinforcement ratio
224	.	0max =	shelter	
ω 	, i.e. a value higher than the upper limit of 0.200. This indicates that if using
such high reinforcement ratios, concrete of higher strength than K30 is required to obtain an
adequate behaviour of the detailing.

-- 67 of 242 --

50
2.4.1.3 	Use of mechanical reinforcement ratio in the design
Previously it has been discussed what amount of extra reinforcement loops should be added at
different mechanical reinforcement ratios. However, so far the value of
ωs has always been
based on the mean strength values for both concrete and reinforcement. It can be justly
argued, though, that it is on the unsafe side to rely entirely on such mean values when
determining limits to be used in the design. Further, the experimental results referred to herein
were obtained in tests carried out during a relatively short time; i.e. the tests took not more
than perhaps an hour or two to carry out. To the author’s knowledge, no tests on opening or
closing corners are reported in the literature in which sustained loading has been used.
Nevertheless, it is commonly accepted that the strength of concrete usually is lower during
such load conditions. In both the Swedish Concrete Code BBK 94, Boverket (1994), and in
Eurocode 2, CEN (1991), this phenomenon is taken into account by multiplying the concrete
compressive strength with a factor of 0.85. In the former, this factor is already built into the
characteristic values, while in the latter it has to be included within the calculations to
determine the sectional capacity in the ultimate limit state. From this it is clear that it is
important to discuss how the mechanical reinforcement ratio should be determined in the
design of a structure. A suggestion of how to do so in the design of concrete frame corners is
therefore presented below.
A comparison is again made with the recommendations given by Nilsson (1973) who
concluded that the Type 4 detailing should be applicable in opening frame corners if the
reinforcement ratio was lower than 1.2% and 0.8% when the two different Swedish
reinforcement grades Ks40 and Ks60, respectively, were used. In the Swedish Concrete Code
BBK 94, Boverket (1994), this was interpreted as
yk	f
5
≤
	ρ 	(2.33)
where f yk is the characteristic yield strength of the reinforcement. Since this value for Ks40
and Ks60 was approximately 400 and 600 MPa, respectively, it seems like a sound and rather
accurate 	simplification. 	However, 	if 	this 	reinforcement 	ratio 	is 	to 	be 	translated 	to 	a
corresponding mechanical reinforcement ratio, and thus enable a comparison to the limit of
ωs ≤ 0.200 proposed herein, one has to decide what value shall be used for the concrete
strength. The concrete strength used by Nilsson varied somewhat, but can generally be said to
have had a mean compressive cube strength of about 25 to 35 MPa. Considering that his
curing conditions were such that these strengths were perhaps about 5% lower than what

-- 68 of 242 --

51
would have been obtained using the curing conditions described by the Swedish Standard,
BST 	Byggstandardiseringen 	(1991), 	it 	can 	be 	said 	that 	this 	concrete 	approximately
corresponds to that obtained in strength class K20 to K30 today.
Since the characteristic yield strength is used in the expression given in equation (2.33) it
seems reasonable to use the characteristic strength for concrete too. For concrete of strength
class K30 this is, according to BBK 94, f ck = 21.5 MPa and using this strength results in a
mechanical reinforcement ratio, based entirely on characteristic values,
ωsk = 0.232; i.e. a
value that is somewhat higher than that proposed herein. If instead using the recommendation
given by Nilsson, this results in
ωsk = 0.223 which still is a little bit too high. It is worth
noting, though, that the maximum mechanical reinforcement ratio used by Nilsson newer
exceeded 0.200 (see Appendix A), thus satisfying the maximum value of
ωs proposed by the
author.
Therefore, by using the same reasoning as when writing the Swedish concrete codes this,
suggests that it should be sufficient to use the characteristic values of concrete and
reinforcement to determine
ωs. The advantages of using these values are that they are well
known by designers and that, at least in the Swedish regulations, they also include the
influence of long-term loading. If following for example Eurocode 2, in which the long-term
influence is not included in the characteristic values, this effect has to be taken into account
when determining
ωs.
However, since the idea is that the reinforcement should yield to obtain a fully acceptable
detailing, it is important not to underestimate the reinforcement yield strength. This indicates
that it might be more correct (i.e. safer) to use the mean yield strength instead of the
characteristic yield strength when determining what mechanical reinforcement ratio a section
in a reinforced concrete structure corresponds to. It can also be argued that if yielding is to be
obtained in the corner, prior to failure, it should be more correct to use an upper characteristic
value 	on 	the 	reinforcement 	yield 	strength. 	However, 	no 	recommendations 	of 	such
characteristic values are given in, for example BBK 94, and an approximate value on the
mean tensile strength is therefore used. Based on experience of reinforcement tests (type
K500) on various bar diameters carried out at the Division of Concrete Structures at Chalmers
University of Technology, it is the author’s opinion that the mean yield strength usually is at
least 10% higher than that of the corresponding characteristic strength. Accordingly, the
mechanical reinforcement ratio could in the design process approximately be determined as

-- 69 of 242 --

52
ck
yk
ck
sy
s f
f
f
f 	⋅
≈	= 1	.	1
ρ
	ρ
	ω 	(2.34)
Using this expression to recalculate the mechanical reinforcement ratios of the test results of
detailing Type 3, the relations shown in Figure 2.29 can be determined. The results are also
compared to the relation presented in Table 2.1, and this indicates that the limitations and
efficiencies presented there should be appropriate to use.
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Mean strength
Characteristic strength
Expected efficiency
Type 3
Figure 2.29 	Comparison of test results when the mechanical reinforcement ratio is based on
the mean and characteristic compressive strengths. The “expected efficiency”
refers to the values given in Table 2.1.

-- 70 of 242 --

53
2.4.2 	Closing corners
As discussed in Section 2.2.2 the reinforcement detailing in closing frame corners causes far
fewer problems than that in opening corners. The test results suggest that both detailings
examined would be acceptable for mechanical reinforcement ratios as high as
ωs = 0.200. For
higher values, the test data are somewhat too scarce to provide a definite statement. It seems
likely, though, that these detailings will be effective only up to a certain ratio; Stroband and
Kolpa (1983), for instance, suggest that
ωs ≤ 0.240 if crushing of the diagonal compressive
strut is to be avoided. However, of the three failure types mentioned in Section 2.2.2, spalling
of the side concrete cover seems to be more dangerous when using spliced reinforcement
loops within the corner. Here, it is primarily not the mechanical reinforcement ratio that is
important, but rather what combination of bending radius, bar diameter, side concrete cover,
and concrete and reinforcement strength is used. A very limited comparison with the tests
reported in Paper I suggests that the expressions given in the literature may be inadequate to
use 	for 	spliced 	reinforcement 	loops 	in 	frame 	corners. 	Nevertheless, 	as 	discussed 	in
Section 2.2.3, whether this kind of failure is dangerous or not depends very much on the
number of bars used in the corner; a greater number of small bars is better than large but few
bars. Generally, though, it can be stated that spalling of the side concrete cover is not really a
problem 	in 	wall-slab 	joints, 	while 	in 	beam-column 	connections 	it 	may be 	of 	major
importance. As is the case for opening moment, however, an increase in concrete strength
within the corner may be the solution to this kind of problem. When determining the
mechanical reinforcement ratio in the design of closing moments, the approach described in
Section 2.4.1.3 can be used.
As discussed in Section 2.2.1 and shown in Figure 2.13, the Type 1 detailing is very
inefficient for opening corners. This might not be a problem in statically loaded structures
where it is known that the corner will not be subjected to any opening moments. A civil
defence shelter, though, must be able to withstand highly transient loads such as the blast
pressure of a bomb exploding nearby. Therefore, the corner regions will also be subjected to
both opening and closing moments. Even though the stresses due to opening moment in a
corner may be substantially lower than what it was primarily designed for in closing moment,
they may very well still exceed the capacity provided by the Type 1 detailing. The Type 3
detailing, though, is able to resist opening moments that are at least about 75% of the closing
moment. Thus, by replacing the conventional detailing (i.e. Type 1) with the new proposal
(Type 3), a considerable improvement of the structure’s total behaviour is also obtained.
Consequently, this is what has been done in the present Swedish Shelter Regulations.

-- 71 of 242 --

54
2.5 	Concluding remarks
The use of inclined bars in opening frame corners may not be as efficient as commonly
thought. Instead the inclined bars may as well be replaced by an equivalent amount of extra
reinforcement loops, thus resulting in a detailing that may be considerably easier to carry out
at the construction site. Neither detailing, though, fulfils the requirement of full efficiency as it
is 	defined 	herein 	(new 	evaluation 	method, 	see 	Section 2.1.3) 	unless 	the 	mechanical
reinforcement ratio is sufficiently low. It is common to relate the corner efficiency to the
reinforcement ratio. However, the results herein show that the reinforcement and concrete
strengths also play a vital part for the corner behaviour and, therefore, the use of the
mechanical reinforcement ratio
ωs is a better approach. Further, comparisons of test results on
opening corners indicate that the use of many small bars in favour of a few large ones has an
advantageous effect on the corner behaviour. The ratio between the effective height and the
bar diameter of the loops also seems to have a positive effect on the efficiency, since this
decreases the risk of side concrete spalling. An upper limit of the mechanical reinforcement
ratio,	
ωs = 0.033, 	was 	derived 	for 	which 	full 	efficiency 	is 	guaranteed, 	provided 	that
reinforcement loops such as those proposed herein are used. Due to this, some possible
solutions that may reach higher efficiency are also discussed and it is concluded that perhaps
the best method, if using high reinforcement ratios and full efficiency still is to be achieved, is
to increase the concrete strength within the corner. Fibre-reinforced concrete is then believed
to be especially advantageous, not least due to its considerably larger fracture energy in
tension. Moreover, it is concluded that if inclined bars are to be used it is important not to
splice reinforcement loops and straight bars just outside the corner region.
Frame corners subjected to closing moment are less sensitive to which reinforcement detailing
is used. Consequently, even though test results indicate that the use of reinforcement loops
causes higher splitting stresses, this detailing has proven to be at least as efficient as the
conventional one. An important reason is that the negative influence due to eventual spalling
of the side concrete cover will be of minor, if any, importance in a civil defence shelter. Here,
a corner region will be confined in the transverse direction due to the three-dimensional
structure, and if this is not enough, the large numbers of bars in a wall-slab connection in such
a structure ensure that the change in response will be negligible. In a beam-column joint,
though, side concrete spalling may become a major problem, so this kind of failure cannot be
neglected in such structures. Therefore, it is also a bit worrying that the expressions found in
different codes do not seem to be fully reliable for predicting the initiation of such splitting
cracks when reinforcement loops are used in frame corners. Nevertheless, it was concluded

-- 72 of 242 --

55
that the use of the new detailing in closing corners is a considerable improvement in a civil
defence shelter, since such corners may be subjected to both opening and closing moments
during the transient loading they are designed to withstand. Consequently, the findings
presented 	herein 	strongly 	suggest 	that 	the 	new 	reinforcement 	proposal 	of 	spliced
reinforcement loops within the corner, introduced in Section 1.1 is suitable to replace the
conventional detailings in both opening and closing frame corners in civil defence shelters. In
opening corners, though, an extra amount of up to 35% extra reinforcement may be required.
As a result of the work presented here, this detailing is now prescribed in the present Swedish
Shelter Regulations, Swedish Rescue Services Agency (1998).

-- 73 of 242 --

56

-- 74 of 242 --

57
3 	Non-linear Finite Element Analyses of Concrete
Structures
3.1 	Why use finite element modelling?
When studying the response of a concrete structure subjected to external load, the traditional
way is to carry out experiments in which different parameters are varied. The observations
made may then be used to propose mechanical or empirical models that can adequately
describe the structure’s behaviour. However, not only is this approach quite expensive but it
cannot be counted on to give all the information needed. Another approach is to make use of
the advanced computational techniques available today. By using the non-linear finite element
method, in which the concrete material models are based on non-linear fracture mechanics to
account for cracking, together with plasticity models for the reinforcement steel and the
concrete in compression, the need for experiments can be greatly reduced. In such a finite
element analysis, it is possible to evaluate the response of a structure more thoroughly than
can be done in an experiment. However, the experiments cannot be replaced completely since
they are still vital to check whether the finite element simulations correspond to reality. This
means that even if both methods have their advantages when used alone, they can become an
even 	more 	powerful 	tool 	when 	used 	together. 	Accordingly, 	in 	combination 	with 	the
experiments, the use of non-linear finite element analyses will result in a better understanding
and prediction of the mechanical behaviour in a structure during loading to failure.
This chapter tries to give a brief background for the use of non-linear finite element analyses
when simulating the behaviour of concrete structures. Especially the problems associated with
localisation, which occurs when a crack is initiated or the peak strength of concrete is reached,
are dealt with. Further, results from finite element studies on concrete frame corners are
presented and briefly discussed.
3.2 	Fracture mechanics for concrete
The fracture mechanics models commonly used for concrete originate from studies of the
initiation and propagation of a crack in a uniaxial concrete tensile test. In a concrete structure,
cracking occurs when the tensile strength of concrete is reached. Figure 3.1 sketches the
failure development of a crack in a concrete specimen subjected to increasing tensile
deformation; a typical mean stress-displacement relation for such a test specimen is shown in

-- 75 of 242 --

58
Figure 3.2. When the specimen is loaded in tension, microcracks form at local weak points
(Figure 3.1b) and under increasing load these microcracks become connected to each other
and are localised to a fracture zone at the weakest section (Figure 3.1c). After the maximum
load 	is 	reached, 	the 	tensile 	strength 	in 	the 	fracture 	zone 	decreases 	with 	increasing
deformation, while the strain outside the zone decreases (Figure 3.1d). Eventually, a true crack
that cannot transmit any tensile stresses is formed in the zone (Figure 3.1e). The concrete
around the formed crack, which has never reached the tensile strength, will then unload
completely and a redistribution of stresses and deformations in the structure takes place.
L
σc = 0
(a)
σc = f t
(w = 0)
(c)
σc < f t
(b)
( 	)	1 +
ε c L 	( 	)	1 +
ε c L
( 	)	1 + 	+
	ε c L 	w
(d) 	(e)
σc = f(w)
(0 < w < w u)
( 	)	1 + 	+
	ε c L 	w w
σc = 0
(w ≥ w u)
Figure 3.1 	Stages in the formation of a crack in a concrete specimen subjected to increasing
elongation.
Once a fracture zone has formed, the stress transferred through the zone depends upon the
crack opening w and can be defined as
σc = f(w), where f(w) is a function that describes the
softening behaviour of the concrete; see Figure 3.2. The area under the softening curve, f(w),
represents 	the 	energy 	release 	when 	concrete 	cracks 	and 	is, 	according 	to 	Hillerborg

-- 76 of 242 --

59
∆L
εc
⋅L 	c w c
σc
εc 	c w c
σc	
σc
εc 	w
w u
GF
σc = f(w)
Figure 3.2 	Mean stress-displacement relation for a uniaxial tensile test specimen. The
displacement is separated into a stress-strain relation and a stress-crack opening
relation. The area under the softening curve f(w) represents the fracture energy GF.
et al. (1976), the mean energy per unit area of a formed crack. This energy, called the fracture
energy and denoted GF, is an essential concept when modelling cracking in concrete. Fracture
mechanics for concrete and concrete structures in general is treated by, for instance, Elfgren
(1989), and Hofstetter and Mang (1995).
3.3 	Crack models
3.3.1 	General
In finite element modelling of cracks in concrete, there are three major concepts for treating
cracks: the discrete crack approach, the smeared crack approach and the embedded crack
approach. In this section, only the principal differences in these approaches are mentioned.
More thorough descriptions of them can be found in, for example, Hofstetter and Mang
(1995) or Jirasek (1999). A historical background of different crack models is not given herein
but may be found in, for example, Kwak and Filippou (1990), or de Borst (1995).
Common to all models is that a crack is initiated when it fulfils a so-called crack initiation
criterion. This is usually taken to be when the maximum principal stress reaches the tensile
strength of the material, although there are variants considering, for example, the influence of
the multiaxial stress state. Once initiated, the crack response is described by a stress-
displacement or stress-strain relation based on the fracture energy in the material.

-- 77 of 242 --

60
3.3.2 	Discrete crack models
In the discrete crack approach, the crack is modelled as a geometrical discontinuity and
separate elements are used to simulate the cracks and the material between the cracks. It can
be 	said 	that 	the 	method 	lumps 	the 	deformation 	due 	to 	cracking 	into 	discontinuous
displacements. The fictitious crack model presented by Hillerborg et al. (1976), in which the
concept of fracture energy was first introduced, is such a model and the crack response is here
described by a stress-crack opening relation. However, since separate elements are used to
model a crack in the discrete crack approach, the possible crack path must be assumed in
advance and the finite element mesh arranged so that the crack path follows the element
boundaries. This is a serious drawback of the approach; a great amount of work is required to
establish the finite element mesh since the user has to decide where and how the cracks may
arise. It also imposes a limitation on the spontaneous crack pattern.
3.3.3 	Smeared crack models
According to Rots (1988), the smeared crack approach is the counterpart of the discrete crack
approach. Here, the localised non-linearity of the crack is “smeared” out over the finite
element, i.e. all the material deformations, including the crack, are considered in the same
element 	and 	hence, 	cracks 	may 	form 	in 	each 	integration 	point 	within 	the 	element.
Accordingly, a cracked solid is modelled as a continuum allowing the cracked material to be
described with a stress-strain relation. As this means that the crack pattern need not be taken
into account in advance, the smeared crack approach is a more attractive procedure than the
discrete crack approach. The smeared crack models reported in the literature can be
subdivided into the following: fixed orthogonal cracks, fixed non-orthogonal cracks, rotating
cracks and plasticity models.
In the first two kind of model, once a crack is initiated it is permanently locked in a direction
perpendicular to the maximum principal stress at the time of initiation. Both methods allow
the formation of additional cracks at the same point. However, as indicated by its name, in a
fixed orthogonal crack model such cracks may only form perpendicular to already initiated
cracks. In non-orthogonal models, though, this limitation does not exist. Instead, the number
of cracks that may form at an integration point is determined by a threshold angle chosen by
the user. A new crack may only arise if it forms at an angle to already existing cracks that
exceeds the threshold angle. Further, once initiated a fixed crack is never removed. This

-- 78 of 242 --

61
means that even though the crack at a later stage closes completely it will still affect the
initiation of further cracks at the same integration point. Hence, as schematically shown in
Figure 3.3, the principal stresses may also become substantially larger than the tensile strength
without causing a new crack. To take into account this possible stress-locking, the concept of
reduced shear stiffness over the crack is introduced by the use of a so-called shear retention
factor
β. This means that the shear modulus of the cracked concrete, Gcrack, is given as
Gcrack =
βGc 	(3.1)
where Gc is the shear modulus of the uncracked concrete and 0 ≤
β ≤ 1.
Non-orthogonal models, though, due to their lower restriction on secondary cracks, are less
sensitive to such locking than orthogonal models.
σ1 = f t	
σ2 = 0
σx = 0	
σy = f t
θ ≠ 90°
	θ = 90°
σ1 = 0	
σ2 < 0
σx = 0	
σy < 0
σ1 = f t	
σ2 < 0
σx < f t	
σy < 0
σ1 > f t	
σ2 < 0
σx = f t	
σy < 0
(a) 	(b) 	(c) 	(d)
x
y
σ1
σ1
σ2
σ1	
σ2	
σ1	
σ2
σ2
Figure 3.3 	Schematic view of the initiation of a first and second cracks in a fixed non-
orthogonal crack model: (a) initiation of horizontal crack; (b) crack closes; (c)
principal stress reaches tensile strength, angle θ ≤ 90°, though, and a new crack
cannot form; (d) vertical crack forms when
σx = f t , note that
σ1 > f t .
The rotating crack model was developed as an alternative to the non-orthogonal crack model
described above. In this model the crack orientation follows the normal to the direction of the
principal strain. However, to retain the consistency of using principal stress-strain curves to
describe the cracked material response, the principal stress directions are forced to coincide
with those of the principal strains; see Rots (1989). The effect can be interpreted as a single
crack, whose orientation is continuously updated with respect to the present stress state.
Hence, it may also be considered to act as a fixed non-orthogonal crack model in which the

-- 79 of 242 --

62
threshold angle is set to 0°, Rots (1988). Up to three orthogonal cracks may appear at the same
integration point, and thus there will be no shear stresses acting across the crack. Accordingly,
there is no need to use a shear retention factor for cracked concrete. Hence, the rotating crack
model has an advantage over the fixed crack approaches since the kind of stress-locking
obtained there can be avoided; see Feenstra (1993). Crack models based on plasticity and
utilising the Rankine yield criterion have the same advantage and also show approximately the
same behaviour as that of rotating crack models, Feenstra (1993). These types of models have
also proven to agree better with experimental results than does a fixed crack model; see Rots
(1989) and Lundgren (1999).
The finite element analyses presented in Paper II were performed using fixed non-orthogonal
cracks, and the dynamic analyses presented in Paper III used a fixed orthogonal crack model.
Rotating cracks were not used because this approach was not implemented in the programme
versions used; otherwise it would probably have been chosen due to its advantages regarding
stress-locking.
3.3.4 	Embedded crack models
To simplify, it can be said that the embedded crack concept is something like a mixture of the
discrete and the smeared crack approaches. According to Jirasek (1999) the embedded crack
model combines the strong points of these two approaches. As in the smeared concept, no
account has to be taken of where cracks may appear when meshing the structure. However,
instead of spreading out the crack over the whole element volume, in the embedded crack
model it is treated more like that in the discrete crack approach. The deformation due to the
crack is here treated as a strain or displacement discontinuity in a localisation band within the
element; e.g. Olofsson et al. (1995), Larsson et al. (1995) and Åkesson (1996). That is, in a
case of a pure tensile situation all the deformation belonging to the crack is gathered within a
zone across the element, as schematically shown for the three-node element in Figure 3.4a,
and hence the response outside this zone will be elastic. If a smeared crack model had been
used instead, the strain would have been smeared out over the element as shown in
Figure 3.4b.

-- 80 of 242 --

63
t
∆L
L
F
Embedded crack 	Smeared crack
εc1
εel
εc2
cracked
region
( 	)	t	L	t	L 	el	c 	−	+	⋅	=	∆
	ε
	ε 1
L	L 	c ⋅	=	∆ 	2	
ε
(a) 	(b)
Figure 3.4 	Schematic view of the strain distribution in a three-node element subjected to an
elongation
∆L when using (a) an embedded crack model, and (b) a smeared crack
model.
3.4 	Localisation
3.4.1 	Tension
As mentioned above, a stress-crack opening relation is often used to simulate the softening
curve of cracked concrete. There are many proposals of what this relation might look like, but
since the bilinear relation given in Gylltoft (1983) has been used in all analyses in this work, it
is also used in the coming discussion. The fracture energy GF and tensile strength f t are here
used to calculate an ultimate crack opening wu where the post-peak stress reaches zero; see
Paper II or III. However, since the input data to the crack models used are based on stress-
strain, the stress-crack opening relation has to be smeared over a certain distance, the crack
extension l. Thereby, the ultimate crack strain
εu can be determined as
l	f
G
l
w
t
F	u
u
4
=	=
	ε 	(3.2)
From this expression it is clear that the value of the crack extension l is just as important as
the fracture energy GF when determining the ultimate crack strain
εu. Evidently, the numerical
response will be accurate only if the width of the softening region obtained in an analysis is
equal to the assumed crack extension l. It is therefore a very important issue to accurately
determine this length prior to carrying out the analysis.

-- 81 of 242 --

64
The crack pattern obtained in an analysis does differ from case to case depending on, for
example, geometry, boundary conditions and load conditions. However, in the case of
unreinforced concrete a crack usually localises within a row of elements as schematically
shown in Figure 3.5a. In such a case, a correct crack extension would be to use the length of
the element in which the crack localises. If using a smeared crack approach, l is usually set to
l element, the length of the element perpendicular to the crack; see Paper II. However, since the
direction of the crack might be difficult to know in advance, or if cracks form in more than
one direction in the element, a mean value is normally used. A common approximation in a
two-dimensional model is to determine l element as
element	element 	A	l 	= 	(3.3)
where Aelement is the area of the element in question. Accordingly, in a mesh with different
element sizes the length l also differs between elements of different size. If instead using the
embedded crack model, it is considerably easier to determine this length, since here the width
of the localisation band is what will represent the length l element. In a reinforced concrete
structure, though, it may be more complicated to determine the expected crack extension.
The above reasoning holds true also in a reinforced concrete structure in which the interaction
between the reinforcement and the surrounding concrete is modelled accurately. In such a case
the cracks will, as schematically shown in Figure 3.5b, appear in a way similar to that
obtained in tests. However, if perfect bond is assumed in the modelling, i.e. if the nodes used
to define the reinforcement and concrete elements are locked to each other so that the strains
in both materials remain the same, the element length can no longer be used to determine the
stress-strain relation. Instead of crack localisation, the cracks are to spread out over an even
distance as shown in Figure 3.5c (this presumes, though, that the elements used are smaller
than the mean crack spacing, as is the case in all the analyses carried out in this thesis). This
smeared zone of cracks will then represent the discrete cracks observed in an experiment.
Accordingly, a more satisfactory approximation of the crack extension should be to use the
mean crack spacing sm; see de Borst (1995), Plos (1995) and Johansson (1996).
However, when the cracks propagate further into the structure, away from the reinforcement,
they seem to localise in one or two elements. This suggests that the approximation of the
crack extension as the mean crack spacing is incorrect in these unreinforced regions. Instead it
seems more correct to approximate the crack extension as the element length. To further
exemplify this, Figure 3.6a shows the crack pattern obtained in a closing corner when
assuming perfect bond between reinforcement and concrete (static analysis of shelter,

-- 82 of 242 --

65
presented in Paper III) and hence, the crack extension was approximated as the mean crack
spacing. Still, as can be seen from the obtained crack pattern, this assumption is valid only
close to the reinforcement in tension. For the concrete at a certain distance from the
reinforcement, it would probably, as illustrated in Figure 3.6b, have been more correct to
approximate the crack extension as the element length.
Reinforced – perfect bond
M
f t
εu,s
m	t
F
s	u s	f
G 	1	4
, 	⋅	=
	ε
M	(c)
σs
εcrack
σs
element	t
F
l	u l	f
G 	1	4
, 	⋅	=
	ε
f t
εu,l
Unreinforced
M	M	(a)
εcrack
εu,l / 6
3
tf
lelement
Reinforced – bond-slip considered
element	t
F
l	u l	f
G 	1	4
, 	⋅	=
	ε
f t
εu,l
M	M	(b)
σs
εcrack
s m 	reinforcement
reinforcement
Figure 3.5 	Schematic view of crack patterns obtained when modelling unreinforced and
reinforced concrete. Filled line shows the stress-strain relation used; dashed lines
are shown for comparison only.
From the discussion above it might seem that there may only be problems with localisation
when assuming perfect bond. However, this is not true. Depending on, for instance, the size
and orientation of the elements used and what load case is studied, one cannot be sure that the
cracks will localise within one element even though accurately modelling the bond-slip
relation; see for example Johansson (1997) and Lundgren (2000). Neither will the difficulty
automatically be resolved by using the embedded crack model (Magnusson 2000), since it will
encounter the same type of problem as the smeared crack approach, perhaps making it
necessary to adjust the stress-strain relation used here too.

-- 83 of 242 --

66
q
l ≈ sm
l ≈ l element
reinforcement
q = 50 kN/m2
q = 100 kN/m2
(a) 	(b)
Figure 3.6 	(a) Crack pattern in closing corner when assuming perfect bond; (b) 	approxi-
mation of crack extension l that should be rather accurate.
To summarise, if the crack extension is assumed as the mean crack spacing and this length is
larger than the length of the elements used, the results obtained will probably be somewhat too
brittle. On the other hand, by approximating the crack extension as the element length, the
response will most likely be somewhat too ductile, even though the interaction between
concrete and reinforcement is accurately dealt with. Hence, it may be important to carry out a
sensitivity study to more thoroughly examine what influence the stress-strain relation used has
on the response of the structure studied. A quite approximate way to do this is to vary the
crack extension l used by, say, a factor of two: halved when using perfect bond and doubled
when modelling the bond-slip. If this change has little effect on the result, then the analysis is
more likely to be trusted. However, if such a change has large impact on the structural
response one should be careful when interpreting the results. A correct approach would then
be to modify the crack extension originally used in those parts where the assumptions proved
to be invalid. A new analysis than has to be carried out and the validity of the assumptions
checked. Evidently, this may lead to a cumbersome iteration process that may be quite time-
consuming. But, if the post-peak ductility in tension proves to be vital, it may be the only way
to obtain correct results.

-- 84 of 242 --

67
3.4.2 	Compression
That cracking can cause localisation problems may be easy to understand, but that this is also
the case with concrete in compression might perhaps not be as obvious. Nevertheless, it has
been stated by several researchers (e.g. van Mier 1984; Hillerborg 1988; van Mier et al. 1997;
Lee and Willam 1997) that the post-peak response for compressed concrete is a localised
phenomenon. Van Mier showed that the post-peak ductility, among other things, depends on
the height of the concrete specimen used. Figure 3.7a shows the normalised stress-strain
relation for uniaxial compressive tests on concrete prisms of height 50, 100 and 200 mm.
According to this, a specimen with smaller height results in greater ductility. However, if
instead comparing the displacement in the same specimens, the relations shown in Figure 3.7b
are obtained. Consequently, it can be concluded that the corresponding stress-strain relations
do not represent the concrete material behaviour but just a structural effect. The similarity to
concrete in tension and the concept of fracture energy comes to mind. Hence, it seems
reasonable to solve this in a way similar to that for concrete in tension, that is, introduce
fracture energy for concrete in compression. This was done by, for example, Markeset (1993)
and Feenstra (1993). However, the use of fracture energy is not enough, since as in the case of
cracking, it is a displacement and not a strain that must be simulated. Therefore, there is also a
need of a softening zone in which the localisation in compression may occur (compare the use
of the crack extension l for cracking).
The stress-strain relations for concrete in compression given in the literature, e.g. CEB-FIP
Model Code, CEB (1993), normally use the mean strain in the specimen and are therefore not
suitable to be used as input data for finite element analyses in which the softening of concrete
is to be simulated. Such relations, i.e. the measured displacement divided by the height of the
specimen (300 mm in CEB-FIP Model Code), do not take into account that a localisation
occurs in the material. Nevertheless, up to the maximum strength this is an appropriate
approximation since the strain in the concrete thus far is quite homogeneous distributed.
However, when reaching the post-peak part this is no longer the case and the material
behaviour will be incorrect to use. If, for example, applying such a stress-strain relation in a
finite element analysis where the softening zone in the analysis becomes 50 mm, this means
that the post-peak relation given will be 300 / 50 = 6 times too steep. Not only does this result
in a more brittle behaviour, but it may also lead to such numerical difficulties that a solution
cannot be found. This is what happened in the finite element analyses presented in Paper II,
and is also the reason why the post-peak stress-strain relation for concrete in compression
there was modified in some of the analyses.

-- 85 of 242 --

68
0.0
0.2
0.4
0.6
0.8
1.0
1.2
0 	2 	4 	6 	8 	10
Strain [‰]
height 50 mm
height 100 mm
height 200 mm
σc / f c
0.0
0.2
0.4
0.6
0.8
1.0
1.2
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6
Displacement [mm]
height 50 mm
height 100 mm
height 200 mm
σc / f c
(a) 	(b)
Figure 3.7 	Post-peak behaviour of concrete prisms subjected to uniaxial compression:
(a) normalised stress-strain relation; (b) normalised stress-displacement relation.
Based on van Mier (1984).
If it is known over what length the concrete softening will take place in an analysis, it is easy
to make the necessary modifications in the post-peak part of the stress-strain relation.
Unfortunately, though, this length is generally unknown. For concrete in tension this length
may, if accurate bond-slip relations are used as discussed in Section 3.4.1, be comparably easy
to approximate to the element length. This is possible since the localisation due to cracking
then generally occurs within one row of elements. However, for concrete in compression, this
is usually not the case. The softening zone will here instead be smeared out over a number of
elements, making it much more difficult to determine. Therefore, it is necessary to use a
length larger than the element length to accurately consider the post-peak behaviour in
compression. If this turns out to be important for the response that is to be studied, an iterative
procedure similar to that proposed for concrete in tension may be carried out.
3.4.3 	Possible solution
From the above it is evident that the localisation problems described are important issues to be
resolved if more reliable finite element tools are to be obtained. A quite cumbersome and
time-consuming iterative procedure was proposed above as an approximate way to handle this

-- 86 of 242 --

69
and even though not a particularly good method, it still presents a possibility to solve the
problems. Further, the size of the load steps used in an analysis (see Section 3.5) will also
affect the final crack pattern; if large increments are used, the risk of a more diffuse crack
pattern increases. Therefore, a somewhat more distinct crack pattern might be obtained by
reducing the size of the load increments. However, it should also be remembered that too
small load steps will not be practically possible due to the large execution time needed then.
According to Jirasec (1999), these localisation problems can be taken care of automatically in
the material model by using so-called localisation limiters. Using this approach it is possible
to supplement the stress-strain relation by an additional parameter that specifies the actual
width of the softening zone, and to use a localisation limiter so that the numerically simulated
softening zone gets the correct width. However, such models are not yet implemented in the
finite element programmes used here and are therefore not further treated herein.
3.5 	Numerical approach
In a finite element analysis, where the non-linear behaviour of the material, the geometry, or
both is taken into consideration, a system of simultaneous non-linear equations results. The
relation between load and displacement then becomes non-linear, and the displacement at a
given stage usually depends on previous displacements. To solve this system, the load is
subdivided into increments; see Figure 3.8. At each load increment a linear approximation of
the stiffness, representing a kind of linearised form of the relation between the load and the
displacement, is established and the corresponding equilibrium equations are solved. Since the
stiffness varies with the displacement, the internal forces of the structure are not in
equilibrium with the external forces; this produces an error in the solution. Therefore, to
minimise this error, an iterative solution procedure is used within each load increment and the
solution is refined until a specified convergence criterion is satisfied.
Note, though, that when using an explicit integration method, such as that described in
Section 6.3.2, equilibrium is satisfied without conducting any iterations. This is possible by
fulfilling dynamic equilibrium instead of a static one in which the displacements at the next
increment is based on the deformations and stiffness in the previous load steps only.

-- 87 of 242 --

70
4
∆t F
3
∆t F
2
∆t F
∆t F
u
F
∆F
∆F
∆F
∆F
Figure 3.8 	Increasing error of the solution when using the incremental load method without
correction for a system with one degree of freedom.
There are several different iteration methods available that can be used in the solution process.
The general procedure, though, is the same for all iteration methods; the difference is in how
the stiffness matrix is determined. The iterative methods can be divided roughly into three
categories: the tangent stiffness method, the initial stiffness method and the secant stiffness
method, see Figure 3.9. In the tangent stiffness method, the stiffness matrix is determined at
each iteration, resulting in a method that requires few iterations, but where every iteration is
relatively time-consuming. In the initial stiffness method, the stiffness is determined at the
beginning of each load step and it is then used throughout the whole iteration process within
an increment. This method requires more iterations to reach convergence than the tangent
stiffness method but, since the same stiffness matrix is used in each iteration within the
increment, every iteration is faster. The secant stiffness method uses the information from
previous solutions to update the inverse stiffness matrix in each iteration, which results in a
convergence rate somewhere between that of the tangent and the initial stiffness methods. The
iteration methods used in the analyses presented here were the Modified Newton-Raphson
method (initial stiffness method) and the BFGS method (secant stiffness method). Of these,
the latter were found to encounter fewer numerical problems when used. Further information
on these iteration methods can be found in for instance Bathe (1996).

-- 88 of 242 --

71
t+
∆t u 	ut u
t+
∆t F
F
t F
(a)
∆F
u
(b)
t+
∆t u
t u
t+
∆t
F
F
t F
∆F
t+
∆t u 	ut u
t+
∆t
F
F
t F
(c)
∆F
Figure 3.9 	Schematic view of different iteration methods for a system with one degree of
freedom: (a) tangent stiffness method, (b) initial stiffness method, (c) secant
stiffness method.
3.6 	Finite element analyses of frame corners
As stated in Section 3.1 the use of non-linear finite element analyses may considerably
improve the understanding of the structural behaviour in reinforced concrete. Therefore, this
tool has also been extensively used for the work presented herein, and naturally also in the
study of frame corners. Paper II describes such analyses of closing frame corners in which the
uses of the conventional and new reinforcement detailings as shown in Figure1 1.1 (i.e.
detailing Type 1 and Type 3, respectively) were compared. These analyses were based on the
second test series described in Paper I. Here, a low and high amount of reinforcement were
used. However, due to the occurrence of side concrete spalling in the latter case, only the
analyses of the former were included there. When conducting these analyses, numerical
problems due to concrete crushing were encountered. This was due to the localisation problem
described in Section 3.4.2 and was dealt with accordingly. Despite such problems, the
analyses proved very valuable since they provided an improved insight into the response of
the corner and resulted in increased knowledge and better understanding. Thus, it was also
possible to predict rather accurately the difference in structural behaviour of a frame corner
when using the different detailings studied. Accordingly, based on a combination of the
observations made in the tests and the finite element analyses it was concluded that the new
alternative (i.e. Type 3) is suitable to use instead of the conventional reinforcement detailing
(Type 1).
Further, the analyses made it possible to examine what could happen if the reinforcement
loops in the new detailing were positioned incorrectly by mistake. The case studied did seem
to have a negligible influence on the overall behaviour and even though one should be aware

-- 89 of 242 --

72
that this might not fully reflect reality, it still gave a basic idea of what might happen. This
study also brought out one of the substantial advantages of using the finite element tool, i.e.
making it possible to at least arbitrarily examine what can happen in a complicated case
without having to carry out expensive and time-consuming tests. Hence, apart from providing
important knowledge as such, it may for instance be used prior to experimental testing to
determine what might be interesting to examine further in a test series.
Apart from the work by the author, two theses making use of the finite element tool in similar
studies have recently been presented at the Division of Concrete Structures at Chalmers
University of Technology, Plos (1995) and Lundgren (1999). Such analyses were also
performed in two Master of Science projects in which the author acted as supervisor; e.g.
Olsson (1996) and Johansson and Karlsson (1997). Due to the close resemblance to the work
presented in this thesis, these works are briefly summarised below.
Plos, Olsson, and Johansson and Karlsson carried out two-dimensional plane stress analyses
similar to those presented in Paper II, using the same material models and element types used
there. The analyses by Lundgren, though, were more sophisticated; she was able to use a
rotating crack model in combination with a much-improved bond model, developed by
herself, in three-dimensional analyses. The work of Plos and Lundgren was limited to the
study of closing corners using a detailing similar to the Type 1 detailing shown in Figure 2.5.
The analyses agreed well with the test results and they played an important part in the
improved knowledge gained for the detailings studied. One conclusion of the work was that it
should be appropriate to splice reinforcement bars within the corner; this has resulted in a
change in the current bridge code used by the Swedish Road Administration.
As mentioned in the previous section, a test series comprising four frame corners reinforced
with the Type 3 detailing subjected to closing moment was carried out: two with a low
reinforcement ratio and two with a high ratio. Analyses of the former were carried out by the
author and are presented in Paper II and Johansson (1996); the latter, though, were not
included in that study due to spalling of the side concrete cover. However, to further examine
the corner behaviour for such high reinforcement ratios when side concrete spalling is
prevented, non-linear finite element analyses were carried out and reported by Olsson (1996).
Since plane stress was assumed, the spalling of the side concrete cover was not simulated and,
consequently, the load capacity also became larger than obtained in the tests. Nevertheless, the
initial stiffness was approximately the same as in the tests and the load capacity corresponded
well with what would theoretically have been obtained if no side concrete spalling had

-- 90 of 242 --

73
occurred. As in the analyses presented in Paper II, crushing of the concrete at the inside of the
corner caused numerical problems at a stage considerably earlier than expected. However, this
was not regarded as due to premature crushing but to the post-peak relation used for concrete
in compression being too steep. Therefore, this part of the stress-strain curve was elongated in
a way similar to that described in Paper II. The finite element analyses showed that an
increased reinforcement amount caused a considerably larger part of the cracking to take place
within the corner. Nevertheless, the critical sections were still obtained as schematically
shown in Figure 2.4b and hence, a satisfying response with yielding of the reinforcement was
still possible. Further, it was found that the construction joint obtained due to separate casting
stages had negligible effect on the structural response, a crack forming in this section in either
case.
0
20
40
60
80
100
120
140
0 	10 	20 	30 	40 	50 	60 	70
Displacement,
δ [mm]
Load, F [kN]
#1 	#2
#3 	#4
#1
#2
#3 #4
FE analysis
Test (RV10)
(a) 	(b)
δ
F
Figure 3.10 	FE 	analyses 	of 	opening 	frame 	corner 	(specimen 	RV10, 	see 	Paper I):
(a) comparison of load-displacement relations; (b) crack pattern at different load
stages. Based on Johansson and Karlsson (1997).
Johansson and Karlsson (1997) carried out finite element analyses of the opening frame
corners presented in Paper I. Unfortunately, though, they were not able to fully simulate the
response 	observed 	in 	the 	tests 	carried 	out. 	Even 	though 	cracks 	formed 	around 	the
reinforcement loops, this did not cause failure. Instead, the reinforcement yielded at the inside
of the corner and a load plateau, different from that observed in the tests was obtained; see
Figure 3.10. A possible reason for this is that shear-locking occurred, despite using a constant

-- 91 of 242 --

74
shear retention value of 0.05, and prevented the failure from developing as expected; if the
rotating crack concept had been used instead, a more realistic response might have been the
result. Another probable reason for the different behaviour is that the two-dimensional plane
stress model used to model the concrete was unable to take into account the loss of capacity
due to the probable spalling initiation of the side concrete cover. Hence, all reinforcement bars
were fully active in the analyses, while this most probably was not the case in the tests; see
Paper I. Nevertheless, the analyses supported the conclusion drawn in Section 2.3.2.1 that the
inclined 	bars 	used 	in 	the 	Type 4 	detailing 	may be 	replaced 	by an 	extra 	amount 	of
reinforcement loops, thus transforming it into a Type 3 detailing.
When studying the literature regarding the research on concrete frame corners, it is evident
that most work carried out so far has been done by experimental studies. This is not that
surprising since most research within the field was carried out from the late 1960s until the
early 1980s and the availability of robust and reliable concrete material models are relatively
new. Nevertheless, non-linear finite element analyses have also been used to some degree as
shown in the previous two sections. Other researchers who have used non-linear finite
element analyses to study the behaviour in frame corners are Krauthammer and co-workers,
e.g. Marx (1993), Otani and Krauthammer (1997), and Ku and Krauthammer (1999); a
summary of the results gained is given in Krauthammer (1998). Both two-dimensional and
three-dimensional analyses of a concrete structure subjected to an internal explosion (i.e.
opening moment) were made. As further discussed in Section 4.1, the pressure in such a load
case is highly dynamic and thus very different from a static one. The dimensions of the
structure studied were very large; see Figure 3.11. Especially notable is the large amount of
inclined reinforcement, its amount being about five times that of tensile reinforcement at the
inside of the smaller adjoining member, which was determined from the connection’s shear
capacity, see Marx (1993). Different reinforcement detailings were investigated; among other
things, the influence of stirrups in the adjoining member and within the corner was examined.
Further, the amount of inclined bars and their distance to the outside of the corner were
varied.

-- 92 of 242 --

75
6000 	975
3750
900
1φ22 	1φ35
1φ35
1φ25
2φ35
stirrups φ16
s150 mm 	stirrups
φ12
stirrups φ16
s150 mm
[mm]
Figure 3.11 	Approximate dimensions of frame corner studied by Krauthammer and co-
workers. The reinforcement amounts given are valid for a strip of width 100 mm.
The plastic zones obtained are marked with grey. Based on Krauthammer (1998).
In none of the analyses did the corner fail due to loss of the outside part of the corner, i.e. the
type of failure commonly observed in static tests; see Section 2.2.1. Whether this was due to
the impulse loading, the concrete model being unable to capture this type of failure, or to
something else is not clear. Nevertheless, failure was instead obtained due to rupture of the
reinforcement at the inside of the corner or, more commonly, failure within a plastic hinge
formed in the region where the inclined bars reached the compressive zone; see Figure 3.11. A
possible explanation for this response is that the amount of inclined bars in the corner was so
much larger than that of the tensile reinforcement that the capacity of the plastic hinges was
reached before the inside of the corner. Nevertheless, Krauthammer (1998) states that the
results “confirmed that a connection detail based on static design should not be expected to
survive 	the 	severe 	loading 	associated 	with 	explosive 	loads.” 	However, 	based 	on 	the
reinforcement detailing used and the fact that concrete failure was not obtained within the
corner, it seems to be a sound interpretation that the detailing itself was not insufficient.
Instead, the results suggest that the design method used underestimated the amount of tensile
reinforcement needed in both the corner and the adjoining members, and that this is the reason
why failure was obtained in most of the cases examined.

-- 93 of 242 --

76
3.7 	Concluding remarks
It has been shown that non-linear finite element analyses can be a very powerful tool in the
study of reinforced concrete structures, for instance in the study of opening or closing frame
corners. However, it is important to be aware that such analyses cannot completely replace the
need of experimental testing; tests will always be needed since they describe the reality while
the former just attempts to simulate it. Hence, certain phenomena may be observed in a test
that the material models or element types used in the analyses are unable to reproduce
correctly. On the other hand, though, finite element analyses may supply the means for further
understanding and an extensive increase in knowledge of the often complicated response in
reinforced concrete structures. Hence, this tool may make it possible to explain phenomena in
a way that would simply not be possible by using only conventional testing and evaluation
methods. Further, it must be pointed out that even though the analyses may be unable to
describe the response quite correctly, they can still often be successfully employed to give the
user a basic idea of what behaviour may be expected in a given situation. Non-linear finite
element analyses may therefore also be a very useful tool when determining what experiments
should be carried out. Consequently, it can be concluded that the two methods are used to
their fullest advantage only when combined.
Several different crack models are available today in commercial finite element programmes,
making it possible to obtain rather reliable results in analyses of reinforced concrete
structures. However, the use of such an advanced tool also puts a high demand on the user.
Without awareness of what the given input means and the ability to critically examine the
results, it may lead to critical misjudgements in the interpretation of the response obtained.
The post-peak behaviours for concrete in tension and compression, for instance, are both
highly localised phenomena, making it difficult to determine a correct stress-strain relation to
use in an analysis. To be able to simulate such a response accurately, the concept of fracture
energy and the length of the softening region have to be considered. Hence, if one is not aware
of this or how to handle it the results obtained may be quite incorrect. Even for an experienced
user such localisation may still cause substantial problems in the modelling of a structure.
This, then, is a field of great importance that is still to be elucidated.

-- 94 of 242 --

77
4 	Structural Behaviour at Dynamic Loading
4.1 	General remarks
When designing a civil defence shelter according to the present Swedish Shelter Regulations,
Swedish 	Rescue 	Services 	Agency (1998), 	dynamic 	load 	cases 	are 	not 	used. 	Instead,
equivalent static load cases are employed to make calculations easier for the designer. As a
weapon load, the long-term pressure (both positive and negative) due to a nuclear detonation
at long range is assumed, and for the impact of falling debris from a collapsing building an
equivalent static load is employed; see Figure 4.1a. However, the real loads that a shelter must
be able to withstand are quite different and more similar to those shown in Figure 4.1b. The
pressure, due to a nearby explosion, acting on the front shelter wall will present a very large
peak pressure that decreases to zero within a couple of milliseconds. The impact, though, will
be composed of a falling mass hitting the shelter with a certain velocity.
qweapon 	qimpact
(a)
(b)
m
v
p
p = p(t) ≠ qweapon
Dynamic
load case
Weapon load
qweapon 	q weapon
Impact load
Static load
case
Figure 4.1 Comparison between (a) equivalent static loads and (b) probable dynamic loads
that may act on a civil defence shelter.
To further study the effect of such highly dynamic load cases, non-linear finite element
analyses were carried out; see Paper III. In accordance with the criterion in the Swedish
Shelter Regulations, the time-dependent pressure due to an explosion of 125 kg TNT at a
distance of five metres was used as the blast load. The impact of falling debris was based on

-- 95 of 242 --

78
Shelter
Mtot =14 640 kg
vimpact = 9.6 m/s
5.0
0.2
Shelter
0.16
0.5 kN/m2	3.0
3.0
3.0
3.0
0.5 kN/m2
0.5 kN/m2
[m]
5.0 	5.0
125 kg
TNT
Shelter
(a) 	(b)
Shelter
4 880 kg
4 880 kg
4 880 kg
Figure 4.2 Dynamic load cases studied in Paper III using non-linear finite element analyses:
a) pressure from blast load, and b) impact load due to falling masses.
the collapse of a three-story concrete building standing on top of the shelter, see Figure 4.2.
However, to better understand the response obtained and the reasons for the choices made, a
brief background about such extreme load cases is presented in the following sections.
4.2 	Response at transient loading
A structure subjected to dynamic load may behave very differently compared to when it is
loaded statically. This is especially true if the load applied is very intense, with a high peak
value and acting during a very short time. Such so-called impulse loads, or highly transient
loads, are obtained when for example a structure is subjected to the pressure from a nearby
explosion or the impact from colliding objects, i.e. the kind of dynamic loads that may act on
a civil defence shelter.
When a load is applied on a structure, stress waves caused by the load travel back and forth in
the structure, “informing” all its parts of what is going on. The time it takes for this
information to be distributed depends on the wave speed (i.e. the speed of sound in the
material) and on the structure’s shape. The former may be determined as
ρ
E
c = 	(4.1)

-- 96 of 242 --

79
where E is Young's modulus and
ρ is the density of the material, and will in normal-strength
concrete be approximately 3,500 m/s. Accordingly, the time needed for this distribution is
usually very short and normally does not cause any problems. However, as stated above, the
pressure caused by a nearby explosion may not last more than a couple of milliseconds and
will present an extremely high peak pressure. Consequently, the pressure will affect the
structure but there will not be time enough for the information to spread through the structure,
and hence a very different response may initially be obtained.
A good example of this is a simply supported beam (plain concrete) subjected to the impact of
a drop weight hitting the beam with a certain speed; see Figure 4.3. The crack directly below
the load would eventually form also with statically loading. However, the inclined shear
cracks and the cracks at the top of the beam would not appear in such a case. The reason for
their appearance is that, at the time of cracking, the supports are still unaware of the drop
weight hitting the beam. Hence, this failure mode would be obtained regardless of whether the
beam had been fixed, or as now, simply supported. Instead, the current boundary conditions
can perhaps best be regarded as time-dependent fixed supports, where the locations of these
supports move toward the ends of the beam with a speed equal to the wave speed in the beam.
This would also explain the forming of bending cracks at the top of the beam. Another good
example of how the initial behaviour may be affected due to such time-dependent boundary
conditions is the initial behaviour of a shelter wall subjected to the impulse load from a
nearby explosion, as shown in Paper III.
400 	400	25 	25
100
[mm]
m = 31 kg
v = 10 m/s
(a) 	(b)
Figure 4.3 (a) Load set-up of simply supported beam with width 100 mm; (b) crack pattern
obtained when subjected to the impact of falling drop weight. Based on Ågårdh
and Laine (1997).
Based on the above, it is clear that the possibility of global force redistribution within a
structure subjected to such loads may be very different from that in a statically loaded
structure. Such a redistribution needs a certain amount of time to take place, a time that

-- 97 of 242 --

80
evidently need not be available in a structure subjected to an impulse load. Accordingly, the
ability of such a redistribution to take place may therefore also be reduced. Unfortunately, the
possibility of such force redistribution is very important in structures subjected to impulse
loads. This makes it even more important that the materials (especially the reinforcement) and
the detailings used in such concrete structures can guarantee ductile behaviour. With this as a
background, it is therefore disturbing that the reinforcement ductility used in Sweden has
decreased quite considerably during the last ten to fifteen years. Even though it was recently
decided that a more ductile reinforcement should now be made available in Sweden
(Fundia 1999), the difference from the material properties of the steel used during the 1970s
and 1980s are still great, see Johansson (1997). This statement is valid for both the strain at
ultimate stress and the ratio between ultimate strength and yield strength.
Due to the small time periods during which an impulsive load may act, the gathering of test
data becomes more difficult when conducting such experiments. As an example, in static tests
it is usually possible to visually register and mark the forming of cracks during loading,
information that tends to be vital when interpreting the test results. However, this is not
possible in a transiently loaded structure; for such registration a high-speed camera is
required. Further, the arrangements necessary when conducting, for example, explosion tests
or drop tests may be far more difficult to carry out, compared to static tests. Therefore, the use
of finite element analyses may become an even more powerful tool in such studies, since this
tool makes it possible to continuously follow the response in the structure regardless of time.
Moreover, the structural behaviour, considering for example the global inertia effects or the
time-dependent boundary conditions, is taken into account automatically. A problem arises,
though, due to the change in material behaviour of both concrete and steel when subjected to
high strain rates. That is, when the load velocity of the material increases, its properties such
as strength and stiffness also change. This is a very complicated field that has yet to be
clarified; nevertheless, what influence a high strain rate has on, especially, concrete is further
presented and discussed in Chapter 5. The numerical approach for such short-duration
responses also differs from that suitable in static or quasi-static loading, and is therefore dealt
with in Chapter 6.
Often it may not be practical or even necessary to use advanced finite element analyses to
determine the global response of a structure subjected to a dynamic load. Instead, when
solving such problems the mass, stiffness and external load of the structure may be
transformed so that a single-degree-of-freedom system (SDOF system) can be used; see for
instance Balazs (1997). This is made possible by converting these properties so that the work

-- 98 of 242 --

81
carried out by the external and internal forces in the SDOF system is the same as the work
carried out in the real structure. Further, an equivalent mass is used so that the kinetic energy
generated in the SDOF system is the same as that in the real structure. Depending on what is
sought, such an approximation may in many cases also be adequate. However, since the
conversions made usually are based on static behaviour, this method is not able to take
directly into account the time-dependent boundary conditions that may be very important
when studying the initial behaviour of a structure. Therefore, an SDOF system may be highly
unsuitable when studying the initial behaviour of a structure subjected to an impulse load,
such as the beam shown in Figure 4.3. Hence, even though an SDOF model in many cases
may be a useful tool it should be pointed out that it may be unsuitable due to its considerable
coarseness; i.e. if for instance the crack pattern is of interest, a more detailed finite element
analysis should of course also be used.
4.3 	Blast load
4.3.1 	Explosive shock in air
According to the English edition of the Swedish Shelter Regulations, Swedish Rescue
Services Agency (1994), a civil defence shelter shall be able to withstand “the effect of a
pressure wave corresponding to that produced by a 250 kilograms GP-bomb with 50 weight
percent TNT which bursts freely outside at a distance of 5.0 metres from the outside of the
shelter during free pressure release”. Further, the shelter shall endure the impact of splinter
from such a bomb. Apart from these “close range” requirements, the shelter shall also resist
the long-term pressure (overpressure of 50 kPa and underpressure of 8 kPa) from a nuclear
bomb that detonates at a long distance. This section gives a very brief description of the blast
waves generated by an explosion in free air, and is included to give the reader a background
for the blast load used in the finite element analyses presented in Paper III. As stated in
Section 1.4, though, the influence of splinter was not considered in these analyses. More
information about the origin and development of blast loads may be found in, for example,
Baker (1973) or Kinney and Graham (1985). The expressions given below are valid only for
explosions of conventional weapons (i.e. not nuclear weapons).
An explosion is, according to Kinney and Graham, a phenomenon resulting from a sudden
release of energy and whose magnitude is established by the amount of energy released. There
are many different sources of such energy releases, but a generally accepted standard of

-- 99 of 242 --

82
measurement for them is the energy released in the explosion of TNT. Thus, different
explosives are generally considered in TNT-equivalencies and, since energy is proportional to
mass, it is also common to specify the explosives in terms of mass instead of energy.
The energy release of an explosion will push back the surrounding atmosphere and a blast
wave, travelling faster than the speed of sound, will form. A typical pressure-time relation of
an ideal blast wave is shown in Figure 4.4. The explosion detonates at time t = 0 and after a
certain time t a, the wave front reaches the target. The pressure in the wave front will rise from
the ambient pressure, p0 (in our case the air pressure ≈ 100 kPa), to p0 + Ps+ during a very
short time (a couple of microseconds). The pressure then decays to the ambient pressure again
at time t a + T + ending the positive phase. A negative phase will then form with amplitude of
p0 - Ps- when the rush of air toward the explosion centre forms a partial vacuum. Eventually
the pressure will be back to p0 at total time t a + T + + T -
. The portion of the time history above
the ambient pressure p0 is called the positive phase and the portion below p0 is called the
negative phase. The positive and negative impulse intensities can be defined as shown in
equations (4.2) and (4.3) respectively.
i s-
t a + T + t a + T + + T -
t a
p0
p0 – Ps-
p0 + Ps+
i s+
positive
phase
negative
phase
p
t
Figure 4.4 Schematic view of an ideal blast wave.
( 	)
+
	+
+ −	=
T	t
t
a
a
dt	p	t	p	i 	0	)	( 	(4.2)
( 	)
−	+
+
−	+
+
− −	=
T	T	t
T	t
a
a
dt	t	p	p	i 	)	(	0 	(4.3)

-- 100 of 242 --

83
The positive impulse i + together with the peak pressure Ps+ and the duration T + are important
parameters that are used to describe the shape of the blast load. Different researchers have
proposed several “blast wave shapes” with varying complexities. Baker (1973) describes six
of these, where the simplest one is a linear function involving only two parameters and the
most complex is an exponential function including five parameters. Because of its simplicity
and allowance of accurate matching to observed parameters, Baker propose the use of
p t 	p 	P t
T e	s
t T
( ) = 	+ 	−	ç 	÷
+
+
− 	+
0 	1
α (4.4)
where t is time after shock arrival (i.e., measured after the arrival time, t a) and
α is a wave
form parameter that describes the rate of decay of the overpressure. This expression is also
proposed by Kinney and Graham (1985) and used in both ConWep (1992) and FortH 2
(1987). Consequently, it has also been used in this work to determine the pressure-time
relation for an explosion. Combining equations (4.2) and (4.4) gives
( 	)ù
ê
ë
é −	−	= −	+	+	+
	α
α
	α e	T	P	i 	s 	1
1	1 2 	(4.5)
from which
α can be obtained. The corresponding relations for the negative phase have,
according to Baker been almost totally ignored by researchers. A probable reason is that most
investigators have considered the negative phase as relatively unimportant compared to the
positive phase, or that they have encountered difficulties in accurately measuring its
characteristics. According to Baker, the only expression proposed for the negative phase is
that proposed by Brode (1955), in equation (4.6). Here, time is measured from the start of the
negative phase t a + T +
. The negative phase, though, was neglected in the analyses presented
in Paper III.
p t 	p 	P t
T
t
T e	s
t T
( ) = 	− 	−	ç 	÷
−
− 	−
− 	−
0
4
1 	(4.6)
4.3.2 	Reflection of shock waves
The information given above is valid for a blast wave that is free to develop in free air without
any kind of disturbances. However, when a blast wave encounters a denser object, its
characteristics will change dramatically. Thus, in order to better understand the pressure-time
shape of a blast load acting on a structure, it is helpful to be at least vaguely aware of what

-- 101 of 242 --

84
happens when a shock wave is reflected from a denser surface or diffracted around an object.
The former topic is treated here and the latter in Section 4.3.3.
The simplest case of reflection is normal reflection, where the shock wave hits a dense surface
at a right angle. In Figure 4.5a the incident shock wave I is approaching the wall with a
velocity VI. The conditions in front of the wave are the ones for still air (indicated by the
subscript 0) while the conditions immediately behind are those for a free-air shock with a
given pressure (p0 + Ps), density (
ρs), temperature (
θs) and particle velocity (us). Immediately
after reflection at the wall (Figure 1b) the reflecting wave moves away from the wall into the
region associated with the incident wave at a velocity VR. At the wall surface the pressure
(p0 + Pr), density (
ρr) and temperature (
θr) are all increased to a value above that of the
incident wave, while the particle velocity is reduced to zero. The overpressure, Pr, is called
the reflected pressure and can be several times as high as the pressure, Ps, of the incident
wave. For weak shocks (Ps << p0 ) where acoustic approximations are valid, the reflected
overpressure will be twice as high as that of the incident wave. For stronger shocks this ratio
can be increased considerably and can, according to Baker (1973), in extreme cases perhaps
be as high as 20 or more.
VI
p0 + Ps,	
ρs,	
θs, 	vs
p0 ,	
ρ0 ,	
θ0 , 	v0 = 0
I
p0 + Ps,	
ρs,	
θs, 	vs
p0 + Pr,	
ρr,	
θr, 	vr = 0
R VR
a) 	b)
Figure 4.5 Normal reflection of a plane shock from a rigid wall: (a) immediately before
reflection; (b) immediately after reflection. Based on Baker (1973).
Figure 4.6 shows a case similar to that shown in Figure 4.5 but now the shock wave hits a
rigid wall at an oblique angle
αI. The properties in Region A are those of still air and in
Region B those for a free-air shock. The conditions in Region C indicate reflected shock
properties. On contact with the wall the shock will reflect at an angle
αR that is different from
αI. This new angle is determined with the condition that the particle velocity normal to the
wall is equal to zero and will thereby be a function of the incident angle aI and the velocity U
of the incident wave. These properties can be compared to those of acoustic waves. Here, the
angle of the incident and reflected wave is always the same. Further, where regular reflection
occurs for 0 ≤
αI ≤ 90° the reflected pressure Pr = 2Ps for all values of
αI. There is a critical

-- 102 of 242 --

85
angle
αI,crit, such that the reflection described above is not possible for
αI >
αI,crit. What value
this critical angle has depends on the velocity of the incident shock; see Kinney and Graham
(1985). For a wave velocity of Mach 1.5 (where Mach 1.0 is the speed of sound) and above,
αI,crit ≈ 40°. This is the so-called Mach reflection, a complex but important phenomenon that
is further described below.
αR
p0 + Pr,
ρr,	
θr,
vr sin
αR = 0
VI
p0 ,	
ρ0 ,	
θ0 ,
v0 = 0
IR
VR
αI
p0 + Ps,	
ρs,
θs, 	vs
A
B
C
Figure 4.6 Ordinary oblique reflection of a plane shock from a rigid wall. Based on Baker
(1973).
When the incident wave hits a surface at the critical angle
αI,crit or more steeply a Mach
reflection occurs. Now, in contrast to the ordinary oblique reflection, the wave will not
bounce away directly. Instead it spurts away along the surface before being reflected. This has
the effect that a new shock wave, a Mach stem, takes form almost perpendicular to the
surface. As the shock system moves along the surface, the height of the Mach stem increases.
This means that the intersection point between the Mach stem and the incident and reflected
shock, the so-called triple point, will get further away from the surface as the shock system
moves.
In Figure 4.7 the reflection process of a strong shock waves, separated into three stages, is
shown. In the first stage the incident wave I1 has just touched the reflecting surface. The
reflected pressure will then be more than twice as high as anywhere else on the incident wave.
As the incident wave expands, so does the reflected wave. The reflected wave, however, will
not be spherical since the angle of reflection
αR is less than the angle of the incident wave
αI
(a reflected acoustic wave, however, would be spherical due to equal angles
αI and
αR). At a
certain distance from the charge C, the incident angle
αI is equal to the critical angle
αI,crit
which means that a Mach stem is formed (stage two in Figure 4.7). As the shock system
expands further, the Mach stem grows rapidly and “swallows” the inclined and reflected
waves above it, as shown by the line
ρ, which describes the line of the triple point. In stage
three, the Mach stem dominates the shock close to the surface and an almost vertical shock

-- 103 of 242 --

86
front has formed. Further, the pressure in the Mach stem and in the neighbourhood of the
triple point will be considerably larger than those in I3. This means that depending on the
distance to a given target and the height of the target, the whole target may or may not be hit
by a uniformly distributed pressure at the same time.
Figure 4.7 Reflection of strong shock waves. From Baker (1973).
4.3.3 	Diffraction of shock waves
All information given here about the diffraction of shock waves is based on Baker (1973).
When a shock wave encounters a solid object, such as a building, a complicated interaction
termed diffraction occurs. The process of a plane shock wave hitting a two-dimensional
structure is sketched in Figure 4.8. When the incident wave, I, strikes the wall a reflected
wave, R, moves in the opposite direction and the pressure at the wall surface increases
instantaneously from p0 + Ps to p0 + Pr. Above the wall, however, the incident wave continues
its movement relatively undisturbed and the pressure remains at p0 + Ps. Due to the difference
in pressures at the upper left corner of the wall, the reflected pressure will decrease as a
rarefaction wave moves down the wall. A vortex of spinning air with low overpressures at its
centre will then form at the corner, thus further decreasing the pressure in this region. In the
stage shown in Figure 4.8b the pressure at the lower part of the front wall is still p0 + Pr while
the upper part has a pressure similar to that in the incident wave. As the shock wave reaches
the back wall of the structure, the shock wave diffracts around the corner (Figure 4.8c) and a
second vortex is formed. The pressure on the back wall behind this diffracted shock front is
somewhat less than p0 + Ps while the pressure in front of it is equal to the ambient pressure p0 ;
at the roof the pressure is still close to p0 + Ps. At the front wall, the rarefaction wave has
negated the reflected wave and the pressure is now p0 + q, where q is the dynamic pressure.

-- 104 of 242 --

87
Figure 4.8 	Diffraction of shock front over a two-dimensional structure. From Baker (1973).
The behaviour described above will depend on the geometrical dimensions of the solid object.
If the width of the object is large, the rarefaction wave may have negated the reflected wave
before the shock front reaches the back wall, etc. Diffraction is, of course, also valid for a
three-dimensional structure. In this case the shock wave can also diffract at the sides of the
structure.
4.3.4 	Pressure-time relation used in finite element analyses
From Sections 4.3.2 and 4.3.3 it is clear that it is very complicated to determine a correct
pressure-time relation for various parts of a real structure; apart from the difficulty of taking
into account different reflections, the load 	also depends on the structure’s 	geometry.
Therefore, 	certain 	simplifications 	have 	been 	necessary 	in 	the 	study. 	As 	quoted 	in
Section 4.3.1 the Swedish Shelter Regulations clearly state that the weapon load chosen
corresponds to that of an explosion in free air where the pressure release is free. Thus, the
interpretation made was that reflection from the ground could be neglected. This may also
hold true for the diffraction. Nevertheless, the following reasoning was used to justify the
disregard of the diffraction effect. The analyses carried out only model a single strip of the
shelter. This approximation should be appropriate if the out-of-plane length of the shelter is
large enough and the bearing capacity in the transverse direction can be neglected. In this way
the problem with diffraction at the end walls can be avoided. This would also be the case with
the diffraction at the front wall if the wall is high enough, i.e., a building is on top of the
shelter. Therefore, the shelter subjected to a blast load was assumed to have some kind of

-- 105 of 242 --

88
light structure (i.e., wooden building) on top which would delay the diffraction in such a way
that it can be neglected. With these approximations the pressure-time relation can be
calculated according to the equations given in Section 4.3.1.
For a charge of 125 kg TNT (250 kg bomb with 50 weight percent TNT) exploding at a
distance of 5 metres, ConWep (1992) gives blast parameters as shown in Table 2.1. Hereby,
the factor
α in equation (4.5) can be determined for the reflected wave (
α = 15.00) and the
pressure-time relation for the positive phase be expressed according to equation (4.4). The
result is shown in Paper III, and from this it can be seen that the pressure decreases very
rapidly from a value of about 5 MPa at the time of arrival to a pressure of 22 kPa after just
3 ms. The approximated pressure-time relation used in the finite element analyses leads to a
somewhat increased impulse intensity of about 6%. However, this approximation is believed
to be negligible compared to other uncertainties in the blast analyses.
4.4 	Impact load
A shelter may be exposed to falling masses as a result of weapon impact on a nearby building.
Therefore, it must be designed to withstand such a load. However, as is the case with the
weapon load, an impact load is a complicated dynamic load case, and consequently, it is not
realistic for a designer to use such a load in the design of a civil defence shelter. Therefore,
when revising the regulations in the 1970s there was a demand for an expression of an
equivalent static load that could be used in the design process. An early approach for such a
static load was presented by Hallgren and Granström (1975) and further simplified by
Hallgren and Granström (1977). After this, some minor changes have been made and the
equivalent static load given in the present Swedish Shelter Regulations, Swedish Rescue
Service Agencies (1998), is now expressed as
t	impact 	h	m	q 	⋅	⋅	= 	4	.	1 	(4.7)
where m is the dead weight per square meter of the building above the shelter (units given in
kN/m2 ) and ht is the distance from the centre point of this building to the top of the shelter.
The expression given in equation (4.7) is based on an SDOF system where the following
assumptions are made:
• 	the behaviour of the structure is fully plastic;
• 	plastic impact between falling mass and shelter roof;
• 	the falling mass hit the shelter roof with a constant amount per time unit.

-- 106 of 242 --

89
Other important assumptions made are, for example, that all the impact energy dissipates due
to bending and that the active time, i.e. the time it takes for all the mass to hit the shelter, is
set to 0.5 s. Hallgren and Granström (1977) stated that the latter assumption probably is
somewhat optimistic but that this to a large degree should be compensated by the former, that
no energy is consumed due to crushing or shear at the supports. Apart from the work by
Hallgren and Granström, the derivation of this expression may also be found in Johansson
(1999b). Impact loading due to falling masses has experimentally and theoretically been
examined by, for example, Sundquist (1977, 1978, 1979) and Andersson (1985, 1987a, b).
The collapse sequence of the building, assumed in the derivation of equation (4.7), starts at
the top and proceeds downward, thus dragging the underlying floors along in its fall; see
Figure 4.9. The top floor slab is assumed to start falling with an initial velocity of zero and
accelerate until it hits the underlying floor. Its movement is then decreased due to plastic
impact and breaking of the slab hit. The two slabs then continue to fall down with a velocity
corresponding to the reduced kinetic energy. This process is repeated until the roof of the
shelter is reached. Assuming plastic impact between the impacting floors, the kinetic energy
of the falling mass just prior to its impact with the shelter roof may be expressed as
=
+	+
−	⋅	=
n
i
B	tot	impact n
n	n
E	i
n
gH	M	E 1
2
2
3 2
2	1 (4.8)
where Mtot is the total falling mass of the building above the shelter, g is gravity, H is the total
height of the building above the shelter roof, n is the number of floors and EB is the energy
needed to break one floor slab in the collapsing building. A derivation of this expression can
be found in, for instance, Hallgren and Granström (1977) or Andersson (1985). Due to
uncertainty about the capacity of each floor slab, though, the energy term EB was set to zero
when determining the impact velocity vimpact in the finite element analyses, and it could then
be determined as (given n = 3 and H =9 m)
=
⋅	=
⋅
=
n
i	tot
impact
impact 	i
n
gH
M
E
v 1
2
3
1
2
2 = 9.6 m/s 	(4.9)

-- 107 of 242 --

90
(d)	(c)	(b)	(a)
v impact
Figure 4.9 	Schematic description of collapse sequence assumed: (a) the third floor starts to
fall with zero initial velocity; (b) third floor is about to hit second floor; (c) after
plastic impact between third and second floor they continue downward to first
floor; (d) all three floors falling with the same velocity just before hitting the
shelter roof.

-- 108 of 242 --

10-8 10-7 10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
creep 	static 	earthquake 	hard impact blast
strain rate [s-1 ]

-- 109 of 242 --

92
5.2 	Testing at high strain rates
It is commonly accepted that the mechanical properties of concrete are affected by the rate of
loading. Several researchers have examined the magnitude of the dynamic increase factor
(DIF), i.e. the ratio between the dynamic strength and static strength, for different strain rates
and it has been found that an increased strain rate also results in an increased material
strength; see Figures 5.2 and 5.3. The large scatter in these figures, though, clearly indicates
the considerable difficulties present when the influence of the strain rate is to be determined.
According to Bischoff and Perry (1991) the kind of dynamic testing necessary is much more
complicated to carry out and evaluate than similar static tests. Therefore, it is also more
important to consider what influence different parameters may have on the test results. Hence,
the large scatter shown in Figures 5.2 and 5.3 can at least partially be explained by a mixed
usage of important parameters such as: concrete strength, specimen dimension, moisture
content and test method. Further, the evaluations of the test results have not been made
similarly. Therefore, Bischoff and Perry conclude that the results summarised in Figure 5.2 are
not necessarily comparable with each other, and that such results therefore have to be
interpreted with great care since they depend on both the test method and the evaluation
method.
Figure 5.2 	Strain rate effect on the compressive strength of concrete. From Bischoff and
Perry (1991).

-- 110 of 242 --

93
0
1
2
3
4
5
6
7
8
10-6 10-5 10-4 10 -3 10-2 10-1 100 101 102 103
Strain rate [s-1 ]
Dynamic increase factor
Cowell 63 MPa 	Cowell 38 MPa
Cowell 32 MPa 	Hatano 23 MPa
Takeda/Tachikawa 	Mellinger/Birkimer
Birkimer 47 MPa 	McVay 35 MPa
Ross split tension 	Ross direct tension
Ross mixes E-J 	Kormeling et al.
John et al. 53 MPa 	Antoun 57 MPa
Figure 5.3 	Strain rate effect on the concrete tensile strength. Based on Malvar and Ross
(1998).
As an example of the difficulties encountered when evaluating dynamic test results, Figure 5.4
shows the load-time relations of concrete prisms subjected to shear where the load was
measured at both the top and bottom of the specimens; see Chung (1978). From this it is clear
that there is a difference in load registered at the upper and lower load cells. This is due to the
inclusion of inertia forces in the load system, and because it takes a certain time for the
compressive wave to travel through the specimen. Hence, a certain amount of load (depending
on what strain rate is used) will be applied at the top of the specimen before the information
from the middle part of the prism reaches the upper part, “informing” it of the specimen’s
failure. Consequently, the load registered in the top load cell is not representative for the
capacity of the prism; instead it is the load cell at the bottom that represents the true material
capacity. From this Bischoff and Perry conclude that the influence of the inertia forces can be
minimised by positioning the load cell at the specimen side opposite to that of loading.
Further, when evaluating a dynamic test it is important to be aware that a travelling wave is
transmitted and reflected each time it reaches a new material and/or different cross-section.
Depending on the test set-up, this may result in the original compressive wave soon being
divided into a complicated series of stress waves that bounce back and forth in the specimen,
making it difficult to evaluate the test results obtained. Figure 5.5 shows a schematic view
from Hughes and Gregory (1972) of how a compressive wave is diverted into a complicated
series of tensile and compressive waves. Hence, it is important to account for the wave

-- 111 of 242 --

94
propagation in a structure in the evaluation of dynamic test results; if not, such diversions may
considerably affect the final conclusions. However, according to Hughes and Gregory the
problem can be solved by using a load column that is long enough, so that the reflected wave
does not reach the specimen again until failure is already achieved. This is also a technique
that is used in the so-called Split-Hopkinson bar as described by, for instance, Reinhardt et al.
(1985).
125
660 load
cell
applied load
200
Figure 5.4 	Typical load-time relations for shear-loaded concrete prism at a strain rate of
ε& ≈ 0.3 s -1 . From Chung (1978).
Figure 5.5 	Schematic view of the diversion of a compressive wave into a complicated series
of tensile and compressive waves bouncing back and forth.

-- 112 of 242 --

95
5.3 	Strain rate influence of concrete strength
Various researchers have proposed expressions that try to describe how the concrete strength
depends on the strain rate. Such proposals for concrete in compression have, for instance,
been made by Seabold (1970), Dilger et al. (1984), Soroushian et al. (1986) and the CEB-FIP
Model Code, CEB (1993); proposals for concrete in tension can, for example, be found in
CEB (1993), Ross et al. (1996), and Malvar and Ross (1998). These expressions, though,
differ considerably as to appearance, and in some cases also as to what properties they depend
on. The expressions reported in Seabold, Dilger and Soroushian et al. just give a DIF as a
function of the strain rate; the latter, though, differs between wet and dry concrete (i.e.
concrete that has been prevented from drying out and whose micropores thereby contain free
water). Ross et al. proposed a more complicated expression that takes into account parameters
such as the fracture toughness and compressive strength of the concrete. However, perhaps the
most accepted relations are those presented in the CEB-FIP Model Code where the DIF of
concrete in both tension and compression is related to its static compressive strength. The
expression proposed by Malvar and Ross for concrete in tension is also an improvement of
that in the Model Code. The different proposals mentioned above are compared in Figures 5.6
and 5.7. From these it is also clear that there is uncertainty about what effect the strain rate
has. Further comparisons are thus hereafter made with the expressions given in CEB (1993)
and Malvar and Ross (1998).
0
1
2
3
4
10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain rate [s-1 ]
Fdyn / Fsta
CEB, f c = 30 MPa
CEB, f c = 60 MPa
Soroushian et al., dry
Soroushian et al., wet
Dilger et al.
Seabold
Figure 5.6 	Comparison of DIF-strain rate relations for concrete in compression, given in the
literature.

-- 113 of 242 --

96
0
1
2
3
4
10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain rate [s-1 ]
Fdyn / Fsta
CEB, f c=30 MPa
CEB, f c = 60 MPa
Ross et al., f c = 28 MPa
Malvar and Ross,
f c = 30 MPa
Malvar and Ross,
f c = 60 MPa
Figure 5.7 	Comparison of DIF-strain rate relations for concrete in tension, given in the
literature.
5.4 	Possible explanations for the increase in concrete strength
5.4.1 	Characterisation of strain rate effects
The strain rate effect in concrete can, somewhat simplified, be divided into two different
kinds: viscous and structural effects. The former, which leads to relatively moderate strength
enhancements at increased strain rate, can be said to occur at strain rates up to the so-called
transition zone; see Figure 5.8. A commonly accepted theory is that this increase is largely due
to the presence of free water in the concrete micropores, see further in Section 5.4.2. Since
this is also an explanation that the author supports, it is treated in somewhat more detail
herein. At strain rates above that of the transition zone the strength increase is more dramatic
because structural effects, i.e. inertia and confinement, dominate the dynamic strength
contribution. This is further discussed in Section 5.4.3.

-- 114 of 242 --

97
10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain rate [s-1 ]
1.0
0.5
1.5
2.0
2.5
3.0
3.5
4.0
Fdyn / Fsta
30
structural effects:
- inertia forces
- confinement
viscous effects:
- free water
transition
zone
Figure 5.8 	Schematic view of the strain rates at which the viscous and structural effects,
respectively, are dominant.
5.4.2 	Viscous effects
It is commonly accepted that the non-linearity of the concrete decreases with increasing strain
rate. According to Zielinski et al. (1981) this is due to the difference in crack propagation
obtained at higher load rates compared to that of static loading. When the load is applied
slowly, it is possible for the cracks to propagate in a way that demands lower energy
consumption. Hence, it is possible for the cracks to pass around strong aggregates and form in
the weaker zones. However, at high strain rates, when a large amount of energy is introduced
in the specimen during a very short period of time, this is no longer possible to the same
extent. Instead, the cracks are forced to take a shorter route and propagate through stronger
zones which, if loaded at lower strain rates, it would otherwise have avoided. Consequently,
the crack propagation will also differ from that in a static case as schematically shown in
Figure 5.9. If the load velocity is high enough, the cracks may even propagate through the
aggregates instead of through weaker cement paste; see Rossi (1991a). Thereby, the material
homogeneity increases, which results in a stiffer behaviour and higher strength of the
concrete. This failure mode is similar to that obtained in static testing of high-strength
concrete, e.g. by Claeson (1998). Therefore, it is tempting to compare the behaviour of
normal-strength concrete subjected to high strain rates with that of statically loaded high-

-- 115 of 242 --

98
strength concrete. In both cases the cracks may propagate through the aggregates and the
material’s non-linearity is quite restricted before maximum strength. This thought is also
supported by Zielinski (1982) and Taerwe (1993) who state that “a fast-moving crack may
grow more easily through stronger zones of material” and “the smoothness of the fracture
surface is mainly related to the speed of crack propagation”, respectively. Further, Zielinski
has shown that multiple fracture zones are possible at high strain rates, resulting in higher
energy consumption during the fracture process. This can then, as schematically shown in
Figure 5.10, also lead to larger strains and increased strength compared to that of static tests.
Figure 5.9 	Schematic difference in crack propagation of specimen loaded in tension during
static or impact conditions. From Zielinski (1982).
impact
static
effect of multiple
cracking
effect of changed
fracture path for a
single macrocrack
εc
σc
Figure 5.10 Schematic view of the fracture mechanism’s influence on the stress-strain relation
for concrete in tension. Based on Zielinski (1982).

-- 116 of 242 --

99
The relations presented by Soroushian et al. in Figure 5.6 indicate that wet concrete, i.e.
concrete that has been prevented from drying out and whose micropores thereby contain free
water, is more sensitive to high strain rates than dry concrete. This observation agrees well
with those by other researchers, e.g. Kaplan (1980), Reinhardt et al. (1990) and Rossi et al.
(1994). They suggest that the fundamental cause of changed crack propagation, and thus
higher strength and stiffness, observed in concrete at high strain rates is the presence of free
water in the micropores of the concrete.
Reinhardt et al. (1990) present the results from a pilot test series in which the effects of high
strain 	rate 	are 	examined 	for 	concrete 	in 	tension. 	Twenty 	cylindrical 	specimens
(φ74 x 100 mm) were cast using a so-called micro concrete with a maximum aggregate size of
2 mm. Seven days after casting the specimens were demoulded. Half of them were then
prevented from drying and the other ten were dried in an oven at 105°C for five days. Hereby,
the relative humidity of the wet and dry specimens was more or less 100% and 0%,
respectively, at the day of testing. The specimens were tested in a Split-Hopkinson bar at
strain rates between 0.50 and 1.25 s-1 and it was found that the capacity of the wet specimens
was very sensitive to the strain rate while the dry ones remained unaffected. In a continuous
study of the above, Rossi et al. (1994) examined the behaviour of more “normal” concrete
using a maximum aggregate size of 10 mm. The dimensions of the specimens were the same
but the dry specimens were now oven-dried for three weeks. Further, the influence of different
water-cement ratios (w/c ratios) was examined in the wet specimens. The results of this study
are summarised in Figures 5.11 and 5.12, from which it is also clear that wet concrete is far
more sensitive to high strain rates than dry concrete. However, as distinct from the
observations made by Reinhardt et al. with the micro concrete, the dry concrete here showed a
certain sensitivity to the strain rate. Rossi et al. give three possible explanations for this: it
might be due to a physical phenomenon other than the presence of free water; inertia forces
can possibly affect the results obtained from the Hopkinson bar; and finally, the dry specimens
probably cannot be regarded as totally dried out since this would demand a very large amount
of energy. The last hypothesis was also confirmed in tests on specimens that had been dried
for one week only. From Figure 5.11 it can also be seen that the influence of the strain rate
increases with increased value of the w/c ratio. However, a closer look reveals that the
absolute increase in strength (i.e. f t,dyn – f t,sta) was more or less independent of the w/c ratio of
the concrete; see Figure 5.12. These results are also useful when comparing the strain rate
sensitivity of concrete of different static strength as discussed in Section 5.5.

-- 117 of 242 --

100
0.5
1.0
1.5
2.0
2.5
3.0
10-6 10-5 10-4 10-3 10-2 10-1 100 101 102
Strain rate [s-1 ]
Fdyn / Fsta
CEB, f c = 30 MPa
CEB, f c = 60 MPa
Malvar, f c = 30 MPa
Malvar, f c = 60 MPa
Wet, w/c = 0.7
Wet, w/c = 0.5
Wet, w/c = 0.3
Dry, w/c = 0.5
Figure 5.11 	Influence of strain rate on the tensile strength for wet and dry concrete when the
w/c ratio is varied. Each point represents an average of between six and eleven
tests. Based on test data presented in Rossi et al. (1994).
0
2
4
6
8
10
12
10-6 10-5 10-4 10-3 10-2 10-1 100 101 102
Strain rate [s-1 ]
Fdyn / Fsta
Wet, w/c = 0.3
Wet, w/c = 0.5
Wet, w/c = 0.7
Dry, w/c = 0.5
Figure 5.12 	Difference in concrete tensile strength at various strain rates and w/c ratios. The
continuous lines are logarithmic regressions. Based on test data presented in
Rossi et al. (1994).

-- 118 of 242 --

101
Kaplan (1980) explains that a probable reason for the influence of the moisture content at high
strain rate is the presence of free water in the concrete micropores. When a concrete specimen
is loaded in compression the pores tend to close, thus forcing any water present to move
within the specimen. This movement gives rise to an inner pressure which depends on the
pore size, the amount of free water in the pore and the closing speed of the pore. Such an
internal pressure may help the solid phase of the concrete to resist the external force, thus
delaying the crack initiation so that a higher compressive strength is obtained. A similar
hypothesis is proposed in Rossi (1991a) to describe the physical cause of increased tensile
strength. Rossi explains that a possible physical explanation can be found by the use of the so-
called Stéfan effect. Simplified, it can be said that the presence of a thin viscous film (e.g.
water) trapped between two plane and parallel plates that move apart gives rise to a resisting
force. In a concrete structure the walls of the micropores can be approximated as such plates
and, when a tensile force tries to open the pore, a counteracting force Fs arises that hinders the
separation. 	Accordingly, 	the 	influence 	of 	free 	water 	within 	the 	concrete 	micropores
strengthens the cement paste, making it so strong that cracks may propagate through the
aggregates rather than in the normally weaker zones of the cement matrix; see Rossi (1991b).
Consequently, a larger external force is needed which results in a higher strength. Thus, even
though not explaining the strain rate phenomenon in exactly the same way, the statements of
Zielinski and Rossi and co-workers can in a sense still be regarded as rather similar. They all
agree that the geometry of the fracture plane changes with increasing strain rate, i.e. leading to
aggregate fracture instead of fracture in the weaker cement paste.
The resisting force Fs due to the Stéfan effect can, according to Rossi, be expressed as
h
h
V
Fs &
5
2
2
3
π
η
= 	(5.1)
where
η is the liquid viscosity, V is its volume, h is the initial distance between the two plates
that separate and 	h& 	is the velocity of separation. However, Rossi emphasises that this
expression not should be used to determine the value of Fs but just be regarded as an
explanatory model to simplify the understanding of what happens in the concrete. If used thus,
it can also be seen from the expression that the size of the pore has a considerably larger effect
than the amount of free water, and that the restraining force is proportional to the velocity of
separation.

-- 119 of 242 --

102
It is highly interesting to note that Han (1996) makes use of the same explanations in his
thesis about long-term effects in high-strength concrete. This indicates that it is the same
phenomenon that causes the change in concrete strength for both long-time loading and
loading at very high strain rates. Both phenomena described above will have a positive effect
on the concrete strength in compression. In tension, though, only the Stéfan effect influences
the change in strength, which according to Han means that the strain rate effect in absolute
terms will also have a larger effect for concrete in compression than in tension. This is
opposite to a common opinion in the literature, e.g. CEB (1993) and Ross et al. (1995), that
the strain rate sensitivity is higher for concrete in tension than it is for concrete in
compression. However, this is probably due to different definitions of “sensitivity”. The
absolute increase at high strain rates is undoubtedly higher in compression, but due to the
comparably low static tensile strength its relative strength increase (i.e. DIF) is higher in
tension than in compression; see also Figure 5.12.
5.4.3 	Structural effects
The summarised test results presented in Figures 5.2 and 5.3 indicate that there is a sudden
increase in concrete strength with increasing strain rate at a certain critical strain rate. Of the
expressions discussed in Section 5.3 and shown in Figures 5.6 and 5.7 only those of CEB
(1993), Ross et al. (1996) and Malvar and Ross (1998) try to take this so-called transition
zone into account. According to CEB this occurs at a strain rate of 30 s-1 for concrete in both
tension or compression. Ross et al., though, differ between these two stress cases and state
that the transition zone for dry concrete in tension occurs somewhere in the interval of 1 to
10 s -1 while the corresponding strain rates for concrete in compression are 60 to 80 s-1 . This
use of different transition zones for concrete in tension and compression corresponds better to
the observations made in tests; compare Figures 5.2 and 5.3. This also suggests that the
location of the transition zone given in CEB is not valid; a change by a factor of ten, so it
appears at a strain rate of about 3 s-1 , seems more reasonable. This is why Malvar and Ross
(1998) proposed a modification to the CEB expression for concrete in tension, in which the
transition zone was set to occur at a strain rate of 1 s -1 . However, none of these references tries
to give any physical explanation for why this sudden increase occurs at all.
Rossi and Toutlemonde (1996), though, state that the increase in tensile strength up to a strain
rate of about 1 s-1 is due to the viscous effects described by the Stéfan model. After this, the
inertia forces are no longer negligible and at a strain rate higher than 10 s-1 their contribution

-- 120 of 242 --

103
is dominating. This statement is also supported by findings of Weerheijm (1992), who
developed a model based on linear elastic fracture mechanics to study the strain rate effect on
concrete tensile strength. Using this he was able to show that the steep increase in strength
obtained at high strain rates is caused by changed stress and energy distribution due to inertia
effects around the concrete crack tips. Hence, this phenomenon is not a material effect but a
structural response and its effect should therefore not be included in the constitutive model in,
for example, a finite element code. This may be true if the modelling treats aggregates and
cement paste as separate elements. However, if the concrete for instance is approximated as a
homogeneous material, something that is commonly assumed when modelling concrete
structures, this is not the case. Therefore, as argued by Malvar and Ross (1999), if the
numerical model used is unable to take this inertia phenomenon into account automatically,
then the steep increase still has to be considered in the material model used.
Whether this explanation about the effect of the inertia forces at the crack tips can be used for
concrete in compression too is not entirely clear, even though it seems quite reasonable since
the compressive failure also is governed by cracking. Bischoff and Perry (1991), however,
reason that the sudden increase for concrete in compression is due to inertia confinement
effects. When the concrete is loaded sufficiently fast, it will not have time to react and a stress
state similar to that of plain strain is obtained, thus resulting in a substantial increase in
strength because of the multiaxial stress state. The presence and influence of such inertia
confinement were also shown in finite element analyses of concrete specimens loaded in
compression at strain rates ranging from 300 to 700 s-1 , by Georgin et al. (1998). The effect of
confinement due to high strain rates has also been shown in Johansson (1999a).
5.5 	Effect of concrete strength on strain rate sensitivity
From the above it is evident that the presence of free water, in combination with the size of
the concrete micropores, greatly affects the strain rate sensitivity of the concrete. Generally, it
can be said that high-strength concrete has a finer pore system but also contains a lower
amount of free water. However, according to Han (1996), the relation between amount of free
water and size of the pore structure of such concrete is higher than it is in concrete with lower
strength; thus, the higher the strength of the concrete, the higher the strain rate sensitivity
should be. Figure 5.13 compares the influence of strain rate (sustained and static loading) for
concrete in compression with static strengths of about 28 kN and 95 kN, respectively. These
results indicate that high-strength concrete obtains a relatively large contribution from the

-- 121 of 242 --

104
internal pore pressure due to free water even for strain rates corresponding to that of static
loading; the capacity of the normal-strength concrete, though, is more or less unaffected. The
reason is that the micropores in the stronger concrete are so small that the movement of free
water even for very low strain rates results in a substantial contribution to the total strength.
For the normal-strength concrete, though, the amount of free water in relation to the size of
the micropores is so low that its contribution is still negligible. Based on this, it can be
concluded that a part of the static strength for concrete of higher strength is made up of
contributions from the viscous effects in the material's micropores. Hence, a part of this
potential “reserve” in strength has already been used before the strain rate even has passed that
corresponding to static loading.
Figure 5.13 	Comparison of stress-strain relations obtained for concrete of different strengths
when the strain rate is varied. The strain rates given refer to the transverse strain
rate where the higher value corresponds to static loading. From Han (1996).
Nevertheless, at sufficiently high strain rates the presence of free water also affects the
strength of normal-strength concrete. This contribution, according to the results obtained by
Rossi et al. (1994) as shown in Figure 5.11, is approximately the same independently of the
static strength of the concrete. Compared with the static strength, though, the strain rate
sensitivity will increase with decreasing static strength. This idea corresponds well with the
expressions presented in CEB (1993) where the static strength of the concrete is taken into
account. As shown in Figures 5.6 and 5.7 the increase in strength due to strain rate is higher
for low-strength concrete. However, in absolute terms, the increase is more or less the same in
both tension and compression, respectively; see Figure 5.14.

-- 122 of 242 --

105
0
5
10
15
20
10-5 10-4 10-3 10-2 10-1 100 101 102
strain rate [s-1 ]
Absolute increase in stress [Mpa]
f t = 2.36 MPa
f t = 4.18 MPa
f c = 30 MPa
f c = 60 MPa
Figure 5.14 	Contribution of strength due to strain rate effects lower than 30 s-1 for different
concrete strengths. According to CEB (1993).
The conclusions drawn above, regarding what influence the static strength has on the strain
rate sensitivity, are not supported by everyone. Bischoff and Perry (1992) state, in their
summary of the strain rate influence of compressive strength, that many researchers concluded
that concrete of high static strength is less sensitive to high strain rates. However, they also
point out that they do not agree that their summary indicates that this would be the case. Based
on the results presented in Figure 5.12 it still seems reasonable to take into account the static
strength of the concrete, as is done in CEB (1993) and Malvar and Ross (1998), when
determining what influence high strain rates have.
As discussed in Section 5.4.3 the transition zone, i.e. the steep increase in strength, for
concrete in tension appears at a strain rate that is approximately ten times lower than that for
compressed concrete. It was concluded that the reason for this phenomenon was the influence
of inertia forces within the material. The inertia effects will be negligible until such high strain
rates are reached that the inertia forces within the concrete at least attain a value reasonably
close to that of the static strength. Evidently, the lower the value these forces have to attain the
lower is the required strain rate, and accordingly inertia effects should influence low-strength
concrete earlier than high-strength concrete. Based on this reasoning, it is the author’s belief
that the static strength also affects the strain rate at which the transition zone appears. Apart

-- 123 of 242 --

106
from the apparent difference in positioning of the transition zone for concrete in tension and
compression, this thought is also supported by calculations made by Weerheijm as shown in
Figure 5.15 and by the author using a SDOF model; see Johansson (1999a). Weerheijm
examined the strain rate sensitivity for concrete of different strengths (tensile strength equal to
2.98 and 1.63 MPa for Mixes A and B, respectively) and whether the fracture energy was rate-
dependent or not. Here the dynamic increase factor is shown as a function of the stress rate.
However, the Young’s modulus used was in the range of about 31 to 34 GPa; thus, a stress
rate of 1 GPa/s corresponds to a strain rate of about 30 s-1 .
Figure 5.15 	Predicted rate effect for different concrete qualities subjected to tension, with
and without use of rate-dependent fracture energy (gam = h(p’) and gam = C,
respectively). Based on Weerheijm (1992).
5.6 	Effect of strain rate on other material parameters
As with the strength, the strain rate also affects the concrete Young's modulus even though its
influence on the latter is not as large as that of the strength. Rossi and Toutlemonde explain
that this is because the viscous effects described above do not affect the concrete aggregates
and, since these have the greatest importance for the value of the Young’s modulus, a lower
sensitivity is obtained. Nevertheless, Reinhardt (1982) and Rossi et al. (1992) state that the
rate sensitivity of Young's modulus increases with increased value of the w/c ratio. A high
value of w/c can be interpreted as concrete of low strength, which suggests that the static
strength perhaps would affect the strain rate sensitivity of Young's modulus. However, no

-- 124 of 242 --

107
such consideration is taken in either CEB (1993) or Soroushian et al. (1986). The strain rate
effect according to these references is compared in Figure 5.16a; the former differs between
the sensitivities in compression and tension. To the author’s knowledge, there are no reports
in the literature stating that either of them exhibits a transition zone where the influence of the
strain rate suddenly increases.
CEB - Compression
CEB - Tension
Soroushian et al.
0.8
1.0
1.2
1.4
1.6
1.8
2.0
10-5 10 -4 10 -3 10 -2 10 -1 100 101 102 103
Strain rate [s -1
]
Fdyn / Fsta
CEB - Compression
CEB - Tension
Soroushian et al.
0.8
1.0
1.2
1.4
1.6
1.8
2.0
10-5 10 -4 10 -3 10 -2 10 -1 100 101 102 103
Strain rate [s -1
]
Fdyn / Fsta
(a) 	(b)
Figure 5.16 	Influence of strain rate on: (a) Young's modulus, (b) strain at maximum stress.
Based on CEB (1988, 1993) and Soroushian et al. (1986). The former differs
between the rate sensitivities of concrete in compression and tension.
The strain rate effect on the strain at maximum stress is according to Bischoff and Perry
(1991), unclear. In their summary of results reported in the literature they found contradictory
test results, stating that the strain at maximum stress may both increase and decrease with
increasing strain rate. Nevertheless, Bischoff and Perry think that the results indicate that the
strain does increase with increasing strain rate. The expressions given by CEB Bulletin
d’Information No 187, CEB (1988), and Soroushian et al. are presented in Figure 5.16b; none
of the expressions take the static strength into account.
How the fracture energy changes with increasing strain rate has not been examined to a large
degree, even though Ulfkjaer et al. (1996) state that it does increase at higher strain rates. This
is also supported by CEB (1988) which gives an expression based on the velocity of the crack
opening. Weerheijm (1992), though, states that this is not the case. Instead, the increase in
deformation capacity and fracture energy observed in tests is due to multiple fracture and

-- 125 of 242 --

108
failure zones. Hence, according to this, the strain rate effect on fracture energy should be a
structural effect and not part of the material behaviour itself.
The research carried out on what influence high strain rates have on the bond strength is very
limited. However, Vos and Reinhardt (1980) and Yan and Mindess (1998) have shown that
the bond strength increases with increasing strain rates. Based on these, Malvar (1997) states
that the increase in bond strength at high strain rates can be approximated to be affected in the
same way as concrete.
5.7 	Influence of strain rate on reinforcement
As is the case for concrete, the reinforcement steel is also affected by high strain rates. It is
agreed that both the yield and the ultimate stresses increase at high strain rates and that the
Young’s modulus remains unchanged. However, about the ultimate strain, i.e. the strain at
ultimate stress, there seems to be a disagreement. Malvar (1998), who presents a thorough
review of tests at high strain rates of reinforcement bars used in the U.S., states that the
ultimate strain is unaffected by the strain rate. According to Limberger et al. (1982) and CEB
Bulletin d’Information No 187, CEB (1988), though, the ultimate strain increases with
increased strain rate. Further, how much the yield and ultimate stresses increase with
increasing strain rate differs quite considerably. Figure 5.17 shows a comparison of the
increase given by Malvar and CEB for a hot rolled deformed bar with a static yield strength of
500 MPa and an ultimate strength of 550 MPa. The expressions given by the former are valid
for strain rates between 10-4 and 10 s-1 while no limit is given for the expressions in the latter.
From this, it is quite clear that there is a very significant difference. It is of special interest to
note that the increase in ultimate strength according to Malvar is considerably lower than that
of the yield strength. The corresponding increase factors from CEB, though, show a slightly
larger increase for the latter compared to the former, thus suggesting that the reinforcement
would become more ductile at high strain rates; the findings of Malvar suggest the opposite.

-- 126 of 242 --

109
1.0
0.9
1.1
1.2
1.3
1.4
1.5
10-4 10-3 10-2 10-1 100 101 102
Strain rate [s-1 ]
Fdyn / Fsta
f sy - Malvar
f su - Malvar
f sy - CEB
f su - CEB
Figure 5.17 	Influence of strain rate on yield and ultimate stresses of reinforcement steel with
static yield strength f sy = 500 MPa and ultimate strength f su =550 MPa.. Based on
CEB (1988) and Malvar (1997).
5.8 	Strain rate mesh dependency in finite element analyses
As shown in the previous sections of this chapter, the concrete material properties change
significantly when subjected to high loading rates. Hence, it is also evident that to obtain an
accurate structural behaviour when modelling concrete structures subjected to such loads it
may also be necessary to take these effects into account. This is possible by including the
strain rate effect in the constitutive concrete material models. Such constitutive modelling has
been performed by several researchers, e.g. Nilsson (1979), Suaris and Shah (1985), Chandra
and Krauthammer (1996), Schmidt-Hurtienne et al. (1998), Georgin et al. (1998), Serecombe
et al. (1998), and Eibl and Schmidt-Hurtienne (1999). This field, though, was not included in
the scope of the work presented in this thesis and is therefore not further treated here.
Nevertheless, some observations and experiences, regarding the consideration of strain rate
effects in the finite element programme ABAQUS/Explicit, HKS (1998), are presented and
briefly discussed.

-- 127 of 242 --

110
A dynamically loaded concrete structure will encounter the same type of problems as a
statically loaded one. However, it will be shown below that when the strain rate effect is taken
into account in the constitutive models, the results obtained may also become mesh-
dependent. This is, for instance, the case in the strain-rate-dependent model supplied in the
finite element programme ABAQUS/Explicit, used for the dynamic analyses presented here.
In Section 3.4 it was discussed how the difficulties with localisation obtained for concrete in
tension and compression may be treated. It was concluded that the mesh dependency might be
largely dealt with by the use of fracture mechanics and by accurately taking into account
within what length the softening takes place. When modelling the cracking of unreinforced
concrete or reinforced concrete, where the interaction between the reinforcement and concrete
is accurately taken into account, the so-called crack extension is directly related to the length
of the independent element. Hence, since the crack strain represents a crack opening, the
stress-strain relation for a smaller element will also be more ductile than in a larger element.
Therefore, if the crack opening velocity is to be the same, independently of the element mesh
used, the strain rate in a smaller element will also be higher than in a larger one. This is
further exemplified below.
F
5 elements
F
10 elements
F
20 elements
F	
∆L
L
L / 2
L
L&	∆
Ec
GF
f t
200 mm
0.2 mm/s
30 GPa
100 N/m
3 MPa
εu,5	
εu,10	
εu,20
f t
L
i
f
G
t
F
i	u 	⋅	= 2
,	
ε
εcrack
σc
Figure 5.18 	Concrete prism subjected to elongation. The marked elements were modelled as
shown in the stress-crack strain relation; the rest of the elements were linear
elastic.

-- 128 of 242 --

111
Figure 5.18 shows a concrete prism, of length 0.2 m and cross-section 100 x 100 mm,
subjected to an elongation in displacement-controlled loading at speed 	L&	∆ 	. The prism was
modelled by using three different element meshes made up of 5, 10 or 20 beam elements. One
element in each mesh, positioned approximately in the prism midsection, was modelled as
non-linear with a tensile strength and a linear stress-crack strain relation using von Mises
plasticity; the rest of the elements were modelled as linear elastic. As mentioned above, the
stress-strain relations used are related to the size of the cracking element, hence assuring that
the resulting force-elongation relation will be the same independently of what element mesh
was used.
Figure 5.19a shows the strain rate obtained in the cracking element. Initially, it is the same for
all three meshes. However, when the tensile strength is reached at an elongation of
∆L = 0.02 mm and cracking is initiated, a localisation is obtained in the cracked element; the
rest of the elements in the prism unload. The strain rate will then also be considerably
affected, obtaining a value inversely proportional to the length of the element. This has no
effect, though, if the material model used is strain-rate-independent; the load-elongation
relation will then be the same independently of what mesh is used. However, if the strain rate
effect is included in the concrete constitutive model it may cause a considerable change in the
general behaviour.
0
5
10
15
20
25
30
35
40
0.00 0.01 0.02 0.03 0.04 0.05 0.06 0.07 0.08
Strain rate [s -1 ⋅10-3 ]
20 elements
10 elements
5 elements
Elongation,
∆L [mm]
Strain rate [s-1 ⋅10-3 ]
0
5
10
15
20
25
30
35
40
0.00 0.01 0.02 0.03 0.04 0.05 0.06 0.07 0.08
Elongation,
∆L [mm]
20 elements
10 elements
5 elements
(a) 	(b)
Figure 5.19 	Strain rate in cracking element when the material model is: (a) non-rate-
dependent; (b) rate-dependent.

-- 129 of 242 --

112
The stress-crack strain relation was modelled with von Mises plasticity since it was then
possible to include the strain rate effect by using a viscoplastic model. The rate-dependency
used is shown in Figure 5.20a. This DIF-strain rate relation is related to that obtained for
concrete in tension for f c = 30 MPa when the expression proposed by Malvar and Ross (1998)
is used. However, to simplify the comparison made here, the elongation velocity 	L&	∆ 	of the
concrete prism was chosen so that the inertia effects became negligible. This, though, leads to
strain rates that are small compared to that necessary to reach the transition zone for concrete
in tension. Therefore, the DIF-strain rate relation proposed by Malvar and Ross was modified
to correspond better with the conditions used here. The strain rate was reduced by a factor
of 100; i.e. the location of the transition zone originally proposed to take place at
ε& = 1 s-1
was changed to appear at
ε& = 0.01 s -1 . Further, the DIF was normalised with respect to the
original DIF at
ε& = 0.1 s -1 , thus reducing it to one at this strain rate.
0.8
1.0
1.2
1.4
1.6
1.8
2.0
1 	10 	100
Strain rate [s-1 ⋅10-3 ]
Dynamic increase factor (DIF)
1
2
5
10
15
20
25
30
40
50
1.00
1.03
1.07
1.10
1.24
1.38
1.48
1.57
1.72
1.86
DIF	
ε&
0
5
10
15
20
25
30
35
40
0.00 0.01 0.02 0.03 0.04 0.05 0.06 0.07 0.08
Displacement,
∆L [mm]
Load, F [kN]
20 elements
10 elements
5 elements
not rate
dependent
(a) 	(b)
Figure 5.20 	(a) DIF-strain rate relation used in the rate-dependent analyses, and (b) load-
elongation relations obtained when modelling the concrete prism with different
numbers of elements. The relation obtained for the rate-independent analyses is
shown for comparison.
The inclusion of rate-dependency affected the strain rate as shown in Figure 5.19b. When
comparing the resulting load-elongation relations in Figure 5.20b it is also evident that the
different strain rates obtained had a substantial effect. The difference in maximum load when
using 5 or 10 elements is comparably small. Even though the strain rate increases by a factor

-- 130 of 242 --

113
of two; its effect on the material properties is still about the same. However, the increase in
load capacity is more apparent for the prism modelled by 20 elements. Here, the strain rate at
maximum load has passed the transition zone and the DIF is therefore considerably increased.
From this it can be concluded that, depending on which side of the transition zone the
resulting strain rates are obtained at, a change in element size may have a very significant
effect on the final result. Using different DIF-strain rate relations for different mesh sizes
could perhaps partly solve this problem, but it is still to be determined what element length
corresponds to the original DIF-strain rate relation proposed by for instance, Malvar and Ross.
Until then, it is the author’s opinion that the use of rate-dependent material models, such as
those in ABAQUS/Explicit, should be exercised with great care. This is also the reason why
the reinforcement in the shelter analyses presented in Paper III was not modelled as a rate-
dependent material.

-- 131 of 242 --

114

-- 132 of 242 --

115
6 	Numerical solution methods for dynamic problems
6.1 	General
The equilibrium equation for a dynamic problem can be written as
P	KU	U	C	U	M 	=	+	+ 	&	&& 	(6.1)
where M, C and K represent the mass, damping and stiffness matrices; U&& , U& and U are the
acceleration, velocity and displacement vectors, respectively. When using numerical methods
to solve this equation, two different classes of methods are, according to Bathe (1996),
generally used: the mode superposition and direct integration methods. The choice of which
method is best to use is determined by the numerical effectiveness. The dynamic analyses
presented in this thesis, though, have only made use of the latter, so the former is mentioned
very briefly. For a more thorough description of mode superposition, see for instance Bathe
(1996).
6.2 	Mode superposition
In the mode superposition method, the dynamic equilibrium equation (6.1) is first transformed
into a form in which is less costly to solve. The transformation matrix used may be established
by neglecting the damping and using the displacement solutions of the free-vibration
equilibrium equations
0	=	+ KU	U	M && 	(6.2)
To solve this, the displacement can be assumed to be have the form
)	(	sin 	0	t	t	U 	−	=
	ω
	φ 	(6.3)
where
φ is a vector of order n describing the shapes of the n first modes,
ω is the angular
frequency, t is time and t 0 is a time constant. Combining equations (6.2) and (6.3) an
eigenproblem of the form
φ
	ω
	φ 	M	K 2
= 	(6.4)
is obtained. The eigenvalues and their corresponding eigenvectors are found, and the latter
form the transformation matrix. As shown in for example Bathe, the use of this transformation

-- 133 of 242 --

116
matrix yields a decoupled system of equations, which means that the response of the modes in
the analysed structure can be determined individually. These modes can then be superposed
and the response of the whole structure determined. Thus, the advantage with a mode
superposition analysis is that not all modes have to be considered; instead only those believed
to affect the response of the structure studied need to be taken into account. This is the
primary reason why this procedure can be much more effective than direct integration
methods. However, it also means that the effectiveness depends on how many modes have to
be taken into account, something that usually depends on a combination of the geometry of
the structure, the distribution in time and space of the load, and the load frequency content. A
harmonically loaded structure needs a small number of modes, while for example a highly
transient load, such as a blast load, needs substantially more modes to obtain an accurate
solution. Further, the method might not be very effective for solving non-linear problems. The
mode superposition procedure is well suited to solve strictly linear problems where a higher
cost-efficiency often can be achieved, compared to a direct integration method. However, for
non-linear problems the mode forms will vary with time, which means that they will have to
be recalculated in each step, thus making the method far less attractive for such problems.
According to Bathe, mode superposition only efficient for non-linear dynamic problems only
if a relatively small number of modes is necessary; if this criterion cannot be met, then direct
integration should be used instead.
6.3 	Direct integration methods
6.3.1 	General
When solving a problem by using a direct integration method, the expression in equation (6.1)
is solved numerically through an incremental process. The term “direct” means that no
transformation to another form of this expression takes place prior to the numerical
integration. The direct integration methods are, according to Bergan et al. (1986), commonly
classified into two groups: explicit and implicit methods. The essential difference between
these two classes can be said to be when in time the equilibrium of equation (6.1) is solved.
For the explicit methods, the displacement vector t+
∆t U is solved by using the equilibrium at
time t; for the implicit methods it is instead solved at time t+
∆t; compare equations (6.5) and
(6.6) respectively.

-- 134 of 242 --

117
P	U	K	U	C	U	M t	t	t	t =	+	+ 	&	&& 	(6.5)
P	U	K	U	C	U	M t	t	t	t	t	t	t	t 	∆	+	∆	+	∆	+	∆	+ =	+	+ 	&	&& 	(6.6)
The index used refers to what time the parameter used belongs to; e.g. 	Ut && 	indicates the
acceleration at time t and 	Ut	t 	&	∆	+ refers to the velocity at time t+
∆t. Here, M, C and K are
assumed to be constant in time.
Several integration methods have been developed, of which many can be said to be special
cases of the more generalised Newmark method which is briefly treated here; for more
information the reader is referred to, for instance, Hughes (1987) or Bathe (1996). In the
Newmark method, the velocity and displacement vectors are expressed as
( 	)	[ 	]	U	U	t	U	U t	t	t	t	t	t 	&&	&&	&	& 	∆	+	∆	+ +	−	∆	+	=
	δ
	δ	1 	(6.7)
ù
ê
ë
é +	÷
ø
ö
ç
è
æ −	∆	+	∆	+	= ∆	+	∆	+ U	U	t	U	t	U	U t	t	t	t	t	t	t 	&&	&&	&	
α
	α
2
1	2 (6.8)
where
δ and
α are parameters that are used to obtain accuracy and stability, respectively.
According to Bergan et al. (1986) the former is used to control the numerical damping in the
solution algorithm, and the latter is used to control what solution method is used. To better
illustrate the difference between explicit and implicit integration methods, the explicit central
difference method and the implicit trapezoidal rule (also referred to as the constant-average
acceleration method) are presented below. To better visualise the difference between the
methods, initially only linear problems are treated here; the influence of non-linear behaviour
is discussed in Section 6.3.4.
6.3.2 	Explicit integration method
By setting the numerical damping to zero, i.e.
δ = 0.5, and using
α = 0 in the Newmark
method, the central difference method is obtained, which is a commonly used explicit method.
Using the values given above for
δ and
α in equations (6.7) and (6.8), and assuming a constant
time step
∆t, the acceleration and velocity at time t can be expressed as
( 	)	U	U	U
t
U t	t	t	t	t	t 	∆	−	∆	+ +	−
∆
= 	2
1
2
&& 	(6.9)
( 	)	U	U
t
U t	t	t	t	t 	∆	−	∆	+ −
∆
= 2
1	& 	(6.10)

-- 135 of 242 --

118
The solution for the displacement U at time t+
∆t is then obtained by combining these two
expressions with that in equation (6.5) and an expression for t+
∆t U can be derived as
ö
çç
è
æ 	ù
ê
ë
é
∆
−
∆
−ú
ù
ê
ë
é
∆
−	−	÷
ø
ö
ç
è
æ
∆
+
∆
= ∆	−
−
∆	+ U
t
C
t
M
U
t
M
K	P
t
C
t
M
U t	t	t	t	t	t
2
2
2 2	2
1
2 	(6.11)
Since all terms on the right-hand side are known from time t-
∆t or time t, the displacement
t+
∆t U can be explicitly determined.
It can be shown that the central difference method is conditionally stable, i.e. that the time
step
∆t used in equation (6.11) has to be less than or equal to a critical time step
∆t cr if an
acceptable solution is to be obtained; see also Section 6.3.5. This critical time step is normally
very small, which usually means that it takes a lot of increments for the analysis to cover the
time period that is to be examined. Consequently, an important criterion for the method to be
of practical use is that the response in each increment can be solved very effectively.
However, this is possible by neglecting the effect of damping or making sure to use a diagonal
damping matrix, and by using a lumped (i.e. diagonal) mass matrix. Thereby, the inverted part
in equation (6.11) can easily be determined and t+
∆t U solved by the use of ordinary matrix
multiplication. Hence, a fast and effective solution method is obtained since the calculations
necessary in each increment become very “cheap”.
As shown in equation (6.11) the calculation of t+
∆t U makes use of both t U and t-
∆t U. However,
this means that when solving the displacement at time
∆t information about the displacement
at time -
∆t is needed. Hence, to calculate the displacement at time
∆t it is necessary to use a
special starting procedure that according to Bathe is expressed as
U
t
U	t	U	Ut 	&&	& 	0
2
0	0
2
∆
+	∆	−	=∆	− (6.12)

-- 136 of 242 --

119
6.3.3 	Implicit integration method
If
δ and
α are set to 0.5 and 0.25, respectively, in the Newmark method the so-called
trapezoidal rule is obtained. Thus, the velocity and displacement vectors can be written as
( 	)	U	U
t
U	U t	t	t	t	t	t 	&&	&&	&	& 	∆	+	∆	+ +
∆
+	= 2 (6.13)
( 	)	U	U
t
U	t	U	U t	t	t	t	t	t	t 	&&	&&	& 	∆	+	∆	+ +
∆
+	∆	+	= 4
2
(6.14)
and by using these expressions in equation (6.6) the displacement at time t+
∆t can be derived
as
ö
çç
è
æ 	ù
ê
ë
é
∆
+
∆
+ú
ù
ê
ë
é +
∆
+	+	÷
ø
ö
ç
è
æ +
∆
+
∆
= ∆	+
−
∆	+ U
t
C
t
M
U	C
t
M
U	M	P	K
t
C
t
M
U t	t	t	t	t	t	t 	2	4	4	2	4 2
1
2
&	&& 	(6.15)
Contrary to the central difference method, the trapezoidal rule is unconditionally stable; that
is, the stability of the solution remains independent of what value of the time step
∆t is used.
Neither does it need a special starting procedure since the displacement at time t+
∆t only
depends on parameters at time t and t+
∆t. This is the unconditionally stable method originally
proposed by Newmark and is, according to Bathe, also the one which has the most desirable
accuracy characteristic. A closer look at the expression in equation (6.15) reveals that the
stiffness matrix K is included in the term that has to be inverted (i.e. the effective stiffness
matrix) to obtain the displacement t+
∆t U. Due to his requirement each increment will be far
more “expensive” in this method than the central difference method, where this procedure is
not necessary; compare equation (6.11). Finally, it is worth noting that if the effect of inertia
and damping is neglected in the expression given in equation (6.15) it is reduced to a static
analysis, i.e. if C and M is set to zero the static solution is obtained for a time-dependent load.
Doing the same with the central difference method, though, is not possible.
6.3.4 	Solution of non-linear problems
The expressions to determine the displacement at time t+
∆t by an explicit and an implicit
method were derived in equations (6.11) and (6.15), respectively. It has been discussed above
that the treatment of the stiffness matrix differs in the two methods. However, in the
foregoing, only linear problems were treated; thus the stiffness matrix K was also constant. If

-- 137 of 242 --

120
the problem is non-linear, there are more differences in how a solution is obtained in the
different analyses. If assuming non-linear material behaviour, the stiffness matrix K will no
longer be constant; instead at time t it depends on the displacement t U. Accordingly equations
(6.11) and (6.15) can be rewritten as
ö
çç
è
æ 	ù
ê
ë
é
∆
−
∆
−ú
ù
ê
ë
é
∆
−	−	÷
ø
ö
ç
è
æ
∆
+
∆
= ∆	−
−
∆	+ U
t
C
t
M
U
t
M
K	P
t
C
t
M
U t	t	t	t	t	t	t
2
2
2 2	2
1
2 	(6.16)
and
ö
çç
è
æ 	ù
ê
ë
é
∆
+
∆
+ú
ù
ê
ë
é +
∆
+	+	÷
ø
ö
ç
è
æ +
∆
+
∆
= ∆	+
−
∆	+	∆	+ U
t
C
t
M
U	C
t
M
U	M	P	K
t
C
t
M
U t	t	t	t	t	t	t	t	t 	2	4	4	2	4
2
1
2
&	&& 	(6.17)
respectively. Above, it has been assumed that only the stiffness matrix depends on time, and
that the mass and damping remain constant. For the solution of t+
∆t U using the explicit central
difference method in equation (6.16) there will not be any essential changes, the distinction
being that the stiffness is now time-dependent. Consequently, since t+
∆t U depends only on
values already known, the same procedure as in the linear case can be used. However, this is
not the case for the implicit trapezoidal rule. Here t+
∆t U depends on t+
∆t K, which in turn
depends on t+
∆t U. Hence, the use of an iteration process is necessary to reach a solution, thus
making the method even more “expensive”. To summarise, when using an explicit method it
does not matter whether the problem is linear or non-linear; the time needed to solve the
problem will be the same anyway. But, for an implicit method it will have a large effect, since
a non-linear problem has to be solved with the help of an iteration process.
6.3.5 	Stability
It was mentioned above that the central difference method is conditionally stable, and that its
major disadvantage was that it has to make use of an often very small time step
∆t. Contrary
to this, the implicit trapezoidal rule is unconditionally stable, meaning that there is no such
limitation on what time step can be used. That a solution is stable means that any errors in the
solution, due for example to round-off in the computer, do not grow in the continuos
calculation. However, as already noted, the stability of a solution can be guaranteed by using a
sufficiently small time step
∆t so that the response in the highest-frequency component is

-- 138 of 242 --

121
accurately predicted. Considering the stability of integration methods, one distinguishes
between conditionally stable and unconditionally stable procedures. In the Newmark method,
the latter is the case if the following conditions are fulfilled:
5	.	0	≥
	δ 	(6.18)
( 	)2
5	.	0	25	.	0 	+	≥
	δ
	α 	(6.19)
However, if the values of
δ and/or
α do not meet these conditions, the integration method
becomes conditionally stable. The critical time step
∆t cr needed in such a case can, for an
undamped, system be determined as
( 	)
	α
	δ
	ω 	−	+
=	∆ 2
max 	5	.	0	25	.	0
1	1
cr	t 	(6.20)
where
ωmax is the maximum angular frequency for any component in the system. Comparing
the values of
δ = 0.5 and
α = 0, i.e. the values used to obtain the central difference method,
with the conditions given above, it is evident that this method is conditionally stable and that
its critical time step necessary to obtain stability is
max
2
ω
=	∆ cr	t 	(6.21)
According to Bathe the critical time step is independent of damping; in ABAQUS/Explicit,
though, a somewhat different variant of the central difference method described here is used,
which also causes the critical time step to depend on the damping, see Section 6.3.8. A
physical interpretation of this time limit, which perhaps is easier to understand, is that the
critical time step
∆t cr in equation (6.21) corresponds to the minimum time it takes for a stress
wave to travel through any finite element included in the analysis. Thus, the use of this time
step guarantees that no wave passes an element without it being able to respond. If the time
step used is larger than the critical time step, the lack of response causes loss of information
and results in an unstable solution.
By making a similar comparison to the trapezoidal rule (
δ = 0.5 and
α = 0.25) it is found that
this method fulfils the conditions given in equations (6.16) and (6.17) and therefore is
unconditionally stable. Thus, regarding only the stability of the solution, the time step used
could be of any value. However, even though this usually means that the time step used in an
implicit method can be considerably larger than what is the case in an explicit method, its size
is still of utmost importance to obtain an accurate solution.

-- 139 of 242 --

122
-6
-4
-2
0
2
4
6
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0 	3.5
m = 2.4 kg
k = 3⋅109 N/m
P = 150 kN
00	0 =	= u	u 	&
m P
k u
Time [ms]
Displacement, u [mm]
∆t = 0.200
∆t cr
∆t = 1.001
∆t cr
Figure 6.1 	Comparison of stable and unstable solutions of SDOF system when the central
difference method is used. The stable solution (
∆t = 0.200
∆t cr) corresponds to the
exact one.
Figure 6.1 illustrates what effect a too large time step has on a linear, undamped single-
degree-of-freedom system (SDOF system) when this is solved by using the central difference
method. From the figure it is evident that the error in the solution increases very quickly to
such proportions that it soon becomes useless.
6.3.6 	Way of loading
The usual way to apply the load of a structure is to use load-controlled or displacement-
controlled loading. The problem with the former is that it is not possible to follow the post-
peak behaviour of a structure, i.e. the response after maximum load, something that is of
utmost importance when studying the ductility of a structure; see Figure 6.2a. Depending on
the load condition, it may be possible to solve this by loading the structure through direct
displacement-control instead, thus also enabling the post-peak response to be described in the
solution. However, for many cases this solution is not possible since there are no node or
nodes suitable to represent the load or load combination that is to be used. A simple example
of such a case is a simply supported beam loaded by two point loads as shown in Figure 6.2c.
In a static or implicit analysis, in which iterations are used, it would be possible to use a so-

-- 140 of 242 --

123
called arch length method to follow the response until final failure; but in an explicit method
this is, to the author’s knowledge, not possible since no iterations are carried out. It would
perhaps be possible to follow the post-peak response using load-controlled loading also but
then an iterative procedure including the external load and the displacement in the controlled
node would be necessary. Therefore, regarding the possibility to model different load cases, an
explicit method is at a disadvantage of an implicit one.
δ
F
(b)
(c)	Displacement,
δ
Load, F
(a)
point reached when using
load-controlled loading
point reached when
using displacement-
controlled loading
Figur 6.2 	(a) Schematic view showing the difference in response that it is possible to follow
when using load-controlled or displacement-controlled loading. Example of load
case where it is (b) possible, and (c) not possible, to use direct displacement
controlled loading.
Apart from displacement-controlled loading, it is also possible in dynamic analyses to apply
the load as velocity-controlled as well. The advantage of this method is that the load then is
applied more “smoothly” than is the case using displacement-controlled loading. Thus, it is
possible 	to 	avoid 	acceleration 	terms 	approaching 	infinity 	as 	schematically 	shown 	in
Figure 6.3.

-- 141 of 242 --

124
t
u
t
u&
t
u&&
t1 	t2 	t3 	t1 	t2 	t3 	t1 	t2 	t3
u&& 	 ∞ when
using deformation-
controlled loading
t3 = t2 + t1 / 2
2ut1
ut1
deformation-
controlled
velocity-
controlled
Figure 6.3 	Schematic view of the difference in deformation, velocity and acceleration terms
when using deformation-controlled or velocity-controlled loading.
6.3.7 	Choosing integration method
Which integration method should be used for a specific problem depends to a large degree on
the “calculation cost” of solving the problem. Due to the usually small time step allowed in an
explicit analysis, this method is normally used only when the load can be applied during a
relatively short time, e.g. blast load analyses on buildings or crash analyses of cars. Even
though it is possible to use an implicit method for these kinds of problems too, the solution
time needed is usually much higher than that needed by the explicit method. In other dynamic
cases, however, in which the loading lasts during a longer time of perhaps a couple of
seconds, the conditions are reversed. Here, implicit methods are more suitable since a larger
time step can be used, while the explicit method still has to fulfil the requirement on its
critical time step, resulting in very long execution times. The characteristic ability of the
explicit method to always obtain equilibrium without using iterations, though, transforms it to
a robust method that makes it attractive to use also for static problems. This, in combination
with the fact that it is an effective tool in contact problems, has enabled it to be used
frequently in metal sheeting analyses in, for example, the car industry; see e.g. Mattiasson
et al. (1991). Further, it has successfully been used in analyses of statically loaded concrete
structures, e.g. by Johansson (1998) and Martinez and Sanchez (2000).

-- 142 of 242 --

125
6.3.8 	Central difference method in ABAQUS/Explicit
The central difference method used in ABAQUS/Explicit, HKS (1997), is somewhat different
from the one described in Section 6.3.2 and is therefore treated briefly here. The expression in
equation (6.9) for the acceleration remains the same but the velocity in equation (6.10) is
changed to
( 	)t 	t 	t 	t 	t
U t U 	U− 	−
= 	−∆ 	∆
∆
2 	1& 	(6.22)
i.e. the velocity is specified at time t-
∆t/2 instead of time t. By combining equations (6.5),
(6.9) and (6.22) it is possible to derive an expression for the displacement at time t+
∆t
corresponding to that shown in equation (6.11) and the displacement t+
∆t U can then be derived
as
t 	t 	t 	t 	t 	t
U 	t 	M 	P 	K M
t
C
t U M
t
C
t U+ 	− 	−
= 	− 	− 	−ê 	ú − 	−
é
ëê ù
ú
æ
è
ç ö
ø
÷
∆ 	∆
∆ ∆ 	∆ 	∆ 	∆
2 	1
2 	2
2 (6.23)
As is the case in equation (6.11) all parameters on the right-hand side are known and the
displacement t+
∆t U can therefore be determined explicitly. Further, from this it can be seen
that the damping matrix C is no longer part of the term that has to be inverted. Accordingly,
any type of damping can now be taken into account without affecting the efficiency of the
calculation. The mass matrix, though, still has to be lumped to ensure that a quick solution of
M -1 is possible. This kind of central difference method gives the same accuracy as that
previously described. However, contrary to the original method discussed in Section 6.3.2 the
damping coefficient now influences the stability of the solution:
( 	)
	ξ
	ξ
ω −	+	=	∆ 2
max
1
2
cr	t 	(6.24)
and hence the critical time step
∆t cr becomes a function of the damping coefficient
ξ.

-- 143 of 242 --

126

-- 144 of 242 --

127
7 	Conclusions
7.1 	General
The main aim of this research project was to evaluate a new design proposal of the
reinforcement detailing in concrete frame corners of Swedish civil defence shelters, and to
examine whether this detailing, consisting of reinforcement loops spliced within the corner, is
appropriate to replace the detailings previously used in closing and opening frame corners.
This part of the study was carried out by a combination of a literature survey, experimental
testing and non-linear finite element analyses. Further, since a civil defence shelter must be
able to withstand highly dynamic load cases, where the structural response might be quite
different, another aim was to increase the knowledge of what structural response is obtained
when subjected to such loads and to examine whether the conclusions drawn from static tests
and analyses could also be used in such a case. This was dealt with by studying a civil
defence shelter, subjected to a blast load from an explosion or falling masses from a
collapsing building, using dynamic non-linear finite element analyses.
The reinforcement detailings used in opening frame corners are very critical for what response
will be obtained. A common approach is to use reinforcement loops combined with inclined
bars positioned at the inside of the corner. However, it is shown herein that the use of such
inclined bars may not be as efficient as commonly thought. Instead they may as well be
replaced by an equivalent amount of extra reinforcement loops, thus resulting in a detailing
that may be considerably easier to carry out. Neither detailing, though, is guaranteed to fulfil
the requirement of full efficiency, as it is defined here, unless the mechanical reinforcement is
lower than an upper limit, here derived to be
ωs = 0.033 for concrete of compressive strength
less than 50 MPa. This might be difficult to fulfil if using high reinforcement ratios, and a
discussion of possible solutions is therefore presented. It was found that the best method
probably is to increase the concrete strength within the corner, especially by the use of fibre-
reinforced concrete. Although full efficiency of such a corner detailing may not be achieved, a
ductile behaviour may very well still be obtained. Further, it was concluded that if inclined
bars are to be used it is important not to splice the reinforcement loops and straight bars just
outside the corner region.
Contrary to opening corners, frame corners subjected to closing moment are less sensitive to
what reinforcement detailing is used. Accordingly, even though test results indicate that the
use of reinforcement loops causes increased risk of concrete side spalling, the new proposal

-- 145 of 242 --

128
has proven to be at least as efficient as the conventional one. The negative influence due to
such spalling of the side concrete cover will, in a wall-slab connection, be of minor
importance due to the large number of bars present. In a beam-column joint, though, this is
not necessarily the case and special attention must be given to the spalling phenomenon in
such structures since it may have great influence on the final capacity.
In the dynamic analyses of a shelter it was found that the global response of a structure
subjected to a blast load, in the initial stage, may be very different from that of a static load. A
major reason is that the boundary conditions of a structure subjected to high-rate loading may
be regarded as time-dependent. Nevertheless, the results obtained indicate that no critical
cracks will form within the corner region, and it therefore seems reasonable to believe that the
response within such a corner will be similar to that obtained in a statically loaded structure.
Accordingly, even though the structural behaviour may be completely different in static and
transient loaded structures the local behaviour may still be rather similar. Consequently, it can
be concluded that it is suitable to replace the conventional detailings in both opening and
closing frame corners in civil defence shelters with the new reinforcement proposal of spliced
reinforcement 	loops 	within 	the 	corner. 	In 	opening 	corners, 	though, 	an 	additional
reinforcement amount up to 35% may be required. As a result of the work presented herein,
this detailing is now prescribed in the present Swedish Shelter Regulations, Swedish Rescue
Services Agency (1998).
The non-linear finite element analyses carried out within the scope of this work have shown
that the finite element method can be a very powerful tool in the study of reinforced concrete
structures. Such analyses may supply the means for further understanding and increased
knowledge of the often complicated response in reinforced concrete structures, making it
possible to explain phenomena in a way that would not be 	possible 	by using only
conventional testing and evaluation methods. Nevertheless, it is important to remember that
experimental testing cannot be neglected since they always describe the reality, while the
former is just an attempt to simulate it. Hence, while both methods have certain advantages
when used alone, they will only be at their fullest advantage when combined. However, the
use of such an advanced tool also puts a high demand on the user. The post-peak behaviours
for concrete in tension and compression, for instance, are both highly localised phenomena,
making it difficult to determine a correct stress-strain relation to use in an analysis. To be able
to accurately simulate such a response the concept of fracture energy and the length of the
softening region have to be considered. For concrete in tension this is a fully accepted
approach, whereas for concrete in compression it is still not commonly used. Thus, the stress-

-- 146 of 242 --

129
strain relations for the latter, which can be found in the literature, cannot be used directly in a
finite element analysis since they are related to the height of the specimens used when
evaluating it, and not the zone in which softening will take place in an analysis.
Concrete structures subjected to high loading rates will also exhibit high strain rates that
influence the material properties of both concrete and reinforcement. Hence, it may be
important to include those effects when modelling concrete structures subjected to transient
loading. However, it was found that the strain rate obtained might depend on what element
sizes are used (this is, for instance, the case in the programme ABAQUS/Explicit used herein)
and the material properties then also become mesh-dependent. Therefore, it was concluded
that rate dependent material models have to be used with great care if the results are to be
trusted.
7.2 	Suggestions for future research
The static analyses carried out herein showed some shortcomings regarding their possibility to
predict the occurrence of side concrete spalling and the loss of the compressed concrete at the
outside of opening frame corners. The former deficiency was due to the use of two-
dimensional plane stress elements, while the latter was because of the concrete material
models used. In both cases, the anchorage of the reinforcement loops is vital for the response
obtained. Therefore, it is important that the stress state surrounding the reinforcement bars is
accurately accounted for when modelling the interaction between reinforcement and concrete,
so that the loss of concrete cover is also reflected in the loops’ bond behaviour. This is
possible by using, for instance, the bond model proposed by Lundgren (1999). Accordingly,
three-dimensional finite element analyses, including more sophisticated crack models than
those used herein, so that the loss of the concrete part at the outside of the corner is accurately
described, and incorporating Lundgren’s bond model, would be highly informative in the
future study of concrete frame corners. Such analyses could then be used to increase the
understanding of response observed in tests. In such a study it would also be comparatively
easy to include the effect of haunches and/or different sizes of the corner.

-- 147 of 242 --

130
The advantage of spliced reinforcement loops in joint connections has been shown for the
case of opening and closing frame corners with an angle of 90°. Moreover, such a solution
can undoubtedly be used successfully also for other types of connections, e.g. T-joints or
splicing between two beam sections as shown in Figure 7.1. The latter was briefly treated
within the scope of this work, in Appendix B and Grassl (1999), but further work is needed to
fully understand the structural response obtained.
(a) 	(b)
Figure 7.1 Possible joint connections where the splicing of reinforcement loops could be of
use: (a) T-joint and (b) beam connection.
The dynamic analyses carried out herein could only take into account the influence of high
strain rates on the material properties used in a very approximate way. It would be valuable to
further examine what effects might emerge if the influence is considered more accurately. In
addition, apart from the pressure of a nearby explosion there will also be the effects of splinter
hitting the structure before, after or simultaneously with the blast load. Due to its complexity,
this process was not incorporated in the present study. Nevertheless, it may be very important
for the structural response and further investigation is therefore necessary.

-- 148 of 242 --

131
References
Abdul-Wahab H.M.S. and Ali W.A. (1989): Strength and Behaviour of Reinforced Concrete
Obtuse Corners under Opening Bending Moments. ACI Structural Journal, Vol. 86, No. 6,
pp. 679-685.
Abdul-Wahab H.M.S. and Al-Roubai A.A.M. (1998): Strength and behaviour of steel fibre
reinforced concrete corners under opening bending moment, Magazine of Concrete
Research, Vol. 50, No. 4, pp. 305-318.
Abdul-Wahab H.M.S. and Salman S.A.R. (1999): Effect of Corner Angle on Efficiency of
Reinforced Concrete Joints under Opening Bending Moment, ACI Structural Journal
Vol. 96, No. 1, pp. 115-121.
Anderson L. (1985): Inverkan på skyddsrum av byggnadsras (Influence of collapse load on
Civil defence Shelters – Static and Dynamic Loaded Concrete Strips. In Swedish).
Department 	of 	Building 	Statics 	and 	Structural 	Engineering, 	Royale 	Institute 	of
Technology, Message No. 141, Stockholm, Sweden.
Anderson L. (1987a): Statisk and dynamisk belastning av betongplattstrimlor (Static and
Dynamic Loading of Concrete Strips. In Swedish). Department of Building Statics and
Structural Engineering, Royale Institute of Technology, Message No. 145, Stockholm,
Sweden.
Anderson L. (1987b): Energiåtgång vid dynamisk engångslast på betongplattor, Del 1
(Energy dissipation at impact loding of concrete slabs, Part 1. In Swedish). Department of
Building Statics and Structural Engineering, Royale Institute of Technology, Message
No. 148, Stockholm, Sweden.
Baker W.E. (1973): Explosions in air. University of Texas press, Austin, USA.
Balasz P. (1997): Beräkningsmetoder vid stötvågsbelastade konstruktioner (Methods for
Calculations of Blast Loaded Structural Behaviour. In Swedish). Department of Weapons
and 	Protection, 	National 	Defence 	Research 	Establishment, 	FOA-R97-00473-311,
Stockholm, Sweden.

-- 149 of 242 --

132
Balint P.S. and Taylor H.P.J. (1972): Reinforcement Detailing of Frame Corner Joints with
Particular Reference to Opening Corners, Technical Report 42.462, Cement and Concrete
Association, London, England.
Bathe K-J. (1996): Finite Element Procedures. Prentice-Hall, Englewood Cliffs, New Jersey.
Betonghandboken (1990): Betonghandboken – Konstruktion, utgåva 2 (Concrete Handbook
Design, Second Edition. In Swedish). Edited by Cederwall K., Lorentsen M. and Östlund
L., AB Svensk Byggtjänst, Stockholm, Sweden.
Betonghandboken (1994): Betonghandboken – Material, utgåva 2 (Concrete Handbook
Material, 	Second 	Edition. 	In 	Swedish). 	Edited 	by 	Ljungkrantz 	C., 	Möller 	G. 	and
Petersons N.., AB Svensk Byggtjänst, Stockholm, Sweden.
Boverket 	(1994): 	Boverkets 	handbok 	för 	Betongkonstruktioner 	BBK 	94, 	Band 	1,
Konstruktion (Boverket's Handbook for Concrete Structures, BBK 94, Vol. 1, Design. In
Swedish). Boverket, Byggavdelningen, Karlskrona, Sweden.
Bergan P.G., Larsen P.K. and Mollestad E. (1986): Svingning av konstruksjoner, Andra
utgåvan (Vibration of Structures. In Norwegian). Tapir, Trondheim, Norway.
Bischoff P.H. and Perry S.H. (1991): Compressive behaviour of concrete at high strain rates.
Materials and Structures, 1991, 24, pp. 425-450.
Brode H.L. (1955): Numerical Solutions of Spherical Blast Waves. Jour. Appl. Phys,. Vol. 26,
No. 6, pp 766-775.
Broo H. and Broo M. (1997): Fog av högpresterande fiberbetong i prefabricerad brobaneplatta
(Joint of High-Strength Concrete in Prefabricated Bridge Slab. In Swedish). Division of
Concrete Structures, Chalmers Univeristy of Technology, Master Thesis 97:2, Göteborg,
Sweden.
BST Byggstandardiseringen (1991): Betongprovning med Svensk Standard, BST handbok 12,
utgåva 6 (Concrete Testing according to Swedish Standard, BST Handbook 12, sixth
edition. In Swedish), SIS – standardiseringskommisionen i Sverige and Svensk Byggtjänst,
Stockholm, Sweden.

-- 150 of 242 --

133
CEB (1988): Concrete Structures under Impact and Impulsive Loading. CEB Bulletin
d’Information No 187, Lausanne, Switzerland.
CEB (1993): 	CEB-FIP 	Model 	Code 	1990, 	Design 	Code. 	Thomas 	Telford, 	Lausanne,
Switzerland.
CEN (1991): Eurocode 2: Design of concrete structures - Part 1: General rules and rules for
buildings. European Comittee for Standardization.
Chandra D. and Krauthammer T. (1996): Rate-Sensitive Michromechanical Damagae Model
for Brittle Solid. Journal of Engineering Mechanics, Vol. 122, No. 5, pp. 412-422.
Chung H.W. (1978): Shear strength of concrete joints under dynamic loads. Concrete, mar
1978, pp. 27-29.
Claeson C. (1998): Structural Behaviour of Reinforced High-Strength Concrete Columns.
Division of Concrete Structures, Chalmers Univeristy of Technology, Ph.D. Thesis,
Publication 98:1, Göteborg, Sweden.
ConWep (1992): ConWep – Collection of 	conventional weapons effects calculations based
on TM 5-855-1, Fundamentals of Protective Design for Conventional Weapons, U.S.
Army Engineer Waterways Experiment Station, Vicksburg, USA.
de Borst R. (1999): Analyses of Reinforced Concrete In a Historical Perspective. Nordic
Symposium on Modern Design of Concrete Structures, Aalborg University, Denmark,
pp. 261-299.
Dilger W.H., Kand R. and Kowalczyk R. (1984): Ductility of Plain and Confined Concrete
Under Different Strain Rates. ACI Journal, Jan-Feb, pp. 73-81.
Dragosavic M., van den Beukel A. and Gijsbers F.B.J. (1975): Loop connections between
precast concrete components loaded in bending. HERON, Vol. 20, No. 3, Delft, The
Netherlands.

-- 151 of 242 --

134
Ekengren B. (1996): Ramhörn i skyddsrum - licentiatinledning (Frame Corners in Civil
Defence Shelters – Introduction to Discussion at Licentiate Seminar. In Swedish). Swedish
Rescue Services Agency, Karlstad, Sweden.
Ekengren B. (1998): Förändrade regler för skyddsrum (Changed Regulations for Civil
Defence Shelters. In Swedish). Bygg & Teknik, 6/98, Stockholm, Sweden, pp. 29-32.
Eibl 	J. 	and 	Schmidt-Hurtienne 	B. 	(1999): 	Strain-Rate-Sensitive 	Constitutive 	Law 	for
Concrete. Journal of Engineering Mechanics, Vol. 125, No. 12, pp. 1411-1420.
Elfgren L., editor (1989): Fracture Mechanics of Concrete Structures, From Theory to
Applications. Report of the technical committee 90-FMA Fracture Mechanics to Concrete
- Application, RILEM. Chapman and Hall, London.
Elinder U. and Hallhagen B. (1967): Spjälkningsrisk vid bockad buntad armering (Risk of
spalling when using bent bundled reinforcement bars. In Swedish). The Royal Institute of
Technology, Stockholm, Sweden.
Feenstra P.H. (1993): Computational aspects of biaxial stress in plain and reinforced concrete.
Delft University, Delft University Press, Delft, The Netherlands.
FortH 2 (1987): Fortifikationshandbok del 2, Kapitel 4-6 (Fortification’s Handbook part 2,
Chapter 4-6. In Swedish). Försvarets Läromedelscentral, Stockholm, Sweden.
Franz 	G. 	and 	Timm 	G. 	(1973): 	Versuche 	zur 	Haken- 	und 	Schlaufenverbindung 	bei
biegebeanspruchten Platten (Test of Hook and Loop Connections for Slabs Subjected to
Bending. In German.) Deutscher Ausschuss für Stahlbeton, Heft 226, pp. 23-54.
Fundia (1999): Letter of information regarding reinforcement type B500BT (In Swedish).
August, Halmstad, Sweden.
Georgin J.F., Reynouard J.M. and Nerabet O. (1998): Modelling of concrete at high strain
rate. Computational Modelling of Concrete Structure, Edited by de Borst, Bicanic, Mang
and Meschke, Balkema, Rotterdam, The Netherlands, pp. 593-601.

-- 152 of 242 --

135
Grassl P. (1999): Splicing of Reinforcement Loops in Beams: Experiments and Non-linear
Finite 	Element 	Analyses. 	Division 	of 	Concrete 	Structures, 	Chalmers 	University 	of
Technology, Master Thesis 99:4, Göteborg, Sweden.
Gylltoft K. (1983): Fracture Mechanics Models for Fatigue in Concrete Structures. Division
of Structural Engineering, Luleå University of Technology, Doctoral Thesis 1983:25D,
Luleå, Sweden.
Hallgren P. and Granström S. (1977): Ras mot Skyddsrumstak - beräkningsmodell (Impact
load on shelter roof. In Swedish). Tyréns, Stockholm, Sweden.
Hallgren P. and Granström S. (1975): Takplattans motståndsförmåga mot ras - fallförsök i
Svanö fabrik (The resistance of the roof slab against impact loads – impact tests in Svanö
Factory. In Swedish). Tyréns, Stockholm, Sweden.
Han N. (1996): Time Dependent Behaviour of High Strength Concrete. Delft University of
Technology, Delft University Press, Delft, The Netherlands.
HKS (1998): ABAQUS/Explicit User’s Manual, Version 5.7. Hibbit, Karlsson and Sorensen
Inc. Pawtucket, USA.
Hillerborg A., Modéer M. and Petersson P-E. (1976): Analysis of Crack Formation and Crack
Growth in Concrete by means of Fracture Mechanics and Finite Elements. Cement and
Concrete Research, Vol. 6, No. 6, pp. 773-782.
Hillerborg A. (1988): Rotational Capacity of Reinforced Concree Beams. Nordic Concrete
Research, No. 7, Oslo, Norway, pp. 121-134.
Hofstetter G. and Mang H.A. (1995): Computational Mechanics of Reinforced Concrete
Structures. Vieweg & Sohn Verlagsgesellschaft, Braunschweig, Germany.
Hughes B.P., and Gregory R. (1972): Concrete subjected to high rates of loading in
compression. Magazine of Concrete Research, Vol. 24, No. 78, pp. 25-36.
Hughes T.J.R. (1987): The Finite Element Method, Linear Static and Dynamic Finite Element
Analyses. Prentice-Hall, Englewodd Cliffs, New Jersey, USA.

-- 153 of 242 --

136
Jackson N. (1995): Design of reinforced concrete opening corners, The Structural Engineer,
Vol. 73, No. 13, pp. 209-213.
Jirasek M. (1999): Numerical Modelling of Deformation and Failure of Materials. Short
course held at Rheinisch-Westfälische Technische Handschule, Aachen, Germany.
Johansson J.P.M. and Karlsson S. (1997): Nytt armeringsutförande i betongramhörn utsatta
för positivt moment (New Reinforcement Detailing in Concrete Frame Corners Subjected
to Positive Moment – in Swedish). Division of Concrete Structures, Chalmers University
of Technology, Master Thesis 97:5, Göteborg, Sweden.
Johansson M. (1996): New Reinforcement Detailing in Concrete Frame Corners of Civil
Defence Shelters: Non-linear Finite Element Analyses and Experiments. Division of
Concrete Structures, Chalmers University of Technology, Licentiate Thesis, Publication
96:1, Göteborg, Sweden.
Johansson M. (1997): Armeringsseghetens inverkan på deformationsförmågan hos betong-
konstruktioner (Influence of Reinforcement Ductility on the Deformation Capacity of
Concrete Structures. In Swedish). Division of Concrete Structures, Chalmers University of
Technology, Report 97:1, Göteborg, Sweden.
Johansson M. (1998): Betongens töjningshastighetsberoende and explicit lösningsmetodik
(Strain Rate Effects in Concrete and Explicit solution Methods. In Swedish). Division of
Concrete Structures, Chalmers University of Technology, Report 98:2, Göteborg, Sweden.
Johansson M. (1999a): Strain Rate Dependency in Concrete Explained by a SDOF model.
Presented in Material Test Procedures in Support of Dynamic Material Modelling, Edited
by Ågårdh L., FOA Defence Research Establishment, FOA-R-99-01227-311, Stockholm,
Sweden.
Johansson 	M. 	(1999b): 	Non-linear 	Finite 	Element 	Analyses 	of 	Civil 	Defence 	Shelter
Subjected to Explosion Load or Impact Load. Division of Concrete Structures, Chalmers
University of Technology, Report 99:8, Göteborg, Sweden.

-- 154 of 242 --

137
Kaplan S.A. (1980): Factors affecting the relationship between rate of loading and measured
compressive strength of concrete. Magazine of Concrete Research, Vol. 32, No. 111,
pp. 79-88.
Karlsson M. (1999): Armeringsutformning i ramhörn and knutar (Reinforcement Detailing in
Frame 	Corners 	and 	Joints. 	In 	Swedish). 	Teknikområde 	Anläggning, 	NCC 	Teknik,
Göteborg, Sweden.
Kinney G. F. and Graham K. J. (1985): Explosive shocks in air, Second Edition. Springer-
Verlag, New York, USA.
Kordina K. and Fuchs G. (1970): Untersuchungen zur Anwendung von hakenförmigen
Übergreifungsstößen in Rahmenecken (Examination of the use of Reinforcement Loops in
Frame 	Corners. 	In 	German). 	Institut 	für 	Baustoffkunde 	und 	Stahlbetonbau, 	Der
Technischen Universität Braunschweig, Braunschweig, Germany.
Kordina 	K. 	and 	Fuchs 	G. 	(1973): 	Untersuchungen 	an 	Übergreifungs-Vollstößen 	mit
hakenförmig-gebogenen Rippenstählen (Studies of Splicing of Hook-formed Bars. In
German). Deutscher Ausschuss für Stahlbeton, Heft 226, pp. 55-81.
Kordina K. (1984): Bewehrungsführung in Ecken und Rahmenknoten (Reinforcement Design
of Corners and Joints in Reinforced Concrete Frame Structures. In German). Deutscher
Ausschuss für Stahlbeton, Heft 354, pp 5-93.
Krauthammer T. (1998): Structural Concrete and Steel Connections for Blast Resistant
Design. Transient loading and 	response of 	structures, 	Edited 	by Langseth 	M. 	and
Krauthammer T., Trondheim, Norway, pp. 161-195.
Ku C-K. and Krauthammer T. (1999): Numerical Assessment of Reinforced Concrete Knee-
Joints 	under 	Explosively 	Apllied 	Loads. 	ACI 	Structural 	Journal, 	Vol. 	96, 	No. 	2,
pp. 239-247.
Kwak H-G. and Filippou F.C. (1990): Finite Element Analysis of Reinforced Concrete
Structures under Monotonic Loads. Department of Civil Engineering, University of
California Berkeley, Report No. UCB/SEMM-90/14, California, USA.

-- 155 of 242 --

138
Larsson L., Runesson K. and Åkesson M. (1995): Embedded Cohesive Crack Models Based
on Regularized Discontinous Displacements. Fracture Mechanics of Concrete Structures,
FRAMCOS-2, Edited by Wittmann F.H., Zurich, Switzerland, pp. 899-911.
Lee 	Y-H. 	and 	Willam 	K. 	(1997): 	Mechanical 	Properties 	of 	Concrete 	in 	Uniaxial
Compression. ACI Materials Journal, V. 94, No. 6, pp. 457-471.
Leonhardt F., Walther R. and Dieterle H. (1973): Versuche zur Ermittlung der Tragfähigkeit
von Zugschlaufstößen (In German). Deutscher Ausschuss für Stahlbeton, Heft 226,
pp. 1-53.
Limberger E., Brandes K. and Herter J. (1982): Influence of Mechanical Properties of
Reinforcing Steel on the Ductility of Reinforced Concrete Beams with Respect to High
Strain Rates. Presented in Concrete Structures under Impact and Impulsive Loading, BAM,
Berlin, Germany, pp. 134-156.
Lundgren 	K. 	(1999): 	Three-Dimensional 	Modelling 	of 	Bond 	in 	Reinforced 	Concrete:
Theoretical 	Model, 	Experiments 	and 	Applications. 	Division 	of 	Concrete 	Structures,
Chalmers University of Technology, Ph.D. Thesis, Publication 99:1, Göteborg, Sweden.
Magnusson J. (2000): Bond and Anchorage of Ribbed Bars in High-Strength Concrete.
Division of Concrete Structures, Chalmers University of Technology, Ph.D. Thesis,
Publication 00:1, Göteborg, Sweden.
Malvar L. J. (1998): Review of static and dynamic properties of steel reinforcing bars. ACI
Materials Journal, Vol. 95, No. 5, pp. 609-616.
Malvar L. J. and Ross C. A. (1998): Review of strain rate effects for concrete in tension. ACI
Materials Journal, Vol. 95, No. 6, pp. 735-739.
Malvar L. J., and Ross C. A. (1999). Discussion of Malvar and Ross (1998), ACI Materials
Journal, Vol. 99, No. 6, pp. 614-616.
Markeset G. (1993): Failure of Concrete under Compressive Strain Gradients. Department of
Structural Engineering, The Norwegian Institute of Technology, Ph.D. Thesis, Trondheim,
Norway.

-- 156 of 242 --

139
Martinez C. and Sanchez D. (2000): Nonlinear Finite Element Analysis if Continuous Deep
Beams. Division of Concrete Structures, Chalmers Univeristy of Technology, Master
Thesis 00:5, Göteborg, Sweden.
Mattiasson K., Bernspång L., Honecker A., Schedin E., Hammam T. and Melander A. (1991):
On the use of explicit time integration in finite element simulation of industrial sheet
forming 	process. 	Department 	of 	Structural 	Mechanics, 	Chalmers 	Univeristy 	of
Technology, Publication 91:2, Göteborg, Sweden.
Mayfield B., Kong, F.K., Bennison, A. and Davies, J.C.D.T. (1971): Corner Joint Details in
Structural Lightweight Concrete, ACI Journal, V. 68, No. 5, pp. 366-372.
Mayfield B., Kong F.K., and Bennison A. (1972): Strength and Stiffness of Lightweight
Concrete Corners, ACI Journal, V. 69, No. 7, pp. 420-427.
Marx E.M. (1993): Analysis of Reinforced Concrete Wall to Slab Connections Subjected to
Severe Impulse Loading. Department of Civil Engineering, The Pennsylvania State
University.
Mörnstad M. (1998): Cut-and-Cover Tunnels at the Arlanda Link. IABSE Conference, Tunnel
Structures, Stockholm, Sweden, pp. 181-186.
Mörnstad M. (2000): Personal Communication. Chief Engineer, NCC AB, Malmö, Sweden.
Nilsson I.H.E. (1976): Undersökning av ramhörn med positivt moment (Reinforced Concrete
Frame Joints Subjected to Positive Moment, Test Report 2. In Swedish). Division of
Concrete Structures, Chalmers University of Technology, Report 67:1, Göteborg, Sweden.
Nilsson I.H.E. (1973): Reinforced concrete corners and joints subjected to bending moment.
National 	Swedish 	Institute 	for 	Building 	Research, 	Document 	D7:1973, 	Stockholm,
Division of Concrete Structures, Chalmers University of Technology, Ph.D. Thesis,
Publication 73:6, Göteborg, Sweden.
Nilsson I.H.E. and Losberg, A. (1976): Reinforced Concrete Corners and Joints Subjected to
Bending 	Moment, 	ASCE 	Journal 	of 	the 	Structural 	Division, 	Vol. 	102, 	No. 6,
pp. 1229-1254.

-- 157 of 242 --

140
Nilsson L. (1979): Impact Loading on Concrete Structures, A constitutive modelling, finite
element analysis, and experimental study of nonlinear wave propagation. Department of
Structural Mechanics, Chalmers University of Technology, Ph.D. Thesis, Publication 79:1,
Göteborg, Sweden.
Noor F.A. (1977): Ultimate Strength and Cracking of Wall Corners, Concrete, Cement and
Concrete Association, London, July, pp. 31-35.
Olofsson T., Ohlsson U. and Klisinski M. (1995): A Simple Fracture Mechanics Model for
Mixed-mode 	Failure 	in 	Concrete. 	Fracture 	Mechanics 	of 	Concrete 	Structures,
FRAMCOS-2, Edited by Wittmann F.H., Zurich, Switzerland, pp 473-494.
Olsson M. (1996): Olinjär finit elementanalys av ramhörn i armerad betong (Non-linear Finite
Element 	Analysis 	of 	Concrete 	Frame 	Corners. 	In 	Swedish). 	Division 	of 	Concrete
Structures, Chalmers University of Technology, Master Thesis 96:6, Göteborg, Sweden.
Otani R.K. and Krauthammerr T. (1997): Assessment of Reinforcement Details for Blast
Containment Structures. ACI Structural Journal, Vol. 94, No. 2, pp. 124-132.
Plos M. (1994a): Ny armeringsskarv för ramhörn i skyddsrum (New Reinforcement Splice for
Frame Corners in Civil Defence Shelters. In Swedish). Division of Concrete Structures,
Chalmers University of Technology, Report 94:2, Göteborg, Sweden.
Plos M. (1994b): Splicing of Reinforcement in Frame Corners -Experimental Studies. Nordic
Concrete 	Research, 	Publ. 	no. 	14, 	The 	Nordic 	Concrete 	Federation, 	Oslo, 	Norway,
pp 103-121.
Plos M. (1995): Application of Fracture Mechanics to Concrete Bridges - Finite Element
Analyses and Experiments. Division of Concrete Structures, Chalmers University of
Technology, Ph.D. Thesis, Publication 95:3, Göteborg, Sweden.
Reinhardt H.W. (1982): Concrete under 	Impact 	Loading, Tensile Strength 	and 	Bond.
HERON, Vol. 27, No. 3, Delft, The Netherlands.
Reinhardt H.W., Körmeling H.A., Zielinski A.J. (1985): The split Hopkinson bar, a versatile
tool for the impct testing of concrete. Materials and Structures, Vol. 19, pp. 55-63.

-- 158 of 242 --

141
Reinhardt H.W., Rossi P., van Mier J.G.M. (1990): Joint investigation of concrete at high
strain rates of loading. Materials and Structures, Vol. 23, pp. 213-216.
RILEM 50-FMC (1985): Determination of the Fracture Energy of Mortar and Concrete by
Means of Three-point Bend Tests on Notched Beams. Materials and Structures, Vol. 18,
pp. 285-290.
Ross C.A., Tedesco J.W., Kuennen S.T. (1995): Effects of Strain Rate on Concrete Strength.
ACI Materials Journal, Vol. 92, No. 1, pp. 37-47.
Ross C.A., Jerome D.M., Tedesco J.W., Hughes M.L. (1996): Moisture and Strain Rate
Effects on Concrete Strength. ACI Materials Journal, Vol. 93, No. 3, pp. 293-300.
Rossi P. (1991a): A physical phenomenon which can explain the mechanical behaviour of
concrete under high strain rates. Materials and Structures, Vol. 24, pp. 422-424.
Rossi P. (1991b): Influence of cracking in the presence of free water on the mechanical
behaviour of concrete. Magazine of Concrete Research, Vol. 42, No. 154, pp. 53-57.
Rossi P., van Mier J.G.M., Boulay C., Le Maou F. (1992): The dynamic behaviour of
concrete: influence of free water. Materials and Structures, Vol. 25, pp. 509-514.
Rossi P., van Mier G.M., Toutlemonde F., Le Maou F., Boulay C. (1994): Effect of loading
rate on the strength of concrete subjected to uniaxial tension. Materials and Structures,
Vol. 27, pp. 260-264.
Rossi P. and Toutlemonde F. (1996): Effect of loading rate on the tensile behaviour of
concrete: description of the physical mechanisms. Materials and Structures, Vol. 29, Mar.,
pp. 116-118.
Rots J.G. (1988): Computational Modelling of Concrete Fracture. Department of Civil
Engineering, Delft University of Technology, pp. 132.
Rots J.G. (1989): Fracture Mechanics of Concrete Structures: From theory to applications.
RILEM Technical Committee 90-FMA, Edited by Elfgren L., Chapman and Hall, London,
England, pp. 138-145.

-- 159 of 242 --

142
Schmidt-Hurtienne B., Häußler U. and Eibl J. (1998): Strain Rate Effects in Concrete – an
Uniaxial Constitutive Law. Transient loading and response of structures, Edited by
Langseth M. and Krauthammer T., Trondheim, Norway, pp. 41-61.
Seabold R.B. (1970): Dynamic Shear Strength of Reinforced ConcreteBeams, Part III.
Technical Report No. R-695, U.S. Naval Civil Engineering Laboratory, Port Hueneme,
USA.
Serecombe J., Ulm F.-J. and Toutlemonde F. (1998): Viscous Hardening Plasticity for
Concrete in High-Rate Dynamics. Journal of Engineering Mechanics, Vol. 124, No. 9,
pp. 1050-1057.
Skettrup E., Strabo J., Andersen N.H. and Brondum-Nielsen T. (1984): Concrete Frame
Corners, ACI Journal, Vol. 81, No. 6, 1984, pp. 587-593.
Soroushian P., Choi K-B., Alhamad A. (1986): Dynamic Constitutive Behaviour of Concrete.
ACI Journal, Mar.-Apr., pp. 251-259.
Stroband J. and Kolpa J.J. (1981): The Behaviour of Reinforced Concrete Column-to-Beam
joints, Part 2: Corners Subjected to Positive Moments, Stevin Laboratory, Delft University
of Technology, Report 5-81-5, Delft, The Netherlands
Stroband J. and Kolpa J.J. (1983): The behaviour of reinforced concrete column-to-beam
joints, Part 1, Corners subjected to negative moments. Stevin Laboratory, Delft University
of Technology, Report 5-83-9, Delft, The Netherlands.
Suaris W. and Shah S.P. (1985): Constitutive Model for Dynamic Loading of Concrete.
Journal of Structural Engineering. Vol. 111, No. 3, pp. 563-576.
Sundquist H. (1977): Betongplatta på pelare vid dynamisk engångslast, Del 3 (Concrete Slab
on Column Subjected to Impact Load, Part 3. In Swedish). Department of Building Statics
and Structural Engineering, Royale Institute of Technology, Message No. 126, Stockholm,
Sweden.

-- 160 of 242 --

143
Sundquist H. (1978): Betongplatta på pelare vid dynamisk engångslast, Del 2 (Concrete Slab
on Column Subjected to Impact Load, Part 2. In Swedish). Department of Building Statics
and Structural Engineering, Royale Institute of Technology, Message No. 125, Stockholm,
Sweden.
Sundquist H. (1979): Concrete Slabs Supported on Slender Columns under Short Duration
Loads, Summary. Department of Building Statics and Structural Engineering, Royale
Institute of Technology, Ph.D. Thesis, Message No. 134, Stockholm, Sweden.
Swann R. A., (1969): Flexural Strength of Corners of Reinforced Concrete Portal Frames.
Technical Report TRA 434, Cement and Concrete Association, London.
Swedish Rescue Services Agency (1990): Skyddsrumsregler SR – Första utgåvan (Shelter
Regulations – First Edition. In Swedish). Swedish Rescue Services Agency, Publication
B54-141/92, Karlstad, Sweden.
Swedish Rescue Services Agency (1994): Shelter Regulations, SR - English edition. Swedish
Rescue Services Agency, Publication B54-168/94, Karlstad, Sweden.
Swedish 	Rescue 	Services 	Agency 	(1998): 	Skyddsrumsregler 	SR 	– 	Produktion 	and
vidmakthållande 	(Shelter 	Regulations 	– 	Production 	and 	Maintenance. 	In 	Swedish).
Swedish Rescue Services Agency, Publication B54-141/98, Karlstad, Sweden.
Taerwe L. (1993): Empirical Analysis of the Fracture Process in High Strength Concrete
Loaded in Uniaxial Compression. Fracture and Damage of Concrete and Rock – FDCR-2,
Vienna, Austria, Edited by Rassmanith H.P., E & FN Spon, pp. 122-134.
Timm G. (1969): Untersuchungen zur Verbindung von Stahlbetonplatten mit hakenförmig
gebogenen Stäben (Examination of Connections of Reinforced Concrete Slabs using Hook-
formed Bars. In German.) Department of Civil Engineering, University of Karlsruhe, Ph.D.
Thesis, Karlsruhe, Germany.
Ulfkjaer J.P., Pilegaard Hansen L., Qvist S., Madsen S.H. (1996): Fracture Energy of Plain
Concrete Beams at Different Rates of Loading. Fracture & Dynamics Paper No. 74,
Department of Building Technology and Structural Engineering, Aalborg University,
Aalborg, Denmark.

-- 161 of 242 --

144
van Mier J.G.M. (1984): Strain Softening of Concrete Under Multiaxial Loading Conditions.
Eindhoven University of Technology, Ph.D. Thesis, Eindhoven, The Netherlands.
van Mier J.G.M., Shah S.P., Arnaud M., Balayssac J.P., Bascoul A., Choi S., Dasenbrock D.,
Ferrara G., French C., Gobbi M.E., Karihaloo B.L., König G., Kotsovos M.D., Labuz J.,
Lange-Kornbak 	D., 	Markeset 	G., 	Pavlovic 	M.N., 	Simsch 	G., 	Thienel 	K-C. 	and
Turatsinze A., (1997): Strain-softening of concrete in uniaxial compression. Materials and
Structures, Vol. 30, May, pp. 195-209.
Vos E. and Reinhardt H-W. (1980): Bond resistance of deformed bars, plain bars and strands
under impact loading. Department of Civil Engineering, Delft University of Technology,
Report 5-80-6, Delft, The Netherlands
Vägverket (1994): BRO 94 - Allmän teknisk beskrivning för broar (Bridge 94 – General
Technical Description for Bridges. In Swedish). Swedish Road Administration, Borlänge,
Sweden.
Weerheijm J. (1992): Concrete under impact tensile loading and lateral compression. TNO-
Prins Maurits Laboratory, Ph.D. Thesis, Rijswijk, The Netherlands.
Wästlund G. (1935): Om armering av vinkelformade betongkonstruktioner (Reinforcement of
Angle-shaped Concrete Structures. In Swedish). Betong, No. 1, Stockholm, Sweden,
pp. 22-35.
Yan C. and Mindess S. (1998): Effect of Loading Rate on Bond Behaviour Under Dynamic
Loading. Concrete and Blast Effects, ACI International SP-175, Edited by Bounds W.,
Michigan, USA, pp. 179-197.
Zielinski A.J., Reinhardt H.W., Körmeling H.A. (1981): Experiments on concrete under
uniaxial impact tensile loading. Materials and Structures, Vol. 14, No. 80, pp. 103-112.
Zielinski A.J. (1982): Fracture of Concrete and Mortar under Uniaxial Impact Tensile
Loading. Delft University of Technology, Ph.D. Thesis, Delft, The Netherlands.

-- 162 of 242 --

145
Ågårdh L. and Laine L. (1997): Experiments and FE-Modelling of Fibre Reinforced Concrete
Beams Expose to Impact. Reprint from 2nd Asian Pacific Conference of Shock and Impact
Loads on Structures, Melbourne, Australia.
Åkesson M. (1996): Implementation and Application of Fracture Mechanics Models for
Concrete Structures. Division of Concrete Structures, Chalmers University of Technology,
Ph.D. Thesis, Publication 96:2, Göteborg, Sweden.
Östlund L. (1963): Inverkan av bockningsradier and täckande betongskikt hos kamstål på
spjälkningsrisken för armerade betongkonstruktioner (The Influence of Bending Radius
and Concrete Cover for Deformed Bars on the Risk of Splitting Failure in Reinforced
Concrete Structures. In Swedish). The Royal Institute of Technology, Stockholm, Sweden.

-- 163 of 242 --

A1
Appendix A 	Summary of Frame Corner Tests
This Appendix summarises the test results of frame corners subjected to opening or closing
moment that are presented in Chapter 2. In the original work, the cube strength was often used
when referring to the compressive strength of the concrete. However, both the Swedish
concrete handbook Code BBK 94, Boverket (1994), and Eurocode 2, CEN (1991), make use
of the concrete cylinder strength in the design. Therefore, recalculations to such values were
made where necessary. It is well known that the compressive strength depends on both the
curing condition and the geometry of the specimen tested; see Betonghandboken Material
(1994). But, there was often no clear information on what curing conditions had been used,
and when such information was available, the method used often differed considerably from
that prescribed in standards of today. Hence, it would not be an easy task to consistently
recalculate the concrete used in the different tests. As a simplification, the cube strength f c,cube
was therefore related to the cylinder strength f c as
f c,cube = 1.35f c 	(A.1)
which is the relation given in BST Byggstandardiseringen (1991) for dry cured concrete cubes
(side 150 mm) and water cured concrete cylinders (φ150 x 300 mm). Further, no account was
taken of the influence of different cube or cylinder sizes used. The approximation in
equation (A.1) might lead to a slight underestimation of the concrete cylinder strength and the
results obtained were therefore compared to the case if f c,cube = 1.25f c had been used instead. It
was then found that the difference was quite negligible (see Figure A1) and it was concluded
that the approximation made was appropriate. Due to this recalculation of the compressive
strength, and the fact that all tests presented here were originally not evaluated in the same
way, the theoretical strength Muc of each frame corner was redetermined. Hence, the
efficiencies presented herein may also differ somewhat from those reported by the original
authors.
Several different reinforcement detailings were tested. Many of them, though, show such large
resemblances to each other that the structural responses obtained were more or less the same.
Accordingly, it was possible to divide them into three major types: Type 1, Type 3 and Type 4;
see Figure A.1. Of these types, the addition of radial bars in the Type 1 detailing was
considered so important that it was denoted detailing Type 2. The combination of radial
stirrups and reinforcement loops (i.e. detailings Type 3 and Type 4) did not have a very
pronounced effect and they were therefore only regarded as variants of the original detailings.

-- 164 of 242 --

A2
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
f c,cube = 1.35fc
Type 3
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
f c,cube = 1.25fc
Type 3
Figure A.1 	Comparison of efficiency versus mechanical reinforcement ratio obtained when
different 	relations 	between 	the 	compressive 	cube 	strength 	f c,cube 	and 	the
compressive cylinder strength f c are used.
a 	b 	c 	d 	e 	f
Type 1
Type 2
Type 3
Type 4
Figure A.2 	Reinforcement detailings tested. The denotations a to e shown here are also used
in Tables A.1 to A.8 to clarify which detailing was used in the individual tests.
The test set-ups used by different researchers are shown in Figures A.3 and A.4 for tests on
opening and closing corners, respectively. The tests by Mayfield et al. (1971,1972) were
carried out using a lightweight concrete with a density of 1762 kg/m3 . Nevertheless, the
relation between compressive and tensile concrete was assumed to be the same as that for

-- 165 of 242 --

A3
ordinary concrete, i.e. according to equation (2.15). All frame corners tested, except those by
Nilsson, had the same dimensions for the adjoining members. Unless stated otherwise, the
effective height of the larger member in his test series was d + 50 mm.
(a) Nilsson (1973)
Stroband and Kolpa (1981)
(b) Swann (1969)
Mayfield et al. (1971, 1972)
Balint and Taylor (1972)
Noor (1977)
(c) Jackson (1995)
(d) Kordina and Fuchs (1970)
Author (Paper I)
(e) Sketrup et al. (1984)
Abdul-Wahab and Al-Roubai (1998)
Abdul-Wahab and Salman (1999)
(e)	(d)
(a) 	(b) 	(c)
Figure A.3 Schematic views of the test set-ups used by different researchers in tests on
opening moment.
(a) Stroband and Kolpa (1983)
(b) Swann (1969)
Mayfield et al. (1971)
Balint and Taylor (1972)
(c) Lundgren (1999)
(d) Plos (1995)
Author (Paper I)
(a) 	(b) 	(c) 	(d)
Figure A.4 Schematic views of the test set-ups used by different researchers in tests on
closing moment.
Figures A.5 to A.7 summarises the efficiencies obtained by different researchers when the
reinforcement detailing was varied. Figure A.8 shows what influence the ratio between the
resisting force FR and the tensile force R (see Sections 2.2.1 and 2.3.3.2) has on the Type 2
detailing. Tables A.1 to A.8 summarises dimensions and results of the tests on opening and
closing frame corners presented herein. In these Tables, the full reference is not given. Instead,
only the first name in each reference is given. In the case of Mayfield et al. and Abduhl-
Wahab and co-workers, the year of publication is also given to distinguish between the
references. In all tests, except those reported by Mayfield et al., Lundgren, Plos and the
Author, were the compressive strength originally determined on concrete cubes. Therefore, the
compressive strength f c, given below, for these references was recalculated according to
equation (A.1).

-- 166 of 242 --

A4
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
Nilsson
Noor
Stroband
Mayfiled
Balint
Swann
Type 1
0
20
40
60
80
100
120
140 Nilsson
Mayfield
Balint
Swann
Stroband
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 2
(a) 	(b)
Figure A.5 Efficiencies of opening frame corners reinforced with (a) detailing Type 1 and (b)
detailing Type 2.
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Nilsson 	Stroband
Noor 	Jackson
Abdul-W. 	Koordina
Balint 	Mayfield
Swann 	Author
Efficiency [%]
Type 3
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 4
Nilsson 	Stroband
Noor 	Skettrup
Abdul-W. Koordina
Swann 	Author
(a) 	(b)
Figure A.6 Efficiencies of opening frame corners reinforced with (a) detailing Type 3 and (b)
detailing Type 4. The conventional evaluation method (see Section 2.1.3) has been
used when determining the efficiencies for detailing Type 4.

-- 167 of 242 --

A5
0
20
40
60
80
100
120
140
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
Swann
Mayfield
Stroband
Plos
Balint
Lundgren
Type 1
0
20
40
60
80
100
120
140
Swann
Mayfield
Stroband
Plos
Author
0.000 0.100 0.200 0.300 0.400 0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 3
(a) 	(b)
Figure A.7 Efficiencies of closing frame corners reinforced with (a) detailing Type 1 and (b)
detailing Type 3.
0
20
40
60
80
100
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Type 1
FR / R > 100%
20% ≤ FR / R < 80%
40% ≤ FR / R < 60%
20% ≤ FR / R < 40%
FR / R < 20%
Type 2
Figure A.8 Influence of radial stirrups within the corner for varying value on the ratio FR / R.

-- 168 of 242 --

A6
Table A.1 	Summary of test results for opening frame corner reinforced with
detailing Type 1.
Type 	Author 	Specimen 	A s 	b 	d 	fsy 	fc	
ρ 	ωs 	Mut 	Mue 	Mue / Muc Mut / Muc
[mm] 	[mm] [MPa] [MPa] 	[%] 	[kNm] [kNm] 	[%] 	[%]
1a 	Balint 	NS014/3 	2φ12 	152 	124 	433 	16.3 	1.20 	0.319 	2.5 	1.2 	11 	24
1a 	Mayfield 	1-1 	2φ12 	150 	158 	449 	20.6 	0.96 	0.209 	2.7 	2.4 	17 	19
1a 	71 	1-2 	2φ12 	150 	158 	449 	20.6 	0.96 	0.209 	2.7 	2.4 	17 	19
1c 	3-1 	2φ12 	150 	158 	449 	23.5 	0.96 	0.183 	2.3 	2.8 	19 	16
1c 	4A-1 	2φ12 	150 	158 	449 	21.6 	0.96 	0.199 	4.2 	2.6 	18 	29
1c 	4B 	2φ12 	150 	158 	449 	16.7 	0.96 	0.258 	4.5 	1.9 	14 	32
1c 	4C 	2φ12 	150 	158 	449 	16.7 	0.96 	0.258 	4.7 	1.9 	14 	34
1e 	Mayfield 	1-1 	2φ10 	150 	158 	375 	20.1 	0.66 	0.124 	3.7 	2.4 	26 	40
1e 	72 	1-2 	2φ10 	150 	158 	375 	20.1 	0.66 	0.124 	3.4 	2.4 	26 	37
1e 	2-1 	2φ10 	150 	158 	375 	19.1 	0.66 	0.130 	3.9 	2.3 	25 	43
1e 	2-2 	2φ10 	150 	158 	375 	19.1 	0.66 	0.130 	4.2 	2.3 	25 	47
1e 	3 	2φ10 	150 	158 	375 	24.5 	0.66 	0.102 	3.8 	3.0 	31 	40
1a 	9 	2φ10 	150 	158 	375 	17.2 	0.66 	0.145 	4.5 	2.0 	23 	50
1c 	19-1 	2φ10 	150 	158 	375 	19.1 	0.66 	0.130 	3.6 	2.3 	25 	40
1c 	19-2 	2φ10 	150 	158 	375 	19.1 	0.66 	0.130 	4.4 	2.3 	25 	49
1b 	Nilsson 	U1 	5φ16 	500 	270 1 	419 	32.9 	0.74 	0.095 	54.9 	49.7 	46 	51
1b 	U2 	5φ16 	500 	270 1 	410 	27.0 	0.74 	0.113 	32.8 	31.9 	30 	31
1b 	U3 	3φ25 	500 	263 2 	398 	31.9 	1.12 	0.140 	45.7 	45.3 	32 	32
1b 	U20 	4φ10 	350 	175 	432 	20.0 	0.51 	0.111 	10.1 	8.7 	39 	45
1b 	U21 	4φ12 	350 	169 	417 	24.6 	0.76 	0.130 	9.7 	10.0 	34 	33
1b 	U22 	6φ12 	350 	169 	426 	25.9 	1.15 	0.189 	11.9 	10.3 	23 	27
1a 	Noor 	A1 	8φ10 	800 	130 	433 	43.0 	0.60 	0.061 	18.8 	18.0 	50 	53
1a 	A1R 	8φ10 	800 	135 	433 	46.7 	0.58 	0.054 	18.4 	20.8 	57 	51
1a 	A2 	8φ12 	800 	137 	455 	37.8 	0.83 	0.099 	23.9 	17.8 	33 	45
1a 	A3 	8φ8 	800 	133 	448 	47.4 	0.38 	0.036 	18.6 	20.7 	82 	74
1a 	A4 	11φ10 	800 	133 	433 	34.1 	0.81 	0.103 	16.8 	15.3 	32 	36
1a 	Stroband 	B13 	2φ6 	70 	109 	504 	10.1 	0.74 	0.371 	0.7 	0.2 	6 	26
1d 	Swann 	1 	2φ19 	152 	123 	295 	17.6 	3.02 	0.508 	1.2 	1.2 	8 	8
1c 	2 	2φ19 	152 	123 	295 	22.2 	3.02 	0.403 	1.7 	1.6 	9 	10
1a 	3 	2φ19 	152 	123 	295 	24.2 	3.02 	0.368 	2.8 	1.7 	10 	16
1Unequal effective height in the members adjoining the corner, add 100 mm to larger member.
2Unequal effective height in the members adjoining the corner, add 200 mm to larger member.

-- 169 of 242 --

A7
Table A.2 	Summary of test results for opening frame corner reinforced with
detailing Type 2.
Type 	Author 	Specimen 	A s 	A s,r 	b 	d 	fsy 	fc	
ρ 	ωs 	F R / R 	Mut 	Mue 	Mue / Muc Mut / Muc
[mm] 	[mm] [MPa] [MPa] 	[%] 	[%] 	[kNm] [kNm] 	[%] 	[%]
2c 	Balint 	NS005 	2φ8 	3φ6 	152 	124 	433 	42.6 	0.53 	0.054 	60 	5.4 	3.2 	53 	90
2c 	NS014/5 	2φ12 	6φ6 	152 	124 	433 	38.5 	1.20 	0.135 	53 	10.8 	5.7 	49 	93
2c 	Mayfield 	5A-1 	2φ12 	2φ12 	150 	158 	449 	24.0 	0.96 	0.179 	71 	7.6 	11.2 	76 	51
2c 	71 	5A-2 	2φ12 	2φ12 	150 	158 	449 	24.0 	0.96 	0.179 	71 	7.0 	11.2 	76 	47
2c 	5B-1 	2φ12 	2φ6 	150 	158 	449 	19.6 	0.96 	0.219 	18 	5.8 	2.5 	18 	41
2c 	5B-2 	2φ12 	2φ6 	150 	158 	449 	19.6 	0.96 	0.219 	18 	6.6 	2.5 	18 	46
2c 	5C-1 	2φ12 	2φ12 	150 	158 	449 	19.1 	0.96 	0.225 	71 	6.8 	10.7 	75 	48
2c 	5D-1 	2φ12 	2φ6 	150 	158 	449 	17.2 	0.96 	0.251 	18 	5.9 	2.5 	18 	42
2c 	5E-1 	2φ16 	2φ6 	150 	158 	449 	24.0 	1.70 	0.318 	10 	6.2 	2.8 	12 	26
2c 	5F-1 	2φ8 	2φ6 	150 	158 	449 	22.1 	0.43 	0.087 	40 	4.4 	2.8 	37 	58
2c 	6A-1 	2φ12 	4φ6 	150 	158 	449 	20.1 	0.96 	0.214 	35 	6.4 	5.1 	35 	45
2c 	6A-2 	2φ12 	4φ6 	150 	158 	449 	20.1 	0.96 	0.214 	35 	6.9 	5.1 	35 	48
2c 	6B-1 	2φ12 	4φ8 	150 	158 	449 	20.6 	0.96 	0.209 	63 	8.6 	9.9 	69 	60
2c 	6B-2 	2φ12 	4φ8 	150 	158 	449 	20.6 	0.96 	0.209 	63 	7.6 	9.9 	69 	53
2c 	6C-1 	2φ12 	4φ12 	150 	158 	449 	19.6 	0.96 	0.219 	141 	8.6 	18.4 	100 	60
2c 	6C-2 	2φ12 	4φ12 	150 	158 	449 	19.6 	0.96 	0.219 	141 	10.7 	18.4 	100 	75
2c 	7-1 	2φ12 	6φ6 	150 	158 	449 	18.1 	0.96 	0.237 	53 	8.2 	8.4 	60 	58
2c 	7-2 	2φ12 	6φ6 	150 	158 	449 	18.1 	0.96 	0.237 	53 	8.5 	8.4 	60 	60
2c 	8-1 	2φ12 	8φ6 	150 	158 	449 	20.6 	0.96 	0.209 	71 	7.2 	10.8 	75 	50
2c 	8-2 	2φ12 	8φ6 	150 	158 	449 	20.6 	0.96 	0.209 	71 	6.9 	10.8 	75 	48
2a 	Mayfield 	10 	2φ10 	2φ6 	150 	158 	375 	17.2 	0.66 	0.145 	25 	5.4 	2.2 	24 	61
2a 	72 	11 	2φ10 	4φ6 	150 	158 	375 	17.2 	0.66 	0.145 	51 	7.1 	4.3 	49 	79
2a 	12 	2φ10 	6φ6 	150 	158 	375 	18.1 	0.66 	0.137 	76 	7.9 	7.3 	81 	89
2c 	20-1 	2φ10 	2φ6 	150 	158 	375 	19.1 	0.66 	0.130 	25 	5.0 	2.3 	26 	55
2c 	20-2 	2φ10 	2φ6 	150 	158 	375 	19.1 	0.66 	0.130 	25 	5.2 	2.3 	26 	57
2c 	21A-1 	2φ10 	4φ6 	150 	158 	375 	17.7 	0.66 	0.141 	51 	5.3 	4.3 	48 	60
2c 	21A-2 	2φ10 	4φ6 	150 	158 	375 	17.7 	0.66 	0.141 	51 	5.3 	4.3 	48 	59
2c 	21B 	2φ10 	4φ6 	150 	158 	375 	13.2 	0.66 	0.188 	51 	6.5 	5.0 	59 	76
2c 	22A-1 	2φ10 	6φ6 	150 	158 	375 	18.6 	0.66 	0.134 	76 	5.5 	7.3 	81 	60
2c 	22A-2 	2φ10 	6φ6 	150 	158 	375 	18.6 	0.66 	0.134 	76 	5.5 	7.3 	81 	60
2c 	22B 	2φ10 	6φ6 	150 	158 	375 	13.2 	0.66 	0.188 	76 	5.5 	6.8 	80 	66
2b 	Nilsson 	U27 	4φ12 	8φ10 	350 	169 	405 	20.1 	0.76 	0.154 	107 	18.1 	29.5 	100 	64
2a 	U28 	4φ12 	24φ6 	350 	169 	439 	19.8 	0.76 	0.170 	99 	24.9 	30.3 	99 	81
2a 	Stroband 	B14 	2φ6 	10φ2.8 	70 	109 	504 	9.6 	0.74 	0.391 	77 	1.9 	2.2 	77 	68
2c 	Swann 	9 	2φ19 4φ12.7 	152 	123 	295 	20.0 	3.02 	0.446 	63 	13.3 	11.2 	66 	78
2c 	9' 	2φ19 4φ12.7 	152 	123 	295 	17.3 	3.02 	0.514 	63 	8.7 	11.1 	65 	51
2c 	10 	2φ19 	4φ19 	152 	123 	295 	20.2 	3.02 	0.442 	141 	15.1 	23.3 	100 	88
2c 	10' 	2φ19 	4φ19 	152 	123 	295 	20.5 	3.02 	0.435 	141 	13.7 	23.3 	100 	80

-- 170 of 242 --

A8
Table A.3 	Summary of test results for opening frame corner reinforced with
detailing Type 3.
Type 	Author 	Specimen 	A s 	b 	d 	fsy 	fc	
ρ 	ωs 	Mut 	Mue 	Mue / Muc Mut / Muc
[mm] 	[mm] [MPa] [MPa] 	[%] 	[kNm] [kNm] 	[%] 	[%]
3a 	Abdul-98 	E2 	3φ10 	300 	115 	491 	23.2 	0.68 	0.145 	5.8 	3.0 	24 	47
3a 	E7 1 3φ10 	300 	115 	491 	37.6 	0.68 	0.089 	12.3 	4.7 	37 	97
3a 	Abdul-99 	A3 	3φ10 	300 	115 	467 	22.8 	0.68 	0.140 	7.5 	2.9 	25 	63
3a 	Balint 	NS014/4 	2φ12 	152 	124 	450 	31.1 	1.20 	0.174 	6.7 	2.3 	20 	58
3c 	Kordina 	E1 	6φ12 	700 	124 	475 	25.0 	0.78 	0.149 	28.38 	8.71 	25 	80
3c 	E2 	6φ12 	700 	124 	475 	24.9 	0.78 	0.149 	28.4 	8.7 	24 	80
3b 	E3 	6φ12 	700 	124 	475 	21.3 	0.78 	0.174 	30.2 	7.4 	21 	86
3b 	E4 	6φ12 	700 	124 	475 	20.4 	0.78 	0.182 	31.4 	7.0 	20 	90
3a 	Jackson 	A16-4 	4φ16 	400 	167 	542 	31.9 	1.20 	0.205 	30.9 	11.2 	17 	47
3a 	A10-10 	10φ10 	400 	170 	440 	33.3 	1.15 	0.152 	55.1 	12.1 	22 	102
3a 	A10-6 	6φ10 	400 	170 	440 	23.7 	0.69 	0.128 	30.2 	9.0 	27 	91
3a 	A12-6 	6φ12 	400 	169 	544 	29.6 	1.00 	0.184 	40.1 	10.8 	19 	71
3a 	A12-4 	4φ12 	400 	169 	499 	34.1 	0.67 	0.098 	23.3 	12.4 	34 	63
3a 	Mayfield 	2-1 	2φ12 	150 	158 	449 	19.4 	0.96 	0.222 	6.3 	2.3 	16 	44
3a 	71 	2-2 	2φ12 	150 	158 	449 	19.4 	0.96 	0.222 	6.8 	2.3 	16 	48
3a 	Mayf. 72 	14 	2φ10 	150 	158 	375 	16.3 	0.66 	0.153 	6.7 	1.9 	21 	76
3a 	Nilsson 	U23 	4φ10 	350 	175 	456 	22.2 	0.51 	0.106 	22.9 	9.7 	41 	96
3a 	U24 	4φ12 	350 	169 	432 	28.9 	0.76 	0.114 	27.5 	11.7 	37 	88
3a 	U25 	6φ12 	350 	169 	414 	23.3 	1.15 	0.204 	36.4 	9.3 	22 	85
3a 	U57 	3φ10 	350 	175 	588 	26.4 	0.38 	0.086 	20.9 	11.7 	50 	90
3a 	U59 	4φ12 	350 	169 	697 	19.6 	0.76 	0.272 	33.9 	7.8 	17 	74
3b 	U11 	4φ10 	350 	175 	441 	21.7 	0.51 	0.104 	20.1 	9.5 	41 	87
3b 	U12 	4φ12 	350 	169 	418 	25.8 	0.76 	0.124 	24.3 	10.5 	35 	81
3b 	U13 	6φ12 	350 	169 	408 	24.7 	1.15 	0.189 	34.0 	9.8 	23 	80
3d 	Noor 	B1 	8φ10 	800 	133 	433 	39.3 	0.59 	0.065 	31.4 	17.5 	49 	88
3d 	B2 	8φ12 	800 	136 	455 	51.9 	0.83 	0.073 	39.0 	22.1 	41 	72
3d 	B3 	8φ8 	800 	131 	448 	32.6 	0.38 	0.053 	27.9 	14.9 	63 	117
3d 	B4R 	11φ10 	800 	133 	433 	40.8 	0.81 	0.086 	40.0 	17.8 	37 	84
3d 	B5 	6φ10 	800 	129 	433 	30.4 	0.46 	0.065 	23.3 	13.7 	53 	90
3d 	B6 	19φ10 	800 	132 	416 	30.4 	1.41 	0.193 	58.1 	13.5 	18 	78
3d 	B7R 	11φ10 	800 	132 	416 	27.4 	0.82 	0.124 	40.7 	12.5 	28 	91
3a 	Stroband 	B4 	2φ6 	70 	109 	504 	20.2 	0.74 	0.185 	2.6 	0.5 	19 	89
3a 	B5 	2φ6 	70 	109 	504 	20.2 	0.74 	0.185 	2.7 	0.5 	19 	93
3a 	B10 	2φ6 	70 	109 	504 	20.2 	0.74 	0.185 	2.4 	0.5 	19 	83
3a 	B18 	2φ6 	70 	109 	504 	13.0 	0.74 	0.286 	1.9 	0.3 	11 	68
3a 	B19 	2φ6 	70 	109 	504 	12.9 	0.74 	0.290 	1.7 	0.3 	10 	61
3a 	B24 	2φ6 	70 	109 	504 	11.0 	0.74 	0.338 	1.7 	0.2 	8 	61
3a 	Swann 	4 	2φ19 	152 	123 	295 	20.2 	3.02 	0.442 	5.6 	1.4 	8 	33
3b 	6 	2φ19 	152 	123 	295 	23.6 	3.02 	0.378 	9.2 	1.6 	10 	55
3b 	6' 	2φ19 	152 	123 	295 	18.5 	3.02 	0.481 	8.4 	1.3 	8 	54
3a 	Author 	RV10 	5φ16 	600 	268 	570 	33.0 	0.63 	0.108 	106.6 	45.8 	34 	79
3a 	RV11 	7φ16 	600 	268 	570 	33.0 	0.88 	0.151 	140.9 	45.2 	24 	75
1Fibre reinforced concrete used, and therefore not included in the presentations and comparisons given in
Chapter 2.

-- 171 of 242 --

A9
Table A.4 	Summary of test results for opening frame corner reinforced with
detailing Type 4.
Type 	Author 	Specimen 	A s 	A s,i 	b 	d 	fsy 	fc	
ρ 	ωs	
ρ*	
ωs* 	Mut 	Mut / Muc Mut / Muc*
[mm] 	[mm] [MPa] [MPa] 	[%] 	[%] 	[kNm] 	[%] 	[%]
4a 	Abdul-W 	A1 	3φ10 	3φ10 	300 	115 	491 	29.8 	0.68 	0.113 	1.17 	0.192 	12.4 	99 	61
4a 	98 	A2 1 3φ10 	3φ10 	300 	115 	491 	27.3 	0.68 	0.123 	1.17 	0.210 	12.8 	102 	63
4a 	A3 1 3φ10 	3φ10 	300 	115 	491 	31.9 	0.68 	0.105 	1.17 	0.180 	13.7 	109 	66
4a 	A4 1 3φ10 	3φ10 	300 	115 	491 	29.7 	0.68 	0.113 	1.17 	0.193 	16.9 	135 	82
4a 	Abdul-99 	B3 	3φ10 	3φ10 	300 	115 	467 	22.9 	0.68 	0.139 	1.17 	0.238 	11.6 	98 	61
4e 	Kordina 	E5 	6φ12 	6φ10 	700 	124 	466 	18.5 	0.78 	0.197 	1.17 	0.293 	31.9 	93 	63
4e 	E6 	6φ12 	6φ10 	700 	124 	466 	20.0 	0.78 	0.182 	1.17 	0.272 	30.9 	89 	61
4a 	Nilsson 	UV5 	4φ12 	4φ12 	350 	169 	422 	24.4 	0.76 	0.133 	1.31 	0.226 	35.6 	118 	73
4a 	UV6 	4φ12 	4φ10 	350 	169 	413 	21.2 	0.76 	0.149 	1.14 	0.222 	34.4 	118 	82
4a 	UV7 	4φ12 	4φ8 	350 	169 	413 	24.6 	0.76 	0.128 	1.01 	0.169 	37.0 	125 	97
4a 	U50 	4φ10 	4φ8 	350 	175 	662 	24.4 	0.51 	0.139 	0.75 	0.202 	40.2 	119 	85
4a 	U50c 	4φ10 	4φ8 	350 	175 	658 	21.8 	0.51 	0.155 	0.75 	0.225 	33.0 	99 	71
4a 	U50d 	4φ10 	4φ8 	350 	175 	679 	27.9 	0.51 	0.125 	0.75 	0.181 	36.3 	104 	74
4a 	U51 	4φ12 	4φ10 	350 	169 	657 	25.6 	0.76 	0.196 	1.14 	0.293 	46.6 	103 	73
4a 	U52 	3φ10 	3φ8 	350 	175 	605 	27.0 	0.38 	0.086 	0.56 	0.125 	28.3 	118 	83
4e 	U53 	3φ10 	3φ8 	350 	175 	646 	21.7 	0.38 	0.115 	0.56 	0.167 	28.2 	112 	79
4c 	U54 	3φ10 	3φ8 	350 	175 	652 	22.9 	0.38 	0.110 	0.56 	0.159 	31.1 	123 	87
4a 	U56 2 3φ10 	3φ8 	350 	175 	598 	20.4 	0.38 	0.113 	0.56 	0.164 	27.9 	120 	85
4a 	U61 	4φ10 	3φ8 	350 	175 	625 	20.1 	0.51 	0.160 	0.69 	0.214 	37.2 	118 	91
4d 	Noor 	BD1 	11φ8 	5φ8 	800 	132 	498 	28.2 	0.52 	0.093 	0.69 	0.122 	32.4 	93 	71
4d 	BD2 	19φ10 	9φ10 	800 	132 	416 	32.6 	1.41 	0.180 	1.89 	0.241 	73.5 	98 	74
4a 	Skettrup 	7701 	2φ25 	1φ25 	229 	413 	597 	18.1 	1.04 	0.342 	1.41 	0.463 	106.0 	50 	37
4a 	7702 	2φ20 	1φ20 	224 	426 	573 	13.9 	0.66 	0.271 	0.89 	0.367 	99.0 	71 	53
4a 	7703 	2
α 	1
α 	227 	730 	575 	21.9 	0.97 	0.255 	1.31 	0.345 	471.0 	76 	57
4a 	7704 	2φ25 	1φ25 	226 	745 	564 	17.7 	0.58 	0.186 	0.79 	0.251 	369.0 	95 	71
4a 	8001 	2φ16 	1φ16 	162 	231 	562 	19.3 	1.07 	0.313 	1.45 	0.424 	25.2 	54 	40
4a 	Stroband 	B9 	2φ6 	2φ6 	70 	109 	504 	20.9 	0.74 	0.179 	1.27 	0.305 	2.8 	96 	57
4a 	B23 	2φ6 	2φ6 	70 	109 	504 	11.4 	0.74 	0.327 	1.27 	0.559 	2.6 	90 	54
4a 	Swann 	5 	2φ19 	2φ19 	152 	123 	295 	20.4 	3.02 	0.438 	5.16 	0.747 	6.0 	35 	21
4b 	7 	2φ19 	2φ19 	152 	123 	295 	20.5 	3.02 	0.436 	5.16 	0.744 	9.8 	61 	44
4a 	Author 	RV9 	5φ16 	3φ16 	600 	268 	570 	33.0 	0.63 	0.108 	0.89 	0.154 	133.5 	98 	70
1
Fibre reinforced concrete used, and therefore not included in the presentations and comparisons given in Chapter 2.
2
Unequal effective height in the members adjoining the corner, add 200 mm to larger member.
3
α = φ20 + φ25.

-- 172 of 242 --

A10
Table A.5 	Summary of test results for opening frame corner reinforced with
detailing Type 3 with stirrups.
Type 	Author 	Specimen 	A s 	A s,r 	b 	d 	fsy 	fc	
ρ 	ωs 	F R / R 	Mut 	Mue 	Mue / Muc Mut / Muc
[mm] 	[mm] [MPa] [MPa] 	[%] 	[%] 	[kNm] [kNm] 	[%] 	[%]
3a 	Mayfield 	15 	2φ10 	2φ6 	150 	158 	375 	16.3 	0.66 	0.153 	25 	7.5 	2.2 	25 	86
3a 	72 	16 	2φ10 	4φ6 	150 	158 	375 	16.3 	0.66 	0.153 	51 	7.1 	4.3 	49 	81
3a 	17 	2φ10 	6φ6 	150 	158 	375 	15.3 	0.66 	0.163 	76 	6.6 	7.0 	81 	77
3a 	Stroband 	B6 	2φ6 	10φ2.8 	70 	109 	504 	20.2 	0.74 	0.185 	77 	2.8 	2.2 	78 	99
3a 	B20 	2φ6 	10φ2.8 	70 	109 	504 	9.6 	0.74 	0.391 	77 	1.2 	2.2 	77 	43
Table A.6 	Summary of test results for opening frame corner reinforced with
detailing Type 4 with stirrups.
Type 	Author 	Specimen 	A s 	A s,i 	A s,r 	b 	d 	fsy 	fc	
ρ 	ωs	
ρ*	
ωs* 	F / R 	Mut 	Mue 	Mue / Muc Mut / Muc Mut / Muc*
[mm] 	[mm] [MPa] [MPa] 	[%] 	[%] 	[%] 	[kNm] [kNm] 	[%] 	[%] 	[%]
4a 	Mayfield 	18-A 	2φ10 	2φ6 	2φ6 	150 	158 	375 	17.8 	0.66 	0.140 	1.14 	0.175 	25 	8.1 	2.2 	24 	91 	74
4a 	72 	18-B 	2φ10 	2φ6 	2φ6 	150 	158 	375 	17.8 	0.66 	0.140 	1.14 	0.175 	25 	8.8 	2.2 	24 	98 	80
4c 	Skettrup 	8002 	2φ16 	1φ16	
β 	162 	231 	589 	17.2 	1.07 	0.368 	0.76 	0.130 	95 	38.2 	45.9 	100 	86 	69
4c 	8003 	2φ16 	1φ16	
β 	162 	232 	605 	17.8 	1.07 	0.364 	0.76 	0.129 	95 	45.3 	47.5 	100 	98 	79
4c 	8201 	2φ16 	1φ16	
β 	162 	231 	645 	16.3 	1.07 	0.425 	0.76 	0.150 	95 	48.5 	50.2 	100 	103 	84
4c 	8203 	2φ16 	1φ16	
β 	162 	228 	650 	17.2 	1.09 	0.411 	0.77 	0.145 	95 	49.1 	49.5 	100 	104 	84
4c 	8205 	2φ16 	1φ16	
β 	162 	228 	644 	15.6 	1.09 	0.449 	0.77 	0.159 	95 	44.1 	48.9 	100 	96 	79
4c 	8207 	2φ16 	1φ16 	2φ12 	162 	228 	655 	17.9 	1.09 	0.398 	0.77 	0.141 	40 	48.1 	22.0 	46 	100 	81
4a 	Stroband 	B8 	2φ6 	2φ6 	4φ6 	70 	109 	504 	20.2 	0.74 	0.185 	1.27 	0.316 	141 	2.8 	4.0 	100 	96 	57
4a 	B22 	2φ6 	2φ6 	4φ6 	70 	109 	504 	10.7 	0.74 	0.350 	1.27 	0.598 	141 	2.3 	4.0 	100 	82 	50
1
β = 4φ10 + 2φ12.

-- 173 of 242 --

A11
Table A.7 	Summary of test results for closing frame corner reinforced with
detailing Type 1.
Type 	Author 	Specim. 	A s 	b 	d 	fsy 	fc	
ρ 	ωs 	Mut 	Mut / Muc
[mm] 	[mm] [MPa] [MPa] 	[%] 	[kNm] 	[%]
1e 	Lundgren 	1U 	10φ16 	600 	307 	570 	37.0 	1.09 	0.168 	349.7 	100
1f 	2L 	10φ16 	600 	307 	570 	37.3 	1.09 	0.167 	355.4 	102
1f 	4Ss 	10φ16 	600 	307 	570 	33.6 	1.09 	0.185 	312.1 	90
1a 	Mayfield 	1-3 	2φ12 	150 	158 	449 	21.4 	0.96 	0.201 	18.0 	125
1a 	71 	1-4 	2φ12 	150 	158 	449 	21.4 	0.96 	0.201 	19.7 	137
1c 	3-2 	2φ12 	150 	158 	449 	24.5 	0.96 	0.176 	18.5 	126
1c 	4A-2 	2φ12 	150 	158 	449 	22.4 	0.96 	0.192 	19.4 	133
1e 	Balint 	NS004/2 	3φ6 	152 	124 	565 	23.4 	0.45 	0.109 	4.5 	77
1e 	NS008/2 	2φ10 	152 	124 	600 	28.1 	0.83 	0.178 	8.4 	79
1e 	NS014/1 	2φ12 	152 	124 	476 	18.9 	1.20 	0.303 	14.2 	124
1a 	Plos 	RV1 	8φ16 	600 	268 	473 	29.7 	1.00 	0.159 	210.4 	109
1a 	RV3 	5φ10 	600 	280 	504 	28.7 	0.23 	0.041 	52.9 	107
1e 	Stroband 	A1 	2φ6 	70 	109 	450 	19.1 	0.74 	0.175 	2.6 	101
1e 	A4 	2φ6 	70 	109 	450 	18.8 	0.74 	0.177 	3.1 	119
1e 	A7 	2φ6 	70 	109 	450 	19.6 	0.74 	0.170 	2.9 	113
1e 	A22 	2φ6 	70 	109 	450 	16.9 	0.74 	0.197 	2.8 	110
1e 	A28 	2φ6 	70 	109 	450 	8.8 	0.74 	0.378 	1.5 	59
1a 	Swann 	103 	2φ19 	152 	123 	295 	20.3 	3.02 	0.439 	13.5 	79
2c 1 	109 	2φ19 	152 	123 	295 	17.3 	3.02 	0.515 	14.8 	87
2c 1 	110 	2φ19 	152 	123 	295 	19.2 	3.02 	0.465 	17.3 	101
1 Radial bars included.
Table A.8 	Summary of test results for closing frame corner reinforced with
detailing Type 3.
Type 	Author 	Specim. 	A s 	b 	d 	fsy 	fc	
ρ 	ωs 	Mut 	Mut / Muc
[mm] 	[mm] [MPa] [MPa] 	[%] 	[kNm] 	[%]
3a 	Mayfield 	2-3 	2φ12 	150 	158 	449 	19.4 	0.96 	0.222 	13.4 	94
3a 	71 	2-4 	2φ12 	150 	158 	449 	19.4 	0.96 	0.222 	16.6 	117
3a 	Plos 	RV2 	6φ16 	600 	268 	473 	29.7 	0.75 	0.119 	159.9 	128
3a 	RV4 	4φ10 	600 	280 	504 	28.7 	0.19 	0.033 	44.5 	116
3a 	Stroband 	A10 	2φ6 	70 	109 	450 	19.1 	0.74 	0.175 	2.5 	96
3a 	A13 	2φ6 	70 	109 	450 	18.8 	0.74 	0.177 	2.7 	103
3a 	A16 	2φ6 	70 	109 	450 	19.6 	0.74 	0.170 	2.8 	109
3a 	A30 	2φ6 	70 	109 	450 	9.3 	0.74 	0.357 	1.6 	63
3a 	A32 	2φ6 	70 	109 	450 	8.9 	0.74 	0.375 	1.8 	70
3a 	Swann 	104 	2φ19 	152 	123 	295 	19.9 	3.02 	0.448 	13.1 	77
3b 	106 	2φ19 	152 	123 	295 	19.6 	3.02 	0.456 	13.7 	80
3a 	Author 	RV5 	7φ16 	600 	268 	567 	30.6 	0.88 	0.162 	176.7 	87
3a 	RV6 	7φ16 	600 	268 	567 	30.6 	0.88 	0.162 	180.3 	89
3a 	RV7 	4φ10 	600 	280 	573 	33.8 	0.19 	0.032 	50.5 	112
3a 	RV8 	4φ10 	600 	280 	573 	33.8 	0.19 	0.032 	50.5 	112

-- 174 of 242 --

A12

-- 175 of 242 --

B1
Appendix B 	Simply Supported Beams Reinforced with Spliced
Reinforcement Loops
The following tests have been carried out as part of a Master Thesis work by Peter Grassl
under supervision by the author. Below, only a very brief description of the test results is
given; for further information about this work, see Grassl (1999).
Simply supported beams were tested to examine what influence the splice length of the
reinforcement loops and width of the beam had on the structural response of the beam. The
beam dimensions and reinforcement ratio were determined to be the same as in the frame
corner tests presented in Paper I. Further, the concrete and reinforcement quality was similar
with a compressive strength f c = 28 MPa and reinforcement yield strength f sy = 543 MPa. The
beam dimensions and test set-up are shown in Figure B.1, while Table B.1 presents the
parameters varied. To simplify the registration of the longitudinal cracks expected in the
spliced zone, the beams were tested upside-down.
A-A
3 000
3 200
l splice	
A
A φ16
φ10 s200
deformation-controlled
loading
32
b
32
300	φ16
40 	40	lsplice
r
Figure B.1 Dimensions and test set-up of beams.

-- 176 of 242 --

B2
Table B.1 	Parameters varied in the beam tests.
Specimen 	b 	l splice 	r 	As	
ρ 	ωs
[mm] 	[mm] 	[mm] 	[%]
RV12 	600 	220 	110 	7 φ16 	0.88 	0.171
RV13 	- " - 	600 	- " - 	- " - 	- " - 	- " -
RV14 	1200 	- " - 	- " - 	14 φ16 	- " - 	- " -
RV15 1 600 	--- 	--- 	7 φ16 	- " - 	- " -
1Unspliced beam used as reference beam.
The load-displacement relations obtained in tests are compared in Figure B.2; the maximum
load and the corresponding displacement are summarised in Table B.2. Due to the larger beam
width of RV14, the load values for this specimen were halved to ensure a direct comparison to
the other beams. The reference beam RV15 obtained a ductile behaviour and failed due to
shear at a rather large displacement. The behaviour in the beams provided with short splice
length, though (i.e. specimens RV12 and RV14), was determined by spalling of the side
concrete cover. This is also reflected in the load-displacement relation, where it can be seen
that 	neither 	specimen 	reached 	the 	same 	load 	capacity as 	the 	reference 	beam 	RV15.
Nevertheless, both specimens still obtained a rather ductile post-peak behaviour. In specimen
RV13, where long splice lengths were provided, side concrete spalling was never initiated.
However, splitting cracks at the straight part of the spliced loops were observed at a load of
260 kN. Shortly after this, the load suddenly dropped about by 50 kN and a distribution of
internal forces took place, when the main anchorage of the loops changed from the straight to
the bent part. The load then increased again until shear failure was obtained, hence resulting in
a brittle failure at a rather small displacement. The beam crack patterns at end of test are
shown in Figure B.3.

-- 177 of 242 --

B3
0
50
100
150
200
250
300
0 	20 	40 	60 	80 	100 	120
Displacement,
δ [mm]
Load, F [kN]
RV15
RV13 	RV12
RV14
F
δ
Figure B.2 Load-displacement relation of beams tested.
Table B.2 	Summary of test results.
Specimen 	Maximum
load
Displacement
at maximum
load
Estimated
load
Efficiency
[kN] 	[mm] 	[kN] 	[%]
RV12 	205 	18 	241 	85
RV13 	268 	14 	241 	111
RV14 	227 1 22 	241 1 94
RV15 	268 	113 	241 	111
1
Load halved to simplify comparison with the other tests.
In specimen RV12 it was found that all but the outer loop pairs obtained yielding at a load of
about 180 to 200 kN. The outer loops, though, never reached yielding; instead they started to
unload shortly prior to the yielding of the inner loops. Hence, it can be concluded that the
outer loop pairs were not fully active in this stage but that it still was possible to increase the
load. However, after a while the influence of the side concrete spalling spreads to the inner

-- 178 of 242 --

B4
Specimen RV12 	Specimen RV13
Specimen RV14 	Specimen RV15
Figure B.3 Crack patterns at final failure.
loops so that they eventually unload too, thus limiting the maximum load capacity. From this,
it seems reasonable that the structural response obtained is related to what percentage of the
total reinforcement amount is affected by the initiation of the side concrete spalling; i.e. the
number of internal bars compared to the total amount of reinforcement is important. This was
also confirmed in the tests; the maximum load and post-peak ductility reached in specimen
RV14 were higher than those of specimen RV12. In the former, two out of fourteen bars were
affected; i.e. 86% of the reinforcement present was still fully available to balance the external
load. The corresponding value for specimen RV12 was five out of seven bars or, differently
put 71% of the original amount of reinforcement. Thus, it is also logical that the former
obtains both higher load capacity and improved post-peak response compared to the latter.
Even though the load capacity reached in specimen RV13 was higher than that in the
specimens using short splice length, it may be argued that its structural behaviour was less
preferable due to its sudden load drop. The somewhat too low load capacity obtained, when
short splice length was used, can be dealt with in a simplified way by not taking into account
the outer reinforcement loops when determining the structure’s load capacity; i.e. by basing
the estimated moment capacity on a reduced reinforcement amount As,red as

-- 179 of 242 --

B5
As,red = (n-2)⋅A
φ
where n is the total number of reinforcement loops used and A
φ is the cross-section of one bar.
If using this approach for specimen RV12 and RV14, the estimated load and efficiency
obtained would then be as shown in Table B.3.
Table B.3 	Summary of test results; specimen RV15 is included for comparison.
Specimen 	Maximum
load
Estimated
load
Efficiency
[kN] 	[kN] 	[%]
RV12 	205 	175 	117
RV14 	227 1 209 1 109
RV15 	268 	241 	111
1
Load halved to simplify comparison with the other tests.

-- 180 of 242 --

B6

-- 181 of 242 --

I-1
Reinforcement Detailing in Concrete Frame Corners
by Morgan Johansson
Results of an experimental study and a literature survey of the reinforcement detailing in concrete
frame corners subjected to closing or opening moment are presented. A total of eleven full-scale
specimens, eight for closing moment and three for opening moment, were tested to evaluate whether
a new reinforcement detailing, using reinforcement loops spliced within the corner, is appropriate
to use in Swedish civil defence shelters. In combination with non-linear finite element analyses (not
presented here) it was found that the new detailing, even though resulting in a higher risk of side
concrete spalling within the corner, was sufficient to be used. Further, it is shown that the use of
inclined bars, commonly accepted in opening frame corners, may not be as effective as previously
believed.
Keywords: frame corners; reinforcement detailing; reinforced concrete; opening moment; closing
moment; side concrete spalling.
INTRODUCTION
From a safety point of view it is important that a concrete structure, apart from necessary load
capacity, also is able to show ductile behaviour so that a local failure does not lead to total collapse
of the structure. A structure’s ability to exhibit such behaviour is highly dependent on the
reinforcement detailing of the joint connections between its adjoining members. Ideally, the joint
should resist a moment at least as large as the estimated failure moment of the structural members
connected to it and ensure ductile behaviour in the ultimate limit state. The reinforcement detailings
in frame corners previously described in the Swedish Shelter Regulations (1994) shown in Figs. 1a
and 1b were regarded as difficult to carry out correctly at the construction site. Thus, even though
they fulfilled the structural requirements for a joint connection mentioned above, there was a need
for a simpler detailing. Therefore, a detailing in which all reinforcement bars are spliced within the
corner region (see Fig. 1c) was proposed and evaluated in a project carried out at the Division of
Concrete Structures at Chalmers University of Technology.
Concrete frame corners can be separated into two principal types: those that are subjected to a
positive moment (opening of the corner) and those subjected to a negative moment (closing of the
corner). By the use of a simple strut and tie model it can be seen that opening of the corner tries to

-- 182 of 242 --

I-2
inclined bar
(a) 	(b) 	(c)
Fig. 1 	Schematic figures of the detailings previously described in the Swedish Shelter
Regulations for (a) closing moment; (b) opening moment; (c) the new proposal
examined.
split the corner in two by pushing off the outside portion (Fig. 2). This is opposite to what
happens when closing the corner; the tensile and compressive forces then interact in a way
that instead confines the concrete between them. Accordingly, the two cases also present quite
different difficulties in their respective reinforcement detailing. Generally speaking, it can be
said that an opening moment is characterised by the concrete tensile failure, while a closing
moment depends more on the compressive strength of the concrete. Consequently, in
theoretical and experimental studies it has also been concluded that the reinforcement
detailing of frame corners is more sensitive in the former case than the latter (Mayfield et al.
1971; Nilsson and Losberg 1976). Therefore, the main effort of experimental studies has also
been concentrated on frame corners subjected to opening moments. Especially Mayfield et al.
(1971, 1972) and Nilsson (1973) carried out extensive test series where many different
reinforcement detailings were examined. Other valuable contributions to the knowledge of
opening corners have been made by, for example: Swann (1969), Noor (1977), Stroband and
Kolpa (1981), Jackson (1995), and Abdul-Wahab and Al-Roubai (1998). Of these, Swann,
Mayfield et al. (1971), Stroband and Kolpa (1983) also studied the behaviour of closing frame
corners; other researchers in this field are for instance Balint and Taylor (1972), Plos (1994)
and Lundgren (1999).
The aim of this study was to investigate whether the proposed reinforcement detailing
(detailing c in Fig. 1) is appropriate to use instead of the conventional ones (detailings a and b
in Fig 1.). To do this, a combination of full-scale tests, comparison to previous research and
non-linear finite element analyses was carried out. This paper, though, is limited to the two
first parts; for information about the finite element analyses, see Johansson (1996), Karlsson
and Johansson (1997), and Johansson (2000a).

-- 183 of 242 --

I-3
R
T
C
C 	T 	T 	C
T
C
R
Fig. 2 	Simple sketch of the principal forces in corner subjected to (a) positive (opening)
moment; (b) negative (closing) moment.
EXPERIMENTS
To examine the effectiveness of the new detailing when subjected to an opening or a
closing moment, three test series were carried out. In the first two series, each consisting of
four specimens, the effect of a closing moment was examined. Two specimens were
reinforced with the conventional detailing and six with the new proposal. Opening of frame
corners was studied in the third test series with one specimen using the conventional detailing
and two using the new proposal (Table 1). This paper, though, emphasises the second and
third test series; results obtained in the first one were previously reported in Plos (1994) but
are briefly included here since it was part of the same project. Thus, unless otherwise stated,
the descriptions of the closing moment tests refer to the specimens in the second test series.
More information about the two latter test series can be found in Johansson (1996) and
Johansson and Karlsson (1997), respectively.
The dimensions and test set-up of the frame corners used in the three test series are shown
in Fig. 3. The amount of reinforcement (hot-rolled, deformed bars) used in the first two test
series corresponded approximately to the maximum and minimum amount of reinforcement
allowed in the Swedish Shelter Regulations. The reinforcement ratio used in the third test
series were based on the high reinforcement ratio in the previous test series as further
described below. In the first two test series the influence of a construction joint was also
examined. According to the Swedish Shelter Regulations the reinforcement amount in such a
joint should be increased by at least 25% compared to that in the adjoining members.
However, in the first test series the specimens with new detailing (RV2 and RV4) had an
unequal amount of reinforcement in the sections adjacent to the frame corner (Table 1). In the
second test series, though, the adjoining sections of the frame corner were designed to be of
equal strength. To obtain a construction joint, one adjoining member was cast first, and four
days later the second adjoining member and corner joint were cast. The specimens were made

-- 184 of 242 --

I-4
in pairs; the two specimens that would be directly compared with each other were cast with
concrete from the same batch. The specimens in the third test series did not have a
construction joint and were all cast at the same time. The distance from the centre of the
outermost bar to the free concrete sides was 40 mm in the closing frame corners. In the
opening frame corners this distance was doubled to 80 mm to avoid spalling failure of the side
concrete cover. The concrete covers on the tensile and compressive side of the specimens
were 1.5φ in all specimens, where φ is the bar diameter used; the reinforcement bars were in
all specimens positioned in one layer only. The strength of the concrete used was determined
by tests on water-cured cylinders (φ150 x 300 mm) at day of testing according to Swedish
standard, BST Byggstandardiseringen (1991).
Table 1 	Reinforcement amount and detailing in tested frame corners.
Type of 	Detailing 1 Test 	Reinforcement 	f sy 	f c	
ρ 	ωs
moment 	specimen adjoining
members
corner 	[MPa] 	[MPa] 	[%]
a 	RV1 	6φ16 	8φ16 	473 	29.7 	1.00 	0.159
c 	RV2 	- " - 	6φ16 2 - " - 	- " - 	0.75 	0.119
a 	RV3 	4φ10 	5φ10 	504 	28.7 	0.23 	0.041
c 	RV4 	- " - 	4φ10 3 - " - 	- " - 	0.19 	0.033
c 	RV5 	5φ16 	7φ16 	567 	30.6 	0.88 	0.162
c 	RV6 	- " - 	- " - 	- " - 	- " - 	0.88 	0.162
c 	RV7 	3φ10 	4φ10 	573 	33.8 	0.19 	0.032
c 	RV8 	- " - 	- " - 	- " - 	- " - 	0.19 	0.032
b 	RV9 	5φ16 	5φ16 4 570 	32.2 	0.63 5 0.110 5
c 	RV10 	- " - 	5φ16 	- " - 	- " - 	0.63 	0.110
c 	RV11 	- " - 	7φ16 	- " - 	- " - 	0.88 	0.155
1 The notation refers to that used in Fig. 1.
2 Unequal amount in adjacent sections; 8φ16 crossed the construction joint.
3 Unequal amount in adjacent sections; 5φ10 crossed the construction joint.
4 Also 3φ16 inclined bars.
5
ρ = 0.89 and
ωs = 0.158 if the inclined bars are taken into account as shown in Eq. (2).

-- 185 of 242 --

I-5
2150
300
load
line
construction
joint
2150
1700
300
600
A-A
A 	A
300
B 	B	2150
load
line
300
600
B-B
300
300
2150
1700
Transducer used
for displacement
control
Load cell
Hydraulic jack Load
line
Hydraulic
jack
Load cell
Construction
joint
Displacement
transducer
Load
line
a) 	b)
Fig. 3 	Dimensions and test set-up of (a) first and second test series (closing moment);
and (b) third test series (opening moment).
It is common to discuss in terms of reinforcement ratio
ρ when determining the allowable
amount of reinforcement in a frame corner. However, this measure is inadequate since it does
not take into account the reinforcement quality or the strength of the concrete. This statement
is especially true for frame corners subjected to opening moment, where the concrete
behaviour in tension may have a very large influence on the overall response, but also in
closing moments when there is risk of spalling of the concrete side cover or crushing of the
compressive zone. However, a variable that takes these factors into consideration is the
mechanical reinforcement ratio
c
sy	s
c
sy
s bdf
f	A
f
f =	=
ρ
	ω 	(1)

-- 186 of 242 --

I-6
where As is the amount of reinforcement, b is the specimen width, d is the effective height, f sy
is the reinforcement yield strength and f c is the compressive strength of the concrete.
Accordingly, this term is also used in the present paper while the reinforcement ratio
ρ is only
shown for reference.
The critical sections used in the frame corners when determining the expected load
capacity were defined as shown in Fig. 4a. Thus, the critical crack in the closing frame corners
was assumed to appear just outside the corner; the critical crack in the opening frame corners
was assumed to form at the inside of the corner and then develop along the reinforcement
loops. When determining the amount of reinforcement loops in specimen RV11 the idea was
that the amount of reinforcement crossing the initial crack at the inside of the corner should be
approximately the same as that used in the specimen reinforced with inclined bars (i.e.
specimen RV9). This can be achieved as shown in Fig. 4b. Hence, the necessary amount of
reinforcement in the loops can be determined as
is	s	s 	A	A	A 	,
*
2
1
+	= 	(2)
where As* is the loop reinforcement area in detail c and As and As,i are the loop reinforcement
area and area of the inclined bars, respectively, in detail b.
Fs
F s 	F s,i
Fs*
Fs*
i	s	s	s 	F	F	F 	,
*
2
1
+	=
As*	As,i 	A s
= critical section
= assumed crack
(a) 	(b)
Fig. 4 	(a) Definition of critical section in closing and opening corner; (b) determination
of equivalent amount of reinforcement loops when the inclined bars are replaced.

-- 187 of 242 --

I-7
RESULTS
Closing moment
The load on the frame corners in the first and second test series was controlled manually so
that it could be adjusted to the response of the specimen. Thus, it was also possible to register
the post-peak behaviour in a relatively controlled manner. The load was initially applied in
load increments of 5 or 10 kN for the specimens with low and high amount of reinforcement,
respectively. At each increment the load was held constant while the propagation of cracks
was marked. To make it easier to follow the behaviour of the frame corners near the
maximum load, the load increments were halved when a non-linear response was observed.
The total time of testing for each specimen was about two hours.
The load-displacement relations for the closing frame corners are shown in Fig. 5; the
efficiency of the tests, i.e. the ratio between the moment obtained in each test, Mut, and the
estimated theoretical moment capacity, Muc, are presented in Table 2. During the initial
loading of the frame corners in the two first test series, two primary cracks were observed
close to the corner in all the specimens, one in each section adjacent to the corner. However,
as mentioned above, the frame corners reinforced with the new detailing in the first test series
(specimens RV2 and RV4) had an unequal amount of reinforcement in the sections adjacent
to the frame corner. This caused the deformations to concentrate in just one plastic hinge in
these specimens, and was also the reason for the lower load capacity obtained for specimens
RV2 and RV4 compared to that of specimens RV1 and RV3, respectively. The other six
specimens, though, developed plastic hinges on either side of the corner.
For specimens RV5 and RV6, very few cracks were observed outside the immediate
vicinity of the frame corner. The behaviour of the two specimens was similar, and the
maximum load was determined for both of them by spalling of the concrete side cover in the
frame corner. Even so, strain gauges glued on the two reinforcement loops next to the centre
bar registered a strain of about 5‰, thus indicating that the reinforcement yielded at
maximum load. Before the spalling occurred, the largest cracks were observed in the section
between the corner and the upper adjoining member. In the tests of the specimens with low
reinforcement ratio, cracks were formed with a spacing of approximately 0.20 m between
them in both adjoining members. The cracks that led to failure for specimen RV7 appeared in
the upper adjoining member close to the corner; for specimen RV8, the decisive crack
appeared along the construction joint. For both specimens, the first crack was observed in the
construction joint at a load level lower than expected. However, apart from the lower crack
load the construction joint did not appear to have any effect on the overall behaviour, a
statement also confirmed in the non-linear finite element analyses carried out; see Johansson
(2000a).

-- 188 of 242 --

I-8
0
40
80
120
160
200
0 	50 	100 	150 	200 	250
Displacement,
δ [mm]
Load, F [kN]
δ
F
RV1
RV2
RV5
RV6
0
10
20
30
40
50
0 	50 	100 	150 	200 	250
Displacement,
δ [mm]
Load, F [kN]
δ
F 	RV3
RV4
RV7
RV8
(a) 	(b)
Fig. 5 	Load-displacement relations for the frame corners subjected to closing moment:
(a) high reinforcement ratio; (b) low reinforcement ratio. Specimens RV1 to RV4
were tested by Plos (1994).
The maximum displacements in specimens RV1 to RV3 were governed by limitations in
the test rig; specimen RV4, though, was loaded until failure when two reinforcement bars
were torn off. Specimen RV5 still showed ductile behaviour when the test had to be stopped
because of the obliquity of the hydraulic jack, while specimens RV6 to RV8 were deformed
until rupture of two (RV6) or three (RV7 and RV8) reinforcement bars was obtained. The
crack patterns obtained in the specimens of the second test series were very similar when
using high or low reinforcement ratio, respectively. Therefore, photos only of specimens RV6
and RV7 are shown (Fig. 6).
(a) 	(b)
Fig. 6 	Crack patterns at end of test in: (a) specimen RV6; and (b) specimen RV7.

-- 189 of 242 --

I-9
Table 2 	Summary of test results in the three test series.
Type of
moment
Detailing 1 Test
specimen
ωs 	Load in
test, F
Moment in
test, Mut
Estimated
capacity, Muc 	uc
ut
M
M
[kN] 	[kNm] 	[kNm] 	[%]
a 	RV1 	0.159 	175 	210 	193 	109
c 	RV2 	0.119 	133 	161 	145 	128
a 	RV3 	0.041 	44 	53 	50 	107
c 	RV4 	0.033 	37 	45 	38 	116
c 	RV5 	0.162 	147 	178 	203 	87
c 	RV6 	0.162 	150 	180 	203 	89
c 	RV7 	0.032 	42 	50 	45 	112
c 	RV8 	0.032 	42 	50 	45 	112
b 	RV9 	0.110 2 109 	133 	136 / 192 3 98 / 70 3
c 	RV10 	0.110 	87 	107 	136 	79
c 	RV11 	0.155 	115 	141 	187 	75
1 The notation refers to that used in Fig. 1.
2
ωs = 0.158 if the inclined bars are taken into account.
3 Inclined bars not accounted for / inclined bars accounted for.
Opening moment
The testing of the opening frame corners in the third test series was controlled by means of
displacement control as shown in Fig. 3b. Initially the load was applied with a deformation
speed of 0.15 mm/min. However, to limit the total time needed for one test, the speed was
doubled to 0.3 mm/min about 10 minutes after reaching the maximum load. Due to an error in
the initial loading of RV9 this specimen was deformed with a speed of about 3 mm/min until
reaching a load of 33 kN at which time it was unloaded; it was then loaded again, this time
using the correct deformation speed. Even though it is unlikely that this had any significant
effect on the maximum load capacity, the initial crack pattern might have been somewhat
influenced. The load-displacement relations for the opening frame corners are compared in
Fig. 7; for a summary of the obtained load capacities and efficiencies of the detailings, see
Table 2. The small irregularities in the curves are due to stops made during loading to mark
the crack propagation in the specimen. The loading was stopped when reaching a post-peak
load of about 80% of the maximum load (RV9 and RV10) or when the large deformations of
the frame corners caused problems in the test set-up (RV11).

-- 190 of 242 --

I-10
Fig. 8a shows a schematic crack propagation similar to that obtained in all tests. The first
crack appeared at the inside of the corner (1) and then followed the reinforcement loops until
it approached the compressive reinforcement (2). At this stage the load was still quite low,
only about 30 to 40 kN, and the forming of new cracks in the corner came to a standstill while
the existing ones inside the corner increased in size. It was not until a load of about 80% of
the final maximum load that any serious crack propagation within the corner started again.
The cracks then deviated in the direction of the adjoining members (3) and eventually, just
prior to the maximum load, the cracks closed around the reinforcement loops (4), hence
limiting the corner capacity when the concrete part outside the reinforcement spalled off. The
crack patterns for the three specimens at end of test are shown in Fig. 8. Further, longitudinal
cracks were observed on the tensile side about 8 to 10 cm from the free concrete sides (i.e.
approximately at the location of the outer reinforcement loops) in both specimens RV9 and
RV11 shortly before the maximum loads were reached. In RV10 such cracks were observed
after maximum load was reached. The mean crack spacing of the bending cracks observed
outside the corner region was about 0.21 m.
0
20
40
60
80
100
120
140
0 	20 	40 	60 	80 	100
Displacement,
δ [mm]
Load, F [kN]
δ
F
RV9
RV11
RV10
Fig. 7 	Load-displacement relations of frame corners subjected to opening moment.

-- 191 of 242 --

I-11
this part of
the corner
spalled off
1
2	2 3	3
4
(a) 	(b)
(c) 	(d)
Fig. 8 	Crack patterns in frame corner subjected to opening moment: (a) schematic sketch
of crack propagation; (b) specimen RV9; (c) specimen RV10 ; and (d) specimen
RV11.
DISCUSSION OF TEST RESULTS
Estimation of theoretical load capacity
The theoretical strength of each specimen was determined by using a concrete stress block
as described in, for example, Eurocode 2. The effect of normal force due to the external load
and the reinforcement on the compressive side was accounted for. Further, due to the test set-
up used for the closing frame corners, the dead weight had a relatively large influence on the
theoretical load capacity in these specimens, especially for the frame corners with low
reinforcement ratio. Therefore, the dead weight was considered for these specimens and thus,
the estimated moment capacity Muc given in Table 2 is not the moment capacity in the critical
section but the product of the estimated maximum point load and its lever arm of 1.202 m to
this section. In the specimens subjected to opening moment, though, the dead weight had only
a small effect and was therefore neglected. The same method was also used in the re-
evaluation made below of test results reported in the literature.

-- 192 of 242 --

I-12
Closing moment
Due to uneven capacities in the adjoining member, it is not possible to make a direct
comparison of the specimens in the first test series. However, the efficiencies were all above
100% and the ductility similar, thus indicating that the examined detailings are comparable.
The unusually high efficiency obtained in specimen RV2 was due to substantial hardening in
the reinforcement; as can be seen in Fig. 5, though, yielding of the reinforcement first
occurred at a load of about 121 kN which corresponds well to the estimated load capacity of
120 kN. Because of the spalling of the concrete side cover in specimens RV5 and RV6 in the
second test series, a somewhat lower maximum load capacity than expected was obtained.
Also, the plateau in the load-displacement relation, observed for RV1 and RV2, did not
appear. The differences between the estimated and observed maximum load capacities for the
specimens with low reinforcement ratios, though, were similar and the large plateau in the
load-displacement relation was observed in all tests.
Based on experience gained in tests on simply supported beams of identical concrete cross
sections and spliced with the same type and amount of reinforcement loops as used here,
according to Grassl (1999), it can be assumed that the efficiency of the outermost bars, due to
the spalling of the concrete cover, probably was only about 50% when the maximum load was
reached. On this assumption, the estimated load capacity obtained would be 144 kN, a value
that corresponds quite well with the loads of 147 kN and 150 kN reached in the tests of the
specimens that spalled (i.e. RV5 and RV6). Because of the spalling, the strain in the inner
reinforcement 	bars 	increased 	more 	rapidly near 	the 	maximum 	load 	in 	an 	attempt 	to
compensate for the loss of the outermost bars. Eventually, though, depending for example on
the bar spacing, the loss of concrete cover may influence the bars further from the free side
too and cause them to lose their anchorage capacity as well, something that probably also
happened here. However, the fact that two reinforcement bars in RV6 were torn off before the
end of the tests shows that the innermost bars were still fully active. Hence, contrary to what
is said in Stroband and Kolpa (1983), the spalling did not give rise to a sudden failure. The
reason for this was that even though the contribution of the outer bars in specimens RV5 and
RV6, due to loss of anchorage, largely disappeared close to the maximum load, the inner bars
were still able to balance a large part of the load. The specimen width and number of
reinforcement bars used by Stroband and Kolpa in their tests were 70 mm and 2φ6,
respectively. Thus, when the reinforcement loops started to fail in anchorage due to the
spalling, there were no extra bars to assist in balancing the internal section force.
Accordingly, if a large percentage of the total reinforcement amount is affected by spalling,
as may be the case in beam-column joints, there is a risk of brittle behaviour. From the tests it
can be concluded that there is higher risk of spalling of the side concrete cover when using the

-- 193 of 242 --

I-13
new proposal than is the case when using the conventional detailing shown in Fig. 1a, an
observation that is in agreement with those made by Stroband and Kolpa. However, if the
corner is laterally restrained or if only a small percentage of the total number of reinforcement
bars are affected, this type of failure has a very limited, if any, effect on the total load-carrying
capacity or ductility of the corner. Thus, the risk of a spalling failure in a civil defence shelter
is small and, even if such a failure were initiated, its effect would be quite negligible due to
the large width used in a wall-slab connection. Hence, the test results together with these
observations support the idea that it would be appropriate to use the new detailing in corners
subjected to closing moment. However, special care still has to be taken when using
reinforcement loops in beam-column connections where the effect of spalling can have a large
influence.
Opening moment
According to previous research, the detailings used in RV10 and RV11 (i.e. reinforcement
loops without inclined bars) are inferior to that used in RV9 (inclined bars included).
However, this was not clearly the case in the tests carried out here. Even though the inclined
bars supplied in RV9 resulted in an increased load capacity compared to that of RV10, the
structural response was quite similar for all three specimens. It is especially interesting to note
that RV9 and RV11 showed almost exactly the same stiffness until maximum capacity was
reached, a value that was also more or less the same in the two tests. According to Nilsson,
diagonal cracks within the loops or along the inclined bars are the cause of failure in the
detailings tested. In an attempt to register the development of the cracks within the
reinforcement loops, strain gauges were glued on the concrete. However, such cracks did not
form as described by Nilsson; in fact, it was not until after maximum load that the strain
gauges even indicated tensile stresses in this region. Instead, maximum load was governed by
spalling of the concrete outside the reinforcement loops. When this occurred, the anchorage
decreased and the reinforcement loops started to slide around the concrete sprint in the corner.
Hence, the failure obtained in these tests can probably best be characterised as an anchorage
failure, an observation also made by Jackson (1995) in his tests. The photos in Fig. 8 also
show that the final crack patterns were more or less the same independently of whether
inclined bars were used or not.
The reinforcement loops in both RV9 and RV11 yielded in the direct vicinity of the initial
crack at the inside of the corner; the strains measured as high as 12‰. Nevertheless, the load
level at this stage was still considerably smaller than the theoretical one. The strain gauges
used to register the strain in the reinforcement, though, were glued on the two bars next to the
centre bar and are thus not necessarily representative for the bars next to the free concrete

-- 194 of 242 --

I-14
side. Hence, based on the observations made by Grassl discussed in the previous section, this
strongly indicates that the load capacity of the opening frame corners was affected by spalling
of the side concrete cover. This statement is also strengthened by the appearance of the
longitudinal cracks observed close to the free concrete sides in both specimens before
reaching maximum load. Accordingly, it is the author’s belief that if spalling of the side
concrete cover had been prevented, a higher load capacity would also have been obtained in
the tests. Whether the efficiency would have reached 100%, though, is unclear but not
probable since the forming of the critical crack around the reinforcement loops (crack 4 in Fig.
8a) at a later stage would still have affected the anchorage capacity and thus decreased the
force taken by the reinforcement loops. Further, the post-peak behaviour in specimens RV9
and RV10 was more or less the same; a somewhat more ductile behaviour was obtained in
RV11. Based on the amount of reinforcement loops used in each specimen, this indicates that
the response in this stage to a large degree depends on the amount of reinforcement loops,
while the presence of inclined bars seems to have a quite negligible effect in this stage.
COMPARISON WITH OTHER RESEARCH
As mentioned in the introduction, various researchers have been working with the
behaviour of frame corners subjected to closing and/or opening moment and several detailings
have been tested and evaluated. Hence, an attempt is made here to summarise the test results
known by the author using the detailings shown in Fig. 1 and detailings similar to those as
shown in Johansson (2000b). Different combinations, using various amounts and types of
secondary reinforcement, are not considered. Due to this, the work by Luo et al. (1994) was
not included; further, the tests reported by Östlund (1963) was not taken into account since no
information about the steel strength was available.
The load-displacement relations after maximum load are rarely shown in the literature.
This is due to the use of pure load-controlled testing by which it is not possible to register the
post-peak behaviour. Accordingly, this makes it hard to know anything about the post-peak
ductility obtained when using different detailings; many results are instead reported only as
the ratio of the maximum moment obtained in test and the theoretical estimated ultimate
moment. Such results reported by various researchers on frame corners subjected to closing
and opening moment, respectively, are illustrated in Figs. 9 and 10; a thorough summary of
the results can be found in Johansson (2000b). Due to limited space, the sources of the test
results in these figures are only identified by the use of the author’s name first mentioned in
the reference list. Most of these reports originally refer to the concrete compressive strength as
the cube strength. However, since the compressive strength used for design in both Eurocode

-- 195 of 242 --

I-15
2, CEN (1991) and the Swedish regulations BBK 94, Boverket (1994), is related to the
cylinder strength a recalculation was done in those cases. The relation used was taken from
Swedish Standard SS 13 72 07, BST Byggstandardiseringen (1991), which states that the
relation between the compressive strength for normal strength concrete obtained from water-
cured cylinders (φ150 x 300 mm) and cubes (side 150 mm) cured dry can be approximated as
35	.	1
,
,
cube	c
cyl	c
f
f 	= 	(3)
where 	f c,cyl 	and 	f c,cube 	are 	cylinder 	and 	cubic 	compressive 	strengths 	of 	the 	concrete,
respectively. Even though the curing conditions of the cubes and cylinders used to determine
the concrete strength differed a lot between different researchers, just this one expression was
used, the difference obtained in the results shown below being quite negligible regardless of
whether another expression is used. Due to this recalculation of the concrete compressive
strength and the fact that all results were not evaluated in an identical manner by the original
authors (e.g. some considered the compressive reinforcement, some did not), the theoretical
strength, Muc, of each specimen was re-determined. As mentioned in the Discussion section,
this was done by using the method given in Eurocode 2, i.e. neglecting the influence of the
dead weight but taking into account the effect of any compressive reinforcement and normal
force from the external load. Hereby, all results were evaluated in the same way and
consequently, the efficiencies shown here may differ from those reported by the original
authors.
When comparing the efficiencies of the different detailings, no consideration has been
given to those which had a considerably higher mechanical reinforcement ratio
ωs than that
allowed in the design of civil defence Shelters in Sweden. The allowed reinforcement ratio in
the present Swedish Shelter Regulations (1998) is 1.1%. Together with the mean strength of
about f c = 27 MPa for the lowest concrete quality allowed, and the mean reinforcement yield
strength of approximately f sy = 550 MPa, it is possible to determine an upper limit to
ωs =
0.224 by using Eq. (1). This upper limit of
ωs is also marked in Figs. 9 and 10.
From Fig. 9 it can be seen that most tests on closing frame corners with a mechanical
reinforcement ratio lower than 0.224 obtained an efficiency of at least 100% or more,
independently of what detailing was used. Of the results below full efficiency, it can be
mentioned that at least three were due to spalling failure (Stroband and Kolpa, and this author)
and one was because the maximum moment was limited due to shear failure (Lundgren). The
reason for the low efficiencies obtained in the tests by Balint and Taylor, though, are not
known to the author. Nevertheless, this comparison supports the statement made by Mayfield
et al. (1971) that the detailing is not very important in closing frame corners. However, as can

-- 196 of 242 --

I-16
be seen in Fig. 10, such is not the case with opening frame corners. Due to this, the further
discussion focuses on the opening of frame corners.
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Swann 	Swann
Mayfield 	Mayfield
Stroband 	Stroband
Plos 	Plos
Balint 	Author
Lundgren
Detail a 	Detail c
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Detail a Detail c
Fig. 9 	Efficiency of frame corners subjected to closing moment when the reinforcement
detailing varies. The dashed line marks the maximum mechanical reinforcement
ratio allowed in the Swedish Shelter Regulations.
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Detail b
Nilsson 	Stroband
Noor 	Skettrup
Abdul-W. Koordina
Swann 	Author
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Nilsson 	Stroband
Noor 	Jackson
Abdul-W. 	Koordina
Balint 	Mayfield
Swann 	Author
Efficiency [%]
Detail c
Fig. 10 	Efficiency 	of 	frame 	corners 	subjected 	to 	opening 	moment 	when 	different
detailings 	are 	used. 	The 	dashed 	line 	marks 	the 	maximum 	mechanical
reinforcement ratio allowed in the Swedish Shelter Regulations.

-- 197 of 242 --

I-17
When comparing the efficiencies of detailings b and c in opening frame corners shown in
Fig. 10, it may first appear that the former is superior to the latter. However, a comment about
these results should first be made. When Nilsson and other researchers determined the
efficiency of detail b they did not include the contribution to the moment capacity from the
inclined bars; neither did they take this extra reinforcement into account when determining the
reinforcement ratio of the detailing. If this is done as described in Eq. (2), the result will also
be quite different (Fig. 11). Accordingly, even though it is important to be aware that the
specimens with inclined bars often failed in an adjoining member, hence making the
maximum moment obtained in these tests dependent on its capacity, these results still indicate
that the efficiencies of both detailings are quite similar.
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Detail b Detail c
0
20
40
60
80
100
120
140
0.000 	0.100 	0.200 	0.300 	0.400 	0.500
Mechanical reinforcement ratio
Efficiency [%]
Detail b Detail c
(a) 	(b)
Fig. 11 	Comparison of efficiencies for detail b and detail c in tests on opening moment
when: (a) inclined bars are not taken into account; and b) inclined bars are taken
into account.
In most tests carried out on frame corners subjected to opening moment, the test set-up has
been arranged so that at least one of the adjoining members has had a constant moment acting
on it (Fig. 12). This is not on the safe side, though, since such a member may then fail in any
section independently of the distance from the corner (this is, for instance, what happened in
many of Nilsson’s tests). Accordingly, if the external moment decreases with increasing
distance to the corner, the possibility for a critical crack to develop outside the corner also
decreases. Further, the author is not aware of any tests but those presented in this paper where

-- 198 of 242 --

I-18
the reinforcement loops were spliced to straight bars just outside the corner region. Still, such
a procedure is frequently used and, for instance, is even given as an example in ACI (1999) of
how such a detailing should be carried out. Provided that such a splice is carried out correctly,
it usually produces a stronger section due to the higher amount of reinforcement, thus
effectively hindering the development of a plastic hinge in the adjoining member close to the
corner.
a) Nilsson (1973)
Stroband and Kolpa (1981)
b) Swann (1969)
Mayfield et al. (1971, 1972)
Balint and Taylor (1972)
Noor (1977)
c) Jackson (1995)
d) Kordina and Fuchs (1970)
e) Sketrup et al. (1984)
Abdul-Wahab and Al-Roubai (1998)
Abdul-Wahab and Salman (1999)
e)	d)
a) 	b) 	c)
Fig. 12 	Schematic figures of the test set-ups used by different researchers in tests on
opening moment.
The test set-up used for the tests presented in this paper was arranged so that the moment
varied along the adjoining members. Consequently, a more dangerous load case was obtained.
Further, as shown in Fig. 1, the reinforcement loops were spliced to straight bars in the
adjoining members just outside the corner, thus strengthening those parts close to the corner.
The result from the test was also that the usage of inclined bars in specimen RV9 did not
prevent the critical cracks from forming within the corner, something that to a large degree
contradicts previous observations reported in the literature. Hence, the combination of varying
moment and extra amount of reinforcement was sufficient to prevent the development of a
critical crack in the adjoining members before the corner failed. Of the results summarised
here only Kordina and Fuchs, and Jackson, used a test set-up in which the applied moment
varied in both members adjoining the corner. Based on this, it is interesting to note that the
tests of Kordina and Fuchs did not reach full efficiency; unfortunately Jackson did not carry
out any tests with inclined bars. When increasing the number of reinforcement loops in
specimen RV10 so that the effective amount of reinforcement area which crossed the critical
crack at the inside of the corner was similar to that used in specimen RV9, the structural
behaviour and final load capacity were also more or less the same.

-- 199 of 242 --

I-19
Accordingly, it can be concluded that the usage of inclined bars is not more effective in
strengthening the corner region than is the use of extra reinforcement loops; the test results
presented here even indicate the opposite. Instead, it is the lower amount of reinforcement in
the adjoining member compared to that in the corner that causes the failure to occur outside
the corner. Hence, the reliability of the inclined bars depends on the external moment
distribution and whether the reinforcement loops are spliced to straight bars just outside the
corner. When using only reinforcement loops it is unlikely that the final failure will occur
outside the corner. This is because the loops increase the load capacity in the adjoining
member just as much as in the corner. Thus, since the external moment probably reaches its
maximum within the corner and the theoretical moment capacity is the same in both cases, it
is inevitable that the critical section also will be positioned at the inside of the corner. Even
so, as has been shown in the tests presented here, quite a ductile behaviour might very well
still be the case. Consequently, the inclined bars could, if it seems proper, equally well be
replaced by extra reinforcement loops. If a response similar to that obtained when using
inclined bars is wanted, Eq. (1) can be used to determine the necessary amount of extra
reinforcement loops in the connection. The amount of inclined bars previously prescribed in
the Swedish Shelter Regulations was based on the recommendations given in Nilsson (1973)
and thus required this amount to be at least half that of the reinforcement loops used. Hence,
using Eq. (1) it can be concluded that, if detail c is to be used the total amount of
reinforcement loops shall be about 1.35As where As is the amount of reinforcement needed if
the efficiency of the detailing had been 100%. This value is also what is prescribed in the
present regulations, Swedish Rescue Services Agency (1998).
CONCLUSIONS
A combination of full-scale tests and a literature survey of concrete frame corners
subjected to closing or opening moment has been carried out to evaluate the usage of a new
reinforcement proposal, using reinforcement loops spliced within the corner, in Swedish civil
defence shelters.
Although there is a greater risk of spalling of the side concrete cover, it was concluded that
it is suitable to replace the conventional detailing previously used in closing frame corners
with the new one. However, special care still has to be taken when using this kind of detailing
in beam-column connections where the effect of spalling can have large influences on the
final capacity.
It was found that the commonly accepted reinforcement detailing in opening corners, using
inclined bars at the inside of the corner, may not be as effective as previously believed; its
efficiency largely depends on the applied moment distribution and the detailing of the

-- 200 of 242 --

I-20
reinforcement just outside the corner area. A similar effect can instead be obtained by the
presence of extra reinforcement loops, thus making the detailing easier to carry out. Further, it
was found that even though full efficiency of such a corner detailing may not be achieved,
ductile behaviour may very well still be obtained. While the test series is quite limited, it still
indicates that the post-peak response of opening frame corners depends to a large degree on
the amount of reinforcement loops, whereas the influence of any inclined bars seems to be
small.
The work presented has, in combination with non-linear finite element analyses resulted, in
a change of the previous Shelter Regulations so that the detailing evaluated here now is also
valid for use in the design of civil defence shelters in Sweden.
ACKNOWLEDGEMENTS
The research presented in this paper was financed by the Swedish Rescue Services Agency.
The author would like to thank Professor Kent Gylltoft, head of the Division of Concrete
Structures, for his support and advice. Special thanks are due to Björn Ekengren at the
Swedish Rescue Services Agency and Dr. Mario Plos at Reinertsen Engineering for their
much appreciated and encouraging support in the project. The author would also like to
express 	his 	gratitude 	to 	Stefan 	Karlsson 	and 	Mathias 	Johansson 	for 	their 	valuable
contributions in the testing and evaluation of the opening frame corners. Thanks also to the
staff 	of 	the 	Structural 	Engineering 	Laboratory, 	for 	their 	invaluable 	assistance 	in 	the
experimental part of this work.
NOTATIONS
As 	reinforcement area
As* effective reinforcement area when inclined bars are considered
As,i 	reinforcement area of inclined bars
b 	width
C 	compressive force
d 	effective height
F 	load
Fs 	force in reinforcement loops
Fs* effective force when inclined bars are considered
Fs,i 	force in inclined bars
f c 	concrete
f c,cube 	compressive cube strength of concrete
f c,cyl 	compressive cylinder strength of concrete

-- 201 of 242 --

I-21
f sy 	reinforcement yield strength
Muc 	estimated moment capacity
Mut 	maximum moment obtained in test
R 	resultant force
T 	tensile force
δ 	displacement
ρ 	reinforcement ratio
φ 	diameter
ωs 	mechanical reinforcement ratio
REFERENCES
Abdul-Wahab, H. M. S., and Al-Roubai, A. A. M., “Strength and behaviour of steel fibre
reinforced 	concrete 	corners 	under 	opening 	bending 	moment, 	”Magazine 	of 	Concrete
Research, V. 50, No. 4, Dec. 1998, pp. 305-318.
Abdul-Wahab, H. M. S., and Salman, S.A.R., “Effect of Corner Angle on Efficiency of
Reinforced Concrete Joints under Opening Bending Moment,” ACI Structural Journal V. 96,
No. 1, Jan-Feb. 1999, pp. 115-121.
ACI Committee 315, “Details and Detailing of Concrete Reinforcement (ACI 315-92),”
American Concrete Institute, Farmington Hills, Mich., 1999.
Balint, P. S., and Taylor, H. P. J., “Reinforcement Detailing of Frame Corner Joints with
Particular Reference to Opening Corners, ”Technical Report 42.462, Cement and Concrete
Association, London, 1972, 16 pp.
Boverket, “Boverkets handbok för Betongkonstruktioner BBK 94, Band 1, Konstruktion
(Boverket's 	Handbook 	for 	Concrete 	Structures, 	BBK 	94, 	Vol. 	1, 	Design),” 	Boverket,
Byggavdelningen, Karlskrona, Sweden, 1994, 185 pp. (in Swedish)
BST Byggstandardiseringen, “Betongprovning med Svensk Standard, BST handbok 12,
utgåva 6 (Concrete Testing according to 	Swedish 	Standard, 	BST 	Handbook 	12, 	sixth
edition),” SIS – standardiserings-kommisionen i Sverige och Svensk Byggtjänst, Stockholm,
Sweden, 1991, 285 pp. (in Swedish)
Eurocode 2, “Design of concrete structures Part 1: General rules and rules for buildings,”
European Committee for Standardisation, 1991, 253 pp.
Grassl, P., “Splicing of Reinforcement Loops in Beams: Experiments and Non-linear Finite
Element Analyses,” Division of Concrete Structures, Chalmers University of Technology,
Master Thesis 99:4, Göteborg, Sweden, 1999.
Jackson, N., “Design of reinforced concrete opening corners,” The Structural Engineer,
Vol. 73, No. 13, July 1995, pp. 209-213.

-- 202 of 242 --

I-22
Johansson, J. P. M., and Karlsson, S., “Nytt armeringsutförande i betongramhörn utsatta
för positivt moment (New Reinforcement Detailing in Concrete Frame Corners Subjected to
Positive Moment),” Division of Concrete Structures, Chalmers University of Technology,
Master Thesis 97:5, Göteborg, Sweden, 1997. (in Swedish)
Johansson, M., “New Reinforcement Detailing in Concrete Frame Corners of Civil
Defence 	Shelters: 	Non-linear 	Finite 	Element 	Analyses 	and 	Experiments,” 	Division 	of
Concrete Structures, Chalmers University of Technology, Licentiate Thesis 96:1, Göteborg,
Sweden, 1996.
Johansson M., “Non-linear Finite Element Analyses of Concrete Frame Corners,” ASCE
Journal on Structural Engineering in Feb. V. 126, No. 2, Feb. 2000a, pp. 190-199.
Johansson M., “Structural Behaviour in Concrete Frame Corners of Civil Defence Shelters:
Non-linear Finite Element Analyses and Experiments”, Division of Concrete Structures,
Chalmers University of Technology, Ph.D. Thesis, Göteborg, Sweden. To be published in
Mar. 2000b.
Kordina, 	K., 	and 	Fuchs, 	G., 	“Untersuchungen 	zur 	Anwendung 	von 	hakenförmigen
Übergreifungsstößen in Rahmenecken (Examination of the use of Reinforcement Loops in
Frame Corners,” Institut für Baustoffkunde und Stahlbetonbau, Der Technischen Universität
Braunschweig, Braunschweig, Germany, 1970. (in German)
Lundgren, K., “Static Tests of Frame Corners Subjected to Closing Moments,” Division of
Concrete Structures, Chalmers University of Technology, Report 99:2, Göteborg, Sweden,
1999.
Luo, Y. H.; Durrani, A. J.; Bai, S.; and Yuan, J., “Study of Reinforcing Detail of Tension
Bars in Frame Corner Connections,” ACI Structural Journal, V. 91, No. 4, July-Aug. 1994,
pp. 486-496.
Mayfield, B.; Kong, F. K.; Bennison, A.; and Davies, J. C. D. T., “Corner Joint Details in
Structural Lightweight Concrete,” ACI Journal, V. 68, No. 5, May 1971, pp. 366-372.
Mayfield, B.; Kong, F. K.; and Bennison, A., “Strength and Stiffness of Lightweight
Concrete Corners,” ACI Journal, V. 69, No. 7, July 1972, pp. 420-427.
Nilsson, I. H. E., “Reinforced concrete corners and joints subjected to bending moment.”
National Swedish Institute for Building Research, Document D7:1973, Stockholm, Sweden,
1973.
Nilsson, I. H. E., and Losberg, A., “Reinforced Concrete Corners and Joints Subjected to
Bending Moment,” ASCE Journal of the Structural Division, V. 102, No. 6, June 1976, pp.
1229-1254.
Noor, F.A., “Ultimate Strength and Cracking of Wall Corners,” Concrete, Cement and
Concrete Association, London, July 1977, pp. 31-35.

-- 203 of 242 --

I-23
Plos, M., “Splicing of Reinforcement in Frame Corners -Experimental Studies,” Nordic
Concrete Research, Publ. No. 14, The Nordic Concrete Federation, Norsk Betongforening,
Oslo, Norway, 1994, pp. 103-121.
Skettrup, E.; Strabo, J; Andersen, N. H.; and Brondum-Nielsen T., “Concrete Frame
Corners,” ACI Journal, V. 81, No. 6, Nov-Dec. 1984, pp. 587-593.
Stroband, J., and Kolpa, J. J., “The behaviour of reinforced concrete column-to-beam
joints, Part 1: Corners Subjected to Negative Moments,” Stevin Laboratory, Delft University
of Technology, Report 5-83-9, Delft, The Netherlands, 1983, 105 pp.
Stroband, J.; and Kolpa, J. J., “The Behaviour of Reinforced Concrete Column-to-Beam
joints, Part 2: Corners Subjected to Positive Moments,” Stevin Laboratory, Delft University of
Technology, Report 5-81-5, Delft, The Netherlands, 1981, 103 pp.
Swann, R. A., “Flexural Strength of Corners of Reinforced Concrete Portal Frames,”
Technical Report TRA 434, Cement and Concrete Association, London, 1969.
Shelter Regulations, “Shelter Regulations, SR English edition,” Swedish Rescue Services
Agency, Publication B54-168/94, Karlstad, Sweden, 1994, 94 pp.
Shelter Regulations, “Skyddsrumsregler SR – Produktion och vidmakthållande (Shelter
Regulations – Production and Maintenance),” Swedish Rescue Services Agency, Publication
B54-141/98, Karlstad, Sweden, 1998, 167 pp. (in Swedish)
Östlund, L., “Inverkan av bockningsradier och täckande betongskikt hos kamstål på
spjälkningsrisken för armerade betongkonstruktioner (The Influence of Bending Radius and
Concrete Cover for Deformed Bars on the Risk of Splitting Failure in Reinforced Concrete
Structures),” The Royal Institute of Technology, Stockholm, Sweden, 1963. (in Swedish)

-- 204 of 242 --

190 / JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000
NONLINEAR F INITE-E LEMENT A NALYSES OF CONCRETE
FRAME CORNERS
By Morgan Johansson1
ABSTRACT: 	A research project is currently being conducted to evaluate a new reinforcement detailing in frame
corners in civil defense shelters where all reinforcement bars are spliced within the frame corner. As part of
this, full-scale frame corners subjected to negative bending moment were tested and analyzed using the nonlinear
finite-element program DIANA. A concrete material model based on nonlinear fracture mechanics to take crack-
ing into account and plasticity models for concrete in compression and reinforcement steel were used. An
interface model accounted for the bond-slip relation between reinforcement and surrounding concrete. Parameters
that varied in the study were reinforcement detailing, reinforcement ratio, the effects of the weakness of the
construction joint, and the interaction between reinforcement and concrete. Tests and finite-element analyses
support the idea that the new reinforcement detailing is appropriate to use. Furthermore, it was found that the
effect on the maximum load capacity of different bond-slip relations, the weakness of the construction joint,
and incorrect positioning of the reinforcement bars in the corner were negligible.
INTRODUCTION
A concrete frame structure’s bearing capacity and ability to
exhibit ductile behavior are highly dependent on the reinforce-
ment detailing of the joint connections between its indepen-
dent members, such as beams and columns. Accordingly, to
obtain a sound structural behavior, the joints must be con-
structed to be at least as strong as the structural members con-
nected to them and show ductile behavior in the ultimate limit
state. Even though the reinforcement detailing required for
such joint behavior is not obvious, only a few experimental
studies on different reinforcement detailings for frame corners
subjected to positive (opening of the corner) or negative mo-
ment (closing of the corner) have been reported (Swann 1969;
Mayfield et al. 1971, 1972; Balint and Taylor 1972; Nilsson
1973; Stroband and Kolpa 1983; Skettrup et al. 1984; Luo et
al. 1994; Plos 1995; and Abdul-Wahab and Al-Roubai 1998),
and of these, only Plos and Gylltoft (1998) combined the ex-
perimental work with the use of nonlinear finite-element (FE)
analyses.
In the present Swedish shelter regulations (Shelter 1994),
the reinforcement detailing allowed for the design of frame
corners in civil defense shelters, which are subjected to neg-
ative moment, is time consuming and quite difficult to carry
out correctly. Consequently, there is a need for a simpler re-
inforcement detailing to be used. Therefore, a new design pro-
posal, in which all the reinforcement bars are spliced within
the corner area, was worked out (Fig. 1). This detailing is
similar to that proposed by Nilsson for corners subjected to
positive moment; the difference is that the inclined bars at the
inside of the corner used by Nilsson are removed. However,
this is justified since the presence of inclined reinforcement at
the inside of a corner subjected to negative moment will only
have a negligible effect on the moment capacity of the struc-
ture. Furthermore, tests on opening corners by Johansson and
Karlsson (1997) showed that inclined bars could be replaced
by a corresponding amount of reinforcement loops, and the
structural behavior would still remain approximately the same.
The aim of this study is to evalaute the new design proposal
1 Grad. Student, Div. of Concrete Struct., Chalmers Univ. of Technol.,
S-412 96 Go¨teborg, Sweden.
Note. Associate Editor: David J. Stevens. Discussion open until July
1, 2000. To extend the closing date one month, a written request must
be filed with the ASCE Manager of Journals. The manuscript for this
paper was submitted for review and possible publication on April 7, 1998.
This paper is part of the Journal of Structural Engineering, Vol. 126,
No. 2, February, 2000. qASCE, ISSN 0733-9445/00/0002-0190–0199/
$8.00 1 $.50 per page. Paper No. 18062.
and to determine whether it is appropriate to replace the con-
ventional reinforcement detailing with the new kind. The ser-
vice criterion set is that the new reinforcement detailing must
withstand loading at least as well as the conventional detailing
so that a safe and ductile structure is obtained. To examine the
effectiveness of the new detailing, a combination of experi-
ments and nonlinear FE analyses were carried out. The param-
eters that varied in the tests were the reinforcement detailing,
the reinforcement ratio, the reinforcement type, and the con-
figuration of the reinforcement bars. FE analyses were used to
compare the new and conventional reinforcement detailing.
Furthermore, the effects of different interactions between re-
inforcement and concrete, the weakness of the construction
joint, and the consequence of incorrect positioning of the re-
inforcement loops in the new detailing were examined using
this method.
EXPERIMENTS
The emphasis of this paper is on nonlinear FE analyses;
therefore, the tests are only briefly described. [More detailed
information about the tests can be found in Plos (1995) and
Johansson (1996)].
To gain a better understanding of the behavior of frame
corners under loading to failure, two test series, each consist-
ing of four full-scale specimens, were carried out. Two
specimens were reinforced with the conventional reinforce-
ment detailing and six with the new proposal (Table 1). The
amount of reinforcement used (hot-rolled, deformed bars) cor-
responded approximately to the maximum and minimum
amount of reinforcement allowed in the Swedish shelter reg-
ulations (Shelter 1994). Concrete quality with a target cylinder
compressive strength of 30 MPa was used in all specimens.
Fig. 2 shows the dimensions of the specimens and the test
setup.
The load-displacement relations for the tests are shown in
Fig. 3. Specimens RV1–RV4 were tested by Plos in the first
test series. In this series, the specimens with new detailing
(RV2 and RV4) had an unequal amount of reinforcement in
the sections adjacent to the frame corner (Table 1). This was
the reason for the somewhat lower load capacity obtained for
these specimens compared with that of the specimens with the
conventional detailing. In the second test series, the specimens
with a high reinforcement ratio (RV5 and RV6) did not reach
the load capacity expected due to spalling of the side concrete
cover; this was also the reason the plateau in the load-dis-
placement relation observed for the other specimens did not
appear.

-- 205 of 242 --

JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000 / 191
FIG. 1. 	Detailing of Reinforcement According to: (a) Conventional Method; (b) New Alternative. Extra 25% of Reinforcement at Cor-
ner Area Is Only Necessary If There Is Construction Joint Present
TABLE 1. 	Reinforcement Amount and Configurations for Test Specimensa
Test
specimen
(1)
Bar diameter
(mm)
(2)
Number of Reinforcement Bars
Beam
and column
(3)
Frame corner
(loops)
(4)
Reinforcement
detailing
(5)
Tensile strength
(MPa)
(6)
RV1 b 	16 	2 3 6 	2 3 8 	Conventional 	473
RV2 b 	16 	2 3 6 	2 3 6/2 3 8 d 	New 	473
RV3 b 	10 	2 3 4 	2 3 5 	Conventional 	504
RV4 b 	10 	2 3 4 	2 3 4/2 3 5 d 	New 	504
RV5 c 	16 	2 3 5 	2 3 7 	New 	567
RV6 c 	16 	2 3 5 	2 3 7 	New 	567
RV7 c 	10 	2 3 3 	2 3 4 	New 	573
RV8 c 	10 	2 3 3 	2 3 4 	New 	573
a Same number of reinforcement bars was placed on both compressive and tensile sides of beam and column.
b Reinforcement type Ks 40 S used— f yk = 400 MPa, tested by Plos (1995).
c Reinforcement type K500 used— f yk = 500 MPa.
d Number of bars were higher in column than in beam.
FIG. 2. 	Dimensions of Specimens and Test Setup. Concrete Cover Was Equal to 1.5f, Where f Is Bar Diameter Used, in All Speci-
mens
NONLINEAR FE ANALYSES
General
To study the structural behavior of the frame corner more
thoroughly, the FE method was used. In this method, the con-
crete material models are based on nonlinear fracture mechan-
ics (Hillerborg et al. 1976), to account for cracking, and plas-
ticity models are used for the concrete in compression and the
steel reinforcement. Hereby, it is possible to evaluate the
stresses and deformations of a structure more thoroughly than
can be done experimentally. Accordingly, the use of nonlinear
FE analyses will result in a better understanding of the me-
chanical behavior in a structure during loading to failure.
The specimens of the second test series were analyzed using
the FE program DIANA (DIANA 1993). The 2D plane stress
models were used to simulate the concrete. The cracking of
the concrete was modeled using the smeared crack concept
with nonorthogonal fixed cracks. Plasticity models accounted
for the nonlinearity of concrete in compression and the steel
reinforcement. The specimens were modeled at two different
levels of detail. A relatively coarse mesh, with the assumption
of a perfect bond between the reinforcement bars and the con-
crete, was used to simulate the general response of the spec-
imens. To compare the new and the conventional reinforce-
ment detailings, a refined element model with a finer mesh
was used, taking into account the interaction between rein-
forcement and concrete. In the tests of specimens with high
reinforcement ratio, the side concrete cover in the corner area
spalled off. As this behavior could not be simulated in the FE
models used, these specimens were analyzed using only the

-- 206 of 242 --

192 / JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000
FIG. 3. 	Load-Displacement Relations for Test Specimens. Specimens RV1–RV4 Were Tested by Plos (1995)
FIG. 4. 	Definition of Element Length lelement
less detailed model. In this paper only the more detailed anal-
yses of specimens with low reinforcement ratio are presented.
[A more thorough description of the analyses can be found in
Johansson (1996).]
Modeling of Concrete
In the analyses used here, cracking is taken into consider-
ation by using a constant stress cutoff criterion. This means
that once the maximum principal tensile stress reaches the ten-
sile strength, independent of the other principal stresses, a
crack is initiated perpendicular to the principal stress. The ori-
entation of the crack is then stored and the material response
perpendicular to the crack is determined by a stress-strain re-
lation for the cracked material volume. Additional cracks may
appear at the same location, but their formation is restricted
to a minimum angle (here, set at 607) to previous cracks.
To simulate the softening curve of the concrete, a bilinear
stress-crack opening relation according to recommendations
given in Gylltoft (1983) was used. The fracture energy GF and
the tensile strength ft were used to calculate the value of the
ultimate crack opening wu. A three-point bending test accord-
ing to the recommendations of RILEM 50-FMC (1985) deter-
mined the fracture energy of the concrete. The tensile strength
ft used in the analyses was determined from the compressive
strength f c according to CEB-FIP Model Code (CEB-FIP
1993)
2/3	
f = 0.30( f ) 	(1)	t 	c
In the refined model the analyses took into account the in-
teraction between the reinforcement and the concrete in the
region close to the corner where cracking of the concrete was
expected. Hereby, the crack distribution was given by the anal-
ysis, and since the smeared cracking of each element repre-
sents the development of one real crack, the stress-strain re-
lation of the cracked concrete depends on the length of the
FE. Therefore, in this region, the crack width was divided by
the element lengths to determine the softening stress-strain re-
lation used in the analyses. This length lelement was approxi-
mated as the length perpendicular to an assumed crack direc-
tion as shown in Fig. 4. Outside the corner area, this direction
was set to be perpendicular to the direction of the beam and
column, respectively. Within the corner the cracks were as-
sumed to be ‘‘pointing’’ at the inside of the corner.
In the regions where perfect bonding between the reinforce-
ment and concrete was assumed, the stress-strain relation for
the concrete was determined by dividing the ultimate crack
opening by the mean crack distance s m (0.2 m) observed in
the tests. However, as an approximation to consider the higher
stiffness in the structure due to the effects of tension stiffening
(Plos 1995), the gradient of the descending part of the stress-
strain curve was halved for the concrete where perfect bond
was assumed.
In compression, the response of the concrete was taken into
account by an elastic-plastic model. The elastic stress-state was
limited by a Drucker-Prager yield surface. Once yielding had
occurred, an associated flow rule with isotropic hardening was
used. In DIANA, this yield surface is evaluated from the cur-
rent stress state, the angle of internal friction f, and the co-
hesion c. In accordance with recommendations given in the
DIANA manual, the angle of internal friction in concrete was
approximated to be f = 307. The cohesion c used in the anal-
yses was calculated as
1 2 sin f	p
	c = f (ε 	) 	(2)	c uniaxial
2 cos f
where 	was the compressive strength as a function of	p
	f (ε 	)	c 	uniaxial
the plastic strain in the direction of the uniaxial stress. The
stress-strain relations up to the peak stress were determined on
standard uniaxial tests on cylinders in which concrete from the
same batch as the test specimens was used. In these tests the
stress-strain relation could only be registered up to the maxi-
mum strength. Therefore, the postpeak behavior of the con-
crete was evaluated using the cylinder compression strength
according to recommendations in CEB-FIP Model Code. Pois-
son’s ratio was approximated to be 0.20.
In Fig. 5, the stiffness used in the analyses for unloaded

-- 207 of 242 --

JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000 / 193
FIG. 5. 	Stiffness Used in Analyses for Unloaded Concrete in Compression and Tension (lelement 5 s m /2 When Perfect Bond Is As-
sumed)
TABLE 2. 	Material Properties for Concrete Used in Analyses
Object
(1)
Ec
(GPa)
(2)
f c
(MPa)
(3)
f t
(MPa)
(4)
G f
(N/m)
(5)
Column 	24.6 	27.8 	2.7 	108
Beam 	23.5 	33.8 	3.1 	66
FIG. 6. 	Bond-Slip Relations Used in Analyses for Interaction in Column
concrete in tension and compression is shown. When the
cracked concrete is unloaded, the secant unloading modulus is
used as tangent stiffness so that the strain across the crack is
reduced linearly to zero as the stress approaches zero. When
concrete in compression is unloaded, the initial elastic stiffness
is used. The material properties of the concrete used in the
analyses are shown in Table 2.
Modeling of Reinforcement
The von Mises yield criterion with associated flow and iso-
tropic strain hardening was used to describe the constitutive
behavior of the reinforcement bars. These were modeled with
either the DIANA option ‘‘embedded reinforcements’’ or, ac-
cording to recommendations given in the DIANA-manual,
separate steel elements using truss elements. In the embedded
reinforcement option, the reinforcement does not have separate
degrees of freedom; instead, the strength and stiffness of the
concrete elements are increased in the direction of the embed-
ded reinforcement. With this model, perfect bonding is as-
sumed between the reinforcement and the surrounding mate-
rial. When the interaction between the reinforcement and the
concrete was taken into consideration, the reinforcement bars
were modeled by separate elements, using truss elements in
combination with interface elements. The mechanical proper-
ties of the reinforcement were Young’s modulus E s = 191 GPa;
yield strength f sy = 573 MPa; ultimate strength fsu = 675 MPa,
strain at hardening εsh = 2.8%; and strain at maximum stress
εsu = 12.0%.
In DIANA, the bond-slip relation between the reinforcement
and the concrete is modeled using interface elements. In these
elements, the bond stresses only depend on the longitudinal
slip; the stresses normal to the bar are described with a stiff
linear relation to the deformations in this direction. Conse-
quently, splitting failures cannot be modeled. Instead, the ef-
fect of splitting has to be included in the nonlinear bond-slip
relation. The bond-slip relation between the reinforcement and
the concrete was approximated according to the CEB-FIP
Model Code (CEB-FIP 1993). Here, the effect of splitting
cracks is taken into account by giving different bond-slip re-
lations for confined and unconfined concrete. Furthermore, the
code differs between two different bond qualities: ‘‘good’’ and
‘‘other.’’ Because no splitting cracks were observed in the test
specimens with low reinforcement ratio, ‘‘confined concrete’’
was assumed in the analyses. However, according to Engstro¨m
(1992), the bond stress decreases considerably when the re-
inforcement steel yields. In the bond-slip relation proposed by
Engstro¨m, the bond stress is not given explicitly but depends
on when the steel reinforcement yields. The principal bond-
slip relation for this yield case is similar to the relation given
when ‘‘unconfined concrete’’ is assumed; therefore, as an ap-
proximation, ‘‘unconfined concrete’’ was assumed for the re-
inforcement bars positioned close to the corner where yielding
of the reinforcing steel was likely to occur. To study the effect

-- 208 of 242 --

194 / JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000
FIG. 8. 	Crack Patterns Obtained for Test Specimens: (a) RV7; (b) RV8
FIG. 7. 	FE Mesh and Modeling of Reinforcement Bars of Frame Corner with: (a) New Reinforcement Detailing; (b) Conventional De-
tailing
of the structural behavior of various bond-slip relations, both
good and other bond conditions were used in the analyses. To
illustrate the essential difference of the bond qualities and
bond conditions mentioned above, the bond-slip relations used
within the column are shown in Fig. 6.
FE Models
In the FE analyses, 2D plane-stress first-order elements were
used to model the concrete. A Gauss integration scheme with
2 3 2 integration points were used. To enhance the bending
behavior 	of 	the 	elements, 	selective 	reduced 	integration
(Hughes 1987) was used when evaluating the shear. Hereby,
the shear strains are evaluated in the element midpoint only,
and the shear locking, usually encountered when using fully
integrated elements of the first order, can be avoided. To com-
pare the effect of the new and the conventional reinforcement
detailing, two different models, with a total of 322 and 336
elements, respectively, were used (Fig. 7). Two-node truss el-
ements in combination with four-node interface elements, a
total of 137 and 203 each, for the new and conventional de-
tailing, respectively, were used to model more accurately the
reinforcement bars within 1.0 m of the corner. Outside this
area, the reinforcement bars were modeled with embedded re-
inforcement. The material parameters for concrete and rein-
forcing steel were identical in both models.
Furthermore, the effect of the weakness in the construction
joint on the structural behavior of the frame corner was ex-
amined. The test specimens were cast with a construction joint
(Fig. 2). The test results indicated that this joint exhibited a
zone of weakness in the material in which cracking first oc-
curred. This was modeled by reducing the tensile strength and
the fracture energy of the concrete modeling the construction
joint. Thus, the first crack was made to form at the same place
as in the tests, and because this crack was observed at a load
level approximately half of that expected, the tensile strength
and fracture energy of the concrete modeling the construction
joint were reduced to 50%. Furthermore, to study the effect
of the weakness in the construction joint, an FE analysis with
tensile strength and fracture energy reduced to 90%, compared
with that used in the rest of the model, was also carried out
for both reinforcement detailings. By using this slight weak-
ness, the first crack was still made to form at the same place
as in the tests.
Unless otherwise stated, good bond condition and a con-
struction joint strength of 50%, compared with that in the rest
of the model, were used in the FE analyses.
Numerical Procedure
A displacement-controlled incremental loading was applied
in the FE analyses to model the load of the structure. Two

-- 209 of 242 --

JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000 / 195
FIG. 11. 	Distribution of Tensile Stresses in Reinforcement Bars in Frame Corner for Tests and FE Analyses (New Reinforcement De-
tailing)
FIG. 10. 	Load-Displacement Relations for Tests and FE Analyses with New Reinforcement Detailing. Values between Brackets Show
Strength of Concrete Modeling Construction Joint
FIG. 9. 	Crack Pattern at End of Analyses for Frame Corner with New Reinforcement Detailing When Assuming Two Bond Conditions:
(a) Good; (b) Other
different iteration methods, the modified Newton-Raphson
method and the BFGS (Broyden-Fletcher-Goldfarb-Shanno)
secant stiffness method [e.g., Bathe (1996)], were tested. It
was found in the more detailed analyses that the former
method gave a somewhat smoother load-displacement relation
than that achieved with the latter. However, the difference in
the results obtained when using these methods was negligible,
and because fewer numerical problems were encountered with
the BFGS method, this was the iteration method mainly used.
To check the quality of the solution within each increment, a
tolerance given as a percentage (usually 0.01%) of the energy
norm was used as the convergence criterion.
Results
In the first stage of the analyses, the bond condition corre-
sponding to that of the test specimens was to be determined.

-- 210 of 242 --

196 / JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000
FIG. 13. 	Crack Propagation in Corner Area for Conventional Reinforcement Detailing at Load Levels Marked in Fig. 12
FIG. 12. 	Comparison of Load-Displacement Relations for Frame Corners Carried Out with New and Conventional Reinforcement De-
tailing. Crack Propagation in Corner at Marked Points, (a) to (d), Is Shown in Fig. 13.
Two criteria can be used for this determination: (1) The mean
spacing of the major cracks observed in the test specimens;
and (2) the load-displacement relation obtained in the tests.
The former criterion was assumed to be the better one to use
because some factors of uncertainty, such as the fracture en-
ergy and the generally stiffer behavior of the FE analysis, have
less effect on it. The crack pattern and load-displacement re-
lations of the analyses were compared with those obtained in
the tests (Figs. 8 to 10). The FE analysis assuming good bond
condition showed the best agreement with the mean crack
spacing of 0.2 m observed in the tests. Therefore, a bond-slip
relation corresponding to this one was assumed to be the clos-
est to that of the test specimens even though the load-displace-
ment relation was somewhat stiff in comparison with the tests.
The distribution of the tensile stresses along the reinforce-
ment loops, when yielding of the steel reinforcement has just
occurred is presented in Fig. 11. The difference in the distrib-
uted tensile stresses observed for the different bond-slip rela-
tions was due to the different appearance of major cracks in
the column and the beam near the corner area.
In Fig. 12, the load-displacement relation of the FE analyses
for the frame corner with the new reinforcement detailing is
compared with that of the frame corner with the conventional
reinforcement detailing. The crack propagation and the distri-
bution of tensile stresses along the reinforcement bars at the
corner are shown in Figs. 13 and 14 for the frame corner with
conventional detailing at displacements between 26 and 32
mm.
Discussion of Results
The results of the FE analyses corresponded quite well with
the results from the experiments; the behavior was similar for
both the maximum load capacity obtained and the stiffness of
the structure. Furthermore, the crack pattern and positioning
of the plastic hinges in the detailed analyses corresponded very

-- 211 of 242 --

JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000 / 197
FIG. 14. 	Distribution of Tensile Stresses in Reinforcement Bars in Frame Corner Carried Out with Conventional Reinforcement De-
tailing. Tensile Forces Are Shown at Same Load Levels Marked in Fig. 12
well with those observed in the test specimens with both the
new and conventional reinforcement detailings. However, it
was not possible to predict the behavior of the frame corner
throughout total failure. This was because all analyses of the
frame corner were disrupted due to numerical problems when
the compression strength of the concrete was reached at one
integration point in the corner area. At this stage, yielding of
the reinforcement bars had occurred and, in some cases, also
started to harden.
In Fig. 10 it can be seen that the stiffness of the structure
is affected by the bond-slip relation up to the point at which
the steel reinforcement yields: the higher the stiffness of the
bond-slip relation, the higher the stiffness of the structure.
However, the effect of the bond-slip relation on the load ca-
pacity was negligible. Furthermore, the FE analyses indicate
that, if rupture of the reinforcement bars is the cause of failure,
then the deformation capacity of the frame corner would be
lower for a stiffer bond-slip relation. The influence of the
weakness of the construction joint in the frame corner was
limited to the initial cracking stage and had a negligible effect
on the general behavior of the structure. In Johansson (1996)
it is shown that these statements also hold true for a frame
corner made with the conventional reinforcement detailing.
In Fig. 12 it can be seen that the structural behavior of the
frame corners with the new and conventional detailing was
similar up to a load of about 40 kN, at which point the rein-
forcement bars in the frame corner with new reinforcement
detailing started to yield. Due to a greater amount of reinforce-
ment in the sections adjacent to the corner [compare Figs. 7(a
and b)], the load capacity of the frame corner with conven-
tional reinforcement detailing continued to increase until yield-
ing was reached at a load level just below 50 kN. The sudden
loss of load capacity at a displacement of about 26 mm was
caused by a redistribution of forces. The critical crack section
moved from a region about 300 mm below the construction
joint (the section where the bent reinforcement bars, extending
from the beam, ended) into the corner (Fig. 13). This crack
behavior corresponded well with that observed in the test of
the frame corner with low reinforcement ratio and conven-
tional detailing (Plos 1995).
The frame corner with new reinforcement detailing showed
a similar symmetrical distribution of the tensile forces, with
yielding of the reinforcement bars in the sections adjacent to
the corner. This was not the case for the frame corner with the
conventional detailing. Due to the different amount of rein-
forcement used in the sections adjacent to the corner [Fig.
7(b)] the tensile forces were shifted into the leg below the
construction joint. However, the propagation of new cracks in
the corner caused the tensile forces in the reinforcement bars
to increase considerably (Fig. 14) and, thereby, obtain a force
distribution more similar to that observed in the frame corner
with the new detailing.
Accordingly, the FE analyses showed that a frame corner
with the conventional reinforcement detailing may have a
somewhat higher load capacity than a frame corner with the
new reinforcement detailing. However, this is only temporary
since a redistribution of forces soon occurs which reduces the
load capacity to a level similar to that obtained when using
the new reinforcement detailing. Thus, the load capacity is
approximately the same, independent of which of the two re-
inforcement detailings are used.
On the construction site, it sometimes happens that the re-
inforcement bars are not positioned according to the designers’
drawings. Therefore, an analysis of a frame corner with the
reinforcement loops in the column ‘‘mistakenly’’ positioned
approximately 90 mm below that shown in Fig. 7(a) was car-
ried out (Johansson 1996). It was found that this incorrect
positioning of the reinforcement loops in the new detailing had
a limited effect on the behavior of the frame corner, and that
the load capacity obtained from the analyses was found to be
approximately the same. Even though these results are not ver-
ified by tests, the analyses give an indication of the structural
behavior.
In the analyses of the test specimens, a state of plane stress
was assumed. However, in a real civil defense shelter structure,
a state of plane strain is possibly a more accurate assumption.
Therefore, to examine the behavior of a frame corner when
plane strain is assumed, a detailed analysis of a frame corner
with the new detailing was carried out. It was found that the
load capacity and structural behavior were similar for the
frame corner whether a state of plane stress or plane strain
was assumed. Consequently, because the state in a real struc-
ture is somewhere between plane stress and plane strain, the
analyses assuming plane stress presented here should be valid
for a frame corner in a real structure.
Suggestions for Improvements of Analyses
The results from the FE analyses showed a somewhat stiffer
behavior with a higher (approximately 10%) load capacity
than that observed in the tests. A possible reason for this might
be that the mesh is too coarse in the compressive zone at the
inside of the corner. By using a finer mesh and/or a different
integration rule [Newton-Cotes; e.g., see Bathe (1996)] in this
area, it might have been possible to better catch the response
of the concrete in compression, thus resulting in a less stiff
load-displacement behavior. Furthermore, a decrease of the
size of the load increments in the initial cracking stage or of
the allowable angle between cracks might have had a similar
positive effect.

-- 212 of 242 --

198 / JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000
FIG. 15. 	Comparison of Load-Displacement When Stress-Strain Relations in Compression Are Modified to Take into Account Length
of Elements. Different Values of Fracture Energy (Full and Halved) Were Used
The major problem encountered in the analyses was the
crushing of the concrete in one integration point. This caused
the analyses to stop at a displacement far lower than that ob-
served in the tests. A probable explanation for this is the brit-
tleness in the postpeak behavior of the concrete in compres-
sion. The essential stress-strain relation used for the concrete
in compression is shown in Fig. 5. However, van Mier (1984)
showed that the postpeak behavior of concrete is due to a
localization in the material. Consequently, the stress-strain re-
lations used in the analyses for concrete in compression
should, as is the case when dealing with cracking, also be a
function of the element length. This was not considered in the
analyses, which means that the postpeak stress-strain relations
used in compression are too brittle. The length of the standard
cylinders, used to evaluate the recommendations given in the
CEB-FIP Model Code, is 300 mm. This indicates that the
stress-strain relation given in the CEB-FIP Model Code should
be valid when the elements used in an analysis are 300 mm.
However, the length of the elements near the corner in these
analyses is 50 mm. Therefore, an analysis where this was taken
into consideration was carried out. The postpeak stress-strain
relation in compression was modified by a factor of 300/50 =
6 (i.e., after the peak the plastic strain was multiplied by 6).
However, this modification presumed that, when the compres-
sive strength is reached in one element, a localization will
occur and the adjacent elements unload elastically. This was
not the case in the analysis, which meant that a stiffer behavior
with an increasing load capacity (due to the hardening of the
reinforcement) was obtained (Fig. 15). Thus the analysis was
stopped (even though it could have been driven further) at a
displacement of about 75 mm. Even though these second
stress-strain relations were too ductile, the results from the
analyses indicate that a similar modification of the postpeak
behavior is correct. In what way this modification should have
been done instead has not been further studied within the
scope of the work presented here.
In Fig. 15, the importance of the fracture energy is also
shown (the stress-strain relations in compression are still mod-
ified as described above). It was found that the behavior of
the frame corner was approximately the same independent of
the fracture energy used in the analyses. However, when using
a lower value (halved) on the fracture energy a better corre-
spondence in the load-displacement relation was obtained, thus
indicating that the tensile stress-strain relation used in the anal-
yses was somewhat too ductile. This can be due to several
reasons such as different sizes and curing conditions of the
specimens used in the tests and those used to measure the
fracture energy. It can also be due to the method used when
determining the element length lelement as described in Fig. 4.
CONCLUSIONS
A new design proposal in concrete frame corners in civil
defense shelters has been studied using full-scale tests in com-
bination with nonlinear FE analyses. The parameters studied
were the reinforcement detailing, the reinforcement ratio, the
effects of the weakness of the construction joint, and the in-
teraction between reinforcement and concrete.
The tests and the FE analyses conducted have shown that
the conventional and the new reinforcement detailings for
practical purposes are equivalent for a frame corner structure
with a low amount of reinforcement. Comparisons of tests and
FE analyses indicate that this is also the case for a frame cor-
ner with a high amount of reinforcement. Thus, the tests and
analyses support the idea that the new alternative is suitable
to use instead of the conventional reinforcement detailing.
The FE analyses have shown that the stiffness of the struc-
ture is affected by the bond-slip relation up to the point at
which the steel reinforcement starts to yield: the higher the
stiffness of the bond-slip relation, the higher the stiffness of
the structure. When rupture of the reinforcement bars is the
cause of final failure, a weak bond-slip relation has a positive
effect on the deformation capacity of the structure. However,
the maximum load capacity is relatively unaffected by the
bond-slip relation.
The weakness of the construction joint affects the structural
behavior of the frame corner only in the initial cracking stage;
its effect on the maximum load capacity is negligible. The FE
analyses showed that an incorrect positioning of the reinforce-
ment loops in one of the legs adjacent to the corner has a
limited effect on the maximum load capacity.
Due to localization in the postpeak region, the element
length should be considered when determining the concrete
stress-strain relations used in compression. However, there
does not seem to be a direct connection between what modi-
fication should be made and the length of the independent
element.
ACKNOWLEDGMENTS
The work presented was carried out at the Division of Concrete Struc-
tures, Chalmers University of Technology, Go¨teborg, Sweden, and was
financed by the Swedish Rescue Services Agency, Karlstad, Sweden. The

-- 213 of 242 --

JOURNAL OF STRUCTURAL ENGINEERING / FEBRUARY 2000 / 199
writer would like to thank his supervisor Prof. Kent Gylltoft for his guid-
ance and support. Special thanks are due to Bjo¨rn Ekengren and Magnus
Kjellman from the Swedish Rescue Services Agency and Mario Plos for
their enthusiastic encouragement and valuable help in the project.
APPENDIX I. 	REFERENCES
Abdul-Wahab, H. M. S., and Al-Roubai, A. A. M. (1998). ‘‘Strength and
behaviour of steel fibre reinforced concrete corners under opening
bending moment.’’ Mag. of Concrete Res., 50(4), 305–318.
Balint, P. S., and Taylor, H. P. J. (1972). ‘‘Reinforcement detailing of
frame corner joints with particular reference to opening corners.’’ Tech.
Rep. 42.462, Cement and Concrete Association, London.
Bathe, K. J. (1996). Finite element procedures. Prentice-Hall, Englewood
Cliffs, N.J.
CEB-FIP model code 1990, design code. (1993). Thomas Telford, Lau-
sanne, Switzerland.
DIANA, version 6.1 (1996). Dept. of Engrg. Mech. and Information Tech-
nol., TNO Building and Construction Research, Delft, The Netherlands.
Engstro¨m, B. (1992). ‘‘Ductility of tie connections in precast structures,’’
PhD thesis, Div. of Concrete Struct., Chalmers University of Technol-
ogy, Go¨teborg, Sweden.
Gylltoft, K. (1983). ‘‘Fracture mechanics models for fatigue in concrete
structures,’’ PhD thesis, Div. of Struct. Engrg., Lulea˚ University of
Technology, Lulea˚, Sweden.
Hillerborg, A., Mode´er, M., and Petersson, P.-E. (1976). ‘‘Analysis of
crack formation and crack growth in concrete by means of fracture
mechanics and finite elements.’’ Cement and Concrete Res., 6(6), 773–
782.
Hughes, T. J. R. (1987). The finite element method—Linear static and
dynamic finite element analyses. Prentice-Hall, Englewood Cliffs, N.J.
Johansson, M. (1996). ‘‘New reinforcement detailing in concrete frame
corners of civil defence shelters: Non-linear finite element analyses and
experiments,’’ Licentiate thesis, Div. of Concrete Struct., Chalmers
University of Technology, Go¨teborg, Sweden.
Johansson, M., and Karlsson, S. (1997). ‘‘New reinforcement detailing in
concrete frame corners subjected to positive moment.’’ Rep. 97:5, Div.
of Concrete Struct., Chalmers University of Technology, Go¨teborg,
Sweden (in Swedish).
Luo, Y. H., Durrani, A. J., Bai, S., and Yuan, J. (1994). ‘‘Study of rein-
forcing detail of tension bars in frame corner connections.’’ ACI Struct.
J., 91(4), 486–496.
Mayfield, B., Kong, F. K., and Bennison, A., and Davies, J. C. D. T.
(1971). ‘‘Corner joint details in structural lightweight concrete.’’ ACI
J., 68(5), 366–372.
Mayfield, B., Kong, F. K., and Bennison, A. (1972). ‘‘Strength and stiff-
ness of lightweight concrete corners.’’ ACI J., 69(7), 420–427.
Nilsson, I. H. E. (1973). ‘‘Reinforced concrete corners and joints sub-
jected to bending moment.’’ Document D7:1973, National Swedish
Institute for Building Research, Stockholm, Sweden.
Plos, M. (1995). ‘‘Application of fracture mechanics to concrete bridges
—Finite element analyses and experiments,’’ PhD thesis, Div. of Con-
crete Struct., Chalmers University of Technology, Go¨teborg, Sweden.
Plos, M., and Gylltoft, K. (1998). ‘‘Nonlinear FE analyses of RC bridge
frame corners, based on fracture mechanics.’’ J. Bridge Engrg., ASCE,
3(4), 204–210.
RILEM 50-FMC Committee. (1985). ‘‘Determination of the fracture en-
ergy of mortar and concrete by means of three-point bend tests on
notched beams.’’ Mat. and Struct., 18(106), 285–290.
Shelter regulations, SR. (1994). English Ed., Publ. B54-168/94, Swedish
Rescue Services Agency, Karlstad, Sweden.
Skettrup, E., Strabo, J., Andersen, N. H., and Brondum-Nielsen, T. (1984).
‘‘Concrete frame corners.’’ ACI J., 81(6), 587–593.
Stroband, J., and Kolpa, J. J. (1983). ‘‘The behaviour of reinforced con-
crete column-to-beam joints, Part 1, Corners subjected to negative mo-
ments.’’ Rep. 5-83-9, Stevin Lab., Delft University of Technology,
Delft, The Netherlands.
Swann, R. A. (1969). ‘‘Flexural strength of corners of reinforced concrete
portal frames.’’ Tech. Rep. TRA 434, Cement and Concrete Association,
London.
van Mier, J. G. M. (1984). ‘‘Strain softening of concrete under multiaxial
loading conditions,’’ PhD thesis, Eindhoven University of Technology,
Eindhoven, The Netherlands.
APPENDIX II. 	NOTATION
The following symbols are used in this paper:
c = cohesion;
Ec = Young’s modulus for concrete;
Es = Young’s modulus for steel;
F = load;
fc = compressive strength of concrete;
fsu = ultimate strength of reinforcement;
fsy = yield strength of reinforcement;
ft = tensile strength of concrete;
fyk = characteristic yield strength of reinforcement;
GF = fracture energy;
lelement = length of FE as defined in Fig. 4;
s = slip;
sm = mean crack spacing;
wu = ultimate crack opening;
x = coordinate along reinforcement bars in corner region;
d = displacement;
εc = concrete strain;
εsh = strain at steel hardening;
εsu = strain at maximum steel stress;
εu = ultimate strain;
p	
ε uniaxial = plastic strain in direction of uniaxial stress;
sc = concrete stress;
t = bond stress; and
f = bar diameter, angle of internal friction.

-- 214 of 242 --

III-1
FE ANALYSES OF CONCRETE CIVIL DEFENCE SHELTERS
SUBJECTED TO TRANSIENT LOADING
By Morgan Johansson
ABSTRACT: Civil defence shelters subjected to a blast load from a nearby explosion or the
impact due to falling masses from a collapsing building were studied using the non-linear
finite element programme ABAQUS/Explicit. It was found that the most critical stage in the
shelter subjected to a blast load was during the first 10 ms. Further, it was observed that the
deformations obtained in the shelter subjected to falling masses largely depend on the time it
takes for the whole mass to hit the structure but, more importantly, also the mass of each
independent part hitting the structure. Nevertheless, in none of the analyses did any critical
cracks form within the corners, so it seems reasonable to believe that the response within a
transiently loaded corner will be similar to that obtained in a statically loaded structure. It was
concluded that even though the structural behaviour can differ a lot when subjected to
transient loads, locally there are still large similarities to that in static loading.
Keywords: Transient loading, blast load, impact load, civil defence shelter, non-linear finite
element analysis, dynamic, reinforcement detailings in corner
INTRODUCTION
From a safety point of view is it important that a concrete structure, apart from necessary
load capacity, also is able to show ductile behaviour that allows redistribution of forces so that
a total collapse of the structure can be avoided if local failure is obtained. The ability of a
concrete frame structure to meet these requirements depends much on the reinforcement
detailing of the joint connections between its independent members. In co-operation between
the Swedish Rescue Services Agency and the Division of Concrete Structures at Chalmers
University of Technology, such a reinforcement detailing, using reinforcement loops spliced
within the corner, has previously been evaluated for frame corners in civil defence shelters;
see Plos (1995), Johansson (1996, 2000a, 2000b) and Johansson and Karlsson (1997). Static
tests and non-linear finite element analyses have shown that it is feasible to replace the
conventional detailing with a new one. However, since a civil defence shelter is designed to
withstand transient loading, such as blast waves from an explosion and falling debris from
collapsing buildings, this has to be taken into consideration.

-- 215 of 242 --

III-2
When 	designing 	a 	civil 	defence 	shelter 	according 	to 	the 	present 	Swedish 	Shelter
Regulations (1998), it is considered as a statically loaded structure. But, whether this
approximation is appropriate has not been sufficiently examined. Therefore, the main aim of
the study was to gain more knowledge of how a civil defence shelter behaves when subjected
to transient loads such as those mentioned above. This was made possible by the use of non-
linear finite element analyses (FE analyses) in which cracking of the concrete and yielding of
the reinforcement were taken into account. Based on these analyses, another important
question was also to be answered: whether the conclusions drawn from the static tests and
analyses carried out in previous studies is correct also for such transient load cases?
Due to the shortage of space available, this paper just presents the major results and
findings in the study carried out; more information about the material presented herein may be
found in Johansson (1999).
SHELTERS STUDIED
In this paper, a study of two different load cases is presented: blast load (i.e. a weapon
load) from a nearby explosion, and impact load due to falling debris from a collapsing
building. The effect of the blast load is studied for a building with a low-weight (i.e. timber)
building on top, and the effect of the impact load is examined for the case when the shelter
has a three-story concrete building, of height 9.0 m and a mass 2,930 kg/m2 , standing on top
of it. The purpose of the timber building is mainly to motivate the lack of diffraction effects at
the top of the shelter roof (Baker 1973) and its dead weight is therefore neglected in the
analyses.
When designing a civil defence shelter in Sweden, equivalent static load cases are used.
For the weapon load this is represented by the long-term pressures (both positive and
negative) due to a nuclear detonation at long range and for the impact load an equivalent static
load based on the work by Hallgren and Granström (1977) is used; see Fig. 1. The magnitudes
of the static loads shown in Fig. 1, and used in the design for the cases studied here are
qweapon = 50 kN/m2 and qimpact = 86 kN/m 2 . The dimensions of the civil defence shelter and the
reinforcement amount required in a 1.0 m wide strip are shown in Fig. 2. These dimensions
fulfil the requirements set up in the Swedish 	Shelter 	Regulations 	that 	the minimum
reinforcement ratio shall be 0.14% and that the concrete wall and roof thickness shall be at
least 350 mm. The design values used were f cd = 21.5 MPa and f syd = 450 MPa for concrete in
compression and reinforcement yield strength, respectively.

-- 216 of 242 --

III-3
These static loads, though, are just simplifications used to make it easier to design the
shelter; the real loads acting on the shelter will be more similar to those shown in Fig. 3a. The
pressure, due to a nearby explosion, acting on the front shelter wall is highly transient and will
present a very large peak pressure but a short duration. On the other hand, the impact load
will be composed of falling debris hitting the shelter roof with a certain velocity.
q weapon
qweapon 	q weapon
q impact
a)	(a) 	(b)
Fig. 1 	Equivalent static loads used in the design of a shelter: (a) weapon load; (b) impact
load.
5.0 m, A s = 400 mm 2
5.0 m, A s = 550 mm 2
5.0 m, A s = 400 mm 2
3.0 m
A s = 910
mm2
5.0 m, A s = 910 mm 2
1.65 m
A s = 450
mm 2
1.35 m
A s = 550
mm 2
0.35 m	0.35 m
0.2 m
0.35 m
0.35 m	0.35 m
0.2 m
0.35 m
(a) 	(b)
Fig. 2 	Dimensions and reinforcement detailing for civil defence shelter subjected to:
(a) weapon load; (b) impact load. The reinforcement centre is positioned 30 mm
from the concrete edge.
According to the Swedish Shelter Regulations (1998) a civil defence shelter shall be able
to withstand the effect of a pressure wave corresponding to that produced by 125 kg TNT
which bursts freely outside at a distance of 5.0 metres from the outside of the shelter during
free pressure release. From this description the blast load’s pressure-time relation can be
approximated as shown in Fig. 3b, ConWep (1992). In the FE analyses the impact load is
simulated by letting falling masses hit the shelter roof with a certain velocity. Assuming that

-- 217 of 242 --

III-4
0
1,000
2,000
3,000
4,000
5,000
0 	1 	2 	3 	4 	5
Time [ms]
Pressure, p [kPa]
p
Pressure from
ConWep(1992)
Simplified relation
used in analysis
Time
[ms]
0.000
0.300
0.600
1.000
1.500
2.000
3.000
8.974
Pressure
[kPa]
5,006
2,930
1,713
836
340
137
22
0
(a) 	(b)
m
v
p
p = p(t) ≠ q weapon
impact
load
blast
load
Fig. 3 	(a) Transient loads carried out in the FE analyses presented herein; (b) pressure-time
relation used in the blast load analyses.
the collapse of the concrete building standing on top of the shelter starts at the top floor, and
assuming plastic impact, the velocity of the falling mass can be determined to be 9.6 m/s just
before reaching the shelter roof; see Johansson (1999, 2000b).
NON-LINEAR FE ANALYSES
Modelling of concrete and reinforcement
The analyses presented herein were carried out using the finite element programme
ABAQUS/Explicit, HKS (1998). The programme uses the explicit integration method and is
therefore a suitable tool to study structures subjected to transient loading. Here it is possible to
model the cracking of concrete by the use of the brittle cracking model, which is a smeared
crack model with fixed, orthogonal cracks. Unfortunately, this model was developed for cases
where concrete cracking dominates and is therefore limited to linear elastic behaviour in
compression. To consider the non-linear response of concrete in compression a plastic model,
such as that of von Mises or Drucker-Prager, can be used. However, it is not possible to
combine these models with the crack model in the same element. Therefore, in the analyses
presented 	in 	this 	paper, 	linear 	elastic 	material 	behaviour 	was 	used 	for 	concrete 	in
compression.

-- 218 of 242 --

III-5
A crack is initiated perpendicular to the maximum principal stress when this, independent
of the other principal stresses, reaches the tensile strength of the material. Once initiated the
orientation of the crack is fixed for the duration of the analysis and a stress-strain relation, as
shown in Fig. 4a, determines the material response perpendicular to the crack. Hence, stresses
can be transferred across the crack until it reaches its ultimate strain,
εu, in which case it is
said to be fully open. When the cracked concrete is unloaded and reloaded, the secant stiffness
is used, and thus a crack closes completely when the stress reaches zero. Additional cracks
may form at the same location but must be perpendicular to the present crack (i.e. orthogonal
cracks). This limitation of the formation of a second or third crack is still valid even if the first
crack closes completely. Consequently, once a crack has formed it will also affect the crack
formation at later stages of the load history. Accordingly, stress locking may occur and the
ability of the cracked concrete to take shear forces along the crack is therefore reduced with
increasing crack openings. In ABAQUS/Explicit this is treated by the use of a shear retention
model in which the cracked shear stiffness Gcrack can be described as
( 	) 	c	crack	crack 	G	G	
ε	β	= 	(1)
where
β(
εcrack ) is a function (given by the user) of the crack strain
εcrack in the studied crack
and Gc is the shear stiffness of the uncracked material. This means that when the crack
opening is large enough the shear stiffness reaches zero.
1.0
εβu
β
εcrack
f t / 3
f t 
εcrack
εu	
εu / 6
σc
(a) 	(b)
Fig. 4 	Modelling of concrete in: (a) tension; (b) shear retention.
To simulate the softening curve of the cracked concrete, a bilinear stress-crack opening
relation according to recommendations given in Gylltoft (1983) was used as shown in Fig. 4a.
The fracture energy GF was used together with the tensile strength f t, to calculate the ultimate
crack opening w u where the post-peak stress reaches zero. However, the input data to the

-- 219 of 242 --

III-6
crack model is given by a stress-crack strain curve, and thus the stress-crack opening relation
has to be translated to this by dividing the crack opening by an appropriate crack extension l.
Thereby, the ultimate crack strain
εu can be calculated as
l	f
G
l
w
t
F	u
u
4
=	=
	ε 	(2)
From this expression it is obvious that the value of the crack extension l is just as important
as the fracture energy GF when determining the ultimate strain
εu. If there is no reinforcement
in the concrete, l is usually set to the length of the element perpendicular to the crack; see
Johansson (2000a, 2000b). In a reinforced concrete structure, though, it is more complicated
to determine l. If the interaction between reinforcement and concrete is taken into account
properly, the method described above can be used. However, when modelling a reinforced
structure where perfect bond is assumed, it is probably more correct to use the mean crack
spacing as a value for the crack extension l; see de Borst (1995), Plos (1995) and Johansson
(2000b). In the analyses carried out here, perfect bond was assumed, and the crack extension l
used in Eq. (2) was therefore approximated to be equal to a mean crack spacing of 0.2 m. The
material properties used in the FE analyses were based on mean values: tensile strength
f t = 2.36 MPa, fracture energy GF = 100 N/m, Young’s modulus Ec = 30 GPa and Poisson’s
ratio
ν = 0.2. Hence, the ultimate crack strain used was
εu = 0.847‰.
In these analyses the linear relation shown in Fig. 4b was used to model the shear
retention;
εβu was set to 10
εu and 47.2
εu for the blast load and impact load, respectively. The
former value was not based on a physical interpretation, but on a previous study in Johansson
(1998) which showed that it had negligible effect on the structural behaviour of a frame
corner. Therefore, the use of a “reasonable” value was assumed to be accurate enough.
However, in the impact load analyses, the concrete failed in a way that was interpreted to be
due to large shear forces. The shear retention was then determined more thoroughly. Such a
physical interpretation is possible by considering the maximum aggregate size used in the
analysed structure. It seems reasonable to assume that the shear capacity perpendicular to a
crack is exhausted when the crack opening exceeds a value larger than half the aggregate size.
Hereby, it is possible to determine a relation between
εβu and
εu as
F
t
u
u
G
f	d
8
φ
	β
ε
ε = 	(3)
and
εβu = 47.2
εu was obtained by assuming a maximum aggregate size d
φ = 16 mm.
The steel reinforcement was modelled using von Mises yield criterion with associated flow
and isotropic hardening. As for the concrete, mean material properties were used for the
reinforcement: yield strength f sy =550 MPa, ultimate strength f su =605 MPa, Young’s modulus
Es =200 GPa, strain at hardening
εsh =2.75‰ and strain at ultimate strength
εsu = 100‰.

-- 220 of 242 --

III-7
However, since ABAQUS/Explicit takes into account the theory of large deformations, these
values were recalculated into true stresses
σs,true and logarithmic strains
εln,s, using
)	1	(	, 	s	s	true	s	
ε
	σ
	σ 	+	≈ 	(4)
( 	)	s	s	
ε
	ε 	+	= 	1	ln	ln, 	(5)
where
σs and
εs are the engineer stress and engineer strain of the steel, respectively; see HKS
(1998).
Strain rate effects
It is commonly accepted that the material properties of both concrete and steel are affected
by what strain rate effect they are subjected to. From the test summaries provided by, for
example, Bischoff and Perry (1991), and Malvar and Ross (1998) it is evident that the load-
carrying capacity of concrete in compression and tension can be substantially increased at
high strain rates. This is especially true for strain rates that exceed the value of the so-called
transition zone which appears at a strain rate of approximately 3 s-1 and 30 s-1 for concrete in
tension and compression, respectively. Below such strain rates, though, the dynamic increase
factor (DIF) for a concrete of a compressive strength f c = 30 MPa is, according to the CEB-
FIP Model Code, CEB (1993), less than 1.6 and 1.7 in compression and tension, respectively.
Reinforcement is less strain rate sensitive than concrete and does not seem to have a transition
zone like that observed for concrete, Malvar (1998).
In ABAQUS/Explicit it is not possible to consider the effect of the strain rate in the
constitutive equations for concrete. Consequently, this effect is neglected in the analyses
carried out here. For the steel reinforcement it is possible to take the strain rate effect into
account but since the magnitude of its strain rate will be mesh-dependent (see Johansson
2000b), it was decided not to include it in the analyses.
FE models
The concrete, the ground and the simulated falling masses were modelled using four-node
plane stress elements with reduced gauss integration; the reinforcement was modelled using
two-node truss elements. Since non-linear material behaviour was used, no material damping
was included; the default value of 0.06 for the bulk viscosity, though, was kept to reduce the
“noise” in the solution.

-- 221 of 242 --

III-8
Many factors can affect the final result in a FE analysis and, since there are always some
uncertainties in the choices made, it is important to examine the sensitivity of the results due
to different parameters. The shelter subjected to blast load was exposed to such a sensitivity
study where the main parameters varied were: element mesh, assumed crack extension, and
the coefficient of friction between ground and floor slab. Further, the influence of different
shear retention
εβu, the use of non-linear behaviour of concrete in compression, and modelling
the concrete using plain strain elements, were also examined. However, the space available in
this paper does not permit these comparisons to be dealt with herein, and therefore only the
results of one of the blast load analyses are presented here. Nevertheless, it should be
mentioned that even though these parameters did affect the structural response of the shelter,
the initial behaviour, which is of most interest for such a structure, was found to be
approximately the same. For more information on the other analyses, see Johansson (1999).
The element mesh used for the shelter in both the blast and impact analyses is shown in
Fig. 5. To get a proper picture of the behaviour of the shelter it was modelled so that it could
lift from, and/or slide along, the ground when subjected to a blast load. This was made
possible by modelling the contact between the shelter floor slab and the ground. In the
analyses presented herein the frictional coefficient was set to 0.75. Initially the ground was
modelled as a rigid surface but it was found that this caused the shelter to lift from the ground
and then bounce, instead of slide, along it. Hence, the influence of the frictional coefficient
was considerably reduced in a very unrealistic way. By modelling the ground as a linear
elastic material (6 x 0.3 m modelled by 50 x 6 elements), though, the bouncing vanished and a
more realistic behaviour was obtained.
The blast load was modelled with the pressure-time relation shown in Fig. 3b, the same
pressure being applied on the whole shelter front wall. The impact load was simulated by
modelling falling mass parts and their impact with the shelter roof. Since a sensitivity study
was carried out for the blast load it was not done here. According to the theoretical
background of the design method used in the Swedish Shelter Regulations, the falling debris
is assumed to hit the shelter roof with a constant mass per second. This was modelled by
activating different amounts of the total mass within a constant time interval. The time
interval chosen was 1/5, 1/10 and 1/20 of the total time, hereafter denoted as the active time,
which it took for all of the falling debris to reach the shelter; i.e. the mass was modelled as 6,
11 and 21 individual parts, respectively, see Fig. 6a. Thus, the average amount of mass hitting
the shelter was about the same as that assumed when the equivalent static load was derived
(Fig. 6b). Further, to examine the influence of the active time, it was also varied to be 0.50,
0.25 or 0.10 s.

-- 222 of 242 --

III-9
Fig. 5 	Element mesh of the civil defence shelter used in the analyses presented here.
11 parts
6 parts
0
20
60
80
100
0 	20 	40 	60 	80 	100
Percentage of active time [%]
Percentage of total mass [%]
Assumed
6 parts
11 parts
21 parts
(a) 	(b)
Fig. 6 	(a) Modelling of falling masses using 6 and 11 individual parts; (b) mass-time
relation used in the analyses.

-- 223 of 242 --

III-10
When modelling the impact load, the intention was to simulate a falling mass of debris
with a very low stiffness. The Young’s modulus and strength of the falling debris were
therefore approximated as one tenth of those of concrete in tension, i.e. Edebris = 3 GPa and
f debris = 0.236 MPa. Von Mises plasticity was used and a bilinear stress-strain relation with
zero hardening was assumed. The falling masses were modelled as individual parts, each part
built up of 50 x 3 (6 and 11 parts) or 50 x 2 (21 parts) elements, where the interaction of
adjacent parts was modelled with contact assuming a coefficient of friction equal to 0.10.
Further, the density of the rubble was assumed to be 2/3 of that of the concrete, i.e.
1600 kg/m 3 .
RESULTS
Blast load analysis
The blast load acts during a very short but intense period of time. As can be seen in
Fig. 3b, it starts with a pressure just above 5 MPa, decreases rapidly to about 20 kPa after
3 ms and reaches zero pressure just prior to 9 ms. The wave velocity, c, in the material can be
determined as
ρ
E
c = 	(6)
where E is Young's modulus and
ρ is the density of the material. With a Young's modulus of
30 GPa and a density of 2400 kg/m 3 the wave velocity in the concrete becomes about
3500 m/s. This means that it will take about 1.4 ms before the compressive stress wave
reaches the right wall “informing” it that the structure has been hit by an external pressure. It
will then take a further 0.3 ms before the whole structure (the midsection of the right wall is
farthest away) “knows” what has happened. Consequently, when the reflection of this stress
wave reaches the left wall again, the external overpressure has all but vanished. This will also
greatly affect the behaviour of the structure, especially in the left wall. In Fig. 7a the
propagation of the stress wave in the shelter is shown for the first 0.4 ms. After this time the
compressive wave has reached about 1.4 m into the floor and roof slabs. It is also possible to
see how a stress wave reflects back and forth in the front wall, changing sign at each
reflection.

-- 224 of 242 --

III-11
t = 0.05 ms 	t = 0.15 ms
t = 0.25 ms 	t = 0.40 ms
-0.5
0.0
0.5
1.0
1.5
2.0
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Time [ms]
#5a
#4a
#3a
#2a
#1a
(a) 	(b)
σ < 0
σ < 0
σ > 0
σ < 0
σ < 0
σ > 0
Horizontal displacement [mm]
#5a 	#4a
#2a
#1a
#3a
Fig. 7 	(a) Initial stress wave propagation in shelter; (b) horizontal displacement at the inside
of the left wall when subjected to a blast load from the left.
Since the load condition changes fast in relation to the wave velocity, it can be said that the
boundary conditions of the front wall change with time. Initially, the wall does not “know”
that it is connected to the rest of the structure. This is why, for instance, the back of the left
wall does not start to move until after 0.1 ms, which is the time it takes for the stress wave to
travel through the 0.35 m thick shelter wall. The displacements are then the same in about
0.2 ms, at which time points #1a and #5a start to differ. This also results in a behaviour that
differs from what may be expected, and the largest initial tensile stresses do not appear in the
middle of the wall but in a section close to the floor and roof slabs. Hence, the first cracks
arise after 0.30 ms at a distance of about 0.4 m from the floor and roof slabs respectively
(Fig. 8). It can be noted that points #2a, #3a and #4a have the same displacement until 0.5 ms
and that point #3a at a time of 1.0 ms still hardly seems to be affected by the support
conditions. Consequently, bending cracks will not dominate the crack pattern in the middle of
the wall until after about 1.5 ms.
The maximum strain rate obtained in the blast load analysis was about 1.2 s-1 for uncracked
concrete and about 15 s-1 in the reinforcement. The latter value was higher because the
reinforcement obtains its maximum values when a localisation occurs in a cracked concrete
element and, as previously mentioned, this strain rate will therefore be mesh-dependent.
Hence, if the strain rate effect had been taken into account for the reinforcement, its dynamic

-- 225 of 242 --

III-12
t = 0.40 ms 	t = 0.60 ms 	t = 0.80 ms 	t = 1.00 ms 	t = 1.50 ms
Fig. 8 	Initial crack propagation in left wall. The upper part shows where the tensile strength
has been exceeded and the lower part (magnified 100 times) where the cracks
localise. Dark areas indicate where the principal strain has exceeded the ultimate
crack strain
εu.
yield strength would also have become mesh-dependent. Using a strain rate of 1.2 s -1 the DIF
should according to the CEB-FIP Model Code, CEB (1993), be about 1.6 for concrete in
tension. The increase in reinforcement yield strength should at this strain rate, according to
CEB Bulletin d’Information No 187, CEB (1988), be about 1.1. To take these effects into
account in a very approximate way, another analysis where the concrete tensile strength and
reinforcement 	yield 	strength 	were 	increased 	to 	f t = 1.6⋅2.36 = 3.8 MPa 	and
f sy = 1.1⋅550 = 605 MPa, respectively. Nevertheless, the structural response in the critical
initial stage was still more or less the same, the effects observed being only positive in either
case, and the results presented here should therefore still be valid.
During the first 0.2 s the left wall in the shelter obtains large horizontal displacements
(Fig. 9a). During the same time, the vertical displacement-time relations in Fig. 9b show that

-- 226 of 242 --

III-13
all but point #9 in the shelter also lift from the ground. After about 0.4 s the sliding along the
ground stops; thus the shelter receives a permanent movement to the right of about 50 mm.
To better understand the behaviour of the shelter during the first second, the horizontal
displacements, relative to point #1, and some corresponding deformation plots are shown in
Figs. 10a and 11, respectively. Hereby, it is easier to see how the shelter sways back and forth
during the initial loading. It can be noted that the crack patterns obtained at these stages are
similar to what would have been caused by an external static load acting on the front wall in
the same direction as the shelter sways. Thus, the initial time-dependent change in boundary
conditions, mentioned above, now has a negligible effect.
-40
-20
0
20
40
60
80
100
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Time [s]
Horizontal displacement [mm]
#5
#4
#3
#2
#1
#5
#4
#3
#2
#1
-40
-20
0
20
40
60
80
100
#1
#6
#7
#8
#9
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Time [s]
Vertical displacement [mm]
#6 #7 #8
#1 	#9
(a) 	(b)
Fig. 9 	(a) Horizontal, and (b) vertical displacement in the blast load analysis.
-40
-20
0
20
40
60
80
100
#5
#4
#3
#2
#1
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Time [s]
Relative horizontal displacement [mm]
#5
#4
#3
#2
#1
-5
0
5
10
15
20
25
#5
#4
#3
#2
#1
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
Time [s]
Relative horizontal displacement [mm]
#5
#4
#3
#2
#1
(a) 	(b)
Fig. 10 	Relative horizontal displacement in blast load analysis when: (a) related to point #1;
(b) related to points #1 and #5 according to Eq. (7).

-- 227 of 242 --

III-14
t = 100 ms 	t = 300 ms
t = 400 ms 	t = 500 ms
Fig. 11 	Deformation and crack propagation in shelter during the first 0.5 s after loading.
Dark areas show where the principal strain in the concrete is higher than that of a fully opened
crack. Magnification factor = 10.
From Fig. 10a it can be seen that the largest displacements relative to point #1 are obtained
after about 120 ms, but also that a local maximum of the displacements in points #2, #3 and
#4 occurs after about 10 ms. A large relative displacement in point #5 indicates that the top
left corner is subjected to an opening moment. However, it does not say much about the
response in the left wall itself. To get an opinion of this it is necessary to determine the
relative displacement of the shelter wall when related to both points #1 and #5. By using the
expression
( 	) 	y
h
u	u
u	u	u 	i	relative	i
1	5
1	,
−
−	−	= 	(7)
where ui is the displacement in point #i, h is the height of the shelter and y is the vertical
distance from the ground to point #i, it is found that the relative displacements in points #2,
#3 and #4 obtain their largest values after about 10 ms; see Fig. 10b. Since these relative
displacements are more important than the global displacements when looking at the response
in the left shelter wall, this indicates that the most critical stage for the structure may occur
shortly after initial loading. This is also confirmed when comparing the critical reinforcement
stresses in the structure; see Fig. 12. From this it is clear that the most strained part in the
structure is the shelter wall closest to the explosion and that this occurs during the initial
10 ms after loading. However, the relative displacements in points #2 to #4 at t ≈ 100 ms are

-- 228 of 242 --

III-15
almost as large as in the initial stage. Nevertheless, as shown in Fig. 12 the maximum
reinforcement stresses in different parts of the structure are still far below the steel yield
strength at this time. The upper left corner is not even subjected to a closing moment any
more; instead, it is at about this time that the maximum reinforcement stresses is obtained at
the inside of this corner (point #4). Thus, it may be somewhat illusory to look only at the
displacements to find the critical stage in the structural behaviour.
-600
-400
-200
0
200
400
600
0 	20 	40 	60 	80 100 120 140 160 180 200
Time [ms]
Stress [MPa]
#1
#2
#3
552 MPa
#2
#3
#1
-100
0
100
200
300
400
500
600
700
0 	20 	40 	60 	80 100 120 140 160 180 200
Time [ms]
Stress [MPa]
#4
#5
#6
552 MPa	#6
#5
#4
Fig. 12 	Stress-time relation for the most critical reinforcement elements during the first 200
ms. The dashed lines marked “552 MPa” represent the reinforcement yield strength
when the influence of large deformations (Eq. 4) has been taken into account.
The largest reinforcement stresses are obtained in the middle of the left wall (point #1) and
in the corner area between the left wall and the roof (point #3); no other regions in the
structure obtained reinforcement yielding. A further magnification in time shows that the
reinforcement starts to yield in these sections after about 2 and 3 ms, respectively (Fig. 13).
Thus, it is also of interest to further study the behaviour of the shelter during the initial 10 ms.
The crack propagation during this time period is shown in Fig. 14 and reveals that the
structural behaviour differs considerably from that in Fig. 11. It is of special interest to note
that the left wall initially behaves in a way similar to a slab fixed at both ends. This is because
in the initial stage the left wall is not “aware” of the rest of the structure. As previously
mentioned it will take a certain time before the information about the external load has
reached all parts of the structure and then returned to the front wall, “informing” it about its
surroundings.

-- 229 of 242 --

III-16
-100
0
100
200
300
400
500
600
700
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Time [ms]
Stress [MPa]
#1
#2
#3
552 MPa
#2
#3
#1
-5
0
5
10
15
20
25
30
35
40
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Time [ms]
Strain [‰]
#1
#2
#3
2.76‰
#2
#3
#1
Fig. 13 	Stress-time and strain-time relations in points #1 to #3 for the most critical
reinforcement elements during the first 10 ms.
t = 10 ms
t = 3 ms	t = 2 ms
t = 5 ms
Fig. 14 	Crack propagation in shelter during the first 10 ms after loading. Dark areas show
where the principal strain in the concrete is higher than that of a fully opened crack.
The deformations are magnified with a factor of 20.
To further investigate the initial behaviour of the shelter, moment and normal forces were
calculated in different sections; the moment was determined as acting around the normal
force, which in turn was positioned in the neutral layer of the uncracked cross section. Fig. 15

-- 230 of 242 --

III-17
shows the resulting moment and normal force distributions during the first 10 ms for two such
sections in the shelter. Hereby it can be seen that the maximum sectional forces in these two
sections are obtained after about 1 to 2 ms. However, when comparing this to the time when
the maximum reinforcement stresses are obtained it is clear that the times do not necessarily
coincide. The reason is that the large normal force in compression has a very positive effect
on the section’s capacity. This is especially apparent when comparing the maximum moments
obtained in the analysis with the estimated moment capacities when assuming pure bending.
These were determined as prescribed in Eurocode 2, CEN (1991), to be 82 kNm and 98 kNm
for the mid-wall and roof corner, respectively, values that can be compared to the maximum
moments of 214 kNm and 195 kNm obtained in the analysis.
-50
0
50
100
150
200
250
-2000
-1600
-1200
-800
-400
0
400
Normal force [kN]
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Time [ms]
Moment [kNm]
“Moment
capacity”
Moment
Normal force -200
-150
-100
-50
0
50
0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Time [ms]
Moment [kNm]
-2000
-1500
-1000
-500
0
500
Normal force [kN]
(a) 	(b)
Fig. 15 	Sectional forces in (a) midsection in left wall, and (b) roof slab close to left corner,
during the first 10 ms after loading.
It is not surprising that the moment capacity increases when the compressive normal force
assists the reinforcement to keep the section together. Neither is it strange that such a
compressive force appears in the roof section, since a compressive stress wave travels through
the roof slab; compare Fig. 7a. However, the peculiarity is that such large compressive forces
also appear in the wall. In Fig. 16a it can be seen that the compressive force varies between
about 0 and 350 kN during the first 0.6 ms. This force is caused by the restrained elongation
obtained due to a combination of a stress wave travelling forth and back in the wall (see
Fig. 7a) and the Poisson’s ratio. But, at 0.7 ms the compressive force increases rapidly and
reaches its maximum of 1364 kN after 1.4 ms, and becoming 1092 kN after 1.9 ms when the
maximum moment is obtained. This sudden increase is due to the cracking in the wall
(Fig. 8). When the wall cracks it elongates and, if this elongation is restrained, large

-- 231 of 242 --

III-18
compressive forces arise. A similar behaviour is obtained in a statically loaded slab that is
fixed in both ends. It can be argued that the short ends of the left wall are not fixed but are
relatively free to elongate. This would be true if the load had been applied slowly enough;
here however, the cracking occurs so fast that there is no time for the wall to respond as in
such a case. Consequently, the wall experiences its boundary conditions to be fixed, which in
turn 	produces 	large normal 	forces 	that 	help 	the section 	withstand 	the 	external 	load.
Accordingly, it seems appropriate to regard the boundary conditions of the left wall as fixed
in the initial stage of the loading. The duration of these large compressive forces, though, is
quite short; after about 7 ms the compressive force has disappeared all along the wall (shown
in Johansson 1999). This return of the compressive force to about zero is coupled to the
vertical movement of the roof slab and thus the removal of the initial restraining caused by the
time-dependent boundary conditions. Thereafter, the compressive forces are comparatively
low, never reaching a value higher than 100 kN again. Hence, this observation supports the
statement made above that the boundary conditions change with time.
If the compressive force of 1092 kN had been taken into consideration when determining
the moment capacity in the wall, it would have increased to 242 kNm, a value that is about
three times as high as the “ordinary” moment capacity of 82 kNm. Thus, the appearance of
such large compressive forces offers the wall considerable help to withstand the blast load.
When checking other sections in the left wall they show a similar presence of compressive
forces, even though these seem to decrease at increasing distance from the wall midsection.
Accordingly, a possible reason for the increased moment capacity in a dynamically loaded
structure might be that large compressive forces appear in the critical sections. Hence, if these
normal forces are not considered when evaluating the test results, the increase in load capacity
might be interpreted as just a cause of 	high strain rate effects in the concrete and
reinforcement. Even though part of the increase in load capacity can be explained due to this,
the results presented here suggest that a substantial part of such an increase may be a pure
structural effect.
Impact load analyses
The falling mass was modelled as 6, 11 or 21 individual parts. Further, three different
values (0.50 s, 0.25 s and 0.10 s) of the active time, i.e. the time during which the falling mass
was activated, were used to study its effect on the shelter behaviour. The displacement and
velocity in the midsection of the roof slab, in the case when six mass parts are used and the
active time used was 0.50 s, are shown in Fig. 16a. The sudden increase in velocity at regular

-- 232 of 242 --

III-19
time intervals of about 100 ms corresponds to the impact obtained when a falling mass part
reaches the shelter. The last falling part affects the shelter after about 540 ms and after this the
slab velocity approaches zero. Hence, the displacement observed after 700 ms of about
180 mm corresponds to the final displacement of the roof slab. The crack patterns obtained in
the shelter during the impact of the falling masses are shown in Fig. 16b and it can be seen
that both the roof slab and the upper parts of the walls are cracked to a large extent. The
reinforcement yielded at several places both in the slab midsection and on either side in both
corners (
εs ≈ 70‰) and was even torn off in the wall about 100 mm below the right corner.
0
50
100
150
200
250
300
350
0 	100 	200 	300 	400 	500 	600 	700 	800
Time [ms]
Displacement [mm]
-2
-1
0
1
2
3
4
5
Velocity [m/s]
displacement
velocity
t = 390 ms
t = 90 ms
(a) 	(b)
Fig. 16 	(a) Displacement and velocity in midsection of shelter roof slab, and (b) crack
pattern in shelter, when the falling mass is modelled by using 6 parts activated during
0.5 s.
Normally, the deformation of the shelter should increase with decreasing active time.
However, this was not the case in the analyses carried out here when using 6 mass parts.
Instead, the displacement in the roof midsection was more or less halved when the active time
was set to 0.25 s. The reason for this, though, was that the frequency of the falling mass parts
in this case did not correspond as well to the eigenfrequency of the shelter roof and the
already activated mass, as it did when the active time was 0.50 s. Thus, when a falling part
reached an already activated mass below, this was moving in the direction opposite to the
falling part, and hence much of the kinetic energy was consumed in the plastic impact

-- 233 of 242 --

III-20
between the two parts. If the mass fell within a period of 0.10 s, though, the shelter could not
withstand the impact but failed in several locations.
It was found that the maximum displacement obtained in the shelter depended greatly on
how many load parts were used to simulate the falling debris. Thus, the decrease in mass for
each of the parts was not compensated by their increased falling frequency. Accordingly, even
though the essential behaviour was similar it is evident that the displacement becomes
considerably smaller when using more but lighter falling mass parts. Hence, the strain in the
reinforcement also became substantially lower, reaching a maximum value of about 35‰
when using 11 falling mass parts. Nevertheless, the analyses using 11 and 21 parts to simulate
the collapsing mass confirmed the idea that a decrease in the active time also results in an
increase in the total displacement of the shelter (Fig. 17).
0
50
100
150
200
250
0 	100 	200 	300 	400 	500 	600 	700 	800
Time [ms]
Displacement [mm]
0.50 s - 6 parts
0.25 s - 6 parts
0.50 s - 11 parts
0.25 s - 11 parts
0.50 s - 21 parts
0.25 s - 21 parts
Fig. 17 	Comparison of shelter roof displacement when the active time and the number of
falling mass parts were varied.
Comparison with static loading
This section makes a brief comparison of the static behaviour of the shelter to that obtained
when subjected to the transient loads examined above. These analyses are not “truly” static
since ABAQUS/Explicit was used. However, as shown in for instance Johansson (1998) it is
possible to simulate a statically loaded structure in an explicit programme as long as it is

-- 234 of 242 --

III-21
made sure that the material models used are strain rate independent and the load velocity used
is so low that inertia effects can be neglected. The static load cases used are shown in Fig. 1
and the load velocity chosen was an external pressure of 50 kN/m2 s. Due to the large
difference between the transient and static load cases, though, it is not meaningful to compare
load-displacement relations between them. Nevertheless, it is still of interest to compare the
critical crack patterns and differences or similarities in the general behaviour.
When applying the static load shown in Fig. 1a it was concluded that the load capacity of
the shelter was much higher than designed for. This is partly due to the use of mean values in
the analysis (the reinforcement amount was determined using design values) but mostly
because of the positive effect caused by the high normal forces, obtained in the structure for
this load case. At a load twice as high as the static design load, the reinforcement had just
reached yielding in the roof midsection but the reinforcement was still to yield in the corners.
Nevertheless, this load level was considered adequate to compare the crack patterns within the
corner with that obtained in the blast load analysis. Fig. 18a shows the crack pattern in the
upper left corner region for two different load levels, and it can be seen that they are rather
similar to those obtained in the blast load analysis at 1 ms and 3 ms, respectively; compare
Fig. 14. The major difference is perhaps that the inclined shear crack seems to be more
pronounced in the blast load analysis. On the other hand, the responses within the corner
region are approximately the same. It is also worth recalling that the maximum reinforcement
stresses in the corner region obtained in the blast load analysis were located in the roof slab
outside the corner, hence suggesting that the corner will not be very critical in such a load
case.
q = 100 kN/m2
q = 50 kN/m2
q = 165 kN/m2
(a) 	(b)
Fig. 18 	Crack pattern in (a) corner region when the shelter is subjected to the static weapon
load case used in the design (Fig. 1a), and (b) shelter at failure when subjected to a
static pressure from above (Fig.1b).

-- 235 of 242 --

III-22
Fig. 18b shows the shelter crack pattern at failure when it is subjected to a static load as
shown in Fig. 1b. This may be compared to that shown in Fig. 16b, and despite the fact that
the cracking seems to be more intense when subjected to the impact load, it can be concluded
that the general crack behaviour is still approximately the same. It is also interesting to note
that the critical sections at the corner are not located on the same sides of the corner in the
static and dynamic load analyses. In the former, the reinforcement is torn off in the roof slab
about 50 mm from the corner, while in the latter they appear in the wall approximately
100 mm below the corner. Above all, though, in neither case is cracking within the corner
critical; this implies that a reinforcement corner detailing sufficient to use in a static load case
is also adequate in a shelter subjected to impact load.
CONCLUSIONS
A civil defence shelter subjected to a blast load from an explosion or falling mass from a
collapsing 	building 	has 	been 	studied 	using 	the 	non-linear 	finite 	element 	programme
ABAQUS/Explicit. It was found that the global response of a structure subjected to a blast
load in the initial stage may be very different from that of a static load, an important reason
being that the boundary conditions initially can be said to vary with time. The most critical
stage for the shelter studied here was during the initial 10 ms. It is during this period that
yielding of the reinforcement occurs in the most strained sections: the midsection of the front
wall and the section between corner and roof slab. The corner itself, though, does not seem to
be very critical.
An impact load of falling debris from a collapsing building was simulated and it was found
that the results depend greatly much on how much time it takes for the total mass to reach the
structure, but more importantly on what mass each independent part has that hits the structure.
The impact of few but heavy masses is more dangerous than that obtained by the same
amount of mass distributed more evenly during the same time period. Further, the FE analyses
strongly imply that no critical cracks will form within the corner region, and hence it seems
reasonable to believe that the response within a corner will be similar to that obtained in a
statically loaded structure. Accordingly, even though the structural behaviour may be
completely different in static and transient loaded structures, the results presented herein
indicate that the local behaviour still may be quite alike. This also suggests that the
conclusions made in Johansson (1996, 2000a, 2000b) and Johansson and Karlsson (1997),
that it is appropriate to use spliced reinforcement loops within the corner, should be valid for
a transient loaded structure as well.

-- 236 of 242 --

III-23
ACKNOWLEDGEMENT
The research presented in this paper was financed by the Swedish Rescue Services
Agency. The author would like to thank the head of the Division of Concrete Structures,
Professor Kent Gylltoft, for his support and advice. Thanks also to Björn Ekengren at the
Swedish Rescue Services Agency and Dr. Mario Plos at Reinertsen Engineering for their
much appreciated support in the project.
APPENDIX I 	REFERENCES
Baker, W. E. (1973). Explosions in air. University of Texas Press, Austin, USA.
Bischoff, P.H., and Perry, S.H. (1991). “Compressive behaviour of concrete at high strain
rates”. Materials and Structures, 24, 425-450.
CEB (1988). CEB Bulletin d’Information No 187, Lausanne, Switzerland.
CEB 	(1993). 	CEB-FIP 	Model 	Code 	1990, 	Design 	Code. 	Thomas 	Telford, 	Lausanne,
Switzerland.
CEN (1991). Eurocode 2: Design of concrete structures, Part 1: General rules and rules for
buildings. European Committee for Standardisation.
ConWep (1992): ConWep – Collection of Conventional Weapons Effects Calculations based
on TM 5-855-1, Fundamentals of Protective Design for Conventional Weapons, U.S.
Army Engineer Waterways Experiment Station, Vicksburg, MS.
de Borst R. (1995). “Analyses of reinforced concrete in a historical perspective”. Nordic
Symposium on Modern Design of Concrete Structures, Aalborg University, Denmark, 261-
299.
Gylltoft, K. (1983). “Fracture mechanics models for fatigue in concrete Structures.” Division
of Structural Engineering, Luleå University of Technology, Ph.D. Thesis, 1983:25D,
Luleå, Sweden.
Hallgren, P., and Granström, S. (1977). “Ras mot skyddsrumstak – beräkningsmodell (Impact
of falling masses on shelter roof – calculation method.)” Tyréns, Stockholm, Sweden. (In
Swedish)
HKS (1998): ABAQUS/Explicit Version 5.7. Hibbit, Karlsson and Sorensen Inc. Pawtucket,
RI.

-- 237 of 242 --

III-24
Johansson, J. P. M., and Karlsson, S. (1997). “Nytt armeringsutförande i betongramhörn
utsatta för positivt moment (New reinforcement detailing in concrete frame corners
subjected to positive moment).” Division of Concrete Structures, Chalmers University of
Technology, Report 97:5, Göteborg, Sweden. (in Swedish)
Johansson, M. (1996). “New reinforcement detailing in concrete frame corners of civil
defence 	shelters: 	non-linear 	finite 	element 	analyses 	and 	experiments.” 	Division 	of
Concrete Structures, Chalmers University of Technology, Licentiate Thesis, Publication
96:1, Göteborg, Sweden.
Johansson M. (1998): “Betongens töjningshastighetsberoende och explicit lösnings-metodik
(Strain rate effects in concrete and explicit solution methods).” Division of Concrete
Structures, Chalmers University of Technology, Report 98:2, Göteborg, Sweden. (In
Swedish)
Johansson M. (1999). “Non-linear finite element analyses of civil defence shelters subjected
to explosion load or impact load.” Division of Concrete Structures, Chalmers University of
Technology, Report 99:8, Göteborg, Sweden.
Johansson M. (2000a): “Nonlinear finite-element analyses of concrete frame corners.” ASCE
Journal on Structural Engineering, 126(2), 190-199.
Johansson M. (2000b). “Structural behaviour of concrete frame corners in civil defence
shelters: non-linear finite element analyses and experiments.” Division of Concrete
Structures, Chalmers University of Technology, Ph.D. Thesis, Publication 00:2, Göteborg,
Sweden.
Malvar L. J., and Ross C. A. (1998). “Review of strain rate effects for concrete in tension.”
ACI Materials Journal, 95(6), 735-739.
Malvar L. J. (1998). “Review of static and dynamic properties of steel reinforcing bars.” ACI
Material Journal, 95(5), 609-616.
Plos, M. (1995). “Application of fracture mechanics to concrete bridges - finite element
analyses and experiments.” Division of Concrete Structures, Chalmers University of
Technology, Ph.D. Thesis, Publication 95:3, Göteborg, Sweden.
Swedish Shelter Regulations (1998). Skyddsrumsregler SR – Produktion och vidmakthållande
(Shelter Regulations – production and maintenance.) Statens Räddningsverk, Publication
B54-141/98, Karlstad, Sweden. (In Swedish)

-- 238 of 242 --

III-25
APPENDIX II 	NOTATIONS
The following symbols are used in this paper:
As 	= 	reinforcement area;
c 	= 	wave speed velocity;
d
φ 	= 	maximum aggregate size;
Ec 	= 	Young’s modulus for concrete;
f cd 	= 	concrete design compressive strength;
f su 	= 	ultimate strength of reinforcement;
f sy 	= 	yield strength of reinforcement;
f syd 	= 	design yield strength of reinforcement;
f t 	= 	concrete tensile strength;
Gc 	= 	shear modulus for uncracked concrete;
Gcrack 	= 	shear modulus for cracked concrete;
GF 	= 	fracture energy;
Es 	= 	Young’s modulus of reinforcement;
E 	= 	Young’s modulus;
Edebris 	= 	Young’s modulus of falling mass material;
f debris 	= 	strength of falling mass material;
h 	= 	height of shelter;
l 	= 	crack extension;
m 	= 	mass;
p 	= 	pressure;
qimpact 	= 	equivalent static impact load;
qweapon 	= 	equivalent static weapon load;
t 	= 	time;
u 	= 	displacement;
v 	= 	velocity;
w u 	= 	crack opening;
y 	= 	vertical position in shelter;
β 	= 	shear retention factor;
εcrack 	= 	crack strain;
εln,s 	= 	logarithmic strain in reinforcement;
εs 	= 	reinforcement strain;
εsh 	= 	strain at reinforcement hardening;

-- 239 of 242 --

III-26
εsu 	= 	strain at ultimate strength of reinforcement;
εu 	= 	ultimate strain;
εβu 	= 	ultimate strain for shear retention;
σc 	= 	concrete stress;
σs 	= 	reinforcement stress;
σs,true 	= 	true reinforcement stress;
ν 	= 	Poisson’s ratio; and
ρ 	= 	density.

-- 240 of 242 --

Doctoral Theses and Licentiate Theses, Division of Concrete Structures,
Chalmers University of Technology, 1990-2000
90:1 	Stig 	Öberg: 	Post 	Tensioned 	Shear 	Reinforcement 	in 	Rectangular 	RC 	Beams.
Publication 90:1. Göteborg, April, 1990. 603 pp. (No 1021). Doctoral Thesis.
90:2 	Johan Hedin: Långtidsegenskaper hos samverkanskonstruktioner av stål och betong
(Long Time Behaviour of Composite Steel Concrete Structures). Publication 90:2.
Göteborg, August, 1990. 53 pp. (No 1079). Licentiate Thesis.
92:1 	Björn Engström: Ductility of Tie Connections in Precast Structures. Publication 92:1.
Göteborg, October, 1992. 368 pp. (Nos 936, 999, 1023, 1052). Doctoral Thesis.
93:1 	Mario Plos: Shear Behaviour in Concrete Bridges - Full Scale Shear Test. Fracture
Mechanics Analyses and Evaluation of Code Model. Publication 93:1. Göteborg,
April, 1993. 70 pp. (Nos 1088, 1084). Licentiate Thesis.
93:2 	Marianne Grauers: Composite Columns of Hollow Steel Sections Filled with High
Strength Concrete. Publication 93:2. Göteborg, June, 1993. 140 pp. (No 1077).
Doctoral Thesis.
93:4 	Li An: Load Bearing Capacity and Behaviour of Composite Slabs with Profiled Steel
Sheet. Publication 93:4. Göteborg, September, 1993. 134 pp. (No 1075). Doctoral
Thesis.
93:5 	Magnus Åkesson: Fracture Mechanics Analysis of the Transmission in Zone in
Prestressed Hollow Core Slabs. Publication 93:5. Göteborg, November, 1993. 64 pp.
(No 1112). Licentiate Thesis.
95:1 	Christina 	Claeson: 	Behavior 	of 	Reinforced 	High 	Strength 	Concrete 	Columns.
Publication 95:1. Göteborg, June, 1995. 54 pp. (No 1105). Licentiate Thesis.
95:2 	Karin Lundgren: Slender Precast Systems with Load-Bearing Facades. Publication
95:2. Göteborg, November, 1995. 60 pp. (No 1098). Licentiate Thesis.

-- 241 of 242 --

95:3 	Mario Plos: Application of Fracture Mechanics to Concrete Bridges. Finite Element
Analysis and Experiments. Publication 95:3. Göteborg, November, 1995. 127 pp.
(Nos 1067, 1084, 1088, 1106). Doctoral Thesis.
96:1 	Morgan Johansson: New Reinforcement Detailing in Concrete Frame Corners of Civil
Shelters. Non-linear Finite Element Analyses and Experiments. Publication 96:1.
Göteborg, November, 1996. 77 pp. (No 1106). Licentiate Thesis.
96:2 	Magnus Åkesson: Implementation and Application of Fracture Mechanics Models for
Concrete Structures. Publication 96:2. Göteborg, November, 1996. 159 pp. (No 1112).
Doctoral Thesis.
97:1 	Jonas Magnusson: Bond and Anchorage of Deformed Bars in High-Strength Concrete.
Publication 97:1. Göteborg, November, 1997. 234 pp. (No 1113). Licentiate Thesis.
98:1 	Christina 	Claeson: 	Structural 	Behavior 	of 	Reinforced 	High-Strength 	Concrete
Columns. Publication 98:1. Göteborg 1998. 92 pp + I-IV, 75 pp. (No 1105.)
Doctoral Thesis.
99:1 	Karin Lundgren: Three-Dimensional Modelling of Bond in Reinforced Concrete.
Theoretical 	Model, 	Experiments 	and 	Applications. 	Publication 	99:1. 	Göteborg,
November, 1999. 129 pp. (No 37). Doctoral Thesis.
00:1 	Jonas Magnusson: Bond and Anchorage of Ribbed Bars in High-Strength Concrete.
Publication 00:1. Göteborg, February, 2000. 300 pp. (No 1113). Doctoral Thesis.

-- 242 of 242 --