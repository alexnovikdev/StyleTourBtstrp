$(function() {
  $('.carousel').carousel({
  interval: 5000
  });
  $(".search").on("click", function(){
    $(".main-menu .navbar-inverse .navbar-form").slideToggle();
  });
  $('#elastislide').elastislide();
});
$(window).load(function(){
  var carouselCaptionWidth = $("#carousel-sidebar .active img").width();
  $("#carousel-sidebar img").each(function(){
    $(this).attr("width", carouselCaptionWidth);
  });
  $("#carousel-sidebar .sidebar-carousel-caption").css("max-width", carouselCaptionWidth + "px");
  $(".sidebar .carousel-indicators").css("max-width", carouselCaptionWidth + "px");
  $(".sidebar .banner").css("max-width", carouselCaptionWidth + "px");
});
