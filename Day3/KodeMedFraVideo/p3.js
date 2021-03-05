var mypromise = (txt, delay) =>
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello " + txt);
    }, delay);
  });

const results = [];
mypromise("Number 1", 2000)
  .then((txt) => {
    results.push(txt);
    return mypromise("Number 2", 1000);
  })
  .then((txt) => {
    results.push(txt);
    return mypromise("Number 3", 500);
  })
  .then((txt) => results.push(txt))
  .catch((e) => console.log(e))
  .finally(() => console.log(results.join(", ")));
