---
title: "Simulation Of Experiments Reflection Pressure"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/simulation-of-experiments_reflection-pressure.pdf"
fileType: "PDF"
keywords: ["skyddsrum","explosion","pressure","from","mass","spring","piston","shock"]
summary: "From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange, www. savecenter.org, Orlando, Florida, 2015. Simulation of experiments which show that reflection pressure time history from ground shock depends on the refl..."
---

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
Simulation of experiments which show that reflection pressure time
history from ground shock depends on the reflected structure’s stiffness
and mass
Leo Lainea*, Morgan Johanssonb and Ola Pramm Larsenc
aLL Engineering
Stugvägen 4, SE-438 94 HÄRRYDA, Sweden
*Corresponding author: leo.laine@telia.com
bREINERTSEN Sverige AB
Kilsgatan 4, 411 04 GÖTEBORG
cCAEwiz Consulting
Hofftunet 10, NO-0379 OSLO, Norway
This paper simulates, by using Autodyn, experiments from 1980s conducted by S.
Hultgren, FORTF, where Hultgren studied the structural response of a well-defined
structure, a suspended piston-spring system buried in sand subjected for ground shock
from an explosive charge. The experiments showed that if one increases the suspended
mass of the piston, initial reflected pressure increases. Similarly the experiments showed
that if the stiffness of the suspended piston is increased the reflected pressure time history
increases for the latter part of the reflected pressure curve. The aim of the simulations is
to find simple analytical relationships for conducting structural response from ground
shock if the ground shock is predicted by simplified relationships such as Conwep and if
the protective structure’s effective mass and effective stiffness is known, for example a
buried concrete wall.
The simulation model was generated in Autodyn-2D axis symmetry where the sand was
modelled with Euler cells and the piston, spring, and cylinder was modelled in Lagrange.
The sand is modelled with an Equation of State (EOS) designed for porous soils which
was implemented in Autodyn as a user subroutine by the authors. The simulation results
confirm the trend found in the experimental results. They also imply that the mass from
the interacting ground material is greatly affecting the response of an underground
structure subjected to impulse loading.
INTRODUCTION
The Swedish Civil Contingencies Agency (MSB) is responsible for the building regulations of the Swedish civil
defence shelters. There are specific regulations for how the defence shelters are planned, built, equipped and
maintained [1]. One of many regulations state what load level the shelters should be able to withstand: “The effect
of a pressure wave corresponding to that produced by a 250 kg GP-bomb with 50 weight per cent TNT which burst
freely outside at a distance of 5.0 meters from the outside of the shelter during free pressure release”. However,
many of the shelters are designed as basements below ground surface. Therefore, more knowledge on how the
ground shock propagates and attenuates during the scaled distances of 0.1 to 10 kg/m1/3 and effects on buried
shelters, is needed.

-- 1 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
During the Second World War extensive experiment series and research were conducted on ground shock generated
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
1) Calculation of the pressures acting on rigid body, shaped as the studied structure, from an airblast
simulation including the explosive and air formulation in a multi material Euler grid.
2) Determine the structural response by applying the calculated pressure time histories from 1) on the
deformable structure modelled by e.g. shell elements.
This procedure is suitable for stiff structures, such as reinforced concrete structures, when subjected to air blast
loading. However, this procedure is not applicable when it comes to the structural response due to ground shock
simulations since, in ground shock, the reflected pressure actually depends on the movable mass and stiffness of the
structure [16].
Hence, in order to determine the pressure acting on a structure, caused by ground shock, one must also know the
properties of the structure. In 1979-1980 S. Hultgren at the National Fortifications Administration in Sweden, FortF,
conducted experiments with a simplified structure, a buried suspended piston with mass m and stiffness k. The
response of this structure can simplified be described using a single degree of freedom system according to
equation (1)
  	x	x	r 	d	k	a	m	A	t	P 						
(1)
where Pr(t) is the reflected pressure acting on the piston surface area A, ax is the acceleration of the piston mass and
dx is the displacement of the piston.
These results show the same trend on how the reflecting pressure builds up by mass inertia and spring stiffness, see
Fig. 2. Experimental results from reports [16]-[17] can be summed up in two points:
 If the structure has a high mass but low stiffness, then the reflected pressure time history results in a large
first peak and a low second peak.
 If the structure has a low mass but high stiffness, the reflected pressure time history gets a low initial peak
and a high second peak.
In 1985, experiments were conducted for buried deformable reinforced concrete walls with similar results [18]. This
paper compare the experimental results from [16]-[17] with simulations carried out in AUTODYN [5].

