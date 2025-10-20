## Corollaries

(a) The limit of every pointwise convergent sequence of complex measurable functions is measurable.

(b) If  $f$  and  $g$  are measurable (with range in  $[-\infty, \infty]$ ), then so are  $\max\{f, g\}$  and  $\min\{f, g\}$ . In particular, this is true of the functions

$$f^+ = \max\{f, 0\} \quad \text{and} \quad f^- = -\min\{f, 0\}.$$

**1.15 Proposition** The above functions  $f^+$  and  $f^-$  are called the positive and negative parts of  $f$ . We have  $|f| = f^+ + f^-$  and  $f = f^+ - f^-$ , a standard representation of  $f$  as a difference of two nonnegative functions, with a certain minimality property: If  $f = g - h$ ,  $g \ge 0$ , and  $h \ge 0$ , then  $f^+ \le g$  and  $f^- \le h$ .

PROOF  $f \le g$  and  $0 \le g$  clearly implies  $\max\{f, 0\} \le g$ . ////

## Simple Functions

**1.16 Definition** A complex function  $s$  on a measurable space  $X$  whose range consists of only finitely many points will be called a *simple function*. Among these are the nonnegative simple functions, whose range is a finite subset of  $[0, \infty)$ . Note that we explicitly exclude  $\infty$  from the values of a simple function.

If  $\alpha_1, \dots, \alpha_n$  are the distinct values of a simple function  $s$ , and if we set  $A_i = \{x: s(x) = \alpha_i\}$ , then clearly

$$s = \sum_{i=1}^{n} \alpha_i \chi_{A_i},$$

where  $\chi_{A_i}$  is the characteristic function of  $A_i$ , as defined in Sec. 1.9(d).

It is also clear that  $s$  is measurable if and only if each of the sets  $A_i$  is measurable.

**1.17 Theorem** Let  $f: X \to [0, \infty]$  be measurable. There exist simple measurable functions  $s_n$  on  $X$  such that

(a)  $0 \le s_1 \le s_2 \le \dots \le f$ .

(b)  $s_n(x) \to f(x)$  as  $n \to \infty$ , for every  $x \in X$ .

PROOF Put  $\delta_n = 2^{-n}$ . To each positive integer  $n$  and each real number  $t$  corresponds a unique integer  $k = k_n(t)$  that satisfies  $k\delta_n \le t < (k+1)\delta_n$ . Define

$$\varphi_n(t) = \begin{cases} k_n(t)\delta_n & \text{if } 0 \le t < n \\ n & \text{if } n \le t \le \infty. \end{cases} \quad (1)$$

Each  $\varphi_n$  is then a Borel function on  $[0, \infty]$ ,

$$t - \delta_n < \varphi_n(t) \le t \quad \text{if } 0 \le t \le n, \quad (2)$$

 $0 \le \varphi_1 \le \varphi_2 \le \cdots \le t$ , and  $\varphi_n(t) \to t$  as  $n \to \infty$ , for every  $t \in [0, \infty]$ . It follows that the functions

$$s_n = \varphi_n \circ f \quad (3)$$

satisfy (a) and (b); they are measurable, by Theorem 1.12(d).

///

## Elementary Properties of Measures

**1.18 Definition**

(a) A *positive measure* is a function  $\mu$ , defined on a  $\sigma$ -algebra  $\mathcal{M}$ , whose range is in  $[0, \infty]$  and which is *countably additive*. This means that if  $\{A_i\}$  is a disjoint countable collection of members of  $\mathcal{M}$ , then

$$\mu\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} \mu(A_i). \quad (1)$$

To avoid trivialities, we shall also assume that  $\mu(A) < \infty$  for at least one  $A \in \mathcal{M}$ .

(b) A *measure space* is a measurable space which has a positive measure defined on the  $\sigma$ -algebra of its measurable sets.

(c) A *complex measure* is a complex-valued countably additive function defined on a  $\sigma$ -algebra.

*Note:* What we have called a *positive measure* is frequently just called a *measure*; we add the word “positive” for emphasis. If  $\mu(E) = 0$  for every  $E \in \mathcal{M}$ , then  $\mu$  is a positive measure, by our definition. The value  $\infty$  is admissible for a positive measure; but when we talk of a *complex measure*  $\mu$ , it is understood that  $\mu(E)$  is a complex number, for every  $E \in \mathcal{M}$ . The *real measures* form a subclass of the complex ones, of course.

