# Curry

### What is currying

Currying is a powerful technique in functional programming that transforms a function with multiple arguments into a sequence of functions.

```jsx
function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);
curriedSum(1)(2); // 3
curriedSum(1, 2); // 3
curriedSum()(1)(2); // 3
```

### Pratical Applications

**1. Reusable utility functions**

```jsx
const add = (a) => (b) => a + b;

const add1 = add(1);

console.log(add1(2)); // 3
console.log(add1(3)); // 5
```

**2. Event handling**

```jsx
const button = document.getElementById('button');
const handleButtonClick = (id) => (event) => console.log(`Button Id: ${id}, ${event}`);

button.addEventListener('click', handleButtonClick(3));
```

**3. Customizing API calls**

```jsx
const apiCall = (baseUrl) => (endPoint) => fetch(`${baseUrl}${endPoint}`);
const jsonPlaceholderApi = apiCall('https://jsonplaceholder.typicode.com');
const getUsers = jsonPlaceholderApi('/users');
```

**4. Functional composition**

```jsx
const compose = (f, g) => (x) => f(g(x));

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // 36
```

### Implementation

Given a function `fn`, return a curried version of that function.

```jsx
const fn = (a, b) => a + b;
const curriedFn = curry(fn);

curriedFn(1)(2); // 3
curriedFn(1, 2); // 3
curriedFn()(1)(2); // 3
```

### Approach

1. The `curry` function will return a new function called `curried`, which takes any number of arguments.
2. Check if the number of arguments in `curried` is greater than or equal to the number of arguments in the `fn` function.
3. If it is, then call the `fn` function and pass the arguments of curried to it.
4. If it is not, then return a new function that accepts other arguments and passes the arguments of curried along with them to the `curried` function.
5. Recursively call the `curried` function until the number of arguments is greater than or equal to the number of arguments in the `fn` function, then return the final result.

```jsx
function curry(fn) {
  // return a new function called curried, which takes any number of arguments
  return function curried(...args) {
    // Check if the number of arguments in curried is greater than
    // or equal to the number of arguments in the fn function
    if (args.length >= fn.length) {
      // If it is, then call the fn function and pass the arguments of curried to it
      return fn.apply(this, args);
    }

    // If it is not, then return a new function that accepts other arguments
    // and passes the arguments of curried along with them to the curried function
    return function (...otherArgs) {
      // Recursively call the curried function until the number of arguments is greater than
      // or equal to the number of arguments in the fn function
      return curried(...args, ...otherArgs);
    };
  };
}
```

### Implementation II

Given a function `fn`, return a curried version of that function.

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

Reference：

1. [https://leetcode.com/problems/curry/description/](https://leetcode.com/problems/curry/description/)
