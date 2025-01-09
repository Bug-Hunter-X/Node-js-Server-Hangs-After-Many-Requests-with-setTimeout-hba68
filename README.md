# Node.js Server Hangs After Many Requests with setTimeout

This repository demonstrates a bug where a Node.js server hangs after a large number of requests when using `setTimeout` to simulate delays.  The server eventually becomes unresponsive.

## Bug Description

The server uses `http.createServer` and `setTimeout` to simulate a 5-second delay before sending a response. While this works for a small number of requests, it will eventually lead to the server becoming unresponsive.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Send multiple requests to `http://localhost:3000` using a tool like `curl` or a browser.
4. Observe the server's responsiveness after a significant number of requests.

## Solution

The solution uses `setInterval` to check request completion to resolve this.