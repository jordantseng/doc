# Insertion Sort

插入排序 (Insertion Sort) 其原理是將待排序的數列分成已排序和未排序兩部分，逐個將未排序的元素插入到已排序的部分，直到所有元素都被插入到合適的位置為止。

### Insertion Sort 步驟:

1. 將第一個元素視為已排序部分，其餘的元素視為未排序部分。

2. 從未排序部分取出第一個元素，將其與已排序部分的元素進行比較。

3. 比較過程中，如果未排序元素小於已排序元素，則將已排序元素後移一位，以便為未排序元素騰出插入位置。

4. 重複步驟 3，直到找到未排序元素的正確位置。將未排序元素插入到已排序部分的適當位置，形成一個更大的已排序部分。

5. 重複步驟 2 至步驟 4，直到所有未排序元素都被插入到已排序部分，最終形成一個完全排序的數組。

### Big O

Time: `O(n^2)`

Space: `O(1)`

### 實作

```jsx
function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j - 1, j);
      j -= 1;
    }
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}
```
