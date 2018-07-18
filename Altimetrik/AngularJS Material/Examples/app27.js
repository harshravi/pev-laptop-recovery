var myApp = angular.module("myApp",[]);

myApp.provider("userRepository", function(){
	
	this.Firstname = "",
	this.Lastname="";
	this.DOB="";
	tPerson = { };
	
	this.setName = function(name) {
		this.Firstname = name;
    },
	
    this.$get = function() {
		tPerson.Firstname = this.Firstname;
		tPerson.Lastname = this.Lastname;
		tPerson.DOB = this.DOB;
        return {
            person: function() {
                return tPerson;
            }
        }
    };

});


//configure the provider
//application-wide configuration

myApp.config(function(userRepositoryProvider){
	userRepositoryProvider.setName("Lakshman");
});

myApp.controller("inputController", function($scope, userRepository){

	$scope.user = userRepository.person();

});

myApp.controller("displayController", function($scope, userRepository){

	$scope.user = userRepository.person();
	
});