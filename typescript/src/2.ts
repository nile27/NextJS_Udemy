// 타입스크립트
// 자바스크립트 + 타입
// 타입 - 값 종류
// 자바스크립트에 값의 타입이 추가된 언어

// 타입 추론 - 타입스크립트가 자동으로 타입을 추측
let helloJS = "Hello JS";
let helloTY: string = "Hello, TY";
const bye = "Bye, TS";

// 타입 종류

const a: string = "hello";
const b: number = 1;
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
const g: symbol = Symbol();
const f: object = { name: "jane" };
const h: Array<string> = ["a", "b"];
const h2: string[] = ["a", "b"];
const j: (a: number, b: number) => number = function (a, b) {
  return a + b;
};
const j2: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

const j3: (a: number, b: number) => number = (a, b) => a + b;

const arr: (string | number)[] = ["hellog", 10, 10, "sss"];

//type 키워드

type Tsum = (a: number, b: number) => number;
const sum1: Tsum = (a, b) => {
  return a + b;
};

type TString = string;
const hello: TString = "Hello, World!";

type TNumber = number;
const num: TNumber = 10;

type TStrArr = string[] | null;
const Tnull: TStrArr = null;
const TArr = ["a", "b"];

type TUser = object;
type TGender = "male" | "female";
type TUserPick = {
  name: string;
  age: number;
  //gender?: string; // 써줘도 되고 안 써도 되고
  gender: TGender;
};

let user: TUser = {
  name: "kim",
  age: 20,
  gender: "male",
};
