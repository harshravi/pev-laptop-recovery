var myApp = angular.module("myApp",[]);

myApp.constant("userFirstname","Lakshman");
myApp.constant("userLastname","M N");


myApp.controller("inputController", function($scope, userFirstname, userLastname){

	$scope.Firstname = userFirstname;
	$scope.Lastname = userLastname;

});

myApp.controller("displayController", function($scope, userFirstname, userLastname){

	$scope.Firstname = userFirstname;
	$scope.Lastname = userLastname;
	
});












  



