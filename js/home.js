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

// Dark Mode
const mode = document.querySelector('#mode');
const main = document.body;

mode.addEventListener("click", toggleDarkMode);
window.addEventListener('load',() => {
  if(main.getAttribute('data-theme') === 'light'){
    mode.checked = false;
  }});

function toggleDarkMode() { 
  const modeContainer = document.querySelector('.toggle-switch');
  const dataTheme = main.getAttribute('data-theme');
 
  if(dataTheme === 'dark') {
    main.setAttribute('data-theme', 'light');
    modeContainer.setAttribute('title', 'click for dark mode');
  } else {
    main.setAttribute('data-theme', 'dark');
    modeContainer.setAttribute('title', 'click for light mode');
  }
 }
