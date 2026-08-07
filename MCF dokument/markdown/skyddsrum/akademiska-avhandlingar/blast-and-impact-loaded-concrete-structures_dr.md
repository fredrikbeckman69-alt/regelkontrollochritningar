---
title: "Blast And Impact Loaded Concrete Structures Dr"
category: "akademiska-avhandlingar"
originalFile: "skyddsrum/akademiska-avhandlingar/blast-and-impact-loaded-concrete-structures_dr.pdf"
fileType: "PDF"
keywords: ["betong","beräkning","explosion","splitter","concrete","response","impact","numerical"]
summary: "THESIS FOR THE DEGREE OF DOCTOR OF PHILOSOPHY Blast and Impact Loaded Concrete Structures Numerical and Experimental Methodologies for Reinforced Plain and Fibre Concrete Structures JONAS EKSTRÖM Department of Architecture and Civil Engineering Di..."
---

THESIS FOR THE DEGREE OF DOCTOR OF PHILOSOPHY
Blast and Impact Loaded Concrete Structures
Numerical and Experimental Methodologies for Reinforced Plain and Fibre Concrete Structures
JONAS EKSTRÖM
Department of Architecture and Civil Engineering
Division of Structural Engineering
CHALMERS UNIVERSITY OF TECHNOLOGY
Gothenburg, Sweden 2017

-- 1 of 42 --

Blast and Impact Loaded Concrete Structures
Numerical and Experimental Methodologies for Reinforced Plain and Fibre Concrete Structures
JONAS EKSTRÖM
ISBN 978-91-7597-644-0
© JONAS EKSTRÖM, 2017
Doktorsavhandlingar vid Chalmers tekniska högskola
Ny serie nr. 4325
ISSN 0346-718X
Department of Architecture and Civil Engineering
Division of Structural Engineering
Chalmers University of Technology
SE-412 96 Gothenburg
Sweden
Telephone: +46 (0)31-772 1000
Cover:
High Speed Photography with principal tensile strain field extracted from Digital Image Correlation
of drop weight impact test of simply supported beam
Chalmers Reproservice
Gothenburg, Sweden 2017

-- 2 of 42 --

Blast and Impact Loaded Concrete Structures
Numerical and Experimental Methodologies for Reinforced Plain and Fibre Concrete Structures
Thesis for the degree of Doctor of Philosophy
JONAS EKSTRÖM
Department of Architecture and Civil Engineering
Division of Structural Engineering
Chalmers University of Technology
ABSTRACT
For decades the focus of civil protection has been on civil defence shelters to withstand the threat
of warfare and protecting civilians. In latter years, the general focus has often shifted towards the
protection of specific targets that host functions important to society. Direct attacks on the civil
population also post a more common threat today than a few years ago.
Numerical modelling of dynamic events has been more common in recent years and is to a large
extent treated as an available complement to physical testing. Even so, the tools and techniques
to evaluate structures with the help of numerical models are in many respects unexplored. Since
some phenomena are not fully understood, it is difficult to determine the needed properties of
these numerical models.
The overall aim of the research presented in this thesis is to contribute to the knowledge
of concrete structures subjected to extreme dynamic impulse actions. The scientific approach
consisted of a combination of literature reviews, theoretical modelling, numerical analyses, and
experimental investigations, including experimental design.
Spalling in concrete structures was studied with a numerical model to show how spalling
damage can develop gradually during non-monotonic loading and un-loading of the material and
not by instantaneous fracture when the tensile strength is reached as described in the literature.
The study also shows that the constitutive model for tensile fracture of concrete has a decisive
influence on the results and position of spalling cracks.
The response of reinforced concrete structures subjected to blast loads was investigated. Nu-
merical models were used to evaluate the numerical response of a simply supported reinforced
concrete beam and a one-way supported slab with combined damage and plasticity constitutive
model for concrete, CDPM2. The numerical analyses indicate that fracture energy during tensile
fracture and how this value is chosen have a larger effect on the deformations of the structures
than whether or not the strain-rate dependency of the material properties are taken into account.
Presented in this thesis is an experimental methodology to evaluate the bending response of
reinforced plain and fibre concrete beams due to a drop weight impact. The minimum requirements
for documented material parameters and the structural response for reinforced concrete structures
have been defined when an experimental study aims to support calibration and validation of
numerical models. This methodology was used to study the influence of adding steel fibres to the
concrete mix in reinforced concrete beams. It was shown that the initial crack patterns, at impact,
influenced the final crack pattern at the maximum deformation of the beams. These crack patterns
were shown to be similar between the different concrete mixes with or without fibres.
Keywords: Reinforced concrete structures, Dynamic response, Numerical analysis, Experimental
methodology, Drop weight test, Digital Image Correlation, High Speed Photography
i

-- 3 of 42 --

ii

-- 4 of 42 --

till Morfar
iii

-- 5 of 42 --

iv

-- 6 of 42 --

PREFACE
The work on this thesis was carried out between August 2012 and October 2017 at the Division
of Structural Engineering, the Department of Architecture and Civil Engineering at Chalmers
University of Technology. The work was performed within the research project entitled ”Blast and
fragment impact: Reinforced concrete and fibre concrete structures”. The research project is a
continuation of earlier work on concrete structures subjected to severe dynamic loading conducted
at Chalmers by Morgan Johansson, Joosef Leppänen and Ulrika Nyström. The project has been
financially sponsored by the Swedish Civil Contingencies Agency.
I would like to thank my main supervisor and examiner, Associate Professor Mario Plos and
my assistant supervisors, Associate Professor Rasmus Rempling, for their continuous support
and guidance. I would also like to thank my two other assistant supervisors, Adjunct Professor
Morgan Johansson and Senior Lecturer Joosef Leppänen, for their invaluable input. Further, I
would like to express my gratitude to MScEng Björn Ekengren and BScEng Lars Gråberg at the
Swedish Civil Contingencies Agency, for their support. I also want to thank Professor emeritus
Kent Gylltoft, MScEng Rolf Dalenius, the Swedish Fortifications Agency, PhD Ulrika Nyström,
VK Engineering and Professor Karin Lundgren for their valuable contributions to the research.
The language editing work by Gunilla Ramell was highly appreciated.
Adjunct Professor Mathias Flansbjer and Research Engineer Sebastian Almfeldt have been sup-
porting me throughout the work with the experimental series and I am utterly grateful for their
help and contributions.
I want to thank all my colleagues who have contributed to my development as an engineer and as
a researcher; in particular Håkan Lantz and Carlos Gil Berrocal.
Finally, I thank my friends and family. I would not have reached this point without you.
Göteborg, October 2017
Jonas Ekström
v

-- 7 of 42 --

vi

-- 8 of 42 --

APPENDED PAPERS
This thesis consists of an extended summary and the following appended papers:
Paper A
J. Ekström, R. Rempling, and M. Plos (2016). “Spalling in concrete subjected to
shock wave blast”. In: Engineering Structures 122, pp. 72–82. ISSN: 01410296.
DOI: 10.1016/j.engstruct.2016.05.002
Paper B
J. Ekström, R. Rempling, M. Plos, and M. Johansson. Finite Element Analyses of
Concrete Structures Subjected to Blast Loads with a Damage-Plasticity based
Material Model, CDPM2. Submitted to "Computers and Structures"
Paper C J. Ekström, M. Flansbjer, R. Rempling, J. Leppänen, M. Jonhansson, and M. Plos.
Impact Bending Test and Fracture of Concrete. Submitted to "Experimental
Mechanics"
Paper D
J. Ekström, M. Flansbjer, R. Rempling, and M. Plos. Impact Bending Tests of
Fibre and Plain Concrete Beams. Submitted to "International Journal of Impact
Engineering"
AUTHOR’S CONTRIBUTION TO JOINTLY WRITTEN PAPERS
The appended papers were prepared in collaboration with the co-authors. In the following, the
contribution of the author of this doctoral thesis to the appended papers is described.
Paper A
Responsible for planning and writing the paper. Conducted numerical imple-
mentation and carried out numerical simulations. Evaluated the results of the
development of spalling fracture.
Paper B Responsible for planning and writing the paper. Carried out numerical simulations
and evaluated the results.
Paper C
Responsible for planning and writing the paper. Took part in final adjustments of
specimen design. In charge of experimental programme from the casting of the
specimens and forward. Post-processing of DIC material but did not carry out
the image capturing or the correlation processing. Evaluation of experimental
results and methodology.
Paper D
Responsible for planning and writing the paper. In charge of experimental pro-
gramme. Post-processing of DIC material but did not carry out the image captur-
ing or the correlation processing. Data evaluation and data compilation. Evalua-
tion and preparation of results for publication.
vii

-- 9 of 42 --

OTHER PUBLICATIONS RELATED TO THE THESIS
In addition to the appended papers, the author of this thesis has also contributed to the following
publications.
Ekström, J. (2015). “Concrete Structures Subjected to Blast Loading: Fracture due to dynamic
response”. Publication 2015:04, 20 pp. + papers. Licentiate Thesis. Chalmers University of
Technology.
Ekström, J., Rempling, R., and Plos, M. (2014). “Influence of Strain Softening on Spalling of
Concrete due to Blast Load”. In: Proceedings of the XXII Nordic Concrete Research Sympo-
sium. Ed. by The Nordic Concrete Federation. Vol. 2/2014. 50. Reykjavik, Iceland: Norsk
Betongforening, pp. 157–160.
viii

-- 10 of 42 --

