---
title: Codeforces 第 926 轮
date: 2024-02-20
categories: [Algorithm]
tags: [algorithm]
math: true
mermaid: true
---


## 问题 D [Sasha and a Walk in the City](https://codeforces.com/contest/1929/problem/D)

这个问题的陈述不清楚。
问题陈述来自[题解页面](https://codeforces.com/blog/entry/125851?#comment-1117492)的评论。

> 给定一棵树，你需要将每个节点染成黑色或白色。有多少种染色方案，使得任意两个顶点之间的路径最多包含2个黑色顶点。


按照题解定义动态规划的状态。
> 令 $dp_v$ 为以 $v$ 为根的子树中非空顶点集的数量，使得集合中没有一对顶点，其中一个顶点是另一个顶点的祖先。

现在我们考虑如何从叶子到根计算状态。假设我们已经对当前节点 $u$ 的所有子树完成了这个计算。$dp_u$ 可以通过 $dp_u = \prod (dp_v + 1)$ 计算，其中 $v$ 是 $u$ 的一个子节点。

为了得到这个方程，我们首先考虑当前节点是集合中一个元素的情况。那么它的所有子树都必须是空的。否则，我们就违反了 $dp$ 状态的定义。如果当前节点不是集合中的元素，那么所有的子树都可以被选中或保持为空。这就是为什么是 $dp_v + 1$。注意到，如果所有子树都是空的，那么当前节点就应该被选中。所以第一种情况已经包含在第二种情况中了。

问题的答案是 $\sum_i^n dp_i + 1$。为了得到答案，我们需要考虑所有情况。毫无疑问，我们需要有 $dp_{root}$。但是如果我们考虑每个子树，$dp_v$ 不包含任何一对顶点，其中一个顶点是另一个顶点的祖先。如果我们将这个子树之外的所有东西都设置为空。那么我们就可以将 $v$ 放入集合中。这不包含在 $dp_{root}$ 中。最后的 $1$ 是针对根节点也不在集合中的情况。



## 问题 E [Sasha and the Happy Tree Cutting](https://codeforces.com/contest/1929/problem/E)

在解决问题 E 之前，我们首先需要解决另一个问题。


> 给定一个整数 $k$ 和一个包含少于20个元素的数字集合，找出从这个集合中选出最少数量的元素，使得它们通过按位或运算的结果为 $(1 << k) - 1$。


解决这个问题的算法复杂度为 $O(2^k \cdot 20)$。

这个问题可以用动态规划来解决。
令 $dp[mask]$ 为覆盖 $mask$ 所需的最小元素数量。

mask 可以从 0 开始，然后我们可以向 mask 中添加一个数字。那么我们有 $dp_{mask | \text{new\_number}} = \min(dp_{mask | \text{new\_number}}, dp_{mask} + 1)$。然后我们遍历 mask 从 0 到 `(1<<k) - 1`。我们将得到最终的答案，即 $dp[(1<<k)-1]$。


## 问题 F [Sasha and the Wedding Binary Search Tree](https://codeforces.com/contest/1929/problem/F)

[提交记录](https://codeforces.com/contest/1929/submission/249185245)

这个问题需要一个快速的组合数实现。模块化组合数的实现可以参考 []()。

关键思想是获取树的排序值，也就是树的中序遍历（left-mid-right order traversal）。

``` cpp
void dfs(int cur, vector<int> &visited, vector<node> &tree, int &cnt, vector<int> &ret) {
    // go left
    if (tree[cur].left != -1) { dfs(tree[cur].left, visited, tree, cnt, ret); }
    ret[cnt] = tree[cur].val;
    cnt++;
    if (tree[cur].right != -1) { dfs(tree[cur].right, visited, tree, cnt, ret); }
}
```

然后答案可以通过以下方式计算

``` cpp
int len = right - i;
int num_val = ret[right] - ret[i - 1] + 1;
ans *= combination(num_val - 1 + len, len);
```