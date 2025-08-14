const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} New Req received: ${req.url}\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }

    console.log(req.headers);

    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("About");
        break;
      default:
        res.statusCode = 404;
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server started on port 8000"));
