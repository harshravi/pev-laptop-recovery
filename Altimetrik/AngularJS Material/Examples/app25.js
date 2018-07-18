var myApp = angular.module("myApp",[]);


myApp.controller("inputController", function($scope, userRepository){

	$scope.user = userRepository;


});

myApp.controller("displayController", function($scope, userRepository){

	$scope.user = userRepository;
	
});



myApp.factory("userRepository", function(){

	return {
	
		Firstname: "", Lastname : "", DOB : ""

	}
});








  



