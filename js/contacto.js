window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 2000);
});

// para cerrar con el boton
document.querySelector("#close"),
  addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });
