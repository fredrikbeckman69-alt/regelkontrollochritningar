---
title: "Concrete Structures Subjected To Blast And Fragment Impact Lic"
category: "akademiska-avhandlingar"
originalFile: "skyddsrum/akademiska-avhandlingar/concrete-structures-subjected-to-blast-and-fragment-impact_lic.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","armering","explosion","splitterskydd","splitter","concrete","fragment"]
summary: "Concrete Structures Subjected to Blast and Fragment Impacts Numerical Simulations of Reinforced and Fibre-reinforced Concrete ULRIKA NYSTRÖM Department of Civil and Environmental Engineering Division of Structural Engineering, Concrete Structures ..."
---

Concrete Structures Subjected to Blast and
Fragment Impacts
Numerical Simulations of Reinforced and Fibre-reinforced Concrete
ULRIKA NYSTRÖM
Department of Civil and Environmental Engineering
Division of Structural Engineering, Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2008

-- 1 of 148 --



-- 2 of 148 --

THESIS FOR THE DEGREE OF LICENTIATE OF ENGINEERING
Concrete Structures Subjected to Blast and
Fragment Impacts
Numerical Simulations of Reinforced and Fibre-reinforced Concrete
ULRIKA NYSTRÖM
Department of Civil and Environmental Engineering
Division of Structural Engineering, Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2008

-- 3 of 148 --

Concrete Structures Subjected to Blast and Fragment Impacts
Numerical Simulations of Reinforced and Fibre-reinforced Concrete
ULRIKA NYSTRÖM
© ULRIKA NYSTRÖM, 2008
ISSN 1652-9146
Lic 2008:4
Department of Civil and Environmental Engineering
Division of Structural Engineering, Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover:
Numerical simulation result of wall-strip response when subjected to combined blast
and fragment loading.
Chalmers Reproservice
Göteborg, Sweden 2008

-- 4 of 148 --

I
Concrete Structures Subjected to Blast and Fragment Impacts
Numerical Simulations of Reinforced and Fibre-reinforced Concrete
ULRIKA NYSTRÖM
Department of Civil and Environmental Engineering
Division of Structural Engineering, Concrete Structures
Chalmers University of Technology
ABSTRACT
Concrete is widely used in design of protective structures due to its good energy-
absorbing characteristics under high pressures and, when properly reinforced, ductile
behaviour. Nevertheless, the response of concrete structures subjected to severe
dynamic loading differs from their static behaviour, on a structural level but also on a
material level. The addition of steel fibres in the concrete may improve the energy-
absorbing characteristics of plain concrete, which is especially true for the tensile
behaviour. The fracture energy for steel-fibre reinforced concrete may be many times
higher already for low dosages of fibres compared to plain concrete.
In design of protective structures it is important to identify the possible threats and
their risk of occurrence to be able to characterise the design loads. Often this involves
the effects of cased charges, i.e. combined blast and fragment loading. While the
structural behaviour for blast load and single fragment impacts is relatively well
understood, the response under combined loading, including the blast and multiple
impacts of fragments, is not yet clear.
The theoretical bases for concrete material behaviour, weapon load characteristics,
and their effect on the structural response are treated in this licentiate thesis. In
addition, 	three 	numerical 	studies 	are 	presented, 	whose 	aim is 	to 	increase 	the
understanding of impact and impulsive loading and the subsequent response of a
concrete element. The first numerical study was a comparative investigation of the
relative effect on the impact resistance when adding steel fibres to concrete. It was
concluded that the depth of penetration of the striking projectile was only slightly
influenced by the addition of fibres, while the sizes of the front- and rear-face craters
were decreased. The second numerical study involved combined blast and fragment
loading of a reinforced concrete wall strip, and it was seen that the total damage of the
wall strip subjected to the combined loads was highly related to the damage caused by
the fragment impact alone. Furthermore, the mid-point deflection in combined loading
was larger than the sum of mid-point deflections in blast and fragment loading,
indicating synergetic effects of the two loads. In the third numerical study the effect of
reinforcement on the projectile impact resistance was studied. It was concluded that
the presence of reinforcement may improve the impact resistance of the concrete if a
suitable reinforcement detailing is used.
Key words: Concrete, 	weapon 	effects, 	blast 	wave, 	fragment 	impact, 	numerical
simulations, fibre-reinforced concrete, reinforced concrete, SDOF

-- 5 of 148 --

II
Stötvågs- och Splitterbelastade Betongkonstruktioner
Numeriska Simuleringar av Armerad och Fiberarmerad Betong
ULRIKA NYSTRÖM
Institutionen för bygg- och miljöteknik
Avdelningen för konstruktionsteknik, betongbyggnad
Chalmers tekniska högskola
SAMMANFATTNING
Betong är, tack vare sin höga energiabsorberande förmåga vid höga tryck, samt vid
lämplig utformad armering, sega beteende, ett vida använt material inom byggandet
av skyddande konstruktioner. Vid extrem dynamisk belastning skiljer sig dock
beteendet hos betongen, på såväl konstruktions- som materialnivå, jämfört med
beteendet vid statisk belastning. Vid tillförsel av stålfibrer i betong ökar dess
energiabsorberande förmåga, vilket är speciellt tydligt i drag. Brottenergin för
stålfiberarmerad betong kan redan vid låga fiberdoser vara flerfaldigt gånger högre för
en stålfiberarmerad betong än för motsvarande betong utan fibrer.
Vid dimensionering av skyddskonstruktioner är det viktigt att identifiera möjliga hot
för 	att 	kunna 	karaktärisera 	det 	avgörande lastfallet. 	Ofta 	involverar 	dessa 	hot
explosioner av höljda laddningar, vilka resulterar i en kombinerad belastning av
stötvåg 	och 	splitter. 	Medan 	beteendet 	hos 	betongkonstruktioner 	utsatta 	för
stötvågsbelastning 	eller 	enskilda 	splitter 	är 	relativt 	välkänt 	är 	kunskapen 	om
kombinerad belastning av stötvåg och splittersvärm ännu oklar.
Den teoretiska grunden för betongens materialbeteende, karaktäristiska vapenlaster
och deras verkan på konstruktioner behandlas i sammanläggningssdelen i denna
licentiatuppsats. Därtill presenteras tre numeriska studier vars syfte är att öka
förståelsen för stöt- och impulsintensiva belastningar. Den första numeriska studien
var en jämförande studie av vilken relativ inverkan som tillsatts av stålfibrer i betong
har på dess motståndsförmåga mot projektilbelastning. Det kunde konstateras att
inträngningsdjupet var relativt opåverkat av fibertillsättningen medan kraterstorleken,
på både fram och baksidan av den beskjutna kroppen, minskade. I den andra studien
undersöktes responsen hos en armerad betongväggsstrimla vid kombinerad belastning
av stötvåg och splitter. Det kunde konstateras att den totala skadan i väggelementet
var starkt relaterat till skadan orsakad av enbart splitterbelastningen. Vidare framgick
att väggstrimlans mittnedböjning var större för det kombinerade lastfallet än för den
sammanlagda nedböjningen orsakad av stötvågs- respektive splitterbelastningarna
separat. Detta tyder på att det finns en synergieffekt för de kombinerade lasterna. I
den tredje studien undersöktes armeringens inverkan på betongens motståndsförmåga
vid projektilbeskjutning. Slutsatsen drogs att armeringen kan ha viss betydelse för
detta motstånd förutsatt att armeringen är lämpligt inlagd.
Nyckelord: 	Betong, vapenverkan, stötvåg, splitter, numeriska studier, fiberarmerad
betong, armerad betong, SDOF

-- 6 of 148 --

III
LIST OF PUBLICATIONS
This thesis is based on the work contained in the following papers, referred to by
Roman numerals in the text. In the case of more than one author, the contributions
from the authors to the work are given for each paper.
I. 	Nyström, 	U. 	and 	Gylltoft, 	K. 	(2008): 	Comparative 	numerical 	studies 	of
projectile impacts on plain and steel-fibre reinforced concrete. Submitted to
International Journal of Impact Engineering in April 2008.
Work done by Nyström, U., supervised by Gylltoft, K.
II. 	Nyström, U. and Gylltoft, K. (2008): Numerical studies of the combined effects
of blast and fragment loading. Submitted to International Journal of Impact
Engineering in April 2008.
Work done by Nyström, U., supervised by Gylltoft, K.
One conference paper has also been written within the frame of this work and is
referred to as Conference Paper.
Nyström, U. and Leppänen, J. (2006): Numerical Studies of Projectile Impacts
on Reinforced Concrete. Proceedings of the 2nd International Conference on
Design and Analysis of Protective Structures 2006, 13-15 November, 2006,
Singapore, pp. 310-319.
Work done by Nyström, U., supervised by Leppänen, J.

-- 7 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	IV
Contents
ABSTRACT 	I
SAMMANFATTNING 	II
LIST OF PUBLICATIONS 	III
CONTENTS 	IV
PREFACE 	VII
NOTATIONS 	VIII
1 	INTRODUCTION 	1
1.1 	Background 	1
1.2 	Aim of the thesis 	1
1.3 	Limitations 	2
1.4 	Outline of contents 	2
2 	CONCRETE MATERIAL BEHAVIOUR 	4
2.1 	Static and dynamic behaviour 	4
2.2 	Steel-fibre reinforced concrete 	8
3 	WEAPON CHARACTERISTICS 	11
3.1 	Blast load 	11
3.1.1 	Blast wave idealisation 	11
3.1.2 	Blast wave reflection 	13
3.2 	Fragments 	14
3.2.1 	Mass and size distribution 	14
3.2.2 	Fragment velocities 	15
3.2.3 	Fragment distribution in surroundings 	16
3.3 	Combined loading of blast and fragments 	16
4 	WEAPON EFFECTS ON REINFORCED CONCRETE 	18
4.1 	Modes of damage 	18
4.1.1 	Global response 	18
4.1.2 	Local response 	19
4.2 	Effect of reinforcement on response 	21
4.3 	Analysis tools for estimation of response 	21
4.4 	SDOF method 	22

-- 8 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	V
5 	NUMERICAL SIMULATIONS 	25
5.1 	Material models 	25
5.1.1 	RHT – constitutive model for concrete 	25
5.1.2 	Equation of state 	28
5.2 	Numerical solver technique 	29
5.3 	Mesh dependence 	30
6 	EFFECT OF STEEL FIBRES IN CONCRETE 	34
6.1 	Materials used in study 	34
6.2 	Limitations of numerical model 	35
6.3 	Validation and influence of simplifications 	36
6.4 	Comparative study of addition of fibres 	38
7 	BLAST AND FRAGMENT LOADING 	42
7.1 	Wall element and load characteristics 	42
7.1.1 	Design criteria for civil defence shelters in Sweden 	42
7.1.2 	Wall element 	43
7.1.3 	Loading definitions 	44
7.2 	Preliminary study 	46
7.2.1 	Blast loading 	47
7.2.2 	Fragment impact 	50
7.2.3 	Conclusions 	54
7.3 	SDOF analyses 	54
7.4 	Numerical analyses – main study 	57
7.4.1 	Results 	59
7.4.2 	Comparison with SDOF results 	60
7.4.3 	Study of scabbing crack 	63
8 	CONCLUSIONS 	65
8.1 	General conclusions 	65
8.2 	Further research 	66
9 	REFERENCES 	67
APPENDIX A 	EMPIRICAL EQUATIONS
APPENDIX B 	STEEL-FIBRE VOLUME FRACTION
APPENDIX C 	DESIGN FRAGMENT WEIGHT

-- 9 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	VI
PAPER I – PAPER II
I. 	Nyström, 	U. 	and 	Gylltoft, 	K. 	(2008): 	Comparative 	numerical 	studies 	of
projectile impacts on plain and steel-fibre reinforced concrete. Submitted to
International Journal of Impact Engineering in April 2008. 15 pp.
II. 	Nyström, U. and Gylltoft, K. (2008): Numerical studies of the combined effects
of blast and fragment loading. Submitted to International Journal of Impact
Engineering in April 2008. 16 pp.
CONFERENCE PAPER
Nyström, U. and Leppänen, J. (2006): Numerical Studies of Projectile Impacts
on Reinforced Concrete. Proceedings of the 2nd International Conference on
Design and Analysis of Protective Structures 2006, 13-15 November, 2006,
Singapore, pp. 310-319.

-- 10 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	VII
Preface
The work presented in this licentiate thesis was carried out between March 2006 and
April 2008 at Chalmers University of Technology, at the Department of Civil and
Environmental Engineering, Division of Structural Engineering, Concrete Structures.
The work was performed within the research project “Dynamic behaviour of concrete
structures subjected to blast and fragments” and is a continuation of earlier work on
concrete structures subjected to severe dynamic loading conducted at Chalmers
University of Technology by Morgan Johansson and Joosef Leppänen. The project is
financially supported by the Swedish Rescue Services Agency.
I would like to thank my supervisor and examiner, Prof. Kent Gylltoft, for his
guidance, for the valuable discussions and for his understanding and kind heart.
Further, I would like to thank my assistant supervisors, Dr. Morgan Johansson and
Dr. Joosef Leppänen, for sharing their knowledge and giving valuable advice with
great willingness to help. I would also like to extend my appreciation to M.Sc. Björn
Ekengren from the Swedish Rescue Services Agency, not only for his valuable
contribution to the work, but also for his words of wisdom about life and its school.
My colleagues at Structural Engineering, and especially Concrete Structures, are
thanked for their support, patience and warming smiles.
Finally, I thank my family for always being there, the princess Aurelie for giving joy
and Philip for bringing my hidden strengths to the surface.
Göteborg, April 2008
Ulrika Nyström

-- 11 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	VIII
Notations
Roman upper case letters
A 	Shape factor for failure surface in RHT material model
B 	Shape factor for residual strength surface in RHT material model
Bx 	Mott explosive constant
B0 , B1 	Material factors describing shape of curve in P-
α EOS
C 	Damping coefficient
C L 	Confidence level
D 	Damage factor
D1, D2 	Material parameters in expression for plastic failure strain
2E 	Gurney constant
FRate 	Describing strain-rate dependence in RHT material model
GF 	Fracture energy
K 	Stiffness
K1, K2 , K3 	Material factors describing shape of curve in P-
α EOS
L 	Length of test specimen or structural element
L f 	Fibre length
M 	Mass
MA 	Fragment distribution factor
MRd 	Moment capacity
M1 	Shape factor for residual strength surface in RHT material model
N 	Shape factor for failure surface in RHT material model
N f 	Total number of fragments with mass larger than mf
P(t) 	Pressure/force as a function of time
P+ Peak overpressure
P− Negative pressure
Pr
+ , Ps
+ Reflected and incident peak overpressure, respectively
P0 	Ambient pressure
R 	Internal resistance force
Rf 	Fragment travel distance
Rm 	Maximum internal resistance force
R3 (
θ) 	Describing third invariant dependence in deviatoric section
T + Duration of positive phase in pressure-time relation for blast load
T− Duration of negative phase in pressure-time relation for blast load
Vf 	Volume fraction of fibres
W 	Weight of explosive
W c 	Weight of bomb casing
W f 	Weight of design fragment
Y 	Yield strength
Yel 	Elastic limit surface in RHT material model
Y fail 	Failure surface in RHT material model
Y fric 	Residual strength surface in RHT material model
YTXC 	Compressive meridian in Y-p relation in RHT material model

-- 12 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	IX
Roman lower case letters
a1 	Initial slope of bi-linear crack-softening relation for FRC
a2 	Slope of second branch in bi-linear crack-softening relation for FRC
b2 	Intersection of the second branch with the y-axis in bi-linear crack-
softening relation for FRC
d i 	Average inside diameter of casing
e 	Internal energy
f c 	Concrete compressive strength
fs 	Concrete shear strength
ft 	Concrete tensile strength
ft.dyn 	Dynamic concrete tensile strength
ft.static 	Static concrete tensile strength
i+ Impulse intensity for positive phase in pressure-time relation for blast load
i− Impulse intensity for negative phase in pressure-time relation for blast
load
lel 	Length over which crack is smeared
m f 	Fragment mass
n 	Shape factor in P-
α EOS
n fibres 	Number of fibres per cm2
p 	Hydrostatic pressure
pcompaction 	Hydrostatic pressure for which the compaction of the material starts
p HTL 	Hydrostatic tensile limit
psolid 	Hydrostatic pressure for which the material is fully compacted
t 	Time
t a 	Time of arrival
t c 	Average casing thickness
u 	Displacement
u& 	Velocity
u&& 	Acceleration
el	u 	Maximum elastic displacement
v sf 	Fragment velocity at certain distance
v0 	Initial velocity of fragments
w 	Crack opening
w c 	Critical crack opening
Greek letters
α 	Adjusting factor for pressure decay of blast load
αcurrent 	Current porosity of material
α porous 	Porosity of undamaged material
δ 	Parameter describing strain-rate dependence of tensile strength in RHT
material model
ε 	Strain
εpl 	Plastic strain
εpl. failure 	Plastic failure strain

-- 13 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	X
εu 	Ultimate strain
ε& 	Strain rate
φ 	Diameter
κC 	Transformation factor for damping coefficient C
κM 	Transformation factor for mass M
κP 	Transformation factor for load P
κR 	Transformation factor for internal resistance force R
μ 	Normalised density
ρ 	Density
ρsolid 	Density of fully compacted material at zero pressure
ρ0 	Initial density
σ 	Stress
Abbreviations
DIF 	Dynamic increase factor
EOS 	Equation of state
FRC 	Fibre-reinforced concrete
GFRC 	Glass-fibre reinforced concrete
GP 	General purpose
NCS 	Normal strength concrete
NFRC 	Natural-fibre reinforced concrete
SDOF 	Single degree of freedom
SFRC 	Steel-fibre reinforced concrete
SNFRC 	Synthetic-fibre reinforced concrete
SIFCON 	Slurry infiltrated fibre concrete

-- 14 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	1
1 	Introduction
1.1 	Background
The load effect from detonation of a cased charge, such as a General Purpose bomb
(GP-bomb), includes blast and fragment impacts on the surrounding structures. Since
both the load generation (including formation of blast wave and fracture of the casing
into propagating fragments) and the structural response (local or global) when
subjected to these loads are complex, extensive work has been conducted around the
world to increase the knowledge of the phenomena involved. These studies have led
to various design and analysis methods – empirical, analytical and numerical – giving
estimations 	of 	the 	load 	characteristics 	or 	the 	structural 	response. 	Due 	to 	the
complexity of weapon loads and their effects, the generality of these methods is still
often limited. However, as more is elucidated and the knowledge within the area
increases, the methods are being improved. One aspect not yet well understood is the
combination of blast and fragment loading and the response caused by this.
Reinforced concrete is still one of the most common materials used in protective
structures, but the use of fibre-reinforced concrete increases. This is motivated by the
enhanced energy characteristics of fibre-reinforced concrete, compared to plain
concrete, which increase its impact and structural resistance. Since the behaviour of
fibre-reinforced concrete and normal reinforced concrete differs, analysis and design
methods existing for the latter are generally not directly applicable to fibre-reinforced
concrete. Due to the lack of experimental data and general knowledge of how the
addition of fibres affects the structural response when exposed to high dynamic loads,
there are very few methods that can be used to estimate the subsequent damage.
1.2 	Aim of the thesis
The project in which the work presented in this thesis has been conducted is a
continuation of a research project within a collaboration of many years’ duration
between Chalmers University of Technology and the Swedish Rescue Services
Agency. The long-term aim of the research project is to increase the knowledge of
reinforced concrete structures subjected to explosive loading, i.e. a combination of
blast wave and fragment loading. Earlier research within the framework of this
collaboration has involved experimental and numerical studies of concrete structures,
in 	particular 	civil 	defence 	shelters, 	by 	Plos 	(1995), 	Johansson 	(2000) 	and
Leppänen (2004). However, the blast and fragment loadings have until now been
studied separately.
The aim of this thesis is to give a basic knowledge of the field of concrete structures
subjected to explosive loading. This includes the basics of blast and fragment loads
and the characterisation of these, the material behaviour of concrete under high
dynamic loading and the modes of failure and damage mechanisms connected with
these events.

-- 15 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	2
1.3 	Limitations
The phenomena involved in explosive loading, from the explosions and fracturing of
the bomb casing and the subsequent load characteristics to the behaviour of the loaded
structure, on both material and structural levels, are very complex. Methods used for
estimation and characterisation of loads and structural responses caused by detonation
of cased charges involve idealisations and simplifications, often necessary in order to
make them generic enough. This implies limitations in the methods and the results
attained with these.
For explosions of bare charges, the resulting blast load is relatively well known and
therefore methods with high accuracy exist to characterise this load. For cased charges
the load characterisation is much more complex, since the mechanics of fracturing the
casing also influences the resulting loads. The methods for determining the resulting
blast load and fragment characteristics in these instances are therefore less accurate
due to the many idealisation and simplifications necessary. Accepted methods of
determining the load characteristics for cased charges are presented and used within
this work. However, the reader should be aware of their limitations.
The fragments used when simulating fragment cluster impacts are of the same
geometrical shape, size, velocity and mass, and are all assumed to have normal impact
with the same striking velocity. In reality all these parameters would vary between the
fragments, but in order to simplify the numerical model and be able to draw general
conclusions from the results these simplifications were necessary.
1.4 	Outline of contents
This thesis consists of an introductory part, two papers and one conference paper. The
introductory part gives a more comprehensive background to the subjects treated in
the papers.
In Chapter 2 the behaviour of concrete under static loading, and how this changes for
high dynamic loading, are presented. A brief description of the improved behaviour
when adding steel fibres into the concrete mix is given.
Chapter 3 gives general information about explosions and the characteristics of the
blast wave and fragments caused by it.
The effects of cased explosions, i.e. blast and fragments, on concrete elements are
described in Chapter 4. The results from the numerical study presented in the
Conference Paper, i.e. of how reinforcement bars affect damage caused by local
impact, is also discussed. Further, different methods to estimate the damage caused by
loads from cased explosions are presented. One of these methods, the single-degree-
of-freedom method, is described in more detail.
In Chapter 5 the numerical simulation method, also used to estimate the damage, is
described. This method is given a separate chapter due to its importance for the work
presented in this thesis.

-- 16 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	3
A numerical study of how the addition of steel fibres in concrete may affect the
projectile impact resistance is presented in Chapter 6 and Paper I.
The effects of blast and fragment loading, and a combination of these two, are
presented in Chapter 7 and Paper II.
Major conclusions and suggestions for further research are presented in Chapter 8.

-- 17 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	4
2 	Concrete Material Behaviour
Concrete is one of the most widely used building materials in the modern civil
infrastructure, due among other things to its low cost and wide field of application.
Because of its good energy-absorbing characteristics for high pressures and, when
properly reinforced, ductile behaviour it is also suitable for use in protective design.
The behaviour of concrete under high-rate loading differs from the static behaviour, a
fact that must be taken into account in the design and analysis of protective structures.
In order to improve the energy-absorbing characteristics of concrete, mainly in the
tensile range, fibres can be added to the concrete mix, resulting in better post-crack
behaviour.
2.1 	Static and dynamic behaviour
The behaviour of concrete under uni-axial compression and tension is nonlinear, but
can be approximated as linear up to about 30-40% and 70-75% of the ultimate
strengths, respectively. Thereafter, gradual softening (sometimes called pre-softening)
takes place until the ultimate strength is reached (see Figure 2.1), as shown for
instance by Bangash (1989), Riedel (2000) and CEB FIP (1999).
Figure 2.1 	Stress-strain relation, based on Bangash (1989).
The low tensile strength and brittle behaviour are two of the most pronounced
disadvantages of concrete. The tensile strength, ft, for normal-strength concrete is less
than one tenth of the compressive strength, f c. In tension it has a brittle behaviour, as
the ability to transfer stresses after fracture initiation decreases rapidly; see Figure 2.1.
The brittle behaviour can be seen also in compression, for concretes with higher
strengths, as the brittleness increases with an increasing ultimate strength. In tension
the stress-strain relation is often divided into a stress-strain relation and a stress-crack
opening relation, as seen in Figure 2.2. Here wc is the critical crack opening at which a
continuous crack has formed and no more stresses can be transferred. The stress-strain
(σ–ε) relation represents the pre-localisation behaviour while the stress-crack opening
(σ–w) relation describes the deformations occurring after fracture initiation. The area
- σ
+ σ
Compression
Tension 	ft
fc
- ε
+ ε

-- 18 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	5
under the curve in the stress-crack opening relation represents the fracture energy, GF.
L is the initial length of the tested concrete specimen.
Figure 2.2 	Stress-deformation relation for concrete in uni-axial tension, and how it
is separated into a stress-strain relation and a stress-crack opening
relation.
To facilitate analysis and design procedures, the crack-softening behaviour for
concrete in uni-axial tension is often simplified. The degree of simplification is
chosen in accordance with the required degree of accuracy of the results and in
relation to other simplifications made by the methods used. Several curves have been
proposed to describe the crack softening: polynomial or exponential (e.g. Hordijk-
Reinhard in Jirásek 2006), multi- or poly-linear, bi-linear (e.g. Gylltoft 1983) and
linear (AUTODYN 2005), as seen in Figure 2.3.
Figure 2.3 	Simplified crack opening curves for concrete.
Under multi-axial stress states, often occurring in structural elements, the behaviour
differs from the uni-axial behaviour. Confined concrete is stiffer and stronger in
compression than unconfined concrete. Under high lateral pressures, occurring during
e.g. impact of projectiles or fragments, the compressive strength may be more than 15
times 	higher 	than 	the 	uni-axial 	compressive 	strength, 	as 	presented 	by
Leppänen (2004) with reference to Bažant (1996). This means that concrete is a
highly pressure-dependent material, which can also be characterised with a relation
between the hydrostatic pressure, i.e. the mean value of the principal stresses, and the
Stress, σ
Deformation
ε·L 	w
σ
w	ε
ε·L 	w
σ
wc
G F
+
w
σ
Hordijk-Reinhard
Gylltoft
Linear

-- 19 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	6
density. This relation describes how the density goes from the normal concrete
density, with the presence of pores, to a solid concrete density, where all the pores
have collapsed and the concrete is fully compacted, as the hydrostatic pressure
increases. For more information about the pressure dependence of concrete the reader
is referred to Section 5.1 and Leppänen (2004).
As with most materials, the behaviour of concrete changes as the strain rate increases.
The increase of the compressive and tensile strength is well known today, and is often
characterised by a dynamic increase factor (DIF), describing the ratio between the
dynamic and static strengths. As seen in Figure 2.4, where Malvar and Ross (1998)
have compiled the results of experiments conducted by several researchers, the
dynamic tensile strength of concrete may be as much as 5 to 7 times higher than the
static ultimate strength. As seen in Figure 2.5, the strain-rate effect is less significant
on the compressive strength, but it may still be more than doubled; see Bischoff and
Perry (1991).
Figure 2.4 	Strain-rate dependence for concrete in tension, based on Malvar and
Ross (1998).
DIF (Dynamic increase factor)
Strain rate [s-1 ]
0
1
2
3
4
5
6
7
8 	Cowell 38 MPa
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
10 -6 10 -5 10 -4 10 -3 10 -2 10 -1 10 0 10 1 10 2 10 3

-- 20 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	7
DIF (Dynamic increase factor)
10 -8 10-7 10-6 10-5 10-4 10-3 10-2 10 -1 100 101 102 103
Strain rate [s -1 ]
2.5
2.0
0.5
1.5
1.0
Figure 2.5 	Strain-rate dependence for concrete in compression, based on Bischoff
and Perry (1991).
Due to the lack of reliable test methods, it was previously unclear whether also the
fracture energy is strain-rate-dependent, but more recent studies (e.g. Schuler 2004,
Brara and Klepaczko 2007, Weerheijm and van Doormal 2007) indicate that it is.
Schuler (2004) has proposed a relation between the dynamic increase factor for the
fracture energy and the crack opening velocity; see also Paper I. With a simplified
description of the crack softening branch in tension, it can be schematically shown
how the strain-rate effect on the tensile strength and the fracture energy influences the
crack-softening behaviour, as seen in Figure 2.6.
Figure 2.6 	Simplified description of crack softening with increasing strain rate,
based on Schuler (2004).
Increasing strain rate
ft.dyn.II
ft.dyn.I
ft.static
w
GF
σ

-- 21 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	8
2.2 	Steel-fibre reinforced concrete
The addition of discrete reinforcing fibres into the concrete mix has been shown to
improve the mechanical properties of concrete. However, there are various factors
influencing the behaviour of the fibre-reinforced concrete and consequently also the
degree of improvement: e.g. concrete matrix quality, fibre type (including material
properties and geometry), bond between the fibres and surrounding concrete matrix,
and distribution, orientation and concentration of fibres; see Zollo (1997). Fibre-
reinforced concretes (FRC) can be subdivided into four classes, based on the fibre
material:
• 	SFRC, steel-fibre reinforced concrete
• 	GFRC, glass-fibre reinforced concrete
• 	SNFRC, synthetic-fibre reinforced concrete
• 	NFRC, natural-fibre reinforced concrete
Since the behaviour differs between these fibre materials, they are generally used in
different applications. According to ACI 544 (1996), the most significant properties of
steel-fibre reinforced concrete are the improved ability to absorb energy, impact
resistance and flexural fatigue endurance; thus it is often used for elements subjected
to high loads and impacts. For this reason, the present emphasis will henceforth be
given to steel-fibre reinforced concrete and, for further information about the other
three classes of fibre-reinforced concretes, the reader is referred to ACI 544 (1996)
and Zollo (1997).
Steel fibres improve the ductility of concrete under all modes of loading; but in
normal-strength concrete this is more pronounced for tensile than compressive
loading, since the plain normal-strength concrete has a more brittle behaviour in
tension than in compression; see Section 2.1.
The effects of steel fibres on the ultimate strengths differ between the modes of
loading. The compressive ultimate strength of concrete is only slightly increased for
volume fractions up to 1.5%. According to Löfgren (2004), also the effect on the
ultimate tensile strength is small for low and moderate dosages of steel fibres, which
contradicts ACI 544 (1996) where the increase is said to be significant (referring to
tests where the increase was 30 to 40% for a volume fraction of 1.5%). Since the
increase of shear strength has been shown dependent on the testing technique, it is not
clear how much the shear strength is affected by the addition of steel fibres, but it is
believed to be increased; see ACI 544 (1996). The effect on the uni-axial tensile
behaviour when adding moderate dosages of fibres to concrete is schematically shown
in Figure 2.7.

-- 22 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	9
Figure 2.7 	Effect of moderate dosages of fibres in concrete on uni-axial tensile
behaviour, based on Löfgren (2005).
The increase in impact resistance for steel-fibre reinforced concrete has been studied
in several experiments, e.g. by Nataraja et al. (2005), Luo et al. (2000), Cánovas et
al. (1994) and Almansa and Cánovas (1999). However, the difference in peak load for
normal-strength concrete and steel-fibre reinforced concrete is reported to be smaller
in the impact tests than that obtained in static tests, which seems to be true also for the
fracture energy; see ACI 544 (1996). This indicates that the relative effect of the
fibres in the concrete decreases with an increasing load rate.
Volume fractions of steel fibres of about 0.25 to 2% are generally used in concrete,
since higher dosages affect the workability and fibre dispersion; see PCA (2002).
However, a special type of steel-fibre reinforced concrete, called slurry infiltrated
fibre concrete (SIFCON), may contain volume fractions of fibres ranging from 8 to
12% or even higher; see ACI 544 (1996). This fibre-reinforced concrete can have
strength and ductility that far exceed those of conventionally used fibre concrete, but
due to its high production costs it is mainly used for impact- and blast-resistant
structures; see ACI 544 (1996) and PCA (2002). Nevertheless, only conventionally
mixed steel-fibre reinforced concrete, with low or moderate dosages of fibres, was
used in the study presented in Chapter 6 and Paper I. Hence, the following reasoning
for characterisation of the post-fracture behaviour in tension is applicable to these
cases, and may not be valid for other types and higher dosages of fibres.
As in the case of plain concrete, the crack-softening curve can be idealised in different
ways and with different degrees of accuracy. For practical applications it has been
found 	that 	a 	bi-linear 	relation, 	as 	shown 	in 	Figure 2.8, 	is 	often 	a 	sufficient
approximation for fibre-reinforced concrete with low or moderate dosages of steel
fibres. 	Löfgren 	(2005), 	through 	experiments, 	has 	made 	phenomenological
interpretations of the parameters, a1, a2, b2, w1 and wc describing this relation.
FRC
Concrete
Stress
Strain/Deformation

