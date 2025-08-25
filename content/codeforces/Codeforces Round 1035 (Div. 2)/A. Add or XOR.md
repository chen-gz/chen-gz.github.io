---
title: A. Add or XOR
type: docs
math: true
---

## Problem Statement

You are given two non-negative integers $a$ and $b$. You can apply two types of operations on $a$ any number of times and in any order:

1. $a \leftarrow a + 1$. The cost of this operation is $x$.
2. $a \leftarrow a \oplus 1$, where $\oplus$ denotes the bitwise XOR operation. The cost of this operation is $y$.

Now you are asked to make $a = b$. If it's possible, output the minimum cost; otherwise, report it.

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ ($1 \leq t \leq 10^4$). The description of the test cases follows.

The only line of each test case contains four integers $a, b, x, y$ ($1 \leq a, b \leq 100, 1 \leq x, y \leq 10^7$) — the two integers given to you and the respective costs of two types of operations.

### Output

For each test case, output an integer — the minimum cost to make $a = b$, or $-1$ if it is impossible.

## Solution

This problem can be modeled as finding the shortest path in a graph. The nodes of the graph are integers, and the edges represent the operations. We want to find the minimum cost to go from node `a` to node `b`.

The states in our search are the numbers we can reach. From any integer `u`, we can reach:
1.  `u + 1` with a cost of `x`.
2.  `u \oplus 1` (u XOR 1) with a cost of `y`.

Since the edge costs are non-negative, we can use Dijkstra's algorithm to find the shortest path.

The algorithm is as follows:
1.  Create a distance array `dist` to store the minimum cost to reach each number from `a`. Initialize `dist[a] = 0` and all other distances to infinity.
2.  Use a priority queue to store pairs of `(cost, number)`. Initially, it contains `(0, a)`.
3.  While the priority queue is not empty, extract the pair with the smallest cost, say `(c, u)`.
4.  If `u` is our target `b`, we have found the minimum cost, and we can terminate.
5.  Otherwise, for each possible operation from `u`:
    -   Consider moving to `v = u + 1`. The new cost is `c + x`. If this is less than the current `dist[v]`, update `dist[v]` and add `(c + x, v)` to the priority queue.
    -   Consider moving to `v = u \oplus 1`. The new cost is `c + y`. If this is less than the current `dist[v]`, update `dist[v]` and add `(c + y, v)` to the priority queue.

Since the values of `a` and `b` are small ($1 \leq a, b \leq 100$), this algorithm is very efficient. We need to consider a reasonable range for the numbers we can reach (e.g., up to 200, since we might overshoot `b` and come back). If the priority queue becomes empty and we haven't reached `b`, it means `b` is unreachable.

[submission link](https://codeforces.com/contest/2119/submission/327542396)
