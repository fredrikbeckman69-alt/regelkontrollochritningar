---
title: "L04 113 Spalling In Concrete Subjected To Shock Wave Blast"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-113_spalling-in-concrete-subjected-to-shock-wave-blast.pdf"
fileType: "PDF"
keywords: ["betong","explosion","tryckvåg","splitter","strain","figure","stress","inelastic"]
summary: "Department of Civil and Environmental Engineering Division of Structural Engineering Concrete Structures CHALMERS UNIVERSITY OF TECHNOLOGY Gothenburg, Sweden 2016 Master’s Thesis BOMX02-16-26 Spalling in Concrete Subjected to Shock Wave Blast Frac..."
---

Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2016
Master’s Thesis BOMX02-16-26
Spalling in Concrete Subjected to Shock
Wave Blast
Fracture due to cyclic crack propagation
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
ERIK FLINCK
MARTIN OLSSON
Spall location
0
2
4
6
8
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-2
0
2
-2 0 2 4 6
Stress,
 σ [MPa]
Total strain, εtot [10-3]
P(t)
Fully open crack

-- 1 of 146 --



-- 2 of 146 --

MASTER’S THESIS BOMX02-16-26
Spalling in Concrete Subjected to Shock Wave Blast
Fracture due to cyclic crack propagation
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
ERIK FLINCK
MARTIN OLSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2016

-- 3 of 146 --



-- 4 of 146 --

I
Spalling in Concrete Subjected to Shock Wave Blast
Fracture due to cyclic crack propagation
Master’s Thesis in the Master’s Programme Structural Engineering and Building
Technology
ERIK FLINCK
MARTIN OLSSON
© ERIK FLINCK, MARTIN OLSSON 2016
Examensarbete BOMX02-16-26/ Institutionen för bygg- och miljöteknik,
Chalmers tekniska högskola 2016
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover:
Illustration of loaded concrete element with resulting fracture location for non-linear
material response.
Chalmers Reproservice
Göteborg, Sweden, 2016

-- 5 of 146 --



-- 6 of 146 --

I
Spalling in Concrete Subjected to Shock Wave Blast
Fracture due to cyclic crack propagation
Master’s thesis in the Master’s Programme Structural Engineering and Building
Technology
ERIK FLINCK
MARTIN OLSSON
Department of Civil and Environmental Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
Over the past 20 years, Chalmers University of Technology has been conducting
research on structures subjected to explosions. One field within this research relates to
the structural resistance to withstand spalling, which is a fracture phenomenon where
material breaks lose at the opposite side from the loaded one. The conventional
method of evaluating spalling, developed in the late 1980s, suggested that spalling in
concrete occurs when a compression wave reflects at the free side of the structure and
causes tensile stresses equal to the tensile strength. This method on how to evaluate
spalling was recently questioned by PhD student Jonas Ekström, who instead
suggested that spalling takes place during cyclic loading/unloading, where material
ductility will influence the structural response. This results in that spalling does not
occur instantaneously nor necessarily at the same location as predicted in the
conventional theory.
To support his claim, Ekström developed a numerical routine which showed that
spalling does not occur instantaneously as the tensile stress reaches the tensile
strength, but rather over cyclic loading/unloading where material ductility is included.
For this reason, the objective of this thesis focuses mainly on providing improved
understanding of the spalling phenomenon, as well as supporting the current research
project by performing a parametric study of this numerical model.
This thesis provides an overview of the spalling phenomenon. It further highlights the
difficulties in representing a shock wave in numerical modelling. The results from the
parametric study show that the shock wave properties will influence the structural
response significantly, as well as that some parameters, such as the damping and
number of elements, cannot be parameterized without causing complications in the
results. Further, preliminary results show that the depth of spalling does not change
when including non-linearity in both strain softening and pressure time gradient. A
main concern with the numerical model throughout this entire thesis is the
inconsistency in fracture zone. More or less all results in the parametric study have a
distribution of inelastic strains not consistent with the assumed fracture zone, which is
problematic. Therefore, this thesis presents a method on how to partly adjust for this
inconsistency.
Key words: Spalling, concrete, spalling depth, wave propagation, shock wave, strain
softening, pressure-time gradient, inelastic strains, fracture zone

-- 7 of 146 --

II
Utstötning i betong belastad av stötvåg
Brott på grund av cyklisk sprickutbredning
Examensarbete inom masterprogrammet Structural Engineering and Building
Technology
ERIK FLINCK
MARTIN OLSSON
Institutionen för bygg- och miljöteknik
Avdelningen för konstruktionsteknik
Betongkonstruktioner
Chalmers tekniska högskola
SAMMANFATTNING
Under de senaste tjugo åren har Chalmers Tekniska Högskola forskat kring
explosionsbelastade konstruktioner. Ett ämne inom denna forskning relaterar till
konstruktioners kapacitet att motstå utstötning, vilket är ett brottfenomen där material
slits loss på motsatt sida av den belastade. Den konventionella metoden för att
utvärdera utstötning, utvecklad under sent 1980-tal, föreslår att utstötning sker när en
tryckvåg reflekteras på en fri yta och skapar dragspänningar som uppnår
draghållfastheten. Denna metod att utvärdera utstötning på ifrågasattes nyligen av
doktorand Jonas Ekström, som istället menar på att utstötning sker under cyklisk på-
och avlastning, där materialets seghet påverkar strukturens beteende. Detta resulterar i
att utstötning inte inträffar omedelbart när dragspänningen uppnår draghållfastheten.
Det innebär vidare att utstötning nödvändigtvis inte sker i samma del av strukturen
som antas i den konventionella teorin.
För att stödja sin hypotes utvecklade Ekström en numerisk modell, vilken visade på
att utstötning faktiskt inte inträffar momentärt utan snarare under cyklisk på- och
avlastning där materialets seghet är inkluderat. Av denna anledning fokuserar detta
examensarbete på att förse läsaren med en ökad förståelse om utstötning, såväl som
att stödja den pågående forskningen genom att bland annat tillhandahålla en
parametrisk studie på Ekströms numeriska modell.
Mot denna bakgrund, tillhandahåller detta examensarbete en genomgång av utstötning
som fenomen. Vidare visar den på svårigheterna i att återskapa en stötvåg i en
numerisk modell. Resultaten från parameterstudien visar att en stötvågs egenskaper
påverkar strukturens beteende betydligt, och att några parametrar, såsom systemets
dämpning och antalet element, inte kan varieras för mycket utan att orsaka problem i
resultaten. Vidare så tyder preliminära resultat på att utstötningsdjupet inte förändras
när icke-linjärt töjningsmjuknande och icke-linjär tryck-tid gradient inkluderas.
Slutligen ifrågasätts resultaten från den numeriska modellen med anledning av
brottzonens inkonsekvens. Mer eller mindre alla resultat i parameterstudien visar på
en fördelning av icke-elastiska töjningar som inte motsvarar den antagna brottzonen.
Av denna anledning presenterar detta arbete en metod som kan användas för att delvis
justera denna inkonsekvens.
Nyckelord: Utstötning, betong, utstötningsdjup, vågutbredning, stötvåg,
töjningsmjuknande, tryck-tid gradient, icke-elastisk töjning, brottzon

-- 8 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 III
Contents
ABSTRACT I
SAMMANFATTNING II
CONTENTS III
PREFACE VII
NOTATIONS VIII
1 INTRODUCTION 1
1.1 Background 1
1.2 Aim 1
1.3 Methodology 1
1.4 Limitations 2
1.5 Outline of the report 2
2 THEORY 3
2.1 Loads caused by explosions 3
2.1.1 Shock wave in air 3
2.1.2 Reflexion of shock wave 5
2.1.3 Influence of pressure profile due to distance 6
2.1.4 TNT as a measurement of released energy 7
2.2 Structures subjected to blast wave 8
2.2.1 Overview 8
2.2.2 Wave propagation in material 8
2.2.3 Particle velocity 10
2.2.4 Stress-distribution in blast loaded structures 11
2.3 Material 14
2.3.1 Overview 14
2.3.2 Fracture mechanics 15
2.3.3 Constitutive models for concrete in tension 16
2.3.4 Strain rate 18
2.3.4.1 Overview 18
2.3.4.2 Strain rate influence on concrete strength found in literature 19
2.3.4.3 Possible explanations for increased strength 20
2.4 Fracture due to blast loading 21
2.4.1 Overview 21
2.4.2 Conventional spalling evaluation 22
2.4.3 Hypothesis on spalling 24
2.4.4 Empirical estimations 25
2.4.4.1 Overview 25
2.4.4.2 FKR 2011 25
2.4.4.3 Unified Facilities Criteria (UFC) 27
2.4.4.4 Cormie et al. 27

-- 9 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	IV
2.4.5 Spalling and cratering effected by high strain rate effects 28
3 EXPERIMENTAL METHODS TO EVALUATE SPALLING 29
3.1 Overview 29
3.2 Schuler et al. 30
3.3 Wu et al. 32
4 NUMERICAL ANALYSIS 35
4.1 Overview 35
4.2 Model 35
4.2.1 Material models 37
4.3 Numerical approach 38
4.4 Representation of a shock wave in numerical analysis 39
4.4.1 Overview 39
4.4.2 Time interval influence 40
4.4.3 Damping ratio influence 41
4.4.4 Influence on number of element 44
4.4.5 Combined influence damping and elements 46
4.4.6 Shock wave representation for increased pressure time gradient 48
4.5 Development of inelastic strains 50
4.5.1 Presented results 52
4.6 Parametric study 54
4.6.1 Input parameters 54
4.6.2 Load duration 54
4.6.2.1 Plasticity model 54
4.6.2.2 Damage and damage-plasticity models 56
4.6.3 Concrete thickness 57
4.6.4 Peak pressure 58
4.6.4.1 Plasticity model 58
4.6.4.2 Damage and damage-plasticity models 60
4.6.5 Tensile strength 61
4.6.5.1 Plasticity model 61
4.6.5.2 Damage and damage-plasticity models 62
4.6.6 Number of elements 63
4.6.7 Damping ratio 64
4.6.7.1 Plasticity model 64
4.6.7.2 Damage and damage-plasticity models 66
4.7 Non-linear strain softening 68
4.7.1 Material response 68
4.7.2 Plasticity model 70
4.7.3 Damage model 71
4.7.4 Damage-plasticity model 72
4.8 Non-linear pressure time relation 73
4.9 Fracture zone and fracture energy 76

-- 10 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 V
4.9.1 Examples of fracture zone adjustments 80
4.9.1.1 Overview 80
4.9.1.2 Short load duration, fracture zone adjustment 80
4.9.1.3 Long load duration, fracture zone adjustment 82
4.10 Observations on how inelastic strains develop 84
4.10.1 Overview 84
4.10.2 Lack of inelastic strains at left side of the structure 85
4.10.3 Successively development of inelastic strains 86
5 DISCUSSION 89
5.1 Overview 89
5.2 Model limitations 89
5.3 Parametric study 89
5.4 Non-linear strain softening and non-linear pressure time gradient 91
6 CONCLUSIONS 92
6.1 Overview 92
6.2 Summary of results and observations 92
6.3 Further studies and improvements 93
7 BIBLIOGRAPHY 95
APPENDIX A RESULTS FOR PLASTICITY MODEL 98
A.1 Load duration 98
A.2 Concrete thickness 99
A.3 Peak pressure 100
A.4 Tensile strength 101
A.5 Number of elements 103
A.6 Damping ratio 105
APPENDIX B RESULTS FOR DAMAGE MODEL 108
B.1 Load duration 108
B.2 Concrete thickness 109
B.3 Peak pressure 110
B.4 Tensile strength 111
B.5 Number of elements 112
B.6 Damping ratio 114
APPENDIX C RESULTS FOR DAMAGE-PLASTICITY MODEL 116

-- 11 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	VI
C.1 Load duration 116
C.2 Concrete thickness 117
C.3 Peak pressure 118
C.4 Tensile strength 119
C.5 Number of elements 120
C.6 Damping ratio 122
APPENDIX D MATLAB CODE 124

-- 12 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 VII
Preface
This Master’s thesis was carried out between January 2016 and June 2016 at the
Department of Civil and Environmental Engineering, Division of Structural
Engineering, at Chalmers University of Technology. The research within this thesis is
mainly based on earlier work at Chalmers by PhD student Jonas Ekström and Adjunct
Professor Morgan Johansson at ÅF Infrastructure. It can also be considered to be a
continuation of parts of Ekström’s licentiate thesis.
Firstly, we would like to thank our supervisor and examiner Morgan Johansson for
invaluable weekly guidance and assistance. We would also like to thank and express
our gratitude to Mattias Carlsson at ÅF Infrastructure in Göteborg as well as Jonas
Ekström for valuable input throughout the entire project.
Further, we would also like to thank our opponents, Anton Lindqvist and Henrik
Nilsson, for valuable input during the entire process.
Lastly, we would like to thank ÅF Infrastructure in Göteborg, and their employees,
for giving us the chance to take part in this field of research.
Gothenburg, June 2016
Erik Flinck and Martin Olsson

-- 13 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	VIII
Notations
Roman upper case letters
A	
Area
C	
Damping
d	C	
Cratering depth
E	
Young's modulus
dyn	E	
Dynamic Young’s modulus
qs	E	
Quasi-static Young's modulus
F	
Load
dyn	F	
Dynamic load capacity
sta	F	
Static load capacity
f	G	
Fracture energy
dyn	f	G ,	
Dynamic fracture energy
qs	f	G ,	
Quasi-static fracture energy
K	
Stiffness matrix
L	
Concrete thickness, specimen length
M	
Mass matrix
N	
Number of elements
peak	P	
Peak pressure

r	P	
Reflected overpressure
s	P	
Incoming overpressure
d	S	
Spalling depth
p	U	
Particle velocity
W	
Equivalent amount of TNT
Roman lower case letters
c	
Pressure wave velocity
cube	cc	f ,	
Characteristic compressive cube strength of concrete
ct	f	
Characteristic tensile strength of concrete
dyn	f	
Dynamic tensile strength of concrete
tf	
Tensile strength of concrete
qs	tf ,	
Quasi-static tensile strength of concrete
 	w	f	
Crack softening function
h	
Time interval
i	
Impulse intensity

i	
Positive phase of impulse density

-- 14 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 IX
r	
Distance from explosion source
K	r	
Spalling reduction factor
t	
Time, structural element thickness
0	t	
Initial time
dur	t	
Load duration
u	
Displacement
u	
Velocity
u	
Acceleration
q	
Internal force
v	
Velocity
w	
Crack opening
u	w	
Ultimate crack opening
x	
Coordinate
Greek upper case letters
L		
Elongation
		
Change in stress
x		
Equalization distance of pressure wave
	
Reflexion coefficient
Greek lower case letters

	
Damage parameter
	
Strain
	
Strain rate
inel	
	
Inelastic strain
tot	
	
Total strain
u	
	
Ultimate strain
	
Poisson's ratio
	
Damping ratio
	
Density
	
Stress
	
Spalling parameter
max	
	
Highest response frequency

-- 15 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	X

-- 16 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 1
1 Introduction
1.1 Background
Over the past 20 years, the Division of Structural Engineering at Chalmers has been
conducting research within structures exposed to explosions. The application of this
research focuses on civil structures with increased demands to withstand explosions in
the urban environment. Spalling, where material breaks lose at the opposite side from
the loaded one, is an important phenomenon that a structure has to withstand with
regard to nearby explosions. One way of evaluating the structural response of
structures subjected to shock wave blast from explosions was presented by McVay
(1988). There, it is suggested that spalling in concrete occurs when a compression
wave with negative time-pressure gradient reflects on the free side of the wall and
causes tensile stresses equal to tensile strength of the material.
This model of how to evaluate spalling in concrete was recently further developed in a
Licentiate thesis by PhD student Jonas Ekström at Chalmers. Ekström (2016) suggests
that the conventional way of evaluating spalling can be inaccurate since it does not
consider material ductility. Ekströms hypothesis states that the effect of material
ductility is that spalling cracks do not occur instantaneously when tensile strength is
reached, as conventionally assumed. Another important discovery presented by
Ekström is that the spalling cracks do not necessarily appear at the same position as
for fully brittle materials. Further development within this field is therefore necessary
for a better understanding of the spalling phenomenon.
1.2 Aim
The aim of this master’s thesis is to improve the understanding of the underlying
physics of the phenomenon spalling in concrete due to a nearby explosion. Further, a
related aim is to support a current PhD research project at Chalmers, which recently
presented a hypothesis on how to evaluate this phenomenon. The support consists of a
further development and study of a numerical routine developed in Ekström (2016),
for which the aim is to determine whether the preliminary results presented by
Ekström are repeated and reliable.
An additional aim is to provide the reader with overall knowledge regarding how
spalling due to blast loading can be evaluated and tested experimentally, as well as
how it can be estimated empirically.
1.3 Methodology
To provide sufficient understanding of spalling in concrete, a literature study is
carried out. This literature study extends further to provide understanding in
experimentally and empirically methods on how to evaluate spalling in concrete. This
part of the thesis is mainly based on literature by McVay (1988), Ekström (2016) and
Johansson (2013). Additional literature is gathered elsewhere when required.
In order to support the current research project with additional studies on the
numerical Matlab routine developed by Ekström, a parametric study is carried out in
order to determine whether the preliminary results are repeated. This parametric study
consists of variations in geometry, load properties and material properties.

-- 17 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	2
In addition to the parametric study, a detailed description of how the model operates
and evaluates spalling is included. Further development of the model is also presented
by including non-linearity in both crack softening and pressure-time gradient. This is
mentioned in Ekström’s licentiate thesis as an important part of further studies.
1.4 Limitations
Throughout the numerical analysis in this thesis, blast loading is considered to have a
plane pressure distribution from the source. This can only be considered as true if the
point of observation is sufficiently far away from the explosion. If a non-plane
pressure distribution is to be implemented, a two or three dimensional model is
required instead of a one dimensional.
The numerical routine is limited in such way that no consideration is taken to strain
rate effects due to the complexity of accurately determine the material properties at
strain rates corresponding to blast loading. The exclusion of strain rate makes it
difficult to compare the results from the numerical analysis with results from
experiments. For this reason, such a comparison is neglected in this thesis. This
limitation is important to mention, since research in general is preferable if it is
possible to compare the results with experiments.
The parametric study is limited in such way that only one parameter at a time is
varied. One may reason that a parametric study should include multiple parameter
variations. This is, however, beyond the scope of this thesis.
1.5 Outline of the report
Chapter 2 is a theory chapter based on a literature study. The purpose of this chapter
is to provide the reader with sufficient understanding of the spalling phenomenon.
Summarily, this chapter covers understanding in loads from by explosions, material
overview and fracture due to blast loading.
Chapter 3 contains examples of how to evaluate spalling experimentally. This is a
continuation of the literature study in Chapter 2.
Chapter 4 includes the numerical analysis. This chapter contains an overview of the
numerical model developed by Ekström as well as the results from the parametric
study. Further development of the numerical model with corresponding results are
also presented. Lastly, it includes a method on how to adjust for inconsistency,
obtained in the fracture zone.
Chapter 5 includes a discussion of the most important observations and results. In
addition to this chapter, discussions are also included in Chapter 4 along with the
presented results.
Chapter 6 includes and summarizes the most important conclusions from the entire
thesis. This chapter contains suggestions on further studies and developments of the
presented results.

-- 18 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 3
2 Theory
2.1 Loads caused by explosions
Loads on structures can roughly be separated in three categories: static, quasi static
and dynamic loading, Ekström (2016). What differentiates these different types of
loads is the duration of how long they act on the structure. A dynamic load is either
applied repeatedly on the structure or applied on the structure faster in relation to a
static load, while the quasi static is applied slower on the structure. This load duration
will influence both the global and local response of the structure, which will yield in
different design approaches for the different load types. An explosion is a dynamic
load with very short load duration, and the blast wave generated by the explosion can
have load durations in the range of milli- and microseconds, Gebekken et al. (2001).
2.1.1 Shock wave in air
An explosion in air gives rise to a sudden release of energy to the surroundings. This
release of energy is due to a volumetric expansion of the matter which causes an
overpressure that forces the surrounding air volume away. This overpressure can be
described as a shock wave, which propagates away from the source with supersonic
speed. The blast wave front is followed by a region where pressure, temperature,
density and the speed of the air particles are much higher than the air ahead of the
blast wave front. The blast wave front propagates spherically from the epicentre of the
explosion, see Figure 2.1, and decreases successively in intensity with increasing
distance from the source, Johansson and Laine (2012a).
Figure 2.1 Illustration of shock wave propagation, based on Johansson and Laine
(2012a).
There are several important parameters used to describe the propagation of a shock
wave. Terms such as pressure, impulse intensity and duration are important when
describing how an explosion expands from the source, Johansson and Laine (2012a).
To illustrate this, consider the example given in Figure 2.2 with an explosion and a
reference point A at a distance r.
Blast wave
front
r
Ppeak
1 atm
r
Pressure

