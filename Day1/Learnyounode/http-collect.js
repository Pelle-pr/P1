let ip = process.argv[2];
const http = require("http");
const bl = require("bl");

http.get(ip, (res) => {
  res.pipe(
    bl(function (err, data) {
      let content = data.toString();
      console.log(content.length);
      console.log(content);

      if (err) console.log(err);
    })
  );
});
