# This

### TL;DR

- 全域環境：`this` 指向全域物件。
- 一般函式：`this` 指向全域物件。
- 物件方法：`this` 指向物件本身。
- 建構函式 / Class：`this` 指向物件實例。
- 事件監聽：`this` 指向綁定的 DOM 元素。
- 箭頭函式：沒有 `this`。
- call / apply / bind：`this` 指向任意指定的值。
- `this` 通常都與函式有關， 因此有個快速的判斷法：`this` 就是呼叫這個函式的物件。

### 什麼是 this

`this` 的值是在執行時決定的，意味著**不同的執行環境**、**不同的模式**和**不同的程式碼前後文**都會有不同的值。

**不同執行環境 / 執行模式：**

1. 在瀏覽器下，非嚴格模式， `this` 預設值為 `window`。

2. 在 node.js 下，非嚴格模式， `this` 預設值為 `global`。

3. 在嚴格模式下，不論執行環境 `this` 預設值皆為 `undefined`。

```jsx
'use strict';

function log() {
  console.log(this);
}

log(); // undefined
```

在**瀏覽器**下**非嚴格模式**，**不同的程式碼前後文：**

1. **全域環境**

   在全域環境下， `this` 指向全域物件 `window`。

   ```jsx
   console.log(this); // window
   ```

2. **一般函式**

   在一般函式內， `this` 指向全域物件 `window`。

   ```jsx
   function log() {
     console.log(this);
   }

   log(); // window
   ```

3. **物件的方法**

   當函式作為物件的方法時， `this` 會指向呼叫它的這個物件本身。

   ```jsx
   const foo = {
     value: 123,
     log() {
       console.log(this);
     },
   };

   foo.log(); // { foo: 123, log: [Function] }
   ```

4. **建構函式（Constructor function）/ Class**

   函式作為建構函式或 Class 的方法時， `this` 會指向由它們創造出來的實例（instance）。

   ```jsx
   function Foo(value) {
     this.value = value;
     this.log = function () {
       console.log(this);
     };
   }

   const foo = new Foo(123);

   foo.log(); // Foo { value: 123, log: [Function] }

   class Boo {
     constructor(value) {
       this.value = value;
     }
     log = function () {
       console.log(this);
     };
   }

   const boo = new Boo(456);

   boo.log(); // Boo { value: 456, log: [Function] }
   ```

5. **事件監聽**

   事件監聽函式的 `this` 會指向綁定監聽事件的 DOM 元素。

   ```jsx
   const input = document.getElementById('input');

   input.addEventListener('input', function () {
     console.log(this); // <input id="input" />
   });
   ```

6. **箭頭函式**

   一般來說，當函式被執行時都會建立一個自己的 `this` ，但由於箭頭函式沒有自己的 `this` ，它會透過作用域鏈（scope chain）去繼承其他作用域的 `this`。

   ```jsx
   const foo = () => this;
   console.log(foo() === window); // true
   ```

:::tip
要判斷 `this` 的值，就看這個函式怎麽被呼叫。

換句話說，`this` 就是呼叫這個函式的物件。
:::

### 指定 this 的值

由於 `this` 通常都是在函式內被使用，JavaScript 提供了三個函式的方法，讓我們來指定 `this` 的值。

1. **call**

   **function.call(thisArg, x, y, …)**：呼叫 `function(x, y, ...)` ，並將函式的 `this` 綁定為 `thisArg。`

   ```jsx
   function log(a, b) {
     console.log(this, a, b);
   }

   log.call(undefined, 'a', 'b'); // undefined 'a' 'b'
   log.call(null, 'a', 'b'); // null 'a' 'b'
   log.call('1', 'a', 'b'); // '1' 'a' 'b'
   log.call(1, 'a', 'b'); // 1 'a' 'b'
   log.call({}, 'a', 'b'); // {} 'a' 'b'
   log.call([], 'a', 'b'); // [] 'a' 'b'
   ```

