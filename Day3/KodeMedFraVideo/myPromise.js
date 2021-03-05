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

module.exports = myPromise;
