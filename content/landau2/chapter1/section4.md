---
type: docs
title: "§ 4. The Lorentz transformation"
weight: 4
---

Our purpose is now to obtain the formula of transformation from one inertial reference system to another, that is, a formula by means of which, knowing the coordinates  $x, y, z, t$ , of a certain event in the  $K$  system, we can find the coordinates  $x', y', z', t'$  of the same event in another inertial system  $K'$ .

In classical mechanics this question is resolved very simply. Because of the absolute nature of time we there have  $t = t'$ ; if, furthermore, the coordinate axes are chosen as usual (axes  $X, X'$  coincident,  $Y, Z$  axes parallel to  $Y', Z'$ , motion along  $X, X'$ ) then the coordinates  $y, z$  clearly are equal to  $y', z'$ , while the coordinates  $x$  and  $x'$  differ by the distance traversed by one system relative to the other. If the time origin is chosen as the moment when the two coordinate systems coincide, and if the velocity of the  $K'$  system relative to  $K$  is  $V$ , then this distance is  $Vt$ . Thus

† It is assumed, of course, that the points  $a$  and  $b$  and the curves joining them are such that all elements  $ds$  along the curves are timelike.

This property of the integral is connected with the pseudo-euclidean character of the four-dimensional geometry. In euclidean space the integral would, of course, be a minimum along the straight line.

$$x = x' + Vt, \quad y = y', \quad z = z', \quad t = t'. \quad (4.1)$$

This formula is called the **Galileo transformation**. It is easy to verify that this transformation, as was to be expected, does not satisfy the requirements of the theory of relativity; it does not leave the interval between events invariant.

We shall obtain the relativistic transformation precisely as a consequence of the requirement that it leaves the interval between events invariant.

As we saw in § 2, the interval between events can be looked on as the distance between the corresponding pair of world points in a four-dimensional system of coordinates. Consequently we may say that the required transformation must leave unchanged all distances in the four-dimensional  $x, y, z, ct$ , space. But such transformations consist only of parallel displacements, and rotations of the coordinate system. Of these the displacement of the coordinate system parallel to itself is of no interest, since it leads only to a shift in the origin of the space coordinates and a change in the time reference point. Thus the required transformation must be expressible mathematically as a rotation of the four-dimensional  $x, y, z, ct$ , coordinate system.

Every rotation in the four-dimensional space can be resolved into six rotations, in the planes  $xy, zy, xz, tx, ty, tz$  (just as every rotation in ordinary space can be resolved into three rotations in the planes  $xy, zy$  and  $xz$ ). The first three of these rotations transform only the space coordinates; they correspond to the usual space rotations.

Let us consider a rotation in the  $tx$  plane; under this, the  $y$  and  $z$  coordinates do not change. In particular, this transformation must leave unchanged the difference  $(ct)^2 - x^2$ , the square of the “distance” of the point  $(ct, x)$  from the origin. The relation between the old and the new coordinates is given in most general form by the formulas:

$$x = x' \cosh \psi + ct' \sinh \psi, \quad ct = x' \sinh \psi + ct' \cosh \psi, \quad (4.2)$$

where  $\psi$  is the “angle of rotation”; a simple check shows that in fact  $c^2 t^2 - x^2 = c^2 t'^2 - x'^2$ . Formula (4.2) differs from the usual formulas for transformation under rotation of the coordinate axes in having hyperbolic functions in place of trigonometric functions. This is the difference between pseudo-euclidean and euclidean geometry.

We try to find the formula of transformation from an inertial reference frame  $K$  to a system  $K'$  moving relative to  $K$  with velocity  $V$  along the  $x$  axis. In this case clearly only the coordinate  $x$  and the time  $t$  are subject to change. Therefore this transformation must have the form (4.2). Now it remains only to determine the angle  $\psi$ , which can depend only on the relative velocity  $V$ .†

Let us consider the motion, in the  $K$  system, of the origin of the  $K'$  system. Then  $x' = 0$  and formulas (4.2) take the form:

$$x = ct' \sinh \psi, \quad ct = ct' \cosh \psi, $$

or dividing one by the other,

$$\frac{x}{ct} = \tanh \psi.$$

But  $x/t$  is clearly the velocity  $V$  of the  $K'$  system relative to  $K$ . So

† Note that to avoid confusion we shall always use  $V$  to signify the constant relative velocity of two inertial systems, and  $v$  for the velocity of a moving particle, not necessarily constant.

$$\tanh \psi = \frac{V}{c}.$$

From this

$$\sinh \psi = \frac{V/c}{\sqrt{1 - V^2/c^2}}, \quad \cosh \psi = \frac{1}{\sqrt{1 - V^2/c^2}}.$$

Substituting in (4.2), we find:

