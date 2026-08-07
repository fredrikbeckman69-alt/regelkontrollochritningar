---
title: "How To Model The Unloading In A Compaction Eos Based Upon Tri Axial Tests On Dry Sand"
category: "vetenskapliga-artiklar"
originalFile: "skyddsrum/vetenskapliga-artiklar/how-to-model-the-unloading-in-a-compaction-eos-based-upon-tri-axial-tests-on-dry-sand.pdf"
fileType: "PDF"
keywords: ["skyddsrum","explosion","unloading","pressure","wave","density","speed","curve"]
summary: "Proposal on How to Model the Unloading in a Compaction Equation of State based upon Tri-axial tests on Dry Sand Leo Lainea,* and Ola Pramm Larsenb aANKER – ZEMER Engineering AS Stugvägen 4, SE-438 94 HÄRRYDA, Sweden *Corresponding author: leo.lain..."
---

Proposal on How to Model the Unloading in a Compaction
Equation of State based upon Tri-axial tests on Dry Sand
Leo Lainea,* and Ola Pramm Larsenb
aANKER – ZEMER Engineering AS
Stugvägen 4, SE-438 94 HÄRRYDA, Sweden
*Corresponding author: leo.laine@telia.com
bANKER – ZEMER Engineering AS
P.O. Box 253, NO-0702 OSLO, Norway
This paper proposes how a compaction Equation of State (EOS) can be used to describe
the unloading wave as a function of both density and pressure. The modification will
result in a more accurate way to calculate the shock wave propagation and attenuation in
dry sand. Previously, only an elastic unloading was available in the compaction EOS in
AUTODYN by specifying the elastic bulk sound speed as a function of density. Currently,
a nonlinear modification is available which relates the slope to a user defined bulk
module as a function of density. However, neither of these options captures properly the
nonlinear behaviour seen in tri-axial test data during unloading and how the unloading
curve shape varies with both density and pressure.
The proposed modifications to the unloading phase for the compaction EOS are based
upon tri-axial isotropic and shear tests performed on dry sand. The elastic pressure and
shear wave velocities were also measured during isotropic loading. Isotropic unloading
was performed from different pressure levels. The results show how the proposed
modification which considers both density and pressure for calculating the slope of the
unloading can represent the tri-axial test data within the measured pressure range and up
to the theoretical maximum density.
INTRODUCTION
The Swedish Civil Contingencies Agency (MSB) is responsible for the building regulations of the Swedish civil
defence shelters. There are specific rules for how the defence shelters are planned, built, equipped and maintained
[1]. One of many regulations state what loading level the shelters should withstand: “The effect of a pressure wave
corresponding to that produced by a 250 kg GP-bomb with 50 weight per cent TNT which burst freely outside at a
distance of 5.0 meters from the outside of the shelter during free pressure release”. However, many of the shelters
are designed as basements below ground surface. This is the reason why more knowledge on how the ground shock
propagates and attenuates during the scaled distances of 0.1 to 10 kg/m3 and affects buried shelters, is needed.
During the Second World War extensive experiment series and research were conducted on ground shock generated
by high explosives [2]. This early work functions as a foundation for understanding the behaviour of how the shock
waves propagates and attenuates in earth media. In [2], Lampson states that the pressure in the soil from the
detonation of an explosive charge is propagated by a plastic wave which is characterized by a continuous change of
shape and of duration with distance from the charge, see Fig. 1 for illustration. Close to the source the shape will be
sharp and after a distance it will start to attenuate and change shape of the wave.

-- 1 of 14 --

