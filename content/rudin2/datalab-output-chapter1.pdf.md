
### The Role Played by Sets of Measure Zero

**1.35 Definition** Let  $P$  be a property which a point  $x$  may or may not have. For instance,  $P$  might be the property " $f(x) > 0$ " if  $f$  is a given function, or it might be " $\{f_n(x)\}$  converges" if  $\{f_n\}$  is a given sequence of functions.

If  $\mu$  is a measure on a  $\sigma$ -algebra  $\mathfrak{M}$  and if  $E \in \mathfrak{M}$ , the statement " $P$  holds almost everywhere on  $E$ " (abbreviated to " $P$  holds a.e. on  $E$ ") means that there exists an  $N \in \mathfrak{M}$  such that  $\mu(N) = 0$ ,  $N \subset E$ , and  $P$  holds at every point of  $E - N$ . This concept of a.e. depends of course very strongly on the given measure, and we shall write "a.e.  $[\mu]$ " whenever clarity requires that the measure be indicated.

For example, if  $f$  and  $g$  are measurable functions and if

$$\mu(\{x: f(x) \ne g(x)\}) = 0, \quad (1)$$

we say that  $f = g$  a.e.  $[\mu]$  on  $X$ , and we may write  $f \sim g$ . This is easily seen to be an equivalence relation. The transitivity ( $f \sim g$  and  $g \sim h$  implies  $f \sim h$ ) is a consequence of the fact that the union of two sets of measure 0 has measure 0.

Note that if  $f \sim g$ , then, for every  $E \in \mathfrak{M}$ ,

$$\int_E f \, d\mu = \int_E g \, d\mu. \quad (2)$$

To see this, let  $N$  be the set which appears in (1); then  $E$  is the union of the disjoint sets  $E - N$  and  $E \cap N$ ; on  $E - N$ ,  $f = g$ , and  $\mu(E \cap N) = 0$ .

Thus, generally speaking, sets of measure 0 are negligible in integration. It ought to be true that every subset of a negligible set is negligible. But it may happen that some set  $N \in \mathcal{M}$  with  $\mu(N) = 0$  has a subset  $E$  which is not a member of  $\mathcal{M}$ . Of course we can define  $\mu(E) = 0$  in this case. But will this extension of  $\mu$  still be a measure, i.e., will it still be defined on a  $\sigma$ -algebra? It is a pleasant fact that the answer is affirmative:

**1.36 Theorem** Let  $(X, \mathcal{M}, \mu)$  be a measure space, let  $\mathcal{M}^*$  be the collection of all  $E \subset X$  for which there exist sets  $A$  and  $B \in \mathcal{M}$  such that  $A \subset E \subset B$  and  $\mu(B - A) = 0$ , and define  $\mu(E) = \mu(A)$  in this situation. Then  $\mathcal{M}^*$  is a  $\sigma$ -algebra, and  $\mu$  is a measure on  $\mathcal{M}^*$ .

This extended measure  $\mu$  is called *complete*, since all subsets of sets of measure 0 are now measurable; the  $\sigma$ -algebra  $\mathcal{M}^*$  is called the  $\mu$ -completion of  $\mathcal{M}$ . The theorem says that every measure can be completed, so, whenever it is convenient, we may assume that any given measure is complete; this just gives us more measurable sets, hence more measurable functions. Most measures that one meets in the ordinary course of events are already complete, but there are exceptions; one of these will occur in the proof of Fubini's theorem in Chap. 8.

**PROOF** We begin by checking that  $\mu$  is well defined for every  $E \in \mathcal{M}^*$ . Suppose  $A \subset E \subset B$ ,  $A_1 \subset E \subset B_1$ , and  $\mu(B - A) = \mu(B_1 - A_1) = 0$ . (The letters  $A$  and  $B$  will denote members of  $\mathcal{M}$  throughout this proof.) Since

$$A - A_1 \subset E - A_1 \subset B_1 - A_1$$

we have  $\mu(A - A_1) = 0$ , hence  $\mu(A) = \mu(A \cap A_1)$ . For the same reason,  $\mu(A_1) = \mu(A_1 \cap A)$ . We conclude that indeed  $\mu(A_1) = \mu(A)$ .

Next, let us verify that  $\mathcal{M}^*$  has the three defining properties of a  $\sigma$ -algebra.

