---
title: "Numerical Simulations Of Ground Shock Attenuation Layers For Shelters"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/numerical-simulations-of-ground-shock-attenuation-layers-for-shelters.pdf"
fileType: "PDF"
keywords: ["explosion","leca","shock","with","wave","pressure","layer","from"]
summary: "From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier PTE LTD, Singapore, November 2001, 353-360 pp. 1 of 8 NUMERICAL SIMULATIONS OF GROUND SHOCK ATTENUATION LAYERS FOR SWEDISH RESCUE CENTRES A..."
---

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 353-360 pp.
1 of 8
NUMERICAL SIMULATIONS OF GROUND SHOCK ATTENUATION
LAYERS FOR SWEDISH RESCUE CENTRES AND SHELTERS
Leo Laine, ANKER – ZEMER Engineering AS, Norway
Abstract
Light expanded clay shale aggregates (“LECA”) is a very promising material for
ground shock attenuation due to its low impedance. This has been verified both by
shock impedance matching technique and by numerical simulations with
AUTODYNTM [1].
To derive the mechanical properties of LECA, tri-axial compression tests with
isotropic consolidation were performed on cylindrical specimens to obtain the porous
equation of state (“EOS”). Additionally, tri-axial shear tests were performed at
different pressure levels to obtain the pressure hardening yield surface.
Keywords: Ground Shock, Dry Sand, Saturated Clay, Light Expanded Clay Shale Aggregates,
Mechanical Properties
1. Introduction
The Swedish Rescue Services Agency is the responsible authoritative for civil Rescue Centres
and Shelters (“RC/S”) in Sweden. Rescue Centres are built and planned for accommodation of the
civil defence command during preparedness and war. These buildings are constructed as one- or two
storey buildings, and often, one floor is below ground surface. The framework is made of reinforced
concrete.
Rescue Centres and shelters are not made ‘hit proof’ for cost reasons. They are just designed to
resist conventional weapon loads that detonate at a certain distance from the structure. Ground shock
is one of the possible loads that is of interest. To protect the structure, its components, and the
personnel of a RC/S against ground shock, a layer of a material with low impedance could be used.
This type of added protection should be considered when the RC/S is surrounded by a dense and
heavily saturated soil.
LECA have been recognised by many as a good attenuation layer [2] and a good material to
irreversibly absorb energy. However, the following questions must be answered: How good is it in this
application? How much will the maximum impulse and pressure decrease when a LECA layer in the
front of the basement wall is utilised? What thickness should the LECA layer have for optimal impulse
reduction? These questions will be treated in this paper.
2. Mechanical properties of LECA, Dry Sand, and Fully Saturated Clay
The Norwegian Geotechnical Institute (“NGI”) have performed tri-axial tests on Light Expanded
Clay Shale Aggregates 10-20 mm [3].

