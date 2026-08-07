---
title: "Experiments And Analyses Of Explosion At An Urban Intersection"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/experiments-and-analyses-of-explosion-at-an-urban-intersection.pdf"
fileType: "PDF"
keywords: ["skyddsrum","explosion","that","blast","with","autodyn","results","from"]
summary: "EXPERIMENTS AND ANALYSES OF EXPLOSION AT AN URBAN INTERSECTION M. Johansson1, O.P. Larsen2, L. Laine2 1REINERTSEN Sverige AB, Lilla Bommen 5, SE-411 13 Göteborg, Sweden 2ANKER – ZEMER Engineering A/S, P.O. Box 253, NO-0702 OSLO, Norway ABSTRACT Pr..."
---

EXPERIMENTS AND ANALYSES OF EXPLOSION
AT AN URBAN INTERSECTION
M. Johansson1, O.P. Larsen2, L. Laine2
1REINERTSEN Sverige AB, Lilla Bommen 5, SE-411 13 Göteborg, Sweden
2ANKER – ZEMER Engineering A/S, P.O. Box 253, NO-0702 OSLO, Norway
ABSTRACT
Predicting the load caused by a propagating blast wave in urban environment is a complex
task. For many load cases engineering tools based on empirical data or semi-empirical
methods, is sufficient. However, when the geometry gets more complex, it might be necessary
to use so-called hydro code programs to calculate the effect of the blast wave. Hence, there is
also a need to verify such programs against experimental results. Once validated, though, such
programs may be used to better understand the effects of blast load in complex load
situations.
In order to validate the results from the hydro code AUTODYNTM, an experimental test
series, scale 1:5, simulating an explosion in urban environment, was carried out. A simplified
intersection built up of four concrete boxes, dimension 2.3 m, with a total of eight charges, 0.4
and 1.6 kg of PETN, detonated at various locations were registered using 25 pressure gauges.
Numerical simulations were carried out in AUTODYN prior to the experimental test series. In
order to handle the simulations, and thus decrease the calculation time needed, an automatic
remapping procedure, in which the progress of the shock front was automatically taken into
consideration, was developed. To compare experimental and numerical results In addition, a
coherence measure was introduced. Out of almost 200 compared pressure-time relations about
65 % reached Coh ≥ 0.5; i.e. a limit that indicates very good agreement. Consequently, it is
concluded that AUTODYN manage very well to predict the blast load obtained in a complex
urban environment and that it may provide a powerful tool for further blast load studies.
An approach for a simplified technique, using superposition of several incident shock waves,
to estimate the blast load in a more complex environment is presented and compared to the
experimental and numerical results. This simplified technique is a rather crude instrument
when compared to Autodyn. However, it still provides a general idea of which blast waves
sums up the resulting pressure time history, and hence may be used in an early stage to
approximately describe the resulting loads on a structure. The results presented herein yield a
discrepancy of the positive and negative impulse intensities of only about 20 % compared to
that in the experiments.
INTRODUCTION
The Swedish Rescue Services Agency (Räddningsverket) is responsible for the building
regulations of the Swedish civil defense shelters. The shelters have specific regulations for
how they are planned, built, equipped and maintained [1]. It is also the responsibility of The
Swedish Rescue Services Agency to maintain and develop the knowledge connected to these

-- 1 of 14 --

structures. Consequently, a research project, [2], was initiated in 2006 wherein the main aim
is to increase the knowledge of the load characteristics from a blast load and how to determine
the capacity of any given building or group of buildings to withstand such loads.
Predicting the load caused by a propagating blast wave in urban environment is a complex
task. According to [3] there are three types of methods to be used: empirical, semi-empirical
and numerical methods. For non-complex load cases it is usually sufficient to use engineering
tools based on empirical data, e.g. ConWep [4]. For more complex situations, though, it is
necessary to use semi-empirical methods, i.e. methods based on models in which the
important physical process is accounted for in a simplified way. Several researchers have also
developed such models, e.g. [5]-[9], that work well within given limits and that provides an
increased understanding of the resulting blast load. However, when the geometry gets more
complex, such as in an urban environment, it may no longer be enough to use this type of
simplified tools, [10]. In such cases numerical methods incorporating computational fluid
dynamics (CFD) techniques, so-called hydro codes, may be used. However, even though the
computational possibilities, regarding both the complexity of the analysis and the required
computer time, steadily increase, it is still of utmost importance to make sure that the results
obtained in such methods correlate to the real experimental behavior. Hence, there is a need to
verify such programs against experimental results. Once this is guaranteed it is possible to use
hydro code programs instead of, or in conjunction with, experimental performances.
In this project the explicit code AUTODYNTM [11] is used. It has previously been shown in
[12] that AUTODYN provides satisfactory agreement with ConWep in analyses of spherical
air bursts. However, it is also necessary to verify that this is the case in a more complex urban
environment. Accordingly, when the opportunity to take part in an experimental test-series,
originally initiated and planned by the Norwegian Defense Estates Agency (Forsvarsbygg)
and to be carried out in cooperation with the Swedish Defense Research Agency (FOI),
revealed itself the Swedish Rescue Services Agency joined in as a co-financier. The aim of
this was twofold: to increase the knowledge about blast load in a complex environment and to
investigate the possibility for AUTODYN to predict the resulting load characteristics obtained
in such a case. Furthermore, the results obtained have also been used to compare the
possibility to use a simplified semi-empirical calculation method, based on super positioning
of several incident blast waves modified with regard to diffraction.
EXPERIMENTAL STUDY
The experimental location consisted of four concrete cubic boxes (dimension 2.3 m)
positioned at a distance of 2.3 m apart, see Figure 1. Two types of charges, 0.4 kg PETN and
1.6 kg PETN were used and positioned either close to the ground (0.20 m) or at mid height
(1.15 m) of the concrete boxes in four different locations. The tests were carried out in scale
1:5 meaning that the concrete boxes approximately corresponded to a four-story building of
height 11.5 m and the small charge of 50 kg PETN, detonating 1.0 m above ground. Hence, a
threat situation roughly equal to what might be expected from a small car bomb.
A total of 25 pressure gauges were used to register the pressure-time relations at various
locations. 20 gauges had fixed positions in the concrete boxes: 10 low (L) at a level of 0.20 m,
8 in the center (C) at 1.15 m above the ground and 2 on the roof (R), see Figure 1. All gauges
but two were positioned in the middle of the wall/roof. The last two gauges (BA6L and
BA7L) were positioned low 0.20 m from one of the box corners. The remaining 5 gauges
were used as free field pressure gauges (FF) and fastened on wooden boards placed on the
ground, with various positions depending on the position of the charge, see Figure 2.

