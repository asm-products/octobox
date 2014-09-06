'use strict';

angular.module('octobox.stacks').controller('StacksController', ['$window', '$scope', '$stateParams', '$location', '$rootScope', 'Dropbox', '_', 'AlertsManager', 'Global', 'Page', 'Stacks', 'Tags', 'Link', 'Modal', 'FileModal', function ($window, $scope, $stateParams, $location, $rootScope, Dropbox, _, AlertsManager,  Global, Page, Stacks, Tags, Link, Modal, FileModal) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Filters out extension from name
	var rgExtension = /.*\.([^.]+)$/;

	// Non API Methods
	// Get thumbnail from file url
	$scope.getThumbnail = function(item) {
		item.thumbnailUrl = Dropbox.thumbnailUrl(item.lastFile || item.path, { size: 'xl'});
		if (Global.activeView.thumbnailUrl === undefined)
			Global.activeView.thumbnailUrl = item.thumbnailUrl;
	};
	$scope.getExcerpt = function(item) {
		Dropbox.readFile(item.path).then(function(res) {
			item.excerpt = res;
		});
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

	// Remove tag from the stack (uses Tags model!)
	$scope.unassignTag = function(tag, item) {
		// make the tag into a proper resource
		tag = new Tags(tag);

		tag.item = item;
		tag.item.kind = 'stack';
		tag.$unassign(function() {
			// remove tag from array
			var tagIndex = _.findIndex(item.tags, {'_id' : tag._id});
			item.tags.splice(tagIndex, 1);

			// emit event that removes id from tag in sidebar controller
			$rootScope.$emit('removeFromTag', 'stack', tag._id, item._id);

			var tagsModel = $scope.$$childHead.tags;
			_(tagsModel).forEach(function(tagModel) {
				if (tagModel._id === tag._id){
					var index = tagModel.stacks.indexOf(item._id);
					tagModel.stacks.splice(index, 1);
					tagModel.exists = false;
				}
			});

			item.modified = new Date();
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
			item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		// first get kind of file
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
		if (depth && depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth && depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (item.kind === 'stack') processedItem.kind = item.kind;
		// console.log(depth);
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

		Stacks.addFavourite(processedItem, function success() { // res
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

		if (item.type === 'link')
			item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
		if (depth && depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth && depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (item.kind === 'stack') processedItem.kind = item.kind;
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
		// console.log(item, processedItem);
		Stacks.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in $scope.global.user.favourites and remove
			var favIndex = _.findIndex($scope.global.user.favourites, {'path': item.path});
			$scope.global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);		});
	};



	$scope.create = function() {
		$scope.loading = true;

		var rootPath = Global.activeView.path.substring(1);
		var path = this.name.replace(/\//g, ':');
		path = path.toLowerCase();
		var stack = new Stacks({
			name: this.name,
			path: '/' + rootPath + '/' + path
		});
		// console.log(stack);
		stack.$save({
			collection: rootPath,
			stack: path
		}, function() {
			AlertsManager.addAlert('Stack ' + stack.name + ' created successfully', 'alert-success');
			// $location.path('/stack' + stack.path);
			$rootScope.$emit('refreshContent');
			$scope.modal.close();
		});
		this.name = '';
		this.path = '';
	};
	$scope.remove = function(stack) {
		if (stack) {
			stack.$remove();
			for (var i in $scope.stacks) {
				if ($scope.stacks[i] === stack) {
					$scope.stacks.splice(i, 1);
				}
			}
		}
		else {
			$scope.stack.$remove();
			$location.path('api/content/stack');
		}
	};

	$scope.update = function() {
		var stack = $scope.stack;
		if (!stack.modified) {
			stack.modified = [];
		}
		stack.modified.push(new Date().getTime());
		stack.$update(function() {
			$location.path('api/content/stack/' + stack.path);
		});
	};

	// Return paged content as a result
	$scope.all = function() {
		Stacks.all({
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(items) {
			Global.activeView.count = items.length;
			// Reset filters to default
			$scope.global.activeSort = $scope.global.selectSort[0];
			// $scope.global.activeFilter = $scope.global.selectFilter[0];
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
		});

		// Sort items
		$scope.$watch('global.activeSort.name', function() {
			$scope.items = _.sortBy($scope.items, $scope.global.activeSort.sortby);
			if ($scope.global.activeSort.reverse)
				$scope.items = $scope.items.reverse();
		});
	};

	$scope.findOne = function() {
		Stacks.get({
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(stack) {
			$scope.stack = stack;

			// also pass current view info to header by adding to Global service
			Global.activeView.name = stack.name;
			Global.activeView._id = stack._id;
			Global.activeView.isFavourite = stack.isFavourite;
			Global.activeView.tags = stack.tags;
			Global.activeView.path = stack.path;
			Global.activeView.kind = 'stack';
			$rootScope.color = stack.color;
			Page.setTitle(stack.name);
		});

		// Stores watchers as references
		var offAddFav = $rootScope.$on('addFavourite', function(obj, item) {
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
	// Refresh Data on Event (sync mainly)
	var refreshContent = $rootScope.$on('refreshContent', function() {
		$scope.all();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		$scope.all();
	});
	// if file is open, close modal when back button is pressed
	var locationChangeStart = $rootScope.$on('$locationChangeStart', function(event) {
		if ($scope.modal.isOpen()){
			$scope.modal.close();
			event.preventDefault();
		}
	});
	// Cleans the watchers after scope is destroyed (eg. switched to a different controller)
	$scope.$on('$destroy', function() {
		locationChangeStart();
		refreshContent();
		refreshView();
		Global.activeView.thumbnailUrl = undefined;
	});
}]);
