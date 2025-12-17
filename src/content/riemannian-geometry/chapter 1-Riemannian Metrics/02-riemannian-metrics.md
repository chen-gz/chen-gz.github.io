---
title: Riemannian Metrics
---

**2.1 DEFINITION.** A _Riemannian metric_ (or _Riemannian structure_) on a differentiable manifold $M$ is a correspondence which associates to each point $p$ of $M$ an inner product $\langle \cdot, \cdot \rangle_p$ (that is, a symmetric, bilinear, positive-definite form) on the tangent space $T_p M$ , which varies differentiably in the following sense: If $\mathbf{x}: U \subset \mathbb{R}^n \to M$ is a system of coordinates around $p$ , with $\mathbf{x}(x_1, x_2, \dots, x_n) = q \in \mathbf{x}(U)$ and $\frac{\partial}{\partial x_i}(q) = d\mathbf{x}_q(0, \dots, 1, \dots, 0)$ , then $\langle \frac{\partial}{\partial x_i}(q), \frac{\partial}{\partial x_j}(q) \rangle_q = g_{ij}(x_1, \dots, x_n)$ is a differentiable function on $U$ .

It is clear this definition does not depend on the choice of coordinate system.

Another way to express the differentiability of the Riemannian metric is to say that for any pair of vector fields $X$ and $Y$ , which are differentiable in a neighborhood $V$ of $M$ , the function $\langle X, Y \rangle$ is differentiable on $V$ . It is immediate that this definition is equivalent to the other.

It is usual to delete the index $p$ in the function $\langle \cdot, \cdot \rangle_p$ whenever there is no possibility of confusion. The function $g_{ij}$ ( $= g_{ji}$ ) is called _the local representation of the Riemannian metric_ (or "the $g_{ij}$ of the metric") _in the coordinate system_ $\mathbf{x}: U \subset \mathbb{R}^n \to M$ . A differentiable manifold with a given Riemannian metric will be called a _Riemannian manifold_.

After introducing any type of mathematical structure, we must introduce a notion of when two objects are the same.

**2.2 DEFINITION.** Let $M$ and $N$ be Riemannian manifolds. A diffeomorphism $f: M \to N$ (that is, $f$ is a differentiable bijection with a differentiable inverse) is called an _isometry_ if:

$$
\quad \langle u, v \rangle_p = \langle df_p(u), df_p(v) \rangle_{f(p)}, \text{ for all } p \in M, u, v \in T_p M. \tag{1}
$$

**2.3 DEFINITION** Let $M$ and $N$ be Riemannian manifolds. A differentiable mapping $f: M \to N$ is a _local isometry_ at $p \in M$ if there is a neighborhood $U \subset M$ of $p$ such that $f: U \to f(U)$ is a diffeomorphism satisfying (1).

It is common to say that a Riemannian manifold $M$ is _locally isometric_ to a Riemannian manifold $N$ if for every $p$ in $M$ there exists a neighborhood $U$ of $p$ in $M$ and a local isometry $f: U \to f(U) \subset N$ .

What follows are some non-trivial examples of the notion of Riemannian manifold.

**2.4 EXAMPLE** _The almost trivial example._ $M = \mathbb{R}^n$ with $\frac{\partial}{\partial x_i}$ identified with $e_i = (0, \dots, 1, \dots, 0)$ . The metric is given by $\langle e_i, e_j \rangle = \delta_{ij}$ . $\mathbb{R}^n$ is called _Euclidean space of dimension $n$_ and the Riemannian geometry of this space is metric Euclidean geometry.

**2.5 EXAMPLE** _Immersed manifolds._ Let $f: M^n \to N^{n+k}$ be an immersion, that is, $f$ is differentiable and $df_p: T_p M \to T_{f(p)} N$ is injective for all $p$ in $M$ . If $N$ has a Riemannian structure, $f$ induces a Riemannian structure on $M$ by defining $\langle u, v \rangle_p = \langle df_p(u), df_p(v) \rangle_{f(p)}$ , $u, v \in T_p M$ . Since $df_p$ is injective, $\langle, \rangle_p$ is positive definite. The other conditions of Definition 2.1 are easily verified. This metric on $M$ is then called the metric _induced_ by $f$ , and $f$ is an _isometric immersion_.

