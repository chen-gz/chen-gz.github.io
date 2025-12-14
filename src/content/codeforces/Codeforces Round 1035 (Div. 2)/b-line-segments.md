---
title: B. Line Segments
type: docs
math: true
---

## Problem Statement

You are given two points $(p_x, p_y)$ and $(q_x, q_y)$ on a Euclidean plane.

You start at the starting point $(p_x, p_y)$ and will perform $n$ operations. In the $i$-th operation, you must choose any point such that the Euclidean distance* between your current position and the point is exactly $a_i$, and then move to that point.

Determine whether it is possible to reach the terminal point $(q_x, q_y)$ after performing all operations.

*The Euclidean distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$.

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ $(1 \leq t \leq 10^4)$. The description of the test cases follows.

The first line of each test case contains a single integer $n$ $(1 \leq n \leq 10^3)$ — the length of the sequence $a$.

The second line of each test case contains four integers $p_x, p_y, q_x, q_y$ $(1 \leq p_x, p_y, q_x, q_y \leq 10^7)$ — the coordinates of the starting point and terminal point.

The third line of each test case contains $n$ integers $a_1, a_2, \ldots, a_n$ $(1 \leq a_i \leq 10^4)$ — the distance to move in each operation.

It is guaranteed that the sum of $n$ over all test cases does not exceed $2 \cdot 10^5$.

### Output

For each test case, output "Yes" if it is possible to reach the terminal point $(q_x, q_y)$ after all operations; otherwise, output "No".

You can output the answer in any case (upper or lower). For example, the strings "yEs", "yes", "Yes", and "YES" will be recognized as positive responses.


## Solution

For each move, we can choose any point on the circle with radius $a_i$ centered at the current position. The distance to the target point $(q_x, q_y)$ will then have a range of $[\max(0, d - a_i), d + a_i]$, where $d$ is the distance from the current position to $(q_x, q_y)$. We rewrite this range as $[d_{min}, d_{max}]$.

- We begin with the initial range $[d_{min}, d_{max}]$, where $d_{min} = d_{max} = d$, and $d$ is the distance from $(p_x, p_y)$ to $(q_x, q_y)$.
- For each move $i$, we update the range as follows:
  - $d'_{min} = \max(0, \min(|d_{min} - a_i|, |d_{max} - a_i|))$
  - $d'_{max} = d_{max} + a_i$
  - If $a_i \geq d_{max}$ or $a_i \geq d_{min}$, then the new minimum distance can be 0, so $d'_{min} = 0$.
  - Update $d_{min} = d'_{min}$ and $d_{max} = d'_{max}$ for the next iteration.
- After all moves, if $0$ is within the final range $[d_{min}, d_{max}]$, then it's possible to reach the target point.

[submission link](https://codeforces.com/contest/2119/submission/327566232)