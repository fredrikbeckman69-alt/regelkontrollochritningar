---
title: "L04 102 Concrete Wall Subjected To Fragment Impacts"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-102_concrete-wall-subjected-to-fragment-impacts.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","beräkning","explosion","splitterskydd","splitter","strength","strain"]
summary: "Master´s Thesis 04:1 Concrete wall subjected to fragment impacts Numerical analyses of perforation and scabbing RASMUS REMPLING Department of Structural Engineering and Mechanics Concrete Structures CHALMERS UNIVERSITY OF TECHNOLOGY Göteborg, Swed..."
---

Master´s Thesis 04:1
Concrete wall subjected to fragment
impacts
Numerical analyses of perforation and scabbing
RASMUS REMPLING
Department of Structural Engineering and Mechanics
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2004

-- 1 of 71 --



-- 2 of 71 --

MASTER THESIS 04:1
Concrete wall subjected to fragment
impacts
Numerical analyses of perforation and scabbing
RASMUS REMPLING
Department of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2004

-- 3 of 71 --

Concrete wall subjected to fragment impacts
Numerical analyses of perforation and scabbing
RASMUS REMPLING
© RASMUS REMPLING 2004
Master Thesis 04:1
Archive no. 111
Department of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Reproservice, Chalmers
Concrete Structures
Göteborg, Sweden 2004

-- 4 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	I
Concrete wall subjected to fragment impacts
Numerical analyses of perforation and scabbing
RASMUS REMPLING
Department of Structural Engineering and Mechanics
Concrete Structures
Chalmers University of Technology
ABSTRACT
Concrete subjected to fragment impact is mainly related to protective structures such
as civil defence shelters where the main threat arise from explosions caused by
military weapons.
For analysing impacts on concrete, material models are used in numerical analyses to
simulate the reality. Such a model is the RHT model which is used to describe the
material behaviour of concrete in the software Autodyn. The model has been
evaluated for constructions subjected to compression and the result were satisfying.
However, the function of the model is not satisfying for constructions subjected to
tensile stresses. Therefore there exists a need for deepening the knowledge about
penetration and scabbing of concrete subjected to fragment impact, about the
parameters involved, and how the impact should be modelled in a accurate way.
The intentions are to give recommendations on how scabbing and perforation by
fragment impact will be modelled in Autodyn. The numerical calculations, based on
the RHT model, were verified by results of already performed full-scale tests. The
model was calibrated from information gained from a parameter study of the most
important parameters such as tensile strength, softening energies, strain rate and shear
strength.
It was found out that by a calibration of the parameters conduction strain rate and
shear resistance, in the material model, a result was obtained that was in accordance
with the full-scale tests at the backside of the specimen. On the front side the result
was not that convincing but showed tendencies that with further evaluation of the
material model it could reach satisfaction.
Key words: concrete, fragment, blast, projectile, impact, penetration, perforation,
scabbing, dynamic loading, dynamic resistance, strain rate, numerical
analysis, protective structures.

-- 5 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	II
Betongvägg utsatt för splitterbelastning
Numeriska analyser av genomträngning och utstötning
RASMUS REMPLING
Institutionen för konstruktion och mekanik
Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
Splitter belastad betong återfinns nästan uteslutande i skyddande konstruktioner
såsom 	skyddsrum. 	Det 	huvudsakliga 	hotet 	mot 	sådana 	konstruktioner 	är
konventionella bomber som skapar splitter när de exploderar.
För att analysera splitter som träffar en betong konstruktion används material
modeller i kombination med numeriska analyser. RHT modellen som använd i
programvaran 	Autodyn 	är 	en 	sådan 	material 	modell. 	Modellen 	fungerar
tillfredsställande för konstruktioner som är utsatta för tryck enligt tidigare utförda
studier. För konstruktioner som är utsatta för drag har det visat sig att modellen inte
ger tillfredsställande resultat, varpå det uppstått ett behov av en fördjupande studie
utav genomträngning och utstötning på splitter belastad betong.
Arbetes intention är att ge rekommendationer om hur utstötning och genomträngning
bör modelleras i Autodyn vilket förutsätter en fungerande material modell. Modellen
har verifierats med resultat från tidigare utförda försök där en SKF kula sköts på
betong. Före verifieringen kalibrerades modellen utifrån en parameterstudie av de
viktigaste 	parametrarna, 	drag 	hållfasthet, 	brottenergi, 	töjningshastighet 	och
skjuvhållfasthet.
Resultatet 	blev 	att 	det 	var 	möjligt 	att 	kalibrera 	parametrarna 	som 	styr
töjningshastighet och skjuvhållfasthet så att ett överensstämmande resultat med de
fullskaliga försöken uppnås, men endast på baksidan av provet. På framsidan,
ingångssidan, var resultatet inte lika övertygande men visade tendenser till att kunna
bli bättre med en djupare studie an material modellen.
Nyckelord: 	betong, 	splitter, 	penetration, 	genomträngning, 	utstötning, 	dynamisk
belastning, dynamisk hållfasthet, töjningshastighet, numeriska analyser,
skyddskonstruktioner.

-- 6 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	III
Contents
ABSTRACT 	I
SAMMANFATTNING 	II
CONTENTS 	III
PREFACE 	V
NOTATIONS 	VI
1 	INTRODUCTION. 	1
2 	RESPONSE OF CONCRETE UNDER DYNAMIC LOADING. 	2
2.1 	Response of concrete under static loading. 	2
2.2 	Strain rate effect on the strength of concrete 	4
2.3 	Strain rate effects considered in Autodyn. 	7
2.4 	Stress waves. 	7
3 	NUMERICAL MODELLING OF CONCRETE UNDER SEVERE DYNAMIC
LOADING. 	8
3.1 	Conservation of mass, momentum and energy. 	8
3.2 	Mesh techniques. 	10
3.3 	Equation of state. 	11
3.3.1 	Concrete 	11
3.3.2 	Steel 	12
3.4 	Constitutive models. 	12
3.5 	Autodyn. 	15
4 	NUMERICAL ANALYSIS OF CONCRETE PERFORATION. 	17
4.1 	Experimental series. 	17
4.2 	Analysis. 	21
4.3 	Parameter study. 	23
4.3.1 	Strain Rate 	24
4.3.2 	Shear force. 	27
4.3.3 	Tensile force 	29
4.3.4 	Crack softening. 	31
4.3.5 	Results from parameter study. 	35
4.4 	Calibration of parameters. 	37
4.5 	Parameters in RHT model. 	38
4.6 	Results. 	39
5 	CONCLUSIONS. 	44

-- 7 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	IV
5.1 	Future studies 	45
6 	REFERENCES 	46
Appendix A: Calibration of variables.
Appendix B: Material model steel.
Appendix C: Attard model.
Appendix D: Analysis from calibration of parameters.

-- 8 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	V
Preface
This master thesis have been carried out at the department of Structural Engineering
and Mechanics, Chalmers University of Technology, as a final step in the Master
Program Structural Engineering and Design during the summer and autumn of 2003.
The examiner is Professor Kent Gylltoft.
I am very grateful for the rewarding work that my supervisor Joosef Leppänen has
conducted giving me day-to-day consultancy and for being patient with all my
questions. I also want to thank Björn Engstöm not only for his inspiring lectures in the
basic course of concrete, at University of Chalmers, initiating my interest for concrete
structures but also for his never ending ambitions to give the best lectures, which
motivate and inspire the students to do their best.
And, finally, I want to show my appreciation to my life mentor and mother Margareta.
Göteborg, December 2003
Rasmus Rempling

-- 9 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	VI
Notations
Roman upper case letters
A 	Area.
B 	Parameter conducting residual strength.
C 	Concrete class.
D 	Parameter conducting strain rate.
De 	Ingoing crater diameter.
Ds 	Outgoing crater diameter.
D1 	Damage constant.
D2 	Damage constant.
D3 	Parameter for Yfractured .
Eci 	Elasticity modulus, concrete.
Ec0 	Constant calculating elasticity modulus, concrete.
E0 	Internal energy.
E1 	Internal energy.
Fcap 	Parameter in Autodyn.
Fp 	Internal pore pressure.
FRATE 	Parameter in Autodyn.
Fst 	Counteracting force inside pore.
G 	Shear modulus.
Gf 	Fracture energy, Crack energy.
Gelastic 	Parameter in Autodyn.
Gplastic 	Parameter in Autodyn.
L 	Length.
M 	Parameter in Autodyn.
N 	Parameter in Yield surface.
P 	Pressure.

-- 10 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	VII
P* Pressure.
P0 	Pressure.
R3 	Parameter in Autodyn.
Us 	Velocity.
Up 	Velocity.
V 	Volume.
V0 	Volume.
Y 	Yield surface.
Yelastic 	Elastic stress.
Yfail 	Failure stress.
Yresidual 	Residual stress.
Y*res 	Residual strength.
Ytxc 	Parameter in Autodyn.
Roman lower case letters
de/dt 	Strain rate.
Δhp 	Change in pore diameter.
f c 	Concrete compressive strength.
f c,imp 	Impacting compressive strength.
f ck 	Characteristic compressive strength.
f ck0 	Constant for calculating compressive strength.
f cm 	Mean compressive strength after 28 days.
f cm,cyl 	Compressive strength, cylinder standard.
f ctk0,m 	Constant for calculating mean tensile stress.
f ctm,imp 	Impacting mean tensile strength.
f ctm 	Mean tensile strength.
f t 	Tensile strength.
f s 	Shear force.
hp 	Initial pore diameter.

-- 11 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	VIII
pe 	Ingoing crater deepness.
ps 	Outgoing crater deepness.
t 	Time.
w 	Deformation.
Greek letters
ΔL 	Increase in strength.
Δεpl 	Change in plastic strain over time.
ε 	Strain.
εc 	Concrete strain.
ε& 	Strain rate.
ε&
0 	Constant for calculating strain rate.
ε& ct 	Concrete strain rate.
ε& ct,0 	Constant to calculate dynamic tensile strength.
εpfailure Change in plastic strain over time.
μ 	Deformation.
ν 	Poissons ratio.
ρ 	Density.
ρ0 	Initial density.
σ 	Stress.
σc 	Concrete Stress.
σeq 	Actual Stress.
σlat1 	Lateral pressure.
σlat2 	Lateral pressure.
σlat3 	Lateral pressure.
σy 	Yield stress.
σ1 	Principal stress.

-- 12 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	IX
σ2 	Principal stress.
σ3 	Principal stress.
τ 	Shear resistance.
θ 	Meridian stress.

-- 13 of 71 --



