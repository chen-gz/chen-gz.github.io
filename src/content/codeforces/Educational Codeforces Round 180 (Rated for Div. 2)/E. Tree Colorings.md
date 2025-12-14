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

Notice that the formula above shows the number of colorings for a tree depends solely on the number of colorings of its child subtrees. Therefore, we can solve the original problem using the following dynamic programming approach:

Let $dp_m$ be the minimum number of vertices in a tree with exactly $m$ beautiful colorings.

To calculate this, we can use the fact that the number of colorings of a tree is the product of colorings of its child subtrees. Let's iterate over the number of colorings of the last subtree (denote it $x$), then:

$$dp_m = \min(dp_{m/x} + dp_{x - 2})$$

> [!TIP]
> Think of it as having a tree root with green color that has $m/x$ colorings. Now we want to add another subtree to the root node of the tree with $m/x$ colorings. The new subtree has $x-2$ colorings with its root colored green. But this subtree can also be colored blue or yellow. Thus we have a new tree with $m/x \times (x - 2 + 2) = m/x \times x = m$ colorings.

for all values of $x$. Note that $x$ must be a divisor of $m$.




### Optimization

To speed up the solution, we can iterate through either $x$ up to $\sqrt{m}$ or $m/x$ up to $\sqrt{m}$.

#### Time Complexity Analysis

This approach yields a solution with time complexity $O(M\sqrt{M})$, where $M$ is the maximum number of colorings we need to consider. This is enough to get AC, but we can speed this up to $O(M \log M)$ as follows:

For every integer $x$ from $1$ to $M$, let's prepare the list of its divisors. We can iterate on the divisor $d$ and append it to the lists of divisors for integers $2d, 3d, 4d, \ldots$

The integer $d$ will be processed in $O(M/d)$, so in total, we achieve a complexity of:
$$\sum_{d=1}^{M} \frac{M}{d} = O(M \log M)$$

because it is the harmonic sum (multiplied by $M$).

[submission link](https://codeforces.com/contest/2112/submission/327638683)