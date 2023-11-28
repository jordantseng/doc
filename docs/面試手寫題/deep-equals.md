# Deep Equal

```js
function deepEquals(val1, val2) {
  // if two value types are not equal
  if (typeof val1 !== typeof val2) {
    return false;
  }

  // at this point, val1 and val2 are the same type
  // handle primitive type
  if (typeof val1 !== 'object') {
    return val1 === val2;
  }

  // handle reference type
  // null is a special case, although it's primitive, its type is object
  if (val1 === null || val2 === null) {
    return val1 === val2;
  }

  if (val1 === val2) {
    return true;
  }

  // handle array
  if (Array.isArray(val1) && Array.isArray(val2)) {
    if (val1.length !== val2.length) {
      return false;
    }

    for (let i = 0; i < val1.length; i += 1) {
      if (!deepEquals(val1[i], val2[i])) {
        return false;
      }
    }

    return true;
  }

  if (Array.isArray(val1) || Array.isArray(val2)) {
    return false;
  }

  // handle object
  if (Object.values(val1).length !== Object.values(val2).length) {
    return false;
  }

  for (const key of Object.keys(val1)) {
    if (!Object.hasOwn(val2, key)) {
      return false;
    }

    if (!deepEquals(val1[key], val2[key])) {
      return false;
    }
  }

  return true;
}
```
