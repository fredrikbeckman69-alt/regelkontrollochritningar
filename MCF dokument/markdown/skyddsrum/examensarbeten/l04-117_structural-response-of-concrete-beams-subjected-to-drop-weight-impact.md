---
title: "L04 117 Structural Response Of Concrete Beams Subjected To Drop Weight Impact"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-117_structural-response-of-concrete-beams-subjected-to-drop-weight-impact.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","armering","beräkning","explosion","beam","this","load"]
summary: "Department of Architecture and Civil Engineering Division of Structural Engineering Concrete Structures CHALMERS UNIVERSITY OF TECHNOLOGY Gothenburg, Sweden 2018 Master’s Thesis ACX30-18-36 Structural Response of Concrete Beams Subjected to Drop W..."
---

Department of Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2018
Master’s Thesis ACX30-18-36
Structural Response of Concrete Beams
Subjected to Drop Weight Impact
A parametric study using numerical modelling
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
MICHAELA MUNTHER
JOSEFINE RUNEBRANT

-- 1 of 165 --



-- 2 of 165 --

MASTER’S THESIS ACX30-18-36
Structural Response of Concrete Beams Subjected to Drop
Weight Impact
A parametric study using numerical modelling
Master’s Thesis in the Master’s Programme Structural Engineering and Building Technology
MICHAELA MUNTHER
JOSEFINE RUNEBRANT
Department of Architecture and Civil Engineering
Division of Structural Engineering
Concrete structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg, Sweden 2018

-- 3 of 165 --

Structural Response of Concrete Beams Subjected to Drop Weight Impact
A parametric study using numerical modelling
Master’s Thesis in the Master’s Programme Structural Engineering and Building
Technology
MICHAELA MUNTHER
JOSEFINE RUNEBRANT
© MICHAELA MUNTHER & JOSEFINE RUNEBRANT, 2018
Examensarbete ACX30-18-36 / Institutionen för Arkitektur och
Samhällsbyggnadsteknik, Chalmers Tekniska Högskola 2018
Department of Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
SE-412 96 Göteborg
Sweden
Telephone: + 46 (0)31-772 1000
Cover:
Visualisation of the structural response at the time of maximum displacement of a
concrete beam subjected to drop weight impact from LS-DYNA
Department of Architecture and Civil Engineering
Göteborg, Sweden, 2018

-- 4 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	I
Structural Response of Concrete Beams Subjected to Drop Weight Impact
A parametric study using numerical modelling
Master’s Thesis in the Master Programme Structural Engineering and Building
Technology
MICHAELA MUNTHER
JOSEFINE RUNEBRANT
Department of Architecture and Civil Engineering
Division of Structural Engineering
Concrete Structures
Chalmers University of Technology
ABSTRACT
A structure subjected to an impact load will respond differently compared to when
subjected to static loading. Finite element modelling of dynamically loaded structures
has not been practiced to the same extent as of statically loaded ones, and
consequently the results are not as reliable. Modelling choices in nonlinear finite
element analyses of dynamically loaded structures are important to the resulting
response of the model. In this thesis different levels of numerical modelling are used
to describe the structural behaviour of reinforced concrete beams subjected to drop
weight impact.
An aim of this project was to develop an already existing 3D solid finite element (FE)
model in LS-DYNA. Another objective was to evaluate when simplified models, such
as a 2D FE model using beam elements in Abaqus and a two-degrees-of-freedom
(2DOF) system, are applicable. Another aim was to investigate the sensitivity of these
models as well as the 3D FE model through parametric studies.
Based on an existing 3D solid FE model, a more refined model was created by
comparing different modelling techniques regarding e.g. structural behaviour of the
reinforcement, and interaction between concrete and reinforcement. The 2DOF
model, the Abaqus model and the LS-DYNA model were validated by comparison to
test results. Using these validated models, parametric studies were performed varying
the dynamic load and the beam geometry as well as the amount of reinforcement.
The further development of the LS-DYNA model by including a bond-slip relation
and a non-linear structural behaviour of the reinforcement gave satisfying results. For
the 2DOF model used in this thesis it was found to be necessary that the model is
calibrated for each separate case and that the correspondence with the Abaqus model
was less accurate when the mass of the drop weight was small in relation to the beam.
This indicated that the time dependency of the response of the beam is captured in the
Abaqus model, but not in the 2DOF model. To conclude, it is believed that time
dependent transformation factors in the 2DOF model would make it possible to
capture a behaviour like that in Abaqus and achieve a model that is applicable in all
load cases.
Key words: Reinforced concrete beam, impact load, numerical modelling,
FE modelling, bond-slip, LS-DYNA, CDPM2, Abaqus, 2DOF model

-- 5 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	II
Strukturell respons hos betongbalkar utsatta för fallviktsbelastning
En parameterstudie utförd genom numerisk modellering
Examensarbete inom mastersprogrammet Konstruktionsteknik och Byggnadsteknologi
MICHAELA MUNTHER
JOSEFINE RUNEBRANT
Institutionen för Arkitektur och Samhällsbyggnadsteknik
Avdelningen för Konstruktionsteknik
Betongbyggnad
Chalmers Tekniska Högskola
SAMMANFATTNING
En konstruktion utsatt för stötbelastning reagerar annorlunda jämfört med en statiskt
belastad. Finita elementmodellering av dynamiskt belastade konstruktioner har inte
studerats i samma utsträckning som statiskt belastade och följaktligen är resultaten
inte lika tillförlitliga. Modelleringsval i ickelinjär finit elementanalys av dynamiskt
belastade konstruktioner är avgörande för den resulterande responsen hos modellen. I
detta arbete används olika nivåer av numerisk modellering för att beskriva
strukturresponsen hos en betongbalk utsatt för en fallviktsbelastning.
Ett syfte med detta projekt var att utveckla en befintlig finita elementmodell med 3D
solida element i LS-DYNA. En annan avsikt var att utvärdera när förenklade modeller
som en finita elementmodell med 2D balkelement i Abaqus och ett
tvåfrihetsgraderssystem (2DOF) är tillämpbara. Ett annat syfte var att undersöka
känsligheten hos dessa modeller och LS-DYNA-modellen genom en parameterstudie.
Baserat på den befintliga 3D solida finita elementmodellen skapades en förfinad
modell genom att jämföra olika modelleringsval så som strukturresponsen hos
armeringen och interaktionen mellan betong och armering. 2DOF-modellen,
Abaqus-modellen och LS-DYNA-modellen validerades genom att jämföra dem med
testresultat. Vidare genomfördes en parametersstudie med dessa tre validerade
modeller då den dynamiska lasten samt balkens geometri och armeringsmängd
varierades.
Utvecklingen av LS-DYNA-modellen, då vidhäftning-glidningssambandet mellan
betong och armering samt en ickelinjär strukturrespons hos armeringen inkluderades,
gav tillfredställande resultat. För 2DOF-modellen upptäcktes det nödvändigt att
kalibrera modellen för varje separat fall och att överensstämmelsen med
Abaqus-modellen var sämre när fallviktens massa var liten i förhållande till balkens.
Detta indikerade att tidsberoendet hos balkens respons fångas i Abaqus-modellen men
inte i 2DOF-modellen. En slutsats är att tidsberoende transformationsfaktorer i
2DOF-modellen förmodligen skulle göra det möjligt att fånga detta beteende och få
en modell som kan användas för alla lastfall.
Nyckelord: Armerad betongbalk, stötbelastning, numerisk modellering,
FE-modellering, vidhäftning-glidningssamband, LS-DYNA, CDPM2,
Abaqus, 2DOF-modell

-- 6 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	III
Contents
ABSTRACT 	I
SAMMANFATTNING 	II
CONTENTS 	III
PREFACE 	VII
NOTATIONS 	IX
1 INTRODUCTION 	1
1.1 	Background 	1
1.2 	Aim 	1
1.3 	Method 	2
1.4 	Limitations 	2
1.5 	Thesis outline 	3
2 MATERIAL AND STRUCTURAL RESPONSE 	4
2.1 	Introduction 	4
2.2 	Concrete 	4
2.2.1 	Structural response 	4
2.2.2 	Fracture energy 	4
2.3 	Reinforcing steel 	5
2.4 	Reinforced concrete 	6
2.5 	Strain rate effects 	7
2.6 	Simplified models of structural response 	9
2.6.1 	Linear elastic behaviour 	9
2.6.2 	Ideally plastic behaviour 	9
2.6.3 	Elasto-plastic behaviour 	10
3 BASICS OF STRUCTURAL DYNAMICS 	11
3.1 	Introduction 	11
3.2 	Energy, momentum, impulse, and work 	11
3.3 	Dynamic load cases 	13
3.4 	Elastic response of an impact 	14
3.5 	Plastic response of an impact 	15
4 DISCRETE SYSTEMS 	16
4.1 	Introduction 	16

-- 7 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	IV
4.2 	SDOF system 	16
4.2.1 	Equation of motion for SDOF system 	16
4.2.2 	Response of a SDOF system subjected to an impulse 	16
4.2.3 	Equivalent static load 	18
4.2.4 	The influence of the shape of the impulse 	19
4.3 	2DOF system 	20
4.3.1 	Equation of motion for the 2DOF system 	20
4.3.2 	Influence of the response of body 1 	22
4.4 	Transformation into discrete systems 	25
4.4.1 	Beam into SDOF system 	25
4.4.2 	Drop weight into SDOF system 	26
4.4.3 	Equivalent 2DOF system 	27
5 SIMPLIFIED ANALYSES 	29
5.1 	Introduction 	29
5.2 	2DOF model 	29
5.2.1 	Modelling choices for the beam 	29
5.2.2 	Modeling choices for the drop weight and the interaction
between the drop weight and the beam 	30
5.2.3 	Transformation factors for the system 	31
5.2.4 	Central difference method 	32
5.3 	Model in Abaqus using 2D beam elements 	34
5.3.1 	Modelling of the system 	34
5.3.2 	Elements 	36
5.3.3 	Boundary conditions 	37
5.3.4 	Solution method 	37
5.3.5 	Modelling of the materials 	38
5.3.6 	Integration points 	39
6 LS-DYNA MODELLING USING 3D SOLID ELEMENTS 	41
6.1 	Introduction 	41
6.2 	Modelling of the system 	41
6.3 	Elements 	42
6.4 	Solution method 	43
6.5 	Material models 	44
6.5.1 	Concrete 	44

-- 8 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	V
6.5.2 	Reinforcement 	46
6.5.3 	Supports and drop weight 	48
6.6 	Interaction between reinforcement and concrete 	49
7 VALIDATION AND IMPROVEMENTS OF MODELS 	51
7.1 	Introduction 	51
7.2 	Reference experimental procedure and material properties 	51
7.3 	Comparison of modelling techniques in simplified models 	55
7.3.1 	Resistance limit for the interaction in the 2DOF model 	55
7.3.2 	Implicit or explicit solution method in Abaqus 	56
7.3.3 	Structural behaviour of the spring in the Abaqus model 	57
7.4 	Validation of simplified models 	58
7.5 	Comparison of different modelling choices in LS-DYNA 	61
7.5.1 	Element type for the reinforcement 	61
7.5.2 	Interaction between concrete and reinforcement 	63
7.5.3 	Damage formulation for the concrete 	66
7.5.4 	Modelling of stress-strain relation for the reinforcement 	68
7.6 	Validation of the final LS-DYNA model 	70
7.7 	Summary of results from the final models 	72
8 ADAPTION TO NEW TEST SERIES AND PARAMETRIC STUDY 	73
8.1 	Introduction 	73
8.2 	Adaption of models to new test results and future studies 	73
8.3 	Parametric studies in 2DOF and Abaqus 	75
8.3.1 	Studied cases 	75
8.3.2 	Complete results for one selected beam 	76
8.3.3 	Overall comparison of 2DOF and hand calculations 	78
8.3.4 	Overall comparison of 2DOF and Abaqus 	82
8.4 	Parametric studies in LS-DYNA 	84
8.5 	Comparison between models 	89
9 FINAL REMARKS 	92
9.1 	Conclusions 	92
9.2 	Future studies 	92
10 REFERENCES 	94

-- 9 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	VI
APPENDIX A MATERIAL INPUT DATA 	A-1
A.1 Input data to the 2DOF model for validation 	A-1
A.2 Input data in Abaqus for validation 	A-2
A.3 Input data in LS-DYNA for validation 	A-3
A.4 Input data to the 2DOF model 2018 	A-5
A.5 Input data in Abaqus 2018 	A-6
A.6 Input data in LS-DYNA 2018 	A-6
APPENDIX B MATLAB SCRIPT FOR THE 2DOF MODEL 	B-1
APPENDIX C MATHCAD CALCULATIONS 	C-1
APPENDIX D EVALUATION OF CONTACT THEORY 	D-1
APPENDIX E COMPRESSIVE DAMAGE IN LS-DYNA 	E-1
APPENDIX F RESULTS FROM PARAMETRIC STUDY IN 2DOF
AND ABAQUS 	F-1
F.1 Input values for the parametric study 	F-1
F.2 Time-displacement curves from 2DOF and Abaqus 	F-2
F.3 Displacement and energy ratios 	F-11
APPENDIX G RESULTS FROM PARAMETRIC STUDY IN LS-DYNA 	G-1
G.1 Time-displacement curves from LS-DYNA 	G-1
G.2 Crack patterns from LS-DYNA 	G-3
APPENDIX H ABAQUS SCRIPT FILE 	H-1
APPENDIX I 	LS-DYNA SCRIPT FILE 	I-1

-- 10 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	VII
Preface
In this project different levels of numerical modelling of reinforced concrete beams
subjected to drop weight impact have been studied. This project is a continuation of
previous master theses, within a research project financed by the Swedish Civil
Contingencies Agency, at the division of Structural Engineering, Chalmers. It is
carried out as a co-operation between Norconsult and Chalmers during a period from
January to June 2018.
We would like to start to thank our supervisor Morgan Johansson for his devoted and
thorough guidance through the entire project and sharing of his expertise on the
subject. We would also like to thank our examiner Joosef Leppänen for his thorough
and considerate support with anything from practicalities to theoretical advice.
Additionally, thanks to Fabio Lozano, who has shared his knowledge about Finite
Element Modelling and helped us forward in our work.
We would also like to thank Norconsult and the team Bro och Analys for the pleasant
time spent together during the spring.
Finally, we are proud of what we have accomplished together, with good cooperation
and many laughter, during this final semester of our education.
Gothenburg, June 2018
Michaela Munther and Josefine Runebrant

-- 11 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	VIII

-- 12 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	IX
Notations
Abbreviations
2DOF 	Two Degrees of Freedom
CDM 	Central Difference Method
CDPM2 Concrete Damage Plasticity Model 2
DIF 	Dynamic Increase Factor
FE 	Finite Element
SDOF 	Single Degree of Freedom
Greek lower-case letters
𝛾ூ 	Reduction factor
𝛿 	Deformation of impact zone
𝜀 	Strain
𝜂௨ 	Quota of displacements
𝜂௪೤ 	Quota of transferred energy
𝜅ி 	Transformation factor for the force
𝜅௞ 	Transformation factor for the stiffness
𝜅௠ 	Transformation factor for the mass
𝜅௠ி 	Transformation factor on the ratio between the mass and force
𝜌 	Density
𝜎 	Stress
𝜏௕ 	Bond stress
𝜙 	Diameter of reinforcement
𝜔 	Angular eigenfrequency
𝜔௠௔௫ 	Highest angular eigenfrequency
Roman upper-case letters
𝐸 	Young’s modulus
𝐸௘௤ 	Equivalent young’s modulus
𝐸௞ 	Kinetic energy
𝐹 	Force
𝐹௞ 	Characteristic pressure load
𝐼 	Impulse

-- 13 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	X
𝐼଴ 	Impulse equal to the momentum of body 1 immediately before impact
𝐼ூ 	Moment of inertia, state I
𝐼ூூ 	Moment of inertia, state II
𝐼௞ 	Characteristic impulse
𝐿 	Length
𝑀ோௗ 	Moment capacity
𝑄 	Equivalent static load
𝑅 	Resistance of structure
𝑅௠ 	Resistance limit
𝑊௘ 	External work on a system
𝑊௜ 	Internal work in a system
𝑊௘௟ 	Section modulus for elastic response
𝑊௣௟ 	Section modulus for plastic response
Roman lower-case letters
𝑎 	Timestep scaling factor in LS-DYNA
𝑐 	Wave propagation speed, cover thickness
𝑏 	Width
𝑓௖ 	Concrete compressive strength
𝑓௧ 	Concrete tensile strength
𝑓௨ 	Ultimate strength of reinforcement
𝑓௬ 	Yield strength
𝑔௕ 	Self-weight of beam
ℎ 	Height
𝑘 	Stiffness of a structure
𝑘௦ 	Secant stiffness of a structure
𝑙௘௟ 	Element length
𝑚 	Mass
𝑝 	Momentum
𝑠 	Relative displacement (slip)
𝑡 	Time
𝑡ଵ 	Load duration
𝑢 	Displacement
𝑢̇ 	Velocity

-- 14 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	XI
𝑢̈ 	Acceleration
𝑢௘௟ 	Reversible displacement of a structure
𝑢௘௟ି ௣௟.௘௟ Reversible displacement of a structure with elasto-plastic response
𝑢௘௟ି ௣௟.௣௟ Irreversible displacement of a structure with elasto-plastic response
𝑢௣௟ 	Irreversible displacement of a structure
𝑢௥௘௙ 	Displacement of reference point
𝑢௧௢௧ 	Total displacement of a structure
𝑣 	Velocity
𝑤 	Crack width
𝑤௙ 	Ultimate crack width

-- 15 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	XII

-- 16 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	1
1 Introduction
1.1 Background
Protective structures need to have the ability to withstand impulse loading like explosions and
collisions. A suitable material for this kind of structures is reinforced concrete. However, it is
of importance to have the knowledge about failure modes that may occur in concrete
structures subjected to dynamic loads since they can be different from failure modes
occurring in statically loaded structures.
Excessive finite element modelling has been performed on statically loaded structures and
can be considered to give rather accurate results. Finite element modelling of dynamically
loaded structures has not been practiced to the same extent, and consequently the results are
not as reliable. The modelling choices in nonlinear finite element analyses of dynamically
loaded structures have shown to be of high importance to the resulting response of the model.
Consequently, parametric studies can improve the accuracy of future analyses.
There is an ongoing research project, financed by the Swedish Civil Contingencies Agency,
at the division of Structural Engineering, Chalmers, of which this master’s thesis was a part.
Previous work within this part of the research project are the PhD project Ekstöm (2017) and
the master thesis projects Lovén and Svavarsdóttir (2016) and Lozano and Makdesi (2017).
This thesis was carried out as a co-operation between Norconsult and Chalmers.
1.2 Aim
The aim of this project was to increase the understanding of how dynamic loading affects the
structural behaviour of reinforced concrete beams by using finite element (FE) analyses in 2D
and 3D as well as analyses using two-degrees-of-freedom (2DOF) models.
A specific question that was investigated in this thesis was how impact loaded structures can
be modelled efficiently using the simplified methods of 2DOF systems and 2D FE models
with beam elements. To further develop already existing 3D solid FE models in LS-DYNA
used in previous work was another purpose of the project. Furthermore, one objective was to
increase the understanding of how the structural response of the models is affected by the
modelling choices by conducting parametric studies varying different parameters in the
models.
The thesis project was as a part of an ongoing research project a continuation of previous
MSc theses as well as a preparation for future master’s thesis projects.

-- 17 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	2
1.3 Method
In this project, a simply supported beam subjected to an impact load represented by a drop-
weight was studied and is demonstrated in Figure 1.1.
Figure 1.1 	The structure studied in this project.
The first part of the project consisted of a literature review covering the basics of structural
dynamics. The simplified methods using single-degree-of-freedom (SDOF) and 2DOF
systems were investigated to understand how and when they can be used. Furthermore,
previous MSc thesis projects regarding concrete structures subjected to impact loading were
studied.
A 2DOF system was adopted to analyse the structural response of the beam in a simplified
way. This was done using a numerical explicit time stepping method, Central Difference
Method (CDM). FE analyses in 2D were performed using plastic beam elements in Abaqus.
Finite element analyses using 3D solid elements in LS-DYNA were carried out. Based on
existing models, a more refined model was created by comparing different modelling
techniques regarding e.g. choice of material parameters, structural behaviour of the
reinforcement, and interaction between concrete and reinforcement.
The 2DOF model, the Abaqus model and the LS-DYNA model were validated by
comparison to tests carried out previously within the research project. In the analyses using
these models, parametric studies were performed. In the simplified models, parameters
related to the mass of the drop weight, the drop height of the weight, the beam geometry, and
the reinforcement amount were varied. Due to the more extensive computational time in the
LS-DYNA model, the parametric study in 3D was limited to the parameters regarding the
drop weight and the reinforcement amount.
1.4 Limitations
In this project, the studied beam is simply supported and made of reinforced normal concrete.
No experiments were conducted in this project, but results from the analyses were compared
with tests in previous master's thesis within the research project.
The elements which were used in the 3D analyses of this project were tetrahedral and the
only material model for concrete that was used is Concrete Damage Plasticity Model 2
(CDPM2) which is developed by Peter Grassl et al. (2013) in a project with Chalmers.
No damping factors were included in the FE-analyses or in the simplified analyses since it
was deemed they would have a negligible effect in the case of short load duration.

-- 18 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	3
1.5 Thesis outline
In this thesis chapter 2-4 presents the theory which this project is built on. The following two
chapters, 5-6, describes the method and how the modelling of the different models are done.
In chapter 7-8 the results are presented and discussed. Lastly, the conclusion and references
are covered in chapter 9-10.
Chapter 2: 	The structural behaviour of the relevant materials as well as their simplified
response used in mathematical models are treated in this chapter. Furthermore,
some basic theory behind effects of fast loading is introduced.
Chapter 3: 	To analyse impulse loaded structures, it is important to have the knowledge
about the fundamentals in dynamics, which is briefly treated in this chapter.
Chapter 4: 	In this chapter a simplified way to describe an impulse loaded beam using an
equivalent 2DOF system is introduced.
Chapter 5: 	In this project, two simplified methods are used to predict the behaviour of a
simply supported reinforced concrete beam subjected to impact loading: the
2DOF system and 2D FE model using beam elements in Abaqus. These two
methods are presented in this chapter.
Chapter 6: 	The theory behind the more detailed 3D FE model using solid elements in LS-
DYNA are described in this chapter.
Chapter 7: 	The modelling choices in the simplified as well as the more advanced methods
are evaluated and improved in this chapter, and then the final models are
validated.
Chapter 8: 	Parametric studies are presented in this chapter performed in all three models.
Chapter 9: 	In this chapter the conclusion of this thesis is presented as well as suggestions
for future studies.
Chapter 10: The references used in this thesis are presented in this chapter.

-- 19 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	4
2 Material and Structural Response
2.1 Introduction
To understand the limitations of models used in calculations, it is of importance to understand
the actual structural behaviour of the studied structure. The relevant materials in this project
are concrete, reinforcing steel and the composite material reinforced concrete; these will be
briefly treated in the following sections. Furthermore, the response of these materials is
influenced when a load is applied fast, as in this project. Some basic theory behind this effect
will be introduced. In the mathematical models used, the response of the material is often
simplified into elastic, plastic, or elasto-plastic response, which are also covered in this
chapter.
2.2 Concrete
2.2.1 Structural response
High compressive strength is characteristic for plain concrete. However, the tensile strength
is much lower. Both the tensile and compressive stress-strain relations are non-linear which
can be seen in Figure 2.1.
Figure 2.1 	Schematic illustration of the stress-strain relationship for concrete subjected
to uniaxial loading, from Lovén and Svavarsdóttir (2016).
2.2.2 Fracture energy
To describe the post-peak behaviour of concrete in tension, fracture mechanics can be used.
As described by Plos (2000), the fracture energy, 𝐺ி, is a material parameter that describes
how much energy that is consumed or dissipates when a crack develops fully through a
specimen. The use of fracture energy as a parameter is convenient for transferring
experimental data to input parameters in e.g. a finite element model. The stress-displacement
graph from a test can be divided into an elastic stress-strain relation together with a stress-
crack opening curve, see Figure 2.2. The area under the stress-crack opening curve defines
the fracture energy.

-- 20 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	5
L
c
L 	cwc
c
c 	cwc
c	
c 
c 	w
wu
GF
c = f(w)
Figure 2.2 	Schematic picture of how the pre- and post-peak behaviour of concrete is
described, from Johansson (2000).
This partition is done since the crack will localize into a fracture zone whose size is
independent of specimen size. If the stress-displacement graph was to be transferred into a
stress-strain relation only, it would give different curves for different specimen sizes and
thereby not be able to represent the material itself.
2.3 Reinforcing steel
Reinforcing steel has different structural behaviour depending on if the steel is cold worked
or hot rolled, this is described by e.g. Engström (2015). If the steel is hot rolled it
demonstrates a more ductile response with a characteristic yield behaviour and large strain
hardening effect, see Figure 2.3(a). The cold worked steel does not have the same yield
behaviour as the hot rolled, this is demonstrated in Figure 2.3(b). Instead, the 0.2 %
proof-stress is used here to represent the yield strength. This stress is defined as the stress of
which the plastic strain after unloading is 0.2 %. The strain hardening effects of cold worked
steel is normally significantly smaller than for hot rolled.
σs 	σs
fu
fy
εsu
εs 	εs
fu
f0.2
0.2 % 	εsu
(a) 	(b)
Figure 2.3 	Structural behaviour of reinforcing steel, a) hot rolled and b) cold worked.

-- 21 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	6
2.4 Reinforced concrete
Reinforced concrete is a composite material where the high compressive strength of concrete
and the high tensile strength of reinforcing steel are united. The structural behaviour of
reinforced concrete is described by Engström (2015) and is schematically shown in
Figure 2.4. The response can be divided into four stages; uncracked, cracked, yielding of the
reinforcement and failure.
u
q
Ductile
response
Brittle
response
u
q
Cracking
starts
Fully cracked,
yielding starts
Failure
Figure 2.4 	The structural behaviour of reinforced concrete, modified from
Johansson (2012).
In the uncracked stage the reinforcement has small influence and the flexural rigidity is
mostly governed by the concrete. The response is relatively stiff and linear in this stage. This
is referred to as state I.
When the tensile strength of the concrete is reached in a section, a crack is formed. In the
early stages of cracking the concrete between the cracks has a large contribution to the
stiffness, this is called tension stiffening. When the cracks propagate in the structure the
stiffness decreases until the structure can be regarded as fully cracked and the stiffness is to a
high degree governed by the reinforcement. The stiffness of the fully cracked section is
referred to as state II stiffness.
In the third stage the reinforcement will start to yield and the response of the structure
changes drastically. The strain hardening of the steel allows the load on the structure to be
increased beyond the yield strength of the steel.
The failure of the structure can be brittle or ductile depending on the properties of the section,
e.g. the amount and the ductility properties of the reinforcement. A formation of a plastic
hinge will develop if the response of the reinforcement is ductile and a suitable reinforcement
configuration, with regard to cross-section and concrete strength, is present.

-- 22 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	7
2.5 Strain rate effects
The rate of which a strain is applied to a structure affects the response of the materials, this is
described by e.g. Johansson (2000). When a strain is applied fast, materials tend to be stiffer
and stronger. According to Johansson, the strain rate effect on concrete can be explained by
viscous and structural effects, see Figure 2.5.
10-5 	10-4 	10-3 	10-2 	10-1 	100 	101 	102 	103
Strain rate [s-1]
1.0
0.5
1.5
2.0
2.5
3.0
3.5
4.0
Fdyn 	/ 	Fsta
30
structural effects:
- inertia forces
- confinement
transition
zone
viscous effects
Figure 2.5 	Strain rates for which viscous and structural effects are influencing concrete
in compression, modified from Johansson (2000).
The viscous effects have an impact on the formation of cracks in the material. During static
loading, the crack propagates through the material slower and has time to find the weaker
path. At high strain rates on the other hand, the crack propagates without having time to make
use of the same weaknesses within the material. This gives rise to a stiffer and stronger
response.
At higher strain rates, the structural effects are influencing the strength. This is mainly due to
inertia forces that develops at the tip of the crack. When concrete is subjected to compression,
faster than it responds, a confinement effect will arise. This leads to a stress state close to
plain strain which increases the strength of the concrete.
The strain rate effects are usually treated by the Dynamic Increase Factor (DIF) which is
calculated as the ratio between the dynamic and static strength:
𝐷𝐼𝐹 = 𝐹ௗ௬௡
𝐹௦௧௔
(2.1)

