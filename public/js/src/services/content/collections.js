'use strict';

angular.module('octobox.collections').factory('Collections', ['$resource', function($resource) {
	var Collections = $resource('api/content/collection/:path/:postfix', {
		path: '@path',
		postfix: '@postfix'
	}, {
		update: {
			method: 'PUT'
		},
		// Return all collection files and stacks
		all: {
			params: {
				postfix: 'all'
			},
			method: 'GET',
			isArray: true
		},
		// Return Collection Thumbnail
		thumbnail: {
			params: {
				postfix: 'thumbnail'
			},
			method: 'GET'
		},
		addFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/add'
		},
		removeFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/remove'
		},
		move: {
			method: 'PUT',
			params: {
				postfix: 'move'
			}
		}
	});
	return Collections;
}]);
