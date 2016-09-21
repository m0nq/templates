'use strict';

/**
 * @ngdoc function
 * @name templature.controller:TemplatesCtrl
 * @description
 * # TemplatesCtrl
 * Controller of the templature
 */

angular.module('templature.templates', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/templates', {
    templateUrl: 'templates/templates.html',
    controller: 'TemplatesCtrl',
  });
}])

.controller('TemplatesCtrl', ['$scope', function ($scope) {
  console.log($scope);
}]);
