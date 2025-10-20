---
type: docs
---
# Chapter 1: Abstract Integration
Toward the end of the nineteenth century it became clear to many mathematicians that the Riemann integral (about which one learns in calculus courses) should be replaced by some other type of integral, more general and more flexible, better suited for dealing with limit processes. Among the attempts made in this direction, the most notable ones were due to Jordan, Borel, W. H. Young, and Lebesgue. It was Lebesgue's construction which turned out to be the most successful.

In brief outline, here is the main idea: The Riemann integral of a function $f$ over an interval $[a, b]$ can be approximated by sums of the form

$$\sum_{i=1}^{n} f(t_i)m(E_i)$$

where $E_1, \dots, E_n$ are disjoint intervals whose union is $[a, b]$, $m(E_i)$ denotes the length of $E_i$, and $t_i \in E_i$ for $i = 1, \dots, n$. Lebesgue discovered that a completely satisfactory theory of integration results if the sets $E_i$ in the above sum are allowed to belong to a larger class of subsets of the line, the so-called “measurable sets,” and if the class of functions under consideration is enlarged to what he called “measurable functions.” The crucial set-theoretic properties involved are the following: The union and the intersection of any countable family of measurable sets are measurable; so is the complement of every measurable set; and, most important, the notion of “length” (now called “measure”) can be extended to them in such a way that

$$m(E_1 \cup E_2 \cup E_3 \cup \dots) = m(E_1) + m(E_2) + m(E_3) + \dots$$

for every countable collection $\{E_i\}$ of pairwise disjoint measurable sets. This property of $m$ is called *countable additivity*.

The passage from Riemann's theory of integration to that of Lebesgue is a process of completion (in a sense which will appear more precisely later). It is of the same fundamental importance in analysis as is the construction of the real number system from the rationals.

The above-mentioned measure $m$ is of course intimately related to the geometry of the real line. In this chapter we shall present an abstract (axiomatic) version of the Lebesgue integral, relative to any countably additive measure on any set. (The precise definitions follow.) This abstract theory is not in any way more difficult than the special case of the real line; it shows that a large part of integration theory is independent of any geometry (or topology) of the underlying space; and, of course, it gives us a tool of much wider applicability. The existence of a large class of measures, among them that of Lebesgue, will be established in Chap. 2.

## Set-Theoretic Notations and Terminology

1.1 Some sets can be described by listing their members. Thus $\{x_1, \dots, x_n\}$ is the set whose members are $x_1, \dots, x_n$; and $\{x\}$ is the set whose only member is $x$. More often, sets are described by properties. We write

$$\{x: P\}$$

for the set of all elements $x$ which have the property $P$. The symbol $\emptyset$ denotes the empty set. The words *collection*, *family*, and *class* will be used synonymously with *set*.

We write $x \in A$ if $x$ is a member of the set $A$; otherwise $x \notin A$. If $B$ is a subset of $A$, i.e., if $x \in B$ implies $x \in A$, we write $B \subset A$. If $B \subset A$ and $A \subset B$, then $A = B$. If $B \subset A$ and $A \neq B$, $B$ is a *proper* subset of $A$. Note that $\emptyset \subset A$ for every set $A$.

$A \cup B$ and $A \cap B$ are the union and intersection of $A$ and $B$, respectively. If $\{A_\alpha\}$ is a collection of sets, where $\alpha$ runs through some index set $I$, we write

$$\bigcup_{\alpha \in I} A_\alpha \quad \text{and} \quad \bigcap_{\alpha \in I} A_\alpha$$

for the union and intersection of $\{A_\alpha\}$:

$$\bigcup_{\alpha \in I} A_\alpha = \{x: x \in A_\alpha \text{ for at least one } \alpha \in I\}$$

$$\bigcap_{\alpha \in I} A_\alpha = \{x: x \in A_\alpha \text{ for every } \alpha \in I\}.$$ 

If $I$ is the set of all positive integers, the customary notations are

$$\bigcup_{n=1}^{\infty} A_n \quad \text{and} \quad \bigcap_{n=1}^{\infty} A_n.$$

If no two members of $\{A_\alpha\}$ have an element in common, then $\{A_\alpha\}$ is a disjoint collection of sets.

We write $A - B = \{x: x \in A, x \notin B\}$, and denote the complement of $A$ by $A^c$ whenever it is clear from the context with respect to which larger set the complement is taken.

The cartesian product $A_1 \times \cdots \times A_n$ of the sets $A_1, \dots, A_n$ is the set of all ordered $n$-tuples $(a_1, \dots, a_n)$ where $a_i \in A_i$ for $i = 1, \dots, n$.

The real line (or real number system) is $R^1$, and

$$R^k = R^1 \times \cdots \times R^1 \quad (k \text{ factors}).$$

The extended real number system is $R^1$ with two symbols, $\infty$ and $-\infty$, adjoined, and with the obvious ordering. If $-\infty \le a \le b \le \infty$, the interval $[a, b]$ and the segment $(a, b)$ are defined to be

$$[a, b] = \{x: a \le x \le b\}, \quad (a, b) = \{x: a < x < b\}.$$ 

We also write

$$[a, b) = \{x: a \le x < b\}, \quad (a, b] = \{x: a < x \le b\}.$$ 

If $E \subset [-\infty, \infty]$ and $E \ne \emptyset$, the least upper bound (supremum) and greatest lower bound (infimum) of $E$ exist in $[-\infty, \infty]$ and are denoted by $\sup E$ and $\inf E$.

Sometimes (but only when $\sup E \in E$) we write $\max E$ for $\sup E$.

The symbol

$$f: X \to Y$$

means that $f$ is a function (or mapping or transformation) of the set $X$ into the set $Y$; i.e., $f$ assigns to each $x \in X$ an element $f(x) \in Y$. If $A \subset X$ and $B \subset Y$, the image of $A$ and the inverse image (or pre-image) of $B$ are

