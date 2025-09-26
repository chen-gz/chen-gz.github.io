---
title: B. Another Divisibility Problem
type: docs
math: true
---

## Problem

Alice and Bob are playing a game. Alice gives Bob a positive integer $x$.

To win, Bob must find a positive integer $y$ such that the number formed by concatenating $x$ and $y$ (denoted as $x \# y$) is divisible by $x + y$.

For example, if $x = 835$ and $y = 47$, then $x \# y = 83547$ (the number formed by writing 835 followed by 47).

It can be proven that such a $y$ always exists. Help Bob find one such $y$.

### Input
- One integer $x$ ($1 \leq x < 10^8$)

### Output
- One integer $y$ ($1 \leq y < 10^9$) such that $x \# y$ is divisible by $x + y$

## Solution

### Key Observations

1. For a number $x$ with $d$ digits, concatenating $y$ to $x$ is equivalent to computing:
   - $x \# y = x \times 10^{\text{digits}(y)} + y$
2. We need to find $y$ such that $(x \# y) \bmod (x + y) = 0$
3. One strategy is to try $y = kx$ for some integer $k$, which makes $x + y = (k+1)x$

### Solution Strategy
Set $y = 2x$
   - Then $x + y = 3x$
   - And $x \# y$ is $x$ concatenated with $2x$
   - This often works and gives a smaller answer

[See my submission](https://codeforces.com/contest/2140/submission/337889269)