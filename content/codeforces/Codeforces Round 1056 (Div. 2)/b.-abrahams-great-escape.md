---
title: "B. Abraham's Great Escape"
date: 2024-07-21
draft: false
---
## Problem Statement
Abraham is a brave explorer who goes where no other programmer has gone before. For his next expedition, he plans to investigate a peculiar maze. He knows that the maze is an $n \times n$ grid with an arrow in each cell that points in one of four directions: up, down, left and right.

Abraham also knows that if he stands on an arrow, he will be forced to follow the arrows starting from that cell. Each arrow moves Abraham exactly 1 cell in the direction that it is pointing. If he reaches an arrow that points towards the outside of the maze, Abraham will escape the maze.

Abraham doesn't know how the arrows are arranged, so he wants to plan for multiple scenarios. He tasks you with finding an arrangement of arrows in the grid such that there are exactly $k$ starting cells from which he can escape the maze.

## Solution Explanation
The problem asks us to construct an $n \times n$ grid of arrows (Up, Down, Left, Right) such that exactly $k$ of the $n^2$ starting cells lead to an escape.

An escape is possible if following the arrows from a starting cell eventually leads off the grid. A non-escape is guaranteed if the path of arrows forms a cycle or leads into a cycle.

The total number of cells is $n^2$. We need $k$ escape cells, which means we need $n^2 - k$ non-escape cells.

Let's analyze the conditions for non-escape paths. The simplest way to create a non-escapable trap is a 2-cell cycle. For example, two adjacent cells pointing at each other: `R` and `L`. Any path that enters one of these two cells will be trapped forever. A single cell cannot form a cycle by itself, as it would have to point to itself, which is not allowed (it moves 1 cell). Therefore, the minimum number of cells required to create a non-escapable region is 2.

This gives us a crucial insight: if we need to create $n^2 - k$ non-escape cells, and the number of non-escape cells is 1 (i.e., $n^2 - k = 1$), it's impossible. In this case, we should output "NO".

For all other cases, it is possible. Let's denote the number of non-escape cells as `no_escape = n*n - k`.

If `no_escape` is 0, we can simply make every cell an escape cell. For instance, point all cells in the last column 'Down' and all other cells 'Right'. This ensures every path eventually moves rightwards off the grid or hits the last column and moves downwards off the grid.

If `no_escape` > 0 (and `no_escape` != 1), we can construct the required grid.
1.  **Create a trap:** We can create a 2-cell cycle, for example, at `(0, 0)` and `(0, 1)` by setting `ans[0][0] = 'R'` and `ans[0][1] = 'L'`. This uses up 2 of our `no_escape` cells.
2.  **Feed the trap:** We have `no_escape - 2` remaining cells that must not lead to an escape. We can make them point towards the trap. A simple strategy is to fill cells row by row, column by column. For each cell that needs to be non-escapable, we can point it 'Up' if it's in the first column (to avoid escaping left) and 'Left' otherwise. This directs the path towards the top-left corner, eventually leading into our `(0,0)`-`(0,1)` trap.
3.  **Create escape paths:** For the remaining $k$ cells, we must ensure they lead to an escape. We can use the same strategy as the `no_escape = 0` case: point cells in the last column 'Down' and all other cells 'Right'. This guarantees that any path starting from these cells will not intersect our trap (which is at the top-left) and will safely exit the grid.

By combining these strategies, we can successfully construct a grid for any valid $k$.

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
    vector<string> ans(n);
    // resize to nxn
    for (int i = 0; i < n; i++) {
        ans[i].resize(n, '0');
    }
    // the number of nxn - k should great then 2
    if (n * n - k == 1) {
        cout << "NO" << endl;
        return;
    }
    int no_escape = n * n - k;
    if (no_escape != 0) {
        no_escape -= 2;
        ans[0][0] = 'R';
        ans[0][1] = 'L';
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (no_escape > 0 && ans[i][j] == '0') {
                if (j == 0)
                    ans[i][j] = 'U';
                else
                    ans[i][j] = 'L';
                no_escape--;
            }
        }
    }
    // set all other to R and D(last column)
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (ans[i][j] == '0') {
                if (j == n - 1)
                    ans[i][j] = 'D';
                else
                    ans[i][j] = 'R';
            }
        }
    }
    cout << "YES" << endl;
    for (int i = 0; i < n; i++) {
        cout << ans[i] << endl;
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