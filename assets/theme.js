(function($) {
  "use strict";

  jQuery(document).ready(function(){

    /*----------------------------
 jQuery MeanMenu
------------------------------ */
    jQuery('#mobile-menu-active').meanmenu();	

    /*----------------------------
 wow js active
------------------------------ */
    new WOW().init();

    /*----------------------------
 slider-active
------------------------------ */  
    $(".slider-active").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:true,
      navigation:false,	  
      items : 1,
      transitionStyle : "fade",    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
    }); 

    /*----------------------------
 saleproduct-active-4
------------------------------ */  
    $(".saleproduct-active-4").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:false,
      navigation:true,	  
      items : 4,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,2],
      itemsMobile : [479,1],
    }); 

    /*----------------------------
 testimonial-active
------------------------------ */  
    $(".testimonial-active").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:true,
      navigation:false,	  
      items : 1,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
    });



    /*-------------------------
  showlogin toggle function
--------------------------*/
    $( '#showlogin' ).on('click', function() {
      $( '#checkout-login' ).slideToggle(900);
    }); 

    /*-------------------------
  showcoupon toggle function
--------------------------*/
    $( '#showcoupon' ).on('click', function() {
      $( '#checkout_coupon' ).slideToggle(900);
    });


    /*-------------------------
  Create an account toggle function
--------------------------*/
    $( '#cbox' ).on('click', function() {
      $( '#cbox_info' ).slideToggle(900);
    });

    /*-------------------------
  Create an account toggle function
--------------------------*/
    $( '#ship-box' ).on('click', function() {
      $( '#ship-box-info' ).slideToggle(1000);
    });	


    /*-------------------------
  Create an account toggle function
--------------------------*/
    $( '.side-show' ).on('click', function() {
      $( '.side-hide' ).slideToggle(300);
    });	



    /*--------------------------
   Countdown
---------------------------- */	
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown days"><span class="counting counting-2">%-D</span>days</div><div class="cdown hours"><span class="counting counting-2">%-H</span>hrs</div><div class="cdown minutes"><span class="counting counting-2">%M</span>mins</div><div class="cdown seconds"><span class="counting">%S</span>secs</div>'));
      });
    });

    /*---------------------
	counter
--------------------- */	  

    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    /* Ajax Cart */
    $(".cart-item").on('click', function(){
      $(this).addClass("loading add-item");
      setTimeout(function () {
        $(".cart-item").removeClass("loading");
      },500);
      setTimeout(function () {
        $(".cart-item").removeClass("add-item");
      },1000);

    });    

    /* Ajax Wishlist */
    $(".action--wishlist").on('click', function(){
      $(this).addClass("loading-wishlist add-wishlist");
      setTimeout(function () {
        $(".action--wishlist").removeClass("loading-wishlist");
      },1000);
      setTimeout(function () {
        $(".add-wishlist").removeClass("add-wishlist");
      },2000);

    });    


    /*--------------------------
 scrollUp
---------------------------- */	
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    }); 
    
    /* Match Heigh */   

    $('.products-grid .single-product').matchHeight();
    $('.tab-active-3 .tab-total').matchHeight();
    $('.tab-content .products-grid .single-product').matchHeight();
    $('.wishlist-tile.single-product').matchHeight();
    $('.single-footer').matchHeight();
     $('.item').matchHeight();

	/* Show hide Option */  
    $( ".category-menu > nav > ul > li:gt(5)" ).addClass( "side-hide" );

    if ($('.side-show').hasClass("side-hide")) {
      $('.side-show').removeClass('side-hide');
    } 


    $('.side-show').on('click', function(){
      $(this).toggleClass('show-hide');
    });

    
    /* Hret disable */  
	$('.side-show a').removeAttr('href');


  });

})(jQuery);