-- 23 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	10
Figure 2.8 	Bi-linear 	stress-crack 	opening 	relation 	for 	steel-fibre 	reinforced
concrete, based on Löfgren (2005).
The rate of decrease in stress directly after tensile failure initiation is described by the
parameter a 1, which is essentially governed by the fracture properties of plain
concrete, but may be slightly reduced compared to this. The parameter a2, describing
the rate of stress decrease in the second branch, is principally related to the fibre
length. Poor fibre bond or fibre fracture influences the critical crack opening, wc,
which normally is in the range of Lf/10 to Lf/2, where Lf is the length of the fibres. The
value of parameter b2 is primarily related to the dosage of fibres and increases with
increasing volume fraction.
Löfgren (2005) also performed experiments to investigate the hypothesis that there is
a linear relationship between fibre content and the tensile stress at different crack
openings. The experiments seemed to confirm that it may be acceptable to assume a
linear relationship between the number of fibres and the stress-crack opening relation.
In the experiments, where end-hooked steel fibres of type Dramix RC-65/35 were
used, a relation between the volume fraction, Vf, and the number of fibres per cm2 ,
nfibres, was determined for the specimens, as:
f	fibres 	V	n 	⋅	= 	5396	.	2 	(2.1)
By inverse analysis of the experimental results, a relation between the numbers of
fibres 	and 	the 	parameter 	b2, 	defined 	in 	Figure 2.8, 	was 	also 	determined 	by
Löfgren (2005):
257	.	0	278	.	0	2 	+	⋅	= 	fibres	n	b 	(2.2)
where 0.257 represents the parameter b2 for plain concrete in the experiments.
The volume fractions of fibres corresponding to a certain fracture energy, or vice
versa, can then be calculated. The relation between the fracture energy and the
parameters, a1, a2, b2, w1 and wc is known, since the fracture energy equals the area
under the curve in Figure 2.8.
2	b
1 tf
σ
1	w
w
1	a
2	a
c	w

-- 24 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	11
3 	Weapon Characteristics
The effects of weapons may differ as much as there are types of weapons. For
detonation of cased bombs, filled with high explosives, the surroundings will be
subjected to blast load and fragment impact. The definitions of these loads are highly
dependent on e.g. the bomb geometry, casing thickness and material, type and weight
of explosive filling, the surroundings and the stand-off distance, i.e. distance between
the point of detonation and the structure studied. Here only the effects of GP-bombs
(General Purpose bombs), with a homogeneous casing (not made to fracture in a pre-
defined pattern), and bare explosions are discussed. However, the information may
also be valid for other bombs.
The initiation of the explosive filling will cause high pressure and temperature inside
the casing, which leads to swelling of the casing. During swelling, radial tensile
cracks will form at the outside and shear cracks on the inside of the casing. As these
cracks meet or propagate to a free border, fragments are formed and start to propagate
in the surrounding air away from the point of detonation; see Curran (1997). In order
to characterise the loads on structures caused by detonation of a cased bomb,
knowledge about blast wave and fragmentation is required.
3.1 	Blast load
The formulas and parameters used for characterisation of the blast wave are in most
cases 	empirically 	determined, 	in 	some 	cases 	with 	additional 	theoretical 	and
computational investigations. Due to a large amount of test data from bare high-
explosive detonations the blast load characteristics from such detonation can be
estimated with great accuracy. The blast wave resulting from encased explosions, or
where the blast wave is reflected on other surfaces before arriving at the target (in the
extreme case, confined explosions within a structure), can make the resulting blast
load very complex and case-dependent, so that more rough estimations are used in
these cases.
3.1.1 	Blast wave idealisation
The blast wave, shown as a pressure-versus-time history, at a fixed point with a
certain stand-off from the point of detonation, is often idealised as shown in
Figure 3.1. This idealisation is valid for detonation in "free air", i.e. distant from any
reflecting surface, where the resulting blast wave is not disturbed. Detonation takes
place at time t = 0 and the blast wave propagates through the air; after a time t a the
blast 	wave 	arrives 	at 	the 	point 	studied. 	As 	the 	wave 	arrives, 	the 	pressure
instantaneously 	increases 	from 	the 	ambient 	pressure 	P0 	(in 	undisturbed 	air
P0 ≈ 101.3 kPa) 	to 	P0 +P+, 	where 	P+ is 	the 	peak 	overpressure 	caused 	by 	the
detonation, here equal to the incident peak overpressure Ps+. 	The overpressure then
decays and at a time T + after the blast arrival the pressure returns to the ambient
pressure P0 and the positive phase is over. The positive phase is followed by a
negative phase, where the negative pressure P -, relative to the ambient pressure can be

-- 25 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	12
explained as a partial vacuum, meaning that there are fewer air particles than in the
surrounding air, since these were moved when the blast front passed; see Johansson
and Laine (2007). Thereby, the amplitude of the negative pressure is limited to the
absence of the normal ambient air pressure P0. The duration of the negative phase, T -
,
is longer than that of the positive phase.
Figure 3.1 	Idealised blast wave, based on Leppänen (2004).
In structural design with regard to explosions, not only the amplitude of the pressure
is of interest, but also the impulse intensity is an important parameter. The impulse
intensity for the positive and negative phases, i + and i -, is calculated as the area under
the pressure curve in the positive and negative phases, respectively.
( 	)	∫
+
	+
