---
title: A. Recycling Center
type: docs
math: true
---

## Problem Statement

In the recycling center, there are $n$ trash bags, the $i$-th bag has a weight of $a_i$. At each second, two actions will happen successively:

1. First, you must choose a trash bag and destroy it. It will cost 1 coin if the weight of the trash bag is strictly greater than $c$, and it will cost 0 coins otherwise.
2. Then, the weight of each remaining trash bag will get multiplied by two.

What is the minimum number of coins you have to spend to get rid of all trash bags?

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ $(1 \leq t \leq 1000)$. The description of the test cases follows.

The first line of each test case contains two integers $n$ and $c$ $(1 \leq n \leq 30, 1 \leq c \leq 10^9)$.

The second line of each test case contains $n$ integers $a_1, a_2, \ldots, a_n$ $(1 \leq a_i \leq 10^9)$ — the weight of each trash bag.

### Output

For each test case, you must output a single integer — the minimum number of coins you have to spend to destroy all trash bags.


## Solution

The problem asks for the minimum cost to destroy `n` trash bags, where the cost depends on the order of destruction. At each step `k` (from 1 to `n`), we destroy one bag, and the weights of all remaining bags double.

Let the initial weights be `a_1, a_2, ..., a_n`. If we decide on a destruction order (a permutation) `p_1, p_2, ..., p_n`, where `p_k` is the index of the bag destroyed at step `k`:
- At step 1, we destroy bag `p_1`. Its weight is `a_{p_1}`. Cost is 1 if `a_{p_1} > c`.
- At step 2, we destroy bag `p_2`. Its weight has doubled once, so it's `a_{p_2} * 2^1`. Cost is 1 if `a_{p_2} * 2^1 > c`.
- At step `k`, we destroy bag `p_k`. Its weight has doubled `k-1` times, becoming `a_{p_k} * 2^(k-1)`. The cost is 1 if this value exceeds `c`.

The total cost is the sum of costs over all `n` steps. To minimize this total cost, we need to decide which bag to destroy at each step.

### Optimal Strategy

The key insight comes from observing the weight multipliers. The bag destroyed at step `k` has its initial weight multiplied by `2^(k-1)`. The multipliers `2^0, 2^1, ..., 2^(n-1)` form an increasing sequence.
To minimize the total cost, we should pair the largest initial weights with the smallest multipliers, and the smallest initial weights with the largest multipliers. This is a classic rearrangement inequality principle.

This means we should destroy the bags with the largest initial weights first. The optimal strategy is:
1.  Sort the initial weights `a_i` in descending order. Let the sorted weights be `a'_1 >= a'_2 >= ... >= a'_n`.
2.  At step 1, destroy the bag with weight `a'_1`.
3.  At step 2, destroy the bag with weight `a'_2`.
4.  ...and so on. At step `k`, destroy the bag with weight `a'_k`.

### Algorithm

1.  Read `n` and `c` and the array `a`.
2.  Sort `a` in descending order.
3.  Initialize `total_cost = 0`.
4.  Iterate `k` from `1` to `n`:
    -   The weight of the bag to be destroyed is `a[k-1]` (using 0-based indexing for the sorted array).
    -   The current weight is `a[k-1] * 2^(k-1)`.
    -   If `a[k-1] * 2^(k-1) > c`, increment `total_cost`.
5.  Output `total_cost`.

This approach is efficient. Sorting takes `O(n log n)`, and the loop takes `O(n)`. Given `n <= 30`, this is very fast. We need to be careful with potential overflows when calculating `a_i * 2^(k-1)`, as `a_i` and `c` can be up to `10^9` and `k-1` up to 29. Using 64-bit integers (long long in C++) is necessary.

[submission](https://codeforces.com/contest/2128/submission/331617092)
