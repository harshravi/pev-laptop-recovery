'use strict';

module.exports = function($scope, loginModuleService){
    $scope.loginForm = function(){
		var loginCredentials =	{
								  "agentId": $scope.userName,
								  "password": $scope.userPass,
								  "transmissionTime": ""
								};
		loginModuleService.validateCredentials(loginCredentials, function(response){
                    $scope.statusMsg = response.ok;
                });
    }
}