Fig. 1. Illustration of how the ground shock wave change shape during propagation in a compactable soil.
As already stated in [2] by Lampson, the reason for the continuous change of shape is the pressure density
relationship which is common for compactable soils, see Fig. 2. The left illustration in Fig.2 shows the loading and
unloading path for a generic compactable soil. This curve also defines the loading and unloading wave speed at a
certain pressure and density, see right illustration in Fig. 2. The relationship between pressure, density and wave
speed c is simply seen as
√ (1)
The right illustration Fig.2 shows that the unloading wave speed is higher than the loading wave speed when above a
certain pressure level. This means that the high pressure shape will attenuate fast by the unloading. For lower
pressures the unloading speed can be slower which would result in that the wave shape starts to have a long
unloading tail.
Fig. 2. Illustration of a compactable soil and how the pressure density curve relates to wave speeds as a function of
pressure. Solid and dashed lines represent loading and unloading, respectively.
A simple way of modelling compaction materials is to define the plastic compaction curve as a pressure function of
density P(
) and the unloading wave speed as a function of density c(
), see Fig. 3 for illustration. The unloading is
then represented by the straight lines on top of the dashed unloading curves, in Fig. 3. Earlier work by Laine et al. on
deriving mechanical properties for dry sand from tri-axial experiments, [3] [4], have been widely used for shock
simulation involving dry sand within the AUTODYN community [5] with quite descent results e.g. for determining
the blast load from buried mines, see e.g. [6] [7]. Here the linear approximation of the unloading curves does not
influence the results except for determining the level of shock wave energy absorbed by the dry sand. It is correctly
stated in [8] that the material data provided for dry sand in Laine et al. [3] does not include an easy change on how
moisture affects the input parameters of the compaction EOS. The original compaction model [10] would need a
pressure
distance from explosive source
density
pressure
Pressure
wave speed

-- 2 of 14 --

totally new set of input when the soil type changes in water contents, porosity, and soil skeleton. In [11] a total of 16
generic soil types were generated from dry sand to fully saturated clay. However, the main deficiency of the original
model [10] and the given data for dry sand [3] for the compaction EOS is that the unloading phase is too simplified
to properly model the shock wave propagation and the change in shape of the pressure wave as stated in [1]. One
way to solve this is to try model the soil as a three phase medium shown in [12] which is a quite interesting approach.
However, in this paper a different approach is introduced. The same experimental data for dry sand as shown in [3]
and [4] are re-visited to derive how the unloading wave speed can be defined as a function of both density and
pressure i.e. c(
,P) for the dry sand. The proposed modelling of the unloading phase improves on the model
previously presented and previously derived material data for the dry sand with respect to describing how the ground
shock pressure wave propagation and change in shape varies with distance from detonation and time.
The proposed modelling captures the dashed unloading curves, as illustrated in Fig.3 for the whole density and
pressure domain as well as the transition into fully compacted material. The fully compacted state is reached at (
n,
Pn). At this point the material is seen as linear material with Theoretical Maximum Density (TMD)
TMD at zero
pressure, see Fig. 3.
Fig. 3. Illustration of an EOS compaction, where the solid line between (
0, P0=0) and (
n, Pn) shows a plastic
compaction curve, dashed lines illustrate nonlinear unloading and the straight lines on top of the dashed lines show
linear approximation with elastic unloading wave c(
). The point (
n, Pn) defines when the material is seen as fully
compacted and has a linear elastic wave speed of cTMD.
The paper is organized as follows: The section EXPERIMENTAL RESULTS AND EARLIER PROPOSED SAND
MODELLING will re-visit the experimental results with focus on the compaction EOS and the unloading. Further
information on the shear strength; see [3] and [11]. In the section DERIVATION OF HOW THE UNLOADING
WAVE SPEED IS A FUNCTION OF BOTH DENSITY AND PRESSURE the optimization formulation and the
logical steps are shown for the defining the surface c(
,P) from the experimental results. In the section
COMPARISON OF UNLOADING PROPERTIES BETWEEN OLD AND NEW EOS the initial unloading wave
speed and specific energy properties are compared. Finally the section CONCLUSIONS AND FUTURE WORK
sums up the proposed model and provides suggestions for future work.
EXPERIMENTAL RESULTS AND EARLIER PROPOSED SAND MODELLING
The Norwegian Geotechnical Institute (“NGI”) has characterised the soil and performed tri-axial tests on the sand
from Sjöbo Sweden [4], see also [3]. The characterization of the soil showed that the grain size distribution in the
sand was medium to coarse, with grain size number C60/C10 approximately equal to two. The content of organic
compounds was less than one percent. The in situ dry density was approximately 1574 kg/m3; the average water
content was approximately 6.57 percent. Finally, the average specific weight of the grains was 2641 kg/m3.
Pressure, P
density,

