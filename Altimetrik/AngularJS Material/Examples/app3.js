var myApp = angular.module("myApp",[]);
myApp.controller("countryController",function($scope){
  $scope.location = {country : 'India'};
});
myApp.controller("stateController", function($scope){
	$scope.location.state = 'Karnataka';
});
myApp.controller("cityController", function($scope){
	$scope.location.city = 'Bangalore';
});


