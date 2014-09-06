'use strict';

// Simple service that grabs the Dropbox Auth and passes it to the interface.
angular.module('octobox.dropbox').factory('DropboxSync', [ '$http', '$window', '$rootScope', 'AlertsManager',
	function($http, $window, $rootScope, AlertsManager) {
		return {
			sync: function(quiet) {
				var message = {
					content: null
				};
				$http.get('api/content/sync').success(function(data) {
					message.content = 'done';
					if (data.err) { // all errors returned from Dropbox
						AlertsManager.addAlert('An error has occured, please try again later', 'alert-error', 2500);
					} else {
						// Send data to alerts manager
						if (quiet === undefined || quiet === false)
							AlertsManager.addAlert(JSON.parse(data), 'alert-success', 2500);

						$rootScope.$emit('refreshContent');
					}
				}).
				error(function() { // This error occurs when Octobox API fails
					AlertsManager.addAlert('An error has occured. Perhaps you need to authorize your Dropbox account first?', 'alert-error', 3500);
				});
				return message;
			}
		};
	}
]);