-- 23 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	8
The DIF for concrete in tension according to different theories can be seen in Figure 2.6.
0
1
2
3
4
10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
Strain rate [s-1]
Fdyn / Fsta
Theory 1, fc=30 MPa
Theory 1, fc = 60 MPa
Theory 3, fc = 28 MPa
Theory 2, fc = 30 MPa
Theory 2, fc = 60 MPa
Figure 2.6 	DIF for concrete in tension from different theories with regard to the strain
rate, modified from Johansson (2000).
Regarding the reinforcement, strain rate effects lead to increased yield and ultimate strength.
The Young’s modulus however, is not affected. The DIF for reinforcement according to
different theories is shown in Figure 2.7.
1.0
0.9
1.1
1.2
1.3
1.4
1.5
10-4 	10-3 	10-2 	10-1 	100 	101 	102
Strain rate [s-1]
Fdyn / Fsta
fsy – Theory 1
fsu - Theory 1
fsy - Theory 2
fsu - Theory 2
Figure 2.7 	DIF for reinforcement from different theories with regard to strain rate,
modified from Johansson (2000).

-- 24 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	9
In this project, an impact load which results in a strain rate of approximately 100 - 101 s-1 will
be analysed. This can be placed in relation to a static load where the strain rate is in a range
around 10-5 and a blast between 102 - 103, see Figure 2.8.
10-8 10-7 10-6 10-5 10-4 10-3 10-2 10-1 100 101 102 103
creep 	static 	earthquake 	hard impact blast
strain rate [s-1]
Figure 2.8 	Strain rates for different kind of loading, from Johansson (2000).
2.6 Simplified models of structural response
2.6.1 Linear elastic behaviour
Deformations of a structure with elastic response are reversible and the stiffness, 𝑘, of the
structure is constant. The resistance, 𝑅, varies linearly with the displacement, 𝑢. The relation
can be described by:
𝑅(𝑢) = 𝑘 ∙ 𝑢 	(2.2)
The elastic structural response is illustrated in Figure 2.9.
k
1
R
u
Figure 2.9 	Linear elastic structural behaviour.
2.6.2 Ideally plastic behaviour
The resistance in an ideally plastic case is equal to the applied load, 𝐹, until the capacity of
the structure is reached. Until this point no deformation is developed. When the capacity is
reached, the resistance is constant and the displacement, 𝑢, is irreversible and infinite.
The resistance of the material can be given as:
𝑅(𝑢) = ൜ 𝐹 	𝑢 = 0
𝑅௠ 	𝑢 > 0 (2.3)

-- 25 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	10
The relation between the resistance and the displacement is shown in Figure 2.10.
Rm
R
u
Figure 2.10 Ideally plastic structural behaviour.
2.6.3 Elasto-plastic behaviour
In the elasto-plastic case, the response is a combination between the linear elastic and the
ideally plastic case. The resistance develops linearly until an upper limit and then remains
constant. If the resistance limit is reached, there will be an irreversible plastic displacement,
𝑢௘௟ି௣௟ .௣௟.
𝑅(𝑢) = ൜ 𝑘 ∙ 𝑢 	𝑢 < 𝑢௘௟ି ௣௟.௘௟
𝑅௠ 	𝑢 ≥ 𝑢௘௟ି ௣௟.௘௟
(2.4)
The total displacement will be:
𝑢௧௢௧ = 𝑢௘௟ି ௣௟.௘௟ + 𝑢௘௟ି ௣௟.௣௟ 	(2.5)
In Figure 2.11, the response of an elasto-plastic structure is illustrated. As shown in the
figure, the unloading of an elasto-plastic structure is similar to that of an elastic one.
uel-pl.pl
utot
1 u
uel-pl.el
Rm
R
k
Figure 2.11 Elasto-plastic structural response.

-- 26 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	11
3 Basics of Structural Dynamics
3.1 Introduction
To analyse impulse loaded structures, it is important to have the knowledge about the
fundamentals in dynamics. This starts with basic concepts as energy and work, that are
briefly treated in this chapter. Furthermore, these concepts help to understand the interaction
between two bodies and the characteristics of an impact, which are covered in this chapter as
well. This chapter is based on the theory described by Johansson and Laine (2012).
3.2 Energy, momentum, impulse, and work
The kinetic energy, 𝐸௞, for a body with mass 𝑚 and velocity 𝑣, is defined as:
𝐸௞ = 𝑚𝑣ଶ
2 (3.1)
The momentum, 𝑝, of the body is defined as:
When an external force, 𝐹(𝑡), acts on a body from time 𝑡 = 0 to 𝑡 = 𝑡ଵ , there will be a
change in momentum, defined as an impulse, 𝐼.
If the body is initially at rest (𝑣଴ = 0) this can be written as:
Using equations (3.1) and (3.4), the change in kinetic energy can be expressed as:
When the force acts on the body, it gives rise to a change in velocity and consequently a
change in kinetic energy. This change is equal to the external work that the force has
performed on the body. In this case, where the body is initially at rest, the external work on
the body can be expressed as in equation (3.6).
𝑝 = 𝑚𝑣 	(3.2)
𝐼 = 𝑝 − 𝑝଴ = 𝑚 𝑣 − 𝑚𝑣଴ = න 𝐹(𝑡)𝑑𝑡
௧భ
଴
(3.3)
𝐼 = 𝑚𝑣 	(3.4)
𝐸௞ = 𝐼ଶ
2𝑚 (3.5)
𝑊௘ = 𝑚𝑣ଶ
2 = 𝐸௞ 	(3.6)

-- 27 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	12
When the external force causes a displacement, 𝑢, the work can also be calculated using the
component of the force acting in the direction of the displacement, see equation (3.7). The
work is calculated assuming a displacement along the x-axis and the integral describes the
area under the force-displacement curve.
The body subjected to an external work will respond with an internal work, 𝑊௜ . The
maximum displacement is reached when the internal work is of equal magnitude as the
external work.
This can be visualized using the areas under the force-displacement curve for the external
work and resistance-displacement curve for the internal work. The structural response, as
described in Section 2.6, is simplified to elastic, plastic or elastoplastic and the graph of the
internal work is described accordingly. Equilibrium is reached when the areas are of equal
size and then the final displacement is reached. In Figure 3.1, the equilibrium for an elastic,
plastic and elasto-plastic structure, respectively, are shown.
uel
Wi,el
We
R,F
u
upl
Rm
Wi,pl
We
R,F
u
Rm
Wi,el-pl
We
R,F
u
(a) 	(b) 	(c)
uel-pl.pl
uel-pl.el 	utot
Figure 3.1 	Equilibrium between external and internal work for: a) elastic, b) plastic, and
c) elasto-plastic response.
𝑊௘ = න 𝐹(𝑥)𝑑𝑥
௨
଴
(3.7)
𝑊௜ = 𝑊௘ 	(3.8)

-- 28 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	13
3.3 Dynamic load cases
There are two ideal cases of dynamic loading: characteristic impulse and characteristic
pressure load, see Figure 3.2. In both cases, the maximum force is reached instantaneously.
The characteristic impulse has an infinitely high pressure and an infinitely short duration, but
an impulse content of 𝐼௞ . On the contrary, a characteristic pressure load defined by the
characteristic pressure 𝐹௞, has an infinite duration, see Figure 3.2. In reality, the loading will
be somewhere in between these two cases.
(a) 	(b)
Figure 3.2 	The two ideal cases of dynamic loading, (a) characteristic impulse and (b)
characteristic pressure load.
In this project, the impact will be assumed to be an impulse. The reason is that the main part
of the load will be transferred during a short time in relation to the time it takes for the whole
structure to respond. The impulse load in this project is an impact, which by definition is a
high-velocity collision. Based on Chen and May (2009), and experience within the research
project, e.g. Jönsson and Stenseke (2018), the load in this project is expected to have the
shape illustrated in Figure 3.3.
t
F
Figure 3.3 	Simplification of the expected shape of the dynamic load in this project.
t
F
Ik
t
F
Fk

-- 29 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	14
An illustration of an impact between the two arbitrary bodies: body 1, with mass 𝑚ଵ and
body 2, with mass, 𝑚ଶ , can be seen in Figure 3.4. Body 1 has an initial velocity before
impact, while body 2 is at rest.
Before impact
After impact
Figure 3.4 	Impact between two arbitrary bodies.
If body 1 has velocity 𝑣଴ and body 2 is at rest, the kinetic energy before impact can be written
as:
𝐸௞,଴ = 𝑚ଵ𝑣଴
ଶ
2 (3.9)
The momentum of the system before impact is:
𝑝଴ = 𝑚ଵ 𝑣଴ = 𝐼଴ 	(3.10)
The impact can be elastic or plastic and the momentum is conserved in the system regardless
of which. If it is elastic, the kinetic energy is preserved as well. In the plastic case, a plastic
work is performed, transforming a part of the kinetic energy into potential energy in body 1
and/or in the contact surface between the two bodies.
3.4 Elastic response of an impact
After an impact, where the response of body 1 is elastic, the velocity of the two bodies can be
derived from the conservation of momentum and kinetic energy. The velocity for body 1 after
impact will then be:
𝑣ଵ = 𝑚ଵ − 𝑚ଶ
𝑚ଵ + 𝑚ଶ
𝑣଴ 	(3.11)
and the velocity for body 2 will be:
𝑣ଶ = 2𝑚ଵ
𝑚ଵ + 𝑚ଶ
𝑣଴ 	(3.12)

-- 30 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	15
The kinetic energy for the two bodies is then:
𝐸௞,ଵ = ൬𝑚ଵ − 𝑚ଶ
𝑚ଵ + 𝑚ଶ
൰
ଶ
𝐸௞,଴ 	(3.13)
𝐸௞,ଶ = 4𝑚ଵ𝑚ଶ
(𝑚ଵ + 𝑚ଶ)ଶ 𝐸௞,଴ 	(3.14)
3.5 Plastic response of an impact
After a plastic impact, the two bodies move with the same velocity. With regard to the
conservation of momentum, the velocity of the two bodies after impact can be derived to:
𝑣ଵ = 𝑣ଶ = 𝑚ଵ
𝑚ଵ + 𝑚ଶ
𝑣଴ 	(3.15)
and the kinetic energy for the two bodies is then:
𝐸௞,ଵଶ = 𝑚ଵ
𝑚ଵ + 𝑚ଶ
𝐸௞,଴ 	(3.16)

-- 31 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	16
4 Discrete Systems
4.1 Introduction
A common simplified way to describe an impulse loaded structure is to use a single-degree-
of-freedom (SDOF) system. To include a falling object in the analysis, the system can be
expanded to an equivalent two-degree-of-freedom (2DOF) system. The extension of the
system from one to two degrees of freedom increases the complexity of the system
substantially.
To analyse a system using the simplified method of transferring it into a discrete system
involves simplifications and can lead to less accurate results. However, since the calculations
are simple and fast, the simplified method is in many cases a good alternative.
4.2 SDOF system
4.2.1 Equation of motion for SDOF system
A SDOF system consists of a mass, 𝑚 , a resistance, 𝑅(𝑢) , and a damper, 𝑐(𝑢̇ ), see
Figure 4.1. In this project, though, the effect of the damping is neglected due to the nature of
the impulse loading. When a force, 𝐹(𝑡), acts on the system, it gives rise to a displacement,
𝑢. The first derivative of the displacement with respect to time defines the velocity, 𝑢̇ . The
acceleration, 𝑢̈ , is defined by the second derivative.
F(t)
c( 	u )	R(u)
m 	u
F(t)
R(u)
m 	u
Figure 4.1 	Single degree of freedom system, from Johansson (2012).
Using Newton’s second law, the differential equation of motion for the SDOF system is
defined as:
𝑚𝑢̈ + 𝑅(𝑢) = 𝐹(𝑡) 	(4.1)
The resistance of the spring varies depending on its mechanical properties, as described in
Section 2.6.
4.2.2 Response of a SDOF system subjected to an impulse
When SDOF system is subjected to an impulse, the displacement can be calculated from the
energy balance described in Figure 3.1. According to Johansson et al. (2014), the expression
for the external work on the system, derived in Section 3.2, is only valid for a characteristic
impulse load:
𝑊௘ = 𝐼௞ଶ
2𝑚
(4.2)

-- 32 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	17
The corresponding internal work in an elastic system is defined as:
𝑊௜,௘௟ = 𝑅(𝑢௘௟)𝑢௘௟
2 = 𝑘𝑢௘௟
ଶ
2 (4.3)
Using equations (3.8), (4.2), and (4.3) the displacement for a system with an elastic response
can be expressed as:
𝑢௘௟ = 𝐼௞
𝑚𝜔 (4.4)
where 𝜔 is the eigenfrequency defined as:
𝜔 = ඨ 𝑘
𝑚 (4.5)
If the response of the system is plastic instead, the internal work is defined as:
𝑊௜,௣௟ = 𝑅௠𝑢௣௟ 	(4.6)
Using equations (3.8), (4.2) and (4.6) the plastic displacement can be expressed as:
𝑢௣௟ = 𝐼௞ଶ
2𝑚𝑅௠
(4.7)
The internal work for an elasto-plastic response of a spring can be calculated as:
𝑊௜,௘௣ = 𝑅௠𝑢௘௟ି ௣௟.௘௟
2 + 𝑅௠𝑢௘௟ି ௣௟.௣௟ = 𝑅௠
2 ൫𝑢௘௟ି ௣௟.௘௟ + 2𝑢௘௟ି ௣௟.௣௟൯ 	(4.8)
Using equations (3.8), (4.2) and (4.8) the plastic part of the displacement can be expressed as:
𝑢௘௟ି ௣௟.௣௟ = 𝐼௞ଶ
2𝑚𝑅௠
− 𝑢௘௟ି ௣௟.௘௟
2 (4.9)
From equation (2.4), the elastic part of the elasto-plastic displacement can be calculated as:
𝑢௘௟ି ௣௟.௘௟ = 𝑅௠
𝑘 (4.10)

-- 33 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	18
By inserting equation (4.10) in equation (4.9), the plastic displacement can be rewritten as:
𝑢௘௟ି ௣௟.௣௟ = 𝐼௞ଶ
2𝑚𝑅௠
− 𝑅௠
2𝑘 (4.11)
The total displacement for a system with an elasto-plastic response can then be calculated
according to:
𝑢௧௢௧ = 𝑢௘௟ି ௣௟.௘௟ + 𝑢௘௟ି ௣௟.௣௟ = 𝑅௠
2𝑘 + 𝐼௞ଶ
2𝑚𝑅௠
(4.12)
4.2.3 Equivalent static load
To analyse a structure with respect to dynamic loading, it can be convenient to transform the
dynamic load into an equivalent static load. The equivalent static load is defined as the static
load that generates an external work of the same magnitude as the dynamic load:
𝑊௘,௦௧௔ = 𝑊௘,ௗ௬௡ 	(4.13)
For the elastic response, the external work caused by a static load, 𝑄, can be calculated as:
𝑊௘,௦௧௔ = 𝑄𝑢௘௟
2 (4.14)
From equations (4.13), (4.14) and (4.2), the equivalent static load, 𝑄௘௤, for an elastic system
can be calculated as:
𝑄௘௤,௘௟ = 𝐼௞ଶ
𝑚𝑢௘௟
(4.15)
Using equation (4.4), this can be expressed as:
𝑄௘௤,௘௟ = 𝐼௞𝜔 	(4.16)
For the plastic response, the external work caused by a static load, 𝑄, can be calculated as:
𝑊௘,௦௧௔ = 𝑄𝑢௣௟ 	(4.17)

-- 34 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	19
Using equations (4.2) and (4.13) together with (4.17) the equivalent static load can be
expressed by:
𝑄௘௤,௣௟ = 𝐼௞ଶ
2𝑚𝑢௣௟
(4.18)
Using equation (4.7), the equivalent static load is calculated as:
𝑄௘௤,௣௟ = 𝑅௠ 	(4.19)
The external work in an elasto-plastic case caused by a static load, 𝑄, can be expressed as:
𝑊௘,௦௧௔ = 𝑄𝑢௘௟ି ௣௟.௘௟
2 + 𝑄𝑢௘௟ି ௣௟.௣௟ = 𝑄
2 ൫𝑢௘௟ି ௣௟.௘௟ + 2𝑢௘௟ି ௣௟.௣௟൯ 	(4.20)
Equations (4.2) and (4.13) together with (4.20) gives the following expression for the
equivalent static load:
𝑄௘௤,௘௟ି = 𝐼௞ଶ
𝑚൫𝑢௘௟ି ௣௟.௘௟ + 2𝑢௘௟ି ௣௟.௣௟൯ (4.21)
Using equations (4.10) and (4.11), the equivalent static load can be written as:
𝑄௘௤,௘௟ି ௣௟ = 𝑅௠ 	(4.22)
4.2.4 The influence of the shape of the impulse
The external work on a system is influenced by the resistance, this is explained in
Johansson (2014) and Johansson et al. (2014). In previous sections, the impulse was assumed
to correspond to a characteristic impulse. This is the case e.g. in a system with no resistance
(𝑅 = 0) and the external work can then be calculated according to equation (4.2).
For a system with a resistance, where the load does not correspond to a characteristic
impulse, there will be a reduction of the external work done on the system resulting in a
smaller displacement. Consequently, for such a case, a higher impulse is needed to cause the
same response to the structure as a so called characteristic impulse would do. This can be
explained by that the shape of the impulse is altered, it is more spread over time and the
maximum value of the force is lower, and hence, this kind of impulse is gentler on the
structure.
The system can be evaluated using pressure-impulse diagrams, see Figure 4.2. The diagram is
based on that different combinations of the dynamic load, 𝐹(𝑡), causes the same critical
displacement, 𝑢ଵ,௖௥௜௧, on a system. For a known dynamic load, the pressure-impulse diagrams
can be used to determine if the load causes a displacement larger than the allowed.

-- 35 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	20
Impulse, 	I
Load, 	F
Ik
Fk
t
F
tb
Fb
Ib
ub 	= u(Fb, tb) = ucrit
t
F
ta
Fa
Ia
ua 	= u(Fa, ta) = ucrit
u<ucrit
u>ucrit
Figure 4.2 	Illustration of a pressure-impulse diagram, modified from Johansson (2012).
Johansson (2012) treats the effects of an impulse different from the characteristic by defining
a reduction factor 𝛾ூ ≥ 1, which is used to reduce the external work as:
𝑊௘ = (𝐼 𝛾ூ	⁄ )ଶ
2𝑚 (4.23)
Here, 𝛾ூ describes how close to a characteristic impulse the actual impulse is where 𝛾ூ = 1.0
indicates a characteristic impulse. The value of 𝛾ூ depends on several factors such as the
duration of the load, the resistance of the system and the shape of the load.
4.3 2DOF system
4.3.1 Equation of motion for the 2DOF system
A 2DOF system is similar to a SDOF system, but with two masses, and two resistances, see
Figure 4.3, where the interaction between the bodies is represented by 𝑅ଵ . To derive the
equation of motion for the system, a free body diagram is used, see Figure 4.4.
F(t)
R2
m2 	u2
R1
m1 	u1
Figure 4.3 	2DOF system without dampers, modified from Johansson (2014).

-- 36 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	21
F1(t)
R2(u2)
m2
R1(u1-u2)
m1
R1(u1-u2)
ü1
ü2
Figure 4.4 	Free body diagram of the two degree of freedom system.
For body 1 and 2, Newton´s second law gives:
↓: 𝐹ଵ(𝑡) − 𝑅ଵ(𝑢ଵ − 𝑢ଶ) = 𝑚ଵ𝑢̈ଵ
↓: 𝑅ଵ(𝑢ଵ − 𝑢ଶ) −𝑅ଶ(𝑢ଶ) = 𝑚ଶ𝑢̈ଶ
(4.24)
In the next step, the parameters that are dependent on the displacement or the derivatives of
the displacement are moved to the left-hand side and the force to the right hand-side.
𝑚ଵ𝑢̈ଵ + 𝑅ଵ(𝑢ଵ − 𝑢ଶ) = 𝐹ଵ(𝑡)
𝑚ଶ𝑢̈ଶ − 𝑅ଵ(𝑢ଵ − 𝑢ଶ) + 𝑅ଶ(𝑢ଶ) = 0
(4.25)
On matrix form the equation system can be written as:
൤𝑚ଵ 0
0 𝑚ଶ
൨ ൤𝑢̈ଵ
𝑢̈ଶ
൨ + ൤ 𝑅ଵ(∆𝑢)
−𝑅ଵ(∆𝑢) + 𝑅ଶ(𝑢ଶ)൨ = ቂ𝐹ଵ(𝑡)
0 ቃ 	(4.26)
Where:
∆𝑢 = 𝑢ଵ − 𝑢ଶ 	(4.27)
and the response, 𝑅௜, can be e.g. elastic, plastic or elasto-plastic as described in equations
(2.2), (2.3) or (2.4). The equation of motion for the 2DOF system is then expressed as:
𝑴𝒖̈ + 𝑹(∆𝑢, 𝑢ଶ) = 𝑭(𝑡) 	(4.28)

-- 37 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	22
In the linear elastic case, the resistance depending on the difference between the
displacements can be separated and the matrix written as:
൤𝑚ଵ 0
0 𝑚ଶ
൨ ൤𝑢̈ଵ
𝑢̈ଶ
൨ + ൤ 𝑘ଵ 	−𝑘ଵ
−𝑘ଵ 𝑘ଵ + 𝑘ଶ
൨ ቂ𝑢ଵ
𝑢ଶቃ = ቂ𝐹ଵ(𝑡)
0 ቃ 	(4.29)
The equation of motion can then be written as:
𝑴𝒖̈ + 𝑲𝒖 = 𝑭(𝑡) 	(4.30)
A convenient way to handle the elasto-plastic case is to use the secant stiffness, 𝑘௦,ଵ and 𝑘௦,ଶ,
so that the equation of motion can be written in the same way as the linear elastic case.
The secant stiffness is used for the plastic branch of the resistance-displacement curve and
during unloading. The principle of the secant stiffness is illustrated in Figure 4.5.
ks,i
R
∆u
ks,i+1
∆ui 	∆ui+1
ks,el=k1
∆uel
Rm,1
Figure 4.5 	Schematic illustration of the secant stiffness for the elasto-plastic case.
4.3.2 Influence of the response of body 1
Depending on whether the response of the spring in body 1 is elastic, plastic or elasto-plastic
the impulse, and therefore also the energy, transferred to body 2 will be affected, this is
explained in Johansson (2014). When body 2 can be regarded as totally stiff, the impulse will
have the following character for the different cases.
൤𝑚ଵ 0
0 𝑚ଶ
൨ ൤𝑢̈ଵ
𝑢̈ଶ
൨ + ൤ 𝑘௦,ଵ 	−𝑘௦,ଵ
−𝑘௦,ଵ 𝑘௦,ଵ + 𝑘௦,ଶ
൨ ቂ𝑢ଵ
𝑢ଶቃ = ቂ𝐹ଵ(𝑡)
0 ቃ 	(4.31)

-- 38 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	23
If the response of body 1 is elastic, the transferred impulse to body 2 is illustrated in
Figure 4.6
F2
t
Iel
F2,el
Figure 4.6 	Shape of the impulse in case of elastic response, modified from
Johansson (2014).
The transferred force, 𝐹ଶ,௘௟, corresponds to half a sinus wave and is equal to the resistance of
body 1, 𝑅ଵ. The force will increase until the maximum value of the elastic displacement of
body 1 is reached, corresponding to the maximum force. The maximum value, 𝐹ଶ,௘௟, can be
calculated according to equation (4.32) and is derived in Johansson (2014).
𝐹ଶ,௘௟ = 𝑣଴ඥ𝑘ଵ𝑚ଵ 	(4.32)
At this point, the transferred impulse is equal to the momentum, 𝐼଴, of body 1 before impact
is calculated as in equation (4.33). Compare with equation (3.4).
𝐼଴ = 𝑚ଵ𝑣଴ 	(4.33)
The force and the displacement will decrease in the same manner as it appeared and during
this time, energy will continue to be transferred. The final value of the impulse will hence be
twice the size of 𝐼଴:
𝐼௘௟ = 2𝐼଴ 	(4.34)
For the plastic case, the impulse is illustrated in Figure 4.7. The maximum value of the force
is reached instantaneously and then remain constant until unloading.
F2
t
Ipl
F2,pl
Figure 4.7 	Shape of the impulse in case of plastic response, modified from
Johansson (2014).

-- 39 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	24
In the plastic case the impulse is of the same magnitude as 𝐼଴:
𝐼௣௟ = 𝐼଴ 	(4.35)
If the resistance of body 1 is elasto-plastic the response will be a combination of the elastic
and plastic case, see Figure 4.8. The loading is elastic until the resistance limit, then the force
is constant until the maximum deformation is reached. During unloading, it shows elastic
behaviour again, but this time from a limit according to the plastic resistance limit, as
schematically shown in Figure 4.8.
F2
t
Iel-pl
F2,pl
F2,el
Figure 4.8 	Shape of the impulse in case of elasto-plastic response, modified from
Johansson (2014).
The size of the impulse in this case is somewhere in between the elastic and plastic case:
𝐼଴ < 𝐼௘௟ି ௣௟ < 2𝐼଴ 	(4.36)
If body 2 cannot be considered totally stiff, the maximum value of the contact force will
decrease but the impulse will be of the same magnitude; i.e. the duration of the impact load
will increase.
The impulses discussed in this section will give rise to a response in body 2, 𝑅ଶ . This
response is complex and can be very different depending on how the two bodies interact with
each other. The ratio between the frequencies and masses of the two bodies are parameters
that affect the response.

-- 40 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	25
4.4 Transformation into discrete systems
4.4.1 Beam into SDOF system
To transform the beam into an equivalent SDOF system, transformations factors can be used
according to Johansson (2012). The transformation is illustrated in Figure 4.9.
EIb
q(x,t)
us
mb
l
x
u = us
F(t)
R(u)
m
ub
Figure 4.9 	The beam transformed into the 2DOF system, modified from Johansson and
Laine (2012).
To do this transformation, a system point along the x-axis is used. Since the shape of the
deformed beam can be considered known, the displacement in all other points along the beam
can be expressed in relation to the system point:
𝑢௕(𝑥) = 𝛼(𝑥) ∙ 𝑢௦ 	(4.37)
The point with maximum displacement is often suitable to use as the system point, and in this
project, it is also the largest displacement that is of interest. The transformed system is to be
described as:
where 𝑚, 𝑅(𝑢) and 𝐹(𝑡) are the components in the SDOF system. To transform the beam
into this SDOF system, the mass of the beam is multiplied with the transformation factor 𝜅௠,
the resistance with 𝜅௞ and the force with 𝜅௙. The equivalent equation of motion representing
the beam can then be written as:
𝜅௠𝑚௕𝑢̈ + 𝜅௞𝑅௕(𝑢) = 𝜅ி𝐹௕(𝑡) 	(4.39)
Biggs (1964) has stated that 𝜅ி is equal to 𝜅௞, which leads to that equation (4.39) can be
written as:
𝜅௠ி𝑚௕𝑢̈ + 𝑅௕(𝑢) = 𝐹௕(𝑡) 	(4.40)
𝑚𝑢̈ + 𝑅(𝑢) = 𝐹(𝑡) (4.38)

-- 41 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	26
Where:
𝜅௠ி = 𝜅௠
𝜅ி
(4.41)
The transformation factors are derived by conservation of kinetic energy as well as internal
and external work. For the entire derivation, refer to e.g. Johansson and Laine (2012). In
Table 4.1, the transformation factors are summarized for a simply supported beam subjected
to a point load in the middle of the span with the system point localized directly under the
point load. Depending on if the response is elastic or plastic, the deformed shape of the beam
will be different, resulting in different transformation factors.
Table 4.1 	Summary of transformation factors for a simply supported beam subjected to a
point load, from Johansson and Laine (2012).
Transformation
factor Elastic response 	Plastic response
𝜅௠ 	0.486 	0.333
𝜅ி 	1.000 	1.000
𝜅௠ி 	0.486 	0.333
4.4.2 Drop weight into SDOF system
The drop weight can be transformed into a SDOF system in a similar way as the beam, and
described as:
𝜅௠ி𝑚௪𝑢̈ + 𝑅௪(𝑢) = 𝐹௪(𝑡) 	(4.42)
Considering that the drop weight is deformed in the axial direction, the transformation factors
are somewhat different. The derivations of the transformation factors, see Lovén and
Svavarsdóttir (2016), are based on the same principles as for the beam, using conservation of
energy. The displacement shape of the weight depends on the stiffness of the beam as well as
on how the load is assumed to be applied. The ideal displacement shape is triangular if the
load is assumed to be evenly distributed along the length and the beam considered stiff, but
rectangular if the weight is considered much stiffer than the beam or the load assumed to be a
point load, see Figure 4.10.
u(x) 	u(x)
x 	x
Figure 4.10 The deformation of the drop weight depending on the load application the
relation between the stiffness of the beam and the weight.

