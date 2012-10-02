/*
 * words filter
 * https://github.com/rcbpro/jQuery-filter-words/
 *
 * Copyright (c) 2012 rcbpro
 * Licensed under the FREE licenses.
 */

(function($) {

	var filterWords = {
		init: function(jsonArray = null, selectorWrapper = null, inputType = null){
			this.extendedJsonArray = $.extend({}, $.filterWords.defaultJsonArray);
			var extendedJsonArr = this.extendedJsonArray;			
			var extendedInputType = ((inputType != null) && (inputType != "")) ? inputType : $.filterWords.defaultInputType;			
			this.htmlWrapperForAllFliters = ((selectorWrapper != null) && (selectorWrapper != "")) ? selectorWrapper : $.filterWords.defaultWrapperDivClass;
			var htmlAllFilterInputs = "";
			$.each(extendedJsonArr, function(i){
				htmlAllFilterInputs += "<Label>" + extendedJsonArr[i] + "<input type='" + extendedInputType + "' value='" + extendedJsonArr[i] + "' /></Label><br />";
			});
			$($("<div class='" + this.htmlWrapperForAllFliters + "'></div>").append(htmlAllFilterInputs)).appendTo('body');
			this.startFiltering();
		},
		startFiltering: function(){
			
		}
	};
	
	$.filterWords = function(jsonArray, selectorWrapper, inputType){
		var obj = Object.create(filterWords);
		obj.init(jsonArray, selectorWrapper, inputType);
	};
	
	$.filterWords.defaultJsonArray = ["nissan","toyota", "hyundai", "maruti", "suzuki", "merzidis-benz", "bmw", "audi", "isuzu"];
	$.filterWords.defaultInputType = "checkbox";
	$.filterWords.defaultWrapperDivClass = "wordsFilterWrapper";	
}(jQuery));