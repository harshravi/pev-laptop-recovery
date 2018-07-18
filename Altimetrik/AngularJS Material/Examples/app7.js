var myApp = angular.module("myApp",[]);
myApp.controller("filterController",function($scope){
 });
myApp.filter("toFahrenheit",function(){
		return function(input)
		{
			if(input)
				return ((9/5)*(input)+32);
		}
  });