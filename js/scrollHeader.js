document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var menu__desplegable = document.querySelector(".menulist");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");

  menu__desplegable.classList.toggle("menu__active");
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

sr = ScrollReveal();

sr.reveal(".quienes-somos-texto", {
  duration: 3000,
  origin: "right",
  distance: "-100px",
});
sr.reveal(".quienes-somos-imagen", {
  duration: 3000,
  origin: "left",
  distance: "-100px",
});
