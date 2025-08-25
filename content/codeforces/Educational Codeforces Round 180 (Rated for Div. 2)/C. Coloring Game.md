---
title: C. Coloring Game
type: docs
math: true
---

## Problem Statement

Alice and Bob are playing a game using an integer array $a$ of size $n$.

Initially, all elements of the array are colorless. First, Alice chooses 3 elements and colors them red. Then Bob chooses any element and colors it blue (if it was red — recolor it). Alice wins if the sum of the red elements is strictly greater than the value of the blue element.

Your task is to calculate the number of ways that Alice can choose 3 elements in order to win regardless of Bob's actions.

### Input

The first line contains a single integer $t$ $(1 \leq t \leq 1000)$ — the number of test cases.

The first line of each test case contains a single integer $n$ $(3 \leq n \leq 5000)$.

The second line contains $n$ integers $a_1, a_2, \ldots, a_n$ $(1 \leq a_1 \leq a_2 \leq \cdots \leq a_n \leq 10^5)$.

Additional constraint on the input: the sum of $n$ over all test cases doesn't exceed 5000.

### Output

For each test case, print a single integer — the number of ways that Alice can choose 3 elements in order to win regardless of Bob's actions.


## Solution

The input array `a` is already sorted. Alice chooses three indices `i, j, k` (let's assume `i < j < k`) to color red. To guarantee a win, her choice must be robust against Bob's best possible counter-move. Bob will choose an element `a_b` to color blue to best thwart Alice.

Let's analyze Bob's optimal strategy for a given red set `{a_i, a_j, a_k}`:

1.  **Bob chooses one of Alice's elements to be blue:** To minimize Alice's win margin (`sum of red` - `blue`), Bob will choose the largest of her elements, `a_k`, to be blue. This maximizes the blue value and minimizes the remaining red sum.
    -   **Blue element:** `a_k`
    -   **Red elements:** `a_i, a_j`. Red sum: `a_i + a_j`.
    -   For Alice to win in this scenario, she needs: `a_i + a_j > a_k`.

2.  **Bob chooses an element that is not red:** Bob will again pick the value that hurts Alice most, which is the largest available value in the entire array, `a_n`. This is only an option for Bob if Alice didn't pick `a_n` herself (i.e., `k < n`).
    -   **Blue element:** `a_n`.
    -   **Red elements:** `a_i, a_j, a_k`. Red sum: `a_i + a_j + a_k`.
    -   For Alice to win in this scenario, she needs: `a_i + a_j + a_k > a_n`.
    -   (If Alice's choice includes `a_n`, so `k=n`, Bob's best non-red choice is `a_{n-1}`. The condition `a_i+a_j+a_n > a_{n-1}` is always true since `a_n >= a_{n-1}` and `a_i, a_j` are positive, so Alice doesn't need to worry about this case).

### Combined Conditions for a Guaranteed Win

For Alice to guarantee a win, her chosen triplet `{i, j, k}` must satisfy the conditions for all of Bob's best responses. This simplifies to:
1.  `a_i + a_j > a_k`
2.  And if `k < n`, then also `a_i + a_j + a_k > a_n`.

### Algorithm

Our task is to count the number of triplets `(i, j, k)` with `i < j < k` that satisfy these conditions. A naive `O(n^3)` check is too slow. We can optimize to `O(n^2 log n)`:

1.  Iterate through all possible pairs for the first two elements, `(a_i, a_j)`, where `i < j`. This takes `O(n^2)` time.
2.  For each pair `(i, j)`, we need to count the number of valid indices `k` for the third element. A valid `k` must satisfy `j < k < n` and the two conditions above.
    -   From condition 1: `a_k < a_i + a_j`.
    -   From condition 2: `a_k > a_n - (a_i + a_j)`.
3.  So, for a fixed `(i, j)`, we need to count indices `k` in the range `(j, n-1)` such that `a_n - (a_i + a_j) < a_k < a_i + a_j`.
4.  Since the array `a` is sorted, we can find the number of such `k`'s efficiently using binary search (e.g., `std::upper_bound` and `std::lower_bound`) on the subarray `a[j+1...n-1]`. This count can be found in `O(log n)`.
5.  If Alice chooses `k=n`, only condition 1 (`a_i + a_j > a_n`) needs to be checked. We add 1 to our count if it holds.

The total complexity is `O(n^2 log n)`, which is feasible for the given constraints.

[submission link](https://codeforces.com/contest/2112/submission/327452467)