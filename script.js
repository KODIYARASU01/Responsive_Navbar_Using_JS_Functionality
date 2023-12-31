const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLi = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    //Toggle nav
    navLi.classList.toggle("nav-active");

    //Animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
//Burger animation :
burger.classList.toggle('toggle')
  });
};

navSlide();
