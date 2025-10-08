---
title: "A. El fucho"
type: docs
---

## Problem Statement

Juan and his friends are going to split themselves into $n$ teams and play a modified double-elimination football tournament, consisting of a winners' group and a losers' group. Initially, all $n$ teams belong to the winners' group.

In each round of the tournament, the following happens as long as one of the groups has at least two teams:

1.  **Winners' Group:** All teams in the winners' group pair up. If there is an odd number of teams, one team will not be paired and will automatically stay in the winners' group. For the teams that are paired, each pair plays a match. The winner stays in the winners' group, and the loser drops down to the losers' group for the *next* round.

2.  **Losers' Group:** All teams in the losers' group pair up. If there is an odd number of teams, one team will not be paired and will automatically stay in the losers' group. For the teams that are paired, each pair plays a match. The winner stays in the losers' group, and the loser is eliminated from the tournament.

Note that a team losing in the winners' group moves to the losers' group in the *next* round and does not participate in the current round's losers' group matches.

This process continues until both groups have exactly one team each. At this point, these two teams play a final match to determine the tournament victor.

Your task is to determine the total number of matches played. It is guaranteed that the answer is the same regardless of how teams are paired or who wins.

## Solution Explanation

The problem asks for the total number of matches in a modified double-elimination tournament. Since the number of teams, $n$, is small, we can directly simulate the tournament round by round.

We need to keep track of the number of teams in the winners' group (`win`) and the losers' group (`loss`). Initially, `win = n` and `loss = 0`. We also need a counter for the total number of matches.

The simulation proceeds in a loop until the termination condition is met: one team in the winners' group and one in the losers' group (`win == 1 && loss == 1`).

Inside the loop, for each round, we calculate the changes:

1.  **Matches in Winners' Group:**
    - The number of matches played is `win / 2`. We add this to our total match count.
    - The number of teams losing and moving to the losers' group is `win / 2`.
    - The number of teams remaining in the winners' group is `(win / 2)` (the winners) + `(win % 2)` (the team that didn't play, if any). This simplifies to `(win + 1) / 2`.

2.  **Matches in Losers' Group:**
    - The number of matches played is `loss / 2`. We add this to our total.
    - The number of teams remaining from the current losers' group is `(loss + 1) / 2`.

3.  **Update for Next Round:**
    - The new number of winners is `win = (win + 1) / 2`.
    - The new number of losers is the sum of those who survived the losers' bracket and those who dropped from the winners' bracket: `loss = (loss + 1) / 2 + (win / 2)`.

The loop continues until `win == 1` and `loss == 1`. At this point, a final match is played, so we add 1 to the total count and terminate.

The C++ code implements this exact simulation logic within a `while` loop, correctly calculating the total number of matches.

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
    int win = n;
    int loss = 0;
    int num_rounds = 0;
    while(win + loss >= 1) {
        if (win == 1 && loss == 1) {
            num_rounds++;
            break;
        }
        num_rounds+= (loss) / 2;
        loss = (loss + 1) / 2;
        loss += win / 2;
        num_rounds+= (win) / 2;
        win = (win + 1) / 2;
    }
    cout << num_rounds << endl;
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