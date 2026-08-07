---
title: "L04 101 Splicing Of Reinforcement Loops In Beams2"
category: "examensarbeten"
originalFile: "skyddsrum/examensarbeten/l04-101_splicing-of-reinforcement-loops-in-beams2.pdf"
fileType: "PDF"
keywords: ["skyddsrum","betong","beräkning","vatten","figure","specimen","reinforcement","concrete"]
summary: "CHALMERS Splicing of Reinforcement Loops in Beams Experiments and Non-linear Finite Element Analyses Peter Grassl Division of Concrete Structures CHALMERS UNIVERSITY OF TECHNOLOGY Göteborg Sweden 1999 Master Thesis 99:4 -- 1 of 176 -- -- 2 of 176 ..."
---

CHALMERS
Splicing of Reinforcement Loops in Beams
Experiments and Non-linear Finite Element Analyses
Peter Grassl
Division of Concrete Structures
CHALMERS UNIVERSITY OF TECHNOLOGY
Göteborg Sweden 1999
Master Thesis 99:4

-- 1 of 176 --



-- 2 of 176 --

CHALMERS
ARB NR: 1106 	Master Thesis 99:4
Splicing of Reinforcement Loops in Beams
Experiments and Non-linear Finite Element Analyses
Peter Grassl
Göteborg December 1999
CHALMERS UNIVERSITY OF TECHNOLOGY
Division of Concrete Structures
SE-412 96 Göteborg, Sweden
Telephone: +46(0)31-772 22 10
Fax: +46(0)31-772 22 60

-- 3 of 176 --

Cover:
The crack pattems of the test and a non-linear finite element analysis of specimen RV12 are
shown. The grey marked elements indicate cracks. For more information see Section 4.
ISSN 0280-2864

-- 4 of 176 --

Abstract
Loop splices are practicable in connections of concrete members taking advantage of
the high anchorage capacity of the bend part of the loops. Nevertheless, the radial
pressure due to the bend can cause spalling of the side concrete cover. The aim of the
study was 	to 	investigate the 	behaviour 	of reinforcement 	loop 	splices 	without 	a
transverse reinforcement in the splice zone. Hereby, it was focused on the flow of forces
and the different failure modes. Furthermore, the influence of varying splice length and
beam width was investigated.
Four full-scale tests of beams using a three-point test set-up were carried out. Hereby,
the splice length and the beam width were varied. Additionally, non-linear finite
element analyses were performed, where the influence of a varied splice length was
further investigated by means of two-dimensional models.
With an increased splice length designed according to the Swedish Shelter Regulation
spalling of the concrete cover could be prevented and the load capacity of a similar
specimen with continuous reinforcement was obtained. Most of the anchorage capacity
was provided by the straight part. With a splice length composed by two semi-circles
spalling of the 	side concrete cover occurred. 	Hereby, 	an increased width of the
specimen had a favourable influence on the load capacity.
Keywords: 	Concrete, 	Splicing 	of 	reinforcement, 	reinforcement 	loops, 	bond,
anchorage, beam tests, finite element analysis.
I

-- 5 of 176 --

Contents
Abstract
Contents
Preface
Notations
1 	Introduction
1.1 	Background
1.2 	Aim of the Study
2 	Loop splices in beams
2.1 	Failure types
2.1.1 	Tensile failure
2.1.2 	Bond failure
2.1.3 	Surface crushing
2.2 	Influencing parameters
2.2.1 	Side concrete cover
2.2.2 	Width of the beam
2.2.3 	Loop radius
2.2.4 	Splice length
2.2.5 	Bar diameter
2.2.6 	Spacing of the loops
2.2.7 	Bond between reinforcement and concrete
2.2.8 	Type of loading
I
Il
V
VI
1
1
3
4
4
6
10
11
12
12
13
14
14
15
15
16
17
Il

-- 6 of 176 --

2.3 	Design approaches 	18
2.3.1 	CEB-FIP Model Code 1990 	18
2.3.2 	Eurocode 2 	23
2.3.3 	Swedish Code (BBK 94) 	25
2.3.4 	Committee B7 formula 	28
3 	Experiments 	31
3.1 	Material properties 	31
3.1.1 	Concrete 	31
3.1.2 	Reinforcement 	32
3.2 	Test specimens 	33
3.3 	Test set-up 	35
3.4 	Test results 	37
3.4.1 	Specimen RV12 	38
3.4.2 	Specimen RV13 	40
3.4.3 	Specimen RV14 	41
3.4.4 	Specimen RV15 	42
3.5 	Discussion of the test results 	43
3.5.1 	Specimen RV12 	43
3.5.2 	Specimen RV13 	46
3.5.3 	Specimen RV14 	48
3.5.4 	Specimen RV15 	51
3.6 	Concluding comments conceming the experiments 	52
4 	Non-linear finite element analyses 	54
4.1 	Non-linear material models 	54
III

-- 7 of 176 --

4.1.1 Concrete under tension
4.1.2 Concrete under compression
4.1.3 Reinforcement
4.1.4 Interaction between concrete and reinfotcement
4.2 Non-linear numerical solution approach
4.2.1 Incremental method
4.2.2 Iterative method
4.3 Finite element model
4.4 Results of the analysis
4.4.1 Specimen RV12
4.4.2 Specimen RV13
4.4.3 Specimen RV15
4.5 Concluding comments concerning the non-linear FE-analyses
5 Conclusion
6 Suggestions for further studies
7 References
Appendixes
A Drawings of test specimens and arrangement of strain gauges
B Material tests
C Additional results of FE-analyses
D Relation of steel stress and radial pressure acting on the concrete
E Test results
IV
54
58
59
60
61
62
63
64
68
68
72
75
77
79
80
81

-- 8 of 176 --

Preface
In this Master' s thesis splicing of reinforcement loops in beams were studied by means
of experiments and non-linear finite element analyses. The project was carried out from
June to December 1999 at the Division of Concrete Structures at Chalmers University
of Technology. The study was part of a research project conceming reinforcement
detailing of frame corners, which is financed by the Swedish Rescue Services Agency.
I would like to thank my supervisor Morgan Johansson for his help and advice. I also
wish to thank everybody at the Division of Concrete Structures for their support. Thanks
to Detlef Schulz, Lars Wahlström, Hans Coster and Nils Nilsson from the Structural
Engineering Laboratory for their help to construct and test the beams. The photos were
taken by Lars Wahlström. The examiner was Professor Kent Gylltoft.
Göteborg, December 1999
Peter Grassl
V

-- 9 of 176 --

c
Notations
Roman upper case letters
As 	cross-section area of reinforcement
As, 	transverse reinforcement
Ec 	Young's modulus for concrete
Es 	Young's modulus for steel
F 	load
Fs 	force carried by reinforcement
G1 	fracture energy
M 	bending moment [kNm]
p 	radial pressure [N/m]
p• 	radial pressure [N/m 2]
Sb 	final anchorage capacity (BBK 94) [N/m]
V 	shear force [kN]
Roman lower case letters
side concrete cover
fc 	compressive strength of concrete
lc,cube 	compressive cube strength of concrete
/c,cyl 	compressive cylinder strength of concrete
lsu 	ultimate strength of reinforcement
f sy 	yield strength of reinforcement
J; 	tensile strength of concrete
f (w) 	softening function
fi 	bond strength
k 	coefficient considering transverse bars (BBK 94)
h 	basic anchorage length
Is 	splice length
n 	number of bars
p 	radial pressure [N/m2]
r 	radius of reinforcement loop
s1p 	spacing of the loop pairs
s1 	spacing of the loops
VI

-- 10 of 176 --

Srm
u
u
w
Wu
Greek letters
&,
</>
p
slip of the reinforcement relative to the surrounding concrete
anchorage capacity (BBK 94) [N/m]
mean crack spacing
displacement
length of the final crack
crack opening
ultimate crack opening
displacement
concrete strain
strain at steel hardening
steel strain
ultimate steel strain
bar diameter
reinforcement ratio
VII

-- 11 of 176 --



-- 12 of 176 --

1 Introduction
1.1 	Background
At the Division of Concrete Structures at Chalmers University of Technology a research
project is carried out conceming reinforcement detailing of concrete frame comers of
civil defence shelters. Different types of reinforcement detailing were examined by
means of full-scale frame comer tests. The specimens were subjected to closing and
opening bending moments. Additionally to the tests, non-linear finite element analyses
have been conducted to study the behaviour more thoroughly. One of the results of the
project was that reinforcement loops are suitable for the detailing of frame comers and
result in a satisfying behaviour. The financier of the project, the Swedish Rescue
Services Agency, received these results very positively and initiated a change in the
Swedish 	shelter 	regulations. 	Thus, 	the 	complicated, 	conventional 	reinforcement
detailing was replaced by a practicable loop arrangement, as shown in Figure 1.1.
r	r
'"--~"======:!=l	' 	,V
V
Conventional reinforcement 	New reinforcement detailing
detailing
Figure 1.1 	Conventional and new reinforcement detailing in frame comers.
Additionally, the question was posed, whether it is possible to use the loop splicing at
other places of the structure outside of frame comers taking advantage of the high
anchorage capacity of the bend part of the loops.
• 	This may be practical in for example ground slab-wall connections. The wall could
be easily connected to the already casted slab by means of reinforcement loops, as
shown in Figure 1.2 a.
1

-- 13 of 176 --

• 	Another useful application could be the ordinary straight splicing, as shown in
Figure 1.2 b. By means of loops the splice length would be considerably reduced
due to the increased anchorage capacity.
a) 	b)
Figure 1.2 	Splicing of reinforcement outside the corner area using reinforcement
loops.
However, one problem of reinforcement loop splices is the radial pressure due to the
bend part. This forces the concrete to a lateral expansion, which can result in spalling of
the side concrete cover, as shown in Figure 1.3. Consequently, the spalling phenomenon
has to be carefully investigated. In the present version of the Swedish shelter regulation,
Swedish Rescue Service Agencies (1998), the splice length is therefore elongated by an
additional straight part.
Figure 1.3 	Spalling 	of 	the 	concrete 	cover 	using 	reinforcement 	loops. 	From
Johansson (1996).
2

-- 14 of 176 --

1.2 	Aim of the Study
The aim of the study is to examine splicing of reinforcement loops in beams subjected
to bending moments and shear forces. This research field shows a high complexity with
various interacting influences. Consequently, it is necessary to focus on some aspects,
which are to be elaborated:
• 	Examination of the behaviour of reinforcement loop splices in beams without a
transverse reinforcement in the splice zone. Furthermore, the study is limited to the
behaviour in the Ultimate Limit State.
• 	The flow 	of forces 	and the different failure modes when using loop splices.
Therefore, a literature study of already conducted research work, a test series of four
full-scale tests of beams with reinforcement loop splices and non-linear finite
element analyses are carried out.
• 	The influence of varying splicing length and beam width. These influences are
examined by means of the above-described full-scale tests and the former also by
non-linear finite element analyses using two-dimensional models.
3

-- 15 of 176 --

2 	Loop splices in beams
2.1 	Failure types
The advantage of loop splicing compared to straight splicing is the increased anchorage
capacity due to the curved part of the loop. Knowing this, it is clear that there may exist
failure modes different to those of a straight splice.
When bond and other mechanism for anchorage are acting, it is not correct to assume
that the anchorage capacity can be calculated by adding the full capacities of the various
mechanisms. lnstead it is necessary to examine separately the different possible failure
types.
Three different failure types can be distinguished when using spliced loops:
• 	Concrete tensile failure in form of splitting and bursting
• 	Bond failure due to slip between concrete and reinforcing bar
• 	Concrete crushing in virtue of pulverisation of the concrete surface that is in contact
to the bend part of the bar.
The most dangerous failure type of loop splices in beams is the tensile f ailure in form of
splitting and bursting. However, all failure types are caused or at least influenced by a
radial pressure along the curved part, which balances the steel force that is turned round.
Therefore, a theoretical consideration of the acting pressure is preceded.
lf the steel stress along the half circle is known the magnitude of the pressure can be
calculated by equation (2.1).
(2.1)
The geometry and the belonging notation are shown in Figure 2.1. The distribution of
the steel stress along the bend can be seen in Figure 2.2.
4

-- 16 of 176 --

\\it
~G Fs(a) 	=Steel force depending
r r
ona
=Radius of the bend
p 	=Pressure along the
bend
Fs(aJ
Figure 2.1 	Geometry of the loop.
Thus, in the case of a splice that transfers mainly bending moments the radial pressure
varies, as shown in Figure 2.2. Tests at hook splices by Franz and Timm (1972) resulted
in 	steel 	stresses 	changing 	from 	tension 	at 	point 	B 	to 	compression 	at point 	C.
Additionally, it was determined that such a stress distribution can be assured if the end
of the hook is anchored in the compressive zone of the member.
p
Concrete
lab zone
Pressure on concrete
along the bend
Figure 2.2 	Tensile stresses in the loop and resulting radial pressure along the bend
for a member subjected to a negative bending moment.
B
C
Tension stress in reinforcement
loop
5

-- 17 of 176 --

2.1.1 	Tensile failure
The most dangerous failure type is the tensile failure of the concrete in the splice zone.
Different effects cause lateral tensile stresses in loop splices. However, tensile stresses
out of the plane may cause spalling of the concrete cover, if the tensile strength of the
concrete is exceeded and no lateral reinforcement provided.
The bend part of the loops introduces concentrated radial pressure, as shown in Figure
2.2. The pressures of one loop pair balance each other in longitudinal direction, as long
as the steel stresses in the loops are equal, as shown in Figure 2.3. A tension field in the
upper and a compressive stress field in the lower chord balance the acting moment due
to the eccentricity of the pressures. Nevertheless, the magnitude of these stresses is
small compared to the tensile stresses caused by the spread of the pressure.
I 	I
I 	I
I 	I
I 	I
I 	I
I 	I
I 	I
I 	I
I 	I
I 	I
X
- - - - - 	Compression field
y 	z Tension field
Figure 2.3 	Balancing radial pressure on the concrete from the loop pairs. Top view.
The latter are shown in Figure 2.4. Hereby, two different regions can be distinguished.
Nearby the acting pressure (region I) an tri-axial compressive stress state exists. This
stress state may lead to a splitting failure of the concrete. In the other deeper region
(region Il) the distributed pressure leads to tensile stresses, which may cause bursting of
the concrete. Hereby, the pressure is acting along the complete length of the bend with
6

-- 18 of 176 --

v
varying magnitude. Therefore, the predorninating stress state inside the loop consists of
a superposition of the varying pressure distributions. However, if the splitting failure is
considered to be the more dangerous tensile failure type, see Section 2.3.1, the effect of
the superposition is negligible.
r </>
Magnitude of stresses
Il
X 	z
Figure 2.4 	Stress field under concentrated load according to CEB-FIP Model Code,
CEB (1993). The concentrated pressure spreads out in z-direction.
The tensile stresses acting out of the plane are a smaller problem at the inner parts of the
structure where the confinement of the concrete is considerable larger.
However, a splitting failure between the loops of the edge-pair may cause spalling of
the side concrete cover. This is the case if the tensile crack between the loops propagate
outside the splice zone to the edge of the structure or is brought together with a flexure
crack parallel to the splice zone. Both possibilities are illustrated in Figure 2.5. As a
result, the anchorage capacity of the outer loops is lost.
7

-- 19 of 176 --

to the edge
Splitting crack
Crack propagation __ L.&.... ___.__ 	___,
to the edge
(a) 	(b)
-----.-,----,n--~_Crack propagation ----.-.-------,....----,
Figure 2.5 	Possible crack pattems, which cause spaning of the concrete cover.
Hereby, the radial pressure due to the remaining loops is increased after the spaning
failure. In other words, fewer loops have to transmit the same load. However, the
confinement of the interior loops is larger and therefore a total splitting failure is
delayed. Hence, the structural response close to the maximum load largely depends on
the behaviour of the remaining loops.
Apart from the radial pressure, an additional effect may increase the acting tensile
stresses. As mentioned, the steel stress varies along the curved part. Therefore, also the
pressure along the bend varies. The sum of the pressure and the friction stresses caused
by the pressure in vertical direction gives a resultant. This resultant has a lever arm to
the centre line of the splice zone and can therefore be described as a torsional moment
around the centre line of the splice zone, see Figure 2.6.
Apart from the concentrated radial pressure caused by the curved part, the bond forces
between concrete and reinforcement along the complete length of the loop result in
conical compressive shells, which are balanced by tensile stresses. Figure 2.7 shows a
schematic diagram of the described phenomenon. These additional tensile stresses,
which cause the splitting failure of a splice with straight bars, is in the case of loop
splicing without a straight splice length of minor importance.
8

-- 20 of 176 --

Splice zone
v
1
J .+ Rotation ax.is
.· -· -·-·-·-·-·-·-·r·-·-·-·-·-·-·-·- · 	·-
! 	I
! 	I
I I
Ii I	i
-+·-·-·-· 	·-·-·- · -·L·-·-·-· 	·----- ----1--	I	i
i 	1
I 	i
Resultant vertical components
i
I
I
I
+-l--
1
i
i
i
i
I
I
Rotation axis
_iI
iI
I
i
Rotation ax.is
+
d
Figure 2.6 	Vertical resultants of the varying radial pressure
Splitting crack
.. ...- ·•.. •·--• '"'' ' ............... ...
Figure 2.7 	Three-dimensional 	model 	of inclined 	bond 	forces 	in 	space, 	which
compose a conical compressive shell balanced by tensile stresses based
on Tepfers (1973). From Magnusson (1997).
9

-- 21 of 176 --

2.1.2 	Bond failure
Another principal failure type is the bond failure between the reinforcement and the
surrounding concrete. A bond failure occurs if the tensile force in the reinforcement
exceeds the sum of the maximal bond stresses along the provided loop length and the
friction stresses caused by the radial pressure along the curved part. The acting stresses
are shown in Figure 2.8.
The bond stress is activated by a slip of the reinforcement bar in relation to the
surrounding concrete. It can be distinguished in part due to the straight length, shown in
equation (2.2) and a part due to the bend as seen in equation (2.3). A more thoroughly
derivation of the expressions can be found in Appendix D.
dus 	-r·Us
--=--- 	(2.2)
dx 	As
dFs =-(μ . F 	+ 'r. U 	. r) 	(2.3)
d<p 	s 	s
where
μ = friction coefficient,
Us = bar perimeter,
r = loop radius and
-r= bond stress
In case of a loop it is practically impossible to achieve a failure in form of a pull out,
because the anchorage length of the bar is not limited.
However, a partly destruction of the bond can influence the load carrying behaviour in
an unfavourable way. Especially, if the bond failure reaches into the compressive
zone, 	the capacity of the 	section can be weakened. 	The positive effect of the
compressive reinforcement may be lost and the concrete around the bar destroyed by
inclined 	bond 	cracks. 	Furthermore, 	the 	bond 	behaviour 	influences 	directly 	the
magnitude of the acting radial pressure.
10

-- 22 of 176 --

Failure
-
bond and friction resistance
C
2r
Figure 2.8 	Bond and friction resistance of the loop
2.1.3 	Surface crushing
If the loading area is very small compared to the surrounding unloaded region, the tri
axial stress under the loop may reach a magnitude at which pulverisation of the concrete
may theoretically occur.
This pulverised concrete produces a hydrostatic stress state on the surrounded area that
may cause wedging of the concrete surface, as shown in Figure 2.9. However, this
failure type only occurs, if the loaded concrete region is almost completely confined,
see lmran and Pantazopoulou (1996). Therefore, this type is less important in case of
loop splices, where the confinement is usually weak.
p
Pulverised concrete
I
I'I
I
I
I
I
I
.,,.,,"'"' I
......
--------_.,,,
surface
Figure 2.9 	Surface crushing (Prandtl's wedge) according to CEB-FIP Model Code,
CEB (1993).
11

-- 23 of 176 --

2.2 	lnfluencing parameters
The load capacity of a loop splice is influenced by several parameters conceming the
arrangement of the reinforcement and the material properties. In the following list most
of them are mentioned:
• 	Side concrete cover
• 	Splice length
• 	Width of the beam
• 	Spacing of the loops
• 	Loop radius
• 	Bar diameter
• 	Bond between reinforcement and concrete
• 	Type of loading in splicing zone
2.2.1 	Side concrete cover
The side concrete cover c is defined as the distance from the outer loop to the beam
edge, see Figure 2.10. It contributes to the confinement of the concrete zone under
radial pressure, which cause a lateral expansion of the concrete in the splice zone.
Three different test series carried out by Dragosavic et al. (1975), Franz and Timm
(1972), and Kordina and Fuchs (1972), conceming loop and hook1 splicing in slabs
showed that an increased concrete cover has a favourable influence. The cracks between
the loops of the outer pair, see Figure 2.5, are delayed by an increased concrete cover.
1 The test series by Franz and Timm (1972) and Kordina and Fuchs (1972) examined splicing with
large hooks. Their ends were anchored in the compressive zone of the member. Therefore, the
behaviour of such hooks is similar to them of loops. Thus, the results of these tests are meaningful for
the present study.
12

-- 24 of 176 --

C
a) concrete cover c 	b) splicing length ls
Figure 2.10 	Definition of the concrete cover c and splice length ls
Without transverse reinforcement2 the concrete cover spalls off and the anchorage of the
outer reinforcement loops is lost. The presence of lateral reinforcement may resist the
tensile stresses after cracking of the concrete between the loops and, thus prevent
spalling of the outer loop. However, this lateral reinforcement has to be anchored in the
concrete; something that might be difficult to achieve.
In the research work ofDragosavic et al. (1975) an empirical formula was proposed, see
Section 2.3.4, in which the load capacity of a loop splicing can be estimated. In this
formula the increasing edge distance has a favourable influence on the load capacity.
However, the formula is mainly aimed for slabs. Therefore, it is difficult to estimate
how far the results are compatible to beams.
2.2.2 	Width of the beam
The width of the beam by constant reinforcement ratio has a considerable influence on
the load capacity in case of spalling failure. After spalling of the outer loops the
remaining have to bear the entire load. Consequently, the load capacity of a loop
splicing increases with increased beam width.
2 No lateral reinforcement is provided in the present test series.
13

-- 25 of 176 --

2.2.3 	Loop radios
The loop radius is one of the major factors whether spalling will occur or not. The
pressure on the concrete in the splice zone is caused by the bend of the steel bar and
depends directly on the radius of the loop, see Figure 2.1 and equation (2.1). The
pressure can cause tensile failure or concrete crushing, as discussed in Section 2.1.1 and
2.1.3. Consequently, the risk of both failure types is decreased with increased loop
radius. Moreover, the provided bond length is increased with increased radius.
2.2.4 	Splice length
The splice length is defined as the distance between the vertexes of two overlapping
loops in longitudinal direction, as shown in Figure 2.10. The minimum recommended
length according to Franz and Timm (1972) and Kordina and Fuchs (1972) is the
diameter of the loop. In this case two semi-circles compose the splice length. An
increase of the splice length results in an additional straight part between the bends.
Along the added part the stress in the reinforcement is decreased by the bond resistance,
see Figure 2.8. Therefore, the steel stress where the bend begins is smaller than in the
case of a minimum splicing length. Smaller steel stress results in smaller radial pressure
on the concrete, as clarified in equation (1), which reduces the risk of a splitting failure.
Apart from the decrease in pressure, the splitting resistance is also increased by the
increased angle between the loop axis and the compressive struts, see Figure 2.3. This
means that more concrete is provided on which the tensile forces can be distributed, see
Kordina and Fuchs (1972). However the larger concrete area has only an influence
regarding bursting as further described in Section 2.11. The above-described decrease
results also in a smaller friction resistance, which has a slightly unfavourable influence,
see Appendix 11. However, the positive factor of the additional straight bond length is
more decisive. The tensile stresses due to the torsional stresses, as shown in Figure 2.6,
are both positive and negative affected by the splice length. On the one hand the
increasing splice length enlarges the lever arm of the vertical forces and therewith also
the torque. On the other hand the vertical forces are reduced by the pressure decrease.
Furthermore, the concrete core, which has to resist the torque, is increased.
14

-- 26 of 176 --

2.2.5 	Bar diameter
An increased bar diameter can transmit larger forces, which result in a higher radial
pressure along the bend. Both the risk of surface crushing and tensile failure increase,
see Section 2.1. In addition, a large diameter has a smaller ratio of perimeter to cross
section, which results in a smaller bond resistance. However, the chosen diameter
depends on the spacing of the loop pairs. With increasing loop spacing the bar has to be
enlarged to provide the same load capacity.
2.2.6 	Spacing of the loops
Two different types of spacing can be distinguished:
• 	Spacing of the loop pairs, SJp
• 	Spacing of the loops in a pair, SJ
The spacing of the loop pairs SJp is defined as the distance between the axes of two
neighbouring pairs, as shown in Figure 2.11. If not otherwise mentioned the term loop
spacing refers to the spacing of the loop pairs s1p.
!
I 	~
I
I
'I
I
I
i 	t:
I
il' 	S1p 	/	
SJ	
I/	
, 	, 	,
a) Mandrel diameter d 	b) Spacings of loops SJp ands,
Figure 2.11 	Definition of mandrel diameter D, spacing of loop pairs s,P and spacing
of loops s1 .
After spalling failure of the outer loop pair the spacing s1p is the new "side concrete
cover", which contributes to resist the tensile failure, see Section 2.1.1. Thus, a small
spacing of the loop pairs can increase the risk of a chain reaction of spalling failures.
15

