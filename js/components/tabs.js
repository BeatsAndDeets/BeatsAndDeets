$(document).ready(function () {
  var $tabs = $('.tabs');

  $tabs.each(function(index) {
    $(this).children('li').first().children('a').addClass('is--active').next().addClass('is--open').show();
  });

  $tabs.on('click', '.tab--link', function(event) {
    if (!$(this).hasClass('is--active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.tabs');
      accordionTabs.find('.is--open').removeClass('is--open').hide();

      $(this).next().toggleClass('is--open').toggle();
      accordionTabs.find('.is--active').removeClass('is--active');
      $(this).addClass('is--active');
    } else {
      event.preventDefault();
    }
  });
});

$(function(){
  var slideHeight = 220; // px
  var defHeight = $('#tab--wrap').height();
  if(defHeight >= slideHeight){
    $('#tab--wrap').css('height' , slideHeight + 'px');
    $('#read-more').append('<a href="#">Read More</a>');
    $('#read-more a').click(function(){
      var curHeight = $('#tab--wrap').height();
      if(curHeight == slideHeight){
        $('#tab--wrap').animate({
          height: defHeight
        }, "normal");
        $('#read-more a').html('Close');
        $('#tab--gradient').fadeOut();
      } else {
        $('#tab--wrap').animate({
          height: slideHeight
        }, "normal");
        $('#read-more a').html('Read More');
        $('#tab--gradient').fadeIn();
      }
      return false;
    });
  }
});