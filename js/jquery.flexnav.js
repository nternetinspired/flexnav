/*global jQuery */
/*!	
* FlexNav.js 0.3
*
* Copyright 2012, Jason Weaver http://jasonweaver.name
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Sunday July 8
*
*
* August 2012 - modified for Joomla 2.5 mod_menu compatibility - Seth Warburton @nternet-inspired.com
*/

(function($) {
	$.fn.flexNav = function(options) {
	    var settings = $.extend({
	        'breakpoint': '800',
	        'animationSpeed': 'fast'
	    },
	    options);

	    var $this = $(this);

	    var resizer = function() {
	        if ($(window).width() < settings.breakpoint) {
	            $("body").removeClass("lg-screen").addClass("sm-screen");
	        }
	        else {
	            $("body").removeClass("sm-screen").addClass("lg-screen");
	        }
	        if ($(window).width() >= settings.breakpoint) {
	            $this.show();
	        }
	    };

	    // Call once to set.
	    resizer();

	    // Function for testing touch screens
	    function is_touch_device() {
	        return !! ('ontouchstart' in window);
	    }
		
		// Set class on html element for touch/no-touch
		if (is_touch_device()) {
		$('html').addClass('flexNav-touch');
		} else {
		$('html').addClass('flexNav-no-touch');
		}

	    // Toggle for nav menu
	    $('.menu-button').click(function() {
	        $this.slideToggle(settings.animationSpeed);
	    });
	
	    // Closes nav menu after links clicked/touched
	    $this.find('a').click(function() {
	        $this.hide();
	    });
	
	    // Toggle click for sub-menus on touch and or small screens
	    $('li.parent').click(function() {
	        $(this).find('ul').slideToggle(settings.animationSpeed);
	    });

	    // Call on resize.
	    $(window).on('resize', resizer);

	};

})(jQuery);