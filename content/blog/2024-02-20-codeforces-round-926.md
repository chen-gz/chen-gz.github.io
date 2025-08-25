---
title: Codeforces Round 926
date: 2024-02-20
categories: [Algorithm]
tags: [algorithm]     # TAG names should always be lowercase
math: true
mermaid: true
---


## Problem D [Sasha and a Walk in the City](https://codeforces.com/contest/1929/problem/D)

The statement of this problem is not clear.
Problem statement from the comment in [tutorial page](https://codeforces.com/blog/entry/125851?#comment-1117492).

> Given a tree, you need to color each node in black or white. How many colorings exist such that the path between any two vertices contains at most 2 black vertices.


Define the state of dynamic programming as the tutorial.
> Let $dp_v$ be the number of non-empty sets of vertices in the subtree rooted at $v$ such that there are no pairs of vertices in the set where one vertex is the ancestor of the other.

Now we consider how to calculate the states from leaf to root. Suppose we have done this for all subtrees of the current node, $u$. $dp_u$ can be calculated by $dp_u = \prod (dp_v + 1)$ where $v$ is a child of $u$.

To get this equation, we first consider the case where the current node is one element of the set. Then all its subtrees must be empty. Otherwise, we violate the $dp$ state. If the current node is not an element of the set. All the subtrees can be selected or kept empty. That's why $dp_v + 1$. Notice that if all subtrees are empty, the current node should be selected. So the first situation is already included in the second one.

The answer to the problem is $\sum_i^n dp_i + 1$. To get the answer, we need to consider all situations. There is no doubt we need to have $dp_{root}$. But if we consider each subtree, $dp_v$ does not contain any pairs of vertices in the set where one vertex is an ancestor of the other. If we put everything beyond this subtree as empty. Then we can have $v$ in the set. This is not included in $dp_{root}$. The last $1$ is for the case where the root is also not in the set.



## Problem E [Sasha and the Happy Tree Cutting](https://codeforces.com/contest/1929/problem/E)

Before solving problem E, we need to solve another problem first.


> Given an integer $k$ and a set of numbers with fewer than 20 elements, identify the minimum number of elements from this set that, when combined using the bitwise OR operation, result in $(1 << k) - 1$.


The algorithm to solve this problem has a complexity of $O(2^k \cdot 20)$.

This problem can be solved using dynamic programming.
Let $dp[mask]$ be the minimum number of elements required to cover the $mask$.

The mask can start from 0, then we can add a number to the mask. Then we have $dp_{mask | \text{new\_number}} = \min(dp_{mask | \text{new\_number}}, dp_{mask} + 1)$. Then we loop through the mask from 0 to `(1<<k) - 1`. We will have the final answer, which is $dp[(1<<k)-1]$.


## Problem F [Sasha and the Wedding Binary Search Tree](https://codeforces.com/contest/1929/problem/F)

[submission](https://codeforces.com/contest/1929/submission/249185245)

This problem requires a quick combination implementation. Refer to []() for the modular combination implementation.

The key idea is get the values of tree sorted, which is a left-mid-right order traversal (in-order traversal) of the tree.

``` cpp
void dfs(int cur, vector<int> &visited, vector<node> &tree, int &cnt, vector<int> &ret) {
    // go left
    if (tree[cur].left != -1) { dfs(tree[cur].left, visited, tree, cnt, ret); }
    ret[cnt] = tree[cur].val;
    cnt++;
    if (tree[cur].right != -1) { dfs(tree[cur].right, visited, tree, cnt, ret); }
}
```

Then the answer can be calculated by 

``` cpp
int len = right - i;
int num_val = ret[right] - ret[i - 1] + 1;
ans *= combination(num_val - 1 + len, len);
```



