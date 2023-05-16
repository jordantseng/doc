# Graph

### 什麼是 Graph

Graph 是一種由節點（node）和邊（edge）組成的資料結構。

可分為有方向性（Directed Graph）和無方向性（Undirected Graph）的 graph。

![alt text](./Screenshot%202023-05-15%20at%2011.21.53%20PM.png)

表示 Graph 節點之間的關係時，經常使用鄰接表（Adjacency List）表示節點之間的關係。

```jsx
const directedGraph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b'],
  f: ['d'],
};

const undirectedGraph = {
  a: ['b', 'c'],
  b: ['a', 'e', 'd'],
  c: ['a', 'e'],
  d: ['b', 'f'],
  e: ['b', 'c'],
  f: ['d'],
};
```

### Directed Graph 遍歷演算法

#### DFS

- e = # of edges
- n = # of nodes
- Time：O(e)
- Space： O(n)

```jsx
// iterative
function dfs(graph, src) {
  const stack = [src];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
}
```

```jsx
// recursive
function dfs(graph, src) {
  console.log(src);
  for (const neighbor of graph[src]) {
    dfs(graph, neighbor);
  }
}
```

#### BFS

- e = # of edges
- n = # of nodes
- Time： O(e)
- Space： O(n)

```jsx
function bfs(graph, src) {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (const neighbor of graph[current]) {
      queue.push(graph, neighbor);
    }
  }
}
```

### Undirected Graph 遍歷演算法

#### DFS

- e = # of edges
- n = # of nodes
- Time： O(e)
- Space： O(n)

```jsx
// iterative
const dfs = (graph, src) => {
  const visited = new Set();
  const stack = [src];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    visited.add(current);
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }
};
```

```jsx
// recursive
function dfs(graph, src) {
  const visited = new Set();
  const findPath = (src) => {
    if (visited.has(src)) return;
    console.log(src);
    visited.add(src);
    for (const neighbor of graph[src]) {
      findPath(neighbor);
    }
  };
  return findPath(src);
}
```

#### BFS

- e = # of edges
- n = # of nodes
- Time： O(e)
- Space： O(n)

```jsx
const bfs = (graph, src) => {
  const visited = new Set();
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    visited.add(current);
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) queue.push(neighbor);
    }
  }
};
```

參考來源：

1. [https://structy.net/](https://structy.net/)