0
n, Pn
cTMD
TMD

-- 3 of 14 --

For the experimental setup, two types of tri-axial cell devices were used for the seven tests performed. Firstly, the
“NGI standard Cell device” [3] was used for tests up to 2 000 kPa in confinement stress, and secondly for tests
above this confinement stress a rock tri-axial cell device was used, see Fig. 4. A cylindrical soil specimen with h=90
mm and d=38 mm in the rock tri-axial cell was enclosed in a rubber membrane inside the cell. By using a fluid in
the chamber, the confining stress (pressure) equal to
r=
2=
3 was applied. The vertical stress
v=
1 was applied
by a steel piston, which was employed by hydraulic pumps and a step motor. Additionally the rock tri-axial cell was
equipped with pressure transducers to allow measurements of the elastic shear and longitudinal wave speeds of the
soil specimen during different pressure and density states.
Fig. 4. The rock tri-axial cell device was used for the dry sand with maximum isotropic consolidation pressure of 60
000 kPa [4].
The loading onto the specimen was first an isotropic consolidation (P=
v=
r) with loading and unloading to
different pressure levels, see Fig. 5 - Fig. 7. Radial meter gauges were used to measure radial strain. From this part
of the test, the compaction EOS with plastic loading and the mechanical unloading at different pressures levels can
be derived. After the isotropic consolidation, a shear test at different pressure levels, i.e. 2 000, 20 000, and 60 000
[kPa] were performed. The radial stresses were kept constant (i.e.
r = constant) while the vertical stress
v was
increased. Consequently, the maximum yield surface was established from the tests, see further in [3] and [4].
Fig. 5. Experimental data, Test 6, pressure as a function of density, with isotropic consolidation pressure up to 2 000
kPa. The black dots are used as a simplified representation of the unloading curves.
v
r
r
er
ev
v
r
r
piston
er
ev
pressure transducers
steel cylinder
membrane
soil specimen
pressured liquid

-- 4 of 14 --

Fig. 6. Experimental data, Tri845, pressure as a function of density, with isotropic consolidation pressure up to 20
000 kPa. The black dots are used as a simplified representation of the unloading curves.
Fig. 7. Experimental data, Tri847, pressure as a function of density, with isotropic consolidation pressure up to 60
000 kPa. The black dots are used as a simplified representation of the unloading curves.
Measurements of elastic longitudinal vl and shear vs wave speeds were performed by using the pressure transducers,
shown in Fig. 3, for certain density and pressure levels. However, the measurements of the elastic waves were
mainly performed when the pressure was not close to zero. In Fig. 8 the derived bulk sound speed c from the original
material data for the dry sand is shown. The bulk sound speed c is based upon following relationship
√ . (2)

-- 5 of 14 --

In addition, a linear extrapolation was used for c for densities above 2150 kg/m3. The theoretical maximum density
was set equal to the grain density of
TMD=2641 kg/m3. The maximum bulk sound speed was set equal to cTMD=4636
m/s based upon shock Hugoniot data found for westerly granite [3].
Fig. 8. Experimentally derived bulk sound speed as a function of density cb(
).
Fig. 8 illustrates the deficiency in the current material model when defining different unloading wave speeds based
on density alone, and not including pressure which is an essential part when properly describing the change in shape
of the propagating pressure wave
DERIVATION OF HOW THE UNLOADING WAVE SPEED IS A FUNCTION OF BOTH DENSITY AND
PRESSURE
Used symbols and parameters when deriving the shape of the unloading wave speed as a function of density and
pressure are given in Table 1.
Table 1. Used symbols and explanations.
Symbol Explanation
λ Intersection of arbitrary unloading curve with the P=0 line.
Pc(ρ) Plastic compaction curve. One of the primary inputs to the old EOS, a piecewise linear curve using 10
user defined data points in AUTODYN.
PU(ρ) Functional expression for an arbitrary unloading curve
ρL(λ) Density span of unloading curve from
=
 at the P=0 line to the intersection point with Pc(ρ) at
