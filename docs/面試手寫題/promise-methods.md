# Promise 方法

### Promise.race

```jsx
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
```

### Promise.any

```jsx
Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    promises.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch(() => {
          count += 1;
        })
        .finally(() => {
          if (count === promises.length) reject('all promises rejected');
        });
    });
  });
};
```

### Promise.all

```jsx
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const output = [];
    let count = 0;
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          count += 1;
          output[index] = val;
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          if (output.length === count) resolve(output);
        });
    });
  });
};
```

### Promise.allSettled

```jsx
Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    const output = [];
    let count = 0;
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          output[index] = {
            status: 'fulfilled',
            value,
          };
        })
        .catch((error) => {
          output[index] = {
            status: 'rejected',
            error,
          };
        })
        .finally(() => {
          count += 1;
          if (count === promises.length) {
            resolve(output);
          }
        });
    });
  });
};
```
