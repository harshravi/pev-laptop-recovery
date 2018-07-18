'use strict'

module.exports = function($http, $log) {
	return {
		validateCredentials: function(loginCredentials, successCallback) {
			$http({method:'POST', url:'https://192.168.72.5:8443/onboarding-service/rest/login', data: loginCredentials}).
				success(function(data, status, header, config){
					successCallback(data);
					}).
				error(function(data, status, header, config){
					$log.warn(data, status, header, config)
					});
				}
		}
	}