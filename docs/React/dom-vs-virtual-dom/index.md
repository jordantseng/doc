# DOM vs. Virtual DOM

### 什麼是 DOM

- DOM (Document Object Model / 文件物件模型)：描述 [Web Documents](#web-documents) 的物件。
- DOM tree：以各個元素的 entry point 產生的樹狀結構，用以表示 page 的內容

  ![alt text](./pic_htmltree.gif)

- Shadow DOM
  - 為瀏覽器封裝標記、樣式與結構的技術
  - 可隱藏原先 DOM 的細節
  - e.g. `<input type="range" />` `<input type="date" />`

### 什麼是 Virtual DOM

- `Virtual DOM (VDOM)` 為透過 diff 演算法 以及 `ReactDOM` 同步當前的 real DOM 的技術
- 這個編程過程稱為 `reconciliation`

#### Web Documents

- 為發布到 `World Wide Web (a.k.a. WWW)` 底下並可透過瀏覽器造訪的文件。
- 通常以 HTML 描述，包含
  - HTML / CSS
  - JavaScript
  - XML
  - Images
  - Videos

#### 使用 Virtual DOM 的 framework/library

- [React](https://zh-hant.reactjs.org/)
- [Vue](https://vuejs.org/)

參考來源:

1. [https://zh-hant.reactjs.org/docs/faq-internals.html](https://zh-hant.reactjs.org/docs/faq-internals.html)
2. [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
3. [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
4. [https://developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
