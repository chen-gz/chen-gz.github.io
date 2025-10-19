---
title: "B. 美丽字符串"
type: docs
math: true
---

## 问题描述

给定一个长度为 $n$ 的二进制∗字符串 $s$。

你的任务是找到 $s$ 的任意一个子序列† $p$，满足以下条件：

子序列 $p$ 是非递减的。也就是说，$p$ 中的每个字符都不大于下一个字符。
令 $x$ 表示从 $s$ 中移除 $p$ 的所有字符后，保持剩余字符顺序得到的字符串。那么 $x$ 必须是一个回文串‡。

你只需要输出满足这两个条件的任意一个有效子序列 $p$ 即可。如果不存在这样的子序列，则输出 $-1$。

注意，空字符串既是非递减的，也是回文串。

---

## 解题思路

题目要求我们从一个二进制字符串 `s` 中找到一个非递减的子序列 `p`，使得 `s` 中剩余的字符组成一个回文串。

让我们分析一下这些条件。子序列 `p` 必须是非递减的。由于 `s` 是一个二进制字符串，一个非递减的子序列只能由'0'、'1'或'0'后跟'1'组成。

考虑两种简单的子序列 `p` 的情况：
1.  **`p` 由 `s` 中所有的 '0' 组成。** 剩余的字符串 `x` 将只包含 '1'。一个所有字符都相同的字符串总是一个回文串。
2.  **`p` 由 `s` 中所有的 '1' 组成。** 剩余的字符串 `x` 将只包含 '0'。同样，这也是一个回文串。

在这两种情况下，子序列 `p` 都是非递减的（它由单一类型的字符组成），并且剩余的字符串 `x` 是一个回文串。因此，我们总是可以通过选择所有的 '0' 或所有的 '1' 作为我们的子序列 `p` 来找到一个有效的解决方案。

题目要求输出*任何*有效的子序列。提供的代码选择通过取原始字符串 `s` 中所有的 '1' 来构成子序列 `p`。代码遍历字符串，如果找到一个 '1'，就将其基于1的索引添加到一个答案向量中。最后，它打印出向量的大小（即 '1' 的数量）和索引本身。

这种方法保证是可行的，因为：
-   子序列 `p` 将是 "11...1"，这是非递减的。
-   剩余的字符串 `x` 将是 "00...0"，这是一个回文串。

因此，这个简单的策略总能得到一个正确的答案。

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
    string s;
    cin >> s;
    vector<int> ans;
    for (int i = 0; i < n; i++) {
        if(s[i] == '1') {
            ans.push_back(i + 1);
        }
    }
    cout << ans.size() << endl;
    for (int i = 0; i < ans.size(); i++) {
        cout << ans[i] << " ";
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
