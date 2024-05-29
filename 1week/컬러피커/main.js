/*
  색상 컬러 클릭시 body 태그의 배경 색상을 
  선택한 컬러로 변경해주세요.
*/

const color = document.querySelectorAll("input");
color.forEach((item) => {
  item.addEventListener("click", function (e) {
    document.body.style.background = item.value;

    console.log(item.value);
  });
});

// for (let i of color) {
//   i.addEventListener("click", function (e) {
//     document.body.style.background = i.value;

//     console.log(i.value);
//   });
// }

// 문제 풀이 해설
