---
title: Segment Tree
date: 2023-09-17
type: default
math: true
mermaid: true
---

In computer science, a segment tree, also known as a statistic tree, is a tree data structure used for storing information about intervals, or segments. It allows querying which of the stored segments contain a given point. It is, in principle, a static structure; that is, it's a structure that cannot be modified once it's built. A similar data structure is the interval tree.

**Space Complexity**: $ O(n\log n) $

**Time Complexity**:

  1. build the tree: $ O(n \log n) $
  2. query: $ O(\log n) $
  3. node update: $ O(\log n) $
  4. segment update with lazy: $ O(\log n) $

A segment tree is a binary tree, each node contains information for a segment of the original array. The value in the node segment tree is some attribute of the range. i.e. sum, min, max, gcd, etc.

An example of a segment tree. (attribute: sum)

``` mermaid
graph TD;
    A(10, 1-4) --> B(3, 1-2);
    A --> C(7, 3-4);
    B --> D(1, 1-1) ;
    B --> E(2, 2-2);
    C --> F(3, 3-3);
    C --> G(4, 4-4);
```

The root will contain the attribution for the whole array (range 1-4). The left and right subtrees contain the range(1-2) and range (3-4), and so on. The leaves are the original value of the array.


The node of the tree

The node of the tree contains the attribute we want to maintain and the left bound and right bound of the node (segment).

``` cpp
template <typename T>
class segment_tree_node {
public:
    T val;
    unsigned int left, right;
    segment_tree_node(){
        val = T(); // initial vlaue of the value
        left = right = 0; // initially left and right bound set to 0.
    }
    // create node with value, left bound, right bound.
    segment_tree_node(T _val, unsigned int _left, unsigned int _right) : val(_val), left(_left), right(_right) {}
};
```

## Build the tree

I use the recursive method to build the tree. I build a segment tree from the root. The value in the root can get from the left subtree and right subtree. So before setting the value for the root node, we need to build the left and right subtree.  When building the left subtree and right subtree with the same idea.

Following the code which builds the tree. The whole tree is stored in an array. Suppose the root is in index 1. Because a segment tree is a binary tree. So it has two subtrees. we can put the child of 1 in indexes 2 and 3.  Node 2 has 2 children so we need to put it in 4 and 5. Thus the children of node 3 will be in indexes 6 and 7. We can find the pattern, the index left tree of node is `node * 2 = node << 1`, the index of right tree of node is `node * 2 + 1 = node << 1 | 1`. When we build the tree, we also need the assign left bound and right bound to the node. The left bound and right bound can get from the parent segment. Because we are dividing the parent segment into two-part. So the bound of the left subtree is `l`, mid, the bound of the right subtree is `mid + 1`, r where the `l` and `r` are the bound of the current node and `mid = (l + r ) / 2` .

Because we are using the recursive method to build the tree, there is a terminal condition. The terminal condition is we arrive at the leaves. The condition to judge a leaf is the right boundary equals the left boundary ( `l == r` in the code).

``` cpp
void build(int root, int l, int r, vector<T> &arr) {
    if (l == r) {
        tree[root].val = arr[l];
        tree[root].left = tree[root].right = l;
        return;
    }
    int mid = (l + r) / 2;
    build(root << 1, l, mid, arr);
    build(root << 1 | 1, mid + 1, r, arr);
    tree[root].val = update_function(tree[root << 1].val, tree[root << 1 | 1].val);
    tree[root].left = l;
    tree[root].right = r;
}
```

## Update (node)

Update a node in the segment tree. We are using the recursive method to update the value. The root node definitely will affect the new node, because it needs information from the whole array. Since two subtree does not have an intersection, so only one subtree will affect by the new node. Thus we only update one of the subtree.

``` cpp
void update_node(int root, int l, int r, int i, T val) {
    if (l == r) {
        tree[root].val = val;
        return;
    }
    int mid = (l + r) / 2;
    if (i <= mid)
        update(root << 1, l, mid, i, val);
    else
        update(root << 1 | 1, mid + 1, r, i, val);
    tree[root] = update_function(tree[root << 1].val, tree[root << 1 | 1].val);
}
```
To update a single node in the tree. We need to set `l = 1` and `r = n`. 
`i` is the position we want to update and `val` is the new value of the node.

This update will update recursively from node to root.


## Update (segment with lazy)

If we want to update a segment of the tree. If we apply node update function. The time complexity will be $ O(n \log n) $ this will not be acceptable for most contest. We need lazy stratry to update the tree. Lazy update means the tree does not update untill query happens. You may wonder what is the query time complexity now. Luckly, lazy update will not change the time complexity of query operation. We can still query the segment with time complexity $ O (\log n) $.


Pending

## Query

The query aims to get information from the segment tree. A query segment can be composed of many segments in the segment tree. Still using the recursive method, when the inquiry range is larger than the tree node range we directly return the value, otherwise, we go to the subtree to find the value.

```cpp
    T query(int root, int l, int r) {
        if (l > tree[root].right || r < tree[root].left)
            return T();
        if (l <= tree[root].left && tree[root].right <= r) {
            return tree[root].val;
        }
        T left_val = query(root << 1 , l, r);
        T right_val = query(root << 1 | 1, l, r);
        return update_function(left_val, right_val);
    }
```

Problem Set

  1. [Codeforces Round #769 Problem D](https://codeforces.com/contest/1632/problem/D)
  2. [Codeforces Round #771 Problem E](https://codeforces.com/contest/1638/problem/E)
  3. [Codeforces Round #852 Problem F](https://codeforces.com/contest/1793/problem/F)
  4. [Codeforces Round #397 Problem F](https://codeforces.com/contest/765/problem/F)
