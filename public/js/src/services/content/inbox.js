'use strict';

angular.module('octobox.inbox').factory('Inbox', ['$resource', function($resource) {
	return $resource('api/content/inbox/:postfix', {
		postfix: '@postfix'
	}, {
		update: {
			method: 'PUT'
		},
		// Return all files in inbox
		files: {
			params: {
				postfix: 'files'
			},
			method: 'GET',
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
