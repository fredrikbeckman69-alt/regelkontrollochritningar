---
title: "Simulation Of Concrete Wall Subjected To Airblast By Developing An Elastoplastic Spring Model In Modelica Modelling Language"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/simulation-of-concrete-wall-subjected-to-airblast-by-developing-an-elastoplastic-spring-model-in-modelica-modelling-language.pdf"
fileType: "PDF"
keywords: ["skyddsrum","explosion","splitter","model","load","sdof","this","system"]
summary: " Abstract—To meet the civilizations future needs for safe living and low environmental footprint, the engineers designing the complex systems of tomorrow will need efficient ways to model and optimize these systems for their intended purpose. For..."
---


Abstract—To meet the civilizations future needs for safe living
and low environmental footprint, the engineers designing the
complex systems of tomorrow will need efficient ways to model and
optimize these systems for their intended purpose. For example, a
civil defence shelter and its subsystem components needs to
withstand, e.g. airblast and ground shock from decided design level
explosion which detonates with a certain distance from the structure.
In addition, the complex civil defence shelter needs to have
functioning air filter systems to protect from toxic gases and provide
clean air, clean water, heat, and electricity needs to also be available
through shock and vibration safe fixtures and connections. Similar
complex building systems can be found in any concentrated living or
office area. In this paper, the authors use a multidomain modelling
language called Modelica to model a concrete wall as a single degree
of freedom (SDOF) system with elastoplastic properties with the
implemented option of plastic hardening. The elastoplastic model
was 	developed 	and 	implemented 	in 	the 	open 	source 	tool
OpenModelica. The simulation model was tested on the case with a
transient equivalent reflected pressure time history representing an
airblast from 100 kg TNT detonating 15 meters from the wall. The
concrete wall is approximately regarded as a concrete strip of 1.0 m
width. This load represents a realistic threat on any building in a city
like area. The OpenModelica model results were compared with an
Excel implementation of a SDOF model with an elastic-plastic spring
using simple fixed timestep central difference solver. The structural
displacement results agreed very well with each other when it comes
to plastic displacement magnitude, elastic oscillation displacement,
and response times.
Keywords—Airblast from explosives, elastoplastic spring model,
Modelica modelling language, SDOF, structural response of concrete
structure.
I. INTRODUCTION
HE Swedish Civil Contingencies Agency (MSB) are
among all responsible for the physical protection of the
Swedish population, e.g. civil defence shelters. This imposes
high demands on knowledge and understanding of the effects
of extraordinary events such as loads from explosions. To
acquire, preserve and develop such knowledge, it is necessary
to study both the load and the structural dynamic response in
various amount of detail. For this purpose, since the mid-
1990s, MSB has had a long-term research plan to better
understand and develop computational and analytical tools for
Leo Laine is with the LL Engineering AB, Stugvägen 4, 438 94
HÄRRYDA, Sweden (phone: +46 70 201 55 80; e-mail: leo.laine@telia.com).
Morgan Johansson is with Norconsult AB and with Chalmers University of
Technology as Adjunct Professor, Norconsult AB, Therese Svenssons gata 11,
417 55, Göteborg (e-mail: morgan.johansson@norconsult.com).
this purpose. So far this has resulted in four PhD theses and
numerous reports and scientific papers, see [6]-[17], and can
be downloaded from [22].
Today’s buildings have complex subsystems that need to
co-exist: e.g. electrical, air conditioning and water systems;
some of these system components might also need to be able
to withstand impulse loading while mounted on the structure.
In industries, avionics, aerospace and naval ships, especially
designed for operating in harsh conditions and military usage,
are examples where the technology of optimizing the uptime
of the complete system has come far. Therefore, a unified
object-oriented language for Systems Modeling like Modelica
[18] is of high interest for modelling systems with different
physical domains at the same time.
In this paper, the SDOF model representing a concrete wall
is implemented both Excel and Modelica with elastoplastic
properties. The Modelica implementation has both damping
and plastic hardening as an option. The results of the two
implementations are also compared for a specific case study.
Modelica is not a tool but a modelling language which can be
used 	to 	model 	and 	combine 	electrical, 	mechanical,
thermodynamic, fluid, hydraulic, biological, magnetic, control,
event, and real-time, systems, etc. The authors have used the
open source tool OpenModelica [19] which includes public
libraries of components within the mentioned multidomain.
Here, the translational mechanical library has been extended
with developing an elastoplastic spring damper with plastic
hardening model component that can be used with other
components 	in 	OpenModelica 	library 	for 	translational
mechanics. 	The 	model 	includes 	equations 	for 	defining
decomposition of elastic and plastic deformation, using
constitutive 	equation 	for 	force, 	using 	yield 	condition,
hardening rule, and flow rule from elastoplastic theory. All
equations have been written in Modelica’s acasual format
which means the model can be re-used in diverse ways in a
system, i.e. the input and output is not fixed only the equations
are formulated in the model.
The paper is organized in the following sections: section II
describes 	how 	the 	SDOF 	is 	numerically 	solved 	when
implemented 	in 	Excel. 	Section 	III 	describes 	how 	the
elastoplastic spring damper model was implemented in the
mechanical 1-D translational library. Section IV discusses
how to derive SDOF parameters, such as mass, elastic
stiffness, and plasticity from a physical concrete wall. In
section V, the case study is shortly described including the
explosion load. In Section VI, the simulated displacement
Simulation of Concrete Wall Subjected to Airblast by
Developing an Elastoplastic Spring Model in
Modelica Modelling Language
Leo Laine, Morgan Johansson
T
World Academy of Science, Engineering and Technology
International Journal of Architectural and Environmental Engineering
Vol:13, No:2, 2019
46	International Scholarly and Scientific Research & Innovation 13(2) 2019 ISNI:0000000091950263
Open Science Index, Architectural and Environmental Engineering Vol:13, No:2, 2019 waset.org/Publication/10010023