-- 2 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
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
conducted and what parameters were varied. In section SIMULATION MODEL it is shown how the Euler and
Lagrange elements were designed in AUTODYN-2D axis symmetry and what material models were used. In the
section EXPERIMENTAL RESULTS the experimental results from [16]-[17] is presented and in SIMULATION
RESULTS a comparison is made with the results obtained from simulations in AUTODYN. Finally, the section
CONCLUSIONS AND FUTURE WORK concludes the findings from simulations and proposes suggestions for
future work.
EXPERIMENTAL SETUP
The experiments about the reflected pressure on a buried single degree of freedom system were conducted in sand.
Both the charge of TNT with weight 0.5 kg and the suspended piston was buried 1 m, and the distance between the
charge and the piston was set to 1 m. Unfortunately, the in situ density of the sand was not measured nor the actual
water content. However it was said that it was well compacted and the sand was not saturated. The experimental set
up is shown in Fig. 3.
r = 1 m
Fig. 3 Principal sketch of the experimental setup of [16]: buried piston with suspended mass m and stiffness k.
The main cylinder body consisted of a circular steel tube of 1.18 m in length and 0.36 m in outer diameter. The
cylinder wall thickness was 8 mm and the diameter of the piston surface was 0.34 m. In order to increase the weight
of the cylinder tube lead pieces were bolted to its inside; thus increasing the total weight of the cylinder body to
295 kg. The piston was movable on ball bearings through an axis and the stiffness was obtained with a helical spring.

-- 3 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
The piston’s movable mass was made of a removable plate and by changing plates with different thickness the
suspended mass m of the piston was varied [5.2, 10.6, 24.7, 58.8, and 105 kg]. Further, by changing the helical
spring the stiffness k was also varied [0.1, 0.5, and 1.2 MN/m].
The following measurements were installed: piston accelerometer (ax), piston reflected pressure gauge (Pr), and
relative piston displacement (dx), see Fig. 3. Further details about the experimental setup, e.g. what model type of
sensors was used, can be found in [16].
SIMULATION MODEL
The model was built in AUTODYN [5] using 2D-axis symmetry. The symmetry axis was chosen to coincide with
the cylinder’s centre axis, see Fig. 4. This results in a simulation set-up that is somewhat different to that in the
experiments (i.e. no ground surface) but is deemed to be an appropriate approximation for the purpose of this study.
The size of the model was 60 m x 30 m, which meant that reflections from boundary conditions could be entirely
avoided for the piston response of at least 50 ms. The sand, TNT, and air inside the cylinder were modelled with
multi-material euler elements. The piston plate, spring, and cylinder’s body (cyl1 and cyl2) were formulated by
using lagrange elements. The simulations were optimised for computational time by grid refinement and using re-
mapping technique as more detailed described in e.g. [19]. The model was also parameterized so that charge size,
distance to piston plate, piston plate mass, and spring stiffness could automatically be varied.
Void
Sand
TNT
Plate
Spring
Cyl1
Cyl2
Air 	Symmetry
axis
Fig. 4 The material location of the 2D axis symmetry model. The colours void, blue, green, cyan, red, purple,
and yellow corresponds to the materials, sand, TNT, plate, spring, cyl1, cyl2 and air.
Modelling of the sand
A simple way of modelling compaction materials is to define the plastic compaction curve as a pressure function of
density P(
) and the unloading wave speed as a function of density c(
), see Fig. 5 for schematic illustration. The
unloading is then approximately represented by the straight blue lines on top of the dashed unloading curves. The
solid straight line with TMD means Theoretical Maximum Density.
Earlier work on deriving mechanical properties for dry sand from tri-axial experiments, [3] and [4], have been
widely used for shock simulation involving dry sand within the AUTODYN community with quite descent results;
e.g. for determining the blast load from buried mines [6] and [7]. Here, the linear approximation of the unloading
curves does not influence the results except for determining the level of shock wave energy absorbed by the dry sand.
It is correctly stated in [8] that the material data provided for dry sand in [3] does not include an easy change on how
moisture affects the input parameters of the compaction EOS. When the soil type changes in water contents, porosity,
and soil skeleton the original compaction model [9] would need a totally new set of input. In [11] a total of 16
generic soil types were generated from dry sand to fully saturated clay. However, the main deficiency of the original
model [10] and the given data for dry sand [3] for the compaction EOS is that the unloading phase is too simplified
to properly model the shock wave propagation and the change in shape of the pressure wave as stated in [2]. In [12]
the authors did an initial study of what the solution of unloading wave c(
,P) for the dry sand would look like by
using Non-Linear Programming (NLP) for numerically approximating each unloading curve. This allowed the
experimental data from [3] and [4] to be extrapolated for the whole density pressure domain of interest, see Fig. 6.

