# Throttle

### TL;DR

- **Debounce** and **throttle** both aim to reduce the frequency of repeated function calls, thereby optimizing performance.
- Throttle ensures a function is executed at regular intervals, allowing only one function call within a specified time window.

### What is throttle

Debounce is a technique used to control the frequency of function calls or event triggers.

Even if a function is continuously called, it will only be executed **once** within a specified time interval.

The throttle function takes two parameters:

- `callback`: The callback function to be executed.
- `delay`: The delay in milliseconds.

### Practical Applications

When dealing with scroll events, throttle can be applied to ensure that the associated function is invoked only once within a fixed time interval, avoiding an overwhelming number of function calls.

### Implementaion

```jsx
function throttle(callback, delay) {
  let lastCallTime = 0;
  let timerID;

  return function (...args) {
    let timeDuration = Date.now() - lastCallTime;
    let remainingTime = delay - timeDuration;

    if (remainingTime <= 0) {
      callback.apply(this, args);
      lastCallTime = Date.now();
    } else {
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        callback.apply(this, args);
        lastCallTime = Date.now();
      }, remainingTime);
    }
  };
}
```
