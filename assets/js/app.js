$('.mobile__menu').on('click', function (e) {
    e.preventDefault();
    $('.menu__btn').toggleClass('menu__active');
    $('.nav').toggleClass('menu__active');
})

$('.nav__link').on('click', function(e) {
    $('.menu__btn,.nav').removeClass('menu__active');
})
$(document).ready(function () {

	$('a[href^="#"]').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
		return false;
	});

});
window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    
    if(window.pageYOffset > 700){
        header.classList.add('header__fixed');
    } else{
        header.classList.remove('header__fixed');
    }

    if(window.innerWidth < 768) {
        header.classList.remove('header__fixed-mob');
    }
}
window.onload = function addClass (event) {
   event.preventDefault();
   
   var text = document.querySelector('.services__text-wrap');
   
   if(window.innerWidth < 991) {
      text.classList.add('offset-md-3');
   } else{
      text.classList.remove('offset-md-3');
   }
};