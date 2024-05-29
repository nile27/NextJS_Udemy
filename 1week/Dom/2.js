// 메소드 체이닝
class Calc {
  constructor(num) {
    this.num = num;
  }

  add(num) {
    this.num += num;
    return this;
  }
  minus(num) {
    this.num -= num;
    return this;
  }

  result() {
    return this.num;
  }
}

const calc = new Calc(10);
console.log(calc.add(2).minus(1));