-- 27 of 176 --

The spacing of the loops of a pair is defined as the distance between the bar axes of the
two overlapping loops, see Figure 2.11. An increased distance has both positive and
negative effects. With increasing spacing the eccentricity of the concentrated radial
pressure increases. Therefore, the angle between the loop ax.is and the compressive field
decreases, see Figure 2.3. As a result, larger tensile forces have to be resisted and the
risk of splitting failure rises. However, a contact of the loops may have a slight
unfavourable influence on the bond strength, especially if the loop has a long straight
splice length, which results in a long contact length of the loops. In the tests carried out
by Kordina and Fuchs (1972) it was observed, that the spacing of the loops inside the
pair hasa hardly noticeable effect on the load capacity. However, a distance of S<j> had a
slightly unfavourable influence on the crack development3 compared to a distance of 2</>.
2.2.7 	Bond between reinforcement and concrete
The 	bond 	stress 	transfers 	the 	tensile 	stresses 	from 	the 	reinforcement 	to 	the
surrounding concrete. It is an important factor as it compose the anchorage capacity of
the loop. The bond stress is activated by a slip of the reinforcement bar in relation to
the concrete. According to Magnusson ( 1997), the bond resistance is composed by
three components:
• 	Adhesion,
• 	Friction and
• 	Mechanical interaction of the reinforcement ribs and the concrete, see Figure 2.12.
3 The crack width concerning Serviceability requirements is in the present study of minor concern. Nevertheless, the
crack development leads often to conclusions about the failure type.
16

-- 28 of 176 --

Mechanical
◄
Fs
Adhesion
+ Friction
~interaction
Figure 2.12 	Contact stresses on a deformed bar embedded in concrete. Adhesion and
friction 	are 	idealised 	by 	the 	longitudinal 	arrows 	and 	mechanical
interaction of the reinforcement ribs and the concrete by the inclined
arrows. Modified from Plos (1996).
With 	increasing 	slip 	the 	contribution 	of adhesion 	and 	friction 	1s 	lost 	and 	the
mechanical interaction represents the bond strength.
However, the bond stress is not only depending on the slip of the reinforcement, but
on several properties of the structure, for instance the way of casting, the present
confinement and the behaviour of the reinforcement, see Lundgren (1999).
For a loop splice in which the anchorage length may be composed by a straight and
curved part a high bond strength increases the anchorage capacity since the tensile
stress at the beginning of the loop is further reduced and a splitting crack due to the
curved part is delayed.
2.2.8 	Type of loading
Reinforcement splices in concrete structures are mostly subjected to a combination of
bending moments and shear forces. Especially in frames it can be required to transmit
large shear forces. However, the failure modes described in Section 2.1 are all related to
splices subjected to moments. In test series by Dragosavic et al. (1975) and Kordina and
Franz (1972) no influence of shear could be observed. Both studies analysed four- and
three-point set-ups. However, the transmitted shear in the three-point set-ups used in the
above described tests was relative small, so that these results can give only limited
conclusion about the influence of shear forces, see Kordina and Franz (1972). Thus, it is
not examined in what way a loop splice is influenced by a large shear transfer. In the
test series presented in this report the influence of shear in the splice zone was further
17

-- 29 of 176 --

investigated, see Section 3. Hence, the test set-up was designed so that the loop splices
were subjected to a moment and a high shear force.
F 	F 	F
a) Three-point loading 	b) Four-point loading
Figure 2.13 	Two different loading arrangements: Three-point loading with varying
moment and four-point loading with constant moment in the splice
region.
2.3 	Design approaches
There are several design approaches dealing with the design of reinforcement splicing.
Four of them are described in the following sections. Except the Committee B7 formula,
see Dragosavic et al. (1975), the design approaches are aimed on splicing of straight
bars and deal with loop splices as a modification of a straight splice.
2.3.1 	CEB-FIP Model Code 1990
Two main steps compose the design approach of the CEB-FIP Model Code, CEB
(1993) conceming loop splices:
• 	Determination of the required splice length
• 	Limitation of the mandrel radius.
The former step assures the transfer of tensile stresses from one loop to the other and the
latter that rupture of the reinforcement or spalling of the concrete cover is avoided.
The splice length depends on the basic anchorage length. The basic anchorage length is
defined as the length of the reinforcement bar, which is needed to transfer the steel force
of the bar to the surrounding concrete at yield strength. This stress transfer depends on
18

-- 30 of 176 --

the activated bond strength. The design bond strength is calculated by means of the
design tensile strength of the concrete as
(2.4)
I' 	J, 	• h 	I' 	= fc,k ,min
J bd =T/1 'T/2 'T/3 ' 	etd Wlt 	J eld 	1.50
where
171 considers the surface type of the reinforcement 	171 =2.25 for ribbed bars
T/z considers the bond conditions due to casting 	172 = 1.0 for goodbondconditions,
172 =0.7 in all other cases
TJ3 considers the bar diameter 	T/3 =1.0 for </J :5 32 mm,
132
173 = 	-</J for </J > 32 mm
100
fctk,min 	is the characteristic minimum tensile strength of concrete
The basic anchorage length lb, which is required to transfer the yield force of a bar, is
calculated by force equilibrium
(2.5)
as
(2.6)
where </J is the bar diameter and h,d the reinforcement yield strength.
With the basic anchorage length the design splice length Is is calculated as
(2.7)
where
19

-- 31 of 176 --

a 1 	considers the form of the splice;
a 2 	considers the influence of welded transverse bars along the anchorage length;
a 3 	considers the confinement due to the concrete cover;
a 4 	considers not welded transverse bars;
a 5 	considers the confinement due to a transverse pressure; and
a 6 	considers the percentage of the spliced reinforcement within 1.3 • Is from the
centre of the splice length.
As,cal 	calculated reinforcement amount
As,ef 	chosen reinforcement amount
Table 2.1 	Alfa coefficients for the calculation of the design splicing length.
Influencing factor 	Type of anchorage 	Alfa coefficient
Formofbars 	L__ L__ <==
a, = 1.0
a, =0.7
Welded transverse bars
.
L- L-.._ o= lli =0.7
Confinement by concrete 1>
Cd - </J {'?:_ 0.7
~ = 1-0.15-</>- 	::;; 1.0
L__ L__ 	<== Cd - tp {'?:_ 0.7
lX_i = 1-0.15-</J- 	::;; 1.0
Confinement by not welded
transverse reinforcement 2> 	L__ L__ 	<==
'c. 0.7
a 4 = 1- k • ,1,{ ::;; l.0
Confinement by transverse
pressure 	L__ 	L__ 	<==
'c. 0.7
a5 = 1-0.04p ::;; 1.0	{
1 cd= min (a/2, c).
2/2 = (~As1-LAst,min)IAs, where
is the cross-sectional area of the transverse reinforcement along the splice
length Is, and
LA.st.min 	is the area of the minimum transverse reinforcement (1.0 As) for splices
in beams.
The notation for the definition of cd can be found in Figure 2.14 and the different
values for k in Figure 2.15.
20

-- 32 of 176 --

C 	Jt
0 	0
c, l=._______,
Figure 2.14 	Notation for the definition of cd.
k=O.l 	k=0.05MPa 	k=O
Figure 2.15 	k-values for the calculation of fX4.
The limitation of the mandrel diameter D is not explicitly evaluated in the CEB-FIP
Model Code. However, two conditions have to be kept. The steel bar shall not fail or
crack due to bending. Therefore, the minimum mandrel diameter D depends on the
plastic uniform elongation under flexural conditions.
Furthermore, crushing or splitting of the concrete shall be avoided under Ultimate Limit
State conditions. A calculation approach for this case is implied. Thereby, the minimum
mandrel radius depends on the resistance of the splicing zone against splitting failure.
The splitting failure may be caused by the triaxial compressive state under the radial
pressure inside the bend. The varying radial pressure is simplified into a constant
pressure in longitudinal direction along the half of the mandrel diameter, as shown in
Figure 2.16.
21

-- 33 of 176 --

D·</J
3
D+c+-·</J
2
C A=
c 	4
Figure 2.16 	Simplified model of the acting forces along the bend. Based on the CEB
FIP Model Code, CEB (1993).
The maximum radial pressure without causing a splitting failure is estimated by
equation (2.8).
(2.8)
The 	force 	equilibrium in 	longitudihal 	direction 	in 	equation (2.9) 	determines 	the
allowable mandrel diameter, which depends mainly on
• 	steel stress O'sd,
• 	concrete strength/cd,
• 	the bar diameter </J, and
• 	relation of loaded area Ac to unloaded area A; .
(2.9)
Further simplifications lead to a practicable design formula:
22

-- 34 of 176 --

Ö 	(jsd (2.10)
✓ 1+2·; . Je,
The different values for ö are shown in Figure 2.17
Ösd
(a) Ö: 1.6 	(b) Ö: 1.8 	(c) Ö= 2.6
Figure 2.17 	8-values for various anchorage schemes according to CEB-FIP Model
Code, CEB (1993).
2.3.2 	Eurocode 2
The design approach for loop splices in EC 2 is similar to the one in the CEB-FIP
Model Code.
• 	Splice length and
• 	mandrel diameter
have to be checked. The calculation of the design bond strength 	hd and the basic
anchorage length lb is identical to the one in CEB-FIP Model Code.
The required splice length is calculated with equation (2.11)
(2.11)
with
A
-0 3· 	· 	· 	s,req > 15·/4 > 200 	(2.12)	l s,min - 	• 	aa 	al 	--- 	'I'- 	mm
As.prov
23

-- 35 of 176 --

considers the form of the bars 	llå 	= 0.7 	for 	curved 	bars 	in
tension 	if the 	concrete 	cover
perpendicular to the curved part
is at least 3 </J
llå = 1.0 for straight bars
a1 	considers the percentage of spliced bars, which are lapped in the section and the
provided confinement due to the concrete cover (cx. 1 = 2 if more than 30 % of the
loops are spliced in the section and the concrete cover is smaller than 5</))4.
Furthermore, it is required to provide a transverse reinforcement inside the splice zone.
With this transverse reinforcement a spalling of the side concrete cover shall be
',
avoided.
The mandrel diameter D is limited to avoid cracking of the reinforcement bar due to
bending and splitting or crushing of the concrete inside the bend of the bar. In Table 2.2
and 2.3 minimum mandrel diameters are given. The !imitations consider the formability
of the reinforcement bar (on the left side of Table 2.2) and the resistance of the concrete
zone inside the bend against crushing and splitting (on the right side of Table 2.2).
Table 2.2 	Minimum mandrel diameter.
Hooks, bends, loops 	Bent-up bars or other curved bars
Bar diameter Value of the minimum concrete cover,
perpendicular to plane of curvature
</J < 20mm 	~~20mm > 100 	mm
and 	> 3 • </J
>50mm
and> 3·</J
::;somm
and::;3·4>
Plain bars
S 200 2.5 •</> 	5. </> 	10 •</> 	10 •</> 	15·</J
High bond bars
S400, S 500 4. </> 	7. </J 	10· </> 	15•</J 	20·</J
4 For detailed·description of the values of a. 1 see EC2, 5.2.4.1.3.
24

-- 36 of 176 --

Table 2.3 	Minimum mandrel diameter in case of welds in the bend zone.
Minimum diameter of the mandrel
W elds outside bends 	Welds inside bends
~	I 	~/4- 	-14-
·~ ·ti
d<4•</J: 	20·</J
d"c.4·</J: 	Table 1 applies 20·</J
2.3.3 	Swedish Code (BBK 94)
The design concept in the Swedish Handbook for Concrete Structures BBK 94,
Boverket ( 1994) concerning the splice length of deformed and bend bars is different to
the former. The design method for straight part of the loop is based on the splitting
method according to Tepfers (1973). Hereby, the splice capacity is lirnited by a splitting
failure of the concrete cover, see Figure 2.7. Different possible crack patterns are shown
in Figure 2.18, where primary and final cracks can be distinguished. It is assumed that
the primary cracks reached the reinforcement bar and a new equilibrium can be
established. The final splitting cracks cause the loss of anchorage capacity for the
reinforcement bars. Therefore, the capacity is determined by the length of the final
cracks, u, and the number of affected bars, n. The decisive crack pattern is the one with
the smallest ratio, u/n. The anchorage capacity is calculated by
(2.13)
as the maximum transferable tensile force rate with an upper lirnit of
(2.14)
The coefficient, TT, takes into account the position at casting and a possibly unfavourable
multi-axial stress state.
25

-- 37 of 176 --

hlWWbl
Type 1 	Type2
bl 	W W 	bl 	WWWkl
Type 3 	Type 4
wwww
Type5 	Type6
Primary splitting crack: 	~
Final splitting crack:
Type7
Figure 2.18 	Splitting crack pattems, according to Tepfers (1973). From Magnusson
(1997).
A lateral reinforcement in form of stirrups is considered by an additional part, which
may be added to the splice capacity:
26

-- 38 of 176 --

(2.15)
with a coefficient k depending on the arrangement of the transverse bars as shown in
Figure 2.19.
As,
k=40MPa 	k=20MPa 	k=O
Figure 2.19 	Factor k depends on the arrangement of the transverse bars.
The final anchorage capacity can then be expressed as
(2.16)
with an upper limit of
(2.17)
The mandrel radius is limited by means of an empirical formula to avoid rupture of the
reinforcement and spalling of the concrete cover
r 	O 	f s, 	1 	(c 	)	5 	(2.18)
4' 2: 0. 28 · / " - 0. 	- sin(~) - ~ + 0.5
with f) = 1t in case of a loop and an upper limit of
~$3.5 	(2.19)
</J
fu frame corner tests carried out by Johansson (1996) the limitation of the mandrel
radius according to BBK 94 was fullfilled and still resulted in spalling of the side
concrete cover.
27

-- 39 of 176 --

2.3.4 	Committee B7 formula
Investigations concerning loop connections by Dragosavic et al. (1975) led to an
empirical formula, which is presented in equation (2.20). The formula is aimed on loop
connections of pre-cast slabs, which are subjected by flexural bending. The experiments
for this research work were conducted by the Committee B7 of the fustitute TNO for
Building 	Materials 	and 	Building 	Structures 	(IBBC). 	Furthermore, 	earlier 	tests
performed by Franz and Timm (1972) and Kordina and Fuchs (1972) were considered
in the investigation.
(2.20)
with
The loop moment can be calculated by means of Equation (2.21) or (2.22)5
•M=n·As •z•a 	(2.21)	s
or
6
M =fn-?). 4 -~-,.,..* 	(2.22)	- 	\ 	- 	.. a 	'-' va1
with
(2.23)	,,-;= 230- J;, 	( 0.7 +0.03 	~} (1 +0.25- ~: J
5 Equation (2.21) and (2.22) are only valid if the additional conditions are met.
6 Equation (2 .22) is only valid if the distance between the loop pairs is greater than 20 •ifJ .
28

-- 40 of 176 --

Additional conditions :
ls-2·</)"?:.lO·</)
ls-2·</)"?:.2·R
D"?:.5·</)
c?.5·</)
s1 ~½ · (Is -2·</))
SJ 	C
D
a) concrete cover c and 	b) splice length Is and mandrel
loop spacing s 1 	diameter D
Figure 2.20 	Notation of the additional conditions of equation (2.22) and (2.23).
In a schematic way the formula (13) can be written as
a s = 230 •a •b •c •d 	(2.24)
The coefficient a considers the influence of the edge concrete cover as confinement by
a =(o.s+o.os-; )s1.o. 	(2.25)
Hence, according to this expression, an edge concrete cover larger than 1O</) has no
further influence on the calculated strength of the loop splicing.
• 	The coefficient b introduces the influence of the lab length by the factor
I
b =0.7+0.03-2- 	(2.26)
</J
29

-- 41 of 176 --

