---
title: B. Deque Process
type: docs
math: true
---

## Problem Statement

We say that an array $a$ of size $n$ is **bad** if and only if there exists $1 \leq i \leq n-4$ such that one of the following conditions holds:

- $a_i < a_{i+1} < a_{i+2} < a_{i+3} < a_{i+4}$
- $a_i > a_{i+1} > a_{i+2} > a_{i+3} > a_{i+4}$

An array is **good** if and only if it's not bad. For example:

- $a = [3,1,2,4,5,6]$ is bad because $a_2 < a_3 < a_4 < a_5 < a_6$.
- $a = [7,6,5,4,1,2,3]$ is bad because $a_1 > a_2 > a_3 > a_4 > a_5$.
- $a = [7,6,5,1,2,3,4]$ is good.
You're given a permutation* $p_1, p_2, \ldots, p_n$.

You must perform $n$ turns. At each turn, you must remove either the leftmost or the rightmost remaining element in $p$. Let $q_i$ be the element removed at the $i$-th turn.

Choose which element to remove at each turn so that the resulting array $q$ is good. We can show that under the given constraints, it's always possible.

*A permutation of length $n$ is an array consisting of $n$ distinct integers from $1$ to $n$ in arbitrary order. For example, $[2,3,1,5,4]$ is a permutation, but $[1,2,2]$ is not a permutation ($2$ appears twice in the array), and $[1,3,4]$ is also not a permutation ($n=3$ but there is $4$ in the array).

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ ($1 \leq t \leq 10000$). The description of the test cases follows.

The first line of each test case contains a single integer $n$ ($5 \leq n \leq 100000$) — the length of the array.

The second line of each test case contains $n$ integers $p_1, p_2, \ldots, p_n$ ($1 \leq p_i \leq n$, $p_i$ are pairwise distinct) — elements of the permutation.

It is guaranteed that the sum of $n$ over all test cases doesn't exceed $200000$.

### Output

For each test case, you must output a string $s$ of length $n$. For every $1 \leq i \leq n$, at the $i$-th turn:

- $s_i = \mathtt{L}$ means that you removed the leftmost element of $p$
- $s_i = \mathtt{R}$ means that you removed the rightmost element of $p$

We can show that an answer always exists. If there are multiple solutions, print any of them.

## Solution

The basic idea is to remove the minimum of the left and right elements in odd rounds, and remove the maximum of the left and right elements in even rounds.

Refer to the official solution for more details.
