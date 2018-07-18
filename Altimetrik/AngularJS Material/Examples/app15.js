var myApp = angular.module("myApp",[]);
myApp.controller("companiesController",function($scope)
{
  $scope.companies = [
		{name : "Apple", established : "1976" },
		{name : "Biocon", established : "1978" },
		{name : "Cisco", established : "1984" },
		{name : "Dell", established : "1984" },
		{name : "Fujitsu", established : "1935"},
		{name : "Google", established : "1998"},
		{name : "HTC", established : "1997"},
		{name : "Nokia", established : "1871"},
		{name : "Panasonic", established : "1918"}
    ];
})

  



