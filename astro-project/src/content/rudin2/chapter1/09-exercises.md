---
type: docs
---
## Exercises

1. Does there exist an infinite  $\sigma$ -algebra which has only countably many members?

2. Prove an analogue of Theorem 1.8 for  $n$  functions.

3. Prove that if  $f$  is a real function on a measurable space  $X$  such that  $\{x: f(x) \ge r\}$  is measurable for every rational  $r$ , then  $f$  is measurable.

4. Let  $\{a_n\}$  and  $\{b_n\}$  be sequences in  $[-\infty, \infty]$ , and prove the following assertions:

$$(a) \quad \limsup (-a_n) = -\liminf a_n.$$

$$(b) \quad \limsup (a_n + b_n) \le \limsup a_n + \limsup b_n$$

provided none of the sums is of the form  $\infty - \infty$ .

(c) If  $a_n \le b_n$  for all  $n$ , then

$$\liminf a_n \le \liminf b_n.$$

Show by an example that strict inequality can hold in (b).

5. (a) Suppose  $f: X \to [-\infty, \infty]$  and  $g: X \to [-\infty, \infty]$  are measurable. Prove that the sets

$$\{x: f(x) < g(x)\}, \{x: f(x) = g(x)\}$$

are measurable.

(b) Prove that the set of points at which a sequence of measurable real-valued functions converges (to a finite limit) is measurable.

6. Let  $X$  be an uncountable set, let  $\mathcal{M}$  be the collection of all sets  $E \subset X$  such that either  $E$  or  $E^c$  is at most countable, and define  $\mu(E) = 0$  in the first case,  $\mu(E) = 1$  in the second. Prove that  $\mathcal{M}$  is a  $\sigma$ -algebra in  $X$  and that  $\mu$  is a measure on  $\mathcal{M}$ . Describe the corresponding measurable functions and their integrals.

7. Suppose  $f_n: X \to [0, \infty]$  is measurable for  $n = 1, 2, 3, \dots$ ,  $f_1 \ge f_2 \ge f_3 \ge \dots \ge 0$ ,  $f_n(x) \to f(x)$  as  $n \to \infty$ , for every  $x \in X$ , and  $f_1 \in L^1(\mu)$ . Prove that then

$$\lim_{n \to \infty} \int_X f_n d\mu = \int_X f d\mu$$

and show that this conclusion does not follow if the condition " $f_1 \in L^1(\mu)$ " is omitted.

8. Put  $f_n = \chi_E$  if  $n$  is odd,  $f_n = 1 - \chi_E$  if  $n$  is even. What is the relevance of this example to Fatou's lemma?

9. Suppose  $\mu$  is a positive measure on  $X$ ,  $f: X \to [0, \infty]$  is measurable,  $\int_X f d\mu = c$ , where  $0 < c < \infty$ , and  $\alpha$  is a constant. Prove that

$$\lim_{n \to \infty} \int_X n \log [1 + (f/n)^\alpha] d\mu = \begin{cases} \infty & \text{if } 0 < \alpha < 1, \\ c & \text{if } \alpha = 1, \\ 0 & \text{if } 1 < \alpha < \infty. \end{cases}$$

Hint: If  $\alpha \ge 1$ , the integrands are dominated by  $\alpha f$ . If  $\alpha < 1$ , Fatou's lemma can be applied.

10. Suppose  $\mu(X) < \infty$ ,  $\{f_n\}$  is a sequence of bounded complex measurable functions on  $X$ , and  $f_n \to f$  uniformly on  $X$ . Prove that

$$\lim_{n \to \infty} \int_X f_n d\mu = \int_X f d\mu,$$

and show that the hypothesis " $\mu(X) < \infty$ " cannot be omitted.

11. Show that

$$A = \bigcap_{n=1}^{\infty} \bigcup_{k=n}^{\infty} E_k$$

in Theorem 1.41, and hence prove the theorem without any reference to integration.

12. Suppose  $f \in L^1(\mu)$ . Prove that to each  $\epsilon > 0$  there exists a  $\delta > 0$  such that  $\int_E |f| d\mu < \epsilon$  whenever  $\mu(E) < \delta$ .

13. Show that proposition 1.24(c) is also true when  $c = \infty$ .