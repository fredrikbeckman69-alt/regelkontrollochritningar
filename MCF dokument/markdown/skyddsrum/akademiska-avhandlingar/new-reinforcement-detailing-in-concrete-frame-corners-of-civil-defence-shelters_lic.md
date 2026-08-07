---
title: "New Reinforcement Detailing In Concrete Frame Corners Of Civil Defence Shelters Lic"
category: "akademiska-avhandlingar"
originalFile: "skyddsrum/akademiska-avhandlingar/new-reinforcement-detailing-in-concrete-frame-corners-of-civil-defence-shelters_lic.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","armering","explosion","reinforcement","frame","this","with"]
summary: "ffi CHAI.\"TIERS U1{ IVERSITY OFTTCHNOTOG Division of Concrete Structures Publication 96:1 NewReinforcement Detailing in ConcreteFrameCornersof CivilDefenceShelters Non-linear FiniteElementAnalysesand Experiments MorganJohansson Licentiatethesis Gd..."
---

ffi CHAI."TIERS	U1{	IVERSITY	OFTTCHNOTOG
Division of Concrete Structures
Publication	96:1
NewReinforcement	Detailing	in ConcreteFrameCornersof
CivilDefenceShelters
Non-linear	FiniteElementAnalysesand Experiments
MorganJohansson
Licentiatethesis
GdteborgNovember1996

-- 1 of 100 --



-- 2 of 100 --

CHALMERSUNIVERSITYOFTECHNOLOGY
DEPARTMENTOF STRUCTURALENGINEERING
DIVISION OF CONCRETESTRUCTURES
A R B N R : l l 0 6 P u b l i c a t i o n	9 6 : l
New Reinforcement Detailing in Concrete Frame Comers of Civil Defence Shelters
Non-linear Finite Element Analyses and Expertments
Morgan Johansson
GoteborgNovember1996
Adress: ChalmersUniversityof Technology
Divisionof ConcreteStrucfures
S*{1296 Gijteborg,Sweden
Telephone: 03i - 772 1000 Telefax 0 3 r - 7 1 2 2 2 6 0

-- 3 of 100 --

ISSN0349-8581

-- 4 of 100 --

PREFACE
This studydealswith the reinforcementdetailingof frame comersin civil defenceshelters.
Experimentsand finite element analyses,basedon non-linearfracture mechanics,were
conductedto evaluatea new designproposal.The work presentedin this thesiswas carried
out from November1994to November1996at the Division of ConcreteStructures,Chalmers
Universityof Technology.The projectis financedby the SwedishRescueServiceAgency.
I wish to thankmy supervisor,ProfessorKent Gylltoft, for his guidanceand support.I would
also like to thank Bjdrn Ekengren,M.Sc., and MagnusKjellman, M.Sc., from the Swedish
RescueServiceAgencyfor their encouragingengagementin the project.Specialthanksare
due to Mario Plos,Ph.D.,who was an invaluablesupportin the first yearof the project.For
their joyiul, never ending supportand encouragement,	I thank my fellow colleaguesat the
Structural EngineeringDivision. Further, I owe thanks to the staff of the Structural
EngineeringLaboratoryfor their assistancein constructingand testing the frame corner
specimens.Finally, I thankWandaSobko,DiplomaEngineer,and l-arsWahlstrom,Engineer,
for help with frguresandphotos,respectively.
Gciteborg,November1996
MorganJohansson

-- 5 of 100 --



-- 6 of 100 --

CONTENTS
PREFACE
CONTENTS
ABSTRACT
NOTATIONS
INTRODUCTION
l.l Background
1.2 Aim of theStudy
LITERATURESURVEY
2.1 FrameCorners
2.2 FractureMechanicsfor Concrete
2.3 InteractionbetweenSteelandConcrete
EXPERIMENTS
3.1 TestSpecimens
3.1.1 Dimensionsandreinforcement
3.1.2 Materialproperties
3.2 TestSet-upandTestProcedure
3.3 FailureDevelopment
3.3.1 General Observations
3.3.2 Specimens	with highreinforcement	ratio
3.3.3 Specimens	with low reinforcement	ratio
3.4 TestResults
3.5 Discussion
NON-LINEARFINITE ELEMENT ANALYSES
4.1 General
4.2 MaterialModels
4.2.1 Modellingof theconcrete
4.2.1.1Thecrackmodelfor tension
4.2.1.2The plasticitymodelfor compression
4.2.2 Modellingof thereinforcemenr
4.2.3 Interactionbetweenreinforcementandconcrete
4.3 The NumericalApproach
4.4 Analysesof FrameCorners
4.4.1 General
4.4.2 The FE modelfor analysesof generalresponse
4.4.3 The FE modelfor detailedanalyses
4.4.3.I New reinforcementdetailing
4.4.3.2Conventionalreinforcementdetailins
I
I
2
^
A
6
8
l 0
l 0
t 0
t 2
l 4
l 5
l 5
t 5
l 5
l 7
2 l
A A
24
24
) 4
. A
26
27
29
J I
J J
J J
) +
3 6
36
39

-- 7 of 100 --

4.5 Resultsof theAnalvses
4 . 5 . I G e n e r a l
4.5.2 FE analysesof generalresponse
4.5.3 DetailedFE analyses
4.5.3.I Objectivesandpreconditions
4.5.3.2New reinforcement	detailing
4.5.3.3Conventional	reinforcement	detailine
4.5.4 Comparisonsof the FE analyses
4.5.4.1Comparison	of conventional	andnew reinforcement
detailings
4.5.4.2The effectof fractureenergy
4.5.4.3Comparisonof planestressandplain strainanalyses
4.6 Discussion
4.7 Analysesof a CantileverBeam
4.1.1 General
4.1.2 The finite elementmodel
4.7.3 Resultsof theanalyses
4.7.3.1General
4.7.3.2Effectof the bond-sliprelation
4.1.3.3 Effectof the reinforcementtvpe
4.1.4 Discussion
CONCLUSIONS
5.1 General
5.2 Suggestionsfor FutureResearch
REFERENCES
APPENDIXA Drawingsof TestSpecimensin the SecondTestSeries
APPENDTXB Concretein Compressionin the FE Analyses
40
40
4 )
44
44
45
5 2
5 5
5 5
5 8
60
6 l
65
65
67
68
68
68
70
7 1
7 3
7 3
1 ^
15

-- 8 of 100 --

ABSTRACT
The reinforcementdetailingprescribedby the presentSwedishregulationsfor the designof
frame cornersin concretecivil defencesheltersis complicatedwhich makesit difficult to
carryout correctly.Therefore,a simplermethod,by which all reinforcementbarsare spliced
within the comer region,has been worked out. The aim of the study is to evaluatea new
design proposal and determine whether it is appropriateto replace the conventional
reinforcementdetailingwith the new kind.
Eight full-scaletestsof framecornerssubjectedto a negativemoment(closingof the comer)
were carriedout. The parametersvaried in the tests were the reinforcementdetailing,the
reinforcementratio, the reinforcementtype and the configurationof the reinforcementbars.
Finite element analyses,with material models basedon non-linear fracture mechanicsand
plasticity,werecarriedout for framecornerswith the new and the conventionalreinforcement
detailings.Furthermore,the effectsof the weaknessof the constructionjoint, the interaction
betweenreinforcementandconcrete,and the mechanicalpropertiesof the steelreinforcement
wereexaminedusingthis method.
The testsand analysesshowedthat the conventionaland the new reinforcementdetailingsfor
practicalpurposesare equivalentwhen using a low reinforcementratio; they indicatedthat
this is also the casewhen using a high reinforcementratio. Accordingly,this work supports
the idea that the new detailingis suitableto use insteadof the conventionalreinforcement
detailing.The analysesshowedthat the bond-sliprelationaffectsthe stiffnessof the structure
and that it also affectsthe total deformationcapacity.However,its effect on the maximum
load capacitywas found to be negligible.Furthermore,it was shown that the mechanical
propertiesof the steelreinforcementcan havea significanteffecton the deformationcapacity;
afterthe initial cracking,the weaknessof the constructionjoint has a negligibleeffecton the
structuralbehaviourof the framecomer.
Keywords:Concrete,framecorners,splicingof reinforcement,non-linearfracturemechanics,
finite elementanalysis,bond,sheltersfor civil defence.
u

-- 9 of 100 --

NOTATIONS
Roman upper caseletters
A, crosssectionareaof reinforcement
Du componentin stiffnessmatrix
E, Young'smodulusfor concrete
E, Young'smodulusfor steel
F load
I., force camed by reinforcement
Gf fractureenergy
I length
P projectionmatrix
Roman lower caseletters
c cohesion
dF, differentialquantityof force carriedby reinforcement
f(w) softeningfunction
f, compressivestrengthof concrete
f,,,ub" compressivecubestrengthof concrete( 150 x 150x 150mm)
f,.,vt compressivecylinderstrengthof concrete(@150x 300 mm)
f,u ultimate strengthof reinforcement
f,, yield strengthof reinforcement
t tensilestrengthof concrete
ft.spt,r cubesplittingstrengthof concrete( 150x 150x 150mm)
i longitudinaldirection
lbo, lengthof reinforcementbar
l"b*nt lengthof finite elementrepresentingreinforcementbar
n normaldirection
r radiusof reinforcementloop
s slip
sm meancrackspacing
.r) slip at the pointwhereyieldingis obtained
t traction(stressvectoractingon a planeor surface),tangentialdirection,time
u displacement
w crackopening
wu ultimatecrack opening
r co-ordinatealongreinforcementbarsin cornerregion
) co-ordinatealongreinforcementbarsin beamand column
N

-- 10 of 100 --

Greek letters
d stressblock factor
as scalarquantityusedto describethe Drucker-Prager	yield surface
d s scalarquantityusedto determinethe hardeningparameter
P stressblock factor,scalarquantityusedto describethe Drucker-Prageryield
surface
y ratioof ultimatestrengthto yield slrengthof the reinforcement
Tnod modifiedvalueof 1
lnt,,mt valueof l correspondingto "normalratio" steel
A incremental,	incrementof
A€^na modifiedincrementalstrain
6 displacement
8,. concretestrain
€n strainat steelhardening
€r steelstrain
e, ultimatesteelstrain
tP,r,^,or plasticstrainin the directionof uniaxialstress
,c hardeningparameter
tt factordescribingthechangein ductilityof reinforcement
n projectionvector
p rcinforcementratio
o stress
6t, oz, 6: principalstresses
oc concretestress
o, steelstress
T bond stress
! bondstrengthin frictionalphase
Tw maximumbondstrength
Ty bondstressat thepointwhereyieldingis obtained
v Poisson'sratio
0 bu diameter,internalangleof internalfriction
Qo initial angleof internalfriction
VI dilatancyangle

-- 11 of 100 --



-- 12 of 100 --

1 . 1
INTRODUCTION
Background
When a concretefranrestructureis constructed,it is usuallycastin two separatestages:first
the casting of the wall, then the casting of the slab. After the casting of the wall, the
reinforcementbars,which will laterbe bentandsplicedinto the slab,stick up into the air, see
Figure la. Accordingto the regulationsof anchoragelength and splicing methodsusedin
Boverket'sHandbookfor ConcreteStructuresBBK 94, Boverket(1994),thesebarsmay be
severalmeterslong. This type of frame cornerreinforcementdetailing can be difficult to
realiseat a building site and is complicatedto carry out correctly.Therefore,it would be an
advantageto usea simplifiedreinforcementdetailing.If all the reinforcementcould be spliced
within the comer a.reaa simplerprocedure,with lessrisk of incorrectdetailing,would be the
result,seeFigure 1b.
FigureI Schematicfigure of the constructionof a concreteframe corner using different
reinforcementdetailings:a) splicingin the slab,b) splicingwithin the cornerarea.
The present Swedish regulationsfor the design of civil defence shelters allow the
reinforcementto be splicedin the immediatevicinity of the frame corner,with partsof the
reinforcementspliceextendedinto the corner,SwedishRescueServiceAgency(1994).This
a)

-- 13 of 100 --

results in a building procedure similar to that described above (Figure 1a) with a
reinforcementdetailing thar is time consumingand quite difficult to carry out correctly.
Consequently,the SwedishRescueServiceAgencywanteda simplerreinforcementdetailing
to be usedin frame cornersin civil defenceshelters.Therefore,a new designproposal,in
which all the reinforcementbarsare splicedwithin the comerruea,was workedout. To study
the behaviourof splicingin the reinforcedframe cornersof shelters,a researchprojectwas
initiatedar the Division of ConcreteStructuresat ChalmersUniversityof Technology,see
P l o s( 1 9 9 4 a ,b ) .
t.2 Aim of the Study
The aim of thisresearchprojectis to evaluatea new designproposalandto determinewhether
it is appropriateto replacethe conventionalreinforcementdetailingwith the new kind. To do
this, it is necessaryto establishthe servicecriterionthat the final structuremust fulfil. The
load bearingcapacityis of greatimportanceand for safetyreasonsit is also importantthat a
concretestructureshowsa ductilebehaviourthat allowsredistributionof forcesso thata total
collapseof the structurecanbe avoided.To obtainthis, the structuremustbe capableof large
deformationsbeforefinal failure.Especiallyin a civil defenceshelter,suchductilebehaviour
is of greatimportancein enablingthe structureto withstandsevereimpact loadingwithout
collapse.The servicecriterionset up by the SwedishRescueServiceAgencyis that the new
reinforcementdetailingmust withstandloadingat leastas well as the conventionaldetailing
so thata safeandductilestructureis obtained.
To determinewhetherthe servicecriterionis fulfilled, a betterunderstandingof the behaviour
of frame cornersunderloadingto failure and of the structuralresponsein the cornerareais
required.Accordingly,two test-series,i.e. a total of eight full-scaletest specimenssubjected
to negative moment (closing of the corner), were carried out, Plos (1994a, b) and
Johansson(1995).The parametersvaried in the testswere the reinforcementdetailing,the
reinforcementratio,the reinforcementtype andthe configurationof the reinforcementbars.
To study the structuralbehaviourof the frame corner more thoroughly,the finite element
methodwas used.Four of the test specimenswere analysedusing materialmodelsbasedon
non-linearfracturemechanicsand plasticity.By usingthis approach,the progressivecracking
and the strainand stressstatescan be followed underincreasedload; which allows a better
understandingof the structuralbehaviourof the framecorner.Onceresultsobtainedusingthe
finite elementmodelshavebeenconfirmedby testresults,the finite elementmethodprovides
a valuabletool for further studies.Accordingly,in combinationwith experiments,finite
element analysessignificantly increasethe feasibility of carrying out parametricstudies.In
addition to the differencein the reinforcementdetailing, the effects that different parameters
haveon the load and deformationcapacityof the frame corner,were studiedfor framecomers
with a low reinforcementratio,usingthe non-linearfinite elementmethod.The parametersof
interestwere:
. the weaknessof theconstructionjoint betweenthe first andsecondcastings,
r the bond-sliprelationbetweenthe reinforcementbarsand the sunoundingconcrete,and
r the mechanicalpropertiesof the reinforcingsteelbars.

-- 14 of 100 --

Furthermore,the consequencesof incorrectpositioningof the reinforcementloops in the new
reinforcementdetailing were examined.Detailedanalysesof the effect of the pararneterslisted
above have not been carried out for frame corners with a high reinforcement ratio.
Due to numerical difficulties, it was not possible to study the effect of differencesin the
mechanical properties of the reinforcing steel bars using finite element models of the frame
corner. lnstead,a simpler model of a cantilever beam was used. This model was then also
used to study more thoroughly the effect of drfferent bond-slip relations for structures with
both high and low amounts of reinforcement.
A limitation of the study carried out so far in this project is that all tests and analyseshave
been carried out for static loads. However, a civil defence shelter must withstand impulse
loading such as explosronsand falling buildings. Consequently,the behaviour of the new
reinforcementdetailingwhen subjectedto impulse loading needsto be studied.

-- 15 of 100 --

)
2.r
LITERATURE SURVEY
Frame Corners
The bearing capacity of a frame structure dependson the strength of its independentstructural
members. To obtain a ductile behaviour in the structure. considerable redistributions of forces
and deformationsmust be possible.The capacityfor this relies heavily on the detailingof the
joint connections;i.e., the connectionsbetween different members (e.g. beams and columns)
are of great importance for a sound structural behaviour. Thus, a joint connection must be at
least as strong as the structural members connected to it and show a ductile behaviour in the
ultimate limit state. ln this section, studies of different reinforcementdetailings in frame
corners are briefly presented; the term "frame corner" is used to describe a corner joint
connecting two structural members, such as a beam and a column or a slab and a wall, at an
angle of 90o.
Concrete frame comers can be separatedinto two principal types: those subjectedto a positive
moment (opening of the corner) and those subjected to a negative moment (closing of the
corner), see Figure 2. lt has been found by testing that the reinforcement detailing in frame
corners subjectedto positive moment is more sensitive than that in frame corners subjectedto
negativemoment, see Mayfield et al. (1911), Nilsson and l-osberg (1976); consequently,the
main effort of experimental studies has been concentratedon positive moment. Extensive
experimental studies on frame corners subjectedto positive moment have been conducted by
several researchers,see Swann (1969), Mayfield er al. t.1972), Nilsson (1973), Skettrup
et al. (1985). Many different reinforcement detailings with different reinforcement ratios have
been investigated; the experimental work done by Nilsson has resulted in detailing
recommendations,Nilsson (1973),Nilsson and Losberg (1976).
Some studies of frame corners subjected to negative moment have also been reported, see
Swann (1969), Mayfield er al. (1971), Yuan et al. (1982),Znuzou and Haldane (1993),
P l o s ( 1 9 9 4 b ) a n d L u o e t a l . ( 1 9 9 4 ) . A l i t e r a t u r e s u r v e y o f w o r k d o n e , b e f o r e l 9 T 3 , o n c o r n e r s
and joints subjected to positive and negative moment can be found in Nilsson (1973).
However, only tests on frame corners sublectedto a negative moment and with reinforcement
detailings similar to that examined in this study are mentioned here, see Table l. The work of
Plos is of special interest since it has functioned as a basis for the study presented in this
thesis.
b )	a )
l=/
Figure2 Frame corner subjected
bendingmoment.
J
to: a) a positive bending moment and b) a negative

-- 16 of 100 --

