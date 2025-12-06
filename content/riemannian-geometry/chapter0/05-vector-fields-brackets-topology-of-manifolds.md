---
type: docs
---

## 5. Vector fields; brackets. Topology of manifolds

**5.1 DEFINITION** A **vector field** $X$ on a differentiable manifold $M$ is a correspondence that associates to each point $p \in M$ a vector $X(p) \in T_p M$ . In terms of mappings, $X$ is a mapping of $M$ into the tangent bundle $TM$ (see Example 4.1). The field is **differentiable** if the mapping $X: M \to TM$ is differentiable.

Considering a parametrization $\mathbf{x}: U \subset \mathbb{R}^n \to M$ we can write

$$\quad X(p) = \sum\_{i=1}^{n} a_i(p) \frac{\partial}{\partial x_i}, \tag{4}$$

where each $a_i: U \to \mathbb{R}$ is a function on $U$ and $\left\{\frac{\partial}{\partial x_i}\right\}$ is the basis associated to $\mathbf{x}$ , $i = 1, \dots, n$ . It is clear that $X$ is differentiable if and only if the functions $a_i$ are differentiable for some (and, therefore, for any) parametrization.

Occasionally, it is convenient to use the idea suggested by (4) and think of a vector field as a mapping $X: \mathcal{D} \to \mathcal{F}$ from the set $\mathcal{D}$ of differentiable functions on $M$ to the set $\mathcal{F}$ of functions on $M$ , defined in the following way

$$\quad (Xf)(p) = \sum_i a_i(p) \frac{\partial f}{\partial x_i}(p), \tag{5}$$

where $f$ denotes, by abuse of notation, the expression of $f$ in the parametrization $\mathbf{x}$ . Indeed, this idea of a vector as a directional derivative was precisely what was used to define the notion of tangent vector. It is easy to check that the function $Xf$ obtained in (5) does not depend on the choice of parametrization $x$ . In this context, it is immediate that $X$ is differentiable if and only if $X: \mathcal{D} \to \mathcal{D}$ , that is, $Xf \in \mathcal{D}$ for all $f \in \mathcal{D}$ .

Observe that if $\varphi: M \to M$ is a diffeomorphism, $v \in T_p M$ and $f$ is a differentiable function in a neighborhood of $\varphi(p)$ , we have

$$(d\varphi(v)f)\varphi(p) = v(f \circ \varphi)(p).$$

Indeed, let $\alpha: (-\varepsilon, \varepsilon) \to M$ be a differentiable curve with $\alpha'(0) = v$ , $\alpha(0) = p$ . Then

$$(d\varphi(v)f)\varphi(p) = \left. \frac{d}{dt} (f \circ \varphi \circ \alpha) \right|_{t=0} = v(f \circ \varphi)(p).$$

The interpretation of $X$ as an operator on $\mathcal{D}$ permits us to consider the iterates of $X$ . For example, if $X$ and $Y$ are differentiable fields on $M$ and $f: M \to \mathbb{R}$ is a differentiable function, we can consider the functions $X(Yf)$ and $Y(Xf)$ . In general, such operations do not lead to vector fields, because they involve derivatives of order higher than one. Nevertheless, we can affirm the following.

**5.2 LEMMA** Let $X$ and $Y$ be differentiable vector fields on a differentiable manifold $M$ . Then there exists a unique vector field $Z$ such that, for all $f \in \mathcal{D}$ , $Zf = (XY - YX)f$ .

_Proof._ First, we prove that if $Z$ exists, then it is unique. Assume, therefore, the existence of such a $Z$ . Let $p \in M$ and let $x: U \to M$ be a parametrization at $p$ , and let

$$X = \sum_i a_i \frac{\partial}{\partial x_i}, \quad Y = \sum_j b_j \frac{\partial}{\partial x_j}$$

be the expressions for $X$ and $Y$ in these parametrizations. Then for all $f \in \mathcal{D}$ ,

$$XYf = X\left(\sum_j b_j \frac{\partial f}{\partial x_j}\right) = \sum_{i,j} a_i \frac{\partial b_j}{\partial x_i} \frac{\partial f}{\partial x_j} + \sum_{i,j} a_i b_j \frac{\partial^2 f}{\partial x_i \partial x_j},$$

$$YXf = Y\left(\sum_i a_i \frac{\partial f}{\partial x_i}\right) = \sum_{i,j} b_j \frac{\partial a_i}{\partial x_j} \frac{\partial f}{\partial x_i} + \sum_{i,j} a_i b_j \frac{\partial^2 f}{\partial x_i \partial x_j}.$$

Therefore, $Z$ is given, in the parametrization $x$ , by

$$Zf = XYf - YXf = \sum_{i,j} \left( a_i \frac{\partial b_j}{\partial x_i} - b_i \frac{\partial a_j}{\partial x_i} \right) \frac{\partial f}{\partial x_j}$$

