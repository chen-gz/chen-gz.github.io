---
title: B. Beautiful String
math: true
---

## Problem Statement
You are given a binary string $s$ of length $n$.

Your task is to find any subsequence $p$ of $s$ such that:
- The subsequence $p$ is non-decreasing. That is, each character in $p$ is not greater than the next one.
- Let $x$ denote the string obtained by removing all characters of $p$ from $s$, while preserving the order of the remaining characters. Then $x$ must be a palindrome.

You only need to output any valid subsequence $p$ that satisfies both conditions. If no such subsequence exists, output -1.

Note that an empty string is both non-decreasing and a palindrome.

A binary string is a string that consists of characters '0' and '1'.
A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
A palindrome is a string that reads the same forwards and backward.

## Solution

The problem asks us to find a non-decreasing subsequence $p$ from a binary string $s$, such that the remaining string $x$ is a palindrome.

A non-decreasing subsequence of a binary string can only be composed of all '0's, all '1's, or some '0's followed by some '1's.

Let's consider the simplest cases for the subsequence $p$:
1.  **$p$ consists of all '0's in $s$.** The remaining string $x$ would consist of all '1's from $s$. A string of all '1's is always a palindrome.
2.  **$p$ consists of all '1's in $s$.** The remaining string $x$ would consist of all '0's from $s$. A string of all '0's is always a palindrome.

Both of these choices for $p$ satisfy the conditions. The subsequence of all '0's is non-decreasing, and the remaining string of all '1's is a palindrome. Similarly, the subsequence of all '1's is non-decreasing, and the remaining string of all '0's is a palindrome.

Therefore, we can simply choose to remove all '1's as our subsequence $p$. The remaining characters (all '0's) will form a palindrome. The code implements this by collecting the indices of all '1's to form the subsequence $p$. Since the problem guarantees a solution always exists, this approach is valid.

The provided code iterates through the string $s$, and if it finds a character '1', it adds its 1-based index to a vector. This vector of indices represents the subsequence $p$ consisting of all '1's. Finally, it prints the size of this subsequence and the indices themselves.

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