$$f(A) = \{y: y = f(x) \text{ for some } x \in A\},$$

$$f^{-1}(B) = \{x: f(x) \in B\}.$$ 

Note that $f^{-1}(B)$ may be empty even when $B \ne \emptyset$.

The domain of $f$ is $X$. The range of $f$ is $f(X)$.

If $f(X) = Y$, $f$ is said to map $X$ onto $Y$.

We write $f^{-1}(y)$, instead of $f^{-1}(\{y\})$, for every $y \in Y$. If $f^{-1}(y)$ consists of at most one point, for each $y \in Y$, $f$ is said to be one-to-one. If $f$ is one-to-one, then $f^{-1}$ is a function with domain $f(X)$ and range $X$.

If $f: X \to [-\infty, \infty]$ and $E \subset X$, it is customary to write $\sup_{x \in E} f(x)$ rather than $\sup f(E)$.

If $f: X \to Y$ and $g: Y \to Z$, the composite function $g \circ f: X \to Z$ is defined by the formula

$$(g \circ f)(x) = g(f(x)) \quad (x \in X).$$

If the range of $f$ lies in the real line (or in the complex plane), then $f$ is said to be a *real function* (or a *complex function*). For a complex function $f$, the statement "$f \ge 0$" means that all values $f(x)$ of $f$ are nonnegative real numbers.

## The Concept of Measurability

The class of measurable functions plays a fundamental role in integration theory. It has some basic properties in common with another most important class of functions, namely, the continuous ones. It is helpful to keep these similarities in mind. Our presentation is therefore organized in such a way that the analogies between the concepts *topological space*, *open set*, and *continuous function*, on the one hand, and *measurable space*, *measurable set*, and *measurable function*, on the other, are strongly emphasized. It seems that the relations between these concepts emerge most clearly when the setting is quite abstract, and this (rather than a desire for mere generality) motivates our approach to the subject.

**1.2 Definition**
{{% details title="拓扑名字的解释" closed="true" %}}
{{< callout >}}
“拓扑”这个名称源于希腊语 $\tau \acute{o} \pi o \varsigma$（*tópos*），意思是**地方**或**位置**，以及 $-\lambda o \gamma \acute{i} \alpha$（*-logía*），意思是**研究**。

因此，**拓扑学的字面意思就是“对地方/位置的研究”**。

在数学上，拓扑学（或称为“橡皮泥几何学”）是研究空间在连续变形（如拉伸、扭曲，但不允许撕裂或粘合）下保持不变的性质。

您在页面上看到的**抽象拓扑**定义（即对开集集合 $\tau$ 的三个性质要求），是现代拓扑学的核心。它将我们从熟悉的欧几里得空间（如直线、平面）中关于“近”（靠近）和“连续”的直觉抽象出来，形成了一套可以在任何抽象集合 $X$ 上定义的规则。

它被称为“拓扑”正是因为它提供了一种最一般的方法来描述一个集合 $X$ 上的**“结构”**，允许我们谈论集合 $X$ 中哪些子集是“开放的”，从而在不依赖距离（metric）的情况下讨论**连续性**、**收敛性**和**连通性**等**空间属性**。

* **开集**（Open sets）是定义拓扑的基本元素，它们在某种意义上代表了集合中的“邻域”概念。
* 通过开集的这三条**公理**（空集和全集、有限交集、任意并集），数学家们能够在最广泛的背景下研究这些与“位置”和“邻近”相关的概念。

{{< /callout >}}
{{% /details %}}

(a) A collection $\tau$ of subsets of a set $X$ is said to be a *topology* in $X$ if $\tau$ has the following three properties:

1. $\emptyset \in \tau$ and $X \in \tau$.
2. If $V_i \in \tau$ for $i = 1, \dots, n$, then $V_1 \cap V_2 \cap \dots \cap V_n \in \tau$.
3. If $\{V_\alpha\}$ is an arbitrary collection of members of $\tau$ (finite, countable, or uncountable), then $\bigcup_\alpha V_\alpha \in \tau$.

(b) If $\tau$ is a topology in $X$, then $X$ is called a *topological space*, and the members of $\tau$ are called the *open sets* in $X$.

(c) If $X$ and $Y$ are topological spaces and if $f$ is a mapping of $X$ into $Y$, then $f$ is said to be *continuous* provided that $f^{-1}(V)$ is an open set in $X$ for every open set $V$ in $Y$.

{{% details title="Examples" closed="true" %}}
{{< callout >}}
我们以最常见、最直观的两个空间为例：

### 1. 欧几里得空间 $\mathbb{R}$ 上的**标准拓扑**

这是我们在实数线上最熟悉的拓扑。**开集**的定义是：任何一个开区间 $(a, b)$，以及任意数量（有限、可数或不可数）的开区间的并集。

| 性质 | 抽象拓扑要求 | 欧几里得空间 $\mathbb{R}$ 中的例子 |
| :--- | :--- | :--- |
| **有限交集** 必须是开集 | **有限**个开集的交集 $\in \tau$ | **两个开集的交集：** $(1, 5) \cap (3, 7) = (3, 5)$。  $(3, 5)$ 仍然是一个开区间，是开集。 |
| **任意并集** 必须是开集 | **任意**个开集的并集 $\in \tau$ | **可数个并集：** $\bigcup_{n=1}^\infty (-n, n) = (-\infty, \infty) = \mathbb{R}$。 $\mathbb{R}$ 是全集，是开集。 |
| **可数交集** **不**要求是开集 | **不**要求可数交集 $\in \tau$ | **可数个交集（反例）：** $\bigcap_{n=1}^\infty \left(-\frac{1}{n}, \frac{1}{n}\right) = \{0\}$。 单点集 $\{0\}$ **不是**开集，而是一个闭集。 |

### 2. 离散拓扑 (Discrete Topology)

