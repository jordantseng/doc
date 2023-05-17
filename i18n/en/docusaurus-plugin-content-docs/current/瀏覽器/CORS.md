# CORS

### TL;DR

- The **Same-Origin Policy** in browsers prevents websites with different origins from accessing resources of other websites.
- To access resources from a different origin, **CORS** (Cross-Origin Resource Sharing) mechanisms must be used.
- CORS requests are categorized into two types: **simple requests** and **preflight requests**.
- To resolve CORS issues, the solution is to have the backend engineer configure the server to include the appropriate response headers specifying the allowed origins and methods.

Before understanding what CORS is, it is necessary to know the concepts of **protocol**, **domain**, and **port**, and learn how to determine whether two URLs are of the same origin.

### Same Origin

For two sources to be considered "same origin", they must meet the following three conditions:

1. Same protocol
2. Same domain
3. Same port

The URL `https://jordantseng.github.io:443/frontendwiz/JavaScript` can be analyzed as follows:

- protocol: `https`
- domain: `jordantseng.github.io`
- port: `443`
- path: `frontendwiz/JavaScript`

```jsx
// http://jordantseng.github.io => Different protocol, not the same origin.
// https://jordantseng.github.com => Different domain, not the same origin.
// https://jordantseng.github.io:5000 => Different port, not the same origin.
// https://jordantseng.github.io/frontendwiz => Same origin.
```

### Same-Origin Policy

The same-origin policy in browsers is the fundamental security mechanism that prevents websites with different origins from accessing resources of other websites.

This blocking mechanism occurs in the browser after receiving a response from the server.

### CORS (Cross-Origin Resource Sharing)

In practice, when attempting to access resources from different origins, the browser automatically initiates a CORS request.

The server-side HTTP headers play a crucial role in informing the browser whether the requested origin is permitted to be accessed.

:::note

If the server does not implement any blocking and returns a response, the browser will receive the response.

However, due to the same-origin policy, the browser restricts access to the response, leading to errors or restrictions in manipulating the response data.

:::

CORS requests are categorized into two types: **simple requests** and **preflight requests**.

1. Simple Requests

- Requests made using the `GET`, `HEAD`, or `POST` methods are considered [simple requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests)。

- For a simple request, the browser directly sends the request to the server and automatically includes the origin of the request in the request's headers.

- The server's response can include the **Access-Control-Allow-Origin** header, which can specify either a specific origin or a wildcard (\*) to indicate that any origin is allowed.

```jsx
// specify a specific origin is allowed
// Access-Control-Allow-Origin: https://jordantseng.github.io

// a wildcard * to indicate that any origin is allowed
// Access-Control-Allow-Origin:＊
```

2. Preflight Requests

- Whenever a request does not meet the conditions for a simple request, the browser always initiates an additional HTTP request known as a **preflight request**.

- The method used for a preflight request is **OPTIONS**. Once the preflight request is successfully completed, the actual request is then sent.

FAQ: Why do we need preflight requests? Isn't it wasteful to have an extra request before the actual one 🤔

**Although the same-origin policy doesn't block requests, it does block responses.** This means that if a malicious user sends a `DELETE` request, the same-origin policy won't stop the request itself.

In other words, without an extra layer of protection, the attacker could freely send `DELETE` requests and potentially delete server-side resources.

Preflight requests act as an additional layer of filtering. Only when the preflight request successfully passes, the actual request is then sent to the server.

### How to resolve CORS

TL;DR: Ask the backend engineer to configure the CORS headers on the server-side.

When encountering CORS issues, the following steps can be followed:

Simple requests:

1. Add the `Access-Control-Allow-Origin` header to the backend's `GET` / `HEAD` / `POST` methods.

Non-simple requests:

1. Implement an `OPTIONS` method on the server to handle preflight requests.
2. In the `OPTIONS` response, include the `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers` headers.
3. Include the `Access-Control-Allow-Origin` header in the responses of backend methods handling the actual requests.

Reference:

1. [https://shubo.io/what-is-cors/#同源政策-same-origin-policy](https://shubo.io/what-is-cors/#%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-same-origin-policy)
2. [https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-cors](https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-cors)
