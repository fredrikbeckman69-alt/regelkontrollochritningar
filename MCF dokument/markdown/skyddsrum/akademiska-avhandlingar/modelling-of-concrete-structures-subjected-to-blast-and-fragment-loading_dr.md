---
title: "Modelling Of Concrete Structures Subjected To Blast And Fragment Loading Dr"
category: "akademiska-avhandlingar"
originalFile: "skyddsrum/akademiska-avhandlingar/modelling-of-concrete-structures-subjected-to-blast-and-fragment-loading_dr.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","armering","explosion","splitter","concrete","model","material"]
summary: "Modelling of Concrete Structures Subjected to Blast and Fragment Loading ULRIKA NYSTRÖM Department of Civil and Environmental Engineering Division of Structural Engineering, Concrete Structures CHALMERS UNIVERSITY OF TECHNOLOGY Göteborg, Sweden 20..."
---

Modelling of Concrete Structures
Subjected to Blast and Fragment Loading
ULRIKA NYSTRÖM
Department of Civil and Environmental Engineering
Division of Structural Engineering, Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2013

-- 1 of 107 --



-- 2 of 107 --

THESIS FOR THE DEGREE OF DOCTOR OF PHILOSOPHY
Modelling of Concrete Structures Subjected to Blast and
Fragment Loading
ULRIKA NYSTRÖM
Department of Civil and Environmental Engineering
Division of Structural Engineering, Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2013

-- 3 of 107 --

Modelling of Concrete Structures Subjected to Blast and Fragment Loading
ULRIKA NYSTRÖM
ISBN 978-91-7385-805-2
© ULRIKA NYSTRÖM, 2013
Doktorsavhandlingar vid Chalmers tekniska högskola
Ny serie nr 3486
ISSN 0346-718X
Department of Civil and Environmental Engineering
Division of Structural Engineering, Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover:
Results from numerical simulations of plain (upper) and fibre-reinforced (lower)
concrete cylinders subjected to projectile impact.
Chalmers Reproservice
Göteborg, Sweden 2013

-- 4 of 107 --

I
Modelling of Concrete Structures Subjected to Blast and Fragment Loading
ULRIKA NYSTRÖM
Department of Civil and Environmental Engineering
Division of Structural Engineering, Concrete Structures
Chalmers University of Technology
ABSTRACT
Reinforced concrete is one of the most widely used building materials in modern civil
infrastructure primarily thanks to its low cost and wide field of applications. Because
of its ductile material response under high pressure levels and when properly
reinforced, high structural energy-absorbing capacity, it is also suitable for use within
protective design. However, the response of concrete structures exposed to blast and
fragment loading, originating from accidental or intentional explosions, is fraught
with high complexity. Even though extensive efforts have been undertaken worldwide
within this area of research, the phenomena involved are not fully understood yet.
With the aim of further increasing the knowledge of the dynamic response of concrete
structures subjected to blast and fragment loadings, literature reviews, theoretical
reasoning and numerical simulations have been used in an iterative manner. In this
thesis, the theoretical bases of concrete material response relevant in case of high
dynamic loading, blast and fragment load characteristics and the dynamic effects of
wave propagation are treated. In addition two numerical studies on the structural
response are presented. The first numerical study was a comparative investigation of
the relative effect on the impact resistance when adding steel fibres to concrete. It was
concluded that the depth of penetration of the striking projectile was only slightly
influenced by the addition of fibres, while the size of the front- and rear-face craters
was decreased. The second numerical study involved combined blast and fragment
loading of a reinforced concrete wall strip, and was conducted to investigate the
synergistic effect and the cause thereof. It was observed that the total damage of the
wall strip subjected to the combined loads was highly related to the damage caused by
the fragment impact alone, and the synergetic effect of the two loads was confirmed.
A third numerical study of the effect of reinforcement on the projectile impact
resistance was conducted within the scope of the work presented. In this study, it was
found that the presence of reinforcement improved the impact resistance of the
concrete if a suitable reinforcement detailing was used.
Further, also presented is the new material model, denoted CDPM2, which has been
developed. This model combines the theories of plasticity and damage mechanics to
describe the dynamic failure of concrete. It has been shown that the model is able to
describe the behaviour of concrete for a wide range of loading conditions, static as
well as dynamic. Nevertheless, it was also found that the model should be modified to
further improve its capability. Even though some principles for possible modification
have been presented, implementation and further evaluation of such modification have
not been part of the work presented in this thesis.
Key words: 	Concrete, fibre-reinforced concrete, numerical simulation, material
modelling, dynamic loading, blast load, fragment impact

-- 5 of 107 --

II
Modellering av stötvågs- och splitterbelastade betongkonstruktioner
ULRIKA NYSTRÖM
Institutionen för bygg- och miljöteknik
Avdelningen för konstruktionsteknik, Betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
Betong är tack vare sin låga kostnad och sitt stora användningsområde ett av de mest
använda byggmaterialen i modern tid. Dess stora energiabsorberande förmåga vid
höga tryck, samt det sega beteende betongkonstruktioner har vid väl utformad
armering, gör betongen också lämplig i skyddande konstruktioner. Responsen hos
konstruktioner 	utsatta 	för 	extrem 	dynamisk 	belastning, 	så 	som 	stötvågs- 	och
splitterbelastning, är dock förknippad med hög komplexitet och trots många år av
forskning världen över är de fenomen som uppstår ännu inte helt klarlagda.
Med målsättningen att öka kunskapen om betongkonstruktioners respons vid stötvågs-
och 	splitterbelastning 	har 	litteraturstudier, 	teoretiska 	analyser 	och 	numeriska
simuleringar använts på ett iterativt sätt. Den teoretiska grunden för betongmaterialets
beteende, 	karaktärisering 	av 	stötvågs- 	och 	splitterlaster, 	lasternas 	verkan 	på
betongkonstruktioner 	och 	dynamiska 	aspekter 	på 	vågpropagering 	behandlas 	i
sammanläggningsdelen i denna avhandling. Därtill presenteras två numeriska studier.
Den första numeriska studien var en jämförande studie av vilken relativ inverkan som
tillsättning 	av 	stålfibrer 	i 	betong 	har 	på 	dess 	motståndsförmåga 	mot
projektilinträngning. 	Det 	kunde 	konstateras 	att 	inträngningsdjupet 	var 	relativt
opåverkat av fibertillsättningen medan kraterstorleken, på både fram och baksidan av
den beskjutna kroppen, minskade. I den andra studien undersöktes responsen hos en
armerad betongväggsstrimla vid kombinerad belastning av stötvåg och splitter. Det
kunde konstateras att den totala skadan i väggelementet var starkt relaterat till skadan
orsakad 	av 	enbart 	splitterbelastningen. 	Vidare 	framgick 	att 	väggstrimlans
mittnedböjning var större för det kombinerade lastfallet än för den sammanlagda
nedböjningen orsakad av stötvågs- respektive splitterbelastningarna separat. Detta
tyder på en synergieffekt för de kombinerade lasterna. En tredje numerisk studie har
utförts inom ramen för det presenterade arbetet. I denna studie har armeringens
inverkan 	på 	betongens 	motståndsförmåga 	vid 	projektilbeskjutning 	undersökts.
Slutsatsen drogs att armering kan ha viss betydelse för detta motstånd förutsatt att
armeringen är lämpligt inlagd.
I avhandlingen presenteras även en ny materialmodell (CDPM2) för dynamiskt
belastad betong. Modellen har visat god förmåga att beskriva responsen vid ett stort
antal lastfall, statiska så väl som dynamiska. I utvärdering av modellen har det visats
att genom vissa modifieringar skulle modellens förmåga att beskriva responsen vid
stora dynamiska laster kunna förbättras. Vissa riktlinjer för möjliga modifieringar har
presenterats, men implementeringen och den vidare utvärderingen av dessa är inte en
del av det presenterade arbetet.
Nyckelord: 	Betong, fiberarmerad betong, numeriska studier, materialmodellering,
dynamisk belastning, stötvåg, splitter

-- 6 of 107 --

III
LIST OF PUBLICATIONS
This thesis is based on the work contained in the following papers, referred to by
Roman numerals in the text.
I. 	Nyström, U. and Gylltoft, K. (2011): Comparative Numerical Studies of
projectile impacts on plain and steel-fibre reinforced concrete. International
Journal of Impact Engineering, Vol. 38, pp. 95-105.
II. 	Nyström, U. and Gylltoft, K. (2009): Numerical studies of the combined
effects 	of 	blast 	and 	fragment 	loading. 	International 	Journal 	of 	Impact
Engineering, Vol. 36, pp. 995-1005.
III. Grassl. P., Dimitris, X., Nyström, U., Rempling, R., and Gylltoft, K. (2012):
CDPM2: A damage-plastic approach to modelling of the failure of concrete.
Submitted to International Journal of Solids and Structures, August, 2012.
IV. Nyström, U. (2013): CDPM2: Evaluation of the concrete material model
behaviour for high dynamic loading. Submitted to International Journal of
Solids and Structures, January, 2013.
AUTHOR’S CONTRIBUTION TO JOINTLY PUBLISHED PAPERS
The contributions of the present author to the appended papers are described here:
I. 	Responsible for the planning and performance of the numerical studies and
planning and writing of the paper.
II. 	Responsible for the planning and performance of the numerical studies and
planning and writing of the paper.
III. Defining the requirements for the presented model and contributed with
comments on the paper.

-- 7 of 107 --

IV
OTHER PUBLICATIONS BY THE AUTHOR
Licentiate Thesis
Nyström, U. (2008): Concrete structures subjected to blast and fragment impacts:
Numerical simulations of reinforced and fibre-reinforced concrete. Licentiate
Thesis. Department of Civil and Environmental Engineering, Division of Structural
Engineering, Concrete Structures, Chalmers University of Technology, Publication
no. Lic 2008:4, Göteborg, Sweden.
Conference Papers
Nyström, U. and Leppänen, J. (2006): Numerical studies of projectile impacts on
reinforced concrete. Proceedings of the 2nd International Conference on Design
and Analysis of Protective Structures 2006, 13-15 November, 2006, Singapore,
pp. 310-319.
Nyström, U. and Gylltoft, K. (2008): Comparative numerical studies of projectile
impacts on plain and steel-fibre reinforced concrete. Proceedings of the Nordic
Concrete Research & Development Symposium, 8-11 June, 2008, Båstad, Sweden,
pp. 198-199.
Nyström, U. and Gylltoft, K. (2008): Simulations of blast and fragment impacts on
reinforced concrete. Proceedings of the 20th International Symposium on Military
Aspects of Blast and Shock, MABS 20, 1-5 September, 2008, Oslo, Norway.
Pascualena, F., Vantomme, J., Ndambi, JM., and Nyström, U. (2010): A comparative
numerical simulation study on blast response of reinforced concrete slabs subjected
to fire. Proceedings of the Final Conference on Cost Action C26 - Urban Habitat
Constructions under Catastrophic Events, 16-18 September, 2010, Naples, Italy,
CRC Press, Taylor & Francis Group, London, UK, pp. 277-282.
Grassl, P., Nyström, U., Rempling, R. and Gylltoft, K. (2011): A damage-plasticity
model for the dynamic failure of concrete. Proceedings of the 8th International
Conference on Structural Dynamics, EURODYN 2011, 4-6 June, 2011, Leuven,
Belgium, pp. 3287-3294.
Other Publications:
Nyström, U., Ekengren, B., Gylltoft, K., Johansson, M. and Leppänen, J. (2008):
Stötvågs- och splitterbelastade betongkonstruktioner. Bygg & Teknik, Vol. 7/08,
pp. 46-49.
Nyström, U. and Gylltoft, K. (2012): Explosionsbelastad betong: Dynamiska aspekter
av 	materialets 	respons 	i 	numeriska 	simuleringar. 	Bygg & Teknik, 	Vol. 	7/12,
pp. 42-47.

-- 8 of 107 --

CHALMERS, Civil and Environmental Engineering 	V
Preface
The work in this thesis was carried out between March 2006 and January 2013 in the
Department 	of 	Civil 	and 	Environmental 	Engineering, 	Division 	of 	Structural
Engineering, Concrete Structures at Chalmers University of Technology. The work
was performed within the “Dynamic behaviour of concrete structures subjected to
blast and fragments” research project and is a continuation of earlier work on concrete
structures subjected to severe dynamic loading conducted at Chalmers by Morgan
Johansson and Joosef Leppänen. The project is financially sponsored by the Swedish
Civil Contingencies Agency.
I would like to thank my supervisor and examiner, Professor Kent Gylltoft, for his
guidance, flexibility, and kind heart. Further, I would like to thank my assistant
supervisors PhD Morgan Johansson, Reinertsen Sverige AB, Senior Lecturer Joosef
Leppänen, and Assistant Professor Rasmus Rempling for sharing of their knowledge
and energy. I would also like to express my appreciation to MScEng Björn Ekengren,
the Swedish Civil Contingencies Agency and MScEng Rolf Dalenius, the Swedish
Fortifications Agency, for their valuable contributions to the work, and for their
support. My colleagues at Structural Engineering are thanked for their kindness and
willingness to help; I want to especially mention Associate Professor Mario Plos, and
PhD student Jonas Ekström.
I would also like to thank Professor John Vantomme, and the rest of the staff at the
Civil and Material Engineering Department of the Polytechnical Faculty of the Royal
Military Academy, Brussels, for their hospitality.
Further, Senior Lecturer Peter Grassl, University of Glasgow, and PhD Tobias Olsson,
DYNAmore Nordic AB, are thanked for their contributions to the work of developing
and implementing the new material model, respectively, and for their great patience to
answer questions related to their work. Gunilla Ramell, your language editing work is
highly appreciated.
I thank my family; my parents and sisters for always being there, Philip for his
patience, Aurélie for her ease, Erik for his great understanding, and Astrid for her
never ending smiles.
Finally, I would like to express my gratitude to all the others who have contributed to
the work, and supported me during this time.
Dilbeek, January 2013
Ulrika Nyström

-- 9 of 107 --

CHALMERS, Civil and Environmental Engineering	VI
Contents
ABSTRACT 	I
SAMMANFATTNING 	II
LIST OF PUBLICATIONS 	III
PREFACE 	V
CONTENTS 	VI
NOTATIONS 	VIII
1 	INTRODUCTION 	1
1.1 	Background 	1
1.2 	Aim and objectives 	1
1.3 	Scientific approach 	2
1.4 	Methodology 	3
1.5 	Limitations 	5
1.6 	Research significance 	7
1.7 	Outline of the thesis 	8
2 	CONCRETE MATERIAL BEHAVIOUR 	9
2.1 	Material testing 	9
2.2 	Uniaxial tension and compression 	9
2.2.1 	Static behaviour 	9
2.2.2 	Dynamic behaviour 	12
2.3 	Influence of confining pressure 	14
2.3.1 	Static behaviour 	14
2.3.2 	Dynamic behaviour 	17
3 	BLAST AND FRAGMENT LOADS AND THEIR EFFECT ON CONCRETE
STRUCTURES 	19
3.1 	General 	19
3.2 	Load characteristics at target 	20
3.2.1 	Blast load 	20
3.2.2 	Fragment load 	22
3.2.3 	Combined loading 	23
3.3 	Load effect on reinforced concrete structures 	24
3.3.1 	General 	24
3.3.2 	Modes of failure 	25
3.3.3 	Effect of reinforcement 	26
3.3.4 	Effect of steel fibres in concrete on local response 	28
3.3.5 	Effects of combined loading 	29

-- 10 of 107 --

CHALMERS, Civil and Environmental Engineering 	VII
4 	DYNAMIC ASPECTS OF WAVE PROPAGATION 	32
4.1 	General 	32
4.2 	Inertia and wave propagation effects 	33
4.3 	Shock waves 	34
4.3.1 	Introduction 	34
4.3.2 	Shock wave formation 	34
4.3.3 	Shock transition – a thermodynamic processes 	38
4.3.4 	Rankine-Hugoniot jump conditions 	40
4.3.5 	Release from shocked state 	41
5 	NUMERICAL MODELLING AT HIGH DYNAMIC LOADING 	43
5.1 	Introduction 	43
5.2 	Solution techniques 	44
5.2.1 	Numerical solution 	44
5.2.2 	Lagrange solver 	45
5.2.3 	Material modelling 	46
5.2.4 	Large strain and stress theory 	49
5.3 	Material models for concrete 	49
5.3.1 	Background 	49
5.3.2 	RHT model 	51
6 	THE CONCRETE DAMAGE PLASTICITY MODEL 2 	59
6.1 	Development process 	59
6.2 	Needs and requirements 	61
6.3 	Theoretical description 	63
6.4 	Implementation 	64
6.5 	Verification 	69
6.6 	Validation 	70
6.7 	Evaluation 	71
7 	CONCLUSIONS 	74
7.1 	General conclusions 	74
7.2 	Suggestions for future research 	75
8 	REFERENCES 	77
APPENDIX A 	EQUATION OF STATES FOR SOLIDS
APPENDIX B 	CONVERSION TO TRUE STRAINS AND STRESSES

-- 11 of 107 --

CHALMERS, Civil and Environmental Engineering	VIII
Notations
Roman upper case letters
A 	Shape factor for failure surface in RHT model
h	A 	Hardening ductility measure in CDPM2
s	A 	Damage ductility measure in CDPM2
B 	Shape factor for residual strength surface in RHT model
B0 , B1 	Factors for internal-energy dependence in Polynomial Equation of State
h	B 	Hardening ductility measure in CDPM2
Q	B 	Brittle to ductile transition parameter in RHT model
h	C 	Hardening ductility measure in CDPM2
D 	Damage parameter
D1, D2 	Material parameters in expression for plastic failure strain in RHT model
e	D 	Elastic stiffness matrix
f	D 	Dilation constant in CDPM2
h	D 	Hardening ductility measure in CDPM2
E 	Young’s modulus
cap	F 	Cap function in RHT model
elastic	F 	Pre-peak elastic stress to peak stress ratio in RHT model
rate	F 	Describing strain-rate dependence in RHT model
G 	Shear modulus
plastic	elasto	G 	Shear modulus in pre-peak hardening regime in RHT model
F	G 	Fracture energy
p	H 	Hardening modulus in CDPM2
'	HTL 	Intersection point of YTXC and hydrostatic axis in RHT model
1	I 	First invariant of the stress tensor
2	J , 	3	J 	Second and third invariants of the deviatoric stress tensor
K 	Bulk modulus
0	K 	Bulk modulus of pore free material in P – α Equation of State
K1, K2 , K3 	Factors describing shape of curve in Polynomial Equation of State
L 	Length of test specimen or structural element
M 	Shape factor for residual strength surface in RHT model
N 	Shape factor for failure surface in RHT model
1	Q 	Shear to compressive meridian ratio in RHT model
2	Q 	Tensile to compressive meridian ratio in RHT model
0.2	Q 	Reference value of tensile to compressive meridian ratio in RHT model
R3 (
) 	Rubin function in deviatoric section in RHT model
d	S 	Saturation degree
T 	Temperature
0	T 	Temperature in initial material state
p	U 	Speed of piston
s	U 	Shock wave propagation speed

-- 12 of 107 --

CHALMERS, Civil and Environmental Engineering 	IX
p	u 	Particle velocity
elastic	Y 	Elastic limit surface in RHT model
fail	Y 	Failure surface in RHT model
fric	Y 	Residual strength surface in RHT model
TXC	Y 	Compressive meridian in RHT model
Roman lower case letters
c 	Speed of sound (wave speed)
e	c 	Bulk sound speed in virgin porous material, in P – α Equation of State
0	c 	Bulk sound speed in solid material, in P – α Equation of State
p	c 	Specific heat capacity at constant pressure
e 	Specific internal energy, or in CDPM2 the eccentricity factor
0	e 	Specific internal energy in initial material state
H	e 	Reference specific internal energy for Hugoniot curve
ref	e 	Specific internal energy for reference state
efmin 	Minimum value of equivalent plastic failure strain in RHT model
c0	f 	Reference value of compressive uniaxial strength
fc 	Concrete compressive strength
elastic	c,	f 	Pre-peak elastic stress for uniaxial compression in RHT model
p	f 	Yield function
fs 	Concrete shear strength
ft 	Concrete tensile strength
elastic	t,	f 	Pre-peak elastic stress for uniaxial tension in RHT model
t1	f 	Damage stress threshold in bilinear softening curve used in CDPM2
p	g 	Plastic potential
m 	Gradient of plastic potential in CDPM2
D	m , 	V	m 	Invariants of m (volumetric and deviatoric) in CDPM2
p 	Pressure
cold	p 	Cold compression curve
el	p 	Elastic limit in hydrostatic compression
H	p 	Hugoniot curve
ref	p 	Pressure for reference state
s	p 	Pressure in non-porous material
q 	Hardening parameter function
h0	q 	Initial hardening parameter in CDPM2
s 	Deviatoric Stress tensor
3	2	1 	,	, 	s	s	s 	Principal deviatoric stresses
t 	Time
h	x 	Hardening ductility measure in CDPM2
s	x 	Damage ductility measure in CDPM2

-- 13 of 107 --

CHALMERS, Civil and Environmental Engineering	X
v 	Specific volume
s	v 	Specific volume of non-porous material in P – α Equation of State
0	v 	Specific volume of initial material state
w 	Crack opening
f	w 	Ultimate crack opening
f1	w 	Crack opening threshold in bilinear softening curve used in CDPM2
Greek letters
c	
 	Variable distinguishing tensile and compressive stresses in CDPM2
por	
 	Scale parameter for porosity in P – α Equation of State
init	por,	
 	Initial value of porosity factor in P – α Equation of State
e	por,	
 	, 	p	por,	
 	Elastic and plastic parts of 	por	

r	
 	Rate factor in CDPM2
rc	
 	Compressive measure of the rate factor in CDPM2
RHT	
 	Compressive strain-rate exponent used in RHT model
rt	
 	Tensile measure of the rate factor in CDPM2
therm	
 	Thermal volume expansion coefficient
c	
 	Factor providing smooth transition of softening in CDPM2
δ 	Kronecker delta
RHT	
 	Tensile strain-rate exponent used in RHT model
 	Strain
 	Strain rate
~ Equivalent strain measure in CDPM2
0	
 	Measure of the elastic strain at peak uniaxial tensile strength in CDPM2
3	2	1 	,	,	
	
	
 	Principal strains
c
~
 	Compressive measure of the equivalent strain in CDPM2
g	engineerin	
 	Engineering strain
pl
eq	
 	Equivalent plastic strain
fail	pl,
eq	
 	Equivalent plastic failure strain
hard	pl,
eq	
 	Equivalent plastic strain at peak strength
t
~
 	Tensile measure of the equivalent strain in CDPM2
p	ε 	Plastic strain tensor
true	
 	True strain
V	
 	Volumetric strain
Γ 	Grüneisen parameter
 	Compaction
 	Poisson’s ratio
dc	
 	, 	dc1	
 	, 	dc2	
 	Compressive damage history variables in CDPM2
dt	
 	, 	dt1	
 	, 	dt2	
 	Tensile damage history variables in CDPM2

-- 14 of 107 --

CHALMERS, Civil and Environmental Engineering 	XI
p	
 	Plastic hardening variable
 	Plastic multiplier
 	Damage parameter in CDPM2
c	
 , 	t	
 	Compressive and tensile measures of the damage parameter in CDPM2
 	Density, or in CDPM2 the norm of deviatoric stress
0	
 	Density of initial material state
s	
 	Density of non-porous material in P – α Equation of State
 	Stress
σ 	Stress tensor
3	2	1 	,	,	
	
	
 	Principal stresses
g	engineerin	
 	Engineering stress
eq	
 	Equivalent stress
residual	eq,	
 	Equivalent residual stress capacity in RHT model
HEL	
 	Stress at Hugoniot elastic limit
p	σ 	Principal stress tensor
pc	σ 	, 	pt	σ 	Compressive and tensile parts of principal stress tensor defined in CDPM2
r	
 	Radial stress
true	
 	True stress
V	
 	Volumetric stress
 	Lode angle
Abbreviations
ALE 	Arbitrary Lagrange Euler
CDPM1 	Concrete damage plasticity model version 1
CDPM2 	Concrete damage plasticity model version 2
DIF 	Dynamic increase factor
GP 	General purpose
HEL 	Hugoniot elastic limit
SPH 	Smooth particle hydrodynamics
TXC 	Triaxial compression
Other notations
 	Effective value of quantity 	
tr
 	Trial value of quantity 	

t
Quantity 	 	evaluated at time t

	 t	t
Quantity 	 	evaluated at time t + Δt

-- 15 of 107 --



-- 16 of 107 --

CHALMERS, Civil and Environmental Engineering 	1
1 	Introduction
1.1 	Background
Blast and fragment loads are characterised by their fast transient and high magnitude
nature and may cause a response in the exposed concrete structure which may differ
substantially from that of static loads. Besides the changed behaviour at the structural
level, the dynamic effects also highly influence the response at the material level. The
fast rate of loading and the influence of material inertia lead to a local build-up of
high confining pressure levels. The behaviour of concrete is highly pressure and
strain-rate sensitive in which the fast nature of the loads leads to increased strength
and ductility. However, the high pressure levels cause large deformations and highly
non-linear material behaviour. For high enough pressure levels and short load
durations, wave propagation effects may cause the formation and further propagation
of so-called shock waves in the material, which also affects the material response.
Thus, the response of concrete exposed to blast and fragment loading is very complex,
and despite decades of research within the area, the phenomena involved are not well
understood yet.
Different approaches have been used in order to characterise and examine the
response 	of 	concrete 	structures 	subjected 	to 	blast 	and/or 	fragment 	impacts.
Traditionally, this type of research has been mainly experimental. However, in recent
years the use of numerical simulation techniques has been more common and
constitutes nowadays an important addition to physical testing. The use of numerical
approaches has several advantages, of which the opportunities to reduce cost,
especially in the case of parameter studies, and the possibility of observing the
response in slower motion, are a two. However, validation of the numerical model is
required, and the numerical approach can thus not entirely replace physical testing.
1.2 	Aim and objectives
The work presented in this thesis has been carried out as part of a long-term research
project conducted at the Chalmers University of Technology which is financially
sponsored by the Swedish Civil Contingencies Agency (MSB). The aim of this project
is to increase the knowledge of the dynamic response of reinforced concrete structures
subjected to blast and fragment loading.
The objectives of the work presented in this thesis are to:
 	Observe and understand different phenomena involved in the blast and
fragment loading of reinforced concrete structures.
 	Examine the effect of different designs on the target response, relevant to
protective purposes, e.g effects of reinforcement detailing and the adding of
steel fibres into the concrete.
As further described in Sections 1.3 and 1.4, numerical simulations were used to
examine the behaviour of concrete under blast and fragment loading. Therefore, an
accompanying objective of the work was to:

-- 17 of 107 --

CHALMERS, Civil and Environmental Engineering	2
 	Evaluate, and if needed improve, the numerical model to be applicable in