CONTENTS
Abstract i
Preface v
Appended papers vii
Author’s contribution to jointly written papers vii
Other publications related to the thesis viii
Contents ix
I Extended Summary 1
1 Introduction 1
1.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.2 Research aim and objectives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.3 Scientific approach and methodology . . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.4 Scope and limitations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
1.5 Original features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2 Loads due to blast and impact 7
2.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
2.2 Blast wave in air . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
2.3 Impact of fragments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
2.4 Object impact . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
3 Fracture due to blast and impact 11
3.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
3.2 Spalling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
3.3 Scabbing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
3.4 Flexural and shear failures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
3.5 Punch-through . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
4 Numerical analyses of failure in concrete structures 15
4.1 Essential properties of concrete constitutive models . . . . . . . . . . . . . . . . . . 15
4.2 Constitutive models for concrete fracture in tension . . . . . . . . . . . . . . . . . . 16
4.3 Evaluation of CDPM2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
4.3.1 Increased material stiffness after non-linear compaction . . . . . . . . . . . . . . . 17
4.3.2 Avoiding of overestimated fracture energy due to double strain-rate dependency . . 18
4.3.3 Reduction of strain-rate dependency in compression for solid elements . . . . . . . 18
4.3.4 Strain softening for compression failure . . . . . . . . . . . . . . . . . . . . . . . 18
ix

-- 11 of 42 --

5 Experiments for support of numerical models 19
5.1 Requirements for numerical modelling . . . . . . . . . . . . . . . . . . . . . . . . . 19
5.2 Development of experimental programme . . . . . . . . . . . . . . . . . . . . . . . 19
5.3 Experimental set-up . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
5.4 Measurement techniques . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
5.5 Evaluation of experimental series . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
6 Conclusions 25
6.1 General conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
6.2 Suggestions for future research . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
References 27
x

-- 12 of 42 --

Part I
Extended Summary
1 Introduction
1.1 Background
For decades civil protection has been focusing on civil defence shelters to withstand the threat
of warfare and protect civilians. In latter years, the general focus has often shifted towards the
protection of specific targets that host important functions to society, MSB (2017) and Lindgren
(2014). Direct attacks on the civil population, such as terrorist attacks, also post a more common
threat today than a few years ago. Due to the rather rapid shift of area of interest, the general
engineering community lacks much of the knowledge and tools to design and evaluate structures
with respect to dynamic events with very fast transient and high magnitude peak loads, MSB
(2014).
Because of limitations in knowledge and in order to restrict the extent of load cases studied
most structural analysis approaches have been developed with different simplifications and ap-
proximations. When it comes to the response of concrete structures to highly dynamic events,
loads due to explosions M. Johansson and Laine (2012a) and general responses of statically loaded
concrete structures are relatively well-known. However, despite decades of research within the
area, many phenomena involved in the dynamic response of reinforced concrete structures are not
yet fully understood.
Numerical modelling of dynamic events has been more common in recent years and is to a
large extent treated as an available complement to physical testing Nyström and Gylltoft (2009).
Even so, the tools and techniques to evaluate structures with numerical models are in many respects
unexplored. Since certain phenomena, such as material response Schuler et al. (2006), Solomos
et al. (2013), and G. Ulzurrun and Zanuy (2017), and structural response, only been briefly studied,
it becomes difficult to determine the necessary properties to put together these numerical models
Ekström et al. (2016) and Leppänen (2004).
When dealing with numerical modelling, experimental results of structural and material
behaviour are essential for the comparison of model response or to derive the load to apply to
the modelled structure, Tilert et al. (2007). A numerical model must always be calibrated against
known results. Depending on the complexity of the numerical model, the number of data points
and sets of data needed might vary from data sets of deformations of structures to detailed data of
deformation shapes, crack patterns and support reaction forces over time.
During the past two and a half decades a research programme, including multiple PhD projects,
has been carried out at the Division of Structural Engineering - Chalmers University of Technology,
starting with Plos and Gylltoft (1994). The first PhD project dealt with the reinforcement arrange-
ment of concrete frame corners and blast loads towards safety shelters with such reinforcement,
M. Johansson (2000). The continuing PhD project studied fragment impact on concrete structures.
In this project Finite Element Analyses were carried out and were compared to experiments during
which steel fragments penetrated plain concrete, Leppänen (2004).
, Architecture and Civil Engineering 1

-- 13 of 42 --

This study was followed up by a third PhD project which studied projectile penetration into
plain and fibre concrete and synergies from both blast and fragment impact on reinforced concrete
beams. In these studies, limitations in available material models were identified by Nyström and
Gylltoft (2009) and Nyström and Gylltoft (2011). Consequently, a new constitutive model was
developed based on the combined damage and plasticity theory, the Concrete Damage Plasticity
Model (CDPM2), Grassl et al. (2013). During the initial phase of this PhD project the constitutive
model proposed was evaluated at a material response level for dynamic load conditions, Nyström
(2013).
1.2 Research aim and objectives
The overall aim of the research presented in this thesis is to contribute to the knowledge of concrete
structures subjected to extreme dynamic impulse actions. Based on our improved understanding,
design methods that can increase the safety, both for new structures and for strengthening existing
structures, can be developed. In order to reach this aim, it is necessary to be able to model and
analyse the structural response at a high degree of accuracy and efficiency. The following objectives
have been defined:
• Evaluate numerical approaches based on a combined damage and plasticity model to describe
the constitutive laws of concrete materials.
• Evaluate the influence of constitutive laws on the response of brittle materials, such as plain
concrete, subjected to impulse loading with regard to spalling.
• To evaluate the previously developed constitutive model based on the combined damage
and plasticity (CDPM2) for the analysis of reinforced concrete structures and identify needs
for further improvements.
• To identify the demands on experimental results for the validation and calibration of numer-
ical models and design an experimental method that meets these demands.
• Design and carry out experiments to achieve results that can form a basis for the validation
and calibration of numerical models. The experiments should support the development
of models for both plain and fibre concrete structures, with and without conventional
reinforcement
• To collect data, both deformations and crack propagation, which can be followed throughout
the response from the impact.
• Evaluate reinforced and un-reinforced fibre and plain concrete structures with regard to
crack propagation and deformation subjected to extreme dynamic impulse actions.
1.3 Scientific approach and methodology
The scientific approach consisted of a combination of literature reviews, theoretical modelling,
numerical analyses, and experimental investigations, including experimental design. At the
2 , Architecture and Civil Engineering

-- 14 of 42 --

start of the study, the intention was to investigate the performance of the previously developed
and implemented constitutive model for concrete Grassl et al. (2013) and Nyström (2013) for
the numerical analysis of structures, using experiments from literature. The analysis method
should then be adopted to perform studies of structural response. However, the incompleteness
of the models and the lack of sufficient experimental results for validation of numerical models
called for a changing direction using enhanced scientific methods. Consequently, simplified
numerical modelling was used to study the structural response and an experimental methodology
was developed that might provide experimental results suited for supporting the development and
validation of numerical models.
Literature reviews were carried out for the dynamic impulse loading of concrete structures in
general. Further, different types of responses and type of fractures of concrete structures from
these type of load conditions were reviewed. This was followed by a review of the literature based
on the constitutive models used for modelling of the structural response, material fracture and the
possible applicability for CDPM2.
The evolution of spalling damage in concrete structures was identified as a phenomenon that
needed further understanding in order to address suitable material choices and strengthening
techniques for concrete structures, especially the material and structural response after damage
initiation. The combination of a theoretical modelling approach and simplified numerical approach
was adopted. To increase the understanding of the development of fractures for different constitutive
models, a damage, a plasticity and a combined damage and plasticity model were studied.
Numerical models are intended to provide an approximation of real behaviour and, thus,
support the knowledge creation of underlying phenomena. Numerical models can be motivated by
relatively low costs compared to experiments. They also provide the opportunity of studying the
course of events for any given sequence in time and responses which can be difficult to measure
during experiments. By studying structural responses numerically, it is also possible to extract
results that may become important in order to identify different properties of a real structure or
specimen in an experiment.
The numerical studies that were carried out and are presented in this thesis are in general based
on constitutive models in which concrete is represented by a combination of damage and plasticity,
Jirásek (2010). The choice to represent concrete during highly dynamic events through the use
of a damage-plasticity model is a continuation of previous research at Chalmers University of
Technology, Nyström (2013), and the University of Glasgow, Grassl et al. (2013), and has been
shown to successfully describe the loading and unloading of concrete with large confinement
effects and the propagation of shock waves, Nyström (2013). Reinforced concrete structures were
studied in numerical models and compared to experiments carried out by other researchers.
A problem identified by the initial numerical studies was that experimental studies often
did not provide enough data to evaluate of numerical models. Consequently, a literature review
of experimental studies evaluated the suitability of different experiments for the calibration and
validation of numerical models. The aim was to find studies with sufficient measurements to enable
a comparison of the response of the numerical models to a real structural response. Furthermore,
the experimental studies needed to provide detailed material characteristics in order to have
sufficient input data for the numerical models.
Since no such suitable experiments were found, an additional literature review was made to
provide a basis for the design of an experimental programme with the explicit objective to support
the calibration and validation of numerical models. The experimental programme should provide
, Architecture and Civil Engineering 3

-- 15 of 42 --

