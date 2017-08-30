(function () {
    'use strict';
    angular.module('woundCare').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('', '/main/patientlist')
            .when('/main', '/main/patientlist')
            .otherwise(function ($injector) {
                $injector.get('$state').go('404', {}, {location: false});
            });

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('main', {
                url: '/main',
                templateUrl: 'app/templates/main.html',
                controller: 'mainController as mainCtrl',
                abstract: true
            })
            .state('main.patientlist', {
                url: '/patientlist',
                templateUrl: 'app/templates/patientlist.html',
                controller: 'patientListController as listCtrl'
            })
            .state('main.newpatient', {
                url: '/newpatient',
                templateUrl: 'app/templates/newpatient.html',
                controller: 'newPatientController as newPatientCtrl'
            })
        .state('main.woundcare', {
                url: '/woundcare',
                templateUrl: 'app/templates/woundcare.html',
                controller: 'woundCareController as woundCareCtrl'
            })
            .state('main.physicalexam', {
                url: '/physicalexam',
                templateUrl: 'app/templates/physicalexam.html',
                controller: 'physicalExamController as physicalExamCtrl'
            })
            .state('main.investigationreview', {
                url: '/investigationreview',
                templateUrl: 'app/templates/investigationreview.html',
                controller: 'investigationreviewController as investigationReviewCtrl'
            })

        ;


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
