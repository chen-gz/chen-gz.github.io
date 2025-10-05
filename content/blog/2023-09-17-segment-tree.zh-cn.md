---
title: 线段树
date: 2023-09-17
type: default
math: true
mermaid: true
---

在计算机科学中，线段树（Segment Tree），也称为统计树，是一种用于存储区间或线段信息的树形数据结构。它允许查询哪些存储的线段包含一个给定的点。原则上，它是一个静态结构；也就是说，一旦构建就无法修改。一种类似的数据结构是区间树。

**空间复杂度**: $O(n)$

**时间复杂度**:

  1. 建树: $O(n)$
  2. 查询: $O(\log n)$
  3. 单点更新: $O(\log n)$
  4. 区间更新（使用懒惰标记）: $O(\log n)$

线段树是一棵二叉树，每个节点存储原始数组中一个区间的信息。线段树节点中的值是该区间的某种属性，例如，和、最小值、最大值、最大公约数等。

一个线段树的例子。（属性：和）

``` mermaid
graph TD;
    A(10, 1-4) --> B(3, 1-2);
    A --> C(7, 3-4);
    B --> D(1, 1-1) ;
    B --> E(2, 2-2);
    C --> F(3, 3-3);
    C --> G(4, 4-4);
```

根节点将包含整个数组（范围1-4）的属性。左子树和右子树分别包含范围(1-2)和范围(3-4)，依此类推。叶子节点是原始数组的值。

### 树的节点

树的节点包含我们想要维护的属性以及该节点（线段）的左右边界。

``` cpp
template <typename T>
class segment_tree_node {
public:
    T val;
    unsigned int left, right;
    segment_tree_node(){
        val = T(); // 值的初始值
        left = right = 0; // 初始左右边界设为0
    }
    // 使用值、左边界、右边界创建节点
    segment_tree_node(T _val, unsigned int _left, unsigned int _right) : val(_val), left(_left), right(_right) {}
};
```

## 建树

我使用递归的方法从根节点开始建树。根节点的值由其左右子树派生而来。因此，在设置根节点的值之前，我们需要递归地构建左右子树。

下面的代码构建了这棵树。整棵树存储在一个数组中。假设根节点在索引1处。因为线段树是一棵二叉树，所以它有两个子树。我们可以将节点1的子节点放在索引2和3处。节点2有两个子节点，所以我们将它们放在索引4和5处。节点3的子节点将位于索引6和7处。我们可以发现一个规律：一个节点的左子节点的索引是 `node * 2`（或 `node << 1`），右子节点的索引是 `node * 2 + 1`（或 `node << 1 | 1`）。在建树时，我们还需要为节点分配左右边界。左右边界可以从父节点的线段派生。我们将父线段分成两部分。左子树的边界是 `[l, mid]`，右子树的边界是 `[mid + 1, r]`，其中 `l` 和 `r` 是当前节点的边界，而 `mid = (l + r) / 2`。

因为我们使用递归方法建树，所以需要一个终止条件。终止条件是我们到达了叶子节点。识别叶子节点的条件是右边界等于左边界（在代码中为 `l == r`）。

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

## 更新 (单点)

更新线段树中的一个节点。我们使用递归方法来更新值。根节点肯定会受到新节点的影响，因为它需要整个数组的信息。由于两个子树没有交集，只有一个子树会受到新节点的影响。因此，我们只更新其中一个子树。

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
要更新树中的单个节点，我们需要设置 `l = 1` 和 `r = n`。`i` 是我们想要更新的位置，`val` 是节点的新值。

此更新将从节点递归更新到根节点。

## 更新 (区间更新与懒惰标记)

如果我们想要更新树的一个区间（例如，将一个值加到范围 `[L, R]` 内的所有元素上），对每个元素应用单点更新函数会太慢，导致时间复杂度为 $O((R-L) \log n)$。对于大范围，这接近 $O(n \log n)$，这在大多数情况下是不可接受的。

