var myFirstApp = angular.module("myFirstApp",[]);
myFirstApp.run(function($rootScope){
    $rootScope.city = 'London';
});