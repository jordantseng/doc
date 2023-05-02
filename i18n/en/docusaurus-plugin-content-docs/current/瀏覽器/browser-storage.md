# 資料存儲

### TL;DR

Cookie、SessionStorage、LocalStorage 都是在前端網頁中存儲資料的方式，但是它們之間有著不同的特點和用途。

1. Cookie

- 容量限制：一般不能超過 4KB。
- 生命週期：可以設置過期時間，過期後會自動刪除，沒有設置的話，預設是關閉瀏覽器之後失效。
- 使用場景：Cookie 會被**自動夾帶在 HTTP 請求中**，所以常使用在需要辨識用戶的場景，例如登入信息、用戶名、購物車內容等。

2. Session Storage

- 容量限制：通常為 5MB ~ 10MB（依不同瀏覽器）。
- 生命週期：在每次關閉該分頁、或是關閉瀏覽器後就會自動被清除。
- 使用場景：通常被用來**儲存短期**的資料，用來在網站的不同頁面間共享資料。

3. Local Storage

- 容量限制：通常為 5MB ~ 10MB（依不同瀏覽器）。
- 生命週期：除非在用戶端被手動刪除或是清除資料，否則將永久保存。
- 使用場景：通常被用來**儲存長期**的資料，例如使用者的偏好設定、歷史紀錄等。

參考資料：

1. [https://www.explainthis.io/zh-hant/interview-guides/browser/cookie-sessionstorage-localstorage-difference](https://www.explainthis.io/zh-hant/interview-guides/browser/cookie-sessionstorage-localstorage-difference)
