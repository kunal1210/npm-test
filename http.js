const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is home page");
  }
  if (req.url === "/about") {
    res.end("this is about page");
  }
  res.end(`
  <h1> oops ! </h1>
  <p> we cant seems to find the page your looking for </p>
  <a href="/">back to home</a>
  `);
});

server.listen(3000);
