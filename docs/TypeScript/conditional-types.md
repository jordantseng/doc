# Conditional Types

在 React 中，有時我們想要根據傳入 props 的內容，來讓 ts 提供相對應的 interface。

舉例來說，當 type 為 dog，才有 bark 這個 key，當 type 為 cat 時，才有 meow 這個 key。

```jsx
const App = () => {
  return <Animal name="Angel" type="dog" bark />;
  // 或者是
  // return <Animal name="Hana" type="cat" meow />;
};
```

最直覺定義 props type 的方法為

```jsx
type AnimalType = {
  name: string,
  type: 'cat' | 'dog',
  meow?: boolean,
  bark?: boolean,
};
```

但是透過這個方法會發現，當 type 為 dog 時，ts 仍會提供 meow 這個屬性。

能透過以下定義 type 的方式，達成以上所述的效果。

```jsx
type AnimalType = {
  name: string,
} & ({ type: 'cat', meow: boolean } | { type: 'dog', bark: boolean });
```

需要注意的是， component 不行直接解構出 meow 或者 bark，因為 ts 無法確定目前的情況 meow 或者 bark 是否存在。

```jsx
const Animal = (props: AnimalType) => {
  if (props.type === 'dog') {
    return <div>{props.bark}</div>;
  }

  return <div>{props.meow}</div>;
};
```
