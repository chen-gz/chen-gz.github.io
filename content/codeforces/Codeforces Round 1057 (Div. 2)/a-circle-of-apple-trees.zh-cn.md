---
title: "A. Circle of Apple Trees"
type: docs
math: true
---

## 问题描述

有 $n$ 棵苹果树围成一圈。每棵树上结有一个苹果，第 $i$ 棵树上的苹果的美丽度为 $b_i$（$1 \le i \le n$）。你从第 1 棵树前开始。

在每棵树前，你可以选择吃掉苹果或跳过它。做出选择后，你会移动到下一棵树：从第 $i$ 棵树移动到第 $i+1$ 棵树（$1 \le i \le n-1$），从第 $n$ 棵树移动回第 1 棵树。这个过程会无限循环。

但是，有一个特殊条件：你只能吃美丽度严格大于你上一个吃的苹果的美丽度的苹果。例如，如果 $b = [2, 1, 2, 3]$，你吃了第 1 棵树上的苹果（美丽度为 2），那么你就不能吃第 2 和第 3 棵树上的苹果，因为它们的美丽度不大于 2。但是，你可以吃第 4 棵树上的苹果，因为 $b_4 = 3 > 2$。

请注意，你可以在第一次遇到苹果时选择跳过它，并在后续的循环中再选择吃它。

你的任务是，如果你在何时吃或跳过每个苹果方面做出最优决策，确定你能吃的苹果的最大数量。

## 解题思路

目标是最大化吃掉的苹果数量，同时满足每个苹果的美丽度必须严格大于前一个吃的苹果的美丽度。

关键在于，由于我们可以无限次地绕圈，苹果的物理位置并不限制我们吃它们的顺序。我们总能通过绕一圈回到任何之前跳过的苹果。这意味着，只要满足美丽度的条件，我们可以在任何时候选择吃任何可用的苹果。

为了最大化吃掉的苹果数量，我们需要构建一个美丽度严格递增的最长苹果序列。最优策略是按美丽度升序吃苹果。例如，如果我们有美丽度为 `{10, 5, 20}` 的苹果，我们可以先吃美丽度为 5 的，然后绕一圈吃美丽度为 10 的，最后再绕一圈吃美丽度为 20 的。

“严格大于”的条件意味着我们不能吃两个美丽度相同的苹果。例如，如果我们吃了一个美丽度为 5 的苹果，下一个必须美丽度大于 5，我们不能再吃另一个美丽度为 5 的苹果。

因此，问题简化为找出所有可用的不同美丽度的数量。每个唯一的美丽度值都可以在我们的递增序列中出现一次。我们能吃的最大苹果数量就是不同苹果美丽度的总数。

C++ 解决方案实现了这一点：
1. 将所有美丽度值读入一个向量。
2. 对向量进行排序。
3. 使用 `std::unique` 算法将所有唯一元素移动到向量的开头，然后用 `vector::erase` 删除重复元素。
4. 向量的最终大小就是唯一美丽度的数量，即为答案。

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
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &i : a) {
        cin >> i;
    }
    sort(a.begin(), a.end());
    // 使数组唯一
    a.erase(unique(a.begin(), a.end()), a.end());
    cout << a.size() << endl;
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
