---
title: E. Beautiful Palindromes
math: true
---

## 题目描述

我们称一个长度为 $m$ 的数组 $[b_1, b_2, \dots, b_m]$ 是**回文的**，如果满足以下条件：

对于所有的 $1 \le i \le m$，都有 $b_i = b_{m-i+1}$。

换句话说，一个数组是回文的，如果它正着读和倒着读都一样。

给定一个包含 $n$ 个整数的数组 $[a_1, a_2, \dots, a_n]$，其中 $1 \le a_i \le n$，以及一个整数 $k$。

你需要精确地执行以下操作 $k$ 次：

1. 选择一个整数 $x$，使得 $1 \le x \le n$。
2. 将 $x$ 追加到数组 $a$ 的末尾。

你的目标是以这样一种方式执行这 $k$ 次操作，使得最终数组中回文子数组的数量最小化。

输出你每次操作选择的 $k$ 个整数，按追加的顺序排列。

子数组是数组中连续的一部分。

## 解决方案

核心思想是贪心地追加整数，以避免产生新的回文子数组，特别是长度为 2 或 3 的短回文。具体策略取决于初始数组 `a` 是否包含了从 1 到 `n` 的所有整数。

首先，我们检查在范围 $[1, n]$ 内是否有任何整数未出现在初始数组 `a` 中。我们可以通过将 `a` 的所有元素插入一个集合，然后检查从 1 到 `n` 的每个整数是否存在来实现。

### 情况一：存在缺失的整数

假设我们找到了一个不在数组 `a` 中的整数 `mex`（最小未出现值）。这个 `mex` 是一个防止形成回文的强大工具。由于 `mex` 未在原始数组中出现，任何新的回文都必须是一个完全由新追加的元素组成的子数组。

为了最小化回文，我们可以采取一种策略，即永远不将两个相同的数字相邻放置，或者被另一个数字隔开。算法如下：
1. 对于第一次操作，我们追加 `mex`。
2. 对于每次后续操作，我们选择一个与数组最后两个元素都不同的整数进行追加。这样可以防止创建新的长度为 2（如 `[x, x]`）和长度为 3（如 `[y, x, y]`）的回文。代码会从 1 遍历到 `n`，以找到第一个满足此条件的有效整数。

这种贪心方法有效地最小化了新的短回文子数组的产生。

### 情况二：数组是 `[1, ..., n]` 的一个排列

如果初始数组 `a` 包含了从 1 到 `n` 的所有整数，这意味着 `a` 是一个排列。在这种情况下，我们无法使用一个“安全”的缺失数字。我们追加的任何数字都已存在于数组中。

一种最小化新回文的稳健策略是追加一个重复的、非回文的序列。由于原始数组 `a` 是一个排列（包含不同的数字），它为这样的序列提供了一个很好的基础。

正确的策略是循环地追加数组 `a` 的元素。对于第 `i` 次操作（其中 `i` 从 `0` 到 `k-1`），我们追加元素 `a[i % n]`。

这种方法确保我们不会引入容易形成的回文。例如，由于 `a` 中的所有元素都是不同的，该策略避免了在追加的序列本身内部创建任何长度为 2 的回文（如 `[x, x]`），除非 `n=1`。这也使得形成跨越原始部分和追加部分的更长回文变得更加困难。

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
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    set<int> s(a.begin(), a.end());
    int not_found = -1;
    for (int i = 1; i <= n; i++) {
        if (s.find(i) == s.end()) {
            not_found = i;
            break;
        }
    }
    if (not_found == -1) {
        // If the array is a permutation, append the elements cyclically.
        for (int i = 0; i < k; i++) {
            cout << a[i % n] << " ";
        }
        cout << endl;
        return;
    }
    // if found,
    int pre = a[n-1];
    int cur = not_found;
    cout << cur << " ";
    k --;
    while(k) {
        // try to make next different than cur and pre and within 1 -> n;
        int next = pre;
        for (int i = 1; i <= n; i++) {
            if (i != cur && i != pre) {
                next = i;
                break;
            }
        }
        pre = cur;
        cur = next;
        cout << cur << " ";
        k--;
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