-- 19 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	4
Figure 2.2 Example of explosion.
Almost instantaneously after detonation the pressure rises from atmospheric to a peak
pressure, Johansson and Laine (2012a). There is however a certain arrival time for the
shock wave to reach point A. The peak pressure at point A then decreases
exponentially with time to atmospheric pressure, after which a negative pressure acts
in point A. Figure 2.3 shows the principle pressure-time relation for point A.
Figure 2.3 Principle pressure time relation for a shock wave. Based on Johansson
and Laine (2012a).
In a structural analysis the pressure-time relation, shown in Figure 2.3 is often
simplified to a linear decrease where the negative pressure is ignored, Johansson and
Laine (2012a). The pressure-time relation for the example in Figure 2.2 could
therefore be described as shown in Figure 2.4.
Blast wave
front
A
r
Arrival time
(+)
(-)
Overpressure
Underpressure
Duration
overpressure
Duration
underpressure
Peak
pressure,
Ppeak
Pressure, P
Time, t

-- 20 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 5
Figure 2.4 Simplified pressure-time relation.
By combining the pressure and the time duration, one can define the impulse intensity
as the area under the pressure-time graph, i.e.
	
t
t
dt	t	P	i
0
)	(	
(2.1)
The impulse intensity i together with the peak pressure Ppeak and duration time tdur are
important factors when describing propagation of a shock wave, Johansson and Laine
(2012a). Figure 2.5 shows two examples of simplified pressure-time relations with the
same peak pressure, but different impulse intensity.
Figure 2.5 Illustration and definition of impulse intensity as the area under the
pressure-time relation. Comparison of two cases with same Ppeak but
different load duration.
2.1.2 Reflexion of shock wave
The propagation of a shock wave in urban environments does not only dependend on
the magnitude of the explosion and the distance to the observation point. There are
Peak
pressure,
Ppeak
Duration
overpressure, tdur
Time, t
(+)
Overpressure
Pressure, P
i+,1
Impulse intensity
i+,2
Impulse intensity
P 	P
t 	t
tdur,1 	tdur,2
Ppeak	Ppeak

-- 21 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	6
also phenomena such as confinement, diffraction and reflexion, Johansson and Laine
(2012b). This thesis will briefly treat the latter.
Reflexion occurs when a shock wave hits a denser medium. At this point, the
characteristics of the shock wave can change drastically, Johansson and Laine
(2012a). Therefore, it is important to understand the principle of reflexion, i.e. how an
incoming shock wave becomes a reflected shock wave. Figure 2.6 shows the principle
of this, where Ps+ denotes the incoming overpressure and Pr+ the reflected
overpressure.
Figure 2.6 Illustration of a) incoming overpressure b) reflected overpressure,
based on Johansson and Laine (2012a).
The relation between the reflected overpressure and the incoming overpressure can be
established using a reflexion coefficient Λ, Johansson and Laine (2012a). Hence, the
reflected overpressure is determined as the incoming overpressure multiplied with the
reflexion coefficient. The value of the reflexion coefficient varies dependent on the
incoming overpressure, which is illustrated in Figure 2.7.
Figure 2.7 Relation between reflection coefficient and the incoming overpressure,
based on Johansson and Laine (2012).
The reason why the concept of reflexion is important when studying blast loaded
structures is that the applied overpressure to the structure is not the incoming
overpressure, but rather the reflected overpressure.
2.1.3 Influence of pressure profile due to distance
The magnitude of the peak pressure is not the only important factor when discussing
the distance between the explosion and observation point. Another factor is the shape
of the shock wave at different distances. To illustrate this, consider the scenario in
Figure 2.8 where a principle shock wave profiles and resulting pressures are
illustrated in a reference area at different distances from the explosion.
Incoming pressure Ps+
Reflected pressure Pr+
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
0 2000 4000 6000 8000 10000
Reflection coefficient,
 Λ
Incoming pressure, Ps+ [kPa]
Variation of Λ

-- 22 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 7
Figure 2.8 Illustration of different shock wave profiles at different distances:
a) shock wave profile at close range, b) shock wave profile at longer
range and c) simplification of case b).
The conclusion of Figure 2.8 is that the shock wave flattens out with increased
distance from the epicentre of the explosion. The pressure profile illustrated in Figure
2.8c is therefore a simplification since the shock wave can never be considered to be
completely flat. However, the important conclusion is that one may consider the
pressure profile to be flat unless the explosion occurs in absolute proximity to the
structural element. Thus, in further sections there will be a distinction between two
different load cases: nearby explosion and contact detonation, which are illustrated in
Figure 2.9.
Figure 2.9 Distinction between nearby explosion and contact detonation.
2.1.4 TNT as a measurement of released energy
Because the unit of energy released is defined as work, the SI-unit for energy release
is Joule. For practical reasons though, a different unit for quantifying the energy
released by an explosion is commonly used. “Weight of TNT” describes the
approximate amount of energy released in a detonation of 1000 kg TNT. The effect
obtained by a detonation of 1 kg TNT is equivalent to an energy amount of 4.6 MJ,
ra
rb
a) b)
a) b)
Pressure profile
Ppeak,a Ppeak,b Ppeak,b
c)
Nearby
explosion
Contact
detonation
r L

-- 23 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	8
Johansson and Laine (2012a).To give a picture of the amount of TNT that can be
confined in different containers and the distance at which these containers can cause
minor damage on structures, see Table 2.1Table 2.1Table 2.1 Quantities of
different containers with TNT. Based on NCTC (2014).
Explosive source Amount of TNT
[kg]
Minor damage on
buildings [m]
Pipe Bomb 2.3 21
Briefcase bomb 23 46
Sedan 227 98
Small truck 4 545 263
Trailer truck 27 273 475
2.2 Structures subjected to blast wave
2.2.1 Overview
The structural response of blast loaded structures is important to understand in order
to evaluate fracture phenomena related to this type of loading. The blast wave
generated from an explosion will transfer from the air to the structure and create
stresses in the material, Leppänen (2012). This can further be described by studying
wave propagation in matter.
2.2.2 Wave propagation in matter
Leppänen (2012) describes how to consider wave propagation in matter using an
example of a loaded bar, see Figure 2.10. By using a bar and a fixed wall it can be
illustrated how waves propagate by studying the state of the bar at different steps in
time. The bar is subjected to a shock wave at time t0, which is achieved by giving the
bar an initial velocity v0 and allowing it to collide into the fixed rigid wall. Leppänen
then illustrate the state of the bar for different times t > t0, which shows how the bar is
subjected to alternating tension/compression. The state of the bar is determined by
looking at wave propagation, stress and velocity at seven different time-steps, which
is illustrated in Figure 2.10.

-- 24 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 9
Figure 2.10 Wave propagation, stresses and velocity of the bar. Based on Leppänen
(2012).
t < t0:
The bar is initially given a velocity v0. At this time, before collision with the wall,
there are no stresses and no wave propagation in the bar.
t = t0:
State of the bar at collision with the wall. The right side of the bar will stop since the
wall is considered to be fixed and fully rigid. This will create a change in velocity for
the right most point in the bar causing a compression wave to start propagate to the
left with speed cA. This wave, though, is still at the right most point of the bar
meaning that the bar can still be considered stress free.
t0 < t < t1:
The compression wave continues to propagate to the left in the bar. At this state,
compression stresses will appear to the right of the wave front, while the left side of
the wave front still is “unknown” of the impact with the wall. This means that this
side of the bar will continue with initial velocity v0 towards the wall.
t1 < t < t2:
At the left side of the bar, the compression wave reflects and becomes a tension wave
of equal magnitude, propagating towards the right side of the bar, which will create
tensile stresses behind the wave front. This will also result in change of velocity v0 for
the part of the bar behind the wave front.
t = t2:
The tension wave reaches the right side of the bar. The tension wave has caused
tensile stresses in the entire bar. However, this tensile stress will cancel out the
compression stress resulting in a stress free bar. The entire bar is also given initial
velocity v0, but now in the opposite direction.

-- 25 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	10
t > t2:
The stress free bar moves with velocity v0 in opposite direction from t < t0.
What Figure 2.10 is meant to demonstrate is that when a body is subjected to a shock
wave, the state of stress and velocity within the body alternates due to shock wave
propagation.
2.2.3 Particle velocity
As the shock wave velocity c describes how fast the shock wave front travels through
a medium, the particle velocity Up describes the compression and separation on a
material level, Leppänen (2012). The concept of particle velocity is briefly treated in
Figure 2.10, and will be further described in this section.
The concept of particle velocity is described using shock wave propagation seen in
Figure 2.11, where two arbitrary materials A and B are studied, Leppänen (2012). The
given shock wave cA in material A, see Figure 2.11a, will generate a particle velocity
Up,I in the material that propagates in the same direction as the shock wave. Further,
as the shock wave reaches the interface between A and B, both a reflected and
transmitted shock wave is generated. Figure 2.11c illustrates the reflected and
transmitted particle velocity, the magnitude of which depends on the material
properties for material A and B.
Figure 2.11 Schematic illustration of particle velocity, Leppänen (2012).
Leppänen (2012) further derives the magnitude of the stress, based on that the impulse
is equal to the change in momentum, such as
p	U	c 		

		
(2.2)
where ρ is the density, c is the shock wave velocity and Up is the particle velocity.
Further, continuity conditions at the interface between material A and B yields that
A-B interface
a)
b)
c)
A B
A B
A B
Up,I cA
cA
σI
σR
σT cB
cA
Up,I
Up,R
Up,T cB
dx

-- 26 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 11
T	R	I	

	
	 		
(2.3)
pT	pR	pI U	U	U 		
(2.4)
The incoming, reflected and transmitted particle velocities can be described using
equation (2.2). By expressing the particle velocities based on equation (2.2) and insert
them in equation (2.4), Leppänen derives expressions for how the reflected and
transmitted particle velocities depends on the incoming particle velocity such as
b	b	a	a
a	a
pI
pT
c	c
c
U
U

	


 2
(2.5)
b	b	a	a
b	b	a	a
pI
pR
c	c
c	c
U
U

	

	


	
(2.6)
In the special case where the impedance ρBcB is zero, i.e. the interface between A and
B can be considered to be a free edge, the relation between transmitted and reflected
particle velocity becomes
2	
pI
pT
U
U
(2.7)
1	
pI
pR
U
U
(2.8)
In spalling evaluation the case with a free edge is considered, why the underlying
theory presented in this chapter is of importance when describing stress distribution
and particle velocities in blast loaded structures.
2.2.4 Stress-distribution in blast loaded structures
The purpose of Figure 2.10 is to illustrate a general approach for how to consider
wave propagation in an arbitrary material. This thesis, however, focuses more on
wave propagation in structural elements caused by explosions. So instead of using a
general approach of wave propagation as in Figure 2.10, this section will more in
detail describe the response when subjecting a structural element to an explosion. To
illustrate this, the example in Figure 2.12 is used, where a structural element with
thickness t is placed at a distance r from a nearby explosion

-- 27 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	12
Figure 2.12 Model used to illustrate stress distribution in blast loaded structural
elements.
At the edge of the structural element, in point A, the pressure caused by the nearby
explosion will have a pressure-time relation as discussed in Section 2.1.1. This
principle pressure-time relation is illustrated in Figure 2.13. The actual peak pressure
acting on the edge of the structure, point A, is in analogy with Section 2.1.2 dependent
on the actual reflected overpressure rather than the incoming. A flat pressure profile is
assumed since the explosion is not considered to be placed in absolute proximity to
the element, and a linear pressure-time relation is assumed.
Figure 2.13 Pressure-time relation at the edge of a structural element.
The shock wave from the overpressure at the edge of the structure will cause a shock
wave to propagate within the structural element, Johansson (2013a). This shock wave
will propagate with a velocity c determined by equation (2.9). For concrete, the
velocity is approximately 3500 m/s.

E
c 	
(2.9)
The blast load that impacts the structural element can be distinguished between short
load duration and long load duration. Short load duration is here defined as a load
with shorter extension than twice the thickness of the structural member. Long load
duration is, consequently, defined as a load with greater extension than twice the
thickness of the structural member. This is illustrated in Figure 2.14.
Blast wave
from explosion
A
r L
Ppeak
tdur
t
P
i+
L
A

-- 28 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 13
Figure 2.14 Illustration of a) short duration load and b) long duration load.
The main difference between short and long load duration is how the stresses develop
and distribute within the structural element. Figure 2.15 shows principle shock wave
propagation for short load duration in an arbitrary structural element for three
different steps in time. The principle of shock wave propagation in a structural
element is summarized in Figure 2.15.
Figure 2.15 Shock wave propagation and stress distribution in blast loaded
structures. Short load duration.
a) The shock wave is transferred from the air into the structure and propagates
with speed c towards the free edge in the structure.
b) Upon reaching the free edge the compressive shock wave reflects and
propagates as a tension wave in opposite direction. If air is considered to be a
material with infinitesimal impedance, the entire magnitude of the peak
pressure will be reflected, see equation (2.6). Due to the gradient of the shock
wave, a net tensile stress is found over the region where the compressive wave
and the tension wave interact.
c) When the entire compressive shock wave has reflected, a tension wave
propagates towards the other free edge in the structure.
The principle of how the compressive shock wave propagates and reflects at the free
edge is the same for a longer load duration, which is illustrated in Figure 2.16.
Important here, though, is to compare the resulting stress wave after reflection, see
a) Short load duration
b) Short load duration
L L
Structural element
c	c
c
c
Resulting
tension
L 	L 	L
a) 	b) 	c)

-- 29 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	14
Figure 2.15b and Figure 2.16b. Hence, the magnitude of the net tensile stress after
reflection will decrease as the load duration increases if the same peak stress is
assumed.
Figure 2.16 Shock wave propagation and stress distribution in blast loaded
structures. Long load duration.
Furthermore, the changed state of stress seen in Figure 2.16b will cause a change in
particle velocity. Since the change in stress ∆σ is constant after reflection, as seen in
Figure 2.17a, the particle velocity after reflection will be constant in the zone where
the compression and tension waves interact. However, the magnitude of the particle
velocity Up2 in Figure 2.17b is dependent on both the magnitude of the peak pressure
and the gradient of the pressure-time relation.
Figure 2.17 a) stress distribution and b) particle velocity in blast loaded structures.
The illustration of stress distribution and particle velocity in this section is presented
without consideration to material response. To further develop the response of the
structure, the material response needs to be incorporated.
2.3 Material
2.3.1 Overview
The response of a structure is highly dependent on the response of its material. The
properties of concrete are very dependent on the stress state and characterized by the
uniaxial stress-strain relation shown in Figure 2.18. Normal concrete shows a
significant difference between tensile and compressive strength, where the tensile
strength can be less than a tenth of the compressive strength, Leppänen (2004).
c 	c 	c
c	c
Resulting
tension
L 	L 	L
a) 	b) 	c)
c
c
L
a)
L
b)
Up,1
Up,2
∆σ

-- 30 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 15
Figure 2.18 Typical stress-strain relationship of concrete under uniaxial loading,
based on Leppänen (2004).
2.3.2 Fracture mechanics
Before the peak stress is reached in a specimen loaded in tension, micro-cracks start
to form in local weak points in the material, see point A in Figure 2.19. Up to this
point concrete shows a linear behaviour. As the load increases, the micro-cracks begin
to connect and deformations localize in weak sections. This plastic response continues
until the maximum load is reached, see point B (σ = ft ), after which the deformations
increase with decreasing stress within the fraction zone, see point C, Plos (1996).
Figure 2.19 Force-elongation graph for tensile test of concrete specimen.
A measured stress-displacement relation for a concrete specimen can be recalculated
to a stress-strain relation by dividing the elongation with the specimen length.
However, it is not possible to directly translate the load-displacement relation to a
stress-strain relation when there is a localization of the deformations due to cracking,
since different specimen lengths would give different stress-strain relations,
Plos (1996). To solve this, the material properties needs to be divided into an elastic
stress-strain relation for the material behaviour that occur outside the fracture zone,
and a stress-crack opening relation representing the additional deformations that occur
within the fracture zone, see Figure 2.20. The stresses transferred within the fracture
zone now depends on the crack opening w, and the stress is defined as σ = f(w), where
f(w) describes the softening behaviour of the concrete.
ft
fc
σ
ε
F
∆L
A B
C

-- 31 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	16
Figure 2.20 Stress-displacement relation divided into a general stress-strain
relation and a stress-displacement relation representing additional
localized deformations, Plos (1996).
The most characteristic parameter in fracture mechanics is the fracture energy, Gf,
Plos (1996). This is the energy dissipated by fracture per unit area of the crack plane,
Bažant (2002) and can be represented by the area under the stress-crack opening
curve in the post-peak behaviour of the concrete, see Figure 2.21.
Figure 2.21 Illustration of fracture energy in the stress-crack opening relation.
2.3.3 Constitutive models for concrete in tension
When analysing the behaviour of a structure subjected to dynamic loading, the post-
peak behaviour in tension is of great importance. If concrete is statically loaded in
tension the stress will decrease with increasing deformation after the peak stress is
reached. This tension softening develops more or less exponentially, but can
according to Gylltoft (1983) be simplified as a bi-linear or linear relation. A linear
tension softening for plain concrete subjected to monotonically increasing load in
tension is shown in Figure 2.22. However, since the studied phenomenon in this thesis
occurs under non-monotonic loads described in Section 2.2.4, the unloading of the
structure becomes of significance.
Unloading response
at maximum stress
ft
σ σ σ
σ = f(w)
∆L ε
ε
wu w
w	w
ε∙L
σ
Fracture energy, Gf
w
ft
wu

-- 32 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 17
Figure 2.22 Linear strain softening of monotonically loaded concrete.
In Reinhardt (1984), several test of concrete subjected to non-monotonic tension was
studied and numerical expressions for the post-peak behaviour and unloading and
reloading were derived. Concrete specimens were subjected to cyclic tension with
different lower stress values, see Figure 2.23. In Figure 2.23a, the lower stress is
considered to be 5% of the tensile strength and in the second test it is considered to be
equal to the tensile strength but in compression. Furthermore, a present model to
approximate the loading and unloading behaviour is plotted in the same figure. In the
present model the damage is considered in equation (2.10) as the damage parameter
δ+ that varies from 0 (material without deterioration) and 1 (completely damaged
material), Sima et al (2008), changing the effective elastic modulus E.
0
)	1	( E	E 			
		
(2.10)
Figure 2.23 a) Cyclic tension test and b) cyclic tension test with high incursions in
compression, Sima et al. (2008).
When simplifying to a linear strain softening, three constitutive laws will mainly be
considered in this thesis; a plasticity model, a damage model and a combined damage-
plasticity model. The main differences between the models are that the unloading
response in the plasticity model is based on the original stiffness, while in the damage
and damage-plasticity model, the stiffness will be reduced, illustrated in Figure 2.24.
σ
ε
ft
εu

-- 33 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	18
Figure 2.24 Stress-strain relation for non-monotonic loading of concrete for
a) plasticity model, b) damage model and c) damage-plasticity model.
2.3.4 Strain rate
2.3.4.1 Overview
Strain rate can be defined as how fast an imposed strain develops within a material.
This measurement is a material specific parameter that can distinguish between long
and short time intervals for the specific material. Johansson (2000) illustrates a
generalized range of different strain rates and the corresponding load application, see
Figure 2.25. This thesis focuses mainly on hard impact and blast loading, which will
correspond to strain rates in the range of 100-103 [s-1]. These strain rates can be
compared with 10-5 [s-1], which corresponds to static loading. Thus, the strain rate for
blast loading can be 108 times greater, which may be important to consider for blast
loaded structures.
10-8 10-7 10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
creep static earthquake hard impact blast
strain rate [s-1]
Figure 2.25 Approximate strain rates for different load cases, Johansson (2000).
Concrete is a material that is strain rate dependent, giving changes in material
properties for different strain rates, Johansson (2000). To illustrate this change in
mechanical properties at high strain rates, it is common to use the concept of a
dynamic increase factor (DIF). This factor describes the relation between the dynamic
strength and the static strength of the material, see equation (2.11) and is determined
experimentally.
sta
dyn
F
F
DIF 	
(2.11)
Further, Figure 2.26 show test results of how the concrete compressive and tensile
strength are influenced at different strain rates.
σ σ σ
ε ε ε
a) b) c)

-- 34 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 19
Figure 2.26 Relative increase in concrete strength for a) compressive strength and
b) tensile strength at different strain rates. Based on Bischoff and
Perry (1991), and Malvar and Ross (1998).
For strain rates corresponding to blast loading, the dynamic increase factor is different
whether the compressive or tensile strength is considered, Johansson (2000).
Figure 2.26a shows that the compressive strength can be increased up to two times
when considering strain rate effects, while the corresponding factor for tensile
strength is approximately 6-7 according to Figure 2.26b.
Bischoff and Perry (1991) suggest that the large scatter in dynamic increase factor
indicates the difficulties related to high strain rate effects. High dynamic testing is in
general much more complicated to carry out compared to corresponding static tests.
However, the large scatter in dynamic increase factor is considered to be partially
explained by parameters such as concrete strength, specimen dimension, moisture
content and test method. This is why test results in Figure 2.26 are not necessarily
comparable fully with each other, since the stated parameters can vary between the
different tests.
2.3.4.2 Strain rate influence on concrete strength found in literature
In order to make Figure 2.26 applicable in reality, several researchers have proposed
expressions that more accurately relate strain rate to concrete strength,
Johansson (2000). For compressive strength, expressions have been established by
Seabold (1970), Dilger et al. (1984), Soroushian et al. (1986) and the CEB-FIP Model
Code, CEB (1993) and are illustrated in Figure 2.27a. For tensile strength, CEB
(1993), Ross et al. (1996) and Malvar and Ross (1998) have proposed expressions in
accordance with Figure 2.27b.
0
1
2
3
4
5
6
7
8
10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain rate [s-1]
Dynamic increase factor
Cowell 63 MPa 	Cowell 38 MPa
Cowell 32 MPa 	Hatano 23 MPa
Takeda/Tachikawa 	Mellinger/Birkimer
Birkimer 47 MPa 	McVay 35 MPa
Ross split tension 	Ross direct tension
Ross mixes E-J 	Kormeling et al.
John et al. 53 MPa 	Antoun 57 MPa

