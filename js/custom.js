$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});

// Zoom gallery
$('.zoom-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
		titleSrc: function (item) {
			return item.el.attr('title');
		}
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function (element) {
			return element.find('img');
		}
	}

});

$('.popup-with-zoom-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
}); //fade-zoom

$('.popup-with-move-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-slide-bottom'
}); //fade-slide

$('.test-popup-link').magnificPopup({
	type: 'image',
	mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	zoom: {
		enabled: false, // By default it's false, so don't forget to enable it

		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function

		// The "opener" function should return the element from which popup will be zoomed in
		// and to which popup will be scaled down
		// By defailt it looks for an image tag:
		opener: function (openerElement) {
			// openerElement is the element on which popup was initialized, in this case its <a> tag
			// you don't need to add "opener" option if this code matches your needs, it's defailt one.
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	}

});

/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	}
};
/* viewport width */



var handler = function () {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {
		/*$('.crop-block').detach().insertAfter($('.after-block'));*/
	}

}


// слайдер (настройки тут http://kenwheeler.github.io/slick/)
if ($('.slider-1').length) {
	$('.slider-1').slick({
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<i class="fa fa-angle-right slick-next slick-arrow"></i></i>',
		prevArrow: '<i class="fa fa-angle-left slick-prev slick-arrow"></i>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: "unslick"
			}
		]
	});
};




// плавная прокрутка вниз к якорю
$("#main-nav a, .header__middle .button, .go-genplan a").click(function () {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
	return false;
});



// тень от меню при прокрутке страницы больше чем 355px (можно делать липкий хедер)
$(window).scroll(function () {
	if ($(this).scrollTop() > 620) {
		$('.sticky-holder').addClass('fixed');
		$('body').addClass('stickybody');
	} else {
		$('.sticky-holder').removeClass('fixed');
		$('body').removeClass('stickybody');
	}
	if ($(this).scrollTop() > 590) {
		$('.sticky-holder').addClass('fup');
	} else {
		$('.sticky-holder').removeClass('fup');
	}
});

/* tabs*/
$('.tabs li a').click(function () {
	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide-tab');
	$(this).parent().addClass('active');
	return false;
});
/* tabs*/




$(window).bind('load', handler);
$(window).bind('resize', handler);
