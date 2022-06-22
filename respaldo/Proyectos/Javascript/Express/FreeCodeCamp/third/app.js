const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    // for (i = 0; i < 1000; i++) {
    //   for (j = 0; j < 1000; j++) {
    //     console.log(`${i} ${j}`);
    //   }
    // }
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

server.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}...`);
});
