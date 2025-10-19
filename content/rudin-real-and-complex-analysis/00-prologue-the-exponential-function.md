---
title: "Prologue: The Exponential Function"
math: true
---

This is the most important function in mathematics. It is defined, for every complex number $z$, by the formula

$$ \exp(z) = \sum_{n=0}^{\infty} \frac{z^n}{n!}. \quad (1) $$

The series (1) converges absolutely for every $z$ and converges uniformly on every bounded subset of the complex plane. Thus $\exp$ is a continuous function. The absolute convergence of (1) shows that the computation

$$ \sum_{k=0}^{\infty} \frac{a^k}{k!} \sum_{m=0}^{\infty} \frac{b^m}{m!} = \sum_{n=0}^{\infty} \frac{1}{n!} \sum_{k=0}^{n} \frac{n!}{k!(n-k)!} a^k b^{n-k} = \sum_{n=0}^{\infty} \frac{(a+b)^n}{n!} $$

is correct. It gives the important addition formula

$$ \exp(a) \exp(b) = \exp(a+b), \quad (2) $$

valid for all complex numbers $a$ and $b$.

We define the number $e$ to be $\exp(1)$, and shall usually replace $\exp(z)$ by the customary shorter expression $e^z$. Note that $e^0 = \exp(0) = 1$, by (1).

### Theorem

(a) For every complex $z$ we have $e^z \neq 0$.

(b) $\exp$ is its own derivative: $\exp'(z) = \exp(z)$.

(c) The restriction of $\exp$ to the real axis is a monotonically increasing positive function, and

$$ e^x \to \infty \text{ as } x \to \infty, \quad e^x \to 0 \text{ as } x \to -\infty. $$

(d) There exists a positive number $\pi$ such that $e^{\pi i/2} = i$ and such that $e^z = 1$ if and only if $z/(2\pi i)$ is an integer.

(e) $\exp$ is a periodic function, with period $2\pi i$.

(f) The mapping $t \to e^{it}$ maps the real axis onto the unit circle.

(g) If $w$ is a complex number and $w \neq 0$, then $w = e^z$ for some $z$.

**PROOF** By (2), $e^z \cdot e^{-z} = e^{z-z} = e^0 = 1$. This implies (a). Next,

$$ \exp'(z) = \lim_{h \to 0} \frac{\exp(z+h) - \exp(z)}{h} = \exp(z) \lim_{h \to 0} \frac{\exp(h) - 1}{h} = \exp(z). $$

The first of the above equalities is a matter of definition, the second follows from (2), and the third from (1), and (b) is proved.

That $\exp$ is monotonically increasing on the positive real axis, and that $e^x \to \infty$ as $x \to \infty$, is clear from (1). The other assertions of (c) are consequences of $e^x \cdot e^{-x} = 1$.

For any real number $t$, (1) shows that $e^{-it}$ is the complex conjugate of $e^{it}$. Thus

$$ |e^{it}|^2 = e^{it} \cdot \overline{e^{it}} = e^{it} \cdot e^{-it} = e^{it-it} = e^0 = 1, $$

or

$$ |e^{it}| = 1 \quad (t \text{ real}). \quad (3) $$

In other words, if $t$ is real, $e^{it}$ lies on the unit circle. We define $\cos t$, $\sin t$ to be the real and imaginary parts of $e^{it}$:

$$ \cos t = \operatorname{Re}[e^{it}], \quad \sin t = \operatorname{Im}[e^{it}] \quad (t \text{ real}). \quad (4) $$

If we differentiate both sides of Euler's identity

$$ e^{it} = \cos t + i \sin t, \quad (5) $$

which is equivalent to (4), and if we apply (b), we obtain

$$ \cos' t + i \sin' t = i e^{it} = -\sin t + i \cos t, $$

so that

$$ \cos' = -\sin, \quad \sin' = \cos. \quad (6) $$

The power series (1) yields the representation

$$ \cos t = 1 - \frac{t^2}{2!} + \frac{t^4}{4!} - \frac{t^6}{6!} + \cdots. \quad (7) $$