为了高效地处理这个问题，我们使用一种称为**懒惰传播**（lazy propagation）的技术。其核心思想是尽可能地延迟对节点的更新。我们不是立即将更新传播到所有受影响的叶子节点，而是将待处理的更新存储在一个“懒惰标记”中，这个标记位于一个更高级别的节点上。只有当我们需要访问其子树时（无论是为了查询还是为了更具体的更新），这个标记才会被“下推”到其子节点。

### 懒惰传播如何工作

1.  **懒惰标记：** 我们为线段树中的每个节点添加一个额外的 `lazy` 字段。`lazy[node]` 存储了 `node` 所代表的线段的待处理更新。对于区间加法操作，此标记将存储要添加的值。

2.  **下推操作：** 在遍历到一个节点的子节点之前，我们必须应用其待处理的更新。`push_down` 函数执行此操作：
    -   如果一个节点有一个非中性的懒惰标记，则将其更新应用到其直接子节点。这包括更新它们的 `val` 和它们的 `lazy` 标记。
    -   传播更新后，清除当前节点的懒惰标记。

    ```cpp
    void push_down(int root, int len) {
        if (lazy[root] != 0) {
            // 更新子节点的懒惰标记
            lazy[root << 1] += lazy[root];
            lazy[root << 1 | 1] += lazy[root];
            // 更新子节点的值
            tree[root << 1].val += lazy[root] * (len - (len / 2));
            tree[root << 1 | 1].val += lazy[root] * (len / 2);
            // 清除当前节点的懒惰标记
            lazy[root] = 0;
        }
    }
    ```

3.  **区间更新操作：**
    -   当更新一个范围 `[L, R]` 时，我们遍历树。
    -   如果一个节点的范围完全包含在 `[L, R]` 内，我们更新其懒惰标记和其值，然后停止。我们不再进一步递归。
    -   如果一个节点的范围与 `[L, R]` 部分重叠，我们首先 `push_down` 其懒惰标记，然后在子节点上递归。递归调用返回后，我们根据其子节点的新值更新该节点的值。

    ```cpp
    void update_segment(int root, int l, int r, int update_l, int update_r, T val) {
        if (update_l <= l && r <= update_r) {
            tree[root].val += (r - l + 1) * val;
            lazy[root] += val;
            return;
        }
        push_down(root, r - l + 1);
        int mid = (l + r) / 2;
        if (update_l <= mid) {
            update_segment(root << 1, l, mid, update_l, update_r, val);
        }
        if (update_r > mid) {
            update_segment(root << 1 | 1, mid + 1, r, update_l, update_r, val);
        }
        tree[root].val = update_function(tree[root << 1].val, tree[root << 1 | 1].val);
    }
    ```

4.  **带懒惰传播的查询：** 查询操作与标准查询类似，但有一个关键的补充：在递归到节点的子节点之前，我们必须始终对当前节点调用 `push_down`，以确保应用了所有待处理的更新。

    ```cpp
    T query(int root, int l, int r, int query_l, int query_r) {
        if (query_l <= l && r <= query_r) {
            return tree[root].val;
        }
        push_down(root, r - l + 1);
        int mid = (l + r) / 2;
        T res = T(); // 中性元素
        if (query_l <= mid) {
            res = update_function(res, query(root << 1, l, mid, query_l, query_r));
        }
        if (query_r > mid) {
            res = update_function(res, query(root << 1 | 1, mid + 1, r, query_l, query_r));
        }
        return res;
    }
    ```

通过懒惰传播，区间更新和区间查询都可以在 $O(\log n)$ 时间内完成。

## 查询

查询旨在从线段树中获取信息。一个查询区间可以由线段树中的许多区间组成。仍然使用递归方法，当查询范围完全覆盖树节点的范围时，我们直接返回值；否则，我们去子树中寻找值。

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

### 问题集

  1. [Codeforces Round #769 Problem D](https://codeforces.com/contest/1632/problem/D)
  2. [Codeforces Round #771 Problem E](https://codeforces.com/contest/1638/problem/E)
  3. [Codeforces Round #852 Problem F](https://codeforces.com/contest/1793/problem/F)
  4. [Codeforces Round #397 Problem F](https://codeforces.com/contest/765/problem/F)