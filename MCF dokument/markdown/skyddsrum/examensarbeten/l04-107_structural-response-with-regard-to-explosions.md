---
title: "L04 107 Structural Response With Regard To Explosions"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-107_structural-response-with-regard-to-explosions.pdf"
fileType: "PDF"
keywords: ["betong","armering","beräkning","explosion","moment","with","beam","figure"]
summary: "Master’s Dissertation Structural Mechanics STRUCTURAL RESPONSE WITH REGARD TO EXPLOSIONS - Mode Superposition, Damping and Curtailment MATTIAS CARLSSON and ROBIN KRISTENSSON -- 1 of 199 -- Denna sida skall vara tom! -- 2 of 199 -- Department of Co..."
---

Master’s Dissertation
Structural
Mechanics
STRUCTURAL RESPONSE WITH REGARD
TO EXPLOSIONS - Mode Superposition,
Damping and Curtailment
MATTIAS CARLSSON and ROBIN KRISTENSSON

-- 1 of 199 --

Denna sida skall vara tom!

-- 2 of 199 --

Department of Construction Sciences
Structural Mechanics
Copyright © 2012 by Structural Mechanics, LTH, Sweden.
Printed by Media-Tryck LU, Lund, Sweden, November 2012
(Pl).
For information, address:
Division of Structural Mechanics, LTH, Lund University, Box 118, SE-221 00 Lund, Sweden.
Homepage: http://www.byggmek.lth.se
ISRN LUTVDG/TVSM--12/5185--SE (1-188)
ISSN 0281-6679
STRUCTURAL RESPONSE WITH REGARD
TO EXPLOSIONS - Mode Superposition,
Damping and Curtailment
Master’s Dissertation by
MATTIAS CARLSSON and ROBIN KRISTENSSON
Kent Persson, PhD,
Dept. of Construction Sciences, LTH, Lund
Morgan Johansson,
Reinertsen Sverige AB
Per-Erik Austrell, Senior Lecturer,
Div. of Structural Mechanics, LTH, Lund
Supervisors:
Examiner:

-- 3 of 199 --



-- 4 of 199 --

I
ABSTRACT
When a structure is subjected to an explosion, it will have a response that differs from
the one that arises from a static load. Engineers are used to design for static loads but
the common knowledge of how to design for explosions is weak. There are guidelines
for how to design for explosions with simplified methods but they are partly outdated
and the explanation of how they are derived is vague. This Master thesis compiles
some of the most important guidelines and explains the underlying theory. In order to
understand the structural response one must first study basic theory of explosions,
different material behaviours and basic dynamics, which are also presented in the
thesis.
A structure can be simplified by transformation into a single degree of freedom-
system (SDOF-system), and the reliability of such an SDOF-system is evaluated
within this thesis. The SDOF-system is created by using a system point where the
maximum displacement will occur, and it is compared to hand calculations for the
maximum values and to non-linear finite element analyses. The SDOF-model assumes
a specific deflection shape which is taken into account by using certain transformation
factors. The simplified methods of calculating the structural response are presented in
general, but the examples are made for reinforced concrete beams as these, due to
their high mass and ductile behaviour, often are used as protection from explosions.
Since no actual tests could be performed to collect empirical data about the response,
FE-analyses are performed with the finite element software ADINA and even for a
complex material such as concrete these analyses are assumed to represent the actual
response of a structure.
In order to speed up the analyses, adequate simplifications of the motion can be
described with mode superposition, and the effectiveness of these simplifications is
shown in the thesis. When the mode superposition-analysis is made with only one
mode, the results can verify the accuracy of the SDOF-model.
When designing structures it is important that the calculations are on the safe side to
minimize the risk of damage and above all, failure, and therefore damping is often
neglected as it is both easier to calculate without it and the results will be on the safe
side. However, in order to get more accurate results the damping should also be
included and therefore different approaches for this are described.
For impulse loads the moments near the supports are initially larger than for a static
load which could pose a problem when the reinforcement is shortened in these areas.
In this Master thesis the response for curtailed concrete beams is studied.
Key words: Explosion, impulse load, SDOF, FE-analysis, dynamic response,
reinforced concrete, equivalent static load, damping, mode superposition,
curtailment.

-- 5 of 199 --

II
SAMMANFATTNING
När en struktur utsätts för en explosion kommer den ha en respons som skiljer sig från
den som uppstår från en statisk last. Ingenjörer är vana vid att dimensionera för
statiska laster, men den allmänna kunskapen om hur man dimensionerar vid
explosioner är dålig. Det finns riktlinjer för hur man dimensionerar för explosioner
med förenklade metoder, men de är delvis utdaterade och förklaringen till hur de är
härledda är oklar. Det här examensarbetet sammanställer några av de viktigaste
riktlinjerna och förklarar den underliggande teorin. För att kunna förstå den
strukturella responsen måste man först studera grundläggande teori om explosioner,
olika materialuppförande och grundläggande dynamik, som också presenteras i
rapporten.
En struktur kan förenklas genom att transformeras till ett enfrihetsgradssystem
(SDOF-system), och SDOF-systemets tillförlitlighet utvärderas i denna rapport.
SDOF-systemet skapas genom att använda en systempunkt där den maximala
förskjutningen kommer att uppstå, och jämförs med handberäkningar för maximala
värden och med olinjära finita element-analyser. SDOF-modellen antar en specifik
utböjningsform som anpassas med hjälp av specifika transformationsfaktorer. De
förenklade metoderna för att beräkna strukturell respons presenteras generellt, men
exemplen är gjorda för armerade betongbalkar eftersom dessa ofta, på grund av deras
höga massa och duktila beteende, används som skydd för explosioner. Eftersom inga
riktiga test kunde utföras för att samla empirisk data om responsen är FE-analyserna
utförda med det finita element-programmet ADINA och även för ett komplext
material såsom betong antas dessa analyser representera den verkliga responsen för en
struktur.
För att snabba upp analyserna kan tillräckliga förenklingar beskrivas med
modsuperposition, och effektiviteten av dessa förenklingar visas i rapporten. När
sedan modsuperpositionsanalysen utförs med endast en mod kan precisionen av
SDOF-modellen bekräftas.
När man dimensionerar strukturer är det viktigt att beräkningarna är på säkra sidan för
att minimera risk för skada och framförallt brott, och därför brukar dämpningen ofta
bortses ifrån eftersom det är både enklare att räkna utan den och värdena kommer bli
på den säkra sidan. För att kunna få mer noggranna resultat borde dämpningen också
vara inkluderad och därför beskrivs olika tillvägagångssätt för detta.
För impulslaster är momenten nära stöd inledningsvis större än för en statisk last
vilket skulle kunna innebära ett problem när armeringen är avkortad i dessa områden.
I det här examensarbetet studeras responsen för avkortade betongbalkar.
Nyckelord: Explosion, impulslast, SDOF, FE-analys, dynamisk respons, armerad
betong, ekvivalent statisk last, dämpning, modsuperposition, avkortning

-- 6 of 199 --

III
Contents
1 INTRODUCTION 1
1.1 Background 1
1.2 Aim 1
1.3 Method 2
1.4 Limitations 2
1.5 Outline of the report 3
2 BACKGROUND THEORY 7
2.1 Explosions 7
2.1.1 What is an explosion? 7
2.1.2 Effects of explosions 9
2.2 Materials 13
2.2.1 Linear elastic 13
2.2.2 Ideal plastic 14
2.2.3 Elasto-plastic 15
2.2.4 Theory of plasticity and plastic hinges 15
2.2.5 Plastic rotation capacity 18
2.3 Dynamics 20
2.3.1 Kinematics 20
2.3.1.1 Velocity 20
2.3.1.2 Acceleration 20
2.3.2 Kinetics 20
2.3.2.1 Force and Pressure 20
2.3.2.2 Momentum, impulse and impulse intensity 21
2.3.3 Work 22
2.3.3.1 External work 23
2.3.3.2 Internal work 24
2.3.3.3 Work with regard to recoil 26
2.3.4 Equivalent static load 28
2.3.4.1 Elastic response 28
2.3.4.2 Plastic response 28
2.3.4.3 Elasto-plastic response 29
2.3.5 Wave propagation 29
2.3.6 Vibrations 32
2.4 Transformation to SDOF-system 34
2.4.1 SDOF-system 34
2.4.2 Transformation into an equivalent SDOF-model 36
2.4.3 Equivalent work 39
3 STRUCTURAL RESPONSE OF A CONCRETE BEAM 41
3.1 Geometry and loading 41
3.2 Hand calculations 44

-- 7 of 199 --

IV
3.2.1 Mass and stiffness 44
3.2.2 Maximum internal resistance 46
3.2.3 Deformation 47
3.2.4 Equivalent static loads 48
3.3 ADINA – Methods and modelling 48
3.3.1 Methods in ADINA 49
3.3.2 Modelling in ADINA 51
4 INITIAL ANALYSES AND VERIFICATION OF THE MODELLING 53
4.1 Displacement 53
4.1.1 Elastic response 53
4.1.2 Plastic response 56
4.1.3 Elasto-plastic response 58
4.2 Moment 59
4.2.1 Elastic response 60
4.2.2 Plastic response 62
4.2.3 Elasto-plastic response 65
4.3 Energy balance 68
4.3.1 Elastic response 70
4.3.2 Plastic response 71
4.3.3 Elasto-plastic response 73
4.4 Discussion 75
5 MODE SUPERPOSITION AND DAMPING 77
5.1 Modal-analysis 78
5.2 Damping analysis 88
5.3 The transformation factor for damping 104
5.4 Discussion 108
6 CURTAILMENT 111
6.1 Curtailment analysis 112
6.2 Discussion 116
7 FINAL REMARKS 117
7.1 Conclusions 117
7.2 Further studies 117
8 REFERENCES 119
APPENDIX A BEAM THEORY 121
APPENDIX B CENTRAL DIFFERENCE METHOD 125

-- 8 of 199 --

V
B.1 Numerical solution 125
B.2 Stability 126
B.3 Non-linear material response 127
APPENDIX C DEFORMATION SHAPE AND MOMENT OVER TIME 129
C.1 Linear elastic 129
C.2 Ideal plastic 138
C.3 Elasto-plastic 146
APPENDIX D MODE SUPERPOSITION 155
APPENDIX E RAYLEIGH DAMPING 159
APPENDIX F MODE SHAPES AND EIGENFREQUENCIES, BEAM 1 161
APPENDIX G VERIFICATION OF DIFFERENT ANALYSES 163
G.1 SDOF-analysis versus modal-analysis with one mode 163
G.2 Modal-analysis with 25 modes versus FE-analysis (direct integration) 164
APPENDIX H VERIFICATION OF THE TRANSFORMATION FACTOR FOR
DAMPING, ΚC 165
H.1 Beam 1 166
H.2 Beam 2 168
H.3 Beam 3 170
H.4 Beam 4 172
H.5 Beam 5 174
APPENDIX I COMPARISON BETWEEN THE SDOF-MODEL WITHOUT
DAMPING AND THE FE-MODEL WITH DAMPING 177
APPENDIX J EVALUATION OF THE CAPACITY OF BEAM 1 179
J.1 Beam 1 without curtailment 179
J.2 Beam 1 with curtailment at L/6 180

-- 9 of 199 --

Denna sida skall vara tom!

-- 10 of 199 --

VII
Preface
This Master thesis is regarding the structural response for structures with different
material responses when subjected to an explosion. The work has been carried out at
the office of Reinertsen Sverige AB in Gothenburg during the period from June to
October 2012. The Master thesis is a collaboration between Reinertsen Sverige AB
and the Department of Structural Mechanics at Lund Institute of Technology, Lund
University, Sweden.
We would like to express our gratitude toward Morgan Johansson, Reinertsen
Sverige AB. He has helped us immensely throughout this Master thesis and has
always been available for guidance. Special thanks also go to Sebastian Andersson
and Hampus Karlsson at Reinertsen for their help with this Master thesis.
We would also like to thank the staff at Reinertsen Sverige AB in Gothenburg for
making the time spent at the office a memorable experience.
Our supervisor at the Department of Structural Mechanics, Per-Erik Austrell has
given us helpful comments and helped us with the layout and thanks go to him.
Furthermore, we thank our families for their support throughout our education.
Finally, we want to thank each other for having great discipline throughout the project
and having worked hard during these very intense but educational months.
Gothenburg, October 2012
Mattias Carlsson and Robin Kristensson

-- 11 of 199 --

VIII
Notations
Roman upper case letters
A Area
As Area of reinforcement
C Damping matrix
E Young’s modulus
Ec Young’s modulus for concrete
Es Young’s modulus for steel
EI Young’s modulus for reinforced concrete in stadium I
EII Young’s modulus for reinforced concrete in stadium II
Ek Kinetic energy
Epl Initial Young’s modulus for cracked reinforced concrete
F External force
Fc Force in concrete
Fe Equivalent force
Fk Characteristic pressure load
Fs Force in steel
G Shear modulus
I Moment of inertia
I Impulse
II Moment of inertia state I
III Moment of inertia state II
Ik Characteristic impulse
Iz Moment of inertia around z-axis
K Stiffness matrix
L Length
M Mass matrix
M Moment
Mel Maximum moment in elastic range
Mpl Ultimate moment
Mmax Maximum moment
MRd Ultimate moment capacity
P Pressure
P0 Ambient air pressure
Ppeak Peak pressure load

-- 12 of 199 --

IX
Q Equivalent static load
Qel Elastic equivalent static load
Qpl Plastic equivalent static load
R Internal resisting force
Rdyn Dynamic internal resisting force
Rm Maximum internal resisting force
Rsta Static internal resisting force
T Natural period
W Amount of energy
We External energy
Wel Elastic section modulus
Wi Internal energy
Wi,el Elastic internal energy
Wi,pl Plastic internal energy
Wi,ep Elasto-plastic internal energy
Wk Kinetic energy
Wpl Plastic section modulus
Wtot Total energy
Z Scaled distance
Roman lower case letters
a	
Acceleration
a	
Mean acceleration
c	
Concrete cover
c	
Damping
e	c	
Equivalent damping
p	c	
Pressure wave velocity
s	c	
Shear wave velocity
d	
Effective depth of cross-section
cc	f	
Concrete compressive strength
cd	f	
Design value of concrete compressive strength
sy	f	
Yield stress for steel
y	f	
Yield stress

-- 13 of 199 --

X
yd	f	
Design value of yield stress
h	
Height of cross-section
i	
Impulse intensity
k	
Stiffness
e	k	
Equivalent stiffness
I	k	
Stiffness state I
II	k	
Stiffness state II
	k	
Multiplying factor for allowed rotation capacity
0	l	
Distance from plastic hinge to zero moment
m	
Mass
e	m	
Equivalent mass
p	
Momentum
q	
Distributed load
q
Modal coordinate
r	
Radius of reinforcement bar
r	
Real distance
s	
Reinforcement bar spacing
t	
Time
at	
Arrival time
u	
Direction
u	
Displacement
u	
First derivative of u with respect to time t, velocity
u	
Second derivative of u with respect to time t, acceleration
el	u	
Elastic displacement
I	el	u ,	
Elastic displacement in stadium I
II	el	u ,	
Elastic displacement in stadium II
ep	u	
Elasto-plastic displacement
el	ep	u ,	
Elastic part of elasto-plastic displacement
ep,pl	u	
Plastic part of elasto-plastic displacement
max	u	
Maximum displacement

-- 14 of 199 --

XI
pl	u	
Plastic displacement
s	u	
Displacement of system point
tot	u	
Total displacement
x	u	
Displacement of wave in horizontal direction
y	u	
Displacement of wave in vertical direction
v	
Direction
v	
Velocity
v	
Mean velocity
s	v	
Velocity in system point
w	
Direction
w	
Amount of explosive
w	
Width
x	
Coordinate
x	
Depth of compression zone
cg	x	
Distance to centre of gravity
y	
Coordinate
z	
Coordinate
z	
Internal lever arm for reinforcement
Greek upper case letters
	
Incremental
Greek lower case letters
	
Damping constant Rayleigh damping
	
Ratio between Young’s modulus for steel and concrete
	
Damping constant Rayleigh damping
	
Strain
cu	
	
Ultimate concrete strain
el	
	
Elastic strain
pl	
	
Plastic strain
s	
	
Steel strain

-- 15 of 199 --

XII
x	
	
Horizontal strain
	
Bar diameter
	
Modal vector
c	
	
Partial factor for concrete
s	
	
Partial factor for steel
	
Curvature
c	
	
Transformation factor for the damping
cF	
	
Transformation factor with regard to the damping and the external load
k	
	
Transformation factor for the internal force
F	
	
Transformation factor for the external load
m	
	
Transformation factor for the mass
mF	
	
Transformation factor with regard to the mass and the external load
	
Shear slenderness
	
Wave length
	
Support rotation
pl	
	
Plastic rotation
rd	
	
Design value of allowed plastic rotation
	
Density
	
Radius of curvature
	
Stress
s	
	
Stress in reinforcement
x	
	
Horizontal stress
y	
	
Yield stress
	
Poisson’s ratio
	
Angular frequency
	
Damping ratio
	
Factor
	
Relative error

-- 16 of 199 --

1
1 Introduction
1.1 Background
Explosions are extreme loads that need to be considered in the design of structures for
various applications. Except from apparent cases, such as military installations and
civil defence shelters, design with regard to explosions is required for instance in the
processing industry and for tunnels. In a world where the common knowledge of how
to develop bombs and the level of threat from terrorist attacks grow bigger, it is also
of interest to make sure that potential targets of terrorist attacks can withstand an
explosion. Stockholm, December 2010, and Oslo, July 2011, are just two examples of
recent events where terrorist attacks have involved explosions in city environment.
It is also necessary to be able to analyse a structure subjected to an accidental
explosion. A structure subjected to such an accident may very well be thinner than
and not at all as strong as a structure designed to withstand an explosion. Whatever
the cause might be and the strength of a structure the devastation can be considerable.
Today, the knowledge of how to design buildings to withstand the effect of explosions
and other impact loads is limited. The Swedish Fortification Agency (in Swedish;
Fortifikationsverket) used to be the ones in Sweden with the most experience with
regard to explosions, and they produced handbooks that are to be used when
designing but they are difficult to follow and understand if one is not well-read in the
subject. The standards of how to design with regard to explosions are far from perfect
and therefore MSB (Myndigheten för Samhällsskydd och Beredskap) has for many
years been working to increase the knowledge within the field of physical protection.
Their goal is also to inform and enlighten today’s engineers and increase their
understanding of explosions. The engineers of this decade need to become more
familiar with dynamic and especially impulse loaded structures.
This project is a continuation of four previous Master theses carried out by
Nyström (2006), Ek and Mattsson (2009), Augustsson and Härenstam (2010) and
Andersson and Karlsson (2012), in which the behaviour of concrete beams and slabs
due to impulse loads were studied.
1.2 Aim
The aim of this Master thesis is to put together information about available design
approaches for impact loading on concrete structures. It will be a complement to
previous Master theses in this field.
Since the response for a structure subjected to a dynamic load differs from that of a
static load, one objective is to investigate if the moment is, at any time, too high
during the dynamic loading.
The damping of the structure will also be an important aspect of this Master thesis.
Will the damping have a great impact on the results? When neglecting the damping
one will obtain results on the safe side but when a more detailed analysis is conducted
the damping could very well be important.
An objective is to improve the SDOF-model so it can be more reliable. Often the
damping has been neglected but when it is included in the SDOF-analysis the
transformation factor for the damping needs to be determined.

-- 17 of 199 --

2
Curtailment of the reinforcement (shortened reinforcement) will also be investigated.
Structures intended to withstand explosions should be carried out with no
reinforcement curtailment. However, this is not necessarily the case for a civil
building. Hence, what will happen when the explosion hits a civil building? Will the
moment capacity be sufficient to carry this kind of load?
1.3 Method
A literature study was made mainly from reports and previous Master theses in the
subject to be able to compile existing knowledge and to explain the underlying theory
of explosions, material responses, dynamics and transformation of a structure to an
SDOF-system.
An SDOF-model was made in Matlab for calculating the displacements, moments,
energies and internal resistance for an arbitrary beam. The results for a certain studied
beam were compared to the maximum values from hand calculations based on a
characteristic impulse and a static equivalent load. This was done for a linear elastic,
ideal plastic and elasto-plastic material response.
Because there were no possibilities in actually testing the studied beam and
comparing the theoretical results to collected empirical data, non-linear FE-analyses
were made with the FEM software ADINA (2011), which were assumed to represent
the true behaviour.
The beam was modelled with 30 two-dimensional beam elements, which means that
there were limitations to the accuracy of the results, so therefore they have been
critically evaluated.
1.4 Limitations
No other material than reinforced concrete was analysed in this Master thesis.
However, the methods can very well be used for different materials with certain
changes. The material response is approximated with a linear elastic response, a
plastic response and an elasto-plastic response. These material responses have
previously been shown to be good approximations for this kind of analysis.
When the energy is calculated in the SDOF-model the transformation factors used
does not vary in time which.
This Master thesis does not cover any effects of shear as the time was limited and
there were other subjects of more interest. The shear force has also been studied
thoroughly in previous Master thesis by Andersson and Karlsson (2012). The analyses
are limited to simply supported beams without initial strain/stress and no torsion is
regarded.
The loading is chosen as an impulse load that can be interpreted as an explosion,
where the explosion is limited to a detonation, which means that explosions of gas
clouds are left out. Only the primary effects (shock waves) of explosions will be
studied, which means no regard is taken to shrapnel or nearby buildings falling.

-- 18 of 199 --

3
1.5 Outline of the report
The report is divided into Background theory (Chapter 2), Structural response of a
concrete beam (Chapter 3), Initial analyses and verification of the modelling
(Chapter 4), Mode superposition and damping (Chapter 5),

-- 19 of 199 --

Denna sida skall vara tom!

-- 20 of 199 --

5
Curtailment (Chapter 0) and Final remarks (Chapter 7).
Chapter 2 provides an introduction to explosions, material responses and basic
dynamics needed to explain the results in upcoming sections. The method for
transforming a real structure into a single degree of freedom-system is also presented.
Chapter 3 is the introduction to the reinforced concrete beam mainly studied in this
Master thesis. The properties and cross-section for the beam is shown along with
different load cases, and simple hand calculations for displacements, moments and
energies are made. It is also covered how the beam is modelled using the finite
element method, which is used for further analysis of the beam.
Chapter 4 shows the results of the finite element analysis for different material
responses in terms of displacement, moment and energy compared to the single
degree of freedom analysis and hand calculations made in the previous section. This
section is important for the understanding of the structural response due to an
explosion.
Chapter 5 describes how to simplify the dynamic analysis of a structure by only using
the necessary modes of vibration. The effect of damping is regarded to present the
importance of such.
Chapter 0 studies the possibilities of curtailment of concrete beams when subjected to
impact loading. This is investigated to determine whether problems will arise due to
the early moment development near the supports.
Chapter 7 concludes the Master thesis and gives recommendations for further studies
within this field.

-- 21 of 199 --

Denna sida skall vara tom!

-- 22 of 199 --

7
2 Background theory
In order to understand as much as possible of this Master thesis, basic background
theory is provided. The background theory will not cover everything and is often
merely an introduction of different subjects. The reader is referred to other given
literature for more information on the subjects. Since this Master thesis will deal with
structures exposed to explosions the reader needs to be familiar with the effects of an
explosion. It is also necessary that the reader understands how different materials
behave when loaded. The statics and dynamics are also important subjects needed to
be familiar with. In addition to this, an introduction of the SDOF-system is made.
2.1 Explosions
Explosions give rise to completely different loads compared to the more often used
static loads. Today’s engineers are more used to work with static loads but it is
necessary to study the dynamic response from explosions. Some basic theories in the
field of explosions will be presented and the reader is referred to Johansson and
Laine (2007) for more comprehensive information.
2.1.1 What is an explosion?
An explosion is a sudden release of energy with a related volume expansion. The
explosion will lead to an increase of light and temperature but above all a high
increase of pressure. For an explosion in midair the pressure will create a pressure
wave which will advance in a spherical motion originating from the point of source,
see Figure 2.1. The pressure will decrease with increasing distance from the source,
and hence, the distance is of utmost importance when regarding explosions. The time
it takes for the pressure wave to reach the object is referred to as arrival time, ta, and is
a way to relate the distance from the explosion to a certain object.
Explosion centre
Pressure decreases further
away from the centre
Figure 2.1. An illustration of how the energy propagates outwards from the source
of the explosion.
An explosion can be idealized with two phases, one positive and one negative phase.
The ordinary atmospheric pressure, which is referred to as ambient air pressure P0, is
at a temperature of 15°C approximately 101,3 kPa. The positive phase is when the

-- 23 of 199 --

8
pressure is increased to a pressure higher than P0. Due to the pressure wave the air
will move outwards creating a partial vacuum behind it, lack of air, which is referred
to as the negative phase. The pressure is here lower than the ambient air, and thus
perceived as a negative pressure. This development can be described with a pressure-
time relationship, as schematically shown in Figure 2.2. The overpressure in the
positive phase is considerably higher than in the negative phase. Further, the duration
in the former is shorter than in the latter, resulting in an impulse of the negative phase
that is somewhat larger than in the positive phase, approximately ten percent.
According to Johansson and Laine (2007) the pressure-time relationship is often
simplified with a linear decreasing pressure and the negative phase neglected due to
its minor influence, see Figure 2.3.
Pressure
Time
Negative pressure
Positive pressure
Shock front
P0
ta
Figure 2.2. An idealised shock wave from an explosion. The high amplitude positive
phase is followed by a longer negative phase with lower amplitude.
Pressure
Time
Shock front
P0
ta
Figure 2.3 A simplified shockwave assumes linearly decreasing pressure and
neglects the negative phase.

-- 24 of 199 --

