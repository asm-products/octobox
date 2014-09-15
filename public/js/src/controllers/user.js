'use strict';

angular.module('octobox.user').controller('UserController', ['$scope', '$rootScope', '$stateParams', '$location', '$window', 'Dropbox', 'Global', 'User', 'DropboxAuth', 'Modal', 'FileModal', 'AlertsManager', function ($scope, $rootScope, $stateParams, $location, $window, Dropbox, Global, User, DropboxAuth, Modal, FileModal, AlertsManager) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Link to collection & stack
	$scope.goToCollection = function(path) {
		$location.path('/collection' + path);
	};
	$scope.goToStack = function(path) {
		$location.path('/stack' + path);
	};
	$scope.isActive = function(path) {
		if ($location.path().substr(0, path.length).toLowerCase() === path.toLowerCase())
			return true;
		else
			return false;
	};

	// handle renaming the item
	// passes result to directive, but does the API work here
	$scope.update = function(newName, cb) {
			// if name wasnt changed or is empty, skip saving
			if (!newName || $scope.user.name === newName)
					return cb(undefined, true); // err - undefined; noChange - true

			var user = $scope.user;
			user.name = newName;
			user.$update(function() {
					Global.user = user;
					return cb();
			}, function() { // pass error if tag with new name already exists (handled in directive)
					return cb(true);
			});
	};

	$scope.findOne = function() {
		User.get({
			// overrides the request URL from _id to simply 'me' - shortcut API
			userId: 'me'
		}, function(user) {
			$scope.user = user;
			Global.user = user;
		});
	};

	$scope.findOneModal = function() {
		User.get({
			userId: 'me'
		}, function(user) {
			$scope.user = user;

    	Dropbox.accountInfo().then(function (response) {
				$scope.accountInfo = response;
				$scope.accountInfo.spaceLeft = ((response.quota_info.quota - response.quota_info.normal) / 1000000000).toFixed(2);
			});
		});
	};

	$scope.editAvatar = function () {
		$window.open('https://en.gravatar.com/emails/');
	};

	$scope.toggleResetPassword = function () {
		if ($scope.showReset === undefined)
			$scope.showReset = false;
		$scope.showReset = !$scope.showReset;
	};

	$scope.resetPassword = function () {
		$scope.showReset = !$scope.showReset;
		User.reset({
			email: $scope.user.email
		}, function () {
			AlertsManager.addAlert('Email with a reset link was sent. Check your inbox',
                             'alert-success', 3000);
			$scope.modal.close();
		});
	};

  $scope.toggleRemoveAccount = function(){
		if ($scope.showRemove === undefined)
			$scope.showRemove = false;
		$scope.showRemove = !$scope.showRemove;
  };

  $scope.removeAccount = function(){
    $scope.showRemove = !$scope.showRemove;
		User.remove({
			email: $scope.user.email
		}, function () {
			AlertsManager.addAlert('Your account was successfully removed.' +
                             'We will miss you :(', 'alert-success', 3000);
      setTimeout(function() { document.location = '/signout'; }, 3000);
			$scope.modal.close();
		});
  };

	$scope.toggleRevokeConfirm = function () {
		if ($scope.showRevoke === undefined)
			$scope.showRevoke = false;
		$scope.showRevoke = !$scope.showRevoke;
	};


	// Revoke Access through the API
	$scope.revoke = function() {
		$scope.showRevoke = !$scope.showRevoke;
		DropboxAuth.revoke(function () {
			$scope.modal.close();
		});
	};

	/*
	 * Watchers
	 */
	// Refresh Sidebar Data on Event
	var refreshContent = $rootScope.$on('refreshContent', function() {
		$scope.findOne();
	});
	// Refresh Sidebar Data on Event
	var refreshSidebar = $rootScope.$on('refreshSidebar', function() {
		$scope.findOne();
	});
	// deregister watchers when scope inactive
	$scope.$on('$destroy', function () {
		refreshSidebar();
		refreshContent();
	});

}]);
