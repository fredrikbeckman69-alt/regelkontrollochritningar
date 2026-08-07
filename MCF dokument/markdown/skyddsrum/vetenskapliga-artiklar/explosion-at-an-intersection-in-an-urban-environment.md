---
title: "Explosion At An Intersection In An Urban Environment"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/explosion-at-an-intersection-in-an-urban-environment.pdf"
fileType: "PDF"
keywords: ["skyddsrum","explosion","that","autodyn","results","blast","with","were"]
summary: "Explosion at an intersection in an Urban Environment – Experiments and analyses Morgan Johanssona,*, Ola Pramm Larsenb, and Leo Laineb aREINERTSEN Sverige AB Anders Carlssons gata 14, 417 55 Göteborg, Sweden *Corresponding author: morgan.johansson..."
---

Explosion at an intersection in an Urban Environment
– Experiments and analyses
Morgan Johanssona,*, Ola Pramm Larsenb, and Leo Laineb
aREINERTSEN Sverige AB
Anders Carlssons gata 14, 417 55 Göteborg, Sweden
*Corresponding author: morgan.johansson@reinertsen.se
bANKER – ZEMER Engineering A/S
P.O. Box 253, NO-0702 OSLO, Norway
This paper describes the experimental and numerical investigation of an explosion in an
intersection built up of four concrete boxes. Scaled experiments (1:5) with a total of eight
charges (0.4 and 1.6 kg) of PETN detonated at various locations and were registered using a
total of 25 pressure gauges. The experimental results were used to validate numerical
simulations made in the explicit code AUTODYNTM prior to the experimental performance.
An automatic remapping procedure used in the simulations is briefly described and a
coherence measure to compare experimental and numerical results is introduced. It is
concluded that AUTODYN managed very well to predict the blast load obtained in a
complex urban environment.
INTRODUCTION
The Swedish Rescue Services Agency (SRSA) is responsible for the building regulations of the Swedish civil
defence shelters. The shelters have specific regulations for how they are planned, built, equipped and maintained [1].
It is also the responsibility of SRSA to maintain and develop the knowledge connected to these structures. Based on
this it has been concluded that there is a need to increase knowledge about the origin of blast loads and how they
affect their surroundings. Accordingly, a research project, Resistance capacities of buildings for extreme dynamic
loading [2], was initiated in 2006 wherein the main aim is to increase the knowledge of how to determine the
capacity of any given building or group of buildings to withstand the effect of a blast load. This work is divided into
two stages: determination of the load characteristics resulting from the blast load and development of a method to be
used to estimate the capacity of a building subjected to such loads. This paper is part of the first stage.
Predicting the load caused by a propagating blast wave in urban environment, in which phenomena such as
reflection, diffraction and confinement are to be taken into account, is a complex task. Remennikov [3] lists three
types of methods to be used: empirical (or analytical), semi-empirical and numerical methods. For non-complex load
cases it is usually sufficient to use engineering tools based on empirical data, e.g. ConWep [4]. For somewhat more
complex geometry, though, it is necessary to use semi-empirical methods, i.e. methods based on models in which
the important physical process is accounted for in a simplified way. Several researchers have also developed such
models, e.g. [5]-[9], that work well within given limits and that provide an increased understanding of the resulting
blast load. However, when the geometry gets more complex, which might be the case in an urban environment, it
may no longer be possible to use such simplified tools, [10].
In such cases numerical methods incorporating computational fluid dynamics (CFD) techniques, so-called
hydrocodes, may be used. However, even though the computational possibilities, regarding both the complexity of

-- 1 of 10 --

