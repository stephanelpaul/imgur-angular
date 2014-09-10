var filters = angular.module('imgurApp.filters', []);

filters.filter("pagination", function() {
	return function(input, start) {		
		start = +start;
		return input.slice(start);
	}
});