the input data and results necessary for the development of advanced numerical models. The
programme should be designed to provide data throughout the response from the onset of the load
to the final part of the structural response. To achieve this, the opportunity presented by Digital
Image Correlation (DIC) and High Speed Photography (HSP) were studied.
A previous experiment presented by Ågårdh et al. (1997) influenced the initial experiment
configuration. A drop weight impact rig was designed to generate object impacts. The influence
of steel fibres in the concrete mix was studied by evaluating deformation and crack patterns for
reinforced and unreinforced plain and fibre concrete beams. An important feature was to be able
to follow the structural response from the moment of impact until the maximum deformation of
structure occurred.
1.4 Scope and limitations
Each study presented in this thesis facilitates knowledge of the response of concrete structures
subjected to extreme dynamic impulse actions. Four main studies are presented. Each study adds
to this bank of knowledge. The thesis focuses on plain and reinforced concrete. The progress
of the research project has not allowed for the individual studies to fully build upon each other.
Instead, each study adds to the overall aim of the PhD project and research programme.
The scope and limitation of each study are listed below:
• The first study investigates the development of spalling damage in a concrete wall. Descrip-
tions of spalling phenomena in the literature, e.g. Mcvay (1988), Meyers (1994), and Bažant
and Belytschko (1985), describe how the spalling damage is initiated but do not describe
how this damage develops and propagates in a structure. Based on the early conclusions of
this study, a different hypothesis was formulated for how spalling fractures develop gradually
rather than instantaneously. To show this, a 1D numerical model was developed. The study
also investigated the influence of different material responses of the concrete modelled
during non-monotonic loading and unloading. Three constitutive models were used to
show the importance to describe the failure of the concrete material correctly. However,
experimental data that can be used to verify the hypothesis have not been found.
• The second study investigates the performance of the CDPM2 material model, Grassl et al.
(2013) and Nyström (2013), a combined damage and plasticity model for reinforced concrete
structures. A numerical study of experiments designed and performed by other researchers
was carried out. The study investigated previously identified limitations of material response
and how they affect the structural response in a numerical model. The previously identified
limitations were shown not to affect the response of a reinforced concrete structure. It was,
however, shown that the ability to modify the compression softening response is needed as
an additional feature of the model implementations in commercial softwares.
• The third study presents an experimental methodology to study the beam bending response
due to a single drop weight impact. The method states the minimum amount of material
characteristics needed in order to be able to calibrate and validate a numerical model.
Deformation measurements were carried out using Digital Image Correlation of High Speed
Photography. These measurements can be used to derive deformations and velocities over the
4 , Architecture and Civil Engineering

-- 16 of 42 --

beam surface, as well as identifying crack patterns and determining crack widths throughout
the loading process. The proposed methodology can, however, only evaluate the beam
response due to object impacts, not the response due to blast loads and fragment impacts.
• The final study uses the experimental methodology to investigate the effect of adding steel
fibres to a concrete mix used for reinforced concrete beams. The initial bending response
and how the initial crack pattern influences the final crack pattern are studied for reinforced
and un-reinforced plain and fibre concrete beams.
1.5 Original features
The original features of the research presented are summarized as follows:
• The spalling damage of concrete is studied using a numerical approach. The study shows
how concrete fractures develop over time instead of forming as a fully developed crack
instantaneously, as stated by theories in the literature. Since fractures during concrete
spalling do not necessarily develop instantaneously, different constitutive models of concrete
can yield varying results depending on how cracking, during non-monotonic loading and
unloading of the material, develops.
• The thesis presents an evaluation of CDPM2 for the structural response of reinforced
concrete structures. The evaluation presents how previously identified limitations regarding
local material response affect a numerical model of a reinforced concrete structure. It also
identifies additional suggestions for improvements needed in terms of numerical modelling.
• A new experimental methodology is presented to study the beam bending response due to a
single drop weight impact. The methodology includes the minimum amount of material
characteristics necessary in order to use an experiment to calibrate and validate a numerical
model. It also introduces detailed measurements of the deformation field in the beams
tested by using High Speed Photography and Digital Image Correlation. Using this method,
deformations, velocities, crack patterns and crack propagation can be followed throughout
the beam bending response from the point of impact to the final stage during the maximum
deformation of the beams. To the author’s knowledge, DIC with HSP has not been previously
used to study the crack propagation response of reinforced concrete structures subjected to
impulse loading.
• The new experimental methodology is used to study the effects of adding steel fibres
to the concrete mix of reinforced beams. The development of cracks is studied directly
after impact to assess how the initial crack patterns influence the final crack pattern at
maximum deformation. Un-reinforced beams were also tested to determine how conventional
reinforcement affects the initial crack pattern at impact from an object for plain and fibre
concrete. The repeatability of the experimental methodology is also evaluated by conducting
two test series with specimens cast at different sites and time intervals.
, Architecture and Civil Engineering 5

-- 17 of 42 --

6 , Architecture and Civil Engineering

-- 18 of 42 --

2 Loads due to blast and impact
2.1 Overview
Loads are usually divided into static loads, quasi static-loads and dynamic loads based on the time
duration of an action. However, dynamic loads span over a range of time intervals. Different time
frames yield different types of response, Gebbeken et al. (2001), both for the material response
and the overall structural response. Thus, different demands for analytical routines and material
representation are created.
Dynamic response can occur within different time frames. For example, when oscillation
occurs in a structure, the time duration can be seconds or parts of seconds. During this time frame,
the deformation of the structure changes; thus, the internal and external forces for the structure
change. If a moving object hits a structure, the response will depend on both the velocity and the
material properties of the two bodies, Leppänen (2012). When a high velocity impact between
a minor object and e.g. a beam occurs, such as a fragment impact, local effects in the form of
damage around the zone of impact will develop within a much shorter time interval than the global
bending deformation of the beam, Leppänen (2005) and Nyström and Gylltoft (2009).
When the type of loading condition is classified based on time intervals, a common measure
used is the strain-rate caused at different martial points in the structure. By measuring the change
in strains per time unit, it is possible to separate long from short time intervals. In Figure 2.1,
different engineering applications with regard to strain-rates are shown. The picture is taken from
Nyström (2013) and is based on a variety of publications: Bischoff and Perry (1991), Field et al.
(2004), Gebbeken and Ruppert (2000), Ramesh (2008), and Zukas (2004).
In this thesis, responses of concrete structures due to blast waves from the detonation of
explosives or the simulation of such events are studied. These responses corresponds to the ”blast
and impact” region in Figure 2.1. Furthermore, experiments of beam bending responses due
to object impact have been conducted. Strain-rates were not explicitly measured. However, by
estimating the strain-rates from the measurements of crack propagation, the strain-rates in the
experiments correspond to an intermediate strain-rate or higher, according to the definitions in
Figure 2.1.
Figure 2.1: Strain-rates and associated problem aspects taken from Nyström (2013)
, Architecture and Civil Engineering 7

-- 19 of 42 --

2.2 Blast wave in air
When a highly explosive substance detonates in the open air, a sudden release of energy and
combustion gases occurs Krauthammer (2008). An explosion can be characterised as a sudden
volumetric expansion of matter due to a physical or chemical change of state. The change of state
results in a sudden release of potential energy to mechanical work. For a detonation of an explosive
substance, the expansion of gases creates an overpressure which generates mechanical work when
the surrounding air is forced away. The highly compressed air surrounding the detonation creates
a blast wave that propagates from the epicentre of the explosion with super sonic speed. Directly
behind the front of the blast wave is a region where pressure, temperature, density and particle
velocity are distinctly higher than in the surrounding air. When the blast wave moves away, these
properties rather rapidly return to their original states Cormie et al. (2009). For a fully developed
blast wave, the pressure rises more or less instantaneously from the normal atmospheric pressure
to peak pressure. The time for the pressure to rise is therefore generally considered to be a singular
jump in time. The pressure then decreases exponentially until an under-pressure is reached that
completes the cycle to the original atmospheric pressure; see Figure 2.2. In structural analyses and
evaluations, the blast wave is usually simplified and only the overpressure is included. Thus, no
negative pressure is applied to the structure. Furthermore, the exponential pressure decrease after
the shock wave has reached the structure and may, depending on application, also be simplified to
a linear decrease, M. Johansson and Laine (2012a).
Figure 2.2: Principal pressure-time relation for a blast wave in air
2.3 Impact of fragments
The detonation of a general purpose bomb will not only create a blast wave but will also send away
fragments, Leppänen (2004). The detonation of explosives will rip the casing of the bomb into
minor pieces creating a cluster of fragments, Janzon (1978). The fragments will represent mass
and velocity and can add a substantial load to a structure. A blast wave and cluster of fragments
can reach a structure at different time intervals because of differences in speed and how speed
8 , Architecture and Civil Engineering

-- 20 of 42 --