general cases of blast and fragment loading of reinforced concrete.
The “numerical model” in this case refers to different assumptions, techniques and
descriptions used in the numerical simulations, e.g. the material models, contact
algorithms, element types, etc.
1.3 	Scientific approach
The 	scientific 	approach 	chosen 	was 	to 	combine 	literature 	reviews, 	theoretical
investigations and numerical studies in an iterative manner, where the numerical
simulations provide an approximated description of the real behaviour. This is
schematically shown in Figure 1.1, in which the “Physical problem description” refers
to the theories important to define the behaviour of concrete exposed to blast and
fragment loading, including the theory describing dynamic effects such as inertia and
wave propagation. “Theories in solution method” in this case refers to the theory
applied when the numerical solution method is used, i.e. in the idealisation and
discretisation of the physical problem and in the numerical integration. “Application
of theories” refers to the applied numerical simulations performed in order to observe,
examine and understand the phenomena involved in blast and fragment loading of
concrete structures.
Theories in
solution method
Physical problem
description
Literature
review
Theoretical
investigation
Subresults
Numerical
simulation
Subresults
Subresults
Subresults
Subresults
Subresults
Subresults
Subresults
Problem description
Scientific approach
Conclusions
Application
of theories
Analysis
of subresults
Figure 1.1 	Schematic illustration of the scientific approach.
Literature reviews of the current knowledge within fields of interest are important to
place the scientific question into relevant frames of references. The use of numerical
simulations to solve problems involving fast transient nonlinear phenomena is
motivated by the relatively low cost compared to experimental investigations. Further,
a numerical simulation is a useful tool since it allows for comprehensive parameter

-- 18 of 107 --

CHALMERS, Civil and Environmental Engineering 	3
studies, idealised cases with reduced complexity and slow motion observations of the
fast-paced phenomena involved. The discipline of numerical modelling is extensive
and includes numerous theories and techniques applicable to the modelling of severe
dynamic loading of concrete structures. A Lagrangian solver for the simulations was
selected. This was motivated by e.g. the possibility of following history dependent
material behaviour using this solver technique. Since the scale of view in the applied
simulations is on a structural level, the material models used are formulated on a
macroscopic scale where the concrete constituents, i.e. the aggregates, the cement
matrix and the pores, are not modelled discretely. Further, the numerical modelling
requires validation by means of experimental results. However, since no experiments
are performed within the scope of this project, experimental data are taken from the
literature.
1.4 	Methodology
As described in Section 1.3 and shown in , the methodology used to meet the
objectives involved are: reviews of the existing literature, theoretical investigations,
and the performance of applied numerical simulations of blast and/or fragment
loading of concrete structures. However, in order to increase the understanding of the
methodology used, it is described in greater detail.
Literature studies has been conducted to define and understand important factors
involved in blast and fragment loading of reinforced concrete structures, including:
 	blast and fragment load characteristics
 	blast and fragment load effects on reinforced concrete structures
 	the influence of dynamics on the response at material, as well as, structural
levels, and underlying phenomena
 	concrete material behaviour under fast loading and high compressive pressures
Since the scientific approach involves numerical simulations, the literature reviews
also entailed:
 	numerical solution techniques used in simulations of fast transient, high
pressure loading involving material and geometrical nonlinearity
 	theories used in constitutive modelling of material behaviour in general, and of
concrete behaviour in particular
Based on these literature reviews, theoretical reasoning was used to investigate the
applicability of the different theories in case of blast and fragment loading of concrete
structures.
Numerical simulations were used in applied studies to examine:
 	the effect of reinforcement on local damage in concrete
 	the effect on local damage by adding (steel) fibres to concrete in case of
projectile impact

-- 19 of 107 --

CHALMERS, Civil and Environmental Engineering	4
 	the effect of combined blast and fragment loading on the response of a
reinforced concrete structure
In the first numerical study, the amount, size and position of reinforcement was varied
to evaluate its effect on local damage. The effect of fibres in the concrete was studied
by varying material model input data to correspond to different amounts of fibres in
the concrete. In order to study the effect of combined blast and fragment loading, the
results of a simulation of combined loading was compared to results of simulations
where the loads had been treated separately. Thus, these numerical investigations had
a parameter-study character.
The methodology used in the numerical studies is schematically shown in Figure 1.2.
Each of the numerical studies where based on observations from earlier studies
(experimental, 	theoretical 	or 	numerical), 	reported 	in 	the 	literature 	or 	studies
(theoretical or numerical) made within the framework of this project. Based on these
observations, theoretical reasoning was used to formulate a hypothesis. The numerical
studies were then used to test this hypothesis. However, before the numerical study
was initiated, the hypothesis had to be deducted into predictions from which the scope
of the study had to be defined, i.e. material properties, type of structure and load
characteristics 	were 	specified. 	Since 	numerical 	simulations 	are 	mathematical
predictions of real behaviour, limited by assumptions and idealisations, a validation
process of the numerical model was essential. This was performed by comparing
results from reference simulations of experiments with the observations reported from
those experiments. It was required that the basic experimental conditions, e.g. material
properties, geometries and loading conditions, were close to those used in the
numerical study. Since no experiments have been performed within the scope of this
project, the experiments used within the validation process were derived from the
literature. 	When 	found 	necessary 	the 	validation 	process 	did 	also 	involve 	the
calibration and modifications of the numerical model. Once the numerical model was
validated and its limitations surveyed, parametric variations were used to study their
influence on the behaviour. The results were then interpreted and general conclusions
drawn. If further investigations were required, the definition of the study was
modified and additional numerical simulations performed.
The use of numerical simulations introduces limitations such that the results from
these studies can never be better than the numerical model itself. Therefore, the
capability of the numerical model was under constant observation throughout the
project. Even though the numerical models used in the studies were able to yield
results used to extract generic conclusions about real behaviour, the limited possibility
of modifying the material model used to describe the concrete behaviour became an
issue. The need to modify the model arose from its limited ability of describing
certain material behaviours and the limited possibility of modifying the model input
variables to take into account the effect of for example adding fibres to the concrete
mix which influences such factors as the tensile softening behaviour.
A decision to develop and implement a ‘new’ material model (called the Concrete
Damage Plasticity Model 2, CDPM2) was taken after the consideration of different
possibilities of advancement. The process of developing this model involved the
following elements: setting up requirements for the model, making the theoretical
build-up, implementing the model in a program, verifying implementation, validating
the model and evaluating this response.

-- 20 of 107 --

CHALMERS, Civil and Environmental Engineering 	5
Observations from studies
(within the project and/or literature)
Theoretical
reasoning
Definition of study
Numerical
simulations
Intepretation of results 	modifications
Parameter studies 	Reference simulation
Experiment described in literature
Numerical model
(basic conditions)
Validation process of numerical model
Validation of
numerical model
Figure 1.2 	Schematic illustration of the methodology used in the numerical studies.
1.5 	Limitations
This work is limited to the study of normal strength concrete as well as normal
strength concrete with the addition of moderate dosages of steel fibres (where
specifically noted). Further, the concrete structures studied within this work are
limited to structures of low complexity and rather represent structural members than
entire structures.
In the work presented within this thesis, the focus was kept on the effect of an
explosion on a reinforced concrete structure; see Figure 1.3. The explosion process,
including e.g. initiation of detonation, decomposition of explosive material, casing
breakup, fragment ejection, release of shock wave and propagation of shock wave and
fragments in the air, has been paid no or very limited attention. Further, the loads are
considered as a blast load and fragments, but secondary loads such as debris from
surrounding structures are disregarded. The penetration of projectiles has, however,
been included in the studies as these can be viewed as special cases of fragment
impacts.
Methods used to characterise blast and fragment loads caused by the detonation of
cased charges involve idealisations and simplifications, often necessary in order to
make them sufficiently generic. This approach limits the effectiveness of the methods,

-- 21 of 107 --

CHALMERS, Civil and Environmental Engineering	6
thereby also limiting the results attained. The fragments used when simulating
fragment cluster impacts are of the same geometrical shape, size, velocity and mass
and are all assumed to move in a general direction perpendicular to the target surface
of the same velocity. In reality, all these parameters would normally vary among
fragments, but in order to simplify the numerical model and be able to draw general
conclusions from the results, these simplifications were necessary.
The applied numerical simulations conducted are based on fictive cases. Thus, no
experiments performed correspond to these simulations which limits the possibility of
validating the results of the simulations. However, as described in Section 1.4, the
validation of the numerical model in these cases was approached by comparing
numerical results with experimental results for similar conditions during which
relevant findings where used to identify limitations of the case studied.
chemical
composition
of explosive
density
of explosive
mass per unit
length of
explosive
total mass
of explosive
standard heat of
formation of
compounds
chemical
composition of
reaction products
casing mass
per unit length
casing thickness
per unit length
casing material
properties
density
of casing
bomb
geometry
bomb placement
initiation of
bomb
Casing
Bomb as a whole
 
Explosive
Initial state 	Decomposition of
explosive
velocity of
detonation
detonational
pressure
amount of
released energy
per unit mass
amount of
released energy
per unit length
in total
Casing
breakup
Fragment ejection 	Released blast wave
bomb with
unfragmented
casing
deformational
work per
unit length
fragment
material
properties
initial fragment
velocity
amount of
available energy
per unit length
in total
fragment
range
fragment size,
cross-sectional
area, shape
fragment mass
fragment
ejection anle
unit length
blast wave
incidence angle
blast wave
duration
blast wave
time-
pressure
relation
blast wave
pressure blast
wave
fragments
penetration
of shelter
propagation in
surroundings
effect
in
target
area of
study
Figure 1.3 	Schematic illustration of the course of events and factors impacted in
the process from initiation of bomb to its effect on the exposed structure
(target). The area of interest in the present study is marked.

-- 22 of 107 --

CHALMERS, Civil and Environmental Engineering 	7
1.6 	Research significance
The area of research regarding blast and fragment loading of concrete has been paid
attention for many decades. Traditionally, this research was mainly experimental.
However, the fast nature of the response and complexity of the phenomena involved
both regarding loading and material behaviour complicate the analyses of test results
and limit the opportunity of drawing conclusions. Further, since the response is
depending on material factors as well as test conditions, the conclusions drawn are
often case sensitive and lack generality. In more recent years, analysing the response
of concrete exposed to blast and fragment loading by means of numerical simulations
have grown more common. This allows for cost effective parameter studies and the
possibility of following the response in slower motion.
Experimental studies of the effect of fibres in concrete reported in the literature have
shown a significant improvement of the resistance to local damage compared to plain
concrete; see Paper I. However, due to the limitations involved in drawing generic
conclusions from such studies, as discussed above, a numerical study of the effect of
adding fibres into concrete has been conducted. This study has allowed for parameter
studies and generic conclusions to be drawn.
Combined blast and fragment loading is considered to be synergetic in the sense that
the combined loading results in greater damage than the combined damage caused by
the blast and fragment loading separately. This effect is pointed out in some literature
and design manuals within the area of protective design; see Paper II. However, due
to the complex nature of the effect, the high parameter dependence and limited
number of documentations and comparable experiments, the design manuals often
disregard the synergy effect or treat it in a very simplified manner. In order to increase
the understanding of the combined effects of blast and fragment loading, a numerical
investigation 	was 	conducted. 	This 	investigation 	allowed 	for 	idealised 	loading
conditions and generic conclusions of the effect of the combined blast and fragment
loading on the damage evolution and structural response.
Even if numerical simulations are effective tools to study the behaviour of blast and
fragment loaded concrete structures, the method involves limitations. One crucial
factor affecting the ability to model concrete behaviour accurately is the constitutive
laws used to mathematically describe the material response. In the numerical studies
referred to above, the RHT model was used. Even though this model is reported to
describe the response of concrete accurately in several applications of projectile
penetration (Hansson, 2002; Leppänen, 2003; Schuler, 2004; Tham, 2006), it suffers
from limited accuracy in loading cases involving tensile cracking (Leppänen, 2006;
Magnusson and Hansson, 2005; Nyström, 2008). Further, it lacks the versatility to
take into account effects of for example fibres in the concrete. Since also other
material models developed for concrete exposed to high transient loadings often suffer
from limitations and lack of versatility, and pointing out the limited possibility of
overcoming these weaknesses by employing user subroutines, the need for a “new”
model to be implemented in a suitable numerical simulation tool arose. With the
combination 	of 	stress-based 	plasticity 	and 	isotropic 	damage 	mechanics 	the
constitutive model CDPM2 for the rate dependent failure of concrete was developed
characterized by its numerical stability and flexibility to adapt to newly developed
concrete based materials, such as fibre reinforced concrete.

-- 23 of 107 --

CHALMERS, Civil and Environmental Engineering	8
The model has shown good agreement with experimental results under various load
conditions, from uniaxial tension to hydrostatic compression and shock wave loading.
Nevertheless, the current version of the CDPM2 has a limited capability of describing
the behaviour of concrete at pressure levels higher than about five GPa and
accumulation of damage at high strain rates. However, upon modification it is
believed that use of the model would increase the opportunities of studying the
behaviour of concrete structures exposed to combined blast and fragment loading and
the effects of different designs of the concrete target in future research.
1.7 	Outline of the thesis
This thesis is composed of an introductory part and four enclosed papers published or
submitted for publication in reviewed scientific journals. The introductory part aims at
giving some background on the subjects treated in the enclosed papers, while also
including information complementary to these papers.
Chapters 2 to 4 present the theory relevant for understanding the physical problem. In
Chapter 2, the behaviour of concrete under various loading conditions relevant to
describing the material response to high dynamic loading is presented. Chapter 3 is
divided into two parts corresponding to the characterisation of blast and fragment
loading and their effect on reinforced concrete structures, respectively. In the latter
part, common modes of failure in reinforced concrete structures exposed to blast and
fragment loadings are presented together with findings from the applied numerical
studies performed within the scope of the work presented in this thesis. Two of the
numerical studies are presented in appended Papers I and II. In Chapter 4, the
dynamic effects caused by highly transient loads are presented. Simplified, these can
be divided into inertia and wave propagation effects. However, the theory of shock
wave formation, propagation and material transformation is paid special attention.
Chapter 5 presents the theory used for the numerical solution method, with special
emphasis on constitutive modelling. A brief review of the evolution of material
models used to describe the behaviour of concrete under high dynamic loading and a
more comprehensive description of the RHT model (Riedel, Hiermaier and Thoma;
developed by Riedel, 2000) are also presented. The RHT model was used to describe
the concrete material behaviour in the applied numerical studies. Clearly, many
existing material models for concrete provide good results for the loading cases for
which 	they 	were 	developed. 	Nevertheless, 	their 	lack 	of 	versatility 	call 	for 	a
constitutive model to account for the dynamic failure of concrete, which is easy to
extend and is based on input parameters with physical meaning. The development of
such a material model denoted “Concrete Damage Plasticity Model 2” (CDPM2), is
the topic of Chapter 6.
Major conclusions and suggestions for future research are presented in Chapter 7, and
references used in the introductory part of this thesis are presented in Chapter 8.

-- 24 of 107 --

CHALMERS, Civil and Environmental Engineering 	9
2 	Concrete material behaviour
2.1 	Material testing
In order to understand and model the behaviour of concrete under blast and fragment
loading, its behaviour under these conditions must be known. As further described in
in Chapters 3 and 4, blast and fragment loadings may cause high strain rates and the
built-up of high confining pressures in the exposed material. Further, the high
intensity of the loads and the subsequent high pressure levels may lead to the
formation and propagation of shock waves, which are compressive waves causing
almost instantaneous jumps in the material state, i.e. its stress state, density and
temperature. However, as the intensity of the load decreases and the structure is
released, the concrete is exposed to lower stress levels. This is also the case for parts
of the structures which are relatively far from the load. Thus, the behaviour of
concrete must be characterised for a wide range of stress conditions. In order to
discern the phenomena involved during loading, the complexity has to be kept low
during the testing of concrete. In practice, this means that comprehensive testing is
performed under quasi-static loading, which are complemented by dynamic testing for
cases with well-defined uniaxial stress conditions.
However, due to limitations in test facilities the maximum confining pressure levels
reachable during quasi-static loading often seems to be limited to less than 1 GPa,
most often in the range of 0.5 to 0.7 GPa; see Bažant et al. (1996), Gabet (2006) and
Williams et al. (2006). Dynamic testing involving detonation or high velocity impact
is used to characterise the behaviour under higher confining pressure levels. These
tests are then evaluated under the assumption of one-dimensional shock wave
propagation but the effects of temperature and strain rate cannot be distinguished from
the material strength in these tests.
2.2 	Uniaxial tension and compression
2.2.1 	Static behaviour
Concrete is one of the most widely used building materials, among other things thanks
to 	its 	high 	compressive 	strength, 	(fc). 	However, 	one 	of 	its 	most 	pronounced
disadvantages is its low tensile strength (ft ), which for normal concrete is in the order
of 6 to 12 % of compressive strength. Despite this difference in absolute terms, the
general behaviour of initial elasticity, pre-peak stress softening and post-peak strain
softening may be observed in both uniaxial tensile and compressive tests. Figure 2.1
schematically shows the general behaviour of concrete under uniaxial tension and
compression. Even though the strain at failure may be relatively large compared to
elastic strain, due to the low values of failure strain (on the order of 1 % or less;
Lubliner, 2008), 	concrete 	is 	regarded 	as 	brittle. 	This 	brittleness 	is 	especially
pronounced in tension.

-- 25 of 107 --

CHALMERS, Civil and Environmental Engineering	10
Figure 2.1 	Stress-strain relation for uniaxial tension and compression.
The fracture process of concrete can in a mesoscopic view to a large extent be
explained 	by 	the 	initiation, 	propagation 	and 	bridging 	of 	microcracks. 	Due 	to
settlements, shrinkage and thermal expansion of the mortar, microcracks exist in
concrete 	already 	before 	any 	load 	is 	applied. 	These 	microcracks 	are 	mainly
concentrated to interfaces between the mortar and aggregates, which are referred to as
“bond cracks” below.
In the initial phase of loading, the microcracks are nearly unchanged and the
behaviour may be approximated as linear-elastic. At levels of about 30 and 60 % of
the compressive and tensile ultimate strength, respectively, stable growth of the bond
cracks is initiated and the material response becomes nonlinear; Chen (2007). For
increased load levels, bond cracks start to extend in a stable manner. Even though the
amount of microcracks in the mortar is initially limited and their effect on the
response is negligible, the amount increases with the load level and their propagation
causes the bridging of bond cracks for nearby aggregates. At stress levels of about 75
and 80 % of the compressive and tensile strength, respectively (Chen, 2007 and
Weerheijm, 1992), the microcracking in the mortar becomes significant and the
fracture 	process 	becomes 	unstable. 	The 	ultimate 	strength 	of 	the 	concrete 	is
approached. After the failure strength has been reached, concrete shows strain-
softening behaviour in both compression and tension. Due to the localisation of
damage and subsequent growth of macrocracks, concrete gradually decreases in
strength with increasing deformation.
Due to the inhomogeneity of damage in the concrete sample, testing and evaluating
the results of crack softening is not evident. The damage process under uniaxial
tension may be divided into two phases: a homogenous phase and an inhomogeneous
phase. In the homogenous phase the damage, which consists of initiation and growth
of microcracks, is evenly distributed over the sample volume. In the inhomogeneous
phase, damage localises to fracture process zones in which the macrocracks develop
while the rest of the sample is unloaded with the closure of the microcracks. In
tension, where the general direction of macro-crack propagation is perpendicular to
the load axis, after the formation of macrocracks, the measure of global strain is no
Stress, σ
Compression
Tension	ft
fc
Strain, ε

-- 26 of 107 --

CHALMERS, Civil and Environmental Engineering 	11
longer sufficient to characterise the local behaviour. Thus, the behaviour due to
uniaxial tensile loading is often represented by two curves; a stress-strain relation
during 	the 	homogenous 	damage 	phase, 	and 	a 	stress-crack 	opening 	phase 	to
characterise the behaviour during the inhomogeneous damage phase; see Figure 2.2.
Even though the transition point from global to local damage behaviour follows the
ultimate stress point, it is often approximated to coincide with the point of ultimate
strength; Bai et al. (2012). The area beneath the stress-crack opening relation in
Figure 2.2 represents the tensile fracture energy, GF . However, due to the difficulties
related to measurements of the stress softening behaviour during the inhomogeneous
phase, other test methods than uniaxial tension is often used to characterise the
concrete response during this phase. An example of such a test method is the three-
point bending test of a notched beam, often referred to as the “work-of-fracture”
method, which was originally proposed by Hillerborg (1985).
Figure 2.2 	Stress-deformation 	relation 	for 	concrete 	in 	uniaxial 	tension, 	and
separation into a stress-strain and a stress-crack opening relation.
In concrete compressed under no or low lateral confinement, a phenomenon referred
to as dilation is observed. Even though the load is compressive, at a certain stage of
loading, the lateral deformations become so large that the volume increases. This
phenomenon is observed when the relation between the axial stress and the volumetric
strain ( 	3	2	1	V	
	
	
	
 			 	) is plotted; see Figure 2.3. This volume increase results from
the formation of cracks parallel to the direction of the greatest compressive stress.
σ
ΔL
ε·L 	w
σ
w	ε
ε·L 	w
wf
GF
+
σ 	stress
L 	initial length
ΔL 	deformation
ε 	strain
w 	crack opening
wf 	ultimate crack opening
GF 	fracture energy
σ

-- 27 of 107 --

CHALMERS, Civil and Environmental Engineering	12
-50
-40
-30
-20
-10
0-4 	-3 	-2 	-1 	0 	1 	2 	3 	4
stress [MPa]
strain [mm/m]
-200
-150
-100
-50
0 -60 	-40 	-20 	0 	20 	40
Volumetric strain
Axial strain
Lateral strain
stress [MPa]
strain [mm/m]
43.0 MPa
30.1 MPa
17.2 MPa
8.6 MPa
4.3MPa
0 MPa
a) 	b)
Figure 2.3 	Dilation for compression under a) no or b) low, confining pressure,
experimental 	data 	from 	Kupfer 	et 	al. 	(1969) 	and 	Imran 	and
Pantazopoulou (1996), respectively.
2.2.2 	Dynamic behaviour
As with most materials, the behaviour of concrete changes as the strain rate increases.
The increase of the compressive and tensile strength is often characterised by a
dynamic increase factor (DIF), describing the ratio between the dynamic and static
strengths. As seen in Figure 2.4a, in which Malvar and Ross (1998) have compiled the
results of experiments conducted by several researchers, the dynamic tensile strength
of concrete may be as much as five to seven times higher than static ultimate strength.
As seen in Figure 2.4b, the strain-rate effect is less significant on compressive
strength but may still be more than doubled; Bischoff and Perry (1991).
Cowell 38 MPa
Hatano 23 MPa
Mellinger/Birkimer 36 MPa
McVay 35 MPa
Ross direct tension
Cowell 63 MPa
Cowell 32 MPa
Takeda/Tachikawa
Birkimer 47 MPa
Ross split tension
Ross mixes E-J 	Kormeling et al
John et al. 53 MPa 	Antoun 57 MPa
8
7
4
0
6
5
3
2
1
10 -6 10-5 10-4 10-3 10 -2 10-1 100 10 1 	102 103
strain rate [s -1
]
DIF uniaxial tensile strength
 	varies
σ<20 MPa
20<σ<20 MPa
30<σ<40 MPa
40<σ<50 MPa
60<σ<70 MPa
σ>70 MPa
Static compressive strength
10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 10 3
	10-8 10 -7
strain rate [s -1
]
0.5
1.0
1.5
2.0
2.5
DIF uniaxial compressive strength
a) 	b)
Figure 2.4 	Dynamic increase factors (DIF) for concrete a) uniaxial tensile strength
and b) uniaxial compressive strength, based on Malvar and Ross (1998)
and Bischoff and Perry (1991), respectively.

-- 28 of 107 --

CHALMERS, Civil and Environmental Engineering 	13
As seen in Figure 2.4, there is a moderate increase of strength up to a strain rate of
about 1 s -1 and 30 s -1 for tension and compression, respectively. Thereafter, the
strength increases rapidly with increasing strain rate. According to Johansson (2000),
who reviewed research on strain rate effects on concrete strength up to that date, the
moderate increase can be explained by viscous effects leading to changed crack
propagation and even multiple crack planes. This is a material effect which seems to
be enhanced in the presence of water in concrete pores; Rossi et al. (1994). The more
pronounced increase of strength is due to structural effects attributed to inertia. In
compression, 	inertia 	causes 	delayed 	lateral 	deformation 	which 	leads 	to 	lateral
confining pressures and since the strength in concrete is pressure dependent (see
Section 2.3), a higher strength is attained than in static loading. In tension, though,
inertia affects the material state around the crack tips and reduces the rate of crack
propagation; Weerheijm (1992).
Young’s modulus is reported to be strain rate sensitive as well but to smaller extent
than the strength; Yan and Lin (2006). Figure 2.5 shows the relations for the strain
rate dependence of the Young’s modulus for uniaxial compression and uniaxial
tension, respectively, calculated according to CEB (1993).
0.8
1.0
1.2
1.4
1.6
1.8
2.0
tension
compression
10-6 10-5 10-4 10-3 10-2 10-1 100 10 1 102 103
strain rate [s-1
]
DIF Young’s modulus
Figure 2.5 	Strain rate dependence of Young’s modulus in uniaxial compression
and uniaxial tension, calculated according to CEB (1993).
Due to the lack of reliable test methods, it was previously unclear whether the fracture
energy is strain-rate dependent as well, more recent studies (e.g. Schuler, 2004; Brara
and Klepaczko, 2007; Weerheijm and van Doormaal 2007) indicate that this is the
case for high strain rates. In Figure 2.6, data on the dynamic increase factor for
fracture energy (i.e. the ratio of static and dynamic fracture energies) presented in
Schuler (2004) and Weerheijm van Doormaal (2007) are shown in relation to the
strain rate. These measurements correspond to the specific fracture energy, i.e. total
fracture energy divided by fracture surface area and is not dependent on the number of
crack planes. Thus, in the case of formation of multiple fracture zones, the total
fracture energy in a specimen would increase further. The physical phenomena
involved are not yet well understood, but Weerheijm and van Doormaal (2007)
explain the increased fracture energy as similar to the strong increase of tensile
strength for high strain rates; inertia effects at crack tips. According to Weerheijm and
van Doormaal (2007), this phenomenon would lead to more extensive micro-cracking

-- 29 of 107 --

CHALMERS, Civil and Environmental Engineering	14
but would not affect the ultimate crack opening measure for which no more stresses
may be transported over the fracture zone, thus, producing an increased fracture
energy.
DIF fracture energy
4
2
1
3
0 10-4 	10-2 	100 	102
	10 -6
strain rate [s -1
]
Weerheijm and Doormaal (2007)
Schuler (2004)
Schuler (2004), notched
Figure 2.6 	Dynamic increase factor (DIF) for specific fracture energy of concrete.
2.3 	Influence of confining pressure
2.3.1 	Static behaviour
Concrete is a pressure sensitive material, i.e. the strength changes with changing
pressure levels. In order to characterise pressure sensitivity, the ultimate strength
under different loading conditions are often plotted as a measure of the principal stress
difference versus the hydrostatic pressure component; see Figure 2.7. As observed,
the principal stress difference σ1 - σ3 (which is related to the shear strength of
concrete) increases from a few MPa in uniaxial tension to several hundred MPa for
very high confining pressures. Further, the observed difference between the tensile
and compressive meridians may be explained by the fact that concrete fails at a lower
principal stress difference value when undergoing triaxial extension test than under
triaxial compression. However, for high pressure levels, the limit state data are
scattered.
Vu et al. (2009) studied the effect the initial saturation degree of concrete on shear
limit states and showed how an increased degree of saturation (Sd) reduced shear
resistance 	for 	high 	confinement 	levels. 	The 	behaviour 	was 	explained 	by 	a
combination of two phenomena: the loss of cohesion as the concrete underwent
plastic compaction, and the reduced friction between grains due to presence of free
water. As the concrete approached full compaction, the pore pressure due to water
became sizable and increased volumetric stiffness and limited shear strength, which
finally became insensitive to pressure. The lower the initial saturation degree, the
higher compressive volumetric stresses may be reached before pore pressures produce
this effect. In fact, the experimental data for “dry” concrete (Sd 11%) in Vu et
al. (2009) and data from Gabet (2006) derive from the same test series using identical
concrete. Gabet (2006) studied for example the effect of the loading path on limit

