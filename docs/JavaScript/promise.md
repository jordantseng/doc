# Promise

### TL;DR

- 使用 Promise 可以減少 callback hell，提高程式碼可讀性。
- Promise 是一個**等待非同步操作完成的物件，**Promise 只會處於 `pending` 、 `fulfilled` 、 `rejected` 其中一種狀態。

### 為什麼要使用 Promise

在了解什麼是 Promise 之前，我們需要先知道為什麼需要使用 Promise 🤔

在 ES6 以前，在 JavaScript 處理非同步的方式大多都是透過回調函式（callback）的寫法，但 callback 的寫法存在一個很大的問題，當需要處理多個異步操作時，程式碼會不斷往內嵌套，導致程可讀性非常差，也被稱為「callback 地獄」（callback hell）

```jsx
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

雖然還沒介紹什麼是 Promise，但是如果我們先把上面這段程式碼改寫成 Promise 寫法的話，兩者達成一樣的行為，但是可讀性大大的提升。

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

### 什麼是 Promise

Promise 是一個**等待非同步操作完成的物件**，當事件完成時，Promise 根據操作結果是成功、或者失敗，做相對應的處理動作。

Promise 只會處於下面三種狀態之一：

1.  `pending` - 初始狀態（進行中）
2.  `fulfilled` - 事件已完成
3.  `rejected` - 事件已失敗

**怎麼使用 Promise**

首先，我們使用 Promise 的**建構函式**，透過 `new` 建立一個 Promise 實例。

Promise 建構函式會接收一個函式作為參數，這個函式又稱為 executor，其又包含了兩個函式參數。

1. **resolve(value)**：如下方程式碼所示，當 randomNum 是偶數時，會呼叫 `resolve` 並回傳 isEven，Promise 被 `fulfilled` ，事件已完成。
2. **reject(error)**：如下方程式碼所示，當 randomNum 是奇數時，會呼叫 `reject` 並回傳 isOdd，Promise 被 `rejected` ，事件已失敗。

Promise 提供了三個主要的方法：

1. **then(fulfilledFn, rejectedFn)：**當 Promise 被 `fulfilled` 後，呼叫 fulfilledFn、當 Promise 被 `rejected` 後，呼叫 rejectedFn，兩者皆回傳一個新的`fulfilled` Promise。
2. **catch(rejectedFn)：**當 Promise 被 `rejected` 後，呼叫 rejectedFn，並回傳一個新的 `fulfilled` Promise。
3. **finally(callback)：**不論 Promise 被 `fulfilled` 或 `rejected` ，都會呼叫 callback，並回傳一個新的 `fulfilled` 或 `reject` 的 Promise。

```jsx
new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum % 2 === 0) {
      resolve('isEven');
    } else {
      reject('isOdd');
    }
  }, 1000);
})
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
```

### Promise.race(promises)

將多個 Promise 包裝成一個新的 Promise，並回傳**一個狀態最快改變**的結果。

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
    // p2 比 p1 狀態快改變（從 pending -> rejected），因此 0.1 秒後印出 2
  });
```

### Promise.any(promises)

將多個 Promise 包裝成一個新的 Promise，並回傳**一個狀態最快被 `fulfilled` **的結果， 如果全部 Promise 都被 `rejected` ，則回傳 [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)。

```jsx
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 100);
});

Promise.any([p1, p2]).then(function (value) {
  console.log(value);
  // p1 比 p2 狀態快從 pending -> fulfilled，因此 0.5 秒後印出 1
});
```

### Promise.all(promises)

將多個 Promise 包裝成一個新的 Promise，當**所有**的 Promise 被 `fulfilled` 後，回傳一個**陣列依序包含各 Promise `fulfilled` 後的值**。

```jsx
const p1 = Promise.resolve(1);
const p2 = 2;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000);
});

Promise.all([p1, p2, p3]).then(function (values) {
  console.log(values); // 1 秒後印出 [1, 2, 3]
});
```

但是只要當其中一個 Promise 狀態變成 `rejected`，則只回傳該 Promise 被 `rejected` 的值。

```jsx
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 1000);
});

Promise.all([p1, p2])
  .then(function (values) {
    console.log(values);
  })
  .catch((error) => {
    console.log(error); // 1 秒後印出 2
  });
```

### Promise.allSettled(promises)

將多個 Promise 包裝成一個新的 Promise，當**所有**的 Promise **狀態改變**後，回傳一個**陣列依序包含各 Promise 的狀態和值**。

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
  //   { status: 'rejected', reason: Error: 4 }
  // ]
});
```

### Promise.resolve(value)

將一個物件轉型為 `fulfilled` 的 Promise（如果它不是一個 Promise）。

### Promise.reject(reason)

將一個物件轉型為 `rejected` 的 Promise（如果它不是一個 Promise）。

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

   呼叫 Promise 建構函式，executor 將會被立即執行

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
   `then` 回傳的結果為 `fulfilled` 後的值

   ```jsx
   // then:  Error: error!!!
   ```

1. **實作 `Promise.race`**

   ```jsx
   Promise.myRace = function (promises) {
     return new Promise((resolve, reject) => {
       promises.forEach((promise) => {
         promise
           .then((val) => {
             resolve(val);
           })
           .catch((error) => {
             reject(error);
           });
       });
     });
   };
   ```

1. **實作 `Promise.any`**

   ```jsx
   Promise.myAny = function (promises) {
     return new Promise((resolve, reject) => {
       let count = 0;
       promises.forEach((promise) => {
         promise
           .then((val) => {
             resolve(val);
           })
           .catch(() => {
             count += 1;
           })
           .finally(() => {
             if (count === promises.length) reject('all promises rejected');
           });
       });
     });
   };
   ```

1. **實作 `Promise.all`**

   ```jsx
   Promise.myAll = function (promises) {
     return new Promise((resolve, reject) => {
       const output = [];
       let count = 0;
       promises.forEach((promise, index) => {
         promise
           .then((val) => {
             count += 1;
             output[index] = val;
           })
           .catch((error) => {
             reject(error);
           })
           .finally(() => {
             if (output.length === count) resolve(output);
           });
       });
     });
   };
   ```

1. **實作 `Promise.allSettled`**

   ```jsx
   Promise.myAllSettled = function (promises) {
     return new Promise((resolve) => {
       const output = [];
       let count = 0;
       promises.forEach((promise, index) => {
         promise
           .then((value) => {
             output[index] = {
               status: 'fulfilled',
               value,
             };
           })
           .catch((error) => {
             output[index] = {
               status: 'rejected',
               error,
             };
           })
           .finally(() => {
             count += 1;
             if (count === promises.length) {
               resolve(output);
             }
           });
       });
     });
   };
   ```

參考來源:

1.  [https://www.fooish.com/javascript/ES6/Promise.html](https://www.fooish.com/javascript/ES6/Promise.html)
