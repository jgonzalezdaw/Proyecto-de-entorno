$(document).ready(function(){
	var altura = $('.cssmenu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.cssmenu').addClass('cssmenu-fixed');
		} else {
			$('.cssmenu').removeClass('cssmenu-fixed');
		}
	});
 
});