在一个集合 $X$ 上，如果**所有子集**都是开集，那么这个拓扑被称为**离散拓扑**。

在这种情况下，拓扑 $\tau$ 就是 $X$ 的**幂集** $\mathcal{P}(X)$。

| 性质 | 抽象拓扑要求 | 离散拓扑 $X$ 中的体现 |
| :--- | :--- | :--- |
| **有限交集** | 必须是开集 | 任何两个子集 $A, B \subset X$ 的交集 $A \cap B$ 必然是 $X$ 的一个子集，因此它**总是**开集。 |
| **任意并集** | 必须是开集 | 任意数量的子集 $\bigcup A_\alpha$ 的并集必然是 $X$ 的一个子集，因此它**总是**开集。 |
| **单点集** | 任意并集 | 在离散拓扑中，任何单点集 $\{x\}$ 都是开集，因为它是 $X$ 的一个子集。 |

### 3. 平凡拓扑 (Trivial Topology)

在一个集合 $X$ 上，如果只有**空集** $\emptyset$ 和**全集** $X$ 被定义为开集，那么这个拓扑被称为**平凡拓扑**。

在这种情况下，拓扑 $\tau = \{\emptyset, X\}$。

| 性质 | 抽象拓扑要求 | 平凡拓扑 $X$ 中的体现 |
| :--- | :--- | :--- |
| **有限交集** | 必须是开集 | $\emptyset \cap X = \emptyset$, $\emptyset \cap \emptyset = \emptyset$, $X \cap X = X$。结果都在 $\tau$ 中。 |
| **任意并集** | 必须是开集 | $\emptyset \cup X = X$, $\emptyset \cup \emptyset = \emptyset$, $X \cup X = X$。结果都在 $\tau$ 中。 |
| **结论** | - | 这是最“粗糙”的拓扑，它限制了你对集合 $X$ 进行“邻近”研究的能力。 |

{{< /callout >}}
{{% /details %}}

**1.3 Definition**

(a) A collection $\mathcal{M}$ of subsets of a set $X$ is said to be a *$\sigma$-algebra* in $X$ if $\mathcal{M}$ has the following properties:

1. $X \in \mathcal{M}$.
2. If $A \in \mathcal{M}$, then $A^c \in \mathcal{M}$, where $A^c$ is the complement of $A$ relative to $X$.
3. If $A = \bigcup_{n=1}^\infty A_n$ and if $A_n \in \mathcal{M}$ for $n = 1, 2, 3, \dots$, then $A \in \mathcal{M}$.

(b) If $\mathcal{M}$ is a $\sigma$-algebra in $X$, then $X$ is called a *measurable space*, and the members of $\mathcal{M}$ are called the *measurable sets* in $X$.

(c) If $X$ is a measurable space, $Y$ is a topological space, and $f$ is a mapping of $X$ into $Y$, then $f$ is said to be *measurable* provided that $f^{-1}(V)$ is a measurable set in $X$ for every open set $V$ in $Y$.

It would perhaps be more satisfactory to apply the term "measurable space" to the ordered pair $(X, \mathcal{M})$, rather than to $X$. After all, $X$ is a set, and $X$ has not been changed in any way by the fact that we now also have a $\sigma$-algebra of its subsets in mind. Similarly, a topological space is an ordered pair $(X, \tau)$. But if this sort of thing were systematically done in all mathematics, the terminology would become awfully cumbersome. We shall discuss this again at somewhat greater length in Sec. 1.21.

{{% details title="Difference between 1.2 and 1.3" closed="true" %}}
{{< callout >}}
**$\sigma$-代数（$\sigma$-algebra）** 和 **拓扑（Topology）** 的区别。这是抽象数学中两个非常重要的概念，它们各自为不同的数学分支（**测度论/积分论** 和 **拓扑学**）提供基础。

最大的区别在于它们对 **并集** 和 **交集** 的要求，以及它们引入的核心概念不同：

| 特征 | 拓扑（Topology $\tau$） | $\sigma$-代数（$\sigma$-algebra $M$） |
| :--- | :--- | :--- |
| **主要用途** | 定义**开集**，研究**连续性**、**收敛性**、**连通性**。 | 定义**可测集**，研究**测度（Measure）**和**积分（Integration）**。 |
| **核心概念** | **开集**（Open Set） | **可测集**（Measurable Set） |
| **任意并集** | 必须封闭（**任意**个开集的并集仍是开集）。 | **不**要求封闭。 |
| **可数并集** | 必须封闭（因为“任意”包含“可数”）。 | 必须封闭（**可数**个可测集的并集仍是可测集）。 |
| **有限交集** | 必须封闭（**有限**个开集的交集仍是开集）。 | 必须封闭（因为 $\sigma$-代数对可数并集和补集封闭，故对有限交集也封闭）。 |
| **可数交集** | **不**要求封闭（开集的可数交集可能不是开集，例如 $\bigcap_{n=1}^{\infty} (-1/n, 1/n) = \{0\}$）。 | 必须封闭（因为 $\sigma$-代数对**补集**和**可数并集**封闭，故对可数交集也封闭，例如 $\bigcap A_n = (\bigcup A_n^c)^c$）。 |
| **补集** | **不**要求封闭（开集的补集是闭集，不一定是开集）。 | 必须封闭（可测集的补集仍是可测集）。 |

**1. 拓扑（Topology $\tau$）** (1.2 Definition)
   * **并集强势：** 对**任意**并集封闭（性质 3）。
   * **交集弱势：** 只对**有限**交集封闭（性质 2）。
   * **缺少补集：** 不要求对补集封闭。

**2. $\sigma$-代数（$\sigma$-algebra $M$）** (1.3 Definition)
   * **并集限制：** 只对**可数**并集封闭（性质 3）。
   * **补集要求：** 必须对补集封闭（性质 2）。
   * **可数交集：** 正是由于对补集和可数并集封闭，可以推导出它也对**可数交集**封闭（见 1.6 Comments (c)）。