-- 2 of 14 --

#1
A B
C D
#2 #3 #4
BA1L
BA3L BB3L
BB1L
BA2L BB2L	BB4L	BA4L
BA6L
BA7L
2.3 2.3 2.3	1.15
2.3
2.3
2.3
[m]
#1
A B
C D
#2 #3 #4
BA1C
BA3C BB3C
BB1C
BC2C
BB4C
BD2C
BA4C BA5R BB5R
2.3 2.3 2.3	1.15
2.3
2.3
2.3
[m]
0.20 m
0.4 kg PETN
0.20 m
low gauge
1.15 m
1.6 kg PETN
1.15 m
centre gauge
Figure 1: Top view of the experimental set-up and gauges located on the concrete boxes.
The charges were placed in four different positions (#1 – #4) at a height of 0.2 m (0.4 kg
PETN) or 1.15 m (1.6 kg PETN) above the ground.
#1 A B
C D
2.3	4.6 1.15	6.9
FF02	FF03	FF12 FF01
FF13
[m]
#2
A B
C D
2.3	4.6 1.15 2.3 4.6
FF13	FF12	FF01	FF02	FF03
[m]
#3
A B
C D
2.3	4.6 1.15 2.3 4.6
FF12 FF13	FF02 FF01	FF03
[m]
#4
A B
C D
2.3	4.6 1.15	6.9
FF12 FF03 FF02 FF01
FF13
[m]
Figure 2: Top view of the different ground gauge positioning for each charge location.
The explosive used was the Swedish PETN, Sprängdeg m/46, with a density of about
1 500 kg/m3, which consists of approximately 86 % pentolite and 14 % mineral oil.
Accordingly, the 0.4 kg and 1.6 kg charges used consisted of 0.344 kg and 1.376 kg pentolite,
respectively. Using the average equivalent TNT weight 1.21, given in ConWep, the scaled
distance Z (expressed as TNT equivalent) can be determined. The minimum horizontal
projection of the distance between the charges and the pressure gauges varied from 1.15 m to
about 10 m, which provide a scaled distance of 1.5 ≤ Z ≤ 13 m/kg1/3 and 1.0 ≤ Z ≤ 8.5 m/kg1/3
for the 0.4 kg and 1.6 kg charges, respectively.

-- 3 of 14 --

