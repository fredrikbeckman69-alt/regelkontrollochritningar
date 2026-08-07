---
title: "Ground Shock Experiments  Total Structures Spring Energy Displacement"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/ground-shock-experiments--total-structures-spring-energy-displacement.pdf"
fileType: "PDF"
keywords: ["skyddsrum","explosion","spring","piston","shock","mass","sand","stiffness"]
summary: "In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org, Dallas, Texas, November 2018. 2D FE and 2DOF Simulations of Ground Shock Experiments – Total Structure’s Spring Energy Displacement Depende..."
---

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
2D FE and 2DOF Simulations of Ground Shock Experiments
– Total Structure’s Spring Energy Displacement Dependency to the
Charge´s and Structure´s Properties
Leo Lainea*, Morgan Johanssonb and Ola Pramm Larsenc
aLL Engineering
Stugvägen 4, SE-438 94 HÄRRYDA, Sweden
*Corresponding author: leo.laine@telia.com
bNorconsult AB
Theres Svenssons gata 11, 417 55 GÖTEBORG, Sweden
cCAEwiz Consulting AS
Grinda 2B, NO-0861 OSLO, Norway
The aim for these studies is to find a methodology that can use simplified relationships for
ground shock prediction, from e.g. ConWep, in combination with simplified models such
as two-degree-of-freedom model (2DOF), to predict the structural response of e.g. a buried
concrete wall.
This paper analyses, by using 2D axial symmetry Finite Element (FE) with Autodyn, the
structural response of a well-defined structure; a suspended piston-spring system buried in
sand subjected to ground shock from an explosive charge. The parameters varied in the
simulations were charge size, charge distance, reflection area of the piston, piston mass,
and spring stiffness. Earlier experiments from the 1980s, conducted by S. Hultgren,
Swedish Fortifications, showed that the reflection pressure over time was dependent on the
mass and stiffness of the structure. Here, more parameters were varied in simulations to
see how well a 2DOF can capture the main behaviour of the structural response. The
reflected pressure time history dependency on piston mass and spring stiffness has be
confirmed by using 2DOF in earlier studies presented at SAVIAC 86, 87, and 88.
In this paper the focus is on what main parameters influence the total spring displacement
energy. If the results are visualised in a 3D plot with coefficient of variation, the ratio of
standard deviation and mean value, of the maximum spring energy in z-direction and the
scaled charge distance and variation of piston area in x-, and y-directions, then the
coefficient of variation maximum is 0.8, i.e. 80%, if one studies all results of the spring
stiffness and piston mass variations. However, if the 3D plot was made for each spring
stiffness 0.1 MN/m, 0.5 MN/m, and 1.2 MN/m, only study variation in mass results. This
leads to that the coefficient of variation maximum drops down to 0.08, i.e. 8%, 0.025, i.e.
2.5%, and 0.03, i.e. 3.0%, respectively. This indicates that the influence of piston mass on
the maximum spring energy is marginal, but the spring stiffness is important for the total
spring energy during ground shock. This is also confirmed in 2D-FE simulation results
where the particle velocity plots of the soil indicate that the flow of soil intensifies towards
piston direction when spring stiffness value is decreased and that the moving ground shock
finds the least resistant path from the detonation centre. The aim is to derive a simplified
model for calculating maximum spring energy and spring displacement.

-- 1 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
INTRODUCTION
The Swedish Civil Contingencies Agency (MSB) is responsible for the building regulations of the Swedish civil
defence shelters. There are specific regulations for how the defence shelters are planned, built, equipped, and
maintained [4]. One of many regulations state what load level the shelters should be able to withstand: “The effect of
a pressure wave corresponding to that produced by a 250 kg GP-bomb with 50 weight percent TNT which burst freely
outside at a distance of 5.0 meters from the outside of the shelter during free pressure release”. However, many of the
shelters are designed as basements below ground surface. Therefore, more knowledge on how the ground shock
propagates and attenuates during the scaled distances of 0.1 to 10 kg/m1/3 and effects on buried shelters, is needed.
Earlier experiments from the 1980s, conducted by S. Hultgren, Swedish Fortifications, showed that the reflection
pressure over time was dependent on the mass and stiffness of the structure. The buried structure is a simple one
degree of freedom (DOF) system with a piston mass and linear spring stiffness, see [1] and [2]. To increase the analysis
results, simulations were conducted where more parameters were varied, such as piston area size and scaled charge
distance, just to see how this influenced the structural response of the buried structure. The reflected pressure time
history dependency on piston mass and spring stiffness has be confirmed by using Finite Element(FE) and 2DOF
simulations in earlier studies presented at SAVIAC 86, 87, and 88, see [1], [2], and [3]. The earlier papers confirm
that experimental results show the same trends as the FE-simulations. The earlier three papers also confirm that one
can’t use the incident pressure from ground shock and apply a reflection pressure amplification factor on the incident
pressure time history and apply it on the buried structure to calculate the structural response. The reason is that the
reflected pressure is dependent on the structure as mentioned earlier, see [5], [6], and [7].
Hence, to determine the pressure acting on a structure, caused by ground shock, one must also know the properties of
the structure. A simplified structure, a buried suspended piston with mass m and stiffness k. Neglecting the influence
of damping, the response of this structure can be described using a single degree of freedom system by using
equation (1)
( ) 	( ) 	( )t	d	k	t	a	m	A	t	P 	x	x	r 		+		=		
(1)
where Pr(t) is the reflected pressure acting on the piston surface area A, ax is the acceleration of the piston mass and
dx is the displacement of the piston. Fig. 1 shows the reflected pressure time history and how it contains a first mass
inertia peak that increases if piston mass increases and a second spring peak which increases in amplitude if the spring
stiffness increasres, this sums up the results from reports [5]-[6]. Further details about simulation results from FE and
2DOF about results of the reflected pressure, see [2], and [3].
Time, t
Pressure, Pr
( ) ( 	) A
d	k	a	m	t	P 	x	x	r
1
		+		=