(i)  $X \in \mathcal{M}^*$ , because  $X \in \mathcal{M}$  and  $\mathcal{M} \subset \mathcal{M}^*$ .  
(ii) If  $A \subset E \subset B$  then  $B^c \subset E^c \subset A^c$ . Thus  $E \in \mathcal{M}^*$  implies  $E^c \in \mathcal{M}^*$ , because  
 $A^c - B^c = A^c \cap B = B - A$ .  
(iii) If  $A_i \subset E_i \subset B_i$ ,  $E = \bigcup E_i$ ,  $A = \bigcup A_i$ ,  $B = \bigcup B_i$ , then  $A \subset E \subset B$  and

$$B - A = \bigcup_{i=1}^{\infty} (B_i - A) \subset \bigcup_{i=1}^{\infty} (B_i - A_i).$$

Since countable unions of sets of measure zero have measure zero, it follows that  $E \in \mathcal{M}^*$  if  $E_i \in \mathcal{M}^*$  for  $i = 1, 2, 3, \dots$ .

Finally, if the sets  $E_i$  are disjoint in step (iii), the same is true of the sets  $A_i$ , and we conclude that

$$\mu(E) = \mu(A) = \sum_{i=1}^{\infty} \mu(A_i) = \sum_{i=1}^{\infty} \mu(E_i).$$

This proves that  $\mu$  is countably additive on  $\mathcal{M}^*$ .

////1.37 The fact that functions which are equal a.e. are indistinguishable as far as integration is concerned suggests that our definition of measurable function might profitably be enlarged. Let us call a function  $f$  defined on a set  $E \in \mathfrak{M}$  measurable on  $X$  if  $\mu(E^c) = 0$  and if  $f^{-1}(V) \cap E$  is measurable for every open set  $V$ . If we define  $f(x) = 0$  for  $x \in E^c$ , we obtain a measurable function on  $X$ , in the old sense. If our measure happens to be complete, we can define  $f$  on  $E^c$  in a perfectly arbitrary manner, and we still get a measurable function. The integral of  $f$  over any set  $A \in \mathfrak{M}$  is independent of the definition of  $f$  on  $E^c$ ; therefore this definition need not even be specified at all.

There are many situations where this occurs naturally. For instance, a function  $f$  on the real line may be differentiable only almost everywhere (with respect to Lebesgue measure), but under certain conditions it is still true that  $f$  is the integral of its derivative; this will be discussed in Chap. 7. Or a sequence  $\{f_n\}$  of measurable functions on  $X$  may converge only almost everywhere; with our new definition of measurability, the limit is still a measurable function on  $X$ , and we do not have to cut down to the set on which convergence actually occurs.

To illustrate, let us state a corollary of Lebesgue's dominated convergence theorem in a form in which exceptional sets of measure zero are admitted:

**1.38 Theorem** Suppose  $\{f_n\}$  is a sequence of complex measurable functions defined a.e. on  $X$  such that

$$\sum_{n=1}^{\infty} \int_X |f_n| \, d\mu < \infty. \quad (1)$$

Then the series

$$f(x) = \sum_{n=1}^{\infty} f_n(x) \quad (2)$$

converges for almost all  $x$ ,  $f \in L^1(\mu)$ , and

$$\int_X f \, d\mu = \sum_{n=1}^{\infty} \int_X f_n \, d\mu. \quad (3)$$

**PROOF** Let  $S_n$  be the set on which  $f_n$  is defined, so that  $\mu(S_n^c) = 0$ . Put  $\varphi(x) = \sum |f_n(x)|$ , for  $x \in S = \bigcap S_n$ . Then  $\mu(S^c) = 0$ . By (1) and Theorem 1.27,

$$\int_S \varphi \, d\mu < \infty. \quad (4)$$

If  $E = \{x \in S: \varphi(x) < \infty\}$ , it follows from (4) that  $\mu(E^c) = 0$ . The series (2) converges absolutely for every  $x \in E$ , and if  $f(x)$  is defined by (2) for  $x \in E$ , then  $|f(x)| \le \varphi(x)$  on  $E$ , so that  $f \in L^1(\mu)$  on  $E$ , by (4). If  $g_n = f_1 + \cdots + f_n$ , then  $|g_n| \le \varphi$ ,  $g_n(x) \to f(x)$  for all  $x \in E$ , and Theorem 1.34 gives (3) with  $E$  in place of  $X$ . This is equivalent to (3), since  $\mu(E^c) = 0$ . ////

