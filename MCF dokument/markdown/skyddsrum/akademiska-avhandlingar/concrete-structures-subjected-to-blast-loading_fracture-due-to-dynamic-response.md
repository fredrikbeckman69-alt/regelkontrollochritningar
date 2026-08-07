---
title: "Concrete Structures Subjected To Blast Loading Fracture Due To Dynamic Response"
category: "akademiska-avhandlingar"
originalFile: "skyddsrum/akademiska-avhandlingar/concrete-structures-subjected-to-blast-loading_fracture-due-to-dynamic-response.pdf"
fileType: "PDF"
keywords: ["betong","armering","explosion","splitter","concrete","response","material","crack"]
summary: "Concrete Structures Subjected to Blast Loading Fracture due to dynamic response JONAS EKSTR ¨ OM Department of Civil and Environmental Engineering Division of Structural Engineering CHALMERS UNIVERSITY OF TECHNOLOGY G¨oteborg, Sweden 2015 -- 1 of ..."
---

Concrete Structures Subjected to Blast
Loading
Fracture due to dynamic response
JONAS EKSTR ¨	OM
Department of Civil and Environmental Engineering
Division of Structural Engineering
CHALMERS UNIVERSITY OF TECHNOLOGY
G¨oteborg, Sweden 2015

-- 1 of 88 --



-- 2 of 88 --

THESIS FOR THE DEGREE OF LICENTIATE OF ENGINEERING
Concrete Structures Subjected to Blast Loading
Fracture due to dynamic response
JONAS EKSTR ¨OM
Department of Civil and Environmental Engineering
Division of Structural Engineering
CHALMERS UNIVERSITY OF TECHNOLOGY
G¨oteborg, Sweden 2015

-- 3 of 88 --

Concrete Structures Subjected to Blast Loading
Fracture due to dynamic response
JONAS EKSTR ¨OM
c	© JONAS EKSTR ¨OM, 2015
Thesis for the degree of Licentiate of Engineering 2015:04
ISSN 1652-9146
Department of Civil and Environmental Engineering
Division of Structural Engineering
Chalmers University of Technology
SE-412 96 G¨oteborg
Sweden
Telephone: +46 (0)31-772 1000
Chalmers Reproservice
G¨oteborg, Sweden 2015

-- 4 of 88 --

Concrete Structures Subjected to Blast Loading
Fracture due to dynamic response
Thesis for the degree of Licentiate of Engineering
JONAS EKSTR ¨OM
Department of Civil and Environmental Engineering
Division of Structural Engineering
Chalmers University of Technology
Abstract
The interest for building safety with regards to highly dynamic events such as close
by explosion has accelerated after the recent decades of terrorist attacks. The interest
has expanded from civil defence shelters and pure military targets to also include civil
buildings used for different civil functions. Due to the rather rapid shift of area of interest,
the general engineering community lack much of the knowledge and tools with which to
design and evaluate structures with respect to dynamic events with very fast transient
and high magnitude of peak loads. In this thesis, two studies of concrete structures are
presented. Both studies focused on describing concrete with a combined damage and
plasticity model. The aim was to study how different numerical models perform during
highly dynamic events. Two main studies are presented.
In the first study the response in a concrete wall subjected to shock wave blast, leading
to spalling failure was investigated. This situation is important since spalled-off fragments
in protective structures may cause severe injury to the persons or equipment it is supposed
to protect. Previous research indicates that spalling occurs when and where the tensile
strength of a strain-softening material like concrete is reached. By using a simple uni-axial
numerical model, this study shows that spalling instead occurs when the cyclic response
from a blast wave gradually increase the inelastic strains in the concrete. This means
that spalling takes place after several loading cycles and not necessarily at the depth
where tensile strength is firstly reached. Furthermore, the study shows that the cyclic
response in the material model used for numerical simulation has a decisive influence on
the position and extent of the resulting spalling crack.
In the second study the response of reinforced concrete structures subjected to blast
loads was investigated. Numerical models are used to evaluate the numerical response of a
simply supported reinforced concrete beam and a one-way supported slab with a combined
damage and plasticity constitutive model for concrete, CDPM2. Previous research has
shown that strain-rate de- pendent material parameters might be overestimated for higher
strain rate. In this study, these features are evaluated for reinforced concrete structures
where bending is the dominating response. The numerical analyses indicate that fracture
energy during tensile fracture and how this value is chosen have larger effects on the
deformations of the structure than whether or not the strain-rate dependency of the
material properties are taken into account. It is also concluded that mesh size and
modelling techniques may have a large impact on the resulting response of the structure
in the numerical analysis.
Keywords: concrete, blast load, numerical modelling, spalling, stain-softening, wave
propagation, transverse/reverse loading, dynamic response, cyclic crack propagation
i

-- 5 of 88 --

ii

-- 6 of 88 --

to My Sources of Inspiration
iii

-- 7 of 88 --

iv

-- 8 of 88 --

Preface
The work on this thesis was carried out between August 2012 and July 2015 at the
Department of Civil and Environmental Engineering, Division of Structural Engineering,
Concrete Structures at Chalmers University of Technology. The work was performed
within the research project entitled ”Blast and fragment impact: Reinforced and concrete
and fibre concrete structures”. The research project is a continuation of earlier work
on concrete structures subjected to severe dynamic loading conducted at Chalmers by
Morgan Johansson, Joosef Lepp¨anen and Ulrika Nystr¨om. The project is financially
sponsored by the Swedish Civil Contingencies Agency.
I would like to thank my supervisor and examiner, Associate Professor Mario Plos,
for his support and guidance. I would also like to thank my assistant supervisors, Assis-
tant Professor Rasmus Rempling, Adjuct Professor Morgan Johansson and Senior Lecturer
Joosef Lepp¨anen, for their invaluable input. Further, I would like to express my gratitude
to MScEng Bj¨orn Ekengren, the Swedish Civil Contingencies Agency, for his persistent
support and patience. I also want to thank Professor emeritus Kent Gylltoft, MScEng Rolf
Dalenius, the Swedish Fortifications Agency, PhD Ulrika Nystr¨om, VK Engineering and
Professor Karin Lundgren for their valuable contributions to the work in the project group.
I want to thank all my colleagues who have contributed to my development as an
engineer and as a researcher; especially H˚akan Lantz and Carlos Gil Berrocal.
Finally, I thank my friends and family. I would not have reached this point without you.
v

-- 9 of 88 --

vi

-- 10 of 88 --

Thesis
This thesis consists of an extended summary and the following appended papers:
Paper A J. Ekstr¨om, R. Rempling, and M. Plos. Spalling in Concrete Subjected to
Shock Wave Blast. Submitted to ”Engineering Structures”
Paper B
J. Ekstr¨om, R. Rempling, M. Plos, and M. Johansson. Finite Element
Analyses of Concrete Structures Subjected to Blast Loads with a Damage-
Plasticity based Material Model, CDPM2. To be submitted for international
journal
Author’s contribution to jointly written papers
The appended papers were prepared in collaboration with the co-authors. In the following,
the contribution of the author of this licentiate thesis to the appended papers is described.
Paper A Responsible for planning and writing the paper. Made numerical implementa-
tions and carried out numerical simulations.
Paper B Responsible for planning and writing the paper. Carried out the numerical
simulations and the evaluation of the the results.
vii

-- 11 of 88 --

Other publications related to the thesis
In addition to the appended papers, the author of this thesis has also contributed to the
following publications:
Ekstr¨om, J., Rempling, R., and Plos, M. (2014). “Influence of Strain Softening on Spalling
of Concrete due to Blast Load”. In: Proceedings of the XXII Nordic Concrete Research
Symposium. Ed. by The Nordic Concrete Federation. Vol. 2/2014. 50. Reykjavik,
Iceland: Norsk Betongforening, pp. 157–160.
viii

-- 12 of 88 --

Contents
Abstract i
Preface v
Thesis vii
Author’s contribution to jointly written papers vii
Other publications related to the thesis viii
Contents ix
I Extended Summary 1
1 Introduction 1
1.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.2 Purpose, aim and objectives of research . . . . . . . . . . . . . . . . . . . . . 1
1.3 Scientific approach and methodology . . . . . . . . . . . . . . . . . . . . . . . 2
1.4 Scope and limitations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
2 Loads due to blast and impact 3
2.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2.2 Blast wave in air . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2.3 Fragments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
3 Fracture due to blast and impact 7
3.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
3.2 Description of failures and what can cause them . . . . . . . . . . . . . . . . 7
3.2.1 Spalling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
3.2.2 Scabbing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
3.2.3 Flexural and shear failures . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
4 Numerical analyses of failure in concrete structures 11
4.1 Essential properties of concrete constitutive models . . . . . . . . . . . . . . . 11
4.2 Constitutive models for concrete fracture in tension . . . . . . . . . . . . . . 12
4.3 Evaluation of CDPM2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
5 Conclusions 17
References 18
ix

-- 13 of 88 --

x

-- 14 of 88 --

Part I
Extended Summary
1 Introduction
1.1 Background
For decades the focus of civil defence has been on civil defence shelters to withstand
the threat against warfare and to protect civilians. Latter years, the general focus has
often shifted towards the protection of specific targets which host important functions to
society. Direct attacks towards the civil population, such as terrorist attacks, also post a
more common threat today than for a few years ago. Due to the rather rapid shift of
area of interest, the general engineering community lack much of the knowledge and tools
to design and evaluate structures with respect to dynamic events with very fast transient
and high magnitude peak loads.
Most structural analysis approaches have been developed with different simplifications
and approximations, because of limitations in knowledge and to restrict the extent of
cases studied. When it comes to response of concrete structures due to highly dynamic
events, the load due to an explosion and the general response of statically loaded concrete
structures are relatively well-known. However, despite decades of research within the area,
many phenomena involved for the dynamic response of reinforced concrete structures are
not yet fully understood.
Numerical modelling of dynamic events has been more common in recent years and
is to a large extent treated as an available complement to physical testing. Even so, the
tools and techniques to evaluate structures with numerical models are in many respects
unexplored. Since some phenomena are not fully understood, it becomes rather compli-
cated to determine the needed properties of these numerical models.
1.2 Purpose, aim and objectives of research
The purpose of the research presented in this thesis is to study numerical approaches
involving highly dynamic events towards reinforced concrete structures. In the long-run,
the research intends to study how fibre concrete can be used in reinforced concrete struc-
tures to increase the ability of withstanding highly dynamic events, such as explosions
within the civil community. In order to do so, understanding of the underlying phenomena
during highly dynamic events when material fracture appears in concrete are prerequisite.
The aim of the research presented in this thesis is to study how dynamic responses
, Civil and Environmental Engineering 1

-- 15 of 88 --

of concrete structures subjected to highly intense blast loads can be modelled numerically.
Both simplified models and more advanced numerical models were used to investigate
some of the effects of different material properties of concrete and reinforced concrete
structures. Furthermore, the aim was to relate material fractures in concrete to design
methods that can increase the safety of concrete structures, both for new designs and to
strengthen existing structures.
The objectives have been to evaluate numerical approaches based on a combined damage
and plasticity model to describe the constitutive laws of concrete materials. Furthermore,
to describe the influence of constitutive laws on the response of brittle materials, such as
plain concrete, subjected to impulse loading with regards to spalling.
1.3 Scientific approach and methodology
The chosen scientific approach consists of literature reviews combined with theoretical
modelling benchmarked with numerical models. The numerical models aim to provide a
simplified approximation of real behaviours and, thus, support the knowledge creation of
the underlying phenomena. Numerical models can be motivated by relatively low costs
compared to experiments. They also provide the possibility of studying the course of
event for any given sequence in time and to study responses which can be difficult to
measure during experiments. By studying structural responses numerically, it is also
possible to extract results that can be important in order to identify different properties
of a real structure or specimen in an experiment.
The studies that were carried out in this thesis are in general based on constitutive
models where concrete is represented by a combination of damage and plasticity. The
choice to represent concrete during highly dynamic events through the use of a damage-
plasticity model is a continuation of previous research at Chalmers the University of
Technology, Nystr¨om (2013), and the University of Glasgow, Grassl et al. (2013), and
has been shown to successfully describe loading and unloading of concrete with large
confinement effects and for the propagation of shock waves.
1.4 Scope and limitations
The thesis focuses on normal concrete and reinforced concrete. One of the studies
investigates the development of spalling damage in a concrete wall and the influence of
different material responses of the concrete during non-monotonic loading and unloading.
The second study investigates the performance of the material model CDPM2, Grassl
et al. (2013); Nystr¨om (2013), which is a combined damage and plasticity model. Both
studies are numerical studies. For the first study, investigating spalling, experimental
data that can be used to verify the hypothesis have not been found. The second study,
investigating the performance of CDPM2, is a numerical study of experiments designed
and performed by other researchers. The tests were not designed to be primarily used to
evaluate the response of a specific material model, but rather numerical models in general.
2 , Civil and Environmental Engineering

-- 16 of 88 --

2 Loads due to blast and impact
2.1 Overview
Loads are usually divided into static loads, quasi static loads and dynamic loads based
on the time duration of an action. However, dynamic loads span over a range of time
intervals. Different time frames yield different types of responses, Gebbeken, Greulich, and
a. Pietzsch (2001), both for the material response and the response of the whole structure
and, thus, create different demands for the analytical routines and material representation.
Dynamic response can occur within different time frames. For example, when oscil-
lation occurs in a structure, the time duration can be seconds or parts of seconds. During
this time frame, the deformation of the structure changes and, thus, the internal and
external forces for the structure change. If a moving object hits a structure, the response
will depend on both the velocity and the material properties of the two bodies, Lepp¨anen
(2012). When a high velocity impact between a small object and e.g. a beam occurs, such
as a fragment impact, local effects in the form of damage around the zone of impact will de-
velop within a much shorter time interval than the global bending deformation of the beam.
When the type of loading condition is classified based on time intervals, a common
measure used is the strain-rate caused at different martial points in the structure. By
measuring the change in strains per time unit it is possible to separate long time intervals
from short time intervals. In Figure 2.1 different engineering applications with regards to
strain-rates are shown. The picture is taken from Nystr¨om (2013) and is based on a variety
of publications: Bischoff and Perry (1991); Field et al. (2004); Gebbeken and Ruppert
(2000); Ramesh (2008); Zukas (2004). In this thesis responses of concrete structures due to
blast waves from the detonation of explosives or the simulation of such event are studied.
This corresponds to the ”blast and impact” region in Figure 2.1.
Figure 2.1: Strain-rates and associated problem aspects taken from Nystr¨om (2013)
, Civil and Environmental Engineering 3

-- 17 of 88 --

2.2 Blast wave in air
When a highly explosive substance detonates in the open air, a sudden release of energy
occurs. An explosion can be characterised as a sudden volumetric expansion of matter due
to physical or chemical change of state. The change of state results in a sudden release
of potential energy to mechanical work. For a detonation of an explosive substance the
expansion of gases creates an overpressure which generates mechanical work when the
surrounding air is forced away. The highly compressed air surrounding the detonation
creates a blast wave that propagates with super sonic speed from the epicentre of
the explosion. Directly behind the front of the blast wave is a region where pressure,
temperature, density and particle velocity are distinctly higher than the surrounding air.
When the blast wave moves away, these properties rather rapidly return to their original
states. For a fully developed blast wave, the pressure rises from the normal atmospheric
pressure to a peak pressure more or less instantaneously. The time for the pressure to
rise is therefore generally considered to be a singular jump in time. The pressure then
decreases exponentially until an under-pressure is reached that returns to the original
atmospheric pressure; see Figure 2.2. In structural analyses and evaluations, the blast
wave is usually simplified and only the overpressure is considered. Thus, no negative
pressure is applied to the structure. Furthermore, the exponential pressure decreases after
the shock wave has reached the structure and can also be simplified to a linear decrease,
Johansson (2012).
Figure 2.2: Principal pressure-time relation for a blast wave in air
2.3 Fragments
The detonation of a bomb will create not only a blast wave but will also send away
fragments, Lepp¨anen (2004). The detonation of the explosives will rip the casing of the
bomb into small pieces creating a cluster of fragments, Janzon (1978). The fragments
will represent mass and velocity and can add a substantial load to a structure. A blast
wave and a cluster of fragments can reach a structure at different time intervals because
4 , Civil and Environmental Engineering

-- 18 of 88 --

