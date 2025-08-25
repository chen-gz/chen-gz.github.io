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
2. `k`: In one operation, you may choose any element $a_i$ and assign $a_i := (a_i + k) \mod m$. Determine whether there exists a sequence of such operations (possibly zero) that can make the array **non-decreasing** (i.e., $a_0 \leq a_1 \leq \dots \leq a_{n-1}$).

Note: Type 2 queries are **hypothetical** — they do not modify the array. Type 1 queries are **persistent** and change the array permanently.

---

## Solution

### Basic Idea

For a type 2 query with parameter $k$, we aim to decide whether there exists a set of nonnegative integers $t_0, t_1, \dots, t_{n-1}$ such that:

$$
a_i' = (a_i + t_i \cdot k) \mod m
$$

and the resulting array $a'$ is non-decreasing.

---

### Modular Arithmetic and Cyclic Subgroups

Let $g = \gcd(k, m)$. When we repeatedly apply the operation $a_i := (a_i + k) \mod m$, the values that $a_i$ can attain lie in the same **coset modulo $g$**:

$$
a_i' \equiv a_i \pmod{g}
$$

This implies that **the residue of each element modulo $g$ is an invariant** under any number of operations using $k$.

---

### Feasibility Condition

To check if the array can be made non-decreasing, we need to see if we can find a sequence of target values `b_0, b_1, ..., b_{n-1}` such that:
1. `b_0 <= b_1 <= ... <= b_{n-1}`
2. `b_i < m` for all `i`
3. `b_i \equiv a_i \pmod g` for all `i`

We can determine this by greedily constructing the lexicographically smallest possible sequence `b` and checking if it satisfies the conditions.

1.  Start with `b_0 = a_0 \pmod g`.
2.  For `i` from `1` to `n-1`, we need to find the smallest `b_i` such that `b_i >= b_{i-1}` and `b_i \equiv a_i \pmod g`.
    This `b_i` can be calculated from `b_{i-1}`. Let `rem_i = a_i \pmod g`. We are looking for `b_i = b_{i-1} + \delta` where `b_i \equiv rem_i \pmod g`. The smallest non-negative `delta` makes `b_i` the smallest possible value.
3. After iterating through the whole array, we get a final value for `b_{n-1}`.

The array can be made non-decreasing if and only if the greedily constructed `b_{n-1}` is less than `m`. If `b_{n-1} >= m`, it's impossible to satisfy the conditions.

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
