(function(a,b){var c=function(a,b,c){var d;return function e(){function g(){if(!c)a.apply(e,f);d=null}var e=this,f=arguments;if(d)clearTimeout(d);else if(c)a.apply(e,f);d=setTimeout(g,b||20)}};jQuery.fn[b]=function(a){return a?this.bind("resize",c(a)):this.trigger(b)}})(jQuery,"smartresize")

var $masonry = $('.masonry');
var navigationTopOffset;
var navigationHeight;

jQuery(window).load(function(){
  
  
  navigationTopOffset = $('#nav').offset().top;
  navigationHeight = $('nav.main').height();
  
  
  
  
});

jQuery(document).ready(function($){
  
  $("a.zoom").fancybox({
    padding:0,
    'titleShow': false,
    overlayColor: '#ffffff',
    overlayOpacity: 0.4
  });
  
  

  $("nav.mobile select").change(function(){ window.location = jQuery(this).val(); });
  $('#product .thumbs a').click(function(){
    
    $('#placeholder').attr('href', $(this).attr('href'));
    $('#placeholder img').attr('src', $(this).attr('data-original-image'))
    
    $('#zoom-image').attr('href', $(this).attr('href'));
    return false;
  });
  
  
  
  
  navigationTopOffset = $('#nav').offset().top;
  $(window).scroll(function(){
    navigationHeight = $('nav.main').height();
    navigationHeight += 20;
    if($(window).scrollTop() > navigationTopOffset){
      $('body').addClass('fixed-navigation');
      $('body').css('padding-top', navigationHeight + 'px');
    } else {
      $('body').removeClass('fixed-navigation');
      $('body').css('padding-top', '0');
    }
  });
  
  
  $('input[type="submit"], input.btn, button').click(function(){ // remove ugly outline on input button click
    $(this).blur();
  })
  
  $("li.dropdown").hover(function(){
    $(this).children('.dropdown').show();
    $(this).children('.dropdown').stop();
    $(this).children('.dropdown').animate({
      opacity: 1.0
    }, 200);
  }, function(){
    $(this).children('.dropdown').stop();
    $(this).children('.dropdown').animate({
      opacity: 0.0
    }, 400, function(){
      $(this).hide();
    });
  });
}); // end document ready