'use strict';

angular.module('octobox.dropbox').controller('DropboxSyncController', ['$scope',  '$location', 'Global', 'DropboxSync',  function ($scope, $location, Global, DropboxSync) {
		$scope.global = Global;

		$scope.sync = function() {
			$scope.data = DropboxSync.sync();
		};
}]);
