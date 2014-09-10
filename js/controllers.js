'use strict';

var controllers = angular.module('imgurApp.Controllers', []);

controllers.controller('ImageListController', function($scope, $http) {
	$http.defaults.headers.common['Authorization'] = 'Client-ID b7ce8f0f08c939f';

	$scope.images = [];

    $scope.totalItems = $scope.images.length;
    $scope.itemsPerPage = 15
    $scope.currentPage = 1;
    $scope.maxSize = 5;
	 
	$http({method: 'GET', url: 'https://api.imgur.com/3/gallery/random/random/1'}).
	    success(function(data, status, headers, config) {    
	    	$scope.images = data['data']

	    	console.log(data['data']);
	    	$scope.totalItems = $scope.images.length;

	    	$scope.$watch('currentPage + itemsPerPage', function() {
	    		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
	    		var end = begin + $scope.itemsPerPage;
	    	});

	    	$scope.filteredItems = $scope.images.slice(begin, end);
	    }).error(function(data, status, headers, config) {});	   
});

controllers.controller('ImageShowController', function($scope, $http) {

});