-- 35 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	20
Figure 2.27 Concrete strength related to strain rate found in literature,
a) compressive strength and b) tensile strength. Johansson (2000).
What can be concluded from Figure 2.27 is that the different expressions vary
noticeable between the different researchers. However, these relations are not
necessarily comparable to each other since in some cases they depend on different
properties. For example, Soroushian et al. (1986) distinguish between dry and wet
concrete which gives different dynamic increase factor, see Figure 2.27a.
Furthermore, the influence of concrete compressive strength is also included in
several expressions, such as Ross et al. (1996) who even included fracture toughness,
see Figure 2.27b.
According to Johansson (2000), the most accepted relation between strain rate and
dynamic increase factor for concrete in tension is the one presented by Malvar and
Ross (1998). For this relation, the DIF is related to the compressive strength of the
concrete, see Figure 2.27b.
2.3.4.3 Possible explanations for increased strength
Even though the different expressions for the dynamic increase factor vary
considerably between different researchers, seen in Figure 2.26 and Figure 2.27, they
all conclude that the concrete strength increases with increasing strain rate. For both
compressive and tensile loading, a transition zone can be identified where the strain
rate dependency changes drastically, Magnusson (2007). This change is due to a
change in mechanism causing strain rate effects on the concrete strength, Johansson
(2000). For strain rates lower than the transition zone, Johansson suggests that the
DIF depends on viscous effects. However, for strain rates higher than the transition
zone the DIF is dominated by structural effects. This is schematically illustrated in
Figure 2.28.
0
1
2
3
4
10-5 10-4 10-3 10-2 10-1 	100 	101 	102 	103
Strain rate [s-1]
Fdyn / Fsta
CEB, fc = 30 MPa
CEB, fc = 60 MPa
Soroushian et al., dry
Soroushian et al., wet
Dilger et al.
Seabold
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

-- 36 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 21
10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain rate [s-1]
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
Figure 2.28 Illustration of transition zone where the strain rate effects are
dominated by either viscous effects or structural effects. From
Johansson (2000).
What can be concluded by Figure 2.28 is that the strength enhancement due to viscous
effects is relatively small compared to the structural effects, Johansson (2000).
Viscous effects relate to free water in the micro-pores of the concrete. Magnusson
(2007) describes that the free water, in a specimen loaded in compression, will build
up an internal pressure which can help to resist the compressive load. Furthermore,
Magnusson suggests that the increase in tensile strength can be considered to act in a
similar way as a thin film of water trapped between two plates moving apart, which
will create resisting forces.
At higher strain rates the mechanism of strength enhancement changes from viscous
effects to structural effects. These structural effects relate mostly to inertia effects,
such as inertia forces and lateral inertia confinement, Johansson (2000). These effects
will be studied more in detail in Section 2.4.5.
2.4 Fracture due to blast loading
2.4.1 Overview
The two different fracture phenomena evaluated in this section are cratering and
spalling. Cratering is a form of damage that occurs on the same side of the structure as
the explosion and is a result of the high pressure crushing the concrete. Spalling in
concrete is defined as an ejection of material fragments at the opposite side from
which the structure was loaded, see Figure 2.29. If the loading is highly intense, spall
fragments can eject with a velocity high enough to damage persons and equipment,
McVay (1988). Since material is removed from the structural element when spalling
and cratering occurs, the structure is weakened and can lead to a local or even global
collapse, Johansson (2013a). Breaching is another phenomenon that occurs when the
blast load is of such magnitude that the cratering and spalling depths reach each other.

-- 37 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	22
Figure 2.29 Illustration of cratering and spalling in a structure subjected to a
contact detonation.
In accordance with Figure 2.15 in Section 2.2.4, the reason why spalling occurs is due
to the appearance of tensile stresses in the structure when the compressive shock wave
reflects at the free edge, Johansson (2013a). However, there is one conventional way
of evaluating spalling and one recently developed hypothesis by PhD student Jonas
Ekström at Chalmers University of Technology. These will both be described in
Section 2.4.2 and 2.4.3. The assumption in both these sections is that the shock wave
from a nearby explosion is considered to have a flat profile and a linear pressure-time
relation, in accordance with Figure 2.13.
2.4.2 Conventional spalling evaluation
The conventional way of evaluating spalling in concrete, considered by several
researchers such as McVay (1988), is to assume that spalling occurs when the tensile
stress at the rear side of the structure reaches the tensile strength. This can also be
referred to as fully brittle spalling. The illustration in Figure 2.30 is based on a linear
pressure-time decrease with long load duration. When the resulting tensile stress from
the reflected shock wave reaches the tensile strength of the concrete, a crack will fully
develop and eject a portion of the structural element with velocity v1, as illustrated in
Figure 2.30b.
Figure 2.30 Illustration of conventional spalling evaluation.
The remaining shock wave after the first ejection, see Figure 2.30b, will reflect once
again on the developed free edge and can cause further spalling in accordance with
Crack
development
= ft
Remaining
shockwave
d1
v1
i1
a) 	b)
Crack
development
= ft
d1
– S 	d1
v1
i1
d2
v2
i2
Remaining
shockwave

-- 38 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 23
Figure 2.31a. The new crack will eject another portion of the element with velocity v2,
see Figure 2.31b.
Figure 2.31 Illustration how the remaining shock wave generates further spalling.
The remaining shock wave will once again reflect on the developed free edge, which
is the ongoing principle until the shock wave no longer has high enough intensity to
cause spalling, McVay (1988).
This process could also be illustrated using the pressure-time relation of the blast
loaded structure, see Figure 2.32. The velocities v1 and v2 are generated by impulses i1
and i2 respectively and can be regarded as that the impulse is “trapped” between the
developed crack and the free edge, Johansson (2013). Due to the linearity of the
pressure-time relation, the time duration of both impulses tdur will be the same. Thus,
the first impulse i1 will be greater than i2 which consequently results in v1 > v2.
Figure 2.32 Schematic view of the spalling process a) impulse given to firstly
ejected portion and b) impulse given to secondly ejected portion, based
on Johansson (2013).
McVay (1988) have derived several expressions for how the spalling depth depends
on the shape of the pressure-time relation. For linearly decreasing shape, the spall
depth is determined as
Peak
t	dur
i	d P
f	t	c
S 
	
 2
,	
(2.12)
= ft
d1
d1
v1
i1
a) 	b)
Crack
development
= ft
d1
d1 – Sd2 d1
v1
i1
d2
v2
i2
Remaining
shockwave
Ppeak
tdur
t
P
i1
∆t1
Ppeak
tdur
P
i2
∆t2

-- 39 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	24
where c is the velocity of the shock wave in accordance with equation (2.9), tdur is the
duration of the impulse, ft is the tensile strength of the concrete and Ppeak is the peak
pressure. Based on equation (2.12) it is clear that the spall depth Sd1 and Sd2 from
Figure 2.31 will be the same. However, this is only true when the pressure-time
relation decreases linearly.
To conclude this section, it is clear that the spalling process is highly dependent on
several parameters. Both the thickness of the studied element and the properties of the
pressure-time relation will decide how the spalling process develops.
2.4.3 Hypothesis on spalling
The principle described in Section 2.4.2 assumes that a fully developed spalling crack
appears instantaneously as the tensile stress reach the tensile capacity. However, as
described in Section 2.3.2, a fully developed crack is not reached until the fracture
energy has dissipated. This is the reason why Ekström (2016) claims that the
conventional method for evaluating spalling is inaccurate. Ekström reason that the
most obvious limitation of the fully brittle crack spalling approach is that the strain
softening of concrete in tension becomes irrelevant since the structure will eject
material as soon as the tensile strength is reached. This means that the strain reaches
infinity within a stress-time singularity.
If the strain where to reach infinity within a time singularity, the applied energy in the
cracking plane must be infinite. However, the energy within a pressure wave is finite,
which means that the spalling process is unlikely to proceed in accordance with
Section 2.4.2. This is why Ekström reason that a crack can only be initiated, and not
fully developed, within this time singularity. Figure 2.33 illustrates a principle view of
the time-singularity when the stress reaches the tensile strength.
Figure 2.33 Crack initiation within the defined time singularity when σ = ft.
By the reasoning that the crack only can be initiated and not fully developed during
the defined time singularity, the crack must develop some time after the stress wave
front have passed the material point in the cracking plane, Ekström (2016). This is
why Ekström claims that a fully developed spalling crack appears after cyclic
development of inelastic strains, as the shock wave propagates in alternating tension
and compression.
Time singularity
as σ = ft
σ = ft Crack initiation

-- 40 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 25
By applying this concept, it is not obvious where the spalling crack will occur. It will
be dependent on the post peak behavior of concrete in tension, as well as the material
response during cyclic loading/unloading. For this reason it is complicated to predict
and illustrate a schematic view of how the stress profile will look at any certain time
after crack initiation, which was illustrated for the brittle crack spalling approach in
Figure 2.31.
2.4.4 Empirical estimations
2.4.4.1 Overview
The response of blast loaded structures is a complex issue to evaluate. The fact that
blast loading is mostly related to military applications makes it difficult to find
extensive information in the literature. However, experiments on the subject have
been made and based on these, empirical estimations have been developed. The main
advantage of empirical methods is that their simplicity makes it easy to get a rough
estimation of the effects that can be expected, Johansson (2013b). On the other hand,
the downside of empirical methods is the fact that the estimations are only based on
the conditions given by the specific case.
2.4.4.2 FKR 2011
In the report FKR 2011, Fortifikationsverket (2011), recommendations of the required
minimum thickness t of a concrete element is given to meet different levels of
acceptable damage from a contact detonation. These different levels of acceptable
damage are:
a) No spalling occurs
b) Spalling occurs
c) Breaching occurs
A schematic picture of the damage magnitude estimated for case b), when spalling is
expected is shown in Figure 2.34.
Figure 2.34 Schematic picture of the estimated damage on a structure subjected to
a contact detonation for case b), spalling is expected. Based on
Fortifikationsverket (2011).
The required thickness t for the case when no spalling is expected is described as
K	FKR	a r	W	t 		 3/1
, 78	.	0	
(2.13)
when spalling is expected as
t	6	.	0t	Cd 		 	2	.	0
t	Sd 		 	35	.	0
t
t	4	.	1

-- 41 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	26
K	FKR	b r	W	t 		 3/1
, 31	.	0	
(2.14)
and when breaching is expected as
K	FKR	c r	W	t 		 3/1
, 18	.	0	
(2.15)
where W is the equivalent amount of TNT of the load and rK is a reduction coefficient
that takes the strength of the concrete into account. Equations (2.13) to (2.15) are only
viable if the characteristic compressive strength of the concrete fcc,cube ≥ 40 MPa. If
the compressive strength exceeds 40 MPa the thickness can be reduced with rK, which
can be described with the expression
cube	cc
K f
r
,
40
	
(fcc,cube ≤ 48 MPa) (2.16)
As can be seen in Figure 2.34, the crater and spalling depth for acceptable damage
level b) is
FKR	b	d t	C ,	2	.	0 		
(2.17)
FKR	b	d t	S ,	35	.	0 		
(2.18)
For acceptable damage level A and C no such expressions are given, but according to
Johansson (2013b) it can be assumed that the crater depth is the same, independent of
the concrete thickness. In agreement with that assumption, equations (2.13) to (2.18)
can be combined to estimate the crater and spalling depths for these cases as well,
resulting in
FKR	a	FKR	a	FKR	b t	t	t ,	,	, 40	.	0
78	.	0
31	.	0 				
(2.19)
FKR	a	FKR	a	d t	t	C ,	, 08	.	0	4	.	0	2	.	0 					
(2.20)
FKR	c	FKR	c	d t	t	C ,	, 34	.	0
18	.	0
31	.	0
2	.	0 					
(2.21)
It can be observed in equation (2.21) that the crater depth is about 1/3 of the thickness
when breaching occurs. The fact that the estimated crater depth is smaller than the
spalling depth is in accordance with what has been shown in experimental tests by
McVay (1988), Wang et al. (2008) and Yamaguchi et al. (2009).

-- 42 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 27
2.4.4.3 Unified Facilities Criteria (UFC)
In the Unified Facilities Criteria (UFC), found in Acosta (2011), similar criteria as in
Section 2.4.4.2 are presented but with the exception that the distance to the load can
be taken into account. Here, two different levels of damage are given:
b) Spalling occurs
c) Breaching occurs
The required thickness tb,UFC can be evaluated with the expression
5.0	5.2	, 13616	.	0	01004	.	0	02511	.	0	

	 				
 r
t UFC	b	
(2.22)
and required thickness tc,UFC as
2	, 049265	.	0	0144308	028205	.	0	

	 			
 r
t UFC	c	
(2.23)
where r is the distance from the element face to centre of charge in [ft]. The factor ψ
is a spalling parameter that can be expressed as
353	.0	266	.0	926	.0 
		 W	f	r c	
	
(0.5 ≤ ψ ≤ 14) (2.24)
where fc is the concrete compressive strength in [psi] and W is the charge weight
expressed in [lb]. The expression in equation (2.24) is in imperial units, hence the
thickness t in equations (2.22) and (2.23) is returned in [ft].
2.4.4.4 Cormie et al.
In Cormie et al. (2009), a spall depth of half the thickness of the element is the
approximate threshold at which breaching occurs. However, shear and flexural
reinforcement can limit the disengagement through confinement of spalling
fragments. The thickness of an element required to prevent spalling and breaching
from a spherical charge at distance r is expressed as
3/1
62	.0
3/1	, 07	.	0 W
W
r
t Cormie	b 	







and
3/1
62	.0
3/1	, 03	.	0 W
W
r
t Cormie	c 	







where W is the charge weight in [kg].

-- 43 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	28
2.4.5 Spalling and cratering effected by high strain rate effects
The general approach for considering strain rate effect was presented in Section 2.3.4,
where it was found that the concrete strength is dependent on the strain rate. Since
blast loading may correspond to very high strain rates in the range of 102-103 [s-1], the
compressive and tensile strength could be increased with a factor 2-3 and 6-7
respectively, see Section 2.3.4. This strength enhancement will most likely influence
the response at blast loading.
The mechanism behind the rapid tensile strength growth after the transition zone can
be described by a changed stress and energy distribution at the crack tips due to
inertia effects, Johansson (2000). This effect could, according to Johansson, also
describe some of the strength enhancements on the compressive side, since
compressive failure also is governed by cracking.
Bischoff and Perry (1991) reason that the structural effect causing enhancement of the
compressive strength also can be described by lateral inertia confinement. This effect
can be described by comparing a statically loaded and a blast loaded elastic material.
When the material is statically loaded in compression, it will expand laterally due to
the effect of Poisson’s ratio. However, at blast loading in compression the material
will not have time to expand in such way, causing inertial restraint which results in
strength enhancement.
Compressive strength enhancements, however, will not directly influence the
resistance of spalling in the structure. Although it will enhance the structures
resistance to cratering, which is a common damage at contact detonation. By
increasing the resistance to cratering the structure is able to transfer higher
compressive loads, which consequently leads to that the risk of spalling increases as
the compressive wave reflects at the free edge. The tensile strength enhancement
though, will clearly enhance the structures resistance to spalling since the structures
capacity to transfer tensile stresses increase.
In conclusion, high strain rate effects can, and most likely will affect the structural
response in both compression and tension. This phenomenon though, will not be
treated in the numerical analysis in this thesis.

-- 44 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 29
3 Experimental methods to evaluate spalling
3.1 Overview
The material properties of concrete under high strain rates were discussed in
Section 2.3.4, where it was found that the properties could change drastically at strain
rates corresponding to blast loading. In order to evaluate phenomenon such as spalling
accurately, the model of concrete at static loading has to be extended by dynamic
material properties, Schuler et al. (2005). Several experiments have been performed to
study this effect.
To study the effect of high strain rate loading, a common experimental set up is to use
the Split Hopkinson Pressure Bar (SHPB), Schuler et al. (2005). This bar can be used
in different configurations to study both compressive and tensile loading, and based
on the results determine material properties at the given load. Figure 3.1 shows a
simplified illustration of a SHPB, used to determine compressive properties under
impact loading. The concept of such a bar is to not impact the specimen directly, but
rather impact it via an elastic rod which is called incident bar. The elastic rod on the
other side of the specimen is called transmission bar, Chen and Song (2011). Both the
incident bar and the transmission bar are used to record the conditions caused by the
external impact.
Figure 3.1 Illustration of a Split Hopkinson Pressure Bar design, based on Chen
and Song (2011)
The external impact will cause a stress wave
i to propagate in the incident bar, which
will reflect and transmit at the interface of the specimen to become
r and
t,
respectively, see Figure 3.1. Thus, the impact event for the specimen is controllable
and quantitative which is important in order to accurately determine material
properties.
By adjusting the specimen connection in Figure 3.1 the setup can be used for tension
tests as well, Wu et al. (2005). This is achieved by adjusting the specimen connection
to extend within the incident and transmission bar, see Figure 3.2. In such way, it is
possible to utilize the reflected stress wave in the incident bar to apply tensile stress to
the specimen. Wu et al. refers to this experimental setup as a Split Hopkinson Tension
Bar (SHTB).

-- 45 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	30
Figure 3.2 Illustration of a Split Hopkinson Tension Bar design, based on
Wu et al. (2005)
Schuler et al. (2005) reason that this type of direct tension tests is suitable for strain
rates in the range of 10-1 to 101 [1/s]. Higher strain rates, e.g. blast loading, can be
achieved by spall experiments, which is a further development of the SHPB. This
section will study two different spalling experiments conducted by Schuler et al.
(2005) and Wu et al. (2005).
3.2 Schuler et al.
To investigate the tensile behavior under high strain rates, Schuler et al. (2005)
conducts experiments with a modified SHPB. The setup consists of a projectile,
incident bar and a concrete specimen glued to the surface of the incident bar, see
Figure 3.3. The modified SHPB lacks a transmission bar, instead it uses an
acceleration gauge to determine the particle velocity at the right edge of the specimen.
Figure 3.3 Experimental setup by Schuler et al. (2005), modified SHPB with strain
gauge in the incident bar and acceleration gauge at the free edge of the
specimen.
The projectile generates a stress wave in the incident bar, which reflects and transmits
at the surface between the incident bar and the specimen. The transmitted stress wave
in the specimen will, as described in Section 2.2.4, reflect at the free edge and become
a tensile wave that interacts with the compression wave. The stress propagation in the
modified SHPB is summarized in Figure 3.4.
Figure 3.4 Stress propagation in the modified SHPB. Reflection at the free edge
creates tensile stresses which can result in spalling, Schuler et al.
(2005).

-- 46 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 31
By using the acceleration gauge at the right end of the specimen, Schuler can
determine the velocity of the free surface. The strain gauge at the end of the incident
bar is used to measure the applied strain to the specimen. Figure 3.5 shows the
particle velocity at the end of the specimen, as well as the strain at the beginning of
the specimen, i.e. at the end of the incident bar.
Figure 3.5 Strain at the end of the incident bar (beginning of the specimen) and
particle velocity at the end of the specimen, Schuler et al. (2005).
Based on the data in Figure 3.5 the dynamic Young’s modulus can be determined as
2
0	0 c	E
t
L
c dyn 		


		
(3.1)
where L is the length of the specimen, ∆t is the time it takes for the stress wave to
propagate through the specimen, ρ is the density and c0 is the pressure wave velocity.
Further, Schuler determines the dynamic tensile strength based on the measurements
from the velocity gauge at the free end of the specimen. By using the pullback
velocity, ∆upb in Figure 3.5, the dynamic tensile strength is determined as
pb	dyn u	c	f 				 0
2
1
	
(3.2)
Another parameter evaluated is the dynamic fracture energy. However, Schuler claims
that in spall experiments it is not possible to measure stress over crack opening as it
can be done in static tension tests. For this reason, the dynamic fracture energy is
calculated based on the reduction in velocities for the ejected fragments. By
considering the time t1, when crack initiation starts, and t2 when the crack is fully
developed, the fracture energy corresponds to the dissipated energy in this time
interval.
The principle of evaluating the dynamic Young’s modulus, tensile strength and
fracture energy is conducted for several different specimens with different properties.
This thesis, though, will only briefly present results on one of them to illustrate the
gained knowledge from this experiment. The concrete specimen used in the
experiments has quasi static properties in accordance with Table 3.1.