of differences in which speed they travel, Nystr¨om and Gylltoft (2009). Even though
the actual impulse of a cluster of fragments might be distinctly smaller than from the
blast wave, the damage to the surface of a structure can be substantial, Nystr¨om and
Gylltoft (2009). Furthermore, the damage to the surface may lead to a loss of capacity
and a stiffness influencing the overall structural response. A study of the combination of
fragments and blast wave showed a synergy effect, Nystr¨om (2008). It was established that
the combination of fragments and blast wave created a larger deformation than if the de-
formations due to the fragments alone were added to the deformation due to the blast wave.
An important difference between the stress response in a structure due to a blast load
and a cluster of fragments is that the stress towards the surface of the structure is more
or less independent of the properties of the structure for a blast wave. For the cluster
of fragments, the material properties of the fragments and the material properties of
the structure will affect the stress wave that will propagate through the structure after
the impact. The velocity of the fragments will be important for the magnitude of the
stress wave but the stiffness of the fragments as well as the stiffness of the material in the
structure will also influence both the magnitude of the stress wave and the duration of the
stress wave, Lepp¨anen (2004); Lepp¨anen (2012). The effect of the material properties of
fragments can be indirectly studied by looking at the response of flyer plate impact tests,
Grady (1996); Gebbeken, Greulich, and A. Pietzsch (2006); Riedel et al. (2008), where
the material properties of the materials involved are used to calculate the material states.
, Civil and Environmental Engineering 5

-- 19 of 88 --

6 , Civil and Environmental Engineering

-- 20 of 88 --

3 Fracture due to blast and impact
3.1 Overview
A structure that experiences loading due to an explosion undergoes, in general, different
reactions at various stages of the loading and unloading. The most obvious differences
are responses related to local and global response, see Figure 3.1. However, for dynamic
loading another important factor is the stress of the structure during different time
intervals. Global failures can, in general, be determined based on the total energy or work
applied to the structure from the load compared to the ability of the structure to absorb
externally applied energy, Johansson and Laine (2012).
Figure 3.1: Local and global response of a structure structural member and of an entire
structure
Other fractures are determined by stresses caused by the change in applied load over time,
δload
δt , Meyers (1994). Thus, the total intensity of the load is not necessarily critical for
initiating a failure process. If a certain load condition is critical for a specific fracture,
the corresponding time interval when that fracture occurs has to be studied. The time
frame for a local failure, such as spalling or scabbing, is shorter than for a global failure,
such as a flexural failure or shear failure.
3.2 Description of failures and what can cause them
In the case of dynamic load conditions, different failures can occur in a structure compared
to static load conditions. In the following section(s), the general conditions and related
time intervals for different dynamic failures are presented. Dynamic failures are named
differently in various literature. Here, the names of the fractures correspond to U.S. Army
Corps of Engineers et al. (2008).
, Civil and Environmental Engineering 7

-- 21 of 88 --

3.2.1 Spalling
When a wall or a slab is subjected to a highly intense blast wave or a high-speed object,
such as a fragment or projectile, a compression wave may occur inside the structure.
When a compression wave reaches the free edge at the back side of the structure a stress
reflection occurs. This reflection can also be seen as a release wave due to the state of
equilibrium; see Paper A. When a release wave starts to propagate back towards the
loaded side of the structure, the stress state at the boundary will be zero. However, if the
compression stress further into the structure has decreased due to the characteristic of
the applied load, the release wave can create stress states made up of tensile stresses. If
these tensile stresses are large enough they can result in a crack initiation in the structure,
Mcvay (1988); Meyers (1994). If the applied load is intense enough, fragments of the
structure can spall off at the back side of the structure which is not directly subjected to
the load, see Figure. In a brittle material, such as concrete, spalling can occur more easily
due to the large difference between compression and tensile capacity. In Paper A, spalling
in concrete subjected to a shock wave blast was studied for a simplified one-dimensional
specimen. It was shown that for certain cases of spalling, the cracks can develop during
multiple cycles of stress waves rather than instantly as soon as the tensile strength is
reached, which is generally argued by Mcvay (1988); Meyers (1994); Lepp¨anen (2012).
If this type of response is aimed at describing in numerical models, the constitutive
laws describing the concrete become important with regards to non-monotonic crack
propagation.
3.2.2 Scabbing
Spalling is generally associated with close-in detonation or clusters of fragments. A close-in
detonation can create pressures strong enough to cause crushing and cratering on the
loaded side of the concrete. Since the damage is caused by close-in detonation, the pressure
confinement effects increase when the pressure propagates further into the structure but
the pressure will also disperse when the wave propagates. Thus, the extension and depth
of the cratering is usually limited.
3.2.3 Flexural and shear failures
The flexural response of a reinforced concrete structure subjected to dynamic loading is
similar to the flexural response of a statically loaded structure. Failure modes are either
crushing of the concrete or yielding of the reinforcement. Furthermore, different anchorage
failures and support slipping can occur. Shear failure can occur in a similar manner as
for statically loaded structures. However, for very intense loads shear failure can occur in
earlier stages of the evolution of the deflections. When the load is first applied, a beam
or a slab has a rigid body motion before the support forces develop. The internal forces
in the structure occur first when the support forces appear. Thus, bending moments
and shear forces emerge from the supports and propagate from there, Andersson and
Karlsson (2012). Highly intense loads can therefore result in stresses on the structure
closer to the supports compared to the same structure subjected to static loads. Direct
8 , Civil and Environmental Engineering

-- 22 of 88 --

shear, Krauthammer (2008), is a failure that may appear if the stresses in the structure
are great early during the structural response.
, Civil and Environmental Engineering 9

-- 23 of 88 --

10 , Civil and Environmental Engineering

-- 24 of 88 --

4 Numerical analyses of failure in concrete
structures
When a material like concrete is to be modelled through numerical analyses a number
of approaches to describe material fracture are possible, such as, discrete crack models,
non-local crack models and smeared crack models, Jir´asek (2010). Any chosen approach
has advantages and disadvantages. The work carried out in this thesis is based on a
smeared crack approach where the properties of the inelastic deformations of concrete is
smeared out over a band width. The material model studied in detail in this thesis was
developed during a previous PhD project by Nystr¨om (2013).
4.1 Essential properties of concrete constitutive mod-
els
Depending on the aim of a structural model and the loading condition, the demands on
the utilized material models vary. When the response of, for instance, concrete is studied
during static conditions, there are various aspects that need to be considered. Different
stress states will yield different demands on the complexity of the material model. If a
material model is simplified, it also, becomes more limited in terms of general applicability.
In dynamic response there are aspects of material response that are unique or of greater
importance compared to static conditions. One of the unique properties, only implicitly
considered in dynamics, is how the material strength depends on the rate of applied
stress, generally measured as the strain-rate, δε
δt . Other features which are less common
in static evaluation include non-linear compaction under hydrostatic compression and
residual strength after extensive material damage. These final two properties are more
likely to occur in fast dynamic events because of inertia effects creating local confinements
during very short time intervals. There are many different approaches to describe these
responses with the help of a constitutive model. This thesis is a continuation of a previous
project where a combined damage and plasticity model was developed in order to describe
these properties, Nystr¨om (2013); Grassl et al. (2013). The evaluation of properties is
presented in Nystr¨om (2013) and in Figure 4.1 where the most important features of a
material model describing concrete are placed at the base of the pyramid and in decreasing
importance towards the top.
In Nystr¨om (2013) strain rate dependency of strength, post-peak softening, non-linear
compaction curve for high pressures and residual strength in confined compression were
concluded to be the most important features of the response of concrete for dynamic loads.
Post-peak softening is a material property which is not unique to dynamic conditions.
For multi-axial loading, pressure-sensitive strength is also considered to be a very general
property of concrete.
Strain-rate dependent strength, however, is an effect which only impacts the mate-
, Civil and Environmental Engineering 11

-- 25 of 88 --

Figure 4.1: Assessment of properties during development of material model, from
Nystr¨om (2013)
rial properties during dynamic conditions. The dynamic tensile strength has been shown
to be as high as eight times the tensile strength for a static load condition, Malvar and
Ross (1998). In compression, the observed dynamic strength is about 2,5 times the static
strength, Bischoff and Perry (1991).
Residual strength in confined compression and the non-linear compaction curve for
high confinement pressure, Williams et al. (2006), are aspects of the response which occur
both during dynamic and static conditions. However, high confinement pressures are
difficult to create and maintain during static conditions since the confinement requires
externally applied loads. For dynamics, the confinement can be created due to inertia
effects in the material where a high pressure is confined by the surrounding material.
4.2 Constitutive models for concrete fracture in ten-
sion
Concrete, with its very different properties depending on the stress state, needs rather
complex constitutive laws to capture the response for an arbitrary stress state. In many
applications, the focus lies on the ability to capture a specific response, which allows for
reducing the complexity of the material model.
If a concrete specimen is loaded in monotonic tension under static condition, the tensile
stress will reach a peak value from which the stress gradually decreases with increasing
deformation. This material softening develops more or less exponentially but in most
applications, it is considered sufficient to use a bi-linear softening law, Gylltoft (1983), or
even a linear softening law.
In Paper A, spalling in a concrete wall subjected to a close-by explosion is studied.
In this paper, the tensile response of the concrete is modelled according to three different
constitutive laws, a plasticity model, a damage model and a combined damage and
plasticity model. All of them use a linear softening when cracks are developed in the
concrete. When a crack is forming, even though the stress-strain response is similar,
12 , Civil and Environmental Engineering

-- 26 of 88 --

the structural response becomes different. A plasticity model and a damage model can
describe the same type of softening in the material. However, in a plasticity model, the
elastic response upon unloading will be based on the original stiffness of the material
whereas, for a damage model, the stiffness will be reduced. This means that the final
structural response can differ if, e.g., a non-monotonic response takes place, as shown in
Paper A. Since the concrete undergoes multiple stages of compression and tension, see
Figure 4.2, the response during the transition will affect the result.
0 	1 	2 	3
2
0
−2
−4
0
0
Strain [10−3]
Stress [MPa]
(a) Plasticity
0 	1 	2 	3
2
0
−2
−4
0
0
Strain [10−3]
Stress [MPa]
 (b) Damage
0 	1 	2 	3
2
0
−2
−4
0
0
Strain [10−3]
Stress [MPa]
 (c) Damage-Plasticity
Figure 4.2: Stress-strain relation for cyclic tensile and compressive loading of concrete for
(a) aplasticity model (b) a damage model (c) a damage-plasticity model
4.3 Evaluation of CDPM2
One of the aims of this study has been to evaluate and confirm the potential areas of
development for the new material model CDPM2 when used in dynamic models and to
identify possible areas of improvements. In Nystr¨om (2013), the following features were
suggested as potential areas of improvement:
• Increased material stiffness after non-linear compaction
• Avoiding of overestimated fracture energy due to double strain-rate dependency
• Reduction of the strain-rate dependency for compressive strength for modelling with
solid elements at high strain-rates
The aim was to study these features in Paper B. The conclusions from the study is
summarised below:
Increased material stiffness after non-linear compaction
The constitutive laws for CDPM2 do not affect the material stiffness after volumetric
compaction, i.e., when the concrete is compressed in a way so that the pore system
collapses and a more solid material is created. This feature of the concrete material is
relevant when a structure is hit by a high speed projectile or fragment. It was shown in
Nystr¨om (2013) that CDPM2 had too low a stiffness for hydrostatic pressures of 2 GPa
, Civil and Environmental Engineering 13

-- 27 of 88 --

and higher. In Paper B structures subjected to blast loads resulted in flexural deflections
was studied and for that type of response, such high pressures were not reached.
Avoiding of overestimated fracture energy due to double strain
rate dependency
The constitutive laws that treat the tensile strength and the strain softening branch in
tension results in an increased tensile strength and an equally increase of the maximum
crack opening when zero stress is reached, see Nystr¨om (2013) and Paper B. Since both
the strength and the strain that represent the maximum crack opening are increased, the
dynamic increase factor for the fracture energy, DIFGF , is equal to the dynamic increase
factor for the strength squared, DIF 2
fct . The available studies of how the strain-rate
influence the fracture energy are limited but indicate that the dynamic increase factor
for fracture energy is proportional to the rate effect on the tensile strength, Weerheijm
and Van Doormaal (2007). In Weerheijm and Van Doormaal (2007), it is also concluded
that the maximum crack opening remain constant. The study in Paper B shows that a
variation of input values for the fracture energy results in a large variation of deflection for
beams and plates. Therefore, an overestimation of the strain-rate effect for the fracture
energy can be expected to result in an underestimation of deformation similar to those
seen in Paper B.
Reduction of the strain rate dependency for compressive strength
for modelling with solid elements at high strain rates
The strain-rate dependency of the material strength is, in CDPM2, treated by using
a magnification factor for the concrete strength based on the strain rate of the total
strain, Nystr¨om (2013). For tension, the rate factor is based on the expression proposed
by Malvar and Ross (1998) and for compression, the expression proposed in fib Model
Code for Concrete Structures 2010 (2013) is used. However, in Nystr¨om (2013), it was
shown that the expression proposed in fib Model Code for Concrete Structures 2010
(2013), combined with 3D continuum elements, resulted in an overestimation of the rate
effects for the compression strength. Paper B studied the flexural response of a beam
and a plate with and without the strain rate effect turned on for CDPM2. It was shown
that the strain rate effect has a significant influence on the deflection of the structure.
However, how much of that effect that comes from the overestimation of compression
strength and how much that comes from the overestimation of the fracture energy could
not be determined in the study. However, to treat the element size dependency affecting
the compression strength, shown in Nystr¨om (2013), the expression used to describe the
strain rate dependent compression strength should be updated so that the inertia effects
are omitted from the constitutive laws for 3D continuum elements.
Strain softening for compression failure
Concrete failure in uniaxial compression is reached after a softening, Karsan and Jirsan
(1969). In a smeared crack approach, the localisation zone where the inelastic deformation
14 , Civil and Environmental Engineering

-- 28 of 88 --

takes place needs to be defined in order to obtain a correct stress-strain relation, Jir´asek
(2010). The implementation of CDPM2 defines a stress-strain relation based on a pre-
specified element size, and the ductility measure, Grassl et al. (2013). In Paper B, problems
with convergence occurred for the slab analyses. It was believed to be due to the description
of the softening in compression. To treat this, elastic elements were used at the concrete
surface by the supports and at the top of the slab where the plastic hinge occurred.
, Civil and Environmental Engineering 15

-- 29 of 88 --

16 , Civil and Environmental Engineering

-- 30 of 88 --

5 Conclusions
Two studies have been presented in this theses. The first in Paper A, where spalling in a
concrete specimen due to a blast wave was studied. The assumption that the damage
due to the tensile stress from the release wave develops instantaneous within a time
singularity was shown to be inaccurate. During the development of the fracture, e.i. the
crack propagation, the release wave continued to propagate past the point of first crack
initiation. In the studied case where the length of the blast wave was much longer than
the studied concrete specimen, the crack did not form until multiple compression and
release waves had passed. It was also shown that the choice of constitutive model to
describe the tensile fracture affected the response and the propagation of blast wave. It is
therefore concluded that for some case of spalling, the choice of constitutive model for
concrete tensile fracture can be crucial.
In the second study, presented in Paper B, the performance of the new material model,
CDPM2, based on combined damage and plasticity, was investigated for blast loaded
beam and slab specimens. Some of the limitations presented in Nystr¨om (2013) and how
they affected the response of beams and slabs were investigated. It was concluded that
the strain rate dependency of strength and fracture energy of the concrete affected the
response of the structures. It was also shown that the chosen fracture energy influenced
the deflection of the structures more than if strain-rate dependent strength was included
for the concrete. Thus, it was concluded that the strain-rate dependency of the fracture
energy must be described correctly. The available research with regard to strain rate
dependency for the fracture energy, Weerheijm and Van Doormaal (2007); Schuler et al.
(2006), suggested a lower increase of fracture energy due to increased strain-rates compared
to tensile strength. The constitutive laws in CDPM2 should, thus, be adjusted to better
fit available data.
Finally, in Paper B, convergence problems occurred in areas of large compression and to
some extent distortion for the slab analyses, e.i. around the support and at the top of the
slab. To treat this in the study, elastic elements were used in the outer layer of the slab
in these areas, see Paper B. It was assumed that the convergence problems were due to
the description of the strain softening for CDPM2 in compression and that the concrete
showed a too brittle behaviour. Therefore, the localisation length should be possible to
define for an analysis in the same way as for tensile fracture.
, Civil and Environmental Engineering 17

-- 31 of 88 --

18 , Civil and Environmental Engineering

-- 32 of 88 --

