// 1 숫자 뒤집기

function reverse_to_number(number) {
  return String(number).split("").reverse().join("");
}

let a = reverse_to_number(32125);
console.log(a); // 52123

let b = reverse_to_number(13251);
console.log(b); // 15231

// 2 가장 긴 단어 찾기

function findLongStr(str) {
  let arr = str.split(" ");
  let result = "";
  for (let i of arr) {
    result = i.length < result.length ? result : i;
  }
  return result;
}

let result = findLongStr("we are the champion");
console.log(result); // champion

let result2 = findLongStr("i`m fine thank you, and you?");
console.log(result2); // thank
