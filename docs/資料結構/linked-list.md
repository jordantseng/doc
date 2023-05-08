# Linked List

### 什麼是 Linked List

Linked List 是一種資料結構，由一連串的節點組成，每一個節點包含了**資料本身**以及**指向下一個節點的指標（pointer）**。

這些節點在記憶體中是分散儲存的，但由於彼此之間擁有連結，因此 Linked List 是一個有序的序列。

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d -> null
```

### 為什麼要使用 Linked List

陣列與 Linked List 的資料結構非常相似，那為什麼我們還需要 Linked List 呢 🤔

使用 Linked List 的主要原因是因為它的**插入**和**刪除**操作比較快速，不需要像陣列一樣重新分配大塊的連續記憶體空間。

Linked List 插入或刪除一個節點時，只需要將指標重新連接即可，時間複雜度為 O(1)。

陣列則需要在插入或刪除一個元素時，將該位置之後的所有元素進行位移，時間複雜度為 O(n)。

:::tip
在陣列末尾插入或刪除元素的時間複雜度為 O(1)，因為不需要移動其它元素。
:::

### 常用用語

在 Linked List 中，第一個節點我們經常稱為 `head`，而最後一個節點則稱為`tail`。

```jsx
//  head                 tail
//   a  ->  b  ->  c  ->  d  ->  null
```

### 基本遍歷方法

```jsx
// iterative
// Time: O(n)
// Space: O(1)
function traverse(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}
```

```jsx
// recursive
// Time: O(n)
// Space: O(n)
function traverse(head) {
  if (head === null) return;
  console.log(head.val);
  traverse(head.next);
}
```
