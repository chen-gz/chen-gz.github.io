---
type: docs
---
# Chapter 1: Abstract Integration
Toward the end of the nineteenth century it became clear to many mathematicians that the Riemann integral (about which one learns in calculus courses) should be replaced by some other type of integral, more general and more flexible, better suited for dealing with limit processes. Among the attempts made in this direction, the most notable ones were due to Jordan, Borel, W. H. Young, and Lebesgue. It was Lebesgue's construction which turned out to be the most successful.

In brief outline, here is the main idea: The Riemann integral of a function $f$ over an interval $[a, b]$ can be approximated by sums of the form

$$\sum_{i=1}^{n} f(t_i)m(E_i)$$

where $E_1, \dots, E_n$ are disjoint intervals whose union is $[a, b]$, $m(E_i)$ denotes the length of $E_i$, and $t_i \in E_i$ for $i = 1, \dots, n$. Lebesgue discovered that a completely satisfactory theory of integration results if the sets $E_i$ in the above sum are allowed to belong to a larger class of subsets of the line, the so-called “measurable sets,” and if the class of functions under consideration is enlarged to what he called “measurable functions.” The crucial set-theoretic properties involved are the following: The union and the intersection of any countable family of measurable sets are measurable; so is the complement of every measurable set; and, most important, the notion of “length” (now called “measure”) can be extended to them in such a way that

$$m(E_1 \cup E_2 \cup E_3 \cup \dots) = m(E_1) + m(E_2) + m(E_3) + \dots$$

for every countable collection $\{E_i\}$ of pairwise disjoint measurable sets. This property of $m$ is called *countable additivity*.

The passage from Riemann's theory of integration to that of Lebesgue is a process of completion (in a sense which will appear more precisely later). It is of the same fundamental importance in analysis as is the construction of the real number system from the rationals.

The above-mentioned measure $m$ is of course intimately related to the geometry of the real line. In this chapter we shall present an abstract (axiomatic) version of the Lebesgue integral, relative to any countably additive measure on any set. (The precise definitions follow.) This abstract theory is not in any way more difficult than the special case of the real line; it shows that a large part of integration theory is independent of any geometry (or topology) of the underlying space; and, of course, it gives us a tool of much wider applicability. The existence of a large class of measures, among them that of Lebesgue, will be established in Chap. 2.
