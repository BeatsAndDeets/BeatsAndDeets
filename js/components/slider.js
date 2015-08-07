$(function () {

  // Content Only Slider
  $('.slider--content-items').owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: true,
    autoHeight: true
  });

  // Image Slider
  $('.slider--images').owlCarousel({
    items: 1.5,
    loop: true,
    center: true,
    nav: true,
    autoplay: true
  });
});