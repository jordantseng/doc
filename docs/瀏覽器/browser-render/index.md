# 渲染

### TL;DR

渲染流程

1. 透過解析 HTML 建構 DOM Tree。
2. 透過解析 CSS 建構 CSSOM Tree。
3. 合併 DOM Tree 和 CSSOM Tree 建構 Render Tree。
4. Layout (Reflow): 計算每個節點在瀏覽器的確切位置和大小。
5. Paint (Repaint): 將 Render Tree 中的元素轉換為實際的像素。
6. Composite: 將各個元素的像素合併在一起，形成最終的渲染畫面。

![render-process.png](./render-process.png)

### 渲染流程

1. 建構 DOM Tree

- 透過解析 HTML 建構而成。

2. 建構 CSSOM Tree

- 透過解析 CSS 建構而成。

3. 建構 Render Tree

- 從 DOM Tree 的根元素開始遍歷每一個可視節點。

:::note

有些節點不會顯示在瀏覽器上，例如: `<script>`、`<meta>`。

有些透過 CSS 隱藏的節點也不會顯示在瀏覽器上，例如 `display: none`。
:::

- 每一個 DOM Tree 上的可視節點會與 CSSOM Tree 上對應的節點合併成 Render Tree。

![render-tree](./render-tree.avif)

4. Layout (Reflow)

- 從 Render Tree 根元素開始計算出每一個元素的確切位置和大小，需要耗費大量的運算資源。

5. Paint (Repaint)

- 將 Render Tree 中的元素轉換為實際的像素。

6. Composite

- 瀏覽器將各個元素的像素合併在一起，形成最終的渲染畫面。

### Reflow

Reflow 與元素的佈局有關，元素的佈局和幾何屬性改變時，就會觸發 Reflow。觸發 Reflow 的屬性有:

- box model 相關屬性: `width`、`height`、`margin`、`display`、`border` ...
- 定位及浮動屬性: `position`、`top`、`float` ...
- 文字結構相關屬性: `text-align`、`overflow`、`font-size` ...

除了這三種 CSS 屬性會觸發 reflow 外，以下情況也會觸發:

- 調整瀏覽器視窗大小
- DOM 操作
- 取得元素的 `offsetWidth`、`offsetHeight`、`clientWidth`、`clientHeight`、`width`、`height`、`scrollTop`、`scrollHeight`

### Repaint

元素的樣式屬性改變時，就會觸發 Repaint。會觸發 Repaint 的屬性有:

- `background`、`color`、`visibility` ...

  :::note

  由頁面的渲染過程可知， Reflow 必定會觸發 Repaint，然而 Repaint 不會觸發 Reflow。

  例如:

  修改 `width` → Reflow → Repaint

  修改 `color` → Repaint

  :::

### 優化

#### 1. 屬性替換

- 使用 `translate` 取代 `top` 等定位屬性

#### 2. 減少 reflow, repaint 操作

- 直接修改 `classname` 或 `cssText`。

```jsx
// ❌ 2次 reflow 操作
element.style.left = '1px';
element.style.top = '2px';

// ✅ 1次 reflow 操作
element.className += ' className1';
```

- 使用 `cloneNode()` 複製一份 DOM，在上面修改樣式後，在替換原本的 DOM。

- 使用 `createDocumentFragment()` 建立一份暫時的 DOM，再對真實的 DOM 做一次操作。

```jsx
document.addEventListener('DOMContentLoaded', function () {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 7000; i++) {
    const node = document.createElement('div');
    node.innerHTML = 'test' + i;
    fragment.appendChild(node);
  }

  document.body.appendChild(fragment);
});
```

- 減少取得元素的 的次數

瀏覽器為了取得真實的值，當以下屬性每次被訪問時，都會造成 reflow:

1. offsetTop/Left/Width/Height
2. scrollTop/Left/Width/Height
3. clientTop/Left/Width/Height

```jsx
// ❌
for (let i = 0; i < 10; i++) {
  element.style.left = element.offsetLeft + 5 + 'px';
  element.style.top = element.offsetTop + 5 + 'px';
}

// ✅
let left = element.offsetLeft;
let top = element.offsetTop;
let s = element.style;
for (let i = 0; i < 20; i++) {
  left += 5;
  top += 5;
  s.left = left + 'px';
  s.top = top + 'px';
}
```

#### 3. 減少影響範圍

- 將改動頻繁的範圍建立單獨的圖層

參考來源:

1. [reflow 和 repaint 引发的性能问题](https://juejin.cn/post/6844903567275327496)
2. [Render-tree Construction, Layout, and Paint](https://web.dev/critical-rendering-path-render-tree-construction/)
3. [[CSS] Reflow 及 Repaint 是什麼？](https://ithelp.ithome.com.tw/articles/10217427)