**1.19 Theorem** Let  $\mu$  be a positive measure on a  $\sigma$ -algebra  $\mathcal{M}$ . Then

(a)  $\mu(\emptyset) = 0$ .

(b)  $\mu(A_1 \cup \cdots \cup A_n) = \mu(A_1) + \cdots + \mu(A_n)$  if  $A_1, \dots, A_n$  are pairwise disjoint members of  $\mathcal{M}$ .

(c)  $A \subset B$  implies  $\mu(A) \le \mu(B)$  if  $A \in \mathcal{M}$ ,  $B \in \mathcal{M}$ .

(d)  $\mu(A_n) \to \mu(A)$  as  $n \to \infty$  if  $A = \bigcup_{n=1}^{\infty} A_n$ ,  $A_n \in \mathcal{M}$ , and

$$A_1 \subset A_2 \subset A_3 \subset \cdots.$$
(e)  $\mu(A_n) \to \mu(A)$  as  $n \to \infty$  if  $A = \bigcap_{n=1}^{\infty} A_n$ ,  $A_n \in \mathcal{M}$ ,

$$A_1 \supset A_2 \supset A_3 \supset \cdots,$$
and  $\mu(A_1)$  is finite.

As the proof will show, these properties, with the exception of (c), also hold for complex measures; (b) is called *finite additivity*; (c) is called *monotonicity*.

PROOF

(a) Take  $A \in \mathcal{M}$  so that  $\mu(A) < \infty$ , and take  $A_1 = A$  and  $A_2 = A_3 = \dots = \emptyset$  in 1.18(1).

(b) Take  $A_{n+1} = A_{n+2} = \dots = \emptyset$  in 1.18(1).

(c) Since  $B = A \cup (B - A)$  and  $A \cap (B - A) = \emptyset$ , we see that (b) implies  $\mu(B) = \mu(A) + \mu(B - A) \ge \mu(A)$ .

(d) Put  $B_1 = A_1$ , and put  $B_n = A_n - A_{n-1}$  for  $n = 2, 3, 4, \dots$ . Then  $B_n \in \mathcal{M}$ ,  $B_i \cap B_j = \emptyset$  if  $i \ne j$ ,  $A_n = B_1 \cup \dots \cup B_n$ , and  $A = \bigcup_{i=1}^{\infty} B_i$ . Hence

$$\mu(A_n) = \sum_{i=1}^{n} \mu(B_i) \quad \text{and} \quad \mu(A) = \sum_{i=1}^{\infty} \mu(B_i).$$

Now (d) follows, by the definition of the sum of an infinite series.

(e) Put  $C_n = A_1 - A_n$ . Then  $C_1 \subset C_2 \subset C_3 \subset \dots$ ,

$$\mu(C_n) = \mu(A_1) - \mu(A_n),$$

 $A_1 - A = \bigcup C_n$ , and so (d) shows that

$$\mu(A_1) - \mu(A) = \mu(A_1 - A) = \lim_{n \to \infty} \mu(C_n) = \mu(A_1) - \lim_{n \to \infty} \mu(A_n).$$

This implies (e).

////

**1.20 Examples** The construction of interesting measure spaces requires some labor, as we shall see. However, a few simple-minded examples can be given immediately:

(a) For any  $E \subset X$ , where  $X$  is any set, define  $\mu(E) = \infty$  if  $E$  is an infinite set, and let  $\mu(E)$  be the number of points in  $E$  if  $E$  is finite. This  $\mu$  is called the *counting measure* on  $X$ .

(b) Fix  $x_0 \in X$ , define  $\mu(E) = 1$  if  $x_0 \in E$  and  $\mu(E) = 0$  if  $x_0 \notin E$ , for any  $E \subset X$ . This  $\mu$  may be called the *unit mass* concentrated at  $x_0$ .

(c) Let  $\mu$  be the counting measure on the set  $\{1, 2, 3, \dots\}$ , let  $A_n = \{n, n+1, n+2, \dots\}$ . Then  $\bigcap A_n = \emptyset$  but  $\mu(A_n) = \infty$  for  $n = 1, 2, 3, \dots$ . This shows that the hypothesis

$$\mu(A_1) < \infty$$

is not superfluous in Theorem 1.19(e).

