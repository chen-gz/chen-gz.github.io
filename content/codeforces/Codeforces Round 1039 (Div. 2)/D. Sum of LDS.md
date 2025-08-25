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

The property `max(p_i, p_{i+1}) > p_{i+2}` severely restricts the structure of the permutation. It can be shown that such permutations have a simple structure, which implies that the length of the Longest Decreasing Subsequence (LDS) in any subarray is small (at most 3).

The problem asks for `Sum_{l,r} LDS(l,r)`. A standard technique for this type of problem is to change the order of summation:
`Sum_{l,r} LDS(l,r) = Sum_{l,r} Sum_{k>=1} [LDS(l,r) >= k] = Sum_{k>=1} (Number of subarrays [l,r] with LDS >= k)`.

Let `N_k` be the number of subarrays with LDS length at least `k`. The answer is `N_1 + N_2 + N_3 + ...`.
Since the maximum possible LDS length is small, we only need to compute a few `N_k` terms.

1.  **`N_1`**: Any non-empty subarray has an LDS of length at least 1. The number of non-empty subarrays is `n * (n + 1) / 2`. So, `N_1 = n * (n + 1) / 2`.

2.  **`N_2`**: A subarray has an LDS of length at least 2 if and only if it is not strictly increasing. We can find `N_2` by taking the total number of subarrays and subtracting the number of strictly increasing ones. A subarray is strictly increasing if `p_l < p_{l+1} < ... < p_r`. We can count these by finding all maximal contiguous increasing blocks in the permutation.

3.  **`N_3`**: A subarray has an LDS of length at least 3 if it contains three elements `p_i > p_j > p_k` with `i < j < k`. We need to count the number of subarrays `[l,r]` that contain such a triplet. A systematic way to do this is to iterate through all possible middle elements `p_j` of a 3-LDS. For each `p_j`, we need to count how many `i < j` have `p_i > p_j` and how many `k > j` have `p_k < p_j`. This can be done efficiently using data structures like Fenwick trees or segment trees. Once we have these counts for each `j`, we can calculate `N_3`.

4.  **Higher `N_k`**: It can be proven that for permutations with this property, no subarray has an LDS of length 4 or more. So, `N_4, N_5, ...` are all 0.

The final answer is `N_1 + N_2 + N_3`. This approach breaks down the problem into more manageable counting subproblems that can be solved efficiently.

[submission](https://codeforces.com/contest/2128/submission/335212851)