let num = 0;
// while
while (num < 10) {
  console.log("num =", num);
  num++;
}

do {
  console.log("do while", num);
  num++;
} while (num < 10);

// for
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < 10; i++) {
  console.log(fruits[i]);
}
let str = "hello";
for (let i of str) {
  console.log(i);
}

// quiz
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);

// 다중 반복문

for (let i = 0; i < 3; i++) {
  console.log(`i:${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`j:${j}`);
  }
  console.log("------------");
}

// for in , for of

let array = [1, 2, 3, 4, 5];
let object = { a: 1, b: 2, c: 3 };

for (let idx in array) {
  console.log(arr[idx]);
}

for (let key in object) {
  console.log(object[key]);
}

for (let idx of array) {
  console.log(idx);
}

//연습문제
// 1
for (let i = 1; i < 10; i++) {
  console.log(i);
}
// 2
let numArr = [10, -10, 20, -30, 40];
for (let i of numArr) {
  if (i > 0) console.log(numArr);
}

// 3
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) console.log(`${i} 짝수`);
  else console.log(`${i} 홀수`);
}

// 4
let strNum = "";
let sum = 0;
for (let i = 100; i < 1000; i++) {
  strNum = String(i);
  sum =
    Number(strNum[0]) ** 3 + Number(strNum[1]) ** 3 + Number(strNum[2] ** 3);
  if (i === sum) console.log(strNum);
}
