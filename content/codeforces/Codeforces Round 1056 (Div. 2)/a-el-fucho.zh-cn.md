---
title: "A. El fucho"
---

## 题目描述

胡安和他的朋友们准备分成 $n$ 支队伍，进行一场改良版的双败淘汰制足球锦标赛。比赛分为胜者组和败者组，最初所有 $n$ 支队伍都属于胜者组。

在锦标赛的每一轮中，只要任一组的队伍数量不少于两支，就会发生以下情况：

1.  **胜者组：** 胜者组中的所有队伍进行配对。如果胜者组的队伍数量为奇数，会有一支队伍无法配对（不参加比赛），该队伍将留在胜者组。对于配对的队伍，每对进行一场足球比赛，比赛没有平局。获胜的队伍将留在胜者组，失败的队伍将在下一轮降入败者组。

2.  **败者组：** 败者组中的所有队伍进行配对。如果败者组的队伍数量为奇数，会有一支队伍无法配对（不参加比赛），该队伍将留在败者组。对于配对的队伍，每对进行一场足球比赛，比赛没有平局。获胜的队伍将留在败者组，失败的队伍将被淘汰出锦标赛。

请注意，在上述过程中，当一支队伍在胜者组的比赛中失利时，它将在*下一轮*降入败者组。这意味着，它不会被考虑进当前轮次败者组的配对过程中。

经过多轮上述过程后，两个组最终都只剩下一支队伍。此时，这两支队伍将进行一场对决，决出最终的胜利者。

请确定总共进行了多少场比赛。可以证明，无论队伍如何配对以及哪支队伍胜负，答案都是相同的。

## 解题思路

题目要求计算一个改良版双败淘汰赛中的总比赛场数。由于队伍数量 $n$ 较小，我们可以直接模拟整个锦标赛的进程。

我们需要跟踪胜者组（`win`）和败者组（`loss`）的队伍数量。初始时，`win = n`，`loss = 0`。我们还需要一个计数器来记录总比赛场数。

模拟在一个循环中进行，直到满足终止条件：胜者组和败者组各剩一支队伍（`win == 1 && loss == 1`）。

在每一轮的循环中，我们计算变化：

1.  **胜者组的比赛：**
    - 进行的比赛场数为 `win / 2`。我们将其加入总比赛数。
    - 失败并进入败者组的队伍数量为 `win / 2`。
    - 留在胜者组的队伍数量为 `(win / 2)`（胜者）+ `(win % 2)`（未比赛的队伍，如果有的话）。这可以简化为 `(win + 1) / 2`。

2.  **败者组的比赛：**
    - 进行的比赛场数为 `loss / 2`。我们将其加入总数。
    - 从当前败者组中幸存的队伍数量为 `(loss + 1) / 2`。

3.  **为下一轮更新：**
    - 新的胜者数量为 `win = (win + 1) / 2`。
    - 新的败者数量是败者组幸存者和从胜者组掉下的队伍之和：`loss = (loss + 1) / 2 + (win / 2)`。

循环持续到 `win == 1` 且 `loss == 1`。此时，会进行最后一场决赛，所以我们将总数加 1 并终止。

C++ 代码在 `while` 循环中实现了这个精确的模拟逻辑，正确计算了总比赛场数。

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
    int win = n;
    int loss = 0;
    int num_rounds = 0;
    while(win + loss >= 1) {
        if (win == 1 && loss == 1) {
            num_rounds++;
            break;
        }
        num_rounds+= (loss) / 2;
        loss = (loss + 1) / 2;
        loss += win / 2;
        num_rounds+= (win) / 2;
        win = (win + 1) / 2;
    }
    cout << num_rounds << endl;
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