• 	The influence of the lateral reinforcement7 is represented by the factor c as
c = ( l +0 .25 	~: J 	(2.27)
• 	The concrete strength is considered by means of the factor d
d=fc, 	(2.28)
7 The interaction of the lateral reinforcement and the anchorage capacity of the concrete cover are not
considered in this expression.
30

-- 42 of 176 --

3 	Experiments
The airn of the test series was to investigate the behaviour of reinforcernent loop
splicing in beams without a lateral reinforcernent in the splice zone. Hereby, the
influence of beam width and splice length was evaluated.
The present series included four reinforced concrete bearns. In Specirnen RV12 the
spliced loops cornposed a circle. In specimen RV13 the splice length and in specimen
RV14 the beam width was elongated. Specimen RV15 was provided with straight
reinforcement bars without splicing. A detailed description of the specimens is given in
Section 3.2 and Appendix A.
3.1 	Material properties
3.1.1 	Concrete
A concrete of a strength class of K35 according to Swedish standard with a mean
cylinder compressive strength offcm = 33 MPa was ordered. This strength is comparable
with a strength class between C20/25 and C30/37 according to Eurocode 2, ENV (1992-
1-1). However, the delivered concrete had a strength of fem = 28 MPa, which was
considerably srnaller. The material properties cylinder compressive strength, cube
compressive strength and Young's rnodulus in compression were determined in the
laboratory of Structural Engineering at Chalmers University of Technology according to
Swedish Standard, Byggstandardiseringen (1997). Additionally, the fracture energy was
determined by SP, Swedish National Testing and Research Institute, according to
RILEM's recomrnendations, see RILEM 50-FMC (1985). All test specimens were
casted out of one batch. The concrete composition can be found in Table 3.1 and an
evaluation of the grading of the aggregates in Appendix B.
The results of the material tests at an age of 28 days and testing day (36 days) are listed
in Table 3.2. Further information about the material tests can be found in Appendix B.
31

-- 43 of 176 --

Table 3.1 	Composition of the concrete mixture used for the specimens.
Constituents for RV12-15 	[kg/m3]
Cement 	315
Water 	198
Sand 	907
Crushed stones 8/16 	941
Table 3.2 	The properties of the concrete used in the test specimens (mean value of
three specimens).
Test
specimen 	fcc,cyl
[MPa]
28 days
fcc,cube 	Ec1
[MPa] 	[0Pa]
Ec2
[0Pa]
Testing day (36 days)
fcc,cyl 	fcc,cube 	Ec1
[MPa] 	[MPa] 	[0Pa]
Ec2
[0Pa]
Fracture
energy1
[N/m]
RV12-
RV15 27 	36 	24 	25 	28 	38 	25 	26 	113
1The fracture energy was detennined after 28 days.
3.1.2 	Reinforcement
The main reinforcement consisted of ribbed hot-rolled bars of type B500 BT, diameter
16 mm. Additionally, transverse reinforcement bars of the same type and a diameter of
10 mm were provided to facilitate the construction. The mechanical properties of the
reinforcement, see Table 3.3, were determined by means of five tensile tests according
toa standard procedure at Chalmers Structural Engineering Laboratory.
Table 3.3 	Mechanical properties of the reinforcement, average of five tests.
Specimen 	As
[mm2]
/sy
[MPa]
fsu
[MPa]
esJ
[10-3]
Esy
[10-3]
Es2
[10-3]
Esu
[10-3]
Es
[GPa]
B500BT 	201 	543 	649 	2.6 	3.3 	27.3 	120.4 	199
32

-- 44 of 176 --

O's, [MPa]
hu
Figure 3.1 	Notation for the reinforcement properties.
3.2 	Test specimens
Four beams with different reinforcement arrangement were tested. In three of them loop
splices were provided; the forth specimen was used as a reference and was reinforced
with straight bars. The parameters varied were the splice length and the width of the
beam. The overall dimensions are shown in Figure 3.2 and a comparison of the
parameters in Table 3.4. A more detailed presentation of the dimensions can be found in
Appendix A.
1.5 	1.5
r(lr D
cr~: 	: 	: 	: : 	:1 	11°.3
_l
l lsplice l 	[m] 	~ 	b
1 	,
Figure 3.2 	Overall dimensions of the test specimens. The belonging dimensions for
the different variations are shown in Table 3.4.
33

-- 45 of 176 --

Table 3.4 	Parameters that were varied in the experiments.
Specimen 	b
[mm] lsplice
[mm]
r
[mm]
As 	p
[%]
RV12 	600 	220 	110 	7 (ft16 	0.88
RV13 	600 	600 	110 	7 (ftl 6 	0.88
RV14 	1200 	220 	110 	14<P16 	0.88
RV15 	600 	--- 	--- 	7</)16 	0.88
In specimen RV12 the loop splice was composed by two semi-circles, which were
overlapped in the middle of the beam and showed the same detailing as used in the
frame comer tests conducted by Johansson (1996).
In beam RV13 the splice length was elongated in accordance with the Swedish Shelter
Regulations, Swedish Rescue Services Agency (1998), so that the influence of an
additional straight splice length was investigated.
Figure 3.3 	Loop arrangement in specimen RV12 and RV13.
Specimen RV14 bad the same detailing as RV12, but its width was doubled from
600 mm to 1200 mm. Hereby, the influence of the spalling of the side concrete cover on
the remaining loops was investigated.
Specimen RV15 was used to compare the results of the beam with splices toan ordinary
reinforced specimen. Therefore, 	straight reinforcement bars without 	splicing were
installed.
34

-- 46 of 176 --

Figure 3.4 	Reinforcement arrangement in specimen RV14 and RV15.
Strain gauges were provided to measure the strains in the reinforcement loops. They
were glued on the side of the reinforcement bar. To assure a plain contact surface with
the sensitive gauges the ribs of the bar were polished on a small area. Later on an epoxy
compound was attached to achieve a waterproof cover. The positioning of the strain
gauges is shown in Appendix A.
The transverse reinforcement was used to facilitate the construction of the beams. To
minimise the influence on the response of the beams the transverse bars were positioned
inside the main reinforcement. Furthermore, the splice zone was constructed without
transverse bars.
3.3 	Test set-up
A three-point test set-up was chosen, as shown in Figure 3.5 and Figure 3.6. The
specimens were simply supported at both ends and a load transducer was acting in the
middle. Hence, the splice zone located in the middle of the beam was subjected to both
a bending moment and a large shear force. The load was applied from below; thus,
enabling continues registration of the crack pattem on the top of the specimen. The
reason for this was to be able to follow the propagation of expected longitudinal cracks
in the spliced zone. Due to this particular set-up, the specimen had to be additionally
supported in the unloaded stage. Steel girders positioned on the floor supported the
beam. As soon as the beam-ends touched the supports the steel girders could be
removed.
35

-- 47 of 176 --

A displacement control was used. Hereby, a displacement was directly prescribed and
the reaction force measured, see also Section 4.4.1. For all tests the loading started with
a displacement velocity of 0.2 mm/min. After reaching maximum load the speed was
increased, first with a factor two and after a while with a factor four and eight. The
exception to this was specimen RV13 that failed before the rate of displacement was
increased. The advantage with displacement controlled loading is that it is possible to
register the post-peak behaviour of the specimens; thus enabling an examination of the
ductility of the detailing.
Steel girders acting
as supports
Figure 3.5 	Schematic test set-up
Figure 3.6 	Test set-up with provisional support in unloaded state.
36

-- 48 of 176 --

Four displacement transducers measured the acting displacements. Two of them (one on
each side) were located in the middle of the beam to measure the deformation
introduced by the hydraulic jack. The other two were positioned at the ends to register
the rigid displacement of the specimen.
3.4 	Test results
The load-displacement relations for all tests are compared in Figure 3.7. The specimens
at the end of the tests are shown in Figure 3.8.
Load, F [MPa]
300 -,----.----,----,-----,---,-----,
-Specimen RV12
-Specimen RV13
-·-specimen RV14
- 	Specimen RV15
RV14
RV12
50 ------t----+---+----+----t-----l
0 +----+----+---+-----1-----t--------t
0 	20 	40 	60 	80 	100 	120
Deformation, 8 [mm]
Figure 3.7 	Load-deformation relations of all test specimens. The load of specimen
RV14 	was 	divided by two. 	The 	self-weight of the 	specimens 	was
subtracted.
37

-- 49 of 176 --

Figure 3.8 	Specimen RV12, RV13, RV14 and RV15 at the end of the tests.
The failure development gives important conclusions about the behaviour of the loop
splices. Therefore, the responds 	of the 	specimens 	are described in the 	following
sections, before the results are evaluated in Section 3.5.
3.4.1 	Specimen RV12
Specimen RV12 was provided with a short splice length. Hence a spalling failure was
anticipated. The final crack pattem is shown in Figure 3.10 and Figure 3.11.
The first cracks were flexural bending cracks in the middle of the beam at a load of
27 kN. At a load of 81 kN cracks, which followed the bend of the loop were observed.
Afterwards, first longitudinal cracks on the top of the beam could be observed at a load
of 74 kN. They started in the middle of the splice zone. Longitudinal cracks at the side
on the level of the tension reinforcement appeared. Similar cracks at the second loop
pair were not observed until a load of 167 kN was reached. The maximum load capacity
was 204 kN, a value far below that of the estimated theoretical capacity of 243 kN. With
slightly decreasing load the concrete cover spalled off. Large longitudinal cracks about
38

-- 50 of 176 --

15 cm from the outer edge were detected. The loop splice developed further and further
to a hinge with decreasing resistance.
,I-------------------------------- -- ----- --,I
I 	I
I 	I
I 	I
I 	I
I
)
(
\\ First crack observed
Figure 3.9 	Location of crack initiation.
Figure 3.10 	Final crack pattem of specimen RV12. Side elevation.
Figure 3.11 	Final crack pattem of specimen RV12. Top view.
39

-- 51 of 176 --

3.4.2 	Specimen RV13
In specimen RV13 the splice length was elongated. It was expected that thereby spalling
of the edge concrete cover could be prevented. The final crack pattem is shown in
Figure 3.12 and Figure 3.13.
Figure 3.12 	Final crack pattem of specimen RV13. Side elevation.
Figure 3.13 	Final crack pattem of specimen RV13. Top view.
Flexural cracks were observed inside and outside of the splice zone at a load of 37 kN.
With increasing deformation the initial flexural cracks developed to flexural shear
cracks. The largest cracks eventually developed outside the splice zone and followed the
bend in the lower half of the beam. At a load of 203 kN longitudinal cracks were visible
at the top of the beam at the leve! of the outer loop pair. At a load of 260 kN
longitudinal cracks at the leve! of the tensile reinforcement became visible within the
splice zone on both sides of the beam. Shortly after this a sudden load drop of 50 kN
took place. The load then increased again and a new crack distribution could be
observed in form of cracks following the loop in the upper part of the beam. Finally, the
40

-- 52 of 176 --

shear cracks followed the tensile reinforcement and a complete failure of the specimen
took place at a load of 254 kN.
3.4.3 	Specimen RV14
In specimen RV14 the beam width was doubled. Similar to specimen RV12 a short
splice length was provided. Therefore, a spalling failure was expected. The final crack
pattem is shown in Figure 3.14 and Figure 3.15.
Figure 3.14 	Final crack pattem of specimen RV14. Side elevation.
Figure 3.15 	Final crack pattem of specimen RV14. Top view.
41

-- 53 of 176 --

Several initial shrinkage cracks were observed. Some of them were located on the level
of the tensile reinforcement in the splice zone. At a load of 124 kN cracks were
detected, which followed the loop. Longitudinal cracks appeared at a load of 172 kN at
the top of the beam at the level of the second loop pair. Due two the initial shrinkage
cracks no longitudinal cracks were detected at the edge of the beam. When the
maximum load of 448 kN was reached longitudinal cracks over the whole width were
visible. With decreasing load the concrete cover spalled off.
3.4.4 	Specimen RV15
Specimen RV15 was provided with straight reinforcement bars. The final crack pattem
is shown in Figure 3 .16 and Figure 3 .17.
Figure 3 .16 	Final crack pattem of specimen RV 15. Side elevation.
Figure 3.17 	Final crack pattem of specimen RV15. Top view.
Flexural bending cracks could first be observed at a load of 33 kN. At a load of 135 kN
the flexural bending cracks changed to flexural shear cracks pointing to the acting load.
42

-- 54 of 176 --

Finally at a load of 270 kN, after substantial yielding of the reinforcement, the failure
was caused by flexural shear cracks propagating along the tensile reinforcement.
3.5 	Discussion of the test results
3.5.1 	Specimen RV12
The load-displacement relation for specimen RV12 is shown in Figure 3.18. The
behaviour was determined by spalling of the outer concrete covers. This process started
soon after cracking and was continued until termination of testing. The comparison of
the load-deformation relations in Figure 3.7 at the beginning of Section 3.4 shows that
the stiffness of the specimen RV12 was considerably smaller than the stiffness of
specimen RV15 and RV13. This supports the theory, that the anchorage capacity of the
outer loops was affected, even when a spalling of the concrete cover was invisible.
Furthermore, it can be seen that after the achievement of the maximum load the
behaviour of the specimen was ductile. This is contrary to the observations made by
Franz and Timm (1972) and Kordina and Fuchs (1972). In their experiments the
spalling of the concrete cover seemed to cause a sudden failure without a provided
transverse 	reinforcement. 	An 	explanation 	for 	this 	difference 	can 	be 	found 	by
comparison of the test control approaches. In the present study a displacement control
was used, so that the behaviour of the specimen after maximum load could be studied. It
is probable that for the experiments by Franz and Timm (1972) and Kordina and Fuchs
(1972) only a load control testing was realisable. In case of load control the registration
of the post-peak behaviour depends mainly on the skill of the laboratories personal and
the provided instruments. On the other hand, the specimens had a smaller height, so that
the compressive zones of the specimens were affected by spalling of the edge concrete
cover. A partial loss of the compressive zone was observed, see Franz and Timm
(1972).
43

-- 55 of 176 --

Load, F [MPa]
300 -----.------.------------------- -RV12
250 -+_	- 	_- 	_- _ -+-_- 	_- _- _ -+_- 	_- 	_- _ ---- _- 	_- _- _ -+_- 	_- 	_-_-1 	- 	- 100% (7 bars)
- 	-71% (5 bars)
- 	-43 % (3 bars)
50 ---- 	------- 	----+--- 	----+----~-----I
F
0 -+-------1-----------------
0 	20 	40 	60 	80 	100
Deformation, 8 [mm]
Figure 3. 18 	Load-deformation relation of specimen RV12.
Figure 3.18 shows the expected load capacity determined according to Eurocode 2, for
beams with 7, 5, and 3 continuos reinforcement bars with the same general dimensions
as specimen RV12. It can be seen that with increasing load the loops were more and
more affected by the spalling. At a displacement of around 55 mm the bearable load was
equal to the load capacity of a beam with five continuos bars. At a displacement of
99 mm the load was even reduced to the capacity of a beam with three continuos bars.
The average stress in the reinforcement loops is determined from the glued-on strain
gauges shown in Figure 3.19 and Figure 3.20 separated into inner and outer loops. The
stress distributions of the other loops are shown in Appendix E. The results coincide
with the findings of the literature study in Section 2. In an early stage the stresses in the
loops change from tension at point B to compression at point C, see Figure 3.21. With
increasing 	deformation 	the 	tensile 	stress 	increases 	and 	reaches 	further 	into 	the
compressive zone. Furthermore, the steel stress increases with increasing distance to the
outer 	edge, 	as 	with 	increasing 	"concrete 	cover" 	the 	confinement 	increases 	and
consequently also the anchorage capacity.
It is interesting to note that the anchorage length was reduced on the two overlapping
half-circles, see Figure 3.21. The additional straight part between point A and A* just
44

-- 56 of 176 --

outside the loop of the splice did not contribute to the anchorage capacity. This
reduction was caused by the critical crack, which followed the loop.
-100 ...._____ ___._ ___ __._ ____..____ __.
Position No.
Figure 3.19 	Average stress of loops 1 and 14 of specimen RV 12.
-F=41 kN, d=l mm
- 	F=62 kN, d=2.8 mm
Stress, [MPa]
600 ----~------------- -o-F=153 kN, d=lO mm
......,_F=198 kN, d=l5.6 mm
--t.-F=197 kN, d=22.5 mm
- 	• •Yield limit (537 MPa)
~ «> «> 	<» 09 c:. c:.
6 	9
«> «> «> 	c» 09 c» 09
Position No.
Figure 3.20 	Average stress ofloops 6 and 9 of specimen RV12.
45
Stress, [MPa]
600 ~----,---------~--~
500 -+-----t-- 	- 	--+- 	----1--------1
-F=41 kN, d=l mm
- 	F=61 kN, d=2.8 mm
--o- F=152 kN, d=lO mm
......,_F=l98 kN, d=16mm
--t.-F=l97 kN, d=22.5 mm
- 	- •Yield limit (537 MPa)
1 	14

-- 57 of 176 --

inactive anchorage
------- 	~---,.length
critical crack
following the bend
i
i
M	M
Figure 3.21 	Reduction of the anchorage length due to cracks following the loop.
3.5.2 	Specimen RV13
The load-deformation curve of specimen RV13 is shown in Figure 3.22. Spalling of the
side concrete cover was prevented due to the additional straight splice length. The
stiffness of specimen RV13 in cracked stage, is clearly higher than the one of the
specimens RV12 and RV14, which were weakened by spalling of the side concrete
cover, see Figure 3.7. The load capacity is higher than for specimen RV15, with
continuous reinforcement. 	This 	high 	load could be resisted, 	due 	to 	the 	doubled
reinforcement area in the splice zone.
Load, F [kN]
1-specimen RV13 I
0 	5 	10 	15 	20 	25 	30
Deformation, 8 [mm]
Figure 3.22 	Load-deformation relation of specimen RV13.
46

-- 58 of 176 --

Even though a higher load was obtained, the post-peak behaviour was brittle. The first
load-drop 	occurred 	simultaneously 	with 	a 	strain 	redistribution 	in 	the 	tensile
reinforcement, 	see 	Appendix 	E. 	This 	can 	also be seen 	in 	and Figure 	3.23 	and
Figure 3.24 in which the steel stresses at the position of the strain gauges are shown.
Stress, [MPa] ~F=43 kN, d=l mm
600 --r-----------,----------, -F=65 kN, d=l.6 mm
-o-F=164 kN, d=6.6 mm
.....,... F=262 kN, d=l2.5 mm
----t.-F=229 kN, d=14.1 mm
-x-F=253 kN, d=20 mm
- 	- •Yield limit (537 MPa)
a> .:> a> oe ca oe ca
1 	14
.:> .:> .:> oe oe oe oe
0 -+------------------
1 	2 	3
Position No.
2 	3
Figure 3.23 	Average stress of loops 1 and 14 of specimen RV13 .
Stress, [MPa]
600
500
400
300
200
100
0
1 	2 	3
Position No.
~F=43 kN, d=l mm
-F=65 kN, d=l.6 mm
-o-F=164 kN, d=6.6 mm
.....,... F=262 kN, d=12.5 mm
----t.-F=230 kN, d=14.1 mm
-x-F=253 kN, d=20 mm
- 	- •Yield limit (537 MPa)
a> .:> a> oe ca oe ca
6 	9
.:> .:> .:> oe oe oe oe
2 	3
Figure 3.24 	Average stress of loop 6 and 9 of specimen RV13.
47

-- 59 of 176 --

After the load drops, the stress at the beginning of the splice was reduced. At the same
time, 	a stress 	increase 	at the 	end 	of the 	straight splice length took place. 	All
reinforcement loops were affected by this stress redistribution.
Considering the crack development described in Section 3.5.2 it is probable, that the
load drop was caused by a splitting failure in the straight splice length. However, the
anchorage capacity was not totally lost but only reduced. Instead, this slip activated the
anchorage capacity of the bend part. Hereby, it can be concluded that the splitting
failure of the straight part was brittle. Instead of a smooth redistribution from the
straight part to the bend, the anchorage reduction occurred sudden and caused a
considerable load drop. However, due to the bend part, the load could increase again, as
a new anchorage mechanism was acting similar to the one in specimens RV 12 and
RV14, where the bend provides the anchorage capacity of the splice.
Finally, the shear failure occurred at a load of 253 kN, i.e. was slightly smaller than that
of specimen RV15. This decreased shear capacity may be caused due to the new acting
mechanism. The larger distance between the two bends prevented a localised hinge as in
specimen RV12 and RV14.
3.5.3 	Specimen RV14
The load-deformation relation of specimen RV14 is shown in Figure 3.25. The results
of specimen RV14 are similar to those obtained in specimen RV12. As in specimen
RV12, spaning limited the load capacity and the post-peak behaviour was ductile. Soon,
the capacity of the outer loops was strongly reduced. Due to the initial cracks, see
Section 3.4.3, the spalling process was initiated without longitudinal cracks at the edge.
The increased width, though, had significantly influence on the result. The maximum
load was higher than in specimen RV12 and the post-peak behaviour more ductile. This
was due to the larger number of loops since more loops could carry the load after the
spalling of the outer loops; i.e. a smaller percentage of the total number of bars were
affected when the outer bars were lost.
48

-- 60 of 176 --

Load, F [kN]
-
-
300 ------- 	--+-- 	---+------+-- 	- 	---+-------I
600 -,-------,------,-----r----..-- 	--
-Specimen RV14
500 -+----- 	-+-_- 	_- _ - _- 	t--_ - _- 	_- _ -+_- 	_- _ - _- 	+---_ - _- 	_- _ ----1 - 	- 	100 % (14 bars)
-86 % (12 bars)
-71 % (10 bars)
ö
100 --- 	- 	- 	--+--- 	--+--- 	------1-- 	------+--- 	---l
F
0 --1------------+- 	----i-------4--------1
0 	20 	40 	60 	80 	100
Deformation, ö [mm]
Figure 3.25 	Load-deformation relation of specimen RV14.
Nevertheless, the stiffness of specimen RV14 in the cracked state is similar to the one of
specimen RV12. This indicates that the bond conditions of the inner loops were affected
by splitting cracks due to the radial pressure. Consequently, the stiffness was reduced
compared to specimen RV13. 	However, due to the confinement provided by the
surrounding loops and concrete yielding of the reinforcement was still obtained.
In Figure 3.25 the load capacity of a section with 14, 12, 10 and 6 continuos bars is
shown. At maximum load the capacity of less than two reinforcement bars was lost
since apart of the anchorage capacity of the outer loops still remained. In Figure 3.26
and Figure 3.27 the average stresses for outer and inner loops on the position of the
strain gauges are presented. The inner loops reached yielding whereas the stress in the
outer loops decreased with increasing deformation. In tum, the largest stresses in the
loops were acting at the position of gauge 2, see also Figure 3.23.
49

-- 61 of 176 --

--- ----- --- --
Stress, [MPa]
600 -.------------------~
~-----------------------~-500 - --- 	----------------1
400 -1-- 	------ 	-----------1
,..--- ................
300
200 _ _ 	_ 	______ _ 	_ 	_ - _,-,,.,_,_____~
100 ~=="""""'~-------------
~
0 -+--------------------1
1 	2
Position No.
---F=98 kN, d=l mm
-F=160 kN, d=3.5 mm
~F=325 kN, d=l0.5 mm
_._F=438 kN, d=l8 mm
-1:,,- F=441 kN, d=28.8 mm
- 	• •Yield limit (537 MPa)
1 	28
«>«>«>«>«>a>«> ototCllotototot
Figure 3.26 	Average stress in loops 1 and 28 of specimen RV14.
Stress, [MPa]
600 ~----------------
j.- ---- .-, ----- -- -----=--==-= ~==-= ==-:::;
500 -+--------------------!
400 t,:::::=====:::=:;::=::;;==------=7
300 - 	----------------
200 - 	- 	- 	- 	- 	------
100 --- 	- 	--------------!
0-+----------------------1
1 	2
Position No.
__.... F=98 kN, d=l mm
-F=160kN, d=3.5 mm
~F=325 kN, d=l0.5 mm
--.-p=438 kN. d=l8 mm
-1:;.-F=441 kN, d=28.8 mm
- 	- •Yield limit (537 MPa)
.,.,.,.,.,.,., CJtot(ll(ll(II otot
13 14 15 16
1)1) I) I) 1)1)1) ot(II (Il (Il (Il otot
Figure 3.27 	Average stress in loops 13, 14, 15 and 16 of specimen RV14. At the load
level F = 438 kN and F = 441 kN the yield limit was reached.
50

-- 62 of 176 --

3.5.4 	Specimen RV15
The specimen RV15 shows the typical behaviour of an under-reinforced beam with
continuos reinforcement. The tensile reinforcement reaches its yield strength far before
failure, see Appendix F. The load-deformation relation is shown in Figure 3.28. The
stress-deformation relation on the position of the strain gauges is shown in Figure 3.29.
Load, F [kN]
300
'-
----	250
~-r1,.1. ___ ----·---- -----·
200 -
150 - I
I	100 -
50 -I)
0 -
-RV15
- 	- Load capacity
accorcling to EC2
F
0 	20 	40 	60 	80
Deformation, ö [mm]
Figure 3.28 	Load-deformation relation of specimen RV15.
Even with weaker concrete as planned, see Section 3.2, the shear capacity was sufficient
enough, 	so that the 	shear failure 	occurred 	after hardening 	of the 	reinforcement.
Nevertheless, the obtained crack pattem with strongly inclined cracks pointing to the
acting force shows the large influence of the shear force.
51

-- 63 of 176 --

- 	- 	-
• 	• 	• • 	•
• 	• 	• 	• 	• 	• 	•
Stress, [MPa]
600
.
- 	-	----.......;~
--IIL
~ ~]
~.
......,.. F=36 kN, d=0.5 mm
-F=59 kN, d=l.4 mm
500 -e-F=158 kN, d=7.3 mm
...,._ F=239 kN, d=l4.4 mm
400 """'1!1-f=245 kN,d=18.4 mm
- 	• •Yield limit (537 MPa)
300
aJ 	E
200 2 	6
100
3
:2 	4:	0 	11 	51
1 	2 	3 	4 	5
Position No.
Figure 3.29 	Average stress in bars 2 and 6 of specimen RV15.
3.6 	Concluding comments concerning the experim~nts
With a splice length composed by two semi-circles, Is = 220 mm, the concrete cover
spalled off. Due to this, the anchorage capacity of the outer loops was lost to a large
degree and hence, the maximum load capacity reduced. Nevertheless, the post-peak
behaviour of the specimen was still ductile.
With an elongated splice length, Is = 600 mm, spalling of the edge concrete cover was
prevented 	and 	a higher maximum load compared 	to 	a specimen with continuos
reinforcement bars was reached. Splitting cracks at the straight part of the splice,
though, occurred and caused a sudden load drop, before the load could increase again
due to the influence of the bend part.
An increased width of the beam had a favourable influence on the load capacity. A
higher load could be reached, since more remaining loops could carry the load after the
loss of the outer bars. However, the stiffness in the cracked stage was similar to the one
with a normal width. This indicates that the bond conditions of the inner loops were
affected by splitting cracks due to the radial pressure, even though yielding was
reached.
52

-- 64 of 176 --

The stresses along the loop changed from compression to tension. With an elongated
splice length as in specimen RV13 the major part of the initial anchorage was provided
by the straight part of the splice.
The longitudinal splitting cracks, which led to spalling, started in the middle of the
splice and were orientated parallel to the reinforcement loops.
53

-- 65 of 176 --

4 	Non-Iinear finite element analyses
The aim was to analyse aspects of loop splicing in beams by means of non-linear finite
element analyses. It was intended to gain a deeper understanding of the behaviour of the
loop 	splices. 	The 	specimens 	RV12, 	RV13 	and 	RV15 	were 	modelled 	by 	two
dimensional plane stress elements and the results were compared with experiments to
control the reliability of the chosen models. The bond relation was varied using "good"
and "other" bond conditions according to CEB-FIP Model Code, CEB (1993).
The calculation approach was divided into three main steps. In a pre-processing step the
specimens were idealised and discretised by means of the pre-processor FEMGEN,
Femsys (1998). In a second step the analysis was carried out by means of the finite
element program DIANA, TNO (1998), and for the evaluation of the results the post
processing program FEMVIEW, Femsys (1998), was used.
4.1 	Non-Iinear material models
The material behaviour of the concrete was modelled by a coaxial total stress-strain
concept, also known as rotational crack model. The coaxial concept evaluates the stress
strain relationship in the principal directions of the strain vector. In Figure 4.1 	a
schematic stress strain relation for concrete under compression and tension is shown.
4.1.1 	Concrete under tension
In the total stress-strain relation a crack is initiated, when the tensile strength is
exceeded, see Figure 4.2. The following cracking is considered by a smeared crack
model, in which the total strain is represented as the deformation of the uncracked
material and the additional contribution of cracking. This strain is smeared over the
area, which belongs to the integration points at which cracking occurred. In the present
analyses a tension stress-strain relation according to Hordijk, TNO (1998) was chosen,
in which the behaviour until the crack initiation is linear and then described by a non
linear softening relation, see Figure 4.5.
54

-- 66 of 176 --

O"c
f,
Unload/reload 	Unload/reload
response
Figure 4.1 	Schematic stress strain relation for concrete under compression and
tension. The unloading behaviour is described by the secant stiffness.
Modified from TNO (1998).
Since the total strain is smeared over one element or even only a part of the element,
depending on the number of integration points, the tension softening behaviour depends
on the element size.
To explain this dependence the cracking process is 	shown by use 	of a fracture
mechanics model, see Figure 4.2. When a member is loaded under tension micro-cracks
develop in the specimen at local stress concentration points, see Figure 4.2 b ). With
increasing load the cracks are connected and a fracture zone develops at the weakest
point of the structure, as shown in Figure 4.2 c ). At this point the material reaches its
tensile strengthf,. Under further increasing externa! deformations the tensile stress in the
fracture zone decreases, something that usually is referred to as tension softening. The
material around the fracture zone unloads while the crack opens, see Figure 4.2 d).
When the two parts are disconnected, the displacement is not longer depending on the
tensile softening behaviour, see Figure 4.2 e).
This process can be described by a stress-displacement relation, which can be divided
into a stress-strain relation depending on the length of the specimen and a stress opening
relation as shown in Figure 4.3. Consequently, a total stress-strain relation considering
the tension softening must be related to the size of the element, in which the fracture
zone is developed. In DIANA, TNO (1998) the influence of the element size is
introduced by dividing the area under the softening curve, defined as fracture energy, by
55

