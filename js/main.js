


/* Countdown Timer */
jQuery(document).ready(function() {
	"use strict";
	$('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		10,
			'month': 	1,
			'year': 	2015,
			'hour': 	11,
			'min': 		0,
			'sec': 		0
		}
	});
});

/* Testimonial Owl Carousel */
$(document).ready(function() {
	"use strict";
	$(".quotes-slider").owlCarousel({
		autoPlay: 6000,
		stopOnHover: true,
		navigation: true,
		pagination: false,
		slideSpeed: 666,
		paginationSpeed: 999,
		goToFirstSpeed: 3000,
		singleItem: true,
		transitionStyle: "backSlide"
  	});
});

/* Background Slideshow */
$(document).ready(function($) {
  	"use strict";
	var giantdesign_trigger = false;
	
	function initializegiantdesign() {	
		giantdesign_trigger = true;	
		jQuery('html').bind('contextmenu', function(e) {
			return false;
	});
	
	if (jQuery('.giantdesign #slides').length != 0) {
		
		if (jQuery('.giantdesign #slides li').length < 2) {
			jQuery('.giantdesign #slides').superslides({
				play: false,
				animation: 'fade',
				hashchange: false,
				pagination: false
			});
		} else {		
			jQuery('.giantdesign #slides').superslides({
				play: 5000,
				animation: 'fade',
				hashchange: false,
				pagination: false
			});
		}
	}
	
	// MAIN DIMENSION SET WIDTH
	$(document).ready(function() {
		function mainInit() {			
			var main = jQuery('.giantdesign #main'),
			ww = jQuery(window).width(),
			mainWidth = ww-250;
			
			if (ww > 900) {
				main.css({
					width: mainWidth+"px"
				});
			}
			
			// center content
			var mainContent = jQuery('.giantdesign .content .content-inner'),
				contentHeight = mainContent.height(),
				parentHeight = main.height(),
				topMargin = (parentHeight - contentHeight) / 2;
				
			mainContent.css({
				"padding-top" : topMargin+"px"
			});
		}
		
		jQuery(window).on("resize", mainInit);
		jQuery(document).on("ready", mainInit);
	})();
		
	var formShowing = false;
}

// Document Ready
jQuery(document).ready(function($){
	giantdesign_trigger = true;
	initializegiantdesign();	
	jQuery(window).on("resize", initializegiantdesign());
});

if (giantdesign_trigger == false) {
	setTimeout(initializegiantdesign, 300);
}})(jQuery);
