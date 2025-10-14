---
title: "A. Circle of Apple Trees"
type: docs
math: true
---

## Problem Statement

There are $n$ apple trees arranged in a circle. Each tree bears exactly one apple, and the beauty of the apple on the $i$-th tree is given by $b_i$ for all $1 \le i \le n$. You start in front of tree 1.

At each tree, you may choose to either eat the apple or skip it. After making your choice, you move to the next tree: from tree $i$, you move to tree $i+1$ for $1 \le i \le n-1$, and from tree $n$, you move back to tree 1. This process continues indefinitely as you move through the trees in a cycle.

However, you have a special condition: you may only eat an apple if its beauty is strictly greater than the beauty of the last apple you ate. For example, if $b = [2, 1, 2, 3]$ and you eat the apple on tree 1 (beauty 2), you cannot eat the apples on trees 2 and 3 because their beauties are not greater than 2. However, you may eat the apple on tree 4 since $b_4 = 3 > 2$.

Note that you are allowed to skip an apple when you first encounter it, and you can choose to eat it later on a subsequent cycle.

Your task is to determine the maximum number of apples you can eat if you make optimal decisions on when to eat or skip each apple.

## Solution Explanation

The goal is to maximize the number of apples eaten, with the constraint that each apple's beauty must be strictly greater than the previously eaten apple's beauty.

The key insight is that since we can circle the trees indefinitely, the physical positions of the apples don't restrict the order in which we can eat them. We can always complete a full circle to get back to any apple we previously skipped. This means we can choose to eat any available apple at any time, as long as it satisfies the beauty condition.

To maximize the number of apples eaten, we need to construct the longest possible sequence of apples with strictly increasing beauties. The optimal strategy is to eat the apples in ascending order of their beauty values. For example, if we have apples with beauties `{10, 5, 20}`, we can first eat the one with beauty 5, then cycle around and eat the one with beauty 10, and finally cycle again to eat the one with beauty 20.

The "strictly greater" condition implies that we cannot eat two apples of the same beauty. For instance, if we eat an apple of beauty 5, the next one must have beauty greater than 5. We cannot eat another apple of beauty 5.

Therefore, the problem simplifies to finding the total number of distinct beauty values available. Each unique beauty value can be part of our increasing sequence exactly once. The maximum number of apples we can eat is simply the count of unique apple beauties.

The C++ solution implements this by:
1. Reading all beauty values into a vector.
2. Sorting the vector.
3. Using the `std::unique` algorithm to move all unique elements to the beginning of the vector, followed by `vector::erase` to remove the duplicate elements.
4. The final size of the vector is the number of unique beauties, which is the answer.

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
    for (auto &i : a) {
        cin >> i;
    }
    sort(a.begin(), a.end());
    // make unique array
    a.erase(unique(a.begin(), a.end()), a.end());
    cout << a.size() << endl;
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
