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

window.addEventListener("load", function () {
  new Glider(document.querySelector(".carrousel-imagenes"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
    dots: ".galeria-indicadores",
    arrows: {
      prev: ".galeria-anterior",
      next: ".galeria-siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});