References
Andersson, S. and Karlsson, H. (2012). “Structural response of reinforced concrete beams
subjected to explosions: Time dependent transformation factors, support reactions
and distribution of section forces”. Master Thesis. Chalmers University of Technology,
p. 145.
Bischoff, P. H. and Perry, S. H. (Nov. 1991). “Compressive behaviour of concrete at high
strain rates”. In: Materials and Structures 24.6, pp. 425–450. issn: 0025-5432. doi:
10.1007/BF02472016.
Ekstr¨om, J., Rempling, R., and Plos, M. Spalling in Concrete Subjected to Shock Wave
Blast. Submitted to ”Engineering Structures”.
Ekstr¨om, J., Rempling, R., Plos, M., and Johansson, M. Finite Element Analyses of
Concrete Structures Subjected to Blast Loads with a Damage-Plasticity based Material
Model, CDPM2. To be submitted for international journal.
fib Model Code for Concrete Structures 2010 (Oct. 2013). Weinheim, Germany: Wiley-VCH
Verlag GmbH & Co. KGaA. isbn: 9783433604090. doi: 10.1002/9783433604090.
Field, J. E., Walley, S. M., Proud, W. G., Goldrein, H. T., and Siviour, C. R. (2004).
“Review of experimental techniques for high rate deformation and shock studies”. In:
International Journal of Impact Engineering. Vol. 30. 7, pp. 725–775. isbn: 0734-743X.
doi: 10.1016/j.ijimpeng.2004.03.005.
Gebbeken, N., Greulich, S., and Pietzsch, A. (Dec. 2006). “Hugoniot properties for
concrete determined by full-scale detonation experiments and flyer-plate-impact tests”.
In: International Journal of Impact Engineering 32.12, pp. 2017–2031. issn: 0734743X.
doi: 10.1016/j.ijimpeng.2005.08.003.
Gebbeken, N., Greulich, S., and Pietzsch, a. (2001). “Performance of Concrete Based
Building Materials Against Blast and Impact 1 Introduction”. In: JANUARY.
Gebbeken, N. and Ruppert, M. (2000). “A new material model for concrete in high-dynamic
hydrocode simulations”. In: 70.March 1999.
Grady, D. (1996). “Shock Equation of State Properties of Concrete”. In: International
conference on structures under shock and . . . Pp. 1–10.
Grassl, P., Xenos, D., Nystr¨om, U., Rempling, R., and Gylltoft, K. (Nov. 2013). “CDPM2:
A damage-plasticity approach to modelling the failure of concrete”. In: International
Journal of Solids and Structures 50.24, pp. 3805–3816. issn: 00207683. doi: 10.1016/
j.ijsolstr.2013.07.008.
Gylltoft, K. (1983). “Fracture mechanics models for fatigue in concrete structures”. PhD
thesis. Lule˚aUniversity of Technology, Sweden, p. 210.
Janzon, B. (1978). Grundl¨aggande stridsdelsfysik. Tech. rep. Stockholm, Sweden, p. 164.
Jir´asek, M. (2010). Modeling of Localized Inelastic Deformation. 7th ed. Czech Technical
University, Prague.
Johansson, M. (2012). Luftst¨otv˚ag. Karlstad, Sweden: Myndigheten f¨or samh¨allsskydd och
beredskap, p. 61. isbn: 9789173832656.
Johansson, M. and Laine, L. (2012). Bebyggelsens motst˚andsf¨orm˚aga mot extrem dynamisk
belastning, Del 3 – Kapacitet hos byggnader. Karlstad, Sweden: Myndigheten f¨or
samh¨allsskydd och beredskap, p. 100.
, Civil and Environmental Engineering 19

-- 33 of 88 --

Karsan, I. D. and Jirsan, J. O. (1969). “Behavior of Concrete Under Compressive Loadings”.
In: Journal of the Structural Division 95.ST12, pp. 2543–2563.
Krauthammer, T. (2008). Modern Protective Structures. Civil and environmental engi-
neering. Taylor & Francis. isbn: 9781420015423.
Lepp¨anen, J. (2004). Concrete Structures Subjected to Fragment Impacts. isbn: 9172915110.
— (2012). Splitterverkan. Karlstad, Sweden: Myndigheten f¨or samh¨allsskydd och bered-
skap, p. 134. isbn: 9789173831888.
Malvar, L. J. and Ross, C. (1998). “Review of Strain Rate Effects for Concrete in Tension”.
In: ACI Materials Journal 95.6. issn: 0889-325X. doi: 10.14359/418.
Mcvay, M. K. (1988). Spall Damage of Concrete Structures. Tech. rep. Vicksburg, Missis-
sippi: Structures Laboratory, Department of the Army, Waterways Experiment Station,
Corps of Engineers, p. 175.
Meyers, M. A. (1994). Dynamic Behavior of Materials. Wiley-Interscience publication.
New York , NY: John Wiley & Sons, Inc. isbn: 9780471582625.
Nystr¨om, U. (2008). “Concrete structures subjected to blast and fragment impacts :
numerical simulations of reinforced and fibre-reinforced concrete”. Licentiate Thesis.
Chalmers University of Technology, G¨oteborg, Sweden, p. 72.
— (2013). “Modelling of Concrete Structures Subjected to Blast and Fragment Load-
ing”. PhD thesis. Chalmers University of Technology, G¨oteborg, Sweden, p. 83. isbn:
9789173858052.
Nystr¨om, U. and Gylltoft, K. (Aug. 2009). “Numerical studies of the combined effects of
blast and fragment loading”. In: International Journal of Impact Engineering 36.8,
pp. 995–1005. issn: 0734743X. doi: 10.1016/j.ijimpeng.2009.02.008.
Ramesh, K. (2008). “High rates and impact experiments”. In: Springer handbook of
experimental solid mechanics. New York , NY, USA: Springer, pp. 929–959.
Riedel, W., Wicklein, M., and Thoma, K. (Mar. 2008). “Shock properties of conven-
tional and high strength concrete: Experimental and mesomechanical analysis”. In:
International Journal of Impact Engineering 35.3, pp. 155–171. issn: 0734743X. doi:
10.1016/j.ijimpeng.2007.02.001.
Schuler, H., Mayrhofer, C., and Thoma, K. (Oct. 2006). “Spall experiments for the
measurement of the tensile strength and fracture energy of concrete at high strain
rates”. In: International Journal of Impact Engineering 32.10, pp. 1635–1650. issn:
0734743X. doi: 10.1016/j.ijimpeng.2005.01.010.
U.S. Army Corps of Engineers, Naval Facilities Engineering Command, and Air Force
Civil Engineer Support Agency (Apr. 2008). UFC 3-340-02 Structures to Resist the
Effects of Accidental Explosions. Tech. rep. May 2005, p. 1867.
Weerheijm, J. and Van Doormaal, J. (Mar. 2007). “Tensile failure of concrete at high
loading rates: New test data on strength and fracture energy from instrumented
spalling tests”. In: International Journal of Impact Engineering 34.3, pp. 609–626.
issn: 0734743X. doi: 10.1016/j.ijimpeng.2006.01.005.
Williams, E., Akers, S. a., and Reed, P. a. (2006). “Laboratory Characterization of SAM-35
Concrete Geotechnical and Structures”. In: September.
Zukas, J. (2004). Introduction to Hydrocodes. Studies in Applied Mechanics. Elsevier
Science. isbn: 9780080535012.
20 , Civil and Environmental Engineering

-- 34 of 88 --

Appended Papers A–B

-- 35 of 88 --



-- 36 of 88 --

Paper A
Spalling in Concrete Subjected to Shock Wave Blast
J. Ekstrom, R. Rempling, M. Plos.
Submitted to ”Engineering Structures”.

-- 37 of 88 --



-- 38 of 88 --

Spalling in Concrete Subjected to Shock Wave Blast
Jonas Ekstr¨oma,∗, Rasmus Remplinga, Mario Plosa
aDepartment of Civil and Environmental Engineering, Concrete Structures, Chalmers University of
Technology, SE-412 96 G¨oteborg, Sweden
Abstract
This paper studies the response in a concrete wall subjected to shock wave blast, leading
to spalling failure. This situation is important since spalled-off fragments in protective
structures may cause severe injury to the persons or equipment it is supposed to protect.
Previous research indicates that spalling occurs when and where the tensile strength of a
strain-softening material like concrete is reached. By using a simple uni-axial numerical
model, this study shows that spalling instead occurs when the cyclic response from a blast
wave gradually increase the inelastic strains in the concrete. This means that spalling takes
place after several loading cycles and not necessarily at the depth where tensile strength
is firstly reached. Furthermore, the study shows that the cyclic response in the material
model used for numerical simulation has a decisive influence on the position and extent of
the resulting spalling crack.
Keywords: Spalling, stain-softening, wave propagation, concrete, cyclic response,
transverse/reverse loading, dynamic response, cyclic crack propagation
1. Introduction
1.1. Background
In society, there is a certain need of preparedness for different emergency situations, such
as unprovoked explosions within the urban community or acts of war. In these situations,
important buildings, such as civil defence shelters and protective structures are fundamental
to our readiness. In Sweden, the building stock is ageing and the focus is upon maintaining
existing buildings rather than demolishing and rebuilding them. Therefore, the ability to
evaluate and strengthen existing buildings exposed to new demands is of major importance.
A structure can experience different types of load effects depending on the size and
position of an explosion. During shock dynamics - such as blast and impact loading - the
time frame during which the structural response takes place is relatively brief. In structural
evaluations related to static conditions, the time frame from unloaded structure to fully
loaded structure can span over a few seconds, i.e. short term load, and up to hours or
∗Corresponding author. Tel: +46 31 772 2250
Email address: jonas.ekstrom@chalmers.se (Jonas Ekstr¨om )
Preprint submitted to Engineering Structures 	December 2014

-- 39 of 88 --

years, i.e. intermediate and long term load. For shock dynamics, the time duration from the
load origin to the peak stress of the structure can be as brief as a fraction of a millisecond
[1, 2]. During this time span, the structural response differs greatly from a static load case
and evaluation procedures used for static conditions are in many cases invalid [3]. Fracture
modes which never occur for a static load can turn out to be the most critical response [4, 5].
However, in both static and dynamic response, similar structural and material properties
are considered favourable, such as increased ductility, both in terms of structural response
[6] and material response. The rationale for this is that a high ability to withstand large
deformations can give the structure a fine ability to redistribute forces and for dynamic loads
to absorb the high energy content of the load as well.
Concrete is a material which undergoes softening during fracture, both in compression
[7] and in tension [8]. A common way by which the ductility may be increased, compared
to plain concrete, is to add fibres so that the energy dissipation during fracture of the
material increases [9]. For this reason, it may be argued that fibre reinforced concrete, when
used in structures, provides an increased ability to withstand high dynamic loads compared
to a structure designed with plain concrete. Many experiments and numerical analyses
[10, 11, 12, 13] indicates that structures of fibre reinforced concrete have a higher resistance
to damage critical to the internal function of individuals, such as pieces of concrete thrown
into the interior of the protective structure. The latter phenomena of concrete failure, with
cracks parallel to the surface, is called spalling [14, 15, 16].
Numerical models can be powerful tools to understand the behaviour of a structure
subjected to high dynamic loads. Different parameters of the load, the geometry and the
material can be evaluated and the structural behaviour can be studied from the time the load
is applied until the final state of the structural response. For comparison, for experimental
studies the final stage of the response is usually the only state which can be studied in detail.
Hence, by modelling experiments, a better understanding of the entire response sequence
can be achieved.
1.2. Problem identification
In order to protect the inhabitants of a building from an explosion, it is important for the
material not to spall when subjected to a blast or fragment load. Spalling can occur when a
compression wave with a negative pressure-time gradient reaches a free surface from where a
release wave will start to propagate in the opposite direction [14, 15, 16]. The pressure-time
gradient of the applied load will cause a tensile stress when the release wave propagates back
into the structure. If the tensile stress were to reach the tensile capacity, damage would be
initiated. Earlier studies have assumed that spalling occurs when the tensile capacity is
reached, e.g. [14, 15]. The stress state in a wall where a plain pressure wave with a linearly
decreasing pressure has propagated to the unloaded side is illustrated in Fig. 1. In the same
figure, the stress state is shown when the release wave that propagates back towards the
loaded side has reached a point where a tensile stress equal to the tensile strength has been
reached .
The approach assumes that a fully open crack in the material is created during the stress-
time singularity which defines the pressure and release waves when the tensile capacity is
A-2

-- 40 of 88 --

reached. The assumption that a fully opened crack can be created during this singularity
was supported in a study of wave propagation in strain-softening materials [17]. However,
for a strain-softening material the momentary drop in tensile stress in the crack means that
the deformation discontinuity, i.e. the crack, is created during a time singularity. Thus, the
energy within the stress wave must be infinite. Since the pressure peak and, thereby, energy
of the pressure wave is finite, the crack cannot open during the time singularity. In fact,
a crack can only be initiated during the singularity but the crack can only develop during
the time after the wave has passed the material point. To achieve the response described
in [14, 15], the crack initiation and the development of the crack needs to be neglected.
Therefore, this approach cannot consider the effects of the material ductility. Instead, using
this approach, varying ductility of the material will predict the same response. Thus, a
design using a more ductile material, such as fibre reinforced concrete, will not be favourable
compared to a brittle material, such as ordinary plain concrete, if the material were to
undergo strain softening. However, this is in general not the conclusion from experiments
where structures with fibre concrete experience less damage compared to the same structure
with plain concrete [10, 12].
(a) 	(b)
Figure 1: Illustration of (a) the applied pressure wave towards the left edge of the wall and (b) the stress
distribution through the thickness of the wall when the pressure wave reaches the unloaded right edge of
the wall (above) and at crack initiation (below).
A-3

-- 41 of 88 --

1.3. Aim and objectives
The aim of the study was to present how material mechanisms influence the crack prop-
agation in brittle material subjected to an impulse load which result in spalling damages.
The objectives were to:
• identify the general response of crack-softening materials, such as concrete, with regard
to crack propagation during spalling attributable to impulse loading,
• investigate the effect of material strength and crack-softening during the fracture pro-
cess in brittle crack-softening materials according to the brittle crack spalling approach
described in [14, 15],
• present the effects of using a plasticity model, a damage model, and a combined damage
and plasticity model to describe the material response of spalling concrete,
• identify important properties of the constitutive models used to represent a material
which aims to describe spalling phenomena in brittle materials such as concrete.
1.4. Method
The analytical solution to crack initiation for spalling damage in a crack-softening ma-
terial was studied for a one-dimensional wave propagation. The effect of including the
crack-softening, i.e., the fracture energy was investigated, thus, the fracture was not allowed
to emerge within a defined singularity. Furthermore, the crack-softening influences on crack
propagation and the development of stress waves in the structure were studied with the help
of this approach.
A one-dimensional numerical model for uniaxial response was developed to study the
effect of strain localisation and the nonlinear non-monotonic material response for a section
of a concrete wall subjected to blast waves. Different types of models were used to represent
the softening of the material and to study the importance of choosing a correct representation
of the non-monotonic material response during crack-softening. The crack-softening was
represented by a strain-softening approach [18]. The crack propagation and the position of
the fully open crack were compared to the predicted response using the simplified approach
for brittle crack spalling according to [14].
1.5. Limitations
In this paper, the conceptual differences between a brittle crack approach and a strain-
softening crack approach for the modelling of spalling are presented. The material parame-
ters and load values have been chosen in order to highlight the consequences of the different
approaches. The shape of the time-pressure response of the load and the strain-softening
were simplified using linear relations. Further, strain rate effects that might influence the
material tensile and compression strength [19, 20], fracture energy [21, 22] and Young’s
modulus [23] were not considered. Consequently, the case studied does not represent a spe-
cific experiment nor load case. Most experiments on the subject are usually close range
detonations and are thus more complex. These types of experiments require the use of a
A-4

-- 42 of 88 --

