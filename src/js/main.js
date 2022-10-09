$(document).ready(function () {
	setBackgroundElement();
	Fullpage.init();
	swiperInit();
});
const Fullpage = {
	swiper: function () {
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
				// thumbs: {
				// 	swiper: fullpage_thumb,
				// },
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
						// var index = fullpage_main.activeIndex + 1;
						// $(".fullpage-thumb").attr("currentFullPageSlide", index);
						// header.attr("currentFullPageSlide", index);
					},
				},
			}
		);
	},
	init: function () {
		Fullpage.swiper();
	},
};
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
	init: function () {},
};
/*==================== Swiper ====================*/
function swiperInit() {
	// Total slide swiper section 3
	var section_home_3_swiper = new Swiper(
		".section-home-3 .wrap-slide .swiper",
		{
			slidesPerView: 3,
			spaceBetween: 15,
			loop: true,
			navigation: {
				nextEl: ".section-home-3 .wrap-slide .btn-next",
				prevEl: ".section-home-3 .wrap-slide .btn-prev",
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1280: {
					slidesPerView: 2.5,
					spaceBetween: 15,
				},
			},
			on: {
				init: function () {
					$(".section-home-3 .wrap-slide .total").text(
						this.slides.length
					);
					$(".section-home-3 .wrap-slide .current").text(
						this.realIndex + 1
					);
					console.log(this.realIndex);
				},
			},
		}
	);
	section_home_3_swiper.on("slideChange", function () {
		let indexSlide = this.activeIndex;
		let totalSlide = this.slides.length - 1;
		$(".section-home-3 .wrap-slide .total").text(this.slides.length);
		$(".section-home-3 .wrap-slide .current").text(this.realIndex + 1);
	});
	var totalSlide = section_home_3_swiper.slides.length;
	var $this = section_home_3_swiper;
	$(".section-home-3 .wrap-slide .btn-prev").click(function () {
		if ($this.isBeginning) {
			$this.slideTo(totalSlide - 1);
		} else {
			$this.slideTo($this.realIndex - 1);
		}
	});
	$(".section-home-3 .wrap-slide .btn-next").click(function () {
		console.log($this.isEnd);
		if ($this.isEnd) {
			$this.slideTo(0);
		} else {
			$this.slideTo($this.realIndex + 1);
		}
	});
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
			navigation: {
				nextEl: ".section-home-7 .box-content-middle .btn-next",
				prevEl: ".section-home-7 .box-content-middle .btn-prev",
			},
		}
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
			navigation: {
				nextEl: ".section-home-8 .wrap-bottom-title .btn-next",
				prevEl: ".section-home-8 .wrap-bottom-title .btn-prev",
			},
			autoplay: {
				delay: 3000,
			},
		}
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
			delay: 3000,
		},
	});

	var section_slide_home_10_main = new Swiper(
		".section-home-10 .content-right .swiper",
		{
			slidesPerView: 1,
			loop: true,
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
			speed: 800,
			loop: true,
			navigation: {
				nextEl: ".section-home-10 .btn-next",
				prevEl: ".section-home-10 .btn-prev",
			},
			thumbs: {
				swiper: section_slide_home_10_main,
			},
			effect: "coverflow",
			spaceBetween: 50,
			breakpoints: {
				1260: {
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
}
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
