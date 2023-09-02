# Merge Sort

使用分治策略（Divide and Conquer）來處理排序問題。這種算法將一個大的問題拆分成多個小問題，然後合併這些小問題的解答，最終得到整個問題的解答。

### Merge Sort 步驟:

1. 分割 (Divide): 將待排序的數組分成兩個相等大小（或近似相等）的子數組，這一過程持續遞迴，直到每個子數組只包含一個元素，此時每個子數組都可以視為已排序。

2. 合併 (Conquer): 將這些已排序的子數組合併成一個大的有序數組。在合併的過程中，比較兩個子數組的元素，按照順序合併它們，直到所有元素都被合併到一個大數組中。

3. 遞迴 (Recursion): 這個分割和合併的過程是遞迴的，通過不斷將問題分解為更小的子問題，並合併子問題的解答，最終得到整個問題的解答。

### Big O

Time: `O(nlogn)`

Space: `O(n)`

### 實作 I

```jsx
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(array1, array2) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i += 1;
    } else {
      result.push(array2[j]);
      j += 1;
    }
  }

  if (i !== array1.length) {
    result.push(...array1.slice(i));
  }

  if (j !== array2.length) {
    result.push(...array2.slice(j));
  }

  return result;
}
```
