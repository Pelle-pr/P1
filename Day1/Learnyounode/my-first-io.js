const fs = require("fs");

let content = fs.readFileSync(process.argv[2]);

let lines = content.toString().split("\n").length - 1;

console.log(lines);

// let content = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