-- 47 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	32
Table 3.1 Quasi static material properties for tested specimen, based on Schuler
et al. (2005).
Eqs [MPa] ft.qs [MPa] Gf.qs [N/m]
38.9 3.24 125.0
The test results of dynamic material properties are presented, for one specific case, in
Table 3.2.
Table 3.2 Measured material properties for impact loading, based on Schuler
et al. (2005).
Edyn [MPa] ft,dyn [MPa] Gf.dyn [N/m]		 [1/s]
38.6 13.2 175.3 37.1
The conclusion of Table 3.1 and Table 3.2 is that the material properties change
drastically at higher strain rates. However, the dynamic Young’s modulus does not
deviate from the quasi-static properties, why Schuler claims that this material property
is more or less strain rate independent. Further, by comparing the dynamic tensile
strength with the quasi static tensile strength the dynamic increase factor corresponds
to DIFf = 4.1, which agrees well with Section 2.3.4.
Another important observation in the experiment is how the fracture energy is highly
dependent on the strain rate. In the case described by Table 3.1 and Table 3.2, the
dynamic increase factor corresponds to DIFGf = 1.4 for the fracture energy.
3.3 Wu et al.
When testing materials with high dynamic tensile strength and high ductility, the
results of a Split Hopkinson Tension Bar (SHTB) described in Section 3.1, are
reliable. However, for brittle material such as concrete the results from a SHTB may
present errors that cannot be neglected. The errors are mainly governed by three
causes;
a) The low dynamic tensile strength of concrete requires the experimental setup
to be highly rigid.
b) The difficulty of data processing and repeatability of the experiment due to the
brittle nature of concrete.
c) The difficulties with ensuring a sufficiently good connection between the
concrete test specimen and the incident bar.
In Wu et al. (2005), the dynamic tensile strength of concrete is investigated through a
spalling experiment using modified setup of the Hopkinson pressure bar, see
Figure 3.6, that overcomes the inherent disadvantages of the original SHTB test. FE
simulations are conducted in order to support the dynamic tensile experiments.

-- 48 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 33
Figure 3.6 Setup for dynamic tensile test, Wu et al. (2005).
The experimental setup consists of an incident pressure bar pasted with a strain gauge
and a 500 mm cylindrical test specimen with a diameter of 74 mm. A projectile is
launched and strikes the incident bar, which transmits the compressive wave into the
test specimen. Spalling is caused by the tension wave reflected at the free end of the
specimen. The striking speed of the projectile is ensured not to cause any compressive
damage as the compressive stress wave propagates through the specimen.
Since concrete is a viscoelastic material a wave attenuation will be observed. The
stress wave attenuation will be considered based on measurements of the attached
strain gauges. The stress wave propagation is described using the exponent annotation
rule
x
e 	
	


	 0	
(3.3)
where σ0 represents the stress amplitude at the end of the incident bar and α is the
attenuation coefficient. Therefore, the incident stress wave form at the free edge is
predicted based on the attenuation rule in equation (3.3) and the measured wave shape
and is illustrated in Figure 3.7.
Figure 3.7 Stress wave shape for experimental data, Wu et al. (2005).
The reflected tensile stress wave from the incident compressive wave at the free edge
can be predicted using one-dimensional wave analysis. Based on that theory the
tensile stress distribution over the length of the specimen can be obtained as a
function of time, giving the position of the generated stress peak. Furthermore, the
Dynamic strain instrument
PC Oscillograph
60/70mm 3200mm 500mm
A B C
Projectile Incident bar Specimen

-- 49 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	34
fracture stress in tension and strain rate can be determined by such procedure. The
strain rate is determined from the evolution of stress in the tensile fracture location as
ion	cracklocat
t
spalling t	E 









 1
	
(3.4)
where the considered time interval is between the time when tensile stress occurs and
the time when the crack takes place. The variation of dynamic tensile strength and the
logarithm of strain rate are presented in Figure 3.8.
Figure 3.8 Spalling stress as a function of strain rate, Wu et al. (2005).
It can be concluded that the obtained relation of dynamic tensile strength and strain
rate indicates that concrete has high strain rate sensitivity. The dynamic increase
factor for the tensile strength is as high as 7.5, which is in accordance with
conventional theory in Section 2.3.4.
DIF≈2
DIF≈7.5

-- 50 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 35
4 Numerical analysis
4.1 Overview
The response of structures exposed to explosions can be somewhat complicated to
evaluate and are in most cases determined based on experiments, as described in
Chapter 3. Since the conventional method of how to evaluate spalling in concrete,
presented by McVay (1988), does not consider material ductility, Ekström (2016)
rejects this hypothesis as described in Section 2.4.3. In order to show that the
structural behaviour supports his hypothesis, Ekström developed a numerical model
which can simulate the spalling phenomenon for structures subjected to blast loading.
This chapter will include an overview of the model, and further analyses, in addition
to the results presented by Ekström, are performed as a part of a parametric study.
Further, this chapter will present results of how the structural response, with regard to
spalling, will be influenced by using non-linear strain softening and non-linear
pressure time relation.
4.2 Model
Wave propagation and spalling in concrete can be simulated using a structural
element of plain concrete that is subjected to blast loading. This structural element is
studied using a one-dimensional (1D) finite element model. Each element is modelled
using bar elements, with a certain stiffness and mass. The assembled model is
subjected to a load corresponding to an explosion at a certain distance from the
structure, which means that a flat pressure profile is assumed in accordance with
Section 2.1.3. A principle figure of the structural element and FE-model is illustrated
in Figure 4.1.
Figure 4.1 Structural concrete element and finite element approximation using a
one dimensional model.
Since the model consists of bar elements, stiffness matrix K and mass matrix M of
each element is obtained using equation (4.1) and (4.2) respectively










 1	1
1	1
i
i	i
i L
E	A
K	
(4.1)
Number of
elements N
F(t) K1 K3
M1 M3
KN-2 KN
MN-2 MN
P(t)
L

-- 51 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	36







	
 2	1
1	2
6
i	i	i
i
L	A
M

(4.2)
where Ai is the area, Ei is the Young’s modulus, Li is the element length and ρi is the
density. The load acting on the structure, i.e. P(t) in Figure 4.1, is based on the
magnitude of the explosion and the distance between the explosion and the structure.
In analogy with Figure 2.3 in Section 2.1.1, the shape of the pressure time relation can
be somewhat complex. However, by only including the overpressure and the duration
of the load, the pressure-time relation can be determined using equation (4.3)
...	2	..	1	..	0	1	)	( 




 		 n
t
t
P	t	P
n
dur
peak	
(4.3)
The exponent n governs the shape of the pressure-time relation, hence for exponent
2		n	
(where	..	2	..	1	..	0		n	 ) the pressure-time gradient becomes non-linear. Since the
analysis only includes the positive phase of the pressure-time relation, equation (4.3)
is only valid for	dur	t	t 	 . Principle pressure-time relations are illustrated in Figure 4.2.
Figure 4.2 Illustration of pressure-time relations based on equation (4.3) for
a)	0		n	 , b)	1		n	 and c)	2		n	 .
Ekström (2016) only consideres the special case where n =1, giving a linear pressure-
time gradient seen in Figure 4.2b. Since the analysis is based on a one-dimensional
finite element model, a force is applied rather than a pressure. By using a reference
area A in the structure the applied force is determined using equation (4.4).
)	(	)	( t	P	A	t	F 		
(4.4)
The material characteristics of concrete is approximated as a linear elastic material
until the tensile capacity is reached. Hence, the non-linear behaviour of concrete
compression is not considered in Ekström’s analysis; i.e. plastic strains or damage
propagation is not allowed to take place in compression. The characteristics of the
strain softening branch is by Ektröm (2016) considered to be linear for all material
models. Further, the concrete is modelled using a smeared crack approach to describe
crack localisation. A crack band width, over which inelastic strains distribute, is
therefore pre-defined. Ekström suggests that the crack band width is equal to three
times the maximum aggregate size used in the concrete. The concept of the crack
band width will be further elaborated on in Section 4.9. The overall characteristics
Ppeak 	Ppeak 	Ppeak
n=0 	n=1 	n=2
tdur	tdur	tdur
P 	P 	P
t 	t	t
a) 	b) 	c)

-- 52 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 37
and input used in Ekström’s analysis is summarized in Table 4.1, which will be the
reference model to which other configurations will be compared to in the parametric
study.
Table 4.1 Geometry, load and material parameters for reference model.
Parameter Value Unit
Concrete thickness, L 300 [mm]
Tensile strength, fct 2 [MPa]
Young’s moduls, E 30 [GPa]
Density, ρ 2350 [kg/m3]
Maximum aggregate size 16 [mm]
Area, A 1 [mm2]
Fracture energy, Gf 132 [N/m]
Equivalent TNT charge 1500 [kg]
Distance to structure, r 5 [m]
Peak pressure, Ppeak 50.74 [MPa]
Load duration, tdur 1.31 [ms]
Number of elements N 100 [-]
Crack band width 48 [mm]
4.2.1 Material models
As treated in Section 2.3.3, there are different approaches to treat concrete in tension.
Therefore, Ekström investigates the structural response using three different material
models; a plasticity model, a damage model and a damage-plasticity model which are
illustrated in Figure 4.3. For stress states below the tensile capacity in the plasticity
model, see Figure 4.3a, the response remains elastic during unloading/loading based
on the Young’s modulus. In the damage model, see Figure 4.3b, the stiffness during
unloading/loading for strains ε > 0 is based on the magnitude of the inelastic strains in
relation to the ultimate strain, also considered as damage. For strains ε ≤ 0 the
response remains undamaged. The damage-plasticity model, see Figure 4.3c, is a
combination of the plasticity and the damage model.
Figure 4.3 Constitutive models for concrete in tension a) plasticity, b) damage and
c) damage plasticity.
σ σ σ
ε ε ε
a) b) c)

-- 53 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	38
4.3 Numerical approach
The structural model described in Section 4.2 is analysed using an explicit nonlinear
dynamic model. All calculations are carried out using MATLAB®. The principle of
the numerical iteration is that for a certain state of displacement un, velocity u̇n and
acceleration ü n the displacement is determined at a later time, hence the explicit
evaluation method. The updated displacement un+1 is determined based on the current
state and the time interval h, see equation (4.5)
n	n	n	n u
h
u	h	u	u 	 					 2
2
1	
(4.5)
Based on the difference between the updated displacement un+1 and the previous
displacement un, a strain increment ∆εn+1 is determined using equation (4.6).
L
u	u n	n
n

	 

1
1	
	
(4.6)
Using the strain increment ∆εn+1 and the previous strain εn the element stress is
determined. Knowing the stress, an internal force qn+1 vector is established using
equation (4.7).
 		1	1	1 , 		 			 n	n	n	n	n q	q	q	

		
(4.7)
Knowing both the internal force vector and the displacements, the velocity and
acceleration vector is solved by combining equation (4.8) and (4.9).
1	1	1	1 			 				 n	n	n	n F	q	u	C	u	M 		
(4.8)
 		1	1 2 	 			 n	n	n	n u	u
h
u	u 				
(4.9)
The mass matrixM	 in equation (4.8) is for bar elements determined using equation
(4.10).







	
 2	1
1	2
6
i	i	i
i
L	A
M

(4.10)
The overall damping C of the system is proportional to the stiffness matrix Ki, shown
in equation (4.11), where the constant a is based on the highest response frequency
ωmax and the damping ratio ξ, see equation (4.12).
i	i K	a	C 		
(4.11)
max
2

	
	a	
(4.12)

-- 54 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 39
The damping ratio ξ used by Ekström is ξ = 1.4 (140 %) for the plasticity model and ξ
= 1.0 (100 %) for the damage- and damage-plasticity model. A scheme of the
numerical routine is summarized in Figure 4.4.
Figure 4.4 Scheme of numerical routine. Based on Ekström (2016).
4.4 Representation of a shock wave in numerical analysis
4.4.1 Overview
The idealized shock wave and pressure time relation P(t) described in Figure 4.2 is
how one analytically can consider the shape and magnitude of the pressure at any
certain time. However, using the numerical approach described in Section 4.3 results
in a discrepancy between the analytical and numerical representation of the pressure-
time relation. To emphasize this discrepancy, analytical and numerical shock wave
profiles are compared in Figure 4.5 at three different locations in the structure, and
Table 4.2 summarizes the numerical input. Figure 4.5 illustrates the analytical shock
wave profile as a dashed line and the numerical shock wave profile as a solid line.
Important in this comparison is to observe that the shock wave propagation is studied
for a linear elastic case, with no influence of material strength. For the purpose of
illustration, compressive stresses are defined as σ > 0 and tensile stresses are,
consequently, defined as σ < 0.
Table 4.2 Numerical input for comparing shock wave profiles.
Ppeak [MPa] tdur [ms] N		 h [ms]
50.74 1.31 100 1.0 2.52∙10-4
n	n	n	n 	F	u	u	u 	,	,	, 		
Numerical
routine
Displacement
vector
Input
1nu
Strain increment
vector	 	1	 	nu	

Material
model
Strain
Stress
Inelastic strain
 	1nu	

 	1nu	

 	1n	inel 	u	

Internal force
vector 	1nu	q
Acceleration
vector
Velocity vector
1nu
1nu
Input for next
iteration
n	n	n 	u	u	u 		 	,	,
 	 	 	 	 	n	n	inel	n 	u	u	u	

	
	 	,	,
Input material
response
 	 	 	 	 	n	n	inel	n 	u	u	u	

	
	 	,	,
Time step update
1		 	n	n
Results
Start

-- 55 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	40
(a)
(b)
(c)
Figure 4.5 Comparison between analytical (dashed) and numerical (solid)
representation of shock wave profile at coordinates (a) 60 mm,
(b) 240 mm and (c) 300+210 mm (after reflection).
This misrepresentation of the shock wave profile in the numerical analysis compared
to the analytical is obvious by studying Figure 4.5. The stress difference on each side
of the wave front is equalized over a certain distance, ∆x, in the numerical approach,
which is inaccurate with how one considers the shock wave analytically.
This section will study how the numerical representation of the shock wave profile is
influence by the time interval h, damping ratio ξ and number of elements N.
4.4.2 Influence of time interval
The time interval over which the numerical routine updates the displacement un,
velocity u̇n and acceleration	 ü	 n might influence the accuracy in the numerical
representation of the shock wave. Ekström defines the time interval h as
dt	h 	 3	.	0	
(4.13)
P(t)
L
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
∆x
Analytical
Numerical
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
∆x
Analytical
Numerical
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
∆x
Analytical
Numerical

-- 56 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 41
where dt is the critical time step, i.e. the time it takes for the stress wave to propagate
through one element. Figure 4.6 shows how the numerical representation of the shock
wave is influenced when reducing the time interval.
(1) (2)
(a)
(b)
(c)
Figure 4.6 Comparison of shock wave profiles for time interval (1) h = 0.01dt and
(2) h = 0.1dt at coordinates (a) x = 60 mm, (b) x = 240 mm and
(c) x=300+210 mm.
The comparison shows that the influence of the time interval is negligible. No
improvement in the difference between the analytical and numerical representation of
the shock wave is observed.
4.4.3 Influence of damping ratio
The damping of the system can, in a simplified way, be considered to determine the
overall energy loss in the system for each time step, why it is possible that this can
influence the representation of the shock wave. As seen in Figure 4.7(a), the stress
intensity has decreased already at coordinate x = 60 mm which could mean that the
damping of the system is too high. The influence of the damping ratio ξ is studied by
comparing the shock wave for different magnitudes of ξ. The first studied case,
illustrated in Figure 4.7, is a comparison between the reference damping ratio ξ = 1.0
and ξ = 0.05.
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]

-- 57 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	42
(1) (2)
(a)
(b)
(c)
Figure 4.7 Comparison of shock wave profiles for damping ratio (1) ξ = 1.0 and
(2) ξ = 0.05 at coordinates (a) x = 60 mm, (b) x = 240 mm and
(c) x=300+210 mm.
The conclusion from Figure 4.7 is that the distance, over which the stress difference is
equalized, decreases with decreasing damping ratio ξ. However, there is still a certain
discrepancy in the numerical and analytical representation. The most obvious of
which is the oscillation in stress seen in Figure 4.7(2), which results in net tensile
stresses as the wave propagates in compression. Hence, if the damping ratio is too
low, inelastic strains can develop in tension as the shock wave propagates in
compression.
By this reasoning, a damping ratio in the system of ξ = 0.05 is too low to accurately
describe the behavior of the shock wave. Therefore, higher values of ξ must be
considered. Figure 4.8 illustrates the different behavior for damping ratios ξ = 0.2 and
ξ = 0.5. At damping ratio ξ = 0.2 the numerical approach still becomes unstable, see
Figure 4.8(1), while for damping ratio ξ = 0.5 it appears to be more or less stable.
However, if this model is studied more in detail, tensile stresses still arises as the
wave propagates in compression. Therefore, the conclusion is that a damping ratio
must be greater than ξ = 0.5 if the original mesh density is used. If, however, such a
damping ratio is used the distance over which the stress difference equalizes becomes
similar to the one shown in Figure 4.8(1), i.e. the original damping ratio. This is also
mentioned in Ekström (2016) and is the reason why such a large damping ratio as
100-140 % where used in his analyses.
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]

-- 58 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 43
(1) (2)
(a)
(b)
(c)
Figure 4.8 Comparison of shock wave profiles for damping ratio (1) ξ = 0.2 and
(2) ξ = 0.5 at coordinates (a) x = 60 mm, (b) x = 240 mm and
(c) x = 300+210 mm.
For the purpose of illustration, higher damping ratios than the reference damping
ξ = 1 is also considered to highlight the behavior. Therefore, damping ratios ξ = 3 and
ξ = 5 are compared and illustrated in Figure 4.9. The conclusion of this figure is that
the distance over which the stress difference neutralizes increases as the damping ratio
increases, and becomes too inaccurate for higher damping ratios.
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]

-- 59 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	44
(1) (2)
(a)
(b)
(c)
Figure 4.9 Comparison of shock wave profiles for damping ratio (1) ξ = 3 and
(2) ξ = 5 at coordinates (a) x = 60 mm, (b) x = 240 mm and
(c) x = 300+210 mm.
To summarize, the influence of the damping ratio is highly important when describing
the propagation of a shock wave. Considering the distance that it takes for the
compression wave to reach peak pressure, lower damping ratios are favorable as
shown in Figure 4.7(2). However, lower damping ratios results in oscillation which
can cause tensile stresses when the wave propagates in compression. Therefore, the
damping ratio must be of such magnitude that these oscillations do not take place.
This is why the conclusion is that the damping ratio cannot alone adjust for the
discrepancy seen in the numerical and analytical approach.
4.4.4 Influence of mesh density
The number of elements N used in the analysis is also a possible factor that might
adjust for the discrepancy seen in Figure 4.5. Therefore, the number of elements is
compared with the same principle as the damping ratio ξ. The number of elements in
the reference model is set to N = 100, i.e. the same number of elements used in
Ekström’s analysis, and will be compared with N = 50 and N = 800.
The first comparison is between N = 100 and N = 50 elements, shown in Figure 4.10.
The conclusion of this illustration is that if fewer elements are used, see
Figure 4.10(2), the larger distance it takes for the stress wave to equalize the stress
difference. This also leads to that the actual stress intensity of the shock wave
decreases, i.e. the shock wave will become less able to fully represent the peak
pressure Ppeak given as input in the analysis.
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]

-- 60 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 45
(1) (2)
(a)
(b)
(c)
Figure 4.10 Comparison of shock wave profiles for (1) 100 elements and (2) 50
elements at coordinates (a) x = 60mm, (b) x = 240 mm and (c) x =
300+210 mm.
For this reason, it is important to consider to opposite case where the number of
elements N increases. This comparison is illustrated in Figure 4.11, which shows that
by increasing the number of elements, the numerical shock wave profile is more
accurately depicted compared with the analytical. As seen in Figure 4.11(2a), the
stress intensity when using N = 800 elements is very similar to the analytical solution.
This observation suggests that the numerical approach converges towards the
analytical approach as the number of elements increases. However, one can still
observe the loss in stress intensity when comparing Figure 4.11(2) at the three
different coordinates in the structure. This suggests that the number of elements N,
like for the damping ratio ξ, cannot alone adjust for the difference between numerical
and analytical representation.
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]

-- 61 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	46
(1) (2)
(a)
(b)
(c)
Figure 4.11 Comparison of shock wave profiles for (1) 100 elements and (2) 800
elements at coordinates (a) x = 60mm, (b) x = 240 mm and (c) x =
300+210 mm.
4.4.5 Combined influence of damping and mesh density
Even though the shock wave representation was improved substantially by increasing
the number of elements, see Section 4.4.4, there is still some difference between the
analytical solution and the numerical. Therefore, this section aims to combine the
influence of the damping ratio ξ and number of elements N to determine whether the
solution becomes more accurate. The strategy is to see whether using a low damping
ratio ξ and high number of elements N could improve the shock wave representation
even further. The input for these comparisons are summarized in Table 4.3.
Table 4.3 Input for comparing the combined influence of damping ratio and
number of elements.
Ppeak [MPa] tdur [ms] ξ [-] N [-]
50.74 1.31 0.05 800
50.74 1.31 0.1 800
50.74 1.31 0.1 2000
50.74 1.31 0.2 2000
The first comparison if performed using damping ratio ξ = 0.05 and ξ = 0.1 for
N = 800 elements. As illustrated in Figure 4.12, there is a substantial reduction of the
stress oscillation for lower damping ratios. Further, the difference between the
analytical peak stress and the numerical decreases even more. For the configurations
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]