retards over distance, Nyström and Gylltoft (2009). Even though the actual impulse of a cluster
of fragments might be distinctly smaller than from a blast wave, the damage to the surface of a
structure can be substantial, Forsén and Nordström (1992). Furthermore, the damage to the surface
may lead to loss of capacity and stiffness influencing the overall structural response. A study of
the combination of fragments and blast wave showed a synergy effect, Nyström (2008). It was
established that the combination of fragments and blast wave created a larger deformation than if
deformations due to fragments alone were added to the deformation due to the blast wave.
An important difference between the stress response in a structure due to a blast load and a
cluster of fragments is that the stress towards the surface of the structure is more or less independent
of the properties of the structure for a blast wave, Cormie et al. (2009). For the cluster of fragments,
the material properties of the fragments and the material properties of the structure will affect
the stress wave that will propagate through the structure upon impact, Goldsmith (1960). The
velocity of the fragments will be important for the magnitude of the stress wave but the stiffness of
the fragments, as well as the stiffness of the material in the structure, will also influence both the
magnitude and duration of the stress wave, Leppänen (2004) and Leppänen (2012). The effect
of the material properties of fragments can be indirectly studied by looking at the response of
flyer plate impact tests, Grady (1996), Gebbeken et al. (2006), and Riedel et al. (2008), where the
material properties of the materials involved are used to calculate the material states.
2.4 Object impact
Another load condition that can be defined as an extreme dynamic impulse action is impact from
objects. Compared to fragment impacts, an object impact can be larger but have a significantly
lower velocity. Similar to loads due to fragment impact, the stresses from an object impact will
depend upon the properties of both the object impacting the structure and the material of the
structure M. Johansson and Laine (2012b). If a hard object strikes a structure with a hard surface
material, a shorter duration of the load created will develop compared to an impact between a
softer object and a softer surface material in the structure. Furthermore, the intensity of the load
will be higher between a hard object and a hard surface. The velocity will also affect the intensity
of the load. Both the mass and velocity contribute to the energy applied to the structure, but with
a given energy level, a higher velocity will result in a higher load intensity.
, Architecture and Civil Engineering 9

-- 21 of 42 --

10 , Architecture and Civil Engineering

-- 22 of 42 --

3 Fracture due to blast and impact
3.1 Overview
A structure that experiences loading due to an explosion undergoes, in general, different reactions
at various stages of the loading and unloading. The most obvious differences are related to local
and global response, see Figure 3.1. However, for dynamic loading, another important factor is the
stress of the structure during different time intervals. Global failures can generally be determined
based on the total energy or load applied to the structure compared to the ability of the structure to
absorb externally applied energy, M. Johansson and Laine (2012b).
Figure 3.1: Local and global response of a structure, structural member and of an entire structure
Other fractures are determined by stresses caused by the shift in applied load over time, 훿푙표푎푑
훿푡 ,
Meyers (1994). Thus, the total intensity of the load is not necessarily critical for initiating a failure
process. If a certain load condition becomes critical for a specific fracture, the corresponding time
interval when that fracture occurs has to be examined. The time frame for a local failure, such as
spalling or scabbing, is shorter than for a global failure, such as a flexural or shear failure.
In the case of dynamic load conditions, different failures compared to static load conditions can
occur in a structure. In the following section(s), the general conditions and related time intervals
for different dynamic failures are presented. Dynamic failures are named differently in various
part of literature, e.g. Werner et al. (2013), Leppänen (2004) or Nyström (2013). Here, the names
of the fractures correspond to U.S. Army Corps of Engineers et al. (2008).
3.2 Spalling
When a wall or a slab is subjected to a highly intense blast wave or a high-speed object, such as a
fragment or projectile, a compression wave may occur inside the structure. When a compression
wave reaches the free edge on the back side of the structure, a stress reflection occurs. Due to
the state of equilibrium this reflection can also be seen as a release wave; see Paper A. When a
release wave starts to propagate back towards the loaded side of the structure, the stress state at the
boundary will be zero. However, if the compression stress further into the structure has decreased
due to the characteristic of the applied load, the release wave can create stress states made up of
tensile stresses. If these tensile stresses are large enough they can result in a crack initiation in the
, Architecture and Civil Engineering 11

-- 23 of 42 --

structure, Mcvay (1988) and Meyers (1994). When the applied load is intense enough, fragments
of the structure can spall off on the back side of the structure not directly subjected to the load.
In a brittle material, such as concrete, spalling may occur more easily due to the large difference
between compression and tensile capacity. In Paper A, spalling in concrete subjected to a shock
wave blast was studied for a simplified one-dimensional specimen. It was shown that for certain
cases of spalling, the cracks can develop during multiple cycles of stress waves rather than instantly
as soon as the tensile strength is reached, which is generally argued by Mcvay (1988), Meyers
(1994), and Leppänen (2012). If this type of response is aimed at describing by numerical models,
the constitutive laws describing the concrete become important with regard to non-monotonic
crack propagation.
3.3 Scabbing
Spalling is generally associated with close-in detonation or clusters of fragments. A close-in
detonation or fragment impact may create pressures strong enough to cause crushing and cratering
on the loaded side of the concrete. When the pressure propagates further into the structure, the
pressure confinement effects increase, but the pressure will disperse when the wave propagates.
Thus, the extension and depth of the cratering is usually limited, Yamaguchi et al. (2011).
3.4 Flexural and shear failures
The flexural response of a reinforced concrete structure subjected to dynamic loading is similar
to the flexural response of a statically loaded structure. Failure modes either include crushing of
the concrete in compression or yielding and eventually rupture of the reinforcement in tension.
Furthermore, different anchorage failures and support slipping may occur. Shear failure can occur
in a manner similar to statically loaded structures, G. S. Ulzurrun and Zanuy (2017). However, for
very intense loads, shear failure may occur during earlier stages of the evolution of deflections.
When the load is first applied, a beam or a slab may obtain a distributed velocity before the
support forces develop. The internal forces in the structure do not occur until the support forces
appear. Thus, bending moments and shear forces emerge from the supports and propagate from
there, Andersson and Karlsson (2012). Highly intense loads can therefore result in stresses on the
structure closer to the supports compared to subjecting the same structure to static loads. This
type of shear failure is called direct shear, Krauthammer (2008) and is a failure that may appear
when stresses in the structure are great enough during the early part of the structural response.
In Papers C and D, the difference between static bending response and dynamic bending
response due to object impact is exemplified. In static loading of reinforced concrete beams, cracks
are initiated at the bottom of the beams and then propagate and grow in crack width when the
applied load is increased. In dynamic drop weight impact tests, a crack pattern formed during the
initial phase of response directly after impacting the top side of the beam. The final crack pattern
where cracks grow from the bottom side of the beams are influenced by the initial crack patterns
and starts to develop at a later stage of the overall response.
Also shown in Papers C and D is the combination of bending response and shear response
during the crack propagation. When a bending crack starts to propagate, the bending stiffness
of the cross-section is reduced. When the bending stiffness is reduced, sectional moments are
12 , Architecture and Civil Engineering

-- 24 of 42 --

reduced. The shear stiffness is less influenced by bending cracks compared to the bending stiffness.
Thus, shear stresses can be more dominant in a cross-section after an initial bending crack has
formed. Therefore, a crack that starts out as a bending crack can turn and change direction as seen
in the crack patterns in Papers C and D.
3.5 Punch-through
When an object has enough mass and velocity, local deformation can be induced that creates
stresses in the structure immediately at impact yielding a local punch-through failure Q. M. Li et al.
(2005). Similar to an ordinary shear failure or a direct shear failure close to a support, the failure
appears where large forces are concentrated to a local area. For an impact towards a concrete
structure, this concentration can lead to a punch-through failure in the concrete shaped like a cone.
In the study performed in Papers C and D, this type of damage appeared during the initial phase
of the impact event.
, Architecture and Civil Engineering 13

-- 25 of 42 --

14 , Architecture and Civil Engineering

-- 26 of 42 --

4 Numerical analyses of failure in concrete struc-
tures
When a material like concrete is to be modelled through numerical analyses, a number of approaches
to describe material fracture are possible including discrete crack models, non-local crack models
and smeared crack models, Jirásek (2010). Any chosen approach has advantages and disadvantages.
The work performed for this thesis has been based on a smeared crack approach where the properties
of the inelastic deformations of concrete are smeared out over a band width. The material model
studied in detail in this thesis was developed during a previous PhD project by Nyström (2013).
4.1 Essential properties of concrete constitutive models
Depending on the aim of a structural model and loading condition, the demands on the material
models utilized vary. When the response of, for instance, concrete is studied during static conditions,
various aspects need to be considered. Different stress states will place different demands on
the complexity of the material model. If a material model is simplified, it also becomes more
limited in general applicability. In dynamic response, there are aspects of material response that
are unique to or of greater importance than to static conditions. One of the unique properties only
implicitly considered in dynamics is how the material strength depends on the rate of the stress
applied, generally measured as the strain-rate, 훿휀
훿푡 . Other features less common in static evaluation
include non-linear compaction under hydrostatic compression and residual strength after extensive
material damage, Gabet (2006). These final two properties are more likely to occur in fast dynamic
events because of inertia effects creating local confinements during brief time intervals. There
are many different approaches to describe these responses with the help of a constitutive model,
such as the Winfrith Concrete Model, Broadhouse and Neilson (1987), the RHT Concrete Model,
Riedel (2000), or the Karagozian & Case (K&C) Concrete Model, Magallanes et al. (2010), which
are commonly used. In a project preceding this thesis, a combined damage and plasticity model
was developed in order to describe these properties, Nyström (2013) and Grassl et al. (2013).
The evaluation of properties is presented in Nyström (2013) and in Figure 4.1 in which the most
important features of a material model describing concrete are placed at the base of the pyramid
and in decreasing importance towards the top. In the work presented here, this model was evaluated
with respect to its ability to describe the structural response of reinforced concrete structures in
finite element analyses.
In Nyström (2013), strain-rate dependency of strength, post-peak softening, non-linear com-
paction curve for high pressures and residual strength in confined compression were concluded
to be the most important features of the concrete response to dynamic loads. Post-peak soften-
ing is a material property which is not unique to dynamic conditions. For multi-axial loading,
pressure-sensitive strength is also considered to be a general property of concrete.
Strain-rate dependent strength, however, is an effect which only impacts the material properties
during dynamic conditions. The dynamic tensile strength has been shown to be as high as eight
times the tensile strength of a static load condition, Malvar and Ross (1998). In compression, the
dynamic strength observed is about 2,5 times the static strength, Bischoff and Perry (1991).
Residual strength in confined compression and the non-linear compaction curve for high
, Architecture and Civil Engineering 15

