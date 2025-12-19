---
title: EXERCISES
---

1. Prove that the antipodal mapping  $A: S^n \to S^n$  given by  $A(p) = -p$  is an isometry of  $S^n$ . Use this fact to introduce

a Riemannian metric on the real projective space  $P^n(\mathbf{R})$  such that the natural projection  $\pi: S^n \to P^n(\mathbf{R})$  is a local isometry.

2. Introduce a Riemannian metric on the torus  $T^n$  in such a way that the natural projection  $\pi: \mathbf{R}^n \to T^n$  given by

$$\pi(x_1, \dots, x_n) = (e^{ix_1}, \dots, e^{ix_n}), \quad (x_1, \dots, x_n) \in \mathbf{R}^n,$$

is a local isometry. Show that with this metric  $T^n$  is isometric to the flat torus.

3. Obtain an isometric immersion of the flat torus  $T^n$  into  $\mathbf{R}^{2n}$ .

4. A function  $g: \mathbf{R} \to \mathbf{R}$  given by  $g(t) = yt + x$ ,  $t, x, y \in \mathbf{R}$ ,  $y > 0$ , is called a *proper affine function*. The subset of all such functions with respect to the usual composition law forms a Lie group  $G$ . As a differentiable manifold  $G$  is simply the upper half-plane  $\{(x, y) \in \mathbf{R}^2; y > 0\}$  with the differentiable structure induced from  $\mathbf{R}^2$ . Prove that:

(a) The left-invariant Riemannian metric of  $G$  which at the neutral element  $e = (0, 1)$  coincides with the Euclidean metric ( $g_{11} = g_{22} = 1$ ,  $g_{12} = 0$ ) is given by  $g_{11} = g_{22} = \frac{1}{y^2}$ ,  $g_{12} = 0$ , (this is the metric of the non-euclidean geometry of Lobatchevski).

(b) Putting  $(x, y) = z = x + iy$ ,  $i = \sqrt{-1}$ , the transformation  $z \to z' = \frac{az+b}{cz+d}$ ,  $a, b, c, d \in \mathbf{R}$ ,  $ad - bc = 1$  is an isometry of  $G$ .

*Hint:* Observe that the first fundamental form can be written as:

$$ds^2 = \frac{dx^2 + dy^2}{y^2} = -\frac{4dzd\bar{z}}{(z - \bar{z})^2}.$$

5. Prove that the isometries of  $S^n \subset \mathbf{R}^{n+1}$ , with the induced metric, are the restrictions to  $S^n$  of the linear orthogonal maps of  $\mathbf{R}^{n+1}$ .

6. Show that the relation " $M$  is locally isometric to  $N$ " is not a symmetric relation.

†7. Let  $G$  be a compact connected Lie group ( $\dim G = n$ ). The object of this exercise is to prove that  $G$  has a bi-invariant Riemannian metric. To do this, take the following approach:

(a) Let  $\omega$  be a differential  $n$ -form on  $G$  invariant on the left, that is,  $L_x^*\omega = \omega$ , for all  $x \in G$ . Prove that  $\omega$  is right invariant.

*Hint:* For any  $a \in G$ ,  $R_a^*\omega$  is left invariant. It follows that  $R_a^*\omega = f(a)\omega$ . Verify that  $f(ab) = f(a)f(b)$ , that is,  $f: G \to R - \{0\}$  is a (continuous) homomorphism of  $G$  into the multiplicative group of real numbers. Since  $f(G)$  is a compact connected subgroup, the conclusion  $f(G) = 1$  holds. Therefore  $R_a^*\omega = \omega$ .

(b) Show that there exists a left invariant differential  $n$ -form  $\omega$  on  $G$ .

(c) Let  $\langle, \rangle$  be a left invariant metric on  $G$ . Let  $\omega$  be a positive differential  $n$ -form on  $G$  which is invariant on the left, and define a new Riemannian metric  $\langle\langle, \rangle\rangle$  on  $G$  by

$$\langle\langle u, v \rangle\rangle_y = \int_G \langle (dR_x)_y u, (dR_x)_y v \rangle_{yx} \omega, \\ x, y \in G, \quad u, v \in T_y(G).$$

Prove that this new Riemannian metric  $\langle\langle, \rangle\rangle$  is bi-invariant.
