$(() => {
	// Есть ли поддержка тач событий или это apple устройство
	if (!is_touch_device() || !/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) $('html').addClass('custom_scroll')


	// Ленивая загрузка
	setTimeout(() => {
		observer = lozad('.lozad:not(.loaded)', {
			rootMargin: '200px 0px',
			threshold: 0,
			loaded: el => el.classList.add('loaded')
		})

		observer.observe()
	}, 200)


	// Аккордион
	$('body').on('click', '.accordion .title', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.accordion')

		if ($(this).closest('.item').hasClass('active')) {
			$(this).closest('.item').removeClass('active')
			$(this).next().slideUp()
		} else {
			parent.find('.item').removeClass('active')
			parent.find('.data').slideUp()

			$(this).closest('.item').addClass('active')
			$(this).next().slideDown()
		}
	})


	$('body').on('click', '.kinds_sports .list_item .name', function (e) {
		e.preventDefault()

		if ($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active')

			$(this).closest('.items').find('.modal_info').removeClass('show')

			$(this).next().removeClass('show')

			$('body').removeClass('modal_open')

			$('.overlay').removeClass('show')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$(this).parent().addClass('active')
			$(this).closest('.items').find('.modal_info').removeClass('show')

			$(this).next().addClass('show')

			$('body').addClass('modal_open')

			$('.overlay').addClass('show')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	$('body').on('click', '.modal_info .close_modal', function (e) {
		e.preventDefault()

		$('.list_item').removeClass('active')

		$('.modal_info').removeClass('show')

		$('body').removeClass('modal_open')

		$('.overlay').removeClass('show')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ($(e.target).closest('.list_item.active').length === 0) {
			console.log($(e.target))
			$('.modal_info').removeClass('show')
			$('.list_item').removeClass('active')
			$('body').removeClass('modal_open')
			$('.overlay').removeClass('show')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})
})



// Вспомогательные функции
const is_touch_device = () => !!('ontouchstart' in window)