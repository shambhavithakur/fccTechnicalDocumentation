var getNavLinks = document.querySelectorAll(".nav-link");

for (var i = 0; i < getNavLinks.length; i++) {
  getNavLinks[i].addEventListener("click", function() {
    for (var j = 0; j < getNavLinks.length; j++) {
      getNavLinks[j].classList.remove("active-link");
    }
    this.classList.add("active-link");
  });
}