-- 27 of 42 --

Figure 4.1: Assessment of properties during development of material model, from Nyström (2013)
confinement pressure, Williams et al. (2006), are aspects of the response which occur during
both dynamic and static conditions. However, high confinement pressures are difficult to create
and maintain during static conditions since the confinement requires externally applied loads.
For dynamics, the confinement can be created due to inertia effects in the material where a high
pressure is confined by the surrounding material, D. Johansson and Villegas (2010).
4.2 Constitutive models for concrete fracture in tension
Concrete, with its varying different properties depending on the stress state, needs rather complex
constitutive laws to capture the response for an arbitrary stress state. In many applications, the
focus lies on the ability to capture a specific response, which allows for reducing the complexity
of the material model.
If a concrete specimen is loaded in monotonic tension under static conditions, the tensile stress
will reach a peak value from which the stress gradually decreases with increasing deformation,
leading to the formation of a crack. This material softening during crack formation develops more
or less exponentially but in most applications, it is considered sufficient to use a bi-linear softening
law, Gylltoft (1983), or even a linear softening law.
In Paper A, spalling in a concrete wall subjected to a close-by explosion is studied. In this
paper, the tensile response of the concrete is modelled according to three different constitutive
laws, a plasticity model, a damage model and a combined damage and plasticity model. All of
them use linear softening when cracks are developed in the concrete.
Consequently, for a crack forming under monotonically increasing tensile deformation, it will
yield the same structural response. However, for more complex loading situations with varying
stress conditions in the initiated crack, the different constitutive models will result in different
structural responses. In a plasticity model, the elastic response upon unloading will be based on
the original stiffness of the material, whereas for a damage model the stiffness will be reduced.
This means that the final structural response may differ if, for example, a non-monotonic response
takes place, as shown in Paper A. Since the concrete undergoes multiple stages of compression
and tension, see Figure 4.2, the response during the transition will affect the result.
16 , Architecture and Civil Engineering

-- 28 of 42 --

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
Figure 4.2: Stress-strain relation for cyclic tensile and compressive loading of concrete for (a) a
plasticity model (b) a damage model (c) a damage-plasticity model
4.3 Evaluation of CDPM2
One of the aims of this study has been to evaluate and confirm the potential areas of development
for the new CDPM2 material model when used in dynamic models and identify possible areas
of improvement. In Nyström (2013), the following features were suggested as potential areas of
improvement:
• Increased material stiffness after non-linear compaction
• Avoiding overestimated fracture energy due to double strain-rate dependency
• Reduction of the strain-rate dependency for compressive strength for modelling with solid
elements at high strain-rates
The aim was to study these features in Paper B to investigate their relevance for analysis of
structural members of reinforced concrete. Furthermore, additional potential areas of improvement
of the material model was to be identified. The conclusions of the study is summarised in the
following sub-sections.
4.3.1 Increased material stiffness after non-linear compaction
The constitutive laws for CDPM2 do not affect the material stiffness after volumetric compaction,
i.e., when the concrete is compressed in such way that the pore system collapses and a more solid
material is created. This feature of the concrete material is relevant when a structure is hit by a
high speed projectile or fragment. It was shown in Nyström (2013) that CDPM2 had a too low
stiffness for hydrostatic pressures of 2 GPa and higher. In Paper B, structures subjected to blast
loads resulted in flexural deflections was studied and for that type of response, such high pressures
were not reached. These results indicate that for reinforced concrete structures subjected to blast
loads, which are not close by detonations, the increased stiffness due to compaction is unimportant
to the structural response.
, Architecture and Civil Engineering 17

-- 29 of 42 --

4.3.2 Avoiding of overestimated fracture energy due to double strain-rate
dependency
The constitutive laws that treat tensile strength and strain softening branch in tension results in
an increased tensile strength for high strain-rates, but also an equally increase of the maximum
crack opening, see Nyström (2013) and Paper B. Since both the strength and strain that represent
the crack opening are increased, the dynamic increase factor for the fracture energy, 퐷퐼퐹퐺퐹 , is
equal to the dynamic increase factor of the strength squared, 퐷퐼퐹 2
푓푐푡 . The available studies of how
the strain-rate influences the fracture energy are limited but indicate that the dynamic increase
factor for fracture energy is proportional to the rate effect on the tensile strength, Schuler et al.
(2006), Weerheijm and Van Doormaal (2007), and G. Ulzurrun and Zanuy (2017). In Weerheijm
and Van Doormaal (2007), it is also concluded that the maximum crack opening remain constant.
The study in Paper B shows that a variation of input values for fracture energy results in a large
variation of deflection for beams and plates. Therefore, an overestimation of the strain-rate effect
for fracture energy can be expected to result in an underestimation of deformation similar to that
seen in Paper B. This represents an improvement of the material model that is expected to improve
the performance when used to analyse reinforced concrete structures for their bending response.
4.3.3 Reduction of strain-rate dependency in compression for solid elements
The strain-rate dependency of the material strength is, in CDPM2, treated by using a magnification
factor for concrete strength based on the strain-rate of the total strain, Nyström (2013). For tension,
the rate factor is based on the expression proposed by Malvar and Ross (1998) and for compression,
the expression proposed in fib Model Code for Concrete Structures 2010 (2013) is used. However,
in Nyström (2013), it was shown that the expression proposed in fib Model Code for Concrete
Structures 2010 (2013), combined with 3D continuum elements, resulted in an overestimation
of the rate effects for the compression strength. Paper B studied the flexural response of a beam
and a plate with or without the strain-rate effect turned on for CDPM2. It was shown that the
strain-rate effect has a significant influence on the deflection of the structure. However, how much
of that effect that that is attributed to the overestimation of compression strength and how much
that derives from the overestimation of the fracture energy could not be determined in the study.
4.3.4 Strain softening for compression failure
In the study reported in Paper B, the strain softening for compression failure was also identified to
be important for the analysis of the structural response of reinforced concrete structures subjected
to blast loads. Concrete failure in uniaxial compression is reached after softening, Karsan and
Jirsan (1969). In a smeared crack approach, the localisation zone where the inelastic deformation
takes place needs to be defined in order to obtain a correct stress-strain relation, Jirásek (2010).
The implementation of CDPM2 defines a stress-strain relation based on a pre-specified element
size and ductility measure, Grassl et al. (2013). In Paper B, problems with convergence occurred
for the slab analyses. It was believed to be due to the description of the softening in compression.
To treat this, elastic elements were used on the concrete surface by the supports and at the top
of the slab where the plastic hinge occurred. However, the results of the study indicate that an
implementation, where the stress-strain relation is based on the actual element sizes, is desirable.
18 , Architecture and Civil Engineering

-- 30 of 42 --

5 Experiments for support of numerical models
5.1 Requirements for numerical modelling
From the work performed for Paper B, it was concluded that many experimental studies are not
aimed at providing data for calibration of numerical models. The objective was to evaluate CDPM2
on a structural level. This was approached by finite element analyses of reinforced concrete beams
and a slab. The structures studied were selected from the literature, Thiagarajan and Johnson
(2014), Thiagarajan et al. (2015), and Schwer (2013) and Magnusson and Hansson (2005).
When the model calibration in Paper B was carried out, it became obvious that additional
data were needed for a proper evaluation of the performance of the numerical model. Different
modelling techniques yielded varying results in deformation over time but more importantly, it
was possible to influence the deformation shape and fracture modes by varying input parameters
that are not directly associated with the stiffness of the structure, such as element mesh density.
Based on the data from the experiments, the ability to evaluate the performance of the models
compared to experimental results became limited.
In addition, detailed material properties of the concrete necessary for advanced numerical
models are, in general, not presented in experimental studies. The reinforcement is, in many cases,
only presented in terms of yield strength or classification. When it comes to data collection of
performed experiments, limitations of data points are the most common problems in calibrating
numerical models. Common measurements of, for example, bending response of beams and slabs
may include; mid-span deformation over time, reaction forces over time and final damage of the
structure, such as crack patterns or spalled of concrete.
The data that were identified as minimum requirements to carry out a numerical model calibra-
tion or validation are listed below:
• Detailed material characteristics of the tested structure.
• Detailed measurements of the applied load, such as velocity, mass or pressure as a function
of time in addition to consistent loads between different tested specimens.
• Measurements of deformations over time for multiple points of the specimens tested.
• Characterisation of damage and/or fracture and how they have been developing.
5.2 Development of experimental programme
Given the knowledge gathered during the literature review, evaluation of experiments in literature
and performing the study presented in Paper B, the design of an experimental programme was
started. Many studies with drop weight impact investigate concrete material properties. One of the
main aim of the experimental series became to supply input data and results that can be compared
to numerical models of reinforced concrete structures where high strain-rates are created in the
concrete. Ågårdh et al. (1997), Fujikake et al. (2009), Tachibana et al. (2010), and Kishi et al.
(2002) presents studies that were evaluated and influenced the design of the experiment set-up
presented in Paper C. Crack propagations and deformations of the tested structure were in mind
, Architecture and Civil Engineering 19

-- 31 of 42 --

