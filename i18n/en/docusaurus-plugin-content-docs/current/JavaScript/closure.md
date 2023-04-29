# Closure

### TL;DR

- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- Closure is simply a function that returns another function. The returned function has access to the variables in the outer function's scope, even after the outer function has returned.
- Closures are often used in JavaScript for state persistence, memoization, private variables and curring.
- Closures create functions with private variables and methods that can maintain state, while classes define blueprints for creating objects in JavaScript.

### What is closure

According to the definition of [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Closures), a closure in JavaScript is a combination of a function and the lexical environment where the function was declared.

The lexical environment consists of any variables, functions, or other data that were in scope at the time the closure was created.

The closure retains a reference to this lexical environment, which allows it to access and manipulate the variables and functions within it, even after the outer function has returned.

```jsx
function outerFn() {
  const name = 'jordan';
  function innerFn() {
    console.log(name);
  }
  return innerFn;
}

// lexical environment of outerFn = variable name + function innerFn
// closure = innerFn + lexical environment of outerFn
const innerFn = outerFn();

// because closure retain a reference to the lexical environment of outerFn
// innerFn is able to access the name variable, even after the outer function has returned
innerFn(); // jordan
```

### Practical examples

1. **State Persistence**

   The `useState` function in React is implemented using closures. There is a simplified version of `useState` below.

   The `getState` and `setState` functions returned by `useState` remember the state variable from the outer scope, allowing them to modify and access it.

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

2. **Memoization**

   Caching mechanisms also utilize the characteristic of closures to remember the outer variables within an inner function.

   By storing the computed value in a cache object, the function can return the stored value without recomputing it when the same arguments are used in a subsequent function call.

   There is a simplified version of memoize function below, which can only accept primitive values as arguments.

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

3. **Private Variables**

   In JavaScript, there is no built-in support for private variables, but we can use closures to achieve similar functionality.

   Closures allows you to create private variables and functions that are not accessible from outside the outer function.

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

   // privateCounter variable is defined inside the outer function
   // The only way to access privateCounter is by using methods in returned object
   // There is no way to access the privateCounter variable directly from outside the function

   const counter1 = counter();
   counter1.increment();
   counter1.value(); // 1
   counter1.privateCounter; // undefined
   ```

4. **Currying**

   Currying is a technique in functional programming where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

   Closure is often used to implement currying in JavaScript.

   ```jsx
   const add = function (x) {
     return function (y) {
       return x + y;
     };
   };

   // Calls add function with an argument 1
   const incrementOne = add(1);

   // Calls the incrementOne function, this function always adds 1 to its argument
   incrementOne(2); // 3
   ```

### Closure vs. Class

Before the introduction of ES6 and the class keyword, JavaScript did not have built-in support for classes.

Object-oriented programming (OOP) in JavaScript was typically implemented using functions and closures.

```jsx
// Closure
function counter() {
  let count = 0;
  return {
    increment: () => count++,
  };
}

const counter1 = counter();
counter1.increment(); // 0
counter1.increment(); // 1
```

```jsx
// Class
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

Closure and classe are similar in that they both can be used to encapsulate state and behavior, but they are different concepts with different purposes:

- closure：**Closure can be used to encapsulate private variables and methods**。
- Class：**A class is a blueprint for creating objects with a specific set of properties and methods.**。

There is a difference between creating objects with closures and with classes.

In JavaScript, closure is created everytime a function is created. As a result, each instance has its own set of variables and methods, and they are not shared between instances.

In other hand, class creates a blueprint for creating object. When using class to create instances, they all share the same methods defined in the class

```jsx
// using closure to create instances
const counter1 = count();
const counter2 = count();

console.log(counter1.increment === counter2.increment); // false

// using class to create instances
const counter3 = new Count();
const counter4 = new Count();
console.log(counter3.increment === counter4.increment); // true
```

Reference:

1. [https://medium.com/@sustained_salmon_fly_484/javascript 的物件導向-closure-new-class-809e0970d566](https://medium.com/@sustained_salmon_fly_484/javascript%E7%9A%84%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-closure-new-class-809e0970d566)

2. [https://www.explainthis.io/en/interview-guides/javascript/what-is-closure](https://www.explainthis.io/en/interview-guides/javascript/what-is-closure)

3. [https://www.explainthis.io/zh-hant/interview-guides/javascript/what-is-closure](https://www.explainthis.io/zh-hant/interview-guides/javascript/what-is-closure)
