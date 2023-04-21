# 提升

### **什麼是提升 （hoisting）**

就語意來說，提升就是**變數**和**函式宣告（function declaration）**會被提升到作用域的頂端的行為。

```jsx
// 實際上的程式碼
console.log(a);
var a = 1;

// 提升後的程式碼
var a;
console.log(a);
a = 1;
```

不論透過 `var`、`let` 還是 `const` 宣告變數，都會有提升的行為。然而提升一詞可能會讓人誤以為程式碼移動了，實際上程式碼並不是真的被移動，而是與 JavaScript 引擎編譯的過程有關。

### JavaScript 編譯過程

編譯過程主要可以分成兩個階段：

1. **創造（creation）**：**逐行執行程式前**，JavaScript 引擎會先建立記憶體位置給**變數**和**函式宣告，**需要注意的是建立變數記憶體位置時預設值為 `undefined`，而建立函式宣告記憶體位置時，預設值為函式宣告本身**。**
2. **執行（execution）**：**逐行執行程式時**，根據執行的程式碼進行給值。

以下方程式碼為例，JavaScript 編譯的過程為：

```jsx
console.log(a); // undefined
var a = 1;

logName(); // jordan
function logName() {
  console.log('jordan');
}
```

1. **創造階段：**

- 建立一個記憶體位置名為 a，並給予預設值 `undefined`。
- 建立一個記憶體位置名為 logName，並給予預設值 `logName` 函式宣告本身。

2. **執行階段：**

- 執行第一行 `console.log(a)` 印出 `undefined`，因爲 a 在記憶體位置已經有預設值 `undefined`。
- 執行第二行 `var a = 1` 賦予變數 `a` 初始值 1。
- 執行第三行`logName()`印出 jordan，因爲 `logName` 在記憶體位置已經有預設值 `logName`本身。

### 常見問題

1. **結果判讀**

   ```jsx
   b();
   console.log(a);

   function b() {
     console.log('b');
   }
   ```

   **Answer：**

   undefined 和 not defined 是不一樣的，undefined 是一個值，not defined 則是沒有定義過這個變數。

   ```jsx
   // b
   // ReferenceError: a is not defined
   ```

2. **結果判讀**

   ```jsx
   let a = 1;
   {
     console.log(a);
     let a = 2;
   }
   ```

   **Answer：**

   由於 `let` 為 block scope，在創造階段，會建立一個全域變數 `a` 的記憶體位置，也會建立一個 block `a` 的記憶體位置，在執行階段執行 `console.log(a)` 時，由於暫時性死區的關係，block `a` 尚未被給予初始值，因此會拋出 Reference Error 的錯誤。

3. **結果判讀**

   ```jsx
   var logName = function () {
     console.log('jordan');
   };

   function logName() {
     console.log('john');
   }

   logName();
   ```

   **Answer：**

   在瀏覽器的情況下

   創造階段：

   1. 建立變數 `logName` 的記憶體位置，並賦予預設值 `undefined` 。
   2. 建立函數 `logName` 的記憶體位置，並賦予預設值 `logName` 本身。

   執行階段：

   1. 賦予記憶體位置 `logName` 初始值 `function () { console.log('jordan'); }`
   2. 執行 `logName()` 並印出 `jordan`

參考來源：

1. [https://pjchender.blogspot.com/2015/12/javascript-hoisting.html](https://pjchender.blogspot.com/2015/12/javascript-hoisting.html)
2. [https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting](https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting)
