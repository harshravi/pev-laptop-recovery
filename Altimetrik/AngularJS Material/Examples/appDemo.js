var myApp = angular.module("myApp",[]);
myApp.controller("directiveController",function($scope){
	$scope.name = "Lakshman"
 });
 
myApp.directive("dateTime",function(){
		return {
			restrict : 'EAC',
			template : getDateTime,

		}
	});

	function getDateTime()
	{
		var dt = new Date();
		return('<span>{{name}}</span>');
	}

  



