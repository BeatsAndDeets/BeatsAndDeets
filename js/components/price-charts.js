$(function () {
  $('.prices').filter(function() {
    return ($(this).children('li').length <= 3);
  }).children('li').first().addClass('price--shift');
});