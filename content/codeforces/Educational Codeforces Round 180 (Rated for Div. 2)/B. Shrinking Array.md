---
title: B. Shrinking Array
type: docs
math: true
---

## Problem Statement

An array $b$ is called **beautiful** if:
- It consists of at least two elements
- There exists a position $i$ such that $|b_i - b_{i+1}| \leq 1$

Given an array $a$, you can perform the following operation while the array has at least two elements:

1. Choose two adjacent positions $i$ and $i+1$ in the array $a$
2. Choose an integer $x$ such that $\min(a_i, a_{i+1}) \leq x \leq \max(a_i, a_{i+1})$
3. Remove the numbers $a_i$ and $a_{i+1}$ from the array, and insert the number $x$ in their place

The size of the array decreases by 1 after each operation.

**Task**: Calculate the minimum number of operations required to make the array beautiful, or report that it is impossible.

## Solution

The problem asks for the minimum number of operations to make an array "beautiful". An array is beautiful if it has two adjacent elements `b_i, b_{i+1}` with `|b_i - b_{i+1}| <= 1`. An operation consists of merging two adjacent elements `a_i, a_{i+1}` into a new element `x`, where `x` can be any integer between `a_i` and `a_{i+1}` (inclusive).

The solution can be found by checking for 0, 1, or more operations sequentially. It turns out we only need to check for 0 and 1 operations.

### Case 1: 0 Operations (Answer = 0)
First, we check if the array is already beautiful. We can do this by iterating through the array and checking if `|a_i - a_{i+1}| <= 1` for any `i`. If we find such a pair, no operations are needed, and the answer is 0.

### Case 2: 1 Operation (Answer = 1)
If the array is not already beautiful, we check if it can become beautiful after exactly one operation.
A single operation merges `a_i` and `a_{i+1}` into a new element `x`. The new, shorter array looks like `[..., a_{i-1}, x, a_{i+2}, ...]`.
For this new array to be beautiful, one of the new adjacencies must satisfy the condition:
-   `|a_{i-1} - x| <= 1` (if `i > 0`)
-   `|x - a_{i+2}| <= 1` (if `i+1 < n-1`)

We can choose `x` to be any integer in the range `[min(a_i, a_{i+1}), max(a_i, a_{i+1})]`.
So, to make `|a_{i-1} - x| <= 1`, we need to be able to choose an `x` that is in `[a_{i-1}-1, a_{i-1}+1]`. This is possible if and only if the interval `[min(a_i, a_{i+1}), max(a_i, a_{i+1})]` and the interval `[a_{i-1}-1, a_{i-1}+1]` have a non-empty intersection.
Similarly for the other case with `a_{i+2}`.

The algorithm for checking for a 1-op solution is:
-   Iterate `i` from `0` to `n-2` (the pair to merge).
-   If `i > 0`, check if `[min(a_i, a_{i+1}), max(a_i, a_{i+1})]` intersects with `[a_{i-1}-1, a_{i-1}+1]`.
-   If `i+1 < n-1`, check if `[min(a_i, a_{i+1}), max(a_i, a_{i+1})]` intersects with `[a_{i+2}-1, a_{i+2}+1]`.
-   If any of these checks are true for any `i`, the answer is 1.

### Case 3: Impossible (Answer = -1)
The key insight is that if the array cannot be made beautiful in 0 or 1 operations, it's impossible to make it beautiful at all.
The intuition is that if all adjacent pairs are "far" from each other, and merging any single pair doesn't bring it "close" to its new neighbors, the array has a structure of separated blocks of values. Subsequent merges will create values within the range of these blocks, but will not be able to bridge the gaps between them to satisfy the beauty condition with a new neighbor.
Therefore, if the checks for 0 and 1 operations fail, the answer is -1.

## Implementation

[View submission](https://codeforces.com/contest/2112/submission/327449200)
