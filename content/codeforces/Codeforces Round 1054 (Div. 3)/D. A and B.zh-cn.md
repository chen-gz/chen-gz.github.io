---
title: "D. A and B"
type: docs
math: true
---

## 问题描述

给定一个长度为 $n$ 的字符串 $s$，只包含字符 'a' 和 'b'。

在一次操作中，你可以选择一个位置 $i$ ($1 \le i \le n-1$) 并交换相邻的字符 $s_i$ 和 $s_{i+1}$。

你需要执行最少的操作次数，以确保一种类型的所有字符（'a' 或 'b'）都严格地位于一起，形成一个连续的块。

另一种类型的字符可以位于这个块之前或之后，形成两个（可能为空的）块。

有效的最终形式示例：
*   `'aaabbbaaa'` — 所有的 'b' 都在一起（一个块），'a' 可以位于这个块的前后。
*   `'bbbaaaaaabbb'` — 所有的 'a' 都在一起，'b' 在字符串的两端。
*   `'aaaaabbbb'` 或 `'bbbbaaaaa'` — 两种类型的字符各自形成一个连续的块。

你需要找到达到指定状态所需的最少操作次数。

## 题解说明

问题要求用最少的相邻交换次数将一种类型的字符（'a' 或 'b'）组合成一个连续的块。

首先，让我们理解移动字符的成本。将一个字符从初始位置 `p` 移动到目标位置 `t` 所需的相邻交换次数等于位置的绝对差 `|p - t|`。我们的目标是最小化这些交换的总数。

这个问题是对称的。我们可以分别计算将所有 'a' 组合在一起的最小成本和将所有 'b' 组合在一起的最小成本，然后取两者中的较小值作为最终答案。让我们专注于组合 'a'。

假设字符串中有 `k` 个 'a'，它们的初始位置是 $p_1, p_2, \dots, p_k$。为了形成一个连续的块，它们必须占据 `k` 个连续的最终位置。假设这个块从偏移量 `t` 开始，那么 'a' 的最终位置将是 $t, t+1, \dots, t+k-1$。

所需的总交换次数是移动每个 'a' 到其在新块中位置的成本之和：
$$ \text{总成本} = \sum_{i=1}^{k} |p_i - (t + i - 1)| $$

我们需要找到最小化这个和的整数 `t`。我们可以通过令 $d_i = p_i - (i - 1)$ 来重写这个表达式：
$$ \text{总成本} = \sum_{i=1}^{k} |d_i - t| $$

这是一个经典的统计学问题。一组值 $\{d_i\}$ 到一个点 `t` 的绝对差之和在 `t` 是该集合的**中位数**时最小化。

所以，算法如下：
1.  **分离一种字符类型**：我们先处理 'a'。
2.  **收集位置**：找到字符串中所有 'a' 的初始0-indexed位置。假设有 `k` 个 'a'，位置为 $p_1, p_2, \dots, p_k$。
3.  **计算相对位置**：创建一个新的值列表 $d_i = p_i - i$，其中 $i = 0, \dots, k-1$。
4.  **找到中位数**：找到这个新的 $d_i$ 值列表的中位数。如果 `k` 是奇数，中位数是排序后的中间元素。如果 `k` 是偶数，两个中间元素之间的任何值都可以，所以我们可以只选择其中一个（例如，较小的一个）。
5.  **计算成本**：组合 'a' 的最小成本是每个 $d_i$ 与中位数之间绝对差的和。
6.  **对另一种字符重复操作**：对 'b' 字符执行相同的计算。
7.  **最终答案**：结果是计算出的两个成本中的较小者。

这种方法正确地找到了两种情况下的最少交换次数，并且总体的最小值给出了我们的解。

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
    string s;
    cin >> s;
    vector<int> pos_a;
    vector<int> pos_b;
    int cnt_a = 1, cnt_b = 1;
    for (int i = 0; i < n; i++) {
        if (s[i] == 'a') {
            pos_a.push_back(i - cnt_a);
            cnt_a++;
        } else {
            pos_b.push_back(i - cnt_b);
            cnt_b++;
        }
    }
    if (pos_a.size() == 0 || pos_b.size() == 0) {
        cout << 0 << endl;
        return;
    }
    //get median of pos_a
    int median_a = pos_a[pos_a.size() / 2];
    // sum of abs(pos_a[i] - median_a)
    int sum_a = 0;
    for (int i = 0; i < pos_a.size(); i++) {
        sum_a += abs(pos_a[i] - median_a);
    }
    //get median of pos_b
    int median_b = pos_b[pos_b.size() / 2];
    // sum of abs(pos_b[i] - median_b)
    int sum_b = 0;
    for (int i = 0; i < pos_b.size(); i++) {
        sum_b += abs(pos_b[i] - median_b);
    }
    cout << min(sum_a, sum_b) << endl;
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

[提交链接](https://codeforces.com/contest/2149/submission/341578257)