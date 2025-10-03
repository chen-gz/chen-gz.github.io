---
title: "A. Be Positive"
type: docs
math: true
---

## Problem

**time limit per test:** 1 second
**memory limit per test:** 256 megabytes

Given an array $a$ of $n$ elements, where each element is equal to $-1$, $0$, or $1$. In one operation, you can choose an index $i$ and increase $a_i$ by 1 (that is, assign $a_i := a_i + 1$). Operations can be performed any number of times, choosing any indices.

The goal is to make the product of all elements in the array strictly positive with the minimum number of operations, that is, $a_1 \cdot a_2 \cdot a_3 \cdot \ldots \cdot a_n > 0$. Find the minimum number of operations.

It is guaranteed that this is always possible.

## Solution

To make the product of all elements in the array strictly positive, two conditions must be met:

1.  The array must not contain any zeros.
2.  The number of negative ones ($-1$) must be even.

Let's analyze the costs of operations:
*   Changing a $0$ to a $1$ costs one operation ($0 \to 1$).
*   Changing a $-1$ to a $1$ costs two operations ($-1 \to 0 \to 1$).

First, we must eliminate all zeros from the array, as any zero will make the product zero. The most efficient way to do this is to change every $0$ to a $1$, which costs one operation per zero.

After converting all zeros to ones, the array only contains $1$s and $-1$s. The product of these elements will be positive if and only if the count of $-1$s is even.

Let's count the number of zeros (`zero_count`) and negative ones (`neg_count`) in the initial array.
The initial number of operations is `zero_count` to handle all the zeros.

After this, if `neg_count` is odd, the product of the array elements will be negative. To make it positive, we must change an odd number of $-1$s. The cheapest way is to change just one $-1$ to a $1$. This adds 2 operations to our total.

So, the total minimum number of operations is:
*   `zero_count` if `neg_count` is even.
*   `zero_count + 2` if `neg_count` is odd.

This covers all cases and gives the minimum number of operations.

[Submission Link](https://codeforces.com/contest/2149/submission/341214901)
