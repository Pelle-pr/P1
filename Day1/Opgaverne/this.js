// ex1

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};
console.log(test.func());
// this referere til objectet som det hører til.

// i en metode referere this til ejer objektet
// alene referere this til det globale object f.eks window i en browser.

// this i en metode

let person = {
  firstName: "Pelle",
  lastName: "Rasmussen",
  id: 1337,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // "person" ejer dette object og er derfor this

let person2 = {
  firstName: "Pelle",
  lastName: "Rasmussen",
  id: 1337,
  minFunc: function () {
    return this;
  },
};

console.log(person2.minFunc()); // her retunere den hele mit object da dette er this

// med call() funktionen kan jeg kalde fullName med et object som så bliver til "this"

var person3 = {
  firstName: "Kurt",
  lastName: "Hansen",
};

console.log(person.fullName.call(person3));

// Ex på en constructor metode FØR ES6

function Car(make, model) {
  this.make = make;
  this.model = model;

  this.showThis = function () {
    console.log(this);
  };
  this.show = function () {
    console.log(`${this.make}, ${this.model}`);
  };
  this.showAsync = function () {
    // Her har vi et problem, da vi ikke ved hvad "this" peger på, derfor får vi undefined.
    // const self = this; // Work around før ES6 // Den nye måde man gør er at omskrive til en Arrow funktion på setTimeout da this opfører sig anerledes.
    setTimeout(function () {
      console.log(this.make + ", " + this.model);
    }, 0);
  };
}

const car1 = new Car("Ford", "F150");
const car2 = new Car("BMW", "M3");

car1.showAsync(); // this peger på car1
car2.showAsync(); // this peger på car2

//ex med classer i ES6

class CarV2 {
  constructor(make, model) {
    this._make = make; // Da der ikke er private attributter sættes "_" før navnet for at vise at denne skal ikke pilles ved!!
    this._model = model;
    //  this.print = this.print.bind(this); Ex på brug af bind, her binder vi this til print.
  }

  async = function () {
    setTimeout(this.print, 1000);
  };

  print = function () {
    console.log(`${this.make}, ${this.model}`);
  };

  get make() {
    return this._make;
  }

  get model() {
    return this._model;
  }

  set make(make) {
    this._make = make;
  }

  set model(model) {
    this._model = model;
  }
}

const car3 = new CarV2("Peugeot", "207");
const car4 = new CarV2("Fiat", "500");

car3.async();
car3.model = "1337";
console.log(car3.make);

//ex på Call () og Apply()

let p = {
  fullName: function (city, country) {
    console.log(
      this.firstName + " " + this.lastName + " " + city + " " + country
    );
  },
};
let p1 = {
  firstName: "Henning",
  lastName: "Olesen",
};
let p2 = {
  firstName: "Lone",
  lastName: "Karlsen",
};

p.fullName.call(p1, "Allinge", "Danmark");

p.fullName.apply(p2, ["Rønne", "Danmark"]);