TableI Test resultson frame comers with reinforcementdetailingssimilar to that
presentedin this study.Efficiencyis definedas the ultimateloadobservedin the
testdividedby theestimatedloadcapacity.
Researcher Researcher's
reference
number
Detailing Reinforce-
mentratio
t % l
Efficiency
S w a n n( 1 9 6 9 ) r03
104
1 0 6
conventional
new
new
3 . 0 0.78
0.76
0.80
Mayfield et al. (1971)l t - 3
I A
) - z
4A-2
2-3
a A
conventional
conventional
conventional
conventional
new
new
0.66 r . 2 5
l . J I
t . 2 7
1 . 3 4
0.94
t . t - t
Luo et al. (199q2 CJSa-4
CJSa-6
CJSb-I
new
new
new
r . 3 9t r . 2 3
t.04I 0.82
t . 3 9/ 1 . 2 3
r.00
t . 2 7
1 . 0 9
Lightweightconcreteused
'Differentreinforcementratiosin column(first value)andbeam(secondvalue)
The framecornerspecimenstestedby Swann(1969)had a very high reinforcementratio.Due
to bearingfailureof the concretewithin the corner,all of his specimensfailedat a valuebelow
estimatedstrength.However,Swannconcludedthata largerefficiencyratiocouldprobablybe
attainedby usinga lower reinforcementratio or barsof smallerdimensions(Swannusedbars
l9 mm in diameter).
In thetestscarriedout by Mayfieldet al. (1971),light weightconcrerewasused.In all but one
of thetestspecimensthe efficiencyratio exceededunity.Theyconcludedthat in framecorners
subjectedto a negativemomentthe "cornerdetailingis not important".
All specimensreacheda ioadlevelequalto or higherthanestimatedin the testscarriedout by
Luo et al. (1994). It was concludedthat the reinforcementratio togerherwith the yield
strengthof the steel and the compressiveconcretestrengthhad a significanteffect on the
modeof failure.
Sectionswith splicedreinforcementbars are possiblezonesof weakness;therefore,it is a
commonpracticeto splicethe barswherethe momentsareas small as possible.In thecunent

-- 17 of 100 --

practicefor designof frame structures,the structuraimembersare usuallyrepresentedwith
their systemlines.Thus, when the assumptionof beamtheoryis used,the largestforcesare
obtainedin the joints; this is the reasonwhy the reinforcementmust not be splicedin joint
connections,accordingto Boverket'sHandbook for ConcreteStructures,BBK 94, see
Boverket(1994).However,the assumptionof beamtheoryis not applicablein a disturbed
regionsuchas a cornerjoint, Collinsand Mitchell (1991).ln a framecomer subjectedto
negativemoment,the tensileforcesin the reinforcementbarsare,prior to crackingwithin the
corner,very low comparedwith that in the membersconnectingthe joint wherethe plastic
hingesdevelop.Hence.it shouldbe appropriateto splicethe reinforcementbars within the
corner region.To study this alternative,two test serieshave been conductedat Chalmers
Universityof Technology,seePlos (1994b),It was concludedin both staticand fatiguetests
(reinforcementratio = 0.56 Vo),that splicingof the reinforcementwithin the cornerareahad
no significanteffect of the behaviourof frame cornerssubjectedto negativemoment.There
were no indicationsof anchoragefailure along the lap lengths.Detailed finite element
analysesusingnon-linearfracturemechanicshavesincebeencarriedout to furtherstudythe
static tests; the analysessupportedthe idea that it would be appropriateto splice the
reinforcementwithin the cornerarea,seePIos(1995),LundgrenandPlos(1996).Anothertest
seriesof reinforcementdetailingin frame cornersfor civil defencesheltershas also been
carriedout, see Plos (1994a,b). However,since the work is closely relatedto the study
presentedin this thesis,it is not discussedhere;it is insteadtreatedin the Sections3 and 4'
whereit is referredto asthe first testseries.
The constantthreatof earthquakesin someregionsof the world haveled to the dedicationof
significanteffort, in the threepast decades,to the study of structuressubjectedto seismic
loading.The high risk of loss of lives in earthquakesmakesit most importantto obtain a
ductilebehaviourin structuressubjectedto this kind of loading.Consequently,the behaviour
of the connectionsbetweendifferentpartsof a stntcture(e.g.beamsand columns)is crucial,
sinceit is herethat the largestforcesoften occur.Therefore,severalresearchershavebeen
studying beam-columnjoint connectiOnssubjectedto seismic loading, e.g. Hanson and
Connor(1967),Paulayet al. (1918),Tsonoset aI. (\991), Robertsonand Dunani (1992),
Cheunget aI. (1993),Restrepoet al. (1995).A parametricinvestigationof thejoint mechanics
for testscarriedout by researchersin the USA, Japanand New Zealand,is presentedin
Bonacciand Pantazopoulou(1993).The behaviourof structuressubjectedto seismicloading
is not dealtwith in thisthesis.
) ) Fracture Mechanicsfor Concrete
The fracturemechanicsmodelscommonly used for concreteoriginatefrom studiesof the
initiationandpropagationof a crackin a uniaxialconcretetensiletest.In a concretestructure,
crackingoccursmainly perpendicularto the maximumtensilestresswhenthe tensilestrength
of concreteis reached.In Figure3 the failure developmentof a crack in a concretespecimen
subjectedto increasingtensiledeformationis sketched;a t)?ical mean stress-displacement
relationfor such a test specimenis shown in Figure 4. When the specimenis loadedin
tension,microcracksform at local weak points (Figure3b) and under increasingload these
microcracksbecome connectedto each other and are localised to a fracture zone at the
weakestsection(Figure 3c). After the maximum load is reached,the tensile strengthin the
fracture zone decreaseswith increasing deformation, while the strain outside the zone
decreases(Figure 3d). Eventually,a true crack that cannottransmitany tensilestressesis

-- 18 of 100 --

formedin the zone (Figure3e). The concretearoundthe formedcrack,which has never
reachedthetensilestrength,will thenunloadanda redistribution	of stressesanddeformations
in the structuretakesplace.
G r = 0 o r < f ,
1 1 1 1 1
C, =.fr
( w = 0 )
l t t l t
a)
, ' J J J J
b)
J J J J T
c )
d . = 0
(w > w,)
/-r------1 *T:-----l
t l t * - t t . - - - l
t l t - - i t - - i
L | | ( t + e . ) r l - - - l ( t + e . ) r l - - t = lt l t t t - l
l t t - - l t * - l
l_L---__--_) l_' t i_L____)
6, = f(w,)
( 0 < w c x . ' , )
t t t 1 1
f-l -*:l l-- -l
t--tl--l
( l - e , ) L + r ' l - . - i ( l + e ) L t x ] { J - , , ,	- >---_
l * - r t - - - l
l t - t t l
i - t ' t l - - l
v v V v . ,
-
d) e)
Figure3 Stagesin the formationof a crack in a concretespecimensubjectedto increasing
tensiledeformation.
6.
-T-
A L € c w u w
Figure4 Mean stress-displacement	relation for a uniaxial tensile test specimen.The
displacementis separatedinto a stress-strainrelationand a stress-crackopening
relation.The areaunderthe softeningcuwef(w)representsthe fractureenerS)Cp.
fo'
- Unloadingre
at maxlmum
I
l i
li,
I
-6, = f(w)
w u w

-- 19 of 100 --

Once a fracture zone has formed, the stress transferred through the zone depends upon the
crack opening w'and can be defined as o, - f(w), see Figure 4. Here,f(w1is a function that
describes the softening behaviour of the pure concrete. The area under the softening curve,
/w), represents the energy release when concrete cracks and is, according to Hillerborg
et al. (1916), the mean energy per unit area of a formed crack. This energy is called the
fracture energy and is denoted Gr. Fracture mechanics for concrete and concrete structuresin
general is treatedby Elfgren et al. (1989).
In finite element modelling of cracks in concrete, there are two common concepts for treating
cracks: the discrete crack approach and the smeared crack approach. In this section, only the
principal differences in the two approachesare mentioned. More thorough descriptions of the
discrete and the smeared crack approacheshave been published by for instance Rots (1988)
and Plos (1995). A review ofprevious studiesofconcrete structuresusing the finite element
method can be found in Kwak and Filippou ( 1990).
In the discrete crack approach, the crack is modelled as a geometrical discontrnuity and
separateelements are used to simulate the cracks and the material between the cracks. ln the
fictitious crack model presentedby Hillerborg et al. (1916), the fracture zone is modelled as a
fictitious crack of initial width equal to z.ero.The behaviour of the crack is then describedby a
stress-crackopening relation. The crack band model of Bazant and Oh (1983) is a similar
approach;here the fracture zone is modelled with a band of a given width. However, in this
model, the localiseddeformationsare smearedout within the band, resultingin a responsethat
can be describedby a stress-strainrelation. Thus. the continuum of strainsand stressesare
preserved in the model. Since separate elements are used to model a crack in the discrete
crack approach, the possible crack path must be assumed in advance and the finite element
mesh arranged so that the crack path follows the element boundaries. This is a serlous
drawback of the approach: a great amount of work is required to establish the FE mesh since
the user has to decide where and how the cracks may arise. It also imposes a limitation on the
spontaneouscrack pattem.
According to Rots (1988), the smeared crack approach is the counterpart ofthe discretecrack
approach. Here, the localised non-lineanty of the crack is "smeared" out over the finite
element, i.e. all the matenal deformations, including the crack, is considered in the same
element. Accordingly, a cracked solid is modelled as a continuum allowing the cracked
material to be described with a stress-strainrelation. As this means that the crack pattem need
not be taken into account in advance, the smeared crack approach is a more attractive
procedurethan the discrete crack approach.
Interaction betweenSteeland Concrete
In a compositematerialsuchas reinforcedconcrete,the interactionbetweenthe reinforcement
bars and the sunoundingconcreteis of greatimportance.The forcestransmittedbetweena
deformedreinforcementbar and the concretecan be describedby a relationbetweenshear
stresses,alsoknown as bond stresses,and the local displacement(slip) of the bar. According
to Lutz and Gergely (1967), bond is made up of three components:chemicaladhesion,
friction, and the mechanicalinteractionbetweenconcreteand steel.However,accordingto
Gambarovaet al. (1989), adhesionand friction are quickly lost when a bar is loadedin
tension;consequently,the bond stressesfor deformedbarsare transferredmainly by contact
2.3

-- 20 of 100 --

D,,l[Ar,I
," ll^.I,,,11^,.1
[',-l[','I Ar,l= | D,,
Lo,,	l Lo,,
(2)	[o,,'l=	[r,, ,,,'l[*,.l
LAr,l 14, 4,.lLAr,.j
betweenthe reinforcementribs andthe concrete.The differencein strainof steelandconcrete
causesa reinforcementbar to slip in relation to the surroundingconcrete.According to
Tepfers( I 973),the slip of the reinforcementbar causesboth shearstressesalongthe bar and
stressesnormalto the meansurface.seeFigure5; the normalstressesgeneratesplittingforces
radiatingout from the bal.
An interfacemodel can be used to describethe constitutiverelation in terms of tractions
actingon the meancontactsurfaceand of localiseddeformationsthat occurin additionto the
overall strainsin the concreteclosestto the reinforcementbar. The generalincremental
traction-displacement	relationfor the interfacecanbe expressedas
D , ,
D,,
D.,
( l )
whereindex / denoteslongitudinaldirection,indexn normaldirection,and index , tangential
directionof the interfacewhich is orientedalongthe meansurfaceof the reinforcementbar.
The tractionand the slip in the tangentialdirectionare often negligible,which resultsin an
approximaterelationaccordingto equation(2). Variousbond-sliprelations,D71in equations
(1) and(2), basedon work carriedout by Eligehausene/ a/. (1983),can be found in the CEB-
FIP ModelCode.CEB (1993).
Researchon the effectof bond in reinforcedconcreteusingnon-linearfracturemechanicshas
been carried out by, among others, Rots (1988), Kwak and Filippou (1990), and
Noghabai( 1995);a reviewof theuseof fracturemechanicsin modellingbondcanbe foundin
Noghabai. For a more thorough description of the bond concept, see CEB (1981),
Engstrcim(1992)andMagnusson(1997).
a)
<_
F,
Figure5 a) Contactstresseson a deformedbar embeddedin concrete.b) Representation
of thesestressesbv tractioncomDonentson the meancontactsurface.
b )

-- 21 of 100 --

3
3.1
3 . 1 . 1
EXPERIMENTS
Test Specimens
Dimensions	andreinforcement
To gain a better understandingof the behaviour of frame corners under loading to failure, two
test series, each containing of four full-scale specimens, were carried out. [n this thesis the
emphasis is on the second test series;more thorough information about the first test series can
be found in Plos (1994a,b). The dimensionsoithe specimensin the secondtest serieswere
the same as in the test series carried out by Plos, and are shown in Figure 6. The test
specimens were reinforced with deformed bars of reinforcement type K500; this type has
higher strength but lower ductility than the Ks 40 S reinforcement used by Plos, see Figure 7.
All four specimenswere cast with the new reinforcement detaiiing shown in Figure 8; that is
all reinforcement bars were spliced within the frame corners. This was accomplished by using
reinforcement loops. The legs of the loops were spliced to the main reinforcement in both the
column and the beam. To compensate for the risk of lower structural strength at the frame
corner due to the construction joint, the reinforcement ratio of the loops was increased by
25 Vo, in accordance with the Swedish Shelter Regulations, Swedish Rescue Service
Agency (1994). However, forthe specimenswith new detailing testedby Plos, the amount of
reinforcement was unequal in the sections adjacent to the frame corner, see Figure 8 and
Table 2.
2150
2 1 5 0I
i l_J,*
A-A
Construction
joint
Figure6 Dimensionsof the full scalespecimensusedin the two testseries.
f---..-l
I*l
1 0

-- 22 of 100 --

Tensileforce [kN]
l 50-
Figure7 Mechanicalpropertiesof 16 mm
Ks 40 S usedin the first testseries.
testsenes.
150 200
Strain [0-3]
diameter reinforcementbars of two types:
Plos (1994a,b), and K500 usedin the second
0.25A, 1 . 2 5A ,
Figure8 Detailingof the reinforcementaccordingto: a) the conventionalmethod,and b)
the new altemative.
Two of the specimens(denoted RV5 and RV6) had a large amount of longitudinal
reinforcement,5 Ql6, approximatelyequal to the maximum allowed reinforcementratio in
agreementwith the SwedishShelterRegulations.The othertwo specimens(denotedRV7 and
RV8) had a longitudinal reinforcementamount of 3 pl0, approximatelyequal to the
correspondingminimum allowed reinforcementratio. The same amount of longitudinal
reinforcementwas used on both the compressiveand tensile sides of the beam and the
column,seeFigure8 andTable2. For eachreinforcementratio.one specimenwas reinforced
with the splicedreinforcementloopsplacedin contactwith eachother(RV5 and RV7); in the
other specimens,the loops were placedwith spacebetweeneachother (RV6 and RV8), see
Figure9. Drawingsof the specimensin the secondtest seriesis shownin AppendixA; for
furtherinformation,seeJohansson(1995).
b)	a)
l t
A, (RV2 andRV4)
1.25A, (RV5-RV8)

-- 23 of 100 --

\umber of rcinforcement bars
l x E
. i	
- \ o / _ \ 5
2 r 5
- i
_ \ + / t \ - ' r
l \ +
_ \ +
T a b l e l
T c s t
spc-cinrcn
B a r
drarnctcr
f n r n r j
t t )
t o
t 0
t 0
t) pc
t) pe
bnrs
Reinforcenrent amount and configurations for the test \peclmen\. Thc- sanre
n u m b e r o l r e i n f o r c e m e n tb a r s r i a s p l a c e c io n b o t h t h e c o m p r e s s r r ca n d t h e t e n s i l e
s r d e so f t h c ' b e a r na n d t h e c o l u m n . T h e s p e c i n r e n sr e s r e db r p l o : r l ! 1 9 - h . b r a i c
r n c l u d e d .
r n l r a m e c o f n c r
t l o c t p : )
C o n f i g u r a t r o no 1 '
r c r n t o r c c n r c n tb t r :
t n l h c s t l r c c .
m c o l i l a c t
s p a c e b e t r , ,e c n
i l ] c 0 n t a c t
s p a c c b e l r r ' c e n
s r l t J 9 - l a .h )
t h e h e a n r a n d t h e c o l u n r n . s e e F i g L r r cI
Rcrnt-rtrcc'mcn1
d c t a i l i n s
R \ I
R\ ' l
RV3 I
R V . 1 '
R V 5
R V 6 :
R V 7 . ]
R V S .
' R c r n l ' o l c e t l e n l
t R a i n i .' ' a e , t t e r t
'l'hc nurnberof
bearnand
c(llu lI n
l r ( r
l r 6
K s ' 1 0 S u s c - t l .P l r
K . i ( X )u s e d
\\'erenot equal in
ltc \\
nc\\
llc\\
l t c \ \
F i g u r e9 Specimens r',ith a large amount of reinforcer.nent{RV-5 and RV6 t. Thc
r e i n f o r c e n r e n tl o o p s u e r e s p l i c e dj n c o n t e c t\ \ l t h e 3 c h o t h e r ( l e f t l o r u ' i t h s p a c e
bet',r'eenthc loops iright ).
3.1.2 N'Iaterialproperties
T h e s p e c i m e n s\ \ ' e r ec a s t u i t h t h e c o l u m n i n a v e r t i c a lp o s i t i o n .s e e F i g u r e 6 . T o o b t a i n I
c o n s t r u c t l o nl o i n t . t h c i r l n t e c o l u m n s\ \ e r e c a s tf i r s t a n d l o u r d a y s l a t e rt h c b e a r n sa n t l c o r r r e r .
. l o l n t s .$ ' e r ec a s t .T h e s p e c i m e n s* e r e m a d ei n p a r r s :t h e t \ \ ' o s p e c i m e n st h a t u o u l i i b e d i r e c t l t
c o m p a r e du r t h e a c ho t h e r \ \ ' e r ec a s t a t t h e s a m et i m e a n d u i t h c ( ) n c r . - t ei r r r r nt h e s a r n c ' b l t t c h .
C o n c r e t eq u a l i t r K - 1 0 .a c c o r d i n st o B o r e r k e t . H a n d b o o kf r t r c o n c r e t cS t r u c t u r e \ .B B K 9 - 1 .: c , r
B o r " e r k e t( 1 9 9 ' 1 ) .u i t h : t t a r g e tc r l i n d e r c o m p r e s s i r es t r e n c t ho i 3 0 \ 1 P a t a s c h o s e n .F g r t h c -
12

-- 24 of 100 --

specimensin the secondtest serieswith low reinforcementratio, a differentconcretequality
wasdeliveredfor thecastingof the beams.This qualityexhibiteda somewhathighersplitting
and compressivestrengthbut a lower value of Young'smodulusof elasticity.However,the
fractureenergywas only abouthalf that of the ordinaryconcreteof qualityK30. The strength
of the concrete used was determined by tests on cubes ( 150 mm) and cylinders
(0150x 300 mm), accordingto Swedishstandard,BST Byggstandardiseringen	(1987),andis
presentedin Table3. The strengthof the concretewasdeterminedat the ageof 28 daysandon
the day that the specimenswere tested.The fractureenergywas determinedaccordingto the
recommendationsof RILEM (1985) at a concreteage of between29 and 32 days. The
mechanicalpropertiesof the reinforcementarepresentedin Figure 10.
Table3 The strengthof the concreteused in the test specimens(mean value of three
specimens).
Not determined for the concrete used in the soecimensin the first test series
-l tu
f,,
o, [MPa]
En
Figure 10
e, e,lVal
Reinforce-
menttype
f'u
IMPa]
f'u
IMPa]
En
[vo]
cu
[vo]
E,
lGPal
dl6 Ks40S
pl0 Ks40S
016Ks00
010Ks00
473
5M
561
573
652
o / )
6s2
615
J . J
3 . 5
2 ; 7
2 . 8
I t . 5
14.5
10.0
12.0
2t0
a t A
1 8 9
1 9 1
Mechanicalprop€rtiesof the reinforcementbars (mean value of five specimens).
The valuesof Young'smodulusand the strengthof the steelhavebeencalculated
to correspondto a crosssectionareaof 201 mm2 and 78.5 *rnt for the @16and
@10bars,respectively.
l 3
Test
specimen
Object 28 days Testingday Fracture
Energyr
lN/ml
f
J t.split
IMPa
f" c . c u D e
lMPa
f ,,qr
lMPa
E r t
lGPal
Age
ldaysl
f
" t , s p t t l
lMPa
f" c.cuoe
IMPa
f , . r y t
lMPa
E 1c
lGPal
R V I , R V 2
RV3, RV4
column
beam
column
beam
J . U
3 . 6
3 4 . 8
39.4
23.2
29.'7
J Z
2 8
5 8
5 6
J . l
3 . 6
J . U
3 . 6
34.9
39.4
29.1
3 9 . 8
23.1
29.7
1 9 . 1
28.1
RV5,RV6
RV7, RV8
column
beam
column
beam
) . 2
J . l
J . Z
J . +
J I , J
35.6
36.6
40.1
30.0
29.8
/ - t . )
34.0
2 6 . 6
24.6
z + . J
23.s
43
3 9
34
30
3 . 5
i . t
3 . 2
3 . 5
39.9
36.6
J I . J
4 1 . 6
3 1 . 3
30.6
21.8
3 3 . 8
24.6
23.5
26.9
25.0
l 3 l
1 1 0
1 0 8
66

-- 25 of 100 --