总而言之：

* **拓扑**关心的是 **“近”** 和 **“连续”** 的抽象概念，并集是其核心操作。
* **$\sigma$-代数**关心的是 **“可测”** 和 **“测度”** 的抽象概念，它对**可数**并集和**补集**的要求，使其能够承载一个定义良好的**可加性**的**测度**。

在测度论中，$\sigma$-代数通常包含一个空间中的所有**开集**（通过 **Borel $\sigma$-代数** 的概念，如 1.11 Borel Sets 中所述），从而将拓扑结构纳入积分理论的框架中。

{{< /callout >}}
{{% /details %}}

**1.4 Comments on Definition 1.2** The most familiar topological spaces are the *metric spaces*. We shall assume some familiarity with metric spaces but shall give the basic definitions, for the sake of completeness.

A *metric space* is a set $X$ in which a *distance function* (or *metric*) $\rho$ is defined, with the following properties:

(a) $0 \le \rho(x, y) < \infty$ for all $x$ and $y \in X$.  
(b) $\rho(x, y) = 0$ if and only if $x = y$.  
(c) $\rho(x, y) = \rho(y, x)$ for all $x$ and $y \in X$.  
(d) $\rho(x, y) \le \rho(x, z) + \rho(z, y)$ for all $x, y$, and $z \in X$.

Property (d) is called the *triangle inequality*.

If $x \in X$ and $r \ge 0$, the *open ball* with center at $x$ and radius $r$ is the set $\{y \in X : \rho(x, y) < r\}$.

If $X$ is a metric space and if $\tau$ is the collection of all sets $E \subset X$ which are arbitrary unions of open balls, then $\tau$ is a topology in $X$. This is not hard to verify; the intersection property depends on the fact that if $x \in B_1 \cap B_2$, where $B_1$ and $B_2$ are open balls, then $x$ is the center of an open ball $B \subset B_1 \cap B_2$. We leave this as an exercise.

{{% details title="度量$\rightarrow$拓扑" closed="true" %}}
{{< callout >}}
定义：设 $\tau$ 是度量空间 $X$ 中所有开集构成的集合族（即所有开球的任意并集），则 $(X, \tau)$ 构成一个拓扑空间。这个结论可以通过验证 $\tau$ 满足拓扑的三个性质来证明：
1. $\emptyset, X \in \tau$
2. $\tau$ 中任意有限个开集的交集仍在 $\tau$ 中
3. $\tau$ 中任意（可以是无限个）开集的并集仍在 $\tau$ 中

这是从度量空间到拓扑空间的基本桥梁。
{{< /callout >}}
{{% /details %}}

For instance, in the real line $\mathbb{R}^1$ a set is open if and only if it is a union of open segments $(a, b)$. In the plane $\mathbb{R}^2$, the open sets are those which are unions of open circular discs.

Another topological space, which we shall encounter frequently, is the extended real line $[-\infty, \infty]$; its topology is defined by declaring the following sets to be open: $(a, b)$, $[-\infty, a)$, $(a, \infty]$, and any union of segments of this type.

The definition of continuity given in Sec. 1.2(c) is a global one. Frequently it is desirable to define continuity locally: A mapping $f$ of $X$ into $Y$ is said to be *continuous at the point* $x_0 \in X$ if to every neighborhood $V$ of $f(x_0)$ there corresponds a neighborhood $W$ of $x_0$ such that $f(W) \subset V$.

(A *neighborhood* of a point $x$ is, by definition, an open set which contains $x$.)

When $X$ and $Y$ are metric spaces, this local definition is of course the same as the usual epsilon-delta definition, and is equivalent to the requirement that $\lim f(x_n) = f(x_0)$ in $Y$ whenever $\lim x_n = x_0$ in $X$.

The following easy proposition relates the local and global definitions of continuity in the expected manner:

**1.5 Proposition** Let $X$ and $Y$ be topological spaces. A mapping $f$ of $X$ into $Y$ is *continuous* if and only if $f$ is *continuous at every point* of $X$.

**PROOF** If $f$ is continuous and $x_0 \in X$, then $f^{-1}(V)$ is a neighborhood of $x_0$, for every neighborhood $V$ of $f(x_0)$. Since $f(f^{-1}(V)) \subset V$, it follows that $f$ is continuous at $x_0$.

If $f$ is continuous at every point of $X$ and if $V$ is open in $Y$, every point $x \in f^{-1}(V)$ has a neighborhood $W_x$ such that $f(W_x) \subset V$. Therefore $W_x \subset f^{-1}(V)$. It follows that $f^{-1}(V)$ is the union of the open sets $W_x$, so $f^{-1}(V)$ is itself open. Thus $f$ is continuous. ////


**1.6 Comments on Definition 1.3** Let $\mathcal{M}$ be a $\sigma$-algebra in a set $X$. Referring to Properties (i) to (iii) of Definition 1.3(a), we immediately derive the following facts.

(a) Since $\emptyset = X^c$, (i) and (ii) imply that $\emptyset \in \mathcal{M}$. 
(b) Taking $A_{n+1} = A_{n+2} = \dots = \emptyset$ in (iii), we see that $A_1 \cup A_2 \cup \dots \cup A_n \in \mathcal{M}$ if $A_i \in \mathcal{M}$ for $i = 1, \dots, n$.
(c) Since

$$\bigcap_{n=1}^{\infty} A_n = \left( \bigcup_{n=1}^{\infty} A_n^c \right)^c,$$ 

 $\mathcal{M}$ is closed under the formation of countable (and also finite) intersections.
(d) Since $A - B = B^c \cap A$, we have $A - B \in \mathcal{M}$ if $A \in \mathcal{M}$ and $B \in \mathcal{M}$.

The prefix $\sigma$ refers to the fact that (iii) is required to hold for all *countable* unions of members of $\mathcal{M}$. If (iii) is required for finite unions only, then $\mathcal{M}$ is called an *algebra* of sets.

