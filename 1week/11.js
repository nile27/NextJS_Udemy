// // callback 지옥

// // function task1() {
// //   console.log("task1");
// // }

// // function task2(callback) {
// //   setTimeout(() => {
// //     console.log("task2");
// //     callback();
// //   }, 1000);
// // }
// // function task3(callback) {
// //   console.log("task3");
// //   callback();
// // }
// // function task4(callback) {
// //   console.log("task4");
// //   callback();
// // }

// // task1(() => {
// //   task2(() => {
// //     task3(() => {
// //       task4(() => {
// //         console.log("done");
// //       });
// //     });
// //   });
// // });

// // console.log("Task1 amd Task2 are done!");

// // Promise

// // pending (대기)
// // fullfilled (이행)
// // rejected (거부)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("No network"));
//   }, 2000);
// });

// promise
//   .then(() => {
//     console.log("promise....");
//   })
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log("final!");
//   });

// function task1() {
//   return new Promise((resolve) => {
//     console.log("task1");
//     resolve();
//   });
// }

// function task2() {
//   return new Promise((resolve) => {
//     console.log("task2");
//     resolve();
//   });
// }
// function task3() {
//   return new Promise((resolve) => {
//     console.log("task3");
//     resolve();
//   });
// }
// function task4() {
//   return new Promise((resolve) => {
//     console.log("task4");
//     resolve();
//   });
// }

// task1()
//   .then(() => task2())
//   .then(() => task3())
//   .then(() => task4())
//   .then(() => console.log("done"));

// async / await

async function getApple() {
  // throw new Error("err");
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  // throw new Error("err");
  await delay(2000);
  return "banana";
}

async function pickFruits() {
  const fruits = await Promise.all([getApple(), getBanana()]);
  // 구조 분해 할당
  // const [apple, banana] = await [getApple(), getBanana()];
  console.log(apple);
  console.log(banana);
}
pickFruits();
// getApple()
//   .then((apple) => console.log(apple))
//   .catch((err) => console.error(err));
