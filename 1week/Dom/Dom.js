const h1 = document.querySelector("h1");
const text1 = document.getElementById("text1");
const textBlack = document.querySelectorAll(".text-black");

h1.style.color = "yellow";
text1.style.color = "red";
for (let i of textBlack) {
  i.style.color = "black";
}
textBlack.forEach((item) => (item.innerText = "change")); // Text자체를 변경
textBlack.forEach((item) => (item.innerHTML = "changeto")); // 태그 안에 새로운 태그가 들어감

textBlack[1].remove();
