---
title: E. And Constraint
type: docs
math: true
---

## Problem Statement

You are given a sequence $a$ of length $n-1$ and a sequence $b$ of length $n$.

You can perform the following operation any number of times (possibly zero):
- Choose an index $1 \leq i \leq n$ and increment $b_i$ by 1 (i.e., set $b_i \leftarrow b_i + 1$).

Your goal is to perform the minimum number of operations such that for every $1 \leq i \leq n-1$, the condition $b_i \& b_{i+1} = a_i$ holds, where $\&$ denotes the bitwise AND operation. If it is impossible to satisfy the condition, report it as well.

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

## Key Observations

### Necessary Condition Analysis

The problem requires that $b_i \& b_{i+1} = a_i$ for all $i$, which means that all bits of $a_i$ must be set in both $b_i$ and $b_{i+1}$.

Since we also have $b_{i+1} \& b_{i+2} = a_{i+1}$, the bits of $a_{i+1}$ must be set in both $b_{i+1}$ and $b_{i+2}$.

For $b_{i+1}$ to satisfy both conditions simultaneously, it must have all bits set in both $a_i$ and $a_{i+1}$. Therefore, the minimum requirement is:
$$b_i \geq a_i | a_{i-1}$$

Note that $b_1$ and $b_n$ only need to satisfy one condition each.

### Feasibility Check

This gives us a necessary condition: if we construct $b$ with $b_i = a_i | a_{i-1}$ and this doesn't satisfy $b_i \& b_{i+1} = a_i$, then no valid solution exists (output -1).

Conversely, if $b$ satisfies the necessary condition and $b_i \& b_{i+1} = a_i$, then we can always find a valid $b$ that satisfies all constraints.

## Optimized Dynamic Programming Solution

### Problem Analysis

To find the minimum number of operations, we use dynamic programming since $b_i$ depends only on $b_{i-1}$, $a_{i-1}$, and $a_i$.

The key insight is to determine which states of $b_i$ are useful for minimizing operations.

### State Space Optimization

Consider the constraint that $b_i$ must contain all bits from $a_i | a_{i-1}$. For any additional bits beyond this minimum requirement, we only need to consider a limited set of useful values.

For example, if $a_i | a_{i-1} = \text{0xa}$, then $b_i$ must contain at least $\text{0xa}$. For additional bits, we only consider values that follow a specific pattern to avoid redundant computation.

The key observation is that if we have a higher bit value that costs more operations to reach, and the lower bit value will not be needed, we should set all of them to 0 (check the code below to better understand this). This means we only need to consider approximately 30 possible values for each $b_i$.

### Implementation Details

We precompute useful bit patterns using:

```cpp
const int HIGHEST = 0x00ffffffffffffff;
p[0] = make_pair(0xffffffffffff, 0);
p[1] = make_pair(0xfffffffffffe, 1);
for (int i = 2; i < 40; i++) {
    p[i].first = p[i - 1].first << 1;
    p[i].second = p[i - 1].second << 1;
    p[i].first &= HIGHEST;
}
```

For each position $i$, we compute the target value as:
```cpp
int target_val = (b[i] & bits.first) | bits.second | a[i] | a[i - 1];
```

This formula ensures that:
- We preserve the necessary bits from $a_i | a_{i-1}$
- We consider only the useful bit patterns from our precomputed set
- We maintain the minimum cost to reach each valid state

### Time Complexity

The dynamic programming runs in $O(n \cdot k)$ time, where $n$ is the array length and $k \approx 30$ is the number of useful bit patterns per position. This is efficient enough for the given constraints.



