# Quick Sort

### Quick Sort 原理:

1. 選擇樞紐: 從數列中選擇一個元素作為樞紐 (pivot)。該選擇會影響排序的效率，因此選擇一個適當的 pivot 對於算法的性能至關重要。

2. 分割數列 (partition): 將數列根據 pivot 分成兩個子數列。將小於 pivot 值的元素放入左子數列，大於等於 pivot 值的元素放入右子數列。

3. 遞迴: 對分割後的左子數列和右子數列進行遞迴排序。遞迴排序的過程會對子數列進行再次的 pivot 選擇、分割和遞迴處理。通過不斷地遞迴處理子數列，最終，每個子數列會變得越來越小，直至只剩下一個元素，此時整個數列就完成了排序。

:::tip
pivot 的選擇可以為任意的數字，不過選擇的 pivot 為中位數時會有最好的效率。
:::

### Big O

Time:

- Average: `O(nlog(n))`
- Worst: `O(n^2)`

當選擇的樞紐為該數列最小或者最大的值時，因為無法利用將數組分割成兩個部分，因此擁有最差的時間複雜度。

Space:

- Average: `O(log(n))`
- Worst: `O(log(n))`

### 實作 I

較簡單的版本，但使用較多的空間。

```jsx
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const left = [];
  const pivot = array[array.length - 1];
  const right = [];

  for (let i = 0; i < array.length - 1; i += 1) {
    const current = array[i];
    if (current < pivot) {
      left.push(current);
    } else {
      right.push(current);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

### 實作 II

原地交換版本，使用較少的空間。

```jsx
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return arr;
  }

  const middle = partition(arr, start, end);

  quickSort(arr, start, middle - 1);
  quickSort(arr, middle + 1, end);

  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let j = start - 1;

  for (let i = start; i < arr.length - 1; i += 1) {
    const current = arr[i];
    if (current < pivot) {
      j += 1;
      swap(arr, i, j);
    }
  }

  swap(arr, j + 1, end);

  return j + 1;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
```
