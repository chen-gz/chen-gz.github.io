---
title: D. Sum of LDS
type: docs
math: true
---
## Problem Statement

You are given a permutation $p_1, p_2, \ldots, p_n$ of length $n$ (i.e., an array containing each integer from $1$ to $n$ exactly once), with the property that for every $1 \leq i \leq n-2$:
$$
\max(p_i, p_{i+1}) > p_{i+2}
$$

For every pair of indices $1 \leq l \leq r \leq n$, consider the subarray $[p_l, p_{l+1}, \ldots, p_r]$. Let $LDS(l, r)$ denote the length of the longest decreasing subsequence in this subarray.

Compute the sum:
$$
\sum_{1 \leq l \leq r \leq n} LDS(l, r)
$$

**Definitions:**
- A *permutation* of length $n$ is an array of $n$ distinct integers from $1$ to $n$ in any order.
- A *decreasing subsequence* of length $k$ in an array $b$ is a sequence of indices $i_1 < i_2 < \ldots < i_k$ such that $b_{i_1} > b_{i_2} > \ldots > b_{i_k}$.

## Solution Overview

Let's analyze the problem step by step:

1. **Key Constraint:**  
   The condition $\max(p_i, p_{i+1}) > p_{i+2}$ ensures that two consecutive ascents cannot occur in the permutation.

2. **LDS Contribution:**  
   For any pair $(p_i, p_{i+1})$ where $p_i > p_{i+1}$, these two elements form a "block" that can contribute to the longest decreasing subsequence (LDS) in any subarray containing both. However, only one of them will actually increase the LDS length.

3. **Counting Contributions:**  
   For each such pair $(p_i, p_{i+1})$ with $p_i > p_{i+1}$, the number of subarrays containing both is $(i + 1) \times (n - i - 1)$, where $i$ is the index of $p_i$ (0-based).

4. **Total LDS Sum:**  
   If there are no such pairs, the sum is simply the sum over all subarrays of their lengths:
   $$
   n + 2(n-1) + 3(n-2) + \ldots + n
   $$
   Otherwise, subtract the overcounted contributions for each $(p_i, p_{i+1})$ where $p_i > p_{i+1}$. This part can be optimized using $O(1)$, but I did not implement it.

5. **Algorithm Steps:**
   - Iterate through the permutation and identify all pairs $(p_i, p_{i+1})$ with $p_i > p_{i+1}$.
   - For each such pair, subtract $(i + 1) \times (n - i - 1)$ from the total LDS sum.
   - Output the final result.

This approach leverages the permutation's structure and efficiently computes the required sum.

[submission](https://codeforces.com/contest/2128/submission/335212851)