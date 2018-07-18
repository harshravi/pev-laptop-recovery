var myApp = angular.module("myApp",[]);

myApp.controller("evalNumber", function($scope){

$scope.myNumber = 0;

$scope.isEven = function(value)
{
	if(value % 2 == 0)
		return true;
	else
		return false;
}

});

  



