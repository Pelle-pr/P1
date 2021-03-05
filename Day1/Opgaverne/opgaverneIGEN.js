// 2,a) implement myFilter

const { prototype } = require("module");

let names = ["John", "Karl", "Kurt", "Allan"];

function myFilter(array, callback) {
  filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) filteredArray.push(array[i]);
  }
  return filteredArray;
}

const allNamesWithA = (name) => {
  if (name.includes("a")) return name;
};

console.log("Array before filters");
console.log(names);

let namesWithA = myFilter(names, allNamesWithA);
console.log("With myFilter");
console.log(namesWithA);

console.log("With filter()");
let withFilterMethod = names.filter((x) => x.includes("a"));
console.log(withFilterMethod);

console.log("------------");

//2,b)

const myMap = (array, callback) => {
  let mappedArray = [];

  array.forEach((element) => mappedArray.push(callback(element)));

  return mappedArray;
};

const toUpperCase = (element) => {
  return element.toUpperCase();
};

console.log("My Map");
let myMapArray = myMap(names, toUpperCase);
console.log(myMapArray);

console.log("With Map()");

let myMapArray1 = names.map((x) => x.toUpperCase());
console.log(myMapArray1);
console.log("-----------");

// 3 Using the prototype property)
console.log("My prototype filter method");

Array.prototype.myFilterv2 = function (callback) {
  let filtered = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};

let filteredv3 = names.myFilterv2((x) => x.includes("K"));
console.log(filteredv3);

console.log("My prototype map method");

Array.prototype.myMapv2 = function (callback) {
  let mapped = [];

  for (let i = 0; i < this.length; i++) {
    mapped.push(callback(this[i]));
  }
  return mapped;
};

let map = names.map((x) => x.toLowerCase());
console.log(map);

console.log("--------");
// The reduce-method

var all = ["Lars", "Peter", "Jan", "Bo"];

// a)
let comma = all.join(",");
console.log("Join with comma");
console.log(comma);
let space = all.join(" ");
console.log("Join with space");
console.log(space);
let hashtag = all.join("#");
console.log("Join with hashtag");
console.log(hashtag);

console.log("-------");

// b)

var numbers = [2, 3, 67, 33];

const totalSum = (acc, cValue) => {
  return acc + cValue;
};

let tSum = numbers.reduce(totalSum);
console.log(tSum);

console.log("------");

// c)

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

const avgAge = (acc, cValue, index, arr) => {
  let total = acc + cValue.age;
  if (index === arr.length - 1) {
    return total / arr.length;
  }
  return total;
};

let aAge = members.reduce(avgAge, 0);
console.log(aAge);

console.log("-------");

// d)

var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

const countVotes = (person, vote) => {
  if (!person[vote]) {
    person[vote] = 1;
  } else {
    person[vote] += 1;
  }
  return person;
};
let init = {};
let countedVotes = votes.reduce(countVotes, init);
console.log(countedVotes);
