

with  $\bar{U} \subset B_r(p)$  and a differentiable function  $f: \mathbb{R}^n \to \mathbb{R}$  such that  $0 \le f(q) \le 1$  for all  $q \in \mathbb{R}^n$  and

$$f(q) = \begin{cases} 1, & \text{if } q \in \bar{U}, \\ 0, & \text{if } q \notin B_r(p). \end{cases}$$

Indeed, if we take, for simplicity,  $r = 2$ , we can choose  $U = B_1(p)$  and define  $f$  by  $f(q) = \beta(-|p-q|)$ ,  $q \in \mathbb{R}^n$ , where  $\beta: \mathbb{R} \to \mathbb{R}$  is given by

$$\beta(t) = \frac{\int_{-\infty}^{t} \alpha(s) ds}{\int_{-2}^{-1} \alpha(s) ds},$$

and  $\alpha: \mathbb{R} \to \mathbb{R}$  is the smooth function equaling  $\exp\left(-\frac{1}{(t+2)(-1-t)}\right)$  on  $[-2, -1]$  and zero off this interval. It is easy to check that  $f$  satisfies the required conditions.

Clearly, the same thing happens in a neighborhood contained in a coordinate neighborhood on a differentiable manifold  $M$ . In other words, if  $p \in M$  and  $V \subset M$  is a neighborhood of  $p$  contained in a coordinate neighborhood of  $p$  which is diffeomorphic to an open ball, then there exists a neighborhood  $U$  of  $p$  with  $\bar{U} \subset V$  and a differentiable function  $f: M \to \mathbb{R}$  with  $0 \le f(q) \le 1$  if  $q \in M$ ,  $f(q) = 1$  if  $q \in \bar{U}$ , and  $f(q) = 0$  if  $q \notin V$ . This fact allows us to show that certain globally defined objects on  $M$  are, in reality, local, that is, their behavior at  $p$  only depends on how  $M$  behaves in a neighborhood of  $p$  (cf. the definition of the bracket of two vector fields in this chapter and the definition of an affine connection in Chapter 2).

## EXERCISES

1. (Product manifold). Let  $M$  and  $N$  be differentiable manifolds and let  $\{(U_\alpha, x_\alpha)\}$ ,  $\{V_\beta, y_\beta\}$  differentiable structures on  $M$  and  $N$ , respectively. Consider the cartesian product  $M \times N$  and the mappings  $z_{\alpha\beta}(p, q) = (x_\alpha(p), y_\beta(q))$ ,  $p \in U_\alpha$ ,  $q \in V_\beta$ .
   1. Prove that  $\{(U_\alpha \times V_\beta, z_{\alpha\beta})\}$  is a differentiable structure on  $M \times N$  in which the projections  $\pi_1: M \times N \to M$  and

$\pi_2: M \times N \to N$  are differentiable. With this differentiable structure  $M \times N$  is called the *product manifold* of  $M$  with  $N$ .

(b) Show that the product manifold  $S^1 \times \dots \times S^1$  of  $n$  circles  $S^1$ , where  $S^1 \subset \mathbb{R}^2$  has the usual differentiable structure, is diffeomorphic to the  $n$ -torus  $T^n$  of example 4.9 (a).

2. Prove that the tangent bundle of a differentiable manifold  $M$  is orientable (even though  $M$  may not be).

3. Prove that:

(a) a regular surface  $S \subset \mathbb{R}^3$  is an orientable manifold if and only if there exists a differentiable mapping of  $N: S \to \mathbb{R}^3$  with  $N(p) \perp T_p(S)$  and  $|N(p)| = 1$ , for all  $p \in S$ .

(b) the Möbius band (Example 4.9 (b)) is non-orientable.

4. Show that the projective plane  $P^2(\mathbb{R})$  is non-orientable.  
*Hint:* Prove that if the manifold  $M$  is orientable, then any open subset of  $M$  is an orientable submanifold. Observe that  $P^2(\mathbb{R})$  contains an open subset diffeomorphic to a Möbius band, which is non-orientable.

5. (*Embedding of  $P^2(\mathbb{R})$  in  $\mathbb{R}^4$* ). Let  $F: \mathbb{R}^3 \to \mathbb{R}^4$  be given by

$$F(x, y, z) = (x^2 - y^2, xy, xz, yz), \quad (x, y, z) = p \in \mathbb{R}^3.$$

