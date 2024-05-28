var num1 = 10;
let num2 = 10;
const num3 = 10;

console.log(num1, num2, num3);

// Quiz
// 문제
// 1. 변수 선언과 할당
//     1. 두 개의 변수`x`와 `y`를 선언하고, 각각 숫자 10과 20을 할당하세요. 그리고 두 변수를 더한 값을 새로운 변수 `sum`에 저장하고 `sum`의 값을 콘솔에 출력하세요.
// 2. 변수 재할당
//     1. 변수 `name`에 "Alice"라는 값을 할당하세요.
//     2. 이후 `name` 변수에 "Bob"이라는 값으로 재할당하세요.
//     3. `name` 변수의 최종 값을 콘솔에 출력하세요.
// 3. 상수
//     1. 상수 `PI`를 선언하고 값 3.14를 할당하세요.
//     2. `PI` 값을 콘솔에 출력하세요.
// 4. 변수 스왑
//     1. `a`와 `b`라는 두 변수를 선언하고 각각 숫자 5와 10을 할당하세요.
//     2. 변수의 값을 서로 교환하여 `a`에는 10이,`b`에는 5가 저장되도록 코드를 작성하세요.

// 1
let [x, y] = [10, 20];
let sum = x + y;
console.log(sum);

// 2
let name = "Alice";
name = "Bob";
console.log(name);

// 3
const PI = 3.14;
console.log(PI);

// 4
let [a, b] = ([5, 10][(a, b)] = [10, 5]);
console.log(a, b);