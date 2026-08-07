---
title: "Derivation Of Mechanical Properties For Sand"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/derivation-of-mechanical-properties-for-sand.pdf"
fileType: "PDF"
keywords: ["wave","shock","pressure","shear","sand","from","were","figure"]
summary: "From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier PTE LTD, Singapore, November 2001, 361-368 pp. DERIVATION OF MECHANICAL PROPERTIES FOR SAND Leo Laine, ANKER – ZEMER Engineering AS, Norway..."
---

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 361-368 pp.
DERIVATION OF MECHANICAL PROPERTIES FOR SAND
Leo Laine, ANKER – ZEMER Engineering AS, Norway
Andreas Sandvik, ANKER – ZEMER Engineering AS, Norway
Abstract
Mechanical properties for granular materials, such as sand, are important for
accurate predictions of ground shock wave propagation and attenuation by use of an
explicit solver. In the utilised material model the density dependence of both the
longitudinal and shear (transversal) wave velocities, for a granular material, are
accounted for.
Tri-axial compression tests with isotropic consolidation were performed on
cylindrical specimens to obtain the porous equation of state (“EOS”). The longitudinal
and shear wave velocities were measured at different pressure levels. As a result,
the elastic loading and unloading bulk sound speed and shear modulus were derived.
Additionally, tri-axial shear tests were performed at different pressure levels to obtain
the pressure hardening yield surface.
Keywords: sand, equation of state, mechanical properties, shock waves, ground shock
1. Introduction
The Swedish Rescue Agency is the responsible authoritative for civil Rescue Centres and
Shelters in Sweden. Rescue Centres are built and planned for accommodation of the civil defence
command during preparedness and war. These buildings are constructed as one- or two storey
buildings, and often, one floor is below ground surface. The framework is made of reinforced concrete.
Rescue Centres and shelters are not made ‘hit proof’ for cost reasons. They are just designed to
resist conventional weapon loads that detonate at a certain distance from the structure. Air blast,
debris, and ground shock are the typical weapon loads that are generated. Such loads can be
calculated and taken into account in a hydrocode like AUTODYNTM [1].
Knowledge of the mechanical properties of the concerned soils on a macro level is significant for
accurate prediction of ground shock propagation and attenuation. The saturation of soil is a very
important factor for the transmission of the compressional wave in addition to the density and pressure
dependence for the mechanical properties. In this article, mechanical properties for sand, from the
village Sjöbo located in the southern part of Sweden, is described.
2. Tri-axial tests
The Norwegian Geotechnical Institute (“NGI”) have both characterised the soil and performed tri-
axial tests on the sand from Sjöbo [2]. The staff involved in the testing at NGI were Christian Madshus,
Håkon Heyerdahl, and Toralv Berre.

-- 1 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 361-368 pp.
2.1 Characterisation of soil
The grain size distribution in the sand was medium to coarse, with grain size number C60/C10
approximately equal to 2 (two). The content of organic compounds was less than one percent. The in
situ dry density was approximately 1574 [kg/m3]; the average water content was approximately 6.57
percent. Finally, the average specific weight of the grains was 2641 [kg/m3].
2.2 Experimental set up
In the seven tests performed, two types of tri-axial cell devices were used. Firstly, the “NGI
standard Cell device” [2] was used for tests up to 2 [MPa] in confinement stress, and secondly for
tests above this confinement stress a rock triaxial cell device was utilised.
A cylindrical soil specimen with h=90 [mm] and d=38 [mm] in the rock tri-axial cell was enclosed in
a rubber membrane inside the cell. By using a fluid in the chamber, the confining stress (pressure)
equal to σ3 (=σ2) was applied. The axial stress σ1 was applied by a steel piston, which was employed
by hydraulic pumps and a step motor.
The loading on the specimen was firstly isotropic consolidation (P=σ1=σ2=σ3) with loading and
unloading to different pressure levels, see Figure 1. Radial meter gauges were used to measure radial
strain.
Figure 1: Test 847, maximum isotropic consolidation pressure pmax = 60 [MPa].
From this part of the test, the EOS and the mechanical unloading bulk modulus, Ku, at different
pressures levels can be derived.
After the isotropic consolidation, a shear test at different pressure levels, i.e. 2, 20, and 60 [MPa]
were performed, see Figure 2. The radial stresses were kept constant (i.e. σ2 = σ3 = constant) while
the axial stress was increased. Consequently, the maximum yield surface was established from the
tests.
The “plastic yielding” that the Tri-axial shear tests showed see Figure 2, is mainly a structural
collapse of a sand cylinder with size H=2*D and can therefore be neglected in simulations of stress
wave propagation as long as only moderate amount of sand grains are crushed, or phase transitions
have not occurred.

