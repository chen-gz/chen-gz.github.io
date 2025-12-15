---
title: Introduction 
---

The notion of a differentiable manifold is necessary for extending the methods of differential calculus to spaces more general than  $\mathbb{R}^n$ . The first example of a manifold, accessible to our experience, is a regular surface in  $\mathbb{R}^3$ . Recall that a subset  $S \subset \mathbb{R}^3$  is a regular surface if, for every point  $p \in S$ , there exist a neighborhood  $V$  of  $p$  in  $\mathbb{R}^3$  and a mapping  $\mathbf{x}: U \subset \mathbb{R}^2 \to V \cap S$  of an open set  $U \subset \mathbb{R}^2$  onto  $V \cap S$ , such that:

1. $\mathbf{x}$  is a differentiable homeomorphism;
2. The differential  $(d\mathbf{x})_q: \mathbb{R}^2 \to \mathbb{R}^3$  is injective for all  $q \in U$  (See M. do Carmo, [dC 2], Chap. 2).

The mapping  $\mathbf{x}$  is called a parametrization of  $S$  at  $p$ . The most important consequence of the definition of regular surface is the fact that the transition from one parametrization to another is a diffeomorphism (M. do Carmo, [dC 2], §2.3. Cf. also Example 4.2 below). More precisely, if  $\mathbf{x}_\alpha: U_\alpha \to S$  and  $\mathbf{x}_\beta: U_\beta \to S$  are two parametrizations such that  $\mathbf{x}_\alpha(U_\alpha) \cap \mathbf{x}_\beta(U_\beta) = W \neq \emptyset$ , then the mappings  $\mathbf{x}_\beta^{-1} \circ \mathbf{x}_\alpha: \mathbf{x}_\alpha^{-1}(W) \to \mathbb{R}^2$  and  $\mathbf{x}_\alpha^{-1} \circ \mathbf{x}_\beta: \mathbf{x}_\beta^{-1}(W) \to \mathbb{R}^2$  are differentiable.

Thus, a regular surface is intuitively a union of open sets of  $\mathbb{R}^2$ , organized in such a way that when two such open sets intersect the change from one to the other can be made in a differentiable manner. As a consequence, it makes sense to speak of differentiable functions on a regular surface and, in that situation, apply the methods of differential calculus.

The major defect of the definition of regular surface is its dependence on  $\mathbb{R}^3$ . Indeed, the natural idea of a surface is of a set which is two-dimensional (in a certain sense) and to which the differential calculus of  $\mathbb{R}^2$  can be applied; the unnecessary presence of  $\mathbb{R}^3$  is simply an imposition of our physical nature.

Although the necessity of an abstract idea of surface (that is, without involving the ambient space) is clear since Gauss ([Ga], p. 21), it was nearly a century before such an idea attained the definitive form that we present here. One of the reasons for this delay is that the fundamental role of the change of parameters was not well understood, even for surfaces in  $\mathbb{R}^3$  (cf. Rem. 2.2 of the next section).

The explicit definition of a differentiable manifold will be presented in the next section. Since there is no advantage in restricting ourselves to two dimensions, the definition will be given for an arbitrary dimension  $n$ . Differentiable always signifies of class  $C^\infty$ .