=
int.
ρL(λ) = ρint - λ
ρ0 Initial or in situ density of the soil including water content.
ρTMD Theoretical maximum density.
ρint Density value at intersection point between the plastic compaction curve and an arbitrary unloading
curve.
ρcrit User input controlling the exponential growth of the c(
,P=0) curve.
<
crit results in unloading wave
speeds less than c0 at P=0.
c(ρ,P) Unloading wave speed, not the same as speed of sound, see eq. (1).
cb(ρ) Bulk speed of sound as a function of density. One of the primary inputs to the old EOS, a piecewise
linear curve using 10 user defined data points in AUTODYN.
c0 Initial sound speed at initial density ρ=ρ0.
cTMD Sound speed when theoretical maximum density is reached. At this level of maximum compression the
EOS is perfectly linear elastic, meaning that the unloading wave speed is identical to the bulk speed of
sound.
cmin User input for the minimal unloading wave speed at
=
0, P=0.

-- 6 of 14 --

The cornerstone of the new compaction EOS is a complete description of the unloading wave speed c(ρ,P) for the
complete state space (ρ,P) of the granular material. The state space can easily be visualized by the area confined by
the plastic compaction curve, P=0 line, and the fully elastic unloading/loading path as shown in Fig. 3. When the
unloading wave speed surface c(ρ,P) is obtained every unloading/loading path is unambiguously defined through the
relation:
(3)
With the initial condition The (ρi,Pi) is an arbitrary material state in the state space domain. Also note
that the loading path will be identical to the unloading path for this new compaction EOS.
Assuming that only a handful of experimental unloading data sets are available, which was the case for the
unloading/loading data employed in this derivation, it is necessary to make rigorous use of the boundary values, i.e.
Pc(ρ) and cb(ρ), and various extrapolation techniques. The objective is to derive the general trend of the unloading
patterns exhibited by the experimental data while at the same time satisfying the theoretical boundary values.
Here follows an overview of the basic steps involved in the derivation of the c(ρ,P) surface.
Step 1: A lot of effort was put into the search of a general functional expression PU(ρ) that could fit the various
experimental unloading patterns, satisfy the underlying physics, and at the same time involve a relative simple
mathematical construct. Based on numerous curve fitting attempts of many different functional expressions on the
experimental data, polynomials of different orders, logarithms, splines, exponentials and combinations of these were
systematically tested for applicability. Finally, a best candidate was finally chosen
( ( )) (4)
( ) (5)
(6)
where a, b, d, and λ are constant parameters that will be determined based on various curve fitting techniques. Eq. (4)
is the primary function, Eq. (5) is the unloading slope, and Eq. (6) is the nth derivative.
PU(ρ) has following convenient properties:
1. PU(λ) = 0.
2. δPU(λ)/δρ = d, which makes it easy to determine slope at P=0.
3. PU(ρ) and all its derivatives are continuously growing functions for ρ>λ assuming d>0 and b>0.
4. PU(ρ) has a relative simple functional description, and is numerically robust.
Step 2: In order to extract the global unloading behaviour, certain dominating trends were extracted based on
observations from the local curve fitting level. I.e. the experimental data from each unloading sequence was curve
fitted based on the PU(ρ) functional description, and properties like the intersection with the Pc(ρ) curve and the P=0
line were determined with ρ=ρint and ρ=λ respectively, see Fig. 9. Another important extrapolated property of the
unloading curve was the slope at P=0, see Fig. 9.

-- 7 of 14 --