-- 4 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
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
Fig. 6 Non-Uniform-Rational-B-Spline (NURBS) surface of the derived unloading wave speed c(
,P) from dry
Sjöbo sand, Sweden. Red curves represent experimentally fitted unloading data, while the magenta curves
are extrapolated curves from the NLP solution, from [15].
In this paper both the original (denoted Sjöbo) and the modified material model (denoted ModEOS) for sand
presented in [15] was used in the simulations. The material properties for both volume and shear behaviour, and the
user subroutines for the modified EOS and modified shear strength model for AUTODYN can be found in [14].

-- 5 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
Modelling of the piston
The piston was made of elastic material and its density was adjusted so that it matched the desired piston mass. In
order to improve the computational time (i.e. reduce the time step necessary) the stiffness was modified to be less
than steel. The effect of this stiffness reduction was checked but only minimal displacements of the piston plate were
observed and were deemed to have negligible response of the final response.
Modelling of the spring
The spring was made of elastic material where the elastic modulus and shear modulus was modified such that the
axis symmetry stiffness was as according to what had been used in the experiments. This was verified by pushing
the piston plate and that the total force was equal to F = k·dx, where dx represents the relative displacement of the
suspended piston.
Modelling of the cylinder
The cylinder was made up of two parts, cyl1 (cylinder bottom) and cyl2 (cylinder wall), which were modelled with
elastic material so that the total cylinder weight was 295 kg. The cylinder wall was generated with two rows of
Lagrange element to assure proper Euler/Lagrange interaction.
EXPERIMENTAL RESULTS
When the piston mass was varied in [5.2, 10.6, 24.7, and 58.8 kg], and the spring stiffness was kept constant to
k = 0.1 MN/m, pressures according to Fig. 7 is shown in [16]. The dotted and dashed lines in Fig. 7 represent the
estimated inertial pressure Pinertia and spring pressure Pspring, defined as shown in equations (2) and (3), respectively.
From this it can be noted that the dotted line in Fig. 7 follows well the measured pressure for the first peak; i.e. the
first peak of the reflected pressure directly depends on the piston mass.
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
Fig. 7 Measured reflected pressure, estimated mass inertia pressure, and spring pressure for various piston
masses and with constant spring stiffness k = 0.1 MN/m. From [16].

-- 6 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
For the results in Fig. 8 the spring stiffness was increased to k = 0.5 MN/m while the piston mass was varied [5.2,
10.6, 24.7, and 58.8 kg]. Now it can be noticed that the second ridge of the reflected pressure is more dominant in
Fig. 8 compared to in Fig. 7. A clear first peak is not visible until the piston mass is above 24.7 kg. In Fig. 9 the
reflected pressures from Fig. 8 are merged into one plot and from this it can be seen that when the piston mass was
5.2 and 10.6 kg there is no clear first peak in the reflected pressure. However, all of them have a second ridge in the
reflected pressure, even though it is slightly reduced when the piston mass is increased.
Fig. 8 Measured reflected pressure, estimated mass inertia pressure, and spring pressure for various piston
masses and with constant spring stiffness 0.5 MN/m. From [16].
Fig. 9 Comparison of measured reflected pressure from Fig. 8 for various piston masses and with constant
spring stiffness 0.5 MN/m. From [16].
In Fig. 10a the piston mass was kept constant at m = 5.2 kg while the spring stiffness was varied [0.1, 0.5,
1.2 MN/m]. It shows clearly how the second ridge increases with the spring stiffness. In comparison the reflected
pressure when the piston mass is high, m = 58.8 kg, while the spring stiffness was varied [0.1, 0.5, 1.2 MN/m] is
shown in Fig. 10b. From this it can instead be noted that the pressure is only very little affected by the stiffness; i.e.
the reflected pressure is mainly governed by the piston mass. Still the trend with the second ridge increase somewhat
with increasing spring stiffness.

-- 7 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
(a) (b)
Fig. 10 Measured reflected pressures for varied spring stiffness and with constant piston mass: (a) 5.2 kg, and
(b) 58.8 kg. From [16].
SIMULATION RESULTS
Simulations have been carried out for a total of twelve combinations of different piston mass [5.2, 10.6, 24.7,
58.8 kg] and spring stiffness [0.1, 0.5, 1.2 MN/m]. Further, these cases were simulated using two different material
models for the ground material: ModEOS (nonlinear unloading) and Sjöbo (linear unloading). Consequently, a lot of
results are obtained but in order to save space mainly the response of low (m = 5.2 kg) and high piston mass
(m = 58.8 kg) is shown and discussed.
The free field incident pressure of the simulations, using ModEOS and Sjöbo material models, are shown in Fig. 11.
These pressures correspond to a case when the cylinder is not present; i.e. no reflection pressure. If the ground shock
wave is reflected against a fully rigid surface, the pressure is increased with a factor 2. However, as is shown further
down, this is not the case in the simulations carried out here. From Fig. 11 it is evident that the peak pressure is
smaller when using material model ModEOS compared to when using Sjöbo. The impulse intensity, though, is still
about the same; i.e. it is mainly the peak pressure that is affected by the material model while the rest of the
pressure-time response is similar for both group of simulations.
Fig. 11 Free field incident pressure from simulation of case shown in Fig. 4 when the cylinder is not present.
[ModEOS: Pi = 281 kPa, ii = 1 495 Pas; Sjöbo: Pi = 468 kPa, ii = 1 571 Pas]
0
300
600
900
1 200
1 500
1 800
0
100
200
300
400
500
600
0 	10 	20 	30 	40 	50
Incident impulse intensity,
 ii [Pas]
