# CORS

在了解什麼是 CORS 前，我們需要先知道什麼是 protocol、domain、port，並學會判斷兩個 url 是否同源。

### 什麼是同源

**同源必須符合以下三者條件：**

1. 同通訊協定（protocol）
2. 同網域（domain）
3. 同通訊埠（port）

### 什麼是 protocol 、domain 、 port

1. `https://jordantseng.github.io/frontendwiz/JavaScript`

- protocol （協定）: `https://`
- domain （網域）: `jordantseng.github.io`
- path： `frontendwiz/JavaScript`

2. `http://localhost:3000/`

- protocol：`http://`
- domain： `localhost`
- port（通訊埠）：`3000`

```jsx
// 以 https://jordantseng.github.io/frontendwiz/JavaScript 為例：

https://jordantseng.github.com // 不同網域（domain），非同源
http://jordantseng.github.io // 不同通訊協定（protocol），非同源
https://jordantseng.github.io:5000 // 不同通訊埠（port），非同源
https://jordantseng.github.io/frontendwiz // 同源
```

### 什麼是**同源政策 (same-origin policy)**

瀏覽器的同源政策是最基本的保護機制，讓**不同源的網站無法存取到資源和資料，**這個**阻擋機制是在瀏覽器收到伺服器回應後發生的**。因此透過 fetch 或 XMLHttpRequest 存取資源時，必須遵守**同源政策**。

### CORS (Cross-Origin Resource Sharing)

實務上，我們經常會需要請求非同源的資源，這時候就必須透過 CORS 來達成。

當要獲取的資源**非同源**時，瀏覽器會自動發起一個跨域 (CORS) 請求，透過伺服器端 HTTP 標頭 (Header) 來告訴瀏覽器該來源是否允許被訪問。

```
❗ 如果伺服器沒有做任何阻擋且回傳結果，瀏覽器端其實是會收到回應的，但因為違反同源政策，瀏覽器會攔截這個回應並報錯。
```

CORS 又分為**簡單請求**和**預檢請求**兩種類型。

1. 簡單請求（Simple requests）

- 使用 `GET`、`HEAD`、`POST` 的方法時會是[簡單請求(Simple requests)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests)。

- 簡單請求瀏覽器會直接對伺服器端發送請求，並自動在 header 中的 origin 帶上來源。

- 伺服器的回應會在 header 中的  **Access-Control-Allow-Origin** 加上允許的來源，或是使用星號來代。

```jsx
// 如果要允許所有跨域來源的請求，可以用星號
Access-Control-Allow-Origin:＊

// 如果要允許特定來源的跨域請求，可以直接放入該來源
Access-Control-Allow-Origin: https://jordantseng.github.io
```

2. 預檢請求(Preflighted requests)

- 只要不符合簡單請求的條件，瀏覽器都會先做一次 HTTP 請求，稱之為**預檢請求(preflight)**。

- 預檢請求的方法是  **`OPTIONS`**，一旦預檢請求成功完成，真正的請求才會被送出。

有些人可能會想為什麼需要預檢請求？ 在正式求請前多一次請求，這樣不是很浪費資源嗎 🤔

同源政策只會擋回應，不會擋請求，所以假如某個惡意攻擊者發送 `DELETE` 的請求，同源政策不會擋下這個請求 （如果該請求後有回應，回應的部分才會擋下），換句話說如果沒有多一層過濾，惡意攻擊者任意發 `DELETE` 請求，就可能任意刪掉伺服器端的資源。

有了預檢請求，等於是多一層過濾，當預檢請求通過了，才會對伺服器發送真正的請求。

### 如何解決 CORS

結論：**請後端工程師在伺服器端做** CORS 標頭的設定

遇到 CORS 的問題，可以歸納出這樣的 SOP：

- 先認清楚是否為「簡單」的跨來源請求，如果是，在後端 GET/POST/HEAD 方法本身加上  `Access-Control-Allow-Origin` header。
- 如果非「簡單」跨來源請求，在後端 OPTIONS 加上  `Access-Control-Allow-Methods`  及  `Access-Control-Allow-Headers` header。另外，在後端方法本身加上  `Access-Control-Allow-Origin` header。

參考來源：

1. [https://shubo.io/what-is-cors/#同源政策-same-origin-policy](https://shubo.io/what-is-cors/#%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-same-origin-policy)
2. [https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-cors](https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-cors)
