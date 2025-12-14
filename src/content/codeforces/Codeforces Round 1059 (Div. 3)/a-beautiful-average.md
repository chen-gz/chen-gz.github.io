---
title: A. Beautiful Average
math: true
---

## Problem Statement

You are given an array $a$ of length $n$.

Your task is to find the maximum possible average value of any subarray* of the array $a$.

Formally, for any indices $l, r$ such that $1 \le l \le r \le n$, define the average of the subarray $a_l, a_{l+1}, \dots, a_r$ as the sum of elements divided by the number of elements or:

$$
\text{avg}(l,r) = \frac{1}{r-l+1} \sum_{i=l}^{r} a_i
$$

Output the maximum value of $\text{avg}(l,r)$ over all choices of $l, r$.

*\*A subarray is a contiguous part of an array.*

## Solution

The problem asks for the maximum average value of any subarray. Let's consider a subarray of length 1, which consists of a single element $a_i$. The average of this subarray is simply $a_i$.

Let the maximum element in the array be $M$. If we form a subarray of length 1 with this element, the average is $M$. Can we get a better average?

Consider any subarray containing the maximum element $M$. If we add any other element to this subarray, the new element will be less than or equal to $M$. Therefore, the average of the new, larger subarray will not be greater than $M$.

For example, if we have a subarray with elements $\{a_l, \dots, M, \dots, a_r\}$, the average is $\frac{\sum a_i}{r-l+1}$. If we add an element $a_{r+1} \le M$, the new average will be $\frac{\sum a_i + a_{r+1}}{r-l+2}$. It can be shown that this new average will not exceed the original average if the added element is less than or equal to the original average. Since we know the maximum element is $M$, any subarray containing $M$ and other elements will have an average at most $M$.

Therefore, the maximum possible average is achieved by a subarray of length 1, consisting of the maximum element in the array. The problem is reduced to finding the maximum value in the given array.

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
    int n;
    cin >> n;
    vector<int> a(n);
    int ans = INT32_MIN;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        ans= max(ans,a[i]);
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
