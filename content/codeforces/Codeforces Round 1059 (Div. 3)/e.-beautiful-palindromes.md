---
title: "E. Beautiful Palindromes"
math: true
---

## Problem Statement

We call an array $[b_1, b_2, \dots, b_m]$ of length $m$ **palindromic** if the following condition holds:

$b_i = b_{m-i+1}$ for all $1 \le i \le m$.

In other words, an array is palindromic if it reads the same forward and backward.

You are given an array $[a_1, a_2, \dots, a_n]$ of $n$ integers where $1 \le a_i \le n$ and an integer $k$.

You are required to perform the following operation exactly $k$ times:

1. Choose an integer $x$ such that $1 \le x \le n$.
2. Append $x$ to the end of the array $a$.

Your goal is to perform these $k$ operations in such a way that the number of palindromic subarrays in the resulting array is minimized.

Output the $k$ integers you chose for each operation, in the order they were appended.

A subarray is a contiguous part of an array.

## Solution

The core idea is to greedily append integers in a way that avoids creating new palindromic subarrays, especially short ones of length 2 or 3. The strategy depends on whether the initial array `a` contains all integers from 1 to `n`.

First, we check if there is any integer in the range $[1, n]$ that is missing from the initial array `a`. We can do this by inserting all elements of `a` into a set and then checking for the existence of each integer from 1 to `n`.

### Case 1: An integer is missing

Let's say we find an integer `mex` (Minimum Excluded value) that is not in the array `a`. This `mex` is a powerful tool to prevent palindrome formation. Since `mex` does not appear in the original array, any new palindrome must be a subarray composed entirely of the newly appended elements.

To minimize palindromes, we can adopt a strategy where we never place two identical numbers next to each other, or separated by one other number. The algorithm is as follows:
1. For the first operation, we append `mex`.
2. For each subsequent operation, we choose an integer to append that is different from the last two elements of the array. This prevents the creation of new palindromes of length 2 (like `[x, x]`) and length 3 (like `[y, x, y]`). The code iterates from 1 to `n` to find the first valid integer that satisfies this condition.

This greedy approach effectively minimizes the creation of new, short palindromic subarrays.

### Case 2: The array is a permutation of `[1, ..., n]`

If the initial array `a` contains all integers from 1 to `n`, it means `a` is a permutation. In this scenario, we cannot use a "safe" missing number. Any number we append is already present in the array.

A robust strategy to minimize new palindromes is to append numbers in a repeating, non-palindromic sequence. Since the original array `a` is a permutation (containing distinct numbers), it provides a good base for such a sequence.

The corrected strategy is to cyclically append the elements of the array `a`. For the `i`-th operation (where `i` goes from `0` to `k-1`), we append the element `a[i % n]`.

This approach ensures that we are not introducing easily formed palindromes. For example, since all elements in `a` are distinct, this strategy avoids creating any palindromes of length 2 (like `[x, x]`) within the appended sequence itself, unless `n=1`. It also makes it much harder to form longer palindromes that span across the original and appended parts of the array.

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
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    set<int> s(a.begin(), a.end());
    int not_found = -1;
    for (int i = 1; i <= n; i++) {
        if (s.find(i) == s.end()) {
            not_found = i;
            break;
        }
    }
    if (not_found == -1) {
        // If the array is a permutation, append the elements cyclically.
        for (int i = 0; i < k; i++) {
            cout << a[i % n] << " ";
        }
        cout << endl;
        return;
    }
    // if found,
    int pre = a[n-1];
    int cur = not_found;
    cout << cur << " ";
    k --;
    while(k) {
        // try to make next different than cur and pre and within 1 -> n;
        int next = pre;
        for (int i = 1; i <= n; i++) {
            if (i != cur && i != pre) {
                next = i;
                break;
            }
        }
        pre = cur;
        cur = next;
        cout << cur << " ";
        k--;
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
