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

The answer can only be **-1**, **0**, or **1**.

### Algorithm

1. **Check if already beautiful (Answer: 0)**
   - If there exist two adjacent elements with absolute difference ≤ 1, the answer is 0

2. **Check if one operation suffices (Answer: 1)**
   - For each pair of adjacent elements, we can merge them to get a new element between them
   - Check if the element right before or after this merged position would create a beautiful array
   - If any such pair exists, the answer is 1

3. **Otherwise (Answer: -1)**
   - If no such pair of adjacent elements exists that can lead to a beautiful array, the answer is -1

### Key Insight

It can be proven that merging more than 1 pair of adjacent elements will not help to get a beautiful array, so we only need to consider at most one operation.

## Implementation

[View submission](https://codeforces.com/contest/2112/submission/327449200)
