---
title: Codeforce Round 926 
date: 2024-02-20
categories: [Algorithm]
tags: [algorithm]     # TAG names should always be lowercase
math: true
mermaid: true
---


## Porblem D [Sasha and a Walk in the City](https://codeforces.com/contest/1929/problem/D)

The statement of this problem is not clear.
Problem statement from the comment in [tutorial page](https://codeforces.com/blog/entry/125851?#comment-1117492).

> Given a tree, you need to color each node in black or white. How many colorings exist such that the path between any two vertices contains atmost 2 black vertices.


Define the state of dynamic programming as the tutorial.
> Let $dp_v$ be the number of non-empty sets of vertices in the subtree rooted at $v$ such that there are no pairs of vertices in the set where one vertex is the ancestor of the other.

Now we consider how to calculate the states from leaf to root. Supporse we have done this for all subtree in current node, $u$. $dp_u$ can be calculate by $dp_u = \prod (dp_v + 1)$ where $v$ is child of $u$. 

To get this equation, we first consider current node is one element of the set. Then all subtree should be empty. Otherwise we voilate the $dp$ state. If current node not the element of the set. All the subtree can be selected or keep empty. That's why $dp_v + 1$. Notice if all subtree is emtpy, current node should be selected. So first situation already include in the second one. 

The answer of the problem $\sum_i^n dp_i + 1$. To get the answer we need to consider for all situations. There is not double we need to have the $dp_{root}$. But if we consider for each subtree. $dp_{v}$ does not contain and pairs of vertices in the set where one vertex is the ancestor of the other. If we put everyting beyong this sub-tree empty. Then we chan have $v$ in the set. This is not include in $dp_{root}$. The last $1$ is the root can be also not in the set.



## Porblem E [Sasha and the Happy Tree Cutting](https://codeforces.com/contest/1929/problem/E)

Before solving probelm E, we need to solve another problem first. 


> Given an integer $k$ and a set of numbers with fewer than 20 elements, identify the minimum number of elements from this set that, when combined using the bitwise OR operation, result in $(1 << k) - 1$.


The algorithm to solve this equation can be $2^k \cdot 20$

This probelm can be sovled using dynamic programming. 
let $dp[mask]$ be the minimun number of elementes that required to cover the $mask$.

The $mask$ can start from 0 then add a number to mask. Then we have $dp_{mask \| 0} = \min(dp_{maks}, dp_0 + 1)$ with $dp_0 = 0$. Then we loop $mask$ from 0 to `(1<<k) - 1`. We will have the finally answer which is $dp\left[(1< <k)-1\right]$.


## Problem F [Sasha and the Wedding Binary Search Tree](https://codeforces.com/contest/1929/problem/F)

[submission](https://codeforces.com/contest/1929/submission/249185245)

This probelm require quick combination implementation. Refer []() for the Modular combination implementation.

The key idea is get the values of tree sorted, which is left - mid - right order of dfs.

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