-- 30 of 107 --

CHALMERS, Civil and Environmental Engineering 	15
states and concluded that even if the compaction behaviour depended on the loading
path, the limit state did not.
10
0
10
20
30
0 	5 	10 	15 	20 	25 	30 	35
2
0
2
4
6
0 	1 	2 	3 	4
compressive meridian
tensile meridian
tensile meridian
compressive meridian
Sd
=11%
Sd =50%
Sd =70%
Sd =85%
Sd =100%
pressure / fc
principal stress difference /
 fc
principal stress difference /
 fc
pressure / fc
Bazant et al. (1996)
Gabet (2006)
Imran (1994)
Linse and Aschl (1976)
Williams et al. (2006)
Mills and Zimmermann (1970)
Scholz et al. (1995)
Smith (1987)
Vu et al. (2009)
Figure 2.7 	Normalised strength limit states as a function of pressure (compressive
and tensile meridians).
Higher pressure levels also yielded a stiffer and more ductile behaviour which may be
seen in Figure 2.8a, showing experimental results from triaxial compressive loading
under different levels of confinement (50, 100, 200, 500 and 650 MPa, respectively),
presented in Gabet (2006). The uniaxial compression strength of the concrete was
34 MPa. For confining pressures of 100 and 200 MPa the stress-strain curve seemed
to reach a plateau, i.e. no strain softening behaviour was observed. For 500 and
650 MPa confinement, the ultimate strength was not reached during testing. However,
these 	results 	showed 	a 	very 	ductile 	behaviour 	featuring 	large 	irreversible
deformations. In Figure 2.8b, the hydrostatic part of the triaxial compression tests are
shown together with a cyclic hydrostatic compression test on the same concrete, from
Gabet (2006).

-- 31 of 107 --

CHALMERS, Civil and Environmental Engineering	16
σ	-2000
-1500
-1000
-500
0 -150	-100	-50	0
σr = 650 MPa
σr = 500 MPa
σr = 200 MPa
σr = 100 MPa
σr
σ
-800
-600
-400
-200
0 -100	-80	-60	-40	-20	0
σr = 50 MPa
pressure [MPa]
axial stress
 σ [MPa]
axial strain [mm/m] 	volumetric strain [mm/m]
hydrostatic part of TXC tests
cyclic hydrostatic loading
a) 	b)
Figure 2.8 	Stress-strain relationship for a) triaxial compression tests (TXC) with
different confining pressures, and b) hydrostatic part of TXC-tests in a)
and cyclic hydrostatic compression; results from Gabet (2006).
The volumetric compaction behaviour of concrete is often divided into three different
phases, as schematically shown in Figure 2.9. These phases are:
 	Initial elastic phase:
The concrete behaviour may be approximated as linear elastic, and unloading
during this phase does not lead to any remaining deformations.
 	Plastic compaction phase:
If the elastic threshold pel is exceeded, the pressure causes damage in the
cement matrix and a significant drop in the material stiffness is observed. A
gradual increase of pressure leads to plastic compaction of the cement matrix
and an irreversible compaction of the concrete due to pore compaction, with
additional matrix damage. If unloading occurs during this phase, a reduced
volume compared to the initial volume is reached. However, the gradual
compaction of the material leads to increased stiffness of the material.
 	Pore-free, granular compaction phase:
As additional pores are compacted during the plastic compaction phase, the
concrete approaches the behaviour of a fully compacted granular, for which
the structure in the cement matrix is fully damaged and all pores compacted.
In this phase where pressure exceeds the threshold ps , the compaction stiffness
again becomes approximately linear elastic.
In the results from Gabet (2006) shown in Figure 2.8b the first two phases can be
distinguished. The third phase is, however, not attained during these tests.

-- 32 of 107 --

CHALMERS, Civil and Environmental Engineering 	17
compressive stress
(pressure)
volumetric strain
Initial elastic phase
Plastic compaction phase
Pore-free granular compaction phase
ps
pel
Figure 2.9 	Schematic illustration of the concrete compaction curve in hydrostatic
compression.
Another characteristic of concrete is the shear-induced or shear-enhanced compaction,
meaning that in the presence of shear stresses, the concrete shows more compaction
than in its absence. This effect can be seen when comparing data from hydrostatic
compression tests with those from one-dimensional compression (uniaxial strain).
Figure 2.10 shows the response from the hydrostatic part of the triaxial compression
tests and a uniaxial contraction strain test in the mean stress-volumetric strain plane;
from Gabet (2006).
-1400
-1200
-1000
-800
-600
-400
-200
0
-140	-120	-100	-80	-60	-40	-20	0
mean stress [MPa]
axial strain [mm/m]
hydrostatic part of TXC tests
cyclic hydrostatic loading
uniaxial contraction strain
Figure 2.10 	Shear 	induced 	compaction. 	Experimental 	data 	from 	hydrostatic
compression and uniaxial strain, based on Gabet (2006).
2.3.2 	Dynamic behaviour
At higher pressure levels than approximately 1 GPa testing of concrete material
behaviour is performed by means of dynamic loading. As mentioned in Section 2.3.2,
these tests are constructed to form a one-dimensional shock wave in the material,
which is achieved by means of for example contact detonations or reversed flyer-plate
impact tests. Further mentioned in Section 2.3.2, such compressive waves cause
almost instantaneous jumps in the stress state, density and temperature of the
concrete. Depending on the shock wave amplitude, different material states are
reached. These states are denoted Hugoniot states. Since the increase of temperature

-- 33 of 107 --

CHALMERS, Civil and Environmental Engineering	18
may only be implicitly accounted for in the evaluation of the test data, the Hugoniot
states are often represented by points in a two-dimensional plane, for concrete often in
terms of stress and density. The theory of shock waves, shock wave material transition
and Hugoniot points are treated in Section 4.3.
Figure 2.11 shows results from contact-detonation tests (Gebbeken et al. 2006), and
several flyer-plate impact tests (Eibl and Ockert, 1996; Gebbeken et al., 2006;
Grady, 1993, 1996; Hall et al., 1998) in the axial stress-density plane. The data
scatter, especially pronounced for high stresses, may be attributed to for example
differences in concrete mixes, water content, and limitations in test-measuring and
evaluation techniques.
0
-5
-10
-15
-20
-25
-30
2400 	2600 	2800 	3000 	3200 	3400
density [kg/m3 ]
axial stress [GPa]
Eibl and Ockert (1996)
Gebbeken et al. (2006), detonation
Gebbeken et al. (2006), flyer plate
Grady (1993)
Hall et al. (1998)
Grady (1996)
Figure 2.11 	Hugoniot-data points for concrete.
The data shows non-linearity and the behaviour may be related to the three phases of
compaction described in Section 2.3.1; the initial elastic phase, the plastic compaction
phase, and the pore-free granular compaction phase. However, the first phase is
difficult to distinguish in the figure since the elastic limit is low compared to the
minimum level of stresses reached. Further, the effects of the thermal energy and
strain rate on the response cannot be differentiated from material strength.

-- 34 of 107 --

CHALMERS, Civil and Environmental Engineering 	19
3 	Blast and fragment loads and their effect on
concrete structures
3.1 	General
Generally seen, explosions cause two types of loading on the surroundings: blast load
and fragment impact load. The fragments can be of primary or secondary kind, i.e.
caused by fragmentation of a material casing the explosive medium or caused by
fracture of surrounding objects or structures.
Primary fragments are created when the casing bursts after successive swelling caused
by the high internal pressure build up as the explosive filling transforms into hot gas
when initiated. During swelling, radial tensile cracks will form on the outside and
shear cracks on the inside of the casing. As these cracks meet or propagate to a free
edge, fragments are formed and start to propagate in the surrounding air away from
the point of detonation; see Curran (1997). Figure 3.1 schematically shows the
fragmentation process on a global and local level. As the casing fractures, the hot gas
and its remaining energy is released and expands into the surrounding air causing a
blast wave, i.e. a shock wave propagating in the air. Obstructing objects or structures
surrounding the explosion affects the properties of the blast wave. The interaction of
the blast wave with these objects may also lead to the creation of secondary
fragments. Thus, the loading on a structure caused by an explosion may be very
complex and is highly dependent on for example the type and amount of explosive
medium, casing thickness and material, the geometry of the exploding object, the
surroundings and the stand-off, i.e. the distance to the centre of detonation. As the
blast wave propagates into the surroundings, the energy is spread out and the intensity
of the blast wave decreases with increasing stand-off. In the same way and in
combination with air resistance, the density and velocity of fragments decreases with
increasing stand-off.
explosive filling
casing
Initiation of explosive.
Swelling of casing due
to high internal pressure.
Casing fragmentation and
release of remaining energy 	initial casing
thickness
s
w
e
l
l
i
n
g
tensile crack
shear crack
Figure 3.1 	Fragmentation process of bomb casing; global (left) and local (right)
point of view, respectively, partly based on Janzon (1978).

-- 35 of 107 --

CHALMERS, Civil and Environmental Engineering	20
In order to define the loads for structures exposed to explosions, the striking blast
wave and fragments, respectively, have to be idealised and characterised. Brief
descriptions of blast and fragment load characteristics are provided in Section 3.2; for
more 	comprehensive 	descriptions, 	see 	Johansson (2012) 	and 	Leppänen (2012),
respectively.
Structural response due to high transient dynamic loading can differ substantially
from the response caused by static loading. Principally derived from inertia and wave
propagation effects; see Chapter 4. Fast loading in combination with high load
amplitudes, causing material damage, thus affects the target failure mode. In general,
an 	increased 	concentration 	and 	intensity 	of 	the 	total 	load 	leads 	to 	increased
localisation of the damage. Common modes of failure in concrete structures subject to
blast and/or fragment loading are described in Section 3.3.2.
3.2 	Load characteristics at target
3.2.1 	Blast load
Thanks to a large amount of test data from bare high-explosive detonations, the blast
load characteristics from such detonations can be estimated with good accuracy.
Expressions of the pressure-time relation of the loads can be found in most handbooks
and design manuals within the field, e.g. Johansson (2012), Krauthammer (2006) and
U.S. Army (1992). However, it is the nature of the propagating blast wave before it
strikes the target together with the nature of the reflection as the target is struck that
characterises the resulting load.
As seen in Figure 3.2a, the pressure profile of an idealised blast wave from a bare
detonation consists of two phases; the positive and negative phase, respectively. The
positive phase, characterised by an overpressure relative to the initial ambient
pressure, is initiated by an almost instantaneous increase of pressure, as the blast wave
front passes. The abrupt increase of pressure is followed by descending pressure. As
the pressure level falls below the initial ambient pressure, the negative phase is
entered. The negative pressure relative to the initial ambient level is caused by the
partial vacuum created as air particles have been removed by the wave front
(Johansson, 2012). The reversal of air particle flow makes the pressure level increase
and the initial state of the ambient air is finally reached again.
For cased charges, where energy is consumed to fracture the casing and imparting
velocity to the fragments, the blast wave parameters also depend on the geometry and
material properties of the casing; as a result, the blast wave will be estimated with less
accuracy than in the case of bare charges. As a blast wave strikes a surface not parallel
to its direction of propagation, it is reflected, thereby changing its behaviour. In the
case of normal reflection, i.e. the reflecting surface is perpendicular to the direction of
the blast wave, the effect can lead to significant enhancement of the pressure, which
according to Johansson and Laine (2012) may be as much as 20 times higher than the
incident pressure. Thus, reflections of the blast wave on surrounding structures before
the target is reached makes the resulting blast wave profile more complex than in the

-- 36 of 107 --

CHALMERS, Civil and Environmental Engineering 	21
case of free field propagation shown in Figure 3.2a. Thus, more rough estimations are
used when determining the blast load from cased charges.
Pressure [MPa]
Time [ms]
0 	2 	4 	6 	8 	10 	12
0
1
2
3
4
5
6
casing effects considered
casing effects not considered
Ambient air pressure level
Pressure
Time
positive phase 	negative phase
a) 	b)
Figure 3.2 	a) Idealised blast wave profile at a certain stand-off, and b) estimated
blast load profiles from a 250 kg GP-bomb of 50 weight-percent TNT at
a stand-off 5 metres, with and without casing effects considered.
Since the blast wave is reflected as it strikes the target, the magnitude of the pressure
in the resulting load is higher than in the incident blast wave. As stated above, the
resulting pressure acting on the target may be as much as 20 times higher than the
incident pressure. The general shape of the blast wave profile is negligibly affected by
the reflection and the duration of the positive and negative phases is generally
assumed to be unaffected; Krauthammer (2006) and U.S. Army (1992). However, in
design with regard to explosions, the negative phase is generally considered less
important 	than 	the 	positive 	phase; 	thus, 	often 	only 	the 	latter 	is 	taken 	into
consideration. The duration of the positive phase depends on the type and amount of
explosive and the stand-off but is often in the range of a few to tens of milliseconds.
Figure 3.2b shows the idealised reflected loads from the blast wave on a perpendicular
wall at a stand-off of five metres caused by a 250 kg General Purpose (GP) bomb of
50 weight-percent trinitrotoluene (TNT). The bomb is a fictive bomb referenced in the
Swedish design manual for civil defence shelters; see e.g. Räddningsverket (1994),
MSB (2011) and Leppänen (2012). The load caused by the blast wave is shown for
two different assumptions; 1) the energy consumed to fracture the casing and
imposing the velocity on the fragments is not considered, and 2) the weight of the
explosive filling is reduced to take into account the reduced energy available to form a
blast wave after imposing kinetic energy to the fragments. The former case is equal to
neglecting the effect of the casing on the blast wave assuming a bare detonation of the
TNT. In the latter case, the casing effect is considered to some extent but the energy
consumed while breaking up the casing to form fragments is still neglected. The
calculation of loads and the assumptions made are presented in Leppänen (2012).

-- 37 of 107 --

CHALMERS, Civil and Environmental Engineering	22
3.2.2 	Fragment load
While the blast load generally can be estimated with sufficient accuracy as a pressure-
time relation, the fragment loading is much more difficult to characterise. The
fragmentation process of casings is very complex and dependent on the example at
hand. Hence, unless a very large number of test results are compiled and analysed
generic empirical expressions for fragment characteristics cannot be developed in the
same way as for bare explosions in free air. Instead analytical methods, where the
exploding items are assumed to be cylindrical cased charges, are derived and
confirmed by test data. Through this method, the expressions used to characterise the
fragments apply in particular to cylindrical items and to items that may be reasonably
approximated as either cylindrical or series of cylindrical items. The more the shape
of 	the 	exploding 	object 	deviates 	from 	this, 	the 	less 	accurate 	the 	fragment
characterisation estimations. The expressions give estimations of the fragment mass
and size distribution, their initial velocities and how these velocities reduce as a
function of the increasing stand-off distance. However, these characteristics cannot
directly be used to characterise the load. Assumptions must still be made about e.g.
the shape of the fragments and their spatial distribution.
Further, since fragments impacting a structure do not only cause a pressure on the
surface of the structure, but also penetrate into the structure to cause local damage, the
character of the load also depends on the material properties of the exposed structure
and its ability to withstand this penetration and stop fragments. The faster a fragment
is stopped, the shorter is the load duration caused by its impact; generally, load
durations caused by fragment impacts are in the range of fractions of milliseconds.
Also, since the damage and failure modes differ for different fragment load scenarios
the definition of the fragment loading has to be made using a worst-case scenario.
Thus, it might be necessary to consider both the load effect of a large single fragment,
producing a severe local damage, and a fragment cluster, producing a more uniform
damage distribution on the structure, while also resulting in a greater impulse.
In conclusion, due to the great complexity the characterisation of a load caused by
fragments is difficult. However, by the use of assumptions unifying the fragment
characteristics and empirical relations, pressure-time relations from fragment loading
caused by the fictive 250 kg GP-bomb, referred to in Section 3.2.1, are derived; see
Figure 3.3. The fragment loading is assumed to derive from relatively small fragments
uniformly distributed over the exposed structure; other assumptions and the derivation
of the load are presented in Leppänen (2012).

-- 38 of 107 --

CHALMERS, Civil and Environmental Engineering 	23
Pressure [MPa]
Time [ms]
0 	2 	4 	6 	8 	10 	12
0
5
10
15
20
25
fragment impact load
blast (effect of casing considered)
Figure 3.3 	Estimated 	loading 	from 	uniformly 	distributed 	idealised 	fragment
impacts (cluster) together with the estimated blast load profile from a
250 kg GP-bomb of 50 weight-percent TNT at a stand-off 5 meters.
3.2.3 	Combined loading
The combined loading of blast and fragments means that the loads characterised in
Sections 3.2.1 and 3.2.2, respectively, are superimposed. Thus, the exposed structure
will be subjected to impulse loading from the blast load and impulse and impact
loading from the fragments. Despite the high complexity involved in blast and
fragment loading, some general conclusions may be drawn:
 	Blast wave and fragment impact loading are dynamic loads characterised by
their fast transient and high magnitude nature.
 	Peak-load amplitude and load duration of both blast and fragment loading are
dependent on the properties of the exploding charge and its casing. While the
load amplitude decreases for both types of loading, the duration of the blast
loading increases and the duration of the fragment loading decreases with
increasing stand-off.
 	The durations of the loads are in the range of fractions of milliseconds for
fragments to tens of milliseconds for blast loads causing high strain rates on
exposed structures.
 	The 	initial 	speed 	of 	propagation 	of 	the 	blast 	and 	fragment 	are 	highly
dependent on the type and amount of explosive filling, as well as the thickness
and material properties of the casing.
 	The relative difference in the time of arrival for the loads is dependent on the
initial speed of propagation of the blast and fragments, in addition to the stand-
off. The blast wave front has higher initial velocity than the fragments but a
more pronounced deceleration as it propagates in the air. Thus, at a close range
(within a few meters), the blast load will strike the structure before the
fragments, and vice versa.
The response of the exposed structure is highly influenced by the load characteristics
and in case of combined loading, the different striking time for the blast and

-- 39 of 107 --

CHALMERS, Civil and Environmental Engineering	24
fragments may also be important. The combined blast and fragment loading from the
250 kg GP-bomb referred to in Sections 3.2.1 and 3.2.2 is shown in Figure 3.3. In this
case, the fragment cluster arrives before the blast wave front; thus, the damage caused
by the fragment impacts may weaken the structure and greatly influence the response
because of the blast load. The effects on the structural response in the event of the
combined loading of blast and fragment on reinforced concrete structures are further
treated in the enclosed Paper II and Section 3.3.5.
3.3 	Load effect on reinforced concrete structures
3.3.1 	General
The response of reinforced concrete structures subjected to blast and/or fragment
loading may be divided into global and local responses. A global response refers to
the overall response of the structure and a global failure means that the structure is
unable to withstand further loading. Since the duration of blast and fragment loading
is in the range of fractions to tens of milliseconds, which is low in relation to the
global structural response period, the structure may be too inert for global response.
As the response is constrained to a limited part of the structure, the response is
referred to as local. Even though its global response may be highly affected by local
failure, the structure may still exhibit load-bearing capacity. However, global and
local responses may be defined at different scales; see Figure 3.4. The work presented
in this thesis is limited to structures of low complexity and rather represent structural
members than entire structures. Thus, global response refers to the global response of
a structural member and not to the global response of an entire structure. Similarly,
local response refers to the local response of a structural member and not to the local
response of an entire structure.
global response of
structural member
local response of
structural member
global response of structure
initial state, time t0 	time t1 > t0 	time t2 >> t1
local response
of structure	=
Figure 3.4 	Definition of global and local response at different scales of view.
The size of the zone involved in the response is mostly depending on peak load
amplitude, rate of loading, area of impact, and the ratio of masses involved in an
interaction; Gebbeken et al. (2001). In general, blast loading at stand-offs large
enough for the load to be considered uniform over the structure will cause a global
response. As the stand-off decreases the load becomes more concentrated causing a
more localised response. A fragment impact has a local effect on the structure but may
also cause global response, especially in case of uniform fragment cluster impact.

-- 40 of 107 --

CHALMERS, Civil and Environmental Engineering 	25
3.3.2 	Modes of failure
Global failure modes of reinforced concrete structures known from static loading are
common also in case of high transient loading. These modes can be generalised to
flexural and shear failure, including one or more failure mechanisms in concrete and
reinforcement; see Figure 3.5. Flexural failure occurs due to concrete crushing or after
the formation of plastic hinges where reinforcement yields and may fracture. Failure
may also occur when in-plane deformations are large enough to make the structure
slip off its supports. On the other hand, if supports provide sufficient strength and
stiffness to resist in-plane displacement of the edges, the load-carrying capacity of the
structure may be significantly increased due to membrane action (catenary action). In
dynamic loading where inertia effects become significant, membrane action may be
activated even for simply supported structures. Shear failure can, as in the case of
static loading, occur due to inclined shear cracks related to flexural behaviour; hence
such shear failure must be taken into account also in case of severe dynamic loading.
However, direct or dynamic shear response is typical of short-duration dynamic loads
and is caused by high shear inertia forces, which do not exist under static or low
dynamic loading; see ASCE (1999). The direct shear is a local response localised to
zones of geometric or load discontinuity but since it affects the overall behaviour of
the structural element, it is here still related to global response. This failure occurs
early in the structural response before any significant bending deformation takes
place, and is therefore not associated with flexure. The phenomenon of direct shear
and its emergence are well described by such authors as Krauthammer (2006).
Flexural failure modes 	Shearing failure modes
concrete crushing
plastic hinge
(reinforcement yielding and rupture)
support slipping
shear
direct shear
Figure 3.5 	Common global failure modes under high dynamic loading of concrete
structures.
Close-in detonations may cause propagation of pressure waves in the exposed
structure strong enough to cause localised cratering due to the crushing of the front-
face concrete and is often referred to as spalling or cratering. As the pressure wave
propagates into the concrete, it loses amplitude and energy, limiting the depth of the
crater. When the pressure wave reaches the rear face of the structure, it is reflected as
a tensile wave on the condition that the bordering medium is of lower impedance.

-- 41 of 107 --

CHALMERS, Civil and Environmental Engineering	26
This tensile wave may cause failure in the rear face region, resulting in a rear face
crater, i.e. scabbing. If the front face crater and scabbing zone were merged, the cross-
section is breached; see Figure 3.6a.
In case of fragment or projectile loading, the impacting body penetrates the concrete,
resulting in crushing the concrete and crater formation, i.e. spalling. In the same way
as for close-in detonations, the pressure wave propagating into the structure may also
cause scabbing at the rear after having been reflected as a tensile wave at the rear face
medium intersection. The depth of penetration of the fragment/projectile depends on
its characteristics and the material properties of the target. When the depth of
penetration is major in relation to the structure element thickness, plugging may
occur. Plugging is the formation of a cone-like crack in front of the penetrator and the
potential subsequent punching-sear plug; see Li et al. (2005). If the impacting body
were to travel through the structural element, perforation occurs; see Figure 3.6b.
Close-in explosion 	Fragment or projectile impact
spalling
scabbing
spalling
scabbing
crater formations 	breaching 	penetration with
crater formations
perforation 	perforation with
plugging
a) 	b)
Figure 3.6 	Common 	local 	failure 	modes 	of 	concrete 	in 	case 	of 	a) 	close-in
explosion, and b) fragment or projectile impact.
3.3.3 	Effect of reinforcement
With regard to global response, the effect of reinforcement is crucial for the energy-
absorbing capacity of a concrete structural element, and thereby also its capacity to
withstand blast and fragment loading and avoiding structural collapse. A properly
reinforced concrete structure ought to have a ductile behaviour.
Local damage does not in general lead to structural failure, and a certain level of local
damage is often allowed to occur. However, the damage must still be limited. With
close-in blast loading and fragment or projectile impact, where spalling occurs on the
front face and possible scabbing craters form at the rear face, the presence of
reinforcement bars may limit the damage since they help holding the concrete in
place. This is especially true in the case of scabbing, where the amount and placement
of reinforcement are highly critical parameters; see Leppänen (2004). With projectile
and fragment impacts, the penetrating body may strike the reinforcement, leading to a

-- 42 of 107 --

CHALMERS, Civil and Environmental Engineering 	27
decreased depth of penetration and damage of the reinforcement bar and surrounding
concrete. The impact on the reinforcement may also lead to local steel rupture, as well
as reduced bond between the reinforcement and the concrete further away from the
impact point because of vibrations.
A numerical study of how the projectile impact resistance of concrete was affected by
the presence of reinforcement and reinforcement detailing was conducted within the
scope of the work presented in this thesis; see Nyström and Leppänen (2006).
Numerical simulations of projectile impact on reinforced and plain concrete cylinders
were carried out where the amount, spacing and dimensions of the reinforcement were
varied; see Figure 3.7 and Figure 3.8. It was shown that reinforcement may influence
both the depth of penetration and the front-face crater size, and that these effects
decreased with a decreasing amount of reinforcement in the damage zone. The
increase in impact resistance is plausibly explained by increased confinement effects
from 	the 	reinforcement. 	Since 	the 	damage 	caused 	by 	a 	projectile 	is 	local,
reinforcement bars located further away from the impact area will not influence
impact 	response. 	This 	seems 	logical 	since 	the 	confinement 	effects 	of 	the
reinforcement decrease with increasing distance between the projectile path and the
reinforcement bar. However, the increased impact resistance due to reinforcement (if
a direct hit were disregarded) requires optimised reinforcement detailing. Regarding
the global response, the amount and placement of the reinforcement will still be
crucial for the load-bearing capacity.
Figure 3.7 	Schematic illustration of the numerical model for one of the reinforced
concrete cylinders used in the study.
Reinforcement rings
Projectile

-- 43 of 107 --

CHALMERS, Civil and Environmental Engineering	28
a)
b)
Figure 3.8 	Simulation results in the case of a) plain concrete and b) reinforced
concrete (4 x 7 reinforcement rings). Black indicates fully damaged
concrete and white undamaged concrete.
3.3.4 	Effect of steel fibres in concrete on local response
The addition of steel fibres in the concrete has been shown to improve the mechanical
properties; Löfgren (2005). According to ACI 544 (1996), the most significant
properties of steel-fibre reinforced concrete, compared to plain concrete, are its
improved ability to absorb energy, impact resistance and flexural fatigue endurance.
However, there are various factors influencing the behaviour of the fibre-reinforced
concrete and, consequently, also the degree of improvement, e.g. concrete matrix
quality, fibre type (material properties and geometry), bonding between the fibres and
concrete matrix, in addition to distribution, orientation and concentration of fibres; see
Zollo (1997).
Several experimental studies of the effect of fibres on concrete target impact
resistance have been presented, e.g. Ong et al. (1999) and Nataraja et al. (2005). Since
the response depended on material factors as well as test conditions, the conclusions
drawn were often case sensitive and lack generality. Due to the limited possibilities to
654 mm
>580/2 mm
	580/2 mm
555 mm
480/2 mm

-- 44 of 107 --