9
When looking at blast loads it is of interest to compare the load velocity for different
kinds of loading. In Figure 2.4 a comparison has been made between different types
of load cases. The reader can see that the blast load is 107-108 faster than a static load.
1	0.1	0.01	0.001 10 100 1000 104 105 106 107 108
Earthquake	Static	Creep Impact Blast load
Figure 2.4 Difference in load velocity between different types of loading, the values
are obtained in relation to static load.
The ignition of an explosive is usually divided into high and low degree of explosion.
The higher degree of explosion is referred to as detonation and is the type of
explosion used in this Master thesis. A detonation will occur when the ignition of the
source of explosion occurs in supersonic speed, i.e. velocity above speed of sound,
which results in a high degree of explosion due to the very fast development. This is
the case for e.g. TNT and ANFO, where TNT is the commonly known explosive,
Trinitrotoluene, which is used as a standard measure of strength of bombs and other
explosives. ANFO is a worldwide industrial bulk explosive which consist of mainly
ammonium nitrate and less than 10 percent fuel oil. Since ANFO is both low in cost
and easy to mix it is widely used in civil explosions, such as mining and demolition,
even though it lacks in water resistance and performance in small spaces and is less
explosive. Because the ingredients to ANFO are easy to acquire it has also been used
in several terrorist attacks. However, the term is often used loosely in media in
describing IEDs, improvised explosive devices, in cases of fertilizer bombs. For
instance, the bomb used in the Oslo bombing on July 22, 2011 was a 950 kg fertilizer
bomb of type ANNM, ammonium nitrate and nitro methane, which increases
demolition power 10-30 percent over plain ANFO, according to Bloomberg (2011).
The other alternative for an explosion is referred to as deflagration. This is a low
degree of explosion because the ignition is of subsonic nature, velocity below speed
of sound. An example of deflagration is the ignition of a gas cloud.
2.1.2 Effects of explosions
There are certain concepts that the reader needs to be familiar with to understand the
variation in magnitude and duration for a single explosion. A simplified case can be
referred to with four basic concepts which are reflection, mirroring, confinement and
diffraction. Reflection occurs when the pressure wave hits a stiffer medium such as a
wall. According to Johansson and Laine (2007) the pressure of the wave can be
increased by up to 20 times due to reflection. This phenomenon is important to keep
in mind when dealing with explosions close to a building, and especially in city
environment.
Mirroring is a kind of reflection. It occurs when the explosion detonates close to a
reflecting surface, see Figure 2.5. In theory the magnitude can double but due to some
energy loss to the ground or surface, the mirroring factor will decrease. According to
Johansson (2000) a mirror factor of 1.8 is often used.

-- 25 of 199 --

10
Explosion
without obstacles
Equivalent free
explosion
Explosion with
mirroring
Half of the released energy is
prevented from entering the
ground
W
W
2W
Figure 2.5 Schematic figure illustrating the ideal mirroring.
The explosion is often sought to act with high energy in only one direction, which can
be achieved by confining the explosive. The reflections of the explosive within the
confinement delay the energy dispersal, and thereby increase the impact.
Diffraction is another important phenomenon. This occurrence will give rise to
change of direction for the wave front. In that way a wave front can reach behind and
past buildings and objects, see Figure 2.6. This is a complex phenomenon but
important to regard when designing structures.
Load
Diffraction
Diffraction
Reflection
Reflection
Confinement
Figure 2.6 Clarification of the shock wave phenomena that occurs in urban
environment. Johansson and Laine (2007)
The distance from the point of source is a very important factor to consider when
dealing with explosions. There are scale laws that are used to compare different loads
and distances. For the case when the detonation occurs with free expansion on all
sides, thus allowing a spherically expanding wave front, the scaled distance can be
expressed as
3/1
W
r
Z 	
(2.1)

-- 26 of 199 --

11
where r is the real distance and W is the energy amount (generally referred to the
equivalent amount of kg TNT). For other cases than explosions in mid air the reader is
referred to Johansson and Laine (2007).
Experiments have been made to determine the equivalent amount of a specified
explosive to the amount of TNT. Usage of Table 2.1 is a fast way to do this
comparison and it can be beneficial to combine with Equation (2.1). The amount of
energy released, W, will then be referred to as
weight	equivalent	w	W 		
(2.2)
where w is the amount of explosive.
Table 2.1 Equivalent weight of various types of explosive where TNT is used as
reference. Note that different equivalent weights are obtained for the
pressure and impulse. From ConWep (1992).
Explosive Equivalent weight
Pressure Impulse
ANFO 1) 0.82 0.82
Composite A-3 1.09 1.07
Composite B 1.11 0.98
Composite C-4 1.37 1.19
H-6 1.38 1.15
HBX-1 1.17 1.16
Pentolite 1.42 1.00
RDX 1.14 1.09
TNT 1.00 1.00
Tritonal 1.07 0.96
1) A mixture of diesel and fertilizer.
The so called Archive bomb is an example of an explosion used by MSB to describe a
weapon effect in the design of civil defence shelters in Sweden, Johansson and
Laine (2007). This bomb contains 125 kg of TNT and detonates 5 m away from the
studied target, affecting it with a uniform pressure that decreases with time. The blast
is assumed to have a spherical spreading, with a peak pressure of 5000 kPa and an
impulse intensity of 2800 Ns/m². When assuming a triangular load the corresponding
load duration will for this detonation be 1.12 ms. This is a relatively strong explosion
and ordinary buildings will not be able to withstand such an explosion.
There are guidelines for how much TNT that can be contained in different explosion
sources, see Table 2.2. These guidelines have been compiled in order to quickly be
able to draw conclusions of an explosion.

-- 27 of 199 --

12
Table 2.2 Definition of the explosive amount for different types of containers
where the quantity is indicated by the equivalent amount of TNT.
Johansson and Laine (2007).
Explosion source Amount TNT
[kg]
Limit for damage
to the eardrum 1)
Slight damage to
residental
houses 2)
Limit for
window
damage 3)
Pipe bomb 2.3 kg - 21 m
(8 kPa, 26 Pas)
259 m
(0.3 kPa, 2 Pas)
Suitcase
bomb
23 kg - 46 m
(8 kPa, 56 Pas)
564 m
(0.2 kPa, 4 Pas)
Small
passenger car
227 kg 30 m
(44 kPa, 370 Pas)
98
(8 kPa, 120 Pas)
457 m
(1 kPa, 25 Pas)
Big passenger
car
455 kg 38 m
(44 kPa, 460 Pas)
122
(8 kPa, 150 Pas)
534 m
(1 kPa, 34 Pas)
Van/
Minivan
1 818 kg 61 m
(43 kPa, 720 Pas)
195
(8 kPa, 240 Pas)
838 m
(1 kPa, 54 Pas)
Small truck 4 545 kg 91 m
(37 kPa, 900 Pas)
263
(8 kPa, 330 Pas)
1143 m
(1 kPa, 73 Pas)
Truck
without
trailer
13 636 kg 137 m
(34 kPa, 1250 Pas)
375
(8 kPa, 480 Pas)
1982 m
(1 kPa, 87 Pas)
Truck with
trailer
27 273 kg 183 m
(31 kPa, 1490 Pas)
475
(8 kPa, 600 Pas)
2134 m
(1 kPa, 130 Pas)
1) Lethal air blast range
2) Building evacuation distance
3) Outdoor evacuation distance

-- 28 of 199 --

13
2.2 Materials
When studying the response of loaded structures, the behaviour of the material is
often complex but can be simplified with help of linear elastic, ideal plastic and
elasto-plastic response. These simplifications usually give close approximations to the
actual material response. Often these approximations are seen as potential sources of
error but since comparisons between different methods are made, all using these
approximations, it is disregarded in this Master thesis. In this section an introduction
to the different responses are presented.
2.2.1 Linear elastic
For linear elastic behaviour there is a linear relation between stress and strain, as can
be seen in Figure 2.7. The strain increases with increased stress and after unloading
the strains will go back to zero. This means that the strain is proportional to the stress
for materials with linear elastic behaviour and the stress, σ, can be expressed with
Hooke’s Law:

	 	 E	
(2.3)
where E is the Young’s modulus and ε is the strain.
ε
σ
E
1
Figure 2.7 Stress, σ, as function of strain, ε, for linear elastic materials.
When a structure of linear elastic material is deformed it will gain an internal resisting
force, R, proportional to the displacement, u, as can be seen in Figure 2.8. This
relation is described by
u	k	R 		
(2.4)
where is the structural stiffness.
u
R
k
1
Figure 2.8. Structural response, R, as function of displacement, u.

-- 29 of 199 --

14
A simply supported beam with linear elastic material response will deform, when
subjected to a uniformly distributed load, with the shape shown in Figure 2.9.
Figure 2.9. Deformation shape for simply supported beam when using linear elastic
material and subjected to a uniformly distributed load.
2.2.2 Ideal plastic
For materials with ideal plastic behaviour the deformations are zero until the stress
reaches the material yield stress. When this happens the deformations will occur, as
seen in Figure 2.10. In theory these deformations are infinite but in reality there are
limits such as the plastic rotation capacity for beams subjected to a bending moment
and the ultimate strain limit for tensioned reinforcement bars. With the external static
load, F, on the structure, the internal force, R, can be expressed as



	
	
 0	all	for	for
0	and	for
u	R	F	R
u	R	F	F
R
m	m
m
(2.5)
where Rm is the maximum internal force.
Figure 2.10 Ideal plastic material response, where (a) is the material response; (b)
is the structural response.
A beam with ideal plastic material response will deform with the shape shown in
Figure 2.11, when subjected to a uniformly distributed load.
(b)	(a)
R
u
ε
Rm	fy
ε
ε
σ

-- 30 of 199 --

15
Figure 2.11. Deformation shape for a simply supported beam when using ideal
plastic material subjected to a uniformly distributed load.
2.2.3 Elasto-plastic
The elasto-plastic material behaviour is a combination between linear elastic
behaviour and ideal plastic behaviour, see Figure 2.12. The material is fully reversible
while in its elastic phase but when the load reaches the yield limit it will initiate
permanent deformations. When unloaded, the deformations will decrease, following a
curve parallel to the linear elastic curve. If the body is loaded again, the deformations
will follow the elastic behaviour until the yield limit is reached and the plastic
deformations will continue where it last ended. With the external load, F, on the
structure, the internal force, R, can be expressed as





 for
for
m	m
m	el
R	F	R
R	F	ku
R	
(2.6)
where uel is the elastic displacement.
σ
ε
ε
R
u
ε
Rm
(a) (b)
Unloading and
reloading
Unloading and
reloading
fy
εpl upl	εel uel
Figure 2.12. Elasto-plastic case (a) material response; (b) structural response.
2.2.4 Theory of plasticity and plastic hinges
When looking at a beam with rectangular cross-section subjected to pure bending, it is
assumed for both theory of elasticity and theory of plasticity that the stress and strain
is symmetric and linearly distributed over the height of the cross-section, see
Figure 2.13. While the stresses in the beam are below the yield stress the cross-section
will have an elastic response according to Hooke’s Law, and the elastic moment can
be described as

-- 31 of 199 --

16
2	/	h
I
M el



(2.7)
where σ is the stress in the outer fibre and I is the moment of inertia for the cross-
section. For a rectangular cross-section this is calculated as
12
3
wh
I 	
(2.8)
where w is the width and h is the height of the cross-section. Combining Equation
(2.7) and (2.8) the elastic moment can be written as
el	el W	M 	
	
(2.9)
where
6
2
wh
Wel 	
(2.10)
When the stress reaches the yield stress fy the cross-section will start to yield. If the
load is further increased the beam enters an elasto-plastic behaviour until the whole
cross-section has yielded, see Figure 2.13. When the elasto-plastic state is reached
only the inner elastic part will follow Hooke’s Law. For the plastic part the strain
response stays linear but the stresses are modified to not exceed the yield limit.
Just before the whole cross-section yields the maximum moment capacity, Mpl, is
reached and according to Isaksson et al. (2010) for rectangular cross-sections it can be
described as
pl	y	pl W	f	M 		
(2.11)
where
4
2
wh
Wpl 	
(2.12)

-- 32 of 199 --

17
el	M	M 
pl	el M	M	M 	
y	

y	

y	

y	
	s	

s	

a)
b)
s	

s	

y	

s	
			y	

		s	

pl	M	M 
c)
Figure 2.13. Stress- and strain distribution for (a) before yielding starts; (b) part of
the cross-section is yielding; (c) the whole cross-section is yielding
(ultimate moment capacity).
When the beam reaches its full plastic capacity the majority of deformations will
occur in the most strained area of the beam. The moments and curvature of this small
area will be large in comparison to the rest of the beam and this will cause a local
plastic rotation in the area. The small deformable area where this large curvature is
developed is called a plastic hinge, and the moments in the plastic hinge are assumed
to be Mpl. For statically determined systems only one plastic hinge will develop, and a
mechanism is formed. For statically undetermined systems of order there will be
plastic hinges before the mechanism is formed. This is illustrated in
Figure 2.14. If the beam is subjected to a dynamic load more plastic hinges can be
formed.

-- 33 of 199 --

18
Figure 2.14. Schematics of plastic hinges for a (a) simply supported beam; (b) fixed
beam, Nyström (2006).
After the plastic hinge has been developed the beam can still be deformed. How
much, though, is determined by the plastic rotation capacity.
2.2.5 Plastic rotation capacity
Rotation capacity refers to the yield capacity during bending and is measured in the
maximum angular change that a plastic hinge can go through while keeping the
maximum moment capacity. This means that when a plastic or elasto-plastic material
reaches its yield stress it can deform further until the maximum rotation capacity is
reached and failure occurs.
For concrete members there are several methods of determining the rotational
capacity, but they may provide different results. According to Johansson (1997) one
of the reasons may be because of the significant difference in steel properties used in
reinforcement bars over the last decades.
Curvature Curvature
Model Model
Parts with yielding	Part with yielding
Plastic hinge Plastic hinges
(a) (b)

-- 34 of 199 --

19
From Eurocode 2, CEN (2004), the method of estimating the maximum allowed
rotation capacity is acquired from a diagram with regard to the quality of concrete,
reinforcement class and the ratio between the compressed zone x and the effective
depth d, as seen in Figure 2.15.
x / d
pl [10 -3 rad]
betong-
krossningavsliten
armering
Crushing of
Concrete
Steel
Ripped off
Ripped off
Figure 2.15. Diagram based on Eurocode 2 CEN (2004) describing maximum
allowed plastic rotation.
The lines in the Figure 2.15 are based on a shear slenderness λ=3.0, where λ is given
by
d
l0

		
(2.13)
where l0 is the length between the point of zero moment and the plastic hinge and d is
the effective depth to the reinforcement.
If λ has values other than 3, the rotation capacity should be multiplied with a factor



	k	
(2.14)
in the following manner:
pl	rd k	

	  		
(2.15)

-- 35 of 199 --

20
2.3 Dynamics
To fully understand how an explosive load affects a structure it is important to look at
the dynamic conditions. While structures are usually designed to withstand static
loads for infinite load time, an explosion will affect the structure with high pressure
during a short duration of time. This means that even though the pressure from the
explosion is much higher than the pressure of the static load the structure is designed
for, the structure might still withstand. When designing structures from a dynamic
perspective it is therefore important to compare the energy from the explosion to the
energy required for the structure to collapse. The basics of dynamics are given in this
section so that the reader may understand this concept of designing.
2.3.1 Kinematics
2.3.1.1 Velocity
The definition of velocity is change of displacement over time, i.e. if an object moves
from u0 to u1 during time t0 to t1 the mean velocity of that object is expressed as
0	1
0	1
t	t
u	u
v 

	
(2.16)
By letting the time step be infinitesimal the change in motion will also be
infinitesimal and the velocity at time t can be determined as
u
dt
du
t	t
u	u
t	v 		



