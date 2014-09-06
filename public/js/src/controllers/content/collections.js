'use strict';

angular.module('octobox.collections').controller('CollectionsController', ['$window', '$scope', '$rootScope', '$document', '$stateParams', '$location', 'Dropbox', '_', 'AlertsManager',  'Global', 'Page', 'Collections', 'Modal', 'FileModal', 'Link', 'File', 'Stacks', function ($window, $scope, $rootScope, $document, $stateParams, $location, Dropbox, _, AlertsManager, Global, Page, Collections, Modal, FileModal, Link, File, Stacks) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Filters out extension from name
	var rgExtension = /.*\.([^.]+)$/;
	// filters out root path from full path
	var rgRoot = /^(.*[\/])/; // (.+)[\/].+$

	// Non API Methods
	// Link to stack from thumbnail
	$scope.goTo = function(stackPath) {
		$location.path('/stack' + stackPath);
	};

	$scope.selectItem = function (itemPath, oldPath) {
		$scope.selectedPath = itemPath;
		$scope.currentPath = oldPath.match(rgRoot);
	};

	// Compile string of values to compare
	$scope.compileCompare = function (item) {
		var itemString = item.modified;
		return itemString + '|';
	};

	$scope.moveItem = function (scopeItem) {
		if ($scope.selectedPath === undefined) {
			AlertsManager.addAlert('Select a destination to move an item', 'alert-error', 1500);
			return;
		}
		if ($scope.selectedPath === 'Inbox') // revert inbox to server-friendly path
			$scope.selectedPath = '/';
		if ($scope.selectedPath === $scope.currentPath[1]) {
			AlertsManager.addAlert('That\'s where the item is, dummy', 'alert-error', 2500);
			return;
		}
		var oldPath = scopeItem.path;
		var filename = oldPath.match(/([^\/]+)$/);
		var newPath = $scope.selectedPath + '/' + filename[1];
		if ($scope.selectedPath === '/') {
			newPath = $scope.selectedPath + filename[1];
		}
		var filePath,
				collectionPath,
				stackPath,
				parsedPath = oldPath.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');

		// if inbox
		if (pathElts.length === 1){
			filePath = pathElts[0];
			collectionPath = undefined;
			stackPath = undefined;
		}
		// if collection
		if (pathElts.length === 2){
			filePath = pathElts[1];
			collectionPath = pathElts[0];
			stackPath = undefined;
		}
		// if stack
		if (pathElts.length === 3){
			filePath = pathElts[2];
			stackPath = pathElts[1];
			collectionPath = pathElts[0];
		}

		if (scopeItem.type === 'link'){
			var link = new Link({
				url: scopeItem.url,
				parentPath: $scope.selectedPath,
				user: Global.user._id
			});
			$scope.modal.close();
			$scope.filemodal.close();
			link.$move({
				linkname: filePath,
				collection: collectionPath ? collectionPath : null,
				stack: stackPath ? stackPath : null,
			}, function() {
				AlertsManager.addAlert('Link moved successfully', 'alert-success', 1500);
				$rootScope.$emit('refreshContent');
				link = undefined;
			});
		} else if (scopeItem.kind === 'stack') {
			var stack = new Stacks({
				name: scopeItem.name,
				path: newPath,
				user: Global.user._id
			});

			$scope.modal.close();
			$scope.filemodal.close();
			stack.$move({
				collection: collectionPath,
				stack: filePath,
			}, function() {
				AlertsManager.addAlert('Stack moved successfully', 'alert-success', 1500);
				$location.path('/stack' + newPath);
				$rootScope.$emit('refreshContent');
				stack = undefined;
			});
		} else {
			var file = new File({
				name: scopeItem.name,
				path: newPath,
				user: Global.user._id
			});

			$scope.modal.close();
			$scope.filemodal.close();
			// console.log('moving file ' + scopeItem.name);
			file.$move({
				filename: filePath,
				collection: collectionPath,
				stack: stackPath,
			}, function() {
				AlertsManager.addAlert('Item moved successfully', 'alert-success', 1500);
				$rootScope.$emit('refreshView');
				file.length = 0;
				$scope.currentPath = undefined;
				$scope.selectedPath = undefined;
				// console.log('file moved');
			});
		}
	};

	// Get thumbnail from file url
	$scope.getThumbnail = function(item) {
			item.thumbnailUrl = Dropbox.thumbnailUrl(item.lastFile ? item.lastFile : item.path, { size: 'xl'});
			if (Global.activeView.thumbnailUrl === undefined)
				Global.activeView.thumbnailUrl = item.thumbnailUrl;
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

	$scope.getExcerpt = function(item) {
		var path = item.path;
		if (item.type === 'note' && item.lastFile) path = item.lastFile;

		Dropbox.readFile(path).then(function(res) {
			item.excerpt = res;
		});
	};
	$scope.isActive = function(path) {
			var windowLoc = $location.path().toLowerCase();
			var depth = windowLoc.match(/\//g);
			var locComponents = windowLoc.split('/');
			if (depth.length === 3){ // if 3 slashes then it's a stack
				if (path && path.toLowerCase().indexOf(locComponents[2]) !== -1)
						return true;
				else
						return false;
			} else {
				if ($location.path().substr(0, path.length).toLowerCase() === path.toLowerCase())
					return true;
				else
					return false;
			}
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
			'name': item.name,
			'path': item.path,
			'color': item.color
		};
		if (item._id)
			processedItem._id = item._id;

		if (item.type === 'link')
			item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);

		// first get kind of file
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
		if (depth && depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth && depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
		}

		Collections.addFavourite(processedItem, function success() { // res
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
			'name': item.name,
			'path': item.path
		};
		if (item._id)
			processedItem._id = item._id;

		if (item.type === 'link')
			item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);

		// first get kind of file
		if (item.files === undefined ) processedItem.kind = 'file';
		if (depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
		}

		Collections.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in Global.user.favourites and remove
			var favIndex = _.findIndex($scope.global.user.favourites, {'path': item.path});
			$scope.global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};

	// from click-to-add sidebar directive
	$scope.create = function(name, cb) {
		// if name wasnt changed or is empty, skip saving
		if (!name || name === '')
			return cb(undefined, true); // err - undefined; noChange - true

		// replace any slashes with ':', then add '/' and convert to lowercase
		var path = name.replace(/\//g, ':');
		path = path.toLowerCase();

		var collection = new Collections({
			name: name,
			path: path
		});

		collection.$save(function() {
			// success
			return cb();
		}, function() {
			// error
			return cb(true);
		});
	};
	$scope.remove = function(collection) {
		if (collection) {
			collection.$remove();
			for (var i in $scope.collections) {
				if ($scope.collections[i] === collection) {
					$scope.collections.splice(i, 1);
				}
			}
		}
		else {
			$scope.collection.$remove();
			$location.path('api/content/collection');
		}
	};
	$scope.update = function() {
		var collection = $scope.collection;
		if (!collection.modified) {
			collection.modified = [];
		}
		collection.modified.push(new Date().getTime());
		collection.$update(function() {
			$location.path('api/content/collection/' + collection.path);
		});
	};
	$scope.find = function(movePath) {
		Collections.query(function(collections) {
			$scope.collections = collections;
		});
		if (movePath) {
			var tempPath = movePath.match(/(.+\/|\/)[^\/]+$/);
			$scope.parentPath = tempPath[1];
		}
	};

	// Get all content for list view
	$scope.all = function() {
		Collections.all({
			path: $stateParams.path.toLowerCase()
		}, function(items) {
				_(items).forEach(function(item) {
					var extension;
					// if it's a stack
					if (item.lastFile) {
						extension = item.lastFile.match(rgExtension);
						// if it's a note
						if (extension[1] === 'txt' || extension[1] === 'markdown' || extension[1] === 'mdown' || extension[1] === 'mkdn' || extension[1] === 'md' || extension[1] === 'mkd' || extension[1] === 'mdwn' || extension[1] === 'mdtxt' || extension[1] === 'mdtext' || extension[1] === 'text' ) {
							item.type = 'note';
						} else {
							item.type = 'image';
						}
						item.kind = 'stack';
					}
					// gif or plain image?
					if (item.hasThumbnail){
						extension = item.path.match(rgExtension);
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
				// Reset filters to default
				Global.activeSort = Global.selectSort[0];
				// Global.activeFilter = Global.selectFilter[0];

				$scope.order = Global.selectSort.sortby;


		});
		// Sort items
		$scope.$watch('global.activeSort.name', function() {
			$scope.items = _.sortBy($scope.items, Global.activeSort.sortby);
			if (Global.activeSort.reverse)
				$scope.items = $scope.items.reverse();
		});

		// Filter items
		// $scope.$watch('global.activeFilter.name', function() {
		// 	if (tempItems === null)
		// 		tempItems = _.map($scope.items);
		//
		// 	console.log(tempItems.length, $scope.items.length);
		// 	$scope.items = _.filter($scope.items, function (item) {
		// 		return Global.activeFilter.show === item.type;
		// 	});
		// });
	};

	$scope.findOne = function() {
		Collections.get({
			path: $stateParams.path.toLowerCase()
		}, function(collection) {
			$scope.collection = collection;
			Global.activeView = collection;
			Global.activeView.kind = 'collection';
			Page.setTitle(collection.name);
			$rootScope.color = collection.color;
		});
		// findOne watchers
		var offAddFav = $rootScope.$on('addFavourite', function(obj, item) {
			// console.log('adding');
			$scope.addFavourite(item);
		});
		var offRemoveFav = $rootScope.$on('removeFavourite', function(obj, item) {
			$scope.removeFavourite(item);
		});
		// Cleans the watchers after scope is destroyed (eg. switched to a different controller)
		$scope.$on('$destroy', function() {
			offAddFav();
			offRemoveFav();
		});
	};

	/*
	 * Watchers
	 */
	// Refresh All Data on Event
	var refreshContent = $rootScope.$on('refreshContent', function() {
		// $scope.collections = undefined;
		// $scope.items = undefined;
		$scope.find();
		if ($stateParams.path)
			$scope.all();
	});
	// Refresh Sidebar Data on Event
	var refreshSidebar = $rootScope.$on('refreshSidebar', function() {
		$scope.find();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		// clear scope items before refresh
		if ($stateParams.path)
			$scope.all();
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
		refreshSidebar();
		locationChangeStart();
		refreshContent();
		refreshView();
		Global.activeView.thumbnailUrl = undefined;
	});
}]);
