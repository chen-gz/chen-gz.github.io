---
title: G. Modular Sorting
type: docs
math: true
---

[Codeforces Round 1034 (Div. 3) G](https://codeforces.com/contest/2123/problem/G)

## Problem

You are given an integer $m$ ($2 \leq m \leq 5 \cdot 10^5$) and an array $a$ consisting of nonnegative integers strictly less than $m$.

You will be asked to process two types of queries:

1. `i x`: Assign $a_i := x$ (this operation updates the array persistently).
2. `k`: In one operation, you may choose any element $a_i$ and assign $a_i := (a_i + k) \bmod m$. Determine whether there exists a sequence of such operations (possibly zero) that can make the array **nondecreasing** (i.e., $a_0 \leq a_1 \leq \dots \leq a_{n-1}$).

Note: Type 2 queries are **hypothetical** — they do not modify the array. Type 1 queries are **persistent** and change the array permanently.

---

## Solution

### Basic Idea

For a type 2 query with parameter $k$, we aim to decide whether there exists a set of nonnegative integers $t_0, t_1, \dots, t_{n-1}$ such that:

$$
a_i' = (a_i + t_i \cdot k) \bmod m
$$

and the resulting array $a'$ is nondecreasing.

---

### Modular Arithmetic and Cyclic Subgroups

Let $g = \gcd(k, m)$. When we repeatedly apply the operation $a_i := (a_i + k) \bmod m$, the values that $a_i$ can attain lie in the same **coset modulo $g$**:

$$
a_i' \equiv a_i \pmod{g}
$$

This implies that **each element retains its residue modulo $g$** under any number of operations using $k$.

Thus, the minimum different between any two elements $a_i$ and $a_j$ is $(a_j - a_i) \bmod g$.

---

### Feasibility via Modular Differences

Then, all reachable values of $a_i$ form a cyclic group of this length. To check if we can rearrange values into a nondecreasing order, we use a key metric that measures how much modular "increase" is needed from left to right.

We define:

$$
S(g) = \sum_{j=0}^{n-1} \Delta_j
$$

where

* $\Delta_0 = a_0 \bmod g$
* $\Delta_j = ((a_j - a_{j-1}) \bmod g + g) \bmod g$ for $j \geq 1$

This expression captures the "positive modular steps" needed to move from $a_{j-1}$ to $a_j$ under modulo $g$.

#### Feasibility Condition:

For a query of type 2 with given $k$, let $g = \gcd(k, m)$. Then:

> The array can be made nondecreasing if and only if $S(g) < m$.

If $S(g) \geq m$, the required modular shifts would wrap around $m$ — violating the nondecreasing constraint.

---

### Efficient Updates for Type 1 Queries

When handling a type 1 query (`i x`), we need to update the metric $S(g)$ for **all divisors $g$ of $m$**, because any future query might use a $k$ such that $\gcd(k, m) = g$.

Changing $a_i$ to $x$ affects at most two terms in $S(g)$:

* If $i > 0$, the difference $(a_i - a_{i-1}) \bmod g$
* If $i + 1 < n$, the difference $(a_{i+1} - a_i) \bmod g$

For each such $g$, we:

1. Subtract the old contributions to $S(g)$
2. Update $a_i$ to $x$
3. Add the new contributions back

To maintain efficiency, we:

* Precompute all divisors of $m$
* Store $S(g)$ for each $g$
* Use direct access to update only the affected terms

---

## Summary

* Each value $a_i$ can only move within its modular class modulo $\gcd(k, m)$.
* To determine feasibility for type 2 queries, we use the modular step sum $S(g)$.
* The condition $S(g) < m$ guarantees that the sequence can be made nondecreasing.
* Efficient handling of type 1 updates ensures the system stays performant.

[submission link](https://codeforces.com/contest/2123/submission/327282077)
