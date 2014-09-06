'use strict';

angular.module('octobox.inbox').controller('InboxController', ['$window', '$scope', '$stateParams', '$rootScope', '$location', '_', 'Dropbox', 'AlertsManager', 'DropboxSync', 'Global', 'Page', 'Inbox', 'Link', 'Modal', 'FileModal', function ($window, $scope, $stateParams, $rootScope, $location, _, Dropbox, AlertsManager, DropboxSync, Global, Page, Inbox, Link, Modal, FileModal) {
	// $scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Filters out extension from name
	var rgExtension = /.*\.([^.]+)$/;

	// sync content on load
	$scope.init = function() {
		if (!Global.sync){
			Global.sync = true;
			DropboxSync.sync(true); // quiet - true
		}
	};
	// Compile string of values to compare
	$scope.compileCompare = function (item) {
		var itemString = item.modified;
		return itemString + '|';
	};

	// get kind of item
	$scope.isKind = function(item) {
			if (item.lastFile !== undefined)
				return 'stack';

			if (item.lastFile === undefined && item.url === undefined)
				return 'file';

			if (item.type === 'link')
				return 'link';
	};
	// open link in new window
	$scope.openLink = function (item) {
		// update open date
		var pathCollection = null;
		var pathStack = null;
		var pathElts = item.parentPath.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}
		var linkname = item.url.replace(/\//g, ':'); // for req post url

		item = new Link(item);
		item.user = Global.user._id;
		item.$update({
			linkname: linkname,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		},function() { // success
		}, function () { // error
		});
		// open link in new tab
		$window.open(item.url);
	};

	$scope.update = function() {
		var inbox = $scope.inbox;

		inbox.$update(function() {
			$location.path('api/content/inbox');
		});
	};

	// Return paged content as a result
	$scope.files = function() {
		/*
		 * Set view properties
		 */
		// Reset filters to default
		Global.activeSort = Global.selectSort[0];
		// Global.activeFilter = Global.selectFilter[0];
		Page.setTitle('Inbox');
		$rootScope.color = 0;
		Global.activeView = {
			name: 'Inbox',
			path: '/',
			kind: 'inbox',
			isFavourite: undefined
		};

		Inbox.files(function(items) {
			// set gif filetype
			_(items).forEach(function(item) {
				// gif or plain image?
				if (item.hasThumbnail){
					var extension = item.path.match(rgExtension);
					if (extension[1] === 'gif' )
						item.type = 'gif';
					else
						item.type = 'image';
				}
				if (item.type === 'link') {
					// strip out http:// and split url into base and subpath
					if (item.url.match(/^(http:\/\/)/)) {
						item.prettyUrl = item.url.substr(7).match(/^(.[^\/]+)(.*)/);
					} else if (item.url.match(/^(https:\/\/)/)){
						item.prettyUrl = item.url.substr(8).match(/^(.[^\/]+)(.*)/);
					}
				}
				// generate and add .created from _id - via http://stackoverflow.com/questions/10346067/pull-date-from-mongo-id-on-the-client-side
				item.created = parseInt(item._id.substring(0,8), 16)*1000; // unix timestamp
			});

			$scope.items = items;
			Global.activeView.count = $scope.items.length;
		});
	};

	$scope.find = function() {
		Inbox.get(function(inbox) {
			$scope.inbox = inbox;
		});
	};

	$scope.getThumbnail = function(item) {
		item.thumbnailUrl = Dropbox.thumbnailUrl(item.path, { size: 'xl'});
	};
	$scope.getExcerpt = function(item) {
		Dropbox.readFile(item.path).then(function(res) {
			item.excerpt = res;
		});
	};

	$scope.toggleFavourite = function (card) {
		if (!card.isFavourite) {
			$scope.addFavourite(card);
		} else {
			$scope.removeFavourite(card);
		}
	};

	$scope.addFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		if (item.type === 'link')
			item.path = item.parentPath + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.type !== 'link')
			processedItem.kind = 'file';

		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + item.url.replace(/\//g, ':');
		}
		Inbox.addFavourite(processedItem, function success() { // res
			item.isFavourite = true;
			Global.user.favourites.push(processedItem);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};
	$scope.removeFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		if (item.type === 'link')
			item.path = item.parentPath + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.type !== 'link')
			processedItem.kind = 'file';

		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + item.url.replace(/\//g, ':');
		}

		Inbox.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in Global.user.favourites and remove
			var favIndex = _.findIndex(Global.user.favourites, {'path': item.path});
			Global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);		});
	};

	/*
	 * Watchers
	 */
	// Refresh Data on Event (sync mainly)
	var refreshContent = $rootScope.$on('refreshContent', function() {
		// $scope.items = undefined;
		$scope.files();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		$scope.files();
	});
	// if file is open, close modal when back button is pressed
	var locationChangeStart = $rootScope.$on('$locationChangeStart', function(event) {
		if ($scope.modal.isOpen()){
			$scope.modal.close();
			event.preventDefault();
		}
	});
	// deregister watchers when scope inactive
	$scope.$on('$destroy', function () {
		locationChangeStart();
		refreshContent();
		refreshView();
	});

	// Sort items
	$scope.$watch('global.activeSort.name', function() {
		$scope.items = _.sortBy($scope.items, Global.activeSort.sortby);
		if (Global.activeSort.reverse)
			$scope.items = $scope.items.reverse();
	});
}]);