0	1
0	1	
)	(	
(2.17)
2.3.1.2 Acceleration
The definition of acceleration is the change of velocity over time, which means the
mean acceleration is defined as
0	1
0	1
t	t
v	v
a 

	
(2.18)
In the same way as for velocity, if the time step is infinitesimal the change of velocity
will also be infinitesimal and the acceleration at time t can be determined as
u
dt
dv
t	t
v	v
t	a 		



0	1
0	1	
)	(	
(2.19)
2.3.2 Kinetics
2.3.2.1 Force and Pressure
According to Newton’s second law a force F is defined as the acceleration of a mass:

-- 36 of 199 --

21
a	m	F 		
(2.20)
where m is mass and a is acceleration.
The pressure P is defined as the force F over an area A:
A
F
P 	
(2.21)
2.3.2.2 Momentum, impulse and impulse intensity
The momentum, p, of an object is defined as the objects mass m times its velocity v:
mv	p 	
(2.22)
If the object is subjected to a force F from time t0 to t1 the difference in momentum
can be written as
		
1
0
)	(
t
t
dt	t	F	p	
(2.23)
If an object is already moving with velocity v0 and momentum p0 when it is subjected
to the force the new momentum p1 can be written as
p	p	p 		 0	1	
(2.24)
where Δp is the so called impulse I. By insertion of Equation (2.19) and (2.20) in
(2.23) the impulse can be rewritten as
mv	dt	t	a	m	dt	t	ma	dt	t	F	I
t
t
t
t
t
t
			 		 1
0
1
0
1
0
)	(	)	(	)	(	
(2.25)
Since shockwaves are measured in pressure the impulse from an explosion can also be
written as
	
1
0
)	(
t
t
dt	t	P	A	I	
(2.26)
The intensity i of the impulse can be described as an impulse acting on an area, or the
pressure over time, as
		
1
0
)	(
t
t
dt	t	P
A
I
i	
(2.27)
For the idealized shockwave in Figure 2.16 the impulse intensity is illustrated as the
area under the pressure-time graph.

-- 37 of 199 --

22
P
t
i
t0 t1
Figure 2.16 The impulse intensity i is the area under the pressure-time curve.
Since the impulse is defined as the area times the force over time there are two
extreme cases for the impulse intensity. Either the pressure is infinitely high for an
infinitesimal time or the force is constant for an infinitely long time, see Figure 2.17.
The first case with the infinitely high pressure is called the characteristic impulse Ik
and the latter is called the pressure load, Fk.
Force, F
Time, t
Ik
ta
(a)
Force, F
Time, t
ta
Fk
 (b)
Figure 2.17 Illustration of extreme dynamic cases starting at time ta:
(a) characteristic impulse, Ik and (b) characteristic pressure load, Fk.
2.3.3 Work
The term work refers to the amount of energy required to move a body subjected to a
force. Work can be expressed either in potential or kinetic energy, Wk, and is usually
divided into internal work, Wi, and external work, We, which is a useful tool for
studying the response of a structure subjected to a load. In a closed system all energies
are said to be conserved, which means no energy will be added or lost from the
system but only transformed. This means, according to work equilibrium:
k	i	e W	W	W 		
(2.28)
In reality, though, there will always be energy losses due to friction and heat
development, i.e. the damping of the system.

-- 38 of 199 --

23
2.3.3.1 External work
External work refers to either the external forces that move the body through space or
as the impact transferring kinetic energy into potential energy in the body. The kinetic
energy Ek of a body with mass is given by the equation
2
2
mv
Ek 	
(2.29)
where m is the mass and v is the velocity.
By inserting Equation (2.25) in (2.29) the kinetic energy and external work for a body
subjected to an impulse can be expressed as
m
I
E	W k	e 2
2
		
(2.30)
When transferring kinetic energy into potential energy in a structure the stiffness will
induce a resistance that increases with time, but internal work induced during the
duration of the load is negligible compared to the external work. Therefore Equation
(2.30) is only correct when the load duration and resistance is infinitesimal, i.e. when
the impulse I corresponds to the characteristic impulse Ik:
m
I
E	W k
k	e 2
2
		
(2.31)
Since the resistance increases with time, the structure will have time to absorb more
energy from a long impulse, and hence, the external work will decrease for a longer
impulse load than for the characteristic impulse. This is illustrated in Figure 2.18.
We,1 - characteristic impulse
We,2 - for arbitrary shockwave
Force, F
Time, t
dt
I1 = I2 but We,1 > We,2
t1
Figure 2.18 Different external work on the structure for the same total impulse but
with different durations.

-- 39 of 199 --

24
2.3.3.2 Internal work
The internal work arises as a response to the load and is dependent of the structure’s
geometry and material behaviour. Although depending on which type of material the
structure has the properties for the internal work will differ but the final value will
always be the same, see Figure 2.19.
u
R
Wi
uel
k
u
R
Rm
upl
u
R
Rm
utot	uel
utot = uel + upl
k
(a) (b) (c)
Figure 2.19 Structural response when assuming (a) linear elastic response, (b)
plastic response, (c) elasto-plastic response.
The definition for internal work is the absorbed energy in the structure over the
deformation and is expressed by
	
1
0
)	(
u
u
i du	u	R	W	
(2.32)
where R(u) is the resisting force of the structure. From Section 2.2 the different types
of idealized material behaviour are linear elastic, ideal plastic and elasto-plastic
behaviour. By combining Equations (2.6) and (2.32) the three equations can be given
as
2
)	(
2
0	0
,
el
u
el
u
el	el	i
ku
du	ku	du	u	R	W
el	el
		 		
(2.33)
pl	m	pl	m
u
m
u
pl	pl	i u	R	u	R	du	R	Pdu	du	u	R	W
p	pl
					 		 0	)	(
1
0
0
0	0
,	
(2.34)
pl	m
el
u
u
m
u
el
u
ep	ep	i u	R
ku
du	R	du	ku	du	u	R	W
p
el
e	tot
				 		 2
)	(
2
0	0
,
1,1
1,
1,1
(2.35)
From the work equilibrium, Equation (2.28), the deformations for elastic and plastic
behaviour can be given respectively as
	m
I
km
I
u k	k
el 		
(2.36)
where

-- 40 of 199 --

25
m
k

		
(2.37)
is the angular frequency and
m
k
pl mR
I
u 2
2

(2.38)
For elasto-plastic behaviour the structure is first deformed from u = 0 with elastic
behaviour until the load reaches the limit Rm. This happens at uel,1 and if the load
F ≥ Rm the deformations will be plastic until utot, see Figure 2.20.
u
F
Rm
Wi
utot	uel,1
utot = uel,1 + upl,1
u
F, R
utot
Wi
We
R
uel,1
utot = uel,1 + upl,1
We=Wi
(a) (b) (c)
Figure 2.20 System with elasto-plastic response: (a) single degree of freedom-
system, (b) force-displacement relation, (c) energy equilibrium between
external ,We, and internal energy, Wi.
If the pressure load, Fk, is applied to a structure with elasto-plastic behaviour, the
plastic deformations can be reached even though the magnitude of the load is lower
than the response limit, Rm. This is due to the need of fulfilling the work equilibrium
in Equation (2.28) and the fact that the external work from pressure load has a
rectangular shape whilst the internal work has a triangular shape during elastic
deformations, see Figure 2.21. If the pressure load, Fk, is half the size of the response
limit, Rm, or larger, plastic deformations will be formed; the size of the plastic
deformations depend on the stiffness, k.
F(t)
R(u)
m u

-- 41 of 199 --

26
u
R
Rm
Wi
utot	uel
utot = uel + upl
We
Fk
Figure 2.21 System with elasto-plastic response. Plastic deformations are formed
even though the load is lower than the response limit, Rm, due to the
energy equilibrium between external, We, and internal energy, Wi.
As seen from Figure 2.20 the internal work for elasto-plastic behaviour can be written
as
)	2	(
2 1,	1, pl	el
m
i u	u
R
W 		
(2.39)
where uel,1 is the limit where the material behaviour goes from elastic to plastic
response is defined as
k
R
u m
el 	1,	
(2.40)
By combining Equation (2.31) and (2.39) in the work equilibrium Equation (2.28) the
plastic deformations for elasto-plastic behaviour can be expressed as
2	2	2
1,	1,
2
1,
el
pl
el
m
k
pl
u
u
u
mR
I
u 				
(2.41)
where upl is the response for an ideally plastic material behaviour, also seen in
Equation (2.38). The total deformation is given by
2
1,
1,	1,
el
pl	pl	el	tot
u
u	u	u	u 				
(2.42)
2.3.3.3 Work with regard to recoil
For doubly reinforced concrete beams with different amount of top and bottom
reinforcement the material response differs depending on which direction the beam is
deflecting. As an example, in Figure 2.13 the material response is shown for a doubly
reinforced concrete beam with (a) equal bottom and top reinforcement and maximum
internal resistance; (b) equal bottom and top reinforcement but lower maximum
internal resistance for the recoil, and (c) more bottom than top reinforcement,
resulting in both lower stiffness, k2, and maximum internal resistance, Rm,2, when the
beam is deflecting upward compared to when it is deflecting downward with stiffness,
k1, and maximum internal resistance, Rm,1.

-- 42 of 199 --

27
Rm,1
Rm,1
D
E
R
u
ε
A
B C
k1
(a)
k1
WCD
WDE
D
E
H
R
u
ε
A
B C
k1
k1
Rm,1
Rm,2
(b)
WDEF
WCD	WGH
WFG
G
F
R
u
ε
H
A
B C
D
E
k1
k2
Rm,1
Rm,2
(c)
WDEF
WCD
WFG
WGH
G
F
Figure 2.22. Internal resistance as function of displacement for a beam with (a) k1=k2
and Rm,1=Rm,2; (b) k1=k2 and Rm,1>Rm,2 and (c) k1>k2 and Rm,1>Rm,2.
The internal resistance varies linearly between A and B where the maximum internal
resistance is reached. The beam then yields until all kinetic energy has been
transformed into potential energy in C. The beam then has a surplus of energy and
wants to return to its new equilibrium D, where all potential energy is transformed
into kinetic energy. The beam in (a) here continues to deflect until all kinetic energy
has been transformed to potential energy and the beam oscillates between C and E.
The integral over CD describes the work WCD and the integral over DE describes the
work WDE. If no additional loads and no energy losses are assumed, WCD = WDE.
For a beam with properties according to (b), where the second maximum internal
resistance Rm,2 is smaller than Rm,1, the beam will yield before all kinetic energy has
been absorbed. The yield limit F is determined by the energy equilibrium where
WCD=WDEF. Here, the beam will oscillate between F and H as WFG=WGH.
For a beam with properties according to (c), where both the secondary stiffness k2 and
maximum internal resistance Rm,2 is smaller than for the beam in (b), the beam can
yield further in the second direction if the load is large enough. When the beam starts
to deflect downward the internal resistance varies linearly from A to B, where the
yielding starts. The beam yields from B to C until all kinetic energy has been
translated into potential energy, and the beam begins to return to its new equilibrium
D. As the resistance passes D, due to the kinetic energy, the stiffness properties
change and the resistance varies linearly with the lower stiffness k2 until the maximum
resistance Rm,2 is reached in E. Here the beam yields until all kinetic energy has been
transformed into potential energy in F. The beam then begins to return to the new
equilibrium G. The resistance varies with the same stiffness between F and G as
between E and D. When G has been passed, the beam is deflecting downward again
and so the resistance varies between G and H with the same stiffness as between A
and B and between C and D. As the beam reaches H, all kinetic energy has been
consumed and transformed into potential energy, so the beam starts to return to

-- 43 of 199 --

28
equilibrium G. The beam will now oscillate between H, G and F without any further
plastic deformations.
This material response was from the beginning intended to be studied in this thesis
with regard to the recoil of the beam. However, due to lack of time this has not been
done.
2.3.4 Equivalent static load
Instead of using the dynamic impulse, it is possible to translate it into an equivalent
static load which is more intuitive for most structural engineers. The equivalent static
load is derived, mainly from the equations in Section 2.3.3.2, so that its maximum
deflection will be the same as the impulse load. For this statement to be true, the
maximum potential energy from the static load should be equal to the maximum
potential energy from the dynamic load. Since the total energy of an undamped closed
system is constant over time it is fair to assume that the maximum kinetic energy is
reached when the potential energy is zero. Therefore
case	dynamic	energy,	kinetic	Maximum	case	static	energy,	Potential 	
(2.43)
2.3.4.1 Elastic response
For an elastic system the static load, Q, can be expressed as
el	ku	Q 	
(2.44)
and the external energy, We, as
k
Q	ku
W el
e 2	2
2	2
		
(2.45)
Insertion of Equation (2.31) and (2.45) in (2.43) gives
m
I
k
Q	ku k	el
2	2	2
2	2	2
		
(2.46)
thus
	k	k I
m
k
I	Q 		
(2.47)
2.3.4.2 Plastic response
For the plastic case the maximum static load Q is determined by the maximum
resistance Rm
m	R	Q 	
(2.48)
and so the external energy can be expressed as

-- 44 of 199 --

29
pl	pl	m	e Qu	u	R	W 		
(2.49)
Insertion of Equation (2.49), (2.31) and (2.45) in (2.43) gives
m
I
Qu k
pl 2
2
	
(2.50)
thus Q can also be expressed as
pl
k
mu
I
Q 2
2
	
(2.51)
2.3.4.3 Elasto-plastic response
The elasto-plastic response is a combination of elastic and plastic response which
means that the equivalent static load is, as in the plastic response determined by
R	Q 	
(2.52)
but where R is determined by elastic stiffness k, through the elastic deformation uel,1
from Equation (2.40), and the plastic deformation upl,1 from Equation (2.41):
pl	ku	R 	
(2.53)
2.3.5 Wave propagation
When a body is subjected to an impulse load, the energy will propagate through the
body as mechanical waves. Depending on the speed of these waves, different parts of
the body will be affected by the impulse at different times, which is of great
importance in structures subjected to explosions. In order to explain what happens, the
wave propagation is discussed. This is illustrated in Figure 2.23 where a 3 m high and
5 m deep concrete structure is subjected to an explosion from the left side. The speed
of which information travels in concrete is about 3500 m/s, which means that it will
take about 1.4 ms before the rear wall “knows” about the explosion. This can be seen,
as the rear wall after 1 ms is still unaffected by the load, but after 2 ms it has started to
deform. The dark colour indicates that cracks have developed fully in the front wall
after 2 ms while the floor and roof is still unaffected. After 3 ms, though, the cracking
has begun in floor, roof and rear wall. It is not until after 5 ms that the largest
deformations in the front wall occur.

-- 45 of 199 --

30
t = 1 ms t = 2 ms
t = 3 ms t = 5 ms
Figure 2.23 Response of a shelter subjected to an explosion from the left. The
deformations are enhanced 20 times and the dark colour marks fully
developed cracks. From Johansson (1999)
In order for mechanical waves to be able to propagate they require a medium (gas,
fluid or solid) which means they cannot propagate through vacuum, as
electromagnetic waves can. Mechanical waves can further be categorized as
longitudinal waves, transverse waves and surface waves.
Longitudinal waves, often called pressure waves or compressional waves, travel
parallel to the direction of energy while transverse waves, commonly called shear
waves, travel perpendicular to the direction of energy, see Figure 2.24. Surface waves
travel in elliptical patterns and can be seen for example as ripples on a water surface.

-- 46 of 199 --

31
(a)
(b)
(c)
Half wave length λ/2
Wave length λ
uy 	ux
ux
Figure 2.24 Waves propagating through a body for (a) material at rest; (b) pressure
wave; (c) shear wave.
Mechanical waves are caused by the oscillation of particles in the body and are
therefore highly dependent on the elastic and internal properties of the material,
NDT (2009). Pressure waves are both stronger and faster than shear waves and can
travel through all mediums, while shear waves can only travel through solids.
According to Laine (2012) the celerity of a pressure wave, cp, is
					
	
 )	(	)	(
)	(
v	v
E	v
cp 2	1	1	3
1
(2.54)
where E is the Young’s modulus of elasticity, ρ is the density and ν is the Poisson’s
ratio. Usually the energy propagates through the body as a combination of all the
waves, but the type and direction of the load will affect the type of wave that will be
dominant in the body. For example, the majority of information in a beam loaded by
an axial force will propagate as a pressure wave while in the case of a load
perpendicular to the longitudinal axis the shear wave will be much more prominent.
The velocity of the shear wave, cs, is greatly affected by the shear modulus of the
material and can be written as

G
cs 	
(2.55)
with the shear modulus given by
)	1	(	2 v
E
G 
	
(2.56)

-- 47 of 199 --

32
Pressure waves are also commonly referred to as sound. The speed of sound for
different mediums is seen in Table 2.3. These values are estimated velocities that
varies with change in density, e.g. from change in temperature or pressure.
Table 2.3. Estimated velocity of sound for different mediums. Based on The
engineering toolbox (2012).
Medium Velocity (m/s)
Air 343
Aluminium 6420
Concrete 3200-3600
Iron 5130
Lead 1158
Rubber 40-150
Steel 6100
Water 1433
2.3.6 Vibrations
A beam subjected to a dynamic load can be described by a mass-spring system as seen
in Figure 2.25. The deformation resistance of the spring is generally referred to as
stiffness, k. The stiffness depends on the Young’s modulus E, moment of inertia I and
length L of the beam. The response of a beam depends on the type of loading, for
example a point source or a distributed load, and also the boundary conditions, for
example simply supported or a clamped beam. When dealing with arbitrary dynamic
loads the damping, c, is often included.

-- 48 of 199 --

33
sta	R	dyn	R
m
R
m
(a) (b)
)	(t	F
k	
c
m
)	(t	F
(c)
Figure 2.25 Mass spring system with (a) properties; (b) damped mechanical forced
vibration; (c) undamped mechanical forced vibration.
When the mass-spring system is externally loaded by the dynamic load F(t) the
internal forces Rsta and Rdyn act in opposite direction in an attempt to bring the
displaced beam back to its equilibrium position. The internal forces Rsta and Rdyn refer
to the static and dynamic resistance in a structure and for a linear elastic response and
they are given by
ku	Rsta 	
(2.57)
u	c	Rdyn 		
(2.58)
where k is the stiffness, c is the damping, u is the displacement and is the velocity of
the body.
According to Newton’s second law of motion, seen in Equation (2.20), there is
equilibrium when
u	m	R	R	t	F sta	dyn 				)	(	
(2.59)
or
)	(t	F	R	R	u	m sta	dyn 				
(2.60)
By insertion of Equations (2.57) and (2.58) in (2.60) the dynamic equation of motion
can be written as
)	(t	F	ku	u	c	u	m 		 		
(2.61)
In an idealized closed system with no friction, no energy losses and the driving force
F(t)=0, this motion is called an undamped free vibration and will continue to oscillate
with the same frequency to infinity if not disturbed. In case of explosions there will be
a driving force in form of a short impulse to the structure and during this time the
motion will be a so called forced vibration until the load wears off and the motion
becomes a free vibration. In reality, though, all structures have a damping effect that

-- 49 of 199 --

34
will reduce the displacements in the oscillation so the simplification of an idealized
undamped structure will always be on the safe side. Because of this, it is not always
necessary to regard the damping, which makes the equation more complex, and the
equation can thus be simplified further by neglecting the effect of damping.
The simplified method is initially presented and used during this Master thesis, but in
Section 5.2 the effects of damping are included and compared to the undamped case.
2.4 Transformation to SDOF-system
When working with dynamic loads it is common to transform the affected structure
into a single degree of freedom-system. This is done to simplify the calculations and
can often be sufficiently accurate. When transforming an impulse loaded beam into an
SDOF-system, so called transformation factors are used.
2.4.1 SDOF-system
A beam is often referred to as a simple structure, Chopra (2011). This is because a
beam’s deflection approximately can be simplified as the movement of only one point
in one direction. This point is called the system point and is usually placed where the
beam’s deflection is largest, which for a simply supported beam that is subjected to a
uniformly distributed load is in the mid span. By idealizing a beam in this order one
will simplify the calculations, making it easy to determine the deflection for a specific
load. When only using one point to describe the displacement for a certain system it is
called a single degree of freedom-system, referred to as an SDOF-system, see
Figure 2.26. In order to perform the calculations for a beam it is necessary to
concentrate the equivalent mass, me, to the system point, also called lumped mass.
c	I	E	L	m ,	,	,	,
)	(t	q
e	k	e	c
e	m
)	(t	Fe
Figure 2.26. Transformation of the beam into a single degree of freedom-system.
When transforming the beam into an SDOF-system the properties of the beam, such
as length L, Young’s modulus E and the moment of inertia I, will be included in the
stiffness k. For a simply supported beam and a uniformly distributed load the stiffness
can be derived from the maximum displacement in the mid span:
qL	u
L
EI
EI
qL
u 	 max	3
4
max 5
384
or
384
5
(2.62)

-- 50 of 199 --

35
It is also known that the force is equal to the stiffness times the displacement:
ku	F 	
(2.63)
qL	F 	
(2.64)
and thus
3
5
384
L
EI
k 
(2.65)
A beam deflects differently depending on the loading. In cases with dynamic loading
the beam is affected by the frequency of the load. Different mode shapes can be used
to describe the deflection, see Figure 2.27. The lower the frequency, the lower the
degree of mode shapes. An SDOF-system, however, is only able to describe the first
mode shape. In theory, if an impulse that consists of every frequency, a so called
Dirac-impulse, affects a beam it will excite every mode of vibration with equal
energy. However, if the Dirac-impulse is evenly distributed over a perfectly
symmetrical beam it will only excite every other mode, the symmetrical modes, since
the non-symmetrical modes has a net deflection of zero. Since the first mode shape
only has one deflection it will be the most prominent; hence the SDOF-system is a
good way to describe the deflection.
To be able to describe higher order of mode shapes it is necessary to use multi degree
of freedom, MDOF, systems. The number of degrees of freedom corresponds with the
number of mode shapes it can describe. For example, a three degree of freedom
system can describe the first three mode shapes, also seen in Figure 2.27. The number
of mode shapes excited mainly depends on the time interval of the impulse. Higher
mode shapes oscillate with higher frequencies, which is reversely proportional to
time. For longer time intervals mainly lower frequencies will be excited, but as the
time interval approaches zero the frequencies become infinite.
Figure 2.27. The three first mode shapes for a simply supported beam.
Second bending mode
Third bending mode
First bending mode

-- 51 of 199 --

36
2.4.2 Transformation into an equivalent SDOF-model
When transforming a beam, subjected to an impulse, into an SDOF-model it is not
sufficient to calculate the stiffness for the beam and use the same mass for example. It
is necessary to transform the SDOF-model into an equivalent SDOF-model. This
transformation is done with help of transformation factors κ, Johansson and
Laine (2009). The transformation factors have indexes indicating which parameter
they are affecting and m, c, k and F are the beam’s real mass, damping, stiffness and
external force respectively:
m	m m	e	
		
(2.66)
c	c c	e	
		
(2.67)
k	k k	e	
		
(2.68)
F	F F	e	
		
(2.69)
where the index e denotes that it is an equivalent parameter. The initial equation of
motion, Equation (2.61), can now be re-written:
)	(t	F	ku	u	c	u	m F	k	c	m	

	
	
	 		 		
(2.70)
When deriving the transformation factors an assumption of conservation of energy is
made. This is the foundation for the transformation factors. For κm, κk, and κF, there is
an assumption of conservation of kinetic-, internal- and external energy respectively.
According to Biggs (1964) the transformation factors for internal energy κk is equal to
the factor for external energy κF:
F	k	

	 	
(2.71)
The derivation of the transformation factors is regarded to the support conditions,
stiffness distribution, load profile and material model, i.e. the deformation of the beam
is of utmost importance. The expression of the mass factor κm and the external force
factor κF will be as follows:




L	x
x s
m dx
u
x	u
L 0
2
2
)	(	1
	
(2.72)




L	x
x s
F dx
u
x	u
L 0
)	(	1
	
(2.73)
where us is the maximum displacement and u(x) is the deflection of the beam. For the
full derivation of the transformation factors the reader is referred to Johansson and
Laine (2009).

-- 52 of 199 --

37
In order to simplify the equations, Equation (2.70) is divided by κF:
)	(t	F	ku	u	c	u	m
F
k
F
c
F
m 		





 		
(2.74)
which leads to
)	(t	F	ku	u	c	u	m cF	mF 		 		

		
(2.75)
when implementing (2.71) and where
F
m
mF


 	
(2.76)
and
F
c
cF


 	
(2.77)
The values for some transformation factors for different load cases, material models
and supports for beams are gathered in Table 2.4 and Table 2.5.
Table 2.4. Transformation factors for a beam subjected to a point load. From
Johansson and Laine (2009).
Point load on beam element
Elastic deformation curve
m	
	
0.486 0.371 0.445 0.236
F	
	
1.000 1.000 1.000 1.000
mF	
	
0.486 0.371 0.446 0.236
Plastic deformation curve
m	
	
0.333 0.333 0.333 0.333
F	
	
1.000 1.000 1.000 1.000
mF	
	
0.333 0.333 0.333 0.333

-- 53 of 199 --

38
Table 2.5. Transformation factors for a beam subjected to uniform load. From
Johansson and Laine (2009).
Uniformly distributed load on beam element
Elastic deformation curve
m	
	
0.504 0.406 0.483 0.257
F	
	
0.640 0.533 0.600 0.400
mF	
	
0.788 0.762 0.805 0.642
Plastic deformation curve
m	
	
0.333 0.333 0.333 0.333
F	
	
0.500 0.500 0.500 0.500
mF	
	
0.667 0.667 0.667 0.667
The κc factor has not been derived in the same manner as the other transformation
factors, the damping in general is difficult to determine. It is believed that κc=κk but
has not fully been studied. Since an impulse has a very short duration the impact of
the damping is very small and has often been neglected. It is also on the safe side to
neglect the damping which is why Equation (2.75) often is simplified to
)	(t	F	ku	u	m	mF 			
	
(2.78)
In this Master thesis it will be investigated whether the assumption
1		
F
c
cF


	
(2.79)
is correct or not.
There are no special elasto-plastic transformation factors so when dealing with elasto-
plastic materials one is referred to either use elastic, plastic or both transformation
factors. In previous Master theses it has been shown that using these transformation
factors, shown in Table 2.5, for an elasto-plastic material is not fully satisfying.
Andersson and Karlsson (2012) have studied the possibility of having time dependent
transformation factors. They show that this type of modelling can be very satisfying.
The factors are then derived using a FE-analysis and the beams deformation at
multiple times. However, usage of time dependent transformation factors are not
desirable because the simplicity of the SDOF-model loses its benefits when a FE-
analysis need to be performed simultaneously. This Master thesis will use the ordinary
transformation factors and discuss the agreement.

-- 54 of 199 --

39
2.4.3 Equivalent work
With the knowledge of the transformation factors it is now possible to derive the
equivalent work an SDOF-model performs. In alignment with Section 2.3.3 the
external, internal and kinetic energy can be re-written to include the transformation
factors:
s	F	e Fu	W	
		
(2.80)
s	F	i u	u	R	W )	(	
		
(2.81)
2
2
s	m
k
mv
W

	
(2.82)
As mentioned before, there has to be equilibrium between the different energy levels.
For a characteristic impulse the external energy is equal to the kinetic energy,
according to Equation (2.31). The goal is to derive the equivalent work achieved by a
characteristic impulse. In order to do so it is necessary to consider the equivalent
equation of motion in its basic form from Section 2.4.2:
)	(t	F	u	k	u	m e	e	e 			
(2.83)
where
m	m m	e	
		
(2.84)
k	k k	e	
		
(2.85)
F	F F	e	
		
(2.86)
The definition of an impulse in Equation (2.25) can be expressed for an equivalent
SDOF-model in the following manner:
 	
1
0
t
t
s	m	F	SDOF mv	dt	t	F	I	

	 )	(	
(2.87)
Since the equivalent impulse should be equal to the characteristic impulse times the
force transformation factor
k	F	SDOF I	I	
		
(2.88)
the following expression can be derived:
k	F	s	m I	mv	

	 	
(2.89)
Since the goal is to derive the equivalent work achieved by a characteristic impulse
the expression for the velocity is squared and then inserted in the equation for kinetic
energy, Equation (2.82):

-- 55 of 199 --

40
2
2






 m
I
v
m
k	F
s


(2.90)
F
mF
k
F
m
k
k m
I
m
I
E	


 2	2
2
2
2
		
(2.91)

-- 56 of 199 --

41
3 Structural response of a concrete beam
A wall with the purpose of withstanding an impact load is normally designed with a
symmetric cross-section, with equal amount of reinforcement on both sides and no
curtailment. Impact loads from explosions are usually anticipated for buildings such
as nuclear power plants, petro-chemical industries and protective facilities, but
generally not in other civil structures. In civil structures there is therefore a risk that
even if the wall does not fail from the first hit it might fail from either the negative
phase of the explosion, the recoil from internal stiffness or a combination of them.
When designing with regard to an explosion the engineer needs to understand how the
structure can absorb energy without getting a brittle failure. A reinforced concrete
beam is good in this aspect since the mass is high and the structure can be designed to
have a ductile behaviour. There is a big difference between a statically loaded
structure and a dynamically loaded. When subjected to an explosion it is good if the
structure can yield since the energy absorption then increases. Hence, it is better to
have a structure with the ability to absorb energy than one with high stiffness that is
reluctant to deform since this might lead to a brittle failure. However, a structure with
high stiffness and good yielding ability is also good with regard to an explosion.
When performing analyses of a wall it is sometimes beneficial to simplify it as a beam
because the calculations become simpler and the results are on the safe side; a beam
can only carry the load in one direction while a wall carries it in two. To better
explain the behaviour of an impulse loaded beam, an example is made for a reinforced
concrete beam subjected to an explosion. With no possibility of actually testing the
beam, it is modelled and analysed with the finite element software ADINA (2011)
which is considered to represent the true behaviour good enough. An equivalent
SDOF-system and simplified hand calculations are also made for the beam and these
are compared to the results from ADINA. The beam is further simplified by limiting it
to the three material behaviours explained in Section 2.2, i.e. linear elastic, ideal
plastic and elasto-plastic, where the linear elastic is divided into stadium I (uncracked
concrete) and stadium II (cracked concrete).
3.1 Geometry and loading
The analysed beam is a simplification of a 1 m wide strip from a 3 m high and
200 mm deep concrete wall with no openings, see Figure 3.1. The wall is situated in a
civil building meaning the reinforcements in both sides does not have to be equal, in
contrary to for example civil defence shelters and military facilities. However, the
reinforcement in this wall is steel B500B Ф10 s150, with a concrete cover of 45 mm
on both sides. The reinforcement in compression is mainly included to be the
reinforcement in tension when the wall recoils and it could be neglected as
reinforcement in compression. In this example it is included to better show the
calculation method.
The wall is mainly analysed for an impulse with the intensity i of 1000 Pas; the peak
pressure will be 500 kPa and the load duration 4 ms. If the bomb is assumed to have a
hemispherical spreading this load characteristics would, according to ConWep (1992),
approximately correspond to two, so called, suitcase bombs, see Table 2.2, placed on
the ground 10 m away from the wall. Each suitcase bomb contains approximately
25 kg TNT, i.e. a total of 50 kg TNT. This is shown in Figure 3.2. Since the distance

-- 57 of 199 --

42
to the wall would correspond to 10 m the load will affect the wall with a near
uniformly distributed pressure that decreases with time.
Bottom reinforcement
3.0 m
(a) 	(b)
0.2 m
1.0 m
Top reinforcement
Figure 3.1. (a) Impact loaded wall with boundary conditions; (b) Cross-section.
10 m
3 m
50 kg TNT
Figure 3.2. Schematic figure of the explosion and the impact loaded wall.
In order to give the reader better understanding in the importance of load time, the
wall is also analysed for other load cases with different peak pressures, but with the
same impulse intensity as the first load case. It is in Section 5.1 shown that the
different load cases will influence the result a lot. It is then interesting to have both
more and less intense impulses to compare with the default load case. The load case
denoted as load case 1 will be the default load case in this Master thesis unless
anything else is mentioned. All load cases are shown in Figure 3.3.

-- 58 of 199 --

43
Load case Ppeak [kPa] t [ms]
LC0 	250 	8
LC1 	500 	4
LC2 	1,000 	2
LC3 	4,000 	0.5
t
Ppeak
Ppeak, 3
Ppeak, 2
Ppeak, 1
t3 	t2 	t1 	t0
Ppeak, 0
Figure 3.3. The different load cases with the same impulse intensity i=1000 Pas.
LC1 is the default load case used in this Thesis.
The support condition for the wall is in reality somewhere between clamped and
simply supported, but in the analyses it is assumed to be simply supported along its
top and bottom, which also gives values on the safe side. The wall can then be
simplified to a 1.0 m wide, simply supported beam with properties according to
Table 3.1. When structures are subjected to accidental loads the partial factors, γc and
γs, are set to 1.2 and 1.0 for concrete and steel, respectively.
Table 3.1. Properties for the beam
Concrete C30/37
Reinforcement Ф10 s150 B500B
Ec 33 GPa
Es 200 GPa
fcc 30 MPa
γc 1.2
fsy 500 MPa
γs 1.0
Concrete cover, c 45 mm
Height, h 0.2 m
Length, L 3.0 m
Width, w 1.0 m
Effective height, d 150 mm

-- 59 of 199 --

44
3.2 Hand calculations
While the SDOF- and FE-solutions display results for displacements, forces and
energies over time, it is often of interest to perform a quick check of the maximum
values. This is easily done by hand, and uses only parts of the input for the SDOF-
analysis.
To determine the displacements by hand, Equation (2.36), (2.38) and (2.42) from
Section 2.3.3.2 are used:
	e
k
e	e
k
el m
I
m	k
I
u 		
(3.1)
m	e
k
pl R	m
I
u 2
2
	
(3.2)
R	m
I
k
R
u	u	u
e
k
e
pl	ep	el	ep	ep 2	2
2
			 ,	,	
(3.3)
In order to calculate these, the equivalent mass, stiffness and maximum internal
resistance must first be determined.
3.2.1 Mass and stiffness
With a density of 2400 kg/m³ the mass for the beam can be calculated to
kg	1440	0	.	3	2	.	0	0	.	1	2400 									 L	h	w	m	
	
(3.4)
In order to obtain the right deformation shape, the mass is transformed to equivalent
mass for the elastic and the plastic case by multiplying it with the transformation
factor kmF from Table 2.5:
kg	1135	1440	788	.	0 			 m	m mF	el	
	
(3.5)
kg	960	1440	667	.	0 			 m	m mF	pl	
	
(3.6)
For the case of a simply supported beam, the stiffness of the beam is calculated as
3
5
384
L
EI
k 	
(3.7)
where E is Young’s modulus of elasticity, I is the moment of inertia and L is the
length of the beam. Depending on whether the cross-section is cracked or not, the
moment of inertia can, for the elastic material response, further be divided into II and
III for stadium I and II, respectively.
Because the amount of reinforcement is low it is likely that the top reinforcement in
stadium II will be in tension and not in compression, and the lever will be very small
in comparison to the bottom reinforcement. When designing, the forces in the top

-- 60 of 199 --

45
reinforcement can be assumed to be negligible, but for this analysis they are regarded
to keep down the potential sources of error. The moment of inertia for stadium I is
then given by
2	2	2
3
)	(	(	)	'	(	'	(	)
2
(
12 cg	s	cg	s	cg	I x	d	A	x	d	A	x
h
wh
wh
I 															
	
		
(3.8)
where xcg is the centre of gravity for the cross-section, α is the ratio between the
Young´s modulus for steel and concrete, d and d’ is the distance from the top to the
bottom and top reinforcement, respectively, and As and As’ is the area of the bottom
and top reinforcement bars:
06	.	6
33
200 		
c
s
E
E
	
(3.9)
2	2
2
mm	523
150
1000
5
4 				

	
	

	
s
b
A	A s	s '	
(3.10)
Since the cross-section is symmetric
mm	100
2 	 h
xcg	
(3.11)
inserting Equation (3.9), (3.10) and (3.11) in (3.8), the moment of inertia can be
calculated as
4	8	2
2	2
3
mm	10	80	.	6	)	100	150	(	523	)	1	06	.	6	(
)	100	50	(	523	)	1	06	.	6	(	)	100
2
200
(	200	1000
12
200	1000
					
									

	I	I
(3.12)
In the case of elastic stadium II where the cross-section has cracked the moment of
inertia is
2	2
3
)	'	(	'	)	(
3 d	x	A	x	d	A
wx
I s	s	II 						
	
		
(3.13)
where x is the height of the compressed zone. Since, there are no normal forces acting
on the cross-section, i.e. pure bending, the compression zone can be determined using
area equilibrium:
0	)	(	)	'	(	'	(
2
2
									 x	d	A	d	x	A
wx s	s	

		
(3.14)
Solving for x gives the height of the compressed zone:
mm	30		x	
(3.15)
By inserting (3.15) in (3.13) the moment of inertia for the cracked case is given as

-- 61 of 199 --

46
4	7
2	2
3
mm	10	60	.	5
)	50	30	(	523	06	.	6	)	30	150	(	523	06	.	6
3
30	1000
	
								

	II	I
(3.16)
The stiffness for elastic stadium I and II, respectively, can now be calculated using
Equation (3.7):
N/m	10	38	.	6
3	5
10	80	.	6	10	33	384 7
3
4	9
	

			


I	k	
(3.17)
N/m	10	26	.	5
3	5
10	60	.	5	10	33	384 6
3
5	9
	

			


II	k	
(3.18)
3.2.2 Maximum internal resistance
For a simply supported beam when loaded with a distributed load the maximum
internal resistance is defined as
w
L
M
R Rd
m 	 8
(3.19)
where w is the width and L is the length, which means in order to acquire the
maximum resistance Rm the moment capacity MRd must first be determined. For a
doubly reinforced concrete beam the moment capacity can be derived from the model
of the cross-section seen in Figure 3.4.
w
As
x
d 	h
c
εcu
εs d-x
x
fcd
Fs
0.4x	0.8x Fc
d = h – c – Φ/2 	z = d – 0.4x
zMRd
d'
As’ εs’ Fs’
d'
Figure 3.4. Model for moment capacity for a doubly reinforced concrete beam.
As seen in Figure 3.4 the height of the compressed zone x can be determined by force
equilibrium:
0	'	'	8	.	0 						 s	s	s	s	cd A	A	w	x	f	

		
(3.20)
where the top reinforcement is still assumed to be in tension so the term As’·σs’
becomes negative for this beam, see Figure 3.5.

-- 62 of 199 --

47
w
As
x
εcu
εs d-x
x
fcd
0.4x
Fc+Fs’
z = d – 0.4x
z	MRd
As’ 	εs’
d'
d'-x
Figure 3.5. Actual strain for the beam.
It is also assumed that the steel in both top and bottom reinforcement yields while the
outmost fibres in the upper part of the concrete reach its ultimate compressive strain.
This means that σs and σs' is set to the designing yield strength fyd.
Solving Equation (3.20) for x gives the height of the compressed zone:
mm	26		x	
(3.21)
A control of the assumption is done:
3	3
'
' 10	23	.	3
26
26	50
10	5	.	3 	 	

		

	 x
x	d
cu	s	

		
(3.22)
OK
E
f
s
sd 10	5	.	2	10	23	.	3 3	3 				 	
(3.23)
When solving the moment equilibrium around the bottom reinforcement the moment
capacity is given as
kNm	9	.	46	)	50	150	(	500	523	)	26	4	.	0	150	(	1000	26	8	.	0
2	.	1
30
)	'	(	'	'	)	4	.	0	(	8	.	0
											
											 d	d	A	x	d	w	x	f	M s	s	cd	Rd	

