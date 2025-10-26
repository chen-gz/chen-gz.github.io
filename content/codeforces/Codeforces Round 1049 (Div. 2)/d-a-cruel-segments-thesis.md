---
title: D. A Cruel Segment's Thesis
type: docs
math: true
---

## Problem
You are given $n$ segments on a number line. The $i$-th segment is represented as $[l_i,r_i]$. Initially, all the segments are unmarked.

You perform the following operation repeatedly until there are no unmarked segments left:

In the $k$-th operation, if there are at least two unmarked segments, choose any two unmarked segments $[l_i,r_i]$ and $[l_j,r_j]$, mark both of them, and add a new marked segment $[x_k,y_k]$ satisfying the following conditions:
$l_i \leq x_k \leq r_i$,
$l_j \leq y_k \leq r_j$,
$x_k \leq y_k$.
If there is exactly one unmarked segment remaining, mark it.
Your task is to determine the maximum possible sum of lengths of all the marked segments at the end of the process. Note that the length of a segment $[l,r]$ is $r-l$.

## Solution and Observations

The solution can be divided into two cases based on whether the number of segments is even or odd.

### Case 1: Even Number of Segments

When $n$ is even, we can pair up all segments optimally. For each pair:
- One segment will provide the right endpoint ($r_i$)
- One segment will provide the left endpoint ($l_i$)

The total sum can be formulated as:

$$ \sum_{i=1}^{n/2} (r_{i}) - \sum_{i=n/2+1}^{n} (l_{i}) $$

To optimize this further, we can transform it to:

$$ \sum_{i=1}^{n} {r_{i}} - \sum_{i=n/2+1}^{n} (l_{i} + r_{i}) $$

This transformation reveals that to maximize the sum, we need to:
1. Include all right endpoints initially
2. Remove the lowest $n/2$ values of $(l_i + r_i)$

### Case 2: Odd Number of Segments

When $n$ is odd, one segment will remain unpaired. The strategy is:
1. Consider each segment as the potentially unpaired one
2. For the remaining even number of segments, apply the same optimization as in Case 1
3. Choose the configuration that yields the maximum total sum

[View Solution](https://codeforces.com/contest/2140/submission/338024450)
