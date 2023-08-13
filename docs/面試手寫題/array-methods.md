# 陣列方法

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
    if (callback(this[i], i, this)) {
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
    if (!callback(this[i], i, this)) return false;
  }

  return true;
};
```

### Array.flat

```jsx
Array.prototype.myFlat = function (depth = 1) {
  function flatten(arr, depth) {
    return arr.reduce((acc, val) => {
      if (Array.isArray(val) && depth > 0) {
        acc.push(...flatten(val, depth - 1));
      } else {
        acc.push(val);
      }

      return acc;
    }, []);
  }

  return flatten(this, depth);
};
```