three-dimensional model to be correctly represented in a finite element analysis. However,
the blast load in this study generates a pressure wave which appears as plain in the wall
section investigated.
2. Brittle crack spalling
A simple approach to determine whether spalling may occur in a concrete wall is the
evaluation method presented in [14, 15]. In this paper, the approach described in [14, 15]
is referred to as the ”Brittle crack Spalling Approach”. The principle of that hypothesis
is that spalling cracks appear where a tensile stress, according to a linear elastic model,
exceeds the tensile capacity. Due to the defined singularity of the pressure wave, a stress
state of a material point may momentarily change from a state of compression to a state of
tension. Therefore, if the tensile capacity were to be exceeded, a fully open crack is assumed
to appear during the singularity, thereby creating a new free surface at each side of the
crack. From this new free surface, the same phenomena which caused the first spalling crack
to appear can create a second spalling crack. This happens when a new tensile release wave
propagates further into the wall from the new free surface which is subjected to a state of
compression. The stress state at the point of the first spalling crack is illustrated in Fig. 1.
2.1. Limitations of applicability of concept
The most obvious limitation of the brittle crack spalling approach for material with
strain-softening, as described in [17], is that the shape of the softening branch and the
ductility of the softening become irrelevant since the strain reaches infinity within the stress-
time singularity. However, given the approach chosen in [17], infinite strain is only achieved
if the extension of the crack are to decrease to an infinitesimal value. Given this approach
it is no longer possible to relate a stress to a unique inelastic strain. Furthermore, due
to its singularity, the elastic phase the material has to undergo before fracture will yield
infinitesimal strain energy and may, according to [17], be neglected. However, even if the
strain softening can be neglected the model needs to hold for any strain-softening branch
and, consequently, for a perfectly brittle material without any fracture energy. However,
if the fracture energy were zero, even infinitesimal strain energy achieved before fracture
cannot be neglected since the material possesses no ductility. Furthermore, as described in
Section 1.2, the results predicted by this approach can only be achieved if the material is
considered without fracture energy and the fracture process is hidden in the defined stress-
time singularity.
2.2. Important aspects of the study
An important aspect of this study was to investigate the crack propagation during the
spalling of concrete and how the fracture energy influence the results and wave propagation.
To describe spalling given certain load conditions, the material response to cyclic loading
during crack propagation becomes important. The study investigated whether a simple
numerical model can describe spalling and how different ways to model material response
to cyclic evolution of the crack propagation influence the response, such as plasticity and
damage models (Fig. 2).
A-5

-- 43 of 88 --

Spalling of crack-
softening materials
Crack propagation
Material response
of Concrete
Numercal model
Damage
model
Plasicity
model
Damage-
Plasticity
model
Figure 2: Important aspects of the study and their mutual dependency.
3. Numerical study of spalling in strain-softening materials
3.1. Overview of study
Wave propagation and spalling in a plain concrete wall element were studied with the
help of a numerical one-dimensional (1D) model in the thickness direction of the wall shaped
as a concrete rod. The thickness of the wall studied was chosen to L = 300mm. The applied
load was simplified to a plain pressure wave with linear decrease of the pressure after a
momentarily reached peak pressure (Fig. 1a). The load was chosen in order for spalling to
be achieved, both in the simplified theoretical approach, [14], and in the numerical model
used in the study. The load corresponded to a hemispheric charge of 1500 kg TNT at a
distance of 5 m calculated according to [24]. Geometry and load data are presented in
Table 1. The Young’s modulus was not increased due to geometric confinement; thus, a
plain stress state was assumed.
The structural model used was an explicit nonlinear dynamic model with bar elements
of proportional stiffness damping based on a linear elastic stiffness matrix. The analyses
were carried out using MATLABr.
3.2. Description of material characteristics
The concrete was approximated as an elastic material until the tensile capacity was
reached; thereafter, a linear softening decreased the tensile capacity for increased strains.
A-6

-- 44 of 88 --

Table 1: Geometry and load
Parameters 	Value
Wall thickness [mm] 	30
Equivalent TNT charge weight 1500
(hemispheric expansion) [kg]
Distance to wall structure [m] 5
Maximum aggregate size [mm] 16
Peak pressure [MPa] 	50.74
Load duration [ms] 	1.31
Table 2: Material parameters
Parameters - general 	Value
Young’s modulus [GPa] 	30
Tensile strength [MPa] 	2.0
Fracture energy [N/m] 	132
Maximum aggregate size [mm] 16
Density [kg/dm3] 	2.35
Plasticity model
Softening law 	Linear
Damage model
Softening law 	Linear
Damage-Plasticity model
Softening law 	Linear
Hardening modulus 	0.01E
The material was modelled according to a smeared crack approach to describe the crack
localisation [18]. The spalling of plain concrete was studied for three different material mod-
els for concrete, a plasticity model, a damage model and a combined damage and plasticity
model [25]. The softening law was defined to resemble plain concrete with linear softening.
The fracture energy was calculated according to [26]. The main difference in the material
response between the three models was the response during unloading after crack initiation.
The material parameters used are presented in Table 2. In compression, the response of the
concrete was linear elastic; plastic strains or damage propagation were not allowed to take
place. In tension, linear strain softening was assumed upon crack initiation.
In the plasticity model, the strain softening was achieved with the help of using a neg-
ative hardening variable. For stress states below the reduced tensile capacity, the response
remained elastic with a stiffness based on the Youngs modulus (Fig. 3a). In the damage
A-7

-- 45 of 88 --

model the linear softening was achieved through an isotropic damage evolution during which
the stiffness and stress had been scaled down from a linear elastic response. Damage affected
the stiffness during unloading for positive strains but the stiffness was kept undamaged for
negative strains (Fig. 3b). The combined damage and plasticity model consisted of an
elastic-plastic model with hardening and was combined with an isotropic damage model to
achieve linear softening. The hardening modulus was chosen according to [27]. The damage
evolution was based on the plastic strain and affected the stiffness both during the unloading
for positive strains and the loading for negative strains (Fig. 3c).
3.3. Numerical approach
The development of the spalling damage in the wall was studied with the help of a
nonlinear numerical model based on the Central Differential Method. For each new time
step, the displacement vector was determined [Eq. (1)]. The displacement vector was used
to determine the strain increments in the elements [Eq. (2)]. The stresses in the elements
and thereby internal force vector was calculated by the material routine [Eq. (3)]. With the
displacements and internal force vector known, the acceleration vector and velocity vector
could be solved by combining Eq. (4) and Eq. (5). Displacement, velocity and acceleration
together with the material response were used as inputs for the next time step along with
the external load vector. The results evaluated in this study are the strains and stresses
from the material model and the node velocities. The scheme of the numerical routine is
presented in Fig. 4.
The following equation was used to go through the numerical routine described in Fig. 4:
un+1 = un + h · ˙un + h2
2 · ¨un 	(1)
∆εn+1 = un+1 − un
L (2)
qn+1 = qn + ∆qn+1 (εn, ∆εn+1) 	(3)
M ¨un+1 + C ˙un+1 + qn+1 = Fn+1 	(4)
˙un+1 = ˙un + h
2 · (¨un + ¨un+1) 	(5)
where u is the displacement, ˙u the velocity, ¨u the acceleration, q the internal force and
h the time interval.
3.4. Finite element analysis
Bar elements were used to model the concrete wall and were preferable to a mass spring
system in which lower eigenvalues would be achieved resulting in the need to use a higher
damping of the system. Geometric nonlinearity was not considered for the elements. The
total number of elements was chosen at 100 elements. To describe the softening response
of the concrete during crack propagation, a strain-softening approach was chosen. The
representation of a crack was smeared out over a fracture zone equal to three times the
maximum aggregate size [22]. With an assumed maximum gravel size of 16 mm, the crack
A-8

-- 46 of 88 --

0 	1 	2 	3
2
0
−2
−4
0
0
Strain [10−3]
Stress [MPa]
(a)
0 	1 	2 	3
2
0
−2
−4
0
0
Strain [10−3]
Stress [MPa]
(b)
0 	1 	2 	3
2
0
−2
−4
0
0
Strain [10−3]
Stress [MPa]
(c)
Figure 3: Stress-strain relation for the different material models, (a) plasticity, (b) damage and (c) damage-
plasticity, during non-monotonic material response.
A-9

-- 47 of 88 --

Input
un, ˙un, ¨un, Fn
Central differ-
ential method
Displacement vector
un+1
Strain incer-
ment vector
∆ε(un+1)
Material model
Input Mate-
rial response
ε(un), εi(un), σ(un)
Strain
ε(un+1)
Inelastic strain
εi(un+1)
Stress
σ(un+1)
Internal force vector
q(un+1)
Acceleration vector
¨un+1
Velocity vector
˙un+1
Results
Time step update
n=n+1
Input for
next iteration
un, ˙un, ¨un
ε(un), εi(un), σ(un)
Figure 4: Scheme of numerical routine
bandwidth became 48 mm. Thus, to achieve a proper representation in the numerical
analyses, the inelastic strain needed to be distributed over this distance. If a larger zone
of inelastic strains were achieved more than one crack would be represented in the result,
i.e. more than one crack would appear. If the inelastic strains were distributed over a
smaller zone than 48 mm, the model would represent a more brittle material than what was
anticipated.
The mass matrix of an element is described by Eq. (6). The damping of the system
was based on proportional stiffness damping according to Eq. (7) and Eq. (8). The linear
elastic stiffness matrix was used for all states of the system and all time steps throughout
the analyses to define the damping matrix. Thus, the mass matrix and damping matrix of
the system were assembled once before the first time step and were then used throughout
all time steps. The numerical model and input for the model geometry, material model and
external load applied on the structure are presented in Fig. 5.
Mi = ρiAiLi
6
(2 1
1 2
)
(6)
Ci = aK0,i 	(7)
a = 2ξ
ωmax
(8)
where ωmax is the highest response frequency of the whole system and ξ was chosen to 1.
3.5. Parametric study of spalling of softening materials
In order to show the importance of the non-monotonic response of a strain-softening
material during crack propagation and spalling, three different model approaches were com-
A-10

-- 48 of 88 --

Figure 5: Geometry, boundary conditions and load.
pared. These three different approaches yield the same strain softening in tension. However,
the response where crack propagation appears during non-monotonic material response vary
among the three approaches. The same load case and structure geometry were used for the
three models and the crack propagation during the duration of the load was studied along
with the final crack distribution of the analyses.
4. Results for study of spalling in softening materials
4.1. Overview of results
The results from the analyses are presented with respect to crack propagation for different
time steps throughout the analyses. The crack propagation along the normal section through
the wall is presented and compared with the predicted position of the first spalling crack
according to the brittle crack spalling approach, [14]. For the positions where the largest
crack openings were achieved in the different analyses, the stress-strain response is presented
to show the development of the crack growth and the non-monotonic response of this material
point. Finally, the distribution of velocity along the bar is studied in order to determine the
final spalling velocity achieved.
4.2. Structural response
The structural response is presented in the form of the distribution of maximum inelastic
strain along the normal section through the wall. The distribution of the inelastic strain is
shown for different time steps throughout the analyses. The definition of inelastic strain for
the damage-plasticity model is shown in Eq. (9). For the damage model, the plastic strain
is excluded and for the plasticity model, the damage variable is zero.
εi = εp + ω (ε − εp) 	(9)
where ε is the inelastic strain, εp the plastic strain and ω the damage variable. The time
steps for which a new distribution of the crack propagation is presented were chosen as the
time during which a compression wave travels from the left side of the wall to the right side
and then back to the left side as a release wave in undamaged concrete; thus, ∆t = 2L/Us
where Us = √E/ρ is the elastic wave speed in undamaged concrete. The total number of
strain distributions presented is 10; thus, the last distribution will be t = 1.68 ms.
A-11

-- 49 of 88 --

0 	50 100 150 200 250 300
5
0
−10
−20
−30
−40
−50
x [mm]
Stress [MPa]
Figure 6: Stress distribution at the time of crack initiation for analytical solution. Stress distribution in
numerical analysis (black) and analytical solution with jump condition (gray)
When the brittle crack spalling approach is used to determine the position of the first
spalling crack, the following equation can be used for the linear decrease of a plane pressure
wave, [14]:
x = Us · fct
2 ·
∣
∣
∣
∣
∂p
∂t
∣
∣
∣
∣
= 92mm 	(10)
where Us is the elastic wave speed in undamaged concrete and ∂p
∂t the pressure-time
gradient of the load.
By using the brittle crack spalling approach, the linear decrease of pressure would result
in additional spalling cracks which appear at a distance of 92 mm from the position of the
previous crack. This will continue until the release wave reaches the loaded side of the wall.
In the numerical models, the first position of the crack initiation appeared at a distance
of 97 mm from the right side of the wall. The deviation from the brittle crack spalling
approach was attributed to the stress-time singularity of the pressure wave which could not
be represented without a jump condition (Fig. 6). The final distribution of inelastic strains
from the numerical models along the section through the wall, as well as intermediate distri-
butions throughout the analyses, are presented in Fig. 7. The position of the spalling crack
was interpreted as the middle of the strain localisation zone. For the damage model, where
individual damage parameters where used in tension and compression, no fully developed
spalling crack in the analysis occurred. However, the damage distribution seems to develop
in a manner similar of the plasticity model. The position of the spalling cracks for the
various approaches are presented in Table 3.
The main difference between the smeared crack band approach and the brittle crack
spalling approach was the timing of the crack propagation. Where, according to brittle
crack spalling, a spalling crack was supposed to appear momentary at the time of crack
initiation only a fraction of crack propagation was achieved during the first wave cycle in
A-12

-- 50 of 88 --

Table 3: Position of spalling crack in the different analyses
Approach 	Crack initia-
tion
Spalling crack
Brittle crack spalling 92 mm 	92 mm
Strain-softening crack
spalling
Plasticity model 	97 mm 	140 mm
Damage model 	97 mm 	No fully developed
spalling crack
Damage-Plasticity
model
97 mm 	92 mm (fully devel-
oped)
150 mm (Partly de-
veloped)
the numerical models. After the initial wave cycle, where a compression wave moves from
the left to the right side and back to the left side as a release wave, only a small amount
of inelastic strains were achieved within the cracked region. This result was expected since
the tensile strength was included in the numerical approach compared to the brittle crack
spalling approach in which the tensile strength was only a measurement to determine where
the spalling cracks were to appear.
Fig. 7 also shows the stress-strain relation throughout the entire analysis at the position
where strain localization occurred. For the damage model, the position was chosen at
the point where the highest inelastic strains were achieved. Importantly, for the different
material, models the development of the inelastic strain took place during a non-monotonic
material response where the inelastic strain increased during the tensile response of each
cycle. For each cycle, the inelastic strains increased until a fully open crack was achieved.
This response contradicts the hypothesis that a fully opened crack appears momentarily
when the tensile strength is exceeded by the first release wave.
4.3. Spalling velocity
The velocity of the section of the concrete wall which is separated from the rest of the
wall by a fully opened crack is defined as the spalling velocity. The spalling velocity is the
speed with which the section spalled off will be released at the unloaded side of the wall.
In [14], this velocity is defined as the particle velocity at the moment of crack initiation.
Two main differences compared to the brittle crack spalling approach are achieved in the
numerical models. First, the moment of crack initiation is not where a fully opened crack is
formed. Second, since the wave length of the loading pressure is much longer than the length
of the wall, a pressure is still applied on the loaded side of the wall during the phase of crack
propagation. Because of this fact, the part which will eventually be spalled away from the
rest of the wall will be pushed in front of the remaining wall section, increasing the particle
A-13

-- 51 of 88 --

0 	50 100 150 200 250 300
3
2
1
0
x [mm]
Inelastic strain
 	[10−3]
−2 	−1 	0 	1 	2 	3
5
2
0
−2
−5
−10
−30
Strain [10−3]
Stress [MPa]
(a)
0 	50 100 150 200 250 300
3
2
1
0
x [mm]
Inelastic strain
 	[10−3]
−2 	−1 	0 	1 	2 	3
5
2
0
−2
−5
−10
−30
Strain [10−3]
Stress [MPa]
(b)
0 	50 100 150 200 250 300
3
2
1
0
x [mm]
Inelastic strain
 	[10−3]
−2 	−1 	0 	1 	2 	3
5
2
0
−2
−5
−10
−30
Strain [10−3]
Stress [MPa]
(c)
Figure 7: Response based on the finite element analysis showing the distribution of inelastic strains through
the wall at each time step ∆t (left) and stress-strain response for the element with highest inelastic strain
(right), (a) for the plasticity model, (b) for the damage model and (c) for the damage-plasticity model.
A-14

-- 52 of 88 --

