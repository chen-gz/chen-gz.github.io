---
title: "D. A and B"
type: docs
math: true
---

## Problem Statement

Given a string $s$ of length $n$, consisting only of the characters 'a' and 'b'.

In one operation, you can choose a position $i$ ($1 \le i \le n-1$) and swap the neighboring characters $s_i$ and $s_{i+1}$.

You need to perform the minimum number of operations to ensure that all characters of one type (either 'a' or 'b') are located strictly together, forming exactly one continuous block.

Characters of the other type can be positioned either before or after this block, forming two (possibly empty) blocks.

Examples of valid final forms:
*   `'aaabbbaaa'` — all 'b's are located together (one block), 'a's can be both before and after this block.
*   `'bbbaaaaaabbb'` — all 'a's together, 'b's are at the edges of the string.
*   `'aaaaabbbb'` or `'bbbbaaaaa'` — both types of characters form one continuous block each.

You need to find the minimum number of described operations required to achieve the specified state.

## Solution Explanation

The problem asks for the minimum number of adjacent swaps to group all characters of a single type (either all 'a's or all 'b's) into one contiguous block.

First, let's understand the cost of moving characters. The number of adjacent swaps required to move a character from an initial position `p` to a target position `t` is equal to the absolute difference of the positions, `|p - t|`. Our goal is to minimize the total number of such swaps.

The problem is symmetric. We can calculate the minimum cost to group all the 'a's and the minimum cost to group all the 'b's, and then take the smaller of the two values as our final answer. Let's focus on grouping the 'a's.

Suppose there are `k` 'a's in the string at initial positions $p_1, p_2, \dots, p_k$. To form a single contiguous block, they must occupy `k` consecutive final positions. Let's say this block starts at an offset `t`, so the final positions of the 'a's will be $t, t+1, \dots, t+k-1$.

The total number of swaps required is the sum of the costs for moving each 'a' to its new position in the block:
$$ \text{Total Cost} = \sum_{i=1}^{k} |p_i - (t + i - 1)| $$

We need to find the integer `t` that minimizes this sum. We can rewrite the expression by letting $d_i = p_i - (i - 1)$:
$$ \text{Total Cost} = \sum_{i=1}^{k} |d_i - t| $$

This is a classic problem in statistics. The sum of absolute differences of a set of values $\{d_i\}$ to a point `t` is minimized when `t` is the **median** of that set.

So, the algorithm is as follows:
1.  **Isolate one character type**: Let's work with 'a'.
2.  **Collect positions**: Find the initial 0-indexed positions of all 'a's in the string. Let's say there are `k` 'a's at positions $p_1, p_2, \dots, p_k$.
3.  **Calculate relative positions**: Create a new list of values $d_i = p_i - i$ for $i = 0, \dots, k-1$.
4.  **Find the median**: Find the median of this new list of $d_i$ values. If `k` is odd, the median is the middle element after sorting. If `k` is even, any value between the two middle elements works, so we can just pick one of them (e.g., the lower one).
5.  **Calculate the cost**: The minimum cost for grouping 'a's is the sum of the absolute differences between each $d_i$ and the median.
6.  **Repeat for the other character**: Perform the same calculation for the 'b' characters.
7.  **Final Answer**: The result is the minimum of the two costs calculated.

This method correctly finds the minimum number of swaps for both cases, and the overall minimum gives us the solution.

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
    int n;
    cin >> n;
    string s;
    cin >> s;
    vector<int> pos_a;
    vector<int> pos_b;
    int cnt_a = 1, cnt_b = 1;
    for (int i = 0; i < n; i++) {
        if (s[i] == 'a') {
            pos_a.push_back(i - cnt_a);
            cnt_a++;
        } else {
            pos_b.push_back(i - cnt_b);
            cnt_b++;
        }
    }
    if (pos_a.size() == 0 || pos_b.size() == 0) {
        cout << 0 << endl;
        return;
    }
    //get median of pos_a
    int median_a = pos_a[pos_a.size() / 2];
    // sum of abs(pos_a[i] - median_a)
    int sum_a = 0;
    for (int i = 0; i < pos_a.size(); i++) {
        sum_a += abs(pos_a[i] - median_a);
    }
    //get median of pos_b
    int median_b = pos_b[pos_b.size() / 2];
    // sum of abs(pos_b[i] - median_b)
    int sum_b = 0;
    for (int i = 0; i < pos_b.size(); i++) {
        sum_b += abs(pos_b[i] - median_b);
    }
    cout << min(sum_a, sum_b) << endl;
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

[Submission Link](https://codeforces.com/contest/2149/submission/341578257)