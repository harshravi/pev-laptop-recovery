var myApp = angular.module("myApp",[]);

myApp.controller("directiveController", function($scope){
	$scope.message = "This is in a directive";
});

myApp.controller("directiveController1", function($scope){
	$scope.newMessage = "This is from the new scope";
});

  



