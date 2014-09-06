'use strict';

// Simple service that grabs the Dropbox Auth and passes it to the interface.
angular.module('octobox.dropbox').factory('DropboxAuth', ['$http', '$rootScope', '$state', '_', 'Dropbox', 'AlertsManager', 'Global',
	function( $http, $rootScope, $state, _, Dropbox, AlertsManager, Global) {
		return {
			// Get Auth from API
			getAuth : function() {
				var message = {
					content: null
				};
				$http.get('api/dropbox/auth', {
					params: { user: window.user }
				}).success(function(data) {
					// console.log(data);
					message.content = 'done';
					if (data.errors) {
						AlertsManager.addAlert('An error has occured, please try again later', 'alert-error');
					} else {
						// Send data to alerts manager
						AlertsManager.addAlert('All good! Your Dropbox Account - \'' + data.email + '\' was authorized!', 'alert-success');
						// Set auth global to true
						Global.dropboxAuthorized = true;
						Global.user.dropbox = _.extend(Global.user.dropbox, data);
						Dropbox.setCredentials({ access_token: data.token });
						$rootScope.$emit('syncContent');
					}
				});
				return message;
			},
			// Revoke access to Dropbox
			revoke : function() {
				var message = {
					content: null
				};
				$http.get('api/dropbox/revoke', {
					params: { user: window.user }
				}).success(function(data) {
					message.content = 'done';
					if (data.err) {
						AlertsManager.addAlert('An error has occured, please try again later', 'alert-error');
					} else {
						// Send data to alerts manager
						AlertsManager.addAlert(data, 'alert-success');
						// Set auth global to false
						Global.dropboxAuthorized = false;
						window.user.dropbox.token = '';

						// Emit Event to Refresh Content
						$state.go('home', {}, {reload: true});
					}
				});
				return message;
			}

		};
	}
]);
