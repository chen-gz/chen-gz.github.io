---
title: E2. Submedians (Hard Version)
type: docs
math: true
---

[View on Codeforces](https://codeforces.com/contest/2128/problem/E2)

## Problem Statement

This is the hard version of the problem. You are asked to find **all submedians** and for each, any corresponding subarray.

### Definition

An integer $v$ is a **median** of an array $b$ of length $m$ if and only if:

- $v$ is greater than or equal to at least $\lceil \frac{m}{2} \rceil$ elements of the array, and
- $v$ is less than or equal to at least $\lceil \frac{m}{2} \rceil$ elements of the array.

#### Examples

- The only median of $[9, 3, 7]$ is $7$.
- The medians of $[5, 3, 7, 9]$ are $5$, $6$, and $7$.
- The only median of $[2, 2, 2]$ is $2$.

### Task

You're given an integer $k$ and an array $a_1, \ldots, a_n$ of integers between $1$ and $n$.

An integer $v$ from $1$ to $n$ is said to be a **submedian** if there exists at least one pair of indices $(l, r)$ such that:

- $1 \leq l \leq r \leq n$
- $r - l + 1 \geq k$
- $v$ is a median of the subarray $[a_l, \ldots, a_r]$

Find **all submedians** and for each, any corresponding pair of indices $(l, r)$.


### Input

Each test contains multiple test cases.  
The first line contains the number of test cases $t$ ($1 \leq t \leq 50\,000$).  
The description of the test cases follows.

- The first line of each test case contains two integers $n$ and $k$ ($1 \leq k \leq n \leq 300\,000$).
- The second line of each test case contains $n$ integers $a_1, a_2, \ldots, a_n$ ($1 \leq a_i \leq n$).

It is guaranteed that the sum of $n$ over all test cases doesn't exceed $300\,000$.


### Output

For each test case, output your answer in the following format:

- On the first line, output $c$, the number of submedians.
- On the $i$-th of the following $c$ lines, output three integers $v_i$, $l_i$, and $r_i$ such that $r_i - l_i + 1 \geq k$ and $v_i$ is one of the medians of the subarray $[a_{l_i}, \ldots, a_{r_i}]$.

Each submedian should be reported exactly once, that is, integers $v_1, \ldots, v_c$ must be pairwise distinct. The order in which they are reported does not matter.

If there are many solutions, you can print any of them.

## Solution

The hard version of this problem asks for all possible submedians. A key insight is that the set of all submedians forms a contiguous range of integers, `[v_min, v_max]`. If we can find the minimum possible submedian (`v_min`) and the maximum possible submedian (`v_max`), then we can prove that any integer `v` such that `v_min <= v <= v_max` is also a submedian.

The overall strategy is therefore:
1.  Find the maximum submedian, `v_max`, and a corresponding subarray `[l_max, r_max]`.
2.  Find the minimum submedian, `v_min`, and a corresponding subarray `[l_min, r_min]`.
3.  Generate a valid subarray for every integer from `v_min` to `v_max`.

### Finding `v_max` and `v_min`

Finding `v_max` is identical to the easy version of the problem. We can use binary search on the answer, `x`, with the predicate `check(x)`: "Does there exist a subarray where the count of elements `>= x` is at least the count of elements `< x`?". The largest `x` for which this is true is `v_max`. This can be solved in $O(n \log n)$.

To find `v_min`, we can use a clever trick. The minimum value in a set of numbers `a` is related to the maximum value of the negated set `-a`. Specifically, `min(a) = -max(-a)`. To avoid dealing with negative numbers, we can use a large constant `C` and say `v_min(a) = C - v_max(C - a)`. We can apply the same `max_mid` function to the transformed array `a'_i = C - a_i` to find `v_max(a')`. Then, we can find `v_min(a) = C - v_max(a')`. This also takes $O(n \log n)$.

### The Continuity Argument

Now we need to show that every integer between `v_min` and `v_max` is a valid submedian. We can do this with a constructive, "continuity" argument. We have a subarray `[l_min, r_min]` whose median is `v_min` and another subarray `[l_max, r_max]` whose median is `v_max`.

We can transform the first subarray into the second one by applying a series of single-element changes. For example, we can slide the left boundary `l_min` one step at a time until it reaches `l_max`, and then do the same for the right boundary. When we add or remove a single element from a subarray, its median value can only change by a small amount. Because the change is gradual, the median of our sliding window will pass through every integer value between `v_min` and `v_max` at some point during the transformation. By recording the subarray at each step, we can find a valid window for every submedian in the range.

### Implementation: Sliding Window Median

To implement the transformation efficiently, we need a data structure that can maintain the median of a sliding window. A standard and efficient way to do this is with two balanced multisets:
- A `low` multiset to store the smaller half of the elements in the window.
- A `high` multiset to store the larger half of the elements.

We keep the sets balanced so their sizes differ by at most one. With this structure, the median of the window is always at the "join" of the two sets (specifically, it will be the smallest element in `high`). When an element is added to or removed from the window, we update the multisets and re-balance them. This allows us to find the new median in $O(\log m)$ time, where `m` is the window size.

The algorithm proceeds as follows:
1.  Initialize the two multisets with the elements from the `v_min` subarray `[l_min, r_min]`.
2.  Record all medians from `v_min` up to the initial window's median.
3.  In a loop, apply single-element moves to slide the window from `[l_min, r_min]` towards `[l_max, r_max]`.
4.  After each move, update the multisets, find the new median, and record all integer values between the previous median and the new one, associating them with the current window.

This process constructively finds a valid subarray for every single submedian from `v_min` to `v_max`, solving the problem. The complexity of the sliding window part is proportional to the distance between the two subarrays, which is at most $O(n)$, with each step taking $O(\log k)$, leading to a total complexity dominated by the initial $O(n \log n)$ searches.

[submission](https://codeforces.com/contest/2128/submission/337203561)