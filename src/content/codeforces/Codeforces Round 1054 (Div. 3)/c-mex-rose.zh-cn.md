---
title: "C. MEX Rose"
---

## 问题描述

给定一个长度为 `n` 的数组 `a` 和一个数字 `k`，其中 `0 <= k <= n`。

在一次操作中，你可以选择任意索引 `i`（其中 `1 <= i <= n`），并将 `a[i]` 的值设置为范围 `[0, n]` 内的任意整数 `x`。

你的任务是找到满足条件 `MEX(a) = k` 所需的最少操作次数。

***

*__MEX 定义:__ 数组的 MEX (Minimum Excluded) 是指数组中未出现的最小非负整数。*

***

## 题解说明

要实现 `MEX` 为 `k`，必须满足两个条件：
1.  所有从 `0` 到 `k-1` 的整数必须存在于数组中。
2.  整数 `k` 必须不存在于数组中。

让我们分析满足这些条件所需的操作。

首先，我们计算范围 `[0, k-1]` 中缺失的元素数量。我们称之为 `missing_count`。我们至少需要 `missing_count` 次操作来将这些数字引入数组中。

其次，我们计算数字 `k` 在数组中出现的次数。我们称之为 `k_count`。所有这 `k_count` 个元素都必须被改变。

我们可以巧妙地结合这些操作。当前等于 `k` 的元素是“可用”来改变的。我们可以将它们变成我们需要的 `[0, k-1]` 范围内的数字。

- 我们需要引入 `missing_count` 个数字。
- 我们有 `k_count` 个无论如何都必须改变的数字。

如果 `k_count >= missing_count`，我们可以使用 `k` 个元素中的 `missing_count` 个来填补 `[0, k-1]` 范围内的空缺。在这 `missing_count` 次操作之后，我们仍然有 `k_count - missing_count` 个等于 `k` 的元素必须被改变。所以，所需总操作次数是 `missing_count + (k_count - missing_count) = k_count`。

如果 `k_count < missing_count`，我们可以使用所有 `k_count` 个元素来填补部分空缺。我们还需要执行 `missing_count - k_count` 次操作来引入剩余的缺失数字。在这种情况下，总操作次数是 `k_count + (missing_count - k_count) = missing_count`。

结合两种情况，最少操作次数是 `max(missing_count, k_count)`。

算法如下：
1.  计算输入数组中每个数字的出现次数。
2.  通过从 `0` 遍历到 `k-1` 并检查每个数字是否存在来计算 `missing_count`。
3.  从我们的计数中获取 `k_count`。
4.  答案是 `max(missing_count, k_count)`。

[提交链接](https://codeforces.com/contest/2149/submission/341434376)

{{% details title="查看代码" closed="true" %}}
```cpp
#include <algorithm>
#include <cmath>
#include <cstdint>
#include <iostream>
#include <numeric>
#include <set>
#include <tuple>
#include <map>
#include <vector>
using namespace std;
#define int long long
// #define mod 1000000007

#define N 500005

void solve() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    map<int, int> cnt;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        cnt[a[i]]++;
    }
    int ans = 0;
    for(int i=0;i<k;i++){
        if (cnt[i] == 0) {
            ans++;
        }
    }
    if (ans < cnt[k]) {
        ans += cnt[k] - ans;
    }
    cout << ans << endl;
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