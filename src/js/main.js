window.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const close = document.querySelector(".menu__close");
  const overlay = document.querySelector(".menu__overlay");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu__link");

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
});