(3.24)
Finally the maximum internal resistance can be calculated as
kN	125	0	.	1
0	.	3
9	.	46	8	8 	

	

 w
L
M
R Rd
m	
(3.25)
3.2.3 Deformation
With the equivalent mass, stiffness and internal resistance calculated, the maximum
deformations can now be calculated. Using Equation (3.1), the maximum deformation
for elastic stadium I and II are calculated, respectively, as
mm	2	.	11
10	38	.	6	1135
1000	0	.	3	0	.	1
7
	, 
	
	
	I	el	u	
(3.26)
mm	8	.	38
10	26	.	5	1135
1000	0	.	3	0	.	1
6
	, 
	
	
	II	el	u	
(3.27)

-- 63 of 199 --

48
From Equation (3.2) the maximum plastic deformation is calculated:
mm	5	.	37
10	125	960	2
)	1000	0	.	3	0	.	1	( 3
2

		
	
	pl	u	
(3.28)
For elasto-plastic behaviour the deformation is subdivided in elastic and plastic
deformation as seen in Equation (3.3). By inserting known values in this equation the
maximum elasto-plastic deformation can be determined as
mm	4	.	49
10	125	960	2
)	1000	0	.	3	0	.	1	(
10	26	.	5	2
10	125 3
2
6
3

		
	

	

	ep	u
(3.29)
where the elastic part of the deformation is
mm	8	.	23
10	26	.	5
10	125 6
3
, 


	 k
R
u el	ep	
(3.30)
and therefore the plastic part is given by
mm	6	.	25	8	.	23	4	.	49	,	, 				 el	ep	ep	pl	ep u	u	u
(3.31)
3.2.4 Equivalent static loads
In Section 2.3.4 it was shown how dynamic loads can be translated into equivalent
static loads, and thus, the dynamic reactions can be calculated when maximum
deflection occurs. From Equation (2.47) the equivalent load for the uncracked case is
kN	711
1135
10	38	.	6
1000	0	.	3	0	.	1
7
, 

				
		k	I	el I	Q	
(3.32)
and for the cracked case
kN	204
1135
10	26	.	5
1000	0	.	3	0	.	1
6
, 

				II	el	Q	
(3.33)
From Equation (2.51) the equivalent load for the plastic case is calculated as
kN	125		 m	pl R	Q	
(3.34)
3.3 ADINA – Methods and modelling
In this Master thesis the commercial finite element program ADINA (2011) is used
when performing FE-analyses. In order to help the reader understand the procedures
when discussing the beam and the results, descriptions about how ADINA works and
how the beam is modelled in ADINA have been included. This will also help the
interested to make the calculations with a different finite element program if desired.

-- 64 of 199 --

49
3.3.1 Methods in ADINA
To model a simply supported beam for dynamic analyses where the strain is small it is
beneficial to use beam elements. The beam elements are 2-noded beams with constant
cross-sections, and comes in two sub-types, namely two-dimensional (2D) and three-
dimensional (3D) beam elements. 3D beam elements use seven integration points
when calculating the stress distribution over the height of the cross-section, as seen in
Figure 3.6, and it is in ADINA not possible to choose any other combination. This is
one of the reasons why it is beneficial to use 2D beam elements in ADINA since it is
then possible to make a choice of the number of integration points.
(a)
fyd
fyd
(b)
fyd
fyd 	fyd
fyd
(c)
Figure 3.6. (a) Expected stress using 7 integration points; actual stress distribution
using (b) 7 integration points, (c) 3 integration points.
If one for a 2D beam element chooses three integration points the stress varies linearly
over the height of the cross-section whilst for the 3D beam elements it varies with a
6th degree polynomial, resulting in a divergence between the expected stress
distribution shown in Figure 3.6a and the one used in ADINA, Augustsson and
Härenstam (2010). However, when only using three integration points one can have
more control over the calculations. The stress distribution is then known and hence,
2D beam elements with three integration points are chosen as the elements used in
this Master thesis.
There is a second option available but this can only be used when using a linear
elastic material response. The moments are extracted as nodal forces in ADINA. A
third option for extracting the moments from ADINA is to extract the stresses. This
has not been done in this Master thesis but it is discussed in Andersson and
Karlsson (2012) that it may be beneficial to do so. This is because when studying the
moment envelope one can see that the yield moment is actually exceeded somewhat,
even though this should not be possible. However, when extracting the results as
stresses, this does not occur; the yield moment is never exceeded using this method.
Why ADINA lets the nodal moment exceed the yield moment is not known but it is
believed to be the result from numerical errors in the post processing of the results.
This is not further investigated as the yield moment is not exceeded by much.
However, because of this the figures of moment envelopes with plastic and elasto-
plastic material response will be modified so that the yield moment is never exceeded.
When solving dynamic problems in ADINA with the direct integration method one
can choose between two different integration schemes. One can either solve the
system using an implicit or an explicit integration scheme. In the implicit solution
method ADINA uses Newmark’s constant-average-acceleration method (commonly
known as the trapezoidal rule), where the parameters δ and α from the Newmark

-- 65 of 199 --

50
method are set to 0.5 and 0.25, respectively. For the explicit solution method the
central difference method, described in Appendix A, is used. This is a special case of
the Newmark method with the parameters δ and α set to 0.5 and 0, respectively. The
central difference method is a fast and efficient solving method but it is only
conditionally stable, meaning it requires a time step Δt smaller than a critical time step
Δtcr to give accurate results, Bathe (1996). If the time steps are too large, though, the
method will be unstable, meaning that the result will become incorrect. When solving
problems regarding explosions the time steps will be very small in order to describe
the motion accurately, since the duration of the pressure increase is so short, and
therefore the central difference method can be effectively used even in complex
analyses. According to Bathe (1996), the central difference method is mainly used
when a lumped matrix can be assumed and when the velocity-dependent damping is
neglectable. The solutions for a linearly elastic beam using both the implicit and
explicit solution methods as well as a hand calculation are compared in Figure 3.7.
Figure 3.7 Comparison between implicit and explicit analysis in ADINA and the
hand calculation.
As can be seen from the figure, the implicit solution agrees well with the hand
calculation while the explicit solution differs from the implicit in both amplitude and
frequency. This is probably because the explicit solution uses a lumped mass matrix
while in the implicit method a consistent mass matrix is used, ADINA (2011). The
phase difference may depend on the fact that the angular frequency will change with a
modification of the mass, see Equation (2.37).
Since the central difference method is a very good method when using lumped mass,
the method is preferable for the SDOF-model. This means that even though the beam
will be modelled with an explicit method for the SDOF-model, the FE-analysis will
be performed with the implicit method. The FE-analysis will also be performed with a
mode superposition-analysis which will be dealt with in Section 5.1.
-15
-10
-5
0
5
10
15
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement
Hand
Implicit
Explicit

-- 66 of 199 --

51
3.3.2 Modelling in ADINA
Due to the fact that ADINA gives an incorrect stress distribution when using 3D-
elements, see Section 3.3.1, the beam has been modelled with 30 rectangular 2D
beam-elements and meshed with two nodes per element. To capture the different
material behaviours described in Section 2.2 the elements are modelled either with
elastic isotropic or plastic bi-linear materials. Since ADINA cannot easily handle the
cracks in the elastic stadium II response an equivalent Young’s modulus is acquired
by multiplying the Young’s modulus with the ratio between the moments of inertia
from Equation (3.12) and (3.16):
GPa	72	.	2	33
10	8	.	6
10	6	.	5 8
7
	


	 I
I
II
II E
I
I
E	
(3.35)
Further, ADINA cannot handle an ideal plastic material; therefore these elements are
modelled with a bi-linear material with very high initial stiffness:
GPa	3300	100 		 I	pl E	E	
(3.36)
and yield limit as follows:
MPa	0	.	7
2	.	0	0	.	1
6	10	9	.	46 2
3


	
	
el
Rd
yd W
M
f	
(3.37)
When modelling the plastic material in this way the wave speed will be changed, due
to the high Young’s modulus, and problems will occur. These problems will however
not be of great impact for this Master thesis and is therefore neglected. This has been
investigated in a previous Master thesis and the interested reader is referred to
Andersson and Karlsson (2012). In the elasto-plastic analysis the equivalent Young´s
modulus EII, Equation (3.35), is used together with the yield limit fyd, Equation (3.37).
Thus, using equivalent values on EII and fyd it is possible to simulate the correct
mechanical properties of the reinforced concrete beam.
The modelled force acting on the beam is a distributed line load that goes from zero to
Ppeak,n in 0.01 ms, and then subsides linearly until the time tn where the pressure
becomes zero, see Figure 3.3. The modelled force is an attempt to imitate load case 1.
The reason for the linearly increasing pressure with one time step of 0.01 ms is
because ADINA cannot deal with an increase from zero to Ppeak in no time without
cutting the top values.
It is very important that the right time increments are chosen so that the characteristics
of the load are implemented properly, as this is easily missed. If the time increments
are too large or not adjusted to synchronise with Ppeak, ADINA will assume a lower
load, i.e. it is important that the time step is adjusted to Ppeak or vice versa. This is
shown in Figure 3.8 where Load 1 is the sought load and Load 2 is the, by ADINA,
wrongfully assumed load due to too large time increments.

-- 67 of 199 --

52
t
P
Ppeak, 1
Ppeak, 2
t1 	7t1 	3t2 	tend	t2
Load 1
Load 2
0
Figure 3.8. Assumed loads in ADINA depending on size of time increments.
The beam is modelled as a simply supported beam and is restricted to move in the x-
direction at one of the supports. Remember that even though the beam often is
referred to as a horizontal beam it may as well be part of a wall and thus vertically
situated and horizontally loaded.
y
x
Figure 3.9. Boundary conditions for the studied beam.

-- 68 of 199 --

53
4 Initial analyses and verification of the modelling
To present an overall picture of the structural response due to a dynamic load,
analyses of the beam from the previous section is made in this section. This is done
with regard to the three material responses: elastic, plastic and elasto-plastic material
response. The analyses are also made in order to verify the material responses
described in Chapter 2, and they are made in three steps: Displacement, moment and
energy balance.
4.1 Displacement
By comparing the displacements to the maximum deformation capacity it is possible
to determine which material response the beam will take on for a specific load case,
and ultimately if it will be able to resist an explosion. The displacements are
calculated and compared for the beam described in Chapter 3.
The deformations from different solution methods are compared for the four different
material behaviours so that the accuracy of the SDOF-method can be evaluated. It is
important to find how well the SDOF-solution correlates with the corresponding FE-
solution.
Firstly, the midpoint displacement is plotted. The system point in the SDOF-model is
situated in the middle of the beam, thus will the SDOF-analysis also refer to the
midpoint. Secondly, the deformation shapes from the FE-analysis are plotted to see if
the transformation factors used in the SDOF-analysis are obtained from a correct
assumption of the actual deformation shape.
4.1.1 Elastic response
In the analysis for linear elastic stadium I it can be seen that the SDOF-analysis
correlates very well with both the FE-analysis from ADINA and the hand calculations
made in Section 3.2.3, see Figure 4.1. The hand calculations, which are theoretical
maximum values of the displacement, will generally give higher results compared to
the more exact solution because they are derived using the simplification that the
impulse load is equivalent to a characteristic impulse load.

-- 69 of 199 --

54
Figure 4.1 Midpoint displacement for elastic stadium I material response.
Similar to stadium I the maximum displacement in elastic stadium II correlates well
between the FE- and SDOF-solution and the hand calculations, but there is a noticable
difference in the two numerical solutions, see Figure 4.2. While the SDOF-solution
has a smoothe curve the FE-solution shows a somewhat irregular pattern. This is
because the FE-model considers several bending modes while the simplified SDOF-
model only uses the fundamental, first, bending mode.
Figure 4.2 Midpoint displacement for elastic stadium II material response.
It can also be seen that the amplitude of the oscillations in stadium II are higher but
the frequency is lower than in stadium I, which is due to the decreased stiffness in the
cracked concrete. This once again depends on the important relation in
Equation (2.37).
By looking at the elastic deformation shapes for different time steps plotted in
Figure 4.3 and Figure 4.4 it is clear that several different transformation factors are
-15
-10
-5
0
5
10
15
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement
Hand
FE
SDOF
-60
-40
-20
0
20
40
60
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement
Hand
FE
SDOF

-- 70 of 199 --

55
required to accurately describe the deformation shape of the beam. In the beginning it
appears like the beam has a rigid body motion. It is not until after about two ms that
the deformation shape resembles the assumed shape for stadium I, and more than
five ms for stadium II. The interesting thing is to look at the deformation shape for the
first five ms where it differs in time; after this the shape will look the same but with
larger deflection. This development of deformation shapes in time is seen for all types
of cross-sections, different stiffness for the beam and for larger or smaller loads. It is
only the deformation magnitude and the occurence in time that is different.
Figure 4.3 Deformation shapes at different time steps for elastic stadium I material
response.
Figure 4.4 Deformation shapes at different time steps for elastic stadium II
material response.
0.0
1.5
3.0
4.5
6.0
7.5
9.0
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Deformation,
 u [mm]
Coordinate, x [m]
Deformation shape
1 ms
2 ms
3 ms
4 ms
5 ms
0.0
1.5
3.0
4.5
6.0
7.5
9.0
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Deformation,
 u [mm]
Coordinate, x [m]
Deformation shape
1 ms
2 ms
3 ms
4 ms
5 ms

-- 71 of 199 --

56
To give a better picture of how the deformation shape differs with time from that of a
rigid body motion, the deformation shapes at different time steps are plotted against
the corresponding rigid body motion in Figure 4.5. Initially the beam moves like a
rigid body, but it appears as if vertical waves propagate from the ends of the beam,
causing parts of the beam to deflect faster than with the rigid body motion. While the
wave propagation becomes clearer with time, the midpoint displacements follow the
rigid body motion, but after about 3 and 4 ms the two waves meet and the midpoint
starts to deflect faster. Why this phenomenon occurs is not fully understood but a
connection between the wave propagation in the beam and the duration of the effect
can be seen.
Figure 4.5 Deformation shapes at different time steps for elastic stadium II
material response compared to the corresponding rigid body motion.
4.1.2 Plastic response
In the plastic analysis there is a significant difference between the three solution
methods, see Figure 4.6. As for the elastic case, the hand calculations are derived
from the assumption of the characteristic impulse load which explains the gap
between the hand calculation and the SDOF-results. The reason why the plastic
SDOF-solution differs from that of the FE-solution is believed to be because the
assumed deformation shape in the SDOF-model differs from the one obtained in the
FE-analysis. In the SDOF-model the transformation factor is set constant and will
always be underestimated, which leads to overestimated displacements. Also, because
the beam is first modelled with an elastic material response with very high stiffness,
the celerity of the waves will be 10 times higher which will affect the FE-solution but
not the SDOF-solution.
0.0
1.5
3.0
4.5
6.0
7.5
9.0
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Deformation,
 u [mm]
Coordinate, x [m]
Deformation shape
1 ms rbm
2 ms rbm
3 ms rbm
4 ms rbm
5 ms rbm
1 ms
2 ms
3 ms
4 ms
5 ms

-- 72 of 199 --

57
Figure 4.6 Midpoint displacement for plastic material response.
In Figure 4.7 the plastic deformation shape is plotted from 3 to 11 ms to show when
the plastic hinge develops. It can be seen that the deformation shape starts out as a
rigid body motion for the middle of the beam while the beam ends are prohibited to
move. This shape is seen for different load cases but the length of the part that moves
like a rigid body is shorter for less impulsive loads. As the beam proceeds to deflect
further, the strained ends become longer while the almost uncurved part in the middle
becomes shorter. As the middle part is decreasing, a concentrated plastic hinge
becomes more prominent. It is not until after 11 ms that the deformation shape is
similar to the assumed shape shown in Figure 2.11.
Figure 4.7 Deformation shapes at different time steps for plastic material response.
0
10
20
30
40
50
60
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Displacement ,
 u [mm]
Time, t [ms]
Displacement
Hand
FE
SDOF
0
5
10
15
20
25
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Deformation,
 u [mm]
Coordinate, x [m]
Deformation shape
3 ms
5 ms
7 ms
9 ms
11 ms

-- 73 of 199 --

58
4.1.3 Elasto-plastic response
The elasto-plastic material behaviour is the one that best describes the true response of
the concrete beam. Both the SDOF- and FE-model are modelled so that the beam acts
as an elastic material until the yield limit is reached and the yielding starts. However,
the beam will revert to elastic oscillations, and because the beam has yielded some it
will oscillate about a position different from the initial position.
Since the SDOF-model is based on assumptions of the deformation shape, it is
important to find one that corresponds well to the actual shape. To find the best
corresponding deformation shape of the elasto-plastic behaviour in the SDOF-model
it is modelled for three different cases. In the first and second case it is assumed to
have elastic and plastic deformation respectively by setting the transformation factors
to the ones used for linear elastic or ideal plastic behaviour. In the third case the
elasto-plastic deformations are modelled by using transformation factors for linear
elastic behaviour until the beam starts to yield, then switches to transformation factors
for ideal plastic behaviour. Even for the best estimation of the deformation shape in
the SDOF-model its solution still significantly differs from the FE-solution, see
Figure 4.8.
Figure 4.8 Midpoint displacement for elasto-plastic material response.
The difference between the FE- and SDOF-solution arises mainly when the
assumption of the deformation shape is not good enough. It can also be mentioned
that the agreement between the FE-solution and the hand calculation is a coincidence.
In previous Master theses, though, a divergence has been seen.
It can be seen in Figure 4.8 that when using only plastic transformation factors the
SDOF-analysis initially resembles the FE-analysis best and the top values are just
slightly higher. However, since the frequency is higher for the SDOF-solution it will
eventually get out of phase. If modelled with only elastic transformation factors, the
SDOF-analysis has almost the same frequency as the FE-analysis but the top values
differ about ten percent. For the third case where the transformation factors are mixed
the worst correlation is achieved, even though this in theory should give the best
correlation. This was also shown by Andersson and Karlsson (2012) where the
-20
-10
0
10
20
30
40
50
60
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement
Hand
FE
SDOF plastic
SDOF elastic
SDOF mixed

-- 74 of 199 --

59
differences are believed to come from the synergy of different errors. However, it was
shown by Andersson and Karlsson (2012) that when varying the transformation
factors in time with transformation factors retrieved from the FE-analysis at several
time steps the SDOF- and FE-solutions correlate very well. This method has not been
further used here.
The deformation shape for the elasto-plastic material behaviour will initially be the
same as for an elastic beam, see Figure 4.4. The deformation shape is plotted up to
60 ms when the yielding has begun, see Figure 4.9. The displacements of the beam
are plotted as solid lines while it is still moving downward, but after 21 ms when it
turns back up the displacements are plotted with dashed lines until the beam
eventually stops at about 60 ms. It can also be seen for the different time steps how
the plastic hinge is formed in the middle and after about 60 ms the deformation shape
resembles the assumed plastic deformation shape.
Figure 4.9 Deformation shapes at different time steps for elasto-plastic material
response.
4.2 Moment
The moment is often crucial when designing beams, and therefore it is important to
study how it varies over the beam with time for dynamic loads. For an elastic material
response the moment is often the designing factor. In theory, the moment can be
infinitely high but in reality the response will be limited. When studying the plastic
and elasto-plastic material response the moment is limited by the yield moment. When
the yield moment is reached the beam will start to yield and it is necessary to design
such beams with regard to plastic deformation capacity. To show this, the beam from
Chapter 3 has been analysed. The elastic response will from hereon be represented
only by stadium II, since this better correspond to the possible response of a
reinforced concrete beam.
To find the location on the beam where the time dependent moments are critical, a
moment envelope will be made and compared to the equivalent static load. A moment
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
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Deformation,
 u [mm]
Coordinate, x [m]
Deformation shape
1 ms
3 ms
6 ms
10 ms
15 ms
21 ms
45 ms
52 ms
60 ms

-- 75 of 199 --

60
envelope is a moment distribution where the maximum value in the time history is
saved for each node in the beam. The equivalent static load is calculated from the
dynamic response from the explosion.
The moment distribution for the equivalent static load is expressed by
)	(
2
)	(
2
L
x
x
Q
x	M 		
(4.1)
where x is the location on the beam and Q is the equivalent static load.
4.2.1 Elastic response
The moment distribution for a simply supported beam subjected to an impulse load
initially differs a lot from that of a static load for elastic materials. As was seen for the
deformation shapes in Section 4.1.1 the moment distribution also varies significantly
with time. This is no coincidence, as the moment is directly related to the
deformation, or rather to the curvature of the beam. The moment distribution over the
beam is plotted for different time steps in Figure 4.10, and it can be seen that the
moments appear to progress from the beam edges like waves through the beam.
Between 1 and 5 ms the moments are about 10 to 30 kNm close to the edges and
either 0 kNm or slightly negative in the middle. After 5 ms the moments near the
supports are decreasing and the moment in the middle is increasing.
Figure 4.10 Moment distribution at different time steps for elastic stadium II
material response.
Using Equation (2.47) from Section 2.3.4.1 the equivalent static load for elastic
stadium II is calculated as
kN	23	.	204
1135
10	26	.	5
1000	3
6


			Q	
(4.2)
-15
0
15
30
45
60
75
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment over time
1 ms
3 ms
5 ms
7 ms
9 ms

-- 76 of 199 --

61
When inserting Equation (4.2) in (4.1), the maximum equivalent moment is given as
kNm	6	.	76	max 	M	
(4.3)
The moment envelope from the FE-analysis has been calculated and plotted against
the moment distribution for the equivalent static load, see Figure 4.11. It is seen that
the equivalent static load underestimates the maximum moment in every node along
the beam, especially in the middle where the difference is about 30 percent. The
simple hand calculation for an equivalent static load is a fast way to get an indication
of the maximum load but it misses crucial information about the moment distribution
that can be important in design. It is also worth noticing that the moment envelope in
Figure 4.11 resembles the shape from the maximum moment for all times from
Figure 4.10, but consists of moment distributions from more times.
Figure 4.11 Moment envelope and moment from the equivalent static load for the
elastic stadium II material response.
To investigate why the difference in maximum moments is of this magnitude, the
midpoint moment is plotted over time, together with the maximum positive and
negative moments from the equivalent static load, as seen in Figure 4.12. It appears as
if the moment varies with minor oscillations about a major oscillation with a period of
about 90 ms. The midpoint moment is influenced by more modes than the midpoint
displacement. This can be seen when comparing Figure 4.2 with Figure 4.12. The
displacement is basically only one sinusoidal function while the moment has more
irregularities. It can also be seen that the maximum and minimum moments, are about
the same but with different signs, and they are repeated for the next oscillations. If
there would have been no minor oscillations but only the major oscillation the
midpoint moment would probably not exceed that of the equivalent static load. The
reader is also reminded that these results are from a model without damping and for a
realistic case the oscillations would decrease with time and the minor oscillations
could be much smaller even in an early stage. This is further studied in Section 5.2.
0
20
40
60
80
100
120
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelope elastic stadium II
Eq. Static load
Max Envelope

-- 77 of 199 --

62
Figure 4.12 Midpoint moment for the elastic stadium II material response.
4.2.2 Plastic response
When considering the plastic response, the beam behaves in a different way in
comparison to the elastic analysis. In the plastic analysis the beam has a much more
predictable moment distribution over time. For an ideal plastic beam, the maximum
moment will be reached instantly across the whole beam, then gradually decrease
inward. A plastic hinge will develop in the middle of the beam with time, as the outer
parts get strained. In the FE-analysis, though, the material is modelled as partially
elastic and will therefore strain earlier. The yield moment is in Section 3.2.2
calculated to 46.9 kNm and in Figure 4.13 it is seen that the moment never exceeds
this value. At 1 ms the region with maximum moment is about 60 percent of the beam
length, at 5 ms it is about 25 percent of the length and at 9 ms it is less than 10 percent
of the length.
-150
-100
-50
0
50
100
150
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment EL I
Max Eq. Static load
FE Midpoint moment
SDOF Midpoint moment

-- 78 of 199 --

63
Figure 4.13 Moment distribution at different time steps for the plastic material
response.
The moment envelope is plotted against the moment from the equivalent static load,
see Figure 4.14. It is seen that the static load will underestimate the moment for large
parts of the beam. The yield moment will be reached for almost the entire beam at
some point, even close to the supports. Nevertheless, the maximum absolute moment
in the midpoint is well described by the equivalent static load since it is easy to
determine the yield moment.
Figure 4.14 Moment envelope and moment from the equivalent static load for the
plastic material response.
Now when the moment envelope has been studied it can be a good idea to study the
plastic strain. Since almost the entire beam has reached the yield moment at one time
or another the zone where the plastic strain has formed will be very wide. The beam
will start to develop plastic strain closer to the supports and after approximately 5 ms
0
10
20
30
40
50
60
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment over time
9 ms
7 ms
5 ms
3 ms
1 ms
0
10
20
30
40
50
60
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelope plastic
Eq. Static load
Max Envelope

-- 79 of 199 --

64
the beam will start to develop its strain in the middle of the beam. After
approximately 30 ms the strain will be fully developed.
Figure 4.15 Plastic strain for the plastic material response.
When the midpoint moment is plotted for the plastic response, see Figure 4.16,
peculiar oscillations start to occur after about 23 ms, i.e. same time as the maximum
deformation is reached, see Figure 4.6. The anticipated response is what the first 23
ms shows. The oscillations after that are believed to be a result of elastic oscillations
which will not occur in an ideal plastic material. ADINA does not model the plastic
response in a correct way, but when only considering the first 23 ms the response is
well defined.
Figure 4.16 Midpoint moment for the plastic material response.
-0.005
0.000
0.005
0.010
0.015
0.020
0.025
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Plastic strain,
 εpl [-]
Coordinate, x [m]
1 ms
2 ms
3 ms
5 ms
10 ms
15 ms
20 ms
30 ms
-60
-40
-20
0
20
40
60
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment PL
Max Eq. Static load
Midpoint moment

-- 80 of 199 --

65
4.2.3 Elasto-plastic response
When studying the results from the elasto-plastic analysis one can see that this
response is very similar to the elastic response, compare Figure 4.10 and Figure 4.17.
During the first 7 ms the two responses are almost identical and it is not until after
9 ms a noticeable deviation occurs. With an elastic response there is no yield moment,
and hence, the beam will be able to withstand an infinitely large moment while a
beam with an elasto-plastic response will yield in the same manner as for the plastic
response when the yield moment of 46.9 kNm is reached. The yield moment is
46.9 kNm, as shown in Section 3.2.2. This simplified response is the one closest to the
real response for a concrete beam.
Figure 4.17 Moment distribution at different time steps for the elasto-plastic
material response.
When the yield moment is reached a plastic hinge is created in the mid span. This can
be seen very clearly when plotting the plastic strain, see Figure 4.18. At 40 ms the
plastic strain is fully developed for the elasto-plastic material response. The strain has
approximately the same vale as for the plastic response. A significant difference,
though, is that the area of plastic strain is much wider for the plastic response
compared to the elasto-plastic.
-15
0
15
30
45
60
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment over time
1 ms
3 ms
5 ms
7 ms
9 ms

-- 81 of 199 --

66
Figure 4.18 Plastic strain for the elasto-plastic material response.
When plotting the moment envelope for the elasto-plastic response together with the
equivalent static response, Figure 4.19, one can see that the moment response is
similar to that from the plastic response. This is also due to the fact that the moment
cannot increase when the yield moment is reached. However, there is a deviation
between the plastic and the elasto-plastic response and it is the length of the region
where the yield moment has been reached. Since the elasto-plastic response has an
elastic part which can absorb energy, the length of the area where the yield moment is
reached is smaller than for the plastic case. However, this can still be a problem for
occasions with curtailment (shortening of reinforcement) of the beam. If the moment
capacity is exceeded the reinforcement will yield and can eventually brake. This is a
topic in structural response with regard to explosions that have not been studied
thoroughly, but in Section 0 a study has been made for this problem.
Once again the equivalent static load response is insufficient for large parts but is well
defined in the mid span. Same as for the plastic envelope, the results from ADINA
sometimes presented moments that slightly exceeded the yield moment which is not
possible, and were therefore not accounted for.
-0.005
0.000
0.005
0.010
0.015
0.020
0.025
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Plastic strain,
 εpl [-]
Coordinate, x [m]
10 ms
20 ms
30 ms
40 ms

-- 82 of 199 --

67
Figure 4.19 Moment envelope and moment from the equivalent static load for the
elasto-plastic material response.
Figure 4.20 clearly shows the elasto-plastic response for the midpoint moment. This is
a typical behaviour for an elasto-plastic material. When the beam is struck by the
shock wave from an explosion the moment in the midpoint will increase until the
yield moment is reached and a part of the beam will yield. When the beam swings
back, enough energy has been absorbed for the beam to only just reach the yield
moment. Due to some minor oscillations there are two peaks which almost reach the
yield moment 46.9 kNm.
Figure 4.20 Midpoint moment for the elasto-plastic material response.
0
10
20
30
40
50
60
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelope elastoplastic
Eq. Static load
Max envelope
-60
-40
-20
0
20
40
60
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment EL-PL
Max Eq. Static load
Midpoint moment

-- 83 of 199 --

68
4.3 Energy balance
It is often beneficial, and sometimes necessary, to think in terms of energy balance
when dealing with the structural response from an explosion. This is also another
approach in checking the correspondence between the SDOF- and the FE-solution.
The structural response has a direct relationship with the energy put into the system,
the external energy We. Thus, the response can often be determined from simple
calculations. As seen in Section 2.3.3 the external energy applied should be equal to
the sum of internal energy, Wi, and kinetic energy, Wk, in order to have energy
equilibrium:
k	i	e W	W	W 		
(4.4)
When this state of equilibrium is reached the maximum deformation is obtained. The
external energy is determined from the force times the displacement caused. For the
FE-analysis this is done by integrating the force in every node and multiplying it with
the corresponding displacement for every time step, sees Equation (4.5) in Table 4.1.
Since the forces are extracted from nodes in the FE-analysis, the classic integration
cannot be made, but it is accomplished by taking the sum of the force times the
displacement in every node for every time step. For the SDOF-model the same
procedure is used but then only for the system point.
It is somewhat more difficult to comprehend the calculations for the internal energy in
the FE-analysis, but it can be explained as the energy needed to bend the beam. The
internal energy is calculated by taking half of the integral of the moment times the
change in rotation, the curvature, according to Equation (4.6). According to
Appendix A, the curvature is the second derivative of the displacement. For the
SDOF-model the internal energy is simpler to determine as the inner resistance times
the corresponding displacement for all time steps.
Finally the kinetic energy is calculated by taking half of the integral of the mass times
the square of the velocity for the elements in the FE-analysis, see Equation (4.7). For
the SDOF-model the same equation is used. Equations (4.5) to (4.7) are gathered in
Table 4.1.

-- 84 of 199 --

69
Table 4.1. Definition of work for the FE-analysis and the SDOF-model
respectively.
FE-analysis SDOF-model
External energy	



L	x
x
e dx	x	u	x	q	W
0
)	(	)	(	s	F	e Fu	W	
		 (4.5)
Internal energy	



L	x
x
i dx	x	u	x	M	W
0
)	(''	)	(
2
1s	F	i Ru	W	
		 (4.6)
Kinetic energy	dx
x	v	x	m
W
L	x
x
k 



0
2
2
)	(	)	(
2
2
s	m
k
mv
W

	 (4.7)
When deriving the energy from the SDOF-system it is important to keep in mind that
the energy is proportional to
m
F
W

 2
	
(4.8)
whilst the displacement is proportional to
m
F
u


	
(4.9)
This is of matter when scaling the transformation factors with a factor
. In that case
the energy level can become higher whilst the deformation stays the same:
m
F
m
F
new	m
F





 	





(4.10)
 	
m
F
m
F
new	m
F






 2	2	2
		





(4.11)
It is now of interest to compare the energy balance for the FE-analysis with the
SDOF-model and the hand calculations. This is once again done for the three different
ideal materials, the elastic, plastic and elasto-plastic material response. The elastic
response will be represented by stadium II. With the comparison between material
responses the reader can get an indication of the accuracy of the SDOF-model and the
hand calculations and if the energy balance is achieved for the two analyses. It is also
of interest to see how the structure absorbs the external energy throughout the time
span.

-- 85 of 199 --

70
4.3.1 Elastic response
The hand calculation for the energy, which is the theoretical maximum energy, is
made according to Section 2.4.3. When the force from the pressure hits the beam its
kinetic energy will increase rapidly. When calculating the theoretical maximum
energy it is assumed that all of the external energy is transferred into kinetic energy,
hence will the energy level for the elastic stadium II analysis be calculated as
J	2538	64	.	0
1440	788	.	0	2
3000
2
2	2
	
	
		 	F
mF
k
k	e m
I
W	W	


(4.12)
As can be seen in Figure 4.21 the energy balance for the FE-analysis is satisfyingly
met. The energy put into the system is in equilibrium with the energy used, as
anticipated. The hand calculation, though, is not fully corresponding with the FE-
analysis. This can be explained by the transformation factors. In a previous Master
thesis by Andersson and Karlsson (2012) it is shown that the hand calculation better
corresponds to the FE-analysis when the impulse load is less intense, i.e. behaves
more like a static load. The agreement between the FE-analysis and the hand
calculation decreases for a very impulsive load. The transformation factors are
derived from the deflection of a beam when loaded statically; the closer the deflection
of the actual beam is to a statically loaded beam, the better the correspondence.
Figure 4.21. The energy balance for the FE-analysis and the hand calculation for the
elastic stadium II material response.
The agreement between the SDOF-model and hand calculation is very good, but most
important is to have good correspondence between the SDOF-model and the FE-
analysis. In this case the SDOF-model gives energy levels on the unsafe side, which is
unwanted, see Figure 4.22. The same source of error applies here, the divergence is
due to the transformation factors and the errors are incorporated when using a static
deformation shape. The discrepancy in energy levels are however relatively close and
can be acceptable.
0
500
1000
1500
2000
2500
3000
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Energy,
 W [J]
Time, t [ms]
Energy stadium II
We hand
We
Wi
Wk
Wtot

-- 86 of 199 --

71
Figure 4.22. The energy balance for the SDOF-model and the hand calculation with
the elastic stadium II material response.
Both for the FE-analysis and the SDOF-model the response of the beam will alternate
between fully developed kinetic energy and then fully developed internal resistance.
This is a typical response for an ideal elastic material when the beam sways back and
forth. Furthermore, the energies in the SDOF-model are smoother than the energies
from the FE-analysis. As was mentioned in Section 4.1.1, this is due to the fact that
the SDOF-model only takes the first bending mode for the beam into account whilst
the FE-analysis takes more modes into account.
4.3.2 Plastic response
In plastic analysis the transformation factors are determined based on an appearance
according to Figure 2.11. A hand calculation of the energy for the plastic response is
made with the new transformation factors:
J	2343	5	.	0
1440	667	.	0	2
30002

	
	 k	e W	W	
(4.13)
When comparing the FE-analysis, Figure 4.23, with the SDOF-model for the plastic
response, Figure 4.24, the agreement is very good. The SDOF-model gives an energy
level just below the FE-analysis. The relative error, ξ, is calculated as
J	2235	FE
tot	W	
(4.14)
J	2157	SDOF
tot	W	
(4.15)
%	5	.	3		

 FE
tot
FE
tot
SDOF
tot
W
W	W
	
(4.16)
0
500
1000
1500
2000
2500
3000
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Energy,
 W [J]
Time, t [ms]
SDOF Energy stadium II
We hand
We
Wi
Wk
Wtot

-- 87 of 199 --

72
The main reason for the deviation between FE-analysis and the theoretical maximum
energy calculated by hand is believed to be because there are differences in the
transformation factors. As can be seen in Figure 4.23, the kinetic energy Wk is not
fully developed within the first 4 ms because the external energy We is still increasing.
Figure 4.23. The energy balance for the FE-analysis and the hand calculation with
plastic material response.
Figure 4.24. The energy balance for the SDOF-model and the hand calculation with
plastic material response.
Because the stiffness is high for the plastic material response, the internal energy will
increase early, thus, in order to maintain energy equilibrium, the kinetic energy must
be low. The beam does not sway back and forth as for an elastic response. The beam
0
500
1000
1500
2000
2500
3000
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Energy,
 W [J]
Time, t [ms]
Energy plastic
We hand
We
Wi
Wk
Wtot
0
500
1000
1500
2000
2500
3000
0 	5 	10 	15 	20 	25 	30 	35 	40 	45 	50
Energy,
 W [J]
Time, t [ms]
SDOF Energy plastic
We hand
We
Wi
Wk
Wtot

-- 88 of 199 --

73
yields and the beam’s way to absorb the external energy is through internal resistance,
hence the low kinetic energy and high internal energy.
An interesting observation is that although the energy level is lower for the SDOF-
model compared to the FE-analysis it is in reversed order for the displacement, see
Figure 4.6. This occurs because of the relationships between the transformation factor
and the energy and the displacement respectively, as mentioned earlier, Equation (4.8)
to (4.11).
4.3.3 Elasto-plastic response
As mentioned in Section 2.4.2, there are no special elasto-plastic transformation
factors. Instead, usage of either the elastic, plastic or both transformation factors are
made. The theoretical maximum value of energy is calculated with either
Equation (4.12) or Equation (4.13) as can be seen in Figure 4.25 for the FE-analysis.
Here it is clear that the elastic transformation factors give better correspondence with
the FE-analysis.
Figure 4.25. The energy balance for the FE-analysis and the hand calculation with
elasto-plastic material response.
When studying the SDOF-model and using constant transformation factors, there are
three different cases that are of interest. The SDOF-model is either modelled with
only elastic transformation factors, only plastic transformation factors or a
combination of them both. All three cases will present lower energies than the FE-
analysis. In Figure 4.26 the SDOF-model has been modelled with the elastic
transformation factors. This gives a fairly good agreement between the FE-analysis
and the SDOF-model.
0
500
1000
1500
2000
2500
3000
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Energy,
 W [J]
Time, t [ms]
Energy elastoplastic
We hand el
We hand pl
We
Wi
Wk
Wtot

-- 89 of 199 --

74
Figure 4.26. The energy balance for the SDOF-model and the hand calculation with
elasto-plastic material response and elastic transformation factors.
In Figure 4.27 the plastic transformation factors have been used. This results in less
agreement with the FE-analysis than from the case with elastic transformation factors,
the energy level is decreased.
Figure 4.27. The energy balance for the SDOF-model and the hand calculation with
elasto-plastic material response and plastic transformation factors.
The third option is shown in Figure 4.28 where the transformation factors change
when the yield limit is reached. First the elastic factor is used when the beam is in its
elastic stadium. When the force has increased enough the beam will start to yield and
the plastic factor is used. In contrary to the first two cases, this will result in an
unbalanced energy and the agreement with the FE-analysis is less than with only
plastic transformation factors. In order to achieve good correspondence between the
SDOF- and the FE-analysis it is necessary to use transformation factors that vary in
0
500
1000
1500
2000
2500
3000
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Energy,
 W [J]
Time, t [ms]
SDOF Energy elasto-plastic elastic
We hand el
We
Wi
Wk
Wtot
0
500
1000
1500
2000
2500
3000
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Energy,
 W [J]
Time, t [ms]
SDOF Energy elasto-plastic plastic
We hand pl
We
Wi
Wk
Wtot

-- 90 of 199 --

75
time to give a better assumption of the deformation shape. This is not studied in this
Master thesis but it has been shown successfully in Andersson and Karlsson (2012).
Figure 4.28. The energy balance for the SDOF-model and the hand calculation with
elasto-plastic material response and both elastic and plastic
transformation factors.
4.4 Discussion
The results from the displacement analysis indicate that the SDOF-model very well
describes the midpoint displacement when an elastic material response is applicable.
The hand calculation is a good method to quickly determine the maximum
displacements which also correspond well to the FE-analysis. With an elastic response
the deformation shape will be easier to approximate with the transformation factors.
However, when the plastic- and elasto-plastic material response applies the agreement
will be worse between the SDOF-model and the FE-model. This is believed to depend
on the fact that the deformation shapes are difficult to describe with constant
transformation factors. In the beginning the beam appears to have a rigid body
motion, which does not fulfil the assumed deformation shape. It is concluded that
several transformation factors are needed to describe the deformation of the beam if
an almost exact approximation is wanted, when a plastic- or elasto-plastic material
response is used. If one can tolerate some divergence, the SDOF-model can be used
when the plastic transformation factor is used for the elasto-plastic case. The reason
why the SDOF-model with plastic transformation factors gives such a good result,
though, is unknown.
The most important aspect with regard to the moment is that the moment calculated
from the equivalent static load underestimates the moments from the FE-analysis in
all nodes. This can be of concern when other materials than reinforced concrete is
used. A reinforced concrete beam is able to redistribute the forces in a beneficial way
but for e.g. a timber structure the arising moments may very well lead to failure.
Another interesting aspect with regard to the moment is that the moment is relatively
0
500
1000
1500
2000
2500
3000
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Energy,
 W [J]
Time, t [ms]
SDOF Energy elasto-plastic båda
We hand el
We hand pl
We
Wi
Wk
Wtot

-- 91 of 199 --

76
large close to the supports the first few ms. This raises the question about curtailment.
The Swedish “Fortifikationsverket” have determined that when designing bomb
shelters no curtailment is allowed, and when studying the moment development this is
easy to understand, but what happens when a structure with curtailment is subjected to
an explosion? This will be investigated in Section 5.3. When it comes to the
agreement between the SDOF- and the FE-analysis it is easy to see that the moment is
more influenced by more bending modes than the displacements. This indicates that
an SDOF-solution is inadequate when regarding the moment and that a more detailed
approximation could be relevant. This is studied in Section 5.2.
When studying the response of a structure subjected to an explosion it is beneficial to
study the energy acting in the structural system. This will help in order to understand
the behaviour as the energy put into the system will be in equilibrium with the energy
consumed. The SDOF-analysis presents reasonable agreement with the FE-analysis
for all material responses, especially when the elastic transformation factors are used
for the elasto-plastic behaviour.
The reader is reminded of that these analyses have been carried out without taking
regard to the damping of the structure. This means that the real structure will behave
differently. However, it is important to understand the response without damping
before analyses are performed with regard to damping. In Section 5.2 the damping
will be included to the analyses which will make it more realistic.

-- 92 of 199 --

77
5 Mode superposition and damping
As mentioned in Section 2.4.1, the deformation shapes of impact loaded structures
consists of a combination of several bending modes. By using the method of mode
superposition, which is described in Appendix D, for linear elastic analyses any
requested number of modes can be conjoined to describe the response of the structure.
If the structure is complex and/or consists of many parts, an analysis of the structure
might take a long time, especially if many modes are to be regarded. Because of this,
it is important to know how to make relevant simplifications that still provide accurate
results. By investigating which modes have the most influence on the deformation
shape, a good approximation can be made by modelling the motion with only these
modes. In that way time can be saved when analysing the structure. However, since
the structure in this Master thesis is a simply supported beam with relatively few
nodes, the time saved will be negligible.
Another important aspect is to try once again to verify the usefulness of the SDOF-
model. Hence, it is investigated whether a single degree of freedom is sufficient to
describe the motion for an impulse loaded beam or if it is necessary to introduce more
degrees of freedom to the simplified calculation method. Will it be sufficient in order
to determine both displacement and moment, with and without damping? In order to
determine this some guidelines of how big the error can be is used. If the error lies
within one percent is it a very good approximation and if it lies within five percent is
it acceptable.
Since all structures in reality have damping that differs with mode shape it is natural
to regard the damping while making a mode superposition-analysis. The damping is
often analysed as Rayleigh damping, described in Appendix E, or modal damping. If
there is a lot of information about the damping of the structure the modal damping is
the best choice as it has the possibility to choose specific damping for every mode.
However, if there is lack of information about the structure, the Rayleigh damping
might be a better choice as it is more general and usually can be regarded to be on the
safe side.
The main reason for analysing the damping is that one can be concerned for the high
values of the midpoint moment within the first few ms. The FE-analysis, see
Figure 4.12, has previously shown that the maximum midpoint moment within 15 to
35 ms is much larger than the equivalent static load, which is more commonly used
when designing structures. A question needed to be answered is if the damping will
decrease the midpoint moment enough for the first 35 ms so that the equivalent static
load will be a satisfactory simplification.
As an example the beam in Chapter 3 is further analysed with focus on the midpoint
moment with mode superposition-analysis for an elastic stadium II material response
and later the damping is analysed. The direct integration analysis will for simplicity
still be referred to as “FE-analysis” and the mode superposition-analysis, which also is
a type of FE-analysis, will be referred to as “modal-analysis”.

-- 93 of 199 --

78
5.1 Modal-analysis
When performing a modal-analysis to study the response in the midpoint of a simply
supported beam subjected to a distributed load one can exclude the modes that have a
stationary node in the middle. In this case the aforementioned property exist for every
even number of modes, see Figure F.1 in Appendix F. Hence, for this analysis only
the odd numbers of modes will be regarded. The subject of interest is in this analysis
the agreement between the SDOF-analysis and the modal-analyses with different
amount of modes compared to the FE-analysis for all time steps. It is not sufficient to
just have the same maximum value but it is the general agreement with the FE-
analysis that is important. When choosing number of modes to use in ADINA it is
important to remember that not all modes give a contribution to the midpoint
moments and displacements, and also that longitudinal modes can be contributed in
the analysis.
As can be seen from Figure 5.1, when analysing the midpoint displacement by only
using the first mode in the modal-analysis, the result will, as expected, be in good
agreement with the SDOF-solution. The result from using the first three modes is
improved significantly from the modal-analysis with only one mode, but it will later
be shown that it is not until the fifth mode that the results are almost identical to the
FE-analysis. However, the first three included modes in the modal-analysis give a
very satisfactory approximation to the FE-analysis, even though the second mode
does not give any contribution.

-- 94 of 199 --

79
(a)
(b)
Figure 5.1. (a) Modal-analysis for midpoint displacement using one and three
modes, compared to results from SDOF- and FE-analysis, (b) zoomed
in. Maximum displacement is about 38 mm.
The difference between the FE-analysis and the modal-analysis for three, five and
seven modes is shown in Figure 5.2 and it can be seen that five and seven modes does
not contribute to a significantly better approximation of the displacement compared to
an analysis using three modes. The difference is shown between 15 and 35 ms, which
mean that maybe the largest difference is not shown, but the most relevant are, as the
difference is shown at and directly about the maximum displacement. The error in
comparison to the maximum displacement for the FE-analysis, which is
approximately 38 mm, will be very small for the displacement. Hence, it is for the
studied beam sufficient to include three modes, and even one mode give a very
satisfactory result, in a modal-analysis. This is true for the response from load case 1.
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Mode superposition FE
SDOF
1 mode
3 modes
FE
28
30
32
34
36
38
40
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Displacement,
 u [mm]
Time, t [ms]
Mode superposition FE
SDOF
1 mode
3 modes
FE

-- 95 of 199 --

80
Figure 5.2. Difference between midpoint displacements for modal-analysis with
three, five and seven modes and the FE-analysis. Maximum
displacement is about 38 mm, see Figure 5.1.
A modal-analysis is made for the midpoint moment, in the same way as for the
midpoint displacement, and is shown in Figure 5.3. It can be seen that the result from
only using the first mode is far from satisfying. When including mode three the
correspondence improves significantly. However, when taking a closer look at the
zoomed in part of Figure 5.3 one can see that not even three modes are completely
satisfying. Unlike the midpoint displacement the midpoint moment is not thoroughly
described until the fifth mode is introduced to the modal-analysis when studying the
figure. From this, it is obvious that the moment is more difficult to describe with
fewer modes compared to the displacement. This is also to be expected since the
moment is proportional to the second derivative of the displacement.
Another interesting point is that the two peaks in Figure 5.3 (b) are centred on the
highest value for the first mode. If the eigenmodes are excited differently there will be
a phase shift and it is highly possible that one of the peaks will coincide with the peak
from the first mode. Because of this it is possible to get a higher maximum moment.
This is seen in Figure 5.3 (a) at 25 ms and 115 ms.
-0.18
-0.12
-0.06
0.00
0.06
0.12
0.18
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Difference [mm]
Time, t [ms]
Difference in mode superposition (between modes and implicit)
3 modes - FE
5 modes - FE
7 modes - FE

-- 96 of 199 --

81
(a)
(b)
Figure 5.3. (a) Modal-analysis for midpoint moment using one, three and five
modes, compared to results from FE-analysis, (b) zoomed in. The
maximum moment is about 100 kNm.
The difference between the modal-analysis and the FE-analysis is also plotted for the
midpoint moment, see Figure 5.4. The figure resembles the one for the difference in
displacement, Figure 5.2, but when a comparison of the difference is done with the
maximum moment one can see that the percentage is of another magnitude. The
maximum moment for the FE-analysis is approximately 100 kNm which should be
compared to the difference in Figure 5.4.
-150
-100
-50
0
50
100
150
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Moment,
 M [knM]
Time, t [ms]
Mode superposition FE
FE
1 mode
3 modes
5 modes
50
60
70
80
90
100
110
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Moment,
 M [knM]
Time, t [ms]
Mode superposition FE
FE
1 mode
3 modes
5 modes

-- 97 of 199 --

82
Figure 5.4. Difference between midpoint moments for modal-analysis with three,
five and seven modes and the FE-analysis. Maximum moment is about
100 kNm, see Figure 5.3.
Figure 5.4 indicates that the difference between three modes and the FE-analysis can
be as large as eight percent if unlucky. When considering the analysis with five modes
the difference will most be approximately three percent wrong.
Since the difference in percentage is larger for the moment than for the displacement
it is sufficient to include five modes when doing a modal-analysis of this beam. It is
shown that the difference will not improve significantly when including a seventh
mode. This is true for both the displacement and the moment. However, so far the
analyses have only dealt with load case 1, which might be regarded as a fairly gentle
impulse. As mentioned in section 2.4.1, a more intense impulse will excite higher
frequencies which can lead to a requirement of more modes to be included to get a
good agreement between the modal-analysis and the FE-analysis.
In order to draw conclusions an analysis is made with regard to the more intense load
case 3, see Figure 3.3 in Section 3.1, and the midpoint displacement can be seen in
Figure 5.5.
-12
-8
-4
0
4
8
12
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Difference [kNm]
Time, t [ms]
Difference in mode superposition (between modes and implicit)
3 modes - FE
5 modes - FE
7 modes - FE

-- 98 of 199 --

83
(a)
(b)
Figure 5.5. (a) Modal-analysis for midpoint displacement due to LC3 using one,
three and five modes, compared to results from SDOF- and FE-analysis,
(b) zoomed in. Maximum displacement is about 39 mm.
The midpoint displacements that arise when subjected to load case 3, seen in
Figure 5.5, resemble the displacements for load case 1, seen in Figure 5.1, but there is
a significant difference. It can be seen that the curve from the modal-analysis using
three modes does not follow the FE-analysis for load case 3 as smoothly as for load
case 1, Figure 5.1. To capture a more satisfactory approximation of the FE-analysis
for the more impulsive load, it appears as if at least five modes are required. To
present a better picture of the accuracy, the difference between the modal-analysis,
using three, five and seven modes, and the FE-analysis is shown in Figure 5.6.
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Mode superposition FE
SDOF
1 mode
3 modes
5 modes
FE
30
32
34
36
38
40
42
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Displacement,
 u [mm]
Time, t [ms]
Mode superposition FE
SDOF
1 mode
3 modes
5 modes
FE

-- 99 of 199 --

84
Figure 5.6. Difference between midpoint displacements due to LC3 for modal-
analysis with three, five and seven modes and the FE-analysis.Maximum
displacement is about 39 mm, see Figure 5.5.
With a maximum displacement of about 39 mm, the relative error from only using
three modes in the modal-analysis is rather big when it peaks around 0.4-0.45 mm.
However, if the error lies within five percent the approximation is acceptable, as
mentioned earlier, and when only using three modes it result in an error just over one
percent. Tough, the accuracy is greatly improved when using five modes, and
although seven modes give a closer approximation to the FE-analysis the difference is
still larger than the comparison between the FE-analysis and the modal-analysis using
only five modes for load case 1, see Figure 5.2.
Same as for load case 1, an analysis has been made for the midpoint moment for load
case 3 and is shown in Figure 5.7. By comparing the midpoint moments in Figure 5.7
and Figure 5.3 it can be seen that the midpoint moment for load case 3 is much more
influenced by higher modes than the midpoint moment for load case 1.
-0.45
-0.30
-0.15
0.00
0.15
0.30
0.45
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Difference [mm]
Time, t [ms]
Difference in mode superposition (between modes and implicit)
3 modes - FE
5 modes - FE
7 modes - FE

-- 100 of 199 --

85
(a)
(b)
Figure 5.7. (a) Modal-analysis for midpoint moment due to LC3 using three, five
and seven modes, compared to results from FE-analysis, (b) zoomed in.
Maximum moment is about 125 kNm.
As can be seen in Figure 5.7, when the impulse load is more intensive the description
of the moment using five modes is still satisfying, even though the moment appears to
be worse described than for load case 1. When the impulse is shorter in duration, the
peaks in the moment oscillation become larger and more frequent, and compared to
the largest peaks at 100 kNm for load case 1, the largest peaks for load case 3 reaches
125 kNm, i.e. 25 percent more. This can be compared to the displacement for the two
load cases where the maximum values are more or less the same. The reason for the
big increase of midpoint moment, although the displacement stays the same, is that
the curvature is more significant for the more impulsive load case. The differences
between the FE-analysis and the modal-analysis using three, five and seven modes are
-150
-100
-50
0
50
100
150
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Moment,
 M [knM]
Time, t [ms]
Mode superposition FE LC3
FE
3 modes
5 modes
7 modes
10
30
50
70
90
110
130
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Moment,
 M [knM]
Time, t [ms]
Mode superposition FE LC3
FE
3 modes
5 modes
7 modes

-- 101 of 199 --

86
shown in Figure 5.8 to once again give the reader a better picture of the magnitude of
error attained when not using a sufficient amount of modes.
Figure 5.8. Difference between midpoint moments due to LC3 for modal-analysis
with three, five and seven modes and the FE-analysis. Maximum
moment is about 125 kNm, see Figure 5.7.
Now that the differences have been shown between modal-analysis and FE-analysis
for the whole time interval and in every time step it is of interest to compare only the
maximum values for displacement and midpoint moment. This will be an important
comparison with respect to the design. The comparison is made with regard to both
the displacement and the moment for load case 1 and 3. Table 5.1 is regarding
midpoint displacements and
Table 5.2 is regarding midpoint moments. The relative errors, ξ, are calculated by
comparing the maximum value during the first oscillation, which lies within 35 ms,
for the FE-analysis and the different modal-analyses:
100
max
max	max 

 FE
FE	modal
u
u	u
	
(5.1)
100
max
max	max 

 FE
FE	modal
M
M	M
	
(5.2)
where Equation (5.1) and (5.2) regards displacement and moment respectively. Even
though the maximum displacements are about the same for the two load cases, the
maximum moments are not. This is partly because a more impulsive load will initiate
stronger motions of higher modes than a less impulsive load would. It is also because
a more impulsive load will cause a higher magnitude of curvature which is in direct
relation to the moment, as shown in Appendix A. It is shown that for a more intense
load it is necessary to use more modes in the modal-analysis compared to a less
intense load. It is of interest to point out that the error for the midpoint moment for
load case 3 using five modes gives a greater error than that for load case 1 by using
only three modes. Generally, it is easier to describe the displacement than the moment
-45
-30
-15
0
15
30
45
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Difference [kNm]
Time, t [ms]
Difference in mode superposition (between modes and implicit)
3 modes - FE
5 modes - FE
7 modes - FE

-- 102 of 199 --

87
with few modes when performing a modal-analysis. It is seen that either different
requirements of accuracy can be used for the displacement and the moment, when
using a specific number of modes, or the moment analysis can be complemented with
more modes to achieve the same relative error as for the displacement analysis. In
Section G.1 it is shown that the SDOF-analysis and the modal-analysis with one mode
also corresponds very well with regard to the midpoint moment.
Table 5.1. Relative error in maximum midpoint displacement using modal-analysis
with one, three, five and seven modes for LC1 and LC3.
Type of
analysis
Number of
modes
LC1 LC3
umax [mm] ξ [%] umax [mm] ξ [%]
FE-analysis ∞ 38.3 - 39.6 -
SDOF-
analysis
1 mode 1) 38.8 1.3 38.9 -1.8
Modal-
analysis
3 modes 38.9 1.6 39.4 -0.5
Modal-
analysis
5 modes 39.0 1.7 39.7 -0.2
Modal-
analysis
7 modes 39.0 1.8 39.6 0.0
1) Corresponds well to the modal-analysis with one mode, see Section G.1.
Table 5.2. Relative error in maximal midpoint moment using modal-analysis with
one, three, five and seven modes for LC1 and LC3.
Type of
analysis
Number of
modes
LC1 LC3
Mmax [kNm] ξ [%] Mmax [kNm] ξ [%]
FE-analysis ∞ 102.3 - 125.0 -
SDOF-
analysis
1 mode 1) 76.5 -25.2 76.7 -38.6
Modal-
analysis
3 modes 98.5 -3.7 103.1 -17.6
Modal-
analysis
5 modes 102.9 0.5 116.7 -6.7
Modal-
analysis
7 modes 101.4 -0.9 124.3 -0.6
1) Corresponds well to the modal-analysis with one mode, see Section G.1.

