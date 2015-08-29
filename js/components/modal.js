$(function() {
  $(".modal-state").on("change", function() {
    if ($(this).is(":checked")) {
      $("html").addClass("modal-open");
    } else {
      $("html").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

});