FINITE ELEMENT MODEL
The blast simulations were performed using the explicit code AUTODYN [11]. All
simulations were made before the experiments were carried out, which means that the
experimental results are used to validate how well AUTODYN manage to describe the blast
load in a complex environment similar to that in a city.
In the numerical model the physical domain was represented by rectangular boxes in 3D
which in turn were filled with cube shaped hexahedral linear elements. The size of these
rectangular boxes varied based on the blast scenarios as well as the different remap stages and
the planar symmetry present. A typical series of 3D remap runs over 4 stages would have
approximate rectangular domain sizes of: (2 m)3, (4 m)3, (8 m)3 and (16 m)3. The element size
used highly depended on the remap stage and the total number of elements employed in the
numerical mesh. The high-resolution runs strove to utilize the maximum number of elements
possible, i.e. approximately 4.5 million elements, which in turn yielded an element size of
approximately 10 mm at the first 3D remap stage. The remapping ratio was always 1:2,
consequently doubling the element size in each direction at every new remap stage. The four
concrete boxes and the ground were modeled using rigid boundaries. In all but the last
remapping stage no boundary conditions were necessary since the blast wave front was
always fully contained inside the corresponding numerical domain. In the last stage, though,
an outflow boundary condition was applied to the external boundaries of the domain.
Each simulation involved separate runs over several stages in which a self-developed
automatic remapping technique was used. The first stage involved a 1D spherical symmetric
run using a Multi-Material Euler solver simulating the initial detonation phase with both
explosive material and air. A remap procedure was then performed into a 2D axial symmetric
domain using the same Multi-Material Euler solver. Finally the simulation was concluded by
a series of 3D remapping runs using an Euler-FCT solver with air only. Some of these 3D
remapping stages involved planar symmetry, in which case the symmetry was fully exploited
in the simulations. Figure 3 exemplify the simulation procedure for two 3D remapping stages.
Stage 4: 3D remap Stage #2:
plane symmetry
symmetry
line
charge
#1
A
Stage 5: 3D remap Stage #3
A
C
Figure 3: Illustration of the principal layout of the finite element model for simulation of
charge at location #1 for Stages 4 and 5.
The large number of simulations with their accompanying remapping stages called for
automation at several levels of the simulation process. Therefore, an automatic script
generation with AUTODYN-linked Fortran user-subroutines was developed. The main idea of
this methodology was to enable automatic detection of the shock front during the blast, so that
a remap process could be initiated at the time when the shock front was close to the model
rigid boundaries, i.e. concrete boxes, or the boundary of the numerical domain.

-- 4 of 14 --

In AUTODYN there are four different pre-defined material models for the explosive PETN,
where the material densities vary between 0.88 kg/m3 and 1.77 kg/m3. A pre-study was
carried out to determine the difference between these material models and it was found that
three out of four models generated almost identical results, [13], [14]. This, together with an
approximation that the explosive in the charges used had a density of about 1.7 kg/m3, [13],
lead to the use of the PETN material model with density 1.77 kg/m3 in the final AUTODYN
simulations of the experimental set-up. The explosive was modeled using the JWL Equation
of State (EOS) with automatic conversion into Ideal Gas EOS when the entire explosive had
reached a compression value of -0.95. Additionally, at the start of the first 3D remap stage the
explosive was converted into air, thus facilitating the use of the single material Ideal-Gas-
EOS-Only Euler FCT solver. Input parameters for air and explosive used are listed in Table 1.
Table 1: Summary of input parameters in AUTODYN for air and explosive PETN.
Air PETN 1.77
ρ0 1.226·10-3 (g/cm3) ρ0 1.77 (g/cm3)
γ 1.4 C-J Detonation velocity 8 300 (m/s)
P0 101.3 (kPa) C-J Energy density 1.01·107 (kJ/m3)
C-J Pressure 3.35·107 (kPa)
In this paper mainly the results for the 0.4 kg charges are presented. Hence, if not mentioned
otherwise all results presented are related to the small charges. For more information about
the experiments and the analyses carried out, see [13], [14].
RESULTS
Comparison with ConWep
A comparison of measured peak pressure in the free field gauges (FF01 to FF13) and that
predicted using ConWep has been made in [13] and [14] and it was found that the
correspondence was satisfactorily. As a further illustration two samples of the pressure-time
relations for charges at location #1 and #4 are compared to that predicted by ConWep in
Figure 4. The pressures obtained from the charge at location #1 should agree well with that of
ConWep whereas it from the charge at location #4 is expected to deviate somewhat from
ConWep due to confinement effects at ranges larger than about 2.3 m.
-40
-20
0
20
40
60
80
100
120
140
160
180
0 2 4 6 8 10
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
#1 - FF02
#4 - FF02
ConWep
#1 A B
C D
2.3 m
FF02
#4
2.3 m
FF02
-10
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
12 14 16 18 20 22
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
#1 - FF12
#4 - FF12
ConWep
#1 A B
C D
6.9 m
FF12
#4
6.9 m
FF12
Figure 4: Comparison of pressure-time relations in the experiments and ConWep [4].

-- 5 of 14 --