CHALMERS, Civil and Environmental Engineering 	29
draw generic conclusions from such studies, a numerical study of the generic effect of
adding moderate dosages of steel fibres in concrete in case of projectile penetration
was conducted; see enclosed Paper I. It was concluded that the addition of moderate
dosages of steel fibres in concrete did not significantly influence the depth of
penetration of a striking projectile since this measure only decreased negligibly in the
simulations when the effect of fibres were taken into account. The size of both the
spalling and possible scabbing crater decreased considerably when steel fibres were
added into the concrete; see Figure 3.9. An increased amount of fibres only led to a
small reduction of the spalling crater, whereas the effect on the scabbing crater was
more significant – it decreased and in one case, it was even prevented.
Figure 3.9 	Simulation result for plain concrete and fibre-reinforced concrete with
volume fractions of 0.2, 0.5 and 0.75%. Projectile impact velocity of
485 m/s. Red indicates fully damaged and blue undamaged concrete.
3.3.5 	Effects of combined loading
Combined blast and fragment loading are known to produce a synergetic effect in that
the combined loading results in damage greater than the sum of the damage caused by
each load treated separately. This effect has been observed in numerous experiments,
see Marchand et al. (1989, 1992) and Girhammar (1990). However, the complex
nature of the loading and response, and variations in experimental set-ups and
documented test results makes it difficult to draw general conclusions about the
phenomena involved from these experiments.
The enclosed Paper II presents a numerical study of the synergetic effects connected
with blast and fragment loading. Since complexity makes it difficult to interpret
results, the loads and structure used in the numerical study was of purely academic
character and did not represent an existing case in reality. However, both the
definition of the structure and loads were based on the requirements of physical
protection 	against 	conventional 	weapons 	for 	civil-defence 	shelters 	in 	Sweden
Volume fraction 0.75%
Volume fraction 0.2%
Volume fraction 0.5%
1000 mm
Plain concrete
0
800 mm

-- 45 of 107 --

CHALMERS, Civil and Environmental Engineering	30
according to MSB (2011). The numerical models used correspond to a reinforced
concrete structure subjected to three different load conditions; blast load, fragment
cluster impacts, and a combination of these two. In case of combined loading, the
blast wave front and fragments were assumed to strike the structure simultaneously.
Figure 3.10 shows the response of the structure at a time of maximal deflection for the
three different loading cases. In case of blast loading (Figure 3.10a), the response was
characterised by damage localised to a relatively low number of flexural cracks, even
though the initiation of flexural cracks had occurred relatively densely along the rear
face. In case of fragment loading (Figure 3.10b), besides the formation of flexural
cracks, 	spalling 	cratering 	and 	scabbing 	crack 	formation 	occurred; 	see 	also
Figure 3.11. The cracks indicated as initial flexural cracks in Figure 3.11 were formed
prior to other flexural cracks. Since the spalling craters, the scabbing cracks and the
initial flexural cracks were formed early in the response during the initial phase of the
global deflection, the flexural behaviour and damage pattern were highly influenced
and a large number of flexural cracks was formed. In the case of combined loading
(Figure 3.10c), the response was highly influenced by fragment impacts and the
overall damage was very similar to that achieved during fragment loading alone,
albeit more severe. It was also concluded that the maximal mid-point deflection in
case of combined loading was larger than the sum of mid-point deflections for blast
and fragment loading treated separately; the superposition of the deflections is not
applicable which indicates a synergy effect in combined loading. The large difference
of top surface deformations observable in Figure 3.10b and c, may be a consequence
of the concrete being held in place by the blast load.
Figure 3.10 	Response of reinforced concrete structure exposed to a) blast loading,
b) fragment impacts and c) combined blast and fragment loading.
b)
c)
Damage
1.0
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
0.0
a)

-- 46 of 107 --

CHALMERS, Civil and Environmental Engineering 	31
Figure 3.11 	Clarification of damage modes shown for early stage response to
fragment loading.
spalling crater
scabbing cracks	flexural cracks	initial flexural cracks

-- 47 of 107 --

CHALMERS, Civil and Environmental Engineering	32
4 	Dynamic aspects of wave propagation
4.1 	General
Blast and fragment loadings are related to high strain rates in the exposed structure,
which due to inertia and wave propagation effects may greatly influence the response
both along material and structural scales. Figure 4.1 shows a categorisation of
different problem aspects related to strain rates in the loaded structure. The figure is
based on data from different publications: Bischoff and Perry (1991), Field et
al. (2004), Gebbeken and Ruppert (2000), Ramesh (2008), and Zukas (2004).
In the discipline of mechanics, ‘statics’ refers to physical systems in static equilibrium
where the state (e.g. load and deformation) is time independent and therefore constant.
However, for many solids exposed to long-term loads creep and stress relaxation are
known phenomena that affect the state of the system and make it time dependent.
Quasi-static loading refers to conditions where the loading is performed at a rate fast
enough not to produce effects of creep and relaxation but slow enough for dynamic
effects to be negligible. For higher strain rates, the dynamic effect of inertia can no
longer be ignored and the effects of structural dynamics such as vibrations may be of
great concern. As the strain rate increases further, the effect of wave propagation
becomes a problem i.e. assumptions from static and low dynamic mechanics may no
longer be enough to describe the behaviour. It is important to note that there are no
distinct borders between the different aspects, but rather overlapping zones where
both views must be considered.
The strain rate in a structure exposed to transient loading is a function of time, and
strain rates below peak strain rate will develop if sufficiently long time scales are
considered. In case of impact and contact detonation, the peak strain rate may be as
high as 10 6 s -1 and 10 8 s -1 , respectively; Ramesh (2008) and Gebbeken and Ruppert
(2000). However, the strain rate decreases and most of the deformation takes place at
lower strain rates. In case of blast loading, the peak strain rate is generally lower.
Thus, even though the strain rate in a structure exposed to blast and fragment loading
may be lower on a longer time scale, it is often related to strain rates in the range of 1
and 10 6 s -1 , with most of the damage occurring in the lower range.
Wave propagation	Structural dynamics	Quasi-static	Creep and stress
relaxation
sss 	cc 	Wave pproo	ynnam	mics
Intermediate
strain rates
High
strain rates
Very high
strain rates
Ultra high
strain rates
0 	10 -8 	10-6 	10-4 	10-2 	100 	102 	104 	10 6 	10 8
Strain rate [s-1 ]
Blast and impact
Figure 4.1 	Strain rates and associated problem aspects.

-- 48 of 107 --

CHALMERS, Civil and Environmental Engineering 	33
4.2 	Inertia and wave propagation effects
In fact, wave propagation in the material occurs for all strain rates since information
on the applied load is transported through the material by stress waves. These waves
propagate with the local speed of sound, which in concrete is about 3 500 m/s. In the
case of quasi-static loading, the duration of the load is long compared to the time it
takes for multiple wave reflections throughout the structure to take place; see
Figure 4.2a. This means that the waves and their propagation do not have to be
explicitly considered in this case. For shorter load durations, causing strain rates in the
intermediate to high strain-rate regime, induced waves may not have the time to reach
all parts of the structure before deformation is initiated in areas close to the applied
load resulting in a different structural response than in the corresponding quasi-static
case. This means that even though it remains a structural dynamic problem, wave
propagation influences the response the effects of which might become important. In
the very high and ultra-high strain-rate regimes, the loading may be so fast that most
deformation takes place before the waves have reached other parts of the structure
causing highly localized damage; see Figure 4.2b, where the ball impacts the beam at
a high velocity. These high-rate phenomena are to be considered wave propagation
problems and structural dynamics may be of secondary interest.
a) 	b)
Figure 4.2 	Schematic illustration of wave propagation and associated structural
response for a) quasi-static loading and b) very high strain rate
loading.
At a material scale, the highest strain rate-regimes lead to conditions closer to uniaxial
strain rather than uniaxial stress since the material does not have the time to deform
laterally, i.e. producing an inertial effect. This means that for high strain rates, the
lateral stresses may be considerably high and a confining pressure may build up also
for uniaxial loads, which would produce a condition of uniaxial stress in the material
if the load came to be applied at a low rate. Since strain rates in the case of blast and
fragment loading may reach levels in the high and very high strain-rate regimes they
are related to very high confining pressures, thereby potentially exceeding material
uniaxial strength by several orders of magnitude; Zukas (2004). These high pressure
levels may hence cause severe damage and/or phase transformations in the material.
The stress waves propagating in a solid material may be elastic or plastic depending
on the magnitude of the load and material strength. However, due to high strain rates
and subsequent high pressure levels, plastic waves may transform into shock waves.
These shock waves constitute compressive stress waves with extremely short rise
times, propagating in the material and formed as a consequence of dispersion, an

-- 49 of 107 --

CHALMERS, Civil and Environmental Engineering	34
effect arising in media with nonlinear compressive behaviour and further described in
Section 4.3.2. Shock waves are likely to develop in materials with strain rate levels of
above 10 5 s -1 ; Haddad (2000).
4.3 	Shock waves
4.3.1 	Introduction
A shock wave is by definition a compressing disturbance propagating in a medium
faster than the speed of sound at ambient conditions. Further, it is characterised by its
abrupt, nearly discontinuous, change in material characteristics: density, pressure and
temperature. Due to this abruptness, the change of state is a non-equilibrium
thermodynamic process which may highly influence the state reached after the shock
transition. In Figure 4.3, a shock disturbance propagating into a stationary medium
featuring pressure p0 , density ρ0 , and specific internal energy e0 is schematically
shown. The disturbance is travelling at a speed Us which is higher than the speed of
the piston, Up , causing the disturbance. Behind the shock, the material reaches a new
thermodynamic material state featuring pressure p, density ρ, and specific internal
energy e. The material behind the shock disturbance also gains a particle velocity, up
(which is equal to the velocity Up of the piston), and the material is travelling in the
same direction as the shock disturbance.
p 	ρ 	e
Up 	Us
p0 ρ0 e0
u = up 	u = 0
Figure 4.3 	One-dimensional shock transition in medium imposed by piston.
The treatment of shock waves is not intended to be complete in this thesis, for the
reader interested in a comprehensive treatment of the subject, the literature by
Zel’dovich and Raizer (1966, 1967), Asay and Shahinpoor (1993), and Meyers (1994)
are recommended.
4.3.2 	Shock wave formation
As mentioned in Section 4.2, stress waves propagate in the material with the local
speed of sound, which is proportional to the adiabatic compaction modulus, i.e. the
inclination of the compaction curve. A nonlinear compaction curve, therefore, results
in waves which propagate at different speeds at different levels of pressures. Shock
waves are formed when faster components overtake earlier induced waves of lower
propagation speed; i.e. a dispersion effect. However, since the compressibility of
mediums is related to atomic and molecular interactions it is strongly dependent on

-- 50 of 107 --

CHALMERS, Civil and Environmental Engineering 	35
the characteristics of the medium. Fundamental distinctions can be made between the
compressive behaviour of gases, liquids and solids.
In general, the average distances between particles in gases are much greater than the
particle dimensions, and the interaction between the atoms (or molecules) takes place
mainly through collisions. Since temperature is related to the mean translational
kinetic energy of its constituent particles, the pressure in gases is of thermal origin. In
fluids and solids, however, the constituent particles are sufficiently close to cause
interactive forces. These forces are of dual character, attractive and repulsive. In the
absence of external pressure, the attractive and repulsive forces are in balance and the
constituent particles have a certain equilibrium distance. If the particles separate, the
attractive (binding) forces increase and when brought together, the particles repel each
other and the repulsive forces increase; Zel’dovich and Raizer (1967). Since these
repulsive 	forces 	rapidly 	increase 	as 	the 	atoms 	are 	brought 	together, 	the
compressibility decreases with increasing pressure, yielding a non-linear compaction
curve.
Even though the cohesive forces between atoms and molecules in liquids hold the
particles together, the temporary character of the bindings allows the particles to move
around each other, thereby allowing the medium to flow. Fluids in general exhibit
some resistance to flow, i.e. resisting shearing and tensile forces, which is a measure
of fluid viscosity. However, compared to solids, the shear resistance of fluids is
generally of negligible size. The binding forces between atoms and molecules in
solids are rigid and as long as bindings are intact flow is prevented. The shear strength
of a solid is thus depending on such factors as the interatomic and molecular type of
bonding which can be one or a mixture of covalent, ionic, metallic or van der Waals
bindings.
Thus, if viscosity is neglected, even though it is loaded in only one direction, the
pressure in fluids is equal in all directions. However, contradictory to fluids, solid
matter exhibit considerable shear strengths and a non-hydrostatic component of stress
may exist which affects the conditions for shock wave formation.
Figure 4.4 shows the effect of dispersion responsible for the shock wave formation in
the case of high rate uniaxial compressive loading from pressure p0 to p1 of an
idealised fluid. The increase of pressure leads to a change of specific volume, v, from
initial state v0 to final state v1 , where the specific volume is defined as v = 1 / ρ, and ρ
represents the density of the medium. From left to right the figure shows: the
pressure-time relation for the external load, the compaction curve of the medium in
the 	pressure-specific 	volume 	plane, 	and 	profiles 	of 	the 	compression 	waves
propagating in the medium at different times t and distances away from the external
load, respectively. The compression modulus K (which is proportional to the square of
the local sound speed c) is indicated as the tangent of the compaction curve for
different states. In the wave profiles, the speed of different wave components is
indicated by arrows. Initially, the compressive waves are propagated at the ambient
wave speed related to pressure p0 . As the pressure increases, the gradient and thus
propagation speed increases and waves are initiated that propagate faster than the
previously induced waves, leading to a superposition of slower wave packages by
faster ones. Thus, the gradual steepening of the initial simple compression-wave
profile leads to the formation of a shock wave. Due to the continuous decrease of
compressibility 	for 	increasing 	pressure 	levels 	in 	idealised 	fluids, 	all 	simple

-- 51 of 107 --

CHALMERS, Civil and Environmental Engineering	36
compression waves will steepen up to form a shock wave when the load is applied fast
enough for the later induced wave packages to catch up with the previous ones before
the wave has been damped, reflected or affected in other ways.
Pressure
Time
Pressure
Specific volume
Pressure
Distance
p1
p0
v0	
v1
t1 	t2 	t3
t1 < t2 < t3
shock wave	simple compression wave
Rayleigh line
K	
ρ
K
c =
Figure 4.4 	Schematic illustration of shock wave formation in idealised fluid; from
left 	to 	right: 	loading 	curve, 	compaction 	curve 	and 	wave 	front
steepening and subsequent shock front formation, partly based on
Hiermaier (2008)
The line referred to as a Rayleigh line in Figure 4.4 represents the process path in the
material state transition from the initial state during shock loading and is further
explained in Section 4.3.3. The incline of this line is related to the propagation speed
of the shock front in the same way as the compression modulus is related to the local
speed of sound, i.e. the more inclined, the faster the propagation.
Due to the strength of solids and their effect on the uniaxial strain compression curve,
the conditions of shock wave formation in this matter is different from that of an ideal
fluid. In Figure 4.5, the influence of strength on the compaction curve for a perfectly
elastic-plastic solid material (left) and the subsequent effect on shock wave formation
(right) are schematically shown. As seen in the compaction curve (where the axial and
volumetric stress components are shown), the influences of the deviatoric stress
component are:
 	The rate of stress with volume is higher in the elastic range, compared to
hydrostatic conditions.
 	When the elastic limit is reached (in shock loading called the Hugoniot Elastic
Limit (HEL)), the stress-strain curve shows a change in slope, i.e. the stiffness
is suddenly reduced.
 	The sudden stiffness reduction is followed by a continuous increase of
stiffness.
 	For low stresses the relative influence of the deviatoric strength on total stress
is considerably high, but decreases with increasing stress.

-- 52 of 107 --

CHALMERS, Civil and Environmental Engineering 	37
Thus, as opposed to fluids, solid materials exhibit considerable shear strengths and the
non-hydrostatic part of the stress state during uniaxial strain conditions must be
considered. However, for high pressure levels the rigidity of the atomic and molecular
bindings is reduced due to fractures, thereby limiting shear resistance. For very high
pressure levels, the deviation from isotropic compression may thus be small compared
to the pressure level and hydrodynamic treatment (assuming that the solid material
has no resistance to shear) may be applied also for solids; Meyers (1994).
One consequence of the deviatoric stress component and the HEL is that an elastic
precursor may be formed; for materials with a considerably high HEL, the wave may
consist of two discontinuities rather than one; see Figure 4.5. For pressure levels
below the HEL, elastic waves will propagate in the material at the speed of sound for
the initial state. Pressures above the HEL will cause the formation of a steep plastic
wave front, but since the elastic portion of the wave propagates faster, an elastic
precursor is formed. The shock wave will thus not only feature one steep front, but
rather two. For pressures exceeding a certain pressure (indicated as σ1 in Figure 4.5),
the speed of the plastic wave front will exceed the propagation speed of the elastic
portion and the plastic portion of the wave will overtake the elastic part, i.e. one steep
wave front is formed. The existence of an elastic precursor is often defined as the
difference between a weak and a strong shock wave.
Compressive stress 	Pressure
strong shock wave
weak shock wave
elastic wave
plastic wave front
elastic precursor
Rayleigh lines 	shock wave with
elastic precursor
(weak shock wave)
shock wave without
elastic precursor
(strong shock wave)
hydrostatic stress
component
axial stress
σHEL
σ1
Specific volume
Figure 4.5 	Schematic effect of shear strength on compaction curve and shock wave
fronts in solid matter.
However, the variation of material characteristics in solid materials is large and the
compression 	curve 	may 	show 	great 	complexity 	and 	differ 	from 	the 	idealised
behaviour shown in Figure 4.5. For concrete and similar materials with inherent
brittleness and porosity, there is a pressure range above the HEL across which the
gradient of the compression curve does not increase and it may even decrease; see
Figure 4.6. If the magnitude of the load is within this range (σHEL < σ < σ2 in
Figure 4.6), a shock wave will not form since the speed of the wave portions induced
at lower pressure levels will propagate at the same speed (or even faster) than the
wave portions induced at higher pressure levels. Instead, a simple elastic-plastic wave
will propagate.

-- 53 of 107 --

CHALMERS, Civil and Environmental Engineering	38
Compressive stress
elastic wave
Rayleigh line 	shock wave with
elastic precursor
(weak shock wave)
shock wave without
elastic precursor
(strong shock wave)
axial stress
σ2
σHEL
elastic-plastic wave
Specific volume
Figure 4.6 	Conditions for shock wave formation in brittle porous solid.
4.3.3 	Shock transition – a thermodynamic processes
As is the case involving all other state changes, shock transition is a thermodynamic
process, i.e. a change in the thermodynamic state of the material due to a change of
energy within the system, i.e. due to the flow of mass, heat transfer and/or
performance of work. A thermodynamic state can be specified by state variables;
properties that only depend on the current state and not the path to get there. Typically
used state variables include pressure, volume, and temperature. However, volume and
temperature are sometimes replaced by density and internal energy (or entropy),
respectively, since these properties are related. Thermodynamic processes can be
characterised by the constancy of a particular state variable such as pressure (isobaric
process), volume (isometric process), temperature (isothermal process), entropy
(isentropic process) or enthalpy (isenthalpic process). For shock transition, however,
the 	process 	is 	only 	characterized 	by 	the 	existence 	of 	a 	shock 	wave 	and 	no
thermodynamic state variables remain constant. Instead, the shock transition may be
considered as adiabatic irreversible thermodynamic process:
 	Adiabatic because the loading time for shocks is short in relation to the inertial
material response, and the heat transfer is therefore kept minimal.
 	Irreversible since the process involves dissipation of energy (i.e. a generation
of entropy).
Thus, even though the passage of the wave may be considered adiabatic (no transfer
of heat from or into the system), the transition is non-isentropic (part of the work
applied to the system is converted into thermal energy) and the temperature increases.
The increased temperature during shock transition is sometimes referred to as shock
heating. However, as stated above, this heating is not attributed to a heat exchange
between the shocked material and the surrounding but is rather a consequence of
energy dissipation effects within the material as it is compressed.
All thermodynamic equilibrium states reachable by a medium are represented by a
three-dimensional surface, including the phase transformations schematically shown

-- 54 of 107 --

CHALMERS, Civil and Environmental Engineering 	39
in 	Figure 4.7 	(left). 	Thermodynamic 	processes 	are 	then 	represented 	as 	curves
connecting the initial and final states of these transitions. Even though thermodynamic
states are defined by at least three state variables, e.g. pressure, volume and
temperature, 	thermodynamic 	processes 	are 	often 	graphically 	presented 	in 	two-
dimensional pressure-volume graphs. Such graphs project three-dimensional curves
representing the paths followed during the processes on the pressure-volume plane;
see Figure 4.7 (right). The areas beneath the curves in the pressure-volume plane
represent energies related to work performed during the process.
Temperature
	Volume
Pressure
Volume
Pressure
solid
gas
solid-vapor
solid-liquid
liquid-
vapor
liquid
Volume
Pressure
considering only solid
states
1
2
3
0
Rayleigh line
process paths
Temperature
vapor
Figure 4.7 	Thermodynamic equilibrium surface (left) and equilibriums surface in
solid states with process paths from initial state (0) to final states (1),
(2) and (3) (middle), and projection of the process paths on pressure-
volume plane (right), partly based on Çengel and Boles (2006).
In quasi-static loading, the process is assumed to be slow enough to prevent
inhomogeneity (e.g. temperature and pressure gradients) within the system. Thus, the
states between the initial and final states are assumed to be in thermodynamic
equilibrium, i.e. the path followed during the thermodynamic transition is on the
equilibrium surface. Since the process is slow, heat caused by energy-dissipation
mechanisms has the time to flow to the surroundings if this is not prevented, thereby
causing an isothermal process (indicated by curve 01 in Figure 4.7). If this heat flow
would be prevented, the temperature would increase. Thus, since the process is still
slow, the process path would lie on the equilibrium surface, but since it has a higher
temperature for the same volume than the isothermal process state, the pressure would
be higher in this case; see curve 02 in Figure 4.7.
However, 	in 	dynamic 	processes 	the 	transitions 	are 	fast 	enough 	to 	cause
inhomogeneity in the system, i.e. the system is not in thermodynamic equilibrium
during the entire process, representing a non-equilibrium process. The representation
of the process path between the initial and final states is, therefore, not well defined.
In the case of shock wave loading, a thermodynamic equilibrium is achieved only at
the initial and final states (state 0 and 3 in Figure 4.7), and the process is often
represented by a straight (in Figure 4.7 dashed) line, referred to as the Rayleigh line.

-- 55 of 107 --

CHALMERS, Civil and Environmental Engineering	40
Considering state transitions due to the shocks from different pressure magnitudes,
from an initial state (p0 ,vo ,T0 ) in a material, the Hugoniot curve (also referenced as the
Rankine-Hugoniot curve, or simply the Hugoniot) appears. Thus, the Hugoniot curve
is the locus of all states (p,v,e) which may be obtained through the shock transition of
a material from a given initial state (p0 ,v0 ,e0). It is important to note that the Hugoniot
curve does not represent the path of states through which material progresses when
transitioning from the initial state (p0 ,v0 ,e0) to the final state (p,v,e). Such a path, as
mentioned above, is instead represented by the Rayleigh line. The meaning of the
Hugoniot curve and the Rayleigh line is schematically shown in Figure 4.8.
Hugoniot curve
Rayleigh lines
Specific volume
(p0
,v0
,T0
)
Pressure
Time
Pressure
Figure 4.8 	Schematic illustration of the Hugoniot curve and Rayleigh lines (left)
and associated load curves (right).
4.3.4 	Rankine-Hugoniot jump conditions
The conservation equations of mass, momentum and energy may be used to express
relations between the state variables of the initial and final states of a thermodynamic
process. In the event of a discontinuous transition between two states, as in a shock
transition, these equations are called the Rankine-Hugoniot jump conditions, relating
the state variables ahead of a shock front with the once behind it. The Rankine-
Hugoniot jump conditions are often expressed as in equations (4.1) to (4.3); variables
are described in Section 4.3.1.
Conservation of mass: 	 		p	u	U	U 		 	s	s	0	
	
 	(4.1)
Conservation of momentum: 	p	u	U	p	p 	s	o	0	
		 	(4.2)
Conservation of energy:  	

	
p	p	u	U	U
e	e p 	

		
0
0
2
s
2
s
0 2	2 (4.3)

-- 56 of 107 --

CHALMERS, Civil and Environmental Engineering 	41
If equations (4.1) to (4.3) were combined, the Hugoniot equation may be derived. This
equation is a version of the energy equation, i.e. equation (4.3) above, but is free from
any velocity terms and represents the relationship between the thermodynamic state
variables alone. The Hugoniot equation is:
 	 	 	 		v	v	p	p	p	p	e	e 			




 			 	0	0
0
0	0 2
1	1	1
2
1

	 (4.4)
However, the above equations are independent of material and in order to quantify the
change of state variables during the transition, characteristic material descriptions
have to be known.
With a graphical representation of the Hugoniot equation, the change in specific
internal energy (e - e0 ) is represented by the area beneath the Rayleigh line; see
Figure 4.9. The change in specific kinetic energy is represented by the triangular area
above the Rayleigh line. If the effect of the initial pressure p0 can be neglected, the
change in specific internal energy equals the change in specific kinetic energy.
Hugoniot curve
Rayleigh line
Specific volume
(p0
,v0 ,e0 )
Pressure
(p,v,e)
change in
internal energy
change in
kinetic energy
Figure 4.9 	Graphical representation of the change in internal energy and kinetic
energy in shock transition.
4.3.5 	Release from shocked state
The release from a shocked state can be assumed to be isentropic, i.e. the decrease of
temperature will be less than the increase during the shock transition. For a medium
which does not undergo plastic compaction, the material state upon release back to
initial pressure will be characterised by a higher temperature and thus a larger volume
(dilation) due to thermal expansion, compared to the initial state; see Figure 4.10. For
solids which undergo severe plastic compaction during the shock transition, thermal
expansion and plastic compaction counteract each other. According to Boslough and
Asay (1993), if the strains are considered minor, the release isentrope may be
approximated by the Hugoniot curve of the initial state. Since the strains are large and
irreversible, this is, however, not applicable in the case of plastic compaction.

-- 57 of 107 --

CHALMERS, Civil and Environmental Engineering	42
It is also worth pointing out that since wave components corresponding to higher
pressures will travel faster than those of lower pressures, release waves can never take
on the characteristics of a shock wave .
Temperature
Volume
Pressure
Volume
Pressure
Rayleigh line
release path
Hugoniot curve
Rayleigh line
release path
Hugoniot
Pressure
Volume	dilation
Figure 4.10 	Schematic illustration of release path from shocked state, and the effect
of dilation due to shock heating.

-- 58 of 107 --

CHALMERS, Civil and Environmental Engineering 	43
5 	Numerical modelling at high dynamic loading
5.1 	Introduction
Numerical simulations of high dynamic phenomena such as blast and fragment
loading 	of 	structures, 	grow 	more 	common 	and 	nowadays 	constitute 	important
additions to physical testing. The use of numerical approaches is, among other things,
motivated by the opportunity to reduce the cost of parameter studies, which are
important to increase the understanding of the behaviour and phenomena involved.
Another advantage motivating the use of numerical simulations to study the effects of
high dynamic loading is the opportunity to monitor the response through the process,
which is limited in the case of testing.
As stated in Chapters 2 to 4, blast and fragment loading is related to short loading
durations resulting in wave propagation effects, high stress levels, large strains, and
nonlinear material behaviour. These phenomena place additional demands on the
solver techniques used in numerical simulations.
A group of numerical tools used for simulations of phenomena involving high
pressures caused by shock or impact is the so-called hydrocodes, also referred to as
“wave 	propagation 	codes”. 	The 	denotation 	“hydrocode” 	originates 	from
“hydrodynamic computer code” which may be explained by the fact that in the early
states of these codes, only hydrodynamic material behaviour was assumed, i.e. the
material of matter was assumed to behave as a fluid with no viscosity, thus, no
resistance to shear forces. Under this assumption, the response of a material can be
described by means of the conservation equations of mass, momentum and energy
together with an “Equation of State” for the material. Later, in the development of the
hydrocodes, the possibility of describing shear resistance of materials was included, to
account for the behaviour of solids at low and moderate stresses. This behaviour is
relevant also in the case of strong shock wave loading, e.g. in the field afar and
subsequently in the close field as well.
The general approach used in hydrocodes is, therefore, to separate the stresses and
strains into hydrostatic and deviatoric portions which tend to change the volume of the
element and to distort it, respectively. This means that for solids, the hydrostatic
behaviour is still described by an Equation of State and that an accompanying
constitutive model is necessary to describe the relation between deviatoric stresses
and strains. This constitutive model is sometimes referred to as the “strength model”.
Models describing the material behaviour in one constitutive model, i.e. without
splitting the stresses and strains into volumetric and deviatoric parts, are available in
some hydrocodes. In order to describe the plastic compaction caused by isotropic (i.e.
hydrostatic) compression, these models sometimes include a cap function, the effect
of which is to close the yield surface against the hydrostatic axis. Even though
theoretically possible, these models do not generally include thermal effects, as many
Equation of States do.

