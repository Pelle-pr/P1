var mymodule = require("./mymodule");
var dir = process.argv[2];
var extension = process.argv[3];

let callback = function (err, list) {
  if (err) console.log(err);
  list.forEach((element) => {
    console.log(element);
  });
};

mymodule(dir, extension, callback);
