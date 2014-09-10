'use strict';

var app = angular.module('imgurApp', [
	'ngRoute',
	'imgurApp.Controllers',
	'ui.bootstrap'
	]);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'ImageListController'
	});

	$routeProvider.when('/show/:id', {
		templateUrl: 'pages/show.html',
		controller: 'ImageShowController'
	});
});