-- 1 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 353-360 pp.
2 of 8
The mechanical properties of LECA were derived from four tri-axial cylindrical tests [3], and tri-
axial shear tests up to 0.5 MPa [4]. The loading on the specimens were firstly isotropic consolidation
(P=σ1=σ2=σ3) with loading and unloading at different pressure levels. From these tests the porous
Equation Of State (“EOS”) and the mechanical unloading bulk modulus were derived. After the
isotropic consolidation, shear tests at different pressure levels, i.e. 2, 4, 10, and 40 [MPa] were
performed. The maximum pressure dependent yield surface was based on the data from these tests.
The derived mechanical properties found for LECA are valid to pressure up to approximately 80 MPa.
For higher pressures best fit lines were utilised to derive P(ρ),C(ρ), σy(P), and G(ρ). The Granular
material model, implemented into AUTODYNTM [1] was utilised for LECA and Dry Sand [5]. The
utilised mechanical properties for LECA are shown in Table 1.
Table 1. Mechanical properties utilised for LECA with ρ0=320.43 kg/m3, and ρs=2500 kg/m3
EOS, P(ρ) Bulk sound speed, C(ρ) Yield surface, σy(P) Shear Modulus, G(ρ)
ρ , [kg/m3] P, [MPa] ρ , [kg/m3] C, [m/s] P, [MPa] σy(P), [MPa] ρ , [kg/m3] G, [MPa]
320.43 0 322.60 351.7 0 0 322.60 27.40
368.98 0.952 330 823.9 20 26.247 330 153.82
726.08 4.847 400 893.1 40 52.495 400 219.09
1069.63 10.051 800 1288.6 60 78.742 800 912.17
1181.69 14.158 1200 1684.1 80 104.989 1200 2337.00
1300.00 22.659 1600 2079.6 100 131.237 1600 4751.36
1422.93 39.831 1950 2425.6 120 157.500 1950 7878.29
1700.00 145.960 2450 4000.0 200 157.500 2450 26917.89
2400.00 1801.771 2500 4057.1 2500 28257.00
2843.71 5657.290 2900 4057.1 2900 28257.00
The utilised mechanical properties for Dry Sand are shown in Table 2. In [5] the derivation of the
mechanical properties for the sand is presented.
Table 2. Mechanical properties utilised for Dry Sand with ρ0=1674 kg/m3, and ρs=2641 kg/m3
EOS, P(ρ) Bulk sound speed, C(ρ) Yield surface, σy(P) Shear Modulus, G(ρ)
ρ , [kg/m3] P, [MPa] ρ , [kg/m3] C, [m/s] P, [MPa] σy(P), [MPa] ρ , [kg/m3] G, [MPa]
1674.0 0 1674.0 265.2 0 0 1674.0 76.9
1739.5 4.577 1745.6 852.1 3.401 4.235 1745.6 869.4
1873.8 14.980 2086.3 1721.7 34.898 44.695 2086.3 4031.7
1997.0 29.151 2146.8 1875.5 101.324 124.035 2146.8 4906.9
2143.8 59.175 2300.0 2264.8 184.650 226.000 2300.0 7769.0
2250.0 98.098 2572.0 2956.1 500.000 226.000 2572.0 14800.9
2380.0 179.443 2598.0 3112.2 2598.0 16571
2485.0 289.443 2635.0 4600.0 2635.0 36718
2585.0 450.198 2641.0 4634.0 2641.0 37347
2671.3 650.660 2800.0 4634.0 2800.0 37347
Fully saturated clay with initial density of 1908 kg/m3 was modelled with Shock EOS [1]. A linear
relationship between shock velocity (“Us”) and particle velocity (“Up”) was defined with C1=1497 m/s
and S1=1.876. Shock Hugoniot Data [6] for water and water saturated Tuff were used to establish the
Us-Up relationship. The Von Mises yield surface was defined as a strength model with the yield
strength 0.5 MPa, and the shear modulus 1973.5 MPa.
A Hydro Tensile Failure Limit [1] with a small negative pressure value was defined for all
materials. The reheal option was utilised.
3. Shock Attenuation Layer for Added Protection for the RC/S Against Ground Shock Loads
When a shock wave with pressure, P1, and Particle velocity, Up1, is transmitted from the soil into a
material with lower impedance, e.g. LECA, the pressure, P2, will decrease and the particle velocity, Up2
will increase. This can be easily illustrated by a graphical solution, shown in Chapter 3.2. But the real
ground shock problem is much more complicated. Firstly the energy release from the detonation of
high explosive charge have to be accounted for, then the attenuation of the pressure wave in loose
soils is approximately proportional to the (radius)3. The soil ability to transmit the pressure wave is
highly proportional to the amount of water in the soil, i.e. how much of the air voids in the soil is filled
with water. Then the stress wave propagation from a detonated HE charge near the surface is not
easy to interpret, especially when an attenuation layer with lower impedance is utilised in front of the

