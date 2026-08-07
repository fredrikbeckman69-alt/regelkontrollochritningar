---
title: "L04 112 Stress Wave Propagation Between Different Materials"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-112_stress-wave-propagation-between-different-materials.pdf"
fileType: "PDF"
keywords: ["skyddsrum","beräkning","explosion","splitter","layer","wave","velocity","stress"]
summary: "Stress Wave Propagation Between Different Materials Master’s thesis in the Master’s Programme Structural Engineering and Building Technology TIM SVENSSON FILIP TELL Department of Civil and Environmental Engineering and Department of Applied Mechan..."
---

Stress Wave Propagation Between
Different Materials
Master’s thesis in the Master’s Programme Structural Engineering and Building Technology
TIM SVENSSON
FILIP TELL
Department of Civil and Environmental Engineering and Department of Applied Mechanics
Division of Structural Engineering and Division of Material and Computational Mechanics
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2015
Master’s thesis 2015:73

-- 1 of 245 --



-- 2 of 245 --

MASTER’S THESIS 2015:73
Stress Wave Propagation Between
Different Materials
Master’s thesis in the Master’s Programme Structural Engineering and Building Technology
TIM SVENSSON
FILIP TELL
Department of Civil and Environmental Engineering and Department of Applied Mechanics
Division of Structural Engineering and Division of Material and Computational Mechanics
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2015

-- 3 of 245 --

Stress Wave Propagation Between
Different Materials
TIM SVENSSON
FILIP TELL
c	© TIM SVENSSON , FILIP TELL, 2015
Master’s thesis 2015:73
ISSN 1652-8557
Department of Civil and Environmental Engineering and Department of Applied Mechanics
Division of Structural Engineering and Division of Material and Computational Mechanics
Chalmers University of Technology
SE-412 96 Gothenburg
Sweden
Telephone: +46 (0)31-772 1000
Cover:
Rod divided in several layers and the transformed rod with equally many layers
Chalmers Reproservice
Gothenburg, Sweden 2015

-- 4 of 245 --

Stress Wave Propagation Between
Different Materials
Master’s thesis in the Master’s Programme Structural Engineering and Building Technology
TIM SVENSSON
FILIP TELL
Department of Civil and Environmental Engineering and Department of Applied Mechanics
Division of Structural Engineering and Division of Material and Computational Mechanics
Chalmers University of Technology
ABSTRACT
With the increasing threats from different terrorist organizations in the world, routines for civil protec-
tion are needed. Bomb shelters are a central part in protection of civilians and need to sustain high
loading for a short period of time, which make them complex to analyse. Today many of the bomb
shelters in Sweden are old and in some cases require some strengthening because of the increased
terrorist threat. These shelters are often located in present buildings and tunnels, which means lack of
space is a major problem.
A new technique, transformational elastodynamics are combined with the theory of wave propagation
in order to find a structure which can sustain high loads but is still a thin member. The aim was to test
the theories and design a small protective member. The thesis contains two parts, one literature study
and a part with case studies, where different designs are tested.
Several case-studies have been done in order to learn the theory and how to make different assump-
tions to get reasonable results. The results are positive, where a transformation from a 1 meter long
rod to a 0.5 meter long rod is possible, where both rods have the same dynamic response. Furthermore,
a case study is done where real materials are applied for the small rod and the calculations show
good results. The length of the transformed rod do not reach the length of 0.5 meter, but the length
decreases with about 15%. Adding more materials to the material database, makes it possible to get
closer to the theoretically calculated values, which can solve this problem.
The calculations are done on simple models and are not close to the reality. The models only consider
plane, one-dimensional elastic waves, which are simple, but represent the theory well. In order to
be able to implement the technique on real situations it is needed to test with the theory of plastic
waves and shock waves. It is also needed to consider a 2- or 3-dimensional system, which is more
complicated than the 1-dimensional system in this thesis. Laboratory testing is necessary in order to
verify the theories.
Keywords: Stress waves, Cloaking, Transformational elastodynamics, Reflections
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 i	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 i	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 i

-- 5 of 245 --

Utbredning av spänningsvågor mellan olika material
Examensarbete i Structural Engineering and Building Technology
TIM SVENSSON
FILIP TELL
Institutionen för Bygg- och Miljöteknik och Institutionen for Tillämpad Mekanik
Avdelningen för Konstruktionsteknik och Avdelningen för Material- och beräkningsmekanik
Chalmers tekniska högskola
SAMMANFATTNING
Med ett ökat hot från olika terroristorganisationer runt om i världen, är mänskligt skydd högt priori-
terat. Skyddsrum har en central roll för att skydda människor vid ett eventuellt hot och ska kunna
stå emot höga laster som verkar under en kort tidsperiod, vilket gör analysen svår. Idag är många
skyddsrum gamla och är i vissa fall i behov av reparation. De är ofta integrerade i byggnader och
andra konstruktioner så som tunnlar, vilket innebär att ytan för eventuella förstärkningar är liten.
Omdirigering av elastodynamiska vågor, kombinerad med den klassiska vågteorin, kan användas
för att kunna konstruera ett tunt effektivt skydd mot höga laster. Målet med examensarbetet var just
att designa ett tunt effektivt skydd mot höga laster. Rapporten består av en litteraturstudie och flera
fallstudier.
Flera fallstudier har gjorts för att få en ökad förståelse av teorin och hur olika antaganden kan göras
för att uppnå ett rimligt resultat. Resultaten har visat ett det är fullt möjligt att konstruera en stav som
är 0.5 meter med samma dynamiska respons som en 1 meter lång stav. Vid ett senare stadie i projektet
har riktiga material testats för den 0.5 meters långa staven och beräkningar för denna har visat goda
resultat. Längden uppnådde inte den önskade, men minskade med 15%. Om fler material tilläggs i
den databas som används är det möjligt att längden minskas ytterligare och där av komma närmare en
längd av 0.5 meter.
Beräkningar och modeller som gjorts är ett enklare fall med vissa antagande som inte följer verklig-
heten helt. Modellerna tar bara hänsyn till plana, 1-dimensionella vågor med ett elastiskt beteende,
men beräkningarna visar att transformationen är möjlig. För att kunna tillämpa teorin i verkligheten
är det därför viktigt att riktiga tester utförs, för att på så vis se hur plastiska deformationer och
chockvågor påverkar konstruktionen. Modellen behöver utökas till 2- och 3-dimensioner, vilket
efterliknar verkligheten på ett bättre sätt. Laborationstester är en metod för att ytterligare stärka teorin
som används i projektet.
Nyckelord: Omdirigering av elstodynamiska vågor, Reflektioner, Spänningsvågor
ii , Civil and Environmental Engineering, Master’s Thesis, 2015:73	ii , Civil and Environmental Engineering, Master’s Thesis, 2015:73	ii , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 6 of 245 --

CONTENTS
Abstract i
Sammanfattning ii
Contents iii
Preface vii
Nomenclature ix
1 Introduction 1
1.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.2 Purpose . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.3 Limitations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.4 Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
2 Material Behaviour 3
2.1 Elastic material behaviour . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2.2 Plastic material behaviour . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
3 Rigid Body Dynamics 6
3.1 Elastic impact . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
3.2 Plastic impact . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
4 Stress Waves 9
4.1 Different kinds of stress waves . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
4.1.1 Longitudinal waves . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
4.1.2 Transverse waves . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
4.1.3 Rayleigh waves . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
4.2 Elastic stress waves . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
4.2.1 Analysis of elastic stress waves . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
4.2.2 Energy loss and damping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
4.3 Elastic wave reflection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
4.3.1 Impact between two rods and elastic wave reflection . . . . . . . . . . . . . . . . . . 14
4.3.2 Common cases . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
4.3.3 Lagrange diagrams - Graphical description of reflections . . . . . . . . . . . . . . . . 18
4.3.4 Example of an elastic impact . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
4.4 Transformational elastodynamics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
4.4.1 Derivation of equations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
4.4.2 Example of finding material properties for a system with constant material properties . 23
4.5 Plastic stress wave . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
4.5.1 Plastic stress waves velocities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 iii	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 iii	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 iii

-- 7 of 245 --

5 Shock Waves 26
5.1 1D-shock wave propagation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
5.1.1 The conservation laws of shock waves . . . . . . . . . . . . . . . . . . . . . . . . . . 26
5.1.2 The equation of state . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
5.1.3 Hugoniot curve and Rayleigh line . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
5.1.4 Example of a plastic impact . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
6 Finite Element-Modelling of Dynamic Problems 32
6.1 Element types . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
7 Case Studies 33
7.1 Case study 1 - Transformation of rod with constant
material properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33
7.1.1 Calculations and modelling using LS-DYNA . . . . . . . . . . . . . . . . . . . . . . 35
7.1.2 Convergence study of the FEM-model . . . . . . . . . . . . . . . . . . . . . . . . . . 36
7.1.3 Damping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
7.2 Case study 2 - Transformation of rod with varying
material properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
7.2.1 Calculations and modelling using LS-DYNA . . . . . . . . . . . . . . . . . . . . . . 39
7.3 Case study 3 - Transformation of rod with varying
material properties and a non-linear ψ-function . . . . . . . . . . . . . . . . . . . . 40
7.3.1 LS-DYNA calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
7.3.2 Size of model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
7.4 Case study 4 - Transformation of rod with varying
material properties and ψ-function . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
7.4.1 LS-DYNA calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
7.4.2 Size of model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
7.5 Case study 5 - Design of rod with real materials . . . . . . . . . . . . . . . . . . . . . . 44
7.5.1 LS-DYNA . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
7.5.2 Size of model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
8 Results from the Case Studies 47
8.1 Results Case Study 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
8.1.1 Hand calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
8.1.2 LS-DYNA calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
8.1.3 Rod with Damping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
8.2 Results Case Study 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50
8.2.1 Hand calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50
8.2.2 LS-DYNA calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54
8.3 Results Case Study 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
8.3.1 Hand calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
8.3.2 LS-DYNA calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
8.4 Results Case Study 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
8.4.1 Hand calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
8.4.2 LS-DYNA calculations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
8.5 Results Case Study 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66
8.5.1 Calculation with linear ψ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67
iv , Civil and Environmental Engineering, Master’s Thesis, 2015:73	iv , Civil and Environmental Engineering, Master’s Thesis, 2015:73	iv , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 8 of 245 --

8.5.2 Calculation with non-linear ψ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74
9 Discussion 79
10 Conclusions 82
11 References 83
Appendix A Material properties and dynamic response calculations, Case study 1 A-1
Appendix B Material properties and dynamic response calculations, Case study 2 B-1
Appendix C Material properties and dynamic response calculations, Case study 3 C-1
Appendix D Material properties and dynamic response calculations, Case study 4 D-1
Appendix E Material properties and dynamic response calculations, Case study 5 E-1
Appendix F MATLAB code, Case study 5 F-1
Appendix G List of materials G-1
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 v	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 v	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 v

-- 9 of 245 --



-- 10 of 245 --

PREFACE
In this master’s thesis project the stress wave propagating between materials and the theory of trans-
formational elastodynamics have been studied. The project has been carried out between January
and June 2015 at the master’s program Structural Engineering and Building Technology at Chalmers
University of Technology.
The thesis is carried out as a collaboration between the Department of Civil and Environmental
Engineering and the Department of Applied Mechanics at the Divisions of Structural Engineering
and Material and Computational Mechanics at Chalmers University of Technology.
The authors would like to thank our examiners, Peter Olsson, Professor at the Division of Material
and Computational Mechanics, and Joosef Leppänen, Senior Lecturer at the Division of Structural
Engineering, for the help and support through the project. We would also like to thank our oppo-
nents, Jens Håkanssson and Henrik Wallerman, for good collaboration and valuable tips for our report.
Gothenburg, June 2015
Tim Svensson & Filip Tell
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 vii	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 vii	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 vii

-- 11 of 245 --



-- 12 of 245 --

NOMENCLATURE
Roman upper case letters
A Cross-sectional area
E Young’s modulus
E Energy
E0 Energy before an impact
Etan Tangent modulus of elasticity
̂
E Transformed Young’s modulus
G Shear modulus
I Dynamic impulse
P0 Pressure before a striking wave
P Pressure
Up Particle velocity
UpI Incident particle velocity
UpR Reflected particle velocity
UpT Transmitted particle velocity
Us Shock front velocity
S Shock front
Roman lower case letters
a Length before transformation
̂
a Length after transformation
c Longitudinal wave velocity
cT Transversal wave velocity
cp Plastic wave velocity
m Mass
l Length
u Displacement
x Coordinate in a coordinate system
̂
x Transformed coordinate in a coordinate system
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 ix	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 ix	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 ix

-- 13 of 245 --

Greek letters
σ Compressive stress
σI Incident stress wave
σR Reflected stress wave
σT Transmitted stress wave
σy Yield limit
σu Ultimate stress limit
ρ Material density in its original state
ρ0 Material density before a striking wave
̂
ρ Transformed material density
ε Strain
˙ε Strain rate
ψ(x) Transformation function
ν Velocity
υ Volume
x , Civil and Environmental Engineering, Master’s Thesis, 2015:73	x , Civil and Environmental Engineering, Master’s Thesis, 2015:73	x , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 14 of 245 --

1 Introduction
1.1 Background
With the increasing threats from different terrorist organizations in the world, routines for civil
protection are needed. Bomb shelters are a central part in protection of civilians and need to sustain
high loading for a short period of time, which make them complex to analyse. Today many of the
bomb shelters in Sweden are old, in some cases they require strengthening because of the increased
terrorist threat. These shelters are often located in present buildings and tunnels, which means lack of
space is a major problem. Therefore, the strengthening structure needs to be as small as possible in
order to retain the function of the shelter. Using different materials in many layers, the amplitude of a
stress wave created, e.g. a detonation from a bomb, can be decreased. This technique can be used to
strengthen structures. Furthermore, a new technique to decrease the thickness of the strengthening
structure is under development, where it is possible to hide stress waves in the structure.
Figure 1.1.1 shows material A with an incident velocity striking material B, thereby a stress wave is
created in both materials. This is a simplified model of a sandwich element used in calculations.
Figure 1.1.1: Example of impact between two materials.
1.2 Purpose
The purpose of this Master’s thesis was to increase the knowledge about wave propagation between
materials with different properties. The aim was to design a small strengthening structure which
decrease the amplitude of the stress wave by combining the theory of wave propagation combined
with the theory of transformational elastodynamics.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 1

-- 15 of 245 --

1.3 Limitations
The literature survey describes varies types of waves that may impinge up on a structure. However,
only one-dimensional plane elastic stress waves will be considered in the case studies, these plane
elastic stress waves are in some sense simpler compared to other types of waves. The material
properties used in the case studies are fictional. However, a small study with real material properties
is carried out. Furthermore, calculations are only performed on one system, free in one end and fixed
on the other end.
1.4 Method
The project consists of two parts, one literature survey and a case study with FE-analysis and hand-
calculations. The literature survey will cover the theory behind wave propagation and in addition bring
knowledge how to perform hand calculations in order to get accurate results. The FE-analysis is made
by means of the software LS-DYNA, which is a code for solving highly non-linear transient problems.
In order to verify the results from the FE-analysis, hand calculations are carried out and compared
with the results from LS-DYNA. Furthermore, MATLAB is used when the calculations require many
iterations to find the results and Mathematica is used in order to find different transformation functions
which fulfil specific requirements.
2 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	2 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	2 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 16 of 245 --

2 Material Behaviour
The materials have an influence on how a structure behaves. There are different kinds of approxima-
tions used when analysing the material response, this is done in order to simplify the calculations
and the structural analysis. This chapter explains the basic material models often used in structural
analysis.
2.1 Elastic material behaviour
An elastic behaviour is defined as the linear relation between stress σ , and strain ε. The constitutive
relation between the stress and strain are defined by Hooke’s law, see equation (2.1.1) The slope
of the curve is characterized as Young’s modulus E, which is the resistance to deformation of the
material. A typical stress-strain curve is presented in Figure 2.1.1.
σ = Eε (2.1.1)
The linear relation means that a material undergoing deformation due to loads will return to its
original state when the loads are removed. However, this linear relation is only valid for small strains
and stresses, larger stresses results in permanent damage to the material. Different materials have
different properties for stress and strain, which give a different value for Young’s modulus.
Figure 2.1.1: Stress-strain curve for an elastic material.
2.2 Plastic material behaviour
A plastic deformation is an irreversible action, which means that the elongation or shortening of the
material is permanent. There are three important points on the stress strain-curve, the yield limit σy,
where the material will start to yield, ultimate stress limit σu, which is the point of the maximum
stress and then fracture occur, see Figure 2.2.1. After the yield limit is reached the material can still
take a higher stress, but the deformation will be permanent. This behaviour is called strain hardening.
The material will be able to take more load until the ultimate capacity is reached. After that point
the material will have large strains which results in a neck in the material, this means that a stress
concentration is formed in this neck. When the stresses are too high in this point the material will
eventually break. The plastic behaviour for most materials is non-linear which make the analyses
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 3	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 3	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 3

-- 17 of 245 --

in the plastic zone difficult. If the material is loaded above the yield limit the material parameters
and geometry are changed; next time the material is loaded it will not behave in the same manner as
before. However, there are simplifications which can be made in order to make calculations easier.
Figure 2.2.1: Real relation between stresses and strains.
One simplification which is commonly used is an ideal plastic material model. The material is then un-
deformed until the yield limit is reached, see Figure 2.2.2. The model does not take strain-hardening
into account and the strains can be infinitely large without fracture, which is not a realistic behaviour.
Figure 2.2.2: Ideal plastic relation.
4 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	4 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	4 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 18 of 245 --

Another material model which is commonly used is a bi-linear approximation. Instead of having a
constant value as stress-strain relation, it is now represented with two linear curves with different
slopes. The first curve represents the elastic behaviour of the material and is defined until the yield
limit. After the yield limit a second curve is defined with a different slope which represents the plastic
behaviour, see Figure 2.2.3. This is a more correct model since it takes strain hardening into account.
Figure 2.2.3: Stress-strain bi-linear behaviour.
For dynamic analysis it is often more convenient to use strain-rate instead of the strain. Strain rate is
the change of strain with time during an impact load which affects the elastic behaviour, as well as
the plastic behaviour (Meyer, 1994). High strain rates occur during a short loading time and a low
strain rate when the loading time is long (e.g. creep and shrinkage), see Table 2.2.1. The history of
the strain rate also affects the plastic behaviour.
Table 2.2.1: Strain rates for different phenomena, data from (Meyer, 1994).
Type of load Strain rate [s−1]
Creep ∼ 10−8 − 10−6
Static ∼ 10−5
Earthquake ∼ 10−3 − 10−2
Hard impact ∼ 1 − 101
Blast ∼ 102 − 103
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 5	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 5	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 5

-- 19 of 245 --

3 Rigid Body Dynamics
Rigid body dynamics studies the movement of interconnected bodies under action of external forces.
Rigid bodies are assumed to not deform, which is an approximation that makes the system easier
compared to reality (since no body is perfectly rigid). Partial differential equations which are hard to
solve by hand, are not needed to be considered in this present context, for a rigid body system.
3.1 Elastic impact
The behaviour of an elastic impact can be described with a one dimensional system of two bodies A
and B, moving straight in the x-direction, see Figure 3.1.1. When the two bodies collide the dynamics
of the rigid body system can be defined with the equation of motion. Each body have mass and
velocity before the impact and are denoted as mA, mB, vAb, vBb. If these parameters are known, mass
and velocity of the bodies after impact can be calculated with equation (3.1.1) and (3.1.2) (subscript a
stands for after impact and b for before impact) (Leppänen, 2012).
vAa = vBb(mA − mB) + 2vBbmB
mA + mB
(3.1.1)
vBa = 2vAbmA + vBb(mB − mA)
mA + mB
(3.1.2)
Figure 3.1.1: Elastic impact of body A and B.
6 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	6 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	6 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 20 of 245 --

Three different cases in this example can occur:
• mA < mB, means that after impact body A moves with a velocity to the left
• mA = mB, motion of body A stops and all momentum is transferred into body B, which moves
to the right
• mA > mB, both bodies moves to the right, but body B moves with a higher velocity
The velocity of body A cannot become higher after impact. Body B cannot get a negative velocity
(Leppänen, 2012).
3.2 Plastic impact
A plastic impact means that two bodies (from the last example) will get stuck together after impact,
see Figure 3.2.1. When the two bodies collide they will get stuck together and move away with the
same velocity. With equation (3.2.1) the velocity for plastic impact can be obtain (Leppänen, 2012).
va = mAvAb + mBvBb
mA + mB
(3.2.1)
Figure 3.2.1: Plastic impact of body A and B.
In some cases the materials can be somewhere between plastic and elastic behaviour, this can be
determined by using Newtons law of restitution, see equation (3.2.2).
e = c+
c− = vBa − vAa
vAb − vBb
(3.2.2)
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 7	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 7	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 7

-- 21 of 245 --

where c+ and c− are the normal components of relative velocity at the contact point before and after
collision of the two bodies. When these parameters vary the e-value can vary from 0 to 1, which
follows:
• 0 = elastic impact
• 1 = full plastic impact
In order to get accurate results for an impact between or close to elastic or plastic behaviour, the value
obtained from Newton’s law of restitution e, can be inserted into the equation (3.2.1) and written as
in equation (3.2.3) and (3.2.4) (Leppänen, 2012):
vAa = mAe(vAb − vBb) + mAvAb + mBvBb
mA + mB
(3.2.3)
vBa = mBe(vBb − vAb) + mAvAb + mBvBb
mA + mB
(3.2.4)
8 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	8 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	8 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 22 of 245 --

4 Stress Waves
Waves which cause deformation in a material are often called stress waves. Stress waves can be created
from several different sources, for example impact between materials, explosions and earthquakes.
The difference between static loading and impact loading in terms of stresses is huge (Leppänen,
2012). The variance in stress levels is caused by the time difference when the load is applied, e.g.
a static load acts on the structure for a long time. The dynamic loading acts on the structure for a
very short time span (microseconds) with a magnitude much higher than for the static case. The short
impulse loading causes the material to behave differently than normal, which makes this phenomena
hard to analyse and the mathematics quickly becomes complex.
As mentioned before, classic rigid body dynamics describes the impact between bodies. If a stress
wave is created it is hard to solve it by the traditional rigid body dynamics theory (Leppänen, 2012).
Therefore, instead of analysing the problem in terms of kinetic energy, it is possible to analyse the
problem in terms of wave propagation. The wave which propagates through the material can cause
both plastic and elastic deformations, if the velocity of the impact is high a shock wave is created,
which is a dangerous wave that can cause large deformations.
4.1 Different kinds of stress waves
There are different kinds of stress waves which can propagate through a material. They are char-
acterised by the motion of the particles in the material (Meyer, 1994). Common stress waves are
presented below and in following sections.
• Longitudinal waves, also called pressure waves (P-wave)
• Transverse waves, also called shear waves (S-wave)
• Rayleigh waves, a type of surface wave
4.1.1 Longitudinal waves
A longitudinal wave is created when the particles in the material are moving in the same direction
as the incident wave. As seen in Figure 4.1.1 the particles come closer to each other and cause
compressive stresses in the material. Furthermore, tensile stresses may occur when a wave propagate
through a material, the particles then move away from each other (Meyer, 1994). Depending on the
boundary conditions a wave can change from a compression wave to a tension wave when the wave hit
the boundary (Macaulay, 1987). For materials which have different properties in compression/tension
this phenomena can be important, for example a tensile wave in concrete, which is weak in tensile,
can cause the concrete to spall on the reflected surface.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 9	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 9	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 9

-- 23 of 245 --

Figure 4.1.1: Plane longitudinal wave.
4.1.2 Transverse waves
A transverse wave is created when the particles in the material are moving perpendicular to the wave
front, see Figure 4.1.2. The transverse waves cause shear stresses in the material which the waves
propagate through (Meyer, 1994). Therefore, the wave is dangerous for a material with low shear
modulus.
Figure 4.1.2: Plane transverse wave.
4.1.3 Rayleigh waves
A Rayleigh wave is a destructive wave that acts on the surface on the material. The Rayleigh wave
propagates in an elliptical counter clockwise way, which results in a up- and down motion combined
with a back and forth motion, see Figure 4.1.3 (Meyer, 1994). This behaviour makes this wave
destructive, since the amplitude of the wave decreases a lot slower than other waves amplitude. The
wave has a high energy on the surface but as it propagate inwards in the material the energy of the
wave decays exponentially.
10 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	10 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	10 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 24 of 245 --

Figure 4.1.3: Picture of a Rayleigh wave. The wave is elliptical and not circular as in the figure.
4.2 Elastic stress waves
An elastic stress wave is created when the impact velocity is low; this implies that stresses in the
material are below the yield strength. This means that there will not be any permanent damage to the
material.
It is not only the motion of the particles that differentiate the waves; the propagation velocities are
different for different waves and materials. The velocity of an elastic wave is determined by Young’s
modulus, or the shear modulus G, depending on which type of wave propagate through the material
(Macaulay, 1987). The density ρ, is also an important material parameter. Different wave velocities
for some common materials can be seen in Table 4.2.1. As seen in the table there is a small difference
between the velocities for steel, aluminum and concrete, even though there is a large difference
between the densities and Young’s modulus. Another interesting value in Table 4.2.1 is the wave
velocity in the air, it is very low compared to solid materials. A transversal wave cannot travel through
air since the air cannot take any shear stresses.
Table 4.2.1: Wave velocities in common materials, data taken from (Macaulay, 1987), wave velocity
for concrete calculated by author.
Elastic wave velocities (m/s)
Steel Aluminium Iron Copper Glass Concrete C30/37 Air
Longitudinal, c 5000 5000 3900 3650 5250 3530 340
Transversal, cT 3200 3050 2450 2250 3200 2230 -
4.2.1 Analysis of elastic stress waves
Propagating waves are complex phenomena which quickly results in complex models and mathematics.
An elastic wave is a rather simple case since the material behaves linearly. Consider an impact between
two rods, one rod in rest and one approaching with a velocity v, see Figure 4.2.1, it is possible to
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 11	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 11	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 11

-- 25 of 245 --

derive the wave equation for the one-dimensional case (Leppänen, 2002). This analysis is not valid
for plastic waves or shock waves since the material behaviour is no longer linear.
Figure 4.2.1: One-dimensional model of wave propagating through a rod (Leppänen, 2002).
By considering Newton’s second law ∑ F = ma, constitutive laws, equilibrium and compatibility of
the rod, see Figure 4.2.1, it is possible to derive the one-dimensional wave equation (Leppänen, 2002).
Using Newton’s second law the partial differential equation (4.2.1) can be obtained.
A∂ σxx
∂ x δ x = ρAδ x ∂ 2u
∂t2 (4.2.1)
A is the cross-sectional area, ρ is the density of the rods, σ is the compressive stress, ∂ σ /∂ x is
the stress variation in the specimen and ∂ 2u/∂t2 is the acceleration where u is the displacement in
x-direction (Leppänen, 2002) and (Macaulay, 1987). The constitutive relation, Hooke’s law is defined
in equation (4.2.2).
σxx = Eεxx where εxx = ∂ u
∂x
(4.2.2)
By using equation (4.2.2) in equation (4.2.1), it is possible to formulate the final form of the wave
equation.
ρ ∂ 2u
∂t2 = E ∂ 2u
∂ x2 (4.2.3)
Equation (4.2.3) can be rewritten as equation (4.2.4).
∂ 2u
∂t2 = c2 ∂ 2u
∂ x2 (4.2.4)
c is the velocity of the propagating wave. In equation (4.2.5) the expression for longitudinal c and
transversal wave velocity cT , is stated.
c = ±
√
E
ρ and cT = ±
√
G
ρ (4.2.5)
The general solution to equation (4.2.4) is presented in equation (4.2.6) (Macaulay, 1987).
u = f (x − c0t) + F(x + c0t) (4.2.6)
The solution represents two waves propagating in the opposite direction with equal wave velocity c0.
f and F describe the shape of the two waves which propagate in the material (Meyer, 1994). Both f
12 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	12 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	12 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 26 of 245 --

and F are dependent on the initial conditions of the system. If there is only one wave propagating in
the material F can be set to zero.
In two- or three dimensions the mathematics becomes more complex. However, for the linear elastic
case the general partial differential equation for three dimensions can be written as in equation (4.2.7).
∂ σi j
∂ x j
= ρ ∂ 2ui
∂t2 (4.2.7)
The equation system, (4.2.7), will result in the wave equation when the stress is replaced with the
strain (Meyer, 1994). To replace the stress with strain the generalized Hooke’s law for an isotropic
material in a triaxial state of stress is used. The propagation of both transversal and longitudinal
waves can be derived from this expression.
The longitudinal and transversal wave velocities in three dimensions can be described with equation
(4.2.8).
c =
√
E(1 − ν)
(1 + ν)(1 − 2ν)ρ and cT = cL
√
(1 − 2ν)
2(1 − ν) (4.2.8)
The velocity equations are slightly different from the one-dimensional formulation, the difference is
that the velocity also depends on Poisson’s ratio because the stress waves also generate shear stresses
in the material (Macaulay, 1987).
4.2.2 Energy loss and damping
When a plane one dimensional stress wave travels through a linear elastic material the stress amplitude
of the wave is constant. However, in reality, the material will absorb energy during the propagation
of the wave. This causes an energy loss and the stress amplitude decrease. An example of this
phenomenon is an impact on a long steel rod which will create a stress wave. If the rod is fixed on the
other side the wave will reflect and in time the stress wave will decay to zero as a result of the energy
loss.
Energy loss can be treated as a damping mechanism which can be included in the numerical analysis
in different ways. One way to consider damping is to choose the damping force to be proportional
to the particle velocity, this is called viscous damping. Hysteric damping, sometimes known as
structural damping, is another way to treat material damping, where the damping force varies with
the displacement, but in phase with the velocity. However, in some cases the damping is negligible
because during an impulse load the damping has a small effect in the maximal deformation in the
first oscillation. Furthermore, the length of the medium can be too short and the damping is therefore
neglected (Macaulay, 1987).
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 13	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 13	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 13

-- 27 of 245 --

4.3 Elastic wave reflection
When a wave goes from one material into another, the wave will be reflected and refracted at the
boundary of the material. The wave can be divided into three parts, incident wave (I), transmitted
wave (T ), and a reflected wave (R) (Meyer, 1994). These phenomena occur because the second
medium has different acoustic impedance and the system wants to be in momentum balance. The
acoustic impedance is how much movement the wave affect the material, and if the impedance differs
between the materials a reflected wave is created in order to achieve balance (Lempriere, 2002). A
greater difference in acoustic impedance between materials results in a larger reflected wave and a
less transmitted wave. Furthermore, the sum of the reflected wave and transmitted wave should be
equal to the incident wave. The acoustic impedance is the product of the density, and the elastic wave
velocity, of the material, see Figure 4.3.1.
Figure 4.3.1: Incident wave, reflected waves, transmitted wave.
4.3.1 Impact between two rods and elastic wave reflection
It has been shown with rigid body dynamics how two bodies behave upon impact. However, it is
complicated to solve these problems with this theory since there is no information about the inner
energy of the system. Therefore, a more convenient way to solve the problem is to use the theory
of wave propagation. A derivation of this theory is presented in this section in order to get an
understanding how these problems can be treated.
Figure 4.3.2 describes how the particle- and wave velocity travels through the material upon impact.
The wave velocity is always higher than the particle velocity Up. After impact the incident wave is
divided in two new waves, one reflected which goes back in to the first material and one transmitted
wave which propagate into the next material.
14 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	14 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	14 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 28 of 245 --

Figure 4.3.2: Impact between two rods, a) Incident wave b) Reflected and transmitted stresses c)
Reflected and transmitted particle velocities.
The expression for the incident, reflected and transmitted stress and particle velocity are derived from
the impulse equation, see equation (4.3.1). The impulse I, is equal to the change of momentum in the
system (Leppänen, 2012).
I =
∫ t
0
F(t)dt = m
∫ v
0
dv = mve − mv0 (4.3.1)
Before the wave has passed in any given point the velocity in that point is equal to zero. This means
that when the wave has passed this given point the change in particle velocity is equal to the particle
velocity Up, this can be written as in equation (4.3.2).
I = m∆Up = mUp (4.3.2)
By using Navier’s formula and by writing the mass as m = ρV = ρAdx. Equation (4.3.2) can be
rewritten. Equation (4.3.2) can then be stated as in equation (4.3.3).
σ Adt = ρAdxUp (4.3.3)
Solving σ in equation (4.3.3), results in equation (4.3.4).
σ = ρ dx
dt Up = ρcUp and c = dx
dt (4.3.4)
As seen in equation (4.3.4) the stress no longer depends on the cross-sectional area of the rod, it
depends on the density of the material, wave velocity and the particle velocity.
In the one-dimensional case there is no energy loss during propagation of the wave, which means that
when the wave goes from material A to material B there is no energy loss. Therefore, the incident and
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 15	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 15	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 15

-- 29 of 245 --

reflected stress need to be equal to the transmitted stress (Leppänen, 2012). This phenomenon can be
written as in equation (4.3.5).
σI + σR = σT (4.3.5)
The particle velocity needs to fulfil the same condition as the transmitted and reflected stress which
results in the statement in equation (4.3.6).
UpI +UpR = UpT (4.3.6)
The acoustic impedance is often known, by using the equations above it is possible to calculate the
stress or the particle velocity for the system in Figure 4.3.2 (Macaulay, 1987).
From equation (4.3.4), combined with the known acoustic impedance it is possible to calculate the
incident, reflected and transmitted particle velocity for the system in Figure 4.3.2.
UpI = σI
ρAcA
(4.3.7)
UpR = −σR
ρAcA
(4.3.8)
UpT = σT
ρBcB
(4.3.9)
The incident, transmitted and reflected stress can be calculated by using equation (4.3.7), (4.3.8) and
(4.3.9) in equation (4.3.2).
σI
ρAcA
− σR
ρAcA
= σT
ρBcB
(4.3.10)
From equation (4.3.10), it is easy to see that the stresses in the material are highly dependent on
the acoustic impedance, (ρc). It is also possible to rewrite the expression so that the reflected and
transmitted stress is a function of the incident stress, see equation (4.3.11) and (4.3.12).
σT = 2ρBcB
ρAcA + ρBcB
· σI (4.3.11)
σR = ρBcB − ρAcA
ρBcB + ρAcA
· σI (4.3.12)
16 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	16 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	16 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 30 of 245 --

4.3.2 Common cases
There are some common cases of reflections for certain boundary conditions, they will always behave
in the same way. If the wave encounters a free surface, then ρBcB is equal to zero (Meyer, 1994).
σT = 0 · σI (4.3.13)
From equation (4.3.13) it is easy to see that no stress is transmitted to the surroundings, the reflected
stress will be equally large as the incident stress and it changes sign, see equation (4.3.14). The
change of sign means that the stress goes from a compression wave to a tensile wave or vice versa.
σR = −1 · σI (4.3.14)
Another common case is when the wave hit a fixed boundary. This means that ρBcB goes toward
infinity.
σT = 2ρBcB
ρAcA + ρBcB
· σI ≈ 2 · σI (4.3.15)
Equation (4.3.15) shows that with fixed boundary the transmitted stress will be twice the incident
stress which hits the boundary. Equation (4.3.16) shows that the reflected stress will be the same as
the incident stress. It does not change sign which implies, if it is a compression wave that hit the
boundary, a compression wave will reflect back. This is also valid for tensile waves.
σR =ρBcB − ρAcA
ρBcB + ρAcA
· σI ≈ 1 · σI (4.3.16)
An interface between two different materials can be considered less or more as a fixed boundary
depending on the material properties. Which means that the transmitted and reflected stress will
behave differently for different materials. The particle velocity behaves similar as the stress wave and
can be derived in the same manner as the stresses (Meyers, 1994).
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 17	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 17	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 17

-- 31 of 245 --

4.3.3 Lagrange diagrams - Graphical description of reflections
Lagrange diagrams are an easy way to graphically show how a one-dimensional wave propagates
through a material. The horizontal axis represents the coordinates of the stress wave front in the
material and vertical axis is the time variable. Different impact phenomena can be illustrated, for
example a rod collides with a wall or two rods collides with each other. Figure 4.3.3 illustrates an
incident rod A travelling with a velocity v0, in the x-direction against a second rod B with same
length and material properties. At first the stress is zero but, at t0, they collide and a compression
wave is created in each rod that travels until it reach the free surface, at time t1, it reflects as a tension
wave and generates a new particle velocity as it simultaneously moves in the other direction. This
will continue and adding more time steps t, in which reflections will occur and make waves change
between compression and tension (Zukas, 1990).
Figure 4.3.3: Lagrange diagram for the example above.
18 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	18 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	18 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 32 of 245 --

