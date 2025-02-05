document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.querySelector(".contact-btn");

  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      window.location.href = "../pages/contactUs.html";
    });
  }
});
