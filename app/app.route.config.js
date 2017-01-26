/**
 * Created by pmathode on 10/13/2016.
 */

(function () {
    'use strict';
    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('', '/login/signin')
            .when('/', '/login/signin')
            .otherwise(function ($injector) {
                $injector.get('$state').go('404', {}, {location: false});
            });

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('login', {
                url: '/login',
                templateUrl: 'app/templates/login.html',
                controller: 'loginController as loginCtrl'
            })
            .state('login.signin', {
                url: '/signin',
                templateUrl: 'app/templates/signin.html'

            })
            .state('login.register', {
                url: '/register',
                templateUrl: 'app/templates/register.html',
                controller: 'registerController as regCtrl'
            })

            .state('main', {
                url: '/main',
                templateUrl: 'app/templates/main.html',
                controller: 'mainController as mainCtrl'
            })
            .state('main.home', {
                url: '/home',
                templateUrl: 'app/templates/home.html',
                controller: 'homeController as home'
            })
            .state('main.account', {
                url: '/account',
                templateUrl: 'app/templates/account.html',
                controller: 'accountController as account'
            })
            .state('main.referal', {
                url: '/referal',
                templateUrl: 'app/templates/referal.html',
                controller: 'referalController as referal'
            })
            .state('main.payment', {
                url: '/payment',
                templateUrl: 'app/templates/payment.html',
                controller: 'paymentController as pay'
            })

            .state('main.myaccount', {
                url: '/myaccount',
                templateUrl: 'app/templates/myaccount.html',
                controller: 'myAccountController as myaccount'
            })

            .state('main.reserve', {
                url: '/reserve',
                templateUrl: 'app/templates/reserve.html',
                controller: 'reserveController as reserve'
            })

            .state('main.resweek', {
                url: '/resweek',
                templateUrl: 'app/templates/reserveweek.html',
                controller:'reserveweekController as reserveweek'
            })
            .state('main.exchange', {
                url: '/exchange',
                templateUrl: 'app/templates/exchange.html',
                controller:'exchangeController as silver'
            })
            .state('main.board', {
                url: '/board',
                templateUrl: 'app/templates/board.html',
                controller: 'boardController as board'
            })
            .state('main.updateinfo', {
                url: '/updateinfo',
                templateUrl: 'app/templates/updatecontactinfo.html',
                controller: 'updateInfoController as uinfo'
            })
            .state('main.updatepwd', {
            url: '/updatepwd',
            templateUrl: 'app/templates/updatepwd.html',
            controller: 'updatePwdController as upwd'
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