+ −	=
T	t
t
a
a
dt	P	t	P	i 	0	)	( 	(3.1)
( 	)	∫
−	+
+
+	+
+
− −	=
T	T	t
T	t
a
a
dt	t	P	P	i 	)	(	0 	(3.2)
where P(t) is the variation of the pressure as a function of the time, t.
In design with regard to explosions, the negative phase of the blast loading is
considered less important than the positive phase; thus often only the latter is taken
into consideration. A pressure-time relation often used for the positive phase, e.g. in
the computer code ConWep (1992), is:
+
	−
+
+ ⎟
⎠
⎞
⎜
⎝
⎛ −	+	= T	t
e
T
t
P	P	t	P
α
1	)	( 	0 	(3.3)
where t is the time after the arrival of the blast wave, i.e. measured from the time of
arrival ta. By means of the factor α, the decay of the pressure is adjusted. If the
overpressure P+, the duration of the positive phase T+ and the positive impulse
intensity i + are known, the factor α can be determined by combining Equations 3.1
and 3.3.
T+ T -
P
t
P0 +P+
P0
P0 -P -
t a

-- 26 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	13
Even though not often used in design purposes, expressions for the variation of the
pressure as a function of the time can be found also for the negative phase; see
Johansson and Laine (2007), in which the relation in Equation 3.4 is presented with
reference to Brode (1955).
−
	−
−	−
− ⎟
⎠
⎞
⎜
⎝
⎛ −	−	= T	t
e
T
t
T
t
P	P	t	P 4
0 	1	)	( 	(3.4)
Blast parameters from bare spherical high-explosive charges in free air are well
known and can be found in most handbooks and design manuals within the area, e.g.
Johansson and Laine (2007), Krauthammer (2006) and U.S. Army (1992). However,
due to the complexity and great variation of behaviour for conventional weapons,
which are cased and have other geometries than spherical or cylindrical, the blast
parameters for uncased spherical charges are used also when describing the blast
wave caused by these bombs. This means that neither the non-rotationally-symmetric
distribution of the pressure in the air, nor the energy consumed to fracture the casing
into fragments, resulting in a reduced blast pressure compared to bare-charge
explosion, is taken into account. The latter simplification is further discussed in
Section 3.3 where the combined loading of blast and fragments is described.
3.1.2 	Blast wave reflection
When the blast wave strikes a surface which is not parallel to its direction of
propagation, e.g. a wall or the ground, it is reflected and the behaviour of the blast
load changes. Reflections can be divided into regular and Mach reflections, depending
on the incident angle and the blast peak overpressure. The regular reflection can be
divided into normal and oblique reflection, and the Mach reflection can be viewed as
a special case of oblique reflection where the angle of incidence is large enough to
cause a phenomenon called a Mach wave; see Johansson and Laine (2007). Normal
reflection takes place when the blast strikes a perpendicular surface and the effect can
lead to a significant enhancement of the pressure, where the reflected overpressure Pr+
will be between 2 and 8, ASCE (1999), and according to Johansson and Laine (2007)
and Baker (1973) as much as 20, times higher than the incident overpressure Ps+. The
pressure enhancement of the reflected wave compared to the incident wave can be
explained by arresting flow behind the reflected shock wave; see ASCE (1999). For
further 	information 	about 	the 	normal, 	oblique 	and 	Mach 	reflections, 	see 	e.g.
Johansson and Laine (2007), Leppänen (2004) and Krauthammer (2006).
The reflected pressure has the same general shape as the incident pressure, as shown
in Figure 3.2. The duration of the positive phase is the same for the incident and
reflected pressures, but the peak pressure is higher than that of the incident pressure.
This means that Equation 3.3 can be used also to describe the positive, reflected
pressure if the peak overpressure P+ is replaced by the peak overpressure for the
reflected wave Pr+.

-- 27 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	14
0
1000
2000
3000
4000
5000
0 	1 	2 	3 	4 	5
Time [ms]
Pressure, P [kPa]
Incident pressure
Reflected pressure
Figure 3.2 	Incident and reflected pressure at stand-off 5 metres, caused by a
125 kg 	TNT 	bare 	spherical 	explosion, 	calculated 	according 	to
ConWep (1992).
3.2 	Fragments
The fragmentation process of a bomb casing is very complex and dependent on the
example 	at 	hand. 	Hence, 	generic 	empirical 	expressions 	for 	the 	fragment
characteristics cannot be developed in the same way as for bare explosions in free air,
unless a very large number of test results are compiled and analysed. Instead
analytical methods, where the exploding items are assumed to be cylindrical cased
charges, are derived and confirmed with test data. Thereby, the expressions used to
characterise the fragments apply especially to cylindrical items and to items that can
be reasonably approximated as either cylindrical items or series of cylindrical items.
The more the shape of the bomb deviates from this, the less accurate are the fragment
characterisation estimations.
The size, velocity and spatial distribution of the fragments resulting from detonation
of a cased bomb will mainly depend on the properties, geometry and thickness of the
casing and the properties and amount of the explosive filling.
3.2.1 	Mass and size distribution
As 	the 	weaknesses 	within 	a 	homogeneous 	casing 	material 	are 	stochastically
distributed, so is the mass and size distribution of the fragments. The nose and tail
sections of a bomb, which usually are relatively massive, break up into a small
number of heavy fragments. The body of the bomb, which normally is somewhat
cylindrical in shape with varying diameter and material thickness and less massive
than the nose and tail sections, will fracture into many smaller fragments.
The mass distribution for an encased bomb can, under the condition that it can be
approximated as either a cylindrical item or a series of cylindrical items, be estimated

-- 28 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	15
by a formula developed by Mott, shown in Equation 3.5, from Krauthammer (2006)
but converted to SI units.
A
M	m
c
f M
e	W
N
A	f
2
−
= 	(3.5)
where 	( 	)2	3	2	3	5	2 1 	i	c	i	c	x	A 	d	t	d	t	B	M 	+	=
and 	Nf 	the total number of fragments with mass larger than mf
Wc 	weight of casing [kg]
mf 	fragment weight [kg]
M A 	fragment distribution factor [kg]
Bx 	Mott explosive constant [kg1/2 m-7/6 ]
t c 	average casing thickness [m]
di 	average inside diameter of casing [m]
For design purposes a design fragment is often used. The mass, W f, of the design
fragment is, in accordance with design manuals (e.g. U.S. Army (1992)), determined
by specifying a confidence level, CL, giving the probability that this will be the
heaviest fragment produced by the detonation. The weight of the design fragment,
according to this approach, is calculated as:
( 	)	L	A	f 	C	M	W 	−	= 	1	ln 2 (3.6)
This approach is justified in design against individual fragment impact and the
possible subsequent local damage, i.e. spalling, penetration, scabbing and perforation
(further discussed in Section 4.1). In design with regard to the fragment cluster, the
combined effects of the impulse and impact of the striking fragments are of interest.
With this condition, where the damage caused by the cluster of fragments is of interest
rather than the local damage caused by individual fragments, it may be necessary to
use another approach to find a design-fragment weight than that presented above; see
Equation 3.6.
An alternative approach is to use the impulse distribution for the fragments by means
of the fragment mass distribution, calculated with Equation 3.5, and the fragment
velocity, 	further 	discussed 	in 	Section 3.2.2. 	This 	approach 	is 	discussed 	in
Section 7.1.3, where it is used to determine a design-fragment weight that, in turn, is
used within a study of the combined effects of blast and fragment loading on a
reinforced concrete wall.
3.2.2 	Fragment velocities
The average initial velocity v 0, imposed on the fragments during the casing fracture
can 	be 	estimated 	from 	the 	Gurney 	equation, 	as 	seen 	in 	Equation 3.7, 	from
Krauthammer (2006). This is an upper bound estimation of the initial velocity since it
is based on energy balance within the explosive and the metal case system, not taking
into account the energy loss during rupture of the casing. The Gurney equation
presented here is derived for cylindrically shaped bombs.

-- 29 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	16
2	1
0 5	.	0	1
2 	⎥
⎦
⎤
⎢
⎣
⎡
+
=
c
c
W	W
W	W
E	v 	(3.7)
where 	E	2 	Gurney constant
W 	weight of explosive [kg]
W c 	weight of casing [kg]
The Gurney constant, also called Gurney velocity, is specific to the explosive material
and is often listed for the most common high-explosive fillings used for bombs in
literature for protective design. However, the constant given may differ between
different references. In Krauthammer (2006) the value of the Gurney constant for
TNT is given as 7 600 ft/s (2 316 m/s); with reference to U.S. Army (1992) and in
U.S. Army (1990) it is given as 8 000 ft/s (2 438 m/s).
The striking velocity of a fragment, vsf, at a certain distance Rf (in metres) from the
detonated bomb, will be lower than the initial velocity, v0, due to air resistance. The
velocity of larger, heavier fragments will decrease slower than the velocity of smaller,
lighter fragments. The striking velocity of fragments with weight mf (in kg) can be
calculated as, Krauthammer (2006) converted to SI-units:
( 	) ⎟
⎟
⎠
⎞
⎜
⎜
⎝
⎛
−
= 31
	004	.0
0
f
f
m
R
sf 	e	v	v 	(3.8)
3.2.3 	Fragment distribution in surroundings
For detonating bombs, the fragment distribution in the surroundings will not be
uniform, meaning that the placement of the bomb relative to the target structure is of
importance. The uneven distribution of fragments depends, among other things, on the
bomb geometry (including case thickness and diameter variations), placement of the
explosive filling within the bomb and where in the bomb the detonation is initiated.
3.3 	Combined loading of blast and fragments
The combined blast and fragment loading involves impulse from the blast wave and
the striking fragments, and impact from the fragments. As mentioned in Section 3.1.1,
the reduced blast pressure due to the energy consumed during casing break-up is often
not taken into account in the design manuals. According to ASCE (1999), it is most
often reasonable to neglect the casement effects, including both the fragment impulse
and impact. This is justified in ASCE (1999) by the statements that an acceptable
estimation of the combined impulse associated with the blast and fragment loading
can be derived by using the total charge for the calculation of blast impulse, i.e. the
same as not reducing the energy release due to the fracture process of the casing, and
that 	the 	material 	degradation 	due 	to 	fragment 	impact 	"...is 	beyond 	what 	can
reasonably be expected for the designer of a typical facility." However, according to
Girhammar (1990), the combined impulse of the blast and fragment loading is

-- 30 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	17
considerably higher than the impulse of bare charges, at least in the near field of the
detonation. Further, a synergy effect has been observed in many experiments in the
case of combined blast and fragment loadings, meaning that the damage from the
combined loading is greater than that from the sum of the blast and fragment loadings
treated separately; see Girhammar (1990).
The different velocities of the blast wave and the fragments, when propagating in the
air, result in different times of arrival for the two loads. In the close range (within a
few metres) the blast load travels faster than the fragments. However, due to the faster
decay of the blast velocity, the fragments will arrive before the blast wave, see
Figure 3.3. For a 250 kg GP-bomb with 50 weight per cent TNT the blast and
fragment will arrive at the same time at an approximate distance of 5 metres from the
point of detonation.
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
Figure 3.3 	Time of arrival for blast wave and fragments as a function of the stand-
off 	for 	a 	250 kg 	GP-bomb 	with 	50 	weight 	per 	cent 	TNT, 	from
Leppänen (2004).

-- 31 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	18
4 	Weapon Effects on Reinforced Concrete
The response of a reinforced concrete structure, subjected to severe dynamic loading,
may differ considerably from that caused by static loading. This may to some extent
be explained by the inertia effects in the structural response, which becomes more
pronounced the more the load duration decreases, and the stress waves caused by the
dynamic load, travelling in the structure. The enhanced material strengths due to the
higher loading rate, discussed in Section 2.1, also affect the response. In this chapter
the response of reinforced concrete elements subjected to severe dynamic loads is
presented, and different analysis methods used to estimate this response are briefly
described.
4.1 	Modes of damage
Depending on the load and structure characteristics, the response of the target will
differ. In the case of blast loading at relatively large stand-offs, with uniform loading
over the element, the response will be global and for close-in blast loading and small
stand-offs the resulting damage is localised. Fragment impact has a local effect on the
element, but may also cause global response, especially in the case of uniform
fragment cluster impact.
4.1.1 	Global response
The global behaviour of a reinforced concrete beam or slab can be generalised to
membrane, flexural and shear failure; see ASCE (1999). Membrane failure occurs due
to tensile, and in some cases compressive, in-plane forces in the element, and can only
occur for beams where the supports provide sufficient strength and stiffness to resist
in-plane displacement of the edges. However, membrane failure may also occur for
two-way slabs without horizontal restraint; see Bailey (2004).
Flexural failure occurs after formation of plastic hinges, resulting in a mechanism or
when the in-plane deformations are large enough to make the beam slip of the
supports.
Shear failure can, in the same way as for statically loaded reinforced concrete
elements, 	occur 	due 	to 	diagonal 	tension 	and 	compression 	related 	to 	flexural
behaviour; hence it must be taken into consideration also in the case of severe loading.
However, direct shear (or dynamic shear) response is typical for short-duration
dynamic loads and is caused by the high shear inertia forces, which do not exist under
static or slow dynamic loading; see ASCE (1999). The direct shear is a local response
in that it is localised to zones of geometric or load discontinuity, but is here still
considered as global response since it affects the overall behaviour of the structural
element. This failure occurs very early in the structural response and before any
significant bending deformation takes place, so it is not associated with flexure. The
phenomenon 	of 	direct 	shear 	and 	how 	it 	emerges 	are 	well 	described 	in
Johansson (2000) and Krauthammer (2006).

-- 32 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	19
Figure 4.1 	Global damage of reinforced concrete beam.
4.1.2 	Local response
For contact bursts, blasts with short stand-offs or blast of large charges, a compressive
stress wave is generated by the high-pressure pulse applied to the front face and
causes localised cratering, so-called spalling. The compressed stress wave travels
through the thickness of the structural element and is reflected as a tensile wave when
reaching the rear face. This tensile wave may cause failure in the rear face region,
resulting in scabbing of the concrete, meaning that a part of the concrete will separate
from the structure and travel into the space behind with a certain velocity. If the front
face crater and the scabbing zone are merged, the cross-section is breached; see
Figure 4.2.
In the case of fragment or projectile impact, the body penetrates into the concrete,
resulting in spalling. The compressive stress wave thus created may cause scabbing at
the rear face of the structural element in the same way as contact bursts. The depth of
penetration for the fragment/projectile depends on its characteristics and the material
properties of the target material. With deep penetration, relative to the thickness of the
structural element, plugging may occur. Plugging is the formation of a cone-like crack
in front of the penetrating body and the possible subsequent punching-shear plug; see
Li et al. (2005). If the impacting body travels through the structural element,
perforation has occurred; see Figure 4.2.
Membrane failure
Flexural failure,
plastic hinge
Flexural failure,
slipping off
Shear failure 	Direct shear failure

-- 33 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	20
Figure 4.2 	Local damage caused by close-in explosion and impact.
A single heavy fragment causes a higher degree of damage than a single less heavy
fragment when they have the same striking velocity. This is shown in Table 4.1,
where the required thicknesses of a concrete walls, with compressive strength of
30 MPa, just prevents perforation by fragments of different weights, ranging from 5 to
400 grams, and with striking velocities up to 3 000 m/s are shown. The values are
based on equations from Krauthammer (2006) and are presented by Leppänen (2004).
Table 4.1 	Thickness of concrete wall (compressive strength of 30 MPa) for
various fragment weights and striking velocities, based on equations
from Krauthammer (2006) and are presented by Leppänen (2004).
Fragment mass [g]	Striking
velocity [m/s] 	5 	25 	50 	100 	200 	400
300 	22 	39 	50 	65 	84 	108
600 	30 	54 	70 	91 	118 	153
900 	39 	74 	97 	127 	167 	220
1 200 	53 	101 	134 	177 	235 	312
1 500 	70 	135 	180 	239 	318 	424
1 800 	90 	174 	233 	312 	416 	556
2 100 	112 	220 	295 	394 	528 	707
2 400 	138 	271 	363 	487 	653 	877
2 700 	166 	327 	439 	590 	792 	1 064
3 000 	196 	389 	522 	702 	943 	1 268
Close-in explosion
spalling
scabbing
crater formations 	breaching
Fragment or projectile impact
spalling scabbing
perforation	penetration
with
crater formations
perforation with
plugging

-- 34 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	21
4.2 	Effect of reinforcement on response
As regards global response, the effect of reinforcement is crucial for the energy-
absorbing capacity of a concrete structural element, and thereby also its capacity to
withstand blast and fragment loading and avoid structural collapse. A properly
reinforced concrete structure ought to have a ductile behaviour.
Local damage does not in general lead to structural failure, and a certain level of local
damage is often allowed to occur. However, the damage must still be limited. With
close-in blast loading and fragment or projectile impact, where spalling occurs on the
front face and possible scabbing craters form at the rear face, the presence of
reinforcement bars may limit the damage since it holds the concrete in place. This is
especially true in the case of scabbing, where the amount of reinforcement is a highly
critical parameter; see Leppänen (2004). With projectile and fragment impacts, the
penetrating body may strike the reinforcement, leading to a decreased depth of
penetration and to damage of the reinforcement bar and the surrounding concrete.
Impact on the reinforcement may also lead to local steel rupture, but also to reduced
bond between the reinforcement and the concrete further away from the impact point
due to vibrations.
A numerical study of how the projectile impact resistance of concrete was affected by
the presence of reinforcement and reinforcement detailing was conducted within the
work presented; see Conference Paper. It was shown that reinforcement may have an
influence on both the depth of penetration and the front-face crater size, and that the
effect decreased with a decreasing amount of reinforcement within the damage zone.
The increase in impact resistance is plausibly explained by increased confinement
effects from the reinforcement. Since the damage caused by a projectile is local,
reinforcement bars located further away from the impact area will not influence the
impact 	response. 	This 	seems 	logical 	since 	the 	confinement 	effects 	of 	the
reinforcement decrease with increasing distance between the projectile path and the
reinforcement bar.
4.3 	Analysis tools for estimation of response
Different methods may be used to estimate the response of reinforced concrete
structures subjected to blast and/or fragment impact caused by an explosion. The list
below shows a rough classification of these methods, presented in order of increasing
complexity:
• 	empirical and analytical equations, charts and simple computer codes
• 	single-degree-of-freedom analyses, simple or advanced
• 	numerical simulations with finite-element codes or hydrocodes
Examples of empirical and analytical equations are those used to estimate the depth of
penetration and crater sizes caused by fragment or projectile impact. These equations
are in some cases also implemented in relatively simple computer codes, which
calculate the response for given input data. As an example, the computer code
ConWep (1992) is based on the expressions presented in the technical manual

-- 35 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	22
U.S. Army (1992). There are also many charts with which the expected response of
blast or impact loading can be estimated. Parts of these charts are only representations
of empirical and analytical equations, already mentioned, and others are made by
graphical presentations of results from single-degree-of-freedom analyses. Examples
of empirical equations for estimating depth of penetration and required concrete
thickness to prevent perforation can be found in Appendix A.
The analytical method of simplifying a deformable element to an equivalent single-
degree-of-freedom system (SDOF system) is mainly used for estimations of the global
response due to blast loading, but may also be used in the case of fragment impacts or
combination of these two loads; see Forsén and Nordström (1992). Advanced SDOF
models include non-linear behaviour, flexural-shear-membrane interaction and rate
effects, but only the simple SDOF method is further discussed in Section 4.4. For
further information about the advanced SDOF analyses the reader is referred to
Krauthammer (2006) and ASCE (1999).
Numerical simulation by use of finite-element codes or hydrocodes can be performed
with different degrees of accuracy, but is the most complex method for estimation of
the response due to blast and/or fragment loading discussed here. Many parameters
determine the accuracy of the simulations, e.g. the material model used to describe the
behaviour of the material, the choice of numerical mesh and element type. The
method of numerical simulations by use of the hydrocode AUTODYN (2007) is
further discussed in Chapter 5.
4.4 	SDOF method
In order to estimate responses of beams and slabs exposed to loads with impulsive
character, the single-degree-of-freedom method (SDOF method) may be used. The
method allows the deformable body to be transformed into an equivalent SDOF
system, by means of transformation factors, κM, κC, κR, and κP for the mass, M, the
damping coefficient C, the internal resistance force R and the external load P(t),
respectively. This transformation is schematically shown in Figure 4.3.
Figure 4.3 	Principle of transforming deformable body to an equivalent SDOF
system. In case of uniformly loading P(t)=q(t)·L, where q(t) is the
uniformly distributed load, and L is the length of the beam.
q(t)
M
L
κPP(t)
κRR
κCC 	κMM

-- 36 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	23
By solving the equation of motion, Equation 4.1, for the equivalent SDOF system the
displacement, u, velocity, 	u& , and acceleration, 	u&& , of a predefined point in the
analysed body can be estimated. The damping is often neglected since its influence on
the peak response is relatively small. Neglecting the damping also gives results on the
safe side in design since the capacity of the structural element is underestimated; see
Nyström (2006).
)	(t	P	R	u	C	u	M 	P	R	C	M	
κ	
κ	
κ	
κ 	=	+	+ 	&	&& 	(4.1)
The derivation of transformation factors, based on conservation of energy and work
within the transformation, requires a defined shape of deflection (mode shape) of the
deformable body. Even though the first bending mode is generally dominant as the
shape of structural elements subjected to dynamic loads, it will also be influenced by
higher modes. For an SDOF system this influence cannot be taken into account and
the first bending mode is most often assumed (see e.g. Krauthammer 2006 and
ASCE 1999), so also within this work.
The internal force, R, describes the ability of the structural element to resist the
external load and is often described with a load-displacement relation. The load-
displacement relation can be taken as any relation describing the behaviour of the
structural element, but it must be observed that the derivation of the transformation
factor, κR, for the internal force also depends on this curve, and thus a complex
relation makes the derivation complicated
In Figure 4.4 the variation of the internal force, R, as a function of the displacement,
u, is shown for three different material response idealisations (linear-elastic, ideal-
plastic and bi-linear).
Figure 4.4 	Linear-elastic, ideal-plastic and bi-linear material behaviour, shown as
internal resistance-deflection relation, and the corresponding functions.
In the SDOF analyses conducted within the work presented in Section 7.2 and
Paper II, an ideal-plastic material response was assumed. For the simply supported,
reinforced concrete beam subjected to a uniformly distributed load, as in the study,
this is considered to be accurate enough.
Values of the transformation factors can be found in literature for linear-elastic and
ideal-plastic material response, concentrated and uniformly distributed loads and
different support conditions; see for example Nyström (2006). In Table 4.2 the
u
R = K u
K
R
u
R = P(t) if u = 0 and P(t)<Rm
R = Rm otherwise
Rm 	Rm
uel 	u
K
R = K u if u < uel
R = Rm otherwise
R 	R

-- 37 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	24
transformation factors for linear-elastic and ideal-plastic material responses are
presented for a simply supported and fixed beam subjected to a uniformly distributed
load.
Table 4.2 	Transformation 	factors 	for 	a 	simply 	supported 	and 	fixed 	beam
subjected to a uniformly distributed load for linear elastic and ideal
plastic material behaviours, from Nyström (2006).
Support
condition
Material
behaviour κM 	κR 	κP
Elastic 	0.504 	0.640 	0.640Simply
supported Plastic 	1/3 	0.5 	0.5
Elastic 	0.406 	0.533 	0.533
Fixed
Plastic 	1/3 	0.5 	0.5

-- 38 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	25
5 	Numerical simulations
For numerical simulations of severe dynamic loading and the resulting deformations
and pressures, the non-linear geometrical and material behaviours must be used in
order to achieve accurate results. Hydrocodes are used for highly time-dependent
dynamic problem-solving, including non-linearity, by use of finite difference, finite
volume and finite element techniques. The differential equations expressing the
conservation of mass, momentum and energy, together with a material model and a
set of initial and boundary conditions, give the solution of the problem. The material
model should approximate the observed physical behaviour of a real material under
the specific conditions of interest to be able to give accurate results.
The software AUTODYN 2D and 3D can be used to solve non-linear problems in
solid, fluid and gas dynamics. The simulations can be conducted by use of different
numerical techniques, which are appropriate for the different domains of physical
problems. 	Some 	of 	these 	numerical 	techniques 	can 	also 	be 	coupled 	to 	solve
interaction problems.
5.1 	Material models
For static and low-dynamic simulations, a constitutive model, describing the relation
between the stress and deformations for the material, is enough to describe the
physical behaviour of a solid material. However, in the case of severe loading,
including large deformations and very high pressures, the constitutive model must be
supplemented by a equation of state (EOS), relating the pressure, density and internal
energy for the material. Hereby, the material model relates the flow variables in the
differential conservation equations for a specific material.
A description of the RHT material model, including the constitutive model and the
equation of state, used for concrete in the numerical simulations presented in
Chapters 6 and 7, Paper I and II, and the Conference Paper is given here.
5.1.1 	RHT – constitutive model for concrete
The RHT model is the constitutive model used to describe the behaviour of concrete.
The model, developed by Riedel (2000), includes three pressure-dependent surfaces in
the stress space: the elastic limit surface, Yel, the failure surface, Yfail, and the residual
strength surface, Yfric, as seen in Figure 5.1.

-- 39 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	26
Figure 5.1 	Schematically shown surfaces used in the RHT constitutive model (left),
from Leppänen (2004), and behaviour of the failure surface for low
hydrostatic pressures (right), based on Riedel (2000).
Since the yield strength, Y, increases with increasing hydrostatic pressure, p, the
pressure hardening for concrete, discussed in Section 2.1, is taken into account. A
function YTXC is used to describe this hydrostatic pressure dependence of the
compression meridian. For lower hydrostatic pressures than f c/3 the compressive
meridian 	is 	described 	by 	straight 	lines 	through 	specified 	points, 	as 	shown 	in
Figure 5.1. For hydrostatic pressures exceeding f c/3, Equation 5.1 is used to calculate
YTXC , where A and N describe the shape of the curve, pHTL is the so-called
hydrodynamic tensile limit and is defined in Figure 5.1 (and Section 5.1.2), and FRate
is a factor taking the strain-rate dependence into account.
3	for	)	( 	c
N
Rate
c
HTL
c
c	TXC 	f	p	F
f
p
f
p
A	f	p	Y 	≥
⎟
⎟
⎠
⎞
⎜
⎜
⎝
⎛
⎟⎟
⎠
⎞
⎜⎜
⎝
⎛ ⋅	−	⋅	= 	(5.1)
However, the failure surface not only depends on the hydrostatic pressure and the
strain rate, but also takes into account the increased brittleness in shear and tension,
compared to compression. This is done by adding a function R3 (θ), which describes
the 	third-invariant 	dependence 	in 	the 	deviatoric 	section, 	to 	the 	failure-surface
equation:
)	(	)	(	)	( 	3	
ε	
θ 	&	Rate	TXC	fail 	F	R	p	Y	Y 	= 	(5.2)
The elastic limit surface limits the elastic stresses, and for increasing stresses linear
strain hardening takes place until the failure surface is reached, which initiates failure
in the material; see Figure 5.1. After failure initiation a damage model is used for
strain softening, taking into account the gradual loss of load-carrying capacity for
concrete after reaching the tensile or compressive strength. This is done by linear
reduction of the material strength, from the yield strength to the residual strength, by
use of a damage factor, D, according to Equation 5.3. The damage factor D is
characterised by the plastic strain, εpl, relative to the plastic failure strain, εpl.failure, for
the material. The plastic failure strain is calculated according to Equation 5.4, where
D1 and D2 are material parameters. The residual strength is defined by the residual
Residual Strength
Elastic Limit Surface
Failure Surface
Yield strength, Y
Pressure, p 	Pressure, p	pHTL
Yield strength, Y
fc
f c/3
fs
ft

-- 40 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	27
strength surface, Yfric, expressed in Equation 5.5. Contrary to the failure surface, the
residual 	strength 	surface 	does 	not 	take 	the 	third-invariant, 	or 	the 	strain-rate,
dependence into account.
∑	=
failure	pl
pl
D
.	
ε
ε (5.3)
2
1	. 	)	(
D
c
HTL
c
failure	pl f
p
f
p
D	p ⎟⎟
⎠
⎞
⎜⎜
⎝
⎛ −	=
	ε 	(5.4)
1	M
c
c	fric f
p
B	f	Y ⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
⋅	⋅	= 	(5.5)
It should also be pointed out that there is a minimum limit of the plastic failure strain,
expressed in Equation 5.4. This limit is set by default to 1% in the RHT material
model.
AUTODYN uses a linear softening curve for brittle materials, e.g. concrete, but
according to Jirásek (2006) a linear softening curve can be used only for rough
approximations, so it may be justified to use a more accurate shape. Again referring to
Jirásek 	(2006), 	the 	Hordijk-Reinhard 	expression 	(also 	described 	in 	e.g. 	van
Mier (1984)) gives the best fit to experimental results, but is relatively complicated.
This may justify the use of a simpler relation, such as an exponential or bi-linear
crack-softening law (see Section 2.1), which usually still gives results with good
accuracy.
A hydrodynamic tensile-failure model is used by default in the RHT material model,
meaning that if the value of the hydrodynamic pressure in a cell falls below a
specified limit, tensile failure is assumed to occur. However, it is not possible to
specify a fracture energy, or to use a modified crack-softening description for this
tensile-failure model. In AUTODYN it is possible to use a principal-stress tensile-
failure model together with the RHT strength model, also providing both these
possibilities. The use of a principal-stress tensile-failure model entails that the strain-
rate dependence of the tensile strength defined in the RHT strength model is no longer
activated. Within the numerical study described in Chapter 6, trials were made to
reintroduce this strain-rate dependence by employing a user-subroutine. However,
these trials failed due to emergence of stability problems, further discussed in
Section 6.2.
Leppänen (2004) developed a modified crack-softening behaviour in the RHT
material model and used the bi-linear softening curve proposed by Gylltoft (1983).
Leppänen (2004) also modified the tensile strain-rate dependence in the RHT model
to better fit experimental data found in literature. The modified strain-rate dependence
was introduced in a user-subroutine, which, as mentioned above, was not possible in
the study presented in Chapter 6. The routine for sub-routines in AUTODYN have
changed in the newest version, i.e. version 11.0, and may explain the difference in
success.

-- 41 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	28
Another 	modification 	of 	the 	RHT 	material 	model, 	contemporaneous 	with
Leppänen’s (2004) modification, has been developed by Schuler (2004), which
includes a more refined damage model for the description of crack softening. Again a
modified strain-rate dependence is used for the tensile strength, but a power function
is used to describe the shape of the descending crack-softening curve which also takes
into account strain-rate dependence of the fracture energy. However, this modification
is yet not implemented in the commercial version of AUTODYN.
5.1.2 	Equation of state
By use of thermodynamic equilibrium it can be shown that the local hydrostatic
pressure, the specific volume and the specific energy are related through an equation
of state (AUTODYN (2005), Gebbeken et al. (2006)). The form of the EOS differs for
different materials and phenomena, and here only the EOS used within the RHT
material model is described. For further and more generic information about the
equation of state the reader is referred to AUTODYN (2005).
The EOS characteristics are determined by material testing. However, since the
energy distribution is impossible to measure in these tests, only a two-dimensional
relation between the density and the pressure can be found, and the energy has to be
considered implicitly by the equation of energy conservation; see Gebbeken et
al. (2006). The EOS for concrete, also used for other porous materials, is shown in
Figure 5.2. 	A 	linear-elastic 	material 	behaviour 	can 	be 	assumed 	from 	the
hydrodynamic tensile limit, pHTL, to the initial compaction pressure, pcompaction. The
hydrostatic tensile limit is the minimum pressure for which the material can sustain
continuous expansion; for lower pressures the material will fail. If the compaction
pressure is exceeded, the pores start to collapse and the plastic compaction phase is
entered. This pore collapse and subsequent compaction of the concrete continues for
increasing hydrostatic pressures until the pressure, psolid, is reached where all the pores
have collapsed and the material again approximates an elastic behaviour. The initial
density of the concrete is denoted ρ0 and the density of the fully compacted material at
zero pressure is ρsolid.
Figure 5.2 	EOS for concrete, based on Gebbeken et al. (2006) and Riedel (2000).
ρ
p solid
p compaction
p HTL 	ρ0 	ρsolid
Plastic compaction
Fully compacted
p

-- 42 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	29
In the RHT material model a so-called P-α EOS, written in a general form in
Equation 5.6, is used to describe the change in state for concrete. The P-α EOS
combines a polynomial description of the EOS, as shown in Equation 5.7, with the
current porosity, α, which depends on the porosity of the undamaged concrete, αporous,
the hydrostatic pressure, p, and a shape factor n, as defined in Equation 5.8; see also
AUTODYN (2005) and Riedel (2000). The factors K1, K2, K3, B0 and B 1, are material
parameters describing the shape of the EOS curve and e is the internal energy.
( 	)	e	f	p 	,
1
ρ
	α
α ⋅	= 	(5.6)
( 	) 	( 	)
⎟⎟
⎠
⎞
⎜⎜
⎝
⎛ −	=
+	+	+	+	=
1	where
,
0
0	1	0
3
3
2
2	1
ρ
ρ
μ
ρ	μ
	μ
	μ
	μ
	ρ 	e	B	B	K	K	K	e	f
(5.7)
( 	) n
compaction	solid
solid
porous p	p
p	p
⎥
⎥
⎦
⎤
⎢
⎢
⎣
⎡
−
−
−	+	= 	1	1	
α
	α 	(5.8)
5.2 	Numerical solver technique
Here brief descriptions of the numerical techniques of Lagrange and Euler, used to
simulate structural materials in AUTODYN 2D and 3D, are given. The main stress is,
however, laid on the Lagrange solver since this is used in the numerical studies
presented in Chapters 6 and 7. For information about other numerical techniques,
often used in simulations of blast and fragment impacts (e.g. ALE and SPH), the
reader is referred to AUTODYN (2005) and Leppänen (2004).
The most obvious difference between the Lagrange and Euler solver techniques is the
coupling between the material and the numerical mesh. In a Lagrange solver the
numerical mesh moves and distorts with the material, while the numerical mesh in an
Euler solver is fixed in space and the material moves in, and between, the mesh
elements; see Figure 5.3.
Figure 5.3 	The Lagrangian description (left) and the Eulerian description (right)
for material movement, from Leppänen (2004).

-- 43 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	30
For a Lagrangian solver, distortion of the mesh can lead to inaccurate and ineffective
solutions. Since AUTODYN uses explicit solving, the time-step size must be limited
in order to achieve stable solutions. The maximum allowed time-step is often defined
as a function of the minimum length of an element, or equivalent to this. For an
elongating element, the time-step decreases and may cause extended computational
time. In a Lagrangian mesh the positions, velocities, and material accelerations for an
element are defined at the element nodes, situated in the element corners. Material
quantities such as pressure, density, internal energy, stress and strain deviators and
temperature are, on the other hand, defined at element-zone centres by centred
differencing. Due to accuracy losses in the centred differencing, an element with high
aspect ratio, i.e. large difference in length of its sides, may lead to loss of solution
accuracy.
To overcome these numerical problems, rezoning or erosion algorithms may be used.
Rezoning means that the distorted mesh is remapped onto a new, more regular mesh.
However, an interactive rezoning is only available for Lagrangian elements in
AUTODYN 2D, but not in the three-dimensional version. The erosion algorithm is
implemented in both AUTODYN 2D and 3D and removes numerical elements if a
pre-defined strain exceeds a specified limit. The mass of the eroded element can either
be discarded or retained in the solution by distributing it to the corner nodes, which
act as free mass points, and can then still interact with other elements, in another or
the original body. However, the compressive strength and internal energy of the
material within the eroded element cannot be compensated.
The Lagrangian solver can be used to advantage for simulations of solid continua and
structures involving relatively small distortions, but may also be extended to highly
distorted phenomenon with use of a rezoning or erosion algorithm. According to
AUTODYN (2005), it is recommended to use the Euler solver technique for problems
involving large deformations. Since the mesh is fixed in the Eulerian solver large
deformations does not cause mesh distortion and there is no need for erosion of
elements However, the Euler solver technique tends to be computationally more
expensive than the Lagrange solver technique due to the transport of material between
the mesh elements.
5.3 	Mesh dependence
It is well known that the choice of numerical mesh geometries influences the results
of numerical simulations. Since the basic equations used in the solver process for
hydrocodes, and other similar codes, are based on infinitely small differences, it is
obvious that large elements result in less accurate solutions. The mesh dependence
can also arise from different assumptions and simplifications within the material
model or numerical-solution process.
AUTODYN uses a smeared crack model, where the strain is decomposed into an
elastic and an inelastic part, often referred to as the crack strain. The crack strain is
calculated by smearing out the deformation, i.e. crack opening w, over a crack
extension length, l el, representing the element size. The length l el is calculated in
AUTODYN 3D as the diameter of a sphere, which has the same volume as the three-
dimensional element.

-- 44 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	31
Figure 5.4 	Linear crack softening relation used in AUTODYN.
In the principal-stress tensile-failure model, with crack-softening option, the fracture
energy is given as an input parameter. As mentioned in Section 5.1.1, a linear crack-
softening behaviour, shown in Figure 5.4, is used in AUTODYN, whence the relation
between the fracture energy, GF, and the ultimate crack strain (corresponding to the
critical crack opening wc), εu, can be expressed as:
el	t
F
u l	f
G	2
=
	ε 	(5.9)
or after rearrangement:
2
el	u	t
F
l	f
G
ε
= 	(5.10)
In the standard RHT material model, where the hydrodynamic tensile failure model is
used and a limit on the crack strain is set to 1% in the damage model (as described in
Section 5.1.1), the post-failure behaviour is the same for all element sizes, meaning
that the value of the fracture energy is greatly mesh dependent. In Figure 5.5 the linear
post-failure response calculated according to Equation 5.9 (with GF = 100 Nm/m2 and
f t = 3.5 MPa), of cubes with different sizes (1.0, 2.5, 5 and 10 mm) are shown,
together with the post-failure response for a cubic element simulated with the RHT
model.
σ
f t
εu = wc/l el ε
area = GF

-- 45 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	32
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
0 	0.01 	0.02 	0.03 	0.04 	0.05
Strain [-]
Tensile stress [MPa]
RHT
1.0 mm
2.5 mm
5.0 mm
10 mm
Figure 5.5 	Stress-strain relation for uni-axial tension for RHT (with no strain-rate
dependence of the tensile strength) and linear softening relation for
different element sizes.
As seen in Figure 5.5, the relation for the softening behaviour is approximately linear
also for the RHT model and the fracture energy corresponding to different element
sizes in the RHT model can thus be estimated with Equation 5.10; see Table 5.1. For
an element size of 5 mm the fracture energy calculated according to the RHT model
agrees with that corresponding to normal-strength concrete, for larger elements the
fracture energy is overestimated and for small elements underestimated.
Table 5.1 	Estimations of fracture energy used in RHT material model for different
element sizes, calculated by means of Equation 5.10. Tensile strength of
3.5 MPa is assumed.
Element
length [mm] l el [mm] 	GF [Nm/m2 ]
1 	1.24 	21.7
2.5 	3.10 	54.3
5 	6.20 	109
10 	12.4 	217
15 	18.6 	326
It is clear that a larger number of small elements are able to make a better description
of deformed bodies than a lower number of larger elements. This is important for
simulations 	of, 	for 	example, 	impact 	and 	penetration 	phenomenon. 	Zukas 	and
Scheffler (2000) concluded, after numerical studies of projectile impact on concrete,
that there should be at least three elements in the impacted target per radius of the
impacting projectile to achieve accuracy in the simulations. However, in cases where
the overall damage caused by the impacting body is of interest instead of the exact

-- 46 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	33
lapse of the penetration process, it may be accurate enough to use larger elements.
This is further discussed in Section 7.2.2.
As the failure surface is reached in an element, localisation takes place, meaning that
the deformation is localised to this element and the surrounding mesh elements are
elastically unloaded. All the plastic deformations occur in the localised element, until
the ultimate plastic strain is reached. Since the strain rate is calculated as the change
in strain during a time step, where the strain is related to the element size, as discussed
earlier, the strain rate will be mesh-dependent after localisation. The smaller the
element in which the localisation takes place, the higher the strain rate becomes after
localisation. Hence, it becomes difficult to properly use a strain-rate criterion in an
element where localisation has occurred. This effect, however, is minimised by use of
a cut-off criterion limiting the tensile stress after failure initiation to exceed the tensile
failure stress; see Leppänen (2004).

-- 47 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	34
6 	Effect of Steel Fibres in Concrete
The increased impact resistance of fibre-reinforced concrete, compared to plain
concrete, has been observed in several experiments, e.g. Nataraja et al. (2005). Since
often only a few variables, e.g. fibre type and its volume fraction, can be studied per
experiment, and due to the complexity of the impacting phenomenon itself it is
difficult to draw generic conclusions from these tests. By means of a numerical
simulation tool the influence of different parameters can be studied in a more cost-
effective way.
In order to investigate how the addition of fibres in concrete, and the consequently
enhanced energy-absorbing characteristics described in Section 2.2, influence the
projectile resistance of a structure, numerical simulations were conducted. These
simulations include projectile impacts on plain and fibre-reinforced concrete targets.
The simulations, their numerical model and results are mainly described in Paper I,
even though a brief presentation is given in this chapter as well. However, due to
limitations in the numerical model, which are discussed in this chapter, this study
should be seen as a generic study indicating the relative effect of the fibres.
The basic setup of the simulations, i.e. the geometry and characteristics of target and
projectile, was the same as used in an experiment of projectile impacts on plain
concrete performed at the Swedish Defence Research Agency (FOI) in 1998; see
Hansson (1998). This experiment was used to validate the numerical model of plain
concrete, 	which 	in 	turn 	was 	used 	to 	study 	how 	different 	assumptions 	and
simplifications needed in the simulations of fibre-reinforced concrete influenced the
results. In order to study also how the addition of fibres influenced the formation of
scabbing craters, the length and projectile geometry were varied in the simulations.
6.1 	Materials used in study
Modelling of the discrete fibres within the concrete mix would require extensive work
with the numerical mesh and complex descriptions of the fibre-concrete interface
behaviour, so the fibre-reinforced concrete was modelled as one material. Since only
moderate dosages of fibres (<1%) were used in the simulations, their influence was
limited to an enhanced post-crack behaviour compared to plain concrete. The post-
crack behaviour for the fibre-reinforced concretes (called FRC) was characterised by
their fracture energies, for which approximate values of the corresponding volume
fractions of end-hooked steel fibres were calculated according to Löfgren (2005); see
Section 2.2.
The fracture energy of the plain concrete (called NSC) was estimated to 100 Nm/m2
and three different fibre-reinforced concretes (called FRC1, FRC2 and FRC3) with
fracture energies of 2000, 4000 and 6000 Nm/m2 , corresponding to steel-fibre volume
fractions of approximately 0.20, 0.50 and 0.75%, respectively, were used in the
simulations. As discussed in Sections 2.1 and 2.2 different relations between the stress
and crack opening are proposed for both plain and fibre-reinforced concrete, but it
was here assumed that the bi-linear relations are accurate enough in both cases. The
bi-linear stress-crack opening relation proposed by Gylltoft (1983) was used for plain

-- 48 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	35
concrete and the one proposed by Löfgren (2005) was used for the fibre-reinforced
concretes. These stress-crack opening relations for the plain and fibre-reinforced
concretes are shown in Figure 6.1.
Figure 6.1 	Crack softening for concrete NSC, FRC1, FRC2 and FRC3.
6.2 	Limitations of numerical model
Since the influence of adding fibres into the concrete mix was limited to improved
post-crack behaviour in the simulations and since bi-linear relations were used to
describe the crack softening, it was necessary to use a principal-stress tensile-failure
model, as discussed in Section 5.1.1. As a consequence the tensile strength was no
longer strain-rate-dependent. An attempt to reintroduce the strain-rate dependence in
tension was made by adding it in the user-subroutine used for the modified crack-
softening 	behaviour. 	However, 	it 	was 	found 	impossible 	to 	reintroduce 	this
dependence without getting unwanted effects on the crack-softening behaviour, since
the user-defined tensile strength is employed only if it falls inside the RHT failure
surface.
In the RHT constitutive model a parameter δ is used to describe the strain-rate effect
on the tensile strength. By default this value is set to 0.036 and if δ equals zero the
strain-rate 	dependence 	is 	turned 	off. 	In 	order 	to 	introduce 	a 	stepwise 	linear
simplification of a DIF relation proposed by Malvar and Ross (1998), a high value of
the δ-parameter must be used to prevent the tensile strength from falling outside the
RHT failure surface. This is seen in Figure 6.2 where the simplified DIF relation used
in the user-subroutine (user-DIF) is shown together with the DIF relation according to
the RHT material model when δ equals 0.1 (RHT-DIF) and the results from uni-axial
tensile simulations (Results). In the figure it can be seen that the desired DIF relation
was followed up to a strain rate of approximately 50 s-1 .
G F,FRC3 = 6000 Nm/m2
G F,FRC2 = 4000 Nm/m2
G F,FRC1 = 2000 Nm/m2
G F,NSC = 100 Nm/m2
w [mm]
tf
σ
0
0.2
0.4
0.6
0.8
1
0 	0.05 	0.1 	0.15 	0.2

-- 49 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	36
Figure 6.2 	DIF relations as implemented in user-subroutine and RHT constitutive
model together with results from uni-axial tensile simulations.
However, a high value of the δ-parameter leads to unstable solutions with the standard
RHT constitutive model, leading to underestimated fracture energies. This can be seen
in Figure 6.3, where the result from a uni-axial tensile simulation where δ = 0.1
(Result) is shown together with the crack-softening relation defined in the user-
subroutine (Input). Due to these problems it was chosen to disregard the strain-rate
dependence of the tensile strength. For further discussion about the limitations of the
study the reader is referred to Paper I.
0
2
4
6
8
10
12
0 	0.02 	0.04 	0.06 	0.08
Crack strain [-]
Stress [MPa]
Figure 6.3 	Result from uni-axial tensile simulation and input relation used in sub-
routine.
6.3 	Validation and influence of simplifications
As already mentioned, the basic numerical setup corresponded to the experimental
setup presented in Hansson (1998), where 6.25 kg projectiles were fired into cylinders
of plain concrete. The latter, 2.0 metres long and 1.6 metres wide, had a concrete
strength of approximately 40 MPa (tested on 150 mm cubes) and were cast in a steel
1
2
3
4
5
6
0.01 	0.1 	1 	10 	100 	1000
Dynamic Increase Factor (tension)
RHT-DIF
Results
user-DIF
Strain rate [s-1
]
Input	Result

-- 50 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	37
culvert. The projectile had a length of 225 mm, a calibre of 75 mm and a striking
velocity of 485 m/s. For further information about the experimental setup and the
material properties the reader is referred to Paper I and Hansson (1998). The resulting
depths of penetration were 655 and 660 mm and the diameters of the front-face craters
were approximately 800 mm.
The 	simulations 	were 	conducted 	in 	AUTODYN 2D 	with 	axial 	symmetry 	and
Lagrangian solver technique. Based on experience, the element size for the concrete
was chosen to be 5 mm, see Figure 6.4, and a finer mesh was not believed to increase
the accuracy of the results enough to be worth the increased computational time. The
projectile and steel culvert were modelled with the von Mises material model and had
a yield strength of 792 MPa, a linear EOS with bulk modulus of 159 GPa and a shear
modulus of 81.8 GPa.
Figure 6.4 	Numerical mesh for simulations with ogive-nosed projectile.
The standard RHT model was used for validation of the numerical model; the material
parameters used are shown in Appendix A1 of Paper I. As seen in Figure 6.5, where
the result of the simulation used for validation is shown together with the results from
the experiment, both the depth of penetration, measured as the depth of fully damaged
concrete, and the front-face crater size are accurately simulated.
Figure 6.5 	Simulation result for plain concrete with standard RHT material model
and the experimental measurements indicated as arrows.
0 	1000 mm
800 mm

-- 51 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	38
The change from the standard RHT material model to the modified RHT material
model used in this study included:
• 	turning off the strain-rate dependence
• 	using a principal-stress tensile-failure model instead of the hydrodynamic
tensile failure
• 	using a bi-linear crack-softening behaviour instead of a linear crack softening
The result of simulation with the modified RHT material model for plain concrete is
shown in Figure 6.6. The depth of penetration is 960 mm and the front-face crater
diameter is 1 020 mm, which exceeds the experimental measurements by 28 and 45%,
respectively. Hence, this simulation does not show the real situation, but is anyway
used to study the relative influence of adding fibres to the concrete.
Figure 6.6 	Simulation result for plain concrete with modified RHT material model.
6.4 	Comparative study of addition of fibres
As mentioned in Section 6.1, three different fibre concretes, representing three
different volume fractions of fibres, were used in this study. In order to study also
how the addition of fibres in plain concrete influences the formation of a scabbing
crater, shorter cylinders of 1.0, 1.1 and 1.3 metres were also used.
In Figure 6.7 the results for the three fibre concretes are shown, for the case of a
2.0 metre long cylinder. When comparing these results with the case of plain concrete
(in Figure 6.6) it can be seen that the depth of penetration is negligibly influenced by
the addition of fibres, while the influence on the front-face crater size is considerable.
However, an increase of the volume fraction of fibres from 0.2% to 0.5 or 0.75% only
leads to further small reductions of the front-face crater. The addition of fibres also
gives a reduced crack propagation behind the crater region, so that damage becomes
confined to a more localised volume; and in contrast to the front-face crater size, this
effect is also seen when increasing the amount of fibres within the concrete.
0
800 mm
1000 mm

-- 52 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	39
Figure 6.7 	Simulation result for fibre-reinforced concrete with volume fractions of
0.2, 0.5 and 0.75%. Target length of 2.0 m.
Decreasing the length of the cylinder from 2.0 to 1.3 metres only leads to minor
effects on the depth of penetration and the diameter of the front-face crater, as seen in
Figure 6.8. Even though almost 75% of the target is penetrated, scabbing does not
occur.
Figure 6.8 	Simulation result for plain concrete and fibre-reinforced concrete with
volume fraction of 0.2%. Target length of 1.3 m.
Further decrease of the target length, to 1.1 metre, does however lead to scabbing for
all concretes, i.e. plain and all three fibre-reinforced concretes, as seen in Figure 6.9.
But this scabbing effect cannot be differentiated from penetration since it is caused by
the formation of a punching-shear plug; see Section 4.1. It can again be concluded
1000 mm
Plain concrete
800 mm
0
Volume fraction 0.2%
1000 mm
Volume fraction 0.2%
Volume fraction 0.75%
800 mm
0
Volume fraction 0.5%

-- 53 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	40
that the addition of fibres leads to a decreased front-face crater diameter. The addition
of fibres in plain concrete results in a large reduction of the rear-face crater size and,
unlike the size of the front-face crater, the rear-face crater decreases also when
increasing the volume fraction of fibres.
Figure 6.9 	Simulation result for plain concrete and fibre-reinforced concrete with
volume fractions of 0.2, 0.5 and 0.75%. Target length of 1.1 m.
In order to study the effect of fibres for scabbing caused only by the reflected stress
wave and not in combination with plugging effects from the projectile, simulations of
a 1.0 metre long cylinder subjected to impact by a flat-nosed projectile with striking
velocity of 650 m/s were conducted. The results from these simulations are shown in
Figure 6.10, where it can be seen that scabbing occurs for the plain-concrete target,
but not for the cases with fibre-reinforced concretes. Even though crack initiation
takes place at the rear ends due to the reflected stress wave also in the latter cases, the
effect of the fibres prevents the initiated crack from developing into a continuous
crack, which causes scabbing, as in the case of plain concrete.
Figure 6.10 	Simulation result for plain concrete and fibre-reinforced concrete with
volume fractions of 0.2 and 0.75%. Target length of 1.0 m.
Volume fraction 0.75%
Volume fraction 0.2%
Volume fraction 0.5%
1000 mm
Plain concrete
800 mm
0
Volume fraction 0.2%	Plain concrete 	Volume fraction 0.75%
0 	1000 mm
800 mm

-- 54 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	41
The scabbing cracks formed at the rear face of the cylinder with plain concrete can be
seen in Figure 6.11, where the node velocity vectors are shown. The scabbing crack is
seen as the outermost opened crack (indicated with the colour red) along the rear face
of the concrete body. Since the velocity is higher on the right side of the crack than on
the left side, and the concrete in between is fully damaged, and thus cannot transfer
tensile stresses, scabbing occurs. The velocity of the scabbed concrete, relative the
velocity on the left side of the crack is approximately 1.5 m/s. This is a low velocity in
its connection, but shows the relative behaviour.
Figure 6.11 	Scabbing crack in plain concrete, shown with velocity vectors.

-- 55 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	42
7 	Blast and Fragment Loading
A numerical study of the weapon effect on a reinforced concrete wall element was
conducted; see also Paper II. The aim of the study was to further increase the
knowledge of reinforced concrete structures exposed to explosions, i.e. blast and
fragments. The geometry of the wall and the load characteristics were based on the
regulations for civil defence shelters in Sweden.
7.1 	Wall element and load characteristics
7.1.1 	Design criteria for civil defence shelters in Sweden
The Swedish Shelter Regulations, Ekengren (2006), regulate the design of civil
defence shelters in Sweden and contain the requirements specified for these protective
structures. Civil defence shelters are designed not only to withstand conventional-
weapon effects, but also radioactive radiation, chemical and biological warfare and
explosive gas, etc. However, in this section only the requirements of protective
capacity linked to conventional weapons effects are specified; for further information
see Ekengren (2006).
According to Ekengren (1994): “The shelter shall, with negligible risk to the
occupants in need of shelter of being killed or injured, be able to withstand the effect
of a pressure wave corresponding to that produced by a 250 kilograms GP-bomb with
50 weight per cent TNT which bursts freely outside at a distance of 5.0 meters from
the outside of the shelter during free pressure release”. Furthermore, “The shelter
shall, with negligible risk to the occupants of the shelter of being killed or seriously
injured, also be able to withstand the effect of splinter from a burst bomb as above.”
In the case of fragment loading it is the fragment cluster that should be considered,
while larger individual fragments are allowed to damage and penetrate the shelter
structure.
In the Swedish Shelter Regulations, the civil defence shelter is assumed to be a
reinforced, solid concrete structure. The concrete must be of at least strength class
C25/30 according to BBK04, Boverket (2004), and hot-rolled reinforcement bars with
a specified requirement of the strain hardening must be used. In order to fulfil the
requirements of protective capacity, minimum concrete thicknesses and reinforcement
contents are specified. The minimum concrete thicknesses for the shelter roof, floor
and walls are 350, 200 and 350 mm, respectively, for a shelter without backfilling.
The minimum and maximum values of reinforcement content are 0.14 and 1.10%,
respectively. The reinforcement is to be placed in two perpendicular alignments in
both edges of the structural element, with a maximum concrete cover of 50 mm. A
minimum reinforcement-bar diameter of 10 mm and maximum bar spacing of
200 mm are required.

-- 56 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	43
7.1.2 	Wall element
When designing a civil defence shelter according to the Swedish Shelter Regulations,
equivalent static loads are used. The equivalent static load representing the weapon
effect is given as long-term pressures, both positive and negative, applied to the walls
and roof. The positive static equivalent load (50 kN/m2 ) was used to calculate the
required amount of reinforcement in the wall, giving reinforcement bars ø10 s170 mm
(equalling 465 mm2 /m in each face). The geometry of the shelter chosen for this study
is shown in Figure 7.1.
Figure 7.1 	Civil defence shelter.
Since the response of one-way slabs, or slabs that reasonably approximate the
behaviour of one-way slabs, can be analysed by simulating the response of a beam,
representing a unit width of the slab ACSE (1999), it was first chosen to study a
metre-wide 	strip 	of 	the 	wall. 	However, 	due 	to 	the 	heavy 	numerical 	model
corresponding to this choice only a 170 mm wide strip was simulated; this choice is
further discussed in Section 7.4.
In order to further simplify the analysis the wall strip was regarded as simply
supported, as shown in Figure 7.2. It should, however, be pointed out that this was not
done in an attempt to imitate the real support condition, which is more semi-rigid, but
only to simplify the numerical model and decrease the complexity of the behaviour.
Figure 7.2 	Simplified model of wall in civil defence shelter (Figure 7.1), rotated
90 degrees.
5.0 m
3.0 m
0.2 m
 
0.35 m
0.35 m

-- 57 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	44
7.1.3 	Loading definitions
The blast load caused by a detonation of a cased charge differs from that caused by an
uncased charge since, in the former instance, energy is required to fracture the casing.
As discussed in Section 2.3, it is common to approximate the total impulse from blast
and fragment loading as the impulse caused by a bare burst with the same weight of
explosive. This means that the difference in impulse for the blast wave caused by a
cased charge and a bare charge with the same weight of explosive filling is assumed
to correspond to the impulse caused by the fragment impact. Nevertheless, the blast
load corresponding to a bare charge of the same weight as the cased charge was used
in this study.
The blast load from a 125 kg bare charge of TNT, at a stand-off of 5.0 metres,
calculated with the software ConWep (1992) is shown in Figure 7.3 together with the
simplified relation used in this study. The blast load is assumed to be uniformly
distributed over the wall and possible diffraction effects are disregarded. The blast
load has an impulse density of 2 795 Ns/m2 .
0
1000
2000
3000
4000
5000
0 	1 	2 	3 	4 	5
Time [ms]
Pressure, P [kPa]
Simplified relation
ConWep
Figure 7.3 	Pressure load as function of time for 125 kg TNT at a distance of
5.0 metres, according to ConWep (1992), and the simplified relation
used in the study.
The 	fragments 	caused 	by 	the 	GP-bomb, 	referred 	to 	in 	the 	Swedish 	Shelter
Regulations, are more difficult to characterise, since neither the geometry of the bomb
nor the thickness of the casing is defined. Hence, the fragment distribution factor, M A,
in Equation 2.5 to determine the mass distribution cannot be calculated. However, the
fragment 	distribution 	factor 	of 	the 	American 	GP-bomb 	Mk82, 	found 	in
Krauthammer (2006), was used to estimate the fragment distribution factor of the
bomb referred to in the Swedish Shelter Regulations, by adjusting for the increased
charge volume. The Mk82 has a nominal weight of 500 lb (226.8 kg) and contains
192.0 lb (87.09 kg) of the high-explosive H-6, corresponding to 242.9 lb (110.2 kg)
equivalent weight of TNT, and is therefore rather representative for the GP-bomb
specified in the Swedish Shelter Regulations.
Time
[ms]
Pressure
[kPa]
0.0 	5 006
0.3 	2 930
0.6 	1 713
1.0 	836
1.5 	340
2.0 	137
3.0 	22
8.974 	0

-- 58 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	45
In order to simplify the simulations and the analyses of their results, it was determined
to use the same weight and shape for all the fragments striking the wall. This is
obviously a rough idealisation of the real situation, where the range of the fragment
mass may be wide and the shape of the fragments may differ considerably, at least for
bombs whose casing is not fracturing in a pre-defined pattern. The casing material
was assumed to be made of steel and the fragments were assumed to be spherical in
shape; thus, after determination of the mass of this design fragment, it was possible to
calculate the corresponding diameter of the fragments.
As it is the cluster of fragments that should be considered, it is not the heaviest
individual fragment that has the worst effect, but the total impulse caused by the
fragments in combination with the local damage of their impact. Hence, the method of
using 	a 	confidence 	level 	to 	determine 	the 	mass 	of 	the 	design 	fragment 	(see
Section 3.2.1) is not applicable for this case. Instead an impulse distribution for the
fragments was determined, by use of the mass distribution and the striking velocity
corresponding to each mass (see Equation 3.5 and 3.8), and the mass corresponding to
the mean impulse for all fragments was used as the design fragment weight; see
Appendix C. The mass of the design fragment for the specified bomb was thereby
estimated to be 21.9 grams, and the corresponding diameter and striking velocity were
calculated to be 17.5 mm and 1 760 m/s, respectively.
Since the shape of the bomb is not spherical, the distribution of the fragments in the
surroundings of the bomb will also differ depending on the position relative to the
bomb, as discussed in Section 3.2.3. As the geometry and configuration of the
specified bomb are not known, rough estimations of the fragment distribution based
on test data were made. In Forsén and Sten (1994), a comparison of the fragment
distribution for the two 250 kg GP-bombs Mk 82 and m/50, with test data on the
fragment distribution at different angles relative to the axis of the bombs, is presented.
In a rough compilation of these data, it was found that fragments with a total mass
equalling approximately 60% of the casing mass were found within a sector of
±20 degrees for the two bombs, where the angles are measured relative to the normal
to the longitudinal axis of the bomb, as shown in Figure 7.4. This means that the worst
fragment-loading situation is, for this idealised bomb, when the bomb is vertically
directed with its centre at the same height as the middle of the wall. Assuming this
position of the bomb, the numbers of design fragments striking the wall can be
calculated by projection. The fragment density is approximately 0.66 kg/m2 and the
corresponding impulse density is 1 125 Ns/m2 .

-- 59 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	46
Figure 7.4 	For the two GP-bombs Mk82 and m/50 approximately 60% of the
fragment mass was found within ± 20 degrees, relative to the normal to
the longitudinal axis of the bombs.
As further simplifications in the numerical simulations, the fragments are assumed to
be uniformly distributed over the wall, and to strike the wall at the same time at
perpendicular angle relative to the wall surface.
7.2 	Preliminary study
Simulations of blast and fragment loading may place different, and sometimes
conflicting, demands on the numerical model, e.g. the numerical solving technique,
material model and numerical mesh. In order to calibrate and validate the numerical
model, a preliminary study was conducted prior to the main study of blast and
fragment loading of the wall strip described in Section 7.1.2. The main objective of
the preliminary study was to find a numerical model, i.e. material model and
numerical mesh, which was a good compromise for describing the response of the
wall strip subjected to both blast and fragment loading, simulated in the main study in
Section 7.4.
In this preliminary study the blast and fragment loadings were treated separately to
clarify how the responses, local for fragment impact and global for the blast load, are
affected by the change of different parameters within the model. An experiment of
blast-loaded concrete beams, presented in Magnusson and Hansson (2005), and an
experiment 	of 	single 	fragment 	impacts 	on 	concrete 	blocks, 	conducted 	by
Leppänen (2003), were used to validate the choices made in the numerical model. The
fragment simulations in the preliminary study were made in AUTODYN 2D with
axial symmetry, while the simulations of blast loading were made in AUTODYN 3D.
However, the blast-loaded beams were modelled with a width of only one element
and plane-strain boundary conditions in order to imitate a 2D simulation.
The findings from the preliminary study were then inferred and the numerical model
used in the main study is based on these conclusions.
0°
+20°
-20°

-- 60 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	47
7.2.1 	Blast loading
In Magnusson and Hallgren (2000) the test of reinforced concrete beams subjected to
blast loading is presented. Magnusson and Hansson (2005) used AUTODYN 3D to
simulate the response of these beams and compared different material models and
their assumptions.
The configuration of the test beam, including reinforcement detailing, and the
pressure-time relation for the blast load are shown in Figure 7.5 and Table 7.1,
respectively. The concrete quality for the beam chosen for simulation was 50 MPa
and the reinforcement was of type B500BT with a yield strength of 500 MPa.
However, the stress-strain relationship for the reinforcing steel used in the numerical
simulations was based on uni-axial tensile tests; see Magnusson and Hansson (2005).
The stepwise-linear simplification of the stress-plastic strain relation from the test is
presented in Table 7.2. Due to the test setup, the blast load did not apply to the outer
60 mm from each end of the beam. In the test, bolts were at the supports to stabilise
the beam; but even though these bolts resulted in some degree of fixation, rotation
could take place. The maximum mid-point deflection of the beam was measured to be
approximately 23 mm and took place after 8 ms.
Figure 7.5 	Test-beam configuration, based on Magnusson and Hallgren (2000).
Table 7.1 	Simplified pressure-time relation for the blast load.
Point No. 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10
Pressure
[kPa] 0 	1 100 	810 	580 	750 	390 	485 	280 	100 	0
Time
[ms] 0 	0.16 	1.76 	2.36 	3.04 	5.52 	5.76 	8.10 	14.5 	24.0
5φ16 B500BT
[mm]
2φ10 B500BT

-- 61 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	48
Table 7.2 	Stress-plastic strain relation for reinforcement steel B500BT, presented
by Magnusson and Hansson (2005).
Point No. 	0 	1 	2 	3 	4 	5 	6 	7 	8
Stress
[MPa] 549 	562 	568 	627 	678 	715 	746 	776 	795
Plastic strain
[‰] 0 	6.7 	16.2 	28.6 	45.7 	64.5 	92.1 	127.8 	179.2
The concrete was modelled with cubic elements and the RHT material model. In order
to reduce the size of the numerical model, only a one-element-wide part of the width
of the beam was modelled. All the reinforcement bars were modelled with Johnson-
Cook material model and, because of the limited width modelled, the dimensions of
the tensile, compressive and shear reinforcement bars had to be adjusted so as still to
represent the correct amount of reinforcement. The reinforcement bars were modelled
with beam elements with the same length as the surrounding concrete elements. The
numerical 	setup 	of 	the 	experiment 	is 	shown 	in 	Figure 7.6, 	where 	also 	the
reinforcement bar diameters after adjustment to the limited width are specified.
Figure 7.6 	Numerical setup and adopted reinforcement bar dimensions.
Even though bolts were used to keep the beam somewhat fixed over the supports in
the test, Magnusson and Hansson (2005) modelled the beam as simply supported.
They concluded that the bolts had some, but not crucial, influence on the beam
response. 	They 	also 	used 	three 	different 	geometries 	of 	the 	supports 	in 	their
simulations together with different interaction criteria between the supports and the
concrete (friction between the surfaces or nodes joined together). All three of these
support configurations resulted in accurate beam responses, even though there was
12
Side-view
φ1.6 s204
2φ2.0
2φ2.5
84 
36
36
36
120 	120	1488
Cross-section
[mm]

-- 62 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	49
some variation in the measured mid-point deflection and acceleration. Modelling with
friction as interaction criterion resulted in somewhat reduced damage around the
supports, compared to the results where the support and the concrete were joined
together. Based on Magnusson and Hansson’s (2005) results it was believed accurate
enough to model the support as half-cylinders jointed together with the interfacing
concrete.
The blast load was applied to the top surface of the beam by use of a stepwise-linear
pressure boundary condition. It should, however, be observed that the load was not
applied to the whole front surface due to the test configuration; hence, the load stops
60 mm from the beam end.
In order to calibrate the numerical model for the main study, the influences of tensile-
failure model, flow rule, fracture energy and element size were studied, as seen in
Table 7.3. The beam responses and the mid-point deflections are shown in Figure 7.7.
Table 7.3 	Simulations 	of 	blast-loaded 	reinforced 	concrete 	beams, 	shown 	in
Figure 7.7
Ident Tensile failure
model
Fracture
energy
[Nm/m2 ]
Flow rule Element size
[mm]
BLAST001 	Hydrodynamic 	- 	- 	12
BLAST002 	Principal stress 	120 	Non-associated 	12
BLAST003 	Principal stress 	120 	Associated 	12
BLAST004 	Principal stress 	180 	Associated 	12
BLAST005 	Principal stress 	120 	Associated 	6*
* In this simulation the elements were no longer cubic since the width of the beam (12 mm) still was
modelled with one element.

-- 63 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	50
0
5
10
15
20
25
30
35
40
0 	2 	4 	6 	8 	10
Time [ms]
Deflection [mm]
BLAST001 	BLAST002
BLAST003 	BLAST004
BLAST005 BLAST001: Hydrodynamic failure
12 mm element
BLAST002: Principal stress failure, Non-associated
G F 120 Nm/m2
, 12 mm element
BLAST003: Principal stress failure, Associated
G F 120 Nm/m2
, 12 mm element
BLAST004: Principal stress failure, Associated
G F 180 Nm/m2
, 12 mm element
BLAST005: Principal stress failure, Associated
G F 120 Nm/m2
, 6 mm element
Figure 7.7 	Mid-point deflections and beam responses for simulations in Table 7.3.
From the beam response results, shown in Figure 7.7, it was concluded that the use of
the principal-stress tensile-failure model and an associated flow rule was necessary to
get an accurate crack pattern in the beam. When the standard RHT material model
was used, including the hydrodynamic tensile-failure model (simulation BLAST001),
only a small number of cracks appear in the beam. This is probably, at least partly, a
result of the limitation of the crack strain discussed in Section 5.3, giving an
overestimated 	value 	of 	the 	fracture 	energy 	when 	an 	element 	size 	larger 	than
approximately 	5 mm 	is 	used. 	In 	AUTODYN 	a 	non-associated 	flow 	rule 	(in
AUTODYN called No-Bulking) is used as default, since the choice of an associated
flow 	rule 	may 	lead 	to 	excessive 	bulking 	of 	the 	material, 	according 	to
AUTODYN (2005). This seems to be valid for simulations of penetration, while in the
case of blast loading it leads to incorrect results of the beam response; this is in
accordance with conclusions in Magnusson and Hansson (2005). However, acceptable
estimations of the mid-point deflection were achieved in all simulations presented in
Table 7.3, except for the simulation where a combination of principal-stress tensile-
failure model and a non-associated flow law was used (simulation BLAST002), as
seen in Figure 7.7. The displacement for simulations with relative good agreement the
difference in deflection is limited to approximately ±20%.
7.2.2 	Fragment impact
The influences of tensile-failure model, flow rule and element size for the concrete
were studied also for single fragment impact on concrete. The experiment presented in
Leppänen (2003, 2004) was used to validate the numerical model.
Leppänen (2003) tested concrete blocks subjected to single fragment impacts and
fragment cluster impacts. In single fragment impact, which is the only situation
presented here, the concrete block had the dimensions 750 x 375 x 500 mm (where

-- 64 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	51
500 mm is the depth of the block). The compressive strength of the concrete was
31.2 MPa, tested on cylinders. Two or three fragment shots were fired against each
concrete block, and the fragments, in total eight, had various striking velocities from
1 754 to 2 000 m/s. The fragments were steel point-bearing balls with a diameter of
8 mm. The mass is not specified in the test report, but should be approximately
2.1 grams. The depth of penetration varied between 52.5 and 57 mm and the diameter
of the spalling craters was between 74 and 93 mm.
For the validation of the numerical model, which was to be used in the main study,
shot number 4 as seen in Figure 7.8 was chosen. The striking velocity of this shot was
1 879 m/s and the resulting depth of penetration and diameter of the crater were 54
and 93 mm, respectively, as shown in the close-up of the damaged area for shot 4 in
Figure 7.8.
Cross section 	Plane view
93 mm
54 mm
Figure 7.8 	Experimental results from single fragment impact (cross-section, plane
view and close-up of damage of shot number 4, from Leppänen 2004).
The simulations were made in AUTODYN 2D with axial symmetry. The concrete
was modelled with the RHT material model, and the von Mises material model, with
yield strength of 800 MPa, was used for the fragment. The simulations of single
fragment impact conducted within the preliminary study are summarised in Table 7.4.
The results from these simulations are shown in Figure 7.9.

-- 65 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	52
Table 7.4 	Simulations of single fragment impact on concrete block, shown in
Figure 7.9.
Ident Tensile failure
model
Fracture
energy
[Nm/m2 ]
Flow rule Element size
[mm]
FRAGM001 	Hydrodynamic 	- 	- 	1
FRAGM002 	Principal stress 	120 	Non-associated 	1
FRAGM003 	Principal stress 	120 	Associated 	1
FRAGM004 	Principal stress 	120 	Associated 	2
Figure 7.9 	Results 	from 	simulations 	of 	single 	fragment 	impacts, 	shown 	in
Table 7.4. The squares indicate the damage measured in experiments
(height 46.5 mm and length 54 mm). (Only a part of the numerical mesh
is shown.)
As the 1.0-mm elements and the standard RHT material model, with hydrodynamic
tensile failure (FRAGM001), were used for the concrete, the simulated depth of
penetration – measured as the depth of fully damaged concrete – was overestimated
(90 mm compared with 54 mm in the test). Changing the tensile-failure model from
hydrodynamic to principal stress with non-associated flow rule (FRAGM002), the
depth of penetration decreased to 58 mm, and became more similar to that of the test.
Since the simulation of blast loading requires an associated flow rule, also this
alternative had to be tested (FRAGM003), and the depth of penetration again
decreased somewhat (to 50 mm). Doubling the element size from 1 to 2 mm gave a
small increase of the penetration depth to 52 mm, and was assumed to simulate
reasonably well the damage caused by the fragment. The front-face crater diameter
FRAGM004
FRAGM002	FRAGM001
FRAGM003

-- 66 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	53
differed between the simulations (ranging from 72 to 94 mm, compared with 93 mm
in the test), but was accurately simulated in at least simulations FRAGM003 and
FRAGM004.
Since the fragments used in the experiments conducted by Leppänen (2003) were
small (8 mm diameter) compared to the fragments used in the main study (17.5 mm
diameter) and a thick concrete block was simulated instead of a wall, additional
simulations more similar to the conditions used in the main study were performed. In
these additional simulations the influence of the element size was studied. The
principal-stress tensile-failure model was used together with an associated flow rule
and fracture energy of 120 Nm/m2 for all these additional simulations.
The wall strip used in the main study had a thickness of 350 mm and a height of
3 metres, as shown in Figure 7.1. For the additional simulations these measurements
were used. As mentioned in Section 5.3, Zukas and Scheffler (2000) concluded that at
least three elements in the impacted target per radius of the impacting body should be
used in the numerical mesh. In the simulations of single fragment impact discussed
above, however, it was concluded that the damage could be reasonably simulated also
with larger elements. In this additional study of single fragment impact, three element
sizes were used, 2, 3 and 6 mm, named simulations FRAGM004, FRAGM005 and
FRAGM006, respectively. The results from the additional simulations are summarised
in Figure 7.10.
Figure 7.10 	Results from additional simulations of fragment impacts.
Since the depth of penetration and front-face crater size do not differ much for the
three simulations (FRAGM004 to FRAGM006), it was assumed that an element size
of 6 mm could be used to estimate reasonably well the local damage caused by the
fragment impact; see Figure 7.10.
FRAGM005
FRAGM007
FRAGM006

-- 67 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	54
7.2.3 	Conclusions
In order to accurately simulate the beam response when loaded with a blast wave, an
associated flow rule must be used; see Figure 7.7. The beam response, for blast
loading, was accurately described when 12-mm elements were used, and halving the
element size to 6 mm led to only small changes in the beam response.
The damage caused by an impacting fragment was most accurately simulated with the
use of the principal-stress tensile-failure model and a non-associated flow rule. Since
an associated flow rule is necessary to get accurate response in the case of blast
loading, it must be used in the simulations of combined loading. As an associated
flow rule was used in the simulations of fragment impact, the damage was somewhat
underestimated, but still relatively well described. The local damage caused by the
fragment impact is better described the smaller the elements are. However, for the
fragment used in the main study an element size of 6 mm may still be used even
though it is large compared to the radius of the impacting fragment. It must be pointed
out that this is not believed to give an accurate description of the penetration process
itself, but only to result in damage which approximates the damage caused by this
impact in reality.
7.3 	SDOF analyses
The SDOF method, described in Section 4.4, was used to estimate the mid-point
deflection and velocity of the wall strip when subjected to blast and impact loading.
With combined loading it was also of interest to find for which case the maximum
deflection was attained: for simultaneous arrival of the two loads, for blast load
arriving first or for fragments arriving first.
An ideal-plastic material behaviour was assumed and the maximum internal resistance
Rm was calculated as the maximum static internal resistance times a factor 1.3, for
taking into account dynamic effects in accordance with Forsén and Nordström (1992).
This increase in load-bearing capacity for high dynamic loads, compared to static
loads, is reported also by Magnusson and Hallgren (2000). Johansson (1999) also
observed an increased load-bearing capacity in numerical simulations of shelter walls
subjected to blast loading, and explained it by a normal force appearing in the loaded
structural element. This normal force is probably related to internal momentum
effects, and then appears even if the structural element studied is simply supported, as
in this case. The maximum internal resistance was therefore calculated as:
L
M
R Rd
m
8
3	.	1	= 	(7.1)
where M Rd is the moment capacity of the wall strip for static loading and L is the
length of the wall strip. The moment capacity calculated for the wall strip was
71 kNm.

-- 68 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	55
In Figure 7.11 the mid-point deflection of the wall strip is seen for different
configurations of arrival times in for combined loading. Five cases are presented:
1. 	Simultaneous loading
2. 	Blast arrives first, fragments arrive at time of maximum wall deflection
3. 	Blast arrives first, fragments arrive at time of maximum wall velocity
4. 	Fragments arrive first, blast arrives at time of maximum wall deflection
5. 	Fragments arrive first, blast arrives at time of maximum wall velocity
As seen in the figure, the case of simultaneous loading results in the maximum
deflection.
0
20
40
60
80
100
120
140
160
0 	10 	20 	30 	40 	50
Time [ms]
Deflection [mm]
 
Fragments arrive at maximum velocity
Fragments arrive at maximum deflection
Blast arrvives at maximum velocity
Blast arrives at maximum deflection
Simultaneous loading
Figure 7.11 	Mid-point deflection of wall strip subjected to combined loading with
different times of arrivals of the loads. Estimated with the SDOF
method. Since the responses in the case of simultaneous loading and the
case of fragments arriving first and the blast arriving at time of
maximum velocity are almost identical, these lines are seen as one in
the figure.
The mid-point deflection of the wall strip, estimated with the SDOF method in the
case of blast loading, fragment impact and the combination of these loads, is shown in
Figure 7.12. Maximum deflection reached for blast loading is 64 mm and appears
29.0 ms after the arrival. For fragment impact the corresponding values are 13.9 mm
at time 13.2 ms. In the case of combined, simultaneous loading the maximum
deflection is reached after 42.2 ms and is 139.2 mm, which is very high compared to
the other two cases.

-- 69 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	56
0
20
40
60
80
100
120
140
0 	10 	20 	30 	40 	50
Time [ms]
Deflection [mm]
fragment impact
blast load
combined loading, same arrival time
Figure 7.12 	Mid-point deflection of wall strip subjected to blast load, fragment
impact or combined, simultaneous loading of these. Estimated with the
SDOF method.
As seen in Figure 7.13, the maximum mid-point velocity of the wall strip for
combined loading (6.2 m/s) equals the sum of the maximum velocities in the cases of
blast and fragment loading subjected separately to the beam, 2.1 and 4.1 m/s,
respectively.
0
1
2
3
4
5
6
7
8
0 	10 	20 	30 	40 	50
Time [ms]
Velocity [m/s]
fragment impact
blast load
combined loading, same arrival time
Figure 7.13 	Mid-point velocity of wall strip subjected to blast load, fragment impact
or combined, simultaneous loading of these. Estimated with the SDOF
method.

-- 70 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	57
7.4 	Numerical analyses – main study
As shown in the preliminary study, Sections 7.2.1 and 7.2.2, the blast and fragment
loading place different requirements on the numerical-mesh geometry and the flow
rule used within the constitutive model. In order to conduct a numerical simulation of
blast and fragment loading, it was therefore necessary to find a compromise for the
numerical model, suitable to approximately describe the, local and global responses of
the reinforced concrete wall described in Section 7.1.2.
A relatively fine numerical mesh is necessary to simulate fragment impact and the
subsequent damage. In the preliminary study it was shown that an element size of
6 mm was fine enough to estimate the resulting damage, even though a finer mesh
must be used to reproduce the real behaviour; see Section 7.2.2. The response of blast
loading is, however, accurately simulated also for a coarser numerical mesh. The
preliminary study showed that an element size of 12 mm gave accurate results. Since
the direct damage (not including possible effects of the reflected stress wave) caused
by the fragment impacts is limited to the front of the target, the fine mesh was used
only here; see Figure 7.14. This was done to reduce the size of the numerical model,
and thereby the computational time required for the simulations.
However, modelling the wall, or even a metre-wide strip of the wall, results in an
excessively large numerical model. By use of symmetries and planar-strain boundary
conditions the model was limited to a 84 x 1 512 x 350 mm part, representing 4.25%
of a metre-wide wall strip. The mesh geometry for the numerical model of the
reinforced concrete target used in the simulations described in subsequent sections is
shown in Figure 7.14. The support was modelled in the same way as in the
preliminary study of blast loading (see Section 7.2.1), i.e. as half-cylinders restricted
from vertical movement, with linear-elastic material behaviour and full interaction
with the adjacent concrete.

-- 71 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	58
Figure 7.14 	Numerical 	mesh 	of 	wall 	strip 	used 	in 	simulations, 	also 	showing
reinforcement in the modelled wall strip.
The RHT material model for concrete, included in the standard material library in
AUTODYN, was used with some modifications. The preliminary study made it
necessary to use the principal-stress tensile-failure model (with crack softening)
instead 	of 	the 	hydrodynamic 	tensile-failure 	model; 	see 	Section 7.2.3. 	As 	also
discussed in Section 7.2.3, the simulations of blast and fragment loading also placed
different demands on the flow rule used in the material model, but an associated flow
rule was assumed to be the best choice for simulations of combined loading.
Since 	the 	longitudinal 	reinforcement 	bars 	lie 	in 	the 	plane 	of 	symmetry 	(see
Figure 7.14), the diameter had to be adapted to this by halving their area. The bars are
modelled with a piecewise linear Johnson-Cook material model, beam elements and
full interaction with the surrounding concrete; see Section 7.2.1.
The blast load was applied to the concrete front face by use of a time-dependent
pressure boundary condition equal to the simplified relation shown in Figure 7.3. The
size, mass and distribution of the fragments are also defined in Section 7.1.3. The
fragments were modelled in the same way as in the preliminary study, with two
elements across the radius and the von Mises (linear-elastic – ideal-plastic) material
168
1344
84 	102 	8+240 	[mm]
Transverse
reinforcemen t
Border between fine
and coarse mesh
x
y
204
204
192
204
204
192
204
Fragment 	Longitudinal
reinforcemen t

-- 72 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	59
model. In the case of combined loading the blast-wave front and the fragments were
assumed to arrive at the same time.
7.4.1 	Results
Only a brief description of the results from the numerical simulations is presented
here; for more detailed information and further reasoning of the results the reader is
referred to Paper II.
In Figure 7.15 the response of the wall strip when subjected to the blast load at the
time of maximum mid-point deflection is shown. The cracks closest to the supports
appear within less than 1 ms after the arrival at the wall and are probably direct shear
cracks. After another millisecond, flexural cracks have formed in the middle of the
beam, and the damage is localised to a relatively low number of cracks. The
maximum mid-point deflection is 65.2 mm and takes place at 29.3 ms after arrival of
the blast load.
Middle of wall strip
Figure 7.15 	Response of wall strip subjected to blast load at time of maximum mid-
point deflection.
The damage caused by the fragment impacts in the simulations is more complex than
in the case of blast loading, as seen in Figure 7.16, where the wall strip is shown when
maximum mid-point deflection is reached. The total damage consists of local damage
on the front face, scabbing cracks at the rear of the wall strip, direct shear cracks close
to the supports, and bending cracks propagating from the rear of the target towards the
front. Since the scabbing cracks did not occur in the simulations of fragment impact
made within the preliminary study (see Section 8.2.2.), they were not expected.
However, these 2D simulations did not take the effect of multiple, simultaneous
impact of fragments into account, and a 2D simulation, taking this effect into
consideration by use of boundary conditions, was conducted; this is further discussed
in Section 7.4.3. As seen in Figure 7.16 and Figure 7.15 more flexural cracks form in
the case of fragment loading than in blast loading (Figure 7.15), which may lead to a
more ductile behaviour as the reinforcement bars can strain at more locations. The
maximum mid-point deflection, in the case of fragment loading, is 11.0 mm and
occurs after 13.3 ms.

-- 73 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	60
Middle of wall strip
Figure 7.16 	Response of wall strip subjected to fragment impacts at time of
maximum mid-point deflection.
For combined loading, where the blast wave and the fragments arrive at the wall at the
same time, the crack pattern is very similar to that resulting from fragment loading
alone, seen when comparing Figure 7.17, where the response in the case of combined
loading is shown at time of maximum mid-point deflection, and Figure 7.16. This is
due to the early formation of craters at the front face and the appearance of scabbing
cracks caused by the fragment impacts. It can also be seen that the diameters of the
craters on the front face are smaller for combined loading than for fragment loading
alone. The reduced damage on the front side may lead to increased load-bearing
capability, compared to the case of fragment loading alone. The maximum mid-point
deflection is 85.7 mm and occurs after 33.4 ms.
Middle of wall strip
Figure 7.17 	Response of wall strip subjected to combined blast and fragment
loading at time of maximum mid-point deflection.
7.4.2 	Comparison with SDOF results
In Figure 7.18 the mid-point deflection, as a function of the time, is shown for the
blast load simulation together with the estimation made with the SDOF method; see
Section 7.3. As seen in the results from the numerical simulation and SDOF analysis,
the agreement between these two is good.

-- 74 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	61
Figure 7.18 	Response of wall strip subjected to blast load, estimated with SDOF
method and numerical simulation.
In Figure 7.19a the mid-point deflection, as a function of the time, is shown for the
fragment impact simulation together with the estimation made with the SDOF method
for this case. The maximum mid-point deflection estimated with the SDOF method in
the case of fragment loading was 13.9 mm, which is approximately 3 mm more than
the maximum mid-point deflection estimated in the numerical simulation. This can be
considered a relatively large difference, since it constitutes more than one fourth of
the deflection in the numerical simulation. There may be several explanations for this
difference. One of them may be that the simplifications in the SDOF analysis are too
rough to give accurate results. For example, the energy consumed during penetration
of the fragments and the subsequent crushing of the concrete, the probably reduced
bearing capacity of the wall strip due to this front-face damage, and the formation of
many flexural cracks, allowing an increase of energy-absorbing capacity compared to
the case of few flexural cracks, are not represented in the SDOF analysis. However,
when comparing the mid-point velocities estimated in the SDOF and numerical
analyses, 	see 	Figure 7.19b, 	it 	can 	be 	seen 	that 	these 	correspond 	well 	after
approximately 6.5 ms, but also that the difference is considerable for shorter times.
This is also a probable reason for the differing mid-point deflections shown in
Figure 7.19a.
0
10
20
30
40
50
60
70
0 	5 	10 	15 	20 	25 	30
Time [ms]
Deflection [mm]
SDOF
Numerical
simulation

-- 75 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	62
Figure 7.19 	Response of wall strip subjected to fragment impacts, estimated with
SDOF method and numerical simulation: (a) mid-point deflection and
(b) velocity of mid-point.
In the case of combined, simultaneous loading the results from the numerical
simulation and the SDOF analysis differ considerably; the maximum mid-point
deflections were estimated to be 85.7 and 139 mm, respectively. Figure 7.20 shows
the wall strip’s mid-point velocity, estimated with numerical simulation and the
SDOF method. In contradiction to the case of fragment loading alone, the velocity
differs for all times and not only in the beginning of the simulation.
Figure 7.20 	Response of wall strip subjected to combined loading, estimated with
SDOF method and numerical simulation: (a) mid-point deflection and
(b) velocity of mid-point.
a)
0
2
4
6
8
10
12
14
0 	2 	4 	6 	8 	10 	12 	14
Time [ms]
Deflection [mm]
0.0
0.5
1.0
1.5
2.0
2.5
0 	2 	4 	6 	8 	10 	12 	14
Time [ms]
Velocity [m/s]
b)
SDOF 	Numerical
simulation
SDOF
Numerical
simulation
0
20
40
60
80
100
120
140
160
0 	5 	10 	15 	20 	25 	30 	35
Time [ms]
Deflection [m/s]
 
