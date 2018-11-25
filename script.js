// Open-close navigation list
var getHTMLRoot = document.getElementsByTagName("html")[0];
var togglerOpen = document.querySelector(".open-button");
var navListOpen = document.querySelector("#navbar");
var getOverlay = document.querySelector(".overlay");
var getNavLinks = document.querySelectorAll(".nav-link");

function openNavlist(event) {
  event.preventDefault();
  togglerOpen.classList.toggle("open-list");
  navListOpen.classList.toggle("navlist-open");
  getOverlay.classList.toggle("overlay-visible");
  getHTMLRoot.classList.toggle("prevent-scrolling");
}

function closeNavlist(event) {
  event.preventDefault();
  togglerOpen.classList.remove("open-list");
  navListOpen.classList.remove("navlist-open");
  getOverlay.classList.remove("overlay-visible");
  getHTMLRoot.classList.remove("prevent-scrolling");
}

togglerOpen.addEventListener("click", openNavlist);
getOverlay.addEventListener("click", closeNavlist);

function scaleIncrease() {
  this.style.transform = "scale3d(1, 1, 1)";
}

function scaleDecrease() {
  this.style.transform = "scale3d(.88, .88, .88)";
}

togglerOpen.addEventListener("mouseout", scaleIncrease);
togglerOpen.addEventListener("mouseover", scaleDecrease);

for (var i = 0; i < getNavLinks.length; i++) {
  getNavLinks[i].addEventListener("click", function() {
    for (var j = 0; j < getNavLinks.length; j++) {
      getNavLinks[j].classList.remove("active-link");
    }
    this.classList.add("active-link");
    togglerOpen.classList.remove("open-list");
    navListOpen.classList.remove("navlist-open");
    getOverlay.classList.remove("overlay-visible");
    getHTMLRoot.classList.remove("prevent-scrolling");
  });
}