Let  $S^2 \subset \mathbb{R}^3$  be the unit sphere with the origin  $0 \in \mathbb{R}^3$ . Observe that the restriction  $\varphi = F|_{S^2}$  is such that  $\varphi(p) = \varphi(-p)$ , and consider the mapping  $\tilde{\varphi}: P^2(\mathbb{R}) \to \mathbb{R}^4$  given by

$$\tilde{\varphi}([p]) = \varphi(p), \quad [p] = \text{equiv. class of } p = \{p, -p\}.$$

Prove that:

(a)  $\tilde{\varphi}$  is an immersion.

(b)  $\tilde{\varphi}$  is injective; together with (a) and the compactness of  $P^2(\mathbb{R})$ , this implies that  $\tilde{\varphi}$  is an embedding.

6. (*Embedding of the Klein bottle in  $\mathbb{R}^4$* ). Show that the mapping  $G: \mathbb{R}^2 \to \mathbb{R}^4$  given by

$$G(x, y) = \left( (r \cos y + a) \cos x, (r \cos y + a) \sin x, \right. \\ \left. r \sin y \cos \frac{x}{2}, r \sin y \sin \frac{x}{2} \right), \quad (x, y) \in \mathbb{R}^2$$

induces an embedding of the Klein bottle (Example 4.9 (b)) into  $\mathbb{R}^4$ .

7. (Infinite Möbius band).  
Let  $C = \{(x, y, z) \in \mathbb{R}^3; x^2 + y^2 = 1\}$  be a right circular cylinder, and let  $A: C \to C$  be the symmetry with respect to the origin  $0 \in \mathbb{R}^3$ , that is,  $A(x, y, z) = (-x, -y, -z)$ . Let  $M$  be the quotient space of  $C$  with respect to the equivalence relation  $p \sim A(p)$ , and let  $\pi: C \to M$  be the projection  $\pi(p) = \{p, A(p)\}$ .

1. Show that it is possible to give  $M$  a differentiable structure such that  $\pi$  is a local diffeomorphism.
2. Prove that  $M$  is non-orientable.

8. Let  $M_1$  and  $M_2$  be differentiable manifolds. Let  $\varphi: M_1 \to M_2$  be a local diffeomorphism. Prove that if  $M_2$  is orientable, then  $M_1$  is orientable.

9. Let  $G \times M \to M$  be a properly discontinuous action of a group  $G$  on a differentiable manifold  $M$ .

1. Prove that the manifold  $M/G$  (Example 4.8) is orientable if and only if there exists an orientation of  $M$  that is preserved by all the diffeomorphisms of  $G$ .
2. Use (a) to show that the projective plane  $P^2(\mathbb{R})$ , the Klein bottle and the Möbius band are non-orientable.
3. Prove that  $P^n(\mathbb{R})$  is orientable if and only if  $n$  is odd.

10. Show that the topology of the differentiable manifold  $M/G$  of Example 4.8 is Hausdorff if and only if the following condition holds: given two non-equivalent points  $p_1, p_2 \in M$ , there exist neighborhoods  $U_1, U_2$  of  $p_1$  and  $p_2$ , respectively, such that  $U_1 \cap gU_2 = \emptyset$  for all  $g \in G$ .

11. Let us consider the two following differentiable structures on the real line  $\mathbb{R}$ :  $(\mathbb{R}, x_1)$ , where  $x_1: \mathbb{R} \to \mathbb{R}$  is given by  $x_1(x) = x$ ,  $x \in \mathbb{R}$ ;  $(\mathbb{R}, x_2)$ , where  $x_2: \mathbb{R} \to \mathbb{R}$  is given by  $x_2(x) = x^3$ ,  $x \in \mathbb{R}$ . Show that:

1. the identity mapping  $i: (\mathbb{R}, x_1) \to (\mathbb{R}, x_2)$  is not a diffeomorphism; therefore, the maximal structures determined by  $(\mathbb{R}, x_1)$  and  $(\mathbb{R}, x_2)$  are distinct.
2. the mapping  $f: (\mathbb{R}, x_1) \to (\mathbb{R}, x_2)$  given by  $f(x) = x^3$  is a diffeomorphism; that is, even though the differentiable

structure  $(\mathbf{R}, \mathbf{x}_1)$  and  $(\mathbf{R}, \mathbf{x}_2)$  are distinct, they determine diffeomorphic differentiable manifolds.

