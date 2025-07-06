---
title: "D. Token Removing"
type: "doc"
math: true
---

## Problem Statement

Define a sequence of integers $a$ valid if and only if $∀1 ≤ i ≤ n, 0 ≤ a_i ≤ i$.

Define the weight $f(a)$ of a valid sequence $a$ of length $n$:

- Initially, a token is placed at each integer point in the closed segment $[1, n]$ on the number axis.
- Perform $n$ operations in sequence. During the $i$-th operation, if $a_i ≠ 0$, remove a token in the closed segment $[a_i, i]$ that has not been removed; otherwise, do nothing.
- $f(a)$ is the number of ways to remove tokens. Two ways are considered different if there exists a $t$ such that the positions of the tokens removed by the two ways are different at the $t$-th operation.
- For example, $f([0,2,1]) = 2$, because we can remove tokens on $2,1$ or $2,3$ in sequence.

JT gives you two integers $n, m$ and asks you to find the sum of the weights over all $(n+1)!$ valid sequences of length $n$. Since the answer may be too large, print it modulo $m$.

### Input

Each test contains multiple test cases. The first line contains the number of test cases $t$ ($1 ≤ t ≤ 1000$). The description of the test cases follows.

The only line of each test case contains two integers $n$ and $m$ ($1 ≤ n ≤ 5000$, $10^8 ≤ m ≤ 1.01 × 10^9$) — the length of valid sequences, and the modulus.

It is guaranteed that the sum of $n^2$ over all test cases does not exceed $2.5 × 10^7$.

### Output

For each test case, output an integer — the sum of the weights over all $(n+1)!$ valid sequences of length $n$, modulo $m$.

## Solution 
The goal is to calculate the sum of weights f(a) over all possible valid sequences a, modulo m. The weight f(a) is the number of ways to remove tokens based on the sequence a.

### 1. The Core Idea: Changing Perspective

Instead of iterating through every possible sequence a and calculating its contribution, the solution flips the problem on its head. We ask a different question:

**For a specific set of token positions P that are removed, what is its total contribution to the final answer?**

If we can calculate this for any given set P, we can then sum these contributions over all possible sets P to get the final answer.

### 2. Contribution of a Single Set of Tokens P

Let's assume we decide to remove a specific set of $k$ tokens located at positions $P = {p_0, p_1, ..., p_{k-1}}$. For convenience, let's sort them in descending order: $n ≥ p_0 > p_1 > ... > p_{k-1} ≥ 1$.

For this set P to be removed, we need to find a sequence $a$ and a corresponding removal plan. This involves two main parts:

#### 2.1 Choosing $a[t]$ values

For each token $p_j$ that is removed at some step $t_j$, the condition is $a[t_j] ≤ p_j ≤ t_j$. The value $a[t_j]$ can be any integer from 1 to $p_j$. This gives $p_j$ choices for $a[t_j]$. For all $k$ tokens, the total number of choices for the $a$ values is the product $p_0 × p_1 × ... × p_{k-1}$.

#### 2.2 Assigning removal steps $t_j$

We need to assign a unique removal step $t_j$ to each token $p_j$ such that $t_j ≥ p_j$.

- For the largest token $p_0$, it can be removed at any step from $p_0$ to $n$. There are $n - p_0 + 1$ available steps.
- For the second largest, $p_1$, it can be removed at any step from $p_1$ to $n$, except for the step already taken by $p_0$. Since $p_0 > p_1$, the step for $p_0$ is always a valid (but unavailable) step for $p_1$. This leaves $(n - p_1 + 1) - 1$ choices.
- Generalizing, for the token $p_j$ (which is the $j$-th largest, with $j$ starting from 0), there are $n - p_j + 1$ potential steps. However, $j$ of these steps have already been assigned to the $j$ tokens larger than $p_j$. This leaves $(n - p_j + 1 - j)$ choices for $t_j$.

#### 2.3 Final Contribution Formula

Combining these two parts, the total contribution for a single, fixed set P is:

$$\text{Contribution}(P) = \left(\prod_{j=0}^{k-1} p_j\right) \times \left(\prod_{j=0}^{k-1} (n - p_j + 1 - j)\right) = \prod_{j=0}^{k-1} p_j(n - p_j + 1 - j)$$

Our new goal is to sum this value over all possible non-empty subsets $P$ of ${1, 2, ..., n}$.

### 3. The Dynamic Programming Solution

Enumerating all $2^n$ subsets P is too slow. We can use dynamic programming to calculate this sum efficiently. The key is to build the sets P one element at a time.

The crucial insight is to consider elements in descending order, from $n$ down to $1$.

#### 3.1 DP State Definition

Let's define our DP state:

$\text{dp}[i][k]$ = The sum of contributions for all sets $P$ of size $k$ where all chosen tokens are from the range ${i, i+1, ..., n}$

#### 3.2 DP Transition

We compute this by iterating $i$ from $n$ down to $1$. For each $i$, we make a decision:

1. **Don't include $i$ in our set P**: If we don't choose $i$, we must still choose $k$ tokens, but now they must all come from the range ${i+1, ..., n}$. The sum of contributions for this case is, by definition, $\text{dp}[i+1][k]$.

2. **Include $i$ in our set P**: If we choose $i$, we need to select $k-1$ other tokens from the range ${i+1, ..., n}$.
   - The sum of contributions for all such sets of $k-1$ tokens from ${i+1, ..., n}$ is $\text{dp}[i+1][k-1]$.
   - Now, we add $i$ to each of these sets. Since $i$ is smaller than any number in ${i+1, ..., n}$, it will always be the smallest element in the new $k$-element set. This means its rank (from largest, 0-indexed) will always be $k-1$.
   - The multiplicative factor for $i$ is therefore $i × (n - i + 1 - (k-1))$.
   - The total contribution for this case is $\text{dp}[i+1][k-1] × i × (n - i + 2 - k)$.

#### 3.3 The DP Recurrence

Combining these cases, we get the recurrence:

$$\text{dp}[i][k] = \text{dp}[i+1][k] + \text{dp}[i+1][k-1] × i × (n - i + 2 - k)$$

**Base Cases**: 
- $\text{dp}[n+1][0] = 1$ (representing one way to choose an empty set)
- $\text{dp}[n+1][k] = 0$ for $k > 0$

**Final Answer**: The final answer is the sum of contributions for all possible set sizes $k$, considering all numbers from 1 to $n$. This is $\sum_{k=0}^{n} \text{dp}[1][k]$.

[submission link](https://codeforces.com/contest/2119/submission/327831719)