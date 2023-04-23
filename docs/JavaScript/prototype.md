# 原型

### TL;DR

- 可以把原型想像成父母，物件為小孩，小孩會繼承來自父母的基因。
- 透過 `__proto__`、`Object.getPrototypeOf()` 取得物件的原型。
- 建構函式就是普通的函式，但如果搭配 `new` 關鍵字使用時，則用於建立物件。
- `__prototype__` 是屬於物件的屬性，`prototype` 是屬於建構函式的屬性。
- `object.__proto__ === constructorFn.prototype`。

### 什麼是原型（prototype）

在 JavaScript 中，原型是一個物件，用於創建其他物件的藍圖，每一個物件都有一個原型，物件可以訪問原型上的屬性和方法。

### 什麼是原型鏈（prototype chain）

當訪問物件的屬性或方法時，JavaScript 會先尋找它是否存在於物件本身，如果找不到，它會往該物件的原型上尋找，如果仍然找不到，再往原型的原型上尋找，以此類推，直到找到或原型為 `null` 為止，這條尋找的路徑就被稱為**原型鏈** 。

### 如何取得原型

每個物件都有一個隱藏的屬性 `[[Prototype]]` ，它指向該物件的原型，但由於  `[[Prototype]]`  無法直接被訪問，因此可以透過 `__proto__` 、`Object.getPrototypeOf()` 訪問。

:::caution
實務上，我們不會使用 `__proto__` 去取得原型，而是透過 `Object.getPrototypeOf()`。
:::

```jsx
const person = {
  isHuman: true,
};

const jordan = Object.create(person); // 建立一個原型為 person 的物件

console.log(jordan.__proto__); // { isHuman: true }

console.log(jordan.__proto__ === Object.getPrototypeOf(jordan)); // true
```

### 建構函式（constructor function）

其實建構函式就是普通的函式，但如果搭配 `new` 使用時，則用於建立物件。在 ES6 之前的 JavaScript 沒有  `Class`  語法糖，都是透過建構函式建立物件，然後在建構函式的  `prototype`  上新增屬性或方法。

```jsx
function Person(name) {
  this.isHuman = true;
  this.name = name;
}

// 定義建構函式上的 prototype 屬性，讓透過建構函式所建立的物件都能繼承使用
Person.prototype.greet = function () {
  console.log('I am ' + this.name);
};

const jordan = new Person('jordan');

console.log(jordan); // Person { isHuman: true, name: 'jordan' }
console.log(jordan.__proto__); // { greet: ƒ, constructor: ƒ }
console.log(jordan.greet()); // I am jordan
```

:::caution
使用建構函式建立物件時，並不會定義回傳的值，如果讓建構函式回傳自定義的物件的話，建構函式將會回傳自定義的物件。
:::

```jsx
function Person(name) {
  this.isHuman = true;
  this.name = name;
  // 自己定義回傳的物件
  return { name: 'John' };
}

const jordan = new Person('jordan');
console.log(jordan); // { name: 'John' }

// 可以發現 jordan 不是我們透過建構函式建立的物件，而是回傳我們自定義的物
```

### `new` 關鍵字

上述的案例在呼叫建構函式前使用了 `new` 關鍵字，那 `new` 到底做了什麼呢 🤔

根據 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) 的定義，`new` 實際上執行了四個步驟：

1. 首先建立一個空的物件。
2. 將空物件的原型 `__proto__` 指向建構函式的 `prototype` 屬性。
3. 建構函式被執行，函式中的 `this` 將會被指向到剛剛建立的空物件上。
4. 如果建構函式沒有回傳物件，則回傳一開始建立的空物件。

```jsx
function myNew(constructorFn, ...args) {
  // 1. 建立一個空的物件
  // 2. 將空物件的原型指向建構函式的 prototype
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

### `__proto__` 和 `prototype` 的差別

`__proto__` ：每個**物件**的一個隱藏屬性，每個物件可以由  `__proto__`  訪問到它的原型。

`prototype` ：透過**建構函式 + `new`** 建立的物件都會繼承來自**建構函式**的 `prototype` 的屬性和方法，`建構函式.prototype === 物件.__proto__` 。

```jsx
function Person(name) {
  this.name = name;
}

const jordan = new Person('jordan');

console.log(jordan.__proto__ === Person.prototype); // true
```

### 建構函式 `prototype` 應用

我們現在知道建構函式經常用來建立物件，但是為什麼我們需要 prototype 這個屬性呢，為什麼不直接把屬性和方法定義在建構函式裡面就好呢 🤔

```jsx
function Person(name) {
  this.name = name;
  // 將方法直接定義在建構函式中
  this.greet = function () {
    console.log('I am ' + this.name);
  };
}
```

試想一個情況，如果我們要透過上述的 `Person` 建立 10000 個物件，每一個物件都會包含 `greet` 這個方法，浪費了許多記憶體位置，但是如果在 `prototype` 增加 `greet` 方法，則所有透過 `Person` 建立的物件都繼承這一個方法，大幅減少所需的記憶體。

```jsx
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log('I am ' + this.name);
};
```

:::tip
效能考量上，通常會把**通用**的屬性和方法放在建構函式的 prototype 中。
:::

參考來源：

1. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
2. [https://medium.com/手寫筆記/javascript-new-operator-implementation-8c0d15f2b899](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/javascript-new-operator-implementation-8c0d15f2b899)
3. [https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html](https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html)
4. [https://www.explainthis.io/zh-hant/interview-guides/javascript/most-common-js-prototype-questions](https://www.explainthis.io/zh-hant/interview-guides/javascript/most-common-js-prototype-questions)
