---
title: "B. 亚伯拉罕的大逃亡"
date: 2024-07-21
draft: false
---
## 题目描述
亚伯拉罕是一位勇敢的探险家，他去到了其他程序员从未涉足过的地方。在他的下一次探险中，他计划调查一个奇特的迷宫。他知道这个迷宫是一个 $n \times n$ 的网格，每个单元格都有一个箭头，指向四个方向之一：上、下、左、右。

亚伯拉罕还知道，如果他站在一个箭头上，他将被迫从那个单元格开始跟随箭头。每个箭头会将亚伯拉罕精确地移动到它所指向方向的1个单元格。如果他到达一个指向迷宫外部的箭头，亚伯拉罕将逃离迷宫。

亚伯拉罕不知道箭头的排列方式，所以他想为多种情况制定计划。他交给你的任务是，在网格中找到一种箭头的排列方式，使得恰好有 $k$ 个起始单元格可以让他逃离迷宫。

## 解题思路
题目要求我们构建一个 $n \times n$ 的箭头网格（上、下、左、右），使得从 $n^2$ 个起始单元格中，恰好有 $k$ 个可以导致逃脱。

如果从一个起始单元格跟随箭头最终能走出网格，则视为可以逃脱。如果箭头的路径形成一个循环或进入一个循环，则保证无法逃脱。

总共有 $n^2$ 个单元格。我们需要 $k$ 个可逃脱的单元格，这意味着我们需要 $n^2 - k$ 个不可逃脱的单元格。

我们来分析一下不可逃脱路径的条件。创建不可逃脱陷阱的最简单方法是一个包含2个单元格的循环。例如，两个相邻的单元格互相指向对方：`R` 和 `L`。任何进入这两个单元格之一的路径都将被永远困住。单个单元格无法自行形成循环，因为它必须指向自己，而这是不允许的（它会移动1个单元格）。因此，创建一个不可逃脱区域所需的最少单元格数量是2。

这给了我们一个关键的洞察：如果我们需要创建 $n^2 - k$ 个不可逃脱的单元格，而这个数量是1（即 $n^2 - k = 1$），那是不可能的。在这种情况下，我们应该输出 "NO"。

对于所有其他情况，都是可能的。我们用 `no_escape = n*n - k` 来表示不可逃脱单元格的数量。

如果 `no_escape` 为 0，我们可以简单地让每个单元格都成为可逃脱的。例如，将最后一列的所有单元格指向'下'，所有其他单元格指向'右'。这确保了每条路径最终都会向右移出网格，或者到达最后一列然后向下移出网格。

如果 `no_escape` > 0 (且 `no_escape` != 1)，我们可以构建所需的网格。
1.  **创建一个陷阱：** 我们可以创建一个2单元格的循环，例如，在 `(0, 0)` 和 `(0, 1)` 处设置 `ans[0][0] = 'R'` 和 `ans[0][1] = 'L'`。这用掉了我们2个 `no_escape` 单元格。
2.  **导入陷阱：** 我们还有 `no_escape - 2` 个剩余的单元格必须不能导致逃脱。我们可以让它们指向陷阱。一个简单的策略是逐行逐列地填充单元格。对于每个需要不可逃脱的单元格，如果它在第一列，我们可以将其指向'上'（以避免向左逃脱），否则指向'左'。这将路径引向左上角，最终进入我们的 `(0,0)`-`(0,1)` 陷阱。
3.  **创建逃生路径：** 对于剩余的 $k$ 个单元格，我们必须确保它们能导致逃脱。我们可以使用与 `no_escape = 0` 情况相同的策略：将最后一列的单元格指向'下'，所有其他单元格指向'右'。这保证了从这些单元格开始的任何路径都不会与我们的陷阱（位于左上角）相交，并且会安全地离开网格。

通过结合这些策略，我们可以为任何有效的 $k$ 成功构建一个网格。

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
    vector<string> ans(n);
    // resize to nxn
    for (int i = 0; i < n; i++) {
        ans[i].resize(n, '0');
    }
    // the number of nxn - k should great then 2
    if (n * n - k == 1) {
        cout << "NO" << endl;
        return;
    }
    int no_escape = n * n - k;
    if (no_escape != 0) {
        no_escape -= 2;
        ans[0][0] = 'R';
        ans[0][1] = 'L';
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (no_escape > 0 && ans[i][j] == '0') {
                if (j == 0)
                    ans[i][j] = 'U';
                else
                    ans[i][j] = 'L';
                no_escape--;
            }
        }
    }
    // set all other to R and D(last column)
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (ans[i][j] == '0') {
                if (j == n - 1)
                    ans[i][j] = 'D';
                else
                    ans[i][j] = 'R';
            }
        }
    }
    cout << "YES" << endl;
    for (int i = 0; i < n; i++) {
        cout << ans[i] << endl;
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