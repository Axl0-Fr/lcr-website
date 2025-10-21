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
      // Create a full-screen overlay for the popup
      const popupOverlay = document.createElement("div");
      popupOverlay.style.position = "fixed";
      popupOverlay.style.top = "0";
      popupOverlay.style.left = "0";
      popupOverlay.style.width = "100%";
      popupOverlay.style.height = "100%";
      popupOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Semi-transparent black background
      popupOverlay.style.display = "flex";
      popupOverlay.style.justifyContent = "center";
      popupOverlay.style.alignItems = "center";
      popupOverlay.style.zIndex = "1000"; // Ensure it's on top of other content

      // Create the black box content
      const contentBox = document.createElement("div");
      contentBox.style.backgroundColor = "black";
      contentBox.style.color = "white";
      contentBox.style.padding = "40px";
      contentBox.style.border = "2px solid white";
      contentBox.style.borderRadius = "8px";
      contentBox.style.fontSize = "2em";
      contentBox.textContent = "Hello World!";

      popupOverlay.appendChild(contentBox);
      document.body.appendChild(popupOverlay);

      // Add event listener to close the popup when clicking the overlay
      popupOverlay.addEventListener("click", (event) => {
        // Only close if the click is directly on the overlay, not the content box
        if (event.target === popupOverlay) {
          document.body.removeChild(popupOverlay);
        }
      });
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
