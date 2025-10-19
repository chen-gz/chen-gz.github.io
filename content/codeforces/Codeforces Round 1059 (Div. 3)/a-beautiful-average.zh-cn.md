---
title: A. Beautiful Average
math: true
---

## 题目描述

给定一个长度为 $n$ 的数组 $a$。

你的任务是找出数组 $a$ 的任意子数组*可能的最大平均值。

形式上，对于任意索引 $l, r$ 满足 $1 \le l \le r \le n$，子数组 $a_l, a_{l+1}, \dots, a_r$ 的平均值定义为元素之和除以元素个数，即：

$$
\text{avg}(l,r) = \frac{1}{r-l+1} \sum_{i=l}^{r} a_i
$$

输出在所有可能的 $l, r$ 中 $\text{avg}(l,r)$ 的最大值。

*\*子数组是数组中连续的一部分。*

## 题解

题目要求我们找到任意子数组的最大平均值。首先，考虑一个长度为 1 的子数组，它只包含一个元素 $a_i$。这个子数组的平均值就是 $a_i$ 本身。

设数组中的最大元素为 $M$。如果我们用这个最大元素构成一个长度为 1 的子数组，其平均值为 $M$。我们能得到比 $M$ 更大的平均值吗？

考虑任何包含最大元素 $M$ 的子数组。如果我们向这个子数组中添加任何其他元素，新元素的数值将小于或等于 $M$。因此，这个新的、更长的子数组的平均值不会超过 $M$。

举个例子，如果我们有一个子数组，其元素为 $\{a_l, \dots, M, \dots, a_r\}$，其平均值为 $\frac{\sum a_i}{r-l+1}$。如果我们再添加一个元素 $a_{r+1} \le M$，新的平均值将是 $\frac{\sum a_i + a_{r+1}}{r-l+2}$。可以证明，如果添加的元素小于或等于原平均值，那么新的平均值不会超过原来的平均值。因为我们知道数组中的最大元素是 $M$，所以任何包含 $M$ 和其他元素的子数组的平均值至多为 $M$。

因此，可能的最大平均值是通过一个长度为 1 的子数组实现的，该子数组仅包含数组中的最大元素。问题就简化为在给定数组中找到最大值。

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
    int n;
    cin >> n;
    vector<int> a(n);
    int ans = INT32_MIN;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        ans= max(ans,a[i]);
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
