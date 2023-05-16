# 防抖

### TL;DR

- 防抖與節流（Throttle）都是為了減少函式呼叫的次數，藉此優化效能。
- 防抖確保只有在事件連續觸發一定時間後，才會執行函式。

### 什麼是防抖（Debounce）

防抖是一個減少函式呼叫次數的技巧，確保只有在事件連續觸發一定時間後，才會執行函式。

防抖函式接收兩個參數

- `callback`：要執行的回調函式
- `delay`：要延遲的毫秒數

### 實際應用

防抖經常被應用在 TypeHead，來避免每打一個字就呼叫一次 API。當使用者停止打字，才在 `delay` 毫秒後呼叫一次 `callback`，減少 API 發送的次數。

### 實作

```jsx
function debounce(callback, delay) {
  let timerID;

  return function (...args) {
    // 若事件連續觸發，取消上一次的 timerID
    clearTimeout(timerID);

    // 給予新的 timerID
    timerID = setTimeout(() => {
      // 在 delay 秒後，呼叫 callback
      callback.apply(this, args);
    }, delay);
  };
}
```
