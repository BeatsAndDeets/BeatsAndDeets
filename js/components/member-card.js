var cardHeight;
// Sets the height of the back of the card to match the image in front
function setBackHeight() {
  cardHeight = $('.member .member--front img').height();
  $('.member .member--back').height(cardHeight);
}
$(document).ready(function() {
  $('.member').addClass('not-flipped');
  if (Modernizr.touch){
    $('.member.not-flipped').on('click', function() {
      $('.member').addClass('not-flipped');
      $(this).removeClass('not-flipped');
    });
    $('.cancel-card').click( function(ev) {
      ev.stopPropagation();
      $('.member').addClass('not-flipped');
    });
  } else {
    $('.member').hover(function() {
      $(this).toggleClass('not-flipped');
    });
  }
});
$(window).load(function() {
  // On window change, recalculate the size of the box
  window.onresize = function(){
    setBackHeight();
  }
  setBackHeight();
});