'use strict';

module.exports = function($scope,$http){
		$http.get('./navdetails.json',function(){
	
			}).success(function(data){
				
				$scope.navDetails = data;
		
			}).error(function(err){
				
		
			});
};