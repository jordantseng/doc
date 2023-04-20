# XSS

### TL;DR

- XSS 攻擊是指從 Client 端注入一些惡意腳本，通常是從可信的來源發出，因此能夠繞過同源政策，故稱為 cross-site scripting。
- XSS 有三種種類：Stored XSS、Reflected XSS、DOM-Based XSS
- 可以透過檢查使用者輸入的內容，將輸入的內容轉為字串或者將關鍵字 `<script>`、`onerror` 刪除。
- 可以透過 CSP，只執行授權來源的腳本。

### 什麼是 XSS（cross-site scripting）

XSS 攻擊是指從 Client 端注入一些惡意腳本（通常為 JavaScript），使用戶在查看該網頁時受到攻擊。通常是從可信的來源發出，因此能夠繞過同源政策，故稱為 cross-site scripting（跨域腳本攻擊）。

舉例來說，某用戶以合法身份進到某個網站，由於他的身份是合法的，網站認為該用戶輸入的東西是可信任的，因此就算該用戶注入惡意腳本，網站也會認為該程式是可信任的。

容易發生在未正確驗證用戶輸入或輸出的網站，經常用來竊取用戶資訊（如密碼或 Cookie）、修改或刪除頁面內容，甚至將用戶導向不同的網站。

### XSS 類型

1. **Stored XSS**

- 將惡意腳本儲存在資料庫中引起的攻擊。
- 攻擊者可能會在網站上的評論區輸入一些包含惡意腳本的評論，然後這些評論會被儲存在資料庫中。當其他用戶查看該頁面時，惡意腳本就會被載入並在用戶的瀏覽器上執行。

2. **Reflected XSS**

- 將惡意腳本注入到 URL 引起的攻擊。
- 當受害者點擊含有惡意腳本的 URL 並訪問相應的網頁時，網站會將 URL 中的腳本反射回網頁，並被瀏覽器執行。

```php
// 這段 php 程式碼會從 GET 請求獲取名為 name 的參數，並將其插入到 html 中
// 如果 GET 請求為 https:*//jordantseng.github.io?name=<script>alert(1)</script>
// <script>alert(1)</script> 這段腳本可能會被反射到網頁上並執行。*

<h3>Hi, I am <?=$_GET['name']?></h3>
```

3. **DOM-Based XSS**

- 通過對網頁中 DOM 元素進行修改或者添加所引起的攻擊。
- 與 Stored XSS 和 Reflected XSS 不同，不須將惡意腳本發送到 Server 端，直接在 Client 進行攻擊。

```js
<input id="input" />
<div>Hi, I am <span id="name"></span></div>
<button id="button">submit</button>
<script>
  const input = document.getElementById('input');
  const name = document.getElementById('name');
  const button = documnet.getElementById('button');

  // 此情況是一個典型的 DOM-Based XSS 的例子
  // 當使用者在 input 輸入 <script>alert(1)</script> 時，這段惡意腳本將會執行
  // 因此當要使用動態的內容時，避免使用 innerHTML，使用 textContent/innerText
  button.addEventListener('click', () => {
    name.innerHTML = input.value;
  });
</script>
```

### 如何防範 XSS

1. Stored、Reflected XSS 可以透過 Server 端防範，檢查任何允許用戶輸入的內容，像是`<script>`、`onerror` 等指令。
2. DOM-Based XSS 可以透過 Client 端防範，檢查任何可輸入欄位，透過跳脫機制讓腳本被轉換成字串。
3. XSS 可以透過 [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) （content security policy）防範，避免瀏覽器載入來自未授權來源的腳本。舉例來說，如果設定只有來自與網站同一個網域的腳本可被執行，那麼其他由惡意攻擊者注入的腳本，就會被認定成不該執行的，就不會被執行。

參考來源：

1. [https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-xss](https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-xss)
2. [https://medium.com/hannah-lin/content-security-policy-csp-幫你網站列白名單吧-df38c990f63c](https://medium.com/hannah-lin/content-security-policy-csp-%E5%B9%AB%E4%BD%A0%E7%B6%B2%E7%AB%99%E5%88%97%E7%99%BD%E5%90%8D%E5%96%AE%E5%90%A7-df38c990f63c)

3. [https://tech-blog.cymetrics.io/posts/jo/zerobased-secure-samesite-httponly/](https://tech-blog.cymetrics.io/posts/jo/zerobased-secure-samesite-httponly/)
