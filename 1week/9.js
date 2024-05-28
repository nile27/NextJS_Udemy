// 1. 도형
// function Shape(color) {
//   this.color = color;
//   this.getColor = function () {
//     return this.color;
//   };
// }

// // 사각형
// function Rectangle(color, width, height) {
//   Shape.call(this, color); // 매개변수 전달
//   this.width = width;
//   this.height = height;
//   this.getArea = function () {
//     return this.width * this.height;
//   };
// }

// const rect1 = new Rectangle("blue", 30, 40);
// console.log(rect1.getColor());

// Class
// class는 class 키워드를 사용해서 선언한다.
class Shape {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}
const shape1 = new Shape("blue");

// 상속
// extends 키워드를 사용해서 상속한다.

class Rectangle extends Shape {
  // 상속을 하든, 상속을 안하든 반드시 constructor를 가지고 있어야한다.
  constructor(color, width, height) {
    super(color); // 상속한 생성자를 호출
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const rect2 = new Rectangle("blue", 10, 20);
console.log(rect2.getColor()); // 200

//set, get
// set: 값을 가져오는 키워드
// get: 값을 가져오는 키워드

class Car {
  constructor(speed) {
    this.speed = speed;
  }

  get speed() {
    return this._speed;
  }

  set speed(value) {
    this._speed = value < 0 ? 0 : value;
  }
  getSpeed() {
    return this.speed;
  }
}

const car1 = new Car(-100);
car1.speed = 500;
console.log(car1.getSpeed());
