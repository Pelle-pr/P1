const count = require("./closures");
const count2 = require("./closures");
count.inc();
count.inc();

console.log(count.value());

console.log(count2.value());
