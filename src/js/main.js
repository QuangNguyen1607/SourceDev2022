$(document).ready(function () {
	buttonHover();
});
/*==================== Mapping Menu ====================*/
function mappingMenu() {
	let ww = $(window).width();
	if (ww < 1024) {
		$(".header-main-menu .list-menu-main").appendTo(".menu-mobile-main");
	}
	$(".section-product-about").appendTo(".page-about-main.section-6");
	$(".select-sort").appendTo(".wrap-tab-list-select");
	$(".get-img-search").appendTo(".search-form-main .img");
	$(".searchbox .wrap-form-subscribe").appendTo(".banner-text-form");
}
/*==================== Animation loader  ====================*/
function animationLoader(e) {
	$("body").addClass("loaded");
}
/*==================== JS Other ====================*/
function height(el) {
	var height = 0;
	$(el).each(function () {
		var thisHeight = $(this).height();
		if (thisHeight > height) {
			height = thisHeight;
		}
		setTimeout(() => {
			$(el).height(height);
		}, 100);
	});
}

let header = {
	scrollActive: function () {
		let height = $("header").height();
		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},
	init: function () {},
};
/*==================== Swiper ====================*/
function swiperInit() {
	var bannerHome = new Swiper(".banner-home .swiper-container", {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		speed: 300,
		// slidesPerColumn: 2,
		// spaceBetween: 30,
		slidesPerColumnFill: "row",
		pagination: {
			el: ".banner-home .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".banner-home .button-next",
			prevEl: ".banner-home .button-prev",
		},
	});
}
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