-- 14 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	1
1 	Introduction.
This master’s thesis evaluate and explore the response of concrete subjected to
fragment perforation and penetration by using numerical methods. The software
Autodyn was used in the numerical analyses.
Concrete subjected to fragment impact is mainly related to protective structures such
as civil defence shelters where the main threat arise from explosions caused by
military weapons.
Civil defence shelters exposed to explosions are not only subjected to fragment
impact. By the explosion follows a blast wave, falling debris from collapsing building,
and fragment impact. The fragments impacting the construction penetrate or even may
perforate the construction wall causing damage in the total height of the wall. Almost
all penetrations that is fairly deep causes scabbing on the backside of the construction
wall, generated by high tensile stresses.
In earlier projects at Chalmers University of Technology non-linear analysis have
been performed by Johansson (1999) and Johansson (2000), analysing the blast wave
and falling debris arisen from the explosion. These studies were followed by a study
of the combination of blast wave and fragment impact, Leppänen (2002). However,
the numerical analysis in Leppänen was limited to projectile penetrations. As a
continuation, the ongoing research project by Leppänen involves also fragment
perforations. This project is supposed to make a base for the study of the phenomenon
related to the fragment penetrations of concrete.
For analysing impacts on concrete, material models are used in numerical analysis to
simulate the reality. The RHT-model, applied in Autodyn, is used to describe the
material behaviour of concrete. The model works properly for constructions subjected
to compression. For constructions subjected to tensile stresses, however, is the
function of the model not satisfying. Therefore there exists a need for deeper
knowledge about penetration and scabbing of concrete subjected to fragment impact,
about the parameters involved and how the impact should be modelled in a correct
way.
The final goal is to give recommendations on how scabbing and perforation by
fragment impact will be modelled in Autodyn. The goal should be reached by
numerical calculations verified by results of already performed full scale tests and a
parameter study of the most important parameters such as tensile strength, softening
energies, strain rate and shear strength.
The method chosen, verifying the calibrated model, based on a parameter study with
full-scale experiments is a fast method reaching results early in the process. As the
experiments already are conducted the method also becomes cheap. An alternative
method could be to calibrate and validate the model with test made in a laboratory and
then apply the model to real structures. Such a method should take long time since
every parameter have to be calibrated and validated and is therefore not suitable for a
master thesis.

-- 15 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	2
2 	Response of concrete under dynamic loading.
The response of concrete under dynamic loading is not the same as for concrete under
static loading mainly because of the high strain rates that are present for dynamic
loading.
2.1 	Response of concrete under static loading.
The response of concrete under static loading is known through the stress-strain
relationship. The concrete under compression got an elastic response before the first
crack develops as a result of tensile splitting. Tensile splitting is a result of the
materials need of expansion perpendicular to the load axis. The first stage, in the
concrete response, is correctly approximated with a linear response. The following
stage in which the tensile splitting increases and further cracks develops the response
is non-linear. While in the ultimate stage when failure occurs and the maximum
capacity is reached, the increase in stress stops but the increase in deformation
continues with a relaxation of stress continuing until the residual strength is reached.
The residual strength is the strength that the member can produce after cracking
because of the friction in the crack plane. However, in the uniaxial loading there is no
residual strength. Concrete under tensile stress behaves more or less the same as under
compressive stress but with the big difference that the tensile stress drops fairly
quickly after the maximum stress is reached and cracking occurs, called tensile
softening. The ultimate tensile strength is known to be less than one tenth of the
ultimate compressive strength for normal strength concrete. There is no residual
strength in a member loaded in tension.
ε
σ
Tension
Compression
Figure 1: Stress strain relationship for concrete.
The expansion of the crack after it is initiated is governed by the amount of energy
that needs to be released. This energy is called the fracture energy and is normally
used as parameter in numerical analysis of concrete to control the crack development.

-- 16 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	3
εc L
σy
σc
ΔL
Gf
w
σy
εc
ε
σc	
σc
w
Figure 2: The displacement is divided into a stress-strain relationship and a stress
crack width relation. The area under stress crack width is the fracture
energy Gf .
When 	discussing 	the 	response 	of 	materials 	looking 	only 	in 	one 	direction, 	a
simplification often is made to help the understanding. Unfortunately is the response
dependent 	on 	all 	directions 	i.e. 	the 	loads 	and 	the 	material 	structure 	in 	three
dimensions. A general stress state in three dimensions is described in a right angle
system 	of 	coordinates 	with 	the 	normal 	stresses 	σx , σy, σz 	and 	the 	shear
stresses τx , τy, τz oriented according to Figure 3. In a certain position the stresses
occur only as normal stresses, which are named the principal stresses σ1 , σ2 , σ3 .
σy
τyz
τyx
τzy
σz
τzx
τxy
τxz
σx
y
z
x
σ2
σ1
σ3
Figure 3: General stress state and principal stresses.
In uniaxial pressure, no lateral pressure, failure occurs as a combination of tensile
splitting and shear failure, something that results in a quick descending curve. For
confined concrete, i.e. concrete exposed to compression and lateral pressure, the
descending curve is not that steep, as it tends toward the residual strength because of
the fact that the confinement work against the tensile splitting. Another effect of
lateral pressure is that the strength and stiffness increase and the strains are enlarged.
While under tension and lateral pressure the strength is not highly affected but the
strains are extended.

-- 17 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	4
σ
σ
σlat
σlat
1
σlat
3
ε
σ
σlat1<σlat2<σlat3
σlat
2
Figure 4: Effect of confinement.
2.2 	Strain rate effect on the strength of concrete
It is known that the compressive and tensile strength increase with the strain rate i.e.
strain rate is the velocity of the loading. Different test have been done looking at
different parameters involved and consequently the shape of the strain rate-strength
relationship of tensile strength and compressive strength deviate from each other, seen
in Figure 5. The increase in strength with strain rate is divided into two parts. The first
part considers lower strain rates and depends on the water content while the second
part considers higher strain rates and is related to forces of inertia. In the CEB (1990)
strain-strength relations are defined for both compression and tension, evaluated from
the compressive strength of the material in the whole spectra (equation 2.4 and 2.8).
Tensile strength:
1-
*	016	,1
0
, s	30	for 	<⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
= 	ct
ct
ct
ctm
imp	ct
s
f
f
ε
ε
ε
δ
&
&
& (2.1)
1-
3
1
0
, s	30	for	* 	>⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
= 	ct
ct
ct
s
ctm
imp	ct
f
f
ε
ε
ε
β 	&
&
& (2.2)
33	,	2	*	11	,	7	log 	−	= 	s	s	
δ	
β 	(2.3)
0
6	10
1
cm
cm
s
f
f
+
=
	δ 	(2.4)
Compressive strength:
1-
*	026	,1
0
, s	30	for 	<⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
= 	c
c
c
cm
imp	c
s
f
f
ε
ε
ε
α
&
&
& (2.5)

-- 18 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	5
1-
3
1
0
, s	30	for	* 	>⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
= 	c
c
c
s
cm
imp	c
f
f
ε
ε
ε
γ 	&
&
& (2.6)
2	*	156	,	6	log 	−	= 	s	s	
γ	
γ 	(2.7)
0
9	5
1
cm
cm
s
f
f
+
=
	α 	(2.8)
Strainrate effects on Compressive and Tensile strength
0
0,5
1
1,5
2
2,5
3
1,00E-05 	1,00E-04 	1,00E-03 	1,00E-02 	1,00E-01 	1,00E+00 	1,00E+01 	1,00E+02 	1,00E+03
Strainrate de/dt
f,imp/fcm
fc,imp/fcm
fct,imp/fctm
Figure 5: Strain rate effects on the compressive and tensile strength.
It is seen in the formulas (equation 2.1-2.8) and the related graph (Figure 5) that both
the 	compressive 	and 	the 	tensile 	strength 	increase 	with 	the 	strain 	rate. 	This
phenomenon is very present and applicable when dealing with explosive loads, why it
is relevant to explain the phenomenon in this report.
As the strength increase with the strain rate in the high strain rate range the nonlinarity
of concrete decrease, which is explained by Zielinski (1981) as a result of the
differences in the crack development. At lower strain rates the cracks are able to find
the path that involve least energy. While at high strain rate the cracks take in a way a
straighter path through the concrete and thus not only in the cement, as with static
loading but also through the aggregate of the concrete. The higher strength of the
aggregate explains consequently the increase of the compressive/tensile strength with
increased strain rate.
At the lower strain rate range the strain rate effects are explained by another
phenomenon. Rossi (1991) tries to explain the strength increasing effect by the free
water effect in the material. Because of the random direction of the pores in the

-- 19 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	6
concrete, Rossi (1991) chooses to only threat pores that are loaded perpendicular or
parallel with their own direction.
For pores loaded perpendicular to its own direction Rossi (1991) and Han (1991)
propose 	the 	same 	discussion 	as 	Kaplan 	(1980), 	to 	explain 	the 	alteration 	in
compressive strength with increased strain rate and free water content. Han explains
the alteration in compression strength by the fact that when concrete is compressed
the water filled pores in the concrete want to close and consequently wants the free
water to move from its initial location. Because of the viscosity of water and the fact
that a bigger mass needs a bigger force to accelerate, the closing of the cell causes an
internal pressure Fp, dependent on the size of the pore, the water content in the pore
and the speed of the compression. This alteration in pressure counteracts the
compression and an increase in compression strength is gained.
Compressed water pore
Water pore
hp
hp -dh
p
Fp
Figure 6: Pore water pressure.
Rossi (1991) proposes a physical mechanism capable of explaining the experimentally
observed results, that pores loaded parallel with its own direction have an effect on the
increased tensile strength with strain rate. Rossi explains the phenomenon by the
Stefan effect. That the existence of a thin viscous film like water between two
perfectly parallel plates, separated by a distance, causes a counteracting force Fst
when the two plates are separated. In the same way as a plate of glass is difficult to lift
when placed on a wet surface. Greater separating force generates a greater opposing
force.
Fst
hp +dhp
hp
Water pore
Extended water pore
Figure 7: Stefan effect.

-- 20 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	7
Concluding these hypotheses, it should be possible to say that the two effects are
working together because of the general accepted theory that a compressed body in
one direction wants to increase in its perpendicular direction and therefore should the
two strength-increasing effects be present at the same time.
2.3 	Strain rate effects considered in Autodyn.
Autodyn considers the increase in strength with strain rate in its numerical analysis by
a factor called Frate. The factor Frate depends on the actual strain velocity and a
basic value powered by a user defined parameter, one for compression and one for
tension. As seen below are the function in Autodyn the same as CEB apply presented
in equation (2.2) and (2.6) with the slight difference that the formulas follows
different limits. The CEB uses the strain rate to set the limits while Autodyn uses the
actual pressure.
Frate= 	n	compressio
3
1	for
0
c	f	P >⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
α
ε
ε
&
& (2.9)
tension
3
1	for
0
tf	P <⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
δ
ε
ε
&
& (2.10)
2.4 	Stress waves.
As the report deals with penetration of a concrete wall is it in its place to explain the
phenomenon of stress waves subjected to a material with free boundaries.
When the fragment comes in contact with the wall a stress wave is initiated. The
stress wave propagates in the longitudinal and transverse directions and generates a
compressive stress wave on its way. When the wave reach the border of the wall the
wave is reflected and goes back generating tensional stresses equal to the compressive
stresses but with opposite sign. Since the tensile strength is much lower than the
compressive strength for concrete, scabbing could be caused by the high tensile
stresses.
Compressive stresses
Tensile stresses
Air 	Concrete
t1
Stress
Boundary
Concrete 	Air
t2
t3
t4
Figure 8: Stress wave development on a free boundary.