**1.21 A Comment on Terminology** One frequently sees measure spaces referred to as “ordered triples”  $(X, \mathcal{M}, \mu)$  where  $X$  is a set,  $\mathcal{M}$  is a  $\sigma$ -algebra in  $X$ , and  $\mu$  is a measure defined on  $\mathcal{M}$ . Similarly, measurable spaces are “ordered pairs,”  $(X, \mathcal{M})$ .

This is logically all right, and often convenient, though somewhat redundant. For instance, in  $(X, \mathcal{M})$  the set  $X$  is merely the largest member of  $\mathcal{M}$ , so if we know  $\mathcal{M}$  we also know  $X$ . Similarly, every measure has a  $\sigma$ -algebra for its domain, by definition, so if we know a measure  $\mu$  we also know the  $\sigma$ -algebra  $\mathcal{M}$  on which  $\mu$  is defined and we know the set  $X$  in which  $\mathcal{M}$  is a  $\sigma$ -algebra.

It is therefore perfectly legitimate to use expressions like “Let  $\mu$  be a measure” or, if we wish to emphasize the  $\sigma$ -algebra or the set in question, to say “Let  $\mu$  be a measure on  $\mathcal{M}$ ” or “Let  $\mu$  be a measure on  $X$ .”

What is logically rather meaningless but customary (and we shall often follow mathematical custom rather than logic) is to say “Let  $X$  be a measure space”; the emphasis should not be on the set, but on the measure. Of course, when this wording is used, it is tacitly understood that there is a measure defined on some  $\sigma$ -algebra in  $X$  and that it is this measure which is really under discussion.

Similarly, a topological space is an ordered pair  $(X, \tau)$ , where  $\tau$  is a topology in the set  $X$ , and the significant data are contained in  $\tau$ , not in  $X$ , but “the topological space  $X$ ” is what one talks about.

This sort of tacit convention is used throughout mathematics. Most mathematical systems are sets with some class of distinguished subsets or some binary operations or some relations (which are required to have certain properties), and one can list these and then describe the system as an ordered pair, triple, etc., depending on what is needed. For instance, the real line may be described as a quadruple  $(\mathbb{R}^1, +, \cdot, <)$ , where  $+$ ,  $\cdot$ , and  $<$  satisfy the axioms of a complete archimedean ordered field. But it is a safe bet that very few mathematicians think of the real field as an ordered quadruple.

## Arithmetic in $[0, \infty]$

**1.22** Throughout integration theory, one inevitably encounters  $\infty$ . One reason is that one wants to be able to integrate over sets of infinite measure; after all, the real line has infinite length. Another reason is that even if one is primarily interested in real-valued functions, the lim sup of a sequence of positive real functions or the sum of a sequence of positive real functions may well be  $\infty$  at some points, and much of the elegance of theorems like 1.26 and 1.27 would be lost if one had to make some special provisions whenever this occurs.

Let us define  $a + \infty = \infty + a = \infty$  if  $0 \le a \le \infty$ , and

$$a \cdot \infty = \infty \cdot a = \begin{cases} \infty & \text{if } 0 < a \le \infty \\ 0 & \text{if } a = 0; \end{cases}$$

sums and products of real numbers are of course defined in the usual way.

It may seem strange to define  $0 \cdot \infty = 0$ . However, one verifies without difficulty that with this definition the *commutative, associative, and distributive laws hold in  $[0, \infty]$  without any restriction*.

The cancellation laws have to be treated with some care:  $a + b = a + c$  implies  $b = c$  only when  $a < \infty$ , and  $ab = ac$  implies  $b = c$  only when  $0 < a < \infty$ . Observe that the following useful proposition holds:

$$\text{If } 0 \le a_1 \le a_2 \le \cdots, 0 \le b_1 \le b_2 \le \cdots, a_n \to a, \text{ and } b_n \to b, \text{ then } a_n b_n \to ab.$$

If we combine this with Theorems 1.17 and 1.14, we see that sums and products of measurable functions into  $[0, \infty]$  are measurable.

## Integration of Positive Functions

In this section,  $\mathcal{M}$  will be a  $\sigma$ -algebra in a set  $X$  and  $\mu$  will be a positive measure on  $\mathcal{M}$ .

**1.23 Definition** If  $s: X \to [0, \infty)$  is a measurable simple function, of the form

$$s = \sum_{i=1}^{n} \alpha_i \chi_{A_i}, \quad (1)$$

where  $\alpha_1, \dots, \alpha_n$  are the distinct values of  $s$  (compare Definition 1.16), and if  $E \in \mathcal{M}$ , we define