$$x = \frac{x' + Vt'}{\sqrt{1 - V^2/c^2}}, \quad y = y', \quad z = z', \quad t = \frac{t' + \frac{V}{c^2}x'}{\sqrt{1 - V^2/c^2}}. \quad (4.3)$$

This is the required transformation formula. It is called the *Lorentz transformation*, and is of fundamental importance for what follows.

The inverse formulas, expressing  $x', y', z', t'$  in terms of  $x, y, z, t$ , are most easily obtained by changing  $V$  to  $-V$  (since the  $K$  system moves with velocity  $-V$  relative to the  $K'$  system). The same formulas can be obtained directly by solving equations (4.3) for  $x', y', z', t'$ .

It is easy to see from (4.3) that on making the transition to the limit  $c \to \infty$  and classical mechanics, the formula for the Lorentz transformation actually goes over into the Galileo transformation.

For  $V > c$  in formula (4.3) the coordinates  $x, t$  are imaginary; this corresponds to the fact that motion with a velocity greater than the velocity of light is impossible. Moreover, one cannot use a reference system moving with the velocity of light—in that case the denominators in (4.3) would go to zero.

For velocities  $V$  small compared with the velocity of light, we can use in place of (4.3) the approximate formulas:

$$x = x' + Vt', \quad y = y', \quad z = z', \quad t = t' + \frac{V}{c^2}x'. \quad (4.4)$$

Suppose there is a rod at rest in the  $K$  system, parallel to the  $X$  axis. Let its length, measured in this system, be  $\Delta x = x_2 - x_1$  ( $x_2$  and  $x_1$  are the coordinates of the two ends of the rod in the  $K$  system). We now determine the length of this rod as measured in the  $K'$  system. To do this we must find the coordinates of the two ends of the rod ( $x_2'$  and  $x_1'$ ) in this system at one and the same time  $t'$ . From (4.3) we find:

$$x_1 = \frac{x_1' + Vt'}{\sqrt{1 - V^2/c^2}}, \quad x_2 = \frac{x_2' + Vt'}{1 - V^2/c^2}.$$

The length of the rod in the  $K'$  system is  $\Delta x' = x_2' - x_1'$ ; subtracting  $x_1$  from  $x_2$ , we find

$$\Delta x = \frac{\Delta x'}{\sqrt{1 - V^2/c^2}}.$$

The *proper length* of a rod is its length in a reference system in which it is at rest. Let

us denote it by  $l_0 = \Delta x$ , and the length of the rod in any other reference frame  $K'$  by  $l$ . Then

$$l = l_0 \sqrt{1 - \frac{V^2}{c^2}}. \quad (4.5)$$

Thus a rod has its greatest length in the reference system in which it is at rest. Its length in a system in which it moves with velocity  $V$  is decreased by the factor  $\sqrt{1 - V^2/c^2}$ . This result of the theory of relativity is called the *Lorentz contraction*.

Since the transverse dimensions do not change because of its motion, the volume  $\mathcal{V}$  of a body decreases according to the similar formula

$$\mathcal{V} = \mathcal{V}_0 \sqrt{1 - \frac{V^2}{c^2}}, \quad (4.6)$$

where  $\mathcal{V}_0$  is the *proper volume* of the body.

From the Lorentz transformation we can obtain anew the results already known to us concerning the proper time (§ 3). Suppose a clock to be at rest in the  $K'$  system. We take two events occurring at one and the same point  $x', y', z'$  in space in the  $K'$  system. The time between these events in the  $K'$  system is  $\Delta t' = t_2' - t_1'$ . Now we find the time  $\Delta t$  which elapses between these two events in the  $K$  system. From (4.3), we have

$$t_1 = \frac{t_1' + \frac{V}{c^2}x'}{\sqrt{1 - \frac{V^2}{c^2}}}, \quad t_2 = \frac{t_2' + \frac{V}{c^2}x'}{\sqrt{1 - \frac{V^2}{c^2}}},$$

or, subtracting one from the other,

$$t_2 - t_1 = \Delta t = \frac{\Delta t'}{\sqrt{1 - \frac{V^2}{c^2}}},$$

in complete agreement with (3.1).

Finally we mention another general property of Lorentz transformations which distinguishes them from Galilean transformations. The latter have the general property of commutativity, i.e. the combined result of two successive Galilean transformations (with different velocities  $V_1$  and  $V_2$ ) does not depend on the order in which the transformations are performed. On the other hand, the result of two successive Lorentz transformations does depend, in general, on their order. This is already apparent purely mathematically from our formal description of these transformations as rotations of the four-dimensional coordinate system: we know that the result of two rotations (about different axes) depends on the order in which they are carried out. The sole exception is the case of transformations with parallel vectors  $V_1$  and  $V_2$  (which are equivalent to two rotations of the four-dimensional coordinate system about the same axis).