-- 42 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	27
The transformations factors for the drop weight assuming a triangular or a rectangular
deformation shape are presented in Table 4.2.
Table 4.2 	Transformation factors for the drop weight depending on displacement shape,
from Lovén and Svavarsdóttir (2016).
Transformation
factor Triangular shape Rectangular shape
𝜅௠ 	0.333 	1.000
𝜅ி 	0.500 	1.000
𝜅௠ி 	0.667 	1.000
4.4.3 Equivalent 2DOF system
When expanding the two SDOF systems into a 2DOF system, the response of the impulse
loaded beam can be analysed in a simplified way. The expanded system is shown in
Figure 4.11. The falling object is represented by mass 𝑚ଵ and the interaction between the
masses by the resistance, 𝑅ଵ. The beam is represented by mass 𝑚ଶ and the resistance 𝑅ଶ.
F(t)
R2
m2
R1
m1 	u1
u2
Figure 4.11 The 2DOF system representing the falling object and the beam.
In the same manners as in previous sections, the properties of the drop weight and the beam
are transformed into equivalent properties of the 2DOF system, see equations (4.43) to (4.46).
𝑚ଵ = 𝜅௠,ଵ𝑚௪ 	(4.43)
𝑅ଵ = 𝜅௞,ଵ𝑘௦,௪(𝑢ଵ − 𝑢ଶ) 	(4.44)
𝑚ଶ = 𝜅௠,ଶ𝑚௕ 	(4.45)
𝑅ଶ = 𝜅௞,ଶ𝑘௦,௕𝑢ଶ 	(4.46)

-- 43 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	28
Adopting the method of secant stiffness of body 1, as described in Section 4.3.1, and the
transformation factors, the equation of motion for the equivalent 2DOF system can be written
as:
൤𝜅௠,ଵ𝑚௪ 	0
0 	𝜅௠,ଶ𝑚௕
൨ ൤𝑢̈ଵ
𝑢̈ଶ
൨ + ൤ 𝜅௞,ଵ𝑘௦,௪ 	−𝜅௞,ଵ𝑘௦,௪
−𝜅௞,ଵ𝑘௦,௪ 𝜅௞,ଵ𝑘௦,௪ + 𝜅௞,ଶ𝑘௦,௕
൨ ቂ𝑢ଵ
𝑢ଶቃ . . .
= ൤𝜅ி,ଵ𝐹௪(𝑡)
𝜅ி,ଶ ∙ 0 ൨ (4.47)

-- 44 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	29
5 Simplified Analyses
5.1 Introduction
In this project, two simplified methods are used to predict the behaviour of a simply
supported reinforced concrete beam subjected to impact loading: the 2DOF system and 2D
FE-analysis using 2D beam elements in Abaqus. The results from these analyses are
compared with the experimental results as well as results from 3D analyses using solid
elements carried out in LS-DYNA, see Chapter 6. In this section, modelling techniques and
choices for the two simplified methods are presented. The software Abaqus 6.14 is used to
perform analyses of the beam and drop weight modelled in 2D. The theory described in
Section 5.3 is based on Simulia (2014 a, b and c).
5.2 2DOF model
5.2.1 Modelling choices for the beam
To model the beam, the response is simplified into a bilinear behaviour according to
Figure 5.1. In the elastic part, the beam is assumed to be in state II, i.e. fully cracked, and to
have the corresponding stiffness.
u
F, R
uel 	upl
u
F
Rm.b
Figure 5.1 	Bilinear response assumed for the beam in the simplified analysis using
2DOF.
The resistance limit for the beam, 𝑅௠,௕, is calculated using the moment capacity, 𝑀ோௗ, where
the capacity utilised for the self-weight, 𝑔௕, is subtracted:
𝑅௠,௕ = 4 𝑀ோௗ
𝐿 − 𝑔௕𝐿
2 (5.1)

-- 45 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	30
To obtain the stiffness for the linear part, as described in equation (2.4), the expression for the
midpoint displacement of a simply supported beam subjected to a point load, 𝐹 , at the
midpoint of the beam can be used:
𝑢 = 𝐿ଷ
48𝐸𝐼ூூ
∙ 𝐹 	(5.2)
This gives an expression for the stiffness, 𝑘௕:
𝑘௕ = 48𝐸௖𝐼ூூ
𝐿ଷ (5.3)
In Figure 5.2, the simplified behaviour of the beam is illustrated. In reality, the stiffness of the
beam could be different for negative and positive displacements depending on the amount of
reinforcement in the top and bottom of the beam. In the negative direction, the self-weight
has a favourable effect on the stiffness. However, this is not taken into account in this project.
R 	[kN]
u 	[m]
Rm ,b
kb
1
uel
Figure 5.2 	Illustration of stiffness and resistance limit for the beam assuming elasto-
plastic behaviour.
5.2.2 Modeling choices for the drop weight and the interaction between the
drop weight and the beam
The structural response of the fictitious spring representing the interaction between the drop
weight and the beam is assumed to be elasto-plastic, see Figure 5.3. When the spring is in
tension however, it has no stiffness. This represents that the drop weight and beam are not
connected; and hence, no tensile forces can be transferred in between them.

-- 46 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	31
R 	[kN]
u 	[m]
Rm,w
kw
1
uel
Figure 5.3 	Assumed structural response of the spring that represents the contact between
the beam and the drop weight.
The stiffness of the drop weight, 𝑘௪ , is determined from the simplified expression in
equation (5.4) including the Young’s modulus, 𝐸, cross-sectional area, 𝐴, and the length, 𝐿,
of the drop weight.
𝑘௪ = 𝐸𝐴
𝐿 (5.4)
The resistance limit, 𝑅௠,௪, of the spring representing the contact between the weight and the
beam is determined by either yielding of the steel in the drop weight or crushing of concrete
in the beam. This gives a large span for the resistance which varies between different cases.
An evaluation of the choice is made in Section 7.3.1.
The simulation of the impact is made assigning an initial velocity, 𝑣଴, to the drop weight and
the force, 𝐹௪(𝑡), is set to zero. Depending on which height, ℎ, the weight is dropped from, the
velocity can be calculated according to:
𝑢̇ଵ = 𝑣଴ = ඥ2𝑔ℎ 	(5.5)
When comparison is made with test results, the measured velocity right before impact is used.
5.2.3 Transformation factors for the system
The deformed shape of the beam will in this project be similar to that of a beam with a plastic
response. Therefore, the transformation factors corresponding to plastic response are used.
In the case of an impact load, the boundary conditions of the beam can be said to be time
dependent. Directly after impact, the entire beam has not received any information about the
impact and only a part of the beam is “active”. Initially this results in displacements in the
middle part of the beam but no displacement in the outer parts, see Figure 5.4. This is
henceforth referred to as the wave propagation effect.

-- 47 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	32
Figure 5.4 	Illustration of the deformed shape of the beam at different stages shortly after
impact.
The transformation factors, given in Section 4.4.1, are however only valid for a simply
supported beam when a plastic hinge has formed in the middle of the beam. The wave
propagation effect leads to that the mass of the beam can be considered time dependent. To
fully account for this, the transformation factors on the mass could be changed with time. Yi
et al. (2016) have studied this time dependency for the transformation factor and also
provides a suggestion of how it can be approximately accounted for. As a simplification in
the present study, though, the boundary conditions, and thereby the transformation factors,
are assumed to remain constant.
The stiffness of the drop weight is in this project much stiffer than that of the beam. This
means that the drop weight can be considered to move as a rigid body with the same
displacement along its entire length. Consequently, the system point of the drop weight can
be chosen anywhere along the length. Assuming a stiff drop weight in comparison to the
beam also influences the choice of transformation factors for the drop-weight. The
assumption that the weight moves as a rigid body means that the displacement shape will be
rectangular, and the transformation factors should be chosen accordingly, see Section 4.4.2.
In Table 5.1 the chosen transformation factors for the beam and drop-weight are presented.
Table 5.1 	Transformation factors for the drop weight and the beam used in the 2DOF.
Transformation
factor
Beam 	Drop weight
Plastic response 	Rectangular shape
𝜅௠ 	0.333 	1.000
𝜅ி 	1.000 	1.000
𝜅௠ி 	0.333 	1.000
This choice of transformation factors allows for rewriting the equation system given in
equation (4.47). Since the transformation factors on the load, 𝜅ி, and on the stiffness, 𝜅௞, for
both the drop weight and the beam are equal, the equation system can now be expressed as:
൤𝜅௠ி,ଵ𝑚௪ 	0
0 	𝜅௠ி,ଶ𝑚௕
൨ ൤𝑢̈ଵ
𝑢̈ଶ
൨ + ൤ 𝑘௪,௦ 	−𝑘௪,௦
−𝑘௪,௦ 𝑘௪,௦ + 𝑘௕,௦
൨ ቂ𝑢ଵ
𝑢ଶቃ = ቂ0
0ቃ 	(5.6)
5.2.4 Central difference method
The central difference method (CDM) is an explicit numerical iteration method that can be
used to solve the differential equation of motion for the 2DOF system, see equation (5.6). In
this project this is done using Matlab, see Appendix B for the code. The following section on
CDM is based on Craig and Kurdila (2006). In CDM, the displacements of the current and
previous time steps are used to calculate the displacement of the next step. For the solution to
be stable, the timestep, ∆𝑡, must be sufficiently small, i.e. the method is conditionally stable.

-- 48 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	33
∆𝑡 < 2
𝜔௠௔௫
(5.7)
where 𝜔௠௔௫ is the highest eigenfrequency for |𝑲 − 𝜔ଶ𝑴| = 0. Differently put, this means
that a stress wave should not propagate more than an element length, 𝑙௘௟, in each time step:
∆𝑡 < 𝑙௘௟
𝑐 (5.8)
Here, 𝑐 describes the speed of wave propagation in the material with the density 𝜌, and
Young’s modulus 𝐸, and can be calculated as:
𝑐 = ඨ𝐸
𝜌 (5.9)
According to Johansson and Laine (2012), it is preferable to use an even smaller timestep to
obtain enough accuracy in the solution. For an impulse loaded structure, they suggest using a
timestep smaller than one percent of the load duration, 𝑡ଵ, i.e. equal to:
∆𝑡 < 𝑡ଵ
100 (5.10)
CDM is based on the definition of the first and second order derivative. The first order
derivative is approximated to:
𝒖̇ 𝒏 ≈ 𝒖௡ାଵ − 𝒖௡ି ଵ
2ℎ (5.11)
Where the subscript 𝑛 denotes the current timestep, 𝑛 − 1 the previous timestep, and 𝑛 + 1
the timestep to be calculated. Similarly, the second order derivative is approximated to:
𝒖̈ 𝒏 ≈ 𝒖̇ ௡ାଵ/ଶ − 𝒖̇ ௡ି ଵ/ଶ
∆𝑡 ≈ 𝒖௡ାଵ − 2𝒖௡ + 𝒖௡ି ଵ
∆𝑡ଶ (5.12)
Together with the differential equation of motion for the 2DOF system, see equation (4.29),
equations (5.11) and (5.12) gives:
൬𝑴௡
∆𝑡ଶ൰ 𝒖௡ାଵ + ൬𝑲௡ − 2𝑴௡
∆𝑡ଶ ൰ 𝒖௡ + ൬𝑴௡
∆𝑡ଶ൰ 𝒖௡ି ଵ = 𝑭௡ 	(5.13)

-- 49 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	34
This can be rearranged to give an expression for 𝒖௡ାଵ:
𝒖௡ାଵ = ൬𝑴௡
∆𝑡ଶ൰
ି
𝟏
൬𝑭௡ − ൬𝑲௡ − 2𝑴௡
∆𝑡ଶ ൰ 𝒖௡ − ൬𝑴௡
∆𝑡ଶ൰ 𝒖௡ି ଵ൰ 	(5.14)
In order to solve the first timestep, initial conditions are needed: 𝒖଴ = 𝒖(0) and 𝒖̇ ଴ = 𝒖̇ (0).
The initial acceleration 𝒖̈ ଴ is then calculated from the equation of motion as:
𝒖̈ ଴ = 𝑴଴ି ଵ(𝑭଴ − 𝑲଴𝒖଴) 	(5.15)
To find the displacement of the timestep before that, 𝑛 = −1, a Taylor series expansion is
made:
𝒖ି ଵ ≈ 𝒖଴ − ∆𝑡𝒖̇ ଴ + ∆𝑡ଶ
2 𝒖̈ ଴ 	(5.16)
5.3 Model in Abaqus using 2D beam elements
5.3.1 Modelling of the system
Using 2D beam elements in Abaqus, the drop weight and the beam were modelled according
to Figure 5.5. In the same manners as in the 2DOF system, the weight was modelled as a
point mass connected to a spring. According to Lovén and Svavarsdóttir (2016), that way of
modelling the drop weight is accurate enough, and since it is not the deformations of the drop
weight that are of interest, there is no need to model the drop weight in a more detailed way.
m
R
Figure 5.5 	Schematic picture of how the system is modelled in Abaqus.
The spring representing the interaction between the beam and the drop weight has no
resistance in tension, in the same way as in the 2DOF model. The behaviour of the spring in
compression can be modelled as either elastic or elasto-plastic. Lovén and
Svavarsdóttir (2016) modelled the interaction as elastic and got reasonable results, but in the
2DOF system the interaction is modelled as elastoplastic. These two ways of modelling the
behaviour of the spring have been evaluated in Section 7.3.3. In both cases, the stiffness, 𝑘௪,
was calculated according to equation (5.4) and in the elasto-plastic case the resistance limit,
𝑅௠,௪, was set to the same value as for the 2DOF model. This value of the resistance limit is
further evaluated in Section 7.3.1.
In Abaqus, a spring is symmetrically elastic, which means that it is elastic in both directions.
To modify the behaviour of the spring, the input file must be changed, see the standard input
file in Appendix H. This was done for the elastic spring to remove the resistance in tension.

-- 50 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	35
For the elasto-plastic spring, the behaviour was modified in both tension and compression.
The modified spring cannot display any plastic deformation, though, and the loading and
unloading for a spring in Abaqus where a resistance limit is added follows the graph in
Figure 5.6.
R
u
Figure 5.6 	Spring behaviour in Abaqus.
To enable for plastic deformations and an elasto-plastic behaviour of the spring, the spring
element was modelled together with a bar element, see Figure 5.7. Together they represent
the elasto-plastic spring.
Bar
m
Figure 5.7 	Schematic picture of how the system is modelled in Abaqus with the addition
of a bar.
The bar was modelled as elasto-plastic with a very high stiffness and the correct resistance
limit. The spring element on the other hand has a stiffness somewhat higher than the intended
one, but no resistance limit. Together they represent an elasto-plastic spring with the correct
stiffness and resistance limit, see Figure 5.8. The relation between the total, effective stiffness
and the individual stiffnesses of the spring element and the bar element is defined by:
1
𝑘௘௙௙
= 1
𝑘௦௣௥௜௡௚
+ 1
𝑘௕௔௥
(5.17)

-- 51 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	36
Spring
Bar
Combination
R
R
R
Rm,w
kspring
Rm,w
keff
Δu
Δu
Δu
kbar
Figure 5.8 	Structural behaviour of the combination of a spring and a bar generating an
elasto-plastic behaviour, modified from Andersson and Antonsson (2015).
The transformation factors chosen for the drop weight in the 2DOF system, presented in
Table 5.1, were included in Abaqus as well. However, since these values are equal to 1 they
are not further mentioned. Furthermore, the fall of the mass was represented by an assigned
initial velocity in the same way as for the 2DOF system.
In Abaqus, no units are displayed. Instead the user can choose which units to use and it is
crucial to keep consistence in these choices. The units used in Abaqus in this project are
presented in Table 5.2. These units were chosen to make the handling of the output data more
efficient compared to standard SI units.
Table 5.2 	The units used in Abaqus.
Mass 	Length 	Time 	Force 	Stress 	Energy
g 	mm 	ms 	N 	MPa 	N·mm
5.3.2 Elements
The element type chosen for the beam in Abaqus is a 2D planar beam element that uses linear
interpolation and is called B21. This is the default element used when 2D planar and wire
elements are chosen in the software. B21 is a Timoshenko beam element which is usually
suitable for beams with a high cross section since they allow for transverse shear strains. In
Abaqus these beam elements are formulated so that they are suitable for more slender beams
as well. According to Simulia (2014 b) the B21 element is one of the element types that are
well suited when simulating impact loading.
To find a suitable number of elements, a convergence study was made studying the static
capacity of the beam when subjected to a prescribed deformation in the middle of the span.
Three different meshes with 50, 100 and 200 elements, respectively, were compared. In
Table 5.3, the errors from the theoretical value, calculated in Appendix C, are compared. An
error of approximately 1 % was considered good enough and was achieved by a mesh of 100

-- 52 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	37
elements. No further modifications of the input data in the Abaqus model are made to
calibrate the model.
Table 5.3 	Convergence study of number of elements in the Abaqus model.
Capacity [kN] 	Error [%]
Theoretical 	10.38 	-
50 elements 	10.59 	2.0
100 elements 	10.49 	1.0
200 elements 	10.43 	0.5
5.3.3 Boundary conditions
In the Abaqus model, the beam is modelled as simply supported. That is, the vertical
translation in the beam is tied at the supports while the rotations are set free. In the real case
though, the beam is only resting on the supports and not tied to them, which corresponds to
boundary conditions were the beam is only fixed downwards. This leads to that the Abaqus-
model gives different results than the experiments and the more detailed 3D FE-analysis, but
similar to the 2DOF model. However, the Abaqus results does not differ from the test results
until the beam rebounds from the supports. Considering that the most interesting results are
the maximum values, which are obtained before that, the differences in the later response are
deemed to be of minor importance.
5.3.4 Solution method
The analyses are performed with an explicit solution method, described in Simulia (2014c).
The method is similar to the central difference method described in Section 5.2.4 and a
sufficiently small timestep is needed to make this numerical method work. According to
Simulia (2014b), Abaqus gives the possibility to choose between an automatically generated
timestep that is small enough or a user specified fixed timestep. In this project the fixed
timestep is used to have more control over the analysis.
The explicit solution method is provided in the software Abaqus/Explicit. In
Abaqus/Standard, though, the dynamic response is calculated using an implicit solution
method. According to Simulia (2014b), the explicit integration method is usually more
mathematically efficient for very short-term events, but a comparison between the explicit
and implicit solution methods is still of interest to perform.
The implicit solution method is an unconditionally stable integration procedure, where the
timestep is less important than for the explicit method. To calculate the displacement,
unknown quantities in the timestep to be solved are used which leads to that iteration is
required within every timestep, according to (2014c). Compared to the explicit method,
explained in Craig and Kurdila (2006), where only known quantities from previous timesteps
are used, which leads to that no iteration is required within each timestep, leading to a more
computationally efficient solution for short term events.

-- 53 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	38
5.3.5 Modelling of the materials
Since the global response of the beam was of interest, the reinforced concrete could be
modelled as an isotropic material with a bilinear response as in Figure 5.9 with the state II
(cracked) stiffness.
ε
σ
Eeq
fy
Figure 5.9 	Bilinear response with equivalent Youngs modulus.
In standard calculations, Young’s modulus for concrete and the moment of inertia for state II
would be used. However, in Abaqus the section is assumed to be isotropic and uncracked
which means that the software will calculate the moment of inertia for state I. To account for
this, an equivalent Young’s modulus, 𝐸௘௤, is used in the Abaqus analyses:
𝐸௘௤ = 𝐸௖
𝐼ூூ
𝐼ூ
(5.18)
This results in the same bending stiffness for the two cases:
𝐸௘௤𝐼ூ = 𝐸௖𝐼ூூ 	(5.19)
However, altering the value of Young’s modulus also affects the wave speed in the material,
see equation (5.9). This has some influence on the response of the model, but Andersson and
Karlsson (2012) examined this and found no significant differences until the Young’s
modulus was changed by a factor of 25. In this project, it is changed by a factor of
approximately 6, which implies that the effects on the results are acceptable.
The input value of the yield stress is also calculated for the isotropic material. This is done
using the moment capacity, 𝑀ோௗ , and the section modulus for the linear elastic sectional
response, 𝑊௘௟ . To be able to compare the results to the test results, the moment capacity
reduced with regard to gravity, 𝑀ோௗ,௥௘ௗ, must be used. This gives the corresponding value for
the yield stress, 𝑓௬,௥௘ௗ:
𝑓௬,௥௘ௗ = 𝑀ோௗ,௥௘ௗ
𝑊௘௟
(5.20)

-- 54 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	39
where the section modulus is calculated using the height, ℎ, and the width, 𝑏, of the beam:
𝑊௘௟ = 𝑏ℎଶ
6 (5.21)
5.3.6 Integration points
In the Abaqus model, three integration points are chosen to describe the height of cross
section of the beam. Using three integration points, the sectional response of the model is
treated as linear by the software, see Figure 5.10.
1
2
3
1
Figure 5.10 Interpretation of three integration points in Abaqus.
Using three integration points gives the user more control of the response of the model
compared to e.g. five integration points, which is default. To change to three integration point
must be done in the input file, see the standard input file Appendix H. For five integration
points, the stress distribution over the section in Abaqus varies in a less obvious way. The
stress can be analysed in the integration points only, which means that it is difficult to know
how it varies between them. Figure 5.11 shows examples of protentional cross sectional
responses using five integration points in Abaqus.
3
2
1
4
5
3
1
2
4
5
Figure 5.11 Example of possible sectional responses using 5 integration points.
To investigate the program’s interpretation of five integration points, a comparison was made
of the time-displacement curves from analyses using three and five integration points
respectively. Since the stress distribution when five points are used is closer to that of a fully
plastic section, the plastic section modulus, 𝑊௣௟, is calculated according to equation (5.22).
The input value of the yield strength, 𝑓௬,௥௘ௗ,௣௟, is calculated using the plastic section modulus
as in equation (5.23).
𝑊௣௟ = 𝑏ℎଶ
4 (5.22)

-- 55 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	40
From the elastic and plastic response, respectively, the values of the equivalent yield strength
defined in Abaqus are presented in Table 5.4. See Appendix C for calculations.
Table 5.4 	Equivalent yield strength of the concrete assuming elastic (3 ip) and
plastic (5 ip) sectional response.
Elastic, 3 ip 	Plastic, 5 ip
Equivalent yield strength [MPa] 	15.57 	10.38
The results of the comparison can be seen in Figure 5.12. It showed that the ultimate capacity
of the beam becomes very similar for the two cases.
Figure 5.12 Structural response of the beam assuming elastic section with three
Integration points and assuming plastic section with five integration points.
Using five integration points the bend in the curve is softer, which is closer to the real
behaviour of the beam. However, to improve the comparison of the Abaqus model and the
2DOF model, a true bilinear response is desired, which means that the use of three integration
points is preferable. The fact that the capacity of the beam becomes almost the same using the
plastic section modulus together with five integration points as using the elastic section
modulus together with three integration points implies that the stress distribution with five
integration points is close to fully plastic. In Figure 5.13, a comparison between the stress
distribution for a fully plastic section and a possible assumed stress distribution is showed.
3
1
2
4
5
Possible stress distribution
Fully plastic stress distribution
Figure 5.13 Comparison between possible assumed stress distribution and stress
distributions for a fully plastic section.
0
2
4
6
8
10
12
0 	5 	10 	15 	20
Force,
 	F 	[kN]
Displacement, 	u 	[mm]
Elastic, 3 ip
Plastic, 5 ip
𝑓௬,௥௘ௗ,௣௟ = 𝑀ோௗ,௥௘ௗ
𝑊௣௟
(5.23)

-- 56 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	41
6 LS-DYNA Modelling Using 3D Solid Elements
6.1 Introduction
In LS-DYNA, a 3D model using solid elements is created and analysed to simulate the
behaviour of a reinforced concrete beam subjected to impact loading. For the modelling,
several choices are preformed based on Lovén and Svavarsdóttir (2016) and Lozano and
Makdesi (2017). Furthermore, different choices for some parameters are presented and later
evaluated in Chapter 7. The information concerning modelling in LS-DYNA described in this
chapter is to a large extent based on LSTC (2014 a, b). The input file for the LS-DYNA
model can be found in Appendix I.
6.2 Modelling of the system
In the LS-DYNA model, presented in Figure 6.1, the beam and the drop-weight are modelled
as solid parts. The beam is resting on two roller supports which are modelled as individual
solid parts made of steel.
Figure 6.1 	LS-DYNA model including the beam, supports and drop weight.
Between the rollers and the beam, a contact was defined. This contact simulates the real
behaviour so that it allows the beam to lift; i.e. the beam was not tied to the support. This was
done using CONTACT: AUTOMATIC_SURFACE_TO_SURFACE in LS-DYNA. The
roller supports, though, were locked in both positive and negative z-direction. They were also
locked horizontally in both x- and y-direction. These boundary conditions were obtained by
creating sets of nodes and prescribing their displacements in the BOUNDARY: SPC_SET
option in LS-DYNA.
The drop weight was initially located 1 mm above the beam and assigned an initial velocity
representing the fall. This is made under INITIAL: VELOCITY_GENERATION in LS-
DYNA. The contact between the drop-weight and the beam was modelled in the same way as
the contact between the beam and the supports. The bottom surface of the drop weight is
spherical which was included in the model, see Figure 6.2.

-- 57 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	42
Figure 6.2 	Shape of the drop weight in LS-DYNA.
In the same way as in Abaqus, LS-DYNA does not include units on any quantities. Instead,
the user must ensure that a consistent system of units is used. In Table 6.1 the units used in
this project are presented.
Table 6.1 	The units used in LS-DYNA.
Parameter 	Mass 	Length 	Time 	Force 	Stress 	Energy
Unit 	g 	mm 	ms 	N 	MPa 	N·mm
6.3 Elements
In this project, solid tetrahedral elements were used for the beam based on the results from
Lozano and Makdesi (2017) who found that the models using tetrahedral elements compared
to hexahedral elements corresponded better to test results.
The tetrahedral elements were created by the tetrahedral mesher available in LS-DYNA, see
Figure 6.3. The mesh can be created in different ways; with different methods (Method 1-3)
of remeshing after a trial mesh is created and with or without skin remesh. If skin remesh is
used, it is possible to choose between Method 1 or 2. Lozano and Makdesi (2017) concluded
that the tetrahedral mesh is very sensitive to how the mesh looks. Therefore, the mesh was
created in the same way as presented in Lozano and Makdesi (2017) where Method 2 was
used for the skin remesh and Method 3 for tetrahedral mesh, as well as the element size of
5mm. After the mesh was created, the element type was defined by assigning ELFORM to 10
in the category of solid elements, creating tetrahedral elements with one integration point.

