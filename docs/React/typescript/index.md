# React + TypeScript

### HTML Props

情境: 預期 `Button` 有原生 html button props 的 autocomplete

```tsx
const Parent = () => {
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

情境: 預期 `Input` 的 `onChange` props 參數為 `string`

```tsx
export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    />
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(val) => {
        // val: string
        console.log(val);
      }}
    />
  );
};
```

❌ val: `string` or `React.ChangeEvent<HTMLInputElement>`.

```tsx
type InputProps = ComponentProps<'input'> & { onChange: (value: string) => void };
```

✅

```tsx
type InputProps = Omit<ComponentProps<'input'>, 'onChange'> & { onChange: (value: string) => void };
```

### 提取元件 Props

情境: `NavBar` 是第三方的元件，如果要使用 `NavBar` 的 props，但第三方並未將其 props export 出來。

```tsx
type NavBarProps = { title: string; links: string[]; children: React.ReactNode };
export const NavBar = (props: NavBarProps) => {
  return <div>Some content</div>;
};
```

✅

```tsx
type NavBarProps = React.ComponentProps<typeof NavBar>;
```

### 使用 `useState` update function 更新狀態

情境: `setState` function 回傳的物件，有額外的 tagselected 屬性，但 typescript 並未報錯。

```tsx
type TagState = {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
};

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });

  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState((currentState) => ({
                ...currentState,
                // @ts-expect-error
                tagselected: tag.id,
              }));
            }}
          >
            {tag.value}
          </button>
        );
      })}
    </div>
  );
};
```

✅ 在 TypeScript 中，可以從函式回傳值中傳遞額外的属性。一般而言，在使用 TypeScript 時，應該盡量進行物件比較，因為這樣可以提供更好的錯誤訊息。

```tsx
<button
  key={tag.id}
  onClick={() => {
    setState(
      (currentState): TagState => ({
        ...currentState,
        tagselected: tag.id,
      }),
    );
  }}
>
  {tag.value}
</button>
```

參考來源：

1.  [React with TypeScript](https://www.totaltypescript.com/tutorials/react-with-typescript)