-- 62 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 47
studied in Figure 4.12 the numerical shock wave profile is very similar to the
analytical one. There is still, however, small oscillations in the stress profile causing
tensile stresses as the wave propagates in compression.
(1) (2)
(a)
(b)
(c)
Figure 4.12 Comparison of shock wave profiles for damping ratio (1) ξ = 0.05 and
(2) ξ = 0.1 using N = 800 elements at coordinates (a) x = 60mm, (b) x
= 240 mm and (c) x = 300+210 mm.
Figure 4.12 further suggests that increasing the number of elements could improve the
model even more for low damping ratios. This effect becomes clear when the same
comparison is performed for N = 2000 elements. This comparison is given in
Figure 4.13 and shows that the shock wave is represented even more accurate when
using N = 2000 elements.
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]

-- 63 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	48
(1) (2)
(a)
(b)
(c)
Figure 4.13 Comparison of shock wave profiles for damping ratio (1) ξ = 0.1 and
(2) ξ = 0.2 using N = 2000 elements at coordinates (a) x = 60mm,
(b) x = 240 mm and (c) x = 300+210 mm.
The conclusion of this section is that the magnitude of the damping ratio ξ and the
number of elements N are highly important parameters that will influence how the
model numerically represent the shock wave.
4.4.6 Shock wave representation for increased pressure time
gradient
In addition to comparisons of shock wave representation when changing the time
interval, damping ratio and mesh density, the gradient of the pressure time relation is
also of interest. Since variation in load duration, i.e. pressure time gradient, is of
interest in the parametric study in Section 4.6, this section aims to highlight how the
numerical model represents a shock wave with shorter load duration.
The comparison is made between the original load duration, 1.31 ms, and when the
load duration is decreased substantially to 0.04 ms, see Figure 4.14. From this, it can
be concluded that the stress intensity in Figure 4.14(2) cannot be considered to fully
represent the peak pressure Ppeak, which is used as input in the analysis.
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]

-- 64 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 49
(1) (2)
(a)
(b)
(c)
Figure 4.14 Comparison of shock wave profiles for load durations
(1) tdur = 1.31 ms and (2) tdur = 0.04 ms at coordinates (a) x = 60mm,
(b) x = 240 mm and (c) x = 300+210 mm.
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress,
 σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-20
0
20
40
60
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]
-60
-40
-20
0
20
0 100 200 300
Stress
, σ [MPa]
Coordinate, x [mm]

-- 65 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	50
4.5 Development of inelastic strains
Since the studied shock wave propagation in Section 4.4 was performed for a linear
elastic material in both compression and tension, no damage in the material could be
observed. However, as the wave propagates in tension, crack initiation will occur and
cause inelastic strains as the tensile stress reaches the tensile strength. This can be
illustrated by showing how inelastic strains are distributed over the structural element
as well as the corresponding material response for a certain element. These graphs are
principally shown in Figure 4.15. Also shown in Figure 4.15(1) is two lines
describing the ultimate inelastic strain εu (dashed-dot horizontal line) and the
coordinate at which the conventional theory by McVay (1988) predicts spalling
(dashed vertical line).
(1) (2)
Figure 4.15 Illustration of how (1) inelastic strains and (2) the corresponding
material response is used to evaluate spalling.
Another important aspect of how to describe the development of inelastic strain is to
determine how to define the position of the shock wave front. In further illustrations,
one load cycle is defined as every time the shock wave front reaches the opposite free
edge after propagating in tension. This principle is illustrated in Figure 4.16.
Figure 4.16 Definition of the position of the shock wave for different load cycles.
Using this principle, it is possible to study the structural response, in terms of the
development of inelastic strains, for different load cycles. This is shown in
Figure 4.17 where inelastic strains and the corresponding material response is shown
after different number of load cycles, when a plasticity model is used.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
Spalling
McVay
εu
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
First load cycle
Second load cycle
Third load cycle

-- 66 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 51
(1) (2)
(a)
(b)
(c)
(d)
Figure 4.17 (1) Development of inelastic strains and (2) corresponding material
response after (a) one load cycle, (b) two load cycles, (c) four load
cycles and (d) six load cycles for a plasticity model.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 67 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	52
4.5.1 Presented results
The results presented in Ekström’s licentiate thesis consist of distribution of inelastic
strains and corresponding material response for the three different material models
described in Section 4.2.1. These results are presented in Figure 4.18 and supports
Ekström’s claim that spalling does not necessarily occur at the same location as
predicted by McVay (1988). Further, it confirms that the development of inelastic
strains, i.e. the spalling process, does not occur instantaneously but rather during
cyclic loading/unloading. Therefore, the structural response during cyclic
loading/unloading is an important aspect when evaluating spalling. In addition to
Figure 4.18, Table 4.4 summarizes the position of crack initiation and spalling crack
for the different material models as well as the position of the spalling crack predicted
by McVay (1988).
(1) (2)
(a)
(b)
(c)
Figure 4.18 Spalling evaluation presented by Ekström for material model
(a) plasticity, (b) damage and (c) damage-plasticity.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 68 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 53
Table 4.4 Position of crack initiation and spalling crack (defined from the right
side of the structure) for different material models, based on Ekström
(2016).
Method Crack initiation [mm] Spalling crack [mm]
McVay (1988) 92 92
Plasticity 97 140
Damage 97 -
Damage-plasticity 97 92
The reason why crack initiation analytically predicted by McVay, is different from the
resulting crack initiation in the numerical analysis is due to the discrepancy in shock
wave representation discussed in Section 4.4. Since the analytical peak pressure is
greater than the numerical peak pressure, crack initiation will appear earlier in
McVay (1988), i.e. the spalling depth Sd,i will decrease as Ppeak increases in equation
(4.14).
mm	92
2
, 

	

Peak
t	dur
i	d P
f	t	c
S	
(4.14)
It will be shown later, in Section 4.6.6, that crack initiation will converge towards the
result predicted by McVay, the more accurately the numerical shock wave resembles
the analytical one.
Another comment regarding the result presented in Figure 4.18(b), i.e. for the damage
model, is that the distribution of inelastic strains differs somewhat from the result
presented by Ekström (2016). The reason for this is that Ekström includes the elastic
part of the strain in the graphs for inelastic strains. The consequence of this is that
inelastic strains are predicted all the way out to the far right in the structure. To
illustrate this difference, Ekström’s result and the modified results are illustrated and
compared in Figure 4.19.
(1) (2)
Figure 4.19 Comparison between distribution of inelastic strains using a damage
model for (1) including elastic strains (Ekström, 2016) and
(2) excluding elastic strains.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]

-- 69 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	54
4.6 Parametric study
4.6.1 Input parameters
The chosen material model that represent the response under cyclic loading described
in Section 4.2.1 is important in terms of the development of inelastic strains.
However, variations in geometry, material properties and load intensity in these
models will have an influence on the structural response as well. In order to evaluate
the extent of the influences of different input parameters as well as the accuracy of the
model presented by Ekström, a parametric study is performed and presented in the
following sections.
A model based on the input parameters summarized in Table 4.1 will be used as a
reference model and are compared to the results of each parametric variation. The
parameters included in the study and the specific variations are presented in Table 4.5,
where the reference values are underlined. The different parameters are intended to be
analysed individually, with the other parameters set to the reference model.
Table 4.5 Variation of the input values included in parametric study. Reference
values used in basic analysis are underlined.
Parameter Variations Value
Load duration, tdur [0.05, 0.1, 0.5, 1.0, 1.5] ∙tdur tdur = 1.31 ms
Concrete thickness, L [0.5, 1.0, 1.5, 2] ∙L L = 300 mm
Peak pressure, Ppeak [0.4, 1.0, 1.4] ∙Ppeak Ppeak = 50.74 MPa
Tensile strength, fct [0.5, 1.0, 2, 3] ∙fct fct = 2 MPa
Number of elements N [0.5, 1.0, 2, 4, 8] ∙N N = 100
Damping, ξ [0.1, 0.3, 0.7, 1.0 (1.4) , 3.0] ∙ξ ξ = 1.0
Results are presented mainly for the plasticity model, since the tendency of each
individual parametric variation is mostly the same for the three material models.
However, if a difference can be observed, this will be emphasised and discussed.
The determination of the crack band width, over which the representation of cracks is
smeared out over, is a critical process. The numerical response is accurate only if the
resulting cracked region in the analysis is equal to the assumed crack band width, and
should be evaluated after each analysis. This process is excluded in this parametric
study and instead further treated in Section 4.9 together with the concept of fracture
energy.
4.6.2 Load duration
4.6.2.1 Plasticity model
As stated in Section 4.2, the analysed pressure wave is represented by pressure as a
function of time, P(t). The time over which the pressure wave acts on the structure is
defined as the load duration, tdur. The load durations analysed in the parametric study
are presented in Table 4.6.

-- 70 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 55
Table 4.6 Variations of load duration, tdur analysed in the parametric study.
Parameter Value [ms] Def.
tdur 1.31 Long
0.05∙tdur 0.0655 Short
0.1∙tdur 0.131 Short
0.5∙tdur 0.655 Long
1.5∙tdur 1.965 Long
A pressure wave can be distinguished between short and long load duration, as
discussed in Section 2.2.4. However, the main difference between the two cases is for
a pressure wave with a short load duration, or consequently a large pressure-time
gradient, ∂p/∂t, the net tensile stress wave will increase at a higher rate than for a
longer load duration. Therefore, the spalling depth predicted by McVay (1988) using
equation (4.15), increase with the load duration, as can be seen in Figure 4.20(b).
t
p
f	c
S t
i	d





2
,	
(4.15)
Further, a higher pressure-time gradient allows the inelastic strains to develop during
a longer time before unloading as the pressure wave propagates in tension. For load
durations defined as short using the methodology presented in Section 2.2.4 (tdur < 2
L/c) the pressure wave is not long enough to unload the structure in tension at all. A
consequence of this is that the number of load cycles required to reach a fully
developed crack decrease for short load durations, as can be observed in
Figure 4.20(b), where a crack is fully developed during the first load cycle. However,
for longer load durations, the pressure-time gradient will decrease. Therefore the
predicted location Sd,i for the crack initiation in equation (4.15) will increase as well
as the number of load cycles required to reach a fully open crack. This can also be
observed in Figure 4.20(c).

-- 71 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	56
(1) (2)
(a)
(b)
(c)
Figure 4.20 (1) Distribution of inelastic strains and (2) corresponding material
response for load duration (a) tdur = 1.31 ms, (b) tdur = 0.131 ms,
(c) tdur = 1.965 ms.
4.6.2.2 Damage and damage-plasticity models
The results from the damage and damage-plasticity models show a similar response as
the plasticity model in Section 4.6.2.1. The most obvious similarity is the response for
short load durations i.e. tdur = 0.131 ms, where the results of the three models are
virtually identical, as can be seen in Figure 4.21. This is considered reasonable, since
the difference between the models is the behaviour during unloading. In accordance
with Section 4.6.2, there will not be any unloading in the structure due to the short
load duration and therefore no difference between the material models is observed.
For longer load durations, the same tendencies that are observed for the plasticity
model, is seen for the other two models as well; i.e. the number of load cycles to reach
a fully developed crack increase with increasing load duration. All results relating to
load duration for the three material models can be found in Appendix B1 and C1.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 72 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 57
(1) (2)
(a)
(b)
(c)
Figure 4.21 (1) Distribution of inelastic strains and (2) corresponding material
response for load duration tdur =0.131 ms for (a) plasticity model,
(b) damage model and (c) damage-plasticity model.
4.6.3 Concrete thickness
The concrete thickness L represents the thickness of the analysed concrete element,
expressed in millimetres. The input thickness in the reference model presented by
Ekström is 300 mm, and further variations is presented in Table 4.7.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 73 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	58
Table 4.7 Variations of concrete thickness, L included in the parametric study.
Parameter Value [mm]
L 300
0.5L 150
1.5L 450
2L 600
Any variation of concrete thickness in the analysis, in fact corresponds to a change in
the representation of the shock wave. For example, if the concrete thickness is
doubled, the conceptual response is identical to that of the original thickness and half
the load duration, see Figure 4.22. Consequently, the crack initiation position will
vary in accordance with the reasoning in Section 4.6.2, which implies that the spalling
depth will increase with increased load duration, while in relation to the thickness, it
will remain constant.
(1) (2)
Figure 4.22 Comparison between distribution of inelastic strains for
(1) L = 600 mm, tdur = 1.31 ms and (2) L = 300 mm, tdur = 0.655 ms.
However, the process of adjusting the assumed fracture zone to correspond to the one
achieved in the analysis will differ from that in the reference model, since the crack is
smeared out over a distance twice as long when L = 600 mm.
The conclusion is that it is not the concrete thickness alone that determine the
response, but rather the shape of the pressure wave in relation to the thickness. This
tendency can also be seen for the other material models as well as the additional
variations presented in Table 4.7. These results, though, are presented in Appendix B2
and C2.
4.6.4 Peak pressure
4.6.4.1 Plasticity model
The peak pressure, Ppeak is the initial value in the force vector Fn for the first iteration
in the numerical routine, which in turn is used to determine the initial acceleration ü n.
Since the analysis is based on a one dimensional finite element model, the pressure
used as input is transformed to a force in accordance with equation (4.4) in
Section 4.2.
The reference value of 50.74 MPa used in the model presented by Ekström
corresponds to a hemispheric explosion of 1500 kg TNT from a distance of 5 m and is
0
1
2
3
4
5
0 200 400 600
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]

-- 74 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 59
calculated using the software presented in ConWep (1992). Further variations of the
peak pressure analysed in the parametric study are derived in the same way based on
different explosion magnitudes and ranges, see Table 4.8.
Table 4.8 Peak pressures, Ppeak analysed with corresponding charge weights and
distances.
Charge weight [kg] Distance [m] Load duration [ms] Peak pressure [MPa]
1500 5 1.31 50.74
2500 5.5 1.31 70
900 7 1.31 20
As previously stated in Section 4.5.1, any variation of the peak pressure will have an
influence on the predicted position of the first spalling crack. An increase in pressure-
time gradient in equation (4.15) will result in a higher gradient of the net tensile wave,
and therefore a decrease in the spalling depth. This position is predicted based on the
gradient of the first tensile wave.
For cases with low peak pressure, the gradient of the first net tensile wave is not high
enough to reach the tensile strength before unloading. Thus, the predicted spalling
position is considered to be inaccurate. Instead, the first crack is initiated further to the
right, see Figure 4.23(b). This is because the gradient of the net tensile wave in the
following load cycles will increase, i.e. the crack is initiated in the second load cycle,
not the first. However, as the peak pressure increases, resulting in a crack initiation
during the first load cycle, the predicted spalling position is considered more accurate,
see Figure 4.23(c).

-- 75 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	60
(1) (2)
(a)
(b)
(c)
Figure 4.23 (1) Distribution of inelastic strains and (2) corresponding material
response for peak stress (a) Ppeak = 50.74 MPa, (b) Ppeak = 20 MPa and
(c) Ppeak = 70 MPa.
4.6.4.2 Damage and damage-plasticity models
It seems, when analysing the results presented in Figure 4.23, that the spalling crack is
developed in about the same position for the different peak pressures. This position is
determined by which element that can develop inelastic strains over the longest time,
during the first load cycles. The same tendency can be observed during the initial load
cycles for the damage and damage-plasticity model as well. However, the unstable
state of the pressure wave after the first load cycles in these models, can cause a fully
developed crack to form at a different position. For the damage-plasticity model, this
is illustrated in Figure 4.24(c). The same result are presented for the damage model in
Appendix xx.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 76 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 61
(1) (2)
(a)
(b)
(c)
Figure 4.24 (1) Distribution of inelastic strains and (2) corresponding material
response for damage-plasticity model with peak stress (a) Ppeak =50.74
MPa, (b) Ppeak =20 MPa and (c) Ppeak =70 MPa.
4.6.5 Tensile strength
4.6.5.1 Plasticity model
Since the concrete tensile strength, fct is a material property, any variation of this
parameter will have an influence on the softening response of the cracked concrete. In
this parametric study, the input values are changed one at a time. When reducing the
tensile strength alone, the fracture energy remains constant only if the ultimate crack
opening increases. The consequence of this is that a lower tensile strength, with
preserved fracture energy, will yield a more ductile material and increase the number
of load cycles required to develop a fully open crack, illustrated in Figure 4.25(b).
Accordingly, a higher tensile strength yields a more brittle material, causing a spalling
crack after fewer load cycles, see Figure 4.25(c). In reality a concrete with a lower
tensile strength can, in fact, yield a more ductile material response. However, the
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 77 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	62
fracture energy also decrease with decreasing tensile strength, although the fracture
energy does not decrease with the same rate.
(1) (2)
(a)
(b)
(c)
Figure 4.25 (1) Distribution of inelastic strains and (2) corresponding material
response for tensile strength (a) fct = 2 MPa, (b) fct = 1 MPa, and
(c) fct = 4 MPa.
4.6.5.2 Damage and damage-plasticity models
The same tendency, with more ductile material response as the tensile stress is
reduced, can be seen for the damage and damage-plasticity models as well. This is
expected, since the envelope curve in the stress-strain relation is the same for all three
material models. However, there is a strain localisation decrease in the damage and
damage-plasticity model due to instability in the pressure wave after the initial load
cycle. The results of these models are presented in Appendix B4 and C4.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
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
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 78 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 63
4.6.6 Number of elements
It was shown in Section 4.4.4 that the number of elements N used in the analyses
influence the representation of the pressure wave. A denser mesh, i.e. a higher number
of elements, more accurately represents the analytically presumed pressure wave.
Therefore, the predicted spalling crack initiation according to McVay (1988), coincide
well with the one achieved from the numerical analysis for a large number of
elements, as can be seen in Table 4.9.
Table 4.9 Comparison of crack initiation positions for increasing number of
elements, N and predicted initiation by McVay (1988).
Number of elements, N [-] Crack initiation [mm] McVay [mm]
50 99 92
100 97 92
200 96 92
400 94 92
800 93 92
An increase in the number of elements also cause a fully open crack to develop after
fewer load cycles. Also, the distribution of strain localisation decrease with higher
mesh density to the point where the strain will localise in one element, as can be seen
in Figure 4.26(c) for N = 400. The fracture zone is kept at the reference value of 48
mm throughout the parametric study, and it could be argued that this is not reasonable
when the inelastic strain related to the crack opening localize in one or a few elements
only. In order for this fracture zone to be correct, the zone with inelastic strains has to
be 48 mm. This concept is further discussed and compared in Section 4.9.

-- 79 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	64
(1) (2)
(a)
(b)
(c)
Figure 4.26 (1) Distribution of inelastic strains and (2) corresponding material
response for number of elements (a) N=100, (b) N=50 and (c) N=400.
To conclude, although a higher mesh density converges to the presumed pressure
wave, a problem with instability in the numerical analysis can be observed for
increased number of elements if the fracture zone is kept constant. All results for the
damage and damage-plasticity models, relating to number of elements can be found in
Appendix B5 and C5.
4.6.7 Damping ratio
4.6.7.1 Plasticity model
The damping ratio, ξ is in the analysis used to determine the overall damping, C of the
system using equations (4.11) and (4.12). The overall damping, C is then considered
when the total energy loss of the system is determined for each time step. The
reference values for the damping ratio are ξ =1.4 for the plasticity model and ξ =1.0
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 80 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 65
for damage and damage-plasticity models. The variations of the damping ratio
considered in the parametric study are ξ = [0.1, 0.3, 0.7, 1.0 (1.4), 3.0]
As discussed in Section 4.4.3, a high damping ratio increase the discrepancy between
the analytical and theoretical pressure waves. However, if the damping ratio is too
low (ξ < ~0.5), oscillations occur in the pressure wave. These oscillations may result
in tensile stresses in the structure as the pressure wave propagates in compression, as
can be seen in Figure 4.7(2). If this is the case, the structure will be damaged in
tension as the wave propagates in compression, which is theoretically unrealistic and
the overall response becomes unstable. This is illustrated in Figure 4.27(b) where the
cracked zone extends to the far left side in the structure.
For a damping ratio ξ = 3.0, the resulting response is presented in Figure 4.27(c). The
increase in number of load cycles required to reach a fully developed crack can be
explained by the discrepancy in the pressure wave i.e. the structure is unloaded
earlier. Further, the time in which inelastic strain can develop decreases with
increasing damping ratio, causing the crack to be barely fully opened.

