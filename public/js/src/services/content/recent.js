'use strict';

angular.module('octobox.recent').factory('Recent', ['$resource', function($resource) {
	return $resource('api/content/recent', {

	}, {
		get: {
			isArray: true
		},
		addFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/add'
		},
		removeFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/remove'
		}
	});
}]);
