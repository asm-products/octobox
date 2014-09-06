'use strict';

angular.module('octobox.tags').factory('Tags', ['$resource', function($resource) {
	var Tags = $resource('api/content/tag/:name', {
		name: '@name'
	}, {
		update: {
			method: 'PUT'
		},
		remove: {
			method: 'PUT',
			url: 'api/content/tag/:name/remove'
		},
		assign: {
			method: 'PUT',
			url: 'api/content/tag/:name/assign'
		},
		unassign: {
			method: 'PUT',
			url: 'api/content/tag/:name/unassign'
		},
		items: {
			method: 'GET',
			url: 'api/content/tag/:name/items'
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
	return Tags;
}]);
