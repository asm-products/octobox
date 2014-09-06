'use strict';

angular.module('octobox.tags').controller('TagsController', ['$window', '$scope', '$rootScope', '$stateParams', '$location', '_', 'AlertsManager', 'Dropbox', 'Global', 'Page', 'Tags', 'Link', 'Modal', 'FileModal', function ($window, $scope, $rootScope, $stateParams, $location, _, AlertsManager, Dropbox, Global, Page, Tags, Link, Modal, FileModal) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Non-API stuff


	$scope.getThumbnail = function(item) {
		if (item.lastFile)
			item.thumbnailUrl = Dropbox.thumbnailUrl(item.lastFile, { size: 'xl'});
		else
			item.thumbnailUrl = Dropbox.thumbnailUrl(item.path, { size: 'xl'});
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

	// Link to stack from thumbnail
	$scope.goTo = function(stackPath) {
		$location.path('/stack' + stackPath);
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

	$scope.isActive = function(path) {
		if ($location.path().substr(0, path.length).toLowerCase() === path.toLowerCase())
			return true;
		else
			return false;
	};

	$scope.assignTag = function(tag, item) {
		// compile and send request to the server
		tag.item = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};
		// add lightweight version of the tag to the file immediately
		item.tags.push({
			_id: tag._id,
			user: tag.user,
			name: tag.name,
			files: tag.files,
			stacks: tag.stacks,
			links: tag.links
			});

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
		// figure out if the item parent is inbox, stack or collection.
		var depth = item.path.match(/\//g);
		if (depth.length === 1) tag.item.parent = 'inbox';
		else if (depth.length === 2) tag.item.parent = 'collection';
		else tag.item.parent = 'stack';
		// get the kind of the item - stack or file
		tag.item.kind = item.files ? 'stack' : 'file';
		if (item.type === 'link')
			tag.item.kind = 'link';

		tag.$assign(function() {
			if (item.files) { //if it's a stack
				// also add current stack id to that tag (for API request)
				item.tags[item.tags.length-1].stacks.push(item._id);
				// emit event that adds id to tag in sidebar controller
				$rootScope.$emit('addToTag', 'stack', tag._id, item._id);
			} else if (item.type === 'link') { // if it's a link
				// also add current link id to that tag (for API request)
				item.tags[item.tags.length-1].links.push(item._id);
				// emit event that adds id to tag in sidebar controller
				$rootScope.$emit('addToTag', 'link', tag._id, item._id);
			} else { // if it's a file
				// also add current file id to that tag (for API request)
				item.tags[item.tags.length-1].files.push(item._id);
				// emit event that adds id to tag in sidebar controller
				$rootScope.$emit('addToTag', 'file', tag._id, item._id);
			}
			item.modified = new Date();
			tag.exists = true;
		});
	};

	$scope.unassignTag = function(tag, item) {
		// compile and send request to the server
		tag.item = {
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
		// figure out if it's inbox, stack or collection.
		var count = item.path.match(/\//g);
		if (count.length === 1) tag.item.parent = 'inbox';
		else if (count.length === 2) tag.item.parent = 'collection';
		else tag.item.parent = 'stack';
		tag.item.kind = item.files ? 'stack' : 'file';
		if (item.type === 'link')
			tag.item.kind = 'link';

		tag.$unassign(function() {
			// remove tag from array
			var tagIndex = _.findIndex(item.tags, {'_id' : tag._id});
			item.tags.splice(tagIndex, 1);

			if (item.files) { //if it's a stack
				var stackIndex = _.findIndex(tag.stacks, {'_id' : item._id});
				tag.stacks.splice(stackIndex, 1);
				// emit event that removes id from tag in sidebar controller
				$rootScope.$emit('removeFromTag', 'stack', tag._id, item._id);

			} else if (item.type === 'link') { // if it's a link
				var linkIndex = _.findIndex(tag.links, {'_id' : item._id});
				tag.links.splice(linkIndex, 1);
				// emit event that removes id from tag in sidebar controller
				$rootScope.$emit('removeFromTag', 'link', tag._id, item._id);
			} else {
				var fileIndex = _.findIndex(tag.files, {'_id' : item._id});
				tag.files.splice(fileIndex, 1);
				// emit event that removes id from tag in sidebar controller
				$rootScope.$emit('removeFromTag', 'file', tag._id, item._id);
			}
			item.modified = new Date();
			tag.exists = false;
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
			'name': item.name,
			'path': item.path,
			'color': item.color
		};
		if (item._id)
			processedItem._id = item._id;

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
			processedItem.path = tempParent + item.url.replace(/\//g, ':');
		}

		Tags.addFavourite(processedItem, function success() { // res
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
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
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
			processedItem.path = tempParent + item.url.replace(/\//g, ':');
		}

		// console.log(processedItem);
		Tags.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in $scope.global.user.favourites and remove
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

		var tag = new Tags({
			name: name
		});
		tag.$save(function() {
			// success
			return cb();
		}, function() {
			// error
			return cb(true);
		});
	};

	// from tags popup on item view
	$scope.createForm = function(item) {
		var tag = new Tags({
				name: this.name,
				exists: true
		});
		tag.$save(function(tagResponse) {
				// convert response from function to object
				tagResponse = new Object(tagResponse);
				// push tag to sidebar and list
				tagResponse.exists = true;
				$rootScope.$emit('pushTag', tagResponse);

				// assign tag automatically
				$scope.assignTag(tagResponse, item);
		});
		this.name = '';
	};

	$scope.remove = function(tag) {
		if (tag) {
			tag.$remove();
			for (var i in $scope.tags) {
				if ($scope.tags[i] === tag) {
					$scope.tags.splice(i, 1);
				}
			}
			// Send data to alerts manager
			AlertsManager.addAlert('Tag \'' + tag.name + '\' removed', 'alert-success', 1500);
		} else {
			$scope.tag.$remove(function() {
				$location.path('api/content/tag');
				// Send data to alerts manager
				AlertsManager.addAlert('Tag \'' + $scope.tag.name + '\' removed', 'alert-success', 1500);
				$rootScope.$emit('refreshContent');
			});
		}
	};

	$scope.update = function() {
		var tag = $scope.tag;
		tag.$update(function() {
			$location.path('api/content/tag/' + $scope.oldName);
			AlertsManager.addAlert('Tag \'' + $scope.oldName + '\' successfully renamed to \'' + tag.name + '\'', 'alert-success', 2500);
			$rootScope.$emit('refreshContent', 'global');
		}, function() {
			// error
			AlertsManager.addAlert('Tag \'' + tag.name + '\' already exists. Pick a different name', 'alert-warning', 1500);
		});
	};
	$scope.find = function() {
		Tags.query(function(tags) {
			$scope.tags = tags;
		});
	};

	// find for the file/stack edit page - checks for scope and updates tag status on load
	$scope.findAndCheck = function() {
		Tags.query(function(tags) {
			$scope.tags = tags;
			// watch file for changes and set tag.exists
			$scope.$watch('file', function() {
				if ($scope.file){
					_($scope.tags).forEach(function(tag) {
						var index = tag.files.indexOf($scope.file._id);
						if (index === -1) tag.exists = false;
						else tag.exists = true;
					});
				}
			});
			// watch stack
			$scope.$watch('stack', function() {
				if ($scope.stack){
					_($scope.tags).forEach(function(tag) {
						var index = tag.stacks.indexOf($scope.stack._id);
						if (index === -1) tag.exists = false;
						else tag.exists = true;
					});
				}
			});
			// watch link
			$scope.$watch('link', function() {
				if ($scope.link){
					// console.log($scope.link);
					_($scope.tags).forEach(function(tag) {
						var index = tag.links.indexOf($scope.link._id);
						if (index === -1) tag.exists = false;
						else tag.exists = true;
					});
				}
			});
		});
	};
	$scope.findOne = function() {
		Tags.get({
			name: $stateParams.name
		}, function(tag) {
			$scope.tag = tag;
			$scope.oldName = tag.name;
		});
	};

	// returns items that belong to a tag
	$scope.getItems = function(refreshColor) {
		Tags.items({
			name: $stateParams.name
		}, function(tag) {
			// Filters out extension from name
			var rgExtension = /.*\.([^.]+)$/;
			_(tag.content).forEach(function(item) {
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

			$scope.tag = tag;

			Global.activeView.name = tag.name;
			Global.activeView.count = tag.content.length;
			Global.activeView._id = tag._id;
			Global.activeView.isFavourite = undefined;
			Global.activeView.kind = 'tag';
			Global.activeView.type = 'tag';
			Global.activeView.path = '/'; // for base path add in the header

			Page.setTitle(tag.name);
			// Reset filters to default
			$scope.global.activeSort = Global.selectSort[0];
			// $scope.global.activeFilter = $scope.global.selectFilter[0];
			if (refreshColor !== false || refreshColor === undefined)
				$rootScope.color = 1;
		});
		// Sort items
		$scope.$watch('global.activeSort.name', function() {
			if ($scope.tag && $scope.tag.content) {
				$scope.tag.content = _.sortBy($scope.tag.content, $scope.global.activeSort.sortby);
				if ($scope.global.activeSort.reverse)
					$scope.tag.content = $scope.tag.content.reverse();
			}
		});
	};

	/*
	 * Watchers
	 */
	// if file is open, close modal when back button is pressed
	var locationChangeStart = $rootScope.$on('$locationChangeStart', function(event) {
		if ($scope.modal.isOpen()){
			$scope.modal.close();
			event.preventDefault();
		}
	});
	var refreshTags = $rootScope.$on('refreshTags', function() {
		$scope.findAndCheck();
		$scope.find();
	});
	// Refresh Sidebar Data on Event
	var refreshSidebar = $rootScope.$on('refreshSidebar', function() {
		$scope.find();
	});
	var refreshContent = $rootScope.$on('refreshContent', function() {
		$scope.find();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		$scope.find();
	});

	// when creating a tag we use an event to push it to the sidebar and list simultaneously
	var pushTag = $rootScope.$on('pushTag', function (obj, tag) {
		if (!$scope.tags)
			return;
		$scope.tags.push(tag);
	});
	// handle updating tags on assign/unassign without talking to the backend
	var addToTag = $rootScope.$on('addToTag', function(obj, kind, tagId, itemId) {
		if ($stateParams.name)
			$scope.getItems(false);
		if (!$scope.tags)
			return;
		var itemIndex;
		var tagIndex = _.findIndex($scope.tags, {'_id' : tagId});
		if (kind === 'file'){
			itemIndex = _.findIndex($scope.tags[tagIndex].files, itemId);
			if(!itemIndex)
				$scope.tags[tagIndex].files.push(itemId);
		}
		if (kind === 'link'){
			itemIndex = _.findIndex($scope.tags[tagIndex].links, itemId);
			if(!itemIndex)
				$scope.tags[tagIndex].links.push(itemId);
		}
		if (kind === 'stack'){
			$scope.tags[tagIndex].stacks.push(itemId);
		}

	});
	var removeFromTag = $rootScope.$on('removeFromTag', function(obj, kind, tagId, itemId) {
		if ($stateParams.name)
			$scope.getItems(false);
		if (!$scope.tags)
			return;
		var tagIndex = _.findIndex($scope.tags, {'_id' : tagId});
		if (kind === 'file')
			$scope.tags[tagIndex].files.splice(_.indexOf($scope.tags[tagIndex].files, itemId), 1);
		if (kind === 'stack')
			$scope.tags[tagIndex].stacks.splice(_.indexOf($scope.tags[tagIndex].stacks, itemId), 1);
		if (kind === 'link')
			$scope.tags[tagIndex].links.splice(_.indexOf($scope.tags[tagIndex].links, itemId), 1);
	});

	// deregister watchers when scope inactive
	$scope.$on('$destroy', function () {
		refreshSidebar();
		refreshContent();
		refreshView();
		removeFromTag();
		refreshTags();
		addToTag();
		pushTag();
		locationChangeStart();
	});
}]);
