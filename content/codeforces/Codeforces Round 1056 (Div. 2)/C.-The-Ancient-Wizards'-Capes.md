---
title: "C. The Ancient Wizards' Capes"
type: docs
---

## Problem Statement

There are $n$ wizards in a row, numbered 1 to $n$ from left to right. Each wizard has an invisibility cape that can be worn on either their left or right side.

Harry walks from the position of wizard 1 to the position of wizard $n$ ($1 \le n \le 10^5$). At each wizard's position $i$, he records the total number of wizards he can see.

A wizard at position $j$ is visible from position $i$ if:
*   Wizard $j$ wears their cape on their left side, and $i \ge j$.
*   Wizard $j$ wears their cape on their right side, and $i \le j$.

Note that wizard $i$ is always visible from their own position, $i$.

You have deciphered Harry's old list, which is an array $a$ of $n$ elements. The $i$-th element, $a_i$ ($1 \le a_i \le n$), is the number of wizards Harry saw from position $i$.

Your task is to determine how many of all possible cape arrangements are consistent with the data in list $a$.

---

## Solution Explanation

The core of this problem lies in understanding the relationship between the number of visible wizards at adjacent positions, $a_i$ and $a_{i-1}$. This relationship will reveal the relative orientation of the capes of wizard $i-1$ and wizard $i$.

Let's denote $C_k=1$ if wizard $k$ wears their cape on the left, and $C_k=0$ if they wear it on the right.

According to the problem definition, the number of wizards visible from position $i$, $a_i$, is the sum of:
1.  Wizards $j \le i$ with capes on their left side.
2.  Wizards $j \ge i$ with capes on their right side.

This can be formulated as:
$a_i = \sum_{k=1}^{i} C_k + \sum_{k=i}^{n} (1 - C_k)$

Now, let's write the same formula for position $i-1$:
$a_{i-1} = \sum_{k=1}^{i-1} C_k + \sum_{k=i-1}^{n} (1 - C_k)$

Let's find the difference, $a_i - a_{i-1}$:
$a_i - a_{i-1} = \left(\sum_{k=1}^{i} C_k - \sum_{k=1}^{i-1} C_k\right) + \left(\sum_{k=i}^{n} (1 - C_k) - \sum_{k=i-1}^{n} (1 - C_k)\right)$

The first part simplifies to $C_i$. The second part simplifies to $-(1 - C_{i-1})$.
So, the relationship is:
$a_i - a_{i-1} = C_i - (1 - C_{i-1}) = C_i + C_{i-1} - 1$

Rearranging this gives us:
$C_i + C_{i-1} = a_i - a_{i-1} + 1$

This equation tells us that the sum of the cape orientations for two adjacent wizards ($i-1$ and $i$) is determined by the difference in their visibility counts ($a_i - a_{i-1}$). Let's analyze the possible cases for the difference $a_i - a_{i-1}$:

1.  **$a_i - a_{i-1} = 1$**:
    $C_i + C_{i-1} = 1 + 1 = 2$. Since $C_k$ can only be 0 or 1, this means $C_i=1$ and $C_{i-1}=1$. Both wizards wear their capes on the **left**.
2.  **$a_i - a_{i-1} = -1$**:
    $C_i + C_{i-1} = -1 + 1 = 0$. This means $C_i=0$ and $C_{i-1}=0$. Both wizards wear their capes on the **right**.
3.  **$a_i - a_{i-1} = 0$**:
    $C_i + C_{i-1} = 0 + 1 = 1$. This means one wizard has a left cape (1) and the other has a right cape (0). Their capes are in **opposite** directions.

This observation is key: the relative orientation of cape $i$ to cape $i-1$ is uniquely determined. If we know the orientation of the first wizard's cape, we can determine the orientation for all subsequent wizards one by one.

This leaves only two possible valid arrangements for the entire row of wizards:
-   One arrangement starting with wizard 1's cape on the left.
-   One arrangement starting with wizard 1's cape on the right.

Our algorithm is as follows:
1.  **Test the first possibility:** Assume wizard 1 has a left cape.
2.  Iterate from $i=2$ to $n$, using the relationship derived above to determine the cape orientation for wizard $i$ based on $a_i$, $a_{i-1}$, and the now-known orientation of wizard $i-1$.
3.  After determining the full arrangement, we must verify it. Calculate the visibility array `vis` from scratch based on this arrangement and check if `vis[i] == a[i]` for all $i$.
4.  If the arrangement is valid, we count it as one solution.
5.  **Test the second possibility:** Repeat the process, this time assuming wizard 1 has a right cape.
6.  If this second arrangement is valid, we add it to our count.
7.  The final answer is the total count, which can be 0, 1, or 2.

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
    vector<bool> a_side(n, false);  // false; visibile from left
    for (int i = 1; i < n; i++) {
        if (a[i] == a[i - 1]) {
            a_side[i] = !a_side[i - 1];
        } else {
            a_side[i] = a_side[i - 1];
        }
    }
    auto func_verify = [&](vector<int> &a, vector<bool> &a_side) -> bool {
        int vis_t = 0;
        vector<int> vis(n, 0);
        for (int i = 0; i < n; i++) {
            vis[i] += vis_t;
            vis_t += a_side[i] == false ? 1 : 0;
        }
        vis_t = 0;
        for (int i = n - 1; i >= 0; i--) {
            vis[i] += vis_t;
            vis_t += a_side[i] == true ? 1 : 0;
        }
        // if vis == a, return true
        for (int i = 0; i < n; i++) {
            if (vis[i]+1 != a[i]) {
                return false;
            }
        }
        return true;
    };
    int ans = func_verify(a, a_side) ? 1 : 0;
    a_side[0] = true;

    for (int i = 1; i < n; i++) {
        if (a[i] == a[i - 1]) {
            a_side[i] = !a_side[i - 1];
        } else {
            a_side[i] = a_side[i - 1];
        }
    }
    ans += func_verify(a, a_side) ? 1 : 0;
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