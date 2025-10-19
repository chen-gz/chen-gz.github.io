# Chapter 1: Abstract Integration

Toward the end of the nineteenth century it became clear to many mathematicians that the Riemann integral (about which one learns in calculus courses) should be replaced by some other type of integral, more general and more flexible, better suited for dealing with limit processes. Among the attempts made in this direction, the most notable ones were due to Jordan, Borel, W. H. Young, and Lebesgue. It was Lebesgue's construction which turned out to be the most successful.

In brief outline, here is the main idea: The Riemann integral of a function f over an interval [a, b] can be approximated by sums of the form

$$ \sum_{i=1}^n f(t_i)m(E_i) $$

where $E_1, ..., E_n$ are disjoint intervals whose union is [a, b], $m(E_i)$ denotes the length of $E_i$, and $t_i \in E_i$ for $i = 1, ..., n$. Lebesgue discovered that a completely satisfactory theory of integration results if the sets $E_i$ in the above sum are allowed to belong to a larger class of subsets of the line, the so-called "measurable sets," and if the class of functions under consideration is enlarged to what he called "measurable functions." The crucial set-theoretic properties involved are the following: The union and the intersection of any countable family of measurable sets are measurable; so is the complement of every measurable set; and, most important, the notion of "length" (now called “measure ") can be extended to them in such a way that

$$ m(E_1 \cup E_2 \cup E_3 \cup ...) = m(E_1) + m(E_2) + m(E_3) + \cdots $$

for every countable collection ${E_i}$ of pairwise disjoint measurable sets. This property of m is called countable additivity.

The passage from Riemann's theory of integration to that of Lebesque is a process of completion (in a sense which will appear more precisely later). It is of the same fundamental importance in analysis as is the construction of the real number system from the rationals.

The above-mentioned measure m is of course intimately related to the geometry of the real line. In this chapter we shall present an abstract (axiomatic) version of the Lebesgue integral, relative to any countably additive measure on any set. (The precise definitions follow.) This abstract theory is not in any way more difficult than the special case of the real line; it shows that a large part of integration theory is independent of any geometry (or topology) of the underlying space; and, of course, it gives us a tool of much wider applicability. The existence of a large class of measures, among them that of Lebesgue, will be established in Chap. 2.

## Set-Theoretic Notations and Terminology

**1.1** Some sets can be described by listing their members. Thus ${x_1, ..., x_n}$ is the set whose members are $x_1, ..., x_n$; and ${x}$ is the set whose only member is x. More often, sets are described by properties. We write

$$ \{x: P\} $$

for the set of all elements x which have the property P. The symbol $\emptyset$ denotes the empty set. The words collection, family, and class will be used synonymously with set.

We write $x \in A$ if x is a member of the set A; otherwise $x \notin A$. If B is a subset of A, i.e., if $x \in B$ implies $x \in A$, we write $B \subset A$. If $B \subset A$ and $A \subset B$, then $A = B$. If $B \subset A$ and $A \neq B$, B is a proper subset of A. Note that $\emptyset \subset A$ for every set A.

$A \cup B$ and $A \cap B$ are the union and intersection of A and B, respectively. If ${A_\alpha}$ is a collection of sets, where $\alpha$ runs through some index set I, we write

$$ \bigcup_{\alpha \in I} A_\alpha \quad and \quad \bigcap_{\alpha \in I} A_\alpha $$

for the union and intersection of ${A_\alpha}$:

$$ \bigcup_{\alpha \in I} A_\alpha = \{x: x \in A_\alpha \text{ for at least one } \alpha \in I\} $$

$$ \bigcap_{\alpha \in I} A_\alpha = \{x: x \in A_\alpha \text{ for every } \alpha \in I\} $$

If I is the set of all positive integers, the customary notations are

$$ \bigcup_{n=1}^\infty A_n \quad and \quad \bigcap_{n=1}^\infty A_n. $$

If no two members of ${A_\alpha}$ have an element in common, then ${A_\alpha}$ is a disjoint collection of sets.

We write $A - B = \{x: x \in A, x \notin B\}$, and denote the complement of A by $A^c$ whenever it is clear from the context with respect to which larger set the complement is taken.

The cartesian product $A_1 \times \cdots \times A_n$ of the sets $A_1, ..., A_n$ is the set of all ordered n-tuples $(a_1, . . ., a_n)$ where $a_i \in A_i$ for $i = 1, ..., n$.

The real line (or real number system) is $R^1$, and

$$ R^k = R^1 \times \cdots \times R^1 \quad (k \text{ factors}). $$

The extended real number system is $R^1$ with two symbols, $\infty$ and $- \infty$, adjoined, and with the obvious ordering. If $- \infty \le a \le b \le \infty$, the interval $[a, b]$ and the segment $(a, b)$ are defined to be

$$ [a, b] = \{x: a \le x \le b\}, \quad (a, b) = \{x: a < x < b\}. $$

We also write

$$ [a, b) = \{x: a \le x < b\}, \quad (a, b] = \{x: a < x \le b\}. $$

If $E \subset [-\infty, \infty]$ and $E \neq \emptyset$, the least upper bound (supremum) and greatest lower bound (infimum) of E exist in $[-\infty, \infty]$ and are denoted by sup E and inf E.

Sometimes (but only when sup $E \in E$) we write max E for sup E.

The symbol

$$ f: X \to Y $$

means that f is a function (or mapping or transformation) of the set X into the set Y; i.e., f assigns to each $x \in X$ an element $f(x) \in Y$. If $A \subset X$ and $B \subset Y$, the image of A and the inverse image (or pre-image) of B are

$$ f(A) = \{y: y = f(x) \text{ for some } x \in A\}, $$

$$ f^{-1}(B) = \{x: f(x) \in B\}. $$

Note that $f^{-1}(B)$ may be empty even when $B \neq \emptyset$.

The domain of f is X. The range of f is $f(X)$.

If $f(X) = Y$, f is said to map X onto Y.

We write $f^{-1}(y)$, instead of $f^{-1}(\{y\})$, for every $y \in Y$. If $f^{-1}(y)$ consists of at most one point, for each $y \in Y$, f is said to be one-to-one. If f is one-to-one, then $f^{-1}$ is a function with domain $f(X)$ and range X.

If $f: X \to [-\infty, \infty]$ and $E \subset X$, it is customary to write $\sup_{x \in E} f(x)$ rather than $\sup f(E)$.

If $f: X \to Y$ and $g: Y \to Z$, the composite function $g \circ f: X \to Z$ is defined by the formula

$$ (g \circ f)(x) = g(f(x)) \quad (x \in X). $$

## The Concept of Measurability

The class of measurable functions plays a fundamental role in integration theory. It has some basic properties in common with another most important class of functions, namely, the continuous ones. It is helpful to keep these similarities in mind. Our presentation is therefore organized in such a way that the analogies between the concepts topological space, open set, and continuous function, on the one hand, and measurable space, measurable set, and measurable function, on the other, are strongly emphasized. It seems that the relations between these concepts emerge most clearly when the setting is quite abstract, and this (rather than a desire for mere generality) motivates our approach to the subject.

**1.2 Definition**

(a) A collection $\tau$ of subsets of a set X is said to be a topology in X if $\tau$ has the following three properties:

(i) $\emptyset \in \tau$ and $X \in \tau$.
(ii) If $V_i \in \tau$ for $i = 1, ..., n$, then $V_1 \cap V_2 \cap \cdots \cap V_n \in \tau$.
(iii) If ${V_\alpha}$ is an arbitrary collection of members of $\tau$ (finite, countable, or uncountable), then $\bigcup_\alpha V_\alpha \in \tau$.

(b) If $\tau$ is a topology in X, then X is called a topological space, and the members of $\tau$ are called the open sets in X.

(c) If X and Y are topological spaces and if f is a mapping of X into Y, then f is said to be continuous provided that $f^{-1}(V)$ is an open set in X for every open set V in Y.

**1.3 Definition**

(a) A collection $\mathfrak{M}$ of subsets of a set X is said to be a $\sigma$-algebra in X if $\mathfrak{M}$ has the following properties:

(i) $X \in \mathfrak{M}$.
(ii) If $A \in \mathfrak{M}$, then $A^c \in \mathfrak{M}$, where $A^c$ is the complement of A relative to X.
(iii) If $A = \bigcup_{n=1}^\infty A_n$, and if $A_n \in \mathfrak{M}$ for $n = 1, 2, 3, ...$, then $A \in \mathfrak{M}$.

(b) If $\mathfrak{M}$ is a $\sigma$-algebra in X, then X is called a measurable space, and the members of $\mathfrak{M}$ are called the measurable sets in X.

(c) If X is a measurable space, Y is a topological space, and f is a mapping of X into Y, then f is said to be measurable provided that $f^{-1}(V)$ is a measurable set in X for every open set V in Y.