-- 58 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	43
Figure 6.3 	Illustration of the meshed model in LS-DYNA.
The drop weight and roller supports were modelled using solid hexahedral elements with
constant stress. The mesh was created using the solid mesher and the element type was
defined by assigning the parameter ELFORM to 1 in the category solid elements. This kind
of element was used for the weight and supports since their response was not of interest in
this study.
For the reinforcement, beam or truss elements have been used. Since the reinforcement is
mainly acting in tension, it could be argued that truss elements would be well suited.
Therefore, a comparison was made in Section 7.5.1 between beam and truss elements for the
reinforcement. The number of integration points over the section is specified with the
parameter QR/IRID. If beam elements with one integration point over the section is used, an
element similar to a truss element is obtained.
Beam elements of the type Hughes-Liu were chosen by assigning ELFORM to 1 while truss
elements were defined by choosing ELFORM to 3 in the category of beam elements. When
truss elements are used, the section is defined by a cross sectional area and for beam
elements, the diameter of the reinforcement is specified. The mesh was created using element
generation and the element generation method was set to “curve”.
6.4 Solution method
The time integration performed in LS-DYNA is described in LSTC (2018). The method used
was CDM, which is described in Section 5.2.4. Since CDM is an explicit method, the
timestep is important for the stability. The timestep is not specified by the user but
automatically computed in the software. The automatically generated timesteps are calculated
differently depending on the element type used. When using tetrahedral solid elements, the
critical timestep for each element ℎ௖௥௜௧,௜ is calculated based on the size of the element and the
wave speed. Then the timestep used in the next iteration step, ℎ௡ାଵ is calculated as:
ℎ௡ାଵ = 𝑎 ∙ min(ℎ௖௥௜௧,௜) i=1,2…n 	(6.1)
where 𝑎 is a timestep scaling factor defined by default as 0.9 if nothing else is specified and 𝑛
is the number of elements. The timestep scaling factor is chosen by defining the parameter
TSSFAC in CONTROL_TIMESTEP.

-- 59 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	44
6.5 Material models
6.5.1 Concrete
The material model used for the concrete is called CDPM2 and is developed and described by
Grassl et al. (2013). The material model is suitable for dynamic analyses of concrete
structures. In LS-DYNA this material model is named MAT_273 or
MAT_CONRETE_DAMAGE_PLASTICITY_MODEL. It contains many input variables, of
which some are mentioned in this section. The other parameters were left as the default
values. In the manual of CDPM2 by Grassl (2016) and the manual of LS-DYNA,
LSTC (2017), a description of each input parameter can be found. In Table 6.2, the
parameters that were defined as something different than the default value are presented
together with the notation used in LS-DYNA.
Table 6.2 	Material parameters defined for CDPM2 in LS-DYNA.
LS-DYNA notation Parameter
RO 	Mass density
E 	Young’s modulus
PR 	Poisson’s ratio
ECC 	Eccentricity parameter
FT 	Uniaxial tensile strength
FC 	Uniaxial compressive strength
HP 	Hardening parameter
WF 	Ultimate crack width
TYPE 	Type of tensile damage
EFC 	Compressive damage variable
One input variable that was defined is the eccentricity parameter, called ECC in LS-DYNA.
According to Grassl et al. (2013), the shape of the deviatoric section is handled with this
parameter. It is calculated using the mean tensile strength, 𝑓௧ , and the mean compressive
strength, 𝑓௖ , of the concrete used. According to Grassl et al. (2013), 𝑓௕௖ represents the
equiaxial compressive strength and the expression is obtained through experiments.
ECC = 1 + 𝜖
2 − 𝜖 , 𝜖 = 𝑓௧(𝑓௕௖
ଶ − 𝑓௖ଶ)
𝑓௕௖(𝑓௖ଶ − 𝑓௧ଶ), 𝑓௕௖ = 1.16𝑓௖ 	(6.2)
Another parameter that was defined is the hardening parameter which is dependent on if the
strain rate effects are included. The default value is HP = 0.5 and is only valid if the strain
rate effects are included. However, if these effects are not included the recommended value is
HP = 0.01. The effect of strain rate effect on the concrete can be treated in CDPM2 by putting
the variable STRFLG to 1.0, however this was not done in this project.
The compressive damage variable 𝜀௙௖, EFC in LS-DYNA, which controls the behaviour of
concrete after the maximum compressive stress is reached, were increased from the default of
0.0001 value to a larger value of 0.001. This is recommended by Grassl et al. (2018) when
using tetrahedral elements to avoid local compressive failure where the drop weight hits the

-- 60 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	45
beam. For some cases when the risk of local compressive failure is extra high, the damage
variable can be increased further.
The damage when the tensile strength is reached is described by the stress-inelastic
displacement law as described in Section 2.2.2. This relation can in LS-DYNA be described
as linear, bilinear or exponential. The damage formulation is linear by default. However,
Grassl (2016) states that a bilinear damage formulation gives the best results which is also
shown in the previous project by Lozano and Makdesi (2017). A comparison of how the
result is affected by the choice of the damage formulation is of interest since Lovén and
Svavarsdóttir (2016) used the linear formulation in their project.
The linear damage formulation is defined by TYPE = 0 and can be seen in Figure 6.4. Using
the value for fracture energy, 𝐺ி the ultimate crack width, 𝑤௙ for a linear damage formulation
is calculated according to equation (6.3).
fct
wf
GF
w
σt
Figure 6.4 	Linear tensile damage formulation applied in LS-DYNA.
𝑤௙ = 2𝐺ி
𝑓௖௧
(6.3)
The bilinear damage formulation is illustrated in Figure 6.5 and is defined in LS-DYNA by
assigning the parameter TYPE = 1.
fct
fct1
wf1 	wf
GF
w
σt
Figure 6.5 	Bilinear tensile damage formulation applied in LS-DYNA.

-- 61 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	46
The ultimate crack width, 𝑤௙ for a bilinear damage formulation is calculated using the value
for fracture energy, 𝐺ி, according to equation (6.4). From the input value of 𝑤௙ the values of
w୤ଵand 𝑓௖௧ଵ are calculated by default according to equations (6.5) and (6.6).
𝑤௙ = 4.444𝐺ி
𝑓௖௧
(6.4)
𝑤௙ଵ = 0.15 ∙ 𝑤௙,௧௘௧௥௔ 	(6.5)
𝑓௖௧ଵ = 0.3 ∙ 𝑓௖௧ 	(6.6)
According to Grassl (2016), the input value of the ultimate crack width in models with
tetrahedral elements should be modified:
𝑤௙,௧௘௧௥௔ = 0.56 ∙ 𝑤௙ 	(6.7)
6.5.2 Reinforcement
The steel in the reinforcement can be modelled in different ways, Lovén and
Svavarsdóttir (2016) and Lozano and Makdesi (2017) modelled it as bilinear. However, to
model the reinforcement in a more realistic way, a multilinear relationship for the stress-
strain curve can be introduced. An investigation of the different ways of modelling the stress-
strain relation for the concrete is made in Section 7.5.4.
The bilinear behaviour is defined with the material model MAT_003, which is called
MAT_PLASTIC_KINEMATIC in LS-DYNA. According to LSTC (2014 b), this material
model is effective and well suited for isotropic materials with hardening plasticity. In
Figure 6.6, the structural response of the reinforcement in LS-DYNA is illustrated.
E
Etan
fy
εs
σs
Figure 6.6 	Structural response of the plastic kinematic material model.
There are several material parameters in the material model that can be defined. The
parameters for the bilinear model that are defined as something other than the default value
are presented together with the LS-DYNA notation of the parameter in Table 6.3.

-- 62 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	47
Table 6.3 	Input material parameters for the bilinear model in LS-DYNA.
LS-DYNA notation 	Parameter
RO 	Mass density
E 	Young’s modulus
PR 	Poisson’s ratio
SIGY 	Yield stress
ETAN 	Tangent modulus
The multilinear behaviour is in LS-DYNA introduced using the material model 024-
PIECEWISE_LINEAR_PLASTICITY. This material behaviour is illustrated in Figure 6.7.
σs
εs
E
Figure 6.7 	Structural response for the multilinear material model.
For the multilinear model, SIGY and ETAN mentioned in Table 6.3 are not used. Instead,
stresses and corresponding strains are defined by assigning values to the parameters ES and
EPS. Only the plastic strains are considered, which means that the first value of strain is zero
and the corresponding stress is equal to the yield stress. In Figure 6.8, the values of plastic
strain and stress defined in LS-DYNA are illustrated.
σs
εpl
fy
(EPS2, ES2)
(EPS3, ES3)
(EPS4, ES4)
(EPS5, ES5)
(EPS1, ES1)
Figure 6.8 	Schematic illustration of the stress-plastic strain relationship defined in LS-
DYNA.

-- 63 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	48
To calculate the plastic strain defined for this material model in LS-DYNA, the elastic part of
the strain is subtracted from the total strain, as schematically illustrated in Figure 6.9.
εel 	εpl
σs
εs
εtot
σs
Es
1
Figure 6.9 	Schematic illustration of the stress strain relationship for the reinforcement.
The plastic strain for the corresponding stress is calculated for the points according to
equation (6.8).
𝜀௣௟ = 𝜀௧௢௧ − 𝜀௘௟ = 𝜀௧௢௧ − 𝜎௦
𝐸௦
(6.8)
There is an option to include strain rate effects with this material model, this was however not
done in this project.
6.5.3 Supports and drop weight
For the drop weight and the supports the isotropic hypoelastic material model MAT_001,
called MAT_ELASTIC in LS-DYNA, was used. According to LSTC (2014b) this material
model is suitable if the strains are suspected to be small which is the case for these parts. The
input variables are presented in Table 6.4 together with the corresponding notations in
LS-DYNA.
Table 6.4 	Input parameters for the material of the supports and drop weight in
LS-DYNA.
LS-DYNA notation 	Parameter
RO 	Mass density
E 	Young’s modulus
PR 	Poisson’s ratio

-- 64 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	49
6.6 Interaction between reinforcement and concrete
In reinforced concrete, forces are transferred from the reinforcement to the concrete by shear
stress acting in the contact between the concrete and reinforcement. These stresses are
referred to as the bond stress. The bond between the reinforcement bars and the concrete is
developed during a certain distance from a free edge or a crack, this is explained by e.g.
Engström (2014). The reinforcement slides in relation to the concrete until the full bond is
developed. If the stress then has reached the tensile strength of the concrete, a new crack is
formed. The relative displacement that occurs between the concrete and the reinforcement is
referred to as the slip. The bond-slip relation can be determined by experiments or calculated.
The interaction between concrete and reinforcement can be modelled in different ways. One
common way of treating the interaction is to model the reinforcement as embedded. This
means that the bond between the reinforcement and concrete is complete. In LS-DYNA a
complete bond is set by defining CONSTRAINED where the SLAVE is defined as the
reinforcement bars and the MASTER as the solid beam. This means that the nodes of the
reinforcement bars and the concrete elements coincide and that the bars are constrained to
move perfectly together with the concrete. This, though, does not simulate a fully realistic
behaviour.
To approach a more realistic behaviour of the structure in an FE-model, the bond-slip relation
between the reinforcement bars and the concrete can be included. The bond-slip relationship
is described by defining an axial force, 𝐹 , depending on the bond, 𝜏௕ , which in turn is
dependent on the slip, 𝑠. The force is defined as:
𝐹 = 𝜏௕(𝑠) ∙ 𝜋𝜙 ∙ 𝑙௘௟ 	(6.9)
where 𝑙௘௟ is the average element length. The bond stress is described in the CEB-FIP Model
Code (2012). In Figure 6.10 the relation assuming good bond conditions is illustrated.
τmax
τb
s
s1
Figure 6.10 Schematic illustration of Bond-slip relation according to CEB-FIP (2012).

-- 65 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	50
In this project a simplification of this relation was used based on Grassl et al. (2017) and
Lockhart (2017). This function is also given as an example in the new version of the LS-
DYNA Keyword User’s Manual from LSTC (2017). The assumed bond-slip relation can be
seen in Figure 6.11.
τmax
s1
τb
s
Figure 6.11 Assumed bond-slip relation in LS-DYNA.
The first part of the bond-function is adopted directly from the model code, while the second
part is assumed constant, see equation (6.10). The value of the slip at which the simplified
bond stress function becomes constant is defined according to CEB-FIP (2012), for good
bond conditions, as in equation (6.11), and the maximum value of the bonds stress according
to equation (6.12).
𝜏௕(𝑠) = ቐ𝜏௠௔௫ ൬ 𝑠
𝑠ଵ
൰
଴.ସ
𝑖𝑓 𝑠 < 𝑠ଵ
𝜏௠௔௫ 	𝑖𝑓 𝑠 ≥ 𝑠ଵ
(6.10)
𝑠ଵ = 1.0 𝑚𝑚 	(6.11)
𝜏௠௔௫ = 2.5ඥ𝑓௖௠ 	(6.12)
Grassl et al. (2017) explains how this bond-slip can be modelled in LS-DYNA either by
constraining the reinforcement in the concrete using bond-slip laws or using nonlinear spring
elements. If the bond-slip is introduced by making the reinforcement constrained into the
concrete using bond-slip functions, Lockhart (2017) states that the modelling is less
complicated compared to including springs. In this case, the nodes of the reinforcement and
the concrete, respectively, are constrained to move according to the bond-slip function. This
is made using a built-in function in LS-DYNA. As for the case of perfect bond,
CONSTRAINED is defined. But to include bond-slip, the parameter AXFOR is used to
enable the user to specify the bond-slip relation of the reinforcement. In this project, bond-
slip was included using this option since it was considered the simplest way to model, and the
easiest method to repeat in future projects. The bond-slip relation is defined by
DEFINE_FUNCTION, for the code used, see Appendix I. When AXFOR is used, the
parameter CDIR must be changed from the default value to 1 to remove the constraint along
the axial direction of the reinforcement and allow for a movement.

-- 66 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	51
7 Validation and Improvements of Models
7.1 Introduction
Previously, tests have been conducted where actual concrete beams have been subjected to a
drop-weight corresponding to the scenario modelled in this project. The tests were originally
carried out and analysed by Ekström (2017). Lovén and Svavarsdóttir (2016) used some of
those tests results to create models and analyse and compare results. Lozano and
Makdesi (2017) carried out a new series of drop weight tests. In this chapter a brief
description of the tests studied in Lovén and Svavarsdóttir (2016) are described. Time-
displacement curves for the midpoint of the beam and crack patterns from these tests were
used in this project. For more detailed information and deeper analyses of these tests, the
reader is referred to the original studies.
Some different choices were compared and analysed to evaluate the modelling techniques in
the simplified models as well as in the LS-DYNA model. The 2DOF model and the Abaqus
model were then validated by comparing them to each other, to hand calculations and to some
extent test results. The LS-DYNA model was validated by comparison to test results.
7.2 Reference experimental procedure and material properties
Dynamic tests were carried out on simply supported concrete beams by means of a guided
fall of a weight hitting the beam. The basic geometry and support conditions of the beams
that were tested can be seen in Figure 7.1.
90 	90	1 000
[mm]
70 	70
Figure 7.1 	Dimensions of the beams used in experiments.
The beams were reinforced with four rebars, divided in one top and one bottom layer and the
square cross sections of the beams and the reinforcement layout is shown in Figure 7.2. The
dimensions of the cross section are presented in Table 7.1.
c
h
ϕ
b
c
Figure 7.2 	Cross section of the beam.

-- 67 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	52
Table 7.1 	Dimensions of the cross section.
Property 	Dimension
Height, h [mm] 	100
Width, b [mm] 	100
Cover, c [mm] 	20
Diameter, ϕ [mm] 6
The drop-weight, illustrated in Figure 7.3, is cylindrical and made of steel. There is a cavity
inside the weight intended for measuring devices and the bottom of the drop-weight has a
rounded surface. Since the weight is modelled as solid in LS-DYNA, the input value of the
density has been modified to represent the correct mass. The dimensions and properties of the
drop-weight are presented in Table 7.2. For more detailed information on the drop-weight,
refer to e.g. Lovén and Svavarsdóttir (2016).
b
h
r
Figure 7.3 	Geometry of the drop-weight, modified from Lovén and Svavarsdóttir (2016).
Table 7.2 	Properties of the drop-weight, according to Lovén and Svavarsdóttir (2016).
Property 	Value
Height, h [mm] 	260
Width, b [mm] 	80
Radius of rounded tip, r [mm] 400
Mass, 𝑚௪ [g] 	10 093
Young’s modulus [GPa] 	200
Material tests were carried out on the concrete and reinforcement. The average mechanical
properties of the concrete at the day of the dynamic tests, according to Lovén and
Svavarsdóttir (2016), as well as the ultimate tensile strength of the reinforcement are
presented in Table 7.3. These are also the values used for validation of the models in this
report. The values of Young’s modulus and theoretical fracture energy for the concrete were
calculated using the mean compressive strength at the day of the tests, see Appendix C for
calculations.

-- 68 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	53
Table 7.3 	Mechanical properties of the concrete and reinforcement, from Lovén and
Svavarsdóttir (2016).
Parameter 	Value
Mean compressive strength of concrete cylinders, 𝑓௖௠ [MPa] 45.5
Mean tensile strength of concrete cubes, 𝑓௖௧௠ [MPa] 	3.28
Modulus of elasticity of concrete, 𝐸௖௠ [GPa] 	34.7
Fracture energy from tests of concrete, 𝐺ி [N/m] 	113
Mean ultimate tensile strength of reinforcement, 𝑓௨ [MPa] 	665
Tensile tests were performed on the reinforcement and the results of these tests can be seen in
Figure 7.4. From this, the mean ultimate strength was obtained. Mean values for the stresses
and strains were calculated to obtain a curve representing the average behaviour of the
reinforcement. For the input data used in the models, see Appendix A.
Figure 7.4 	Result from the tensile tests of the reinforcement bars.
Several different dynamic tests were carried out, dropping the weight from different heights.
The reference test for this project was from 5.5 meters, resulting in a measured velocity of
10.35 m/s of the drop weight just before impact. There were five beams tested in the test
series with a drop height of 5.5 meters. The test results from the dynamic tests showed some
variation, see Figure 7.5.
Lovén and Svavarsdóttir (2016) used the beam RPC2 as a reference since it was considered
representative for the results in total. In this project, RPC2 was mostly used for comparison,
but it was desirable to achieve results from the models that are on the safe side. Therefore, the
entire test series was sometimes used in the comparison.
0
100
200
300
400
500
600
700
800
0 	20 	40 	60 	80 	100 	120 	140
Steel stress,
 	σs [MPa]
Steel strain, εs 	[‰]
Bar A
Bar B
Bar C
Bar D
Bar E
Bar F
Average value

-- 69 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	54
Figure 7.5 	Displacement with time for the tested beams.
The cracks for two beams from the experiments are presented in Table 7.4, at the time of the
maximum displacement. The beam RPC2 was previously chosen as the reference beam for
the time-displacement curve. RPC5 was considered more representative concerning the crack
pattern since the crack closest to the middle region in RCP2 is more inclined and has merged
with the middle cracks. Therefore, these two beams were used for comparison of crack
patterns in this project. The scale for the crack patterns from the tests were chosen by Lovén
and Svavarsdóttir (2016) so that the red colour represents an open crack.
Table 7.4 	Crack patterns at maximum displacement for two tested beams that were used
as reference.
Description 	Crack pattern
RPC2
RCP5
Principle
strain
[%]
0
5
10
15
20
25
30
0 	5 	10 	15 	20
Displacement,
 	u [mm]
Time, 	t 	[ms]
RPC4
RPC5
RPC6
RPC2
RPC1

-- 70 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	55
7.3 Comparison of modelling techniques in simplified models
7.3.1 Resistance limit for the interaction in the 2DOF model
The resistance limit of the spring representing the interaction between the beam and the drop
weight is chosen based on the properties of the specific beam and load case, as mentioned in
Section 5.2.2. Lovén and Svavarsdóttir (2016) evaluated the choice of resistance limit with
respect to velocity and concluded that a limit of 50 kN proved to give reasonable results in
comparison to their test results. Lozano and Makdesi (2017) also used 50 kN. To evaluate the
effects of the choice of resistance limit, the displacements with time using a limit of 20, 50,
100, 200, 500 and 1 000 kN were evaluated in this project and are presented in Figure 7.6.
Figure 7.6 	Difference in response depending on how the resistance limit of the spring
representing the interaction was chosen.
It can be seen that the displacement does not differ much if a value between 50 or 100 is
chosen. The shape of the response starts to differ though when a limit of 200 kN is used and
when using a limit of 500 kN the resulting response is quite different. Based on this
sensitivity analysis and previous experience, the resistance limit was set to 50 kN in this
project as well. For the elasto-plastic spring in Abaqus, the same limit was used.
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
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u [mm]
Time, 	t 	[ms]
Rm,w=1000 kN
Rm,w=500 kN
Rm,w=200 kN
Rm,w=100 kN
Rm,w=50 kN
Rm,w=20 kN

-- 71 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	56
7.3.2 Implicit or explicit solution method in Abaqus
A comparison between the two solution methods in Abaqus, explained in Section 5.3.4, was
made to evaluate the influence of the solution method on the displacement with time. The
result can be seen in Figure 7.7. The results from the two solution methods correspond well,
but since the explicit method is more efficient for this type of analysis, the explicit method
was used henceforth.
Figure 7.7 	Comparison of implicit and explicit solution method using an elastic and
elasto-plastic spring in Abaqus.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Elastic, implicit
Elastic, explicit
Elasto-plastic, explicit
Elasto-plastic, implicit

-- 72 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	57
7.3.3 Structural behaviour of the spring in the Abaqus model
The elastic and elasto-plastic structural behaviour of the spring in Abaqus, mentioned in
Section 5.3.1, were evaluated and are presented in Figure 7.8.
Figure 7.8 	Comparison of midpoint displacement with time from the 2DOF model and
from Abaqus using elastic and elasto-plastic springs.
As can be seen, the difference in results using an elasto-plastic or an elastic spring was not
significant. In the 2DOF model, on the other hand, the resistance limit of the spring had a
large influence. This can be seen in Figure 7.6 where an elasto-plastic spring with a very high
resistance limit gave larger displacements. An elasto-plastic spring with a high resistance
limit approaches the behaviour of an elastic spring. The difference in influence from the
structural behaviour of the spring in the different models may be explained by the different
ways of modelling the beam. In the 2D model in Abaqus, the wave propagation effect,
explained in Section 5.2.3, was captured. In the 2DOF model in 1D it was not captured, and
an elasto-plastic spring was needed to simulate the more realistic behaviour. Therefore,
elasto-plastic behaviour of the spring was not needed in Abaqus and an elastic structural
behaviour was sufficient.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20 	25
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Elastic
2DOF
Elasto-plastic

-- 73 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	58
7.4 Validation of simplified models
The time-displacement curves for the 2DOF model and the Abaqus model, compared in
Figure 7.9, are similar. Regarding the maximum displacement, there is a difference of 0.7
millimetres, which was considered accurate enough considering the different levels of detail
in the models.
Figure 7.9 	Displacement of the midpoint of the beam comparing 2DOF and Abaqus.
The results from the simplified models are compared to hand calculations with respect to
transferred energy in the system and maximum displacement. The energy in the system was
calculated from the value of the maximum displacement from the two models using equations
(3.8) and (4.8). In the hand calculations, a plastic impact was assumed, and the energy was
calculated as the external work described by equation (3.16). From the external work, the
maximum displacement was obtained. The equations used are also presented in Appendix F.
From the maximum values, the quota 𝜂௨ for the displacements and the ratio 𝜂ௐ೤ for the
energy were calculated as described in equations (7.1) and (7.2). The results are presented in
Table 7.5.
𝜂௨ = 𝑢௜
𝑢ଶ஽ைி
𝑖 = 𝐴𝑏𝑎𝑞𝑢𝑠, 𝐻𝑎𝑛𝑑 𝑐𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑖𝑜𝑛𝑠 	(7.1)
𝜂ௐ೤ = 𝑊௬௜
𝑊௬ଶ஽ைி
𝑖 = 𝐴𝑏𝑎𝑞𝑢𝑠, 𝐻𝑎𝑛𝑑 𝑐𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑖𝑜𝑛𝑠 	(7.2)
0
5
10
15
20
25
30
35
0 	10 	20 	30 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
2DOF

-- 74 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	59
Table 7.5 	Comparison of transferred energy into the system calculated using different
methods.
Method
Maximum
displacement
[mm]
𝜂௨
[-]
Energy
[J]
𝜂ௐ೤
[-]
2DOF 	30.9 	1.00 	298.3 	1.00
Abaqus 	31.6 	1.02 	305.6 	1.02
Hand calculations 	31.1 	1.00 	299.8 	1.00
From the results, it can be seen that the assumption of a plastic impact and the elasto-plastic
response with a resistance limit of 50 kN in the 2DOF model was a good approximation to
capture a more realistic response. In the Abaqus model, the behaviour of the system was
captured well with the more simple, elastic response. As previously mentioned, one possible
explanation to why an elasto-plastic modification was needed in the 2DOF model and not in
Abaqus can be that the wave propagation effect discussed in Section 5.2.3 is automatically
captured in Abaqus.
The results from the 2DOF model and the Abaqus model were compared to the test results
regarding the time-displacement curves, see Figure 7.10. The simplified models were only
compared to the test results with respect to global behaviour since the models are not detailed
enough to describe e.g. crack patterns.
Figure 7.10 Time-displacement curves from the 2DOF model, Abaqus model and test
results.
The models are less stiff than the real beam and one contributing factor is that the simplified
models do not take strain rate effects into account for either the reinforcement or the concrete.
Another contributing explanation may be that static tests, performed by Lozano and
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
2DOF
Test 2016

-- 75 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	60
Makdesi (2017) and by Jönsson and Stenseke (2018), showed that the capacity of the beams
was higher than predicted (reason unknown) with hand calculations.
No adjustments of the models were made to make them fit better to the test results. It was
investigated, though, how much the capacity would need to be modified in the 2DOF to
obtain results close to the test results. If the yield strength of the reinforcement were to be
increased, an increase of 45 % would be needed to reduce the displacement to that obtained
in the test, see Figure 7.11.
Figure 7.11 An attempt to modify the 2DOF model to obtain results closer to the test
results.
Another attempt was made to get closer to the test results by modelling the interaction
between the parts in a more sophisticated way using contact mechanics. See Appendix D for
an evaluation of this more thorough method of modelling the contact. This evaluation,
though, showed that there is a neglectable difference between the simplified way and the
more detailed way since the stiffness of the interaction is still so much larger than the
stiffness of the beam. Since the difference in results was neglectable, and the fact that the
stiffness has been modelled in the simplified way previous years, the stiffness based on
contact mechanics has not been used in this project.
0
5
10
15
20
25
30
35
0 	10 	20 	30 	40
Displacemet,
 	u 	[mm]
Time, 	t 	[ms]
2DOF, original
Test 2016
2DOF, yield strength of
reinforcement increased by 45 %

-- 76 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	61
7.5 Comparison of different modelling choices in LS-DYNA
7.5.1 Element type for the reinforcement
The different element types for the reinforcement, described in Section 6.3, were evaluated.
The time-displacement curves for the analyses showed that very similar results were obtained
using beam elements with 1 x 1 integration point and truss elements. The displacements when
using beam elements with 2 x 2 integration points were smaller, see Figure 7.12. There were
some convergence issues for the model with truss elements and 1x1 beam elements where the
analyses terminated after approximately 15 ms. However, the time of main interest is when
the maximum displacement is reached, which happens after approximately 8 ms. Hence, this
means that the problem with convergence later is not of major concern.
Figure 7.12 Comparison between beam elements with 1 x 1 integration points, 2 x 2
integration point and truss elements.
The crack patterns from the LS-DYNA model were compared to test results. In the plots from
the LS-DYNA model, the strain representing a fully open crack, i.e. no tensile force can be
transferred over it, is represented with red colour. That strain value was calculated, in
Appendix C, using an equivalent element length according to Lozano and Makdesi (2017).
The strain from the tests and LS-DYNA, though, are not directly comparable since the strain
presented refers to different lengths.
The results showed that more realistic crack patterns were achieved when using truss
elements and 1 x 1 beam elements, see Table 7.6. Using beam elements with 2 x 2 integration
points, unrealistic horizontal strains along the reinforcement occurred. The fact that truss
elements and beam elements with 1 x 1 integration points resulted in more realistic crack
patterns than beam elements with 2 x 2 integration points was considered more important
0
5
10
15
20
25
0 	5 	10 	15 	20
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Test
Beam elements 1 x 1 ip
Truss elements
Beam elements 2 x 2 ip

-- 77 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	62
than the convergence issues in a later stage even if 2 x 2 integration points would have been
the most realistic choice for modelling the reinforcement.
Table 7.6 	Crack patterns for test results and models with different element types for the
reinforcement at the time for maximum displacement.
Description 	Crack pattern
Test (RPC2)
Test (RCP5)
Principle
strain
[%]
Beam
elements
(2 x 2 ip)
Beam
elements
(1 x 1 ip)
Truss elements
Principle
strain
[%]

