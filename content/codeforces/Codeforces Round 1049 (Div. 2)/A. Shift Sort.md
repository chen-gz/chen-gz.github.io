---
title: A. Shift Sort
type: docs
math: true
---

time limit per test1 second

## Problem Statement

You are given a binary string $s$ of length $n$. You may perform the following operation any number of times (including zero):

* Choose three indices $1 \leq i < j < k \leq n$ and cyclically shift the values at $s_i$, $s_j$, $s_k$ either to the right or left.

For example, for the string $110110$:
- If you choose $i=1$, $j=2$, $k=3$ and perform a right shift, the string becomes $011110$.
- If you choose $i=4$, $j=5$, $k=6$ and perform a left shift, the string becomes $110101$.

Your task is to determine the minimum number of operations required to sort the binary string in non-decreasing order (all $0$s before all $1$s).

## Solution

### Key Observations

1. **Operation Effect**: Each operation allows you to cyclically shift three elements, which can be used to move a '0' past two '1's or vice versa.
2. **Sorting Goal**: The goal is to move all '0's to the front and all '1's to the back.
3. **Optimal Strategy**: The minimum number of '0' not in the correct position. Each operation can swap a pair of '0' and '1'.


[submission](https://codeforces.com/contest/2140/submission/337888623)