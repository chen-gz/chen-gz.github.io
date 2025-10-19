---
title: "D. Beautiful Permutation"
---

这是一个交互式问题。

有一个长度为 $n$ 的排列∗ $p$。

有人秘密选择两个整数 $l,r$（$1 \le l \le r \le n$），并按以下方式修改了排列：

对于每个满足 $l \le i \le r$ 的索引 $i$，设置 $p_i := p_i+1$。
令 $a$ 表示通过修改排列得到的数组。

给定一个整数 $n$，表示排列 $p$ 的长度。

在一次查询中，你可以选择两个整数 $l,r$（$1 \le l \le r \le n$），并询问原始排列 $p[l \dots r]$ 或修改后的数组 $a[l \dots r]$ 的子数组之和。对此类查询的答案将是相应的整数和。

你的任务是在不超过 40 次查询中找到用于获得 $a$ 的数对 ($l,r$)。

## 题解

核心思想是使用二分搜索来找到修改段 $[l, r]$ 的边界。

首先，我们可以确定修改段的长度，即 $r - l + 1$。我们可以通过两次查询来做到这一点：
1.  查询原始排列在整个范围 $[1, n]$ 上的和。
2.  查询修改后数组在整个范围 $[1, n]$ 上的和。

这两个和的差值将恰好是修改段的长度，因为范围 $[l, r]$ 中的每个元素都增加了 1。我们称这个长度为 `mod_len`。

一旦我们有了 `mod_len`，我们就需要找到左边界 $l$。我们可以对范围 $[1, n]$ 使用二分搜索来做到这一点。对于给定的 `mid`，我们查询范围 $[1, mid]$ 中原始数组和修改后数组的和。

令 `diff = query(2, 1, mid) - query(1, 1, mid)`。
*   如果 `diff` 为 0，这意味着修改段尚未开始，因此左边界 $l$ 必须在 `mid` 的右侧。我们将搜索范围更新为 `[mid + 1, high]`。
*   如果 `diff` 大于 0，这意味着修改段在 `mid` 或之前已经开始。因此，`mid` 是 $l$ 的一个潜在候选者，我们应该在范围 `[low, mid - 1]` 中搜索更小的 $l$。

通过反复缩小搜索空间，我们可以找到使差值非零的最小 `mid`。这个 `mid` 将是我们的左边界 $l$。

最后，右边界 $r$ 可以计算为 $l + mod_len - 1$。

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
int query(int type, int l, int r) {
    cout << type << " " << l << " " << r << endl;
    cout.flush();
    int ans;
    cin >> ans;
    return ans;
}
void solve() {
    int n;
    cin >> n;
    // Query the whole range to find the length of the modified segment.
    int ori = query(1, 1, n);
    int mod = query(2, 1, n);
    int mod_len = mod - ori;

    // Binary search to find the left boundary 'l'.
    int low = 1, high = n;
    int final_l = n + 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        int current_ori = query(1, 1, mid);
        int current_mod = query(2, 1, mid);
        int diff = current_mod - current_ori;

        if (diff == 0) {
            low = mid + 1;
        } else {
            final_l = mid;
            high = mid - 1;
        }
    }
    cout << "! " << final_l << " " << final_l + mod_len - 1 << endl;
    cout.flush();
}

int32_t main() {
    ios::sync_with_stdio(false);
    cin::tie(nullptr);
    cout::tie(nullptr);
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