4.3.4 Example of an elastic impact
The theory of an elastic impact has been described in recent sections. This section will show an
example of an elastic impact on a rod, with its equations, assumptions and hand calculations.
Figure 4.3.4 illustrates a rod with two different homogeneous materials, steel and aluminum, see
material parameters in Table (4.3.1). The rod is fixed at one end and free at the other end and subjected
to a force (500 N ) which represent the impact load impulse. The materials have the same length and
cross-section area (645 mm2).
Figure 4.3.4: Rod subjected to a force that represents the impact.
The two materials have different impedance, which determine the amplitude of transmitted and
reflected stresses. This means higher impedance difference between materials result in a greater
reflection wave and a lower transmitted wave. As mentioned before the reason of this is because the
two materials have to achieve equilibrium.
First the stresses will be calculated from the equation (4.3.11) and (4.3.12). After the stresses have
been determined the particle velocity can be calculated from equation (4.3.7), (4.3.8) and (4.3.9).
Table 4.3.1: Material parameters for steel and aluminium.
Steel (A) Aluminum (B) Unit
Density, ρ 7850 2700 [kg/m3]
Young’s modulus, E 210 69 [GPa]
Wave velocity, c 5172 5055 [m/s]
Impedance, ρc 234 70.3 [kg/sm2]
σI = F
A = 0.77MPa (4.3.17)
σT = 2ρBcB
ρAcA + ρBcB
σI = 0.39 MPa (4.3.18)
σR = ρBcB − ρAcA
ρBcB + ρACA
σI = −0.38 MPa (4.3.19)
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 19	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 19	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 19

-- 33 of 245 --

UpI = σI
ρACA
= 0.019 m/s (4.3.20)
UpR = −σR
ρACA
= 9.4 · 10−3m/s (4.3.21)
UpT = σT
ρBCB
= 0.029 m/s (4.3.22)
Because ρBcB < ρAcA the reflected wave will have the same sign as the incident wave. It can also be
observed that the transmitted wave has increased and the sum of the reflected and transmitted waves
are equal to the incident wave. This means that the system has momentum balance.
If three or even four materials have an increase of impedance in each layer, the procedure would just
repeat itself and as a result the transmitted wave in the layer would increase.
If the materials change places, hence aluminium will be material (A) and steel will be material (B),
the wave velocity will be the opposite. The total stress and deflection will still be the same.
4.4 Transformational elastodynamics
With the theory of transformational elastodynamics it is possible to hide or redirect stress waves in a
solid material 1. The concept is that the wave does not feel the object which the wave hit or passes
through; or just have a smaller impact. In structural engineering this is a very interesting concept,
since it then can be possible to build protection walls which are very thin but still have the same
structural response as a massive concrete wall. This concept can be widened to a lot of different areas
such as helmets, cars, etc.; especially where space is a large factor.
This section will show how the theory of elastodynamics can be used in one-dimension. In two- and
three dimensions the wave can be guided around an object which not is possible in one-dimension.
Furthermore, in the section it is also presented how the material parameters can be derived in order to
receive the desirable behaviour of the structure that will be designed.
4.4.1 Derivation of equations
The main advantage by using the theory of transformational elastodynamics in one-dimension is that it
is possible to create small structures which have the same dynamic response as a much larger structure.
Figure 4.4.1 presents two one-dimensional systems (system A and system B) with varying material
properties (E, ρ), through the specimens. The aim of this method is to find material properties for
specimen B so that the specimen has the same dynamic response as specimen A.
The systems are hit by an incident wave at t = 0 . The thickness of specimen A is equal to a and the
thickness of specimen B is equal tô a, wherê a is smaller than a. The coordinate system is changed
1Peter Olsson (Professor, Chalmers University of Technology)
20 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	20 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	20 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 34 of 245 --

from x tô x between the systems. Boundary conditions are equal for both the system where the end to
the left is free and the end to the right is fixed. The materials properties in specimen A are E0 and ρ0
and for specimen B they are still unknown.
The height of the specimens in Figure 4.4.1 is considered as infinite since it is only the variation along
the x-axis that is of interest. The incident wave hit the specimen without any inclination.
Figure 4.4.1: Two systems with varying material properties and different lengths.
The wave equation for the system A is presented in equation (4.4.1) and the wave equation for system
B is presented in equation (4.4.2).
∂
∂ x
(
E(x)∂ u(x,t)
∂ x
)
− ρ(x)∂ 2u(x,t)
∂t2 = 0 (4.4.1)
∂
∂̂ x
(̂
E(̂x)∂̂ u
∂̂ x
)
−̂ ρ(̂x)∂ 2̂ u
∂̂ t2 = 0 (4.4.2)
The boundary and initial conditions are the same for both the systems; they need to be the same in
order to have the same dynamic response. The conditions are presented in equation (4.4.3)-(4.4.6).
E(0)∂ u(0,t)
∂ x = h(t), t ≥ 0 (4.4.3)
u(a,t) = 0, t ≥ 0 (4.4.4)
u(x, 0) = 0, 0 ≤ x ≤ a (4.4.5)
∂ u(x, 0)
∂t = 0, 0 ≤ x ≤ a (4.4.6)
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 21	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 21	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 21

-- 35 of 245 --

The transformation from the x coordinate tô x coordinates for any point in the system can be written
as:
̂
x = ψ(x) (4.4.7)
x = ψ−1(̂x) (4.4.8)
The expressions in equation (4.4.7) and (4.4.8) can be derived using the chain rule, see equation
(4.4.9)
∂
∂ x = ∂̂ x
∂ x
∂
∂̂ x = ψ′(ψ−1(̂x)) ∂
∂̂ x = β (̂x) ∂
∂̂ x (4.4.9)
Where β (x) is equal to:
β (x) = ψ′(ψ−1(̂x)) (4.4.10)
ψ(x) is an almost arbitrary function, it needs to fulfil ψ(a) =̂ a and ψ(̂a) = a. The function needs to
be invertible and sufficiently differentiable together with its inverse for all points in the system. Apart
from these requirements the function can be chosen freely 2.
The differential equation (4.4.1), for the first system can now be rewritten in terms of̂ x, see equation
(4.4.11).
∂
∂̂ x
(
E(ψ−1(̂x))β (̂x)∂ u(ψ−1(̂x),t)
∂̂ x
)
− ρ(ψ−1(̂x))
β (̂x)
∂ 2u(ψ−1(̂x),t)
∂t2 = 0 (4.4.11)
From equation (4.4.11) it is possible to see the relation between the original material properties for
system A and the new properties for system B. The material properties for system B can be calculated
using equation (4.4.12) and (4.4.13). It can also be noticed that the displacements for both systems
will be equal.
̂
E(̂x) = β (̂x) · E(ψ−1(̂x)) (4.4.12)
̂
ρ(̂x) = 1
β (̂x) · ρ(ψ−1(̂x)) (4.4.13)
From these expressions above it is possible to transform the first system to infinite number of systems.
The new system needs to fulfil the same boundary and initial conditions as for the original system.
With these requirements fulfilled the dynamic response is the same for both systems.̂ a and a are
chosen as arbitrary. The transformation works in both ways, which means that this concept can
also be used to make the structure thicker than the original design. Furthermore, this also means it
is theoretical possibility to make the transformed structure infinitely thin, but in reality there is no
material properties which can fulfil the requirements for that transformation.
2Peter Olsson (Professor Chalmers University of Technology)
22 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	22 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	22 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 36 of 245 --

4.4.2 Example of finding material properties for a system with constant material properties
The material properties of the system are defined as Young’s modulus equal to E0, and the density
equal to ρ0 . The aim with the calculations is to find new material properties which can be used in a
rod half of the original size. The transformation function is chosen freely and is presented in equation
(4.4.14) and the inverse in equation (4.4.15).
Figure 4.4.2 shows two rods, the one to the left (rod A) is 1 meter long and the one to the right (rod B)
is 0.5 meter long, the aim is to find material properties (E and ρ) so the shorter rod behaves exactly
the same as the longer rod. Rod A have constant material properties which are E0 and ρ0.
Figure 4.4.2: Transformation of a rod with constant material properties.
The transformation function is chosen as a linear function, see equation (4.4.14). ψ−1(x) is presented
in equation (4.4.15), which is needed in order to calculate β (x). The inverse function of ψ can also
be used to transform the material properties to its original state.
ψ(x) =̂ a
a · x (4.4.14)
ψ−1(̂x) = a
̂
a · x (4.4.15)
Using equation (4.4.9) and the fact that a is equal to 1 meter and̂ a is equal to 0.5 meter, β can be
determined and it is presented in equation (4.4.16). β (x) is needed in order to determine Young’s
modulus and density for the small rod.
β (x) =̂ a
a = 0.5
1 (4.4.16)
When β is known it is possible to find the new material properties for the second system, using
equation (4.4.12) and (4.4.13). The results are shown in equation (4.4.17) and (4.4.18).
̂
E(̂x) = β (̂x) · E(ψ−1(̂x)) = 0.5E0 (4.4.17)
̂
ρ(̂x) = 1
β (̂x) · ρ(ψ−1(̂x)) = 2ρ0 (4.4.18)
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 23	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 23	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 23

-- 37 of 245 --

The wave velocity for the new system is then:
̂
c =
√
0.5E0
2ρ = 1
2
√
E0
ρ0
(4.4.19)
For the original system the wave velocity is equal to:
c =
√
E0
ρ0
(4.4.20)
This shows that the wave velocity is half for the smaller rod and it will still have the same dynamic
response as the original rod. It can also be confirmed that all ρ and E which fulfil the requirement
of halving the velocity will work for the transformation. This is controlled by the transformation
function and by changing it, the material parameters can be very different from the ones here. All the
results from this example are presented in Chapter 7.
4.5 Plastic stress wave
For static loading plastic deformation will occur if the material starts to yield, this is also the case for
dynamic loading. This means that when a dynamic pulse with an amplitude effect the stress in the
material, forcing it to reach its elastic limit, the material starts to yield and the plastic behaviour starts
(Meyer, 1994). This behaviour will create deformations of the (ductile solid) material, which can vary
with stress distribution, previous loading history and strain (Meyer, 1994) and (Macaulay, 1987).
The yield stress varies with the strain rate, which varies with the kind of load that is applied, e.g. a
shock wave results in very high strain rate, time-dependent behaviour for metals in the elastic-plastic
zone is often negligible.
Figure 4.5.1: Graph to the right Dynamic yield stress vs static yield stress, linear behaviour, to the
left non-linear behaviour.
24 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	24 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	24 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 38 of 245 --

4.5.1 Plastic stress waves velocities
For an elastic wave the wave velocity will be constant because in the elastic region the stress-strain
relation is linear. However, in the plastic region this is not the case, the stress-strain relationship will
instead be non-linear. This means that velocity of plastic waves is lower than elastic waves because
the velocity decrease with decreasing slope and strain hardening, see equation (4.5.1).
(dσ
dε
)
el
>
(dσ
dε
)
pl
(4.5.1)
The plastic wave velocity is stated in equation (4.5.2).
cp =
√(dσ /dε
ρ
)
(4.5.2)
Materials have a critical velocity, which means that at some point the velocity of the materials is too
high and will therefore reach its load carrying capacity and break. For brittle materials this usually
occurs in the elastic deformation, and for ductile materials in the plastic deformation.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 25	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 25	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 25

-- 39 of 245 --

5 Shock Waves
A shock wave travels with a supersonic speed through a medium and a disturbance front (shock front)
will be created because higher amplitude of the front travels faster than the lower amplitude region.
Compared to other waves (e.g. sound waves) shock waves result in a high amount of pressure during
a short period of time and has a nonlinear discontinuous behaviour. The theory of shock waves is
restricted to higher pressures and (Meyer, 1994) shows some basic assumptions that can be made:
• A shock front is a surface of discontinuity
• The shear modulus of the material is set to zero
• Gravitational and heat conduction at the shock front are negligible
• No elastoplastic behaviour can occur
Usually a shock wave is created from an explosion or blast, but also from an impact between materials,
this means that the energy content drastically changes during a short period of time. The discontinuity
from a shock wave will affect pressure, temperature and density in the medium (Johansson, 2012).
5.1 1D-shock wave propagation
A shock wave in one-dimensional configuration is described with the conservation equations and the
equation of state, the EOS. Below, a simple example will be explained in order to get an understanding
of the theory for the conservation laws of shock waves.
5.1.1 The conservation laws of shock waves
The fundamental shock wave equations are derived from the conservation laws of shock waves
and can be described with a thermodynamic system (Lifshitz, 2001). Consider a cylinder with a
cross-section area A, contained with gas-pressure P0, and a density ρ0, see Figure 5.1.1(a). The right
side is closed and the left side is attached to a piston. The system is first at rest, at time t1, the piston
moves, which entails a constant finite velocity Up, in x-direction. The gas close to the piston becomes
in motion and a shock front S, is formed where the shock front velocity Us, is larger than the particle
velocity, moving forward in the x-direction, see Figure 5.1.1(b). Consequently the pressure P, density
ρ, and energy intensity E, of the compressed gas are now changed. Note that subscript 0 refers to the
initial state ahead of the shock wave. In (Lifshitz, 2001) the conservation laws of shock wave are
stated. The three laws are:
• Conservation of mass
• Conservation of momentum
• Conservation of energy
26 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	26 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	26 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 40 of 245 --

Figure 5.1.1: Thermodynamic system with two steps, (a) before the piston moves and (b) when it has
started to move.
Conservation of mass
At time t = t1, the piston has moved a distance of s1,p = Upt1, and the shock front has moved a
distance of s1,s = Ust1. From this the mass equation can be stated as in equation (5.1.1).
ρ0Us = ρ(Us −Up) (5.1.1)
Note that the law requires that the rate of mass flow through the shock front equals the rate of mass
flow exiting the shock.
Conservation of momentum
Momentum is equal to the impulse that is applied to the system and is defined as the product of mass
and velocity (Meyer, 1994). The driving force from the piston to the gas causing it to provide a
momentum per unit time. From this the equation of momentum can be stated, see equation (5.1.2),
where the initial gas-pressure is defined as P0 and the pressure of its compressed as P.
P − P0 = ρ0UsUp (5.1.2)
ρ0Us is usually called the shock impedance.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 27	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 27	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 27

-- 41 of 245 --

Conservation of energy
The external force, which in this case is the compressive work that the piston does to the gas, should
be equal to the change of the potential and kinetic energy of the gas. The energy gained by the gas
in unit time is the sum of potential energy and the kinetic energy. The equation for conservation of
energy is stated in equation (5.1.3).
PUp = ρ0Us(1
2U2
p + E − E0) (5.1.3)
5.1.2 The equation of state
The equations (5.1.1) - (5.1.3) contains five variables:
• Pressure P
• Particle velocity Up
• Shock velocity Us
• Energy E
• Density ρ
In the following example, three equations have been calculated; mass, momentum and energy. To be
able to determine all five parameters as a function of one of them, an EOS is needed. It will also be
the forth equation to obtain information about the shock wave parameters. For example the EOS can
describe the linear relation between the particle velocity and the shock front velocity, as illustrated in
equation (5.1.4) (Leppänen, 2012).
Us = c0 + S1Up + S2U2
p + ... (5.1.4)
c0 is the wave velocity for a material at zero pressure with no shear strength, S1 and S2, are empirical
parameters (experimentally determined material constants) which can be found in tables. Usually S2
is equal to zero for metals, therefore equation (5.1.4) can be written as in equation (5.1.5).
Us = c0 + S1Up (5.1.5)
Without any modifications, the equation does not apply for materials that has a high porosity or
undergoes phase transformation because it is then no longer linear (Meyer, 1994).
28 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	28 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	28 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 42 of 245 --

5.1.3 Hugoniot curve and Rayleigh line
The relation between the pressure and density or volume υ, behind the shock wave can be described
by the Hugoniot curve. Us and Up eliminated from the conservation of energy (5.1.3), and density
is replaced with volume υ = 1/ρ, the Hugoniot equation is presented in equation (5.1.6) (Lifshitz,
2001).
E − E0 = 1
2(P + P0)(υ − υ0) (5.1.6)
The volume has an uncompressed and a compressed state. In order to plot the Hugoniot curve in its
plane it is of great importance to know the initial state (υ0, P0), of the gas and its EOS.
Figure 5.1.2 shows the Hugoniot curve and as can be seen a line is drawn from (υ0, P0) to (υ, P), this
is called the Rayleigh line. The Rayleigh line is defined as in equation (5.1.7), where the slope of the
line shows the discontinuity of pressure and density. This line describes how the state of a medium
will change when it has been hit by a shock wave, the change from original pressure and volume
(υ0, P0) of the gas, to its compressed state (υ, P). Higher pressure will result in an increased slope of
the Rayleigh line and velocity.
∆P/∆υ = −ρ2
0U2
s (5.1.7)
Figure 5.1.2: Hugoniot curve and Rayleigh line.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 29	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 29	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 29

-- 43 of 245 --

5.1.4 Example of a plastic impact
As mentioned before, impact is a phenomenon that can create a shock wave. A simple type of impact
is planar, where two parallel flat surfaces hits each other simultaneously. In Dynamic behaviour of
materials, Meyers has made an example in order to show the calculations of a plastic impact. A
projectile (1), is moving with a velocity v, in direction against a body (2), which is at rest, see Figure
5.1.3(a). When the projectile collides with the body, see figure 5.1.3(b), two compressive shock waves
are created, one that travels through the body with velocity Us2, and another one travels through the
projectile with an velocity of Us1, shown in Figure 5.1.3(c), note that subscripts (1) and (2) refer to
the material for the projectile and for the body.
Figure 5.1.3: a) Projectile (1) moving against a body (2), b) collision between the two parts, c) two
shock waves move through the two materials.
Before impact the projectile moves with a velocity. Upon impact the particles in the compressed
region of the projectile is reduced as the domain of the particle velocity Up1 expanse, where the
particle velocity in the body becomes as in equation (5.1.8).
v −Up1 = Up2 (5.1.8)
Equation (5.1.8) can be rewritten as in equation (5.1.9)
Up1 +Up2 = v (5.1.9)
Pressure for the projectile P1, and the body P2, can be determined by using conservation of momentum
equation (5.1.2), the pressures are determined by equation (5.1.10).
P1 = ρ01Us1Up1 P2 = ρ02Us2Up2 (5.1.10)
EOS for the projectile and the body are stated in equation (5.1.11).
Us1 = c01 + S1Up1 Us2 = c02 + S2Up2 (5.1.11)
30 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	30 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	30 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 44 of 245 --

Inserting the EOS into the conservation of momentum, equation (5.1.12) and (5.1.13) can be derived.
P1 = ρ01(c01 + S1Up1)Up1 (5.1.12)
P2 = ρ02(c02 + S2Up2)Up2 (5.1.13)
Set Up1 as a function of Up2 and by substituting v −Up2, for Up1 an equation with only one unknown
Up2 will be obtained in equation (5.1.14).
P1 = ρ01c01(v −Up2) + ρ01S1(v −Up2)2 (5.1.14)
The pressure in projectile and the body is assumed to be the same, the central membrane will move
until pressure is equilibrated, see equation (5.1.15).
P1 = P2 (5.1.15)
Insert (5.1.14) and (5.1.13) into (5.1.15) results in equation (5.1.16).
U2
p2(ρ02S2 − ρ01S1) +Up2(ρ02c02 + ρ01c01 + 2ρ01S1v) − ρ01(c01v + S1v2) = 0 (5.1.16)
By solving Up2 in equation (5.1.16), it is possible to write equation (5.1.17).
Up2 = −(ρ02c02 + ρ01c01 + 2ρ01S1v) ± (∆)1/2
2(ρ02S2 − ρ01S1) (5.1.17)
Where ∆ is equal to:
∆ = (ρ02c02 + ρ01c01 + 2ρ0S1v)2 − 4(−ρ01)(ρ02S2 − ρ01S1)(c01v + S1v2) (5.1.18)
With equation (5.1.17) and (5.1.13), P2 can be determined, and if the projectile and the body is of the
same material equation (5.1.17) can then be rewritten to equation (5.1.19).
UP = ρ01(c01v + S1v2)
ρ02c02 + ρ01c1 + 2ρ01S1v (5.1.19)
Pressure and wave velocity is the same for the projectile and body. Also the same material is used,
meaning that S1 and S2 from EOS has the same value:
ρ01 = ρ02 = ρ0 c01 = c02 = c S1 = S2 = S (5.1.20)
Now equation (5.1.20) becomes simpler:
Up = 1
2v (5.1.21)
The last equation shows that for two bodies with the same material properties subjected to a plastic
impact the particle velocity is equal to half of the impact velocity of symmetric impact, which means
the particles in the projectile transfer half of their momentum to the body (Meyers, 1994).
The example also shows how conservation of momentum and EOS can be used in order to determine
the pressure and particle velocity.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 31	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 31	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 31

-- 45 of 245 --

6 Finite Element-Modelling of Dynamic Problems
Propagating waves result in high loads during a short period of time which makes it difficult to
analyse, especially for larger structures, therefore finite element software is developed. Challenges
today about the FE-models are that it is still needed to control the model so the results are valid. With
increasing complexity in the models this gets harder and harder. One other aspect is to make the
models time efficient. Often the regular user, e.g. a structural engineer, does not have the time to wait
for days in order to receive the results from a simulation.
6.1 Element types
When creating a FE-model it is important to choose suitable element types. There are three common
elements types that can be used in the analysis; continuum elements in two or three dimensions,
structural elements e.g. beam elements, shell elements and special elements e.g. springs, dampers
and joints, see Figure 6.1.1. The element types have some differences and which one to use depends
on what type of response and failure modes the model should describe. Structural elements resemble
fabricated structural components and represent the geometry of the structure. Continuum elements do
not resemble fabricated structural components at all. Special elements are derived from a continuum
mechanics stand point but include features similarly related to the physics of the problem. For instance
beam and shell elements can describe bending, but unfortunately not shear failure
(Plos, 2008).
Figure 6.1.1: a) Continuum elements, (b) Structural elements, (c) Special elements (Plos, 2008).
The shape of the elements can be divided into linear or quadratic. The simplest line elements consist
of two nodes and one element and usually with a cross-section area. Quadratic are made with curved
elements that have three or four nodes (Ellobody, 2014).
32 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	32 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	32 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 46 of 245 --

7 Case Studies
The case studies are performed in order to see if there is a realistic possibility to create a thin structure
with the same response as a thicker structure. The design process of this structure begins with a
decision of which response and properties the structure should have, instead of choosing the material
and dimensions first.
The first tests are carried out to see how well the transformational elastodynamics theory works.
Different material properties are used and tested combined with different transformation functions in
order to see how this affects, the properties of the transformed structure. The aim is to see if there is
an optimal way to choose the variation of the material properties and transformation function.
Furthermore, in order to cancel a wave it is possible to do so by adding several layers. This means that
the stress wave which propagates through the material will reflect step by step. When the stress wave
reaches the other side of the structure, the stress amplitude is smaller than it was from the beginning.
In order to find the number of layers and material properties for each layer a MATLAB code has been
developed. After the desirable behaviour is determined, a transformation can be done in order to find
the material properties and the dimensions for the new structure.
The following case studies are confirmed with a numerical analysis in a FE-program, LS-DYNA and
this in order to verify the results from the hand calculations. LS-prepost is combined with LS-DYNA
to handle the modelling and analysing the results. It is important to mention that the following studies
can be done in other FE-program with same results.
7.1 Case study 1 - Transformation of rod with constant
material properties
The first study is done in order to verify the transformational elastodynamics theory. A 1 meter long
rod is studied and the aim is to transform it to a 0.5 meter long rod with the same dynamic response,
see Figure 7.1.1. The incident stress wave hits the rod on the free end while the second edge is
considered as fixed. The density and the Young’s modulus are constant over the whole length of the
rod. Verification of the model is done with hand calculations and with the FE-software LS-DYNA.
All the results from the calculations are presented in Section 8.1.
Figure 7.1.1: Transformation of a rod with homogeneous material properties.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 33	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 33	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 33

-- 47 of 245 --

In this study the transformation equation is chosen as a linear function and is defined in equation (7.1.1).
In order to calculate β (x) it is necessary to know the derivative and inverse of the transformation
function which is defined in equation (7.1.2) and (7.1.3).
ψ(x) =̂ a
a · x (7.1.1)
ψ′(x) =̂ a
a (7.1.2)
ψ(̂x)−1 = a
̂
a · x (7.1.3)
With the equations above it is possible to calculate β (x) in order to find the new material properties
for the smaller rod. β (x) is calculated according to equation (7.1.4).
β (̂x) = ψ′(ψ−1(̂x)) =̂ a
a (7.1.4)
Using equation (4.4.12) and (4.4.13) combined with (7.1.4) to transform Young’s modulus and the
density into the other coordinate system and thereby finding the material properties for the 0.5 meter
long rod. The material properties are defined according to equation (7.1.5) and (7.1.6).
̂
E(̂x) = β (̂x) · E(x) = 0.5 · E0 (7.1.5)
̂
ρ(̂x) = 1
β (̂x) · ρ(x) = 2 · ρ0 (7.1.6)
̂
c =
√
0.5 · E0
2 · ρ0
= 1
2
√
E0
ρ0
(7.1.7)
With the material properties calculated from equation (7.1.5) and (7.1.6), the smaller rod should have
the same dynamic response as the original rod. Equation (7.1.7) present the wave velocity for the
transformed rod, as seen in the equation the velocity is half compared to the original rod. The material
properties used in the calculations for both rods are presented in Table 7.1.1. The impedance of the
two rods is the same, which is a requirement for the transformation to work, the relation can be seen
in equation (7.1.8).
ρ · c =̂ ρ ·̂ c (7.1.8)
34 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	34 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	34 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 48 of 245 --

Table 7.1.1: Material indata for the rods.
Rod length Young’s modulus Density Applied force Sectional area
[m] [GPa] [kg/m3] [N] [m2]
a = 1.0 E0 = 210 ρ0 = 7850 F = 500 A = 6.45 · 10−4
̂
a = 0.5	̂	 E = 105	̂	 ρ = 15700 F = 500 A = 6.45 · 10−4
7.1.1 Calculations and modelling using LS-DYNA
In order to verify the hand calculations and get a view of what happens over time in the rod, a
numerical analysis is done on all the case studies. This section will describe how the model is built,
the other case studies follow the same modelling procedure and differences between the models will
be presented in the following sections.
The FE-model is created to be able to verify the theory of transformational elastodynamics. Two rods
are made in addition to compare different lengths and show that the two rods behaves in the same
way, see Figure 7.1.2. No failure mode is of interest and therefore not considered in this model.
Figure 7.1.2: A comparison between the two rods, model created in LS-DYNA.
Size of model
The whole FE-model does not need to have a large size to be able to describe the theory of elastic
impact. The model needs to have a length, so the wave can travel through a material and be illustrated
with its discontinuity from the state before and after the wave front. Mesh size of the model will be
described in Section 7.1.2.
Boundaries
The rod is fixed in the end node to the right side, no displacements in any direction of this node
can occur. Furthermore, the other side of the rod is set as free and is attached with a nodal force in
addition to create a satisfactory impulse event.
Material
A homogeneous material is suitable to describe the particle velocity and displacements in the model.
The material model used in calculations only takes elastic behaviour in to account. The material
properties which are specified in the software are density, Young’s modulus and Poisson’s ratio. The
material properties used in this case are stated in Table 7.1.1.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 35	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 35	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 35

-- 49 of 245 --

Choice of element type
Structural elements such as beam element can show the particle velocities and displacements for the
one-dimensional rod after impact and give a reasonable running time for the model. Hence, beam
elements are used in the models.
Section
"Section" defines the cross-sectional properties for the beam elements. In "section" several selections
of element formulation options (ELFORM) can be chosen. In this case study it is set to truss elements,
meaning that this element formulation is applied to the element type. Furthermore, only one cross
section is needed, see Table 7.1.1 for chosen cross-section area.
Loading
In order to establish the same behaviour as for an impact event that generates a dynamic impulse, a
load is defined in LS-DYNA which acts in short period of time. In the FE-program nodal point load
is a suitable function to use. The load acts in a specific time interval which is defined with a load
curve. Load level is set to 500 N acting constant on a time interval of 0-0.002 seconds. The wave
created hits the fixed boundary at approximate 0.2 · 10−3s.
7.1.2 Convergence study of the FEM-model
To specify how many elements that the model should be created with a convergence study is made.
Time is an important factor in the studies, the convergence check is done with velocity or displacement
versus time. First different mesh sizes are compared in the same node. Figure 7.1.3 shows a
convergence check of the of the particle velocity at a specific time that illustrates the difference
between particle velocity for 5, 10, 20, 40 and 60 elements. This shows that a model with 20, 40 and
60 elements in each layer is sufficient to get accurate results.
Figure 7.1.3: Diagram illustrating results in particle velocity for different mesh sizes.
36 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	36 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	36 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 50 of 245 --

In order to get a faster computer time, the three different element sizes was compared with a displace-
ment versus time diagram. By doing this, it can be seen how the choice of element size effect both
phase difference in time and the results for displacement. Figure 7.1.4 illustrates the convergence
check of the displacement, two things can be noticed. First, the mesh sizes with 40 and 60 elements
are almost equal; a small difference can be seen, but it is too small and therefore neglected in this
study. Second, the model with a mesh size of 20 elements has both a phase difference and also
different results of displacement or velocity compared to the other mentioned elements sizes. This
shows that a model with 40 elements in each layer is sufficient to get accurate results and give a faster
computing time of the model compare to models with 60 elements in each layer, therefore models in
later studies contains 40 elements in each layer.
Figure 7.1.4: Diagram illustrating different mesh sizes, 60, 40 and 20 elements.
7.1.3 Damping
In Section 4.2.2 it was mentioned that damping could be neglected in the dynamic analysis because
of the small influence on the results. To see how much influence it has on the model, it is possible
in FE-analysis to consider damping and see the difference with and without damping. A specific
material damping ratio has to be known in order for the program to calculate the damping for the
model. Some error can occur in the FE-analysis with damping depending on which specific frequency
range is of interest. See Section 8.1.3, for results from the analysis.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 37	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 37	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 37

-- 51 of 245 --

7.2 Case study 2 - Transformation of rod with varying
material properties
As mentioned before one way to build a protective wall is to add several layers to the structure, the
wave will then reflect step by step and depending on the material properties the reflections will be
different between the layers. The transmitted stress which exit the structure can be lower than the
incident stress.
As seen in Figure 7.2.1, the rod (from the last example) is now divided into ten layers with different
material properties. The main purpose is that the reflections between the materials will lower the
stress constantly through the material. The transformed rod still has a length of 0.5 meter.
Figure 7.2.1: Linear transformation from 1 meter to a 0.5 meter long rod, with ten materials.
The material properties vary linearly and are approximated as illustrated in Figure 7.2.2, and the
material indata is defined in Table 7.1.1, where steel is the material in the first layer.
Figure 7.2.2: Example showing a variation of the elastic modulus and the density.
38 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	38 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	38 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 52 of 245 --

Equation (7.2.1) and (7.2.2) defines how Young’s modulus and the density vary through the thicker
rod. It is hard to find a material which vary exactly as described in Figure 7.2.2. Because of this, the
material properties are taken in the middle point of each layer; which result in an approximation of
the material curves.
E(x) = (1 − x
a)E0 (7.2.1)
ρ(x) = ρ0
x
a (7.2.2)
The same ψ-function is used in this study as in the last study, it is defined in equation (7.1.1). Using
the same ψ-function, will result in the same β (x) as in the previous case and is presented in equation
(7.2.3).
β (̂x) =̂ a
a (7.2.3)
With the calculated β (̂x) it is possible to find the new material properties for the 0.5 meter long rod
by using the same equations as in case one. The material properties now vary along the length of the
rod and are extracted in the same manner as for the longer rod. The expression for Young’s modulus
and the density are stated in equation (7.2.4) and (7.2.5) where a = 1 m and̂ a = 0.5 m is included in
the equations.
̂
E(̂x) = E0 ·
(1
2 −̂ x
)
(7.2.4)
̂
ρ(̂x) = 4ρ0 ·̂ x (7.2.5)
̂
c = 1
2 · c (7.2.6)
Using the new material properties for the 0.5 meter long rod, should result in the same dynamic
response as for the longer rod. The wave velocity is half for the transformed rod compared to the
original rod, see equation (7.2.6). The impedance need to be the same between in each layer in order
for the transformation to work. All the results from this case study can be seen in Section 8.2.
7.2.1 Calculations and modelling using LS-DYNA
This FE-model is created to be able to verify the theory of transformational elastodynamics with
several layers. The rod has the same boundaries and load as for the first case study, the new material
properties are inserted. Two rods are made in addition to compare different lengths of them and show
that the transformation is valid, same results for the two rods are expected. No failure mode is of
interest and therefore not considered in this model.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 39	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 39	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 39

-- 53 of 245 --

Size of model
The size of the model is different from the first case study, since it is made with several layers to get
the response from the reflected waves. It is important that the nodes between the layers have been
merged together, otherwise the wave will not be able to travel and be transmitted into the next layer.
Mesh convergence has been done and shows same the results as for the first case study, where 40
elements in each layer are sufficient.
7.3 Case study 3 - Transformation of rod with varying
material properties and a non-linear ψ-function
Up to this point the ψ-function has been a linear function. The function has a great influence on how
the material properties will vary through the transformed rod. As mentioned before ψ-function can
be chosen almost freely and need to fulfil the following two conditions, ψ(a) =̂ a and ψ(̂a) = a. It
also needs to be invertible and sufficiently differentiable together with its inverse. In this case study
the new ψ-function used in calculations are defined in equation (7.3.1). The lengths of the rods are
the same as before.
ψ(x) =̂ a
a · x2 (7.3.1)
By choosing a transformation function ψ(x) which is not linear the calculations become more complex.
The material properties will vary in a non-linear way. Furthermore, the reflections do not take place
in the same position anymore because of the non-linearity. The reflections need to take place at the
same time, which implies that the layer thickness will be different than from the linear case. In order
to find the thickness of each element for the smaller rod, the x-coordinate where the reflection occur
in the original rod is transformed into a new coordinate in the system where the reflection occur for
the smaller rod, see Figure 7.3.1. The layer thickness will therefore not be constant as in previous
studies. The material properties are taken from the middle of each layer exactly as before.
40 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	40 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	40 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 54 of 245 --

Figure 7.3.1: Transformation of the rod when using a non-linear ψ function.
The inverse and the derivative of equation (7.3.1), with the numerical values of a and̂ a, is defined in
equation (7.3.2) and (7.3.3).
ψ′(x) = 2 · 0.5
1 · x = x (7.3.2)
ψ−1(̂x) = 1.414√̂
x (7.3.3)
Since it is impossible to have a material with zero density or Young’s modulus equal to zero their
functions have been modified in order to avoid that case. Young’s modulus and the density is
constantly decreasing, in order for the transmitted stress to constantly decrease through the rod. The
new equations for the material properties are stated in equation (7.3.4) and (7.3.5).
E(x) = E0
( 1
10x + (1 − x)
)
(7.3.4)
ρ(x) = ρ0
( 1
10x + (1 − x)
)
(7.3.5)
With these parameters known it is possible to calculate β (̂x), which is calculated in the same manner
as in the previous cases. The difference now is that β (̂x) will no longer be a constant as before.
β (̂x) = 1.414√̂
x (7.3.6)
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 41	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 41	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 41

-- 55 of 245 --

The new material properties for the small rod are calculated using equation (7.3.7) and (7.3.8).
̂
E(̂x) = 1.414√̂
x · E0
( 1
101.414√̂
x + (1 − 1.414√̂
x)
)
(7.3.7)
̂
ρ(̂x) =
ρ0
(
0.1 · 1.414√̂
x + (1 − 1.414√̂
x)
)
1.414√̂
x (7.3.8)
By using the two equations above it is possible to find the new material properties which are suited for
the smaller rod in order to have the same dynamic response as for the longer rod. The impedance still
need to be equal between the two rods in each layer even if the material properties vary non-linear.
Furthermore, the wave velocity for the transformed rod will no longer be half the velocity compared
to the original rod. This is also the reason for the varying layer thickness for the transformed rod.
To find the new points where the reflection shall occur the transformation function is used. All the
results from this case study can be found in Section 8.3.
7.3.1 LS-DYNA calculations
FE-model is made in order to verify the results from the hand calculations. The model is built as in
the previous case studies with same element size, boundaries and loading, but with different material
properties. The new materials are inserted in the FE-model and then used to verify the results from
the hand calculations, see Section 8.3.2. The small rod and the long rod are made in the same model,
which makes the comparison easier. No failure modes are of interest.
7.3.2 Size of model
The model has same amount of layers, but as mentioned before the ψ-function will effect the length
of each layer and therefore the layers will not have the same lengths as case study two. As for case
study two it is important that nodes between each layers are merged together. A mesh convergence
check has been done in order to find the right amount of elements, as for the other case studies 40
elements in each layer are sufficient.
7.4 Case study 4 - Transformation of rod with varying
material properties and ψ-function
Up to this point only two ψ-functions have been tried, as seen from case number three it has a major
part in the transformation and the new material properties. Therefore, a third function is tried in
order to see if there is an optimal way to transform the material properties. Optimal means that the
transformed values correspond well to real materials.
To find the new ψ-function a Mathematica document was created, see Appendix D for the derivation.
It is possible to control the initial conditions and the derivative of the function. By this it is possible to
exclude the functions that give values which go to infinity or zero and therefore generate unreasonable
42 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	42 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	42 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 56 of 245 --

