---
title: Exercises
---

1. (Product manifold). Let $M$ and $N$ be differentiable manifolds and let $\{(U_\alpha, x_\alpha)\}$ , $\{V_\beta, y_\beta\}$ differentiable structures on $M$ and $N$ , respectively. Consider the cartesian product $M \times N$ and the mappings $z_{\alpha\beta}(p, q) = (x_\alpha(p), y_\beta(q))$ , $p \in U_\alpha$ , $q \in V_\beta$ .
   1. Prove that $\{(U_\alpha \times V_\beta, z_{\alpha\beta})\}$ is a differentiable structure on $M \times N$ in which the projections $\pi_1: M \times N \to M$ and

$\pi_2: M \times N \to N$ are differentiable. With this differentiable structure $M \times N$ is called the _product manifold_ of $M$ with $N$ .

(b) Show that the product manifold $S^1 \times \dots \times S^1$ of $n$ circles $S^1$ , where $S^1 \subset \mathbb{R}^2$ has the usual differentiable structure, is diffeomorphic to the $n$ -torus $T^n$ of example 4.9 (a).

2. Prove that the tangent bundle of a differentiable manifold $M$ is orientable (even though $M$ may not be).

3. Prove that:

(a) a regular surface $S \subset \mathbb{R}^3$ is an orientable manifold if and only if there exists a differentiable mapping of $N: S \to \mathbb{R}^3$ with $N(p) \perp T_p(S)$ and $|N(p)| = 1$ , for all $p \in S$ .

(b) the Möbius band (Example 4.9 (b)) is non-orientable.

4. Show that the projective plane $P^2(\mathbb{R})$ is non-orientable.  
   _Hint:_ Prove that if the manifold $M$ is orientable, then any open subset of $M$ is an orientable submanifold. Observe that $P^2(\mathbb{R})$ contains an open subset diffeomorphic to a Möbius band, which is non-orientable.

5. (_Embedding of $P^2(\mathbb{R})$ in $\mathbb{R}^4$_ ). Let $F: \mathbb{R}^3 \to \mathbb{R}^4$ be given by

$$F(x, y, z) = (x^2 - y^2, xy, xz, yz), \quad (x, y, z) = p \in \mathbb{R}^3.$$

Let $S^2 \subset \mathbb{R}^3$ be the unit sphere with the origin $0 \in \mathbb{R}^3$ . Observe that the restriction $\varphi = F|_{S^2}$ is such that $\varphi(p) = \varphi(-p)$ , and consider the mapping $\tilde{\varphi}: P^2(\mathbb{R}) \to \mathbb{R}^4$ given by

$$\tilde{\varphi}([p]) = \varphi(p), \quad [p] = \text{equiv. class of } p = \{p, -p\}.$$

Prove that:

(a) $\tilde{\varphi}$ is an immersion.

(b) $\tilde{\varphi}$ is injective; together with (a) and the compactness of $P^2(\mathbb{R})$ , this implies that $\tilde{\varphi}$ is an embedding.

6. (_Embedding of the Klein bottle in $\mathbb{R}^4$_ ). Show that the mapping $G: \mathbb{R}^2 \to \mathbb{R}^4$ given by

$$G(x, y) = \left( (r \cos y + a) \cos x, (r \cos y + a) \sin x, \right. \\ \left. r \sin y \cos \frac{x}{2}, r \sin y \sin \frac{x}{2} \right), \quad (x, y) \in \mathbb{R}^2$$

induces an embedding of the Klein bottle (Example 4.9 (b)) into $\mathbb{R}^4$ .

7. (Infinite Möbius band).  
   Let $C = \{(x, y, z) \in \mathbb{R}^3; x^2 + y^2 = 1\}$ be a right circular cylinder, and let $A: C \to C$ be the symmetry with respect to the origin $0 \in \mathbb{R}^3$ , that is, $A(x, y, z) = (-x, -y, -z)$ . Let $M$ be the quotient space of $C$ with respect to the equivalence relation $p \sim A(p)$ , and let $\pi: C \to M$ be the projection $\pi(p) = \{p, A(p)\}$ .

1. Show that it is possible to give $M$ a differentiable structure such that $\pi$ is a local diffeomorphism.
1. Prove that $M$ is non-orientable.

1. Let $M_1$ and $M_2$ be differentiable manifolds. Let $\varphi: M_1 \to M_2$ be a local diffeomorphism. Prove that if $M_2$ is orientable, then $M_1$ is orientable.