2. **apply**

   **function.apply(thisArg, [x, y, …])**：呼叫 `function(x, y, ...)` ，並將函式的 `this` 綁定為 thisArg。

   apply 和 call 使用方法非常相似，唯一的差別只是 apply 代入的參數為陣列。

   ```jsx
   function log(a, b) {
     console.log(this, a, b);
   }

   log.apply(undefined, ['a', 'b']); // undefined 'a' 'b'
   log.apply(null, ['a', 'b']); // null 'a' 'b'
   log.apply('1', ['a', 'b']); // '1' 'a' 'b'
   log.apply(1, ['a', 'b']); // 1 'a' 'b'
   log.apply({}, ['a', 'b']); // {} 'a' 'b'
   log.apply([], ['a', 'b']); // [] 'a' 'b'
   ```

3. **bind**

   **function.bind(thisArg, x, y, …)**：回傳一個新函式，該函式被呼叫時，將新函式的 `this` 綁定為 thisArg。

   ```jsx
   function log(a, b) {
     console.log(this);
     return a + b;
   }

   const myLog = log.bind('jordan', 1, 2);

   log(); // window
   myLog(); // 'jordan'
   ```

### FAQ

1. **結果判讀**

   ```jsx
   var name = 'jordan1';

   function callName() {
     console.log(this.name);
   }

   const person = {
     name: 'jordan2',
     callName: callName,
     watch: {
       name: 'jordan3',
       callName: callName,
     },
   };

   person.callName();
   person.watch.callName();
   console.log(this.name);
   ```

   **Answer:**

   ```jsx
   person.callName(); // jordan2

   person.watch.callName(); // jordan3

   // 由於 name 是透過 var 宣告，name 會被綁定到全域物件 (window)
   this.name; // jordan1
   ```

2. **改寫以下程式碼，使其印出 ‘jordan’**

   ```jsx
   const person = {
     name: 'jordan',
     print() {
       setTimeout(function () {
         console.log(this.name);
       }, 1000);
     },
   };
   person.print();
   ```

   **Answer:**

   執行 `setTimeout` 的函式並不是物件的方法，只是單純的一般函式，函式在執行時會產生自己的 `this` ，並指向全域物件，因此需要特別去綁定 `this` 的值。

   ```jsx
   // 1. that
   const person = {
     name: 'jordan',
     print() {
       const that = this;
       setTimeout(function () {
         console.log(that.name);
       }, 1000);
     },
   };

   // 2. bind
   const person = {
     name: 'jordan',
     print() {
       setTimeout(
         function () {
           console.log(this.name);
         }.bind(person),
         1000,
       );
     },
   };

   // 3. arrow function
   const person = {
     name: 'jordan',
     print() {
       setTimeout(() => {
         console.log(this.name);
       }, 1000);
     },
   };
   ```

3. **將 `jordan.log` 印出來的 `this` 更改為 `null`**

   ```jsx
   class Person {
     constructor(name) {
       this.name = name;
     }
     log() {
       console.log(this);
     }
   }

   const jordan = new Person('jordan');
   ```

   **Answer:**

   ```jsx
   // 就算原本已經有this, 也依然可以被函式方法覆蓋掉
   jordan.log.apply(null); // null
   jordan.log.call(null); // null
   ```

參考來源:

1. [https://medium.com/starbugs/面試-前端工程師一定要會的-js-觀念題-中英對照之上篇-3b0a3feda14f](https://medium.com/starbugs/%E9%9D%A2%E8%A9%A6-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%83%E7%9A%84-js-%E8%A7%80%E5%BF%B5%E9%A1%8C-%E4%B8%AD%E8%8B%B1%E5%B0%8D%E7%85%A7%E4%B9%8B%E4%B8%8A%E7%AF%87-3b0a3feda14f)
2. [https://blog.techbridge.cc/2019/02/23/javascript-this/](https://blog.techbridge.cc/2019/02/23/javascript-this/)
3. [https://zhuanlan.zhihu.com/p/23804247](https://zhuanlan.zhihu.com/p/23804247)
4. [https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#the_this_problem](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#the_this_problem)
