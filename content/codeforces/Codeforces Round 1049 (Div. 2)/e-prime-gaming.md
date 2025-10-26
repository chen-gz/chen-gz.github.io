---
title: E. Prime Gaming
type: docs
math: true
---

This is the easy version of the problem. The difference between the versions is that in this version, $m \leq 2$. You can hack only if you solved all versions of this problem.

A valid configuration is defined as an arrangement of $n$ piles of stones such that:

The number of stones in each pile is an integer between 1 and $m$ (both inclusive).
Given a valid configuration of $n$ piles of stones, some indices from 1 to $n$ are marked as good. Alice and Bob start playing a game taking $n−1$ turns alternately with Alice going first. In each turn, they have to perform the following operation:

Choose any integer $i$ such that $1\leq i \leq p $ (where $p$ is the number of piles left) and $i$ is good, and remove the $i$-th pile completely.
Note that after performing the operation once, the number of piles decreases by 1 and the remaining piles are re-indexed. The game will end when there is only one pile left. It is guaranteed that the index 1 is always good.

Let $x$ denote the number of stones in the final remaining pile. Alice wants to maximize $x$, whereas Bob wants to minimize it. Both Alice and Bob play optimally.

Find the sum of $x$ over all the possible valid configurations modulo $10^9+7$.

## Solution

### Approach

For $m \leq 2$, we can solve the problem using dynamic programming, leveraging the small number of possible pile values.

#### Key Observations

1. **Game Structure:**
	- Each pile can have either 1 or 2 stones.
	- The game is played by removing a "good" pile in each turn, with Alice and Bob alternating moves.
	- The goal is to maximize (for Alice) or minimize (for Bob) the number of stones in the last remaining pile.

2. **State Representation:**
	- Let `dp[i][mask][player]` represent the optimal value of the final pile for the current player, where:
	  - $i$ is the number of piles left.
	  - `mask` encodes the configuration: each bit represents whether a pile has 1 (0) or 2 (1) stones.
	  - `player` is 0 for Alice's turn, 1 for Bob's turn.

3. **Transitions:**
	- For each state, try removing each possible "good" pile and update the state accordingly.
	- Alice will choose the move that maximizes the final pile value, while Bob will minimize it.

4. **Computation:**
	- Enumerate all valid configurations and simulate the game using DP.
	- Sum the optimal final pile values for all configurations.

#### For $m > 2$

For the hard version ($m > 2$), the problem can be reduced to the $m = 2$ case by considering the positions with values above or below a certain threshold. The details of this reduction are more involved and can be found by comparing the two versions of the code.

#### References

- [E1 submission (easy version)](https://codeforces.com/contest/2140/submission/338854975)
- [E2 submission (hard version)](https://codeforces.com/contest/2140/submission/340677175)
