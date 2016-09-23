'use strict';

/**
 * @ngdoc function
 * @name templature.controller:TemplatesCtrl
 * @description
 * # TemplatesCtrl
 * Controller of the templature
 */

angular.module('templatureApp.templates', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/templates', {
    templateUrl: 'templates/templates.html',
    controller: 'TemplatesCtrl',
  })
	.when('/templates/:templatesId', {
		templateUrl: 'views/template-details.html',
		controller: 'TemplateDetailsCtrl'
	});
}])

.controller('TemplatesCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('json/templates.json').success(function (data) {
    $scope.templates = data;
  });
}])

.controller('TemplateDetailsCtrl', ['$scope', function ($scope) {
  console.log($scope);
}]);
