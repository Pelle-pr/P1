const net = require("net");
let port = process.argv[2];
const time = require("strftime");

const server = net.createServer((socket) => {
  let date = new Date();
  let format = "%Y-%m-%d %H:%M";

  socket.end(time(format, date) + "\n");
});

server.listen(port);
console.log(`Listening on port ${port}`);
