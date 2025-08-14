const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} New Req received: ${req.url}\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }

    // console.log(req.headers);

    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`hi this is ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your search result for " + search);
        break;
      default:
        res.statusCode = 404;
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server started on port 8000"));
