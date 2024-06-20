document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion .card").forEach(function (card) {
    card.addEventListener("click", function () {
      // Remove active class from all other cards in the same accordion
      this.parentElement.querySelectorAll(".card").forEach(function (sibling) {
        sibling.classList.remove("active");
      });
      // Add active class to the clicked card
      this.classList.add("active");
    });
  });
});