when designing the experiments and planning the data measurements. Independence to perform
the experiments was considered important. Measurements from the experiments had to offer
flexibility regarding which structural points that could later be evaluated, both for deformation
measurements and crack identification.
A probable cause for the limited data from a model verification point of view presented in the
experimental studies are the amount of work it takes to gather, process and evaluate large amounts
of measurements. Since additional measured deformation points were considered beneficial for
the experimental study, the technique to monitor deformations was chosen with this in mind. Thus,
the load conditions were not restricted to blast loads. One of the conclusions from Paper B was
that as long as we are relying on the experimental studies of others for our numerical modelling,
we will always be restricted with regard to the response, amount and type of data extracted from
experiments. Therefore, the load conditions selected for the experimental study have been affected
by the capacity of our existing research lab.
5.3 Experimental set-up
A drop weight rig was designed that allowed for a drop weight velocity of up to 10 m∕s from a
guided free fall. The drop weight used in the experimental programme had a mass of 10 kg but the
guiding tube design could allow a drop weight with a mass of up to approximately 20 kg without
any further configurations. The beams tested had a span length of 1.0 m and a cross-section area
of 100푥100 mm2. The experiment set-up is illustrated in Figure 5.1 and described in detail in
Paper C.
Figure 5.1: Experimental set-up and DIC measured area in experimental programme presented in
Papers C and D.
A drop weight with a velocity governed by gravity due to free fall was considered more reliable
than an impact with the velocity controlled by hydraulic or air pressure. Boundary conditions had
to be readily definable in a numerical model. In order to not introduce support conditions that
might need to be adjusted and calibrated in a numerical model, steel rollers were chosen to achieve
reliable simply supported conditions. Furthermore, attempts to constrain a horizontal motion of
20 , Architecture and Civil Engineering

-- 32 of 42 --

the beams and constrains for upwards translation of the beam supports were avoided. All these
actions were taken in order to limit the potential source of errors in future numerical models.
5.4 Measurement techniques
The focus of the experimental measurements were on deformations of the beams and crack patterns.
It was important to be able to follow the development of these results over time during the impact
response. The beam response with respect to deformations during drop weight impact tests has
previously been proven successful using Digital Image Correlation in Isaac et al. (2017). The
technique has also proved capable of measuring crack propagation and crack widths by Gencturk
et al. (2014) and Destrebecq et al. (2011). Therefore, DIC of High Speed Photography sequence
were used to evaluate deformations, crack patterns and crack widths.
The DIC was carried out using GOM Correlate, GOM (2016). The beam specimens were
prepared by first painting them with a white non-reflective paint. A black paint was applied by a
natural sponge to receive a random pattern that the DIC software could identify by analysing the
grey scale of a certain pixel in an image. GOM Correlate defines a grey value in eight bits and can
therefore obtain 28 = 256 possible values for each pixel. In the experimental studies, image areas
were evaluated via facets.
In their original state, facets are square areas in the image. Size and distance can be adjusted in
the software. By using a random pattern over the measured area, a facet can be identified between
different images, see Figure 5.2. The quality of the pattern and distortion will influence the results
and a facet pattern with three to four contrast points has been proven ideal according to GOM
(2016) manual. The pore size and pore distribution of the sponge used to apply the black paint and
create the patterns of the beams were therefore based on the targeted number of beam measurement
points.
Figure 5.2: Two facets of a specimen pattern tracked between two different images.
The high speed cameras used in the two experimental series in Papers C and D allowed an
image resolution of 1024푥768 for the chosen frame rate. The picture space of the beams were 130
and 120 pixels, respectively. Each facet was defined as 15x15 pixels which means that each facet
collected data from approximately 12,5x12,5 mm. Furthermore, a 5 pixel distance between each
facet centre was used so that each facet would overlap the neighbouring facet with regard to the
pixels used to identify the grey scale patterns between images. The 12,5x12,5 mm facet size was
the baseline for the painted pattern on the beam surface.
, Architecture and Civil Engineering 21

-- 33 of 42 --

5.5 Evaluation of experimental series
The two experimental series carried out are presented in Papers C and D. Paper C presents the
methodology and evaluates the repeatability between tested specimens and accuracy of the DIC
measurements. In Paper D, the results from the two independent test series are evaluated. The
deformations of the different beams types, initial and final crack patterns and differences between
statically loaded beams and those subjected to drop weight impact are evaluated. Below, the
conclusions of the results in Papers C and D, respectively are listed:
• The drop weight velocity as well as the behaviour of the tested beams could be determined
and monitored throughout the impact response history.
• The concrete and reinforcement were characterised through material tests in order for the
experimental method to support the future development and evaluation of numerical models.
• The DIC set-up, using a camera frame rate of 5,000 fps, subset size of 15x15 pixels and
image resolution of 1,024x175 pixels covering half of the tested beam, showed an adequate
level of detail to be able to identify and quantify the required results throughout the impact,
including impact velocity of the drop weight, deformations, crack patterns, number of cracks
and crack widths.
• The frame rate used enabled an evaluation of the deformation field of the impact and the
following response of the beams. However, it was not enough to fully identify relative time
origin and order of the different cracks at impact.
• The accuracy of the crack widths extracted from the DIC analyses was verified by microscope
measurements of the final crack widths for three major cracks in four different beams. High
conformity could be seen for the final crack widths and it was therefore concluded that there
was a similar conformity during the impact response.
• The repeatability of the experiments was found to be satisfactory and fulfilled the expec-
tations with respect to; the crack pattern, including the number of cracks, in the different
stages of crack development; the maximum mid-span deformations; and the drop weight
velocity.
• The positions of the cracks were determined during the initial phase of the response during
impact when the drop weight struck the beams.
• Regarding the final crack pattern, only small variations between the reinforced fibre concrete
and the plain concrete beams, respectively, were observed.
• For the experimental results to support the use and development of numerical material mod-
els, the following parameters have been identified and collected as a base set of information:
– Material characteristics for concrete including modulus of elasticity, compression and
tension strength, as well as fracture energy and tensile response upon cracking.
– Material characteristics for reinforcement, including modulus of elasticity, yield and
ultimate strength, in addition to strain at ultimate strength.
22 , Architecture and Civil Engineering

-- 34 of 42 --

– Clear geometry and reinforcement configuration for test specimens, including boundary
and loading conditions.
– Loading velocity of the drop weight.
– Deformation as a function of time in different parts of the tested specimens.
– Crack pattern and crack widths in the specimens and preferably their development as
a function of time.
– A sufficient number of test specimens, both for material tests (minimum three speci-
mens per test) and impact tests, in order to quantify the distribution of the results.
The conclusions in Paper D are summarized as follow:
• The mid-span deformation of the reinforced fibre concrete beams was smaller compared
to the reinforced plain concrete beams, showing a higher energy absorption of the fibre
concrete beams.
• The standard deviation of the mid-span deformation was smaller for the reinforced fibre
concrete beams than for the reinforced plain concrete beams. Thus, a more homogeneous
population emerged with fibre concrete.
• The difference in the initial cracking behaviour of the beams was minor between plain and
fibre concrete, as well as between beams with or without conventional reinforcement.
• When comparing plain and fibre concrete beams, the difference was minor in the number of
cracks on the top side of the beams during the initial phase of the impact response.
• The final number of cracks on the bottom side of the reinforced beams was increased with
fibre concrete compared to plain concrete.
• As expected, the static load carrying capacity of the reinforced fibre concrete beams was
higher than for the reinforced plain concrete beams.
• The mean crack distance in the statically tested beams was lower for the reinforced fibre
concrete beams than for the reinforced plain concrete beams and corresponded to the
increased number of cracks in the drop weight tests.
• The repeatability of the drop weight impact tests was high, both within the individual test
series and between the two test series.
, Architecture and Civil Engineering 23

-- 35 of 42 --

24 , Architecture and Civil Engineering

-- 36 of 42 --

6 Conclusions
6.1 General conclusions
The studies presented in this thesis increase the knowledge base within four different areas of
concrete structures subjected to extreme dynamic impulse actions. Reinforced concrete structures
of both plain and fibre concrete have been evaluated for extreme dynamic impulse loading. Both
numerical studies and experimental studies have been presented. Furthermore, a methodology
of how to carry out experimental studies in order to receive necessary input data and results for
calibration and verification of numerical models have been presented.
Four studies are included in this theses, the first in Paper A, where spalling in a concrete
specimen due to a blast wave was studied. The assumption made in previous research that
the damage due to tensile stress from the release wave develops instantaneously within a time
singularity was shown to be inaccurate. During the development of the fracture, i.e. the crack
propagation, the release wave continued to propagate past the point of first crack initiation. For
a case in which a blast wave hits a concrete wall, the length of the blast wave is typically much
longer than the thickness of the wall. For such a case, it was shown that the crack did not form
until multiple compression and release waves had passed. It was also shown that the choice of
constitutive model to describe the tensile fracture, using plasticity or damage theory, affected the
response and propagation of the blast wave. It was therefore concluded that to be able to describe
spalling in numerical analysis, for some case of spalling, the choice of constitutive model for
concrete tensile fracture can be crucial.
In the second study presented in Paper B, the performance of the new material model, CDPM2,
based on combined damage and plasticity, was investigated for blast loaded beam and slab speci-
mens. Some of the limitations presented in Nyström (2013) and how these limitations affected
the response of beams and slabs were investigated. It was concluded that the strain-rate depen-
dency of strength and fracture energy of the concrete affected the response of the structures. It
was also shown that the chosen fracture energy had a larger influence on the deflection of the
structures than if strain-rate dependent strength was included or not for the concrete. Thus, it was
concluded that the strain-rate dependency of the fracture energy must be described correctly. The
available research with regard to strain-rate dependency for the fracture energy, Weerheijm and
Van Doormaal (2007) and Schuler et al. (2006), suggested a lower increase of fracture energy
due to increased strain-rates compared to tensile strength. Thus, the constitutive laws in CDPM2
should be adjusted to better fit available data.
The research presented in Paper C, includes the experimental design, evaluation of the experi-
mental methodology and accuracy of the DIC measurements. In Paper C, it shows that DIC can
be used to evaluate the impact response of concrete beam structures. Previous researchers, Isaac
et al. (2017), have shown that deformations of beams can be evaluated throughout the bending
response. In Paper C, it was shown that beams subjected to drop weight impacts can be studied
at a much more detailed level than just over-all beam deflections. Crack patterns could also be
identified provided that the pattern evaluated by DIC has a sufficient level of detail.
In Paper D, an additional experimental series was carried out. Smaller modifications were
applied to the experimental preparation. A different High Speed Camera was used with a higher
frame rate to be able to determine when different cracks occurred in relation to each other. In
, Architecture and Civil Engineering 25