12. *(The orientable double covering).* Let  $M^n$  be a non-orientable differentiable manifold. For each  $p \in M$ , consider the set  $B$  of bases of  $T_p M$  and say that two bases are equivalent if they are related by a matrix with positive determinant. This is an equivalence relation and separates  $B$  into two disjoint sets. Let  $\mathcal{O}_p$  be the quotient space of  $B$  with respect to this equivalence relation.  $O_p \in \mathcal{O}_p$  will be called an *orientation* of  $T_p M$ . Let  $\overline{M}$  be the set

$$\overline{M} = \{(p, O_p); p \in M, O_p \in \mathcal{O}_p\}.$$

Let  $\{(U_\alpha, \mathbf{x}_\alpha)\}$  be a maximal differentiable structure on  $M$ , and define  $\overline{\mathbf{x}}_\alpha: U_\alpha \to \overline{M}$  by

$$\overline{\mathbf{x}}_\alpha(u_1^\alpha, \dots, u_n^\alpha) = (\mathbf{x}_\alpha(u_1^\alpha, \dots, u_n^\alpha), [\frac{\partial}{\partial u_1^\alpha}, \dots, \frac{\partial}{\partial u_n^\alpha}]),$$

where  $(u_1^\alpha, \dots, u_n^\alpha) \in U_\alpha$  and  $[\frac{\partial}{\partial u_1^\alpha}, \dots, \frac{\partial}{\partial u_n^\alpha}]$  denotes the element of  $\mathcal{O}_p$  determined by the basis  $\{\frac{\partial}{\partial u_1^\alpha}, \dots, \frac{\partial}{\partial u_n^\alpha}\}$ . Prove that:

1. $\{U_\alpha, \overline{\mathbf{x}}_\alpha\}$  is a differentiable structure on  $\overline{M}$  and that the manifold  $\overline{M}$  so obtained is orientable.
2. The mapping  $\pi: \overline{M} \to M$  given by  $\pi(p, O_p) = p$  is differentiable and surjective. In addition, each  $p \in M$  has a neighborhood  $U \subset M$  such that  $\pi^{-1}(U) = V_1 \cup V_2$ , where  $V_1$  and  $V_2$  are disjoint open sets in  $\overline{M}$  and  $\pi$  restricted to each  $V_i$ ,  $i = 1, 2$ , is a diffeomorphism onto  $U$ . For this reason,  $\overline{M}$  is called the *orientable double cover of  $M$* .
3. The sphere  $S^2$  is the orientable double cover of  $P^2(\mathbf{R})$  and the torus  $T^2$  is the orientable double cover of the Klein bottle  $K$ .

# CHAPTER 1

## RIEMANNIAN METRICS

### 1. Introduction

Historically, Riemannian geometry was a natural development of the differential geometry of surfaces in  $\mathbf{R}^3$ . Given a surface  $S \subset \mathbf{R}^3$ , we have a natural way of measuring the lengths of vectors tangent to  $S$ , namely: the inner product  $\langle v, w \rangle$  of two vectors tangent to  $S$  at a point  $p$  of  $S$  is simply the inner product of these vectors in  $\mathbf{R}^3$ . The way to compute the length of a curve is, by definition, to integrate the length of its velocity vector. The definition of  $\langle, \rangle$  permits us to measure not only the lengths of curves in  $S$  but also the area of domains in  $S$ , as well as the angle between two curves, and all the other “metric” ideas used in geometry. More generally, these notions lead us to define on  $S$  certain special curves, called geodesics, which possess the following property: given any two points  $p$  and  $q$  on a geodesic, sufficiently close (in a sense to be made precise later, Cf. Chap. 3), the length of such a curve is less than or equal to the length of any other curve joining  $p$  to  $q$ . Such curves behave, in many situations, as if they were “the straight lines” of  $S$ , and, as we shall see later, play an important role in the development of geometry.

Observe that the definition of the inner product at each point  $p \in S$ , yields, equivalently, a quadratic form  $I_p$ , called the first fundamental form of  $S$  at  $p$ , defined in the tangent plane  $T_pS$  by  $I_p(v) = \langle v, v \rangle$ ,  $v \in T_pS$ .

The crucial point of this development was an observation made by Gauss in his famous work (see Gauss [Ga]) published in 1827. In this work, Gauss defined a notion of curvature for surfaces, which measures the amount that  $S$  deviates, at a point  $p \in S$ , from its tangent plane at  $p$ . In modern notation, Gauss’ definition can be expressed in the following terms. Define a mapping  $g: S \to S^2 \subset \mathbf{R}^3$  of  $S$  into the unit sphere  $S^2$  of  $\mathbf{R}^3$ , associating to every  $p \in S$  a unit

