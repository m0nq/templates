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

.controller('TemplateDetailsCtrl', ['$scope', '$http', '$routeParams', '$filter', function ($scope, $http, $routeParams, $filter) {
	var templateId = $routeParams.templatesId;
	$http.get('json/templates.json').success(function (data) {
    $scope.template = $filter('filter')(data, function (d) {
    	return d.id === parseInt(templateId, 10);
    });
    console.log($scope.template);
		// $scope.mainImage = $scope.template.images[0].name;
  });
}]);
