var myApp = angular.module('app', ['ui.bootstrap']);

myApp.controller("progressController", function($scope){
	$scope.value = Math.round(Math.random() * 100);
	
	if($scope.value < 50)
		$scope.type="success";
	if(($scope.value > 50) && ($scope.value < 70))
		$scope.type="warning";
	if($scope.value > 70)
		$scope.type ="danger";
	
});

	
	