Take $t = 2$. The terms of the series (7) then decrease in absolute value (except for the first one) and their signs alternate. Hence $\cos 2$ is less than the sum of the first three terms of (7), with $t = 2$; thus $\cos 2 < -\frac{1}{3}$. Since $\cos 0 = 1$ and $\cos$ is a continuous real function on the real axis, we conclude that there is a smallest positive number $t_0$ for which $\cos t_0 = 0$. We define

$$ \pi = 2t_0. \quad (8) $$

It follows from (3) and (5) that $\sin t_0 = \pm 1$. Since

$$ \sin'(t) = \cos t > 0 $$

on the segment $(0, t_0)$ and since $\sin 0 = 0$, we have $\sin t_0 > 0$, hence $\sin t_0 = 1$, and therefore

$$ e^{\pi i/2} = i. \quad (9) $$

It follows that $e^{\pi i} = i^2 = -1$, $e^{2\pi i} = (-1)^2 = 1$, and then $e^{2\pi in} = 1$ for every integer $n$. Also, (e) follows immediately:

$$ e^{z + 2\pi i} = e^z e^{2\pi i} = e^z. \quad (10) $$

If $z = x + iy$, $x$ and $y$ real, then $e^z = e^x e^{iy}$; hence $|e^z| = e^x$. If $e^z = 1$, we therefore must have $e^x = 1$, so that $x = 0$; to prove that $y/2\pi$ must be an integer, it is enough to show that $e^{iy} \neq 1$ if $0 < y < 2\pi$, by (10).

Suppose $0 < y < 2\pi$, and

$$ e^{iy/4} = u + iv \quad (u \text{ and } v \text{ real}). \quad (11) $$

Since $0 < y/4 < \pi/2$, we have $u > 0$ and $v > 0$. Also

$$ e^{iy} = (u + iv)^4 = u^4 - 6u^2v^2 + v^4 + 4iuv(u^2 - v^2). \quad (12) $$

The right side of (12) is real only if $u^2 = v^2$; since $u^2 + v^2 = 1$, this happens only when $u^2 = v^2 = \frac{1}{2}$, and then (12) shows that

$$ e^{iy} = -1 \neq 1. $$

This completes the proof of (d).

We already know that $t \to e^{it}$ maps the real axis into the unit circle. To prove (f), fix $w$ so that $|w| = 1$; we shall show that $w = e^{it}$ for some real $t$. Write $w = u + iv$, $u$ and $v$ real, and suppose first that $u \ge 0$ and $v \ge 0$. Since $u \le 1$, the definition of $\pi$ shows that there exists a $t$, $0 \le t \le \pi/2$, such that $\cos t = u$; then $\sin^2 t = 1 - u^2 = v^2$, and since $\sin t \ge 0$ if $0 \le t \le \pi/2$, we have $\sin t = v$. Thus $w = e^{it}$.

If $u < 0$ and $v \ge 0$, the preceding conditions are satisfied by $-iw$. Hence $-iw = e^{it}$ for some real $t$, and $w = e^{i(t + \pi/2)}$. Finally, if $v < 0$, the preceding two cases show that $-w = e^{it}$ for some real $t$, hence $w = e^{i(t + \pi)}$. This completes the proof of (f).

If $w \neq 0$, put $\alpha = w/|w|$. Then $w = |w|\alpha$. By (c), there is a real $x$ such that $|w| = e^x$. Since $|\alpha| = 1$, (f) shows that $\alpha = e^{iy}$ for some real $y$. Hence $w = e^{x + iy}$. This proves (g) and completes the theorem. ///

We shall encounter the integral of $(1 + x^2)^{-1}$ over the real line. To evaluate it, put $\varphi(t) = \sin t / \cos t$ in $(-\pi/2, \pi/2)$. By (6), $\varphi' = 1 + \varphi^2$. Hence $\varphi$ is a monotonically increasing mapping of $(-\pi/2, \pi/2)$ onto $(-\infty, \infty)$, and we obtain

$$ \int_{-\infty}^{\infty} \frac{dx}{1 + x^2} = \int_{-\pi/2}^{\pi/2} \frac{\varphi'(t) dt}{1 + \varphi^2(t)} = \int_{-\pi/2}^{\pi/2} dt = \pi. $$
