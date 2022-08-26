
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      
      /* Close when someone clicks on the "x" symbol inside the overlay */
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }

 $("#product1").hover(function(){
    $(".button-hide").fadeIn();
  },  function(){
   $(".button-hide").fadeOut();
  });
 
     // var myHover = document.getElementById("product1");
  //var fullHover = function() {
   // $(this).hover(function(){
  //  $(".button-hide").fadeIn();
 // },  function(){
  //  $(".button-hide").fadeOut();
  //});
 // };
//fullHover();
 

  //myHover.addEventListener("hover", fullHover);

  $(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
            
        }); 
    
    });
    
});
//carousel code
(function($) {

"use strict";

var fullHeight = function() {

  $('.js-fullheight').css('height', $(window).height());
  $(window).resize(function(){
    $('.js-fullheight').css('height', $(window).height());
  });

};
fullHeight();


var carousel = function() {
  $(".featured-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    autoHeight: false,
    margin:30,
    animateOut: 'slideOutDown',
  animateIn: 'flipInX',
    nav:true,
    dots: true,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

};
carousel();

})(jQuery);

$(".stacks").hover(function(){
	$(this).addClass("newClass");
		},function(){
	$(this).removeClass("newClass");
});

$(".coll").hover(function(){
	$(this).addClass("hoveClass");
		},function(){
	$(this).removeClass("hoveClass");
});