-- 67 of 176 --

L
the crack-bandwidth h, see Figure 4.4. In the analyses the crack-bandwidth was chosen
to the length of an element.
O'c = 0 	O'c =J,
(w=O)
ttttt 	ttttt
(l+ec)L
a) 	b) 	c)
O'c = f(w) 	O'c = 0
(0 < w < w11) 	(w ~ Wu)
t t t t t
- 	----.
(1 +ec)L+w _.....
-
d) 	e)
Figure 4.2 	Stages in the formation of a crack in a concrete specimen subjected to
increasing tensile deformation. From Johansson (1996).
In the coaxial crack model, the stresses are transferred only perpendicular to the crack.
It is achieved by continuously updating the direction of the crack. Therefore, shear
retention as in case of a fixed crack model does not have to be considered.
56

-- 68 of 176 --

Unloading response
at maximum stress
➔ 	+
Wu 	W	Cc
Figure 4.3 	Mean stress-displacement relation for an uniaxial tensile test specimen.
The displacement is divided into a stress-strain relation and a stress
opening relation. From Johansson (1996).
The tensile strength of the concrete was determined according to MC90, CEB (1993) to
2
3
_ 	( fck ] 	(4.1)fctm - fctko,m • 	fcko
with 	/c,ko,m =1.40 MPa,
fcko = 10 Mpa and
fck =fem - 8 Mpa.
The fracture energy was set to G1= 113 N/m according to the material tests, presented in
Section 3.1.1.
Ec
Figure 4.4 	Stress-strain relation for concrete under tension according to Hordijk et
al. Modified from TNO (1998).
57

-- 69 of 176 --

4.1.2 	Concrete under compression
The increasing part of the total stress strain constitutive relation for concrete under
compression was obtained by the material tests, see Section 3.3.3. In the material tests
the concrete cylinders were loaded by a load controlled device. Consequently, the tests
were terminated at maximum load and the strain softening part could not be measured.
Therefore, the descending branch was modelled according to CEB-FIP Model Code,
CEB (1993). These expressions are based on compression tests of concrete cylinders of
a height of hcyt = 300 mm. However, the softening branch depends, similar to the
tension softening relation, on the size of the specimen, see Lundgren ( 1999). To relate
the softening branch to the element size used in the FE-model the plastic strains of the
post-peak behaviour were increased by a factor of
hcyl
e2 	d =-·8 2 	(4.2),mo 	h
with h equal to the crackbandwith used in the softening relation under tension and E2,mod
and E2 as defined in Figure 4.5.
(j
e
Stress-strain relation
According to MC90
e2, mod
relation
Figure 4.5 	Determination of the modified stress-strain relation. The plastic strain of
the descending branch is enlarged according to equation (4.2).
A drawback of the total stress-strain model is that the confinement effect due to lateral
stresses cannot be considered in combination with a multi-linear compression model.
However, it was preferred to use the results of the material, test instead of a predefined
58

-- 70 of 176 --

compression relation available in Diana, TNO (1998), hence the confinement effect was
omitted. However, in an analysis based on two-dimensional models with plane stress
elements, see Section 4.4, the confinement effect is small.
Stress, [MPa]
30
25
20
15
10
5
0
0 	5 	10 	15 	20
Strain, [ 10-3]
Figure 4.6 	Total stress-strain relation for concrete under compression used in the
finite element analyses.
/	-
I,	-
--
--- ~..........__ ,--.....
-Total stress-strain relation for
concrete under compression
4.1.3 	Reinforcement
The constitutive relation for the reinforcement is modelled with the von Mises yield
criterion with associated flow and isotropic hardening. The modulus of elasticity and the
values for the strain hardening were determined by material tests, see Section 3.1.2 and
Figure 4.7.
59

-- 71 of 176 --

---- -
Stress, [MPa]
700
600
- 	hardening curve	500 for reinforcement
400 -
300
IE = 199 GPa
200
100
0
0 	20 	40 	60 	80 	100 	120 	140 	160 	180
Plastic strain, [1ff 3]
Figure 4.7 	The constitutive relation for the reinforcement used in the FE-analyses.
4.1.4 	Interaction between concrete and reinforcement
The interaction between concrete and reinforcement was modelled by tangential stresses
along the reinforcement bar. Therefore, the inclined forces caused by the mechanical
interaction 	of reinforcement 	ribs 	and 	the 	surrounding 	concrete 	were 	divided 	in
components normal and parallel to the reinforcement axis, shown in Figure 4.8. The
normal part was omitted. Consequently, a splitting failure could not occur. The effect of
splitting had to be introduced in the constitutive relation of the bond behaviour. Several
bond-slip relations can be found in CEB-FIP Model Code, CEB (1993). They are
divided into relations for confined and unconfined concrete. Furthermore, the bond
quality is divided into "good" bond conditions and "other" bond conditions and depends
on the way of casting and the geometry of the member. In the present analyses the
concrete in the splice zone was expected to be "unconfined" as splitting cracks could be
observed in the analyses, see Figure 4.9.
60

-- 72 of 176 --

a)
Figure 4.8 	a) 	Contact 	stresses 	on 	a 	deformed 	bar 	embedded 	in 	concrete. b)
Representation of these stresses by components on the mean surface.
Modified from Plos (1996).
Bond stress, 't
[MPa]
A
- J 	\
I 	\ 	-good bond conditions ..--
I 	\ 	- 	other bond conditions
I 	\
I 	/ ~
'/ 	\ 	r----_____
I 	\ 	~-----
10
9
8
7
6
5
4
3
2
1
0
- I 	---.
--
0
-
Figure 4.9
0.5 	1 	1.5 	2 	2.5 	3 	3.5
Slip, s [mm]
Bond-stress-slip relationship according to CEB-FIP Model Code, CEB
(1993).
4.2 	Non-Iinear numerical solution approach
The constitutive relations described in the previous section are non-linear and lead to a
set of equilibrium equations 	of interna! 	and 	externa! forces, 	which is 	non-linear
depending on the previous deformation of the structure. An approach to solve this
equation system is to divide the loading process in increments and to approximate the
non-linear material behaviour in each increment by means of a linearization. To reduce
61

-- 73 of 176 --

the deviation due to the simplification of the material behaviour an iterative loop is
embedded in each increment.
An incremental-iterative solution procedure was used in form of a direct displacement
control 	as 	incremental procedure 	combined with a Secant 	method, 	called BFGS
(Broyden, Fletcher, Goldfarb and Shanno), as iterative procedure. In the following two
sections the chosen models are further explained.
4.2.1 	Incremental method
When 	using 	the 	displacement 	control 	as 	an 	incremental 	method 	in 	DIANA,
displacements are prescribed at defined supports of the structure. The reacting force at
the support is measured depending on the prescribed deformation. In this way, the post
peak behaviour of a specimen can be examined. The solution approach operates even
when the load resistance of the structure decreases. The displacement control is an
appropriate incremental solution method for the present analyses, since the post-peak
behaviour may contain valuable information on the ductility of the structure. The
graphical interpretation is shown in Figure 4.10 a) and compared to the in the present
case less appropriate load controlled incremental method, shown in Figure 4.10 b).
u
a) displacement controlled 	b) Load controlled
incremental approach 	incremental approach
Figure 4.10 	Comparison of load controlled and displacement controlled incremental
method.
62

-- 74 of 176 --

4.2.2 	Iterative method
An iteration approach can be schematically divided into three steps:
1. 	Evaluation of the interna! forces,
2. 	Evaluation of the global stiffness matrix and
3. 	Solution of a system of linear equations.
Three different groups are available in DIANA, see Figure 4.11:
• 	The Newton Raphson method (tangent stiffness method)
• 	The modified Newton -Raphson method (initial stiffness method)
• 	The quasi-Newton approach (secant stiffness method).
Although quite similar these methods differ mainly in the second step. The Newton
Raphson method evaluates a global tangent stiffness matrix at every iteration step. The
expensive evaluation of the stiffness matrix then has to be performed for each iteration.
To reduce the calculation effort the modified Newton-Raphson method uses the tangent
stiffness matrix of the first iteration for all following. Consequently, the second step of
the iteration approach has to be performed only at the start of the increment. However,
more iterations are needed until the solution converges. A third group of incremental
methods is the quasi-Newton approach, which uses instead of a tangent a secant
stiffness matrix. The second step of the iteration approach is simplified. However, due
to the rougher approximation of the stiffness more iterations are needed than in the
Newton Raphson method. 	In analyses performed by Johansson (1996) the BFGS
method resulted in satisfying results. Therefore the BFGS method was also chosen in
the work presented here.
63

-- 75 of 176 --

F 	F
.1F
'u 	u 	'u 	u
Tangent stiffness method 	Initial stiffness method
F
'u 	u
Secant stiffness method
Figure 4.11 	Different iteration methods for a one degree of freedom system.
4.3 	Finite element modet
The specimens RV12, RV13 and RV15 were idealised by means of two-dimensional
finite element models, see Figure 4.12, Figure 4.13 and Figure 4.14. For the concrete
plane-stress elements were used. Consequently, stresses out of the plane were not
considered. Due to the irregular geometry of the loops rectangular 4-node and triangular
3-node elements were combined.
The reinforcement was considered by means 	of 2-node 	truss 	elements 	with one
integration point. Hereby, only stresses in longitudinal direction are determined.
64

-- 76 of 176 --

For 	the 	interaction between 	concrete 	and 	reinforcement 	interface 	elements 	were
provided, which connect the nodes of reinforcement and the concrete. The interface
elements modelled the bond behaviour along the reinforcement axis. Bond stresses
perpendicular to the truss axis were not considered.
0 	-	/ / /1/ IN\ 1\/1 V ' M/l/lJ l/1/1/l/ll""
v_ ,I ,I./\, ,__,, 	V'"v 	•._ 	, I
'> -:'I\ 	✓ I< 	;:;,n,._ · , 	La
y
X
• 	Constraints in x-direction
O Constraints in y-direction
Figure 4.12 	Finite element mesh for specimen RV12 using 103 truss, 204 rectangular
plane stress, 539 triangular plane stress and 103 interface elements.
[\ \ J\fl 1\1\M'\j\ l\fV' 1\/\ 1\1'-/\I\ r\ '\ =V '\I 	V IVVI 	"V " 	\/
~~ 	•	\) 	:1\/,\\ 	r<; ·= ~~=,/ ,... ~ 1(1\. ' (i> ~l(
"~ ., 	,..
"/ ~ 'l. ['-V ~ ~ >( 	11''- v ::
~ KK 	;.,\ 	·~ 	' I/ 	✓ •
,7' 	'\ •Re 	~ 	' ,., 	V1 	V
,,, 	"/\~ \ / ::
"" /\ V
-
• 	Constraints in x-direction
O 	Constraints in y-direction
X
Figure 4.13 	Finite element mesh for specimen RV13 using 116 truss, 146 rectangular
plane stress, 648 triangular plane stress and 116 interface elements.
65

-- 77 of 176 --

n
• 	constraints in x-direction
0 	constraints in y-direction
X
Figure 4.14 	Finite element model of specimen RV15 using 88 truss, 550 rectangular
plane stress and 88 interface elements.
To reduce the number of elements symmetry in the x-direction was used, so that only
one half of the beam bad to be modelled and the midsection correspondingly supported.
Consequently, the reinforcement had to be treated in a separate way at the symmetry
axis. For specimen RV15 	with straight reinforcement it was 	sufficient to tie the
reinforcement node to the constrained concrete node. However, for specimens RV12
and RV13 the interaction of the loop splices had to be considered. Therefore, the
displacements of the reinforcement nodes in mid section were related to each other, see
Figure 4.15.
.,____________ n1
Ilz
YL
x-direction: 	Xnt +Xn2=O
Xn3 + Xn4 = 0
Il3
y-direction: 	Ynt - Yn2 = 0
X Il4
Yn3 - Yn4 = 0
Figure 4.15 	Consideration of the loop splices using symmetry. The displacements of
the reinforcement nodes in mid-section were related to each other.
66

-- 78 of 176 --

In the initial loading stage the support arrangement of the FE-model was different to the
one ofin the experiments. From beginning on the ends of the beams were supported. In
a first load step the deformation due to the self-weight was determined. Then, the load
was applied at the bottom of the specimen in mid-section; hence, the static system was
determined. The loading and support plates used in the experiments were idealised by
means of concentrated forces acting on single nodes.
Different mesh densities were used. In the middle of the beam, where the loop splice
was located, the mesh was refined and an element edge size of about 20 mm was used.
For the remaining part of the beam a coarser mesh with an element edge size of about
50 mm was used. To assure full functionality of the connection of the two parts the
semi-discretised nodes of the fine mesh were tied to their neighboured nodes using a
linear displacement relation, also known as interconnection.
Reinforcement bar
(2-node truss element)
Bond-slip
(4-node interface element)
Concrete
(plane stress
elements, triangular
and quadrilateral)
Figure 4.16 	Finite element idealisation in DIANA of reinforced concrete elements
using truss and interface elements. From Johansson (1996).
For the compression zone in the mid-section under the compressive reinforcement two
element rows were used to consider the non-linear stress distribution. Due to stability
problems at the edge element, 	where the concentrated force 	was introduced, 	the
compression zone of specimen RV12 was modelled using rectangular elements. In
specimen RV13, these problems did not occur, so that the complete mid zone could be
modelled using triangular elements.
67

-- 79 of 176 --

In the two-dimensional model neither spalling of the side concrete cover nor splitting
along 	the 	straight 	part 	was 	considered. 	However, 	the 	model 	was 	developed 	to
investigate the crack development in the splice zone and to analyse the dominating
stress inside the loop splice for different splice lengths.
4.4 	Results of the analysis
The influences of bond conditions and splice length were investigated. The results are
presented and discussed separately for each specimen in the following sections.
The ultimate shear capacity was underestimated in all FE-analyses. With a tensile
strength according to CEB-FIP Model Code, CEB (1993) 	and 	a fracture 	energy
determined by material 	tests 	a premature shear failure prevented yielding of the
reinforcement and hence a ductile behaviour. Therefore, the tensile strength and the
fracture energy were increased by 25 %. It seemed reasonable to increase both since the
former was determined according to CEB-FIP Model Code and the latter tested 28 days
after casting, 7 days earlier than the performed experiments.
Unless stated the analyses were based on the following assumptions:
• 	fracture energy: 	G1= 141 N/m (25 % increased),
• 	tensile strength: 	J; = 2.8 N/m2 (25 % increased) and
• 	bond conditions: 	"good" bond conditions.
However, also analyses with the standard material properties and tensile strength and
fracture energy varied were performed. These results are shown in Appendix C.
4.4.1 	Specimen RV12
The test results of specimen RV12 were dominated by spalling of the edge concrete
cover. In the FE-analysis spalling or splitting was omitted. Therefore, a large difference
of stiffness and maximum load capacity was expected
The load-deformation relations of two FE-analyses with varied bond conditions are
compared to the test results in Figure 4.17. The stiffness of the FE-analyses in the
cracked state is significantly higher. Additionally, the maximum load capacity is higher
than in the experiment. The results for "good" and "other" bond conditions are similar.
68

-- 80 of 176 --

However, in case of "other" bond conditions yielding of the reinforcement was reached
and a less stiff behaviour in the cracked state obtained. The stress distribution along the
reinforcement for "good" and "other" bond conditions is shown in Figure 4.18 and
Figure 4.19 for different load levels.
Load, F [MPa]
-Test specimen RV12
- 	Good bond conditions
- 	Other bond conditions
F
0 	5 	10 	15 	20 	25 	30
Deformation, ö [mm]
Figure 4.17 	Comparison of the load deformation relation of test and FE-analyses
using "good" and "other" bond conditions for specimen RV12.
69

-- 81 of 176 --

600 -r----,----,...---..----,----,-.----.
500 -r:w.::,--- 	-t-- 	-it-----------t----+-----i-- 	-J
Position No.
Stress, [MPa]
"Good" bond conditions
...,._ F=43 kN, d=0.6 mm
---F=71 kN, d=l.1 mm
--o- F= 154 kN, d=6 mm
...,.._F=199 kN, d=lO mm
---+-F=249 kN, d=l3 mm
- 	- •Yield limit (537 MP a)
Figure 4.18 	Distribution of the tensile stresses along the reinforcement loop using
"good" bond conditions for specimen RV12.
Stress, [MPa]
600 ....-----,-----,-----,-----,------,----, "Other" bond conditions
------- 	-~
----F=42 kN, d=0.6 mm
- 	F=70 kN, d=l.5 mm
--o- F=154 kN, d=7 mm
...,._F= 198 kN, d=lO mm
-&-F=250 kN, d=16 mm
- 	- •Yield limit (537 MPa)
500 -t--"-.c---r------+----+----+-----t------1 -
Position No.
Figure 4.19 	Distribution of the tensile stresses along the reinforcement loop using
"other" bond conditions for specimen RV12.
70

-- 82 of 176 --

A comparison of the stresses of FE-analyses and test is shown in Figure 4.20. Hereby,
the stresses obtained in the test are higher than in the FE-analyses. However, the
deformation of the test specimen at the same load level is as in the FE-analyses is
considerably higher.
Stress, [MPa]
Position No.
600 -r----,----,----,----.-----,-----, ~-- 	- 	---- 	----,
~Test specimen RV12
F=198 kN, d=l6 mm
......,_ Good bond conditions
F=198 kN, d=lO mm
--o- Other bond conditions
F=198 kN, d=l 1 mm
- 	• •Yield limit (537 MPa)
Figure 4.20 	Distribution of the tensile stresses along the reinforcement loops for
specimen RV12. The results of the test and FE-analyses are compared.
In Figure 4.21 the crack pattern of the test and a FE-analysis with "good" bond
conditions are compared. A strain limit of 0.003 was chosen when showing the crack
pattern; i.e. all elements in which the principal strain was larger than 0.003 are marked.
F =249 kN, d =13 mm 	At the end of testing
Figure 4.21 	Comparison of crack pattern of FE-analyses and test of specimen RV12.
The grey marked elements indicate a principal strain larger than 0.003.
71

-- 83 of 176 --

4.4.2 	Specimen RV13
The load-deformation relations for the FE-analyses using "good" and "other" bond
conditions compared to the test results are shown in Figure 4.22. The results for "good"
and "other" bond conditions are similar, even though a higher maximum resistance was
reached using "other" bond conditions. The in the tests obtained load drop due to
splitting, see Section 3.5.2, could not be modelled since the radial components of the
bond stresses were omitted, see Section 4.4.3.
Load, F [MPa]
-Test specimen RV13
- 	Good bond conditions
- 	Other bond conditions
F
0 	5 	10 	15 	20 	25 	30
Deformation, 8 [mm]
Figure 4.22 	Comparison of the load-deformation relations of specimen RV13 for test
and FE-analyses using "good" and "other" bond conditions.
The distribution of the stresses along the reinforcement loops for "good" and "other"
bond conditions is shown in Figure 4.23 and Figure 4.24.
72

-- 84 of 176 --

Stress, [MPa]
600
500
400
300
200
100
0
-100
- . -- . --. -- --
'\
\ ~
'\. ," -....,
""-.. "'·- ) 	.~
'
- . -i- - - - . --• -- -----
" '--=:; .~ 	t--..._
) 	h 	'J 	: 	I) 	J t,-,......J
Position No.
-+-F=46 k.N, d=0.6 mm
-F=85 kN, d=l.5 mm
-o-F=120 kN, d=3 mm
__.._F=165 k.N, d=5 mm
----iP-F=262 k.N, d=ll mm
- 	• •Yield limit (537 MPa)
Figure 4.23 	Distribution of the tensile stresses along the reinforcement loop using
"good" bond conditions for specimen RV13.
Stress, [MPa]
600
500
400
300
200
100
0
-100
-200
Figure 4.24
. -- . --. -
\
--"	I"-,...
~
J 	'
- . -
i-__
----
-• -- . - - . --. -- . - - . -
'"' '::-.,
-
'\.
,,
"	•i........
, IL 	~r-- ...
I 	I> 	-~ 	l 	I) 	]~
Position No.
-+- F=45 kN, d=0.6 mm
- 	F=80 k.N, d=l.5 mm
-o-f=l 12 k.N, d=3 mm
__.._F=151 k.N, d=5 mm
~F=255 kN, d=ll mm
- 	• •Yield limit (537 MPa)
Distribution of tensile stresses along the reinforcement loop using "other"
bond conditions for specimen RV13.
73

-- 85 of 176 --

A comparison of the stresses of FE-analyses and test can be found in Figure 4.25. The
stress distribution is very similar. In the FE-analyses as in the test the stresses are
strongly reduced before the curved part. Almost no difference in the stresses in the
reinforcement is obtained by varying the bond conditions.
Stress, [MPa]
600
500
400
300
200
100
0
-100
- . -- --~. --. --. - - . -
I~r--.....
' ~ ~
' 	~
~
, ~
' :~ 	h
- .--. --• --. -
--- - 	r-,...,,
~ ·~ J J 	1 'l
Position No.
-+- Good bond conditions
F=l65 kN, d=6 mm
-tr- Other bond condition
F=151, d=5 mm
-Test specimen RV13
F=164 kN, d=7 mm
- 	• •Yield limit (537 MPa)
Figure 4.25 	Comparison of tensile stresses of test and FE-analyses for specimen
RV13.
The crack pattern of the analysis with "good" bond conditions and the test is compared
in Figure 4.26. In both cases cracks are foliowing the loop.
F=262kN, ö= 11 mm 	At the end of testing
Figure 4.26 	Comparison of crack pattern of the FE-analysis using "good" bond
conditions and the test of specimen RV13. The grey marked elements
indicate a principal strain larger than 0.003.
74

-- 86 of 176 --

4.4.3 	Specimen RV15
The 	comparison 	of the 	load-deformation 	relation 	for 	"good" 	and 	"other" 	bond
conditions 	for 	specimen 	RV15 	are 	shown 	in 	Figure 	4.27. 	Hardening 	of 	the
reinforcement was reached. However, a shear failure occurred before rupture of the
reinforcement bars could take place. With "other" bond conditions a higher load
capacity was reached.
Load, F [MPa]
-Test specimen RV15
- 	Good bond conditions
- 	Other bond conditions
200 -l-- 	- 	+-----2'¼f!--------+---+--- 	-+-- 	-l ~-- 	--- 	--- 	- 	-~
0 -f---+---+-------if-----+----+----1
ö
F
0 	5 	10 	15 	20 	25 	30
Deformation, ö [mm]
Figure 4.27 	Comparison of the load-deformation relations of specimen RV15 for test
and FE-analyses using "good" and "other" bond conditions.
The distributions of the tensile stresses along the reinforcement using "good" bond
conditions are shown in Figure 4.28. A comparison with the stresses obtained in the test,
see Figure 4.29, shows that in the test yielding of the reinforcement was reached earlier
than in the FE-analyses, since the stiffness of the FE-model was higher than of the test
specimen RV 15.
75