-- 59 of 107 --

CHALMERS, Civil and Environmental Engineering	44
5.2 	Solution techniques
5.2.1 	Numerical solution
In order to determine the distribution of stresses and strains in a structure, it is
necessary to solve a boundary value problem, defined by partial differential equations
derived from the conservation of mass, momentum, and energy, respectively, together
with a set of boundary conditions. Often these calculations are far too complex for
finding analytical solutions and instead numerical techniques are used to approximate
the solution. However, before any solution of the boundary value problem is sought,
the physical problem has to be idealised. This often includes:
 	limitation and idealisation of the geometrical domain,
 	idealisation of boundary conditions including for example loads, surface
contacts, symmetry planes and connections to other parts of the physical
domain, and
 	the idealisation of material behaviour to allow for mathematical descriptions
thereof, i.e. the formulation of constitutive laws for the material.
After the idealisation, the numerical solution is approached by establishing weak
forms of the differential equations and by discretisation of the idealised spatial
domain by a finite element, a finite difference or a finite volume method. This
discretisation arrives at a system of ordinary differential equations which may be
solved by numerical integration.
For static problems, the effects of dynamics are neglected and the forces of inertia and
damping, respectively, are set to zero. For dynamic problems, these effects must be
considered in order to produce accurate results and the solution becomes time
dependent demanding time integration methods.
For non-linear dynamic problems, direct time integration methods are required to
solve the boundary value problem. The direct integration methods are commonly
classified into two groups: implicit and explicit methods. Implicit methods are known
to yield high accuracy as equilibrium is imposed at each time step. In general, these
methods are also unconditionally stable, with no limits existing on the size of the time
step to fulfil the accuracy. However, these methods are costly for highly non-linear
problems since they require iterations to find this equilibrium and generally also
require that the inverse of the stiffness matrix is calculated for each such iteration. In
explicit time integration methods, on the other hand, it is assumed that if small enough
steps are taken, it is accurate enough to use the equilibrium from the last time step to
solve the current time step even though this means that no strict equilibrium is
imposed. Therefore this group of methods is conditionally stable, limiting the size of
the time step. Consequently, an exceedingly large number of time steps may be
necessary to achieve accurate results, but no iteration process is necessary to find the
equilibrium. Also, in contrast to the implicit method, the inverse of the mass matrix is
calculated instead of the inverse of the stiffness matrix. Therefore, an explicit time
integration method is commonly used to integrate the governing equations for
problems involving high geometrical and material non-linearity and short time
durations.

-- 60 of 107 --

CHALMERS, Civil and Environmental Engineering 	45
5.2.2 	Lagrange solver
Even though the average engineer probably associates numerical modelling of
structural responses with Lagrangian elements ‒ where the numerical mesh moves and
distorts along with the material, there are often several other solver techniques
available in hydrocodes. Among these techniques are Euler, ALE (Arbitrary Lagrange
Euler) and SPH (Smooth Particle Hydrodynamics). The most obvious difference
between the Lagrange and the other solver techniques mentioned is the rigid coupling
between the material and the numerical mesh. Contradictory to the Lagrange solver,
the numerical mesh in a Euler solver is fixed in space and the material moves in and
between the mesh elements; see Figure 5.1. The ALE technique can in a simplified
manner be said to use the Lagrange solver with continuous rezoning of the spatial
volume and the SPH is a mesh-free solver technique.
Figure 5.1 	The Lagrangian description (left) and the Eulerian description (right)
for material movement, from Leppänen (2004).
Only a brief description of the numerical techniques of Lagrange is provided since it
was used in the numerical studies presented in enclosed Papers I, II and IV. The
choice to use the Lagrange solver is in these cases based on e.g. the opportunity to
follow history dependent material behaviour.
However, for a Lagrange solver, distortion of the mesh may lead to inaccurate and
ineffective solutions. Since explicit time integration is used, the size of the time-step
must be limited in order to achieve stable solutions; see Section 5.2.1. The maximum
time-step allowed is often defined as a function of the minimum length of an element
or its equivalent. For a contracting element, the time-step decreases which may cause
extended computational time. In a Lagrangian mesh the positions, velocities, and
material accelerations for an element are defined at the element nodes situated in
element corners. Material quantities such as pressure, density, internal energy, stress
and strain deviators and temperature are, on the other hand, defined by centred
differencing 	at 	element-zone 	centres. 	Due 	to 	accuracy 	losses 	in 	the 	centred
differencing, an element with a high aspect ratio, i.e. a large difference in the length of
its sides, may lead to a loss of solution accuracy. To overcome these numerical
problems, rezoning or erosion algorithms may be used. Rezoning means that the
distorted mesh is remapped onto a new, more regular mesh. Erosion algorithms
normally remove elements if a pre-defined strain exceeds a specified limit.
A simplified illustration of the Lagrange computational cycle with explicit time
integration of the boundary value problem is shown in Figure 5.2. Each cycle starts

-- 61 of 107 --

CHALMERS, Civil and Environmental Engineering	46
with updating the boundary and/or interactive forces, which are then combined with
the internal forces calculated during the previous time cycle to estimate the nodal
forces. The nodal accelerations are then evaluated by use of the momentum equation
(i.e. equation of motion). Thus, the acceleration is calculated by means of the internal
force of the previous time step. Explicit time integration, generally the central
difference time integration or a modified version thereof, is used in hydrocodes to
calculate nodal velocities and displacements from the assumed nodal accelerations.
By direct calculation, element volume and strains (or strain rates) are calculated. One
or more constitutive laws, i.e. material models, are then used to calculate stresses in
the material. For nonlinear material behaviour, numerical integration is necessary for
the constitutive law (local level). The integration method used at the local level may,
however, be different from the method used for the boundary value problem (global
level). When the stresses have been calculated, the internal forces are updated by
using the momentum equation, these forces are to be used in the following time cycle.
Thus, equilibrium for the momentum equation is not imposed and it is assumed that
the solution is sufficiently accurate for minor time steps.
Nodal forces
Nodal accelerations
Nodal velocities
and displacements
Element volumes
and strains
Element stresses
Numerical integration
Direct calculation
Material model
Momentum equation	Momentum equation
Boundary and/or
interactive forces
Figure 5.2 	Lagrange computational cycle; based on AUTODYN (2005).
5.2.3 	Material modelling
Numerical 	solutions 	to 	boundary 	value 	problems 	in 	stress 	analyses 	require
mathematical descriptions of the material behaviour, often referred to as constitutive
laws or material models. Correct approximations of the material behaviour under the
applicable loading conditions are essential to ensure the quality of the numerical
representations of the real behaviour. Accordingly, the material models used for the
analyses must be accurate enough within the applicable loading conditions to capture
crucial phenomena in the material.

-- 62 of 107 --

CHALMERS, Civil and Environmental Engineering 	47
As mentioned in Section 5.1 a general approach to material modelling used in
hydrocodes is to divide the total stress tensor σ into a volumetric part δσv and a
deviatoric part s, respectively, as:
s	δ	σ 		 	V	
 	(5.1)
