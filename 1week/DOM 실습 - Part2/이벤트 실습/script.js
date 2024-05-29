const myname = document.querySelector(".myname");
const show = document.querySelector(".show");
const Btn = document.querySelector(".display--row");
let isClick = false;

// Btn.addEventListener("click", function () {
//   if (!isClick) {
//     show.setAttribute("style", "display:none");
//     myname.setAttribute("style", "display:block");
//   } else {
//     show.setAttribute("style", "display:block");
//     myname.setAttribute("style", "display:none");
//   }
//   isClick = !isClick;
// });

Btn.addEventListener("click", function () {
  if (!isClick) {
    show.style.display = "none";
    myname.style.display = "block";
  } else {
    show.style.display = "block";
    myname.style.display = "none";
  }
  isClick = !isClick;
});