which proves the uniqueness of $Z$ .

To show existence, define $Z_\alpha$ in each coordinate neighborhood $x_\alpha(U_\alpha)$ of a differentiable structure $\{(U_\alpha, x_\alpha)\}$ on $M$ by the previous expression. By uniqueness, $Z_\alpha = Z_\beta$ on $x_\alpha(U_\alpha) \cap x_\beta(U_\beta) \neq \emptyset$ , which allows us to define $Z$ over the entire manifold $M$ . $\square$

The vector field $Z$ given by Lemma 5.2 is called the _bracket_ $[X, Y] = XY - YX$ of $X$ and $Y$ ; $Z$ is obviously differentiable.

The bracket operation has the following properties:

**5.3 PROPOSITION** If $X, Y$ and $Z$ are differentiable vector fields on $M$ , $a, b$ are real numbers, and $f, g$ are differentiable functions, then:

(a) $[X, Y] = -[Y, X]$ (anticommutativity),  
(b) $[aX + bY, Z] = a[X, Z] + b[Y, Z]$ (linearity),  
(c) $[[X, Y], Z] + [[Y, Z], X] + [[Z, X], Y] = 0$ (Jacobi identity),  
(d) $[fX, gY] = fg[X, Y] + fX(g)Y - gY(f)X$ .

_Proof._ (a) and (b) are immediate. In order to prove (c), it suffices to observe that, on the one hand,

$$[[X, Y], Z] = [XY - YX, Z] = XYZ - YXZ - ZXY + ZYX$$

while, on the other hand,

$$\begin{aligned} & [X, [Y, Z]] + [Y, [Z, X]] \\ & = XYZ - XZY - YZX + ZYX + YZX - YXZ - ZXY + XZY. \end{aligned}$$

Because the second members of the expressions above are equal, (c) follows using (a).

Finally, to prove (d), calculate

$$\begin{aligned} [fX, gY] &= fX(gY) - gY(fX) = fgXY + fX(g)Y \\ &- gY(f)X = fg[X, Y] + fX(g)X - gY(f)X. \square \end{aligned}$$

The bracket $[X, Y]$ can also be interpreted as a derivation of $Y$ along the “trajectories” of $X$ . To describe this interpretation, we need some preliminary ideas on differential equations.

Since a differentiable manifold is locally diffeomorphic to $\mathbb{R}^n$ , the fundamental theorem on existence, uniqueness, and dependence on initial conditions of ordinary differential equations (which is a local theorem) extends naturally to differentiable manifolds. For later use, it is convenient to state it explicitly here. The reader not familiar with differential equations can assume the statement below, which is all that we need.

Let $X$ be a differentiable vector field on a differentiable manifold $M$ , and let $p \in M$ . Then there exist a neighborhood $U \subset M$ of $p$ , an interval $(-\delta, \delta)$ , $\delta > 0$ , and a differentiable mapping $\varphi: (-\delta, \delta) \times U \to M$ such that the curve $t \to \varphi(t, q)$ , $t \in (-\delta, \delta)$ , $q \in U$ , is the unique curve which satisfies $\frac{\partial \varphi}{\partial t} = X(\varphi(t, q))$ and $\varphi(0, q) = q$ .

A curve $\alpha: (-\delta, \delta) \to M$ which satisfies the conditions $\alpha'(t) = X(\alpha(t))$ and $\alpha(0) = q$ is called a _trajectory_ of the field $X$ that passes through $q$ for $t = 0$ . The theorem above guarantees that for each point of a certain neighborhood there passes a unique trajectory of $X$ and that the mapping so obtained depends differentiably on $t$ and on the “initial condition” $q$ . It is common to use the notation $\varphi_t(q) = \varphi(t, q)$ and call $\varphi_t: U \to M$ the _local flow_ of $X$ .

The interpretation of the bracket $[X, Y]$ , mentioned above, is contained in the following proposition.

**5.4 PROPOSITION** Let $X, Y$ be differentiable vector fields on a differentiable manifold $M$ , let $p \in M$ , and let $\varphi_t$ be the local flow of $X$ in a neighborhood $U$ of $p$ . Then

$$[X, Y](p) = \lim_{t \to 0} \frac{1}{t} [Y - d\varphi_t Y](\varphi_t(p)).$$

For the proof, we need the following lemma from calculus.

**5.5 LEMMA** Let $h: (-\delta, \delta) \times U \to \mathbb{R}$ be a differentiable mapping with $h(0, q) = 0$ for all $q \in U$ . Then there exists a differentiable mapping $g: (-\delta, \delta) \times U \to \mathbb{R}$ with $h(t, q) = tg(t, q)$ ; in particular,

$$g(0, q) = \left. \frac{\partial h(t, q)}{\partial t} \right|_{t=0}.$$

