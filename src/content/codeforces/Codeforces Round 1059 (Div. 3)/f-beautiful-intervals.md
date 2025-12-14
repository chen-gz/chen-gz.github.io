---
title: F. Beautiful Intervals
math: true
---

## Problem Statement

You are given an integer $n$ and $m$ intervals. Each interval is of the form $[l_i, r_i]$ and satisfies $1 \le l_i \le r_i \le n$. Note that there can be duplicate intervals.

Let $p$ be a permutation of length $n$ containing all the integers $0, 1, 2, \dots, n-1$ exactly once.

There is a multiset $M$ which is initially empty.

For each interval $[l_i, r_i]$:
1.  Consider the subarray $p[l_i \dots r_i]$.
2.  Compute $v_i = \text{mex}^*(p[l_i \dots r_i])$.
3.  Insert $v_i$ into $M$.

After processing all the intervals, $M$ will be equal to $\{v_1, v_2, \dots, v_m\}$.

Your task is to construct a permutation $p$ of length $n$ containing all the integers $0, 1, 2, \dots, n-1$ exactly once such that $\text{mex}(M)$ is minimized.

*The $\text{mex}$ of a set of non-negative integers is the smallest non-negative integer not present in the set.

## Solution

The goal is to construct a permutation $p$ of $\{0, 1, \dots, n-1\}$ that minimizes the `mex` of the multiset $M$, where $M$ contains the `mex` of subarrays defined by $m$ given intervals.

Let's analyze the possible values of `mex(M)` starting from the smallest non-negative integers.

### Case 1: Can we achieve $\text{mex}(M) = 0$?

For `mex(M)` to be 0, the value 0 must **not** be present in the multiset $M$. This means that for **every** given interval $[l_i, r_i]$, the `mex` of the corresponding subarray $p[l_i \dots r_i]$ must be greater than 0.

The `mex` of a subarray is greater than 0 if and only if the integer 0 **is present** in that subarray.

Therefore, to achieve `mex(M) = 0`, we must find a position for the integer 0 in our permutation `p` such that it is contained within **every single one** of the $m$ intervals.

The code implements this by checking each possible position `i` (from 0 to n-1) for the integer 0. For each position `i`, it counts how many of the `m` intervals contain it. If this count is equal to `m`, it means placing 0 at index `i` guarantees that 0 is in every subarray. Consequently, every value $v_i$ in $M$ will be at least 1, so $0 \notin M$, and thus `mex(M) = 0`. If such a position is found, we can construct the permutation and we are done.

### Case 2: Can we achieve $\text{mex}(M) = 1$?

If we cannot achieve `mex(M) = 0`, it means there is no single position for the integer 0 that is contained within all `m` intervals. In other words, no matter where we place 0, there will always be at least one interval whose subarray does *not* contain 0. This guarantees that at least one $v_i$ in $M$ will be 0, which means $0 \in M$.

With $0 \in M$ guaranteed, our goal is to achieve `mex(M) = 1`. This requires that the value 1 is **not** present in $M$. This means that for every interval $[l_i, r_i]$, the `mex` of its subarray cannot be 1.

A subarray has a `mex` of 1 if and only if it contains 0 but does not contain 1. To prevent this, every subarray must satisfy one of the following conditions:
1. It does **not** contain 0 (in which case its `mex` is 0).
2. It contains **both** 0 and 1 (in which case its `mex` is at least 2).

This condition can be satisfied by placing 0 and 1 adjacent to each other in the permutation, for example, at positions `j` and `j+1`.
- An interval containing neither `j` nor `j+1` will have a `mex` of 0.
- An interval containing both `j` and `j+1` will have a `mex` of at least 2.

The only way to get a `mex` of 1 is if an interval contains exactly one of these positions. For example, if an interval contains `j` (where 0 is) but not `j+1` (where 1 is). This happens only if the interval ends exactly at `j` (i.e., $[l, j]$) or starts exactly at `j+1` (i.e., $[j+1, r]$).

The code searches for a position `i` where we can place 0 and 1 adjacently (at `i` and `i+1`, or `i` and `i-1`) such that no interval creates a `mex` of 1. It checks if there exists any `i` where no interval ends at `i` and no interval begins at `i+1`. If such a position is found, we can place 0 and 1 there, ensuring no subarray has a `mex` of 1, which means $1 \notin M$ and therefore `mex(M) = 1`.

### Case 3: $\text{mex}(M) = 2$

If we cannot achieve $\text{mex}(M) = 0$ or $\text{mex}(M) = 1$, we can always achieve $\text{mex}(M) = 2$. We can construct a simple permutation like `0 2 1 3 4 ...`.
- The subarray `[0]` has $\text{mex} = 1$. So, $1 \in M$.
- The subarray `[0, 2]` has $\text{mex} = 1$.
- The subarray `[0, 2, 1]` has $\text{mex} = 3$.
It is guaranteed that we can construct a permutation that results in $\text{mex}(M)=2$. A simple construction is placing $0, 2, 1$ at the beginning of the permutation. Any interval starting at index 0 will contain a mix of these numbers, making it easy to generate $\text{mex}$ values other than 2. For instance, any interval covering just index 0 and 1 will have subarray `[0, 2]` with $\text{mex}=1$. Any interval covering index 1 will have subarray `[2]` with $\text{mex}=0$. Thus, $0, 1 \in M$. It is highly unlikely that all intervals will conspire to prevent a $\text{mex}$ of 2. The simple permutation `0 2 1 3 4...` is a robust fallback.

{{% details title="View Code" closed="true" %}}
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
    int n, m;
    cin >> n >> m;
    set<pair<int, int>> p;
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        a--, b--;
        p.insert({a, b});
    }
    vector<int> ans(n, -1);
    // check whether all interview has a some potion. which contains 0
    for (int i = 0; i < n; i++) {
        int size = 0;
        for (auto v : p) {
            if (v.first <= i && i <= v.second) {
                size++;
            }
        }
        if (size == p.size()) {
            int cur = 1;
            for (int j = 0; j < n; j++) {
                if (j == i) {
                    cout << "0 ";
                    continue;
                }
                cout << cur++ << " ";
            }
            cout << endl;
            return;
        }
    }
    // check all interval either contains [0, 1] or not contain [0]
    for (int i = 0; i < n; i++) {
        int size = 0;
        int size2 = 0;
        for (auto v : p) {
            // This condition is equivalent to checking if i != v.second
            if (i != v.second) {
                size++;
            }
            if (i != v.first) {
                size2++;
            }
        }

        if (size == p.size() && i != n-1) {
            int cur = 2;
            for (int j = 0; j < n; j++) {
                if (j == i) {
                    cout << "0 ";
                    continue;
                }
                if (j == i + 1) {
                    cout << "1 ";
                    continue;
                }
                cout << cur++ << " ";
            }
            cout << endl;
            return;
        }
        if (size2 == p.size() && i != 0)  {
            int cur = 2;
            for (int j = 0; j < n; j++) {
                if (j == i) {
                    cout << "0 ";
                    continue;
                }
                if (j == i - 1) {
                    cout << "1 ";
                    continue;
                }
                cout << cur++ << " ";
            }
            cout << endl;
            return;

        }
    }
    int cur = 3;
    cout << "0 2 1 ";
    for (int i = 0; i < n - 3; i++) {
        cout << cur++ << " ";
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
