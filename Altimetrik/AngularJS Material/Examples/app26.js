var myApp = angular.module("myApp",[]);


myApp.controller("inputController", function($scope, userRepository){

	$scope.user = userRepository.person();


});

myApp.controller("displayController", function($scope, userRepository){

	$scope.user = userRepository.person();
	
});



myApp.service("userRepository", function(){
  this.person = function(){
		this.person.Firstname="";
		this.person.Lastname="";
		this.person.DOB="";
		return(this.person)
	}
});
