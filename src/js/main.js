window.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const close = document.querySelector(".menu__close");
  const overlay = document.querySelector(".menu__overlay");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu__link");
  const ratingRate = document.querySelectorAll(".rating__rate");
  const ratingFilled = document.querySelectorAll(".rating__filled");

  burger.addEventListener("click", () => {
    menu.classList.add("menu_active");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("menu_active");
  });

  overlay.addEventListener("click", () => {
    menu.classList.remove("menu_active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("menu_active");
    });
  });

  // ratingRate.forEach((rate, index) => {
  //   ratingFilled[index].style.width = rate.textContent;
  // });
});