-- 103 of 199 --

88
5.2 Damping analysis
In previous sections the analyses have been made without the effect of damping,
which occurs in all real structures. Damping is an effect where energy is lost in the
system through movement, and is in direct relation to the velocity. The energy loss
arises from when temperature is developed through e.g. mechanical friction, which
means that the damping also depends on material and shape. It is believed that the
damping for a beam of the kind in this Master thesis will not exceed 10 percent, which
is a very strong damping, and it is seen as a limit of how high the damping possibly
can be. It is more probable that the damping will be of a magnitude of about five
percent, as seen in Table 5.3, where recommended damping ratios are shown for
different types and conditions of a structure.
Table 5.3. Recommended damping values, Chopra (2011).
Stress level Type and condition of
structure
Damping ratio
Working stress, no more
than about 0.5 yield point
Welded steel, prestressed concrete,
well-reinforced concrete (only slight
cracking)
2-3%
Reinforced concrete with
considerable cracking
3-5%
Bolted and/or riveted steel, wood
structures with nailed or bolted joints
5-7%
At or just below yield
point
Welded steel, prestressed concrete
(without complete loss in prestress)
5-7%
Reinforced concrete, Prestressed
concrete with no prestress left
7-10%
Bolted and/or riveted steel, wood
structures with bolted joints
10-15%
Wood structures with nailed joints 15-20%
Since the damping of the beam in this case cannot be determined experimentally,
possible damping values are compared for a damping ratio of 1, 2, 5 and 10 percent.
When using Rayleigh damping the damping matrix is expressed as:
K	M	C 			
	
		
(5.3)
where C, M and K are the damping-, mass- and stiffness matrixes, respectively, and α
and β are factors determining the mass- and stiffness damping. The α- and β-factors
are chosen so that the current damping factor affects the first and fifth mode. This
means that the modes between first and fifth, i.e. second, third and fourth, will be
affected by lower damping and the higher modes will be more damped, see
Figure 5.9.

