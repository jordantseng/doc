# 節流

### TL;DR

- 節流與防抖（Debounce）都是為了減少函式呼叫的次數，藉此優化效能。
- 節流確保函式只會在一定時間內執行一次。

### 什麼是節流（Throttle）

節流顧名思義它會節約事件的發生，就算函式連續被呼叫，也能確保在一定時間內只會執行一次。

節流函式接收兩個參數

- `callback`：要執行的回調函式
- `delay`：要延遲的毫秒數

### 實際應用

節流經常被應用在監聽滾動事件，舉例來說，要判斷使用者是否已經滑動到頁面的某處，當到達時會觸發一些動畫效果。因此，會透過監聽滾動事件時計算是否已到達該位置，但如果只要一滾動就計算會非常消耗性能，透過節流可以有效減少呼叫回調函式的次數。

### 實作

```jsx
function throttle(callback, delay) {
  let lastCallTime = 0;
  let timerID;

  return function (...args) {
    let timeDuration = Date.now() - lastCallTime;
    let remainingTime = delay - timeDuration;

    if (remainingTime <= 0) {
      callback.apply(this, args);
      lastCallTime = Date.now();
    } else {
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        callback.apply(this, args);
        lastCallTime = Date.now();
      }, remainingTime);
    }
  };
}
```