{{< callout >}}
1.6 中给出的结论其实就是可数包含了有限。这里单独给出的原因大概是为了公理的最小化和严谨性。
{{< /callout >}}


**1.7 Theorem** Let $Y$ and $Z$ be topological spaces, and let $g: Y \to Z$ be continuous.
{{< callout >}}
连续函数不改变可测性和连续性。
{{< /callout >}}

(a) If $X$ is a topological space, if $f: X \to Y$ is continuous, and if $h = g \circ f$, then $h: X \to Z$ is continuous. 
(b) If $X$ is a measurable space, if $f: X \to Y$ is measurable, and if $h = g \circ f$, then $h: X \to Z$ is measurable.

Stated informally, continuous functions of continuous functions are continuous; continuous functions of measurable functions are measurable.

**PROOF** If $V$ is open in $Z$, then $g^{-1}(V)$ is open in $Y$, and

$$h^{-1}(V) = f^{-1}(g^{-1}(V)).$$

If $f$ is continuous, it follows that $h^{-1}(V)$ is open, proving (a).

If $f$ is measurable, it follows that $h^{-1}(V)$ is measurable, proving (b). ////

**1.8 Theorem** Let $u$ and $v$ be real measurable functions on a measurable space $X$, let $\Phi$ be a continuous mapping of the plane into a topological space $Y$, and define

$$h(x) = \Phi(u(x), v(x))$$

for $x \in X$. Then $h: X \to Y$ is measurable.

**PROOF** Put $f(x) = (u(x), v(x))$. Then $f$ maps $X$ into the plane. Since $h = \Phi \circ f$, Theorem 1.7 shows that it is enough to prove the measurability of $f$.

If $R$ is any open rectangle in the plane, with sides parallel to the axes, then $R$ is the cartesian product of two segments $I_1$ and $I_2$, and

$$f^{-1}(R) = u^{-1}(I_1) \cap v^{-1}(I_2),$$

which is measurable, by our assumption on $u$ and $v$. Every open set $V$ in the plane is a countable union of such rectangles $R_i$, and since

$$f^{-1}(V) = f^{-1}\left(\bigcup_{i=1}^{\infty} R_i\right) = \bigcup_{i=1}^{\infty} f^{-1}(R_i),$$

 $f^{-1}(V)$ is measurable. ////

**1.9** Let $X$ be a measurable space. The following propositions are corollaries of Theorems 1.7 and 1.8:

(a) If $f = u + iv$, where $u$ and $v$ are real measurable functions on $X$, then $f$ is a complex measurable function on $X$.

This follows from Theorem 1.8, with $\Phi(z) = z$.

(b) If $f = u + iv$ is a complex measurable function on $X$, then $u$, $v$, and $|f|$ are real measurable functions on $X$.

This follows from Theorem 1.7, with $g(z) = \text{Re}(z)$, $\text{Im}(z)$, and $|z|$.

(c) If $f$ and $g$ are complex measurable functions on $X$, then so are $f + g$ and $fg$.

For real $f$ and $g$ this follows from Theorem 1.8, with

$$\Phi(s, t) = s + t$$

and $\Phi(s, t) = st$. The complex case then follows from (a) and (b).

(d) If $E$ is a measurable set in $X$ and if

$$\chi_E(x) = \begin{cases} 1 & \text{if } x \in E \\ 0 & \text{if } x \notin E \end{cases}$$

then $\chi_E$ is a measurable function.

This is obvious. We call $\chi_E$ the characteristic function of the set $E$. The letter $\chi$ will be reserved for characteristic functions throughout this book.

(e) If $f$ is a complex measurable function on $X$, there is a complex measurable function $\alpha$ on $X$ such that $|\alpha| = 1$ and $f = \alpha |f|$.

PROOF Let $E = \{x: f(x) = 0\}$, let $Y$ be the complex plane with the origin removed, define $\varphi(z) = z/|z|$ for $z \in Y$, and put

$$\alpha(x) = \varphi(f(x) + \chi_E(x)) \quad (x \in X).$$ 

If $x \in E$, $\alpha(x) = 1$; if $x \notin E$, $\alpha(x) = f(x)/|f(x)|$. Since $\varphi$ is continuous on $Y$ and since $E$ is measurable (why?), the measurability of $\alpha$ follows from (c), (d), and Theorem 1.7. ////

We now show that $\sigma$-algebras exist in great profusion.

**1.10 Theorem** If $\mathcal{F}$ is any collection of subsets of $X$, there exists a smallest $\sigma$-algebra $\mathcal{M}^*$ in $X$ such that $\mathcal{F} \subset \mathcal{M}^*$.

This $\mathcal{M}^*$ is sometimes called the $\sigma$-algebra generated by $\mathcal{F}$.

PROOF Let $\Omega$ be the family of all $\sigma$-algebras $\mathcal{M}$ in $X$ which contain $\mathcal{F}$. Since the collection of all subsets of $X$ is such a $\sigma$-algebra, $\Omega$ is not empty. Let $\mathcal{M}^*$ be the intersection of all $\mathcal{M} \in \Omega$. It is clear that $\mathcal{F} \subset \mathcal{M}^*$ and that $\mathcal{M}^*$ lies in every $\sigma$-algebra in $X$ which contains $\mathcal{F}$. To complete the proof, we have to show that $\mathcal{M}^*$ is itself a $\sigma$-algebra.

If $A_n \in \mathcal{M}^*$ for $n = 1, 2, 3, \dots$, and if $\mathcal{M} \in \Omega$, then $A_n \in \mathcal{M}$, so $\bigcup A_n \in \mathcal{M}$, since $\mathcal{M}$ is a $\sigma$-algebra. Since $\bigcup A_n \in \mathcal{M}$ for every $\mathcal{M} \in \Omega$, we conclude that $\bigcup A_n \in \mathcal{M}^*$. The other two defining properties of a $\sigma$-algebra are verified in the same manner. ////

