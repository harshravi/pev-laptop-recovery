var myApp = angular.module("myApp",[]);

myApp.controller("metricController",function($scope){
  $scope.fah = 0;
  
  $scope.convert = function(){
     $scope.fah = (9/5)*($scope.centiVal)+32;
  };

});