SDOF
Numerical
simulation
0
2
4
6
8
0 	5 	10 	15 	20 	25 	30 	35 	40 	45
Time [ms]
Velocity [m/s]
Numerical
simulation
SDOF
a) 	b)

-- 76 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	63
7.4.3 	Study of scabbing crack
Since the scabbing cracks appearing in the wall strip when subjected to fragment
impacts were not expected, additional 2D simulations were conducted to further study
this behaviour. In the additional simulations presented in this section, the effect of
multiple, simultaneous impact of fragments was taken into account by use of
boundary conditions, as shown in Figure 7.21a.
The result of this simulation is shown in Figure 7.21b, where it can be seen that the
scabbing crack occurs. Another possible explanation that had to be studied was the
influence of the strain-rate dependence of the tensile strength, which was not taken
into account in this study. A similar simulation as just described, but with the standard
RHT material model (including the strain-rate effect), was conducted. In the results,
shown in Figure 7.21c, it can be seen that scabbing still occurs, and therefore the
scabbing could not be explained by the lack of strain-rate dependence of the tensile
strength.
a)
b)
c)
Figure 7.21 	(a) The numerical mesh of AUTODYN 2D simulations of effect of
multiple fragment impacts. Numerical results with (b) the same material
model as in main study and (c) the standard RHT material model. The
black lines crossing the bodies indicate the border between the fine and
coarse mesh.
The average distance to the scabbing cracks in the wall strip, measured from the front
face of the wall strip, is 265 mm, below the distance to the tensile-reinforcement
layer, meaning that the scabbing cracks appear in between the two reinforcement
layers. 	In 	experiments 	the 	scabbing 	often 	occurs 	at 	the 	level 	of 	rear 	face
reinforcement. A possible explanation for the discrepancy in scabbing crack location
102 mm
350 mm

-- 77 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	64
between experiments and the simulations is that the reinforcement bars are modelled
as beam elements, thereby not taking into account the reduced area of concrete over
which the stresses can be transferred. If the reduction of concrete area is taken into
account, the stresses will become approximately 13% higher than without reduction.
This effect could be taken into account by modelling the concrete elements at the
reinforcement 	level 	with 	reduced 	strength. 	However, 	as 	seen 	in 	Figure 7.22,
weakening of the concrete elements at the level of reinforcement by reducing the
strength by 10% does not mean that the scabbing crack appears in these elements. In
reality the reinforcement is a natural place for notches, which is also not represented
in the simulations since the interface between the reinforcement and the concrete is
not modelled to take these effects into account. The location of the scabbing cracks,
appearing in the wall strip simulations, may therefore rather represent the case where
no tensile reinforcement is used. It should also be pointed out that the two scabbing
cracks probably represent one crack in reality, and that scabbing is prevented from
occurring by the tensile reinforcement that crosses the scabbing cracks and continues
over the support.
a)
b)
Figure 7.22 	(a) The numerical mesh of AUTODYN 2D simulations of effect of
weakened elements (indicated in red) at level of tensile-reinforcement
layer and (b) the numerical result.

-- 78 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	65
8 	Conclusions
8.1 	General conclusions
The area of blast and fragment loading on reinforced concrete structures involves
phenomena not yet well understood. In order to increase the knowledge in this area,
three numerical studies were conducted. The studies involved investigations of the
effect of reinforcement on the projectile impact, the relative effect of the impact
resistance when adding steel fibres to concrete, and the combined effects of blast and
fragment loading. The general conclusions from these studies and the theory behind
them are presented here.
Numerical simulation with a hydrocode is a useful tool for estimation of damage
caused by blast and fragment impacts. This is mainly due to the low costs, ease of
carrying out parameter studies, and the possibility to better follow and understand the
principal phenomenon involved, compared to experimental testing. However, since
the material models used in the simulation, and their ability to describe the real
behaviour, are crucial for the simulation results, their limitations must be known by
the user and taken into account when analysing and drawing conclusions.
The reinforcement in a concrete structure is necessary in order to ensure ductile
behaviour and thereby an energy-absorbing capacity, but may also increase the
resistance against local damage. However, an increased projectile resistance, i.e.
decreased depth of penetration, can only be achieved with, for this case, suitable
reinforcement detailing, since the reinforcement must be located in the damage zone
in order to have an effect. Furthermore, the distance between the projectile path and
the reinforcement bars is a crucial factor since the confinement effect of the
reinforcement, pointed out as a plausible explanation for the increased projectile
resistance, decreases with increasing distance. Reinforcement bars do, though, almost
always reduce the scabbing and spalling effects.
Addition of moderate dosages of steel fibres in the concrete does not significantly
influence the depth of penetration of a striking projectile, while the size of both the
spalling and possible scabbing crater decreases. An increased amount of fibres only
lead to a small reduction of the spalling crater, whereas the effect on the scabbing
crater is more significant – it decreases and may even be prevented.
Due to the complex nature of the effects of combined blast and fragment loading on a
reinforced concrete structure, the phenomenon involved is not well understood. Thus,
design manuals, used for protective design, often disregard the well-known synergy
effect observed for combined loading, or treat it in a very simplified manner. Most
damage caused by the multi-fragment impact on a wall element occurs within
fractions of a millisecond and consists of local damage on the front face, i.e. craters,
scabbing cracks at the rear and direct shear cracks close to the supports. In the case of
blast loading the number of flexural cracks, to which elongation of the reinforcement
is localised, is relatively low, while for fragment loading the flexural cracks are more
numerous. The early appearance of damage caused by the fragments and the larger
number of flexural cracks indicate that the load-bearing capacity and mid-point
deflection of the element in the case of combined, simultaneous loading are highly
influenced by the fragment impact. The impulse intensity of the fragments constituted

-- 79 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	66
approximately 40% of the impulse density of the blast load and the mid-point
deflection of the blast load was almost 6 times larger than that caused by the fragment
impacts. For combined loading, a synergy effect was observed; the sum of the mid-
point deflections for blast and fragment loading treated separately is smaller than the
mid-point deflection for combined loading.
8.2 	Further research
The response of a reinforced concrete structure subjected to combined blast and
fragment loading is highly influenced by different parameters, e.g. blast and fragment
load characteristics. Further research within this area must therefore be conducted
before the phenomena involved and their parameter dependence can be considered as
well understood and generic methods for estimating the structural response can be
derived.
As mentioned earlier, numerical simulations are an effective tool to study the response
of reinforced concrete structures subjected to blast and fragment impact. However, the
material 	models 	for 	concrete, 	used 	to 	describe 	the 	concrete 	behaviour 	in 	the
hydrocodes, involve various simplifications and limitations. It is of interest to further
study how these idealisations and limitations affect the numerical results. It may also
be of interest to develop improved material models and simulation procedures in order
to increase the accuracy of the numerical results and thereby be able to better
understand and predict the complex phenomena involved in severe dynamic loading
of reinforced concrete structures.

