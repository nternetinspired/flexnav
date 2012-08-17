# FlexNav jQuery Plugin (for Joomla!)

## A Joomla-friendly port of the original FlexNav
This is a version of the brilliant FlexNav by Jason Weaver, https://github.com/indyplanets/flexnav, modified to make it compatible with Joomla's native menu module, mod_menu. If you aren't using Joomla!, please do not use this version!

If you are using Joomla! please be aware that this is not an extension, you cannot simply install it as you would a Joomla extension. If the code below is meaningless you should head over to extensions.joomla.org/ and find something easier to use.

Everything below is from the original and untouched by me.... 

## A Device Agnostic Approach to Complex Site Navigation

### The Details
A mobile-first example of using media queries and jQuery to make a decent site menu with drop downs. Special attention is paid to touch screens using click events. This is something I use to test different navigation techniques and may change as I iterate over different solutions to the problem. Basically I want a simple model to build upon when working on sites from scratch.

### Usage

Add flexnav.css to the head of your document
		
		<link href="css/flexnav.css" rel="stylesheet" type="text/css" / >
		
Add jQuery and jquery.flexnav.js to the head of your document

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.flexnav.js"></script>
		
Initialize FlexNav right before your closing body tag

		<script>
			$("[role='navigation']").flexNav();
		</script>		

you can change the defaults too
	
		<script>
			$("[role='navigation']").flexNav({
				'breakpoint' : '800', // default
				'animationSpeed' : 'fast' // default			
			});			
		</script>	
		
### Todo

* Fix nav staying open after resizing back through media query on small viewports
* Fix hover/click submenu conflicts
* Tidy up CSS

### v.0.2 : July 4th, 2012

* Changed to jQuery Plugin
* No more Modernizr - Uses a simple function to detect touch screens

### v.0.3 : July 8th, 2012

* Close menu after click/touch of menu links (makes sense for single page navigation with anchors)

