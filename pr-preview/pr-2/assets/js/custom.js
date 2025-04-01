document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion .card").forEach(function (card) {
    card.addEventListener("click", function () {
      // Remove active class from all other cards and hide their descriptions
      this.parentElement.querySelectorAll(".card").forEach(function (sibling) {
        sibling.querySelector("p").classList.add("hidden"); // Hide the description
        sibling.querySelector("p").classList.remove("block"); // Remove block class if present
      });
      // Add active class to the clicked card and show its description
      this.querySelector("p").classList.remove("hidden"); // Show the description
      this.querySelector("p").classList.add("block"); // Add block class
    });
  });
});
