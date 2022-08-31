$(document).ready(function () {
	header.init();
	swiperInit();
	setBackgroundElement();
	aosInit();
});
/*==================== Aos Init ====================*/
function aosInit() {
	AOS.init({
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 700, // values from 0 to 3000, with step 50ms
		easing: "ease-in-out", // default easing for AOS animations
	});
}
/*==================== Animation loader  ====================*/
function animationLoader(e) {
	$("body").addClass("loaded");
}
/*==================== Set background ====================*/
function setBackgroundElement() {
	$("[setbackground]").each(function () {
		var background = $(this).attr("setbackground");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-repeat": "no-repeat",
			"background-size": "cover",
		});
	});
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
	closeMenuMobile: function () {
		$(".overlay").click(function () {
			$(".header-hambuger").removeClass("active");
			$(".header-mobile-pane").removeClass("active");
			$(".overlay").removeClass("active");
		});
	},
	hambuger: function () {
		$(".header-hambuger").click(function () {
			$(this).toggleClass("active");
			$(".header-mobile-pane").toggleClass("active");
			$(".overlay").toggleClass("active");
		});
	},
	search: function () {
		$(".header-search .icon-search").click(function () {
			$(".input-search").toggleClass("active");
			setTimeout(() => {
				$(".input-search input").focus();
			}, 300);
		});
		$(".header-search .close").click(function () {
			$(".input-search").removeClass("active");
		});
	},
	appendMenuMobile: function () {
		let vw = $(window).width();
		if (vw < 1280) {
			$(".header-search .input-search").appendTo(".header-mobile-pane");
			$(".header-menu").appendTo(".header-mobile-pane");
		}
	},
	headerMenuMobile: function () {
		$(".header-mobile-pane .header-menu li a").click(function () {
			const nextRef = $(this).next();
			if (!nextRef.hasClass("sub-menu")) return true;
			$(this).parent().toggleClass("active");
			nextRef
				.slideToggle()
				.parent()
				.siblings()
				.removeClass("active")
				.find(".sub-menu")
				.slideUp();
			return false;
		});
	},
	init: function () {
		header.search();
		header.hambuger();
		header.appendMenuMobile();
		header.headerMenuMobile();
		header.closeMenuMobile();
	},
};
/*==================== Swiper ====================*/
function swiperInit() {
	var sectionSlideCareers = new Swiper(".section-careers.section-4 .swiper", {
		spaceBetween: 10,
		speed: 1000,
		navigation: {
			nextEl: ".section-careers.section-4 .btn-next",
			prevEl: ".section-careers.section-4 .btn-prev",
		},
	});
	var sectionProductMain = new Swiper(
		".section-product-detail.section-1 .slide-img-thumb .swiper",
		{
			slidesPerView: 3,
			spaceBetween: 15,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
			},
		}
	);
	var sectionProductDetail1 = new Swiper(
		".section-product-detail.section-1 .slide-img-main .swiper",
		{
			spaceBetween: 10,
			thumbs: {
				swiper: sectionProductMain,
			},
		}
	);
	var sectionSustainabilitySection4 = new Swiper(
		".section-sustainability.section-4 .swiper",
		{
			slidesPerView: 2,
			spaceBetween: 25,
			navigation: {
				nextEl: ".section-sustainability.section-4 .btn-next",
				prevEl: ".section-sustainability.section-4 .btn-prev",
			},
			pagination: {
				el: ".section-sustainability.section-4 .swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				1024: {
					slidesPerView: 3,
					spaceBetween: 26,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 26,
				},
			},
		}
	);
	var sectionSusSlideTag = new Swiper(
		".section-sustainability.section-2 .wrap-slide-tab .swiper",
		{
			slidesPerView: 2,
			spaceBetween: 0,
			watchSlidesProgress: true,
			navigation: {
				nextEl: ".section-sustainability.section-2 .wrap-slide-tab .btn-next",
				prevEl: ".section-sustainability.section-2 .wrap-slide-tab .btn-prev",
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 26,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		}
	);
	var sectionSusSlideContent = new Swiper(
		".section-sustainability.section-2 .wrap-slide-content .swiper",
		{
			spaceBetween: 10,
			thumbs: {
				swiper: sectionSusSlideTag,
			},
		}
	);
	var homeLogo = new Swiper(".section-slide-logo .swiper", {
		slidesPerView: 2,
		spaceBetween: 25,
		navigation: {
			nextEl: ".section-slide-logo .btn-next",
			prevEl: ".section-slide-logo .btn-prev",
		},
		pagination: {
			el: ".section-slide-logo .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 26,
			},
			1280: {
				slidesPerView: 5,
				spaceBetween: 37,
			},
		},
	});
	var homeSec1 = new Swiper(".section-home-2 .swiper", {
		slidesPerView: 1,
		spaceBetween: 25,
		navigation: {
			nextEl: ".section-home-2 .btn-next",
			prevEl: ".section-home-2 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 26,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 26,
			},
			1280: {
				slidesPerView: 4,
				spaceBetween: 26,
			},
		},
	});
	var homeLatestNews = new Swiper(".section-latest-news .swiper", {
		slidesPerView: 1,
		spaceBetween: 25,
		navigation: {
			nextEl: ".section-latest-news .btn-next",
			prevEl: ".section-latest-news .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 26,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 26,
			},
			1280: {
				slidesPerView: 4,
				spaceBetween: 26,
			},
		},
	});
	var bannerHome = new Swiper(".section-home-1 .swiper", {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ["-20%", 0, -1],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},
		speed: 1000,
		slidesPerColumnFill: "row",
		pagination: {
			el: ".section-home-1 .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".section-home-1 .btn-next",
			prevEl: ".section-home-1 .btn-prev",
		},
	});
}
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
