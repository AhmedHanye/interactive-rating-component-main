const cards = document.querySelectorAll(".card");
const C = document.querySelectorAll(".choice");
const l = C.length;
const s = document.querySelector('input[type="submit"]');
const n = document.querySelector("#number");
let pre = -1;
for (let i = 0; i < l; i++) {
  C[i].addEventListener("click", () => {
    C[i].classList.toggle("chosen");
    C[i].classList.remove("c-h");
    if (pre != -1 && pre != i) {
      C[pre].classList.remove("chosen");
      C[pre].classList.add("c-h");
    }
    pre === i ? (pre = -1) : (pre = i);
  });
}
s.onclick = () => {
  if (pre != -1) {
    n.innerHTML = pre + 1;
    cards[0].style.display = "none";
    cards[1].style.display = "flex";
  } else {
    alert("please choose a number");
  }
};