**1.11 Borel Sets** Let $X$ be a topological space. By Theorem 1.10, there exists a smallest $\sigma$-algebra $\mathcal{B}$ in $X$ such that every open set in $X$ belongs to $\mathcal{B}$. The members of $\mathcal{B}$ are called the *Borel sets* of $X$.

In particular, closed sets are Borel sets (being, by definition, the complements of open sets), and so are all countable unions of closed sets and all countable intersections of open sets. These last two are called $F_\sigma$'s and $G_\delta$'s, respectively, and play a considerable role. The notation is due to Hausdorff. The letters $F$ and $G$ were used for closed and open sets, respectively, and $\sigma$ refers to union (*Summe*), $\delta$ to intersection (*Durchschnitt*). For example, every half-open interval $[a, b)$ is a $G_\delta$ and an $F_\sigma$ in $\mathbb{R}^1$.

Since $\mathcal{B}$ is a $\sigma$-algebra, we may now regard $X$ as a measurable space, with the Borel sets playing the role of the measurable sets; more concisely, we consider the measurable space $(X, \mathcal{B})$. If $f: X \to Y$ is a continuous mapping of $X$, where $Y$ is any topological space, then it is evident from the definitions that $f^{-1}(V) \in \mathcal{B}$ for every open set $V$ in $Y$. In other words, every continuous mapping of $X$ is Borel measurable.

Borel measurable mappings are often called *Borel mappings*, or *Borel functions*.

**1.12 Theorem** Suppose $\mathcal{M}$ is a $\sigma$-algebra in $X$, and $Y$ is a topological space. Let $f$ map $X$ into $Y$.

(a) If $\Omega$ is the collection of all sets $E \subset Y$ such that $f^{-1}(E) \in \mathcal{M}$, then $\Omega$ is a $\sigma$-algebra in $Y$.

(b) If $f$ is measurable and $E$ is a Borel set in $Y$, then $f^{-1}(E) \in \mathcal{M}$.

(c) If $Y = [-\infty, \infty]$ and $f^{-1}([\alpha, \infty]) \in \mathcal{M}$ for every real $\alpha$, then $f$ is measurable.

(d) If $f$ is measurable, if $Z$ is a topological space, if $g: Y \to Z$ is a Borel mapping, and if $h = g \circ f$, then $h: X \to Z$ is measurable.

Part (c) is a frequently used criterion for the measurability of real-valued functions. (See also Exercise 3.) Note that (d) generalizes Theorem 1.7(b).

PROOF (a) follows from the relations

$$f^{-1}(Y) = X,$$ 

$$f^{-1}(Y - A) = X - f^{-1}(A),$$ 

and $f^{-1}(A_1 \cup A_2 \cup \dots) = f^{-1}(A_1) \cup f^{-1}(A_2) \cup \dots$ .

To prove (b), let $\Omega$ be as in (a); the measurability of $f$ implies that $\Omega$ contains all open sets in $Y$, and since $\Omega$ is a $\sigma$-algebra, $\Omega$ contains all Borel sets in $Y$.

To prove (c), let $\Omega$ be the collection of all $E \subset [-\infty, \infty]$ such that $f^{-1}(E) \in \mathcal{M}$. Choose a real number $\alpha$, and choose $\alpha_n < \alpha$ so that $\alpha_n \to \alpha$ as $n \to \infty$. Since $(\alpha_n, \infty] \in \Omega$ for each $n$, since

$$[-\infty, \alpha) = \bigcup_{n=1}^{\infty} [-\infty, \alpha_n] = \bigcup_{n=1}^{\infty} (\alpha_n, \infty]^c,$$ 

and since (a) shows that $\Omega$ is a $\sigma$-algebra, we see that $[-\infty, \alpha) \in \Omega$. The same is then true of

$$(\alpha, \beta) = [-\infty, \beta) \cap (\alpha, \infty].$$ 

Since every open set in $[-\infty, \infty]$ is a countable union of segments of the above types, $\Omega$ contains every open set. Thus $f$ is measurable.

To prove (d), let $V \subset Z$ be open. Then $g^{-1}(V)$ is a Borel set of $Y$, and since

$$h^{-1}(V) = f^{-1}(g^{-1}(V)),$$ 

(b) shows that $h^{-1}(V) \in \mathcal{M}$.

////

{{% details title="关于d的说明" closed="true" %}}
{{< callout >}}

在定理 **1.12 (d)** 中，函数 $h = g \circ f$ 要是可测的，要求 $f: X \to Y$ 是**可测的**（measurable），而 $g: Y \to Z$ 必须是 **Borel 映射**（Borel mapping），即 $g$ 是**Borel 可测的**。

**为什么要限制 $g$ 为 Borel 映射，而不是一般的可测映射？**

这是因为 $g$ 的定义域 $Y$ 是一个**拓扑空间**，而 $f$ 的值域 $Y$ 在 $X$ 上是**可测空间**的像。具体来说：

1.  **可测函数的定义 (Definition 1.3(c)) 依赖于 $Y$ 的开集：**
    $f: X \to Y$ 是可测的，意味着对于 $Y$ 中**每个开集** $V$，其原像 $f^{-1}(V)$ 必须是 $X$ 中的**可测集**（即 $f^{-1}(V) \in M$）。

2.  **复合函数的可测性依赖于 $g$ 的原像：**
    要证明 $h = g \circ f$ 可测，我们需要证明对于 $Z$ 中**每个开集** $V$，其原像 $h^{-1}(V)$ 必须是 $X$ 中的**可测集**。
    根据复合函数的性质：
    $$h^{-1}(V) = (g \circ f)^{-1}(V) = f^{-1}(g^{-1}(V))$$

