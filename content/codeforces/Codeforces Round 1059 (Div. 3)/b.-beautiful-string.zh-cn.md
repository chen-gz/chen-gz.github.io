---
title: B. Beautiful String
math: true
---

## 题目描述
给定一个长度为 $n$ 的二进制字符串 $s$。

你的任务是找到 $s$ 的任意一个子序列 $p$，满足以下条件：
- 子序列 $p$ 是非递减的。也就是说，$p$ 中的每个字符都不大于其后的字符。
- 令 $x$ 为从 $s$ 中移除 $p$ 的所有字符后，保持剩余字符顺序得到的字符串。那么 $x$ 必须是一个回文串。

你只需要输出满足这两个条件的任意一个有效子序列 $p$ 即可。如果不存在这样的子序列，输出 -1。

注意，空字符串既是非递减的，也是回文串。

二进制字符串是由字符 '0' 和 '1' 组成的字符串。
子序列是一个可以通过从另一个序列中删除一些或不删除任何元素而不改变其余元素顺序而派生出来的序列。
回文串是一个正读和反读都一样的字符串。

## 解决方案

这个问题要求我们从一个二进制字符串 $s$ 中找到一个非递减的子序列 $p$，使得剩下的字符串 $x$ 是一个回文串。

一个二进制字符串的非递减子序列只能由全是 '0'、全是 '1'，或者一些 '0' 后面跟着一些 '1' 组成。

让我们考虑子序列 $p$ 的最简单情况：
1.  **$p$ 由 $s$ 中所有的 '0' 组成。** 剩下的字符串 $x$ 将由 $s$ 中所有的 '1' 组成。一个全是 '1' 的字符串总是一个回文串。
2.  **$p$ 由 $s$ 中所有的 '1' 组成。** 剩下的字符串 $x$ 将由 $s$ 中所有的 '0' 组成。一个全是 '0' 的字符串总是一个回文串。

这两种选择都满足条件。全 '0' 的子序列是非递减的，剩下的全 '1' 的字符串是回文串。同样，全 '1' 的子序列是非递减的，剩下的全 '0' 的字符串是回文串。

因此，我们可以简单地选择移除所有的 '1' 作为我们的子序列 $p$。剩下的字符（全是 '0'）将形成一个回文串。代码通过收集所有 '1' 的索引来形成子序列 $p$。由于问题保证总存在解决方案，这种方法是有效的。

提供的代码遍历字符串 $s$，如果找到字符 '1'，就将其 1-based 的索引添加到一个向量中。这个索引向量代表了由所有 '1' 组成的子序列 $p$。最后，它打印出这个子序列的大小和索引本身。

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
