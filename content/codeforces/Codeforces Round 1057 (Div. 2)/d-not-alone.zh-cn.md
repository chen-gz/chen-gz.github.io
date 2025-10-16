---
title: D. Not Alone
math: true
---

## 问题描述

一个长度为 $m$ 的循环数组 $b$ 是**好的**，如果每个元素至少有一个相邻的元素与它相等。形式上，对于每个 $1 \le i \le m$，以下至少一个条件成立：$b_i = b_{(i+m-2) \pmod m + 1}$，或 $b_i = b_{i \pmod m + 1}$。

给定一个长度为 $n$ 的循环数组 $a$。在一次操作中，你可以将 $a$ 的任何元素增加或减少 1。你的任务是确定使数组 $a$ 变好的最少操作次数。更正式地说，在所有长度为 $n$ 的好的循环数组 $b$ 中，找出 $\sum_{i=1}^{n} |b_i - a_i|$ 的最小值。

## 解题思路

问题要求将数组 `a` 转换为一个“好的”数组 `b` 的最小代价。一个好的数组是每个元素都属于一个至少包含两个相同且相邻元素的块。这意味着整个数组可以被划分为由相邻且相同的元素组成的块，其中每个块的大小为 2 或 3。任何更大的块（例如，大小为 4 或 5）都可以分解为大小为 2 和 3 的更小的块。例如，一个大小为 4 的块可以看作是两个大小为 2 的块，一个大小为 5 的块可以是一个大小为 2 的块和一个大小为 3 的块。

这种结构提示我们使用动态规划的方法。我们首先考虑线性数组的问题。设 `dp[i]` 是使前缀 `a[0...i]` 变好的最小代价。为了计算 `dp[i]`，我们考虑以索引 `i` 结尾的最后一个相同元素的块：

1.  **最后一个块的大小为 2：** 这个块由元素 `a[i-1]` 和 `a[i]` 组成。为了使它们相等，最小的代价是 `abs(a[i-1] - a[i])`。总代价是这个块的代价加上前缀 `a[0...i-2]` 的最小代价，即 `dp[i-2]`。所以，代价是 `dp[i-2] + abs(a[i-1] - a[i])`。

2.  **最后一个块的大小为 3：** 这个块由 `a[i-2]`, `a[i-1]`, 和 `a[i]` 组成。为了以最小的代价使三个数相等，我们应该将它们都变为它们的中位数。代价是 `|a[i-2] - m| + |a[i-1] - m| + |a[i] - m|`，其中 `m` 是这三个数的中位数。总代价是 `dp[i-3]` 加上这个块的代价。

结合这些情况，我们得到递推关系：
`dp[i] = min(dp[i-2] + cost_for_block_2, dp[i-3] + cost_for_block_3)`

主要的挑战在于数组是循环的。我们的线性 DP 方法没有考虑到“环绕”数组末尾的块（例如，由 `a[n-1]` 和 `a[0]` 组成的块）。

为了处理循环性，我们可以在数组的不同旋转上多次运行线性 DP。其思想是，循环数组的任何最优解都可以看作是一个线性解，如果我们“切开”环的位置正确的话。由于我们需要考虑的最大块大小是 3，一个块可以环绕，涉及 `a[n-1]` 和 `a[0]`，或者 `a[n-2], a[n-1], a[0]` 等。通过旋转数组几次（例如，将第一个元素移到末尾）并每次运行线性 DP，我们确保覆盖了所有可能的环绕配置。这些运行的最小结果将是循环数组的答案。所提供的解决方案尝试了 4 种不同的起始配置，以保证找到最优解。

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
int min_3(int a, int b, int c) {
    // 找到 a, b, c 的中值
   int mid = a + b + c - max(a, max(b, c)) - min(a, min(b, c));
   return abs(a - mid) + abs(b - mid) + abs(c - mid);
}
int mid_2(int a, int b) {
    return abs(a - b);
}
int calc(vector<int> &a) {
    int n = a.size();
    if (n == 1) return 0;
    if (n == 2) return abs(a[0] - a[1]);
    if (n == 3) return min_3(a[0], a[1], a[2]);
    vector<int> dp(n);
    dp[0] = 0;
    dp[1] = abs(a[0] - a[1]);
    dp[2] = min_3(a[0], a[1], a[2]);
    if (n > 3) {
        dp[3] = dp[1] + mid_2(a[2], a[3]);
    }
    for (int i=4;i<n;i++){
        dp[i] = dp[i-3] + min_3(a[i], a[i-1], a[i-2]);
        dp[i] = min(dp[i], dp[i-2] + mid_2(a[i], a[i-1]));
    }
    return dp[n-1];
}

void solve() {
    int n;
    cin >> n;
    vector<int> a(n);
    // double
    for (auto &i : a) {
        cin >> i;
    }
    int res = calc(a);
    // 将第一个元素移到最后
    if (n > 1) {
        a.push_back(a[0]);
        a.erase(a.begin());
        res = min(res, calc(a));
    }
    if (n > 2) {
        a.push_back(a[0]);
        a.erase(a.begin());
        res = min(res, calc(a));
    }
    if (n > 3) {
        a.push_back(a[0]);
        a.erase(a.begin());
        res = min(res, calc(a));
    }
    cout << res << endl;
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
