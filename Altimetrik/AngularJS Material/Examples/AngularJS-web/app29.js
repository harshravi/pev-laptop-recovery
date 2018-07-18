var myApp = angular.module("myApp",[]);

myApp.controller("inputController", function($scope, $http){

	$scope.data = {};
	
	$scope.data.fnClick = function(){

	var resPromise = $http.get("demofile1.asp");
		
		resPromise.success(function(data, status, headers, config){
			
			$scope.data.serverMsg = "The status is '" + status + "' & the data is '" + data + "'";
		});
		
		resPromise.error(function(data, status, headers, config){
			alert("AJAX call failed");
		});
	
	}

});














  



