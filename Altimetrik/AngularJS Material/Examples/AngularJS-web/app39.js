angular.module('app', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var home = {
                name: 'home',
                url: '/',
                templateUrl: 'content.html'
            },
            member1 = {
                name: 'member1',
                url: '/member1',
                parent: home,
                templateUrl: 'member1.html'
            },
            member2 = {
                name: 'member2',
                url: '/member2',
                parent: home,
                templateUrl: 'member2.html'
            },
            member3 = {
                name: 'member3',
                url: '/member3',
                parent: home,
                templateUrl: 'member3.html'
            };
    
        $stateProvider.state(home);
        $stateProvider.state(member1);
        $stateProvider.state(member2);
        $stateProvider.state(member3);
    }])
//transitionTo means i want to start from here
    .run(['$state', function ($state) {
       $state.transitionTo('home'); 
    }])

    .controller('sidebarController', function ($scope, $state) {

    $scope.team = ['member1', 'member2', 'member3'];

    $scope.getPage = function (page) {
        $state.transitionTo(page);
    };
});
	
	
	