var fadein = $('div.fadein');
$.each(fadein, function(i, item) {
	setTimeout(function() {
		$(item).fadeIn(1000); // duration of fadein
	}, 1000 * i); // duration between fadeins
});​
