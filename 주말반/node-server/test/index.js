var http = require("http");

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hello NodeJS")
}).listen(3000, () => {
  console.log('3000번 port에서 실행중...')
});