-- 80 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	67
9 	References
ACI 	544 	(1996): 	State-of-the-Art 	Report 	on 	fibre 	Reinforced 	Concrete. 	ACI
Committee 544 Report 544.1R-96, American Concrete Institute, Detroit, 66 pp.
ACI MCP (2002): Manual of Concrete Practice. ACI Concrete Institute, Farmington
Hills, MI, USA.
Almansa, E.M. and Cánovas, M.F. (1999): Behaviour of normal concrete and steel
fibre-reinforced concrete under impact of small projectiles. Cement and Concrete
Composites, Vol. 29, pp. 1807-1814.
ASCE (1999): Structural Design for Physical Security – State of the Practice. Task
committee: Conrath, E.J. et al., American Society of Civil Engineers, 264 pp.
AUTODYN (2005). AUTODYN Theory Manual, Revision 4.3. Century Dynamics
Inc.Concord, CA, USA, 227 pp.
AUTODYN 	(2007). 	ANSYS 	AUTODYN 	User 	Manual, 	Version 	11.0. 	Century
Dynamics Inc., Concord, CA, USA, 528 pp.
Bailey, C.G. (2004): Membrane action of slab/beam composite floor systems in fire.
Engineering Structures, Vol. 26, No. 12, pp. 1691-1703.
Baker W.E. (1973): Explosions in Air. University of Texas Press, Austin, TX, USA,
285 pp.
Bangash, M.Y.H. (1989): Concrete and Concrete Structures: Numerical Modelling
and Applications. Elsevier applied science, London, 652 pp.
Bažant, 	Z.P., 	Xiang, 	Y.Y., 	Adely, 	M.D., 	Prat, 	P.C. 	and 	Akers, 	S.A. 	(1996):
Microplane Model for Concrete: II: Data Localization and Verification. Journal of
Engineering Mechanics, Vol. 122, No. 3, pp. 255-262.
Brara, A. and Klepaczko, J.R. (2007): Fracture energy of concrete at high loading
rates in tension. International Journal of Impact Engineering, Vol. 34, No. 3,
pp. 424-435.
Bischoff P.H. and Perry, S.H. (1991): Compressive behaviour of concrete at high
strain rates. Materials and Structures, Vol. 24, pp. 425-450.
Boverket (2004): Boverkets Handbook för Betongkonstruktioner BBK 04, (Boverkets
Handbook for Concrete Structures, BBK 04, in Swedish), Boverket, Karlskrona,
Sweden, 271 pp.
Brode, H.L. (1955): Numerical Solutions of Spherical Blast Waves. Journal of
Applied Physics, Vol. 26, No. 6, pp. 766-775.
Cánovas, M.F., Pamies, R.G., Simón del Porto, J.R. and Almansa, E.M. (1994):
Impacts effects on the primary fragmentation generated by the HE81 mortar
grenade on conventional concrete and steel fibres reinforced concrete. Proceedings

-- 81 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	68
of the Third International Conference on Structures Under Shock and Impact,
Madrid, Spain, Computational Mechanics Publications, 1994. pp. 37-44.
CEB 	FIP 	(1999): 	Structural 	Concrete 	– 	Textbook 	on 	Behaviour, 	Design 	and
Performance, Updated knowledge of the CEB/FIP Model Code 1990, Volume 1.
International Federation for Structural Concrete, Lausanne, Switzerland, 224 pp.
ConWep (1992): ConWep. Collection of conventional weapon effects calculations
based on TM 5-855-1, Fundamentals of Protective Design for Conventional
Weapons, U. S. Army Engineer Waterboys Experiment Station, Vicksburg, VA,
USA.
Curran, D.R. (1997): Simple fragment size and shape distribution formulae for
explosively fragmenting munitions. International Journal of Impact Engineering,
Vol. 20, 1997, pp. 197-208.
Ekengren, B. (2006): Skyddsrum SR06 (Shelter Regulations SR06, in Swedish).
Swedish Rescue Services Board, Karlstad, Sweden, 113 pp.
Ekengren, 	B. 	(1994): 	Shelter 	Regulations 	SR-English Edition. 	Swedish 	Rescue
Services Agency, Karlstad, Sweden, 94 pp.
Erkander, Å. and Pettersson, L. (1985): Betong som splitterskydd: Skjutförsök på
plattor av olika betongmaterial (Concrete as protective material against fragment
impacts: Fragment impacts on plates of different types of concrete, in Swedish).
Försvarets Forskningsanstalt, C 20574-D6(D4), Stockholm, Sweden, 66 pp.
Forsén, R. and Nordström, M. (1992): Damage to Reinforced Concrete Slabs Due to
the Combination of Blast and Fragment Loading (In Swedish). National Defence
Research Establishment (FOA), FOA Report B 20101-2.6, Tumba, Sweden, 12 pp.
Forsén, R. and Sten, G. (1994): Utredning om splitterverkan/splitterskydd, Jämförelse
mellan 	två 	250 kg 	minbomber 	(In 	Swedish). 	National 	Defence 	Research
Establishment (FOA), Tumba, Sweden, 25 pp.
Girhammar, U.A, (1990): Brief Review of Combined Blast and Fragment Loading
Effects. Report C7:90. National Fortifications Administration, Eskilstuna, Sweden,
15 pp.
Gebbeken, N., Greulich, S. and Pietzsch, A. (2006): Hugoniot properties for concrete
determined by full-scale detonation experiments and flyer-plate-impact tests.
International Journal of Impact Engineering, Vol. 32, pp. 2017-2031.
Gylltoft, K. (1983): Fracture Mechanics Models for Fatigue in Concrete Structures.
Doctoral 	Thesis. 	Division 	of 	Structural 	Engineering, 	Luleå 	University 	of
Technology, Luleå, Sweden, No. 1983:25:D, 210 pp.
Hansson, H. (1998): Numerical Simulations of Concrete Penetration. FOA Report 98-
00816--311--SE. 	National 	Defence 	Research 	Establishment, 	Tumba 	Sweden,
17 pp.

-- 82 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	69
Jirásek, M. (2006); Modelling of Localized Inelastic Deformation. Lecture notes.
Czech Technical University, Prague, 239 pp.
Johansson, M. (1995): Structural Behaviour in Concrete Frame Corners of Civil
Defence Shelters, Non-linear Finite Element Analyses and Experiments. Doctoral
Thesis. Department of Structural Engineering, Division of Concrete Structures,
Chalmers University of Technology, Publication no. 00:2, Göteborg, Sweden,
204 pp.
Johansson, M. and Laine, L. (2007): Bebyggelsens motståndsförmåga mot extreme
dynamisk belastning, Delrapport1: Last av luftstötvåg (The capacity of buildings
to resist severe dynamic loading, Part 1: Blast wave loading, in Swedish). Swedish
Rescue Services Agency, Karlstad, Sweden, 114 pp.
Krauthammer, 	T. 	(2000): 	Modern 	Protective 	Structures, 	Design, 	analysis 	and
evaluation. Course notes. The Pennsylvania State University, 358 pp.
Krauthammer, 	T. 	(2006): 	Modern 	Protective 	Structures, 	Design, 	analysis 	and
evaluation. Course notes. The Pennsylvania State University, 412 pp.
Leppänen, J. (2004): Concrete Structures Subjected to Fragment Impacts – Dynamic
Behaviour and Material Modelling. Doctoral Thesis. Department of Structural
Engineering and Mechanics, Division of Concrete Structures, Chalmers University
of Technology, Publication no. 04:4, Göteborg, Sweden, 127 pp.
Leppänen, J. (2002): Dynamic Behaviour of Concrete Structures Subjected to Blast
and Fragment Impacts. Licentiate Thesis. Department of Structural Engineering,
Division of Concrete Structures, Chalmers University of Technology, Publication
no. 02:4, Göteborg, Sweden, 78 pp.
Leppänen, J. (2003): Splitterbelastad betong – Experiment och numeriska analyser
(Fragment Impacts into Concrete – Experiments and Numerical Analyses, in
Swedish). Department of Structural Engineering and Mechanics, Division of
Concrete 	Structures, 	Chalmers 	University 	of 	Technology, 	Report 	no. 	03:6,
Göteborg, Sweden, 80 pp.
Li, Q.M., Reid, S.R, Wen, H.M. and Telford, A.R. (2005): Local impact effects of
hard missiles on concrete targets. International Journal of Impact Engineering,
Vol. 32, 2005, pp. 224-284.
Luo, X., Sun, W. and Chan, S.Y.N. (2000): Characteristics of high-performance steel
fibre-reinforced concrete subjected to high velocity impact. Cement and Concrete
Research, Vol. 30, pp. 907-914.
Löfgren, I. (2005): Fibre-reinforced Concrete for Industrial Construction – a fracture
mechanics approach to material testing and structural analysis. Doctoral Thesis.
Department 	of 	Civil 	and 	Environmental 	Engineering, 	Division 	of 	Structural
Engineering, Chalmers University of Technology, Göteborg, Sweden, 243 pp.
Magnusson, 	J. 	and 	Hallgren, 	M. 	(2000): 	High 	Performance 	Concrete 	Beams
Subjected 	to 	Shock 	Waves 	from 	Air 	Blast. 	National 	Defence 	Research
Establishment (FOA), FOA Report 00-01586-311--SE, Tumba, Sweden. 86 pp.

-- 83 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	70
Magnusson, 	J. 	and 	Hansson, 	H. 	(2005): 	Simuleringar 	av 	explosionsbelastade
betongbalkar – en principstudie, (Numerical simulations of concrete beams- a
principal study, in Swedish). National Defence Research Establishment (FOI), FOI
Report 1686--SE, Tumba, Sweden. 55 pp.
Malvar, L.J. and Ross, C.A. (1998): Review of Strain Rate Effects for Concrete in
Tension. ACI Materials Journal, Vol. 95, No. 6, pp. 735-739.
Nataraja, M.C., Nagaraj, T.S. and Basavaraja, S.B. (2005): Reproportioning of steel
fibre reinforced concrete mixes and their impact resistance. Cement and Concrete
Research, Vol. 35, No. 12, pp. 2350-2359.
Nyström, U. (2006): Design with regard to explosions. Master’s Thesis. Department
of Civil and Environmental Engineering, Division of Structural engineering,
Chalmers University of Technology, Göteborg, Sweden, 205 pp.
PCA (2002): Design and Control of concrete Mixtures. Portland Cement Association.
372 pp.
Plos, M. (1995): Application of Fracture Mechanics to Concrete Bridges. Finite
Element Analysis and Experiments. Doctoral Thesis. Department of Structural
Engineering, Division of Concrete Structures, Chalmers University of Technology,
Publication no. 95:3, Göteborg, Sweden, 127 pp.
Riedel, W. (2000): Beton unter dynamischen Lasten, Meso- und makromechanishe
Modelle 	und 	ihre 	Parameter 	(Concrete 	under 	dynamic 	loads, 	Meso- 	and
macromechanical models and their parameters, in German). Doctoral Thesis.
Fakultät 	für 	Bauingenieur- 	und 	Vermessungswesen, 	der 	Universität 	der
Bundeswehr, Munich, Germany, 210 pp.
Schuler, H. (2004): Experimentelle und numerische Untersuchungen zur Schädigung
von stroßbeanspruchtem Beton (Experimental and numerical investigations of
damage in impact stressed concrete, in German). Doctoral Thesis. Fakultät für
Bauingenieur- und Vermessungswesen, der Universität der Bundeswehr, Munich,
Germany, 184 pp.
U.S. Army (1990): Design of Structures to Resist the Accidental Effects of Explosions.
Department 	of 	the 	Army 	Technical 	Manual 	TM 5-1300, 	Navy 	Publication
NAVFAC P-397, Air Force Report 88-22, Washington D.C., USA. 1784 pp.
U.S. Army (1992): Fundamentals of Protective Design for Conventional Weapons.
Technical Manual TM 5-855-1. 271 pp.
van Mier, J.G.M. (1984): Strain-softening of concrete under multiaxial loading
conditions. Doctoral Thesis. Technische hogeschool Eindhoven, The Netherlands,
348 pp.
von Essen, W. (1973): Provisoriska anvisningar för dimensionering av armerade
betongkonstruktioner 	som 	skydd 	mot 	verkan 	av 	konventionella 	vapen 	inom
närmissområde, 	Kommentarer 	(In 	Swedish). 	Fortifikationsförvaltningen
Publ. 25:2, 34 pp.

-- 84 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	71
Weerheijm, J. and van Doormal, J.C.A.M. (2007): Tensile failure of concrete at high
loading rates: New test data on strength and fracture energy from instrumented
spalling tests. International Journal of Impact Engineering, Vol. 34, No. 3,
pp. 609-626.
Zollo, 	R.F. 	(1997): 	Fibre-reinforced 	concrete: 	an 	Overview 	after 	30 	Years 	of
Development. Cement and Concrete Composites, Vol. 19, No. 2, pp. 107-122.
Zukas, J.A. and Scheffler, D.R. (2000): Practical aspects of numerical simulations of
dynamic events: Effects of meshing. International Journal of Impact Engineering,
Vol. 24, No. 9, pp. 925-945.

-- 85 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	72

-- 86 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	A1
Appendix A 	Empirical Equations
This appendix is directly taken from Leppänen (2004). The references are found in the
reference list (Chapter 9), but are also according to Leppänen (2004).
Depth of penetration
By using a direct formula, from ConWep (1992), the depth of penetration, x (in
inches), can be estimated for fragments penetrating massive concrete:
25	.	0
c
9	.	0
s
37	.	0
f
f
V	m	95	.	0
x = 	for x ≤ 1.4mf1/3
or
3	/	1
f	5	.	0
c
8	.	1
s
4	.	0
f m	487	.	0
f
V	m	464	.	0
x 	+	= 	for x > 1.4mf1/3
where mf is fragment weight [oz.], Vs is the fragment striking velocity [kfps] and f c is
the concrete compressive strength [ksi]. By using conversion factors, as shown in
Table A.1, the penetration depth of fragments can be calculated in SI units.
The depth of penetration, x, according to von Essen (1973) can be estimated with
following equation:
3	6
	10	180 	f	r 	m	v	x 	⋅	⋅	⋅	= 	− 	[m] 	(A.1)
where v r is the fragment velocity and mf is the fragment mass [kg].
The depth of penetration, x, for a spherical fragment of 35.9 g (i.e. 20.6 mm in
diameter), according to Erkander and Pettersson (1985) can be estimated as:
)	170	(	10	288 	3	6 −	⋅	⋅	⋅	= −
r	f 	v	m	x 	[m] 	(A.2)
where vr is the fragment velocity and mf is the fragment mass [kg].
Thickness to prevent perforation
The thickness of a concrete wall that just prevents perforation, dpf, can be estimated
with the following equation, from Krauthammer (2000):
33	.0	033	.0 91	.	0	09	.	1 	f	f	pf 	m	xm	d 	+	= 	[in] 	(A.3)

-- 87 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	A2
where x is the depth of penetration from Eqs.(A.1) and (A.2), and mf is the fragment
weight in ounce [oz]. To convert to SI units, see Table A.1.
Table A.1 	Conversion factors: Inches-pounds to SI units (metric), according to the
ACI MCP (2002).
To convert from 	to 	multiply by
inches 	millimetres [mm] 	25.4
feet 	metres [m] 	0.3048
kip-force/square inch [ksi] 	megapascal [MPa] 	6.895
ounces [oz] 	grams [g] 	28.34

-- 88 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	B1
Appendix B 	Steel-fibre Volume Fraction
This appendix shows how the steel-fibre volume fraction corresponding to a fibre-
reinforced concrete, with specified fracture energy, was estimated in the study
presented in Chapter 6 and Paper I. The material properties of three fibre-reinforced
concretes were used in the numerical study of how the addition of steel fibres in
concrete affects the projectile resistance.
A bi-linear crack softening behaviour, according to Figure 2.8, was assumed for the
fibre-reinforced concretes. Equation 2.1 and 2.2, describing the relation between the
number of fibres per m2 , nfibres, the volume fraction of fibres, Vf, and the b2-parameter,
were used as follows.
The parameter a1 was assumed to be equal to the slope of the first branch in the bi-
linear relation used to describe the softening behaviour of the normal concrete used in
the study. The bi-linear relation proposed by Gylltoft (1983), see Figure 2.3, was used
for the normal concrete, where the slope of the first branch can be calculated as the
tensile strength, f t, divided by the fracture energy for the normal concrete, GF.NSC.
NSC	F
t
G
f
a
.
1 = 	(B.1)
According to Löfgren (2005) the parameter a2 is mainly related to the fibre length,
and the bond between the fibre and the concrete also influences its value. Since these
factors are not known in the study, the typical values presented in Löfgren (2005) for
the a2-parameter were used to estimate a realistic value. The typical values are given
as 0.025 mm-1 ≤ a2 ≤ 0.25 mm-1 and a value close to the average value of these was
desired. It turned out that the a2-parameter could be estimated as:
200
1
2
a
a 	= 	(B.2)
By means of the a1- and a2 -parameters, the fracture energy and the tensile strength,
the parameter b2 can be calculated, and Equation 2.2 can be used to determine the
corresponding number of fibres per m2 . However, in the experiments where this
expression was derived, the b2-parameter for the plain concrete was determined as
0.257, as seen in Figure B.1.

-- 89 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4	B2
Figure B.1 	Response of wall strip subjected to combined blast and fragment
This value differs from the value 0.4 used in Gylltoft (1983), implying that the
equation had to be adjusted. It was assumed that the volume fraction giving a b2-
parameter equal to 1.0 was the same in the two cases, and the relation between the b2-
parameter and the number of fibres per m2 , nfibres, was scaled according to this.
4	.	0
6727	.	2
4	.	0	1
2 	+
−
= 	fibres	n	b 	(B.3)
Equation (2.2) was then used to calculate the corresponding volume fraction of fibres,
Vf.
5396	.	2
fibres
f
n
V 	= 	(B.4)
0
0.2
0.4
0.6
0.8
1
0 	1 	2 	3
Number of fibers per m
2 [no/m 2
]
Löfgren (2005)
Adopted to Gylltoft (1983)
b 2 [-]

-- 90 of 148 --

CHALMERS, Civil and Environmental Engineering, Lic 2008:4 	C1
Appendix C 	Design Fragment Weight
In this appendix it is shown how the design fragment weight was determined in the
study of combined blast and fragment loading, presented in Chapter 7 and Paper II.
Since the impulse was used to determine the characteristics of the design fragment,
the mass distribution and velocity of the fragments had to be determined.
The mass distribution of fragments can be estimated with Equation 3.5, given that the
fragment distribution factor, M A, is known. As mentioned before, the geometry of the
bomb referred to in the Swedish Shelter Regulations, Ekengren (2006), is not
specified and the fragment distribution factor could not be calculated. Instead the
American GP-bomb Mk 82 was used to estimate a value; see Section 7.1.3 and
Paper I. The fragment distribution factor was in this way estimated to be 1.758 grams
(0.062 oz), and as the weight of casing, W c, is known the mass distribution was
determined; see Figure C.1. The fragments were then divided into fractions of
0.1 grams and the number of fragments in each fraction was calculated.
0
10000
20000
30000
40000
0 	10 	20 	30 	40 	50
Fragment mass, m [g]
Number of fragments with
mass larger than m
Figure C.1 	Mass distribution of 250 kg GP-bomb with 50 weight per cent TNT.
The initial velocity of the fragments was calculated with the Gurney equation
(Equation 3.7) and the velocity of the fragments at a stand-off of 5 metres was then
calculated with Equation 3.8. As the impulse of each fragment is calculated as the
mass of the fragment times its velocity, the total impulse per fraction of fragments
could be calculated. The weight of the design fragment was then determined by
finding the fragment weight that corresponds to the average impulse per fraction.
In this way the fragment weight was estimated as 21.9 grams, its striking velocity at a
stand-off of 5 metres as 1 760 m/s and the diameter as 17.5 mm, giving a total impulse
of 3 468 Ns.
Since it was assumed that 60% of the total fragment mass falls in a sector of 40°, as
shown in Figure 7.4, and the fragments were assumed to be equal in size and shape, it
can be said that 60% of the total number of fragments falls within this sector. Only
2.69% of these fragments strike a metre-wide strip of the wall, and the total weight of
the fragments striking the wall strip, which is 3 metres high, is 2.0 kg, giving a mass
density of 0.66 kg/m2 .

-- 91 of 148 --



-- 92 of 148 --

Paper I
Comparative numerical studies of projectile impacts on plain and reinforced concrete
Nyström, U. and Gylltoft, K.
Submitted to International Journal of Impact Engineering, April 2008

-- 93 of 148 --



-- 94 of 148 --

Paper I.1
Comparative numerical studies of projectile impacts on plain and steel-fibre
reinforced concrete
Ulrika Nyström*, Kent Gylltoft
Department of Civil and Environmental Engineering, Structural Engineering, Concrete Structures,
Chalmers University of Technology, SE-412 96 Göteborg, Sweden
(*ulrika.nystrom@chalmers.se)
_____________________________________________________________________
Abstract
The enhanced energy absorption characteristics of fibre-reinforced concrete, compared to plain
concrete, motivate its increased usage in protective structures, but how does it influence the projectile
resistance of a structure? The numerical hydrocode AUTODYN was used to simulate how steel-fibre
volume fractions of about 0.2, 0.5 and 0.75% influence the depth of projectile penetration and crater
formation on the front and rear face of a concrete target. The results were compared with numerical
results of projectile impacts on plain concrete. Steel fibres added to the concrete mix had a minor
influence on the depth of penetration while the crater size on both front and rear faces of the target
decreased. The crack propagation beyond the crater on the front face was also reduced when fibres were
added to the concrete. An increased amount of fibres in the concrete showed no effect on the crater size
on the front face of the target, but led to further decreased size of the crater on the rear face of the
concrete cylinder. It is concluded that the scabbing crater can be reduced in size and prevented by usage
of steel-fibre reinforced concrete even if the depth of penetration is only slightly less than to penetration
depth in plain concrete.
Keywords: Numerical simulation, Projectile impact, Steel-fibre reinforced concrete, Penetration
_____________________________________________________________________
1. 	Introduction
Researchers have experimentally studied the behaviour of fibre-reinforced concrete under impact
loading and observed a significant increase in impact resistance when compared to plain concrete [1-7].
In cases of projectile penetration, the depth of penetration was not significantly influenced while the
crater diameters on the front and rear faces of the target were reduced [1,6,7]. However, the structural
behaviours of targets subjected to impact are complicated, depending on material factors as well as test
condition factors [4].
In order to improve the understanding of how the addition of fibres in concrete may influence
responses in a target, numerical studies of projectile penetration in steel-fibre reinforced concrete have
been conducted. Using a numerical-simulation tool is motivated by the high cost of undertaking impact
tests and the ease of changing material properties. Hence, it is possible to study the influence of different
parameters, such as fracture energy, which depends on the volume fraction of added fibres.
The objective of this paper is to study how the addition of steel fibres in concrete influences the depth
of penetration and crater formation on the front and rear faces of steel-confined concrete cylinders of
different lengths. This is a substudy within a research project whose long-term aim is to study the
behaviour of concrete structures subjected to blast and fragment impacts, and the synergy effect of these
loads. The research project is a collaboration between Chalmers University of Technology and the
Swedish Rescue Services Agency. In earlier studies within the project, the effect of blast waves in
reinforced-concrete structures, fragment impacts on plain concrete, design with regard to explosions and
reinforced concrete subjected to projectile impact were studied by Johansson [8], Leppänen [9] and
Nyström [10,11], respectively.

-- 95 of 148 --

Paper I.2
2. 	Theoretical framework
A projectile impact may cause local and global damage to a concrete structure. Global damage consists
of flexural deformations, which, unlike local damage, may cause structural failure. Local damage may
cause spalling and crushing of concrete on the front face and scabbing on the rear face of the target,
together with projectile penetration into the target or even full penetration (i.e. perforation) of the target
[12,13]. Different variables have been proposed to measure local damage, such as depth of penetration,
perforation and scabbing thickness or ballistic limit (i.e. the minimum velocity at which the projectile
penetrates the target) in plain or reinforced concrete [13]. These variables are often estimated by using
empirical or semi-empirical equations proposed during the last century, especially after the Second World
War [14]. Also purely analytical formulas have been proposed [13, 15-17] which can be single-, bi- or
multi-stage models built on the theory of cavity expansion, that of shear-plug formation, or a combination
of these two.
In general all these empirical, semi-empirical and analytical equations are intended for use within strict
limitations of e.g. geometries and material properties of projectile and target, as well as impact conditions
[12-19]. Even if these equations have the ability to predict local damage variables with high reliability
under conditions similar to those used in developing the equations, they may not be generic enough to
predict the variables under slightly different circumstances.
Another way to estimate the damage caused by projectile impact is to use hydrocode simulations. This
is growing more common as computing becomes faster, cheaper and more powerful, and as the material
models become more reliable. These computer codes are representations of the conservation laws for a
continuum using different numerical schemes. Numerical simulations were performed by Tham [17] and
Hansson [20], among others, using AUTODYN-2D and AUTODYN-3D [21], to study the perforation of
concrete targets by steel projectiles. They concluded that the simulated local damage showed good
agreement with experimental data.
2.1 	Material properties
2.1.1 	Plain concrete
A uni-axial stress-strain relationship, as shown in Fig. 1a, is often used to characterize the static
material behaviour of concrete. The ultimate tensile strength, ft, for normal-strength concrete is less than
one tenth of the ultimate compressive strength, fc, and an increasing value of the compressive strength
leads to a decreasing ratio between tensile and compressive strengths; Fig. 1b.
0
0.02
0.04
0.06
0.08
0.1
0.12
0.14
0 	10 	20 	30 	40 	50
Compressive strength [MPa]
Tensile strength/compressive strength [-]
a) 	b)
Fig. 1. 	(a) Schematic view of the stress-strain relationship for concrete and (b) the relation between tensile and
compressive strengths (uni-axial loading) according to CEB FIP Model Code 1990 [22].
Moreover, after failure initiation in uni-axial tension, stresses can be transferred over the crack. The
crack can in a more literal way be described as a process zone consisting of a system of discontinuous
micro-cracks. When the propagating micro-cracks have formed a continuous crack, the critical crack
opening, wc, is reached and no more stresses can be transferred over the crack. The softening behaviour is
often shown as a relation between the stress and the crack opening, where the area under the curve
tf
cf
σ
ε

-- 96 of 148 --

Paper I.3
represents the fracture energy, G F. To simplify, the softening branch is often idealised to a bi-linear (e.g.
Gylltoft [23]) or power function (e.g. Hordijk-Reinhard expression, [24]) as shown in Fig. 2.
Fig. 2. 	Bi-linear and power function, respectively, describing the softening after failure initiation in concrete under
uni-axial tension.
In building structures the state of stress is multi-axial, and in the case of impact loading, the lateral
stresses may be very high. Compressed concrete also subjected to lateral confinement has increased
strength and stiffness compared with unconfined concrete. Furthermore, confinement of concrete results
in increased ductility.
The porosity of concrete results in non-linear behaviour for hydrostatic pressures. For low pressures,
the relation between the hydrostatic pressure, p, and the density, ρ, of concrete is linear, meaning that
these pressures only cause elastic deformation in the concrete matrix. If unloading takes place in this
phase, the density goes back to the initial density for the concrete, ρ0. However, further loading results in
microcracking at a certain pressure level p crush, and the relation becomes non-linear. When the
microcracking starts, the plastic compaction phase is entered, where the concrete is compacted as the
pressure continues to increase due to the collapse of pores. When all pores have collapsed and the
concrete is fully compacted, the relation between the pressure and density becomes linear again and when
unloading to zero pressure the density equals that of fully compacted concrete, ρs. This behaviour is
described by the equation of state (EOS), shown in Fig. 3.
p
ρ0	
ρs	
ρ
pcrush 	Elastic unloading/reloading
Elastic
loading
Plastic compaction 	Fully compacted
Fig. 3. Equation of state for concrete; from Leppänen [9].
Impact loading, such as fragment and missile impact, causes high strain rates in the target material, and
since most materials are somewhat strain-rate-dependent, the strength of the target material will increase
compared to the static strength. Concrete is also a strain-rate-sensitive material where a significantly
increased strength can be seen for relatively low strain rates. The ultimate uni-axial compressive strength
for normal-strength concrete may be more than doubled and, according to Bischoff [25] and Ross et
al. [26], the ultimate uni-axial tensile strength can increase by a factor 5 to 7 at very high strain rates.
It has earlier been unclear whether the fracture energy is strain-rate-dependent or not, mostly due to the
lack of reliable experimental test procedures for which the fracture energy for high strain rates could be
measured. Weerheijm [27] concluded that the fracture energy is strain-rate-independent since experiments
showed relatively constant fracture energy up to strain rates of 23 s -1 , but more recent studies ([28-30])
indicate that also the fracture energy is strain-rate-dependent. Schuler [28] has proposed a relation
Gylltoft
Hordijk-Reinhard
tf
σ
3
1
6
c	w 	c	w
w
1

-- 97 of 148 --

Paper I.4
between the dynamic increase factor for the fracture energy for concrete, defined as the ratio between the
dynamic fracture energy and the static fracture energy, and the crack-opening velocity, as shown in
Fig. 4.
0
1
2
3
4
5
6
0.00001 	0.0001 	0.001 	0.01 	0.1 	1 	10
Crack opening velocity [m/s]
GF dynamic
/G F quasi-static
Fig. 4. Relation between dynamic increase factor for fracture energy and crack-opening velocity for concrete,
according to Schuler [28].
2.1.2 	Steel-fibre reinforced concrete
The primary effect of adding fibres to concrete is that they improve the post-cracking behaviour and
the toughness, i.e. the capacity of transferring stresses after matrix cracking, whereas the modulus of
elasticity and the tensile and compressive strengths are not significantly affected as long as a moderate
dosage (<1%) of fibres is used [31]. However, the effect of fibres is highly dependent on the type of fibre
used, the size and properties of the fibres, the volume fraction added and the properties of the concrete
matrix.
In plain concrete, the shear capacity is explained as aggregate interlock and friction between the shear
planes. When adding low and moderate dosages of fibres to the plain concrete, the cracking strength is
not affected, but as soon as the matrix cracks the fibres are activated and start to be pulled out, leading to
an increased shear-transfer capacity.
As the relation of the stress-crack opening (σ-w) curve for steel-fibre reinforced concrete is more or
less complex, the relation is often simplified in the same manner as for plain concrete. For practical
applications it has been found that the bi-linear relation according to Fig. 5 is often a sufficient
approximation. By experiments Löfgren [31] has made phenomenological interpretations of the
parameters in the bi-linear σ-w relation for steel-fibre reinforced concrete. The decreasing rate of the
tensile-stress capacity directly after tensile-failure initiation in the material, parameter a 1, is essentially
governed by the fracture properties of plain concrete, but may be slightly reduced compared to this. The
slope of the second branch in the σ-w curve, parameter a 2, is principally related to the fibre length. The
critical crack opening wc, for which no more stresses can be transferred by the crack, is in the range of
L f/10 to L f/2, where L f is the length of the fibre, but poor fibre bond or fibre fracture may lead to a reduced
critical crack opening. The value of parameter b 2 is primarily related to fibre dosage and increases with an
increasing fibre-volume fraction.

-- 98 of 148 --

