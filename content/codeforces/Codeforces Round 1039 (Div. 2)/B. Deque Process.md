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

The problem asks us to construct a "good" sequence `q` by repeatedly taking an element from either the left or the right end of a given permutation `p`. A sequence is "good" if it does not contain any contiguous subarray of length 5 that is strictly increasing or strictly decreasing.

The problem guarantees that a solution always exists. This suggests that a greedy approach might work. At each step, we need to decide whether to take the leftmost element `p[l]` or the rightmost element `p[r]`.

### Greedy Strategy

A simple and effective greedy strategy is to alternate our goal at each turn. To break any potential monotonic (increasing or decreasing) sequence, we can alternate between picking the smaller of the two available elements and the larger of the two.

Let's define the turns as `i = 1, 2, ..., n`.
-   On **odd-numbered** turns (`i = 1, 3, 5, ...`), we aim to pick the **smaller** element. We compare `p[l]` and `p[r]` and take the one that is smaller.
-   On **even-numbered** turns (`i = 2, 4, 6, ...`), we aim to pick the **larger** element. We compare `p[l]` and `p[r]` and take the one that is larger.

#### Why this works (Intuition)
By taking the smaller element on odd turns and the larger on even turns, the resulting sequence `q` will tend to oscillate. For example, `q_1` will be small, `q_2` will be large, `q_3` will be small, `q_4` will be large, and so on. A sequence like `small, large, small, large, small` is highly unlikely to be strictly increasing or decreasing for 5 consecutive terms. This strategy actively works against the formation of long monotonic chains.

### Algorithm
1.  Initialize two pointers, `l = 0` and `r = n-1`.
2.  Initialize an empty result string `s`.
3.  Iterate `i` from `1` to `n`:
    -   If `i` is odd:
        -   Compare `p[l]` and `p[r]`.
        -   If `p[l] < p[r]`, append 'L' to `s` and increment `l`.
        -   Else, append 'R' to `s` and decrement `r`.
    -   If `i` is even:
        -   Compare `p[l]` and `p[r]`.
        -   If `p[l] > p[r]`, append 'L' to `s` and increment `l`.
        -   Else, append 'R' to `s` and decrement `r`.
        -   (Note: if `p[l] == p[r]`, which can only happen when `l==r`, the choice doesn't matter).
4.  Output the string `s`.

This greedy algorithm provides a valid construction for the sequence `q` in `O(n)` time.
