

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



//! Запуск/остановка видео
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



//! Скрыть блок навигации, по клику вне блока
$(document).mouseup(function (e) { // событие клика по веб-документу
	if ( ! $(".header__burger").is(e.target) && $(".header__burger").has(e.target).length === 0 &&
		// если клик был не по нашему блоку
		! $(".header__menu").is(e.target) && $(".header__menu").has(e.target).length === 0
		// и не по его дочерним элементам
			) {
	$(".header__burger, .header__menu").removeClass('_active'); // скрываем его
	}
});

// скрыть меню при сколле
$(window).on('scroll', function() {
	if ($(this).scrollTop() > 340) {
		$('.header__burger, .header__menu').removeClass('_active');
	}
});

$(document).mouseup(function (e) { // событие клика по веб-документу
	if ( ! $(".footer__burger").is(e.target) && $(".footer__burger").has(e.target).length === 0 &&
			// если клик был не по нашему блоку
			! $(".footer__menu-list").is(e.target) && $(".footer__menu-list").has(e.target).length === 0
			// и не по его дочерним элементам
				) {
		$(".footer__burger, .footer__menu-list").removeClass('_active'); // скрываем его
		}
	});

	// скрыть меню при сколле
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 340) {
			$('.footer__burger, .footer__menu-list').removeClass('_active');
		}
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