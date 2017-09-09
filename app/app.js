angular.module('woundCare',  ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap','restangular','ui.grid','ui.grid.pagination']);

require('./directives');
require('./services');
require('./controllers');
require('./app.route.config');
require('./restEndpoint');
require('./../js/libraryjs/ui-grid.min');