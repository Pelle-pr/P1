var http = require("http");
var url = require("url");
const time = require("strftime");

http
  .createServer(function (request, response) {
    url = url.parse(request.url, true);

    if (url.pathname === "/api/parsetime") {
      let time = new Date(url.query.iso);

      response.end(JSON.stringify(timeObj(time)));
    }

    if (url.pathname === "/api/unixtime") {
      let time = new Date(url.query.iso);
      response.end(JSON.stringify(unixObj(time)));
    }
  })
  .listen(+process.argv[2]);

function timeObj(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function unixObj(date) {
  return {
    unixtime: date.getTime(),
  };
}
