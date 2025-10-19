---
title: "D. Beautiful Permutation"
---

This is an interactive problem.

There is a permutation∗ $p$ of length $n$.

Someone secretly chose two integers $l,r$ ($1 \le l \le r \le n$) and modified the permutation in the following way:

For every index $i$ such that $l \le i \le r$, set $p_i := p_i+1$.
Let $a$ denote the resulting array obtained by modifying the permutation.

You are given an integer $n$ denoting the length of the permutation $p$.

In one query, you are allowed to choose two integers $l,r$ ($1 \le l \le r \le n$) and ask for the sum of the subarray either of the original permutation $p[l \dots r]$ or of the modified array $a[l \dots r]$. The answer to such a query will be the corresponding integer sum.

Your task is to find the pair ($l,r$) that was chosen to obtain $a$ in no more than 40 queries.

## Solution

The core idea is to use binary search to find the boundaries of the modified segment $[l, r]$.

First, we can determine the length of the modified segment, which is $r - l + 1$. We can do this with two queries:
1.  Query the sum of the original permutation over the entire range $[1, n]$.
2.  Query the sum of the modified array over the entire range $[1, n]$.

The difference between these two sums will be exactly the length of the modified segment, because each element in the range $[l, r]$ was incremented by 1. Let's call this length `mod_len`.

Once we have `mod_len`, we need to find the left boundary, $l$. We can do this using binary search on the range $[1, n]$. For a given `mid`, we query the sum of the original and modified arrays in the range $[1, mid]$.

Let `diff = query(2, 1, mid) - query(1, 1, mid)`.
*   If `diff` is 0, it means the modified segment has not started yet, so the left boundary $l$ must be to the right of `mid`. We update our search range to `[mid + 1, high]`.
*   If `diff` is greater than 0, it means the modified segment has started at or before `mid`. So, `mid` is a potential candidate for $l$, and we should search for a smaller $l$ in the range `[low, mid - 1]`.

By repeatedly narrowing down the search space, we can find the smallest `mid` for which the difference is non-zero. This `mid` will be our left boundary, $l$.

Finally, the right boundary $r$ can be calculated as $l + mod_len - 1$.

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
int query(int type, int l, int r) {
    cout << type << " " << l << " " << r << endl;
    cout.flush();
    int ans;
    cin >> ans;
    return ans;
}
void solve() {
    int n;
    cin >> n;
    // Query the whole range to find the length of the modified segment.
    int ori = query(1, 1, n);
    int mod = query(2, 1, n);
    int mod_len = mod - ori;

    // Binary search to find the left boundary 'l'.
    int low = 1, high = n;
    int final_l = n + 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        int current_ori = query(1, 1, mid);
        int current_mod = query(2, 1, mid);
        int diff = current_mod - current_ori;

        if (diff == 0) {
            low = mid + 1;
        } else {
            final_l = mid;
            high = mid - 1;
        }
    }
    cout << "! " << final_l << " " << final_l + mod_len - 1 << endl;
    cout.flush();
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