1. Let $G \times M \to M$ be a properly discontinuous action of a group $G$ on a differentiable manifold $M$ .

1. Prove that the manifold $M/G$ (Example 4.8) is orientable if and only if there exists an orientation of $M$ that is preserved by all the diffeomorphisms of $G$ .
1. Use (a) to show that the projective plane $P^2(\mathbb{R})$ , the Klein bottle and the Möbius band are non-orientable.
1. Prove that $P^n(\mathbb{R})$ is orientable if and only if $n$ is odd.

1. Show that the topology of the differentiable manifold $M/G$ of Example 4.8 is Hausdorff if and only if the following condition holds: given two non-equivalent points $p_1, p_2 \in M$ , there exist neighborhoods $U_1, U_2$ of $p_1$ and $p_2$ , respectively, such that $U_1 \cap gU_2 = \emptyset$ for all $g \in G$ .

1. Let us consider the two following differentiable structures on the real line $\mathbb{R}$ : $(\mathbb{R}, x_1)$ , where $x_1: \mathbb{R} \to \mathbb{R}$ is given by $x_1(x) = x$ , $x \in \mathbb{R}$ ; $(\mathbb{R}, x_2)$ , where $x_2: \mathbb{R} \to \mathbb{R}$ is given by $x_2(x) = x^3$ , $x \in \mathbb{R}$ . Show that:

1. the identity mapping $i: (\mathbb{R}, x_1) \to (\mathbb{R}, x_2)$ is not a diffeomorphism; therefore, the maximal structures determined by $(\mathbb{R}, x_1)$ and $(\mathbb{R}, x_2)$ are distinct.
1. the mapping $f: (\mathbb{R}, x_1) \to (\mathbb{R}, x_2)$ given by $f(x) = x^3$ is a diffeomorphism; that is, even though the differentiable

structure $(\mathbf{R}, \mathbf{x}_1)$ and $(\mathbf{R}, \mathbf{x}_2)$ are distinct, they determine diffeomorphic differentiable manifolds.

12. _(The orientable double covering)._ Let $M^n$ be a non-orientable differentiable manifold. For each $p \in M$ , consider the set $B$ of bases of $T_p M$ and say that two bases are equivalent if they are related by a matrix with positive determinant. This is an equivalence relation and separates $B$ into two disjoint sets. Let $\mathcal{O}_p$ be the quotient space of $B$ with respect to this equivalence relation. $O_p \in \mathcal{O}_p$ will be called an _orientation_ of $T_p M$ . Let $\overline{M}$ be the set

$$\overline{M} = \{(p, O_p); p \in M, O_p \in \mathcal{O}_p\}.$$

Let $\{(U_\alpha, \mathbf{x}_\alpha)\}$ be a maximal differentiable structure on $M$ , and define $\overline{\mathbf{x}}_\alpha: U_\alpha \to \overline{M}$ by

$$\overline{\mathbf{x}}_\alpha(u_1^\alpha, \dots, u_n^\alpha) = (\mathbf{x}_\alpha(u_1^\alpha, \dots, u_n^\alpha), [\frac{\partial}{\partial u_1^\alpha}, \dots, \frac{\partial}{\partial u_n^\alpha}]),$$

where $(u_1^\alpha, \dots, u_n^\alpha) \in U_\alpha$ and $[\frac{\partial}{\partial u_1^\alpha}, \dots, \frac{\partial}{\partial u_n^\alpha}]$ denotes the element of $\mathcal{O}_p$ determined by the basis $\{\frac{\partial}{\partial u_1^\alpha}, \dots, \frac{\partial}{\partial u_n^\alpha}\}$ . Prove that:

1. $\{U_\alpha, \overline{\mathbf{x}}_\alpha\}$ is a differentiable structure on $\overline{M}$ and that the manifold $\overline{M}$ so obtained is orientable.
2. The mapping $\pi: \overline{M} \to M$ given by $\pi(p, O_p) = p$ is differentiable and surjective. In addition, each $p \in M$ has a neighborhood $U \subset M$ such that $\pi^{-1}(U) = V_1 \cup V_2$ , where $V_1$ and $V_2$ are disjoint open sets in $\overline{M}$ and $\pi$ restricted to each $V_i$ , $i = 1, 2$ , is a diffeomorphism onto $U$ . For this reason, $\overline{M}$ is called the _orientable double cover of $M$_ .
3. The sphere $S^2$ is the orientable double cover of $P^2(\mathbf{R})$ and the torus $T^2$ is the orientable double cover of the Klein bottle $K$ .
