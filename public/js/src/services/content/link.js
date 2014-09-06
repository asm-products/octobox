'use strict';

angular.module('octobox.link').factory('Link', ['$resource', function($resource) {
	var Link = $resource('api/content/link/:collection/:stack/:linkname/:postfix', {
		collection: '@collection',
		stack: '@stack',
		linkname: '@linkname',
		postfix: '@postfix'
	}, {
		update: {
			method: 'PUT'
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
	return Link;
}]);
