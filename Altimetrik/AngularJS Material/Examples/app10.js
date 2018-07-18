var myApp = angular.module("myApp",['app.directives.picture']);
myApp.controller("directiveController", function($scope){
	$scope.rootProperty = "This is from the root scope";
	$scope.width="100";
	$scope.height="100";
});


  



