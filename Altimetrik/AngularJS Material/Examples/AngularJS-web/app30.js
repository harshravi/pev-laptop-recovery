var myApp = angular.module("myApp",[]);

myApp.controller("inputController", function($scope, $http){

	$scope.data = {};
	
	$scope.data.fnClick = function(){

	var resPromise = $http({
						method : "GET",
						url : "Demofile1.asp",
						timeout : "5000"
						})
		
		resPromise.success(function(data, status, headers, config){
			$scope.data.serverMsg = data;
		});
		
		resPromise.error(function(data, status, headers, config){
			alert("AJAX call failed");
		});
	
	}

});














  



