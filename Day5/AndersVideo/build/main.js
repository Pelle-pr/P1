"use strict";
// class Greeter {
//     name: string;
//     sayHello(){
//     console.log("Hello " + name)
//   }
// }
function sortByname(a) {
    var result = a.splice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByname([]);
//# sourceMappingURL=main.js.map