Note that even if the  $f_n$  were defined at every point of  $X$ , (1) would only imply that (2) converges almost everywhere. Here are some other situations in which we can draw conclusions only almost everywhere:

**1.39 Theorem**(a) Suppose  $f: X \to [0, \infty]$  is measurable,  $E \in \mathcal{M}$ , and  $\int_E f d\mu = 0$ . Then  $f = 0$  a.e. on  $E$ .

(b) Suppose  $f \in L^1(\mu)$  and  $\int_E f d\mu = 0$  for every  $E \in \mathcal{M}$ . Then  $f = 0$  a.e. on  $X$ .

(c) Suppose  $f \in L^1(\mu)$  and

$$\left| \int_X f d\mu \right| = \int_X |f| d\mu.$$

Then there is a constant  $\alpha$  such that  $\alpha f = |f|$  a.e. on  $X$ .

Note that (c) describes the condition under which equality holds in Theorem 1.33.

**PROOF**(a) If  $A_n = \{x \in E: f(x) > 1/n\}$ ,  $n = 1, 2, 3, \dots$ , then

$$\frac{1}{n} \mu(A_n) \le \int_{A_n} f d\mu \le \int_E f d\mu = 0,$$

so that  $\mu(A_n) = 0$ . Since  $\{x \in E: f(x) > 0\} = \bigcup A_n$ , (a) follows.

(b) Put  $f = u + iv$ , let  $E = \{x: u(x) \ge 0\}$ . The real part of  $\int_E f d\mu$  is then  $\int_E u^+ d\mu$ . Hence  $\int_E u^+ d\mu = 0$ , and (a) implies that  $u^+ = 0$  a.e. We conclude similarly that

$$u^- = v^+ = v^- = 0 \quad \text{a.e.}$$

(c) Examine the proof of Theorem 1.33. Our present assumption implies that the last inequality in the proof of Theorem 1.33 must actually be an equality. Hence  $\int_E (|f| - u) d\mu = 0$ . Since  $|f| - u \ge 0$ , (a) shows that  $|f| = u$  a.e. This says that the real part of  $\alpha f$  is equal to  $|\alpha f|$  a.e., hence  $\alpha f = |\alpha f| = |f|$  a.e., which is the desired conclusion. ////

**1.40 Theorem** Suppose  $\mu(X) < \infty$ ,  $f \in L^1(\mu)$ ,  $S$  is a closed set in the complex plane, and the averages

$$A_E(f) = \frac{1}{\mu(E)} \int_E f d\mu$$

lie in  $S$  for every  $E \in \mathcal{M}$  with  $\mu(E) > 0$ . Then  $f(x) \in S$  for almost all  $x \in X$ .

**PROOF** Let  $\Delta$  be a closed circular disc (with center at  $\alpha$  and radius  $r > 0$ , say) in the complement of  $S$ . Since  $S^c$  is the union of countably many such discs, it is enough to prove that  $\mu(E) = 0$ , where  $E = f^{-1}(\Delta)$ .

If we had  $\mu(E) > 0$ , then

$$|A_E(f) - \alpha| = \frac{1}{\mu(E)} \left| \int_E (f - \alpha) d\mu \right| \le \frac{1}{\mu(E)} \int_E |f - \alpha| d\mu \le r,$$

which is impossible, since  $A_E(f) \in S$ . Hence  $\mu(E) = 0$ . ////

**1.41 Theorem** Let  $\{E_k\}$  be a sequence of measurable sets in  $X$ , such that

$$\sum_{k=1}^{\infty} \mu(E_k) < \infty. \quad (1)$$

Then almost all  $x \in X$  lie in at most finitely many of the sets  $E_k$ .

**PROOF** If  $A$  is the set of all  $x$  which lie in infinitely many  $E_k$ , we have to prove that  $\mu(A) = 0$ . Put

$$g(x) = \sum_{k=1}^{\infty} \chi_{E_k}(x) \quad (x \in X). \quad (2)$$

For each  $x$ , each term in this series is either 0 or 1. Hence  $x \in A$  if and only if  $g(x) = \infty$ . By Theorem 1.27, the integral of  $g$  over  $X$  is equal to the sum in (1). Thus  $g \in L^1(\mu)$ , and so  $g(x) < \infty$  a.e. ////

