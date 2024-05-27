// 함수 선언식

function speak() {
  console.log("안녕하세여");
}
speak(); // 호출

// 함수 표현식
// const talk = function () {
//   console.log("hello");
// };
// talk();

//호이스팅
console.log(example);
var example = "ss";

// 실행 되었을 떄
// var example;
// console.log(example);
// example = "ss";

// 화살표 함수
const talk = () => {
  console.log("반갑습니다.");
};

// 매개변수

function sum(num1, num2) {
  return num1 + num2;
}
sum(10, 12);

// 매개변수 제한 x
// 특정 매개변수를 지정하지 않았을 때, 배열 형식으로 arguments로 가변되어 사용이 가능하다.

function sum1() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sum1(10, 20, 30));

// spread 매개변수
// ... = 넘어온 매개변수 중 남은 매개변수를 받을 수 있다.
function sum2(...args) {
  console.log(args);
}
sum2(10, 20, 30);

// Callback 함수
// 비동기 함수 뒤에 callback 함수는 자칫 비동기 함수 내부에서
// 불러와지기 때문에 비동기라고 헷갈릴 수 있지만
// 비동기 함수가 끝나고 실행되는 것이지 비동기 함수는 아니다.
function speak(callback) {
  setTimeout(() => {
    console.log("say speak");
    callback();
  }, 2000);
}

function talk() {
  console.log("say talk");
}

speak(talk());

// 화살표 매개변수 처리

speak(() => {
  console.log("say talk");
});
