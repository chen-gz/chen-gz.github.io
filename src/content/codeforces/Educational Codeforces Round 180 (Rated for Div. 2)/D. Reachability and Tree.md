---
title: D. Reachability and Tree
type: docs
math: true
---

## Problem Statement

Let $u$ and $v$ be two distinct vertices in a directed graph. Let's call the ordered pair $(u,v)$ **good** if there exists a path from vertex $u$ to vertex $v$ along the edges of the graph.

You are given an undirected tree with $n$ vertices and $n-1$ edges. Determine whether it is possible to assign a direction to each edge of this tree so that the number of good pairs in it is exactly $n$. If it is possible, print any way to direct the edges resulting in exactly $n$ good pairs.

### Input

The first line contains one integer $t$ $(1 \leq t \leq 10^4)$ — the number of test cases.

The first line of each test case contains one integer $n$ $(2 \leq n \leq 2 \cdot 10^5)$ — the number of vertices in the tree.

The next $n-1$ lines describe the edges. The $i$-th line contains two integers $u_i$ and $v_i$ $(1 \leq u_i, v_i \leq n; u_i \neq v_i)$ — the vertices connected by the $i$-th edge.

It is guaranteed that the edges in each test case form an undirected tree and that the sum of $n$ over all test cases does not exceed $2 \cdot 10^5$.

### Output

For each test case, print "NO" (case-insensitive) if it is impossible to direct all edges of the tree and obtain exactly $n$ good pairs of vertices.

Otherwise, print "YES" (case-insensitive) and then print $n-1$ pairs of integers $u_i$ and $v_i$ separated by spaces — the edges directed from $u_i$ to $v_i$.

The edges can be printed in any order. If there are multiple answers, output any.


## Solution

The idea is to find a node with degree 2. Suppose we have $v$ with degree 2, then we can have $u \rightarrow v \rightarrow w$. Then make all the other edges have length 1, and we will have $(n-1) + 1 = n$ good pairs. The $n-1$ good pairs are provided by the edges and 1 more is provided by $u \rightarrow w$.

[submission link](https://codeforces.com/contest/2112/submission/327456854)
