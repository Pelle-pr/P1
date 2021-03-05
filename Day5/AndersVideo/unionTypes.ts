// abstract class Shape {
//   abstract getArea(): number;
// }

// class Circle extends Shape {
//   constructor(public radius: number) {
//     super();
//   }
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// class Rectangle extends Shape {
//   constructor(public w: number, public h: number) {
//     super();
//   }
//   getArea() {
//     return this.w * this.h;
//   }
// }

// class Square extends Shape {
//   constructor(public size: number) {
//     super();
//   }
//   getArea() {
//     return this.size ** 2;
//   }
// }

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; w: number; h: number }
  | { kind: "square"; size: number };

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.w * shape.h;
    case "square":
      return shape.size ** 2;
  }

  throw new Error("Invalid shape");
}
