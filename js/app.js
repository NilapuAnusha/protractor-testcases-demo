'use strict';

/* defining the app */
var app = angular
	.module("quizApp", ['quizzes','ngResource'])
	.config(['$routeProvider', function($routeProvider) {

    $routeProvider
			.when('/attribute', {templateUrl: 'partials/home.html'})
			.otherwise({redirectTo: '/attribute'});
	}]);