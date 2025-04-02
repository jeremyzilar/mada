document.addEventListener("DOMContentLoaded", function () {
  // Accordion functionality
  document.querySelectorAll(".accordion .card").forEach(function (card) {
    card.addEventListener("click", function () {
      // Remove active class from all other cards and hide their descriptions
      this.parentElement.querySelectorAll(".card").forEach(function (sibling) {
        sibling.querySelector("p").classList.add("hidden");
        sibling.querySelector("p").classList.remove("block");
      });
      // Add active class to the clicked card and show its description
      this.querySelector("p").classList.remove("hidden");
      this.querySelector("p").classList.add("block");
    });
  });

  // Mobile menu functionality
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuOpen = menuButton.querySelector(".menu-open");
  const menuClose = menuButton.querySelector(".menu-close");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !isExpanded);

      // Simple toggle of hidden class
      mobileMenu.classList.toggle("hidden");

      // Toggle the hamburger/close icons
      menuOpen.classList.toggle("hidden");
      menuClose.classList.toggle("hidden");

      // Toggle body scroll
      document.body.style.overflow = isExpanded ? "" : "hidden";
    });
  }
});