material properties. The length of the rods (a and̂ a) are the same as in the previous cases so it is
possible to do a comparison between the different studies.
Equation (7.4.1) states the ψ-function used in the calculations for this case. It is a third degree
polynomial and the lengths a and̂ a are already included in the equation.
ψ(x) = x
(
1 + x(−2a + x)
2a2
)
(7.4.1)
The equations describing the material properties are the same as for case three and are defined in
equation (7.4.2) and (7.4.3).
E(x) = E0
( 1
10x + (1 − x)
)
(7.4.2)
ρ(x) = ρ0
( 1
10x + (1 − x)
)
(7.4.3)
β (̂x) and the new material properties Young’s moduluŝ E(̂x), and the densitŷ ρ(̂x), are calculated in
the same way as before. In this case study it is not done by hand, instead Mathematica has been used
to calculate the new material properties. Mathematica is used because the derivation is hard to do by
hand. The functions can be seen in Appendix D.
When all the material properties are calculated the dynamic response of the smaller rod can be
calculated. As in case study three the layer thickness needs to be recalculated since the reflections
need to be at the same time for both of the rods. As in previous cases the impedance needs to be
the same for both the rods and each layer needs to have the same impedance. The results from the
calculations can be viewed in Section 8.4.
7.4.1 LS-DYNA calculations
FE-model is made in order to verify the results from the hand calculations. As for case study three,
the length for each layer will be different and not constant. This case study uses another ψ-function,
in which a transformation of the length with its function will be made. The two rods are made in the
same model in order to make the comparison easier. The rod has the boundaries and load but different
material properties. No failure modes are of interest.
7.4.2 Size of model
The model has same amount of layers, but as mentioned before the ψ-function will effect the length
of each layer and therefore the layers will not have the same lengths as case study two and three.
All nodes between each layer should be merged together. As for the other cases studies, a mesh
convergence check has been done in order to find the right amount of elements, where 40 elements in
each layer are sufficient.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 43	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 43	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 43

-- 57 of 245 --

7.5 Case study 5 - Design of rod with real materials
All the cases studied in this project this far have been with theoretically calculated material properties.
In this study the aim is to design a rod which decrease the stress amplitude of the incident wave and
find real materials which can satisfy the transformation.
As mentioned before when a wave goes from one medium to another the wave is divided into two
parts, one reflected wave and one transmitted wave, see Section 4.3. This means that every time a
reflection takes place the stresses rearrange in the material. If the rod has several layers with the
right material properties the transmitted stress wave amplitude will get lower for each reflection. The
transmitted and reflected stress amplitudes are defined in equation (7.5.1) and (7.5.2), where A and B
represent the different materials.
σT = 2ρBcB
ρAcA + ρBcB
· σI Transmitted stress (7.5.1)
σR = ρBcB − ρAcA
ρBcB + ρAcA
· σI Reflected stress (7.5.2)
By inserting the expression for the wave velocity cn = √En/ρn, in equation (7.5.1) and (7.5.2).
Equation (7.5.3) and (7.5.4) can then be derived.
σT = 2√ρBEB
√ρBEB + √ρAEA
· σI (7.5.3)
σR =
√ρBEB − √ρAEA
√ρBEB + √ρAEB
· σI (7.5.4)
By looking at equation (7.5.3) and (7.5.4) it can be seen that lowering the product between Young’s
modulus and the density result in a lower transmitted stress. This can be used in design to lower the
stress amplitude constantly through the rod.
Finding the number of reflections needed in order to lower the final transmitted stress is an iterative
process. In the iterative process the product E · ρ is lowered step by step by a constant. However, how
the product decreases has a large influence on the number of reflections and transmitted stress.
Figure 7.5.1 presents how the product decreases in each layer when multiplied with a factor 0.5.
44 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	44 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	44 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 58 of 245 --

Figure 7.5.1: Decreasing product between Young’s modulus and the density multiplied by a factor 0.5
for every reflection.
The calculation gives a reflected and a transmitted stress for each layer combined with the product of
Young’s modulus and the density. The iteration can be controlled by limiting the number of reflections
or the transmitted stress. The length in this stage is arbitrary which means that the length does not mat-
ter in the calculations. The only interesting part is to find a suitable behaviour of the rod. The length
is however set to 1 meter, since it is then possible to compare it to the other cases that are studied.
When the behaviour is set it is possible to use the theory presented in Section 4.4 in order to find new
material properties, which will make the short rod behave in the exact same manner as the original rod.
To use the theory of transformational elastodynamics the material parameters need to be defined as
functions of the length of the rod. This is done by approximating a curve to the calculated values.
With these functions known it is possible to find new material parameters for the small rod. This is
done with two different ψ-functions, see equation (7.5.5) and (7.5.6). The reason for choosing two
functions is to see if there is any difference in the dynamic response and any difference between the
material properties between the two functions. The ψ-function from case study three is excluded in
this study because of the unreasonable material properties.
ψ(x) = x
(
1 + x(−2a + x)
2a2
)
(7.5.5)
ψ(x) =̂ a
a · x (7.5.6)
β (̂x) is derived in the same manner as before for both functions and with β (̂x) known it is possible to
find the material properties for the small rod.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 45	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 45	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 45

-- 59 of 245 --

Up to this point all of the materials are theoretical. The challenge is to find material properties which
suit the theoretical values. The product between Young’s modulus and the density is calculated for
the theoretical values and the real materials. The materials with matching or close to the theoretical
values are chosen, this is done for both ψ-functions.
Once the material properties are set, a new calculation is done in order to find the real dynamic
response of the rods with the real materials.
7.5.1 LS-DYNA
Calculated materials and lengths will be inserted into LS-DYNA to verify the difference between
the models with real materials. All functions will be tried out. The rod has the same element size,
boundaries and loading as for previous case studies. No failure modes are of interest.
7.5.2 Size of model
The model has the same amount of layers, but as mentioned before the ψ-function will affect the
length of each layer and therefore the layers will not have the same lengths as case study two and
three. As for the other cases studies, a mesh convergence check has been done in order to find the
right amount of elements, where 40 elements in each layer are sufficient.
46 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	46 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	46 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 60 of 245 --

8 Results from the Case Studies
There are several different case studies done in the project. The first studies were simple examples in
order to understand and verify the theory presented in the literature survey. In the last case study the
theories are combined in order to create a rod with real materials. Each case study is verified with
hand calculations and numerical analysis done in the FEM program, LS-DYNA.
8.1 Results Case Study 1
This case study is made in order to show the theory of transformation elastodynamics. The ψ-function
vary linearly and is derived in Section 7.1, the study is made with only one layer in each rod. Therefore,
the material properties are constant over the whole length for the original and transformed rod.
8.1.1 Hand calculations
The calculations are performed according to equations from Section 4.3.1, where the transmitted,
reflected and incident stresses are derived. The particle velocity and the stresses are calculated
according to the same Section. The calculations are presented in Appendix A. Material properties are
defined in Table 7.1.1.
The results from the hand calculations are presented in Table 8.1.1. These results are to be compared
with the calculations from LS-DYNA in order to verify the method, see Section 8.1.2.
Table 8.1.1: Results from hand calculations for a rod with homogeneous material.
Rod length [m] Particle velocity, Up [m/s] Initial stress, σI [MPa] Wave velocity [m/s]
a=1 0.019 0.775 5172
̂
a=0.5 0.019 0.775 2556
The calculation shows that the two rods have the exact same dynamic response since the particle
velocity and the initial stresses are equal. The results are expected since the wave needs to hit the
boundaries at the same time in order to have the same response. In this case the transformed rod is
half the length of the original rod and the velocity is half for the transformed rod. This means that the
wave hit the fixed boundary at the same time.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 47	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 47	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 47

-- 61 of 245 --

Figure 8.1.1 shows how the wave velocity varies for the two rods. As can be seen it is constant
throughout the length, which is expected since the transformation is linear.
Figure 8.1.1: Wave velocity for the 1 meter long rod (left) and for the 0.5 meter long rod (right).
8.1.2 LS-DYNA calculations
The model is done according to the method presented in Section 7.1.1. The applied force and material
properties are the same as for the hand calculations.
Figure 8.1.2 shows the displacement change during time t. As seen in the figure the displacement
change direction after ∼ 0.37·10−3s when it hits the free end and the wave change from a compression
wave to tension wave. The results are extracted from node one, which is the first node to the left in
the model, it is the same node as the applied force.
Figure 8.1.2: Displacement for transformation of 1 meter long rod (point line) to a 0.5 meter long rod
(regular line).
8.1.3 Rod with Damping
To be able to see the differences between a rod with and without damping two models have been
compared in the FE-program, LS-DYNA. The damping ratio is set to ξ = 0.01. The material
parameters and model indata is presented in Table 7.1.1. Results from LS-DYNA are presented in
Figure 8.1.3 and 8.1.4.
48 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	48 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	48 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 62 of 245 --

Table 8.1.2: Particle velocity without and with damping.
Particle velocity without damping, Particle velocity with damping,
UP [m/s] UP [m/s]
0.019 0.0185
It can be seen that the curve with damping take more time to reach its peak value, compared to the
curve without damping. In Table 8.1.2 it can be seen that the particle velocity had decreased, but
not enough make a difference. Due to the small influence of the damping it is neglected in further
calculations.
Figure 8.1.3: Particle velocity for the 1 long meter steel rod in one node.
Figure 8.1.4: Particle velocity for the 1 meter long steel rod with damping in one node.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 49	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 49	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 49

-- 63 of 245 --

8.2 Results Case Study 2
The two rods from case study one are now divided into ten different layers in order to be able to
vary the material properties through the lengths of the rods. This will also create reflections at each
interface of the materials, which can lower the stress amplitude in the rods. The ψ-function used in
this case study is the same as used in the previous study.
8.2.1 Hand calculations
The material properties vary according to equation (7.2.1) and (7.2.2) presented in Section 7.2.
Figure 8.2.1 presents how the density and Young’s modulus varies over the length for the original rod
and for the transformed rod. The variation of the transformed material properties are still linear. This
is because the transformation only depends on a constant, β (̂x) = 0.5. The material data is extracted
in the middle of each layer in the rods, where the layer thickness is 0.05 meter for the transformed
rod and 0.1 meter for the original rod.
Figure 8.2.1: The variation of Young’s modulus (left figure) and the density (right figure) before curve
A, and after transformation curve B.
The wave velocities for both rods can be seen in Figure 8.2.2. As seen in the figures and the tables
below the wave velocity is half the value compared to the original rod. This is due to the linear
ψ-function.
Figure 8.2.2: The wave velocity for the original rod (curve A) and for the transformed rod (curve B).
50 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	50 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	50 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 64 of 245 --

The material properties for the 1 meter long rod are presented in Table 8.2.1 and 8.2.2 for the 0.5
meter long rod, which are used as indata for when calculating the dynamic response of the two rods.
The calculations of the material properties are presented in Appendix B.
Table 8.2.1: Material indata for a 1 meter long rod with ten different layers.
Layer Thickness of layer Young’s modulus [GPa] Density [kg/m3] Wave velocity [m/s]
1 0.1 199.5 392.5 22 5545.1
2 0.1 178.5 1177.5 12 312.3
3 0.1 157.5 1962.5 8958.5
4 0.1 136.5 2747.5 7048.5
5 0.1 115.5 3532.5 5718.1
6 0.1 94.5 4317.5 4678.4
7 0.1 73.5 5102.5 3795.4
8 0.1 52.5 5887.5 2986.2
9 0.1 31.5 6672.5 2172.8
10 0.1 10.5 7457.5 1186.6
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 51	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 51	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 51

-- 65 of 245 --

Table 8.2.2: Material indata for a 0.5 meter long rod with ten different layers.
Layer Thickness of layer Young’s modulus [GPa] Density [kg/m3] Wave velocity [m/s]
1 0.05 99.75 785.0 11 272.50
2 0.05 89.25 2355.0 6156.10
3 0.05 78.75 3925.0 4479.30
4 0.05 68.25 5495.0 3524.30
5 0.05 57.75 7065.0 2859.00
6 0.05 47.25 8635.0 2339.20
7 0.05 36.75 10 205.0 1897.70
8 0.05 26.25 11 775.0 1493.10
9 0.05 15.75 13 345.0 1086.40
10 0.05 5.25 14 915.0 593.2910
As mentioned before and seen in Figure 8.4.1 the material properties varies as expected, both Young’s
modulus and wave velocity for the longer rod becomes half for the smaller rod and the density is
multiplied by two. The wave velocities are also expected since the stress waves need to hit each
boundary at the same time for both the rods. The small rod is transformed with a linear function,
which means that the wave velocity should be half compared to the original wave velocity. This in
order to have the same dynamic response as the original rod, see Figure 8.1.1.
The results from the hand calculations for stresses are presented in Table 8.2.3 and the particle velocity
in Table 8.2.4. A comparison between particle velocity and transmitted stress between the two rods
shows that the rods have the same dynamic response. Therefore, the results for both of the rods are
presented in the same tables, see Appendix B for hand calculations for the rods.
52 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	52 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	52 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 66 of 245 --

Table 8.2.3: Stresses in 1 meter long rod and 0.5 long rod with ten different material properties.
Layer Incident stress, σI [MPa] Reflected stress, σR [MPa] Transmitted stress, σT [MPa]
1 0.775 0.188 0.963
2 0.963 0.093 1.055
3 1.055 0.051 1.106
4 1.106 0.023 1.129
5 1.129 0 1.129
6 1.129 −0.024 1.106
7 1.105 −0.053 1.052
8 1.052 −0.101 0.951
9 0.951 −0.230 0.721
10 0.721 0.721 1.442
Table 8.2.4: Particle velocity in 1 meter long rod and 0.5 long rod with ten different material
properties.
Layer Incident particle velocity, Reflected particle velocity, Transmitted particle velocity,
UpI [m/s] UpR [m/s] UpT [m/s]
1 0.088 −0.022 0.066
2 0.066 −0.006 0.060
3 0.060 −0.003 0.057
4 0.057 −0.001 0.056
5 0.056 0 0.056
6 0.056 0.001 0.057
7 0.057 0.003 0.06
8 0.06 0.006 0.066
9 0.066 0.016 0.081
10 0.081 −0.081 0
As seen in the tables the stress does not decrease between all the interfaces which depends on the
material properties, where the product between Young’s modulus and the density does not decrease
between each layer. However, the dynamic response is the same between the two rods, which proves
that the theory works and that it is possible to transform the rod with this method.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 53	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 53	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 53

-- 67 of 245 --

8.2.2 LS-DYNA calculations
The model is done using the method presented in Section 7.2.1. The model is created in order to
verify the hand calculations.
Table 8.2.5 presents the particle velocity for each layer. It can be compared and verified with the hand
calculations. It can be seen that the displacement and particle velocity is equal to each other. The
dynamic response of the transformed and original rod is equal and therefore presented in the same
table.
Table 8.2.5: Particle velocity for a 1 meter long rod and a 0.5 long rod, calculated with a linear
transformation function in LS-DYNA.
Layer Incident particle velocity Reflected particle velocity Transmitted particle velocity
UpI [m/s] UpR [m/s] UpT [m/s]
1 0.087 −0.021 0.066
2 0.066 −0.006 0.060
3 0.060 −0.003 0.057
4 0.057 −0.001 0.056
5 0.056 0 0.056
6 0.056 0.001 0.057
7 0.057 0.002 0.059
8 0.059 0.008 0.067
9 0.067 0.015 0.082
10 0.082 −0.082 0
Figure 8.2.3 shows the displacement for both rods over time t. The nodes where the results are
extracted are where the load is applied to the left (the free end) of the rod. The displacements are
equal to each other, which mean that the transformation works.
54 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	54 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	54 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 68 of 245 --

Figure 8.2.3: Displacements for 1 meter long rod with ten layers (point line) and for 0.5 meter long
rod with four layers (regular line).
The results from the numerical analysis and the hand calculations are similar which is a proof that
this method works for a rod with many layers. Although, the stresses have a small difference and
therefore another case is analysed where the material properties decrease in another way.
8.3 Results Case Study 3
To see if there is a better way to choose the material parameters, another ψ-function is tried out. The
rods used in this case are the same as for case two; the same applied force and cross-sectional area.
Another function for the materials is tried in order for the stress wave amplitude to decrease through
the length of the rods.
8.3.1 Hand calculations
Since the ψ-function can be arbitrary as long as it fulfils the boundary conditions, there can be a
better ψ-function for the transformation which results in more reasonable material parameters. The
chosen ψ-function for this case is shown in Section 7.3, equation (7.3.1).
The material properties for the long rod have been chosen to decrease. This is because the impedance
constantly decreases through the rods, thereby the stress wave amplitude will be reduced when it
travels through each layer. The new material equations are presented in Section 7.3, equation (7.3.4)
and (7.3.5). Figure 8.3.1 presents how the material properties vary for the transformed (curve B) and
original rod (curve A). As seen in the figure the material properties vary linearly for the 1 meter long
rod, but for the transformed rod it vary non-linearly and it is because of the ψ- function which is no
longer linear. The density for the transformed rod goes to infinity, see Figure 8.3.1, it is therefore not
possible to see the value of the density for layer one.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 55	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 55	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 55

-- 69 of 245 --

Figure 8.3.1: The variation of Young’s modulus and the density before and after transformation.
The wave velocities for the two rods are presented in Figure 8.3.2. The wave velocity for the original
rod (curve A in the figure) is constant. This depends on the defined material curves used in this case,
where Young’s modulus and the density decrease constantly. The wave velocity for the transformed
rod behave in this manner due to the chosen ψ-function. Since the wave velocity is not halved for
the transformed rod in each layer, the layer thickness need to be changed in order to get the same
dynamic response in the both rods.
Figure 8.3.2: The wave velocity for the original rod (curve A) and for the transformed rod (curve B).
Two tables can be seen below, which present the material indata. Table 8.3.1 shows the indata for the
1 meter long rod and Table 8.3.2 for the 0.5 meter long rod. The material properties are calculated as
before, they are extracted from the middle in each layer. The calculations for the material properties
can be seen in Appendix C .
56 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	56 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	56 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 70 of 245 --

Table 8.3.1: Indata for a rod with ten layers 1 meter long rod.
Layer Thickness of layer Young’s modulus Density Wave velocity
[m] [GPa] [kg/m3] [m/s]
1 0.1 200.55 7496.8 5172
2 0.1 181.65 6790.3 5172
3 0.1 162.75 6083.8 5172
4 0.1 143.85 5377.3 5172
5 0.1 124.95 4670.8 5172
6 0.1 106.05 3964.3 5172
7 0.1 87.15 3257.8 5172
8 0.1 68.25 2551.3 5172
9 0.1 49.35 1844.7 5172
10 0.1 30.45 1138.2 5172
Table 8.3.2: Indata for a rod with ten layers 0.5 meter long rod.
Layer Thickness of layer Young’s modulus Density Wave velocity
[m] [GPa] [kg/m3] [m/s]
1 0.005 10.02 149 935.00 258.6
2 0.015 27.24 45 268.30 775.8
3 0.025 40.68 24 335.00 1293
4 0.35 50.34 15 363.60 1810
5 0.45 56.22 10 379.40 2327
6 0.055 58.32 7207.73 2845
7 0.065 56.64 5011.92 3362
8 0.075 51.18 3401.67 3879
9 0.085 41.94 2170,29 4396
10 0.095 28.92 1198.16 4914
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 57	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 57	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 57

-- 71 of 245 --

As seen in Table 8.3.2 the transformed rod has unreasonable properties. This is due to the transfor-
mation which generates values that goes to infinity for the density and to zero for Young’s modulus.
It can also be seen in the table that the wave velocity differs from the original rod. This is due to
the transformation no longer being linear. This means that the layers need to be of different size
for the transformed rod so that the waves reflect at the same time for both the rods. Calculations of
the dynamic response are calculated with the material properties presented in the tables above. The
results from the calculations can be viewed in Table 8.3.3 and 8.3.4. The dynamic response of the
two rods is exactly the same and the results for both the rods is presented in the same tables.
Table 8.3.3: Stresses for the 1 meter long rod and 0.5 meter long rod in each layer.
Layer Incident stress, σI [MPa] Reflected stress, σR [MPa] Transmitted stress, σT [MPa]
1 0.775 −0.038 0.737
2 0.737 −0.040 0.697
3 0.697 −0.043 0.654
4 0.654 −0.046 0.608
5 0.608 −0.050 0.558
6 0.558 −0.055 0.503
7 0.503 −0.061 0.442
8 0.442 −0.071 0.371
9 0.371 −0.088 0.283
10 0.283 0.283 0.566
58 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	58 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	58 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 72 of 245 --

Table 8.3.4: Particle velocity for the 1 meter long rod and 0.5 meter long rod in each layer.
Layer Incident particle velocity, Reflected particle velocity, Transmitted particle velocity,
UpI [m/s] UpR [m/s] UpT [m/s]
1 0.02 0.001 0.021
2 0.021 0.001 0.022
3 0.022 0.001 0.023
4 0.023 0.002 0.025
5 0.025 0.002 0.027
6 0.027 0.003 0.030
7 0.030 0.004 0.034
8 0.034 0.005 0.039
9 0.039 0.009 0.048
10 0.048 -0.048 0
Even if the material properties are unreasonable both the rods will still have the same dynamic
response, see Table 8.3.3 and 8.3.4. This indicates that the theory works for all the ψ-functions, but
the challenge is to find a function which deliver good material properties which correspond to existing
materials. It can also be seen in the tables that the stress decreases between each layer, which is a
desirable behaviour. When the stress wave strikes the last boundary there is no transmitted stress, this
is due that the boundary is modelled as fixed which means that the stress wave will reflect and go
back to the rod.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 59	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 59	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 59

-- 73 of 245 --

8.3.2 LS-DYNA calculations
The material properties are calculated by hand, see Table 8.3.1 and 8.3.2, then implemented in
LS-DYNA. Both rods are defined in the same model and modelled in the same manner as the previous
studies. The results are presented in Figure 8.3.3 and Table 8.3.5.
Table 8.3.5: Particle velocity for the 1 meter long rod and 0.5 meter long rod calculated with a
non-linear transformation function in LS-DYNA.
Layer Incident particle velocity, Reflected particle velocity, Transmitted particle velocity,
UpI [m/s] UpR [m/s] UpT [m/s]
1 0.020 0.001 0.021
2 0.021 0.001 0.022
3 0.022 0.002 0.024
4 0.024 0.001 0.025
5 0.025 0.002 0.027
6 0.027 0.002 0.029
7 0.029 0.004 0.033
8 0.033 0.006 0.039
9 0.039 0.009 0.048
10 0.048 -0.048 0
As seen in table 8.3.5 the particle velocity and the stresses are similar compared to the results from
the hand calculations even if the material properties are unreasonable. This shows that the theory
works well and the challenge is to find a ψ-function which produce reasonable properties.
60 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	60 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	60 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 74 of 245 --

Figure 8.3.3: Displacement for the 1 meter long (point line) rod and for a 0.5 meter long rod (regular
line).
In Figure 8.3.3 a small difference between the two rods can be noticed after the reflection at the free
end. This difference is small and is neglected in the comparison between the hand calculations and
the numerical calculations.
8.4 Results Case Study 4
In this case the ψ-function is changed again, this is in order to avoid materials that are not practical or
impossible to use. Therefore, a new function is created with a derivative which is not zero at the end
points. This resulted in a new ψ-function which is a third degree polynomial equation.
8.4.1 Hand calculations
The variation of the material properties for the original rod is linear and defined in the same way as in
the previous case study. The new ψ-function results in a new set of properties. The variation of the
material properties before (curve A) and after (curve B) the transformation can be seen in Figure 8.4.1.
It can be seen in the figures that the material properties now correspond better to existing materials,
compared to the previous case study. All the hand calculations can be seen in Appendix D.
Figure 8.4.1: The variation of Young’s modulus and and the density before and after transformation.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 61	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 61	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 61

-- 75 of 245 --

The wave velocity for the rods are presented in Figure 8.4.2. As seen in the figure the velocities are
very different. The reason is the different layer thickness that is needed for the transformed rod.
Figure 8.4.2: The wave velocity for the original rod (curve A) and for the transformed rod (curve B).
The properties are taken from the middle of each layer and the new material properties are defined
in Table 8.4.1 for the original rod and Table 8.4.2 for the transformed rod. Since the transformation
is non-linear the thickness of each layer for the transformed rod needs to be transformed as well, in
order for the reflections to occur at the same time.
Table 8.4.1: Material indata for a 1 meter long rod with ten layers.
Layer Thickness of layer Young’s modulus Density Wave velocity
[m] [GPa] [kg/m3] [m/s]
1 0.1 200.55 7496.8 5172
2 0.1 181.65 6790.3 5172
3 0.1 162.75 6083.8 5172
4 0.1 143.85 5377.3 5172
5 0.1 124.95 4670.8 5172
6 0.1 106.05 3964.3 5172
7 0.1 87.15 3257.8 5172
8 0.1 68.25 2551.3 5172
9 0.1 49.35 1844.7 5172
10 0.1 30.45 1138.2 5172
62 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	62 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	62 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 76 of 245 --

Table 8.4.2: Material indata for a 0.5 meter long rod with ten layers.
Layer Thickness of layer Young’s modulus Density Wave velocity
[m] [GPa] [kg/m3] [m/s]
1 0.0905 181.25 8295.2 4674
2 0.0735 133.29 9254.2 3795
3 0.0595 96.63 1024.6 3071
4 0.0485 69.58 11 116.0 2502
5 0.0405 50.44 11 568.0 2088
6 0.0355 37.51 11 206.0 1830
7 0.0335 29.08 9761.0 1726
8 0.0345 23.46 7421.8 1778
9 0.0385 18.93 4807.2 1985
10 0.0445 13.81 2508.5 2347
Table 8.4.3 and 8.4.4 show the results from the hand calculations. As before the dynamic response of
the rods are equal to each other. The tables contain results for both the rods since they are equal.
Table 8.4.3: Stresses for the 1 meter long rod and 0.5 meter long rod with ten different material
properties.
Layer Incident stress, σI [MPa] Reflected stress, σR [MPa] Transmitted stress, σT [MPa]
1 0.775 −0.038 0.737
2 0.737 −0.040 0.697
3 0.697 −0.043 0.654
4 0.654 −0.046 0.608
5 0.608 −0.050 0.558
6 0.558 −0.055 0.503
7 0.503 −0.061 0.442
8 0.442 −0.071 0.371
9 0.371 −0.088 0.283
10 0.283 0.283 0.566
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 63	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 63	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 63

-- 77 of 245 --

Table 8.4.4: Particle velocity for the 1 meter long rod and 0.5 meter long rod with ten different
material properties.
Layer Incident particle velocity, Reflected particle velocity, Transmitted particle velocity,
UpI [m/s] UpR [m/s] UpT [m/s]
1 0.02 0.001 0.021
2 0.021 0.001 0.022
3 0.022 0.001 0.023
4 0.023 0.002 0.025
5 0.025 0.002 0.027
6 0.027 0.003 0.030
7 0.030 0.004 0.034
8 0.034 0.005 0.039
9 0.039 0.009 0.048
10 0.048 -0.048 0
The transformation with a third degree polynomial gives more reasonable material parameters and the
calculations show that the dynamic response is equal between the two rods. However, the calculations
become more complicated than before since the transformation is non-linear. This means that the
layers must change thickness and are no longer constant.
64 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	64 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	64 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 78 of 245 --

8.4.2 LS-DYNA calculations
The same material properties are used in the numerical analysis as used in the hand calculations, see
Table 8.4.1 and 8.4.2. Both rods are defined in the same model and the modelling procedure is the
same as in previous cases. The results from the analysis can be seen in Table 8.4.5 which presents the
particle velocity. The dynamic response is equal for the two rods and the results are thereby presented
in the same table.
Table 8.4.5: Particle velocity for the 1 meter long rod and 0.5 meter long rod obtained from
LS-DYNA.
Layer Incident particle velocity, Reflected particle velocity, Transmitted particle velocity,
UpI [m/s] UpR [m/s] UpT [m/s]
1 0.019 0.002 0.021
2 0.021 0.001 0.022
3 0.022 0.001 0.023
4 0.023 0.002 0.025
5 0.025 0.002 0.027
6 0.027 0.002 0.029
7 0.029 0.004 0.033
8 0.033 0.006 0.039
9 0.039 0.009 0.048
10 0.048 -0.048 0
Figure 8.4.3 shows how the displacement varies over time t. The data is extracted from the node
where the force is applied (at the free end). It can be seen in the figure that after the reflection at the
free end the displacement between the two rods are slightly different.
Figure 8.4.3: Displacements for 1 meter long rod with ten layers (point line) and for a 0.5 meter long
rod with ten layers (regular line).
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 65	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 65	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 65

-- 79 of 245 --

The results between hand calculations and numerical analysis are very similar, the difference in the
results depends on approximations done in the hand calculations. But the difference is so small that it
can be neglected. The ψ-function used in this case study delivers much better properties compared to
the function used in the last case study.
8.5 Results Case Study 5
The different cases studies have been preformed with theoretical materials and calculated with the
theory of transformational elastodynamics. In this case study the transformation will be tested with
real materials. The procedure is performed with two different ψ-functions, the linear and the non-
linear, in order to be able to compare the different functions. The cross-sectional area, lengths and the
applied force are the same as for the other case studies.
The behaviour of the rod is calculated with a code written in MATLAB, see Appendix F. Where the
impedance is decreased through the rod. The results from the calculation can be seen in Figure 8.5.1,
which shows how the transmitted stress decreases through each layer. The number of layers needed
to satisfy this behaviour is 10 and thereby the incident stress is lowered from 100 MPa to 17.4 MPa ,
see Figure 8.5.1.
Figure 8.5.1: Theoretically calculated stress variation through the rods.
Figure 8.5.2 shows how the theoretical material properties vary for the 1 meter long rod. An
interpolation is made in order to find a function which describes the decrease of Young’s modulus
and the density. The function are then used in the transformation with the two different functions.
66 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	66 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	66 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 80 of 245 --

Figure 8.5.2: The variation of Young’s modulus and the density to fulfil the calculated behaviour.
The calculated function for the density and Young’s modulus are stated in equation (8.5.1) and
(8.5.2), the constants are rounded off. These equations are used in the transformation with the two
ψ-functions.
E(x) = −3.75 · 1011x3 + 8.94 · 1011x2 − 7.61 · 1011x + 2.44 · 1011 (8.5.1)
ρ(x) = −1.4 · 104x3 + 3.34 · 104x2 − 2.84 · 104x + 0.91 · 104 (8.5.2)
8.5.1 Calculation with linear ψ
The linear ψ-function is defined in equation (7.1.1), which is the same ψ-function used in the first
two case studies. The material properties for the original rod and the transformed rod is presented in
Table 8.5.1 and 8.5.2. Figure 8.5.3 presents the variation of the material properties over the length of
the rods.
Figure 8.5.3: The variation of Young’s modulus and the density before (curve A) and after
transformation (curve B).
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 67	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 67	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 67

-- 81 of 245 --

As seen in Figure 8.5.3, the properties for the original rod follows the curves calculated in MATLAB,
see Figure 8.5.2. The properties for the transformed rod is half the Young’s modulus and twice the
density as for the original rod, which is expected when using the linear ψ-function, see Table 8.5.1
and 8.5.2. The wave velocity for the rods are shown in Figure 8.5.4.
Figure 8.5.4: The wave velocity for the original rod (curve A) and for the transformed rod (curve B).
Table 8.5.1: Material properties for a 1 meter long rod with a linear transformation.
Layer Thickness of layer Young’s modulus Density Wave velocity
[m] [GPa] [kg/m3] [m/s]
1 0.1 208.45 7792.39 5172
2 0.1 149.06 5571.87 5172
3 0.1 104.17 3893.78 5172
4 0.1 71.53 2674.01 5172
5 0.1 48.91 1828.44 5172
6 0.1 34.05 1272.95 5172
7 0.1 24.70 923.404 5172
8 0.1 18.61 695.695 5172
9 0.1 13.53 505.698 5172
10 0.1 7.20 269.291 5172
68 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	68 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	68 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 82 of 245 --

Table 8.5.2: Material properties for a 0.5 meter long rod with a linear transformation.
Layer Thickness of layer Young’s modulus Density Wave velocity
[m] [GPa] [kg/m3] [m/s]
1 0.05 104.23 15 584.80 2586
2 0.05 74.53 11 143.70 2586
3 0.05 52.08 7787.56 2586
4 0.05 35.77 5348.03 2586
5 0.05 24.46 3656.88 2586
6 0.05 17.03 2545.89 2586
7 0.05 12.35 1846.81 2586
8 0.05 9.31 1391.39 2586
9 0.05 6.76 1011.4 2586
10 0.05 3.60 538.582 2586
Table 8.5.3 and 8.5.4 present the results from the calculation of the transformation. This calculation
is performed in order to verify that the transformation is correctly done. The dynamic response of the
original rod and the transformed rod are exactly the same, therefore they are presented in the same
tables, see Appendix E for calculations.
Table 8.5.3: Stresses in 1 meter long rod and 0.5 long rod with a linear transformation.
Layer Incident stress, σI [MPa] Reflected stress, σR [MPa] Transmitted stress, σT [MPa]
1 0.775 −0.126 0.646
2 0.646 −0.114 0.532
3 0.532 −0.099 0.433
4 0.433 −0.081 0.352
5 0.352 −0.063 0.289
6 0.289 −0.046 0.243
7 0.243 −0.034 0.209
8 0.209 −0.030 0.179
9 0.179 −0.057 0.122
10 0.122 0.122 0.244
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 69	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 69	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 69

-- 83 of 245 --

Table 8.5.4: Particle velocity in 1 meter long rod and 0.5 long rod a linear transformation.
Layer Incident particle velocity, Reflected particle velocity, Transmitted particle velocity,
UPI [m/s] UPR [m/s] UPT [m/s]
1 0.019 0.003 0.022
2 0.022 0.004 0.026
3 0.026 0.005 0.031
4 0.031 0.006 0.037
5 0.037 0.007 0.044
6 0.044 0.007 0.051
7 0.051 0.007 0.058
8 0.058 0.009 0.067
9 0.067 0.021 0.088
10 0.088 −0.088 0
It can be seen in Table 8.5.3 and 8.5.4 that the stresses decrease which increase the particle velocity
through each layer.
The calculated material properties for the small rod are implemented in MATLAB. The product
between Young’s modulus and the density are calculated for the theoretical properties and for the real
materials used in the calculation, see Appendix F. A comparison is then made between these values
and the materials with the closest value of the product are chosen as a material for the rod. Figure
8.5.5 shows how the density and Young’s modulus varies with the chosen materials compared with
the theoretically calculated values.
Figure 8.5.5: The transmitted stress calculated for real material compared to the theoretical
calculated stress.
The materials which are found for this rod is presented in Table 8.5.5. As can be seen in the table
Bamboo is in both layer 6 and 7 which means that no reflected stress will be created in the interface
between them. All the materials used in the calculations can be observed in Appendix G.
70 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	70 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	70 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 84 of 245 --

Table 8.5.5: Materials chosen for the rod.
Material Young’s modulus [GPa] Density [kg/m3]
Steel 210 7800
Beryllium alloy 245 2900
Zink alloy 75 5500
Alumina alloy 70 2700
Magnesium alloy 44 1800
GRFP (glass) 26 1800
Bamboo 17 700
Bamboo 17 700
Polyester thermoset 3.5 1300
PVC 1.5 1400
Since the rod with real materials do not have the exact same properties as the theoretically calculated
rod the layer thickness need to be changed. The material properties and the layer thickness for the
chosen materials are presented in Table 8.5.6.
Table 8.5.6: Material indata for a rod with real material properties.
Layer Thickness of layer Young’s modulus Density Wave velocity
[m] [GPa] [kg/m3] [m/s]
1 0.1003 210.0 7800 5189
2 0.1777 245.0 2900 9191
3 0.0713 75.0 5500 3693
4 0.0984 70.0 2700 5092
5 0.0955 44.0 1800 4944
6 0.0734 26.0 1800 3801
7 0.09527 17.0 700 4928
8 0.09527 17.0 700 4928
9 0.0317 3.5 1300 5189
10 0.020 1.5 1400 1035
∑ = 0.86
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 71	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 71	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 71

-- 85 of 245 --