-- 87 of 176 --

600
500
400
300
200
100
0
Stress, [MPa]
- -- - - -- - - .- - -- 	- -. 	. - -,,,_..
---- ..............
~
- 	--
~ 	~~
_J~ 	_J:i..._
1,-- -.............. 	_.,.- 	----i
1 	2 	3 	4 	5 	6 	7
Position No.
-+-F=35 kN, d=0.5 mm
- 	F=60 kN, d=l mm
~ F=158 kN, d=6 mm
_._F=239 kN, d=l2 mm
-i!r-f=263 kN,d=l8.4 mm
- 	• •Yield litnit (537 MPa)
- 	- 	- 	l	
~
1 2 " 3
n
4 "
5
n
6 	7j
i
'!
I
I
Figure 4.28 	Tensile stresses in the reinforcement bars 	of the FE-analysis 	using
"good" bond conditions for specimen RV15.
Stress, [MPa]
600
500
400
300
200
100
0
Figure 4.29
I- - 	- ... . - 	. -. - ·-'
.._ ___ - .- .- -----	~- 	- -=:::::::)
~ ~
- '
1 	2 	3 	4 	s 	6 	7
Position No.
-+- Good bond conditions
F=239 kN, d=l2 mm
-o-Test specimen RV 15
F=239 kN, d=14 mm
- 	- •Yield limit (537 MPa)
... 	- 	- 	;-- 	- 	- 	,,:
V 	V
1 2 	3 	4 	5 	6 	7
n 	n
Comparison of the stresses in the reinforcement bars of test specimen and
FE-analyses for specimen RV15.
76

-- 88 of 176 --

The crack pattem of test and FE-analyses is compared in Figure 4.30. It can be seen that
the propagation of the inclined cracks is influenced by the quadrilateral elements.
F= 258 kN, ö= 26.1 mm 	At the end of testing
Figure 4.30 	Comparison of the crack pattem of a FE-analysis using "good" bond
conditions and the test of specimen RV15. The grey marked elements
indicate a principal strain larger than 0.003.
4.5 	Concluding comments concerning the non-linear FE
analyses
The results of the FE-analyses and experiments correspond well in case of an increased
fracture energy and tensile strength. The load-deformation relations, the distribution of
the stresses of the reinforcement and the crack pattem are similar. However, the shear
capacity 	of 	the 	FE-models 	was 	underestimated. 	Even 	when 	yielding 	of 	the
reinforcement was reached the ductile behaviour was relatively short. One reason for
this 	behaviour is 	the 	overestimated 	stiffness 	of the 	specimens. 	Furthermore, 	the
reinforcement was modelled using truss elements, so that the dowel action between
reinforcement and concrete was not considered.
The results of the FE-analyses for specimen RV12 disagree with the results of the
experiment, since spalling of the side concrete cover was not considered in the two
dimensional FE-model. Therefore, the maximum load of the experiment is smaller and
the tensile stresses along the reinforcement loop correspondingly higher.
The different bond conditions examined here have a small influence on the stress
distribution along the loop even though they influence the crack development and the
77

-- 89 of 176 --

load-deformation. In contrary, the crack development and the load-deformation are
influenced by the bond conditions. Using "good" bond conditions the reinforcement
loops attract cracks, since the bond slip relation is stiffer. This higher stiffness due to
"good" bond conditions also leads to a stiffer responds of the specimens as shown in
Figure 4.17, Figure 4.22 and Figure 4.27.
Furthermore, the bond condition has a strong influence on the relation of the tensile
stresses to the radial pressure, see Appendix D. The radial pressure P is activated after a
certain slip of the reinforcement. With "other" bond conditions this slip is earlier
activated, hence the radial pressure, which may lead to spalling, acts earlier.
78

-- 90 of 176 --

5 	Conclusion
The minimum splice length for splicing of reinforcement loops outside frame comers
without a transverse reinforcement is limited to 600 mm according to the Swedish
Shelter regulation, Swedish Rescue Service Agencies (1998). In this way spalling of the
edge concrete cover shall be avoided, so that a load capacity of a comparable specimen
with continuous reinforcement bars can be obtained.
Experiments and non-linear finite element analyses were conducted to investigate the
influence of varying splice length and beam width.
With an elongated splice length of 600 mm spalling of the edge concrete cover could be
prevented. Most of the anchorage was provided by the straight part and the radial
pressure due to the bend was therefore sufficiently small. However, a splitting failure
along the straight bars occurred.
When the splice length was composed by two semi-circles without an additional straight
part spalling of the edge concrete cover occurred. The maximum steel stress was acting
at the beginning of the curved part. Consequently, the radial pressure caused spalling of
the edge concrete cover. The maximum load was reduced by the capacity of the two
outer bars. Nevertheless, the post-peak behaviour was still ductile.
An increased beam width bad a favourable influence on the load capacity by constant
reinforcement ratio. Again, the load capacity was reduced by the two outer loops. In
relation more remaining loops could carry the load after the loss of the outer loop pairs.
The bond conditions have an important influence on the acting radial pressure. With
increasing bond quality the slip, which is necessary to activate the radial pressure on the
concrete is delayed. With delayed radial pressure the spalling of the edge concrete cover
is also delayed.
79

-- 91 of 176 --

6 	Suggestions for further studies
In the present work the splicing of reinforcement loops were investigated by means of a
three-point test set-up. Consequently, the loop splice was subjected by a bending
moment and a shear force. To be able to investigate the influence of the shear force it is
required to do similar experiments or non-linear finite element analyses based on a four
point test set-up.
In the non-linear finite element analyses the specimens were investigated based on a
two-dimensional finite element model; thus the influence of the spalling of the side
concrete cover was omitted. An investigation of loop splicing by means of a three
dimensional non-linear finite element rnodel would be valuable, since the spalling effect
could be considered.
The work carried out was limited on splicing of reinforcement loops without a
transverse reinforcernent in the splice zone. It might be valuable to study the influence
of a transverse reinforcement under carefully consideration of its anchorage in the side
concrete cover anda possibly unfavourable influence on the construction process.
80

-- 92 of 176 --

7 References
Boverket (1994): 	Boverkets handbok för Betongkonstruktioner BBK 94, Band 	1,
Konstruktion (Boverket's Handbook for Concrete Structures, BBK 94, Vol. 1, Design.
In Swedish). Boverket, Byggavdelningen, Karlskrona, Sweden.
BST 	Byggstandardisieringen 	(1987): 	Betongprovning 	med 	Svensk Standard, 	BST
handbok 12, (Concrete testing according to Swedish Standard, BST Handbook 12. In
Swedish).SIS-standardisieringskommisionen I Sverige och Svensk Byggtjänst.
CEB (1993): CEB-FIP Model Code 1990, Design Code. Thomas Telford, Lausanne,
Switzerland.
Dragasovic M., van den Beukel, A., Gijsbers F.B.J. (1975): Loop connections between
precast concrete components loaded in bending. HERON vol. 20 1975 no. 3.
Eurocode 2 (1991): ENV1992-1-1, Eurocode 2: Design of Concrete Structures.
Femsys (1998): FEMGV User Manual,Version 5.2. Femsys Limited, 158 Upper New
Walk, Leicester, LEl 7QA.
Franz 	G., 	Timm 	G. 	(1973): 	Versuche 	zur 	Haken-und 	Schlaufenverbindung 	bei
biegebeanspruchten Platten. DafStb Heft 226. (Test of hook and loop connections for
bending subjected plates. DafStb booklet 226. In German)
Imran I. and Pantazopoulou S.J. (1996): Experimental Study of Plain Concrete under
Triaxial Stress. ACI Materials Journal 93-M67. Nov-Dec 1996.
Johansson M. (1997): New Reinforcement Detailing in Concrete Frame Comers of Civil
Defence Shelters. Non-linear Finite Element Analyses and Experiments. Chalmers
University of Technology, Division of Concrete Structures, Publication 96: 1, Göteborg,
Sweden.
Kordina 	K., 	Fuchs 	G. 	(1972): 	Untersuchungen 	an 	-Obergreifungs-VollstöBen 	mit
hakebförmig-gebogenen Rippenstählen, Universität Braunschweig (Studies of Splicing
of hook-formed bars. University ofTechnology, Braunschweig. In German.).
81

-- 93 of 176 --

Lundgren K. (1999): Three-Dimensional Modelling of Bond in Reinforced Concrete;
Theoretical Model, Experiments and Applications. Chalmers University of Technology,
Division of Concrete Structures, Publication 99: 1. Göteborg, Sweden.
Magnusson J. 	(1997): 	Bond and 	Anchorage of Deformed Bars 	in High-Strength
Concrete. 	Division 	of Concrete 	Structures, 	Chalmers 	University 	of Technology,
Publication 97: 1. Göteborg, Sweden.
Plos M. (1996): Finite Element Analyses of Reinforced Concrete Structures. Division of
Concrete 	Structures. 	Chalmers 	University 	of 	Technology, 	Compendium 	96: 14,
Göteborg, Sweden.
Rll.,EM 50-FMC (1985): Determination of the fracture energy of mortar and concrete
by means of three-point bend tests on notched beams. Materials and Structures, Vol.18,
pp. 285-290.
Swedish Rescue 	Services 	Agency 	(1998): 	Skyddsrumsregler SR, 	Produktion 	och
vidmakthållande Räddnings Verket. 1998 Rädningsverket, Karlsstad.
Tepfers R. (1973): A theory of Bond Applied to Overlapped Tensile Reinforcement
Splices for Deformed bars. Division of Concrete Structures, Chalmers University of
Technology, Publication 73:2, Göteborg, Sweden.
Timm 	G. 	(1969): 	Untersuchungen 	zur 	Verbindung 	von 	Stahlbetonplatten 	mit
hakenförmig gebogenen Stäben. Fakultät för Bauingenieur- und Vermessungswesen der
Universität Karlsruhe (TH). (Examination of connections of reinforced concrete plates
using hook-formed bars. Department of Civil engineering. University of Technology
Karlsruhe.).
TNO (1998): Diana-Finite Element Analysis. User's Manual release 7. TNO Building
and 	Construction 	Research. 	Division 	of Engineering 	Mechanics 	and 	Information
Technology, Delft, The Netherlands.
82

-- 94 of 176 --

Appendixes
A 	Drawings of test specimens and arrangement of strain gauges
B 	Material tests
C 	AdclitionaJ results of FE-analyscs
D 	Relation of steel stress and radiaJ pressure acting on the concrete
E 	Test results

-- 95 of 176 --



-- 96 of 176 --

AppendixA
A 	Drawings of test specimens and arrangement of strain gauges 	A.1
A.l 	General dimensions 	A.l
A.2 	Reinforcement detailing 	A.2
A.2.1 	Specimen RV12 	A.2
A.2.2 	Specimen RV13 	A.4
A.2.3 	Specimen RV14 	A.6
A.2.4 	Specimen RV15 	A.8

-- 97 of 176 --

A Drawings of test specimens and arrangement of
strain gauges
A.1 	General dimensions
1.5 	0.1
0.l l 	1.5	l 	A 7
,-1---L------------.......;_------'---L,
}·3
O.l .~ -~ 	A 	J 	ll____3_.2 	---------~ 	[m]
Figure A.1 	Side elevation of specimen RV12, RV13, RV14, RV15.
300
600 	[mm]
l'1
Figure A.2 	Transverse section A-A of specimen RV12, RV13, RV15.
300
----------------------,L
-,._	l _________1_2_00___________,,j ,I'--, 	[mm]
Figure A.3 	Transverse section A-A of specimen RV14.
A.l

-- 98 of 176 --

A.2 	Reinforcement detailing
A.2.1 	Specimen RV12
I 1.6 	1.6
.
J' A
0.069 	0.2 	0.2 0.2 D.2 0.2 	0..2 , 0.2 0.26~ 0.2 	0.2 0.2 	0.2 0.2 	0.2 0.2. 	, 	. 	, 	, 	, 	,
..,j<:4__ _ 	_.4_9 ___0.::..:..:.2=-2~..IL--,""-~---_ 	}	1 	✓ 	l .49_______ [m]
Figure A.4 	Reinforcement detailing of specimen RV12 (side elevation).
k 56 ~I
7J
IS)
T1
84 	k
7J
IS)
T2
84 7f
IS)
T1
68 H 84	71 '
C9
f	7
ic.
T1
84	84 ~/
ic.
T2
k 56 k
71 	7J
[(>
T1
24
Symmetry line 	300
1 2
.:) 3 4
.:) 5 	6
.:) 7 ,8
~
9 10
C. 11 12
C. 13 14
C. 24
k4o~/
7J
84 	~
7J
84 7r 100 	k
71
600
84 7r 84 	J1 	84 	k4ok
71 	7J
[mm]
Figure A.5 	Reinforcement detailing of specimen RV12 (transverse section A-A).
Tl and T2 mark the type of strain gauge arrangement used, see Figure
A.6 and A.7.
A.2

-- 99 of 176 --

2
r
16
220
16
24	~
r
220 [mm]
Figure A.6 	Type 1 (Tl) of strain gauge arrangement in specimen RV12.
220 [mm]
Figure A.7 	Type 2 (T2) of strain gauge arrangement in specimen RV12.
14ef, 16 (1=3 .51 m) 	32ef, 10 (l=0.57 m)
0.236
0.57
1l 1
l
[m)
1
l
Figure A.8 	Reinforcement in specimen RV12
A.3

-- 100 of 176 --

A.2.2 	Specimen RV13
1.6 	1.6
r
)_ .
.
A 	~ ~ 	0.2_	0.079 	0.2 ,,, 0 .2 0.2 c, 0 .2 	0.2 	0 .2 	0.642 	,,, 0.2 	0.2 0.2 	0.2
, 	, 	, 	, 	, 	, 	, 0.079
o.1 	L L 	1.2 	J 	0.6 	J 	1.2 	J L0.1	,, 7\ 	7\
[m]
Figure A.9 	Reinforcement detailing of specimen RV13 (side elevation).
v56 r 	84 	v 	84 	f 	68 	Id 	84 	f 	84 	v 	84 	v 56 1,,
I) 	I 	I) 	I 	7I 	I 	I) 	lf 	JI
24
Symmetry line
I
7 '1 2 	3 4 	5 6 	8 	9 	11 12 	13 14
«) 	«) 	«) 	c» 	C. 	C.	~I 	24
84 	J 	84 / ~ 100 , l 84 	/~ 	84 	k 	84
1 	71 	1 	I) 	I)
600 	[mm]
l 71
l
Figure A.10 	Reinforcement detailing of specimen RV13 (transverse section A-A).
A.4
300

-- 101 of 176 --

10 1// 	16 	600 	16 	_,10
,, ✓ / 	/ /
190 	300 [
I,, 	/ 	/
mm]
/ 	,, 	,
Figure A.11 	Position of the strain gauges in specimen RV 13.
14tp 16 (1=3.89 m) 	24tp 10 (l=0.57 m)
0.236
0.57	l 	l1 	1 	I
l •	1.57 	[m]
1
l
Figure A.12 	Reinforcement in specimen RV13
A.5

-- 102 of 176 --