Two different constitutive laws are then used to describe the material behaviour; an
Equation of State and a strength model, describing the volumetric and deviatoric
behaviours, respectively. The Equation of State is thus a mathematical representation
of the thermodynamic equilibrium states that can be reached in a material. There are
many different forms of Equation of States proposed in the literature, which are
applicable in different situations. Generally they relate the thermodynamic state
variables of the material, i.e. the pressure p, density ρ (or specific volume v, or
compaction μ), and temperature T (or specific internal energy e). Heat conduction and
other effects that require the variable temperature is not always of interest nor relevant
to the analysis. The Equation of State is, therefore, often defined as a function of the
specific volume, or density, or compaction, and the specific internal energy;
)	,	(	or	),	,	(	or	),	,	( 	e	p	p	e	p	p	e	v	p	p	
	
 			 	(5.2)
in which
V	
			p 	(5.3)
and
1	and
1
0
		




v 	(5.4)
The forms of Equation of States shown in equation (5.2) are called incomplete, in
contrast to those involving the temperature. As stated in Section 4.3, the processes
involving shock transition are so fast that there is no time for heat conduction effects
to develop which is why incomplete Equation of States may be used in these
situations.
An Equation of State for a solid material is often too complex to be analytically
derived, at least for high pressures. Thus, it is common to construct the Equation of
State by means of an empirically determined Hugoniot curve, i.e. a reference
Hugoniot. Since the energy distribution within the experiment is unknown, it is
impossible to construct a full three-dimensional Equation of State empirically.
However, by using the conservation equation for energy, or the Hugoniot equation
(see Section 4.3.4) the change of internal energy may be implicitly considered, and a
Hugoniot curve in the three-dimensional thermodynamic space is achieved. An
assumption of the equilibrium states surrounding the determined Hugoniot curve
allows 	for 	a 	theoretical 	extension 	and 	the 	derivation 	of 	a 	three-dimensional
equilibrium surface. The Grüneisen parameter Γ (sometimes referred to as Grüneisen
gamma) provides such an extension used in e.g. the Mie-Grüneisen Equation of State:
   		ref	ref 	e	e	v	Γ	p	p 			
	 	(5.5)

-- 63 of 107 --

CHALMERS, Civil and Environmental Engineering	48
where pref is a reference curve for which the relation between the reference pressure
and the specific volume is given, i.e. pref = pref (v) and eref is an estimated value of the
internal energy at the initial state, i.e. eref = e(p0 ,v0,T0).
However, as stated in Section 4.3.2, the pressure in an idealised fluid is of pure
thermal origin while in a solid, it is mainly dependent on interatomic (or molecular)
forces. Thus, the variation of pressure in a fluid is described by the variation of
specific internal energy, while its contribution to the pressure in a solid does not
become considerable until higher pressure levels are reached. Thus, the Equation of
States for solids are sometimes reduced to p = p(v). Practically, the hydrostatic
behaviour of the material is given explicitly via the material input parameters and the
only variation from this behaviour may be if the hydrostatic pressure were assumed to
be a function of the temperature.
In general, there are several forms of Equations of States available in hydrocodes; the
suitable form differs according to different materials and phenomena. In Appendix A,
brief descriptions of the Linear, Polynomial, Mie-Grüneisen and P - α Equation of
States are given. The Polynomial and Mie-Grüneisen Equation of States are widely
used for the mathematical description of the volumetric behaviour of solids in high
dynamic loading. For porous materials where considerable plastic pore compaction
may occur, the general P - α Equation of State (Herrmann, 1969) is often used to take
into account the effects of the porosity.
For solid materials, where in contrast to fluids the shear strength is considerable, the
Equation of State has to be accomplished by a strength model. Such a model describes
the material resistance to distortion and thus the size of the deviatoric stress tensor s.
Commonly used theories in strength modelling include the plasticity and damage
mechanics or combinations thereof. A fundamental assumption in the classical theory
of plasticity is that plastic deformation is isometric, i.e. volume is preserved.
According to Khan and Huang (1995) and Lubliner (2008), this assumption was made
after experimental observations which established that even at exceedingly high
hydrostatic pressure, volume change is only reversible, thus indicating only elastic
volume change. Thus, following this theory, the yield surface should be open towards
the hydrostatic axis.
Nevertheless, since materials undergoing irreversible compaction do not fit under this
assumption, this is a subject of discussion. While plasticity is related to inelastic
deformation due to dislocation processes in the microscopic theory of materials, it
may be interpreted as any type of permanent deformation of the material in
macroscopic 	continuum 	mechanics. 	Thus, 	from 	a 	macroscopic 	point 	of 	view,
plasticity theory is applicable in describing irreversible volume changes and the yield
surface may be closed towards the hydrostatic axis. Accepting this point of view
would allow the volumetric behaviour to be described by moving the yield surface
along the hydrostatic axis, the approach in so-called cap models. In these models, the
total stress tensor is calculated by means of one constitutive model alone, and a cap is
used on the yield surface to close it towards the hydrostatic axis. The movement of the
yield surface is then described by a hardening law. Even though it is theoretically
possible, cap models do not generally consider the influence of temperature explicitly.
Damage to the material can be described in different ways but in general terms, it is
described by a damage parameter D used to scale the effective stress and goes from

-- 64 of 107 --

CHALMERS, Civil and Environmental Engineering 	49
D = 0 (undamaged material) to D = 1 (fully damaged material). In the case in which
the total stress tensor is divided into a volumetric and a deviatoric part, equation (5.6)
is used to calculate the stress. In a cap model, however, the common approach is
described in equation (5.7). In these equations, σ and σ are the nominal and effective
stress tensors, 	V	
 	and 	V	
 	are the nominal and effective volumetric stresses, D is the
damage parameter and s is the effective deviatoric stress tensor.
 	s	δ	σ 	D			 	1	V	
 	(5.6)
 	 	 	 	 	s	δ	σ	σ 	D	D	D 						 	1	1	1 	V	
 	(5.7)
5.2.4 	Large strain and stress theory
Since phenomena involved in high transient dynamic loading are related to high stress
levels and large strains, the otherwise common approximation of infinitesimal strain
theory and engineering stresses are no longer valid which is why the theory of large
strains and true stress must be used. In numerical solver tools developed to model the
behaviour of large strain and high stress phenomena, the true measures of strains and
stresses are used, i.e. εtrue and σtrue. However, since experimental data are often
presented in engineering measures (εengineering and σengineering ), conversion may be
necessary to provide correct material model input data and make fair evaluations of
the validity of the model. The conversion between engineering and true strains and
stresses are shown in equation (5.8) and (5.9), respectively; for derivation of the
equations, see Appendix B.
 		1	ln 	g	engineerin	true 		
	
	 	(5.8)
 		g	engineerin	g	engineerin	true 	1	
	
	
 		 	(5.9)
5.3 	Material models for concrete
5.3.1 	Background
The fidelity of the numerical results is highly dependent on the ability of the material
models to realistically describe the behaviour of the material under blast and impact
loading. A number of material models for concrete subjected to high dynamic loading
have been developed over the years. These models often use one or more features
from well-known concrete material models developed for simulations with static or
low transient loading, e.g. Drucker and Prager (1952), William and Warkne (1975),
Ottosen 	(1979), 	Osborn 	(1982), 	and 	Chen 	(2007), 	which 	are 	adapted 	and
complemented to take into account material behaviours connected to high transient
loading. The model proposed by Chen was published in 1982, but here it refers to the
republication of the original work.

-- 65 of 107 --

CHALMERS, Civil and Environmental Engineering	50
Even though concrete generally is considered to be a brittle material, allowing
relatively minor deformations before failure, the plastic portion of this deformation is
relatively large compared to the elastic portion, at least for compressive stress states.
If the concrete were also laterally confined, the plastic deformations prior to failure
were further increased. Thus, theory of plasticity, by which irreversible deformations
can be described, is useful for describing the hardening behaviour. However, when
concrete reaches its ultimate strength, it shows softening with decreased capacity to
carry loads with increasing deformations. During this softening, the unloading
stiffness of concrete is also reduced. This behaviour cannot be described by a
plasticity model which is why it is often accomplished by a damage mechanics model.
Thus, theories of plasticity and damage mechanics are often combined to describe the
behaviour of concrete and most concrete material models developed for high dynamic
loading generally take into account pressure hardening, strain hardening and strain
rate dependence. However, the level of complexity, robustness and generality differs
between the models. The simplest models often have the advantage of requiring a
smaller number of model-input parameters, but are limited to special load cases where
the complexity is low. The more complex material models are to a higher extent
capable of describing the varying concrete material behaviours under different and
more complex loading conditions, but at the cost of requiring a higher number of
model parameters.
One of the earliest complex material models for dynamically loaded concrete is the
Johnson-Holmquist-Cook (JHC) concrete model developed in 1993; Johnson et al.
(1993). Soon thereafter, Malvar et al. (1994) developed a concrete material model for
DYNA3D. This model has experienced several stages of modifications, leading to
three different versions of the model (Malvar et al. 1994, 1997, and Magallanes et al.
2010), of which the third version is available in LS-DYNA (2012) as the Concrete
Damage Model (material type #72). This model is sometimes referred to as the
Karagozian and Case (K&C) Concrete Model.
Towards the end of the 1990’s, two new concrete material models for hydrocode
simulations 	were 	developed 	separately 	by 	Riedel (2000) 	and 	Ruppert 	and
Gebbeken (2000). Both models were implemented in AUTODYN, but only the
former was implemented in the commercial version of the program where it was
named the RHT model. Since version 971 R5.1, LS-DYNA also includes the RHT
model (as material type #272); LS-DYNA (2012) and Borrvall and Riedel (2011).
Several 	modifications 	of 	the 	RHT 	model 	have 	been 	proposed 	since 	the
implementation 	in 	AUTODYN. 	Schuler (2004) 	and 	Leppänen (2004) 	worked
simultaneously on enhancements to the tensile softening law in the RHT model, and
in the latter reference also the function describing the strain rate effect on the tensile
strength was changed to a more realistic one. In 2010, Zhenguo and Yong (2010)
proposed modifications of the residual strength surface used in the RHT model. They
also 	proposed 	modifications 	of 	the 	tensile 	softening 	law 	and 	the 	strain 	rate
dependency of tensile strength but these seem to be the same as was already proposed
by Leppänen (2004).
The Ruppert-Gebbeken model has been a source of inspiration for further enhanced
models. In 2004, Greulich (2004) developed the RGGP model for concrete, similar to
the Ruppert-Gebbeken model, but more generalised to also be able to describe the
behaviour of concrete with low or moderate dosages of steel fibres.

-- 66 of 107 --

CHALMERS, Civil and Environmental Engineering 	51
Hartmann et al. (2010) developed an enhanced material model called the HPG model
for 	concrete 	which 	combines 	modelling 	approaches 	from 	several 	previously
mentioned material models, including the JHC, K&C, RHT and RGGP models. The
HPG model also provides new formulations for dynamic strength increase, as well as
damage and degradation of material strength with damage.
All above mentioned models used for simulations of high dynamic events are
constructed in such a way that the stress tensor is divided into a hydrostatic and a
deviatoric part. Examples of another approach described in Section 5.2.3, i.e. cap
models, are the Geological CAP model (material type #25), the Schwer Murray Cap
model (material type #145), and the Continuous Surface Cap Model (CSCM)
(material type #159), all implemented in LS-DYNA; see Schwer and Murray (1994),
Murray (2007) and LS-DYNA (2012). The two latter cap models in LS-DYNA are
modifications of the former. Even if possible, the contraction and expansion of the
yield surface in these cap models is not related to the internal energy (or temperature),
i.e. the hydrostatic pressure is not a function of the thermal energy, as is often the case
when an Equation of State is used.
However, of the previously mentioned enhanced material models developed for
concrete subjected to high dynamic loading, only the K&C, the RHT, and the various
cap models are implemented in the commercial versions of the hydrocodes LS-DYNA
and/or AUTODYN which means that the availability of the other models is limited for
program users. Furthermore, these material models are often based on a large number
of parameters, which are not always directly linked to physical quantities and are,
therefore, difficult to determine. For some material models, however, default values of
input-parameters are provided, with the user only having to specify a limited number
of the input parameters required. However, since input parameters may influence
several physical phenomena, it is difficult to enhance the models for taking into
account new loading conditions and material properties.
Clearly, many existing material models for concrete provide good results for the
loading cases for which they were developed. Nevertheless, their lack of versatility
raises the demand for constitutive models for the dynamic failure of concrete, which
are easy to extend and are based on input parameters of physical significance. In the
work presented in Papers I and II, the RHT model was used to simulate the response
of concrete due to impact or/and blast load. Limitations to modify and adapt the
model to new material and loading conditions were observed. With these factors in
mind, a “new” model was developed. The theoretical build-up of the RHT model is
provided in Section 5.3.2; for further details on the model, Riedel (2000) and
Riedel et al. (2009) are recommended. A detailed description of the “new” model, the
CDPM2, is provided in Chapter 6 and appended Papers III and IV.
5.3.2 	RHT model
5.3.2.1 Introduction
The RHT model is based on the concept of dividing the total stress tensor into a
volumetric and a deviatoric part, respectively. These parts are then calculated by
means of two different constitutive relations; an Equation of State and a strength

-- 67 of 107 --

CHALMERS, Civil and Environmental Engineering	52
model (see Section 5.2.3), with the RHT model representing the latter. However, even
though the Equation of State is not defined in the RHT model, it is often associated
with the use of a P - α Equation of State, with a Polynomial or Mie-Grüneisen
Equation of State for the description of the compaction behaviour of the non-porous,
matrix material; see Appendix A.
In the RHT model, theories of plasticity and damage mechanics are combined to
calculate the deviatoric stress tensor s. The model is, however, described in terms of
the pressure p, the equivalent stress σeq , and the Lode angle θ, defined according to:
3
1	I
p 		 	(5.10)
2	eq 	3J	
	 	(5.11)








 	2	3
2
3
2
3	3
arccos
3
1
J
J
 	(5.12)
where I1 , J2 and J3 represent the first invariant of the stress tensor σ, and the second
and third invariants of the deviatoric stress tensor s, as:
δ	σ :	1 	I 	(5.13)
s	s :
2
1
2 	J 	(5.14)
δ	s 3 :
3
1
3 	J 	(5.15)
These are then related to the principal deviatoric stress tensor according to:
 	
 	










	










3
2
3
2
eq
3
2
1
cos
cos
)	cos(
3
2






s
s
s
(5.16)
The equivalent stress is calculated based on the effective equivalent stress 	eq	
 	and a
scalar damage parameter D, ranging from 0 (undamaged material) to 1 (fully damaged
material), and 	residual	eq,	
 	which represents a residual (frictional) stress capacity in the
fully 	damaged 	material; 	see 	equation (5.17). 	The 	effective 	equivalent 	stress 	is
calculated by the plasticity part of the model and the damage parameter by the
damage part of the model.
 	 	residual	eq,	eq	eq 	1	
	
	
 	D	D 			 	(5.17)
The plasticity part of the model is defined to give an initial elastic phase and linear
yield-surface hardening before damage is initiated. The yield surface is pressure
dependent and takes into account triaxiality (i.e. reduced strength on shear and tensile
meridians compared to the compressive meridian) and strain rate dependence. By the
option to use a smooth cap function, the yielding surfaces prior to damage initiation

-- 68 of 107 --

CHALMERS, Civil and Environmental Engineering 	53
may be closed towards the hydrostatic axis. The strain driven damage model is used to
initiate damage and describe the linear evolution of damage for increasing plastic
strains. The damage model describes the increased post-peak ductility for increasingly
confining pressures.
Brief descriptions of the theoretical build-up of the plasticity and the damage part of
the model are provided in Sections 5.3.2.2 and 5.3.2.3, respectively. However, the
structure of the description differs from the common one (in e.g. Riedel, 2000 and
Riedel et al. 2009), which is more focused on the three limit surfaces schematically
shown in Figure 5.3 (left), than on the description in a more classical sense of the
different model constituents. In Section 5.3.2.4, some known limitations of the RHT
model are discussed.
Figure 5.3 	Schematically shown surfaces used in the RHT constitutive model (left),
from Leppänen (2004), and behaviour of the failure surface for low
hydrostatic pressures (right), based on Riedel (2000).
5.3.2.2 Plasticity part
The main components of the plasticity part are the yield function, the flow rule, the
hardening law, and the evolution law of the hardening variable.
Yield function
The yield function:
 	 	 	  		p	fail	p 	q	p	Y	p	f	

		
	
			
	 		 	,	,	,	,	,	, 	eq	eq	p 		 	(5.18)
depends on the effective stress (through 	eq	
 	, p and
 ), the failure surface Yfail, and a
dimensionless variable q, which describes the evolution of the yield surface during
hardening 	by 	means 	of 	the 	hardening 	variable 	κp . 	The 	failure 	surface, 	in
equation (5.18) is described by means of the pressure sensitive compressive meridian
YTXC representing the limit states under stress conditions of σ1 < σ2 = σ3 , the Rubin
function 	)	(	3
	R 	, and a factor 	)	(
	rate	F 	representing the dynamic increase factor at the
strain rate
 .
Residual strength
Elastic limit surface
Equivalent stress, 	eq	

Pressure, p
fc
fc / 3
Failure surface
Equivalent stress, 	eq	

c	1
s
f	Q
f
c	2
t
f	Q
f
Pressure, p	HTL’

-- 69 of 107 --

CHALMERS, Civil and Environmental Engineering	54
 	 	 	 	 	 	 
	
	
		 		 	rate	3	TXC	fail 	,	, 	F	R	p	Y	p	Y 	 	(5.19)
The compressive meridian on the failure surface, 	 		p	YTXC 	, is described by means of a
power function:
 	 	 	N
HTL	p	A	p	Y *	*	*	*
TXC 	'		 	(5.20)
where * indicates that the values are normalised with respect to the uniaxial
compressive strength fc. However, since this function does not represent the behaviour
of concrete for low and negative pressure levels (p* < 1/3), a piecewise linear function
is used to describe the compressive meridian in this pressure range; see Figure 5.3
(right). In this figure, the meaning of the auxiliary variable 	'	HTL , which is used just
to provide continuity to the point of ultimate compressive strength is illustrated as
well. This variable can be calculated as:
N
A
HTL 1
3
1
' * 	 	(5.21)
To create the three-dimensional failure surface, the compressive meridian is rotated
around the hydrostatic axis under the influence of the Rubin function 	)	(	3
	R
describing the variation of strength in relation to the strength of the compressive
meridian, i.e. the shape of the deviatoric section. The Rubin function is:
 	 	 	 	 	
 	 	 	2	2
2
2	2
2
2
2
2
2	2
2	2
2
2
3
1	cos	1	4
4	5	cos	1	4	1	2	cos	1	2
)	(
Q	Q
Q	Q	Q	Q	Q
R
		
					



	
 (5.22)
where:
0	.	1	5	.	0 *
0.2	2 				 	p	B	Q	Q 	Q 	(5.23)
Frate in equation (5.19) represents the ratio of the dynamic and static strength, for the
strain rate
 . This ratio, i.e. the dynamic increase factor, is calculated according to
CEB (1988), but only the expression normally used for lower strain rate regimes is
used in the model. Thus, the model only describes the moderate increase of strength
and not the strong increase seen in material testing at higher strain rate levels (see
Section 2.2.2). However, the strength increase is differentiated for tension and
compression, and Frate is calculated according to:










			







			






3
for
10
1
,	10	3	with
3
for
5
1
,	10	30	with
t
c	2
1	RHT
6-
0
0
c
c	4
3	RHT
6-
0
0
rate 	RHT
RHT
f
p
f
f
p
f
F

	



	










(5.24)
In between the pressures fc / 3 and - ft / 3 the function Frate is linearly interpolated.

-- 70 of 107 --

CHALMERS, Civil and Environmental Engineering 	55
Flow rule
The flow rule used in the RHT model is non-associative in the meridional plane, and
associated in the deviatoric plane so that plastic strain increments are calculated by
radial return. Thus, the plastic equivalent strain increase is calculated as the difference
between the trial effective equivalent stress tr
eq	
 	, and the effective equivalent stress
after plastic return, and the shear modulus G as:
G	3
eq
tr
eq	pl
eq
	

 
	 	(5.25)
and the total plastic equivalent strain can be expressed as:
G
Y
3
elastic	eq	pl
eq



 	(5.26)
where Yelastic is the initial yield surface defined below.
Hardening law
The variable q in equation (5.18) is a function of the hardening variable κp and
describes the evolution of the yield surface during hardening according to:
 	  	






	

1	if	1
1	if
p
p
fail
elastic	fail	p	elastic
p



 	Y
Y	Y	Y
q 	(5.27)
Thus, for κp ≥ 1 the yield surface, described by the yield function in equation (5.18)
will equal the failure surface Yfail. For κp = 0, the failure surface would equal the initial
yield surface, Yelastic, limiting the elastic behaviour of the material. The elastic limit
surface, expressed in equation (5.28), is scaled from the failure surface via a factor
Felastic, representing the elastic stress normalised with the ultimate stress as shown in
equation (5.29). In between these pressure levels, linear interpolation is used to
calculate Felastic. The elastic limit surface may also be closed towards the hydrostatic
axis by use of a factor Fcap which describes a smooth cap surface through the function
shown in equation (5.30), where pel is related to the elastic limit defined in the
Equation of State and ps is the pressure for which all pores have collapsed.
 	 	 	 	 	 	 		p	F	p	F	p	Y	p	Y 	cap	elastic	fail	elastic 	,	,	,	,	
	
		 		  	(5.28)
 	










c
elastic	c,
c
elastic	c,
t
elastic	t,
t
elastic	t,
elastic
3
for
3
for
f
f
p
f
f
f
f
p
f
f
p	F 	(5.29)

-- 71 of 107 --

CHALMERS, Civil and Environmental Engineering	56
 	









	
	



	

el	0
0	s
s	0
s
s
cap
for	0
for	1
3
for	1
p	p	p
p	p	p
p	p
p	p
f
p	p
p	F
c
(5.30)
Hardening variable
The hardening variable is defined as:
hard	pl,
eq
pl
eq
p


 
 	 	(5.31)
where pl,
eq	
 	is the increase of equivalent plastic strain defined in equation (5.26), and
hard	pl,
eq	
 	is 	a 	measure 	of 	the 	plastic 	strain 	at 	peak 	shear 	strength, 	defined 	in
equations (5.32). In this equation G is the elastic shear modulus and G/Gelasto-plastic is
an input parameter defining the ratio of elastic and elasto-plastic shear modulus. The
geometrical meaning of hard	pl,
eq	
 	, G, and Gelasto-plastic are shown in Figure 5.4.







	

plastic	elasto
elastic	fail	hard	pl,
eq 3 	G
G
G
Y	Y
 	(5.32)
This yields a linear hardening from the initial yield surface Yelastic to the final yield
surface Yfail.
Figure 5.4 	Geometrical 	meaning 	of 	hard	pl,
eq	
 	, 	G 	and 	Gelasto-plastic 	in 	uniaxial
compression, based on Riedel (2000).
Equivalent stress, 	eq	

Strain, ε
hard	pl,
eq	

Gelasto-plastic
G
fc
fc,elastic

-- 72 of 107 --

CHALMERS, Civil and Environmental Engineering 	57
5.3.2.3 Damage part
The strain driven damage model is based on the damage formulation in the Johnson-
Holmquist-Cook model (Johnson et al., 1993) and is used to initiate damage and
calculate the damage parameter D. Damage is initiated as the plastic equivalent strain
pl
eq	
 	equals hard	pl,
eq	
 	, i.e. when the yield surface is equal to the failure surface. The
evolution of the damage in incremental form is:
 	 
 p
D 	fail	pl,
eq
pl
eq

 (5.33)
where 	 		pfail	pl,
eq	
 	is the ultimate strain and a function of pressure, with increased
ductility for increasing pressure; see equation (5.34). However, the value of the
ultimate strain is limited to a minimum value efmin, given as an input to the model.
 	 	 	 	efmin	HTL	p	D	p D
		 2	*	*
1
fail	pl,
eq	
 	(5.34)
The residual surface Yfric, with which the residual equivalent strength 	residual	eq,	
 	of the
fully damaged material (D = 1) is described, is described as:
 	 M
p	B	p	Y 		fric 	(5.35)
This surface is, as opposed to the yield surfaces, not dependent on the strain rate or
the Lode angle.
5.3.2.4 Limitations
The RHT model uses a linear softening curve but according to Jirásek (2006) a linear
softening curve can only be used for rough approximations, motivating modification
of the RHT model to more accurately describe this behaviour. Again referring to
Jirásek 	(2006), 	the 	Hordijk-Reinhard 	expression 	(also 	described 	in 	e.g. 	van
Mier 1984) provides the best fit to experimental results but is relatively complicated.
This fact may justify the use of a simpler relation, such as an exponential or bi-linear
crack-softening law, which still usually gives results with good accuracy.
A hydrodynamic tensile-failure model is used by default in the RHT material model,
i.e. if the value of the hydrodynamic pressure in a cell would fall below a specified
limit, tensile failure is assumed to occur. However, a fracture energy cannot be
specified for this model and since the failure strain, at which no more stresses can be
transferred, is constrained from being smaller than efmin, the fracture energy may be
underestimated for large elements; see Nyström (2008). It is also not possible to use a
modified crack-softening description of this tensile-failure model. In AUTODYN it is
possible to use a principal stress tensile-failure model together with the RHT strength
model, thereby providing the possibilities of specifying the fracture energy and of
modifying the tensile failure behaviour. However, the use of a principal stress tensile-
failure model entails that the strain-rate dependence of the tensile strength defined in
the RHT strength model is no longer activated. Within the numerical study described

-- 73 of 107 --

CHALMERS, Civil and Environmental Engineering	58
in Paper I, trials were made to reintroduce this strain-rate dependence by employing a
user-subroutine. However, these trials failed due to the emergence of stability
problems, see Paper I and Nyström (2008).
Leppänen (2004) developed a modified crack-softening behaviour in the RHT
material model and used the bi-linear softening curve proposed by Gylltoft (1983).
Leppänen (2004) also modified the tensile strain-rate dependence of the RHT model
to better fit experimental data found in the literature. The modified strain-rate
dependence was introduced in a user-subroutine, which, as previously mentioned, was
not possible in the study presented in Paper I. The routine for sub-routines in
AUTODYN had changed in the version 11.0, and might explain the difference in
success.
Another 	modification 	of 	the 	RHT 	material 	model, 	contemporaneous 	with
Leppänen’s (2004) modification, was developed by Schuler (2004), and included a
more refined damage model for the description of crack softening than the original
version. A modified strain-rate dependence was used for the tensile strength, and a
power function was used to describe the shape of the descending crack-softening
curve which also took into account the strain-rate dependence of the fracture energy.
However, this modification has not yet been implemented in the commercial versions
of AUTODYN and LSDYNA.

-- 74 of 107 --

CHALMERS, Civil and Environmental Engineering 	59
6 	The Concrete Damage Plasticity Model 2
6.1 	Development process
As seen in Section 5.3.1, there are several material models developed to describe the
behaviour of concrete exposed to high dynamic loading. Some of these models are
implemented in the standard material library in one, or more, commercial finite
element codes. In general, these models are sufficient to describe the behaviour of the
type of concrete and the loading conditions for which they have been developed. The
user is often able to make modifications of the material model behaviour through user
subroutines to improve the model or to adapt it to different material characteristics
and/or loading conditions. However, the use of these subroutines rather means that a
part of the behaviour calculated by the original material model is conditionally
overwritten by the behaviour described in the user subroutine than the original model
being modified. If these conditions are not met, the original model description is used
and the behaviour described in the user subroutine neglected. Since these conditions
are built into the program the user cannot change them, which limits the possibility to
improve and adapt the original model.
For example, in Paper I the RHT model in AUTODYN was used to study the effect of
adding steel fibres on the damage caused by projectile impact and in Paper II, the
same model was used to study the behaviour of a blast and fragment loaded structure.
Both studies invoked the need to modify the description of the tensile behaviour in the
RHT model; in the former to take into account the improved softening behaviour due
to the fibres and in the latter to improve the description of the tensile behaviour since
it is poorly described in the original model. However, in neither case, it was possible
to combine the modifications with a correctly described strain rate dependence of the
tensile strength which, even though qualitative conclusions could be drawn, limited
the 	quantitative 	results 	of 	these 	studies. 	The 	limitations 	in 	material-model
modification observed in the work presented in Papers I and II have been described in
Nyström (2008).
The limited opportunity to improve and adapt the material models for concrete
available to the user raised the need to implement a complete material model in a user
subroutine. Such implementation opens up the possibility to modify the behaviour of
the model at any moment. However, the process from choosing the model to be
implemented to using it for numerical simulation is more or less demanding. The
amount of work associated depends on e.g. which model is being implemented and
how well this model has already been established and tested. The development
process can generally be divided into six important steps:
 	specifying the needs and requirements of the model
 	defining the theoretical build-up
 	implementing the model in a suitable program
 	verifying the implementation
 	validate the behaviour of the model
 	review the requirements and check if fulfilled

-- 75 of 107 --

CHALMERS, Civil and Environmental Engineering	60
After the specification of needs and requirements, the theoretical build-up of the
model is to be defined. If there is an existing material model which fulfils the needs
and requirements this model may be implemented as it is. However, often one or more
parts of the model has to be modified, or a mix of different models are used to fulfil
the needs and requirements, and the theoretical build-up of the “new” model has to be
defined before implementation is possible. Implementation is followed by verification
and validation, referring to the work related to checking that the model has been
correctly implemented, and finally the task of evaluating how well the model
describes real behaviour. The validation of the model may also be divided into two
parts: validation at a material level and validation at a structural level. Simplified, it
can be stated that validation at a material level can be made by means of simulations
of a single or a few elements the results of which are compared to experimental
results. Validation at a structural level refers to the validation of the structural
response.
The last step of reviewing the requirements for the model and checking on whether
these are being fulfilled can be seen as an evaluation of the model. If the model does
not 	fulfil 	the 	requirements, 	modifications 	and/or 	extensions 	of 	the 	theoretical
description may be necessary and included in the implementation which should be
followed by additional verification and validation steps. All the previously mentioned
steps are of great importance. Nevertheless, it is not uncommon that only a limited
part of the work related to this process is presented in descriptions of newly developed
models or modifications of existing models. These descriptions are often limited to a
presentation of the theoretical build-up and to a validation at structural levels.
However, in this chapter the developing process of the Concrete Damage Plasticity
Model 2 (CDPM2) is presented, which is schematically shown in Figure 6.1. Based
on the need described above, the requirements of a “new” material model has been
specified, which have then been used to define the theoretical description. The
theoretical build-up of the “new” model was made by Grassl (2011), with continuous
feed-back from the reference group of the project and the present author. The “new”
model was named CDPM2, since it is a modification and extension of the first
version, CDPM1 developed by Grassl and Jirásek (2006). The constitutive model was
implemented in the object-oriented finite element package OOFEM (Patzák and
Bittnar, 2001). Verification of the implementation and validation during quasi-static
loading conditions were performed on material, as well as structural level, as detailed
in Paper III. However, in order to benefit from the possibilities of using large strain
and stress theories and advanced contact interface algorithms, the model was also
implemented 	in 	the 	advanced 	general 	purpose 	finite 	element 	package 	LS-
DYNA (2012). This implementation was made by DYNAmore Nordic AB with
contributions from the present author, who also conducted the verification of this
implementation. To verify the implementations in OOFEM and LS-DYNA, parts of
the 	model 	were 	also 	implemented 	in 	MATLAB. 	The 	verification 	of 	the
implementation in LS-DYNA was followed by a validation study of the CDPM2 for
dynamic loading at material level, and these results were then used to evaluate the
model 	based 	on 	the 	initially 	defined 	requirements. 	It 	was 	found 	that 	certain
modifications of the theoretical description should be made to fulfil the requirements
also for high strain rates and high pressure levels, something that was not part of the
present work.

-- 76 of 107 --

CHALMERS, Civil and Environmental Engineering 	61
Needs
Theoretical description
Partial implementation
MATLAB
Implementation OOFEM 	Implementation LS-DYNA
No
Yes
Recall requirements,
are they met?
Recall requirements,
are they met?
comparison of results
Validation
material level
Validation (quasi-static)
material level
Validation (quasi-static)
structural level
Verification OOFEM
Implementation correct?
Yes 	Yes
No 	No
Validation
structural level
Yes
Ready to use
comparison
Verification LS-DYNA
Implementation correct?
Defined
requirements
Figure 6.1 	Schematic illustration of the development process of the CDPM2; dash-
dotted lines indicate steps that are not performed yet, but are proposed
for future work.
6.2 	Needs and requirements
Objectives can only be met if necessary resources are available – if they are not, a
need is created. An objective of the work presented in this thesis is to “observe and
understand different phenomena involved in blast and fragment loading of reinforced
concrete structures”, which is approached by the use of numerical simulations; see
Chapter 1. Thus, the objective can only be met if the constitutive models used are
capable of describing characteristic behaviours in a general way or that the model
allows for modifications to take different behaviour into account. As mentioned in
Section 6.1, this was not fulfilled for the concrete material model previously used and
the need of such a constitutive model was raised during the progress of the work.
Specifying needs and requirements constitutes the base of the developing process.
Correctly specified requirements simplify and shorten the rest of the process.
However, for the CDPM2, some basic requirements of the model was defined before
the more specific requirements, on which material behaviour the model should
describe were specified. This resulted in four key words:
 	Simple
 	Clear
 	General
 	Robust
Even though the response related to high dynamic loading of concrete involves
complex material behaviour, the constitutive model should be kept as simple as
possible. The structure should be transparent in that the influence of different material
parameters on the behaviour should be clear. It is also desirable to use a low number

-- 77 of 107 --

CHALMERS, Civil and Environmental Engineering	62
of material parameters and that these should have a clear physical meaning or be at
least related to parameters that have a physical meaning. It should also be possible to
determine relevant input parameters from the literature. The documentation of the
model should be comprehensive and advantages, as well as disadvantages, should be
clearly stated and described. The model should describe the important characteristics
of concrete subjected to multiaxial and rate-dependent loading and should be general
enough to be used for different classes of concrete. Further, it should be possible to
modify the behaviour to describe the response of fibre-reinforced concrete and other
similar materials. The failure description in the model should be mesh independent,
and input parameters should not depend on element size. Further, the model should
show numerical stability and robustness. Since the model is to be used to estimate the
response 	of 	structures, 	the 	numerical 	cost 	of 	describing 	the 	concrete 	material
behaviour must be limited so as to avoid unrealistic simulation run times. It is difficult
to meet these sometimes conflicting requirements, and it was seen more as an aim
than an objective to fulfil them. However, these key words have been kept in mind
throughout the developing process.
Next, the more specific requirements on what the constitutive model should be able to
describe were to be specified. Thus, the characteristic material behaviour important to
describe the response to high dynamic loading was to be identified and a mutual order
of 	priority 	was 	compiled; 	see 	Figure 6.2. 	The 	closer 	to 	the 	base 	a 	material
characteristic 	appears 	in 	the 	pyramid, 	the 	more 	important 	was 	this 	behaviour
considered to be for the description of the response under these loading conditions.
The material behaviour of concrete for static and dynamic loading was briefly
described in Chapter 2. Since high dynamic loading is related to high pressure levels
and high strain rates, the nonlinear material compaction response and the pressure
sensitive strength of the model was considered crucial to describe the response of
concrete. Further, a correctly described post-peak softening behaviour is important in
order to correctly describe the dissipation of energy due to failure. The residual
strength of concrete damaged in confined compression is considered important if the
model were to describe the behaviour during multiple wave reflections in a structure.
Even though the material characteristics appearing further up in the pyramid are
important if a detailed description of the material response is desired, they are not
crucial for the general behaviour and had a lower priority.
Residual strength in confined compression
Pressure sensitive strength
Nonlinear compaction curve for high pressures
Triaxial stress state dependence of strength
(nonlinear shape of deviatoric section)
The influence of pressure level on the
triaxial stress state dependence of strength
(changed shape of deviatoric section for increasing pressure levels)
Dilation
Post-peak softening
Strain-rate dependence of strength
(different in tension and compression)
Reduced stiffness for damaged concrete
Pre-peak strain hardening in compression
Strain-rate dependent fracture energy
Pre-peak strain hardening in tension
Uniaxial loading 	Multiaxial loading
Figure 6.2 	Concrete material characteristics and their mutual order of priority in
the model description.

-- 78 of 107 --

CHALMERS, Civil and Environmental Engineering 	63
6.3 	Theoretical description
As mentioned in Section 6.1, the theoretical description of the CDPM2 is based on the
prior model, the CDPM1. Since a detailed description of the interaction between the
concrete constituents are of secondary interest, this model is defined in the framework
of continuum mechanics at a macroscopic scale. The CDPM1 is defined by combining
the theories of plasticity and isotropic damage mechanics albeit in a static framework.
Strain rate dependence in the CDPM2 is taken into account by delaying the initiation
of damage. This delay required that the perfectly plastic response in the static nominal
post-peak regime described in the CDPM1 was replaced by plastic hardening. To
increase the generality and make it possible to model e.g. fibre reinforced concrete,
the single damage parameter in the CDPM1 is replaced by two, one parameter for the
tensile portion of the stress tensor and another for the compressive. Besides the strain
rate dependence, the CDPM2 describes:
 	pre-peak strain hardening (in compression and tension)
 	pressure sensitive peak strength
 	triaxial stress state dependence of strength (and its pressure dependence)
 	post-peak softening
 	reduced stiffness in post-peak regime
 	realistically described dilation in compression
A comprehensive description of the CDPM2 model is found in the appended
Paper III; however, this is limited to the static behaviour. The extension to strain-rate
dependence is treated in Paper IV.
The model requires sixteen input parameters in the case of bilinear softening
behaviour and fourteen if linear softening is desired; see Table 6.1. Observe that the
numbering of parameters in the table does not represent the order they are provided as
input to OOFEM and LS-DYNA. The first five parameters (no. 1 to 5) have a clear
physical meaning and can be determined from uniaxial compressive tests, uniaxial
tensile tests, and three-point bending tests. If limited or no experimental data are
available, these parameters can be estimated by use of e.g. the CEB-FIP Model Code
1990 (CEB, 1993). The following five parameters (no. 6 to 10) do have a less clear
physical meaning, but are closely related to physical properties and can also be
determined from tests or by expressions from recommended references. Since they
lack clear physical meaning, the six remaining parameters (no. 11 to 16) are normally
more difficult to determine. However, default values are given for these parameters
and there is normally no need to adjust them for every set of analysis. These six
material parameters are all related to the description of plastic hardening, four of
which (Ah , Bh , Ch and Dh ) are related to the strain at peak stress in quasi-static loading
under uniaxial tension, uniaxial compression and triaxial compression. The dilation
constant Df , is related to the amount of dilation in the softening regime for uniaxial
compression and represents a constant ratio between the lateral and axial plastic strain
increments. The calibration of Ah , Bh , Ch , Dh , and/or Df is thus possible if relevant
experimental data are available. However, this is believed to be necessary only if high
accuracy of strain at peak stress and/or dilation were desired and was considered
important for the outcome of the results. The hardening modulus, Hp , affects the

-- 79 of 107 --

CHALMERS, Civil and Environmental Engineering	64
amount of plastic strain both before and after the static failure surface is reached. In
the case of static loading, calibration of this parameter can be made by the use of
experimental data. However, since it affects the behaviour for all load cases, this
calibration must be done with care. In dynamic loading, the value of the hardening
parameter is critical for the description of the strain at peak strength, which also limits
the possibility of calibration; see Paper IV. The different model parameters and their
meaning are described in Papers III and IV.
Table 6.1 	Model input parameters for the CDPM2.
No. 	Input parameter 	No. 	Input parameter
1 	E 	Young’s modulus 	9 	e 	eccentricity factor
2 	v 	Poison’s ratio 	10 	qh0 	initial hardening parameter
3 	ft 	uniaxial tensile strength 	11 	Hp 	hardening modulus
4 	fc 	uniaxial compressive strength 	12 	Ah 	hardening ductility measure
5 	wf 	ultimate crack opening 	13 	Bh 	hardening ductility measure
6 	wf1 	crack opening threshold a 	14 	Ch 	hardening ductility measure
7 	σt1 	damage stress threshold a 	15 	Dh 	hardening ductility measure
8 	As 	damage ductility measure 	16 	Df 	dilation constant
a. used in case of bilinear softening curve
6.4 	Implementation
The 	global 	boundary 	value 	problem 	is 	determined 	by 	the 	numerical 	solution
techniques used within the numerical solver. Both OOFEM and LS-DYNA allow for
the choice of implicit and explicit solvers. However, in the results presented in
Paper III, the static solver was used in OOFEM, and implicit time integration. In the
simulations performed with LS-DYNA, presented in Paper IV, the explicit solver was
used. Even though this means that different methods of time integration was used
while solving the boundary value problem (global level), the technique used to
integrate the constitutive laws (local level) was the same in the two cases, in which an
implicit time integration scheme was used.
If assumed that all quantities have been evaluated up to time t, and the time increment
Δt and the incremental strain vector for this time increment, 	ε		 t	t , are given, the
nominal stress can be calculated. In the following, the superscript t + Δt is dropped in
order to simplify the notation, the superscript t is, however, left to indicate quantities
evaluated at time t. Thus, where the time at which the quantity has been evaluated is
not indicated, this refers to the time t + Δt. The flow chart for the algorithm of the
constitutive law shown in Figure 6.3, is explained below.

-- 80 of 107 --

CHALMERS, Civil and Environmental Engineering 	65
strain increment given
Δε
trial effective stress tensor
principal trial effective stresses
Haigh-Westergaard coordinates of principal trial effective stress tensor
tr
V	
σ 	tr	
ρ 	tr	
θ
tr
1	
σ 	tr
2	
σ 	tr
3	
σ
tr	
σ
trial values of hardening variables and the r-function
tr
p	
κ 	tr
h1	q 	tr
h2	q 	( 	)	tr
	r	
θ	cos
yield function
( 	)	tr
p
tr
V	p 	,	,	,	
κ
	θ
	ρ
	σ 	tr	tr
	f
elastic step 	elastic-plastic step
Risk of vertex case?	tr
V	V	
σ
	σ 	= 	tr	
ρ
	ρ = 	tr	
θ
	θ = 	0	p =	Δε
No	vertex return by bisection iteratons
V	
σ 	0	=
	ρ 	tr	
θ
	θ = 	p	ε	Δ
regular return by
Newton-Raphson iterations
V	
σ 	ρ 	tr	
θ
	θ = 	p	ε	Δ
Was it really a vertex case? 	No
principal effective stresses
1	
σ 	2	
σ 	3	
σ
split of principal effective stress tensor into tensile and compressive parts
equivalent strain and rate factor
ε~ r	
α
damage history variables
dt	
κ 	dt1	
κ 	dt2	
κ 	dc	
κ 	dc1	
κ 	dc2	
κ
damage parameters
)	,	,	( 	dt2	dt1	dt	t	
κ
	κ
	κ
	ω 	)	,	,	( 	dc2	dc1	dc	c	
κ
	κ
	κ
	ω
principal nominal stress tensor
nominal stress tensor
σ
save to history variables
for use in next time step
Plastic part
Damage part
check for yielding
0	p >	f 	?
No 	Yes
Yes
Yes
0	V >	tr	
σ 	or 	( 	)	0	V	V 	=	<
	ρ
	σ
	σ 	t	tr 	or 	c	V 	15 f	tr 	⋅	−	<
	σ 	?
pc	pt	p 	σ	σ	σ 	+	=
( 	) 	( 	) pc	c	pt	t	p 	1	1 	σ	σ	σ	
ω
	ω 	−	+	−	=
Figure 6.3 	Flow chart for the CDPM2 algorithm.

-- 81 of 107 --

CHALMERS, Civil and Environmental Engineering	66
The integration scheme is divided into two subsequent steps corresponding to the
plastic and damage parts of the model. In the plastic part, the effective stress, σ , and
the plastic strain, εp , at the current time are calculated and in the damage part, the two
damage parameters, ωt and ωc, and the nominal stress, σ , are calculated. The plastic
part begins with calculating the trial effective stress vector 	tr	
σ 	from the given strain
increment by assuming an elastic stress increment according to:
ε	D	σ	σ 			 	:	e
t	tr (6.1)
where 	σ	t 	is the effective stress vector evaluated at time t, and 	e	D 	is the elastic
stiffness matrix.
Since the plasticity part of the model is described in terms of the cylindrical
coordinates in the principal effective stress space first, the trial principal effective
stresses and their directions are calculated, and thereafter the Haigh-Westergaard
coordinates. The principal effective stresses are represented by the eigenvalues and
eigenvectors of the effective stress tensor, respectively, which are sorted in ascending
order.
Since an elastic stress increment is assumed, there is no plastic strain increment and
the trial values of the hardening variable κp , as well as the dimensionless variables qh1
and qh2 , remain unaffected from previous time step. However, since qh1 and qh2 are not
stored as history variables, these variables are recalculated. After calculation of the
trial value of the elliptic function, 	 		tr
	r	
	cos 	, the yield function, 	 	tr
p
tr
V	p 	,	,	,	

	
	
	 tr	tr
f 	,
is calculated and checked if yielding might occur. If 	 	 	0	,	,	, tr
p
tr
V	p 	
	
	
	
	 tr	tr
f 	, the
assumption of an elastic stress increment is correct and the trial values are valid. If
yielding occurs, i.e. if 	 	 	0	,	,	, tr
p
tr
V	p 	
	
	
	
	 tr	tr
f 	, the trial stress is erroneous and plastic
return has to be performed.
The flow directions at intersection points of the yield surface and the hydrostatic axis
are not unique and special treatment of these vertex cases are necessary. If the trial
effective 	volumetric 	stress 	becomes 	larger than 	zero, or 	if it 	falls 	below the
intersection point of the yield surface at time t, or below -15·fc, a vertex return is
performed. This is done on the assumption that the final stress state lies on the
hydrostatic axis ( 	0	
	 	). The effective volumetric stress fulfilling the yield criterion
fp ( 	p	V 	,	0	,	0	,	

	
	
	 		 	) = 0 is thereafter determined by the bisection iterative method.
Finally, it is checked that it really was a vertex case and that regular plastic return was
not applicable. Thus, if the absolute value of the ratio of deviatoric and volumetric
plastic flow as calculated in the vertex return is larger than the corresponding ratio
calculated from the plastic potential it is not a real vertex case. If the ratio from the
vertex case is smaller, the assumption is abandoned and a regular return is performed.
A regular plastic return is performed for the cases which are not classified as vertex.
The set of four nonlinear equations, equations (6.2) to (6.5), is solved by the Newton-
Raphson method. The unknowns, i.e. the effective volumetric stress 	V	
 	, the norm of
the deviatoric effective stress
 , the hardening variable κp , and the increment of the
plastic multiplier Δλ, for the current time t + Δt are thus calculated by means of

-- 82 of 107 --

CHALMERS, Civil and Environmental Engineering 	67
iterations, starting from the initial guess values tr
V	V	

	 	 	, tr

	  	, Δλ = 0 and
p	p	
	
 	t	
 	. The Lode angle for the trial effective stress tensor, 	tr	
σ 	, and 	the actual
effective stress tensor, σ , is the same ( 	tr	

	  	) since the plastic potential gp , only
depends on the stress invariants 	V	
 	and
 , but not on the Lode angle; Grassl and
Jirásek (2006). In addition, the gradient of the plastic potential, 	σ	m 			 	p	g 	, and its
invariants 	V	m and 	D	m 	have the same Lode angle. The parameters K and G in
equations (6.2) and (6.3), represent the elastic bulk modulus and elastic shear
modulus, respectively. The variable xh in equation (6.4) is a hardening ductility
measure taking into account the increased ductility in compression and increasing
confinement levels compared to the response to tensile loading. It is worth pointing
out that the total strain tensor is solved explicitly already on the global level and is not
affected by the iterations.
V
tr
V	V 	m	K	
	
	
 			 	(6.2)
D	2 	m	G	tr	
	
	
 			 	(6.3)
 	  	2
V	h
p	p 	cos	2	




	 x
t m	
	 	(6.4)
 	 	0	,	,	, 	p	V	p 	
	
		
		f 	(6.5)
When the plastic return is performed, the principal effective stresses are updated
according to equation (6.6). These stresses are then sorted in ascending order and
constitute the principal effective stress tensor, 	p	σ . Since damage is separated into
tension and compression, the principal effective stress tensor is split into a tensile and
a 	compressive 	part, 	pt	σ 	and 	pc	σ 	, 	respectively, 	where 	)	,	0	max( 	i	p,	i	pt, 	σ	σ 	 	and
)	,	0	max( 	i	p,	i	pc, 	σ	σ 	 	, with i = 1, 2, 3.
 	
 	
 	










	
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
3	2	cos
3	2	cos
cos
3
2
1
1
1
V
3
2
1

	

	


	



(6.6)
With the actual effective stress state and plastic strains known, the damage part of the
constitutive law is entered in order to check for damage and calculate the nominal
stress state. This part of the model, which is based on the theory of strain driven
isotropic damage mechanics, uses measures of the equivalent strain,	
~ , and the
plastic strain vector, εp , to calculate the two damage parameters. The plastic strain
vector is known from the plasticity part of the model, but the equivalent strain is yet to
be calculated. Further, the strain rate affects the initiation and evolution of damage
and the dynamic increase factor, which in the model is represented by the rate factor
r	
 , is calculated. The strain rate used in the calculation of the rate factor is calculated
as the change of strain in the relevant principal direction divided by the time
increment Δt. Since the strain rate dependence is different in tension and compression,
the relevant principal direction corresponds to the one giving the maximum and

-- 83 of 107 --

CHALMERS, Civil and Environmental Engineering	68
minimum strain, respectively. However, as damage is initiated, the rate factor is
locked and does not alter in subsequent steps to avoid effects of strain localisation on
the rate factor, as described in e.g. Leppänen (2004).
The damage variables in tension and compression, ωt and ωc, respectively, are
calculated by means of the six damage history variables, i.e. ωt = gdt (κdt ,κdt1 ,κdt2 ) and
ωc = gdc (κdc, κdc1 ,κdc2 ). 	Since 	damage 	in 	the 	model 	cannot 	heal, 	these 	damage
variables cannot decrease. Further, besides the equivalent strain, the plastic strain, and
the rate factor, the damage variables are calculated by means of the damage ductility
measure xs , and variable αc, distinguishing between tensile and compressive stresses.
The damage history variables used to determine the tensile damage variable are
calculated according to:



 	

else
~if
~
~
dt
dt	t
r
t
dt


	



 t
t
(6.7)




 


else
if
dt1
0	dt
s	r
p
dt1
dt1


	


t
t
x
ε
(6.8)
 	
s
t
t
x
dt	dt
dt2	dt2
	


	 
	 	(6.9)
where 	E	f t		0	
 	is a threshold representing the elastic strain at ultimate strength in
quasi-static uniaxial tension, since E is the Young’s modulus and ft is the strength
under this stress condition. The damage history variables used to determine the
compressive damage variable are similarly calculated:



 	

else
~if
~
~
dc
dc	c
r
c	c
dc


	



	
 t
t
(6.10)




 


else
if
dc1
0	dc
s	r
p
c	c	dc1
dtc


	

	
	

t
t
x
ε
(6.11)
 	
s
t
t
x
dc	dc
dc2	dc2
	


	 
	 	(6.12)
where βc is a factor providing a smooth transition from pure damage to damage-
plasticity softening processes, which may occur during cyclic loading.

-- 84 of 107 --

CHALMERS, Civil and Environmental Engineering 	69
When the damage parameters have been calculated, the principal nominal stress
vector is calculated according to equation (6.13), and then rotated back to the original
coordinate system.
 	 	 	 	c	c	t	t 	1	1 	σ	σ	σ	
	
 				 	(6.13)
6.5 	Verification
The verification of the implementation in OOFEM was made by single element
simulations of quasi-static experiments including:
 	uniaxial tension (cyclic loading)
 	uniaxial compression (cyclic loading)
 	bi- and triaxial compression
 	hydrostatic compression
The above experiments have been reported in the literature, see Paper III. Thus, the
verification process also constituted validation of the model at a material level for
these loading conditions. Simulations of the general behaviour in the following were
also conducted:
 	cyclic loading (tension-compression-tension)
 	uniaxial tension and compression at various strain rates
However, 	all 	verification 	simulations 	for 	the 	OOFEM 	implementation 	were
performed with the static solver in OOFEM and the maximum achieved compressive
stress level in the experiments used for validation was approximately 800 MPa.
The verification of the model implementation in LS-DYNA was performed by
conducting 	simulations 	of 	the 	same 	experiments 	used 	in 	the 	verification 	and
validation in OOFEM and then comparing the results from these with the results from
the OOFEM simulations. Since LS-DYNA uses true stresses and strains while
OOFEM uses engineering measures, small variations from the behaviour in OOFEM
were 	expected. 	However, 	where 	larger 	variations 	were 	observed, 	they 	were
investigated. By comparing different parameters calculated according to the two
implementations the error could be localised and corrected. In a few cases, the part of
interest of the model was implemented in MATLAB to facilitate the error search. For
example; since the results from the LS-DYNA simulation showed a great divergence
from the results of OOFEM in the case of hydrostatic compression, the part of the
model describing this behaviour was implemented in MATLAB. Since the Lode angle
was not defined in hydrostatic loading, its value was pending between 0 and 60
degrees 	in 	the 	OOFEM 	simulation 	while 	it 	was 	set 	to 	0 	in 	the 	LS-DYNA
implementation. The implementation in OOFEM was adjusted to set the Lode angle
equal to 0 degrees in the case of hydrostatic conditions.
Since a static solver was used to verify the implementation in OOFEM, no effects of
inertia and propagating waves were modelled. In the simulations performed by the use
of LS-DYNA, an explicit solver was used and inertia effects could be observed for

-- 85 of 107 --

CHALMERS, Civil and Environmental Engineering	70
faster 	loading. 	Figure 6.4a 	shows 	an 	example 	of 	verification 	simulations 	from
OOFEM and LS-DYNA in uniaxial compression. For the LS-DYNA simulation
involving faster rate of loading (tmax = 0.05 ms), an elastic wave was created in the
element, which was not observed at the lower rate of loading (tmax = 2.00 ms).
-35
-30
-25
-20
-15
-10
-5
0
-5	-4	-3	-2	-1	0
strain [‰]
stress [MPa]
OOFEM
LS-DYNA tmax 2.00 ms
LS-DYNA tmax 0.05 ms
-1800
-1600
-1400
-1200
-1000
-800
-600
-400
-200
0
-160	-140	-120	-100	-80	-60	-40	-20	0
initial stiffness
volumetric strain [‰]
stress [MPa]
a) 	b)
Figure 6.4 	Verification simulations in a) OOFEM and LS-DYNA for uniaxial
compression, and b) LS-DYNA for hydrostatic compression.
In the verification process of the implementation in LS-DYNA the element size, the
loading time and the final deformation were varied. The implementation in LS-DYNA
was also verified by the simulation of hydrostatic compression for high pressure
levels; Figure 6.4b.
6.6 	Validation
As mentioned in Section 0; since experiments were simulated in the verification of the
implementation in OOFEM was combined with validation. Further, the behaviour of
the model in 2D simulations of a three point bending test and a four point shear test
has been validated; Paper III. However, these simulations were limited to quasi-static
conditions. Since high dynamic loading may be related to high strain rates, the build-
up of high confining pressures, uniaxial strain conditions and even shock wave
propagation, the model had to be validated for these cases as well. Appended
Paper IV presents the evaluation study of the model behaviour for high dynamic
loading. Results from single element simulations of the following were compared to
experimental results reported in the literature:
 	uniaxial compression at different strain rates (up to 1 000 s -1 )
 	uniaxial tension at different strain rates (up to 1 000 s -1 )
 	quasi-static hydrostatic compression (minimum stress level of -650 MPa)
 	quasi-static compression in uniaxial strain (minimum stress level of
approximately -1 500 MPa).
Since the level of confining pressures in quasi-static testing is limited, testing at very
high pressure levels are conducted by means of impact and detonations, involving

-- 86 of 107 --

CHALMERS, Civil and Environmental Engineering 	71
shock wave propagation in the concrete sample; see Section 2.3.2. To validate the
model behaviour under these conditions, the ability of the model to describe shock
wave formation was studied. Further, results from simulations of reverse flyer-plate-
impact tests were compared to results reported in Gebbeken et al. (2006) and
Grady (1996).
In quasi-static loading, the CDPM2 has provided a response in good agreement with
experimental results for a wide range of loading, from uniaxial tension to confined
compression; Paper III. Further, the model has shown mesh independent load-
displacement curves for tensile fracture dominated problems. However, local results
in the form of damage patterns were mesh-dependent; see Paper III. The evaluation of
the ability of the model to describe the material response in the case of dynamic
loading showed some model weaknesses that may limit the material description at
high strain rates and pressure levels; Paper IV. The gradual increase of elastic
stiffness during plastic pore compaction is not described in the present version of the
model. Further, the strain-rate dependence of compressive strength and fracture
energy 	overestimate 	the 	effect 	of 	strain 	rate. 	This 	behaviour 	may 	lead 	to
overestimations of material strength and the energy required to reach total material
fracture. However, the response of the model in the case of flyer-plate impact
simulations showed good agreement with experimental results.
No simulations for validation of the model have been conducted at structural levels
for dynamic loading, since these results were considered to be irrelevant due to the
previously mentioned weaknesses. However, modifications of the CDPM2 to better
describe 	the 	increased 	elastic 	stiffness 	at 	high 	pressure 	levels 	and 	strain-rate
dependence is believed to improve the dynamic response.
6.7 	Evaluation
Evaluation of the model and its ability to describe the relevant behaviours in case of
high 	dynamic 	loading 	is 	made 	by 	reviewing 	the 	requirements 	(presented 	in
Section 6.2) to see if these requirements have been met, and to evaluate the findings
from the validation studies discussed in Section 6.6.
It is difficult to objectively evaluate whether the general requirements of the model
characterised by the four key words: simple, clear, general and robust, have been met
or not. However, even though the model parameters are relative numerous, only a part
of these has to be given for every set of analysis. The material parameters that should
be given for every new set of analyses have, or are at least related to parameters with,
a clear physical meaning, see Section 6.3. A comprehensive description of the model
is available, which also presents a validation of the model for static and dynamic
loading conditions and describes advantages, as well as disadvantages of the model.
The ability of the model to describe the behaviour for multiaxial and time-dependent
loading is good in many aspects, without being fully satisfactory at high strain rates
and high pressure levels, as further described below. The generality of the model is
good, 	with 	flexibility 	to 	describe 	the 	behaviours 	of 	concrete 	with 	different
characteristics by means of input parameters and softening curves. However, to use
different shapes of the softening curves in tension and compression, the current
implementation has to be modified to adapt the description of parameter As . The

-- 87 of 107 --

CHALMERS, Civil and Environmental Engineering	72
parameter As relates the inclinations of the softening branch in the stress-strain curves
in uniaxial tension and uniaxial compression. Further, some generality is missing with
respect to the effect of initial density and water content, which according to the
literature have clear effects on the response at high confining pressure levels. The
stability and robustness of the model is good and have not caused any problems to the
work performed. Since the simulations at a structural level are limited to two cases of
quasi-static loading, the study of mesh dependency is limited. However, these
simulations show mesh-independency at a global level. The influence of mesh size
can be further investigated as more simulations at a structural level are conducted.
In general the specific requirements on what the model should be able to describe are
also well met since the model describes all material characteristics specified in the
requirements except the residual strength in confined compression, see Figure 6.2.
This material characteristic can, however, be taken into account explicitly by the
softening curve in compression. The validation of the model with experimental results
from the literature has shown that the model is capable of describing the response for
a wide range of loading, from uniaxial tension to confined compression and dynamic
impacts. However, in some cases the behaviour is somewhat incorrectly described.
Even though the shape of the nonlinear compaction curve in hydrostatic compression
captures the three characteristic phases, the elastic stiffness remains equal to the initial
stiffness. The gradual increase of the stiffness during plastic compaction is thus not
captured. This practically means that the model yields a weaker behaviour for high
pressure 	levels 	than 	observed 	in 	experiments. 	Further, 	it 	may 	cause 	an
underestimation of the dissipated energy due to plastic compaction of the material. It
also affects the possibility of describing the formation of strong shock waves since
this requires that the bulk modulus at high pressure levels exceeds the initial value.
The validation study for dynamic loading has shown that the numerical model is
capable of describing the structural inertia effects causing the sharp increase of
strength in uniaxial compression at high strain rates. Thus, this part of the dynamic
increase curve used when calculating the rate factor in compression αrc should be
removed 	for 	solid 	elements. 	The 	relation 	describing 	the 	dynamic 	increase 	of
compressive strength should thus only take into account the moderate increase
attributed to viscosity effects. Further, the strain rate effect of the fracture energy is
erroneously described, resulting in too high a value for high strain rate levels.
The model does not take into account any temperature dependence. In the case of
shock wave loading, the temperature may increase and cause a considerable thermal
pressure component. However, in the experimental techniques used to evaluate the
stress reached during shock wave transition, the effect of temperature, strain rate and
static material behaviour cannot be differentiated. Thus, the temperature dependence
in such cases is difficult to characterise. In the model, this behaviour is instead
assumed to be implicitly accounted for.
As stated above, the response of the model shows good agreement with experimental
results for a wide range of loading, static as well as dynamic. The incorrect
description of the elastic stiffness during plastic compaction, and the erroneous
description of strain rate dependence of fracture energy and the compressive strength
mean that the results achieved by the CDPM2 in simulations of high dynamic loading
may be misleading. Thus, it is recommended that the descriptions of these behaviours
in the model are modified before the model is used for such simulations. However,

-- 88 of 107 --

CHALMERS, Civil and Environmental Engineering 	73
simulations involving dynamic events with high compressive stress levels (up to about
5 GPa), are believed to yield accurate results. For simulations of events with low, or
negative pressure levels involving material failure, the capability to yield accurate
results is limited to relatively low strain rates.

-- 89 of 107 --

CHALMERS, Civil and Environmental Engineering	74
7 	Conclusions
7.1 	General conclusions
The area of blast and fragment loading of concrete structures involves phenomena not
yet well understood. A numerical approach, together with literature reviews and
theoretical investigations, have been used to increase the knowledge of this area.
Three numerical studies have been conducted within the scope of the work presented,
involving investigations of the effect of reinforcement on the projectile impact, the
relative effect of the impact resistance when adding steel fibres to concrete, and the
combined effects of blast and fragment loading.
The reinforcement in a concrete structure is necessary in order to ensure ductile
behaviour and thereby an energy-absorbing capacity, but may also increase the
resistance against local damage. However, an increased projectile resistance, i.e.
decreased depth of penetration, can only be achieved with, for this case, suitable
reinforcement detailing, since the reinforcement must be located in the damage zone
in 	order 	to 	have 	an 	effect. 	Furthermore, 	since 	the 	confinement 	effect 	of 	the
reinforcement, pointed out as a plausible explanation for the increased projectile
resistance, decreases with increasing distance, the distance between the projectile path
and the reinforcement bars is a crucial factor. Suitably positioned reinforcement bars
do, however, generally reduce the scabbing and spalling effects.
The addition of moderate dosages of steel fibres in the concrete does not significantly
influence the depth of penetration of a striking projectile while the size of both the
spalling and possible scabbing crater decreases. An increased amount of fibres only
lead to a small reduction of the spalling crater, whereas the effect on the scabbing
crater is more significant – it decreases and may even be prevented.
Most damage caused by a multi-fragment impact on a wall element occurs within
fractions of a millisecond and may consist of local damage on the front face, i.e.
craters, scabbing cracks at the rear and initial flexural cracks close to supports. In the
case of blast loading, the number of flexural cracks to which elongation of the
reinforcement is localised, is lower than for fragment loading, which may have a
positive effect on the energy-absorbing capacity. The early appearance of damage
caused by the fragments and the larger number of flexural cracks indicate that the
load-bearing 	capacity 	and 	mid-point 	deflection 	of 	the 	element 	in 	the 	case 	of
combined, simultaneous loading are highly influenced by the fragment impact. For
combined loading, a synergy effect is observed; the sum of the mid-point deflections
for blast and fragment loading treated separately is smaller than the mid-point
deflection for combined loading.
Due 	to 	limitations 	in 	material 	models 	available 	in 	commercial 	programs 	for
simulations of high dynamic events, and the limited opportunities to improve and
adapt these models, the CDPM2 (Concrete Damage-Plasticity Model, version 2) was
developed and implemented in one such program, i.e. LS-DYNA. The response
described by the CDPM2 showed good agreement with experimental data of the
material behaviour for a wide range of loading conditions, static as well as dynamic.
The model describes pre-peak hardening, pressure sensitive strength, and post-peak
softening with reduced unloading stiffness. Further, the increased pre-peak ductility

-- 90 of 107 --

CHALMERS, Civil and Environmental Engineering 	75
for compressive states with increasing confinement is correctly described. For high
compressive loads, the three phases; linear elasticity, plastic pore compaction and the
approximately linear behaviour during compaction of the pore-free material are
described. By use of a non-associated flow rule, the model also correctly describes
dilation in the case of compression with no or low confining pressures. The
dependence of the strength on the triaxial stress state, i.e. the non-circular shape of the
failure surface in the deviatoric section, is described by the model. For increasing
pressure levels, the shape becomes more circular in accordance with the real
behaviour of concrete. Contradictory to the common approach in hydrocodes, the
CDPM2 does not require an explicitly described Equation of State since this
behaviour is calculated by the model and thus implicitly accounted for.
Further, the model is able to describe the strain-rate dependence of uniaxial tension
and compression, respectively. However, in the case of solid elements where the
three-dimensional effect of inertia and confining effects can be described by the
model, the expression used to define the dependence of the strain rate for compressive
loading in the model should be modified so as not to include the sharp increase of
strength 	for 	strain 	rates 	above 	30 s-1 . 	In 	addition, 	the 	description 	of 	damage
accumulation should be modified to achieve an improved description of the strain rate
dependence of the fracture energy, which is overestimated in the current version of
the model. The CDPM2 uses extrapolation of the curves describing the strain rate
dependence in tension and compression, respectively, above the strain rates for which
they have been validated. This extrapolation may lead to overestimated strength at
high strain rates and it should, therefore, be considered to modify the descriptions at
high strain rates to limit this increase of strength.
In the case of shock wave transition, the model describes a weaker response than was
been observed in experiments for stress levels below about - 5 GPa, a consequence of
the description of the elastic stiffness which in the model remains constant also during
plastic compaction, while it increases in reality. Thus, an improved description of the
elastic stiffness during compaction would further improve the capability of the model
to describe the concrete material behaviour under high dynamic 	loading. The
description of damage in the case of compressive loading with high confining
pressures should be further investigated since the current description leads to a weaker
response than may be expected in these cases.
Thus, in order to further increase the capability of the model to describe the behaviour
of concrete subjected to high dynamic loading, the descriptions of the damage
accumulation and elastic stiffness during plastic compaction should be modified. Even
though 	some 	principles 	for 	possible 	modifications 	have 	been 	presented,
implementation and further evaluation of these modifications have not been part of
the work presented in this thesis.
7.2 	Suggestions for future research
It is believed that the CDPM2 can be used in future applied numerical studies of the
response of concrete structures in the case of blast and fragment loading. However,
the current version of the CDPM2 should first be somewhat modified to more
correctly describe the behaviour of concrete in the case of high dynamic loading.

-- 91 of 107 --

CHALMERS, Civil and Environmental Engineering	76
Thereafter, the model should be evaluated at a material and thereafter at a structural
level. Once the model has been validated at both a material and a structural level the
model can be used for applied studies.
In both Papers I and II, the limited possibility of adapting and modifying the RHT
model in AUTODYN to take into account the effects of fibres, and improving the
description of tensile failure have made it difficult to arrive at conclusions of
qualitative character. With the CDPM2, these restraints are believed to be solved and
these simulations may be conducted with the new model to attain quantitative results.
The effects of combined blast and fragment loading should be further studied to
extend the understanding for the different phenomena involved. In Paper II the
fragment loading was highly idealised and it was assumed that the fragments were
uniformly distributed over the structure. A future study might preferably involve
variations of the fragment loading where the distribution of fragments over the
structure was varied and the effect of this would be observed. Further, in the study
presented the reinforcement was modelled as beam elements with full interaction with
surrounding concrete elements. It may thus be of interest to also study the effect of
reinforcement modelling on the structural response. The reinforcement may be
modelled as solid elements, and interface elements may be used to describe the bond
strength between the elements representing reinforcement bars and surrounding
concrete, respectively.
The use of different types of concrete to optimise the design of protective structures,
e.g. normal, fibre-reinforced, and high strength concrete, is also of interest for future
studies. Such a study may involve investigations of how the various types of concrete
may be used in different areas of a structure to best use their specific material
characteristics. Moreover, damage of protective structures may be of different degrees
and causes. However, if the protective capability were considered to be lowered to
such a degree that the requirements would no longer be fulfilled, repair of the damage
may be required. Potential solutions for safe repairs of protective structures are,
therefore, a proposed subject for future research, and may also involve the use of
different types of concrete and special reinforcement detailing.
Numerical modelling is a useful tool to study the response of reinforced concrete
structures subjected to blast and fragment impacts. However, since this method
represents a mathematical approximation of the real behaviour, limited by different
assumptions and idealisations, its capability to describe physical behaviour should be
under constant evaluation. Often this requires validation by experimental results. If
relevant experiments have not been reported in the open literature, it may be
necessary to conduct such experiments. Further, improvements of the numerical
techniques or models apart from those pointed out here may also be required.

-- 92 of 107 --

CHALMERS, Civil and Environmental Engineering 	77
8 	References
ACI 	544 	(1996): 	State-of-the-Art 	Report 	on 	fibre 	Reinforced 	Concrete. 	ACI
Committee 544 Report 544.1R-96, American Concrete Institute, Detroit, USA.
Asay, J. R. and Shahinpoor, M. (1993): High-pressure shock compression of solids,
Springer-Verlag, New York, NY, USA.
ASCE (1999): Structural Design for Physical Security – State of the Practice. Task
committee: Conrath, E.J. et al., American Society of Civil Engineers.
AUTODYN (2005): AUTODYN Theory Manual, Revision 4.3. Century Dynamics
Inc., Concord, CA, USA.
Bai, W., Cui, Y., Wang, Q., Guan, J., and Zhang J. (2012): Study on Damage
Evolution Mechanism of Concrete under Uniaxial Tension. Applied Mechanics and
Materials, Vol. 238 2012, pp. 46-50.
Bischoff P. H. and Perry, S. H. (1991): Compressive behaviour of concrete at high
strain rates. Materials and Structures, Vol. 24, pp. 425-450.
Borrvall, T. and Riedel, W. (2011): The RHT concrete model in LS-DYNA. 8th
European 	LS-DYNA 	users 	conference, 	May, 	2011, 	Strasbourg, 	France.
(http://dynalook.com)
Boslough, M. B. and Asay, J. R. (1993): Basic principles of shock transition. High-
pressure shock compression of solids, Springer-Verlag, New York, NY, USA, pp.
7-42.
Brara, A. and Klepaczko, J. R. (2007): Fracture energy of concrete at high loading
rates in tension. International Journal of Impact Engineering, Vol. 34, No. 3,
pp. 424-435.
CEB (1988): Concrete structures under impact and impulsive loading. CEB Bulletin
d’Information No. 187, Lausanne, Switzerland.
CEB (1993) CEB-FIP Model Code 1990, Design Code. Thomas Telford, Lausanne,
Switzerland.
Çengel, Y. and Boles, M.A., (2006): Thermodynamics: An engineering approach (5th
edition). McGraw-Hill, Boston, MA, USA.
Chen, W. F. (2007): Plasticity in reinforced concrete. J. Ross Publishing, Inc., Fort
Landerdale, FL, USA. (Unabridged republication of the work originally published
by McGraw-Hill, New York, 1982.)
Curran, D. R. (1997): Simple fragment size and shape distribution formulae for
explosively fragmenting munitions. International Journal of Impact Engineering,
Vol. 20, 1997, pp. 197-208.

-- 93 of 107 --

CHALMERS, Civil and Environmental Engineering	78
Drucker, D. C. and Prager, W. (1952): Soil mechanics and plasticity analysis or limit
design. Quarterly of Applied Mathematics, Vol. 10, pp. 157-165.
Eibl, J. and Ockert, J. (1996): Problems concerning constitutive laws for shock waves
in concrete. Proceedings of the Specialty Symposium on Structures Response to
Impact and Blast – Theory, Experiments & Practice, Tel Aviv, Israel, pp. 174-183.
Field, J. E., Walley, S. M., Proud, W. G., Goldrein, H. T. and Siviour, C. R. (2004):
Review of experimental techniques for high strain rate deformation and shock
studies. International Journal of Impact Engineering, Vol. 30, pp. 725-775.
Gabet, T. (2006): Comportement triaxial du béton sous fortes contraintes: Influence
du trajet de chargement. Doctoral Thesis. Joseph Fourier University, Grenoble,
France.
Gebbeken, N., Greulich and Pietzsc A. (2001): Performance of concrete based
building 	materials 	against 	blast 	impact. 	Proceedings 	of 	the 	fib-Symposium,
concrete and Environment, 3-5 October 2001, Berlin, Germany.
Gebbeken, N., Greulich, S., and Pietzsch A. (2006): Hugoniot properties for concrete
determined by full-scale detonation experiments and flyer-plate-impact tests.
International Journal of Impact Engineering, Vol. 32, pp. 2017-2031.
Gebbeken, N. and Ruppert, M. (2000): A new material model for concrete in high-
dynamic hydrocode simulations. Archive of Applied Mechanics, Vol. 70, pp. 463-
478.
Girhammar, U. A. (1990): Brief review of combined blast and fragment loading
effects. Report C7:90. National Fortification Administration, Eskilstuna, Sweden.
Grady, D. E. (1993): Impact Compression Properties of Concrete. Proceedings of the
Sixth International Symposium on Interaction of Nonnuclear Munitions with
Structures, May 3-7 1993, Panama City Beach, Florida, USA, pp. 172-175.
Grady, D. E. (1996): Shock Equation of State Properties of Concrete i Structures
under Shock and Impact IV. (Edited by N. Jones et al.), Computational Mechanics
Publications, Southampton, UK, pp. 405-414.
Grassl, P. (2011): CDPM2: A damage-plastic approach to model the dynamic failure
of concrete. Research Report GUCE2011PG02, School of Engineering, University
of Glasgow, Glasgow, United Kingdom.
Grassl, P. and Jirásek, M. (2006): Damage-plastic model for concrete failure.
International Journal od Solids and Structures, Vol. 43, pp. 7166–7196.
Greulich, 	S. 	(2004): 	Zur 	numerischen 	Simulation 	von 	Stahlbeton- 	und
Faserbetonstrukturen unter Detonationsbeanspruchung.. Doctoral Thesis. Fakultät
für 	Bauingenieur- 	und 	Vermessungswesen, 	der 	Universität 	der 	Bundeswehr
München, Munich, Germany.

-- 94 of 107 --

CHALMERS, Civil and Environmental Engineering 	79
Gylltoft, K. (1983): Fracture Mechanics Models for Fatigue in Concrete Structures.
Doctoral 	Thesis. 	Division 	of 	Structural 	Engineering, 	Luleå 	University 	of
Technology, Luleå, Sweden, No. 1983:25:D.
Haddad, Y. M. (2000): Mechanical behavior of engineering materials, Volume 2:
Dynamic 	and 	intelligent 	material 	systems. 	Kluwer 	Academic 	Publishers,
Dordrecht, Netherlands.
Hall, C. A., Chhabildas, L. C. and Reinhart, W. D. (1998): Shock Hugoniot and
release states in concrete mixtures with different aggregate sizes from 3 to 23 GPa.
AIP Conference Proceeding, Vol. 429, American Institute of Physics, pp. 119-122.
Hansson, H. (2002): Modelling of concrete perforation. Proceedings of the 7th
International conference on Structures Under Shock and Impact, SUSI VII, May
2002, Montreal, Canada, pp.79-90.
Hartmann, T., Pietzsch, A. and Gebbeken, N. (2010): A hydrocode material model for
concrete. International Journal of Protective Structures, Vol. 1, No 4, pp.443-468.
Herrmann, W. (1969): Constitutive equation for the dynamic compaction of ductile
porous materials. Journal of Applied Physics, Vol. 40, pp.2490-2499.
Hiermaier, S.J. (2008): Structures under crash and impact: Continuum mechanics,
discretization and experimental characterisation. Springer Science + Business
Media, LLC, New York, NY, USA.
Hillerborg, A. (1985): Theoretical basis of a method to determine the fracture energy
GF of concrete. Materials and Structures, Vol. 18, pp. 291-296.
Imran, I. (1994) Applications of non-associated plasticity in modelling the mechanical
response of concrete. PhD thesis, University of Toronto, Toronto, Canada.
Imran, I. and Pantazopoulou, S. J. (1969): Experimental study of plain concrete under
triaxial stress. ACI Materials Journal, Vol. 93, pp.589-601.
Jirásek, M. (2006): Modelling of Localized Inelastic Deformation. Lecture notes.
Czech Technical University, Prague, Czechia.
Johansson, M. (2000): Structural Behaviour in Concrete Frame Corners of Civil
Defence Shelters, Non-linear Finite Element Analyses and Experiments. Doctoral
Thesis. Department of Structural Engineering, Division of Concrete Structures,
Chalmers University of Technology, Publication no. 00:2, Göteborg, Sweden.
Johansson, M. (2012): Luftstötvåg. (Blast wave. In Swedish), MSB, Publication no.
MSB448, Karlstad, Sweden.
Johansson, M. and Laine, L. (2012): Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport1: Last av luftstötvåg (The capacity of buildings
to resist severe dynamic loading, Part 1: Blast wave loading, In Swedish). MSB,
Karlstad, Sweden.

-- 95 of 107 --

CHALMERS, Civil and Environmental Engineering	80
Johnson, G. R., Holmquist, T. J. and Cook, W. 	H. (1993): A computational
constitutive model for concrete subjected to large strains, high strain rates, and
high pressures. Proceedings of the 14th International Symposium on Ballistics, 26-
29 September, 1993,Québec, Canada, pp. 591-600.
Khan A. S. and Huan S. (1995): Continuum Theory of Plasticity. John Wiley & Sons,
Inc., USA.
Krauthammer, 	T. 	(2006): 	Modern 	Protective 	Structures, 	Design, 	analysis 	and
evaluation. Course notes. The Pennsylvania State University, Pennstate, PA, USA.
Kupfer, H., Hilsdorf, H. K., and Rüsch, H. (1969): Behavior of concrete under biaxial
stresses. Journal of the American Concrete Institute, Vol. 66, No. 8, pp.656-666.
Leppänen, J. (2003): Numerical simulation of projectile penetration in concrete.
Nordic Concrete Research, Vol. 30, pp. 84-103.
Leppänen, J. (2004): Concrete Structures Subjected to Fragment Impacts – Dynamic
Behaviour and Material Modelling. Doctoral Thesis. Department of Structural
Engineering and Mechanics, Division of Concrete Structures, Chalmers University
of Technology, Publication no. 04:4, Göteborg, Sweden.
Leppänen, 	J. 	(2006): 	Concrete 	subjected 	to 	projectile 	and 	fragments 	impacts:
Modelling of crack softening and strain rate dependency in tension. International
Journal of Impact Engineering, Vol. 32, pp. 1828-1841.
Leppänen, J. (2012): Splitterverkan. (Fragment load effect. In Swedish), MSB,
Publication no. MSB345, Karlstad, Sweden.
Li, Q. M., Reid, S. R, Wen, H. M. and Telford, A. R. (2005): Local impact effects of
hard missiles on concrete targets. International Journal of Impact Engineering,
Vol. 32, 2005, pp. 224-284.
Linse, 	D. 	and 	Aschl, 	H. 	(1976): 	Versuche 	zum 	verhalten 	von 	beton 	unter
mehrachsiger beanspruchung. Research report, Technical University Munich,
Germany.
LS-DYNA (2012): Keyword user’s manual version 971. Vol.1 and 2, Livermore
Technology Software Corporation, Livermore, California, USA.
Lubliner, J. (2008): Plasticity theory. Dover Publications Inc. Mineola, NY, USA.
Löfgren, I. (2005): Fibre-reinforced Concrete for Industrial Construction – a fracture
mechanics approach to material testing and structural analysis. Doctoral Thesis.
Department 	of 	Civil 	and 	Environmental 	Engineering, 	Division 	of Structural
Engineering, Chalmers University of Technology, Göteborg, Sweden.
Magallanes, 	J. 	M, 	Wu, 	Y., 	Malvar, 	J. 	and 	Crawford, 	J. 	E. 	(2010): 	Recent
improvements to release III of the K&C concrete model. 11th International LS-
DYNA users conference, June, 2010, Detroit, USA.

-- 96 of 107 --

CHALMERS, Civil and Environmental Engineering 	81
Magnusson, 	J. 	and 	Hansson, 	H. 	(2005): 	Simuleringar 	av 	explosionsbelastade
betongbalkar – en principstudie. (Numerical simulations of concrete beams – a
principal study, in Swedish) National Defense Research Establishment (FOI), FOI
Report 1686—SE, Tumba, Sweden.
Malvar, L. J., Crawford, J. E. and Wesevich, J. W. (1994): A new concrete material
model for DYNA3D. Report no. TM 94-14, Karagozian and Case, Glendale, CA,
USA.
Malvar, L. J., Crawford, J. E., Wesevich, J. W. and Simons, D. (1997): A plasticity
concrete 	material 	model 	for 	DYNA3D. 	International 	Journal 	of 	Impact
Engineering, Vol. 19, No. 9-10, pp. 847-893.
Malvar, L. J. and Ross, C. A. (1998): Review of Strain Rate Effects for Concrete in
Tension. ACI Materials Journal, Vol. 95, No. 6, pp. 735-739.
Marchans, K. A., Nash, P. T. and Cox, P: A. (1989): Synergism in combined blast and
fragment loadings: Can it be defined?. Proceedings of the Special Conference of
Structures 	for 	Enhanced 	Safety 	and 	Physical 	Security, 	8-10 	March 	1989,
Arlington, VA, USA, American Society of Civil Engineers, New York, NY, USA,
pp. 106-117.
Marchand, K. A., Vargas, M. M. and Nixon, J. D. (1992): The synergistic effects of
combined blast and fragment loadings. Southwest Research Institute, San Antonio,
TX, USA.
Meyers, M. A. (1994): Dynamic behaviour of materials. John Wiley & Sons, Inc.,
New York, USA.
Mills, L. L. and Zimmerman, R. M. (1970): Compressive strength of plain concete
undermultiaxial loading conditions. ACI Journal, Vol. 67, pp. 802-807.
MSB (2011): Skyddsrum SR09. Med tillägg 2011. (Shelter Regulations SR09. With
supplements 2011, in Swedish). (Edited by Ekengren B).MSB, Karlstad, Sweden.
Murray, Y. D. (2007): User’s Manual for LS-DYNA Concrete Material Model 159.
U.S. Department of Transportation, Federal Highway Administation, Report No.
FHWAHRT-05-062, Georgetown Pike McLean, VA, USA.
Nataraja, M. C., Nagaraj, T. S. and Basavaraja, S. B., (2005): Reproportioning of steel
fibre reinforced concrete mixes and their impact resistance. Cement and Concrete
Research, Vol. 35, pp. 2350-2359.
Nyström, U. (2008): Concrete structures subjected to blast and fragment impacts:
Numerical 	simulations 	of 	reinforced 	and 	fibre-reinforced 	concrete. 	Doctoral
Thesis. Department of Civil and Environmental Engineering, Division of Structural
Engineering, Concrete Structures, Chalmers University of Technology, Publication
no. Lic 2008:4, Göteborg, Sweden.
Nyström, U. and Leppänen, J. (2006): Numerical Studies of Projectile Impacts on
Reinforced Concrete. Proceedings of the 2nd International Conference on Design

-- 97 of 107 --

CHALMERS, Civil and Environmental Engineering	82
and Analysis of Protective Structures 2006, 13-15 November, 2006, Singapore, pp.
310-319.
Ong, K. C. G., Basheerkhan, M. and Paramasivam, P., (1999): Resistance of fibre
concrete slabs to low velocity projectile impact. Cement and Concrete Research,
Vol. 21, pp. 391-401.
Osborn, J. J, Matuska, D. A. and Durrett, R. E. (1982): Hull user guide for three-
dimensional 	linking 	with 	EPIC3. 	Report 	no. 	ARBRL-CR-00484, 	Orlando
Technology, Inc., Shalimar, FL, USA.
Ottosen, N. S. (1979): Constitutive model for short-time loading of concrete. Journal
of the Engineering Mechanics Division, Vol. 105, No. 1, pp. 127-141.
Patzák, B. and Bittnar, Z. (2001): Design of object oriented finite element code.
Advances in Engineering Software, Vol. 32, No. 10-11, 2001, pp. 759-767.
Ramesh, K. T. (2008): High rates and impact experiments. Springer handbook of
experimental solid mechanics, Springer, New York, NY, USA, pp. 929-959.
Riedel, W. (2000): Beton unter dynamischen Lasten, Meso- und makromechanishe
Modelle und ihre Parameter. Doctoral Thesis. Fakultät für Bauingenieur- und
Vermessungswesen, der Universität der Bundeswehr München, Munich, Germany.
Riedel, W., Kawai, N. and Kondo, K. (2009): Numerical assessment for impact
strength measurements in concrete materials. International Journal of Impact
Engineering, Vol. 36, pp. 283-293.
Rossi, P., van Mier, G. M., Toutlemonde, F., Le Maou, F., and Boulay C. (1994):
Effect of loading rate on the strength of concrete subjected to uniaxial tension.
Materials and Structures, Vol. 27, pp. 260-264.
Räddningsverket (1994): Shelter Regulations SR-English Edition. Swedish Rescue
Services Agency, Karlstad, Sweden.
Scholz, U., Nechvatal, D., Aschl, H., Linse, D., Stöckl, S., Grasser, E., and Kupfer, H.
(1995): 	Versuche 	zum 	verhalten 	von 	beton 	unter 	dreiachsiger
kurzzeitbeanspruchung. Heft 447, Deutscher Ausschuss für Stahlbeton, Heft 447,
Berlin, Germany, pp.7-63.
Schuler, H. (2004): Experimentelle und numerische Untersuchungen zur Schädigung
von stroßbeanspruchtem Beton. Doctoral Thesis. Fakultät für Bauingenieur- und
Vermessungswesen, der Universität der Bundeswehr, Munich, Germany.
Schwer, L. E. and Murray, Y. D. (1994): A three-invariant smooth cap model with
mixed hardening. International Journal for Numerical and Analytical Methods in
Geomechanics, Vol. 18, No. 10, pp. 657-688.
Smith, S. H. (1987): On fundamental aspects of concrete behavior. Master's thesis,
University of Colorado, Boulder, Colorado, USA.

-- 98 of 107 --

CHALMERS, Civil and Environmental Engineering 	83
Tham, C. Y. (2006): Numerical and empirical approach in predicting the penetration
of a concrete target by an ogive-nosed projectile. Finite Elements in Analysis and
Design, Vol. 42, pp. 1258-1268.
U.S. Army (1992): Fundamentals of Protective Design for Conventional Weapons.
Technical Manual TM 5-855-1.
van Mier, J. G. M. (1984): Strain-softening of concrete under multiaxial loading
conditions. Doctoral Thesis. Technische hogeschool Eindhoven, The Netherlands,
348 pp.
Vu, X. H., Malecot, Y., Daudeville, L. and Bozaud, E. (2009): Experimental analysis
of concrete behavior under high confinement: Effect of the saturation ratio.
International Journal of Solids and Structures, Vol. 46, pp. 1105-1120.
Weerheijm, J. (1992): Concrete under impact tensile loading and lateral compression.
Doctoral Thesis, Delft University of Technology, Delft, Netherlands.
Weerheijm, J., and van Doormaal J. C. A. M. (2007): Tensile failure of concrete at
high 	loading 	rates: 	New 	test 	data 	on 	strength 	and 	fracture 	energy 	from
instrumented spalling tests. International Journal of Impact Engineering, Vol. 34,
pp. 609–626.
William, K. J. and Warnke, E. P. (1975): Constitutive model for the triaxial behavior
of concrete. Proceedings of the International Association for Bridge and Structural
Engineering: 	Seminar 	on 	Concrete 	Structures 	Subjected 	to 	Triaxial 	Stress,
Bergamo, Italy, Vol. 19, pp. 174–186.
Williams E. M., Akers, S. A., and Reed P. A. (2006): Laboratory Characterization of
SAM-35 Concrete. Geotechnical and Structures Laboratory, U.S. Army Engineer
Research 	and 	Development 	Center, 	Publication 	no. 	ERDC/GSL 	TR-06-15,
Vicksburg, MS, USA.
Yan, D. and Lin, G., (2006): Dynamic properties of concrete in direct tension. Cement
and Concrete Research, Vol. 36, pp. 1371-1378.
Zel’dovich, Ya. B. and Raizer, Yu. P. (1966): Physics of shock waves and high-
temperature hydrodynamic phenomena. Vol. 1. Academic Press, Inc., New York,
USA.
Zel’dovich, Ya. B. and Raizer, Yu. P. (1967): Physics of shock waves and high-
temperature hydrodynamic phenomena. Vol. 2. Academic Press, Inc., New York,
USA.
Zhenguo, T. and Yong, L. (2010): Modifications of the RHT material model for
improved numerical simulation of dynamic response of concrete. International
Journal of Impact Engineering, Vol. 37, pp. 1072-1082.
Zollo, R. F. (1997): Fibre-reinforced concrete: an Overview after 30 Years of
Development. Cement and Concrete Composites, Vol. 19, No. 2, pp. 107-122.
Zukas, J. A. (2004): Introduction to hydrocodes. Elsevier, Amsterdam, Netherlands.

-- 99 of 107 --



-- 100 of 107 --

CHALMERS, Civil and Environmental Engineering 	A.1
Appendix A 	Equation of States for solids
Brief descriptions of the Linear, Polynomial, Mie-Grüneisen, and Herrmann’s P ‒ α,
Equations of States are given in this appendix. More comprehensive descriptions are
given in e.g. AUTODYN (2005), LS-DYNA (2012), and Meyers (1994).
A.1 	Linear
As the name suggests, this Equation of State is a linear relation between the pressure
p, and specific volume v, (or pressure and density ρ, or pressure and compaction μ);
see Figure A.1. It is described by means of the (adiabatic) bulk modulus K according
to:



	 K	K
v
v
K	p 	




 	
	




 		

0
0 (A.1)
Since the pressure does not depend on the specific internal energy (or temperature) it
assumes isothermal processes.
Due to the linearity of this Equation of State, it cannot be used to describe plastic
compaction and the formation of shock waves due to dispersion effects. Further, due
the isothermal assumption, energy dissipation due to shock heating is not considered.
It is therefore to be used under conditions where these effects do not have to be
considered, e.g. in the region of initial elastic deformation for porous materials or for
metals where the compaction curve under certain circumstances may be approximated
as linear.
Figure A.1 	Linear Equation of State.
A.2 	Polynomial
A commonly used Polynomial Equation of State is:
 	 	e	B	B	K	K	K	p 	0	1	0
3
3
2
2	1	
		
	
	
 					 	(A.2)
where μ is the compaction, K1 , K2 and K3 are polynomial constants, B0 and B1 are
constants to describe the variation of pressure with the specific internal energy e, and
ρ0 is the initial density of the material.
p
μ
K

-- 101 of 107 --

CHALMERS, Civil and Environmental Engineering	A.2
The first three terms in equation (A.2) represent a cubic description of a pressure-
compaction curve for a reference specific internal energy of e = 0, and the last term
describes the variation of the pressure in the neighbourhood of this reference line; see
Figure A.2. The pressure changes linearly with the specific internal energy along
isochors (if both B0 and B1 are nonzero), but depending on the choice of the constants
B0 and B1 the magnitude of the change in pressure due to specific internal energy may
vary with the compaction. The following cases can be distinguished (see also
Figure A.2):
 	B0 = B1 = 0
Pressure is independent of specific internal energy.
3
3
2
2	1	
	
	
 	K	K	K	p 			 	(A.3)
 	B0 ≠ 0, B1 = 0
Pressure varies linearly with specific internal energy, but this increase is
independent of the density, i.e. the increase of pressure along isochors
(constant volume) is constant.
e	B	K	K	K	p 	0	0
3
3
2
2	1	
	
	
	
 				 	(A.4)
 	B0 ≠ 0, B1 ≠ 0
Pressure varies linearly with specific internal energy, and the increase of
pressure along isochors varies linearly with the density.
o 	B0 = B1 ≠ 0
e	B	K	K	K	p	
	
	
	
 	0
3
3
2
2	1 				 	(A.5)
o 	B0 ≠ B1 ≠ 0
 	e	B	e	B	K	K	K	p 	0	1	0	0
3
3
2
2	1	
	
	
	
	
	
 						 	(A.6)
The influence of the constants B0 and B1 on the pressure is schematically shown in
Figure A.2. However, in this figure the density is used as the volumetric measure
instead of the compaction used in equation (A.2). These are related according to:
1
0
	


 	(A.7)
Often the Polynomial Equation of State is fitted to an experimentally determined
Hugoniot curve. Since e = 0 is assumed when defining the material constants K1 , K2 ,
and K3 in equation (A.2), the equation has to be adapted if the Hugoniot curve is to be
used as reference curve. The polynomial formulation is then changed to:
 	 	 		H	0	1	0
3
3
2
2	1 	e	e	B	B	K	K	K	p 						
		
	
	
	 	(A.8)
where eH is the specific internal energy for the Hugoniot curve.

-- 102 of 107 --

CHALMERS, Civil and Environmental Engineering 	A.3
Figure A.2 	Influences of parameters B0 and B1 in Polynomial Equation of State.
A.3 	Mie-Grüneisen
In the same way as in the Polynomial Equation of State, described in the previous
section, a reference curve pref (e.g. the “cold curve”, pcold , with eref = 0 or the Hugoniot
curve, pH, with eref = eH) is used together with an assumption of the equilibrium states
in the surrounding of this curve; see equation (A.9). The variation of the pressure with
respect to the specific internal energy is in the Mie-Grüneisen Equation of State
described by the so-called Grüneisen parameter, Γ. This parameter was derived after
theoretical studies of the macroscopic material behaviour as a function of distance-
dependent inter-atomic forces. In a marcroscopic approach the Grüneisen parameter
can be defined as a measure of the change in pressure produced by a change in system
total internal energy under condition of constant volume; see equation (A.10).
   	 	   		ref	ref	ref	ref 	e	e	v	Γ	p	e	e
v
v	Γ
p	p 						
	 	(A.9)
  v	e
p
v	v	Γ 	







 	(A.10)
The second term in equation (A.9) is related to the thermal energy, and the Grüneisen
parameter may be related to the physical material parameters:
 	adiabatic bulk modulus, K
 	thermal volume expansion coefficient, αtherm
 	specific heat capacity at constant pressure, cp
as:
  p	c
K
v	v	Γ

 	(A.11)
ρ
B0=B1≠0
B0≠0, B1=0
B0=B1=0
B0≠B1≠0 	p
e 	ρ
p
B0 ρ0 e
B0 (ρ - ρ0) e
B0 ρ0 e	
B0 ρ e	
B1 (ρ - ρ0) e
B0≠B1≠0
B0=B1≠0
B0≠0, B1=0
B0=B1=0

-- 103 of 107 --

CHALMERS, Civil and Environmental Engineering	A.4
The dynamic value of the Grüneisen is often assumed to be:
0	0
	
 	Γ	Γ 	 	(A.12)
where 	index 	0 	refer 	to 	ambient 	condition 	(at 	room 	temperature). 	Under 	this
assumption, equation (A.9) can be rewritten as:
 		ref	0	0	ref 	e	e	Γ	p	p 			
	 	(A.13)
If a polynomial (cubic) fit to a reference pressure curve is assumed equation (A.13)
equals equation (A.5) if:
 	
		1	0	0 	B	B	Γ 		 	(A.14)
A.4 	Herrmann’s P ‒ α
Herrmann (1969) formulated an Equation of State for compressed porous materials by
relating its response to the response of the non-porous states of the same material.
This is done by introducing a factor αpor in the Equation of State. This factor is
representing the porosity of the material as:


 s
s
por 		 v
v (A.15)
where v is the specific volume of the material and vs is the specific volume of the solid
(none porous) material and ρ and ρs are the related densities. The Equation of State for
the porous material is then:








 	e
v
f	p 	,
por	
 (A.16)
where the function f is the same as in the Equation of State for the fully compacted
material, p = f (vs ,e). This function can be any other Equation of State, e.g. the
Polynomial or Mie-Grüneisen, described in Sections A.2 and A.3, respectively.
In order to complete the P ‒ α Equation of State the porosity factor has to be defined.
Theoretically the porosity factor is a function of both the pressure and the specific
internal energy, i.e.:
 		e	p	g 	,	por 
	 	(A.17)
However, for practical reasons (i.e. lack of data) it is often defined as a function of
pressure only:
 		p	g		por	
 	(A.18)

-- 104 of 107 --

CHALMERS, Civil and Environmental Engineering 	A.5
Basically, arbitrary functions g(p) may be chosen, but these must fulfil some
mathematical requirements, i.e.:
0	1
0	1	0
0
por
por	s
por
por	init	por,	s
init	por,
por
init	por,	por
		
				
			
dp
d
p	p
dp
d
p	p
dp
d
p




	


	
(A.19)
where αpor,init is the initial value of the porosity factor and ps is the pressure for which
all pores have collapsed; see Figure A.3.
Since the behaviour of ductile porous materials often is close to linear elastic for low
hydrostatic pressures, but highly nonlinear for pressures exceeding a plastic threshold
pel , αpor is often divided into two different regimes; elastic αpor,e, and plastic αpor,p .
 	
 	
 	






	
	

1	for	1
1	for
for
por
por	el	por,	p	por,
el	por,	por	init	por,	e	por,
por


	
	

	
	
	
 	p
p
p 	(A.20)
In the initial elastic region the porosity parameter is:
 	 	 	 




 	
		
el
el
el	por,	init	por,	el	por,	e	por, p
p	p
p	

	
	
	 	(A.21)
where αpor,init, αpor,el and pel are defined in Figure A.3. The porosity factor αpor,el,
representing the plastic threshold, is:
 	
dp
p	d
p e	por,
el	init	por,	el	por,


	 		 	(A.22)
and dαpor,e(p) / dp can be expressed by means of the bulk sound speed in the virgin
porous material (ce) and the solid material (c0 ), respectively, and the bulk modulus of
the pore free solid material (K0 ):
 	
 	2
0	el	por,
2
e	el	por,
0	e	e	por,
c	c
K	c
dp
p	d

	


 	(A.23)
Often a polynomial expression is used to define the porosity parameter in the plastic
region, i.e:
n
n
3
3
2
2	1	0	p	por, 	)	( 	p	p	p	p	p	
	
	
	
	
	
 						 	 	(A.24)

-- 105 of 107 --

CHALMERS, Civil and Environmental Engineering	A.6
a) 	b)
Figure A.3 	Schematic illustrations of a) compaction behaviour of solid and porous
material, respectively, and b) the P ‒ α model.
ps
pel
Compaction path for
porous material
Compaction 	path 	for
solid material (pore free)
Pressure, p
αpor,init
ps
pel
Specific volume, v 	αpor,el	1
Pressure, p
Porosity factor, αpor