velocity for each load cycle. The effect is that the final distribution of particle velocity along
the wall is constant, when the loading pressure has reached zero. If a difference between
the spalled off part of the wall and the retained part appears it would be related to the
final wave cycle. The particle velocity for the retained left side of the wall and the spalling
velocity at the right side of the wall for the different analyses are presented in Fig. 8 along
with an analysis with linear elastic material response of the concrete for comparison.
4.4. Element mesh dependency
A sensitivity analysis of the mesh density was performed. The distribution of inelastic
strains were compared between a coarse mesh with element size 6 mm and the total number
of elements N = 50, and a fine mesh with element size 1.5 mm and the total number of
elements N = 200. In Fig. 9, the non-monotonic material response during crack propagation
for the element featuring the highest inelastic strain is presented. All mesh sizes experience
non-monotonic response during crack propagation. The number of wave cycles, ∆t, seems
to decrease with an increased number of elements. But since the distribution of the strain
localisation also seems to decrease with an increasing number of elements, the procedure of
choosing the fracture zone at three times the maximum aggregate size should be adjusted
to yield a less brittle material. Thus, a slower development of the inelastic strains during
the non-monotonic response. The conclusion of the mesh dependency is that the general
response which shows that the crack propagation takes place during the non-monotonic
material response is true for arbitrary mesh densities.
5. Discussion
5.1. Overview
When the tensile strength of a material and the material softening was taken into ac-
count, the damage propagation which leads to spalling will be different compared to an
approach in which a crack is considered fully developed as soon as the tensile strength is
reached. According to the numerical analysis presented, when tensile strength and softening
were included, spalling occurred after cyclic development of the inelastic strain. The load
duration, which influenced the pressure-time gradient, affected the number of cycles needed
to develop the final strain localisation.
5.2. Structural response
The evaluation of the structural response focused on the distribution of inelastic strains in
order to estimate positions of cracks and crack development across the wall studied. Different
constitutive models were used to describe the softening and, in particular, to describe the
response during repeated loading and unloading. From the distribution of inelastic strains,
it becomes clear that the material response during repeated loading and unloading is of
great importance when crack propagation resulting in spalling takes place.
Since the material responses before crack initiation are the same, the first crack initiation
takes place in the same section for the various material models. However, since the material
response during cyclic crack propagation differs between the models, the response and final
A-15

-- 53 of 88 --

0 	0.5 	1 1.31 1.5
0
10
20
30
40
50
Time [ms]
Velocity [m
/s]
Left side
Right side
(a)
0 	0.5 	1 1.31 1.5
0
10
20
30
40
50
Time [ms]
Velocity [m
/s]
Left side
Right side
 	(b)
0 	0.5 	1 1.31 1.5
0
10
20
30
40
50
Time [ms]
Velocity [m
/s]
Left side
Right side
(c)
0 	0.5 	1 1.31 1.5
0
10
20
30
40
50
Time [ms]
Velocity [m
/s]
Left side
Right side
 	(d)
Figure 8: Particle velocity during the analyses at the retained left side (loaded side) and the spalled right side
of the wall for (a) elastic material response, (b) plasticity model, (c) damage model and (d) damage-plasticity
model.
A-16

-- 54 of 88 --

0 	50 100 150 200 250 300
3
2
1
0
x [mm]
Inelastic strain
 	[10−3]
−2 	−1 	0 	1 	2 	3
5
2
0
−2
−5
−10
−30
Strain [10−3]
Stress [MPa]
(a)
0 	50 100 150 200 250 300
3
2
1
0
x [mm]
Inelastic strain
 	[10−3]
−2 	−1 	0 	1 	2 	3
5
2
0
−2
−5
−10
−30
Strain [10−3]
Stress [MPa]
(b)
0 	50 100 150 200 250 300
3
2
1
0
x [mm]
Inelastic strain
 	[10−3]
−2 	−1 	0 	1 	2 	3
5
2
0
−2
−5
−10
−30
Strain [10−3]
Stress [MPa]
(c)
Figure 9: Mesh size sensitivity showing the distribution of inelastic strains for the damage-plasticity model
through the wall at each time step ∆t (left) and stress-strain response for the element with the highest
inelastic strain (right), (a) coarse mesh N = 50, (b) original mesh N = 100 and (c) fine mesh N = 200.
A-17

-- 55 of 88 --

crack distribution resulting in spalling damage will be different. Since the wave speed along
the structure will vary due to partial crack development, the stiffness distribution in the
wall affects the forthcoming wave propagation. The similarity between the analyses is that
the initial spalling crack does not develop in the same section as predicted by the simplified
brittle crack spalling approach. The reason is that in order to develop a discontinuity in the
deformation along the wall, i.e. a crack, a relative difference in particle velocity between
opposite sides of a material point is needed over a time span. This time span is too brief in
the performed analyses. Thus, to achieve an instant discontinuity in the deformation along
the wall when the first release wave arrives, a crack must be fully developed already. Since
the tensile strength and the tensile softening are included in the numerical analyses, the
inelastic strain which can be developed in this section will be infinitesimal and therefore the
crack propagation will be at most limited. In the analysis of the damage-plasticity model
a secondary crack propagation takes place before the first crack has fully developed. This
second crack seems to appear at the exact position where the brittle crack spalling approach
predicts the first crack to appear. No parameter studies with regard to geometry, load
intensity, load duration, load shape, material strength and shape of softening branch have
been performed. Thus, no conclusions can be drawn as to whether this second crack is one
of the final spalling cracks in the general case. However, it is clear that the propagation of
spalling cracks is fundamentally different between the two approaches.
5.3. Local crack propagation
All analyses show that if a spalling crack were initiated, it would need a certain time
to fully open. In the numerical analyses the length of the stress wave was longer than the
length of the concrete wall studied. Thereby, the material points at the final crack were
subjected to repeated compression and tension waves. This loading condition resulted in a
crack opening process that was driven by the tension waves. In the pure damage model, a
fully open crack was not created. However, a fracture mode of the structure similar to that
due to spalling might still appear depending on the boundary conditions and response for
the entire wall structure. This damage would in that case be a secondary spalling damage.
5.4. Spalling velocity
The final velocity distribution throughout all the analyses were close to constant. Thus,
no major separation between the different parts of the wall took place during or at the end
of each analysis. In order to achieve a rapid separation, there has to be a velocity gradient
somewhere in the structure. However, due to the spalling damage, some part or parts of the
wall might no longer be attached to the supports. Thus, a velocity gradient can be created
at a later stage of the global structural response.
5.5. Motivation to new hypothesis
By studying the previous approach, brittle crack spalling, to determine spalling damage
and the effect due to spalling, it becomes clear that this approach cannot properly reflect
the response of a structure consisting of concrete material. In order to evaluate the effects
of different concrete materials when studying spalling an understanding of the material as
A-18

-- 56 of 88 --

well as the structural response is required. The previous approach to describe spalling
predicted, for example, the response of fibre reinforced concrete to be exactly the same
as for plain concrete or any brittle material as long as the tensile strength and material
stiffness were the same. The new hypothesis predicts that the post crack behaviour of the
material influences the response. Thus, the response of fibre reinforced concrete and plain
concrete is no longer by definition the same. The numerical analyses also show that, for
a pressure wave where the wave length in concrete is much greater than the thickness of
the structure, crack propagation could be highly influenced by the response of the material
during cyclic development of inelastic strain. The cyclic development of crack propagation
which may occur for spalling damage is a feature which the previous approach to describe
spalling damage failed to acknowledge.
6. Conclusions
Based on the numerical study performed, it can be concluded that a spalling crack from
a pressure wave does not occur instantaneously nor does it need to occur at the position
where the tensile strength is first reached. The time frame within which to reach inelastic
strain which corresponds to a fully opened crack can be long enough for the critical section
to undergo non-monotonic response. For each new cycle, the inelastic strain increases until a
fully opened crack finally can appear. The study also shows that the material model chosen
with respect to the response for cyclic loading is important for the development of inelastic
strains, in addition to the final position for the spalling crack.
7. Further studies
In this study, only the linear decrease of the pressure wave and linear crack-softening of
the material have been studied. In reality, both the pressure decrease and crack-softening
of concrete seem to correspond to an exponential decrease. Further studies should include
these properties of the load and their material response. Bi-linear softening, which is usually
considered an acceptable simplification to the response of concrete, should be investigated
and compared to both linear crack-softening and exponential crack-softening. It is also
important to include a study with variations of geometry, i.e. wall thickness; material
properties, such as tensile strength and fracture energy; and variation of load intensity, such
as peak pressure and load duration.
A-19

-- 57 of 88 --

Acknowledgements
The work presented in this paper has been performed within the research project entitled
”Blast and fragment impacts: Reinforced concrete and fibre concrete structures”, financed
by the Swedish Civil Contingencies Agency (MSB). The authors would like to thank the
other members of the project group: Bj¨orn Ekengren, MScEng, Swedish Civil Contingen-
cies Agency; Adjunct Professor Morgan Johansson, Reinertsen Sverige AB; Rolf Dalenius,
MScEng, the Swedish Fortifications Agency; Professor Kent Gylltoft, Chalmers Univer-
sity of Technology; Senior Lecturer Joosef Lepp¨anen, Chalmers University of Technology;
Professor Karin Lundgren, Chalmers University of Technology; Ulrika Nystr¨om, PhD, VK
Engineering.
References
[1] J. Lepp¨anen, Concrete subjected to projectile and fragment impacts: Modelling of crack softening
and strain rate dependency in tension, International Journal of Impact Engineering 32 (11) (2006)
1828–1841. doi:10.1016/j.ijimpeng.2005.06.005.
[2] U. Nystr¨om, K. Gylltoft, Numerical studies of the combined effects of blast and fragment loading, In-
ternational Journal of Impact Engineering 36 (8) (2009) 995–1005. doi:10.1016/j.ijimpeng.2009.02.008.
[3] T. Krauthammer, Modern Protective Structures, Civil and environmental engineering, Taylor & Fran-
cis, 2008.
[4] U. Nystr¨om, Modelling of Concrete Structures Subjected to Blast and Fragment Loading, Ph.D. thesis,
Chalmers University of Technology, G¨oteborg, Sweden (2013).
[5] J. Lepp¨anen, Experiments and numerical analyses of blast and fragment impacts on concrete, Interna-
tional Journal of Impact Engineering 31 (7) (2005) 843–860. doi:10.1016/j.ijimpeng.2004.04.012.
[6] M. Johansson, L. Laine, Bebyggelsens motst˚andsf¨orm˚aga mot extrem dynamisk belastning, Del 3 Ka-
pacitet hos byggnader, Myndigheten f¨or samh¨allsskydd och beredskap, Karlstad, Sweden, 2012.
[7] V. Gopalaratnam, S. P. Shah, Softening Response of Plain Concrete in Direct Tension, ACI Journal
Proceedings 82 (3). doi:10.14359/10338.
[8] I. D. Karsan, J. O. Jirsan, Behavior of Concrete Under Compressive Loadings, Journal of the Structural
Division 95 (ST12) (1969) 2543–2563.
[9] I. L¨ofgren, Fibre-reinforced concrete for industrial construction : a fracture mechanics approach to
material testing and structural analysis, Ph.D. thesis, Chalmers University of Technology, G¨oteborg,
Sweden (2005).
[10] M. Foglar, M. Kovar, Conclusions from experimental testing of blast resistance of FRC and RC bridge
decks, International Journal of Impact Engineering 59 (2013) 18–28. doi:10.1016/j.ijimpeng.2013.03.008.
[11] Z. S. Tabatabaei, J. S. Volz, J. Baird, B. P. Gliha, D. I. Keener, Experimental and numerical analyses of
long carbon fiber reinforced concrete panels exposed to blast loading, International Journal of Impact
Engineering 57 (2013) 70–80. doi:10.1016/j.ijimpeng.2013.01.006.
[12] M. Ohtsu, F. a.K.M. Uddin, W. Tong, K. Murakami, Dynamics of spall failure in fiber re-
inforced concrete due to blasting, Construction and Building Materials 21 (3) (2007) 511–518.
doi:10.1016/j.conbuildmat.2006.04.007.
[13] U. Nystr¨om, K. Gylltoft, Comparative numerical studies of projectile impacts on plain and steel-
fibre reinforced concrete, International Journal of Impact Engineering 38 (2-3) (2011) 95–105.
doi:10.1016/j.ijimpeng.2010.10.003.
[14] M. K. McVay, Spall Damage of Concrete Structures, Tech. rep., Structures Laboratory, Department of
the Army, Waterways Experiment Station, Corps of Engineers, Vicksburg, Mississippi (1988).
[15] M. A. Meyers, Dynamic Behavior of Materials, Wiley-Interscience publication, John Wiley & Sons,
Inc., New York , NY, 1994.
A-20

-- 58 of 88 --

[16] U.S. Army Corps of Engineers, Naval Facilities Engineering Command, Air Force Civil Engineer Sup-
port Agency, UFC 3-340-02 Structures to Resist the Effects of Accidental Explosions, Tech. Rep. May
2005 (Apr. 2008).
[17] Z. P. Baˇzant, T. B. Belytschko, Wave Propagation in a Strain Softening Bar: Exact Solution, Journal
of Engineering Mechanics 111 (3) (1985) 381–389. doi:10.1061/(ASCE)0733-9399(1985)111:3(381).
[18] M. Jir´asek, Modeling of Localized Inelastic Deformation, 7th Edition, Czech Technical University,
Prague, 2010.
[19] L. J. Malvar, C. Ross, Review of Strain Rate Effects for Concrete in Tension, ACI Materials Journal
95 (6). doi:10.14359/418.
[20] P. H. Bischoff, S. H. Perry, Compressive behaviour of concrete at high strain rates, Materials and
Structures 24 (6) (1991) 425–450. doi:10.1007/BF02472016.
[21] H. Schuler, C. Mayrhofer, K. Thoma, Spall experiments for the measurement of the tensile strength and
fracture energy of concrete at high strain rates, International Journal of Impact Engineering 32 (10)
(2006) 1635–1650. doi:10.1016/j.ijimpeng.2005.01.010.
[22] J. Weerheijm, J. Van Doormaal, Tensile failure of concrete at high loading rates: New test data
on strength and fracture energy from instrumented spalling tests, International Journal of Impact
Engineering 34 (3) (2007) 609–626. doi:10.1016/j.ijimpeng.2006.01.005.
[23] D. Yan, G. Lin, Dynamic properties of concrete in direct tension, Cement and Concrete Research 36 (7)
(2006) 1371–1378. doi:10.1016/j.cemconres.2006.03.003.
[24] ConWep, Collection of conventional weapon effects calculations based on TM 5-885-1. Fundamentals
of Protective Design for Conventional Weapons (1992).
[25] P. Grassl, M. Jir´asek, Damage-plastic model for concrete failure, International Journal of Solids and
Structures 43 (22-23) (2006) 7166–7196. doi:10.1016/j.ijsolstr.2006.06.032.
[26] fib Model Code for Concrete Structures 2010, Wiley-VCH Verlag GmbH & Co. KGaA, Weinheim,
Germany, 2013. doi:10.1002/9783433604090.
[27] P. Grassl, D. Xenos, U. Nystr¨om, R. Rempling, K. Gylltoft, CDPM2: A damage-plasticity approach
to modelling the failure of concrete, International Journal of Solids and Structures 50 (24) (2013)
3805–3816. doi:10.1016/j.ijsolstr.2013.07.008.
A-21

-- 59 of 88 --



-- 60 of 88 --

Paper B
Finite Element Analyses of Concrete Structures Sub-
jected to Blast Loads with a Damage-Plasticity based
Material Model, CDPM2
J. Ekstrom, R. Rempling, M. Plos, M. Johansson.
To be submitted for international journal.

-- 61 of 88 --



-- 62 of 88 --

Finite Element Analyses of Concrete Structures Subjected to Blast
Loads with a Damage-Plasticity Based Material Model, CDPM2
Jonas Ekstr¨oma,∗, Rasmus Remplinga, Mario Plosa, Morgan Johanssona,b
aDepartment of Civil and Environmental Engineering, Concrete Structures, Chalmers University of
Technology, SE-412 96 G¨oteborg, Sweden
bReinertsen Sverige AB, Kilsgatan 4, SE-411 04 G¨oteborg, Sweden
Abstract
This paper studies the response of reinforced concrete structures subjected to blast loads.
Numerical models are used to evaluate the numerical response of a simply supported rein-
forced concrete beam and a one-way supported slab with a combined damage and plasticity
constitutive model for concrete, CDPM2. Previous research has shown that strain-rate de-
pendent material parameters might be overestimated for higher strain rate. In this study,
these features are evaluated for reinforced concrete structures where bending is the dominat-
ing response. The numerical analyses indicate that fracture energy during tensile fracture
and how this value is chosen have larger effects on the deformations of the structure than
whether or not the strain-rate dependency of the material properties are taken into account.
It is also concluded that mesh size and modelling techniques may have a large impact on
the resulting response of the structure in the numerical analysis.
Keywords: concrete, blast load, numerical modelling
1. Introduction
1.1. Background
The interest for building safety with regards to highly dynamic events such as close by
explosion has accelerated after the recent decades of terrorist attacks. The interest has
expanded from civil defence shelters and pure military targets to also include civil buildings
used for different civil functions. Due to the rather rapid shift of area of interest, the
general engineering community lack much of the knowledge and tools with which to design
and evaluate structures with respect to dynamic events with very fast transient and high
magnitude of peak loads.
One of the most common building techniques to withstand highly dynamic events is
reinforced concrete. To describe the material response of concrete, many different constitu-
tive models exists. In order to better represent the material response of concrete for highly
∗Corresponding author. Tel: +46 31 772 2250
Email address: jonas.ekstrom@chalmers.se (Jonas Ekstr¨om )

