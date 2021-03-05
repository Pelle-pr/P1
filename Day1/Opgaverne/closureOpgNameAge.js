function Person(name, age) {
  this.name = name;
  this.age = age;

  return {
    setName: (name) => (this.name = name),
    setAge: (age) => (this.age = age),
    getInfo: () => console.log(`${this.name} is ${this.age} years old`),
  };
}

let p1 = new Person("John", 25);
let p2 = new Person("Bente", 66);

p1.getInfo();
p2.getInfo();

p2.setAge(12);
p2.getInfo();

class PersonV2 {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  show = () => {
    console.log(`${this.name} is ${this.age} years old`);
  };

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }
}

let p3 = new PersonV2("Henning", 18);
let p4 = new PersonV2("Lennart", 55);

p3.show();
p4.show();