stiffness
mass
inertia
Fig. 1 Schematic illustration of how the reflection pressure Pr(t) is made up of mass inertia m∙ax and stiffness k∙dx
of a buried structure.
This paper uses solely simulated FE- results for the analysis. Simulations were carried out in AUTODYN-2D [8],
these simulations have been earlier compared with experimental results from [5]-[6]. Total of 132 simulations have
been carried out to achieve a large enough variation of parameters for the buried spring piston system, see APPENDIX
I – CONDUCTED SIMULATION MATRIX.

-- 2 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
In this paper the focus is on what main parameters influence the total spring deformation energy. The spring energy
varies quite a lot for the different studied parameters, see Fig. 2. The spring energy varies from about 10 J to 13000 J.
Fig. 2 3D plot of spring energy in 10 log scale as a function of scaled charge distance and piston plate area, the
red dots are all spring stiffnesses and piston mass results.
To do further analysis the coefficient of variationcv	 will be used. Thecv	 is calculated by dividing the standard
deviation	 with the mean	m	x
m
cv x

=	
(2)
where standard deviation is calculated by
2
1 ( )
( 1)
N
i m	i x x
N
 = −
−
= 	
(3)
where	i	x	 isN	 observed points and	m	x	 is the average.
The aim is to derive a simplified model for calculating maximum spring energy and spring displacement, such as 2-
DOF and use simplified input from free field ground shock equations, e.g. Conwep [13]. If one studies all the spring
energy results of all the spring stiffness and piston mass variations by using the coefficient of variation, the maximum
is	0.8	cv =	 , i.e. 80%, which is quite large, see Fig. 3. However, if the 3D plot was made for each spring stiffness 0.1
MN/m, 0.5 MN/m, and 1.2 MN/m, only study variation in mass results. This leads to that the coefficient of variation
maximum drops down to 0.08, i.e. 8%, 0.025, i.e. 2.5%, and 0.03, i.e. 3.0%, respectively, see Fig. 4, Fig. 5, and Fig. 6,
respectively. This indicates that the influence of piston mass on the maximum spring energy is marginal, but the spring
stiffness is important for the total spring energy during ground shock. This is also confirmed in 2D-FE simulation
results where the particle velocity plots of the soil indicate that the flow of soil intensifies towards piston direction
when spring stiffness value is decreased and that the moving ground shock finds the least resistant path from the
detonation centre, see [3]. Another observation that can be made is that the weakest spring stiffness 0.1 MN/m is the
most sensitive for changing the piston plate area, see Fig. 4 and compare with Fig. 5, and Fig. 6. The stiffest spring
stiffness 1.2 MN/m is more sensitive for scaled charge distance, see Fig. 6.

-- 3 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
Fig. 3 3D plot of coefficient of variation for spring energy as a function of scaled charge distance and piston plate
area for all spring stiffnesses and piston mass results.
Fig. 4 3D plot of coefficient of variation for spring energy as a function of scaled charge distance and piston plate
area, the spring stiffness is 0.1 MN/m and all piston mass results.
Fig. 5 3D plot of coefficient of variation for spring energy as a function of scaled charge distance and piston plate
area, the spring stiffness is 0.5 MN/m and all piston mass results.

