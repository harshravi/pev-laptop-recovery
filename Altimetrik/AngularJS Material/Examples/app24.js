var myApp = angular.module("myApp",[]);


myApp.controller("peopleController", function($scope, peopleRepository){

	$scope.people = peopleRepository.getAllPeople();
	
	$scope.addYearBorn = function(){
	$scope.people[9].yearborn = "1961";
	};

});



myApp.factory("peopleRepository", function(){
	
	var myService = {};
	var notablePeople = [
		{name : "Steve Jobs", yearborn : "1955" },
		{name : "Mark Zukerberg", yearborn : "1984" },
		{name : "Albert Einstein", yearborn : "1879" },
		{name : "Bill Gates", yearborn : "1955" },
		{name : "Narayana Murthy", yearborn : "1935"},
		{name : "Azim Premji", yearborn : "1945"},
		{name : "Narendra Modi", yearborn : "1950"},
		{name : "Sonia Gandhi", yearborn : "1946"},
		{name : "Roger Federer", yearborn : "1981"},
		{name : "Barack Obama" , yearborn : ""}
		];
	
	myService.getAllPeople = function(){
		return notablePeople;
	}
	
	return myService;
});