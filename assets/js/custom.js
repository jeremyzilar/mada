$(document).ready(function () {
  console.log("clicked");
  $(".accordion .card").click(function () {
    $(this).siblings().removeClass("active"); // remove active class from all other cards in the same accordion
    $(this).addClass("active"); // add active class to the clicked card
  });
});
