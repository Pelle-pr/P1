const { rejects } = require("assert");
const { resolve } = require("path");

var myPromise = (txt, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const err = false;
      if (err) {
        reject(new Error("UPPS"));
      }
      resolve("Hello " + txt);
    }, delay);
  });

const p3 = myPromise("Number 3", 2000);
const p2 = myPromise("Number 2", 2000);
const p1 = myPromise("Number 1", 2000);

const promises = [p1, p2, p3];

Promise.all(promises)
  .then((d) => console.log(d.join(", ")))
  .catch((e) => console.log(e));
