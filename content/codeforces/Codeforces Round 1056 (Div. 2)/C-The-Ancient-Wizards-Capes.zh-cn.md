---
title: "C. The Ancient Wizards' Capes"
type: docs
math: true
---

## 题目描述

有 $n$ 个巫师排成一排，从左到右编号为 1 到 $n$。每个巫师都有一件隐形斗篷，可以穿在左侧或右侧。

哈利从巫师 1 的位置走到巫师 $n$ 的位置（$1 \le n \le 10^5$）。在每个巫师的位置 $i$，他会记录他能看到的巫师总数。

一个位于位置 $j$ 的巫师能从位置 $i$ 被看到，需要满足以下条件之一：
*   巫师 $j$ 将斗篷穿在左侧，且 $i \ge j$。
*   巫师 $j$ 将斗篷穿在右侧，且 $i \le j$。

特别注意，巫师 $i$ 总是能从自己的位置 $i$ 看到自己。

你破译了哈利的一份陈旧清单，它是一个包含 $n$ 个元素的数组 $a$。其中第 $i$ 个元素 $a_i$（$1 \le a_i \le n$）是哈利从位置 $i$ 看到的巫师数量。

你的任务是，在所有可能的斗篷安排中，找出有多少种安排与清单 $a$ 中的数据一致。

---

## 解题思路

这个问题的核心在于理解相邻位置 $i$ 和 $i-1$ 处可见巫师数量（$a_i$ 和 $a_{i-1}$）之间的关系。这种关系将揭示巫师 $i-1$ 和巫师 $i$ 斗篷的相对朝向。

我们用 $C_k=1$ 表示巫师 $k$ 把斗篷穿在左边，用 $C_k=0$ 表示他穿在右边。

根据题目定义，从位置 $i$ 可见的巫师数量 $a_i$ 是以下两项之和：
1.  所有位置 $j \le i$ 且斗篷在左侧的巫师。
2.  所有位置 $j \ge i$ 且斗篷在右侧的巫师。

这可以表示为公式：
$a_i = \sum_{k=1}^{i} C_k + \sum_{k=i}^{n} (1 - C_k)$

现在，我们为位置 $i-1$ 写出相同的公式：
$a_{i-1} = \sum_{k=1}^{i-1} C_k + \sum_{k=i-1}^{n} (1 - C_k)$

让我们计算两者之差，$a_i - a_{i-1}$：
$a_i - a_{i-1} = \left(\sum_{k=1}^{i} C_k - \sum_{k=1}^{i-1} C_k\right) + \left(\sum_{k=i}^{n} (1 - C_k) - \sum_{k=i-1}^{n} (1 - C_k)\right)$

第一部分简化为 $C_i$。第二部分简化为 $-(1 - C_{i-1})$。
所以，它们的关系是：
$a_i - a_{i-1} = C_i - (1 - C_{i-1}) = C_i + C_{i-1} - 1$

整理后得到：
$C_i + C_{i-1} = a_i - a_{i-1} + 1$

这个方程告诉我们，两个相邻巫师（$i-1$ 和 $i$）的斗篷朝向之和是由他们的可见巫师数之差（$a_i - a_{i-1}$）决定的。让我们分析 $a_i - a_{i-1}$ 的几种可能情况：

1.  **$a_i - a_{i-1} = 1$**:
    $C_i + C_{i-1} = 1 + 1 = 2$。由于 $C_k$ 只能是 0 或 1，这意味着 $C_i=1$ 且 $C_{i-1}=1$。两个巫师都把斗篷穿在**左边**。
2.  **$a_i - a_{i-1} = -1$**:
    $C_i + C_{i-1} = -1 + 1 = 0$。这意味着 $C_i=0$ 且 $C_{i-1}=0$。两个巫师都把斗篷穿在**右边**。
3.  **$a_i - a_{i-1} = 0$**:
    $C_i + C_{i-1} = 0 + 1 = 1$。这意味着一个巫师的斗篷在左边 (1)，另一个在右边 (0)。他们的斗篷朝向**相反**。

这个发现是关键：斗篷 $i$ 相对于斗篷 $i-1$ 的朝向是唯一确定的。如果我们知道了第一个巫师斗篷的朝向，我们就可以逐个确定后续所有巫师的朝向。

这使得整排巫师只剩下两种可能的有效安排：
-   一种是巫师 1 的斗篷在左边开始的安排。
-   另一种是巫师 1 的斗篷在右边开始的安排。

我们的算法如下：
1.  **测试第一种可能性：** 假设巫师 1 的斗篷在左边。
2.  从 $i=2$ 迭代到 $n$，利用上面推导的关系，根据 $a_i$、$a_{i-1}$ 和已知的巫师 $i-1$ 的斗篷朝向，来确定巫师 $i$ 的斗篷朝向。
3.  在确定了完整的安排后，我们必须对其进行验证。根据这个安排从头计算可见性数组 `vis`，并检查是否对所有 $i$ 都满足 `vis[i] == a[i]`。
4.  如果该安排有效，我们将其计为一个解。
5.  **测试第二种可能性：** 重复此过程，这次假设巫师 1 的斗篷在右边。
6.  如果第二种安排也有效，我们将其加入计数。
7.  最终答案是总计数，可能是 0、1 或 2。

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
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    vector<bool> a_side(n, false);  // false; visibile from left
    for (int i = 1; i < n; i++) {
        if (a[i] == a[i - 1]) {
            a_side[i] = !a_side[i - 1];
        } else {
            a_side[i] = a_side[i - 1];
        }
    }
    auto func_verify = [&](vector<int> &a, vector<bool> &a_side) -> bool {
        int vis_t = 0;
        vector<int> vis(n, 0);
        for (int i = 0; i < n; i++) {
            vis[i] += vis_t;
            vis_t += a_side[i] == false ? 1 : 0;
        }
        vis_t = 0;
        for (int i = n - 1; i >= 0; i--) {
            vis[i] += vis_t;
            vis_t += a_side[i] == true ? 1 : 0;
        }
        // if vis == a, return true
        for (int i = 0; i < n; i++) {
            if (vis[i]+1 != a[i]) {
                return false;
            }
        }
        return true;
    };
    int ans = func_verify(a, a_side) ? 1 : 0;
    a_side[0] = true;

    for (int i = 1; i < n; i++) {
        if (a[i] == a[i - 1]) {
            a_side[i] = !a_side[i - 1];
        } else {
            a_side[i] = a_side[i - 1];
        }
    }
    ans += func_verify(a, a_side) ? 1 : 0;
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