---
title: C. A Good Problem
type: docs
math: true
---

## Problem Statement

You are given four positive integers $n, l, r, k$. You need to find the lexicographically smallest* array $a$ of length $n$, consisting of integers, such that:

1. For every $1 \leq i \leq n$, $l \leq a_i \leq r$.
2. $a_1 \And a_2 \And \ldots \And a_n = a_1 \oplus a_2 \oplus \ldots \oplus a_n$, where $\And$ denotes the bitwise AND operation and $\oplus$ denotes the bitwise XOR operation.

If no such array exists, output $-1$. Otherwise, since the entire array might be too large to output, output $a_k$ only.

**Note:** An array $a$ is lexicographically smaller than an array $b$ if and only if one of the following holds:
- $a$ is a prefix of $b$, but $a \neq b$; or
- In the first position where $a$ and $b$ differ, the array $a$ has a smaller element than the corresponding element in $b$.

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ $(1 \leq t \leq 10^4)$. The description of the test cases follows.

Each test case contains four positive integers $n, l, r, k$ $(1 \leq k \leq n \leq 2 \cdot 10^5, 1 \leq l \leq r \leq 10^{18})$.

### Output

For each test case, output $a_k$ or $-1$ if no array meets the conditions.

## Solution

Let's analyze the condition `AND(a_i) = XOR(a_i)` based on the parity of `n`.

**Case 1: `n` is odd**
We can construct a valid array by setting all elements to the same value `v`, where `l <= v <= r`. If `a_i = v` for all `i`, then `AND(a_i) = v`. The bitwise XOR of `n` identical numbers is `v` if `n` is odd. So, the condition is satisfied.
To find the lexicographically smallest array, we should choose the smallest possible value for `a_1`, `a_2`, etc. The smallest value in the allowed range is `l`.
Thus, the lexicographically smallest array is `a_i = l` for all `i`. For any `k`, `a_k = l`.

**Case 2: `n` is even**
If we set all `a_i = v`, `AND` is `v` and `XOR` is `0`. This would require `v=0`, which is not possible since `l >= 1`.
Let's consider the bits. If a bit is set in the `AND` result, it must be set in all `a_i`. The `XOR` of that bit would then be `0` (as `n` is even), which contradicts the `AND` bit being `1`. Therefore, the `AND` of the array must be `0`. This means the `XOR` must also be `0`.

To find the lexicographically smallest array, we want to make the first elements as small as possible. Let's try setting `a_1 = a_2 = ... = a_{n-2} = l`.
Let the last two elements be `v_1` and `v_2`.
- The `AND` of the array is `l & v_1 & v_2`. This must be `0`.
- The `XOR` of the array is `(l \oplus ... \oplus l) [n-2 \text{ times}] \oplus v_1 \oplus v_2 = 0 \oplus v_1 \oplus v_2 = v_1 \oplus v_2`. This must be `0`.

From `v_1 \oplus v_2 = 0`, we get `v_1 = v_2`. Let `v = v_1 = v_2`.
The `AND` condition becomes `l & v = 0`. We also need `v` to be in the range `[l, r]`.
So, we need to find the smallest `v` such that `v >= l`, `v <= r`, and `v & l = 0`.
For `v` to be greater than `l` while having no common set bits, `v` must have a bit set at a position higher than the most significant bit of `l`. The smallest such number is the smallest power of 2 that is greater than `l`. Let's call this `v_best`.

If this `v_best` is greater than `r`, we cannot find such a `v` in the allowed range. In this case, no solution exists.
Otherwise, the lexicographically smallest array is `[l, l, ..., l, v_best, v_best]`.
- If `k <= n-2`, `a_k = l`.
- If `k > n-2` (i.e., `k=n-1` or `k=n`), `a_k = v_best`.


[submission link](https://codeforces.com/contest/2119/submission/327589616)
