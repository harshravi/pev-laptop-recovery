var myApp = angular.module("myApp",[]);
myApp.controller("filterController",function($scope){
  $scope.companies = new Array('Apple','Bluestar','Cisco','Capgemini','Google');
  var person1 = new Object();
  person1.name = "Ravi";
  person1.email = "ravi@acme.com";
  person1.city = "Bangalore";
  
  var person2 = new Object();
  person2.name = "Smith";
  person2.email = "smith@acme.com";
  person2.city = "Delhi";
  
  var person3 = new Object();
  person3.name = "Amit";
  person3.email = "amit@abc.com";
  person3.city = "Bangalore";
  
  var person4 = new Object();
  person4.name = "Bob";
  person4.email = "bob@comp.com";
  person4.city = "Delhi";
  
  $scope.people = new Array(person1,person2,person3,person4);
  
  $scope.isLongerThanSix = function(str){
	return str.length > 6;
  }
  
  });



