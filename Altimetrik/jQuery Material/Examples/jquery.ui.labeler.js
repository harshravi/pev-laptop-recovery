/*
All of the code that makes up our plugin should be encapsulated within a self-executing anonymous function. The jQuery object is passed into this function and is used inside the function via the $ alias; this is to ensure that the plugin is compatible with jQuery’s noConflict() method. This is a specified requirement and should always be adhered to.
*/

(function($) {

    $.widget("ui.labeler", {
		options: {
			location: "bottom",
			color: "#fff",
			backgroundColor: "#000"
		},
				
		_create: function() {
			
				var self = this,
				o = self.options,
				el = self.element,
				cap = $("<span></span>").text(el.attr("alt")).addClass("ui-widget ui-label").css					({
					backgroundColor: o.backgroundColor,
					color: o.color,
					width: el.width()
				}).insertAfter(el),
				capWidth = el.width() - parseInt(cap.css("paddingLeft")) - parseInt(cap.css						("paddingRight")),
				capHeight = cap.outerHeight() - parseInt(cap.css("paddingTop")) + parseInt						(cap.css("paddingBottom"));
				
			cap.css({
				width: capWidth,
				top: (o.location === "top") ? el.offset().top : el.offset().top + el.height() - 						capHeight,
				left: el.offset().left,
				display: "block"
			});
			

/*
We call the _trigger() method of the plugin instance (which we stored in the variable self) and pass the method three arguments; the first is the name of the event, the second is for the event object (we don’t need to use this in our sample plugin, hence the null value) and the third is a reference to the caption element. The widget factory will automatically pass the event object (if supplied) and the data we pass in the third parameter to a callback function that uses the added event.
*/

			self._trigger("added", null, cap);
			


			$(window).resize(function(){
				cap.css({
					top: (o.location === "top") ? el.offset().top : el.offset().top + 										el.height() - capHeight,
					left: el.offset().left
				});
			});
		},
				
		destroy: function() {			
			this.element.next().remove();
			
			$(window).unbind("resize");
		},
		
		_setOption: function(option, value) {
			$.Widget.prototype._setOption.apply( this, arguments );
			
			var el = this.element,
				cap = el.next(),
				capHeight = cap.outerHeight() - parseInt(cap.css("paddingTop")) + parseInt					(cap.css("paddingBottom"));
			
			switch (option) {
				case "location":
					(value === "top") ? cap.css("top", el.offset().top) : cap.css("top", 						el.offset().top + el.height() - capHeight);
					break;
				case "color":
					el.next().css("color", value);
					break;
				case "backgroundColor":
					el.next().css("backgroundColor", value);
					break;
			}
		}
	});
})(jQuery);