-- 21 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	8
3 	Numerical 	modelling 	of 	concrete 	under 	severe
dynamic loading.
As described in the introduction one aim of the thesis is to give recommendations on
how scabbing and perforation by fragment impact shall be modelled in Autodyn.
Autodyn is a numerical solver for loading conditions of high strain rates and uses the
standard methods for numerical modelling. It solves a wide range of non-linear
problems in solid, fluid and gas dynamics by using numerical calculations. To
describe the material movement it uses Lagrangian and Eulerian processors among
others, described in chapter 3.2. The governing equations for numerical calculations
in Autodyn are the Rankine-Hugoniot equations which treat conservation of mass,
momentum, and energy described in chapter 3.1. To finish the description of the
continuous changes without abruption called continuum. Two more relations, except
load and boundary conditions, describing the material behaviour need to be explained.
The two relations are the equation of state that describes the relationship between
pressure and density, and a constitutive model which describes the material state
related to pressure.
3.1 	Conservation of mass, momentum and energy.
When the shock wave propagates through the media, built up by element-mesh in the
model, it becomes compressed. The compression is exemplified by the deformation of
the elements in the numerical calculations.
To describe the phenomenon a simile could be done. If we look at the compression of
the material as a snowplough shovelling snow moving forward. If the snowplough
moves with a velocity of Up, the compressed snow in front of the plough moves with
the same velocity Up. On the other hand the region separating the compressed snow
from the uncompressed, is moving with the velocity Us which is greater than Up,
because of the fact that snow is added to the compressed region and the region border
is so forth growing all the time. Meyers (1994) describes the phenomenon in a more
scientific way so that it is possible to derive the governing equations. He chooses to
simplify it by considering a cylinder, of unit cross-sectional area (A=1), which a
piston penetrates.
Initially the piston, in Figure 9 is at rest, the media in the cylinder has before t0 a
pressure P0, density
ρ0, velocity U0, and an internal energy E0. At the time t 0 the
piston is pushed into the cylinder, with a velocity of Up, compressing the material.
After a time-step
δt has the compressed region of the material moved forward a
distance equal to Us*t 1, Us is the velocity at the end of the compressed region and
t 1=t0+
δt, while the piston has moved a shorter distance equal to Up* t 1. After
conservation of mass, momentum and energy, i.e. keeping the properties from the
undeformed region to the deformed region, another time-step takes place and the
cycle is completed. Applying this theory to a finite element mesh with the compressed
zone as an element changing in shape but keeping the same internal properties is
reached by the governing equations.
With Figure 9 the equations of conservation of mass, momentum, and energy can be
derived.

