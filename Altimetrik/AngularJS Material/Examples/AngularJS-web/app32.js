var myApp = angular.module("myApp",['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl : 'home.asp',
			controller : 'homeController'
			})
		.when('/contact', {
			templateUrl : 'contact.asp',
			controller : 'contactController'
			})
		.when('/myaccount', {
			templateUrl : 'login.asp',
			controller : 'myAccountController'
			})
		.otherwise({
			redirectTo : '/'
			});
		}]);
		
myApp.controller("homeController", function($scope){
	$scope.message = "Welcome to the home page";
});

myApp.controller("contactController",function($scope){
	$scope.message = "You can reach us at Email : info@acme.com  Web : http://www.acme.com"
});

myApp.controller("myAccountController", function($scope){
	$scope.message = "Login please"
});











  