-- 78 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	63
7.5.2 Interaction between concrete and reinforcement
A comparison was made between a model with embedded reinforcement and a model with a
bond-slip function included. The displacements when bond-slip was included were noticeable
larger and closer to the test results, see Figure 7.13.
Figure 7.13 Time-displacement curve with and without bond-slip, using beam elements
with 1 x 1 integration point for the reinforcement.
The crack patterns for the models without and with bond-slip are presented together with the
crack patterns from the test in Table 7.7. It can be seen that there are some horizontal strains
along the reinforcement for the model without bond-slip but that they are less prominent in
the model including bond-slip. As expected, the crack pattern has changed somewhat when
the bond-slip is introduced, and the cracks are distributed with a larger crack distance.
0
5
10
15
20
25
30
0 	5 	10 	15 	20
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
With bond-slip
Test
Without bond-slip

-- 79 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	64
Table 7.7 	Crack patterns from the test and LS-DYNA models without and with bond-slip
at the time for maximum displacement. The reinforcement is modelled with
beam elements with 1 x 1 integration point.
Description 	Crack pattern
Test (RPC2)
Test (RCP5)
Principle
strain
[%]
Without bond-
slip
With bond-
slip
Principle
strain
[%]
Based on that the horizontal strains were less prominent for the beam elements using 1 x 1
integration points there was an idea that the horizontal strains for 2 x 2 beam elements,
discussed in Section 7.5.1, would be reduced when the full constraint between the
reinforcement and the concrete was released. Therefore, different element types for the
reinforcement were compared when bond-slip was included.
In Figure 7.14, the displacements for beam elements with 1 x 1 and 2 x 2 integration point
and truss elements are compared when bond-slip is included. The displacements for 1 x 1
integration points and truss elements were larger than and closer to the test results.
Furthermore, the crack pattern is shown in Table 7.8, and it were concluded that the
horizontal strains for beam elements with 2 x 2 integration points remained. It can also be
seen that the crack patterns for beam elements with 1 x 1 integration point and for truss
elements are very similar.

-- 80 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	65
Figure 7.14 Displacements for different element types for the reinforcement when bond-
slip interaction is included in the modelling.
Table 7.8 	Crack patterns from models with different element types for the reinforcement
when bond-slip is included.
Description 	Crack pattern
Beam
elements
(2 x 2 ip)
Beam
elements
(1 x 1 ip)
Truss elements
Principle
strain
[%]
When beam elements with 1 x 1 integration points or truss elements were used, the influence
of bond-slip on the displacement was larger than for beam elements with 2 x 2 integration
points. For truss elements and beam elements with 1 x 1 integration points, the increase in
displacement when bond-slip was included was 16 %. For beam elements with 2 x 2
integration points the difference was 7 %. Based on that it was considered desirable to
achieve larger displacements in the model compared to the tests and that the horizontal strains
0
5
10
15
20
25
30
0 	5 	10 	15 	20
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
1x1 ip
Truss
Test
2x2 ip

-- 81 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	66
remained for the beam elements with 2 x 2 integration points, bond-slip was included in
further analyses and beam elements with 2 x 2 integration points were excluded.
The way of modelling the interaction, using the built-in function CONSTRAINT, the nodes
of the reinforcement is probably linked to the closest nodes in the concrete. This leads to that
the interaction is spread out over the element size. In this case, when the diameter of the
reinforcement and the element size is almost the same, this can be favourable. However, if
the element size would be larger than the diameter of the reinforcement, this is something that
may be needed to be considered.
7.5.3 Damage formulation for the concrete
A comparison was made between linear and bilinear damage formulation for the concrete in
tension. In Figure 7.15 it can be seen that the difference in displacement for the two models
was small.
Figure 7.15 Displacements for the models with linear and bilinear damage formulations
for concrete in tension. The reinforcement is modelled with beam elements
with 1 x 1 integration point.
In Table 7.9, the crack patterns for the model with linear and bilinear damage formulations
for concrete in tension are presented. There is a small difference, but it is not significant.
Therefore, the bilinear response was considered to be the best model since it is a better
approximation of the real behaviour.
0
5
10
15
20
25
30
0 	5 	10 	15 	20
Displacemnet,
 	u 	[mm]
Time, 	t 	[ms]
Bilinear
Linear
Test

-- 82 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	67
Table 7.9 	Crack patterns for the models with linear and bilinear damage formulations
for concrete in tension. The reinforcement is modelled with beam elements
with 1 x 1 integration point.
Description 	Crack pattern
Test (RPC2)
Test (RCP5)
Principle
strain
[%]
Linear
damage
formulation
Bilinear
damage
formulation
Principle
strain
[%]

-- 83 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	68
7.5.4 Modelling of stress-strain relation for the reinforcement
The two ways to model the structural behaviour of the reinforcement that were studied is the
bilinear and a multilinear behaviour, see Figure 7.16. The bilinear curve is a very rough
estimation of the real behaviour while the multilinear curve captures the behaviour of the
reinforcement more realistically.
Figure 7.16 The mean value from tests of the reinforcement in comparison with the
bilinear and multi-linear behaviour modelled in LS-DYNA.
Since the experimental stress-strain relation does not show a distinct yield behaviour, and
there is no clear point where the nonlinear part of the curve begins, the multilinear curve is
designed to fit the curve from the tests and not only starting from the yield plateau.
It was concluded when running analyses that the truss elements and the multilinear behaviour
of the reinforcement were not compatible in LS-DYNA. Since the results from truss elements
and beam elements with 1 x 1 integration point have proved to be similar, beam elements
with 1 x 1 integration points are used in all further analyses made in this thesis.
The displacements for the models with multilinear and bilinear stress-strain relation are
compared in Figure 7.17. The model with bilinear behaviour can absorb more energy since
the area under the stress-strain graph in is also larger. This is confirmed by the somewhat
smaller displacements for the model with bilinear behaviour.
0
100
200
300
400
500
600
700
0 	20 	40 	60 	80 	100
Steel stress,
 	σs [MPa]
Steel strain, εs 	[‰]
Bilinear
Test
Multilinear

-- 84 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	69
Figure 7.17 Displacements for models with multilinear and bilinear behaviour of the
reinforcement.
The multilinear behaviour is closer to reality than the bilinear and gave results that are more
on the safe side. The crack patterns from the different models showed to be very similar.
Therefore, the model with multilinear behaviour were used in all further analyses.
0
5
10
15
20
25
30
0 	5 	10 	15 	20
Displacemnet,
 	u 	[mm]
Time, 	t 	[ms]
Multilinear
Bilinear
Test

-- 85 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	70
7.6 Validation of the final LS-DYNA model
From the comparisons made for different modelling choices, a final version of the model,
referred to as the standard model, was obtained. The modelling choices for this model are
presented in Table 7.10.
Table 7.10 Conclusions from comparison of modelling choices.
Modelling parameter 	Chosen method
Element type for the reinforcement 	Beam elements, 1x1 integration point
Interaction between concrete and reinforcement Bond-slip included
Damage formulation for concrete in tension 	Bilinear
Structural behaviour of the reinforcement 	Multilinear
The displacements for the final model is compared to the beams in the test series, see
Figure 7.18. The results from the final model are just above the weakest test beam, which is
deemed to be a satisfactory result since the model was close to reality while still on the safe
side. No strain rate effects were considered, but the beam still showed a stiffness that
corresponds well to the reality. This may be explained by volumetric locking effects in the
model when tetrahedral elements are used. Volumetric locking effects can be caused by the
shape of the tetrahedral elements and the irregular pattern they create in the beam. This
inhibits the movements that would occur in more regular shaped elements.
Figure 7.18 Comparison of the standard LS-DYNA model and the tested beams.
0
5
10
15
20
25
30
0 	5 	10 	15 	20
Displacement,
 	u [mm]
Time, 	t 	[ms]
LS-DYNA final
RPC4
RPC5
RPC6
RPC2
RPC1

-- 86 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	71
The crack pattern for the final model is compared to the test results, see Table 7.11, and the
overall expression of the crack patterns corresponds well. The strain pattern in LS-DYNA is
not symmetric which is realistic since the real material of the beam is not totally
homogenous. In LS-DYNA an asymmetric element mesh may be an explanation for these
unsymmetrical crack pattern. The middle part of the LS-DYNA beam is more similar to
RCP5, but as mentioned in Section 7.2, the crack closest to the middle region of RCP2 is
more inclined and has probably merged with the middle cracks.
Table 7.11 Crack patterns for the final LS-DYNA model compared to the tests.
Description 	Crack pattern
Test (RPC2)
Test (RCP5)
Principle
strain
[%]
LS-DYNA
final
Principle
strain
[%]

-- 87 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	72
7.7 Summary of results from the final models
The results from the final, now considered standard, models from 2DOF, Abaqus and LS-
DYNA, can be seen in Figure 7.19. The settings used in these models were used as a basis for
the parametric studies in Chapter 8.
Figure 7.19 Time-displacement curves for the test and final models 2DOF, Abaqus
and LS-DYNA.
The shapes of the time-displacement curves are different when comparing the 2DOF and
Abaqus results to the test results and LS-DYNA. In the test results and LS-DYNA, the
displacement oscillates around a descending branch, while in the results from the simplified
models it oscillates around a constant value equal to the plastic deformation. This can be
explained with how the support conditions were modelled in the simplified models compared
to the actual conditions in the test. In the simplified models, the beam was prevented from
lifting from the supports, while in reality it lifted from the supports when the beam rebounded
after reaching the maximum displacement. In LS-DYNA the support conditions were
modelled realistically enough to capture this behaviour. Since the maximum displacement
and not the plastic displacement is the main interest in this study, it is of minor importance to
extract the relative displacement for the LS-DYNA model.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
2DOF
LS-DYNA
Test 2016

-- 88 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	73
8 Adaption to New Test Series and Parametric Study
8.1 Introduction
Having validated the different models, they were adapted to simulate new tests carried out by
Jönsson and Stenseke (2018). In these tests, new beams were casted with new reinforcement,
which means that some material parameters for concrete and reinforcement were modified.
The adaption to the new tests was done to enable for future studies to continue the work.
A variation of load, geometry and reinforcement parameters was then studied to investigate
how sensitive the different models are to certain parameters. In LS-DYNA the mass of the
drop weight, the drop height and the amount of reinforcement were varied. In the simplified
model these parameters as well as the height, width and length of the beam were varied.
8.2 Adaption of models to new test results and future studies
In the new tests, the radius of the rounded bottom surface of the drop weight was decreased
from 400 to 200 mm. Since new reinforcement was used and new concrete was mixed and
casted, the properties of the concrete and reinforcement was different compared to previous
years. The new material properties of the reinforcement were adopted in this project to enable
for future studies using the same reinforcement. Several bars were tested, and the average
material behaviour of the reinforcement is shown in Figure 8.1.
Figure 8.1 	Structural behaviour of the tested reinforcement bars and average value.
The measured properties of the concrete were however not used since the properties of the
concrete varies slightly from each batch. Instead, the target values for the concrete when
casting the new concrete were used. The properties are presented in Table 8.1.
0
100
200
300
400
500
600
700
0 	20 	40 	60 	80 	100 	120 	140
Steel stress,
 	σs [MPa]
Steel strain, 	εs 	[‰]
Bar A
Bar B
Bar C
Bar D
Bar E
Bar F
Bar G
Average value

-- 89 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	74
Table 8.1 	Target values for the material properties of concrete used in Jönsson and
Stenseke (2018).
Parameter 	Value
Compressive mean strength, 𝑓௖௠ [MPa] 	36
Tensile mean strength, 𝑓௖௧௠ [MPa] 	2.8
Young’s modulus, 𝐸௖௠ [GPa] 	32.0
In the 2DOF model, the ultimate strength of the reinforcement was used as the limit in the
elasto-plastic curve. The ultimate strength was chosen instead of the yield strength since
static tests performed by Jönsson and Stenseke (2018) showed that the static capacity of the
beams was higher than expected. Furthermore, this limit was used when calculating the input
data for the Abaqus model. In the LS-DYNA model, the structural behaviour of the
reinforcement was modelled as multilinear and adopted to the real behaviour. The elasto-
platic behaviour as well as the multilinear curve used in LS-DYNA are shown in Figure 8.2
together with the average relation of the stress-strain curve for the reinforcement. Based on
this new data, all the needed parameters for the models were calculated, see Appendix C. All
the input data for the different models are presented in Appendix A.
Figure 8.2 	Structural behaviour of the reinforcement from tests and in the different
models.
0
100
200
300
400
500
600
700
0 	20 	40 	60 	80 	100 	120
Steel stress,
 	σs [MPa]
Steel strain, 	εs 	[‰]
Elasto-plastic
Average value from tests
Multilinear

-- 90 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	75
8.3 Parametric studies in 2DOF and Abaqus
8.3.1 Studied cases
In the parametric study, different load cases were created combining different masses and
drop heights of the drop weight. It was of interest to see how the response of the models was
affected by different combinations of the mass and drop height resulting in the same kinetic
energy before impact. In Table 8.2, the different load cases that were studied are presented.
The darker grey boxes represent twice the kinetic energy of the drop weight just before
impact compared to the lighter grey boxes. All load cases were studied for nine different
beams with properties presented in Table 8.3.
Table 8.2 	Load cases studied in the 2DOF and Abaqus models combining mass and
drop height of the drop weight.
Drop height of the drop weight
ℎ [m]
1.25 	2.5 	5 	10 	20 	40
Mass of drop weight
𝑚 	[kg]
2.5 	E 	J
5 	D 	I
10 	C 	H
20 	B 	G
40 	A 	F
Table 8.3 	Properties of the beams studied in the parametric studies.
Beam
Width, 𝑏 [m] Height, ℎ [m] Length, L [m] 	Reinforcement
0.1 	0.2 	0.1 	0.2 	1.0 	2.0 	2ϕ5 	2ϕ6 	2ϕ8 	4ϕ6
1 	● 	● 	● 	●
2 	● 	● 	● 	●
3 	● 	● 	● 	●
4 	● 	● 	● 	●
5 	● 	● 	● 	●
6 	● 	● 	● 	●
7 	● 	● 	● 	●
8 	● 	● 	● 	●
9 	● 	● 	● 	●

-- 91 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	76
To change the mass of the drop weight in Abaqus and the 2DOF model for the different load
cases in the parametric study, only the point mass was altered. This corresponds to that the
density of the drop weight would be modified, while in practise it is more reasonable to
modify the height of the drop weight. When the height is changed, the stiffness is as well.
However, since the study in Appendix D showed that a change of the stiffness of the
interaction between the weight and the beam in this range does not influence the response of
the beam significantly, the stiffness is kept the same when the mass is altered.
8.3.2 Complete results for one selected beam
The time-displacement curves from all the load cases for Beam 2 can be seen in Figure 8.3.
Comparing 2DOF and Abaqus, the overall look of the curves is similar. In Appendix F,
Section F.2, the results can be found for all beams and the appearance have the same
correspondence.
Figure 8.3 	Time-displacement relation for all load cases for Beam 2. The upper graph is
from the 2DOF model and the lower one from the Abaqus model.
0
20
40
60
80
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
20
40
60
80
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 92 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	77
It can be seen that a larger mass of the drop weight, 𝑚௪, gives larger displacements in both
2DOF and Abaqus. This may be related to the expression for the external work performed on
the system in a plastic impact, which is calculated as:
𝑊௬ = 𝑚௪
𝑚௪ + 𝑚௕
𝐸௞,଴ 	(8.1)
To evaluate the results more thoroughly, the results from Abaqus and hand calculations were
compared to the results from the 2DOF model with regard to maximum displacement and
transferred energy calculated as described in Appendix F. From the maximum values, the
ratio for the displacements, 𝜂௨ , and the ratio for the energy, 𝜂ௐ೤ , were calculated as
described in equations (7.1) and (7.2). The comparison of results for Beam 2 is presented
together with the values of the maximum displacement in Table 8.4. The values and
comparisons for the other beams are presented in Appendix F.
Table 8.4 	Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations (Calc.) compared to 2DOF for
Beam 2.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 41.3 	42.1 	41.4 	1.02 	1.00 	1.02 	1.00
B 	20 2.5 35.7 	36.0 	35.8 	1.01 	1.00 	1.01 	1.00
C 	10 	5 	28.1 	28.9 	28.3 	1.03 	1.01 	1.03 	1.01
D 	5 	10 	20.1 	20.7 	20.3 	1.03 	1.01 	1.03 	1.01
E 	2.5 20 	13.3 	15.2 	13.4 	1.14 	1.01 	1.17 	1.01
F 	40 2.5 80.3 	79.2 	80.5 	0.99 	1.00 	0.99 	1.00
G 	20 	5 	68.8 	67.8 	69.3 	0.99 	1.01 	0.99 	1.01
H 	10 10 	53.5 	54.0 	54.4 	1.01 	1.02 	1.01 	1.02
I 	5 	20 	37.6 	40.1 	38.4 	1.07 	1.02 	1.07 	1.02
J 	2.5 40 	24.2 	27.7 	24.6 	1.15 	1.02 	1.16 	1.02
In this load case the correspondence of the results is quite good, especially the 2DOF in
comparison with the hand calculation. This shows that the resistance limit of 50 kN used
here, see Section 7.3.1, is a valid assumption to capture a plastic response. In comparison
with the Abaqus result, the correspondence is good for most load cases, but a trend can be
seen that the correspondence is less accurate when the mass of the drop weight becomes
smaller in relation to the mass of the beam. Hence, the assumption of a plastic impact in the
hand calculations and the choices made for the 2DOF system are valid approximations when
the mass ratio of the weight and the beam is higher.

-- 93 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	78
8.3.3 Overall comparison of 2DOF and hand calculations
In Figure 8.4 and Figure 8.5, the comparisons with regard to energy in the hand calculations
compared to 2DOF for all beams and all load cases are presented. As for Beam 2, the
correspondence is good in all cases except for Beam 5. This is discussed more further down.
Figure 8.4 	Comparison of transferred energy from the hand calculations compared to
2DOF for load cases A-E.
Figure 8.5 	Comparison of transferred energy from the hand calculations compared to
2DOF for load cases F-J.
0.00
0.20
0.40
0.60
0.80
1.00
1.20
Load case
A
Load case
B
Load case
C
Load case
D
Load case
E
𝜂𝑊𝑦 	[-]
Beam 1
Beam 2
Beam 3
Beam 4
Beam 5
Beam 6
Beam 7
Beam 8
Beam 9
0.00
0.20
0.40
0.60
0.80
1.00
1.20
Load case
F
Load case
G
Load case
H
Load case
I
Load case
J
𝜂𝑊𝑦 	[-]
Beam 1
Beam 2
Beam 3
Beam 4
Beam 5
Beam 6
Beam 7
Beam 8
Beam 9

-- 94 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	79
Since the 2DOF model was created and calibrated to fit Beam 2, as described in
Section 7.3.1, one reason for the deviation of Beam 5 showed to be that the resistance limit
for the interaction between the drop weight and the beam, 𝑅௠,௪ , was not accurate. In
Figure 8.6, a new calibration of the resistance limit for Beam 5 is presented. The load case
that had the worst correspondence, i.e. load case J, was chosen for the calibration.
Figure 8.6 	Difference in response depending on how the resistance limit of the spring
representing the interaction for Beam 5.
The result of the calibration for Beam 5 shows that the range, for which the resistance limit,
𝑅௠,௪, is accurate, is higher than for Beam 2. Here a value of about 100 – 200 kN seems to be
more accurate. This means that 𝑅௠,௪ = 50 kN is not the best choice for the resistance limit
for Beam 5. When instead a resistance limit of 100 kN or 200 kN was chosen, the
correspondence with the hand calculation was also improved significantly, see Table 8.5.
Table 8.5 	Displacement and quota between the result from hand calculations and 2DOF
for different resistance limit for the interaction between the weight and beam.
𝑅௠,௪ [kN] 	𝑢 [mm] 	𝜂௨ [-] 	𝜂ௐ೤ [-]
50 	14.4 	1.14 	1.14
100 	15.9 	1.03 	1.03
200 	16.4 	1.00 	1.00
It was of interest to investigate why Beam 5 required another resistance limit for the
interaction between the drop weight and the beam. Things that separate the different beams
and affect the response are their mass, 𝑚௕, stiffness, 𝑘௕, and capacity, 𝑅௠,௕. An attempt to
investigate which one of these properties that has the largest effect of the resistance limit for
the interaction between the weight and the beam, 𝑅௠,௪, was made. Since the mass is the same
0
5
10
15
20
25
0 	5 	10 	15 	20
Displacement,
 	u [mm]
Time, 	t 	[ms]
Rm,w=1000 kN
Rm,w=500 kN
Rm,w=200 kN
Rm,w=100 kN
Rm,w=50 kN
Rm,w=20 kN

-- 95 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	80
for Beam 4-9, this difference was excluded. The stiffness, 𝑘௕, and the resistance limit, 𝑅௠,௕,
for Beam 5 are both much higher than for the other beams. Due to this, two beams with
almost the same resistance limit, and different stiffnesses were chosen for the comparison
(Beam 4 and Beam 9). The properties of these beams are presented in Table 8.6. It could be
seen in Figure 8.4 and Figure 8.5, that the load also has an influence since the correspondence
is better for some load cases, therefore load case J was chosen for all the beams in this
investigation. The calibration of Beam 4 and 9 is presented in Figure 8.7 and Figure 8.8.
Table 8.6 	Stiffness and resistance limit for the beams in the calibration study.
Beam 	𝑘௕ [N/m] 	𝑅௠,௕ [kN]
4 	2.59·106 	10.68
5 	13.33·106 	24.42
9 	0.50·106 	9.62
Figure 8.7 	Difference in response depending on how the resistance limit of the spring
representing the interaction for Beam 4.
0
10
20
30
40
50
60
0 	10 	20 	30 	40
Displacement,
 	u [mm]
Time, 	t 	[ms]
Beam 4
Rm,w=1000 kN
Rm,w=500 kN
Rm,w=200 kN
Rm,w=100 kN
Rm,w=50 kN
Rm,w=20 kN

-- 96 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	81
Figure 8.8 	Difference in response depending on how the resistance limit of the spring
representing the interaction for Beam 9.
From this limited comparison it is difficult to draw a clear conclusion. However, for Beam 4
a value of 50 – 200 kN for the resistance limit, 𝑅௠,௪, is acceptable while for Beam 9, a value
of 20 kN and 500 kN is almost acceptable as well. Since they have almost the same capacity,
𝑅௠,௕, this indicates that the stiffness has an influence. The lower the stiffness, the larger the
span of acceptable values to be used for 𝑅௠,௪ in a 2DOF model. However, further and more
extensive evaluations need to be conducted but is not further done in this report.
Furthermore, this calibration study indicates that when the capacity of the beam is changed,
the resistance limit for the interaction between the weight and the beam should be calibrated
for each separate beam.
0
10
20
30
40
50
60
70
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u [mm]
Time, 	t 	[ms]
Beam 9
Rm,w=1000 kN
Rm,w=500 kN
Rm,w=200 kN
Rm,w=100 kN
Rm,w=50 kN
Rm,w=20 kN

-- 97 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	82
8.3.4 Overall comparison of 2DOF and Abaqus
In Figure 8.9 and Figure 8.10, the comparisons with regard to energy in Abaqus and 2DOF
for all beams and all load cases are presented. A deviation for the different beams can be seen
within each load case. In the Abaqus model a more realistic behaviour including the wave
propagation effect is captured, but in the 2DOF model it is not. The deviation between the
2DOF model and Abaqus model is larger for the longer beams, which is an indication of this
may be one reason for these deviations.
Figure 8.9 	Comparison of transferred energy calculated from Abaqus compared to 2DOF
for load cases A-E.
Figure 8.10 Comparison of transferred energy calculated from Abaqus compared to 2DOF
for load cases F-J.
The result deviates more when the drop height of the drop weight was increased, and the
mass of the drop weight decreased. Looking at load case E and J that have the same mass of
the drop weight, they correspond better than E and I that have the same velocity. This
indicates that the mass of the drop weight influences more than the velocity. When the mass
of the weight, 𝑚௪, is decreased, the quota between the mass of the drop weight and the total
mass decreases. This can be connected to that the external work on the system, calculated as
0.00
0.50
1.00
1.50
Load
case A
Load
case B
Load
case C
Load
case D
Load
case E
𝜂𝑊𝑦 	[-]
Beam 1
Beam 2
Beam 3
Beam 4
Beam 5
Beam 6
Beam 7
Beam 8
Beam 9
0.00
0.50
1.00
1.50
Load
case F
Load
case G
Load
case H
Load
case I
Load
case J
𝜂𝑊𝑦 	[-]
Beam 1
Beam 2
Beam 3
Beam 4
Beam 5
Beam 6
Beam 7
Beam 8
Beam 9

-- 98 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	83
described in equation (8.1), decreases. This indicates that when the mass ratio decreases, the
assumption of a plastic impact is no longer valid to capture the realistic response of the beam
regarding the time dependency.
Beam 5 deviates from the pattern, but this can be explained by the choice of resistance limit
in the 2DOF model, as discussed in Section 8.3.3. If the resistance limit was chosen to
200 kN instead of 50 kN, the displacements for load case H would be in the same range as the
other beams, see Figure 8.11.
Figure 8.11 Load case H for all beams when Rm,w for Beam 5 is updated.
A suggestion of how to avoid these deviations between the models can be to use time
dependent transformation factors where the mass and resistance of the beam is changed with
time. Thereby, an elastic spring for the interaction between the drop weight and the beam
could be used in the 2DOF model as in Abaqus. Thereby the wave propagation effects would
be included and the problem with choosing the correct resistance limit would be solved.
0.00
0.50
1.00
1.50
Load case H
Beam 1
Beam 2
Beam 3
Beam 4
Beam 5
Beam 6
Beam 7
Beam 8
Beam 9

-- 99 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	84
8.4 Parametric studies in LS-DYNA
Due to the extensive computing time in LS-DYNA, the parametric study was limited to
mainly load case F-J for Beam 1-3. For comparison, though, load case A-E for Beam 2 were
analysed as well, see Table 8.7 and Table 8.8. When the mass of the drop weight was
changed in LS-DYNA the density was modified to give the correct value of the mass instead
of changing the height of the drop weight.
Table 8.7 	Load cases studied in LS-DYNA.
Drop height of the drop weight
ℎ [m]
1.25 	2.5 	5 	10 	20 	40
Mass of drop weight
𝑚 	[kg]
2.5 	E 	J
5 	D 	I
10 	C 	H
20 	B 	G
40 	A 	F
Table 8.8 	Beams studied in LS-DYNA.
Beam
Width, 𝑏 [m] Height, ℎ [m] Length, L [m] 	Reinforcement
0.1 	0.2 	0.1 	0.2 	1.0 	2.0 	2ϕ5 	2ϕ6 	2ϕ8 	4ϕ6
1 	● 	● 	● 	●
2 	● 	● 	● 	●
3 	● 	● 	● 	●
The time-displacement curves from the analyses of Beam 2 for the load case A-J can be seen
in Figure 8.12. In the same way as for the simplified analyses, the largest mass gives the
largest displacements. This can be observed for Beam 1 and 3 as well, see Appendix G.

-- 100 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	85
Figure 8.12 Time-displacement curves for Beam 2 for load case A-J.
The crack pattern from the time of maximum displacement for load case A-E for Beam 2 can
be seen in Table 8.9, and load case F-J in Table 8.10.
In load case A-E the magnitude of the kinetic energy before impact is halved compared to
load case F-J, which leads to less extensive cracking. The differences of the cracks depending
on a high mass or a high velocity for the gentler cases are not as distinct as for the severe
cases.
Comparing load case F-J, higher impact velocity caused more extensive shear cracks. There
are more cracks in the middle section for the cases with higher velocity and they have a lower
inclination. In the rest of the beam, there are fewer cracks due to the smaller displacement
compared to the cases with a higher mass of the drop weight. These tendencies can be
observed for Beam 1 and 3 as well, see Appendix G.
0
10
20
30
40
50
60
70
80
90
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
m=40kg, h=2.5m
m=20kg, h=5m
m=10kg, h=10m
m=5kg, h=20m
m=2.5kg, h=40m
m=40kg, h=1.25m
m=20kg, h=2.5m
m=10kg, h=5m
m=5kg, h=10m
m=2.5kg, h=20m

-- 101 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	86
Table 8.9 	Crack pattern at the time om maximum displacement for load case A-E for
Beam 2.
Load case 	Crack pattern
A
B
C
D
E
Principle
strain
[%]

