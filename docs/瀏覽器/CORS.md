# CORS

### TL;DR

- 瀏覽器的同源政策旨在防止不同源的網站存取其他網站的資源。
- 若要存取非同源的資源，需要使用 CORS（跨源資源共享）機制。
- CORS 分為簡單請求和預檢請求兩種類型。
- 解決 CORS 問題的方法是請後端工程師在回應的標頭中設定允許的來源和方法。

在了解什麼是 CORS 前，我們需要先知道什麼是 protocol、domain、port，並學會判斷 url 是否同源。

### 同源 (Same Origin)

**同源必須符合以下三者條件:**

1. 同通訊協定（protocol）
2. 同網域（domain）
3. 同通訊埠（port）

以 `https://jordantseng.github.io:443/frontendwiz/JavaScript` 為例:

- protocol （協定）: `https`
- domain （網域）: `jordantseng.github.io`
- port（通訊埠）:`443`
- path: `frontendwiz/JavaScript`

```jsx
// http://jordantseng.github.io => 不同通訊協定（protocol），非同源
// https://jordantseng.github.com => 不同網域（domain），非同源
// https://jordantseng.github.io:5000 => 不同通訊埠（port），非同源
// https://jordantseng.github.io/frontendwiz => 同源
```

### **同源政策 (Same-Origin Policy)**

瀏覽器的同源政策是一個基本的保護機制，阻止**不同源的網站存取彼此的資源，**這個**保護機制是在瀏覽器接收到伺服器回應後發生的**。

### CORS (Cross-Origin Resource Sharing)

實務上，我們經常會需要非同源的資源，這時候就必須透過 CORS 來達成。

當要獲取的資源**非同源**時，瀏覽器會自動發起一個跨域 (CORS) 請求，透過伺服器端 HTTP 標頭 (Header) 來告訴瀏覽器該來源是否允許被訪問。

:::note

CORS 如果伺服器沒有做任何阻擋且回傳結果，瀏覽器端其實是會收到回應的，但因違反同源政策瀏覽器會攔截這個回應並報錯。

:::

CORS 又分為**簡單請求**和**預檢請求**兩種類型。

1. 簡單請求 (Simple Requests)

- 使用 `GET`、`HEAD`、`POST` 的方法時會是[簡單請求(Simple requests)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests)。

- 簡單請求瀏覽器會直接對伺服器端發送請求，並自動在標頭中的 Origin 帶上來源。

- 伺服器的回應會在標頭中的  **Access-Control-Allow-Origin** 加上允許的來源，或使用星號來代表允許所有跨域來源的請求。

```jsx
// 如果要允許特定來源的跨域請求，可以直接放入該來源
// Access-Control-Allow-Origin: https://jordantseng.github.io

// 如果要允許所有跨域來源的請求，可以用星號
// Access-Control-Allow-Origin:＊
```

1. 預檢請求 (Preflight Requests)

- 只要請求不符合簡單請求的條件，瀏覽器將會自動發送一個額外的預檢請求。

- 預檢請求的方法是 **`OPTIONS`**，一旦預檢請求成功完成，真正的請求才會被送出。

FAQ: 為什麼需要預檢請求？ 在正式求請前多一次請求，這樣不是很浪費資源嗎 🤔

由於同源政策只會擋回應，不會擋請求，所以假如某個惡意攻擊者發送 `DELETE` 的請求，同源政策不會擋下這個請求，換句話說如果沒有多一層過濾，惡意使用者任意發 `DELETE` 請求，就可能任意刪掉伺服器端的資源。

有了預檢請求，等於是多一層過濾，當預檢請求通過了，才會對伺服器發送真正的請求。

### 如何解決 CORS

TL;DR:**請後端工程師在伺服器端做** CORS 標頭的設定。

遇到 CORS 的問題，可以歸納出這樣的 SOP:

簡單請求:

1. 在伺服器端的 `GET` / `HEAD` / `POST` 方法中加入 `Access-Control-Allow-Origin` 標頭。

非簡單請求:

1. 在伺服器端實作 `OPTIONS` 方法來處理預檢請求。
2. 在 `OPTIONS` 回應中，加入 `Access-Control-Allow-Methods` 和 `Access-Control-Allow-Headers` 標頭。
3. 在處理實際請求的後端方法回應中，加入 `Access-Control-Allow-Origin` 標頭。

參考來源:

1. [https://shubo.io/what-is-cors/#同源政策-same-origin-policy](https://shubo.io/what-is-cors/#%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-same-origin-policy)
2. [https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-cors](https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-cors)