-- 4 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
Fig. 6 3D plot of coefficient of variation for spring energy as a function of scaled charge distance and piston plate
area, the spring stiffness is 1.2 MN/m and all piston mass results.
The paper is organized as follows: The section PRINCIPAL EXPERIMENTAL SETUP, describes how the simulation
experiments were conducted and what parameters were varied. In section FE SIMULATION MODEL AND
PARAMETERS STUDIED it is shown how the Euler and Lagrange elements were designed in AUTODYN-2D and
what material models were used. In section 2DOF MODEL it is shown what parameters and initial conditions were
used in the 2DOF model. In the section SIMULATION RESULTS the results from the extended parameter variation
from obtained from simulations in AUTODYN-2D are analysed and compared with 2DOF. Finally, the section
CONCLUSIONS AND FUTURE WORK concludes the findings from simulations and proposes suggestions for
future work.
PRINCIPAL EXPERIMENTAL SETUP
The principal experimental setup is shown in Fig. 7. Both the charge of TNT with weight W kg and the suspended
piston was buried d=1 m, and the distance between the charge and the piston was set to r m. The sand is modelled as
dry sand [9],[10],[11], and [12], details about the simulation setup can be found in [3].
Fig. 7 Principal sketch of the experimental setup.
The main cylinder body consisted of a circular steel tube of 1.18 m in length and 0.36 m in outer diameter. The cylinder
wall thickness was 8 mm and the diameter of the piston surface was 0.34 m. To increase the weight of the cylinder
tube lead pieces were bolted to its inside; thus, increasing the total weight of the cylinder body to a total of 295 kg.

-- 5 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
The piston was movable on ball bearings through an axis and the stiffness was obtained with a helical spring. The
cylinder can be seen as a fixed body.
The piston’s movable mass was made of a removable plate and by changing plates with different thickness the
suspended mass m of the piston was varied [5.2, 10.6, 24.7, and 58.8 kg]. Further, by changing the helical spring the
stiffness k was also varied [0.1, 0.5, and 1.2 MN/m]. In addition, the piston surface plate was varied.
The following measurements were installed: piston accelerometer (ax), piston reflected pressure gauge (Pr), and
relative piston displacement (dx), see Fig. 7. Further details about the experimental setup, e.g. what model type of
sensors was used, can be found in [5]. Same measurements in addition to more measurements are conducted in
AUTODYN [8] models using a 2D axial symmetric geometry.
FE SIMULATION MODEL AND PARAMETERS STUDIED
The FE model was built in AUTODYN [8] using a 2D axial symmetric geometry, see Fig. 8. The TNT, sand, and void
behind inside the piston was modelled with Euler cells, the piston, cylinder, and spring system was modelled with
lagrange cells. The size of the model, element sizes, spring modelling, and boundaries etc. are described in [3]. The
air surface part is here neglected, it means that the depth of burial is much larger than the radius,d r	 , if one wants
to compare to physical experiments.
Fig. 8 2D axial symmetric model, with 25 fixed target points in the Eulerian SAND domain. The radial position
of the four target rows i.e. 1-6, 7-12, 13-18, and 19-24 are located relative to the cylindrical plate (blue
with radius rpl). The 10m long Lagrangian spring (purple) is fixed at its right-hand side and connected to
the cylindrical plate. Target 26 is located on the piston plate.
2DOF MODEL
The 2DOF model simplifies the experimental setup by the following assumptions, the sand in front of the structure is
assumed to be modelled as an added mass, see Fig. 9 The explosive load is converted to either a force as function of
time acting on the added mass or as a mass with an initial particle velocity on the added mass. In Fig. 10., the principal
system of 2DOF is shown. The spring k1 can only transfer compressive forces while spring k2 can transfer forces in
both directions. The initial velocity v0 (i.e. the sand particle velocity Up0) is used for describing the movement of the
sand generated by the explosion. The depth of burial is seen as

-- 6 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
Fig. 9 Illustration of how the 2DOF model is set up. The piston mass is connected to a second mass which is
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
Fig. 10 Illustration of 2DOF model used. Spring k1 can only transfer compressive forces while spring k2 can
transfer forces in both directions.
The equations used to solve the 2DOF model can be written as
( )





=	
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
+	−
−
+	
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
(4)
where m1 and m2 is the sand mass and mass of the piston plate, respectively, k1 is the stiffness of the sand cone and k2
is the stiffness of the spring. Further ü1 and ü2 are accelerations and u1 and u2 are displacements of masses m1 and m2,
respectively. To correctly simulate that sand cannot transfer tensile forces the sand spring k1 was modified so that only
compressive forces could be transferred; spring k2 though was linear elastic in both directions. The influence of
damping was assumed to be negligible and is hence not included in the model. The added mass of sand is calculated
as the mass of a cone between the charge point and the piston plate (i.e. the base of the cone) as
sand	sand
r
A	m	
			= 3
(5)
where A is the area of the piston plate, r is the charge distance and ρsand = 1674 kg/m3 is the sand in situ density.
The linear spring stiffness of the sand is approximated as
cone
sand
sand l
A	K
k 
=	
(6)

