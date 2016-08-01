// What is JT needing to figure out:

// 1. parallax
// 2. nav bar fades in when reach certain scroll height.
		// - nav bar also tracks where you are on page
// 3. this:
// 	1. when reaching portfolio section, i want the sections to appear as "clips" of the image.
// 	when clicked, I want the other clips to disappear. then a brief description appears with a link
// 	that link goes to the project.

// 	-or-

// 	2. two halves parallax at different speeds. left half slower than right.
// 4. parallax contact elements fall into place when scroll comes close to where they fall.
$(document).ready(function(){
	$('.menu').hover(function(){
		$(this).toggleClass('glow-text');
		$(this).find('.bar').toggleClass('glow').toggleClass('stretching');
	});
	$('.curiousity').hover(function(){
		$('.name').toggleClass('glow-text');
		$('.name').toggleClass('text-grow');
	})
})