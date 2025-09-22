---
title: A. Add or XOR
type: docs
math: true
---

## Problem Statement

You are given two non-negative integers $a$ and $b$. You can apply two types of operations on $a$ any number of times and in any order:

1. $a \leftarrow a + 1$. The cost of this operation is $x$.
2. $a \leftarrow a \oplus 1$, where $\oplus$ denotes the bitwise XOR operation. The cost of this operation is $y$.

Now you are asked to make $a = b$. If it's possible, output the minimum cost; otherwise, report it.

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ ($1 \leq t \leq 10^4$). The description of the test cases follows.

The only line of each test case contains four integers $a, b, x, y$ ($1 \leq a, b \leq 100, 1 \leq x, y \leq 10^7$) — the two integers given to you and the respective costs of two types of operations.

### Output

For each test case, output an integer — the minimum cost to make $a = b$, or $-1$ if it is impossible.

## Solution

The second operation (XOR with 1) can increase the value of $a$ by 1 when $a$ is even and decrease the value of $a$ by 1 when $a$ is odd.

We can only reach $b$ from $a$ if $a \leq b$, since both operations can only increase $a$ (except when $a$ is odd and we XOR with 1, which decreases $a$ by 1).

The strategy is as follows:
- If $a = b + 1$ and $a$ is odd, we can reach $b$ by XORing once, which costs $y$.
- If $a = b$, no operations needed, so return $0$.
- If $a < b$, we need to increase $a$ by $(b - a)$ units.
- Else we cannot reach $b$ from $a$, so return `-1`.

For each unit increase, we can either:
1. Use operation 1 (add 1) with cost $x$
2. Use operation 2 (XOR with 1) when $a$ is even, which costs $y$.

Since the data is small, we can directly increase $a$ one by one until it reaches $b$ and calculate the cost accordingly.

But actually, the cost can be calculated directly:

- If $x \leq y$, always use operation 1 (add 1) to reach $b$ from $a$, which costs $(b - a) \cdot x$.
- Otherwise, the cost $= (b - a) \div 2 \cdot (x + y)$, and if $(b - a)$ is odd, we need one more operation of type 1 or type 2.

[submission link](https://codeforces.com/contest/2119/submission/327542396)
