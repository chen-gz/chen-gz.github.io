---
title: "B. Unconventional Pairs"
type: docs
math: true
---

## Problem Statement

A popular reality show Unconventional Pairs has been launched in the city. According to the rules of the show, participants are paired in an unusual way: with an even number of people, all participants must be in pairs.

Petya has an array of $n$ integers $a_1, a_2, \ldots, a_n$. It is known that $n$ is even. Petya must divide the participants (numbers) into exactly $\frac{n}{2}$ pairs $(a_{p_1}, a_{q_1}), (a_{p_2}, a_{q_2}), \ldots, (a_{p_{\frac{n}{2}}}, a_{q_{\frac{n}{2}}})$. Each index can be included in no more than one pair.

For a pair $(x, y)$, its difference is defined as $|x - y|$. Petya wants to form unconventional pairs such that the maximum difference among all pairs is minimized.

Determine the minimum possible value of this maximum difference.

## Solution

To minimize the maximum difference among all pairs, the best strategy is to pair adjacent elements after sorting the array.

First, sort the array $a$ in non-decreasing order. Let the sorted array be $a'_1, a'_2, \ldots, a'_n$.

The optimal pairing strategy is to form pairs $(a'_1, a'_2), (a'_3, a'_4), \ldots, (a'_{n-1}, a'_n)$. The difference for each pair $(a'_{2i-1}, a'_{2i})$ is $a'_{2i} - a'_{2i-1}$ for $i = 1, \ldots, \frac{n}{2}$.

The maximum difference among these pairs will be $\max_{i=1}^{\frac{n}{2}} (a'_{2i} - a'_{2i-1})$.

This strategy is optimal because any other pairing would involve "crossing over" elements, which would lead to a larger or equal maximum difference. For example, if we pair $a'_i$ with $a'_k$ and $a'_j$ with $a'_l$ where $i < j < k < l$, the differences are $a'_k - a'_i$ and $a'_l - a'_j$. The alternative pairing $(a'_i, a'_j)$ and $(a'_k, a'_l)$ would result in smaller differences, $a'_j - a'_i$ and $a'_l - a'_k$.

Therefore, the minimum possible value of the maximum difference is the maximum difference between adjacent elements in the sorted array, taken in pairs.

[Submission Link](https://codeforces.com/contest/2149/submission/341432469)