---
title: "The Riesz Representation Theorem"
type: docs
---


**2.14 Theorem** Let  $X$  be a locally compact Hausdorff space, and let  $\Lambda$  be a positive linear functional on  $C_c(X)$ . Then there exists a  $\sigma$ -algebra  $\mathfrak{M}$  in  $X$  which contains all Borel sets in  $X$ , and there exists a unique positive measure  $\mu$  on  $\mathfrak{M}$  which represents  $\Lambda$  in the sense that

(a)  $\Lambda f = \int_X f d\mu$  for every  $f \in C_c(X)$ ,

and which has the following additional properties:

(b)  $\mu(K) < \infty$  for every compact set  $K \subset X$ .  
(c) For every  $E \in \mathfrak{M}$ , we have

$$\mu(E) = \inf \{\mu(V) : E \subset V, V \text{ open}\}.$$

(d) The relation

$$\mu(E) = \sup \{\mu(K) : K \subset E, K \text{ compact}\}$$

holds for every open set  $E$ , and for every  $E \in \mathfrak{M}$  with  $\mu(E) < \infty$ .  
(e) If  $E \in \mathfrak{M}$ ,  $A \subset E$ , and  $\mu(E) = 0$ , then  $A \in \mathfrak{M}$ .

For the sake of clarity, let us be more explicit about the meaning of the word “positive” in the hypothesis:  $\Lambda$  is assumed to be a linear functional on the complex vector space  $C_c(X)$ , with the additional property that  $\Lambda f$  is a nonnegative real number for every  $f$  whose range consists of nonnegative real numbers. Briefly, if  $f(X) \subset [0, \infty)$  then  $\Lambda f \in [0, \infty)$ .

Property (a) is of course the one of greatest interest. After we define  $\mathfrak{M}$  and  $\mu$ , (b) to (d) will be established in the course of proving that  $\mathfrak{M}$  is a  $\sigma$ -algebra and that  $\mu$  is countably additive. We shall see later (Theorem 2.18) that in “reasonable” spaces  $X$  every Borel measure which satisfies (b) also satisfies (c) and (d) and that (d) actually holds for every  $E \in \mathfrak{M}$ , in those cases. Property (e) merely says that  $(X, \mathfrak{M}, \mu)$  is a complete measure space, in the sense of Theorem 1.36.

Throughout the proof of this theorem, the letter  $K$  will stand for a compact subset of  $X$ , and  $V$  will denote an open set in  $X$ .

Let us begin by proving the uniqueness of  $\mu$ . If  $\mu$  satisfies (c) and (d), it is clear that  $\mu$  is determined on  $\mathfrak{M}$  by its values on compact sets. Hence it suffices to prove that  $\mu_1(K) = \mu_2(K)$  for all  $K$ , whenever  $\mu_1$  and  $\mu_2$  are measures for which the theorem holds. So, fix  $K$  and  $\epsilon > 0$ . By (b) and (c), there exists a  $V \supset K$  with  $\mu_2(V) < \mu_2(K) + \epsilon$ ; by Urysohn's lemma, there exists an  $f$  so that  $K \prec f \prec V$ ; hence

$$\begin{aligned}\mu_1(K) &= \int_X \chi_K d\mu_1 \le \int_X f d\mu_1 = \Lambda f = \int_X f d\mu_2 \\ &\le \int_X \chi_V d\mu_2 = \mu_2(V) < \mu_2(K) + \epsilon.\end{aligned}$$

Thus  $\mu_1(K) \le \mu_2(K)$ . If we interchange the roles of  $\mu_1$  and  $\mu_2$ , the opposite inequality is obtained, and the uniqueness of  $\mu$  is proved.

Incidentally, the above computation shows that (a) forces (b).

### Construction of $\mu$ and $\mathfrak{M}$

For every open set  $V$  in  $X$ , define

$$\mu(V) = \sup \{\Lambda f : f \prec V\}. \quad (1)$$

If  $V_1 \subset V_2$ , it is clear that (1) implies  $\mu(V_1) \le \mu(V_2)$ . Hence

$$\mu(E) = \inf \{\mu(V) : E \subset V, V \text{ open}\}, \quad (2)$$

if  $E$  is an open set, and it is consistent with (1) to define  $\mu(E)$  by (2), for every  $E \subset X$ .

Note that although we have defined  $\mu(E)$  for every  $E \subset X$ , the countable additivity of  $\mu$  will be proved only on a certain  $\sigma$ -algebra  $\mathfrak{M}$  in  $X$ .

Let  $\mathfrak{M}_F$  be the class of all  $E \subset X$  which satisfy two conditions:  $\mu(E) < \infty$ , and

$$\mu(E) = \sup \{\mu(K) : K \subset E, K \text{ compact}\}. \quad (3)$$

Finally, let  $\mathfrak{M}$  be the class of all  $E \subset X$  such that  $E \cap K \in \mathfrak{M}_F$  for every compact  $K$ .

*Proof that  $\mu$  and  $\mathfrak{M}$  have the required properties*

It is evident that  $\mu$  is monotone, i.e., that  $\mu(A) \le \mu(B)$  if  $A \subset B$  and that  $\mu(E) = 0$  implies  $E \in \mathfrak{M}_F$  and  $E \in \mathfrak{M}$ . Thus (e) holds, and so does (c), by definition.

Since the proof of the other assertions is rather long, it will be convenient to divide it into several steps.

Observe that the positivity of  $\Lambda$  implies that  $\Lambda$  is monotone:  $f \le g$  implies  $\Lambda f \le \Lambda g$ . This is clear, since  $\Lambda g = \Lambda f + \Lambda(g - f)$  and  $g - f \ge 0$ . This monotonicity will be used in Steps II and X.

STEP I If  $E_1, E_2, E_3, \dots$  are arbitrary subsets of  $X$ , then

$$\mu\left(\bigcup_{i=1}^{\infty} E_i\right) \le \sum_{i=1}^{\infty} \mu(E_i). \quad (4)$$

PROOF We first show that

$$\mu(V_1 \cup V_2) \le \mu(V_1) + \mu(V_2), \quad (5)$$

if  $V_1$  and  $V_2$  are open. Choose  $g < V_1 \cup V_2$ . By Theorem 2.13 there are functions  $h_1$  and  $h_2$  such that  $h_i < V_i$  and  $h_1(x) + h_2(x) = 1$  for all  $x$  in the support of  $g$ . Hence  $h_1g < V_1$ ,  $g = h_1g + h_2g$ , and so

$$\Lambda g = \Lambda(h_1g) + \Lambda(h_2g) \le \mu(V_1) + \mu(V_2). \quad (6)$$

Since (6) holds for every  $g < V_1 \cup V_2$ , (5) follows.

If  $\mu(E_i) = \infty$  for some  $i$ , then (4) is trivially true. Suppose therefore that  $\mu(E_i) < \infty$  for every  $i$ . Choose  $\epsilon > 0$ . By (2) there are open sets  $V_i \supset E_i$  such that

$$\mu(V_i) < \mu(E_i) + 2^{-i}\epsilon \quad (i = 1, 2, 3, \dots).$$
