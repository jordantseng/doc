# 柯里化

### 什麼是柯里化（Currying）

柯里化是 functional programming 的一項技術，它可以將擁有多個引數的函式轉換成函式序列。

```jsx
function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);
curriedSum(1)(2); // 3
curriedSum(1, 2); // 3
curriedSum()(1)(2); // 3
```

### 實際應用

**1. 可重複使用的功能函式**

```jsx
const add = (a) => (b) => a + b;

const add1 = add(1);

console.log(add1(2)); // 3
console.log(add1(3)); // 5
```

**2. 事件處理**

```jsx
const button = document.getElementById('button');
const handleButtonClick = (id) => (event) => console.log(`Button Id: ${id}, ${event}`);

button.addEventListener('click', handleButtonClick(3));
```

**3. 客製化 API**

```jsx
const apiCall = (baseUrl) => (endPoint) => fetch(`${baseUrl}${endPoint}`);
const jsonPlaceholderApi = apiCall('https://jsonplaceholder.typicode.com');
const getUsers = jsonPlaceholderApi('/users');
```

**4. 函式組合**

```jsx
const compose = (f, g) => (x) => f(g(x));

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // 36
```

### 實作 I

給定一個函式 `fn`，回傳該函式的柯里化版本。

```jsx
const fn = (a, b) => a + b;
const curriedFn = curry(fn);

curriedFn(1)(2); // 3
curriedFn(1, 2); // 3
curriedFn()(1)(2); // 3
```

### 思路

1. `curry` 函式將會回傳一個新的函式 `curried`，該函式接收任意數量的參數。
2. 檢查 `curried` 的參數數量是否大於或等於 `fn` 函式的參數數量。
3. 如果是，那麼呼叫 `fn` 函式並將 `curried` 的參數傳遞給它。
4. 如果不是，那麼回傳一個新的函式，該函式接收其他參數，並將 `curried` 的參數與它們傳入 `curried` 函式。
5. 遞迴呼叫 `curried` 函式，直到 `curried` 函式的參數數量大於或等於 `fn` 函式的參數數量，然後回傳最終的結果。

```jsx
function curry(fn) {
  // curry 函式將會回傳一個新的函式 curried，該函式接收任意數量的參數
  return function curried(...args) {
    // 檢查 curried 的參數數量是否大於或等於 fn 函式的參數數量
    if (args.length >= fn.length) {
      // 如果是，那麼呼叫 fn 函式並將 curried 的參數傳遞給它
      return fn.apply(this, args);
    }

    // 如果不是，那麼回傳一個新的函式，該函式接收其他參數，並將 curried 的參數與它們傳入 curried 函式
    return function (...otherArgs) {
      // 遞迴呼叫 curried 函式，直到 curried 函式的參數數量大於或等於 fn 函式的參數數量
      return curried(...args, ...otherArgs);
    };
  };
}
```

### 實作 II

給定一個函式 `fn`，回傳該函式的柯里化版本。

```jsx
const sum = (...args) => args.reduce((acc, val) => acc + val, 0);

const curriedSum = curry(sum);

console.log(curriedSum()); // 0
console.log(curriedSum(1)()); // 1
console.log(curriedSum(1)(2)()); // 3
```

```jsx
function curry(fn) {
  return function curried(...args) {
    if (args.length === 0) {
      return fn.apply(this);
    }

    return (...otherArgs) => {
      if (otherArgs.length === 0) {
        return fn.apply(this, args);
      }

      return curried.apply(this, [...args, ...otherArgs]);
    };
  };
}
```

### 實作 III

```jsx
console.log(add(5)()); // 5
console.log(add(5)(3)); // fn
console.log(add(5)(3)()); // 8
```

```jsx
function add(a) {
  return (b) => {
    if (b === undefined) {
      return a;
    }

    return add(a + b);
  };
}
```

參考來源：

1. [https://leetcode.com/problems/curry/description/](https://leetcode.com/problems/curry/description/)
