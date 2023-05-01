# Event Propagation

### TL;DR

- Event propagation can be divided into three stages: **capturing**, **target**, and **bubbling**.
- `event.stopPropagation` is used to stop the propagation of an event, while `event.preventDefault` is used to prevent the browser from performing its default action for that event.
- `event.target` refers to the element that triggered the event, while `event.currentTarget` refers to the current element that is processing the event during propagation.
- Event delegation is a technique where a parent element handles events for its child elements, rather than each child element having its own event handler.

### What is Event Propagation

In JavaScript, event propagation refers to the way events are propagated (or passed along) through the DOM tree.

There are three phases of event propagation: **capturing**, **target**, and **bubbling**.

1. Capturing：The event starts at the outermost ancestor element and moves towards the target element that triggered the event.
2. Target：The event triggered any event listeners or handlers attached directly to the target element.
3. Bubbling：The event propagates back up the DOM tree from the target element to the outermost ancestor element.

![eventflow.png](./eventflow.png)

### Capturing

By default, when using `addEventListener`, the event listener only listens for events in the **target** and **bubbling** phases.

If you want to listen for events in the capturing phase, you need to pass a third parameter of `true` to the `addEventListener` method.

```html
<body>
  <button>button</button>
</body>

<script>
  const body = document.querySelector('body');
  const button = document.querySelector('button');

  body.addEventListener(
    'click',
    function (e) {
      console.log('body');
    },
    true,
  );

  button.addEventListener(
    'click',
    function (e) {
      console.log('button');
    },
    true,
  );

  // It will listen for the capturing event, as the third parameter of the eventListener is true
  // When the button is clicked, 'body' and 'button' will be logged in order
</script>
```

### Bubbling

```html
<body onclick="console.log('body')">
  <div onclick="console.log('div')">
    <button onclick="console.log('button')">button</button>
  </div>
</body>

<!-- When the button is clicked, 'button', 'div' and 'body' will be logged in order -->
<!-- The reason why 'div' and 'body' are logged is because of event bubbling -->
```

### `event.stopPropagation`

In practice, we may sometimes want to prevent event propagation, such that only the event associated with the target element is triggered, without triggering any other events associated with other elements.

To achieve this, we can use `event.stopPropagation()` to cancel the propagation of the event.

```html
<body>
  <button>button</button>
</body>

<script>
  const body = document.querySelector('body');
  const button = document.querySelector('button');

  body.addEventListener('click', function (e) {
    console.log('body');
  });

  button.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('button');
  });

  // Due to e.stopPropagation, when the button is clicked, the event will not continue to bubble
  // As a result, only 'button' will be logged
</script>
```

:::caution
If event propagation is cancelled during the capturing phase, subsequent target and bubbling phases will not occur.
:::

```html
<body>
  <button>button</button>
</body>

<script>
  const body = document.querySelector('body');
  const button = document.querySelector('button');

  body.addEventListener(
    'click',
    function (e) {
      e.stopPropagation();
      console.log('capturing body');
    },
    true,
  );

  button.addEventListener(
    'click',
    function (e) {
      console.log('capturing button');
    },
    true,
  );

  body.addEventListener('click', function (e) {
    console.log('body');
  });

  button.addEventListener('click', function (e) {
    console.log('button');
  });

  // As event propagation is cancelled during the capturing phase
  // Only 'capturing body' will be logged
</script>
```

### `event.preventDefault`

`event.preventDefault()` is used to prevent the default browser behavior associated with an event, such as following a link or submitting a form.
It does not affect the event propagation.

As shown in the following code, when a user clicks on an anchor tag `<a>`, the default behavior of the browser is to navigate to a different page.

However, this default behavior can be prevented using `event.preventDefault()`, allowing developers to execute the desired behavior instead.

```js
const link = document.querySelector('a');

link.addEventListener('click', function (e) {
  e.preventDefault(); // prevent the default behavior
  console.log('clicked'); // execute the desired behavior
});
```

### `event.target` vs. `event.currentTarget`

- `event.target`：The element that triggered the event. This element will not change during the entire event bubbling process.
- `event.currentTarget`：The element that the event listener is attached to. This element can change as the event bubbles up or down the DOM tree, but it will always be the same as `this` inside the event listener function.

### Event Delegation

Event delegation, which is based on event propagation, is a technique used to optimize event handling by reducing the number of event listeners needed.

Rather than attaching an event listener to every individual element, a single event listener is attached to a parent element, and events are handled as they propagate up or down the DOM tree.

This can improve performance and make code more efficient and maintainable, especially in cases where there are many elements with the same event handling requirements.

💩 Attaching an event listener to every individual element

```html
<ol id="list">
  <li data-num="1" onClick="console.log(this.dataset.num)">1</li>
  <li data-num="2" onClick="console.log(this.dataset.num)">2</li>
  <li data-num="3" onClick="console.log(this.dataset.num)">3</li>
  <li data-num="4" onClick="console.log(this.dataset.num)">4</li>
</ol>
```

✅ A single event listener is attached to a parent element

```html
<ol id="list">
  <li data-num="1">1</li>
  <li data-num="2">2</li>
  <li data-num="3">3</li>
  <li data-num="4">4</li>
</ol>

<script>
  const list = document.getElementById('list');

  list.addEventListener('click', (e) => {
    const li = e.target.closest('li');

    if (!li) return;

    console.log(li.dataset.num);
  });
</script>
```

Reference:

1. [https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)
2. [https://shubo.io/event-bubbling-event-capturing-event-delegation/](https://shubo.io/event-bubbling-event-capturing-event-delegation/)
3. [https://pjchender.dev/webapis/note-event-capturing-bubbling/](https://pjchender.dev/webapis/note-event-capturing-bubbling/)
