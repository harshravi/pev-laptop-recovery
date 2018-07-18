angular.module("app.directives.picture",[])
	.directive("myPicture",function(){
		return {
			restrict : 'A',
			replace : true,
			//uncomment the following statement and comment the next property to inherit the parent scope
			//scope : true , 
			scope : {
				myUrl : '@',
				'imgCaption' : '&myCaption',
				myWidth : '@pictureWidth',
				myHeight : '@pictureHeight'
			},
			template : '<img src = "{{myUrl}}" alt = "{{imgCaption}}" title = "{{rootProperty}}" height="{{myHeight}}" width="{{myWidth}}">'
		}
	});
