const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#mobile-menu");
const hamburgerFirstElm = document.querySelector("#hamburger>div:nth-child(1)");
const hamburgerSecondElm = document.querySelector(
  "#hamburger>div:nth-child(2)"
);
const hamburgerThirdElm = document.querySelector("#hamburger>div:nth-child(3)");

const mobileNav = document.querySelector("#mobile-nav");

console.log(hamburgerFirstElm, hamburgerSecondElm, hamburgerThirdElm);

hamburger.addEventListener("click", () => {
  menu.classList.toggle("-translate-x-full");
  hamburgerFirstElm.classList.toggle("rotate-x-45");
  hamburgerThirdElm.classList.toggle("-rotate-x-45");
  hamburgerSecondElm.classList.toggle("hide-elem");
});

mobileNav.addEventListener("click", () => {
  menu.classList.toggle("-translate-x-full");
});