-- 1 of 8 --

results from excel implementation of SDOF is compared with
OpenModelica. In Section VII, the paper is concluded and
discussed.
II. SDOF SYSTEM
When studying dynamically loaded structures, it is often
convenient to use a simple calculation model to capture the
essential response obtained. A SDOF system, consisting of the
mass, structural properties and acting load, is the simplest way
to do so. Below the basic information of the build-up of such a
system, and how it can be used, is briefly described. More
detailed information can be found in [2] and [12].
For a SDOF system, the basic dynamic equation can be
expressed as
 	mu 	cu 	ku 	F t	 	 		 	 	(9)
where m, c, k and F corresponds to the mass, damping,
stiffness and acting load, and ü, u̇ and u are the acceleration,
velocity and displacement. For a system subjected to an
impulse load, the damping usually has a small effect and here
it has been conservatively omitted, resulting in a more
simplified system as shown in Fig. 1.
F(t)
R(u)
m 	u
u
R
R Rd
Wi
u tot	uel
utot = u el + u pl
	k
stiffness k at
unloading
t
F
t 1
F 1
I1
  	 	R u 	k u 	u	 	
Fig. 1 Simplified SDOF system used with schematic illustration of
load relation F(t) and elastoplastic structural response R(u)
Depending on the properties used for the load and stiffness,
it is possible to analytically solve the displacement u for a
given 	case. 	However, 	considering 	the 	possibility 	of 	a
nonlinear structural response R(u) = k(u)ꞏu and complex load
properties F(t), it is often convenient to use a numerical
solution to determine the resulting displacement u(t). There
are several different solution methods available for this, but
here the Central Difference Method (CDM) is used, see e.g.
[1] or [8].
CDM is a so called explicit solution method, meaning that
the solution of the displacement at time t+
t, here denoted as
ut	t  	, is calculated based solely on equilibrium at time t.
Accordingly, all information needed to proceed the solution at
time t+
t is already known and there is no need of any
iterations to find a solution in case of a nonlinear response
R(u).
Using CDM, and neglecting the effect of damping, the
displacement at time t+
t can be determined as
2 	1
2 	2
2 t 	t
t t 	t 	t 	t 	t 	t t	m 	m
u 	t 	m 	F 	k 	u 	u
t 	t
 	 	
	 		 	 	 	
  	 	 		 		 	 	 	 		 	 	 		 	
(2)
where Δt is the time step used and index t and t-Δt indicate
information at time t and time t-Δt, respectively. Further, a
start condition for the displacement at time -Δt need to be
used; this is expressed as:
u
t
u	t	u	u	t 		 	0
2
0	0
2

				 	(3)
The expression for the displacement in (2) can easily be
programmed in e.g. Excel (used here) or MATLAB and a
numerical solution u(t) can be determined. Based on this, the
corresponding velocity and acceleration can be determined as
 		u	u
t
u 	t	t	t	t	t 		 	

 2
1
 	(4)
 		u	u	u
t
u 	t	t	t	t	t	t 		 		

 	2
1 2	
 	(5)
Using an explicit method can metaphorically be described
as driving a car forward, only looking in the back mirror; i.e.
one is not able to drive too fast or one will lose control.
Practically, this means that there is a time step condition in
explicit methods that needs to be fulfilled to get a stable
solution. For CDM this means that
2 2	cr
m
t 	t k	

   	 	 	(6)
