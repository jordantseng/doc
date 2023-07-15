# Conditional Types

### TL;DR

```jsx
const App = () => {
  // 有時我們想要根據傳入的內容，ts 提供相對應的 interface
  // 舉例來說，當 type 為 dog，才有 bark 這個 key
  // 當 type 為 cat 時，才有 meow 這個 key
  return <Animal name="Angel" type="dog" bark />;
};

type AnimalType = {
  name: string,
} & ({ type: 'cat', meow: boolean } | { type: 'dog', bark: boolean });

const Animal = (props: AnimalType) => {
  // 不行在 function 解構出 meow 或者 bark，因為 ts 無法確定目前的情況 meow 或者 bark 是否存在
  if (props.type === 'dog') {
    return <div>{props.bark}</div>;
  }

  return <div>{props.meow}</div>;
};
```
