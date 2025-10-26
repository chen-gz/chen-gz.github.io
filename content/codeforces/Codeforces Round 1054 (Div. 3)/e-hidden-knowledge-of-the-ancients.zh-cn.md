---
title: "E. 古人的隐藏知识"
---

## 问题描述

在 Deepwoken 的世界里，存在一件古老的 artifacts —— 无限知识石板，上面刻有一串 $n$ 个神秘的符号（每个符号都是一个整数）。

据说，只有找到所有神圣的碎片，才能揭示这件 artifacts 的真正力量 —— 这些碎片是石板上满足两个条件的连续片段：
1.  它们恰好包含 $k$ 个不同的数字。
2.  它们的长度在 $l$ 和 $r$ 之间（含）。

形式上，给定一个长度为 $n$ 的序列 $a$ 和整数 $k$、$l$ 和 $r$，你需要找到满足以下条件的索引对 $(b, c)$ 的数量：
- $1 \le b \le c \le n$
- 子数组 $a[b..c]$ 恰好包含 $k$ 个不同的数字。
- $l \le c - b + 1 \le r$

## 题解说明

提供的解决方案使用了一个带有三个指针的滑动窗口方法：`beg`、`end1` 和 `end2`。主要思想是遍历所有可能的子数组起始位置（`beg`），并为每个起始位置找到有效的结束位置范围。

算法工作流程如下：

1.  **外层循环**：`beg` 指针从数组的开始到结束进行遍历，固定我们潜在子数组的左边界。

2.  **找到最左边的有效结束点（`end1`）**：对于一个固定的 `beg`，我们需要找到最小的索引 `end1`，使得子数组 `a[beg...end1]` 包含**恰好 `k`** 个不同的元素。
    -   一个 `while` 循环通过递增 `end1` 来扩展窗口，使用一个频率图（`cnt`）来跟踪不同元素的数量（`distinct1`）。
    -   一旦 `distinct1` 达到 `k`，循环就停止。此时，`end1` 是当前 `beg` 最早的可能有效终点。

3.  **找到最右边的有效结束点（`end2`）**：接下来，我们找到最大的索引 `end2`，使得子数组 `a[beg...end2]` 包含**最多 `k`** 个不同的元素。
    -   第二个 `while` 循环通过递增 `end2` 来扩展另一个窗口，使用一个单独的频率图（`cnt2`）和不同的计数（`distinct2`）。
    -   只要添加下一个元素不会使不同元素的数量*超过* `k`，这个循环就会继续。当子数组 `a[beg...end2]` 有 `k` 个不同的元素，并且添加 `a[end2 + 1]` 会使其变为 `k + 1` 时，循环停止。

4.  **计算有效子数组**：
    -   我们现在有了一个潜在的终点范围 `[end1, end2]`。这个范围内的任何终点 `c` 都会形成一个恰好有 `k` 个不同元素的子数组 `a[beg...c]`。
    -   我们还必须满足长度约束 `l` 和 `r`。因此，有效终点的范围被调整为：
        -   有效范围的开始是 `max(end1, beg + l - 1)`。
        -   有效范围的结束是 `min(end2, beg + r - 1)`。
    -   当前 `beg` 的有效子数组数量是这个调整后范围的长度，这个长度被加到总数 `ans` 中。

5.  **滑动窗口**：在移动到下一个 `beg` 之前，元素 `a[beg]` 从两个频率图（`cnt` 和 `cnt2`）中移除，并相应地更新不同的计数。这为下一次迭代准备了窗口。

