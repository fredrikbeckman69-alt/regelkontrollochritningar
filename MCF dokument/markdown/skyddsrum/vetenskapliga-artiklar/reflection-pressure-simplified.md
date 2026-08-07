---
title: "Reflection Pressure Simplified"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/reflection-pressure-simplified.pdf"
fileType: "PDF"
keywords: ["skyddsrum","explosion","pressure","piston","from","spring","mass","sand"]
summary: "From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org, New Orleans, Louisiana, 2016. 3D FE and 2DOF simulations of ground shock experiments – Reflection pressure time history dependency due to..."
---

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
3D FE and 2DOF simulations of ground shock experiments –
Reflection pressure time history dependency due to the structure’s
stiffness and mass
Leo Lainea*, Morgan Johanssonb and Ola Pramm Larsenc
aLL Engineering
Stugvägen 4, SE-438 94 HÄRRYDA, Sweden
*Corresponding author: leo.laine@telia.com
bNorconsult AB
Theres Svenssons gata 11, 417 55 GÖTEBORG, Sweden
cCAEwiz Consulting AS
Grinda 2B, NO-0861 OSLO, Norway
This paper simulates, by using 3D Finite Element (FE) Autodyn and simple two degree of
freedom (2DOF) model, experiments from 1980s conducted by S. Hultgren, FORTF,
where Hultgren studied the structural response of a well-defined structure; a suspended
piston-spring system buried in sand subjected for ground shock from an explosive charge.
The experiments showed that if the suspended mass of the piston is increased the initial
reflected pressure also increases. Similarly, the experiments showed that if the stiffness of
the suspended piston is increased the reflected pressure time history increases for the
latter part of the reflected pressure curve. The first aim of the FE simulations was to
better understand the physics of the observed experimental results. Based on this, the
second aim was to find a methodology that can use simplified relationships for ground
shock prediction, from e.g. ConWep, in combination with simplified models such as
2DOF, to predict the structural response of e.g. a buried concrete wall.
The FE simulation models were generated in Autodyn-3D, where the sand was modelled
with Euler cells and the piston, spring, and cylinder were modelled with Lagrange
element. The sand was modelled with an Equation of State (EOS) designed for porous
soils. The FE simulation results confirm the trend found in the experimental results. They
also imply that the mass from the interacting ground material is greatly affecting the
response of an underground structure subjected to impulse loading. The simple 2DOF
model confirms some of the main behaviour found in the FE results and experiments,
such as the initial collision effect only depends on mass and that total spring deflection
gave fairly well agreement with simulations.
INTRODUCTION
The Swedish Civil Contingencies Agency (MSB) is responsible for the building regulations of the Swedish civil
defence shelters. There are specific regulations for how the defence shelters are planned, built, equipped and
maintained [1]. One of many regulations state what load level the shelters should be able to withstand: “The effect
of a pressure wave corresponding to that produced by a 250 kg GP-bomb with 50 weight per cent TNT which burst
freely outside at a distance of 5.0 meters from the outside of the shelter during free pressure release”. However,
many of the shelters are designed as basements below ground surface. Therefore, more knowledge on how the
ground shock propagates and attenuates during the scaled distances of 0.1 to 10 kg/m1/3 and effects on buried
shelters, is needed.

-- 1 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
During the Second World War, extensive experiment series and research were conducted on ground shock generated
by high explosives [2]. This early work functions as a foundation for understanding the behaviour of how the shock
waves propagates and attenuates in earth media. In [2], it is stated that the pressure in the soil from the detonation of
an explosive charge is propagated by a plastic wave which is characterized by a continuous change of shape and of
duration with distance from the charge, see Fig. 1 for schematic illustration. Close to the source the shape will be
sharp and after a distance it will start to attenuate and the wave will change shape.
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
since, in ground shock, the reflected pressure actually depends on the movable mass and stiffness of the structure
[3].
Hence, to determine the pressure acting on a structure, caused by ground shock, one must also know the properties
of the structure. In 1979-1980 S. Hultgren at the National Fortifications Administration in Sweden, FortF, conducted
experiments with a simplified structure, a buried suspended piston with mass m and stiffness k. Neglecting the
influence of damping, the response of this structure can be described using a single degree of freedom system by
using equation (1)
  	  	 t	d	k	t	a	m	A	t	P 	x	x	r 						
(1)
where Pr(t) is the reflected pressure acting on the piston surface area A, ax is the acceleration of the piston mass and
dx is the displacement of the piston.
These results show the same trend on how the reflecting pressure builds up by mass inertia and spring stiffness, see
Fig. 2. Experimental results from reports [3]-[4] can be summed up in two points:
• If the structure has a high mass but low stiffness, then the reflected pressure time history results in a large
first peak and a low second peak.
• If the structure has a low mass but high stiffness, the reflected pressure time history gets a low initial peak
and a high second peak.

-- 2 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
In 1985, experiments were conducted for buried deformable reinforced concrete walls with similar results [5]. This
paper compare the experimental results from [3]-[4] with simulations carried out in AUTODYN-3D [6] and a
simplified 2DOF model. Earlier comparisons have also been carried out in AUTODYN-2D [20]. These early
simulations confirmed the main trends from the experiments. However, the symmetric 2D simulations in [20]
included uncertainties such as improper air blast release due to buried explosive and uncertainty in actual reflected
pressure measurements on the 2D piston. These uncertainties have been removed in the 3D simulation model
presented in this paper.
Time, t
Pressure, Pr
   	 A