However, there may also be other reasons to choose a small
time step, e.g. small load duration. Hence, using an explicit
method is usually a good choice when studying the structural
response due to an impulse load since such loads nevertheless
demand a small time step to get an accurate solution. The
suitable time step in each situation depends on both the load
case and the structural dynamical properties. It usually works
well to use a time step in the order of 1/100 of the duration of
the impulse load; i.e.
1	0.01
cr	t
t t
	
   	
(7)
Since no iterations are needed in the solution method the
CDM is very suitable to solve nonlinear problems. The
expression in (2) can be determined regardless of whether the
structural response is linear or not. The trick is to let the
World Academy of Science, Engineering and Technology
International Journal of Architectural and Environmental Engineering
Vol:13, No:2, 2019
47	International Scholarly and Scientific Research & Innovation 13(2) 2019 ISNI:0000000091950263
Open Science Index, Architectural and Environmental Engineering Vol:13, No:2, 2019 waset.org/Publication/10010023

-- 2 of 8 --

stiffness t
k correspond to the secant stiffness to the solution at
time t, see Fig. 2 (a). To model an elastoplastic response, as
indicated in Fig. 1, it is also important to correctly take into
account the effect of unloading, as schematically shown in
Fig. 2 (b). If this is not considered the response will be
nonlinear elastic; i.e. the response will just follow R(u), not
considering any effects of unloading and reloading.
u
R
u(t k)
R(t i)
k(u(t i)) k(u(t j))
u(t i) 	u(t j)
k(u(t k))
R(t j)
u
R
k(u(t j -∆t))
u(tj -∆t)
R(u(t j -∆t))
k(u(t0))
k(u(t j)
R(u(t j))
u(t j)
(a) 	(b)
Fig. 2 (a) Secant stiffness used in a general case; (b) considering the
effect of unloading when deciding the secant stiffness. Based on [8]
In the calculations carried out here, the following method
has been used to include the plastic response:
 	0
max 	max 	max 	max	max 	, 	,...,	t 	t 	t t
	u 	u 	u 	u	 	
	 	(8)
 		max 	max
	max 	, 	if 	and
if not	0
t 	t 	t 	t
el	t 	el
pl
u 	u 	u 	u 	u 	u 	u
u  	 	 		
 	 

(9)
0
i t
t 	i
pl 	pl
i
u 	u


 		 (10)
From this the corresponding internal force, R is then
determined in each time step as
 	0	t 	t 	t
pl	R 	k 	u 	u	 	 	(11)
This method is rather primitive but works fine for a simple
case like this.
III. MODELLING OF ELASTOPLASTIC S PRING M ODEL IN OPEN-
MODELICA
The 	OpenModelica 	[19] 	includes 	many 	open 	source
libraries such as, electrical, thermal, fluid, magnetic, media,
and mechanics. The mechanics library is split into 1-D
translational, rotational, and multibody system library. Here,
1-D 	translational 	library 	was 	used 	to 	implement 	an
elastoplastic 1-D spring model. This model includes plastic
hardening and damping force which is not included in Section
II.
The reader will notice that the format of the equations in
this section differs from that used in Section II; equations
shown in this section use the Modelica language code format.
This is intentional, to increase ease of use if implementing the
same equations into Modelica. The following governing
equations were implemented. The first equation is defining the
deformation between the two connectors of 1-D spring model
by using the relative distance definition s_rel
_ 	_ 	0	deform 	s 	rel 	s 	rel	 	 	(12)
where s_rel0 is the initial deformation. Then the deformation
is separated into elastic and a plastic part
_ 	_ 	_1	deform 	deform elastic 	deform 	plastic	 	 	(13)
Thereafter the constitutive equation can be defined as
 	
 	 	 		( 	)
*
_ 	_1
der force 	ElasticModule
der deform 	der deform 	plastic


(14)
where der(ꞏ) is the time derivative operator in Modelica
language. The yield force is calculated as
* 	_ 	;	yieldforce 	ElasticModule 	s 	elas	 	(15)
The yield condition is defined as
 		_ 	*
_ 	;
f 	Yielding 	yieldforce 	sign force
s 	plastichardening
 	 (16)
Check if the yield condition is met by using equation:
 	
 	
_
_ 	;
f 	YieldCondition 	abs force
abs f 	Yielding
 	 	(17)
where 	f_YieldCondition 	< 	0 	means 	elastic 	phase 	and
f_YieldCondition = 0 means yielding. The abs(ꞏ) is the
operator for absolute value.
The hardening rule can be defined by
 	
 	
_ 	_ 	*
_ 	_ 1 ;
der s 	plastichardening 	h 	hardeningmodule
der deform 	plastic
 	(18)
A trial force is calculated as
 	 	 	 * 	;	der forcetrial 	der deform 	ElasticModule	 	(19)
The force condition is defined as
 	 	 		* 	;	forceCondition 	sign force 	der forcetrial	 	(20)
Now the flow rule can be defined with the following
conditions
 	
 	 	 	
 	
_ 	_ 2 	_ 	0
and 	0
1 / 	_ 	*
* 	_ 	0 and
0 	0 	0;
der deform 	plastic 	if f 	YieldCondition
forceCondition 	then
ElasticModule 	h 	hardeningmodule 	sign force
der forcetrial else if f 	YieldCondition
forceCondition 	then 	else
 	




(21)
World Academy of Science, Engineering and Technology
International Journal of Architectural and Environmental Engineering
Vol:13, No:2, 2019
48	International Scholarly and Scientific Research & Innovation 13(2) 2019 ISNI:0000000091950263
Open Science Index, Architectural and Environmental Engineering Vol:13, No:2, 2019 waset.org/Publication/10010023

-- 3 of 8 --

Update the plastic deformation derivative
 	 	 	
 	
_ 	_ 1 	_ 	_ 2
* 	;
der deform 	plastic 	der deform 	plastic
sign force
 	(22)
Damping is defined with the following straight forward
equation
_ 	* _ 	;	f 	d 	d v 	rel	 	(23)
where d is the damping and v_rel is the relative speed between
the two connectors in 1-D translational spring model.
Finally, the spring force can be calculated with:
_ ;	f 	force 	f 	d	 	 	(24)
The following real parameters were defined: ElasticModule,
h_hardeningmodule, d, s_rel0, and s_elas. Following were
defined as protected real states: s_plastichardening, f_d,
deform, 	deform_plastic_1, 	deform_plastic_2,
f_YieldCondition, f_Yielding, yieldforce, forcetrial, force, and
forceCondition. The continuum mechanics of plasticity for
one dimension is for example explained in [20].
Fig. 3 System model within OpenModelica 1-D translational mechanical library. Including SDOF model of 1-D elastoplastic spring model.
The system model in OpenModelica is shown in Fig. 3. It
shows that the loadcase of the airblast on the wall is translated
to a time force vector implemented into timetable1, which is
the 	input 	for 	the 	force1 	block. 	The 	force1 	block 	is
mechanically connected to the mass1 block, which represents
the SDOF mass of the studied wall. The mass1 block is
connected to the SDOF model 1-D elastoplastic spring model.
The SDOF model is then finally connected to a fix1 block.
All 	standard 	Ordinary 	Differential 	Equations 	(ODE)
solvers, e.g. euler, rungekutta, trapezoidal, are available in
OpenModelica. However, the powerful solver A Differential/
Algebraic System Solver (DASSL) is the one that makes it
easy to solve real life physical problems which usually
includes Differential Algebraic Equations (DAE) in addition
to ODE and solves these systems quite easily [21]. The
principle of DASSL solver is to approximate derivatives with
kth order Backward Differentiation Formula (BDF). In every
step, the DASSL solver chooses the k value and time step
t
based on the behavior of the solution, see [21] for details.
IV. TRANSFORMING A S TRUCTURE INTO A SDOF S YSTEM
To use a SDOF system to describe the response of a real
structure, the properties of the latter must first be transformed.
This can be done using so called transformation factors,
relating the property in the SDOF system to that of the
structure. This can be done by setting
m b	m 	m	
	 	(25)
k b	k 	k	
	 	(26)
F b	F 	F	
	 	(27)
where index b indicates the property of the structure and κm, κk
and k F represent the transformations factor for the mass,
stiffness and acting load. Implementing these into (1) and
making use of κk = k F [2] the basic dynamic equation for a
structure can be expressed as
 	mF b 	b 	b	m u 	k u 	F t	
 	 		 	(28)
where
m
mF
F

 
 	(29)
Consequently, the SDOF system used for an arbitrary
structure can be defined based on its real stiffness kb and
acting load F b, while the mass used must be expressed as an
effective mass m = κmFꞏm b.
The values of the transformations factors κ are determined
based on conservation of kinetic energy (κm), internal work
(κk) and external work (k F) as described in e.g. [2] or [12]. In
the literature, values of transformation factors for various
basic cases are available, see e.g. [5] or [12]. The deformed
shape of the structure is of importance and often linear elastic
or plastic response is assumed when determining the value of
World Academy of Science, Engineering and Technology
International Journal of Architectural and Environmental Engineering
Vol:13, No:2, 2019
49	International Scholarly and Scientific Research & Innovation 13(2) 2019 ISNI:0000000091950263
Open Science Index, Architectural and Environmental Engineering Vol:13, No:2, 2019 waset.org/Publication/10010023

-- 4 of 8 --

κ, see Fig. 4 for schematic illustration of deformed shapes
when assuming elastic and plastic response.
plastic hinge
(a) 	(b)
Fig. 4 Illustration of deformed shape in simply supported beam
subjected to an evenly distributed load at linear elastic (a) or plastic
(b) response
A single point is chosen to represent the response of the
structure, here denoted as the system point, and all values
related to the structure is related to this point. In Fig. 5,
transformation factors κ are summarized for some common
cases of a beam subjected to an evenly distributed load.
Fig. 5 Transformation factors κ for beams of various boundary
conditions subjected to an evenly distributed load. The black dot
indicates the position of the system point. Based on [12]
V. CASE S TUDY : RC WALL S UBJECTED TO EXPLOSION LOAD
For the sake of the comparison made in this paper an
explosion load acting on a simply supported reinforced
concrete wall, spanning in one direction, will be used. The
explosion load is based on the reflected pressure caused by a
hemispherical charge of 100 kg TNT detonating 15 m from
the wall. According to ConWep [4] this approximately
corresponds to a peak pressure of P r+ = 300 kPa and an
impulse intensity of ir+ = 960 Pas. Approximating the P(t)
relation to a triangular load shape the corresponding duration
can be determined as
,
2 	2 960 6.4 ms
300
r
r
r
i
t P


 	
 	
 	 	 	(30)
The loaded wall is assumed to have geometry, boundary
conditions and reinforcement amount according to Fig. 6 (a
1.0 m wide strip is studied), and the load is assumed to be
evenly distributed over its length. Material properties are
based on Eurocode 2 [3] and is made up of concrete quality C
30 and reinforcement of type B500C; static design material
properties are listed in Fig. 6. To simplify, no strain rate
effects are taken into account in the calculations.
P(t)
l = 2.7 m
(a)
0.20 m
1.0 m
10 s200 B500C	0.04 m
Concrete C 30 (ρ = 2500 kg/m3 ) 	E c = 33 GPa
f cd = 25 MPa
E s = 200 GPa
f yd = 500 MPa
(b)
Fig. 6 Studied wall strip subjected to explosion load, (a) showing
boundary conditions and (b) showing the cross-section
The calculation of the wall’s structural response is based on
a SDOF system, as schematically shown in Fig. 1. This means
that the response of the wall strip is simulated using one
degree of freedom only to describe its full response. This is
possible for a case where the shape of the structure’s
deformation is known (or can be assumed with realistic
reliability) throughout its full movement. Here it is assumed
that a plastic response will be dominant, i.e. that a plastic
hinge forms in the middle of the span as illustrated in Fig. 4.
The total mass of the wall can be determined as
2500 1.0 0.20 2.7 	1350 kg	b	m 	b h l	
	 	    	 	 	 	 	(31)
and using κmF = 0.667 from Fig. 5 the effective mass can be
determined as
0.667 1350 	900 kg	mF 	b	m 	m	
	 	 	 	 	 	(32)
The stiffness of a simply supported beam subjected to an
evenly distributed load can be determined as
3
384
5
EI
k l
 	 	(33)
Here, the moment of inertia is based on a cracked beam
(state II) and can thus be determined as
 	
3 2
3
II
II 	s 	II
bx
I 	I 	A 	d 	x	
	 	 	 	 	(34)
where b is the strip width, x II is the height of the compressive
zone, α = E s / E c is a material stiffness factor, A s is the
reinforcement amount and d is the effective height.
For a case of pure bending (i.e. no normal force, N = 0) the
height of the compressive zone can be determined from
s	II
s	II
II A	bx
d	A	bx
x




 2
2
→ 	 	 	0
2	2 		 	d	x
b
A
x 	II
s
II
 	(35)
Evenly distributed load
Deformed shape, elastic response
m	
 	0.504 	0.406 	0.483 	0.257
F	
 	0.640 	0.533 	0.600 	0.400
mF	
 	0.787 	0.762 	0.805 	0.642
Deformed shape, plastic response
m	
 	0.333 	0.333 	0.333 	0.333
F	
 	0.500 	0.500 	0.500 	0.500
mF	
 	0.667 	0.667 	0.667 	0.667
World Academy of Science, Engineering and Technology
International Journal of Architectural and Environmental Engineering
Vol:13, No:2, 2019
50	International Scholarly and Scientific Research & Innovation 13(2) 2019 ISNI:0000000091950263
Open Science Index, Architectural and Environmental Engineering Vol:13, No:2, 2019 waset.org/Publication/10010023

-- 5 of 8 --

Here α = 6.1, A s = 393 mm2 , b = 1000 mm and d = 160 mm,
resulting in x II = 25 mm, I II = 4.9ꞏ107 mm4 and finally a
cracked stiffness of k = k II = 6.3ꞏ106 N/m.
The moment capacity is determined based on stress block
factors and cross section force and moment equilibrium as
schematically shown in Fig. 7.
The height of the compressive zone is determined as
500 393 25 mm
0.8 	0.8 25 1000
yd s
cd
f 	A
x f b

 	 	
 	 (36)
and the moment capacity as
 		0.4 	... 	30.5 kNm	rd 	yd s	M 	f A d 	x	 	 	 	 	(37)
From this the static load capacity is determined as
8 	8 30.5 91 kN
2.7
Rd
Rd
M
R l

 	 	 	(38)
and the limit for elastic displacement as
3
6
91 10 14.4 mm
6.3 10
Rd
el
II
R
u k

 	 	
 (36)
b
As
x
d 	h
c
εcu = 3.5‰
εs 	d-x
x
f cd
Fs
0.4x	0.8x Fc
d = h - c 	z = d – 0.4x
z	M Rd
Fig. 7 Wall strip subjected to explosion load
The values presented above are sometimes somewhat
rounded off but in the numerical analyses that are presented
below the following (exact) values have been used as input
parameters:
 	Mass: m = 900 kg
 	Stiffness: k = 6.3ꞏ106 N/m
 	Capacity: R Rd = 91 kN
The (exact) load acting on the SDOF system, see Fig. 1, is
determined as
1 	1.0 2.7 300 	810 kN	r	F 	b l P 
	 	  	 	 	 	 	(40)
1 	, 	6.4 ms	r	t 	t
	 	 	(41)
giving a total impulse load of
1 	1.0 2.7 960 	2592 Ns	r	I 	b l i 
 	  	 	 	 	 	(42)
The time step used in the analysis are Δt = 0.064 ms.
The dynamic response of the model due to this load is
shown in Fig. 8, in which the maximum displacement obtained
reaches about 48 mm. After that, the mass swings back again
and the system is elastically unloaded. Due to plastic
displacement, though, the total displacement never reaches
back to zero again. Instead the mass oscillates around an
average displacement of about
48 	14 	34 mm	pl 	tot 	el	u 	u 	u	 	 	 	 	 	(43)
Fig. 8 Displacement-time relation u(t) for studied wall strip
The complementing results from the analysis are shown in
Fig. 9 and Fig. 10, where the load-time relation and load-
displacement relation, respectively, are shown. In Fig. 9, the
load F(t) applied on the system is clear and the internal
response R(t) is shown as a comparison. In Fig. 10, the applied
force-displacement relation R(u) is clear while the applied
load F(u) is shown as a comparison.
Fig. 9 Load-time relation from numerical analysis of SDOF system
VI. COMPARISON OF RESULTS OF SDOF I MPLEMENTATION IN
O PEN M ODELICA AND E XCEL
In this chapter two SDOF implementations are compared.
Sections II, IV, V are explaining the Microsoft Excel
implementation 	and 	Section 	III 	is 	explaining 	the
OpenModelica implementation of the Case Study presented in
0
5
10
15
20
25
30
35
40
45
50
0 	50 	100 	150 	200 	250
Displacement,
 u [mm]
Time, t [ms]
SDOF
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
800
900
0 	50 	100 	150 	200 	250
Load [kN]
Time, t [ms]
F
R
World Academy of Science, Engineering and Technology
International Journal of Architectural and Environmental Engineering
Vol:13, No:2, 2019
51	International Scholarly and Scientific Research & Innovation 13(2) 2019 ISNI:0000000091950263
Open Science Index, Architectural and Environmental Engineering Vol:13, No:2, 2019 waset.org/Publication/10010023

-- 6 of 8 --

Section V.
Fig. 10 Load-displacement relation from numerical analysis of SDOF
system
The Modelica model parameters are set as shown in Table I.
The damping and plastic hardening is set to zero, as well as
initial deformation. It is important to notice that the Modelica
implementation uses the s_elas as input parameter and not the
force capacity RRd. To avoid numerical difference in the
solution the complete division between structures force
capacity and elastic stiffness should be used as input, see
Table I. In the system model the mass of SDOF was set to 900
kg and loadForce time table was set to [0, 0; 0.000064,
810000.0; 0.0064, 0; 1, 0] in [s] and [N].
In Fig. 11, the simulation results of SDOF displacement
from 	both 	Excel 	and 	OpenModelica 	are 	shown. 	The
OpenModelica solution traces the Excel solution without any
deviation when it comes to rise time, maximum displacement,
plastic displacement, elastic amplitude and periodicity of the
elastic oscillation. In Appendix – Damping, the influence of
damping in the OpenModelica model is briefly shown.
TABLE I
USED I NPUT P ARAMETERS FOR SDOF MODELICA MODEL
Name 	Value 	Unit
D 	0 	Ns/m
ElasticModule 	6.3ꞏ10 6 	N/m
h_hardeningmodule 	0 	N/m
s_elas 	R Rd/k=0.014444 	mm
s_rel 	0 	mm
Fig. 11 SDOF displacement as a function of time for Modelica and
Excel model
VII. CONCLUSIONS AND DISCUSSIONS
Here it is shown how a concrete structure such as a beam or
a wall strip, with various boundary conditions, can be
translated 	into 	a 	SDOF 	model. 	In 	addition, 	how 	an
elastoplastic perfectly plastic model can be used to predict the
elastic and plastic displacement of the structure due to an
impulse load from an air detonated explosive charge is shown.
All MSB references are free to download.
A SDOF model with elastoplastic material behavior was
implemented in Excel. In OpenModelica a 1-D elastoplastic
translational spring model, which included plastic hardening
and damping, was implemented in the Modelica language. The
plastic hardening and the damping were set to zero in the case
study. The comparison between the two implementations in
Excel and OpenModelica of SDOF’s time history of the
displacement 	showed 	perfect 	agreement. 	The 	Excel
implementation is an easy to use implementation for a SDOF
system. However, if the complexity needs to be increased to
become a multi-degree of freedom problem or that the load
case is not just force applied input to the system becomes
more cumbersome to solve in Excel. However, this is easily
extended and modified in Modelica, where one does not have
to pre-define how the equations of the systems are used, i.e.
one can easily change inputs and what and number of degrees
of freedom. In Modelica, it is also easy to include other
physical system domains such as air condition, water, and
electricity in the same system model. This is to be able to
model more of the complete housing or shelter system that
needs to manage a reasonable degree of impulsive load.
The Modelica language provides engineers the development
environment to design and optimize the complex systems of
tomorrow for their intended purpose.
APPENDIX - DAMPING
It is recommended to not include damping in the impulse
load simulations of structural response with a SDOF model.
This generates conservative results and due to the nature of the
applied load the effect of damping is usually small. However,
if damping is to be included, it is usually given as a ratio of
critical damping. For the SDOF system in (1), the critical
damping is calculated by
2	cr	c 	k m	 	 	(44)
For the case study described in Section V, the critical
damping is ccr = 150599 Ns/m. The ratio of critical damping is
defined as
cr
c
c
  	(45)
Here, the OpenModelica SDOF is simulated with damping
ratio
 = 0, 0.01 and 0.02, i.e. 0%, 1% and 2% of critical
damping, see Fig. 12. This is approximately how many
concrete structures have as viscous damping.
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
800
900
0 	10 	20 	30 	40 	50
Load [kN]
Displacement, u [mm]
F
R
World Academy of Science, Engineering and Technology
International Journal of Architectural and Environmental Engineering
Vol:13, No:2, 2019
52	International Scholarly and Scientific Research & Innovation 13(2) 2019 ISNI:0000000091950263
Open Science Index, Architectural and Environmental Engineering Vol:13, No:2, 2019 waset.org/Publication/10010023

-- 7 of 8 --

Fig. 12 SDOF displacement in OpenModelica model with different
damping ratios
ACKNOWLEDGMENT
The authors acknowledge the support given by MSB and
especially Lars Gråbergs. Additionally, members of the West
Coast 	Sweden 	Shock 	Wave 	Group 	(WCSSWG), 	and
especially Dr. Joosef Leppänen, are highly acknowledged for
their input.
REFERENCES
[1] 	K-J. Bathe, Finite Element Procedures, Prentice-Hall, Englewood Cliffs,
New Jersey, USA, 1996.
[2] 	J. M. Biggs, Introduction to Structural Dynamics, McGraw-Hill, New-
York, USA, 1964.
[3] 	Eurocode 2: Design of Concrete Structures – Part 1-1: General rules
and rules for buildings, European Committee for Standardization,
Brussels, Belgium, 2004.
[4] 	ConWep – Collection of conventional weapons effects calculations
based on TM 5-855-1, Fundamentals of Protective Design for
Conventional Weapons, U.S. Army Engineer Waterways Experiment
Station, Vicksburg, USA, 1992.
[5] 	Structures to Resist the Effects of Accidental Explosions. UFC 3-340-02,
Department of Defense, USA, 2008.
[6] 	J. Ekström, Blast and Impact Loaded Concrete Structures. Engineering,
Chalmers University of Technology, PhD Thesis, Göteborg, Sweden,
2017.
[7] 	M. Johansson, Structural Behaviour in Concrete Frame Corners of Civil
Defence Shlters: Non-linear Finite Element Analyses and Experiments,
Department of Concrete Structures, Chalmers University of Technology,
PhD Thesis, Publication 00:2, Göteborg, Sweden, 2000.
[8] 	J. Johansson, Central differensmetod (Central difference method. In
Swedish.), Swedish Civil Contingencies Agency, B03-102, 2012-10-15,
Karlstad, Sweden, 2012.
[9] 	J. Johansson, Luftstötvåg (Air shockwave. In Swedish.), Swedish Civil
Contingencies Agency. Publ.no. MSB448, Karlstad, Sweden, 2012.
[10] J. Johansson and L. Laine, Bebyggelsens motståndsför¬måga mot
extrem dynamisk belastning, Del 1: Last av luftstötvåg (The resistance of
housing settlement subjected to extreme dynamic loading. Part 1: Load
of shock wave in air. In Swedish.), Swedish Civil Contingencies Agency,
Publ. no. MSB449, Karlstad, Sweden, 2012.
[11] J. Johansson and L. Laine, Bebyggelsens motståndsför¬måga mot
extrem dynamisk belastning, Del 2: Explosion i gatukorsning (The
resistance of housing settlement subjected to extreme dynamic loading.
Part 2: Explosion at an urban intersection. In Swedish.), Swedish Civil
Contingencies Agency, Publ. no. MSB450, Karlstad, Sweden, 2012.
[12] J. Johansson and L. Laine, Bebyggelsens motståndsför¬måga mot
extrem dynamisk belastning, Del 3: Kapacitet hos byggnader (The
resistance of housing settlement subjected to extreme dynamic loading.
Part 3: Building capacity. In Swedish.), Swedish Civil Contingencies
Agency, Publ. no. MSB142, Karlstad, Sweden, 2012.
[13] L. Laine, Markstötvåg (Ground shock wave. In Swedish.), Swedish Civil
Contingencies Agency, Publ.no. MSB344, Karlstad, 2012.
[14] J. Leppänen, Concrete Structures Subjected to Fragment Impacts –
Dynamic Behaviour and Material Modelling, Department of Concrete
Structures, Chalmers University of Technology, PhD Thesis, Publication
04:4, Göteborg, Sweden, 2004.
[15] J. Leppänen, Splitterverkan (Splinter effects, In Swedish.), Swedish Civil
Contingencies Agency, Publ.nr MSB345, Karlstad, Sweden, 2012.
[16] U. Nyström, Modelling of Concrete Structures Subjected to Blast and
Fragment Loading. Division of Structural Engineering, Chalmers
University of Technology, PhD Thesis, no. 3486, Göteborg, Sweden,
2013.
[17] J. Johansson, Strukturrespons vid impulsbelastning (Structural response
at impulse loading. In Swedish.), Swedish Civil Contingencies Agency,
B03-101, 2014-04-16, Karlstad, Sweden, 2014.
[18] Modelica - A Unified Object-Oriented Language for Systems Modeling,
Modelica Association, language specification and relevant documents
can be freely downloaded at https://www.modelica.org, 2019.
[19] OpenModelica, 	an 	open-source 	Modelica-based 	modeling 	and
simulation environment intended for industrial and academic usage,
Open Source Modelica Consortium, can be freely downloaded at
https://www.openmodelica.org, 2019.
[20] A. Öshcner, Elasto-Plasticity of Frame Structure Elements Modeling
and Simulation of Rods and Beams, Springer Verlag, p588, DOI
10.1007/978-3-662-44225-8, 2014.
[21] L. Petzold, A Description of DASSL: A Differential/Algebraic System
Solver, SAND82-8637, Applied Mathematics Division, Sandia National
Laboratories, Livermore, CA, USA, 1982.
[22] Swedish Civil Contingencies Agency (MSB) documents can be freely
downloaded at https://www.msb.se/skyddsrum, 2019.
World Academy of Science, Engineering and Technology
International Journal of Architectural and Environmental Engineering
Vol:13, No:2, 2019
53	International Scholarly and Scientific Research & Innovation 13(2) 2019 ISNI:0000000091950263
Open Science Index, Architectural and Environmental Engineering Vol:13, No:2, 2019 waset.org/Publication/10010023

-- 8 of 8 --