-- 102 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	87
Table 8.10 Crack pattern at the time om maximum displacement for load case F-J for
Beam 2.
Load case 	Crack pattern
F
G
H
I
J
Principle
strain
[%]
In the load cases with high impact velocity, extruded parts of the beam can be observed, see
Figure 8.13. The extruded parts appear in the middle of the beam, in and under the impact
zone. These may represent concrete that is spalled of due to the pressure wave caused by the
high velocity impact. An argument for this is that the extruded parts continue to grow during
the entire analysis, even after the beam has reached its maximum displacement.
Figure 8.13 Visualization of the extruded parts appearing in Beam 2, load case J.
A possible improvement of the model could be to include so called erosion of elements, so
that elements with a strain large enough to make them disconnected from the other elements
are removed. In this way the extrusion of parts might be avoided.

-- 103 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	88
When the different load cases were analysed in LS-DYNA, there were trouble with
convergence in some cases, probably due to concrete compressive failure, and the analyses
did not reach the timestep of maximum displacement. In some cases, the extruded parts could
be a contributing factor, but there was no indication that this would be the main reason since
it was not observed at all in several cases with convergence issues. Instead, the compressive
failure variable, 𝜀௙௖ , was increased for the cases with convergence issues. This was
considered to be acceptable since the post peak behaviour of local compressive failure was
not of interest and should not influence the global result significantly.
In Appendix E an evaluation of how the displacements and the crack patterns are influenced
by an increase of two, five and ten times the standard value of the compressive failure
variable is made. The conclusion is that the influence was not significant. In the parametric
study, the standard value was used if no converges issues arose before the maximum
displacement was reached. If it did, the compressive damage variable was first increased to
two times the standard value, secondly five times and thirdly ten times. The different values
that were finally used in the analyses presented in this report can be seen in Table 8.11.
Table 8.11 Summary of the values that have been used of the compressive damage
variable for the different beams and load cases, 0.001 being the standard
value in this project.
Beam 	Load case 	𝜀௙௖ [-]
1
F 	0.005
G 	0.002
H 	0.010
I 	-
J 	-
2
A 	0.001
B 	0.001
C 	0.001
D 	0.001
E 	0.001
F 	0.002
G 	0.001
H 	0.002
I 	0.002
J 	0.002
3
F 	0.001
G 	0.001
H 	0.002
I 	0.005
J 	0.005

-- 104 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	89
There was no obvious correlation between the load case and the value of the compressive
damage variable that was needed, but for higher velocities, a higher value was often required.
However, in the less severe load cases for Beam 2, the standard value of the compressive
damage variable could be used. This implies that not only the impact velocity, but also the
total loading affects how the variable should be chosen.
For load case I and J for the weakest beam (Beam 1), the analyses stopped after
approximately 1-2 milliseconds for all four values of the compressive damage variable. In
Abaqus and the 2DOF model, they reach maximum displacement after approximately 14
milliseconds for load case I and approximately 11 milliseconds for load case J. These cases
are the ones with the highest velocity right before impact and theses load cases have required
a higher value for the compressive damage variable for Beam 2-3 as well. In the analyses for
these two load cases the compressive damage variable was not increased above the studied
values and the reasons for the issues were not further investigated. The analyses for these two
load cases were instead ran with the value of 𝜀௙௖ = 0.01 until convergence issues arose.
8.5 Comparison between models
To compare the results from LS-DYNA to the results from the simplified model, ratios for
the maximum displacements were calculated. In this case, energy calculations were excluded
since the final force-displacement relation in LS-DYNA is unknown.
𝜂௨,௅ௌି ஽௒ே஺ = 𝑢௅ௌି ஽௒ே஺
𝑢௜
𝑖 = 2DOF, Abaqus 	(8.2)
In Figure 8.14 load case A-E for Beam 2 are compared to Abaqus and in Figure 8.15 load
case F-J for Beam 1-3 are compared.
Figure 8.14 The maximum displacement in LS-DYNA compared to in Abaqus for Beam 2,
load case A-E.
0.00
0.20
0.40
0.60
0.80
1.00
1.20
1.40
Load
Case A
Load
Case B
Load
Case C
Load
Case D
Load
Case E
𝜂u,LS-DYNA
 	[-]
Beam 2

-- 105 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	90
Figure 8.15 The maximum displacement in LS-DYNA compared to in Abaqus for all
beams, load case F-J.
In general, the LS-DYNA model gave smaller displacements than the simplified models. For
the more severe load cases with high velocity, the displacements from LS-DYNA approach
the displacements from Abaqus, and for some cases, even exceed them. For these load cases
extensive shear cracks can be observed in middle of the beam, see Table 8.10. These
extensive cracks lead to a lowering of the capacity and a softer behaviour of the beam and
may be an explanation for this deviation. There are also indications of that crushing of
concrete in the impact zone could be more extensive in these cases, which also lowers the
capacity and creates a softer behaviour.
For the less severe cases, A-E, the deviation is not as prominent and to take a closer look at
this, the gentler load cases were compared to the severe load cases for Beam 2 in Figure 8.16.
The comparison indicates that the relation between LS-DYNA and Abaqus is more constant
when the load level is lower. It could also be seen in Table 8.9 that there is a smaller variation
in crack pattern for these load cases.
0.00
0.20
0.40
0.60
0.80
1.00
1.20
1.40
Load
Case F
Load
Case G
Load
Case H
Load
Case I
Load
Case J
𝜂u,LS-DYNA
 	[-]
Beam 1
Beam 2
Beam 3

-- 106 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	91
Figure 8.16 Comparison of LS-DYNA to Abaqus for Beam 2, Load cases A-E and F-J.
This indicates that the LS-DYNA model can represent the behaviour of lowered capacity due
to cracking or crushing of concrete more realistically. However, since no experiments have
been conducted on the different beams and load cases, it cannot be determined how reliable
the results from the LS-DYNA model are.
0.00
0.20
0.40
0.60
0.80
1.00
1.20
1.40
Load Cas e F 	Load Cas e G 	Load Cas e H 	Load Cas e I 	Load Cas e J
𝜂u,LS-DYNA
 	[-]
Load Case A-E
Load case F-J

-- 107 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	92
9 Final Remarks
9.1 Conclusions
This project aimed to increase the understanding of dynamically loaded structures by using
different levels of numerical modelling. The 2DOF system proved to give different levels of
accuracy for different beams and load cases compared to the beam element model in Abaqus
where a more realistic behaviour is captured. One thing that the Abaqus model cannot capture
is the cracking which proved to have an influence of the results in comparison to the LS-
DYNA model.
In the 2DOF model, a plastic impact was assumed. It was discovered that the suitable range
for the value for the resistance limit of the spring, representing the interaction between the
drop weight and the beam, varied mainly depending on properties of the beam, such as the
stiffness and the capacity. To use this kind of 2DOF model, it was found to be necessary to
calibrate the model for each separate case.
Results from the 2DOF model and the Abaqus model for cases with the same kinetic energy
before impact were compared. It could be seen that for the cases when the mass of the drop
weight was small in relation to the beam, the results differed more. This indicates that the
assumption of a plastic impact in the 2DOF model was not valid to capture a more realistic
behaviour in these cases.
The time dependency of the response of the beam is captured in the Abaqus model, but not in
the 2DOF model. It is believed that using time dependent transformation factors would make
it possible to model the spring, representing the interaction between the drop weight and the
beam, in the 2DOF model as elastic. Thereby, the problems with the value for the resistance
limit could be solved. Time dependent transformation factors in the 2DOF model would also
make it possible to capture a behaviour similar to that in Abaqus and achieve a model that is
applicable for all load cases.
The further development of the LS-DYNA model by including a bond-slip relation and a
non-linear structural behaviour of the reinforcement gave satisfying results. In the parametric
study, it was concluded that there is a need to further develop the model to be able to analyse
all kind of load cases since convergence issues arose for some analyses. In some of these
cases the issues where to some extent solved by increasing the variable describing the
descending branch of the post-peak behaviour of concrete in compression. In the parametric
study using the LS-DYNA model of the severe load cases, a high velocity showed to give
more extensive shear cracks in the middle section of the beam and crushing of concrete in the
impact zone. For these cases, the difference between the LS-DYNA model and the Abaqus
model also showed a deviant trend. It is therefore believed that this deviation can be an
indication that the LS-DYNA model captures the lowering of capacity due to cracking and
crushing of concrete and thereby a more realistic behaviour.
9.2 Future studies
In this project bond-slip, by the built-in function CONSTRAINED in LS-DYNA, as well as a
nonlinear structural behaviour of the reinforcement were included. However, further
development of the model could be made as a future study. The different ways of modelling
bond-slip could be evaluated. The description of the structural behaviour of the reinforcement
can be further developed by including an ultimate strain where the bar would be torn off.

-- 108 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	93
Furthermore, the model used in this thesis showed convergence issues and the problem
behind this is a question to be answered.
In future studies it would be of interest to include erosion of elements in the LS-DYNA
model since it could be seen in this study that parts of the beam were extruded. Including
erosion leads to that elements with a strain large enough to make them disconnected from the
other elements are removed. The extrusion can probably be spalling of concrete and when
these elements would be removed a more realistic behaviour might be obtained.
In this thesis, a simplified way of model the stiffness for the spring representing the
interaction between the weight and the beam was used. A brief study of the use of contact
mechanics was conducted but not applicated in this project. However, a further evaluation of
how this more advanced and realistic way of modelling the stiffness would be of interest.
The parametric study showed that the 2DOF model used in this project is sensitive to some
parameters. It was discovered that the suitable range of the resistance limit for the interaction
between the drop weight and the beam change depending on the properties on the weight. It
would be of interest to evaluate which parameters that affect the model and how to be able to
make it applicable for a general case.
However, it would be desirable to have a 2DOF model of universal application. An idea of
how to achieve this can be by including time dependent transformation factors and to use an
elastic spring for the interaction between the drop weight and the beam. Thereby a response
of the beam similar to that obtained in the Abaqus model (i.e. considering wave propagation
effects) could be simulated.
From the parametric study that was made, some of the studied load cases and beams would
be interesting to conduct experiments on, even though many of the load cases would be hard
to realise. Performing more experiments could give a further indication of when the models
are valid. Since it was seen that when the results from the 2DOF model deviated when the
mass of the drop weight was small in relation to the mass of the beam, it would be of interest
to conduct experiments on heavier beams. It would also be interesting to conduct experiments
on beams with different relations between the height and the length than the beams that have
been included in previous experiments.

-- 109 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	94
10 References
Andersson, J. and Antonsson, J. (2015). Design with Regard to Collision Impact,
Gothenburg: Chalmers University of Technology.
Andersson, S. and Karlsson, H. (2012). Structural response of reinforced concrete beams
subjected to explosions, Gothenburg: Chalmers University of Technology.
Biggs, J. M. (1964). Introduction to structural dynamics. New York: McGraw-Hill.
CEB-FIP12 (2012). CEB-FIP Model Code 2010, Design code. fib Bulletin 65, Volume 1.
CEB-FIP91 (1991). CEB-FIP Model Code 1990, Design Code. London: s.n.
Chen, Y. and May, I. M. (2009). Reinforced concrete members under drop-weight impacts.
Strutures and Buildings, 162(SB1), pp. 45-56.
Craig, R. R. and Kurdila, A. J. (2006). Fundamentals of structural dynamics. Second Edition
ed. New Jersey: Wiley.
Dassault Systems, Simulia (2014a). Abaqus/CAE User's Guide. [Online]
Available at: http://abaqus.software.polimi.it/v6.14/books/usi/default.htm
[Accessed 02 03 2018].
Dassault Systems, Simulia (2014b). Abaqus Analysis User's Guide. [Online]
Available at: http://abaqus.software.polimi.it/v6.14/books/usb/default.htm
[Accessed 020318].
Dassault Systems, Simulia (2014c). Abaqus Theory Guide. [Online]
Available at: http://abaqus.software.polimi.it/v6.14/books/stm/default.htm
[Accessed 020318].
Ekström, J. (2017). Blast and Impact Loaded Concrete Structures, Gothenburg: Chalmers
University of Technology.
Engström, B. (2014). Restraint cracking of reinforced concrete structures, Gothenburg:
Chalmers university of technology .
Engström, B. (2015). Design and analysis of continuous beams and columns, Gothenburg:
Chalmers University of Technology.
Fujikake, K., Senga, T., Ueda, N., Ohno, T. and Katagiri, M. (2006). Study on Impact
Response of Reactive Powder Concrete Beam and Its Analytical Model. Journal of
Advanced Concrete Technology, 4(1), pp. 99-108.
Grassl, P., 2016. petergrassl.com. [Online] Available at:
http://petergrassl.com/tempFiles/MAT_CDPM_Grassl.pdf [Accessed 120318].
Grassl, P., Johansson , M. and Leppänen, J. (2018). On the Numerical Modelling of Bond for
the Failure Analysis of Reinforced Concrete. Engineering Fracture Mechanics, Volume
189, pp. 13-26.
Grassl, P., Xenos, D., Nyström, U., Rempling, R. and Gylltoft, K. (2013). CDPM2: A
damage-plasticity approach to modelling the failure of concrete. International Journal of
Solids and Structures, 50(24), pp. 3805-3816.
Johansson, M. (2000). Structural behaviour in concrete frame corners of civil defence
shelters - Non-linear finite element analyses and experiments, Gothenburg: Chalmers
University of Technology.

-- 110 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	95
Johansson, M. (2014). B03-101, Beräkning av impulsbelastad konstruktion - Strukturrespons vid
impulsbelastning. [Online]
Available at: https://www.msb.se/sv/Insats--beredskap/Hantera-olyckor--
kriser/Skyddsrum/Berakningar-losningar-och-komponenter/
[Accessed 020218].
Johansson, M. (2014). Beräkningsmetodik stötlast (Working document), Gothenburg:
Norconsult AB
Johansson, M. and Laine, L. (2012). Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Del 3 - Kapacitet hos byggnader, Gothenburg: Myndigheten för
samhällsskydd och beredskap.
Johansson, M., Leppänen, J., Jansson, H. and Ekengren, B. (2014). Seminarium om
impulsbelastade konstruktioner 2014, Gothenburg: Myndigheten för samhällsskydd och
beredskap.
Jönsson, J. and Stenseke, A. (2018). Concrete Beams Subjected to Repeated Drop-Weight
Impact and Static Load, Gothenburg: Chalmers University of Technology.
Lockhart, E. (2017). Modelling the Failure of Reinforced Concrete Subjected to Dynamic
Loading Using CDPM2 in LS-DYNA, Glasgow: University of Glasgow.
Lovén, J. and Svavarsdóttir, E. S. (2016). Concrete beams subjected to drop weight impact,
Gothenburg: Chalmers University of Technology.
Lozano Mendoza, F. and Makdesi Aphram, J. (2017). Concrete Beams Subjected to
Drop-Weight Impact and Static Load, Gothenburg: Chalmers University of Technology.
LSTC (2014a). LS-DYNA Keyword User's Manual - Volume I R7.1. California: Livermore
Software Technology Corporation.
LSTC (2014b). LS-DYNA Keyword User's Manual - Volume II R7.1. California: Livermore
Software Technology Corporation.
LSTC (2017). LS-DYNA Keyword User's Manual - Volume I R10.0. California: Livermore
Software Technology Corporation.
LSTC (2018). LS-DYNA Theory Manual. California: Livermore Software Technology
Corporation .
Plos, M. (2000). Finite element analyses of reinforced concrete structures, Gothenburg:
Chalmers University of Technology.
Yi, W.-J., Zaoh, D.-B. and Kunnath, S. K. (2016). Simplified Approach for Assessing Shear
Resistance of Reinforced Concrete Beams under Impact Loads. ACI STRUCTURAL
JOURNAL, 113(4), pp. 747-756.

-- 111 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	A-1
Appendix A 	Material input data
A.1 Input data to the 2DOF model for validation
The material input data used in the 2DOF model for validation, made in Sections 7.3 and 7.4,
is presented in Table A-1 and Table A-2.
Table A-1 	Material parameters for the beam in the 2DOF model.
Parameter 	Value
Mass density, 𝜌 [kg/m3] 	2400
Stiffness, 𝑘௕ [N/m] 	2.405·106
Resistance limit, 𝑅௠ [kN] 	10.377
Table A-2 	Parameters for the weight and the interaction between the weight and the
beam in the 2DOF model.
Parameter 	Value
Mass of the weight, 𝑚 [kg] 	10.093
Stiffness, 𝑘௪ [N/m] 	3.99·109
Resistance limit, 𝑅௠ [kN] 	50
Initial velocity, 𝑣଴ [m/s] 	10.35
To calculate the resistance limit for the beam, the simplification of the structural behaviour of
the reinforcement seen in Figure A-1 was used. The resistance limit is based on a value for
the yield stress of the reinforcement which is approximated to 610 MPa.
Figure A-1 The mean value from the tensile test of the reinforcement in comparison with
the elasto-plastic behaviour used in the simplified models.
0
100
200
300
400
500
600
700
800
0 	20 	40 	60 	80 	100
Steel stress,
 	σs [MPa]
Steel strain, 	εs 	[‰]
Elasto-plastic
Mean value from test results

-- 112 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	A-2
A.2 Input data in Abaqus for validation
In Table A-3 and Table A-4, the material input data used in Abaqus for validation of the
model, made in Sections 7.3 and 7.4, is presented. The units used in Abaqus are presented in
Section 5.3.1, Table 5.2.
Table A-3 	Material input parameters for the drop weight.
Element 	Parameter 	Value
Bar
Density, ρ [kg/m3] 	5 000
Height, ℎ [mm] 	50
Young’s modulus, 𝐸 [GPa] 	133 100
Corresponding stiffness, 𝑘௕௔௥ [N/m] 	4.342e12
Yield stress, 𝑓௬ [MPa] 	50
Fictitious area, 𝐴 [m2] 	0.001
Point mass Mass, 𝑚 [kg] 	10.093
Initial velocity, 𝑣଴ [m/s] 	10.35
Spring 	Stiffness, 𝑘௦௣௥௜௡௚ [N/m] 	4.0e9
Table A-4 	Material input parameters for the beam in Abaqus.
Parameter 	Value
Mass density, 𝜌 [kg/m3] 	2 400
Equivalent Young’s modulus, 𝐸௘௤ [GPa] 6.0
Poisson’s ratio, 𝑣 [-] 	0.2
Equivalent yield stress, 𝑓௬.௠௢ௗ [MPa] 	15.57

-- 113 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	A-3
A.3 Input data in LS-DYNA for validation
The material input data used in LS-DYNA for validation of the model, made in Sections 7.5
and 7.6, is presented in Table A-5 to Table A-9. The units used in LS-DYNA are presented in
Section 6.2, Table 6.1.
Table A-5 	Material parameters in LS-DYNA for CDPM2
LS-DYNA notation Parameter 	Value
RO 	Mass density, 𝜌 [kg/m3] 	2 400
E 	Young’s modulus, 𝐸௖ [GPa] 	34.7
PR 	Poisson’s ratio, 𝑣 [-] 	0.2
ECC 	Eccentricity parameter, 𝑒 [-] 	0.516
FT 	Uniaxial tensile strength, 𝑓௧ [MPa] 	3.28
FC 	Uniaxial compressive strength, 𝑓௖ [MPa] 45.5
HP 	Hardening parameter [-] 	0.01
WF 	Ultimate crack width, 𝑤௙ [mm] 	0.086
TYPE 	Type of tensile damage Bi-linear
[1.0]
EFC 	Compressive damage variable [-] 	0.001
Table A-6 	Material parameters in LS-DYNA for the reinforcement.
LS-DYNA notation Parameter 	Value
RO 	Mass density, 𝜌 [kg/m3] 	7 850
E 	Young’s modulus, 𝐸௖ [GPa] 	200
PR 	Poisson’s ratio, 𝑣 [-] 	0.3
TS1 	Diameter of bar, ϕ [mm] 	6
TS2 	Diameter of bar, ϕ [mm] 	6
Table A-7 	Parameters in LS-DYNA for the bilinear structural behaviour of the
reinforcement.
LS-DYNA notation Parameter 	Value
SIGY 	Yield stress, 𝑓௬ [MPa] 	609.8
ETAN 	Tangent modulus, 𝐸௧௔௡[MPa] 	584
E 	Young’s modulus, 𝐸௖ [GPa] 	200

-- 114 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	A-4
Table A-8 	Parameters in LS-DYNA for the nonlinear structural behaviour of the
reinforcement. This reinforcement was used in tests in 2016.
LS-DYNA notation Parameter 	Value
E 	Young’s modulus, 𝐸௖ [GPa] 	200
ES1 	Stress, σ1 [MPa] 	450
ES2 	Stress, σ2 [MPa] 	520
ES3 	Stress, σ3 [MPa] 	550
ES4 	Stress, σ4 [MPa] 	590
ES5 	Stress, σ5 [MPa] 	620
ES6 	Stress, σ6 [MPa] 	650
ES7 	Stress, σ7 [MPa] 	660
ES8 	Stress, σ8 [MPa] 	668
EPS1 	Plastic strain, εpl,1 [‰] 	0.0
EPS2 	Plastic strain, εpl,2 [‰] 	2.1
EPS3 	Plastic strain, εpl,3 [‰] 	4.5
EPS4 	Plastic strain, εpl,4 [‰] 	12.7
EPS5 	Plastic strain, εpl,5 [‰] 	23.9
EPS6 	Plastic strain, εpl,6 [‰] 	45.9
EPS7 	Plastic strain, εpl,7 [‰] 	59.5
EPS8 	Plastic strain, εpl,8 [‰] 	95.8
TS1 	Diameter of bar, ϕ [mm] 	6
TS2 	Diameter of bar, ϕ [mm] 	6
Table A-9 	Material parameters in LS-DYNA for the drop weight and supports.
LS-DYNA notation Parameter
RO 	Mass density, 𝜌 [kg/m3] 	7 753
E 	Young’s modulus [GPa] 	205
PR 	Poisson’s ratio [-] 	0.3

-- 115 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	A-5
A.4 Input data to the 2DOF model 2018
The material input data used in the 2DOF model for the material data from 2018 is presented
in Table A-10 and Table A-11. The input data that was varied is calculated in Appendix C
based on the different parameters.
Table A-10 Material parameters for the beam in the 2DOF model.
Parameter 	Value
Mass density, 𝜌 [kg/m3] 	2 400
Stiffness, 𝑘௕ [N/m] 	Varied
Resistance limit, 𝑅௠,௕ [kN] 	Varied
Table A-11 Parameters for the weight and the interaction between the weight and the
beam in the 2DOF model.
Parameter 	Value
Mass of the weight, 𝑚 [kg] 	Varied
Stiffness, 𝑘௪ [N/m] 	3.99·109
Resistance limit, 𝑅௠,௪ [kN] 	50
Initial velocity, 𝑣଴ [m/s] 	Varied
To calculate the resistance limit for the beam, the simplification of the structural behaviour of
the reinforcement seen in Figure A-2 was used. The resistance limit is based on the mean
value of the ultimate strength of the reinforcement bars which is calculated from the
measured values to 623 MPa.
Figure A-2 Structural behaviour of the reinforcement in the 2DOF model compared to in
the test 2018.
0
100
200
300
400
500
600
700
0 	20 	40 	60 	80 	100 	120
Steel stress,
 	σs [MPa]
Steel strain, 	εs 	[‰]
Elasto-plastic
Test

-- 116 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	A-6
A.5 Input data in Abaqus 2018
In Table A-12 and Table A-13, the material input data used in Abaqus 2018 is presented. The
units used in Abaqus are presented in Section 5.3.1, Table 5.2. The input data that was varied
is calculated in Appendix C based on the different parameters.
Table A-12 Material input parameters for the drop weight in Abaqus 2018.
Element 	Parameter 	Value
Point mass Mass, 𝑚 [kg] 	Varied
Initial velocity, 𝑣଴ [m/s] 	Varied
Spring 	Stiffness, 𝑘௦௣௥௜௡௚ [N/m] 	3.99e9
Table A-13 Material input parameters for the beam in Abaqus 2018.
Parameter 	Value
Mass density, 𝜌 [kg/m3] 	2400
Equivalent Young’s modulus, 𝐸௘௤ [GPa] Varied
Poisson’s ratio, 𝑣 [-] 	0.2
Equivalent yield stress, 𝑓௬.௠௢ௗ [MPa] 	Varied
A.6 Input data in LS-DYNA 2018
The material input data used in LS-DYNA 2018 is presented in Table A-14, Table A-15, and
Table A-16. The units used in LS-DYNA are presented in Section 6.2, Table 6.1.
Table A-14 Material parameters in LS-DYNA for CDPM2 2018.
LS-DYNA notation Parameter 	Value
RO 	Mass density, 𝜌 [kg/m3] 	2400
E 	Young’s modulus, 𝐸௖ [GPa] 	32
PR 	Poisson’s ratio, 𝑣 [-] 	0.2
ECC 	Eccentricity parameter, 𝑒 [-] 	0.518
FT 	Uniaxial tensile strength, 𝑓௧ [MPa] 	2.8
FC 	Uniaxial compressive strength, 𝑓௖ [MPa] 36.0
HP 	Hardening parameter 	0.01
WF 	Ultimate crack width, 𝑤௙ [mm] 	0.124
TYPE 	Type of tensile damage Bi-linear
[1.0]
EFC 	Compressive damage variable 	0.001

-- 117 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	A-7
Table A-15 Material parameters in LS-DYNA for the reinforcement used in tests in 2018.
LS-DYNA notation Parameter 	Value
RO 	Mass density, 𝜌 [kg/m3] 	7800
E 	Young’s modulus, 𝐸௖ [GPa] 	196
PR 	Poisson’s ratio, 𝑣 [-] 	0.3
ES1 	Stress, σ1 [MPa] 	420
ES2 	Stress, σ2 [MPa] 	500
ES3 	Stress, σ3 [MPa] 	520
ES4 	Stress, σ4 [MPa] 	560
ES5 	Stress, σ5 [MPa] 	590
ES6 	Stress, σ6 [MPa] 	610
ES7 	Stress, σ7 [MPa] 	620
ES8 	Stress, σ8 [MPa] 	623
EPS1 	Plastic strain, εpl,1 [‰] 	0
EPS2 	Plastic strain, εpl,2 [‰] 	1.6
EPS3 	Plastic strain, εpl,3 [‰] 	3.6
EPS4 	Plastic strain, εpl,4 [‰] 	12.8
EPS5 	Plastic strain, εpl,5 [‰] 	27.2
EPS6 	Plastic strain, εpl,6 [‰] 	48.0
EPS7 	Plastic strain, εpl,7 [‰] 	75.0
EPS8 	Plastic strain, εpl,8 [‰] 	110.0
TS1 	Diameter of bar, ϕ [mm] 	Varied
TS2 	Diameter of bar, ϕ [mm] 	Varied
Table A-16 Material parameters in LS-DYNA for the drop weight and supports.
LS-DYNA notation Parameter
RO 	Mass density, 𝜌 [kg/m3] 	Varied
E 	Young’s modulus, 𝐸௦ [GPa] 	205
PR 	Poisson’s ratio, 𝑣 [-] 	0.3

-- 118 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	B-1
Appendix B 	Matlab script for the 2DOF model
%% 2DOF
%%
clc
clear all
close all
%%
% Chosen timestep
h=0.01; 	% [ms]
%% Data for the beam
L_b=1000; 	% Length [mm]
b_b=100; 	% Width [mm]
H_b=100; 	% Height [mm]
A_b=b_b*H_b; 	% Area of section [mm^2]
rho_b=2.4e-3; 	% Density [g/mm^3]
g=9.82e-3; 	% [mm/ms^2] Gravity
m_b=rho_b*A_b*L_b; 	% Mass [g]
kel_b=2.3240e3; 	% Stiffness for the bilinear response [N/mm]
Rm_b=10.45e3; 	% Resistance limit [N]
uel_b=Rm_b/kel_b; 	% Maximal elastic displacement [mm]
% Transformation factors (Plastic)
kappampl_b=1/3; 	% For the mass of the beam
kappaFpl_b=1; 	% For the stiffness and force of the beam
kappamFpl_b=1/3; 	% For the ratio mass/force for the beam
uRd_b=100000; 	% Displacment limit [mm]. Set to a large value.
%% Data for the drop weight
v0_1=9.9; 	% Initial velocity for the weight [mm/ms]
H_w=258; 	% Height [mm]
r_w=40; 	% Radius [mm]
A_w=pi*r_w^2; 	% Area of section [mm^2]
E_w=205e3; 	% Youngs modulus [MPa]
m_w=10000; 	% Mass [g]
kel_w=3.99e6; 	% stiffness for elasto-platic response [N/mm]
Rm_w=50e3; 	% Resistance limit [N]
uel_w=Rm_w/kel_w; 	% Maximal elastic displacement [mm]
% Transformation factors (Rectangular shape)
kappampl_w=1; 	% For the ratio mass of the beam
kappaFpl_w=1; 	% For the ratio force and stiffness of the
weight
kappamFpl_w=1; 	% For the ratio mass/force for the weight
uRd_w=100000; 	% Displacment limit [mm]. Set to a large value.
%% Critical Timestep

