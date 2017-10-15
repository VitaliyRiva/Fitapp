var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.toggle("main-nav--opened");
    navMain.classList.remove("main-nav--closed");
  } else {
    navMain.classList.toggle("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
