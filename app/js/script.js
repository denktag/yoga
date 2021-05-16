

//! swiper slider
let swiper = new Swiper('.classes-slider__container', {
	navigation: {
    nextEl: '.classes-slider__button-next',
    prevEl: '.classes-slider__button-prev',
  },

	loop: true,
	slidesPerView: 4,
	spaceBetween: 30,

	

	autoplay: {
		delay: 3000,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		576: {
			slidesPerView: 2,
		},

		768: {
			slidesPerView: 3,
		},

		992: {
			slidesPerView: 4,
		},
	},
});

let reviewsSwiper = new Swiper('.reviews__slider-container', {
	loop: true,

	pagination: {
    el: '.reviews__slider-pagination',
		clickable: true,
	},

	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},

	autoplay: {
		delay: 3000,
	},
});



//! Запуск/остановка видео по нажатию на родителя тега 'video'
$(document).ready(function(){
  $('.info__video-wrap').click(function(){
    let myVideo = $(this).find("video")[0];
		$('.info__video-btn').toggleClass('_active');
    myVideo.paused ? myVideo.play() : myVideo.pause()
  });
});


//! Добавление/удаление класса
$('.header__link').on('click', function (){
	$('.header__link').removeClass('_page-active');
	$(this).addClass('_page-active');
});


//! burger-menu
$(document).on("click", ".header__burger", function(e) {
	$('.header__burger, .header__menu').toggleClass('_active');
});

$(document).on("click", ".footer__burger", function(e) {
	$('.footer__burger, .footer__menu-list').toggleClass('_active');
});



//! Плавный скрол
$(document).on("click", ".instructors__btn", function(e) {
	e.preventDefault();
	let id  = $(this).attr('href');
	let top = $(id).offset().top;
	$('body, html').animate({scrollTop: top}, 800);
});



//! Определение поддержки браузером формата webp для использования webp в свойстве background-image в scss
function testWebP(callback) {

	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});