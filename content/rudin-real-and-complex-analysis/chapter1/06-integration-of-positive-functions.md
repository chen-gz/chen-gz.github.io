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
