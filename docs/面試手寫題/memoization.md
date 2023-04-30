# 緩存機制

### 什麼是緩存（Memoization）

緩存是一種優化技術，用來緩存函式的輸出結果，以便在下一次使用相同的輸入參數調用該函式時，可以直接從緩存中返回已經計算過的結果，而不需要重新執行函式。

### 實作

實作一個緩存機制，引數只能是原始型別（Primitive）。

#### 思路

1. 建立一個物件儲存計算過的值。
2. 將引數作為物件的 key，結果為 value。
3. 每次函式被呼叫時，檢查物件內是否有與引數相同的 key。
4. 如果有，則直接回傳該 key 對應的值。如果沒有，則透過該引數計算出結果並儲存在在緩存物件中，然後回傳結果。

```jsx
function memoize(cb) {
  // 建立物件用來儲存之前計算過的結果
  const cache = {};

  // 建立閉包，讓接下來呼叫的函式都能取得相同 cache 物件
  return function (...args) {
    // 將引數作為緩存物件的值
    const key = JSON.stringify(args);

    // 檢查緩存物件內是否有與引數相同的 key
    if (key in cache) {
      // 如果有，則直接回傳該 key 對應的值
      return cache[key];
    }

    // 如果沒有，則透過該引數計算出結果
    const result = cb.apply(this, args);

    // 儲存在在緩存物件中
    cache[key] = result;

    // 回傳結果
    return result;
  };
}
```

### 進階實作

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
