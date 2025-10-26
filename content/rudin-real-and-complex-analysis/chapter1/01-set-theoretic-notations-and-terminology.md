## Set-Theoretic Notations and Terminology

**1.1** Some sets can be described by listing their members. Thus $\{x_1, \dots, x_n\}$ is the set whose members are $x_1, \dots, x_n$; and $\{x\}$ is the set whose only member is $x$. More often, sets are described by properties. We write

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
