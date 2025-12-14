---
title: F. Beautiful Intervals
math: true
---

## 问题陈述

给定一个整数 $n$ 和 $m$ 个区间。每个区间的形式为 $[l_i, r_i]$，并满足 $1 \le l_i \le r_i \le n$。注意，区间可能会重复。

令 $p$ 为一个长度为 $n$ 的排列，其中包含整数 $0, 1, 2, \dots, n-1$ 各一次。

有一个初始为空的多重集 $M$。

对于每个区间 $[l_i, r_i]$：
1.  考虑子数组 $p[l_i \dots r_i]$。
2.  计算 $v_i = \text{mex}^*(p[l_i \dots r_i])$。
3.  将 $v_i$ 插入 $M$ 中。

处理完所有区间后，$M$ 将等于 $\{v_1, v_2, \dots, v_m\}$。

你的任务是构造一个长度为 $n$ 的排列 $p$，其中包含整数 $0, 1, 2, \dots, n-1$ 各一次，使得 $\text{mex}(M)$ 最小。

*一个非负整数集合的 $\text{mex}$ 是指该集合中未出现的最小非负整数。

## 解决方案

我们的目标是构造一个 $\{0, 1, \dots, n-1\}$ 的排列 $p$，以最小化多重集 $M$ 的 `mex` 值，其中 $M$ 包含由 $m$ 个给定区间定义的子数组的 `mex` 值。

让我们从最小的非负整数开始，分析 `mex(M)` 的可能值。

### 情况一：我们能否实现 $\text{mex}(M) = 0$？

要使 `mex(M)` 等于 0，值 0 必须**不**存在于多重集 $M$ 中。这意味着对于**每一个**给定的区间 $[l_i, r_i]$，其对应子数组 $p[l_i \dots r_i]$ 的 `mex` 值必须大于 0。

一个子数组的 `mex` 值大于 0 当且仅当整数 0 **存在**于该子数组中。

因此，要实现 `mex(M) = 0`，我们必须为整数 0 在排列 `p` 中找到一个位置，使得它被**每一个** $m$ 区间所包含。

代码通过检查整数 0 的每个可能位置 `i`（从 0 到 n-1）来实现这一点。对于每个位置 `i`，它会计算有多少个 `m` 区间包含了它。如果这个计数等于 `m`，就意味着将 0 放在索引 `i` 处可以保证 0 出现在每个子数组中。因此，$M$ 中的每个值 $v_i$ 都将至少为 1，所以 $0 \notin M$，从而 `mex(M) = 0`。如果找到这样的位置，我们就可以构造排列并完成任务。

### 情况二：我们能否实现 $\text{mex}(M) = 1$？

如果我们无法实现 `mex(M) = 0`，这意味着不存在一个能被所有 `m` 区间包含的整数 0 的单一位置。换句话说，无论我们将 0 放在哪里，总会至少有一个区间的子数组*不*包含 0。这保证了 $M$ 中至少有一个 $v_i$ 会是 0，即 $0 \in M$。

在保证 $0 \in M$ 的前提下，我们的目标是实现 `mex(M) = 1`。这要求值 1 **不**存在于 $M$ 中。这意味着对于每个区间 $[l_i, r_i]$，其子数组的 `mex` 不能为 1。

一个子数组的 `mex` 为 1 当且仅当它包含 0 但不包含 1。为防止这种情况，每个子数组必须满足以下条件之一：
1.  它**不**包含 0（此时其 `mex` 为 0）。
2.  它**同时**包含 0 和 1（此时其 `mex` 至少为 2）。

这个条件可以通过在排列中将 0 和 1 相邻放置来满足，例如放在位置 `j` 和 `j+1`。
- 一个既不包含 `j` 也不包含 `j+1` 的区间，其 `mex` 将为 0。
- 一个同时包含 `j` 和 `j+1` 的区间，其 `mex` 将至少为 2。

