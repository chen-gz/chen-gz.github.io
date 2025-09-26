---
title: C. Ultimate Value
type: docs
math: true
---
## Problem
Let's define a function $f(a)$ for an array $a$ of length $n$ as
$f(a) = cost + (a_1 - a_2 + a_3 - a_4 + \ldots + a_n)$
where cost is zero initially.

Now consider the scenario where Alice and Bob are given an array $a$ of length $n$. They play a game taking at most $10^{100}$ turns alternately with Alice going first.

In each turn, they must perform any one (only one) of the following operations:

End the game for both Alice and Bob.
Choose two indices $l, r$ with $1 \leq l \leq r \leq n$ and swap $a_l$ and $a_r$; this adds $(r - l)$ to the cost.

Assume that Alice tries to maximize $f(a)$ and Bob tries to minimize it.

Your task is to determine the final value of $f(a)$ assuming both players play optimally.

## Solution and Observations

The key insight to solve this problem comes from combining two factors: the index position and its associated swap cost.

1. **Game Simplification**: 
   - The game effectively reduces to finding a single optimal swap, as Alice can always undo Bob's moves

2. **Key Strategy - Index-Cost Combination**:
   - For each element at position $i$, we consider:
     - The cost of swapping (which depends on position $i$)
     - The change in value if we move this element
   - By combining these factors, we can evaluate each potential move's total impact
   - We track the best achievable differences separately for odd and even positions
   
3. **Final Value**:
   The answer is the maximum of:
   - The initial alternating sum (without any swaps)
   - The best achievable value after considering all possible index-cost combinations

The solution combines dynamic programming with careful tracking of potential value changes from swaps at different positions.

[submission link](https://codeforces.com/contest/2140/submission/337903503)