$$\int_E s \, d\mu = \sum_{i=1}^{n} \alpha_i \mu(A_i \cap E). \quad (2)$$

The convention  $0 \cdot \infty = 0$  is used here; it may happen that  $\alpha_i = 0$  for some  $i$  and that  $\mu(A_i \cap E) = \infty$ .

If  $f: X \to [0, \infty]$  is measurable, and  $E \in \mathcal{M}$ , we define

$$\int_E f \, d\mu = \sup \int_E s \, d\mu, \quad (3)$$

the supremum being taken over all simple measurable functions  $s$  such that  $0 \le s \le f$ .

The left member of (3) is called the *Lebesgue integral* of  $f$  over  $E$ , with respect to the measure  $\mu$ . It is a number in  $[0, \infty]$ .

Observe that we apparently have two definitions for  $\int_E f \, d\mu$  if  $f$  is simple, namely, (2) and (3). However, these assign the same value to the integral, since  $f$  is, in this case, the largest of the functions  $s$  which occur on the right of (3).

**1.24** The following propositions are immediate consequences of the definitions. The functions and sets occurring in them are assumed to be measurable:

(a) If  $0 \le f \le g$ , then  $\int_E f \, d\mu \le \int_E g \, d\mu$ .  
(b) If  $A \subset B$  and  $f \ge 0$ , then  $\int_A f \, d\mu \le \int_B f \, d\mu$ .

(c) If  $f \ge 0$  and  $c$  is a constant,  $0 \le c < \infty$ , then

$$\int_E cf \, d\mu = c \int_E f \, d\mu.$$

(d) If  $f(x) = 0$  for all  $x \in E$ , then  $\int_E f \, d\mu = 0$ , even if  $\mu(E) = \infty$ .

(e) If  $\mu(E) = 0$ , then  $\int_E f \, d\mu = 0$ , even if  $f(x) = \infty$  for every  $x \in E$ .

(f) If  $f \ge 0$ , then  $\int_E f \, d\mu = \int_X \chi_E f \, d\mu$ .

This last result shows that we could have restricted our definition of integration to integrals over all of  $X$ , without losing any generality. If we wanted to integrate over subsets, we could then use (f) as the definition. It is purely a matter of taste which definition is preferred.

One may also remark here that every measurable subset  $E$  of a measure space  $X$  is again a measure space, in a perfectly natural way: The new measurable sets are simply those measurable subsets of  $X$  which lie in  $E$ , and the measure is unchanged, except that its domain is restricted. This shows again that as soon as we have integration defined over every measure space, we automatically have it defined over every measurable subset of every measure space.

**1.25 Proposition** Let  $s$  and  $t$  be nonnegative measurable simple functions on  $X$ . For  $E \in \mathcal{M}$ , define

$$\varphi(E) = \int_E s \, d\mu. \quad (1)$$

Then  $\varphi$  is a measure on  $\mathcal{M}$ . Also

$$\int_X (s + t) \, d\mu = \int_X s \, d\mu + \int_X t \, d\mu. \quad (2)$$

(This proposition contains provisional forms of Theorems 1.27 and 1.29.)

**PROOF** If  $s$  is as in Definition 1.23, and if  $E_1, E_2, \dots$  are disjoint members of  $\mathcal{M}$  whose union is  $E$ , the countable additivity of  $\mu$  shows that

$$\begin{aligned}\varphi(E) &= \sum_{i=1}^{n} \alpha_i \mu(A_i \cap E) = \sum_{i=1}^{n} \alpha_i \sum_{r=1}^{\infty} \mu(A_i \cap E_r) \\ &= \sum_{r=1}^{\infty} \sum_{i=1}^{n} \alpha_i \mu(A_i \cap E_r) = \sum_{r=1}^{\infty} \varphi(E_r).\end{aligned}$$

Also,  $\varphi(\emptyset) = 0$ , so that  $\varphi$  is not identically  $\infty$ .

Next, let  $s$  be as before, let  $\beta_1, \dots, \beta_m$  be the distinct values of  $t$ , and let  $B_j = \{x: t(x) = \beta_j\}$ . If  $E_{ij} = A_i \cap B_j$ , then

$$\int_{E_{ij}} (s + t) d\mu = (\alpha_i + \beta_j)\mu(E_{ij})$$

and

$$\int_{E_{ij}} s d\mu + \int_{E_{ij}} t d\mu = \alpha_i \mu(E_{ij}) + \beta_j \mu(E_{ij}).$$

