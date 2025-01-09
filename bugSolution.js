const http = require('http');

const server = http.createServer((req, res) => {
  // Use setInterval to check for request completion
  let completed = false;
  const intervalId = setInterval(() => {
    if (completed) {
      clearInterval(intervalId);
    }
  }, 100); //Check every 100ms

  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
    completed = true; // Mark request as complete
  }, 5000); // 5 seconds delay
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});