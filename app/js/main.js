$(document).ready(function() {
	/**/
	$('.nav__button').on('click', function() {
		$('.header .nav').slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.header .nav').length) return;
				$('.header .nav').slideUp();
				event.stopPropagation();
			});
		return false;
	});

	/**/
	$('.b-feedback__button').on('click', function() {
		$('.popup-form__bg').fadeIn();
		$('.popup-form').fadeIn();
	});
	$('.popup-form__bg').on('click', function() {
		$('.popup-form').fadeOut();
		$('.popup-form__bg').fadeOut();
	});
	$('.popup-form__close').on('click', function() {
		$('.popup-form').fadeOut();
		$('.popup-form__bg').fadeOut();
	});

/**/
	$('.emergency__form-input-phone').mask("(999) 999-9999");
});