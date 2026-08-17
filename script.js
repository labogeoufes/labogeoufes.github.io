let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

// Create overlay element
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

function openPanel() {
  navBar.classList.add("active");
  hamMenuIcon.classList.add("fa-times");
  overlay.classList.add("active");
}

function closePanel() {
  navBar.classList.remove("active");
  hamMenuIcon.classList.remove("fa-times");
  overlay.classList.remove("active");
}

hamMenuIcon.addEventListener("click", () => {
  if (navBar.classList.contains("active")) {
    closePanel();
  } else {
    openPanel();
  }
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    closePanel();
  });
});

// Close panel when clicking the overlay
overlay.addEventListener("click", () => {
  closePanel();
});

// Language dropdown: toggle .open class (works on touch devices)
function openSelectLanguage() {
  const langDiv = document.querySelector('.language');
  if (langDiv) langDiv.classList.toggle('open');
}

// Close language dropdown when clicking outside
document.addEventListener('click', function(e) {
  const langDiv = document.querySelector('.language');
  if (langDiv && !langDiv.contains(e.target)) {
    langDiv.classList.remove('open');
  }
});
