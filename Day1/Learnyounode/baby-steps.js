let numbers = [...process.argv];

numbers.splice(0, 2);

const toNumbers = (arr) => arr.map(Number);

let arrayToNumber = toNumbers(numbers);

const total = (accumulator, currentValue) => accumulator + currentValue;

console.log(arrayToNumber.reduce(total));

//let result = 0

//for (let i = 2; i < process.argv.length; i++) {
//    result += Number(process.argv[i])
//  }

//  console.log(result)