### Exercises

1 Does there exist an infinite  $\sigma$ -algebra which has only countably many members?

2 Prove an analogue of Theorem 1.8 for  $n$  functions.

3 Prove that if  $f$  is a real function on a measurable space  $X$  such that  $\{x: f(x) \ge r\}$  is measurable for every rational  $r$ , then  $f$  is measurable.

4 Let  $\{a_n\}$  and  $\{b_n\}$  be sequences in  $[-\infty, \infty]$ , and prove the following assertions:

$$(a) \quad \limsup (-a_n) = -\liminf a_n.$$

$$(b) \quad \limsup (a_n + b_n) \le \limsup a_n + \limsup b_n$$

provided none of the sums is of the form  $\infty - \infty$ .

(c) If  $a_n \le b_n$  for all  $n$ , then

$$\liminf a_n \le \liminf b_n.$$

Show by an example that strict inequality can hold in (b).

32 REAL AND COMPLEX ANALYSIS5 (a) Suppose  $f: X \to [-\infty, \infty]$  and  $g: X \to [-\infty, \infty]$  are measurable. Prove that the sets

$$\{x: f(x) < g(x)\}, \{x: f(x) = g(x)\}$$

are measurable.

(b) Prove that the set of points at which a sequence of measurable real-valued functions converges (to a finite limit) is measurable.

6 Let  $X$  be an uncountable set, let  $\mathcal{M}$  be the collection of all sets  $E \subset X$  such that either  $E$  or  $E^c$  is at most countable, and define  $\mu(E) = 0$  in the first case,  $\mu(E) = 1$  in the second. Prove that  $\mathcal{M}$  is a  $\sigma$ -algebra in  $X$  and that  $\mu$  is a measure on  $\mathcal{M}$ . Describe the corresponding measurable functions and their integrals.

7 Suppose  $f_n: X \to [0, \infty]$  is measurable for  $n = 1, 2, 3, \dots$ ,  $f_1 \ge f_2 \ge f_3 \ge \dots \ge 0$ ,  $f_n(x) \to f(x)$  as  $n \to \infty$ , for every  $x \in X$ , and  $f_1 \in L^1(\mu)$ . Prove that then

$$\lim_{n \to \infty} \int_X f_n d\mu = \int_X f d\mu$$

and show that this conclusion does not follow if the condition " $f_1 \in L^1(\mu)$ " is omitted.

8 Put  $f_n = \chi_E$  if  $n$  is odd,  $f_n = 1 - \chi_E$  if  $n$  is even. What is the relevance of this example to Fatou's lemma?

9 Suppose  $\mu$  is a positive measure on  $X$ ,  $f: X \to [0, \infty]$  is measurable,  $\int_X f d\mu = c$ , where  $0 < c < \infty$ , and  $\alpha$  is a constant. Prove that

$$\lim_{n \to \infty} \int_X n \log [1 + (f/n)^\alpha] d\mu = \begin{cases} \infty & \text{if } 0 < \alpha < 1, \\ c & \text{if } \alpha = 1, \\ 0 & \text{if } 1 < \alpha < \infty. \end{cases}$$

Hint: If  $\alpha \ge 1$ , the integrands are dominated by  $\alpha f$ . If  $\alpha < 1$ , Fatou's lemma can be applied.

10 Suppose  $\mu(X) < \infty$ ,  $\{f_n\}$  is a sequence of bounded complex measurable functions on  $X$ , and  $f_n \to f$  uniformly on  $X$ . Prove that

$$\lim_{n \to \infty} \int_X f_n d\mu = \int_X f d\mu,$$

and show that the hypothesis " $\mu(X) < \infty$ " cannot be omitted.

11 Show that

$$A = \bigcap_{n=1}^{\infty} \bigcup_{k=n}^{\infty} E_k$$

in Theorem 1.41, and hence prove the theorem without any reference to integration.

12 Suppose  $f \in L^1(\mu)$ . Prove that to each  $\epsilon > 0$  there exists a  $\delta > 0$  such that  $\int_E |f| d\mu < \epsilon$  whenever  $\mu(E) < \delta$ .

13 Show that proposition 1.24(c) is also true when  $c = \infty$ .