3.2 TestSet-upand TestProcedure
The frame cornerspecimenswere testedin a verticaltest rig, seeFigure I l. The specimens
were braced in the horizontal direction at the loading and support points, allowing
displacementsonly along the loadingline. The load was appliedby a hydraulicjack and the
magnitudeof the load was measuredby a loadcell. The total deflectionalongthe loadingline
was measuredby electronicdisplacementtransducers.Straingaugeswereusedto measurethe
strainin the reinforcementloops(length6 mm) as well as on the concrete(length60 mm) at
theinsideof theframecorner,seeFigure12.
The load was initially appliedin load incrementsof 5 kN for the specimenswith the low
reinforcementratio and in load incrementsof l0 kN for the specimenswith the high
reinforcementratio. To make it easierto follow the behaviourof the frame cornernearthe
maximum load, the load incrementwas halved when a non-linearstructuralresponsewas
observed(at 25 kN and 120 kN for the specimenswith low and high reinforcementratios,
respectively).When large time dependentdeformationsstartedto occur,the load level was
keptconstantuntil thedisplacement	waslessthan0.01mm/s.
Hydraulic jack
[.oad cell ;Displacement
Pendulum brace -. transducer
Construction
loint
FigureI I Testset-upof framecornerspecimens.
150 200 200
aw- l | 2
l50-lP! c = straingaugeon
200 lT lf- rernforcement
200
-[ lf - = Straingaugeon
.-p ll .oncrere
_u_\__r
Figure12 Positionof straingaugeson reinforcementandon concrete.
1 4

-- 26 of 100 --

3.3
3.3.1
Failure Development
Generalobservations
During the initial loading, two pnmary cracks were observedclose to the frame corner in all
the specimens,one in each section adjacentto the corner, see Figure 13. In all specimens
exceptRV5, the first crack was observedat the construction.yoint.When yielding was reached
in the reinibrcement bars, the deformations were concentrated to the frame comer region and
plastic hingesdevelopedon both sidesof the corner for all specimens.AII specimensshowed
ductile behaviour.
Construction
.yoint
,, Crack section II
Figure13 Sectionswhere the two primary cracks were first observedduring the initial
loading.
3.3.2 Specimenswith high reinforcementratio
For specimensRV5 and RV6, very few crackswere observedoutsidethe immediatevicinity
of the framecorner.The behaviourof the two specimenswas similar and the maximumload
wasdeterminedfor both specimensby spallingof the concretesidecoverin the framecorner,
seeFigure14.Accordingto Boverket'sHandbookfor concreteStructures,BBK 94, Boverket
(1994),this failure should not have occuredfor the combinationof bar diameter,bending
radiusof the reinforcementloopsandconcretecoverusedin the specimens.That the concrete
side cover spalled off anyway indicatesthat the recommendationsin BBK 94 are not
applicablefor this kind of reinforcementdetailing.Before the spallingoccurred,the largest
cracksfor bothspecimenswereobservedin cracksectionII (accordingto Figure13).
Both specimensobtained considerableplastic rotation and the maximum load was
approximatelythe same.SpecimenRV5 still showedductilebehaviourwhenthe testhadto be
stoppedbecauseof the obliquityof the hydraulicjack. SpecimenRV6 wasdeformeduntil two
of the reinforcementloops were tom off.
3.3.3 Specimenswith low reinforcementratio
ln testsof the specimenswith low reinforcementratio, crackswere formedwith a spacingof
approximately0.2 metersbetweenthemin boththe beamandthe column.The two specimens
behavedsimilarly and the maximum load was the same.The cracks that led to failure
l 5

-- 27 of 100 --

appeared in crack section II for specimen RV7. For specimen RVE. the decisive crack
a p p e a r e d i n s e c t i o n l . a l o n g t h e c o n s t r u c t i o n j o r n t . s e e F i g u r e	1 - 5 . F o r h o t h s p e c i m e n s . r h e f i r s t
c r a c k w a s o b s e r v e di n t h e c o n s t r u c t r o nj o i n t a t a l o a d l e v e l l o * e r t h a n e x p e c t e dr a t a b o u t
l 0 k \ c o r n p a r e dt o a n e r p e c t e dl o a d o f a b o u t 2 0 k \ t . T h i s i n d i c a t e st h a t t h e t e n s t l e\ t r e n g t h
a c r o s st h e c o n s t m c t i o nj o i n t u ' a s l o w e r t h a n i n t h e c o n c r e t ec l o s e t o r t . r v h i c h r e s u l t c di n a
l o c a l i s e du e a k n e s si n t h e c o l u m n a d i a c e n tt o t h e c o r l c r a r e a .
For the specimens with lou reinforcement ratio the marrmum load u'as reache{ aftcr.
c 0 n s t d e r a b l ep l a s t r c r o t a t r o n i n t h e \ e c t i o n s a d i a c e n tI o t h e f r a l l e c o r n e r . T h e n t i t x i r n u n t
( l c l i ) l r l l i l l l ( ) l lt i l r h t l t h t h c s e s p e c r r l c l ) s\ \ l r s i i r n r t e d b r r u p t u r r ( ) t l h c r c i r ) 1 ' ( ) f c c t l c n li l l l c c
r r - r n l r ) r c c l r c n Il o o p si n e a c hs p e c i n t e n\ \ e r e t o r n o f f ) .
F i g u r el ' 1 S p e c i r n e n s	R \ ' 5 ( l e i r )a n dR V 6 l r i g h t t a tr h ee n do i ' r h er e s r
F i g u r el - 5 S p e c i r n e n s	R V 7 ( l e i r )a n dR V 8 r r i s h t r a tr h ee n d( ) 1 ' t h er e s r
t 6

-- 28 of 100 --

3.4 TestResults
The structuralbehaviourof the framecomer specimensis describedby the load-displacement
relationand the distributionof tensileforcesalongthe reinforcementbarsin the corner.The
relationsbetweenloadand verticaldisplacementfor testspecimensRV5 to RV8 areshownin
Figuresl6 and 17.Exceptfor RV5, all specimenshad someof their reinforcementbarstorn
off. A plateaucan be seenclearlyin the load-displacement	curvesfor the specimenswith the
low reinforcementratio.Due to spallingof the concreteside cover,this was not the casefor
the specimenswith high reinforcementratio. The load-displacementrelations for test
specimensRVI to RV4, presentedby Plos(1994a,b), areshownin Figure18.Thatthe load
capacitiesobtainedfor the specimenswith conventionaldetailingwere higherthan thosefbr
the specimenswith the new detailingis explainedby the unequalcapacitiesof the sections
adjacentto the cornerwith the new detailing,Figure8 and Table 2. The maximumload and
the maximumdisplacementat the end of the testareshownfor all specimensin Table4.
I-,oad,F [kN] + SpecimenRV5
+ SpecimenRV6
Displacement,6[mm]
Figure16 had-displacementrelationsfor the test specimenswith high reinforcementratio.
In both specimens,the maximumload capacitywas limited due to spallingof the
sideconcretecoverin the framecomer.
t 8 0
1 6 0
140
T
T
+
l t n +
r00t
8 0 t
60 1.
40
20
200	r 5 0	t00	50
t 1

-- 29 of 100 --

Load,F [kN]
f u -
- speclmen Kv /
+ Specimen RV8
._.^.r+.*- '.--' SpecimenRV2
4 ' -j Specimen RV3
40
30
20
l 0
200 250
Displacement,	6 [mm]
Figurel7 l,oad-displacement	relationsfor the test specimenswith low reinforcementratio.
Both specimenshad their maximum displacementlimited by ruptureof the
reinforcementbars.
Load, F [kN] ' Specimen RV I
I 8 0 -
r 6 0 - I
140- r
120. ! | 'J-
100. ,,f
t
I
200 250
Displacement,	6 [mm]
Figure18 l,oad-displacementrelationsfor the frame corner specimensof the test series
carriedout by Plos(1994a,b).
f f i + r - - - - . . . . " - S p e c i m e n R - V 4 -
lr	^ t u='4t/
	a
/
1 5 0
fl
80- I
a
O U * r
i
\.
L	a0-! u-t"rrt*' i3$43;.=.-.-.--.c - € trG.'-]?.+.n
1 8

-- 30 of 100 --

Table4 Testresultsfor theeightspecimens.	Resultsfor specimensRVI to RV4 havebeen
takenfrom Plos( 1994a.b).
'Unequalamountof reinforcementin beamandcolumn,seeFigure8 andTable2
The distributionof tensileforcesalongthe reinforcementbarsin the framecornerfor different
load levelsis shownin Figuresl9 and 20; the force-curvesoverlapin the middleof the frame
cornerwherethe reinforcementbars were overlapped.The tensileforce varied in a similar
way for all four test specimens.The highestvaluesof the tensileforceswere reachedin the
crosssectionsadjacentto the corners(sectionsI and tr accordingto Figure l3). For all test
specimens,yielding was initiatedin the reinforcementbars beforethe maximum load was
reached.Measuredstrain(meanvalueover a lengthof 60 mm) in the concreteat the insideof
the framecornerneverexceeded2.5 10-'and2.0.10-'for the specimenswith high and low
reinforcementratios,respectively.
19
Reinforce-
, 1
mentratlo-
[vo)
Maximum
load
lkNl
Displacement
at maxlmum
load
Maximum
displacement
l m m l
Reinforce-
mentratior
Lv"l
R V 1
RV2
RV3
RV4
0 . 7 5
0 . 1 9
1.00
0.75/ 1.003
u . l 5
0 . 1 9/ 0 . 2 3l
6 l
9 8
{ <
93
1 6 5
1 6 5
239
144
147
1 5 0
4 2
244
236
225
t67
RV5
RV6
RV7
RV8
0.63
0 . 1 4
0 . 8 8
0 . 1 9
'Reinforcementratioin beam,/column
tReinforcementratioin corner(loops)

-- 31 of 100 --

Tensileforce[kN]
120-
100r
8 0 r
0 r
0
Tensileforce[kNl
1 2 0 .
100l
80 I
60 t ,.'
'"" ""'
40 r.''
:"
20r-- '
/ ^ \ . ]
SpecimenRV5
- . - F = 1 4 7k N , 6 = 2 9 m m
+ f = l 3 l k N , 6 = 2 0 m m
+ F = 1 0 0 k N , 6 = 1 2 m m
* F = 6 0 k N . 5 = 5 m m
! _ \
l ---\ \	_\ -\
,/
	----- 1
/ ?
/
a,, ,/,^"---_r-.
r000
Strain gauge on
reinforcement
200 1200 1400
Position	x [mm]
SpecimenRV6
' F = 1 5 0 k N , 6 = 3 3 m m
+ F = 1 3 0k N , 6 = 2 5 m m
' - F = 1 0 0k N , 6 = 1 5m m
- F = 6 0 k N , 6 = 7 m m
Strain gauge on
reinforcement
1000 1200 1400
Position	x [mm]
Figurel9 Distributionof tensileforcesalongthe reinforcementbarsin the framecornerat
differentloadlevelsfor thesoecimens	with hish reinforcement	ratio.
0 + - - -
0 200 400 800	600
20

-- 32 of 100 --

Tensileforce[kN]
) u -
SpecimenRV7
-"- F = 42 kN, 6= 68 mm
+ p = 4 0 k N , 6 = 2 8 m m
.\ -'-" + F = 30 kN, d= 12mm
\ " t . . .
i * F = 2 o k N , 6 = 4 m m
\	L \ \
---\ \ '\
-\.'\i'
./t-.t.-..------. x
, \ :
\
\
*-'
0r --- - c = Strain gauge on
1000 1200 1400 reinforcement
Positionx [mm]
SpecimenRV8
" F = 4 2 k N , 6 = l 0 7 m m
+ F = 4 0 k N , 6 = 5 6 m m
* F = 3 0 k N , 6 = l 0 m m
+ f = 1 9 k N , d = 7 m m
0 200
Tensileforce [kN]
50
3.5
200 400 600 800 1000 1200 1400
= Straingaugeon
reinforcement
Positionx [mm]
Figure20 Distributionof tensileforcesalongthe reinforcementbarsin the frame cornerat
differentloadlevelsfor the specimenswith low reinforcementratio.
Discussion
In the first test series,carriedout by Plos, the specimenswith conventionalreinforcement
detailingwerefound to havea somewhathigherload capacitythanthosewith new detailing.
This was becauseof the greaterarnountof reinforcement,prescrib€dfor the cross-sectionwith
the constructionjoint (sectionI in Figure 13),that continuedthroughthe other criticalcross-
section(sectionII in Figure 13) for the conventionalreinforcementdetailing.For the new
detailing,the amountof reinforcementcrossingsectionII waslessthanthat crossingsectionI,
see Figure 8, which resultedin unequal strengthin the sectionsadjoining the corner.
Consequently,a plastichinge developedonly in the weakercrosssectionof the specimens
2 l

-- 33 of 100 --

with new detailing,and at a lower load than for the specimenswith conventionaldetailing.
Therefore,in the secondtestseries,the adjoiningsectionsof the framecomerweredesigned
to be of equalstrength,seeFigure8. With this modification,plastichingesdevelopedat both
sidesof the framecorner,i.e. a similarbehaviourwasexhibitedfor specimensreinforcedwith
eithertypeof detailing.
In the secondtest series,the specimenswith high reinforcementratio behavedsimilarly.The
maximumload was nearlythe sameand the load-displacement	curveswere similar.Because
of the spallingof the concretesidecover in the frame corners,a somewhatlower maximum
load capacitythanexpectedwasobtained.Also, the plateauin the load-displacement	relation,
observedfor the specimenswith high reinforcementratio in the first test series,did not
appear. One can assume that when the concrete spalling occurred, the outermost
reinforcementbarsceasedto carry any load and the remainingreinforcementbarswere left to
balancethe compressionforce in the concrete.This meansthat the load capacityof the
structuredecreasedandthatthe load-displacement	plateauwould appearat a lower loadlevel.
The responseof the testspecimens,in particularof specimenRV5, corresponded	fairly well to
this assumption.When the maximumload was reached,it fell becauseof the spallingafter
which a plateaucan be discemedin the load-displacement	curye for a load of about90 kN.
Thus, theoretically,if the spallinghad not occurred,the specimenswith high reinforcement
ratio probablywould haveobtaineda plateauat the maximumload level.
Both of the specimenswith low reinforcementratio, in the secondtestseries,showedsimilu
ductility.The plateauin the load-dispiacement	relationsat maximumloaddid appearclearly
for thesespecimens.The maximumloadswere the sameand the displacementswere of the
samemagnitude.There were no indicationsthat the differencein the configurationof the
reinforcementbarshad anyinfluenceon the responseof the specimens.
Threeof the specimensin the secondtestserieshad somereinforcementbarstorn off. The use
of a lessductile reinforcementtype, K500, contributedto this behaviour.Thus, if the more
ductilereinforcementtypeKs 40 S had beenused,a greaterdeformationbeforecollapseof the
specimenswould havebeenobtained.No testswith the conventionalreinforcementdetailing
andthe new,lessductile,reinforcementtype werecarriedout.
An approximatecomparisonwasmadebetweenthe load capacityof the specimensusedin the
secondtest seriesand that of the specimenswith conventionalreinforcementdetailingtested
by Plos(specimensRV1 andRV3). Classiccalculationmethodsfor reinforcedbeamanalyses,
with the compressivezonedescribedby stressblock factorsa andp accordingto the Concrete
Handbookdesign,AB SvenskByggtjiinstand CementaAB (1990),wereusedto estimatethe
load capacitiesof the specimens.Estimatedload capacitiesfor the specimenscomparedare
listedin Table5.
22

-- 34 of 100 --

Table5 Comparison of load capacity between the specimens in the second test series and
the specimens with the conventional reinforcement detailing tested by Plos.
Efficiency is defined as ultimate load observedin test divided by the estimated
maximum load capacity.
Test
senes
Test
specimen
Estimated
maximum load
tkNl
Maximumload
in the tests
tkNl
Efficiency
R V I
RV3
t57
40
115
44
l . l l
l . l 0
2 RV5
RV6
RV7
RV8
t 6 5
- t l
14',7
1 5 0
A '
A 1
0 . 8 9
0 . 9 1
i . l 4
1 . r 4
The estimatedmaximumload capacitieswere lower than thoseobservedin the tests,except
for the specimenswherethe concreteside coverspalledoff (RV5 and RV6). Becauseof the
spallingof the concreteside cover for the specimenswith high reinforcementratio, a direct
comparisoncannotbe made betweenthe specimenswith conventionaland new detailing.
However,the calculatedestimationsindicatethat the load capacityof specimensRV5 and
RV6 would have been somewhathigher than that of specimenRVl, if the spallingof the
concretesidecoverhad not occurred,and providedthe two differentreinforcementdetailings
of the specimenswereequivalent.
For the specimenswith low reinforcementratio, a direct comparisonis possible.The
differencesbetweenthe estimatedand the observedmaximumload capacitiesfor specimens
RVl, RV7 and RV8 are similarly small. Furtherrnore,a similar plateau in the load-
displacementrelationwas observedin all threespecimens.Accordingly,for the specimens
with low reinforcementratio, approximatelythe sameload and deformationcapacitywere
obtainedwhenusingtheconventionalandthenew reinforcementdetailing.

-- 35 of 100 --

4
4.1
NON-LINEAR FINITE ELEMENT ANALYSES
General
Material Models
Modelling of the concrete
Thecrack modelfor tension
One of the aims of this study was to gain a better understandingof the structural behaviour of
frame corners under loading to failure and of the response in the corner area. One way to
achieve this is by carrying out many experiments in which different pararnetersare varied.
However, not only is this quite expensive but it cannot be counted on to give all the
information needed. Another approach is to make use of the advanced computational
techniquesavailable today. By using the non-linear finite element method, in which the
concrete material models are based on non-linear fracture mechanics to account for cracking,
together with plasticity models for the reinforcement steel and the concrete in compression,
the need for experiments can be geatly reduced. ln such a finite element analysis, it is
possible to evaluate the stressesand deformations of a stmcture more thoroughly than can be
done in an experiment. However, the experiments cannot be completely replaced, since they
are still neededto check that the finite element simulations correspondto the tests.This means
that even if both methods have their advantageswhen used alone, they can become an even
more powerful tool when used together. Accordingly, in combination with the experiments,
the use of non-linear finite element analyses will result in a better understanding of the
mechanical behaviour in a structure during loading to failure.
The test specimenswere analysedusing the finite element programme DIANA, TNO (1993).
Two-dimensional plane stressmodels were used to simulate the concrete.The cracking of the
concrete was modelled using the smeared crack concept with fixed cracks. The non-linearity
of concrete in compression and the steel reinforcement were accounted for by plasticity
models. The specimens were modelled at two different levels of detail. A relatively coarse
mesh, assuming perfect bond between the reinforcement bars and the concrete, was used to
simulate the general responseof the specimens. To compare the new and the conventional
reinforcement detailings a refined element model, taking into account the interaction between
reinforcement and concrete. with a more dense mesh was used. This model was also used to
examine the influence of such parametersas the interaction between the reinforcement and the
concrete, the weakness of the construction joint, and the mechanical properties of the
reinforcing steel. Thorough information about the material data used in the FE analysescan be
found in Johansson(1995. 1996).
4.2
4.2.r
4.2.t.1
ln the analysesusedhere,crackingis takeninto considerationby usinga constantstresscut-
off criterion.This meansthat oncethe maximumprincipaltensilestressreachesthe tensile
strength,independentof the otherprincipalstresses,a crack is initiatedperpendicularto the
principal stress,seeFigure 21. The orientationofthe crack is then storedand the material
responseperpendicularto the crack is determinedby a stress-strainrelation,reflectingthe
effect of the softeningrelationflw), for the crackedmaterialvolume.Additionalcracksmay
. ) A

-- 36 of 100 --

