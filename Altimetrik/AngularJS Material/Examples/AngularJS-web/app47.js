var myApp = angular.module('app', ['ngTouch']);

myApp.controller("touchController", function($scope){
	$scope.contact = {};

	$scope.showMsg = function(){
		alert("Hello");
	}
	$scope.showDetails = function(){
		$scope.contact.details = "120, Coles Ave, CO 812312";
	}
	$scope.showNumber = function(){
		$scope.contact.details = "+1 101 12345678";
	}
});

	
	
	