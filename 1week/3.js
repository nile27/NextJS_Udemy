// if
// 1. 소괄호 안에 있는 표현식의 참 거짓 여부
// 판별 후 참이면 중괄호 안의 코드 실행
// 2. 거짓이면 else if 또는 else로 넘어감
// 3. else if는 여러 개 사용 가능
// 4. else는 생략 가능

// 1
let lamp = true;
if (lamp === true) {
  console.log("The lamp is on");
}
lamp = false;
if (!lamp) {
  console.log("The lamp is on");
}

// 2

let lamp2 = true;
if (lamp2 === true) {
  console.log("The lamp is on");
} else {
  console.log("The lamp is on");
}

// falsy
// false, null, undefined 0 NaN "", 0n, documnet.all

// 3
let fruit = "apple";
if (fruit === "apple") {
  console.log("apple");
} else if (fruit === "banana") {
  console.log("banana");
} else if (fruit === "kiwi") {
  console.log("kiwi");
} else {
  console.log("none");
}

// Quiz 1
let num = 10;
if (num % 2 === 0) console.log("짝수 입니다.");
else console.log("홀수 입니다.");

// Quiz 2
num % 2 === 0 ? console.log("짝수 입니다.") : console.log("홀수 입니다.");

// switch
const area = "서울";

switch (area) {
  case "서울":
    console.log("서울입니다.");
    break;
  case "대전":
    console.log("대전입니다.");
    break;
  case "부산":
    console.log("부산입니다.");
    break;
  default:
    console.log("서울, 대전, 부산 중 하나를 선택");
    break;
}

// Quiz
if (area === "서울") {
  console.log("서울입니다.");
} else if (area === "대전") {
  console.log("대전입니다.");
} else if (area === "부산") {
  console.log("부산입니다.");
} else {
  console.log("서울, 대전, 부산 중 하나를 선택");
}

let few = 0;

switch (few) {
  case "서울":
  case "대전":
    few = 3000;
    break;
  case "부산":
    few = 10000;
    break;
  default:
    few = 5000;
    break;
}

if (area === "서울" || area === "대전") {
  few = 3000;
} else if (area === "부산") {
  few = 10000;
} else {
  few = 5000;
}

console.log(`배송비는 ${few}원 입니다.`);

// 연습문제
// 1. score의 점수가 90점 이상이면 A
// 2. score의 점수가 80점 이상이면 B
// 3. score의 점수가 70점 이상이면 C
// 4. score의 점수가 60점 이상이면 D
// 5. score의 점수가 60점 미만이면 F
let score = 50;

if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else if (score >= 60) console.log("D");
else console.log("F");

// 2
const isSunny = true;
const isWarm = false;
const isDry = true;
let ans = `${'"'}${isSunny ? "오늘은 날씨가 화창하고" : "화창하지 않고"} ${
  isWarm ? "따듯하며" : "따뜻하지 않으며"
} ${isDry ? "건조합니다." : "건조하지 않습니다."}${'"'}`;

console.log(ans);
