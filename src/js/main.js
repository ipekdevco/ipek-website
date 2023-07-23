const navToggler = document.querySelector("#navToggler");

const backdrop = document.querySelector("#backdrop");

const navbar = document.querySelector(".nav");
const logo = document.querySelector("#logo");

navToggler.addEventListener("click", toggleNavbar);

backdrop.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  navbar.classList.toggle("active");

  backdrop.classList.toggle("hidden");
}

const header = document.getElementById("header");
window.addEventListener("scroll", stickyHeader);

function stickyHeader() {
  console.log(navToggler);
  console.log(window.scrollY);
  if (window.scrollY > 50) {
    navToggler.classList.add("text-black")
    logo.classList.add("text-black")
    logo.classList.remove("text-white")
    navToggler.classList.remove("text-white")
    header.classList.add("bg-white");
    header.classList.add("shadow-md");
  } else {
    logo.classList.add("text-white")
    logo.classList.remove("text-black")
    navToggler.classList.add("text-white")
    navToggler.classList.remove("text-black")
    header.classList.remove("bg-white");
    header.classList.remove("shadow-md");
  }
}
