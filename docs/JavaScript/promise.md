# Promise

### TL;DR

- Promise 是一個**等待非同步操作完成的物件**。
- Promise 只會處於 `pending` 、 `fulfilled` 、 `rejected` 其中一種狀態。
- 使用 Promise 可以減少 callback hell，提高程式碼可讀性。

### 什麼是 Promise

Promise 是一個**等待非同步操作完成的物件**，當事件完成後，根據操作做相對應的處理。它讓開發人員撰寫非同步程式碼時，看起來更像同步程式碼，使程式碼更容易理解與維護。

Promise 只會處於以下三種狀態之一：

1.  `pending` - 初始狀態（進行中）。
2.  `fulfilled` - 事件已完成。
3.  `rejected` - 事件已失敗。

#### 如何建立 Promise

Promise 可以使用 `Promise` 建構函式來建立，該建構函式需要一個函式作為參數，稱為 **executor** 函式，用於定義異步操作。

**executor** 函式有兩個回調函式作為參數：

1. `resolve(value)`：當被呼叫時，該函式會將 Promise 改為 fulfilled 狀態並傳入一個值。
2. `reject(error)`：當被呼叫時，該函式會將 Promise 改為 rejected 狀態並傳入一個錯誤訊息。

Promise 可以使用以下的方法，定義一系列相互依賴的異步操作：

1. `then(fulfilledFn, rejectedFn)：` 當 Promise 被 fulfilled 後，呼叫 fulfilledFn；當 Promise 被 rejected 後，呼叫 rejectedFn，最後回傳一個新的 fulfilled Promise。
2. `catch(rejectedFn)：` 當 Promise 被 rejected 後，呼叫 rejectedFn，回傳一個新的 fulfilled Promise。
3. `finally(callback)：` 不論 Promise 被 fulfilled 或 rejected，都會呼叫 callback，並回傳一個新的 fulfilled 或 rejected 的 Promise。

```js
const promise = new Promise(executor);

function executor(resolve, reject) {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum % 2 === 0) {
      resolve('isEven');
    } else {
      reject('isOdd');
    }
  }, 1000);
}

promise
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 1 秒後, 如果 randomNum 是偶數 => 'isEven' 'finally'
// 1 秒後, 如果 randomNum 是奇數 => 'isOdd' 'finally'
```

### 為什麼要使用 Promise

在 ES6 以前，JavaScript 處理異步的方式大多都是透過回調函式，但當需要處理多個異步操作時，回調函式的寫法會不斷往內嵌套，導致可讀性非常差，也被稱為 callback hell。

```js
const waitOneSecond = (cb) => {
  setTimeout(() => {
    cb();
  }, 1000);
};

// 程式碼不斷往內嵌套，可讀性不佳
waitOneSecond(() => {
  console.log('1 sec passed');
  waitOneSecond(() => {
    console.log('2 sec passed');
    waitOneSecond(() => {
      console.log('3 sec passed');
    });
  });
});
```

如果把上面這段程式碼改寫成 Promise 的話，可讀性將會大大的提升。

```jsx
const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

// 程式碼維持一層嵌套，較容易閱讀
waitOneSecond()
  .then(() => {
    console.log('1 sec passed');
    return waitOneSecond();
  })
  .then(() => {
    console.log('2 sec passed');
    return waitOneSecond();
  })
  .then(() => {
    console.log('3 sec passed');
  });
```

### Promise.race(promises)

`Promise.race` 接受一個 Promise 陣列作為引數，並回傳一個新的 Promise。

新的 Promise 會返回**第一個狀態改變** (fulfilled 或 rejected) 的結果。

```jsx
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 100);
});

Promise.race([p1, p2])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
    // 0.1 秒後，p2 比 p1 狀態快改變（ pending -> rejected ），印出 2
  });
```

### Promise.any(promises)

`Promise.any` 接受一個 Promise 陣列作為引數，並回傳一個新的 Promise。

新的 Promise 會返回**第一個狀態被 fulfilled** 的結果。 如果全部 Promise 都被 rejected ，則返回 [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 100);
});

Promise.any([p1, p2]).then(function (value) {
  console.log(value);
  // 0.5 秒後，p1 狀態 fulfilled，印出 1
});
```

### Promise.all(promises)

`Promise.all` 接受一個 Promise 陣列作為引數，並回傳一個新的 Promise。

當**所有**的 Promise 被 fulfilled，新的 Promise 會返回一個**陣列**，依序為 fulfilled 的結果。

```js
const p1 = Promise.resolve(1);
const p2 = 2;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000);
});

Promise.all([p1, p2, p3]).then(function (values) {
  console.log(values); // 1 秒後印出 [1, 2, 3]
});
```

當陣列中其中一個 Promise 被 rejected 後，新的 Promise 就會立即返回該 rejected 的結果。

```js
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 1000);
});

Promise.all([p1, p2])
  .then(function (values) {
    console.log(values);
  })
  .catch((error) => {
    console.log(error); // 1 秒後，p2 狀態 rejected，印出 2
  });
```

### Promise.allSettled(promises)

`Promise.allSettled` 接受一個 Promise 陣列作為引數，並回傳一個新的 Promise。

當陣列中所有的 Promise 狀態都改變，則回傳一個物件陣列，其中每個物件包含狀態和對應的值。

- `status`：表示 Promise 的狀態，可以是 fulfilled 或 rejected。
- `value` 或 `reason`：Promise fulfilled 的結果或 rejected 的原因。

```jsx
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const p3 = 3;
const p4 = Promise.reject(4);

Promise.allSettled([p1, p2, p3, p4]).then((values) => {
  console.log(values);
  // 1 秒後印出
  // [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'rejected', reason: 4 }
  // ]
});
```

### Promise.resolve(value)

將一個值轉型為 fulfilled 的 Promise。

```jsx
const promise = Promise.resolve('Hello World');
promise.then((value) => {
  console.log(value); // Hello World
});
```

### Promise.reject(reason)

將一個值轉型為 `rejected` 的 Promise。

```jsx
const promise = Promise.reject('Hello World');
promise.catch((reason) => {
  console.log(reason); // Hello World
});
```

### 常見問題

1. **結果判讀**

   ```jsx
   const promise = new Promise((resolve, reject) => {
     console.log(1);
     resolve();
     console.log(2);
   });

   promise.then(() => {
     console.log(3);
   });

   console.log(4);
   ```

   **Answer:**

   呼叫 Promise 建構函式，executor 將會被立即執行。

   ```jsx
   // 1
   // 2
   // 4
   // 3
   ```

1. **結果判讀**

   ```jsx
   Promise.resolve()
     .then(() => {
       return new Error('error!!!');
     })
     .then((res) => {
       console.log('then: ', res);
     })
     .catch((err) => {
       console.log('catch: ', err);
     });
   ```

   **Answer:**

   `then` 回傳的結果為 `fulfilled` 後的值。

   ```jsx
   // then:  Error: error!!!
   ```

   如果想要讓 Promise 被 rejected 並進入 catch 區塊，則需要在第一個 then 的回調函式中明確地 throw Error 物件。

   ```jsx
   Promise.resolve()
     .then(() => {
       throw new Error('error!!!');
     })
     .then((res) => {
       console.log('then: ', res);
     })
     .catch((err) => {
       console.log('catch: ', err);
     });
   ```

參考來源：

1.  [https://www.fooish.com/javascript/ES6/Promise.html](https://www.fooish.com/javascript/ES6/Promise.html)
