var myApp = angular.module("myApp",[])
.run(function($rootScope)
{
	$rootScope.toplevelProperty = "from the root";
})
.controller("parentController",function($scope)
{
	$scope.parentlevelProperty = "from the parent";
})
.controller("childController",function($scope)
{
	$scope.childlevelProperty = "from the child, " + $scope.parentlevelProperty + ", " + $scope.toplevelProperty;
});


  



