var myApp = angular.module('app', ['ui.event','ui.keypress']);

myApp.controller("imgController", function($scope){
	$scope.showImg = function(){
		$scope.shouldshowImage = !$scope.shouldshowImage;
	}
	$scope.keypressCallback = function($event){
		alert("Okay");
	}
});

	
	
	