d	k	a	m	t	P 	x	x	r
1
				
stiffness
mass
inertia
Fig. 2 Schematic illustration of how the reflection pressure Pr(t) is made up of mass inertia m∙ax and stiffness
k∙dx of a buried structure.
The paper is organized as follows: The section EXPERIMENTAL SETUP, describes how the experiments were
conducted and what parameters were varied. In section FE SIMULATION MODEL it is shown how the Euler and
Lagrange elements were designed in AUTODYN-3D and what material models were used. In section 2DOF
MODEL it is shown what parameters and initial conditions were used in the 2DOF model. In the section
EXPERIMENTAL RESULTS the experimental results from [3]-[4] is presented and in SIMULATION RESULTS a
comparison is made with the results obtained from simulations in AUTODYN. Finally, the section CONCLUSIONS
AND FUTURE WORK concludes the findings from simulations and proposes suggestions for future work.
EXPERIMENTAL SETUP
The experiments about the reflected pressure on a buried single degree of freedom system were conducted in sand.
Both the charge of TNT with weight 0.5 kg and the suspended piston was buried 1 m, and the distance between the
charge and the piston was set to 1 m. Unfortunately, the in-situ density of the sand was not measured nor the actual
water content. However, in [3] it is mentioned that the sand was well compacted and not saturated. The experimental
set up is shown in Fig. 3.
r = 1 m
Fig. 3 Principal sketch of the experimental setup of [3]: buried piston with suspended mass m and stiffness k.

