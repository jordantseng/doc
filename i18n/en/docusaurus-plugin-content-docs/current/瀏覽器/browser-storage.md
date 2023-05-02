# Storage

### TL;DR

Cookie, Session Storage, and Local Storage are all ways to store data in browser, but they have different characteristics and uses.

1. Cookie

- Capacity：Generally cannot exceed 4KB.
- Life Cycle：Data can be set to expire after a certain time, or upon closing the browser if no expiration time is set.
- Use Case：Cookies are often used to identify users across different web pages and requests as they are automatically included in HTTP requests.

2. Session Storage

- Capacity：Usually between 5MB to 10MB (depending on the browser).
- Life Cycle：Data is cleared automatically when the page or browser is closed.
- Use Case：Session Storage is typically used to store short-term data for sharing between different pages on a website.

3. Local Storage

- Capacity：Usually between 5MB to 10MB (depending on the browser).
- Life Cycle：Data is stored permanently unless manually deleted or cleared by the user.
- Use Case：Typically used to store long-term data such as user preferences, browsing history, etc.

Reference：

1. [https://www.explainthis.io/zh-hant/interview-guides/browser/cookie-sessionstorage-localstorage-difference](https://www.explainthis.io/zh-hant/interview-guides/browser/cookie-sessionstorage-localstorage-difference)