3.  **对 $g$ 的要求：**
    * 因为 $f$ 只能保证将 $Y$ 中**开集**的原像拉回到 $X$ 中的**可测集**。
    * 为了确保 $h^{-1}(V) = f^{-1}(\mathbf{g^{-1}(V)})$ 是 $X$ 中的可测集，我们必须保证 $g^{-1}(V)$ 是 $Y$ 中的一个**Borel 集**。
    * **Borel 映射的定义 (Section 1.11, 1.12(b))：** $g: Y \to Z$ 是 Borel 映射（或 Borel 可测），当且仅当对于 $Z$ 中**每个开集** $V$，其原像 $g^{-1}(V)$ 必须是 $Y$ 中的 **Borel 集**。

**结论：**

* 如果 $g$ 只是一个**一般可测映射**（即 $g^{-1}(V)$ 只是 $Y$ 中的**一般可测集**），那么 $f^{-1}(g^{-1}(V))$ 不一定在 $X$ 上是可测的。因为 $f$ 的可测性只对 $Y$ 中的**开集**（及其生成的 Borel 集）的原像有保证。
* **Borel 映射**确保了 $g^{-1}(V)$（对于 $Z$ 中的开集 $V$）是 $Y$ 中由**开集生成的 $\sigma$-代数**中的一个集合（即 Borel 集）。根据**定理 1.12(b)**，可测函数 $f$ 能够将 $Y$ 中的 Borel 集的原像拉回到 $X$ 中的**可测集**，从而证明 $h$ 是可测的。

因此，**将 $g$ 限制为 Borel 映射是确保 $g^{-1}(V)$ 是 $Y$ 的 Borel 集所必需的**，这样才能利用 $f$ 的可测性（特别是**定理 1.12(b)**）来完成证明。

非常经典的**反例**来展示，如果不要求 $g$ 是 Borel 映射（或者说，如果 $f$ 仅仅是 Lebesgue 可测，而 $g$ 也是 Lebesgue 可测，但不满足更强的条件），复合函数 $g \circ f$ 可能就不是可测的。

这个反例通常涉及到 $\mathbb{R}$ 上的 **Lebesgue 可测集 $\mathcal{L}$** 和 **Borel 可测集 $\mathcal{B}$** 之间的区别。

### 经典反例构造 (使用不可测集)

在 $\mathbb{R}$ 上，我们考虑 **Lebesgue 测度** $\mu$，对应的 $\sigma$-代数是 $\mathcal{L}$（Lebesgue 可测集）。我们知道 **Borel $\sigma$-代数** $\mathcal{B}$ 是严格包含于 $\mathcal{L}$ 的 ($\mathcal{B} \subsetneq \mathcal{L}$)。

我们选取一个**非 Lebesgue 可测集** $E \subset \mathbb{R}$ (例如著名的 **Vitali 集**)。

现在我们来构造函数 $f$ 和 $g$：

1.  **构造 $f: \mathbb{R} \to \mathbb{R}$ (可测函数):**
    我们希望 $f$ 是一个（在 $(\mathbb{R}, \mathcal{L})$ 上）可测的函数，并且它的值域能够帮助我们“隔离”出 $E$。
    
    选择一个连续的、严格递增的函数 $\Psi: \mathbb{R} \to \mathbb{R}$，它的逆函数 $\Psi^{-1}$ 也是连续的（因此是 **Borel 映射**，进而也是 Lebesgue 可测的）。
    
    * **例：** 可以利用 **Cantor 函数** $\phi$ 构造 $\Psi(x) = x + \phi(x)$。$\Psi$ 是连续严格递增的，将 $[0, 1]$ 映射到 $[0, 2]$。我们可以将 $\Psi$ 推广到整个 $\mathbb{R}$ 上，使其逆函数 $\Psi^{-1}$ 仍然是连续的。
    
    设 $A = \Psi(E)$。由于 $\Psi^{-1}$ 是连续函数（因此是 Borel 映射），我们有：
    $$(\Psi^{-1})^{-1}(E) = \Psi(E) = A$$
    
    我们知道 $A$ 几乎处处为零（因为它在 $[0, 2]$ 内，且 $\mu(A)=1$ 的情况会导致 $E$ 可测，因此 $\mu(A)$ 必须是 $1$ 或 $\mu(A) = 0$ 且 $\mu^*(A)>0$）。**关键的一点是：** $\Psi$ 的构造保证了存在一个 **Lebesgue 可测集** $A \subset \mathbb{R}$，其原像 $\Psi^{-1}(A)$ 是**非 Lebesgue 可测集** $E$。
    
    我们定义 $f = \Psi^{-1}$。
    * **$f$ 的性质：** $f$ 是**连续函数**，因此 $f$ 是 **Borel 映射** (即 $f^{-1}(\text{Borel Set}) = \text{Borel Set}$)，进而也是 **Lebesgue 可测函数**（因为 $\mathcal{B} \subset \mathcal{L}$）。

2.  **构造 $g: \mathbb{R} \to \mathbb{R}$ (可测函数):**
    我们定义 $g$ 为集 $A$ 的**示性函数 (characteristic function)**:
    $$g(x) = \chi_A(x) = \begin{cases} 1 & \text{if } x \in A \\ 0 & \text{if } x \notin A \end{cases}$$
    * **$g$ 的性质：** $A$ 是一个 Lebesgue 可测集 ($\mathcal{L}$ 中的元素)。示性函数 $g$ 是可测的，当且仅当它的定义集 $A$ 是可测的。所以 $g$ 是 **Lebesgue 可测函数** (在 $(\mathbb{R}, \mathcal{L})$ 上)。