-- 7 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
where Ksand is the sand bulk modulus and
3
r
lcone =	
(7)
is the distance from the centre point of the sand cone to the piston plate. The bulk modulus was approximated to be
equal both for loading and unloading cases and was determined as
2
sand	sand	sand 	c	K 		=
	
(8)
where csand = 350 m/s is the speed of the pressure wave (a typical value for dry soil [12]). This gives a sand bulk
modulus of Ksand = 0.2 GPa (as a comparison, this is about ten times smaller than the bulk modulus of water,
Kwater = 100014842 = 2.2 GPa). The model parameters for all cases are gathered in Table 1.
Table 1 Model parameters used in the 2DOF model for the cases studied.
Identification Part 1: Sand Part 2: Spring
Group Case msand ksand m k
[kg] [MN/m] [kg] [MN/m]
1 1-12 50.7 56 5.2 – 58.8 0.1 – 1.2
2 13-24 101.3 112 5.2 – 58.8 0.1 – 1.2
3 25-36 202.6 223 5.2 – 58.8 0.1 – 1.2
4 37-48 50.7 56 5.2 – 58.8 0.1 – 1.2
5 49-60 50.7 56 5.2 – 58.8 0.1 – 1.2
6 61-72 50.7 56 5.2 – 58.8 0.1 – 1.2
7 73-84 50.7 56 5.2 – 58.8 0.1 – 1.2
8 85-96 101.3 28 5.2 – 58.8 0.1 – 1.2
9 97-108 202.6 223 5.2 – 58.8 0.1 – 1.2
10 109-120 101.3 28 5.2 – 58.8 0.1 – 1.2
11 121-132 202.6 56 5.2 – 58.8 0.1 – 1.2
In previous work, see [1] and [2], the initial particle velocity used was derived with ConWep [13] for a sand with
1674 kg/m3 in density, seismic wave speed 350 m/s, and 2.75 attenuation factor. This gave a particle velocity of
1.5 m/s for the selected charge size and distance to target (0.5 kg and 1.0 m respectively). In [3], the particle velocities
from Autodyn simulations have been used instead.

-- 8 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
SIMULATION RESULTS
Simulations were carried out for a total of 12 combinations of different piston mass [5.2, 10.6, 24.7, 58.8 kg] and
spring stiffness [0.1, 0.5, 1.2 MN/m]. For each of these combinations, the charge size W [0.5, 0.75, 1.0, 1.5 kg TNT]
and the horizontal distance r, between charge and piston plate, was in one case also varied [1, 2 m]. Further, for some
groups the piston contact surface was increased in size: ΔA = (A-A0)/A0·100, [0, 100, 300 %]. A total of 11 groups,
each with 12 simulations, were conducted; resulting in a total number of 132 simulations, see Table 2 and
APPENDIX I – CONDUCTED SIMULATION MATRIX.
Table 2 Summary of simulations carried out. In each group the piston mass [5.2, 10.6, 24.7, 58.8 kg] and spring
stiffness [0.1, 0.5, 1.2 MN/m] were varied, resulting in a total of 132 simulations.
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
10 109-121 1.00 2.0 0
11 121-132 0.50 2.0 100
In section INTRODUCTION, it was shown by studying the coefficient of variation for spring displacement energy
that the maximum spring energy is independent of the piston mass. The spring energy can be determined as the
internal work made by the spring and can be calculated as
2
,max
2
x
i
k d
W 
=	
(9)
where k is the spring stiffness and dx,max is the maximum displacement of the spring.
In Table 3, the average and standard deviation spring energy for the different spring stiffnesses are shown. The largest
spring energy is obtained in simulation group 9 (scaled charge distance 0.87 m/kg1/3, spring plate area 300% larger
than smallest value and spring stiffness 0.1 MN/m) where a value of 12560 J is reached. In the same simulation group
9, the maximum spring energy reduces to 4180 J and 3213 J, when spring stiffness is increased to 0.5 MN/m and 1.2
MN/m, respectively, see Table 3. This clearly indicates the leakage effect of a closed in explosion. When the scaled
distance is kept constant and the smallest spring plate area is used, simulation group 7, the maximum spring energies
reduce to 592 J, 475 J, and 409 J for spring stiffness 0.1 MN/m, 0.5 MN/m, and 1.2 MN/m, respectively. This means
that the maximum spring energy increases 21 times for spring stiffness 0.1 MN/N when the piston plate area is
increased with 300 % for scaled charge distance 0.87 m/kg1/3. It increases more moderately for the stiffer springs, 9
and 8 times for spring stiffness 0.5 MN/m and 1.2 MN/m. Comparing simulation group 3 and group 1 where the scaled
charge distance is kept constant at 1.26 m/kg1/3 but the spring plate area is increased 300 % in group 3. There the
increase is 10, 8, and 7 times increase in spring energy for spring stiffnesses 0.1 MN/m, 0.5 MN/m, and 1.2 MN/m,
respectively, see group 3 and group 1 in Table 3.

