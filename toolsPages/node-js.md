---
date: "2025-05-05"
title: "Node.js"
description: "Node.js is a runtime environment that allows you to run JavaScript outside of the browser."
img: "node-js.svg"
---

Node.js lets you run JavaScript on the server side, enabling you to build scalable network applications.

For example, you should understand how to create a basic HTTP server:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

Started learn: **2025-08-10**

Learn more about it [**here**](https://nodejs.org/en).