Fig. 9. Optimization results of fitting the PU(ρ) function through the unloading experimental data represented by
black dots. Blue curve shows plastic compaction as a function of density, green curve a numerical fit of the PU(ρ)
function through the experimental unloading data. Magenta curve is the square root of the slope to the PU(ρ)
function. The scale on the right side of the plot applies to the magenta curve only.
The global unloading properties were described by using two mathematical constructs shown in Fig. 10 and Fig. 11.
Fig. 10 describes the unloading wave speed c(ρ,P=0) at zero pressure. Fig. 11 describes the density span ρL(λ) for
the unloading curves. c(ρ,P=0) was rigidly applied, while ρL(λ) was only used as a guidance for the optimization
process, which lead to the creation of extrapolated unloading curves outside the experimental data domain.
Fig. 10. Green curve illustrates how the transition from minimum unloading wave speed transforms to theoretical
maximum density unloading wave speed at P=0.

-- 8 of 14 --

Fig. 11. General descriptions of the density span which provides a guideline to the extrapolation of unloading curves
outside the experimental data domain. The black dots represent the density span ρL,i for a selection of the
experimental unloading data. The red line is the fitted bilinear ρL(λ) curve satisfying the boundary values at ρ0 and
ρTMD.
Step 3: The extrapolated c(λi,P=0) values for each unloading curve (i) produces the basis for constructing the
exponential c(ρ,P=0) curve in Fig. 10. A lower bound cmin, a theoretical upper bound cTMD, and a critical ccrit value
could alternatively be specified to uniquely determine the exponential c(ρ,P=0) curve if there are limited
experimental data points near the P=0 line.
Step 4: By using the c(ρ,P=0) curve and the ρL(λ) guideline together with the plastic compaction curve and the bulk
sound speed curve, one can numerically approximate each unloading curve by using Non-Linear-Programming
(NLP). For an arbitrary unloading curve starting at the P=0 line at ρ=λk the NLP problem reads as follows
(7)
subject to
(8)
(9)
(10)
(11)
(12)
(13)
where Eq. 7 is minimizing the deviation to the to the ρL density span guidance. The minimization is subject to
constraints such as Eq. 8 which constrains the slope at P=0 to the global trend, see Fig. 10. The Eq. 9 constrains the
ρint to be the intersection of PU and Pc. The Eq. 10 constrains the slope to the bulk sound speed at ρint. Eq. 11 and Eq.
12 constrains the valid density domain for the starting point and ending point of the unloading curve, respectively.
Finally, Eq. 13 maintain the convenient properties of the PU(ρ) function. In Table 2 a selection of results are
summarized from the optimization.

-- 9 of 14 --

Table 2. A selection of experimentally fitted, red in Fig. 12, and extrapolated, magenta in Fig. 12, unloading curves
with their corresponding parameter values providing the exponential unloading curves PU(ρ). The pressure value P
provides the pressure level on the plastic compaction curve where the unloading is initialized. The extrapolated
unloading curves are generated through the NLP optimization procedure outlined in Eq.7 - Eq.13.
Pressure
P
[kPa]
Experimental or
NLP Extrapolated
Unloading curve
P=0 intersection
λ
[g/cm3]
Pc(ρ) intersection
ρint
[g/cm3]
PU(ρ) const.
a
Log[m2/s2]
PU(ρ) const.
b
[cm3/g]
PU(ρ) const.
d
[m2/s2]
3200 NLP 1.689 1.719 12.20 26.45 131.3
9000 Experimental 1.717 1.801 7.002 54.24 210.1
15800 Experimental 1.791 1.884 7.785 45.91 660.5
23100 Experimental 1.865 1.953 8.928 40.62 1829
32500 Experimental 1.938 2.020 8.978 47.89 4715
47400 Experimental 2.021 2.097 10.67 35.79 13410
62000 Experimental 2.082 2.153 11.82 27.61 28230
78600 NLP 2.136 2.203 12.40 25.65 54320
99500 NLP 2.190 2.253 13.08 22.22 104000
136000 NLP 2.262 2.320 14.40 13.34 245700
188000 NLP 2.334 2.390 19.02 0.2759 578100
269000 NLP 2.407 2.469 21.15 3.082e-2 1.356e6
376600 NLP 2.479 2.544 21.79 1.347e-2 3.177e6
508000 NLP 2.569 2.613 25.44 4.691e-4 9.189e6
Step 5: A finite set of unloading curves then provide the basis for generating a Non-Uniform-Rational-B-Spline
(NURBS) surface ultimately resulting in the definition of c(ρ,P), see Fig. 12, Fig. 13, and Fig. 14 for different views.
Red curves in Fig. 12 represent locally curve fitted experimental unloading data, while the magenta curves are
extrapolated through the NLP problem described over. The solid green curve is the c(ρ,P=0) curve while the green
wall behind the blue/pink NURBS surface represent the plastic compaction and bulk sound speed, i.e. Pc(ρ), and
cb(ρ). The significance of the green wall can be better understood if the surface is projected in the (ρ,P) plane Fig. 13,
and the (ρ,c) plane Fig. 14. In Fig. 14 the projected curve that travels along the top of the green wall and then merges
with the NURBS surface (blue/pink) is actually the bulk sound speed cb(ρ). Notice that the unloading wave speed
realized by the experimentally fitted red curves end up at a level approximately 10-20% under the bulk sound speed
curve.
It is important to note that the NURBS surface will only function as an intermediary when considering the planned
implementation into AUTODYN. The NURBS surface will later on be broken down into a set of piecewise
polynomial surfaces to provide faster numerical evaluation of the c(ρ,P) function.

