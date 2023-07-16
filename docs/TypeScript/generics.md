# Generics

### 將 type 傳入另外一個 type

在以下案例中，會發現當多個結構幾乎一樣的 type，卻只因為其中一兩個屬性不一樣，需要不停建立不同的 type。

```ts
type ApiResponse1 = {
  id: number;
  key: string;
  data: string;
};

type ApiResponse2 = {
  id: number;
  key: string;
  data: string[];
};
```

透過 generics 的方式，可以使 type 重複使用，減少多餘的程式碼。

```ts
type ApiResponse<T> = {
  id: number;
  key: string;
  data: T;
};

const response1: ApiResponse<string> = {
  id: 1,
  key: 'a',
  data: 'jordan';
}

const response2: ApiResponse<string[]> = {
  id: 2,
  key: 'b',
  data: ['jordan', 'john'];
}
```

### 回傳的 type 仰賴傳入的值

在以下案例中，會發現 ts 不會提供 userOne 完整的 interface。

```ts
const createUser = (obj: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...obj,
    uid,
  };
};
```

當我們查看 userOne 的 type 時，會發現其 type 為 `{uid: number;}`，缺少了 `name` 以及 `age` 這兩個屬性。

```ts
const userOne = createUser({ name: 'jordan', age: 30 });
```

透過 generics 的方式，ts 會推斷傳入的 type，並提供完整的 interface。

```ts
const createUser = <T>(obj: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...obj,
    uid,
  };
};
```