-- 9 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
Table 3 Summary of results for maximum spring displacement energy from Autodyn simulations. In each group
spring stiffness [0.1, 0.5, 1.2 MN/m] were varied and mean value and standard deviation are given for all
the piston masses [5.2, 10.6, 24.7, 58.8 kg].
Simulation
group
Spring
stiffness
Scaled
charge
distance
Piston
plate area
increase
Maximum spring energy
Group k [MN/m] R
[m/kg1/3]
(A-A0) / A0·100
[%] Wi,m
[J]
σW
[J]
σW / Wi,m
[%]
1 0.1 1.26 0 139 1.6 1.2
0.5 111 2.3 2.0
1.2 97 2.3 2.4
2 0.1 1.26 100 400 8.1 2.0
0.5 311 3.0 1.0
1.2 258 3.7 1.4
3 0.1 1.26 300 1512 60.7 4.0
0.5 876 7.1 0.8
1.2 680 1.7 0.2
4 0.1 1.1 0 219 2.6 1.2
0.5 184 3.6 1.9
1.2 160 4.7 2.9
5 0.1 1 0 328 5.4 1.6
0.5 274 6.2 2.3
1.2 235 6.8 2.9
6 0.1 0.93 0 431 7.3 1.7
0.5 366 6.4 1.7
1.2 321 8.6 2.7
7 0.1 0.87 0 592 9.1 1.5
0.5 475 10.0 2.1
1.2 409 12.5 3.0
8 0.1 2.52 0 16.3 0.26 1.6
0.5 18.3 0.16 0.9
1.2 11.2 0.07 0.6
9 0.1 0.87 300 12560 935 7.4
0.5 4180 102 2.4
1.2 3213 38.0 1.2
10 0.1 2 0 32.3 0.24 0.7
0.5 28.1 0.13 0.5
1.2 24.5 0.07 0.3
11 0.1 2.52 100 29.8 0.33 1.1
0.5 39.2 0.27 0.7
1.2 25.2 0.14 0.6
The spring energy as a function of time is shown in Fig. 11 and Fig. 12 for groups 1 and 3 and groups 7 and 9,
respectively. It is clear that the piston mass does not influence the maximum spring energy.

-- 10 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
(1a) (1b)
Fig. 11 Spring energy as a function of time for simulation group 1 (1a) and for simulation group 3 (1b). The scaled
charge distance is 1.26 m/kg1/3 and piston plate area is increased 300% in group 3.
(1a) (1b)
Fig. 12 Spring energy as a function of time for simulation group 7 (1a) and for simulation group 9 (1b). The scaled
charge distance is 0.87 m/kg1/3 and piston plate area is increased 300% in group 3.
There is a way to normalise the particle velocity for different radius distances from charge by studying the flux, the
flow rate per unit area for an incompressible material. The flow rate per area shall remain the same for an
incompressible material. This means that the spreading sphere surface area times the particle velocity at that radius
shall remain equal. Following equation is used for normalising the particle velocities and piston velocity:
2 	2
1 1	4 	4	p 	i pi	r u 	r u	

		   =   	
(10)
Where	1r	 and	1	p	u	 are radius and particle velocity at target point 1, see Fig. 8.
This gives following normalized particle and piston velocities for one simulation in group 1 and group 3, see Fig. 13
and Fig. 14. The free field particle velocities compare well with solid lines before the time ground shock wave reach
the piston. Then it can be observed that the particle velocity and piston velocity increase about 70 percent when
studying the spherically normalized particle velocity, see left plot (1a) in Fig. 13. Comparing right plots (1b) in Fig. 13
and Fig. 14 shows that when the piston plate increases with 300% there is a significant increase in the normalized
particle velocities in the sand. This is a clear indication of vent leakage for a closed in explosion. In Fig. 14 (1b)
measurement point #6 is cut at 50 ms, due to that the TNT gas expansion has reach this measurement point which
gives high oscillations in measurement of particle velocity.

