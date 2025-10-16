---
title: "D. Not Alone"
date: 2024-07-28T12:00:00+08:00
math: true
---

## Problem Statement

A circular array $b$ of length $m$ is **nice** if every element has at least one adjacent element that is equal to it. Formally, for every $1 \le i \le m$, at least one of the following holds: $b_i = b_{(i+m-2) \pmod m + 1}$, or $b_i = b_{i \pmod m + 1}$.

You are given a circular array $a$ of length $n$. In one operation, you may increase or decrease any element of $a$ by 1. Your task is to determine the minimum number of operations required to make array $a$ nice. More formally, find the minimum value of $\sum_{i=1}^{n} |b_i - a_i|$ among all nice circular arrays $b$ of length $n$.

## Solution

The problem asks for the minimum cost to transform array `a` into a "nice" array `b`. A nice array is one where every element is part of a block of at least two identical, adjacent elements. This means the entire array can be partitioned into blocks of adjacent, identical elements, where each block has a size of 2 or 3. Any larger block (e.g., size 4 or 5) can be decomposed into smaller blocks of size 2 and 3. For instance, a block of 4 can be seen as two blocks of 2, and a block of 5 can be one block of 2 and one of 3.

This structure suggests a dynamic programming approach. Let's first consider the problem for a linear array. Let `dp[i]` be the minimum cost to make the prefix `a[0...i]` nice. To compute `dp[i]`, we consider the last block of identical elements ending at index `i`:

1.  **The last block has size 2:** This block consists of elements `a[i-1]` and `a[i]`. To make them identical, the minimum cost is `abs(a[i-1] - a[i])`. The total cost is the cost for this block plus the minimum cost for the prefix `a[0...i-2]`, which is `dp[i-2]`. So, the cost is `dp[i-2] + abs(a[i-1] - a[i])`.

2.  **The last block has size 3:** This block consists of `a[i-2]`, `a[i-1]`, and `a[i]`. To make three numbers equal with minimum cost, we should change them all to their median. The cost is `|a[i-2] - m| + |a[i-1] - m| + |a[i] - m|`, where `m` is the median of the three. The total cost is `dp[i-3]` plus the cost for this block.

Combining these cases, we get the recurrence relation:
`dp[i] = min(dp[i-2] + cost_for_block_2, dp[i-3] + cost_for_block_3)`

The main challenge is that the array is circular. Our linear DP approach doesn't account for blocks that "wrap around" the end of the array (e.g., a block formed by `a[n-1]` and `a[0]`).

To handle the circularity, we can run the linear DP multiple times on different rotations of the array. The idea is that any optimal solution for the circular array can be viewed as a linear solution if we "cut" the circle at the right place. Since the maximum block size we need to consider is 3, a block can wrap around involving `a[n-1]` and `a[0]`, or `a[n-2], a[n-1], a[0]`, etc. By rotating the array a few times (e.g., moving the first element to the end) and running the linear DP each time, we ensure that we cover all possible wrap-around configurations. The minimum result from these runs will be the answer for the circular array. The provided solution tries 4 different starting configurations to guarantee finding the optimal one.

{{% details title="View Code" closed="true" %}}
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
int min_3(int a, int b, int c) {
    // find the medium value of a, b, c
   int mid = a + b + c - max(a, max(b, c)) - min(a, min(b, c));
   return abs(a - mid) + abs(b - mid) + abs(c - mid);
}
int mid_2(int a, int b) {
    return abs(a - b);
}
int calc(vector<int> &a) {
    int n = a.size();
    if (n == 1) return 0;
    if (n == 2) return abs(a[0] - a[1]);
    if (n == 3) return min_3(a[0], a[1], a[2]);
    vector<int> dp(n);
    dp[0] = 0;
    dp[1] = abs(a[0] - a[1]);
    dp[2] = min_3(a[0], a[1], a[2]);
    if (n > 3) {
        dp[3] = dp[1] + mid_2(a[2], a[3]);
    }
    for (int i=4;i<n;i++){
        dp[i] = dp[i-3] + min_3(a[i], a[i-1], a[i-2]);
        dp[i] = min(dp[i], dp[i-2] + mid_2(a[i], a[i-1]));
    }
    return dp[n-1];
}

void solve() {
    int n;
    cin >> n;
    vector<int> a(n);
    // double
    for (auto &i : a) {
        cin >> i;
    }
    int res = calc(a);
    // move first elemetn to last and make
    if (n > 1) {
        a.push_back(a[0]);
        a.erase(a.begin());
        res = min(res, calc(a));
    }
    if (n > 2) {
        a.push_back(a[0]);
        a.erase(a.begin());
        res = min(res, calc(a));
    }
    if (n > 3) {
        a.push_back(a[0]);
        a.erase(a.begin());
        res = min(res, calc(a));
    }
    cout << res << endl;
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
