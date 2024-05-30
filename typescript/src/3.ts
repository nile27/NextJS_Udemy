// type
type Person = {
  name: string;
  age: number;
};

const person1: Person = {
  name: "Jack",
  age: 32,
};

type MyWorker = {
  company: string;
  readonly position: string;
  getMoney: (amount: number) => number;
};

type Employee = Person & MyWorker;

const worker1: Employee = {
  name: "Smith",
  age: 33,
  company: "Google",
  position: "Developer",
  getMoney: (amount: number) => {
    console.log(`I got ${amount}$`);
    return amount;
  },
};

// interface
// type vs interface 차이
// 1. 선언 방식의 차이
// 2. 객체만 정의 가능
// 3. 자동 병합 기능 사용시 주의
interface Iperson {
  name: string;
  age: number;
}

// const user1: Iperson = { name: "Jane", age: 22, gender: "female" };

// interface Iperson {
//   gender: string;
// }

const user2: Iperson = { name: "mki", age: 22 };
interface IWorker {
  company: string;
  position: string;
}

const employee1: Iperson & IWorker = {
  name: "kim",
  age: 33,
  company: "ddd",
  position: "developer",
};
