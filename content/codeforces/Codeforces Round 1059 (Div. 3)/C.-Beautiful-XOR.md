---
title: C. Beautiful XOR
math: true
---

## Problem Statement
You are given two integers $a$ and $b$. You are allowed to perform the following operation any number of times (including zero):
- choose any integer $x$ such that $0 \le x \le a$ (the current value of $a$, not initial),
- set $a := a \oplus x$. Here, $\oplus$ represents the bitwise XOR operator.

After performing a sequence of operations, you want the value of $a$ to become exactly $b$.

Find a sequence of at most 100 operations (values of $x$ used in each operation) that transforms $a$ into $b$, or report that it is impossible.

Note that you are not required to find the minimum number of operations, but any valid sequence of at most 100 operations.

## Solution
Let the initial value be $a$ and the target value be $b$. After a series of operations with chosen integers $x_1, x_2, \ldots, x_k$, the final value of $a$ will be $a \oplus x_1 \oplus x_2 \oplus \ldots \oplus x_k$. Let $X = x_1 \oplus x_2 \oplus \ldots \oplus x_k$. We want the final value to be $b$, so we have the equation:
$a \oplus X = b$
This implies that the total XOR sum of the operations must be $X = a \oplus b$.

Our task is to find a sequence of $x_i$ values that are valid (i.e., $x_i \le a_{\text{current}}$ at each step) and whose XOR sum is $X = a \oplus b$.

A simple way to construct the total XOR sum $X$ is to break it down into its constituent powers of 2. Any integer can be uniquely represented as a sum of distinct powers of 2, which correspond to the set bits in its binary representation. If we perform an XOR operation for each of these powers of 2, their total XOR sum will be equal to $X$.

Let's say $X = p_1 \oplus p_2 \oplus \ldots \oplus p_k$, where each $p_i$ is a distinct power of 2. We can use this sequence of $p_i$ as our operations $x_i$. The condition for each operation is that $p_i \le a_{\text{current}}$.

Let's analyze this condition. Let $p_{\max}$ be the largest power of 2 in the binary representation of $X$. This corresponds to the most significant bit where $a$ and $b$ differ.

**Case 1: $p_{\max} \le a$ (the initial value)**
If the largest required power of 2, $p_{\max}$, is less than or equal to the initial value of $a$, a solution is possible. Let the required operations be $p_1, p_2, \ldots, p_k$ where $p_k = p_{\max}$.
At any step, when we perform an operation $a_{\text{new}} = a_{\text{old}} \oplus p_i$, we need to ensure $p_i \le a_{\text{old}}$.
Since $p_{\max}$ is the most significant bit of difference, all bits of $a$ at positions higher than $p_{\max}$ are the same as in $b$. The condition $p_{\max} \le a$ implies that the most significant bit of $a$ is at least at the same position as $p_{\max}$.
When we apply operations with $p_i < p_{\max}$, these operations only affect bits lower than the most significant bit of $a$. Therefore, the value of $a$ remains greater than or equal to $p_{\max}$. This ensures that $a_{\text{current}} \ge p_{\max} \ge p_i$ for any subsequent operation $p_i$. Thus, all operations in the sequence are valid.

**Case 2: $p_{\max} > a$ (the initial value)**
If the largest power of 2 required for the transformation, $p_{\max}$, is greater than the initial $a$, it is impossible to reach $b$.
Let $p_{\max} = 2^m$. The condition $p_{\max} > a$ means that $a < 2^m$. This implies that all bits of $a$ at or above position $m$ are 0.
For any operation, we must choose an $x \le a_{\text{current}}$. If $a_{\text{current}} < 2^m$, then we must also have $x < 2^m$. The result of the XOR operation, $a_{\text{current}} \oplus x$, will also be less than $2^m$. This is because the XOR of two numbers cannot produce a result with a more significant bit than the larger of the two numbers.
Since we start with $a < 2^m$, we can never reach a value greater than or equal to $2^m$.
However, since $p_{\max}=2^m$ is part of $X = a \oplus b$, the $m$-th bit of $a$ and $b$ must differ. As the $m$-th bit of $a$ is 0, the $m$-th bit of $b$ must be 1. This means $b \ge 2^m$.
Since we can never reach a value $\ge 2^m$, it is impossible to transform $a$ into $b$.

So, the strategy is:
1. Calculate $X = a \oplus b$.
2. If $X=0$, no operations are needed.
3. Find the largest power of 2 in $X$, let it be $p_{\max}$.
4. If $p_{\max} \le a$, the solution is the sequence of all powers of 2 that constitute $X$.
5. If $p_{\max} > a$, no solution exists.

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
    int a, b;
    cin >> a >> b;
    int x = a ^ b;
    vector<int> ans;
    int pow = 1;
    if (x == 0){
        cout << 0 << endl;
        return;
    }
    while(x > 0) {
        if(x & 1) {
            ans.push_back(pow);
        }
        pow *= 2;
        x >>= 1;
    }
    if (ans.back() <= a ) {
        cout << ans.size() <<endl;
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << " ";
            }
        cout << endl;
    } else {
        cout << -1 << endl;
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