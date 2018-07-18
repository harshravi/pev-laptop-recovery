var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){

	$scope.priceA = 100;
	$scope.priceB = 150;
	
	
	$scope.chkVal = function(value){
		$scope.totalPrice = parseFloat($scope.priceA) + parseFloat($scope.priceB);
		if($scope.totalPrice > 500)
			$scope.discount = true;
		else
			$scope.discount=false;
	};
});


  



