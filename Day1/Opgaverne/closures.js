// Kombinere en function og et miljø

function makeFunc() {
  var name = "Mozilla";

  function logName() {
    console.log(name);
  }

  return logName;
}

var f = makeFunc(); // Den husker variablen name = "Mozilla", Den husker variablen da variablen levede da vi kaldte makeFunc()
f();

var makeCounter = function () {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    inc: () => {
      changeBy(1);
    },
    dec: () => {
      changeBy(-1);
    },
    value: () => {
      return privateCounter;
    },
  };
};

var counter1 = makeCounter(); // Hver deres instance
var counter2 = makeCounter();

counter1.inc();
counter1.inc();
counter2.dec();

console.log(counter1.value());
console.log(counter2.value());

// let exportCounter = makeCounter(); // singleton
// module.exports = exportCounter;

module.exports = makeCounter; // hvis makeCounter blev exporteret er det ikke længere en singleton
