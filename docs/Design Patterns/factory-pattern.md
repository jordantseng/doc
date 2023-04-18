# Factory Pattern

_A factory function is a function that creates and returns a new object._

Factory Pattern 其實就是**使用 factory function 來建立物件**，而 factory function 為**一個回傳新物件的 function**。

### 使用方式

```js
const jordan = {
  name: 'jordan',
  age: 18,
  github: 'https://github.com/jordantseng',
  talk() {
    return `Hello, I'm ${this.name}`;
  },
};

const john = {
  name: 'jordan',
  age: 18,
  github: 'https://github.com/OInVein',
  talk() {
    return `Hello, I'm ${this.name}`;
  },
};
```

jordan 與 john 分別為兩個物件，包含了 name, age, github, 以及 talk，
根據 Factory Pattern，我們可以將這些資訊記錄在一個 factory function 中，

```js
const human = (name, age, github) => ({
  name,
  age,
  github,
  talk() {
    return `Hello, I'm ${this.name}`;
  },
});

const jordan = human('jordan', 18, 'https://github.com/jordantseng');
const john = human('john', 16, 'https://github.com/OInVein');
```

### 優點

1. 當有多個相似的小物件時，Factory Pattern 會非常好用
2. 相關設定集中一個 function 管理，遵守 [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) 原則

### 缺點

由於 factory function 每次都是建立一個新的物件，相較於用 `new` 的方式來建立物件，factory function 於記憶體上會更加耗能。

```js
class Human {
  constructor(name, age, github) {
    this.name = name;
    this.age = age;
    this.github = github;
  }

  talk() {
    return `Hello, I'm ${this.name}`;
  }
}

const jordan = new Human('jordan', 18, 'https://github.com/jordantseng');
const john = new Human('john', 16, 'https://github.com/OInVein');
```

參考來源:

1. [https://www.patterns.dev/posts/factory-pattern](https://www.patterns.dev/posts/factory-pattern)
2. [https://en.wikipedia.org/wiki/Don%27t_repeat_yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
3. [https://pjchender.dev/pattern/design-pattern-factory/](https://pjchender.dev/pattern/design-pattern-factory/)
