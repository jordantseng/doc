# 實作陣列方法

### Array.map

```jsx
Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i += 1) {
    result.push(callback(this[i], i, this));
  }

  return result;
};
```

### Array.filter

```jsx
Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this) === true) {
      result.push(this[i]);
    }
  }

  return result;
};
```

### Array.reduce

```jsx
Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue;

  for (let i = 0; i < this.length; i += 1) {
    if (i === 0 && initialValue === undefined) {
      result = this[i];
    } else {
      result = callback(result, this[i], i, this);
    }
  }

  return result;
};
```

### Array.every

```jsx
Array.prototype.myEvery = function (callback) {
  if (this.length === 0) return false;

  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this) === false) return false;
  }

  return true;
};
```
