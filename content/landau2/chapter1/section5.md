---
type: docs
title: "§ 5. Transformation of velocities"
weight: 5
---

In the preceding section we obtained formulas which enable us to find from the coordinates of an event in one reference frame, the coordinates of the same event in a second reference

frame. Now we find formulas relating the velocity of a material particle in one reference system to its velocity in a second reference system.

Let us suppose once again that the  $K'$  system moves relative to the  $K$  system with velocity  $V$  along the  $x$  axis. Let  $v_x = dx/dt$  be the component of the particle velocity in the  $K$  system and  $v'_x = dx'/dt'$  the velocity component of the same particle in the  $K'$  system. From (4.3), we have

$$dx = \frac{dx' + Vdt'}{\sqrt{1 - \frac{V^2}{c^2}}}, \quad dy = dy', \quad dz = dz', \quad dt = \frac{dt' + \frac{V}{c^2}dx'}{\sqrt{1 - \frac{V^2}{c^2}}}.$$

Dividing the first three equations by the fourth and introducing the velocities

$$\mathbf{v} = \frac{d\mathbf{r}}{dt}, \quad \mathbf{v}' = \frac{d\mathbf{r}'}{dt'},$$

we find

$$v_x = \frac{v'_x + V}{1 + v'_x \frac{V}{c^2}}, \quad v_y = \frac{v'_y \sqrt{1 - \frac{V^2}{c^2}}}{1 + v'_x \frac{V}{c^2}}, \quad v_z = \frac{v'_z \sqrt{1 - \frac{V^2}{c^2}}}{1 + v'_x \frac{V}{c^2}}. \quad (5.1)$$

These formulas determine the transformation of velocities. They describe the law of composition of velocities in the theory of relativity. In the limiting case of  $c \to \infty$ , they go over into the formulas  $v_x = v'_x + V$ ,  $v_y = v'_y$ ,  $v_z = v'_z$  of classical mechanics.

In the special case of motion of a particle parallel to the  $X$  axis,  $v_x = v$ ,  $v_y = v_z = 0$ . Then  $v'_y = v'_z = 0$ ,  $v'_x = v'$ , so that

$$v = \frac{v' + V}{1 + v' \frac{V}{c^2}}. \quad (5.2)$$

It is easy to convince oneself that the sum of two velocities each smaller than the velocity of light is again not greater than the light velocity.

For a velocity  $V$  significantly smaller than the velocity of light (the velocity  $v$  can be arbitrary), we have approximately, to terms of order  $V/c$ :

$$v_x = v'_x + V \left(1 - \frac{v_x^2}{c^2}\right), \quad v_y = v'_y - v'_x v'_y \frac{V}{c^2}, \quad v_z = v'_z - v'_x v'_z \frac{V}{c^2}.$$

These three formulas can be written as a single vector formula

$$\mathbf{v} = \mathbf{v}' + \mathbf{V} - \frac{1}{c^2} (\mathbf{V} \cdot \mathbf{v}') \mathbf{v}'. \quad (5.3)$$

We may point out that in the relativistic-law of addition of velocities (5.1) the two velocities  $\mathbf{v}'$  and  $\mathbf{V}$  which are combined enter unsymmetrically (provided they are not both directed along the  $x$  axis). This fact is related to the noncommutativity of Lorentz transformations which we mentioned in the preceding section.

Let us choose our coordinate axes so that the velocity of the particle at the given moment

lies in the  $XY$  plane. Then the velocity of the particle in the  $K$  system has components  $v_x = v \cos \theta$ ,  $v_y = v \sin \theta$ , and in the  $K'$  system  $v'_x = v' \cos \theta'$ ,  $v'_y = v' \sin \theta'$  ( $v$ ,  $v'$ ,  $\theta$ ,  $\theta'$  are the absolute values and the angles subtended with the  $X$ ,  $X'$  axes respectively in the  $K$ ,  $K'$  systems). With the help of formula (5.1), we then find

$$\tan \theta = \frac{v' \sqrt{1 - \frac{V^2}{c^2}} \sin \theta'}{V \cos \theta' + V}. \quad (5.4)$$

This formula describes the change in the direction of the velocity on transforming from one reference system to another.

Let us consider a very important special case of this formula, namely, the deviation of light in transforming to a new reference system—a phenomenon known as the *aberration of light*. In this case  $v = v' = c$ , so that the preceding formula goes over into

$$\tan \theta = \frac{\sqrt{1 - \frac{V^2}{c^2}}}{\frac{V}{c} + \cos \theta'} \sin \theta'. \quad (5.5)$$

From the same transformation formulas (5.1) it is easy to obtain for  $\sin \theta$  and  $\cos \theta$ :

$$\sin \theta = \frac{\sqrt{1 - \frac{V^2}{c^2}}}{1 + \frac{V}{c} \cos \theta'} \sin \theta', \quad \cos \theta = \frac{\cos \theta' + \frac{V}{c}}{1 + \frac{V}{c} \cos \theta'}. \quad (5.6)$$

In case  $V \ll c$ , we find from this formula, correct to terms of order  $V/c$ :

$$\sin \theta - \sin \theta' = -\frac{V}{c} \sin \theta' \cos \theta'.$

Introducing the angle  $\Delta\theta = \theta' - \theta$  (the aberration angle), we find to the same order of accuracy

$$\Delta\theta = \frac{V}{c} \sin \theta', \quad (5.7)$$

which is the well-known elementary formula for the aberration of light.
