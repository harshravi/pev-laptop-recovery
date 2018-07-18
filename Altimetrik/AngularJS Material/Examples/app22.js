var myApp = angular.module("myApp",[]);

	myApp.directive("searchDirective", function(){
		return{
			
		}
	});

	myApp.directive("myDirective", function(){
		return{
			restrict:'A',
			transclude:true,	//uncomment/Comment the preceding property
			template:'<b ng-transclude>Search</b>',
			replace:true,
			
		}
	});




  