Paper I.5
Fig. 5. Bi-linear stress-crack opening relation for steel-fibre reinforced concrete.
3. 	Study procedure and analyses
An experiment performed at the Swedish Defence Research Agency (FOI) in 1998, see [20], was used
to validate the numerical model of projectile impact on plain concrete. In the comparative study presented
in this paper, where the effect of added steel fibres in the concrete was limited to an improved post-
cracking behaviour, the numerical model for fibre-reinforced concrete was not validated against measured
damage variables from a specific experiment. The numerical results from simulations with fibre-
reinforced concrete, which are assumed to give the overall behaviour of projectile impact on fibre-
reinforced concrete compared to plain concrete, were compared to conclusions drawn from experiments
described in [1-7]. The procedure is schematically illustrated in Fig. 6.
Fig. 6. 	Schematic illustration of study procedure, where NSC is Normal-Strength Concrete and FRC is Fibre-
Reinforced Concrete.
3.1 	Benchmark experiment
In the experiment reported by Hansson [20], two shots of 6.25 kg ogive-nosed steel projectiles were
fired into a 2.0 m long and 1.6 m wide concrete cylinder cast in a steel culvert. The same striking velocity
of 485 m/s was achieved in the two shots. In the first shot, where a support was used at the rear face of
the target, the depth of penetration was 655 mm. The second shot, without support on the rear face,
resulted in 660 mm penetration of the projectile. Hence, the support at the rear face of the target had a
negligible effect on the depth of the penetration of the projectile. The diameter of the front-face crater was
approximately 800 mm in both shots. The projectile had a length of 225 mm, a diameter of 75 mm, a
density of 7 830 kg/m3, a bulk modulus of 159 GPa, a shear modulus of 81.8 GPa, and a yield stress of
792 MPa. The concrete cube strength was approximately 40 MPa (tested on 150 mm cubes).
2	b
1
tf
w)	(	
σ
1	w
w
1	a
2	a
c	w

-- 99 of 148 --

Paper I.6
3.2 	Numerical simulations
3.2.1 	Studied bodies
In order to study how the addition of steel fibres to the concrete affects the impact resistance,
numerical simulations of projectile impact on plain and steel-fibre reinforced concrete were conducted.
Three different fibre-reinforced-concrete mixes (called FRC1, FRC2 and FRC3) were used in the
simulations. The length, L, of the cylindrical target was varied, and two different striking velocities of the
projectile, vproj, were used in order to study the effect on the scabbing and perforation limit of the target.
The simulations of plain concrete (called NSC) were also used to validate the numerical model by
comparing the results to the findings from the benchmark experiment described in the previous section.
Table 1 sums up the numerical simulations and shows the values of the parameters that vary in between
them. The hydrocode AUTODYN-2D [17] was used for all simulations.
Table 1
Numerical simulations.
Ident 	Concrete Tensile failure
model a
σ-w curve δ [-] a 	L [mm] 	vproj [m/s]
NSC001 	NSC 	Hydro 	- 	0.025 	2000 	485
NSC002 	NSC 	Hydro 	- 	0 	2000 	485
NSC003 	NSC 	Principal Stress 	Linear 	0 	2000 	485
NSCs001 	NSC 	Principal Stress 	Bi-linear 	0 	2000 	485
NSCs002 	NSC 	Principal Stress 	Bi-linear 	0 	1100 	485
NSCs003 	NSC 	Principal Stress 	Bi-linear 	0 	1000 	650 b
NSCs004 	NSC 	Principal Stress 	Bi-linear 	0 	1300 	485
FRC1001 	FRC1 	Principal Stress 	Bi-linear 	0 	2000 	485
FRC1002 	FRC1 	Principal Stress 	Bi-linear 	0 	1100 	485
FRC1003 	FRC1 	Principal Stress 	Bi-linear 	0 	1000 	650 b
FRC1004 	FRC1 	Principal Stress 	Bi-linear 	0 	1300 	485
FRC2001 	FRC2 	Principal Stress 	Bi-linear 	0 	2000 	485
FRC2002 	FRC2 	Principal Stress 	Bi-linear 	0 	1100 	485
FRC3001 	FRC3 	Principal Stress 	Bi-linear 	0 	2000 	485
FRC3002 	FRC3 	Principal Stress 	Bi-linear 	0 	1100 	485
FRC3003 	FRC3 	Principal Stress 	Bi-linear 	0 	1000 	650 b
a Brief descriptions of tensile-failure models and the parameter δ are found in section 3.2.2; for further
documentation see [21]. If δ≠0, strain-rate effects on ultimate tensile strength are taken into account.
b A 4.5 kg, flat-nosed, steel projectile was used in these simulations.
3.2.2 	Material models
The RHT model, developed by Riedel, Hiermayer and Thoma [32], was used for modelling both plain
and steel-fibre reinforced concrete. However, some modifications of the model had to be made to conduct
this study. The standard version of the RHT model consists of three pressure-dependent surfaces: an
elastic limit surface, a failure surface, and a surface for residual strength. It also includes pressure
hardening, strain hardening and strain-rate hardening. Furthermore, the deviatoric section of the surfaces
depends on the third invariant.
Since the primary effect of adding fibres to concrete is the improved post-cracking behaviour, and
moderate volume fractions of steel fibres only result in minor effects on the ultimate tensile and
compressive strengths, the only difference used in the material models for plain and steel-fibre reinforced
concrete is the failure description in tension, i.e. the post-crack behaviour.
A modified crack-softening behaviour could only be used in combination with the principal-stress-
failure model, and not with the hydrodynamic-tensile-failure model, used as default in the RHT material
model. In the hydrodynamic-tensile-failure model tensile failure is assumed to occur if the value of the
hydrodynamic pressure in a cell falls below a specified limit. When using a modified crack-softening law,
the strain-rate dependence of the tensile strength, used in the standard RHT strength model, is cut off.
This means that the tensile strength will be unaffected by the strain rate. In an attempt to reintroduce a
strain-rate dependence in tension, by use of a subroutine, it was found that this could not be done without
getting unwanted effects on the crack-softening behaviour, such as serious underestimations of the

-- 100 of 148 --

Paper I.7
fracture energy. This problem arises from the requirement, built into the program, that the user-defined
tensile stress is used only if it falls inside the RHT failure surface. The parameter δ, used to describe the
strain-rate dependence in tension in the RHT model, was set to zero in simulations where the modified
RHT material model was used. This means that no strain-rate dependence for the ultimate tensile strength
is taken into account in these simulations.
In AUTODYN [21] a linear crack-softening law is used to describe the post-crack behaviour in
tension. However, a bi-linear crack-softening law is more convenient to use for concrete, since it is a very
brittle material and the strength decreases rapidly after the failure initiation. Hence, a modification of the
model, allowing for a multi-linear crack-softening relation, has been developed and used in the
simulations. The bi-linear crack-softening law proposed by Gylltoft [23] was used for plain concrete, and
the one proposed by Löfgren [31] was used for steel-fibre reinforced concrete. In order to see how the
parameter δ and the change from hydrodynamic-tensile-failure model to principal-stress-failure model
influence the results, simulations with different combinations of these were conducted for the plain
concrete.
Three different values of fracture energy, 2000, 4000 and 6000 Nm/m2, were used in the simulations of
steel-fibre reinforced concrete target, Fig. 7. In Table 2 the parameters for the bi-linear crack-softening
relation described in section 2.1.2 and approximate values of corresponding steel-fibre volume fractions
calculated according to [31] are shown together with the values used for simulations of plain concrete
targets.
In order to determine the relation between stress and strain for the crack softening, necessary for
calculations in programs following a smeared crack approach, e.g. AUTODYN, a relation between the
crack opening, w, and the strain, ε, must be assumed. The crack width is smeared out over a length lel,
which is related to the size of the local element. In AUTODYN the length lel is calculated as the diameter
of a sphere whose volume equals the volume of the local element [21].
The steel (i.e. the projectile and confining steel around the concrete) is modelled with the von Mises
material model without any strain hardening and with a linear EOS. Material parameters for the concrete
used in the numerical simulations are shown in Appendix A.
Table 2
Bi-linear crack-softening-relation parameters for steel-fibre reinforced concrete.
Concrete G F
[Nm/m2]
a 1
[mm-1 ]
a 2
[mm-1 ]
b 2
[mm-1 ]
w1
[mm]
wc
[mm]
No of fibres
[#/cm2]
Vf
[%]
NSC 	100 	26.4 	2.64 	0.4 	0.025 	0.152 	0 	0
FRC1 	2000 	26.4 	1.32 	0.445 	0.021 	3.379 	0.403 	0.20
FRC2 	4000 	26.4 	1.32 	0.632 	0.014 	4.794 	1.074 	0.50
FRC3 	6000 	26.4 	1.32 	0.774 	0.0086 	5.875 	1.587 	0.75
Fig. 7. Crack softening for concrete NSC, FRC1, FRC2 and FRC3.
3.2.3 	Mesh
It is well known that the size of the elements used in a numerical mesh affects the results, and that a
refined mesh extends the computational time. In the simulations, made in 2D with axial symmetry,
quadratic Lagrangian elements with length 5 mm were used for the concrete target. Based on experience,
G F,FRC3 = 6000 Nm/m2
G F,FRC2 = 4000 Nm/m2
G F,FRC1 = 2000 Nm/m2
G F,NSC = 100 Nm/m2
w [mm]
tf
σ
0
0.2
0.4
0.6
0.8
1
0 	0.05 	0.1 	0.15 	0.2

-- 101 of 148 --

Paper I.8
this element size was found to give reasonable results and a finer mesh was believed not to give an
increased accuracy worth the increased computational time. The projectile was modelled with 4 elements
across the radius and totally 8 and 4 elements along the length for the ogive-nosed and flat-nosed
projectiles, respectively. For the 2 m long concrete target, the steel culvert also covers the rear face of the
target, while it does not in the simulations with the shorter cylinders (i.e. 1.0, 1.1 and 1.3 m long targets).
Full interaction between the steel culvert and the concrete is assumed in all cases. The numerical mesh for
simulations NSCs001 and NSCs003 is shown in Fig. 8.
Fig. 8. Numerical mesh for simulation NSCs001 and NSCs003.
4. 	Results
The results, i.e. the depth of penetration and crater size on front and rear face of the concrete target,
from simulations described in section 3.2 are shown in Table 3.
Table 3
Simulation results
Ident Depth of penetration
[mm]
Crater diameter on
front face [mm]
Crater diameter on
rear face [mm]
NSC001 	660 	800 	0
NSC002 	825 	740 	0
NSC003 	1000 	700 	0
NSCs001 	960 	1020 	0
NSCs002 	perforation 	860 	890
NSCs003 	480 	840 	980
NSCs004 	960 	920 	0
FRC1001 	880 	560 	0
FRC1002 	perforation 	640 	600
FRC1003 	430 	660 	0
FRC1004 	950 	700 	0
FRC2001 	900 	520 	0
FRC2002 	perforation 	540 	530
FRC3001 	890 	550 	0
FRC3002 	perforation 	550 	460
FRC3003 	400 	660 	0
Steel culvert
NSCs001 	NSCs003
Projectile

-- 102 of 148 --

Paper I.9
4.1 	Effect of tensile-failure description for plain concrete
The standard RHT material model gives a close approximation of the depth of penetration and crater
size on the front face of the concrete target, which can be seen when comparing the results from
simulation NSC001 to the results from the experiment described in section 3.1; see Fig. 9a. However, the
cavitated region in the results from this simulation should have been narrower in order to agree with the
experimental results. Since no data of the cavitated region in the experiments are presented in [20] this is
not shown in Fig. 9a.
When using a strain-rate independence for the tensile strength (δ=0 in the RHT material model)
(NSC002) the depth of penetration increases by 25% compared to the case where the dynamic effect of
the tensile strength is taken into account (NSC001), as seen in Fig. 9b. Changing from a hydrodynamic-
tensile-failure model (used in NSC002) to a principal-tensile-stress-failure model (NSC003) gives a
further increase of the depth of penetration with approximately 20%.
Using a bi-linear crack-softening law for the simulations with plain concrete (NSCs001) results in
damage more similar to that estimated with hydrodynamic-tensile-failure model and no strain-rate
dependence in tension (NSC002) than the simulations with a linear crack-softening law (NSC003), even
though the diameter of the front-face crater is overestimated; see Fig. 9c where the front-face crater size is
marked. However, it is to be observed that the size of the crater diameter is ambiguous and depends on
the way chosen to analyse the results. In Fig. 10 magnifications of the front-face crater and different ways
to measure it are shown for case NSCs001. The unsmoothed damage of the elements is plotted in Fig. 10a
and the border of the crater is estimated as the elements where the fully developed crack located furthest
from the central line of the cylinder reaches the front face. This method of measuring the crater size is
used in the present study. In Fig. 10b and c, the crater sizes are measured by means of the diameter of the
fully damaged outermost layer in a smoothed-damage plot and node-velocity vectors, respectively.
The results from the simulations of projectile impact on plain concrete with a bi-linear crack-softening
law are used to make a relative comparison of damage in fibre-reinforced concrete impacted by the same
projectile.
Fig. 9. Simulation results for plain concrete, case (a) NSC001 with standard RHT material model, (b) NSC002 where
no strain-rate dependence for tensile strength is used, and (c) NSCs001 with principal-tensile-stress-failure model and
bi-linear crack-softening law. The arrows in (a) indicate the crater diameter and penetration depth reported by
Hansson [20].
0 	1000 mm
800 mm NSC001	a)
b)
c)
NSC002
NSCs001
Crater size

-- 103 of 148 --

Paper I.10
Fig. 10. Magnifications of the front-face crater for case NSCs001 with estimations of its size by use of plots with (a)
unsmoothed damage, (b) smoothed damage and (c) node-velocity vectors.
4.2 	Effect of adding fibres to plain concrete
The relative effect of adding an approximate fibre-volume fraction of 0.2% to plain concrete can be
seen by comparing results from simulations FRC1001-FRC1004 with NSCs001-NSCs004, respectively.
In those cases where the projectile stops inside the target, i.e. no perforation occurs, it can be seen that the
addition of fibres has a minor influence on the depth of penetration, but also that the influence on the
front-face crater size is considerable. The same behaviour is seen when comparing results from
simulations with approximate fibre-volume fraction of 0.5% and 0.75% (FRC2001, FRC2002 and
FRC3001 and FRC3002) with results from simulations with plain concrete (NSCs001 and-NSCs002). In
Table 3 it can also be seen that increasing the fibre content in concrete from a volume fraction of 0.2% to
0.5% results in a decreasing crater size on the front face of the target, but a further increased volume
fraction (from 0.5 to 0.75%) does not lead to additional reduction of the crater diameter. Moreover, by
comparing Fig. 9 to Fig. 12 it can be seen that the addition of fibres and an increasing dosage of fibres
results in reduced crack propagation beyond the crater region
Further, the addition of fibres to plain concrete results in a large reduction of the rear-face crater size,
which can be seen when comparing results from simulation NSCs002 with results from FRC1002,
FRC2002 and FRC3002. From these results it can also be seen that, unlike the size of the front-face
crater, the size of the rear-face crater decreases also when increasing the volume fraction of fibres from
0.5 to 0.75%. In simulations with the ogive-nosed projectile, scabbing could not be differentiated from
penetration. However, the flat-nosed projectile used in simulations NSCs003 caused scabbing even
though the penetration depth was only half of the target length. In simulations FRC1003 and FRC3003,
where the same flat-nosed projectile was used, scabbing does not occur. Even though crack initiation
takes place on the rear ends of the targets due to the reflected stress wave also in these cases the effect of
the fibres prevents the initiated crack from developing into a continuous crack which causes scabbing, as
in case NSCs003.
720 mm
1020 mm
NSCs001
a)
580 mm
b) 	c)
720 mm

-- 104 of 148 --

Paper I.11
Fig. 11. Simulation results for fibre-reinforced concrete, cases FRC1001 and FRC3001.
Fig. 12. Simulation results for plain (NSCs003) and fibre-reinforced concrete (FRC1003 and FRC3003).
5. 	Discussion
The addition of fibres to concrete increases the impact resistance, but the structural behaviours of
targets subjected to high-velocity impact are complicated. In order to further study how the addition of
various volume fractions of fibres to concrete affect the projectile resistance, numerical simulations were
conducted in the programme AUTODYN.
Due to limitations in the numerical-simulation tool, the strain-rate dependence in tension for concrete
used in the RHT material model, often used for modelling concrete subjected to projectile or fragment
impact, could not be used in combination with a modified crack-softening curve.
When using the standard RHT material model in the numerical simulations the depth of penetration
and crater diameter on the front face of the 2.0 m long concrete target agree well with the experimental
results. However, the size of the cavitated region is overestimated in the numerical simulation, which,
according to [21], may be explained by the simplicity of the hydrodynamic tensile failure. In [21] it is
also pointed out that users of the model should avoid drawing conclusions from details within the spalled
or cavitated regions. Since the standard RHT material model cannot be used with a modified crack-
softening law, necessary to capture the effect of the added fibres in the concrete, the principal-tensile-
stress-failure model was used instead of the hydrodynamic-tensile-failure model in the simulations, which
also means that the strain-rate dependence of the tensile strength is turned off. These changes led to an
increased depth of penetration. The increment caused by the strain-rate independence of the tensile
strength was expected since the depth of penetration depends on the tensile strength, but the increased
penetration depth due to the change of tensile failure model probably derives from the different ways of
taking the third invariant and its dependence on the hydrostatic pressure into account.
Since the fibre-reinforced concrete is not modelled as discrete fibres within a concrete matrix, but the
fibres and concrete are instead modelled as one material with an improved post-cracking behaviour
compared to plain concrete, the results must be used with care. There are effects of the fibres that get lost
due to this simplification. Furthermore, since the effect of the fibres is not notable until after tensile-
failure initiation in the concrete (i.e. crack initiation), the results are highly dependent on the crack
0 	1000 mm
800 mm FRC1001
FRC3001
FRC1003	NSCs003 	FRC3003
0 	1000 mm
800 mm

-- 105 of 148 --

Paper I.12
distribution within the concrete target. The possibility to predict the real crack distributions within a
concrete target by means of numerical-simulation tools is strictly limited, and it should therefore be
pointed out that the results presented in this paper should be used in a comparative way and the reader
should treat the results with care and avoid drawing conclusions from details in the results.
The relative effect of fibres added to the concrete mix was found by comparing results from
simulations of projectile impact on plain concrete, modelled with bi-linear crack-softening in tension, to
projectile impact on fibre-reinforced concrete also modelled with bi-linear crack softening, but with larger
fracture energies than in plain concrete. In agreement with the literature [7] it was found that the addition
of fibres has a negligible effect on the depth of penetration, while it decreases the crater size on both the
front and rear face of the target. The influence on the scabbing crater is found to be larger than on the
spalling crater, which can be explained by the fact that a considerable part of the damage in the front-face
crater is caused by crushing of the material while the scabbing crater is mainly caused by tensile failure,
for which the effect of the fibres is larger. For the same reason the effect of increasing the number of
fibres is more visible on the rear-face crater than on the front-face crater.
6. 	Conclusions
The comparative numerical study of the resistance of fibre-reinforced concrete and plain concrete to
projectile impact showed that the addition of moderate dosage (<1%) of fibres to concrete gives:
o 	A negligible decrease of projectile-penetration depth compared to plain concrete.
o 	A decrease of crater diameter on both front and rear faces of the concrete target, but where the
effect on the rear face is larger than on the front face.
o 	Reduced crack propagation beyond the crater region, so that damage is confined to a more
localized volume.
An increasing amount of fibres in the concrete results in a:
o 	Relatively small size reduction of the front-face crater.
o 	Decreasing diameter of the rear-face crater in cases where scabbing occurs.
o 	Reduced crack propagation beyond the crater region.
It can also be concluded that scabbing in concrete structures caused by projectile impact may be
prevented by use of fibre-reinforced concrete if scabbing is due to the reflected stress wave caused by the
impact alone, and not in combination with the shear-plugging effects from the projectile.
Acknowledgement
The research presented in this paper is done within the research project “Concrete structures subjected
to blast and fragment impacts: dynamic behaviour of reinforced concrete”, financially supported by the
Swedish Rescue Services Agency. The authors would like to thank the members of the reference group
for the research project: Björn Ekengren, M.Sc., at the Swedish Rescue Services Agency, Morgan
Johansson, Ph.D., at Reinertsen AB, and Joosef Leppänen, Ph.D., at FB Engineering AB.
References
[1] Zhanga MH, Shimb VPW, Lua G, Chewa CW. Resistance of high-strength concrete to projectile
impact. Int J Impact Engng 2005;31:825-841.
[2] 	Maalej M, Quek SR, Zhang J. Behavior of hybrid-fiber engineered cementitious composites
subjected to dynamic tensile loading and projectile impact. J Mater Civil Eng 2005;17(2):143-152.
[3] 	Nataraja MC, Nagaraj TS, Basavaraja SB. Reproportioning of steel fibre reinforced concrete mixes
and their impact resistance. Cem Concr Res 2005;35:2350-2359.
[4] 	Luo X, Sun W, Chan SYN. Characteristics of high-performance steel fiber-reinforced concrete
subject to high velocity impact. Cem Concr Res 2000;30:907-914.
[5] 	Ong KCG, Basheerkhan M, Paramasivam P. Resistance of fibre concrete slabs to low velocity
projectile impact. Cem Concr Res 1999;21:391-401.
[6] 	Cánovas MF, Pamies RG, Simón del Potro JR, Almansa EM. Impact effects on the primary
fragmentation generated by the HE81 mortar grenade on conventional concrete and steel fibers
reinforced concrete. In: Bulson PS (ed.). Proceedings of the Third International Conference on
Structures Under Shock and Impact, Madrid (Spain): Computational Mechanics Publications, 1994,
pp. 37-44.
[7] 	Almansa, EM, Cánovas MF. Behaviour of normal and steel fiber-reinforced concrete under impact
of small projectiles. Cem Concr Res 1999;29:1807-1814.

-- 106 of 148 --

Paper I.13
[8] 	Johansson M. Structural Behaviour in Concrete Frame Corners of civil Defence Shelters, Non-linear
Finite Element Analyses and Experiments. Doctoral Thesis, Department of Structural Engineering,
Concrete Structures, Göteborg (Sweden): Chalmers University of Technology, 2000. 220 pp.
[9] 	Leppänen J. Concrete Structures Subjected to Fragment Impacts, Dynamic Behaviour and Material
Modelling. Doctoral Thesis, Department of Structural Engineering and Mechanics, Concrete
Structures, Göteborg (Sweden): Chalmers University of Technology, 2004. 127 pp.
[10] Nyström U. Design with regard to explosions. Master’s Thesis, Department of Civil and
Environmental Engineering, Structural Engineering, Concrete Structures, Göteborg (Sweden):
Chalmers University of Technology, 2006. 205 pp.
[11] Nyström U, Leppänen J. Numerical Studies of Projectile Impacts on Reinforced Concrete. In: Fan
SC, Chua HK (eds.). Proceedings of the Second International Conference on Design and Analysis of
Protective Structures, Singapore (Singapore): Nanyang Technical University, 2006. p. 310-319.
[12] Kennedy RP. A review of procedures for the analysis and design of concrete structures to resist
missile impacts. Nucl Eng Des 1976;37:183-203.
[13] Vossoughi F, Ostertag CP, Monteiro PJM, Johnson GC. Resistance of concrete protected by fabric
to projectile impact. Cem Concr Res 2007;37:96-106.
[14] Corbett GG, Reid SR, Johnson W. Impact loading of plates and shells by free-flying projectiles: A
review. Int J Impact Engng 1996;18(2):141-230.
[15] Chen XW, Li QM. Deep penetration of a non-deformable projectile with different geometrical
characteristics. Int J Impact Engng 2002;27:619-637.
[16] Chen XW, Li QM. Oblique and normal perforation of concrete targets by a rigid projectile. Int J
Impact Engng 2004;30:617-637.
[17] Tham CY. Numerical and empirical approach in predicting the penetration of a concrete target by an
ogive-nosed projectile. Finite Elem Anal Des 2006;42:1258-1268.
[18] Chen XW, Li QM. Dimensionless formulae for penetration depth of concrete target impacted by a
non-deformable projectile. Int J Impact Engng 2003;28:93-116.
[19] Forrestal MJ, Frew DJ, Hanchak SJ, Brar NS. Penetration of grout and concrete targets with ogive-
nose steel projectiles. Int J Impact Engng 1996;18(5):465-476.
[20] Hansson H. Numerical simulation of concrete penetration. FOA report 98-00816--311--SE, Defence
research establishment, Tumba (Sweden), 1998, 17 pp.
[21] ANSYS AUTODYN User Manual, Version 11.0. Concord (CA, USA): Century Dynamics Inc.,
2007. 528 pp.
[22] CEB-FIP Model Code 1990. Designe Code, Lausanne, Switzerland: Thomas Telford. 1993. 437pp.
[23] Gylltoft K. Fracture mechanics models for fatigue in concrete structures. Doctoral Thesis, Division
of Structural Engineering, Luleå (Sweden): Luleå University of Technology, 1983. 210 pp.
[24] van Mier JGM. Strain-softening of concrete under multiaxial loading conditions. Doctoral Thesis,
Eindhoven (The Netherlands): Eindhoven University of Technology, 1984. 349 pp.
[25] Bischoff PH, Perry SH. Compressive behaviour of concrete at high strain rates. Mater Struct
1991;24:425-450.
[26] Ross CA, Jerome DM, Tedesco JW, Hughes ML. Moisture and strain rate effects on concrete
strength. ACI Mater J 1996;93(3):293-300.
[27] Weerheijm J. Concrete under Impact Tensile Loading and Lateral Compression. Doctoral Thesis,
Delft University of Technology, Delft (The Netherlands), 1992.
[28] Schuler H. Experimentelle und numerische Untersuchungen zur Schädigung von stoßbeanspruchtem
Beton (in German). Doctoral Thesis, Universität der Bundeswehr München, Freiburg (Germany):
Intitut Kurzzeitdynamik, Ernst-Mach-Institut, 2004. 184 pp.
[29] Brara A, Klepaczko JR. Fracture energy of concrete at high loading rates in tension. Int J Impact
Engng 2007;34(3):424-435.
[30] Weerheijm J, van Doormaal JCAM. Tensile failure of concrete at high loading rates: New test data
on strength and fracture energy from instrumented spalling tests. Int J Impact Engng
2007;34(3):609-626.
[31] Löfgren I. Fibre-reinforced concrete for industrial construction: a fracture mechanics approach to
material testing and structural analysis. Doctoral Thesis, Department of Civil and Environmental
Engineering, Structural Engineering, Göteborg (Sweden): Chalmers University of Technology,
2005. 243 pp.
[32] Riedel W. Beton unter dynamischen lasten, meso. und makromechanische modelle und ihre
parameter (in German). Doctoral Thesis, Universität der Bundeswehr München, Freiburg
(Germany): Institut Kurzzeitdynamik, Ernst-Mach-Institut, 2000. 210 pp.

-- 107 of 148 --

Paper I.14
[33] Attard MM, Setung S. Stress-strain relationship of confined and unconfined concrete. ACI Mater J
1996;93(5):432-442.
Appendix A Model input data
Table 4:
Input data for concrete and steel-fibre reinforced concrete: RHT model.
Parameter 	Value 	Comments
Shear Modulus [kPa] 	1.433·10 7 	a
Compressive Strength fc [kPa] 	3.38·10 4 	a
Tensile Strength ft/fc 	0.078 	a
Shear Strength fs/fc 	0.18 	b
Intact Failure Surface Constant A 	2 	c
Intact Failure Surface Exponent N 	0.7 	c
Tens./Compr. Meridian Ratio 	0.6805 	b
Brittle to Ductile Transition 	0.0105 	b
G(elastic)/G(elastic-plastic) 	2 	b
Elastic Strength/ft 	0.7 	b
Elastic Strength/fc 	0.53 	b
Fractured Strength Constant B 	1.5 	c
Fractured Strength Exponent M 	0.7 	c
Compressive Strain Rate Exponent α 	0.032 	b
Tensile Strain Rate Exponent δ 	0, 0.025 	d
Maximum Fracture Strength Ratio 	1·1020 	b
Use CAP on Elastic Surface 	Yes 	b
Damage Constant D1 	0.04 	b
Damage Constant D2 	1 	b
Minimum Strain to Failure 	0.01 	b
Residual Shear Modulus Fraction 	0.13 	b
Tensile Failure 	Hydro, Principal Stress 	e
Principal Tensile Failure Stress [kPa] 	2.6364·103
Maximum Principal Stress Difference/2 	1.01·10 20 	b
Crack softening 	Yes
Fracture energy [Nm/m2
] 	100, 2000, 4000, 6000 	f
Flow Rule 	No-bulking 	b
Stochastic Failure 	No 	b
Erosion Strain/Instantaneous Geometric Strain 	1.5 	g
a. Calculated according to CEB-FIB Model Code 1990 [22].
b. Default value in AUTODYN material library for concrete with compressive strength of 35 MPa.
c. Determined by Leppänen [9], based on model proposed by Attard and Setunge [33].
d. No strain-rate dependence of tensile strength used in combination with modified RHT material model: for
standard RHT model the δ parameter is set to 0.025.
e. Principal-stress-failure model is used in modified RHT material model, and hydrodynamic-tensile-failure model
for standard RHT material model.
f. GF = 100 Nm/m2 for plain concrete and GF = 2000, 4000 and 6000 Nm/m2 for the steel-fibre reinforced concrete.
g. Calibrated by parameter studies; see Nyström [11].

-- 108 of 148 --

Paper I.15
Table 5:
Input data for concrete: equation of state (EOS).
Parameter 	Value
Reference Density [g/cm3 ] 	2.75
Porous Density [g/cm3] 	2.4
Porous Sound Speed [m/s] 	2920
Initial Compaction Pressure [kPa] 	2.33·104
Solid Compaction Pressure [kPa] 	6·10 6
Compaction Exponent 	3
Solid EOS 	Polynomial
Bulk Modulus A1 [kPa] 	3.527·10 7
A2 [kPa] 	3.958·10 7
A3 [kPa] 	9.04·10 6
B0 	1.22
B1 	1.22
T1 	3.527·10 7
T2 	0
Reference Temperature [K] 	300
Specific Heat [J/kgK] 	654
Thermal Conductivity [J/mKs] 	0
Compaction Curve 	Standard

-- 109 of 148 --



-- 110 of 148 --

Paper II
Numerical studies of the combined effects of blast and fragment loading
Nyström, U. and Gylltoft, K.
Submitted to International Journal of Impact Engineering, April 2008

-- 111 of 148 --



-- 112 of 148 --

Paper II.1
Numerical studies of the combined effects of blast and fragment loading
Ulrika Nyström*, Kent Gylltoft
Department of Civil and Environmental Engineering, Structural Engineering, Concrete Structures,
Chalmers University of Technology, SE-412 96 Göteborg, Sweden
(*ulrika.nystrom@chalmers.se)
_____________________________________________________________________
Abstract
The well-known synergetic effect of blast and fragment loading, observed in numerous experiments,
is often pointed out in design manuals for protective structures. However, since this synergetic effect is
not well understood it is often not taken into account, or is treated in a very simplified manner in the
design process itself. A numerical-simulation tool has been used to further study the combined blast and
fragment loading effects on a reinforced concrete wall. Simulations of the response of a wall strip
subjected to blast loading, fragment loading, and combined blast and fragment loading were conducted
and the results were compared. Most damage caused by the impact of fragments occurred within the first
0.2 ms after fragments’ arrival, and in the case of fragment loading (both alone and combined with blast)
the number of flexural cracks formed was larger than in the case of blast loading alone. The overall
damage of the wall strip subjected to combined loading was more severe than if adding the damages
caused by blast and fragment loading treated separately, which also indicates the synergetic effect of the
combined loading.
Key-words: Numerical simulation, Blast load, Fragment impact, Combined loading, Concrete
_____________________________________________________________________
1 	Introduction
The combined loading of blast and fragments, caused by explosions, is considered to be synergetic in
the sense that the combined loading results in damage greater than the sum of damage caused by the blast
and fragment loading treated separately, [1]. This is a well-known phenomenon pointed out in some of
the literature and design manuals within the area of protective design [2]. However, due to the complex
nature of the effect of combined loading, its high parameter dependence and the limited number of
documentations and comparable experiments, the design manuals often disregard the effect or treat it in a
very simplified manner.
In order to increase the understanding of the combined effects of blast and fragment loading,
numerical simulations were conducted. The simulations consist of a wall strip subjected to blast and
fragment loading, applied both separately and simultaneously. Both the wall strip and the loads used in
the simulations are based on requirements of protective capacity stated in the Swedish Shelter
Regulations, [3]. Using a numerical-simulation tool is motivated by e.g. the high cost of undertaking
tests, and the possibility to better follow and understand the principal phenomena related to this kind of
loading.
This work is a substudy within a project with the long-term aim to study and increase the knowledge
of blast and fragment impacts, and the synergy effect of these loads, on reinforced concrete structures.
The research project is a collaboration of many years’ duration between Chalmers University of
Technology and the Swedish Rescue Services Agency. In earlier studies within the framework of this
project, the effect of blast waves in reinforced concrete structures, fragment impacts on plain concrete,
and design with regard to explosions and concrete, reinforced and fibre-reinforced, subjected to projectile
impact were studied by Johansson [4], Leppänen [5] and Nyström [6,7], respectively.

-- 113 of 148 --

Paper II.2
2 	Theoretical framework
2.1 	Weapon load characteristics
As detonation of the explosive filler in a cased bomb is initiated, the inside temperature and pressure
will increase rapidly and the casing will expand until it breaks up in fragments. The energy remaining
after swelling and fragmenting the casing, and imparting velocity to the fragments, expends into the
surrounding air and thus creates a blast wave. Thereby, the structures around a bomb detonation will be
exposed to both blast and fragment loading, which means that at least three types of loading effects must
be considered:
• 	impulse load from blast wave
• 	impulse load from striking fragments
• 	impact load from striking fragments
where impulse is considered to give a global response and impact a local response caused by the
penetration of the fragments.
There are many different types of weapons, designed to have a specific effect on the surroundings. In
design of protective structures a threat-determination methodology, based on probability aspects, must be
used to decide what load conditions the structure is to be designed for. There are methodologies for
calculating the characteristics of the blast and fragment loads caused by explosion, which are well
accepted in the design of protective structures. However, even though the blast load characteristics for a
bare high-explosive detonation can be estimated with great accuracy, the loads from a cased bomb cannot
be determined as accurately [2]. Due to the complexity of not only the blast itself but also the
fragmentation of the casing, these load estimations are more uncertain.
Since the properties of the bomb (geometry, casing material and thickness, type of explosive filler,
etc.) and its position relative to the target, as well as the surrounding environment, have influence on the
loading conditions, all these parameters must be considered during analysis of the loading effect. Also the
distance from the detonation (stand-off) will greatly influence the loading properties. This is mainly due
to the change in peak pressure for the blast wave and the change in velocity of the fragments, which both
decrease with increasing distance. The retardation of the blast wave is larger than that of the fragments,
leading to a difference in arrival time; see Fig. 1. In the range closest to the bomb, i.e. within a few
metres, the blast wave will reach the target before the fragments, while at larger distances the fragments
will arrive before the blast wave. For a 250 kg general-purpose bomb (GP-bomb), with 50 weight per cent
TNT, the blast front and the fragments will strike the target at the same time at an approximate distance
of 5 metres.
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
Fig. 1. 	Time of arrival for blast wave and fragments as functions of the stand-off for a 250 kg GP-bomb with 50
weight per cent TNT, from [5].
2.1.1 	Blast loading
The blast load resulting from a detonation of an uncased charge in "free air", i.e. distant from the
nearest reflecting surface, is well known and often idealised as shown in Fig. 2. The detonation takes
place at time t = 0 and arrives at the point studied at time ta. As the blast wave arrives, the pressure
increases from the ambient pressure, P0, to P0+Ps+, where P s+ is the incident overpressure caused by the

