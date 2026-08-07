---
title: "Reflection Pressure Dependency On Charges And Buried Structures Properties"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/reflection-pressure-dependency-on-charges-and-buried-structures-properties.pdf"
fileType: "PDF"
keywords: ["skyddsrum","explosion","piston","pressure","shock","sand","with","mass"]
summary: "In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org, Jacksonville, Florida, October 2017. 2D FE and 2DOF Simulations of Ground Shock Experiments – Reflection Pressure Time History Dependency d..."
---

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
2D FE and 2DOF Simulations of Ground Shock Experiments –
Reflection Pressure Time History Dependency due to the Charge´s and
Structure´s Properties
Leo Lainea*, Morgan Johanssonb and Ola Pramm Larsenc
aLL Engineering
Stugvägen 4, SE-438 94 HÄRRYDA, Sweden
*Corresponding author: leo.laine@telia.com
bNorconsult AB
Theres Svenssons gata 11, 417 55 GÖTEBORG, Sweden
cCAEwiz Consulting AS
Grinda 2B, NO-0861 OSLO, Norway
This paper analyses, by using 2D axial symmetry Finite Element (FE) with Autodyn, the
structural response of a well-defined structure; a suspended piston-spring system buried in
sand subjected to ground shock from an explosive charge. The parameters varied in the
simulations were charge size, charge distance, reflection area of the piston, piston mass,
and spring stiffness. Earlier experiments from 1980s, conducted by S. Hultgren, FortF,
showed that the reflection pressure over time was dependent on the mass and stiffness of
the structure. Here, some more parameters were varied in simulations to see how well a
two-degree-of-freedom model (2DOF) can capture the main behaviour of the structural
response. The first aim of the FE simulations was to better understand the physics of the
observed experimental results, which has been confirmed in earlier studies [1], [2]. Based
on this, the second aim was to find a methodology that can use simplified relationships for
ground shock prediction, from e.g. ConWep, in combination with simplified models such
as 2DOF, to predict the structural response of e.g. a buried concrete wall.
The FE simulation models were generated in Autodyn-2D, where the sand was modelled
with Euler cells and the piston, spring, and cylinder were modelled with Lagrange elements.
The sand was modelled with an Equation of State (EOS) designed for porous soils. The
simple 2DOF model confirms some of the main behaviour found in the FE results and
experiments, such as the initial collision effect only depends on mass and that total spring
deflection gave reasonable agreement with simulations.
INTRODUCTION
The Swedish Civil Contingencies Agency (MSB) is responsible for the building regulations of the Swedish civil
defence shelters. There are specific regulations for how the defence shelters are planned, built, equipped, and
maintained [3]. One of many regulations state what load level the shelters should be able to withstand: “The effect of
a pressure wave corresponding to that produced by a 250 kg GP-bomb with 50 weight percent TNT which burst freely
outside at a distance of 5.0 meters from the outside of the shelter during free pressure release”. However, many of the
shelters are designed as basements below ground surface. Therefore, more knowledge on how the ground shock
propagates and attenuates during the scaled distances of 0.1 to 10 kg/m1/3 and effects on buried shelters, is needed.

-- 1 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
During the Second World War, extensive experiment series and research were conducted on ground shock generated
by high explosives [4]. This early work functions as a foundation for understanding the behaviour of how the shock
waves propagates and attenuates in earth media. In [4], it is stated that the pressure in the soil from the detonation of
an explosive charge is propagated by a plastic wave which is characterized by a continuous change of shape and of
duration with distance from the charge, see Fig. 1 for schematic illustration. Close to the source the shape will be sharp
and after a distance it will start to attenuate, and the wave will change shape.
Pressure
Distance from charge
short
distance
intermediate
distance
long
distance
Fig. 1 Schematic illustration of how the free field ground shock wave change shape with distance during
propagation in a compactable soil.
When it comes to the structural response from the propagated pressure wave from ground shock it is not as obvious
as when it comes to the airblast case. When predicting the structural response from airblast it is usually sufficient to
separate the simulation in two parts:
1) Calculation of the pressures acting on rigid body, shaped as the studied structure, from e.g. an airblast
simulation including the explosive and air formulation in a multi material Euler grid.
2) Determine the structural response by applying the calculated pressure time histories from 1) on the
deformable structure modelled by e.g. shell elements.
This procedure is suitable for stiff structures, such as reinforced concrete structures, when subjected to air blast
loading. For simple cases where the threat is directly in front of the structure step 1 above can be simplified to use
empirical equations, e.g. for the incident airblast and adjust what the reflected pressure should be on the structure.
However, this procedure is not applicable when it comes to the structural response due to ground shock simulations
since, in ground shock, the reflected pressure actually depends on the movable mass and stiffness of the structure [5].
Hence, to determine the pressure acting on a structure, caused by ground shock, one must also know the properties of
the structure. In 1979-1980 S. Hultgren at the National Fortifications Administration in Sweden, FortF, conducted
experiments with a simplified structure, a buried suspended piston with mass m and stiffness k. Neglecting the
influence of damping, the response of this structure can be described using a single degree of freedom system by using
equation (1)
  	  	 t	d	k	t	a	m	A	t	P 	x	x	r 						
(1)
where Pr(t) is the reflected pressure acting on the piston surface area A, ax is the acceleration of the piston mass and
dx is the displacement of the piston.
These results show the same trend on how the reflecting pressure builds up by mass inertia and spring stiffness, see
Fig. 2. Experimental results from reports [5]-[6] can be summed up in two points:
• If the structure has a high mass but low stiffness, then the reflected pressure time history results in a large
first peak and a low second peak.
• If the structure has a low mass but high stiffness, the reflected pressure time history gets a low initial peak
and a high second peak.

-- 2 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
In 1985, experiments were conducted for buried deformable reinforced concrete walls with similar results [7]. This
paper compare the experimental results from [5]-[6] with simulations carried out in AUTODYN-2D [8] and a
simplified 2DOF model. Some comparisons have also been carried out in AUTODYN-2D [1]. These early simulations
confirmed the main trends from the experiments. However, the symmetric 2D simulations in [1] included uncertainties
such as improper air blast release due to buried explosive and uncertainty in actual reflected pressure measurements
on the 2D piston. These uncertainties have been validated in 3D simulation model presented in paper [2]. The results
in [2] conclude that the influence of not modelling surface release correctly in 3D is a marginal difference to the axi-
symmetric 2D results for this experimental setup. This since the charge approximately can be regarded as fully buried.
Therefore, the less computational expensive 2D axi-symmetry is used in this paper.
Time, t
Pressure, Pr
   	 A
d	k	a	m	t	P 	x	x	r
1
				
