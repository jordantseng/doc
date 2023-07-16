# Conditional Types

In React, sometimes we want TypeScript to provide corresponding interfaces based on the content of the props passed in.

For example, when the type is 'dog', only the key 'bark' should be available, and when the type is 'cat', only the key 'meow' should be available.

```jsx
const App = () => {
  return <Animal name="Angel" type="dog" bark />;
  // or
  // return <Animal name="Hana" type="cat" meow />;
};
```

The most straightforward way to define the props type is:

```jsx
type AnimalType = {
  name: string,
  type: 'cat' | 'dog',
  meow?: boolean,
  bark?: boolean,
};
```

However, using this method, you will find that even when the type is 'dog', TypeScript still provides the 'meow' property.

To achieve the desired effect, you can define the type as follows:

```jsx
type AnimalType = {
  name: string,
} & ({ type: 'cat', meow: boolean } | { type: 'dog', bark: boolean });
```

It is important to note that the component cannot directly destructure 'meow' or 'bark' because TypeScript cannot determine if 'meow' or 'bark' exist in the current situation.

```jsx
const Animal = (props: AnimalType) => {
  if (props.type === 'dog') {
    return <div>{props.bark}</div>;
  }

  return <div>{props.meow}</div>;
};
```
