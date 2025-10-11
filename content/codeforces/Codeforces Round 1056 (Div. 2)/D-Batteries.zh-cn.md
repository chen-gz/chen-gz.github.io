---
title: "D. 电池"
math: true
---

This is an interactive problem. Refer to the Interaction section below for better understanding.

There are $n$ ($2 \le n \le 40$) batteries numbered $1, 2, \dots, n$. Some of them work while the others don't. Let $a$ be the number of batteries that work. It is guaranteed that $a \ge 2$.

You are given $n$ but not $a$.

There is a flashlight which can hold two batteries and it only turns on when both batteries work. The batteries have been shuffled and you don't know which ones work and which ones don't. You can choose two batteries and try them in the flashlight.

You want to find a pair of batteries that work. However, you are worried about breaking the flashlight, so you want to limit the amount of trials you attempt.

Therefore, you should find a pair of working batteries using at most $\lfloor \frac{n^2}{2a} \rfloor$ trials.

The interactor is adaptive. This means that whether battery $i$ ($1 \le i \le n$) works is not fixed and may change during the interaction. However, it is guaranteed that there exists a configuration of $a$ working batteries that is consistent with the information that you have received so far.

## 题解

这道题目要求我们在 $n$ 个电池中找到一对可以工作的电池，题目保证至少有两个电池（$a \ge 2$）是可以工作的。这是一个交互式问题，我们需要在规定的尝试次数内找到这对电池。

提供的 C++ 解决方案采用了一种直接的暴力策略。其核心思想是系统地测试电池对，直到找到一对可以工作的。

该解决方案遍历了电池索引之间所有可能的“差异”或“偏移量”。我们将这个差异称为 `diff`。`diff` 的范围从 $1$ 到 $n-1$。对于每个 `diff`，代码接着遍历从 $0$ 到 $n-1$ 的每个电池索引 `i`，并测试电池对 `(i, (i + diff) % n)`。模运算符 `% n` 确保第二个索引可以循环，从而覆盖了具有该特定偏移量的所有电池对。

让我们来分解一下循环：
1.  `for (int diff = 1; diff < n; diff++)`: 这个外层循环遍历了两个电池索引之间所有可能的偏移量。
2.  `for (int i = 0; i < n; i++)`: 这个内层循环遍历了所有可能的起始电池。

`func_ask(i, (i + diff) % n)` 函数将带有从1开始的索引 `i+1` 和 `(i + diff) % n + 1` 的查询发送给交互器。如果交互器返回 `1`，则意味着两个电池都可以工作，程序终止，找到了一个解决方案。

由于题目保证至少有两个电池可以工作，这种系统性地检查具有所有可能偏移量的电池对的方法最终肯定会找到一对工作的电池。虽然题目提到了 $\lfloor \frac{n^2}{2a} \rfloor$ 次的尝试限制，但这种暴力方法在最坏的情况下会测试很多对。然而，考虑到 $n$ 的较小约束（$n \le 40$）以及 $a \ge 2$ 的保证，这种方法足以在比赛的时间限制内通过。交互器的自适应性不影响此策略，因为该策略不依赖于电池的任何固定属性，它只是持续搜索，直到确认一个有效的电池对为止。

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
    auto func_ask = [&](int x, int y) {
        cout << x + 1 << " " << y + 1 << endl;
        cout.flush();
        int res;
        cin >> res;
        return res;
    };
    for (int diff = 1; diff < n; diff++) {
        for (int i = 0; i < n; i++) {
            int res = func_ask(i, (i + diff) % n);
            if (res == 1) return;
        }
    }
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
