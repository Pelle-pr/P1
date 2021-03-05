console.log("First");
setTimeout(() => {
  console.log("Hello number 1");
  setTimeout(() => {
    console.log("Hello number 2");
    setTimeout(() => {
      console.log("Hallo number 3");
    }, 500);
  }, 1000);
}, 2000);
console.log("Last");
