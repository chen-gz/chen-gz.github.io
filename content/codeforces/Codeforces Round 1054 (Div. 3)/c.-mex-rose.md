---
title: "C. MEX Rose"
---

## Problem Statement

You are given an array `a` of length `n` and a number `k`, where `0 <= k <= n`.

In one operation, you can choose any index `i` (where `1 <= i <= n`) and set the value of `a[i]` to any integer `x` from the range `[0, n]`.

Your task is to find the minimum number of operations required to satisfy the condition: `MEX(a) = k`.

***

*__MEX Definition:__ The MEX (Minimum Excluded) of an array is the smallest non-negative integer that does not appear in the array.*

***

## Solution Explanation

To achieve a `MEX` of `k`, two conditions must be met:
1.  All integers from `0` to `k-1` must be present in the array.
2.  The integer `k` must not be present in the array.

Let's analyze the operations needed to satisfy these conditions.

First, we count the number of elements that are missing from the range `[0, k-1]`. Let's call this `missing_count`. We will need at least `missing_count` operations to introduce these numbers into the array.

Second, we count the occurrences of the number `k` in the array. Let's call this `k_count`. All of these `k_count` elements must be changed.

We can cleverly combine these operations. The elements that are currently equal to `k` are "available" to be changed. We can change them into the numbers we need for the `[0, k-1]` range.

- We need to introduce `missing_count` numbers.
- We have `k_count` numbers that we must change anyway.

If `k_count >= missing_count`, we can use `missing_count` of the `k` elements to fill the gaps in the `[0, k-1]` range. After these `missing_count` operations, we still have `k_count - missing_count` elements equal to `k` that must be changed. So, the total operations needed is `missing_count + (k_count - missing_count) = k_count`.

If `k_count < missing_count`, we can use all `k_count` elements to fill some of the gaps. We still need to perform `missing_count - k_count` more operations to introduce the remaining missing numbers. The total operations in this case is `k_count + (missing_count - k_count) = missing_count`.

Combining both cases, the minimum number of operations is `max(missing_count, k_count)`.

The algorithm is as follows:
1.  Count the occurrences of each number in the input array.
2.  Calculate `missing_count` by iterating from `0` to `k-1` and checking if each number is present.
3.  Get `k_count` from our counts.
4.  The answer is `max(missing_count, k_count)`.

[Submission Link](https://codeforces.com/contest/2149/submission/341434376)

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

void solve() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    map<int, int> cnt;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        cnt[a[i]]++;
    }
    int ans = 0;
    for(int i=0;i<k;i++){
        if (cnt[i] == 0) {
            ans++;
        }
    }
    if (ans < cnt[k]) {
        ans += cnt[k] - ans;
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