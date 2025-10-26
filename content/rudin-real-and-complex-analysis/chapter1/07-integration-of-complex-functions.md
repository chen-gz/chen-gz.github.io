---
title: Integration of Complex Functions
---

As before,  $\mu$  will in this section be a positive measure on an arbitrary measurable space  $X$ .

**1.30 Definition** We define  $L^1(\mu)$  to be the collection of all complex measurable functions  $f$  on  $X$  for which

$$\int_X |f| d\mu < \infty.$$

Note that the measurability of  $f$  implies that of  $|f|$ , as we saw in Proposition 1.9(b); hence the above integral is defined.

The members of  $L^1(\mu)$  are called *Lebesgue integrable functions* (with respect to  $\mu$ ) or *summable functions*. The significance of the exponent 1 will become clear in Chap. 3.

**1.31 Definition** If  $f = u + iv$ , where  $u$  and  $v$  are real measurable functions on  $X$ , and if  $f \in L^1(\mu)$ , we define

$$\int_E f d\mu = \int_E u^+ d\mu - \int_E u^- d\mu + i \int_E v^+ d\mu - i \int_E v^- d\mu \quad (1)$$

for every measurable set  $E$ .

Here  $u^+$  and  $u^-$  are the positive and negative parts of  $u$ , as defined in Sec. 1.15;  $v^+$  and  $v^-$  are similarly obtained from  $v$ . These four functions are measurable, real, and nonnegative; hence the four integrals on the right of (1) exist, by Definition 1.23. Furthermore, we have  $u^+ \le |u| < |f|$ , etc., so that
