var myApp = angular.module("myApp",[]);

/***uncomment the following statements to inject custom values***/

myApp.value("greeting","Hello");
myApp.value("company", Acme Corp");

myApp.controller("countryController",function($scope){
  $scope.location = {country : 'India'};
});

//the built-in $timeout service is injected into the function dynamically.

//$timeout(fn,delay)

myApp.controller("stateController", function($scope,$timeout,greeting){
	$scope.location.state="...";
	$timeout(function(){
	alert(greeting);
	$scope.location.state = 'Karnataka';
	}, 3000)
});
myApp.controller("cityController", function($scope, $timeout){
	$scope.location.city="...";
	$timeout(function(){
	$scope.location.city = 'Bangalore';
	}, 4000)
});


