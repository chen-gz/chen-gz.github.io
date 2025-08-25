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
The core idea is to build the permutation by creating cycles of indices that share a common prime factor. This ensures the gcd condition is met and minimizes fixed points. `p[1]` must be `1`, so it is always a fixed point. For other numbers, we can proceed as follows:

Iterate through numbers `i` from `n` down to `2`. If `i` has not been assigned a position in our permutation yet, it means we need to place it. We find its smallest prime factor, `p`. We then find all multiples of `p` less than or equal to `n` that have not been assigned yet. Let these be `m_1, m_2, ..., m_k` in increasing order. We can form a cycle: set `p[m_1] = m_2`, `p[m_2] = m_3`, ..., `p[m_{k-1}] = m_k`, and `p[m_k] = m_1`. This ensures that for each of these numbers, `p[m_j]` is a multiple of `p`, so `gcd(p[m_j], m_j) >= p > 1`. We mark all these numbers as assigned.

This process guarantees that no composite number is a fixed point. The only possible fixed points, besides `1`, are prime numbers for which this process doesn't create a cycle (e.g., if a prime's multiples are already taken).

[submission link](https://codeforces.com/contest/2123/submission/327012810)