-- 104 of 199 --

89
Figure 5.9. Rayleigh damping at first and fifth natural frequency for 1, 2, 5 and 10
percent damping.
From a frequency-analysis in ADINA the frequencies for the first and fifth mode are
found. The frequencies are 10.84 Hz and 259.8 Hz, respectively. With these
frequencies it is now possible to calculate the corresponding α- and β-factors for the
different damping percentages. Below are the factors calculated for one percent
Rayleigh damping as an example:
208	.	0
8	.	259	84	.	10
8	.	259	84	.	10
01	.	0 

		
	



j	i
j	i

	

	

		
(5.4)
5
10	39	.	7
8	.	259	84	.	10
2
01	.	0
2 
	

	


j	i	

	
		
(5.5)
This will then be used to calculate the damping matrix C from equation (5.3) that will
be used when considering the Rayleigh-damping, both in the SDOF-model and the
FE-model.
The α- and β-factors for the different damping values are shown in Table 5.4, and the
eigenfrequencies and the calculated Rayleigh damping for different damping ratios
are shown in Table 5.5.
0
2
4
6
8
10
12
14
0 	50 	100 	150 	200 	250 	300 	350 	400 	450 	500
Damping, ζ
 [%]
Frequency, f [Hz]
Rayleigh damping
10%
5%
2%
1%

-- 105 of 199 --

90
Table 5.4. Calculated α- and β-factors for different damping values when using
Rayleigh damping.
Damping α β
1% 0.208 7.39·10-5
2% 0.416 14.8·10-5
5% 1.041 36.9·10-5
10% 2.081 73.9·10-5
Table 5.5. Frequencies and damping values for the considered bending modes
when using Rayleigh damping of different magnitudes.
Bending
mode
Eigenfrequency Damping value
1% 2% 5% 10%
1 10.84 Hz 1.00% 2.00% 5.00% 10.0%
3 96.14 Hz 0.46% 0.93% 2.32% 4.63%
5 259.8 Hz 1.00% 2.00% 5.00% 10.0%
7 490.0 Hz 1.83% 3.66% 9.16% 18.3%
In Figure 5.10 and Figure 5.11 the response is compared for Rayleigh damping and
modal damping, respectively. When making an analysis with Rayleigh damping,
direct integration have been used and in the modal-analysis seven modes have been
included.
It can be seen that it is only 10 percent damping for both cases that is sufficient when
the equivalent static load is concerned. However, the five percent damping, which is
more reasonable, will also give a satisfactory result. A comparison of the five percent
Rayleigh and modal damping is therefore shown in Figure 5.12. It is worth
mentioning that, when comparing the Rayleigh damping with the modal damping, it is
seen that using Rayleigh damping will damp the minor oscillations more efficiently
than when modal damping is used.

-- 106 of 199 --

91
(a)
(b)
Figure 5.10. (a) Undamped midpoint moment compared to midpoint moment with 1,
2, 5 and 10 percent Rayleigh damping; (b) zoomed in.
-150
-100
-50
0
50
100
150
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment EL II
Max Pos Eq. Static load
Undamped FE-analysis
1% Rayleigh damping
2% Rayleigh damping
5% Rayleigh damping
10% Rayleigh damping
Max Neg Eq. Static load
33
45
57
69
81
93
105
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment EL II
Max Pos Eq. Static load
Undamped FE-analysis
1% Rayleigh damping
2% Rayleigh damping
5% Rayleigh damping
10% Rayleigh damping
Max Neg Eq. Static load

-- 107 of 199 --

92
(a)
(b)
Figure 5.11. (a) Undamped midpoint moment compared to midpoint moment with 1,
2, 5 and 10 percent modal damping; (b) zoomed in.
-150
-100
-50
0
50
100
150
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment EL II
Max Pos Eq. Static load
Undamped FE-analysis
1% Modal damping
2% Modal damping
5% Modal damping
10% Modal damping
Max Neg Eq. Static load
33
45
57
69
81
93
105
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment EL II
Max Pos Eq. Static load
Undamped FE-analysis
1% Modal damping
2% Modal damping
5% Modal damping
10% Modal damping
Max Neg Eq. Static load

-- 108 of 199 --

93
Figure 5.12. Undamped midpoint moment compared to midpoint moment with 5
percent Rayleigh and modal damping.
In order to be able to draw conclusions about the damping, an analysis of the moment
envelope is also made. In Figure 5.13 and Figure 5.14 the moment envelope is shown
with different degree of Rayleigh damping and modal damping, respectively.
Figure 5.13. Undamped moment envelope compared to moment envelope with 1, 2, 5
and 10 percent Rayleigh damping.
33
45
57
69
81
93
105
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment EL II
Max Pos Eq. Static load
Undamped FE-analysis
5% Rayleigh damping
5% Modal damping
0
20
40
60
80
100
120
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelope elastic stadium II
Eq. Static load
10% Rayleigh damping
5% Rayleigh damping
2% Rayleigh damping
1% Rayleigh damping
Max Undamped Envelope

-- 109 of 199 --

94
Figure 5.14. Undamped moment envelope compared to moment envelope with 1, 2, 5
and 10 percent modal damping.
The conclusion that can be drawn from the damping analysis of this particular
scenario is that to be satisfied with the undamped equivalent static load when
designing, the actual damping needs to be at least five percent. If that is the case, the
equivalent static load will explain the behaviour accurately enough and the design will
be acceptable. It has previously also been shown that it is common for concrete
structures to have a damping factor of about five percent, see Table 5.3. The reader is
reminded that these analyses for the damping have been made with the elastic stadium
II material response. Depending on the situation, e.g. a prestressed concrete beam, this
might not be the best agreement with a real scenario, with a different material
response.
In order to determine how many modes are required to present a good approximation
of the displacements and moments for the damped case, an analysis according to the
one in Section 5.1 has been made, but this time with five percent modal damping. The
displacements over time for load case 1 is shown in Figure 5.15, and it can be seen
that one mode is a very close approximation. However, in order to capture the motion
of the minor oscillations three modes are needed. The SDOF-analysis is not shown in
the figure as it was shown in Figure 5.15 that it is almost identical to the modal-
analysis using only one mode.
0
20
40
60
80
100
120
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelope elastic stadium II
Eq. Static load
10% Modal damping
5% Modal damping
2% Modal damping
1% Modal damping
Max Undamped Envelope

-- 110 of 199 --

95
(a)
(b)
Figure 5.15. (a) Modal-analysis for midpoint displacement using 1, 3, 5 and 25
modes due to LC1 with 5 percent damping, (b) zoomed in. Maximum
displacement is about 36 mm.
To give a perspective of how good approximation it is to use only one mode, the
difference between the modal-analysis for one, three and five modes and the modal-
analysis for 25 modes is shown in Figure 5.16. Here, analyses using 25 modes are
regarded as an acceptable approximation for the FE-analysis, see Section G.2. The
reason to replace the FE-analysis with a modal analysis is to be able to use modal
damping, i.e. constant damping for all frequencies. Notice that as the displacement
decreases with time, so do the relative errors. By only using one mode the largest
errors are about 0.8 mm which is about 2.2 percent of the maximum displacement.
When three or five modes are used the relative error is below 0.06 percent.
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Mode superposition FE
1 mode
3 modes
5 modes
25 modes
28
30
32
34
36
38
40
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Displacement,
 u [mm]
Time, t [ms]
Mode superposition FE
1 mode
3 modes
5 modes
25 modes

-- 111 of 199 --

96
Figure 5.16. Difference between midpoint displacements due to LC1 for modal-
analysis with 1, 3 and 5 modes and the modal-analysis with 25 modes;
all with 5 percent damping. Maximum displacement is about 36 mm, see
Figure 5.15.
The midpoint moment is shown in Figure 5.17 for load case 1 with different amount
of modes. By only using the first mode it is seen that the result differs significantly
from the modal-analysis using more modes. When three modes are used, one can in
Figure 5.17 (b) see a slight difference from the modal-analysis using 25 modes, but
when five modes are used the difference is negligible.
-0.9
-0.6
-0.3
0.0
0.3
0.6
0.9
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Difference [mm]
Time, t [ms]
Difference in mode superposition (between modes and implicit)
1 modes - 25 modes
3 modes - 25 modes
5 modes - 25 modes

-- 112 of 199 --

97
(a)
(b)
Figure 5.17. (a) Modal-analysis for midpoint moment using 1, 3, 5 and 25 modes due
to LC1 with 5 percent damping, (b) zoomed in. Maximum moment is
about 82 kNm.
The differences between the damped midpoint moments over time for load case 1
using modal-analysis with three, five and seven modes and the modal-analysis using
25 modes are shown in Figure 5.18. As for the displacement, the difference is
decreasing with time, but the largest errors are much larger. For the modal-analysis
using three modes the largest error is 1.5 kNm and the relative error is about 1.8
percent of the maximum moment for the modal-analysis using 25 modes. When using
five modes the error is still about 0.12 percent which is more than double that of the
error in displacement using only three modes, but it is still considered as a small error.
-80
-50
-20
10
40
70
100
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Moment,
 M [knM]
Time, t [ms]
Mode superposition FE
1 mode
3 modes
5 modes
25 modes
40
50
60
70
80
90
100
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Moment,
 M [knM]
Time, t [ms]
Mode superposition FE
1 mode
3 modes
5 modes
25 modes

-- 113 of 199 --

98
Figure 5.18. Difference between midpoint moments due to LC1 for modal-analysis
with 3, 5 and 7 modes and the modal-analysis with 25 modes; all with 5
percent damping. Maximum moment is about 82 kNm, see Figure 5.17.
Also for the damping analyses it is interesting to look at the response when the beam
is subjected to load case 3. In Figure 5.19 and Figure 5.20 the deformation and the
difference in displacement is shown respectively. When comparing these figures to
the ones for load case 1, Figure 5.15 and Figure 5.16, the reader can see that the
difference is almost not visible.
-1.5
-1
-0.5
0
0.5
1
1.5
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Difference [kNm]
Time, t [ms]
Difference in mode superposition (between modes and implicit)
3 modes - 25 modes
5 modes - 25 modes
7 modes - 25 modes

-- 114 of 199 --

99
(a)
(b)
Figure 5.19. (a) Modal-analysis for midpoint displacement using 1, 3, 5 and 25
modes due to LC3 with 5 percent damping, (b) zoomed in. Maximum
displacement is about 36 mm.
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Mode superposition FE
1 mode
3 modes
5 modes
25 modes
28
30
32
34
36
38
40
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Displacement,
 u [mm]
Time, t [ms]
Mode superposition FE
1 mode
3 modes
5 modes
25 modes

-- 115 of 199 --

100
Figure 5.20. Difference between midpoint displacements due to LC3 for modal-
analysis with 1, 3 and 5 modes and the modal-analysis with 25 modes;
all with 5 percent damping. Maximum displacement is about 36 mm, see
Figure 5.19.
In Figure 5.21 and Figure 5.22 the midpoint moments and the differences are shown
respectively. When the damping is regarded it is shown that the responses are very
similar regardless of what type of loading is used. When the beam is subjected to load
case 3 the response will not be very different compared to the response obtained for
load case 1. Even the analyses within the different load cases are very similar. It is
only the SDOF-analysis that differs significantly at the beginning. The curves are
smoothened due to the damping and the differences are decreasing with time and
eventually the analyses will merge with each other irrespective of the amount of
modes in the analyses.
-0.9
-0.6
-0.3
0.0
0.3
0.6
0.9
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Difference [mm]
Time, t [ms]
Difference in mode superposition (between modes and implicit)
1 modes - 25 modes
3 modes - 25 modes
5 modes - 25 modes

-- 116 of 199 --

101
(a)
(b)
Figure 5.21. (a) Modal-analysis for midpoint moment using 1, 3, 5, 7 and 25 modes
due to LC3 with 5 percent damping, (b) zoomed in. Maximum moment is
about 86 kNm.
-120
-80
-40
0
40
80
120
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Moment,
 M [knM]
Time, t [ms]
Mode superposition FE LC3
1 mode
3 modes
5 modes
7 modes
25 modes
50
57
64
71
78
85
92
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Moment,
 M [knM]
Time, t [ms]
Mode superposition FE LC3
1 mode
3 modes
5 modes
7 modes
25 modes

-- 117 of 199 --

102
Figure 5.22. Difference between midpoint moments due to LC3 for modal-analysis
with 3, 5 and 7 modes and the modal-analysis with 25 modes; all with 5
percent damping. Maximum moment is about 86 kNm, see Figure 5.21.
In order to give a more detailed picture of the accuracy of the results when using
different amount of modes, analogous to Table 5.1 and
Table 5.2 from Section 5.1, Table 5.6 and Table 5.7 are shown with displacements
and moments regarding five percent modal damping. It is seen that for both the
displacement- and moment analysis regarding damping, the relative error for load
case 1 and 3 is smaller compared to the analyses without damping. The error
decreases significantly when more modes are used for the analysis, and it is, when
damping is regarded, only the analysis with one mode that differs noticeably.
-6
-4
-2
0
2
4
6
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Difference [kNm]
Time, t [ms]
Difference in mode superposition (between modes and implicit)
3 modes - 25 modes
5 modes - 25 modes
7 modes - 25 modes

-- 118 of 199 --

103
Table 5.6. Relative error in maximum midpoint displacement using modal-analysis
with one, three, five and seven modes for LC1 and LC3, regarding 5 %
damping.
Type of
analysis
Number of modes LC1 LC3
umax [mm] ξ [%] umax [mm] ξ [%]
Modal-
analysis
Max displacement
(25 modes)
35.6 - 35.9 -
SDOF-
analysis
1 mode 1) 35.9 0.8 36.1 0.6
Modal-
analysis
3 modes 35.7 0.4 36.0 0.1
Modal-
analysis
5 modes 35.6 0.0 35.9 0.0
Modal-
analysis
7 modes 35.6 0.0 35.9 0.0
1) Also corresponds to the modal-analysis with one mode
Table 5.7. Relative error in maximum midpoint moment using modal-analysis with
one, three, five and seven modes for LC1 and LC3, regarding 5 %
damping.
Type of
analysis
Numer of modes LC1 LC3
Mmax [kNm] ξ [%] Mmax [kNm] ξ [%]
Modal-
analysis
Max moment
(25 modes)
82.2 - 83.7 -
SDOF-
analysis
1 mode 1) 70.8 -13.9 71.0 -15.2
Modal-
analysis
3 modes 82.8 0.6 85.6 2.3
Modal-
analysis
5 modes 82.2 0.0 83.5 -0.2
Modal-
analysis
7 modes 82.2 0.0 83.7 0.0
1) Also corresponds to the modal-analysis with one mode

-- 119 of 199 --

104
The most important fact to point out in these analyses is that the SDOF-analysis, when
neglecting the damping, is a good approximation for the modal analysis with 25
modes when the damping is over five percent, especially when looking at the
midpoint moment. An example is calculated for load case 1:
%	9	.	6	100
2	.	82
2	.	82	5	.	76 		


		
(5.6)
This means that one can obtain quite accurate results when designing if neglecting the
damping, even though the result is somewhat on the unsafe side. However, since a
reinforced concrete beam will yield is seven percent not crucial for the structure. The
structure is able to redistribute the tension due to the yielding. In Appendix I other
beams have been calculated, as a comparison.
The reader is reminded that this comparison between undamped SDOF and the
damped FE-analysis is regarding five percent damping. It should be pointed out that if
a prestressed concrete beam is considered the damping may very well be lower than
that. According to Table 5.3 is the damping ratio for prestressed concrete between two
and three percent.
5.3 The transformation factor for damping
Usually when analysing and designing with regard to explosions the damping is
neglected and there is no need to have a damping transformation factor. However,
when performing a more detailed analysis, the transformation factor could have a
significant impact on the result. In Section 2.4.2 it was mentioned that the
transformation factor for damping reasonably could be the same as the transformation
factor for the stiffness and force. A way to analyse what the transformation factor
could be is to use mode superposition with only one mode and compare this with the
SDOF-model for a high damping value. This is done for all four load cases with a
damping of 20 percent and is here shown for load case 0 and load case 3 in
Figure 5.23. It can be seen that the convergence between the FE-analysis and the
SDOF-analysis is good with a transformation factor κcF = 0.8, which in Figure 5.23 is
labelled as SDOF 0.8. When going from a less impulsive load to a more impulsive
one the curves are somewhat drawn to the left.

-- 120 of 199 --

105
(a)
(b)
Figure 5.23. Difference between midpoint displacements over time for FE-analysis
and SDOF-analysis with damping factor 0.8 and 1.0 for beam 1 in (a)
LC0 and (b) LC3.
It is hereby indicated that κcF is not 1.0, but for this case closer to 0.8. The number 0.8
is not proven to be the exact number but it gives a very good approximation. In order
to investigate whether this result is just a coincidence for this beam or not, the same
analysis has been made for other cross-sections. Instead of varying the geometry of
the cross-sections, only the density ρ and Young’s modulus for concrete Ec is changed
in purpose of keeping the modelling simple. In Figure 5.24 the analysis is made for
load case 0 and load case 3 for beam 2 with properties seen in Table 5.8. The beam
from Chapter 3, which has been analysed throughout this Master thesis, is hereby
referred to as beam 1.
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC0
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC3
FE
SDOF 0.8
SDOF 1.0

-- 121 of 199 --

106
Same as for beam 1 it can be seen that when κcF is set to 0.8 instead of 1.0 a much
better convergence is achieved between the SDOF- and the FE-analysis. For detailed
info of all five beams and all four load cases the reader is referred to Appendix H.
There, it can be seen that if κcF is set to 0.8 the agreement is good for all the beams
and all load cases.
The factor 0.8 is not the exact value for κcF but merely a very good approximation.
The exact value will not be further investigated in this Master thesis but it could be of
interest in future studies.
Table 5.8. Properties of beams 1 to 5.
Properties Ec [GPa] ρ [kg/m³]
Beam 1 33 2400
Beam 2 40 3000
Beam 3 20 2000
Beam 4 33 4800
Beam 5 66 2400

-- 122 of 199 --

107
(a)
(b)
Figure 5.24. Difference between midpoint displacements over time for FE-analysis
and SDOF-analysis with damping factor 0.8 and 1.0 for beam 2 in (a)
LC0 and (b) LC3.
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC0
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC3
FE
SDOF 0.8
SDOF 1.0

-- 123 of 199 --

108
5.4 Discussion
It was seen in Chapter 4 that the demand for the use of several modes to accurately
capture the moment of the beam is higher than the demand if the displacement is
calculated. In Chapter 5 it was made clear that this is the case. A simply supported
beam subjected to a uniformly distributed load will oscillate mainly with its first mode
shape and one can accurately capture the displacements by using the SDOF-model. It
was shown that the actual deflection shape only significantly differed from the
assumed deflection shape within the first few ms, which is before the maximum
values have been reached so it is not of any importance. The moment, however, is
more visibly influenced by more modes than the displacement and is therefore more
difficult to describe with the SDOF-model. The relative errors were also shown to be
quite large. For less intense loads, it is not required to use as many modes as for a
highly intense load where it was shown that at least five modes should be regarded if
the size of the error should not be bigger than for the error for the displacement using
the SDOF-model. If one is interested in showing the moments with good accuracy and
with a simpler approximation than doing a FE-analysis, one should create an MDOF-
model using at least three modes.
Because the beam has a height, it takes time for the wave to propagate through the
cross-section which means that there will be an actual delay to the maximum
moments. With the height known, and the information speed calculated, it is possible
to calculate the time, t1, it takes for the wave to propagate through the beam’s cross
section, i.e. two times the height. If a moment peak in time is so narrow that time t1
exactly fits between the boundaries of the moment peak, the values above (or below if
the moment is negative) this position can be disregarded, so the tip of the peak is cut
off. The moment peak in time then only becomes as narrow as the time it takes for the
information to travel two heights of the beam. This method could possibly bring down
the maximum values from the analysis without damping, but probably not by much.
When the damping is applied to the system, the peaks become wider and less
prominent so the decrease in moment becomes negligible.
When modelling with damping, the SDOF-analysis generally correlates better to the
FE-analysis. In order to be able to be on the safe side for the moment when
calculating with the equivalent static load, it was shown that the structure should have
a damping of at least 10 percent. This is a very high damping, and in reality it is more
likely that a reinforced concrete beam has a damping factor of about five percent.
Since the SDOF-analysis give lower maximum moments than the FE-analysis, it can
be beneficial to use the maximum moment from the undamped SDOF-analysis as the
maximum moment for the actual damped case, as these numbers are closer. Notice
that there is still a significant difference in the results, which are on the unsafe side, so
an up-scaling factor should be used.
Designing with regard to damping is more advanced and takes more time than when it
is neglected, both mathematically and analytically, as the damping factor first needs to
be determined before any calculations can be made, and if a too high damping value is
chosen the results will no longer be on the safe side. However, if the right damping
factor is found, the results will be closer to reality and it can be important to be able to
get these more accurate results in analyses where it is difficult to motivate that the
capacity of an existing structure is sufficient.
It was successfully shown that when the transformation factor for the damping for the
simply supported beam subjected to a uniformly distributed load was set to κcF = 0.8

