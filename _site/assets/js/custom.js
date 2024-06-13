// We are using Slick.js for the images
// https://kenwheeler.github.io/slick/
$(document).ready(function () {
  var slick_settings = {
    lazyLoad: "ondemand",
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480, //at 480px wide, only one slide will show
        settings: {
          variableWidth: false,
          centerPadding: "0",
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  $(".singinginunison-photos").slick(slick_settings);

  $(window).on("resize orientationchange", function () {
    $(".singinginunison-photos").slick("resize");
  });

  $(document).ready(function () {
    $(".accordion .card").click(function () {
      $(this).siblings().removeClass("active"); // remove active class from all other cards in the same accordion
      $(this).addClass("active"); // add active class to the clicked card
    });
  });
});
