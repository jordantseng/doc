# 函式方法

### Function.call

```jsx
Function.prototype.myCall = function (thisArg, ...args) {
  // 此執行環境的 this 會指向呼叫 myCall 的函式

  // 使用 symbol 建立唯一的 key，避免覆蓋 thisArg 的 key
  const symbol = Symbol();

  // 將 this 加入到 thisArg 上
  thisArg[symbol] = this;

  // 呼叫加入 thisArg 上的 this，並儲存其回傳值
  const output = thisArg[symbol](...args);

  // 因為我們改變了傳入的 thisArg，我們要把它恢復成原來的形狀
  delete thisArg[symbol];

  return output;
};
```

### Function.apply

```jsx
Function.prototype.myApply = function (thisArg, args = []) {
  return this.myCall(thisArg, ...args);
};
```

### Function.bind

```jsx
Function.prototype.myBind = function (thisArg, ...args) {
  // 使用箭頭函式是因為如果用一般函式會產生一個新的 this 指向全域物件
  // 由於箭頭函式沒有自己的 this，它會透過作用域鏈（scope chain）繼承 this，也就是呼叫 myBind 的函式
  return (...newArgs) => this.myApply(thisArg, [...args, ...newArgs]);
};
```