-- 11 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
(1a) (1b)
Fig. 13 Spherically normalised particle velocity and piston velocity as a function of time for simulation group 1
with stiffness 0.1 MN/m and piston mass 5.2 kg and free field dashed lines. First 5 ms (1a) and results until
piston reaches zero velocity (1b). The scaled charge distance is 1.26 m/kg1/3 and piston plate area is original.
(1a) (1b)
Fig. 14 Spherically normalised particle velocity and piston velocity as a function of time for simulation group 3
with stiffness 0.1 MN/m and piston mass 5.2 kg and free field dashed lines. First 10 ms (1a) and results
until piston reaches zero velocity (1b). The scaled charge distance is 1.26 m/kg1/3 and piston plate area is
increased 300% in group 3.
This gives following normalized particle and piston velocities for one simulation in group 7 and group 9, see Fig. 15
and Fig. 16. The free field particle velocities compare well with solid lines before the time ground shock wave reach
the piston. Then it can be observed that the particle velocity and piston velocity increase about 60 percent when
studying the spherically normalized particle velocity, see left plot (1a) in Fig. 15. Comparing right plots (1b) in Fig. 15
and Fig. 16. shows that when the piston plate increases with 300% there is a significant increase in the normalized
particle velocities in the sand. This is a clear indication of vent leakage for a closed in explosion. In Fig. 15 (1b)
measurement point #6 is cut at 40 ms, due to that the TNT gas expansion has reach this measurement point which
gives high oscillations in the particle velocity. In Fig. 16 (1b) measurement points #1-#6 are cut between 20-100 ms,
due to that the TNT gas expansion has reach this measurement point which gives high oscillations in the measurement
of particle velocity.

-- 12 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
(1a) (1b)
Fig. 15 Spherically normalised particle velocity and piston velocity as a function of time for simulation group 7
with stiffness 0.1 MN/m and piston mass 5.2 kg and free field dashed lines. First 10 ms (1a) and results
until piston reaches zero velocity (1b). The scaled charge distance is 0.87 m/kg1/3 and piston plate area is
original.
(1a) (1b)
Fig. 16 Spherically normalised particle velocity and piston velocity as a function of time for simulation group 9
with stiffness 0.1 MN/m and piston mass 5.2 kg and free field dashed lines. First 10 ms (1a) and results
until piston reaches zero velocity (1b). The scaled charge distance is 0.87 m/kg1/3 and piston plate area is
increased 300% in group 9.
By studying the TNT gas development for group 9 which has the largest leakage energy it can be observed that the
TNT gas sphere becomes highly un-symmetric after a while, Fig. 17. At 120 ms, see Fig. 17., right plot (1b), shows
that the gas bubble has reached the opening of the cylinder. This phenomenon, with energy valve leakage, is hard to
simulate with just added sand mass with and with a combination of long-term external pressure when using a 2-DOF
like model.

-- 13 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
(1a) (1b)
Fig. 17 TNT gas bubble in sand simulation group 9 with stiffness 0.1 MN/m and piston mass 5.2 kg. Material
location at 18 ms (1a) and and material localisation at 120 ms (1b). The scaled charge distance is 0.87
m/kg1/3 and piston plate area is increased 300% in group 9.
COMPARISON WITH 2DOF MODEL
A simplified 2DOF model is used to compare the results obtained in using Autodyn. In this comparison the external
work is assumed to be equal to the kinetic energy of the sand and piston shortly after the initial acceleration of the
piston. At this moment the particle velocity of the sand in front of the piston plate and the piston plate is about the
same. From this the external work of the system has been approximately determined as
( 	) 2
2
sand o
y k
m m v
W E + 
= =	
(11)
where msand and m are the mass of the sand cone (equation (5)) and the piston mass, and vo is the maximum initial
velocity of the piston. Hence, this approximation assumes that a plastic impact between the sand cone and the piston
plate has taken place and that no other external force is applied on the spring after that. If this is true, the external work
will be equal to the maximum spring energy; i.e. Wy = Wi. However, in Fig. 18 it is shown that this simple relation is
not correct. For some load cases the ratio Wi / Wy ≈ 1.0 but in several cases this ratio differs rather much. Hence, an
additional parameter, here denoted as Wleak, is introduced defined as
leak i y	W W W	= −	
(12)
This part thus corresponds to the extra external energy amount that has to be applied to the piston to get an energy
balance between internal work Wi (spring energy) and the external work (Wy + Wleak) and the ratio Wleak / Wy is
presented in Fig. 18.

