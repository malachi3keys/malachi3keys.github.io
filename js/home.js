//Navbar
const navbarToggle = navbar.querySelector("#navbar-toggle");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

//Project Slideshow
//ID the slides
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const count = slides.length;

// default slide 1
var z = 1;
showSlides(z);

//Add event listeners for the arrows
prev.addEventListener("click", () => showSlides(z-1));
next.addEventListener("click", () => showSlides(z+1));

for (i = 0; i < count; i++) {
  dots[i].addEventListener("click", () => showSlides(i+1));
}
 
function showSlides(n) {
  if (n > count) {
    z = 1;
  }else if (n < 1) {
    z = count;
  }else {
    z = n;
  }

  //make all slides invisible and remove active class
  for (i = 0; i < count; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slides[z-1].style.display = "block";
  dots[z-1].classList.add("active");
}