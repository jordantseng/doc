# Selection Sort

### Selection Sort 步驟:

1. 從待排序的數列中找到最小的元素。

2. 將找到的最小元素與待排序數列的第一個元素交換位置。

3. 在剩下的未排序數列中，找到最小的元素，與未排序數列的第二個元素交換位置。

4. 重複上述步驟，每次在剩餘的未排序數列中找到最小元素，並將其與未排序數列的開頭元素交換，直到所有元素都排序完畢。

### Big O

Time: `O(n^2)`

Space: `O(1)`

### 實作

```jsx
function selectionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let minValIndex = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[minValIndex]) {
        minValIndex = j;
      }
    }

    swap(array, i, minValIndex);
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}
```