-- 2 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 353-360 pp.
3 of 8
basement wall. In Figure 1 the stress waves are schematically illustrated. The Direct wave will be the
first to arrive at the Observation point from the Explosive source. With a buried charge a Relief wave
will be generated when the ground shock wave reaches the air, which has, very low impedance
compared with the soil. A possible third wave is a Reflected wave that can be generated when the
propagating wave is reflected against a deeper soil layer with higher impedance. All these waves build
up the observed Resultant wave.
Figure 1. Schematic illustration of how the Resultant wave is generated when a fully buried HE charge
near the surface is detonated.
When a layer with lower impedance is introduced in front of the basement floor the stress waves
get even more complicated, as indicated in Figure 2. In this case when the Direct wave reaches the
layer with lower impedance a Relief wave in the sand is generated. This relief wave disturbs the
pressure build up for the continuing process in the sand. This is a very positive effect that decreases
the total load of the ground shock. The transmitted wave now reflects between the concrete wall and
the soil, this effect is not desired, because the maximum impulse will increase. However, this is not a
major issue for LECA; the attenuation and energy absorption of shock waves is very good, but it is
important that the layer is designed with sufficient thickness and drainage to ensure a dry attenuation
layer of LECA with low density 250 – 350 kg/m3.
Figure 2. Schematic illustration of how the Direct wave generates a Relief wave in sand when it
reaches the low impedance layer, and how the transmitted wave in the LECA bounces between the
concrete wall and soil, both with higher impedance.

