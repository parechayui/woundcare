
(function () {
    'use strict';
    angular.module('woundCare').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('', '/main')
            .otherwise(function ($injector) {
                $injector.get('$state').go('404', {}, {location: false});
            });

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================


            .state('main', {
                url: '/main',
                templateUrl: 'app/templates/main.html',
                controller: 'mainController as mainCtrl'
            });

        var user = {
            isAuthenticated: function () {
                return true;
            }
        };


        function authenticate($q, user, $state, $timeout) {
            if (user.isAuthenticated()) {
                // Resolve the promise successfully
                return $q.when()
            } else {
                // The next bit of code is asynchronously tricky.

                $timeout(function () {
                    // This code runs after the authentication promise has been rejected.
                    // Go to the log-in page
                    $state.go('login')
                })

                // Reject the authentication promise to prevent the state from loading
                return $q.reject()
            }
        }
    });
})()
