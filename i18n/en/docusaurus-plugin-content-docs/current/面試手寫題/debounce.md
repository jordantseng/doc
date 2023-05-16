# Debounce

### TL;DR

- **Debounce** and **throttle** both aim to reduce the frequency of repeated function calls, thereby optimizing performance.
- Debounce ensures a function is executed only after a certain period of time has passed without the event being continuously triggered.

### What is debounce

Debounce is a technique used to control the frequency of function calls or event triggers.

It ensures that a function is executed only after a certain period of time has passed without the event being continuously triggered.

The debounce function takes two parameters:

- `callback`: The function to be executed.
- `delay`: The delay in milliseconds.

### Practical Applications

Debounce is commonly applied in scenarios where you want to control the frequency of function execution based on event triggers.

For example, in a TypeHead implementation, debounce can be used to delay API calls until the user has finished typing or paused for a certain duration, preventing excessive or unnecessary API requests.

### Implementation

```jsx
function debounce(callback, delay) {
  let timerID;

  return function (...args) {
    // If the event is triggered continuously, cancel the previous timerID
    clearTimeout(timerID);

    // Assign a new timerID
    timerID = setTimeout(() => {
      // Call the callback after the specified delay
      callback.apply(this, args);
    }, delay);
  };
}
```
