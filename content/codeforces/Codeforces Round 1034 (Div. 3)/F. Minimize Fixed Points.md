---
title: F. Minimize Fixed Points
type: docs
math: true
---

[Codeforces Round 1034 (Div. 3) F](https://codeforces.com/contest/2123/problem/F)

## Problem

Call a permutation $p$ of length $n$ *good* if $\gcd(p_i, i) > 1$ for all $2 \le i \le n$. Find a good permutation with the *minimum* number of *fixed points* across all good permutations of length $n$. If there are multiple such permutations, print any of them.

- A **permutation** of length $n$ is an array that contains every integer from $1$ to $n$ exactly once, in any order.
- $\gcd(x, y)$ denotes the [greatest common divisor (GCD)](https://en.wikipedia.org/wiki/Greatest_common_divisor) of $x$ and $y$.
- A **fixed point** of a permutation $p$ is an index $j$ ($1 \le j \le n$) such that $p_j = j$.

### **Input**
The first line contains an integer $t$ ($1 \le t \le 10^4$) — the number of test cases.

The only line of each test case contains an integer $n$ ($2 \le n \le 10^5$) — the length of the permutation.

It is guaranteed that the sum of $n$ over all test cases does not exceed $10^5$.

### **Output**
For each test case, output on a single line an example of a good permutation of length $n$ with the minimum number of fixed points.

## Solution

### Idea
Start by initializing the permutation as the identity permutation, i.e., $p_i = i$ for all $i$. Then, try to modify it to satisfy the condition.

To achieve this, for each $i$, swap $p_i$ with $p_{spf(i)}$, where $spf(i)$ is the smallest prime factor of $i$. For example, if $i = 6$, the smallest prime factor is $2$, so swap $p_6$ with $p_2$. This ensures that $\gcd(p_6, 6) \ge 2$ and helps reduce the number of fixed points. The number of fixed points will reduce to the number of elements that are coprime to all other elements in the permutation.

[submission link](https://codeforces.com/contest/2123/submission/327012810)
