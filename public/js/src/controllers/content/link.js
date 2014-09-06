'use strict';

angular.module('octobox.link').controller('LinkController', ['$scope', '$rootScope', '$stateParams', '$http', '$location', '$window', '_', 'AlertsManager', 'Global', 'Modal', 'Link', 'Tags', function ($scope, $rootScope, $stateParams, $http, $location, $window, _, AlertsManager, Global, Modal, Link, Tags) {
	$scope.global = Global;
	$scope.modal = Modal;

	// more Dropdown
	$scope.linkMoreMenu = [
			{
					text: 'Move',
					iconCls: 'more-move'
			},
			{
					divider: true
			},
			{
					text: 'Delete',
					iconCls: 'more-delete'
			}
	];
	$scope.linkMoreMenuSelected = {}; // Must be an object

	$scope.toggleTagEdit = function (event) {
		var element = angular.element(document.querySelector( '#current-tags-container' ));
		var isChild = element.find(event.target.tagName).length > 0;
		var isSelf = element[0] == event.target;
		var isIgnored = isChild || isSelf;
		if (!isIgnored) {
			$scope.editingTags = false;
			$scope.$apply();
		}
	};

	$scope.editContent = function (selected) {
		if (selected.iconCls === 'more-move') {
			$scope.modal.open('/views/directives/move.html', $scope.link);
		} else if (selected.iconCls === 'more-delete') {
			$scope.modal.open('/views/directives/delete.html', $scope.link);
		}
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

	// Remove tag from the file (uses Tags model!)
	$scope.unassignTag = function(tag, item) {
		// make the tag into a proper resource
		tag = new Tags(tag);
		tag.item = {
			'_id': item._id,
			'name': item.name
		};
		var tempParent;
		tempParent = item.parentPath;
		if(item.parentPath !== '/') {
			tempParent  = item.parentPath + '/';
		}
		item.path = tempParent + item.url.replace(/\//g, ':');

		// figure out if it's inbox, stack or collection.
		var count = item.path.match(/\//g);
		if (count.length === 1) tag.item.parent = 'inbox';
		else if (count.length === 2) tag.item.parent = 'collection';
		else tag.item.parent = 'stack';
		tag.item.kind = 'link';
		tag.$unassign(function() {

			// remove tag from array
			var tagIndex = _.findIndex(item.tags, {'_id' : tag._id});
			item.tags.splice(tagIndex, 1);

			// emit event that removes id from tag in sidebar controller
			$rootScope.$emit('removeFromTag', 'link', tag._id, item._id);
			item.modified = new Date();
			tag.exists = false;
		});
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

		if (item.type === 'link'){
			if (item.parentPath === '/')
				item.path = item.parentPath + item.url.replace(/\//g, ':');
			else
				item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
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
			processedItem.path = item.path;
		}

		Link.addFavourite(processedItem, function success() { // res
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
			'name': item.name,
			'path': item.path
		};
		if (item._id)
			processedItem._id = item._id;

		if (item.type === 'link'){
			if (item.parentPath === '/')
				item.path = item.parentPath + item.url.replace(/\//g, ':');
			else
				item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
		}
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
			processedItem.path = item.path;
		}

		Link.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in $scope.global.user.favourites and remove
			var favIndex = _.findIndex(Global.user.favourites, {'path': item.path});
			Global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};

	$scope.create = function() {
		$scope.loading = true;
		var pathCollection = null;
		var pathStack = null;
		var pathElts = Global.activeView.path.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}

		var linkname = this.url.replace(/\//g, ':'); // for req post url
		var link = new Link({
			url: this.url
		});
		link.$save({
			linkname: linkname,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		},function() { // success
			AlertsManager.addAlert('Link added successfully', 'alert-success', 2500);
			$rootScope.$emit('refreshContent');
			$scope.modal.close();
		}, function (err) { // error
			AlertsManager.addAlert(JSON.parse(err.data), 'alert-error');
		});

		this.url = '';
	};

	$scope.remove = function(link) {
		if (link) {
			link.$remove();

			for (var i in $scope.links) {
				if ($scope.links[i] === link) {
					$scope.links.splice(i, 1);
				}
			}
		}
		else {
			$scope.link.$remove();
			$location.path('api/content/link' + link.path);
		}
	};

	$scope.update = function() {
		var link = $scope.link;
		if (!link.modified) {
			link.modified = [];
		}
		link.modified.push(new Date().getTime());

		link.$update(function() {
			$location.path('api/content/link' + link.path);
		});
	};

	$scope.findOne = function() {
		Link.get({
			linkname: $stateParams.linkname,
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(link) {
			$scope.link = link;
			Global.activeView = link;

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
		});
	};

	// findOne for Modals
	$scope.findOneModal = function(path) {
		var linkPath,
				collectionPath,
				stackPath,
				parsedPath = path.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');
		// if inbox
		if (pathElts.length === 1){
			linkPath = pathElts[0];
			collectionPath = undefined;
			stackPath = undefined;
		}
		// if collection
		if (pathElts.length === 2){
			linkPath = pathElts[1];
			collectionPath = pathElts[0];
			stackPath = undefined;
		}
		// if stack
		if (pathElts.length === 3){
			linkPath = pathElts[2];
			stackPath = pathElts[1];
			collectionPath = pathElts[0];
		}

		Link.get({
			linkname: linkPath,
			collection: collectionPath,
			stack: stackPath
		}, function(link) {
			$scope.link = link;
			// strip out http:// and split url into base and subpath
			if (link.url.match(/^(http:\/\/)/)) {
				link.prettyUrl = link.url.substr(7).match(/^(.[^\/]+)(.*)/);
			} else if (link.url.match(/^(https:\/\/)/)){
				link.prettyUrl = link.url.substr(8).match(/^(.[^\/]+)(.*)/);
			}
			// keep old color as reference
			$scope.oldColor = $rootScope.color;
			// set color
			$rootScope.color = link.color;
		});
		// revert back to old color after opening file!
		$scope.$on('$destroy', function () {
			$rootScope.color = $scope.oldColor;
		});
	};
}]);
