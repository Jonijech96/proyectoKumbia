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