-- 63 of 88 --

dynamic events, such as blast- and fragment loading, a combined damage and plasticity
model has been developed outside of this project, that also takes into account the increased
material strength of high strain-rates, CDPM2 [1, 2].
1.2. Problem identification
CDPM2 has previously been validated by simulations of material tests for high multi-
axial stress states, [1, 2]. However, no simulations where CDPM2 successfully is used for a
reinforced concrete structure have been performed.
1.3. Aim and objectives
The aim of this study has been to investigate the dynamic response of numerical models
of reinforced concrete structures subjected to blast loads using the material model CDPM2
as it is implemented in LS-DYNA [3]. The objectives have been to study deformations
and failure modes of reinforced concrete beams and slabs. Another objective has been to
evaluate the effects of previously identified limitations in CDPM2 when modelling structural
elements subjected to highly dynamic events, [2]. This was approached by varying the initial
value of the fracture energy for tensile failure of the concrete and by studying the effect of
increased material strength due to high strain-rates.
1.4. Method
A literature study was conducted to find suitable experimental studies which could be
used to compare against numerical models. An appropriate level of detail of the numerical
models was chosen in order to capture the deformations and failure modes of the structures.
From this procedure, the structural response of the chosen experiments was studied in finite
element models with the latest implementation of CDPM2, [1, 2]. The structures studied
have previously been tested in different experiment series; a study of blast loaded beams [4]
and a blind simulation competition of blast loaded slabs [5, 6, 7]. Both experimental series
studied bending as the main structural response.
The modelling techniques were based on general approaches for finite element models for
highly dynamic events. The results of the experiments with respect to maximum deforma-
tions and failure modes were compared to the results from the numerical models.
1.5. Limitations
In this, study only reinforced concrete beams and slabs subjected to blast loads were
studied. The main influencing response was bending and to some extent shear. The study
did not include an evaluation of different types of impacts nor penetrations from such items
as fragments or projectiles where high hydrostatic pressures are achieved. The study did
not focus on influences of modelling techniques even though some issues regarding modelling
techniques have been treated. The numerical analyses have only been carried out in one
finite element code, LS-DYNA [3].
B-2

-- 64 of 88 --

2. Material properties and material models
2.1. Concrete properties and applied model
Concrete structures subjected to highly dynamic events are to a large extent subjected to
confinement due to different inertia effects compared to static load conditions. This creates
demands on the constitutive models used in numerical analysis in order to take these effects
into account. In general, constitutive models for high confinement pressure focus on the
response in compression and how peak pressures and stresses are achieved. For structures
subjected to static loads, the peak load and deformation abilities are usually of interest.
However, for structures subjected to large dynamic loads, other aspects of the response are
of greater interest, such as the maximum deformation or the extent of the damage to the
structure. The damage could be estimated through the amount of concrete breaking loose
from the structure or the penetration depth of an object. These demands allow the structure
to deform far beyond the point where the peak stress in the materials emerge. Thus, the
ability to describe the response of the materials during fracture becomes important.
CDPM2 has been developed as a material model which intends to describe the response
of concrete to regular stress conditions, as well as high triaxial stress states. This include
pre-peak hardening, crack-softening response and non-linear compaction, as well as the
influence of a high strain-rate such as increased capacity in tension and compression. The
specification of requirements for dynamic load conditions was specified in [2]. The first
implementation of the material model in a finite element code was carried out in OOFEM
[8, 9]. The additions with regard to dynamic response [2] has been implemented in LS-DYNA
[3], which is evaluated in this study.
2.2. Material response of concrete during high strain-rate
When concrete is subjected to a high strain-rate, i.e., increased deformation in short
time frames, the material characteristics change compared to low deformation rates. The
most distinct change in material properties is the increased strength, both in compression
[10] and in tension [11].
The increased tensile capacity is explained as a combination of increased strength due to
the bridging of stresses over water-filled pores in the concrete [12] and a change of fracture
mode where a crack, caused by increased tensile stresses during high strain-rates, tends to
go through the aggregates in the concrete rather than around them as happens during lower
strain-rates [13]. Increased tensile strength of up to about 7 times the strength during static
conditions has been observed for very high strain rates [11].
For compression, the increased strength during high strain rates is not as high as for
tensile loads. Increased compression strain rates can lead to an increase of material strength
of up to 2,25 times the capacity during static load conditions [10]. In compression, however,
the influence of mass inertia is larger. During axial compression of an experiment specimen
to determine the compression capacity, the transverse expansion of the specimen is pre-
vented due to mass inertia. This result leads to a natural confinement of the material inside
the specimen which sometimes has been interpreted as an increase in uniaxial compression
capacity.
B-3

-- 65 of 88 --

In [2] it has been shown through 3D continuum finite element analysis that a natural
structural confinement effect appears for high strain rates resulting in increased compression
resistance for the specimen without any constitutive laws describing a strain rate dependent
material strength. In general, the increased compression capacity is implemented as in-
creased strength for higher strain-rates in the constitutive models. In [2] it is shown that
this approach results in an overestimation of the increased compression capacity for higher
strain rates when used in 3D continuum analyses.
The material ductility of concrete is represented by the fracture energy. In a smeared
crack model, this is modelled as a strain softening branch in the stress-strain relation. If
the fracture energy is kept constant, an increase of the tensile capacity will lead to increased
brittleness. The number of studies where the fracture energy has been studied with regards
to its dependency of strain-rates are limited. In [14, 15] it is shown that the overall effect of
increased strain rates is increased fracture energy in a similar way as the tensile capacity is
affected by increased strain rates.
In CDPM2 the softening branch of the stress-strain relation in tension is treated by using
the dynamically increased tensile strength as the new tensile capacity. For bi-linear softening,
the softening develops with the same stress-strain gradient, δσ/δε, as for the original tensile
strength until a third of the dynamically increased tensile strength is reached. From this
point the softening branch has the same gradient as the unaffected softening branch until
zero stress is reached (see Figure 1).
Figure 1: Softening branch for CDPM2 with dynamically increased tensile strength for
different strain-rates taken from [2]
B-4

-- 66 of 88 --

3. Experiments studied
3.1. Overview of studies
To investigate the performance during dynamic response of high intensity load conditions,
two different experiment series were studied, [4] and [5, 6, 7]. One of the experiments chosen
was a reinforced concrete beam and the other a reinforced concrete slab , both loaded
with blast loads and one-way supported. Normal strength concrete and conventional steel
reinforcement were used in both cases. One study was chosen to represent a moderately
dynamic response due to blast loads with respect to deformations of the structure, [4],
whereas the second study represented an upper limit with regard to deformations without
a complete collapse of the structure [5, 6, 7].
3.2. FOI beam
The Swedish Defence Research Agency (FOI), has over the years conducted experimental
studies of reinforced concrete beams with various concrete strengths [16, 17, 18]. From the
results of these experiments, a numerical study was conducted to investigate the capability
of finite element models [4]. In [4] the RHT-model [19], was used to describe the material
response of concrete. In this study, the CDPM2-model was used to describe the material
response of the concrete. However, the same basis for assessing a numerical model as in [4]
was used to study the response of a blast loaded reinforced concrete beam.
The beams in [4] are considered to have a rather normal dynamic response for a beam
or slab-like structure subjected to detonation when it comes to deformations during the
structural response and the design of the beam. The mean concrete compression strength
was given to be fcm = 50 MPa and the reinforcement was specified to be of quality B500B
[4]. The span between the supports was 1500 mm. The hight of the beam was 160 mm and
the width was 300 mm. The beam was reinforced by 5φ16 as longitudinal reinforcement and
stirrups φ8 s200 (see Figure 2). Detailed description of the beam can be found in [4].
3.3. Blind simulation blast test
In 2012, a blind simulation was carried out as a competition where the participants were
asked to predict maximum deformation and an over-all response of four different slabs that
were later tested. The slabs were subjected to blast loads generated by a Blast Load Simula-
tor (BLS). One participant, [6], has presented results of simulations where the performance
of a number of constitutive models was compared.
The dimensions of the slabs were specified as 6′′ ·33.75′′ ·4′′ (1626 mm·857 mm·101.6 mm);
see Figure 3. Normal strength concrete, high strength concrete, conventional steel reinforce-
ment and high strength steel reinforcement were combined into the four different set-ups.
Only the slab with normal strength concrete and conventional reinforcement was studied
here. The slab was supported along the shorter sides by a two piece steel frame assembled
by steel tubes. The support frame, see Figure 4, is briefly described in [5] and [6].
The concrete strength of the slab in the experiment was of normal strength, (fcm =
34.5 MPa), and the reinforcement had a yield strength of about fy = 480 MPa. The
reinforcement was arranged in two directions. According to the input to the blind simulation
B-5

-- 67 of 88 --

Figure 2: Geometry and reinforcement layout (above) and measured pressure over the beam
and simplified load used in the analyses (below); both pictures taken from [4]
competition, the slab was only reinforced in the bottom, i.e., no compression reinforcement
at the top of the slab [5, 6].
The load was generated by the BLS and described as pressure-time histories in the input
to the Blind simulation blast test. Two different pressure-time histories were provided.
The first case resulted in an impulse of 7.04 MPa · ms and the second gave an impulse of
5.38 MPa · ms [6]. In the analyses performed for this article, the higher impulse from the
Blind simulation blast test was used; see Figure 5.
B-6

-- 68 of 88 --

Figure 3: Reinforcement arrangement and geometry of Blind simulation slab taken from
competition input; also presented in [6] and [5]
Figure 4: Mounting of Blind simulation slab with steel frame taken from competition input;
also presented in [5]
The response to the Blind simulation blast test was more extreme when it came to the
deformations during the response compared to the FOI beam [4]. To determine the bending
deformation of a structure, a commonly used measurement is the ratio between the maximum
deformation and the length of the member , δ/L, [20]. For the beam in [4], this ratio is
approximately 1
60 which can be considered as a response where the normal assumptions for
an evaluation of a beam holds. In the Blind simulation blast test, the maximum deformation
over length ratio was approximately 1
13 . [20] categorises δ/L = 1
15 as very large deformations
where special reinforcement arrangements should be made in order to, in a reliable way,
provide structural resistance and integrity.
B-7

-- 69 of 88 --

Figure 5: Measured pressure for blast load in Blind simulation blast test taken from com-
petition input; also presented in [6] and [5]
4. Finite element models
4.1. Overview
Both experiments were modelled using a similar approach. The analyses were carried out
in LS-DYNA with 3D finite element models. The concrete was modelled with 3D continuum
elements whereas the reinforcement was modelled with beam elements. Support conditions
were modelled with 3D continuum elements for the FOI beam in a similar way as described
in [4] whereas shell elements were used for the Blind simulation blast test [6, 5] and perfect
bond was assumed between the reinforcement and surrounding concrete. The concrete model
is based on isotropic damage; thus, no direction of a crack is stored in the analyses. Instead,
the crack direction will be perpendicular to the largest principal strain.
4.2. FOI beam
4.2.1. Material input
The reinforced concrete beam was analysed by [4], but using the RHT-model, [19]. The
geometry of the beam, reinforcement amount and support conditions were applied as in [4].
However, some information is limited. Therefore, parameters have been adopted from [4]
and computed according to Model Code 2010 [21]; see Table 1. When numerical studies are
performed, the chosen fracture energy and the shape of the strain-softening branch influence
the response and crack pattern in the structure. In general, the energy consumed during
the fracture of the beam tends to be overestimated since cracks appear too close to each
other [22]. In the analyses performed, it was found that in the area close to the support,
B-8

-- 70 of 88 --

extensive shear cracking appeared with many adjacent elements cracked. Therefore, the
structural response for both the fracture energy acquired from [21], 148 Nm/m2, and half of
that value, 74 Nm/m2, was studied. Bi-linear tensile softening was chosen for all analyses
with stress-crack opening response according to [23]. In compression, exponential softening
was used after the compression strength had been reached [1]. The crack band width [24]
was based on the length of one element; thus, the localisation zone of one crack was supposed
to be extended over one element row.
Table 1: Concrete material parameters FOI beam
Material parameters FOI beam
According to
Module of elasticity 	36.8 GPa [21] based on fcm from [4]
Compression strength 50 MPa 	[4]
Tensile strength 	3.6 MPa 	[21] based on fcm from [4]
Poison’s ratio 	0.2 	[21]
Density 	2350 kg/m3
Fracture energy 	148 Nm/m2 [21] based on fcm from [4]
74 Nm/m2
Material input for the reinforcement was taken from [4]; see Figure 6. The modulus of
elasticity was chosen to 200 GPa, Poison’s ratio to 0.3 and the density was set to 7800 kg/m3.
A piecewise linear stress-strain relation was used for the steel material.
0 2 4 6 8 10 12 14 16 18 20
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
Plastic strain [%]
Stress [MPa]
B500B Rebar
Figure 6: Stress-strain response of reinforcement for FOI beam adapted from [4]
4.2.2. Elements and mesh
The concrete in the beam was modelled with 3D hexahedral elements. The reinforcement
in the beam was modelled with beam elements. The main reason was the limitation in
B-9

-- 71 of 88 --

choice of material models in LS-DYNA for truss elements. A more detailed review of how
reinforcement can be modelled in LS-DYNA is presented in [7]. The support roller and
the concrete were modelled with solid hexahedral elements. A mesh size of approximately
10 mm, as in [4] was originally used for the concrete elements. The mesh size was later
divided by two since it was found that the shear cracks occurring in the analysis was better
represented by using smaller element size.
The connection between concrete and reinforcement was performed by using constraints
between the concrete and reinforcement. By using the *CONSTRAINED LAGRANGE IN -
SOLID function in LS-DYNA, the concrete and reinforcement elements did not need to be
modelled with shared nodes in order to to be connected [7]. The contact between the support
roller and the concrete beam was treated with full interaction between the members.
To limit the computation time for the analyses, the beam was modelled with symmetry
faces along the middle of the beam and at the middle of the span. By these symmetry faces
the number of elements in the model was reduced to one-fourth compared to the case when
the whole beam would have been modelled.
4.3. Blind simulation blast test
4.3.1. Material input
The material parameters of the concrete slab were taken from the experiment description
for the Blind simulation blast test which are documented in [6, 7, 5]. The available mate-
rial data which were specific to the used concrete was limited to the uniaxial compression
strength. Tensile strength together with modulus of elasticity was for instance not presented.
In general, the crack softening behaviour of concrete is considered to be just as important
for the the results of a numerical model [22]. For all material properties not presented in
the competition documentation, values were chosen in accordance to Model Code 2010 [21];
see Table 2.
To study the effect of the fracture energy, two different fracture energies were used,
138Nm/m2 which corresponds to the value given by Model Code 2010 [21] and 69Nm/m2
which is half of this value. As for the FOI beam described in Section 4.2.1, bi-linear softening
was used in tension and exponential softening was used in compression.
Table 2: Concrete material parameters FOI beam
Material parameters FOI beam
According to
Module of elasticity 	32.5 GPa [21] based on fcm from [6]
Compression strength 34.5 MPa [6]
Tensile strength 	2.7 MPa 	[21] based on fcm from [6]
Poison’s ratio 	0.2 	[21]
Density 	2350 kg/m3 [6]
Fracture energy 	138 Nm/m2 [21] based on fcm from [6]
69 Nm/m2
B-10

-- 72 of 88 --

