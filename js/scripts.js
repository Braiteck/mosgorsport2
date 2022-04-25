$(() => {
	// Основной слайдер на главной
	if ($('.main_slider').length) {
		new Swiper('.main_slider', {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 1,
			watchOverflow: true,
			watchSlidesProgress: true,
			autoHeight: true,
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function (swiper) {
					setTimeout(() => {
						observer.observe()
					}, 200)

					setTimeout(() => {
						let totalSlides = swiper.slides.length - 2

						totalSlides < 10
							? $('.main_slider .count .total').text('0' + totalSlides)
							: $('.main_slider .count .total').text(totalSlides)
					})
				},
				activeIndexChange: swiper => {
					setTimeout(() => {
						(swiper.realIndex + 1) < 10
							? $('.main_slider .count .current').text('0' + (swiper.realIndex + 1))
							: $('.main_slider .count .current').text((swiper.realIndex + 1))
					})
				}
			}
		})
	}
})