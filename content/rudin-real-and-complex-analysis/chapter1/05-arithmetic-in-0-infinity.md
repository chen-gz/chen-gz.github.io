## Arithmetic in $[0, \infty]$

**1.22** Throughout integration theory, one inevitably encounters  $\infty$ . One reason is that one wants to be able to integrate over sets of infinite measure; after all, the real line has infinite length. Another reason is that even if one is primarily interested in real-valued functions, the lim sup of a sequence of positive real functions or the sum of a sequence of positive real functions may well be  $\infty$  at some points, and much of the elegance of theorems like 1.26 and 1.27 would be lost if one had to make some special provisions whenever this occurs.

Let us define  $a + \infty = \infty + a = \infty$  if  $0 \le a \le \infty$ , and

$$a \cdot \infty = \infty \cdot a = \begin{cases} \infty & \text{if } 0 < a \le \infty \\ 0 & \text{if } a = 0; \end{cases}$$

sums and products of real numbers are of course defined in the usual way.

It may seem strange to define  $0 \cdot \infty = 0$ . However, one verifies without difficulty that with this definition the *commutative, associative, and distributive laws hold in  $[0, \infty]$  without any restriction*.

The cancellation laws have to be treated with some care:  $a + b = a + c$  implies  $b = c$  only when  $a < \infty$ , and  $ab = ac$  implies  $b = c$  only when  $0 < a < \infty$ . Observe that the following useful proposition holds:

$$\text{If } 0 \le a_1 \le a_2 \le \cdots, 0 \le b_1 \le b_2 \le \cdots, a_n \to a, \text{ and } b_n \to b, \text{ then } a_n b_n \to ab.$$

If we combine this with Theorems 1.17 and 1.14, we see that sums and products of measurable functions into  $[0, \infty]$  are measurable.