Material input for the reinforcement was given before the blind simulation competition
as stress-strain response; see Figure 7. The modulus of elasticity was chosen to 200 GPa,
Poison’s ratio to 0.3 and the density was set to 7800kg/m3.
0 1 2 3 4 5 6 7 8 9 10 11 12
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
Strain [%]
Stress [MPa]
60ksi Rebar
Figure 7: Stress-strain response of reinforcement adapted from competiotion input and [6]
4.3.2. Elements and mesh
The reinforcement was modelled in the same way as for the FOI beam with beam elements
and a piecewise linear stress-strain relation; see Section 4.2.2. The mounting frame assembled
from steel tubes which composed the supports of the slab was modelled with shell elements.
The concrete slab was modelled with 3D continuum hexahedral elements. An original mesh
size of approximately 17 mm in the slab thickness direction was determined to be sufficient in
[7]. This mesh size was later divided by two to avoid unrealistic de-lamination of the concrete
along the reinforcement in the FE-analysis which might lead to incorrect deformation shape
for the slab.
The current implementation of CDPM2 did not allow mesh dependent input for the
stress-strain response in compression [1]. Instead, the response was based on a pre-defined
fracture energy of 2200 Nm/m2 and an element size of 100 mm. This could lead to a
more brittle response than desired if smaller elements were used. In the analyses, different
convergence issues in the material model appeared at the bottom of the slab close to the
support at the compressed side and at the top of the slab in the middle of the span. It was
believed that one of the problems might be the brittle response that was achieved due to
the small elements. Therefore, the outer layer of concrete elements was replaced in these
areas with linear elastic elements; see Figure 8.
The coupling of concrete and reinforcement was done in the same way as described in
Section 4.2.2. The contact between the support structure and the slab was modelled with
2D surface contact without any friction coefficient.
B-11

-- 73 of 88 --

Figure 8: Elastic elements in the numerical model of the Blind simulation slab. Top sid
(left), bottom side with and without support structure (middle and right)
5. Results of modelled experiments
5.1. Overview of results
The results of the numerical analyses are presented as deflection histories at the point
on the tensile side of the mid-section of the beam and the slab. The numerical results are
verified by the deformation modes and the maximum deformations. Furthermore, the type
of failures which dominates the structures are of great importance.
5.2. FOI beam
The deformations from the analyses and the experiment from [4] of the FOI beam are
presented in Figure 9, ranging from 36-67 mm. All analyses overestimated the deformation
of the beam in comparison with the experiment (24 mm).
The crack pattern for the beam test [4] is compared to the contour plot of the tensile
damage from the analyses in Figure 10. From Figure 10 it becomes clear that a much larger
extent of shear cracking takes place in the numerical analyses than in the experiment.
5.3. Blind simulation blast test
The deformation histories for two of the slabs were taken from [7] and [5] and are pre-
sented together with the results from the numerical analyses in Figure 11. A rather large
difference in maximum deformation at the mid-span of the slab is achieved for the numerical
models where variation of the fracture energy and the strain rate dependency for the concrete
strength are investigated. The tests of the slabs had a maximum deformation of 108 mm
and 113 mm. Three tests were conducted but one of the slabs was subjected to the lower
pressure-impulse load [5]. The other two are presented in [5] and Figure 11. The numerical
analyses show a variation in the maximum deformation of between 78 mm and 152 mm.
With respect to maximum deformation, the analysis with fracture energy of 138 Nm/m2
B-12

-- 74 of 88 --

0 	5 	10 	15 	20
0
10
20
30
40
50
60
70
Time [ms]
Deformation [mm]
exp
148J1
148J0
74J1
74J0
Figure 9: Maximum deformation vs time history for the analyses of the FOI beam for
different fracture energies, 148 and 74 Nm/m2, and strain rate dependent strength turned
on, 1, and off, 0.
without strain rate dependent concrete strength and the analysis with fracture energy of
69 Nm/m2 with strain rate dependent concrete strength both show results very close to the
test result from the blind simulation competition, 102 mm and 125 mm, respectively.
Due to very large deformations of the slabs, the damage of the tested slabs is very severe
which is also seen in the numerical models. The slabs are at the point of maximum defor-
mation fully damaged and individual cracks can no longer be distinguished; see Figure 12.
5.4. Element mesh dependency
The element mesh dependency was evaluated based on the mechanisms of the models and
the level of detail of the actual failure mode. The mesh density which was determined in [6]
for the Blind simulation blast test was refined in order to reduce the effects of delamination
of the concrete at the level of the main bending reinforcement close to the support. The
delamination caused a failure mode where two yield lines appeared across the slab; see
Figure 13. Since the available photo for the Blind simulation blast test, also in Figure 13,
indicated that only one yield line appeared, the mesh was refined until the same response
was achieved in the finite element models.
In [25] it was concluded that an element size of 12 mm was sufficient to capture the
bending behaviour for a blast loaded beam similar to the FOI beam. However, the same
mesh size as in [4], 10 mm, was originally also used in the analysis in this article. But, to
better reflect the shear crack that occurred in the analysis, it was concluded that a finer
mesh better represented the response; see Figure 14. The element sizes used for the concrete
in the two cases, beam and slab, are presented in Table 3.
B-13

-- 75 of 88 --

74J0
74J1
148J0
148J1
Figure 10: Contour plot of damage and the crack pattern of the tested beam (taken from
[4]) for the FOI beam for the different fracture energies, 148 and 74 Nm/m2, and strain rate
dependent strength turned on, 1, and off, 0. Left contour plots at the time of half maximum
deformation and right plots at maximum deformation. Red colour represent full damage
and blue represent no damage.
Table 3: Mesh sizes used in the
Mesh sizes
Study 	Original mesh Refined mesh Cause for refine-
ment
FOI beam 10 mm 	5 mm 	Detail level of
shear failure
Blind simula-
tion slab
17 mm 	8.5 mm 	Failure mode in
bending
B-14

-- 76 of 88 --

0 10 20 30 40 50 60 70
0
20
40
60
80
100
120
140
160
Time [ms]
Deformation [mm]
exp
exp rep
138J1
138J0
69J1
69J0
Figure 11: Deformation history for Blind simulation blast test for different fracture energies,
138 and 69 Nm/m2, and strain rate dependent strength turned on, 1, and off, 0.
6. Discussion
For the study in this paper experiments were searched where structural reinforced con-
crete members were loaded by blast waves. The response aimed for in this study was
deformation due to bending. The number of experiments is scarce due to the high costs
related to this kind of loading. In addition, the experiments are aimed at studying the
structural resistance of the structure rather than the calibration of numerical models. The
consequence of this is that the results extracted are not always adequate for the calibration
of numerical models.
For a structural member, such as a beam, the maximum deflection is usually studied
from the moment of load application to some time after the maximum deflection of the
beam has occurred. The influence of strain rate dependency on the concrete compression
strength for CDPM2 has been studied in [2]. The conclusion was that the increase of strength
can be too high compared to experiments [10] when 3D continuum elements were used. In
the present study, the influence of the strain rate dependency on the deformation of the
structure was studied. The deformation is obviously influenced by the strain rate, as seen
in Figure 9 and Figure 11. As a reference, no strain rate dependency was chosen neither for
the slab nor for the beam simulations. The deformation compared to the blind simulation
experiments deviated -10% and decreased by 30% with strain rate dependency. For the
beam experiments, the deviation of the maximum deformation was +83% for the reference
and +50% with strain rate dependency compared to the experiment.
B-15

-- 77 of 88 --

69J0
69J1
138J0
138J1
Figure 12: Contour plot of damage of the Blind simulation blast test slab for different
fracture energies, 138 and 69 Nm/m2, and strain rate dependent strength turned on, 1, and
off, 0. Top contour plots at the time of half maximum deformation and bottom plots at
maximum deformation. Red colour represent full damage and blue represent no damage.
B-16

-- 78 of 88 --

Figure 13: Failure mode before and after mesh refinement and crack pattern seen from the
top (left) and the back side (right) of the slab; taken from [5].
Figure 14: Shear crack near support for refined mesh (above) and for coarse mesh (below)
for the FOI beam early (left) and late (right) in the analyses.
The reason for the very large deviation in deformation for the beam is believed to have
mainly originated from the severe shear cracking near the support that takes place in the
numerical analyses. From the results of the experiment, shear cracks near the support are
observed but shear failure as achieved in the analyses does not appear. Since the beam was
reinforced with stirrups, the shear cracks that appear will be kept together and create two
planes that slide with a normal force created by the stirrups. Thus, a sliding shear crack, or
a mode 2 crack, will probably not be represented very well by this type of numerical model.
The influence of fracture energy on the deformation and failure mode has been studied
before in [4]. The conclusion was that the fracture energy influences the failure mode. In
particular, the reduction of the fracture energy was a way to achieve shear cracking by the
support. In the present study, the influence of the fracture energy was studied with regard
to the deformation. In order to have a firm base, a reference value was computed according
to [21]. This resulted in a fracture energy of 138 Nm/m2 for the blind simulation slab.
Compared to the slab experiments, the deformation deviated -10%; for a fracture energy
half of the initial value, a +37% deviation was observed.
For the beam simulation, the development of a shear crack is observed. This shear crack
is also observed in the experiment. However, the influence of this shear crack is much greater
in the simulation than in the experiments. The conclusion is that this kind of structural
response is not possible to simulate more realistic using the current constitutive model. From
B-17

-- 79 of 88 --

the results for the blind simulation test slab, the effect of including strain rate dependent
material strength had less influence on the deformation of the slab compared to the difference
in deformation when half the initial fracture energy was used. A similar observation can
be seen for the FOI beam but because of the large difference in deformation due to the
shear crack near the support, the inability to represent that type of failure becomes more
pronounced.
7. Conclusions
The aim of this study has been to evaluate the performance of CDPM2 when used to
model reinforced concrete structures subjected to blast loads. Previous studies that have
been performed have shown that the strain rate dependent strength might overestimate the
capacity. Furthermore, it has been shown that the ductility of the concrete during tensile
fracture might be overestimated due to the constitutive laws that describe the development
of fracture energy for higher strain rates. To study these features, different initial values
of the fracture energy were used in the analyses. The effect of the strain rate dependency
was studied by including the effects of high strain rates and by turning off this feature for
CDPM2.
It was found that the strain rate dependency had a moderate effect on the deformations
and the damage of the concrete structures for the flexural response that was evaluated.
However, it was found that the initial value that was chosen for the fracture energy had a
much larger influence on the flexural deformations. Thus, it is necessary to develop a better
understanding for how fracture energy should be chosen when numerical models of dynamic
events are studied.
The study of the FOI beam shows that flexural shear failure cannot be adequately de-
scribed given the type of numerical model used in this study. It was also shown in the model
for the slab in the Blind simulation blast test that some modification had to be made when
small elements were subjected to large compression stresses. In order to treat the very brittle
response due to the description of compression softening in the current implementation of
CDPM2, elements close to the support and elements in the middle of the loaded side of the
slab were replaced by elastic elements. Furthermore, the element mesh had to be refined in
order to reduce the effect of delamination in the concrete near the reinforcement.
Acknowledgements
The findings presented in this paper were discovered within the research project entitled
”Blast and fragment impacts: Reinforced concrete and fibre concrete structures”, financed
by the Swedish Civil Contingencies Agency (MSB). The authors would like to thank the
other members of the project group, present and past: Bj¨orn Ekengren, MScEng, Swedish
Civil Contingencies Agency; Rolf Dalenius, MScEng, the Swedish Fortifications Agency; Pro-
fessor Kent Gylltoft, Chalmers University of Technology; Senior Lecturer Joosef Lepp¨anen,
Chalmers University of Technology; Professor Karin Lundgren, Chalmers University of Tech-
nology; Ulrika Nystr¨om, PhD, VK Engineering.
B-18

-- 80 of 88 --

References
[1] P. Grassl, D. Xenos, U. Nystr¨om, R. Rempling, K. Gylltoft, CDPM2: A damage-plasticity approach
to modelling the failure of concrete, International Journal of Solids and Structures 50 (24) (2013)
3805–3816. doi:10.1016/j.ijsolstr.2013.07.008.
[2] U. Nystr¨om, Modelling of Concrete Structures Subjected to Blast and Fragment Loading, Ph.D. thesis,
Chalmers University of Technology, G¨oteborg, Sweden (2013).
[3] Livermore Software Technology Corporation (LSTC), LS-DYNA V971, keyword manual, vol 1 and 2
(2013).
[4] J. Magnusson, H. Hansson, Simuleringar av explosionsbelastade betongbalkar en principstudie, FOI-
R–1686–SE, Tech. rep., FOI - Totalf¨orsvarets forskningsinstitut, Stockholm, Sweden (2005).
[5] G. Thiagarajan, C. F. Johnson, Experimental Behavior of Reinforced Concrete Slabs Subjected to
Shock Loading, ACI Structural Journal 111 (6) (2014) 1407–1417.
[6] L. Schwer, Prediction of Air Blast Loaded Concrete Slab Response Using Six LS-DYNA Concrete
Models (2013) 1–32.
[7] L. Schwer, Modeling Rebar: The Forgotten Sister in Reinforced Concrete Modeling (v2), in: 13th
international ls-dyna conference, no. June, Detroit, 2014, pp. 1–28.
[8] B. Patz´ak, OOFEM - an object-oriented simulation tool for advanced modeling of materials and struc-
tures, Acta Polytechnica 52 (6) (2012) 59–66.
[9] B. Patz´ak, OOFEM home page, http://www.oofem.org (2000).
[10] P. H. Bischoff, S. H. Perry, Compressive behaviour of concrete at high strain rates, Materials and
Structures 24 (6) (1991) 425–450. doi:10.1007/BF02472016.
[11] L. J. Malvar, C. Ross, Review of Strain Rate Effects for Concrete in Tension, ACI Materials Journal
95 (6). doi:10.14359/418.
[12] P. Rossi, J. G. M. Mier, F. Toutlemonde, F. Maou, C. Boulay, Effect of loading rate on the
strength of concrete subjected to uniaxial tension, Materials and Structures 27 (1994) 260–264.
doi:10.1007/BF02473042.
[13] A. Zieliski, Model for tensile fracture of concrete at high rates of loading (1984). doi:10.1016/0008-
8846(84)90107-8.
[14] H. Schuler, C. Mayrhofer, K. Thoma, Spall experiments for the measurement of the tensile strength and
fracture energy of concrete at high strain rates, International Journal of Impact Engineering 32 (10)
(2006) 1635–1650. doi:10.1016/j.ijimpeng.2005.01.010.
[15] J. Weerheijm, J. Van Doormaal, Tensile failure of concrete at high loading rates: New test data
on strength and fracture energy from instrumented spalling tests, International Journal of Impact
Engineering 34 (3) (2007) 609–626. doi:10.1016/j.ijimpeng.2006.01.005.
[16] M. Hallgren, P. Balazs, Armerade balkar av h¨ogpresterande betong belastade med luftst¨otv˚ag, FOA
R–99-00983-311–SE, Tech. rep., FOI - Totalf¨orsvarets forskningsinstitut, Stockholm, Sweden (1999).
[17] J. Magnusson, M. Hallgren, High Performance Concrete Beams Subjected to Shock Waves from Air
Blast, FOA-R–00-01586-311, Tech. rep., FOI, Swedish Defence Research Agency, Stockholm, Sweden
(2000).
[18] J. Magnusson, M. Hallgren, High Performance Concrete Beams Subjected to Shock Waves from Air
Blast, Part 2, FOI-R–1116–SE, Tech. rep., FOI, Swedish Defence Research Agency, Stockholm, Sweden
(2003).
[19] W. Riedel, Beton unter dynamishen lasten, Meso- und makromechanische modelle und ihre parameter,
Ph.D. thesis, EMI Freiburg (2000).
[20] U.S. Army Corps of Engineers, Naval Facilities Engineering Command, Air Force Civil Engineer Sup-
port Agency, UFC 3-340-02 Structures to Resist the Effects of Accidental Explosions, Tech. Rep. May
2005 (Apr. 2008).
[21] fib Model Code for Concrete Structures 2010, Wiley-VCH Verlag GmbH & Co. KGaA, Weinheim,
Germany, 2013. doi:10.1002/9783433604090.
[22] M. Johansson, Structural Behaviour in Concrete Frame Corners of Civil Defence Shelters Non-linear
B-19

-- 81 of 88 --

Finite Element Analyses and Experiments, Ph.D. thesis, Chalmers University of Technology, G¨oteborg,
Sweden (2000).
[23] K. Gylltoft, Fracture mechanics models for fatigue in concrete structures, Ph.D. thesis, Lule˚aUniversity
of Technology, Sweden (1983).
[24] M. Jir´asek, Modeling of Localized Inelastic Deformation, 7th Edition, Czech Technical University,
Prague, 2010.
[25] U. Nystr¨om, K. Gylltoft, Numerical studies of the combined effects of blast and fragment loading, In-
ternational Journal of Impact Engineering 36 (8) (2009) 995–1005. doi:10.1016/j.ijimpeng.2009.02.008.
B-20

