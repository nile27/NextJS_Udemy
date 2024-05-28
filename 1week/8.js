//기본 자료형
// 1.number
// 2. string
// 3. boolean
// 래퍼 객체 (Wrapper Object)
// 자바스크립트는 기본 자료형을 객체로 다루기 위해 래퍼 객체 제공

const a = "Hello";
const b = new String("Hello");

// 1. a는 기본자료형
// 2. 기본 자료형은 객체가 아니라서 속성과 메소드를 가질 수가 없다.
// 3. 일시적으로 래퍼 객체로 변환

console.log(a.length);

const num1 = 10;
const num2 = new Number(10);

console.log(num1 instanceof Number); //false
console.log(num1 instanceof Number); // true
console.log(num2.toFixed(2));