In order to do a comparison between the theoretical values and the real materials a calculation is
performed with the same indata as for the other case studies. The results from the calculations are
found in Table 8.5.7 and 8.5.8.
Table 8.5.7: Stresses in the rod with real materials with linear transformation.
Layer Incident stress, σI [MPa] Reflected stress, σR [MPa] Transmitted stress, σT [MPa]
1 0.775 −0.159 0.616
2 0.616 −0.084 0.532
3 0.532 −0.102 0.430
4 0.430 −0.092 0.338
5 0.338 −0.044 0.294
6 0.294 −0.097 0.197
7 0.197 0 0.197
8 0.197 −0.064 0.261
9 0.261 −0.169 0.092
10 0.092 0.092 0.184
Table 8.5.8: Particle velocities in the rod with real materials with linear transformation.
Layer Incident particle velocity, Reflected particle velocity, Transmitted particle velocity,
UpI [m/s] UpR [m/s] UpT [m/s]
1 0.019 0.004 0.023
2 0.023 0.003 0.026
3 0.026 0.005 0.031
4 0.031 0.007 0.038
5 0.038 0.005 0.043
6 0.043 0.014 0.057
7 0.057 0 0.057
8 0.057 −0.018 0.039
9 0.039 0.025 0.064
10 0.064 −0.064 0
The stresses and particle velocities for the theoretical and real cases have some differences. This is
expected since they should not be perfectly equal due to the material in the database does not have
72 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	72 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	72 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 86 of 245 --

exactly the same properties as the theoretically calculated values. Because of this difference, layer 6
and forward layers will not have the exact same response. This difference makes the new rod equal
to 0.86 meter. To decrease the difference between the rods, where the aim is to transform the rod to
0.5 meters, it is needed to find materials which are closer to the theoretically calculated material values.
Figure 8.5.6 presents the displacements for four different rods. The red curve represents the 1 meter
long rod with theoretical material properties and the green curved is the transformed rod. To see the
results for the rod with real materials, two more curves can be seen. The blue curve represents the rod
where the length was 0.5 meters and the pink curve is the same rod but with changed length to 0.86
meters. The change in lengths makes the reflections occur at the same time as the two theoretical rods
and a more similar behaviour is achieved.
Figure 8.5.6: Displacement for real materials with linear transformation.
A new calculation of the transmitted stress between each layer is done in order to find the real
behaviour of the transformed rod. Figure 8.5.7 shows the transmitted stress for the rod with real
materials compared to the theoretically calculated transmitted stress. The calculations show that the
transmitted stress is lowered from 100 MPa to 15.7 MPa . As seen in the figure and in the table above,
between layer six and seven the stress does not decrease. This means that both of these layers have
the same material properties, and therefore no reflection will occur. If more materials are added to the
list this problem can be avoided.
Figure 8.5.7: Transmitted stress with real materials compared to the theoretically calculated
transmitted stress.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 73	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 73	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 73

-- 87 of 245 --

8.5.2 Calculation with non-linear ψ
The ψ-function used in this calculations is the third degree polynomial equation, stated in equation
(7.4.1). The material properties for the original rod is the same as in the case with the linear ψ-function
and can be seen in Table 8.5.1. The material properties for the transformed rod can be seen in Table
8.5.9 and the variation of the material properties over the length can be seen in Figure 8.5.8, where
the original rods is curve A and transformed rod is curve B.
Figure 8.5.8: The variation of Young’s modulus and the density before and after transformation.
The transformation is non-linear, which means that the transformed rod is not half Young’s modulus
and twice the density as for the linear case. The wave velocity for the original and transformed rod
are presented in Figure 8.5.9.
Figure 8.5.9: The wave velocity for the original rod (curve A) and for the transformed rod (curve B).
The material properties and the layer thickness for the transformed rod is presented in Table 8.5.9.
74 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	74 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	74 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 88 of 245 --

Table 8.5.9: Material indata for a 0.5 meter long rod with non-linear transformation.
Layer Thickness of layer Young’s modulus Density Wave velocity
[m] [GPa] [kg/m3] [m/s]
1 0.0905 188.40 8622.3 4674
2 0.0735 109.37 7593.7 3795
3 0.0595 61.85 6557.9 3071
4 0.0485 34.60 5527.7 2502
5 0.0405 19.75 4528.7 2088
6 0.0355 12.05 3598.4 1830
7 0.0335 8.24 2766.8 1726
8 0.0345 6.40 2023.8 1778
9 0.0385 5.19 1317.8 1985
10 0.0445 3.27 593.5 2347
As seen in Table 8.5.9 the thickness of the layers are no longer constant and the material properties
vary in a different way compared to the case with the linear ψ-function. The wave velocity differs
between the two cases which are the reason for the different layer thickness in this case.
Table 8.5.10 shows the calculated stresses and particle velocities for the transformed rod, this in order
to make a comparison between the theoretical and real materials. Since the stresses is equal for the
two rod the results are presented in the same table.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 75	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 75	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 75

-- 89 of 245 --

Table 8.5.10: Stresses for the 1 meter and 0.5 meter long rod with non-linear transformation.
Layer Incident stress, σI [MPa] Reflected stress, σR [MPa] Transmitted stress, σT [MPa]
1 0.775 −0.129 0.646
2 0.0646 −0.114 0.532
3 0.532 −0.099 0.433
4 0.433 −0.081 0.352
5 0.352 −0.063 0.289
6 0.289 −0.046 0.243
7 0.243 −0.034 0.209
8 0.209 −0.033 0.179
9 0.179 −0.057 0.122
10 0.122 0.122 0.244
Table 8.5.11: Particle velocity for the real materials with non-linear transformation.
Layer Incident particle velocity, Reflected particle velocity, Transmitted particle velocity,
UpI [m/s] UpR [m/s] UpT [m/s]
1 0.019 0.003 0.022
2 0.022 0.004 0.026
3 0.026 0.005 0.031
4 0.031 0.006 0.037
5 0.037 0.007 0.044
6 0.044 0.007 0.051
7 0.051 0.007 0.058
8 0.058 0.009 0.067
9 0.067 0.021 0.088
10 0.088 −0.088 0
It can be see that the stresses and particle velocity for the linear and non-linear case are exactly the
same. This means that they will behave in the same way to decrease the stress wave. This is expected
since they both have been transformed to a 0.5 meter long rod. The product of Young’s modulus and
density are therefore equal. The difference between them is the material properties.
76 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	76 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	76 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 90 of 245 --

In order to find the real material properties in this case the same procedure is done as for the case
with the linear ψ-function. The results from the calculations are shown in Figure 8.5.10.
Figure 8.5.10: The transmitted stress calculated for real material compared to the theoretical
calculated stress.
As seen in the Figure 8.5.10 the exact same materials as for the transformation with the linear ψ-
function is calculated. This is because the product between Young’s modulus and the density needs to
be the same between the original rod and the transformed rod. This means that the two transformations
gives the same product and thereby the same materials. The results for the calculations of the real
materials are presented in Table 8.5.7 and 8.5.8.
Since the same materials are used in the both cases the transmitted stress will behave in the same
manner as in the first case with the linear ψ-function, see Figure 8.5.11.
Figure 8.5.11: Transmitted stress with real materials compared to the theoretically calculated
transmitted stress.
In theory, the two ψ-functions generate different material properties and layer thickness. Although,
the real materials becomes the same for both cases. If there is more materials added on the list the
theoretically calculated properties can be fulfilled. Then in a design situation one of the functions may
give better materials to work with. A better way to find the real materials is to do the optimization
on the density and Young’s modulus individually and not on the product. This will also increase the
accuracy of the calculation and thereby come close to the theoretical values.
Even if the aim of creating a 0.5 meter long rod was not fulfilled the length decreased to 0.86 meter is
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 77	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 77	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 77

-- 91 of 245 --

still a considerable decrease. It can also be seen that the transmitted stress decreases about 85% by
using many layers to lower the amplitude of the stress wave.
78 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	78 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	78 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 92 of 245 --

9 Discussion
The discussion chapter is divided in to several sections where the authors discuss the different case
studies and how to improve the method in order to produce a design that works with real materials.
Case study 1
The first case study was done in order to learn how the theory of transformational elastodynamics
works and see if the theory can be applied for a structural element. A simple case was chosen to
just verify the theory. The results show that the method works very well and it is possible to change
the geometry and material properties and still have the same dynamic response. However, this was
a simple case and the stresses are constant through the rod. The damping calculated in LS-DYNA
shows that the influence of the damping is low, however to define the damping coefficients needed to
get accuracy in the results is difficult. According to the literature the damping can be to neglected in
this type of problems.
Case study 2
Since the aim was to create a structure which can lower the transmitted stress the rod was divided into
ten layers, each layer with new material properties. The Young’s modulus was constantly decreasing
and the density constantly increasing. They were chosen to behave in this manner in order to see
what dynamic response the rods would have when the properties constantly change. The transmitted
stress did not constantly decrease through the rod with these material properties, instead it increase
due to the impedance is increasing. This is the reason both density and Young’s modulus constantly
decrease in the latter case studies. But the dynamic response is equal for both the rods.
It can be noticed from this case study that if the impedance is equal between each layer the transfor-
mation is working.
Case study 3 and 4
For case study 3 another ψ-function was tested, the material properties calculated with this function
was unreasonable when they were compared to real materials. Therefore, the function was changed to
case study 4.
As seen in both cases the displacements from the calculations in LS-DYNA differs a bit from the
two rods. The wave hit the fixed boundary at approximately 0.2 · 10−3 seconds. The wave gets
totally reflected with the same sign as before which results in the increased displacement. At ap-
proximately 0.4 · 10−3 seconds, the wave hits the free end where the force was applied and the stress
wave change sign. At this point the displacement differs between the two cases. This difference
might depend on the indata in LS-DYNA where the input data cannot be as exact as the hand calcu-
lations. Therefore, the results differ after a couple of reflections. However, the difference is very small.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 79	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 79	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 79

-- 93 of 245 --

The two case studies gives the same results with the two transformation functions. This is because
same indata is used for the original rod. As mentioned before the impedance needs to be equal between
the original rod and transformed rod. This means that the impedance is going to be independent of the
transformation function. The difference is the thickness of the layers and specific parameters which
fulfil the impedance.
Case study 5
The study proves that it is possible to create a rod which is smaller than the original design with
existing materials. Although, the transformed length of 0.5 meter could not be reached but a length of
0.86 meter is still a considerable decrease. This error depends on the chosen materials do not fulfil
the exact theoretical values. This means that the layer thickness need to be changed in order for the
reflections to happen at the same time, the new layer thickness is not calculated with the ψ-function
but extracted from the wave velocity equation in order to see after how long time the reflection should
occur. The calculations give many digits and are rounded off, which means that the response will
be a bit different. However, the list of materials used in the project was small and by increasing the
number of materials it can be possible to come closer to the theoretical values. Also, due to the small
database of materials, the materials are chosen after the product of Young’s modulus and the density.
A better way to do the optimization of the real materials is to optimize on Young’s modulus and the
density individually.
ψ-functions
The ψ-function has a great influence of the material properties and thickness of the layers. The
material properties can vary much and be impossible to fulfil in reality even if it is working in the
theory. Therefore, three different functions have been tried in order to see a difference between them
and hopefully find a function which results in reasonable materials. These functions may not be the
most optimal and more functions are needed to be tried out in order to find a suitable solution.
There are values that need to be avoided when constructing the ψ-function. The function can not
have a derivative close to zero or going to infinity. If this happens the material properties will go
towards zero or infinity which is not realistic. This was not considered when designing the first two
ψ-functions which resulted in very large or small values for Young’s modulus or the density. In the
third ψ-function this was taken into consideration and as a result good values were received, which
correspond to existing materials. However, the calculations become more complex when choosing a
higher order ψ-function.
When the ψ-function is no longer linear the thickness of each layer will not be constant as in the case
of a linear function. In order to have the same response in the two rods the incident wave needs to be
reflected at the same time, when the ψ-function is non-linear the wave velocity will not be halved
in each layer compared to the original rod. Therefore, it is needed to adjust the layer thickness so
the reflections happen at the same time. When designing a structure with this method it is therefore
important to check if all the layers have a thickness which is possible to construct.
80 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	80 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	80 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 94 of 245 --

Model
The material properties play a huge roll in this concept of design, especially the product between
Young’s modulus and the density. This product needs to be equal between the two rods in order for
the transformation to work. This also means that it is possible to choose any materials which fulfil
this, but the layer thickness will be different for each set of materials. By using the transformation
technique it is easier to decide and find the material properties which fulfil the design requirements.
The lengths and the force of the rods are chosen to be the same in all case studies. This is in order
to be able to do a comparison between the different cases and thereby improve the models. The
thickness of the layers and lengths are chosen to make the calculations easier and prove the theory. In
real design the length of the structure can be changed to better suit the reality.
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 81	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 81	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 81

-- 95 of 245 --

10 Conclusions
The purpose with the thesis was to increase the knowledge about wave propagation between dif-
ferent materials. The literature study covers the basics of this phenomenon, with explanations and
derivations of common equations. The study focus on elastic stress waves and the theory of transfor-
mational elastodynamics which is used later in the thesis in order to design a rod which can reduce
the amplitude of the stress wave considerably. The aim with the thesis was to combine the theory of
elastic wave propagation and transformational elastodynamics in order to be able to design a small
strengthening structure which decrease the stress amplitude of the incident wave.
The theory of elastic wave where the stress amplitude is constantly decreased through the rod is
feasible on simple cases. Combined with the theory of transformational elastodynamics the geometry
of the rods can be transformed into a smaller rod with the same dynamic response. However, in order
for the transformation to work the impedance need to be the same for the original and transformed rod.
The theory has only been tested for one type of rod which is fixed in one end and free at the other end.
ψ-functions used in the calculations is not optimized for each case, they are written by the authors in
order to find a difference between them. It is needed to optimize the transformation in order to keep
costs and materials to a minimum, which is not taken into consideration.
The result from the last case study shows that it is possible to construct a smaller rod with real material
properties with the same dynamic response. However, to increase the accuracy of the results more
materials need to be added to the calculations. Also, optimize on Young’s modulus and the density
individually instead of the product between them will increase the accuracy of the results.
Further Studies
In the project several different ψ-functions were used in the calculations in order to find the material
parameters for the transformed rod, these functions are only chosen by the authors in order to find a
difference between the functions. Another theory which is similar to transformational elastodynamics
is wave splitting. Wave splitting is a more general way to solve the transformation between the rods.
With wave splitting it is possible to formulate conditions in order to optimize the calculations for each
case.
Furthermore, the tests carried out in the project are with one dimensional elastic waves which do not
cause any permanent damage to the material. A blast or a high velocity impact creates plastic waves
or even a shock wave in the material. This phenomenon creates other waves in the material such as
shear waves and Rayleigh waves which are needed to be taken into consideration. The calculations
also need to be extended to two- and three dimensions in order to verify the real behaviour. The
responses of the rods are only theoretical and therefore laboratory testing is necessary in order to find
if the method works in reality.
The method can also be extended to more fields than just structural engineering, for example this can
be used in the car industry, helmets and other parts where space and dynamic problems are a problem.
82 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	82 , Civil and Environmental Engineering, Master’s Thesis, 2015:73	82 , Civil and Environmental Engineering, Master’s Thesis, 2015:73

-- 96 of 245 --

11 References
Craig, R. and Kurdila, A. (2006) Fundamentals of structural dynamics. Second edition. New York:
John Wiley & Sons, Inc
Ellobody, E. Feng, R. and Young, B. (2014) Finite Element Analysis and Design of Metal Structures
Amsterdam: Elsevier inc
Johansson, M. (2012) Luftstötvåg. [Electronic] Myndigheten för samhällskydd och beredskap. (Re-
port: MSB448)
Lempriere, M. (2002) Ultrasound and Elastic Waves: Frequently Asked Questions. [Elektronic]
Amsterdam: Adademic Press
Leppänen, J. (2012) Splitterverkan. [Electronic] Myndigheten för samhällskydd och beredskap.
(Report: MSB345)
Leppänen, J. (2002) Dynamic Behaviour of Concrete Structures subjected to Blast and Fragment
Impacts. [Electronic] Gothenburg: Chalmers University of Technology
Lifshitz, et alii. (2001) Handbook of shock waves. [Electronic] Volume 3. Burlington: Academic press
Macaulay, M. (1987) Introduction to impact engineering. [Electronic] New York: Chapman and Hall
Ltd
Meyers, Marc A. (1994) Dynamic behavior of materials. New York: John Wiley & Sons, Inc
Plos, M. Broo, H. and Lundgren, K. (2008) Guide to nonlinear modelling Gothenburg: Chalmers
University of Technology
Zukas, J. (1990) High velocity impact dynamics. New York: John Wiley & Sons, Inc
Figure references
Picture of a Rayleigh wave [Electronic figure] https://en.wikipedia.org/wiki/Rayleigh_
wave#/media/File:Rayleigh_wave.jpg [Access 2015-04-10]
Plane P-wave [Electronic figure] https://en.wikipedia.org/wiki/P-wave#/media/File:Onde_
compression_impulsion_1d_30_petit.gif [Access 2015-04-10]
Plane shear wave [Electronic figure] https://en.wikipedia.org/wiki/S-wave#/media/File:
Onde_cisaillement_impulsion_1d_30_petit.gif [Access 2015-04-10]
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 83	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 83	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 83

-- 97 of 245 --

A Material properties and dynamic response calcula-
tions, Case study 1
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 A-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 A-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 A-1

-- 98 of 245 --

Transformation with x-function (linear), Case study 1
Following calculations are made with the theory of elastic wave propagation between different
materials. This is done in order to compare two Rods (A and B) with different lengths and material
parameters. Stresses and particle velocity for intial waves will be determine and presented below.
Material parameters Rod A
Young's modulus: Density: Wave velocity:
EA1 2.10 1011
⋅ Pa	⋅	:= ρA1 7850 kg
m3
⋅	:= cA1
EA1
ρA1
5.172 103
× m
s
=	:=
Material parameters Rod B
Young's modulus: Density: Wave velocity:
EB1 1.05 1011
⋅ Pa	⋅	:= ρB1 15700 kg
m3
⋅	:= cB1
EB1
ρB1
2.586 103
× m
s
=	:=

-- 99 of 245 --

Stresses in Rod A
Force at the left end of the Rod A and B
F 500N	:=
Cross section area of Rod A and B
A 6.450 10 4	−
⋅ m2
:=
Layer 1:
Intial stress wave of Rod A
σI1
F
A 0.775 MPa	⋅	=	:=
UPI.A1
σI1
ρA1 cA1	⋅ 0.019 m
s
=	:= Intial stress wave of Rod
Stresses in Rod A
Layer 1:
Intial stress wave of Rod B
σB1.I σI1 0.775 MPa	⋅	=	:=
Intial stress wave of Rod B
UPI.B1
σB1.I
ρB1 cB1	⋅ 0.019 m
s
=	:=

-- 100 of 245 --

B Material properties and dynamic response calcula-
tions, Case study 2
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 B-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 B-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 B-1

-- 101 of 245 --

