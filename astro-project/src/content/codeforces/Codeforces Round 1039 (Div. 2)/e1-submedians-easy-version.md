---
title: E1. Submedians (Easy Version)
type: docs
math: true
---

[View on Codeforces](https://codeforces.com/contest/2128/problem/E1)

## Problem Statement

This is the easy version of the problem. The only difference is that in this version, you are asked to find a subarray only for the **maximum submedian**.

You can make hacks only if both versions of the problem are solved.

### Definition

An integer $v$ is a **median** of an array $b$ of length $m$ if and only if:

- $v$ is greater than or equal to at least $\lceil \frac{m}{2} \rceil$ elements of the array, and
- $v$ is less than or equal to at least $\lceil \frac{m}{2} \rceil$ elements of the array.

#### Examples

- The only median of $[9, 3, 7]$ is $7$.
- The medians of $[5, 3, 7, 9]$ are $5$, $6$, and $7$.
- The only median of $[2, 2, 2]$ is $2$.

### Task

You're given an integer $k$ and an array $a_1, \ldots, a_n$ of integers between $1$ and $n$.

An integer $v$ from $1$ to $n$ is said to be a **submedian** if there exists at least one pair of indices $(l, r)$ such that:

- $1 \leq l \leq r \leq n$
- $r - l + 1 \geq k$
- $v$ is a median of the subarray $[a_l, \ldots, a_r]$

It can be proven that there always exists at least one submedian. Find the **maximum submedian** $v_{max}$ and any corresponding pair of indices $(l, r)$.


### Input

Each test contains multiple test cases.
The first line contains the number of test cases $t$ ($1 \leq t \leq 50\,000$).
The description of the test cases follows.

- The first line of each test case contains two integers $n$ and $k$ ($1 \leq k \leq n \leq 300\,000$).
- The second line of each test case contains $n$ integers $a_1, a_2, \ldots, a_n$ ($1 \leq a_i \leq n$).

It is guaranteed that the sum of $n$ over all test cases doesn't exceed $300\,000$.


### Output

For each test case, output three integers $v_{max}$, $l$, and $r$ — the maximum submedian $v_{max}$ and the bounds of a subarray of length at least $k$ ($r - l + 1 \geq k$) such that $v_{max}$ is one of its medians.

If there are many solutions, you can print any of them.

## Solution

The problem asks for the maximum submedian `v_max`. This structure suggests that we can binary search on the answer. We need to find a monotonic predicate `check(x)` to guide the binary search.

Let's define `check(x)` as: "Does there exist a subarray `a[l...r]` with length `m = r-l+1 >= k` such that the number of elements greater than or equal to `x` is at least the number of elements less than `x`?".

The binary search will find the largest integer `v_ans` for which `check(v_ans)` is true. We will prove that this `v_ans` is the maximum submedian.

### The `check(x)` Function

To implement `check(x)` efficiently, we transform the array `a` into a helper array `b`:
- `b[i] = 1` if `a[i] >= x`
- `b[i] = -1` if `a[i] < x`

The condition "count of elements `>= x` >= count of elements `< x`" in a subarray `a[l...r]` is equivalent to the sum of corresponding elements in `b` being non-negative: `sum(b[l...r]) >= 0`.

We can find if such a subarray exists in $O(n)$ time using prefix sums. Let `P` be the prefix sum array of `b` (`P[i] = sum(b[1...i])`). We need to find `l, r` with `r-l+1 >= k` such that `P[r] - P[l-1] >= 0`, or `P[r] >= P[l-1]`.

For each `r` from `k` to `n`, we check if `P[r] >= min(P[0], P[1], ..., P[r-k])`. This check can be done by iterating `r` from `k` to `n` while maintaining the minimum prefix sum in the required window.

### Proof of Correctness

Let `v_ans` be the value returned by our binary search. We need to prove `v_ans` is the true maximum submedian, `v_max`.

1.  **`v_max <= v_ans`**: Let `v_max` be the true maximum submedian. By definition, there is a subarray `A'` of length `m` for which `v_max` is a median. For `v_max` to be a median of `A'`, the count of elements `>= v_max` must be at least $\lceil m/2 \rceil$. This implies the count of elements `>= v_max` is at least the count of elements `< v_max`. Therefore, `check(v_max)` is true. Since our binary search finds the largest value `v_ans` for which `check` is true, we must have `v_ans >= v_max`.

2.  **`v_ans <= v_max`**: This requires showing that `v_ans` is a submedian. By the definition of our binary search, `check(v_ans)` is true and `check(v_ans + 1)` is false.
    Since `check(v_ans)` is true, there exists a subarray `A'` of length `m` where:
    - `p = count(a_i >= v_ans)`
    - `q = count(a_i < v_ans)`
    - `p >= q`

    We need to show that `v_ans` is a median of this subarray `A'`. The median definition requires two conditions:
    a) `count(a_i >= v_ans) >= \lceil m/2 \rceil`: This is `p >= \lceil m/2 \rceil`. Since `p >= q` and `p+q=m`, this is always true.
    b) `count(a_i <= v_ans) >= \lceil m/2 \rceil`: This is what we need to prove. Let `p_eq` be the count of elements equal to `v_ans`. The condition is `q + p_eq >= \lceil m/2 \rceil`.

    Let's use the fact that `check(v_ans + 1)` is false. For our specific subarray `A'`, this means the count of elements `>= v_ans + 1` is less than the count of elements `< v_ans + 1`.
    - `count(a_i >= v_ans + 1)` is `p - p_eq`.
    - `count(a_i < v_ans + 1)` is `q + p_eq`.
    - So, we have the inequality: `p - p_eq < q + p_eq`, which simplifies to `p < q + 2*p_eq`.

    Assume for contradiction that our condition (b) is false: `q + p_eq < \lceil m/2 \rceil`.
    This means `q + p_eq <= \lceil m/2 \rceil - 1`.
    Since `m = p+q`, we have `p = m-q`. Substitute this into the inequality from `check(v_ans+1)`:
    `m - q < q + 2*p_eq \implies m < 2q + 2*p_eq \implies m/2 < q + p_eq`.
    Combining our assumption and this result, we get:
    `m/2 < q + p_eq \le \lceil m/2 \rceil - 1`.
    This inequality can never be true for any integer `m`. For example, if `m=2k`, it becomes `k < q+p_eq \le k-1`, a contradiction. If `m=2k+1`, it becomes `k+0.5 < q+p_eq \le k`, also a contradiction.
    Therefore, our assumption must be false. Condition (b) `q + p_eq >= \lceil m/2 \rceil` must be true.

    Since both median conditions hold for `v_ans` in subarray `A'`, `v_ans` is a submedian. This implies `v_ans <= v_max`.

