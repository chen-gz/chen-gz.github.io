---
title: "B. Another Divisibility Problem"
type: docs
math: true
---

## 问题

Alice 和 Bob 在玩一个游戏。Alice 给 Bob 一个正整数 $x$。

为了获胜，Bob 必须找到一个正整数 $y$，使得由 $x$ 和 $y$ 连接而成的数（表示为 $x \# y$）能被 $x + y$ 整除。

例如，如果 $x = 835$ 且 $y = 47$，那么 $x \# y = 83547$（由 835 后跟 47 组成的数）。

可以证明这样的 $y$ 总是存在的。请帮助 Bob 找到一个这样的 $y$。

### 输入
-   一个整数 $x$ ($1 \leq x < 10^8$)

### 输出
-   一个整数 $y$ ($1 \leq y < 10^9$)，使得 $x \# y$ 能被 $x + y$ 整除

## 题解

### 关键观察

1.  对于一个有 $d$ 位数字的数 $x$，将 $y$ 连接到 $x$ 后面等同于计算：
    -   $x \# y = x \times 10^{\text{digits}(y)} + y$
2.  我们需要找到一个 $y$ 使得 $(x \# y) \bmod (x + y) = 0$
3.  一个策略是尝试令 $y = kx$（对于某个整数 $k$），这使得 $x + y = (k+1)x$

### 解题策略
设置 $y = 2x$
-   那么 $x + y = 3x$
-   并且 $x \# y$ 是 $x$ 与 $2x$ 的连接
-   这通常有效并且能给出一个较小的答案

[查看我的提交](https://codeforces.com/contest/2140/submission/337889269)