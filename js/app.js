var images = $('div > h2 + img');

for (var i=0;i < images.length;i++) {
	var r = Math.random();
	if (r > 0.3) {
		$(images[i]).removeClass('hide-svg')
	}
}