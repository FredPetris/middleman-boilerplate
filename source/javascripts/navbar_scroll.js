$(document).ready(function() {
  // navbar transition jQuery script
  $(window).on( "scroll", function(e){
    if ($(this).scrollTop() > 50) {
      $(".navbar-wagon").css({
        "margin-top": "-70px"
      });
    }
    else {
      $(".navbar-wagon").css({
        "margin-top": "0px"
      });
    }
  });
});
