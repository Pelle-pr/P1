const Logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events"); //Class
const logger = new Logger();

// Path object
let pathObj = path.parse(__filename);
console.log(pathObj);

// os object
let totalMem = os.totalmem();
let freeMem = os.freemem;

console.log(`Total memory = ${totalMem} Free memory = ${freeMem}`);

//SYNC
let files = fs.readdirSync("./"); // array a Strings
console.log(files);

// ASYNC; DET VIL VIL!
fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

// Raise: Logging (data:message)
logger.log("Test");

// Register a listener
logger.on("MessageLogged", (arg) => {
  console.log("LISTENER CALLED", arg);
});
