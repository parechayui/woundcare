webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular
    .module('woundCare')
    .controller('mainController', __webpack_require__(17));

angular
    .module('woundCare')
    .controller('patientListController', __webpack_require__(19));

angular
    .module('woundCare')
    .controller('newPatientController', __webpack_require__(18));

angular
    .module('woundCare')
    .controller('woundCareController', __webpack_require__(21));

angular
    .module('woundCare')
    .controller('physicalExamController', __webpack_require__(20));

angular
    .module('woundCare')
    .controller('investigationreviewController', __webpack_require__(16));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular
    .module('woundCare')
    .directive('myContract', __webpack_require__(22));

/***/ }),
/* 6 */
/***/ (function(module, exports) {



angular
    .module('woundCare')
    .constant('RestEndPoint', {
        NOR:'Reservation/NormalReservation'

    });




/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular
    .module('woundCare')
    .factory('RestangularBaseService', __webpack_require__(25));

angular
    .module('woundCare')
    .factory('RequestRestApi', __webpack_require__(24));

angular
    .module('woundCare')
    .factory('CommonService', __webpack_require__(23));

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('woundCare',  ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap','restangular']);

__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(6);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


InvestigationReviewController.$inject = ['$state'];

function InvestigationReviewController($state) {
    var vm = this;


    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };

 vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };




};

module.exports = InvestigationReviewController;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


MainController.$inject = ['$state'];

function MainController($state) {
    var vm = this;
    vm.createNewPatient = function () {
        $state.go('main.newpatient', {});
    };


}

module.exports = MainController;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


NewPatientController.$inject = ['$state'];

function NewPatientController($state) {
    var vm = this;


    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };

    vm.goToWoundCare = function () {
        $state.go('main.woundcare', {});
    };


}

module.exports = NewPatientController;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



PatientListController.$inject = ['$state'];

function PatientListController($state) {
    var vm=this;

    vm.createNewPatient = function () {
        $state.go('main.newpatient', {});
    };

    vm.updatePatient=function(){
        $state.go('main.newpatient', {});
    };
}

module.exports = PatientListController;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



PhysicalExamController.$inject = ['$state'];

function PhysicalExamController($state) {
    var vm=this;

    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };


    vm.goToWoundCare = function () {
        $state.go('main.woundcare', {});
    };

}

module.exports = PhysicalExamController;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



WoundCareController.$inject = ['$state'];

function WoundCareController($state) {
    var vm=this;

    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };


    vm.goToInvestigationReview = function () {
        $state.go('main.investigationreview', {});
    };

}

module.exports = WoundCareController;


/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/*Common Functions will be written here  */

CommonService.inject = ['$uibModal', 'RequestRestApi', '$rootScope', '$timeout'];

function CommonService($uibModal, RequestRestApi, $rootScope, $timeout) {


    /*For Error or Attention Message Modal"*/

    var showModal = function (detailInfo) {
        $uibModal.open({
            ariaLabelledBy: 'modal-title-bottom',
            ariaDescribedBy: 'modal-body-bottom',
            templateUrl: 'app/templates/confirmModal.html',
            size: 'lg',
            backdrop: 'static',
            controller: 'AConfirmModalController',
            resolve: {
                detailInfo: function () {
                    return detailInfo;
                }
            }
        });
    };







    return {
        showModal: showModal
    };
};

module.exports = CommonService;

/***/ }),
/* 24 */
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
/* 25 */
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



/***/ })
],[15]);