-- 114 of 148 --

Paper II.3
detonation. As time goes on, the overpressure decays and at time T + after the time of arrival the pressure
is again equal to the ambient pressure P0 and the positive phase is over. Due to a partial vacuum formed
behind the blast front [8] a negative pressure P s- (relative to the ambient pressure) appears and the
negative phase is entered. The duration of the negative phase is longer than the positive phase, but the
amplitude of the negative pressure is limited by the ambient pressure, P0, and is often small compared to
the peak overpressure, P s+. However, in design with regard to explosions the negative phase is considered
less important than the positive phase and is therefore often disregarded.
Fig. 2. 	Incident blast wave idealisation for 125 kg TNT at 5 meters stand-off, based on [4].
As the blast wave strikes a surface, e.g. a wall, it is reflected and its behaviour changes. The so-called
normal reflection, taking place as the blast wave is reflected against a perpendicular surface, may lead to
significantly enhanced pressures, where the reflected peak overpressure P r+ will be between 2 and 8 [2],
and according to [8,9] as much as 20, times higher than the incident overpressure Ps+. According to [10]
the shape of the reflected pressure has the same general shape as the incident pressure, as shown in Fig. 3.
0
1000
2000
3000
4000
5000
0 	1 	2 	3 	4 	5
Time [ms]
Pressure, P [kPa]
Incident pressure
Reflected pressure
Fig. 3. 	Positive phase of reflected and incident blast wave for 125 kg TNT at 5 metres stand-off, calculated
according to [10].
For cased charges the blast load characteristics depend not only on the type and amount of explosive
and the stand-off distance, but also on the properties (geometrical and material) of the casing. Since there
is less knowledge about how the casing affects the blast wave, there are also less generic expressions
describing this. In [11] an expression for calculating an equivalent uncased charge weight is given as a
function of the ratio between the casing weight and the actual charge weight. However, the reduced blast
pressure due to the energy consumed during casing break-up is often not taken into account in the design
manuals [2], which also is used in this study.
P
T + 	T - 	t
P0+Ps+
P0
P0-Ps-
ta

-- 115 of 148 --

Paper II.4
2.1.2 	Fragment loading
As mentioned earlier, the casing of a bomb will swell after initiation of the explosive filler due to the
high pressure. During swelling, cracks will form and propagate in the casing; and as the cracks meet or
reach a free border, fragments are formed [12]. The nose and the tail section of the bomb will break up in
a smaller number of massive fragments and the body will fracture into many small fragments.
Derivation of theoretical expressions describing the fragmentation process and its characteristics for
cased bombs is difficult. This is partly due to the complexity of the phenomenon itself and partly due to
the great variation of bomb properties, which highly influences the fragmentation process. However,
there are expressions for estimating the mass distribution and velocities of the fragments that are based on
theoretical considerations and confirmed with a large number of tests [13]. In the derivation of these
expressions, the bomb casing is normally idealised as a cylinder with evenly distributed explosives,
meaning that the methods apply especially to items that can reasonably be approximated as either
cylindrical items or as a series of cylindrical items [13]. The more an item deviates from this ideal, the
less reliable are the estimations made using these methodologies.
In order to estimate the fragment mass distribution, a relationship developed by Mott [14,15]
(presented in e.g. [13,16]) is often used. For design purposes a design fragment is used. The mass of the
design fragment is often determined by specifying a confidence level giving the probability that the
weight of the fragment is the largest fragment produced. However, this method of determining the design
fragment is justified in design where the damage caused by the individual fragments is of interest as the
hazardous case. In the case of design against the fragment cluster, another approach may be more
desirable where the combined effect of the fragment impact and impulse is of interest. This is discussed
further in Section 4.2.
The initial velocity of the fragments can be estimated from the Gurney equation [17] (presented in e.g.
[13,16]), which also derives from an assumption of a cylindrical casing. Since this equation is based on
energy balance within the explosive and metal case system, without taking into account the loss of energy
during rupture of the casing, it is an upper bound estimation.
As the fragments travel through the air their velocity will decrease due to the air resistance. Smaller,
lighter fragments will retard faster than larger, heavier fragments. Equations describing this behaviour
exist as well, e.g. [13,16].
2.2 	Concrete behaviour under static and dynamic loading
It is well known that the two most pronounced disadvantages of concrete are its low tensile strength
and brittle behaviour. The tensile strength of normal-strength concrete is less than one tenth of the
compressive strength, and after fracture initiation, i.e. after the tensile strength is reached, the ability to
transfer stresses through the material decreases rapidly. For high-strength concrete the brittle behaviour
can also be seen in the case of uni-axial compression, but the post-fracture ductility in compression
increases, with a decreasing compressive strength.
In multi-axial loading conditions the behaviour of concrete differs from the behaviour under uni-axial
loading. The ductility, stiffness and strength in compression increase with increased confinement, and for
very high lateral pressures the compressive strength may be more than 15 times higher than the uni-axial
compressive strength [5]. Such high lateral pressures may occur during impact and perforation of e.g.
projectiles and fragments.
High dynamic loading, giving a high strain rate in the material, also affects the strength and ductility
of the concrete. In the case of high-rate tensile loading, the ultimate uni-axial tensile strength may be as
much as 5 to 7 times higher than the static tensile strength [18], and even though the effect on the ultimate
compressive strength is less pronounced it may still be more than doubled [19]. It has recently also been
indicated that the fracture energy is strain-rate-dependent [20-22].
3 	Method
Tests have been conducted around the world to study the combined effects of blast and fragment
loading, but these are often not suitable for drawing general conclusions about the local or global
structural behaviour. This is due to the great variation of parameters involved, e.g. load characteristics
and stand-off, which affects the results. Numerical simulations are often used to investigate the effect of
blast and fragments, and make it possible to study the influence of different parameters – stand-off

-- 116 of 148 --

Paper II.5
distance, fragment size, materials etc. – which is costly in experimental testing. Nevertheless, the
numerical simulations cannot fully supersede experiments, but should be used in combination, and
experiments are needed to verify the numerical models used in the simulations.
The reinforced concrete structure used in the study presented here corresponds to a wall strip in a
civil defence shelter, fulfilling the requirements of protective capacity related to conventional bombs in
the Swedish Shelter Regulations [3]. The loads applied, i.e. the blast wave and fragment loading, also
correspond to the load definitions in [3].
As no suitable experiments, with combined blast and fragment loading, were found for this study,
two separate experiments on blast load and single fragment impact were used to verify and calibrate the
numerical model. The validation and calibration process was done within a preliminary study and is only
briefly described in this paper. Conclusions from the preliminary study were used to build up the
numerical model of the wall strip subjected to blast and fragment impacts used in the main study. Single-
degree-of-freedom analyses were used to find what load combination caused the largest deflection:
simultaneous arrival of the two loads, blast load arriving first, or fragments arriving first. The results from
the SDOF analyses were used to decide the arrival times for the loads in the numerical simulation of
combined loading. The numerical results of the wall-strip response were compared and analysed in order
to see the effects of combined loading.
For further information about this study the reader is referred to [23] where a detailed description of
the load characterisation and the preliminary study is presented.
4 	Wall element and load characteristics
The Swedish Shelter Regulations [3] govern the design of civil defence shelters in Sweden, and
contain the requirements specified for these protective structures. Here only the criteria for protective
capacity related to conventional bombs are specified, but it should be pointed out that civil defence
shelters also are designed to withstand e.g. radioactive radiation, chemical and biological warfare, and
explosive gases.
According to [3], a civil defence shelter should be designed to withstand the effect of a pressure wave
corresponding to that produced by a 250 kg GP-bomb with 50 weight per cent TNT, which bursts freely
outside at a distance of 5.0 metres from the shelter during free pressure release. Further, the shelter must
also be able to withstand the effect of fragments from a burst as described above. In the case of fragment
loading it is the fragment cluster that is meant, while larger individual fragments may damage and
penetrate the shelter.
4.1 	Wall element
In the Swedish Shelter Regulations [3], the civil defence shelter is conceived as a reinforced, solid
concrete structure. For a shelter without backfilling the minimum thicknesses of the roof, walls and floor
are specified as 350, 350 and 200 mm, respectively, and the concrete should fulfil a requirement of at
least C25/30, according to [24] (corresponds to mean cylindrical compressive strength of 25 MPa). Hot-
rolled reinforcement bars with a specified requirement of strain hardening must be used. The
reinforcement must be placed in two perpendicular alignments in both edges of the structural element and
the minimum and maximum reinforcement content is 0.14 and 1.10%, respectively. A minimum
reinforcement-bar diameter of 10 mm and maximum bar spacing of 200 mm are required, with a
maximum concrete cover of 50 mm.
The wall studied has a total height of 3 metres and is simplified to be simply supported with a span
length of 2.7 m, as seen in Fig. 4. The rough simplification of the support conditions was not made in an
attempt to imitate the real behaviour of the wall.
In [3], equivalent static loads, representing the weapon effect, are used in the design process. A
static load of 50 kN/m2 is used to calculate the required amount of reinforcement in the walls, giving
reinforcement bars ø10 s170 (465 mm2/m in each face of the wall element). Deformed reinforcement bars
(B500BT), with a yield strength of 500 MPa were assumed and the distance from concrete edge to centre
of reinforcement bars was chosen as 35 mm. The concrete was assumed to have a concrete strength of
35 MPa.

-- 117 of 148 --

Paper II.6
Fig. 4. 	Civil defence shelter and simplified model of one of its walls.
4.2 	Load characteristics
In Fig. 5 the blast load caused by the GP-bomb specified in Section 4 with a stand-off of 5.0 metres,
calculated with ConWep [25], is shown together with a simplified relationship. It should be kept in mind
that design codes do often not take into account the energy consumed for swelling and fragmenting the
casing of bombs. As an approximation this energy loss is also neglected in the present study even though
it would be more accurate to reduce the pressure of the blast load in order to imitate the real behaviour.
The blast load is assumed to be uniform over the wall, which is reasonably accurate for this stand-off [4].
The impulse density of the blast load is, according to [25], 2 795 Ns/m2.
0
1000
2000
3000
4000
5000
0 	1 	2 	3 	4 	5
Time [ms]
Pressure, P [kPa]
Simplified relation
ConWep
Fig. 5. 	The reflected pressure load as function of time for 125 kg TNT at a distance of 5.0 metres, according to
ConWep [25], and the simplified relationship for this which is used in this study, based on [4].
Since the geometry and casing material of the bomb used in the design of civil defence shelters are not
specified, the size and mass distribution cannot be calculated without making certain assumptions. In this
study, the American GP-bomb Mk82 was used as a reference when estimating the mass distribution of the
bomb specified in the Swedish Shelter Regulations. According to ConWep [25] the Mk82 has a nominal
weight of 500 lb (226.8 kg) and contains 192.0 lb (87.09 kg) of the high explosive H-6, corresponding to
242.9 lb (110.2 kg) equivalent weight of TNT, and is therefore relatively close to the bomb specified in
the Swedish Shelter Regulations [3]. The mass distribution was estimated by scaling the inner casing
Time
[ms]
Pressure
[kPa]
0.0 	5 006
0.3 	2 930
0.6 	1 713
1.0 	836
1.5 	340
2.0 	137
3.0 	22
8.974 	0
5.0 m
3.0 m
0.2 m
 
0.35 m
0.35 m
2.7 m

-- 118 of 148 --

Paper II.7
diameter and the casing thickness to correspond to the somewhat increased volume of explosive filler
compared to the Mk82; for more details see [23].
In order to reduce the complexity of both the numerical model and the results produced, all fragments
were assumed to be spherical and of the same size, corresponding to a design fragment. It was further
assumed that the fragments were uniformly distributed over the wall.
As mentioned in Section 2.1.2, the design fragment, calculated with a confidence level (often taken as
95%), is used for design with regard to fragment impact. However, this design fragment and the
corresponding effect on the target are not representative of the fragment impulse load, so another
approach must be used to find a representative fragment size in this study. It was decided to use the
impulse caused by the fragments to define a representative weight of the fragments; from estimations of
the mass and velocity distribution among the fragments, the corresponding fragment impulse distribution
was calculated, and a representative fragment size was determined as the fragment mass giving the
average impulse on the structure, for details see [23]. This resulted in a fragment mass of 21.9 g and a
fragment diameter of 17.5 mm. The initial fragment velocity was calculated to approximately 1 890 m/s
(by use of the Gurney equation), and at the distance of 5.0 metres the velocity is decreased to 1 760 m/s.
The fragment density is approximately 0.65 kg/m2 and the corresponding impulse intensity caused by the
fragments is 1 125 Ns/m2
.
4.3 	SDOF estimations
The single-degree-of-freedom method (SDOF method) was used in order to find what combination
of arrival times of the blast and fragment load that resulted in the maximum deflection. The simplified
relation of the blast load, presented in Section 4.2, was used for the blast load and a triangular load was
assumed for the fragment loading. The duration of the fragment loading was assumed to 0.1 ms, which is
the approximate time it takes for the fragment to penetrate the concrete, and its impulse intensity was as
defined in Section 4.2, giving a peak pressure of 22.5 MPa. It should be pointed out that only the impulse
load of the fragments was taken into consideration in the SDOF analyses presented in this paper, since the
penetration by the fragments and the subsequent damage were not considered. An ideal-plastic material
response of the SDOF system was used and the maximum value of the internal dynamic resistance Rm of
the wall strip was calculated to be 275 kN; for details see Appendix A and [23].
In Fig. 6 the results are shown for five different cases of combined loading:
1. 	loads arrive at the same time (simultaneous loading)
2. 	blast wave first, fragments arrive at maximum wall velocity caused by the blast
3. 	blast wave first, fragments arrive at maximum wall deflection caused by the blast
4. 	fragments first, blast wave arrives at maximum wall velocity caused by the fragments
5. 	fragments first, blast wave arrives at maximum wall deflection caused by the fragments
As seen, the case of simultaneous loading causes the most severe deflection (equalling 139.2 mm at time
42.2 ms). For further information about the SDOF method the reader is referred to [6] and [16].
0
20
40
60
80
100
120
140
160
0 	10 	20 	30 	40 	50
Time [ms]
Deflection [mm]
 
Fragments arrive at maximum velocity
Fragments arrive at maximum deflection
Blast arrvives at maximum velocity
Blast arrives at maximum deflection
Simultaneous loading
Fig. 6. 	Mid-point deflection of wall strip subjected to blast load and fragment impulse load, calculated with SDOF
method. Since the response of simultaneous loading and loading where fragments arrive first and blast at time of
maximum velocity are almost identical these lines are seen as one in the figure.

-- 119 of 148 --

Paper II.8
5 	Numerical model
Hydrocodes are used for highly time-dependent dynamic problem-solving by use of finite difference,
finite volume and finite element techniques. The differential equations for conservation of mass,
momentum and energy, together with material models, describing the behaviour of the materials
involved, and a set of boundary conditions give the solution of the problem. The numerical hydrocode
AUTODYN 2D and 3D [26] was used in this study, and the Lagrangian solver technique was employed.
5.1 	Calibration and validation of numerical model
Experiments and findings from numerical simulations of experiments described in the literature were
used in the calibration and validation process for the numerical model used in this study. The numerical
simulations for the calibration process were performed in 2D and 3D. The latter with the width of one
element and use of boundary conditions to emulate a 2D simulation and thereby reduce the computational
time. Below is a brief summary of the calibration and validation process; for further description see [23].
Magnusson and Hansson [27] described experiments on reinforced concrete beams, of length 1.72 m,
subjected to blast loading, and thereafter used AUTODYN 3D to simulate the beam response. They
concluded that it was possible to simulate the beam response with the RHT material model provided that
the principal-stress tensile-failure model with an associated flow rule (in AUTODYN named Bulking)
was used in the simulations, together with crack softening. This was also found by means of numerical
simulations of the same experiment conducted within the calibration process made in the study presented
here. In this process it was also found that an element length of 12 mm gave approximately the same
beam response as a finer mesh of 6-mm elements; hence, the coarser mesh of 12-mm elements should be
accurate enough to simulate the beam response when subjected to blast loading.
Leppänen [28] performed and described experiments with a single fragment impacting a concrete
block, with size 750 x 350 x 500 mm. An AUTODYN 2D model with axial symmetry and different
element sizes (1 and 2 mm) was used in the calibration process, and it was concluded that the numerical
model gave accurate results. However, the size of the fragment used in [28] differed from the fragment
size used in this study, and hence, additional 2D simulations were conducted to investigate the effect of
the element size. It was concluded that the resulting crater in the simulations with an element size of
6 mm was somewhat different from the experimental crater, but still an acceptable approximation of the
damage caused by the fragment impact. Thus, it was not considered worth the greatly increased
computational time to use a finer mesh in the main study.
5.2 	Material models
The standard material model for concrete with compressive strength of 35 MPa in the material library
of AUTODYN was used to describe the behaviour of concrete. This material model was developed by
Riedel, Hiermayer and Thoma (therefore called the RHT model) [29], and consists of three pressure-
dependent surfaces in the stress space. The RHT model also takes into account pressure hardening, strain
hardening and strain-rate hardening as well as the third invariance in the deviatoric plane. However, the
preliminary study, i.e. the calibration and validation process described in Section 5.1, showed that it was
necessary to make some modifications within the model to get accurate results. For example, it was
concluded that the principal-stress tensile-failure model was necessary to describe the behaviour of the
wall strip in the case of blast loading. The change to a principal-stress tensile-failure model leads to a cut-
off of the strain-rate dependence of the ultimate tensile strength.
To describe the behaviour of the reinforcing steel, a piecewise linear Johnson-Cook material model
was used, including strain hardening but not strain-rate effects. A linear elastic steel material model, with
a shear modulus of 81.1 GPa, was used for the supports, and a von Mises material model, simplifying the
material behaviour to linear-elastic–ideal-plastic with yield strength of 800 MPa, was used for the
fragments. For further information about the material models used, the reader is referred to [23,29,30].

-- 120 of 148 --

Paper II.9
5.3 	Mesh
Since fragment penetration is a local effect, requiring relatively small elements, a numerical model of
even a 1.0-metre wide strip of the shelter wall would have been very large and required extensive
computational time. By use of symmetries and planar-strain-boundary conditions the model was limited
to a 84 x 1 512 x 350 mm part of the wall, representing 4.25% of a metre-wide wall strip.
Due to the varying need of element sizes when simulating the effects of blast and fragment impact, a
finer mesh of Lagrangian elements (size 6 x 6 x 6 mm) was used on the front face of the wall strip, and a
coarser mesh of elements (size 12 x 12 x 6 mm) of the same element type was used on the rear side of the
wall strip; see Fig. 7.
The wall strip was supported by two semicylindrical supports with a radius of 84 mm to avoid local
crushing of the elements around the supports. The nodes of the support were joined together with the
interfacing concrete nodes. In order to allow for rotation around the supports only the line of back nodes
was prevented from moving in the x-direction. The supports were modelled with 4 elements along the
radius of the half-cylinders.
In the simulations including impacting fragments, these were modelled with two elements along their
radius. Embedded beam elements with the same length as the surrounding concrete elements and with
circular cross-section were used to model the reinforcement bars.
Fig. 7. 	Numerical mesh of wall strip used in simulations, also showing reinforcement in the modelled wall strip.
168
1344
84 	102 	8+240 	[mm]
Transverse
reinforcement
Border between fine
and coarse mesh
x
y
204
204
192
204
204
192
204
Fragment 	Longitudinal
reinforcement

-- 121 of 148 --

Paper II.10
6 	Results
The responses of the wall strip estimated in the numerical simulations for blast loading, fragment
loading, and combined blast and fragment loading (simultaneous loading) are presented and discussed
below. As the damage differs at different locations within the wall strip, the damage is shown in three
views for each case: a top view, a side view at the section of reinforcement, and one in the middle of the
wall strip (the section where the fragments strike the wall strip). In the figures with the wall strip
responses, the colour red indicates fully damaged concrete.
6.1 	Blast loading
In the case of blast loading, the maximum deflection is 65.2 mm and takes place 29.0 ms after the
arrival. In Fig. 8 the damage in the wall strip is shown at time of maximum deflection, where it can be
seen that cracks have formed at the rear side of the wall strip and have propagated towards the front face.
The damage is localised to relatively few cracks, even though it can be seen that crack initiation has taken
place rather densely along the length of the strip. Damaged concrete can also be seen along the
reinforcement close to the fully developed cracks; at these locations the reinforcement bars were yielding.
When studying the crack development, it was seen that the localised crack closest to the support was
formed already after 1 ms, while no damage of the concrete was observed in the middle of the beam at
this time. This indicates a direct shear crack due to the inertia effects, i.e. internal momentum, related to
severe dynamic loading. After approximately 2 ms, also the localised cracks in the middle of the beam
have formed, and these have the character of flexural cracks.
Top view
Reinforcement side
Middle of wall strip
Fig. 8. 	Response of wall strip subjected to blast load at time of maximum mid-point deflection.
6.2 	Fragment loading
In Fig. 9 the wall strip subjected to fragment loading is shown at time of maximum deflection. This is
reached 13.3 ms after the fragments strike the wall, and amounts to 11.0 mm. As can be seen, the
simulated damage caused by the multi-fragment impact is more complex than in the case of blast loading.
The total damage consists of local damage on the front face, i.e. craters, scabbing cracks at the rear of the
wall strip, direct shear cracks close to the supports, and bending cracks in the more central parts of the
beam. When comparing Fig. 8 and Fig. 9, it can be seen that there are more bending cracks formed in the
case of fragment impact than for blast loading, resulting in an increased energy-absorbing capacity since
the reinforcement bars can yield at more locations. This means that also the load-bearing capacity may
increase. However, the load-bearing capacity will at the same time be reduced by the decreased effective
height due to the damage on the front face of the wall strip.

-- 122 of 148 --

Paper II.11
Top view
Reinforcement side
Middle of wall strip
Fig. 9. 	Response of wall strip subjected to fragment impacts at time of maximum mid-point deflection.
To better distinguish the modes of damage and to better understand their evolution, the beam response
is shown at different times, i.e. after 0.25, 0.6 and 9 ms, in Fig. 10. After 0.25 ms (Fig. 10a) the fragment
impacts have caused craters on the front face, and the reflected stress wave has caused scabbing cracks at
the rear of the wall strip. The scabbing effect was not expected in the simulations, but 2D simulations of
fragment impact, taking the multiple simultaneous impact of fragments and also the strain-rate
dependence of the tensile strength into account, confirm this behaviour; see [23]. However, in reality the
two scabbing cracks probably represent one crack which appears at the level of tensile reinforcement and
not in between the two reinforcement layers, as in this case.
Approximately 0.6 ms after the arrival of fragments, cracks propagate at the rear side of the wall strip,
close to the supports, see Fig. 10b. These are probably direct shear cracks, as also observed in blast
loading; see Section 6.1.
At time 9 ms, flexural cracks have started to propagate in the wall strip, as seen in Fig. 10c. These
cracks form at the rear face of the target, but also at the level of the scabbing cracks, which indicates that
the wall strip has started to act as two separate structures with sliding between the two separate planes
formed by the horizontal scabbing cracks.
a)
b)
c)
Fig. 10. 	Response of wall strip subjected to fragment impacts at time (a) 0.25 ms, (b) 0.6 ms and (c) 9 ms after time
of fragment arrival, seen at section of reinforcement.

-- 123 of 148 --

Paper II.12
6.3 	Combination of blast and fragment loading
The maximum mid-point deflection in case of simultaneous loading of blast and fragment is 85.7 mm
and occurs after 33.4 ms. The response of the wall strip at time of maximum deflection is shown in
Fig. 11. As the damage caused by the fragment impact, i.e. the front face craters and the scabbing cracks
at the rear of the strip, appears very early (at less than 0.25 ms, as seen in Section 6.2) the damage in the
case of combined, simultaneous loading is rather similar to the case of fragment loading alone. Due to the
blast load, the deflection is larger and the damage in the concrete surrounding the reinforcement bars is
more severe than in the case of fragment impact alone.
Top view
Reinforcement side
Middle of wall strip
Fig. 11. 	Response of wall strip subjected to combined blast and fragment loading at time of maximum mid-point
deflection.
Further, the diameters of the front face craters are reduced in case of combined loading compared to
fragment loading alone. This can probably be explained by increased confinement effects. The blast wave
causes pressure on the front face, acting perpendicular to the concrete surface, and gives a lateral pressure
to the material compressed by the fragment penetration; schematically shown in Fig. 12. This reduction of
front-face damage may lead to a higher load-bearing capacity than in the case with fragment impacts
alone, but since the effective height of the wall strip is reduced, the load-bearing capacity is still affected.
However, as in the case of fragment loading alone, the number of flexural cracks formed is larger than in
the case of blast loading alone, allowing the reinforcement bars to yield at more locations, which may
improve the load-bearing capacity.
Fig. 12. 	Schematically shown confinement effects from blast loading, σblast , on concrete element compressed by
σfragment due to fragment penetration.
7 	Comparison of mid-point deflections and velocities
In Fig. 13 the mid-point deflections of the three wall strips subjected to blast, fragment and combined
loading, respectively, are shown. As seen, the mid-point deflection in the case of combined loading is
larger than the sum of the deflections caused by blast and fragment loading separately, which indicates a
synergy effect.
σblast
σblast
σfragment
σfragment
Concrete surface
Penetrating fragment

-- 124 of 148 --

Paper II.13
Fig. 13. 	Mid-point deflection of wall strip subjected to combined, blast and fragment loading from numerical
simulations.
In Fig. 14 the mid-point velocities from the simulations with blast, fragment and combined loading
are shown. The velocity for combined loading is first influenced by the fragment impact, but already after
a fraction of a millisecond the velocity seems close to the velocity of the wall strip subjected to blast
loading alone. After approximately 2 ms, the velocity for combined loading increases and exceeds the
velocity for blast loading.
Fig. 14. 	Mid-point velocity of wall strip subjected to blast and fragment loading from numerical simulations.
In Table 1 the mid-point deflections estimated in the numerical analyses are presented together with
results from SDOF analyses. Input parameters for the SDOF analyses are shown in Appendix A.
In the case of blast loading the estimations of the deflection made in SDOF and numerical simulations
agree well. In the case of fragment loading the difference is larger, which probably can be explained by
the limitations in the SDOF analyses to take into account e.g. the energy consumed during penetration
and subsequent crushing of the concrete, the formation of many flexural cracks, and inertia effects, which
may increase the load-bearing capacity. The results from the numerical simulation and the SDOF analysis
differ also for combined loading. The difference is even larger than in the case of fragment loading and
may be explained by magnification of the limitations already used as explanation for the case of fragment
loading.
0
20
40
60
80
100
0 	5 	10 	15 	20 	25 	30 	35
Time [ms]
Deflection [m/s]
Combined loading
Fragment loading
Blast loading
0
1
2
3
4
5
0 	0.5 	1 	1.5 	2 	2.5 	3
Time [ms]
Velocity [m/s]
0
1
2
3
4
5
0 	5 	10 	15 	20 	25 	30 	35
Time [ms]
Velocity [m/s]
Combined loading
Fragment loading
Blast loading
Combined loading
Fragment loading
Blast loading

-- 125 of 148 --

Paper II.14
Table 1.
Mid-point deflections.
Load 	u AUTODYN [mm] 	u SDOF [mm]
Blast 	65.2 	64.0
Fragment 	11.0 	13.9
Combined 	85.7 	139
8 	Summary and conclusions
In blast loading, the elongation of the rear face of the wall strip is localised to a few cracks where
yielding of the reinforcement takes place. In fragment loading, the flexural cracks to which the elongation
of the reinforcement is localised are numerous, the energy-absorbing capacity of the wall strip may thus
be increased.
In the simulations involving fragment loading, scabbing cracks formed due to the reflected stress
wave. The appearance of these cracks were unexpected, but was confirmed with a 2D simulation study,
indicating that the case of multi-fragment impact may lead to scabbing also when the single fragment
impact does not. It may therefore be necessary to take this effect into account in design of protective
structures. However, it is questionable whether the location and size of the scabbing cracks simulated are
realistic.
Most damage caused by the fragment impact occurs within 0.2 ms after arrival, which is short
compared to the response time of the element, indicating that in the case of combined loading the bearing
capacity and the mid-point deflection of the wall strip may be highly influenced by the fragment impact
since the structure thus loses part of its effective height.
The larger mid-point deflection of the wall strip subjected to blast loading, compared to the deflection
in the case of fragment loading, was expected since the impulse from the blast was almost 2.5 times the
impulse caused by the fragments.
The damage caused by combined loading is more severe than if adding the damages caused by the
blast and fragment loading treated separately. The size of the front face craters, though, is an exception
since these are larger in the case of fragment loading than in combined loading. It can be concluded that
the mid-point deflection in combined loading (85.7 mm) is larger than the sum of mid-point deflections
for blast and fragment loading treated separately (in total 76.2 mm), indicating a synergy effect in
combined loading.
Acknowledgement
The work presented in this paper is done within the research project "Concrete structures subjected
to blast and fragment impacts: dynamic behaviour of reinforced concrete", financially supported by the
Swedish Rescue Services Agency. The authors would like to thank the members of the reference group
for the project: Björn Ekengren, M.Sc., at the Swedish Rescue Services Agency, Morgan Johansson,
Ph.D., at Reinertsen AB, and Joosef Leppänen, Ph.D., at FB Engineering AB.

-- 126 of 148 --

Paper II.15
References
[1] 	Girhammar UA. Brief review of Combined Blast and Fragment Loading Effects. Report C7:90.
National Fortifications Administration, Eskilstuna, Sweden, 1990. 15 pp.
[2] 	ASCE. Structural Design for Physical Security – State of the Practice. Task committee: Conrath,
E.J. et al., American Society of Civil Engineers, 1999. 264 pp.
[3] 	Ekengren B. Skyddsrum SR 06 (Shelter regulations SR06, in Swedish). Swedish Rescue Services
Agency, Karlstad (Sweden), 2006. 113 pp.
[4] 	Johansson M. Structural Behaviour in Concrete Frame Corners of Civil Defence Shelters, Non-
linear Finite Element Analyses and Experiments. Doctoral Thesis, Department of Structural
Engineering, Concrete Structures, Göteborg (Sweden): Chalmers University of Technology, 2000.
220 pp.
[5] 	Leppänen J. Concrete Structures Subjected to Fragment Impacts, Dynamic Behaviour and Material
Modelling. Doctoral Thesis, Department of Structural Engineering and Mechanics, Concrete
Structures, Göteborg (Sweden): Chalmers University of Technology, 2004. 127 pp.
[6] 	Nyström U. Design with regard to explosions. Master’s Thesis, Department of Civil and
Environmental Engineering, Structural Engineering, Concrete Structures, Göteborg (Sweden):
Chalmers University of Technology, 2006. 205 pp.
[7] 	Nyström U, Leppänen J. Numerical Studies of Projectile Impacts on Reinforced Concrete. In: Fan C,
Chua HK (eds.). Proceedings of the Second International Conference on Design and Analysis of
Protective Structures, Singapore (Singapore): Nanyang Technical University, 2006. p. 310-319.
[8] 	Johansson M, Laine L. Bebyggelsens motståndsförmåga mot extrem dynamisk belastning,
Delrapport1: Last av luftstötvåg (The capacity of buildings to resist severe dynamic loading, Part 1:
Blast wave loading, in Swedish). Swedish Rescue Services Agency, Karlstad (Sweden) 2007.
114 pp.
[9] 	Baker WE. Explosions in Air. University of Texas Press, Austin (TX, US), 1973. 285 pp.
[10] U.S. Army. Fundamentals of Protective Design for Conventional Weapons. Technical Manual
TM 5-855-1. 1992. 271 pp.
[11] Forsén R, Nordström M. Damage to reinforced concrete slabs due to the combination of blast and
fragment loading. (Reprint from the Second International Conference of Structures under Shock and
Impact, 	Portsmouth, 	UK, 	1992.) 	FOA 	report 	B 	20101-2.6. 	National 	Defence 	Research
Establishment, Sundbyberg (Sweden), 1992. 12 pp.
[12] Curran DR. Simple fragment size and shape distribution formulae for explosively fragmenting
munitions. Int J Impact Engng 1997;20:197-208.
[13] DDESP. Methodologies for calculating primary fragment characteristics. Report No. DDESP TP 16,
Department of Defence Explosives Safety Board, Alexandra, (U.S.), 2003. 53 pp.
[14] Mott NF, Linfoot EH. A Theory of Fragmentation. Ministry of Supply report No A.C.3348, January
1943.
[15] Mott NF. A Theory of Fragmentation of Shells and Bombs. Ministry of Supply report No A.C.4035,
May 1943.
[16] Krauthammer T. Modern protective structures – Design, analysis and evaluation. Course notes for
course Modern Protective Structures, State College (USA), July 2006. 412 pp.
[17] Gurney RW. The Initial Velocities of Fragments from Bombs, Shells and Grenades. US Army
Ballistic Research Laboratory Report BRL 405, Aberdeen Providing Ground, MD, September 1943.
[18] Malvar LJ, Ross CA. Review of Strain Rate Effects for Concrete in Tension. ACI Mater J
1998;95(6):735-739.
[19] Bischoff PH, Perry SH. Compressive behaviour of concrete at high strain rates. Mater Struct
1991;24:425-450.
[20] Schuler H. Experimentelle und numerische Untersuchungen zur Schädigung von stoßbeanspruchtem
Beton (in German). Doctoral Thesis, Universität der Bundeswehr München, Freiburg (Germany):
Institut Kurzzeitdynamik, Ernst-Mach-Institut, 2004. 184 pp.
[21] Brara A, Klepaczko JR. Fracture energy of concrete at high loading rates in tension. Int J Impact
Engng 2007;34(3):424-435.
[22] Weerheijm J, van Doormaal JCAM. Tensile failure of concrete at high loading rates: New test data
on 	strength 	and 	fracture 	energy 	from 	instrumented 	spalling 	tests. 	Int 	J 	Impact 	Engng
2007;34(3):609-626.

