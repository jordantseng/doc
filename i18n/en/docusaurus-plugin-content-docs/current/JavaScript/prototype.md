# Prototype

### TL;DR

- Prototypes are like parents, objects are like children, and just as children inherit genes from their parents, objects inherit properties and methods from their prototypes.
- Use the `__proto__` property or the `Object.getPrototypeOf()` method to get an object's prototype.
- A constructor function is a type of function used to create objects when called with the `new` keyword.
- `__proto__` is a property of objects that points to their prototype, while `prototype` is a property of functions that is used to define the properties and methods inherited by objects created with that function.

### What is prototype

In JavaScript, every object has a prototype, which is a reference to another object that the current object inherits properties and methods from.

The properties and methods defined on the prototype can be accessed and used by the object.

:::tip
Prototypes are like parents, objects are like children.

Just as children inherit genes from their parents, objects inherit properties and methods from their prototypes.
:::

### What is prototype chain

When accessing an object's property or method, JavaScript engine first looks for it in the object itself.

If it's not found there, it searches for it on the object's prototype, so on and so forth, until the end of the prototype chain is reached （which is when the prototype is `null`）.

This path of searching is called the **prototype chain**.

### How to get the object's prototype

Every object has a hidden property called `[[Prototype]]` which points to its prototype.

However, since `[[Prototype]]` cannot be directly accessed, it can be accessed through `__proto__` or `Object.getPrototypeOf()`.

```jsx
const person = {
  isHuman: true,
};

// create a new object and set person object as its prototype
const jordan = Object.create(person);

console.log(jordan.__proto__); // { isHuman: true }

console.log(jordan.__proto__ === Object.getPrototypeOf(jordan)); // true
```

:::caution
As `__proto__` has been deprecated, we usually use `Object.getPrototypeOf()` in practice.
:::

### Constructor Function

Actually, a constructor function is just a regular function, but it's used with the `new` keyword to create objects.

Before ES6, JavaScript didn't have the class syntax. Instead, objects were created using constructor functions.

Constructor functions do not have a defined return value by default.

```jsx
function Person(name) {
  this.isHuman = true;
  this.name = name;
}

const jordan = new Person('jordan');
console.log(jordan); // { name: 'jordan', isHuman: true }
```

However, if a custom object is returned from the constructor function, it will replace the newly created object.

```jsx
function Person(name) {
  this.isHuman = true;
  this.name = name;
  return { name: 'John' }; // return a custom object
}

const jordan = new Person('jordan');
console.log(jordan); // { name: 'John' }
```

#### `prototype` property

Constructor function has the `prototype` property that allows objects created by the constructor function to inherit its properties or methods.

```jsx
function Person(name) {
  this.isHuman = true;
  this.name = name;
}

Person.prototype.greet = function () {
  console.log('I am ' + this.name);
};

const jordan = new Person('jordan');

console.log(jordan); // Person { isHuman: true, name: 'jordan' }
console.log(jordan.__proto__); // { greet: ƒ, constructor: ƒ }
console.log(jordan.greet()); // I am jordan
```

However, why don't we just define the properties or methods in the constructor function 🤔

The main reason is to **save memory usage**.

Defining properties and methods directly in the constructor function use more memory when creating many objects, because they are recreated for each object.

```jsx
function Person(name) {
  this.name = name;
  // Define method directly in the constructor function
  this.greet = function () {
    console.log('I am ' + this.name);
  };
}

const jordan = new Person('jordan');
console.log(jordan); // Person { name: 'jordan', greet: ƒ }
```

By defining common properties and methods on the `prototype` property, they can be shared among all instances of objects created using that constructor function, leading to better performance and memory usage.

```jsx
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log('I am ' + this.name);
};

const jordan = new Person('jordan');
console.log(jordan); // Person { name: 'jordan' }
console.log(jordan.__proto__); // { greet: ƒ, constructor: ƒ }
```

### `__proto__` vs. `prototype`

`__proto__`

1. A property of every object.
2. A way for an object to access its prototype chain.

`prototype`

1. A property of a function.
2. A way to add properties and methods to all objects created by that constructor function using the `new` keyword.

```jsx
function Person(name) {
  this.name = name;
}

const jordan = new Person('jordan');

console.log(jordan.__proto__ === Person.prototype); // true
```

### `new` keyword

To create an object, we use a constructor function with the `new` keyword.

But, how does the `new` keyword work under the hood 🤔

According to definition of [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new), `new` will do the following things：

1. Creates a empty object.
2. Sets empty object's `[[Prototype]]` to constructor function's `prototype`
3. Executes the constructor function and binds empty object as `this` context.
4. If the constructor function returns an object, the new keyword will return that object. If it doesn't, the new keyword will return the newly created empty object.

```jsx
function myNew(constructorFn, ...args) {
  // 1. Creates a empty object
  // 2. Sets empty object's [[Prototype]] to constructor function's prototype
  const obj = Object.create(constructorFn.prototype);

  // 3. Executes the constructor function and binds empty object as this context
  const result = constructorFn.apply(obj, args);

  // 4. If the constructor function returns an object
  // If it does, new keyword will return that object
  // If it doesn't, the new keyword will return the newly created empty object.
  return result instanceof Object ? result : obj;
}

function Person(name) {
  this.name = name;
}

const jordan = myNew(Person, 'jordan'); // Person { name: 'jordan' }
```

Reference：

1. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
2. [https://medium.com/手寫筆記/javascript-new-operator-implementation-8c0d15f2b899](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/javascript-new-operator-implementation-8c0d15f2b899)
3. [https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html](https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html)
4. [https://www.explainthis.io/zh-hant/interview-guides/javascript/most-common-js-prototype-questions](https://www.explainthis.io/zh-hant/interview-guides/javascript/most-common-js-prototype-questions)
