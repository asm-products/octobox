'use strict';

angular.module('octobox.recent').controller('RecentController', ['$window', '$scope', '$stateParams', '$rootScope', '$location', '_', 'Dropbox', 'AlertsManager', 'Modal', 'Global', 'Page', 'Recent', 'Link', 'FileModal', function ($window, $scope, $stateParams, $rootScope, $location, _, Dropbox, AlertsManager, Modal, Global, Page, Recent, Link, FileModal) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Filters out extension from name
	var rgExtension = /.*\.([^.]+)$/;

	// Compile string of values to compare
	$scope.compileCompare = function (item) {
		var itemString = item.modified;
		return itemString + '|';
	};

	$scope.find = function() {
		// Sort items
		$scope.$watch('global.activeSort.name', function() {
			$scope.items = _.sortBy($scope.items, $scope.global.activeSort.sortby);
			if ($scope.global.activeSort.reverse)
				$scope.items = $scope.items.reverse();
		});
		Recent.get(function(recent) {
			// set gif filetype
			_(recent).forEach(function(item) {
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
			$scope.items = recent;
			// Reset filters to default
			$scope.global.activeSort = $scope.global.selectSort[0];
			// $scope.global.activeFilter = $scope.global.selectFilter[0];

			Global.activeView = {
				name: 'Recent Items',
				path: '/', // for file adding - go to inbox by default!
				isFavourite: undefined,
				count: 50
			};
			Page.setTitle('Recent Items');
			$rootScope.color = 0;
		});
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
		item.user = $scope.global.user._id;
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

	$scope.getThumbnail = function(item) {
		item.thumbnailUrl = Dropbox.thumbnailUrl(item.path, { size: 'xl'});
	};
	$scope.getExcerpt = function(item) {
		Dropbox.readFile(item.path).then(function(res) {
			// TODO: Process Markdown Light on res
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

		var tempParent;
		if (item.type === 'link'){
			if (item.parentPath) {
				tempParent = item.parentPath;
				if(item.parentPath !== '/') {
					tempParent  = item.parentPath + '/';
				}
			}
			item.path = tempParent + item.url.replace(/\//g, ':');
		}

		// console.log(item.path);
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
			processedItem.path = tempParent + item.url.replace(/\//g, ':');
		}
		Recent.addFavourite(processedItem, function success() { // res
			item.isFavourite = true;
			$scope.global.user.favourites.push(processedItem);
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

		var tempParent;
		if (item.type === 'link'){
			if (item.parentPath) {
				tempParent = item.parentPath;
				if(item.parentPath !== '/') {
					tempParent  = item.parentPath + '/';
				}
			}
			item.path = tempParent + item.url.replace(/\//g, ':');
		}

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
			processedItem.path = tempParent + item.url.replace(/\//g, ':');
		}

		Recent.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in $scope.global.user.favourites and remove
			var favIndex = _.findIndex($scope.global.user.favourites, {'path': item.path});
			$scope.global.user.favourites.splice(favIndex, 1);
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
		$scope.find();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		$scope.find();
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
}]);