stiffness
mass
inertia
Fig. 2 Schematic illustration of how the reflection pressure Pr(t) is made up of mass inertia m∙ax and stiffness k∙dx
of a buried structure.
The paper is organized as follows: The section ORIGINAL HULTGREN EXPERIMENTAL SETUP AND EARLIER
RESULTS, describes how the experiments were conducted and what parameters were varied. In section FE
SIMULATION MODEL AND PARAMETERS STUDIED it is shown how the Euler and Lagrange elements were
designed in AUTODYN-2D and what material models were used. In section 2DOF MODEL it is shown what
parameters and initial conditions were used in the 2DOF model. In the section SIMULATION RESULTS the results
from the extended parameter variation from obtained from simulations in AUTODYN-2D are analysed and compared
with 2DOF. Finally, the section CONCLUSIONS AND FUTURE WORK concludes the findings from simulations
and proposes suggestions for future work.
ORIGINAL HULTGREN EXPERIMENTAL SETUP AND EARLIER RESULTS
The experiments about the reflected pressure on a buried single degree of freedom system were conducted in sand.
Both the charge of TNT with weight 0.5 kg and the suspended piston was buried 1 m, and the distance between the
charge and the piston was set to 1 m. Unfortunately, the in-situ density of the sand was not measured nor the actual
water content. However, in [5] it is mentioned that the sand was well compacted and not saturated. The experimental
set up is shown in Fig. 3.
r = 1 m
Fig. 3 Principal sketch of the experimental setup of [5]: buried piston with suspended mass m and stiffness k.

-- 3 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
The main cylinder body consisted of a circular steel tube of 1.18 m in length and 0.36 m in outer diameter. The cylinder
wall thickness was 8 mm and the diameter of the piston surface was 0.34 m. To increase the weight of the cylinder
tube lead pieces were bolted to its inside; thus, increasing the total weight of the cylinder body to a total of 295 kg.
The piston was movable on ball bearings through an axis and the stiffness was obtained with a helical spring.
The piston’s movable mass was made of a removable plate and by changing plates with different thickness the
suspended mass m of the piston was varied [5.2, 10.6, 24.7, and 58.8 kg]. Further, by changing the helical spring the
stiffness k was also varied [0.1, 0.5, and 1.2 MN/m].
The following measurements were installed: piston accelerometer (ax), piston reflected pressure gauge (Pr), and
relative piston displacement (dx), see Fig. 3. Further details about the experimental setup, e.g. what model type of
sensors was used, can be found in [5].
Hultgren’s experimental results are presented in Fig. 4. When the piston mass was varied [5.2, 10.6, 24.7, and 58.8 kg],
and the spring stiffness was kept constant to k = 0.1 MN/m, pressures according to Fig. 4 is shown in [5]. The dotted
and dashed lines in Fig. 4 represent the estimated inertial pressure Pinertia and spring pressure Pspring, defined as shown
in equations (2) and (3), respectively. From this it can be noted that the dotted line in Fig. 4 follows well the measured
pressure for the first peak; i.e. the first peak of the reflected pressure directly depends on the piston mass.
   
A
t	a	m
t	P 	x
inertia

	
(2)
   
A
t	d	k
t	P 	x
spring

	
(3)
Fig. 4 Measured reflected pressure, estimated mass inertia pressure, and spring pressure for various piston
masses and with constant spring stiffness k = 0.1 MN/m. From [5].

-- 4 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
For the results in Fig. 5-Fig. 7 the spring stiffness was increased to k = 0.5 MN/m while the piston mass was varied
[5.2, 10.6, 24.7, and 58.8 kg]. Now it can be noticed that the second ridge of the reflected pressure is more dominant
in Fig. 5 compared to that in Fig. 4. A clear first peak is not visible until the piston mass reaches 24.7 kg. In Fig. 6 the
reflected pressures from Fig. 5 are merged into one plot and from this it can be seen that when the piston mass was
5.2 and 10.6 kg there is no clear first peak in the reflected pressure. However, all of them have a second ridge in the
reflected pressure, even though it is slightly reduced when the piston mass is increased.
Fig. 5 Measured reflected pressure, estimated mass inertia pressure, and spring pressure for various piston
masses and with constant spring stiffness 0.5 MN/m. From [5].
Fig. 6 Comparison of measured reflected pressure from Fig. 5 for various piston masses and with constant spring
stiffness 0.5 MN/m. From [5].
In Fig. 7a, the piston mass was kept constant at m = 5.2 kg while the spring stiffness was varied [0.1, 0.5, 1.2 MN/m].
It shows clearly how the second ridge increases with the spring stiffness. In comparison, the reflected pressure is
shown in Fig. 7b when the piston mass is high, m = 58.8 kg, while the spring stiffness was varied [0.1, 0.5, 1.2 MN/m].
From this it can instead be noted that the pressure is only very little affected by the stiffness; i.e. the reflected pressure
is mainly governed by the piston mass. Still the trend with the second ridge increases somewhat with increasing spring
stiffness.

-- 5 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
(a) (b)
Fig. 7 Measured reflected pressures for varied spring stiffness and with constant piston mass: (a) 5.2 kg, and
(b) 58.8 kg. From [5].
These main trends have already been confirmed with FE-simulations in [1], [2]. In the FE simulations in [2] the
reflected pressure Pr(t) of the piston was determined as
    	 