-- 14 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
Fig. 18 Summary of energy ratios Wi / Wy and Wleak / Wy for the studied load cases.
In Table 3 it is shown that the influence of mass on the maximum spring energy is negligible. The same conclusion,
though, cannot be made based on Fig. 18; instead, there is a clear influence here that there is an influence of the piston
mass. Consequently, the simplified approximation made in equation (11) is not enough to represent what happens in
the Autodyn simulations. There is a need for an additional factor that influence the total external work applied on the
spring.
From Fig. 18 it can also be concluded that the energy ratio Wi / Wy ≈ 0.7 – 1.7 when r = 1.0 m and ΔA = 0 % (group 1,
4-7); i.e. a similar relation is obtained regardless of charge weight W. For a larger charge distance, r = 2.0 m (group 8,
10, 11) this ratio is lower, Wi / Wy ≈ 0.4 – 1.4, with most cases overestimating the value of Wy; i.e. Wleak < 0, meaning
that the sand mass msand used in equation (11) is too high. The largest deviations are obtained when ΔA = 300 %
(group 3, 9); especially when the spring stiffness is small (0,1 MN/m). This indicates that the additional external work
applied on the piston is related to both the plate area and the spring stiffness. Both these parameters can also be related
to an extra external force acting on the piston during the duration of the spring displacement.
CONCLUSIONS AND FUTURE WORK
2D Finite Element simulations have been carried out in Autodyn to study the structural response of a well-defined
structure; a suspended piston-spring system buried in sand subjected to ground shock from an explosive charge. The
parameters varied in the simulations were charge size, charge distance, reflection area of the piston, piston mass, and
spring stiffness; a total of 132 load cases were studied. Further attempts have been made to approximately describe
the structural response using a simplified 2DOF model; describing the sand and structure, respectively.
So far following main conclusions can be made. Firstly, when studying variation of coefficient for the maximum
spring energy, the results are independent of the mass. This means that spring energy increases only due to a weaker
spring stiffness and don’t vary with piston mass. Secondly, a weaker spring leads to larger particle velocity in the sand
near the piston when particle and piston velocity is flux normalised as for incompressible materials for different
spherical radius. This means that large piston area and weak spring performs like leakage valve for a closed in
explosion. Thus, the spring energy is increased if the spring is weak and piston area is large. Thirdly, the 2-DOF model
-1.0
-0.5
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
4.5
0 	12 	24 	36 	48 	60 	72 	84 	96 	108 	120 	132
Energy ratio (
W / Wy) [-]
Load case
Comparison of 2DOF and Autodyn
Wi / Wy
Wleak / Wy

-- 15 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
approach needs further development to explain the phenomena described in first and second conclusion. The kinetic
energy from added mass from sand hitting the piston with a certain initial velocity is not enough. Another, not so
appealing approach is to limit the usage of 2-DOF model when too weak structures are analysed.
Further studies will be made to examine if the simplified approach with 2-DOF or similar method can account for the
physics of the weak spring leakage phenomena which increases the maximum spring energy.
ACKNOWLEDGEMENTS
The authors acknowledge the support given by MSB and especially Lars Gråbergs. Additionally, members of the West
Coast Sweden Shock Wave Group (WCSSWG), and especially Dr. Joosef Leppänen, are highly acknowledged for
their input.
REFERENCES
[1] Laine, L., Johansson, M., and Larsen O.P. (2015): “Simulation of experiments which show that reflection
pressure time history from ground shock depends on the reflected structure’s stiffness and mass”, Proceedings
of the 86th Shock and Vibration Symposium, Orlando, FL, USA.
[2] Laine, L., Johansson, M., and Larsen O.P. (2016): “3D FE and 2DOF simulations of ground shock experiments
– Reflection pressure time history dependency due to the structure’s stiffness and mass”, Proceedings of the 87th
Shock and Vibration Symposium, New Orleans, LA, USA.
[3] Laine, L., Johansson, M., and Larsen O.P. (2017): “2D FE and 2DOF Simulations of Ground Shock Experiments
– Reflection Pressure Time History Dependency due to the Charge´s and Structure´s Properties”, Proceedings
of the 88th Shock and Vibration Symposium, Jacksonville, Florida, USA.
[4] Ekengren B. (2018): Skyddsrum, SR 15 (Civil Defence Shelters SR 15, in Swedish.), the Swedish Civil
Contingencies Agency (MSB), report no. MSB748, ISBN 978-91-7383-485-8, Karlstad, Sweden.
[5] Hultgren S. (1979): Explosion of buried model structures to buried TNT explosions in sand,
Fortfikationsförvaltningen Fortf, Report nr C 183, Eskilstuna, Sweden.
[6] Hultgren S. (1980): (Effect of underground explosions in the sand with deformable walls, in Swedish), Omgång
II, Fortfikationsförvaltningen Fortf, Rapport nr C 200, Eskilstuna, Sweden.
[7] Hultgren S. (1985): On the effects of buried explosions in sand, Fortfikationsförvaltningen Fortf, Report
nr C2:85, Eskilstuna, Sweden.
[8] Century Dynamics Inc. (2004): AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[9] Laine L. and Sandvik A. (2001): “Derivation of mechanical properties for sand”, 4th Asian-Pacific conference
on Shock and Impact Loads on Structures, CI-Premier PTE LTD, vol. 4, pp 353-360, Singapore.
[10] Heyerdahl H. and Madshus C. (2000): “EOS-data for sand, Tri-axial tests on sand from Sjöbo”, Norges
Geotekniske institutt, NGI rept. 20001157-1, Oslo, Norway.
[11] Laine L. and Larsen O.P. (2012): “Implementation of Equation of State for Dry Sand in Autodyn”, 83rd Shock
and Vibration Symposium, Shock and Vibration Exchange (SAVE), New Orleans, LA.
[12] Laine L. (2012): Markstötvåg (Ground Shock. In Swedish). MSB, Myndigheten för samhällsskydd och
beredskap. Publ.nr MSB344, Karlstad.
Weblink:https://www.msb.se/Upload/Insats_och_beredskap/Olycka_kris/Skyddsrum/Litteratur/L01.%20Refer
enslitteratur/L01-202_Markst%C3%B6tv%C3%A5g.pdf
[13] ConWep (1992): Collection of conventional weapons effects calculations based on TM 5-855-1, Fundamentals
of Protective Design for Conventional Weapons, U.S. Army Engineer Waterways Experiment Station, Vicksburg,
USA.

