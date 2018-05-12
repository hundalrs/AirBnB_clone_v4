$(window).on('load', function () {
    let result = {};
    $('input[type=checkbox]').click(function () {
	if (this.checked) {
	    result[this.data.id] = this.data.name;
	} else {
	    delete result[this.data.id];
	}
	$('.amenities h4').text(Object.values(result).join(', '));
    });
});
