'use strict';

module.exports = function($scope,$http){
	$scope.totalSession = "67",
	$scope.attendees = "437",
	$scope.sync = "42",
		
		
	$http.get('./tableData.json',function(){
	
			}).success(function(data){
				$scope.userDetails = data;
				console.log($scope.userDetails)
		
			}).error(function(err){
				
		
			});
}