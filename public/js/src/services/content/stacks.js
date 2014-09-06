'use strict';

angular.module('octobox.stacks').factory('Stacks', ['$resource', function($resource) {
	var Stacks = $resource('api/content/stack/:collection/:stack/:postfix', {
		collection: '@collection',
		stack: '@stack',
		postfix: '@postfix'
	}, {
		update: {
			method: 'PUT'
		},
		// Return all stack files
		all: {
			params: {
				// Calls files instead of all (as in collection) because, there's
				// only files - no stacks, within a stack.
				postfix: 'files'
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
	return Stacks;
}]);