-- 16 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
APPENDIX I – CONDUCTED SIMULATION MATRIX
Buried Plate-Spring System 2D Autodyn Simulations 2018
Structure Charge and Distance Scaled charge distance Plate Area Increase
Sim
ID
Group m
[kg]
k0
[MN/m]
mTNT
[kg]
r
[m]
R
[m/kg1/3]
(A-A0)/A0*100
[%]
c001 1 5.2 0.1 0.5 1 1.26 0
c002 0.5
c003 1.2
c004 10.6 0.1
c005 0.5
c006 1.2
c007 24.7 0.1
c008 0.5
c009 1.2
c010 58.8 0.1
c011 0.5
c012 1.2
c013 2 5.2 0.1 0.5 1 1.26 100
c014 0.5
c015 1.2
c016 10.6 0.1
c017 0.5
c018 1.2
c019 24.7 0.1
c020 0.5
c021 1.2
c022 58.8 0.1
c023 0.5
c024 1.2
c025 3 5.2 0.1 0.5 1 1.26 300
c026 0.5
c027 1.2
c028 10.6 0.1
c029 0.5
c030 1.2
c031 24.7 0.1
c032 0.5
c033 1.2
c034 58.8 0.1
c035 0.5
c036 1.2
c037 4 5.2 0.1 0.75 1 1.10 0

-- 17 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
c038 0.5
c039 1.2
c040 10.6 0.1
c041 0.5
c042 1.2
c043 24.7 0.1
c044 0.5
c045 1.2
c046 58.8 0.1
c047 0.5
c048 1.2
c049 5 5.2 0.1 1 1 1 0
c050 0.5
c051 1.2
c052 10.6 0.1
c053 0.5
c054 1.2
c055 24.7 0.1
c056 0.5
c057 1.2
c058 58.8 0.1
c059 0.5
c060 1.2
c061 6 5.2 0.1 1.25 1 0.93 0
c062 0.5
c063 1.2
c064 10.6 0.1
c065 0.5
c066 1.2
c067 24.7 0.1
c068 0.5
c069 1.2
c070 58.8 0.1
c071 0.5
c072 1.2
c073 7 5.2 0.1 1.5 1 0.87 0
c074 0.5
c075 1.2
c076 10.6 0.1
c077 0.5
c078 1.2
c079 24.7 0.1
c080 0.5

-- 18 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
c081 1.2
c082 58.8 0.1
c083 0.5
c084 1.2
c085 8 5.2 0.1 0.5 2 2.52 0
c086 0.5
c087 1.2
c088 10.6 0.1
c089 0.5
c090 1.2
c091 24.7 0.1
c092 0.5
c093 1.2
c094 58.8 0.1
c095 0.5
c096 1.2
c097 9 5.2 0.1 1.5 1 0.87 300
c098 0.5
c099 1.2
c100 10.6 0.1
c101 0.5
c102 1.2
c103 24.7 0.1
c104 0.5
c105 1.2
c106 58.8 0.1
c107 0.5
c108 1.2
c109 10 5.2 0.1 1 2 2 0
c110 0.5
c111 1.2
c112 10.6 0.1
c113 0.5
c114 1.2
c115 24.7 0.1
c116 0.5
c117 1.2
c118 58.8 0.1
c119 0.5
c120 1.2
c121 11 5.2 0.1 0.5 2 2.52 100
c122 0.5
c123 1.2

-- 19 of 20 --

In Proceedings of the 89th Shock and Vibration Symposium, Shock and Vibration Exchange, www.savecenter.org,
Dallas, Texas, November 2018.
c124 10.6 0.1
c125 0.5
c126 1.2
c127 24.7 0.1
c128 0.5
c129 1.2
c130 58.8 0.1
c131 0.5
c132 1.2

-- 20 of 20 --