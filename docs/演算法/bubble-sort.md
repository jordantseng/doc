# Bubble Sort

將較大的數字像冒泡一樣，將它移動到最後一個 index。

### Bubble Sort 步驟:

1. 從列表的第一個元素開始，比較它與下一個元素。

2. 如果第一個元素大於第二個元素，就交換它們的位置。

3. 繼續比較第二個元素和第三個元素，以此類推，直到到達列表的最後一個元素。

4. 一次完整的遍歷之後，列表中的最大元素已經被移動到了列表的末尾。

5. 重複上述步驟，每次遍歷都會將當前未排序部分中的最大元素移動到相應位置。

6. 重複這個過程，直到整個列表都已經排好序。

### Big O

Time: `O(n^2)`

Space: `O(1)`

### 實作 I

```jsx
function bubbleSort(nums) {
  let isSorted = false;
  for (let i = 0; i < nums.length; i += 1) {
    isSorted = true;

    for (let j = 0; j < nums.length - 1 - i; j += 1) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        isSorted = false;
      }
    }

    if (isSorted) {
      return nums;
    }
  }

  return nums;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}
```

### 實作 II

```jsx
function bubbleSort(array) {
  let isSorted = false;
  let count = 0;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < array.length - 1 - count; i += 1) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }

    count += 1;
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}
```
