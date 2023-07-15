# Conditional Types

### TL;DR

```jsx
const App = () => {
  // Sometimes we want to provide corresponding interfaces in TypeScript based on the passed-in content
  // For example, when the type is 'dog', it has the key 'bark'
  // When the type is 'cat', it has the key 'meow'
  return <Animal name="Angel" type="dog" bark />;
};

type AnimalType = {
  name: string,
} & ({ type: 'cat', meow: boolean } | { type: 'dog', bark: boolean });

const Animal = (props: AnimalType) => {
  // We cannot destructure 'meow' or 'bark' within the function
  // because TypeScript cannot determine if 'meow' or 'bark' exists in the current context
  if (props.type === 'dog') {
    return <div>{props.bark}</div>;
  }

  return <div>{props.meow}</div>;
};
```
