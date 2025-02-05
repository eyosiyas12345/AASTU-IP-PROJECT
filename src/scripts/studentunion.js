// Add button functionality
document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.querySelector(".explore-btn");
  const contactBtn = document.querySelector(".contact-btn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      window.location.href = "../pages/offices.html";
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      window.location.href = "../pages/contactUs.html";
    });
  }
});
