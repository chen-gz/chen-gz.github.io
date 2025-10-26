---
title: G. Beautiful Tree
math: true
---

## Problem Statement

A tree is a connected graph without cycles.

A tree is called **beautiful** if the sum of the products of the vertex labels for all its edges is a perfect square.

More formally, let $E$ be the set of edges in the tree. The tree is called beautiful if the value
$S = \sum_{\{u,v\} \in E} (u \cdot v)$
is a perfect square. That is, there exists an integer $x$ such that $S = x^2$.

You are given an integer $n$. Your task is to construct a beautiful tree having $n$ vertices or report that such a tree does not exist.

## Solution Explanation

The problem asks us to construct a tree with $n$ vertices such that the sum of products of adjacent vertex labels is a perfect square.

Let's analyze the sum $S$. We need to find a tree structure and a labeling of vertices from $1$ to $n$ that makes $S$ a perfect square. A simple tree structure to analyze is a star graph, where one central vertex is connected to all other $n-1$ vertices.

Let's try to construct a solution around a target sum that is a perfect square. A natural candidate for a perfect square that is related to $n$ is $n^2$. Can we achieve a sum of $n^2$?

Consider a small case. If we connect vertex $n$ to $1$, and vertex $4$ to $3$, and all other vertices $i$ (where $i \in \{2, 3, 5, \dots, n-1\}$) to vertex $2$. The sum of edge products would be:
$S = 1 \cdot n + 3 \cdot 4 + \sum_{i \in \{2,3,5,\dots,n-1\}} 2 \cdot i$
This seems complicated.

Let's try a different construction for $n > 5$. We create the edges (1, n), (1, 2), (2, 3), and (3, 4). Then, we connect all remaining vertices $i=5, \dots, n-1$ to vertex 2.
The sum of edge products is:
$S = 1 \cdot n + 1 \cdot 2 + 2 \cdot 3 + 3 \cdot 4 + \sum_{i=5}^{n-1} 2 \cdot i$
Let's analyze the sum.
$S = n + 2 + 6 + 12 + 2 \cdot \frac{(n-1+5)(n-1-5+1)}{2}$
$S = n + 20 + (n+4)(n-5) = n + 20 + n^2 -n - 20 = n^2$.
This construction gives a sum of $n^2$, which is a perfect square.

This construction works for $n > 5$. We need to handle the small cases separately:
- **n = 2:** The only possible tree is an edge between 1 and 2. The sum is $1 \cdot 2 = 2$, which is not a perfect square. No solution exists.
- **n = 3:** We can connect (1,3) and (2,3). The sum is $1 \cdot 3 + 2 \cdot 3 = 9 = 3^2$. This is a beautiful tree.
- **n = 4:** We can connect (1,2), (1,3), (1,4). The sum is $1 \cdot 2 + 1 \cdot 3 + 1 \cdot 4 = 9 = 3^2$. This is a beautiful tree.
- **n = 5:** We can connect (1,5), (1,2), (2,3), (3,4). The sum is $1 \cdot 5 + 1 \cdot 2 + 2 \cdot 3 + 3 \cdot 4 = 5 + 2 + 6 + 12 = 25 = 5^2$. This is a beautiful tree.

For $n > 5$, the construction is:
1. Edge (1, n)
2. Edge (1, 2)
3. Edge (2, 3)
4. Edge (3, 4)
5. For all $i$ from 5 to $n-1$, add edge (2, i).

The provided code implements these specific constructions for each case.

{{% details title="View Code" closed="true" %}}
```cpp
#include <algorithm>
#include <cmath>
#include <cstdint>
#include <iostream>
#include <map>
#include <numeric>
#include <set>
#include <tuple>
#include <vector>
using namespace std;
#define int long long
// #define mod 1000000007

#define N 500005
void solve() {
    int n;
    cin >> n;
    if (n == 2) {
        cout << -1 <<endl;
        return ;
    }
    if (n == 3) {
        cout << "1 3\n2 3\n" <<endl;
        return ;
    }
    if (n == 4) {
        cout << "1 2\n3 1\n 4 1\n";
        return;
    }
    if (n == 5) {
        cout << "1 5\n1 2\n2 3\n3 4\n";
        return;
    }
    cout << "1 "<< n << "\n1 2\n2 3\n3 4\n";
    for(int i = 5; i < n; i++) {
        cout << 2 << " " << i << "\n";
    }
    cout << endl;


}

int32_t main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
#ifdef DEBUG
    freopen("./input.txt", "r", stdin);
#endif
    int t;
    cin >> t;
    while (t--) {
#ifdef DEBUG
        static int test_num = 1;
        cout << "test case: " << test_num++ << endl;
#endif
        solve();
    }
}
```
{{% /details %}}
