// create the module and name it scotchApp
var nikoApp = angular.module('nikoApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

nikoApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })

        .when('/people', {
            templateUrl: 'views/people.html',
            controller: 'PeopleController'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .otherwise({redirectTo: '/'});
});
