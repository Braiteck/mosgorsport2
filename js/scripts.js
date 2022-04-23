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
				init: function () {
					setTimeout(() => {
						observer.observe()
					}, 200)
				}
			}
		})
	}
})