// ========== SHOW MENU ==========
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  blur = document.querySelector(".blur");

function showMenu() {
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
      blur.classList.toggle("show-blur");
    });
  }
  if (blur) {
    blur.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      blur.classList.remove("show-blur");
    });
  }
}
showMenu();
// ========== REMOVE MENU MOBILE ==========
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show-menu");
  blur.classList.remove("show-blur");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ========== CHANGE BACKGROUND HEADER ==========
function scrollheader() {
  const header = document.querySelector("#header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollheader);

// ========== SHOW SCROLL UP ==========
function scrollUp() {
  const scrollUp = document.querySelector("#scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// ========== SCROLL REVEAL ==========
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__data, .footer__sub`, { delay: 500 });
sr.reveal(`.platform__item, .technical__item`, {
  interval: 100,
});
sr.reveal(
  `.platform__title, .technical__title, .feature__left, .award__title, .awards__item:nth-child(2), .awards__item:nth-child(4), .awards__item:nth-child(6)`,
  {
    origin: "left",
  }
);
sr.reveal(
  `.partnership__list, .feature__right-item:nth-child(1), .feature__right-item:nth-child(2), .feature__right-item:nth-child(3), .feature__right-item:nth-child(4), .footer__list`,
  {
    origin: "bottom",
  }
);

sr.reveal(
  `.feature__right-title, .awards__item:nth-child(3), .awards__item:nth-child(5), .awards__item:nth-child(7)`,
  {
    origin: "right",
  }
);
