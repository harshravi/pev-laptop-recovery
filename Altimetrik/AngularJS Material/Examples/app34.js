var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){

	$scope.counter=0;
	$scope.$on("myEvent",function(evt,args){
		alert(evt.name);
		//evt.stopPropagation();
		$scope.counter++;
	});

});















  



