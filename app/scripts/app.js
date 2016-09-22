'use strict';

/**
 * @ngdoc overview
 * @name templatureApp
 * @description
 * # templature
 *
 * Main module of the application.
 */

angular.module('templatureApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'templatureApp.templates'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/templates', {
        templateUrl: 'views/templates.html',
        controller: 'TemplatesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