_Proof of lemma._ It suffices to define, for fixed $t$ ,

$$g(t, q) = \int_0^1 \frac{\partial h(ts, q)}{\partial (ts)} ds$$

and, after changing variables, observe that

$$tg(t, q) = \int_0^t \frac{\partial h(ts, q)}{\partial(ts)} d(ts) = h(t, q).$$

_Proof of the Proposition._ Let $f$ be a differentiable function in a neighborhood of $p$ . Putting

$$h(t, q) = f(\varphi_t(q)) - f(q),$$

and applying the lemma we obtain a differentiable function $g(t, q)$ such that

$$f \circ \varphi_t(q) = f(q) + tg(t, q) \quad \text{and} \quad g(0, q) = Xf(q).$$

Accordingly

$$((d\varphi_t Y)f)(\varphi_t(p)) = (Y(f \circ \varphi_t))(p) = Yf(p) + t(Yg(t, p)).$$

Therefore

$$\begin{aligned} \lim_{t \to 0} \frac{1}{t} [Y - d\varphi_t Y] f(\varphi_t p) &= \lim_{t \to 0} \frac{(Yf)(\varphi_t p) - Yf(p)}{t} - (Yg(0, p)) \\ &= (X(Yf))(p) - (Y(Xf))(p) \\ &= ((XY - YX)f)(p) = ([X, Y]f)(p). \quad \square \end{aligned}$$

Up till now we have put no restrictions on the topology of a differentiable manifold. In fact, the natural topology of a manifold can be quite strange. In particular, it can happen that one (or both) of the following axioms not be satisfied:

A) _Hausdorff Axiom:_ Given two distinct points of $M$ there exist neighborhoods of these two points that do not intersect.

B) _Countable Basis Axiom:_ $M$ can be covered by a countable number of coordinate neighborhoods (we say then that $M$ has a _countable basis_).

Axiom A is essential for the uniqueness of limits of convergent sequences and Axiom B is essential for existence of a differentiable partition of unity, an almost indispensable tool for the study of certain questions on manifolds. (Indeed, if $M$ is connected, Axioms

A and B are equivalent to the existence of a partition of unity; see Theorem 5.6 below.)

For example, a natural question in the theory of differentiable manifolds is to know whether a given manifold can be immersed or embedded into some euclidean space. A fundamental result in this direction is the famous theorem of Whitney which states the following: _Any differentiable manifold (which is Hausdorff and has a countable basis!) of dimension $n$ can be immersed in $\mathbb{R}^{2n}$ and embedded in $\mathbb{R}^{2n+1}$ , (in fact, the theorem can be refined to $\mathbb{R}^{2n-1}$ , $n > 1$ , and $\mathbb{R}^{2n}$ , respectively). A proof of this theorem is not compatible with the intent of this introduction and can be found in M. W. Hirsch [Hi]._

For the sake of information, we mention without proof the existence theorem for partitions of unity. This requires some definitions.

Let $M$ be a differentiable manifold. A family of open sets $V_\alpha \subset M$ with $\bigcup_\alpha V_\alpha = M$ is said to be _locally finite_ if every point $p \in M$ has a neighborhood $W$ such that $W \cap V_\alpha \neq \emptyset$ for only a finite number of indices. The _support_ of a function $f: M \to \mathbb{R}$ is the closure of the set of points where $f$ is different from zero.

We say that a family $\{f_\alpha\}$ of differentiable functions $f_\alpha: M \to \mathbb{R}$ is a _differentiable partition of unity_ if:

1. For all $\alpha$ , $f_\alpha \ge 0$ and the support of $f_\alpha$ is contained in a coordinate neighborhood $V_\alpha = \mathbf{x}_\alpha(U_\alpha)$ of a differentiable structure $\{(U_\beta, \mathbf{x}_\beta)\}$ of $M$ .
2. The family $\{V_\alpha\}$ is locally finite.
3. $\sum_\alpha f_\alpha(p) = 1$ , for all $p \in M$ (this condition makes sense, because for each $p$ , $f_\alpha(p) \neq 0$ only for a finite number of indices).

It is customary to say that the partition of unity $\{f_\alpha\}$ is _subordinate to the covering_ $\{V_\alpha\}$ .

**5.6 THEOREM.** _A differentiable manifold $M$ has a differentiable partition of unity if and only if every connected component of $M$ is Hausdorff and has a countable basis._

For a proof see F. Brickell and R.S. Clark, _Differentiable Manifolds_, Van Nostrand Reinhold Co., London 1970, Chap. 3.

**5.7 REMARK.** Recall that given $p \in \mathbb{R}^n$ and an open ball $B_r(p) \subset \mathbb{R}^n$ centered at $p$ with radius $r$ , there exists a neighborhood $U$ of $p$
