'use strict';

angular.module('octobox.dropbox').controller('DropboxAuthController', ['$scope', '$rootScope', '$location', 'Global', 'Dropbox', 'DropboxSync', 'AlertsManager', function ($scope, $rootScope, $location, Global, Dropbox, DropboxSync, AlertsManager) {
	// $scope.global = Global;

	$scope.init = function() {
		// $scope.message = DropboxAuth.getAuth();
		// Send data to alerts manager
		var data = $location.search();
		// console.log(data);
		// Set auth global to true
		Global.dropboxAuthorized = true;
		Global.user.dropbox = {
			email : data.email,
			uid: data.uid,
			token: data.token
		};
		Dropbox.setCredentials({ access_token: data.token });
		AlertsManager.addAlert('All good! Your Dropbox Account - \'' + data.email + '\' was authorized!', 'alert-success', 2500);
		// $rootScope.$emit('syncContent');
		DropboxSync.sync();
	};

	/*
	 * Watchers
	 */
	var refreshContent = $rootScope.$on('refreshContent', function() {
		$location.path('/');
	});
	$scope.$on('$destroy', function () {
		refreshContent();
	});

}]);