The key parameters of this comparison are summarized in Table 2. From this it can be
observed that ConWep somewhat underestimate the peak pressure and overestimate the
arrival time for the compared pressure relations. The resulting impulse intensity of the initial
positive phase, though, is rather similar.
Table 2: Summary of blast key parameters related to pressure-time relations in Figure 4.
Gauge R ta Ps+ is+ T+
[m] [ms] [kPa] [Pas] [ms]
#1-FF02 2.3 2.58 168 57 1.31
#1-FF12 6.9 14.3 20 24 3.15
#4-FF02 2.3 2.43 119 67 1.49
#4-FF12 6.9 13.8 38 29 2.41
ConWep 2.3 2.77 109 67 2.16
ConWep 6.9 14.6 17 25 3.49
It shall be observed that the peak pressure from a detonation in location #1 is noticeable
higher than from that in location #4 at a distance of R = 2.3 m. However, at a distance of
6.9 m the opposite is true, the pressure from the blast wave originating from location #4 being
higher. This effect is believed to be a result of the confinement effect obtained when the blast
wave propagates in the space between the concrete boxes.
Comparison with AUTODYN
Table 3 presents a comparison of key parameters overpressure P+, arrival time ta and impulse
intensity i+ and i - obtained in the AUTODYN simulations and that of the experiments for
charge locations #1 and #3. Here, the impulse intensities i+ and i - are defined as the sum of all
positive and negative phases, respectively, within the time period tend.
( )	∑ ∫	∑ =
+
=
+	+ =	=
n
k
t
t
n
k
k
k	end
k	a
dt	t	P	i	i 1	1
,
,
(1)
( )	∑ ∫	∑ =
−
=
−	− =	=
n
k
t
t
n
k
k
k	end
ka
dt	t	P	i	i 1	1
,
,
(2)
To get a better overview of how well the results coincide a coherence measure, according to
Eq. (3), was introduced.
( ) 	( )
−	+ +
−
−	=
∫
Exp	Exp
t
Exp	AD
i	i
dt	t	P	t	P
Coh
end
0
1 (3)
Here PAD(t) and PExp(t) are the pressure obtained in the AUTODYN simulations and
experiments, respectively, while i+Exp and i -Exp are the total positive and negative impulse
intensities from the experiments according to Eqs. (1) and (2) up to time tend = 50 ms.
Thereby, it is possible to fairly straightforwardly compare a large number of numerical and
experimental results and get a measure of how well they coincide. Using this measure,
Coh = 1.0 signify a perfect match. However, as illustrated in Figure 5, Coh ≥ 0.5 corresponds
to very good agreement between simulated and experimental results.

-- 6 of 14 --

Table 3: Summary of key parameters P+, ta, i+ and i- from AUTODYN analyses and
experiments for charge locations #1 and #3 when tend = 50 ms. A marking “-“ in the table
indicate that the experimental result was not valid.
Location #1 Location #3
Gauge AUTODYN Experiments AUTODYN Experiments
P+ ta i+ i- P+ ta i+ i- P+ ta i+ i- P+ ta i+ i-
[kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas]
FF01 656 0.62 143 137 480 0.65 248 - 698 0.62 226 184 610 0.61 237 704
FF02 129 2.42 85 94 168 2.58 57 - 136 2.38 140 141 93 2.53 120 220
FF03 32 7.69 52 50 47 8.14 82 54 33 7.74 76 77 45 7.78 71 66
FF12 14 13.45 35 35 20 14.27 38 35 136 2.38 137 141 93 2.63 113 155
FF13 16 9.89 32 32 18 10.50 28 31 34 7.61 114 112 37 8.21 106 102
BA1L 51 3.71 61 67 - - - - 8 9.71 52 51 8 9.81 49 47
BA2L 7 9.63 49 48 8 10.28 53 49 52 3.73 113 115 40 3.90 110 116
BA3L 51 3.71 113 115 63 3.89 112 110 2 258 0.63 505 235 2 369 0.47 763 328
BA4L 2 100 0.63 461 208 1 745 0.63 429 - 52 3.73 70 73 58 3.81 73 74
BA6L 94 1.56 76 148 114 1.68 104 107 1 272 1.05 325 233 991 1.03 345 238
BA7L 1 221 1.05 290 211 599 1.02 187 452 103 1.61 70 132 146 1.65 72 174
BB1L 6 15.34 20 22 11 16.76 22 19 8 11.55 34 31 8 12.34 32 27
BB2L 3 22.00 21 20 3 23.35 23 20 5 13.52 33 35 5 13.85 32 33
BB3L 6 15.34 42 44 11 16.63 45 44 51 7.93 115 112 54 8.39 99 98
BB4L 14 13.41 68 70 - - - - 77 6.45 131 127 73 6.89 122 118
-50
0
50
100
150
200
250
300
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
A B
C D
#2
BA3L	
Coh = 0.566
-40
-20
0
20
40
60
80
100
120
140
160
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
A B
C D
#4	FF02
Coh = 0.477
Figure 5: Example of correlation between AUTODYN analyses and experiments: #2-BA3L
(left) with Coh = 0.566, and #4-FF02, with Coh = 0.477.
From Table 3, Figure 5 and further comparisons presented later in this paper it can be seen
that the agreement between experimental and numerical results is generally very good. The
similarities between the pressures measured in the experiments and those obtained in
AUTODYN is evident. It can be concluded, though, that the rapid pressure rise observed in
the experiments is not always fully captured in AUTODYN. This is due to the model
discretization; i.e. the use of several remapping stages cause loss of information and also leads
to an element mesh that is no longer fine enough to accurately capture rapid pressure changes.
Nevertheless, the general behavior is still captured with good accuracy. Furthermore, it was
observed that the agreement between analyses and experimental results increased when the
pressure decreased. Thus, when the pressure was reduced to less than about 50-100 kPa the
general agreement went from very good to excellent. In Figure 6 the complete batch of

-- 7 of 14 --

