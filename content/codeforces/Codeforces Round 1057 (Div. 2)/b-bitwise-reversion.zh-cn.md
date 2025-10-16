---
title: "B. Bitwise Reversion"
type: docs
math: true
---

## 问题描述

给定三个非负整数 $x, y, z$。判断是否存在三个非负整数 $a, b, c$ 满足以下三个条件：

- $a \ \& \ b = x$
- $b \ \& \ c = y$
- $a \ \& \ c = z$

其中 $\&$ 表示按位与操作。

## 解题思路

问题要求我们根据 $a, b, c$ 两两按位与操作的结果，判断是否存在这样的三个非负整数 $a, b, c$。

我们来分析按位与操作对 $a, b, c$ 施加的约束。
- 条件 $a \ \& \ b = x$ 意味着，对于任何一个比特位，如果该位在 $x$ 中为 1，那么它在 $a$ 和 $b$ 中也必须为 1。
- 同样地，$b \ \& \ c = y$ 意味着，在 $y$ 中为 1 的任何比特位，在 $b$ 和 $c$ 中也必须为 1。
- 而 $a \ \& \ c = z$ 意味着，在 $z$ 中为 1 的任何比特位，在 $a$ 和 $c$ 中也必须为 1。

从这些观察中，我们可以确定在 $a, b, c$ 中必须为 1 的最小比特集合。
- 对于 $a$，它必须包含所有在 $x$ 中为 1 的比特位和所有在 $z$ 中为 1 的比特位。满足此条件的最小整数是 $x \ | \ z$。
- 对于 $b$，它必须包含所有来自 $x$ 和 $y$ 的比特位。最小的整数是 $x \ | \ y$。
- 对于 $c$，它必须包含所有来自 $y$ 和 $z$ 的比特位。最小的整数是 $y \ | \ z$。

这给了我们一个可能的候选解。我们尝试这样构造 $a, b, c$：
- 令 $a = x \ | \ z$
- 令 $b = x \ | \ y$
- 令 $c = y \ | \ z$

这个构造给了我们 $a, b, c$ 可能的“最小”值。如果存在其他整数 $a', b', c'$ 构成一个有效的解，那么必须满足 $a$ 是 $a'$ 的子掩码，$b$ 是 $b'$ 的子掩码，$c$ 是 $c'$ 的子掩码。然而，向 $a, b, c$ 中添加更多的比特位（即将 0 变为 1）只会导致与操作的结果保持不变或从 0 变为 1，绝不会将 1 变为 0。这意味着，如果我们最小的构造 `(a & b)` 的结果中有一个不在 `x` 中的比特位，那么没有更大的 `a` 或 `b` 值可以修复它。

因此，如果这个最小的构造可行，解就存在。如果它失败了，那么解就不存在。策略是构造这些 $a, b, c$ 的候选值，然后验证它们是否满足最初的三个方程。

算法如下：
1. 计算候选值：`a = x | z`, `b = x | y`, `c = y | z`。
2. 检查它们是否满足条件：
   - `(a & b) == x`
   - `(b & c) == y`
   - `(c & a) == z`
3. 如果所有三个条件都为真，答案是 "YES"。否则，是 "NO"。

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
    int x, y, z;
    cin >> x >> y >> z;

    int a = x | z;
    int b = x | y;
    int c = y | z;
    if ((a & b) == x && (b & c) == y && (c & a) == z){
        cout << "YES" << endl;
    }else{
        cout << "NO" << endl;
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
