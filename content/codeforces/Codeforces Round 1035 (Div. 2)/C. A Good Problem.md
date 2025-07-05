---
title: "C. A Good Problem"
type: "docs"
math: true
---

## Problem Statement

You are given four positive integers $n, l, r, k$. You need to find the lexicographically smallest* array $a$ of length $n$, consisting of integers, such that:

1. For every $1 \leq i \leq n$, $l \leq a_i \leq r$.
2. $a_1 \& a_2 \& \ldots \& a_n = a_1 \oplus a_2 \oplus \ldots \oplus a_n$, where $\&$ denotes the bitwise AND operation and $\oplus$ denotes the bitwise XOR operation.

If no such array exists, output $-1$. Otherwise, since the entire array might be too large to output, output $a_k$ only.

**Note:** An array $a$ is lexicographically smaller than an array $b$ if and only if one of the following holds:
- $a$ is a prefix of $b$, but $a \neq b$; or
- In the first position where $a$ and $b$ differ, the array $a$ has a smaller element than the corresponding element in $b$.

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ $(1 \leq t \leq 10^4)$. The description of the test cases follows.

Each test case contains four positive integers $n, l, r, k$ $(1 \leq k \leq n \leq 10^{18}, 1 \leq l \leq r \leq 10^{18})$.

### Output

For each test case, output $a_k$ or $-1$ if no array meets the conditions.

## Solution 

If $n$ is odd, we can construct the array with all elements equal to $l$.

Then we can think what happens if $n$ is even. In this case, we can have $n-2$ elements equal to $l$ which means the & operation will be $l$ but the xor operation will be $0$.

The last two elements should satisfy the condition that $l & v_1 & v_2 = v_1 \oplus v_2 = res$. Consider a single bit in $l$, if we want to keep this bit in the result $res$, this bit should be set in both $v_1$ and $v_2$. If both bits are set, then $xor$ will be $0$ and that means they are not valid. 
So for all bits that are set in $l$, we can not set them in both $v_1$ and $v_2$.
And the values $v_1$ and $v_2$ should be greater than $l$.
So we can have $v_1 = v_2 = 1 << \text{(largest bit of } l\text{)}$. In this case, res = 0 and $v_1$, $v_2$ is the smallest possible value. 


[submission link](https://codeforces.com/contest/2119/submission/327589616)
