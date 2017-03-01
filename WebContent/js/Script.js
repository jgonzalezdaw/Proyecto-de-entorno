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



function mostrar1(){
document.getElementById('glinks').style.display = 'none';
document.getElementById('tgramas').style.display = 'block';
document.getElementById('tgrevertreset').style.display = 'none';
document.getElementById('tgeclipse').style.display = 'none';
document.getElementById('active1').style.backgroundColor = '#F73';
document.getElementById('active2').style.backgroundColor = '';
document.getElementById('active3').style.backgroundColor = '';
}

function mostrar2(){
document.getElementById('glinks').style.display = 'none';
document.getElementById('tgramas').style.display = 'none';
document.getElementById('tgrevertreset').style.display = 'block';
document.getElementById('tgeclipse').style.display = 'none';
document.getElementById('active1').style.backgroundColor = '';
document.getElementById('active2').style.backgroundColor = '#F73';
document.getElementById('active3').style.backgroundColor = '';
}

function mostrar3(){
document.getElementById('glinks').style.display = 'none';
document.getElementById('tgramas').style.display = 'none';
document.getElementById('tgrevertreset').style.display = 'none';
document.getElementById('tgeclipse').style.display = 'block';
document.getElementById('active1').style.backgroundColor = '';
document.getElementById('active2').style.backgroundColor = '';
document.getElementById('active3').style.backgroundColor = '#F73';
}

