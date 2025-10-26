---
title: F. 1-1-1, Free Tree!
type: docs
math: true
---

## Problem Statement
Given a tree with $n$ vertices numbered from 1 to $n$. Each vertex has an initial color $a_i$.

Each edge of the tree is defined by three numbers: $u_i$, $v_i$, and $c_i$, where $u_i$ and $v_i$ are the endpoints of the edge, and $c_i$ is the edge parameter. The cost of the edge is defined as follows: if the colors of vertices $u_i$ and $v_i$ are the same, the cost is 0; otherwise, the cost is $c_i$.

You are also given $q$ queries. Each query has the form: repaint vertex $v$ to color $x$. The queries depend on each other (after each query, the color change is preserved). After each query, you need to output the sum of the costs of all edges in the tree.

## Solution Overview

The core challenge of this problem is to answer the queries quickly. A naive approach would be to recalculate the entire tree's edge cost after each query. This would involve checking all `n-1` edges, making each query take `O(n)` time. With up to `2 * 10^5` queries, this `O(n*q)` approach would be too slow.

The key insight is that when we repaint a single vertex `v`, the cost only changes for the edges that are **directly connected** to `v`. All other edge costs in the tree remain unaffected. Therefore, instead of recalculating everything, we can just calculate the *change* in the total cost.

Let's break down the efficient approach step-by-step.

***

### 1. Preprocessing and Data Structures

To efficiently handle the updates, we first need to give the tree some structure and prepare some data.

1.  **Root the Tree:** We designate an arbitrary vertex (like vertex 1) as the root. This imposes a parent-child hierarchy on the tree, which is very helpful.

2.  **Depth-First Search (DFS):** We perform a single DFS traversal starting from the root. During this traversal, we will populate two key pieces of information for each vertex `v`:
    * `parent[v]`: The parent of vertex `v`.
    * `cost_to_parent[v]`: The parameter `c` of the edge connecting `v` to its parent.

3.  **The Core Data Structure (`mem` map):** This is the most important part of the solution. For each vertex `v`, we need to know the costs of edges connecting to its children, grouped by the children's colors. A map (or a hash map/dictionary) is perfect for this.

    * For each vertex `v`, we create a map, let's call it `mem[v]`.
    * `mem[v][color]` will store the sum of edge parameters for all children of `v` that currently have the color `color`.

    For example, if vertex `v` has three children `u1`, `u2`, and `u3` with colors `red`, `blue`, and `red` respectively, and the edge parameters are `c1`, `c2`, and `c3`, then the map `mem[v]` would look like this:
    * `mem[v][red] = c1 + c3`
    * `mem[v][blue] = c2`

    This map is also built during the initial DFS.

***

### 2. Initial Cost Calculation

After the DFS, we have all the necessary information. We compute the initial total cost of the tree, let's call it `total_ans`, by iterating through all non-root vertices `v` and checking:

`if color[v] != color[parent[v]]`:
&nbsp;&nbsp;&nbsp;&nbsp;`total_ans += cost_to_parent[v]`

This gives us the correct starting cost in `O(n)` time.

***

### 3. Processing a Query

Now, let's consider a query: "repaint vertex `v` to color `x`". Let the original color of `v` be `old_color`.

We only need to adjust `total_ans` by considering the edges connected to `v`.

#### **Step A: Update Cost for Edges to `v`'s Children**

* **From 0 to C:** Before the change, `v` had `old_color`. Any child `u` of `v` that also had `old_color` contributed 0 to the cost (since `color[v] == color[u]`). After `v` is repainted to `x` (assuming `x != old_color`), these edges now have a cost. The total cost of these newly "activated" edges is the sum of their parameters. We already pre-calculated this sum: it's `mem[v][old_color]`.
    * **Action:** `total_ans += mem[v][old_color]`

* **From C to 0:** Before the change, any child `u` of `v` that had color `x` contributed its edge cost to the total (since `color[v] = old_color != x`). After `v` is repainted to `x`, these edges now have a cost of 0. The total cost of these newly "deactivated" edges is `mem[v][x]`.
    * **Action:** `total_ans -= mem[v][x]`

These two actions, using our `mem` map, update the contribution of all children-edges in constant time (or `O(log k)` where `k` is the number of distinct child colors, which is very fast).

#### **Step B: Update Cost for Edge to `v`'s Parent**

This involves just one edge (unless `v` is the root). Let `p = parent[v]` and `w = cost_to_parent[v]`.

1.  **Remove Old Cost:** We first determine if this edge contributed to the cost *before* the change. It did if `color[p] != old_color`. If so, we subtract its cost from the total.
    * **Action:** `if color[p] != old_color: total_ans -= w`

2.  **Add New Cost:** We then determine if this edge contributes to the cost *after* the change. It will if `color[p] != x`. If so, we add its cost to the total.
    * **Action:** `if color[p] != x: total_ans += w`

#### **Step C: Update Data Structures for Future Queries**

The change to `v`'s color affects its parent `p`. Specifically, it changes which color group the edge `(p, v)` belongs to in the parent's `mem` map.

* The edge `(p,v)` of weight `w` is no longer associated with a child of `old_color`.
    * **Action:** `mem[p][old_color] -= w`
* The edge `(p,v)` is now associated with a child of color `x`.
    * **Action:** `mem[p][x] += w`

Finally, we update the actual color array: `color[v] = x`.

After these steps, `total_ans` holds the new correct total cost, which we print.

### Conclusion

By pre-calculating parent pointers and the `mem` maps, we can process each query by only looking at the vertex `v`, its parent, and its children. The use of maps allows for `O(log n)` updates.

* **Preprocessing:** `O(n log n)` (for DFS and map insertions)
* **Query:** `O(log n)` (for map lookups and updates)
* **Total Complexity:** `O(n log n + q log n)`

This is highly efficient and easily meets the time limits of the problem.

[TLE submission without optimization](https://codeforces.com/contest/2126/submission/330429690)

[Optimized solution](https://codeforces.com/contest/2126/submission/330432359)