-- 22 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	9
• 	Conservation of mass:
The mass of initial uncompressed material = The mass of the compressed material.
A	t	U	U	A	t	U 	p	s	s 	1	0	1 	)	( 	−	=
ρ
	ρ 	(3.1)
• 	Conservation of momentum:
The change of momentum (mass* velocity) = The impulse (F dt) of the external
forces.
( 	) 	( 	) A	t	P	P	U	t	U	U	A 	p	p	s 	1	0	1 	0 	−	=	−	−
	ρ 	(3.2)
• 	Conservation of energy:
The change in internal energy plus change in kinetic energy = The work done by
the external forces.
Change in internal energy =
( 	)	[ 	] 	[ 	] 	( 	) 	A	t	U	E	E	A	t	U	E	A	t	U	U	E 	s	s	p	s 	1	0	0	1	1	0	0	1	1	
ρ	
ρ	
ρ 	−	=	−	− 	(3.3)
Change in kinetic energy =
( 	)	[ 	] 	A	t	U	U	A	t	U	U 	s	p	p	s 	1	0
2
1 	2
1	0
2
1	
ρ
	ρ 	=	−	− 	(3.4)
The work of the external forces =
A	t	PU p 1 	(3.5)
Equations (3.3) + (3.4) = (3.5) and yields:
Æ ( 	) 	A	t	PU	AU	t	U	A	t	U	E	E 	p	p	s	s 	1
2
1	0	1	0	0	1 	2
1 	=	+	−
	ρ
	ρ 	(3.6)
Simplifications of the equations (3.1), (3.2) and (3.6) gives finally the conservation
laws:
( 	)	p	s	s 	U	U	U 	−	=
ρ
	ρ0 	mass 	(3.7)
( 	) 	0	0 	P	P	U	U	U 	p	p	s 	−	=	−
	ρ 	momentum 	(3.8)
( 	)( 	)	V	V	P	P	E	E 	−	+	=	− 	0	0	0 	2
1 	energy 	(3.9)

-- 23 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	10
(U s-U p )t2	U pt2
(U s-U p)t1	U pt1
U st1
P0 ,
ρ0 ,E0
U0 = 0
t=0
t=t 1
P0 ,
ρ0 ,E0
U0 = 0
P1 ,
ρ1 ,E
U p 	U s
Compressed region
t=t 2
P0 ,
ρ0 ,E0
U0 = 0
U p 	U s
P1 ,
ρ1 ,E
U st2
Compressed region
Figure 9: Piston penetrating a cylinder to simplify the derivation of the general
equations.
3.2 	Mesh techniques.
There exist two main processors for calculating with finite elements. One for
modelling solid materials and structures named Lagrange and one for modelling fluid
material and large distortions named Euler. The mesh in the Lagrange processor
follows the material as it deforms and the material stays inside the initial element
definition with no transport of material between elements. The advantage of this,
according to the Autodyn manual tends to be that the computational process is fast. It
is also seen that material interfaces, free surfaces, and history dependent material
behaviour are easier to follow. The disadvantage of Lagrange is the inaccuracy and
inefficient solution when the mesh becomes highly distorted by excessive material
movement, which may lead to a termination of the calculation. Autodyn applies
solutions such as rezoning and remapping of the distorted mesh to avoid this problem.
Another way to overcome the problem is to use an erosion model that remove the
element that has distorted more than a prescribed value, normally chosen as the plastic
strains. The backlash with the erosion model technique is that it gives a non-physical
solution by the fact that mass is removed from the system.

-- 24 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	11
t > 0.0	t = 0.0
Figure 10: Lagrangian mesh distortion for one subgrid.
As the Euler processor have not been used in the analysis it will only be mentioned
shortly. The processor uses a control volume method to solve the equations that
govern conservation of mass, momentum, and energy. This is done with a two-step
numerical procedure where the first is a normal Lagrange step followed by the Euler
step. In the Euler step the updated variables are mapped onto the Euler mesh, i.e. the
material moves inside the mesh.
3.3 	Equation of state.
The general equations derived in chapter 3.1 are three but the number of unknowns is
five. To be able to determine all parameters involved there is need for more equations.
One of them is the equation of state (EOS) which relates the pressure to the internal
energy and the density.
( 	)	E	P	P 	,	
ρ	= 	(3.10)
For a static numerical analysis the EOS normally describes the material behaviour and
is generally assumed to be linear, while for severe loading it is essential to take into
account the non-linearity of the material behaviour because of the high hydrostatic
pressure.
3.3.1 	Concrete
For concrete it is known that the relationship pressure – density becomes non-linear at
a certain pressure. Before this brake point the concrete response is elastic and thus
linear. With increased loading the pores are compressed and micro cracking occurs as
a consequence the pores collapse and the material becomes compacted. At very high
pressure the concrete is fully compacted and the relationship between pressure and
density once again become linear. In Figure 11
ρ0 is defined as the initial undisturbed
concrete density and
ρs as the density of the fully compacted concrete at zero
pressure. The material behaves elastic until it reaches a pressure Pcrush where the
plastic compaction phase is initiated.

-- 25 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	12
ρs	
ρ0
Elastic loading
ρ
P
Pcrush
Plastic compaction
Fully
compacted
Elastic
Unloading/reloading
Figure 11: Equation of state (EOS), the relationship between pressure and density.
3.3.2 	Steel
Steel in compression is more or less linear proportional to the hydrostatic pressure
why it is essential to use a linear EOS for describing the behaviour of steel where the
pressure level depends on the bulk modulus K and the compression
μ as seen in
Figure 12.
K
p
μ
p=K
μ
Figure 12: Equation of state for steel.
3.4 	Constitutive models.
Another relationship that should be stated is the relationship that relates the stress to
the strains (
ε), strain rates (
ε& ), internal energy (E), and damage (D), which is done by
the general form stated in equation (3.11).
( 	)	D	E	f 	ij	ij	ij 	,	,	,
ε	
ε	
σ 	&	= 	(3.11)

-- 26 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	13
In Autodyn this relationship is defined with the RHT model by Riedel (2000)
including pressure hardening, strain hardening, strain rate hardening, third invariant
dependence (the product of the three principal stresses), and damage. Three pressure
dependent surfaces; one defining failure, one that defines the elastic limit and one for
the residual strength describe this.
In Figure 14 the RHT model is defined with yield strength over pressure, where the
pressure is the mean value of the three principal stresses according to equation (3.12).
When an element is exposed to pressure applied linear, line one and two in Figure 14,
it start to strain with a following increase in stress, in the model this stress strain
relationship, called the elastic phase continues with inclination according to the
elasticity modulus until the elastic limit surface is reached. In next phase, called
hardening phase, the non-linear response is approximated with a linear response with
the inclination set by the parameters Gelastic and Gplastic, equation (3.13) and Figure 13.
The failure surface ends this phase and the softening phase starts. In the softening
phase the pressure and the stress start to descend towards the residual surface
according to equation (3.14) to (3.16) and the damage constants D1 and D2. If the
pressure is applied, with a lower angle, line two (still linear), a higher elastic and
failure limit is reached as seen in the right picture in Figure 14. For the special
pressure case when all the principal stresses are equal, the increase in pressure follows
the x-axis in Figure 14 and is called hydrostatic pressure.
3
3	2	1	
σ	
σ	
σ 	+	+
=	p 	(3.12)
⎟
⎟
⎠
⎞
⎜
⎜
⎝
⎛
−
−
=	−
plastic	elastic
elastic	elastic	fail
softening	pre	pl G	G
G
G
Y	Y
3
)	(	
ε 	(3.13)
with Yfail and Yelastic according to Figure 14 and G as shear modulus.
εpl
σ
ε
εpl(pre-softening)
Real behavior
Model
Figure 13: Hardening phase.
( 	) 2
1
D
spall
failure
p 	P	P	D ∗	∗ −	=
	ε 	(3.14)

-- 27 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	14
∑ Δ
= 	failure
p
pl
D
ε
ε
3 	(3.15)
residual	fail	fractured 	Y	D	Y	D	Y 	3	3 )	1	( 	+	−	= 	(3.16)
with Yresidual according to equation (3.18)
Elastic
Phase
Softening
Phase
Hardening
phase
Yresidual
Yfail
Yelastic
Failure surface
Strain
ε
Residual strength
Pressure, P
Yield strength, Y
Failure surface
Elastic limit surface
Stress
σ
Elastic limit surface
Residual strength
1
2 	1
2
Figure 14: RHT model.
The failure surface is a function of pressure, the actual stress, the meridian ratio
between tension / compression, and the strain rate.
( 	)	
ε	θ	
σ 	&	,	,	, 	.	eq	P	f 	(3.17)
The elastic surface is scaled in Autodyn from the failure surface by only two
parameters.
The residual strength, defined by the parameters B and M, is a function of the pressure
level.
( 	)M
res 	P	B	Y *	* *	= 	(3.18)
the fragments where made of steel and thus in the numerical analysis a perfect von
Mises strength model was used, where the yield surface can be calculated from the
second invariant (
σ1
σ2
+σ2
σ3
+σ3
σ1) of the stresses.

-- 28 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	15
p
σ3
σ2
σ1
Figure 15: von Mises strength model.
3.5 	Autodyn.
In Autodyn the materials, which are defined by the statements in chapter 3.4, are
inserted in subgrids giving the model. The physical parts of the model define the
subgrids and each part got its own mesh.
The Lagrange processor makes series of calculations in each timestep in every subgrid
as shown in Figure 16. Starting with updating the boundaries and interactive forces
and combining these with the forces from inner zones computed during the last cycle.
From the momentum equation and integration, the velocities, accelerations, and
positions are computed for every node. These values make it possible to calculate the
zonal volumes and the strain rates. And finally the material model and the energy
equation give the zonal pressure, stresses, and energies, which provide the forces for
the next calculation cycle. For coupling subgrids together, the Lagrange processor
uses interactive forces for the additional calculations needed.

-- 29 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	16
Nodal Forces
Nodal Accelerations
Nodal Velocities
& Displacements
Zone Volumes &
Strain rate
Zone Pressures
and Stresses
Direct calculation
Material Model
Conservation of Momentum	Force / Mass
Integration
Boundary and/or Interactive Forces
Figure 16: Lagrange computation cycle.

-- 30 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	17
4 	Numerical analysis of concrete perforation.
The thesis aims to predict perforation and scabbing of a fragment impacting a
concrete wall by using numerical methods, therefore experimental results from FOA
(Swedish defence institute of research) have been used to calibrate and verify the
actual material model.
For calibrating and deepen the knowledge about the effect of the different parameters
involved, a parameter study was carried out. From a reference analysis the parameters
were changed and analysed. The effects of the changes, could be seen and a
calibration of the material model where done.
Four different experimental series have been compared with numerical analysis. All
experiments are loaded with the same type of fragment but with different velocities of
the impacting fragment. In the experiments two different types of concrete have been
used as well as three different thickness of the concrete wall.
4.1 	Experimental series.
The experimental series used, have been carried out by the Swedish FOA and
documented by Erkander, Pettersson (1985). The experiments are done by simulating
warhead fragments with spherical and cylindrical projectiles fired against different
types of concrete slabs such as ordinary concrete, cementbound shingle, fibre concrete
and plain shingle. This report considers only ordinary concrete and study therefore
only the experiments related to this. During the experiments the velocities of the
impact, depth of penetration, and the impulse of the scabbed material were measured.
The experiments were performed, as visualized in Figure 17, with a velocity
measuring unit, the sample that should be studied, and a verification board of wood to
track the scabbed material.
Firing unit 	Measuring of
velocity
Experiment
sample
Verification
board of
wood
Figure 17: Arrangement of experiments.

-- 31 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	18
Every experiment sample is a slab with an area of 100 * 100 cm2 , made of the
concrete qualities K60 or K25. Reinforced by K40 φ 10 placed in a pattern so that
nine squares were obtained. This was done so that it was possible to fire up to nine
times on one single slab without interference between the different fire series.
250
140
70
Figure 18: Reinforcement arrangement in the test samples.
The fragments were simulated by balls from a ballbearing with a diameter of 20,6 mm
and a weight of 35,9 g. These balls, according to Erkander (1985), got a penetration
equal to a fragment of two or three times the weight of the balls.
In total were 20 tests compared with numerical analysis whose results are summarized
in Table 1 to Table 4. In the experiments the ingoing crater size (De), outgoing crater
size (Ds), ingoing penetration (pe), and the outgoing penetration (ps) were measured,
as visualized.
Thickness
Ds
Ps	Pe
De
Figure 19: Notations for experimental results. Ingoing crater size (De ), outgoing
crater size (Ds ), ingoing penetration (p e ), and the outgoing penetration
(ps )

-- 32 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	19
Table 1: Summary of test series 1.
Analysis
reference Quality of
concrete
Thickness
[mm]
Velocity
[m/sec]
De
[mm]
Pe
[mm]
Ds
[mm]
Ps
[mm]
P60100 	60 	140 	1024 	270 	50 	380 	46
P60200 	60 	140 	1132 	250 	60 	300 	67
P60300 	60 	140 	1163 	240 	66 	310 	65
P60400 	60 	140 	1239 	265 	65 	330 	65
P60500 	60 	140 	1283 	230 	50 	360 	80
Table 2: Summary of test series 2.
Analysis
reference Quality of
concrete
Thickness
[mm]
Velocity
[m/sec]
De
[mm]
Pe
[mm]
Ds
[mm]
Ps
[mm]
P60600 	25 	140 	1073 	260 	42 	240 	50
P60700 	25 	140 	1060 	220 	43 	270 	50
P60800 	25 	140 	982 	190 	55 	280 	47
P60900 	25 	140 	925 	190 	48 	300 	50
P61000 	25 	140 	859 	190 	42 	200 	0
P61100 	25 	140 	1214 	230 	40 	290 	50

-- 33 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	20
Table 3: Summary of test series 3.
Analysis
reference Quality of
concrete
Thickness
[mm]
Velocity
[m/sec]
De
[mm]
Pe
[mm]
Ds
[mm]
Ps
[mm]
P63500 	25 	70 	609 	120 	28 	170 	36
P63600 	25 	70 	491 	125 	25 	190 	32
P63700 	25 	70 	350 	60 	17 	100 	0
P63800 	25 	70 	358 	85 	14 	120 	0
P63900 	25 	70 	380 	100 	20 	170 	28
Table 4: Summary of test series 4.
Analysis
reference Quality of
concrete
Thickness
[mm]
Velocity
[m/sec]
De
[mm]
Pe
[mm]
Ds
[mm]
Ps
[mm]
P66500 	60 	250 	1201 	240 	67 	0 	0
P66600 	60 	250 	1218 	260 	69 	0 	0
P66700 	25 	250 	1204 	270 	52 	0 	0
P66800 	25 	250 	1269 	260 	54 	0 	0

-- 34 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	21
4.2 	Analysis.
The analyses were carried out in Autodyn, using the RHT model for describing the
concrete and a von Mises strength model describing the steel as mentioned in
chapter 3. To minimize the computational calculations, the analyses were done in 2D
and modelled with symmetry around the central axis as seen in Figure 20. The
processor was as mentioned before the Lagrange processor which operates on a
structured (I-J) numerical mesh. As seen in Figure 20 the element sizes for the two
subgrids, one for the ball and one for the concrete wall, is very small but is chosen
according to Zukas and Scheffler (2000), who made a study on the effect of meshing,
which conclude that for accuracy there should be at least three elements across the
radius of the projectile.
Figure 20: Mesh of subgrids.
The material model had to be calibrated for the two concrete materials according to
their compressive strength i.e. their yield surface and the residual strength. As these
are approximated with functions in Autodyn, equation 4.1 respectively 4.2 an initial
calibration of the parameters involved had to be done.
( 	)	[ 	] 	surface	Yield	, N
spall	p	p	A	cyl	fcm ∗	∗ − 	(4.1)
Concrete
Steel
2,86 mm
3 mm

-- 35 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	22
( 	) 	strength	Residual	, M
p	B	cyl	fcm ∗ (4.2)
The compressive strength (cylinder standard) was calculated from at least 10 cubic
tests of the concrete quality and converted to cubic standard according to Engström
(1994). The strength-strain relationship and the residual strength were calculated for
different lateral pressures according to the Attard model (1996). The Attard model
was chosen because of its applicability to a wide range of concrete strengths and
confinement pressures. When the strengths for different confinements were calculated
it was to calibrate equation (4.1) and (4.2) to fit the curve given from the Attard
model. In Figure 21 it is seen that the residual curve from Attard cross the yield
strength at 53 MPa hydrostatic pressure, which is not correct. The residual strength
can never be more than the yield strength. The model, though, calculates according to
the function called residual_model in Figure 21, which is a good approximation of the
residual strength.
Yield_line and residual strength
0,00
20,00
40,00
60,00
80,00
100,00
120,00
140,00
160,00
180,00
0,00 	10,00 	20,00 	30,00 	40,00 	50,00 	60,00 	70,00 	80,00 	90,00 	100,00
Hydrostatic pressure [MPa]
Effective_stress [MPa]
Residual strength, Attard
Yield surface, Attard
Residual strength, model
Yield surface, model
Figure 21: Yield line and residual strength.
From CEB-FIB model code (1990) the fracture energies was taken according to
tabulated values and the tensile strength was calculated from equation (4.3).
3
2
0
,	0 	⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
= fck
fck
m	fctk	fctm 	(4.3)
where:
fck
m	fctk
MPa	10	0
MPa	40	,	1	.	0
=
=

-- 36 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	23
The elasticity modulus was also calculated according to model code with equation
(4.4).
3
1
0 0⎥
⎦
⎤
⎢
⎣
⎡
= fcm
fcm
E	Eci 	c 	(4.4)
where:
MPa	10
MPa	10	15	,	2 4
0
=
×	=
fcmo
Ec
The shear modulus was calculated according to equation (4.5).
( 	) concrete	for	0,3
1	2 =
+
=
	υ
υ
E
G 	(4.5)
4.3 	Parameter study.
A parameter study was carried out to be able to evaluate the influence that the
different parameters have on the dynamic tensile strength, crater sizes, and penetration
depth. The parameters looked upon are the Frate, further explained below, static shear
strength, static tensile strength, and the fracture energies of the modelled material. The
result of the parameter study was then used as a base for finding an adequate model of
concrete. The study was carried out in the same way and with the same definitions as
the analysis. From a reference analysis, the parameter was changed and the result was
evaluated. As seen in Figure 22, the stress-strain relationship in direction 2 is
measured on the opposite side of the fragment entrance and the penetration is
measured from the initial position of the entrance border to the ball midpoint. The
crater sizes are evaluated from the reference analysis and the effect of the parameter,
in percentage, is shown in plots of the material status.

-- 37 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	24
Figure 22: Guidance to studied results.
A summarize of the importance that each parameter has is made in Table 5, shown by
large or small influence on the tensile resistance, outgoing and ingoing crater size, and
the penetration.
Table 5: Influence of parameters included in the parameter study.
Parameter
Influence on
the tensile
resistance
Influence on
the outgoing
crater size.
Influence on
the ingoing
crater size.
Influence on
the
penetration.
Frate 	Large 	Small 	Small 	Small
Shear
resistance Large 	Large 	Large 	None
Tensile
resistance Large 	Large 	Large 	None
Softening
Energies - 	- 	- 	-
4.3.1 	Strain Rate
The Frate parameter considers the strain rates and influences directly the failure
surface by the
δ factor in the formula defining the Frate, seen in equation (2.10). The
Frate is a scaling factor and the effect of increased
δ is seen in equation (4.6), a higher
Frate need a higher tensile stress to reach failure, which is verified by the results in
Figure 23, i.e. higher
δ gives a higher tensile capacity. And the conclusion could be
Penetration depth
Measuring point for
studied 	stresses 	in
the 2 direction.
Percentage of
reference crater
radius.
2 dir.
1 dir.

-- 38 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	25
drawn that the tensile strength is highly influenced by the strain rate.
δ is notated D in
the rest of the report
( 	) 	)	(	)	(3	)	(	)	(	eq	eq 	*	*	*	,	,	P,	
ε
	θ
	σ
	ε	θ
	σ 	&	& 	RATE	P	CAP	P	TXC 	F	R	F	Y	f 	−	= 	(4.6)
( 	) 	reached.	is	Failure	0	,	,	P, 	eq 	→	=
	ε	θ
	σ 	&	f 	(4.7)
Stresses for different D
0,00E+00
2,00E+03
4,00E+03
6,00E+03
8,00E+03
1,00E+04
1,20E+04
0,00E+00 	5,00E-06 	1,00E-05 	1,50E-05 	2,00E-05 	2,50E-05
Strain
Stresses [kPa]
D=0.070
D=0.030
D=0.036 reference
D=0.045
Figure 23: Stress Strain direction 2 in target point 7 for different D
(0.030,0.036,0.045,0.07).
The effect on the crater sizes are, however, small as seen in the material status plots,
Figure 24, Figure 25, Figure 26. The small changes seen are explained by the reason
that a lower
δ gives bigger crater on both sizes but the effect is still small. The
changes in crater size derive from the lower respective higher tensile strength, which
is further concluded to be related to the strain rate.
Figure 24: Material Status plot for D = 0.045.
100 %
90 %

-- 39 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	26
Figure 25: Material Status plot for D = 0.036 (reference).
Figure 26: Material Status plot for D = 0.030.
The penetration becomes smaller for larger D, seen in Figure 27, but the effect is
rather small. That small that it could be neglected; a 16 % decrease of D gives only a
3 % increase of the penetration. The change could though be explained by the lower
tensile strength coming from the lower strain rate that a decrease of D gives.
Penetration for different D
0,00E+00
5,00E+00
1,00E+01
1,50E+01
2,00E+01
2,50E+01
3,00E+01
3,50E+01
0,00E+00 	1,00E-01 	2,00E-01 	3,00E-01 	4,00E-01 	5,00E-01 	6,00E-01 	7,00E-01
time [ms]
Penetration [mm]
D=0.070
D=0.030
D=0.036 reference
D=0.045
Figure 27: Penetration for different D.
When studying the strain rates effect on the specimen, it is also convenient to see at
which point or how the strain rates are distributed over the section. As seen in
Figure 28, in the penetration area, i.e. in front of the fragment, in which the material is
111 %
106 %
100 %
100 %

-- 40 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	27
under severe loading and completely compressed the strain rates are very high.
However, outside the penetration area it is possible to se the development of the
cracks according to the strain rates. The different points studied are evaluated with its
highest and lowest strain rates during the whole simulation, positive value for
compression and negative value for tension. The true craters are also visualized. It is
seen that the strain rates decrease with a factor of 10, for every point row studied
moving upward in the figure from the symmetrical border. It is also seen that where
the largest negative strain rates occur is where the largest crack patterns develop,
which could explain the larger crater size on the backside of the specimen i.e. larger
strain rates in tension further away from the symmetrical border on the backside of the
specimen.
24
-33
1,57
-4,43
0,8
-1,7
1,0
-0,5
Symmetry line
29 mm
0,085
-0,052
0,19
-0,067
0,2
-0,060
0,16
-0,11
0,11
-0,13
0,023
-0,029
0,027
-0,019
0,022
-0,047
0,033
-0,036
0,038
-0,079
0,015
-0,024
0,03
-0,03
70 mm
70 mm
70 mm
29 mm	29 mm 	29 mm
Real crater edges
Front 	Backside
+ compression
- tension
Penetration area
3 mm
Figure 28: 	Maximum and minimum strain rates at different locations in the section
during penetration.
The differences in longitudinal and transversal strain rates in Figure 28 are explained
by the difference in velocity of a wave travelling in longitudinal respectively
transversal direction. According to Leppänen (2001) is the difference approximately
60 %, i.e. the strain rate in transversal direction is 60 % of the strain rate in
longitudinal direction, measured at the same time.
4.3.2 	Shear force.
The shear force resistance is set as a scaling parameter of the compressive strength in
Autodyn. The default value is set to 18 % which could seem to be a bit high. While

-- 41 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	28
studying the effect that the static shear resistance has on the dynamic tensile
resistance, i.e. the higher strength given at higher strain rates, it is seen that a greater
shear resistance result in a smaller dynamic tensile resistance, visualized in Figure 29.
The effect could be related to a scaling of the RHT concrete failure surface but the
explanation of this is left for future studies. But still the parameter is used for
calibrating the material model.
Stress/Strain for different fs/fc.
0,00E+00
1,00E+03
2,00E+03
3,00E+03
4,00E+03
5,00E+03
6,00E+03
7,00E+03
8,00E+03
0,00E+00 2,00E-06 4,00E-06 6,00E-06 8,00E-06 1,00E-05 1,20E-05 1,40E-05 1,60E-05 1,80E-05 2,00E-05
Strain
Stress 2 [kPa]
fs/fc=0.15
fs/fc=0.18 reference
fs/fc=0.25
Figure 29: Stress/strain for different fs/fc.
In Figure 32 to Figure 30 it is seen that the crater size on the outgoing side is highly
more affected by changes of the shear resistance. A decrease with 3 % gives a change
of 65 % on the outgoing crater size, which is a result of the great difference in
dynamic tensile strength between small changes in the static shear resistance.
Figure 30: Material status plot for fs/fc = 0.25.
131 %
143 %

-- 42 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	29
Figure 31: Material status plot for fs/fc = 0.18 (reference).
Figure 32: Material status plot for fs/fc = 0.15.
In the penetration depth it is not possible to see any effect of the change in shear
resistance, see Figure 33.
Penetration for different fs/fc
0,00E+00
5,00E+00
1,00E+01
1,50E+01
2,00E+01
2,50E+01
3,00E+01
3,50E+01
0,00E+00 	1,00E-01 	2,00E-01 	3,00E-01 	4,00E-01 	5,00E-01 	6,00E-01
time [ms]
Penetration [mm]
 
fs/fc = 0,15
fs/fc = 0,25	fs/fc = 0,18
Figure 33: Penetration for different fs/fc.
4.3.3 	Tensile force
It would be strange if a higher tensile strength did not affect the tensile failure stress
in the model. To prove the obvious Figure 34 show the tensile failure stress for
100 %
45 %
100 %
100 %

-- 43 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	30
changes of the static tensile resistance. The quick descend for ft/fc = 0.08 shows the
failure of the picked element.
Stress/Strain for different ft/fc
0,00E+00
1,00E+03
2,00E+03
3,00E+03
4,00E+03
5,00E+03
6,00E+03
7,00E+03
8,00E+03
0,00E+00 2,00E-06 4,00E-06 6,00E-06 8,00E-06 1,00E-05 1,20E-05 1,40E-05 1,60E-05 1,80E-05 2,00E-05
Strain
Stresses [kPa]
ft/fc=0.08
ft/fc=0.06
ft/fc=0.0712 reference
Figure 34: Stress Strain direction 2 in target point 7 for different ft/fc.
The effect of changes in the static tensile strength on the crater size seem to be
reasonable as a decrease of 1 % gives a approximated decrease of the crater size of
10 %, seen in Figure 35, Figure 36, and Figure 37.
Figure 35: Material Status plot for ft/fc=0.080.
Figure 36: Material Status plot ft/fc=0.060.
107 %
191 %
93 %
62 %

-- 44 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	31
Figure 37: Material Status plot ft/fc=0.0712 (reference).
Something that is less obvious is that changes in the static tensile resistance only give
small, close to zero, effect on the penetration of the fragment, seen in Figure 38. It is
concluded then, that the penetration depends more or less only on the compactation of
the material and so forth is the penetration related to the static compressive strength.
Penetration for different ft/fc
0,00E+00
5,00E+00
1,00E+01
1,50E+01
2,00E+01
2,50E+01
3,00E+01
3,50E+01
0,00E+00 	1,00E-01 	2,00E-01 	3,00E-01 	4,00E-01 	5,00E-01 	6,00E-01 	7,00E-01
time [ms]
Penetration [mm]
ft/fc = 0.60 X
ft/fc = 0.0712 X
ft/fc = 0.080 X
Figure 38: Penetration for different ft/fc1
4.3.4 	Crack softening.
Changes in the crack softening parameter Gf (J/m2 ) within 50 % give no excessive
changes in the response as seen in
Figure 40 to Figure 43, showing the same material model with different crack
energies. This seems strange, as a halving of the softening energies should result in a
halving of the area of the descending branch in the stress strain relationship shown in
Figure 39. This behaviour appears to be due to a limitation in the software. The
1 Plots for ft/fc=0.060, ft/fc=0.0712 and ft/fc=0.080 is exactly the same and are thereby shown on top of
each other.
100 %
100 %

-- 45 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	32
software demands that an ultimate tensile strength is set so it can consider the crack
energies in the calculation. This act, however, results in that the higher dynamic
tensile strength gained by the high strain rate, threatened in Chapter 2.2, is not
reached, seen in the graph P6FT39 in Figure 39, where the ultimate tensile strength is
set to 3,973 MPa according to the static tensile resistance. Because of these problems
with the software the crack energies are not furthermore involved in the parameter
study.
Stress/Strain for Gf 100 , 145 , 200 [J/m2]
0,00E+00
1,00E+03
2,00E+03
3,00E+03
4,00E+03
5,00E+03
6,00E+03
7,00E+03
0 	0,000005 	0,00001 	0,000015 	0,00002 	0,000025
Strain 2
Stress 2 [kPa]
P6GF10 STRESS TYY
P6GF14 STRESS TYY
P6GF20 STRESS TYY
P6HYDR STRESS TYY
P6GF02 STRESS TYY
P6FT39 STRESS TYY
Ultimate tensile
strength set to
3.973 MPa.
No changes in
Fracture energies.
Figure 39: Stress Strain direction 2 in target point 7 for different Gf
(100,145,200[J/m2]).
The material plots are all the same as there is no change in the response.
Figure 40: Material status plot for hydro failure model.
131 %
143 %

-- 46 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	33
Figure 41: Material status plot Gf = 200 [J/m2]
Figure 42:Material status plot Gf = 145 [J/m2]
Figure 43:Material status plot Gf = 100 [J/m2]
It is also seen in Figure 44 that the penetration of the fragment neither is affected by
changes of the crack energies.

-- 47 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	34
Penetration for different Gf
0,00E+00
5,00E+00
1,00E+01
1,50E+01
2,00E+01
2,50E+01
3,00E+01
3,50E+01
0,00E+00 	1,00E-01 	2,00E-01 	3,00E-01 	4,00E-01 	5,00E-01 	6,00E-01 	7,00E-01
time [ms]
Penetration [mm]
P6 Gf 200
P6 Gf 145
P6 Gf 100
Hydr. X
P6 Gf 20
Gf 145 with ft 3,973 Mpa X
Figure 44: Penetration for different Gf (20,100, 145, 200 [J/m2])2 .
2 Plots for Gf=100 J/m2
, Gf=145 J/m2 and Gf=200 J/m2 is exactly the same and are thereby shown on
top of each other.

-- 48 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	35
4.3.5 	Results from parameter study.
0, 00E+00
1, 00E+03
2, 00E+03
3, 00E+03
4, 00E+03
5, 00E+03
6, 00E+03
7, 00E+03
8, 00E+03
0, 00E+00 	2, 00E-06 	4, 00E-06 	6, 00E-06 	8, 00E-06 	1, 00E-05 	1, 20E-05 	1, 40E-05 	1, 60E-05 	1, 80E-05
Strain
f t/ f c 0. 080
f s/ f c = 0. 15
D = 0. 045
0 , 0 0 E + 0 0
1 , 0 0 E + 0 3
2 , 0 0 E + 0 3
3 , 0 0 E + 0 3
4 , 0 0 E + 0 3
5 , 0 0 E + 0 3
6 , 0 0 E + 0 3
7 , 0 0 E + 0 3
0 	0 , 0 0 0 0 0 5 	0 , 0 0 0 0 1 	0 , 0 0 0 0 1 5 	0 , 0 0 0 0 2 	0 , 0 0 0 0 2 5
S t r a i n
Reference simulation
D = 0.045 	fs/fc = 0.15
Highest stress 6 MPa
ft/fc = 0.08
ft/fc 	+1% 	Æ +19% resistance
fs/fc 	-3 % 	Æ +15% resistance
D 	+25% Æ +12% resistance
ft/fc = 0.0712
fs/fc = 0.18
D = 0.036
Changes
100 % 100 %
90 %
100 % 45 %	100 % 	62 %	93 %
Stress direction 2 [Mpa]
Stress direction 2 [Mpa]
Figure 45: Summary of changes that give an increase in dynamic resistance.

-- 49 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	36
100 % 100 % 0 , 0 0 E + 0 0
1 , 0 0 E + 0 3
2 , 0 0 E + 0 3
3 , 0 0 E + 0 3
4 , 0 0 E + 0 3
5 , 0 0 E + 0 3
6 , 0 0 E + 0 3
7 , 0 0 E + 0 3
0 	0 , 0 0 0 0 0 5 	0 , 0 0 0 0 1 	0 , 0 0 0 0 1 5 	0 , 0 0 0 0 2 	0 , 0 0 0 0 2 5
S t r a i n
Reference simulation
D = 0.030 	fs/fc = 0.25
Highest stress 6 MPa
ft/fc = 0.06
ft/fc 	-1% 	Æ -24% resistance
fs/fc 	+7 % 	Æ -13% resistance
D 	-17% 	Æ -11% resistance
ft/fc = 0.0712
fs/fc = 0.18
D = 0.036
Changes
0,00E+00
1,00E+03
2,00E+03
3,00E+03
4,00E+03
5,00E+03
6,00E+03
0,00E+00 	5,00E-06 	1,00E-05 	1,50E-05 	2,00E-05 	2,50E-05
Strain
Stress direction 2 [MPa]
ft/fc 0.060
fs/fc = 0.25
D = 0.030
106 %
111 % 143 %
131 %
191 %
107 %
Stress direction 2 [Mpa]
Stress direction 2 [Mpa]
Figure 46: Summary of changes that give a decrease in dynamic resistance.

-- 50 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	37
4.4 	Calibration of parameters.
The calibration process was supposed to be based on the results from the parameter
study but became a process more based on the results from the full-scale tests. The
knowledge gained from the parameter study was only valuable for knowing in which
direction to go, if the value of the parameter would be increased or decreased. The
calibration started at a rather wide range of values which was narrowed down towards
a final value. Finally, the value of the quote fs/fc was set to 0.17 but the D parameter,
conducting the strain rate, still gave good results for C60 at 0.033 and for C25 at
0.032. Why a calibration in-between these values were performed to make a
compromise between the two concrete classes and in the end the parameter D was set
to 0.0328. Examples of the calibration analyses are added in the appendix, showing
the crack pattern and the real crater size for that certain analysis. During the process
the analyses were awarded with stars according to their accuracy with the result from
the belonging full-scale test. One star was given for good results i.e. the results from
the analyse fit rather good to the experimental results. Two stars were given to very
good results; and for those without stars, the results were not promising. The process
is visualized in Figure 47.
A n a l y s i s 	D 	f s / f c 	S t a r s
P 6 0 6 1 7 	0 . 0 3 2 6 	0 . 1 7
P 6 0 6 1 6 	0 . 0 3 2 7 	0 . 1 7
P 6 0 6 1 5 	0 . 0 3 2 8 	0 . 1 7
P 6 0 6 1 4 	0 . 0 3 2 9 	0 . 1 7
P 6 0 5 1 7 	0 . 0 3 2 6 	0 . 1 7
P 6 0 5 1 6 	0 . 0 3 2 7 	0 . 1 7
P 6 0 5 1 5 	0 . 0 3 2 8 	0 . 1 7
P 6 0 5 1 4 	0 . 0 3 2 9 	0 . 1 7
A n a l y s i s 	D 	f s / f c 	S t a r s
P 6 0 6 1 2 	0 . 0 3 3 	0 . 1 7 5
P 0 6 1 3 	0 . 0 3 2 5 	0 . 1 7 5
P 6 0 5 1 3 	0 . 0 3 2 5 	0 . 1 7 5
P 6 0 5 1 2 	0 . 0 3 2 	0 . 1 7 5
D = 0 . 0 3 2 8
f s / f c = 0 . 1 7
A n a l y s i s 	D 	f s / f c 	S t a r s
P 6 0 5 0 0 	0 . 0 3 5 	0 . 1 8
P 6 0 5 0 1 	0 . 0 3 5 	0 . 1 7
P 6 0 5 0 2 	0 . 0 3 5 	0 . 1 6
P 6 0 5 0 3 	0 . 0 3 4 	0 . 1 8
P 6 0 5 0 4 	0 . 0 3 4 	0 . 1 7
P 6 0 5 0 5 	0 . 0 3 4 	0 . 1 6
P 6 0 5 0 6 	0 . 0 3 3 	0 . 1 8
P 6 0 5 0 7 	0 . 0 3 3 	0 . 1 7
P 6 0 5 0 8 	0 . 0 3 3 	0 . 1 6
P 6 0 5 0 9 	0 . 0 3 2 	0 . 1 8
P 6 0 5 1 0 	0 . 0 3 2 	0 . 1 7
P 6 0 5 1 1 	0 . 0 3 2 	0 . 1 6
A n a l y s i s 	D 	f s / f c 	S t a r s
P 6 0 6 0 2 	0 . 0 3 4 	0 . 1 7
P 6 0 6 0 3 	0 . 0 3 4 	0 . 1 6
P 6 0 6 0 4 	0 . 0 3 4 	0 . 1 5
P 6 0 6 0 5 	0 . 0 3 4 	0 . 1 4
P 6 0 6 0 6 	0 . 0 3 3 	0 . 1 7
P 6 0 6 0 7 	0 . 0 3 3 	0 . 1 6
P 6 0 6 0 8 	0 . 0 3 3 	0 . 1 5
P 6 0 6 0 9 	0 . 0 3 2 	0 . 1 7
P 6 0 6 1 0 	0 . 0 3 2 	0 . 1 6
P 6 0 6 1 1 	0 . 0 3 2 	0 . 1 5
A n a l y s i s 	D 	f s / f c 	S t a r s
P 6 6 5 0 0 	0 . 0 3 5 	0 . 1 8
P 6 6 5 0 1 	0 . 0 3 5 	0 . 1 7
P 6 6 5 0 2 	0 . 0 3 5 	0 . 1 6
P 6 6 5 0 3 	0 . 0 3 4 	0 . 1 8
P 6 6 5 0 4 	0 . 0 3 4 	0 . 1 7
P 6 6 5 0 5 	0 . 0 3 4 	0 . 1 6
P 6 6 6 0 4 	0 . 0 3 3 	0 . 1 8
P 6 6 6 0 7 	0 . 0 3 3 	0 . 1 7
P 6 6 6 0 8 	0 . 0 3 3 	0 . 1 6
Figure 47: Calibration process.

-- 51 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	38
4.5 	Parameters in RHT model.
The parameters used, for the two concrete types C60 and C25, in the RHT model are
presented in Table 1. The values are obtained from the experience gained in the
parameter study presented in chapter 4.3 and while trying to get the same results in
the analyses as in the full scale tests presented in chapter 4.1.
Table 6: Parameters in RHT concrete model.
STRENGTH MODEL: RHT Concrete 	C60 	C25
Shear Modulus (kPa) 	1.47000E+07 	1.47000E+07
Compressive Strength fc (kPa) 	5.58000E+04 	2.967000E+04
Tensile Strength ft/fc 	7.12000E-02 	7.887000E-02
Shear Strength fs/fc 	1.70000E-01 	1.70000E-01
Failure Surface Parameter A 	2.05000E+00 	2.05000E+00
Failure Surface Exponent N 	7.00000E-01 	8.00000E-01
Tens./Compr. Meridian Ration 	6.80500E-01 	6.80500E-01
Brittle to Ductile Transit. 	1.05000E-02 	1.05000E-02
G(elas.)/G(elas.-plas.) 	2.00000E+00 	2.00000E+00
Elastic Strength/ft 	7.00000E-01 	7.00000E-01
Elastic Strength/fc 	5.30000E-01 	5.30000E-01
Use Cap on Elastic Surface 	1.00000E+00 	1.00000E+00
Residual Strength Const. B 	1.70000E+00 	2.50000E+00
Residual Strength Exponent M 	7.00000E-01 	7.00000E-01
Comp. Strain Rate Exponent a 	3.20000E-02 	3.20000E-02
Tens. Strain Rate Exponent D 	3.28000E-02 	3.28000E-02
Max. Fracture Strength Ratio 	1.0000E+20 	1.0000E+20
FAILURE MODEL: RHT Concrete
Damage Constant D1 	4.00000E-02 	4.00000E-02
Damage Exponent D2 	1.00000E+00 	1.00000E+00

-- 52 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	39
Min. Strain to Failure 	1.00000E-02 	1.00000E-02
Residual Shear Modulus Frac. 	1.30000E-01 	1.30000E-01
Tensile Failure Model 	Principal Stress 	Principal Stress
Tensile Failure Stress (kPa) 	1.01000E+20 	1.01000E+20
Maximum Shear Stress (kPa) 	1.01000E+20 	1.01000E+20
Crack Softening, Gf (J/m2)
or, Kc2 (mN2/mm3):
1.45000E+02
5.61449E+09
1.45000E+02
5.61449E+09
EROSION MODEL: Instant Geometric Strain
Erosion Strain 	2.00000E+00 	2.00000E+00
4.6 	Results.
The model after calibration, i.e. the parameters are set according to table 6, was
verified to results from full-scale tests. In general, it could be stated that it works
satisfactorily describing the crack pattern on the backside of the member, the so-called
outgoing crater. However, on the front side the result is not that convincing, the model
gives a crack pattern of the ingoing crater that tends to develop according to the
related full-scale experiments but it does not reach full satisfactory status, except for
thinner walls. This could be the cause of that the crack energy have not been
implemented, 	something 	that 	could 	give 	better 	results 	even 	on 	thicker 	walls.
Regarding the velocity it is not seen that any velocity, high or low, give good results
or not and it could therefore be concluded that the model works properly for all
velocities, ranging from 600 m/s to 1000 m/s.
In this chapter are the results from the verification presented with the real crater sizes
visualized with dotted lines. There are walls presented for every thickness, 70 mm,
140 mm and 250 mm, and concrete classes, C25 and C60, concerned in the study.
Figure 48 to Figure 51 shows the result for the walls with the thickness 140 mm. It is
seen that the model give good result on the backside but bad results on the front side.
Result for the walls with the thickness 70 mm are shown in Figure 52 and Figure 53.
It is seen that for this thickness the result on the ingoing side also is convincing.
Figure 54 shows an example of the result on a 250 mm thick wall. It can be seen that
the result is not good as the fragment only penetrate and not perforate the wall. Thus,
only give result on the ingoing side.

-- 53 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	40
Real crater size.
Figure 48: Analysis P60100, see table 1, with the real crater edge as dotted line.
Figure 49: Analysis P60200, see table 1, with the real crater edge as dotted line.

-- 54 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	41
Figure 50: Analysis P60300, see table 1, with the real crater edge as dotted line.
Figure 51: Analysis P60600, see table 1, with the real crater edge as dotted line.

-- 55 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	42
Figure 52: Analysis P63500, see table 1, with the real crater edge as dotted line.
Figure 53: Analysis P63600, see table 1, with the real crater edge as dotted line.

-- 56 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	43
Figure 54: Analysis P66500, see table 1, with the real crater edge as dotted line.

-- 57 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	44
5 	Conclusions.
Civil defence shelters shall be designed to resist explosions caused by military
weapons such as a conventional bomb. When fragments from such an explosion
impact constructions, the fragments penetrate or even may perforate the construction
wall causing damage in the total height of the wall. Almost all penetrations that is
fairly deep cause scabbing on the backside of the construction wall generated by very
high tensile stresses. The thesis aims to make it possible to simulate a fragment which
perforates a concrete wall using numerical calculations in the software Autodyn. The
high velocity of the fragment causes high strain rates, i.e. the velocity of the
deformation in the deformed concrete. Autodyn considers the increase in strength
with strain rate in its numerical analysis by a parameter named Frate. The Frate
parameter is dependent on the actual strain rate, a reference strain rate, and a user
definable parameter D.
When concrete is loaded under severe strain rates, the static resistance increases to a
higher “dynamic” resistance. The increase in strength with strain rate is divided into
two parts. The lower part, considering lower strain rates, depends on the water content
and the higher strain rate is related to forces of inertia. The increase in strength for the
strain rates related to water content is explained by the Stefan effect and by the
internal pressure in the pore. For pores loaded parallel the Stefan effect says that the
existence of a thin viscous film, like water, between two perfectly parallel plates
separated by a distance, causes a counteracting force when the two plates are
separated, which produces the increase in strength. For pores loaded perpendicular to
the load, the increase in strength is explained by the alteration in pressure inside the
pore, caused by the compressive force. The alteration in pressure counteracts the
compression and the compressive strength increases.
When the fragment hits the concrete the deformation begins. A wave is initiated
causing a triangular compressive stress over time, which travels faster in front of the
fragment than in the perpendicular directions.
The wave producing the compressive stresses also causes the tensile stresses by the
fact that when the wave reach the border of the wall the wave is reflected and goes
back generating tensional stresses equal to the compressive stresses in magnitude.
Since the tensile strength is much lower than the compressive strength for concrete the
reflected wave could cause scabbing on the backside of the specimen.
There exist two main processors for numerical calculations by finite elements, one for
modelling solid material and structures called Lagrange, and one for modelling fluid
material and large distortions named Euler. The Euler processor uses a fixed mesh in
which the material transforms. The mesh in the Lagrange processor follows the
material as it deforms and the material stays inside the initial element definition with
no transport of material between elements. The advantage of this, according to the
Autodyn manual, tends to be that the computational process is fast. For this reason the
Lagrange processor have been used as processor.
For a static numerical analysis the EOS, equation of state, normally describes the
material behaviour when it is exposed to a load and is generally assumed to be linear.
However, for severe loading it is essential to take into account the non-linearity of the

-- 58 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	45
material behaviour because of the high hydrostatic pressure, i.e. increased loading
compresses the pores and micro cracking occurs with the consequence that the pores
collapse and the material becomes compacted, which causes the non-linearity. A
phase named plastic compaction.
The constitutive relations describe the material behaviour at different pressure states,
i.e. a relationship that relates the stress to the strains (
ε), strain rates (
ε& ), internal
energy (E) and damage (D). In Autodyn this relationship is defined with the RHT
model which is defined with yield strength over pressure, where pressure is the mean
value of the three principal stresses.
Except the observed result that the dynamic resistance increases with decreased static
shear resistance are the results from the parameter study logical and reasonable. The
static tensile strength and the Frate parameter D have been a great support in the
calibration process. In the parameter study it was found that by increasing the D
parameter which control the strain rates, the resistance increased. It was also found
that the software Autodyn does not consider the crack softening satisfyingly, which is
a fatal error and its effect on the crack pattern should be evaluated in later studies.
The calibration of the model was restricted to only two parameters in the end, the
Frate parameter D and the quotient fs/fc. The effect of the static tensile resistance was
not used in the calibration by the reason that it is fairly easy to define in tests
conducted in a laboratory and should therefore be used according to the characteristic
value. Finally, it was found that the values of the parameters presented below give the
most convincing results.
D =
δ = 0.0328 	fs/fc = 0.17
The model after calibration was verified to results from full-scale tests. It works
satisfactorily describing the crack pattern on the backside of the member, the so-called
outgoing crater. However, on the front side the result is not that convincing, the model
gives a crack pattern of the ingoing crater that tends to develop according to the
related full-scale experiments but it does not reach full satisfactory status. This could
be the cause of that the fracture energy have not been implemented something that
could give better results.
5.1 	Future studies
In the studies there have been tendencies that the consideration of the strain rates
effect works properly but is not approximated fully satisfyingly and could work even
better at very high strain rates. The routine describing the effect of the Frate may be
slightly wrong and need so fourth a deeper evaluation, a work that is left for future
studies.
When contact was made with the manufacture of Autodyn about the reason that the
fracture 	energy 	is 	not 	correctly 	implemented. 	The 	manufacture 	recommended
describing the fracture energy by a subroutine. As writing subroutines for Autodyn is
outside the limitations of the thesis, the work is left for after comers.

-- 59 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1	46
6 	References
Attard, M. M. and Setung S. (1996): Stress-Strain relationship of Confined and
Unconfined Concrete. ACI Materials Journal. Vol. 93, No. 5, 	1996, September-
October, 432-442 pp.
Erkander, Å. Pettersson, L. (1985): Betong som splitterskydd. FOA Report. Försvaret
Forskningsanstalt Huvudavdelning 2, FOA Rapport C 20574-(D6)D4, Stockholm,
Sweden, 1985, May, 66 pp.
Engström, B. (1994): Beräkning av betong och murverkskonstruktioner. 	Chalmers
Reproservice, Publication no. 94:2A and 94:2B, Gothenburg, Sweden, 2001.
Leppänen, 	J. 	(2001): 	Finita 	elementanalyser 	av 	splitterbelastade
betongkonstruktioner. Chalmers Reproservice, Publication no. 01:1, Gothenburg,
Sweden, 2001, 67 pp.
Leppänen, J. (2002): Dynamic behaviour of concrete structures subjected to blast and
fragment impacts. Licentiate Thesis. Chalmers Reproservice, Publication no. 02:4,
Gothenburg, Sweden, 2002, 71 pp.
Janzon, 	B. 	(1978): 	Grundläggande 	stridsdelsfysik. 	FOA 	Report. 	Försvaret
Forskningsanstalt Huvudavdelning 2, FOA Rapport C 20261-D4, Stockholm,
Sweden, 1978, September, 71-73 pp.
Johansson, M. (2002): Composite action and confinement effects in tubular steel
concrete colums. Doctoral Thesis. Chalmers Reproservice, Publication no. 02:8,
Gothenburg, Sweden, 2002.
Johansson, 	M. 	(1998): 	Betongens 	töjningshastighetsberoende 	och 	explicit
lösningsmetodik. Doctoral Thesis. Chalmers Reproservice, Publication no. 98:2,
Gothenburg, Sweden, 1998, June, 7-15 pp.
Johansson, M. (2000): Structural behavior in concrete frame corners of civile defence
shelters. 	Doctoral 	Thesis. 	Chalmers 	Reproservice, 	Publication 	no. 	00:2,
Gothenburg, Sweden, 2000.
Meyers, M. A. (1994): Dynamic behaviour of materials. 1994.
Ottosen, N. and Petterson H. (1992): Introduction to the finite element method.
Redwood Books, Trowbridge, Wiltshire, Great Britain, 1992.
Wiberg, 	N. 	and 	Samuelsson 	A. 	(1993): 	Byggnadsmekanik 	Hålfasthetslära.
Studenlitteratur, Lund, Sweden, 1998.
Wiberg, 	N. 	and 	Samuelsson 	A. 	(2000): 	Finite 	Elemnt 	Method 	- 	Basics.
Studenlitteratur, Lund, Sweden, 2000.
Zukas, J. A. and Scheffler D. R. (2000): Practical aspects of numerical simulations of
dynamic events: effect of meshing. International Journal of impact Engineering.
Vol. 24, No. 9, 2000, October, 925-945 pp.

-- 60 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:1 	47
Åkesson, M. (1996): Implementation and application of fracture mechanics models
for concrete structures. Doctoral Thesis. Chalmers Reproservice, Publication no.
96:2, Gothenburg, Sweden, 1996.

-- 61 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01

-- 62 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01 	A:1
Appendix A: Calibration of variables.
C 25:
fcm,cube [Mpa] 	35
fck,cube [Mpa] 	27
fck,cylinder [Mpa] 	21,67
fcm_cyl [Mpa] 	29,67 	Gf (formel) 	0,124179606
fctm/fcm 	0,078867543 	Gf (tabell) 	0,145
Eci 	38300000000,00 	G 	1,47E+10
v 	0,30 	fctm [Mpa] 	2,34
fs [Mpa] 	5,3406
Omslutning [Mpa] 	Sigma_1_brott [Mpa] 	Rest_hållf [Mpa] 	A 	3,2
0 	30 	0 	N 	0,8
2,1 	42,26 	15,47 	B 	2,5
4,3 	53,2 	28,75 	M 	0,7
8,6 	71,78 	49,03 	p_star_stall 	-5,06E-02
17,2 	104,04 	82,27
34 	161,68 	139,84
p [Mpa] 	q [Mpa] 	p_rest [Mpa]
10,00 	30,00 	0,00
15,49 	40,16 	6,56
20,60 	48,90 	12,45
29,66 	63,18 	22,08
46,15 	86,84 	38,89
76,56 	127,68 	69,28
p_star 	q model [Mpa] 	p_star_rest 	rest model [MPa]
0,34 	44,48 	0,00 	0,00
0,52 	60,77 	0,22 	25,78
0,69 	75,01 	0,42 	40,39
1,00 	98,74 	0,74 	60,31
1,56 	138,69 	1,31 	89,64
2,58 	205,85 	2,34 	134,30
Yield_line and residual strength
0,00
20,00
40,00
60,00
80,00
100,00
120,00
140,00
160,00
180,00
0,00 	20,00 	40,00 	60,00 	80,00 	100,00
Hydrostatic pressure [MPa]
Effective_stress [MPa]
q [Mpa]
Rest_hållf [Mpa]
q model [Mpa]
rest model [MPa]

-- 63 of 71 --

A:2 	CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01
C 60:
fcm,cube [Mpa] 	65,8
fck,cube [Mpa] 	57,8
fck,cylinder [Mpa] 	47,8
fcm_cyl [Mpa] 	55,80 	Gf (formel) 	0,193228834
fctm/fcm 	0,071200717 	Gf (tabell) 	0,145
Eci 	3,83E+10 	G 	1,47E+10
v 	0,30 	fctm [Mpa] 	3,973
fs [Mpa] 	10,044
Omslutning [Mpa] 	Sigma_1_brott [Mpa] 	Rest_hållf [Mpa] 	A 	2,05
0 	55,8 	0 	N 	0,7
2,1 	69,23 	21,76 	B 	1,7
4,3 	81,31 	36,62 	M 	0,7
8,6 	101,57 	59,25 	p_star_stal 	-2,69E-02
17,2 	135,2 	94,86
34 	189,66 	150,71
p [Mpa] 	q [Mpa] 	p_rest [Mpa]
18,60 	55,80 	0,00
24,48 	67,13 	8,65
29,97 	77,01 	15,07
39,59 	92,97 	25,48
56,53 	118,00 	43,09
85,89 	155,66 	72,90
p_star 	q model [Mpa] 	p_star_rest 	rest model [MPa]
0,33 	55,97 	0,00 	0,00
0,44 	66,98 	0,16 	25,73
0,54 	76,61 	0,27 	37,95
0,71 	92,33 	0,46 	54,80
1,01 	117,58 	0,77 	79,16
1,54 	156,59 	1,31 	114,38
Yield_line
0,00
20,00
40,00
60,00
80,00
100,00
120,00
140,00
160,00
180,00
0,00 	10,00 	20,00 	30,00 	40,00 	50,00 	60,00 	70,00 	80,00 	90,00 100,00
Hydrostatic pressure [MPa]
Effective_stress [MPa]
q [Mpa] 	Rest_hållf [Mpa] 	q model [Mpa] 	rest model [MPa]

-- 64 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01 	B:1
Appendix B: Material model steel.
MATERIAL NAME: STEEL
EQUATION OF STATE: Linear
Reference density (g/cm3) : 7.70000E+00
Bulk Modulus (kPa) 	: 1.40000E+08
Reference Temperature (K) 	: 0.00000E+00
Specific Heat (C.V.) (J/kgK) : 0.00000E+00
STRENGTH MODEL: Vonmises
Shear Modulus (kPa) 	: 8.00000E+07
Yield Stress (kPa) 	: 9.00000E+05
FAILURE MODEL: None
EROSION MODEL: None

-- 65 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01

-- 66 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01 	C:1
Appendix C: Attard model.
Attard M.M and Setunge S. (1996): Stress-Strain Relationship of Confined and
Unconfined Concrete, ACI Materials Journal
Uniaxial peak stress and strain
f co 31.2
ε co 0.22 10 2	.
Youngs Modulus, According to CEB-FIB Model Code 90
E c 20.7 10
3	. 	E ti E c
Tensile strength, Equation 19
f sp 0.32 f co 0.67	.
f t 0.9 f sp	
. 	f t 2.887	=
Confined peak stress and strain, Equations 17, 18 and 20
k A σ lat 	1.25 1 0.062
σ lat
f co
.	. 	f co 0.21	.
f ccA σ lat 	f co 1 σ lat
f t
k A σ lat
.
ε ccA σ lat 	ε co 1 17 0.06 f co	
. 	σ lat
f co
.	.
Stress and strain at point of inflection, Equations 11, 12, 22 and 23
ε ic ε co 2.5 0.3 ln f co	
.	. 	uniaxial
ε i σ lat 	ε ccA σ lat 2
ε ic
ε co
2
1.12 σ lat
f co
0.26
. 	1
. 	confined
f ic f co 1.41 0.17 ln f co	
.	. 	uniaxial
f i σ lat 	f ccA σ lat 1
f ic
f co
1
5.06
σ lat
f co
0.57
. 	1
. 	confined
Stress and strain that correspond to point 2i Equations 24, 25
ε 2i σ lat 	2 ε i σ lat	
. 	ε ccA σ lat
f 2ic f co 1.45 0.25 ln f co	
.	. 	uniaxial
ε 2i 10	( ) 0.0311	=
confined	
f 2i σ lat 	f ccA σ lat 1
f 2ic
f co
1
6.35
σ lat
f co
0.62
. 	1
.
f 2ic 18.405	=
f 2i 10	( ) 70.95	=

-- 67 of 71 --

C:2 	CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01
E i σ lat
f i σ lat
ε i σ lat 	E 2i σ lat
f 2i σ lat
ε 2i σ lat 	E i 10	( ) 3.408 10
3	.	=
Parameters A, B, C, D and X: Equation 1, 2, 3 and 4 	E 2i 10	( ) 2.279 10
3	.	=
X ε c σ lat	,
ε c
ε ccA σ lat
A ε c σ lat	,
E ti ε ccA σ lat	
.
f ccA σ lat
ε c ε ccA σ lat	if
ε 2i σ lat ε i σ lat
ε ccA σ lat
ε 2i σ lat E i σ lat	
.
f ccA σ lat f i σ lat
4 ε i σ lat	
. 	E 2i σ lat	
.
f ccA σ lat f 2i σ lat
. 	otherwise
B ε c σ lat	,
A ε c σ lat	, 	1 2
1
0.45 f co	
.
f ccA σ lat
1 	ε c ε ccA σ lat	if
ε i σ lat ε 2i σ lat
E i σ lat
f ccA σ lat f i σ lat
4 E 2i σ lat	
.
f ccA σ lat f 2i σ lat
. 	otherwise
C ε c σ lat	, 	A ε c σ lat	, 	2
D ε c σ lat	, 	B ε c σ lat	, 	1
ε ccA 10	( ) 0.013	=	
f cA ε c σ lat	, 	f ccA σ lat
A ε c σ lat	, 	X ε c σ lat	,	. 	B ε c σ lat	, 	X ε c σ lat	, 	2	
.
1 C ε c σ lat	, 	X ε c σ lat	,	. 	D ε c σ lat	, 	X ε c σ lat	, 	2	.
.
f resid ε c σ lat	, 	f ccA σ lat
B ε c σ lat	,
B ε c σ lat	, 	1
.
0 	0.005 	0.01 	0.015
	0
50
100
150
200
f cA ε c 0,
f cA ε c 2.1,
f cA ε c 4.3,
f cA ε c 8.6,
f cA ε c 17.2	,
f cA ε c 200	,
ε c
ε c 0 0.0005	, 	0.05	.. 	σ lat 100
f cA 120.01 σ lat	, 	391.85	=
f resid 100 σ lat	, 	391.809	=
f ccA σ lat 419.959	=
k A σ lat 0.728	=

-- 68 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01 	D:1
Appendix D: Analysis from calibration of parameters.
Figure 55: Example of calibration analysis with no star status.

-- 69 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01	D:2
Figure 56: Example of calibration analysis with the status of one star.

-- 70 of 71 --

CHALMERS, Structural Engineering and Mechanics, Master’s Thesis 04:01 	D:3
Figure 57: Example of calibration analysis with the status of two stars.

-- 71 of 71 --