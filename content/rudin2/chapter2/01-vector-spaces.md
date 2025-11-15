---
title: "Vector Spaces"
---

**2.1 Definition** A *complex vector space* (or a vector space over the complex field) is a set  $V$ , whose elements are called *vectors* and in which two operations, called *addition* and *scalar multiplication*, are defined, with the following familiar algebraic properties:

To every pair of vectors  $x$  and  $y$  there corresponds a vector  $x + y$ , in such a way that  $x + y = y + x$  and  $x + (y + z) = (x + y) + z$ ;  $V$  contains a unique vector  $0$  (the *zero vector* or *origin* of  $V$ ) such that  $x + 0 = x$  for every  $x \in V$ ; and to each  $x \in V$  there corresponds a unique vector  $-x$  such that  $x + (-x) = 0$ .

To each pair  $(\alpha, x)$ , where  $x \in V$  and  $\alpha$  is a scalar (in this context, the word *scalar* means *complex number*), there is associated a vector  $\alpha x \in V$ , in such a way that  $1x = x$ ,  $\alpha(\beta x) = (\alpha\beta)x$ , and such that the two distributive laws

$$\alpha(x + y) = \alpha x + \alpha y, \quad (\alpha + \beta)x = \alpha x + \beta x \quad (1)$$

hold.

A *linear transformation* of a vector space  $V$  into a vector space  $V_1$  is a mapping  $\Lambda$  of  $V$  into  $V_1$  such that

$$\Lambda(\alpha x + \beta y) = \alpha \Lambda x + \beta \Lambda y \quad (2)$$

for all  $x$  and  $y \in V$  and for all scalars  $\alpha$  and  $\beta$ . In the special case in which  $V_1$  is the field of scalars (this is the simplest example of a vector space, except for the trivial one consisting of  $0$  alone),  $\Lambda$  is called a *linear functional*. A linear functional is thus a complex function on  $V$  which satisfies (2).

Note that one often writes  $\Lambda x$ , rather than  $\Lambda(x)$ , if  $\Lambda$  is linear.

The preceding definitions can of course be made equally well with any field whatsoever in place of the complex field. Unless the contrary is explicitly stated, however, all vector spaces occurring in this book will be complex, with one notable exception: the euclidean spaces  $R^k$  are vector spaces over the *real* field.

**2.2 Integration as a Linear Functional** Analysis is full of vector spaces and linear transformations, and there is an especially close relationship between integration on the one hand and linear functionals on the other.

For instance, Theorem 1.32 shows that  $L^1(\mu)$  is a vector space, for any positive measure  $\mu$ , and that the mapping

$$f \to \int_X f d\mu \quad (1)$$

is a linear functional on  $L^1(\mu)$ . Similarly, if  $g$  is any bounded measurable function, the mapping

$$f \to \int_X fg d\mu \quad (2)$$

is a linear functional on  $L^1(\mu)$ ; we shall see in Chap. 6 that the functionals (2) are, in a sense, the only interesting ones on  $L^1(\mu)$ .

For another example, let  $C$  be the set of all continuous complex functions on the unit interval  $I = [0, 1]$ . The sum of the two continuous functions is continuous, and so is any scalar multiple of a continuous function. Hence  $C$  is a vector space, and if

$$\Lambda f = \int_0^1 f(x) dx \quad (f \in C), \quad (3)$$

the integral being the ordinary Riemann integral, then  $\Lambda$  is clearly a linear functional on  $C$ ;  $\Lambda$  has an additional interesting property: it is a *positive linear functional*. This means that  $\Lambda f \ge 0$  whenever  $f \ge 0$ .

One of the tasks which is still ahead of us is the construction of the Lebesgue measure. The construction can be based on the linear functional (3), by the following observation: Consider a segment  $(a, b) \subset I$  and consider the class of all  $f \in C$  such that  $0 \le f \le 1$  on  $I$  and  $f(x) = 0$  for all  $x$  not in  $(a, b)$ . We have  $\Lambda f < b - a$  for all such  $f$ , but we can choose  $f$  so that  $\Lambda f$  is as close to  $b - a$  as desired. Thus the length (or measure) of  $(a, b)$  is intimately related to the values of the functional  $\Lambda$ .

The preceding observation, when looked at from a more general point of view, leads to a remarkable and extremely important theorem of F. Riesz:

*To every positive linear functional  $\Lambda$  on  $C$  corresponds a finite positive Borel measure  $\mu$  on  $I$  such that*

$$\Lambda f = \int_I f d\mu \quad (f \in C). \quad (4)$$

[The converse is obvious: if  $\mu$  is a finite positive Borel measure on  $I$  and if  $\Lambda$  is defined by (4), then  $\Lambda$  is a positive linear functional on  $C$ .]

It is clearly of interest to replace the bounded interval  $I$  by  $R^1$ . We can do this by restricting attention to those continuous functions on  $R^1$  which vanish outside some bounded interval. (These functions are Riemann integrable, for instance.) Next, functions of several variables occur frequently in analysis. Thus we ought to move from  $R^1$  to  $R^n$ . It turns out that the proof of the Riesz theorem still goes through, with hardly any changes. Moreover, it turns out that the euclidean properties of  $R^n$  (coordinates, orthogonality, etc.) play no role in the proof; in fact, if one thinks of them too much they just get in the way. Essential to the proof are certain *topological* properties of  $R^n$ . (Naturally. We are now dealing with *continuous* functions.) The crucial property is that of *local compactness*: Each point of  $R^n$  has a neighborhood whose closure is compact.

We shall therefore establish the Riesz theorem in a very general setting (Theorem 2.14). The existence of Lebesgue measure follows then as a special case. Those who wish to concentrate on a more concrete situation may skip lightly over the following section on topological preliminaries (Urysohn's lemma is the item of greatest interest there; see Exercise 3) and may replace locally compact Hausdorff spaces by locally compact metric spaces, or even by euclidean spaces, without missing any of the principal ideas.

It should also be mentioned that there are situations, especially in probability theory, where measures occur naturally on spaces without topology, or on topological spaces that are not locally compact. An example is the so-called Wiener measure which assigns numbers to certain sets of continuous functions and which is a basic tool in the study of Brownian motion. These topics will not be discussed in this book.
