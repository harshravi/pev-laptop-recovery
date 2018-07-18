var myApp = angular.module("myApp",[]);
myApp.controller("countryController",function($scope){
  $scope.location = {country : 'India'};
});

/*Dependency injection approach used in the following statement is useful in
the context of minification */

myApp.controller("stateController", ['$scope','$filter', function($scope, $filter){
	$scope.location.state = $filter('limitTo')('Karnataka',3);
}]);
myApp.controller("cityController", function($scope){
	$scope.location.city = 'Bangalore';
});