A.2.3 	Specimen RV14
1.6 	1.6
1
It
A
r 	7 	r
I	: 	: : : : : 	() 	~ 	: 	: 	~ 	:I
0.069 ~ '--o._2 -¾'-o._2 """'0_.2-,/"-o_.2-,.l<-o._2-,lo<o_.2~ A---,li!~ =~o=.2.,l"--o_.2 ""'0_.2....l'-o_.2 j_o,2 J o. 2,lo.2 ,l ~ .009
1
-J~'-------_1._49_ 	__ __J.....	9 ·_2~,_~__ _ 	I_.49________	J~ 	[m]
Figure A.13 	Reinforcement detailing of specimen RV14 (side elevation).
k56 L, 85 	I,, 	85 k 85 I, 85 	L, 85 	L, 85 	L,
i\ 	71 	i\ 	71 	i\ 	i\ 	1 	'1
«)I 	«) 	«) 	«) 	«) 	«) 	i«)J
1 2 3 4 	5 6 	7 8 	9 10 11 12 13 14
«) 	«) 	«) 	«) 	«) 	«) 	«)
I,@ ~ 85 I, 85 	85 	I,, 85 	I, 85 	I, 85 	I,,
'I '1 	'I 	'I 	'I 	'I
f 	i\!,, 85 ~I 85 	I,, 85 	I, 85 	I, 85 	I, 85 ~ 56 I,
1 	i\ 	i\ 	i\ 	'1
ic.i 	ce 	c:. 	c:. 	c:. 	ce 	ic.i
Symrretry line
15 16 17 18 	19 20 21 22 	23 24 	25 26 27 28
c:. 	c:. 	c:. 	ce 	ce 	ce 	ce
JOI 	1,,85 	I 85 	I, 85 	L, 	85 	L, 85 	L, 85
'I 	'I 	'I 	'I 	'I 'I
1200 	[mm]
,r
',~
24
24
, -
!AOI,' 	'
Figure A.14 	Reinforcement detailing of specimen RV14 (transverse section A-A).
A.6
300

-- 103 of 176 --

220
16
[mm]
Figure A.15 	Position of the strain gauges in specimen RV14.
284' 16 (1=3.89 m) 	324' 10 (l=0.57 m)
0.236
0.57
1
l 1
l
1.57 l 	[m]	'l 	1 	'I 	'I
Figure A.16 	Reinforcement in specimen RV14.
A.7

-- 104 of 176 --

A.2.4 	Specimen RV15
1.6 	1.6
1
A7
r "
I
I: 	: : 	: 	: : 	: 	: 	: 	: 	: : 	: I
0.1 	0. 2 0.2 	0. 2 0.2 	0.2 0.2
A
0. 2 	0.2 	0.2 	0 .2 0.2 0. 2 0.2 0.2 	0. 2 	0.1
3.0	0.1 J L 	JJ 0.1	7j
[m]
Figure A.17 	Reinforcement detailing of specimen RV15 (side elevation).
! Symmetry
I ..
4
• 	• 	• T
I
• 	• 	•I
I
I 	300
j
1 	2 	3 	4 	5 	6 	7
4	• 	• 	• 	•
I
I
I
• 	• 	•
J40J 	J 87 	~ 	J
i
87 	J 87	87 	87
[mm]
600
Figure A.18 	Reinforcement detailing of specimen RV15 (transverse section A-A).
A.8

-- 105 of 176 --

i 5 	4 	3 	2 	1
E:5	
I = 	= 	= 	=! 	0 	0
I 	16
!
220
16
10 	1)6 	110 	., 	110 	16 	10	✓~ 	✓
,, 	,, 	,
✓ 	190 	I; 	220 	1... 	190 [mm]
.,
/ 	/ 	"I ,,
Figure A.19 	Position of the strain gauges in specimen RV 15.
14~ 16 (1=3,14 m) 	32~ 10 (1=3,14 m)
3.14 	0.57 l,
'i
[m]
Figure A.20 	Reinforcement in specimen RV15.
A.9

-- 106 of 176 --

AppendixB
B 	Material tests 	B.l
B .1 	Concrete 	B. l
B.1.1 	Compressive strength and Modulus of Elasticity under compression 	B. l
B.1.2 	Fracture energy 	B.4
B.1.3 	Test results for the frac'ture energy 	B.6
B.1.4 	Grading curves of the used aggregates 	B.10
B.2 	Reinforcement 	B.12

-- 107 of 176 --

B Material tests
The material properties of concrete and steel in compression and tension are determined
by 	material 	tests. 	These 	material 	tests 	are 	conducted by 	a standardised 	process
depending on the regulation used. In this way, it is possible to compare different test
series, knowing the properties of the utilised materials. In the present study, the
properties were tested according to Swedish standard, BST Byggstandardiseringen
(1991).
B.1 	Concrete
For concrete the following properties were tested:
• 	compressive strength
• 	Young's modulus in compression
• 	fracture energy.
The test results for concrete depend mainly on the form and treatment of the test
specimens. The main influences on the results are:
• 	test specimen' s geometry and dimensions, the
• 	age of the specimen at testing, and the
• 	way of curing until the test date.
In the following sections the testing processes are mentioned and compared to the
European code ENV 206 and the German code DIN 1048.
Additionally, the grading curves for the aggregates are shown on Page B.9 and B.10.
B.1.1 	Compressive strength and Modulus of Elasticity under
compression
The compressive strength was tested on cubes and cylinders at an age of 28 days and
additionally also at the first day of the full-scale tests. The dimensions were chosen
according to Swedish standard and are shown in Figure B. l. In this standard, the curing
process differs for cubes and cylinders. The cubes stay in the formwork for one day,
B.1

-- 108 of 176 --

then they are stored four days under water with a temperature of around 20° Celsius.
Afterwards, they are placed in air under normal conditions until the test age is reached.
Whereas, the cylinders stay one day in the formwork and are then stored under water
until their test age is reached. An overview of the regulation for the detennination of the
compressive strength according Swedish standard, ENV 206 and DIN 1048 are shown
in Table B. l.
150
300
150 l	)I
150
a) Cube a) Cylinder
Figure B.1 	Test specimen' s dimensions according to Swedish standard.
Table B.l 	Regulation 	for 	detennination 	of compressive 	strength 	according 	to
Swedish standard, ENV 206 and DIN 1048.
Geometry 	Dimension
[mm]
Curing 	Test date
Swedish Cube 	150
1 d formwork +
4 d under water +
23 don air
28d
Standard
Cylinder 	</J 150 X 300 1 d formwork +
27 d under water 28d
Cube 	150 1 d formwork +
27 dunder water 28 d
ENV206
Cylinder 	</J 150 X 300 1 d formwork +
27 d under water 28 d
DIN 1048 	Cube 	200 1 d formwork+
27 don air 28 d
B.2

-- 109 of 176 --

Stress, [MPa]
30 .......------------,-----.-----.........---------,
20 +-----+--------..11~-+-------1-----l - 	Specimen 1 (28 days)
- 	Specimen 2 (28 days)
-s ecimen 3 (28 day s15 +--------1-1-----+-----+----'-.....,...._____-,-_.......,_---------I
10 +---- 	---1------+------+-----+------+---------;
5 -1--------:4------,------+------+------+---- 	--+---------;
o ~-------i-----+-----+-------+------+----~
0
Figure B.2
0.5 	1.5 	2 	2.5 	3
Stress-strain relation in compression for the tests on Young' s modulus
after 28 days.
Stress, [MPa]
30 ~-----.-----~-----.-----~---------,
15 -1-------+...,._----+-----+-----1 -Specimen 1 (35 days)
-Specimen 2 (35 days)
10 --r-------,---1--------r- 	---t-------j.:::-	~ S~ec~i~m~e~n...:::3~(,=.3~5~d~aL'.:s'.L.I)
Q -f'-----1-------+-----+------+-----+-------1
0
Figure B.3
0.5 	1 	1.5 	2 	2.5 	3
Strain, [l 0- 3]
Stress-strain relation in compression for the tests on Young' s modulus
after 35 days.
B.3

-- 110 of 176 --

B.1.2 	Fracture energy
The fracture energy G1 quantifies the toughness of the concrete. As the tensile strength
this toughness is as an important factor conceming anchorage capacity of a bar. The
fracture energy is defined as the amount of energy necessary to create one unit area of a
crack. The test of the fracture energy is carried out for a standardised beam, with a notch
in the middle with a depth of half of the beam height, see Figure B.4. In the deformation
controlled test the load F and the deformation ö at the middle of the beam are measured.
The fracture energy is calculated from the equation
[N/m] 	(B.l)
with
Wo = according to Figure B .5.
m =weight of the beam [kg],
g = acceleration due to gravity (9.81 m/s2),
Ö 0 = deformation at the failure of the beam [m],
Aug = area of the ligament, defined as the projection of the fracture zone on a plane
perpendicular to the beam axis [m2].
A schematic load displacement curve is shown in Figure B.5.
beam width = 100 mm
1-_~ .---B_a_ll __s_o __,}...,...~ 	Roller _ J}oo0
f 	,r
J	4 	840 	[mm]
Figure B.4 	Test specimen for the determination of the fracture energy, according to
Rilem's recommendations, Hilleborg (1983).
B.4

-- 111 of 176 --

F
Öo
Figure B.5 	Schematic load displacement curve for a fracture energy test according to
RILEM's recommendations, Hilleborg (1985).
The test results for the fracture energy used in the present test series are shown on the
following pages.
B.5

-- 112 of 176 --

------- 	- 	-
nannftn ..----~-------- 	-	-- 	-- 	- 	___. __.........
Chalmers Tekniska Högskola
Betongbyggnad
Att: Morgan Johansson
412 96 GÖTEBORG
Handliiggare. enlv:r/Handled by, depa1'17Mnt 	Dnmm/Dat• 	Betcckninc/R•f•r•nc• 	Sida/Page
Kent Malmström, Byggnadsteknik, ip 	1999-10-05 	99B4,4817 	1 (2)
Tel+46(0)33165120
Provning av betongbalkar
(2 bilagor)
1 	Provföremål
Betongbalkar för bronmekanisk provning. En serie om 3 balkar distribuerades till SP
genom Chalmers försorg. Balkarna var märkta 2/9 MJ och ankom 1999-09-28. Efter
ankomsten försågs de därtill med nr 1-3. Omedelbart därefter sågades en ca 45 mm djup
anvisning mitt på varje balk, varefter balkarna placerades i ett vattenlagringskärl.
2 	Uppdrag
Brottmekanisk provning enligt RILEM "Detennination of the fracture energy of mortar
and conrete by means of three-point bend tests on notched beams".
3 	Provningsmetod
Balkarna belastades i tre-punkts böjning helt enligt RILEMs rekommendationer. Spänn
vidden var i samtliga fall 800 mm. Balkarna förvarades i vatten med temperaturer
(20 ± 2) °C fram till ca 30 min före provningen.
Belastningen var deformationsstyrd och påfördes med en nedböjningshastighet mätt på
provkroppen av 0,25 mm/min. Belastning och nettonedböjning registrerades fortlöp
ande.
"'
SP, Sveriges Provnings-och Forskningsinstitut, Box 857, 50115 BORÅS, Tel 033-16 50 00, Telefax 033-13 55 02, E-mail info@sp.se, Org.nr 556464-6874
SP, 5Wfldish National Tsstingand Research lnstftute, Box 8S7, 5-501 15 BOR.'.S, SWEDEN, TBlephone +4633 16 5() 00, Ttllelax+ 46 33 13 55 02, E-mail infoOsp.se, Reg.No 556464-6874
Oetta dokument 16r endast 61erges I 1ln 11<,lhel, om inle SP i lclr114g skriftligen godlcAnl annat
Tlris docum.,,, may not INI reprodue«J other than in full, axcspt with 1h11 priOI" written approva/ ol SP.

-- 113 of 176 --

DADDI\D'P
i"ini"'awi'ii 	Oatum/Da1e 	Bcteckning/Reference 	Sida/Page
1999-10-05 	99B4,4817 	2 (2)
4 	Resultat
Resultaten är sammanställda i tabell, som förutom mått- och viktsuppgifter även
innehåller last vid första spricka och tillhörande nedböjning, deformation vid kollaps,
uppgift om ballcdelarnas vikt efter brott samt beräkning av bronenergin GF enligt
.RILEM.
SP Sveriges Provnings- och Forskningsinstitut
Betongsektionen
~~ 	~'"C.-f('t,l.:::-,,~.......:::----4,..r--..J
Kent Malmström
Tekniskt ansvarig 	Teknisk han
Bilagor
1-2 Defonnationskurvor
;;;-g;

-- 114 of 176 --

D A DDI\D'I'
n;;r .- w1n i
Balk nr
Till verkningsdatum
Provningsdatum
Dimension BxHxL (mm3)
Vikt (g)
_ Densitet (kg/m3)
Last vid första spricka (kN)
Tillhörande deformation (mm)
Ligament BxH1 (mm2)
Deformation öo (mm)
Brottenergi GF (N/m)
Balkdelarna.s vikt (g/g)
IJ.10UniDutr
1999-10-05
1
1999-09-02
1999-09-30
100,5xl01,0x841
19980
2350
1,190
0,123
I00,5x56,0
1,26
l 14
9940/10030
&tccknin;IRrr~rrn•·r
99B4,4817
2
1999-09-02
1999-09-30
l01,2x99,3x842
19890
2360
0,830
0,076
10l,2x55,3
I, 11
100
9860/10020
I ( I)
Bilaga 1
3
1999-09-02
1999-09-30
l00,5x99,7x84 l
19810
2355
1,030
0,120
100,5x55,2
1,50
126
9870/9940
I q J	..~
l.6 ~
I
1.4 -!
z 	~
' 	I
:i. 1.2 ~ /•
• , o 1 	/ I+-1 I, 	'. 	/ ,
'I- 	"
0 0.8 -~ 	/ 	I
\.. 	~ 	I I
~ 0.6 ~ 	i,
I 	//
! /,	0..4 ·7 ,,
• /1
02 _;, ,., 	I
• 1' 	.
0.0 L,_t' ,,,_--.----r--r---i4-~.,........-,.J..,_...,......,..:~:::;:::=::::;::,:=::;::::=.F"""F""""-:--,-,---,-----,
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	8.6 	0.7 	0.8 	0.9 	1.0 	1.1 	1.2 	1..3 	1.4 	, ~
Deformation, 	mm
Balk 1

-- 115 of 176 --

D-•NmiD,11• 	Bc1eelcninsJR,1.-r,n.:,
1999-10-05 	99B4,4817
2.0
1.8
1.6
Sid:1/Pu~,
l (l)
Bilaga 2
i
'
1.4
. z
I :1. 1.2
I
; +J~ 1.0
,~
: a o.s: \...	
I
;.. ~ 0.6
0.4
0.2
0.0 1 ;.
0.0 	O.i 	0.2 	0..3 	0.4 	0.5 	0.6 	0. 7 	0.8 	0.9 	1.0 	1.1 	, .2 	1.3 	1.4 	I•-
Jeformation . mr,-,
Balk2
'+-
i I 	\	0 0.8 I
I
I..
t 	0.6- 	I
I
I	0.4 I
1
0.2 -v 	I
I 	I	0.0 	I ' 	I 	' 	I 	' 	I 	I 	I 	I 	i 	I 	I 	I 	i 	I 	' 	I 	' 	I 	I 	I 	'
0.0 	0.1 	0.2 	0.3 	0.4 	0.5 	0.6 	0. 7 	0.8 	0.9 	t.O 	1.1 	1.2 	1.3 	1. 4 	i.S
Deformation, 	mm
Balk 3
I

-- 116 of 176 --

PROTOKOLL FÖR BALLSTUNDERSÖKNIG
MATERlALUPPGIFTER·.
PrDW
nr . 	Mat.. . .. 	,.,.
,. ST~ 111 ~ ~1-n
2.
3.
SIKTANALYS:
Lewranahw1
I•
t5.ST~ ,o
t<am-
fonn
l"flf..
Humua--
arad 	Slamhialt ~
fukllc'fa(
.. V-=-a ........~.~... .... .. ....... .. ..
o.wn .... ...I..J. ~. .. ... .1SL.~..'?. .,
Altl .pllll:a ... ...	rB	..... . ... ...... .. .. ....... .. .
Sllclmad 	,.
fri,,.... 	Stanrw
w;dmm 	g,'MI 	. ..31,5
22.•
16 	lb'll. 	l./
11.2 	'9'1.(/ ,.,.
e 	//';.J 	-2..,.
• qt; 	.!L
2 	I
1 	.9
0.S 	R.
0.ZS 	1/b
0,125 	I~
., 0,083 	,~
C 0,063 	1/
SMnwna 	IW..3b ,e-o
Finh. rnoc1u1 	M,•
.._ ~
-~"- •!¾
q1,., 	l/
~q 	-., 	q~
0 	Jrrf)
/(H)
,~
lö"D
/~
.'i'1?
f....c:.J..
'- ..C-'9
2. 	3.
Stannar 	i:i-
-- Stannar
gram 	.. 	rwI •,e ., ! ··• 	gram 	..
~- 	M,•
,__
,.,~ ...
.
--	ar!.,_
a..dcr\.töraamtonn
N • Nlltunnllterill
K • Knlumlltarial
NK•~
~..,,...~.
...iatv..,.-.t.llMI•
UIIÖlllillklllliDlf, N
S\WIM~
•>D.075 an amancsu
enl. ,_,.,.. .. m,d
)
SIKTDIAGRAM: 	U.S. standard1iktaeri1
200 	100 	105045 	353025 	1111614 	10 8 7 	5 4 3 1/a 	~" 	I~" 	'J./." 1" 	2"	.100
'
-IO
-IO
-,c
-10
-ICI
	. •
-.a
-~
-ac 	I
I	-,c I
0 	.........
' 	' 	' 	'
i 	··~•. 	~ 	~~~	.,, - 	-~g
- 	"	0
Anteckningar
0.125 	G.25 	0,5 	1 	2 	4 	,e 	31,5 	13
•
Svensk betongsiktserie, fri maskvidd mm

-- 117 of 176 --

PROTOKOLL FÖR BALLASTUNDERSÖKNING
MATERIALUPPGIFTER:
Prov
nr 	Materialbeteckning 	Leverans tn\n
- Kom-
form
Humus-
grad 	Slemhalt Oen1ltet 	Fuktkvot
%
1. 	t;~u.r 	0 .,.~ 	..S:JoGM~-D t= 	N 	;..., D
2. 	- 	I I 	- 	"'	b S- 74.0 	I,/ 	~,S'
3.
Nr .···- ·· .. .. . ..
Datum .i.. .. . I 1.. 19 ?'f
Arb.plats [B .
/ZIAl6.lfN ..
SIKTANALYS:
Sikt med 	1 	2 	3
fri mask- 	Stannar 	Paue- Stan- 	Stannar 	Passe- Stan- 	Stannar 	Pas,e - 	Stan-
vidd mm 	rar 	nar 	rar 	nar 	rar 	ner
gram - 	'M, 	I% 	I% 	gram 	'M, 	I% 	I% 	gram 	'Il, 	I'M> 	Ht.
~Q-1
/90
Il 1 	I '2. 	I 	9e; 	1 ,,, 	1
B 	tf;' 	.2 	C/R 	.:i.. 	:l1.. 	.J 	cu.. 	'1 1 " ½
4 	A:!, 	i- 	1qt 	q 	\ l l. 	\ ,._ 	}i..., 	1l 	~s 	IS
2 	t... J 	2 	ev 	lb 	l11 'f 	I(. 	(,~ 	~'7 	t1 	1'f
, r?~ 	q 	I~~ 	~(. 	1?-S 	,, ½" 	SI 	5'-1 	It"
0,5 	1/~Y 	I/~ 	bJ.. 	38 	\'6(o 	ic, 	'V} 	t-1 	~'=, 	l '1
0,25 	J.2.l I 2.\/ :S8' 	b.S. 	\~lo 	l"i 	12 	8'~ 	l '1- 	6S
0,125 	,250 Ub 	/J 	J./l( 	1'1 	i 	'1 	I.te 	(:. 	'-(7
•)0,063 	95" 	Il{) 	.Il 	tt.ci 	~ 	1 	l
<0,063 	J. I 	.t. 	\<:, 	I
Summa 	9J./ I 	I/J1J 	:tet6 	't'S9 	100 	3, I I 	7 fC,
Finh. modul 	M,= 	I, '/6 	. M2= 	311 	MJ= 	1 ?'t
SIKTDIAGRAM: 	U.S. standardslktserie
Beteckn. för komform:
N 	= naturmaterial
K 	= krossmaterial
NK 	= natur+kross
Beteckningar samt utföran
det av samtliga ballastun•
dersökningar, se Svensk
standard.
•) 0,075 kan användas
enl. Svensk standard.
200 	100 	605045 	353025 	18 1614 	10 B 7 	5 4 31/, 	3/( 	Y," 	¾" 1" 	2"	. 	I 	I I
V 	... . 	.
100 	I
- 	90 	/
V
--- eo 	/
/- 	10
/- 	60
)V
- 	50
/	- 	40
V
---- 30
/ /
- 	20 I
- 	,o 	/
/
---4 'a, 	' I
'
i CE!. 	"! 	'llt Il')
~~ ~	V,
- ... f'Jll:i
0 	- NN 	C')
0,125
Anteckningar
. -	c:
-~ ...CL
-ö0)
C:
'"'E
CD
"0
C:
~
Cl)
Cl)
Cl)
~
0,25 	0,5 	2 	4 	B 	16 	31,5 	63
Svensk betongsiktserie, fri maskvidd mm

-- 118 of 176 --

B.2 	Reinforcement
Five reinforcement specimens of type BS00BT were tested, each with a length of 1100
mm according to the standard procedure 	at the Chalmers 	Structural Engineering
Laboratory. The load displacement curves are shown in Figure B.6.
Stress, [MPa]
800
600
400
200
0
0 	20 	40 	60 	80 	100 	120 	140 	160 	180
,~ ,-
- ::--
-Average
-Specimen 1
-Specimen 2
-Specimen 3
-Specimen4
-S pecimen 5
Figure B.6 	Stress-strain relation for the reinforcement tests. The results of five
specimens and their average are shown.
B.12

-- 119 of 176 --



-- 120 of 176 --

Appendix C
C 	Additional results of FE-analyses 	C.1
C.1 	Results of FE-analyses with "normal" material properties 	C. l
C.1.1 	Specimen RV12 	C.1
C.1.2 	Specimen RV13 	C.3
C.1.3 	Specimen RV15 	C.6
C.2 	Crack propagation in FE-analyses 	C.8
C.2.1 	Crack propagation of specimen RV12 with "good" bond conditions 	C.8
C.2.2 	Crack propagation of specimen RV12 with "other" bond conditions 	C.9
C.2.3 	Crack propagation of Specimen RV13 with "good" bond conditions 	C.11
C.2.4 	Crack propagation of Specimen RV13 with "other" bond conditions 	C.12
C.2.5 	Crack propagation of specimen RV 15 with "good" bond conditions 	C.13
C.3 	Input files for DIANA 	C.15
C.3.1 	Data file 	C.15
C.3.2 	Command-file for linear analysis 	C.19
C.3.3 	Command file for initiation of the non-linear analysis 	C.19
C.3.4 	Command file for the non-linear analysis 	C.20

-- 121 of 176 --

C Additional results of FE-analyses
C.1 	Results of FE-analyses with "normal" material
properties
The results of the analyses described in Section 4.4 were based on modified material
properties. The fracture energy and the tensile strength were increased by 25 %, called
"increased" material properties. In this way it was possible to model the behaviour
observed in the experiments. However, also analyses with "normal" material properties
were carried out and their results presented in the following section. Hereby, the tensile
strength, the fracture energy and the bond conditions were varied and the obtained load
deformation relations compared.
Unless stated following material properties were used:
fracture energy 	G1= 113 N/m (according to the material test after 28 days)
tensile strength 	f, = 2.22 MPa (according to CEB-FIP Model code, CEB (1993))
bond conditions 	"good" bond conditions
C.1.1 	Specimen RV12
The load-deformation relations of two FE-analyses with varied bond conditions are
compared to the test results in Figure C. l. With "other" bond conditions a slightly
higher load capacity was reached. 	This coincides with the observations made in
Section 4.4.
A 	comparison 	of the 	load-deformation 	relations 	of analyses 	with 	"normal" 	and
"increased" material properties is shown in Figure C.2. Hereby, it can be seen that the
tensile strength and the fracture energy have a strong influence on the load capacity.
However, the tensile stresses in the reinforcement are not affected. A comparison of the
tensile stresses for the analyses with "normal" and "increased" material properties is
shown in Figure C.3. The stresses in the reinforcement loops are almost identical.
C.1

-- 122 of 176 --

Load, F [MPa]
300 --,-----r----.---..---..---.-------, ~---- 	--- 	-~
-Test specimen RV12
250 -------l---+---+----1---------l- 	-- 1 - 	Good bond conditions
- 	Other bond conditions
.lllL
F
o ---------------+--------------l
0 	5 	10 	15 	20 	25 	30
Deformation, o[mm]
Figure C.l 	Comparison of "good" 	and 	"other" bond conditions 	with "normal"
material properties for specimen RV12.
Load, F [MPa]
-Test specimen RV12
- 	Normal material properties
- 	Increased fracture energy
and tensile strenj?;th (25 %)
0 	10 	20 	30
Deformation, o [mm]
Figure C.2 	Comparison 	of 	the
"increased" 	material
specimen RV 12
load-deformation
properties 	using
relations 	for
"other" 	bond
"normal"
conditions
and
for
C.2

-- 123 of 176 --

__._ Normal properties
F=198 kN, d=lO mm
-o- Increased properties
F=199 kN, d=lO mm
-<>-Test specimen RV12
F=198 kN, d=l6 mm
- 	• •Yield limit (537 MPa)
Figure C.3 	Comparison of the tensile stresses for "normal" and "increased" material
properties with "other" bond conditions for specimen RV12.
C.1.2 	Specimen RV13
For specimen RV13 	the influences 	of fracture 	energy 	and tensile 	strength 	were
investigated separately. Furthermore, the bond conditions were varied.
The load-deformation relations for "good" and "other" bond conditions using "normal"
material properties are shown in Figure C.4. Contrary to former observations made in
Section 4.4 the obtained load capacity was higher using "other" bond conditions.
Two analyses, in which the tensile strength and the fracture energy were varied
respectively, were carried out, see Figure C.5 and Figure C.6. The tensile strength was
increased by 25 % and the fracture energy doubled. Nevertheless, a simultaneously
increase of both properties by 25 % resulted in a satisfying load prediction, see Figure
C.7.
Stress, [MPa]
600 ....---...-------,-----.----.---....----,
Position No.
C.3

-- 124 of 176 --

Load, F [MPa]
-Specimen RV13
- 	Good bond conditions
- 	Other bond conditions
0 	5 	10 	15 	20 	25 	30
Deformation, 8 [mm]
Figure C.4 	Comparison of test and FE-analyses using different bond conditions and
"normal" material properties for specimen RV13.
Load, F [MPa]
-Test specimen RV13
- 	Normal fracture energy
- 	Doubled fracture energy
100 ~-----+---+---+---1 ~ 	F8 	f
50 -H l '---+----+------+-- 	-+-- 	-+---l 	~~
0 -t-----t---+----+----+----+------1
0 	5 	10 	15 	20 	25 	30
Deformation, 8 [mm]
Figure C.5 	Comparison of load-deformation relations using normal and doubled
fracture energy for "good" bond conditions.
C.4

-- 125 of 176 --

Load, F [MPa]
300 -.----------r------,-------,
0 -f------+------+--------f
-Normal tensile strength
- 	Increased tensile strength
(25 %)
-Test specimen RV13
0 	10 	20 	30
Deformation, ö [mm]
Figure C.6 	Comparison load-deformation relations using normal tensile strength and
high tensile strength for good bond conditions.
Load, F [MPa]
300 -,-------,----,----.-------,---,----..
- 	Normal material properties
- 	Increased material properties
-Test specimen RV13
F
0 ------lr------t----+---t----+---1
0 	5 	10 	15 	20 	25 	30
Deformation, 8 (mm]
Figure C. 7 	Comparison 	of 	load-deformation 	relation 	using 	"normal" 	material
properties 	and 	"increased" 	material 	properties 	for 	"good" 	bond
conditions.
C.5

-- 126 of 176 --

The comparison of the tensile stresses in the reinforcement for the analyses with
"normal" and "increased" material properties is shown in Figure C.8. The tensile
strength and the fracture energy of the concrete have a very small influence on the
magnitude of the tensile stresses.
Stress, [MPa]
---
Il
• "'~
"
i-. - - --
~ t-,..._ ......,
~
)
	-~ 	'
.... - -------i- - - -• -- --- --
~
~
'--.~,___
-.......'> 	Il> , , :g 	1p 	1lJ 	J 1.
600 _,.... Increased properties
F=165 kN, d=6 mm
500 -tr-- Normal properties
F=161, d=6 mm
400 -Test specimen RV13
F=164 kN, d=7 mm300 - 	• •Yield limit (537 MPa)
200
100
0
4
-100 Position No.
Figure C.8 	Comparison of tensile stresses of test and FE-analyses using "normal"
and "increased" material properties for "good" bond conditions.
C.1.3 	Specimen RV15
For specimen RV15 the bond conditions and the fracture energy were varied. The
comparison of the load-deformation relation for "good" and "other" bond conditions are
shown in Figure C.9. The fracture energy was doubled, see Figure C.10. Due to the
higher fracture energy yielding of the reinforcement was 	obtained. 	However, the
responds of the specimen became stiffer, since the change from uncracked to cracked
state was delayed. Again, a simultaneous increase of fracture energy and tensile strength
by 25 percent was used and compared to the test results and the analysis with normal
material properties, see Figure C.11. Yielding of the reinforcement and a ductile post
peak behaviour was obtained.
C.6

-- 127 of 176 --

50
Load, F [MPa]
300 -,----,----,----,-----,-----,-----, - 	- 	- 	- 	- 	- 	--~
-Test specimen RV15
- 	Good bond conditions
250 +------+--+-----:~;;;;;;;;;.....~-~~._,,
0 -----+------1-----4--------1------+----1
- 	Other bond conditions
F
0 	5 	10 	15 	20 	25 	30
Deformation, ö [mm]
Figure C.9 	Comparison of the load-deformation relations using "good" and "other"
bond conditions for "normal" material properties.
Load, F [MPa]
300 -r------,------.-----.-----, ~--------~
-Specimen RV15
-Normal fracture energy
- 	Doubled fracture e ne rgy
F
O-+-----t------1----+------1
0 	5 	10 	15 	20
Deformation, 8 [mm]
Figure C.10 	Comparison 	of 	the 	load-deformation 	relations 	using
"doubled" fracture energy for "good" bond conditions.
"normal" 	and
C.7

-- 128 of 176 --

Load, F [MPa]
- 	Normal properties
- 	Increased properties
-Test specimen RV15
0 	5 	10 	15 	20 	25 	30
Deformation, ö [mm]
Figure C.11 	Comparison of the load-deformation relations using "increased" and
"normal" material properties for "good" bond conditions.
C.2 	Crack propagation in FE-analyses
In the following sections the crack propagation for FE-analyses with increased material
properties of Section 4.4.2 are shown. The bond conditions were varied using "good"
and "other" bond conditions. The grey marked elements indicate a strain larger than
0.003. The deformation of the specimens is magnified with a factor of 10.
C.2.1 	Crack propagation of specimen RV12 with "good" bond
conditions
/ I 	.,I' 4'-m. I/ I/ I /1 /1/1/ 	VVi,
F= 108 kN, Ö= 4 mm
C.8

-- 129 of 176 --

F= 154kN, ö=6mm
l
F= 199 kN, ö= 10 mm
F= 249 kN, o= 13 mm
C.2.2 	Crack propagation of specimen RV12 with "other" bond
conditions
.-v [ ,".llJ ~(.J :.i f ;'.'~IL V{_ {..,".
' "'- 	.:, ~ 	--'
~ ~	
u 	D ,.._,,_,.~
'rl ,- --k'h
.... ~...,• 	•
I"' 	• 	~	
~"" -i,: IU
~
HI<: 	"'	J;fo, ~!LI< 	..,
"'
F= 154 kN, ö= 7 mm
C.9

-- 130 of 176 --

..j
'
'
j 	.l	'
R.! J
..J. .I
,. 	r-~~~I'-, ~~~ i::	-Jl~ 	~ "- 	HI=
K	.läii r- .Jfr. 	1'T'- ~ I.F'.
~wl~ t<,,
.... 	...
~
,,_ 	" 	e-l	-1,
"'[..;>Il:	- 	• ~ 	'!° i\' ~.lf'.. :-l
t-- :::..,.~~\,(:i, ~	
jμc., 	'7'	... - 	f < 	-~c--- 	IJ
	..,,_. 	~~	
D ~,~ 	...
F:: 198, ö= 10 mm
F:: 154 kN, ö= 16 mm
C.10

-- 131 of 176 --

C.2.3 	Crack propagation of Specimen RV13 with "good" bond
conditions
I\~~ IV~ ./\ r\/\ "'V 	I\
"' 	~I 	_,.,_ 	n, 	\7r,
	. V 	"Il;: ~ le 	t:l<
"' 	" ✓ 1,·, V ",,.
~k ~~ ... ~ ~ 	.,, ,,~	,,
"	l5l 1) 	'.I
~~'\	...., ~ ';JL 	J,,
R! ~~ ~r-,.,,. ,...,.._
V' " 	..... 	" -.1 	J;
F= 120kN, Ö= 3 mm
F= 165 kN, Ö= 5 mm
I I'\ J\d' 	J\J' I\ til\J' /\I l\k, J' 	1\1'\"'	• 	,..-.. "v
	H1 	/I
	*I,,
	·~ 	~	,_ M 	.I 	.,, 	•v,,. 	r\,; ~ 	'"-~
	-.:
M~< \ 	I,' 	"- 	j 	~
\/ 	A
r--" '."., 2
~- 	~ 1'l5i~t	~ 	171 	~ 	"" 	~
1 	1 	I 	I 	I
F= 217 kN, Ö= 8
F= 262 kN, Ö= 11 mm
C.11

-- 132 of 176 --

C.2.4 	Crack propagation of Specimen RV13 with "other" bond
conditions
·- 	N' j\,JI_ 	'/\ n '\	' \J\j'\l 'U 'I' 	/\/\f\l\ 1\1\'I
~-.v ' V ..,u .,v, -
• , ,, 	,..,
'"'--' 	'" 	~ 	,,, 	i::,	~ Vit!'
tl)(z ""'v Yl"~ ~ 17
	.. ,., 	D< Il
~	:;.~~R 	')2v. "''-' '	~,
I .>"- ~ I', 	,.,. ""	N 1/1 ,.I[ 	-" V'1 '1 	<AJ/
F= 113 kN, ö= 3 mm
-•l'J \J' I\J\ I\JI I\ l\l\ /\N"/' 	I\"
I D~
~~ ,, 	I'	
~J,,
" -Il
l~it
~~ -.".... ~ (' 	.;·
c7 :, r7 0
t.K [; 	.Dit 	/ .v I;> 	,, 	J,,
	~ Vl' 	" 	1' Al.::'.	I<. 	V 	~ 	~~ 8 	,,,,IL~
I,'
'' 	'I\
~ [;) ;' 	/l'w ,,,,, .;s : / 1/\f/	V~ V Li
F= 151 kN, ö= 5 mm
F= 255 kN, ö= 11 mm
C.12

-- 133 of 176 --

C.2.5 	Crack propagation of specimen RV15 with "good" bond
conditions
ID
. ,
F= 125 kN, Ö= 4 mm
- 	-·-·	...
-
F= 158 kN, Ö= 6 mm
I 	I 	I 	I
I I 	I
I 	I 	I 	i_ l
'I g •1
... ,
. ,
-	- ·	I
I
F= 239 kN, Ö= 12 mm
I 	I 	I
I 	I 	I 	I 	I
I 	I
I
I 	I 	I 	I
I
•
I
1-
I 	I	
I 	I 	I 	I
-- - I
-1 -I
F= 263 kN, Ö= 18.4 mm
C.13

-- 134 of 176 --

F:: 258 kN, ö:: 26.1 nun
C.14

-- 135 of 176 --

C.3 	lnput files for DIANA
C.3.1 	Data file
In the data file the finite element mesh is defined. Furthermore, the material properties
and the acting loads are introduced.
'COORDINATES'
In this section the position of the nodes is defined. The nodes of the truss elements have
the same co-ordinates as nodes of the concrete elements at this position .
1 	. OOOOOE+OO 3.20000E-02 	.OOOOOE+OO
2 	5.00000E-02 3.20000E-02 	.OOOOOE+OO
3 	l.OOOOOE-01 3.20000E-02 	.OOOOOE+OO
4 	l.SOOOOE-01 3.20000E-02 	.OOOOOE+OO
5 	2.00000E-01 3.20000E-02 	.OOOOOE+OO
1103 1.54100E+OO 4.78100E-02 	.OOOOOE+OO
1104 1.56946E+OO 3.60200E-02 	.OOOOOE+OO
2048 l.60000E+OO 3.20000E-02 	.OOOOOE+OO
2093 	l.60000E+OO 2.68000E-01 	.OOOOOE+OO
'DIRECTIONS'
General directions are specified. With the TR option for example (TRl, 	TR2, 	TR3) it is
referred to the defined directions.
1 	1.000000E+OO 	.OOOOOOE+OO 	.OOOOOOE+OO
2 	.OOOOOOE+OO 1.000000E+OO 	.OOOOOOE+OO
3 	.OOOOOOE+OO 	.OOOOOOE+OO 1.000000E+OO
'ELEMENTS'
CONNECT
Four different element types were used in this exarnple file. In the Section CONNECT the
nodes of the elements are specified.
2-node truss elements (reinforcement):
1 	L2TRU 	1001 1002
2 	L2TRU 	1002 1003
3 	L2TRU 	1003 1004
4 	L2TRU 	1004 1005
5 	L2TRU 	1005 1006
4-node plane stress elements (concrete):
104 	Q8MEM 	2 106 107 3
105 	Q8MEM 	105 106 2 1
106 	Q8MEM 	119 118 113 112
C.15

-- 136 of 176 --

107 	Q8MEM 	118 117 114 113
108 	Q8MEM 	117 116 115 114
3-node plane stress element (concrete in the refined mid-section)
308 	T6MEM 	439 332 384
309 	T6MEM 	390 377 338
310 	T6MEM 	440 327 378
311 	T6MEM 	459 144 378
312 	T6MEM 	451 95 90
2-node interface element (bond)
1001 L8IF 	1001 1002 1 2
1002 L8IF 	1002 1003 2 3
1003 L8IF 	1003 1004 3 4
1004 L8IF 	1004 1005 4 5
1005 L8IF 	1005 1006 5 6
MATERI
Here, the different materials are allocated to the elements.
/ 	104-846 / 	1
/ 	1-103 	/ 	11
/ 	1001-1103 	/ 	101
GEOMET
Here, the cross-sectional geometry is allocated
/ 	104-846 / 	1
/ 	1-103 	/ 	11
I 1001-1103 	I 101
DATA
Two different crack-bandwidths were defined. One for the refined mesh in mid-section
and one for the remaining part.
/ 	104-257 	/ 	1
/ 	258-846 	/ 	2
'MATERIAL'
In material 1 the properties of the concrete are defined. The tensile strength TENSTR and
the fracture energy GFl were increased by 25 %. A multi-linear compressive curve
coMCRV MULTNL based on the results from the material tests was used.
1 	DENSIT 2.4E+03
TOTCRK ROTATE
POISON 0.2
YOUNG 	2.55E+10
TENSTR 2.86E+6
GFl 	146.9
COMSTR 28.14E+6
C.16

-- 137 of 176 --

COMCRV MULTLN
COMPAR 0.0 	0.0
-1. 71E+6 	-0.067E-3
-7.18E+6 	-0.258E-3
-12 . 42E+6 	-0.450E-3
-16.90E+6 	-0.641E-3
-19.94E+6 	-0. 833E-3
-22.37E+6 	-1.024E-3
-24.04E+6 	-1. 215E-3
-25.29E+6 	-1. 407E-3
-26.66E+6 	-1.694E-3
-27.26E+6 	-1.885E-3
-27.61E+6 	-2. 077E-3
-27. 91E+6 	-2.268E-3
-28.14E+6 	-2.555E-3
-27.53E+6 	-7.845E-3
-22.87E+6 	-18.44E-3
-14.07E+6 	-29.03E-3
-3.47E+6 	-54.30E-3
-0.93E+6 	-114. 3E-3
-0.1E2 	-5E+5
TENCRV HORDYK
The material properties and the constitutive relation of the reinforcement are defined as
material number 11. The values were obtained from the material tests. Von Mises yield
criterion YIELD VMISES was combined with a strain hardening law HARDEN STRAIN.
11 	YOUNG 	1. 99E+ll
DENSIT 7.8E+3
YIELD 	VMISES
YLDVAL 510E+6
HARDEN STRAIN
HARDIA 510E+6 o.o
537E+6 0.00066
537E+6 0.02419
597E+6 0.04739
619E+6 0.0674
635E+6 0.0874
635E+6 0.1073
635E+6 	0.127
629E+6 0.152
0.1E+6 0.155
1 	1E6
For the bond behaviour the relations according to CEB-FIP Model Code, CEB (1993)
were used. In this analysis unconfined concrete and "other" bond conditions were
assumed.
101 	DSTIF 	3.48E+l2 3.48E+10
BONDSL 3
SLPVAL 0.0 	0.0
1.74E+6 0.05E-3
2.29E+6 O.lE-3
2.69E+6 0.15E-3
3.02E+6 0.2E-3
3.30E+6 0.25E-3
C.17

-- 138 of 176 --

3.55E+6 0. 3E-3
3.78E+6 0.35E-3
3.99E+6 0.4E-3
4.18E+6 0.45E-3
4.36E+6 	0.5E-3
4.53E+6 0.55E-3
4.69E+6 0.6E-3
0.70E+6 2.5E-3
0.70E+6 100E+10
'GEOMETRY'
1 	THICK 	0.600
11 	CROSSE 1.407E-3
101 	CONFIG BONDSL
THICK 	0.352
'DATA'
1 	CRACKB 0.05 	(for coarse mesh)
2 	CRACKB 0.02 	(for refined mesh)
'SUPPORTS'
On node 267 the deformations were prescribed. The nodes in mid sections were
constrained in x-direction. In this way the symmetry was considered.
120 	TR 2
267 	TR 2
/ 	461 93 	491 489 488 	487 	486 	485 	484 	483 	48 268 267 	/
TR 1
'TYINGS'
The semi-discretised nodes at the interface of the coarse and the refined mesh are tied to
their neighboured nodes using a linear deformation relation.
BETWEE TR 1 2
298 	71 146
297 	146 145
296 	145 144
295 	144 143
294 	143 23
269 	23 142
Additionally, the interaction of the reinforcement nodes on the symmetry line was
considered.
FIX 	TR 1
2093 	1093 TR 1 -1
2048 1048 TR 1 -1
'LOADS'
Here the self-weight and the size of one displacement step were defined.
C.18

-- 139 of 176 --

The prescribed deformation starts at the initial deformation due to self-weight. In this
way the system was statically determined
CASE 1
WEIGHT
2 	-9.81
CASE 2
DEFORM
267 	TR 2 	-1.42E-4
CASE 3
DEFORM
267 	TR 2 	0.lE-3
COMBIN
1 	1 1.0 2 1.0 3 0.0
2 	1 0.0 2 0.0 3 1.0
'END'
C.3.2 	Command-file for linear analysis
With this filea preliminary linear analysis is performed. Furthermore, the Fll..,OS-file is
initiated and the data of the DATA-file processed. The MA=200ooo 	specifies the
maximum size of the Fll..,OS-file.
*FILOS
INITIALIZE MA=200000
*INPUT
*LINSTA
*END
*END
C.3.3 	Command file for initiation of the non-linear analysis
Apart from other information the different material models are initiated (Plasticity
PLASTI. N, Cracking TOTCRK. s, Interface INTERF). Furthermore, the load combinations
are defined.
*NONLIN
INITIA
ANALYS PHYSIC
USE
PLASTI.N
TOTCRK.S
INTERF
END USE
OPTION 	TANGEN
END INITIA
LOADIN
LOAD ( 1 ) : 	( 1) 	1. 0 	( 2 ) 	. 0 /
LOAD ( 2 ) : 	( 1) 	. 0 	( 2 ) 	1. 0 /
END LOADIN
*END
C.19

-- 140 of 176 --

C.3.4 	Command file for the non-linear analysis
*NONLIN
In the SELECT part the required output is specified. In this case the externa! post
processor Femview, Femsys (1998), was used.
SELECT
STEPS 1-300(10) 	/
NODES ALL/
ELEMEN ALL/
END ELEMEN
REINFO NONE /
END REINFO
END SELECT
OUTPUT FEMVIEW NONLIN BINARY FI="RV1212"
STRAIN GLOBAL
STRESS GLOBAL
STRAIN PRINCI
STRESS PRINCI
DISPLA TOTAL GLOBAL
FORCE RESIDU GLOBAL
END OUTPUT
In the "execute" command block the load steps carried out are defined. In this case first
the responds of the specimen due to self-weight was determined LOAD ( 1 l and then the
responds due to the displacement prescribed LOAD ( 2 ) .
EXECUT LOAD(l) 	STEPS
SIZE.L 1(1) 	ND=6 GM=0 	/
PERFOR SECANS BFGS MI=20
NORM ENERGY CONTINUE CO=0.000100
END EXECUT
EXECUT LOAD(2) 	STEPS
SIZE.L 1.0(250) 	ND=6 GM=0 	/
PERFOR SECANS BFGS MI=30
NORM ENERGY CONTINUE CO=0.000100
END EXECUT
*END
C.20

-- 141 of 176 --



-- 142 of 176 --

Appendix D
D 	Relation of steel stress and radial pressure acting on the concrete 	D.1
D.1 	Resistance along the straight part 	D.2
D.2 	Resistance along the curved part 	D.3
D.2.1 	Relation of steel stress to radial pressure 	D.3
D.2.2 	Varying steel stress under consideration of bond and friction 	D.4
D.3 	Results of the FE-analyses conceming the radial pressure 	D.5

-- 143 of 176 --

D Relation of steel stress and radial pressure acting on
the concrete
The 	detailing 	in 	form 	of a reinforcement 	loop 	splice 	is 	influenced by 	several
parameters, which complicate the analyses. To illustrate the main relation of steel
stress to radial pressure a model with several simplifying assumptions is introduced.
The main assumptions are:
• 	The bond stress and the friction coefficient are constant along the loop.
• 	The relation P = Fs , as derived in Section E.2.1, is valid for varying steel force.
r
• 	The steel stress is not influenced by a torsional moment.
• 	The contact area is assumed to be plane, as shown in Figure D.4.
• 	The loop splice is subjected by pure bending.
X=Xo	x=x1
M
2r
Figure D.1 	Geometry and acting forces on the splice zone.
The loop can be divided into a straight part and a curved part. In the following
sections the two parts are treated separately.
D.1

-- 144 of 176 --

D.1 	Resistance along the straight part
0s+d0s
dx	l 	lIl 	Il
Figure D.2 	Acting stresses in longitudinal direction at the straight part, with 1' as
the bond stress.
Equilibrium:
(D.1)
with
As= sectional area of the reinforcement bar,
Us = perimeter of the bar
1' = bond stress and
Os= steel stress.
Differential equation:
das 	i-•Us
--=---
dx 	As
Solution for 1' = constant on a length x1 - x0 , see Figure D. l.
(D.2)
(D.3)
with
xo=O
D.2

-- 145 of 176 --

D.2 	Resistance along the curved part
D.2.1 	Relation of steel stress to radial pressure
Figure D.3 	Pressure along the curved part.
Equilibrium in vertical direction:
"' (D.4)	2•F, ·•in(~)= );-cos(q,)-r-dq,
2
(D.5)
(D.6)
with
and
P=P•·r/J
with p• as the simplified pressure distribution according to Figure D.4.
D.3

-- 146 of 176 --

►
Real pressure
distribution
Simplified pressure
distribution
Figure D.4 	Simplification of radial pressure distribution.
D.2.2 	Varying steel stress under consideration of bond and friction
The stress in the reinforcement is influenced by the bond stress along the loop and an
additional friction resistance caused by the radial pressure. Both friction, with μ as
friction coefficient, and bond -rare activated by a certain slip of the reinforcement bar.
ds
Figure D.5 	Acting stresses along the curved part.
Geometry:
ds.,, r •d(() 	(D.7)
D.4

-- 147 of 176 --

Equilibrium:
(D.8)
Friction and bond:
(D.9)
with
μ = friction coefficient
F
dP =r •drp · P =r •drp. _s
r (D.10)
(D.11)
(D.12)
Differential equation:
dFs =-{μ-F +T·U 	·r) 	(D.13)drp 	s 	s
Solution for a length ,r • r :
F,,2 	1 	<p,2 =1r
(D.14)	I μ 	F 	' T TT 	dFS = - 	I drp
Frri 	• 	s • 	• ..., s • r 	<p"l =O
(D.15)
(D.16)
D.3 	Results of the FE-analyses concerning the radial
pressure
The theoretical considerations of the relation of steel stress to radial pressure are
based on many simplifications. In earlier test series conducted by Timm G. (1969) it
D.5

-- 148 of 176 --

was observed, that the anchorage along the curved part was less effective than
expected. The additional part of the bond resistance was not activated. One of the
conclusions was, that the radial pressure and therewith the friction is not activated
until a certain slip o~ the reinforcement.
To investigate this phenomenon further the relation of steel stress to radial pressure
versus the deformation of the specimen is shown for three finite elements at the
beginning of the curvature, see Figure D.6 to Figure D.9. The expected value for the
relation according to the theoretical model can be calculated by equation D.17 to
(D.17)
2
1.8
1.6
1.4
1.2
1
0.8
0.6
0.4
0.2
0
0 	2 	4 	6 	8 	10 	12 	14 	16 	18
Deformation, ö [mm] '-._
I 	\ 	I 	-Element 1
i ' I 	--Element2
--
~ 	1 I
I 	Deformation _	-- 	- -Element3
I 	\ I
I 	at ma ximum 	• • • Expected relation
-- 	-
-- 	-
- -·
-- -
- - ,
-} --- .. -. ----
\ I
Io ad	I 	I
~ 	-'- I
/ -- 	' I
.V ' '
~
~ I
I\. 	I
f 	'I
L ·'- 	IA 	...
" - 	..- 	I
-- -- ---- --. 	-·- -- - --- ~ ...
I
Figure D.6 	Relation of steel stress to radial pressure versus deformation for
specimen RV12 using "good" bond conditions.
D.6

-- 149 of 176 --

Figure D.7 	Relation of steel stress to radial pressure versus deformation for
specimen RV12 using "other" bond conditions.
Fs/P [m]
2 ....-----.----.-----,---,-----.----,----.----.------, - 	--- 	--- 	~
-Elementl
1.8 -l----- 	-+---f---+-- 	1-----1--'L...j-
-Element2
1.6 -l------+---f-- 	-+- 	- 	1-----1--'L...j-
--Element3
1.4 -+--- 	--+-------t-- 	-t--t--- 	--t--''--t-- 	----t--- 	--r----i • • • •Expected relation
1.2 -1------ 	-+---f-- 	---+- 	- 	l--- 	-l---''-l---+---l---l
1 , 	- 	i-------r------c~ 	~,
0.8 -1------ 	-!--- 	"""-,,,~ 	- 	----+-- 	-+--ll "--'-
0.6 -+-----+--#--,~ 	- 	---l--f-- 	+--...J'--+--
0.4 +-~~r:x=-+--+----t----'.V~'1,,J\,,~ftft~ ~ftffilR
0.2 -i--.~-t----r-------t-------t---t- 	- 	1-'-"'
0 - 	--t----+---1---1---+---''-+---+----l----t
0 	2 	4 	6 	8 	10 	12 	14 	16 	18
Deformation, ö [mm]
Figure D.8 	Relation of steel stress to radial pressure versus deformation for
specimen RV13 using "good" bond conditions.
2
1.8
1.6
1.4
1.2
1
0.8
0.6
0.4
0.2
0
2 	4 	6 	8 	10 	12 	14 	16 	18
Deformation, ö [mm]
--
,,
f
0
_,L
I, ~,r 	~....___
- ----.. --.
•
I
.
I
•
I
I
Deformation j___
at maximum j_
load 	I
I
I
I
~ I
I
lA. 	I
. -.. ----- . --- -----. -- --\, -I
-Element 1
-Element2
-Element3
• • • Expected relation
D.7

