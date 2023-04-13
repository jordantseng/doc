# Debounce 實作

## TL;DR

- debounce 是指只有當事件在一定時間內沒有連續觸發時，函式才會執行。
- 與 throttle（節流）都是為了減少短時間內會重複觸發的函示次數，藉此優化效能。

### 什麼是防抖

debounce 中文又稱為**防抖**，只有當事件在一定時間內沒有連續觸發時，函式才會執行。

debounce 函式接收兩個參數

- `callback`：要執行的回調函式
- `delay`：要延遲的毫秒數

防抖經常被應用在 TypeHead，來避免每打一個字就呼叫一次 API。當使用者停止打字，才在`delay`毫秒後呼叫一次`callback`，減少 API 發送的次數。

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
