---
title: E. And Constraint
type: docs
math: true
---

## Problem Statement

You are given a sequence $a$ of length $n-1$ and a sequence $b$ of length $n$.

You can perform the following operation any number of times (possibly zero):
- Choose an index $1 \leq i \leq n$ and increment $b_i$ by 1 (i.e., set $b_i \leftarrow b_i + 1$).

Your goal is to perform the minimum number of operations such that for every $1 \leq i \leq n-1$, the condition $b_i \And b_{i+1} = a_i$ holds, where $\And$ denotes the bitwise AND operation. If it is impossible to satisfy the condition, report it as well.

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ ($1 \leq t \leq 10^4$). The description of the test cases follows.

The first line contains a single integer $n$ ($2 \leq n \leq 10^5$).

The second line contains $n-1$ integers $a_1, a_2, \ldots, a_{n-1}$ ($0 \leq a_i < 2^{29}$).

The third line contains $n$ integers $b_1, b_2, \ldots, b_n$ ($0 \leq b_i < 2^{29}$).

It is guaranteed that the sum of $n$ over all test cases does not exceed $2 \cdot 10^5$.

### Output
For each test case, you need to output only one integer.

If the goal can be achieved, output one integer — the minimum number of operations required. Otherwise, output $-1$.


## Solution

[submission link](https://codeforces.com/contest/2119/submission/328263885)

Let `B_i` be the final values of the array after applying the operations. The problem is to find a sequence `B` that minimizes the total cost `sum(B_i - b_i)`, subject to:
1. `B_i >= b_i` for all `i`.
2. `B_i & B_{i+1} = a_i` for all `i` from `1` to `n-1`.

### 1. Necessary Conditions and Feasibility

From the condition `B_i & B_{i+1} = a_i`, we know that `a_i` must be a "submask" of both `B_i` and `B_{i+1}` (i.e., if a bit is 1 in `a_i`, it must be 1 in `B_i` and `B_{i+1}`).
This gives us a necessary condition for each `B_i`:
- `B_i` must be a supermask of `a_i`.
- `B_i` must also be a supermask of `a_{i-1}` (from the condition `B_{i-1} & B_i = a_{i-1}`).

Combining these, `B_i` must contain all the bits that are set in either `a_i` or `a_{i-1}`. Let's define `a_0 = 0` and `a_n = 0`. Then, for any `i`, `B_i` must be a supermask of `a_i | a_{i-1}`.

Furthermore, since we can only increment `b_i`, `B_i` must be a supermask of the original `b_i`.
So, the target value `B_i` must be a supermask of `L_i = b_i | a_i | a_{i-1}`. This also implies `B_i >= L_i`.

**Initial Feasibility Check**:
Before starting, we can check if a solution is even possible. For each `i`, we must have `(L_i & L_{i+1})` be a supermask of `a_i`. If for any `i`, `(L_i & L_{i+1}) & a_i != a_i`, then no solution exists.

### 2. Optimized Dynamic Programming

This problem can be solved with dynamic programming. A naive DP state `dp[i][mask]` (min cost for prefix `i` with `B_i = mask`) is too slow due to the large state space for `mask`. The solution requires an optimized DP.

**Core Idea of the Optimization:**
The choice of `B_i` affects the cost at step `i` (`B_i - b_i`) and constrains the choices for `B_{i-1}` and `B_{i+1}`. We need to find a balance. Setting extra bits in `B_i` (bits not in `L_i`) increases the cost at `i` but might reduce the cost from previous steps by relaxing the constraints on `B_{i-1}`.

The key insight is that we don't need to test every possible `mask` for `B_i`. For each position `i`, we only need to consider a small set of "useful" candidate masks for `B_i`. These useful masks are typically `L_i` itself, and variations of `L_i` where we add a few carefully chosen bits. The logic is that adding very high bits to `B_i` is expensive and often not optimal. The solution explores a limited number of candidate masks for each `B_i` that are likely to lead to the minimum total cost.

**DP State:**
`dp[i][j]` = minimum cost for the prefix `1...i`, where `B_i` is the `j`-th useful candidate mask for position `i`.

**Transition:**
To compute `dp[i][j]`, we consider the `j`-th candidate mask for `B_i`, let's call it `mask_j`.
`cost_i = mask_j - b_i`.
We then need to find the minimum cost from the previous step, `dp[i-1]`, considering all candidate masks `mask_k` for `B_{i-1}` that are compatible with `mask_j` (i.e., `mask_k & mask_j = a_{i-1}`).
`dp[i][j] = cost_i + min(compatible_costs_from_dp[i-1])`.

This optimization reduces the number of states at each step from `2^29` to a small constant (e.g., ~30-60), making the DP feasible. The implementation often involves techniques like "Sum over Subsets" (SOS) DP to efficiently calculate the `min(compatible_costs)` part of the transition.



