# 原型

### TL;DR

- 原型就像父母，物件就像小孩，小孩會繼承來自父母的基因，物件也可以從其原型繼承屬性和方法。
- 透過 `__proto__`、`Object.getPrototypeOf()` 可以取得物件的原型。
- 建構函式就是普通的函式，但如果搭配 `new` 關鍵字使用時，則用於建立物件。
- `__proto__` 是物件的一個屬性，指向物件的原型，而 `prototype` 則是函式的一個屬性，用於定義由使用該函式建立的物件所繼承的屬性和方法。
- 如果 `object` 是使用 `Fn` 作為建構函式建立的物件，那麼 `object.__proto__ === Fn.prototype`。

### 什麼是原型（prototype）

在 JavaScript 中，每一個物件都有一個原型，原型包含了該物件所繼承的屬性和方法，這些屬性和方法可以被該物件訪問和使用。

:::tip
原型就像父母，物件就像小孩，小孩會繼承來自父母的基因，物件也可以從其原型繼承屬性和方法。
:::

### 什麼是原型鏈（prototype chain）

當訪問物件的屬性或方法時，JavaScript 引擎會先尋找它是否存在於物件本身，如果找不到，它會往該物件的原型上尋找，如果仍然找不到，再往原型的原型上尋找，以此類推，直到原型為 `null` 為止，這條尋找的路徑就被稱為**原型鏈** 。

### 如何取得物件的原型

每個物件都有一個隱藏的屬性 `[[Prototype]]` ，它指向該物件的原型。

由於 `[[Prototype]]`  無法直接被訪問，因此可以透過 `__proto__` 屬性或 `Object.getPrototypeOf()` 方法訪問物件的原型。

```jsx
const person = {
  isHuman: true,
};

const jordan = Object.create(person); // 建立一個原型為 person 的物件

console.log(jordan.__proto__); // { isHuman: true }

console.log(jordan.__proto__ === Object.getPrototypeOf(jordan)); // true
```

:::caution
由於 `__proto__` 已經被棄用，實務上建議使用 `Object.getPrototypeOf()` 訪問物件的原型。
:::

### 建構函式（Constructor Function）

在 JavaScript 中，建構函式其實就是一般的函式，但當搭配 `new` 關鍵字使用時，則用於建立物件。在 ES6 之前，JavaScript 沒有 class 語法，建構函式是建立物件的常用方法。

需要注意的是，建構函式預設沒有回傳值。

```jsx
function Person(name) {
  this.isHuman = true;
  this.name = name;
}

const jordan = new Person('jordan');
console.log(jordan); // { name: 'jordan', isHuman: true }
```

然而，如果建構函式回傳自訂物件，則該自訂物件將取代新建立的物件。

```jsx
function Person(name) {
  this.isHuman = true;
  this.name = name;
  return { name: 'John' }; // 回傳自訂物件
}

const jordan = new Person('jordan');
console.log(jordan); // { name: 'John' }
```

#### `prototype` 屬性

建構函式具有 `prototype` 屬性，透過該屬性可以讓使用該建構函式建立的物件繼承其屬性或方法。

```jsx
function Person(name) {
  this.isHuman = true;
  this.name = name;
}

Person.prototype.greet = function () {
  console.log('I am ' + this.name);
};

const jordan = new Person('jordan');

console.log(jordan); // Person { isHuman: true, name: 'jordan' }
console.log(jordan.__proto__); // { greet: ƒ, constructor: ƒ }
console.log(jordan.greet()); // I am jordan
```

為什麼不直接在建構函式中定義屬性或方法呢 🤔

主要原因是為了**節省記憶體使用量**。

如果直接在建構函式中定義屬性和方法，在建立多個物件時會佔用更多的記憶體，因為每個物件都會重新建立一次這些屬性和方法。

```jsx
function Person(name) {
  this.name = name;
  // Define method directly in the constructor function
  this.greet = function () {
    console.log('I am ' + this.name);
  };
}

const jordan = new Person('jordan');
console.log(jordan); // Person { name: 'jordan', greet: ƒ }
```

而將屬性和方法定義在原型上，可以使多個物件共用同一份屬性和方法，從而節省記憶體使用量。

```jsx
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log('I am ' + this.name);
};

const jordan = new Person('jordan');
console.log(jordan); // Person { name: 'jordan' }
console.log(jordan.__proto__); // { greet: ƒ, constructor: ƒ }
```

### `__proto__` vs. `prototype`

`__proto__`

1. 每個**物件**都有的屬性。
2. 用於讓物件訪問其原型鏈。

`prototype`

1. 每個**函式**都有的屬性。
2. 可以透過該屬性為使用 `new` 關鍵字建立的所有物件添加屬性和方法。

```jsx
function Person(name) {
  this.name = name;
}

const jordan = new Person('jordan');

console.log(jordan.__proto__ === Person.prototype); // true
```

### `new` 關鍵字

我們使用建構函式搭配 `new` 關鍵字來建立物件，那 `new` 關鍵字背後到底是如何運作的呢 🤔

根據 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) 的定義，`new` 實際上執行了四個步驟：

1. 首先建立一個空的物件。
2. 將空物件的原型 `[[Prototype]]` 指向建構函式的 `prototype` 屬性。
3. 執行建構函式，建構函式中的 `this` 將會被指向到剛剛建立的空物件上。
4. 檢查建構函式是否回傳物件。

```jsx
function myNew(constructorFn, ...args) {
  // 1. 建立一個空的物件
  // 2. 將空物件的原型指向建構函式的 prototype 屬性
  const obj = Object.create(constructorFn.prototype);

  // 3. 呼叫建構函式並將 this 綁定為剛剛所建立的物件
  const result = constructorFn.apply(obj, args);

  // 4. 檢查建構函式是否回傳物件，如果是，回傳該物件；如果不是，則回傳一開始建立的物件
  return typeof result === 'object' ? result : obj;
}

function Person(name) {
  this.name = name;
}

const jordan = myNew(Person, 'jordan'); // Person { name: 'jordan' }
```

參考來源：

1. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
2. [https://medium.com/手寫筆記/javascript-new-operator-implementation-8c0d15f2b899](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/javascript-new-operator-implementation-8c0d15f2b899)
3. [https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html](https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html)
4. [https://www.explainthis.io/zh-hant/interview-guides/javascript/most-common-js-prototype-questions](https://www.explainthis.io/zh-hant/interview-guides/javascript/most-common-js-prototype-questions)
