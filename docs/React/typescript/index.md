# React + TypeScript

## Components

### HTML Props

```tsx
const Parent = () => {
  // 預期: Button 的 autocomplete 能拿到所有 button 的 props
  return <Button onClick={() => {}} type="button"></Button>;
};
```

✅

```tsx
export const Button = ({ className, ...rest }: React.ComponentProps<'button'>) => {
  return <button {...rest} className={className}></button>;
};
```

### 覆蓋原生 Props

```tsx
const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        // 預期 e: string
        console.log(e);
      }}
    ></Input>
  );
};
```

❌

```tsx
export const Input = (props: ComponentProps<'input'> & { onChange: (value: string) => void }) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};
```

✅

```tsx
type InputProps = Omit<ComponentProps<'input'>, 'onChange'> & { onChange: (value: string) => void };

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};
```

### 提取元件 Props

```tsx
// 假設 NavBar 是第三方的元件
export const NavBar = (props: { title: string; links: string[]; children: React.ReactNode }) => {
  return <div>Some content</div>;
};
```

✅

```tsx
type NavBarProps = React.ComponentProps<typeof NavBar>;
```

參考來源：

1.  [React with TypeScript](https://www.totaltypescript.com/tutorials/react-with-typescript)