Incident pressure,
 Pi [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn, Incident pressure
ModEOS (P)
Sjöbo (P)
ModEOS (i)
Sjöbo (i)

-- 8 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
In the simulations the pressure Pr(t) was determined as the average pressure acting in four points on the piston plate
according to equation (4). Since the piston plate displaced with time during loading, a set of result points were
defined, as shown in Fig. 12, in order to register the pressure obtained in the element adjacent to the plate.
  4
4	3	2	1 	P	P	P	P
t	Pr
		
	
(4)
Symmetry
axis
P1
P2
P3
P4
Sand
Plate
Cyl 1
Void
Fig. 12 Location of result points used in sand Euler elements to determine the reflected pressure acting on the
piston plate when it is displaced during loading.
This is an approximation that works well if the pressure values are similar. It was found that the resulting pressure
values fluctuated more than expected and that more pressure values might have been needed to more accurately
register the load acting on the piston plate. In the experiments, though, only one pressure gauge was used, and hence
any possible variation in pressure was not registered. Consequently, it is still deemed reasonable to use a reflected
pressure Pr, as approximately determined in equation (4), in the comparison with experimental results.
Simulation results for low (m = 5.2 kg) and high piston mass (m = 58.8 kg) for low (k = 0,1 MN/m) and intermediate
stiffness (k = 0.5 MN/m) are shown in Fig. 13 and Fig. 14, respectively. Reflected pressure, mass inertia pressure,
and spring pressure are given for simulations using two different ground material models: ModEOS and Sjöbo.
From this it can be concluded that the choice of material model affects the reflection pressure, and thus also the
inertia and spring stiffness response. The resulting reflected pressure is, as expected with reference to the difference
in incident pressure shown in Fig. 11, lower when using ModEOS but also yields a somewhat less stable pressure-
time history response. This is partly due to the loss of pressure in the ground and a secondary peak pressure at
various times in between 10 and 30 ms. This response makes it more difficult to compare the conceptual influence
of structural mass and stiffness that is proposed in [16] and [17].
Mutual for all simulations carried out here is that there is a distinctive initial pressure peak when the shock wave
reaches the structure. The maximum pressure of this peak only depends on the mass; the same value is obtained
independent of the spring stiffness, see Table 1. In this table is also listed the resulting impulse intensity for the
reflected pressure at different times [10, 30 and 50 ms]. The peak stress increase with increased mass, and using
material model Sjöbo, the reflected pressure peak (but not always the impulse) is larger than that reached when
using ModEOS. This observation is in line with the concept schematically shown in Fig. 2; i.e. that the initial
pressure is governed by the structural mass. However, the forming of such a distinct pressure peak is not in
conjunction with the experiments; compare reflected pressure in Fig. 7 and Fig. 8. Such a pressure peak was not
reported in any of the experimental cases compared with here and the reason for this discrepancy is unknown.
However, measuring the pressure in a material like sand is difficult and one possible reason might be that such an
initial peak may have been filtrated away in the original experiments. The difference is noted but is apart from that
not further treated here.

-- 9 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
Ground material model: ModEOS
m = 5.2 kg m = 58.8 kg
Ground material model: Sjöbo
m = 5.2 kg m = 58.8 kg
Fig. 13 Simulated reflected pressure, and calculated mass inertia pressure and spring pressure for various piston
masses and constant spring stiffness 0.1 MN/m. For the corresponding experimental results, see Fig. 7.
-100
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
m = 5.2 kg 	k = 0.1 MN/mg
-100
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
m = 58.8 kg 	k = 0.1 MN/mg
-100
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
m = 5.2 kg 	k = 0.1 MN/mg
-100
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
m = 58.8 kg 	k = 0.1 MN/mg
-100
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
R. pres.
Inertia
Spring
m = 5.2 kg 	k = 0.1 MN/mg

-- 10 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
Ground material model: ModEOS
m = 5.2 kg m = 58.8 kg
Ground material model: Sjöbo
m = 5.2 kg m = 58.8 kg
Fig. 14 Simulated reflected pressure, and calculated mass inertia pressure and spring pressure for various piston
masses and constant spring stiffness 0.5 MN/m. For the corresponding experimental results, see Fig. 8.
The relation between simulated reflected peak pressure in Table 1 and incident pressure in Fig. 11 is shown in
Table 2. If the incident wave was reflected against a rigid surface the pressure should increase with a factor 2. Here,
though, the ratio Pload / Pi is less than that; with decreasing value for decreasing piston mass. It is of interest to note
that this ratio is similar when using either material model ModEOS or Sjöbo; especially when the mass is either
24.7 kg or 58.8 kg. Further, the ratio is less than 1,00 when the piston mass is small.
-100
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
-150
-100
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
-100
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
-100
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
-100
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
R. pres.
Inertia
Spring
m = 5.2 kg 	k = 0.1 MN/mg

-- 11 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
Table 1 Simulated reflected pressure and impulse intensity at different times [10, 30, 50 ms].
Structure Ground material model: ModEOS Ground material model: Sjöbo
Case m k Pload iload,10ms iload,30ms iload,50ms Pload iload,10ms iload,30ms iload,50ms
[kg] [MN/m] [kPa] [Pas] [Pas] [Pas] [kPa] [Pas] [Pas] [Pas]
1 5.2 0.1 189 110 230 643 389 87 763 1 170
2 10.6 0.1 269 179 281 669 500 151 644 1 023
3 24.7 0.1 350 324 410 869 607 345 737 1 216
4 58.8 0.1 457 545 602 894 748 528 787 1 094
5 5.2 0.5 189 275 782 968 390 311 1 591 1 875
6 10.6 0.5 269 254 828 1 046 501 345 1 487 1 790
7 24.7 0.5 351 412 985 1 235 608 474 1 524 1 871
8 58.8 0.5 457 587 986 1 278 748 618 1 495 1 947
9 5.2 1.2 189 502 1 501 1 539 391 647 1 881 1 918
10 10.6 1.2 269 422 1 221 1 263 501 632 1 901 1 946
11 24.7 1.2 351 526 1 217 1 284 608 655 1 956 2 028
12 58.8 1.2 457 597 1 683 1 777 748 723 1 923 2 046
Table 2 Relation between reflected pressure and incident pressure in simulations.
[ModEOS: Pi = 281 kPa; Sjöbo: Pi = 468 kPa]
Structure Material: ModEOS Material: Sjöbo
Case m k Pload Pload / Pi Pload Pload / Pi
[kg] [MN/m] [kPa] [-] [kPa] [-]
1 5.2 0.1 - 1.2 189 0.67 389 0.83
2 10.6 0.1 - 1.2 269 0.96 500 1.07
3 24.7 0.1 - 1.2 350 1.25 607 1.30
4 58.8 0.1 - 1.2 457 1.62 748 1.60
Ground material model: ModEOS Ground material model: Sjöbo
Fig. 15 Comparison of simulated reflected pressure from Fig. 14 for various piston masses and with constant
spring stiffness 0.5 MN/m. See For the corresponding experimental results, see Fig. 9.
The forming of a first (inertia) and second peak (stiffness), as illustrated in Fig. 2, is not as clearly identified in the
simulations as in the experiments. This is believed to at least partly be to the strong initial pressure peak obtained in
the simulations. However, in Fig. 15 the reflected pressure from the simulations with stiffness k = 0.5 MN/m is
compared for low (m = 5.2 kg) and high piston mass (m = 58.8 kg). From this it can be seen that, when the mass is
high, the duration of the initial peak is increased to several milliseconds; thus creating a response that is more
similar to the concept described in Fig. 2. As a comparison, for a low mass, the reflected pressure first drops close to
zero after the distinct initial peak before it gradually increase again dissimilar to that obtained when the piston mass
is large.
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
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2 kg
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
180
200
0 	10 	20 	30 	40 	50
Pressure,
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
5.2 kg
58.8 kg
Nr 	k = 0.5 MN/mg

-- 12 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
In Fig. 16 the reflected pressure from the simulations is shown for various stiffness when the piston mass is low
(m = 5.2 kg) and high (m = 58.8 kg). When the mass is low it is clear, for both ground material models, that
increased stiffness result in increased reflected pressure. This is especially clear for the Sjöbo material model, which
provides result in good conceptual agreement with the experiments, compare with Fig. 10a. When the piston mass is
high, though, the resulting reflected pressure is not as straightforward. Here, the simulations indicate that an
increased stiffness also cause increased reflected pressure. However, this is not in conjunction with the experimental
observations, see Fig. 10b, where it is shown that the stiffness has a low influence on the reflected pressure when the
piston mass is high, but still increasing the second part pressure time histories when stiffness is increased.
Ground material model: ModEOS
m = 5.2 kg m = 58.8 kg
Ground material model: Sjöbo
m = 5.2 kg m = 58.8 kg
Fig. 16 Simulated reflected pressures for varied spring stiffness and with constant piston mass 5.2 kg or 58.8 kg.
For the corresponding experimental results, see Fig. 10.
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
 P [kPa]
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
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
1.2 MN/m
0.5 MN/m
0.1 MN/m
m = 58.8 kg 	Nr
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
 P [kPa]
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
 P [kPa]
Time, t [ms]
Hultgren (1979) - Autodyn
1.2 MN/m
0.5 MN/m
0.1 MN/m
m = 58.8 kg 	Nr

-- 13 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
The structural response, i.e. the spring pressure, is less sensitive than that of the reflected pressure and mass inertia
pressure. It is therefore of interest to compare the resulting spring pressures between both the simulations and the
experiments. The maximum spring pressure calculated from experiments and simulations are listed in Table 3 and in
Fig. 17 the spring pressure-time relations from the simulations (dashed lines) are shown for the possible
combinations of four different piston masses and three different spring stiffness when using either ModEOS or
Sjöbo ground material model. For low (k = 0.1 MN/m) and intermediate stiffness (k = 0.5 MN/m) the calculated
spring pressures from the experiments are shown as well with continuous lines.
Table 3 Comparison of maximum calculated spring pressure from experiments and simulations; Psim / Pexp express
the ratio between spring pressure from simulations and experiments.
Structure Experim. Material: ModEOS Material: Sjöbo
Case m k Pspring Pspring Psim / Pexp Pspring Psim / Pexp
[kg] [MN/m] [kPa] [kPa] [-] [kPa] [-]
1 5.2 0.1 21 26 1.24 35 1.65
2 10.6 0.1 31 27 0.85 35 1.11
3 24.7 0.1 30 29 0.94 35 1.16
4 58.8 0.1 34 30 0.89 35 1.04
5 5.2 0.5 95 54 0.57 78 0.82
6 10.6 0.5 129 64 0.49 81 0.62
7 24.7 0.5 90 67 0.74 81 0.89
8 58.8 0.5 74 68 0.93 79 1.08
9 5.2 1.2 - 110 - 115 -
10 10.6 1.2 - 111 - 117 -
11 24.7 1.2 - 113 - 116 -
12 58.8 1.2 - 112 - 115 -
From Table 3 and Fig. 17 it can be concluded that the calculated spring pressure from the simulations always is
higher when using the Sjöbo material model compared to when using ModEOS; the difference being small, though,
when the stiffness is high (k = 1.2 MN/m). The occurrence of a strong initial peak pressure in the simulations also
affects the calculated spring pressure. As a result the spring pressure in the simulations does not get a slow gradual
increase, as was the case in the experiments, but rather a somewhat quicker raise in pressure; compare with Fig. 17.
Apart from this difference, though, the correspondence of the spring pressure from the experiments and the
simulations is acceptable, both regarding maximum value and when in time it is obtained. Compared to the
experimental results the correspondence of the maximum spring pressure is rather good when the stiffness is low
(k = 0.1 MN/m); the difference is in most cases less than 10-20 %. For intermediate stiffness (k = 0.5 MN/m),
though, the spring pressure obtained in the simulations is often a bit low in comparison to that obtained in the
experiments; the difference being 25-50 % in several cases.
In both experiments and simulations the spring pressure increases with an increased stiffness. This is natural, though,
and in order to ease the comparison of cases using different spring stiffness it may be convenient to translate the
spring pressure to the internal work carried out by the spring due to impulse loading. For a structure with a linear
elastic response (e.g. the spring) the resistance R can be determined as
x	d	k	R 		
(5)
and using
A	P	R spring 		
(6)
where a piston diameter of 0.34 m yields A = 0,091 m2, the internal work can be calculated as
 	
k
A	P
k
R	d	k
W spring	x
i 2	2	2
2	2	2 	
	

	
(7)

-- 14 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
Ground material model: ModEOS Ground material model: Sjöbo
k = 0.1 MN/m k = 0.1 MN/m
k = 0.5 MN/m k = 0.5 MN/m
k = 1.2 MN/m k = 1.2 MN/m
Fig. 17 Comparison of calculated spring pressure for varied spring stiffness and piston mass. Results from
simulations in dashed lines; results from experiments in continuous lines.
0
20
40
60
80
100
120
140
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
0
20
40
60
80
100
120
140
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

-- 15 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
Using equation (7) in combination with stiffness k and maximum spring pressure Pspring, listed in Table 3, the
internal work for both experiments and simulations can be determined as shown in Table 4. It is of interest to note
that in the simulations the internal work carried out of the spring either increase with increased mass (material model
ModEOS) or is more or less constant regardless of mass (material model Sjöbo). Such a clear correspondence is not
seen in the experimental results, though. Whether this is due to natural spread in the experimental results or whether
it has a clear physical explanation is difficult to know for sure. However, an advantage of using advanced
simulations, as is done here, is that the parameters used are well defined, and thus provide a powerful tool to better
understand the influence of different parameters when changing only one parameter at a time. This is never the case
in experiments since it not possible in practice to make fully sure that only one parameter is changing. Consequently,
the result from simulations, although still based on a simplified model of the physical reality, provides a more “pure”
ground for parametric studies. Therefore, the result from the simulations is used here in the following reasoning.
Table 4 Maximum calculated internal work Wi carried out by the piston spring in experiments and simulations.
Wi / Wi,5.2 express the ratio between the internal work for the actual case and the internal work when
m = 5.2 kg for the same stiffness k.
Structure Experiments Material: ModEOS Material: Sjöbo
Case m k Wi Wi / Wi,5.2 Wi Wi / Wi,5.2 Wi Wi / Wi,5.2
[kg] [MN/m] [J] [-] [J] [-] [J] [-]
1 5.2 0.1 18 1.00 28 1.00 49 1.00
2 10.6 0.1 41 2.25 30 1.06 50 1.02
3 24.7 0.1 38 2.09 34 1.20 51 1.04
4 58.8 0.1 47 2.60 37 1.32 51 1.03
5 5.2 0.5 75 1.00 24 1.00 50 1.00
6 10.6 0.5 138 1.84 33 1.39 54 1.07
7 24.7 0.5 67 0.90 37 1.55 54 1.07
8 58.8 0.5 45 0.60 38 1.60 52 1.04
9 5.2 1.2 42 1.00 46 1.00
10 10.6 1.2 42 1.01 47 1.03
11 24.7 1.2 44 1.04 46 1.01
12 58.8 1.2 43 1.04 45 0.99
Due to energy balance, the external work We is equal to the internal work Wi; i.e. We = Wi. For an impulse load,
which have a short enough duration compared to the natural period of the structure, the external work We can also be
calculated as
m
I
We 2
2
	
(8)
where I is the impulse load acting on a structure with mass m. For the cases studied here the load duration is not
short enough, though, and the resistance R of the structure will therefore also cause a decrease of the external work
performed on the structure. Nevertheless, the principal influence of the mass will still be the same; i.e. an increased
structural mass leads to a decrease of the external work caused by impulse loading.
In Table 4 it is shown in the results based on simulations that the external work varies somewhat with varying
masses. However, the change in external work is far from inversely to the piston mass, as is the case according to
equation (8); i.e. an increase in piston mass from 5.2 kg to 58.8 kg has much less influence than expected on the
resulting external work listed in Table 4. Consequently, this imply that the piston mass is of secondary importance
for the external work acting on the structure. A possible cause for this is that there is some other mass, i.e. the mass
from the interacting ground material, which is also influencing the response of the structure. That is, the effective
mass of an underground structure is not just made up of the mass of the structure itself but also influenced by the
mass from the surrounding ground material. Based on the results listed in Table 4 the piston mass seems to have
limited influence on the external work carried out on the structure. Accordingly, this indicates that the majority of
the mass is made up of something else; i.e. part of the ground material in between the charge and the piston.

-- 16 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
CONCLUSIONS AND FUTURE WORK
In the simulations an initial pressure peak is obtained that was not observed in the experiments. However, the peak
pressure increase with increased piston mass and is unaffected by the spring stiffness; thus supporting the conceptual
findings of the experiments. Further, when the mass is low the reflecting pressure increase with increasing stiffness,
and when the mass is high, an increased stiffness still increases the reflecting pressure, but not as strongly as is the
case when the mass is low. Consequently, the simulation results confirm the concept observed in the experiments
that a large mass cause the forming of a first peak in reflecting pressure and that a second peak more depends on the
structural stiffness.
In the simulations the resulting spring pressure depends mainly on the spring stiffness, while the piston mass in most
cases has only a minor influence. This implies that the mass from the interacting ground material is greatly affecting
the response of an underground structure subjected to impulse loading.
The aim of this work is to better understand the interaction between ground material and buried structure and how
the former affect the response of a buried structure. Based on a better understanding it is desirable to develop a
simplified calculation methodology in which the effect of this interaction can be approximately taken into account,
and thereby be used in the design of buried structures. The next step is to further study this interaction using a
simplified model, probably SDOF and/or 2DOF, trying to account for the effect of the added mass from the ground
material.
ACKNOWLEDGEMENTS
The authors acknowledge the support given by MSB and especially Björn Ekengren. Additionally, members of the
West Coast Sweden Shock Wave Group (WCSSWG), and especially Dr. Joosef Leppänen, are highly acknowledged
for their input.
REFERENCES
[1] Ekengren B. (2015): Skyddsrum, SR 15 (Civil Defence Shelters SR 15, in Swedish.), the Swedish Civil Contingencies
Agency (MSB), report no. MSB748, ISBN 978-91-7383-485-8, Karlstad, Sweden.
[2] Lampson C.W. (1946): Final Report on Effects of Underground Explosions, Div. 2, National Defence Research Committee
of the US Office Scientific R&D, NDRC Report No. A-479, OSRD Report No. 6645.
[3] Laine L. and Sandvik A. (2001): “Derivation of mechanical properties for sand”, 4th Asian-Pacific conference on Shock
and Impact Loads on Structures, CI-Premier PTE LTD, vol. 4, pp 353-360, Singapore.
[4] Heyerdahl H. and Madshus C. (2000): “EOS-data for sand, Tri-axial tests on sand from Sjöbo”, Norges Geotekniske
institutt, NGI rept. 20001157-1, Oslo, Norway.
[5] Century Dynamics Inc., (2004): AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[6] Fairlie G. and Bergeron D. (2002):”Numerical simulations of Mine Blast Loading on Structures”, 17th Numerical aspects
of Blast Symposium, Las Vegas, Nevada.
[7] Tjernberg A. (2006): Simulation of Mine-Blast deflection, FOI-Swedish Defence Research Agency, Technical Report, FOI-
R--1913--SE, TUMBA, Sweden.
[8] Grujicic M., Pandurangan B., Qiao R., Cheeseman B.A., Roy W.N., Skaggs R.R., and Gupta R. (2008): Parameterization of
the porous-material model for sand with different levels of water saturation”, Soil Dynamics and Earthquake Engineering
28, pp 20–35.
[9] Moxnes J. F., Ødegårdstuen G., Atwood A., and Curran P. (1999): “Mechanical properties of a porous material studied in a
high speed piston driven compaction experiment”, 30th International Annual Conference of ICT Energetic Materials,
Fraunhofer Institut Chemische Technologie.
[10] Laine L. (2006): “Study of Planar Ground Shock in Different Soils and Its Propagation Around a Rigid Block”, 77th Shock
and Vibration Symposium, Monterey, CA.
[11] Wang1 Z., Hao H., and Lu Y. (2004): “A three-phase soil model for simulating stress wave propagation due to blast
loading”, Int. Journal for Numerical and Analytical Methods in Geomechanics, 28:33–56 (DOI: 10.1002/nag.325).
[12] Laine L. and Larsen O.P. (2009): Proposal on How to Model the Unloading in a Compaction Equation of State based upon
Tri-axial tests on Dry Sand, 80th Shock & Vibration Symposium, San Diego, CA.
[13] ConWep(1992): Collection of conventional weapons effects calculations based on TM 5-855-1, Fundamentals of Protective
Design for Conventional Weapons, U.S. Army Engineer Waterways Experiment Station, Vicksburg, USA.

-- 17 of 18 --

From the Proceedings of 86th Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, Orlando, Florida, 2015.
[14] Laine L. (2012): Markstötvåg english title Ground Shock. MSB, Myndigheten för samhällsskydd och beredskap. Publ.nr
MSB344, Karlstad. (in Swedish).
Weblink:https://www.msb.se/Upload/Insats_och_beredskap/Olycka_kris/Skyddsrum/Litteratur/L01.%20Referenslitteratur/
L01-202_Markst%C3%B6tv%C3%A5g.pdf
[15] Laine L. and Larsen O.P.(2012): “Implementation of Equation of State for Dry Sand in Autodyn”, 83rd Shock and
Vibration Symposium, Shock and Vibration Exchange (SAVE), New Orleans, LA.
[16] Hultgren S. (1979): Explosion of buried model structures to buried TNT explosions in sand, Fortfikationsförvaltningen
Fortf, Report nr C 183, Eskilstuna, Sweden.
[17] Hultgren S. (1980): (Effect of underground explosions in the sand with deformable walls, in Swedish), Omgång II,
Fortfikationsförvaltningen Fortf, Rapport nr C 200, Eskilstuna, Sweden.
[18] Hultgren S. (1985): On the effects of buried explosions in sand, Fortfikationsförvaltningen Fortf, Report nr C2:85,
Eskilstuna, Sweden.
[19] Johansson, M., Larsen O.P., Laine, L., (2007): Explosion at an intersection in an Urban Environment – Experiments and
analyses, Proceedings of the 78th Shock and Vibration Symposium, Philadelphia, PA, USA

-- 18 of 18 --