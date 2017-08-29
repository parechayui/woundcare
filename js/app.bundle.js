webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

angular.module('woundCare',  ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap','restangular']);

__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(6);

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

function MyContract(){
      return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'app/templates/contract.html'
      };
    };

module.exports = MyContract;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* RestAngular factory Starts  */


RequestRestApi.$inject = ['RestangularBaseService'];

function RequestRestApi(RestangularBaseService) {

    var AccountInfo = function (AccountInfoCallback) {
        RestangularBaseService.getdata("db", AccountInfoCallback);
    };

    var ResortListInfo= function (ResortListInfoCallback) {
        RestangularBaseService.getdata("db", ResortListInfoCallback);
    };

    var DestinationListInfo= function (url,DestinationListInfoCallback) {
        RestangularBaseService.getdata(url, DestinationListInfo);
    };

    return {
        ResortListInfo:ResortListInfo,
        AccountInfo: AccountInfo,
        DestinationListInfo:DestinationListInfo


    };
};
/* RestAngular Factory Ends  */
module.exports = RequestRestApi;



/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

    

    /* RestAngular factory Starts  */


    RestangularBaseService.$inject = ['Restangular'];

    function RestangularBaseService(Restangular){


        var newBaseUrl = "http://localhost:3000";

        Restangular.setBaseUrl(newBaseUrl);
        Restangular.setFullResponse(true);
        Restangular.setDefaultHttpFields({cache: false});
        // Restangular.setDefaultHeaders();
        Restangular.setDefaultHeaders({'Content-Type': 'application/json; charset=UTF-8'});


        /* RestAngular setErrorInterceptor Starts  */

        Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
            //console.log("Server Response header for ErrorInterceptor::",response );
            return true;
        });

        /* RestAngular setErrorInterceptor Ends  */


        /* RestAngular addResponseInterceptor Starts  */

        Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            //console.log("Server Response header for ResponseInterceptor::",response);
            return data;
        });

        /* RestAngular addResponseInterceptor Ends  */

        this.getdata = function(url, callback) {
            Restangular.one(url).get().then(function(results) {
                callback(results);
            },function(error){
                callback(error);
            });
        };
        this.postdata = function(url,param,callback){
            Restangular.all(url).post(param).then(function(postresult){
                callback(postresult);
            },function(error){
                callback(error);
            });
        };
        this.deletedata = function(url,callback){
            Restangular.all(url).remove().then(function(result){
                callback(result);
            },function(error){
                callback(error);
            });
        };

        return{
            getdata: this.getdata,
            postdata: this.postdata,
            deletedata: this.deletedata

        };

    };
    /* RestAngular Factory Ends  */
    module.exports = RestangularBaseService;



/***/ }),

/***/ 3:
/***/ (function(module, exports) {


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


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular
    .module('woundCare')
    .controller('mainController', __webpack_require__(44));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



MainController.$inject = ['$state'];

function MainController($state) {
    var vm=this;
    vm.state=$state.current.name;


}

module.exports = MainController;


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular
    .module('woundCare')
    .directive('myContract', __webpack_require__(16));

/***/ }),

/***/ 6:
/***/ (function(module, exports) {



angular
    .module('woundCare')
    .constant('RestEndPoint', {
        NOR:'Reservation/NormalReservation'

    });




/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular
    .module('woundCare')
    .factory('RestangularBaseService', __webpack_require__(18));

angular
    .module('woundCare')
    .factory('RequestRestApi', __webpack_require__(17));


/***/ })

},[15]);