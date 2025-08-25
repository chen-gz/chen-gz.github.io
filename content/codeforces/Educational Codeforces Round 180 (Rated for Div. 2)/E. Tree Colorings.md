---
title: E. Tree Colorings
type: docs
math: true
---

## Problem Statement

Consider a rooted undirected tree. Each vertex can be colored blue, green, or yellow. A coloring is called **beautiful** if it meets these conditions:

- The root of the tree is green
- If you consider all blue and green vertices, they are reachable from each other without passing through any yellow vertices
- If you consider all yellow and green vertices, they are reachable from each other without passing through any blue vertices

You are given an integer $m$. Your task is to calculate the minimum number of vertices in a tree with exactly $m$ beautiful colorings.

### Input

The first line contains a single integer $t$ $(1 \leq t \leq 10^5)$ — the number of test cases.

The only line of each test case contains a single integer $m$ $(1 \leq m \leq 5 \cdot 10^5)$.

### Output

For each test case, print a single integer — the minimum number of vertices in a tree with exactly $m$ beautiful colorings. If such a tree does not exist, print $-1$.

## Solution (Solution from Official Editorial)

### Key Observation

> **Important**: If a vertex is not green, its entire subtree must be colored the same color. For example, if the vertex is blue and it has a green or yellow descendant, the root is unreachable from that descendant without passing through that blue vertex. At the same time, the green vertices do not impose any additional constraints.

### Counting Beautiful Colorings

Using this observation, let's explore how to solve the inverse problem to the original one (namely, given a tree, count the number of beautiful colorings) using dynamic programming.

Let $cnt_v$ be the number of ways to color the subtree rooted at vertex $v$, provided that $v$ itself is green. Since $v$ is green, each of its child vertices can be colored in any color:

- If a child $u$ is green, there are $cnt_u$ ways to color its subtree
- If $u$ is blue or yellow, there is only one way to color its subtree

Therefore, the total number of colorings for $u$ is $cnt_u + 2$.

Since each child subtree can be colored independently:
$$cnt_v = (cnt_{u_1} + 2)(cnt_{u_2} + 2) \cdots (cnt_{u_k} + 2)$$

where $u_1, u_2, \ldots, u_k$ are the children of $v$.

### Dynamic Programming Approach

The recursive formula for `cnt_v` shows that the number of colorings for a tree depends only on the number of colorings of the subtrees at its children. This allows us to solve the inverse problem using dynamic programming.

Let `dp[m]` be the minimum number of vertices required for a tree to have exactly `m` beautiful colorings. Our goal is to compute `dp[1], dp[2], ..., dp[M]` up to the maximum required `m`.

**Base Case:**
- `dp[1] = 1`. A single-node tree (the root) must be green. This is one beautiful coloring and uses one vertex.

**Recurrence Relation:**
For `m > 1`, a tree with `m` colorings must have a root with at least one child. Let the root `r` (which must be green) have `k` children. These children are the roots of subtrees `T_1, ..., T_k`. Let the number of beautiful colorings for these subtrees be `c_1, ..., c_k` respectively.
- The total number of vertices in the tree is `1 (for the root) + dp[c_1] + dp[c_2] + ... + dp[c_k]`.
- The total number of colorings `m` is `(c_1 + 2) * (c_2 + 2) * ... * (c_k + 2)`.

We need to find a factorization of `m` into factors `x_i = c_i + 2` that minimizes the sum of vertices `1 + sum(dp[x_i - 2])`.

This can be solved iteratively. To compute `dp[m]`, we can think of constructing the tree by adding one branch at a time to the root. If we have a tree with `m/d` colorings, we can add a new branch. For the new combined tree to have `m` colorings, this new branch must contribute a factor of `d` to the product.
- The number of ways to color the new branch (rooted at a child of the main root) must be `d`.
- This means the number of beautiful colorings for the subtree on that branch must be `c = d - 2`.
- The minimum number of vertices for this new subtree is `dp[d-2]`.
- The total number of vertices for the new tree with `m` colorings is `dp[m/d] + dp[d-2]`.

We can find the minimum by trying all possible divisors `d` of `m`. This gives the recurrence:
`dp[m] = min_{d|m, d>=3} (dp[m/d] + dp[d-2])`
(We require `d >= 3` because `c = d-2` must be at least 1).




### Optimization

To speed up the solution, we can iterate through either $x$ up to $\sqrt{m}$ or $m/x$ up to $\sqrt{m}$.

#### Time Complexity Analysis

This approach yields a solution with time complexity $O(M\sqrt{M})$, where $M$ is the maximum number of colorings we need to consider. This is enough to get AC, but we can speed this up to $O(M \log M)$ as follows:

For every integer $x$ from $1$ to $M$, let's prepare the list of its divisors. We can iterate on the divisor $d$ and append it to the lists of divisors for integers $2d, 3d, 4d, \ldots$

The integer $d$ will be processed in $O(M/d)$, so in total, we achieve a complexity of:
$$\sum_{d=1}^{M} \frac{M}{d} = O(M \log M)$$

because it is the harmonic sum (multiplied by $M$).

[submission link](https://codeforces.com/contest/2112/submission/327638683)