coherence data for the 0.4 kg and 1.6 kg charges, totaling 8 charges with almost 200 result
series, is presented. From this it can be noted that about 65 % of the compared results reach
Coh ≥ 0.5; i.e. a limit that indicates very good agreement.
0
5
10
15
20
25
0.0 0.2 0.4 0.6 0.8 1.0
Coherence [-]
Portion of P(t) at given coherence [%]
0.4 kg
1.6 kg
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
0.0 0.2 0.4 0.6 0.8 1.0
Coherence [-]
Proportion of P(t) higher than given coherence [%]
0.4 kg
1.6 kg
Coh = 0.5
65 %
Figure 6: Coherence of 0.4 kg and 1.6 kg charges presented as portion at given coherence
(left) and portion higher than given coherence (right).
SUPERPOSITIONING MODEL
Above it was shown that the prediction made in AUTODYN generally shows very good
accuracy with that of the experiments. Hence, it has been confirmed that AUTODYN is a
powerful tool in the prediction of load characteristics from blasts in an urban environment.
The downside, though, is that programs such as AUTODYN are often expensive and demands
a highly skilled user to achieve reliable results. This, in addition to the time consuming
modeling and the needed CPU time to achieve the accurate results, are factors that weigh
heavily against using only FE-calculations to predict blast loading on structures.
Empirical and semi-empirical methods are easier to use and also provide a basic knowledge
for understanding different load situations. Such less complex methods are also needed to
better understand the results from a more complex analysis, and thus prevent the latter from
being transformed into a “black box”. Additionally, such simplified tools can be used to get
an approximate view of the resulting load characteristics in a complex situation and could
provide sufficient foundation for achieving design loads on the structures.
Based on this an attempt was made to have an engineer’s approach to the problem at hand and
below a method based on [8] is presented. The concept of this method is to superpose several
blast waves, where each wave is adjusted with regard to diffraction. The influence of reflected
pressure is not considered, i.e. the wave characteristics are based on incident pressures only,
nor is there an attempt to incorporate any confinement effects. The method is intentionally
made simple since the purpose here is to provide a model that may describe the main load
characteristics obtained in a complex load situation rather then a fully accurate prediction.

-- 8 of 14 --

The resulting pressure time-relation, P(t), for a general point in the geometry studied is
determined performing the following four steps:
1. Derive all pressure wave paths, Wi, 1 ≤ i ≤ n, which will be of interest for the
studied point. Calculate the total distances, Ri, for each of the paths from center of
charge to the studied point.
2. Use the total distances Ri in conjunction with the charge characteristics to
determine the corresponding airblast parameters for both the positive and negative
phase of the incident waves; i.e. arrival time ta, incident pressures Ps+, Ps-, incident
impulse intensities is+, is-, duration T+ and T- and the decay coefficient
α.
3. Calculate the pressure time histories for incident pressures for all wave paths using











+	+	≥
+	+	<	≤	+	




 +	−
−	⋅	−
+	<	≤	




 −
−
<
=
−	+
−	+	+
+	−
	−
−
+
−
+
−
	−
