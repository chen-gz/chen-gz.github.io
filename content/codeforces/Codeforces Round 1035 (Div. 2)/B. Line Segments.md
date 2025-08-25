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

This problem can be solved by tracking the range of possible distances from our current position to the target point $(q_x, q_y)$. Let `[d_min, d_max]` be this range of achievable distances.

1.  **Initialization**:
    -   Calculate the initial Euclidean distance `D` between the starting point `(p_x, p_y)` and the terminal point `(q_x, q_y)`.
    -   Initially, we are at a single point, so our range of distances to the target is `[D, D]`. We set `d_min = D` and `d_max = D`.

2.  **Iterating through moves**:
    -   For each move `i` with distance `a_i`:
        -   Let the current range of distances be `[d_min, d_max]`. After moving by `a_i`, we need to find the new range `[d'_min, d'_max]`.
        -   By the triangle inequality, if our current distance to the target is `d`, the new distance will be in the range `[|d - a_i|, d + a_i]`.
        -   To find the new range of all possible distances, we consider all `d` in `[d_min, d_max]`.
        -   The new maximum possible distance is achieved by moving directly away from the target from the furthest possible point: `d'_max = d_max + a_i`.
        -   The new minimum possible distance `d'_min` is `min_{d \in [d_min, d_max]} |d - a_i|`. The function `f(d) = |d - a_i|` has a V-shape with its minimum at `d = a_i`.
            -   If `d_min <= a_i <= d_max` (i.e., `a_i` is within the current range), the minimum value of `f(d)` is `0`.
            -   If `a_i < d_min`, the minimum value is `d_min - a_i`.
            -   If `a_i > d_max`, the minimum value is `a_i - d_max`.
        -   We update `d_min` and `d_max` with these new values for the next iteration.

3.  **Final Check**:
    -   After all `n` moves, we have a final range `[d_min, d_max]`. If `d_min` is exactly `0`, it means we can be at a distance of 0 from the target (i.e., at the target). So, the answer is "Yes". Otherwise, it's "No".

[submission link](https://codeforces.com/contest/2119/submission/327566232)