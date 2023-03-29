# closure

Created: September 7, 2021 12:18 PM

### TL;DR

- 閉包（Closure）是**函式以及該函式被宣告時所在的作用域環境（lexical environment）的組合**
- 由於 closure 就算**外部函式已經被執行，內部函式能夠取得該函式外部的變數**的特性，經常被應用在**狀態保存**、**緩存機制**、**模擬私有變數**以及**柯里化**
- closure 主要用來**封裝私有變數和方法；**Class 主要用來**建立一個建立物件的藍圖**

### 什麼是閉包 （closure）

A closure is a combination of a function and its lexical environment, or scope.

A closure is a function that has access to variables from its outer scope, even after the outer function has returned.

根據 [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Closures) 的定義，閉包（Closure）是**函式以及該函式被宣告時所在的作用域環境（lexical environment）的組合**

簡單來說，要形成閉包須將函式宣告在另一個函式當中，**內部函式能夠取得該函式外部的變數，就算外部函式已經被執行**

```jsx
function outterFn() {
  const name = 'jordan';
  function innerFn() {
    console.log(name);
  }
  return innerFn;
}

// 閉包 = innerFn + outterFn 的作用域環境 （紅色部分）
const innerFn = outterFn();

// 就算 outterFn 已經被執行，innerFn 仍能夠取得 name 參數
innerFn(); // jordan
```

### 閉包的實際應用

1. **狀態保存**

   React 中的 `useState` 就是透過 closure 的概念實作，以下為一個簡易版的  `useState` ，從下方程式碼可以發現，`getState`與`setState`  可以透過 closure 的特性，讓**內部函式記住外部的變數**，因此可以透過呼叫 `setState` 後，改變 state 的值，也可以透過 `getState`取得 state 最新的值

   ```jsx
   function useState(initialState) {
     let state = initialState;

     function getState() {
       return state;
     }

     function setState(updatedState) {
       state = updatedState;
     }

     return [getState, setState];
   }

   const [count, setCount] = useState(0);

   count(); // 0
   setCount(1);
   count(); // 1
   ```

2. **緩存機制 （memoization）**

   緩存機制也是透過 closure 讓**內部函式記住外部的變數**的特性，將計算過的值儲存在 cache 物件中，當下次使用相同的引數 （argument）呼叫時，就可以不用重新計算，直接取得已經儲存在 cache 物件的值

   ```jsx
   function memoize(cb) {
     const cache = {};
     return function (...args) {
       const key = JSON.stringify(args);
       if (key in cache) return cache[key];

       const result = cb.apply(this, args);
       cache[key] = result;
       return result;
     };
   }
   ```

3. **模擬私有變數**

   有時候我們在開發程式碼內部細節，並不想讓外部來獲取。JavaScript 並不支援私有變數，但我們可以透過閉包做出類似的功能

   ```jsx
   const counter = function () {
     let privateCounter = 0;

     return {
       increment() {
         privateCounter += 1;
       },
       decrement() {
         privateCounter -= 1;
       },
       value() {
         return privateCounter;
       },
     };
   };

   // privateCounter 無法被外部修改
   // 因為 closure 的關係 increment 與 decrement 可以存取到 privateCounter
   // 因此要修改 privateCounter 只能夠透過 increment 與 decrement

   const counter1 = counter();
   counter1.increment();
   counter1.value(); // 1
   counter1.privateCounter; // undefined
   ```

4. **柯里化**

   ```jsx
   const add = function (x) {
     return function (y) {
       return x + y;
     };
   };

   // 呼叫 add 函式並傳入引數 1
   // 呼叫 increment 函式，increment 函式能夠取得之前傳入的引數 1

   const increment = add(1);

   increment(2); // 3
   ```

### closure vs. Class

在 ES6 以前，JavaScript 還沒有 Class，我們如果要模擬 OOP 的行為，一般都是透過 closure 實作

```jsx
function counter() {
  let count = 0;
  return {
    increment: () => count++,
  };
}

const counter1 = counter();
counter1.increment(); // 0
counter1.increment(); // 1

class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    return this.count++;
  }
}

const counter2 = new Counter();
counter2.increment(); // 0
counter2.increment(); // 1
```

雖然 closure 和 Class 在封裝邏輯和私有變數有許多相似之處，但它們是不同的概念，有著不同的用

- closure：主要用來**封裝私有變數和方法**
- Class：主要用來**建立一個建立物件的藍圖**

closure 和 Class 還有一個很大的不同，Class 創造出來的實例每次呼叫都是同一個 Class 方法，而透過 closure 建立的實例每次都是回傳一個全新的物件，因此每次實例呼叫的都是不同的方法

```jsx
const counter1 = count();
const counter2 = count();

console.log(counter1.increment === counter2.increment); // false

const counter3 = new Count();
const counter4 = new Count();
console.log(counter3.increment === counter4.increment); // true
```

參考來源:

[https://medium.com/@sustained_salmon_fly_484/javascript 的物件導向-closure-new-class-809e0970d566](https://medium.com/@sustained_salmon_fly_484/javascript%E7%9A%84%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-closure-new-class-809e0970d566)

[https://www.explainthis.io/en/interview-guides/javascript/what-is-closure](https://www.explainthis.io/en/interview-guides/javascript/what-is-closure)

[https://www.explainthis.io/zh-hant/interview-guides/javascript/what-is-closure](https://www.explainthis.io/zh-hant/interview-guides/javascript/what-is-closure)
