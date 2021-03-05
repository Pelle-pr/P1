const http = require("http");
let ip = process.argv[2];

http
  .get(ip, (res) => {
    res.setEncoding("utf-8");

    res.on("data", console.log);
    res.on("error", console.log);
  })
  .on("error", console.log);
