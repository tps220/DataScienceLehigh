//Onload Function
$(document).ready(function() {
  //Implement scrolling features
  $("#story-nav-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#page2").offset().top
    }, 1000);
  });
  $("#story-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#page2").offset().top
    }, 1000);
  });
  $("#btn-custom").click(function() {
    $('html, body').animate({
      scrollTop: $("#page2").offset().top
    }, 1000);
  });

  $("#home-nav-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#page1").offset().top
    }, 1000);
  });
  $("#home-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#page1").offset().top
    }, 1000);
  });


    $("#team-nav-link").click(function() {
      $('html, body').animate({
        scrollTop: $("#page3").offset().top
      }, 1000);
    });
    $("#team-link").click(function() {
      $('html, body').animate({
        scrollTop: $("#page3").offset().top
      }, 1000);
    });
});
