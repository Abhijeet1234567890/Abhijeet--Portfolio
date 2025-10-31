const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const text = ["Full Stack Developer", "MERN Enthusiast", "Computer Engineer"];
let i = 0, j = 0, current = "", isDeleting = false;
const typing = document.getElementById("typing");

function typeEffect() {
  current = text[i];
  typing.textContent = isDeleting
    ? current.substring(0, j--)
    : current.substring(0, j++);

  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
    setTimeout(typeEffect, 400);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}
typeEffect();
