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

### Key Observations

1. **Cost Structure**: Destroying a trash bag costs 1 coin if its weight > $c$, otherwise it's free
2. **Weight Doubling**: After each destruction, all remaining bags double in weight
3. **Optimal Strategy**: We want to minimize the number of bags that exceed the threshold $c$

[submission](https://codeforces.com/contest/2128/submission/331617092)