-- 10 of 14 --

Fig. 12. 3D surface in blue to pink colours of unloading wave speed as a function of both pressure and density,
c(ρ,P).
Fig. 13. 3D surface of unloading wave speed as a function of both pressure and density from a density versus
pressure view. The projected curve is the plastic compaction curve Pc(ρ)

-- 11 of 14 --

Fig. 14. 3D surface of unloading wave speed as a function of both pressure and density from a density versus wave
speed view.
COMPARISON OF UNLOADING PROPERTIES BETWEEN OLD AND NEW EOS
Two interesting properties of the unloading phase in the new and old EOS are here compared: the initial unloading
wave speed when starting the unloading phase and the specific energy. Firstly, the measured bulk sound speed cb,
see Fig. 8, is compared with the derived initial unloading wave speed from using the measured isotropic tri-axial
tests, see Fig.5-Fig.7. The summary in Table 3 shows that the difference is in the 10-20% range for initial wave
speed by using the two different approaches. The difference in initial unloading wave speed is considered as a minor
issue because the unloading will be better represented in its entirety with the new proposal.
Table 3. Comparison of initial unloading wave speeds with old and new EOS.
Pressure
P
[kPa]
old EOS
c
[m/s]
new EOS
c
[m/s]
Decrease from old to
new EOS
[%]
9000 994 775 22
15800 1200 980 18.9
23100 1380 1160 15.9
32500 1550 1440 7.2
47400 1750 1630 6.5
62000 1890 1730 8.5
The second point in comparing the absorbed specific energy between unloading with old and new EOS is shown in
Fig. 15. The unloading is calculated accordingly
∫ (14)
Table 4 compares the specific unloading and total specific energy absorbed. Interesting to note is the specific
unloading energy is almost 199 percent higher at 9 000 kPa in starting unloading pressure for the new EOS. The
total specific energy absorbed at 3 200 and 9 000 kPa in starting unloading pressure results in 8 and 16 percent
decrease in total specific energy absorbed for the new EOS. For higher unloading pressures as e.g. 225 000 kPa the
reduction is only 2 percent which indicates that the old model works quite well for high pressure simulations such as
buried tank mine simulations where the focus is only on how much energy the covering dry sand absorbed from the
burst and confinement. The actual unloading curve shapes are shown in Fig. 15.

-- 12 of 14 --

