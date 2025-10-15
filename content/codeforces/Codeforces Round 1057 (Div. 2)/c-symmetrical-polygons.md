---
title: "C. Symmetrical Polygons"
math: true
---

## Problem Statement

You are given $n$ sticks, where the $i$-th stick has a length of $a_i$. You want to choose a non-empty subset of these sticks and use them as the sides of a polygon. Each selected stick must be used entirely as a single side of the polygon. It is not allowed for two or more sticks to be joined end-to-end in parallel to form a longer side.

Your goal is to form a polygon that is **symmetrical**, **strictly convex**, and **non-degenerate**:

- **Symmetrical**: there exists a line of symmetry such that when the polygon is folded along this line, the two halves coincide exactly.
- **Strictly convex**: all its internal angles are strictly less than $180^\circ$.
- **Non-degenerate**: no two consecutive sides coincide at least partially, no side has zero length, and no angle equals $180^\circ$.

Among all such polygons that you can form with the sticks, find the maximum possible perimeter. If no valid polygon exists, output 0.

## Solution Explanation

A symmetrical polygon can be constructed by having pairs of equal-length sides forming the "left" and "right" halves, reflected across a line of symmetry. This line of symmetry can either pass through two vertices or be defined by two parallel sides.

Let's consider the structure of such a polygon. The sides can be categorized into two groups:
1.  **Paired sides**: These are sticks that come in pairs of equal length. They will form the symmetrical "left" and "right" parts of the polygon.
2.  **Symmetry-axis sides**: These are sticks that lie on the axis of symmetry. A symmetrical polygon can have at most two such sides, which must be parallel to each other. One can be thought of as the "top" base and the other as the "bottom" base. It's also possible to have zero or one such side.

The core idea is to maximize the perimeter. To do this, we should use as many sticks as possible.

First, we can identify all pairs of sticks with the same length. These pairs will form the bulk of our polygon's perimeter. Let's say the sum of the lengths of one stick from each pair is `sum_pairs`. The total perimeter contribution from these paired sticks will be `2 * sum_pairs`.

The remaining sticks are all of unique lengths. These are candidates for the "top" and "bottom" bases that lie on the symmetry axis. Let these unique-length sticks be sorted in descending order. To maximize the perimeter, we should pick the two longest unique sticks to be our bases. Let their lengths be $b_1$ and $b_2$ (with $b_1 \ge b_2$).

For a valid, strictly convex polygon to be formed, a variation of the polygon inequality theorem must hold. The sum of the lengths of the paired sides must be greater than the "gap" they need to bridge between the two bases. If the bases are parallel, the sum of the lengths of the sides on one half of the symmetrical polygon must be greater than half the difference between the bases. That is, `sum_pairs > (b1 - b2) / 2`, which simplifies to `2 * sum_pairs > b1 - b2`.

So, the overall algorithm is:
1.  Count the occurrences of each stick length.
2.  For any stick length that appears two or more times, we can form pairs. Add the length of each pair to a running sum, `ans`. For example, if we have three sticks of length 5, we use two for a pair (contributing $2 \times 5$ to the perimeter) and the third one becomes a candidate for a base.
3.  The sticks that were not used in pairs (the leftovers) are our candidates for the top and bottom bases.
4.  Sort these candidate base sticks in descending order.
5.  Iterate through the sorted base candidates. For each adjacent pair of candidates $(b_i, b_{i+1})$, check if they can form a valid polygon with our paired sides. The condition is `2 * ans > b_i - b_{i+1}`.
6.  The total perimeter would be `2 * ans + b_i + b_{i+1}`. We want to find the maximum possible perimeter, so we take the first pair of bases $(b_i, b_{i+1})$ that satisfies the condition. Since the bases are sorted in descending order, the first valid pair will yield the maximum perimeter.
7.  We can also have just one base, or even zero. We can model this by adding two "dummy" bases of length 0 to our list of candidates. This covers the cases where the polygon closes at a vertex on the symmetry axis.

If no combination of bases satisfies the inequality, or if we cannot form any pairs and have fewer than three unique sticks to form a basic polygon, then no such symmetrical polygon is possible, and the answer is 0.

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
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    sort(a.begin(), a.end());
    int ans = 0;
    vector<int> b;
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        if (i < n - 1 && a[i] == a[i + 1]) {
            ans += a[i];
            i++;
            cnt += 2;
        } else {
            b.push_back(a[i]);
        }
    }
    // reverse sort the item in B
    sort(b.begin(), b.end(), greater<int>());
    // add 0 at the end of b
    b.push_back(0);
    b.push_back(0);
    for (int i = 0; i < b.size() - 1; i++) {
        if (b[i] == 0 && b[i+1] == 0 && cnt < 4){
            cout << 0 << endl;
            return ;
        }
        if ((b[i] - b[i + 1]) < ans * 2)  {
            cout << b[i] + b[i + 1] + 2 * ans << endl;
            return;
        }
    }
    cout << 0 << endl;
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