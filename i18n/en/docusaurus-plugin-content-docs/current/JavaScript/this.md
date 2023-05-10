# This

### TL;DR

- Global Environment：`this` refers to the global object.
- Standalone Function： `this` refers to the global object.
- Object Method： `this` refers to the object itself.
- Constructor Function / Class： `this` refers to the object instance.
- Event Listener： `this` refers to the DOM element.
- Arrow Function: There is no `this`.
- call / apply / bind： `this` refers to any specified value.
- `this` is usually related to functions, so a quick rule of thumb is that `this` refers to the object that called the function.

### What is `this`

The value of `this` is determined at runtime, and can vary based on the **execution environments**, **mode**, and **context**.

In different **modes** or **execution environments** ：

1. In non-strict mode in browser, the default value of `this` is `window` object.

2. In non-strict mode in Node.js, the default value of `this` is `global` object.

3. In strict mode, regardless of the execution environment, the default value of `this` is `undefined`.

```jsx
'use strict';

function log() {
  console.log(this);
}

log(); // undefined
```

In non-strict mode in browser, different **context**：

1. **Global Environment**

In the global environment, `this` refers to the global object `window`.

```jsx
console.log(this); // window
```

2. **Standalone Function**

   In a standalone function, `this` refers to the global object `window`.

   ```jsx
   function log() {
     console.log(this);
   }

   log(); // window
   ```

3. **Object Method**

   When a function is used as a method of an object, `this` refers to the object itself.

   ```jsx
   const foo = {
     value: 123,
     log() {
       console.log(this);
     },
   };

   foo.log(); // { foo: 123, log: [Function] }
   ```

4. **Constructor Function / Class**

   When a function is used as a constructor function or method of a class, `this` refers to the object instance.

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

5. **Event Listener**

   In an event listener function, `this` refers to the DOM element.

   ```jsx
   const input = document.getElementById('input');

   input.addEventListener('input', function () {
     console.log(this); // <input id="input" />
   });
   ```

6. **Arrow Function**

   In general, when a function is executed, it creates its own `this` value.

   However, arrow functions do not have their own `this` value, and they inherit the `this` value of their surrounding scope through the scope chain.

   ```jsx
   const foo = () => this;
   console.log(foo() === window); // true
   ```

:::tip
A quick way to determine the value of `this` is to look at how the function is called.

In other words, `this` is the object that calls the function.
:::

### Set the value of `this`

Since `this` is usually used inside functions, there are three methods to specify the value of `this`.

1. **call**

   **function.call(thisArg, x, y, …)**：Calls the `function(x, y, ...)` and binds the `this` of the function to `thisArg`.

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

   **function.apply(thisArg, [x, y, …])**：Calls the `function(x, y, ...)` and binds the `this` of the function to `thisArg`.

   `apply` method is similar to `call` method, the difference is that `apply` method takes an array as the second argument, which represents the arguments to pass to the function.

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

   **function.bind(thisArg, x, y, …)**： returns a new function that, when called, will have its `this` bound to `thisArg`.

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

1. **Determine the result**

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

   // Since name is declared using var, it is bound to the global object.
   this.name; // jordan1
   ```

2. **Rewrite the following code to print out 'jordan'**

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

   The function executed by setTimeout is not a method of an object, but just a regular function.

   When the function is executed, it creates its own `this` and points it to the global object. Therefore, we need to bind the value of `this` specifically.

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

3. **How to let `jordan.log()` print out `null`**

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
   jordan.log.apply(null); // null
   jordan.log.call(null); // null
   ```

Reference:

1. [https://medium.com/starbugs/面試-前端工程師一定要會的-js-觀念題-中英對照之上篇-3b0a3feda14f](https://medium.com/starbugs/%E9%9D%A2%E8%A9%A6-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%83%E7%9A%84-js-%E8%A7%80%E5%BF%B5%E9%A1%8C-%E4%B8%AD%E8%8B%B1%E5%B0%8D%E7%85%A7%E4%B9%8B%E4%B8%8A%E7%AF%87-3b0a3feda14f)
2. [https://blog.techbridge.cc/2019/02/23/javascript-this/](https://blog.techbridge.cc/2019/02/23/javascript-this/)
3. [https://zhuanlan.zhihu.com/p/23804247](https://zhuanlan.zhihu.com/p/23804247)
4. [https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#the_this_problem](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#the_this_problem)
