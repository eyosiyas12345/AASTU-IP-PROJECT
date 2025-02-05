const buttons = document.querySelectorAll(".button");
const allEventCards = document.querySelectorAll(".event-cards");
const viewAllButton = document.querySelector('[data-target="view-all"]');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");

    if (targetId === "view-all") {
      // Toggle "View All" and "View Less"
      const isViewAllActive = viewAllButton.textContent === "View All";
      viewAllButton.textContent = isViewAllActive ? "View Less" : "View All";

      allEventCards.forEach((cards) => {
        if (isViewAllActive) {
          cards.classList.add("active"); // Show all cards
        } else {
          cards.classList.remove("active"); // Hide all cards
        }
      });

      if (!isViewAllActive) {
        document.querySelector("#view-all").classList.add("active");
      }
    } else {
      // Show the selected section and hide others
      allEventCards.forEach((cards) => {
        if (cards.id === targetId) {
          cards.classList.add("active");
        } else {
          cards.classList.remove("active");
        }
      });

      // Reset "View All" button text
      viewAllButton.textContent = "View All";
    }
  });
});

const actionButtons = document.querySelectorAll(".action-button");

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const detail = card.querySelector(".card-detail");

    // Toggle the display of the detailed description
    if (detail.classList.contains("active")) {
      detail.classList.remove("active"); // Hide the detail
      detail.style.display = "none"; // Ensure it's hidden
      button.textContent = "Details"; // Change button text to "Details"
    } else {
      detail.classList.add("active"); // Show the detail
      detail.style.display = "block"; // Ensure it's displayed
      button.textContent = "Show Less"; // Change button text to "Show Less"
    }
  });
});