-- 81 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	66
(1) (2)
(a)
(b)
(c)
Figure 4.27 (1) Distribution of inelastic strains and (2) corresponding material
response for damping ratio (a) ξ = 1.4, (b) ξ = 0.1 and (c) ξ = 3.0.
4.6.7.2 Damage and damage-plasticity models
For low damping ratios, the same unstable response can be observed for damage and
damage-plasticity models. However, the damage-plasticity model shows an unstable
behaviour even with the reference damping ratio value ξ = 1.0, forming a second
crack at coordinate x ≈ 210 mm, see Figure 4.28(a). In order to keep the pressure
wave stable throughout the analysis, a high damping ratio is required (ξ > ~2.0). A
conclusion from this is that the pressure wave in the damage-plasticity model is more
inclined to be unstable than the plasticity model. All results relating to damping ratio
for the three material models can be found in Appendix B6 and C6.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 82 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 67
(1) (2)
(a)
(b)
Figure 4.28 (1) Distribution of inelastic strains and (2) corresponding material
response for damage-plasticity model with damping ratio (a) ξ = 1.0
and (b) ξ = 2.0.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 83 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	68
4.7 Non-linear strain softening
4.7.1 Material response
The post peak behavior of concrete in tension has until this point been studied for a
material with a linear strain softening curve. In reality, however, a more correct strain
softening of concrete in tension is better described by a bi-linear or exponential
decrease. For this reason, it is important to study and compare the structural behavior
when including such response as well.
There are different approaches on how to consider bi-linear and non-linear strain
softening in material models. One approach is to consistently use the same magnitude
of the ultimate crack opening wu throughout the different strain softening relations.
However, this will lead to a large discrepancy in fracture energy Gf resulting in
difficulties comparing the structural response.
Another approach is to consistently use the same fracture energy Gf for all different
strain softening relations, resulting in different values of the ultimate crack opening
wu and, thus, ultimate strain εu, see Figure 4.29. For the comparison in this section, the
fracture energy is set to the same magnitude as used in the analysis by Ekström, i.e.
Gf = 132 N/m. This fracture energy is then kept constant also when using the bi-linear
and exponential strain softening curves.
Figure 4.29 Illustration of linear, bi-linear and exponential strain softening using
the same fracture energy Gf.
Based on Johansson (2000), a reasonable bi-linear strain softening relation to consider
for concrete in tension is given in Figure 4.30. By adjusting the value of the ultimate
crack opening wu, it is possible to achieve a strain softening which corresponds to
fracture energy Gf = 132 N/m.
0
0.5
1
1.5
2
2.5
0 2 4 6 8
Stress,
 σ [MPa]
Total strain, εtot [10-3]
ε
Linear
Exponetial
Bi-linear

-- 84 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 69
MPa	2		ct	f
3
1,
ct
ct
f
f 
mm	26	.	0		u	w
6
1
u	w
w 
Figure 4.30 Illustration of bi-linear σ-w relation with corresponding input to
achieve Gf = 132 N/m.
Regarding the exponential strain softening, it can be described using equation (4.16)
as stress-crack opening relation,
  w	A
ct e	f	w 	
	
		
(4.16)
where A is a constant describing the shape of the curve. By adjusting the ultimate
crack opening wu and the coefficient A, it is possible to achieve the same fracture
energy over different σ(w) relations, see Figure 4.31.
Figure 4.31 Conceptual illustration of exponential σ-w relation with corresponding
coefficient A, and ultimate crack opening wu to maintain constant
fracture energy.
From both the bi-linear and the exponential strain softening curve it becomes clear
that the magnitude of the ultimate crack opening wu, and thus the ultimate strain εu,
increases as the strain softening becomes non-linear. Also seen in Figure 4.31 is that
the exponential curve is chosen to resemble the bi-linear curve as good as possible,
and that the ultimate crack opening wu is set to the same as for the bi-linear relation in
Figure 4.30.
0
0,5
1
1,5
2
2,5
0 0,1 0,2 0,3
Stress,
 σ [MPa]
Crack opening, w
fct
fct,1
w1 wu
w
σ
MPa	2		ct	f
-1
mm	677		A
mm	26	.	0		u	w
Exponetial
Bi-linear
σ
w
wu
fct
  w	A
ct e	f	w 	
	
	

-- 85 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	70
4.7.2 Plasticity model
By implementing both the bi-linear and the exponential strain softening curves for the
plasticity model, the structural response is found to be very similar to the response for
the linear strain softening curve. This is illustrated in Figure 4.32, where the
conclusion is that the spalling crack appears at about the same location for all three
different strain softening curves. Further, for both bi-linear and the exponential strain
softening, the number of load cycles it takes for the strain to localize decreases.
(1) (2)
(a)
(b)
(c)
Figure 4.32 (1) Distribution of inelastic strains and (2) corresponding material
response for a plasticity model using (a) linear, (b) bi-linear and
(c) exponential strain softening.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 1 3 5 7
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
2
4
6
8
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 1 3 5 7
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
2
4
6
8
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 1 3 5 7
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 86 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 71
Further, Table 4.10 summarizes the structural response for a plasticity model with
different strain softening curves.
Table 4.10 Crack initiation and final spalling crack, defined from the right side for
a plasticity model considering different strain softening relations.
Strain softening Crack initiation [mm] Spalling crack [mm]
Linear 97 140
Bi-linear 97 140
Exponential 97 140
4.7.3 Damage model
The structural response when implementing bi-linear and exponential strain for a
damage model is, like for the plasticity model, very similar to using a linear strain
softening curve. Neither the bi-linear nor the exponential strain softening curve yield
a structural response much different from the one when using a linear strain softening
curve. None of the model predicts a fully developed spalling crack, which is shown in
Figure 4.33. As for the plasticity model, Table 4.11 summarizes the location of crack
initiation and spalling crack for a damage model.
Table 4.11 Crack initiation and final spalling crack, defined from the right side for
a damage model considering different strain softening relations.
Strain softening Crack initiation [mm] Spalling crack [mm]
Linear 97 No spalling crack
Bi-linear 97 No spalling crack
Exponential 97 No spalling crack

-- 87 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	72
(1) (2)
(a)
(b)
(c)
Figure 4.33 (1) Distribution of inelastic strains and (2) corresponding material
response for a damage model using (a) linear, (b) bi-linear and (c)
exponential strain softening.
4.7.4 Damage-plasticity model
An important observation from both Section 4.7.2 and 4.7.3 is that a bi-linear strain
softening curve approximates an exponential very well, i.e. there is no noticeable
difference in the structural response when using a bi-linear instead of an exponential
relation. For this reason, the damage-plasticity model with linear strain softening is
only compared to a model with bi-linear strain softening. The results of this
comparison is shown in Figure 4.34, and shows that the location of the final spalling
crack is different between the two different models. The reason for this seems to be
that using a bi-linear strain softening, instead of a linear, results in earlier crack
localisation.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
2
4
6
8
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
2
4
6
8
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 88 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 73
(1) (2)
(a)
(b)
Figure 4.34 (1) Distribution of inelastic strains and (2) corresponding material
response for a damage-plasticity model using (a) linear and (b) bi-
linear strain softening.
Further, Table 4.12 summarizes crack initiation and final spalling crack for the two
different strain softening relations.
Table 4.12 Crack initiation and final spalling crack, defined from the right side for
a damage-plasticity model considering different strain softening
relations.
Strain softening Crack initiation [mm] Spalling crack [mm]
Linear 97 90
Bi-linear 97 140
4.8 Non-linear pressure-time relation
All results presented until this section has considered a pressure wave with linear
pressure decrease, which in analogy with Section 2.1.1 is a simplification since the
pressure wave in reality has an exponential decrease. Therefore, this section aims to
investigate the structural response when the load is non-linear. The effect on this is
studied with three different configurations of pressure-time relation and crack
softening, illustrated in Figure 4.35.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 1 3 5
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
2
4
6
8
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 1 3 5
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 89 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	74
(1) (2)
(a)
(b)
(c)
Figure 4.35 (1) Pressure-time relation and (2) crack softening for different
configurations used to study the effect of non-linear pressure wave
decrease.
The reason why the configuration shown in Figure 4.35(a) is included is because it
will be used to study the influence and compare the structural response when a non-
linear pressure-time relation is included in the analysis. To illustrate the results of
such analysis, a plasticity model is used for which the results are illustrated in
Figure 4.36. The conclusion of these results is that including a non-linear pressure
time gradient only will influence the location of crack initiation as well as the number
load cycles needed before the ultimate strain is reached. According to this
comparison, though, non-linear pressure time gradient will not influence the location
of the spalling crack significantly.
0
10
20
30
40
50
60
0.0 0.5 1.0 1.5
Pressure,
 
P [MPa]
Duration, tdur [ms]
0.0
0.5
1.0
1.5
2.0
2.5
0 0.1 0.2 0.3 0.4
Stress,
 σ [MPa]
Crack opening, w [mm]
0
10
20
30
40
50
60
0.0 0.5 1.0 1.5
Pressure,
 
P [MPa]
Duration, tdur [ms]
0.0
0.5
1.0
1.5
2.0
2.5
0 0.1 0.2 0.3 0.4
Stress,
 σ [MPa]
Crack opening, w [mm]
0
10
20
30
40
50
60
0.0 0.5 1.0 1.5
Pressure,
 
P [MPa]
Duration, tdur [ms]
0.0
0.5
1.0
1.5
2.0
2.5
0 0.1 0.2 0.3 0.4
Stress,
 σ [MPa]
Crack opening, w [mm]

-- 90 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 75
(1) (2)
(a)
(b)
(c)
Figure 4.36 (1) Distribution of inelastic strains and (2) corresponding material
response for (a) linear crack softening and linear pressure time
relation, (b) linear crack softening and non-linear pressure time
relation and (c) non-linear crack softening and non-linear pressure
time relation.
Further, as mentioned in Section 4.7, when using exponential crack softening it is
important to determine the ultimate strain beforehand, since it becomes infinite
without such limitations. This is why the ultimate strain in Figure 4.36(c) becomes
larger compared with the ultimate strain when using linear strain softening. A
summary of the results from this analysis is given in Table 4.13.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 1 3 5 7
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 1 3 5 7
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
2
4
6
8
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 1 3 5 7
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 91 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	76
Table 4.13 Crack initiation and final spalling crack for different configurations of
pressure time relation and crack softening. Comparison with
analytically predicted crack initiation according to McVay.
Pressure-time Crack softening Crack initiation [mm] Spalling crack [mm]
Linear Linear 97 (McVay 92) 140
Non-linear Linear 52 (McVay 37) 140
Non-linear Non-linear 52 (McVay 37) 140
It is reasonable that the location of crack initiation changes as the pressure time
gradient changes. Since a non-linear pressure time gradient is higher, compared with a
linear, at the blast wave front it will reach the tensile strength earlier after reflection.
However, the interesting observation in this section is that the location of the final
spalling crack does not change.
4.9 Fracture zone and fracture energy
The parametric study presented in Section 4.6 is performed without consideration to
the resulting fracture zone and fracture energy, i.e. in all results presented the fracture
zone and fracture energy is kept at the values used by Ekström. However, since the
post peak behavior of concrete in tension is a function of crack opening w, rather than
strain ε, it becomes a much more complicated subject to treat in the analysis. For this
reason, this section aims to describe the principle of how the fracture zone and the
fracture energy will influence the structural response in the analysis.
The results presented in this thesis are all based on distribution of inelastic strains in
the structure. These strains are, however, in reality crack openings distributed over a
certain distance, also known as the crack band width or fracture zone. The magnitude
of this distance is determined beforehand together with the fracture energy, which
means that the response in the fracture zone is assumed before the results are known.
Hence, the assumption is that the fracture energy Gf is to dissipate over a distance lfrac.
Therefore, the results need to be compared with the assumption in order for the results
to be considered as reliable. If the distribution of inelastic strains exceeds the crack
band width the model would represent more than one crack, alternatively the crack is
more ductile than assumed. In contrary, if the distribution of inelastic strains is lower
than the anticipated crack band width, the model would represent a more brittle
material than assumed.
To further describe this concept, the result from the plasticity model presented in
Section 4.6.2 is used. Figure 4.37 illustrates the discrepancy in the fracture zone lfrac
for different values of inelastic strains εinel. Further, Figure 4.37 shows that for small
strain values the fracture zone is larger than assumed, and smaller than assumed for
larger strain values. This is illustrated by studying the strain distribution zone after
one load cycle versus after six load cycles, compare lfrac,1 and lfrac,2. The consequence
of this is that it becomes difficult to determine whether the assumed fracture zone is
correct.

-- 92 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 77
mm	48	mm	100	1, 		frac	l
mm	48	mm	12	6, 		frac	l
Figure 4.37 Illustration of the inconsistency in fracture zone lfrac for varying values
of inelastic strains εinel.
A possible approach to determine whether the assumed fracture energy Gf
corresponds to the actual dissipated energy in the analysis is to convert the
distribution of inelastic strains to dissipated energy. This approach would be simple if
the fracture zone is constant, since the fracture energy then would correspond to the
area under the graph in Figure 4.37. However, with varying length lfrac of the fracture
zone this principle becomes more complicated. The strategy is therefore to subdivide
the distribution of inelastic strains in to segments with varying fracture zone, and
based on the strain increment and current fracture zone determine the dissipated
energy. By doing this for every strain value until the ultimate strain is reached, the
total energy is determined. This principle is illustrated in Figure 4.38, which shows a
subdivision with i different intervals.
(1) (2)
Figure 4.38 (1) Conceptual illustration of subdividing inelastic strains to determine
dissipated energy and (2) magnified view to illustrate how to determine
lmean for each subdivision.
For each subdivision, the increase in crack opening w is determined with
equation (4.17).
				 mean	l	w	
(4.17)
where
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
lfrac,6
lfrac,1
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
lmean,1
∆ε1
lmean,i
∆εi
0,0
0,2
0,4
0,6
0,8
1,0
50 100 150 200 250
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
∆ε1	lmax
lmin

-- 93 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	78
2
min	max l	l
lmean

	
(4.18)
Since the energy corresponds to the area under the σ-w graph, the mean stress for each
subdivision needs to be determined as well. For each strain increment, this stress
value is determined using the constitutive model for concrete in tension, see
Figure 4.39.
Figure 4.39 Illustration of how mean stress values are determined for each strain
interval.
Knowing both the mean stress value and the increase in crack opening, the total
dissipated energy is determined in accordance with equation (4.19).

		 n
i
i	i	calc	f w	G 1
,	
	
(4.19)
If there is a large discrepancy in the calculated fracture energy and the fracture energy
given as input in the analysis, it is reasonable to make adjustments in the numerical
input to reflect the results more accurately. Further, since the inelastic strains
distribute over different crack band widths for different strain values there will be a
discrepancy in the assumed and the calculated stress-crack opening relation.
This method on how to compare the numerical input with the results can be used to
make adjustments in the numerical input. For example, consider a case where the
calculated fracture energy exceeds the anticipated. Based on the anticipated fracture
energy and the calculated, it is possible to define a factor αerror which defines the
fraction between the anticipated fracture energy and the calculated, see
equation (4.20). This factor can then be used to adjust the fracture zone iteratively.
Such an iteration is summarized in Table 4.14 for the results presented by Ekström for
a plasticity model.
input	f
calc	f
error
G
G
,
,

		
(4.20)
0
1
2
0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
∆ε1 ∆εi
σ1
σi

-- 94 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 79
Table 4.14 Numerical iteration to determine and compare the calculated fracture
energy with the anticipated, and adjustments of the fracture zone.
Iteration	input	f	G ,	calc	f	G ,	error	
	input	frac	
l ,	input	frac	error	frac l	l ,	mod	, 	

1 132.0 122.2 0.926 48.00 44.44
2 132.0 128.4 0.973 44.44 43.22
3 132.0 130.9 0.991 43.22 42.87
4 132.0 131.7 0.997 42.87 42.77
As seen in Table 4.14, the calculated fracture energy Gf,calc converges towards the
anticipated as iterative adjustments are made to the fracture zone. For this specific
case, where Ekström assumes a fracture zone of 48 mm there is no substantial change
in the fracture zone as adjustments are made. However, the principle of this is
important to highlight. Further, the structural response when applying adjustments on
the fracture zone are seen in Figure 4.40, to which the conclusion is that the structural
response is more or less the same. The only noticeable difference is that the
magnitude of the ultimate strain increases as the fracture zone decreases, i.e. the
model reflects a more ductile material.
(1) (2)
Figure 4.40 Distribution of inelastic strains for (1) fracture zone by Ekström and
(2) adjusted fracture zone.
Further observations regarding the fracture zone and fracture energy is that when
inelastic strains distribute over inconsistent crack band widths, there is a substantial
discrepancy in the anticipated σ-w relation and the calculated σ-w relation. By using
the last iteration presented in Table 4.14 and illustrate how the stress relates to the
crack opening, one may compare the assumed σ-w relation with the numerical. This
comparison is shown in Figure 4.41, where the dashed line corresponds to the
assumed σ-w relation and the solid line corresponds to the calculated σ-w relation
based on the results.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]

-- 95 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	80
Figure 4.41 Comparison between predicted σ-w relation (dashed line) and
calculated σ-w relation (solid line). Illustration of where the actual
crack band width is larger and smaller than assumed.
4.9.1 Examples of fracture zone adjustments
4.9.1.1 Overview
Although the example presented in Section 4.9 only resulted in minor adjustments in
the fracture zone, i.e. from 48 mm to 43 mm, the principle of how to evaluate and
study the fracture energy and fracture zone is of importance. By once again studying
the results presented in the parametric study in Section 4.6, it becomes obvious that
adjustments in fracture zone is required in almost every presented result. Therefore,
the proposal in this thesis is that such adjustments are needed in order for the model to
be reliable. This section will present two examples which confirms the theory that
adjustments of the fracture zone might have large influence on the structural response.
These examples are taken from Section 4.6.2, where a plasticity model is considered
for different load durations. The first example is when the load is short with a duration
of tdur = 0.131 ms and the second example is when the load is long with duration
tdur = 1.965 ms.
4.9.1.2 Short load duration, fracture zone adjustment
When the load duration is decreased to a tenth of the original value, the structural
response changes drastically. This is described in Section 4.6.2, but also illustrated in
Figure 4.42 where the conclusion is that the assumption of a fracture zone of 48 mm
becomes inaccurate, see Figure 4.42(2).
0
1
2
3
0 0.05 0.1 0.15
Stress,
 σ [MPa]
Crack opening, w, [mm]
lfrac > linput
lfrac < linput
lfrac > lfrac,input
lfrac < lfrac,input

-- 96 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 81
(1) (2)
Figure 4.42 Comparison between structural response in terms of distribution of
inelastic strains for load duration (1) tdur = 1.31 ms and
(2) tdur = 0.131 ms.
For this reason, iteratively adjustments of the fracture zone is needed when the load
duration is decreased to tdur = 0.131 ms. Using the principle presented in Section 4.9,
the iterative process is summarized in Table 4.15.
Table 4.15 Numerical iteration to determine and compare the calculated fracture
energy with the anticipated, and adjustments of the fracture zone.
Iteration	input	f	G ,	calc	f	G ,	error	
	input	frac	
l ,	input	frac	error	frac l	l ,	mod	, 	

1 132.0 596.9 4.520 48.00 217.1
2 132.0 147.1 1.110 217.1 241.9
3 132.0 132.7 1.004 241.9 243.1
4 132.0 132.0 1.000 243.1 243.1
Further, Table 4.15 shows that the adjustment in fracture zone converges rather fast
towards approximately lfrac = 243 mm which corresponds well to the distribution of
inelastic strains seen in Figure 4.42(2). Changing the fracture zone corresponding to
the forth iteration in Table 4.15 results in a distribution of inelastic strains seen in
Figure 4.43(2). Although the overall structural response does not change that much,
the ultimate strain, i.e. the strain level indicating fully opened crack, decreases
drastically as the fracture zone increases.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
lfrac ≠ 48 mm

-- 97 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	82
(1) (2)
Figure 4.43 Distribution of inelastic strains for load duration tdur=0.131 ms for
(1) fracture zone by Ekström and (2) adjusted fracture zone.
In addition to comparing the structural response in terms of distribution of inelastic
strains, the predicted σ-w relation can be compared with the numerical σ-w relation in
analogy with Figure 4.41. Since the fracture zone is more consistent over different
strain values, compared with the case shown in Figure 4.42(1), the expectation is that
the anticipated σ-w relation and the calculated σ-w relation will resemble each other
quite well. This is also confirmed by studying Figure 4.44.
Figure 4.44 Comparison between predicted σ-w relation (dashed line) and
calculated σ-w relation (solid red line).
4.9.1.3 Long load duration, fracture zone adjustment
Although there is no drastic change in structural response in terms of inelastic strains
when increasing the load duration from tdur = 1.31 ms to tdur = 1.965 ms, the principle
of how to adjust the fracture zone is explained for such a case as well. Without
adjustments to the fracture zone, the structural response is illustrated in Figure 4.45
for the different load durations.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0
1
2
3
0 0.05 0.1 0.15
Stress,
 σ [MPa]
Crack opening, w, [mm]

-- 98 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 83
(1) (2)
Figure 4.45 Comparison between structural response in terms of distribution of
inelastic strains for load duration (1) tdur = 1.31 ms and (2) tdur =
1.965 ms.
Since the distribution of inelastic strains is over a smaller region, the prediction is that
the fracture zone should be chosen smaller than 48 mm. The iterative adjustment of
the fracture zone is summarized in Table 4.16.
Table 4.16 Numerical iteration to determine and compare the calculated fracture
energy with the anticipated, and adjustments of the fracture zone.
Iteration	input	f	G ,	calc	f	G ,	error	
	input	frac	
l ,	input	frac	error	frac l	l ,	mod	, 	