appearat the samelocationbut their formationis restrictedto a minimum angle(hereset to
60") to previouscracks.Whenthe crackedconcreteis unloaded,the secantunloadingmodulus
is usedas tangentstiffnessso that the strainacrossthe crackis reducedlinearlyto zeroas the
stressapproacheszero, see Figure 22. Thus, in the model used,a crack closescompletely
whenthe stressreacheszero.
To simulatethe softeningcurve of the concrete,a bilinear stress-crackopeningrelation,
accordingto recommendations	given in Gylltoft (1983),was used,seeFigure23. The fracture
energy,Gp,wastogetherwith the tensilestrength,/,usedto calculatethe valueof the ultimate
crack opening,w,. To get the stress-strainrelationfor the concretewherethe reinforcement
barswere modelledassumingperfectbond,the meancrack distance,s- (= 0.2 m), observed
from the testspecimenswas used.Approximatestrainvaluesweredeterminedby dividingthe
ultimatecrackopeningby the meancrackdistance.However,asan approximationto consider
the higherstiffnessin the structure,due to the effectsof tensionstiffening,the gradientof the
descendingpart of the stress-strain	curve was halvedfor the concretewhereperfectbond was
assumed.In the modelswherethe interactionbetweenthe reinforcementand the concreteis
simulatedby using separateelementsfor the reinforcementbarsand the concrete,the crack
distribution is given by the analysis,which means that the tension stiffening effect is
consideredautomatically.Since the smearedcracking of each element representsthe
developmentof one real crack,the stress-strainrelationof the crackedconcretedependson
the lengthof the finite element.Therefore,in the areawherethe interactionwas takeninto
account,the crackwidth was dividedby the elementlensthsto determinethe softeninsstress-
strainrelation.
The tensilestrengthin MPa usedin the analyseswas determined,accordingto the CEB-FIP
Model Code.CEB (1993).as
(3)	f, =o.to(f,.,r,)'''
where /].""1 was the cylinder compressive strength of the specimens on the testing day, see
Table 3.
Compressionyield
surface
Tensioncut-off
criterion
Figure2l Tensioncut-off criterionand compressionyield surfacein: a) the o-?plane when
6t = 6z > dr , andb) in the o,-orplane (planestress:d; = 0).
a)
Compression
yield surface
z)

-- 37 of 100 --

Fisure22 Stiffnessusedin the analysesfor unloadedconcretein compressionandtension
w u l 6
Figure23 Bilinearstress-crackopeningrelationsimulatingthe concretesofteningcurve.The
shapeof thecurvewasbasedon recommendations	givenin Gylltoft ( 1983).
4.2.1.2 The plasticity model for compression
In compression,the responseof the concretewas accountedfor by an elastic-plasticmodel.
The elasticstress-statewas limited by a Drucker-Prageryield surface,seeFigure 21. Once
yieldinghad occuned,an associatedflow rule with isotropichardeningwas used.In DIANA,
the Drucker-Prageryield surfaceis evaluatedfrom the currentstressstate,the angleof internal
friction, p, and the cohesion,c, seeAppendixB. When concretein compressionis unloaded,
the initial elasticstiffnessis used,seeFigure22.
The angleof intemal friction in concretewas,in accordancewith recommendations	given in
the DI.ANA manual,approximatedto be d = 30oandthe cohesion,c ,usedin the analyseswas
calculatedas
I - s i n 0
c = J r.n 1(€ f,n,^,ot) -=------:-
z c o s @
26
( 4 )

-- 38 of 100 --

where/..,,1(€Pun,*,ot)	was the compressivestrengthas a functionof the plasticstralnin the
directionof the uniaxialstress,evaluatedfrom standarduniaxial testson cylinders,see
Table 3. Poisson'sratio was. accordinqto recommendations	in BBK 94. Boverket(1994).
a p p r o x i m a t e d t o v = 0 . 2 0
The strainhardeningof the concrete,specifiedin the analyses,weredeterminedon uniaxial
cylindertestsin whichconcretefrom the samebatchas the testspecimenswasused.In these
teststhe stress-strain	curvecouldbe registeredonly to the maximumstress,whichis why the
remainingpart of the stress-strain	curve was determinedusing the cylindercompression
strengthin accordancewith the ConcreteDesign Handbook,AB SvenskByggdiinstand
CementaAB (1990)and CEB-FIPModel Code,CEB (1993).In the analyses,the strain
hardeningof the compressedconcretewas describedby a cohesion-hardening	parameter
relation,seeAppendixB.
4.2.2 Modelling of the reinforcement
The reinforcement bars in the specimens were modelled with either the DIANA option
"embeddedreinforcements" or separatesteel elements using truss elements. In the embedded
reinforcement option, the reinforcement does not have separatedegrees of freedom; instead
the strength and stiffness of the concrete elements are increased in the direction of the
embedded reinforcement. With this model, perfect bond is assumed between the
reinforcement and the surrounding material. When the interaction between the reinforcement
and the concrete was taken into consideration, the reinforcement bars were modelled by
separateelements, using truss elements in combination with interface elements, see Section
4.2.3.The von Mises yield criterion with associatedflow and isotropic strain hardening was
used to describethe constitutive behaviour of the reinforcement. The modulus of elasticity and
the mechanical properties of the reinforcement used in the FE analyses are shown in
Appendix B. The Poisson'sratio was set to 0.3.
When testing a reinforcement bal to obtain its material properties, the plastic deformations
will localise to a short length of the bar once the ultimate strength of the steel material has
been reached. However, the strain in the stress-strainrelation obtained from such a test is
calculated from the extension of the bar divided by the length of the bar. Thus, the locaiised
deformations are smearedout over the whole length of the bar tested. Therefore, to take this
into considerationwhen determining the stress-strainrelation of the steel used in the analyses,
the localised deformations were smeared out over one reinforcement element, which resulted
in a less steepstress-sffainrelation for the softening branch. The strain exceeding the strain at
maximum stresswas modified according to equation (5), see Figure 24.
A€no= ot#, (5)
Here,16o,denotesthe lengthof the reinforcementbar usedwhen determiningthe stress-strain
relation of the steel (= 400 mm) and l,p*n, denoresthe lenglh of the finite element
representingthe bar in the FE analyses(= 50 mm).
27

-- 39 of 100 --

Stress,o, [MPa]
800 -
300 350
Strain,e, [l0-3]
Figure24 Determinationof the modifiedstress-strain	relationusedin the FE analysesto take
into considerationthe localiseddeformationsof the reinforcementbar after
maximum stress. The modified strain /to,,,i is determined according to
equation(5).
In this work, the importanceof the mechanrcalpropertiesof the reinforcingsteel in the
deformationcapacityof the framecomerwasstudied.The ratio1of the ultimatestrengthiuto
the yield strength,frrcan. accordrngto Oberg(1976),have a considerableeffect on the
rotationalcapacityof a structure.A high valueof y, seeequation(6), meansthatthe yielding
of the reinforcementbarsis more likely to occurover a largerarea,resultingin an enhanced
del'ormationcapacityof a structure.
Heref,, and/,, denotethe yield strengthand ultimatestrength,respectively,of the "normal
ratio" stress-strainrelation,seeFigure 25. In the detailedFE analyses,threedifferentstress-
strainrelationsofthe steelreinforcement,	denoted"highratio","normalratio"and"low ratio",
were studied;the "normalratio" correspondedto the stress-strainrelationof the steelusedin
test specimensRV7 andRV8 and the "high ratio" and"low ratio" stress-strain	relationswere
evaluatedfrom the "normal ratio" relationusing a factor g accordingto equation(7). For
detailedinformationaboutthe determinationof the "hieh ratio" and the "low ratio" stress-
strainrelations,seeJohansson	(1996).
, A €
T--1
600
( 6 )
f
' f
^, mod
tt - -:--
I
--o- Originalstress-straini
-r- Modifiedstress-strain
28
(7)

-- 40 of 100 --

Pal	o l M
I
f',),
f
4.2.3
e, [Vo]
Figure 25 Determination of the three different stress-strain relations of the steel
reinforcement used in the detarled FE analyses. The "normal ratio" stress-strain
relation is based on the reinforcement used in test specimens RV7 and RV8,
Johansson(1995).
Interactionbetweenreinforcementand concrete
The interactionbetweenthe reinforcementbarsand the surroundingconcretewas takeninto
considerationonly in the detailedanalyses.ln the analysesof the generalresponse,perfect
bond was assumed,see Section 4.2.2. ln DIANA, the bond-slip relation betweenthe
reinforcementand the concreteis modelledusinginterfaceelements.The off-diagonalterms
aresetto zeroand a non-linearbond-siiprelationin the longitudinaldirectionis usedtogether
with a linear relation in the normal direction,see equation(8). In the model no normal
expansionis causedby the slip of a bar; thus, radial stressesdo not arise in the concrete
around a bar. Consequently,splitting failures cannot be modelled.Instead,the effect of
splittinghasto be includedin the non-linearbond-sliprelation.
An exampleof the FE modellingof the reinforcedconcreteusedin the detailedanalysesis
shownin Figure26. The steelreinforcementbars,modelledby trusselements,are positioned
at the edgebetweenthe two concreteelements.Separatenodesare usedto define the truss
elementsand the concreteelementsalthoughthe co-ordinatesof the nodesare identical.
lnterfaceelementsare then usedto model the bond-sliprelationbetweenthe reinforcement
and the concrete.The width i of the interfaceelements(seeFigure26) is initially equalto
zero, while the thickness of the interface elements is equal to the circumferenceof the
reinforcementbars.
Sincethe trusselements,modellingthe reinforcementbars,haveto be positionedat the edge
of the concreteelements,the finite elementmesh is dependenton the positioningof the
reinforcementbars. Consequently,when modelling the interactionbetweenthe reinforcement
and the concrete,a morecomplexfinite elementmeshis usuallynecessarythan when a perfect
bond is assumedand the embeddedreinforcementoption is used.
( 8 )	[4,,.lfq (',) o l[^','l	I t = t i l |
L^,"1 L 0 D,,lle".l
Stress-strain
relation
f"
lMPal
f,,
lMPal
High ratio
Normalratio
Low ratio
J t 3
) / J
< 7 ?
I 1 . 3
675
608
1 . 3 0
1 . 1 8
r . 0 6
1 . 1
1 . 0
0.9
29

-- 41 of 100 --

Bond-slip
14-nodeinterfaceelement)
Concrete
(4-nodeplanestresselement)
Reinforcementbar
(2-nodetrusselement)
Figure 26 Finite element idealisation in DIANA of reinforced concrete elements using truss
and interface elements.
The bond-slip relation between the reinforcement and the concrete used in the detailed
analyses was approximated according to the CEB-Ftr Model Code, CEB (1993) where the
bond stress,r, is given as a function of the relative displacement,s.
The CEB-FIP Model Code accountsfor the effect of splitting cracks by giving different bond-
slip relations for confined and unconfined concrete.Since no splitting cracks were observedin
the test specimens, "confined concrete" was assumed in the FE analyses. According to
Engstrom (1992), the bond stressdecreasesconsiderably when the reinforcement steel yields,
see Figure 27. ln the bond-slip relation proposed by Engstrom, the bond stress is not given
explicitly, but depends on when the steel reinforcement yields. However, the principal bond-
slip relation for this yield case is similar to the relation given when "unconfinedconcrete"is
assumed; therefore, as an approximation, "unconfined concrete" was assumed for the
reinforcementbars where yielding of the reinforcing steel was likely to occur.
a
i
I	I L - -
	.M
CEB-FIPModelCode
Figure27 Bond-sress-sliprelationshipaccordingto the CEB-FIPModel Code,CEB (1993)
andthe modifiedmodelaccordingto Engstrcim(1992).
30

-- 42 of 100 --

Bond-stress,	r IMPa]
+ "Good"bondcondition
+ "Other"bondcondition
+ "Bad"bondcondition
3
Slip,s [mm]
Figure28 The principaldifferencebetween"good", "other" and "bad" bond conditionsfor
"unconfinedconcrete".CEB ( 1993).
Differentbond-sliprelationswere used in the analysesto study the effect of the structural
behaviourof variousbond conditions."Good" and "other"bond conditionsaccordingto the
CEB-FIP Model Code, CEB (1993), and a third bond-slip relation,denoted"bad" bond
condition,wereused.The "bad" bond conditionwas definedas havinghalf the bondstressat
the sameamountof slip as the "other"bondcondition,seeFigure28. The differentbond-slip
relationsusedin the FE analysescanbe foundin Johansson(1996).
The Numerical Approach
In a finite elementanalysis,wherethe non-linearbehaviourof the material,the structure,or
both is takeninto consideration,a systemof simultaneousnon-linearequationsresults.The
relationbetweenload and displacementthen becomesnon-linear,and the displacementat a
given stageusually dependson previousdisplacements.To solve this system,the load is
subdividedinto increments,seeFigure29. At eachload incrementa linear approximationof
the stiffness,representinga kind of lineansedform of the relationbetweenthe load and the
displacement,	is establishedandthe correspondrng	equilibriumequationsaresolved.Sincethe
stiffnessvaries with the displacement,the internal forces of the structureare not in
equilibriumwith the externalforces;this producesan error in the solution.Therefore,to
minimisethis error,an iterativesolutionprocedureis usedwithin eachload incrementandthe
solutionis refineduntil a specifiedconvergencecritenais satisfied.
l 0
4.3

-- 43 of 100 --

o^F
t^F
' - F
Figure29 Increasingerror of the solutionwhen using the incrementalload methodwithout
correctionfor a onedegreeof freedomsystem.
Thereareseveraldifferentiterationmethodsavailablethatcanbe usedin the solutionprocess.
Accordingto TNO (1996),the generalprocedureis the samefor all iterationmethods;the
differenceis in how the stiffnessmatrix is determined.The iterativemethodscan be divided
roughlyinto threecategories:the tangentstiffnessmethod,the initial stiffnessmethodandthe
secantstiffnessmethod,seeFigure30. In the tangentstiffnessmethod,the stiffnessmatrix is
determinedat eachiteration,resultingin a methodthat requiresfew iterations,but thereevery
iteration is relatively time consuming.In the initial stiffness method, the stiffness is
determinedat the beginningof each load step and it is then used throughoutthe whole
iteration processwithin an increment.This method requires more iterations to reach
convergencethan the tangentstiffnessmethod.However,sincethe samestiffnessmatrix is
used in each iterationwithin the increment,every iterationis faster.The secantstiffhess
methodusesthe informationfrom previoussolutionsto updatethe inversestiffnessmatrix in
eachiteration,which resultsin a convergenceratesomewherebelweenthat of the tangentand
the initial stiffnessmethods.
In this study,the Modified Newton-Raphsonmeihod(initial stiffnessmethod)and the BFGS
method (secantstiffnessmethod) have been used in combinationwith a displacement
controlledincrementailoading.Experienceindicatesthat thesemethodsprovide a solution
processwith fewer numencaldifficulties,seePlos (1995).A tolerancegiven as a percentage
(usually 0.01 Vo) of the energy norrn was used as the convergencecriterion. Further
information of these iteration methodscan for instancebe found in Bathe (1996) and
T N O ( l 9 9 6 ) .
5.!

-- 44 of 100 --

t + N F
,F
t+ar
F
f
I + 4 1 . .
	u
c )
Figure30 Schematicfigure of different iteration methods for a one degree of freedom
system:a) tangentstiffnessmethod,b) initial stiffnessmethod,c) secantstiffness
method.
Analysesof Frame Corners
4,4.1 General
The frame corner specimenstestedin the secondtest serieswere analysedusing the finite
elementmethod.The analyseswerecarriedout at two differentdetaillevels.In the analysesof
the general response,perfect bond between the reinforcementbars and the concrete was
assumed,using the embeddedreinforcementoption. In the more detailedanalyses,truss
elementsin combinationwith interfaceelementswereusedto simulatethe reinforcementbars
in the region ciose to the frame corner area;thus, the interactionbetweenthe reinforcement
and the sunoundingconcretewas included. Embeddedreinforcementwas used in the
remainingpart of the model, to model the reinforcementbars. In the testsof specimenswith
high reinforcementratio, the side concretecover in the corner area spalledoff. As this
behaviourcouldnot be simulatedin the FE modelsused,thesespecimenswereanalysedusing
only the lessdetailedmodel.The specimenswith low reinforcementdetailingwere analysed
u
b)	a)
4.4
J J

-- 45 of 100 --

using both models.The FE models used do not take into accountthe placementof the
reinforcementbars,i.e. whetherthey arein contactwith eachotheror not.Therefore,the same
modelswereusedin the analysesof the specimenswhetheror not the reinforcementbarswere
in contactwith eachother;i.e. one modelwas usedto simulatespecimensRV5 andRV6, and
anothermodelwas usedto simulatespecimensRV7 andRV8.
Due to numericaldifficulties,the effect of differentmechanicalpropertiesof the reinforcing
steelbarswas not studiedusingfinite elementmodelsof the frame comer.Instead,a simpler
modelof a cantileverbeamwasused,seeSection4.7.This modelwasalsousedto studymore
thoroughlythe effectof differentbond-sliprelationsfor structureswith high and low amounts
of reinforcement.
In the FE analyses,two-dimensionalplane-stresselements,consistingof four-nodequadri-
lateral elementsand three-nodetriangular elements,were used to model the concrete.The
reinforcementbarswere modelledusing eitherthe embeddedreinforcementoption available
in DIANA or two-node truss elements,see Section4.2.2. Where the reinforcementwas
modelledby trusselements,four-nodeinterfaceelementswereusedto simulatethe interaction
betweenthe reinforcementand the concrete,seeSection4.2.3. A Gaussintegrationscheme
was used:2 x 2 integrationpoints for the four-nodequadrilateralelements,one integration
point for the three-nodetriangularelements,one integrationpoint for the two-nodetruss
elements,andtwo integratronpointsfor the four-nodeinterfaceelements.
For the detailedanalysesof the frame specimens,the accuracyof the modelwas investigated;
an analysisusinga comparativemodelconsistingof elementsof higherpolynomialorderwere
carriedout. The four-nodeplane stresselements,two-nodetruss elementsand four-node
interfaceelementswere replacedby nine-nodeplane stress elements,three-nodetruss
elementsand six-nodeinterfaceelements,respectively.As the differencein the resultswas
negligible,themodelusingthelowerorderelementswaschosen.
4.4.2 The FE model for analysesof general response
The model usedto analysethe generalresponseof the frame cornersconsistedof 158two-
dimensionalplanestresselements,seeFigure31. Sinceembeddedreinforcementwas usedto
modelthe reinforcement,the sameelementmeshcould be usedto modelthe test specimens
with both the high and low amounts of reinforcement.The position and amount of
reinforcementbarsusedin the model u'eredeterminedby taking into accountthe anchorage
capacityof the reinforcementaccordingto the simplifiedsplitting stressmodel, AB Svensk
ByggdiinstandCementaAB ( 1990),seeFigure32.
J +

-- 46 of 100 --

Figure 3l The finite element mesh and the position of steel reinforcement in the model for
analysing the general responseof the frame corner.
I
vl
Positiony Positiony
Numberof reinforcementbarsin Numberof reinforcementbarsin
modelwith hieh reinforcementratio modelwith low reinforcementratio
Figure32 Positionand amountof the steelreinforcementwhen the anchoragecapacityhas
beentakeninto account.The steelareausedin the differentsectionsof the model
correspondto the areaof tie numberof reinforcementbarslistedin the diagrams.
v
F-------->
Numberof @16
Numberof effectivereinforcement
barswith respectto the anchorage
capacrty
Numberof @10
3 5

-- 47 of 100 --

4.4.3
4.4.3.1
The FE modelfor detailedanalvses
New reinforcementdetailing
To model the geometry of the test specimens, a total of 322 two-dimensional plane stress
elements were used, see Figure 33. Truss elements in combination with interface elements
(a total of 137 each) were used to model more accurately the reinforcement bars within 1.0 m
of the corner, where cracking of the concrete was expected. Outside this area, the
reinforcement bars were modelled with embedded reinforcement, see Figure 34.
The test specimenswere cast with a construction joint, see Figure 6. The test results indicated
thar this joint exhibited a zone of weakness in the matenal in which cracking first occurred,
see Section3.3.3.To model the weaknessof the constructionjoint, a thin row of elementswas
used in which weaker material parameters were given, see Figure 35. In this way, the
constnlction joint was smeared out in the FE model, meaning that any reinforcement bars
placed in the element row simulating the constructionloint would be affected.The straight
reinforcement bars in the column did not reach into the comer area and were not, therefore,
affected by the construction joint. Thus, the straight tensile reinforcement bars in the columns
of the frame cornerstestedwere modelled to end just below the row of elementsmodelling
the constructionjoint, seeFigure 35.
Fieure33 The finite elementmeshof the framecornerwith new reinforcementdetailing.
36

-- 48 of 100 --

- = Trusselement	(4@10)
- = Trusselement	(3d10)
"-- = Embedded	reinforcement	(3010)
Figure34 Modelling of the reinforcementbars in the frame comer with new reinforcement
detailing.
The concretein the constructionjoint was assumedto have reducedtensilestrengthand
fractureenergyalthoughthe compressivestrengthwas unmodified.Sincethe hrst cracksin
the testspecimenswith low reinforcementratio were observedat a load level approximately
half of that expected,the tensilestrengthof the concretemodellingthe constructionjoint was
reducedto 5O 9o. The effect of the weaknessin the constructionjoint on the structural
behaviourof the framecomerwasexamined.By modellingtheconstructionjoint with a slight
weakness,the first crack was madeto form at the sameplace as in the tests.Therefore,an FE
analysiswith a tensilestrengthand fractureenergyof 90 7o,of that usedin the rest of the
modelwascarriedout.
Row of elements
modellingthe
constructionjoint
The straightreinforce-
mentbarsendbelow
the constructionjoint
Figure35 Modellingof the constructionjoint andthe reinforcementbarsin it
J I

-- 49 of 100 --

On the constructionsite,it sometimeshappensthat the reinforcementbarsare not positioned
accordingto the designers'drawings.	In this work, it is of interestto studythe consequences	of
incorrectlypositionedreinforcementloops. Therefore,an analysisof reinforcementloops
incorrectlypositionedin the column was carried out, see Figure 36. When using truss
elementsin combinationwith interfaceelements,the elementmesh modellingthe concrete
dependson the reinforcementdetailing, see Section 4.2.3. To use truss elementsin
combinationwith interfaceelementsfor modelling the reinforcementdetailing shown in
Figure36, quite a complicatedfinite elementmeshfor the concreteelementsis necessary.In
the analyseswhere all reinforcementbars in the corner area were modelled with a
combinationof trusselementsand interfaceelements,the crackpropagationin the cornerwas
limited;thus,the slip of the reinforcementin the bendof the reinforcementbarswas tolerably
small.This meansthat the assumptionof perfectbond for the bendpart of the reinforcement
loops is appropriate.Therefore,as an approximation,embeddedreinforcementwas usedto
model the loop of the reinforcementbars in the corner area.Parallelto this, a new, less
complicatedelementmeshin the cornerareawasusedto studyits effecton the crackpattern
in thecornerandthe structuralbehaviourof the specimen.seeFigure37.
= Embedded
reinforcement
- =Truss element
Figure36 Positionand modellingof the reinforcementin the corner areafor analyses
correct(left) and incorrect(right) positionedreinforcementloops.The bends
thereinforcementbarsweremodelledusingembeddedreinforcement.
Figure37 Differentelementmeshesin the cornerareawhen the loopsof the reinforcement
weremodelledwith embeddedreinforcement.
of
of
3 8

-- 50 of 100 --

4.4.3.2 Conventionalreinforcementdetailing
A comparisonof the new and the conventionalreinforcementdetailingswas carriedout. The
reinforcementdetailingin the FE model was in accordancewith that usedby Plos for test
specimenRV3. The materialparametersfor concreteand reinforcingsteel, includingthe
weaknessof the constructionjoint, were identicalto thoseusedin the correspondinganalyses
of the framecornerwith the new reinforcementdetailing.To studythe differentdetailingsof
the reinforcementin and near the corner area, a new model with a total of 336 two-
dimensionalplanestresselementswas usedto modelthe geometry,seeFigure38. As in the
model with the new reinforcementdetailing,a combinationof trusselementsand interface
elements(203of each)wereusedto modelthe reinforcementbarswithin 1.0m of the comer.
The remaining reinforcementbars were modelled using embeddedreinforcement,see
Fieure39.
Figure38 The finite elementmesh of the frame corner with conventionalreinforcement
detailing.
39

-- 51 of 100 --

- = Trusselement(3d10)
= Trusselement( 1@10)
= Embeddedreinforcement	(3@10)
Figure 39 Modelling of the reinforcement bars in the frame corner with conventional
reinforcement detailing.
Resultsof the Analvses
4.5.1 General
Two different iteration methods,the Modified Newton-Raphson method and the BFGS secant
stiffness method, were used in the FE analyses,see Section 4.3. ln the analysesof the general
response,only the Modified Newton-Raphson method was used. However, in the anaiysesof
the refined FE model it was found that fewer numerical problems were encounteredwith the
BFGS secant method; accordingly, this was the main iteration method used. Although the
Modified Newton-Raphson method gave a somewhat smoother load-displacement relation
than that achieved with the BFGS secant method. the difference in the effect of these iteration
methodson the resultswas negligible.seeFigure 40.
4.5
Unlessotherwisestated,the
r bondcondition
r reinforcementtype
. strengthof constructionjoint
r iterationmethod
following assumptionswere made in the detailed FE analyses:
"good"(seeSection4.2.3),
"normalratio"(seeSection4.2.2),
5 0 7 c( s e eS e c t i o n4 . 4 . 3 . l ) ,a n d
BFGSsecantstiffnessmethod.
It was found that incorrectparametersfor the modellingof the concretein compressionhad
been used in the FE analyses;this resultedin a strongerand less ductile concrete,see
AppendixB. To examinewhat effect this enor had on the structuralbehaviourof the frame
corner,a comparativedetailedanalysiswith a more accuratestress-strain	relationwascarried
out.The differencein the load-disolacement	relationis shownin Fieure41.
40

-- 52 of 100 --

Load,F [kN]
5 0 -
4 0 *
- B F G S
- Modified
Newton-Raphson
20 25 30
Displacement,	6 [mm]
Figure40 Comparisonof the FE analysesof the frame corner with new reinforcement
detailinewhenusinqdifferentiterationmethods.
t-oad, F [kN]
5 0 T
:
o o T
30 'r
Concretein compression
usedin the analyses
( 0 = 3 0 " , K = E P u n t u i a t )
Concretein compression
that should/ravebeenused
( 0 = l o " , r = 1 . 1 6€ P , n , - , o t )
30
Displacement,	5 [mm]
Figure4l Comparisonof the FE analyseswhen usingdifferentstress-strain	relationsfor the
concretein compression,seeAppendixB.
As canbe seen,the incorrectusageof strongerandlessductileconcretehada negligibieeffect
on the structuralbehaviourof the frame comer. The load capacity and the stiffness of the
structurewere, more or less, the same in the FE analysescarried out. This was due to the
smallcompressivezoneobtainedin the structure(about20 mm), which meantthat the inner
T
Tl l
30
20
1 0
15	l 0
20
A 1
	+ l

-- 53 of 100 --

lever arm remainedapproximatelythe same,independentof the strengthof the concrete.
Unlessotherwisestated,the resultspresentedin this study are from analysesin which the
incorrect modelling of the concretein compressionwas used. However, the negligible
differencein the behaviourof the structureshownin Figure41, whenusingdifferentvaluesof
theconcretein compression.showsthatthe resultsarestill valid.
4.5.2 FE analysesof the generalresponse
An objectiveof the FE analysesof the generalresponse,besidespredictingthe maximum
load,was to describethe plateauin the load-displacement	relationsobservedin the tests.ln
the analysisof the specimenswith low reinforcementratio, such a plateauwas obtainedand
the analysiswas disruptedwhen the deformationcapacityof the steel reinforcementwas
almostreached.In the analysisof the specimenswith high reinforcementratio,yieldingof the
steelreinforcementwas reachedbut, due to numericalproblemscausedby the concretein
compression,the plateaucouldnot be simulated.
With the modelsused,it wasnot possibleto simulatethe spallingof the sideconcretecoverin
the frame comersthat was observedin the testsfor the specimenswith high reinforcement
ratio. Consequently,the maximumload obtainedin the analysisof the generalresponsefor
thesespecimensdo not coincidewith the testresults.Instead,the maximumloadlevelreached
in theseanalysesreflectsthe capacityof the test specimens,providing the spallingof the
concretehad not occurred.The load-displacement	relationfor the FE analysesand the test
resultsare comparedin Figures42 and 43. The distributionof tensile forces along the
reinforcementbarsin the framecornerfor the analysesand the testsaredisplayedin Figures
44 and 45. The relativelyhigh tensile force obtainedin the middle of the cornerfor the
analysisof the specimenswith high reinforcementratio was due to largecracksin this region.
In the analysisof the specimenswith low reinforcementratio, no crackswere formedin the
corner;this explarnsthe low tensileforcesin the reinforcementbarsin this region.
Load,F [kN]
1 2 0
100
80
60
40
z0
. * SWcrnennv6 ]
- FE analysis l
40 50
Displacenent,5[mm]
Comparisonof the FE analysesof the generalresponseand the test resultsfor
the specimenswith high reinforcementratio.
SpecimenRV5
Figure42
A '

-- 54 of 100 --

tkNl
-- SpecimenRV7
+ SpecimenRV8
analysis
60
Displacement,	6
Figure43 Comparisonof the FE analysesof the generalresponseand the test resultsfor the
specimenswith low reinforcementratio.
Tensileforce [kN]
SpecimenRV5
F = 1.47kN, 6= 29 mm
SpecimenRV6
[nad
5 0 I
4 0 +
J U *
2 0 i
l
l 0 {
80
120
r00
80
60
F = 1 5 0k N , d = 3 3 m m
-'- Planestressanalysis
F = l'76kN, 6= 24 mm
40
20
Straingaugeon
reinforcement
t000 1200 1400
Positionx [mm]
Figure44 Distributionof tensileforces along the reinforcementbars in the frame comer.
Resultsfrom the analysisof the generalresponsearecomparedwith resultsfrom
thetestspecimenswith hish reinforcementratio.
400	200
43

-- 55 of 100 --

Tensionforce [kN]
5 0 -
-._ SpecimenRV7
F = 4 0 k N , d = 2 8 m m
* SpecimenRV6
F = 4 0 k N , 6 = 5 6 m m
-"- Planestressanalysis
F = 4 0 k N , 6 = 2 3 m m
40
30
) o
1 0
f, - Strain gauge on
reinforcement
800 1000 1200 1400
P o s i t i o nx I m m l
Figure45 Distributionof tensileforcesalong the reinforcementbars in the frame corner.
Resultsfrom the analysisof the generalresponsearecomparedwith resultsfrom
thetestspecimens	with low reinforcement	ralio.
4.5.3 Detailed FE analvses
4.5.3.1 Objectivesandpreconditions
ln the detailedFE analyses,the main objectivewas to examine the effect of different
parameters,suchas bond condition,mechanicalpropertiesof the steelreinforcement,and the
weaknessof the constructionjoint, on the maximumload and the deformationcapacityof a
frame cornerstructure.Also, the structuralbehaviourof framecomerswith the new and the
conventionalreinforcementdetailingwas to be compared.In additionthe effect of incorrect
positioningof the reinforcementloopsin the new reinforcementdetailingwasexamined.
As in the analysesof the generalresponse,it was not possibleto predictthe behaviourof the
frame corner throughouttotal failure. All the detailedanalysesof the frame corner were
disrupteddue to numericalproblemswhen the ultimatecompressionstrengthof the concrete
was reachedat one integrationpoint in the corner area. At this stage,yielding of the
reinforcementbarshad occunedand,in somecases,alsostartedto harden.To studythe effect
that different mechanicalpropertiesof the steel reinforcementhave on the frame corner,
substantialhardeningof the steelis presumed.However,in the analysesof the framecorner,
sufficient strain of the reinforcingsteel was not reachedand, therefore,the mechanical
propertystudy was not made with the frame cornermodel. Insteada simpler model of a
cantileverbeamwas usedfor this studv.seeSection4.7.
600	400	200
A A

-- 56 of 100 --

4 . 5 . 1 . 2 \ e u r e i n f o r c e m e n t d e t a i l i n g
T h c s p e c i m e n su i t h l o r " r e i n f o r c e m e n tr a t r o o f t h e s e c o n dt e s t s e r i e s' , r a sa n a l v s e du \ l n s t h c
detarledrnodel. In the i.irststase of the analvses.the bond conditron correspondingto that o1'
t h c t e s t s p e c l m e n sw ' a st o b e d e t e m r i n e d .T w ' o c r i t e n ac a n b e u s e df o r t h i : d e t c r m i n a t i o n :t h e
n r e l t ns p a c i n uo f t h e r n a . l o rc r a c k so b s e r v e di n t h e t e s t s p e c i m e n sa n c lt h e l o a c l - d i s p l a c c n r c r r t
r c l a t i o no b t a i n e di n t h e t e s t s .T h e f o n n e r c n t e r i o n u a s a s s u n r e dt h e t r e t t e ro n e l o u s c \ l n c c
sonrel-actorsof uncertaintr'.such as the fracture energr and the generalll'stiffer behaviour 01'
l l r r ' F E u n a l r . s r s .h a v e l e s se ff e c t o n i t . T h e c r a c k p a t t e r no f t h e a n a l r s e \ \ \ u \ c ( ) r l t l i r r c t lr r r l h
t i l r ' ! r ' r c k p a t t c r n o b t a i n e . li n t h c t c s t s . s e e F i g u r e - 1 6T h e c r a c k p a i l e r n ( r t t h r e n J ( ) 1 l i t r '
l n a l t s t s ) a n c lt h e l o a d - c i r s p l a c e n r e n t	r e l a t i o n sf o r t h r e e d i f f e r e n tb o n d - s l i pr c l a t i o n s . g o o L i-
" o t h e r ' a n i l " h a d " . s e e S e c t i o n4 . 2 . 3 . r . r ' e r ee r a m i n e d .s e e F t - e u r e s . 1 7t o - 5 0 .- l ' h eF E a n u l v s i s
assutling "good" bond condition shor'"'edthe best agreementu,ith the mean crack spacrngot'
0 . 1 r - no b s e r v e di n t h e t e s t s .W h e n c o m p a r i n gt h e l o a d - d i s p l a c e n r e n t	r e l a t i o n s .t h e a n a l v s r :
t u s i n g" b a d " b o n d c o n d i t r o nc o r r e l a t e db e s t n r t h t h e t e s t s .H o w e v e r .a s e x p l a i n c da b o v c - .t h e
crack pattern was assumedto be nrore inrportant whcn dcciding \\'hat bond conclttrr)n\\a\
presentin the test speclmens.Thereiitre. a bond-slip relation corresponrlineto goocl' b0n.l
condition u.'asassumed to be the closest to that of the test specnnenseven though lt $ri\
s o t t t e w h a tt o o s t i f f t n c o n r p a n s o nw i t h t h e t e s t s .A c c o r d r n g l y .t h e ' g o o d " b o n d c o n c l t t i o nh u s
b e e nu s e c la s a b a s i sw h e n c o m o a r i n st h e F E a n a l v s c s .
Figure ;16 crack patternsobtarned for test specimen s RV7 ( left ) and RV8 ( n-qhr).

-- 57 of 100 --

l t l t
' l I I I
t, l
l l t l	' , t l
Figure 47 Crack pattern at the end of the analysis for a frame corner with the new
reinforcement detailing when assuming "good" bond condition.
Figure48 Crack pattern at the end of the analysisfor a frame corner wirh the new
reinforcementdetailingwhenassuming"other"bondcondition.
46

-- 58 of 100 --

Figure49 Crack pattern at the end of the analysis for a frame corner with the new
reinforcementdetailingwhenassuming"bad"bondcondition.
Load, F [kN]
5 0 r
4 0 t
I
3 0 *I
) o +!
-+
+
SpecimenRV7
SpecimenRV8
"Good"bond
condition
"Other"bond
condition
"Bad" bond
condition
1 0
25 30
Displacement,6 [mm]
Figure50 Comparisonof the load-displacement	relationsfor threedifferentbondconditions.
The distribution of the tensileforces along the reinforcementloops, in the testsand analyses,
whenyieldingofthe steelreinforcementhasoccurred,arepresentedin Figures51 and52.The
differencein the distributedtensileforces,observedfor the differentbond-sliprelations,was
20
47

-- 59 of 100 --

dueto the appearanceof majorcracksin the columnand the beamnearthe cornerarea.In the
analysiswhere "bad" bond condition was assumed,the variationof the tensile force was
approximatelylinear.This was becauseof the largespacebetweenthe cracksin the column
andthe beam.For the "good"and "other"bond-conditions,a shift in the tensileforceresulted
dueto the appearanceof a cracknearthe corner,seeFigures47 to 49.
TensileForce[kN]
5 0 -
i+ SpecimenRV8
i F = 4 0 k N . 6 = 5 6 m m
i- Goodbondcondition
F = 4 3 k N , 6 = 1 8 m m
c - Strain gauge on
reinforcement
1000 1200 1400
Positionx [mm]
Figure5l Distributionof the tensileforcesalongthe reinforcementbarsin the framecomer
for thetestsandthe FE analvsiswhere"sood" bondconditionwas assumed.
-o- SpecrmenRVl-
F = 4 0 k N , 6 = 2 8 n r n l
x , ^ .
TensileForce[kN]
5 0 -
4 0 - /
"Good" bond condition
F = 4 3 k N , 6 = 1 8 m m
"Other" bond condition
F = 43 k-|{,6 = 18rnmi
"Bad" bond condition l
F = 4 1 k N , 6 = 2 0 m m
1000 1200 1400
Positionx [mm]
Figure52 Distribution of the tensile forcesalong the reinforcementbarsin the frame comer
for the FE analysesof differentassumptionsof the bondcondition.
48

-- 60 of 100 --

The effect of the weaknessin the construclionjoint on the structuralbehaviourof the frame
cornerwas examined.By modellingthe constructionjoint with a slightweakness,the first
crack was madeto form at the sameplaceas in the tests.Therefore,an FE analysiswith a
tensilestrengthand fractureenergyof 90 Vo,of that usedin the restof the model,wascarried
out. The load-displacementrelationsof the FE analysesusing different strengthof the
constructionjoint are comparedin Figure 53. The changesin the crack pattern and the
distributionof tensile forces in the frame comer area, causedby the weaknessof the
constructionjoint,	areshownin Figures54 and55,respectively.
Load,F [kN]
5 0 r
+ SpecimenRV8
- 50 7ostrength
- 90 7ostrength
4 0 +
3 0 r
2 0 *
25 30
Displacement,	d Imm]
Figure53 Compansonof the load-displacement	relationsusing different strengthsof the
constructionjoint for the framecornerwith new reinforcementdetailing.
Figure54 Differencein crack patternin the cornerareawhen using 50 70 strength(left) and
90 7ostrength(righo for the concretein the constructionjoinr.
20	t5	l 0
. ' -\ - \ \ U 4
I t t t , l
\ \ \ t - /
' r - - l
{ f +
.|vr I
|i- l
l r i
\VJZ
'il
r l
5
F
\
49

-- 61 of 100 --

TensileForce[kN]
5 o l
4 0 +
50 7ostrenglh
F = 4 4 k N , 6 = 2 6 m m
90 7ostrength
F = 4 4 k N , 6 = 2 6 m m
3 0 *
2 O '
l 0
1 - - - -
0 200 400 600 800 1000 1200 t400
Position x [mm]
Figure55 Comparisonof the tensile forces in the frame corner when using different
strengthsfor theconcretein the construclionjoint.
When examiningthe consequence	of incorrectpositioningof the reinforcementloops,an
approximateapproachwas used to model the reinforcementbars in combinationwith a
simplifiedFE mesh,seeSection4.4.3.1. The load-displacement	relationscomparedin Figure
56 confirm that the approximationsmadewere appropriate.The slightlyhigherloadcapacity
obtained,in the analyseswhere the reinforcementloops were modelledusing embedded
reinforcement,wa-sdueto the assumptionof perfectbondin the bend.Whenthe bendof the
Load,F [kN]
5 0 -
4 0 *
J U -
20
- Reinforcement looDs modelled
usingtrusselements
(onginalmesh)
Reinforcement	loopsmodelled
using embeddedreinforcement
(originalmesh)
Reinforcementloopsmodelled
usingembeddedreinforcement
(simplifiedmesh)
30
Displacement,	6 [mm]
Figure56 Comparisonof the load-displacement	relationsfor differentmodellingschemesof
thecornerarea.seeSection4.4.3.1.
70
50

-- 62 of 100 --

reinforcementloops was preventedfrom slipping,a somewhathighertensilestrainwith
consequent	highertensilestressin the reinforcement	barswas the result.Parallelto this.the
effectof differentelementmeshesfor the crackpatternin the cornerarea,was examined.In
Figure57,theresultingcrackpatternsin thecorner,whenusingtheoriginalandthesimplified
meshshownin Figure37, arecompared.It canbe seenthatthecrackpatternis affectedby the
elementmesh and that the directionof the crackstendsto be parallelto the edgesof the
elements.The effectof the load-displacement	relationwhen the reinforcement	loopsin tbe
columnarepositionedincorrectis shownin Fieure58.
\ t l - - t
{n-1 r
\ F - iI
I F I ]
l r { t
l l v /
Figure57 Crackpatternin the framecomer when usingthe originalFE mesh(left) and the
simplified mesh (right), see Figure 37. Embeddedreinforcementwas used to
modelthe bendof the reinforcementloops.
Load, F [kN]
5 o r
v r
x : = i
\ \\
)
4 0 +
3 0 *
l
2 0 *
Correctpositionof the
rehforcementloops
(simplifiedmesh)
Incorrectpositionof the
reinforcementloops
(simplifiedmesh)
20 30
Displacement,	6 [mm]
Figure58 Comparisonof the load-displacementrelationsfor the frame comer when the
reinforcementloopsweremodelledin thepositionsaccordingto Figure36.
51
r - . \ \ * l j f - l
\ \ \ \ \ l l I
	r \ \ \ l l F -	
- lr-
i l l
ll..i
\ \ \ \ \ ) - I
l )
_ _ * . { i

-- 63 of 100 --

;1.5.3.3 Conventionalreinforcementdetailine
The crack pattern ol a test specimen with low, reinfrtrcement rarro tspeclmen RV-li.
P l o s t l 9 9 ' 1 a .b ) . c a r r i e c lo u t n r t h t h e c o n l e n t i o n a ld e t a r l i n - ei s s h o w n i n F i g u r e 5 9 . A l t h o u g h
the rtrength of the concrete and the steel reinforcementused in thrs specimen were not thc
\arlle as ln the FE analtses. a comparison ofthe crack paftern can sttll be ntade. The crack
pattern (at the end of the analvses)and the load-displacementrelation tbr rhe 'good" and rhc
"other" bond conditions are shorvn in Figures60 to 62. The densercrack pattern obtaineclin
l l t c r t n l i t s c ' so f t h e f r a m ec o r n e ru i t h c o n v e n t i o n a lr e i n t - o r c e m e n t	d e t a i J i n g .c o n t p a r c dr r i t h t h c
I t , t l l t ce r r r n c rt t i t h t h c n e u c l e t a r i i n c .n a s d u e t o t h e g r e a t e ra n r o u n to f r c r n i t l r c e r n c n tr n t h r '
\ l ! l r l l l \ o l t h e c o r n e ra r e a .\ e e F i g u r e s- l - 1a n d 3 9 . T h e d i s t r r b u t i o no t ' t h c .t e n s i l el i r r c e su i o n g
the retttlitrcenlcntbars ln the frame corner tbr the FE analvseswhere "good' and "othcr' borrtl
c o n d i t i o n su e r e a s s u m e c l .a r e s h o u n i n F i e u r e6 3 .
Filur.r'-5t) Crack pattcrn oi' a test specimen {specinten RV j r carried out u ith thc
c o n v e n t l o n a lr e i n f o r c e n t e n td e t a i i i n g .p i o s t 1 9 9 , 1 a .b ) .
52

-- 64 of 100 --

Figure 60 Crack pattern at the end of the analysis for a frame comer with the conventional
reinforcement detailing when assuming "good" bond condition.
Figure6l Crackpattemat the end of the analysisfor a frame cornerwith the conventional
reinforcementdetailingwhenassuming"other"bondcondition.
5 3

-- 65 of 100 --

I-oad,F [kN]
60 -r
5 0 +
4 0 :
30 -1-
TensileForce IkN]
5 0 -
1,,:(
\
^
20
l 0
30 40
Displacement,	d [mm]
Figure 62 Comparison of the load-displacementrelations for two different bond conditions.
0 200 400 600 800 1000 1200
Position x
Figure63 Distributionof the tensileforcesalongthe reinforcementbarsin the framecorner
for the FE analyseswith two differentassumptionsof the bondcondition.
As for the frame corner with new reinforcementdetailing,a comparisonof the effect of
differentweaknesses	of theconstructionjoint on the structuralbehaviour,wascarriedout.The
load-displacement	relationsfor different strengthsof the constructionjoint are shown in
Fieure64.
"Good"bond
condition
"Other"bond
c91qq9t
20
"Good" bond condition
F = 5 0 k N , 6 = 2 0 m m
"Other"bondcondition
F = 5 0 k N , d = 2 0 m m
I 400
lmml
54

-- 66 of 100 --

tnad,F [kN]
6 0 -
5 0 r
4 0 -
3 0 - % strength
- 90 70strength
20 30 40
Displacement,	6 [mm]
Figure 64 Comparison of the load-displacement relations for different strengths of the
constructionloint in the frame comer with conventionalreinforcementdetailing.
l 0
4.5.4
4.5.4.1
Comparisonsof the FE analyses
Comparisonof conventionaland new reinforcementdetailings
In Figure65, the load-displacement	relationof the FE analysesfor the framecornerwith the
new reinforcementdetailingis comparedwith that of the framecornerwith the conventional
reinforcementdetailing.The distributionof tensileforcesalongthe reinforcementbarsin the
framecornersfor the analvseswith new and with conventionalreinforcementdetailingare
shownin Figure66.
The structuralbehaviourof the frame cornerswas similar up to a load of about40 kN at
which the reinforcementbarsin the frame cornerwith new reinforcementdetailingstartedto
yield. Due to the greateramountof reinforcementin the sectronsadjacentto the corner(see
Figures34 and 39), the load capacityof the frame corner with conventionalreinforcement
detailingcontinuedto increaseuntil yielding at a load level just below 50 kN was reached.
Then a load plateausimilar to that observedin the testswas formed for both reinforcement
detailings.The increasein load capacityobtainedfor the frame corner with conventional
detailing, once yielding was reached,was due to substantialhardeningof the steei
reinforcement.The suddenloss of load capacity(approximately7 kN) at a displacementof
about 26 mm was causedby a redistributionof forces. This occurredbecauseof the
propagationof largecracksin the cornerarea,the resultof the critical sectionmovingfrom a
sectionin the column approximately300 mm below the constructionjoint to the section
wherethebeammeetsthecorner,seeFigure67.This behaviourconespondedwell with that
5 5

-- 67 of 100 --

toad,F [kN]
6 0 -
5 0 -
4 0 :
3 0 t
TensileForce[kNl
5 0 -
^ A +
- Conventionalreinforcement
detailing
- New reinforcementdetailing
30 40
Displacement,	d [mm]
Figure 65 Comparison of the load-displacementrelation for frame comers carried out with
new and with conventionalreinforcementdctailing.
20	t 0
Conventionalrein-
forcement detarling
F = 5 0 k N , 6 = 2 0 m m
New reinforcement
detailing
F = 4 3 k N . 6 = l 8 m m
30
0 200 400 600 800 1000 1200 1400
Position	x [mm]
Figure66 Comparisonof the tensileforcesof the reinforcementbarsin the framecomerfor
the frame cornerscarried out with new and with conventionalreinforcement
detailine.
) b

-- 68 of 100 --

+ # l	-x)q I
\ \ l
| / /	- t N	- / t - |
	- + # t
- - - - + b - l
/ \ \ \ \ I
( l
\ (
i l
\
si\ \ / l I
NI	\t\ .
, .	l l
. \ \ \ ( { l l i { l l ! l l J l l : I
\\\\ \ r +) l!{i it l "- j
. \ \ ) l $ # ) l l " I
'\\ \tlx'rlI I
\ \ \ \ \ \ / t / t
	\ \ \ \ \ \ / t /
\ \\\\\ / /
\ N l .
= = I : F ; f { - -
: l' - * - - - - z I l F = 4 9	l l
i ' , i l l d = 3 0	- / * - t t I
- + # t l	- - - - x > * - r I
; - T f i Y ] 1
Niiiii#ii]1'	- \ \ \ \ \ \ \ + l v l l t I
	^ - \ \ \ \ + \ \ \ \ \ l l
	- - - : : \ \ \ \ \ \ \ \ , l
	\ \ f \ X \ \ \ \ \ \ / /
\ . \ \ \ ) \ N \ / l	\ \ \ \ \ N | 2
+ + s + - ) \ \ -
- + # l	_ _ _ ? x ) a r _ l
.- \ \tf-l
Figure67 Crackpropagationin the cornerareafor the conventionalreinforcementdetailing
at differentloadlevels.
observedfor test specimenRV3, whereplastichingesdevelopedin a regionapproximately
300 mm below the constructionjoint, as well as in the sectionwhere the beam meetsthe
comer, seeFigure 59. The propagationof cracksin the cornerareaalso causedthe tensile
forcesin thereinforcementbarsin that areato increaseconsiderably,seeFigure68. The frame
cornerwith new reinforcementdetailingshoweda quite symmetricdistributionof the tensile
forces,with yielding of the reinforcementbars in the sectionsadjacentto the corner.The
distributionof the tensileforcesin the framecomerwith conventionaldetailingwas shiftedto
the left (into the column).This wasbecauseof the unsymmetricamountof reinforcementused
in the sectionsadjacentto the comer,seeFigure39. Yielding of the reinforcementbarswas
reachedabout300 mm below the constructionjoint, coincidingwith the sectionwherethe
bentreinforcementbars,extendingfrom the beam,ended.This behaviourcorrespondedwell
with that observedfor testspecimenRV3, wherea plastichingedevelopedin a sectionbelow
theconstructionioint. seeFieure59.
5'l

-- 69 of 100 --

TensileForce[kN] = 55 kN, 6= 26 mm
F = 5 0 k N , 6 = 2 8 m m
F = 4 9 k N , 6 = 3 0 m m
F = 49 k'-f{,d= 32 mm
50
40
r 0 -
0 * -
0 200 400 600 800 1000 1200 1400
Positionx [mm]
Figure68 Distributionof the tensileforcesalongthe reinforcementbarsin the framecorner
carried out with conventionalreinforcementdetailing.The tensile forces are
shownat the sameloadlevelsasthe crackpattems,seeFigure67.
4.5.4.2 The effect of fracture energy
The importanceof the fractureenergyusedin the analyseswas examined.The fractureenergy
was halved and an analysisof the specimenswith high reinforcementdetailing (general
responsemodel) and low reinforcementdetailing (refinedmodel) was carried out. In the
analysisof the specimenswith high reinforcementratio, the changeof stiffnessdue to
crackingoccurredsomewhatearlierthan when the halvedvalue of the fractureenergywas
used.However,the stiffnesswas then independentof the fractureenergy,which resultedin a
slightlylowermaximumloadcapacityat the samedisplacement,seeFigure69. In the detailed
analysisof the specimenwith low reinforcementratio, the effect of the fractureenergywas
somewhatmore distinct;an earlierchangein stiffnesswas observedand it was then slightly
affecteduntil yielding of the steel reinforcementwas reached.Furthermore,the maximum
load capacitybecamelower due to the decreasein fractureenergy;this resultedin a load-
displacementrelationbettercorrespondingto that obtainedin the tests,see Figure 70. In
Table 6, the maximum load capacities(and correspondingdisplacements)obtainedin the
FE analyses,for full and halved fracture energy,are comparedwith the maximum load
observedin the tests.It is importantto note that the maximum load levelsobtainedin the
analyses,listedhere,dependon the tensilestressof the reinforcementbars;thus,an analysis
in which the reinforcementbarshave obtaineda substantialhardeningwould show a higher
load capacity.This is the casein the anaiysisof the generalresponsefor the specimenswith
low reinforcementratio, in which the deformationcapacityof the steelreinforcementwas
almostreached,see Section4.5.2. Therefore,the load levels when the plateauin the load-
displacementrelation(i.e. yielding of the steelreinforcement)is reachedare comparedin
Table 7. For the specimenswith high reinforcementratio (both testsand analyses),this load
wasconsideredto havebeenreachedat the maximumload.
5 8

-- 70 of 100 --

L,oad,F
r 8 0-
1 6 0r
1 4 0 *
t20 -
100 *
8 0 +
6 0 *
40 I
20
0
ikNl
lr
T,
-/K;.
K\ \
^
z
-:- TestspecimenRV5
+ TestspecimenRV6
- Full fractureenergy
- Halvedfractureenergy
50	40	3 0	^!-ll	r0
Displacement,6[mm]
Figure69 The effect of fractureenergyin the FE analysisof the generalresponsefor
specimenswith highreinforcementratio.
t oad,F [kNl
50
+ TestspecimenRV7
+ TestspecimenRV8
- Full fractureenergy
- Halvedfractureenergy
20 30
Displacement,	S [mm]
Figure70 The effect of fractureenergyin the detailedFE analysisfor the specimenswith
low reinforcementratiowhenassumrng"good"bondcondition.
the
4 0 -
3 0 i
) v

-- 71 of 100 --

Table6 Comparisonof the maximum load capacitiesand correspondingdisplacements
obtainedin the FE analysesandobservedin the tests.
Test
specimen
Maximumload / Displacement
General response Detailedanalysis Observedin
test
lkNl / [mml
Full fracture
energy
lkNl / [mm]
Halvedfracture
energy
[kN] / [mm]
Full iracture
energy
lkNl / [mm]
lved fracturr
energy
l k N l / [ m m ]
Ha
RV5
RV6
RV7
RV8
1 7 6 I 2 4
4 9 t 7 0
1 1 1 I 1 A
A < I 1 a 4 1 t 1 9
14't I 29
1 5 0/ 3 3
4 2 / t 1 5
42 I 101
Table7 Comparisonof the loadlevelsandconespondingdisplacements	in the FE analyses
andthe testswhenthe plateauin the load-displacement	relationwasreached.
Test
speclmen
Load / Displacement
General response Detailedanalysis Observedin
test
[kN] / [mml
Full fracture
energy
lkNl / [mm]
Halved fractur(
energy
lkNl / [mm]
Full fracture
energy
l k N l / l m m l
Halvedfracturr
energy
l k N l / [ m m ]
R V 5
RV6
RV7
R V 8
t 1 6 I 2 4
4 0 t 1 3
1 1 1 t 1 A
+ l I t + 4 0 t 1 4
147| 29
t 5 0 / 3 3
3 9 t 2 2
3 9 t 3 5
4.s.4.3 Comparisonof plane stressand plane strain analyses
In the analysesof the test specimensa stateof planestresswas assumed.However,in a real
civil defenceshelterstructure,a stateof planestrarnis probablya more accurateassumption.
Therefore,to examinethe behaviourof a frame comer when plane strain is assumedan
analysisof a frame cornerwith the new detailingand a low reinforcementratio was carried
out. As can be seenin Figure 71, the structura.lbehaviouris similar for the frame comer
whethera stateof planestressor planestrainis assumed.Consequently,sincethe statein a
realstructureis somewherebetweenplanestressandplanestrain,the analysesassumingplane
stresspresentedhereshouldbe valid for the framecornerin a real structure.
60

-- 72 of 100 --

4 0 -
3 0 +
Lnad,F [kN]
5 0 =
'ot
+ TestspecimenRV7
+ TestspecimenRV8
- Plare stressanalysis
- Planestrainanalysis
20 25 30
Displacement,6	[mm]
Figure7l Comparisonof the load-displacement	relationsfor analyseswhereplanestressand
plane strain was assumedfor the specimenswith new detailing and low
reinforcementratio.
Discussion
The resultsof the FE analysesconespondedquite well with the resultsfrom the experiments,
as can be seenin Section4.5; the behaviourwas similarfor both the maximumloadcapacity
obtained and the stiffness of the structure.Furthermore,the agreementbetween test
observationsand FE analyseswas quite good for the crack patternand the distributionof
tensileforcesalong the reinforcementbarsin the frame corner.
Due to the spallingof the concretesidecover,the maximumload obtainedin the analysisof
the specimenswith high reinforcementratio does not coincide with the load capacities
observedin the tests.Instead,the maximum load level reachedin this analysisreflectsthe
capacitythat the test specimenswould have had if the spalling of the concretehad not
occurred.Consequently,a directcompadsonof the maximumloadcapacitiesobservedin the
testsand obtainedin the FE analysiscannotb€ madefor thesespecimens.However,by using
the estimatedload capacitiesin Table 5, an indirectcomparisonis possible;the estimations
listedtherecorrespondwell to the load capacitiesobtainedin the FE analyses.By comparing
the estimatedand observedload capacitiesfor the specimenswith conventionaldetailing
(RVl and RV3) and for the specimensused in the secondtest series(RV5 to RV8), a
statementon the efficiency of the reinforcementdetaiiing can be made.The estimatedload
capacitieslistedin Table5 suggestthat the load capacityof specimensRV5 andRV6 should
have been somewhathigher than that of specimenRVl, and that the load capacityof
specimensRV7 and RV8 should have been somewhatlower than that of specimenRV3.
Accordingly,a comparisonof the maximum load observedfor specimenRVI with the load
obtainedin the FE analysisfor the specimenswith high reinforcementratio indicatesthat the
l 5	l 0
4.6
b i

-- 73 of 100 --

conventionaland the new reinforcementdetailingsbehavedapproximatelythe samefor these
specimens.This statementis still moreevidentfor the specimenswith low reinforcementratio
becauseof the similaritiesin the load-displacementrelationsobservedin the tests with
conventionalandnew reinforcementdetailings.
The detailedFE analyseshaveshownthat the bond-sliprelationaffectsthe crackpatternin the
framecornerand that the stiffnessof the structureis affectedby the bond-sliprelationup to
the point at which the steelreinforcementyields:the higher the stiffnessof the bond-slip
relation, the higher the stiffness of the structure.This behaviour occurs when the
reinforcementbarsslip insteadof stretching,which for a weakerbond-sliprelationresultsin a
lower stresslevel in the reinforcementat the same displacement.Consequently,when
assuminga weak bond-sliprelation,a larger displacementof the frame comer is obtained
when the steelreinforcementstartsto yield. However,onceyielding of the reinforcingsteel
was reachedin the analyses,the effect of the bond-slip relation on the load capacity was
negligible.Sincethe bond-sliprelationassumedin the analysesdeterminedthe meancrack
spacingin the structure,the distributionof the tensileforces along the reinforcementbars
adjacentto the frame cornerwas also affected.When the crackingin the comer areawas
limited, the reinforcementbars positionedinside the corner all showedapproximatelythe
samedistributionof low tensileforces:however,oncelargecrackswereformedin the comer,
the tensileforcesin the reinforcementbarsincreasednotably.
Due to the disruptionof the FE analyses,it is difficult to draw conclusionsaboutwhat effect
the bondconditionhason the total deformationcapacityof the framecorner.However,when
a stiffer bond-siiprelationwas assumed,highertensilestrainsin the steelreintbrcementbars
wereobserved.This indicatesthat,if ruptureof the reinforcementbarsis the causeof failure,
then the deformationcapacityof the frame cornerwould be lower for a stiffer bond-slip
relation.The maximum concretestrain in compressionwas more or less unaffectedby the
differentbond-sliprelations.
The influenceof the weaknessof the constructionjoint in the framecornerwas limited to the
initial crackingstageandhadnegligibleeffecton the generalbehaviourof the structure.After
the appearanceof the first major crack,the behaviourof the structurewas approximatelythe
same,independentof the strengthmodelledin the joint. The incorrectpositioningof the
reinforcementloops in the column had a limited effecton the behaviourof the framecorner.
The load capacityobtarnedfrom the analyseswas found to be approximatelythe same,
regardlessof whetherthe reinforcementloopswerepositionedconectlyor not.
The FE analyseshave shownthat a frame cornermadewith the conventionalreinforcement
detailing may have a somewhathigher load capacitythan a frame corner with the new
reinforcementdetailing.This is due to the greateramountof reinforcementpositionedin the
sectionsadjacentto the cornerarea.However,this higher load capacityis only temporary
sincea redistributionof forces,reducingthe load capacityto a level similar to that obrained
whenusingthe new reinforcementdetailing,soonoccurs.If the critical crackforms as shown
in Figure'12,the contributronto the load carryingcapacityof the shortbent bars,extending
from the beaminto the column,would decreaseconsiderably.In the analysescarriedout, the
weaknessof the constructionJoint was modelledby reductionof the tensile strengthand
fractureenergyin the elementrow next to the comer.Thus,cracksadjacentto the comerwere
madeto propagatewithin this weaknessin sucha way that the markedbendhad considerable
effect on the load capacity.To simulatewhat would happenif the barsextendingfrom the
62

-- 74 of 100 --

beam into the column did not have any effect on the critical sectionadjacentto the corner,the
bent pan of them was removed,seeFigure 72. Thereby,the propagationof a largecrack above
the bent bars was simulated in an approximate way. As can be seen in Figure 73, this
modification had a notable effect on the stnrctural behaviour after yielding of the
reinforcement,resulting in a load-displacementrelation similar to that obtained in the frame
corner with new detarling. Furthermore, the distribution of tensile forces along the
reinforcement bars in the comer was similar to that obtained when using the new
reinforcement detailing. Consequently,plastic hinges may develop differently in frame
corners made with the new and the conventional reinforcementdetailings. With the new
reinforcementdetailing, plastic hinges always develop adjacent to the corner in both the
column and the beam. However, in a frame comer with the conventional reinforcement
detailing, the main plastic hinge may develop, dependingon the crack propagation.rn the
section below the construction joint where the bent bars, reaching out from the beam, end.
The statementsmade above, treating the effect of the construction joint and the bond-slip
relations on the structural behaviour, hold true also for a frame corner made with the
conventionalreinforcementdetailing.
The analysescarried out with different element meshes in the corner region have shown that
the cracks tend to propagate parallel to the mesh lines. This phenomenon has also been
observedby Rots (1988), who explainsthat it is causedby interlockingbetweenthe elements
and coupling between the integration points. lmprovements can be made by rotating the
element mesh and thereby adapting it to the expected crack directions. However, this
procedureis undesirablesince it may severelydecreasethe simplicity of the mesh generation
when using the smeared crack approach. Therefore, Rots suggestsusing triangular elements
placed in a cross-diagonalmesh, thus increasingthe number of lines which the cracks can
follow, see Figure 74a. However, for the analyses carried out in this study, the use of a
triangular bisectional mesh in the comer probably would have been sufficient, see Figure 74b.
Thesepossibleimprovementsof the elementmesh was not examinedin the analvses,
Possiblecrack
path
that
Figure72 Possiblecrackpathin the column-comerregion.To simulatethe effectof sucha
cnticalcrackin an approximativemannerthe bentpart of the barsextendingfrom
the beaminto the colurnnwasremoved.
Part of the bars
wasremoved
63

-- 75 of 100 --

40
Load,F [kN]
5 0 -
30 --
2 0 +
10 -r
Figure 73 Load-displacement relation for
conventional(modified as shown
a )
- Conventionalreinforcement
detailing(modified)
- New reinforcementdetailins
30
Displacement,	6 [mm]
frame corners carried out with new and with
in Figure 72) reinforcementdetailing.
D )
20
Figure 74 Possible improvement of the
comer region to obtarn a more
bisectionalmesh.
simplfied elementmesh (seeFigure 37) in the
accuratecrackpattem:a) cross-diagonalmesh,b)
The two-dimensional	planestressmodelsusedin the analyseshaveworkedwell up to a load
level correspondingto yielding of the reinforcement;the numericalproblemsencountered
have mostly beencausedby the concretein compression.In accordancewith observations
madeby Claesonet al. (1996),it hasbeenfound that oncethe ultimatecompressivestrength
of the concretehas beenreached,the gradientof the descendingsofteningbranchis of great
importancein further simulatingthe behaviourof the structure.This observationholdstrue
also for the concretein tension:a more sradualstress-strainrelationdescribinsthe cracked

-- 76 of 100 --

concreteintroducesfewer numericalproblemsin the analyses,see Plos (1995).Sincethe
fractureenergyandthetensilestrengthdeterminetheultimatecrackopening.andtherebyalso
the gradientof the stress-strain	relation,the valueof the fractureenergycan haveconsiderable
eifecton thefeasibilityof simulatinga problem.Accordingly,fewernumericalproblemswere
encountered	whenthe reinforcement	barsweremodelledusingtrusselementsin combination
with interfaceelementsthan when modelling the reinforcementbars using embedded
reinforcement.This was becauseof the more gradualstress-strainrelationobtainedfor the
concretesofteningwhen dividingthe ultimatecrack openingby the finite elementlength
insteadof the meancrackspacing,seeSection4.2.1.1.The bond-sliprelationassumedin the
analyseshadno notableeffecton reachingconvergencein the analyses.
The effect of the fractureenergyused in the analyseswas examined.It was found that a
reductionto 50 Voin the fractureenergyhad relativelylittle effect of the structuralbehaviour
in the analysesof the specimenswith either the high or low reinforcementratio; its
importancewas proportionallyhigherfor the specimenswith the low reinforcementratio. In
conjunctionwith the slightlyhigherloadcapacitiesobtainedin the detailedanalysescompared
to that observedin the tests,this indicatesthat the fractureenergyusedin the analysesmight
have been somewhattoo high. However, it does not affect the results presentedand
conclusionsdrawnin this study.
4.t Analysesof a Cantilever Beam
4.7.1 General
Due to the numericalproblemsencounteredin the FE analysesof the framecorner,it was not
possibleto statewith certaintywhat effectthe bondconditionor the mechanicalpropertiesof
the steelreinforcementhave on the deformationcapacity.Therefore,a simpler model of a
cantileverbeam,with reinforcementbarspositionedonly at the tensileside of the structure,
was established,seeFigure75. Part of the connectingcolumn was includedin the modelso
that the anchorageof the reinforcementbars in the column could be modelled.The
reinforcementbarsin the wall were splicedto the reinforcementbars in the beam;the barshad
approximatelythe sameanchoragelength as in the frame comer test specimensand were
providedwith a bendto preventpull-outfailurefrom the wall.
To examinethe effect of the bond conditionon the load and the deformationcapacityof
structuresthat have failed from differentcauses,the analysesof the cantileverbeam were
carried out with two different reinforcementratios. A low amount of reinforcement,
conespondingto 4 010 1p = 0.20),was usedto obtainruptureof the reinforcementbarsanda
higheramount,conespondingto 4 Q16(p = 0.52),was usedto reachultimatecompressive
stressin theconcreteshortlyafteryieldingof the reinforcementhad occurred.
65

-- 77 of 100 --

a a a a a a a a
i
, 600 \,
l---_--'''___-
A-A
Figure75 Dimensionsof the cantileverbeammodelandpositionof the reinforcement	bars.
Amounrof steelreinforcementand anchoragelengthof the beamwith the high
reinforcementratioaregivenbetweenbrackets.
The materialparametersfor the steelreinforcementand the bond-sliprelationsusedin the
analysesof the cantileverbeamwere the sameas thoseusedin the column in the detailed
analysesof the frame comer.The sameincorrectparametersfor concretein compressionas
usedin theframecomer,seeSection4.5.1andAppendixB, wereusedalsofor thecantilever
beamwith low reinforcementratio.However,in the analysesof the cantileverbeamwith
higherreinforcementratio,a more accuratestress-strainrelationfor compressedconcretewas
used(@wassetto l0o, seeAppendixB).
ln the analysesof the beamwith low reinforcementratio, the concretein compressionnever
reachedits ultimatestrength;consequentlythe use of the incorrectstress-strainrelationhad
negligibleeffecton the results.However,for the cantileverbeamwith higherreinforcement
ratio,crushingof the concretewas the causeof failure,which showsthat it is moreimponant
to simulatethe compressedconcreteaccurately.This is why the more accuratestress-strain
relationfor concretein compressionwas used.Further,to examinethe importanceof the
descendingbranchfor concretein compression,analysesusing a more gradualstress-strain
relation(denotedmodifiedstress-strain	reiation)werealsocarriedout, seeFigure76.
(-
I
300I
,
7-
i
300I
t
300
/
Trusselement
4 Qtl (4 Qr6)
700(9s0)
66

-- 78 of 100 --

Stress.o, [MPal
3 0 -
-r- Original stress-
strarnrelation
+- Modified stress-
strainrelation
20
Strain,e. [10'3]
Figure76 Uniaxial stress-strainrelationsfor concretein compressionused in the analysesof
the cantileverbeam with high reinforcementratio. The angle of intemal friction, d,
was set to 10o,seeAppendix B.
The finite element model	4.7.2
To definethe geometryof thebeam,2l5 planestresselementswereused,seeFigure77.The
reinforcementbars and the interactionbetweenthe reinforcementand the concretewere
modelledusing48 trusselementsin combinationwith 48 interfaceelements
r = Node constrainedin
x and y directions
Figure77 Finiteelementmeshandboundaryconditionsof thecantileverbeam.
v
L_
o /

-- 79 of 100 --

4.7.3
4.7.3.1
Resultsof the analyses
General
The generalbehaviourof the load-displacement	relationof the cantileverbeamwas found to
be independentof the iterationmethod.However,as in the detailedFE analysesof the frame
corner,the resultsobtainedwhen using the Modified Newton Raphsonmethodwere quite
"smooth"while the resultsachievedwhenusingBFGS secantmethodfluctuateda lot. When
using the more robustBFGS secantmethod,it was possibleto analysethe cantileverbeam
with low reinforcementratio until final failure (ruptureof the reinforcementbars).The load-
displacementrelationfrom the FE analysesof the cantileverbeam with low reinforcemenl
ratio arecomparedfor the two iterationmethodsin Figure78.
Unlessotherwisestated,thefollowing assumptionsweremadein the FE analyses:
r bondcondition
r reinforcementtype
o iterationmethod
t oad,F [kN]
4 0 _
- "good"(seeSection4.2.3),
= "normalratio"(seeSection4.2.2),and
= BFGSsecantmethod(seeSection4.3).
- BFGS secant
method
- Modrfied Newton-
Raphson
1 5 0
Displacement,	6 [mm]
Figure 78 Comparison of the effect of the iteration methods used in the FE analysesof the
cantileverbeam.
4,7.3.2 Effect of the bond-sliprelation
Two differentbond-sliprelations,denoted"good"and"other",werecomparedin theanalyses
of the cantileverbeam.A comparisonof the load-displacement	relationsfor the differentbond
conditionsis shownin Fisures79 and80.
r00
68

-- 80 of 100 --

Load,F [k]Jl
4 0 -
- , ' G o o d , i b o n d
condition
- ,,other,'bond
condition
1 5 0
Displacement,6 [mm]
Figure79 l,oad-displacement	relationfor the FE analysesof the cantileverbeamwith low
reinforcementratio for differentbondconditions..
100	50
l-oad,F [kN]
100 :
8 0 :
6 0 *
4 0 '
i
modrtled stress-
straln relatlon L
l,/-
originalstress-
strainrelation - ,'Good"bond
condition
- "other' bond
condition
1 5 2 0 2 5
Displacement,6 [mm]
Figure80 toad-displacementrelationfor the FE analysesof the cantileverbeamwith high
reinforcementratio for different bond conditions and different stress-strain
relationsof concretein compression.
y==l_:,
t 0
69

-- 81 of 100 --

4.7.3.3 Effect of the reinforcement type
The FE analysesof the cantileverbeam with low reinforcementratio could simulatethe
behaviour of the structureto the extent that the maximum stress value of the steel
reinforcementwas reached.Thus, the effect that different mechanicalpropertiesof the
reinforcingsteelhave on the deformationcapacityof the structurecould be studied.Three
differentstress-strain	relationsof the steelreinforcementwerestudiedin the FE analyses,see
Section4.2.2.The resultingload-displacement	relationsfor the differentreinforcementtypes
arecomparedin Figure81.
The abruptshifts obtainedin the analysisassuming"high ratio" were due to a snap-through
behaviour(seeBathe(1996))obtainedwhen the maximumbond stresswas reachedin one of
the interfaceelementsin the regionof the beam closestto the column.This resultedin an
decreaseof the tensileforce (unloading)in the trusselement,modellingthe reinforcement
bars,connectedto the interfaceelement.When the bond stressreachedits minimum value(at
a correspondingslip, sr, accordingto Figure27) oneof the two trusselementsadjacentto the
unloadedtrusselementstartedto hardenwhich resultedin a correspondingincreaseof the
externalload,F. In the analyses,the amountof trusselementsthat had reachedyielding,and
thus contributingto a higher deformationcapacity,dependedon whethera snap-through
behaviouroccurredor not. [n the beamswith "low ratio" and "norma]ratio" steel,threetruss
elementsreachedyielding(of which only one elementhardened);in the beamwith "high
ratio" steel,five trusselementsreachedyielding and of these,four elementsalso startedto
harden.
tnad, F [kN]
4 0 -
- ,'Highrario',
- 'rNormalratio''
"[,ow ratio
r00 150
Displacement,6 [mm]
Figure8 I load-displacementrelationfor the FE analysesof thecantileverbeamfor different
mechanicalpropertiesof the steelreinforcemenr.
10

-- 82 of 100 --

4.7.4 Discussion
The analysesof a cantileverbeamwerecarriedout to more thoroughlyexaminethe effectsof
differentbond-sliprelationsand the mechanicalpropertiesof the steel reinforcement.The
displacement	at final failurein the beamwith low reinforcementratio,when "other"bond
conditionwas assumed,was approximately30 % higherthan that obtainedin the beam
assuming"good"bondcondition.This supportsthe indicationsof the analysesof the frame
corner: a weak bond-sliprelation has a positive effect on the deformationcapacityof a
structurewhen ruptureof the reinforcementbarsis the causeof failure.The load capacityof
the beamwas,as for the framecomer,relativelyunaffectedby the bond-sliprelation.In the
beamwith high reinforcement	ratio.the bond-sliprelationhad negligibleeffecton both the
maximumload capacityand the deformationcapacity.However,it shouldbe notedthat the
analysesindrcatethat a weakerbond condition has a very minor negativeeffect on the
deformationcapacitywhencrushingof theconcreteis the causeof failure.
When a weakbond conditionwas assumed,the differencein tensilestressbetweenthe truss
elements(modellingthe reinforcementbars) connectedto each other, was less than that
observedwhen assuminga stiff bond condition.This causeda more rapid developmentof a
largeplastichinge in the reinforcementbarsonceyieldinghad occurred,which resultedin a
higherdeformationcapacityof the cantileverbeam.ln the analyseswhere crushingof the
concretewasthe causeof failure,the steelreinforcementdid not startto harden.In a structure
wherehardeningof the steelreinforcementis followedby crushingof the concrete,the bond-
slip relationmay still affectthe deformatroncapacity.However,it is importantto notethat a
stiff bond-sliprelationha-sa positiveeffecton the crack width in a serviceabilitylimit state,
resultingin morebut smallercracksin a structure;thus,a stiff bond-sliprelationgivesthe
structurea greaterresistance	to corrosion.
The effectof threedifferentmechanicalpropertiesof the steelreinforcementwas investigated
in this study.Apart from differencesin the loadcapacity,which weredue to drfferentultimate
strengthsof the reinforcementbars,the deformationcapacitywas noticeablyaffectedby the
mechanicalpropertiesof the steelreinforcement;the cantileverbeammodelledwith the "high
ratio" steelproduceda displacementat failure approximately50 Volargerthan that obtained
whenusingthe "normalratio" steel.ln the analyses,the increasein the displacementat failure
was not proportionalto the ratio of the differentmechanicalproperties;wherethe "low ratio"
steelwasassumed,the displacementat failurewasapproximately95 7cof thal obtainedin the
beam which had a "normal ratio" steel. This behaviour is probably partly due to the
discretisationin the finite elementmethod.If a more denseelementmeshhad beenusedto
modelthe regionnext to the column,a largerplasticregionin the steelreinforcementnext to
the column had probablybeen obtainedfor the beam with the "normal ratio" steel and,
consequently,	the totaldisplacementat failurewould havebeenlarger.Therefore,it is difficult
to make a certain statementof how much the different mechanicalpropertiesof the steel
reinforcementaffectthe deformationcapacityof a concretestructure.However,the difference
in total displacementat final failure of approximately50 7c, betweenthe beamswith "high
ratio"and "low ratio" steel,seemsquitereasonable.
When ruptureof the reinforcementbarsis the causeof final farlure,the valueof the ultimate
strainof the steelreinforcementprobablyaffectsthe total displacementin the analysesof the
cantileverbeam.For a stnicturewherecrushingof the concreteis the causeof failure, the
importanceof the steelductilitv dependson what strarnvalueshave been reached.If the
1 1

-- 83 of 100 --

reinforcementbarshavejust startedto yield whenthis happens(asin the cantileverbeamwith
the high reinforcementratio analysedabove)the ductility of the steelhas no effect at all.
However,when the reinforcementbars have startedto harden,the mechanicalpropertiesof
the steelmay be important,sinceit is thesethat determinethe capacityfor redistributionof
forcesin a concretestructure,seeOberg( 1976).
ln summary,to obtaina ductilestructure,the most importantfactoris the yieldingof the steel
reinforcement;the longerthe reinforcementbars have yieldedbeforefinal failure,the more
ductileis the behaviourobtained.Furthermore,oncea strainlargeenoughto obtainhardening
is reached,the mechanicalpropertiesof the steelcan be of greatimportance;the plastichinges
in a structurethen spreadover a largerareawhich offers an enhanceddeformationcapacity.
The stiffnessof the bond-sliprelationmay affect the deformationcapacity,providedstrain
hardeningof the reinforcingsteelis reached.When ruptureof the reinforcementbarsis the
causeof failure,a weakerbond-sliprelation,as mentionedabove,hasa positiveeffecton the
deformationcapacity.However, since a stiffer bond-slip relation resultsin higher tensile
strainsin the steel reinforcement,the steel hardenssooner.Consequently,providedthat
hardeningof the steelreinforcementis reached,a stiff bond-sliprelationmay havea positive
effecton thedeformationcapacitywhencrushingof the concreteis the causeof failure.
7 2

-- 84 of 100 --

\
5 . 1
CONCLUSIONS
General
The reinforcementdetailingallowedin the presentSwedishregulationsfor the designof
frame cornersin concretecivil defencesheltersis complicated,which makesit difficult to
carryout correctly.Therefore,a new designproposalhasbeenstudied.Eight full-scaleframe
cornerssubjectedto a negativemomentwere tested.The parametersvariedin the testswere
the reinforcementdetailing, the reinforcementratio, the reinforcementtype and the
configurationof the reinforcementbars. Finite elementanalyses,using non-linearfracture
mechanicsand plasticity, were carried out for frame corners with the new and the
conventionalreinforcementdetailings.Furthermore,the effects of the weaknessof the
constructionjoint, the interactionbetween reinforcementand concrete,the mechanical
propertiesof the steelreinforcement,and incorrectpositioningof reinforcementloops were
examined.
The tests and the FE analysesconductedhave shown that the conventionaland the new
reinforcementdetailingsfor practicalpurposesareequivalentfor a framecornerstructurewith
a low amountof reinforcement.Comparisonsof testsandFE analysesindicatethat this is also
the casefor a framecornerwith a high amountof reinforcement.Thus,the testsand analyses
supportthe idea that the new alternativeis suitableto use insteadof the conventional
reinforcementdetailing.
The testshaveshownthat,whetheror not the reinforcementbarsare splicedin contactwith
eachother,thereis no significantdifferencein the behaviourof the framecornermadewith
the new detailing.The concretesidecover spalledoff the framecornerof the specimenswith
the high reinforcementratio. This indicatesthat the expressionto determinethe minimum
bending radius of the reinforcementin Boverket's Handbook for ConcreteStructures,
BBK 94, Boverket(1994),shouldnot be usedfor reinforcementdetailingsof the t)?e usedin
the new proposal.
To obtain a ductile structure,the most important factor is the yielding of the steel
reinforcement;the longerthe reinforcementbarshave yieldedbeforefinal failure,the more
ductile is the behaviourobtained.However, the bond-slip relation and the mechanical
propertiesof the steel reinforcementcan also have significanteffect on the deformation
capacity.The FE analyseshave shown that the stiffnessof the structureis affectedby the
bond-sliprelationup to the point at which the steelreinforcementstartsto yield: the higher
the stiffnessof the bond-sliprelation,the higherthe stiffnessof the structure.Dependingon
the causeof final failurethe bond-sliprelationcanhavea noticeableeffecton the deformation
capacityof a structure.When ruptureof the reinforcementbarsis the causeof final failure,a
weak bond-sliprelationhas a positiveeffect;when crushingof the concreteis the causeof
failureandhardeningof the steelreinforcementis reached,a stiff bond-sliprelationmay have
a positiveeffect. However,when hardeningof the steel reinforcementis not reachedand
crushingof the concreteis the causeof failure,the bond-sliprelationhasnegligibleeffecton
the deformationcapacityof the structure.The maximumloadcapacityis relativelyunaffected
by the bond-sliprelation,independentof the amountof reinforcement.However,a stiffer
bond-sliprelation does have a positive effect on the crack width, resultingin more, but
smaller,cracksin a structurewhich can be positiveconcerningthe risk of corrosionof the
't3

-- 85 of 100 --

steel reinforcement.It was also shown that the mechanicalproperties of the steel
reinforcementcan havea considerableeffecton how largethe regionof yieldedreinforcement
will be; consequently,it can have a significanteffect on the deformationcapacityof a
structure.
The weaknessof the constructionjoint affectsthe structuraibehaviourof the frame corner
only in the initial crackingstage;its effect on the maximumload capacityis negligible.The
FE analyseshaveshownthatan incorrectpositioningof the reinforcementloopsin the column
of the framecornerhasa limitedeffecton the maximumloadcapacity.
It hasbeennotedthat the crackshavea tendencyto propagateparallelto the elementmeshes
and,consequently,the crackpatternin a structureis slightlydependenton the elementmesh.
The BFGS secantmethodwas found to be a comparativelyrobust iterationmethod,well
suitedfor the kind of FE analysescarriedout in this study.Fewernumericalproblemswere
encounteredin the analyseswhen separateelementswere usedto model the reinforcement
bars:this is dueto the lower sradientin the stress-strain	curveusedfor the crackedconcrete.
5.2 Suggestionsfor Future Research
tn this study, tests and FE analyseshave been carried out only for a static loading. However, a
civil defencesheltermust withstand impact loading such as explosionsand falling buildings;
consequently, the behaviour of the new reinforcement detailing when subjected to impact
loading needs to be studied.
The use of reinforcement loops has been examined only in frame comers connecting two
structural members, i.e. a beam and a column. Therefore, an examination of the use of
reinforcement loops in other t)?es of connections,e.g. T-joints or corners with an angle wider
than 90o, would be valuable.
a A

-- 86 of 100 --

6 REFERENCES
AB SvenskByggtyanstand CementaAB (1990):BetonghandbokKonstruktion,utg6va2
(ConcreteHandbookDesign,secondedition.In Swedish).AB SvenskByggqiinst'791pp.
BatheK-J. (1996):FinireElementProcedures.	Prentice-Hall,	EnglewoodCliffs, New Jersey
1 0 3 7p p .
BazantZ.P. andOh B.H. (1983):Crackbandtheoryfor fractureof concrete.Materialsand
S t r u c t u r e s ,	R I L E M ,V o l . 1 6 ,N o 9 3 ,M a y - J u n e1 9 8 3 ,p p . 1 5 5 - 1 7 7 .
BonacciJ. and Pantazopoulou	S. (1993):Parametriclnvestigationof Joint Mechanics.ACI
S t r u c t u r a l	J o u m a l ,V . 9 0 , N o . 1 ,J a n . - F e b .	1 9 9 3 ,p p .6 l - 7 1 .
Boverket (1994): Boverkets handbok for Betongkonstruktioner	BBK 94, Band I,
Konstruktion(Boverket'sHandbookfor ConcreteStructures,BBK 94, Vol. I, Design.In
Swedish).Boverket,Byggavdelningen,	Karlskrona,Sweden185pp
BST Byggstandardiseringen	(1987),Betongprovning	med SvenskStandard,BST handbok12,
(ConcreteTesting accordingto Swedish Standard,BST Handbook 12. In Swedish).
SIS- standardiseringskommisionen	i Sverigeoch SvenskByggtliinst,272 pp.
CEB ( 1983): Bond Action and Bond Behaviour of Reinforcement,CEB Bulletin
d ' l n f o r m a t i o nl 5 l , 1 5 3p p .
CEB (1993): CEB-FIP Model Code 1990, Design Code. Thomas Telford, l-ausanne,
Switzerland,437 pp.
ChenW. F. (1982):Plasticityin ReinforcedConcrete.McGraw-Hill,USA,474pp.
CheungP. C., PaulayT., Park R. (1993):Behaviourof beam-columnjoints in seismically
l o a d e dR C f r a m e s .T h eS t r u c t u r a l	E n g i n e e r ,	V o l . 7 1 ,N o . 8 , 2 0 A p r i l 1 9 9 3 ,p p . 1 2 9 - 1 3 8 .
ClaesonC., Gylltoft K. (1996): SlenderHigh-StrengthConcreteColumnsSubjectedto
EccentricLoading.Submittedfor publicationin Joumalof StructuralEngineering.
Collins M. P. and Mitchell D. (1991): PrestressedConcreteStructures.PrenticeHall,
EnglewoodCliffs,New Jersey,pp.766.
Elfgren L., editor (1989): FractureMechanicsof ConcreteStructures,From Theory to
Applications.Report of the technicalcommittee90-FMA FractureMechanicsto Concrete
- Application,RILEM. ChapmanandHall, London,407 pp.
Eligehausen	R., Popov8.G., BeneroV.V. (1983):Local Bond Sress-slipRelationships	of
DeformedBarsunderGeneraiizedExcitations.ReportNo. UCB/EERC-83123,	October1983,
Universityof Califomia,Berkeley,California,i61 pp.
/ )

-- 87 of 100 --

EngstrdmB. (1992):Ductility of Tie Connectionsin PrecastStructures.Division of Concrete
Structures,ChalmersUniversityof Technology,Publication92:1,Gdteborg,452pp.
GambarovaP. G. (1989):Steel-to-concrete	bondafterconcretesplitting:testresults.Materials
andStructures,1989,22,pp. 35-47.
GylltoftK. (1983):FractureMechanicsModelsfor Fatiguein ConcreteStructures.	Divisionof
StructuralEngineering,	LuleAUniversityof Technology,DoctoralThesis1983:25D,210pp.
HansonW. andConnorW. (1967):SeismicResistance	of ReinforcedConcreteBeam-Column
Joints.ASCEJoumalof theStructuralDivison93(5),pp. 533-560.
HillerborgA., Mod6erM. andPetersson	P-E.(1976):Analysisof CrackFormationandCrack
Growth in Concreteby means of FractureMechanicsand Finite Elements.Cementand
ConcreteResearch,	Vol.6, No. 6, Nov. 1976,pp. 773-182.
JohanssonM. (1995):New ReinforcementDetailingin FrameCornersin Civil Defence
Shelters - Experiments and Fracture Mechanics Analyses, Chalmers University of
Technology,Divisionof ConcreteStructures,	Report95:2,Goteborg,70 pp,
Johansson	M. (1996):Non-linearFiniteElementAnalysesof FrameCornersin Civil Defence
Shelters.ChalmersUniversityof Technology,Divisionof ConcreteStructures.Report96:3,
Gciteborg,70 pp.
Kwak H-G. and Filippou F. C. (1990):Finite ElementAnalysisof ReinforcedConcrete
StructuresunderMonotonicl,oads.Departmentof Civil Engineering,Universityof California
Berkeley,Califomia,ReportNo. UCB/SEMM-90/14,I l3 pp.
LundgrenK. and Plos M. (1996): Splicingof Reinforcementin Frame Corners:Finite
ElementAnalyses.ChalmersUniversityof Technology,Division of ConcreteStructures,
Report96:2,Gtiteborg.13 pp.
Luo Y.H., DurraniA.J.,Bai S., Yuan J. (1994):Studyof ReinforcingDetailof TensionBars
in FrameCornerConnections.ACI StructuralJournal,V. 9l, No. 4, pp. 486-496.
LutzL. A., GergelyP. (1967):Mechanicsof Bond and Slip of DeformedBeusin Concrete.
A C I J o u r n a l ,N o v . 1 9 6 7 ,p p . 7 1 l - 7 2 1 .
MagnussonJ. (1997):LicentiateThesisto be publishedin 1997.ChalmersUniversityof
Technology,Division of ConcreteStructures,Gciteborg.
Mayfreld8., Kong F-K. BennisonA. (197l): CornerlointDetailsin StructuralLightweight
Concrete.ACI Journal,May 1971,pp.366-312.
Mayfield8., Kong F-K, BennisonA. (1972):StrengthandStiffnessof LightweightConcrete
Corners.ACI Journal,July 1972,pp.420-421.
NilssonI. H. E. (1973):Reinforcedconcretecornersandjoints subjectedto bendingmoment.
NationalSwedishInstitutefor Building Research,DocumentD7:1973,249pp.
7 6

-- 88 of 100 --

NilssonI. H. E. andLosbergA. (1976):RernforcedConcreteComersandJointsSubjectedto
BendingMoment.ASCEJoumalof theStructuralDivision,102(6),pp. 1229-1254.
NoghabaiK. (1995):Spliningof Concretein the AnchoringZone of DeformedBars: A
FracrureMechanicsApproachto Bond. Division of StructuralEngineering,Lulei University
of Technology,LicentiateThesis1995:26L.170pp.
PaulayT., ParkP. PriestleyM. J. N. (1978):ReinforcedConcreteBeam-ColumnJointsUnder
SeismicActions.ACI Journal,Proceedings	V. 75,No. I 1,Nov.,pp. 585-593.
PlosM. (1994a):Ny armeringsskarvfcirramhorniskyddsrum(New ReinforcementSplicefor
Frame Cornersin Civil Defence Shelters.In Swedish).Division of ConcreteStructures,
ChalmersUniversityof Technology,Report94:2,21pp.
PlosM. (i994b): Splicingof Reinforcementin FrameComers-ExperimentalStudies.Nordic
ConcreteResearch,	Publ.no. 14,TheNordicConcreteFederation,	pp 103-121.
Plos M. (1995): Applicationof FractureMechanicsto ConcreteBridges - Finite Element
Analyses and Experiments.Division of Concrete Structures,Chalmers University of
Technology,Publication95:3,Gijteborg,127pp.
RestrepoI., ParkR., BuchanonA. H. (1995):Teston Connectionsof EarthquakeResisting
PrecastReinforcedConcretePerimeterFramesof Buildings.PCI Journal,July-Aug. 1995.,
p p .4 4 - 6 1 .
RILEM 50-FMC (1985):Determinationof the FractureEnergyof Mortar and Concreteby
Means of Three-pointBend Tests on NotchedBeams.Materialsand Structures,Vol. 18,
pp. 285-290.
RobertsonI. N. andDurraniA. J. (1992):Gravitytoad Effecton SeismicBehaviorof Interior
Slab-ColumnConnections.	ACI StructuralJournal,V. 89,No. 1,Jan.-Feb.,pp.37-45.
Rots J.G. (1988): ComputationalModelling of ConcreteFracture.Departmentof Civil
Engineering,Delft Universityof Technology,pp. 132.
SkettrupE., StraboJ., AndersenN. H. (1984):ConcreteFrameComers.ACI Joumal,Nov.-
D e c .1 9 8 4 ,p p . 5 8 7 - 5 9 3 .
Swann R. A., (1969):Flexural Strengthof Comersof ReinforcedConcretePortalFrames.
TechnicalReportTRA 434,CementandConcreteAssociation,London,Nov. 1969,14pp.
SwedishRescueServiceBoard (1994): ShelterRegulations,SR - English edition. Statens
Rriddningsverk,	Publication854-168194,94 pp.
TepfersR. (1973):A Theoryof Bond Applied to OverlappedTensileReinforcementSplices
for DeformedBars. Division of ConcreteStructures,ChalmersUniversity of Technology,
Publication73:2,Gciteborg,328 pp.
't'7

-- 89 of 100 --

TNO (1993): DIANA-5.I. TNO Building and ConstructionResearch- Departmentof
ComputationalMechanics,P.O.Box 49,2600AA Delft, The Netherlands.
TNO (1996): DIANA-6.1. TNO Building and ConstructionResearch- Departmentof
EngineeringMechanicsand lnformation Technology,P.O. Box 49, 2600 AA Delft, The
Netherlands.
TsonosA. G., TegosI. A., PenelisG. Gr. (1992):SeismicResistanceof Type 2 Exterior
Beam-ColumnJoints Reinforcedwith InclinedBars. ACI StructuralJournal.V. 89. No. 1.
Jan.-Feb.1992,pp. 3-12.
Yuan R. L., Mclrlland G. R., Chen,W. F. (1982):Experimentson ClosingReinforced
ConcreteCorners.ASCEJournalof theStructuralDivision,108(4),pp.771-179.
Tnuzou A. and HaldaneD. (1993): Detailing reinforcedconcreteclosing cornerjoints for
ductility. Proceedingsof the lnstitution of Civil Engineers,Structuresand Buildings,Feb.
1 9 9 3 ,V o l . 9 9 ,N o . I , p p . 4 3 - 4 8 .
Oberg S. (1976): Armeradebalkars rotationskapacitet(RotationalCapacityof Reinforced
ConcreteBeams.In Swedish.),Division of ConcreteStructures,Universityof Technology,
Report76:7,54 pp.
78

-- 90 of 100 --

APPENDIX A Drawingsof the TestSpecimens	in the
SecondTestSeries
The dimensionsof the framecomerspecimensare shownin FigureA-1. The amountand
posrtionof thereinforcement	barsareshownin FiguresA-2 andA-3.
o l 0
'\ 150
, / l
,z -----t---t
5 0
\ t l
0 3oF ---1'r<ni300
45y
Construction
J o l n t 2 1 5 0
0 l Q
1 5 0
o
| # - - - - j t . - ^
, , 9 + r ) u
1 , / L
soY I l rso
^ ^ ^ l
FigureA- I The dimensionsof thetestspecimens.
6--
r=118/>------------ s2 7 Ql6K500(l=1720)
l. 1380 L
5 dl6 K500( I = 1720\
- 5 p 1 6 K 5 0 0 t / = 1 8 3 0 )
5 d l 6 K 5 0 0( / = 1 8 3 0)
5 0 1 6 K 5 0 0 ( l = 1 ' 7 2 0 )
Concretecover24 mm
FigureA-2 Reinforcementbarsusedin specimensRV5 andRV6.
A I

-- 91 of 100 --

nl_Ll
r = l
s l 4 Ql 0 K 5 0 0
( / = 2 0 9 0 )
FigureA-2 Reinforcement	barsusedin specimens	RV7 andRV8
97
s 2 4 p l 0 K 5 0 0 r	/ = 2 3 8 0 )
3 dl0 K500( / = 1730)
3 d10K500( I = 1840)
39dl0 K500( / = 570)
3 0 1 0 K 5 0 0 ( / = r 8 4 0 )
3 d 1 0 K 5 0 0 ( / = 1 7 5 0 )
Concretecover l5 mm
A2

-- 92 of 100 --

APPENDIX B Concrete in Compressionin the
FE Analyses
The responseof the concretein compressionwas modelledby a Drucker-Prager	plasticity
model.The tbrmulationof the Drucker-Prageryield surfaceis givenby
( Bl )
whereois the stressmatrix.The projectionmatrixP andtheprojectionvectorzare givenby
f t -
J @ , K I= l - o ' e o - u , f t ' o - k k l
2 s i n0 ( r )
u , = # a n d	r 3 - s i n p ( r )
P :
2 - r - 1 0 0 0
- 1 2 - 1 0 0 0
- 1 - 1 2 0 0 0
0 0 0 6 0 0
0 0 0 0 6 0
0 0 0 0 0 6
The scalarquantitiesd,randp aregivenby
and
I
I
I
0
0
U
(82)
( 8 3 )
(B4)
(Bs)
^ 6 c o s @ n
P - _
J - s l n p o
wherep(r) is the angleof internalfriction as a functionof a hardeningparameter,rand @pis
the initial angleof internalfriction.The hardeningof the compressedconcreteis describedby
a relationbetweenthe cohesionanda hardeningparameter.The cohesion,c, is calculatedas
Here, /...r(e P,n,^,or)is the compressive strength as a function of the plastic strain in the
direction of the uniaxial stress,evaluated from standardtests on cylinders. In the analysesthe
angle of internal friction was constant; thus, @(r) = Qo= Q and the expressionin equation (B4)
can be written as
l - d r
c = J(.qt(e;^tu,.,) p
l - s i n @
c = J,..n1(€ini^Mt )-:--- -
z c o s p
The hardeningparameterr is definedas
^F;;a6 = -J---a t!,n,^,oi
l - d t
B I
( 8 6 )

-- 93 of 100 --

where
2 sinry(r)
A, ^ =------------
' 3 - s i n t y ( r ) 1 8 7 )
tP un,^,ot	is the plasticstrainin the directionof the uniaxialstressand yr is the dilatancyangle.
In the analyses,associatedplasticitywas assumed;thus,the dilatancyanglewas set equalto
the angleof intemalfriction,i.e. ry= S.
Accordingto Chen( 1982),thecompressivestrengthof concreteis increasedby approximately
16 Vowhenthe concreteis subjectedto an equalbiaxial compressionstressstate(o2I or = l);
the correspondingstrainat maximumstressis increasedby approximately10 7o.Thus,a more
ductile stress-strainrelation is obtainedin an equal biaxial compressionstate than in a
uniaxialstressstate,seeFigureB-1. However,with the Drucker-Pragerplasticitymodelused
in DIANA, it is not possibleto obtainsuchan increaseof the ductilebehaviourin a biaxial
compressionstate.lnstead,contraryto what is expected,the resultis a morebrittle behaviour
with a substantialdecreasein the strain at maximum stress.Accordingto Chen, the ratio
betweenthe plastic strains(at maximum stress),obtainedin an equal biaxial compression
stateand a uniaxial compressionstate,should be approximately1.1. However,it can be
shownthatwith the plasticitymodelusedin DIANA this ratio can at mostreacha valueof 0.5
(obtainedwhen t1r= 0o). Consequently,when using this material model for compressed
concrete.a more brittle behaviourof concretein compressionis obtainedfor all stressstates
otherthanthe pureuniaxialone.
\when biaxial
L4
FigureB-1 The differencein the stress-strainrelationsfor concretein uniaxial and equal
biaxialcompression	states,Chen(1982).
The cohesion-hardeningparameterrelation used in the FE analysesis determinedto
correspondwith the stress-strainrelationfrom a uniaxial test, seeequations(84) and (86).
The valuesof the cohesionand the hardeningparameterboth dependon the angleof internal
friction, f. Thus, P can be set to an arbitraryvalue and still give a stress-strainrelationthat
ffin
Hr
1 . 1 6	f ,
f, Equalbiaxialstress
state(d/ I o2= 11
Uniaxialstressstate
( O 2 = O r = 0 )
B2

-- 94 of 100 --

correspondsto that from the uniaxial test; however, the choice of p also affects the stress-
strain relation in the other stressstates.To obtain an rncreasein compressivestrengthin an
equal biaxial compressionstate,correspondingto that suggestedby Chen (16 Vc),the angleof
internal friction, 0, should be set to approximately 10'. However, according to
recommendationsin the DL{NA manual,TNO ( 1993, 1996),the angle of internalfriction was
approximatedto be 30o in the FE analyses.This resulted in a 200 7c increaseof the
compressivestrengthat an equal biaxial compressionstate compared to that in an uniaxial
stressstate. Further, due to a misunderstanding,the hardening parameter r was set to be
equivalentto the plastic strain €t,,,-,o1 when it should have been r = l.9lEtu,,,*iolaccording
to equation(86); thus, the softeningof the concretein compressionoccurredat a lower strain
also for the uniaxral stressstate. To examine the effect of these inconect material parameters
(i.e. @= 30o and K= €Pun,^,ot),an analysisof a frame comer specimenusing more accurate
materialparameters(0= l0', K= 1.16€p,n,-,o1)	was carried out, see Section4.5.1.The stress-
strain relations for this analysis and for the concrete used in the other FE analyses are
compared for uniaxial and equal braxial compression states,see Figure B-2.
ffin
HDuniaxial
stressstate
6
e . [ 1 0 3 ]
FigureB-2 The differencein the stress-strainrelationsfor concreteusedin the FE analyses
when it is subjectedto different compressionstates.The correspondingstress-
strainrelationaccordingto Chen(1982)is shownfor comparison.
o. [MPal
8 0 ,
60
2 O +
biaxial
sressstate
\ -----;
biaxial (Chen)
Concretein compression
used in the analyses
( 0 = 3 0 " , K = € P , n , * i o r )
Concrete in compression
that should have been used
( 0 = 1 0 " ,r = l . l 6 t P u n i * , a t )
40
\when
biaxial
B3

-- 95 of 100 --



-- 96 of 100 --



-- 97 of 100 --

Tryckt& Bunden
Vasastadens	BokbinderiAB
r996

-- 98 of 100 --



-- 99 of 100 --



-- 100 of 100 --