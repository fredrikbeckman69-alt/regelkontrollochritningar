---
title: "Implementation Of Equation Of State For Dry Sand In Autodyn"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/implementation-of-equation-of-state-for-dry-sand-in-autodyn.pdf"
fileType: "PDF"
keywords: ["skyddsrum","explosion","unloading","shock","pressure","with","wave","from"]
summary: "From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange, www. savecenter.org, New Orleans, Louisiana, 2012. Implementation of Equation of State for Dry Sand in Autodyn Leo Lainea* and Ola Pramm Larsenb aLL Engineer..."
---

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
Implementation of Equation of State for Dry Sand in Autodyn
Leo Lainea* and Ola Pramm Larsenb
aLL Engineering
Stugvägen 4, SE-438 94 HÄRRYDA, Sweden
*Corresponding author: leo.laine@telia.com
bCAEwiz Consulting
Hofftunet 10, NO-0379 OSLO, Norway
caewiz.consulting@gmail.com
This paper shows how an Equation of State (EOS) designed for porous soils was
implemented in Autodyn. The major benefit compared with earlier implementations is
that the unloading wave speed can easily be made both density and pressure dependent.
The modification results in a more accurate way to calculate the shock wave propagation
and attenuation in dry sand compared to the Compaction EOS found in the standard
library. Previously, only an elastic unloading was available in the Compaction EOS in
Autodyn by specifying the elastic bulk sound speed as a function of density. Currently, a
nonlinear modification is available which relates the slope to a user defined bulk module
as a function of density. However, neither of these options captures properly the
nonlinear behaviour seen in tri-axial test data during unloading and how the unloading
curve shape varies with both density and pressure. Nor is attenuation of the shock wave
large enough for scaled distances above 1 m/kg1/3. The implementation presented here
uses two main equations to define the unloading wave speed in the whole density and
pressure space. The input data of the model has been made flexible which allows fitting
to tri-axial soil stress tests. Simulation results show that ground shock peak pressure
reduces with 34, 65, and 74 % for scaled distances 2, 5, and 8 m/kg1/3, respectively, when
the new EOS is compared with original Compaction EOS in Autodyn.
INTRODUCTION
The Swedish Civil Contingencies Agency (MSB) is responsible for the building regulations of the Swedish civil
defence shelters. There are specific rules for how the defence shelters are planned, built, equipped and maintained
[1]. One of many regulations state what load level the shelters should be able to withstand: “The effect of a pressure
wave corresponding to that produced by a 250 kg GP-bomb with 50 weight per cent TNT which burst freely outside
at a distance of 5.0 meters from the outside of the shelter during free pressure release”. However, many of the
shelters are designed as basements below ground surface. Therefore, more knowledge on how the ground shock
propagates and attenuates during the scaled distances of 0.1 to 10 kg/m3 and affects buried shelters, is needed.
During the Second World War extensive experiment series and research were conducted on ground shock generated
by high explosives [2]. This early work functions as a foundation for understanding the behaviour of how the shock
waves propagates and attenuates in earth media. In [2], Lampson states that the pressure in the soil from the
detonation of an explosive charge is propagated by a plastic wave which is characterized by a continuous change of
shape and of duration with distance from the charge, see Fig. 1 for illustration. Close to the source the shape will be
sharp and after a distance it will start to attenuate and the wave will change shape.

-- 1 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
Fig. 1. Illustration of how the ground shock wave change shape during propagation in a compactable soil.
As already stated in [2] by Lampson, the reason for the continuous change of shape is the pressure density
relationship which is common for compactable soils, see Fig. 2. The left illustration in Fig. 2 shows the loading
along the plastic compaction curve, 1 to 2, and the unloading path, 2 to 3, for a generic compactable soil. The
unloading path can also be named elastic because during a second loading phase it will almost follow the same path
until it reaches the plastic compaction curve. The travelling between points 1, 2, and 3 also defines the loading and
unloading wave speed at a certain pressure and density, see right illustration in Fig. 2. The relationship between
pressure, density and wave speed c is simply seen as
𝑐2 = 𝑑𝑃(𝜌)
𝑑𝜌 (1)
The right illustration Fig. 2 shows that the unloading wave speed is higher than the loading wave speed when above
a certain pressure level. This means that the high pressure shape will attenuate fast by the unloading. For lower
pressures the unloading speed can be slower which would result in that the wave shape starts to have a long
unloading tail.
Fig. 2. Illustration of a compactable soil and how the pressure density curve relates to wave speeds as a function of
pressure. Solid and dashed lines represent loading and unloading, respectively.
A simple way of modelling compaction materials is to define the plastic compaction curve as a pressure function of
density P(
) and the unloading wave speed as a function of density c(
), see Fig. 3 for illustration. The unloading is
then represented by the straight lines on top of the dashed unloading curves, in Fig. 3. The solid straight line with
TMD means Theoretical Maximum Density. Earlier work by Laine et al. on deriving mechanical properties for dry
sand from tri-axial experiments, [3] and [4], have been widely used for shock simulation involving dry sand within

