(function ($) {
	var currentSize = undefined,
		width = 0,
		height = 0;

	responsify = function () {
		return {
			currentSize: currentSize,
			width: width,
			height: height
		};
	};

	$.fn.responsify = function (func) {
		$(document).on('responsify', func);
	};

	$(document).ready(function () {
		var v = function () {
			var el, attr;

			if (window.hasOwnProperty('innerWidth')) {
				attr = 'inner';
				el = window;
			}
			else {
				attr = 'client';
				el = document.documentElement || document.body;
			}

			return { width: el[ attr + 'Width' ], height: el[ attr + 'Height' ] };
		};

		function updateSize() {
			var viewport = v(), theSize;

			width = viewport.width;
			height = viewport.height;

			if (width >= 1200)
				theSize = 'lg';
			else if (width >= 992)
				theSize = 'md';
			else if (width >= 768)
				theSize = 'sm';
			else
				theSize = 'xs';

			if (theSize !== currentSize) {
				currentSize = theSize;

				$(document).trigger('responsify', [theSize]);
			}
		}

		updateSize();

		$(window).resize(updateSize);
	});
})(jQuery);