app = angular.module('app', []);

app.controller('MainCtrl', function($scope,$timeout) {
	
  	 //setTimeout is a JavaScript function and operates outside Angular context
	 
     setTimeout(function () {
        $scope.$apply(function () {
            $scope.city = "Hong Kong";
        });
		
		/* the following statement is outside the apply()
		Angular does not know about the property change and does not update 
		Placing the following statement in the apply() block will do the needful
		*/
		
		$scope.favCity = "It is one of my favourite cities!"
    }, 2000);
  
});



