'use strict';
var angular = require('angular');

var loginModule = angular.module('loginModuleController', ["ngRoute"]);

	loginModule.config(function($routeProvider){
		
		$routeProvider

			.when('/login', {
	                templateUrl : 'templates/loginPage.html',
	                controller  : 'loginModuleController'
	            });
	});