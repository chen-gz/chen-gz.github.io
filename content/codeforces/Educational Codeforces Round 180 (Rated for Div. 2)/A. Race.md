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

The condition for Bob to guarantee to win is $a < \min(x, y)$ or $a > \max(x, y)$.

**Explanation:**
- If Alice's starting position $a$ is outside the interval $[\min(x, y), \max(x, y)]$, then Bob can position himself between the two possible prize locations
- This ensures that no matter where the prize appears, Bob will always be closer to it than Alice

[Submission link](https://codeforces.com/contest/2112/submission/327448815)