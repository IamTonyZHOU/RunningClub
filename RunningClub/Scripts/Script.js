var clubApp = angular.module('clubApp', ['ngRoute', 'ngFileUpload']);

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

/*
clubApp.controller('trackController', function ($scope) {
    $scope.message = 'Look! I am an track page.';
});
*/

clubApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});


//var app = angular.module('fileUpload', ['ngFileUpload']);
clubApp.controller('trackController', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.message = 'Look! I am an track page.';
    $scope.traceItem = {
        distance: '',
        runDate: new Date(2013, 9, 22)
    };
    $scope.uploadFiles = function (file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: '/upload/upload',
                data: { file: file }
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 *
                                         evt.loaded / evt.total));
            });
        }
    }
}]);