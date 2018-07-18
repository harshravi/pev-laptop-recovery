var myApp = angular.module("myApp",["ngAnimate"]);

myApp.controller('MyCtrl', function ($scope) {
    $scope.items = []
    $scope.counter = 1;
    for (; $scope.counter <= 5; $scope.counter++) {
        $scope.items.push({ label: $scope.counter });
    }
    
    $scope.addItem = function () {
        $scope.items.push({ label: $scope.counter++ });
    };
    
    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
    };
});















  