Thus (2) holds with  $E_{ij}$  in place of  $X$ . Since  $X$  is the disjoint union of the sets  $E_{ij}$  ( $1 \le i \le n$ ,  $1 \le j \le m$ ), the first half of our proposition implies that (2) holds. ////

We now come to the interesting part of the theory. One of its most remarkable features is the ease with which it handles limit operations.

**1.26 Lebesgue's Monotone Convergence Theorem** Let  $\{f_n\}$  be a sequence of measurable functions on  $X$ , and suppose that

(a)  $0 \le f_1(x) \le f_2(x) \le \dots \le \infty$  for every  $x \in X$ ,  
(b)  $f_n(x) \to f(x)$  as  $n \to \infty$ , for every  $x \in X$ .

Then  $f$  is measurable, and

$$\int_X f_n d\mu \to \int_X f d\mu \quad \text{as } n \to \infty.$$

**PROOF** Since  $\int f_n \le \int f_{n+1}$ , there exists an  $\alpha \in [0, \infty]$  such that

$$\int_X f_n d\mu \to \alpha \quad \text{as } n \to \infty. \quad (1)$$

By Theorem 1.14,  $f$  is measurable. Since  $f_n \le f$ , we have  $\int f_n \le \int f$  for every  $n$ , so (1) implies

$$\alpha \le \int_X f d\mu. \quad (2)$$

Let  $s$  be any simple measurable function such that  $0 \le s \le f$ , let  $c$  be a constant,  $0 < c < 1$ , and define

$$E_n = \{x: f_n(x) \ge cs(x)\} \quad (n = 1, 2, 3, \dots). \quad (3)$$

Each  $E_n$  is measurable,  $E_1 \subset E_2 \subset E_3 \subset \dots$ , and  $X = \bigcup E_n$ . To see this equality, consider some  $x \in X$ . If  $f(x) = 0$ , then  $x \in E_1$ ; if  $f(x) > 0$ , then  $cs(x) < f(x)$ , since  $c < 1$ ; hence  $x \in E_n$  for some  $n$ . Also

$$\int_X f_n d\mu \ge \int_{E_n} f_n d\mu \ge c \int_{E_n} s d\mu \quad (n = 1, 2, 3, \dots). \quad (4)$$

Let  $n \to \infty$ , applying Proposition 1.25 and Theorem 1.19(d) to the last integral in (4). The result is

$$\alpha \ge c \int_X s \, d\mu. \quad (5)$$

Since (5) holds for every  $c < 1$ , we have

$$\alpha \ge \int_X s \, d\mu \quad (6)$$

for every simple measurable  $s$  satisfying  $0 \le s \le f$ , so that

$$\alpha \ge \int_X f \, d\mu. \quad (7)$$

The theorem follows from (1), (2), and (7).

**1.27 Theorem** If  $f_n: X \to [0, \infty]$  is measurable, for  $n = 1, 2, 3, \dots$ , and

$$f(x) = \sum_{n=1}^{\infty} f_n(x) \quad (x \in X), \quad (1)$$

then

$$\int_X f \, d\mu = \sum_{n=1}^{\infty} \int_X f_n \, d\mu. \quad (2)$$

