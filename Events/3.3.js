// Animering med setInterval()

let position = 0;
const box = document.getElementById("box");

setInterval(() => {
  position += 5;
  box.style.left = position + "px";
}, 100);