-- 2 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
the AUTODYN community [5] with quite descent results e.g. for determining the blast load from buried mines, see
e.g. [6] and [7]. Here the linear approximation of the unloading curves does not influence the results except for
determining the level of shock wave energy absorbed by the dry sand. It is correctly stated in [8] that the material
data provided for dry sand in [3] does not include an easy change on how moisture affects the input parameters of
the compaction EOS. The original compaction model [9] would need a totally new set of input when the soil type
changes in water contents, porosity, and soil skeleton. In [11] a total of 16 generic soil types were generated from
dry sand to fully saturated clay. However, the main deficiency of the original model [10] and the given data for dry
sand [3] for the compaction EOS is that the unloading phase is too simplified to properly model the shock wave
propagation and the change in shape of the pressure wave as stated in [1]. One way to solve this is to model the soil
as a three phase medium shown in [11] which is a quite interesting approach. However, in this paper a different
approach is introduced. The same experimental data for dry sand as shown in [3] and [4] are re-visited to derive how
the unloading wave speed can be defined as a function of both density and pressure; i.e. c(
,P) for the dry sand.
Fig. 3. Illustration of an EOS compaction, where the solid line between (
0, P0 = 0) and (
n, Pn) shows a plastic
compaction curve, dashed lines illustrate nonlinear unloading and the straight lines on top of the dashed lines show
linear approximation with elastic unloading wave c(
). The point (
n, Pn) defines when the material is seen as fully
compacted and has a linear elastic wave speed of cTMD.
In [12] the authors did an initial study of what the solution of unloading wave c(
,P) for the dry sand would look
like by using Non-Linear Programming (NLP) for numerically approximating each unloading curve. This allowed
the experimental data from [3] and [4] to be extrapolated for the whole density pressure domain of interest, see Fig.
4.

-- 3 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
Fig. 4. Non-Uniform-Rational-B-Spline (NURBS) surface of the derived unloading wave speed c(
,P) from dry
Sjöbo sand, Sweden. Red curves represent experimentally fitted unloading data, while the magenta curves are
extrapolated curves from the NLP solution, from [13].
This paper shows how the modified Compaction Equation of State (EOS) implemented in Autodyn can be defined
by two main equations describe the unloading wave for the whole domain of interest. The implemented EOS
captures the dashed unloading curves, as illustrated in Fig. 3 for the whole density and pressure domain as well as
the transition into fully compacted material. The fully compacted state is reached at (
n, Pn). At this point the
material is seen as linear material with Theoretical Maximum Density (TMD)
TMD at zero pressure, see Fig. 3.
The paper is organized as follows: The section MODIFICATION OF UNLOADING CURVE IN EOS, will focus on
the equations needed to define the c(
,P). In section DERIVED INPUT DATA FOR DRY SAND it is shown how
the equation parameters were set. In the section COMPARISON OF SIMULATION RESULTS the implemented
EOS in Autodyn is compared with original Compaction EOS [9] with data according to [3]. The results are also
compared with Conwep [13]. Finally the section CONCLUSIONS AND FUTURE WORK concludes the
implemented EOS and provides suggestions for future work.
MODIFICATION OF UNLOADING CURVE IN EOS
The main input to the modified EOS uses three piece wise linear curves. The first one is the plastic compaction
curve 𝑃𝑐(𝜌), see Fig. 5. The second piece wise linear input is the initial wave velocity 𝑐𝑏(𝜆), where 𝜆 = 𝜌(𝑃 = 0).
The third piece wise linear input is how curved the unloading is along the density axis when the pressure is equal to
zero 𝛾(𝜆), here named curve factor.
The unloading is described with following two equations
𝑐𝑏 (𝜆)2 = 𝑃𝑐(𝜆+𝜌𝐿(𝜆))
𝜌𝐿(𝜆) (2)
and
𝑃UL(𝜌) = 𝑃c(𝜆+𝜌L(𝜆))
e𝛾(𝜆)−1 (e
𝛾(𝜆)
𝜌L(𝜆)(𝜌−𝜆) − 1) (3)
where 𝜆 is the density in the 𝜌 − 𝑃 space along the 𝑃 = 0 line, 𝜌𝐿(𝜆) is in 𝜌 space and is defining the horizontal
distance for an unloading or re-loading curve, according to Fig. 5. The equations (2) and (3) describes the
relationship between the 𝜌 space and the wave velocity 𝑐𝑏. Some of the main properties for the 𝑃UL(𝜌) equation (3)
is that when the density is on its initial or final values it becomes