-- 150 of 176 --

Fs/P, [m]
2
1.8
1.6
1.4
1.2
1
0.8
0.6
0.4
0.2
0
+-- 	-+-------1,----+----
Deformation
• 	at maximum -
--+-----4---1--------'-- load 	-
-Elementl
-Element2
-- Element3
• • • · Expected relation
0 	2 	4 	6 	8 	10 	12 	14 	16 	18
Deformation, 8 [mm]
Figure D.9 	Relation of steel stress to radial pressure versus deformation for
specimen RV13 using "other" bond conditions.
The results in Figure D.6 to Figure D.9 show that the bond conditions influence the
relation of steel stress to radial pressure. With good bond conditions the radial
pressure starts to act later. Furthermore, in combination with a straight splice length
the resulting radial pressure is considerably smaller than expected.
D.8

-- 151 of 176 --



-- 152 of 176 --

Appendix E
E 	Test results 	E.1
E.l 	Results of the strain gauges 	E.l
E.1.1 	Strain gauges of specimen RV12 	E.l
E.1.2 	Strain gauges of specimen RV13 	E.7
E.1.3 	Strain gauges of specimen RV14 	E.10
E.1.4 	Strain gauges of specimen RV15 	E.12
E.2 	Stresses at the position of the strain gauges 	E.14
E.2.1 	Stresses of specimen RV12 	E.15
E.2.2 	Stresses of specimen RV13 	E.18
E.2.3 	Stresses of specimen RV14 	E.20
E.2.4 	Stresses of specimen RV15 	E.21

-- 153 of 176 --

3
E Test results
E.1 	Results of the strain gauges
The results of the experiments are discussed in Section 3. There, some of the averages
of the stresses in the reinforcement are shown, divided into outer and middle loops.
Often, the results of the strain gauges differ even in the same part of the structure.
Therefore, 	the strain-deformation relations of all 	strain gauges 	are shown in the
following Figures F.l-F .28. The results of both sides of the section are compared, so
that the significance of the average of the stresses used in Section 3 can be judged. The
unloading beyond yielding is omitted, as the unloading behaviour of the strain gauges
after a distinct yield phase does not seem to be reasonable.
The numbering of the strain gauges consist of the number of the loop and the number of
the strain gauge of the loop. For instance, gauge number 141 refers to the gauge on
position 1 of loop 14.
E.1.1 	Strain gauges of specimen RV12
5 --------,------,-----..------..,......-, - 	Strain gauge 11
--Strain gauge 141
- 	Strain gauge 21
-·- 	Strain gauge 131
- 	- Yield limit, (3.25)	//'
to C) C) 	c. ce ce ce
2 t-----J7~~----~./;;;;;;;;,.i~:..___- 	t---1 1 2 	1314
C) 	., C) 	c. ce c. 	ce
3
- 1 ....____ _._ ___ ___._ ___ ____......_ ___....______,
Deformation, 8 [mm]
Figure E.l 	Strain-deformation relation of gauges 11, 141, 21 and 131 of specimen
RV12.
E.l

