var myApp = angular.module('app', ['ui.bootstrap']);

myApp.controller("alertController", function($scope){
	$scope.alertMsgs =[
	{type:'success', msg:'Email-id provided is valid'},
	{type:'danger', msg:'Phone number provided is incorrect'}
	];
	
	$scope.closeAlert = function(index){
		$scope.alertMsgs.splice(index,1);
	};
	
	$scope.addAlert = function(){
		$scope.alertMsgs.push({type:'danger', msg:'Invalid Zip'});
	};
});

	
	
	