1 132.0 71.20 0.539 48.00 25.90
2 132.0 109.6 0.830 25.90 21.51
3 132.0 113.3 0.858 21.51 18.45
4 132.0 114.8 0.869 18.45 16.05
As seen by Table 4.16, the iterations does not converge after four iterations. The
reason for this can be seen by studying the structural response in terms of inelastic
strains when the adjustment is made. Upon adjusting the fracture zone in accordance
with the iterations in Table 4.16, the magnitude of the ultimate strain increases in such
way that no spalling crack is expected. This is illustrated in Figure 4.46 where the
distribution of inelastic strains are compared without and with adjustments of the
fracture zone.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]

-- 99 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	84
(1) (2)
Figure 4.46 Distribution of inelastic strains for load duration tdur = 1.965 ms for
(1) fracture zone by Ekström and (2) adjusted fracture zone.
An additional illustration that shows that no spalling crack is expected after adjusting
the length of the fracture zone is to study the σ-w relation and compare it with the
assumed σ-w relation. This is illustrated in Figure 4.47 which shows a large
discrepancy in predicted and calculated behaviour.
Figure 4.47 Comparison between predicted σ-w relation (dashed line) and
calculated σ-w relation (solid line).
The different behaviour after changing the fracture zone highlights the importance of
this aspect. If one were to study the results without adjusting the fracture zone, see
Figure 4.46(1), a spalling crack is expected. However, by adjusting the fracture zone
one would conclude that no spalling crack takes place.
4.10 Observations on how inelastic strains develop
4.10.1 Overview
The results in the parametric study in Section 4.6 are all based on how inelastic strains
distribute within a structure. The principle of how these strains develop during cyclic
loading/unloading was presented in Section 4.5. This principle is in agreement with
how Ekström reason that the spalling procedure takes place, i.e. a fully developed
spalling crack is not developed instantaneously nor in the location of crack initiation.
This section aims to further describe this procedure based on observations made
during the parametric study.
These observations are centred around the structural response after one load cycle, i.e.
for the time of crack initiation and corresponding distribution of inelastic strains. The
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0
1
2
3
0 0.05 0.1 0.15
Stress,
 σ [MPa]
Crack opening, w, [mm]

-- 100 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 85
model used to explain these observations is the reference plasticity model. The
distribution of inelastic strains after one load cycle for this model is illustrated in
Figure 4.48. The key discussion regarding this strain distribution is mainly based on
two observations;
 Why do inelastic strains not develop all the way to the far left in the structure
after the first load cycle?
 What is the main reason that strains develop successively a certain distance
from the coordinate of crack initiation?
These two questions can also be described with the illustrations in Figure 4.48, where
it can be concluded that inelastic strains are distributed approximately between
coordinates x ≈ 85 mm and x ≈ 200 mm, and is mostly developed at coordinate
x ≈ 145 mm.
(1) (2)
Figure 4.48 (1) Distribtuion of inelastic strains after one load cycle for the
reference model presented by Ekström (Plasticity) and (2) magnified
view.
4.10.2 Lack of inelastic strains at left side of the structure
The reason that inelastic strains are not developed all the way to the far left in the
structure is ascribed to the discrepancy in shock wave representation treated in
Section 4.4. This discrepancy leads to compressive unloading earlier than
theoretically expected. To illustrate that this actually is the case, it is possible to
compare the results when using more elements, i.e. use a more accurate depiction of
the shock wave. Such a comparison is illustrated in Figure 4.49, where it is seen that
the inelastic strains after one load cycle distribute differently when increasing the
number of elements.
One may, theoretically, assume that the shock wave alternates between tension and
compression over an infinitesimal distance. If this was the case it is reasonable to
assume that the inelastic strains after one load cycle would develop all the way to the
far left in the structure, i.e. the compressive unloading does not occur earlier than
expected. If this follows the principle in Figure 4.49, it might be possible to predict
how inelastic strains will distribute for an idealized shock. The red solid line in
Figure 4.49 illustrates a conceptual distribution of inelastic strains for an idealized
shock wave, i.e. using infinite number of elements for example. However, using to
many elements yield other complications in the structural response as discussed in
Section 4.6.6, why such results cannot be extracted to confirm this concept.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
0.0
0.2
0.4
0.6
0.8
1.0
80 130 180
Coordinate, x [mm]

-- 101 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	86
(1) (2)
Figure 4.49 (1) Comparison of inelastic strain distribution after one load cycle
using N = 50, N = 100, N = 200 and N = 400 elements and
(2) magnified view. A conceptual distribution of inelastic strains is also
predicted (red solid line) for an idealized shock wave.
The reason why a conceptual distribution of inelastic strains is illustrated in
Figure 4.49 is to highlight the difference in structural response that an idealized shock
wave might cause. Since the strain distribution after one load cycle will govern how
strains localize during the following load cycles, it might be possible that spalling is
expected somewhere else in the structure.
4.10.3 Successively development of inelastic strains
The other observation regarding how strains develop is that they are developed
successively after crack initiation. This can be illustrated by studying how inelastic
strains develop after crack initiation. As seen in Figure 4.50(2), the magnitude of the
inelastic strain, εinel,x, successively increases after crack initiation.
(1) (2)
Figure 4.50 (1) Distribution of inelastic strains after one load cycle and
(2) magnified view that illustrates that the magnitude of the inelastic
strains, εinel,x, successively increases after crack initiation
This observation, i.e. that the magnitude of the inelastic strain successively increases
after crack initiation, is the most fundamental within the hypothesis by Ekström. This
is the main reason that a spalling crack is expected elsewhere from the location of
crack initiation. A possible explanation of this structural response is that inelastic
strains can only develop if there is a driving force behind it. Ekström (2016) suggests
that the driving force for is the discrepancy between a linear elastic stress distribution
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
Prediction
400 elements
200 elements
100 elements
50 elements
0.0
0.2
0.4
0.6
0.8
1.0
80 130 180
Coordinate, x [mm]
Prediction
400 elements
200 elements
100 elements
50 elements
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
Crack
initiation
0.0
0.2
0.4
0.6
0.8
1.0
80 130 180
Coordinate, x [mm]
εinel,x

-- 102 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 87
and a stress distribution when including limitations in tensile strength. This principle
is illustrated in Figure 4.51 where ∆σ denotes the difference in stress between the
tensile strength and a linear elastic stress distribution.
Figure 4.51 Illustration of possible driving force, ∆σ, generating inelastic strains in
the structure.
By the reasoning in Figure 4.51, one may correctly argue that the highest driving
force ∆σ is found at the far left in the structure. Therefore, the magnitude of the
inelastic strains, after one load cycle, should be highest at this location. This
observation might give further support to the conceptual strain distribution illustrated
in Figure 4.49.
To further highlight that the concept given in Figure 4.51 seems to be accurate is to
actually compare the development of inelastic strains for different gradients of the
load. Figure 4.52 shows a comparison between the strain development gradients for
two different load durations. The comparison is between reference load duration
tdur,1 = 1.31 ms and when increasing the load duration with 50 % to tdur,2 = 1.965 ms.
The conclusion of Figure 4.52 is that the relation between the load durations and
corresponding gradients are more or less the same, which gives support to this
concept.
Figure 4.52 Comparison between strain development gradients for two different
load durations, tdur,1 = 1.31 ms and tdur,2 = 1.965 ms.
To conclude Section 4.10, two observations are important to describe in order to
understand the principle of how inelastic strains develop. They are related to the
gradients on both sides of the peak value of the inelastic strain, see Figure 4.53(2).
-10
-8
-6
-4
-2
0
2
4
0 100 200 300
Stress,
 
σ [MPa]
Coordinate, x [mm]
Tensile strength
Linear elastic
∆σ
σ > 0 Compression
σ < 0 Tension
0.0
0.2
0.4
0.6
0.8
1.0
80 130 180
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
tdur,1
Gradient, k1
tdur,2
Gradient, k2	k1
k2
667	.	0
ms	965	.	1
ms	31	.	1
2,
1, 	
dur
dur
t
t
66	.	0
10	16	.	3
10	08	.	2 3
3
1
2 	


 	

k
k

-- 103 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	88
(1) (2)
Figure 4.53 (1) Distribution of inelastic strains after one load cycle and
(2) magnified view that illustrates the gradients on both sides of the
peak strain, one is increasing and one is decreasing.
The reasons for the decrease (left side of the peak strain) and the increase (right side
of the peak strain) has been explained in Section 4.10.2 and Section 4.10.3
respectively. Therefore, the two questions stated in the beginning of Section 4.10 can
be answered as;
 The reason why inelastic strains do not develop to the far left in the structure
after the first load cycle is because the shock wave in the numerical analysis
alternates between tension and compression over a certain distance. This leads
to earlier unloading than theoretically expected, which explains the lack of
inelastic strains in the left part of the structure.
 The reason why strains develop successively a certain distance from the
coordinate of crack initiation is because of the driving force that governs the
development of inelastic strains. This driving force can be considered to be the
difference in stress between tensile strength and a linear elastic model. This
concept gives further support to the idea that inelastic strains should, after one
load cycle, develop to the far left in the structure if a perfect shock wave front
was used in the model.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
Crack
initiation
0.0
0.2
0.4
0.6
0.8
1.0
80 130 180
Coordinate, x [mm]
Peak
strain	Decrease Increase

-- 104 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 89
5 Discussion
5.1 Overview
The results presented in Chapter 4 emphasize the complexities in evaluating spalling
in concrete subjected to shock wave blast. By using a one dimensional finite element
model and study the distribution of inelastic strains under non-monotonic load, the
fracture location is predicted where the inelastic strain exceeds the ultimate strain.
However, there are several factors that needs further elaborations and discussion, why
this chapter includes detailed discussions for the most important results and
observations in Chapter 4. The treated subjects in this discussion are mainly focused
on the limitations in the model, the parametric study and the results presented when
including non-linear strain softening and pressure time gradient.
5.2 Model limitations
The first obvious limitation in the model is the incorrect representation of a shock
wave. It was shown in Section 4.4 that there is a large discrepancy in the numerical
and the analytical shock wave representation. However, in reality the shock wave
does not necessarily correspond to the analytically predicted, which is confirmed in
Chapter 3 where experimental setups are studied. This means that even in reality there
is a certain distance over which the stress wave equalizes, why the numerical
representation of a shock wave unintentionally might be represented quite well.
However, this is only true for a long load duration. As the load duration decreases the
discrepancy between numerical and analytically predicted shock wave increases.
Further, a substantial limitation in the model is the exclusion of material properties at
high strain rates. It was shown in Section 2.3.4 that concrete, at strain rates
corresponding to blast loading, shows a considerable increase in strength both in
tension and compression. This increase is mostly ascribed to structural effects, why
this phenomenon needs to be implemented in the material model. The exclusion of
high strain rate effects, together with the difficulties in shock wave representation, is
the main reason why the results are not considered to be comparable with
experimental results. This is a major limitation since there is no certain method of
verifying and comparing the results from the numerical model. Nevertheless, the
conceptual spalling response of a short load duration is similar to that obtained in
experiments; i.e. that a fully open crack develops close to where it is initiated
regardless of material model used.
5.3 Parametric study
The parametric study in Section 4.6 is performed in order to determine and compare
the structural response when input in the numerical model changes. One of the
important limitations of this parametric study is that only one parameter is varied at a
time. One may suggest that a parametric study should be more extensive, including
several different configurations of parameter variation, in order for the study to be
more reliable. Although this is true, it would extend this thesis substantially beyond
the scope of the study. This is why this part of the study is limited to one parameter
variation at a time.

-- 105 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	90
The first important conclusion of this section is that the material model used becomes
irrelevant for short load duration, i.e. the inelastic strains exceeds the ultimate strain
already after the first load cycle. Therefore, the concept that crack propagation in
concrete occurs during non-monotonic loading is only true if the load duration is long
enough.
The general complication found in the parametric study is how to interpret the results,
in terms of distribution of inelastic strains over the concrete element. All results in the
parametric study assumes a fracture zone of three times the maximum aggregate size
and corresponding fracture energy 132 N/m. As showed in Section 4.9, this
assumption is fairly accurate for the results presented by Ekström. However, when
changing parameters this assumption becomes inaccurate, why adjustments in fracture
zone are needed in almost every presented result in the parametric study. Therefore,
the preliminary results presented by Ekström cannot with certainty be said to repeat
themselves without such investigations. However, one important observation, which
seems to hold up throughout the parametric study, is that inelastic strains develops
during cyclic loading/unloading, rather than instantaneous as assumed in conventional
theory described by McVay (1988).
Two parameters that influence the results substantially is the mesh density and
damping ratio. It is mentioned in Section 4.4.5 that, with regard to shock wave
representation, it is favorable to have as many elements as possible and as low
damping ratio as possible. Under these circumstances, the numerical shock wave
representation is very similar to the analytical. However, upon studying the
distribution of inelastic strains for such models it becomes obvious that the results are
not reliable. For instance, regarding the mesh density, increasing the number of
elements eight times requires adjustment in fracture zone to give a less brittle
material. The same principle applies for low damping ratios, why such configurations
are not reliable without corresponding fracture zone adjustment.
The principle of how to adjust the fracture zone presented in Section 4.9 is a method
developed in this thesis and has not been confirmed nor compared with current
literature. However, the method has been developed during extensive discussions with
supervisor Morgan Johansson. Since detailed adjustments on the fracture zone are
necessary in most presented results in the parametric study, the suggestion is that such
adjustments are to be implemented in the numerical routine.
There is, however, some complications in using the presented method of fracture zone
adjustment, and one of which relates to how one interprets the case when more than
one zone has inelastic strains exceeding the ultimate strain. One may interpret the
result as that more than one spalling crack has developed, which means that fracture
zone adjustments should correspond to each spalling crack zone individually. On the
other hand, the numerical routine is not capable to represent the case where more than
one spalling crack takes place. The reason for this is that when the first spalling crack
takes place, a new free edge develops in the structure and the shock wave should,
therefore, be reflected on this new free edge instead of the original free edge. This
effect is not captured in the numerical model, why the results after the first spalling
crack takes place should be neglected when studying the distribution of inelastic
strains. It is on the other hand also possible to consider the option that several fracture
zones do not correspond to several spalling cracks, but rather one spalling crack
numerically smeared out over a larger region.

-- 106 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 91
5.4 Non-linear strain softening and non-linear pressure
time gradient
As treated in Section 4.7 and 4.8, a further development of the model presented by
Ekström is when including a non-linear strain softening as well as a non-linear
pressure time gradient. Regarding the implementation of non-linear strain softening
for a plasticity model, the results show earlier and more distinct crack localisation,
which is expected. By keeping constant fracture energy over different strain softening
curves, the material ductility changes which is illustrated in the results. Regarding the
exponential crack softening, which theoretically has infinite ultimate crack opening,
the ultimate crack opening is set to the same value as for the bi-linear strain softening
curve. By doing this, there is only negligible difference in structural response, why the
conclusion is that using bi-linear strain softening is a sufficient simplification of an
exponential strain softening curve.
In reality, both the strain softening curve and the pressure time gradient are non-
linear, why such a case can be considered as the most accurate when comparing with
reality. Since the pressure-time gradient at the time of crack initiation becomes larger
when the load decreases exponentially, the results confirms the prediction that
inelastic strains also develop faster. Although the development of inelastic strains
occurs at different time frames for different crack softening and pressure time
gradients, the important observation from this study is that the spalling crack for a
plasticity model appears at about the same place for all different configurations.
The distribution of inelastic strains for a damage model also coincide when including
a non-linear strain softening curve. Therefore, no spalling crack can be observed for
either damage models when changing the crack softening relation. For the damage-
plasticity model however, the expected spalling crack changes when the strain
softening becomes bi-linear, and is in the same region where a spalling crack is
expected for a pure plasticity model. For this reason, it seems as a coincidence that the
spalling crack appears where Ekström suggests for a damage-plasticity model, i.e. in
the same location as predicted by McVay, see Figure 4.18(c). It is important to once
again highlight the complications in choosing the fracture zone, since inconsistency in
the fracture zone for different strain values is present in all results in this thesis.

-- 107 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	92
6 Conclusions
6.1 Overview
In addition to the discussion given in Chapter 5, this chapter aims to summarize this
thesis project by presenting the most important results and conclusions. A general
conclusion is that spalling in concrete subjected to shock wave blast is a highly
complex subject to evaluate, which has been seen in Chapter 4. The main reason for
this is that there are many simplifications and model limitations, which leads to results
that are complicated to verify the reliability of.
6.2 Summary of results and observations
 The representation of a shock wave in the numerical analysis does not
coincide with the analytically predicted. Therefore, crack initiation occurs at a
different location than predicted using the conventional theory. This can be
adjusted by increasing the number of elements and adjusting the damping ratio
in the analysis, for which crack initiation converges towards the analytically
predicted. However, such changes result in other complications with how
inelastic strains distribute in the structure.
 For loads with short duration, the structural response in terms of distribution
of inelastic strains becomes the same regardless of whether a plasticity,
damage or damage-plasticity model is used. This is because the inelastic
strains exceed the ultimate strain already after the first load cycle; i.e. the path
used for unloading and reloading becomes irrelevant. Hence, the structural
response is highly dependent on the gradient of the pressure time relation.
 The results from experiments cannot be obtained using the current model. This
conclusion is mainly based on two factors. Firstly, the difficulties in achieving
the same shock wave as in experiments, which will lead to a discrepancy in
actual shock wave and numerical shock wave. This will certainly yield
different structural response as shown in the parametric study. Secondly, and
the most complicated, is the exclusion of strain rate effects in the numerical
model. Based on experiments to evaluate spalling, it was shown that the
material properties for concrete change drastically for strain rates
corresponding to blast loading.
 Including non-linear strain softening and non-linear pressure time relation will
not change the location of where a spalling crack is expected. Regarding non-
linear strain softening, it will only result in earlier strain localisation which
was expected. Further, a bi-linear strain softening curve is sufficient to be used
since the change in structural response is negligible. Regarding a non-linear
pressure time relation, the location of crack initiation changes due to the
increased gradient of the pressure time relation at the time of crack initiation.

-- 108 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 93
 One reason why the results from the numerical models throughout this entire
thesis is questioned is because the inconsistency and difficulties in how to
choose the fracture zone. For this reason, a principle method of how to adjust
the fracture zone is described in Section 4.9. However, some of the
complications still remains after such fracture zone adjustment. Therefore, this
subject is certainly something that needs further research and development.
6.3 Further studies and improvements
Based on the conclusions stated in Section 6.2, it becomes clear that further research
within this field is required. There will, however, always be a difficulty in working
with numerical models that simulate blast loading, due to the complexity in verifying
the results with experiments. Despite this fact, there are two major factors that need
further development and research.
Firstly, implementation of strain rate effects in the numerical model to more
accurately reflect the material response. This implementation is highly important for
the model to be considered as accurate. A strategy for such an implementation is to, in
the material model, include that the concrete strength is dependent on the strain rate.
So for a specific strain rate, the concrete strength is to be multiplied with the dynamic
increase factor, DIF.
Secondly, further implementation and investigations on how to treat the fracture zone.
The inconsistency in crack band width over different strain values is certainly
something that needs further attention and development. This thesis presents one
approach on how to adjust the fracture zone iteratively, which shows that in some
cases it is possible to achieve the same fracture energy and fracture zone as predicted.
However, this approach needs further development and its application and reliability
need to be checked.
Finally, it is important to perform further parameterisation of the numerical model
when including non-linearity in both crack softening and pressure time relation, since
those configurations only is treated and compared with Ekström’s results. After such a
parameterisation is performed, it can be valuable to develop a two dimensional model
where varying material properties can be implemented for different elements. With a
two dimensional model it is also possible to implement a shock wave with non-flat
pressure distribution, which resembles the reality more accurately.

-- 109 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	94

