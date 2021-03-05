const { time } = require("console");
const fetch = require("node-fetch");
const { join } = require("path");

const getJokesSequental = async () => {
  const jokes = [];
  const j1 = await fetch("http://api.icndb.com/jokes/random").then((r) =>
    r.json()
  );
  const j2 = await fetch("http://api.icndb.com/jokes/random").then((r) =>
    r.json()
  );
  jokes.push(j1.value.joke);
  jokes.push(j2.value.joke);
  return jokes;
};

const get50JokesSequental = async () => {
  const jokes = [];
  const timestart = Date.now();
  for (let i = 0; i < 50; i++) {
    const p = await fetch("http://api.icndb.com/jokes/random").then((r) =>
      r.json()
    );
    jokes.push(p.value.joke);
  }
  const timeEnd = Date.now();
  console.log("SEQUENTAL TIME IS: ", (timeEnd - timestart) / 1000);
  return jokes;
};

const get50JokesParallel = async () => {
  const promises = [];
  const timestart = Date.now();
  for (let i = 0; i < 50; i++) {
    const p = fetch("http://api.icndb.com/jokes/random").then((r) => r.json());
    promises.push(p);
  }
  const all = await Promise.all(promises);
  const timeEnd = Date.now();
  console.log("Parallel TIME IS: ", (timeEnd - timestart) / 1000);
  return all.map((j) => j.value.joke);
};

async function test() {
  const jokes = await get50JokesSequental();
  console.log(jokes);
}

async function test2() {
  const jokes = await get50JokesParallel();
  console.log(jokes);
}

test();
test2();