-- 127 of 148 --

Paper II.16
[23] Nyström U. Concrete Structures Subjected to Blast and Fragment Impacts, Numerical Simulations
of Reinforced and Fibre-reinforced Concrete. Licentiate thesis. Department of Civil and
Environmental Engineering, Structural Engineering, Concrete Structures, Göteborg (Sweden):
Chalmers University of Technology, 2008. 117 pp.
[24] Boverket. Boverkets Handbok för Betongkonstruktioner BBK 04, (Boverket’s handbook for
Concrete Structures BBK 04, in Swedish). Boverket, Karlskrona (Sweden), 2004. 271 pp.
[25] ConWep. Collection of conventional weapon effects calculations based on TM 5-855-1,
Fundamentals of Protective Design for Conventional Weapons, U. S. Army Engineer Waterboys
Experiment Station, Vicksburg (VA, USA), 1992.
[26] ANSYS AUTODYN User Manual, Version 11.0. Concord (CA, USA): Century Dynamics Inc.,
2007. 528 pp.
[27] Magnusson J, Hansson H. Simuleringar av explosionsbelastade betongbalkar – en principstudie
(Numerical simulations of concrete beams – a principal study, in Swedish). National Defence
Research Establishment (FOI), FOI Report 1686--SE, Tumba (Sweden), 2005. 55 pp.
[28] Leppänen J. Splitterbelastad betong – Experiment och numeriska analyser (Fragment Impacts into
Concrete – Experiments and Numerical Analyses, in Swedish). Department of Structural
Engineering and Mechanics, Division of Concrete Structures, Chalmers University of Technology,
Report no. 03:6, Göteborg (Sweden), 80 pp.
[29] Riedel W. Beton unter dynamischen lasten, meso. und makromechanische modelle und ihre
parameter (in German). Doctoral Thesis, Universität der Bundeswehr München, Freiburg
(Germany): Institut Kurzzeitdynamik, Ernst-Mach-Institut, 2000. 210 pp.
[30] AUTODYN Theory Manual, Revision 4.3. Concord (CA, USA), Century Dynamics Inc., 2005.
227 pp.
[31] Magnusson J, Hallgren M. High Performance Concrete Beams Subjected to shock Waves from Air
Blast. National Defence Research Establishment (FOA) FOA report 00-01586-311--SE, Tumba
(Sweden), 2000. 86 pp.
[32] Johansson M. Stötvågsutbreding i luft (Blast wave in air, in Swedish). Swedish Rescue Services
Agency, Karlstad (Sweden), 2002. 60 pp.
Appendix A
Since an ideal-plastic material behaviour was assumed for the internal resistance of the SDOF system
the equation of motion used to describe the movement of the mid-point in a simply supported beam, with
mass, M, and length, L, subjected to a uniformly distributed load, q(t), can be simplified to:
L	t	q	R	u	M 	⋅	=	+ 	)	(
3
2 && 	(1)
where u&& is the mid-point acceleration of the beam [6].
When assuming an ideal-plastic material behaviour, the internal resistance, R, in Eq. 1 equals the
maximum value of the load that the beam (or wall strip) can bear, i.e. R=R m given that the displacement
u≠0. Before any displacement occurs (u=0), if the external load is smaller than the maximum load-
bearing capacity (P(t)<Rm), the internal resistance equals the external load (R=P(t)). According to [10] the
dynamic internal resistance can be estimated as 1.3 times the static internal resistance, possible
explanation to this is given in [23]. The increase in load-bearing capacity in the case of dynamic loading,
compared to static loading, is reported in [31] where blast-loaded concrete beams are studied, and
supports the value used in [10] for increased internal resistance to dynamic loads. In numerical
simulations of blast-loaded walls conducted and reported by Johansson [32] an increased load-bearing
capacity was observed. [32] explained this by the appearance of large normal forces, which probably can
be explained by inertia effects.
The dynamic internal resistance, Rm, is for a simply supported beam with uniformly distributed load
thus calculated as:
L
M
R 	Rd
m
8
3	.	1	= 	(2)
where MRd is the static moment capacity of the beam.

-- 128 of 148 --

Conference Paper
Numerical Studies of Projectile Impacts on Reinforced Concrete
Nyström, U. and Leppänen, J.
Proceedings of the 2nd International Concference on Design and Analysis of
Protective Structures 2006, 13-15 November 2006, Singapore, pp. 310-319

-- 129 of 148 --



-- 130 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.1
Numerical Studies of Projectile Impacts on Reinforced Concrete
Ulrika Nyström1, Joosef Leppänen2
Department of Civil and Environmental Engineering, Structural Engineering, Concrete Structures,
Chalmers University of Technology, SE-412 96 Göteborg, Sweden
1 (ulrika.nystrom@chalmers.se) and 2 (joosef.leppanen@chalmers.se)
___________________________________________________________________________
Abstract
Numerical methods are an increasingly helpful tool in studies of protective structures such as projectile
impacts on concrete structures. To predict the depth of penetration of the projectile, spalling and scabbing in
reinforced concrete members, material models that take into account the strain rate effect, large deformations and
triaxial stresses are required.
The aim of this paper is to increase the understanding of the phenomena of projectile impacts on reinforced
concrete. Numerical studies of impact on reinforced and non-reinforced concrete members were carried out
where the amount, spacing and dimensions of the reinforcement were varied, showing how these variations
influence the depth of penetration and diameter of spalling of concrete.
The hydrocode AUTODYN with Lagrangian solver is used in the numerical simulations. For concrete, the
material model takes into account pressure hardening, crack softening and strain rate effects. For the
reinforcement, von Mises’ material model is used.
It is well known that reinforcement prevents spalling and scabbing in concrete structures. For plain concrete,
the depth of penetration depends mainly on the compressive strength of the concrete and the shape, material
properties and impact velocity of the projectile. However, in reinforced concrete, the amount, spacing and
location of the reinforcement are also important parameters. The depth of penetration decreases with increasing
amount of the reinforcement, and if an increased steel bar diameter is used the depth of penetration, as well as
the crater size, will decrease. Furthermore, reinforcement bars that are outside the damage zone have a minor
effect on the depth of penetration and cratering.
Key words: Reinforced concrete; Projectile impact; Numerical simulation; Penetration; Spalling
___________________________________________________________________________
1. 	Introduction
Reinforced concrete structures are effective as protective structures. Chalmers University of
Technology is collaborating with the Swedish Rescue Services Agency to study the behaviour of
concrete structures subjected to blast and fragment impacts; see Ekengren [1]. In earlier research,
Johansson [2] studied the effect of blast waves in reinforced concrete structures, Leppänen [3] studied
fragment impacts on plain concrete, and Nyström [4] studied design with regard to explosions. The
long-term aim in the collaboration between Chalmers and the Swedish Rescue Services Agency is to
study the combined effects of blast and fragment impacts on reinforced concrete structures.
However, this paper aims to contribute to increasing the general understanding of phenomena
during projectile impacts on reinforced concrete members. Numerical studies of impact on non-
reinforced and reinforced concrete members were carried out where the reinforcement ratio, spacing
and bar diameter were varied in order to examine their effect on the depth of penetration and diameter
of spalling of the concrete.
Resistance of reinforced concrete structures to projectile impact is a complex problem that has
been a subject of both empirical and numerical studies. The depth of penetration of a projectile

-- 131 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.2
impacting on a plain concrete target is mainly dependent on the projectile form (nose shape and
diameter), material properties (mass, density), impact velocity and the concrete compressive strength.
These parameters are often included in the empirical equations used to estimate the depth of
penetration (in plain as well as in reinforced concrete). However, when reinforcement is cast into the
concrete, the reinforcement ratio, spacing and bar diameter influence the resistance of the target and
these parameters are not included in the empirical equations.
2. 	Numerical Models of Concrete and Reinforcement
The 2D numerical analyses were made in the software AUTODYN [5]. The constitutive model for
concrete used in AUTODYN was the RHT model (Riedel, Hiermaier and Thoma), developed by
Riedel [6]. The model, which consists of three yield surfaces, as shown in Fig. 1, includes pressure
hardening, strain hardening and strain rate hardening. Furthermore, the deviatoric section of the
surfaces depends on the third invariant.
Residual Strength
Elastic Limit Surface
Failure Surface
Yield strength, Y
Pressure, p
Fig. 1: The RHT model used for concrete; based on Riedel [6].
In AUTODYN a linear softening law is included to model the post-failure response of concrete in
tension. Since concrete is a very brittle material and the strength decreases rapidly after the failure
initiation, it would be more convenient to use a bi-linear softening law, for example the one proposed
by Gylltoft [7]; see also Leppänen [3]. However, it has been assumed that the linear softening law is
accurate enough to use in this work where the overall behaviour of the reinforced concrete is of
interest.
In order to make a projectile stop, all its kinetic energy must be absorbed by either crushing the
concrete target or creating plastic deformations in the steel. If a rigid projectile is used, all kinetic
energy must be absorbed by the target, which will cause more damage to the target than if a
deformable projectile is used. All parts made of steel (for example, reinforcement and projectile) were
modelled with high rigidity with an elastic–perfectly plastic material model (von Mises), since the
projectile does not impact on the reinforcement and therefore a less complex material model is
sufficient.
3. 	Numerical Simulations of Projectile Impacting on Plain Concrete
The numerical simulations of reinforced concrete are compared to a numerical simulation of a
plain concrete cylinder subjected to the same projectile impact. In order to verify the numerical model
of the plain concrete target, the numerical results are compared to experimental results.
3.1. Experimental setup: projectile impact on plain concrete
In the experiment reported by Hansson [8], the 6.28 kg ogive-nose steel projectile used had a
length of 225 mm, diameter of 75 mm, density of 7 830 kg/m3, bulk modulus of 159 GPa, shear
modulus of 81.8 GPa, and yield stress of 792 MPa. The striking velocity was 485 m/s. The target was

-- 132 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.3
a concrete cylinder, cast in a steel culvert, with a diameter of 1.6 m and a length of 2.0 m. The
concrete cube strength was approximately 40 MPa (tested on a 150 mm cube). Two shots were fired at
the same striking velocity, the first with support and the second without support at the opposite end of
the target. The depth of penetration was 655 mm for the first shot and 660 mm for the second shot; the
support at the backside of the target had a negligible effect on the depth of the penetration of the
projectile. The diameter of the crater was approximately 800 mm.
3.2. Numerical mesh
It is well known that the size of the numerical mesh affects the results, and that the refined mesh
extends the computational time. For dynamic loading, the mesh dependency is even more sensitive,
since more terms are added in the constitutive models. To assess the mesh dependency, a common
method is to halve the mesh size and compare the first coarse mesh with the finer mesh; and if the
results differ only negligibly, the coarse mesh can be used. However, due to increased manipulation
errors (caused by truncation, round-offs and insufficient numbers in input data) there is a risk of using
a too fine mesh.
A good rule of thumb, according to Zucas and Scheffler [9], is to use at least three elements across
the radius of the projectile in order to get reasonable results from numerical simulation of project
impacts on concrete. Therefore, the mesh dependency was chosen with quadratic elements with a
length of 10 mm (giving 3.75 elements across the radius of the projectile), after which the mesh was
further refined to 5 mm elements. Further refined mesh was assumed not to give an increased accuracy
worth the increased computational time. Here, only the final mesh used is presented.
The numerical mesh used for the plain concrete cylinder cast in a steel culvert is shown in Fig. 2.
The model was axially symmetric, created by quadratic Lagrangian elements with an element length
of 5 mm, totalling 400 x 160 elements. Full interaction between the concrete and the steel culvert was
assumed.
Fig. 2: Numerical mesh of projectile impacting on plain concrete cast in steel culvert.
3.3. Analyses with AUTODYN
For simplicity the same material parameters were used for all steel parts; see Section 3.1. The
material parameters used in the concrete model were either determined by Leppänen [10] or default
values of concrete from the material library in AUTODYN except for the erosion strain. The erosion
strain coefficient, used for the Lagrangian solver technique in order to overcome problems with
distortion and grid tangling due to large deformations of the mesh, was here calibrated by parametric
studies so that the depth of penetration would agree with the experimental results. All material
parameters used in the RHT model are shown in Table 1. Details of the material parameters shown in
Table 1 are described in AUTODYN.
steel culvert
projectile

-- 133 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.4
Table 1: Input data for concrete: RHT model, constitutive model.
Parameter 	Value 	Comments
Shear Modulus [kPa] 	1.433·10 7 	a
Compressive Strength fc [kPa] 	3.38·10 4 	a
Tensile Strength ft/fc 	0.078 	a
Shear Strength fs/fc 	0.18 	b
Intact Failure Surface Constant A 	2 	c
Intact Failure Surface Exponent N 	0.7 	c
Tens./Compr. Meridian Ratio 	0.6805 	b
Brittle to Ductile Transition 	0.0105 	b
G(elastic)/G(elastic-plastic) 	2 	b
Elastic Strength/ft 	0.7 	b
Elastic Strength/fc 	0.53 	b
Fractured Strength Constant B 	1.5 	c
Fractured Strength Exponent M 	0.7 	c
Compressive Strain Rate Exponent α 	0.032 	b
Tensile Strain Rate Exponent δ 	0.025 	d
Maximum Fracture Strength Ratio 	1·10 20 	b
Use CAP on Elastic Surface 	Yes 	b
Damage Constant D1 	0.04 	b
Damage Constant D2 	1 	b
Minimum Strain to Failure 	0.01 	b
Residual Shear Modulus Fraction 	0.13 	b
Tensile Failure 	Hydro (Pmin) 	b
Erosion Strain/Instantaneous Geometric Strain 	1.5 	e
a. Calculated according to CEB-FIB Model Code 1990 [11].
b. Default value in AUTODYN material library for concrete with compressive strength of 35 MPa.
c. Determined by Leppänen [3, 10] based on model proposed by Attard and Setunge [12].
d. Calibrated by parameter studies; see Leppänen [10]. This parameter cannot give a realistic description of the dynamic
increase factor for concrete in tension.
e. Calibrated by parameter studies.
In AUTODYN an equation of state (EOS) is required beside the constitutive model in order to
complete the description of continuum. Default values from the material library in AUTODYN were
used for the material parameters describing the EOS for concrete, except for the density which was
assumed to be 2 400 kg/m3. Details of the parameters shown in Table 2 are described in AUTODYN.
Table 2: Input data for concrete: equation of state (EOS).
Parameter 	Value
Reference Density [g/cm3 ] 	2.75
Porous Density [g/cm3] 	2.4
Porous Sound Speed [m/s] 	2920
Initial Compaction Pressure [kPa] 	2.33·10 4
Solid Compaction Pressure [kPa] 	6·106
Compaction Exponent 	3
Solid EOS 	Polynomial
Bulk Modulus A1 [kPa] 	3.527·10 7
A2 [kPa] 	3.958·10 7
A3 [kPa] 	9.04·10 6
B0 	1.22
B1 	1.22
T1 	3.527·10 7
T2 	0
Reference Temperature [K] 	300
Specific Heat [J/kgK] 	654
Thermal Conductivity [J/mKs] 	0
Compaction Curve 	Standard

-- 134 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.5
3.4. Results
The depth of penetration in the numerical simulation was 654 mm and the diameter of the crater
was 580 mm. It is to be observed that the measurement of the crater diameter is ambiguous. Here it
was measured as the diameter of the fully damaged outermost layer; see Fig. 3, where the white areas
are undamaged concrete and black indicates fully damage concrete.
Fig. 3: Computed cratering and depth of penetration in plain concrete cylinder.
The arrows show the crater diameter and depth of penetration from experiments reported by Hansson [8].
Even though the depth of penetration agrees very well with the experimental results, the crater
diameter should have been larger and the bottom of the crater should have been narrower in order to
agree with the experimental results.
4. 	Numerical Simulations of Projectile Impacting on Reinforced Concrete
4.1. Numerical mesh
To study the effect of projectile impact on reinforced concrete, various sets of reinforcement
arrangements were modelled inside the concrete cylinder. The reinforcement was modelled as
reinforcement rings, with different dimensions and spacing (in both horizontal and vertical direction),
cast into the concrete; see Fig. 4 and Fig. 5.
Fig. 4: Schematic figure of reinforcement arrangement (2D model rotated 360 degrees).
654 mm
>580/2 mm
	580/2 mm
projectile
reinforcement rings

-- 135 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.6
Fig. 5: Reinforcement arrangement.
The same numerical mesh as for the plain concrete cylinder was used here, and the reinforcement
was modelled with 2 elements across the radius of the bars; see Fig. 6. Full interaction between the
reinforcement and the concrete was assumed.
Fig. 6: Numerical mesh of projectile impacting on reinforced concrete cast in steel culvert.
4.2. Parametric Studies
4.2.1. 	Effect of amount of reinforcement
In order to examine the effect of the amount and position of the reinforcement, ten numerical
simulations were made, using the same reinforcement bars and spacing between them, after which the
depth of penetration and crater diameter were measured; see Table 3. The maximum decrease of the
depth of penetration, in relation to the plain concrete cylinder, achieved in this study was about 15%.
In one case the depth of penetration in the reinforced concrete exceeded the depth of penetration
measured in the plain concrete, but the crater diameter was smaller; see Fig. 3 and no. 10 in Table 3.
This means that more energy was consumed to crush the concrete in the longitudinal direction and less
in the radial direction compared to the non-reinforced case. When a certain amount of reinforcement
was used, the depth of penetration and the crater diameter decreased insignificantly, even though more
reinforcement layers were modelled inside the concrete cylinder; see 1-3 and 6-8 in Table 3 and Fig. 7.
s V
a1
s H 	s H 	s H
s V
a2
a1 – vertical distance from impact
point to the closest
reinforcement ring
a2 – horizontal distance from
impact point to the closest
reinforcement ring
sH – spacing in horizontal direction
sV – spacing in vertical direction
steel culvert
projectile

-- 136 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.7
Table 3: Depth of penetration and crater diameter for various amounts of reinforcement rings.
No
φ bar
[mm]
a1
[mm]
sV
[mm] # Va 	a2
[mm]
sH
[mm] # Hb 	Depth of penetration
[mm]
Crater diameter c
[mm]
0 	- 	- 	- 	0 	- 	- 	0 	654 	580
1 	20 	50 	100 	5 	50 	100 	8 	555 	490
2 	20 	50 	100 	4 	50 	100 	7 	555 	480
3 	20 	50 	100 	4 	50 	100 	6 	560 	520
4 	20 	50 	100 	4 	50 	100 	5 	600 	470
5 	20 	50 	100 	4 	50 	100 	4 	605 	460
6 	20 	50 	100 	3 	50 	100 	7 	563 	530
7 	20 	50 	100 	2 	50 	100 	7 	562 	480
8 	20 	50 	100 	1 	50 	100 	7 	570 	490
9 	20 	50 	100 	3 	50 	100 	6 	560 	500
10 	20 	150 	100 	3 	50 	100 	6 	670 	480
a. Number of reinforcement rings in vertical direction.
b. Number of reinforcement rings in horizontal direction.
c. See comments in Section 3.4.
a)
b)
Fig. 7: Damage of concrete cylinder with (a) 4 x 7 and (b) 4 x 6 reinforcement rings, respectively.
4.2.2. 	Effect of reinforcement spacing
The effect of the reinforcement spacing was studied by doubling the spacing in the vertical and
horizontal directions, one at a time, and finally in both directions at the same time; see Table 4. If the
spacing was doubled in one direction, no matter whether it was in the horizontal or the vertical
direction, the depth of penetration increased by approximately 13% while the crater diameter was
relatively unaffected. When the spacing was doubled in both directions, the depth of penetration
increased from 560 mm to 660 mm, even deeper than for the plain concrete cylinder; see Fig. 3.
555 mm
560 mm
520/2 mm
 
480/2 mm

-- 137 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.8
Table 4: Depth of penetration and crater diameter for various spacing between the reinforcement rings.
No
φ bar
[mm]
a1
[mm]
sV
[mm] # Va 	a2
[mm]
sH
[mm] # Hb 	Depth of penetration
[mm]
Crater diameter c
[mm]
9 	20 	50 	100 	3 	50 	100 	6 	560 d 	500 d
11 	20 	100 	200 	3 	50 	100 	6 	630 	450
12 	20 	50 	100 	3 	100 	200 	6 	635 	490
13 	20 	100 	200 	3 	100 	200 	6 	660 	510
a. Number of reinforcement rings in vertical direction.
b. Number of reinforcement rings in horizontal direction.
c. See comments in Section 3.4.
d. The same data as in Table 3.
4.2.3. 	Effect of dimension of reinforcement
In order to examine the influence of the reinforcement bar diameter, two different dimensions
were used in the numerical studies, 10 and 20 mm; see Table 5. Different numbers of reinforcement
layers were also used in order to see if the possible influence differed when changing the amount of
reinforcement. The results show that the decrease of bar diameter affected the depth of penetration,
which increased by approximately 10 to 15% when the diameter was halved, and the crater diameter
increased by 10 to 13 % or, in one case, not at all. When using bars with 10 mm diameter the depth of
penetration is almost unaffected compared to the unreinforced case; see Table 3.
Table 5: Depth of penetration and crater diameter for various bar diameters.
No
φ bar
[mm]
a1
[mm]
sV
[mm] # Va 	a2
[mm]
sH
[mm] # Hb 	Depth of penetration
[mm]
Crater diameter c
[mm]
14 	10 	50 	100 	5 	50 	100 	8 	640 	540
1 	20 	50 	100 	5 	50 	100 	8 	555 d 	490 d
15 	10 	50 	100 	4 	50 	100 	7 	640 	640
2 	20 	50 	100 	4 	50 	100 	7 	555 d 	480 d
16 	10 	50 	100 	4 	50 	100 	5 	660 	470
4 	20 	50 	100 	4 	50 	100 	5 	600 d 	470 d
a. Number of reinforcement rings in vertical direction
b. Number of reinforcement rings in horizontal direction
c. See comments in Section 3.4
d. The same data as in Table 3.
5. 	Discussion
The amount of fully damaged concrete was greater in the plain concrete cylinder than in the
reinforced concrete cylinders. A probable explanation is that some of the energy applied to the
reinforced target is absorbed when deforming the reinforcement bars. In the reinforced concrete
cylinders, more and finer cracks, which also are more concentrated around the crater, have formed
than in the plain concrete target. This is probably because the crack formation also absorbs energy,
indicating another reason why the projectile caused less damage in the reinforced concrete cylinders
than in the plain concrete cylinder.
The improved resistance of the concrete cylinder when reinforced with steel rings can plausibly be
explained by the increased confinement due to the reinforcement. This resistance would probably not
be achieved if straight reinforcement bars were cast into the concrete instead of the steel rings, even if
the same amount of reinforcement had been used. Numerical studies on penetration of reinforced
concrete targets, where straight bars have been used, indicate that the presence of reinforcement does
not increase the penetration resistance itself as long as the projectile does not strike the steel,
Huang et al [13].
There seems to be an effective length (longitudinal direction) within which the reinforcement
affects the depth of penetration and the crater diameter. If reinforcement rings are placed outside this

-- 138 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.9
effective length, they have little or no effect on these variables. The number of reinforcement layers in
the radial direction seems to have less influence on the depth of penetration and crater diameter than
does the distance from the symmetry axis of the cylinder to the first layer of reinforcement rings in the
radial direction. A probable explanation is that the confinement effect decreases with increasing
distance.
Further, decreasing the diameter of the bars or increasing the spacing between them has a negative
effect on the depth of penetration. The crater diameter seems to be less influenced by these parameters.
Since thinner or more widely spaced bars mean a lower proportion of steel in the volume around the
impact area, there should be less resistance to compression by the concrete giving way beneath the
projectile, resulting in deeper penetration.
6. 	Conclusions
It is clear that the amount and position of reinforcement influence the depth of penetration and
crater size. In this study, the reinforcement has a local effect; as long as the reinforcement is inside the
damage zone and a sufficient amount of reinforcement is used, the depth of penetration and crater
diameter are affected noticeably.
The distance between the centre line of the cylinder and the first layer of reinforcement is an
important factor for the depth of penetration, which increases with an increasing distance.
When the spacing between the reinforcement bars was increased in one direction, the depth of
penetration increased; and when the spacing was increased in both vertical and horizontal directions,
the depth of penetration increased even more. However, the spacing has a minor effect on the crater
diameter.
The depth of penetration is also affected by the bar size. A decreased reinforcement bar diameter
resulted in both increased depth of penetration and crater diameter.
Acknowledgement
For the research presented in this paper financial support was obtained from the Swedish Rescue
Services Agency. The authors would like to thank Professor Kent Gylltoft, at Chalmers, and the
members of the reference group for the project “Concrete structures subjected to blast and fragment
impacts: dynamic behaviour of reinforced concrete”: Björn Ekengren, M.Sc., at the Swedish Rescue
Services Agency, and Morgan Johansson, Ph.D., at Reinertsen AB.
References
[1] 	Ekengren, B., Skyddsrum, SR 06, (Civil Defence Shelters, in Swedish), B54-141/06, Swedish
Rescue Services Agency, Karlstad, Sweden, 2006. 114pp.
[2] 	Johansson, M., Structural behaviour in concrete frame corners of civil defence shelters,
Doctoral Thesis, Department of Structural Engineering, Division of Concrete Structures,
Chalmers University of Technology, Göteborg, Sweden, 2000. 204pp.
[3] 	Leppänen, J., Concrete structures subjected to fragment impacts: Dynamic behaviour and
material modelling, Doctoral Thesis, Department of Structural Engineering and Mechanics,
Division of Concrete Structures, Chalmers University of Technology, Göteborg, Sweden,
2004. 61pp.
[4] 	Nyström, U., Design with regard to explosions, Master's Thesis, Department of Civil and
Environmental Engineering, Division of Structural Engineering, Concrete Structures,
Chalmers University of Technology, Göteborg, Sweden, 2006. 205pp.

-- 139 of 148 --

2nd Design and Analysis of Protective Structures 2006
13 – 15 November 2006, Singapore
Conference Paper.10
[5] 	AUTODYN Manuals; v6.1, Century Dynamics Inc., 2005.
[6] 	Riedel, W., Beton under dynamischen Lasten Meso- und makromechanische Modelle und ihre
Parameter (in German), Doctoral Thesis, Fakultät für Bauingenieur- und Vermessungswesen,
Universität der Bundeswehr München, Freiburg, Germany, 2000. 210pp.
[7] 	Gylltoft, K., Fracture mechanics models for fatigue in concrete structures, Doctoral Thesis,
Department of Structural Engineering, Luleå Univeristy of Technology, Luleå, Sweden, 1983.
210pp.
[8] 	Hansson, H., Numerical simulation of concrete penetration, FOA-R-98-00816-311--SE,
Defence research establishment, Weapons and Protection Division, Tumba, Sweden, 1998.
17pp.
[9] 	Zukas, J.A. and Scheffler, D.R., Practical aspects of numerical simulation of dynamic events:
Effects of meshing, International Journal of Impact Engineering, Vol.24, No.9, pp.925-945,
2000.
[10] 	Leppänen, J., Dynamic behaviour of concrete structures subjected to blast and fragment
impacts, Licentiate Thesis, Department of Structural Engineering, Division of Concrete
Structures, Chalmers University of Technology, Göteborg, Sweden, 2002. pp.71.
[11] 	CEB-FIP model code 1990. Design code, 1993, T. Telford, Lausanne; Switzerland 1993.
437pp.
[12] 	Attard, M.M. and Setunge, S., Stress-strain relationship of confined and unconfined concrete,
ACI Materials Journal, Vol.93, No.5, pp.432-442, September-October 1996.
[13] 	Huang, F., Wu, H., Jin, Q. and Zhang, Q., A numerical simulation on the perforation of
reinforced concrete targets, International Journal of Impact Engineering, Vol.32, pp.173-187,
2005.

-- 140 of 148 --



-- 141 of 148 --



-- 142 of 148 --

Licentiate Theses and Doctoral Theses, Concrete Structures,
Chalmers University of Technology, 1990-
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

-- 143 of 148 --

96:1 	Morgan Johansson: New Reinforcement Detailing in Concrete Frame Corners
of Civil Shelters. Non-linear Finite Element Analyses and Experiments.
Publication 96:1. Göteborg, November 1996. 77 pp. (No. 1106). Licentiate
Thesis.
96:2 	Magnus Åkesson: Implementation and Application of Fracture Mechanics
Models for Concrete Structures. Publication 96:2. Göteborg, November 1996.
159 pp. (No. 1112). Doctoral Thesis.
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

-- 144 of 148 --

02:1 	Peter Harryson: Industrial Bridge Construction – merging developments of
process, productivity and products with technical solutions. Publication 02:1.
Göteborg, January 2002. 90 pp. (No. 34). Licentiate Thesis.
02:2 	Ingemar 	Löfgren: 	In-situ 	concrete 	building 	systems 	– 	developments 	for
industrial constructions. Publication 02:2. Göteborg, March 2002. 125 pp.
(No. 35). Licentiate Thesis.
02:4 	Joosef Leppänen: Dynamic Behaviour of Concrete Structures subjected to
Blast and Fragment Impacts. Publication 02:4. Göteborg, April 2002. 78 pp.
(No. 31). Licentiate Thesis.
02:5 	Peter Grassl: Constitutive Modelling of Concrete in Compression. Publication
02:5. Göteborg, May 2002. 95 pp. (No. 37). Licentiate Thesis.
02:6 	Rikard 	Gustavson: 	Structural 	Behaviour 	of 	Concrete 	Railway 	Sleepers.
Publication 02:6. Göteborg, September 2002. 180 pp. (No. 32). Doctoral
Thesis.
02:8 	Mathias Johansson: Composite Action and Confinement Effects in Tubular
Steel-Concrete Columns. Publication 02:8. Göteborg, November 2002. 173 pp.
(No. 33). Doctoral Thesis.
03:1 	Per-Ola Svahn: Impact-Loaded Concrete Piles – Theoretical and experimental
study of load effects and capacity. Publication 03:1. Göteborg, May 2002.
99 pp. (No. 38). Licentiate Thesis.
04:3 	Peter 	Grassl: 	Plasticity 	and 	Damage 	Mechanics 	for 	Modeling 	Concrete
Failure. Publication 04:3. Göteborg, September 2004. 159 pp. Doctoral
Thesis.
04:4 	Joosef Leppänen: Concrete Structures Subjected to Fragment Impacts –
Dynamic Behaviour and Material Modelling. Publication 04:4. Göteborg,
October 2004. 125 pp. (No. 31). Doctoral Thesis.
2005 	Helen Broo: Shear and Torsion Interaction in Prestressed Hollow Core Slabs.
Lic 2005:2. Göteborg 2005. 83 pp. Licentiate Thesis.
2005 	Per-Ola 	Svahn: 	Dynamic 	Behaviour 	of 	Reinforced 	Concrete 	Structures:
Analyses with a Strong Discontinuity Approach. Ny serie nr 2366. Göteborg
2005. 159 pp. Doctoral Thesis.

-- 145 of 148 --

2005 	Ingemar Löfgren: Fibre-reinforced Concrete for Industrial Construction – a
fracture mechanics approach to material testing and structural analysis. Ny
serie nr. 2378. Göteborg 2005. pp 243. Doctoral Thesis.
2006 	Rasmus Rempling: Constitutive Modelling of Concrete Subjected to Tensile
Monotonic and Cyclic Loading. Lic 2006:4. Göteborg 2006. 59 pp. Licentiate
Thesis.
2008 	Anette 	Jansson: 	Fibres 	in 	Reinforced 	Concrete 	Structures 	– 	analysis,
experiments and design. Lic 2008:3. Göteborg 2008. 84 pp. Licentiate Thesis.

-- 146 of 148 --



-- 147 of 148 --



-- 148 of 148 --