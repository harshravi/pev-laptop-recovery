var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){
				$scope.myForm = { };
                $scope.myForm.firstName = "Lakshman";
                $scope.myForm.lastName  = "M N";
				$scope.myForm.wantNewsletter = "yes";
				$scope.myForm.car="toyota";
				$scope.myForm.firstCar="honda";
				
				$scope.myForm.carOptions = [
					{ id : "nissan", name: "Nissan" },
					{ id : "toyota", name: "Toyota" },
					{ id : "honda"  , name: "Honda" }
				];


});

  



