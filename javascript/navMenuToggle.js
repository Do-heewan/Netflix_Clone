document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu_toggle");
  const navBtns = document.querySelector(".nav__btns");

  menuToggle.addEventListener("click", () => {
    navBtns.classList.toggle("active");
  });
});