//1. ex Vi kan kalde vores funktion før den er skrevet da funktioner bliver "hoisted" op .

catName("Johnny");

function catName(name) {
  console.log("My cat's name is " + name);
}

// var catName = function (s) {
//   console.log(s);
// };

// 2. ex // Her bliver kun var num hoisted og ikke "= 6" dvs den skriver "undefined da var num = undefined"

console.log(num);

var num = 6;

// 3. ex let og const bliver ikke hoisted derfor vil den komme med en fejl

//console.log(a);
//console.log(b);
let a = 1;
const b = 2;

// 4. ex

x = 1;

console.log(x + " " + y);

var y = 2; // her erklære og initilisere y // men da kun erklæring bliver hoisted vil den sige at y er undefined.

// 4. ex

a = "Cran";
c = "berry";

console.log(a + "" + c);
