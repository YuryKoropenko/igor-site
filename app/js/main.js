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
});