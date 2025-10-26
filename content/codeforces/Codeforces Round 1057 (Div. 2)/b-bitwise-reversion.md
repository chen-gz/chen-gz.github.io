---
title: B. Bitwise Reversion
math: true
---

## Problem Statement

You are given three non-negative integers $x$, $y$ and $z$. Determine whether there exist three non-negative integers $a$, $b$ and $c$ satisfying the following three conditions:

- $a \ \& \ b = x$
- $b \ \& \ c = y$
- $a \ \& \ c = z$

where $\&$ denotes the bitwise AND operation.

## Solution Explanation

The problem requires us to find if three non-negative integers $a, b, c$ exist, given the results of their pairwise bitwise AND operations.

Let's analyze the constraints imposed by the bitwise AND operation on $a, b, c$.
- The condition $a \ \& \ b = x$ implies that for any bit position, if the bit is 1 in $x$, it must also be 1 in both $a$ and $b$.
- Similarly, $b \ \& \ c = y$ implies that any bit set in $y$ must also be set in both $b$ and $c$.
- And $a \ \& \ c = z$ implies that any bit set in $z$ must also be set in both $a$ and $c$.

From these observations, we can determine the minimum set of bits that must be active in $a, b, c$.
- For $a$, it must contain all the bits that are set in $x$ and all the bits that are set in $z$. The smallest integer that satisfies this is $x \ | \ z$.
- For $b$, it must contain all the bits from $x$ and $y$. The smallest integer is $x \ | \ y$.
- For $c$, it must contain all the bits from $y$ and $z$. The smallest integer is $y \ | \ z$.

This gives us a potential candidate solution. Let's try constructing $a, b, c$ this way:
- Let $a = x \ | \ z$
- Let $b = x \ | \ y$
- Let $c = y \ | \ z$

This construction gives us the "smallest" possible values for $a, b, c$ that could work. If any other integers $a', b', c'$ form a valid solution, it must be that $a$ is a submask of $a'$, $b$ is a submask of $b'$, and $c$ is a submask of $c'$. However, adding more bits to $a, b, c$ (i.e., changing a 0 to a 1) can only cause the result of an AND operation to stay the same or change from 0 to 1. It can never change a 1 to a 0. This means if our minimal construction `(a & b)` results in a bit that is not in `x`, no larger value for `a` or `b` can fix it.

Therefore, if this minimal construction works, a solution exists. If it fails, no solution can exist. The strategy is to construct these candidate values for $a, b, c$ and then verify if they satisfy the original three equations.

The algorithm is:
1. Calculate the candidate values: `a = x | z`, `b = x | y`, `c = y | z`.
2. Check if they satisfy the conditions:
   - `(a & b) == x`
   - `(b & c) == y`
   - `(c & a) == z`
3. If all three conditions are true, the answer is "YES". Otherwise, it's "NO".

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
    int x, y, z;
    cin >> x >> y >> z;

    int a = x | z;
    int b = x | y;
    int c = y | z;
    if ((a & b) == x && (b & c) == y && (c & a) == z){
        cout << "YES" << endl;
    }else{
        cout << "NO" << endl;
    }
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
