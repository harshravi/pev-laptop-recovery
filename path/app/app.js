'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('pathApp', [ 'ngRoute','ui.bootstrap' ]);

require('./services');
require('./controllers');

app.config(function($routeProvider){
  
  $routeProvider

	  .when('/', {
	  	templateUrl : 'templates/loginPage.html',
        controller  : 'LoginController'
  	  })
	  .when('/dashboard', {
	  	templateUrl : 'templates/dashboard.html',
        controller  : 'DashboardController'
  	  });
});
