var myApp = angular.module("myApp",[]);

myApp.controller("formController", function($scope){
	$scope.fields = [
		{placeholder : 'Username', isRequired : true},
		{placeholder : 'Password', isRequired : true},
		{placeholder : 'Email (optional)', isRequired : false}
		];
	$scope.submitForm = function()
	{
		alert("Form will be submitted");
	}
});


  



