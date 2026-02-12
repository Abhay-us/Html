$(document).ready(function () {
  $(".banner-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-carousel-2").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 10,
    dots: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
  var $grid = $(".menu-dish").isotope({
    itemSelector: ".menu-item",
    layoutMode: "fitRows",
  });

  $(".menu-select").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    $(".menu-select li").removeClass("active");
    $(this).addClass("active");
  });

  // ScrollReveal().reveal(".features-scroll", { delay: 500 });
  // ScrollReveal().reveal(".journey-scroll", { delay: 500 });

  //  ScrollReveal().reveal(".feature-scroll", { delay: 500 });
});
