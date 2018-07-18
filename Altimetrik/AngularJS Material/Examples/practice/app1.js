app = angular.module('myApp',[]);
angular.copy();
app.controller('pOneController', function ($scope) {
  $scope.friends = [{
    name: 'Andrew'        
  }, {
    name: 'Will'
  }, {
    name: 'Mark'
  }, {
    name: 'Alice'
  }, {
    name: 'Todd'
  }];
});

app.filter('startsWithA', function () {
  return function (items) {
	  items = [{
    name: 'Andrew'        
  }, {
    name: 'Will'
  }, {
    name: 'Mark'
  }, {
    name: 'Alice'
  }, {
    name: 'Todd'
  }]
    var filtered = [];
	  
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
		 
      if (/a/i.test(item.name.substring(0, 1))) {
        filtered.push(item);
		 
      }
    }
    return filtered;
  };
});

