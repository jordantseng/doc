# Virtual DOM

在說明到 Virtual DOM 之前，我們先來理解一下它與 DOM 之間的差異

### 什麼是 DOM

DOM (Document Object Model / 文件物件模型)：描述 [Web Documents](#web-documents) 的物件。<br/>
DOM tree：瀏覽器解析 [Web Documents](#web-documents) 後所生成的一個樹狀結構，其中每個節點代表網頁文檔中的一個元素、屬性或文字。<br/>

![alt text](./pic_htmltree.gif)

Shadow DOM：

- 為瀏覽器封裝標記、樣式與結構的技術
- 可隱藏原先 DOM 的細節，例如

```html
<input type="range" />

<input type="date" />
```

#### Web Documents

為發布到 **World Wide Web (WWW)** 底下並可透過瀏覽器造訪的文件<br/>
通常以 HTML 描述，包含

- HTML / CSS
- JavaScript
- XML
- Images
- Videos

### 什麼是 Virtual DOM

Virtual DOM (VDOM) 是一種技術，它使用 [Diffing 演算法](#diffing-演算法) 比較虛擬 DOM 的前後狀態，只將差異部分更新到真實 DOM，以提高網頁效能<br/>
此概念最早由 **React** 實現<br/>
這個透過 [Diffing 演算法](#diffing-演算法) 比對的過程稱為 **reconciliation**，包含

- 創建新的虛擬 DOM tree
- 比較新舊虛擬 DOM tree 並找尋差異
- 將差異的結果透過 `react-dom` 更新至真實 DOM tree 上

#### Diffing 演算法

比較兩棵 tree 的 root element<br/>
若 root element 為 **不同類型的 element** 時則直接銷毀並建立新的 tree，例如<br/>

- `<a>` → `<img>`
- `<img>` → `<Button>`
- `<Button>` → `<a>`<br/>

就算包裹的是 **同類型的 element**，**React** 仍會視為 **不同類型的 element** 而建立新的 tree，例如

```tsx
// 從
<div>
  <Counter />
</div>

// 變成
<span>
  <Counter />
</span>
```

若是 **同類型的 element** 且只有 attribute 變更，**React** 則會保留 DOM 節點，只異動該 attribute，例如

```tsx
// 從
<div className="before" title="stuff" />

// 變成
<div className="after" title="stuff" />
```

#### 使用 Virtual DOM 的 framework/library

1. [React](https://zh-hant.reactjs.org/)
2. [Vue](https://vuejs.org/)

參考來源:

1. [https://zh-hant.reactjs.org/docs/faq-internals.html](https://zh-hant.reactjs.org/docs/faq-internals.html)
2. [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
3. [https://developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
