'use strict';

angular
    .module('app')
    .factory('RestangularBaseService', require('./restangularbase.service'));

angular
    .module('app')
    .factory('RequestRestApi', require('./requestRestApi.service'));