-- 37 of 42 --

addition to the reinforced plain and fibre concrete beams, un-reinforced plain and fibre concrete
beams were included. The experimental series have been evaluated with respect to repeatability
within each series and between independently performed series. Furthermore, the series are
evaluated based on the potential for using the results for the calibration of advanced numerical
models.
6.2 Suggestions for future research
For the calibration and validation of numerical models, it was concluded that more extensive data
are needed than commonly presented in experimental studies. Paper C presents an experimental
methodology to carry out and monitor dynamic drop weight tests of reinforced plain and fibre con-
crete beams. The material data needed in order to use the results to calibrate and validate numerical
models are presented. The experimental set-up and measurement of deformations presented in
Paper C allow for the collection of data that were identified as minimal after evaluating the study
performed in Paper B in order to calibrate and validate numerical models. The experimental data
collected can, thus, be used for proper calibration and validation similar to those performed in
Paper B.
The results in Paper D have been collected from a study in which two different concrete mixes
were used. In order to evaluate different concrete mixes, more diverse experimental studies are
needed. In the studies presented in Paper D, only normal strength concrete was used. Steel fibres
were added to a plain concrete mix. To better represent the type of fibre concrete normally used in
construction, studies of high strength and intermediate strength concrete should also be carried
out.
Another important feature to investigate concerns the economical aspect of the material choice.
In Papers C and D, fibres were added which increased the total amount of steel used in each
beam. The cost efficiency of this approach was not evaluated and the studies in this thesis were not
designed to yield data on this matter. To study the efficiency of fibres, conventional reinforcement
can be decreased for the fibre concrete beams with the same amount as the added fibres. A similar
approach would be to increase the conventional reinforcement for plain concrete.
In Paper A, the phenomena leading to spalling of concrete due to extreme dynamic loads were
investigated. The conclusions of that study have not been confirmed by any experimental study. To
do this, experiments in which a fracture occurs during a very brief time interval must be designed.
An applied load should aim to gradually develop a spalling crack, either by gradually decreasing
pressure or by minor repeated impacts from an object.
26 , Architecture and Civil Engineering

-- 38 of 42 --

References
Ågårdh, L., Bolling, K. G., and Laine, L. (1997). Fibre Reinforced Concrete Beams Loaded by
Impact.pdf. Tech. rep. Tumba, Sweden: Division of Wepons and Protection.
Andersson, S. and Karlsson, H. (2012). “Structural response of reinforced concrete beams subjected
to explosions: Time dependent transformation factors, support reactions and distribution of
section forces”. Master Thesis. Chalmers University of Technology, p. 145.
Bažant, Z. P. and Belytschko, T. B. (1985). “Wave Propagation in a Strain Softening Bar: Exact
Solution”. In: Journal of Engineering Mechanics 111.3, pp. 381–389. ISSN: 0733-9399. DOI:
10.1061/(ASCE)0733-9399(1985)111:3(381).
Bischoff, P. H. and Perry, S. H. (1991). “Compressive behaviour of concrete at high strain rates”. In:
Materials and Structures 24.6, pp. 425–450. ISSN: 0025-5432. DOI: 10.1007/BF02472016.
Broadhouse, B. and Neilson, A. (1987). Modelling reinforced concrete structures in DYNA3D.
Tech. rep. London: DYNA3D user group conference.
Cormie, D., Mays, G., and Smith, P. (2009). Blast effects on buildings. Second edition. Thomas
Telford Ltd, p. 338. ISBN: 978-7277-3521-8.
Destrebecq, J. F., Toussaint, E., and Ferrier, E. (2011). “Analysis of Cracks and Deformations in
a Full Scale Reinforced Concrete Beam Using a Digital Image Correlation Technique”. In:
Experimental Mechanics 51.6, pp. 879–890. ISSN: 00144851. DOI: 10.1007/s11340-010-
9384-9.
Ekström, J., Rempling, R., and Plos, M. (2016). “Spalling in concrete subjected to shock wave blast”.
In: Engineering Structures 122, pp. 72–82. ISSN: 01410296. DOI: 10.1016/j.engstruct.
2016.05.002.
fib Model Code for Concrete Structures 2010 (2013). Weinheim, Germany: Wiley-VCH Verlag
GmbH & Co. KGaA. ISBN: 9783433604090. DOI: 10.1002/9783433604090.
Field, J. E., Walley, S. M., Proud, W. G., Goldrein, H. T., and Siviour, C. R. (2004). “Review
of experimental techniques for high rate deformation and shock studies”. In: International
Journal of Impact Engineering. Vol. 30. 7, pp. 725–775. ISBN: 0734-743X. DOI: 10.1016/j.
ijimpeng.2004.03.005.
Forsén, R. and Nordström, M. (1992). Reinforced Concrete Slabs Due to the Combination of Blast
and Fragment Loading. FOA report B 20101-2.6. Tech. rep. Tumba, Sweden: Swedish Defence
Research Agency, p. 12.
Fujikake, K., Li, B., and Soeun, S. (2009). “Impact Response of Reinforced Concrete Beam and
Its Analytical Evaluation”. In: Journal of Structural Engineering 135.8, pp. 938–950. DOI:
10.1061/(ASCE)ST.1943-541X.0000039.
Gabet, T. (2006). “Comportement triaxial du béton sous fortes contraintes: Influence du trajet de
chargement”. PhD thesis. Joseph Fourier University, Grenoble, France, p. 163.
Gebbeken, N., Greulich, S., and Pietzsch, A. (2006). “Hugoniot properties for concrete determined
by full-scale detonation experiments and flyer-plate-impact tests”. In: International Journal of
Impact Engineering 32.12, pp. 2017–2031. ISSN: 0734743X. DOI: 10.1016/j.ijimpeng.
2005.08.003.
Gebbeken, N., Greulich, S., and Pietzsch, a. (2001). “Performance of Concrete Based Building
Materials Against Blast and Impact 1 Introduction”. In: JANUARY.
, Architecture and Civil Engineering 27

-- 39 of 42 --

Gebbeken, N. and Ruppert, M. (2000). “A new material model for concrete in high-dynamic
hydrocode simulations”. In: 70.March 1999.
Gencturk, B., Hossain, K., Kapadia, A., Labib, E., and Mo, Y.-L. (2014). “Use of digital image
correlation technique in full-scale testing of prestressed concrete structures”. In: Measurement
47, pp. 505–515. ISSN: 02632241. DOI: 10.1016/j.measurement.2013.09.018.
Goldsmith, W. (1960). Impact : the theory and physical behaviour of colliding solids. London:
Edward Arnold Ltd, p. 379.
GOM (2016). GOM Correlate. Version V8 SP1. URL: http://www.gom.com.
Grady, D. (1996). “Shock Equation of State Properties of Concrete”. In: International conference
on structures under shock and . . . Pp. 1–10.
Grassl, P., Xenos, D., Nyström, U., Rempling, R., and Gylltoft, K. (2013). “CDPM2: A damage-
plasticity approach to modelling the failure of concrete”. In: International Journal of Solids
and Structures 50.24, pp. 3805–3816. ISSN: 00207683. DOI: 10.1016/j.ijsolstr.2013.
07.008.
Gylltoft, K. (1983). “Fracture mechanics models for fatigue in concrete structures”. PhD thesis.
LuleåUniversity of Technology, Sweden, p. 210.
Isaac, P., Darby, A., Ibell, T., and Evernden, M. (2017). “Experimental investigation into the
force propagation velocity due to hard impacts on reinforced concrete members”. In: Interna-
tional Journal of Impact Engineering 100, pp. 131–138. ISSN: 0734743X. DOI: 10.1016/j.
ijimpeng.2016.09.005.
Janzon, B. (1978). Grundläggande stridsdelsfysik. Tech. rep. Stockholm, Sweden, p. 164.
Jirásek, M. (2010). Modeling of Localized Inelastic Deformation. 7th ed. Czech Technical Univer-
sity, Prague.
Johansson, D. and Villegas, T. (2010). “Dynamic blast compaction of some granular materials :
small-scale tests and numerical modelling of a mining-related problem Finn Ouchterlony”. In:
2.2, pp. 79–100. ISSN: 17548918. DOI: 10.1504/IJMME.2010.035311.
Johansson, M. (2000). “Structural Behaviour in Concrete Frame Corners of Civil Defence Shelters”.
PhD thesis. Chalmers University of Technology, p. 145. ISBN: 9171978895.
Johansson, M. and Laine, L. (2012a). Bebyggelsens motståndsförmåga mot extrem dynamisk
belastning Del 1 : Last av luftstötvåg. Karlstad. ISBN: 9789173832663.
— (2012b). Bebyggelsens motståndsförmåga mot extrem dynamisk belastning, Del 3 – Kapacitet
hos byggnader. Karlstad, Sweden: Myndigheten för samhällsskydd och beredskap, p. 100.
Karsan, I. D. and Jirsan, J. O. (1969). “Behavior of Concrete Under Compressive Loadings”. In:
Journal of the Structural Division 95.ST12, pp. 2543–2563.
Kishi, N., Mikami, H., Matsuoka, K. G., and Ando, T. (2002). “Impact behavior of shear-failure-
type RC beams without shear rebar”. In: International Journal of Impact Engineering 27.9,
pp. 955–968. ISSN: 0734743X. DOI: 10.1016/S0734-743X(01)00149-X.
Krauthammer, T. (2008). Modern Protective Structures. Civil and environmental engineering.
Taylor & Francis. ISBN: 9781420015423.
Leppänen, J. (2004). “Concrete Structures Subjected to Fragment Impacts”. 50. PhD thesis. In-
stitutionen för konstruktionsteknik, Chalmers tekniska högskola, Göteborg, Sweden. ISBN:
91-7291-511-0.
— (2005). “Experiments and numerical analyses of blast and fragment impacts on concrete”.
In: International Journal of Impact Engineering 31.7, pp. 843–860. ISSN: 0734743X. DOI:
10.1016/j.ijimpeng.2004.04.012.
28 , Architecture and Civil Engineering