+
+
−
+
+
T	T	t
T	T	t	t	T	t	e
T
T	t	t
P
T	t	t	t	e
T
t	t
P
t	t
t	P
a
a	a
T
T	t	t
a
s
a	a
T
t	t
a
s
a
w a
a
i
t	if	,	0
if	,
)	(
1	9	.	13
if	,	1
if	,	0
)	( ))	(	(4
)	(	
α
(4)
4. The pressure-time histories for each wave Wi is multiplied with diffraction
coefficients, Cdiff,i, and summed together according to
∑=
⋅	=
n
i
w	i	diff t	P	C	t	P i
1
, )	(	)	( (5)
Blast parameters in step 2 may be determined in several ways, e.g. ConWep [4] for the
positive phase. However, in order to automate the calculations as far as possible equations
according to spherical burst provided in [15] were used for the positive phase. The decay
coefficient
α was determined in accordance with Eqs. (1) and (4), i.e. so that
( 	)


 −	−	= −	+	+	+	
α
α
	α e	T	P	i s	s 1
1	1 2 (6)
was fulfilled. For the negative phase, relations from [16] were used to determine the blast
parameters. The influence of reflected pressure was not considered, i.e. the wave
characteristics were based on incident pressures only.
The diffraction coefficients, Cdiff, used were determined using the experimental results and
comparing these to that predicted by ConWep. In [8] the diffraction coefficients were based
on the peak pressure PS+. However, in the comparisons made herein it was found that this
approach seemed to be a bit uncertain since it proved to differ somewhat also for similar load
situations. Therefore, the impulse intensity is+ of the first shock wave was also incorporated in
the comparison, see Table 4. Due to reflections, though, it was not possible to identify the full
effect of the first blast wave in the pressure-time relations obtained in the experiments, and
these results were therefore not included in the comparison.
Table 4 summarizes the pressures and impulse intensities used to determine Cdiff. Three
different load situations were identified: Case 1 with diffraction around one corner to a gauge
close to the edge, Case 2 with diffraction around one corner to a gauge positioned far from the
edge, and Case 3 with diffraction around two corners to a gauge positioned far from the edge.
Average values were determined for the diffractions coefficient when based on the pressure,

-- 9 of 14 --

Cdiff,P, and the impulse intensity, Cdiff,I, and an average value of these two, Cdiff,PI, was decided.
It is observed that Cdiff,P and Cdiff,I deviates for Case 1 and 3 but are approximately the same
for Case 2. The average diffraction coefficient Cdiff.PI is higher close to the edge (Case 1) than
in the middle of the wall (Case 2), which also is in line with that observed in [8]. However,
the coefficient determined based on the impulse intensity is the same, and therefore as a rough
approximation it seems reasonable to use the same value Cdiff,PI for both of them. Hence, an
approximate average value of Cdiff = 0.6 is used for both Case 1 and Case 2.
It seems plausible that the resulting diffraction coefficient should depend on the number of
corners that the blast wave diffracts around. Observing that the main difference between
Case 2 and Case 3 is that the former diffracts around one corner while the second diffracts
around two it is found that Cdiff,3 = Cdiff,2 2 seems like a good approximation. Hence, the
diffraction coefficient Cdiff,i in Eq. (4) is set to Cdiff,i = Cdiff m, where m is the number of corners
that wave Wi diffracts around.
Table 4: Determination of diffraction coefficient Cdiff,PI, based on experimental results and
predictions made in ConWep, [4].
Experiments ConWep Diffraction
Case Description Gauge R Ps+ is+ Ps+ is+ Cdiff,P Cdiff,i
[m] [kPa] [Pas] [kPa] [Pas] [-] [-]
#1-BA6L 1.826 114 43.4 180 82.8 0.63 0.52
#3-BA7L 1.826 146 43.7 180 82.8 0.81 0.53
#4-BA7L 3.837 34.4 28.7 41.2 43.2 0.84 0.67
1
Gauge
Charge
Average value: Cdiff,P 0.76 Cdiff,I 0.57 Cdiff,PI 0.67
#1-BA1L 2.776 - - 74.8 57.3 - -
#1-BA3L 2.776 63.2 35.5 74.8 57.3 0.84 0.62
#1-BB1L 7.376 11.5 14.2 15.1 23.4 0.76 0.61
#1-BB3L 7.376 11.0 11.2 15.1 23.4 0.73 0.48
#2-BA1L 4.787 11.2 19.1 28.5 35.3 0.39 0.54
#2-BA2L 4.787 11.9 22.9 28.5 35.3 0.42 0.65
#2-BB1L 9.387 3.5 - 9.6 18.5 0.36 -
#2-BB2L 9.282 4.1 10.4 11.1 18.7 0.37 0.56
#3-BA2L 2.776 40.5 35.0 74.8 57.3 0.54 0.61
#3-BA4L 2.776 58.0 35.7 74.8 57.3 0.78 0.62
#3-BB2L 7.126 5.3 - 15.8 24.2 0.34 -
#4-BA1L 4.787 11.8 19.6 28.5 35.3 0.41 0.55
#4-BA4L 4.787 11.4 19.5 28.5 35.3 0.40 0.55
#4-BB1L 4.787 11.6 19.3 28.5 35.3 0.41 0.55
#4-BB2L 4.787 11.5 19.8 28.5 35.3 0.40 0.56
2 Gauge
Charge
Average value: Cdiff,P 0.51 Cdiff,I 0.57 Cdiff,PI 0.54
#1-BA2L 5.076 7.8 15.9 26.0 33.4 0.30 0.48
#1-BB2L 9.676 2.3 - 10.5 18.0 0.22 -
#3-BA1L 5.076 7.6 16.9 26.0 33.4 0.29 0.51
3
Gauge
Charge
Average value: Cdiff,P 0.27 Cdiff,I 0.49 Cdiff,PI 0.38
The number of blast waves used in the calculations presented herein is limited to six. Further,
when determining the distances Ri an approximate approach was used based on simple
geometrical assumptions regarding angles of reflection; the difference in distance obtained
being rather negligible. An example of how the different shock waves are determined and put
together in a resulting pressure-time relation is shown in Figure 7 and Table 5. When
determining the blast parameters a spherical air burst was assumed. However, since the
current load case is more similar to that of a hemispherical airburst the charge weight was
increased with a factor 1.8 due to mirroring, [17].

-- 10 of 14 --

-20
-10
0
10
20
30
40
50
60
70
80
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 Ps	
+ [kPa]
W1
W2
W3
W4
W5
W6
#1
A B
C D
BA3L
W3
W1
W2
W4
W5
W6
-20
-10
0
10
20
30
40
50
60
70
80
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P [kPa]
Autodyn
Experiment
Super positioning
Coh = 0.692
#1
A B
C D
BA3L
W3
W1
W2
W4
W5
W6
Figure 7: (Top) The six shock wave paths W1 - W6, multiplied with Cdiff, that affect the
studied point BA3L, and (bottom) comparison with the results from AUTODN and the
experiments. The correlation between AUTODYN and experiments resulted in Coh = 0.692.
Table 5: Input data according to Eqs. (4) and (5) for the shock waves shown in Figure 7
The data is based on a spherical airburst using a scaled distance Z based on an equivalent
weight of 1.21 and a mirror coefficient of 1.8.
Geometry Positive phase Negative phase Diffraction
Wave R Z ta Ps+ is+ T+
α Ps- is- T - m Cdiff
[m] [m/kg1/3] [ms] [kPa] [Pas] [ms] [-] [kPa] [Pas] [ms] [#] [-]
W1 2.78 3.06 3.932 78.5 60.4 2.591 1.81 -13.1 -66.0 10.980 1 0.60
W2 5.85 6.44 12.311 20.8 30.6 3.481 0.52 -5.8 -31.0 11.769 2 0.36
W3 6.21 6.84 13.350 19.0 29.0 3.552 0.47 -5.4 -29.2 11.834 0 1.00
W4 7.38 8.12 16.738 14.8 24.6 3.759 0.37 -4.5 -24.5 12.026 3 0.22
W5 10.99 12.10 27.268 8.6 16.8 4.246 0.26 -2.9 -16.4 12.481 3 0.22
W6 10.81 11.90 26.735 8.8 17.1 4.225 0.28 -2.9 -16.6 12.461 0 1.00

-- 11 of 14 --

In Figure 8 some further comparisons between experiments, AUTODYN and the super
positioning method are illustrated. The correlations of the shown results, based on the positive
and negative impulse intensities, are summarized in Table 6.
-10
-5
0
5
10
15
20
25
30
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 Ps	
+ [kPa]
Autodyn
Experiment
Super
positioning
Coh = 0.613
#2
A B
C D
BA2L
W3
W1
W2
W4
W5
W6
-20
-10
0
10
20
30
40
50
60
70
80
0 10 20 30 40 50
Time, t [ms]
Overpressure,
 P s	
+ [kPa]
Autodyn
Experiment
Super
positioning
Coh = 0.571
W6	A B
C D
#3
BA2L
W5
W3
W2
W1
W4
Figure 8: Comparison of pressure-time relation from AUTODYN, experiments and super
positioning method: #2-BA2L (left) with Coh = 0.613, and #3-BA2L, with Coh = 0.571.
Table 6: Comparison of total positive and negative impulse intensities in experiments,
AUTODYN and super positioning method according to Eqs. (1) and (2) when tend = 40 ms.
#1-BA3L #2-BA2L #3-BA2L
Source is+ is-
γ + 1)	
γ - 2) is+ is-
γ + 1)	
γ - 2) is+ is-
γ + 1)	
γ - 2)
[Pas] [Pas] [-] [-] [Pas] [Pas] [-] [-] [Pas] [Pas] [-] [-]
Experiment 98.2 -101.2 1.00 1.00 52.8 -56.4 1.00 1.00 102.7 -100.2 1.00 1.00
Autodyn 99.8 -105.3 1.02 1.04 52.6 -58.8 1.00 1.04 105.1 -100.0 1.02 1.00
Super positioning 89.2 -92.5 0.91 0.91 41.0 -53.3 0.78 0.95 80.7 -84.6 0.79 0.84
1)
γ + = is+ / is+Exp 2)
γ - = is- / is-Exp
Even though the general pressure-time behavior does not fully correspond with the
experimental one for the whole time domain it still generates a good view of the load
characteristics obtained. The ratios
γ + and
γ - presented in Table 6 shows that the total impulse
intensities predicted by this simplified model is rather correct, the discrepancy being only
about 10-20 %. Hence, the good correlation in the comparisons made above suggest that the
super positioning method presented herein represent a simplified approach that yields results
fairly close to that observed in reality.

