const http = require("http");
const fs = require("fs");
const port = process.argv[2];
const dir = process.argv[3];

const server = http.createServer((req, res) => {
  let readStream = fs.createReadStream(dir);

  readStream.on("open", function () {
    readStream.pipe(res);
  });
});

server.listen(port);
