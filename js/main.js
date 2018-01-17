var $elements = $('.flex-center');

$('.flex-center').each(function(el) {
	console.log($(this)[0])
	flexibility($(this)[0]);
});

window.viewportUnitsBuggyfill.init();