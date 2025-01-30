let upBtn = document.querySelector("button.about-up-btn");

//*STUB - Navbar
// SECTION - Global Variables
const burgerIcon = document.querySelector(".burger-icon");

// SECTION - Event Listeners
burgerIcon.addEventListener("click", () => {
   const navLinks = document.querySelector(".nav-links");
   burgerIcon.classList.toggle("clicked");
   navLinks.classList.toggle("active");
});

// *STUB - Animating About-main-section
document.addEventListener("DOMContentLoaded", () => {
   // Animating line
   document
      .querySelector(".about-main-section-breif")
      .style.setProperty("--before-height", "100%");

   // Animating Heading
   showElement(document.querySelector(".about-main-section-breif h3"), "X");
   showElement(document.querySelector(".about-main-section-breif h5"), "X");
   showElement(document.querySelector(".about-main-section-breif p"), "X");
});

function showElement(el, translateDir) {
   el.style.opacity = 1;
   el.style.transform = `translate${translateDir}(0)`;
}

// *STUB - Animating main-title before & after
let sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
   sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 500) {
         section.style.setProperty("--before-left", "-35px");
         section.style.setProperty("--after-right", "-35px");
      }
   });
});

// *STUB - Animating Probs & sol

window.addEventListener("scroll", () => {
   if (
      window.scrollY >=
      document.querySelector(".about-solution").offsetTop + 500
   ) {
      console.log("true");

      showElement(document.querySelector(".about-solution"), "X");
   }
});

// *STUB - Upp Btn

window.addEventListener("scroll", () => {
   if (window.scrollY >= 900) {
      upBtn.style.display = "block";
      upBtn.style.opacity = 1;
   } else if (window.scrollY < 900) {
      upBtn.style.display = "none";
      upBtn.style.opacity = 0;
   }
});

if (upBtn) {
   upBtn.addEventListener("click", () => {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth",
      });
   });
}
