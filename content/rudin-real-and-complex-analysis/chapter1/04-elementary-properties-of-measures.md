---
title: Elementary Properties of Measures
type: docs
---


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
