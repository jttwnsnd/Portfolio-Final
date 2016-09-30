$(document).ready(function(){
	$('a').on('click',function(event){
		if(this.hash !== ''){
			event.preventDefault();
			var hash = this.hash;
			console.log(this.hash);
			$('html, body').animate({
				scrollTop: $(hash).offset().top}, 800, function(){
					window.location.hash = hash + 60;
					console.log(window.location.hash);
				});
		}
	});
	//project hover effect
	// $('.project-overview').hover(function(){
	// 	$(this).css({'background-color': 'transparent'});
	// }, function(){
	// 	$(this).css({'background-color': 'F88909'});
	// });
});