vector  $N(p) \in S^2$  normal to  $T_p S$ ; if  $S$  were orientable then  $g$  would be well-defined and differentiable on  $S$ . During Gauss' time, the notion of orientation of surfaces was not well-understood (in truth, it wasn't until 1865 that Möbius presented his famous example, well-known today as the Möbius band), and so  $g$  was defined on "pieces" of  $S$ . In any case,  $g$  is differentiable and it is possible then to speak of its differential  $dg_p: T_p S \to T_{g(p)} S^2$ . Since  $N(p)$  is normal to  $T_p S$ , we can identify the two vector spaces  $T_p S$  and  $T_{g(p)} S^2$ , and thus it makes sense to speak of the determinant of the linear map  $dg_p$ . Gauss defined his curvature as  $K(p) = \det(dg_p)$  and showed that it agreed with the product of the principal curvatures introduced in 1760 by Euler.

Perhaps it is worthwhile mentioning that Euler defined the principal curvatures  $k_1$  and  $k_2$  of a surface  $S$  by considering the curvature  $k_n$  of curves obtained by intersecting  $S$  with planes normal to  $S$  at  $p$  and taking  $k_1 = \max k_n$  and  $k_2 = \min k_n$ . At the time of Gauss it was not at all clear that one function or the other of  $k_1$  and  $k_2$ , would be an adequate definition of curvature. Gauss considered that the facts which he had obtained about  $K$  justified the choice of  $K = k_1 k_2$  as the curvature of  $S$ .

The facts that Gauss alluded to were the following. In the first place, the curvature, as defined above, depends only on the manner of measuring in  $S$ , that is, only on the first fundamental form  $I$ . Secondly, the sum of the interior angles of a triangle formed by geodesics differs from  $180^\circ$  by an expression that depends only on the curvature and the area of the triangle.

Everything indicates that Gauss perceived very clearly the profound implications of his discovery. In fact, one of the fundamental problems during Gauss' time was to decide if the fifth postulate of Euclid ("Given a straight line and a point not on the line then there is a straight line through the point which does not meet the given line") was independent of the other postulates of geometry. Although without immediate applications, the question leads to philosophical implications of primary importance. Earlier, it had been established that Euclid's fifth postulate is equivalent to the fact that the sum of the interior angles of a triangle equals  $180^\circ$ . The discovery of Gauss implied, among other things, that it would be possible to imagine a geometry (at least in dimension two) that depended on a fundamental quadratic form given in an arbitrary

manner (without regard to the ambient space). In such a geometry, defining straight lines as geodesics, the sum of the interior angles of a triangle would depend on the curvature and, as Gauss actually verified, its difference from  $180^\circ$  would be equal to the integral of the curvature over the triangle. Gauss, however, did not have the necessary mathematical tools available to develop his ideas (what he lacked was essentially the idea of a differentiable manifold) and he preferred not to discuss this topic openly. The actual appearance of a non-euclidean geometry was due, independently, to Lobatchevski (1829) and Bolyai(1831).

The ideas of Gauss were taken up again by Riemann in 1854 (see Riemann [Ri]), even though he was still without an adequate definition of a manifold. Using intuitive language and without proof, Riemann introduced what we call today a differentiable manifold of dimension  $n$ . He further associated to every point of the manifold a fundamental quadratic form and then generalized the idea of Gaussian curvature to this situation (cf. Chap. 4). Furthermore, he stated many relations between the first fundamental quadratic form and the curvature that were only proved decades later. The reading of his work makes it clear that Riemann was motivated by the fundamental question implicit in the development of non-euclidean geometries, namely, the relationship between physics and geometry.

It is curious to observe that the concept of differentiable manifold, necessary for the formalization of the work of Riemann, only appeared explicitly in 1913 in the work of H. Weyl which made precise another of Riemann's audacious concepts, namely, Riemann surfaces. But that is another story.

Due to the lack of adequate tools, Riemannian geometry as such developed very slowly. An important outside source of stimulation was the application of these ideas to the theory of relativity in 1916. Another fundamental step was the introduction of the parallelism of Levi-Civita. We shall return to this topic in the next chapter. Our object here is not to write a complete history of Riemannian geometry but simply to trace its origin and supply motivation for what is to follow.

