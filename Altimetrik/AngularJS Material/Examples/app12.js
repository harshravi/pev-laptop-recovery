var myApp = angular.module("myApp",[]);
myApp.run(function($rootScope, $timeout){
	$timeout(function(){
		$rootScope.searchProvider = "http://www.bing.com";
		$rootScope.imgUrl = "sunshine.jpg";
	},3000);
});
myApp.controller("directiveController", function($scope){

});


  