3.  **计算复合函数 $h = g \circ f$:**
    $$h(x) = (g \circ f)(x) = g(f(x)) = \chi_A(f(x))$$
    
    我们检查 $h$ 的可测性。对于开集 $V = (1/2, 3/2) \subset \mathbb{R}$，我们有：
    $$\begin{align*} h^{-1}(V) &= \{x \in \mathbb{R} : h(x) \in (1/2, 3/2)\} \\ &= \{x \in \mathbb{R} : \chi_A(f(x)) = 1\} \\ &= \{x \in \mathbb{R} : f(x) \in A\} \\ &= f^{-1}(A) \\ &= \Psi(A) \\ &= E \end{align*}$$
    
    因为 $h^{-1}(V) = E$ 是一个**非 Lebesgue 可测集**，所以复合函数 $h = g \circ f$ **不是 Lebesgue 可测的**。

### 总结

在这个反例中：

* $f$ 是 **Borel 可测** (甚至**连续**) 的，因此是 **Lebesgue 可测**的。
* $g$ 是 **Lebesgue 可测**的，因为 $A$ 是 Lebesgue 可测集。
* **但是 $g$ 不是 Borel 映射**，因为 $A$ 是 $\mathcal{L}$ 中的一个集合，但不是 $\mathcal{B}$ 中的 Borel 集。

这完美地说明了，Rudin (定理 1.12(d)) 中要求 $g$ 必须是 **Borel 映射** 的重要性。**如果 $g$ 只是一个一般可测映射（指 $(\mathbb{R}, \mathcal{L}) \to (\mathbb{R}, \mathcal{B})$ 可测），它可能将 Borel 集的原像拉回到一个非 Borel 可测集 $A$。** 当 $f$ 是 Borel 映射时，它能保证 $f^{-1}(A)$ 仍然可测，但在这个反例中，我们选择了一个能将 $A$ 的原像 $E$ 拉回到**非可测集**的 $f$ 的逆，从而导致了复合函数不可测。

总之，**复合函数的可测性需要 $g$ 具有“足够好”的性质来保证 $g^{-1}(V)$ 是 $f$ 可以处理的集合（即 $Y$ 中的 Borel 集）**。
* 如果 $g$ 是 **Borel 映射**，则 $g^{-1}(V)$ 是 $Y$ 中的 Borel 集，而 $f$ 作为可测函数可以将 Borel 集的原像 $f^{-1}(g^{-1}(V))$ 拉回 $X$ 中的可测集。
* 如果 $g$ 只是**一般可测**，那么 $g^{-1}(V)$ 可能是 $Y$ 中的非 Borel 可测集 $A$，而 $f$ 并不保证 $f^{-1}(A)$ 仍然是可测的。

{{< /callout >}}
{{% /details %}}

**1.13 Definition** Let $\{a_n\}$ be a sequence in $[-\infty, \infty]$, and put

$$b_k = \sup \{a_k, a_{k+1}, a_{k+2}, \dots\} \quad (k = 1, 2, 3, \dots) \quad (1)$$

and
$$\beta = \inf \{b_1, b_2, b_3, \dots\}. \quad (2)$$

We call $\beta$ the *upper limit* of $\{a_n\}$, and write
$$\beta = \limsup a_n. \quad (3)$$

The following properties are easily verified: First, $b_1 \ge b_2 \ge b_3 \ge \dots$, so that $b_k \to \beta$ as $k \to \infty$; secondly, there is a subsequence $\{a_{n_i}\}$ of $\{a_n\}$ such that $a_{n_i} \to \beta$ as $i \to \infty$, and $\beta$ is the largest number with this property.

The *lower limit* is defined analogously: simply interchange sup and inf in (1) and (2). Note that

$$\liminf a_n = -\limsup (-a_n). \quad (4)$$

If $\{a_n\}$ converges, then evidently
$$\limsup a_n = \liminf a_n = \lim a_n. \quad (5)$$

Suppose $\{f_n\}$ is a sequence of extended-real functions on a set $X$. Then $\sup_n f_n$ and $\limsup_n f_n$ are the functions defined on $X$ by

$$(\sup_n f_n)(x) = \sup_n (f_n(x)), \quad (6)$$

$$(\limsup_n f_n)(x) = \lim_{n \to \infty} \sup_n (f_n(x)). \quad (7)$$

If
$$f(x) = \lim_{n \to \infty} f_n(x), \quad (8)$$

the limit being assumed to exist at every $x \in X$, then we call $f$ the *pointwise limit* of the sequence $\{f_n\}$.

**1.14 Theorem** If $f_n: X \to [-\infty, \infty]$ is measurable, for $n = 1, 2, 3, \dots$, and

$$g = \sup_{n \ge 1} f_n, \quad h = \limsup_{n \to \infty} f_n,$$ 

then $g$ and $h$ are measurable.

**PROOF** $g^{-1}((\alpha, \infty]) = \bigcup_{n=1}^{\infty} f_n^{-1}((\alpha, \infty])$. Hence Theorem 1.12(c) implies that $g$ is measurable. The same result holds of course with inf in place of sup, and since

$$h = \inf_{k \ge 1} \left\{ \sup_{i \ge k} f_i \right\},$$ 

it follows that $h$ is measurable. ////

**Corollaries**

(a) The limit of every pointwise convergent sequence of complex measurable functions is measurable.

(b) If  $f$  and  $g$  are measurable (with range in  $[-\infty, \infty]$ ), then so are  $\max\{f, g\}$  and  $\min\{f, g\}$ . In particular, this is true of the functions

$$f^+ = \max\{f, 0\} \quad \text{and} \quad f^- = -\min\{f, 0\}.$$

**1.15 Proposition** The above functions  $f^+$  and  $f^-$  are called the positive and negative parts of  $f$ . We have  $|f| = f^+ + f^-$  and  $f = f^+ - f^-$ , a standard representation of  $f$  as a difference of two nonnegative functions, with a certain minimality property: If  $f = g - h$ ,  $g \ge 0$ , and  $h \ge 0$ , then  $f^+ \le g$  and  $f^- \le h$ .

PROOF  $f \le g$  and  $0 \le g$  clearly implies  $\max\{f, 0\} \le g$ . ////