the analysis and the required computer time, steadily increase, it is still of utmost importance to make sure that the
results obtained in such methods are correct. Hence, there is a need to verify such programs against experimental
results. Once this is guaranteed it is possible to use hydrocode programmes to at least in part replace expensive
experimental performances.
In this project the explicit code AUTODYNTM [11] is used and it has been shown in [12] that it provides satisfactory
agreement with ConWep in analyses of spherical air bursts. However, it was necessary to verify that this also is the
case in a more complex urban environment. Accordingly, an experimental test-series was conducted in co-operation
between the Swedish Rescue Services Agency, the Norwegian Defence Estates Agency and the Swedish Defence
Research Agency. The aim of this project is twofold: to increase the knowledge about blast load in a complex
environment and to investigate the possibility for AUTODYN to predict the resulting load characteristics obtained in
a complex environment.
The outline of the paper is as follows: The section EXPERIMENTAL SETUP show how the experiments were
performed. The section FINITE ELEMENT MODEL discuss how the model was set-up and what material
properties were used for the explosive and air. In the RESULTS section analyses are carried out and results are
shown. Finally CONCLUSIONS summarises the findings.
EXPERIMENTAL SETUP
The experimental location consisted of four concrete cubic boxes (dimension 2.3 m) positioned at a distance of
2.3 m apart. Three types of charges, 0.4 kg PETN, 1.6 kg PETN and 1.6 kg TBX, were used and positioned either
close to the ground (0.20 m) or at mid height (1.15 m) of the concrete boxes in four different locations, see Fig. 1.
The tests were carried out in scale 1:5 meaning that the concrete boxes approximately corresponded to a four-storey
building of height 11.5 m with a small charge of 50 kg pentolite, detonating 1.0 m above ground; i.e. a threat
situation roughly equal to what might be expected from a small car bomb.
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
0.20
0.4 kg PETN
0.20
low gauge
1.15
1.6 kg PETN
1.15
centre gauge
Fig. 1. Top view of the experimental set-up and gauges located on the concrete boxes. The charges were placed in
four different positions (#1 – #4) 0.2 m (0.4 kg PETN) or 1.15 m (1.6 kg PETN) above the ground. The
naming of the gauges is as follows: Building letter, Gauge no., Low or Centre. All lengths are in metres.

-- 2 of 10 --

A total of 25 pressure gauges were used to register the pressure-time relations at various locations. 20 gauges (brand:
Kulite) had fixed positions in the concrete boxes: 10 low (L) at a level of 0.20 m, 8 in the centre (C) at 1.15 m above
the ground and 2 on the roof (R), see Fig. 1. All gauges but two were positioned in the middle of the wall/roof. The
last two gauges (BA6L and BA7L) were positioned close to the ground 0.20 m from one of the wall edges in an
attempt to get an approximate reading of the effect the diffraction has on the pressure. The remaining 5 gauges
(brand: PCB) were fastened on wooden boards placed on the ground and had various positions according to Fig. 2,
depending on the position of the charge. Even though all gauges were active in every detonation those gauges set
low and in the centre were mainly used for the evaluation of 0.4 kg and 1.6 kg charges, respectively.
#1 A B
C D
2.3	4.6 1.15	6.9
FF02	FF03	FF12 FF01
FF13 #2
A B
C D
2.3	4.6 1.15 2.3 4.6
FF13	FF12	FF01	FF02	FF03
#3
A B
C D
2.3	4.6 1.15 2.3 4.6
FF12 FF13	FF02 FF01	FF03 #4
A B
C D
2.3	4.6 1.15	6.9
FF12 FF03 FF02 FF01
FF13
Fig. 2. Top view of the different ground pressure gauge positioning for each charge location. All lengths are in
metres.
The explosive used was the Swedish PETN, Sprängdeg m/46, with a density of about 1 500 kg/m3, which consists of
approximately 86 % pentolite and 14 % mineral oil. Accordingly, the 0.4 kg and 1.6 kg charges used consisted of
0.344 kg and 1.376 kg pentolite, respectively. In ConWep [2] the equivalent weight (compared to TNT) of pentolite
is given as 1.42 kg and 1.00 kg for pressure and impulse, respectively. However, when determining the pressure-
time relations for pentolite ConWep uses the average of these values, i.e. 1.21 kg, and accordingly, a charge of 1 kg
Sprängdeg m/46 corresponds to 0.86 ⋅ 1.21 ≈ 1.04 kg TNT. Using this correlation an approximate value of the scaled
distance Z = R/W1/3 can be determined. The horizontal projection of the distance between the charges and the
pressure gauges varied from 1.15 m to about 10 m; resulting in 1.5 ≤ Z ≤ 13 m/kg1/3 and 1.0 ≤ Z ≤ 8.5 m/kg/1/3 for
the 0.4 kg and 1.6 kg charge, respectively.
In this paper only the results for PETN charges, and then mainly those caused by the smaller 0.4 kg charges, are
presented. For more detailed information about the experiments and the analyses performed, see [13].
FINITE ELEMENT MODEL
The blast simulations were performed using the explicit code AUTODYN [11]. All simulations were made before
the experiments were carried out, which means that the experimental results are used to validate how well
AUTODYN manage to describe the blast load in a complex environment similar to that in a city.
In the numerical model the physical domain was represented by rectangular boxes in 3D which in turn were filled
with cube shaped hexahedral linear elements. The size of these rectangular boxes varied based on the blast scenarios
as well as the different remap stages and the planar symmetry present. A typical series of 3D remap runs over 4

-- 3 of 10 --

stages would have approximate rectangular domain sizes of: (2 m)3, (4 m)3, (8 m)3 and (16 m)3. The element size
used highly depended on the remap stage and the total number of elements employed in the numerical mesh. The
high resolution runs strived to utilise the maximum number of elements possible under the 32 bit addressing space
providing approximately 4.5 million elements, which in turn yielded an element size of approximately 10 mm at the
first 3D remap stage. The remapping ratio was always 1:2, consequently doubling the element size in each direction
at every new remap stage. The four concrete blocks and the ground were modelled using rigid boundaries. The
outflow boundary condition was only applied during the last 3D remapping stage to the external phases of the
domain. At all other stages no boundary conditions were necessary since the blast wave front was always fully
contained inside the corresponding numerical domain.
Each simulation involved separate runs over several stages in which a self-developed automatic remapping
technique, further discussed below, was used. The first stage involved a 1D spherical symmetric run using a Multi-
Material Euler solver simulating the initial detonation phase with both explosive material and air. A remap
procedure was then performed into a 2D axial symmetric domain using the same Multi-Material Euler solver.
Finally the simulation was concluded by a series of 3D remapping runs using an Euler-FCT solver with air only.
Some of these 3D remapping stages involved planar symmetry, in which case the symmetry was fully exploited in
the simulations. All of the eight blast scenarios were completed with as many as 7-9 AUTODYN simulations
employing different mesh resolutions for quality assurance and convergence studies. Fig. 3 illustrates the simulation
procedure over the various 3D remapping stages.
Stage 3: 3D remap Stage #1: plane
symmetry
Stage 5: 3D remap Stage #3
Stage 4: 3D remap Stage #2: plane
symmetry
Stage 6: 3D remap Stage #4: full model
Fig. 3. Illustration of the principal layout of the finite element model for simulation of charge at location #1 for
Stages 3 to 6: 3D stages using automatic remapping. Stage 1 (1D spherical symmetry) and Stage 2 (2D axial
symmetry) are not shown.

-- 4 of 10 --

The vast number of simulations with their accompanying remapping stages performed in this project called for
automation at several levels of the simulation process. A quite complex system integrating automatic script
generation with AUTODYN-linked Fortran user-subroutines were therefore developed. This automation system
enabled the batch simulation run of an unlimited number of 3D blast scenarios, each containing several remap stages
with arbitrary geometry and symmetry conditions, with a click of a button. The main idea of this methodology is to
enable automatic detection of the shock front during the blast, so that a remap process can be initiated at the time
when the shock front is close to the boundary. The global script file controls the whole process from the generation
of the new remapped FE models up to the batch control of several simulations running in series.
In AUTODYN there are four different pre-defined material models for the explosive PETN, where the material
densities are set to: 0.88 kg/m3, 1.26kg/m3, 1.50 kg/m3 and 1.77 kg/m3. Which model should be used was unclear,
and therefore, an investigation of the different material models were carried out in order to find out what pressures
and impulse intensities could be expected for different values of the scaled distance Z = R/W1/3. This was done in
AUTODYN using a one-dimensional wedge analysis simulating an undisturbed spherical pressure release. The
results were compared with a corresponding analysis of TNT, [12], and are for the overpressure summarised in
Fig. 4. Here the overpressure is presented as a function of the scaled distance and based on this the equivalent
weight of TNT was determined. From this it can be seen that the resulting pressure will be almost identical for the
PETN material models, with densities 1.26 kg/m3 and higher, available in AUTODYN. It can also be concluded that
the equivalent weight, based on the average value for 2 ≤ Z ≤ 10 m/kg1/3, is about 1.45 kg for the pressure. The
corresponding relation for the impulse intensity was determined as well and was found to be very similar with the
same average equivalent weight of 1.45 kg. Comparing these values with those given in ConWep – 1.42 kg for
pressure and 1.00 kg for impulse – shows that the equivalent weight based on pressure was very similar but that it
differed considerably for the impulse intensity.
10
100
1 000
1 10
Scaled distance, Z [m/kg1/3]
Overpressure,
 P s	
+ [kPa]
PETN - 1.77
PETN - 1.50
PETN - 1.26
PETN - 0.88
TNT
1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
1.8
1.9
2.0
1 10
Scaled distance, Z [m/kg1/3]
Equivalent weight of TNT [kg]
PETN - 1.77
PETN - 1.50
PETN - 1.26
PETN - 0.88
TNT
Fig. 4. Results obtained for different explosive PETN material models in AUTODYN: Pressure as function of
scaled distance (left) expressed as corresponding equivalent weight of TNT (right).
Based on the above and an approximation that the explosive in the charges used had a density of about 1.7 kg/m3,
[13], the PETN material model with density 1.77 kg/m3 was used in the final AUTODYN simulations of the
experimental set-up. The explosive was modelled using the JWL Equation of State (EOS) with automatic conversion
into Ideal Gas EOS when the entire explosive had reached a compression value of -0.95. Furthermore, at the start of
the first 3D remap stage the explosive was converted into air, thus facilitating the use of the single material Ideal-
Gas-EOS-Only Euler FCT solver. Input parameters for air and explosive are listed in Table 1.

-- 5 of 10 --

Table 1. Summary of input parameters in AUTODYN for air and explosive PETN with density 1.77 kg/m3.
Air PETN 1.77
ρ0 1.226·10-3 (g/cm3) ρ0 1.77 (g/cm3)
γ 1.4 C-J Detonation velocity 8 300 (m/s)
P0 101.3 (kPa) C-J Energy density 1.01·107 (kJ/m3)
C-J Pressure 3.35·107 (kPa)
RESULTS
Most of the ground pressure gauges (FF01 to FF13) were positioned within a straight line free from obstructions
from the charge, see Fig. 2, meaning that a direct comparison with results from ConWep is possible. In Fig. 5 the
peak pressures, registered in the ground gauges for different charge locations in the experiments, are compared to
that of ConWep. The correspondence is fairly good for the short distances of 1.15 m and 2.3 m while it is less
accurate for the longer distances of 4.6 m and 6.9 m. This difference is partly due to the confinement effect that the
concrete boxes present (especially true for the charge at location #4) but can not fully explain the difference
observed. It should be noted, though, that the peak pressure might be a bit difficult to capture properly and that the
impulse intensity is a more reliable measure for this type of comparison. However, the disturbances caused by the
surrounding concrete boxes, i.e. confinement and reflection effects, make such a comparison with ConWep
irrelevant. Nevertheless, the results are regarded to be sufficiently close to ConWep to be satisfactory and more
detailed information of resulting pressure-time relations from the experiments are presented together with the
numerical analyses below.
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
1.15 2.3 4.6 6.9
Distance [m]
Overpressure [kPa]
ConWep
#1
#2
#3
#4
0.0
0.5
1.0
1.5
2.0
2.5
3.0
1.15 2.3 4.6 6.9
Distance [m]
Pressure ratio [-]
ConWep
#1
#2
#3
#4
Fig. 5. Comparison of overpressures obtained at ground pressure gauges (FF01 to FF13 in Fig. 2) in experiments
and ConWep. The left diagram shows the incident overpressures while the right shows these pressures
expressed as a ratio of the peak pressure obtained in ConWep. The deviation observed for charge at location
#4 is expected due to confinement effects.
Table 2 presents a comparison of key parameters overpressure P+, arrival time ta and impulse intensity i+ and i-
obtained in the AUTODYN simulations and that of the experiments. Here, the impulse intensity is defined as the
sum of all positive and negative phases, respectively, within the time period tend as shown in Eqs. (1) and (2).
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
end	k
ak
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
end	k
ak
dt	t	P	i	i 1	1
,
,
(2)

-- 6 of 10 --

Table 2. Summary of key parameters P+, ta, i+ and i- from AUTODYN analyses and experiments. The impulse
intensities i+ and i- are determined according to Eq. (1) and Eq. (2) with tend = 50 ms. A “-“ in the table
indicate that the experimental result was not valid.
Location #1 Location #2
Gauge AUTODYN Experiments AUTODYN Experiments
P+ ta i+ i- P+ ta i+ i- P+ ta i+ i- P+ ta i+ i-
[kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas] [kPa] [ms] [Pas] [Pas]
FF01 656 0.62 143 137 480 0.65 248 - 755 0.61 155 152 859 0.46 240 160
FF02 129 2.42 85 94 168 2.58 57 - 137 2.41 86 98 161 2.22 77 97
FF03 32 7.69 52 50 47 8.14 82 54 33 7.72 50 51 41 7.89 51 41
FF12 14 13.45 35 35 20 14.27 38 35 140 2.36 167 168 111 2.52 150 192
FF13 16 9.89 32 32 18 10.50 28 31 52 7.62 74 72 47 8.03 70 80
BA1L 51 3.71 61 67 - - - - 12 7.94 35 37 11 8.00 33 35
BA2L 7 9.63 49 48 8 10.28 53 49 12 7.94 62 63 12 8.50 60 62
BA3L 51 3.71 113 115 63 3.89 112 110 233 2.82 165 159 271 2.90 190 176
BA4L 2 100 0.63 461 208 1 745 0.63 429 - 233 2.82 127 126 155 2.96 93 116
BA6L 94 1.56 76 148 114 1.68 104 107 470 1.43 206 173 - - - -
BA7L 1 221 1.05 290 211 599 1.02 187 452 470 1.43 192 159 373 1.46 159 134
BB1L 6 15.34 20 22 11 16.76 22 19 4 16.59 21 22 6 17.72 21 21
BB2L 3 22.00 21 20 3 23.35 23 20 4 19.46 15 15 4 20.62 16 15
BB3L 6 15.34 42 44 11 16.63 45 44 24 13.31 59 60 30 14.17 60 61
BB4L 14 13.41 68 70 - - - - 26 11.76 69 63 26 12.23 67 62
Location #3 Location #4
Gauge AUTODYN Experiments AUTODYN Experiments
FF01 698 0.62 226 184 610 0.61 237 704 755 0.61 177 176 431 0.56 168 210
FF02 136 2.38 140 141 93 2.53 120 220 142 2.38 152 160 119 2.43 141 167
FF03 33 7.74 76 77 45 7.78 71 66 50 7.64 73 71 47 8.02 54 118
FF12 136 2.38 137 141 93 2.63 113 155 25 13.35 42 42 38 13.73 40 41
FF13 34 7.61 114 112 37 8.21 106 102 13 9.28 34 35 14 9.63 35 28
BA1L 8 9.71 52 51 8 9.81 49 47 13 7.99 35 35 12 8.39 32 31
BA2L 52 3.73 113 115 40 3.90 110 116 234 2.83 155 154 110 2.90 126 147
BA3L 2 258 0.63 505 235 2 369 0.47 763 328 234 2.83 154 153 238 3.00 131 191
BA4L 52 3.73 70 73 58 3.81 73 74 13 7.99 35 35 11 8.45 32 31
BA6L 1 272 1.05 325 233 991 1.03 345 238 113 4.66 126 125 113 4.81 118 130
BA7L 103 1.61 70 132 146 1.65 72 174 22 5.48 47 59 34 5.84 52 60
BB1L 8 11.55 34 31 8 12.34 32 27 13 7.99 35 35 12 8.12 33 31
BB2L 5 13.52 33 35 5 13.85 32 33 13 7.99 35 35 12 7.62 37 35
BB3L 51 7.93 115 112 54 8.39 99 98 234 2.83 154 153 143 2.87 124 144
BB4L 77 6.45 131 127 73 6.89 122 118 234 2.83 155 154 124 2.86 127 151
From this summary it is also clear that the correspondence between experiments and AUTIDYN simulations in
several cases are very good. However, to get a better picture of how well the results coincide a coherence measure,
according to Eq. (3), was introduced.
( ) ( )
−	+ +
−
−	=
∫
Exp	Exp
t
t
Exp	AD
i	i
dt	t	P	t	P
Coh
end
a	
1 (3)
Here PAD(t) and PExp(t) are the pressure obtained in the AUTODYN simulations and experiments, respectively, while
i+Exp and i-Exp are the total positive and negative impulse intensities from the experiments during the time interval
ta ≤ t ≤tend. Thereby, it is possible to fairly straightforwardly compare a large number of numerical and experimental
results and get a measure of how well they coincide. In Eq. (3) Coh = 1.0 signify a perfect match. However, in
general a coherence value of 0.5 or better corresponds to very good agreement between simulated and experimental
results, see Fig. 6.

-- 7 of 10 --

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
A B
C D
#1
BA3L	
Coh = 0.692
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
A B
C D
#3
BB3L	
Coh = 0.436
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
Fig. 6. Example of correlation between AUTODYN analyses and experiments: charge location #1, gauge BA3L
(top left); charge location #2, gauge BA3L (top right); charge location #3, gauge BB3L (bottom left) and
charge location #4, gauge FF02. The coherences are 0.692, 0.566, 0.436 and 0.477, respectively.
From Table 2 and Fig. 6 it can be seen that the agreement between experimental and numerical results are generally
very good. Even though it can be concluded that most results coincided well it was generally observed that the
agreement between analyses and experimental results increased when the peak pressure decreased. Thus, when the
pressure reduces to less than about 50-100 kPa the general agreement went from very good to excellent. In Fig. 7 the
complete batch of coherence data for the 0.4 kg and 1.6 kg charges, totalling 8 charges with almost 200 result series
(all in all about 10 gauges failed to produce any trustworthy results during the experiments), is presented. The results
have been separated into two groups, 0.4 kg and 1.6 kg charges, and it can be seen that the coherence generally is
somewhat higher for the larger charges. Further, it can be noted that about 65 % of the compared results reach a
coherence of 0.5 or higher; i.e. a limit indicating very good agreement.

-- 8 of 10 --

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
Fig. 7. Coherence of 0.4 kg and 1.6 kg charges presented as portion at given coherence (left) and portion higher
than given coherence (right). A coherence value of about 0.5 or higher corresponds to very good agreement,
see Fig. 6, and this limit is reached by approximately 65 % of the compared results.
CONCLUSIONS
An experimental and numerical study of blast load at an intersection has been carried out. The load effects of two
types of charges, 0.4 kg and 1.6 kg PETN, positioned in four different locations have been simulated using the
explicit code AUTODYN and compared to the experimental results. It shall be pointed out that all AUTODYN
analyses were made before the experiments were carried out. Hence, the results presented herein are used to validate
how well AUTODYN manage to describe the blast behaviour in a complex geometry such as in a city environment.
In the blast simulations in AUTODYN an automatic remapping routine is introduced. This routine enabled
automatic detection of the shock front close to a boundary, and thus a criterion for when, in time, to initiate the
remapping process. Consequently, an automatic remapping of the modelled volume is possible, allowing for a more
simplified approach to large blast simulations in a complex environment.
It is shown that there generally is very good agreement between the results obtained in the experiments and the
AUTODYN simulations. A coherence measure is introduced for comparing experimental and numerical results and
it is concluded that this is a convenient method to get a rough estimation of how well the results coincide. It is
shown that for the results presented herein a measure of Coh ≥ 0.5 signify very good agreement and that about 65 %
of the compared measurements fulfil this limit. For gauges where the pressure was low (less than about 50-100 kPa)
the agreement went from very good to excellent. Consequently, it is concluded that AUTODYN manage very well
to describe the resulting blast effects in a complex city environment.
As a sub result of this study the relations for pressure and impulse intensity for the four PETN explosives,
predefined in AUTODYN, are presented and it is shown that there is only a minor difference between three of them.
It is also shown that the equivalent weight, compared to TNT, is about 1.45 kg for both pressure and impulse for
scaled distances of 2 ≤ Z ≤ 10 m/kg1/3; which differ to what is stated in e.g. ConWep.
Even though it is shown herein that AUTODYN performed very well in its prediction of the load characteristics
obtained in the experiments, it shall be pointed out that empirical and semi-empirical methods still fulfil an
important task in that they provide a basic explanation necessary for understanding complex load situations.
Accordingly, such less complex methods are still necessary to better understand the results from a CFD analysis, and
hence help prevent the latter from being transformed into a “black box”. It would even be beneficial to use a
combination of numerical simulations and experimental data to further improve and develop semi-empirical models
in order to better understand the blast load obtained in complex urban environments.

-- 9 of 10 --

ACKNOWLEDGEMENTS
The authors thankfully acknowledge the support given by the Swedish Rescue Services Agency and especially Björn
Ekengren for their support in the project. Furthermore we would like to thank the Norwegian Defence Estates
Agency and the Swedish Defence Research Agency for their initiation and successful co-operation with the
experimental work presented herein.
REFERENCES
[1] Ekengren B., 2006, Skyddsrum, SR 06, Swedish Rescue Services Agency, B54-141/06, Karlstad, Sweden.
[2] Johansson, M. and Laine., L., Resistance capacities of buildings for extreme dynamic loading, Research project
description, Swedish Rescue Services Agency, http://www.srv.se/templates/SRV_Page____15919.aspx,
Karlstad, Sweden.
[3] Remennikov, A.M., “A review of methods for predicting bomb blast effects on buildings,” Journal of
Battlefield Technology, 2003, 6(3), pp. 5–10.
[4] ConWep, 1992, ConWep – Collection of conventional weapons effects calculations based on TM 5-855-1,
Fundamentals of Protective Design for Conventional Weapons, U.S. Army Engineer Waterways Experiment
Station, Vicksburg, USA.
[5] Rose, T.A. and Smith, P.D., “Influence of the principal geometrical parameters of straight city streets on
positive and negative phase blast wave impulses,” International Journal of Impact Engineering, 2002, 27, pp.
359–376.
[6] Rose, T.A. and Smith, P.D., “The influence of street junctions on blast wave impulses produced by vehicle
bombs, ”Proceedings of the 11th International Symposium on Interaction of the Effects of Munitions with
Structures, 2003, Mannheim, Germany.
[7] Dörr, A., Brombacher, B., Gürke, G., “Blast behind street junctions originating from vehicle bombs,”
Proceedings of 18th Symposium on the Military Aspects of Blast and Shock, 2004, Bad Reichenhall, Germany.
[8] von Rosen, B., Guilbeault, E., Contesabile, E., “A preliminary investigation into the interaction of shock waves
behind a simple rectangular structure,” Proceedings of 18th Symposium on the Military Aspects of Blast and
Shock, 2004, Bad Reichenhall, Germany.
[9] Remennikov, A.M. and Rose, T.A., “Modelling blast loads on buildings in complex city geometries,”
Computers and Structures, 2005, 83, pp. 2197-2205.
[10] Smith, P.D. and Rose, T.A., “Blast wave propagation in city streets – an overview,” Prog. Struct. Engng Mater.
2006, 8, pp. 16-28.
[11] Century Dynamics Inc., 2004, AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[12] Johansson, M. and Laine, L., 2007, “Bebyggelsens motståndsförmåga mot extrem dynamisk belastning,
Delrapport 1: Last av luftstötvåg” (“Resistance capacities of buildings for extreme dynamic loading, Report 1:
Load from airblast”, in Swedish.), Swedish Rescue Services Agency, B54-232/07, Karlstad, Sweden.
[13] Johansson, M. and Laine, L., 2008, “Bebyggelsens motståndsförmåga mot extrem dynamisk belastning,
Delrapport 2: Explosion i gatukorsning” (“Resistance capacities of buildings for extreme dynamic loading,
Report 2: Explosion at an intersection”, in Swedish.), Swedish Rescue Services Agency, to be published in
2008, Karlstad, Sweden.

-- 10 of 10 --