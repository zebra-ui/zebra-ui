var object = require('./object.js');
var array = require('./array.js');

function kebabCase(word) {
	var newWord = word
		.replace(new RegExp("[A-Z]", 'g'), function(i) {
			return '-' + i;
		})
		.toLowerCase()

	return newWord;
}

function style(styles) {
	if (Array.isArray(styles)) {
		return styles
			.filter(function(item) {
				return item != null && item !== '';
			})
			.map(function(item) {
				return style(item);
			})
			.join(';');
	}

	if (Object.prototype.toString.call(styles) === '[object Object]') {
		return Object
			.keys(styles)
			.filter(function(key) {
				return styles[key] != null && styles[key] !== '';
			})
			.map(function(key) {
				return [kebabCase(key), [styles[key]]].join(':');
			})
			.join(';');
	}
	return styles;
}

export default style;
