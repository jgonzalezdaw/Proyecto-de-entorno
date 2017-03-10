$(document).ready(function(){
	var altura = $('.cssmenu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.cssmenu').addClass('cssmenu-fixed');
		} else {
			$('.cssmenu').removeClass('cssmenu-fixed');
		}
	});


var URLhash = window.location.hash;
if (URLhash == "#tgramas") {mostrar1();}
else if (URLhash == "#tgrevertreset") {mostrar2();}
else if (URLhash == "#tgeclipse") {mostrar3();}

});

$(document).ready(function(){
	var altura = $('.cssmenuresponsive').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 125 ){
			$('.cssmenuresponsive').addClass('cssmenuresponsive-fixed');
		} else {
			$('.cssmenuresponsive').removeClass('cssmenuresponsive-fixed');
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


var i = 0;
var menu = 0;
var elems = document.getElementsByClassName('cssmenuresponsive');

setInterval(function(){ 
var w = window.innerWidth;
if (w >= 501 && menu == 1 && w <= 640) {desp(); document.getElementById('cabeza').style.height = "103px";}
else if (w >= 501 && menu == 0 && w <= 640) {document.getElementById('cabeza').style.height = "103px";}
else if (w >= 641 && menu == 1) {desp(); document.getElementById('cabeza').style.height = "55px";}
else if (w >= 641 && menu == 0) {document.getElementById('cabeza').style.height = "55px";}
else if (w <= 500 && menu == 0) {document.getElementById('cabeza').style.height = "0px";}
 }, 1000);



function desp(){

	if (menu == 0) {
		for(i = 0; i < elems.length; i++) {
			elems[i].style.display = "block";
		}
		menu = 1;
		document.getElementById('cabeza').style.height = "199px";
	}
	else {
		for(i = 0; i < elems.length; i++) {
			elems[i].style.display = "none";
		}
		document.getElementById('cabeza').style.height = "0px";
		menu = 0;
	}
}
