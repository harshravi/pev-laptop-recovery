var myApp = angular.module('app', ['ui.bootstrap']);

myApp.controller("carouselController", function($scope){
	$scope.defInterval = 6000;
	
	 $scope.mySlides = [
	 {image : 'carousel1.jpg', text : 'Carousel One'},
	 {image : 'carousel2.jpg', text : 'Carousel two'},
	 {image : 'carousel3.jpg', text : 'Carousel three'},
	 {image : 'carousel4.jpg', text : 'Carousel four'},
	 {image : 'carousel5.jpg', text : 'Carousel five'}
	 ]
});

	
	
	