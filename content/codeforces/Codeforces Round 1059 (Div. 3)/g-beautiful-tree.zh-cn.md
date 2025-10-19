---
title: "G. 美丽的树"
math: true
---

## 题目描述

树是一种无环的连通图。

如果一棵树的所有边的顶点标签乘积之和是一个完全平方数，则称其为**美丽的**。

更正式地说，设 $E$ 为树中边的集合。如果值
$S = \sum_{\{u,v\} \in E} (u \cdot v)$
是一个完全平方数，则该树是美丽的。也就是说，存在一个整数 $x$ 使得 $S = x^2$。

给定一个整数 $n$。你的任务是构造一棵有 $n$ 个顶点的美丽树，或者报告不存在这样的树。

## 解题思路

题目要求我们构造一棵有 $n$ 个顶点的树，使得所有相邻顶点标签的乘积之和是一个完全平方数。

我们来分析一下和 $S$。我们需要找到一种树的结构和一种从 $1$ 到 $n$ 的顶点标记方法，使得 $S$ 是一个完全平方数。一个容易分析的树结构是星形图，其中一个中心顶点连接到所有其他 $n-1$ 个顶点。

让我们尝试围绕一个目标和（一个完全平方数）来构造解。一个与 $n$ 相关的自然候选完全平方数是 $n^2$。我们能得到 $n^2$ 的和吗？

考虑一个小例子。如果我们将顶点 $n$ 连接到 $1$，顶点 $4$ 连接到 $3$，所有其他顶点 $i$（其中 $i \in \{2, 3, 5, \dots, n-1\}$）连接到顶点 $2$。边乘积的和将是：
$S = 1 \cdot n + 3 \cdot 4 + \sum_{i \in \{2,3,5,\dots,n-1\}} 2 \cdot i$
这看起来很复杂。

对于 $n > 5$，我们尝试另一种构造方法。我们创建边 (1, n)、(1, 2)、(2, 3) 和 (3, 4)。然后，我们将所有剩余的顶点 $i=5, \dots, n-1$ 连接到顶点 2。
边乘积的和是：
$S = 1 \cdot n + 1 \cdot 2 + 2 \cdot 3 + 3 \cdot 4 + \sum_{i=5}^{n-1} 2 \cdot i$
我们来分析一下这个和。
$S = n + 2 + 6 + 12 + 2 \cdot \frac{(n-1+5)(n-1-5+1)}{2}$
$S = n + 20 + (n+4)(n-5) = n + 20 + n^2 -n - 20 = n^2$。
这种构造得到的和是 $n^2$，这是一个完全平方数。

这种构造适用于 $n > 5$。我们需要单独处理一些小情况：
- **n = 2:** 唯一可能的树是 1 和 2 之间的一条边。和是 $1 \cdot 2 = 2$，不是完全平方数。不存在解。
- **n = 3:** 我们可以连接 (1,3) 和 (2,3)。和是 $1 \cdot 3 + 2 \cdot 3 = 9 = 3^2$。这是一棵美丽的树。
- **n = 4:** 我们可以连接 (1,2), (1,3), (1,4)。和是 $1 \cdot 2 + 1 \cdot 3 + 1 \cdot 4 = 9 = 3^2$。这是一棵美丽的树。
- **n = 5:** 我们可以连接 (1,5), (1,2), (2,3), (3,4)。和是 $1 \cdot 5 + 1 \cdot 2 + 2 \cdot 3 + 3 \cdot 4 = 5 + 2 + 6 + 12 = 25 = 5^2$。这是一棵美丽的树。

对于 $n > 5$，构造方法如下：
1. 边 (1, n)
2. 边 (1, 2)
3. 边 (2, 3)
4. 边 (3, 4)
5. 对于所有从 5 到 $n-1$ 的 $i$，添加边 (2, i)。

提供的代码为每种情况实现了这些特定的构造。

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
    if (n == 2) {
        cout << -1 <<endl;
        return ;
    }
    if (n == 3) {
        cout << "1 3\n2 3\n" <<endl;
        return ;
    }
    if (n == 4) {
        cout << "1 2\n3 1\n 4 1\n";
        return;
    }
    if (n == 5) {
        cout << "1 5\n1 2\n2 3\n3 4\n";
        return;
    }
    cout << "1 "<< n << "\n1 2\n2 3\n3 4\n";
    for(int i = 5; i < n; i++) {
        cout << 2 << " " << i << "\n";
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
