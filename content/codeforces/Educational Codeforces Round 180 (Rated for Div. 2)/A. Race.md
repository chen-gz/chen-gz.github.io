---
title: A. Race
type: docs
math: true
---

## Problem Statement

Alice and Bob participate in a game TV show. When the game starts, the prize will be dropped to a certain point, and whoever gets to it first will get the prize.

Alice decided that she would start running from point $a$. Bob, however, has not yet chosen his starting position.

Bob knows that the prize could drop either at point $x$ or at point $y$. He also knows that he can reach the prize faster than Alice if the distance from his starting position to the prize is strictly less than the distance from Alice's starting position to the prize. The distance between any two points $c$ and $d$ is calculated as $|c-d|$.

Your task is to determine whether Bob can choose an integer point that is guaranteed to get to the prize faster, regardless of where it appears (at point $x$ or $y$). Bob can choose any integer point, except for $a$ (in particular, he can choose to start in point $x$, point $y$, or any other point, but not $a$).

## Input

The first line contains a single integer $t$ $(1 \leq t \leq 1000)$ — the number of test cases.

The only line of each test case contains three integers $a$, $x$, $y$ $(1 \leq a, x, y \leq 100)$. Points $a$, $x$, and $y$ are pairwise distinct.

## Output

For each test case, print "YES" (case insensitive) if Bob can choose an integer point that is guaranteed to get to the prize faster, regardless of where it appears. Otherwise, print "NO" (case insensitive).

## Solution

Let Alice's position be `a`, and the two possible prize locations be `x` and `y`. Bob needs to choose a starting position `b` (where `b` is an integer and `b != a`) such that he is guaranteed to be closer to the prize, no matter where it drops.

This means Bob's chosen position `b` must satisfy two conditions simultaneously:
1.  The distance from `b` to `x` is strictly less than the distance from `a` to `x`.  `|b - x| < |a - x|`.
2.  The distance from `b` to `y` is strictly less than the distance from `a` to `y`.  `|b - y| < |a - y|`.

Let's analyze the condition `|b - z| < |a - z|`. This inequality means that `b` is closer to `z` than `a` is. On a number line, the point equally distant from `a` and `z` is their midpoint, `(a+z)/2`. For `b` to be closer to `z`, it must lie on the same side of this midpoint as `z`.
-   If `a < z`, the midpoint is between them. `b` must be to the right of the midpoint: `b > (a+z)/2`.
-   If `a > z`, the midpoint is between them. `b` must be to the left of the midpoint: `b < (a+z)/2`.

Now, let's consider the positions of `a`, `x`, and `y`. Let's assume `x < y` without loss of generality. There are three cases for Alice's position `a`:

**Case 1: `a` is to the left of both prize locations (`a < x < y`).**
-   To be closer to `x` (since `a < x`), Bob needs `b > (a+x)/2`.
-   To be closer to `y` (since `a < y`), Bob needs `b > (a+y)/2`.
Since `y > x`, we have `(a+y)/2 > (a+x)/2`. To satisfy both, Bob must choose `b` such that `b > (a+y)/2`. Bob can always pick an integer `b` that satisfies this (for example, `b = floor((a+y)/2) + 1`). So, a solution exists.

**Case 2: `a` is between the two prize locations (`x < a < y`).**
-   To be closer to `x` (since `a > x`), Bob needs `b < (a+x)/2`.
-   To be closer to `y` (since `a < y`), Bob needs `b > (a+y)/2`.
So Bob needs to find a `b` such that `(a+y)/2 < b < (a+x)/2`. However, since `y > x`, we have `(a+y)/2 > (a+x)/2`, so there is no number `b` that can satisfy both conditions. No solution exists.

**Case 3: `a` is to the right of both prize locations (`x < y < a`).**
-   To be closer to `x` (since `a > x`), Bob needs `b < (a+x)/2`.
-   To be closer to `y` (since `a > y`), Bob needs `b < (a+y)/2`.
Since `x < y`, we have `(a+x)/2 < (a+y)/2`. To satisfy both, Bob must choose `b` such that `b < (a+x)/2`. Bob can always pick an integer `b` that satisfies this (for example, `b = ceil((a+x)/2) - 1`). So, a solution exists.

### Conclusion
Bob can find a winning position `b` if and only if Alice's starting position `a` is not between the two prize locations `x` and `y`. This is equivalent to `a < min(x, y)` or `a > max(x, y)`.

[Submission link](https://codeforces.com/contest/2112/submission/327448815)