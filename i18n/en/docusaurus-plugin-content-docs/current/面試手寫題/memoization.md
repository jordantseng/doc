# Memoization

### What is Memoization

Memoization is an optimization technique.

It used to store the output of a function so that it can be directly returned from the cache when the function is called again with the same input parameters, without having to re-run the function.

### Implementation I

Implement a memoization mechanism that fulfills the following code.

```jsx
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
```

#### Approach

1. Initialize a cache object to store calculated value.
2. Convert the passed arguments into a string as key of cache object.
3. Check if the key already exists in the cache. If so, return the associated value immediately.
4. Otherwise, call the provided function, store the output in the cache, and return the output.

```jsx
function memoize(cb) {
  // Initialize a cache object to store calculated value
  const cache = {};

  // Create a closure that allows all subsequently called functions to access the same cache object
  return function (...args) {
    // Convert the passed arguments into a string as key of cache object
    const key = JSON.stringify(args);

    // Check if the key already exists in the cache
    if (key in cache) {
      // If so, return the associated value immediately
      return cache[key];
    }

    // Otherwise, call the provided function, store the output in the cache, and return the output
    const result = cb.apply(this, args);

    cache[key] = result;

    return result;
  };
}
```

### Implementation II

實作一個緩存機制，引數可以接受任何型別（Primitive + Reference）。

#### 思路

1. 建立一個 `TrieNode` 節點，每個節點包含一個子節點 `children`，以及用來儲存計算過的結果 `value` 。
2. 由於 `Map` 的 key 可以儲存字串以外的型別，因此如果傳入的引數為物件或陣列，可以用來判斷是否為同一個物件或陣列。
3. 每次函式被呼叫時，遍歷引數，並檢查 `children` 內是否有與引數相同的 key，如果沒有則建立新的節點，並更新目前的節點。
4. 檢查 `value` 是否有值，如有值，直接返回計算過的值，如果沒值，則透過該引數計算出結果並儲存在 `value`，然後回傳結果。

```jsx
class TrieNode {
  constructor() {
    this.children = new Map();
    this.value = null;
  }
}

function memoize(cb) {
  // 建立 TrieNode 用來儲存之前計算過的結果
  const cache = new TrieNode();

  // 建立閉包，讓接下來呼叫的函式都能取得相同 cache 物件
  return function (...args) {
    // 目前的節點
    let current = cache;

    // 遍歷引數，檢查 children 內是否有與引數相同的 key
    for (const arg of args) {
      // 如果沒有則建立新的節點
      if (!current.children.has(arg)) {
        current.children.set(arg, new TrieNode());
      }

      // 更新目前的節點
      current = current.children.get(arg);
    }

    // 檢查 value 是否有值
    // 如果沒值，則透過該引數計算出結果並儲存在 value
    if (current.value == null) {
      current.value = cb(...args);
    }

    // 回傳結果
    return current.value;
  };
}
```
