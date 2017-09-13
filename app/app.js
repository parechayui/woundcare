angular.module('woundCare',  ['ui.router','ngAnimate','ngMaterial', 'ngSanitize', 'ui.bootstrap','restangular','ui.grid','ui.grid.pagination','ui.grid.selection']);

require('./directives');
require('./services');
require('./controllers');
require('./app.route.config');
require('./restEndpoint');
require('./../js/libraryjs/ui-grid.min');
require('./../js/libraryjs/angular-aria.min.js');
require('./../js/libraryjs/angular-material.min.js');