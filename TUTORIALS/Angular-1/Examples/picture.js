angular.module("app.directives.picture",[])
	.directive("myPicture",function(){
		return {
			restrict : 'A',
			replace : true,
			
			scope : {
				myUrl : '@',
				myCaption : '@',
				myWidth : '@pictureWidth',
				myHeight : '@pictureHeight'
			},
			template : '<img src = "{{myUrl}}" alt = "{{myCaption}}" title = "{{rootProperty}}" height="{{myHeight}}" width="{{myWidth}}">'
		}
	});
