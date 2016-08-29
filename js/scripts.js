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
// $(document).ready(function(){
// 	var windowScroll;
// 	$(window).scroll(function(){
// 		windowScroll = $(this).scrollTop();
// 		if(windowScroll >= 325){
// 			$('.right-side').css('opacity','1');
// 		}else if(windowScroll <=324){
// 			$('.right-side').css('opacity','0');
// 		}
// 		if(windowScroll >= 200){
// 			$('.leaf').css('opacity', '0');
// 		}else if(windowScroll <= 199){
// 			$('.leaf').css('opacity', '1');
// 		}
// 		if(windowScroll >= 50){
// 			$('.description').css({opacity:1});
// 		}
// 		if(windowScroll >= 515){
// 			$('.like1').animate({'margin-right':'220px'})
// 			$('.like2').animate({'margin-right': '180px'})
// 			$('.like3').animate({'margin-right': '140px'})
// 			$('.like4').animate({'margin-right': '100px'})
// 			$('.like5').animate({'margin-right': '60px'})
// 			$('.dislike1').animate({'margin-left':'220px'})
// 			$('.dislike2').animate({'margin-left': '180px'})
// 			$('.dislike3').animate({'margin-left': '140px'})
// 			$('.dislike4').animate({'margin-left': '100px'})
// 			$('.dislike5').animate({'margin-left': '60px'})
// 		}
// 	})
// 	$('.menu').hover(function(){
// 		$(this).toggleClass('glow-text');
// 		$(this).find('.bar').toggleClass('glow').toggleClass('stretching');
// 	});
// 	$('#about-all, #portfolio-all, #contact-all').click(function(){
		
// 	});
// 	$('a').on('click',function(event){
// 		if(this.hash !== ''){
// 			event.preventDefault();
// 			var hash = this.hash;
// 			console.log(this.hash);
// 			$('html, body').animate({
// 				scrollTop: $(hash).offset().top}, 800, function(){
// 					window.location.hash = hash + 60;
// 					console.log(window.location.hash);
// 				})
// 		}
// 	})
// })

$(document).ready(function(){
	$('.menu_option').hover(function(){
		$(this).children().toggleClass('arrow_hover')
	});
})