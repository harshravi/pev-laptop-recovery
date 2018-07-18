var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){
	$scope.myForm = {};
	$scope.myForm.name = "Lakshman";
	$scope.myForm.pin = "000000";	
	$scope.submitForm = function(form){
		if(form.$valid) {
			alert("The form will be submitted");
			form.$setinValid();
		}
	}
});


  



