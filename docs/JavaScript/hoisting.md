# 提升

### TL;DR

- 提升就是**變數**和**函式宣告（function declaration）**被提升到作用域頂端的行為。
- 提升並不是真的移動程式碼，而是與 JavaScript 引擎編譯的過程有關。
- 編譯過程分為**創造階段**和**執行階段**，創造階段會建立記憶體位置給變數，而執行階段則會賦予值給變數。

### **什麼是提升 （hoisting）**

就語意來說，提升就是**變數**和**函式宣告（function declaration）**被提升到作用域頂端的行為。

不論透過 `var`、`let` 還是 `const` 宣告變數，都會有提升的行為。然而提升一詞可能會讓人誤以為程式碼移動了，實際上程式碼並不是真的被移動，而是與 JavaScript 引擎編譯的過程有關。

```jsx
// 實際上的程式碼
console.log(a);
var a = 1;

// JavaScript 編譯的程式碼
var a;
console.log(a);
a = 1;
```

### JavaScript 編譯過程

在 JavaScript 中，編譯過程有兩個階段：

1. **創造（creation）**：**逐行執行程式前**，JavaScript 引擎會先建立記憶體位置給**變數**和**函式宣告，**變數預設值為 `undefined`，而建立函式預設值為函式宣告本身。
2. **執行（execution）**：**逐行執行程式**，根據執行的程式碼進行給值。

以下方程式碼為例

```jsx
console.log(a); // undefined
var a = 1;

logName(); // jordan
function logName() {
  console.log('jordan');
}
```

JavaScript 編譯的過程為：

1. **創造階段：**

- 建立一個記憶體位置名為 `a`，預設值為 `undefined`。
- 建立一個記憶體位置名為 `logName`，預設值為 `logName` 函式宣告本身。

2. **執行階段：**

- 執行 `console.log(a)` 印出 `undefined`，因爲 `a` 預設值為 `undefined`。
- 執行 `var a = 1` 賦予變數 `a` 初始值 1。
- 執行`logName()`印出 jordan，因爲 `logName` 預設值為 `logName` 本身。

### 暫時性死區（Temporal Dead Zone）

不論透過 `var`、`let` 還是 `const`， 宣告變數都會有提升的行為，但是為什麼以下程式碼會報錯呢 🤔

```jsx
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 1;
```

這是由於**暫時性死區**的關係。

暫時性死區（Temporal Dead Zone，簡稱 TDZ）是在宣告變數和初始化該變數之間的區域，該區域中不能使用該變數，否則會拋出 `ReferenceError` 。

暫時性死區能夠避免變數被宣告前意外地被使用，從而減少代碼錯誤，增加程式碼的可靠性。

```jsx
console.log('Jordan');
console.log('John');
console.log(a);
// 以上為變數 a 的暫時性死區，該區域 a 不能夠被使用
const a = 1; // 直到 a 被初始化，a 才能被使用
```

:::note
`var` 的 TDZ 在執行階段一開始就結束了，而 `let` 和 `const` 的 TDZ 在變數初始化時結束。

所以將以上的程式碼改用 `var` 宣告，並不會拋出 `ReferenceError`。
:::

### `undefined` vs. not defined

- `undefined`：變數在宣告時沒有賦予值，則它會自動被賦予一個特殊值 `undefined`，代表該變數尚未有值。
- not defined：在當前作用域或任何父作用域中都沒有宣告過該變數，則它會被視為未定義，這將導致當嘗試訪問時出現 `ReferenceError` 錯誤。

```jsx
var a;

console.log(a); // undefined
console.log(b); // ReferenceError: a is not defined
```

### FAQ

1. **結果判讀**

   ```jsx
   let a = 1;
   {
     console.log(a);
     let a = 2;
   }
   ```

   **Answer：**

   由於 `let` 為 block scope，在創造階段會建立一個全域變數 `a` 的記憶體位置，也會建立一個 block `a` 的記憶體位置，在執行階段執行 `console.log(a)` 時，由於暫時性死區的關係，block `a` 尚未被給予初始值，因此會拋出 `Reference Error` 的錯誤。

2. **結果判讀**

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

   創造階段：

   1. 當變數和函數宣告使用相同的名稱時，函數宣告會優先於變數宣告。
   2. 建立函數 `logName` 的記憶體位置，預設值為函式宣告`logName` 本身。

   執行階段：

   1. 函數 logName 被重新賦值為`function () { console.log('jordan'); }`。

   2. 執行 logName()，並印出'jordan'。

參考來源：

1. [https://pjchender.blogspot.com/2015/12/javascript-hoisting.html](https://pjchender.blogspot.com/2015/12/javascript-hoisting.html)
2. [https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting](https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting)
