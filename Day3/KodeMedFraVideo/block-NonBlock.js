const fs = require("fs");

function workwork() {
  console.log("ARBEJD ARBEJD");
}

//Blocking
const data = fs.readdirSync(__dirname);
console.log("-----BLOCKING------");
console.log(data);
workwork();

//Non-Blocking
fs.readdir(__dirname, (err, data) => {
  if (err) throw err;

  console.log(data);
});
console.log("------NON BLOCKING-----");
workwork();
