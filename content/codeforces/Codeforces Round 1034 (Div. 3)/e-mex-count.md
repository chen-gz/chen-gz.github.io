---
title: E. MEX Count
type: docs
math: true
---

[Codeforces Round 1034 (Div. 3) E](https://codeforces.com/contest/2123/problem/E)

## Problem Statement

**Time limit per test:** 3 seconds  
**Memory limit per test:** 256 megabytes

Define the MEX (minimum excluded value) of an array to be the smallest nonnegative integer not present in the array. For example,

- $\text{MEX}([2,2,1]) = 0$ because $0$ is not in the array.
- $\text{MEX}([3,1,0,1]) = 2$ because $0$ and $1$ are in the array but $2$ is not.
- $\text{MEX}([0,3,1,2]) = 4$ because $0$, $1$, $2$, and $3$ are in the array but $4$ is not.

You are given an array $a$ of size $n$ of nonnegative integers.

For all $k$ ($0 \leq k \leq n$), count the number of possible values of $\text{MEX}(a)$ after removing exactly $k$ values from $a$.

### Input

The first line contains an integer $t$ ($1 \leq t \leq 10^4$) — the number of test cases.

The first line of each test case contains one integer $n$ ($1 \leq n \leq 2 \cdot 10^5$) — the size of the array $a$.

The second line of each test case contains $n$ integers, $a_1, a_2, \ldots, a_n$ ($0 \leq a_i \leq n$).

It is guaranteed that the sum of $n$ over all test cases does not exceed $2 \cdot 10^5$.

### Output

For each test case, output a single line containing $n+1$ integers — the number of possible values of $\text{MEX}(a)$ after removing exactly $k$ values, for $k = 0, 1, \ldots, n$.



## Solution

### Key Insight

Instead of thinking about removing elements from the array, we can think about it as adding elements to an initially empty array. This perspective makes the problem much clearer.

### Understanding MEX Requirements

For an array to have $\text{MEX} = k$, it must satisfy two conditions:
1. **All values from $0$ to $k-1$ must be present** in the array
2. **The value $k$ must NOT be present** in the array

### Algorithm Overview

1. **Count Available Elements**: First, count how many times each value appears in the original array.

2. **Calculate Required Elements**: For each possible MEX value $m$:
   - We need at least one occurrence of each value from $0$ to $m-1$
   - We must avoid adding any occurrence of value $m$

3. **Find Valid Ranges**: For each MEX value $m$, determine the range of elements we can add while maintaining $\text{MEX} = m$.

4. **Use Difference Array**: We use a difference array to efficiently track which positions can achieve each MEX value.

5. **Prefix Sum**: Finally, compute the prefix sum of the difference array to get the final counts for each MEX value.


### Time Complexity
- **Time**: $O(n)$
- **Space**: $O(n)$

[submission link](https://codeforces.com/contest/2123/submission/327011924)

