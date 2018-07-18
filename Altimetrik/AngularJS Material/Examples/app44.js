var myApp = angular.module('app', ['ui.bootstrap']);

myApp.controller("buttonController", function($scope){
	$scope.togModel = "0"
	
	$scope.chkModel = {
		left:true,
		center:false,
		right:false
	};
});

	
	
	