Our point of departure will be a differentiable manifold on which we introduce at each point a way of measuring the length of tangent vectors. This measurement should change differentiably from point to point. The explicit definition will be given in the next

section.

For the remainder of this book, the differentiable manifolds considered will be assumed to be Hausdorff spaces with countable bases. "Differentiable" will signify "of class  $C^\infty$ ", and when  $M^n = M$  denotes a differentiable manifold,  $n$  denotes the dimension of  $M$ .

### 2. Riemannian Metrics

**2.1 DEFINITION.** A *Riemannian metric* (or *Riemannian structure*) on a differentiable manifold  $M$  is a correspondence which associates to each point  $p$  of  $M$  an inner product  $\langle \cdot, \cdot \rangle_p$  (that is, a symmetric, bilinear, positive-definite form) on the tangent space  $T_p M$ , which varies differentiably in the following sense: If  $\mathbf{x}: U \subset \mathbb{R}^n \to M$  is a system of coordinates around  $p$ , with  $\mathbf{x}(x_1, x_2, \dots, x_n) = q \in \mathbf{x}(U)$  and  $\frac{\partial}{\partial x_i}(q) = d\mathbf{x}_q(0, \dots, 1, \dots, 0)$ , then  $\langle \frac{\partial}{\partial x_i}(q), \frac{\partial}{\partial x_j}(q) \rangle_q = g_{ij}(x_1, \dots, x_n)$  is a differentiable function on  $U$ .

It is clear this definition does not depend on the choice of coordinate system.

Another way to express the differentiability of the Riemannian metric is to say that for any pair of vector fields  $X$  and  $Y$ , which are differentiable in a neighborhood  $V$  of  $M$ , the function  $\langle X, Y \rangle$  is differentiable on  $V$ . It is immediate that this definition is equivalent to the other.

It is usual to delete the index  $p$  in the function  $\langle \cdot, \cdot \rangle_p$  whenever there is no possibility of confusion. The function  $g_{ij}$  ( $= g_{ji}$ ) is called *the local representation of the Riemannian metric* (or "the  $g_{ij}$  of the metric") *in the coordinate system*  $\mathbf{x}: U \subset \mathbb{R}^n \to M$ . A differentiable manifold with a given Riemannian metric will be called a *Riemannian manifold*.

After introducing any type of mathematical structure, we must introduce a notion of when two objects are the same.

**2.2 DEFINITION.** Let  $M$  and  $N$  be Riemannian manifolds. A diffeomorphism  $f: M \to N$  (that is,  $f$  is a differentiable bijection with a differentiable inverse) is called an *isometry* if:

$$(1) \quad \langle u, v \rangle_p = \langle df_p(u), df_p(v) \rangle_{f(p)}, \text{ for all } p \in M, u, v \in T_p M.$$

2.3 DEFINITION. Let  $M$  and  $N$  be Riemannian manifolds. A differentiable mapping  $f: M \to N$  is a *local isometry* at  $p \in M$  if there is a neighborhood  $U \subset M$  of  $p$  such that  $f: U \to f(U)$  is a diffeomorphism satisfying (1).

It is common to say that a Riemannian manifold  $M$  is *locally isometric* to a Riemannian manifold  $N$  if for every  $p$  in  $M$  there exists a neighborhood  $U$  of  $p$  in  $M$  and a local isometry  $f: U \to f(U) \subset N$ .

What follows are some non-trivial examples of the notion of Riemannian manifold.

2.4 EXAMPLE. *The almost trivial example.*  $M = \mathbb{R}^n$  with  $\frac{\partial}{\partial x_i}$  identified with  $e_i = (0, \dots, 1, \dots, 0)$ . The metric is given by  $\langle e_i, e_j \rangle = \delta_{ij}$ .  $\mathbb{R}^n$  is called *Euclidean space of dimension  $n$*  and the Riemannian geometry of this space is metric Euclidean geometry.

2.5 EXAMPLE. *Immersed manifolds.* Let  $f: M^n \to N^{n+k}$  be an immersion, that is,  $f$  is differentiable and  $df_p: T_p M \to T_{f(p)} N$  is injective for all  $p$  in  $M$ . If  $N$  has a Riemannian structure,  $f$  induces a Riemannian structure on  $M$  by defining  $\langle u, v \rangle_p = \langle df_p(u), df_p(v) \rangle_{f(p)}$ ,  $u, v \in T_p M$ . Since  $df_p$  is injective,  $\langle, \rangle_p$  is positive definite. The other conditions of Definition 2.1 are easily verified. This metric on  $M$  is then called the metric *induced* by  $f$ , and  $f$  is an *isometric immersion*.

