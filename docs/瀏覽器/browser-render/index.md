# 瀏覽器渲染

### TL;DR

1. DOM Tree: 透過解析 HTML 建構而成。
2. CSSOM Tree: 透過解析 CSS 建構而成。
3. 建構 Render Tree: 合併 DOM Tree 和 CSSOM Tree (只包含需要被渲染到頁面的節點)。
4. Layout (Reflow): 計算每個節點在瀏覽器的實際位置與實際 pixel 大小。
5. Paint (Repaint): 將 Render Tree 繪製到瀏覽器上。

![render-process.png](./render-process.png)

### 渲染流程

1. 從 DOM Tree 的根元素開始遍歷每一個可視節點。

   :::note

   有些節點是不會顯示在瀏覽器上的，像是 `<script>`、`<meta>`。

   此外，有些透過 CSS 隱藏的節點也不會顯示在瀏覽器上，如 `display: none`。
   :::

2. 每一個 DOM Tree 上的可視節點會找到 CSSOM Tree 上對應的節點並套用該節點的 CSS 規則，組成 Render Tree。

![render-tree](./render-tree.avif)

3. 瀏覽器在計算好包含節點以樣式的 Render Tree 後，會進入 Layout 階段，瀏覽器會透過裝置的 `viewport` 來計算實際的位置以及尺寸。
4. 進入 Paint 階段，瀏覽器會透過 Render Tree 計算好的節點、樣式、實際位置以及尺寸，繪製到瀏覽器上。

### Reflow

Reflow 與元素的佈局有關，元素的佈局和幾何屬性改變時，就會觸發 Reflow。

#### 觸發 Reflow 的屬性

- box model 相關屬性: `width`、`height`、`margin`、`display`、`border` ...
- 定位及浮動屬性: `position`、`top`、`float` ...
- 文字結構相關屬性: `text-align`、`overflow`、`font-size` ...

除了這三種 CSS 屬性會觸發 reflow 外，以下情況也會觸發:

- 調整瀏覽器視窗大小
- DOM 操作
- 取得元素的 `offsetWidth`、`offsetHeight`、`clientWidth`、`clientHeight`、`width`、`height`、`scrollTop`、`scrollHeight`

#### Reflow 是批次執行

### Repaint

元素的樣式屬性改變時，就會觸發 Repaint。會觸發 Repaint 的屬性有:

- `background`、`color`、`visibility` ...

  :::warning 注意

  由頁面的渲染過程可知， Reflow 必定會觸發 Repaint，然而 Repaint 不會觸發 Reflow。

  修改 `width` → Reflow → Repaint

  修改 `color` → Repaint
  :::

### FAQ

```js
document.addEventListener('DOMContentLoaded', function () {
  var date = new Date();
  for (var i = 0; i < 70000; i++) {
    var tmpNode = document.createElement('div');
    tmpNode.innerHTML = 'test' + i;
    document.body.appendChild(tmpNode);
  }
  console.log(new Date() - date);
});
```

參考來源:

1. [reflow 和 repaint 引发的性能问题](https://juejin.cn/post/6844903567275327496)
2. [Render-tree Construction, Layout, and Paint](https://web.dev/critical-rendering-path-render-tree-construction/)
3. [[CSS] Reflow 及 Repaint 是什麼？](https://ithelp.ithome.com.tw/articles/10217427)
