const http = require("http");

const server = http.createServer((req, res, next) => {
  if (req.url == "/") {
    res.end(" Welcome to the Home Page");
  } else if (req.url == "/contact") {
    res.end(" Welcome to Contat Page");
  } else {
    res.end(
      `<h1> opps!! </h1> <p> We cant seem to find the page that you are looking for</p>`
    );
  }
});

server.listen(5000);
