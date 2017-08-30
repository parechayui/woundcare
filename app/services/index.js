'use strict';

angular
    .module('woundCare')
    .factory('RestangularBaseService', require('./restangularbase.service'));

angular
    .module('woundCare')
    .factory('RequestRestApi', require('./requestRestApi.service'));

angular
    .module('woundCare')
    .factory('CommonService', require('./commonService.service'));