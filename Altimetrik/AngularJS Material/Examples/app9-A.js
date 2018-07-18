var app = angular.module("myApp",[]);

app.controller("Ctrl1",function($scope){
    $scope.name = "Lakshman";
    $scope.reverseName = function(){
        $scope.name = $scope.name.split('').reverse().join('');
    };
});
app.directive("myDirective", function(){
    return {
        restrict: "EA",
        scope: false,
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />"
    };
});
app.directive("mySecondDirective", function(){
    return {
        restrict: "EA",
        scope: true,
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />"
    };
});
app.directive("myThirdDirective", function(){
    return {
        restrict: "EA",
        scope: {},
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name'/>"
    };
});