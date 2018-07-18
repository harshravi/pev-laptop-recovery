var myApp = angular.module("myApp",[]);

myApp.controller("peopleController", function($scope){
	$scope.message = "Directive Analysis";

});

function makeDirective(name){
	return function(){
		//initialization...
		console.log(name + " initialization")
	return {
		restrict:"EA",
		template:"",
		compile: function(tElement,attributes){
				//compilation...template element
				console.log( name + " compile",tElement.html());
				tElement.css("color", "#ff0000");
			return{
				//linking...instance element with scope
				pre:function(scope,iElement,attributes){
						console.log("pre - link " + name);
				},
				post:function(scope,iElement,attributes){
						console.log("post - link " + name);
						if(name=="mySecondDirective")
							iElement.css("background-color", "#AABBCC")
				}
			}
		}
	}
   }
}

myApp.directive("myDirective", makeDirective('myDirective'));
myApp.directive("mySecondDirective", makeDirective('mySecondDirective'));
myApp.directive('myThirdDirective', makeDirective('myThirdDirective'));