const {
  filterDir,
  filterDirP,
  myOwnPromiseFilter,
  promisifyFilter,
} = require("./filterdir");

//filterDir(_dirname, ".js", (err, files) => {
//if (err) {
// console.log(err);
// }
//console.log(files);
//});

// myOwnPromiseFilter(__dirname, "js")
//   .then((files) => console.log(files))
//   .catch((err) => console.log(err));

async function testerSequential() {
  try {
    const f1 = await myOwnPromiseFilter("Folder1", "js");
    const f2 = await myOwnPromiseFilter("Folder2", "js");
    const f3 = await myOwnPromiseFilter("Folder3", "js");
    const f4 = await myOwnPromiseFilter("Folder4", "js");
    const f5 = await myOwnPromiseFilter("Folder5", "js");
    console.log("----- Sequential -----", [f1, f2, f3, f4, f5]);
  } catch (err) {
    console.log(err);
  }
}

async function testerParallel() {
  const f1 = myOwnPromiseFilter("Folder1", "js");
  const f2 = myOwnPromiseFilter("Folder2", "js");
  const f3 = myOwnPromiseFilter("Folder3", "js");
  const f4 = myOwnPromiseFilter("Folder4", "js");
  const f5 = myOwnPromiseFilter("Folder5", "js");

  const result = await Promise.all([f1, f2, f3, f4, f5]);
  console.log("----- Parallel -----", result);
}
testerSequential();
testerParallel();

// promisifyFilter(__dirname, "json").then((files) => console.log(files));