�������������������������������������������������������
���������
Defines the psi functions and calculating beta(x)
����[�_] �= ���
� * �
����� ���
� * � ⩵ �� �
{{� → �� �}}
�������[�_] �= � �
ψ = ����
����
ψ��� = �������
�������
β[�_] �= ψ �[ψ���[�]]
Defines the material functions for Young’s modulus and the density
��������[��� ρ�]� �� = ���� × �� � � ρ� = ������
����[�_] �= 	� - �
� * ��
ρ[�_] �= ρ� * �
�
Plots the different material curves for the material properties and the wave velocity
� = ����[����[�]� {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → {�� ��}� ���������� → {�����}]
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
Pa
����������������������������������������������

-- 102 of 245 --

� = ����ρ[�]� {�� �� �}� ��������� → ���������[�]� ���������� → {�� �}�
��������� → {�� ���� �}� ��������� → �� ��  � � �� ���������� → {�����}
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
10 000
12 000
14 000
kg
m 3
����[β[�]� {�� �� �}� ��������� → ���������[�]� ���������� → {�� �}]
0.2 	0.4 	0.6 	0.8 	1.0
0.2
0.4
0.6
0.8
1.0
�� = ����[����[ψ���[�]] β[�]� {�� �� ���}�
��������� → ���������[�]� ���������� → {�� �}]
0.1 	0.2 	0.3 	0.4 	0.5
2 × 10 10
4 × 10 10
6 × 10 10
8 × 10 10
1 × 10 11
2 ��� x_från_matlab.nb
����������������������������������������������

-- 103 of 245 --

� = ���� ρ[ψ���[�]]
β[�] � {�� �� ���}� ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
5000
10 000
15 000
����[ψ���[�]� {�� �� �}� ���������� → {�� �}]
0.2 	0.4 	0.6 	0.8 	1.0
0.5
1.0
1.5
2.0
���� = ���� ����[�]
ρ[�] � {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → {�� � / �}� ���������� → {�����}
0.2 	0.4 	0.6 	0.8 	1.0 m
5000
10 000
15 000
20 000
25 000
m
s
x_från_matlab.nb 	��� 3
����������������������������������������������

-- 104 of 245 --

���� = ���� ����[ψ���[�]] β[�]
ρ[ψ���[�]]
β[�]
�
{�� �� ���}� ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
2000
4000
6000
8000
10 000
12 000
Calculating the material properties from the curves for the transformed and original rods.
���������������
�� � + ����� ����[�]� ρ[�]� ����[�] ρ[�]� ����[�]
ρ[�] � �� ���
� � � - ���
� � ���
���� ��� ����� × �� �� 	����� 	������� × �� �� �� �����
���� ��� ����� × �� �� ������ ������� × �� �� �� �����
���� ��� ����� × �� �� ������ ������� × �� �� 	������
���� ��� ����� × �� �� ������ ������� × �� �� 	�������
���� ��� ����� × �� �� ������ ������� × �� �� 	�������
���� ��� 	���� × �� �� 	������ ������� × �� �� 	�������
���� ��� 	���� × �� �� 	������ ������� × �� �� 	�������
���� ��� 	���� × �� �� 	������ ������� × �� �� 	�������
���� ��� 	���� × �� �� 	������ ������� × �� �� 	�������
���� 	�� 	���� × �� �� 	������ ������� × �� �� 	�������
����������������� ψ[�]� β[ψ[�]] ����[ψ���[ψ[�]]]�
ρ[ψ���[ψ[�]]]
β[ψ[�]] � β[ψ[�]] ����[ψ���[ψ[�]]] ρ[ψ���[ψ[�]]]
β[ψ[�]] �
β[ψ[�]] ����[ψ���[ψ[�]]]
ρ[ψ���[ψ[�]]]
β[ψ[�]]
� �� ���
� � � - ���
� � ���
���� ����� ����� × �� �� 	���� 	������� × �� �� �� �����
���� ����� ����� × �� �� 	����� 	������� × �� �� 	�������
���� ����� ����� × �� �� 	����� 	������� × �� �� 	�������
���� ����� ����� × �� �� 	����� 	������� × �� �� 	�������
���� ����� ����� × �� �� 	����� 	������� × �� �� 	�������
���� ����� ����� × �� �� 	����� 	������� × �� �� 	�������
���� ����� ����� × �� �� �� ���� ������� × �� �� 	�������
���� ����� ����� × �� �� �� ���� ������� × �� �� 	�������
���� ����� ����� × �� �� �� ���� ������� × �� �� 	�������
���� ����� 	���� × �� � 	�� ���� ������� × �� �� 	�������
Plotting the final plots which shows the transformed and orignal values for Young’s modulus the
4 ��� x_från_matlab.nb
����������������������������������������������

-- 105 of 245 --

Plotting 	plots 	orignal 	Young
density and the wave velocity
�������� = ����[�� ��]
�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
Pa
�������� = ����[�� �]
�
�
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
10 000
12 000
14 000
kg
m 3
�������� = ����[����� ����]
�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
5000
10 000
15 000
20 000
25 000
m
s
x_från_matlab.nb 	��� 5
����������������������������������������������

-- 106 of 245 --

Transformation with x^3-function, Case Study 5
Following calculations are made with the theory of elastic wave propagation between different
materials. This is done in order to compare two Rods (A and B) with different lengths and material
parameters. Stresses and particle velocity for incident, reflected and transmitted waves will be
determine and presented below.
Material parameters Rod A
Material parameters has been calculated in mathematica
Young's modulus: 	Density: 	Wave velocity:
EA1 	199.5 10 9
 	Pa		 	ρA1 	392.5 kg
m
3
	 	cA1
EA1
ρA1
2.255 	10 4
 m
s
	
EA2 	178.5 10 9
 	Pa		 	ρA2 	1177.5 kg
m
3
	 	cA2
EA2
ρA2
1.231 	10 4
 m
s
	
EA3 	157.5 10 9
 	Pa		 	ρA3 	1962.5 kg
m
3
	 	cA3
EA3
ρA3
8.959 	10 3
 m
s
	

-- 107 of 245 --

EA4 	136.5 10 9
 	Pa		 	ρA4 	2747.5 kg
m
3
	 cA4
EA4
ρA4
7.049 	10 3
 m
s
	
EA5 	115.5 10 9
 	Pa		 	ρA5 	3532.5 kg
m
3
	 cA5
EA5
ρA5
5.718 	10 3
 m
s
	
EA6 	94.5 10
9
 	Pa		 	ρA6 	4317.5 kg
m
3
	 cA6
EA6
ρA6
4.678 	10 3
 m
s
	
EA7 	73.5 10
9
 	Pa		 	ρA7 	5102.5 kg
m
3
	 cA7
EA7
ρA7
3.795 	10 3
 m
s
	
EA8 	52.5 10
9
 	Pa		 	ρA8 	5887.5 kg
m
3
	 cA8
EA8
ρA8
2.986 	10 3
 m
s
	
EA9 	31.5 10
9
 	Pa		 	ρA9 	6672.5 kg
m
3
	 	cA9
EA9
ρA9
2.173 	10 3
 m
s
	
EA10 	10.5 10 9
 	Pa		 	ρA10 	7457.5 kg
m
3
	 cA10
EA10
ρA10
1.187 	10 3
 m
s
	
Stresses in Rod A
Force at the left end of the Rod A and B
F 	500N	
Cross section area of Rod A and B
A 	6.450 10 4	
 	m
2

Layer 1:
Intial stress wave of Rod A and B
σI1
F
A 0.775 MPa			
σA1.R
ρA2 cA2	 	ρA1 cA1		
ρA2 cA2	 	ρA1 cA1		 σI1	 	0.188 MPa			 	Reflected stress wave, first layer in Rod A

-- 108 of 245 --

σA1.T
2 ρA2	 	cA2	
ρA1 cA1	 	ρA2 cA2		 σI1	 	0.963 MPa			 	Transmitted stress wave, first layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the first layer is in balance
σA1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod A
UPI.A1
σI1
ρA1 cA1	 0.088 m
s
	
UPR.A1
σA1.R	
ρA1 cA1	 0.021	 m
s
	 	Reflected particle velocity, first layer of Rod
A
UPT.A1
σA1.T
ρA2 cA2	 0.066 m
s
	 	Transmitted particle velocity, first layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the intial particle
velocity, meaning that the first layer is in
balance
UPT.A1 	UPR.A1	 	0.088 m
s

Layer 2:
σA2.I 	σA1.T 	0.963 MPa			 	Incident stress wave
σA2.R
ρA3 cA1	 	ρA2 cA2		
ρA3 cA1	 	ρA2 cA2		 σA2.I	 	0.488 MPa			 	Reflected stress wave, second layer in Rod A
σA2.T
2 ρA3	 	cA3	
ρA2 cA2	 	ρA3 cA3		 σA2.I	 	1.055 MPa			 	Transmitted stress wave, second layer in
Rod A
Transmitted stress wave minus reflected

-- 109 of 245 --

stress wave equals to the incident stress
wave, meaning that the second layer is in
balance
σA2.T 	σA2.R	 	0.568 MPa		
Incident particle velocity, second second of
Rod A
UPI.A2
σA2.I
ρA2 cA2	 0.066 m
s
	
UPR.A2
σA2.R	
ρA2 cA2	 0.034	 m
s
	 	Reflected particle velocity, second layer of
Rod A
UPT.A2
σA2.T
ρA3 cA3	 0.06 m
s
	 	Transmitted particle velocity, second layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the second
layer is in balance
UPT.A2 	UPR.A2	 	0.094 m
s

Layer 3:
σA3.I 	σA2.T 	1.055 MPa			 	Incident stress wave
σA3.R
ρA4 cA4	 	ρA3 cA3		
ρA4 cA4	 	ρA3 cA3		 σA3.I	 	0.051 MPa			 	Reflected stress wave, third layer in Rod A
σA3.T
2 ρA4	 	cA4	
ρA3 cA3	 	ρA4 cA4		 σA3.I	 	1.106 MPa			 	Transmitted stress wave, third layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the third layer is in balance
σA3.T 	σA3.R	 	1.055 MPa		
Incident particle velocity, third layer of Rod A
UPI.A3
σA3.I
ρA3 cA3	 0.06 m
s
	

-- 110 of 245 --

UPR.A3
σA3.R	
ρA3 cA3	 2.899	 	10 3	
 m
s
	 	Reflected particle velocity, third layer of Rod
A
UPT.A3
σA3.T
ρA4 cA4	 0.057 m
s
	 	Transmitted particle velocity, third layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the third layer
is in balance
UPT.A3 	UPR.A3	 	0.06 m
s

Layer 4:
σA4.I 	σA3.T 	1.106 MPa			 	Incident stress wave
σA4.R
ρA5 cA5	 	ρA4 cA4		
ρA5 cA5	 	ρA4 cA4		 σA4.I	 	0.023 MPa			 	Reflected stress wave, fourth layer in Rod A
σA4.T
2 ρA5	 	cA5	
ρA4 cA4	 	ρA5 cA5		 σA4.I	 	1.13 MPa			 	Transmitted stress wave, fourth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the fourth layer is in balance
σA4.T 	σA4.R	 	1.106 MPa		
Incident particle velocity, fourth layer of
Rod A
UPI.A4
σA4.I
ρA4 cA4	 0.057 m
s
	
UPR.A4
σA4.R	
ρA4 cA4	 1.203	 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod
A
UPT.A4
σA4.T
ρA5 cA5	 0.056 m
s
	 	Transmitted particle velocity, fourth layer of
Rod A

-- 111 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the fourth
layer is in balance
UPT.A4 	UPR.A4	 	0.057 m
s

Layer 5:
σA5.I 	σA4.T 	1.13 MPa			 	Incident stress wave
σA5.R
ρA6 cA6	 	ρA5 cA5		
ρA6 cA6	 	ρA5 cA5		 σA5.I	 	0 MPa			 	Reflected stress wave, fifth layer in Rod A
σA5.T
2 ρA6	 	cA6	
ρA5 cA5	 	ρA6 cA6		 σA5.I	 	1.13 MPa			 	Transmitted stress wave, fifth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the fifth layer is in
balance
σA5.T 	σA5.R	 	1.13 MPa		
Incident particle velocity, fifth layer of Rod A
UPI.A5
σA5.I
ρA5 cA5	 0.056 m
s
	
UPR.A5
σA5.R	
ρA5 cA5	 0 m
s
	 	Reflected particle velocity, fifth layer of Rod
A
UPT.A5
σA5.T
ρA6 cA6	 0.056 m
s
	 	Transmitted particle velocity, fifth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.A5 	UPR.A5	 	0.056 m
s

Layer 6:
σA6.I 	σA5.T 	1.13 MPa			 	Incident stress wave

-- 112 of 245 --

σA6.R
ρA7 cA7	 	ρA6 cA6		
ρA7 cA7	 	ρA6 cA6		 σA6.I	 	0.024	 	MPa			 	Reflected stress wave, sixth layer in Rod A
σA6.T
2 ρA7	 	cA7	
ρA6 cA6	 	ρA7 cA7		 σA6.I	 	1.106 MPa			 	Transmitted stress wave, sixth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the sixth layer is in balance
σA6.T 	σA6.R	 	1.13 MPa		
Incident particle velocity, sixth layer of
Rod A
UPI.A6
σA6.I
ρA6 cA6	 0.056 m
s
	
UPR.A6
σA6.R	
ρA6 cA6	 1.178 	10 3	
 m
s
	 	Reflected particle velocity, sixth layer of Rod
A
UPT.A6
σA6.T
ρA7 cA7	 0.057 m
s
	 	Transmitted particle velocity, sixth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the sixth layer
is in balance
UPT.A6 	UPR.A6	 	0.056 m
s

Layer 7:
σA7.I 	σA6.T 	1.106 MPa			 	Incident stress wave
σA7.R
ρA8 cA8	 	ρA7 cA7		
ρA8 cA8	 	ρA7 cA7		 σA7.I	 	0.053	 	MPa			 	Reflected stress wave, seventh layer in Rod A
σA7.T
2 ρA8	 	cA8	
ρA7 cA7	 	ρA8 cA8		 σA7.I	 	1.052 MPa			 	Transmitted stress wave, seventh layer in
Rod A

-- 113 of 245 --

Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the seventh layer is in balance
σA7.T 	σA7.R	 	1.106 MPa		
Incident particle velocity, seventh layer of
Rod A
UPI.A7
σA7.I
ρA7 cA7	 0.057 m
s
	
UPR.A7
σA7.R	
ρA7 cA7	 2.758 	10 3	
 m
s
	 	Reflected particle velocity, seventh layer of
Rod A
UPT.A7
σA7.T
ρA8 cA8	 0.06 m
s
	 	Transmitted particle velocity, seventh layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the seventh
layer is in balance
UPT.A7 	UPR.A7	 	0.057 m
s

Layer 8:
σA8.I 	σA7.T 	1.052 MPa			 	Incident stress wave
σA8.R
ρA9 cA9	 	ρA8 cA8		
ρA9 cA9	 	ρA8 cA8		 σA8.I	 	0.101	 	MPa			 	Reflected stress wave, eighth layer in Rod A
σA8.T
2 ρA9	 	cA9	
ρA8 cA8	 	ρA9 cA9		 σA8.I	 	0.951 MPa			 	Transmitted stress wave, eighth layer in
Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the eighth layer is in
balance
σA8.T 	σA8.R	 	1.052 MPa		
Incident particle velocity, eighth layer of
Rod A
UPI.A8
σA8.I
ρA8 cA8	 0.06 m
s
	

-- 114 of 245 --

UPR.A8
σA8.R	
ρA8 cA8	 5.753 	10 3	
 m
s
	 	Reflected particle velocity, eighth layer of
Rod A
UPT.A8
σA8.T
ρA9 cA9	 0.066 m
s
	 	Transmitted particle velocity, eighth layer
of Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the eigth layer
is in balance
UPT.A8 	UPR.A8	 	0.06 m
s

Layer 9:
σA9.I 	σA8.T 	0.951 MPa			 	Incident stress wave
σA9.R
ρA10 cA10	 	ρA9 cA9		
ρA10 cA10	 	ρA9 cA9		 σA9.I	 	0.23	 	MPa			 	Reflected stress wave, ninth layer in Rod A
σA9.T
2 ρA10	 	cA10	
ρA9 cA9	 	ρA10 cA10		 σA9.I	 	0.721 MPa			 	Transmitted stress wave, ninth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the ninth layer is in balance
σA9.T 	σA9.R	 	0.951 MPa		
Incident particle velocity, ninth layer of
Rod A
UPI.A9
σA9.I
ρA9 cA9	 0.066 m
s
	
UPR.A9
σA9.R	
ρA9 cA9	 0.016 m
s
	 	Reflected particle velocity, ninth layer of Rod
A
UPT.A9
σA9.T
ρA10 cA10	 0.081 m
s
	 	Transmitted particle velocity, ninth layer of
Rod A

-- 115 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
UPT.A9 	UPR.A9	 	0.066 m
s

Layer 10:
σA10.I 	σA9.T 	0.721 MPa			 	Incident stress wave
σA10.R 	σA9.T 	0.721 MPa			 	Reflected stress wave, tenth layer in Rod A
No transmitted stress wave in tenth layer
σA10.I 	σA10.R	 	1.442 MPa		 	Balance in the layer
Incident particle velocity, tenth layer of
Rod A
UPI.A10
σA10.I
ρA10 cA10	 0.081 m
s
	
UPR.A10 	UPI.A10 	0.081 m
s
	 	Reflected particle velocity, tenth layer of Rod
A
No transmitted stress wave in tenth layer
UPR.A10 	UPI.A10	 	0 m
s
 	Balance in the layer

-- 116 of 245 --

Material parameters Rod B
Material parameters is calculated from Mathematica
Young's modulus: 	Density: 	Wave velocity:
EB1 	99.75GPa	 	ρB1 	785 kg
m
3
 	cB1
EB1
ρB1
1.127 	10 4
 m
s
	
EB2 	89.25GPa	 	ρB2 	2355 kg
m
3
	 	cB2
EB2
ρB2
6.156 	10 3
 m
s
	
EB3 	78.75GPa	 	ρB3 	3925 kg
m
3
	 	cB3
EB3
ρB3
4.479 	10 3
 m
s
	
EB4 	68.25GPa	 	ρB4 	5495 kg
m
3
	 cB4
EB4
ρB4
3.524 	10 3
 m
s
	
EB5 	57.75GPa	 	ρB5 	7065 kg
m
3
	 cB5
EB5
ρB5
2.859 	10 3
 m
s
	
EB6 	47.25GPa	 	ρB6 	8635 kg
m
3
	 cB6
EB6
ρB6
2.339 	10 3
 m
s
	
EB7 	36.75GPa	 	ρB7 	10205 kg
m
3
	 cB7
EB7
ρB7
1.898 	10 3
 m
s
	
EB8 	26.25GPa	 	ρB8 	11775 kg
m
3
	 cB8
EB8
ρB8
1.493 	10 3
 m
s
	
EB9 	15.75GPa	 	ρB9 	13345 kg
m
3
	 cB9
EB9
ρB9
1.086 	10 3
 m
s
	
EB10 	5.25GPa	 	ρB10 	14915 kg
m
3
	 cB10
EB10
ρB10
593.291 m
s
	

-- 117 of 245 --

Stresses Rod B
Layer 1:
Intial stress wave of Rod A and B
σB1.I
F
A 0.775 MPa			
σB1.R
ρB2 cB2	 	ρB1 cB1		
ρB2 cB2	 	ρB1 cB1		 σI1	 	0.188 MPa			 	Reflected stress wave, first layer in Rod B
σB1.T
2 ρB2	 	cB2	
ρB1 cB1	 	ρB2 cB2		 σI1	 	0.963 MPa			 	Transmitted stress wave, first layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the first layer is in balance
σB1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod B
UPI.B1
σB1.I
ρB1 cB1	 0.088 m
s
	
UPR.B1
σB1.R	
ρB1 cB1	 0.021	 m
s
	 	Reflected particle velocity, first layer of Rod B
UPT.B1
σB1.T
ρB2 cB2	 0.066 m
s
	 	Transmitted particle velocity, first layer of
Rod B
Transmitted particle velocity minus reflected
particle velocity equals to the initial particle
velocity, meaning that the first layer is in
balance
UPT.B1 	UPR.B1	 	0.088 m
s


-- 118 of 245 --

Layer 2:
σB2.I 	σB1.T 	0.963 MPa			 	Incident stress wave
σB2.R
ρB3 cB3	 	ρB2 cB2		
ρB3 cB3	 	ρB2 cB2		 σB2.I	 	0.093 MPa			 	Reflected stress wave, second layer in Rod B
σB2.T
2 ρB3	 	cB3	
ρB2 cB2	 	ρB3 cB3		 σB2.I	 	1.055 MPa			 	Transmitted stress wave, second layer in
Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the second layer is in balance
σB2.T 	σB2.R	 	0.963 MPa		
Incident particle velocity, second layer of
Rod B
UPI.B2
σB2.I
ρB2 cB2	 0.066 m
s
	
UPR.B2
σB2.R	
ρB2 cB2	 6.383	 	10 3	
 m
s
	 	Reflected particle velocity, second layer
of Rod B
Transmitted particle velocity, second layer of
Rod B	UPT.B2
σB2.T
ρB3 cB3	 0.06 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the second layer is in
balance
UPT.B2 	UPR.B2	 	0.066 m
s

Layer 3:
σB3.I 	σB2.T 	1.055 MPa			 	Incident stress wave
σB3.R
ρB4 cB4	 	ρB3 cB3		
ρB4 cB4	 	ρB3 cB3		 σB3.I	 	0.051 MPa			 	Reflected stress wave, third layer in Rod B

-- 119 of 245 --

σB3.T
2 ρB4	 	cB4	
ρB3 cB3	 	ρB4 cB4		 σB3.I	 	1.106 MPa			 	Transmitted stress wave, third layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the third layer is in balance
σB3.T 	σB3.R	 	1.055 MPa		
Incident particle velocity, third layer of Rod B
UPI.B3
σB3.I
ρB3 cB3	 0.06 m
s
	
UPR.B3
σB3.R	
ρB3 cB3	 2.899	 	10 3	
 m
s
	 	Reflected particle velocity, third layer of Rod B
Transmitted particle velocity, third layer of
Rod B	UPT.B3
σB3.T
ρB4 cB4	 0.057 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the third layer is in
balance
UPT.B3 	UPR.B3	 	0.06 m
s

Layer 4:
σB4.I 	σB3.T 	1.106 MPa			 	Incident stress wave
σB4.R
ρB5 cB5	 	ρB4 cB4		
ρB5 cB5	 	ρB4 cB4		 σB4.I	 	0.023 MPa			 	Reflected stress wave, fourth layer in Rod B
σB4.T
2 ρB5	 	cB5	
ρB4 cB4	 	ρB5 cB5		 σB4.I	 	1.13 MPa			 	Transmitted stress wave, fourth layer in Rod B
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the fourth layer is in balance
σB4.T 	σB4.R	 	1.106 MPa		
Incident particle velocity, fourth layer of Rod B
UPI.B4
σB4.I
ρB4 cB4	 0.057 m
s
	

-- 120 of 245 --

UPR.B4
σB4.R	
ρB4 cB4	 1.203	 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod B
Transmitted particle velocity, fourth layer of
Rod B	UPT.B4
σB4.T
ρB5 cB5	 0.056 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fourth layer is in
balance
UPT.B4 	UPR.B4	 	0.057 m
s

Layer 5:
σB5.I 	σB4.T 	1.13 MPa			 	Incident stress wave
σB5.R
ρB6 cB6	 	ρB5 cB5		
ρB6 cB6	 	ρB5 cB5		 σB5.I	 	0 MPa			 	Reflected stress wave, fifth layer in Rod B
σB5.T
2 ρB6	 	cB6	
ρB5 cB5	 	ρB6 cB6		 σB5.I	 	1.13 MPa			 	Transmitted stress wave, fifth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the fifth layer is in balance
σB5.T 	σB5.R	 	1.13 MPa		
Incident particle velocity, fifth layer of Rod B
UPI.B5
σB5.I
ρB5 cB5	 0.056 m
s
	
UPR.B5
σB5.R	
ρB5 cB5	 0 m
s
	 	Reflected particle velocity, fifth layer of Rod B
Transmitted particle velocity, fifth layer of
Rod B	UPT.B5
σB5.T
ρB6 cB6	 0.056 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.B5 	UPR.B5	 	0.056 m
s


-- 121 of 245 --

Layer 6:
σB6.I 	σB5.T 	1.13 MPa			 	Incident stress wave
σB6.R
ρB7 cB7	 	ρB6 cB6		
ρB7 cB7	 	ρB6 cB6		 σB6.I	 	0.024	 	MPa			 	Reflected stress wave, sixth layer in Rod B
σB6.T
2 ρB7	 	cB7	
ρB6 cB6	 	ρB7 cB7		 σB6.I	 	1.106 MPa			 	Transmitted stress wave, sixth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the sixth layer is in balance
σB6.T 	σB6.R	 	1.13 MPa		
Incident particle velocity, sixth layer of Rod B
UPI.B6
σB6.I
ρB6 cB6	 0.056 m
s
	
UPR.B6
σB6.R	
ρB6 cB6	 1.178 	10 3	
 m
s
	 	Reflected particle velocity, sixth layer of Rod B
Transmitted particle velocity, sixth layer of
Rod B	UPT.B6
σB6.T
ρB7 cB7	 0.057 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the sixth layer is in
balance
UPT.B6 	UPR.B6	 	0.056 m
s

Layer 7:
σB7.I 	σB6.T 	1.106 MPa			 	Incident stress wave
σB7.R
ρB8 cB8	 	ρB7 cB7		
ρB8 cB8	 	ρB7 cB7		 σB7.I	 	0.053	 	MPa			 	Reflected stress wave, seventh layer in Rod B

-- 122 of 245 --

σB7.T
2 ρB8	 	cB8	
ρB7 cB7	 	ρB8 cB8		 σB7.I	 	1.052 MPa			 	Transmitted stress wave, seventh layer in
Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the seventh layer is in balance
σB7.T 	σB7.R	 	1.106 MPa		
Incident particle velocity, seventh layer of
Rod B
UPI.B7
σB7.I
ρB7 cB7	 0.057 m
s
	
UPR.B7
σB7.R	
ρB7 cB7	 2.758 	10 3	
 m
s
	 	Reflected particle velocity, seventh layer of
Rod B
Transmitted particle velocity, seventh layer of
Rod B	UPT.B7
σB7.T
ρB8 cB8	 0.06 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the seventh layer is in
balance
UPT.B7 	UPR.B7	 	0.057 m
s

Layer 8:
σB8.I 	σB7.T 	1.052 MPa			 	Incident stress wave
σB8.R
ρB9 cB9	 	ρB8 cB8		
ρB9 cB9	 	ρB8 cB8		 σB8.I	 	0.101	 	MPa			 	Reflected stress wave, eighth layer in Rod B
σB8.T
2 ρB9	 	cB9	
ρB8 cB8	 	ρB9 cB9		 σB8.I	 	0.951 MPa			 	Transmitted stress wave, eighth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the eighth layer is in balance
σB8.T 	σB8.R	 	1.052 MPa		

-- 123 of 245 --

Incident particle velocity, eighth layer of Rod B
UPI.B8
σB8.I
ρB8 cB8	 0.06 m
s
	
UPR.B8
σB8.R	
ρB8 cB8	 5.753 	10 3	
 m
s
	 	Reflected particle velocity, eighth layer of Rod B
Transmitted particle velocity, eighth layer of
Rod B	UPT.B8
σB8.T
ρB9 cB9	 0.066 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the eighth layer is in
balance
UPT.B8 	UPR.B8	 	0.06 m
s

Layer 9:
σB9.I 	σB8.T 	0.951 MPa			 	Incident stress wave
σB9.R
ρB10 cB10	 	ρB9 cB9		
ρB10 cB10	 	ρB9 cB9		 σB9.I	 	0.23	 	MPa			 	Reflected stress wave, ninth layer in Rod B
σB9.T
2 ρB10	 	cB10	
ρB9 cB9	 	ρB10 cB10		 σB9.I	 	0.721 MPa			 	Transmitted stress wave, ninth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the ninth layer is in balance
σB9.T 	σB9.R	 	0.951 MPa		
Incident particle velocity, ninth layer of Rod B
UPI.B9
σB9.I
ρB9 cB9	 0.066 m
s
	
UPR.B9
σB9.R	
ρB9 cB9	 0.016 m
s
	 	Reflected particle velocity, ninth layer of Rod B
Transmitted particle velocity, ninth layer of
Rod B	UPT.B9
σB9.T
ρB10 cB10	 0.081 m
s
	

-- 124 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
UPT.B9 	UPR.B9	 	0.066 m
s

Layer 10:
σB10.I 	σB9.T 	0.721 MPa			 	Incident stress wave
σB10.R 	σB9.T 	0.721 MPa			 	Reflected stress wave, tenth layer in
Rod B
No transmitted stress wave in tenth layer
σB10.I 	σB10.R	 	1.442 MPa		 	Balance in the layer
Incident particle velocity, tenth layer of
Rod B
UPI.B10
σB10.I
ρB10 cB10	 0.081 m
s
	
UPR.B10 	UPI.B10 	0.081 m
s
	 	Reflected particle velocity, tenth layer of Rod B
No transmitted stress wave in tenth layer
UPR.B10 	UPI.B10	 	0 m
s
 	Balance in the layer

-- 125 of 245 --

C Material properties and dynamic response calcula-
tions, Case study 3
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 C-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 C-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 C-1

-- 126 of 245 --

���������������������������������������������������������
���������
Defines the material functions for Young' s modulus and the density
��������[��� ρ�]� �� = ���� × �� � � ρ� = ������
����[�_] = �� �
�� � + (� - �)
��� × �� �� 	� - � �
��
ρ[�_] = ρ� �
�� � + (� - �)
����� 	� - � �
��
Defines the psi functions and calculating beta(x)
�����[�_] = ���
� � � �
ψ = �����
�����
���ψ = ��������
��������
����� ���
� � � � ⩵ �� �
� → - ������� 	� � � → ������� 	� 
��������[�_] �= ������������������ 	�
β[�_] �= ����� �[��������[�]]
Plots the different material curves for the material properties and the wave velocity
����������������������������������������������

-- 127 of 245 --

���� = ����[����[���ψ[�]] β[�]� {�� �� ���}�
��������� -> ���������[�]� ���������� -> {�� �}]
0.1 	0.2 	0.3 	0.4 	0.5
1 × 10 10
2 × 10 10
3 × 10 10
4 × 10 10
5 × 10 10
6 × 10 10
������ =
���� ρ[���ψ[�]]
β[�] � {�� �� ���}� ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
5000
10 000
15 000
20 000
25 000
���� = ����[����[�]� {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → {�� ��}� ���������� → {�����}]
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
Pa
2 ��� xtvå.nb
����������������������������������������������

-- 128 of 245 --

��� = ����ρ[�]� {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → �� ��  � � �� ���������� → {�����}
0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
kg
m 3
���� = ���� ����[�]
ρ[�] � {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → {�� � / �}� ���������� → {�����}
0.2 	0.4 	0.6 	0.8 	1.0 m
1000
2000
3000
4000
5000
m
s
���� = ���� ����[���ψ[�]] β[�]
ρ[���ψ[�]]
β[�]
�
{�� �� ���}� ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
1000
2000
3000
4000
5000
xtvå.nb 	��� 3
����������������������������������������������

-- 129 of 245 --

����[β[�]� {�� �� �}� ���������� → {�� �}]
0.2 	0.4 	0.6 	0.8 	1.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
Calculating the material properties from the curves for the transformed and original rods and where
the reflections occur
����������[�����[
{�� � + ����� ����[�]� ρ[�]� ����[�] ρ[�]� ψ[� + ����]}� {�� ����� � - ����� ���}]]
���� ��� ������ × �� �� ������� ������� × �� �� �����
���� ��� ������ × �� �� ������� ������� × �� �� 	����
���� ��� ������ × �� �� ������� 	������ × �� �� 	�����
���� ��� ������ × �� �� ������� ������� × �� �� 	����
���� ��� ������ × �� �� ������� 	������ × �� �� 	�����
���� ��� ������ × �� �� ������� ������� × �� �� 	����
���� ��� 	����� × �� �� 	������� ������� × �� �� �����
���� ��� 	����� × �� �� 	������� ������� × �� �� 	����
���� ��� 	����� × �� �� 	������� ������� × �� �� �����
���� 	�� 	����� × �� �� 	������� ������� × �� �� 	���
����������������� ψ[� + ����]� β[ψ[�]] ����[�]�
ρ[�]
β[ψ[�]] � β[ψ[�]] ����[�] ρ[�]
β[ψ[�]] � {�� ����� � - ����� ���}
���� ����� ������� × �� �� ��� ���� ������� × �� ��
���� 	���� 	������� × �� �� �� ����� ������� × �� ��
���� ����� ������� × �� �� 	�� ���� 	������ × �� ��
���� 	���� 	������� × �� �� �� ����� ������� × �� ��
���� ����� ������� × �� �� �� ����� 	������ × �� ��
���� 	���� 	������� × �� �� 	������� ������� × �� ��
���� ����� ������� × �� �� 	������� ������� × �� ��
���� 	���� 	������� × �� �� 	������� ������� × �� ��
���� ����� ������� × �� �� 	������� ������� × �� ��
���� 	��� 	������� × �� �� 	������� ������� × �� ��
�������� = ����[����� ����]
Plotting the final plots which shows the transformed and orignal values for Young’s modulus the
density and the wave velocity
4 ��� xtvå.nb
����������������������������������������������

-- 130 of 245 --

�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
Pa
�������� = ����[���� ������]
�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
kg
m 3
�������� = ����[����� ����]
�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
1000
2000
3000
4000
5000
m
s
xtvå.nb 	��� 5
����������������������������������������������

-- 131 of 245 --

Transformation with x^2-function, Case Study 3
Following calculations are made with the theory of elastic wave propagation between different
materials. This is done in order to compare two Rods (A and B) with different lengths and material
parameters. Stresses and particle velocity for incident, reflected and transmitted waves will be
determine and presented below.
Material parameters Rod A
Material parameters has been calculated in mathematica
Young's modulus: 	Density:
EA1 	2.005510
11
 	Pa		 	ρA1 	7.496810
3
 kg
m
3
	
EA2 	1.816510
11
 	Pa		 	ρA2 	6.790310
3
 kg
m
3
	

-- 132 of 245 --

EA3 	1.6275 10 11
 	Pa		 	ρA3 	6.0838 10
3
 kg
m
3
	
EA4 	1.4385 10 11
 	Pa		 	ρA4 	5.3773 10
3
 kg
m
3
	
EA5 	1.2495 10 11
 	Pa		 	ρA5 	4.6708 10
3
 kg
m
3
	
EA6 	1.0605 10 11
 	Pa		 	ρA6 	3.9643 10
3
 kg
m
3
	
EA7 	8.7150 10 10
 	Pa		 	ρA7 	3.2578 10
3
 kg
m
3
	
EA8 	6.8250 10 10
 	Pa		 	ρA8 	2.5513 10
3
 kg
m
3
	
EA9 	4.9350 10 10
 	Pa		 	ρA9 	1.8447 10
3
 kg
m
3
	
EA10 	3.0450 10
10
 	Pa		 	ρA10 	1.1382 10 3
 kg
m
3
	
Wave Velocity:
Same Wave velocity for all materials in rod A
cA
EA1
ρA1
5.172 	10
3
 m
s
	
Stresses in Rod A
Force at the left end of the Rod A and B
F 	500N	
Cross section area of Rod A and B
A 	6.450 10 4	
 	m
2

Layer 1:
Intial stress wave of Rod A and B
σI1
F
A 0.775 MPa			
σA1.R
ρA2 cA	 	ρA1 cA		
ρA2 cA	 	ρA1 cA		 σI1	 	0.038	 	MPa			 	Reflected stress wave, first layer in Rod A

-- 133 of 245 --

σA1.T
2 ρA2	 	cA	
ρA1 cA	 	ρA2 cA		 σI1	 	0.737 MPa			 	Transmitted stress wave, first layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the first layer is in balance
σA1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod A
UPI.A1
σI1
ρA1 cA	 0.02 m
s
	
UPR.A1
σA1.R	
ρA1 cA	 9.886 	10 4	
 m
s
	 	Reflected particle velocity, first layer of Rod
A
UPT.A1
σA1.T
ρA2 cA	 0.021 m
s
	 	Transmitted particle velocity, first layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the intial particle
velocity, meaning that the first layer is in
balance
UPT.A1 	UPR.A1	 	0.02 m
s

Layer 2:
σA2.I 	σA1.T 	0.737 MPa			 	Incident stress wave
σA2.R
ρA3 cA	 	ρA2 cA		
ρA3 cA	 	ρA2 cA		 σA2.I	 	0.04	 	MPa			 	Reflected stress wave, second layer in Rod A
σA2.T
2 ρA3	 	cA	
ρA2 cA	 	ρA3 cA		 σA2.I	 	0.696 MPa			 	Transmitted stress wave, second layer in
Rod A

-- 134 of 245 --

σA2.T 	σA2.R	 	0.737 MPa		 	Transmitted stress wave minus reflected
stress wave equals to the incident stress
wave, meaning that the second layer is in
balance
Incident particle velocity, second second of
Rod A
UPI.A2
σA2.I
ρA2 cA	 0.021 m
s
	
UPR.A2
σA2.R	
ρA2 cA	 1.151 	10 3	
 m
s
	 	Reflected particle velocity, second layer of
Rod A
UPT.A2
σA2.T
ρA3 cA	 0.022 m
s
	 	Transmitted particle velocity, second layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the second
layer is in balance
UPT.A2 	UPR.A2	 	0.021 m
s

Layer 3:
σA3.I 	σA2.T 	0.696 MPa			 	Incident stress wave
σA3.R
ρA4 cA	 	ρA3 cA		
ρA4 cA	 	ρA3 cA		 σA3.I	 	0.043	 	MPa			 	Reflected stress wave, third layer in Rod A
σA3.T
2 ρA4	 	cA	
ρA3 cA	 	ρA4 cA		 σA3.I	 	0.653 MPa			 	Transmitted stress wave, third layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the third layer is in balance
σA3.T 	σA3.R	 	0.696 MPa		
Incident particle velocity, third layer of Rod A
UPI.A3
σA3.I
ρA3 cA	 0.022 m
s
	

-- 135 of 245 --

UPR.A3
σA3.R	
ρA3 cA	 1.364 	10 3	
 m
s
	 	Reflected particle velocity, third layer of Rod
A
UPT.A3
σA3.T
ρA4 cA	 0.023 m
s
	 	Transmitted particle velocity, third layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the third layer
is in balance
UPT.A3 	UPR.A3	 	0.022 m
s

Layer 4:
σA4.I 	σA3.T 	0.653 MPa			 	Incident stress wave
σA4.R
ρA5 cA	 	ρA4 cA		
ρA5 cA	 	ρA4 cA		 σA4.I	 	0.046	 	MPa			 	Reflected stress wave, fourth layer in Rod A
σA4.T
2 ρA5	 	cA	
ρA4 cA	 	ρA5 cA		 σA4.I	 	0.608 MPa			 	Transmitted stress wave, fourth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the fourth layer is in balance
σA4.T 	σA4.R	 	0.653 MPa		
Incident particle velocity, fourth layer of
Rod A
UPI.A4
σA4.I
ρA4 cA	 0.023 m
s
	
UPR.A4
σA4.R	
ρA4 cA	 1.652 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod
A
UPT.A4
σA4.T
ρA5 cA	 0.025 m
s
	 	Transmitted particle velocity, fourth layer of
Rod A

-- 136 of 245 --

UPT.A4 	UPR.A4	 	0.023 m
s
 	Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the fourth
layer is in balance
Layer 5:
σA5.I 	σA4.T 	0.608 MPa			 	Incident stress wave
σA5.R
ρA6 cA	 	ρA5 cA		
ρA6 cA	 	ρA5 cA		 σA5.I	 	0.05	 	MPa			 	Reflected stress wave, fifth layer in Rod A
σA5.T
2 ρA6	 	cA	
ρA5 cA	 	ρA6 cA		 σA5.I	 	0.558 MPa			 	Transmitted stress wave, fifth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the fifth layer is in
balance
σA5.T 	σA5.R	 	0.608 MPa		
Incident particle velocity, fifth layer of Rod A
UPI.A5
σA5.I
ρA5 cA	 0.025 m
s
	
UPR.A5
σA5.R	
ρA5 cA	 2.058 	10 3	
 m
s
	 	Reflected particle velocity, fifth layer of Rod
A
UPT.A5
σA5.T
ρA6 cA	 0.027 m
s
	 	Transmitted particle velocity, fifth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.A5 	UPR.A5	 	0.025 m
s

Layer 6:
σA6.I 	σA5.T 	0.558 MPa			 	Incident stress wave

-- 137 of 245 --

σA6.R
ρA7 cA	 	ρA6 cA		
ρA7 cA	 	ρA6 cA		 σA6.I	 	0.055	 	MPa			 	Reflected stress wave, sixth layer in Rod A
σA6.T
2 ρA7	 	cA	
ρA6 cA	 	ρA7 cA		 σA6.I	 	0.503 MPa			 	Transmitted stress wave, sixth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the sixth layer is in balance
σA6.T 	σA6.R	 	0.558 MPa		
Incident particle velocity, sixth layer of
Rod A
UPI.A6
σA6.I
ρA6 cA	 0.027 m
s
	
UPR.A6
σA6.R	
ρA6 cA	 2.661 	10 3	
 m
s
	 	Reflected particle velocity, sixth layer of Rod
A
UPT.A6
σA6.T
ρA7 cA	 0.03 m
s
	 	Transmitted particle velocity, sixth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the sixth layer
is in balance
UPT.A6 	UPR.A6	 	0.027 m
s

Layer 7:
σA7.I 	σA6.T 	0.503 MPa			 	Incident stress wave
σA7.R
ρA8 cA	 	ρA7 cA		
ρA8 cA	 	ρA7 cA		 σA7.I	 	0.061	 	MPa			 	Reflected stress wave, seventh layer in Rod A
σA7.T
2 ρA8	 	cA	
ρA7 cA	 	ρA8 cA		 σA7.I	 	0.442 MPa			 	Transmitted stress wave, seventh layer in
Rod A

-- 138 of 245 --

σA7.T 	σA7.R	 	0.503 MPa		 Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the seventh layer is in balance
UPI.A7
σA7.I
ρA7 cA	 0.03 m
s
	 Incident particle velocity, seventh layer of
Rod A
UPR.A7
σA7.R	
ρA7 cA	 3.632 	10 3	
 m
s
	
Reflected particle velocity, seventh layer of
Rod A
UPT.A7
σA7.T
ρA8 cA	 0.034 m
s
	
Transmitted particle velocity, seventh layer of
Rod A
UPT.A7 	UPR.A7	 	0.03 m
s
 Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the seventh
layer is in balance
Layer 8:
σA8.I 	σA7.T 	0.442 MPa			 Incident stress wave
σA8.R
ρA9 cA	 	ρA8 cA		
ρA9 cA	 	ρA8 cA		 σA8.I	 	0.071	 	MPa			 Reflected stress wave, eighth layer in Rod A
σA8.T
2 ρA9	 	cA	
ρA8 cA	 	ρA9 cA		 σA8.I	 	0.371 MPa			 Transmitted stress wave, eighth layer in
Rod A
σA8.T 	σA8.R	 	0.442 MPa		 	Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the eighth layer is in
balance
UPI.A8
σA8.I
ρA8 cA	 0.034 m
s
	 	Incident particle velocity, eighth layer of
Rod A

-- 139 of 245 --

UPR.A8
σA8.R	
ρA8 cA	 5.385 	10 3	
 m
s
	 Reflected particle velocity, eighth layer of
Rod A
UPT.A8
σA8.T
ρA9 cA	 0.039 m
s
	 Transmitted particle velocity, eighth layer
of Rod A
UPT.A8 	UPR.A8	 	0.034 m
s
 	Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the eigth layer
is in balance
Layer 9:
σA9.I 	σA8.T 	0.371 MPa			 	Incident stress wave
σA9.R
ρA10 cA	 	ρA9 cA		
ρA10 cA	 	ρA9 cA		 σA9.I	 	0.088	 	MPa			 	Reflected stress wave, ninth layer in Rod A
σA9.T
2 ρA10	 	cA	
ρA9 cA	 	ρA10 cA		 σA9.I	 	0.283 MPa			 	Transmitted stress wave, ninth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the ninth layer is in balance
σA9.T 	σA9.R	 	0.371 MPa		
Incident particle velocity, ninth layer of
Rod A
UPI.A9
σA9.I
ρA9 cA	 0.039 m
s
	
UPR.A9
σA9.R	
ρA9 cA	 9.21 	10 3	
 m
s
	 	Reflected particle velocity, ninth layer of Rod
A
UPT.A9
σA9.T
ρA10 cA	 0.048 m
s
	 	Transmitted particle velocity, ninth layer of
Rod A

-- 140 of 245 --

UPT.A9 	UPR.A9	 	0.039 m
s
 Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
Layer 10:
σA10.I 	σA9.T 	0.283 MPa			
Incident stress wave
σA10.R 	σA9.T 	0.283 MPa			
Reflected stress wave, tenth layer in Rod A
No transmitted stress wave in tenth layer
σA10.I 	σA10.R	 	0.566 MPa		
Balance in the layer
UPI.A10
σA10.I
ρA10 cA	 0.048 m
s
	 Incident particle velocity, tenth layer of
Rod A
UPR.A10 	UPI.A10 	0.048 m
s
	
Reflected particle velocity, tenth layer of Rod
A
No transmitted stress wave in tenth layer
UPR.A10 	UPI.A10	 	0 m
s

Balance in the layer

-- 141 of 245 --

Material parameters Rod B
Material parameters is calculated from Mathematica
Young's modulus: 	Density: 	Wave velocity:
EB1 	1.00275 10 10
 	Pa		 	ρB1 	149935 kg
m
3
	 	cB1
EB1
ρB1
258.61 m
s
	
EB2 	2.72475 10 10
 	Pa		 	ρB2 	45268.3 kg
m
3
	 	cB2
EB2
ρB2
775.829 m
s
	
EB3 	4.06875 10 10
 	Pa		 	ρB3 	24335 kg
m
3
	 	cB3
EB3
ρB3
1.293 	10 3
 m
s
	
EB4 	5.03475 10 10
 	Pa		 	ρB4 	15363.6 kg
m
3
	 cB4
EB4
ρB4
1.81 	10
3
 m
s
	
EB5 	5.622 10
10
 	Pa		 	ρB5 	10379.2 kg
m
3
	 cB5
EB5
ρB5
2.327 	10 3
 m
s
	
EB6 	5.83275 10 10
 	Pa		 	ρB6 	7207.73 kg
m
3
	 cB6
EB6
ρB6
2.845 	10 3
 m
s
	
EB7 	5.66475 10 10
 	Pa		 	ρB7 	5011.92 kg
m
3
	 cB7
EB7
ρB7
3.362 	10 3
 m
s
	
EB8 	5.11875 10 10
 	Pa		 	ρB8 	3401.67 kg
m
3
	 cB8
EB8
ρB8
3.879 	10 3
 m
s
	
EB9 	4.19475 10 10
 	Pa		 	ρB9 	2170.29 kg
m
3
	 cB9
EB9
ρB9
4.396 	10 3
 m
s
	
EB10 	2.89275 10
10
 	Pa		 	ρB10 	1198.16 kg
m
3
	 cB10
EB10
ρB10
4.914 	10 3
 m
s
	

-- 142 of 245 --

Stresses Rod B
Layer 1:
Intial stress wave of Rod A and B
σB1.I
F
A 0.775 MPa			
σB1.R
ρB2 cB2	 	ρB1 cB1		
ρB2 cB2	 	ρB1 cB1		 σI1	 	0.038	 	MPa			 	Reflected stress wave, first layer in Rod B
σB1.T
2 ρB2	 	cB2	
ρB1 cB1	 	ρB2 cB2		 σI1	 	0.737 MPa			 	Transmitted stress wave, first layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the first layer is in balance
σB1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod B
UPI.B1
σB1.I
ρB1 cB1	 0.02 m
s
	
UPR.B1
σB1.R	
ρB1 cB1	 9.886 	10 4	
 m
s
	 	Reflected particle velocity, first layer of Rod B
UPT.B1
σB1.T
ρB2 cB2	 0.021 m
s
	 	Transmitted particle velocity, first layer of
Rod B
Transmitted particle velocity minus reflected
particle velocity equals to the initial particle
velocity, meaning that the first layer is in
balance
UPT.B1 	UPR.B1	 	0.02 m
s


-- 143 of 245 --

Layer 2:
σB2.I 	σB1.T 	0.737 MPa			 	Incident stress wave
σB2.R
ρB3 cB3	 	ρB2 cB2		
ρB3 cB3	 	ρB2 cB2		 σB2.I	 	0.04	 	MPa			 	Reflected stress wave, second layer in Rod B
σB2.T
2 ρB3	 	cB3	
ρB2 cB2	 	ρB3 cB3		 σB2.I	 	0.696 MPa			 	Transmitted stress wave, second layer in
Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the second layer is in balance
σB2.T 	σB2.R	 	0.737 MPa		
Incident particle velocity, second layer of
Rod B
UPI.B2
σB2.I
ρB2 cB2	 0.021 m
s
	
UPR.B2
σB2.R	
ρB2 cB2	 1.151 	10 3	
 m
s
	 	Reflected particle velocity, second layer
of Rod B
Transmitted particle velocity, second layer of
Rod B	UPT.B2
σB2.T
ρB3 cB3	 0.022 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the second layer is in
balance
UPT.B2 	UPR.B2	 	0.021 m
s

Layer 3:
σB3.I 	σB2.T 	0.696 MPa			 	Incident stress wave
σB3.R
ρB4 cB4	 	ρB3 cB3		
ρB4 cB4	 	ρB3 cB3		 σB3.I	 	0.043	 	MPa			 	Reflected stress wave, third layer in Rod B

-- 144 of 245 --

σB3.T
2 ρB4	 	cB4	
ρB3 cB3	 	ρB4 cB4		 σB3.I	 	0.653 MPa			 Transmitted stress wave, third layer in Rod B
σB3.T 	σB3.R	 	0.696 MPa		 	Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the third layer is in balance
UPI.B3
σB3.I
ρB3 cB3	 0.022 m
s
	 	Incident particle velocity, third layer of Rod B
UPR.B3
σB3.R	
ρB3 cB3	 1.364 	10 3	
 m
s
	 Reflected particle velocity, third layer of Rod B
Transmitted particle velocity, third layer of
Rod B
UPT.B3
σB3.T
ρB4 cB4	 0.023 m
s
	
UPT.B3 	UPR.B3	 	0.022 m
s
 	Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the third layer is in
balance
Layer 4:
σB4.I 	σB3.T 	0.653 MPa			 	Incident stress wave
σB4.R
ρB5 cB5	 	ρB4 cB4		
ρB5 cB5	 	ρB4 cB4		 σB4.I	 	0.046	 	MPa			 	Reflected stress wave, fourth layer in Rod B
σB4.T
2 ρB5	 	cB5	
ρB4 cB4	 	ρB5 cB5		 σB4.I	 	0.608 MPa			 	Transmitted stress wave, fourth layer in Rod B
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the fourth layer is in balance
σB4.T 	σB4.R	 	0.653 MPa		
Incident particle velocity, fourth layer of Rod B
UPI.B4
σB4.I
ρB4 cB4	 0.023 m
s
	

-- 145 of 245 --

UPR.B4
σB4.R	
ρB4 cB4	 1.653 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod B
Transmitted particle velocity, fourth layer of
Rod B	UPT.B4
σB4.T
ρB5 cB5	 0.025 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fourth layer is in
balance
UPT.B4 	UPR.B4	 	0.023 m
s

Layer 5:
σB5.I 	σB4.T 	0.608 MPa			 	Incident stress wave
σB5.R
ρB6 cB6	 	ρB5 cB5		
ρB6 cB6	 	ρB5 cB5		 σB5.I	 	0.05	 	MPa			 	Reflected stress wave, fifth layer in Rod B
σB5.T
2 ρB6	 	cB6	
ρB5 cB5	 	ρB6 cB6		 σB5.I	 	0.558 MPa			 	Transmitted stress wave, fifth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the fifth layer is in balance
σB5.T 	σB5.R	 	0.608 MPa		
Incident particle velocity, fifth layer of Rod B
UPI.B5
σB5.I
ρB5 cB5	 0.025 m
s
	
Reflected particle velocity, fifth layer of Rod B
UPR.B5
σB5.R	
ρB5 cB5	 2.057 	10 3	
 m
s
	
Transmitted particle velocity, fifth layer of
Rod B
UPT.B5
σB5.T
ρB6 cB6	 0.027 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.B5 	UPR.B5	 	0.025 m
s


-- 146 of 245 --

Layer 6:
Incident stress wave
σB6.I 	σB5.T 	0.558 MPa			
Reflected stress wave, sixth layer in Rod B
σB6.R
ρB7 cB7	 	ρB6 cB6		
ρB7 cB7	 	ρB6 cB6		 σB6.I	 	0.055	 	MPa			
Transmitted stress wave, sixth layer in Rod B
σB6.T
2 ρB7	 	cB7	
ρB6 cB6	 	ρB7 cB7		 σB6.I	 	0.503 MPa			
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the sixth layer is in balance
σB6.T 	σB6.R	 	0.558 MPa		
Incident particle velocity, sixth layer of Rod B
UPI.B6
σB6.I
ρB6 cB6	 0.027 m
s
	
Reflected particle velocity, sixth layer of Rod B
UPR.B6
σB6.R	
ρB6 cB6	 2.661 	10 3	
 m
s
	
Transmitted particle velocity, sixth layer of
Rod B
UPT.B6
σB6.T
ρB7 cB7	 0.03 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the sixth layer is in
balance
UPT.B6 	UPR.B6	 	0.027 m
s

Layer 7:
Incident stress wave
σB7.I 	σB6.T 	0.503 MPa			
Reflected stress wave, seventh layer in Rod B
σB7.R
ρB8 cB8	 	ρB7 cB7		
ρB8 cB8	 	ρB7 cB7		 σB7.I	 	0.061	 	MPa			

-- 147 of 245 --

σB7.T
2 ρB8	 	cB8	
ρB7 cB7	 	ρB8 cB8		 σB7.I	 	0.442 MPa			 	Transmitted stress wave, seventh layer in
Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the seventh layer is in balance
σB7.T 	σB7.R	 	0.503 MPa		
Incident particle velocity, seventh layer of
Rod B
UPI.B7
σB7.I
ρB7 cB7	 0.03 m
s
	
UPR.B7
σB7.R	
ρB7 cB7	 3.633 	10 3	
 m
s
	 	Reflected particle velocity, seventh layer of
Rod B
Transmitted particle velocity, seventh layer of
Rod B	UPT.B7
σB7.T
ρB8 cB8	 0.034 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the seventh layer is in
balance
UPT.B7 	UPR.B7	 	0.03 m
s

Layer 8:
σB8.I 	σB7.T 	0.442 MPa			 	Incident stress wave
σB8.R
ρB9 cB9	 	ρB8 cB8		
ρB9 cB9	 	ρB8 cB8		 σB8.I	 	0.071	 	MPa			 	Reflected stress wave, eighth layer in Rod B
σB8.T
2 ρB9	 	cB9	
ρB8 cB8	 	ρB9 cB9		 σB8.I	 	0.371 MPa			 	Transmitted stress wave, eighth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the eighth layer is in balance
σB8.T 	σB8.R	 	0.442 MPa		

-- 148 of 245 --

UPI.B8
σB8.I
ρB8 cB8	 0.034 m
s
	 	Incident particle velocity, eighth layer of Rod B
UPR.B8
σB8.R	
ρB8 cB8	 5.384 	10 3	
 m
s
	 Reflected particle velocity, eighth layer of Rod B
Transmitted particle velocity, eighth layer of
Rod B
UPT.B8
σB8.T
ρB9 cB9	 0.039 m
s
	
UPT.B8 	UPR.B8	 	0.034 m
s
 	Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the eighth layer is in
balance
Layer 9:
σB9.I 	σB8.T 	0.371 MPa			 Incident stress wave
σB9.R
ρB10 cB10	 	ρB9 cB9		
ρB10 cB10	 	ρB9 cB9		 σB9.I	 	0.088	 	MPa			 Reflected stress wave, ninth layer in Rod B
σB9.T
2 ρB10	 	cB10	
ρB9 cB9	 	ρB10 cB10		 σB9.I	 	0.283 MPa			 Transmitted stress wave, ninth layer in Rod B
σB9.T 	σB9.R	 	0.371 MPa		 	Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the ninth layer is in balance
UPI.B9
σB9.I
ρB9 cB9	 0.039 m
s
	 	Incident particle velocity, ninth layer of Rod B
UPR.B9
σB9.R	
ρB9 cB9	 9.209 	10 3	
 m
s
	 Reflected particle velocity, ninth layer of Rod B
Transmitted particle velocity, ninth layer of
Rod B
UPT.B9
σB9.T
ρB10 cB10	 0.048 m
s
	

-- 149 of 245 --

UPT.B9 	UPR.B9	 	0.039 m
s
 	Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
Layer 10:
σB10.I 	σB9.T 	0.283 MPa			 Incident stress wave
σB10.R 	σB9.T 	0.283 MPa			 Reflected stress wave, tenth layer in
Rod B
No transmitted stress wave in tenth layer
σB10.I 	σB10.R	 	0.566 MPa		 Balance in the layer
UPI.B10
σB10.I
ρB10 cB10	 0.048 m
s
	 	Incident particle velocity, tenth layer of
Rod B
UPR.B10 	UPI.B10 	0.048 m
s
	 Reflected particle velocity, tenth layer of Rod B
No transmitted stress wave in tenth layer
UPR.B10 	UPI.B10	 	0 m
s
 Balance in the layer

-- 150 of 245 --

D Material properties and dynamic response calcula-
tions, Case study 4
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 D-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 D-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 D-1

-- 151 of 245 --

��������������������������������������������������������
���������
Defines the new third grade polynomial psi function where it is possible to define specific parame-
ters such as the derivative in both ends
�����[�_] = �����������������������{{�}� �� �}� {�}� �
� � �
� � � /� {� → �}
� 	� + - �
� + �
� (- � + �) 	�
ψ = �����
�����
ψ��� = ��������
��������
Defines the material functions for Young’ s modulus and the density
��������[��� ρ�]� �� = ���� × �� � � ρ� = ������
����[�_] �= �� �
�� � + (� - �)
ρ[�_] �= ρ� �
�� � + (� - �)
Plots the different material curves for the material properties
���� = ����[����[�]� {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → {�� ��}� ���������� → {�����}]
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
Pa
����������������������������������������������

-- 152 of 245 --

��� = ����ρ[�]� {�� �� �}� ��������� → ���������[�]� ���������� → {�� �}�
��������� → {�� ���� �}� ��������� → �� ��  � � �� ���������� → {�����}
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
10 000
12 000
kg
m 3
������ = ���� ρ[ψ���[�]]
β[�] � �� �� �
� � ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
2000
4000
6000
8000
10 000
12 000
���� = ��������[ψ���[�]] β[�]� �� �� �
� �
��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
2 ��� Study-4-appendix.nb
����������������������������������������������

-- 153 of 245 --

����[����[ψ���[�]]� {�� �� �}� ���������� → {�� �}]
0.2 	0.4 	0.6 	0.8 	1.0
-5.0 × 10 10
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
Defines the inverse function of psi and calculating the beta function
��������[�_] �=
�
� - �
� - �� + �� � + � 	� 	� - �� � + �� � �  �/� + �
� - �� + �� � + � 	� 	� - �� � + �� � � �/�
β[�_] �= ����� �[��������[�]]
Plots the variation of beta and the wave velocity for the original and transformed bar
����[β[�]� {�� �� �}� ��������� → ���������[�]� ���������� → {�� �}]
0.2 	0.4 	0.6 	0.8 	1.0
0.5
1.0
1.5
Study-4-appendix.nb 	��� 3
����������������������������������������������

-- 154 of 245 --

���� = ���� ����[�]
ρ[�] � {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → {�� � / �}� ���������� → {�����}
0.2 	0.4 	0.6 	0.8 	1.0 m
1000
2000
3000
4000
5000
m
s
���� = ���� ����[ψ���[�]] β[�]
ρ[ψ���[�]]
β[�]
�
{�� �� ���}� ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
1000
2000
3000
4000
5000
Calculating the material properties from the curves for the transformed and original rods and where
the reflections occur
����������[
�����[{�� � + ����� ����[�]� ρ[�]� ����[�] ρ[�]� ψ[�]}� {�� ����� � - ����� ���}]]
���� ��� ������ × �� �� ������� ������� × �� �� ���������
���� ��� ������ × �� �� ������� ������� × �� �� 	��������
���� ��� ������ × �� �� ������� 	������ × �� �� 	��������
���� ��� ������ × �� �� ������� ������� × �� �� 	��������
���� ��� ������ × �� �� ������� 	������ × �� �� 	��������
���� ��� ������ × �� �� ������� ������� × �� �� 	��������
���� ��� 	����� × �� �� 	������� ������� × �� �� 	��������
���� ��� 	����� × �� �� 	������� ������� × �� �� 	��������
���� ��� 	����� × �� �� 	������� ������� × �� �� 	��������
���� 	�� 	����� × �� �� 	������� ������� × �� �� 	��������
4 ��� Study-4-appendix.nb
����������������������������������������������

-- 155 of 245 --

����������������� ψ[� + ����]� β[ψ[�]] ����[�]�
ρ[�]
β[ψ[�]] � β[ψ[�]] ����[�] ρ[�]
β[ψ[�]] � {�� ����� � - ����� ���}
���� ������ ������� × �� �� 	������� ������� × �� ��
���� 	����� 	������� × �� �� 	������� ������� × �� ��
���� ������ ������� × �� �� �� ����� 	������ × �� ��
���� 	����� 	������� × �� �� �� ����� ������� × �� ��
���� ������ ������� × �� �� �� ����� 	������ × �� ��
���� 	����� 	������� × �� �� �� ����� ������� × �� ��
���� ������ ������� × �� �� 	������� ������� × �� ��
���� 	����� 	������� × �� �� 	������� ������� × �� ��
���� ������ ������� × �� �� 	������� ������� × �� ��
���� 	��� 	������� × �� �� 	������� ������� × �� ��
Plotting the final plots which shows the transformed and orignal values for Young’s modulus the
density and the wave velocity
������ = ����[����� ����]
�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
Pa
�������� = ����[���� ������]
�
�
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
10 000
12 000
kg
m 3
�������� = ����[����� ����]
Study-4-appendix.nb 	��� 5
����������������������������������������������

-- 156 of 245 --

�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
1000
2000
3000
4000
5000
m
s
6 ��� Study-4-appendix.nb
����������������������������������������������

-- 157 of 245 --

Transformation with x^3-function, Case Study 4
Following calculations are made with the theory of elastic wave propagation between different
materials. This is done in order to compare two Rods (A and B) with different lengths and material
parameters. Stresses and particle velocity for incident, reflected and transmitted waves will be
determine and presented below.
Material parameters Rod A
Material parameters has been calculated in mathematica
Young's modulus: 	Density:
EA1 	2.006 10
11
 	Pa		 	ρA1 	7.4967510
3
 kg
m
3
	
EA2 	1.816 10
11
 	Pa		 	ρA2 	6.7902510
3
 kg
m
3
	
EA3 	1.627510
11
 	Pa		 	ρA3 	6.083810
3
 kg
m
3
	

-- 158 of 245 --

EA4 	1.4385 10 11
 	Pa		 	ρA4 	5.3773 10
3
 kg
m
3
	
EA5 	1.2495 10 11
 	Pa		 	ρA5 	4.6708 10
3
 kg
m
3
	
EA6 	1.0605 10 11
 	Pa		 	ρA6 	3.9643 10
3
 kg
m
3
	
EA7 	8.7150 10 10
 	Pa		 	ρA7 	3.2578 10
3
 kg
m
3
	
EA8 	6.8250 10 10
 	Pa		 	ρA8 	2.5513 10
3
 kg
m
3
	
EA9 	4.9350 10 10
 	Pa		 	ρA9 	1.8447 10
3
 kg
m
3
	
EA10 	3.0450 10
10
 	Pa		 	ρA10 	1.1382 10 3
 kg
m
3
	
Wave Velocity:
Same Wave velocity for all materials in rod A
cA
EA1
ρA1
5.173 	10
3
 m
s
	
Stresses in Rod A
Force at the left end of the Rod A and B
F 	500N	
Cross section area of Rod A and B
A 	6.450 10 4	
 	m
2

Layer 1:
Intial stress wave of Rod A and B
σI1
F
A 0.775 MPa			
σA1.R
ρA2 cA	 	ρA1 cA		
ρA2 cA	 	ρA1 cA		 σI1	 	0.038	 	MPa			 	Reflected stress wave, first layer in Rod A

-- 159 of 245 --

σA1.T
2 ρA2	 	cA	
ρA1 cA	 	ρA2 cA		 σI1	 	0.737 MPa			 	Transmitted stress wave, first layer in Rod A
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the first layer is in balance
σA1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod A
UPI.A1
σI1
ρA1 cA	 0.02 m
s
	
UPR.A1
σA1.R	
ρA1 cA	 9.885 	10 4	
 m
s
	 	Reflected particle velocity, first layer of Rod A
UPT.A1
σA1.T
ρA2 cA	 0.021 m
s
	 	Transmitted particle velocity, first layer of Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the intial particle
velocity, meaning that the first layer is in
balance
UPT.A1 	UPR.A1	 	0.02 m
s

Layer 2:
σA2.I 	σA1.T 	0.737 MPa			 	Incident stress wave
σA2.R
ρA3 cA	 	ρA2 cA		
ρA3 cA	 	ρA2 cA		 σA2.I	 	0.04	 	MPa			 	Reflected stress wave, second layer in Rod A
σA2.T
2 ρA3	 	cA	
ρA2 cA	 	ρA3 cA		 σA2.I	 	0.696 MPa			 	Transmitted stress wave, second layer in Rod A

-- 160 of 245 --

Transmitted stress wave minus reflected stress
wave equals to the incident stress wave,
meaning that the second layer is in balance
σA2.T 	σA2.R	 	0.737 MPa		
Incident particle velocity, second second of
Rod A
UPI.A2
σA2.I
ρA2 cA	 0.021 m
s
	
UPR.A2
σA2.R	
ρA2 cA	 1.151 	10 3	
 m
s
	 	Reflected particle velocity, second layer of Rod A
UPT.A2
σA2.T
ρA3 cA	 0.022 m
s
	 	Transmitted particle velocity, second layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the second layer is in
balance
UPT.A2 	UPR.A2	 	0.021 m
s

Layer 3:
σA3.I 	σA2.T 	0.696 MPa			 	Incident stress wave
σA3.R
ρA4 cA	 	ρA3 cA		
ρA4 cA	 	ρA3 cA		 σA3.I	 	0.043	 	MPa			 	Reflected stress wave, third layer in Rod A
σA3.T
2 ρA4	 	cA	
ρA3 cA	 	ρA4 cA		 σA3.I	 	0.653 MPa			 	Transmitted stress wave, third layer in Rod A
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the third layer is in balance
σA3.T 	σA3.R	 	0.696 MPa		
Incident particle velocity, third layer of Rod
A
UPI.A3
σA3.I
ρA3 cA	 0.022 m
s
	

-- 161 of 245 --

UPR.A3
σA3.R	
ρA3 cA	 1.364 	10 3	
 m
s
	 	Reflected particle velocity, third layer of Rod A
UPT.A3
σA3.T
ρA4 cA	 0.023 m
s
	 	Transmitted particle velocity, third layer of Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the third layer is in
balance
UPT.A3 	UPR.A3	 	0.022 m
s

Layer 4:
σA4.I 	σA3.T 	0.653 MPa			 	Incident stress wave
σA4.R
ρA5 cA	 	ρA4 cA		
ρA5 cA	 	ρA4 cA		 σA4.I	 	0.046	 	MPa			 	Reflected stress wave, fourth layer in Rod A
σA4.T
2 ρA5	 	cA	
ρA4 cA	 	ρA5 cA		 σA4.I	 	0.608 MPa			 	Transmitted stress wave, fourth layer in Rod A
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the fourth layer is in balance
σA4.T 	σA4.R	 	0.653 MPa		
Incident particle velocity, fourth layer of
Rod A
UPI.A4
σA4.I
ρA4 cA	 0.023 m
s
	
UPR.A4
σA4.R	
ρA4 cA	 1.652 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod A
UPT.A4
σA4.T
ρA5 cA	 0.025 m
s
	 	Transmitted particle velocity, fourth layer of
Rod A

-- 162 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fourth layer is in
balance
UPT.A4 	UPR.A4	 	0.023 m
s

Layer 5:
σA5.I 	σA4.T 	0.608 MPa			 	Incident stress wave
σA5.R
ρA6 cA	 	ρA5 cA		
ρA6 cA	 	ρA5 cA		 σA5.I	 	0.05	 	MPa			 	Reflected stress wave, fifth layer in Rod A
σA5.T
2 ρA6	 	cA	
ρA5 cA	 	ρA6 cA		 σA5.I	 	0.558 MPa			 	Transmitted stress wave, fifth layer in Rod A
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the fifth layer is in balance
σA5.T 	σA5.R	 	0.608 MPa		
Incident particle velocity, fifth layer of Rod
A
UPI.A5
σA5.I
ρA5 cA	 0.025 m
s
	
UPR.A5
σA5.R	
ρA5 cA	 2.057 	10 3	
 m
s
	 	Reflected particle velocity, fifth layer of Rod A
UPT.A5
σA5.T
ρA6 cA	 0.027 m
s
	 	Transmitted particle velocity, fifth layer of Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.A5 	UPR.A5	 	0.025 m
s

Layer 6:
σA6.I 	σA5.T 	0.558 MPa			 	Incident stress wave

-- 163 of 245 --

σA6.R
ρA7 cA	 	ρA6 cA		
ρA7 cA	 	ρA6 cA		 σA6.I	 	0.055	 	MPa			 	Reflected stress wave, sixth layer in Rod A
σA6.T
2 ρA7	 	cA	
ρA6 cA	 	ρA7 cA		 σA6.I	 	0.503 MPa			 	Transmitted stress wave, sixth layer in Rod A
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the sixth layer is in balance
σA6.T 	σA6.R	 	0.558 MPa		
Incident particle velocity, sixth layer of
Rod A
UPI.A6
σA6.I
ρA6 cA	 0.027 m
s
	
UPR.A6
σA6.R	
ρA6 cA	 2.661 	10 3	
 m
s
	 	Reflected particle velocity, sixth layer of Rod A
UPT.A6
σA6.T
ρA7 cA	 0.03 m
s
	 	Transmitted particle velocity, sixth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the sixth layer is in
balance
UPT.A6 	UPR.A6	 	0.027 m
s

Layer 7:
σA7.I 	σA6.T 	0.503 MPa			 	Incident stress wave
σA7.R
ρA8 cA	 	ρA7 cA		
ρA8 cA	 	ρA7 cA		 σA7.I	 	0.061	 	MPa			 	Reflected stress wave, seventh layer in Rod A
σA7.T
2 ρA8	 	cA	
ρA7 cA	 	ρA8 cA		 σA7.I	 	0.442 MPa			 	Transmitted stress wave, seventh layer in Rod A

-- 164 of 245 --

Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the seventh layer is in balance
σA7.T 	σA7.R	 	0.503 MPa		
Incident particle velocity, seventh layer of
Rod A
UPI.A7
σA7.I
ρA7 cA	 0.03 m
s
	
UPR.A7
σA7.R	
ρA7 cA	 3.632 	10 3	
 m
s
	 	Reflected particle velocity, seventh layer of Rod
A
UPT.A7
σA7.T
ρA8 cA	 0.033 m
s
	 	Transmitted particle velocity, seventh layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the seventh layer is in
balance
UPT.A7 	UPR.A7	 	0.03 m
s

Layer 8:
σA8.I 	σA7.T 	0.442 MPa			 	Incident stress wave
σA8.R
ρA9 cA	 	ρA8 cA		
ρA9 cA	 	ρA8 cA		 σA8.I	 	0.071	 	MPa			 	Reflected stress wave, eighth layer in Rod A
σA8.T
2 ρA9	 	cA	
ρA8 cA	 	ρA9 cA		 σA8.I	 	0.371 MPa			 	Transmitted stress wave, eighth layer in Rod A
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the eighth layer is in balance
σA8.T 	σA8.R	 	0.442 MPa		
Incident particle velocity, eighth layer of
Rod A
UPI.A8
σA8.I
ρA8 cA	 0.033 m
s
	

-- 165 of 245 --

UPR.A8
σA8.R	
ρA8 cA	 5.384 	10 3	
 m
s
	 	Reflected particle velocity, eighth layer of Rod A
UPT.A8
σA8.T
ρA9 cA	 0.039 m
s
	 	Transmitted particle velocity, eighth layer
of Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the eigth layer is in
balance
UPT.A8 	UPR.A8	 	0.033 m
s

Layer 9:
σA9.I 	σA8.T 	0.371 MPa			 	Incident stress wave
σA9.R
ρA10 cA	 	ρA9 cA		
ρA10 cA	 	ρA9 cA		 σA9.I	 	0.088	 	MPa			 	Reflected stress wave, ninth layer in Rod A
σA9.T
2 ρA10	 	cA	
ρA9 cA	 	ρA10 cA		 σA9.I	 	0.283 MPa			 	Transmitted stress wave, ninth layer in Rod A
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the ninth layer is in balance
σA9.T 	σA9.R	 	0.371 MPa		
Incident particle velocity, ninth layer of Rod
A
UPI.A9
σA9.I
ρA9 cA	 0.039 m
s
	
UPR.A9
σA9.R	
ρA9 cA	 9.209 	10 3	
 m
s
	 	Reflected particle velocity, ninth layer of Rod A
UPT.A9
σA9.T
ρA10 cA	 0.048 m
s
	 	Transmitted particle velocity, ninth layer of
Rod A

-- 166 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
UPT.A9 	UPR.A9	 	0.039 m
s

Layer 10:
σA10.I 	σA9.T 	0.283 MPa			 	Incident stress wave
σA10.R 	σA9.T 	0.283 MPa			 	Reflected stress wave, tenth layer in Rod A
No transmitted stress wave in tenth layer
σA10.I 	σA10.R	 	0.566 MPa		 	Balance in the layer
Incident particle velocity, tenth layer of
Rod A
UPI.A10
σA10.I
ρA10 cA	 0.048 m
s
	
UPR.A10 	UPI.A10 	0.048 m
s
	 	Reflected particle velocity, tenth layer of Rod A
No transmitted stress wave in tenth layer
UPR.A10 	UPI.A10	 	0 m
s
 	Balance in the layer

-- 167 of 245 --

Material parameters Rod B
Material parameters is calculated from Mathematica
Young's modulus: 	Density: 	Wave velocity:
EB1 	1.8125 10
11
 	Pa		 	ρB1 	8.2952 10 3
 kg
m
3
	 	cB1
EB1
ρB1
4.674 	10 3
 m
s
	
EB2 	1.3329 10
11
 	Pa		 	ρB2 	9.2542 10 3
 kg
m
3
	 	cB2
EB2
ρB2
3.795 	10 3
 m
s
	
EB3 	9.6633 10
10
 	Pa		 	ρB3 	1.0246 10 4
 kg
m
3
	 	cB3
EB3
ρB3
3.071 	10 3
 m
s
	
EB4 	6.9587 10
10
 	Pa		 	ρB4 	1.1116 10 4
 kg
m
3
	 cB4
EB4
ρB4
2.502 	10 3
 m
s
	
EB5 	5.0449 10
10
 	Pa		 	ρB5 	1.1568 10 4
 kg
m
3
	 cB5
EB5
ρB5
2.088 	10 3
 m
s
	
EB6 	3.7515 10
10
 	Pa		 	ρB6 	1.1206 10 4
 kg
m
3
	 cB6
EB6
ρB6
1.83 	10
3
 m
s
	
EB7 	2.9086 10
10
 	Pa		 	ρB7 	9.7610 10 3
 kg
m
3
	 cB7
EB7
ρB7
1.726 	10 3
 m
s
	
EB8 	2.3461 10
10
 	Pa		 	ρB8 	7.4218 10 3
 kg
m
3
	 cB8
EB8
ρB8
1.778 	10 3
 m
s
	
EB9 	1.8938 10
10
 	Pa		 	ρB9 	4.8072 10 3
 kg
m
3
	 cB9
EB9
ρB9
1.985 	10 3
 m
s
	
EB10 	1.3817 10 10
 	Pa		 	ρB10 	2.5085 10
3
 kg
m
3
	 cB10
EB10
ρB10
2.347 	10 3
 m
s
	

-- 168 of 245 --

Stresses Rod B
Layer 1:
Intial stress wave of Rod A and B
σB1.I
F
A 0.775 MPa			
σB1.R
ρB2 cB2	 	ρB1 cB1		
ρB2 cB2	 	ρB1 cB1		 σI1	 	0.038	 	MPa			 	Reflected stress wave, first layer in Rod B
σB1.T
2 ρB2	 	cB2	
ρB1 cB1	 	ρB2 cB2		 σI1	 	0.737 MPa			 	Transmitted stress wave, first layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the first layer is in balance
σB1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod B
UPI.B1
σB1.I
ρB1 cB1	 0.02 m
s
	
UPR.B1
σB1.R	
ρB1 cB1	 9.885 	10 4	
 m
s
	 	Reflected particle velocity, first layer of Rod B
UPT.B1
σB1.T
ρB2 cB2	 0.021 m
s
	 	Transmitted particle velocity, first layer of Rod B
Transmitted particle velocity minus reflected
particle velocity equals to the initial particle
velocity, meaning that the first layer is in
balance
UPT.B1 	UPR.B1	 	0.02 m
s


-- 169 of 245 --

Layer 2:
σB2.I 	σB1.T 	0.737 MPa			 	Incident stress wave
σB2.R
ρB3 cB3	 	ρB2 cB2		
ρB3 cB3	 	ρB2 cB2		 σB2.I	 	0.04	 	MPa			 	Reflected stress wave, second layer in Rod B
σB2.T
2 ρB3	 	cB3	
ρB2 cB2	 	ρB3 cB3		 σB2.I	 	0.696 MPa			 	Transmitted stress wave, second layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the second layer is in balance
σB2.T 	σB2.R	 	0.737 MPa		
Incident particle velocity, second layer of
Rod B
UPI.B2
σB2.I
ρB2 cB2	 0.021 m
s
	
UPR.B2
σB2.R	
ρB2 cB2	 1.152 	10 3	
 m
s
	 	Reflected particle velocity, second layer of Rod B
Transmitted particle velocity, second layer of
Rod B	UPT.B2
σB2.T
ρB3 cB3	 0.022 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the second layer is in
balance
UPT.B2 	UPR.B2	 	0.021 m
s

Layer 3:
σB3.I 	σB2.T 	0.696 MPa			 	Incident stress wave
σB3.R
ρB4 cB4	 	ρB3 cB3		
ρB4 cB4	 	ρB3 cB3		 σB3.I	 	0.043	 	MPa			 	Reflected stress wave, third layer in Rod B

-- 170 of 245 --

σB3.T
2 ρB4	 	cB4	
ρB3 cB3	 	ρB4 cB4		 σB3.I	 	0.653 MPa			 	Transmitted stress wave, third layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the third layer is in balance
σB3.T 	σB3.R	 	0.696 MPa		
Incident particle velocity, third layer of Rod B
UPI.B3
σB3.I
ρB3 cB3	 0.022 m
s
	
UPR.B3
σB3.R	
ρB3 cB3	 1.364 	10 3	
 m
s
	 	Reflected particle velocity, third layer of Rod B
Transmitted particle velocity, third layer of
Rod B	UPT.B3
σB3.T
ρB4 cB4	 0.023 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the third layer is in
balance
UPT.B3 	UPR.B3	 	0.022 m
s

Layer 4:
σB4.I 	σB3.T 	0.653 MPa			 	Incident stress wave
σB4.R
ρB5 cB5	 	ρB4 cB4		
ρB5 cB5	 	ρB4 cB4		 σB4.I	 	0.046	 	MPa			 	Reflected stress wave, fourth layer in Rod B
σB4.T
2 ρB5	 	cB5	
ρB4 cB4	 	ρB5 cB5		 σB4.I	 	0.608 MPa			 	Transmitted stress wave, fourth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the fourth layer is in balance
σB4.T 	σB4.R	 	0.653 MPa		
Incident particle velocity, fourth layer of Rod B
UPI.B4
σB4.I
ρB4 cB4	 0.023 m
s
	

-- 171 of 245 --

UPR.B4
σB4.R	
ρB4 cB4	 1.652 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod B
Transmitted particle velocity, fourth layer of
Rod B	UPT.B4
σB4.T
ρB5 cB5	 0.025 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fourth layer is in
balance
UPT.B4 	UPR.B4	 	0.023 m
s

Layer 5:
σB5.I 	σB4.T 	0.608 MPa			 	Incident stress wave
σB5.R
ρB6 cB6	 	ρB5 cB5		
ρB6 cB6	 	ρB5 cB5		 σB5.I	 	0.05	 	MPa			 	Reflected stress wave, fifth layer in Rod B
σB5.T
2 ρB6	 	cB6	
ρB5 cB5	 	ρB6 cB6		 σB5.I	 	0.558 MPa			 	Transmitted stress wave, fifth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the fifth layer is in balance
σB5.T 	σB5.R	 	0.608 MPa		
Incident particle velocity, fifth layer of Rod B
UPI.B5
σB5.I
ρB5 cB5	 0.025 m
s
	
UPR.B5
σB5.R	
ρB5 cB5	 2.058 	10 3	
 m
s
	 	Reflected particle velocity, fifth layer of Rod B
Transmitted particle velocity, fifth layer of
Rod B	UPT.B5
σB5.T
ρB6 cB6	 0.027 m
s
	

-- 172 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.B5 	UPR.B5	 	0.025 m
s

Layer 6:
σB6.I 	σB5.T 	0.558 MPa			 	Incident stress wave
σB6.R
ρB7 cB7	 	ρB6 cB6		
ρB7 cB7	 	ρB6 cB6		 σB6.I	 	0.055	 	MPa			 	Reflected stress wave, sixth layer in Rod B
σB6.T
2 ρB7	 	cB7	
ρB6 cB6	 	ρB7 cB7		 σB6.I	 	0.503 MPa			 	Transmitted stress wave, sixth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the sixth layer is in balance
σB6.T 	σB6.R	 	0.558 MPa		
Incident particle velocity, sixth layer of Rod B
UPI.B6
σB6.I
ρB6 cB6	 0.027 m
s
	
UPR.B6
σB6.R	
ρB6 cB6	 2.661 	10 3	
 m
s
	 	Reflected particle velocity, sixth layer of Rod B
Transmitted particle velocity, sixth layer of
Rod B	UPT.B6
σB6.T
ρB7 cB7	 0.03 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the sixth layer is in
balance
UPT.B6 	UPR.B6	 	0.027 m
s


-- 173 of 245 --

Layer 7:
σB7.I 	σB6.T 	0.503 MPa			 	Incident stress wave
σB7.R
ρB8 cB8	 	ρB7 cB7		
ρB8 cB8	 	ρB7 cB7		 σB7.I	 	0.061	 	MPa			 	Reflected stress wave, seventh layer in Rod B
σB7.T
2 ρB8	 	cB8	
ρB7 cB7	 	ρB8 cB8		 σB7.I	 	0.442 MPa			 	Transmitted stress wave, seventh layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the seventh layer is in balance
σB7.T 	σB7.R	 	0.503 MPa		
Incident particle velocity, seventh layer of
Rod B
UPI.B7
σB7.I
ρB7 cB7	 0.03 m
s
	
UPR.B7
σB7.R	
ρB7 cB7	 3.632 	10 3	
 m
s
	 	Reflected particle velocity, seventh layer of
Rod B
Transmitted particle velocity, seventh layer of
Rod B	UPT.B7
σB7.T
ρB8 cB8	 0.034 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the seventh layer is in
balance
UPT.B7 	UPR.B7	 	0.03 m
s

Layer 8:
σB8.I 	σB7.T 	0.442 MPa			 	Incident stress wave
σB8.R
ρB9 cB9	 	ρB8 cB8		
ρB9 cB9	 	ρB8 cB8		 σB8.I	 	0.071	 	MPa			 	Reflected stress wave, eighth layer in Rod B

-- 174 of 245 --

σB8.T
2 ρB9	 	cB9	
ρB8 cB8	 	ρB9 cB9		 σB8.I	 	0.371 MPa			 	Transmitted stress wave, eighth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the eighth layer is in balance
σB8.T 	σB8.R	 	0.442 MPa		
Incident particle velocity, eighth layer of Rod B
UPI.B8
σB8.I
ρB8 cB8	 0.034 m
s
	
UPR.B8
σB8.R	
ρB8 cB8	 5.384 	10 3	
 m
s
	 	Reflected particle velocity, eighth layer of Rod B
Transmitted particle velocity, eighth layer of
Rod B	UPT.B8
σB8.T
ρB9 cB9	 0.039 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the eighth layer is in
balance
UPT.B8 	UPR.B8	 	0.034 m
s

Layer 9:
σB9.I 	σB8.T 	0.371 MPa			 	Incident stress wave
σB9.R
ρB10 cB10	 	ρB9 cB9		
ρB10 cB10	 	ρB9 cB9		 σB9.I	 	0.088	 	MPa			 	Reflected stress wave, ninth layer in Rod B
σB9.T
2 ρB10	 	cB10	
ρB9 cB9	 	ρB10 cB10		 σB9.I	 	0.283 MPa			 	Transmitted stress wave, ninth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the ninth layer is in balance
σB9.T 	σB9.R	 	0.371 MPa		

-- 175 of 245 --

Incident particle velocity, eighth layer of Rod B
UPI.B9
σB9.I
ρB9 cB9	 0.039 m
s
	
UPR.B9
σB9.R	
ρB9 cB9	 9.209 	10 3	
 m
s
	 	Reflected particle velocity, eighth layer of Rod B
Transmitted particle velocity, eighth layer of
Rod B	UPT.B9
σB9.T
ρB10 cB10	 0.048 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the eighth layer is in
balance
UPT.B9 	UPR.B9	 	0.039 m
s

Layer 10:
σB10.I 	σB9.T 	0.283 MPa			 	Incident stress wave
σB10.R 	σB9.T 	0.283 MPa			 	Reflected stress wave, tenth layer in Rod A
No transmitted stress wave in tenth layer
σB10.I 	σB10.R	 	0.566 MPa		 	Balance in the layer
Incident particle velocity, tenth layer of
Rod B
UPI.B10
σB10.I
ρB10 cB10	 0.048 m
s
	
UPR.B10 	UPI.B10 	0.048 m
s
	 	Reflected particle velocity, tenth layer of Rod B
No transmitted stress wave in tenth layer
UPR.B10 	UPI.B10	 	0 m
s
 	Balance in the layer

-- 176 of 245 --

E Material properties and dynamic response calcula-
tions, Case study 5
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 E-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 E-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 E-1

-- 177 of 245 --

��������������������������������������������������������
������������������������������
Defines the psi functions and calculating beta(x)
����[�_] �= ���
� * �
����� ���
� * � ⩵ �� �
{{� → �� �}}
�������[�_] �= � �
ψ = ����
����
ψ��� = �������
�������
β[�_] �= ψ �[ψ���[�]]
Defines the material functions for Young’ s modulus and the density
����[�_] �= - ����������������� * � � � + ����������������� * � � � -
����������������� * � + ����������������� * �� � ��
ρ[�_] �= - ����������������� * � � � + ����������������� * � � � -
����������������� * � + ����������������� * �� � �
Plots the different material curves for the material properties and the wave velocity
���� = ����[����[�]� {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → {�� ��}� ���������� → {�����}]
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
2.5 × 10 11
Pa
����������������������������������������������

-- 178 of 245 --

��� = ����ρ[�]� {�� �� �}� ��������� → ���������[�]� ���������� → {�� �}�
��������� → �� ��  � � �� ���������� → {�����}� ��������� → {�� ���� �}
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
10 000
12 000
kg
m 3
����[β[�]� {�� �� �}� ��������� → ���������[�]� ���������� → {�� �}]
0.2 	0.4 	0.6 	0.8 	1.0
0.2
0.4
0.6
0.8
1.0
���� = ����[����[ψ���[�]] β[�]� {�� �� ���}�
��������� → ���������[�]� ���������� → {�� �}]
0.1 	0.2 	0.3 	0.4 	0.5
2.0 × 10 10
4.0 × 10 10
6.0 × 10 10
8.0 × 10 10
1.0 × 10 11
1.2 × 10 11
2 ��� x_från_matlab.nb
����������������������������������������������

-- 179 of 245 --

������ =
���� ρ[ψ���[�]]
β[�] � {�� �� ���}� ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
5000
10 000
15 000
���� = ���� ����[�]
ρ[�] � {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → {�� � / �}� ���������� → {�����}
0.2 	0.4 	0.6 	0.8 	1.0 m
1000
2000
3000
4000
5000
m
s
���� = ���� ����[ψ���[�]] β[�]
ρ[ψ���[�]]
β[�]
�
{�� �� ���}� ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
500
1000
1500
2000
2500
x_från_matlab.nb 	��� 3
����������������������������������������������

-- 180 of 245 --

����[ψ���[�]� {�� �� �}� ���������� → {�� �}]
0.2 	0.4 	0.6 	0.8 	1.0
0.5
1.0
1.5
2.0
Calculating the material properties from the curves for the transformed and original rods and where
the reflections occur
���������������
�� � + ����� ����[�]� ρ[�]� ����[�] ρ[�]� ����[�]
ρ[�] � �� ���
� � � - ���
� � ���
���� ��� ������� × �� �� ������� ������� × �� �� �������
���� ��� ������� × �� �� ������� ������� × �� �� �������
���� ��� ������� × �� �� ������� ������� × �� �� �������
���� ��� ������� × �� �� ������� ������� × �� �� �������
���� ��� ������� × �� �� ������� ������� × �� �� �������
���� ��� ������� × �� �� ������� 	������ × �� �� 	�������
���� ��� ������� × �� �� ������� ������� × �� �� �������
���� ��� ������� × �� �� ������� ������� × �� �� �������
���� ��� ������� × �� �� ������� ������� × �� �� �������
���� 	�� 	������� × �� � 	������� ������� × �� �� �������
����������������� ψ[�]� β[ψ[�]] ����[ψ���[ψ[�]]]�
ρ[ψ���[ψ[�]]]
β[ψ[�]] � β[ψ[�]] ����[ψ���[ψ[�]]] ρ[ψ���[ψ[�]]]
β[ψ[�]] �
β[ψ[�]] ����[ψ���[ψ[�]]]
ρ[ψ���[ψ[�]]]
β[ψ[�]]
� �� ���
� � � - ���
� � ���
���� ����� ������� × �� �� �� ����� ������� × �� �� ������
���� ����� ������� × �� �� �� ����� ������� × �� �� ������
���� ����� ������� × �� �� 	������� ������� × �� �� ������
���� ����� ������� × �� �� 	������� ������� × �� �� ������
���� ����� ������� × �� �� 	������� ������� × �� �� ������
���� ����� ������� × �� �� 	������� 	������ × �� �� 	������
���� ����� ������� × �� �� 	������� ������� × �� �� ������
���� ����� 	������� × �� � 	������� ������� × �� �� ������
���� ����� 	������� × �� � 	������ 	������� × �� �� ������
���� ����� 	������� × �� � 	������� ������� × �� �� ������
Plotting the final plots which shows the transformed and orignal values for Young’s modulus the
density and the wave velocity
4 ��� x_från_matlab.nb
����������������������������������������������

-- 181 of 245 --

density 	velocity
������ = ����[����� ����]
�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
2.5 × 10 11
Pa
������� = ����[���� ������]
�
�
0.0 	0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
10 000
12 000
kg
m 3
�������� = ����[����� ����]
�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
1000
2000
3000
4000
5000
m
s
x_från_matlab.nb 	��� 5
����������������������������������������������

-- 182 of 245 --

Transformation with x-function (linear), Case Study 5
Following calculations are made with the theory of elastic wave propagation between different
materials. This is done in order to compare two Rods (A and B) with different lengths and material
parameters. Stresses and particle velocity for incident, reflected and transmitted waves will be
determine and presented below.
Material parameters Rod A
Material parameters has been calculated in mathematica
Young's modulus: 	Density: 	Wave velocity:
EA1 	2.08459 10
11
 	Pa		 	ρA1 	7792.39 kg
m
3
	 cA1
EA1
ρA1
5.172 	10 3
 m
s
	
EA2 	1.49056 10
11
 	Pa		 	ρA2 	5571.87 kg
m
3
	 cA2
EA2
ρA2
5.172 	10 3
 m
s
	
EA3 	1.04165 10
11
 	Pa		 	ρA3 	3893.78 kg
m
3
	
cA3
EA3
ρA3
5.172 	10 3
 m
s
	

-- 183 of 245 --

EA4 	7.15341 10
10
 	Pa		 	ρA4 	2674.01 kg
m
3
	 	cA4
EA4
ρA4
5.172 	10 3
 m
s
	
EA5 	4.89137 10
10
 	Pa		 	ρA5 	1828.44 kg
m
3
	 	cA5
EA5
ρA5
5.172 	10 3
 m
s
	
EA6 	3.40533 10
10
 	Pa		 	ρA6 	1272.95 kg
m
3
	 cA6
EA6
ρA6
5.172 	10 3
 m
s
	
EA7 	2.47025 10
10
 	Pa		 	ρA7 	923.404 kg
m
3
	 	cA7
EA7
ρA7
5.172 	10 3
 m
s
	
EA8 	1.86109 10
10
 	Pa		 	ρA8 	695.695 kg
m
3
	 	cA8
EA8
ρA8
5.172 	10 3
 m
s
	
EA9 	1.35282 10
10
 	Pa		 	ρA9 	505.698 kg
m
3
	 cA9
EA9
ρA9
5.172 	10 3
 m
s
	
EA10 	7.20397 10 9
 	Pa		 	ρA10 	269.291 kg
m
3
	
cA10
EA10
ρA10
5.172 	10 3
 m
s
	
Wave Velocity:
cA
EA1
ρA1
5.172 	10
3
 m
s
	
Stresses in Rod A
Force at the left end of the Rod A and B
F 	500N	
Cross section area of Rod A and B
A 	6.450 10 4	
 	m
2

Layer 1:
Intial stress wave of Rod A and B
σI1
F
A 0.775 MPa			
σA1.R
ρA2 cA2	 	ρA1 cA1		
ρA2 cA2	 	ρA1 cA1		 σI1	 	0.129	 	MPa			 	Reflected stress wave, first layer in Rod A

-- 184 of 245 --

σA1.T
2 ρA2	 	cA2	
ρA1 cA1	 	ρA2 cA2		 σI1	 	0.646 MPa			 	Transmitted stress wave, first layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the first layer is in balance
σA1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod A
UPI.A1
σI1
ρA1 cA1	 0.019 m
s
	
UPR.A1
σA1.R	
ρA1 cA1	 3.196 	10 3	
 m
s
	 	Reflected particle velocity, first layer of Rod
A
UPT.A1
σA1.T
ρA2 cA2	 0.022 m
s
	 	Transmitted particle velocity, first layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the intial particle
velocity, meaning that the first layer is in
balance
UPT.A1 	UPR.A1	 	0.019 m
s

Layer 2:
σA2.I 	σA1.T 	0.646 MPa			 	Incident stress wave
σA2.R
ρA3 cA3	 	ρA2 cA2		
ρA3 cA3	 	ρA2 cA2		 σA2.I	 	0.115	 	MPa			 	Reflected stress wave, second layer in Rod A
σA2.T
2 ρA3	 	cA3	
ρA2 cA2	 	ρA3 cA3		 σA2.I	 	0.532 MPa			 	Transmitted stress wave, second layer in
Rod A

-- 185 of 245 --

Transmitted stress wave minus reflected
stress wave equals to the incident stress
wave, meaning that the second layer is in
balance
σA2.T 	σA2.R	 	0.646 MPa		
Incident particle velocity, second second of
Rod A
UPI.A2
σA2.I
ρA2 cA2	 0.022 m
s
	
UPR.A2
σA2.R	
ρA2 cA2	 3.976 	10 3	
 m
s
	 	Reflected particle velocity, second layer of
Rod A
UPT.A2
σA2.T
ρA3 cA3	 0.026 m
s
	 	Transmitted particle velocity, second layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the second
layer is in balance
UPT.A2 	UPR.A2	 	0.022 m
s

Layer 3:
σA3.I 	σA2.T 	0.532 MPa			 	Incident stress wave
σA3.R
ρA4 cA4	 	ρA3 cA3		
ρA4 cA4	 	ρA3 cA3		 σA3.I	 	0.099	 	MPa			 	Reflected stress wave, third layer in Rod A
σA3.T
2 ρA4	 	cA4	
ρA3 cA3	 	ρA4 cA4		 σA3.I	 	0.433 MPa			 	Transmitted stress wave, third layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the third layer is in balance
σA3.T 	σA3.R	 	0.532 MPa		
Incident particle velocity, third layer of Rod A
UPI.A3
σA3.I
ρA3 cA3	 0.026 m
s
	

-- 186 of 245 --

UPR.A3
σA3.R	
ρA3 cA3	 4.904 	10 3	
 m
s
	 	Reflected particle velocity, third layer of Rod
A
UPT.A3
σA3.T
ρA4 cA4	 0.031 m
s
	 	Transmitted particle velocity, third layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the third layer
is in balance
UPT.A3 	UPR.A3	 	0.026 m
s

Layer 4:
σA4.I 	σA3.T 	0.433 MPa			 	Incident stress wave
σA4.R
ρA5 cA5	 	ρA4 cA4		
ρA5 cA5	 	ρA4 cA4		 σA4.I	 	0.081	 	MPa			 	Reflected stress wave, fourth layer in Rod A
σA4.T
2 ρA5	 	cA5	
ρA4 cA4	 	ρA5 cA5		 σA4.I	 	0.352 MPa			 	Transmitted stress wave, fourth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the fourth layer is in balance
σA4.T 	σA4.R	 	0.433 MPa		
Incident particle velocity, fourth layer of
Rod A
UPI.A4
σA4.I
ρA4 cA4	 0.031 m
s
	
UPR.A4
σA4.R	
ρA4 cA4	 5.88 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod
A
UPT.A4
σA4.T
ρA5 cA5	 0.037 m
s
	 	Transmitted particle velocity, fourth layer of
Rod A

-- 187 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the fourth
layer is in balance
UPT.A4 	UPR.A4	 	0.031 m
s

Layer 5:
σA5.I 	σA4.T 	0.352 MPa			 	Incident stress wave
σA5.R
ρA6 cA6	 	ρA5 cA5		
ρA6 cA6	 	ρA5 cA5		 σA5.I	 	0.063	 	MPa			 	Reflected stress wave, fifth layer in Rod A
σA5.T
2 ρA6	 	cA6	
ρA5 cA5	 	ρA6 cA6		 σA5.I	 	0.289 MPa			 	Transmitted stress wave, fifth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the fifth layer is in
balance
σA5.T 	σA5.R	 	0.352 MPa		
Incident particle velocity, fifth layer of Rod A
UPI.A5
σA5.I
ρA5 cA5	 0.037 m
s
	
UPR.A5
σA5.R	
ρA5 cA5	 6.661 	10 3	
 m
s
	 	Reflected particle velocity, fifth layer of Rod
A
UPT.A5
σA5.T
ρA6 cA6	 0.044 m
s
	 	Transmitted particle velocity, fifth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.A5 	UPR.A5	 	0.037 m
s

Layer 6:
σA6.I 	σA5.T 	0.289 MPa			 	Incident stress wave

-- 188 of 245 --

σA6.R
ρA7 cA7	 	ρA6 cA6		
ρA7 cA7	 	ρA6 cA6		 σA6.I	 	0.046	 	MPa			 	Reflected stress wave, sixth layer in Rod A
σA6.T
2 ρA7	 	cA7	
ρA6 cA6	 	ρA7 cA7		 σA6.I	 	0.243 MPa			 	Transmitted stress wave, sixth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the sixth layer is in balance
σA6.T 	σA6.R	 	0.289 MPa		
Incident particle velocity, sixth layer of
Rod A
UPI.A6
σA6.I
ρA6 cA6	 0.044 m
s
	
UPR.A6
σA6.R	
ρA6 cA6	 6.979 	10 3	
 m
s
	 	Reflected particle velocity, sixth layer of Rod
A
UPT.A6
σA6.T
ρA7 cA7	 0.051 m
s
	 	Transmitted particle velocity, sixth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the sixth layer
is in balance
UPT.A6 	UPR.A6	 	0.044 m
s

Layer 7:
σA7.I 	σA6.T 	0.243 MPa			 	Incident stress wave
σA7.R
ρA8 cA8	 	ρA7 cA7		
ρA8 cA8	 	ρA7 cA7		 σA7.I	 	0.034	 	MPa			 	Reflected stress wave, seventh layer in Rod A
σA7.T
2 ρA8	 	cA8	
ρA7 cA7	 	ρA8 cA8		 σA7.I	 	0.209 MPa			 	Transmitted stress wave, seventh layer in
Rod A

-- 189 of 245 --

Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the seventh layer is in balance
σA7.T 	σA7.R	 	0.243 MPa		
Incident particle velocity, seventh layer of
Rod A
UPI.A7
σA7.I
ρA7 cA7	 0.051 m
s
	
UPR.A7
σA7.R	
ρA7 cA7	 7.149 	10 3	
 m
s
	 	Reflected particle velocity, seventh layer of
Rod A
UPT.A7
σA7.T
ρA8 cA8	 0.058 m
s
	 	Transmitted particle velocity, seventh layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the seventh
layer is in balance
UPT.A7 	UPR.A7	 	0.051 m
s

Layer 8:
σA8.I 	σA7.T 	0.209 MPa			 	Incident stress wave
σA8.R
ρA9 cA9	 	ρA8 cA8		
ρA9 cA9	 	ρA8 cA8		 σA8.I	 	0.033	 	MPa			 	Reflected stress wave, eighth layer in Rod A
σA8.T
2 ρA9	 	cA9	
ρA8 cA8	 	ρA9 cA9		 σA8.I	 	0.176 MPa			 	Transmitted stress wave, eighth layer in
Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the eighth layer is in
balance
σA8.T 	σA8.R	 	0.209 MPa		
Incident particle velocity, eighth layer of
Rod A
UPI.A8
σA8.I
ρA8 cA8	 0.058 m
s
	

-- 190 of 245 --

UPR.A8
σA8.R	
ρA8 cA8	 9.169 	10 3	
 m
s
	 	Reflected particle velocity, eighth layer of
Rod A
UPT.A8
σA8.T
ρA9 cA9	 0.067 m
s
	 	Transmitted particle velocity, eighth layer
of Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the eigth layer
is in balance
UPT.A8 	UPR.A8	 	0.058 m
s

Layer 9:
σA9.I 	σA8.T 	0.176 MPa			 	Incident stress wave
σA9.R
ρA10 cA10	 	ρA9 cA9		
ρA10 cA10	 	ρA9 cA9		 σA9.I	 	0.054	 	MPa			 	Reflected stress wave, ninth layer in Rod A
σA9.T
2 ρA10	 	cA10	
ρA9 cA9	 	ρA10 cA10		 σA9.I	 	0.122 MPa			 	Transmitted stress wave, ninth layer in
Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the ninth layer is in balance
σA9.T 	σA9.R	 	0.176 MPa		
Incident particle velocity, ninth layer of
Rod A
UPI.A9
σA9.I
ρA9 cA9	 0.067 m
s
	
UPR.A9
σA9.R	
ρA9 cA9	 0.02 m
s
	 	Reflected particle velocity, ninth layer of Rod
A
UPT.A9
σA9.T
ρA10 cA10	 0.088 m
s
	 	Transmitted particle velocity, ninth layer of
Rod A

-- 191 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
UPT.A9 	UPR.A9	 	0.067 m
s

Layer 10:
σA10.I 	σA9.T 	0.122 MPa			 	Incident stress wave
σA10.R 	σA9.T 	0.122 MPa			 	Reflected stress wave, tenth layer in Rod A
No transmitted stress wave in tenth layer
σA10.I 	σA10.R	 	0.244 MPa		 	Balance in the layer
Incident particle velocity, tenth layer of
Rod A
UPI.A10
σA10.I
ρA10 cA10	 0.088 m
s
	
UPR.A10 	UPI.A10 	0.088 m
s
	 	Reflected particle velocity, tenth layer of Rod
A
No transmitted stress wave in tenth layer
UPR.A10 	UPI.A10	 	0 m
s
 	Balance in the layer

-- 192 of 245 --

Material parameters Rod B
Material parameters is calculated from Mathematica
Young's modulus: 	Density: 	Wave velocity:
EB1 	1.04229 10 11
 	Pa		 	ρB1 	15584.8 kg
m
3
	 	cB1
EB1
ρB1
2.586 	10 3
 m
s
	
EB2 	7.45281 10 10
 	Pa		 	ρB2 	11143.7 kg
m
3
	 	cB2
EB2
ρB2
2.586 	10 3
 m
s
	
EB3 	5.20824 10 10
 	Pa		 	ρB3 	7787.56 kg
m
3
	 	cB3
EB3
ρB3
2.586 	10 3
 m
s
	
EB4 	3.57671 10 10
 	Pa		 	ρB4 	5348.03 kg
m
3
	 cB4
EB4
ρB4
2.586 	10 3
 m
s
	
EB5 	2.44569 10 10
 	Pa		 	ρB5 	3656.88 kg
m
3
	 cB5
EB5
ρB5
2.586 	10 3
 m
s
	
EB6 	1.70267 10 10
 	Pa		 	ρB6 	2545.89 kg
m
3
	 cB6
EB6
ρB6
2.586 	10 3
 m
s
	
EB7 	1.23513 10 10
 	Pa		 	ρB7 	1846.81 kg
m
3
	 cB7
EB7
ρB7
2.586 	10 3
 m
s
	
EB8 	9.30547 10 9
 	Pa		 	ρB8 	1391.39 kg
m
3
	 cB8
EB8
ρB8
2.586 	10 3
 m
s
	
EB9 	6.76411 10 9
 	Pa		 	ρB9 	1011.4 kg
m
3
	 cB9
EB9
ρB9
2.586 	10 3
 m
s
	
EB10 	3.60198 10
9
 	Pa		 	ρB10 	538.582 kg
m
3
	 cB10
EB10
ρB10
2.586 	10 3
 m
s
	

-- 193 of 245 --

Stresses Rod B
Layer 1:
Intial stress wave of Rod A and B
σB1.I
F
A 0.775 MPa			
σB1.R
ρB2 cB2	 	ρB1 cB1		
ρB2 cB2	 	ρB1 cB1		 σI1	 	0.129	 	MPa			 	Reflected stress wave, first layer in Rod B
σB1.T
2 ρB2	 	cB2	
ρB1 cB1	 	ρB2 cB2		 σI1	 	0.646 MPa			 	Transmitted stress wave, first layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the first layer is in balance
σB1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod B
UPI.B1
σB1.I
ρB1 cB1	 0.019 m
s
	
UPR.B1
σB1.R	
ρB1 cB1	 3.196 	10 3	
 m
s
	 	Reflected particle velocity, first layer of Rod B
UPT.B1
σB1.T
ρB2 cB2	 0.022 m
s
	 	Transmitted particle velocity, first layer of
Rod B
Transmitted particle velocity minus reflected
particle velocity equals to the initial particle
velocity, meaning that the first layer is in
balance
UPT.B1 	UPR.B1	 	0.019 m
s


-- 194 of 245 --

Layer 2:
σB2.I 	σB1.T 	0.646 MPa			 	Incident stress wave
σB2.R
ρB3 cB3	 	ρB2 cB2		
ρB3 cB3	 	ρB2 cB2		 σB2.I	 	0.115	 	MPa			 	Reflected stress wave, second layer in Rod B
σB2.T
2 ρB3	 	cB3	
ρB2 cB2	 	ρB3 cB3		 σB2.I	 	0.532 MPa			 	Transmitted stress wave, second layer in
Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the second layer is in balance
σB2.T 	σB2.R	 	0.646 MPa		
Incident particle velocity, second layer of
Rod B
UPI.B2
σB2.I
ρB2 cB2	 0.022 m
s
	
UPR.B2
σB2.R	
ρB2 cB2	 3.976 	10 3	
 m
s
	 	Reflected particle velocity, second layer
of Rod B
Transmitted particle velocity, second layer of
Rod B	UPT.B2
σB2.T
ρB3 cB3	 0.026 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the second layer is in
balance
UPT.B2 	UPR.B2	 	0.022 m
s

Layer 3:
σB3.I 	σB2.T 	0.532 MPa			 	Incident stress wave
σB3.R
ρB4 cB4	 	ρB3 cB3		
ρB4 cB4	 	ρB3 cB3		 σB3.I	 	0.099	 	MPa			 	Reflected stress wave, third layer in Rod B

-- 195 of 245 --

σB3.T
2 ρB4	 	cB4	
ρB3 cB3	 	ρB4 cB4		 σB3.I	 	0.433 MPa			 	Transmitted stress wave, third layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the third layer is in balance
σB3.T 	σB3.R	 	0.532 MPa		
Incident particle velocity, third layer of Rod B
UPI.B3
σB3.I
ρB3 cB3	 0.026 m
s
	
UPR.B3
σB3.R	
ρB3 cB3	 4.904 	10 3	
 m
s
	 	Reflected particle velocity, third layer of Rod B
Transmitted particle velocity, third layer of
Rod B	UPT.B3
σB3.T
ρB4 cB4	 0.031 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the third layer is in
balance
UPT.B3 	UPR.B3	 	0.026 m
s

Layer 4:
σB4.I 	σB3.T 	0.433 MPa			 	Incident stress wave
σB4.R
ρB5 cB5	 	ρB4 cB4		
ρB5 cB5	 	ρB4 cB4		 σB4.I	 	0.081	 	MPa			 	Reflected stress wave, fourth layer in Rod B
σB4.T
2 ρB5	 	cB5	
ρB4 cB4	 	ρB5 cB5		 σB4.I	 	0.352 MPa			 	Transmitted stress wave, fourth layer in Rod B
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the fourth layer is in balance
σB4.T 	σB4.R	 	0.433 MPa		
Incident particle velocity, fourth layer of Rod B
UPI.B4
σB4.I
ρB4 cB4	 0.031 m
s
	

-- 196 of 245 --

UPR.B4
σB4.R	
ρB4 cB4	 5.88 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod B
Transmitted particle velocity, fourth layer of
Rod B	UPT.B4
σB4.T
ρB5 cB5	 0.037 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fourth layer is in
balance
UPT.B4 	UPR.B4	 	0.031 m
s

Layer 5:
σB5.I 	σB4.T 	0.352 MPa			 	Incident stress wave
σB5.R
ρB6 cB6	 	ρB5 cB5		
ρB6 cB6	 	ρB5 cB5		 σB5.I	 	0.063	 	MPa			 	Reflected stress wave, fifth layer in Rod B
σB5.T
2 ρB6	 	cB6	
ρB5 cB5	 	ρB6 cB6		 σB5.I	 	0.289 MPa			 	Transmitted stress wave, fifth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the fifth layer is in balance
σB5.T 	σB5.R	 	0.352 MPa		
Incident particle velocity, fifth layer of Rod B
UPI.B5
σB5.I
ρB5 cB5	 0.037 m
s
	
UPR.B5
σB5.R	
ρB5 cB5	 6.661 	10 3	
 m
s
	 	Reflected particle velocíty, fifth layer of Rod B
Transmitted particle velocity, fifth layer of
Rod B	UPT.B5
σB5.T
ρB6 cB6	 0.044 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.B5 	UPR.B5	 	0.037 m
s


-- 197 of 245 --

Layer 6:
σB6.I 	σB5.T 	0.289 MPa			 	Incident stress wave
σB6.R
ρB7 cB7	 	ρB6 cB6		
ρB7 cB7	 	ρB6 cB6		 σB6.I	 	0.046	 	MPa			 	Reflected stress wave, sixth layer in Rod B
σB6.T
2 ρB7	 	cB7	
ρB6 cB6	 	ρB7 cB7		 σB6.I	 	0.243 MPa			 	Transmitted stress wave, sixth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the sixth layer is in balance
σB6.T 	σB6.R	 	0.289 MPa		
Incident particle velocity, sixth layer of Rod B
UPI.B6
σB6.I
ρB6 cB6	 0.044 m
s
	
UPR.B6
σB6.R	
ρB6 cB6	 6.979 	10 3	
 m
s
	 	Reflected particle velocity, sixth layer of Rod B
Transmitted particle velocity, sixth layer of
Rod B	UPT.B6
σB6.T
ρB7 cB7	 0.051 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the sixth layer is in
balance
UPT.B6 	UPR.B6	 	0.044 m
s

Layer 7:
σB7.I 	σB6.T 	0.243 MPa			 	Incident stress wave
σB7.R
ρB8 cB8	 	ρB7 cB7		
ρB8 cB8	 	ρB7 cB7		 σB7.I	 	0.034	 	MPa			 	Reflected stress wave, seventh layer in Rod B

-- 198 of 245 --

σB7.T
2 ρB8	 	cB8	
ρB7 cB7	 	ρB8 cB8		 σB7.I	 	0.209 MPa			 	Transmitted stress wave, seventh layer in
Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the seventh layer is in balance
σB7.T 	σB7.R	 	0.243 MPa		
Incident particle velocity, seventh layer of
Rod B
UPI.B7
σB7.I
ρB7 cB7	 0.051 m
s
	
UPR.B7
σB7.R	
ρB7 cB7	 7.149 	10 3	
 m
s
	 	Reflected particle velocity, seventh layer of
Rod B
Transmitted particle velocity, seventh layer of
Rod B	UPT.B7
σB7.T
ρB8 cB8	 0.058 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the seventh layer is in
balance
UPT.B7 	UPR.B7	 	0.051 m
s

Layer 8:
σB8.I 	σB7.T 	0.209 MPa			 	Incident stress wave
σB8.R
ρB9 cB9	 	ρB8 cB8		
ρB9 cB9	 	ρB8 cB8		 σB8.I	 	0.033	 	MPa			 	Reflected stress wave, eighth layer in Rod B
σB8.T
2 ρB9	 	cB9	
ρB8 cB8	 	ρB9 cB9		 σB8.I	 	0.176 MPa			 	Transmitted stress wave, eighth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the eighth layer is in balance
σB8.T 	σB8.R	 	0.209 MPa		

-- 199 of 245 --

Incident particle velocity, eighth layer of Rod B
UPI.B8
σB8.I
ρB8 cB8	 0.058 m
s
	
UPR.B8
σB8.R	
ρB8 cB8	 9.169 	10 3	
 m
s
	 	Reflected particle velocity, eighth layer of Rod B
Transmitted particle velocity, eighth layer of
Rod B	UPT.B8
σB8.T
ρB9 cB9	 0.067 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the eighth layer is in
balance
UPT.B8 	UPR.B8	 	0.058 m
s

Layer 9:
σB9.I 	σB8.T 	MPa			 	Incident stress wave
σB9.R
ρB10 cB10	 	ρB9 cB9		
ρB10 cB10	 	ρB9 cB9		 σB9.I	 	0.054	 	MPa			 	Reflected stress wave, ninth layer in Rod B
σB9.T
2 ρB10	 	cB10	
ρB9 cB9	 	ρB10 cB10		 σB9.I	 	0.122 MPa			 	Transmitted stress wave, ninth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the ninth layer is in balance
σB9.T 	σB9.R	 	0.176 MPa		
Incident particle velocity, ninth layer of Rod B
UPI.B9
σB9.I
ρB9 cB9	 0.067 m
s
	
UPR.B9
σB9.R	
ρB9 cB9	 0.02 m
s
	 	Reflected particle velocity, ninth layer of Rod B
Transmitted particle velocity, ninth layer of
Rod B	UPT.B9
σB9.T
ρB10 cB10	 0.088 m
s
	

-- 200 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
UPT.B9 	UPR.B9	 	0.067 m
s

Layer 10:
σB10.I 	σB9.T 	0.122 MPa			 	Incident stress wave
σB10.R 	σB9.T 	0.122 MPa			 	Reflected stress wave, tenth layer in
Rod B
No transmitted stress wave in tenth layer
σB10.I 	σB10.R	 	0.244 MPa		 	Balance in the layer
Incident particle velocity, tenth layer of
Rod B
UPI.B10
σB10.I
ρB10 cB10	 0.088 m
s
	
UPR.B10 	UPI.B10 	0.088 m
s
	 	Reflected particle velocity, tenth layer of Rod B
No transmitted stress wave in tenth layer
UPR.B10 	UPI.B10	 	0 m
s
 	Balance in the layer

-- 201 of 245 --

Transformation with x-function (linear) for real materials,
Case Study 5
Following calculations are made with the theory of elastic wave propagation between different
materials. This is done in order to compare two Rods (A and B) with different lengths and material
parameters. Stresses and particle velocity for incident, reflected and transmitted waves will be
determine and presented below.
Material parameters Rod A
Material parameters has been calculated in mathematica
Young's modulus: 	Density: 	Wave velocity:
EA1 	2.100 10
11
 	Pa		 	ρA1 	7800 kg
m
3
	 cA1
EA1
ρA1
5.189 	10
3
 m
s
	
EA2 	2.450 10
11
 	Pa		 	ρA2 	2900 kg
m
3
	 cA2
EA2
ρA2
9.191 	10
3
 m
s
	
EA3 	7.500 10
10
 	Pa		 	ρA3 	5500 kg
m
3
	 cA3
EA3
ρA3
3.693 	10
3
 m
s
	
EA4 	7.00 10
10
 	Pa		 	ρA4 	2700 kg
m
3
	 	cA4
EA4
ρA4
5.092 	10
3
 m
s
	
EA5 	4.400 10
10
 	Pa		 	ρA5 	1800 kg
m
3
	 	cA5
EA5
ρA5
4.944 	10
3
 m
s
	
EA6 	2.600 10
10
 	Pa		 	ρA6 	1800 kg
m
3
	 cA6
EA6
ρA6
3.801 	10
3
 m
s
	
EA7 	1.700 10
10
 	Pa		 	ρA7 	700 kg
m
3
	 	cA7
EA7
ρA7
4.928 	10
3
 m
s
	
EA8 	1.700 10
10
 	Pa		 	ρA8 	700 kg
m
3
	 	cA8
EA8
ρA8
4.928 	10
3
 m
s
	
EA9 	3.500 10
10
 	Pa		 	ρA9 	1300 kg
m
3
	 cA9
EA9
ρA9
5.189 	10
3
 m
s
	
EA10 	1.500 10
9
 	Pa		 	ρA10 	1400 kg
m
3
	 	cA10
EA10
ρA10
1.035 	10
3
 m
s
	

-- 202 of 245 --

Stresses in Rod A
F 	500N	 	Force at the left end of the Rod A and B
A 	6.450 10 4	
 	m
2
 	Cross section area of Rod A and B
Layer 1:
σI1
F
A 0.775 MPa			 	Intial stress wave of Rod A and B
σA1.R
ρA2 cA2	 	ρA1 cA1		
ρA2 cA2	 	ρA1 cA1		 σI1	 	0.16	 	MPa			 Reflected stress wave, first layer in Rod A
σA1.T
2 ρA2	 	cA2	
ρA1 cA1	 	ρA2 cA2		 σI1	 	0.616 MPa			 Transmitted stress wave, first layer in Rod A
σA1.T 	σA1.R	 	0.775 MPa		 	Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the first layer is in balance
UPI.A1
σI1
ρA1 cA1	 0.019 m
s
	 	Intial particle velocity, first layer of Rod A
UPR.A1
σA1.R	
ρA1 cA1	 3.942 	10 3	
 m
s
	 Reflected particle velocity, first layer of Rod
A
UPT.A1
σA1.T
ρA2 cA2	 0.023 m
s
	 Transmitted particle velocity, first layer of
Rod A

-- 203 of 245 --

UPT.A1 	UPR.A1	 	0.019 m
s
 	Transmitted particle velocity minus reflected
particle velocity equals to the intial particle
velocity, meaning that the first layer is in
balance
Layer 2:
σA2.I 	σA1.T 	0.616 MPa			 Incident stress wave
σA2.R
ρA3 cA3	 	ρA2 cA2		
ρA3 cA3	 	ρA2 cA2		 σA2.I	 	0.083	 	MPa			 Reflected stress wave, second layer in Rod A
σA2.T
2 ρA3	 	cA3	
ρA2 cA2	 	ρA3 cA3		 σA2.I	 	0.532 MPa			 Transmitted stress wave, second layer in
Rod A
Transmitted stress wave minus reflected
stress wave equals to the incident stress
wave, meaning that the second layer is in
balance
σA2.T 	σA2.R	 	0.616 MPa		
UPI.A2
σA2.I
ρA2 cA2	 0.023 m
s
	 	Incident particle velocity, second second of
Rod A
UPR.A2
σA2.R	
ρA2 cA2	 3.12 	10 3	
 m
s
	 Reflected particle velocity, second layer of
Rod A
UPT.A2
σA2.T
ρA3 cA3	 0.026 m
s
	 Transmitted particle velocity, second layer of
Rod A
UPT.A2 	UPR.A2	 	0.023 m
s
 	Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the second
layer is in balance

-- 204 of 245 --

Layer 3:
σA3.I 	σA2.T 	0.532 MPa			 	Incident stress wave
σA3.R
ρA4 cA4	 	ρA3 cA3		
ρA4 cA4	 	ρA3 cA3		 σA3.I	 	0.103	 	MPa			 	Reflected stress wave, third layer in Rod A
σA3.T
2 ρA4	 	cA4	
ρA3 cA3	 	ρA4 cA4		 σA3.I	 	0.43 MPa			 	Transmitted stress wave, third layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the third layer is in balance
σA3.T 	σA3.R	 	0.532 MPa		
Incident particle velocity, third layer of Rod A
UPI.A3
σA3.I
ρA3 cA3	 0.026 m
s
	
Reflected particle velocity, third layer of Rod
A
UPR.A3
σA3.R	
ρA3 cA3	 5.051 	10 3	
 m
s
	
Transmitted particle velocity, third layer of
Rod A
UPT.A3
σA3.T
ρA4 cA4	 0.031 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the third layer
is in balance
UPT.A3 	UPR.A3	 	0.026 m
s

Layer 4:
σA4.I 	σA3.T 	0.43 MPa			 	Incident stress wave
σA4.R
ρA5 cA5	 	ρA4 cA4		
ρA5 cA5	 	ρA4 cA4		 σA4.I	 	0.092	 	MPa			 	Reflected stress wave, fourth layer in Rod A

-- 205 of 245 --

σA4.T
2 ρA5	 	cA5	
ρA4 cA4	 	ρA5 cA5		 σA4.I	 	0.338 MPa			 	Transmitted stress wave, fourth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the fourth layer is in balance
σA4.T 	σA4.R	 	0.43 MPa		
Incident particle velocity, fourth layer of
Rod A
UPI.A4
σA4.I
ρA4 cA4	 0.031 m
s
	
UPR.A4
σA4.R	
ρA4 cA4	 6.694 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod
A
UPT.A4
σA4.T
ρA5 cA5	 0.038 m
s
	 	Transmitted particle velocity, fourth layer of
Rod A
UPT.A4 	UPR.A4	 	0.031 m
s
 	Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the fourth
layer is in balance
Layer 5:
σA5.I 	σA4.T 	0.338 MPa			 	Incident stress wave
σA5.R
ρA6 cA6	 	ρA5 cA5		
ρA6 cA6	 	ρA5 cA5		 σA5.I	 	0.044	 	MPa			 	Reflected stress wave, fifth layer in Rod A
σA5.T
2 ρA6	 	cA6	
ρA5 cA5	 	ρA6 cA6		 σA5.I	 	0.294 MPa			 	Transmitted stress wave, fifth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the fifth layer is in
balance
σA5.T 	σA5.R	 	0.338 MPa		

-- 206 of 245 --

Incident particle velocity, fifth layer of Rod A
UPI.A5
σA5.I
ρA5 cA5	 0.038 m
s
	
UPR.A5
σA5.R	
ρA5 cA5	 4.964 	10 3	
 m
s
	 	Reflected particle velocity, fifth layer of Rod
A
UPT.A5
σA5.T
ρA6 cA6	 0.043 m
s
	 	Transmitted particle velocity, fifth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.A5 	UPR.A5	 	0.038 m
s

Layer 6:
σA6.I 	σA5.T 	0.294 MPa			 	Incident stress wave
σA6.R
ρA7 cA7	 	ρA6 cA6		
ρA7 cA7	 	ρA6 cA6		 σA6.I	 	0.097	 	MPa			 	Reflected stress wave, sixth layer in Rod A
σA6.T
2 ρA7	 	cA7	
ρA6 cA6	 	ρA7 cA7		 σA6.I	 	0.197 MPa			 	Transmitted stress wave, sixth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the sixth layer is in balance
σA6.T 	σA6.R	 	0.294 MPa		
Incident particle velocity, sixth layer of
Rod A
UPI.A6
σA6.I
ρA6 cA6	 0.043 m
s
	

-- 207 of 245 --

UPR.A6
σA6.R	
ρA6 cA6	 0.014 m
s
	 	Reflected particle velocity, sixth layer of Rod
A
UPT.A6
σA6.T
ρA7 cA7	 0.057 m
s
	 	Transmitted particle velocity, sixth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the sixth layer
is in balance
UPT.A6 	UPR.A6	 	0.043 m
s

Layer 7:
σA7.I 	σA6.T 	0.197 MPa			 	Incident stress wave
σA7.R
ρA8 cA8	 	ρA7 cA7		
ρA8 cA8	 	ρA7 cA7		 σA7.I	 	0 MPa			 	Reflected stress wave, seventh layer in Rod A
σA7.T
2 ρA8	 	cA8	
ρA7 cA7	 	ρA8 cA8		 σA7.I	 	0.197 MPa			 	Transmitted stress wave, seventh layer in
Rod A
σA7.T 	σA7.R	 	0.197 MPa		 	Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the seventh layer is in balance
UPI.A7
σA7.I
ρA7 cA7	 0.057 m
s
	 	Incident particle velocity, seventh layer of
Rod A
UPR.A7
σA7.R	
ρA7 cA7	 0 m
s
	 	Reflected particle velocity, seventh layer of
Rod A
UPT.A7
σA7.T
ρA8 cA8	 0.057 m
s
	 	Transmitted particle velocity, seventh layer of
Rod A

-- 208 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the seventh
layer is in balance
UPT.A7 	UPR.A7	 	0.057 m
s

Layer 8:
σA8.I 	σA7.T 	0.197 MPa			 	Incident stress wave
σA8.R
ρA9 cA9	 	ρA8 cA8		
ρA9 cA9	 	ρA8 cA8		 σA8.I	 	0.064 MPa			 	Reflected stress wave, eighth layer in Rod A
σA8.T
2 ρA9	 	cA9	
ρA8 cA8	 	ρA9 cA9		 σA8.I	 	0.261 MPa			 	Transmitted stress wave, eighth layer in
Rod A
σA8.T 	σA8.R	 	0.197 MPa		 	Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the eighth layer is in
balance
UPI.A8
σA8.I
ρA8 cA8	 0.057 m
s
	 	Incident particle velocity, eighth layer of
Rod A
UPR.A8
σA8.R	
ρA8 cA8	 0.018	 m
s
	 	Reflected particle velocity, eighth layer of
Rod A
UPT.A8
σA8.T
ρA9 cA9	 0.039 m
s
	 	Transmitted particle velocity, eighth layer
of Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the eigth layer
is in balance
UPT.A8 	UPR.A8	 	0.057 m
s


-- 209 of 245 --

Layer 9:
σA9.I 	σA8.T 	0.261 MPa			 	Incident stress wave
σA9.R
ρA10 cA10	 	ρA9 cA9		
ρA10 cA10	 	ρA9 cA9		 σA9.I	 	0.168	 	MPa			 	Reflected stress wave, ninth layer in Rod A
σA9.T
2 ρA10	 	cA10	
ρA9 cA9	 	ρA10 cA10		 σA9.I	 	0.092 MPa			 	Transmitted stress wave, ninth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the ninth layer is in balance
σA9.T 	σA9.R	 	0.261 MPa		
UPI.A9
σA9.I
ρA9 cA9	 0.039 m
s
	 	Incident particle velocity, ninth layer of
Rod A
UPR.A9
σA9.R	
ρA9 cA9	 0.025 m
s
	 	Reflected particle velocity, ninth layer of Rod
A
UPT.A9
σA9.T
ρA10 cA10	 0.064 m
s
	 	Transmitted particle velocity, ninth layer of
Rod A
UPT.A9 	UPR.A9	 	0.039 m
s
 	Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
Layer 10:
σA10.I 	σA9.T 	0.092 MPa			 Incident stress wave
σA10.R 	σA9.T 	0.092 MPa			 Reflected stress wave, tenth layer in Rod A

-- 210 of 245 --

No transmitted stress wave in tenth layer
σA10.I 	σA10.R	 	0.184 MPa		 Balance in the layer
UPI.A10
σA10.I
ρA10 cA10	 0.064 m
s
	 	Incident particle velocity, tenth layer of
Rod A
UPR.A10 	UPI.A10 	0.064 m
s
	 Reflected particle velocity, tenth layer of Rod
A
No transmitted stress wave in tenth layer
UPR.A10 	UPI.A10	 	0 m
s
 Balance in the layer

-- 211 of 245 --

��������������������������������������������������������
������������������������������
Defines the psi functions and calculating beta(x)
�����[�_] = �����������������������{{�}� �� �}� {�}� �
� � �
� � � /� {� → �}
� 	� + - �
� + �
� (- � + �) 	�
ψ = �����
�����
ψ��� = ��������
��������
Defines the material functions for Young’ s modulus and the density
��������[��� ρ�]� �� = ���� × �� � � ρ� = ������
����[�_] �= - ����������������� * � � � + ����������������� * � � � -
����������������� * � + ����������������� * �� � ��
ρ[�_] �= - ����������������� * � � � + ����������������� * � � � -
����������������� * � + ����������������� * �� � �
Plots the different material curves for the material properties and the wave velocity
���� = ����[����[�]� {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → {�� ��}� ���������� → {�����}]
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
2.5 × 10 11
Pa
����������������������������������������������

-- 212 of 245 --

��� = ����ρ[�]� {�� �� �}� ��������� → ���������[�]�
���������� → {�� �}� ��������� → �� ��  � � �� ���������� → {�����}
0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
kg
m 3
������ =
���� ρ[ψ���[�]]
β[�] � {�� �� ���}� ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
2000
4000
6000
8000
���� = ��������[ψ���[�]] β[�]� �� �� �
� �
��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
2.5 × 10 11
2 ��� xtre_från_matlab.nb
����������������������������������������������

-- 213 of 245 --

���� = ���� ����[�]
ρ[�] � {�� �� �}� ��������� → ���������[�]� ���������� → {�� �}
0.2 	0.4 	0.6 	0.8 	1.0
1000
2000
3000
4000
5000
���� = ���� ����[ψ���[�]] β[�]
ρ[ψ���[�]]
β[�]
�
{�� �� ���}� ��������� → ���������[�]� ���������� → {�� �}
0.1 	0.2 	0.3 	0.4 	0.5
1000
2000
3000
4000
5000
����[����[ψ���[�]]� {�� �� �}� ���������� → {�� �}]
0.2 	0.4 	0.6 	0.8 	1.0
-2 × 10 11
-1 × 10 11
1 × 10 11
2 × 10 11
xtre_från_matlab.nb 	��� 3
����������������������������������������������

-- 214 of 245 --

������ 	� + - �
� + �
� (- � + �) 	� 	⩵ �� �
� → �
� - �
� - �� + �� � + � 	� 	� - �� � + �� � �  �/� +
�
� - �� + �� � + � 	� 	� - �� � + �� � � �/�
�
� → �
� + � + ⅈ 	�
� - �� + �� � + � 	� 	� - �� � + �� � �  �/� -
�
� � - ⅈ 	�  	- �� + �� � + � 	� 	� - �� � + �� � � �/�
�
� → �
� + � - ⅈ 	�
� - �� + �� � + � 	� 	� - �� � + �� � �  �/� -
�
� � + ⅈ 	�  	- �� + �� � + � 	� 	� - �� � + �� � � �/�

��������[�_] �=
�
� - �
� - �� + �� � + � 	� 	� - �� � + �� � �  �/� + �
� - �� + �� � + � 	� 	� - �� � + �� � � �/�
β[�_] �= ����� �[��������[�]]
����[β[�]� {�� �� �}� ��������� → ���������[�]� ���������� → {�� �}]
0.2 	0.4 	0.6 	0.8 	1.0
0.5
1.0
1.5
Calculating the material properties from the curves for the transformed and original rods and where
the reflections occur
4 ��� xtre_från_matlab.nb
����������������������������������������������

-- 215 of 245 --

����������������� � + ���
� � ����[�]� ρ[�]� ����[�] ρ[�]� ψ[� + ����]� ����[�]
ρ[�] �
�� ���
� � � - ���
� � ���
���� ��� ������� × �� �� ������� ������� × �� �� ������ �������
���� ��� ������� × �� �� ������� ������� × �� �� 	����� 	�������
���� ��� ������� × �� �� ������� ������� × �� �� ������ �������
���� ��� ������� × �� �� ������� ������� × �� �� 	����� 	�������
���� ��� ������� × �� �� ������� ������� × �� �� ������ �������
���� ��� ������� × �� �� ������� 	������ × �� �� 	����� 	�������
���� ��� ������� × �� �� ������� ������� × �� �� ������ �������
���� ��� ������� × �� �� ������� ������� × �� �� 	����� 	�������
���� ��� ������� × �� �� ������� ������� × �� �� ������ �������
���� 	�� 	������� × �� � 	������� ������� × �� �� 	��� 	�������
����������������� ψ� + ���
� � β[ψ[�]] ����[�]� ρ[�]
β[ψ[�]] �
β[ψ[�]] ����[�] ρ[�]
β[ψ[�]] � β[ψ[�]] ����[�]
ρ[�]
β[ψ[�]]
� �� ���
� � � - ���
� � ���
���� ������ ������� × �� �� ������� ������� × �� �� �������
���� 	����� 	������ × �� �� 	������� ������� × �� �� 	������
���� ������ ������� × �� �� ������� ������� × �� �� �������
���� 	����� 	������� × �� �� ������� ������� × �� �� �������
���� ������ ������� × �� �� ������� ������� × �� �� �������
���� 	����� 	������� × �� �� ������� 	������ × �� �� 	�������
���� ������ 	������� × �� � 	������� ������� × �� �� �������
���� 	����� 	������� × �� � 	������� ������� × �� �� �������
���� ������ 	������� × �� � 	������� ������� × �� �� �������
���� 	��� 	������ × �� � 	������� ������� × �� �� �������
Plotting the final plots which shows the transformed and orignal values for Young’s modulus the
density and the wave velocity
������ = ����[����� ����]
�	�
0.2 	0.4 	0.6 	0.8 	1.0 m
5.0 × 10 10
1.0 × 10 11
1.5 × 10 11
2.0 × 10 11
2.5 × 10 11
Pa
������� = ����[���� ������]
xtre_från_matlab.nb 	��� 5
����������������������������������������������

-- 216 of 245 --

�
�
0.2 	0.4 	0.6 	0.8 	1.0 m
2000
4000
6000
8000
kg
m 3
������ = ����[����� ����]
�
�
0.2 	0.4 	0.6 	0.8 	1.0
1000
2000
3000
4000
5000
6 ��� xtre_från_matlab.nb
����������������������������������������������

-- 217 of 245 --

Transformation with x^3-function, Case Study 5
Following calculations are made with the theory of elastic wave propagation between different
materials. This is done in order to compare two Rods (A and B) with different lengths and material
parameters. Stresses and particle velocity for incident, reflected and transmitted waves will be
determine and presented below.
Material parameters Rod A
Material parameters has been calculated in mathematica
Young's modulus: 	Density: 	Wave velocity:
EA1 	2.08459 10
11
 	Pa		 	ρA1 	7792.39 kg
m
3
	 cA1
EA1
ρA1
5.172 	10 3
 m
s
	
EA2 	1.49056 10
11
 	Pa		 	ρA2 	5571.87 kg
m
3
	 cA2
EA2
ρA2
5.172 	10 3
 m
s
	
EA3 	1.04165 10
11
 	Pa		 	ρA3 	3893.78 kg
m
3
	
cA3
EA3
ρA3
5.172 	10 3
 m
s
	

-- 218 of 245 --

EA4 	7.15341 10
10
 	Pa		 	ρA4 	2674.01 kg
m
3
	 	cA4
EA4
ρA4
5.172 	10 3
 m
s
	
EA5 	4.89137 10
10
 	Pa		 	ρA5 	1828.44 kg
m
3
	 	cA5
EA5
ρA5
5.172 	10 3
 m
s
	
EA6 	3.40533 10
10
 	Pa		 	ρA6 	1272.95 kg
m
3
	 cA6
EA6
ρA6
5.172 	10 3
 m
s
	
EA7 	2.47025 10
10
 	Pa		 	ρA7 	923.404 kg
m
3
	 	cA7
EA7
ρA7
5.172 	10 3
 m
s
	
EA8 	1.86109 10
10
 	Pa		 	ρA8 	695.695 kg
m
3
	 	cA8
EA8
ρA8
5.172 	10 3
 m
s
	
EA9 	1.35282 10
10
 	Pa		 	ρA9 	505.698 kg
m
3
	 cA9
EA9
ρA9
5.172 	10 3
 m
s
	
EA10 	7.20397 10 9
 	Pa		 	ρA10 	269.291 kg
m
3
	
cA10
EA10
ρA10
5.172 	10 3
 m
s
	
Wave Velocity:
cA
EA1
ρA1
5.172 	10
3
 m
s
	
Stresses in Rod A
Force at the left end of the Rod A and B
F 	500N	
Cross section area of Rod A and B
A 	6.450 10 4	
 	m
2

Layer 1:
Intial stress wave of Rod A and B
σI1
F
A 0.775 MPa			
σA1.R
ρA2 cA2	 	ρA1 cA1		
ρA2 cA2	 	ρA1 cA1		 σI1	 	0.129	 	MPa			 	Reflected stress wave, first layer in Rod A

-- 219 of 245 --

σA1.T
2 ρA2	 	cA2	
ρA1 cA1	 	ρA2 cA2		 σI1	 	0.646 MPa			 	Transmitted stress wave, first layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the first layer is in balance
σA1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod A
UPI.A1
σI1
ρA1 cA1	 0.019 m
s
	
UPR.A1
σA1.R	
ρA1 cA1	 3.196 	10 3	
 m
s
	 	Reflected particle velocity, first layer of Rod
A
UPT.A1
σA1.T
ρA2 cA2	 0.022 m
s
	 	Transmitted particle velocity, first layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the intial particle
velocity, meaning that the first layer is in
balance
UPT.A1 	UPR.A1	 	0.019 m
s

Layer 2:
σA2.I 	σA1.T 	0.646 MPa			 	Incident stress wave
σA2.R
ρA3 cA	 	ρA2 cA2		
ρA3 cA	 	ρA2 cA2		 σA2.I	 	0.115	 	MPa				σA2.R
ρA3 cA3	 	ρA2 cA2		
ρA3 cA3	 	ρA2 cA2		 σA2.I	 	0.115	 	MPa			 	Reflected stress wave, second layer in Rod A
σA2.T
2 ρA3	 	cA3	
ρA2 cA2	 	ρA3 cA3		 σA2.I	 	0.532 MPa			 	Transmitted stress wave, second layer in
Rod A

-- 220 of 245 --

Transmitted stress wave minus reflected
stress wave equals to the incident stress
wave, meaning that the second layer is in
balance
σA2.T 	σA2.R	 	0.646 MPa		
Incident particle velocity, second second of
Rod A
UPI.A2
σA2.I
ρA2 cA2	 0.022 m
s
	
UPR.A2
σA2.R	
ρA2 cA2	 3.976 	10 3	
 m
s
	 	Reflected particle velocity, second layer of
Rod A
UPT.A2
σA2.T
ρA3 cA3	 0.026 m
s
	 	Transmitted particle velocity, second layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the second
layer is in balance
UPT.A2 	UPR.A2	 	0.022 m
s

Layer 3:
σA3.I 	σA2.T 	0.532 MPa			 	Incident stress wave
σA3.R
ρA4 cA4	 	ρA3 cA3		
ρA4 cA4	 	ρA3 cA3		 σA3.I	 	0.099	 	MPa				σA3.R
ρA4 cA4	 	ρA3 cA3		
ρA4 cA4	 	ρA3 cA3		 σA3.I	 	0.099	 	MPa			 	Reflected stress wave, third layer in Rod A
σA3.T
2 ρA4	 	cA4	
ρA3 cA3	 	ρA4 cA4		 σA3.I	 	0.433 MPa			 	Transmitted stress wave, third layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the third layer is in balance
σA3.T 	σA3.R	 	0.532 MPa		
Incident particle velocity, third layer of Rod A
UPI.A3
σA3.I
ρA3 cA3	 0.026 m
s
	

-- 221 of 245 --

UPR.A3
σA3.R	
ρA3 cA3	 4.904 	10 3	
 m
s
	 	Reflected particle velocity, third layer of Rod
A
UPT.A3
σA3.T
ρA4 cA4	 0.031 m
s
	 	Transmitted particle velocity, third layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the third layer
is in balance
UPT.A3 	UPR.A3	 	0.026 m
s

Layer 4:
σA4.I 	σA3.T 	0.433 MPa			 	Incident stress wave
σA4.R
ρA5 cA5	 	ρA4 cA4		
ρA5 cA5	 	ρA4 cA4		 σA4.I	 	0.081	 	MPa				σA4.R
ρA5 cA5	 	ρA4 cA4		
ρA5 cA5	 	ρA4 cA4		 σA4.I	 	0.081	 	MPa			 	Reflected stress wave, fourth layer in Rod A
σA4.T
2 ρA5	 	cA5	
ρA4 cA4	 	ρA5 cA5		 σA4.I	 	0.352 MPa			 	Transmitted stress wave, fourth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the fourth layer is in balance
σA4.T 	σA4.R	 	0.433 MPa		
Incident particle velocity, fourth layer of
Rod A
UPI.A4
σA4.I
ρA4 cA4	 0.031 m
s
	
UPR.A4
σA4.R	
ρA4 cA4	 5.88 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod
A
UPT.A4
σA4.T
ρA5 cA5	 0.037 m
s
	 	Transmitted particle velocity, fourth layer of
Rod A

-- 222 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the fourth
layer is in balance
UPT.A4 	UPR.A4	 	0.031 m
s

Layer 5:
σA5.I 	σA4.T 	0.352 MPa			 	Incident stress wave
σA5.R
ρA6 cA6	 	ρA5 cA5		
ρA6 cA6	 	ρA5 cA5		 σA5.I	 	0.063	 	MPa				σA5.R
ρA6 cA6	 	ρA5 cA5		
ρA6 cA6	 	ρA5 cA5		 σA5.I	 	0.063	 	MPa			 	Reflected stress wave, fifth layer in Rod A
σA5.T
2 ρA6	 	cA6	
ρA5 cA5	 	ρA6 cA6		 σA5.I	 	0.289 MPa			 	Transmitted stress wave, fifth layer in Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the fifth layer is in
balance
σA5.T 	σA5.R	 	0.352 MPa		
Incident particle velocity, fifth layer of Rod A
UPI.A5
σA5.I
ρA5 cA5	 0.037 m
s
	
UPR.A5
σA5.R	
ρA5 cA5	 6.661 	10 3	
 m
s
	 	Reflected particle velocity, fifth layer of Rod
A
UPT.A5
σA5.T
ρA6 cA6	 0.044 m
s
	 	Transmitted particle velocity, fifth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.A5 	UPR.A5	 	0.037 m
s

Layer 6:
σA6.I 	σA5.T 	0.289 MPa			 	Incident stress wave

-- 223 of 245 --

σA6.R
ρA7 cA7	 	ρA6 cA6		
ρA7 cA7	 	ρA6 cA6		 σA6.I	 	0.046	 	MPa			 	Reflected stress wave, sixth layer in Rod A
σA6.R
ρA7 cA7	 	ρA6 cA6		
ρA7 cA7	 	ρA6 cA6		 σA6.I	 	0.046	 	MPa			
Transmitted stress wave, sixth layer in Rod A
σA6.T
2 ρA7	 	cA7	
ρA6 cA6	 	ρA7 cA7		 σA6.I	 	0.243 MPa			
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the sixth layer is in balance
σA6.T 	σA6.R	 	0.289 MPa		
Incident particle velocity, sixth layer of
Rod A	UPI.A6
σA6.I
ρA6 cA6	 0.044 m
s
	
UPR.A6
σA6.R	
ρA6 cA6	 6.979 	10 3	
 m
s
	 	Reflected particle velocity, sixth layer of Rod
A
UPT.A6
σA6.T
ρA7 cA7	 0.051 m
s
	 	Transmitted particle velocity, sixth layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the sixth layer
is in balance
UPT.A6 	UPR.A6	 	0.044 m
s

Layer 7:
σA7.I 	σA6.T 	0.243 MPa			 	Incident stress wave
σA7.R
ρA8 cA8	 	ρA7 cA7		
ρA8 cA8	 	ρA7 cA7		 σA7.I	 	0.034	 	MPa				σA7.R
ρA8 cA8	 	ρA7 cA7		
ρA8 cA8	 	ρA7 cA7		 σA7.I	 	0.034	 	MPa			 	Reflected stress wave, seventh layer in Rod A
σA7.T
2 ρA8	 	cA8	
ρA7 cA7	 	ρA8 cA8		 σA7.I	 	0.209 MPa			 	Transmitted stress wave, seventh layer in
Rod A

-- 224 of 245 --

Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the seventh layer is in balance
σA7.T 	σA7.R	 	0.243 MPa		
Incident particle velocity, seventh layer of
Rod A
UPI.A7
σA7.I
ρA7 cA7	 0.051 m
s
	
UPR.A7
σA7.R	
ρA7 cA7	 7.149 	10 3	
 m
s
	 	Reflected particle velocity, seventh layer of
Rod A
UPT.A7
σA7.T
ρA8 cA8	 0.058 m
s
	 	Transmitted particle velocity, seventh layer of
Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the seventh
layer is in balance
UPT.A7 	UPR.A7	 	0.051 m
s

Layer 8:
σA8.I 	σA7.T 	0.209 MPa			 	Incident stress wave
σA8.R
ρA9 cA9	 	ρA8 cA8		
ρA9 cA9	 	ρA8 cA8		 σA8.I	 	0.033	 	MPa				σA8.R
ρA9 cA9	 	ρA8 cA8		
ρA9 cA9	 	ρA8 cA8		 σA8.I	 	0.033	 	MPa			 	Reflected stress wave, eighth layer in Rod A
σA8.T
2 ρA9	 	cA9	
ρA8 cA8	 	ρA9 cA9		 σA8.I	 	0.176 MPa			 	Transmitted stress wave, eighth layer in
Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress
wave, meaning that the eighth layer is in
balance
σA8.T 	σA8.R	 	0.209 MPa		
Incident particle velocity, eighth layer of
Rod A
UPI.A8
σA8.I
ρA8 cA8	 0.058 m
s
	

-- 225 of 245 --

UPR.A8
σA8.R	
ρA8 cA8	 9.169 	10 3	
 m
s
	 	Reflected particle velocity, eighth layer of
Rod A
UPT.A8
σA8.T
ρA9 cA9	 0.067 m
s
	 	Transmitted particle velocity, eighth layer
of Rod A
Transmitted particle velocity minus reflected
particle velocity equals to the incident
particle velocity, meaning that the eigth layer
is in balance
UPT.A8 	UPR.A8	 	0.058 m
s

Layer 9:
σA9.I 	σA8.T 	0.176 MPa			 	Incident stress wave
σA9.R
ρA10 cA10	 	ρA9 cA9		
ρA10 cA10	 	ρA9 cA9		 σA9.I	 	0.054	 	MPa				σA9.R
ρA10 cA10	 	ρA9 cA9		
ρA10 cA10	 	ρA9 cA9		 σA9.I	 	0.054	 	MPa			 	Reflected stress wave, ninth layer in Rod A
σA9.T
2 ρA10	 	cA10	
ρA9 cA9	 	ρA10 cA10		 σA9.I	 	0.122 MPa				σA9.T
2 ρA10	 	cA10	
ρA9 cA9	 	ρA10 cA10		 σA9.I	 	0.122 MPa			 	Transmitted stress wave, ninth layer in
Rod A
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the ninth layer is in balance
σA9.T 	σA9.R	 	0.176 MPa		
Incident particle velocity, ninth layer of
Rod A
UPI.A9
σA9.I
ρA9 cA9	 0.067 m
s
	
UPR.A9
σA9.R	
ρA9 cA9	 0.02 m
s
	 	Reflected particle velocity, ninth layer of Rod
A
UPT.A9
σA9.T
ρA10 cA10	 0.088 m
s
	 	Transmitted particle velocity, ninth layer of
Rod A

-- 226 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
UPT.A9 	UPR.A9	 	0.067 m
s

Layer 10:
σA10.I 	σA9.T 	0.122 MPa			 	Incident stress wave
σA10.R 	σA9.T 	0.122 MPa			 	Reflected stress wave, tenth layer in Rod A
No transmitted stress wave in tenth layer
σA10.I 	σA10.R	 	0.244 MPa		 	Balance in the layer
Incident particle velocity, tenth layer of
Rod A
UPI.A10
σA10.I
ρA10 cA10	 0.088 m
s
	
UPR.A10 	UPI.A10 	0.088 m
s
	 	Reflected particle velocity, tenth layer of Rod
A
No transmitted stress wave in tenth layer
UPR.A10 	UPI.A10	 	0 m
s
 	Balance in the layer

-- 227 of 245 --

Material parameters Rod B
Material parameters is calculated from Mathematica
Young's modulus: 	Density: 	Wave velocity:
EB1 	1.88395 10 11
 	Pa		 	ρB1 	8622.28 kg
m
3
	 	cB1
EB1
ρB1
4.674 	10 3
 m
s
	
EB2 	1.0937 10
11
 	Pa		 	ρB2 	7593.68 kg
m
3
	 	cB2
EB2
ρB2
3.795 	10 3
 m
s
	
EB3 	6.18479 10 10
 	Pa		 	ρB3 	6557.95 kg
m
3
	 	cB3
EB3
ρB3
3.071 	10 3
 m
s
	
EB4 	3.46046 10 10
 	Pa		 	ρB4 	5527.68 kg
m
3
	 cB4
EB4
ρB4
2.502 	10 3
 m
s
	
EB5 	1.97489 10 10
 	Pa		 	ρB5 	4528.65 kg
m
3
	 cB5
EB5
ρB5
2.088 	10 3
 m
s
	
EB6 	1.20464 10 10
 	Pa		 	ρB6 	3598.43 kg
m
3
	 cB6
EB6
ρB6
1.83 	10
3
 m
s
	
EB7 	8.24447 10 9
 	Pa		 	ρB7 	2766.75 kg
m
3
	 cB7
EB7
ρB7
1.726 	10 3
 m
s
	
EB8 	6.39751 10 9
 	Pa		 	ρB8 	2023.84 kg
m
3
	 cB8
EB8
ρB8
1.778 	10 3
 m
s
	
EB9 	5.19145 10 9
 	Pa		 	ρB9 	1317.78 kg
m
3
	 cB9
EB9
ρB9
1.985 	10 3
 m
s
	
EB10 	3.2688 10 9
 	Pa		 	ρB10 	593.479 kg
m
3
	 cB10
EB10
ρB10
2.347 	10 3
 m
s
	

-- 228 of 245 --

Stresses Rod B
Layer 1:
Intial stress wave of Rod A and B
σB1.I
F
A 0.775 MPa			
σB1.R
ρB2 cB2	 	ρB1 cB1		
ρB2 cB2	 	ρB1 cB1		 σI1	 	0.129	 	MPa			 	Reflected stress wave, first layer in Rod B
σB1.T
2 ρB2	 	cB2	
ρB1 cB1	 	ρB2 cB2		 σI1	 	0.646 MPa			 	Transmitted stress wave, first layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the first layer is in balance
σB1.T 	σA1.R	 	0.775 MPa		
Intial particle velocity, first layer of Rod B
UPI.B1
σB1.I
ρB1 cB1	 0.019 m
s
	
UPR.B1
σB1.R	
ρB1 cB1	 3.196 	10 3	
 m
s
	 	Reflected particle velocity, first layer of Rod B
UPT.B1
σB1.T
ρB2 cB2	 0.022 m
s
	 	Transmitted particle velocity, first layer of
Rod B
Transmitted particle velocity minus reflected
particle velocity equals to the initial particle
velocity, meaning that the first layer is in
balance
UPT.B1 	UPR.B1	 	0.019 m
s


-- 229 of 245 --

Layer 2:
σB2.I 	σB1.T 	0.646 MPa			 	Incident stress wave
σB2.R
ρB3 cB3	 	ρB2 cB2		
ρB3 cB3	 	ρB2 cB2		 σB2.I	 	0.115	 	MPa			 	Reflected stress wave, second layer in Rod B
σB2.T
2 ρB3	 	cB3	
ρB2 cB2	 	ρB3 cB3		 σB2.I	 	0.532 MPa			 	Transmitted stress wave, second layer in
Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the second layer is in balance
σB2.T 	σB2.R	 	0.646 MPa		
Incident particle velocity, second layer of
Rod B
UPI.B2
σB2.I
ρB2 cB2	 0.022 m
s
	
UPR.B2
σB2.R	
ρB2 cB2	 3.976 	10 3	
 m
s
	 	Reflected particle velocity, second layer
of Rod B
Transmitted particle velocity, second layer of
Rod B	UPT.B2
σB2.T
ρB3 cB3	 0.026 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the second layer is in
balance
UPT.B2 	UPR.B2	 	0.022 m
s

Layer 3:
σB3.I 	σB2.T 	0.532 MPa			 	Incident stress wave
σB3.R
ρB4 cB4	 	ρB3 cB3		
ρB4 cB4	 	ρB3 cB3		 σB3.I	 	0.099	 	MPa			 	Reflected stress wave, third layer in Rod B

-- 230 of 245 --

σB3.T
2 ρB4	 	cB4	
ρB3 cB3	 	ρB4 cB4		 σB3.I	 	0.433 MPa			 	Transmitted stress wave, third layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the third layer is in balance
σB3.T 	σB3.R	 	0.532 MPa		
Incident particle velocity, third layer of Rod B
UPI.B3
σB3.I
ρB3 cB3	 0.026 m
s
	
UPR.B3
σB3.R	
ρB3 cB3	 4.904 	10 3	
 m
s
	 	Reflected particle velocity, third layer of Rod B
Transmitted particle velocity, third layer of
Rod B	UPT.B3
σB3.T
ρB4 cB4	 0.031 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the third layer is in
balance
UPT.B3 	UPR.B3	 	0.026 m
s

Layer 4:
σB4.I 	σB3.T 	0.433 MPa			 	Incident stress wave
σB4.R
ρB5 cB5	 	ρB4 cB4		
ρB5 cB5	 	ρB4 cB4		 σB4.I	 	0.081	 	MPa			 	Reflected stress wave, fourth layer in Rod B
σB4.T
2 ρB5	 	cB5	
ρB4 cB4	 	ρB5 cB5		 σB4.I	 	0.352 MPa			 	Transmitted stress wave, fourth layer in Rod B
Transmitted stress wave minus reflected
stress wave equals to the intial stress wave,
meaning that the fourth layer is in balance
σB4.T 	σB4.R	 	0.433 MPa		
Incident particle velocity, fourth layer of Rod B
UPI.B4
σB4.I
ρB4 cB4	 0.031 m
s
	

-- 231 of 245 --

UPR.B4
σB4.R	
ρB4 cB4	 5.88 	10 3	
 m
s
	 	Reflected particle velocity, fourth layer of Rod B
Transmitted particle velocity, fourth layer of
Rod B	UPT.B4
σB4.T
ρB5 cB5	 0.037 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fourth layer is in
balance
UPT.B4 	UPR.B4	 	0.031 m
s

Layer 5:
σB5.I 	σB4.T 	0.352 MPa			 	Incident stress wave
σB5.R
ρB6 cB6	 	ρB5 cB5		
ρB6 cB6	 	ρB5 cB5		 σB5.I	 	0.063	 	MPa			 	Reflected stress wave, fifth layer in Rod B
σB5.T
2 ρB6	 	cB6	
ρB5 cB5	 	ρB6 cB6		 σB5.I	 	0.289 MPa			 	Transmitted stress wave, fifth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the fifth layer is in balance
σB5.T 	σB5.R	 	0.352 MPa		
Incident particle velocity, fifth layer of Rod B
UPI.B5
σB5.I
ρB5 cB5	 0.037 m
s
	
UPR.B5
σB5.R	
ρB5 cB5	 6.661 	10 3	
 m
s
	 	Reflected particle velocíty, fifth layer of Rod B
Transmitted particle velocity, fifth layer of
Rod B	UPT.B5
σB5.T
ρB6 cB6	 0.044 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the fifth layer is in
balance
UPT.B5 	UPR.B5	 	0.037 m
s


-- 232 of 245 --

Layer 6:
σB6.I 	σB5.T 	0.289 MPa			 	Incident stress wave
σB6.R
ρB7 cB7	 	ρB6 cB6		
ρB7 cB7	 	ρB6 cB6		 σB6.I	 	0.046	 	MPa			 	Reflected stress wave, sixth layer in Rod B
σB6.T
2 ρB7	 	cB7	
ρB6 cB6	 	ρB7 cB7		 σB6.I	 	0.243 MPa			 	Transmitted stress wave, sixth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the sixth layer is in balance
σB6.T 	σB6.R	 	0.289 MPa		
Incident particle velocity, sixth layer of Rod B
UPI.B6
σB6.I
ρB6 cB6	 0.044 m
s
	
UPR.B6
σB6.R	
ρB6 cB6	 6.979 	10 3	
 m
s
	 	Reflected particle velocity, sixth layer of Rod B
Transmitted particle velocity, sixth layer of
Rod B	UPT.B6
σB6.T
ρB7 cB7	 0.051 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the sixth layer is in
balance
UPT.B6 	UPR.B6	 	0.044 m
s

Layer 7:
σB7.I 	σB6.T 	0.243 MPa			 	Incident stress wave
σB7.R
ρB8 cB8	 	ρB7 cB7		
ρB8 cB8	 	ρB7 cB7		 σB7.I	 	0.034	 	MPa			 	Reflected stress wave, seventh layer in Rod B

-- 233 of 245 --

σB7.T
2 ρB8	 	cB8	
ρB7 cB7	 	ρB8 cB8		 σB7.I	 	0.209 MPa			 	Transmitted stress wave, seventh layer in
Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the seventh layer is in balance
σB7.T 	σB7.R	 	0.243 MPa		
Incident particle velocity, seventh layer of
Rod B
UPI.B7
σB7.I
ρB7 cB7	 0.051 m
s
	
UPR.B7
σB7.R	
ρB7 cB7	 7.149 	10 3	
 m
s
	 	Reflected particle velocity, seventh layer of
Rod B
Transmitted particle velocity, seventh layer of
Rod B	UPT.B7
σB7.T
ρB8 cB8	 0.058 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the seventh layer is in
balance
UPT.B7 	UPR.B7	 	0.051 m
s

Layer 8:
σB8.I 	σB7.T 	0.209 MPa			 	Incident stress wave
σB8.R
ρB9 cB9	 	ρB8 cB8		
ρB9 cB9	 	ρB8 cB8		 σB8.I	 	0.033	 	MPa			 	Reflected stress wave, eighth layer in Rod B
σB8.T
2 ρB9	 	cB9	
ρB8 cB8	 	ρB9 cB9		 σB8.I	 	0.176 MPa			 	Transmitted stress wave, eighth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the eighth layer is in balance
σB8.T 	σB8.R	 	0.209 MPa		

-- 234 of 245 --

Incident particle velocity, eighth layer of Rod B
UPI.B8
σB8.I
ρB8 cB8	 0.058 m
s
	
UPR.B8
σB8.R	
ρB8 cB8	 9.169 	10 3	
 m
s
	 	Reflected particle velocity, eighth layer of Rod B
Transmitted particle velocity, eighth layer of
Rod B	UPT.B8
σB8.T
ρB9 cB9	 0.067 m
s
	
Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the eighth layer is in
balance
UPT.B8 	UPR.B8	 	0.058 m
s

Layer 9:
σB9.I 	σB8.T 	0.176 MPa			 	Incident stress wave
σB9.R
ρB10 cB10	 	ρB9 cB9		
ρB10 cB10	 	ρB9 cB9		 σB9.I	 	0.054	 	MPa			 	Reflected stress wave, ninth layer in Rod B
σB9.T
2 ρB10	 	cB10	
ρB9 cB9	 	ρB10 cB10		 σB9.I	 	0.122 MPa			 	Transmitted stress wave, ninth layer in Rod B
Transmitted stress wave minus reflected stress
wave equals to the intial stress wave, meaning
that the ninth layer is in balance
σB9.T 	σB9.R	 	0.176 MPa		
Incident particle velocity, ninth layer of Rod B
UPI.B9
σB9.I
ρB9 cB9	 0.067 m
s
	
UPR.B9
σB9.R	
ρB9 cB9	 0.02 m
s
	 	Reflected particle velocity, ninth layer of Rod B
Transmitted particle velocity, ninth layer of
Rod B	UPT.B9
σB9.T
ρB10 cB10	 0.088 m
s
	

-- 235 of 245 --

Transmitted particle velocity minus reflected
particle velocity equals to the incident particle
velocity, meaning that the ninth layer is in
balance
UPT.B9 	UPR.B9	 	0.067 m
s

Layer 10:
σB10.I 	σB9.T 	0.122 MPa			 	Incident stress wave
σB10.R 	σB9.T 	0.122 MPa			 	Reflected stress wave, tenth layer in
Rod B
No transmitted stress wave in tenth layer
σB10.I 	σB10.R	 	0.244 MPa		 	Balance in the layer
Incident particle velocity, tenth layer of
Rod B
UPI.B10
σB10.I
ρB10 cB10	 0.088 m
s
	
UPR.B10 	UPI.B10 	0.088 m
s
	 	Reflected particle velocity, tenth layer of Rod B
No transmitted stress wave in tenth layer
UPR.B10 	UPI.B10	 	0 m
s
 	Balance in the layer

-- 236 of 245 --

F MATLAB code, Case study 5
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 F-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 F-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 F-1

-- 237 of 245 --



-- 238 of 245 --



-- 239 of 245 --



-- 240 of 245 --



-- 241 of 245 --



-- 242 of 245 --



-- 243 of 245 --

G List of materials
, Civil and Environmental Engineering, Master’s Thesis, 2015:73 G-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 G-1	, Civil and Environmental Engineering, Master’s Thesis, 2015:73 G-1

-- 244 of 245 --

Material Young's modulus [GPa] Density [kg/m^3]
Alumina 390 3900
Alumina alloy 70 2700
Bamboo 17 700
Beryllium alloy 245 2900
Brass 130 8400
Cermets 470 11500
CFRP (graphite) 1,5 1500
Concrete 48 2500
Copper alloy 135 8300
Cork 0,32 180
Epoxy thermoset 3,5 1200
GRFP (glass) 26 1800
Glass (soda) 65 2500
Granite 66 2600
Lead alloys 16 11100
Magnesium alloy 44 1800
Nickel alloy 180 8500
Nylon 2,9 1130
Neopren 0,01 1240
Polycarbonate 2,7 1200
Polyurethan elastomer 0,25 1200
Polypropylen 0,9 890
Polyester thermoset 3,5 1300
PVC 1,5 1400
Polyehtylene 0,7 0,95
Silicon 110 2300
Steel 210 7800
Titanium alloy 100 4500
Tungsten carbide 550 15500
Zink alloy 75 5500
Data taken from: http://ocw.mit.edu/courses/materials-science-and-engineering/3-
11-mechanics-of-materials-fall-1999/modules/props.pdf

-- 245 of 245 --