jQuery(document).ready(function () {
	setBackgroundElement();
	Fullpage.init();
	Header.init();
	swiperInit();
});
/*==================== Declare Global Variable ====================*/
var vw = jQuery(window).width();
/*====================  ====================*/
const Fullpage = {
	generateThumbs: function () {
		const countSlide = jQuery(
			".fullpage-swiper > .swiper > .swiper-wrapper > .swiper-slide"
		).length;
		jQuery(
			".fullpage-swiper > .swiper > .swiper-wrapper > .swiper-slide"
		).each(function (index) {
			let title = $(this).data("title");
			jQuery(".fullpage-slide-thumb .swiper-wrapper").append(
				`<div class="swiper-slide"><div class="item-thumb" data-title="${
					title || ""
				}"><span>${index + 1}</span></div></div>`
			);
		});
	},
	swiper: function () {
		var fullpage_thumb = new Swiper(".fullpage-slide-thumb .swiper", {
			spaceBetween: 0,
			direction: "vertical",
			speed: 800,
			allowTouchMove: false,
			observer: true,
			observeParents: true,
		});
		var fullpage_main = new Swiper(
			".fullpage-swiper .swiper-full-current",
			{
				spaceBetween: 0,
				direction: "vertical",
				speed: 800,
				observer: true,
				observeParents: true,
				mousewheel: {
					forceToAxis: true,
					thresholdTime: 1200,
				},
				thumbs: {
					swiper: fullpage_thumb,
				},
				keyboard: {
					enabled: true,
				},
				freeMode: false,
				slidesPerView: 1,
				allowTouchMove: false,
				effect: "creative",
				creativeEffect: {
					prev: {
						shadow: true,
						translate: [0, "-50%", -1],
					},
					next: {
						translate: [0, "100%", 1],
					},
				},
				on: {
					slideChange: () => {
						var index = fullpage_main.activeIndex + 1;
						if (index > 1) {
							jQuery("header nav").addClass("hidden-header");
						} else {
							jQuery("header nav").removeClass("hidden-header");
						}
						console.log(
							"🚀 ~ file: main.js ~ line 65 ~ index",
							index
						);
					},
				},
			}
		);
	},
	init: function () {
		if (vw < 1260) return;
		Fullpage.generateThumbs();
		Fullpage.swiper();
	},
};
/*==================== Animation loader  ====================*/
function animationLoader(e) {
	jQuery("body").addClass("loaded");
}
/*==================== Set background ====================*/
function setBackgroundElement() {
	jQuery("[setbackground]").each(function () {
		var background = $(this).attr("setbackground");
		jQuery(this).css({
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

let Header = {
	clickMenuMobile: function () {
		$(".header-mobile ul li a").on("click", function (e) {
			e.preventDefault();
			$('.header-mobile').removeClass('active')
			$('.overlay').removeClass('active')
			$('.header-hambuger').removeClass('active')
			let id = $(this).attr("href");
			console.log("🚀 ~ file: main.js ~ line 123 ~ id", id)
			$("html,body").animate(
				{
					scrollTop: $(id).offset().top,
				},
				800
			);
		});
	},
	slidingMenu: function () {
		var marker = document.querySelector("#marker");
		var item = document.querySelectorAll("header .header-menu li a");
		function indicator(e) {
			marker.style.left = e.offsetLeft + "px";
			// marker.style.width = e.offsetWidth + "px";
		}
		item.forEach(link => {
			link.addEventListener("click", e => {
				indicator(e.target);
			});
		});
	},
	headerHambuger: function () {
		$(".header-hambuger").on("click", function () {
			$(this).toggleClass("active");
			$(".header-mobile").toggleClass("active");
			$(".overlay").toggleClass("active");
		});
	},
	init: function () {
		Header.clickMenuMobile();
		Header.slidingMenu();
		Header.headerHambuger();
	},
};
/*==================== Swiper ====================*/
function navigationSlide(nodeParent, nodePrev, nodeNext, nodeSlide) {
	nodeSlide.on("slideChange", function () {
		let indexSlide = this.activeIndex;
		let totalSlide = this.slides.length - 1;
		const nodeTotal = $(nodeParent).find(".total");
		const nodeCurrent = $(nodeParent).find(".current");
		totalLengthSlide(nodeTotal, nodeCurrent, this);
	});
	var totalSlide = nodeSlide.slides.length;
	var $this = nodeSlide;
	nodePrev.click(function () {
		if ($this.isBeginning) {
			$this.slideTo(totalSlide - 1);
		} else {
			$this.slideTo($this.realIndex - 1);
		}
	});
	nodeNext.click(function () {
		if ($this.isEnd) {
			$this.slideTo(0);
		} else {
			$this.slideTo($this.realIndex + 1);
		}
	});
}
function totalLengthSlide(nodeTotal, nodeCurrent, nodeSlide) {
	// console.log(nodeSlide);
	nodeTotal.text(nodeSlide.slides.length);
	nodeCurrent.text(nodeSlide.realIndex + 1);
}
function swiperInit() {
	// Total slide swiper section 3
	var section_home_3_swiper = new Swiper(
		".section-home-3 .wrap-slide .swiper",
		{
			slidesPerView: 1.5,
			spaceBetween: 15,
			breakpoints: {
				768: {
					slidesPerView: 1.5,
					spaceBetween: 15,
				},
				1280: {
					slidesPerView: 2.5,
					spaceBetween: 15,
				},
			},
			on: {
				init: function () {
					const nodeTotal = $(".section-home-3 .wrap-slide .total");
					const nodeCurrent = $(
						".section-home-3 .wrap-slide .current"
					);
					const nodeSlide = this;
					totalLengthSlide(nodeTotal, nodeCurrent, nodeSlide);
				},
			},
		}
	);
	navigationSlide(
		$(".section-home-3"),
		$(".section-home-3 .wrap-slide .btn-prev"),
		$(".section-home-3 .wrap-slide .btn-next"),
		section_home_3_swiper
	);
	var section_slide_home_4 = new Swiper(".section-home-4 .swiper", {
		slidesPerView: 1,
		speed: 1500,
		effect: "gl",
		modules: [SwiperGL],
		gl: {
			shader: "morph-x",
		},
		navigation: {
			nextEl: ".section-home-4 .wrap-slide .btn-next",
			prevEl: ".section-home-4 .wrap-slide .btn-prev",
		},
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
		},
	});

	var section_home_7_swiper = new Swiper(
		".section-home-7 .box-content-middle .swiper",
		{
			slidesPerView: 1,
			spaceBetween: 15,
			speed: 1000,
			on: {
				init: function () {
					const nodeTotal = $(".section-home-7 .total");
					const nodeCurrent = $(".section-home-7 .current");
					const nodeSlide = this;
					totalLengthSlide(nodeTotal, nodeCurrent, nodeSlide);
				},
			},
		}
	);
	navigationSlide(
		$(".section-home-7"),
		$(".section-home-7 .btn-prev"),
		$(".section-home-7 .btn-next"),
		section_home_7_swiper
	);

	var section_home_8_swiper_text = new Swiper(
		".section-home-8 .wrap-slide-text .swiper",
		{
			slidesPerView: 1,
			spaceBetween: 15,
			speed: 1000,
		}
	);
	var section_slide_home_8 = new Swiper(
		".section-home-8 .img-main-slide .swiper",
		{
			slidesPerView: 1,
			speed: 1000,
			spaceBetween: 30,
			thumbs: {
				swiper: section_home_8_swiper_text,
			},
			on: {
				init: function () {
					const nodeTotal = $(".section-home-8 .total");
					const nodeCurrent = $(".section-home-8 .current");
					const nodeSlide = this;
					totalLengthSlide(nodeTotal, nodeCurrent, nodeSlide);
				},
			},
			autoplay: {
				delay: 5000,
			},
		}
	);
	navigationSlide(
		$(".section-home-8"),
		$(".section-home-8 .wrap-bottom-title .btn-prev"),
		$(".section-home-8 .wrap-bottom-title .btn-next"),
		section_slide_home_8
	);
	var section_slide_home_9 = new Swiper(".section-home-9 .swiper", {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 30,
		effect: "gl",
		modules: [SwiperGL],
		gl: {
			shader: "morph-x",
		},
		navigation: {
			nextEl: ".section-home-9 .btn-next",
			prevEl: ".section-home-9 .btn-prev",
		},
		autoplay: {
			delay: 5000,
		},
	});

	var section_slide_home_10_main = new Swiper(
		".section-home-10 .content-right .swiper",
		{
			slidesPerView: 1,
			speed: 1000,
			effect: "creative",
			allowTouchMove: false,
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
		}
	);

	var section_slide_home_10_thumb = new Swiper(
		".section-home-10 .content-left .swiper",
		{
			grabCursor: true,
			centeredSlides: true,
			spaceBetween: 70,
			autoplay: {
				delay: 5000,
			},
			speed: 800,
			thumbs: {
				swiper: section_slide_home_10_main,
			},
			on: {
				init: function () {
					const nodeTotal = $(".section-home-10 .total");
					const nodeCurrent = $(".section-home-10 .current");
					const nodeSlide = this;
					totalLengthSlide(nodeTotal, nodeCurrent, nodeSlide);
				},
			},
			breakpoints: {
				575: {
					spaceBetween: 70,
					slidesPerView: 1.8,
					effect: "coverflow",
					coverflowEffect: {
						rotate: 0,
						scale: 1,
						stretch: -150,
						depth: 800,
						modifier: 1,
						slideShadows: false,
					},
				},
				1024: {
					slidesPerView: 1.8,
					spaceBetween: 50,
					coverflowEffect: {
						rotate: 0,
						scale: 0.9,
						stretch: -150,
						depth: 1300,
						modifier: 1,
						slideShadows: false,
					},
				},
				1330: {
					slidesPerView: 1.8,
					coverflowEffect: {
						rotate: 0,
						scale: 0.8,
						stretch: -150,
						depth: 1000,
						modifier: 1,
						slideShadows: false,
					},
				},
			},
		}
	);
	navigationSlide(
		$(".section-home-10"),
		$(".section-home-10 .btn-prev"),
		$(".section-home-10 .btn-next"),
		section_slide_home_10_thumb
	);
	var section_slide_home_11 = new Swiper(".section-home-11 .swiper", {
		grabCursor: true,
		speed: 800,
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
		},
		loop: true,
		navigation: {
			nextEl: ".section-home-11 .btn-next",
			prevEl: ".section-home-11 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1280: {
				slidesPerView: 3,
			},
		},
	});
}