Combining both parts, we have `v_ans = v_max`. The algorithm is correct.

### Code

{{% details title="View Code" closed="true" %}}
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Check if there exists a subarray of length >= k with median >= x
bool check(int x, int n, int k, const vector<int>& a, pair<int, int>& range) {
    // Transform array: 1 if a[i] >= x, -1 otherwise
    // We want sum >= 0
    vector<int> b(n);
    for (int i = 0; i < n; ++i) {
        b[i] = (a[i] >= x ? 1 : -1);
    }

    // Prefix sums
    vector<int> p(n + 1, 0);
    for (int i = 0; i < n; ++i) {
        p[i + 1] = p[i] + b[i];
    }

    // Iterate r from k to n. We need min P[l-1] for 1 <= l <= r - k + 1
    // i.e., min P[j] for 0 <= j <= r - k
    int min_prev = p[0];
    int min_idx = 0;

    for (int r = k; r <= n; ++r) {
        int allowable_l_minus_1_idx = r - k;
        if (p[allowable_l_minus_1_idx] < min_prev) {
            min_prev = p[allowable_l_minus_1_idx];
            min_idx = allowable_l_minus_1_idx;
        }

        if (p[r] >= min_prev) {
            range = {min_idx + 1, r}; // 1-based indices
            return true;
        }
    }

    return false;
}

void solve() {
    int n, k;
    if (!(cin >> n >> k)) return;
    vector<int> a(n);
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
    }

    int low = 1, high = n;
    int ans = 1;
    pair<int, int> ans_range = {1, k};

    while (low <= high) {
        int mid = low + (high - low) / 2;
        pair<int, int> range;
        if (check(mid, n, k, a, range)) {
            ans = mid;
            ans_range = range;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    cout << ans << " " << ans_range.first << " " << ans_range.second << "\n";
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t;
    if (cin >> t) {
        while (t--) {
            solve();
        }
    }
    return 0;
}
```
{{% /details %}}

[submission](https://codeforces.com/contest/2128/submission/337179469)
