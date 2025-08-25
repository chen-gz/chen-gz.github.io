---
title: D. Token Removing
type: docs
math: true
---

## Problem Statement

A sequence of integers `a` is defined as **valid** if and only if for all `1 <= i <= n`, `0 <= a_i <= i`.

The **weight** `f(a)` of a valid sequence `a` of length `n` is calculated as follows:
- Initially, there is a token at each integer position in the segment `[1, n]`.
- We perform `n` operations. In the `i`-th operation, if `a_i != 0`, we remove one token from the segment `[a_i, i]` that has not been previously removed. If `a_i = 0`, we do nothing.
- `f(a)` is the total number of distinct ways to perform this sequence of removals. Two ways are different if, for some operation `t`, the token removed at that step is at a different position.

You are given `n` and `m`, and you need to find the sum of `f(a)` over all valid sequences `a`, modulo `m`.

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ ($1 ≤ t ≤ 1000$). The description of the test cases follows.

The only line of each test case contains two integers $n$ and $m$ ($1 ≤ n ≤ 5000$, $10^8 ≤ m ≤ 1.01 × 10^9$) — the length of valid sequences, and the modulus.

It is guaranteed that the sum of $n^2$ over all test cases does not exceed $2.5 × 10^7$.

### Output

For each test case, output an integer — the sum of the weights over all valid sequences of length `n`, modulo `m`.

## Solution
The goal is to calculate the sum of weights `f(a)` over all valid sequences `a`. Instead of iterating through each sequence, we can change our perspective.

### 1. The Core Idea: Contribution of a Token Set

Let's ask a different question: **For a specific set of removed token positions `P`, what is its total contribution to the final sum?**
If we can calculate this for any given set `P`, we can sum these contributions over all possible sets `P` to get the answer.

### 2. Contribution of a Single Set of Tokens `P`

Let's assume we decide to remove a specific set of `k` tokens at positions `P = {p_0, p_1, ..., p_{k-1}}`. For convenience, let's sort them in descending order: `n >= p_0 > p_1 > ... > p_{k-1} >= 1`.

For this set `P` to be removed, we need to find a sequence `a` and a corresponding removal plan. This has two parts:

#### 2.1 Choosing `a[t]` values

For each token `p_j` removed at some step `t_j`, the condition is `1 <= a[t_j] <= p_j <= t_j`. This gives `p_j` choices for the value of `a[t_j]`. For all `k` tokens in `P`, the total number of choices for the `a` values is the product `p_0 * p_1 * ... * p_{k-1}`.

#### 2.2 Assigning removal steps `t_j`

We need to assign a unique removal step `t_j` to each token `p_j` such that `t_j >= p_j`.
- For the largest token `p_0`, it can be removed at any step from `p_0` to `n`. There are `n - p_0 + 1` available steps.
- For `p_1`, it can be removed at any step from `p_1` to `n`, except for the step taken by `p_0`. This leaves `(n - p_1 + 1) - 1` choices.
- Generalizing, for the token `p_j` (which is the `j`-th largest, 0-indexed), there are `(n - p_j + 1)` potential steps. However, `j` of these steps have been assigned to the `j` tokens larger than `p_j`. This leaves `(n - p_j + 1 - j)` choices for `t_j`.

#### 2.3 Final Contribution Formula

The total contribution for a fixed set `P` is:
`Contribution(P) = (product of p_j) * (product of available steps) = product_{j=0 to k-1} [p_j * (n - p_j + 1 - j)]`

Our new goal is to sum this value over all possible non-empty subsets `P` of `{1, 2, ..., n}`.

### 3. The Dynamic Programming Solution

Enumerating all `2^n` subsets `P` is too slow. We use dynamic programming, building the sets `P` one element at a time, considering elements in descending order from `n` to `1`.

#### 3.1 DP State Definition

`dp[i][k]` = The sum of contributions for all sets `P` of size `k` where all chosen tokens are from the range `{i, i+1, ..., n}`.

#### 3.2 DP Transition

We compute this by iterating `i` from `n` down to `1`. For each `i`, we decide:
1.  **Don't include `i` in `P`**: The `k` tokens must come from `{i+1, ..., n}`. The sum of contributions is `dp[i+1][k]`.
2.  **Include `i` in `P`**: We need to select `k-1` other tokens from `{i+1, ..., n}`.
    - The sum of contributions for these `k-1` token sets is `dp[i+1][k-1]`.
    - When we add `i` to these sets, `i` is the smallest element, so its 0-indexed rank (from largest) is `k-1`.
    - The multiplicative factor for `i` is `i * (n - i + 1 - (k-1))`.
    - The total contribution for this case is `dp[i+1][k-1] * i * (n - i + 2 - k)`.

#### 3.3 The DP Recurrence

`dp[i][k] = (dp[i+1][k] + dp[i+1][k-1] * i * (n - i + 2 - k)) % m`

**Base Cases**:
- `dp[n+1][0] = 1` (for the empty set, the product of contributions is 1)
- `dp[n+1][k] = 0` for `k > 0`

**Final Answer**: The sum of contributions for all possible non-empty set sizes `k` is `sum_{k=1 to n} dp[1][k]`.

[submission link](https://codeforces.com/contest/2119/submission/327831719)