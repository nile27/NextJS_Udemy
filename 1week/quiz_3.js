// 두 개의 정수(a, b)를 취하는 함수를 완성하고 입력 매개변수를 포함하여 입력 매개 변수 사의의 모든 정수 배열을 반환하게 하세요.
// 이때 매개변수 b는 a보다 크다고 가정합니다.

// Q.1.1
function numberArr(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

// console.log(numberArr(1, 4));
// console.log(numberArr(5, 10));

// Q.1.2

function numberArr2(a, b) {
  let result = [];
  let [bigger, smaller] = a > b ? [a, b] : [b, a];

  for (let i = smaller; i <= bigger; i++) {
    result.push(i);
  }
  return result;
}

console.log(numberArr2(1, 4));
console.log(numberArr2(10, 5));

// Q2 배열 => 전화번호 형식 변환

function createPhoneNumber(numbers) {
  let result = "";
  numbers.forEach((item, idx) => {
    if (typeof item !== "number") return "전화 번호는 숫자로만 입력해주세요.";
    switch (idx) {
      case 0:
        result += "(";
        break;
      case 3:
        result += ") ";
        break;
      case 6:
        result += "-";
        break;
    }
    result += `${item}`;
  });
  return result;
}
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Q3 문자열 역순

const reverseMessage = (str) => str.split("").reverse().join("");

// console.log(reverseMessage("Good Bye"));

// Q4 배열에서 가장 작은 숫자 2개의 합

function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1];
}
// const sum = sumTwoSmallestNumbers([10, 50, 20, 30, 40]); // 30 (가장 작은 수 10 + 20)
// const sum2 = sumTwoSmallestNumbers([10, 50, 0, 30, 40]);
// console.log(sum, sum2);

// Q5 제곱급 판별
function isPow(n) {
  let sqrt = parseInt(Math.sqrt(n));

  if (n % sqrt !== 0) return -1;
  return (sqrt + 1) ** 2;
}

// console.log(isPow(121)); // 144
// console.log(isPow(10)); // -1
// console.log(isPow(9)); // 16