-- 40 of 42 --

— (2012). Splitterverkan. Karlstad, Sweden: Myndigheten för samhällsskydd och beredskap,
p. 134. ISBN: 9789173831888.
Li, Q. M., Reid, S. R., Wen, H. M., and Telford, A. R. (2005). “Local impact effects of hard missiles
on concrete targets”. In: 32, pp. 224–284. DOI: 10.1016/j.ijimpeng.2005.04.005.
Lindgren, F. (2014). FOI Memo 5089 Hotbildsunderlag i utvecklingen av civilt försvar. Tech. rep.,
p. 26.
Magallanes, J. M. et al. (2010). “Recent Improvements to Release III of the K & C Concrete
Model”. In: 11th International LS-DYNA User Conference. 1, pp. 37–48.
Magnusson, J. and Hansson, H. (2005). Simuleringar av explosionsbelastade betongbalkar – en
principstudie, FOI-R–1686–SE. Tech. rep. Tumba, Sweden, p. 55.
Malvar, L. J. and Ross, C. (1998). “Review of Strain Rate Effects for Concrete in Tension”. In:
ACI Materials Journal 95.6. ISSN: 0889-325X. DOI: 10.14359/418.
Mcvay, M. K. (1988). Spall Damage of Concrete Structures. Tech. rep. Vicksburg, Mississippi:
Structures Laboratory, Department of the Army, Waterways Experiment Station, Corps of
Engineers, p. 175.
Meyers, M. A. (1994). Dynamic Behavior of Materials. Wiley-Interscience publication. New York
, NY: John Wiley & Sons, Inc. ISBN: 9780471582625.
MSB (2014). Beräkningar av impulsbelastade konstruktioner 2014. Karlstad.
— (2017). Den komplexa hotbilden.
Nyström, U. (2008). “Concrete structures subjected to blast and fragment impacts : numerical
simulations of reinforced and fibre-reinforced concrete”. Licentiate Thesis. Chalmers University
of Technology, Göteborg, Sweden, p. 72.
— (2013). “Modelling of Concrete Structures Subjected to Blast and Fragment Loading”. PhD
thesis. Chalmers University of Technology, Göteborg, Sweden, p. 83. ISBN: 9789173858052.
Nyström, U. and Gylltoft, K. (2009). “Numerical studies of the combined effects of blast and
fragment loading”. In: International Journal of Impact Engineering 36.8, pp. 995–1005. ISSN:
0734743X. DOI: 10.1016/j.ijimpeng.2009.02.008.
— (2011). “Comparative numerical studies of projectile impacts on plain and steel-fibre reinforced
concrete”. In: International Journal of Impact Engineering 38.2-3, pp. 95–105. ISSN: 0734743X.
DOI: 10.1016/j.ijimpeng.2010.10.003.
Plos, M. and Gylltoft, K. (1994). “Splicing of Reinforcement in Frame Corners: Experimental
Studies”. In: Nordic Concrete Research 14 (1/1994), pp. 103–121. ISSN: 0800-6377.
Ramesh, K. (2008). “High rates and impact experiments”. In: Springer handbook of experimental
solid mechanics. New York , NY, USA: Springer, pp. 929–959.
Riedel, W. (2000). “Beton unter dynamischen Lasten – meso- und makromechanische Modelle
und ihre Parameter”. PhD thesis. Universität der Bundeswerh München, p. 210.
Riedel, W., Wicklein, M., and Thoma, K. (2008). “Shock properties of conventional and high
strength concrete: Experimental and mesomechanical analysis”. In: International Journal of
Impact Engineering 35.3, pp. 155–171. ISSN: 0734743X. DOI: 10.1016/j.ijimpeng.2007.
02.001.
Schuler, H., Mayrhofer, C., and Thoma, K. (2006). “Spall experiments for the measurement of the
tensile strength and fracture energy of concrete at high strain rates”. In: International Journal
of Impact Engineering 32.10, pp. 1635–1650. ISSN: 0734743X. DOI: 10.1016/j.ijimpeng.
2005.01.010.
, Architecture and Civil Engineering 29

-- 41 of 42 --

Schwer, L. (2013). Prediction of Air Blast Loaded Concrete Slab Response Using Six LS-DYNA
Concrete Models. Tech. rep., pp. 1–32.
Solomos, G., Cadoni, E., and Albertini, C. (2013). “Concrete behaviour in direct tension tests at
high strain rates”. In: 65, pp. 660–672.
Tachibana, S., Masuya, H., and Nakamura, S. (2010). “Performance based design of reinforced
concrete beams under impact”. In: Natural Hazards and Earth System Science 10.6, pp. 1069–
1078. DOI: 10.5194/nhess-10-1069-2010.
Thiagarajan, G. and Johnson, C. F. (2014). “Experimental Behavior of Reinforced Concrete Slabs
Subjected to Shock Loading”. In: ACI Structural Journal 111.6, pp. 1407–1417.
Thiagarajan, G., Kadambi, A. V., Robert, S., and Johnson, C. F. (2015). “Experimental and finite
element analysis of doubly reinforced concrete slabs subjected to blast loads”. In: International
Journal of Impact Engineering 75, pp. 162–173. ISSN: 0734743X. DOI: 10.1016/j.ijimpeng.
2014.07.018.
Tilert, D., Svedbjörk, G., Ouchterlony, F., Nilsson, B., Temun, A., and Mattsson, L. (2007).
“Measurement of explosively induced movement and spalling of granite model blocks”. In:
International Journal of Impact Engineering 34.12, pp. 1936–1952. ISSN: 0734743X. DOI:
10.1016/j.ijimpeng.2006.11.006.
Ulzurrun, G. S. and Zanuy, C. (2017). “Enhancement of impact performance of reinforced concrete
beams without stirrups by adding steel fibers”. In: Construction and Building Materials 145,
pp. 166–182. ISSN: 09500618. DOI: 10.1016/j.conbuildmat.2017.04.005.
Ulzurrun, G. and Zanuy, C. (2017). “Flexural response of SFRC under impact loading”. In:
Construction and Building Materials 134, pp. 397–411. ISSN: 09500618. DOI: 10.1016/j.
conbuildmat.2016.12.138.
U.S. Army Corps of Engineers, Naval Facilities Engineering Command, and Air Force Civil
Engineer Support Agency (2008). UFC 3-340-02 Structures to Resist the Effects of Accidental
Explosions. Tech. rep. May 2005, p. 1867.
Weerheijm, J. and Van Doormaal, J. (2007). “Tensile failure of concrete at high loading rates:
New test data on strength and fracture energy from instrumented spalling tests”. In: Interna-
tional Journal of Impact Engineering 34.3, pp. 609–626. ISSN: 0734743X. DOI: 10.1016/j.
ijimpeng.2006.01.005.
Werner, S., Thienel, K. C., and Kustermann, A. (2013). “Study of fractured surfaces of concrete
caused by projectile impact”. In: International Journal of Impact Engineering 52, pp. 23–27.
ISSN: 0734743X. DOI: 10.1016/j.ijimpeng.2012.09.005.
Williams, E., Akers, S., and Reed, P. (2006). “Laboratory Characterization of SAM-35 Concrete
Geotechnical and Structures”. In: September.
Yamaguchi, M., Murakami, K., Takeda, K., and Mitsui, Y. (2011). “Blast Resistance of Polyethy-
lene Fiber Reinforced Concrete to Contact Detonation”. In: Journal of Advanced Concrete
Technology 9.1, pp. 63–71. ISSN: 1346-8014. DOI: 10.3151/jact.9.63.
Zukas, J. (2004). Introduction to Hydrocodes. Studies in Applied Mechanics. Elsevier Science.
ISBN: 9780080535012.

-- 42 of 42 --