-- 124 of 199 --

109
instead of the assumed value of 1.0, a much better convergence was seen between the
SDOF- and the modal-analysis using one mode. The damping is a way to describe the
energy loss in the system due to heat development, which depends on the velocity and
therefore the damping effect should differ for different load cases. In the undamped
case the maximum moments are larger for load case 3 than for load case 1, but when
damping is applied they are about the same. Hence, this means that the damping effect
is higher for a more impulsive load.
Today, the damping factor is not calculated from material properties; it is
experimentally determined. It is therefore believed that there is no reason for trying to
derive the exact solution for the transformation factor for the damping until there are
methods of determining the damping factor analytically. However, it is possible to
table values for the transformation factors for different type of loads and boundary
conditions. These can be achieved by iterating the SDOF-analysis with different
values and comparing to the FE-analysis, both with high damping, until a
convergence is met.

-- 125 of 199 --

Denna sida skall vara tom!

-- 126 of 199 --

111
6 Curtailment
Curtailment, or shortening of reinforcement, is used to decrease the expenses when
designing a structure, both for walls and beams. In defence shelters and military
structures that are explicitly designed to withstand the load from an explosion,
however, curtailment is never used. Hence, analyses with curtailment are not so
common when analysing structures with regard to explosions. However, since this
Master thesis focuses on civil structures where curtailment is more common, a further
detailed analysis is made.
When designing with regard to a static moment it is easy to predict the moment
distribution and determine the reinforcement accordingly. In that way less
reinforcement is used and money can be saved. However, when looking at the
moment distribution when a structure is impulse loaded the moment has been shown
not to be similar to the static moment for the first few ms. The moment will be larger
closer to the supports than in the middle of the beam. Due to this it is interesting to
analyse how a beam with curtailment reacts when loaded with an impulse. Will the
beam get large plastic deformations or is the moment capacity exceeded only for a
short period of time so that no real harm is done?
As an example, a curtailment analysis of the beam from Chapter 3 is made. By
looking at the moment distribution from the equivalent static load, seen in Figure 6.1,
two different cases of curtailment are chosen and analysed. It is important to mention
that a simplification is made. Usually when designing with curtailment the designing
moment is offseted in accordance with the tensile force contribution due to inclined
shear cracks. However, when analysing the subjected beam due to curtailment this
contribution is disregarded since this effect is not captured in a FE-analysis using
beam elements.
Figure 6.1. Moment distribution for plastic material response from equivalent static
load, and moment capacity for curtailment at (a) L/6; (b) L/4 from the
beam ends.
0
10
20
30
40
50
60
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Capacity at curtailment
PL-Eq-ST
Capacity (a)
Capacity (b)

-- 127 of 199 --

112
The two cases analysed are shown in Figure 6.2. The first case is a curtailment of the
bottom reinforcement at L/6 from the ends of the beam. Here, the reinforcement
spacing is increased from 150 to 300 mm, decreasing the capacity in this region to
29.6 kNm. In this point the beam is affected by a moment from the equivalent static
load of 26.2 kNm. The second case is a curtailment of the bottom reinforcement at L/4
from the ends of the beam. The amount of bottom reinforcement is reduced as the
distance between the bars is increased from 150 to 200 mm, decreasing the capacity in
this region to 38.3 kNm. In this point the beam is affected by a moment from the
equivalent static load of 35.2 kNm.
Φ10 s150
(a)
Φ10 s300	L/6 	L/6	2L/3
L/4 	L/2 	L/4
(b)
Φ10 s150
Φ10 s200
Figure 6.2. Simply supported beam with curtailment of (a) L/6; (b) L/4 from the
ends.
When analysing the curtailment it is of interest to see how the moment envelope is
changed in comparison to the moment capacity. If the moment capacity is not reached
then there will be no problem with curtailment. However, if the capacity indeed is
reached the beam will start to yield. It is then interesting to see if the capacity is
reached for a long or short period of time. If the capacity is reached only for a short
period of time the plastic strain will be small and the beam will have no problem to
withstand the load, but if it is reached for a longer period of time then large plastic
strains can develop and problems may arise. Due to this it is, besides the moment
envelope, also interesting to study the development of plastic strain for the beam.
6.1 Curtailment analysis
The moment distribution for the two beams has been studied and the progression of
the moment envelope is shown in Figure 6.3 for the beam with curtailment at L/6
from the ends. As a comparison, the progression of the moment envelope for the beam
without curtailment is shown in Figure 6.4.

-- 128 of 199 --

113
Figure 6.3. Moment envelope for beam 1 with curtailment of L/6 from the ends at
different times.
Figure 6.4. Moment envelope for beam 1 without curtailment at different times.
The two moment envelope progressions are very similar for the case with and without
curtailment. It can be seen that the moment has progressed further for every time for
the case without curtailment, but the most important difference is seen at the final
envelope after 30 ms where the moments differ by up to as much as 20 percent in the
region within a distance of L/6 from the beam ends. This is not unexpected, though, as
the moment capacity differs in these points, and it is possible that the capacity is
reached for both cases.
To better show where the moment capacity is reached, for how long and how it differs
with different load cases another figure is presented. The final moment envelope is
shown in Figure 6.5 for all load cases, together with the moment capacity for the
curtailed beam and the moment from the equivalent static load. It can be seen that the
0
10
20
30
40
50
60
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment over time
1 ms
3 ms
5 ms
7 ms
9 ms
15 ms
30 ms
0
10
20
30
40
50
60
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment over time
1 ms
3 ms
5 ms
7 ms
9 ms
15 ms
30 ms

-- 129 of 199 --

114
moment capacity is reached at the curtailment where the moment from the equivalent
static load would not. As expected, the reduced moment capacity is reached closer to
the supports for more impulsive loads, but will this cause the failure of the beam?
Figure 6.5. Moment envelope for all load cases and reduced moment capacity due
to curtailment at L/6 from edge
Showing the moment distribution for a beam with ability to deform is not sufficient to
determine whether there will be failure or not, and therefore the plastic strains are
studied. Because of this, a schematic figure of the moment envelope is shown for one
case only, but the strains are studied more thoroughly for both cases presented in
Figure 6.2. The beam will be subjected to plastic strain wherever the moment capacity
is reached, and the magnitude of the strain is based on how long the moment remains
at the limit. It is difficult to determine a certain limit for the strain with regard to
failure. However, when the strain in the beam with curtailment at L/6 from the edges
exceeds the limit of three to five percent, the probability of failure will be imminent,
according to Appendix J. In order to determine where the failure will occur, the
plastic strain distributions in the two cases are studied for the different load cases, see
Figure 6.6 and Figure 6.7.
0
10
20
30
40
50
60
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Moment,
 M [kNm]
Coordinate, x [m]
Moment envelope curtailment 1/6
PL-Eq-ST
Capacity
LC3
LC2
LC1
LC0

-- 130 of 199 --

115
Figure 6.6. Plastic strain for the beam with curtailment of L/6 from the ends.
Figure 6.7. Plastic strain for the beam with curtailment of L/4 from the ends.
As seen from Figure 6.6 and Figure 6.7, one major plastic zone forms in the middle
and two minor plastic zones at L/6 and L/4 from the ends for each beam respectively.
The reason why the major strain peak in the middle is larger than at the curtailment is
because the moment capacity is reached here for a longer duration. It can also be seen
that the magnitude of plastic strain differs for the different load cases, but the
difference is not consistent with the location in the beam or between the two cases.
For instance, for the beam with curtailment at L/6 from the ends, the largest strains at
the curtailment will occur for load case 3, but for the beam with curtailment at L/4
from the ends the largest strains at the curtailment will be achieved for load case 0.
When looking at the strains in midpoint, the largest plastic strain is achieved for load
case 0 for the beam with curtailment at L/6, while the largest plastic strains for the
beam with curtailment at L/4 is achieved for load case 1. This means that the
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Plastic strain,
 εpl [-]
Coordinate, x [m]
LC3
LC2
LC1
LC0
LC2
LC1
LC0
LC3
LC3
LC2
LC1
LC0
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Plastic strain,
 εpl [-]
Coordinate, x [m]
LC3
LC2
LC1
LC0
LC2
LC1
LC3
LC0
LC3
LC0
LC2
LC1

-- 131 of 199 --

116
magnitude of developed plastic strain is not solely governed by either maximum
pressure or load time. This can be shown by looking at the moment over time for the
nodes where the strains occur.
The moment over time at the node where the right hand side curtailment starts is
shown in Figure 6.8 for the case of curtailment at L/6 from the ends. Even though the
moment cannot exceed the yield limit, and is only a product of calculation errors in
ADINA, it is shown to easier see how the plastic strains will vary for different load
cases. While load case 3 is the most intense of the four load cases and therefore causes
the moment capacity to be reached early, the worst case will occur for load case 0 as
the capacity is reached for a longer time.
Figure 6.8. Moment over time at coordinate x = 5L/6.
6.2 Discussion
It has been shown that for this beam, curtailment will not be a threat of the capacity of
the beam, even though the moment envelope seemed dangerous before the curtailment
analysis was performed. It is however very clear that the beam will develop plastic
hinges at the curtailment points. This will lead to a larger total plastic strain of the
beam since it is also indicated that the plastic strain in the middle will be unchanged
from the case without curtailment. Hence, the total deformation in the midpoint will
increase if the beam is designed with curtailment.
A conclusion is also drawn that it is not possible to say whether the plastic strains will
be smaller or larger for more intense loads, which was first assumed. This was
actually a surprisingly find. It seems that it is not possible to generally determine
which load case is the most dangerous because of the fact that the strain both takes the
magnitude of the force and the duration the yield moment is reached into account. It
would be interesting to see more studies on this to be sure of the findings.
-30
-20
-10
0
10
20
30
40
0 	3 	6 	9 	12 	15 	18 	21 	24 	27 	30
Moment,
 M [kNm]
Time, t [ms]
Node 26 moment EL-PL Avk 1/6
LC3
LC2
LC1
LC0
PL-Eq-ST

-- 132 of 199 --

117
7 Final remarks
7.1 Conclusions
It is possible to accurately simplify the displacements of a simply supported beam for
different material behaviours with an SDOF-model by using certain transformation
factors. Because the beam’s initial deflection for a highly impulsive load differs a lot
from static deflection shape the simplification is initially poor, but by the time the
deflection reaches its maximum value the deflection shapes are very similar and the
results converge well.
The modelling of the moments is more complex and requires a multi degree of
freedom-model with more modes to get accurate results. It is also possible to describe
the maximum moment distribution by using an equivalent static load, but it was
shown to underestimate the moment in every node unless a damping of at least 10
percent is used for the FE-analysis. For reinforced concrete beams a reasonable
damping would be around five percent.
For design purpose it is of interest to compare the undamped SDOF-model with the
FE-analysis using damping. When the moment from the SDOF-model was compared
to the FE-analysis using damping, the results were better than for the FE-analysis
without damping, but the moment was still underestimated by 6-9 percent in the
SDOF-model.
When comparing the displacements from the SDOF-model to the modal-analysis
using only one mode, both with high damping, it was seen that a better convergence
was obtained when the transformation factor κcF was set to 0.8 instead of the
previously assumed value of 1.0.
The analysis of the curtailed beams did not reveal any special problems. Significant
plastic strains were noticed at the curtailed area, but the plastic strains in midpoint
were at least five times larger for all studied cases. Furthermore, it was not possible to
determine a correlation between the intensity of the load and the plastic strain for the
beam, as the yielding is a function of both moment and time. These results indicate
that the negative effect due to curtailment may be possible to adequately deal with in a
reinforced concrete structure; i.e. the possible negative effect due to curtailment is
believed to be small.
7.2 Further studies
There seems to be a connection between the wave propagation and the moment
progression in the beam, and it would be interesting to know more about this. When
the beam is modelled in the FE-model for plastic material behaviour a very high
initial Young’s modulus is used, and it will increase the information speed in the
concrete. It is interesting to study this further in order to tell if this modelling method
will affect the results significantly.
It is interesting to further study the dynamic response of a structural member with
different properties depending on the direction of deflection. If a beam with
symmetrical cross-section can withstand the first and largest deflection, there will be
no problems with the other deflections. However, if the beam is weaker in the
opposite direction a failure might occur because of the recoil. This could be a risk in

-- 133 of 199 --

118
for example unsymmetrical reinforced concrete beams or T-cross-sections, and a way
of modelling this should be developed.
Both the moment from the SDOF and from the equivalent static load, for the elastic
response, will underestimate the maximum moments for an impulsive load, but since
they are quick and easy to calculate it is of interest to make them accurately describe
the moment on the safe side, and therefore it is of interest to find up-scaling factors
for the moment that sufficiently works.
Since the transformation factor for the damping κcF was only handled briefly in this
Master thesis there is a need for verifying the accurate value and also list the values
for different types of loads and boundary conditions. It should also be investigated
whether the transformation factor is dependent of the damping or not. It is of special
interest to derive the transformation factor in the future. This might be done with
regard to velocity, i.e. the derivative of the displacement.
It is not clear if a beam will obtain more maximum plastic strain when subjected to a
highly impulsive load than when subjected to a less impulsive load and this could be
of interest to study further in the future.
Also, the analyses made in this Master thesis could be verified by more accurate non-
linear FE-models, using solid elements to explicitly model concrete cracking and
reinforcement yielding. The modelling should also be extended to cover other
materials such as timber and steel.

-- 134 of 199 --

119
8 References
WRITTEN SOURCES:
Adhikari S., 2000. Damping Models for Structural Vibrations. Ph.D. thesis.
Engineering department, Cambridge University.
ADINA, 2011. Theory and Modelling Guide. Vol 1: ADINA Solids & Structures Report
ARD 11-8, ADINA R & D, Inc., Watertown, MA. USA.
Andersson S. and Karlsson H., 2012. Structural Response of Reinforced Concrete Beams
Subjected to Explosions. Division of Structural Engineering, Concrete Structures,
Chalmers University of Technology, Master Thesis 2012:103, Gothenburg, Sweden.
Augustsson R. and Härenstam M., 2010. Design of reinforced concrete slab with regard
to explosions. Division of Structural Engineering, Concrete Structures, Chalmers
University of Technology, Master Thesis 2010:38, Gothenburg, Sweden.
Bathe K-J., 1996. Finite Element Procedures. Prentice Hall, New Jersey, USA.
Biggs J.M., 1964. Introduction to Structural Dynamics. McGraw-Hill Inc., New York,
USA.
CEN 2004. Eurocode 2: Design of Concrete Structures – Part 1-1: General rules and
rules for buildings. European Comittee for Standardization, Brussels, Belgium.
Chopra A., 2011. Dynamics of Structures: Theory and Applications to Earthquake
Engineering, Third Edition. Pearson Education, Inc., New Delhi, India.
ConWep 1992: ConWep – Collection of conventional weapons effects calculation
based on TM 5-855-1, Fundamentals of Protective Design for Conventional
Weapons, U.S. Army Engineer Waterways Experiment Station, Vicksburg, USA.
Ek K-J. and Mattsson P., 2009. Design with Regard to Blast- and Fragment Loading.
Division of Structural Engineering, Concrete Structures, Chalmers University of
Technology, Master Thesis 2009:81, Gothenburg, Sweden.
Isaksson T., Mårtensson A., Thelandersson S., 2010. Byggkonstruktion.
Studentlitteratur AB, Lund, Sweden.
Johansson M., 1997. Armeringsseghetens inverkan på deformationsförmågan hos
betongkonstruktioner. Avdelning för Betongbyggnad, Chalmers Tekniska
Högskola, Rapport 97:1 Göteborg.
Johansson M., 1999. Non-linear Finite Element Analyses of Civil Defence Shelter
Subjected to Explosion Load or Impact Load. Avdelning för Betongbyggnad,
Chalmers Tekniska Högskola, Rapport 99:8 Göteborg.
Johansson M., 2000. Structural Behaviour in Concrete Frame Corners of Civil
Defence Shelters: Non-Linear Finite Element Analyses and Experiments.
Avdelning för Betongbyggnad, Chalmers Tekniska Högskola, Publikation 00:2
Göteborg.
Johansson M. och Laine L., 2007. Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 1: Last av luftstötvåg. Räddningsverket, Rapport
B54-232/07, Karlstad.
Johansson M. och Laine L., 2009. Bebyggelsens motståndsförmåga mot extrem
dynamisk belastning, Delrapport 3: Kapacitet hos byggnader. MSB, Rapport MSB
0142-10, Sweden.

-- 135 of 199 --

120
Nyström U., 2006. Design with regard to explosions. Division of Structural
Engineering, Concrete Structures, Chalmers University of Technology, Master
Thesis 2006:14, Gothenburg, Sweden.
Laine L., 2012. Markstötvåg. MSB, publication number MSB344, Sweden.
WEB SOURCE:
http://www.engineeringtoolbox.com/sound-speed-solids-d_713.html (2012-03-29)
http://www.bloomberg.com/news/2011-07-27/norway-police-spreads-breivik-terror-
probe-europe-wide-after-twin-attacks.html (2011-07-27)
http://www.ndt-
ed.org/EducationResources/CommunityCollege/Ultrasonics/Physics/wavepropagat
ion.htm (2009-12-15)

-- 136 of 199 --

121
Appendix A Beam theory
In structural analysis and design it is important to understand the calculations of the
deflection. Large deflections, high tensions and unwanted cracks are all connected,
hence, the deflection is a good way to verify the resistance of a beam.
In order to fully comprehend the deflection it is important to understand the symbols
for displacement. Displacement in the x, y and z directions are connected with the
letters u, v and w respectively. A vertically loaded (y direction) horizontal beam (x
direction) will be deformed into a curve, see Figure A.1. Thus will the deflection v be
the displacement in the y direction.
v
z,w
y,v
x,u
Figure A.1. Coordinate system and deflection for vertically loaded beam.
In order to derive the deflection curve the reader is referred to Figure A.2.
dx
O´
dθ
m2	m1
ρ
dθ
ds
Figure A.2. Curvature of a deflected beam.
With the radius of curvature ρ and the angle between the normal’s for m1 and m2 it is
possible to derive the curvature:
ds	d 	
	
		
(A.1)
The curvature can be expressed as the angular change over the curved length.


 1
	 ds
d
(A.2)
According to Figure A.3 the slope of the deflected beam can be expressed as:
dx
dv

		tan	
(A.3)
which is the first derivative of the deflection v. An expression for cos θ can be found:

-- 137 of 199 --

122
ds
dx

		cos	
(A.4)
y
dv
ρ-y
dx	dθ
m2
m1
ρ
ds
(a)
(b)
ds'
Figure A.3. Deformations of a beam in pure bending.
Assuming small angles and rotations, the following simplifications can be made:

	 	tan	
(A.5)
and
1	cos 
		
(A.6)
which leads to
dx
dv

		
(A.7)
and
dx	ds 	
(A.8)
By inserting Equation (A.7) in Equation (A.2) the following differential equation for
the curvature with regard to the deflection v is formed:
2
2
dx
v	d
dx
dv
ds
d 	






		
(A.9)
From Figure A.3 an expression for the horizontal strain, εx, at the distance y from the
neutral axis can be derived as

	
	

	
	
	
 y
d
d	d	y
ds
ds	ds
x 	
		


 (	'
(A.10)
It is known from Hooke’s law that

-- 138 of 199 --

123
E	x	x	

	 	
(A.11)
which by insertion of Equation (A.10) can be written as
E
y
x
 		
(A.12)
The connection between the curvature and the moment, M, can be derived with help
of Figure A.4, which shows the linear stress distribution and moment over the cross-
section for an arbitrary beam subjected to pure bending. When the moment and
curvature are positive the area above the neutral axis is in compression and the
stresses σx are negative; the area below the neutral axis is in tension and the stresses
are positive.
y
dA
M
σx
(a) (b)
Figure A.4. (a) Side view of normal stress distribution in an arbitrary beam of linear
elastic material, and (b) cross section of the same beam.
For an infinitesimal area dA which is subjected to negative stress σx with the lever y
from neutral axis, the positive partial moment is written as
dA	y	dM x	
			
(A.13)
By integrating the stresses over the area the moment is given by
		 			
A	A	A
x dA	y
E
dA
Ey
dA	y	M 2
2

	
	
(A.14)
Since the moment of inertia of the cross-sectional area can be written as
	
A
z dA	y	I 2
(A.15)
Equation (A.14) can be written as

z	EI
M 	
(A.16)
which can be rewritten as

1

z	EI
M
(A.17)

-- 139 of 199 --

124
Finally, insertion of Equation (A.17) in (A.2) gives
z	EI
M

		
(A.18)
or
2
2
dx
v	d
EI
M
z
	
(A.19)
which is also called the basic differential equation of the deflection curve of a beam.
Hence, the moment is proportional to the curvature.

-- 140 of 199 --

125
Appendix B Central Difference Method
B.1 Numerical solution
The central difference method is an explicit method for solving the equation of
motion:
)	(t	F	ku	u	c	u	m 		 		
(B.1)
where m is the mass, c is the damping, k is the stiffness, ü is the acceleration, is the
velocity, u is the displacement and F(t) is the driving force.
By solving an equation explicitly means that in order to calculate ui+1 the method uses
ui and ui-1. The method also uses a constant time step, Δt. The index i is stated by the
observed time.
By referring to Figure B.1 the velocity and acceleration at time i can be expressed as
t
u	u
u i	i
i 

 	
2
1	1	
	
(B.2)
 	  	
2
1	1
1	1
)	(
2
t
u	u	u
t
t
u	u
t
u	u
u i	i	i
i	i	i	i
i 
	







 	
	

(B.3)
respectively in the central difference method. The acceleration in Equation (B.3) is
derived as the difference of mid interval velocities (the circles in Figure B.1).
ui+

ui
ui-

t
u
ti-
 ti ti+

Δt Δt
Figure B.1. The central difference scheme. The method uses ui-
 and ui in order to
solve ui+1.
By inserting Equations (B.2) and (B.3) in (B.1), an approximation of the equation of
motion is given as
i	i
i	i	i	i	i F	ku
t
u	u
c
t
u	u	u
m 	




	 			
2	)	(
2 1	1
2
1	1
(B.4)
where ui and ui-1 are assumed to be known. Rearranging Equation (B.4), by moving
the known displacements ui and ui-1 to the right side, gives

-- 141 of 199 --

126
i	i	i	i u
t
m
k	u
t
c
t
m
F	u
t
c
t
m 






		








		







 	 2	1	2	1	2 )	(
2
2	)	(	2	)	(
(B.5)
or
i	i F	u	k ˆ	ˆ 1 		
(B.6)
where
t
c
t
m
k 


 2	)	(
ˆ 2	
(B.7)
and
i	i	i	i u
t
m
k	u
t
c
t
m
F	F 






		








	  2	1	2 )	(
2
2	)	(
ˆ	
(B.8)
It is now possible to derive the expression for the sought displacement, ui+1 as
k
F
u i
i ˆ
ˆ
1 		
(B.9)
From Equation (B.8) it is seen that ui and ui-1 are used to solve ui+1, i.e. in order to
determine u1 the displacements u0 and u-1 must be known. The initial displacement u0
is assumed to be known, it is zero in this Master thesis. The displacement u-1 can be
determined by setting i=0 in Equation (B.2) and (B.3), then solving for u1 in Equation
(B.2) and substituting in (B.3).
The starting step of solving the central difference method is then given as
0
2
0	0	1
)	( u
t
t
u	t	u	u 	 
					
(B.10)
B.2 Stability
A solution is said to be stabile if errors in the initial conditions do not grow during the
iterations, which can easily happen if the chosen time step is not short enough.
According to Chopra, (2011), the requirement of stability for the central difference
method is specified as

1


n	T
t
(B.11)
If this requirement is not met, the central difference method will “blow up” and
quickly become useless. For explosions this is seldom a problem since much smaller
time steps usually are used anyway to obtain accurate enough results.

-- 142 of 199 --

127
B.3 Non-linear material response
The central difference method is also an excellent method when dealing with a non-
linear material response. The method derived in Appendix B.1 is for a linear stiffness
but can easily be altered to be able to calculate the displacement for a structure with a
non-linear material response. Similar to the displacement, the stiffness k can be
calculated at different times as a response of the displacement:
)	( i	i	i u	k	k 	
(B.12)
In a system with a non-linear material response the stiffness will change with time
2	1 	 	 i	i	i k	k	k	
(B.13)
while it for a linear material response will stay the same:
k	k	k i	i 	 1	
(B.14)
When analysing the structural response it is however more of interest to derive the
inner resistance for a certain time than focusing on the stiffness, thus, the stiffness ki
will be inserted in the equation for the inner resistance as follows:
i	i	i u	k	R 		
(B.15)
In Figure B.2 it is shown how the response changes for different displacements.
u
R
u(ti+2)
R(ti)
k(u(ti)) k(u(ti+1))
u(ti) u(ti+1)
k(u(ti+2))
R(ti+1)
Figure B.2. The stiffness at time ti for a non-linear material response.

-- 143 of 199 --

Denna sida skall vara tom!

-- 144 of 199 --

129
Appendix C Deformation shape and moment over
time
In order to help the reader the deformation shape and the moment distribution have
been plotted over time. Then one can see how the beam will deflect when subjected to
an explosion. It is also very interesting to see how the moment develops over time.
The figures are showing an elastic stadium II, plastic and elasto-plastic material
response for the beam described in Chapter 3, beam 1.
C.1 Linear elastic
t = 0.1 ms
t = 0.2 ms
t = 0.3 ms
0
10
20
30
40
0 	5 	10 	15 	20 	25 	30	
Midpoint displacement,
 u [mm]
Time, t [ms]
-20
0
20
40
60
80
100
0 	5 	10 	15 	20 	25 	30	
Midpoint moment,
 M [kNm]
Time, t [ms]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 145 of 199 --

130
t = 0.4 ms
t = 0.5 ms
t = 0.6 ms
t = 0.7 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 146 of 199 --

131
t = 0.8 ms
t = 0.9 ms
t = 1.0 ms
t = 1.5 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 147 of 199 --

132
t = 2.0 ms
t = 2.5 ms
t = 3.0 ms
t = 3.5 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 148 of 199 --

133
t = 4.0 ms
t = 4.5 ms
t = 5.0 ms
t = 6.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 149 of 199 --

134
t = 7.0 ms
t = 8.0 ms
t = 9.0 ms
t = 10.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 150 of 199 --

135
t = 11.0 ms
t = 12.0 ms
t = 13.0 ms
t = 14.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 151 of 199 --

136
t = 15.0 ms
t = 20.0 ms
t = 25.0 ms
t = 30.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
0
20
40
60
80
100
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
0
20
40
60
80
100
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 152 of 199 --

137
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
0
20
40
60
80
100
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 153 of 199 --

138
C.2 Ideal plastic
t = 0.1 ms
t = 0.2 ms
t = 0.3 ms
0
10
20
30
40
0 	5 	10 	15 	20 	25 	30	
Midpoint displacement,
 u [mm]
Time, t [ms]
-60
-30
0
30
60
0 	5 	10 	15 	20 	25 	30	
Midpoint moment,
 M [kNm]
Time, t [ms]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 154 of 199 --

139
t = 0.4 ms
t = 0.5 ms
t = 0.6 ms
t = 0.7 ms
t = 0.8 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 155 of 199 --

140
t = 0.9 ms
t = 1.0 ms
t = 1.5 ms
t = 2.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 156 of 199 --

141
t = 2.5 ms
t = 3.0 ms
t = 3.5 ms
t = 4.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 157 of 199 --

142
t = 4.5 ms
t = 5.0 ms
t = 6.0 ms
t = 7.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 158 of 199 --

143
t = 8.0 ms
t = 9.0 ms
t = 10.0 ms
t = 11.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 159 of 199 --

144
t = 12.0 ms
t = 13.0 ms
t = 14.0 ms
t = 15.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 160 of 199 --

145
t = 20.0 ms
t = 25.0 ms
t = 30.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-40
-20
0
20
40
60
80
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 161 of 199 --

146
C.3 Elasto-plastic
t = 0.1 ms
t = 0.2 ms
t = 0.3 ms
0
10
20
30
40
50
60
0 	5 	10 	15 	20 	25 	30 	35	
Midpoint displacement,
 u [mm]
Time, t [ms]
-20
0
20
40
60
0 	5 	10 	15 	20 	25 	30 	35	
Midpoint moment,
 M [kNm]
Time, t [ms]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 162 of 199 --

147
t = 0.4 ms
t = 0.5 ms
t = 0.6 ms
t = 0.7 ms
t = 0.8 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 163 of 199 --

148
t = 0.9 ms
t = 1.0 ms
t = 1.5 ms
t = 2.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
-5
0
5
10
15
20
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 164 of 199 --

149
t = 2.5 ms
t = 3.0 ms
t = 3.5 ms
t = 4.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 165 of 199 --

150
t = 4.5 ms
t = 5.0 ms
t = 6.0 ms
t = 7.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 166 of 199 --

151
t = 8.0 ms
t = 9.0 ms
t = 10.0 ms
t = 11.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-20
-10
0
10
20
30
40
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 167 of 199 --

152
t = 12.0 ms
t = 13.0 ms
t = 14.0 ms
t = 15.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 168 of 199 --

153
t = 20.0 ms
t = 25.0 ms
t = 30.0 ms
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]
0.0
0.2
0.4
0.6
0.8
1.0
0 	1 	2 	3
Deformation shape
Coordinate, x [m]
-10
0
10
20
30
40
50
0 	1 	2 	3
Moment,
 M [kNm]