唯一能得到 `mex` 为 1 的方式是，一个区间恰好只包含这两个位置中的一个。例如，如果一个区间包含 `j`（0 所在位置）但不包含 `j+1`（1 所在位置）。这只在区间恰好在 `j` 结束（即 $[l, j]$）或恰好在 `j+1` 开始（即 $[j+1, r]$）时发生。

代码会搜索一个位置 `i`，我们可以在该位置将 0 和 1 相邻放置（在 `i` 和 `i+1`，或 `i` 和 `i-1`），使得没有区间会产生 `mex` 为 1。它检查是否存在任何 `i`，使得没有区间在 `i` 结束，也没有区间在 `i+1` 开始。如果找到这样的位置，我们就可以将 0 和 1 放在那里，确保没有子数组的 `mex` 为 1，这意味着 $1 \notin M$，因此 `mex(M) = 1`。

### 情况三：$\text{mex}(M) = 2$

如果我们无法实现 $\text{mex}(M) = 0$ 或 $\text{mex}(M) = 1$，我们总能实现 $\text{mex}(M) = 2$。我们可以构造一个简单的排列，如 `0 2 1 3 4 ...`。
- 子数组 `[0]` 的 $\text{mex} = 1$。所以 $1 \in M$。
- 子数组 `[0, 2]` 的 $\text{mex} = 1$。
- 子数组 `[0, 2, 1]` 的 $\text{mex} = 3$。
可以保证我们能构造一个排列，使得 $\text{mex}(M)=2$。一个简单的构造方法是在排列的开头放置 $0, 2, 1$。任何从索引 0 开始的区间都会包含这些数字的混合，从而很容易生成非 2 的 $\text{mex}$ 值。例如，任何只覆盖索引 0 和 1 的区间，其子数组为 `[0, 2]`，$\text{mex}=1$。任何只覆盖索引 1 的区间，其子数组为 `[2]`，$\text{mex}=0$。因此，$0, 1 \in M$。所有区间都恰好避开生成 $\text{mex}$ 为 2 的情况是极不可能的。简单的排列 `0 2 1 3 4...` 是一个稳健的备用方案。

{{% details title="查看代码" closed="true" %}}
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
    int n, m;
    cin >> n >> m;
    set<pair<int, int>> p;
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        a--, b--;
        p.insert({a, b});
    }
    vector<int> ans(n, -1);
    // check whether all interview has a some potion. which contains 0
    for (int i = 0; i < n; i++) {
        int size = 0;
        for (auto v : p) {
            if (v.first <= i && i <= v.second) {
                size++;
            }
        }
        if (size == p.size()) {
            int cur = 1;
            for (int j = 0; j < n; j++) {
                if (j == i) {
                    cout << "0 ";
                    continue;
                }
                cout << cur++ << " ";
            }
            cout << endl;
            return;
        }
    }
    // check all interval either contains [0, 1] or not contain [0]
    for (int i = 0; i < n; i++) {
        int size = 0;
        int size2 = 0;
        for (auto v : p) {
            // This condition is equivalent to checking if i != v.second
            if (i != v.second) {
                size++;
            }
            if (i != v.first) {
                size2++;
            }
        }

        if (size == p.size() && i != n-1) {
            int cur = 2;
            for (int j = 0; j < n; j++) {
                if (j == i) {
                    cout << "0 ";
                    continue;
                }
                if (j == i + 1) {
                    cout << "1 ";
                    continue;
                }
                cout << cur++ << " ";
            }
            cout << endl;
            return;
        }
        if (size2 == p.size() && i != 0)  {
            int cur = 2;
            for (int j = 0; j < n; j++) {
                if (j == i) {
                    cout << "0 ";
                    continue;
                }
                if (j == i - 1) {
                    cout << "1 ";
                    continue;
                }
                cout << cur++ << " ";
            }
            cout << endl;
            return;

        }
    }
    int cur = 3;
    cout << "0 2 1 ";
    for (int i = 0; i < n - 3; i++) {
        cout << cur++ << " ";
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