-- 82 of 88 --

Bibliography, Concrete Structures
Theses are given in order of time of publication. The numbers refer to the two series of
dissertations at Chalmers University of Technology (the original, 1941-1975, and the new
from 1971). The first PhD dissertation was arranged in 1948 although the first theses
were published earlier. Theses until 1966 are in Civil Engineering, while theses from 1971
are in Concrete Structures.
Doctoral Theses
[1] Bertil Löfquist. “Temperatureffekter i hårdnande betong. Undersökning av några
faktorer som påverka sprickbildningen i grövre konstruktioner—Jämförelse mellan
två svenska cement.” No. 3, 195 pp (in Swedish). PhD thesis. 1946.
[2] Nils Tengvik. “Den svenska byggnadsmaterialmarknaden. Produktion, distribution
och prissättning av jord- och stenindustrins material.” No. 7, 318 pp. (in Swedish).
PhD thesis. 1952.
[3] Sven Ödman. “Studies of Boundary Value Problems.” No. 10, 10 pp + app. PhD
thesis. 1955.
[4] Gunnar Kärrholm. “Parallelogram Plates Analysed by Strip Method.” No. 11, 196
pp. PhD thesis. 1956.
[5] Lars-Erik Larsson. “Bearing Capacity of Plain and Reinforced Concrete Walls.” No.
20, 248 pp. PhD thesis. 1959.
[6] Sven Hansbo. “Consolidation of Clay, with Special Reference to Influence of Vertical
Sand Drains. A Study Made in Connection with Full-scale Investigation at Skå-
Edeby.” No. 25, 160 pp. PhD thesis. 1960.
[7] Per Anders Hedar. “Stability of Rock-fill Breakwaters.” No 26, 119 pp. PhD thesis.
1960.
[8] Anders Losberg. “Structurally Reinforced Concrete Pavements.” No. 29, 444 pp.
PhD thesis. 1960.
[9] Alf Samuelsson. “Linear Analysis of Frame Structures by Use of Algebraic Topology.”
No. 36, 115 pp. PhD thesis. 1962.
[10] Bengt Åkesson. “On Lévy’s Plate Solution.” No. 36, 115 pp. PhD thesis. 1966.
[11] Gunnar Backsell. “Experimental Investigations into Deformations Resulting from
Stresses Perpendicular to Grain in Swedish Whitewood and Redwood in Respect of
the Dimensioning of Concrete Formwork.” No. 57, 113 pp. PhD thesis. 1966.

-- 83 of 88 --

[12] Krister Cederwall. “Time-dependent behaviour of reinforced concrete structures.” No
109. Publication 71:3 by the National Swedish Building Research and as Publication
71:1 by the Division of Concrete Structures, 173 pp. PhD thesis. 1971.
[13] Lennart Elfgren. “Reinforced Concrete Beams Loaded in Combined Torsion, Bending
and Shear: A Study of the Ultimate Load-Carrying Capacity.” New Series No 28,
Publication 71:3, 230 pp., Second Ed 1972, 230 pp. PhD thesis. 1971.
[14] Inge Karlsson. “Stiffness Properties of Reinforced Concrete Beams in Combined
Torsion, Bending and Shear.” No 126, Publication 73:1, 203 pp. PhD thesis. 1973.
[15] Ingvar H. E. Nilsson. “Reinforced Concrete Corners and Joints Subjected to Bending
Moment: Design of Corners and Joints in Frame Structures”. New Series No 90. Also
published as Document 1973:7 by the National Swedish Building Research and as
Publication 73:6 by the Division of Concrete Structures, 249 pp. PhD thesis. 1973.
[16] Ralejs Tepfers. “A Theory of Bond Applied to Overlapped Tensile Reinforcement
Splices for Deformed Bars.” Second edition 1976. No. 732, Publication 73:2, 328 pp.
PhD thesis. 1973.
[17] Arne Cajdert. “Laterally Loaded Masonry Walls.” New Series No 346, No 865,
Publication 80:5, 283 pp. PhD thesis. 1980.
[18] Olav Berge. “Armerade konstruktioner i lättballastbetong”. New Series No 908.
Publication 81:3, 373 pp. (In Swedish). PhD thesis. 1981.
[19] Stig Öberg. “Post Tensioned Shear Reinforcement in Rectangular RC Beams.” No.
1021, Publication 90:1, 603 pp. PhD thesis. 1990.
[20] Björn Engström. “Ductility of Tie Connections in Precast Structures.” Nos. 936,
999, 1023, 1052, Publication 92:1, 368 pp. + app. PhD thesis. 1992.
[21] Marianne Grauers. “Composite Columns of Hollow Steel Sections Filled with High
Strength Concrete.” No. 1077, Publication 93:2, 140 pp. PhD thesis. 1993.
[22] Li An. “Load Bearing Capacity and Behaviour of Composite Slabs with Profiled
Steel Sheet.” No. 1075, Publication 93:4, 134 pp. PhD thesis. 1993.
[23] Mario Plos. “Application of Fracture Mechanics to Concrete Bridges. Finite Element
Analysis and Experiments.” Nos. 1067, 1084, 1088, 1106, Publication 95:3, 127 pp.
PhD thesis. 1995.
[24] Magnus Åkesson. “Implementation and Application of Fracture Mechanics Models
for Concrete Structures.” No 1112, Publication 96:2, 159 pp. PhD thesis. 1996.
[25] Christina Claeson. “Structural Behavior of Reinforced High-Strength Concrete
Columns.” No 1105, Publication 98:1, 92 pp. PhD thesis. 1998.

-- 84 of 88 --

[26] Karin Lundgren. “Three-Dimensional Modelling of Bond in Reinforced Concrete.
Theoretical Model, Experiments and Applications.” No 37, Publication 99:1, 129
pp. PhD thesis. 1999.
[27] Jonas Magnusson. “Bond and Anchorage of Ribbed Bars in High-Strength Concrete.”
No 1113, Publication 00:1, 300 pp. PhD thesis. 2000.
[28] Morgan Johansson. “Structural Behaviour in Concrete Frame Corners of Civil
Defence Shelters.” No 1106, Publication 00:2, 220 pp. PhD thesis. 2000.
[29] Rikard Gustavson. “Structural Behaviour of Concrete Railway Sleepers.” No 32,
Publication 02:6, 180 pp. PhD thesis. 2002.
[30] Mathias Johansson. “Composite Action and Confinement Effects in Tubular Steel-
Concrete Columns.” No 33, Publication 02:8, 173 pp. PhD thesis. 2002.
[31] Peter Grassl. “Plasticity and Damage Mechanics for Modeling Concrete Failure.”
Publication 04:3, 159 pp. PhD thesis. 2004.
[32] Joosef Leppänen. “Concrete Structures Subjected to Fragment Impacts—Dynamic
Behaviour and Material Modelling.” No. 31, Publication 04:4, 125 pp. PhD thesis.
2004.
[33] Ingemar Löfgren. “Fibre-reinforced Concrete for Industrial Construction—a fracture
mechanics approach to material testing and structural analysis.” Ny serie nr 2378,
243 pp. PhD thesis. 2005.
[34] Per-Ola Svahn. “Dynamic Behaviour of Reinforced Concrete Structures: Analyses
with a Strong Discontinuity Approach.” Ny serie nr 2366, 159 pp. PhD thesis. 2005.
[35] Helen Broo. “Shear and Torsion in Concrete Structures. Non-Linear Finite Element
Analysis in Design and Assessment.” Ny serie nr 2786. PhD thesis. 2008.
[36] Peter Harryson. “Industrial Bridge Engineering—Structural developments for more
efficient bridge construction.” Ny serie nr 2810. PhD thesis. 2008.
[37] Rasmus Rempling. “Modelling of Concrete Subjected to Cyclic Loading.” Ny serie
nr 2927, 169 pp. PhD thesis. 2009.
[38] Kamyab Zandi Hanjari. “Structural Behaviour of Deteriorated Concrete Structures.”
Ny serie nr 3142, 64 pp. PhD thesis. 2010.
[39] Anette Jansson. “Effects of Steel Fibres on Cracking in Reinforced Concrete.” Ny
serie nr 3233, 50 pp. PhD thesis. 2011.
[40] Hendrik Schlune. “Safety Evaluation of Concrete Structures with Nonlinear Analysis.”
Ny serie nr 3232, 45 pp. PhD thesis. 2011.
[41] Ulrika Nyström. “Modelling of Concrete Structures Subjected to Blast and Fragment
Loading.” New Series No 3486, 83 pp. + papers. PhD thesis. 2013.

-- 85 of 88 --

[42] Filip Nilenius. “Moisture and Chloride Transport in Concrete: Mesoscale Modelling
and Computational Homogenization.” New Series No 3658, 29 pp. + papers. PhD
thesis. 2014.
[43] David Fall. “Steel Fibres in Reinforced Concrete Structures of Complex Shapes:
Structural Behaviour and Design Perspectives.” New Series No 3699, 68 pp. +
papers. PhD thesis. 2014.
Licentiate Theses
[1] Ralejs Tepfers. “Studium av förankrings och sprickproblem hos balkar armerade
med Ks 60.” No. 626, 99 pp. Licentiate Thesis (part I). 1962.
[2] Ralejs Tepfers. “Problem vid avkortning av dragarmering: Föredrag vid Smedje-
backens Valsverks Byggdagar.” No. 639, 24 pp. Licentiate Thesis (part II). 1963.
[3] Ralejs Tepfers. “Försök med hålbalkar.” No. 66:1. Licentiate Thesis (part III). 1966.
[4] Kent Gustavsson. “Fogar i samverkande betongkonstruktioner med tunn pågjutning.”
No. 938, Publication 81:7, 111 pp. Licentiate Thesis. 1981.
[5] Krister Cederwall and Thomas Pettersson. “Spännarmerad betong—Tidsberoende
spännförluster.” No. 1053, Publication 85:5, 36 pp. Licentiate Thesis. 1985.
[6] Thomas Pettersson. “Tvärkraftskapacitet hos förspända balkar i snitt med stort
moment.” No. 1004, Publication 86:1, 45 pp. Licentiate Thesis. 1986.
[7] Steve Svensson. “Skivverkan i elementbjälklag. Skjuvkraftsöverföring i uppspruckna
fogar.” No. 1026, Publication 88:1, 59 pp. Licentiate Thesis. 1988.
[8] Elzbieta Saran. “Shear Capacity of Composite Prestressed Concrete Beams.” No.
1081, Publication 89:1, 127 pp. Licentiate Thesis. 1989.
[9] Johannes Svedin. “En modell for berakning av sprickbredd i armerade betongkon-
struktioner paverkade av statisk engangslast.” No. 1083, Publication 89:2, 95 pp.
Licentiate Thesis. 1989.
[10] Marianne Grauers. “Shear Capacity of Three-Layered Composite Concrete Slabs.”
No. 1065, Publication 89:3, 27 pp. + Appendix. Licentiate Thesis. 1989.
[11] Johan Hedin. “Långtidsegenskaper hos samverkanskonstruktioner av stål och betong.”
No. 1079, Publication 90:2, 53 pp. (In Swedish). Licentiate Thesis. 1990.
[12] Mario Plos. “Shear Behaviour in Concrete Bridges—Full Scale Shear Test. Fracture
Mechanics Analyses and Evaluation of Code Model.” Nos. 1088, 1084, Publication
93:1, 70 pp. Licentiate Thesis. 1993.

-- 86 of 88 --

[13] Magnus Åkesson. “Fracture Mechanics Analysis of the Transmission in Zone in
Prestressed Hollow Core Slabs.” No. 1112, Publication 93:5, 64 pp. Licentiate Thesis.
1993.
[14] Christina Claeson. “Behavior of Reinforced High Strength Concrete Columns.” No.
1105, Publication 95:1, 54 pp. Licentiate Thesis. 1995.
[15] Karin Lundgren. “Slender Precast Systems with Load-Bearing Facades.” No. 1098,
Publication 95:2, 60 pp. Licentiate Thesis. 1995.
[16] Morgan Johansson. “New Reinforcement Detailing in Concrete Frame Corners of
Civil Shelters. Non-linear Finite Element Analyses and Experiments.” No. 1106,
Publication 96:1, 77 pp. Licentiate Thesis. 1996.
[17] Jonas Magnusson. “Bond and Anchorage of Deformed Bars in High-Strength Con-
crete.” No. 1113, Publication 97:1, 234 pp. Licentiate Thesis. 1997.
[18] Rikard Gustavson. “Static and Dynamic Finite Element Analyses of Concrete
Sleepers.” No. 41, Publication 00:3, 58 pp. Licentiate Thesis. 2000.
[19] Mathias Johansson. “Structural Behaviour of Circular Steel-Concrete Columns.
Non-linear Finite Element Analyses and Experiments.” No. 48, Publication 00:4, 64
pp. Licentiate Thesis. 2000.
[20] Gunnar Holmberg. “Fatigue of Concrete Piles of High Strength Concrete Exposed
to Impact Load.” No. 55, Publication 01:3, 69 pp. Licentiate Thesis. 2001.
[21] Peter Harryson. “Industrial Bridge Construction—merging developments of process,
productivity and products with technical solutions.” No. 34, Publication 02:1, 90
pp. Licentiate Thesis. 2002.
[22] Ingemar Löfgren. “In-situ concrete building systems—developments for industrial
constructions.” No. 35, Publication 02:2, 125 pp. Licentiate Thesis. 2002.
[23] Joosef Leppänen. “Dynamic Behaviour of Concrete Structures subjected to Blast
and Fragment Impacts.” No. 31, Publication 02:4, 78 pp. Licentiate Thesis. 2002.
[24] Peter Grassl. “Constitutive Modelling of Concrete in Compression.” No. 37, Publi-
cation 02:4, 95 pp. Licentiate Thesis. 2002.
[25] Per-Ola Svahn. “Impact Loaded Concrete Piles—Theoretical and experimental study
of load effects and capacity.” No 38, Publication 03:1, 51 pp. + papers. Licentiate
Thesis. 2003.
[26] Helen Broo. “Shear and Torsion Interaction in Prestressed Hollow Core Slabs.”
Publication 05:2, 83 pp. Licentiate Thesis. 2005.
[27] Rasmus Rempling. “Constitutive Modelling of Concrete Subjected to Tensile Mono-
tonic and Cyclic Loading.” Publication 06:4, 59 pp. Licentiate Thesis. 2006.

-- 87 of 88 --

[28] Kamyab Zandi Hanjari. “Load-Carrying Capacity of Damaged Concrete Structures.”
Publication 08:6, 108 pp. Licentiate Thesis. 2008.
[29] Anette Jansson. “Fibres in Reinforced Concrete Structures—analysis, experiments
and design.” Publication 08:3, 84 pp. Licentiate Thesis. 2008.
[30] Ulrika Nyström. “Concrete Structures Subjected to Blast and Fragment Impacts,
Numerical Simulations of Reinforced and Fibre-reinforced Concrete.” Publication
08:4, 117 pp. Licentiate Thesis. 2008.
[31] Hendrik Schlune. “Improved Bridge Evaluation. Finite Element Model Updating
and Simplified non-linear Analysis.” Publication 09:01, 20 pp. + papers. Licentiate
Thesis. 2009.
[32] Filip Nilenius. “On Mesoscale Modelling of Coupled Chloride-Moisture Transport
in Concrete.” Publication 11:3, 10 pp. + papers. Licentiate Thesis. 2011.
[33] David Fall. “Reinforcement in Tailor-made Concrete Structures.” Publication 11:5,
25 pp. + papers. Licentiate Thesis. 2011.
[34] Natalie Williams Portal. “Sustainability and Flexural Behaviour of Textile Reinforced
Concrete”. Publication 2013:9, 53 pp. + papers. Licentiate Thesis. 2013.
[35] Mohammad Tahershamsi. “Anchorage of Corroded Reinforcement in Existing Con-
crete Structures: Experimental Study”. Publication 13:10, 19 pp. + papers. Licentiate
Thesis. 2013.
[36] Carlos Gil Berrocal. “Chloride Induced Corrosion of Steel Bars in Fibre Reinforced
Concrete”. Publication 15:01, 75 pp. + papers. Licentiate Thesis. 2015.
[37] Jiangpeng Shu. “Structural Analysis of Existing RC Bridge Deck Slabs Structural
Analysis of Existing RC Bridge Deck Slabs”. Publication 15:03, 17 pp. + papers.
Licentiate Thesis. 2015.

-- 88 of 88 --