A
t	d	k	t	a	m
t	P 	x	x
r
		
	
(4)
and in Fig. 8 the variation of this pressure is shown in for a case with intermediate spring stiffness (k = 0,5 MN/m),
and two different masses.
Fig. 8 Comparison of simulated reflected pressure for various piston masses and with constant spring stiffness
0.5 MN/m. Note that both diagrams show the same result but with different scaling on the vertical axis. For
the corresponding experimental results, see Fig. 6. Results from [2].
From this it can be noted that a distinct initial pressure spike appears and that it is considerably larger when the mass
is high (m = 58.8 kg) compared to when the mass is low (m = 5.2 kg). The appearance of such a distinct pressure peak
is not in conjunction with the experiments; compare reflected pressure in Fig. 4 and Fig. 5. Further, the forming of a
first (inertia) and second (stiffness) pressure peak, as schematically illustrated in Fig. 2, is not as clearly identified in
the simulations as in the experiments. This is believed to, at least partly, be due to the strong initial pressure peak
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
1000
0 	10 	20 	30 	40 	50
Pressure,
 Pr [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2 kg
58.8 kg
Nr 	k = 0.5 MN/m
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
200
0 	10 	20 	30 	40 	50
Pressure,
 Pr [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2 kg
58.8 kg
Nr 	k = 0.5 MN/m
First peak
(inertia)
Second peak
(stiffness)

-- 6 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
obtained in the simulations. The reason for the above discrepancies are unknown. However, measuring the pressure
in a material like sand is difficult and one possible reason might be that such an initial peak may have been filtrated
away in the original experiments. The difference is noted but is apart from that not further treated here.
In Fig. 9 the reflected pressure from different simulations is compared for various stiffness when the piston mass is
low (m = 5.2 kg) and high (m = 58.8 kg). When the piston mass is low it is clear that increased stiffness result in an
increase of the second pressure peak (stiffness) in a way that is in good conceptual agreement with the experiments,
compare with Fig. 7a. When the piston mass is high, though, the resulting reflected pressure is not as straightforward.
Here, the simulations show that an increased stiffness still has a similar effect and thus cause an increased reflected
pressure of the second pressure peak. However, this is not in full conjunction with the experimental observations, see
Fig. 7b, where it is indicated that the effect of the stiffness is less important on the reflected pressure in the second
pressure peak when the piston mass is high.
m = 5.2 kg m = 58.8 kg
Fig. 9 Simulated reflected pressures for varied spring stiffness and with constant piston mass 5.2 kg or 58.8 kg.
For the corresponding experimental results, see Fig. 7. Results from [2].
FE-3D 2DOF
Fig. 10 Comparison of initial reflected pressure (solid lines) and reflected impulse intensity (dashed lines) obtained
from 3D FE analyses and 2DOF model for various masses and spring stiffness 0.5 MN/m. Results from [2].
The resulting pressure from the 2DOF analysis showed that the first initial inertia pressure could be modelled. The
pressure acting between sand cone and piston plate, is in Fig. 10 compared with the reflected pressure acting on the
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
200
0 	10 	20 	30 	40 	50
Pressure,
 Pr [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
1.2 MN/m
0.5 MN/m
0.1 MN/m
m = 5.2 kg 	Nr
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
200
0 	10 	20 	30 	40 	50
Pressure,
 Pr [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
1.2 MN/m
0.5 MN/m
0.1 MN/m
m = 58.8 kg 	Nr
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
1000
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
1 000
0 	1 	2 	3 	4 	5
Impulse intensity,
 ir [Pas]
Pressure,
 Pr [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2
10.6
24.7
58.8
k = 0.5 MN/mg
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
1000
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
1000
0 	1 	2 	3 	4 	5
Impulse intensity,
 iload
 [Pas]
Pressure,
 Pload
 [kPa]
Time, t [ms]
Last från jord mot fjäder
5.2 kg
10.6 kg
24.7 kg
58.8 kg

-- 7 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
piston plate in the 3D FE analyses for different masses when k = 0.5 MN/m. No influence on the resulting pressure
was obtained due to spring stiffness; and hence it can be observed that for the cases studied the initial reflected pressure
only depends on the piston mass. Further details about 3D FE-model setup or SDOF model setup can be found in [2].
Finally, if the incident wave was reflected against a rigid surface the pressure should increase with a factor of 2. Here,
though, the ratio Pload / Pi is less than that; with decreasing value for decreasing piston mass. The reflection factor
depends on the piston mass and varies from 0.97 to 1.98 (comparing with free field incident pressure in 2D) when the
piston mass is increased from 5.2 to 58.8 kg, see [2].
FE SIMULATION MODEL AND PARAMETERS STUDIED
The FE model was built in AUTODYN [8] using a 2D axial symmetric geometry, see Fig. 11. The size of the model
was 100 m x 50 m, which meant that the effects of reflections from the boundary could be entirely avoided for the
piston response of at least 200 ms. There is a fine mesh rectangle 5.0 (6.0) m x 1.5 m containing the Free-Field target
#25 and the right hand side of the fixed cylinder (orange) with square cell size of 2.5 mm. The sand, TNT, and VOID
material inside the cylinder were modelled with multi-material Euler elements. The piston plate (blue) was modelled
using rigid Lagrange elements constrained to move only in the piston direction. The cylinder body (orange) was also
modelled using Lagrange elements and was fixed in all directions. The spring (purple) was modelled as a 1-element
Lagrange spring with initial length of L0 = 10.0m. The purpose of the exaggerated spring length was to emulate an
ideal linear Hook’s law spring (F = k x) as close as possible (L0 >> x). Using the 1-element Lagrange spring yields a
spring stiffness of k(x) = k0 L0/(L0-x) with k0 being the initial stiffness of the uncompressed spring.
)	(
)	(
)	(
0
0	0 t	d
t	d	L
L	k
t	Fs 

	
(5)
where d is the displacement of the plate (dark blue), see Fig. 11. The simulations were optimized for computational
time by grid refinement using geometrical cell coarsening in the far field. The model was also parameterized so that
charge size, distance to piston plate, piston plate mass, piston circular area, and spring stiffness could automatically
be varied. Gravity was considered to have minimal impact on the simulation results and was hence not included in the
model.
Fig. 11 2D axial symmetric model, with 25 fixed target points in the Eulerian SAND domain. The radial position
of the four target rows i.e. 1-6, 7-12, 13-18, and 19-24 are located relative to the cylindrical plate (blue
with radius rpl). The 10m long Lagrangian spring (purple) is fixed at its right hand side and connected to
the cylindrical plate. Target 26 is located on the piston plate.

-- 8 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
Modelling of the sand
A simple way of modelling compaction materials is to define the plastic compaction curve as a pressure function of
density P(
) and the unloading wave speed as a function of density c(
), see Fig. 12 for a schematic illustration. The
unloading is then approximately represented by the straight blue lines on top of the dashed unloading curves. The
solid straight line marked with TMD means Theoretical Maximum Density.
Earlier work on deriving mechanical properties for dry sand from tri-axial experiments, [10] and [11], does not include
an easy change on how moisture affects the input parameters of the compaction EOS. When the soil type changes in
water contents, porosity, and soil skeleton, the original compaction model [10] would need a new set of input. This
has been studied in [16] where a total of 16 generic soil types was generated from dry sand to fully saturated clay.
However, the main deficiency of the original model [15] for the compaction EOS is that the unloading phase is too
simplified to properly model the shock wave propagation and the change in shape of the pressure wave as stated in
[4]. In [18] an initial study was made of what the solution of unloading wave c(
,P) for the dry sand would look like
by using Non-Linear Programming (NLP) for numerically approximating each unloading curve. This allowed the
experimental data from [10] and [11] to be extrapolated for the whole density pressure domain of interest [19].
Pressure, P
Density, ρ	ρ0 ρTMD
cTMD
(ρr, Pn)
plastic compaction
curve
nonlinear
unloading linear
unloading
fully compacted
material
Fig. 12 Schematic illustration of an EOS compaction, where the solid line between (
0, P0 = 0) and (
n, Pn) shows
a plastic compaction curve, dashed red lines illustrate nonlinear unloading and straight blue lines show
linear approximation with elastic unloading wave c(
).
However, in this paper only the original (denoted Sjöbo) material model was used in the FE 2D-axisymmetry
simulations, comparison of the modified material model (ModEOS) and Sjöbo was done in earlier 2D simulations
[20]. In Sjöbo material model, the unloading speed only depends on density c(ρ). The choice of not including both
material models in the study was to focus on the main dynamic behaviour related to the interaction of the sand and the
buried piston. Another benefit with Sjöbo sand is that original data and EOS and strength formulation is available for
all Autodyn users in the standard library. The material properties for both volume and shear behaviour, and the user
subroutines for the modified EOS and modified shear strength model for AUTODYN can be found in [20].

-- 9 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
2DOF MODEL
The 2DOF model simplifies the experimental setup by the following assumptions, the sand in front of the structure is
assumed to be modelled as an added mass, see Fig. 13 The explosive load is converted to either a force as function of
time acting on the added mass or as a mass with an initial particle velocity on the added mass. In Fig. 14., the principal
system of 2DOF is shown. The spring k1 can only transfer compressive forces while spring k2 can transfer forces in
both directions. The initial velocity v0 (i.e. the sand particle velocity Up0) is used for describing the movement of the
sand generated by the explosion.
Fig. 13 Illustration of how the 2DOF model is set up. The piston mass is connected to a second mass which is
assumed to be an added mass from the sand and during compression the masses have a spring stiffness
based on the bulk modulus of the sand.
v0
m1 m2
k1 	k2
dx1 dx2
m1
F1(t)
k1·(dx1 – dx2) m2
F2(t)
k2·dx2
dx2	dx1
Fig. 14 Illustration of 2DOF model used. Spring k1 can only transfer compressive forces while spring k2 can
transfer forces in both directions.
The equations used to solve the 2DOF model can be written as
 
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






	

	
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
0	0
0 	1
2
1
2	1	1
1	1
2
1
2
1 	t	F
d
d
k	k	k
k	k
a
a
m
m
x
x
x
x
(6)
where m1 and m2 is the sand mass and mass of the piston plate, respectively, k1 is the stiffness of the sand cone and k2
is the stiffness of the spring. Further ü1 and ü2 are accelerations and u1 and u2 are displacements of masses m1 and m2,
respectively. To correctly simulate that sand cannot transfer tensile forces the sand spring k1 was modified so that only
compressive forces could be transferred; spring k2 though was linear elastic in both directions. The influence of
damping was assumed to be negligible and is hence not included in the model. The added mass of sand is calculated
as the mass of a cone between the charge point and the piston plate (i.e. the base of the cone) as
sand	sand
r
A	m	
			 3
(7)
where A is the area of the piston plate, r is the charge distance and ρsand = 1674 kg/m3 is the sand in situ density.

-- 10 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
The linear spring stiffness of the sand is approximated as
cone
sand
sand l
A	K
k 
	
(8)
where Ksand is the sand bulk modulus and
3
r
lcone 	
(9)
is the distance from the centre point of the sand cone to the piston plate. The bulk modulus was approximated to be
equal both for loading and unloading cases and was determined as
2
sand	sand	sand 	c	K 		
	
(10)
where csand = 350 m/s is the speed of the pressure wave (a typical value for dry soil [20]). This gives a sand bulk
modulus of Ksand = 0.2 GPa (as a comparison, this is about ten times smaller than the bulk modulus of water,
Kwater = 100014842 = 2.2 GPa). The model parameters for all cases are gathered in Table 1.
Table 1 Model parameters used in the 2DOF model for the cases studied.
Identification Part 1: Sand Part 2: Spring
Group Case m k msand ksand
[kg] [MN/m] [kg] [MN/m]
1 1-12 5.2 – 58.8 0.1 – 1.2 50.7 56
2 13-24 5.2 – 58.8 0.1 – 1.2 101.3 112
3 25-36 5.2 – 58.8 0.1 – 1.2 202.6 223
4 37-48 5.2 – 58.8 0.1 – 1.2 50.7 56
5 49-60 5.2 – 58.8 0.1 – 1.2 50.7 56
6 61-72 5.2 – 58.8 0.1 – 1.2 50.7 56
7 73-84 5.2 – 58.8 0.1 – 1.2 50.7 56
8 85-96 5.2 – 58.8 0.1 – 1.2 101.3 28
9 97-108 5.2 – 58.8 0.1 – 1.2 202.6 223
In this paper the hypothesis was that an effective sand mass, with an initial particle velocity, will give satisfying
agreement with the FE results of initial reflected pressure for the different piston masses and spring deflection. In
previous work, see [1] and [2], the initial particle velocity used was derived with ConWep [21] for a sand with
1674 kg/m3 in density, seismic wave speed 350 m/s, and 2.75 attenuation factor. This gave a particle velocity of
1.5 m/s for the selected charge size and distance to target. Here, though, particle velocities from Autodyn simulations
have been used instead; for more detail see COMPARISON WITH 2DOF MODEL.

-- 11 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
SIMULATION RESULTS
Simulations were carried out for a total of 12 combinations of different piston mass [5.2, 10.6, 24.7, 58.8 kg] and
spring stiffness [0.1, 0.5, 1.2 MN/m]. For each of these combinations, the charge size W [0.5, 0.75, 1.0, 1.5 kg TNT]
and the horizontal distance r, between charge and piston plate, was in one case also varied [1, 2 m]. Further, for some
groups the piston contact surface was increased in size: ΔA = (A-A0)/A0·100, [0, 100, 300 %]. A total of 9 groups, each
with 12 simulations, were conducted; resulting in a total number of 108 simulations, see Table 2 and APPENDIX I –
CONDUCTED SIMULATION MATRIX.
Table 2 Summary of simulations carried out. In each group the piston mass [5.2, 10.6, 24.7, 58.8 kg] and spring
stiffness [0.1, 0.5, 1.2 MN/m] were varied, resulting in a total of 108 simulations.
Group Case W r ΔA
[kg] [m] [%]
1 1-12 0.50 1.0 0
2 13-24 0.50 1.0 100
3 25-36 0.50 1.0 300
4 37-48 0.75 1.0 0
5 49-60 1.00 1.0 0
6 61-72 1.25 1.0 0
7 73-84 1.50 1.0 0
8 85-96 0.50 2.0 0
9 97-108 1.50 1.0 300

-- 12 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
The influence of the size of the piston surface is studied for the load case 0.5 kg TNT and r = 1 m during the initial
phase up to 5 ms. In Fig. 15, the particle velocity in the sand just in front of the piston is studied in target points #1,
#2, #3, see Fig. 11 for point positions. In addition, the piston velocity is also studied. All pistons have the same stiffness
0.1 MN/m, upper plots shows piston with mass 5.2 kg and lower plots with mass 58.8 kg. The increased piston surface
increases from plot (a) 0 % to (b) 100 % and finally to (c) 300 %. For the piston with mass 5.2 kg there is only a
marginal increase in piston velocity due to increase in piston area. However, For the piston with mass 58.8 kg both
the response time is shortened from 1.8 ms to 0.5 ms and the piston speed is also increased from 1.1 m/s to 1.9 m/s
during the initial 5 ms. This initial part of the piston movement is only mass inertia dependent, see Section ORIGINAL
HULTGREN EXPERIMENTAL SETUP AND EARLIER RESULTS. When studying the ground shock pressure in
front of the piston it can be concluded that the pressure profile during the first 5 ms is almost the same for the piston
mass 5.2 kg when the piston surface is increased, see upper plots in Fig. 16. When the piston with mass 58.8 kg is
studied it can be seen that the amplitude of the pressure is the same, e.g. target point #1 reaches a pressure of 800 kPa,
but the duration of the positive phase of ground shock decreases with increased piston surface, see upper plots in
Fig. 16.
(1a) (1b) (1c)
(2a) (2b) (2c)
Fig. 15 Piston velocity #26 and particle velocity in sand #1, #2,#3 as a function of time. For load case 0.5 kg TNT
and r=1.0 m. Upper plots (1), shows how piston weight 5.2 kg reacts for increased piston surface 0, 100,
and 300%, (1a),(1b), and(1c), respectively, Lower plots (2), shows how piston weight 58.8 kg reacts for
increased piston surface 0, 100, and 300%, (2a),(2b), and(2c), respectively. All cases have piston spring
stiffness of 0.1 MN/m.

-- 13 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
(1a) (1b) (1c)
(2a) (2b) (2c)
Fig. 16 Reflected pressure in sand #1, #2,#3 as a function of time. For load case 0.5 kg TNT and r = 1.0 m. Upper
plots (1), shows how piston weight 5.2 kg reacts for increased piston surface 0, 100, and 300%, (1a),(1b),
and(1c), respectively, Lower plots (2), shows how piston weight 58.8 kg reacts for increased piston surface
0, 100, and 300%, (2a),(2b), and(2c), respectively. All cases have piston spring stiffness of 0.1 MN/m.

-- 14 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
In Fig. 17 and Fig. 18 the particle velocity and reflected pressure, respectively, are shown for the cases when the
horizontal charge distance is kept constant but the charge weight is increased from 0.5 to 1.0 to 1.5 kg TNT. In the
upper plots of Fig. 17 it is shown that the particle velocity, both before and after impact of piston with mass 0.5 kg
and stiffness 0.1 MN/m, is steadily increasing from 2 to 3 to 4 m/s, respectively. In the lower plots of Fig. 17 it can be
seen that the pressure, before impact of piston with mass 58.8 kg and stiffness 0.1 MN/m, is increasing as before. The
velocity after impact, though, is lower: 1 to 2 to 2.5 m/s, respectively. In the upper plots of Fig. 18 one can see a steady
increase in reflected pressure for piston with mass 5.2 kg. Here, the reflected maximum pressure increases from 600
to 900 to 1150 kPa. In the lower plots of Fig. 18 the results for the piston with mass 58.8 kg and stiffness 0.1 MN/m
is shown. It can be seen that both the reflected maximum pressure and the positive phase duration is now higher
compared to the piston with mass 5.2 kg. The maximum pressure increases from 800 to 1200 to 1500 kPa, and the
positive duration increase from 0.3 ms (mass 5.2 kg) to 1.8 to 2.0.
(1a) (1b) (1c)
(2a) (2b) (2c)
Fig. 17 Piston velocity #26 and particle velocity in sand #1, #2,#3 as a function of time. For load cases 0.5, 1.0,
and 1.5 kg TNT and r=1.0 m. Upper plots (1), shows how piston weight 5.2 kg reacts for increased charge
weight 0.5, 1.0, and 1.5 kg TNT, (1a),(1b), and(1c), respectively, Lower plots (2), shows how piston weight
58.8 kg charge weight 0.5, 1.0, and 1.5 kg TNT, (2a),(2b), and(2c), respectively. All cases have piston
spring stiffness of 0.1 MN/m.

-- 15 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
(1a) (1b) (1c)
(2a) (2b) (2c)
Fig. 18 Reflected pressure in sand #1, #2,#3 as a function of time. For load cases 0.5,1.0, and 1.5 kg TNT and
r=1.0 m. Upper plots (1), shows how piston weight 5.2 kg reacts for increased charge weight 0.5, 1.0, and
1.5 kg TNT, (1a),(1b), and(1c), respectively, Lower plots (2), shows how piston weight 58.8 kg charge
weight 0.5, 1.0, and 1.5 kg TNT, (2a),(2b), and(2c), respectively. All cases have piston spring stiffness of
0.1 MN/m.

-- 16 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
In Fig. 19 and Fig. 20 the particle velocity and reflected pressure, respectively, is shown for the cases when the
horizontal charge distance is kept constant to 1.0 m and the charge weight is set to 1.5 kg TNT. The piston surface is
increased from 0 to 300%, respectively. The upper plots in Fig. 19 show that for the piston with mass 5.2 kg the
particle and piston velocity will be approximately the same, 4 m/s, with a slight increase for the after impact speed
when the surface is 300%, see Fig. 19 (1b). Similar results for reflected pressure, compare (1a) and (1b) in Fig. 20,
where pressure profiles are identical for 0 % and 300 % increased piston surface. When comparing the piston and the
particle velocity for the piston with mass 58.8 kg and stiffness 0.1 MN/m. The piston and particle velocity after impact
increases from 2.5 m/s to 3 m/s and above for the particle velocity in the soil when the surface is increased to 300%,
compare (2a) and (2b) in Fig. 19. When the reflected pressure is compared for the piston with mass 58.8 kg and with
stiffness 0.1 MN/m, it can be seen that increasing the surface reduces the positive phase duration of the pressure and
slightly reduces the maximum reflected pressure of 1500 kPa, compare (2a) and (2b) in Fig. 20.
(1a) (1b)
(2a) (2b)
Fig. 19 Piston velocity #26 and particle velocity in sand #1, #2,#3 as a function of time. For load cases 1.5 kg TNT
and r=1.0 m. Upper plots (1), shows how piston weight 5.2 kg reacts for increased piston surface 0 and
300 %, (1a) and (1b), respectively, Lower plots (2), shows how piston weight 58.8 kg reacts for increased
piston surface 0 and 300 %, (1a) and (1b), respectively. All cases have piston spring stiffness of 0.1 MN/m.

-- 17 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
(1a) (1b)
(2a) (2b)
Fig. 20 Reflected pressure in sand #1, #2,#3 as a function of time. For load cases 1.5 kg TNT and r=1.0 m. Upper
plots (1), shows how piston weight 5.2 kg reacts for increased piston surface 0 and 300 %, (1a) and (1b),
respectively, Lower plots (2), shows how piston weight 58.8 kg reacts for increased piston surface 0 and
300 %, (1a) and (1b), respectively. All cases have piston spring stiffness of 0.1 MN/m.

-- 18 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
The total spring displacement is mainly influenced by the spring stiffness and then how big the piston area is, see
Fig. 21. In addition the piston mass is only marginally influencing the final spring displacement. In Fig. 22 it is shown
for the largest charge weight 1.5 kg TNT, that the piston area is giving several times larger final deflection when the
surface area increased with 300%; e.g. the displacement was 107 mm for 5.2 kg piston mass and 0.1 MN/m with 0 %
increased piston surface and 510 mm for 5.2 kg piston mass and 0.1 MN/m with 300 % increased piston surface. A
steady increase for final displacement was seen when the charge weight was increased, see Fig. 23.
When it comes to the piston reflected pressure it is really built up from and calculated by using eq. (4), where the
inertia pressure is mass dependent and the spring pressure part is stiffness dependent. Here, it is shown that when
increasing the piston surface the initial inertia peak reflected pressure on the piston is reduced, see Fig. 24. When
comparing the maximum deflection for the load cases with different charge weight, it can be seen that the displacement
is steadily increased, see Fig. 25.Fig. 23
(1a) (1b) (1c)
(2a) (2b) (2c)
Fig. 21 Piston displacement #26 as a function of time. For load case 0.5 kg TNT and r=1.0 m. Upper plots (1),
shows how piston weight 5.2 kg reacts for increased piston surface 0, 100, and 300%, (1a),(1b), and(1c),
respectively, Lower plots (2), shows how piston weight 58.8 kg reacts for increased piston surface 0, 100,
and 300%, (2a),(2b), and(2c), respectively. All plots show how piston spring stiffness of 0.1 0.5 and 1.2
MN/m influences the final displacement.

-- 19 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
(1a) (1b)
(2a) (2b)
Fig. 22 Piston deflection #26 as a function of time. For load cases 1.5 kg TNT and r=1.0 m. Upper plots (1), shows
how piston weight 5.2 kg reacts for increased piston surface 0 and 300 %, (1a) and (1b), respectively,
Lower plots (2), shows how piston weight 58.8 kg reacts for increased piston surface 0 and 300 %, (1a)
and (1b), respectively. All plots show how piston spring stiffness of 0.1 0.5 and 1.2 MN/m influences the
final displacement.

-- 20 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
(1a) (1b) (1c)
(2a) (2b) (2c)
Fig. 23 Piston deflection #26 as a function of time. For load cases 0.5,1.0, and 1.5 kg TNT and r=1.0 m. Upper
plots (1), shows how piston weight 5.2 kg reacts for increased charge weight 0.5, 1.0, and 1.5 kg TNT,
(1a),(1b), and(1c), respectively, Lower plots (2), shows how piston weight 58.8 kg charge weight 0.5, 1.0,
and 1.5 kg TNT, (2a),(2b), and(2c), respectively. All plots show how piston spring stiffness of 0.1 0.5 and
1.2 MN/m influences the final displacement.

-- 21 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
(1a) (1b) (1c)
(2a) (2b) (2c)
Fig. 24 Piston reflected pressure #26 as a function of time. For load case 0.5 kg TNT and r=1.0 m. Upper plots (1),
shows how piston weight 5.2 kg reacts for increased piston surface 0, 100, and 300%, (1a),(1b), and(1c),
respectively, Lower plots (2), shows how piston weight 58.8 kg reacts for increased piston surface 0, 100,
and 300%, (2a),(2b), and(2c), respectively.

-- 22 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
(1a) (1b) (1c)
(2a) (2b) (2c)
Fig. 25 Piston reflected pressure #26 as a function of time. For load cases 0.5,1.0, and 1.5 kg TNT and r=1.0 m.
Upper plots (1), shows how piston weight 5.2 kg reacts for increased charge weight 0.5, 1.0, and 1.5 kg
TNT, (1a),(1b), and(1c), respectively, Lower plots (2), shows how piston weight 58.8 kg charge weight 0.5,
1.0, and 1.5 kg TNT, (2a),(2b), and(2c), respectively.
Fig. 26 shows pressure plots from the ground shock arriving at the piston and it can be seen that the initial reflection
part is already over at 3.5 ms. This has also been confirmed in earlier studies [2].
t = 2.35 ms t = 2.45 ms t = 3.0 ms t = 3.5 ms
Fig. 26 Pressure plots at different times from 2D-FE simulations of 58.8 kg and 0.1 MN/m, with charge weight
1.0 kg with horizontal distance 1 m, Blue = 0 kPa, green = 750 kPa, red ≥ 1500 kPa.
Fig. 27 shows the shear stress (ZX) for the same times as in Fig. 26 and indicates that in front of the piston there is a
cone shaped part which can be seen at 3 ms. This can be an indication that there is an effective sand mass, i.e. the sand
inside the cone, colliding with the piston at a certain particle velocity.

-- 23 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
t = 2.3 ms t = 2.5 ms t = 3.0 ms t = 3.5 ms
Fig. 27 Shear stress (ZX) plots at different times from times from 2D-FE simulations of 58.8 kg and 0.1 MN/m, with
charge weight 1.0kg with horizontal distance 1 m,
Blue ≤ -200 kPa, green = 0 kPa, red ≥ 200 kPa.
In Fig. 28. the corresponding sand particle velocity Up,x is shown. Here it can be noted that the sand velocity directly
in front of the piston is larger compared to the sand outside the piston; i.e. these plots indicate that the sand in front of
the projected area of the piston encounter less resistance compared to the sand outside this zone. This response is
conceptually very different to that obtained in e.g. a shock wave in air hitting an object, in which the shock wave in
front of the object instead would reflect against it. The shape of the velocity distribution differs from the cone shaped
part found in Fig. 27. This indicates that the volume of the effective mass colliding with the piston may be larger than
that assumed in the 2DOF simulations. It seems that the mass transportation away from the centre of the explosive
detonation increases in the direction of the piston, and the simple reason is that the spring stiffness for the piston is
maximum 1.2 kN/m; i.e. more than 45 times smaller than the sand stiffness of 56 kN/m, see Table 1. This gives a
reason to transport more sand material towards the piston area, which is more easily compressed than the surrounding
sand. This is also confirmed in the t = 10 ms plot in Fig. 28.
t = 2.35 ms t = 2.45 ms t = 3.0 ms t = 10 ms
Fig. 28 Absolute velocity plots at different times from plots at different times from times from 2D-FE simulations
of 58.8 kg and 0.1 MN/m, with charge weight 1.0kg with horizontal distance 1 m,
Blue ≤ 0 m/s, green = 1.5 m/s, red ≥ 3 m/s.

-- 24 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
COMPARISON WITH 2DOF MODEL
Comparisons of Autodyn results have been made with a 2DOF model. Here, the initial velocity of the piston plate,
vplate, and the maximum internal energy of the spring, Wi, is compared. The initial plate velocity is based on classic
elastic impact theory and can be determined as
imp
plate	sand
sand
plate 	v
m	m
m
v 	

 2
(11)
where vimp = Up,imp is the particle velocity of the sand at first impact. In the 2DOF analyses it was noticed in [2] that
the spring internal energy converges towards the kinetic energy of the incoming mass; i.e.
2
2
0
,	2,
v	m
E	W 	sand
sand	k	DOF	i

		
(12)
where the velocity v0 = Up,sand is a velocity that represent a energy weighted mean velocity of the whole sand cone.
Hence, Up,sand ≠ Up,imp; instead it is a velocity that relates to the kinetic total energy of the sand cone just prior to impact
to the piston plate. This weighted velocity can be determined as
 	
sand
ip	i	sand
sand	p m
U	m
U  	

2
,	,
,	
(13)
where Δmsand,i and Up,i is the mass and particle velocity, respectively, in part i of the sand cone at the time of impact.
The spring internal energy can be determined as
2
2
2x
i
d	k
W 
	
(14)
where k is the spring stiffness and dx2 is the deformation of the spring.
In this comparison particle velocities from the Autodyn simulations have been used rather than particle velocities
determined using ConWep [21]; see Fig. 29 for an example of Up(t) at different distances from the charge in a free
field environment. The sand particle velocities at impact in ConWep and Autodyn are compared in Fig. 30. From this
it can be noted that the difference is rather substantial in most cases. This may be due to the choice of attenuation
factor used in ConWep (2.75 was used) but is not further dealt with here. Further, the weighted particle velocity Up,sand,
according to equation (13), is also included in order to determine the total kinetic energy of the sand cone.

-- 25 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
Fig. 29 Particle velocity at different distances from the charge for simulations in Group 1 (W = 0.5kg TNT,
r = 1.0 m).
Fig. 30 Comparison of particle velocities in ground obtained using ConWep and the present Autodyn analyses. The
effective particle velocity Up,sand, describes an average velocity in the sand cone used to determine its kinetic
energy at the time the shock front reaches the piston plate, see equation (13).
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
0.0 	1.0 	2.0 	3.0 	4.0 	5.0
Particle velcocity,
 Up [m/s]
Time, t [ms]
Partikelhastighet - Frifält
0.3 r
0.4 r
0.5 r
0.6 r
0.7 r
0.8 r
0.9 r
1.0 r
Up,max
W = 0.5 kg
r = 1 m
Group 1-3
1.52
2.21
2.88
3.53
4.17
0.23
1.42
1.76
2.07
2.35
2.60
0.41
2.27
3.08
3.87
4.63
5.37
0.36
0
1
2
3
4
5
6
1, 2, 3 	4 	5 	6 	7, 9 	8
Particle velocity,
 Up [m/s]
Group
Comparison of particle velocities in ground
ConWep
Autodyn
Sand

-- 26 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
In Fig. 31 a comparison of the velocity ratio
DOF	plate
Autodyn	plate
v v
v
2,
,

		
(15)
and energy ratio
DOF	i
Autodyn	i
W W
W
2,
,

		
(16)
is shown for all 108 simulations. From this it can be seen that the initial plate velocities is rather similar in Autodyn
and 2DOF; the ratios mostly being within 0.8-1.1. For the internal energy, though, the conformance is not as good,
even though the ratios for most cases are within 0.6-1.5. It can be noted that a low stiffness and large piston plate area
generates a larger value on ηW while, the plate mass, though, seems to have a rather minor effect on the resulting ratio
(only load cases 85-96, i.e. Group 8, is affected much). Further, an increased charge weight somewhat decreases the
energy ratio ηW. For load cases with the charge located at distance r = 2.0 m from the piston plate, i.e. Group 8, the
largest deviations in both velocity and energy ratios are observed. The reason for this is unknown and need further
studies.
Fig. 31 Comparison of velocity and energy ratios of the plate and spring stiffness obtained using Autodyn and
2DOF for all 108 cases studied.
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
1.8
2.0
0 	12 	24 	36 	48 	60 	72 	84 	96 	108
Ratio (Autodyn / 2DOF) [-]
Load case
Comparison of 2DOF and Autodyn
v2
Wi,2

-- 27 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
CONCLUSIONS AND FUTURE WORK
2D Finite Element simulations have been carried out in Autodyn to study the structural response of a well-defined
structure; a suspended piston-spring system buried in sand subjected to ground shock from an explosive charge. The
parameters varied in the simulations were charge size, charge distance, reflection area of the piston, piston mass, and
spring stiffness; a total of 108 load cases were studied. Further, an attempt has been made to approximately describe
the structural response using a simplified 2DOF model; describing the sand and structure, respectively.
A simplified calculation method, based on a 2DOF model, has been used to approximately describe the initial and
final structural response of the loaded structure. The initial response is described using classic elastic impact theory,
based on sand particle velocity in shock front, and the final response is based on energy balance of the total external
kinetic energy of the sand cone at time of impact and the internal energy consumption of the linear elastic spring. The
comparisons made show that this simplified approach rather well describes the results obtained in the FE simulations
of the cases studied here. However, there are still need of further improvement and comparisons of this approach.
Based on the cases studied in here it can be noted that the prediction ability of the simplified method decreases when
the load area increases and that the simplified model is not able to adequately consider the influence of spring stiffness.
Further, it is implied (only one group studied) that an increased distance to the charge decrease the success level to
accurately predict the final structural response.
Further studies will be made to examine if the simplified approach can be further improved. As part of this the number
of load cases studied using FE simulations will also increase; with a special focus on the response obtained at increased
charge distances.
ACKNOWLEDGEMENTS
The authors acknowledge the support given by MSB and especially Carina Rehnström and Lars Gråbergs.
Additionally, members of the West Coast Sweden Shock Wave Group (WCSSWG), and especially Dr. Joosef
Leppänen, are highly acknowledged for their input.

-- 28 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
REFERENCES
[1] Laine, L., Johansson, M., and Larsen O.P. (2015): “Simulation of experiments which show that reflection
pressure time history from ground shock depends on the reflected structure’s stiffness and mass”, Proceedings
of the 86th Shock and Vibration Symposium, Orlando, FL, USA.
[2] Laine, L., Johansson, M., and Larsen O.P. (2016): “3D FE and 2DOF simulations of ground shock experiments
– Reflection pressure time history dependency due to the structure’s stiffness and mass”, Proceedings of the 87th
Shock and Vibration Symposium, New Orleans, LA, USA.
[3] Ekengren B. (2015): Skyddsrum, SR 15 (Civil Defence Shelters SR 15, in Swedish.), the Swedish Civil
Contingencies Agency (MSB), report no. MSB748, ISBN 978-91-7383-485-8, Karlstad, Sweden.
[4] Lampson C.W. (1946): Final Report on Effects of Underground Explosions, Div. 2, National Defence Research
Committee of the US Office Scientific R&D, NDRC Report No. A-479, OSRD Report No. 6645.
[5] Hultgren S. (1979): Explosion of buried model structures to buried TNT explosions in sand,
Fortfikationsförvaltningen Fortf, Report nr C 183, Eskilstuna, Sweden.
[6] Hultgren S. (1980): (Effect of underground explosions in the sand with deformable walls, in Swedish), Omgång
II, Fortfikationsförvaltningen Fortf, Rapport nr C 200, Eskilstuna, Sweden.
[7] Hultgren S. (1985): On the effects of buried explosions in sand, Fortfikationsförvaltningen Fortf, Report
nr C2:85, Eskilstuna, Sweden.
[8] Century Dynamics Inc. (2004): AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[9] Johansson, M., Larsen O.P., and Laine, L. (2007): “Explosion at an intersection in an Urban Environment –
Experiments and analyses”, Proceedings of the 78th Shock and Vibration Symposium, Philadelphia, PA, USA.
[10] Laine L. and Sandvik A. (2001): “Derivation of mechanical properties for sand”, 4th Asian-Pacific conference
on Shock and Impact Loads on Structures, CI-Premier PTE LTD, vol. 4, pp 353-360, Singapore.
[11] Heyerdahl H. and Madshus C. (2000): “EOS-data for sand, Tri-axial tests on sand from Sjöbo”, Norges
Geotekniske institutt, NGI rept. 20001157-1, Oslo, Norway.
[12] Fairlie G. and Bergeron D. (2002): “Numerical simulations of Mine Blast Loading on Structures”, 17th
Numerical aspects of Blast Symposium, Las Vegas, Nevada.
[13] Tjernberg A. (2006): Simulation of Mine-Blast deflection, FOI-Swedish Defence Research Agency, Technical
Report, FOI-R--1913--SE, TUMBA, Sweden.
[14] Grujicic M., Pandurangan B., Qiao R., Cheeseman B.A., Roy W.N., Skaggs R.R., and Gupta R. (2008):
“Parameterization of the porous-material model for sand with different levels of water saturation”, Soil Dynamics
and Earthquake Engineering 28, pp 20–35.
[15] Moxnes J. F., Ødegårdstuen G., Atwood A., and Curran P. (1999): “Mechanical properties of a porous material
studied in a high speed piston driven compaction experiment”, 30th International Annual Conference of ICT
Energetic Materials, Fraunhofer Institut Chemische Technologie.
[16] Wang1 Z., Hao H., and Lu Y. (2004): “A three-phase soil model for simulating stress wave propagation due to
blast loading”, Int. Journal for Numerical and Analytical Methods in Geomechanics, 28:33–56 (DOI:
10.1002/nag.325).
[17] Laine L. (2006): “Study of Planar Ground Shock in Different Soils and Its Propagation Around a Rigid Block”,
77th Shock and Vibration Symposium, Monterey, CA.
[18] Laine L. and Larsen O.P. (2009): “Proposal on How to Model the Unloading in a Compaction Equation of State
based upon Tri-axial tests on Dry Sand”, 80th Shock & Vibration Symposium, San Diego, CA.
[19] Laine L. and Larsen O.P. (2012): “Implementation of Equation of State for Dry Sand in Autodyn”, 83rd Shock
and Vibration Symposium, Shock and Vibration Exchange (SAVE), New Orleans, LA.
[20] Laine L. (2012): Markstötvåg (Ground Shock. In Swedish). MSB, Myndigheten för samhällsskydd och
beredskap. Publ.nr MSB344, Karlstad.
Weblink:https://www.msb.se/Upload/Insats_och_beredskap/Olycka_kris/Skyddsrum/Litteratur/L01.%20Refer
enslitteratur/L01-202_Markst%C3%B6tv%C3%A5g.pdf
[21] ConWep (1992): Collection of conventional weapons effects calculations based on TM 5-855-1, Fundamentals
of Protective Design for Conventional Weapons, U.S. Army Engineer Waterways Experiment Station, Vicksburg,
USA.

-- 29 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
APPENDIX I – CONDUCTED SIMULATION MATRIX
Buried Plate-Spring System 2D Autodyn Simulations 2017
Run Status Structure Charge and
Distance
Plate Area Increase
Sim
ID
LowRez HighRez Group m
[kg]
k0
[M N/m]
W
[kg TNT]
r
[m]
(A-A0)/A0*100
[%]
c001 x x 1 5.2 0.1 0.5 1 0
c002 x x 0.5
c003 x x 1.2
c004 x x 10.6 0.1
c005 x x 0.5
c006 x x 1.2
c007 x x 24.7 0.1
c008 x x 0.5
c009 x x 1.2
c010 x x 58.8 0.1
c011 x x 0.5
c012 x x 1.2
c013 x 2 5.2 0.1 0.5 1 100
c014 x 0.5
c015 x 1.2
c016 x 10.6 0.1
c017 x 0.5
c018 x 1.2
c019 x 24.7 0.1
c020 x 0.5
c021 x 1.2
c022 x 58.8 0.1
c023 x 0.5
c024 x 1.2
c025 x 3 5.2 0.1 0.5 1 300
c026 x 0.5
c027 x 1.2
c028 x 10.6 0.1
c029 x 0.5
c030 x 1.2
c031 x 24.7 0.1
c032 x 0.5
c033 x 1.2
c034 x 58.8 0.1
c035 x 0.5
c036 x 1.2

-- 30 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
Buried Plate-Spring System 2D Autodyn Simulations 2017
Run Status Structure Charge and
Distance
Plate Area Increase
Sim
ID
LowRez HighRez Group m
[kg]
k0
[M N/m]
W
[kg TNT]
r
[m]
(A-A0)/A0*100
[%]
c037 x 4 5.2 0.1 0.75 1 0
c038 x 0.5
c039 x 1.2
c040 x 10.6 0.1
c041 x 0.5
c042 x 1.2
c043 x 24.7 0.1
c044 x 0.5
c045 x 1.2
c046 x 58.8 0.1
c047 x 0.5
c048 x 1.2
c049 x 5 5.2 0.1 1 1 0
c050 x 0.5
c051 x 1.2
c052 x 10.6 0.1
c053 x 0.5
c054 x 1.2
c055 x 24.7 0.1
c056 x 0.5
c057 x 1.2
c058 x 58.8 0.1
c059 x 0.5
c060 x 1.2
c061 x 6 5.2 0.1 1.25 1 0
c062 x 0.5
c063 x 1.2
c064 x 10.6 0.1
c065 x 0.5
c066 x 1.2
c067 x 24.7 0.1
c068 x 0.5
c069 x 1.2
c070 x 58.8 0.1
c071 x 0.5
c072 x 1.2

-- 31 of 32 --

In the Proceedings of 88th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Jacksonville, Florida, October 2017.
Buried Plate-Spring System 2D Autodyn Simulations 2017
Run Status Structure Charge and
Distance
Plate Area Increase
Sim
ID
LowRez HighRez Group m
[kg]
k0
[M N/m]
W
[kg TNT]
r
[m]
(A-A0)/A0*100
[%]
c073 x 7 5.2 0.1 1.5 1 0
c074 x 0.5
c075 x 1.2
c076 x 10.6 0.1
c077 x 0.5
c078 x 1.2
c079 x 24.7 0.1
c080 x 0.5
c081 x 1.2
c082 x 58.8 0.1
c083 x 0.5
c084 x 1.2
c085 x x 8 5.2 0.1 0.5 2 0
c086 x 0.5
c087 x 1.2
c088 x 10.6 0.1
c089 x 0.5
c090 x 1.2
c091 x 24.7 0.1
c092 x 0.5
c093 x 1.2
c094 x 58.8 0.1
c095 x 0.5
c096 x 1.2
c097 x x 9 5.2 0.1 1.5 1 300
c098 x 0.5
c099 x 1.2
c100 x 10.6 0.1
c101 x 0.5
c102 x 1.2
c103 x 24.7 0.1
c104 x 0.5
c105 x 1.2
c106 x x 58.8 0.1
c107 x 0.5
c108 x 1.2

-- 32 of 32 --