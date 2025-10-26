---
title: C. Beautiful XOR
math: true
---

## 题目描述
给定两个整数 $a$ 和 $b$。你可以执行以下操作任意次数（包括零次）：
- 选择一个整数 $x$，满足 $0 \le x \le a$（$a$ 的当前值，而非初始值），
- 令 $a := a \oplus x$。这里的 $\oplus$ 代表位异或操作。

在执行一系列操作后，你希望将 $a$ 的值恰好变为 $b$。

请找出一个最多包含 100 个操作的序列（即每次操作中使用的 $x$ 的值），将 $a$ 转换为 $b$，或者报告无解。

注意，你不需要找出操作次数最少的序列，任何一个有效的、操作次数不超过 100 的序列即可。

## 解题思路
设初始值为 $a$，目标值为 $b$。经过一系列选择整数 $x_1, x_2, \ldots, x_k$ 的操作后，$a$ 的最终值将变为 $a \oplus x_1 \oplus x_2 \oplus \ldots \oplus x_k$。令 $X = x_1 \oplus x_2 \oplus \ldots \oplus x_k$。我们希望最终的值为 $b$，因此得到方程：
$a \oplus X = b$
这意味着所有操作的异或总和必须为 $X = a \oplus b$。

我们的任务是找到一系列 $x_i$ 的值，这些值是有效的（即在每一步都满足 $x_i \le a_{\text{当前}}$），并且它们的异或总和为 $X = a \oplus b$。

构造总异或和 $X$ 的一个简单方法是将其分解为其二进制表示中的各个2的幂。任何整数都可以唯一地表示为不同的2的幂的和，这对应于其二进制表示中为1的位。如果我们对每一个这样的2的幂执行一次异或操作，它们的总异或和将等于 $X$。

假设 $X = p_1 \oplus p_2 \oplus \ldots \oplus p_k$，其中每个 $p_i$ 是一个不同的2的幂。我们可以用这个 $p_i$ 序列作为我们的操作 $x_i$。每次操作的条件是 $p_i \le a_{\text{当前}}$。

我们来分析这个条件。设 $p_{\max}$ 是 $X$ 的二进制表示中最大的2的幂。这对应于 $a$ 和 $b$ 不同的最高位。

**情况一：$p_{\max} \le a$ (初始值)**
如果转换所需的最大2的幂 $p_{\max}$ 小于或等于初始值 $a$，那么解是存在的。设所需的操作为 $p_1, p_2, \ldots, p_k$，其中 $p_k = p_{\max}$。
在任何一步，当我们执行操作 $a_{\text{新}} = a_{\text{旧}} \oplus p_i$ 时，我们需要确保 $p_i \le a_{\text{旧}}$。
由于 $p_{\max}$ 是差异的最高位，所以 $a$ 在高于 $p_{\max}$ 的所有位都与 $b$ 相同。条件 $p_{\max} \le a$ 意味着 $a$ 的最高位至少与 $p_{\max}$ 在同一位置。
当我们应用 $p_i < p_{\max}$ 的操作时，这些操作只影响比 $a$ 的最高位低的位。因此，$a$ 的值仍然大于或等于 $p_{\max}$。这确保了对于任何后续操作 $p_i$，$a_{\text{当前}} \ge p_{\max} \ge p_i$。因此，序列中的所有操作都是有效的。

**情况二：$p_{\max} > a$ (初始值)**
如果转换所需的最大2的幂 $p_{\max}$ 大于初始的 $a$，则不可能达到 $b$。
设 $p_{\max} = 2^m$。条件 $p_{\max} > a$ 意味着 $a < 2^m$。这说明 $a$ 在位置 $m$ 及以上的所有位都是0。
对于任何操作，我们都必须选择一个 $x \le a_{\text{当前}}$。如果 $a_{\text{当前}} < 2^m$，那么也必须有 $x < 2^m$。异或操作的结果 $a_{\text{当前}} \oplus x$ 也将小于 $2^m$。这是因为两个数的异或结果的最高位不会超过这两个数中较大者的最高位。
由于我们从 $a < 2^m$ 开始，我们永远无法达到一个大于或等于 $2^m$ 的值。
然而，由于 $p_{\max}=2^m$ 是 $X = a \oplus b$ 的一部分，所以 $a$ 和 $b$ 的第 $m$ 位必须不同。由于 $a$ 的第 $m$ 位是0，所以 $b$ 的第 $m$ 位必须是1。这意味着 $b \ge 2^m$。
由于我们永远无法达到 $\ge 2^m$ 的值，因此不可能将 $a$ 转换为 $b$。

所以，策略是：
1. 计算 $X = a \oplus b$。
2. 如果 $X=0$，则不需要任何操作。
3. 找到 $X$ 中最大的2的幂，设为 $p_{\max}$。
4. 如果 $p_{\max} \le a$，解就是构成 $X$ 的所有2的幂的序列。
5. 如果 $p_{\max} > a$，则无解。

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
    int a, b;
    cin >> a >> b;
    int x = a ^ b;
    vector<int> ans;
    int pow = 1;
    if (x == 0){
        cout << 0 << endl;
        return;
    }
    while(x > 0) {
        if(x & 1) {
            ans.push_back(pow);
        }
        pow *= 2;
        x >>= 1;
    }
    if (ans.back() <= a ) {
        cout << ans.size() <<endl;
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << " ";
            }
        cout << endl;
    } else {
        cout << -1 << endl;
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