-- 4 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
𝑃UL(𝜌 = 𝜆) = 0 (4)
and
𝑃UL(𝜌 = 𝜆 + 𝜌L(𝜆)) = 𝑃𝑐. (5)
Fig. 5. Shows the plastic compaction curve 𝑃𝑐(𝜌), Theoretical Maximum Density (TMD) line, the intersection of
arbitrary unloading curve with the 𝑃 = 0 line 𝜆, and the density span of unloading curve 𝜌𝐿(𝜆).
Another main property is how the curving of the unloading is treated in between the initial and end value. First when
the curve factor goes towards zero:
lim𝛾(𝜆)→0 𝑃𝑈𝐿(𝜌) = 𝑃𝑐(𝜆+𝜌𝐿(𝜆))
𝜌𝐿(𝜆) (𝜌 − 𝜆) = 𝑐𝑏(𝜆)2(𝜌 − 𝜆) (6)
This means that the unloading becomes the same as in the original model by [9]. Secondly when the curve factor
goes to infinity:
lim𝛾(𝜆)→∞ 𝑃𝑈𝐿 (𝜌) = { 0 if 𝜆 ≤ 𝜌 < 𝜆 + 𝜌𝐿(𝜆)
𝑃𝑐(𝜆 + 𝜌𝐿 (𝜆)) if 𝜌 = 𝜆 + 𝜌𝐿 (𝜆) (7)
This will give a flip turned L-shape like unloading curve. This means that equations (2) and (3) are relatively simple
but powerful relationship formulation which gives the possibility to define the unloading for the whole 𝜌 − 𝑃 space
by using three independent piece wise linear input data curves 𝑃𝑐(𝜌), 𝑐𝑏(𝜆), and 𝛾(𝜆).
To illustrate the relationship and how the curve factor 𝛾(𝜆) influence the unloading, the unloading shape is shown
for 𝛾(𝜆) = 0, 5, 100, see Fig. 6

-- 5 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
Fig. 6. Three different unloading curves depending on the setting of the curve factor 𝜌𝐿(𝜆) = 0, 5, and 100,
respectively.
DERIVED INPUT DATA FOR DRY SAND
The derived input data for dry sand is based on fitting the experimental tests from [3] and [4]. In addition the
extrapolation done by NLP in [13] is also used. The first input is the plastic compaction curve 𝑃𝑐 (𝜌), which is
unchanged input from [3], see Fig. 7. The plastic compaction curve is given until it reaches the theoretical maximum
density line, see also Fig. 5.
Fig. 7. Plastic compaction curve until reaching theoretical maximum density line.
In the original model, the elastic unloading wave velocity 𝑐𝑏(𝜆) was based upon wave speed measurements [3] and
[4]. In Fig. 8 the measured pressure wave and shear wave for the dry sand is shown. From the measurements the
calculated 𝑐𝑏 (𝜆) is also shown in Fig. 8. The input data of 𝑐𝑏(𝜆) was modified and instead of using the measured
waves the slope of the mechanical unloading curves was used to calculate the initial unloading wave, see Fig. 9.

-- 6 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
Fig. 8. Measured pressure and shear wave velocities as a function of pressure for dry sand (Sjöbo). The blue line
corresponds to calculated wave velocity 𝑐𝑏(𝜆), from [3] and [4].
In Fig. 9 the initial unloading wave 𝑐𝑏(𝜆)is shown for the original model and the modified input. It can be seen that
the black curve for the modified input is quite lower for the most part compared with the original model input [3].
Fig. 9. Initial unloading wave velocity 𝑐𝑏(𝜆) as a function of density 𝜆 (along 𝑃 = 0 line).
0
500
1000
1500
2000
2500
3000
3500
4000
4500
5000
1.674 	1.874 	2.074 	2.274 	2.474 	2.674
Wave velocity
 cb [m/s]
Density, λ [g/cm3]
cb according to modified input
cb according to Sjöbo Sand Original model [3]

-- 7 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
The third input is the curve factor 𝛾(𝜆) which defines the shape of the unloading curve. In Fig. 10 the curve factor is
given for the modified input and it starts with about 5 to 6 and then decay down to 0 when the theoretical maximum
density line is reached. The curve factor has been determined by fitting the experimental results to the model. At the
theoretical maximum density line the unloading curve is linear with constant maximum unloading wave velocity.
Fig. 10. Curve factor 𝛾(𝜆) as a function of density 𝜆 (along 𝑃 = 0 line).
In Fig. 11 and Fig. 12 unloading curves which have been calculated with equations (2) and (3) are shown for the
used input data. The unloading curves represent an overall fit with several isotropic compression measurements
performed on the dry sand [4]. The input data shown here is just one example of how the EOS model can be used.
The implemented EOS model is a powerful way of numerically describe the loading and unloading for numerous
soils with different properties of initial density, moisture content, and granularity.

-- 8 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
Fig. 11. Unloading curves from plastic compaction pressure 𝑃𝑐 = 0.05 and 0.46 MPa according to the modified input
data.
Fig. 12. Unloading curves from plastic compaction pressure 𝑃𝑐 = 4.58, 14.98, and 29.2 MPa according to the
modified input data.

-- 9 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
COMPARISON OF SIMULATION RESULTS
To verify the modified EOS detonation Autodyn [4] simulations have been carried out in one dimension. This has
been done by so-called wedge simulations. The wedge is simulating a free spherical spreading from the detonation
of High Explosive charge in sand. The wedge is formed with an inner radius of 25 mm and an outer radius of 200
000 mm. Euler solver is used with a mesh consisting of 3000 cells. The cells closest to the explosion center had a
length of 5 mm, and then by geometric coarsening of the cells, the cells farthest away had the longest length. Total
simulated time was 1 s, Multi Material Euler was used to describe the explosive and the sand. Charge weight was set
to 125 kg of TNT. The pressure and impulse were measured at distances r = 5, 10, 25 and 40 meters from the charge.
First the "Sjöbo Sand original -only EOS" is compared with the "Modified Sjöbo Sand -only MODEOS4" which is
the modified version at charging distance r = 5 m, see Fig. 13. When only the EOS part of the material model is
compared, the results between the original EOS and modified EOS is not differing much. When the results from
ConWep are compared they show similar magnitude.
Fig. 13. Original EOS and modified EOS plus ConWep for charge size 125 kg TNT at the distance of 5 m.
When the charge distance is increased to 10 m the original model and the modified EOS start to differ in maximum
pressure, see Fig. 14. The maximum pressure is about 34% lower when the sand is simulated with the modified EOS.
The Pressure relief is also flatter in the modified EOS, which can be seen through that after approximately 60 ms,
the pressure is continuously higher for modified EOS, see Fig. 14.

-- 10 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
Fig. 14. Original EOS and modified EOS plus ConWep for charge size 125 kg TNT at the distance of 10 m.
When the charge distance is increased to 25 m the results from the original model and the modified EOS starts to
differ even more, see Fig. 15. Maximum pressure drops now with 65% when the modified EOS is used to simulate
the sand and the shape of the pressure relief also remains flatter with the modified EOS.
Fig. 15. Original EOS and modified EOS plus ConWep for charge size 125 kg TNT at the distance of 25 m.
When the charge distance is increased to 40 m, the maximum pressure is decreased by 75% for the modified EOS,
see Fig. 16. This is a significant difference in how the pressure wave is formed when comparing with the original
model.

-- 11 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
Fig. 16. Original EOS and modified EOS plus ConWep for charge size 125 kg TNT at the distance of 40 m.
However, when the simulated pressure time histories from Autodyn is compared with Conwep for e.g. distances 25
and 40 m the results differ largely, see Fig. 15 and Fig. 16. This is mainly explained by that the shear strength model
was not included in the first set of simulations. If the original shear strength model in [3] is used the Conwep and
Autodyn pressure waves looks more similar, see Fig. 17 and Fig. 18. The trend with greater differences with lower
pressure for the new modified EOS as a function of increasing charge distance is also true when shear is included.
Fig. 17. Original Sand Model [3] and strength plus modified EOS compared with ConWep for charge size 125 kg
TNT at the distance of 25 m.

-- 12 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
Fig. 18. Original Sand Model [3] and strength plus modified EOS compared with ConWep for charge size 125 kg
TNT at the distance of 40 m.
In Table 1 the simulation results are summarised. One observation that can be made is that if one wants to approach
the results that ConWep shows the distance of 40 m shear strength must be included. It means that energy is
absorbed by plastic shearing in the material in addition to energy losses by EOS during isotropic compression. In
Table 1, it can be seen that the "Mod EOS with shear strength" has 4 kPa as a maximum pressure and an impulse
intensity of 767 Pa-s This is very close to the values from ConWep with n = 2.7 where the maximum pressure was 6
kPa and impulse intensity was 739 Pa-s. In Table 1 it can be seen that “Mod EOS with Shear Strength” has similar
results in impulse intensity in general when comparing with Conwep. Even though the pressure do not match
throughout the whole range
Table 1. Complete summary of maximum pressure and maximum impulse intensity of the different simulations.
EOS name – distance [m] ta [ms] Pmax [kPa] imax [Pa-s]
Original EOS, no shear strength
included.
2 4 11 607
1 932
798
289
173
62 543
41 555
27 810
11 621
7 155
5 14
10 32
25 87
40 142
Emulated Original EOS by using
the modified EOS, no shear
strength included.
2 4 11 570
1 928
798
296
178
62 426
41 571
27 853
11 705
7 249
5 14
10 32
25 86
40 142
Original EOS shear strength
included.
2 3 4 043
644
189
36
14
103 098
25 864
9 256
2 393
907*
5 11
10 25
25 67
40 110
Emulated Original EOS by using
the modified EOS shear strength
included.
2 3 4 032
642
189
37
96 493
24 561
9 127
2 623
5 11
10 25
25 67

-- 13 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
40 110 14 1 316
Modified EOS no shear strength
included.
2 4 11 975
1 903
525
100
44
63 363
40 985
27 509
11 330
6 813
5 14
10 31
25 86
40 142
Modified EOS shear strength
included.
2 3 4 214
449
80
10
4
90 454
23 387
8 726
2 336
767*
5 11
10 25
25 67
40 111
ConWep with generic sand data
𝑐 = 300 m/s
𝜌 = 1674 kg/m3
𝑛 = 2.7
2 7 18 040
1 520
234
20
6
120 257
25 334
7 801
1 643
739
5 17
10 33
25 83
40 133
ConWep with generic sand data
𝑐 = 300 m/s
𝜌 = 1674 kg/m3
𝑛 = 2.9
2 7 17 640
1 237
166
12
3
117 572
20 619
5 527
969
397
5 17
10 33
25 83
40 133
*Sums of pressure below 1 kPa was removed when the impulse density was calculated over time from 0 to 1 000 ms.
CONCLUSIONS AND FUTURE WORK
The implemented EOS model is a powerful way to numerically describe the loading and unloading for numerous
soils with different properties of initial density, moisture content, and granularity. The implemented EOS especially
handles the unloading wave speed 𝑐(𝜌, 𝑃) which is now covered in a rigorous way over the whole 𝜌 − 𝑃 space by
using three independent piece wise linear input data curves 𝑃𝑐(𝜌) , 𝑐𝑏(𝜆) , and 𝛾(𝜆) . The measurements from
isotropic compression tests can easily be fitted by using these curves. The user subroutines for the modified EOS
for Autodyn can be found in Appendix ZA in [14].
As future work the original shear strength model should be modified to match better with the implemented EOS.
Some oscillations were observed at low pressures such as below 10 kPa. In addition the poisson’s ratio in the shear
strength model should also automatically adjust to the moisture content, see [14] for further details.
ACKNOWLEDGEMENTS
The authors acknowledge the support given by MSB and especially Björn Ekengren. Additionally members of the
West Coast Sweden Shock Wave Group (WCSSWG) and especially Dr. Morgan Johansson and Dr. Joosef
Leppänen are highly acknowledged for their input.
REFERENCES
[1] Ekengren B. (2009): Skyddsrum, SR 09 (Civil Defence Shelters SR 09, in Swedish.), the Swedish Civil Contingencies Agency
(MSB), B54-141/09, Karlstad, Sweden.
[2] Lampson C.W. (1946): Final Report on Effects of Underground Explosions, Div. 2, National Defence Research Committee of
the US Office Scientific R&D, NDRC Report No. A-479, OSRD Report No. 6645.
[3] Laine L. and Sandvik A. (2001): “Derivation of mechanical properties for sand”, 4th Asian-Pacific conference on Shock and
Impact Loads on Structures, CI-Premier PTE LTD, vol. 4, pp 353-360, Singapore.

-- 14 of 15 --

From the Proceedings of 83rd Shock and Vibration Symposium, Shock and Vibration Exchange,
www. savecenter.org, New Orleans, Louisiana, 2012.
[4] Heyerdahl H. and Madshus C. (2000): “EOS-data for sand, Tri-axial tests on sand from Sjöbo”, Norges Geotekniske institutt,
NGI rept. 20001157-1, Oslo, Norway.
[5] Century Dynamics Inc., (2004): AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[6] Fairlie G. and Bergeron D. (2002):”Numerical simulations of Mine Blast Loading on Structures”, 17th Numerical aspects of
Blast Symposium, Las Vegas, Nevada.
[7] Tjernberg A. (2006): Simulation of Mine-Blast deflection, FOI-Swedish Defence Research Agency, Technical Report, FOI-R-
-1913--SE, TUMBA, Sweden.
[8] Grujicic M., Pandurangan B., Qiao R., Cheeseman B.A., Roy W.N., Skaggs R.R., and Gupta R. (2008): Parameterization of
the porous-material model for sand with different levels of water saturation”, Soil Dynamics and Earthquake Engineering 28, pp
20–35.
[9] Moxnes J. F., Ødegårdstuen G., Atwood A., and Curran P. (1999): “Mechanical properties of a porous material studied in a
high speed piston driven compaction experiment”, 30th International Annual Conference of ICT Energetic Materials, Fraunhofer
Institut Chemische Technologie.
[10] Laine L. (2006): “Study of Planar Ground Shock in Different Soils and Its Propagation Around a Rigid Block”, 77th Shock
and Vibration Symposium, Monterey, CA.
[11] Wang1 Z., Hao H., and Lu Y. (2004): “A three-phase soil model for simulating stress wave propagation due to blast
loading”, Int. Journal for Numerical and Analytical Methods in Geomechanics, 28:33–56 (DOI: 10.1002/nag.325).
[12] Laine L. and Larsen O.P. (2009): Proposal on How to Model the Unloading in a Compaction Equation of State based upon
Tri-axial tests on Dry Sand, 80th Shock & Vibration Symposium, San Diego, CA.
[13] ConWep(1992): Collection of conventional weapons effects calculations based on TM 5-855-1, Fundamentals of Protective
Design for Conventional Weapons, U.S. Army Engineer Waterways Experiment Station, Vicksburg, USA.
[14] Laine L. (2012): Markstötvåg english title Ground Shock. MSB, Myndigheten för samhällsskydd och beredskap. Publ.nr
MSB344, Karlstad. (in Swedish) Weblink:
https://www.msb.se/Upload/Insats_och_beredskap/Olycka_kris/Skyddsrum/Litteratur/referenslitteratur/Markst%c3%b6tv%c3%a
5g.pdf

-- 15 of 15 --