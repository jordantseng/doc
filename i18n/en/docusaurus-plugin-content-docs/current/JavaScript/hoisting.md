# Hoisting

### TL;DR

- **Variable** and **function declarations** are "hoisted" to the top of their respective scope.
- Hoisting doesn't actually move the code, but is related to the compilation process of the JavaScript engine.
- The compilation process is divided into a **creation phase** and an **execution phase**. During the creation phase, memory locations are created for variables, while during the execution phase, values are assigned.

### What is hoisting

In JavaScript, hoisting refers to the behavior of variables and function declarations being lifted to the top of their scope.

Variable declarations using `var`, `let`, or `const` are all hoisted.

However, the term "hoisting" can be misleading, as it implies that the code is physically moved, when in reality it's a part of the compilation process.

```jsx
// actual code
console.log(a);
var a = 1;

// interpreted by the JavaScript engine as
var a;
console.log(a);
a = 1;
```

### Compilation Process

In JavaScript, the compilation process can be divided into two phases：

1. **Creation**：The JavaScript engine creates memory space for variables and function declarations. For variables, the default value is `undefined`, while for function declarations, the default value is the function itself.
2. **Execution**：The program is executed line by line, and values are assigned based on the executed code.

Taking the following code as an example：

```jsx
console.log(a); // undefined
var a = 1;

logName(); // jordan
function logName() {
  console.log('jordan');
}
```

The JavaScript compilation process is as follows：

1. **Creation**

- A memory location named `a` is created, with a default value of `undefined`.
- A memory location named `logName` is created, with a default value of the `logName` function declaration itself.

2. **Execution**：

- `console.log(a)` is executed, outputting `undefined`, because the default value of a is `undefined`.
- `var a = 1` is executed, assigning an initial value of 1 to the variable `a`.
- `logName()` is executed, outputting "jordan", because the default value of `logName` is the logName function declaration itself.

### Temporal Dead Zone

In JavaScript, variables are hoisted regardless of whether they are declared with `var`, `let`, or `const`.

However, why does the following code throw an error 🤔

```jsx
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 1;
```

This is due to the concept of **Temporal Dead Zone** （TDZ） in JavaScript.

The Temporal Dead Zone is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

During the TDZ, any attempt to access the variable will result in a `ReferenceError`.

The TDZ can prevent variables from being accidentally used before they are declared, thereby reducing code errors and increasing code reliability.

```jsx
console.log('Jordan');
console.log('John');
console.log(a);
// the above is the TDZ for variable a, which cannot be accessed
const a = 1; // The TDZ of let and const ends when the variable is initialized
```

:::note
The TDZ of `let` and `const` ends when the variable is initialized.

The TDZ of `var` ends at the beginning of the execution phase.
:::

In this example code, it will not throw a `ReferenceError` because the variable `a` is declared by `var`.

```jsx
// The TDZ of `var` ends at the beginning of the execution phase
console.log('Jordan');
console.log('John');
console.log(a);
var a = 1;
```

### `undefined` vs. not defined

- `undefined`：A primitive value that is automatically assigned to variables during that have been declared but have not been initialized with a value.
- not defined：A variable that has not been declared in the current scope or in any parent scope. This will result in a `ReferenceError` when trying to access it.

```jsx
var a;

console.log(a); // undefined
console.log(b); // ReferenceError: a is not defined
```

### FAQ

1. **Determine the result**

   ```jsx
   let a = 1;
   {
     console.log(a);
     let a = 2;
   }
   ```

   **Answer：**

   The result of the code will be a `ReferenceError` because of the concept of temporal dead zone (TDZ) in JavaScript.

   In the creation phase, memory space is created for the global variable `a` and a local variable `a` inside the block.

   During the execution phase, when `console.log(a)` is executed inside the block, the local variable `a` is in the TDZ as it has not been initialized yet. Therefore, trying to access `a` at this point will result in a `ReferenceError`.

2. **Determine the result**

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

   **Creation**：

   1. When both variable and function declaration use the same name, the function declaration takes priority over the variable declaration.
   2. Create memory space for the function `logName` with a default value of `logName` itself.

   **Execution**：

   1. The function `logName` is reassigned to `function () { console.log('jordan'); }`.

   2. Execute `logName()` and print out 'jordan'.

Reference：

1. [https://pjchender.blogspot.com/2015/12/javascript-hoisting.html](https://pjchender.blogspot.com/2015/12/javascript-hoisting.html)
2. [https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting](https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting)
