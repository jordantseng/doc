# Promise

### TL;DR

- Promise is an object that waits for an asynchronous operation to complete.
- Promise can only be in one of three states： `pending`, `fulfilled`, or `rejected`.
- Promise can help reduce callback hell and improve code readability.

### What is Promise

In JavaScript, Promise is an object that is used to handle asynchronous operations.

It provides a way to write asynchronous code that looks more like synchronous code, making it easier to understand and maintain.

A Promise can be in one of three states：

1.  **Pending** - Initial state, neither fulfilled nor rejected.
2.  **Fulfilled** - The operation completed successfully, and the promise has a resulting value.
3.  **Rejected** - The operation failed, and the promise has a reason for the failure.

#### How to create a Promise

Promises can be created using the `Promise` constructor, which takes a function as a parameter, called the **executor** function, that defines the asynchronous operation.

The **executor** function has two callback functions as parameters：

1. `resolve(value)`: When called, this function fulfills the Promise with a value.
2. `reject(error)`: When called, this function rejects the Promise with an error.

Promises can be chained using the methods below, which allows developer to define a sequence of asynchronous operations that depend on each other.

1. `then(fulfilledFn, rejectedFn)`：Calls `fulfilledFn` if the Promise is fulfilled, and `rejectedFn` if the Promise is rejected, and returns a new `fulfilled` Promise.
2. `catch(rejectedFn)`：Calls `rejectedFn` if the Promise is rejected and returns a new `fulfilled` Promise.
3. `finally(callback)`：Calls the callback function regardless of whether the Promise is `fulfilled` or `rejected`, and returns a new `fulfilled` or `rejected` Promise.

```js
const promise = new Promise(executor);

function executor(resolve, reject) {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum % 2 === 0) {
      resolve('isEven');
    } else {
      reject('isOdd');
    }
  }, 1000);
}

promise
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// after 1 sec, if randomNum is even => 'isEven' 'finally'
// after 1 sec, if randomNum is odd => 'isOdd' 'finally'
```

### Why Promise

Prior to ES6, callback functions were the primary way to handle asynchronous operations in JavaScript.

However, the use of callbacks can lead to deeply nested and unreadable code, especially when dealing with multiple asynchronous operations, which is commonly referred to as "callback hell."

```js
const waitOneSecond = (cb) => {
  setTimeout(() => {
    cb();
  }, 1000);
};

// deeply nested and unreadable code
waitOneSecond(() => {
  console.log('1 sec passed');
  waitOneSecond(() => {
    console.log('2 sec passed');
    waitOneSecond(() => {
      console.log('3 sec passed');
    });
  });
});
```

If we refactor the code above using Promises, the code becomes cleaner and more readable.

```jsx
const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

// maintain a single level of nesting, making it more readable and easier to understand
waitOneSecond()
  .then(() => {
    console.log('1 sec passed');
    return waitOneSecond();
  })
  .then(() => {
    console.log('2 sec passed');
    return waitOneSecond();
  })
  .then(() => {
    console.log('3 sec passed');
  });
```

### Promise.race(promises)

`Promise.race` takes an array of Promises as input and returns a new Promise.

The new Promise is settled (fulfilled or rejected) as soon as the first Promise in the array is settled.

```jsx
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 100);
});

Promise.race([p1, p2])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err); // p2 settles first and rejects with the value of 2
  });
```

### Promise.any(promises)

`Promise.any` takes an array of Promises as input and returns a new Promise.

The new Promise is fulfilled as soon as one of the input Promises is fulfilled.

If all input Promises are rejected, then an [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) will be returned.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 100);
});

Promise.any([p1, p2]).then(function (value) {
  console.log(value);
  // p1 fulfills with the value of 1
});
```

### Promise.all(promises)

`Promise.all` takes an array of Promises as input and returns a new Promise.

The new Promise is fulfilled as soon as all of the input Promises are fulfilled.

```js
const p1 = Promise.resolve(1);
const p2 = 2;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000);
});

Promise.all([p1, p2, p3]).then(function (values) {
  console.log(values); // after 1 second, [1, 2, 3]
});
```

If any of the input Promises is rejected, the new Promise is rejected with the reason of the first rejected Promise.

```js
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 1000);
});

Promise.all([p1, p2])
  .then(function (values) {
    console.log(values);
  })
  .catch((error) => {
    console.log(error); // after 1 second, 2
  });
```

### Promise.allSettled(promises)

`Promise.allSettled` takes an array of Promises as input and returns a new Promise.

The new Promise is fulfilled when all input Promises are settled, which means that they have either fulfilled or rejected.

The resulting Promise resolves to an array of objects representing the state of each Promise.

Each object has two properties:

- `status`：A string indicating the Promise status, either "fulfilled" or "rejected"
- `value` or `reason`：The fulfilled value or rejection reason of the Promise, respectively.

```jsx
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const p3 = 3;
const p4 = Promise.reject(4);

Promise.allSettled([p1, p2, p3, p4]).then((values) => {
  console.log(values);
  // after 1 second
  // [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'rejected', reason: 4 }
  // ]
});
```

### Promise.resolve(value)

`Promise.resolve(value)` creates and returns a new Promise object that is resolved with a given value.

This method is useful for creating a Promise from a non-Promise value or for converting a synchronous operation into an asynchronous one by returning a resolved Promise immediately.

```jsx
const promise = Promise.resolve('Hello World');
promise.then((value) => {
  console.log(value); // Hello World
});
```

### Promise.reject(reason)

`Promise.reject(reason)` returns a new Promise object that is rejected with the given reason.

```jsx
const promise = Promise.reject('Hello World');
promise.catch((reason) => {
  console.log(reason); // Hello World
});
```

### FAQ

1. **Determine the result**

   ```jsx
   const promise = new Promise((resolve, reject) => {
     console.log(1);
     resolve();
     console.log(2);
   });

   promise.then(() => {
     console.log(3);
   });

   console.log(4);
   ```

   **Answer:**

   This code creates a new Promise and invokes an executor function that immediately logs 1, then calls resolve(), and logs 2.

   ```jsx
   // 1
   // 2
   // 4
   // 3
   ```

2. **Determine the result**

   ```jsx
   Promise.resolve()
     .then(() => {
       return new Error('error!!!');
     })
     .then((res) => {
       console.log('then: ', res);
     })
     .catch((err) => {
       console.log('catch: ', err);
     });
   ```

   **Answer:**

   `then` method returns a new `fulfilled` Promise.

   ```jsx
   // then:  Error: error!!!
   ```

   If you want to reject the Promise and go to the catch block, you need to explicitly throw the Error object in the first then callback.

   ```jsx
   Promise.resolve()
     .then(() => {
       throw new Error('error!!!');
     })
     .then((res) => {
       console.log('then: ', res);
     })
     .catch((err) => {
       console.log('catch: ', err);
     });
   ```

Reference:

1.  [https://www.fooish.com/javascript/ES6/Promise.html](https://www.fooish.com/javascript/ES6/Promise.html)