-- 119 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	B-2
Kel=[kel_w -kel_w; -kel_w kel_w+kel_b]; % Stiffness matrix for the
elastic part
M=[kappamFpl_w*m_w 0; 0 kappamFpl_b*m_b]; % Mass matrix
[L,X]=eigen(Kel,M); 	% Solve for the eigenfrequencies
hcrit_1=2/sqrt(max(L)); 	% Critical timestep 1
hcrit=min(hcrit_1);
% The program is terminated if the timestep is to large
if h>hcrit
fprintf('Choose a timestep that is smaller than %1.1e [ms]',hcrit)
return
end
%% Initial conditions
t=0:h:40; 	% Load duration [ms]
% Force vector, constant and zero.
f=zeros(2,1);
% Initial plastic deformation for the beam
upl_w=0;
upl_b=0;
% Allocate space for the displacement, velocity and acceleration
u=zeros(2,length(t)); 	% [mm]
v=zeros(2,length(t)-1); 	% [mm/ms]
a=zeros(2,length(t)-1); 	% [mm/ms^2]
% Allocate space
upl_b_store=zeros(1,length(t)-1); 	% [m]
R_store=zeros(2,length(t)-1);
Ir=zeros(2,length(t)-1);
Im=zeros(2,length(t)-1);
Ek=zeros(2,length(t)-1);
Wi=zeros(2,length(t)-1);
We=zeros(2,length(t)-1);
% Initial conditions for the system
u0=[0; 0]; 	u(:,1)=u0;
v0=[v0_1; 0]; 	v(:,1)=v0;
a0=inv(M)*(f-Kel*u0); a(:,1)=a0;
% Displacement for timestep n=-1.
uminus1=u0-h*v0+(h^2)*a0/2;
%% Timestep n=0
% Generates n=1
% Relative displacement between the beam and weight
du=u(1,1)-u(2,1);
% Plastic displacement for the weight
if du>uel_w && du>max(u(1,:)-u(2,:))
deltaupl_w=du-max(uel_w,max(u(1,:)-u(2,:)));
else
deltaupl_w=0;
end

-- 120 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	B-3
upl_w=upl_w+deltaupl_w;
% Resistance for the weight
if du<0 || upl_w>uRd_w
R_w=0;
else
R_w=max(0,kel_w*(du-upl_w));
end
R_store(1,1)=R_w;
% Stiffness for the weight
if du==0
ks_w=kel_w;
elseif upl_w>uRd_w
ks_w=0;
else
ks_w=R_w/du;
end
% Plastic displacement for the beam
if u(2,1)>uel_b && (u(2,1)-uel_b)>upl_b 	% Compression plastic
deltaupl_b=u(2,1)-(uel_b+upl_b);
elseif u(2,1)<-uel_b+upl_b 	% Tension plastic
deltaupl_b=-abs(u(2,1)+uel_b-upl_b);
else
deltaupl_b=0;
end
upl_b=upl_b+deltaupl_b;
% Resistance for the beam
R_b=kel_b*(u(2,1)-upl_b);
R_store(2,1)=R_b;
% Stiffness for the beam
if u(2,1)==0
ks_b=kel_b;
elseif upl_b>uRd_b
ks_b=0;
else
ks_b=R_b/u(2,1);
end
% New stiffness matrix
Ks=[ks_w -ks_w; -ks_w ks_w+ks_b];
upl_b_store(:,2)=upl_b;
% Calculate u(n=1) and a(n=1)
u(:,2)=inv(M/(h^2))*(f-(Ks-2*M/(h^2))*u(:,1)-(M/(h^2))*uminus1);
a(:,2)=inv(M)*(f-Ks*u(:,2));
%% Timestepping n=1-->
% Generates n=2 -->
for i=2:length(t)-1
% Relative displacement between the beam and weight

-- 121 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	B-4
du=u(1,i)-u(2,i);
% Plastic displacement for the weight
if du>uel_w && du>max(u(1,1:i-1)-u(2,1:i-1))
deltaupl_w=du-max(uel_w,max(u(1,1:i-1)-u(2,1:i-1)));
else
deltaupl_w=0;
end
upl_w=upl_w+deltaupl_w;
% Resistance for the weight
if du<0 || upl_w>uRd_w
R_w=0;
else
R_w=max(0,kel_w*(du-upl_w));
end
R_store(1,i)=R_w;
% Stiffness for the weight
if du==0
ks_w=kel_w;
elseif upl_w>uRd_w
ks_w=0;
else
ks_w=R_w/du;
end
% Plastic displacement for the beam
if u(2,i)>uel_b && (u(2,i)-uel_b)>upl_b 	% Compression plastic
deltaupl_b=u(2,i)-(uel_b+upl_b);
elseif u(2,i)<-uel_b+upl_b 	% Tension plastic
deltaupl_b=-abs(u(2,i)+uel_b-upl_b);
else
deltaupl_b=0;
end
upl_b=upl_b+deltaupl_b;
% Resistance for the beam
R_b=kel_b*(u(2,i)-upl_b);
R_store(2,i)=R_b;
% Stiffness for the beam
if u(2,i)==0
ks_b=kel_b;
elseif upl_b>uRd_b
ks_b=0;
else
ks_b=R_b/u(2,i);
end
% New stiffness matrix
Ks=[ks_w -ks_w; -ks_w ks_w+ks_b];
upl_b_store(:,i)=upl_b;
% Calculation of u(n+1), v(n) and a(n)
u(:,i+1)=inv(M/h^2)*(f-(Ks-2*M/h^2)*u(:,i)-(M/h^2)*u(:,i-1));
v(:,i)=(u(:,i+1)-u(:,i-1))/(2*h);
a(:,i)=(u(:,i+1)-2*u(:,i)+u(:,i-1))/(h^2);

-- 122 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	B-5
% Calculation of impulse
% I=Integral av F över t
Ir(1,i)=Ir(1,i-1)+(R_store(1,i)+R_store(1,i-1))*h/2;
% I=Integral av F över t
Ir(2,i)=Ir(2,i-1)+(R_store(2,i)+R_store(2,i-1))*h/2;
% I=mv
Im(2,i)=M(2,2)*v(2,i);
% I=mv
Im(1,i)=M(1,1)*v(1,i);
% Calculation of work and kinetic energy
Wi(1,i)=Wi(1,i-1)+(R_store(1,i)+R_store(1,i-1))/2*(u(1,i)-u(1,i-1));
Wi(2,i)=Wi(2,i-1)+(R_store(2,i)+R_store(2,i-1))/2*(u(2,i)-u(2,i-1));
We(1,i)=0; 	% No force
We(2,i)=We(2,i-1)+(R_store(1,i)+R_store(1,i-1))/2*(u(2,i)-u(2,i-1));
Ek(1,i)=(M(1,1)*v(1,i)^2)/2; 	% E=mv^2/2
Ek(2,i)=(M(2,2)*v(2,i)^2)/2; 	% E=mv^2/2
end
%% Plots
% Displacement of the weight and the beam
figure
hold on
title('Displacement')
xlabel('Time [ms]')
ylabel('Displacement [mm]')
plot(t,u(1,:))
plot(t,u(2,:))
legend('Drop weight','Beam')
% Velocity of the weight and the beam
figure
hold on
title('Velocity')
xlabel('Time [ms]')
ylabel('Velocity [m/s]')
plot(t(1:(length(t)-1)),v(1,:))
plot(t(1:(length(t)-1)),v(2,:))
legend('Drop weight','Beam')
% Acceleration of the weight and the beam
figure
hold on
title('Acceleration')
xlabel('Time [ms]')
ylabel('Acceleration [mm/ms^2]')
plot(t(1:(length(t)-1)),a(1,:))
plot(t(1:(length(t)-1)),a(2,:))
legend('Drop weight','Beam')
% Resistance of the weight and the beam
figure
hold on
title('Resistance')
xlabel('Time [ms]')
ylabel('Resistance [N]')

-- 123 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	B-6
plot(t(1:(length(t)-1)),R_store(1,:)/1000)
plot(t(1:(length(t)-1)),R_store(2,:)/1000)
legend('R_1','R_2')
% Impulse on the weight
figure
hold on
title('Impulse on the drop weight')
xlabel('Time [ms]')
ylabel('Impulse [kNs]')
plot(t(1:(length(t)-1)),Ir(1,:))
plot(t(1:(length(t)-1)),Im(1,:))
legend('I(R_1)','I(m_1)')
% Impulse on the beam
figure
hold on
title('Impulse on the beam')
xlabel('Time [ms]')
ylabel('Impulse [kNs]')
plot(t(1:(length(t)-1)),Ir(2,:))
plot(t(1:(length(t)-1)),Im(2,:))
legend('I(R_2)','I(m_2)')
% Work on the drop weight
figure
hold on
title('Work on the drop weight')
xlabel('Time [ms]')
ylabel('Work [Nmm]')
plot(t(1:(length(t)-1)),Wi(1,:))
plot(t(1:(length(t)-1)),Ek(1,:))
plot(t(1:(length(t)-1)),We(1,:))
legend('Wi_1','Ek_1','We_1')
% Work on the beam
figure
hold on
title('Work on the beam')
xlabel('Time [ms]')
ylabel('Work [Nmm]')
plot(t(1:(length(t)-1)),Wi(2,:))
plot(t(1:(length(t)-1)),Ek(2,:))
plot(t(1:(length(t)-1)),We(2,:))
legend('Wi_2','Ek_2','We_2')
umax=max(u(2,:));
fprintf('The maximal displacement of the beam is %.2f mm', umax)

-- 124 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	C-1
Appendix C 	Mathcad calculations

-- 125 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	C-2

-- 126 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	C-3

-- 127 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	C-4

-- 128 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	D-1
Appendix D 	Evaluation of Contact Theory
A more thorough way of treating the interaction between the drop weight and the beam is to
determine the contact stiffness using contact mechanics. By using one method based on Hertz
contact theory, described by Fujikake et al. (2006), many parameters are taken in
consideration to calculate the stiffness for the interaction between two objects. The equations
used in this section are applicable for calculating the stiffness of the interaction between a flat
and a rounded surface. The roundness of the surface and material parameters of both
materials are considered. In this study an evaluation was made of the influence on the
displacement for this more advanced way of calculating the stiffness compared to the more
simplified way, described in Section 5.2.2. The contact law describes the relation between the
impact force, 𝐹, and local deformation at the impact zone, 𝛿, as:
𝐹 = 𝑘 ∙ 𝛿ଷ/ଶ 	(D.1)
where 𝑘 is a stiffness depending on the Young’s modulus, 𝐸, and Poisson’s ratio, ν, for body
1 and 2 as well as the radius of the rounded surface, 𝑟ଵ. It is calculated as:
𝑘 = 4√𝑟ଵ
3 ቈ1 − 𝜈ଵ
ଶ
𝐸ଵ
+ 1 − 𝜈ଶ
ଶ
𝐸ଶ
቉
ି
ଵ
(D.2)
The force-displacement relation is nonlinear, but in this project, the new stiffness of the
interaction, 𝑘௪,ு௘௥௧௭ , was calculated by assuming a linear relationship at a force
corresponding to the resistance of 50 kN, see Figure D-1.
Figure D-1 Relation between impact force and local deformation according to Hertz
contact theory.
0
10
20
30
40
50
60
70
80
90
100
0.00 	0.05 	0.10 	0.15 	0.20 	0.25
Impact Force,
 	F 	[kN]
Local deformation, δ 	[mm]
kw,Hertz

-- 129 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	D-2
The resulting stiffness of the spring representing the interaction calculated using this method
is presented in Table D-1 together with the original stiffness of the interaction and the beam.
Table D-1 	Comparison of the stiffness of the spring representing the interaction
calculated using different methods and the stiffness of the spring representing
the beam.
Stiffness [N/m]
Interaction Hertz, 𝑘௪,ு௘௥௧௭ 3.1·108
Interaction simplified, 𝑘௪ 	4.0·109
Beam 	2.4·106
When the new stiffness is calculated in this way, the difference on the force-displacement is
negligible, see Figure D-2.
Figure D-2 Displacement in the elasto-plastic case using the simplified stiffness and
stiffness according to Hertz contact theory.
Since the difference in displacement was very small it was of interest to see if the difference
in displacement would be larger between the two ways of modelling the stiffness if the
response of the interaction between the weight and the beam were elastic. The result is shown
in Figure D-3 and the effect was still very small. This is due to that the stiffness for the
interaction was still much higher than the stiffness of the beam and therefore the change had
no significant influence.
0
5
10
15
20
25
30
35
0 	5 	10 	15 	20
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Hertz
Simplified

-- 130 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	D-3
Figure D-3 Displacement for an elastic spring using the simplified stiffness and stiffness
according to Hertz contact theory.
From this short evaluation it can be seen that the influence of the way of calculating the
stiffness is small and therefore, the simplified expression has been used in this study. The use
of Hertz contact law could be more thoroughly evaluated in a future study.
0
10
20
30
40
50
60
0 	5 	10 	15 	20
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Simplified
Hertz

-- 131 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	E-1
Appendix E 	Compressive damage in LS-DYNA
In some load cases there were convergence issues in LS-DYNA due to local compressive
failure of the concrete. To avoid this, the compressive damage variable, 𝜀௙௖ , explained in
Section 6.5.1, was increased. An evaluation was made of how the results were influenced by
this modification. In the evaluation, the values presented in Table E-1 were investigated.
Table E-1 	Evaluated values of the compressive damage variable.
Standard value, 𝜀௙௖ [-] 	0.001
Evaluated values, 𝜀௙௖ [-]
0.002
0.005
0.010
Three different load cases that converged using the original value were investigated, they are
presented in Table E-2.
Table E-2 	The different load cases evaluated with regard to compressive damage
variable.
Mass of drop-weight,
𝑚 [kg] Drop height, ℎ [m]
Standard case 	10 	5
Load case 1 	20 	5
Load case 2 	10 	2.5
In Figure E-1, the time-displacement curves for the different load cases with different values
of the compressive damage variable can be seen.
Figure E-1 Displacements for three different load cases using different values of the
compressive damage variable.
0
10
20
30
40
50
60
0 	5 	10 	15 	20
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Load case 1, efc=0.001
Load case 1, efc=0.002
Load case 1, efc=0.005
Load case 1, efc=0.010
Standard, efc=0.001
Standard, efc=0.010
Load case 2, efc=0.001
Load case 2, efc=0.010

-- 132 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	E-2
The displacement was decreased when the damage variable was increased. This is reasonable
since the larger value of the damage variable gives a more ductile behaviour of concrete in
compression and thereby a higher capacity of the compressive zone. As shown in the graph,
the difference was larger for Load case 1 with larger displacements. For the standard case and
Load case 2, the differences were very small even when the damage variable was increased
by a factor of ten. Therefore, no other values were investigated for these two cases. For Load
case 1, the difference for the increase of ten times was more noticeable, and therefore an
increase of two and five times were performed as well. To further investigate the influence of
the compressive damage variable in this case, the crack patterns are compared in Table E-3.
Table E-3 	Crack patterns for Load case 1 using different values of the compressive
damage variable.
𝜀௙௖ 	Crack pattern
0.001,
standard
0.002
0.005
0.010
Principle
strain
[%]
The crack patterns are very similar but it can be seen that there is a difference in the
compressive zone. Since this part of the strain pattern was not of interest in this study, and the
differences in the more relevant parts were considered negligible, increasing the value of the
compressive damage variable in the cases with convergence issues was considered to be
acceptable.
A final evaluation of two cases where the value of the compressive damage variable needed
to be changed was made to confirm that the modification was applicable. In Figure E-2 the
time-displacement curves for these cases are presented.

-- 133 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	E-3
Figure E-2 Displacement for two load cases where convergence issues arose using the
standard value of the compressive damage variable.
It can be seen that the time-displacement curves using different values of the compressive
damage variable showed a similar behaviour until convergence issues arose. The strain
patterns from the latest timesteps possible are compared to verify that there were no major
differences, see Table E-4.
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
0 	5 	10 	15 	20
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
m=10kg, h=10m, efc=0.002
m=10kg, h=10m, efc=0.001
m=5kg, h=20m, efc=0.002
m=5kg, h=20m, efc=0.001

-- 134 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	E-4
Table E-4 	Crack pattern for two cases just before convergence issues arose compared
with strain pattern for the same timestep with a higher compressive damage
variable.
Load case 	Crack pattern
m = 10 kg,
h = 10 m,
efc = 0.001
m = 10 kg,
h = 10 m,
efc = 0.002
m = 5 kg,
h = 20 m,
efc = 0.001
m = 5 kg,
h = 20 m,
efc = 0.002
Principle strain
[%]
The conclusion from this evaluation was that the compressive damage variable can be
changed to a larger value when needed. When that is done, the used value should be
presented.

-- 135 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	F-1
Appendix F 	Results from parametric study in 2DOF
and Abaqus
F.1 Input values for the parametric study
The input values for the nine different beams studied in the parametric study using 2DOF and
Abaqus are presented in Table F-1. The descriptions of the studied beams are presented in
Table F-2.
Table F-1 	Input values for the parameters of the beam that were varied in the 2DOF
model and Abaqus model.
2DOF 	Abaqus
Beam 𝑘௕
[N/m]
𝑅௠,௕
[kN]
𝐸௘௤
[GPa]
𝑓௬.௥௘ௗ
[MPa]
1 	1.72·106 7.37 	4.30 	11.05
2 	2.32·106 10.45 5.80 	15.67
3 	3.66·106 17.69 9.10 	26.53
4 	2.59·106 10.68 3.20 	8.01
5 	13.33·106 24.42 4.20 	9.16
6 	0.21·106 3.51 	4.30 	10.53
7 	0.29·106 5.05 	5.80 	15.14
8 	0.46·106 8.67 	9.10 	26.00
9 	0.50·106 9.62 	10.00 	28.87
Table F-2 	Description of the beams studied in the parametric studies.
Beam
Width, 𝑏 [m] Height, ℎ [m] Length, L [m] 	Reinforcement
0.1 	0.2 	0.1 	0.2 	1.0 	2.0 	2ϕ5 	2ϕ6 	2ϕ8 	4ϕ6
1 	● 	● 	● 	●
2 	● 	● 	● 	●
3 	● 	● 	● 	●
4 	● 	● 	● 	●
5 	● 	● 	● 	●
6 	● 	● 	● 	●
7 	● 	● 	● 	●
8 	● 	● 	● 	●
9 	● 	● 	● 	●

-- 136 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	F-2
F.2 Time-displacement curves from 2DOF and Abaqus
The time-displacement curves from 2DOF and Abaqus for all the load cases for each beam
are presented below. In Figure F-1 the results for Beam 1 are presented.
Figure F-1 Time-displacement curves for all load cases from 2DOF and Abaqus for
Beam 1.
0
20
40
60
80
100
120
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
20
40
60
80
100
120
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 137 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	F-3
In Figure F-2, the results for Beam 2 are presented.
Figure F-2 Time-displacement curves for all load cases from 2DOF and Abaqus for
Beam 2.
0
10
20
30
40
50
60
70
80
90
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
10
20
30
40
50
60
70
80
90
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 138 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	F-4
In Figure F-3, the results for Beam 3 are presented.
Figure F-3 Time-displacement curves for all load cases from 2DOF and Abaqus for
Beam 3.
0
10
20
30
40
50
60
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
10
20
30
40
50
60
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40 kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 139 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	F-5
In Figure F-4 the results for Beam 4 are presented.
Figure F-4 Time-displacement curves for all load cases from 2DOF and Abaqus for
Beam 4.
0
10
20
30
40
50
60
70
80
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
10
20
30
40
50
60
70
80
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 140 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	F-6
In Figure F-5, the results for Beam 5 are presented.
Figure F-5 Time-displacement curves for all load cases from 2DOF and Abaqus for
Beam 5.
0
5
10
15
20
25
30
35
40
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
5
10
15
20
25
30
35
40
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 141 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	F-7
In Figure F-6, the results for Beam 6 are presented.
Figure F-6 Time-displacement curves for all load cases from 2DOF and Abaqus for
Beam 6.
0
50
100
150
200
0 	20 	40 	60 	80 	100
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
50
100
150
200
0 	20 	40 	60 	80 	100
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 142 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	F-8
In Figure F-7, the results for Beam 7 are presented.
Figure F-7 Time-displacement curves for all load cases from 2DOF and Abaqus for
Beam 7.
0
20
40
60
80
100
120
140
160
0 	20 	40 	60 	80 	100
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
20
40
60
80
100
120
140
160
0 	20 	40 	60 	80 	100
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 143 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	F-9
In Figure F-8, the results for Beam 8 are presented.
Figure F-8 Time-displacement curves for all load cases from 2DOF and Abaqus for
Beam 8.
0
10
20
30
40
50
60
70
80
90
100
0 	20 	40 	60 	80 	100
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
10
20
30
40
50
60
70
80
90
100
0 	20 	40 	60 	80 	100
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 144 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	F-10
In Figure F-9, the results for Beam 9 are presented.
Figure F-9 Time-displacement curves for all load cases from 2DOF and Abaqus for
Beam 9.
0
10
20
30
40
50
60
70
80
90
0 	20 	40 	60 	80 	100
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
2DOF
0
10
20
30
40
50
60
70
80
90
0 	20 	40 	60 	80 	100
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
Abaqus
m=40kg, h=2.5m 	m=40kg, h=1.25m
m=20kg, h=5m 	m=20kg, h=2.5m
m=10kg, h=10m 	m=10kg, h=5m
m=5kg, h=20m 	m=5kg, h=10m
m=2.5kg, h=40m 	m=2.5kg, h=20m

