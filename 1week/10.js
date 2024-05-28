class MathUtils {
  static APP_NAME = "Math Utils";

  constructor(number) {
    this.number = number;
  }

  static add(a, b) {
    return a + b;
  }
}
const mathUtils = new MathUtils(10);
console.log(MathUtils.APP_NAME);
console.log(MathUtils.add(10, 1));

// 클로저
function outer() {
  let i = 0;
  return function inner() {
    return i++;
  };
}

let innerFn = outer();
console.log(innerFn());
console.log(innerFn());
console.log(innerFn());
innerFn = null;
