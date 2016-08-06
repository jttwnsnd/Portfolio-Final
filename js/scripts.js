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
	var windowScroll;
	$(window).scroll(function(){
		windowScroll = $(this).scrollTop();
		if(windowScroll >= 325){
			$('.right-side').css('opacity','1');
		}else if(windowScroll <=324){
			$('.right-side').css('opacity','0');
		}
		if(windowScroll >= 200){
			$('.leaf').css('opacity', '0');
		}else if(windowScroll <= 199){
			$('.leaf').css('opacity', '1');
		}
		if(windowScroll >= 50){
			$('.description').css({opacity:1});
		}
		if(windowScroll >= 515){
			$('.bar1').animate({'width':'220px'})
			$('.bar2').animate({'width': '180px'})
			$('.bar3').animate({'width': '140px'})
			$('.bar4').animate({'width': '100px'})
			$('.bar5').animate({'width': '60px'})
		}
	})
	$('.menu').hover(function(){
		$(this).toggleClass('glow-text');
		$(this).find('.bar').toggleClass('glow').toggleClass('stretching');
	});
	$('#about-all, #portfolio-all, #contact-all').click(function(){
		
	});
	$('a').on('click',function(event){
		if(this.hash !== ''){
			event.preventDefault();
			var hash = this.hash;
			console.log(this.hash);
			$('html, body').animate({
				scrollTop: $(hash).offset().top}, 800, function(){
					window.location.hash = hash + 60;
					console.log(window.location.hash);
				})
		}
	})
})