/*
 * words filter
 * https://github.com/rcbpro/jQuery-filter-words/
 *
 * Copyright (c) 2012 rcbpro
 * Licensed under the FREE licenses.
 */

(function($) {

	var filterWords = {
		init: function(jsonArray = null, selectorWrapper = null, selectorWrapperCss = null, inputType = null){
			this.extendedJsonArray = $.extend({}, $.filterWords.defaultJsonArray);
			this.selectorWrapperCss = $.extend({}, $.filterWords.selectorWrapperCss);			
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
	
	$.filterWords = function(jsonArray, selectorWrapper, selectorWrapperCss, inputType){
		var obj = Object.create(filterWords);
		obj.init(jsonArray, selectorWrapper, selectorWrapperCss, inputType);
	};
	
	$.filterWords.defaultJsonArray = ["nissan","toyota", "hyundai", "maruti", "suzuki", "merzidis-benz", "bmw", "audi", "isuzu"];
	$.filterWords.defaultInputType = "checkbox";
	$.filterWords.defaultWrapperDivClass = ["wordsFilterWrapper", "";
	$.filterWords.defaultCss =  [
								  {
									  'width': '300px', 
									  'height': '300px', 
									  'background-color':'#CCC', 
									  'font-size':'12px'
								  },
								  {
									  'width': '200px', 
									  'height': '300px', 
									  'background-color':'#CFC'
								  },
								  {
									  'width': '100px', 
									  'height': '300px', 
									  'background-color':'#3FF'
								  }
							   ];
}(jQuery));