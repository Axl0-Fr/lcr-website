document.addEventListener("DOMContentLoaded", () => {
  const popupButtons = document.querySelectorAll("[data-popup]");

  popupButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const popupId = event.target.dataset.popup;
      openPopup(popupId);
    });
  });

  function openPopup(popupId) {
    console.log(`Opening popup: ${popupId}`);

    if (popupId === "appartement") {
      // TODO: Show the appartement popup
    } else if (popupId === "appartement-ski") {
      // TODO: Show the appartement-ski popup
    } else if (popupId === "appartement-rando-velo") {
      // TODO: Show the appartement-rando-velo popup
    } else if (popupId === "blog") {
      // TODO: Show the blog popup
    } else if (popupId === "contact-reservation") {
      // TODO: Show the contact-reservation popup
    }
  }
});
