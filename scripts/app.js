// Toggle class on click
const siteMenu = document.querySelector(".site-menu");
const navMenu = document.querySelector(".nav-menu");
const siteHeaderMenu = document.querySelector(".site-header-menu");

siteMenu.addEventListener("click", () => {
  siteMenu.classList.toggle("js-active");
  navMenu.classList.toggle("js-menu-opened");
  siteHeaderMenu.classList.toggle("active");
});
