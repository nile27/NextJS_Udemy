// 1 매개변수 제한 없이 sum함수 제작
function quizSum(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}

// 2 사칙연산 함수
function calc(str, num1, num2) {
  switch (str) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return Math.round(num1 * num2);

    case "/":
      return Math.round(num1 / num2);
  }
}

// 3 학점 계산기
function studentCalc(obj) {
  const score = {
    "A+": 4.5,
    A: 4,
    "B+": 3.5,
    B: 3,
    "C+": 2.5,
    C: 2,
    F: 1,
  };
  let result = 0;

  for (let item in obj) {
    result += score[obj[item]];
  }
  return result;
}
const studentA = {
  math: "A+",
  korean: "B",
  english: "C+",
  science: "F",
};
console.log(studentCalc(studentA));

// 과제

function strCalc(str) {
  let trigger = str[0];
  let result = "";
  let count = 0;

  for (let i of str) {
    if (trigger !== i) {
      result = result + trigger + `${count}`;
      trigger = i;

      count = 1;
    } else {
      count++;
    }
  }

  return result + trigger + `${count}`;
}
console.log(strCalc("aaabbbccc"));
console.log(strCalc("aabbaa"));
console.log(strCalc("abbbffd"));
