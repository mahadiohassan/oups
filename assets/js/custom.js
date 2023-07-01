/*===preloader===*/
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);
	
	
 $(window).scroll(function() { 
    $(".primary-menu").removeClass("sticky");
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $(".primary-menu").addClass("sticky");
    }
});

$(window).scroll(function() { 
    $(".primary-menu").removeClass("navbar-fixed-top");
    var scroll = $(window).scrollTop();
    if (scroll > 101) {
        $(".primary-menu").addClass("navbar-fixed-top");
    }
});

/*----------------------- masonary -------------------------*/


// filter items on button click
$('.button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  


var  $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-item'
  }
})





/*======lightcase==========*/

  jQuery(document).ready(function($) {
		$('a[data-rel^=lightcase]').lightcase();
	});
	
  
  
  
  
/*----swiper--*/

 var swiper = new Swiper('.swiper-container3', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next1',
        prevButton: '.swiper-button-prev1',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
  /*---blog---*/
var swiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
  /*--sponser--*/
  var swiper = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 20,
		centeredSlides: true,
        loop: true,
		autoplay:2000
    });
 /*---customer-cmnt---*/
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
  
  
  
 
  
  
  
 /*---scroll-up--*/
var link,
		toggleScrollToTopLink = function(){
			
			if($("body").scrollTop() > 600 || $("html").scrollTop() > 0){
				link.fadeIn(500);
			}else{
				link.fadeOut(0);
			}
			
		};
		
			link = $(".scrollUp");
			
			$(window).scroll(toggleScrollToTopLink);
			
			toggleScrollToTopLink();
			
			link.on("click", function(){
				
				$("body").animate({scrollTop: 0});
				$("html").animate({scrollTop: 0});
				
			});
  

  
  
  
//-----wow.js----//

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
  
  
  
  /*====smoth page scroll=====*/
  
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
  
  
  

  $('.nstSlider').nstSlider({
    "crossable_handles": false,
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue);
        $(this).parent().find('.rightLabel').text(rightValue);
    }
});

  
  
/*===================Search Jquery=======================*/ 
	
	$('.search-box i').on( "click", function(){
            $('.search-form').toggleClass('active');
        });
    $('.search-form span').on( "click", function(){
            $('.search-form').toggleClass('active');
     }); 
  
  
  
$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 90,
    itemMargin: 20,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
