var clubApp = angular.module('clubApp', ['ngRoute']);

// configure our routes
clubApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/track', {
            templateUrl: 'pages/track.html',
            controller: 'trackController'
        })

       
});

// create the controller and inject Angular's $scope
clubApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

clubApp.controller('trackController', function ($scope) {
    $scope.message = 'Look! I am an track page.';
});

clubApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});