-- 3 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
The main cylinder body consisted of a circular steel tube of 1.18 m in length and 0.36 m in outer diameter. The
cylinder wall thickness was 8 mm and the diameter of the piston surface was 0.34 m. In order to increase the weight
of the cylinder tube lead pieces were bolted to its inside; thus, increasing the total weight of the cylinder body to a
total of 295 kg. The piston was movable on ball bearings through an axis and the stiffness was obtained with a
helical spring.
The piston’s movable mass was made of a removable plate and by changing plates with different thickness the
suspended mass m of the piston was varied [5.2, 10.6, 24.7, and 58.8. Further, by changing the helical spring the
stiffness k was also varied [0.1, 0.5, and 1.2 MN/m].
The following measurements were installed: piston accelerometer (ax), piston reflected pressure gauge (Pr), and
relative piston displacement (dx), see Fig. 3. Further details about the experimental setup, e.g. what model type of
sensors was used, can be found in [3].
FE SIMULATION MODEL
The FE model was built in AUTODYN [6] using halved 3D geometry. The 3D symmetry plane was oriented
perpendicular to the ground surface cutting the cylinder in two with the piston axis lying in the symmetry plane, see
Fig. 4. The size of the model was 100 m x 100 m x 50 m, which meant that the effects of reflections from the
boundary could be entirely avoided for the piston response of at least 50 ms. There is a fine mesh volume
2.4 x 2.4 x 3.6 m near the cylinder with cubic cell size of 20 mm; where the longer direction is to include the whole
lagrange cylinder within the fine mesh region. The sand, TNT, air, and VOID material inside the cylinder were
modelled with multi-material Euler elements. The piston plate (1) and cylinder body were modelled using rigid
Lagrange elements constrained to move only in the piston direction. The spring was modelled with an ideal Hooke’s
law formulation where the spring force acting on the internal plate surface and the cylinder housing was proportional
to the compression distance
))	(	)	(	(	)	( 	2	1 t	d	t	d	k	t	Fs 				
(2)
where d1 and d2 are the displacement of the end positions of the spring, see markings 1 and 2, respectively, in Fig 4.
The simulations were optimized for computational time by grid refinement and using re-mapping technique as more
detailed described in e.g. [8]. The model was also parameterized so that charge size, distance to piston plate, piston
plate mass, and spring stiffness could automatically be varied. Gravity was considered to have minimal impact on
the simulation results and was hence not included in the model.
Fig. 4 Halved 3D model, the shock wave from the 0.5kg TNT charge just reaching the piston and ground surface.
The numbers 1 and 2 mark the spring start and end points.

-- 4 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
Modelling of the sand
A simple way of modelling compaction materials is to define the plastic compaction curve as a pressure function of
density P(
) and the unloading wave speed as a function of density c(
), see Fig. 5 for a schematic illustration. The
unloading is then approximately represented by the straight blue lines on top of the dashed unloading curves. The
solid straight line marked with TMD means Theoretical Maximum Density.
Earlier work on deriving mechanical properties for dry sand from tri-axial experiments, [9] and [10] does not
include an easy change on how moisture affects the input parameters of the compaction EOS. When the soil type
changes in water contents, porosity, and soil skeleton, the original compaction model [9] would need a new set of
input. This has been studied in [15] where a total of 16 generic soil types was generated from dry sand to fully
saturated clay. However, the main deficiency of the original model [16] for the compaction EOS is that the
unloading phase is too simplified to properly model the shock wave propagation and the change in shape of the
pressure wave as stated in [2]. In [17] an initial study was made of what the solution of unloading wave c(
,P) for
the dry sand would look like by using Non-Linear Programming (NLP) for numerically approximating each
unloading curve. This allowed the experimental data from [9] and [10] to be extrapolated for the whole density
pressure domain of interest [18].
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
Fig. 5 Schematic illustration of an EOS compaction, where the solid line between (
0, P0 = 0) and (
n, Pn) shows
a plastic compaction curve, dashed red lines illustrate nonlinear unloading and straight blue lines show
linear approximation with elastic unloading wave c(
).
However, in this paper only the original (denoted Sjöbo) material model was used in the 3D simulations, comparison
of the modified material model (ModEOS) and Sjöbo was done in earlier 2D simulations [20]. In Sjöbo material
model, the unloading speed only dependends on density c(ρ). The choice of not including both material models in
the study was to focus on the main dynamic behaviour related to the interaction of the sand and the buried piston.
Another benefit with Sjöbo sand is that original data and EOS and strength formulation is available for all Autodyn
users in the standard library. The material properties for both volume and shear behaviour, and the user subroutines
for the modified EOS and modified shear strength model for AUTODYN can be found in [19].
Modelling of the piston
The piston was made of rigid material with a constant volume, and hence its density was adjusted so that it matched
the desired piston mass for each specific case. The piston was also constrained to only move in the axial direction.

-- 5 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
Modelling of the spring
The spring was modelled by employing a 1-element beam structure with an ideal Hooke’s law spring formulation.
Modelling of the cylinder
The cylinder was made of rigid material the total weight of the cylinder was 295 kg in the simulation.
2DOF MODEL
The 2DOF model simplifies the experimental setup by the following assumptions, the sand in front of the structure
is assumed to be modelled as an added mass, see Fig. 6 The explosive load is converted to either a force as function
of time acting on the added mass or as a mass with an initial particle velocity on the added mass. In Fig. 7., the
principal system of 2DOF is shown. The spring k1 can only transfer compressive forces while spring k2 can transfer
forces in both directions. The initial velocity v0 (i.e. the sand particle velocity Up0) is used for describing the
movement of the sand generated by the explosion.
Fig. 6 Illustration of how the 2-DOF model is set up. The piston mass is connected to a second mass which is
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
Fig. 7 Illustration of 2DOF system used. Spring k1 can only transfer compressive forces while spring k2 can
transfer forces in both directions.
The equations used to solve the 2DOF system can be written as
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
0 1
2
1
2	1	1
1	1
2
1
2
1 t	F
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
(3)
where m1 and m2 is the sand mass and mass of the piston plate, respectively, k1 is the sand stiffness and k2 is the
stiffness of the spring. Further ü1 and ü2 are accelerations and u1 and u2 are displacements of masses m1 and m2,
respectively. To correctly simulate that sand cannot transfer tensile forces the sand spring k1 was modified so that
only compressive forces could be transferred; spring k2 though was linear elastic in both directions. The influence of
damping was assumed to be negligible and is hence not included in the model.

-- 6 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
The added mass of sand is calculated as the mass of a cone between the charge point and the piston plate (i.e. the
base of the cone) as
sand	sand
r
A	m	
			 3
(4)
where r is the charge distance of 1.0 m. This gives an added mass of msand = 51 kg.
The linear spring stiffness of the sand is approximated as
cone
sand
sand l
A	K
k 
	
(5)
where Ksand is the sand bulk modulus, A = 0,091 m2 is the area of the piston plate and
3
r
lcone 	
(6)
is the distance from the centre point of the sand cone to the piston plate. The bulk modulus was approximated to be
equal both for loading and unloading cases and was determined as
2
sand	sand	sand 	c	K 		
	
(7)
where ρsand = 1674 kg/m3 is the sand in situ density, and csand = 350 m/s is the speed of the pressure wave (a typical
value for dry soil [14]). This gives a sand bulk modulus of Ksand = 0.2 GPa (as a comparison, this is about ten times
smaller than the bulk modulus of water, Kwater = 100014842 = 2.2 GPa) and a sand spring stiffness
ksand = 54.6 MN/m. The model parameters are gathered in Table 1.
Table 1 Model parameters used in the 2DOF model.
Structure Added sand Load Condition
Case m k msand ksand F(t) v0
[kg] [MN/m] [kg] [MN/m] [N] [m/s]
1 5.2 0.1 - 1.2 51 54.6 - 1.5
2 10.6 0.1 - 1.2 51 54.6 - 1.5
3 24.7 0.1 - 1.2 51 54.6 - 1.5
4 58.8 0.1 - 1.2 51 54.6 - 1.5
In this paper the hypothesis was that an effective sand mass, with an initial particle velocity, will give satisfying
agreement with the FE-results of initial reflected pressure for the different piston masses and spring deflection. The
initial particle velocity used was derived with ConWep [20] for a sand with 1674 kg/m3 in density, seismic wave
speed 350 m/s, and 2.75 attenuation factor, this gave a particle velocity of 1.5 m/s for the selected charge size and
distance to target.

-- 7 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
EXPERIMENTAL RESULTS
When the piston mass was varied [5.2, 10.6, 24.7, and 58.8 kg], and the spring stiffness was kept constant to
k = 0.1 MN/m, pressures according to Fig. 8 is shown in [3]. The dotted and dashed lines in Fig. 8 represent the
estimated inertial pressure Pinertia and spring pressure Pspring, defined as shown in equations (8) and (9), respectively.
From this it can be noted that the dotted line in Fig. 8 follows well the measured pressure for the first peak; i.e. the
first peak of the reflected pressure directly depends on the piston mass.
   
A
t	a	m
t	P 	x
inertia

	
(8)
   
A
t	d	k
t	P 	x
spring

	
(9)
Fig. 8 Measured reflected pressure, estimated mass inertia pressure, and spring pressure for various piston
masses and with constant spring stiffness k = 0.1 MN/m. From [3].
For the results in Fig. 9 the spring stiffness was increased to k = 0.5 MN/m while the piston mass was varied [5.2,
10.6, 24.7, and 58.8 kg]. Now it can be noticed that the second ridge of the reflected pressure is more dominant in
Fig. 9 compared to that in Fig. 8. A clear first peak is not visible until the piston mass reaches 24.7 kg. In Fig. 10 the
reflected pressures from Fig. 9 are merged into one plot and from this it can be seen that when the piston mass was
5.2 and 10.6 kg there is no clear first peak in the reflected pressure. However, all of them have a second ridge in the
reflected pressure, even though it is slightly reduced when the piston mass is increased.

-- 8 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
Fig. 9 Measured reflected pressure, estimated mass inertia pressure, and spring pressure for various piston
masses and with constant spring stiffness 0.5 MN/m. From [3].
Fig. 10 Comparison of measured reflected pressure from Fig. 9 for various piston masses and with constant
spring stiffness 0.5 MN/m. From [3].
In Fig. 11a the piston mass was kept constant at m = 5.2 kg while the spring stiffness was varied [0.1, 0.5,
1.2 MN/m]. It shows clearly how the second ridge increases with the spring stiffness. In comparison, the reflected
pressure is shown in Fig. 11b when the piston mass is high, m = 58.8 kg, while the spring stiffness was varied [0.1,
0.5, 1.2 MN/m]. From this it can instead be noted that the pressure is only very little affected by the stiffness; i.e. the
reflected pressure is mainly governed by the piston mass. Still the trend with the second ridge increases somewhat
with increasing spring stiffness.

-- 9 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
(a) (b)
Fig. 11 Measured reflected pressures for varied spring stiffness and with constant piston mass: (a) 5.2 kg, and
(b) 58.8 kg. From [3].
SIMULATION RESULTS
Simulations have been carried out for a total of twelve combinations of different piston mass [5.2, 10.6, 24.7,
58.8 kg] and spring stiffness [0.1, 0.5, 1.2 MN/m]. One case was studied in more in-depth, 24.7 kg and 0.5 MN/m.
Consequently, a lot of results are obtained but in order to save space mainly the response of low (m = 5.2 kg),
medium (m = 24.7 kg), and high piston mass (m = 58.8 kg) is shown and discussed. The total simulated time was
50 ms.
Fig. 12 Free field incident pressure when no ground surface is modelled and compared with simulation of case
shown in Fig. 4 when the cylinder is not present. [Free field 2D: Pi = 442 kPa, ii = 1 711 Pas;
Free field 3D: Pi = 327 kPa, ii = 1 750 Pas; Free field with ground surface: Pi = 305 kPa, ii = 1 694 Pas].
0
200
400
600
800
1 000
1 200
1 400
1 600
1 800
2 000
0
50
100
150
200
250
300
350
400
450
500
0 	5 	10 	15 	20 	25 	30
Incident impulse intensity,
 ii [Pas]
Incident pressure,
 Pi [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn, Incident pressure
2D (P)
No surface (P)
Surface (P)
2D (i)
No surface (i)
Surface (i)

-- 10 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
The 3D free field incident pressure of the simulations is compared with a model with ground surface reflections at
the intended depth of and position of the piston, Sjöbo material model, are shown in Fig. 12. These pressures
correspond to a case when the cylinder is not present; i.e. no reflection pressure. If the ground shock wave is
reflected against a fully rigid surface, the pressure is increased with a factor of 2. However, as is shown further
down, this is not the case in the simulations carried out here. From Fig. 12 it can be seen that the presence of a
nearby free ground surface has some influence of the resulting P(t) relation; after about 7 ms the pressure drops for
the case with modelled surface compared to the case with no surface modelled. This is believed to be an effect of the
relief wave caused by the free ground surface. The same shape was also confirmed by ConWep [13] when tensile
surface reflections are included. Consequently, the impulse intensity also decrease, although it can be noted that the
overall difference between the two cases are relatively limited. Hence, this indicates that the charge burial depth
chosen by Hultgren in his experiments was well chosen to limit the effect of the free surface. The impulse intensity
between free-field in 2D and 3D is similar but for the peak pressure, though, there is a difference (442 kPa vs
327 kPa). This difference is related to different mesh size used (2D: 5 mm; 3D: 20 mm); a larger mesh size was used
in the 3D models to achieve reasonable computational times.
In the FE simulations the reflected pressure Pr(t) of the piston was determined as
    	 
A
t	d	k	t	a	m
t	P 	x	x
r
		
	
(10)
and in Fig. 13 the variation of this pressure is shown in for a case with intermediate spring stiffness (k = 0,5 MN/m),
and two different masses. From this it can be noted that a distinct initial pressure spike appear and that it is
considerably larger when the mass is high (m = 58.8 kg) compared to when the mass is low (m = 5.2 kg). The
appearance of such a distinct pressure peak is not in conjunction with the experiments; compare reflected pressure in
Fig. 8 and Fig. 9. Further, the forming of a first (inertia) and second pressure peak (stiffness), as schematically
illustrated in Fig. 2, is not as clearly identified in the simulations as in the experiments. This is believed to at least
partly be to the strong initial pressure peak obtained in the simulations. The reason for the above discrepancies are
unknown. However, measuring the pressure in a material like sand is difficult and one possible reason might be that
such an initial peak may have been filtrated away in the original experiments. The difference is noted but is apart
from that not further treated here.
Fig. 13 Comparison of simulated reflected pressure for various piston masses and with constant spring stiffness
0.5 MN/m. Note that both diagrams show the same result but with different scaling on the vertical axis.
For the corresponding experimental results, see Fig. 10.
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

-- 11 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
Here, the first mass inertia phase of the reflected pressure is analyzed in further detail before continuing discussing
the complete spring deflection and reflected pressure of the full simulated time of 50 ms. The initial phase, up to
5 ms, of the ground shock’s influence on the reflecting pressure and particle velocity in the piston plate and sand, is
compared in Fig. 14. The solid lines in Fig. 14a show the reflected pressures calculated by equation (10) and the
dashed lines shows the measured soil pressure and particle velocity, respectively, in the euler cell located next to the
axis symmetric line, 0.01 m in-front of the piston surface. Here it can be seen that the reflected pressure is a direct
function of the piston mass. In Fig. 14b it is shown how the piston velocity is accelerated (solid lines) and the dashed
lines shows the particle velocity in the soil which shows that the piston and soil is moving with approximately the
same velocity. The soil velocity is mostly higher than the piston velocity, which indicates that the soil mass seems to
have more kinetic energy and continue to push the piston forward.
(a) (b)
Fig. 14 Comparison of (a) reflected initial pressure, and (b) particle velocity at piston (solid) and just outside
piston in soil (dashed) as function of time up to 5 ms for various masses and spring stiffness 0.5 MN/m.
This concept of first initial reflected pressure effect due to piston mass inertia can be modelled by a 2DOF model.
As previously described the soil mass and soil stiffness are approximated to be 51 kg and 54.6 MN/m, respectively,
and the initial velocity of the sand, at which it impacts the piston plate, was determined based on ConWep [20] and
is confirmed by the particle velocity shown in Fig. 15. Here the velocity, at a distance of 0.01 m from the piston
plate, is used at the moment in time that corresponds to the maximum reflected pressure shown in Fig. 14a; i.e.
Up,x = 1.5 m/s. At time t = 2.2 ms there is a remapping of results from 1D wedge model to the full 3D model, and
hence there is a minor discontinuity in Fig. 15 due to change of mesh size.
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
Pressure,
 Pr [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2
10.6
24.7
58.8
k = 0.5 MN/mg
0.0
0.5
1.0
1.5
2.0
2.5
0 	1 	2 	3 	4 	5
Particle velocity,
 UP,x [m/s]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2
10.6
24.7
58.8
k = 0.5 MN/m

-- 12 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
m = 5.2 kg, k = 0.5 MN/m m = 58.8 kg, k = 0.5 MN/m
Fig. 15 Particle velocity in sand at various distances from the front of the piston plate. The dashed red line marks
the moment in time when the maximum reflected pressure is obtained against the piston plate. Close to
the piston plate (distance 0.01 m) the particle velocity is about 1.5 m/s when the pressure peak is reached.
The plots in Fig. 16 shows the pressure wave propagation between 2.3 ms and 3.5 ms for the 24.7 kg piston with
spring stiffness 0.5 MN/m. Quite early on, the initial reflected pressure wave due to mass inertia is over. As
expected the load duration increased with increased piston mass.
t = 2.3 ms t = 2.5 ms t = 3.0 ms t = 3.5 ms
Fig. 16 Pressure plots at different times from 3D FE simulations of 24.7 kg and 0.5 MN/m spring. Blue = 0 kPa,
green = 300 kPa, red ≥ 600 kPa.
Fig. 17 shows the shear stress (ZX) for the same times as in Fig. 16 and indicates that in front of the piston there is a
cone shaped part which can be seen at 3 ms. This can be an indication that there is an effective sand mass, i.e. the
sand inside the cone, colliding with the piston at a certain particle velocity.
t = 2.3 ms t = 2.5 ms t = 3.0 ms t = 3.5 ms
Fig. 17 Shear stress (ZX) plots at different times from 3D FE simulations of 24.7 kg and 0.5 MN/m spring.
Blue ≤ -200 kPa, green = 0 kPa, red ≥ 200 kPa.
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
0 	1 	2 	3 	4 	5
Particle velocity,
 UP,x [m/s]
Time, t [ms]
Hultgren (1979) - Autodyn
0.01 m
0.1 m
0.2 m
0.3 m
0.4 m
Pmax
k = 0.5 MN/m	m = 5.2 kg
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
0 	1 	2 	3 	4 	5
Particle velocity,
 UP,x [m/s]
Time, t [ms]
Hultgren (1979) - Autodyn
0.01 m
0.1 m
0.2 m
0.3 m
0.4 m
Pmax
k = 0.5 MN/m	m = 58.8 kg
2 	3 	4 	5
Time, t [ms]
0.01 m
0.1 m
0.2 m
0.3 m
0.4 m
Pmax
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
0 	1 	2 	3 	4 	5
Particle velocity,
 UP,x [m/s]
Time, t [ms]
0.01 m
0.1 m
0.2 m
0.3 m
0.4 m
Pmax

-- 13 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
In Fig. 18. the corresponding sand particle velocity Up,x is shown. Here it can be noted that the sand velocity directly
in front of the piston is larger compared to the sand outside the piston; i.e. these plots indicate that the sand in front
of the projected area of the piston encounter less resistance compared to the sand outside this zone. This response is
conceptually very different to that obtained in e.g. a shock wave in air hitting an object, in which the shock wave in
front of the object instead would reflect against it. The shape of the velocity distribution differs from the cone
shaped part found in Fig. 17, which indicates that the volume of the effective mass colliding with the piston may be
larger than that assumed in the 2DOF simulations. It seems like the mass transportation away from the centre of the
explosive detonation increases in the direction of the piston, and the simple reason is that the spring stiffness for the
piston is maximum 1.2 kN/m which is over 45 times smaller than the sand stiffness 54.6 kN/m, see Table 1. This
this gives the sand a reason to transport more sand material towards the piston area which is more easily compressed
than the surrounding sand.
t = 2.3 ms t = 2.5 ms t = 3.0 ms t = 3.5 ms
Fig. 18 Absolute velocity plots at different times from 3D FE simulations of 24.7 kg and 0.5 MN/m spring.
Blue ≤ 0 m/s, green = 1.5 m/s, red ≥ 3 m/s.
FE-3D 2DOF
Fig. 19 Comparison of initial reflected pressure (solid lines) and reflected impulse intensity (dashed lines)
obtained from 3D FE analyses and 2DOF model for various masses and spring stiffness 0.5 MN/m.
The resulting pressure from the 2DOF analysis, acting between sand cone and piston plate, is in Fig. 19 compared
with the reflected pressure acting on the piston plate in the 3D FE analyses for different masses when k = 0.5 MN/m.
No influence on the resulting pressure was obtained due to spring stiffness; and hence it can be observed that for the
cases studied the initial reflected pressure only depends on the piston mass.
The reflected pressure, and, initial impulse intensity for 3D-FE simulations and 2DOF model is shown in Table 2.
The 2DOF model underestimate the peak pressure by an average ratio of 0.67 when comparing with 3D FE
simulations. This difference is believed to be due to an underestimation of the sand spring stiffness k1 when using
the 2DOF model. However, the impulse intensity of the first 4 ms has an average ratio of 1.21, where 2DOF
overestimates, and this difference is deemed to be acceptable when one is comparing the computational effort of FE-
3D and 2DOF needed to achieve these results.
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

-- 14 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
If the incident wave was reflected against a rigid surface the pressure should increase with a factor of 2. Here,
though, the ratio Pload / Pi is less than that; with decreasing value for decreasing piston mass. The reflection factor
depends on the mass and varies from 0.97 to 1.98 (comparing with free field incident pressure in 2D) when the
piston mass is increased from 5.2 to 58.8 kg, see Table 3. The 3D FE results lead to unrealistically low incident
pressure, see Fig. 12, therefore the reflection factor of 2D FE results are only considered here.
Table 2 Relation between reflected pressure obtained in FE-3D analyses and 2DOF analyses.
Structure 3D-FE 2DOF Ratio, 2DOF / FE
Case m k Pr ir 1) Pload iload 1) P i
[kg] [MN/m] [kPa] [Pas] [kPa] [Pas] [-] [-]
1 5.2 0.1 428 117 265 156 0.62 1.33
2 10.6 0.1 580 228 361 290 0.62 1.27
3 24.7 0.1 744 470 497 549 0.67 1.17
4 58.8 0.1 876 839 636 899 0.73 1.07
5 5.2 0.5 428 123 265 156 0.62 1.28
6 10.6 0.5 580 230 361 291 0.62 1.26
7 24.7 0.5 744 471 497 550 0.67 1.17
8 58.8 0.5 876 840 636 900 0.73 1.07
9 5.2 1.2 428 132 265 157 0.62 1.19
10 10.6 1.2 580 235 362 292 0.62 1.24
11 24.7 1.2 744 473 497 551 0.67 1.17
12 58.8 1.2 876 841 636 901 0.73 1.07
Average 0.67 1.21
1) The given impulse intensity corresponds to the initial pressure peak and is determined at time t = 4 ms.
Table 3 Relation between reflected pressure and incident pressure in simulations.
[Free field 2D: Pi,2D = 442 kPa; Free field 3D: Pi,3D = 327 kPa]
Structure Reflection factor
Case m k Pr Pr / Pi,2D Pr / Pi,3D
[kg] [MN/m] [kPa] [-] [-]
1 5.2 0.1 - 1.2 428 0.97 1.31
2 10.6 0.1 - 1.2 580 1.31 1.77
3 24.7 0.1 - 1.2 744 1.68 2.27
4 58.8 0.1 - 1.2 876 1.98 2.68
Simulation results for low (m = 5.2 kg) and high piston mass (m = 58.8 kg) for low (k = 0,1 MN/m), intermediate
(k = 0.5 MN/m) and high stiffness (k = 1.2 MN/m) are shown in Fig. 20 where reflected pressure, mass inertia
pressure, and spring pressure are presented.

-- 15 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
k = 0,1 MN/m
k = 0,5 MN/m
k = 1.2 MN/m
m = 5.2 kg m = 58.8 kg
Fig. 20 Simulated reflected pressure, and calculated mass inertia pressure and spring pressure for various piston
masses and spring stiffness 0.1 MN/m. For the corresponding experimental results, see Fig. 8 and Fig. 9.
In Fig. 21 the reflected pressure from different simulations is compared for various stiffness when the piston mass is
low (m = 5.2 kg) and high (m = 58.8 kg). When the piston mass is low it is clear that increased stiffness result in an
increase of the second pressure peak (stiffness) in a way that is in good conceptual agreement with the experiments,
compare with Fig. 11a. When the piston mass is high, though, the resulting reflected pressure is not as
straightforward. Here, the simulations how that an increased stiffness still has a similar effect and thus cause an
-50
0
50
100
150
200
0 	10 	20 	30 	40 	50
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
Load
Inertia
Spring
m = 5.2 kg 	k = 0.1 MN/m
-50
0
50
100
150
200
0 	10 	20 	30 	40 	50
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
Load
Inertia
Spring
m = 58.8 kg 	k = 0.1 MN/m
-50
0
50
100
150
200
0 	10 	20 	30 	40 	50
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
Load
Inertia
Spring
m = 5.2 kg 	k = 0.5 MN/mg
-50
0
50
100
150
200
0 	10 	20 	30 	40 	50
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
Load
Inertia
Spring
m = 58.8 kg 	k = 0.5 MN/mg
-50
0
50
100
150
200
0 	10 	20 	30 	40 	50
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
Load
Inertia
Spring
m = 5.2 kg 	k = 1.2 MN/mg
-50
0
50
100
150
200
0 	10 	20 	30 	40 	50
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
Load
Inertia
Spring
m = 58.8 kg 	k = 1.2 MN/mg
20 	30 	40 	50
Time, t [ms]
Hultgren (1979) - Autodyn
R. pres.
Inertia
Spring
MN/mg

-- 16 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
increased reflected pressure of the second pressure peak. However, this is not in full conjunction with the
experimental observations, see Fig. 11b, where it is indicated that the effect of the stiffness is less important on the
reflected pressure in the second pressure peak when the piston mass is high.
m = 5.2 kg m = 58.8 kg
Fig. 21 Simulated reflected pressures for varied spring stiffness and with constant piston mass 5.2 kg or 58.8 kg.
For the corresponding experimental results, see Fig. 11.
The structural response, i.e. the spring pressure, is less sensitive than that of the reflected pressure and mass inertia
pressure. It is therefore of interest to compare the resulting spring pressures between both the simulations and the
experiments. The maximum spring pressure calculated from experiments and simulations are listed in Table 4 and in
Fig. 22 the spring pressure-time relations from the simulations (dashed lines) are shown for the possible
combinations of four different piston masses and three different spring stiffnesses. For low (k = 0.1 MN/m) and
intermediate stiffness (k = 0.5 MN/m) the calculated spring pressures from the experiments are shown as well with
continuous lines.
Table 4 Comparison of maximum calculated spring pressure from experiments and simulations; PFE / Pexp express
the ratio between spring pressure from simulations and experiments.
Structure Experim. FE-3D
Case m k Pspring Pspring PFE / Pexp
[kg] [MN/m] [kPa] [kPa] [-]
1 5.2 0.1 21 67 3.21
2 10.6 0.1 31 67 2.13
3 24.7 0.1 30 65 2.14
4 58.8 0.1 34 59 1.75
5 5.2 0.5 95 118 1.24
6 10.6 0.5 129 120 0.93
7 24.7 0.5 90 121 1.34
8 58.8 0.5 74 118 1.61
9 5.2 1.2 - 149 -
10 10.6 1.2 - 152 -
11 24.7 1.2 - 157 -
12 58.8 1.2 - 155 -
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

-- 17 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
The occurrence of a strong initial peak pressure in the simulations also affects the responding spring pressure. Thus,
the spring pressure in the simulations does not get a slow gradual increase, as was the case in the experiments, but
rather a somewhat quicker raise in pressure; compare simulated and experimental results in Fig. 22. The trend of low
spring stiffness leads to lower pressures both in simulations and experiments.
k = 0.1 MN/m k = 0.5 MN/m
k = 1.2 MN/m
Fig. 22 Comparison of calculated spring pressure for varied spring stiffness and piston mass. Results from
simulations in dashed lines; results from experiments in continuous lines.
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
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2 kg
10.6 kg
24.7 kg
58.8 kg
5.2 kg
10.6 kg
24.7 kg
58.8 kg
Nr 	k = 0.1 MN/mg
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
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2 kg
10.6 kg
24.7 kg
58.8 kg
5.2 kg
10.6 kg
24.7 kg
58.8 kg
Nr 	k = 0.5 MN/mg
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
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2 kg
10.6 kg
24.7 kg
58.8 kg
Nr 	k = 1.2 MN/mg

-- 18 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
CONCLUSIONS AND FUTURE WORK
The principle of reflected pressure is built up by the reflected structure’s mass inertia and spring stiffness pressure is
confirmed. However, the experimental results lack the distinct pressure spike, due to inertia, occurring in the FE
simulations during the first 4 ms. A reason for this discrepancy can be how the sand pressure measurement was
conducted in the experiments; and it is believed that it is more correct that there will be a clear initial pressure peak,
as is indicated in the simulations. The first mass inertia dependent part of reflected pressure was modelled rather
accurately with a simplified 2DOF model. When comparing with 3D FE simulation results, the initial reflected peak
pressure is unaffected by what spring stiffness the piston had. The initial conditions and parameters for the 2DOF
model were quite simplified: an added mass for sand, calculated as a cone, initial particle velocity derived from
ConWep, simple stiffness for sand only transferring compressive pressure, but this still gave reasonable results in
average the pressure was underestimated with a factor 0.67 when using the 2DOF model, however the first four ms
impulse intensity was overestimated by a factor 1.21 when using the 2DOF model, which is really acceptable results
when comparing the computational efforts needed for the two methods. The total spring displacement needs further
investigation when it comes to 2DOF analysis, as the particle velocity plots from 3D FE results indicate the total
mass transportation seem to increase as a function of time which makes initial condition and loading conditions
more complicated for the 2DOF model. Another way to understand the phenomena further is to systematically
conduct a parameter study where charge distance, charge size, and piston area is changed and then study how this
will affect the added sand mass for the 2DOF model.
ACKNOWLEDGEMENTS
The authors acknowledge the support given by MSB and especially Björn Ekengren. Additionally, members of the
West Coast Sweden Shock Wave Group (WCSSWG), and especially Dr. Lector Joosef Leppänen, are highly
acknowledged for their input.

-- 19 of 20 --

From the Proceedings of 87th Shock and Vibration Symposium, Shock and Vibration Exchange,
www.savecenter.org, New Orleans, Louisiana, 2016.
REFERENCES
[1] Ekengren B. (2015): Skyddsrum, SR 15 (Civil Defence Shelters SR 15, in Swedish.), the Swedish Civil
Contingencies Agency (MSB), report no. MSB748, ISBN 978-91-7383-485-8, Karlstad, Sweden.
[2] Lampson C.W. (1946): Final Report on Effects of Underground Explosions, Div. 2, National Defence
Research Committee of the US Office Scientific R&D, NDRC Report No. A-479, OSRD Report No. 6645.
[3] Hultgren S. (1979): Explosion of buried model structures to buried TNT explosions in sand,
Fortfikationsförvaltningen Fortf, Report nr C 183, Eskilstuna, Sweden.
[4] Hultgren S. (1980): (Effect of underground explosions in the sand with deformable walls, in Swedish), Omgång
II, Fortfikationsförvaltningen Fortf, Rapport nr C 200, Eskilstuna, Sweden.
[5] Hultgren S. (1985): On the effects of buried explosions in sand, Fortfikationsförvaltningen Fortf, Report
nr C2:85, Eskilstuna, Sweden.
[6] Century Dynamics Inc. (2004): AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[7] Laine, L., Johansson, M., and Larsen O.P. (2015): “Simulation of experiments which show that reflection
pressure time history from ground shock depends on the reflected structure’s stiffness and mass”, Proceedings
of the 78th Shock and Vibration Symposium, Orlando, FL, USA.
[8] Johansson, M., Larsen O.P., and Laine, L. (2007): “Explosion at an intersection in an Urban Environment –
Experiments and analyses”, Proceedings of the 78th Shock and Vibration Symposium, Philadelphia, PA, USA.
[9] Laine L. and Sandvik A. (2001): “Derivation of mechanical properties for sand”, 4th Asian-Pacific conference
on Shock and Impact Loads on Structures, CI-Premier PTE LTD, vol. 4, pp 353-360, Singapore.
[10] Heyerdahl H. and Madshus C. (2000): “EOS-data for sand, Tri-axial tests on sand from Sjöbo”, Norges
Geotekniske institutt, NGI rept. 20001157-1, Oslo, Norway.
[11] Fairlie G. and Bergeron D. (2002): “Numerical simulations of Mine Blast Loading on Structures”, 17th
Numerical aspects of Blast Symposium, Las Vegas, Nevada.
[12] Tjernberg A. (2006): Simulation of Mine-Blast deflection, FOI-Swedish Defence Research Agency, Technical
Report, FOI-R--1913--SE, TUMBA, Sweden.
[13] Grujicic M., Pandurangan B., Qiao R., Cheeseman B.A., Roy W.N., Skaggs R.R., and Gupta R. (2008):
“Parameterization of the porous-material model for sand with different levels of water saturation”, Soil
Dynamics and Earthquake Engineering 28, pp 20–35.
[14] Moxnes J. F., Ødegårdstuen G., Atwood A., and Curran P. (1999): “Mechanical properties of a porous material
studied in a high speed piston driven compaction experiment”, 30th International Annual Conference of ICT
Energetic Materials, Fraunhofer Institut Chemische Technologie.
[15] Wang1 Z., Hao H., and Lu Y. (2004): “A three-phase soil model for simulating stress wave propagation due to
blast loading”, Int. Journal for Numerical and Analytical Methods in Geomechanics, 28:33–56 (DOI:
10.1002/nag.325).
[16] Laine L. (2006): “Study of Planar Ground Shock in Different Soils and Its Propagation Around a Rigid Block”,
77th Shock and Vibration Symposium, Monterey, CA.
[17] Laine L. and Larsen O.P. (2009): “Proposal on How to Model the Unloading in a Compaction Equation of
State based upon Tri-axial tests on Dry Sand”, 80th Shock & Vibration Symposium, San Diego, CA.
[18] Laine L. and Larsen O.P. (2012): “Implementation of Equation of State for Dry Sand in Autodyn”, 83rd Shock
and Vibration Symposium, Shock and Vibration Exchange (SAVE), New Orleans, LA.
[19] Laine L. (2012): Markstötvåg (Ground Shock. In Swedish). MSB, Myndigheten för samhällsskydd och
beredskap. Publ.nr MSB344, Karlstad.
Weblink:https://www.msb.se/Upload/Insats_och_beredskap/Olycka_kris/Skyddsrum/Litteratur/L01.%20Refer
enslitteratur/L01-202_Markst%C3%B6tv%C3%A5g.pdf
[20] ConWep (1992): Collection of conventional weapons effects calculations based on TM 5-855-1, Fundamentals
of Protective Design for Conventional Weapons, U.S. Army Engineer Waterways Experiment Station,
Vicksburg, USA.

-- 20 of 20 --