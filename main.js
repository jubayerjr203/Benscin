const burgirIcon = document.querySelector(".bi-list");
const XIcon = document.querySelector(".bi-x-lg");
const menu__section = document.querySelector(".menu__section");
const navbar = document.querySelector("nav.NAv");
const moon1 = document.querySelector(".bi-brightness-high");
const moon2 = document.querySelector(".nav__icons>.bi-brightness-high");
const body = document.body;

burgirIcon.addEventListener("click", () => {
  menu__section.style.opacity = "1";

  burgirIcon.classList.remove("nav_active");
  XIcon.classList.add("nav_active");
  menu__section.classList.add("ul_active");
});

XIcon.addEventListener("click", () => {
  XIcon.classList.remove("nav_active");
  burgirIcon.classList.add("nav_active");
  menu__section.classList.remove("ul_active");
  menu__section.style.opacity = "0.2";
});

if (document.body.offsetWidth < 1152) {
  onlyMoba();
}

function onlyMoba() {
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 9845) {
      navbar.style.bottom = "-65px";
    } else {
      navbar.style.bottom = "16px";
    }
  });
}
const dark = () => {
  body.classList.toggle("for__light");

  if (body.classList.contains("for__dark")) {
    moon1.classList.remove("bi-moon");
    moon2.classList.remove("bi-moon");
    moon1.classList.add("bi-brightness-high");
    moon2.classList.add("bi-brightness-high");
  }
  if (body.classList.contains("for__light")) {
    moon1.classList.add("bi-moon");
    moon2.classList.add("bi-moon");
    moon1.classList.remove("bi-brightness-high");
    moon2.classList.remove("bi-brightness-high");
  }
};
moon1.addEventListener("click", dark);
moon2.addEventListener("click", dark);
