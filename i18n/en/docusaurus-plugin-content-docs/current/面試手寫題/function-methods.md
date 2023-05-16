# Function Methods

### Function.call

```jsx
Function.prototype.myCall = function (thisArg, ...args) {
  // The "this" in this execution context refers to the function that calls myCall

  // Create a unique key using symbol to avoid overriding keys on thisArg
  const symbol = Symbol();

  // Add "this" to thisArg
  thisArg[symbol] = this;

  // Invoke the function stored on thisArg and store its return value.
  const output = thisArg[symbol](...args);

  // Since we modified the passed thisArg, we need to restore it to its original state.
  delete thisArg[symbol];

  return output;
};
```

### Function.apply

```jsx
Function.prototype.myApply = function (thisArg, args = []) {
  return this.myCall(thisArg, ...args);
};
```

### Function.bind

```jsx
Function.prototype.myBind = function (thisArg, ...args) {
  // An arrow function is used here
  // because using a regular function would create a new "this" that points to the global object
  // Arrow functions don't have their own "this" binding
  // instead, they inherit "this" through the scope chain from the function that calls myBind
  return (...newArgs) => this.myApply(thisArg, [...args, ...newArgs]);
};
```
