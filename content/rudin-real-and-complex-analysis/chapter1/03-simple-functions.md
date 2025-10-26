## Simple Functions

**1.16 Definition** A complex function  $s$  on a measurable space  $X$  whose range consists of only finitely many points will be called a *simple function*. Among these are the nonnegative simple functions, whose range is a finite subset of  $[0, \infty)$ . Note that we explicitly exclude  $\infty$  from the values of a simple function.

If  $\alpha_1, \dots, \alpha_n$  are the distinct values of a simple function  $s$ , and if we set  $A_i = \{x: s(x) = \alpha_i\}$ , then clearly

$$s = \sum_{i=1}^{n} \alpha_i \chi_{A_i},$$

where  $\chi_{A_i}$  is the characteristic function of  $A_i$ , as defined in Sec. 1.9(d).

It is also clear that  $s$  is measurable if and only if each of the sets  $A_i$  is measurable.

**1.17 Theorem** Let  $f: X \to [0, \infty]$  be measurable. There exist simple measurable functions  $s_n$  on  $X$  such that

(a)  $0 \le s_1 \le s_2 \le \dots \le f$ .

(b)  $s_n(x) \to f(x)$  as  $n \to \infty$ , for every  $x \in X$ .

**PROOF** Put  $\delta_n = 2^{-n}$ . To each positive integer  $n$  and each real number  $t$  corresponds a unique integer  $k = k_n(t)$  that satisfies  $k\delta_n \le t < (k+1)\delta_n$ . Define

$$\varphi_n(t) = \begin{cases} k_n(t)\delta_n & \text{if } 0 \le t < n \\ n & \text{if } n \le t \le \infty. \end{cases} \quad (1)$$

Each  $\varphi_n$  is then a Borel function on  $[0, \infty]$ ,

$$t - \delta_n < \varphi_n(t) \le t \quad \text{if } 0 \le t \le n, \quad (2)$$

 $0 \le \varphi_1 \le \varphi_2 \le \cdots \le t$ , and  $\varphi_n(t) \to t$  as  $n \to \infty$ , for every  $t \in [0, \infty]$ . It follows that the functions

$$s_n = \varphi_n \circ f \quad (3)$$

satisfy (a) and (b); they are measurable, by Theorem 1.12(d).

///
{{% details title="简单说明" closed="true" %}}
{{< callout >}}
$\varphi_n(t)$ 是一个阶梯函数。
{{< /callout >}}
{{% /details %}}