-- 3 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 353-360 pp.
4 of 8
The LECA layer will also have a positive effect when the crater is generated since the layer
deforms easily upwards and therefore will generate lower dead mass load on the structure. With the
hydro code AUTODYNTM all these effects can be accounted for, as done in Chapter 3.3.
3.1 Graphical Solution by Shock Impedance Matching Technique
A Graphical solution for the transmission of a shock wave from a material with high impedance
(e.g. soil) to a material with low impedance (e.g. LECA) can easily be done by a so called shock
impedance matching technique. This is thoroughly explained in [7].
To study the transmitted shock wave the conservation laws of mass, momentum and energy are
needed:
)	(	0 p	s	s U	U	U −	⋅	=	⋅	
ρ	
ρ , (1)
p	s U	U	P	P ⋅	⋅	=	− 0	0	
ρ , and (2)
)	(	)	( 0	0	2
1
0 V	V	P	P	E	E −	⋅	+	⋅	=	− . (3)
Equations (1)-(3) have five variables, pressure (P), particle velocity (Up), shock velocity (Us),
specific volume (V=1/ρ), and energy (E). Consequently one additional equation (EOS) is necessary to
close the equation system.
By using equation (1) and (2), the shock wave velocity, Us, and particle velocity, Up, can be
described as functions of pressure, P, and specific volume, V, i.e.
V	V
P	P
U s −
−
=	⋅
0
0	2	2
0	
ρ or V	V
P
V	U s −
=
0
0 when P0 = 0, and (4a,b)
)	(	)	( 0	0
2 V	V	P	P	U p −	⋅	−	= or )	( 0 V	V	P	U p −	⋅	= when P0 = 0. (5a,b)
In this case the plastic compaction curve from the EOS will be utilised for the Dry Sand and LECA,
see Table 1 and Table 2. The piecewise linear curves describe the pressure as a function of density
and will be equivalent to the Hugoniot line.
The utilised EOS for saturated clay is described as a linear function between shock wave velocity
and particle velocity, i.e.:
p	s U	S	C	U ⋅	+	= 1	1 . (6)
By inserting (6) into (2) the pressure can be calculated as a function of particle velocity:
p	p U	U	S	C	P ⋅	⋅	+	⋅	= )	( 1	1	0	
ρ when P0 = 0. (7)
The density can be calculated as function of particle velocity when (6) is inserted into (1):
p	p
p
U	U	S	C
U	S	C
−	⋅	+
⋅	+	⋅
= )	(
)	(
1	1
1	1	0	
ρ
ρ . (8)
Now the relationships for pressure as a function of density, shock wave velocity as a function of
particle velocity, and finally the pressure as a function of particle velocity can be plotted for Dry Sand,
LECA, and Saturated Clay, seen in Figure 3 and Figure 4.

-- 4 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 353-360 pp.
5 of 8
Figure 3a. Pressure as a function of density for
Dry Sand and LECA.
Figure 4a. Pressure as a function of density for
Saturated Clay and LECA.
Figure 3b. Shock wave velocity as a function of
particle velocity for Dry Sand and LECA.
Figure 4b. Shock wave velocity as a function of
particle velocity for Saturated Clay and LECA.
Figure 3c. Pressure as a function of particle
velocity for Dry Sand and LECA.
Figure 4c. Pressure as a function of particle
velocity for Saturated Clay and LECA.
Now the P-Up curves can be used to predict the maximum pressure and particle velocity of the
transmitted shock wave. This is done by assuming a (P, Up) pair for the soil and then make a mirror of
the P-Up curve for the soil and the intersection point with the LECA curve gives the actual pressure
and particle velocity in LECA. This have been done for particle velocities Up = 0.25, 0.5, 1, 2, 4, 8, 16,
32, 64, and 128 m/s for both Dry Sand and Saturated Clay, see Figure 3c and 4c. The results are also
shown in Table 3 and 4.
According to the graphical solution the maximum pressure decreases in average 80 percent when
the shock wave is transmitted from Dry Sand to LECA for particle velocities of 0.25 m/s to 128 m/s.
For Saturated Clay the average decrease is estimated to be 96 percent! The decreases are very
important because this will directly lead to lower impulses. But how thick should the attenuation layer
be for optimal decrease in impulse? This will be discussed in Chapter 3.2

-- 5 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 353-360 pp.
6 of 8
Table 3. Graphical solution for transmitted
shock wave from Dry Sand to LECA.
Table 4. Graphical solution for transmitted
shock wave from Saturated Clay to LECA.
Up, sand
[m/s]
Psand
[MPa]
Up, LECA
[m/s]
PLECA
[MPa]
Decr.
P, [%]
Incr.
Up, [%]
Up, Clay
[m/s]
PClay
[MPa]
Up, LECA
[m/s]
PLECA
[MPa]
Decr.
P, [%]
Incr.
Up, [%]
0.25 0.10 0.45 0.02 79.22 79.20 0.25 0.71 0.49 0.03 96.40 96.40
0.50 0.21 0.90 0.04 79.23 79.20 0.50 1.43 0.98 0.05 96.60 96.60
1.00 0.42 1.79 0.09 79.47 79.40 1.00 2.86 1.97 0.09 96.70 96.70
2.00 0.84 3.59 0.17 79.43 79.30 2.00 5.73 3.93 0.19 96.71 96.70
4.00 1.69 7.17 0.35 79.57 79.30 4.00 11.48 7.87 0.38 96.72 96.70
8.00 3.44 14.35 0.69 79.92 79.35 8.00 23.08 15.73 0.76 96.71 96.68
16.00 7.16 26.61 1.43 80.07 66.34 16.00 46.62 31.45 1.57 96.63 96.56
32.00 15.61 57.07 2.97 81.00 78.34 32.00 95.07 62.85 3.29 96.54 96.41
64.00 37.61 113.24 6.56 82.55 76.93 64.00 197.50 125.32 7.68 96.11 95.81
128.00 105.03 216.75 19.96 80.99 69.34 128.00 424.20 247.20 25.41 94.01 93.13
3.2 Numerical Simulations with AUTODYNTM
Numerical simulations are useful when the whole ground shock phenomena is accounted for. The
purpose with the simulations was to find an optimal thickness of the shock attenuation layer when the
decrease in maximum impulse and pressure were considered.
The studied High Explosive charge was a fully buried cylindrical TNT charge with height 1.1 m and
radius 0.149 m, and the centre of gravity at 1.5 m below ground surface. The charge weight was 125
kg TNT. The Jones Wilkins Lee EOS [1] was utilised to simulate the energy release from the
detonation, and the stand off distance to RC/S was set to 5 metres.
To account for the large mass transport, the multi material EULER processor [1] was utilised to
solve the basic continuum differential equations. A two-dimensional axi-symmetrical model with a
rectilinear mesh and a cell size of 25 mm was utilised in the area 4 m times 5 metres, outside the
mesh was gradually coarsened. The air was modelled as void cells, the RC/S was modelled as a fully
reflected wall, an outflow boundary [1] was defined in the top in the air, and finally a transmit boundary
[1] was defined at the bottom in the soil. In Figure 5 the material locations and boundaries are shown.
Figure 5. Material locations and boundaries of the 2D axi-symmetrical model. The stand off distance
from the charge to the wall is 5 m, the charge centre of gravity was set to 1.5 [m] below ground
surface.
LECA layers with thickness: 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, and 2.0 were studied together
with both soil types: Saturated Clay and Dry Sand. The results from one target point in front of the rigid
wall was studied, with a depth of burial 1.5 m and a stand off distance to target 5 m. The decrease in
reflected maximum pressure and maximum impulse at the rigid wall are shown in Figure 6 and
Figure 7.

-- 6 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 353-360 pp.
7 of 8
Figure 6. Decrease in maximum pressure when
different thickness of LECA layer is used.
Figure 7. Decrease in maximum impulse when
different thickness of LECA layer is used.
Figure 6 shows significant reduction of the maximum reflected pressure even for thin LECA layers
for both soil types, but the main focus should be on the reduction of the impulse. This would need a
certain thickness for optimal reduction. Figure 7 shows that the thickness of the attenuation layer
should be at least 1 m to achieve 45 percent reduction in maximum impulse when Saturated Clay is
considered. For Dry Sand it should be at least 1.25 m to achieve 30 percent reduction in maximum
impulse.
Figure 8 shows the shock wave in Dry Sand when it has propagated to the LECA layer. Notice the
relief waves generated both from surface and from the LECA layer.
Figure 8. Pressure plot of the shock wave propagation in Dry Sand at 7.8 ms. Thickness of LECA
layer was 1.5 m
In Figure 9 the crater size is shown at 97 milliseconds for the Dry Sand simulation with a LECA
layer thickness of 1.5 m. The crater depth and radius were 3.5 m and 2.9 m respectively. Notice also
the deformed LECA layer.

-- 7 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 353-360 pp.
8 of 8
Figure 9. Material location for Dry Sand at 97 ms. The thickness of the LECA layer was 1.5 m.
4. What if the charge detonates inside the LECA layer?
If the charge detonates inside the LECA layer will this be worse than the normal soil backfill
material? This part has not been studied here, but small scale cylindrical confinement experiments
with the purpose to study different materials and their ability to absorb the energy from a detonation
concluded that LECA absorbs more energy than e.g. sand [8].
5. Conclusions
The graphical solutions and numerical simulations show that LECA is a good attenuation layer to
reduce the maximum pressure and maximum impulse; most useful it seems to be for Saturated Clay.
The thickness of the attenuation layer should be at least 1 m when the RC/S is surrounded with
Heavily Saturated Clay to achieve approximately 45 percent decrease in impulse for the studied load
case. A thickness above 1.25 m of the attenuation layer should be used for optimal decrease in
impulse when Dry Sand is considered. The different thickness for the two soil types is certainly related
to the actual wavelength of the shock wave, this will be further studied.
6. References
[1] AUTODYN, Theory Manual, Revision 4.0, Century Dynamics Inc., 1998.
[2] Madshus C., “Properties of LECA as a Backpack Material”, Workshop, Explosion effects in
granular materials, Norwegian Defence Construction Service, report 238/96, 1996, pp 169-174
[3] Heyerdahl H., EOS-data for LECA, Triaxial tests on LECA under high pressures, Norwegian
Geotechnical Institute, NGI, 2001157-2, August 2001
[4] Hermann S., Vik G., Shear Strength properties for LECA, Norwegian Geotechnical Institute,
NGI, 900025-1, 1990
[5] Laine L., Sandvik A. ”Derivation of mechanical properties for sand”, 4th Asian-Pacific conference
on Shock and Impact Loads on Structures, CI-Premier PTE LTD, Singapore, November 2001
[6] Marsh S. P., LASL shock Hugoniot data, University of California Press, 1980
[7] Meyers, M., A., Dynamic Behaviour of Materials, John Wiley & Sons, Inc., 1994
[8] Omang M. G., “Small Scale Tests in a Cylindrical Confinement – A Pilot Project”, Workshop,
Explosion effects in granular materials, Norwegian Defence Construction Service, report
238/96, 1996, pp 265-274

-- 8 of 8 --