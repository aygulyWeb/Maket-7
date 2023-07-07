$(document).ready(function () {
	$('.main-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<i class="fas fa-angle-right"></i></i>',
		prevArrow: '<i class="fas fa-angle-left"></i></i>',
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 769,
				settings: {
					arrows: false
				}
			}

		]

	});

	$('.set-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<i class="fas fa-arrow-right"></i>',
		prevArrow: '<i class="fas fa-arrow-left"></i>',
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					centerMode: true,
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}

		]

	});
	$('.rolls-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<i class="fas fa-arrow-right"></i>',
		prevArrow: '<i class="fas fa-arrow-left"></i>',
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					centerMode: true,
					centerPadding: '30px',
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}

		]

	});

	$('.pizza-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<i class="fas fa-arrow-right"></i>',
		prevArrow: '<i class="fas fa-arrow-left"></i>',
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					centerMode: true,
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}

		]

	});


	$('.wok-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<i class="fas fa-arrow-right"></i>',
		prevArrow: '<i class="fas fa-arrow-left"></i>',
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,

				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}

		]

	});

});

function readMore() {
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");

	if (btn.style.display === "none") {
		more.style.display = "inline";
	} else {
		btn.style.display = "none"
		more.style.display = "inline";
	}
};

function showMore() {
	var show = document.getElementById("show");
	var btn5 = document.getElementById("btn5");

	if (btn5.style.display === "none") {
		show.style.display = "inline";
	} else {
		btn5.style.display = "none"
		show.style.display = "inline";
	}
};


var btnvar1 = document.getElementById('btn1');

function Toggle1() {
	if (btnvar1.style.color == "red") {
		btnvar1.style.color = "#bacada"
	}
	else {
		btnvar1.style.color = "red"
	}
};

var btnvar2 = document.getElementById('btn2');

function Toggle2() {
	if (btnvar2.style.color == "red") {
		btnvar2.style.color = "#bacada"
	}
	else {
		btnvar2.style.color = "red"
	}
};

var btnvar3 = document.getElementById('btn3');

function Toggle3() {
	if (btnvar3.style.color == "red") {
		btnvar3.style.color = "#bacada"
	}
	else {
		btnvar3.style.color = "red"
	}
};

$(document).ready(function () {
	$('.tabs-triggers__item').click(function (e) {
		e.preventDefault();

		$('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
		$('.tabs-content__item').removeClass('tabs-content__item--active');

		$(this).addClass('tabs-triggers__item--active');
		$($(this).attr('href')).addClass('tabs-content__item--active');

	});

	$('.tabs-triggers__item:first').click();
});



// Footer-Accordion

document.querySelectorAll('.footer-accordion__trigger').forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('footer-accordion__item--active')) {
			parent.classList.remove('footer-accordion__item--active');
		} else {
			document
				.querySelectorAll('.footer-accordion__item')
				.forEach((child) => child.classList.remove('footer-accordion__item--active'))

			parent.classList.add('footer-accordion__item--active');
		}
	})
);

