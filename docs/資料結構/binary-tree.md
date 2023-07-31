# Binary Tree

### 什麼是 Binary Tree

Binary Tree 是一種資料結構，中文稱為二元樹，由一連串的節點組成的樹，每一個節點最多只會有兩個子節點：左節點、右節點。每一個節點包含了**資料**以及**左右兩個子節點的参考**。

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.left = b;
a.right = c;
b.left = d;
b.right = e;

//      a
//    /   \
//   b     c
//  / \
// d   e
```

### 常用用語

在 Binary Tree 中，根節點經常稱為 `root`，連接節點與節點的路徑稱為 `edge`，而當節點沒有子節點時則稱為 `leaf`。

```jsx
//      a    <- root
//    /   \  <- edge
//   b     c <- edge
//  / \
// d   e
```

### 基本遍歷方法

**DFS Traversal**

```jsx
// iterative
// Time: O(n)
// Space: O(n)
function traverse(root) {
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    console.log(current.val);

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }
  }
}
```

```jsx
// recursive
// Time: O(n)
// Space: O(n)
function traverse(root) {
  if (root === null) {
    return;
  }

  console.log(root.val);

  traverse(root.left);

  traverse(root.right);
}
```

**BFS Traversal**

```jsx
// Time: O(n)
// Space: O(n)
function traverse(root) {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    console.log(current.val);

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }
}
```