A particularly important case occurs when we have a differentiable function $h: M^{n+k} \to N^k$ and $q \in N$ is a regular value of $h$ (that is, $dh_p: T_p M \to T_{h(p)} N$ is surjective for all $p \in h^{-1}(q)$ ). It is known then that $h^{-1}(q) \subset M$ is a submanifold of $M$ of dimension $n$ ; hence, we can put a Riemannian metric on it induced by the inclusion.

For example, let $h: \mathbb{R}^n \to \mathbb{R}$ be given by $h(x_1, \dots, x_n) = \sum_{i=1}^n x_i^2 - 1$ . Then 0 is a regular value of $h$ and $h^{-1}(0) = \{x \in \mathbb{R}^n: x_1^2 + \dots + x_n^2 = 1\} = S^{n-1}$ is the _unit sphere_ of $\mathbb{R}^n$ . The metric induced from $\mathbb{R}^n$ on $S^{n-1}$ is called the _canonical metric_ of $S^{n-1}$ .

**2.6 EXAMPLE** _Lie groups._ A _Lie group_ is a group $G$ with a differentiable structure such that the mapping $G \times G \to G$ given by $(x, y) \to xy^{-1}$ , $x, y \in G$ , is differentiable. It follows then that _translations from the left_ $L_x$ and _translations from the right_ $R_x$ given by: $L_x: G \to G$ , $L_x(y) = xy$ ; $R_x: G \to G$ , $R_x(y) = yx$ are diffeomorphisms.

We say that a Riemannian metric on $G$ is _left invariant_ if $\langle u, v \rangle_y = \langle d(L_x)_y u, d(L_x)_y v \rangle_{L_x(y)}$ for all $x, y \in G$ , $u, v \in T_y G$ , that is, if $L_x$ is an isometry. Analogously, we can define a _right invariant Riemannian metric_. A Riemannian metric on $G$ which is both right and left invariant is said to be _bi-invariant_.

We say that a differentiable vector field $X$ on a Lie group $G$ is _left invariant_ if $dL_x X = X$ for all $x \in G$ . The left invariant vector fields are completely determined by their values at a single point of $G$ . This allows us to introduce an additional structure on the tangent space to the neutral element $e \in G$ in the following manner. To each vector $X_e \in T_e G$ we associate the left invariant $X$ defined by $X_a = dL_a X_e$ , $a \in G$ . Let $X, Y$ be left invariant vector fields on $G$ . Since for each $x \in G$ and for any differentiable function $f$ on $G,$

$$
\begin{aligned}dL_x[X, Y]f &= [X, Y](f \circ L_x) = X(dL_x Y)f - Y(dL_x X)f \\&= (XY - YX)f = [X, Y]f,\end{aligned}
$$

we conclude that the bracket of any two left invariant vector fields is again a left invariant vector field. If $X_e, Y_e \in T_e G$ , we put $[X_e, Y_e] = [X, Y]_e$ . With this operation, $T_e G$ is called the _Lie algebra_ of $G$ , denoted by $\mathcal{G}$ . From now on, the elements in the Lie algebra $\mathcal{G}$ will be thought of either as vectors in $T_e G$ or as left invariant vector fields on $G$ .

To introduce a left invariant metric on $G$ , take any arbitrary inner product $\langle \cdot, \cdot \rangle_e$ on $\mathcal{G}$ and define

$$
\quad \langle u, v \rangle_x = \langle (dL_{x^{-1}})_x(u), (dL_{x^{-1}})_x(v) \rangle_e, \quad x \in G, u, v \in T_x G. \tag{2}
$$

Since $L_x$ depends differentiably on $x$ , this construction actually produces a Riemannian metric, which is clearly left invariant.

In an analogous manner we can construct a right invariant metric on $G$ . If $G$ is compact, we will see in Exercise 7 that $G$ possesses a bi-invariant metric.

If $G$ has a bi-invariant metric, the inner product that the metric determines on $\mathcal{G}$ satisfies the following relation: For any $U, V, X \in \mathcal{G}$ ,

$$
\quad \langle [U, X], V \rangle = -\langle U, [V, X] \rangle. \tag{3}
$$
