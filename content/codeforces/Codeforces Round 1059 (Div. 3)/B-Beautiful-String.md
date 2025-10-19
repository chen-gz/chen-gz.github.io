---
title: "B. Beautiful String"
type: docs
math: true
---

## Problem Statement

You are given a binary∗
 string $s$
 of length $n$
.

Your task is to find any subsequence†
 $p$
 of $s$
 such that:

The subsequence $p$
 is non-decreasing. That is, each character in $p$
 is not greater than the next one.
Let $x$
 denote the string obtained by removing all characters of $p$
 from $s$
, while preserving the order of the remaining characters. Then $x$
 must be a palindrome‡
.

You only need to output any valid subsequence $p$
 that satisfies both conditions. If no such subsequence exists, output $-1$
.

Note that an empty string is both non-decreasing and a palindrome.

---

## Solution Explanation

The problem asks us to find a non-decreasing subsequence `p` from a binary string `s`, such that the remaining characters in `s` form a palindrome.

Let's analyze the conditions. The subsequence `p` must be non-decreasing. Since `s` is a binary string, a non-decreasing subsequence can only be composed of '0's, '1's, or '0's followed by '1's.

Consider two simple cases for our subsequence `p`:
1.  **`p` consists of all '0's from `s`.** The remaining string `x` will consist only of '1's. A string of all identical characters is always a palindrome.
2.  **`p` consists of all '1's from `s`.** The remaining string `x` will consist only of '0's. Similarly, this is always a palindrome.

In both of these cases, the subsequence `p` is non-decreasing (it's composed of a single character type), and the remaining string `x` is a palindrome. Therefore, we can always find a valid solution by choosing either all '0's or all '1's as our subsequence `p`.

The problem statement asks for *any* valid subsequence. The provided code chooses to form the subsequence `p` by taking all the '1's from the original string `s`. The code iterates through the string, and if it finds a '1', it adds its 1-based index to an answer vector. Finally, it prints the size of the vector (the number of '1's) and the indices themselves.

This approach is guaranteed to work because:
-   The subsequence `p` will be "11...1", which is non-decreasing.
-   The remaining string `x` will be "00...0", which is a palindrome.

Thus, this simple strategy always yields a correct answer.

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
    string s;
    cin >> s;
    vector<int> ans;
    for (int i = 0; i < n; i++) {
        if(s[i] == '1') {
            ans.push_back(i + 1);
        }
    }
    cout << ans.size() << endl;
    for (int i = 0; i < ans.size(); i++) {
        cout << ans[i] << " ";
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
