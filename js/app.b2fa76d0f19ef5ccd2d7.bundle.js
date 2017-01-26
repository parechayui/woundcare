webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('app',  ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap','restangular']);

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(6);
	__webpack_require__(21);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular
	    .module('app')
	    .directive('myContract', __webpack_require__(2));

/***/ },
/* 2 */
/***/ function(module, exports) {

	function MyContract(){
	      return {
	        restrict: 'AE',
	        transclude: true,
	        templateUrl: 'app/templates/contract.html'
	      };
	    };

	module.exports = MyContract;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular
	    .module('app')
	    .factory('RestangularBaseService', __webpack_require__(4));

	angular
	    .module('app')
	    .factory('RequestRestApi', __webpack_require__(5));


/***/ },
/* 4 */
/***/ function(module, exports) {

	
	    'use strict';

	    /* RestAngular factory Starts  */


	    RestangularBaseService.$inject = ['Restangular'];

	    function RestangularBaseService(Restangular){

	        //http://localhost:3000
	        //http://sldisappuat.olcc.lan/api/

	        var newBaseUrl = "http://sldisappuat.olcc.lan/api/";

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



/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

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



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular
	    .module('app')
	    .controller('mainappController', __webpack_require__(7));

	angular
	    .module('app')
	    .controller('loginController', __webpack_require__(8));

	angular
	    .module('app')
	    .controller('registerController', __webpack_require__(9));

	angular
	    .module('app')
	    .controller('mainController', __webpack_require__(10));

	angular
	    .module('app')
	    .controller('homeController', __webpack_require__(11));

	angular
	    .module('app')
	    .controller('myAccountController', __webpack_require__(12));

	angular
	    .module('app')
	    .controller('accountController', __webpack_require__(13));

	angular
	    .module('app')
	    .controller('paymentController', __webpack_require__(14));


	angular
	    .module('app')
	    .controller('boardController', __webpack_require__(15));

	angular
	    .module('app')
	    .controller('reserveController', __webpack_require__(16));

	angular
	    .module('app')
	    .controller('reserveweekController', __webpack_require__(17));

	angular
	    .module('app')
	    .controller('exchangeController', __webpack_require__(18));

	angular
	    .module('app')
	    .controller('updateInfoController', __webpack_require__(19));

	angular
	    .module('app')
	    .controller('updatePwdController', __webpack_require__(20));




/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 10/27/2016.
	 */

	'use strict';

	MainAppController.$inject = ['$state'];

	function MainAppController($state) {
	    var vm=this;
	    vm.state=$state.current.name;


	}

	module.exports = MainAppController;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 10/26/2016.
	 */

	'use strict';

	LoginController.$inject = ['$state'];

	function LoginController($state) {
	    var vm=this;
	    vm.state=$state;
	    vm.myname="login";

	}

	module.exports = LoginController;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 10/26/2016.
	 */

	'use strict';

	RegisterController.$inject = ['$state'];

	function RegisterController($state) {
	    var vm=this;
	    vm.state=$state;


	}

	module.exports = RegisterController;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 10/26/2016.
	 */

	'use strict';

	 MainController.$inject = [];

	function MainController() {
	    var vm=this;


	}

	module.exports = MainController;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	 HomeController.$inject = ['RequestRestApi'];

	function HomeController(RequestRestApi) {
	    var vm = this;


	    //     vm.ListInfoCallback = function (results) {
	    //         vm.resortList  = results.data['sl_home'];
	    //     };
	    //
	    // RequestRestApi.ListInfo(vm.ListInfoCallback);
	}

	module.exports = HomeController;

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 10/13/2016.
	 */
	'use strict';

	// MyAccountController.$inject = ['GithubStatusService'];

	function MyAccountController() {
	    var vm=this;




	}

	module.exports = MyAccountController;


/***/ },
/* 13 */
/***/ function(module, exports) {

	
	'use strict';

	AccountController.$inject = ['RequestRestApi', 'RestangularBaseService'];

	function AccountController(RequestRestApi, RestangularBaseService) {
	    var vm = this;

	    // vm.AccountInfoCallback = function (results) {
	    //     vm.accountData = results.data['account'];
	    // };
	    //
	    // RequestRestApi.AccountInfo(vm.AccountInfoCallback);
	}

	module.exports = AccountController;


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';



	function PaymentController() {
	    var vm=this;

	}

	module.exports = PaymentController;

/***/ },
/* 15 */
/***/ function(module, exports) {

	
	'use strict';

	BoardController.$inject = ['RequestRestApi'];

	function BoardController(RequestRestApi) {
	    var vm = this;



	}

	module.exports = BoardController;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 10/13/2016.
	 */
	'use strict';

	ReserveController.$inject = ['RequestRestApi'];

	function ReserveController(RequestRestApi) {
	    var vm = this;

	    // vm.ResortListInfoCallback = function (results) {
	    //     vm.resortList  = results.data['sl_home'];
	    // };

	    // RequestRestApi.ResortListInfo(vm.ResortListInfoCallback);

	}

	module.exports = ReserveController;



/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 10/13/2016.
	 */
	'use strict';

	function ReserveWeekController() {
	    var vm = this;

	    vm.nameList=[   ];

	    vm.authGuest=[];


	    vm.addGuest=function(){
	        vm.nameList.push({});

	    };

	    vm.deleteGuest=function(index){
	        vm.nameList.splice(index,1);
	    };

	    vm.addAuthFirstGuest=function(){
	        if(vm.authGuest.length<1){
	            vm.authGuest.push({
	                'firstname':"",
	                'lastname':"",
	                'staddress':"",
	                'address':"",
	                'pnumber':"",
	                'email':""
	            });
	        }
	    }

	    vm.addAuthGuest=function(){
	        vm.authGuest.push({
	            'firstname':"",
	            'lastname':"",
	            'staddress':"",
	            'address':"",
	            'pnumber':"",
	            'email':""
	        });

	    };

	    vm.deleteAuthGuest=function(index){
	        vm.authGuest.splice(index,1);
	    };


	}

	module.exports = ReserveWeekController;



/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 12/22/2016.
	 */
	'use strict';

	module.exports = ExchangeController;

	function ExchangeController() {



	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 1/5/2017.
	 */


	'use strict';

	UpdateInfoController.$inject = [];

	function UpdateInfoController() {

	    var vm = this;
	    vm.editInfo = true;

	    vm.updateContact = function () {
	        if (vm.editInfo === true) {
	            vm.editInfo = false;
	        } else {
	            vm.editInfo = true;
	        }
	    }


	}

	module.exports = UpdateInfoController;



/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Created by pmathode on 1/5/2017.
	 */


	'use strict';

	UpdatePwdController.$inject = [];

	function UpdatePwdController() {
	    var vm = this;
	    vm.editInfo = true;
	    vm.updateContact = function () {
	        if (vm.editInfo === true) {
	            vm.editInfo = false;
	        } else {
	            vm.editInfo = true;
	        }
	    }
	}

	module.exports = UpdatePwdController;



/***/ },
/* 21 */
/***/ function(module, exports) {

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


/***/ }
]);