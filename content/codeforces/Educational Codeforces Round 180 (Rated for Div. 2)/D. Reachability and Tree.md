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

The problem requires us to direct the edges of a tree such that there are exactly `n` "good pairs" (a pair `(u,v)` is good if there's a directed path from `u` to `v`).

A key insight is to relate the total number of good pairs to the structure of the directed tree. If we root the tree at an arbitrary node `r` and direct all edges to point **towards the root** (from child to parent), the resulting graph is a set of paths all converging at `r`.

In this structure, for any node `u`, there is a directed path from `u` to each of its ancestors. The number of ancestors of `u` is equal to its depth, `depth(u)` (where the root has depth 0). Therefore, the total number of good pairs in such a directed tree is the sum of the depths of all nodes: `Sum_{u in V} depth(u)`.

This transforms the problem into: **Can we find a root node `r` in the tree such that if we root the tree at `r`, the sum of the depths of all nodes is exactly `n`?**

### Algorithm

1.  **Calculate Sum of Depths for an Arbitrary Root:**
    -   First, pick an arbitrary root, say node 1.
    -   Perform a DFS or BFS from node 1. During the traversal, for each node `u`, calculate its `depth_1(u)` (distance from root 1) and the `size(u)` (the number of nodes in the subtree rooted at `u`, including `u` itself).
    -   Calculate the initial sum of depths for root 1: `S_1 = Sum_{u in V} depth_1(u)`.

2.  **Re-rooting and Updating the Sum:**
    -   We don't need to re-run the entire traversal for every possible root. We can efficiently calculate the sum of depths for a new root `v` based on the sum for an adjacent node `u`.
    -   If we move the root from a parent `u` to its child `v`, all nodes in the subtree of `v` (which has `size(v)` nodes) get 1 level closer to the root, so their depths decrease by 1. All other `n - size(v)` nodes get 1 level further from the root, so their depths increase by 1.
    -   The new sum of depths `S_v` can be calculated from the old sum `S_u` in O(1) time:
        `S_v = S_u - size(v) + (n - size(v))`.
    -   We can perform a second traversal (DFS) of the tree, starting from our arbitrary root (node 1). As we move from a parent `p` to a child `c`, we calculate `S_c` using the formula and the pre-calculated subtree sizes.

3.  **Finding and Printing a Solution:**
    -   During the second traversal, if we find any node `v` for which the calculated sum of depths `S_v` is equal to `n`, then we have found a valid root.
    -   We output "YES". Then, to print the edge orientations, we can run a final traversal (like BFS or DFS) starting from our valid root `v`. For each edge `(x, y)` we traverse from parent `x` to child `y`, we know the direction must be towards the root, so we print `y, x`.
    -   If, after checking all nodes as potential roots, we don't find any that result in a sum of `n`, then no solution exists, and we output "NO".

This approach has a time complexity of `O(n)` because it's based on a few traversals of the tree.

[submission link](https://codeforces.com/contest/2112/submission/327456854)
