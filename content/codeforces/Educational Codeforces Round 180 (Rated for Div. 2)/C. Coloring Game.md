---
title: C. Coloring Game
type: docs
math: true
---

## Problem Statement

Alice and Bob are playing a game using an integer array $a$ of size $n$.

Initially, all elements of the array are colorless. First, Alice chooses 3 elements and colors them red. Then Bob chooses any element and colors it blue (if it was red — recolor it). Alice wins if the sum of the red elements is strictly greater than the value of the blue element.

Your task is to calculate the number of ways that Alice can choose 3 elements in order to win regardless of Bob's actions.

### Input

The first line contains a single integer $t$ $(1 \leq t \leq 1000)$ — the number of test cases.

The first line of each test case contains a single integer $n$ $(3 \leq n \leq 5000)$.

The second line contains $n$ integers $a_1, a_2, \ldots, a_n$ $(1 \leq a_1 \leq a_2 \leq \cdots \leq a_n \leq 10^5)$.

Additional constraint on the input: the sum of $n$ over all test cases doesn't exceed 5000.

### Output

For each test case, print a single integer — the number of ways that Alice can choose 3 elements in order to win regardless of Bob's actions.


## Solution

First, sort the array $a$ in non-decreasing order. This ensures that for any three elements $a_i, a_j, a_k$ (where $i < j < k$), we have $a_i \leq a_j \leq a_k$.

For any three elements $a_i, a_j, a_k$ (where $i < j < k$), Alice can guarantee a win if the following conditions are met:

1. $a_i + a_j > a_k$ (this ensures that the sum of the red elements is strictly greater than the blue element). This condition handles the case when Bob chooses the largest element $a_k$ as the blue element.
2. $a_i + a_j + a_k > a_n$. This ensures that the sum of the red elements is strictly greater than the largest element in the array, which is $a_n$. This condition handles the case when Bob chooses the largest element $a_n$ as the blue element.

As long as these two conditions are satisfied, Alice can guarantee a win regardless of Bob's choice.

We use two nested loops to iterate over all pairs $a_i$ and $a_j$ and check if there exists an $a_k$ such that both conditions are satisfied. To find $a_k$, we can use binary search to find the largest and smallest $a_k$ that satisfies the conditions.

[submission link](https://codeforces.com/contest/2112/submission/327452467)