这个过程对所有可能的 `beg` 位置重复进行，以找到总数。

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
    int n, k, l, r;
    cin >> n >> k >> l >> r;
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    map<int, int> cnt, cnt2;
    int beg = 0, end1 = -1, end2 = -1;
    // move end to l-1 make the the length of the window is l
    int distinct1 = 0, distinct2 = 0;
    int ans = 0;
    for(int beg = 0; beg < n; beg++) {
        // move end1 to exactly k distinct elements
        while (distinct1 < k && end1 + 1 < n){
            end1++;
            if(cnt[a[end1]] == 0) distinct1++;
            cnt[a[end1]]++;
        }
        if (distinct1 < k) break;
        // move end2 to at most k distinct elements
        while (distinct2 <= k && end2 + 1 < n) {
            // if (end2 < end1) {
            //     end2 = end1;
            //     distinct2 = distinct1;
            //     cnt2 = cnt;
            // }
            // if (end2 + 1 >= n) break;
            if (cnt2[a[end2 + 1]] == 0 && distinct2 < k) distinct2++;
            else if (cnt2[a[end2 + 1]] == 0 && distinct2 == k) break;
            end2++;
            cnt2[a[end2]]++;
        }
        int valid_end1 = end1, valid_end2 = end2;
        valid_end1 = max(valid_end1, beg + l - 1);
        valid_end2 = min(valid_end2, beg + r - 1);
        ans += max(0LL, valid_end2 - valid_end1 + 1);
        // remove beg from the window
        cnt[a[beg]]--;
        if (cnt[a[beg]] == 0) distinct1--;
        cnt2[a[beg]]--;
        if (cnt2[a[beg]] == 0) distinct2--;
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

[提交链接](https://codeforces.com/contest/2149/submission/341949992)

---

## 替代方案：“最多 K”原则

对于“恰好k个不同元素”的问题，一个更健壮和常见的策略是使用容斥原理。具有**恰好 `k`** 个不同元素的子数组数量等于：

（具有**最多 `k`** 个不同元素的子数组数量）-（具有**最多 `k-1`** 个不同元素的子数组数量）。

这种方法通过避免同时管理“恰好k”和“最多k”的两个独立窗口来简化问题。我们可以编写一个干净的辅助函数，该函数计算具有最多特定数量不同元素的子数组，并调用它两次。

以下是该函数使用滑动窗口的工作方式：

1.  **初始化**：从 `left = 0`、`total_count = 0` 和一个频率图开始。
2.  **扩展窗口**：使用一个 `right` 指针从 `0` 到 `n-1` 迭代，将 `a[right]` 添加到窗口并更新其频率。
3.  **收缩窗口**：如果窗口 `[left, right]` 中不同元素的数量超过了 `max_distinct` 限制，则通过递增 `left` 并更新频率来从左侧收缩窗口，直到窗口再次有效。
4.  **计算有效子数组**：一旦窗口 `[left, right]` 有效，计算以 `right` 结尾且满足长度约束 `[l, r]` 的子数组数量。将此计数添加到总数中。

最终答案是 `count_at_most(k, ...)` 的结果减去 `count_at_most(k-1, ...)` 的结果。

{{% details title="查看代码" closed="true" %}}
```cpp
#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

#define int long long

// Function to count subarrays with at most `max_distinct` distinct elements
// and length in the range [l_len, r_len].
long long count_at_most(int max_distinct, int l_len, int r_len, int n, const vector<int>& a) {
    if (max_distinct < 0) return 0; // Guard against k-1 < 0
    map<int, int> counts;
    int left = 0;
    long long total_count = 0;
    int current_distinct = 0;

    for (int right = 0; right < n; ++right) {
        if (counts[a[right]] == 0) {
            current_distinct++;
        }
        counts[a[right]]++;

        // Shrink the window if we have too many distinct elements
        while (current_distinct > max_distinct) {
            counts[a[left]]--;
            if (counts[a[left]] == 0) {
                current_distinct--;
            }
            left++;
        }

        // Now, the window [left, right] has at most `max_distinct` elements.
        // We need to find how many of these satisfy the length constraints [l_len, r_len].

        // Lower bound for valid start `b`: right - r_len + 1
        int start_min = right - r_len + 1;
        // Upper bound for valid start `b`: right - l_len + 1
        int start_max = right - l_len + 1;

        // The actual valid start `b` must be within the current window [left, right]
        int valid_starts_min = max((long long)left, (long long)start_min);
        int valid_starts_max = start_max;

        if (valid_starts_max >= valid_starts_min) {
            total_count += (valid_starts_max - valid_starts_min + 1);
        }
    }
    return total_count;
}

void solve() {
    int n, k, l, r;
    cin >> n >> k >> l >> r;
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    // Count subarrays with at most k distinct elements
    long long count_k = count_at_most(k, l, r, n, a);

    // Count subarrays with at most k-1 distinct elements
    long long count_k_minus_1 = count_at_most(k - 1, l, r, n, a);

    cout << count_k - count_k_minus_1 << endl;
}

int32_t main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}
```
{{% /details %}}