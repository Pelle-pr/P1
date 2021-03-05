interface Person {
    name: string,
    age: number
}

// class Greeter {
//     name: string;
//     sayHello(){
//     console.log("Hello " + name)
//   }
// }


function sortByname(a: Person[]) {
  let result = a.splice(0);
  result.sort( (x, y) => {
    return x.name.localeCompare(y.name);
    
  });
  return result;
}
 
sortByname([]);