Fig. 15 illustrates unloading curves starting at different unloading pressures. The solid red line and dashed green line
represent the unloading by the old EOS and the new EOS, respectively. From upper left, upper right, lower left, and
lower right, 3 200, 9 000, 32 500, and 225 000 kPa, as starting unloading pressure, respectively.
Table 4. Comparison of difference in specific unloading and total specific energy absorbed between old EOS and
new EOS.
Load
case
[kPa]
Specific
unloading
energy old
EOS
[J/kg]
Specific
unloading
energy new
EOS
[J/kg]
Increase
from old to
new EOS
[%]
Total
specific
energy
absorbed by
old EOS
[J/kg]
Total
specific
energy
absorbed by
new EOS
[J/kg]
Decrease
from old to
new EOS
[%]
3200 6.0 7.7 27 19 18 8
9000 13 40 199 173 146 16
32500 57 125 120 1260 1190 5
225000 693 852 23 8570 8410 2
CONCLUSIONS AND FUTURE WORK
A 3D representation of how the unloading wave speed c(
,P) is both density and pressure dependent was here
derived for the dry sand from Sjöbo Sweden, see Fig. 16. It shows how the unloading wave speed changes with
different regions. The ridge is the part that is similar to what was used as input in the old model. I.e. the unloading
wave speed is only a function of density c(
). Now when the pressure part is added, i.e. c(
,P), the unloading wave
speed nicely curves down when the pressure approaches zero. A minimum unloading wave speed at pressure equal
to zero is illustrated by the green curve.
For future work it is an open question how the implementation into AUTODYN is made most robust for user input
variations. If good quality is assured from isotropic tri-axial loading experiments it is proposed that the input for the
modified EOS could be unloading curves like shown in Fig.5-Fig.7 in addition to the plastic compaction curve,
initial density
0, theoretical maximum density
TMD, and theoretical maximum density elastic unloading wave speed
cTMD. When it comes to fit the Granular Strength model it is important to properly represent the elastic shear waves

-- 13 of 14 --

which means that the shear modulus G has to be mapped for the whole c(
,P) domain. This will be a part of future
work.
Fig. 16. NURBS surface of the derived unloading wave speed c(
,P) from dry Sjöbo sand Sweden. Red curves
represent experimentally fitted unloading data, while the magenta curves are extrapolated curves from the NLP
solution.
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
[4] Heyerdahl H. and Madshus C. (2000): “EOS-data for sand, Tri-axial tests on sand from Sjöbo”, Norges Geotekniske institutt,
NGI rept. 20001157-1, Oslo, Norway.
[5] Century Dynamics Inc., (2004): AUTODYN Theory Manual Revision 5.0, San Ramon, CA, USA.
[6] Fairlie G. and Bergeron D. (2002):”Numerical simulations of Mine Blast Loading on Structures”, 17th Numerical aspects of
Blast Symposium, Las Vegas, Nevada.
[7] Tjernberg A. (2006): Simulation of Mine-Blast deflection, FOI-Swedish Defence Research Agency, Technical Report, FOI-R-
-1913--SE, TUMBA, Sweden.
[8] Grujicic M., Pandurangan B., Qiao R., Cheeseman B.A., Roy W.N., Skaggs R.R., and Gupta R. (2008): Parameterization of
the porous-material model for sand with different levels of water saturation”, Soil Dynamics and Earthquake Engineering 28, pp
20–35
[10] Moxnes J. F., Ødegårdstuen G., Atwood A., and Curran P. (1999): “Mechanical properties of a porous material studied in a
high speed piston driven compaction experiment”, 30th International Annual Conference of ICT Energetic Materials, Fraunhofer
Institut Chemische Technologie.
[11] Laine L. (2006): “Study of Planar Ground Shock in Different Soils and Its Propagation Around a Rigid Block”, 77th Shock
and Vibration Symposium, Monterey, CA.
[12] Wang1 Z., Hao H., and Lu Y. (2004): “A three-phase soil model for simulating stress wave propagation due to blast
loading”, Int. Journal for Numerical and Analytical Methods in Geomechanics, 28:33–56 (DOI: 10.1002/nag.325).

-- 14 of 14 --