-- 12 of 14 --

CONCLUSIONS
An experimental and numerical study of blast load at an intersection was carried out. The load
effects of two types of charges, 0.4 kg and 1.6 kg PETN, positioned in four different locations
were simulated using the explicit code AUTODYN and compared to the experimental results.
All AUTODYN analyses were made before the experiments were carried out, and hence the
results presented herein are used to validate AUTODYN’s ability to describe the blast
behavior in an urban environment. An automatic remapping routine was developed for the
blast simulations in AUTODYN. This routine enabled automatic detection of the shock front
close to a boundary, and thus a criterion for when in time to initiate the remapping process,
allowing a more time efficient approach to large blast simulations in a complex environment.
It is shown that the agreement between the results obtained in the experiments and the
AUTODYN simulations generally is very good. A coherence measure is introduced for
comparing experimental and numerical results and it is concluded that this is a convenient
method to get an estimation of how well the results coincide. For the results presented herein
it is shown that about 65 % of the compared measurements fulfill Coh ≥ 0.5, i.e. a the limit
that indicates very good agreement. For gauges where the pressure was low, less than about
50-100 kPa, the agreement generally went from very good to excellent. Consequently, it is
concluded that AUTODYN manage very well to describe the resulting blast effects and that it
with confidence may be used as a powerful tool when studying blast loads in a complex urban
environment.
An approach for a simplified technique, using super position of several incident shock waves,
to estimate the blast load in a more complex environment is presented and compared to the
experimental and numerical results. It is found that the method, despite its simplicity and
rather crude approach, manage rather well to describe the general behavior of the resulting
load characteristics observed in experiments and numerical analyses. The results presented
herein show a deviation of just about 20 % compared to that in the experiments.
ACKNOWLEDGEMENTS
The authors thankfully acknowledge the Swedish Rescue Services Agency (Räddningsverket)
for the financing of the research project Resistance capacities of buildings for extreme
dynamic loading. Special thanks are due to Björn Ekengren for his invaluable support;
without him this project had not been the same. Further thanks are due to the Norwegian
Defence Estates Agency (Forsvarsbygg), especially Svein Christensen and Ståle Skudal, for
their initiation, invitation to take part in and financial support of the experimental work
presented herein. Additionally, the Swedish Defence Research Agency (FOI), of whom
Richard Forsén, Anders Carlberg and Roger Berglund are thanked, for their part in the
experimental performance. Finally, thanks to Bert von Rosen, Canadian Explosives Research
Laboratory, for providing help with the super positioning method presented herein.