-- 145 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	F-11
F.3 Displacement and energy ratios
The transferred energy for the hand calculation is calculated according to equation (F.1).
𝑊௬ = 𝑚௪
𝑚௪ + 𝑚௕
𝐸௞,଴ 	(F.1)
For the displacement, equations (F.2), (F.3) and (F.4) are used.
𝑊௬ = 𝑊௜ 	(F.2)
𝑢௘௟ି ௣௟.௘௟ = 𝑅௠
𝑘 (F.3)
𝑢௧௢௧ =
⎩
⎨
⎧2 𝑊௜
𝑅௠
𝑖𝑓 𝑅௠𝑢௘௟ି ௣௟.௘௟
2 ≥ 𝑊௜
𝑊௜
𝑅௠
+ 𝑢௘௟ି௣௟ .௘௟
2 𝑖𝑓 𝑅௠𝑢௘௟ି௣௟ .௘௟
2 < 𝑊௜
(F.4)
To obtain the transferred energy for Abaqus and 2DOF the following equations are used
where the total displacement, 𝑢௧௢௧, is the displacement obtained from the analysis.
𝑢௘௟ି ௣௟.௘௟ = 𝑅௠
𝑘 (F.5)
𝑊௜ = ൞
𝑘 𝑢௧௢௧ଶ
2 𝑖𝑓 𝑢௘௟ି௣௟ .௘௟ ≥ 𝑢௧௢௧
𝑅௠
2 (𝑢௘௟ି ௣௟.௘௟ + 2(𝑢௧௢௧ − 𝑢௘௟ି ௣௟.௘௟) 	𝑖𝑓 𝑢௘௟ି ௣௟.௘௟ < 𝑢௧௢௧
(F.6)
𝑊௜ = 𝑊௬ 	(F.7)

-- 146 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	F-12
Table F-3 	Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations compared to 2DOF for
Beam 1.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 57.6 	58.2 	57.6 	1.01 	1.00 	1.01 	1.00
B 	20 2.5 49.6 	49.2 	49.7 	0.99 	1.00 	0.99 	1.00
C 	10 	5 	39.0 	39.0 	39.1 	1.00 	1.00 	1.00 	1.00
D 	5 	10 	27.6 	29.0 	27.7 	1.05 	1.01 	1.06 	1.01
E 	2.5 20 	17.9 	20.4 	18.0 	1.14 	1.01 	1.16 	1.01
F 	40 2.5 112.9 109.5 113.1 	0.97 	1.00 	0.97 	1.00
G 	20 	5 	96.7 	94.1 	97.2 	0.97 	1.01 	0.97 	1.01
H 	10 10 	75.2 	74.0 	76.1 	0.98 	1.01 	0.98 	1.01
I 	5 	20 	52.6 	55.0 	53.3 	1.05 	1.01 	1.05 	1.02
J 	2.5 40 	33.4 	37.8 	33.8 	1.13 	1.01 	1.14 	1.01
Table F- 4 	Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations compared to 2DOF for
Beam 2.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 41.3 	42.1 	41.4 	1.02 	1.00 	1.02 	1.00
B 	20 2.5 35.7 	36.0 	35.8 	1.01 	1.00 	1.01 	1.00
C 	10 	5 	28.1 	28.9 	28.3 	1.03 	1.01 	1.03 	1.01
D 	5 	10 	20.1 	20.7 	20.3 	1.03 	1.01 	1.03 	1.01
E 	2.5 20 	13.3 	15.2 	13.4 	1.14 	1.01 	1.17 	1.01
F 	40 2.5 80.3 	79.2 	80.5 	0.99 	1.00 	0.99 	1.00
G 	20 	5 	68.8 	67.8 	69.3 	0.99 	1.01 	0.99 	1.01
H 	10 10 	53.5 	54.0 	54.4 	1.01 	1.02 	1.01 	1.02
I 	5 	20 	37.6 	40.1 	38.4 	1.07 	1.02 	1.07 	1.02
J 	2.5 40 	24.2 	27.7 	24.6 	1.15 	1.02 	1.16 	1.02

-- 147 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	F-13
Table F-5 	Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations compared to 2DOF for
Beam 3.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 25.5 	26.2 	25.5 	1.03 	1.00 	1.03 	1.00
B 	20 2.5 22.1 	22.5 	22.2 	1.02 	1.01 	1.02 	1.01
C 	10 	5 	17.6 	18.3 	17.8 	1.04 	1.01 	1.04 	1.01
D 	5 	10 	12.9 	13.4 	13.1 	1.04 	1.01 	1.05 	1.02
E 	2.5 20 	8.9 	10.3 	9.0 	1.16 	1.01 	1.22 	1.02
F 	40 2.5 48.4 	48.5 	48.6 	1.00 	1.00 	1.00 	1.01
G 	20 	5 	41.5 	42.5 	42.0 	1.02 	1.01 	1.03 	1.01
H 	10 10 	32.4 	33.9 	33.2 	1.05 	1.03 	1.05 	1.03
I 	5 	20 	23.0 	24.5 	23.7 	1.06 	1.03 	1.07 	1.04
J 	2.5 40 	15.2 	17.6 	15.6 	1.16 	1.03 	1.19 	1.03
Table F-6 	Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations compared to 2DOF for
Beam 4.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 34.7 	35.8 	34.9 	1.03 	1.00 	1.03 	1.00
B 	20 2.5 27.4 	28.2 	27.6 	1.03 	1.01 	1.03 	1.01
C 	10 	5 	19.5 	20.2 	19.7 	1.03 	1.01 	1.04 	1.01
D 	5 	10 	12.9 	15.0 	13.0 	1.16 	1.01 	1.19 	1.01
E 	2.5 20 	8.2 	10.5 	8.3 	1.28 	1.01 	1.37 	1.01
F 	40 2.5 67.0 	66.0 	67.6 	0.99 	1.01 	0.98 	1.01
G 	20 	5 	52.1 	52.7 	53.1 	1.01 	1.02 	1.01 	1.02
H 	10 10 	36.5 	39.2 	37.4 	1.07 	1.02 	1.08 	1.02
I 	5 	20 	23.4 	26.6 	23.9 	1.14 	1.02 	1.15 	1.02
J 	2.5 40 	14.3 	18.2 	14.5 	1.27 	1.01 	1.32 	1.02

-- 148 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	F-14
Table F-7 	Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations compared to 2DOF for
Beam 5.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 14.80 15.81 15.26 	1.07 	1.03 	1.07 	1.03
B 	20 2.5 11.43 12.18 12.07 	1.07 	1.06 	1.07 	1.06
C 	10 	5 	8.11 	9.65 	8.64 	1.19 	1.07 	1.22 	1.07
D 	5 	10 	5.41 	6.63 	5.70 	1.22 	1.05 	1.27 	1.06
E 	2.5 20 	3.52 	4.39 	3.63 	1.25 	1.03 	1.33 	1.04
F 	40 2.5 27.76 29.13 29.61 	1.05 	1.07 	1.05 	1.07
G 	20 	5 	20.91 23.14 23.23 	1.11 	1.11 	1.11 	1.12
H 	10 10 14.42 18.20 16.37 	1.26 	1.14 	1.28 	1.14
I 	5 	20 	9.34 	13.15 10.48 	1.41 	1.12 	1.45 	1.13
J 	2.5 40 	5.87 	9.31 	6.34 	1.59 	1.08 	1.69 	1.09
Table F-8 	Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations compared to 2DOF for
Beam 6.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 108.02 112.28 108.04 1.04 	1.00 	1.04 	1.00
B 	20 2.5 85.80 88.89 85.85 	1.04 	1.00 	1.04 	1.00
C 	10 	5 	61.89 64.93 61.95 	1.05 	1.00 	1.06 	1.00
D 	5 	10 41.37 47.58 41.46 	1.15 	1.00 	1.19 	1.00
E 	2.5 20 27.01 32.17 27.07 	1.19 	1.00 	1.27 	1.00
F 	40 2.5 207.92 204.19 207.92 0.98 	1.00 	0.98 	1.00
G 	20 	5 163.46 165.11 163.53 1.01 	1.00 	1.01 	1.00
H 	10 10 115.62 121.95 115.73 1.05 	1.00 	1.06 	1.00
I 	5 	20 74.70 84.20 74.75 	1.13 	1.00 	1.14 	1.00
J 	2.5 40 45.91 57.23 45.96 	1.25 	1.00 	1.30 	1.00

-- 149 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	F-15
Table F-9 	Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations compared to 2DOF for
Beam 7.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 78.1 	84.5 	78.1 	1.08 	1.00 	1.09 	1.00
B 	20 2.5 62.6 	65.6 	62.7 	1.05 	1.00 	1.06 	1.00
C 	10 	5 	46.0 	48.9 	46.1 	1.06 	1.00 	1.08 	1.00
D 	5 	10 	31.7 	37.2 	31.8 	1.17 	1.00 	1.24 	1.00
E 	2.5 20 	21.8 	28.5 	21.8 	1.31 	1.00 	1.51 	1.00
F 	40 2.5 147.5 148.6 147.5 	1.01 	1.00 	1.01 	1.00
G 	20 	5 	116.5 119.5 116.7 	1.03 	1.00 	1.03 	1.00
H 	10 10 	83.3 	87.8 	83.4 	1.05 	1.00 	1.06 	1.00
I 	5 	20 	54.9 	61.4 	55.0 	1.12 	1.00 	1.14 	1.00
J 	2.5 40 	34.9 	42.6 	35.0 	1.22 	1.00 	1.30 	1.00
Table F-10 Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations compared to 2DOF for
Beam 8.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 49.9 	54.2 	49.9 	1.09 	1.00 	1.11 	1.00
B 	20 2.5 40.9 	45.0 	40.9 	1.10 	1.00 	1.13 	1.00
C 	10 	5 	31.2 	38.1 	31.2 	1.22 	1.00 	1.32 	1.00
D 	5 	10 	22.9 	29.1 	23.0 	1.27 	1.00 	1.46 	1.01
E 	2.5 20 	17.0 	21.4 	15.3 	1.26 	0.90 	1.56 	1.01
F 	40 2.5 90.3 	95.9 	90.3 	1.06 	1.00 	1.07 	1.00
G 	20 	5 	72.2 	76.1 	72.4 	1.05 	1.00 	1.06 	1.00
H 	10 10 	52.8 	56.8 	53.0 	1.07 	1.00 	1.09 	1.00
I 	5 	20 	36.3 	43.9 	36.4 	1.21 	1.00 	1.28 	1.00
J 	2.5 40 	24.7 	30.7 	24.8 	1.24 	1.00 	1.39 	1.00

-- 150 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	F-16
Table F-11 Displacements and comparison of displacements and transferred energy from
all load cases in Abaqus and hand calculations compared to 2DOF for
Beam 9.
Load
case
m 	h 	Displacement, u [m] 	𝜂௨ [−] 	𝜂ௐ೤ [−]
[kg] [m] 2DOF Abaqus Calc. Abaqus Calc. Abaqus Calc.
A 	40 1.25 46.0 	51.2 	46.0 	1.11 	1.00 	1.14 	1.00
B 	20 2.5 37.9 	43.0 	38.0 	1.13 	1.00 	1.18 	1.00
C 	10 	5 	29.2 	36.5 	29.2 	1.25 	1.00 	1.38 	1.00
D 	5 	10 	21.7 	27.5 	21.8 	1.27 	1.00 	1.48 	1.01
E 	2.5 20 	16.2 	20.3 	13.8 	1.25 	0.85 	1.55 	1.01
F 	40 2.5 82.4 	87.6 	82.5 	1.06 	1.00 	1.07 	1.00
G 	20 	5 	66.1 	70.6 	66.3 	1.07 	1.00 	1.08 	1.00
H 	10 10 	48.7 	53.4 	48.8 	1.10 	1.00 	1.12 	1.00
I 	5 	20 	33.8 	41.0 	33.9 	1.21 	1.00 	1.30 	1.00
J 	2.5 40 	23.3 	29.5 	23.4 	1.26 	1.00 	1.45 	1.00

-- 151 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	G-1
Appendix G 	Results from parametric study in LS-
DYNA
G.1 Time-displacement curves from LS-DYNA
Figure G-1 Time-displacement curves for all load cases for Beam 2, note that the results
for two load cases end at around 2 ms.
Figure G-2 Time-displacement curves for all load cases for Beam 2.
0
10
20
30
40
50
60
70
80
90
0 	5 	10 	15 	20 	25 	30
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
m=40kg, h=2.5m
m=20kg, h=5m
m=10kg, h=10m
m=5kg, h=20m
m=2.5kg, h=40m
0
10
20
30
40
50
60
70
80
90
0 	5 	10 	15 	20 	25 	30 	35 	40
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
m=40kg, h=2.5m
m=20kg, h=5m
m=10kg, h=10m
m=5kg, h=20m
m=2.5kg, h=40m
m=40kg, h=1.25m
m=20kg, h=2.5m
m=10kg, h=5m
m=5kg, h=10m
m=2.5kg, h=20m

-- 152 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	G-2
Figure G-3 Time-displacement curves for all load cases for Beam 3.
0
10
20
30
40
50
60
70
80
90
0 	5 	10 	15 	20 	25 	30
Displacement,
 	u 	[mm]
Time, 	t 	[ms]
m=40kg, h=2.5m
m=20kg, h=5m
m=10kg, h=10m
m=5kg, h=20m
m=2.5kg, h=40m

-- 153 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	G-3
G.2 Crack patterns from LS-DYNA
Table G-1 	Crack patterns at the time of maximum displacement for load cases F-J for
Beam 1.
Load case 	Crack pattern
F
(40 kg, 2.5 m)
G
(20 kg, 5 m)
H
(10 kg, 10 m)
I
(5 kg, 20 m) -
J
(2.5 kg, 40 m) -
Principle
strain
[%]

-- 154 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	G-4
Table G-2 	Crack patterns at the time of maximum displacement for load cases A-E for
Beam 2.
Load case 	Crack pattern
A
(40 kg, 1.25 m)
B
(20 kg, 2.5 m)
C
(10 kg, 5 m)
D
(5 kg, 10 m)
E
(2.5 kg, 20 m)
Principle strain
[%]

-- 155 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	G-5
Table G-3 	Crack patterns at the time of maximum displacement for load cases F-J for
Beam 2.
Load case 	Crack pattern
F
(40 kg, 2.5 m)
G
(20 kg, 5 m)
H
(10 kg, 10 m)
I
(5 kg, 20 m)
J
(2.5 kg, 40 m)
Principle
strain
[%]

-- 156 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	G-6
Table G- 4 Crack patterns at the time of maximum displacement for load cases F-J for
Beam 3.
Load case 	Crack pattern
F
(40 kg, 2.5 m)
G
(20 kg, 5 m)
H
(10 kg, 10 m)
I
(5 kg, 20 m)
J
(2.5 kg, 40 m)
Principle
strain
[%]

-- 157 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	H-1
Appendix H 	Abaqus script file
*Heading
** Job name: Explicit_2018 Model name: Dynamic - Explicit
** Generated by: Abaqus/CAE 2017
*Preprint, echo=NO, model=NO, history=NO, contact=NO
**
** PARTS
**
*Part, name=Beam
*End Part
**
**
** ASSEMBLY
**
*Assembly, name=Assembly
**
*Instance, name=Beam-1, part=Beam
*Node
1, 	-500., 	0.
2, 	0., 	0.
3, 	500., 	0.
4, 	-490., 	0.
5, 	-480., 	0.
…
100, 	480., 	0.
101, 	490., 	0.
*Element, type=B21
1, 1, 4
2, 4, 5
3, 5, 6
…
99, 100, 101
100, 101, 3
*Nset, nset=Set-1, generate
1, 101, 	1
*Elset, elset=Set-1, generate
1, 100, 	1
*Nset, nset=Set-2, generate
1, 101, 	1
*Elset, elset=Set-2, generate
1, 100, 	1
** Section: Beam Profile: Beam profile
*Beam 	Section, 	elset=Set-1, 	material="Equivalent 	concrete",
temperature=GRADIENTS, section=RECT
100., 100.
0.,0.,-1.
3
*End Instance
**
*Node
1, 	0., 	200., 	0.
*Nset, nset="Attachment Points-1-Set-1"
1,
*Nset, nset=Set-1, instance=Beam-1
1,
*Nset, nset=Set-2, instance=Beam-1
3,
*Nset, nset=Set-3, instance=Beam-1
2,

-- 158 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	H-2
*Nset, nset=Set-4, instance=Beam-1
1,
*Nset, nset=Set-5, instance=Beam-1
3,
*Nset, nset=Set-12, instance=Beam-1
1,
*Nset, nset=Set-13, instance=Beam-1
3,
*Nset, nset=Set-14, instance=Beam-1
1,
*Nset, nset=Set-15, instance=Beam-1
3,
*Nset, nset=Set-18, instance=Beam-1
2,
*Nset, nset=Set-29
1,
*Nset, nset=Set-30
1,
*Element, type=MASS, elset="Set-29_Point mass_"
1, 1
*Mass, elset="Set-29_Point mass_"
10000.,
*Spring, elset=Spring-spring, nonlinear
-3.99e+09, -1000
0, 0
0.1, 1000
*Element, type=SpringA, elset=Spring-spring
2, 1, Beam-1.2
*End Assembly
**
** MATERIALS
**
*Material, name="Equivalent concrete"
*Density
0.0024,
*Elastic
5800., 0.2
*Plastic
15.67,0.
15.68,1.
**
** BOUNDARY CONDITIONS
**
** Name: Left Type: Displacement/Rotation
*Boundary
Set-14, 1, 1
Set-14, 2, 2
** Name: Right Type: Displacement/Rotation
*Boundary
Set-15, 2, 2
**
** PREDEFINED FIELDS
**
** Name: Initial velocity Type: Velocity
*Initial Conditions, type=VELOCITY
Set-30, 1, 0.
Set-30, 2, -9.9
** ----------------------------------------------------------------
**
** STEP: Dynamic explicit

-- 159 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	H-3
**
*Step, name="Dynamic explicit", nlgeom=YES
*Dynamic, Explicit, direct user control
0.002, 40.
*Bulk Viscosity
0.06, 1.2
**
** OUTPUT REQUESTS
**
*Restart, write, number interval=1, time marks=NO
**
** FIELD OUTPUT: F-Output-1
**
*Output, field, number interval=200
*Node Output
A, RF, RM, RT, U, V
*Element Output, directions=YES
E, MISES, S, SF
**
** HISTORY OUTPUT: H-Output-1
**
*Output, history
*Energy Output
ALLAE, ALLCD, ALLCW, ALLDC, ALLDMD, ALLFD, ALLIE, ALLKE, ALLMW, ALLPD,
ALLPW, ALLSE, ALLVD, ALLWK, ETOTAL
*End Step

-- 160 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	I-1
Appendix I 	LS-DYNA script file
$# LS-DYNA Keyword file created by LS-PrePost(R) V4.5.4 - 07Nov2017
$# Created on Apr-11-2018 (08:48:51)
*KEYWORD
*TITLE
$# 	title
LS-DYNA keyword deck by LS-PrePost
*CONTROL_TERMINATION
$# endtim 	endcyc 	dtmin 	endeng 	endmas 	nosol
20.0 	0 	0.0 	0.01.000000E8 	0
*DATABASE_ELOUT
$# 	dt 	binary 	lcur 	ioopt option1 option2 option3 option4
0.1 	3 	0 	1 	0 	0 	0 	0
*DATABASE_GLSTAT
$# 	dt 	binary 	lcur 	ioopt
0.1 	3 	0 	1
*DATABASE_MATSUM
$# 	dt 	binary 	lcur 	ioopt
0.1 	3 	0 	1
*DATABASE_NCFORC
$# 	dt 	binary 	lcur 	ioopt
0.5 	3 	0 	1
*DATABASE_NODFOR
$# 	dt 	binary 	lcur 	ioopt
0.5 	3 	0 	1
*DATABASE_NODOUT
$# 	dt 	binary 	lcur 	ioopt option1 option2
0.5 	3 	0 	1 	0.0 	0
*DATABASE_RCFORC
$# 	dt 	binary 	lcur 	ioopt
0.1 	0 	0 	1
*DATABASE_BINARY_D3PLOT
$# 	dt 	lcdt 	beam 	npltc 	psetid
0.2 	0 	0 	0 	0
$# ioopt
0
*DATABASE_EXTENT_BINARY
$# neiph 	neips 	maxint 	strflg 	sigflg 	epsflg 	rltflg 	engflg
5 	0 	0 	1 	1 	1 	1 	1
$# cmpflg 	ieverp 	beamip 	dcomp 	shge 	stssz 	n3thdt ialemat
0 	0 	1 	1 	1 	1 	2 	1
$# nintsld pkp_sen 	sclp 	hydro 	msscl 	therm 	intout 	nodout
0 	0 	1.0 	0 	0 	0
$# 	dtdt 	resplt 	neipb 	quadr 	cubic
0 	0 	0 	0 	0
*BOUNDARY_SPC_SET_ID
$# 	id 	heading
1BC left vertical
$# 	nsid 	cid 	dofx 	dofy 	dofz 	dofrx 	dofry 	dofrz
1 	0 	0 	0 	1 	0 	0 	0
*SET_NODE_LIST_TITLE
BC Left vertical
$# 	sid 	da1 	da2 	da3 	da4 	solver
1 	0.0 	0.0 	0.0 	0.0MECH
$# 	nid1 	nid2 	nid3 	nid4 	nid5 	nid6 	nid7 	nid8
10299 	10300 	10342 	10343 	11178 	11179 	11180 	11181
11182 	11183 	11184 	11185 	11186 	11187 	11188 	11189
11190 	11191 	11192 	11193 	11194 	11195 	11196 	11197
11198 	11199 	11200 	11201 	11202 	11203 	11204 	11205
11206 	11207 	11208 	11209 	11210 	11211 	11212 	11213
11214 	11215 	11216 	11217 	0 	0 	0 	0
*BOUNDARY_SPC_SET_ID
$# 	id 	heading
2BC left horizonal
$# 	nsid 	cid 	dofx 	dofy 	dofz 	dofrx 	dofry 	dofrz

-- 161 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	I-2
2 	0 	1 	1 	0 	0 	0 	0
*SET_NODE_LIST_TITLE
BC Left horizontal
$# 	sid 	da1 	da2 	da3 	da4 	solver
2 	0.0 	0.0 	0.0 	0.0MECH
$# 	nid1 	nid2 	nid3 	nid4 	nid5 	nid6 	nid7 	nid8
10288 	10331 	10958 	10959 	10960 	10961 	10962 	10963
10964 	10965 	10966 	10967 	10968 	10969 	10970 	10971
10972 	10973 	10974 	10975 	10976 	10977 	0 	0
*BOUNDARY_SPC_SET_ID
$# 	id 	heading
3BC right vertical
$# 	nsid 	cid 	dofx 	dofy 	dofz 	dofrx 	dofry 	dofrz
3 	0 	0 	0 	1 	0 	0 	0
*SET_NODE_LIST_TITLE
BC Right vertical
$# 	sid 	da1 	da2 	da3 	da4 	solver
3 	0.0 	0.0 	0.0 	0.0MECH
$# 	nid1 	nid2 	nid3 	nid4 	nid5 	nid6 	nid7 	nid8
15381 	15382 	15424 	15425 	15886 	15887 	15888 	15889
15890 	15891 	15892 	15893 	15894 	15895 	15896 	15897
15898 	15899 	15900 	15901 	15902 	15903 	15904 	15905
15906 	15907 	15908 	15909 	15910 	15911 	15912 	15913
15914 	15915 	15916 	15917 	15918 	15919 	15920 	15921
15922 	15923 	15924 	15925 	0 	0 	0 	0
*BOUNDARY_SPC_SET_ID
$# 	id 	heading
4BC right horizontal
$# 	nsid 	cid 	dofx 	dofy 	dofz 	dofrx 	dofry 	dofrz
4 	0 	1 	1 	0 	0 	0 	0
*SET_NODE_LIST_TITLE
BC Right horizontal
$# 	sid 	da1 	da2 	da3 	da4 	solver
4 	0.0 	0.0 	0.0 	0.0MECH
$# 	nid1 	nid2 	nid3 	nid4 	nid5 	nid6 	nid7 	nid8
15392 	15435 	16106 	16107 	16108 	16109 	16110 	16111
16112 	16113 	16114 	16115 	16116 	16117 	16118 	16119
16120 	16121 	16122 	16123 	16124 	16125 	0 	0
*CONTACT_AUTOMATIC_SURFACE_TO_SURFACE_ID
$# 	cid 	title
1Contact-Weight-beam
$# 	ssid 	msid 	sstyp 	mstyp 	sboxid 	mboxid 	spr 	mpr
3 	8 	3 	3 	0 	0 	0 	0
$# 	fs 	fd 	dc 	vc 	vdc 	penchk 	bt 	dt
0.0 	0.0 	0.0 	0.0 	0.0 	0 	0.01.00000E20
$# 	sfs 	sfm 	sst 	mst 	sfst 	sfmt 	fsf 	vsf
1.0 	1.0 	0.0 	0.0 	1.0 	1.0 	1.0 	1.0
*CONTACT_AUTOMATIC_SURFACE_TO_SURFACE_ID
$# 	cid 	title
2Contact-left support-beam
$# 	ssid 	msid 	sstyp 	mstyp 	sboxid 	mboxid 	spr 	mpr
1 	8 	3 	3 	0 	0 	0 	0
$# 	fs 	fd 	dc 	vc 	vdc 	penchk 	bt 	dt
0.0 	0.0 	0.0 	0.0 	0.0 	0 	0.01.00000E20
$# 	sfs 	sfm 	sst 	mst 	sfst 	sfmt 	fsf 	vsf
1.0 	1.0 	0.0 	0.0 	1.0 	1.0 	1.0 	1.0
*CONTACT_AUTOMATIC_SURFACE_TO_SURFACE_ID
$# 	cid 	title
3Contact-right support-beam
$# 	ssid 	msid 	sstyp 	mstyp 	sboxid 	mboxid 	spr 	mpr
2 	8 	3 	3 	0 	0 	0 	0
$# 	fs 	fd 	dc 	vc 	vdc 	penchk 	bt 	dt
0.0 	0.0 	0.0 	0.0 	0.0 	0 	0.01.00000E20
$# 	sfs 	sfm 	sst 	mst 	sfst 	sfmt 	fsf 	vsf
1.0 	1.0 	0.0 	0.0 	1.0 	1.0 	1.0 	1.0
*PART
$# 	title
Left support

-- 162 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	I-3
$# 	pid 	secid 	mid 	eosid 	hgid 	grav 	adpopt 	tmid
1 	2 	1 	0 	0 	0 	0 	0
*SECTION_SOLID_TITLE
Support
$# secid 	elform 	aet
2 	1 	0
*MAT_ELASTIC_TITLE
Weight and supports
$# 	mid 	ro 	e 	pr 	da 	db not used
1 0.007753 200000.0 	0.3 	0.0 	0.0 	0
*PART
$# 	title
Right support
$# 	pid 	secid 	mid 	eosid 	hgid 	grav 	adpopt 	tmid
2 	2 	1 	0 	0 	0 	0 	0
*PART
$# 	title
Weight
$# 	pid 	secid 	mid 	eosid 	hgid 	grav 	adpopt 	tmid
3 	3 	1 	0 	0 	0 	0 	0
*SECTION_SOLID_TITLE
Weight
$# secid 	elform 	aet
3 	1 	0
*PART
$# 	title
Reinforcement, top-front
$# 	pid 	secid 	mid 	eosid 	hgid 	grav 	adpopt 	tmid
4 	1 	5 	0 	0 	0 	0 	0
*SECTION_BEAM_TITLE
Reinforcment
$# secid 	elform 	shrf qr/irid 	cst 	scoor 	nsm
1 	1 	1.0 	1 	1 	0.0 	0.0
$# 	ts1 	ts2 	tt1 	tt2 	nsloc 	ntloc
6.0 	6.0 	0.0 	0.0 	0.0 	0.0
*MAT_PIECEWISE_LINEAR_PLASTICITY_TITLE
Multi-linear reinforcment
$# 	mid 	ro 	e 	pr 	sigy 	etan 	fail 	tdel
5 	0.0078 196000.0 	0.3 	0.0 	0.01.00000E21 	0.0
$# 	c 	p 	lcss 	lcsr 	vp
0.0 	0.0 	0 	0 	0.0
$# 	eps1 	eps2 	eps3 	eps4 	eps5 	eps6 	eps7 	eps8
0.0 	0.0016 	0.0036 	0.0128 	0.0272 	0.048 	0.075 	0.11
$# 	es1 	es2 	es3 	es4 	es5 	es6 	es7 	es8
420.0 	500.0 	520.0 	560.0 	590.0 	610.0 	620.0 	623.0
*PART
$# 	title
Reinforcement, top-back
$# 	pid 	secid 	mid 	eosid 	hgid 	grav 	adpopt 	tmid
5 	1 	5 	0 	0 	0 	0 	0
*PART
$# 	title
Reinforcement, bottom-front
$# 	pid 	secid 	mid 	eosid 	hgid 	grav 	adpopt 	tmid
6 	1 	5 	0 	0 	0 	0 	0
*PART
$# 	title
Reinforcement, bottom-back
$# 	pid 	secid 	mid 	eosid 	hgid 	grav 	adpopt 	tmid
7 	1 	5 	0 	0 	0 	0 	0
*PART
$# 	title
Beam
$# 	pid 	secid 	mid 	eosid 	hgid 	grav 	adpopt 	tmid
8 	4 	3 	0 	0 	0 	0 	0
*SECTION_SOLID_TITLE
Concrete

-- 163 of 165 --

CHALMERS, Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36	I-4
$# secid 	elform 	aet
4 	10 	0
*MAT_CONCRETE_DAMAGE_PLASTIC_MODEL_TITLE
Beam Concrete-CDPM2
$# 	mid 	ro 	e 	pr 	ecc 	qh0 	ft 	fc
3 	0.0024 32000.0 	0.2 	0.518 	0.3 	2.8 	36.0
$# 	hp 	ah 	bh 	ch 	dh 	as 	df 	fc0
0.01 	0.08 	0.003 	2.01.00000E-6 	15.0 	0.85 	0.0
$# 	type 	bs 	wf 	wf1 	ft1 	strflg failflg 	efc
1.0 	1.0 	0.124 	0.0 	0.0 	0.0 	0.0 	0.001
*MAT_PLASTIC_KINEMATIC_TITLE
Reinforcment
$# 	mid 	ro 	e 	pr 	sigy 	etan 	beta
2 0.00785 200000.0 	0.3 	609.8 	584.0 	0.0
$# 	src 	srp 	fs 	vp
0.0 	0.0 	0.0 	0.0
*MAT_ELASTIC_TITLE
Beam elastic concrete
$# 	mid 	ro 	e 	pr 	da 	db not used
4 	0.0024 	3470.0 	0.2 	0.0 	0.0 	0
*INITIAL_VELOCITY_GENERATION
$#nsid/pid 	styp 	omega 	vx 	vy 	vz 	ivatn 	icid
3 	2 	0.0 	0.0 	0.0 	-9.9 	0 	0
$# 	xc 	yc 	zc 	nx 	ny 	nz 	phase 	irigid
0.0 	0.0 	0.0 	0.0 	0.0 	0.0 	0 	0
*CONSTRAINED_BEAM_IN_SOLID_ID
$# coupid 	title
1reinforcmenttop-front
$# slave 	master 	sstyp 	mstyp 	ncoup 	cdir
4 	8 	1 	1 	0 	0 	0 	1
$# start 	end 	axfor
0.0 	0.0 	0 	-1
*CONSTRAINED_BEAM_IN_SOLID_ID
$# coupid 	title
2reinforcmenttop-back
$# slave 	master 	sstyp 	mstyp 	ncoup 	cdir
5 	8 	1 	1 	0 	0 	0 	1
$# start 	end 	axfor
0.0 	0.0 	0 	-1
*CONSTRAINED_BEAM_IN_SOLID_ID
$# coupid 	title
3reinforcmentbottom-front
$# slave 	master 	sstyp 	mstyp 	ncoup 	cdir
6 	8 	1 	1 	0 	0 	0 	1
$# start 	end 	axfor
0.0 	0.0 	0 	-1
*CONSTRAINED_BEAM_IN_SOLID_ID
$# coupid 	title
4reinforcmentbottom-back
$# slave 	master 	sstyp 	mstyp 	ncoup 	cdir
7 	8 	1 	1 	0 	0 	0 	1
$# start 	end 	axfor
0.0 	0.0 	0 	-1
*ELEMENT_SOLID
$# eid 	pid 	n1 	n2 	n3 	n4 	n5 	n6 	n7 	n8
13000 	1 10595 10643 13938 12838 10596 10596 12378 12378
13001 	1 12838 13938 13939 12839 12378 12378 12379 12379
13002 	1 12839 13939 13940 12840 12379 12379 12380 12380
13003 	1 12840 13940 13941 12841 12380 12380 12381 12381
…
35177 	7 36212 36214 36215 	0 	0 	0 	0 	2
35178 	7 36214 36216 36217 	0 	0 	0 	0 	2
35179 	7 36216 36218 36219 	0 	0 	0 	0 	2
35180 	7 36218 36220 36221 	0 	0 	0 	0 	2
*NODE
$# nid 	x 	y 	z 	tc 	rc
1 	0.0 	-590.0 	-35.0 	0 	0
2 	100.0 	-500.0 	0.0 	0 	0

-- 164 of 165 --

CHALMERS Architecture and Civil Engineering, Master’s Thesis, ACX30-18-36 	I-5
3 	0.0 	-500.0 1.672415e-015 	0 	0
4 	100.0 	-504.981 	-0.3562494 	0 	0
…
196208 	26.37588 	-453.5173 	41.99794 	0 	0
196209 	71.48462 	-417.763 	63.55512 	0 	0
196210 	73.74369 	-177.108 	35.98502 	0 	0
196211 	73.39993 	-135.9213 	35.75033 	0 	0
*DEFINE_FUNCTION
$# 	fid 	heading
1Bond-slip between reinforcement and concrete
$# 	function
float force(float slip,float leng)
{
float force,pi,d,area,shear,pf,s1,s2,s3,tmax,tf;
pi = 3.1415926;
d = 6;
s1 = 1.0;
tmax = 15;
area = pi*d*leng;
if(slip < s1) {
shear = tmax*(slip/s1)**0.4;
} else{
shear = tmax;
}
force = shear*area;
return force;
}
*END

-- 165 of 165 --