A particularly important case occurs when we have a differentiable function  $h: M^{n+k} \to N^k$  and  $q \in N$  is a regular value of  $h$  (that is,  $dh_p: T_p M \to T_{h(p)} N$  is surjective for all  $p \in h^{-1}(q)$ ). It is known then that  $h^{-1}(q) \subset M$  is a submanifold of  $M$  of dimension  $n$ ; hence, we can put a Riemannian metric on it induced by the inclusion.

For example, let  $h: \mathbb{R}^n \to \mathbb{R}$  be given by  $h(x_1, \dots, x_n) = \sum_{i=1}^n x_i^2 - 1$ . Then 0 is a regular value of  $h$  and  $h^{-1}(0) = \{x \in \mathbb{R}^n: x_1^2 + \dots + x_n^2 = 1\} = S^{n-1}$  is the *unit sphere* of  $\mathbb{R}^n$ . The metric induced from  $\mathbb{R}^n$  on  $S^{n-1}$  is called the *canonical metric* of  $S^{n-1}$ .

2.6 EXAMPLE. *Lie groups.* A *Lie group* is a group  $G$  with a differentiable structure such that the mapping  $G \times G \to G$  given by  $(x, y) \to xy^{-1}$ ,  $x, y \in G$ , is differentiable. It follows then that *translations from the left*  $L_x$  and *translations from the right*  $R_x$  given by:  $L_x: G \to G$ ,  $L_x(y) = xy$ ;  $R_x: G \to G$ ,  $R_x(y) = yx$  are diffeomorphisms.

We say that a Riemannian metric on  $G$  is *left invariant* if  $\langle u, v \rangle_y = \langle d(L_x)_y u, d(L_x)_y v \rangle_{L_x(y)}$  for all  $x, y \in G$ ,  $u, v \in T_y G$ , that is, if  $L_x$  is an isometry. Analogously, we can define a *right invariant Riemannian metric*. A Riemannian metric on  $G$  which is both right and left invariant is said to be *bi-invariant*.

We say that a differentiable vector field  $X$  on a Lie group  $G$  is *left invariant* if  $dL_x X = X$  for all  $x \in G$ . The left invariant vector fields are completely determined by their values at a single point of  $G$ . This allows us to introduce an additional structure on the tangent space to the neutral element  $e \in G$  in the following manner. To each vector  $X_e \in T_e G$  we associate the left invariant  $X$  defined by  $X_a = dL_a X_e$ ,  $a \in G$ . Let  $X, Y$  be left invariant vector fields on  $G$ . Since for each  $x \in G$  and for any differentiable function  $f$  on  $G$ ,

$$\begin{aligned}dL_x[X, Y]f &= [X, Y](f \circ L_x) = X(dL_x Y)f - Y(dL_x X)f \\&= (XY - YX)f = [X, Y]f,\end{aligned}$$

we conclude that the bracket of any two left invariant vector fields is again a left invariant vector field. If  $X_e, Y_e \in T_e G$ , we put  $[X_e, Y_e] = [X, Y]_e$ . With this operation,  $T_e G$  is called the *Lie algebra* of  $G$ , denoted by  $\mathcal{G}$ . From now on, the elements in the Lie algebra  $\mathcal{G}$  will be thought of either as vectors in  $T_e G$  or as left invariant vector fields on  $G$ .

To introduce a left invariant metric on  $G$ , take any arbitrary inner product  $\langle \cdot, \cdot \rangle_e$  on  $\mathcal{G}$  and define

$$(2) \quad \langle u, v \rangle_x = \langle (dL_{x^{-1}})_x(u), (dL_{x^{-1}})_x(v) \rangle_e, \quad x \in G, u, v \in T_x G.$$

Since  $L_x$  depends differentiably on  $x$ , this construction actually produces a Riemannian metric, which is clearly left invariant.

In an analogous manner we can construct a right invariant metric on  $G$ . If  $G$  is compact, we will see in Exercise 7 that  $G$  possesses a bi-invariant metric.

If  $G$  has a bi-invariant metric, the inner product that the metric determines on  $\mathcal{G}$  satisfies the following relation: For any  $U, V, X \in \mathcal{G}$ ,

$$(3) \quad \langle [U, X], V \rangle = -\langle U, [V, X] \rangle.$$