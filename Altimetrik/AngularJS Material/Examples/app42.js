var myApp = angular.module('app', ['ui.format']);

myApp.controller("formatController", function($scope){
	$scope.tokens = ['ground', 'mezzanine', 'first'];
	
	$scope.employment = {
		employer : 'Apple',
		location : 'Cupertino'
		}
});

	
	
	