-- 13 of 14 --

REFERENCES
[1] Ekengren, B., 2006, Skyddsrum, SR 06 (Civil defence shelters, SR 06, in Swedish), Swedish
Rescue Services Agency, B54-141/06, Karlstad, Sweden.
[2] Johansson, M. and Laine, L., 2006, Resistance capacities of buildings for extreme dynamic
loading, Research project description, Swedish Rescue Services Agency,
http://www.srv.se/templates/SRV_Page____15919.aspx, Karlstad, Sweden.
[3] Remennikov, A.M., 2003, A review of methods for predicting bomb blast effects on buildings,
Journal of Battlefield Technology, 6(3), pp. 5–10.
[4] ConWep, 1992, ConWep – Collection of conventional weapons effects calculations based on TM
5-855-1, Fundamentals of Protective Design for Conventional Weapons, U.S. Army Engineer
Waterways Experiment Station, Vicksburg, USA.
[5] Rose, T.A. and Smith, P.D., 2002, Influence of the principal geometrical parameters of straight
city streets on positive and negative phase blast wave impulses, International Journal of Impact
Engineering, 27, pp. 359–376.
[6] Rose, T.A. and Smith, P.D., 2003, The influence of street junctions on blast wave impulses
produced by vehicle bombs, Proceedings of the 11th International Symposium on Interaction of
the Effects of Munitions with Structures, Mannheim, Germany.
[7] Dörr, A., Brombacher, B., Gürke, G., 2004, Blast behind street junctions originating from vehicle
bombs, Proceedings of 18th Symposium on the Military Aspects of Blast and Shock, Bad
Reichenhall, Germany.
[8] von Rosen, B., Guilbeault, E., Contesabile, E., 2004, A preliminary investigation into the
interaction of shock waves behind a simple rectangular structure, Proceedings of 18th Symposium
on the Military Aspects of Blast and Shock, Bad Reichenhall, Germany
[9] Remennikov, A.M. and Rose, T.A., 2005, Modelling blast loads on buildings in complex city
geometries,” Computers and Structures, 83, pp. 2197-2205.
[10] Smith, P.D. and Rose, T.A., 2006, Blast wave propagation in city streets – an overview, Prog.
Struct. Engng Mater. 8, pp. 16-28.
[11] Century Dynamics Inc., 2004, AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[12] Johansson, M. and Laine, L., 2007, Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Delrapport 1: Last av luftstötvåg (Resistance capacities of buildings for extreme
dynamic loading, Report 1: Load from airblast, in Swedish.), Swedish Rescue Services Agency,
B54-232/07, Karlstad, Sweden.
[13] Johansson, M. and Laine, L., 2008, Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning, Delrapport 2: Explosion i gatukorsning (Resistance capacities of buildings for extreme
dynamic loading, Report 2: Explosion at an intersection, in Swedish.), Swedish Rescue Services
Agency, to be published in 2008, Karlstad, Sweden.
[14] Johansson, M., Larsen O.P., Laine, L., 2007, Explosion at an intersection in an Urban
Environment – Experiments and analyses, Proceedings of the 78th Shock and Vibration
Symposium, Philadelphia, PA, USA.
[15] Kingery, C.N., Bulmash, G., 1984, Airblast Parameters from TNT Spherical Air Burst and
Hemispherical Surface Burst, Ballistic Research Laboratory, Aberdeen Proving Ground, Technical
Report ARBRL-TR-02555, Maryland, USA.
[16] Departments of Special Weapons Agency (DSWA), Army, Navy, and Air Force, 1998, Protective
Structures Automated Design System (PSADs), Version 1.0, U.S. Army Corps of Engineers:
ATTN: CEMP-ET 20, USA.
[17] Baker, W.E., Cox, P.A. Westine, P.S., Kulesz J.J. Strehlow R.A., 1983, Explosion Hazards and
Evaluation, Elsevier Scientific Publishing Company, New York, NY, USA.

-- 14 of 14 --