**PROOF** First, there are sequences  $\{s_i'\}$ ,  $\{s_i''\}$  of simple measurable functions such that  $s_i' \to f_1$  and  $s_i'' \to f_2$ , as in Theorem 1.17. If  $s_i = s_i' + s_i''$ , then  $s_i \to f_1 + f_2$ , and the monotone convergence theorem, combined with Proposition 1.25, shows that

$$\int_X (f_1 + f_2) \, d\mu = \int_X f_1 \, d\mu + \int_X f_2 \, d\mu. \quad (3)$$

Next, put  $g_N = f_1 + \dots + f_N$ . The sequence  $\{g_N\}$  converges monotonically to  $f$ , and if we apply induction to (3) we see that

$$\int_X g_N \, d\mu = \sum_{n=1}^{N} \int_X f_n \, d\mu. \quad (4)$$

Applying the monotone convergence theorem once more, we obtain (2), and the proof is complete.

If we let  $\mu$  be the counting measure on a countable set, Theorem 1.27 is a statement about double series of nonnegative real numbers (which can of course be proved by more elementary means):

**Corollary** If  $a_{ij} \ge 0$  for  $i$  and  $j = 1, 2, 3, \dots$ , then

$$\sum_{i=1}^{\infty} \sum_{j=1}^{\infty} a_{ij} = \sum_{j=1}^{\infty} \sum_{i=1}^{\infty} a_{ij}.$$

**1.28 Fatou's Lemma** If  $f_n: X \to [0, \infty]$  is measurable, for each positive integer  $n$ , then

$$\int_X \left( \liminf_{n \to \infty} f_n \right) d\mu \le \liminf_{n \to \infty} \int_X f_n d\mu. \quad (1)$$

Strict inequality can occur in (1); see Exercise 8.

**PROOF** Put

$$g_k(x) = \inf_{i \ge k} f_i(x) \quad (k = 1, 2, 3, \dots; x \in X). \quad (2)$$

Then  $g_k \le f_k$ , so that

$$\int_X g_k d\mu \le \int_X f_k d\mu \quad (k = 1, 2, 3, \dots). \quad (3)$$

Also,  $0 \le g_1 \le g_2 \le \dots$ , each  $g_k$  is measurable, by Theorem 1.14, and  $g_k(x) \to \liminf f_n(x)$  as  $k \to \infty$ , by Definition 1.13. The monotone convergence theorem shows therefore that the left side of (3) tends to the left side of (1), as  $k \to \infty$ . Hence (1) follows from (3). ////

**1.29 Theorem** Suppose  $f: X \to [0, \infty]$  is measurable, and

$$\varphi(E) = \int_E f d\mu \quad (E \in \mathfrak{M}). \quad (1)$$

Then  $\varphi$  is a measure on  $\mathfrak{M}$ , and

$$\int_X g d\varphi = \int_X gf d\mu \quad (2)$$

for every measurable  $g$  on  $X$  with range in  $[0, \infty]$ .

**PROOF** Let  $E_1, E_2, E_3, \dots$  be disjoint members of  $\mathfrak{M}$  whose union is  $E$ . Observe that

$$\chi_E f = \sum_{j=1}^{\infty} \chi_{E_j} f \quad (3)$$

and that

$$\varphi(E) = \int_X \chi_E f d\mu, \quad \varphi(E_j) = \int_X \chi_{E_j} f d\mu. \quad (4)$$

It now follows from Theorem 1.27 that

$$\varphi(E) = \sum_{j=1}^{\infty} \varphi(E_j). \quad (5)$$

Since  $\varphi(\emptyset) = 0$ , (5) proves that  $\varphi$  is a measure.

Next, (1) shows that (2) holds whenever  $g = \chi_E$  for some  $E \in \mathcal{M}$ . Hence (2) holds for every simple measurable function  $g$ , and the general case follows from the monotone convergence theorem. ////

**Remark** The second assertion of Theorem 1.29 is sometimes written in the form

$$d\varphi = f d\mu. \quad (6)$$

We assign no independent meaning to the symbols  $d\varphi$  and  $d\mu$ ; (6) merely means that (2) holds for every measurable  $g \ge 0$ .

Theorem 1.29 has a very important converse, the Radon-Nikodym theorem, which will be proved in Chap. 6.

## Integration of Complex Functions

As before,  $\mu$  will in this section be a positive measure on an arbitrary measurable space  $X$ .

**1.30 Definition** We define  $L^1(\mu)$  to be the collection of all complex measurable functions  $f$  on  $X$  for which

$$\int_X |f| d\mu < \infty.$$

Note that the measurability of  $f$  implies that of  $|f|$ , as we saw in Proposition 1.9(b); hence the above integral is defined.

The members of  $L^1(\mu)$  are called *Lebesgue integrable functions* (with respect to  $\mu$ ) or *summable functions*. The significance of the exponent 1 will become clear in Chap. 3.

**1.31 Definition** If  $f = u + iv$ , where  $u$  and  $v$  are real measurable functions on  $X$ , and if  $f \in L^1(\mu)$ , we define

$$\int_E f d\mu = \int_E u^+ d\mu - \int_E u^- d\mu + i \int_E v^+ d\mu - i \int_E v^- d\mu \quad (1)$$

for every measurable set  $E$ .

Here  $u^+$  and  $u^-$  are the positive and negative parts of  $u$ , as defined in Sec. 1.15;  $v^+$  and  $v^-$  are similarly obtained from  $v$ . These four functions are measurable, real, and nonnegative; hence the four integrals on the right of (1) exist, by Definition 1.23. Furthermore, we have  $u^+ \le |u| < |f|$ , etc., so that