-- 154 of 176 --

----- ----- ----- 	---- ---
Strain, [1 ff3]
- 	Strain gauge 12
-- Strain gauge 142
- 	Strain gauge 22
- 	-Yield limit, (3.25)
1 2 	1314
C) «> C) <» 1(9 <» 1(9
Figure E.2 	Strain-deformation relation of gauges 12, 142 and 22 of specimen RV12.
Strain, [l ff3]
6
5
4
3
2
1
0
-1
-2
,I
i----- --rL 	----- ----- --·
I/
~V
' ""'---
l.a/ 	,~ ~
rn "-.J 	10 	:o 	30 	40
Deformation, o[mm]
6
-v-.,;..
- ,-J~!;P"
-- Strain gauge 143
- 	Strain gauge 235 --- - Strain gauge 133
4 	- 	- 	Yield limit, (3.25)
IO IIO IIO 	OI OII OII OII
3 2 	1314
2 	IIO 	«I 	IIO 	OI OII OI 	OII
1
0
0 	10 	20 	30 	40
Deformation, o[mm]
Figure E.3 	Strain-deformation relation of gauges 	143, 23 	and 	133 of specimen
RV12.
E.2

-- 155 of 176 --

6 -.-------.-----.-------,------,..----, ·~--------,
5 -+------t-----t---- 	---+-------+------1
4 - 	-----+--- 	- 	-1-------1--- 	----+----l
3 - 	-----+- 	---4------+--1--- 	--------l
1 2 	13 14
eoe:ieooe011oe011
Deformation, 8[mm]
- 	Strain gauge 14
-- Strain gauge 144
- 	Strain gauge 24
-· ·- Strain gauge 134
- 	-Yield lirnit, (3 .25)
Figure E.4 	Strain-deformation relation of gauges 14, 144, 24 and 134 of specimen
RV12.
5 -+------i------+----+-------+---1
4 -+-----------+- 	- 	--- 	--- 	-t---l
3 -+----------+----+-------+---I
- 	Strain gauge 15
-- Strain gauge 145
---- Strain gauge 25
- 	Strain gauge 135
- 	-Yield limi. t, (3.25)
1 2 	1314
Deformation, 8 [mm]
Figure E.5 	Strain-deformation relation of gauges 15, 145, 25 and 135 of specimen
RV12.
E.3

-- 156 of 176 --

Strain, [ 10-3]
6 ....--------.------,-------.----,---,
0 	10 	20 	30 	40
Deformation, 8 [mm]
- 	Strain gauge 31
--Strain gauge 121
- 	Strain gauge 41
-- Strain gauge 111
- 	- Yield limit, (3.25)
«> «> «> 	<» <» oe <»
Figure E.6 	Strain-deformation relation of strain gauges 31, 121, 41 and 111.
0 	10 	20 	30 	40
Deformation, ö [mm]
- 	Strain gauge 32
-- Strain gauge 122
··-·--·- Strain gauge 112
- 	-Yield limt, (3.25)
34 	11 	12
Figure E.7 	Strain-deformation relation of gauges 	32, 	122 and 	112 of specimen
RV12.
E.4

-- 157 of 176 --

6
Strain, [1ff3]
- 	Strain gauge 51
-Strain gauge 101
- 	Strain gauge 61
_,............ Strain gauge 91
- 	- Yield lirnit, (3.25)
5 6 	910
5 /	i
4
---3
2
0 -+<----+-----~--~!-----+---'
0 	10 	20 	30 	40
Deformation, o[mm]
Figure E.8 	Strain-deformation relation of strain gauges 	51, 91, 61 	and 	101 	of
specimen RV12.
- 	Strain gauge 52
-- Strain gauge 102
- 	Strain gauge 62
--- Strain gauge 92	4 -+-- 	----+------llC.,---f------+-----1-- 	--1
- 	- Yield limit, (3.25)
5 6 	9 10
0 	10 	20 	30 	40
Deformation, ö [mm]
Figure E.9 	Strain-deformation relation of gauges 52, 102, 62 and 92 of specimen
RV12.
E.5

-- 158 of 176 --

6
Strain, [1ff3]
6
5
4
3
2
1
0
-- --- ----- ----- ----- - -
- 	-=---
I~
-
_,/ ,,...
0 	10 	20 	30 	40
Deformation, 8 [mm]
- 	Strain gauge 53
- 	Strain gauge 103
- 	Strain gauge 63
- 	Strain gauge 93
- 	- Yield liinit, (3.25)
e:> eo eo 	ce ()Il ()Il ()Il
5 6 	910
eo 	-, 	eo 	ce ()Il oe 	()Il
Figure E. 10 	Strain-deformation relation of gauges 53, 103, 63 and 93 of specimen
RV12.
Strain, [1 ff3]
-Strain gauge 54
5 	--Strain gauge 103
- 	Strain gauge 64
4 	- 	- Strain gauges 94
- 	- 	Yield Iimit, (3.25)
3
2 	5 6 	9 10
1
0
-1
Deformation, 8 [mm]
Figure E.11 	Strain-deformation relation of gauges 54, 104, 64 and 94 of specimen
RV12.
----- - ---- ~---- i------- ---
- 	-· ., ... 	-
~ ~ 	.
- 	-
0 	10 2P 30 	i::io
E.6

-- 159 of 176 --

Strain, [ 1ff 3]
5
.,_.. ____ ---------- i------ 1,- - 	-
Ij
I~ 	10 	20 	30 	.::b
- 	Strain gauge 55
-- Strain gauge 105
4 - 	Strain gauge 95
- 	- Yield lirnit, (3.25)
3
5 	9 10	2
1
0
-1
Deformation, ö [mm]
Figure E.12 	Strain-deformation relation of gauges 55, 105 and 95 of specimen RV12.
E.1.2 	Strain gauges of specimen RV13
10 	20 	30 	40
- 	Strain gauge 11
-- Strain gauge 141
- 	Strain gauge 21
-- Strain gauge 131
- 	- 	Yield limit, (3.25)
90«l900eC.0eC.
1 2 	13 14
eo eo eo 	oe oe oe oe
Deformation, ö [mm]
Figure E.13 	Strain-deformation relation of gauges 11, 141, 21 and 131 of specimen
RV13.
E.7
0

-- 160 of 176 --

0
Strain, [ 10-3]
5
4
3
2
1
0
--- 	---- 	----
10 	20 	30 	40
Deformation, 8 [mm]
-Strain gauge 12
--Strain gauge 142
-Strain gauge 22
-- Strain gauge 132
- 	- Yield lirnit, (3. 25)
ac:, ., ac> oe 09 oe oe
1 2 	13 14
., ., ., 	oe oe oe oe
2
Figure E.14 	Strain-deformation relation of gauges 12, 142, 22 and 132 of specimen
RV13 .
Strain, [ 10-3]
-Strain gauge 13
-- Strain gauge 143
4 -+-------+-----+---------.---- 	- 	+------l --- 	Strain gauge 133
--- -- -- - - -- -- 	-- -- - 	-Yield limit, (3.25)
3 - 	- 	- 	- 	'	-t----+-----+---- 	--+-----1----1
ac> ., ac> oe 09 oe 09
1 	13 14
., ., eo 	oe oe oe oe
3
0 	10 	20 	30 	40
Deformation, 8 [mm]
Figure E.15 	Strain-deformation relation of gauges
RV13 .
13, 	143 and 	133 of specimen
E.8

-- 161 of 176 --

Strain, [ 10-3]
- 	Strain gauge 51
-- Strain gauge 101
- 	Strain gauge 61
- ·--- .. Strain gauge 91
- 	- Yield limit, (3.25)
5 	6 	9 10
IO IO 	IO 	Ot Ot Ot Ot
0 	10 	20 	30 	40
Deformation, ö [mm]
Figure E.16 	Strain-deformation relation of gauges 51, 101, 61 and 91 of specimen
RV13.
5 .....--------.------,.----~----..-----, r-- - 	--- 	- 	- 	---,
- 	Strain gauge 52
-- Strain gauge 102
4 -i------- 	----1- 	----- 	---+-- 	--l 	- 	Strain gauge 62
·- ---- Strain gauge 92
3-t------,--- 	- 	-j-----t--- 	---t-----t 	- 	- Yield lim.it, (3.25)
a'.> IO a'.> Ot ~ Ot ~
5 	6 	9 10
10 IO IO Ot Ot Ot Ot
2
0 -¼=11-----+-------11----4-----+---l
0 	10 	20 	30 	40
Deformation, ö [mm]
Figure E.17 	Strain-deformation relation of gauges 52, 102, 62 and 92 of specimen
RV13.
E.9

-- 162 of 176 --

Strain, [ 10-3]
5 --.---- 	----.-----..----~------,.---,
4 -+---- 	--+----+-------- 	----+- 	--I
2 -+-- 	- 	- 	--+-----+---- 	- 	--- 	----+---I
1 -+-- 	----+- 	-1----+---------+--- 	----+- 	--t
0 -FJ,UJ----+-----+------+------+----'
0 	10 	20 	30 	40
-Strain gauge 53
-- Strain gauge 103
··· -- -- Strain gauge 93
- 	- 	Yield limit, (3.25)
eo eo «> oe c» oe c»
5 	9 10
eo eo eo 	oe oe oe oe
3
Deformation, 8 [mm]
Figure E.18 	Strain-deformation relation of gauges 53, 103 and 93 of specimen RV13 .
E.1.3 	Strain gauges of specimen RV14
5 --.--------,------,-----,------r---,
-- Strain gauge 11
-- Strain gauge 281
4 -+-- 	- 	--+------+--+---+------+---I - 	Strain gauge 21
- 	Strain gauge 271
- 	- Yield limit, (3.25)
llllO IO 10 IOIO!ll .. m mm mm ..
1 2 	27 28
IOIO IO IOIOIOIO mm mm Clt mm
0 	10 	20 	30 	40
Deformation, 8 [mm]
Figure E.19 	Strain-deformation relation of gauges 11, 281, 21 and 271 of specimen
RV14.
E.10

-- 163 of 176 --

5 -r-------,-----.--------.------,----, 	- 	Strain gauge 12
-- Strain gauge 282
- 	Strain gauge 22
- 	- 	Yield limit, (3.25)
ia>IO 10 IO IOIOill CIIOI OI OI OI OI CII
1 2 	28
IOIOIOIOIOIOIO OIOIC.OI C. OIC.
0 	10 	20 	30 	40
Deformation, 8 [mm]
Figure E.20 	Strain-deformation relation of gauges 12,282 and 22 of specimen RV14.
0 	20 	40 	60
Deformation, 8 [mm]
- 	Strain gauge 131
-- Strain gauge 161
-Strain gauge 141
- 	- Strain gauge 151
- 	-Yield limit, (3.25)
ia>IO IOIOIOIOlll CIIOI mm C. OIC.
13 14 15 16
10IO 10 IO IOIOIO WC. W OI C. mm
Figure E.21 	Strain-deformation relation of gauges 131, 161, 141 and 151 of specimen
RV14.
E.11

-- 164 of 176 --

• 	• 	• 	• • 	• 	•
5 -.-------,,,--:-::--,--------r------...----, ~--------~
-Strain gauge 132
-- strain gauge 162
4 -+------iH-----+------+------+-------l
-Strain gauge 142
-Strain gauge 152
3 -+-----t:.,-------+------+------+-------l - 	- Yield liinit, (3.25)
13 14 15 16	t------t------+------+-------i
IDID ID ID IDIDID mm mm m mm
1 -1---- 1'-----------+-------!-------i
0 -+---------+------+----------'
0 	20 	40 	60
Deformation, 8 [mm]
Figure E.22 	Strain-deformation relation of gauges 132, 162, 142 and 152 of specimen
RV14.
E.1.4 	Strain gauges of specimen RV15
Strain, [ 1ff3]
6 -.---------,------..--------,------y--, ~-------~
- 	Strain gauge 21
5 -+-- 	-----1-------+--------+-----.,-----1 i - 	Strain gauge 61
2 -+------,1
- 	-Yield limit, (3.2 5)
2 	6
o ---------1--------------1--------1
0 	20 	40 	60 	80
Deformation, 8 [mm]
Figure E.23 	Strain-deformation relation of gauges 21 and 61 of specimen RV15.
E.12
2 - 	- 	-~--t-------+-------+---------1
: 	I

-- 165 of 176 --

• 	• 	• • • 	• 	•
Strain, [l 0-3]
6
5
4
3
2
1
0
-Strain gauge 22
- 	Strain gauge 62
- 	-Yield liinit, (3.25)
•.,•••m•
2 	6
2
0
0 	10 	20 	30 	40
Deformation, ö [mm]
Figure E.24 	Strain-deformation relation of gauges 22 and 62 of specimen RVlS.
Strain, [ 10-3]
-
-
- 	-
Strain gauge 23
Strain gauge 63
Yield litnit, (3 .25)
2 	6
• 	• 	• 	• • 	•
3
•
0 	10 	20 	30
----
40 	50
Deformation, ö [mm]
Figure E.25 	Strain-deformation relation of gauges 23 and 63 of specimen RV15.
6
5
4
---3
2
1
o -------------- ---
E.13

-- 166 of 176 --

----
• •
• • 	• 	• • 	• •
---- 	--- -
-Strain gauge 24
- 	Strain gauge 64
- 	-Yield limit, (3.25)
l,-'-'/
2
//1
/
•
2
• 	• 	• 	•
4
6
• 	•
0
0 	5 	10 	15 	20 	25 	30
Deformation, ö [mm]
Figure E.26 	Strain-deformation relation of gauges 24 and 64 of specimen RV15.
6
5 	'
4
1------	--- ~- 1----- ----3
-Strain gauge 25
- 	Strain gauge 65
- 	- Yield limit, (3.25)
I 	Il 	I 	Il 	I
2 	6
: : siI
0 	10 	20 	30 	40 	50 	60
Deformation, ö [mm]
Figure E.27 	Strain-deformation relation of gauges 25 and 65 of specimen RV15.
E.2 	Stresses at the position of the strain gauges
In Section 3 the stresses in some of the reinforcement loops are shown. The stress
outputs of all reinforcement loops with strain gauges provided are shown in this section.
6
5 -
4
..------ ---- --r-	~---3 	J
-
I/2
I1
V0
E.14

-- 167 of 176 --

E.2.1 	Stresses of specimen RV12
Stress, [MPa]
-F=41 kN, d=l mm	600 ~----r-------.--------,-------.
-F=61 kN, d=2.8 mm
500 4--- 	- 	- 	---+-----+---------l------1 	--o- F=152 kN, d=lO mm
......,_F=198 kN, d=16 mm
--6.- F= 197 kN, d=22.5 mm
- 	- •Yield limit (537 MPa)
«> e:> e:> 	ot ce ce ce
1 	14
«> IO «> 	ot ce ot OII
-100 .......____ __.__ ___ __,_ ___ ___._ ___ _.
Position No.
Figure E.28 	Average stress of loops 1 and 14 of specimen RV 12.
Stress, [MPa]
600 -,------r------,----""""T""----,
500 4-----+-----+----- 	-+---- 	-
400----- 	-+-- 	---+------+-- 	---
-200 ..._____ _._ ___ _._ ___ __,_ ___ ___,
Position No.
-F=41 kN, d=l mm
-F=61 kN, d=2.8 mm
--o- F=152 kN, d=lO mm
......,_ F=198 kN, d=16 mm
--6.-F=197 kN, d=22,5 mm
- 	- Yield limit (537 MPa)
IO IIO IIO 	09 OII OII IOII
2 	13
«> 	10 «> 	oe ce oe '°"
Figure E.29 	Average stress ofloops 2 and 13 of specimen RV12.
E.15

-- 168 of 176 --

Stress, [MPa]
600
,r- 	-
500
400
300
200
100
0
1 	2
Position No.
--- F==41 kN, d= 1 mm
-F=61.5 kN, d=2.8 mm
-o-F=l52 kN, d=lO mm
....,._F=198 kN, d=15.6 mm
--b.-F=197 kN, d=22.5 mm
- 	- •Yield lirnit (537 MPa)
3 	12
10 «> 10 	oe c. oe 	c.
Figure E.30 	Average stress ofloops 3 and 12 of specimen RV12.
--- F=41 kN, d=l mm
- 	F=61 kN, d=2.8 mm
-o- F=152 kN, d=lO mm
....,._ F=198 kN, d=15.7 mm
---tr--F=197 kN, d=22.5 mm
- 	- •Yield lirnit ( 537 MPa)
IO 	IO IIO 	09 C. C. C.
4 	11
600
500
400
300
200
100
0
Stress, [MPa]
2
Position No.
1 ,r
--'
1
"° 	«> 	"° 	oe c. oe 	c.
Figure E.31 	Average stress of loops 4 and 11 of specimen RV12.
E.16

-- 169 of 176 --

Figure E.32 	Average stress of loops 5 and 10 of specimen RV12.
Figure E.33 	Average stress of loops 6 and 9 of specimen RV12.
Stress, [MPa]
600 ~-------------- 	-~
Position No .
Stress, [MPa]
600 -r-------.--------,------,-------,
Position No.
_.,_F=41 kN, d=l mm
-F=61 kN, d=2.8 mm
--o-F=152 kN, d=lO mm
-F=l98 kN, d=l5.6 mm
--å-F=197 kN, d=22.5 mm
- 	• •Yield limit (537 MPa)
5 	10
-F=41 kN, d=l mm
-F=62 kN, d=2.8 mm
--o-f=153 kN, d=lO mm
_._F=198 kN, d=15.6 mm
--å-F=197 kN, d=22.5 mm
- 	• •Yield limit (5 37 MPa)
IO IIO IIO 	C9 C9 C9 C9
6 	9
110 e:> 110 	ce C9 ce 	C9
E.17

-- 170 of 176 --

E.2.2 	Stresses of specimen RV13
Stress, [MPa] ---F=43 kN, d=l mm
600 ~-------~----------. - 	F=65 kN, d=l.6 mm
--o-F=164 kN, d=6.6 mm
_..... F=262 kN, d=l2.5 mm
--t.- F=229 kN, d=14.1 mm
-x- F=253 kN, d=20 mm
- 	- •Yield limit (537 MPa)
0 --------------------t
l 	2 	3
Position No.
°" 	'°"	., 10 ., 	oe 	oe
1 	14
10 10 10 oe oe oe oe
2 	3
Figure E.34 	Average stress ofloops 1 and 14 of specimen RV13.
Stress, [MPa]
600 ~-----------------.
2 	3
Position No.
---F=43 kN, d=l mm
- 	F=65 kN, d=l.6 mm
--o-F=164 kN, d=6.6 mm
_.....F=262 kN, d=12.5 mm
--t.- F=230 kN, d=14 mm
-x-F=253 kN, d=20 mm
- 	- •Yield limit (537 MPa)
., ao ., 09 ce 09 ce
2 	13
IO IO IO 09 09 09 09
2 	3
FigureE.35 	Average stress ofloops 2 and 13 of specimen RV13.
E.18

-- 171 of 176 --

------
Stress, [MPa]
600 .......-----------.---------
-------- .. --500 ~...,-- 	- 	--=c....-.------~=-""------;
3	1 	2
......,_F=43 kN, d=l mm
_._ F=65 kN, d=l.6 mm
--o-F=163 kN, d=6.6 mm
_..,._ F=262 kN, d=12.5 mm
-t.- F=229 kN, d=14.1 mm
-x-F=252.57 kN, d=20 mm
- 	• •Yield limit 537 MPa)
«> 90 «> oe 09 oe 09
5 	10
90 90 90 oe oe oe oe
2 	3
Position No.
Figure E.36 	Average stress ofloops 5 and 10 of specimen RV13.
600
500
400
300
200
100
0
Stress, [MPa]
1 	2 	3
Position No.
......,_ F=43 kN, d=l mm
-F=65 kN, d=l.6 mm
--o-F=164 kN, d=6.6 mm
-+-F=262 kN, d=12.5 mm
-t.-F=230 kN, d=14.1 mm
-x-F=253 kN, d=20 mm
- 	• •Yield limit (537 MPa)
«> 90 «> oe 09 oe 09
6 	9
90 90 90 oe oe oe oe
2 	3
Figure E.37 	Average stress of loops 6 and 9 of specimen RV 13.
E.19

-- 172 of 176 --

-------------------------
------ --
E.2.3 	Stresses of specimen RV14
Stress, [MPa]
600 ~------------------,
500 - 	----------------------t
400 --+------- 	---------
~-300 ,b::-::.=:--==::-:-"""""""==============~
200 --t------------ -~ -...___.;;::---- 	--t
~-- .......... ,il-
100 -="""""'="""""""""""""""------------
0-+--------------------t
1 	2
Position No.
_....F=98 kN, d=l mm
-F=160kN, d=3.5 mm
-o- F=325 kN, d=l0.5 mm
--+-F=438 kN, d=l8 mm
-t.-F=441 kN, d=28.8 mm
- 	- •Yield limit (537 MPa)
., '° '° '° '° '° ., 	0t 	0t (8	(8 0t 0t 	0t
1 	28
'°'°'°'°'°'°'° OtOtOtOt 	t90t	0t
Figure E.38 	Average stress of loops 1 and 28 of specimen RV14.
Stress, [MPa]
600 ~----------------,
500 -t-------- 	-----------1
200 ------ 	-------- 	-----
100 !=~========================!
_.... F=98 kN, d=2 mm
-F=160 kN, d=7 mm
-o-F=325 kN, d=21 mm
--+-F=438 kN, d=36 mm
- 	-F=441 kN, d=58 mm
- 	- •Yield limit (537 MPa)
., '° '° '° '° '° ., (8 0t 	0t 	t9	0t 	t9 	(8
2 	27
'° '° '° '° '° '° '° 	0t 	0t	0t 0t 	t9 	t9 0t
0 ------------------1
1 	2
Position No.
Figure E.39 	Average stress of loops 2 and 27 of specimen RV 14.
E.20

-- 173 of 176 --

Stress, [MPa] .....,...F=98 kN, d=l mm
-F=160 kN, d=3.5 mm
--o- F=325 kN, d=l0.5 mm
-...-F=438 kN. d=l8 mm
-t:.-F=441 kN, d=28.8 mm
- 	- •Yield limit (537 MPa)
-,1010101010., (1901 01 01 01 01 Cl9
13 14 15 16
10 10 10 10 10 10 10 01 01 Dt Dt Dt 01 Dt
Figure E.40 	Average stress ofloops 13, 14, 15 and 16 of specimen RV14.
600 ------------------
500 -+------ 	----- 	---------1
400 t=:===========---=4
300 -+-------- 	- 	----------!
200 - 	------------------i
100 -+--------- 	- 	----- 	-----1
0 +----------------------1
1 	2
Position No.
Figure E.41 	Average stress of loops 2 and 6 of specimen RV15.
E.2.4 	Stresses of specimen RV15
Stress, [MPa]
600
500
400
300
200
100
0
5
Position No.
-ib.
p-
1 	2 	3 	4
- 	- 	-.
---.,
~ ._,~
~
.....,... F=36 kN, d=0.5 mm
-F=59 kN, d=l.4 mm
-&-F=158 kN, d=7.3 mm
......,_F=239 kN, d=l4.4 mm
--,!,-F=245 kN,d=l8.4 mm
- 	- •Yield limit (537 MPa)
• .,
2 • 	• • 	Cl
6 •
• 	• 	• 	• 	• 	• 	•
11
J
2
.. 3 0
4
"
siI
I
E.21

-- 174 of 176 --



-- 175 of 176 --



-- 176 of 176 --