-- 110 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 95
7 Bibliography
Acosta, P.F. (2011) Overview of UFC 3-340-02 Structures to Resist the Effects of
Accidental Explosions. In Structures Congress 2011, pp. 1454-1469.
Bažant, Z.P. (2002) Concrete fracture models: testing and practice. In Engineering
Fracture Mechanics, Vol. 69, No. 2, pp. 165-205. New York: Pergamon Press.
Bischoff, P.H. & Perry, S.H. (1991) Compressive behaviour of concrete at high strain
rates. In Materials and Structures, Vol. 24, No. 6, pp. 425-450.
CEB (1993) CEB-FIP Model Code 1990, Design Code. Thomas Telford, Lausanne,
Switzerland.
Chen, W., Song, B. (2011) Split Hopkinson (Kolsky) Bar: Design, Testing and
Applications. Boston: Springer US.
Cormie, D., Mays, G. & Smith, P. (2009) Blast effects on buildings, 2nd Edition,
London: Thomas Telford.
Dilger, W.H., Kand,R. & Kowalczyk, R. (1984) Ductility of Plain and Confined
Concrete Under Different Strain Rates. ACI Journal, Jan-Feb, pp. 73-81.
Ekström, J. (2016) Spalling in concrete subjected to shock wave blast. In Engineering
Structures. Vol. 122, pp. 72-82.
Fortifikationsverket. (2011) Fortifikationsverkets kontruktionsregler FKR 2011.
Eskilstuna: Fortifikationsverket. (Dnr 4535/2011).
Gebekken, N., Greulich, S., & Pietzsch, A. (2001) Performance of Concrete Based
Building Materials Against Blast and Impact. Munich, Germany: University of
the Federal Armed Forces.
Gylltoft, K. (1983). Fracture mechanics models for fatigue in concrete structures.
Luleå: Luleå University of Thechnology. (PhD Thesis 1983:25D at Division of
Structural Engineering).
Johansson, M. (2000). Structural Behaviour in Concrete Frame Corners of Civil
Defence Shelters: Non-linear Finite Element Analyses and Experiments.
Gothenburg: Chalmers University of Technology. (PhD Thesis at Department
of Structural Engineering).
Johansson, M., & Laine, L. (2012a) Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning. Del 1: Last av luftstötvåg. Publ.no. MSB449. Karlstad:
Myndigheten för samhällsskydd och beredskap.
Johansson, M., & Laine, L. (2012b). Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning. Del 3: Kapacitet hos byggnader. Publ.no. MSB451.
Karlstad: Myndigheten för samhällsskydd och beredskap.
Johansson, M. (2013a) Fasadförstärkning mot impulslast (Strengthening of facade
subjected to impulse loading. In Swedish). Reinertsen Sverige AB, Selection
of document 12100471-01/0, 2013-10-10. Göteborg.
Johansson, M. (2013b) Kontaktdetonation (Contact detonation. In Swedish).
Reinertsen Sverige AB, Working material. Göteborg.

-- 111 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	96
Leppänen, J. (2004) Concrete Structures Subjected to Fragment Impacts. Gothenburg:
Chalmers University of Technology. (PhD Thesis 2004:04 at Department of
Structural Engineering and Mechanics).
Leppänen, J (2012) Splitterverkan. Publ.no. MSB345. Karlstad: Myndigheten för
samhällsskydd och beredskap.
Magnusson, J. (2007) Structural Concrete Elements Subjected to Air Blast Loading.
Stockholm: Royal Institute of Technology. (Licentiate Thesis at Department of
Civil and Architectural Engineering).
Malvar, L. J. & Ross, C. A. (1998) Review of strain rate effects for concrete in
tension. ACI Materials Journal, Vol. 95, No. 6, pp. 735-739.
McVay, M. K. (1988) Spall Damage of Concrete Structures. Vicksburg, Mississippi:
Structures Laboratory, Department of the Army, Waterways Experiment
Station, Corps of Engineers.
NCTC. (2014) Bomb Threat Stand-Off Distances Counterterrorism 2014 Calendar.
http://www.nctc.gov/site/technical/bomb_threat.html (2016-02-09)
Plos, M. (1996) Finite Element Analysis of Reinforced Concrete Structures.
Gothenburg: Chalmers University of Technology.
Reinhardt, H.W. & Cornelissen, H.A.W. (1984) Post-peak cyclic behaviour of
concrete in uniaxial tensile and alternating tensile and compressive loading. In
Cement and Concrete Research, Vol. 14, No. 2, pp. 263-270.
Ross, C.A., Jerome, D.M., Tedesco, J.W. & Hughes, M.L. (1996) Moisture and Strain
Rate Effects on Concrete Strength. ACI Materials Journal, Vol. 93, No. 3, pp.
293-300.
Schuler, H., Mayrhofer, C. & Thoma, K. (2006) Spall experiments for the
measurement of the tensile strength and fracture energy of concrete at high
strain rates. In International Journal of Impact Engineering, Vol. 32, No. 10,
pp. 1635-1650.
Seabold, R.B. (1970) Dynamic Shear Strength of Reinforced ConcreteBeams, Part III.
Technical Report No. R-695, U.S. Naval Civil Engineering Laboratory, Port
Hueneme, USA.
Sima, J.F., Roca, P. & Molins, C. (2008) Cyclic constitutive model for concrete. In
Engineering Structures, Vol. 30, No. 3, pp. 695-706.
Soroushian, P., Choi, K-B. & Alhamad, A. (1986) Dynamic Constitutive Behaviour of
Concrete. ACI Journal, Mar.-Apr., pp. 251-259.
Wang, F., Wan, Y. K., Chong, O. Y., Lim, C. H., & Lim, E. T. (2008) Reinforced
Concrete Slab Subjected to Close-in Explosion. LS-DYNA Anwenderforum,
pp. 21-28. Bamberg, Germany.
Wu, H., Zhang, Q., Huang, F. & Jin, Q. (2005) Experimental and numerical
investigation on the dynamic tensile strength of concrete. In International
Journal of Impact Engineering, Vol. 32, No. 1, pp. 605-617.
Yamaguchi, M., Murakami, K., Takeda, K. & Mitsui, Y. (2011) Blast Resistance of
Polyethylene Fiber Reinforced Concrete to Contact Detonation. In Journal of
Advanced Concrete Technology, Vol. 9, No. 1, pp. 63-71.

-- 112 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 97

-- 113 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	98
Appendix A Results for plasticity model
A.1 Load duration
(1) (2)
(a)
(b)
(c)
(d)
Figure A.1 (1) Distribution of inelastic strains and (2) corresponding material
response for load duration (a) tdur = 1.31 ms, (b) tdur = 0.0655 ms,
(c) tdur = 0.131 ms and (d) tdur = 0.655 ms.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 114 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 99
A.2 Concrete thickness
(1) (2)
(a)
(b)
(c)
(d)
Figure A.2 (1) Distribution of inelastic strains and (2) corresponding material
response for concrete thickness (a) L=300 mm, (b) L=150 mm,
(c) L=450 mm and (d) L=600 mm.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 50 100 150
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300 400
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 200 400 600
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 115 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	100
A.3 Peak pressure
(1) (2)
(a)
(b)
(c)
Figure A.3 (1) Distribution of inelastic strains and (2) corresponding material
response for peak pressure (a) Ppeak = 50.74 MPa, (b) Ppeak = 20 MPa
and (c) Ppeak = 70 MPa.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 116 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 101
A.4 Tensile strength
(1) (2)
(a)
(b)
(c)
(d)
Figure A.4 (1) Distribution of inelastic strains and (2) corresponding material
response for tensile strength (a) fct = 2 MPa, (b) fct = 0.5 MPa,
(c) fct = 1 MPa and (d) fct = 4 MPa.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
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
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 117 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	102
(1) (2)
(a)
Figure A.5 (1) Distribution of inelastic strains and (2) corresponding material
response for tensile strength (a) fct = 6 MPa.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-2
0
2
4
6
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 118 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 103
A.5 Number of elements
(1) (2)
(a)
(b)
(c)
(d)
Figure A.6 (1) Distribution of inelastic strains and (2) corresponding material
response for number of elements (a) N = 100, (b) N = 50, (c) N = 200
and (d) N = 400.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 119 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	104
(1) (2)
(a)
Figure A.7 (1) Distribution of inelastic strains and (2) corresponding material
response for number of elements (a) N = 800.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 120 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 105
A.6 Damping ratio
(1) (2)
(a)
(b)
(c)
(d)
Figure A.8 (1) Distribution of inelastic strains and (2) corresponding material
response for damping ratio a) ξ = 1.4, b) ξ = 0.1, c) ξ = 0.3 and
d) ξ = 0.7.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 121 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	106
(1) (2)
(a)
(b)
Figure A.9 (1) Distribution of inelastic strains and (2) corresponding material
response for damping (a) ξ =1.0 and (b) ξ =3.0.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 122 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 107

-- 123 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	108
Appendix B Results for damage model
B.1 Load duration
(1) (2)
(a)
(b)
(c)
(d)
Figure B.1 (1) Distribution of inelastic strains and (2) corresponding material
response for load duration (a) tdur = 1.31 ms, (b) tdur = 0.0655 ms,
(c) tdur = 0.131 ms and (d) tdur = 0.655 ms.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 124 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 109
B.2 Concrete thickness
(1) (2)
(a)
(b)
(c)
(d)
Figure B.2 (1) Distribution of inelastic strains and (2) corresponding material
response for concrete thickness (a) L = 300 mm, (b) L = 150 mm,
(c) L = 450 mm and (d) L = 600 mm.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 50 100 150
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300 400
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 200 400 600
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 125 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	110
B.3 Peak pressure
(1) (2)
(a)
(b)
(c)
Figure B.3 (1) Distribution of inelastic strains and (2) corresponding material
response for peak pressure (a) Ppeak = 50.74 MPa, (b) Ppeak = 20 MPa
and (c) Ppeak = 70 MPa.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 126 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 111
B.4 Tensile strength
(1) (2)
(a)
(b)
(c)
(d)
Figure B.4 (1) Distribution of inelastic strains and (2) corresponding material
response for tensile strength (a) fct = 2 MPa, (b) fct = 0.5 MPa,
(c) fct = 1 MPa and (d) fct = 4 MPa.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
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
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 127 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	112
B.5 Number of elements
(1) (2)
(a)
(b)
(c)
(d)
Figure B.5 (1) Distribution of inelastic strains and (2) corresponding material
response for number of elements (a) N = 100, (b) N = 50, (c) N = 200
and (d) N = 400.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 128 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 113
(1) (2)
(a)
Figure B.6 (1) Distribution of inelastic strains and (2) corresponding material
response for number of elements a) N = 800.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 129 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	114
B.6 Damping ratio
(1) (2)
(a)
(b)
(c)
(d)
Figure B.7 (1) Distribution of inelastic strains and (2) corresponding material
response for damping (a) ξ =1.0, (b) ξ =0.1, (c) ξ =0.3 and (d) ξ =0.7.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 130 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 115
(1) (2)
(a)
Figure B.8 (1) Distribution of inelastic strains and (2) corresponding material
response for damping (a) ξ = 3.0.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 131 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	116
Appendix C Results for damage-plasticity model
C.1 Load duration
(1) (2)
(a)
(b)
(c)
(d)
Figure C.1 (1) Distribution of inelastic strains and (2) corresponding material
response for load duration (a) tdur = 1.31 ms, (b) tdur = 0.0655 ms,
(c) tdur = 0.131 ms and (d) tdur = 0.655 ms.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 132 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 117
C.2 Concrete thickness
(1) (2)
(a)
(b)
(c)
(d)
Figure C.2 (1) Distribution of inelastic strains and (2) corresponding material
response for concrete thickness (a) L = 300 mm, (b) L = 150 mm,
(c) L = 450 mm and (d) L = 600 mm.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 50 100 150
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300 400
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 200 400 600
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 133 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	118
C.3 Peak pressure
(1) (2)
(a)
(b)
(c)
Figure C.3 (1) Distribution of inelastic strains and (2) corresponding material
response for peak stress (a) Ppeak = 50.74 MPa, (b) Ppeak = 20 MPa and
(c) Ppeak = 70 MPa.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 134 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 119
C.4 Tensile strength
(1) (2)
(a)
(b)
(c)
(d)
Figure C.4 (1) Distribution of inelastic strains and (2) corresponding material
response for tensile strength (a) fct = 2 MPa, (b) fct = 0.5 MPa,
(c) fct = 1 MPa and (d) fct = 4 MPa.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
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
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 135 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	120
C.5 Number of elements
(1) (2)
(a)
(b)
(c)
(d)
Figure C.5 (1) Distribution of inelastic strains and (2) corresponding material
response for number of elements (a) N = 100, (b) N = 50, (c) N = 200
and (d) N = 400.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 136 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 121
(1) (2)
(a)
Figure C.6 (1) Distribution of inelastic strains and (2) corresponding material
response for number of elements (a) N = 800.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 137 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	122
C.6 Damping ratio
(1) (2)
(a)
(b)
(c)
(d)
Figure C.7 (1) Distribution of inelastic strains and (2) corresponding material
response for damping (a) ξ = 1.0, (b) ξ = 0.1, (c) ξ = 0.3 and
(d) ξ = 0.7.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10
-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 138 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 123
(1) (2)
(a)
Figure C.8 (1) Distribution of inelastic strains and (2) corresponding material
response for damping (a) ξ = 3.0.
0
1
2
3
4
5
0 100 200 300
Inelastic strain,
 
εinel [10-3]
Coordinate, x [mm]
-4
-3
-2
-1
0
1
2
3
-1 0 1 2 3
Stress,
 σ [MPa]
Total strain, εtot [10-3]

-- 139 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	124
Appendix D MATLAB code
%==============================================%
% Model to evaluate spalling in concrete %
% (Plasticity model) %
% Written by Jonas Ekström 2014 %
% Modified by Erik Flinck & Martin Olsson 2016 %
%==============================================%
clc
clear all
close all
tic
% == Variable input variation ===============
yield_s=2; % Tensile strength [MPa]
Gf=132e-3; % Fracture energy [N/mm]
ml=16; % Material length [mm]
l_frac=3; % Length of fracture zone
L=300; % Lenght [mm]
n_el=100; % Number of elements
p_peak=50.74; % Peak pressure [MPa]
n_refl=20; % Number of reflections in analysis
dt_load=1.31e-3; % Load duration [s]
crit_p=0.3; % Factor for critical time step [0-1]
damp=1.4; % Damping factor
% == Elastic material prop =================
E=30e3; % Young's modulus [MPa]
rho=2.35e-9; % Concrete density [g/mm3]
A=1; % Element area [mm2]
% == Calculate ultimate crack opening ======
w_u=2*Gf/yield_s;
% == Calculate wave speed ==================
speed=sqrt(E/rho);
T1=L/speed;
if dt_load<2*T1
disp('Short load duration');
else
disp('Long load duration');
end
% == Number of L-elastic travels ===========
load_duration=dt_load/T1;
% == Numerical input =======================
x=linspace(0,L,n_el+1);
x_m=linspace(x(2)/2,L-x(2)/2,n_el);
n_nodes=size(x,2);
el_dat=[1:n_el;1:n_nodes-1;2:n_nodes]';
E_el=E*ones(n_el,1);
yield=ones(n_el,1)*200;
yield(:)=yield_s;
size_=n_nodes;

-- 140 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 125
% == Element properties ====================
L_el=L/n_el;
ki=E*A/L_el;
mi=L_el*A*rho;
M_el=mi*ones(n_nodes,1);
% == Calculate ultimate strain =============
epsu=w_u/(ml*l_frac);
% == Hardening parameters ==================
Et=-yield_s/(epsu-yield_s/E);
H=Et/(1-Et/E);
% == Time step =============================
dtc=L_el/sqrt(E/rho);
dt=crit_p*dtc;
% == Analysis length =======================
t_analysis=L/sqrt(E/rho)*n_refl;
n_ts=t_analysis/dt;
n_ts_loaddur=n_ts/n_refl*load_duration;
n_ts=ceil(n_ts);
% == Start input 0-config ==================
I=eye(size_);
vec=zeros(size_,1);
Ki=[ki -ki; -ki ki];
K=zeros(size_);
Mg=zeros(n_nodes);
M=Mg;
Kg=1*(zeros(n_nodes));
qg=zeros(n_nodes,1);
d=zeros(n_nodes,1);
sigprev=zeros(n_el,1);
sigcurr=zeros(n_el,1);
epsprev=zeros(n_el,1);
epsncurr=zeros(n_el,1);
epscurr=zeros(n_el,1);
deps=zeros(n_el,1);
dincr=d;
Ct=E*ones(n_el,1);
% == Mass matrix for spring and bar elements
%Mi=0.5*[mi 0; 0 mi];
Mi=1/6*[2*mi mi; mi 2*mi];
% == First assembly ========================
for i=1:n_el
m1=i;
m2=i+1;
xi=[x(i) x(i+1)]';
vi=[m1 m2]';
vg=i;
de=d(vi);
dincr_e=dincr(vi);
% == Tangent stiffness matrix =========
[sn,epsn,En]=pstress1d_BL(sigprev(i),epsprev(i),deps(i),E,...
Et,yield(i),epsu);

-- 141 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	126
sigcurr(i)=sn;
epscurr(i)=epsn;
Ct(i)=En;
nodes=el_dat(i,2:3);
B=1/L_el*[-1 1];
Kei=(A*L_el)*B'*Ct(i)*B;
qei=(A*L_el)*B'*sigcurr(i);
Kg(vi,vi)=Kg(vi,vi)+Kei;
qg(vi)=qg(vi)+qei;
Mi=M_el(i)/6*[2 1;1 2];
Mg(nodes,nodes)=Mg(nodes,nodes)+Mi;
end
sigprev=sigcurr;
epsprev=epscurr;
% == Damping of system =====================
delta=2/max(eig(inv(Mi)*Kei))^.5*damp;
C=delta*Kg;
% == Define acceleration, velocity etc. ====
a=vec;
v=vec;
v(1)=0;
u=vec;
f=zeros(n_el,1);
F=vec;
F(1)=p_peak;
t=0;
color=['b','r'];
Fint=zeros(n_el,n_ts+1);
w_an=zeros(n_el,n_ts+1);
strain=zeros(n_el,n_ts+1);
plastic_strain=zeros(n_el,n_ts+1);
count=0;
k=1;
loadprop=[];
for ii=1:n_ts
% == Pressure profile ==============
%n=0 Rectangular
%n=1 Triangular
%n>1 Exponential
n=1;
Ft=F*(1-ii/n_ts_loaddur)^n;
if Ft(1)>0
loadprop(k)=Ft(1);
k=k+1;
end
if (n_ts_loaddur-ii)/n_ts_loaddur<0
Ft=F*0;

-- 142 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 127
end
u_i=u(:,ii)+dt*v(:,ii)+0.5*dt^2*a(:,ii);
u(:,ii+1)=u_i; % Displacement vector u_n+1
qg=zeros(n_nodes,1);
for i=1:n_el
m1=i;
m2=i+1;
xi=[x(i) x(i+1)]';
vi=[m1 m2]';
vg=i;
de=u(vi,ii+1);
dincr_e=u(vi,ii+1)-u(vi,ii);
B=1/L_el*[-1 1];
deps(i)=B*dincr_e; % Strain increment vector e_n+1
strain(i,ii+1)=B*u(vi,ii+1);
%== Tangent stiffness matrix ==========
[sn,epsn,En,sigB,sig0]=pstress1d_BL(sigprev(i),epsprev(i),...
deps(i),E,Et,yield(i),epsu);
sigcurr(i)=sn;
epsncurr(i)=epsn;
nodes=el_dat(i,2:3);
qei=(A*L_el)*B'*sigcurr(i);
qg(vi)=qg(vi)+qei;
end
% == Input for next iteration =============
a_i=(Mg+dt/2*C)\(Ft-C*(v(:,ii)+dt/2*a(:,ii))-qg);
v_i=v(:,ii)+dt/2*(a(:,ii)+a_i);
a(:,ii+1)=a_i;
v(:,ii+1)=v_i;
t=[t, t(ii)+dt];
% == Input material response ==============
sigprev=sigcurr;
epsprev=epsncurr;
Fint(:,ii+1)=sigcurr;
plastic_strain(:,ii+1)=epsncurr;
prog=ceil(100*ii/n_ts);
if ismember(prog,4:4:100)
clc
fprintf('Progress: %1.0f%% \n',(ii/n_ts)*100)
end
end
FC=C*v;
toc
bb=[];
j=1;
for i=1:10:length(t);

-- 143 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	128
place=t(i)*T1;
tp=L*t(i)/T1;
if t(i)>T1
tp=L-L*(t(i)/T1-1);
if t(i)>2*T1
tp=L*(t(i)/T1-2);
if t(i)>3*T1
tp=L-L*(t(i)/T1-3);
end
end
end
subplot(4,1,1)
plot(x,u(:,i),'-go')
axis([0 L 0 max(max(u))])
hold on
plot(tp,0,'ro')
hold off
subplot(4,1,2)
plot(x,v(:,i),'-ro')
axis([0 L 0 max(max(v))])
subplot(4,1,3)
plot(x_m,Fint(:,i),'-o')
axis([0 L -5 4])
axis([0 L -50 5])
hold on
plot(x,FC(:,i),'k')
plot([0 L],[yield_s yield_s],'b--')
FF2(j)=getframe;
hold off
subplot(4,1,4)
plot(x_m,plastic_strain(:,i),'-o')
axis([0 L 0 2*epsu])
hold on
plot([0 L],[epsu epsu],'b')
hold off
j=j+1;
end
% == MOVIE ====================================
% movie2avi(FF2,'name','compression','none','fps',24)

-- 144 of 146 --

CHALMERS Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26 129
%==============================================%
% Function file for material model %
% (Plasticity model) %
% Written by Jonas Ekström 2014 %
% Modified by Erik Flinck & Martin Olsson 2016 %
%==============================================%
function [sn,epsn,En,sigB,sig0]=pstress1d_BL(so,epso,de,E,...
Et,yield,epsu)
H=Et/(1-Et/E);
if epso<epsu
sig0=yield+H*epso;
else
sig0=0;
end
sigB=so+E*de;
if (sigB)<=sig0
sn=sigB;
epsn=epso;
En=E;
%do nothing
else
sn=sigB-E/(E+H)*(sigB-sign(sigB)*sig0);
epsn=epso+(abs(sigB)-sig0)/(E+H);
En=Et;
end

-- 145 of 146 --

CHALMERS, Civil and Environmental Engineering, Master’s Thesis BOMX02-16-26	130

-- 146 of 146 --