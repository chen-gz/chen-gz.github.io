---
title: "E. Mimo & Yuyu"
type: docs
math: true
---

## Problem Statement

Mimo and Yuyu just finished their 1000-piece jigsaw puzzle of beautiful Bellas Artes! Now they are looking for other ways to entertain themselves.

There is an $n \times m$ grid of cells with columns labeled $1, 2, \dots, m$ from left to right and rows labeled $1, 2, \dots, n$ from top to bottom. Let $(u, v)$ ($1 \le u \le n, 1 \le v \le m$) denote the cell in the $u$-th row and $v$-th column. Each cell can contain any number of tokens which are indistinguishable among themselves. Initially, there are $k$ tokens, the $i$-th of which is located in $(x_i, y_i)$.

Mimo and Yuyu now play a game alternating turns. On his/her turn, a player chooses a token $c$ currently in the grid as well as a sequence of distinct cells $(a_1, b_1), (a_2, b_2), \dots, (a_p, b_p)$ ($p \ge 2$) such that the following conditions hold:

*   $c$ is located in $(a_1, b_1)$
*   For all $i$ ($1 \le i < p$), $|a_{i+1} - a_i| + |b_{i+1} - b_i| = 1$. That is, adjacent cells in the sequence must be adjacent in the grid.
*   $b_1 \ge b_2 \ge \dots \ge b_p$. That is, the columns of the cells of the sequence must form a non-increasing sequence (never stepping away from column 1).
*   $b_p = 1$. That is, the last cell of the sequence must lie in column 1.
*   $b_1 > b_2$. In particular, $b_2 = b_1 - 1$. That is, $(a_1, b_1)$ must be the only cell of the sequence lying in column $b_1$.

Then, he/she removes $c$ from the grid and adds 1 token to $(a_2, b_2), (a_3, b_3), \dots, (a_p, b_p)$ each. This concludes his/her turn.

The player who cannot make a turn loses. Mimo goes first. Determine who will win if both players play optimally.

---

## Solution Explanation

This problem describes an impartial game, which can often be analyzed by finding a winning strategy based on the game's state. The key is to see how a move affects the game state and whether a player can force a win by maintaining a certain condition. The analysis differs based on the grid dimension $n$.

### Case 1: `n > 1` (General Case)

When $n > 1$, a player has significant freedom in choosing the path of a move. A move involves selecting a token at $(a_1, b_1)$ and a path of adjacent cells $(a_2, b_2), \dots, (a_p, b_p)$ such that $b_1 > b_2 \ge \dots \ge b_p = 1$. The token at $(a_1, b_1)$ is removed, and new tokens are placed on the other cells in the path.

The crucial observation is that by choosing the path appropriately, a player can decide whether to add an odd or even number of tokens to any column $j$ where $j < b_1$. For any such column $j$, the player can make the path visit it an odd or even number of times, thereby flipping the parity of the token count in that column or leaving it unchanged.

This turns the game into a variant of Nim. Let's define the state of the game by the set of columns (with index > 1) that contain an odd number of tokens. Let this set be $S_{odd}$.

A move consists of picking a token from a column $b_1$. This action flips the parity of the token count in column $b_1$, effectively adding or removing $b_1$ from $S_{odd}$. The player can then selectively flip the parity for any combination of columns with indices less than $b_1$.

This is equivalent to the game of Nim where the "piles" are the column indices themselves. A move on a token in column $b_1$ is like taking the pile $b_1$ and being able to produce any combination of piles smaller than $b_1$. The winning strategy in Nim is to always move to a state where the Nim-sum (XOR sum) of the piles is zero.

In our case, the strategy is simpler to state:
- If $S_{odd}$ is empty, the current position is a losing one (P-position). Any move will make $S_{odd}$ non-empty.
- If $S_{odd}$ is not empty, the current position is a winning one (N-position). Let $y_{max}$ be the largest column index in $S_{odd}$. The current player can choose any token in column $y_{max}$. This flips the parity of $y_{max}$, removing it from $S_{odd}$. Then, for all other columns $j$ that are in $S_{odd}$ (note they must be less than $y_{max}$), the player chooses the path to flip their parities as well. The result is a new state where $S_{odd}$ is empty.

Therefore, Mimo (the first player) wins if and only if the initial set $S_{odd}$ is non-empty.

### Case 2: `n = 1` (A Special Case)

When $n = 1$, there is only one row. The path a token can take is fixed. A token at $(1, y)$ must move along the path $(1, y-1), (1, y-2), \dots, (1, 1)$. This means removing a token from column $y$ adds exactly one new token to each column $j$ where $1 \le j < y$.

This changes the game dynamics. Let's analyze the parity of token counts. A move on a token in column $y > 1$ flips the parity of the token count in every column from 2 to $y$.

Consider a pairing strategy. Let's focus on the parity of tokens in column 2.
- If a player moves a token from column $y > 2$, the number of tokens in column 2 increases by one, flipping its parity.
- If a player moves a token from column 2, the number of tokens in column 2 decreases by one, also flipping its parity.

Suppose it's Mimo's turn and the number of tokens in column 2, $C_2$, is even.
- If Mimo moves a token from a column $y > 2$, $C_2$ becomes odd. Yuyu can respond by moving one of the newly available tokens from column 2, making $C_2$ even again. The net result is that a token from column $y$ has been consumed, and the parity of $C_2$ is restored for the start of Mimo's next turn.
- If Mimo moves a token from column 2, $C_2$ becomes odd. Yuyu is now faced with an odd number of tokens in column 2.

This suggests that a token in a column $y > 2$ is not an immediate threat; it's a potential move that can be countered. The decisive moves involve the tokens in column 2. A player who starts their turn with an odd number of tokens in column 2 can make a move from column 2, leaving the opponent with an even number. The opponent is then forced to either make a move from column 2 (giving the first player the advantage again) or make a move from $y > 2$ which can be paired and effectively neutralized.

The game boils down to the parity of the number of tokens in column 2. Mimo wins if and only if the number of tokens in column 2 is initially odd. Tokens in columns greater than 2 do not affect the outcome.

### Summary

- For $n > 1$, Mimo wins if there is at least one column $y > 1$ with an odd number of tokens. Otherwise, Yuyu wins.
- For $n = 1$, Mimo wins if the number of tokens in column 2 is odd. Otherwise, Yuyu wins.

The provided C++ code correctly implements this logic by maintaining a set `s` that stores the columns with an odd number of tokens. For $n=1`, it specially treats only tokens from column 2 as relevant. For $n>1`, it considers all columns $y>1`. If the set `s` is empty after processing all initial tokens, Yuyu wins; otherwise, Mimo wins.

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
    int n, m, k;
    cin >> n >> m >> k;
    set<int> s;
    int sum = 0;
    while (k--) {
        int x, y;
        cin >> x >> y;
        if (n == 1) {
            y = (y == 2? 2 : 1);
        }
        if (y <= 1) continue;
        if (s.find(y) != s.end()) {
            s.erase(y);
        } else {
            s.insert(y);
        }
    }
    if (!s.empty()) {
        cout << "Mimo" << endl;
    } else {
        cout << "Yuyu" << endl;
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
