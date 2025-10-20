document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;

  // Check if the URL path contains '/appartement/'
  if (currentPath.includes("/appartement/")) {
    alert("Bienvenue sur la page de l'appartement !");
  }
});
