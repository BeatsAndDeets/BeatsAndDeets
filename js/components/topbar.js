$(function() {

  var $topbar = $('.topbar');

  // Submenu Active
  $(function () {
    $('.dropdown-trigger').on('click', function (e) {
      e.preventDefault();
      $(this).siblings('.sub-menu').toggleClass('is-active');
    });
  });

  // Mobile Menu
  $(function(){
    $('.js-menu-trigger,.js-menu-screen').on('click touchstart',function(e) {
      e.preventDefault();
      $('.js-menu,.js-menu-screen').toggleClass('is-visible');
    });
  });

});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 0;
var navbarHeight = $('.topbar').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  if(Math.abs(lastScrollTop - st) <= delta)
    return;
  if (st > lastScrollTop && st > navbarHeight){
    $('.topbar').removeClass('nav-down').addClass('nav-up');
  } else {
    if(st + $(window).height() < $(document).height()) {
      $('.topbar').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}