---
title: "E. Hidden Knowledge of the Ancients"
---

## Problem Statement

In the world of Deepwoken, there exists an ancient artifact — the Tablet of Infinite Knowledge, on which a sequence of $n$ mysterious symbols (each symbol is an integer) is engraved.

It is said that the true power of the artifact can only be revealed by finding all sacred fragments — continuous segments of the tablet that meet two conditions:
1.  They contain exactly $k$ distinct numbers.
2.  Their length is between $l$ and $r$ (inclusive).

Formally, given a sequence $a$ of length $n$ and integers $k$, $l$, and $r$, you need to find the number of pairs of indices $(b, c)$ such that:
- $1 \le b \le c \le n$
- The subarray $a[b..c]$ contains exactly $k$ distinct numbers.
- $l \le c - b + 1 \le r$

## Solution Explanation

The provided solution uses a sliding window approach with three pointers: `beg`, `end1`, and `end2`. The main idea is to iterate through all possible starting positions (`beg`) of a subarray and, for each start, find the range of valid end positions.

The algorithm works as follows:

1.  **Outer Loop**: The `beg` pointer iterates from the start to the end of the array, fixing the left boundary of our potential subarrays.

2.  **Finding the Leftmost Valid End (`end1`)**: For a fixed `beg`, we need to find the smallest index `end1` such that the subarray `a[beg...end1]` contains **exactly `k`** distinct elements.
    - A `while` loop expands the window by incrementing `end1`, using a frequency map (`cnt`) to track the number of distinct elements (`distinct1`).
    - The loop stops as soon as `distinct1` reaches `k`. At this point, `end1` is the earliest possible valid endpoint for the current `beg`.

3.  **Finding the Rightmost Valid End (`end2`)**: Next, we find the largest index `end2` such that the subarray `a[beg...end2]` contains **at most `k`** distinct elements.
    - A second `while` loop expands another window by incrementing `end2`, using a separate frequency map (`cnt2`) and distinct count (`distinct2`).
    - This loop continues as long as adding the next element does not push the distinct count *over* `k`. It stops when the subarray `a[beg...end2]` has `k` distinct elements, and adding `a[end2 + 1]` would make it `k + 1`.

4.  **Counting Valid Subarrays**:
    - We now have a range of potential endpoints `[end1, end2]`. Any endpoint `c` in this range will form a subarray `a[beg...c]` with exactly `k` distinct elements.
    - We must also satisfy the length constraints `l` and `r`. The valid range of endpoints is therefore adjusted:
        - The start of the valid range is `max(end1, beg + l - 1)`.
        - The end of the valid range is `min(end2, beg + r - 1)`.
    - The number of valid subarrays for the current `beg` is the length of this adjusted range, which is added to the total `ans`.

5.  **Sliding the Window**: Before moving to the next `beg`, the element `a[beg]` is removed from both frequency maps (`cnt` and `cnt2`), and the distinct counts are updated accordingly. This prepares the windows for the next iteration.

This process is repeated for all possible `beg` positions to find the total count.

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
    int n, k, l, r;
    cin >> n >> k >> l >> r;
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    map<int, int> cnt, cnt2;
    int beg = 0, end1 = -1, end2 = -1;
    // move end to l-1 make the the length of the window is l
    int distinct1 = 0, distinct2 = 0;
    int ans = 0;
    for(int beg = 0; beg < n; beg++) {
        // move end1 to exactly k distinct elements
        while (distinct1 < k && end1 + 1 < n){
            end1++;
            if(cnt[a[end1]] == 0) distinct1++;
            cnt[a[end1]]++;
        }
        if (distinct1 < k) break;
        // move end2 to at most k distinct elements
        while (distinct2 <= k && end2 + 1 < n) {
            // if (end2 < end1) {
            //     end2 = end1;
            //     distinct2 = distinct1;
            //     cnt2 = cnt;
            // }
            // if (end2 + 1 >= n) break;
            if (cnt2[a[end2 + 1]] == 0 && distinct2 < k) distinct2++;
            else if (cnt2[a[end2 + 1]] == 0 && distinct2 == k) break;
            end2++;
            cnt2[a[end2]]++;
        }
        int valid_end1 = end1, valid_end2 = end2;
        valid_end1 = max(valid_end1, beg + l - 1);
        valid_end2 = min(valid_end2, beg + r - 1);
        ans += max(0LL, valid_end2 - valid_end1 + 1);
        // remove beg from the window
        cnt[a[beg]]--;
        if (cnt[a[beg]] == 0) distinct1--;
        cnt2[a[beg]]--;
        if (cnt2[a[beg]] == 0) distinct2--;
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

[Submission Link](https://codeforces.com/contest/2149/submission/341949992)