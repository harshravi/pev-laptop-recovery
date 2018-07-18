'use strict';

module.exports = function($scope,$http){

		
	$http.get('./tableData.json',function(){
	
			}).success(function(data){
				$scope.userDetails = data;
				var totalData = $scope.userDetails
				$scope.viewby = 10;
				$scope.totalItems = totalData.length;
				$scope.currentPage = 4;
				$scope.itemsPerPage = $scope.viewby;
				$scope.maxSize = 5; //Number of pager buttons to show

				$scope.setPage = function (pageNo) {
					$scope.currentPage = pageNo;
				};

				$scope.pageChanged = function() {
					console.log('Page changed to: ' + $scope.currentPage);
				};

				$scope.setItemsPerPage = function(num) {
				  $scope.itemsPerPage = num;
				  $scope.currentPage = 1; //reset to first paghe
				}				
				console.log($scope.userDetails)
		
			}).error(function(err){
				
		
			});
}