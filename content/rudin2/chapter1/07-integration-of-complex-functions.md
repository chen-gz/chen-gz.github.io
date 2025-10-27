---
type: docs
---

## Integration of Complex Functions

As before,  $\mu$  will in this section be a positive measure on an arbitrary measurable space  $X$ .

**1.30 Definition** We define  $L^1(\mu)$  to be the collection of all complex measurable functions  $f$  on  $X$  for which

$$\int_X |f| d\mu < \infty.$$

Note that the measurability of  $f$  implies that of  $|f|$ , as we saw in Proposition 1.9(b); hence the above integral is defined.

The members of  $L^1(\mu)$  are called *Lebesgue integrable functions* (with respect to  $\mu$ ) or *summable functions*. The significance of the exponent 1 will become clear in Chap. 3.

**1.31 Definition** If  $f = u + iv$ , where  $u$  and  $v$  are real measurable functions on  $X$ , and if  $f \in L^1(\mu)$ , we define

$$\int_E f d\mu = \int_E u^+ d\mu - \int_E u^- d\mu + i \int_E v^+ d\mu - i \int_E v^- d\mu \quad (1)$$

for every measurable set  $E$ .

Here  $u^+$  and  $u^-$  are the positive and negative parts of  $u$ , as defined in Sec. 1.15;  $v^+$  and  $v^-$  are similarly obtained from  $v$ . These four functions are measurable, real, and nonnegative; hence the four integrals on the right of (1) exist, by Definition 1.23. Furthermore, we have  $u^+ \le |u| < |f|$ , etc., so that each of these four integrals is finite. Thus (1) defines the integral on the left as a complex number.

Occasionally it is desirable to define the integral of a measurable function  $f$  with range in  $[-\infty, \infty]$  to be

$$\int_E f \, d\mu = \int_E f^+ \, d\mu - \int_E f^- \, d\mu, \quad (2)$$

provided that at least one of the integrals on the right of (2) is finite. The left side of (2) is then a number in  $[-\infty, \infty]$ .

**1.32 Theorem** Suppose  $f$  and  $g \in L^1(\mu)$  and  $\alpha$  and  $\beta$  are complex numbers. Then  $\alpha f + \beta g \in L^1(\mu)$ , and

$$\int_X (\alpha f + \beta g) \, d\mu = \alpha \int_X f \, d\mu + \beta \int_X g \, d\mu. \quad (1)$$

PROOF The measurability of  $\alpha f + \beta g$  follows from Proposition 1.9(c). By Sec. 1.24 and Theorem 1.27,

$$\begin{aligned}\int_X |\alpha f + \beta g| \, d\mu &\le \int_X (|\alpha| |f| + |\beta| |g|) \, d\mu \\&= |\alpha| \int_X |f| \, d\mu + |\beta| \int_X |g| \, d\mu < \infty.\end{aligned}$$

Thus $\alpha f + \beta g \in L^1(\mu)$ .

To prove (1), it is clearly sufficient to prove

$$\int_X (f + g) \, d\mu = \int_X f \, d\mu + \int_X g \, d\mu \quad (2)$$

and

$$\int_X (\alpha f) \, d\mu = \alpha \int_X f \, d\mu, \quad (3)$$

and the general case of (2) will follow if we prove (2) for real  $f$  and  $g$  in  $L^1(\mu)$ .

Assuming this, and setting  $h = f + g$ , we have

$$h^+ - h^- = f^+ - f^- + g^+ - g^-$$

or

$$h^+ + f^- + g^- = f^+ + g^+ + h^- \quad (4)$$

By Theorem 1.27,

$$\int h^+ + \int f^- + \int g^- = \int f^+ + \int g^+ + \int h^-, \quad (5)$$

and since each of these integrals is finite, we may transpose and obtain (2).

That (3) holds if  $\alpha \ge 0$  follows from Proposition 1.24(c). It is easy to verify that (3) holds if  $\alpha = -1$ , using relations like  $(-u)^+ = u^-$ . The case  $\alpha = i$  is also easy: If  $f = u + iv$ , then

$$\int (if) = \int (iu - v) = \int (-v) + i \int u = - \int v + i \int u = i \left( \int u + i \int v \right) \\ = i \int f.$$

Combining these cases with (2), we obtain (3) for any complex  $\alpha$ . ////

**1.33 Theorem** If  $f \in L^1(\mu)$ , then

$$\left| \int_X f \, d\mu \right| \le \int_X |f| \, d\mu.$$

**PROOF** Put  $z = \int_X f \, d\mu$ . Since  $z$  is a complex number, there is a complex number  $\alpha$ , with  $|\alpha| = 1$ , such that  $\alpha z = |z|$ . Let  $u$  be the real part of  $\alpha f$ . Then  $u \le |\alpha f| = |f|$ . Hence

$$\left| \int_X f \, d\mu \right| = \alpha \int_X f \, d\mu = \int_X \alpha f \, d\mu = \int_X u \, d\mu \le \int_X |f| \, d\mu.$$

The third of the above equalities holds since the preceding ones show that  $\int \alpha f \, d\mu$  is real. ////

We conclude this section with another important convergence theorem.

**1.34 Lebesgue's Dominated Convergence Theorem** Suppose  $\{f_n\}$  is a sequence of complex measurable functions on  $X$  such that

$$f(x) = \lim_{n \to \infty} f_n(x) \quad (1)$$

exists for every  $x \in X$ . If there is a function  $g \in L^1(\mu)$  such that

$$|f_n(x)| \le g(x) \quad (n = 1, 2, 3, \dots; x \in X), \quad (2)$$

then  $f \in L^1(\mu)$ ,

$$\lim_{n \to \infty} \int_X |f_n - f| \, d\mu = 0, \quad (3)$$

and

$$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu. \quad (4)$$

PROOF Since  $|f| \le g$  and  $f$  is measurable,  $f \in L^1(\mu)$ . Since  $|f_n - f| \le 2g$ , Fatou's lemma applies to the functions  $2g - |f_n - f|$  and yields

$$\begin{aligned}\int_X 2g \, d\mu &\le \liminf_{n \to \infty} \int_X (2g - |f_n - f|) \, d\mu \\&= \int_X 2g \, d\mu + \liminf_{n \to \infty} \left( - \int_X |f_n - f| \, d\mu \right) \\&= \int_X 2g \, d\mu - \limsup_{n \to \infty} \int_X |f_n - f| \, d\mu.\end{aligned}$$

Since  $\int 2g \, d\mu$  is finite, we may subtract it and obtain

$$\limsup_{n \to \infty} \int_X |f_n - f| \, d\mu \le 0. \quad (5)$$

If a sequence of nonnegative real numbers fails to converge to 0, then its upper limit is positive. Thus (5) implies (3). By Theorem 1.33, applied to  $f_n - f$ , (3) implies (4). ////