-- 2 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 361-368 pp.
Figure 2: Tri-axial shear with three different constant radial stresses = 2, 20, and 60 [MPa]
(Test 6, 845, and 847).
In the tests, were the rock tri-axial cell was employed, measurements of both the longitudinal
wave (“VL”) and the shear wave (“Vs”) where performed at different pressure levels. This was done
both for the isotropic consolidation part and the shear part by using P- (i.e. longitudinal) and S- (i.e.
transversal) wave transducers placed in the sockets on top and bottom of the samples. For tri-axial
tests on soil, the standard method for volumetric strain determination is based on measuring the
change in pore water volume. This was avoided since the measurement of VL in water saturated soils
are strongly influenced by the phase of the soil / water / gas matrix.
In Figure 3, results of VL and VS wave measurements are shown for test 847 and 848 during the
isotropic consolidation. The measurements were made at the pressures 5, 10, 15, 30, 45 and 60
[MPa].
Figure 3: Measured Longitudinal and shear wave velocities at different pressures, 5, 10, 15, 30, 45, and 60 [MPa]
(Test 847, 848).
In the NGI's standard tri-axial cell tests, Bender Elements [2] were used to measure the shear
wave velocities. Consequently, accurate measurements were enabled from low pressures up to 2
[MPa].

-- 3 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 361-368 pp.
3. Mechanical properties
The mechanical properties derived in this article were based on the Granular material model,
implemented into AUTODYNTM [1]. This material model was developed to describe the compaction
and the compaction wave of a porous material, [3].
3.1 Equation of state - Compaction
The EOS Compaction is described by a plastic compaction curve, which is given as a piecewise
linear curve with ten points, namely density as a function of pressure, Pi(ρi), as seen in Figure 4. The
solid "asymptote" to this curve is linear:
0	)	( =	= TMD	P	
ρ
	ρ and (1)
)	(2
TMD	s	c	P	
ρ
	ρ −	⋅	= with TMD	
ρ
	ρ ≥ , (2)
where
TMD	
ρ : Theoretical Maximum Density (no porosity left), and
cs : bulk sound speed of fully compacted material.
The elastic loading / unloading compaction curve is given by the density dependent bulk sound
speed, c(ρ):
ρ
	ρ ⋅	= )	(2
c	P . (3)
Figure 4: Input data for EOS Compaction of Sjöbo sand
The plastic compaction curve for pressures above 60 [MPa] was predicted by using a polynomial
best fit of fifth order. The Theoretical Maximum Density was set equal to the average specific weight of
the grains in the sand, 2641 [kg/m3].
The mineral content in the sand is similar what would be found in granite, thus the bulk sound
speed of fully compacted material was derived from Shock Hugoniot Data for Westerly Granite [4].
The cs=4636 [m/s] value was given by the two states (ρ0=2627 [kg/m3], P0=0) and (ρ1=3530 [kg/m3],
P1=19.394 [GPa]).
From the longitudinal and shear wave velocity measurements the bulk sound speed, c, can be
obtained from the following relationship in an isotropic, homogeneous media:

-- 4 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 361-368 pp.
2
3
4	2
S	L V	V	c ⋅	−	= , (4)
where
c : Bulk sound speed,
VL : Longitudinal wave, and
VS : Shear wave.
The longitudinal and shear wave velocities above the density 2150 [kg/m3] were predicted by
using linear approximation.
The density dependent bulk sound speed, c(ρ), was given as a piecewise linear curve of ten pairs,
Figure 5.
Figure 5: Input data for the density dependent bulk sound speed, c(ρ) of Sjöbo sand
3.2 Strength Model – Granular
The yield surface in the Granular strength model is both density and pressure dependent, but
here the only the pressure dependent part was utilised for description of the sand, i.e.:
)	(	)	(	)	,	( 2	1 P	f	f	P	Y +	=
	ρ
	ρ , where 0	)	(	1 =
	ρ	f . (5)
In Figure 6 the utilised yield surface is shown as a function of pressure. The maximum stress
difference from the tri-axial shear tests were utilised for determination of the maximum yield surface.
For pressures above 102 [MPa], a linear approximation was utilised up to a maximum cut off value,
which was set equal to the unconfined strength for Peaks Pike Granite [5].

-- 5 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 361-368 pp.
Figure 6: Input data for the pressure dependent yield surface, Y=f2(P) for Sjöbo sand.
The yielding in the Granular strength model is of Prandtl-Reuss type, and the shear modulus,
G(ρ), is defined to be density dependent. By use of the measured values of the shear wave velocities,
the shear modulus was calculated from
2
)	( s	V	G ⋅	=
ρ
	ρ . (6)
Input data for the density dependent shear modulus, G(ρ), is shown in Figure 7.
Figure 7: Input data pressure dependent Shear Modulus, G(ρ), utilised for Sjöbo Sand.
3.3 Failure model –Hydro tensile limit
The failure model utilised for Sjöbo sand is the Hydro Tensile Limit, where a minimum pressure
value, Pmin=-1e-3 [Pa], was defined as failure criteria. This means when Pmin is reached, the cell is not
allowed to obtain shear stresses. The reheal option was also utilised, which allows the cell to reheal
when the failed cell have positive pressure.

-- 6 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 361-368 pp.
4. Numerical simulations of the shock wave in uniaxial strain state
If the shear strength is ignored in the considered material, the Rankine-Hugoniot relationships (i.e.
conservation of mass, momentum, and energy) can be used to calculate the shock parameters for a
material were a pressure, density, and energy discontinuity propagates, [6]:
)	(	0 p	s	s U	U	U −	⋅	=	⋅
	ρ
	ρ (7)
p	s U	U	P	P ⋅	⋅	=	− 0	0	
ρ (8)
)	(	)	( 0	0	2
1
0 V	V	P	P	E	E −	⋅	+	⋅	=	− (9)
Equations (7)-(9) have five variables, pressure (P), particle velocity (Up), shock velocity (Us),
specific volume (V=1/ρ), and energy (E). Consequently an additional equation is necessary to close
the equation system. In this case the plastic compaction curve from the EOS will be utilised for the
porous sand as seen in Chapter 3.1. This curve describes the pressure as a function of density and
will be equivalent to the Hugoniot line.
By using equation (7) and (8), the shock wave velocity, Us, and particle velocity, Up, can be
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
P	P
V	U s −
−
=
0
0
0 , and (10a,b)
)	(	)	( 0	0
2 V	V	P	P	U p −	⋅	−	= or )	(	)	( 0	0 V	V	P	P	U p −	⋅	−	= . (11a,b)
The shock wave will not follow the plastic compaction curve, i.e. the Hugoniot line, it will jump
between the two states (P0, V0) and (Pi, Vi) on the plastic compaction curve by a straight line called the
Rayleigh line. The slope of the Rayleigh line is proportional to the square of the shock wave velocity,
Us, as shown in equation (10a).
In Table 1, the shock wave variables, Us and Up have been calculated for the ten pairs , (Pi, Vi),
which define the plastic compaction curve for the porous sand. The pressure P0 equal to zero was
used as initial state for every pressure discontinuity pair set, and the specific volume, V0, was the
inverse of the initial density, ρ0 = 1674 [kg/m3].
Table 1: Calculated particle velocity, Up, and
shock wave velocity, Us by eq. (10b) and (11b).
Table 2: AUTODYN-2D Results of shock wave
variables ρi, Pi, and Us when Up is applied.
ρi
[kg/m^3]
Pi
[MPa]
Up
[m/s]
Us
[m/s]
Up
[m/s]
ρi,
[kg/m^3]
Pi
[MPa]
∼UsX
[m/s]
1674 0.00 0.00 265.20 - - - -
1739.5 4.577 10.15 269.47 10.1466 1739 4.57 270
1873.8 14.98 30.89 289.70 30.8897 1874 15.0 290
1997 29.15 53.07 328.12 53.0715 1997 29.1 328
2143.8 59.18 88.01 401.63 88.0148 2144 59.2 402
2250 98.10 122.48 478.45 122.482 2250 98.1 479
2380 179.4 178.32 601.13 178.3197 2381 179.3 601
2485 289.4 237.55 727.87 237.5478 2487 288.9 727
2585 450.2 307.86 873.56 307.8598 2590 448.0 869
2671.3 650.7 380.94 1020.35 380.935 2671 650.4 1019
XThe approximate shock wave velocity is based on
arrival time, ta, and the distance to studied target.
To simulate the plastic shock wave propagation in AUTODYN-2D with the Lagrange processor,
the calculated particle velocities, Up were utilised as boundary conditions on pipes with a length of 1
[m] filled with sand. 2000 cells were used in the wave direction. Convenient boundary conditions were
applied so that uniaxial strain condition was achieved for the pipes.

-- 7 of 8 --

From the Proceedings of the 4th Asia-Pacific Conference on Shock and Impact Loads on Structures, CI-Premier
PTE LTD, Singapore, November 2001, 361-368 pp.
In Table 2 the AUTODYN-2D results for the shock wave variables are shown for different particle
velocities, Up. By comparing the shock wave variables in Table 1 and Table 2, it is seen that there is
an excellent agreement between the results.
In Figure 8 and Figure 9 the pressure wave propagation is shown for the four first particle velocities.
#14
#10
#6
#2
Figure 8: Pressure wave propagation at time 2.5 [ms]
when Up= 10.15, 30.89, 53.07, and 88.01 [m/s]
Figure 9: Pressure time histories at 0.5 [m] when Up=
10.15 (#2), 30.89 (#6), 53.07 (#10), and 88.01 (#14)
[m/s].
The elastic unloading wave in the AUTODYN analysis is based on the actual bulk sound speed
Ci(ρi), and the shear modulus Gi(ρi). The elastic unloading wave velocity travels faster than the plastic
compaction wave or shock wave, which leads to fast attenuation, and energy absorption, of the
propagating wave in the not fully compacted material.
5. Conclusions
In this article we have shown a methodology that can be used to derive mechanical properties of
sand for ground shock analysis.
Measurement of the shear wave velocity, Vs, showed both density and pressure dependence. The
density dependence of the bulk sound speed, Ci(ρi), and the shear modulus, Gi(ρi) is accounted for in
the utilised material model, but the pressure dependence for Ci and Gi will be further investigated by
experiments.
In the future work it is planned to verify the polynomial plastic compaction curve (EOS) for high
pressures. Consequently, the isotropic consolidation phase will be performed to higher static
pressures in future experiments. Additionally, inverse flyer plates tests will be considered to verify the
Shock Hugoniot Curve for pressures close to the solid asymptote [7].
6. References
[1] AUTODYN, Theory Manual, Revision 4.0, Century Dynamics Inc., 1998.
[2] Heyerdahl H., Madshus C., EOS-data for sand, Triaxial tests on sand from Sjöbo, Norwegian
Geotechnical Institute, NGI, 20001157-1, 2000
[3] Moxnes J. F., Ødegårdstuen G., Atwood A., Curran P., “Mechanical properties of a porous
material studied in a high speed piston driven compaction experiment”, 30th ICT, 1999
[4] Marsh S. P., LASL shock Hugoniot data, University of California Press, 1980
[5] Goodman R. E., Introduction to Rock Mechanics, 2. Ed., New York, Wiley, 1989
[6] Meyers, M., A., Dynamic Behaviour of Materials, John Wiley & Sons, Inc., 1994
[7] Riedel, W., Beton unter dynamischen Lasten Meso- und makromechanische Modelle und ihre
Parameter, EMI-Bericht 6/00, Fraunhofer, Institut Kurzzeitdynamik, Ernst-Mach-Institut, 2000.

-- 8 of 8 --