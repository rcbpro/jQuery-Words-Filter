/*
 * words filter
 * https://github.com/rcbpro/jQuery-filter-words/
 *
 * Copyright (c) 2012 rcbpro
 * Licensed under the FREE licenses.
 */

(function($) {

	var filterWords = {
		init: function(jsonArray){
			$.each(jsonArray, function(i){
				
			});
		}
	};
	
	$.filterWords = function(jsonArray){
		var obj = Object.create(filterWords);
		obj.init(jsonArray);
	};
	
}(jQuery));