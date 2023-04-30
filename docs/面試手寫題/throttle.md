# 節流

### TL;DR

- throttle 是指函式只會在一定時間內執行一次。
- 與 debounce（防抖）都是為了減少短時間內會重複觸發的函示次數，藉此優化效能。

### 什麼是節流

throttle 中文又稱為**節流**，顧名思義它會節約事件的發生，就算函式連續被呼叫，在一定時間內只會執行一次。

throttle 函式接收兩個參數

- `callback`：要執行的回調函式
- `delay`：要延遲的毫秒數

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