Coordinate, x [m]

-- 169 of 199 --

Denna sida skall vara tom!

-- 170 of 199 --

155
Appendix D Mode superposition
To solve the equation of motion for an MDOF-system, for an elastic response, matrix
calculations are used. These calculations often become heavy and cumbersome for
complex systems. If the damping is neglected it is possible, by using the free vibration
mode shapes, to uncouple the equations and solve them separately. This is done by
insertion of so called modal coordinates. The exact solution to the original equation is
given when all equations are added together, but if a faster solution is wanted it is
possible to create an approximation of the solution by only using some modes. For
many systems it is often sufficient to include only the first few modes, and still attain
a good approximation. Each equation can be solved as an SDOF-system of its own
and thereby an n-DOF-system will have n natural frequencies and n corresponding
mode shapes.
The undamped free vibration of motion is written as
)	(	)	(	)	( t	t	t p	ku	u	m 			
(D.1)
To solve this equation we insert modal coordinates, q, such as
)	(	...	)	(	)	(	)	( 2	2	1	1 t	q	t	q	t	q	t	u n	n	

	
	 				
(D.2)
where ϕi are modal vectors describing the shape of mode i and Equation (D.2) is
called a modal expansion of u. For all modes, the vector u can then be written as
Φq	u 	
(D.3)
where
)	...	( n	2	1	

	
			Φ	
(D.4)
)	...	( 2	1 n	q	q	q		q	
(D.5)
Since ü is the second derivative of u, the vector ü can be written as
)	(	...	)	(	)	(	)	( 2	2	1	1 t	q	t	q	t	q	t	u n	n 				

	
	 				
(D.6)
or in matrix form
q	Φ	u 	 	
(D.7)
Insertion of Equation (D.3) and Equation (D.7) in (D.1) gives
)	(	)	(	)	( t	t	q	t p	kΦ	q	mΦ 			
(D.8)
Premultiply with the mode shapes ΦT gives
)	(	)	(	)	( t	t	q	t T	T	T p	Φ	kΦ	Φ	q	mΦ	Φ 			
(D.9)

-- 171 of 199 --

156
Using orthogonality:
i	i
T
i M	m 
	
		
(D.10)
i	i
T
i K	k 
	
		
(D.11)
)	(	)	( t	P	t	p i	i
T
i 
		
(D.12)















n
T
n
T
n
T
n
n
T	T	T
n
T	T	T
T
m	m	m
m	m	m
m	m	m

	
	
	
	
	

	
	
	
	
	

	
	
	
	
	

			


2	1
2	2	2	1	2
1	2	1	1	1
mΦ	Φ	
(D.13)
where
j	i	m j
T
i 	 ;	0	

		
(D.14)
j	i	k j
T
i 	 ;	0	

		
(D.15)
which leads to




























n	n
T
n
T
T
T
M
M
M
m
m
m

			



			


0	0
0	0
0	0
0	0
0	0
0	0
2
1
2	2
1	1

	

	

	
mΦ	Φ	
(D.16)
and so




























n	n
T
n
T
T
T
K
K
K
k
k
k

			



			


0	0
0	0
0	0
0	0
0	0
0	0
2
1
2	2
1	1

	

	

	
kΦ	Φ	
(D.17)
The equation of motion is now uncoupled and known as the modal equations






























































)	(
)	(
)	(
)	(
)	(
)	(
0	0
0	0
0	0
)	(
)	(
)	(
0	0
0	0
0	0
2
1
2
1
2
1
2
1
2
1
t	P
t	P
t	P
t	q
t	q
t	q
K
K
K
t	q
t	q
t	q
M
M
M
n	n	n	n	n
	

			







			


(D.18)
or
(t)	P	(t)	q	K	(t)	q	M i	i	i	i	i 			
(D.19)

-- 172 of 199 --

157
With the natural frequency ωi for mode i is defined as
i
i
i M
K

		
(D.20)
the uncoupled Equations (D.19) can be written as
i
i
i	i	i M
t	P
t	q	t	q )	(
)	(	)	( 2 	
		
(D.21)
where each equation is an SDOF-system of its own, and the exact solution is given
from
t	B	t	A	q i	i	i	i	i	

	 sin	cos 		
(D.22)
where the coefficients A and B are determined from the initial conditions:










n
i	i	i
n
i	i
B	u
A	u
1
1
)	0	(
)	0	(
	


(D.23)
Generally, when damping is included in the equation of motion, it can no longer be
uncoupled and instead the damping matrix can be described as a linear combination of
mass and stiffness. This is called Rayleigh damping.

-- 173 of 199 --

Denna sida skall vara tom!

-- 174 of 199 --

159
Appendix E Rayleigh damping
When designing structures for impulse loads one does not need to regard the damping,
since the worst case will always be when there is no damping, but for analysis it is
important to regard it in order to obtain an accurate representation of the response.
According to Chopra (2011), if the structure is assumed to consist of similar parts
with similar damping properties, a so called classical damping can be adapted.
Classical damping is a special case of viscous damping where a proportional damping
is assumed for the system, and it is possible to apply this on the uncoupled equations
of motion that allow MDOF systems to be treated as a collection of SDOF oscillators,
Adhikari (2000).
If the structure is either non-linear or has non-classical damping, a damping matrix is
needed. In this Master thesis, however, the damping has been regarded as classical
damping, and Rayleigh and modal damping is used.
Rayleigh damping consists of both mass-proportional damping and stiffness-
proportional damping and the relationship is written as
K	M	C 			
	
		
(E.1)
where C is the diagonal damping matrix, M is the mass matrix, K is the stiffness
matrix and α and β are coefficients to the mass- and stiffness term, respectively. The
coefficients are obtained by choosing a specific mode frequency, ω, and its damping
ratio, ζ, which for mode n is written as
n
n
n	



 
	 1
2
(E.2)
Since Equation (E.2) has two unknowns it can only be uniquely solved by using the
two damping ratios ζi and ζj for the ith and jth mode, respectively. In matrix form this
is expressed as












	








	

	


j	j
i	i
j
i
/
/
1
1
2
1
(E.3)
which, if the damping ratios are assumed to be the same, leads to the two algebraic
equations for solving α and β:
j	i
j	i

	
	

	 

	
(E.4)
j	i	

	
	 
 2
(E.5)
As can be seen from the typical Rayleigh damping curve shown in Figure E.1, the
mass term affects the damping more for lower frequencies while the stiffness term
dominates the damping for higher frequencies. This results in the damping being

-- 175 of 199 --

160
lower in the interval between the two chosen frequencies, and higher outside the
aforementioned interval.
Figure E.1. Rayleigh damping and its contribution from mass- and stiffness-
proportional damping.
To attain the frequencies, f, in hertz, the angular velocity is divided by 2π, as seen in
Equation (E.1).



	f	
(E.6)
Damping,
 ζ [%]
Frequency, f [Hz]
Rayleigh damping
Rayleigh damping
Mass damping
Stiffness damping
ζ 	ζ
f 	f
i
i
j
j

-- 176 of 199 --

161
Appendix F Mode shapes and eigenfrequencies,
Beam 1
In ADINA the mode shapes seen in Figure F.1 represent the first 10 mode shapes for
the simply supported beam 1 as three other modes are seen on third, seventh and ninth
place. These three modes are longitudinal stretching modes that appear because one of
the supports does not have a restriction in the x-direction, and they have been
disregarded in this Master thesis.
1st mode
2nd mode
3rd mode
4th mode
5th mode
6th mode
7th mode
Longitudinal stretching mode
(in ADINA)
Eigenfrequencies
10.84 Hz
43.11 Hz
96.14 Hz
168.8 Hz
259.8 Hz
367.4 Hz
490.0 Hz
89.79 Hz, 269.6, Hz, 450.2 Hz
Bending modes
Figure F.1. First seven mode shapes and a longitudinal stretching mode and their
eigenfrequencies for the simply supported beam, Beam 1, from
Chapter 3.

-- 177 of 199 --

Denna sida skall vara tom!

-- 178 of 199 --

163
Appendix G Verification of different analyses
G.1 SDOF-analysis versus modal-analysis with one mode
An analysis is made in order to study the similarity of the SDOF-analysis and the
modal-analysis when only including one mode. This analysis has already been made
for the displacement in Section 5.1 and here it is made for the moment. In theory these
two analyses should give the same result. In Figure G.1 it is shown that they are very
similar and they are assumed to give the same result. Because of this, where modal-
analysis with one mode is shown, the same applies to the SDOF-analysis and vice
versa.
(a)
(b)
Figure G.1. (a) The similarity of the SDOF-analysis and the modal-analysis with one
mode, when subjected to LC1, (b) zoomed in.
-150
-100
-50
0
50
100
150
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment EL II
Max Pos Eq. Static load
Undamped FE-analysis
1 mode
SDOF
Max Neg Eq. Static load
33
45
57
69
81
93
105
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Moment,
 M [kNm]
Time, t [ms]
Midpoint moment EL II
Max Pos Eq. Static load
Undamped FE-analysis
1 mode
SDOF
Max Neg Eq. Static load

-- 179 of 199 --

164
G.2 Modal-analysis with 25 modes versus FE-analysis (direct
integration)
To be able to compare the number of modes required when analysing with regard to
5% modal damping a modal-analysis with 25 modes is made. This is because when
analysing with modal damping the ordinary FE-analysis (direct integration) can not be
used. The difference between the modal-analysis consisting of 25 modes and the FE-
analysis is shown in Figure G.2, with comparison with the seven-mode-difference.
When including 25 modes the results are almost identical to the FE-analysis. Hence,
in this case when regarding modal damping the number of modes required is
compared to a modal-analysis using 25 modes.
Figure G.2. Difference between midpoint moments for modal-analysis with 7 and 25
modes and the FE-analysis when subjected to LC3.
-45
-30
-15
0
15
30
45
15 	17 	19 	21 	23 	25 	27 	29 	31 	33 	35
Difference [kNm]
Time, t [ms]
Difference in mode superposition (between modes and implicit)
7 modes - FE
25 modes - FE

-- 180 of 199 --

165
Appendix H Verification of the transformation
factor for damping, κc
In this appendix the figures are showing the response of the five different beams,
simply supported, when struck by the four different load cases, uniformly distributed,
in an elastic material response, hence elastic transformation factors. The damping
ratio is set to 20 percent in order to make it easier to capture the damping effect. Since
the plastic response is badly described by the SDOF without damping it is difficult to
determine the plastic transformation factor and is not analysed. However, the elastic
material response includes the FE-analysis and the SDOF-analysis when the damping
term is multiplied with κcF equals 1.0 and 0.8:
)	(t	F	ku	u	c	u	m cF	mF 		 		

		
(H.1)
where
F
c
cF


 	
(H.2)
When κcF equals 0.800 the transformation factor for the damping, κc, equals 0.512. As
mentioned earlier, Section5.3, will the exact value for the transformation factor not be
determined. Further studies on the subject can be done including different boundary
conditions and the plastic material response. It is also necessary to do analyses with
different damping values than the high damping of 20 percent used here. It will also
be interesting to compare the moment when performing those analyses.
Table H.1. Properties of beams 1 to 5.
Properties First eigenfrequency
[Hz]
Ec [GPa] ρ [kg/m³]
Beam 1 10.8 33 2400
Beam 2 10.7 40 3000
Beam 3 9.2 20 2000
Beam 4 7.7 33 4800
Beam 5 15.3 66 2400

-- 181 of 199 --

166
H.1 Beam 1
Figure H.1. Beam 1, LC0
Figure H.2. Beam 1, LC1
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC0
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC1
FE
SDOF 0.8
SDOF 1.0

-- 182 of 199 --

167
Figure H.3. Beam 1, LC2
Figure H.4. Beam 1, LC3
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC2
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC3
FE
SDOF 0.8
SDOF 1.0

-- 183 of 199 --

168
H.2 Beam 2
Figure H.5. Beam 2, LC0
Figure H.6. Beam 2, LC1
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC0
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC1
FE
SDOF 0.8
SDOF 1.0

-- 184 of 199 --

169
Figure H.7. Beam 2, LC2
Figure H.8. Beam 2, LC3
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC2
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC3
FE
SDOF 0.8
SDOF 1.0

-- 185 of 199 --

170
H.3 Beam 3
Figure H.9. Beam 3, LC0
Figure H.10. Beam 3, LC1
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC0
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC1
FE
SDOF 0.8
SDOF 1.0

-- 186 of 199 --

171
Figure H.11. Beam 3, LC2
Figure H.12. Beam 3, LC3
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC2
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC3
FE
SDOF 0.8
SDOF 1.0

-- 187 of 199 --

172
H.4 Beam 4
Figure H.13. Beam 4, LC0
Figure H.14. Beam 4, LC1
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC0
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC1
FE
SDOF 0.8
SDOF 1.0

-- 188 of 199 --

173
Figure H.15. Beam 4, LC2
Figure H.16. Beam 4, LC3
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC2
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC3
FE
SDOF 0.8
SDOF 1.0

-- 189 of 199 --

174
H.5 Beam 5
Figure H.17. Beam 5, LC0
Figure H.18. Beam 5, LC1
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC0
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC1
FE
SDOF 0.8
SDOF 1.0

-- 190 of 199 --

175
Figure H.19. Beam 5, LC2
Figure H.20. Beam 5, LC3
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC2
FE
SDOF 0.8
SDOF 1.0
-45
-30
-15
0
15
30
45
0 	15 	30 	45 	60 	75 	90 	105 	120 	135 	150
Displacement,
 u [mm]
Time, t [ms]
Displacement LC3
FE
SDOF 0.8
SDOF 1.0

-- 191 of 199 --

Denna sida skall vara tom!

-- 192 of 199 --

177
Appendix I Comparison between the SDOF-model
without damping and the FE-model
with damping
For design purpose is it interesting to compare the SDOF-analysis without damping
with the FE-analysis, which is the modal analysis with 25 included modes, with modal
damping. Then one can see how accurate the results are from a simple approximation
such as the SDOF-model. In Table I.1 the comparison have been made with regard to
the displacement and in Table I.2 the comparison is made with regard to moment. The
different beams used can be found in Appendix H.
Table I.1. Comparison between the SDOF-analysis without damping and the FE-
analysis when regarding 5 % damping for all beams and for LC1 and
LC3 for the displacement.
SDOF [mm] FE [mm] Difference [%]
LC1
Beam 1 38.8 35.6 9.1
Beam 2 31.5 29.3 7.7
Beam 3 54.6 50.8 7.6
Beam 4 27.5 25.5 7.6
Beam 5 27.4 25.4 7.9
LC3
Beam 1 38.9 35.9 8.4
Beam 2 31.6 29.6 7.0
Beam 3 54.8 51.2 7.0
Beam 4 27.5 25.7 7.0
Beam 5 27.5 25.7 7.0

-- 193 of 199 --

178
Table I.2. Comparison between the SDOF-analysis without damping and the FE-
analysis when regarding 5 % damping for all beams and for LC1 and
LC3 for the moment.
SDOF [kNm] FE [kNm] Difference [%]
LC1
Beam 1 76.5 82.2 -7.0
Beam 2 75.3 80.0 -5.9
Beam 3 65.2 69.4 -6.0
Beam 4 54.1 57.6 -6.1
Beam 5 107.9 113.8 -4.7
LC3
Beam 1 76.7 83.7 -8.3
Beam 2 75.6 81.4 -7.2
Beam 3 65.4 70.5 -7.2
Beam 4 54.3 58.5 -7.2
Beam 5 108.5 116.8 -7.1
It is interesting to see that for the displacement is the SDOF-model giving values on
the safe side, approximately from seven to nine percent, while for the moment the
model is giving values on the unsafe side, approximately from six to eight percent
lower.

-- 194 of 199 --

179
Appendix J Evaluation of the capacity of beam 1
J.1 Beam 1 without curtailment
In order to evaluate the beam, the rotation capacity from Section 2.2.5 and Figure 2.15
is used. If the rotation capacity for the beam is known, it can be converted to a
maximum midpoint displacement. This is an easy and fast way to check the capacity
of the beam.
θ umax
l
Figure J.1. Maximum deformation
The following calculations are made in ultimate limit state. The upper reinforcement
is taken into account as in Section 3.2.2. A new distance d is used since the distance
d’ is not taken into account in the equation. Since the upper reinforcement also is in
tension the distance d will equal 100 mm:
26	0	100	26 .	/	/ 		d	x	
(J.1)
With this value the allowed plastic rotation can be determined when regarding the
reinforcement, B500B which is Class B, and the concrete, C 30/37 is approximated to
C 50/60.
rad	10	0	11 3	
	 .	pl	
	
(J.2)
Now the shear slenderness, λ, needs to be determined and if it has another value than
3.0 the allowed plastic rotation will have to be multiplied with a factor. The shear
slenderness is calculated as:
15
100
1500	0 		 d
l
	
(J.3)
where l0 is the length between the point of zero moment and the plastic hinge, and d is
the effective depth to the reinforcement.
24	2
3 .		

	k	
(J.4)
rad	10	6	.	24	10	0	.	11	24	.	2 3	3 	 						 pl	rd k	

	 	
(J.5)
The maximum deformation can now easily be calculated:
mm	0	.	37
2
3000	10	6	.	24
2
3
max 
	



	
l
u pl	

(J.6)
So, the deformation capacity in the midpoint of the beam is calculated to be 37 mm.
This will be compared to the displacement from the SDOF-analyses and the FE-

-- 195 of 199 --

180
analysis with the elasto-plastic material response. Three SDOF-analyses were made in
Section 4.1: one with elastic-, one with plastic and one with both transformation
factors. The results from these were approximately 45 mm, 49 mm and 41 mm,
respectively, while the FE-analysis also showed a displacement of 49 mm for the
midpoint. This means that the allowed plastic rotation is exceeded by all of the
analyses. Hence, the beam would probably fail if loaded with load case 1.
J.2 Beam 1 with curtailment at L/6
When the beam is fully reinforced without curtailment the method for evaluating the
capacity is pretty straight forward. However, when curtailment of the beam is a fact
the method for evaluating the capacity is more difficult, and above all, uncertain.
θ1
l0,1
θ2 	plastic hinge
l0,2
Figure J.2. Deformation when plastic hinges have developed.
One way of determining if the plastic strain in the curtailment point is of concern is to
compare it with the strain in the midpoint with regard to the rotation capacity.
Aε,2
Aε,1
εpl,1
εpl,2
Figure J.3. Schematic figure of the plastic strains for half the beam.
If the smaller plastic strain is of no concern the following statement should apply:
2,
1,
2,
1,
rd
rd
A
A



 	
(J.7)
In order to determine this, the allowed plastic rotation capacity for θrd,1 needs to be
calculated. First, the compression zone is calculated. This is done in line with Section
3.2.2, but now only with the curtailment taken into account:
mm	6	.	19
10
2	.	1
30
8	.	0
500
30	.	0
25	500
15	.	0
25
8	.	0 6
'	'

	
				





	

	
ccd
s	s	s	s
f
A	A
x	
(J.8)

-- 196 of 199 --

181
Now, the allowed plastic rotation can be determined with use of Figure 2.15. The
distance d is set to 100 mm:
196	0	100	6	19 .	/	.	/ 		d	x	
(J.9)
which leads to:
rad	10	5	12 3
1

	 .	,	pl	
	
(J.10)
Same as for the beam without curtailment, the shear slenderness λ, scaling factor kλ
and ultimately the new allowed rotation capacity θrd,1 are calculated:
5
100
500	1	0 		 d
l ,
	
(J.11)
where l0,1 is the length between the point of zero moment and the plastic hinge.
29	1
3 .		

	k	
(J.12)
rad	10	1	.	16	10	5	.	12	29	.	1 3	3
1,	1,
	 						 pl	rd k	

	 	
(J.13)
The allowed plastic rotation for θrd,2 is already calculated for the beam without
curtailment in Section J.1:
rad	10	6	.	24 3
2,

		rd	
	
(J.14)
The following step is to determine the areas of the plastic strains with regard to load
case 1 from Figure J.4.
Figure J.4. Plastic strain for the beam with curtailment of L/6 from the ends.
0
0.005
0.01
0.015
0.02
0.025
0.03
0.0 	0.5 	1.0 	1.5 	2.0 	2.5 	3.0
Plastic strain,
 εpl [-]
Coordinate, x [m]
LC1
Aε,1
Aε,2

-- 197 of 199 --

182
4
1, 10	0	.	2
2
2	.	0	0020	.	0 
	

	
	A	
(J.15)
4
2, 10	5	.	15
2
4	.	0	002	.	0
2
1	.	0	023	.	0 
	



	
	A	
(J.16)
Now Equation (J.7) can be checked:
654	.	0
10	6	.	24
10	1	.	16
129	.	0
10	5	.	15
10	0	.	2 3
3
4
4



	

 



(J.17)
Consequently, it is approximately a factor 5 between, which indicates that the strain at
the curtailment point is not critical.
Another way to evaluate the capacity is to convert the allowed rotation capacity into
an allowed plastic strain. This can be done when assuming different forms and
distribution of the plastic strain. If one assumption is on the safe side and the other on
the unsafe side, the allowed plastic strain can be narrowed down to an interval. With
use of Figure J.5 and Equations (J.18) to (J.20) the interval is calculated.
Aε
εpl
L’=h/2
εpl,1 	εpl,2
h/2
L’=3h/2 	εpl,2/5
h/2	h
L’
(a)
(b) 	(c)
Figure J.5. Schematic figure of the plastic strains for half the beam where (a) is the
real strain, (b) strain limit for failure on the unsafe side and (c) strain
limit for failure on the safe side.
pl	L	A	

		
 		 '
(J.18)
where α is a factor depending on the form and distribution.
	
 A
h
2
	
(J.19)

-- 198 of 199 --

183
'	1, 2 L
h
pl 	




	
(J.20)
For the simple case of Figure J.5 (b) the α-factor is 0.5 and the equation for the limit
of plastic strain before failure for a calculation on the unsafe side is:
%	9	.	4	10	6	.	24	2	2
2
5	.	0	2
3
1, 					
	

 
rd
rd
pl h
h



(J.21)
For the case on the safe side the α-factor is more difficult to determine so the area is
calculated with use of Figure J.5 (c):
2
5	2
5	2	2
5
2
2
2
2
2













 	





 	





 

,
,
,
, pl
pl
pl
pl h
h
h
A





(J.22)
5
2 2
2
,	pl	h
A


	
	
(J.23)
With use of Equation (J.19) the limit of plastic strain before failure, for a calculation
on the safe side, is determined:
%	1	.	3	10	6	.	24
4
5
4
5
2
5
2
3
2, 					



 
rd
rd
pl h
h


	
(J.24)
The limit for plastic strain before failure has now been set to an interval between
approximately 3 and 5 percent. This should be compared to Figure J.4 where the
plastic strain is 2.4 percent, which indicates that the beam will not break due to load
case 1. This result was not anticipated since the beam in Section J.1 without
curtailment was subjected to the same load and did actually break. This indicates that
the beam actually can increase its resistance if curtailment is used. This could be
derived to the increased plastic zone which will help with regard to deformation.
It is difficult to determine if this way to analyse the beam is satisfying. One must be
very careful when drawing conclusions from this result since it is uncertain if it is in
line with EC2. One should keep in mind that the model used in this analysis is based
on a elasto-plastic model while the suggestions in EC2 are based on experimental tests
on reinforced concrete beams. Hence, there may be some discrepancies in between
them.

-- 199 of 199 --