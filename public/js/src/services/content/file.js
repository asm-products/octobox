'use strict';

angular.module('octobox.file').factory('File', ['$resource', function($resource) {
	var File = $resource('api/content/file/:collection/:stack/:filename/:postfix', {
		collection: '@collection',
		stack: '@stack',
		filename: '@filename',
		postfix: '@postfix'
	}, {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		},
		createNote: {
			method: 'POST',
			params: {
				postfix: 'note'
			}
		},
		createFromURL: {
			method: 'POST',
			params: {
				postfix: 'addurl'
			}
		},
		saveNote: {
			method: 'PUT',
			params: {
				postfix: 'save'
			}
		},
		makeUrl: {
			params: {
				postfix: 'url'
			},
			method: 'GET',
			isArray: false
		},
		shareUrl: {
			params: {
				postfix: 'share'
			},
			method: 'GET',
			isArray: false
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
	return File;
}]);
