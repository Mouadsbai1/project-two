let spans = document.querySelectorAll("span");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let line = document.querySelector(".line");

next.onclick = function () {
  if (spans[2].className === "active") {
    spans[3].classList.add("active");
    next.style.backgroundColor = "#ccc";
    next.style.cursor = "no-drop";
    line.style.boxShadow = "inset 330px 0 0 0 #03a9f4";
  } else if (spans[1].className === "active") {
    spans[2].classList.add("active");
    line.style.boxShadow = "inset 220px 0 0 0 #03a9f4";
  } else if (spans[0].className === "active") {
    spans[1].classList.add("active");
    prev.style.backgroundColor = "#03a9f4";
    prev.style.cursor = "pointer";
    line.style.boxShadow = "inset 120px 0 0 0 #03a9f4";
  }
};
prev.onclick = function () {
  if (spans[3].className === "active") {
    spans[3].classList.remove("active");
    next.style.backgroundColor = "#03a9f4";
    next.style.cursor = "pointer";
    line.style.boxShadow = "inset 220px 0 0 0 #03a9f4";
  } else if (spans[2].className === "active") {
    spans[2].classList.remove("active");
    line.style.boxShadow = "inset 120px 0 0 0 #03a9f4";
  } else if (spans[1].className === "active") {
    spans[1].classList.remove("active");
    prev.style.backgroundColor = "#ccc";
    prev.style.cursor = "no-drop";
    line.style.boxShadow = "inset 0px 0 0 0 #03a9f4";
  }
};
