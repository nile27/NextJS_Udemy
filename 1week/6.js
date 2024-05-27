const user = {
  name: "John",
  age: 25,
  isStudent: true,
  address: {
    city: "Seoul",
    street: "Garosu-gil",
  },
};
console.log(user.address.city);
console.log(user["age"]);

// 초기값, 추가, 삭제
const user1 = {};
user.name = "sucoding";
user.age = 20;
delete user.age;

// const person = {
//   name: "John",
//   age: 20,
//   speak: function () {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// person.speak();
// console.log(person.name);

// 생성자 첫 글자는 항상 대문자

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.speak = function () {
    console.log(`${this.name} is speaking`);
  };
}

const person1 = new Person("john", 10);
console.dir(person1);
