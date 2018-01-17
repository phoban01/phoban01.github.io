var $elements = $('.flex-center');

$('.flex-center').each(function(el) {
	flexibility($(this)[0]);
});

viewportUnitsBuggyfill.init({hacks: window.viewportUnitsBuggyfillHacks});