-- 106 of 107 --

CHALMERS, Civil and Environmental Engineering 	B.1
Appendix B 	Conversion to true strains and stresses
A strain increment for a one-dimensional case may be expressed as:
L
dL
d 	
	 	(B.1)
where	
	d 	and dL 	are infinitesimal changes of strain
 	and specimen length L ,
respectively. By integrating this expression from the initial length L0 to the final
length Lfinal the true strain, 	true	
 	, achieved during the deformation dL is expressed:
  	





		 	 0
final
true 	ln	ln final
0
final
0 L
L
L
L
dL 	L
L
L
L
 	(B.2)
In small strain theory it is assumed that the final length is approximately equal to the
initial length and the (engineering) strain, 	g	engineerin	
 	is calculated as:
0
0	final
0	0
g	engineerin
final
0
final
0
1	1
L
L	L
L
L
dL
L
L
L
L
L

		 	
	 	(B.3)
Thus, the conversion from engineering strain to true strain is:
 		1	ln 	g	engineerin	true 		
	
	 	(B.4)
Stress is defined as force F divided by the actual area A on which it acts; the true
stress (or Cauchy stress), 	true	
 	can thus in a one-dimensional case be expressed as:
A
F
	true	
 	(B.5)
In the theory of infinitesimal strains the actual area A is assumed to be approximately
equal to the initial area A0 and the engineering stress, 	g	engineerin	
 	is thus:
0
g	engineerin A
F

	 	(B.6)
However, contradictory to strain, the conversion from engineering to true values of
stress cannot be made without assumptions (or knowledge) about the transverse
response during deformation. If it is assumed that volume is preserved, i.e. that
L A = L0 A0 , the conversion from engineering stress to true stress is described as:
 		g	engineerin	g	engineerin
0	0
true 	1	

	
	 			 L
L
A
F
(B.7)

-- 107 of 107 --