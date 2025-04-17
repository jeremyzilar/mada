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

  // Smooth scroll to section when clicking hash links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Get the sticky header height (adjust this value if needed)
        const headerOffset = 96; // Equivalent to top-24 (24 * 4)
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update URL without scrolling
        history.pushState(null, "", `#${targetId}`);
      }
    });
  });

  // Handle initial hash in URL
  if (window.location.hash) {
    const targetId = window.location.hash.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        const headerOffset = 96;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  }
});
