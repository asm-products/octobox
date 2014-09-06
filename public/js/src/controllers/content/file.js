'use strict';

angular.module('octobox.file').controller('FileController', ['$scope', '$rootScope', '$stateParams', '$http', '$timeout', '$location', '_', 'Dropbox', 'AlertsManager', 'Global', 'Page', 'Modal', 'FileModal', 'File', 'Tags', function ($scope, $rootScope, $stateParams, $http, $timeout, $location, _, Dropbox, AlertsManager, Global, Page, Modal, FileModal, File, Tags) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;
	$scope.refreshEditor = false; // for codemirror model updates
	// $scope.noteChanged = false; // for checking if note content was changed
	$scope.editorOptions = {
				lineWrapping : true,
				lineNumbers: false,
				autoCloseBrackets: true,
				readOnly: false,
				indentWithTabs: true,
				cursorScrollMargin: 5,
				mode: 'gfm',
		};

	// more Dropdown
	$scope.fileMoreMenu = [
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
	$scope.fileMoreMenuSelected = {}; // Must be an object

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
			$scope.modal.open('/views/directives/move.html', $scope.file);
		} else if (selected.iconCls === 'more-delete') {
			$scope.modal.open('/views/directives/delete.html', $scope.file);
		}
	};

	// Non-API methods
	$scope.makeUrl = function() {
		File.makeUrl({
			filename: $stateParams.filename,
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(data) {
			$scope.file.fileUrl = data.url;
		});
	};
	$scope.getImage = function(file) {
		Dropbox.readImage(file.path).then(function(res) {
			// handle the returned blob and push it as a url to the file. *magic*
			var urlCreator = window.URL || window.webkitURL;
			var imageUrl = urlCreator.createObjectURL( res );
			file.src = imageUrl;
		});
	};

	$scope.getContent = function(file) {
		if (file.type === 'image') {
			Dropbox.readImage(file.path).then(function(res) {
				// handle the returned blob and push it as a url to the file. *magic*
				var urlCreator = window.URL || window.webkitURL;
				var imageUrl = urlCreator.createObjectURL( res );
				file.src = imageUrl;
			});
		}
		else if (file.type === 'note') {
			Dropbox.readFile(file.path).then(function(res) {
				file.content = res;
				file.oldContent = res;
			});
		}
	};
	$scope.getThumbnail = function(file) {
		file.thumbnailUrl = Dropbox.thumbnailUrl(file.lastFile || file.path, { size: 'xl'});
	};

	// Edit Source - from click-to-edit directive
	$scope.editSource = function(newSource, callback) {
		// if source wasnt changed or is empty, skip saving
		if ($scope.file.source === newSource)
				return callback(undefined, true); // err - undefined; noChange - true

		var filePath,
				collectionPath,
				stackPath,
				tempContent,
				tempSize,
				tempTags,
				parsedPath = $scope.file.path.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');

		if ($scope.file.content && $scope.file.content !== null) {
			tempContent = $scope.file.content;
		}
		if ($scope.file.percentSize) {
			tempSize = $scope.file.percentSize;
		}
		if ($scope.file.tags && $scope.file.tags.length !== 0) {
			tempTags = $scope.file.tags;
		}
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

		var file = new File($scope.file);
		file.tags = _.pluck($scope.file.tags, '_id');
		file.source = newSource;
		file.user = $scope.global.user._id;
		file.$update({
			filename: filePath,
			collection: collectionPath,
			stack: stackPath
		},function() {
				$scope.file.content = tempContent;
				$scope.file.percentSize = tempSize;
				if (tempTags !== undefined)
					$scope.file.tags = tempTags;

				if (newSource === '') {
					$scope.file.source = null;
				}
				// refresh current view - collection/stack/inbox/recent
				$rootScope.$emit('refreshView', $scope.file, $scope.oldPageTitle);
				return callback();
		}, function() { // pass error if tag with new name already exists (handled in directive)
				return callback(true);
		});
	};

	// Rename File - from click-to-edit directive
	$scope.renameItem = function(newName, callback) {
		var tempContent, tempSize, tempTags;

		if ($scope.file.content !== null) {
			tempContent = $scope.file.content;
		}
		if ($scope.file.percentSize) {
			tempSize = $scope.file.percentSize;
		}
		if ($scope.file.tags && $scope.file.tags.length > 0) {
			tempTags = $scope.file.tags;
		}

		// if name wasnt changed or is empty, skip saving
		if (!newName || $scope.file.name === newName)
				return callback(undefined, true); // err - undefined; noChange - true

		var pathElts = $scope.file.path.split('/');
		var rgExtension = /.*(\.[^.]+)$/; // catches filename
		var newPathName = pathElts[pathElts.length - 1]; //old filename is last elt
		var fileExtension = ''; // if there's no file extension, it'll just be emtpy
		if (newPathName.match(rgExtension))	{
			var fileExtensionMatch = newPathName.match(rgExtension);
			fileExtension = fileExtensionMatch[1];
		}
		// safe name - replace '/' with ':', just like Dropbox API does
		var newSafeName = newName.replace(/\//g, ':');
		// final file name only
		var fileName = newSafeName + fileExtension;
		fileName = fileName.toLowerCase();

		var collectionName, stackName, newPath;
		if (pathElts.length === 2){ // inbox
			newPath = '/' + fileName;
		}
		if (pathElts.length === 3){ // collection
			collectionName = pathElts[1];
			newPath = '/' + collectionName + '/' + fileName;
		}
		if (pathElts.length === 4){ // stack
			collectionName = pathElts[1];
			stackName = pathElts[2];
			newPath = '/' + collectionName + '/' + stackName + '/' + fileName;
		}
		$scope.file = _.extend($scope.file, {
				name: newName,
				path: newPath,
				user: $scope.global.user._id
		});
		$scope.file.$move({
			filename: newPathName,
			collection: collectionName,
			stack: stackName
		}, function() {
				// update the favourites in the sidebar if necessary
				if ($scope.file.isFavourite)
					$rootScope.$emit('refreshSidebar');

				$scope.file.content = tempContent;
				$scope.file.percentSize = tempSize;
				if ($scope.file.source === '' || $scope.file.source === undefined) {
					$scope.file.source = null;
				}
				if (tempTags !== undefined)
					$scope.file.tags = tempTags;

				// refresh current view - collection/stack/inbox/recent
				$rootScope.$emit('refreshView', $scope.file, $scope.oldPageTitle);
				// modal open
				// $scope.filemodal.open($scope.file);
				return callback();
		}, function() { // pass error if tag with new name already exists (handled in directive)
				return callback(true);
		});
	};

	// Remove tag from the file (uses Tags model!)
	$scope.unassignTag = function(tag, item) {

		// make the tag into a proper resource
		tag = new Tags(tag);

		tag.item = {
			'_id': item._id,
			'name': item.name
		};
		// figure out if it's inbox, stack or collection.
		var count = item.path.match(/\//g);
		if (count.length === 1) tag.item.parent = 'inbox';
		else if (count.length === 2) tag.item.parent = 'collection';
		else tag.item.parent = 'stack';
		tag.item.kind = 'file';
		tag.$unassign(function() {

			// remove tag from array
			var tagIndex = _.findIndex(item.tags, {'_id' : tag._id});
			item.tags.splice(tagIndex, 1);

			// emit event that removes id from tag in sidebar controller
			$rootScope.$emit('removeFromTag', 'file', tag._id, item._id);
			item.modified = new Date();
		});
	};

	// handle Favourites remotely
	$scope.toggleFavourite = function(item) {
		if (item.isFavourite) {
			$scope.removeFavourite(item);
		} else {
			$scope.addFavourite(item);
		}
	};
	$scope.addFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		processedItem.kind = 'file';
		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;

		// Change favourite status immediately
		item.isFavourite = true;
		// push item state to listview item
		$scope._filemodalItem().isFavourite = true;

		File.addFavourite(processedItem, function success() { // res
			$scope.global.user.favourites.push(processedItem);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			// in case of an error, revert favourite status back to what it was originally
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
			item.isFavourite = !item.isFavourite;
			$scope._filemodalItem().isFavourite = !item.isFavourite;
		});
	};
	$scope.removeFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		processedItem.kind = 'file';
		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;

		// Change favourite status immediately
		item.isFavourite = false;
		// push item state to listview item
		$scope._filemodalItem().isFavourite = false;

		// send request and update sidebar
		File.removeFavourite(processedItem, function success() { // res
			// find item in $scope.global.user.favourites and remove
			var favIndex = _.findIndex($scope.global.user.favourites, {'path': item.path});
			$scope.global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			// in case of an error, revert favourite status back to what it was originally
			AlertsManager.addAlert(error.data.message, 'alert-error');
			item.isFavourite = !item.isFavourite;
			$scope._filemodalItem().isFavourite = !item.isFavourite;
		});
	};

	$scope.createNote = function() {
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

		var filename = this.name.replace(/\//g, ':');
		filename = filename.toLowerCase() + '.md'; // markdown extension
		var filepath = '/' + filename;
		filepath = Global.activeView.path.length === 1 ? filepath : Global.activeView.path + filepath;
		var file = new File({
			name: this.name,
			path: filepath,
			data: '# ' + this.name + ' \n' // initiate note with a title and a new line
		});
		file.$createNote({
			filename: filename,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		} ,function() {
			AlertsManager.addAlert('Note ' + file.name + ' created successfully', 'alert-success', 2500);
			$rootScope.$emit('refreshContent');
			$scope.modal.close();
		});

		this.name = '';
		this.path = '';
	};

	$scope.createFromURL = function() {
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

		this.url = this.url.split('?')[0]; // remove attributes from URL
		var rgFilename = /([^\/]+)$/;
		var filename = this.url.match(rgFilename);
		var filepath = '/' + filename[1];
		filepath = Global.activeView.path.length === 1 ? filepath : Global.activeView.path + filepath;
		var file = new File({
			path: filepath,
			url: this.url
		});
		file.$createFromURL({
			filename: filename[1],
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		}, function() {
			$rootScope.$emit('refreshContent');
			$scope.modal.close();
		}, function (data) {
			AlertsManager.addAlert(JSON.parse(data.data), 'alert-error', 2500);
			$scope.loading = false;
		});

		this.url = '';
	};

	$scope.remove = function(file) {
		if (file) {
			file.$remove();

			for (var i in $scope.files) {
				if ($scope.files[i] === file) {
					$scope.files.splice(i, 1);
				}
			}
		}
		else {
			$scope.file.$remove();
			$location.path('api/content/file' + file.path);
		}
	};

	$scope.update = function() {
		var filePath,
				collectionPath,
				stackPath,
				parsedPath = $scope.file.path.match(/^\/(.+)/),
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

		var file = $scope.file;
		file.user = $scope.global.user._id;

		file.$update({
			filename: filePath,
			collection: collectionPath,
			stack: stackPath,
		}, function() {
			AlertsManager.addAlert('Note saved successfully', 'alert-success');
		});
	};

	$scope.saveNote = function(event, saveQuietly) {
		if (event) // for keyboard shortcut
			event.preventDefault();

		// prevent saving if button animation is ongoing
		if ($scope.savingNote === true || $scope.savingDone === true)
			return;

		// toggle button classes
		$scope.savingNote = true; // saving note state
		if ($scope.file.content === $scope.file.oldContent) {
			// AlertsManager.addAlert('Note saved successfully', 'alert-success', 1500);
			$timeout(function () {
				$scope.savingDone = true;
				$scope.savingNote = false; // back to standard button after completing save
				$timeout(function () {
					$scope.savingDone = false; // back to standard button after completing save
				}, 1000);
			}, 400);
			return;
		}
		// update item in list view
		if ($scope._filemodalItem())
			$scope._filemodalItem().excerpt = $scope.file.content;

		// start save code
		var filePath,
				collectionPath,
				stackPath,
				tempContent,
				tempTags = $scope.file.tags,
				tempActiveView = $scope.global.activeView, // save resets activeView so we store temp
				parsedPath = $scope.file.path.match(/^\/(.+)/),
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
		tempContent = $scope.file.content;
		var file = $scope.file;
		file.user = $scope.global.user._id;

		file.$saveNote({
			filename: filePath,
			collection: collectionPath,
			stack: stackPath,
		}, function() {
			// scope values for the button
			$scope.savingNote = false;
			$scope.savingDone = true;
			$timeout(function () {
				$scope.savingDone = false; // back to standard button after completing save
			}, 1000);
			// for some reason this is necessary
			$scope.file.tags = tempTags;
			$scope.file.content = tempContent;
			$scope.file.oldContent = tempContent; // reassign old content
			$scope.refreshEditor = true;
			$scope.global.activeView = tempActiveView; // re-add activeView
			$scope.file.modified = new Date();
			// on modal close (without user saving)
			if (saveQuietly !== undefined && saveQuietly !== true){
				$rootScope.$emit('refreshView', $scope.file);
				AlertsManager.addAlert('Note saved successfully', 'alert-success', 1500);
			}
		});
	};

	$scope.findOne = function() {
		File.get({
			filename: $stateParams.filename,
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(file) {
			$scope.file = file;
			Global.activeView = file;

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
	$scope.findOneModal = function(passedFile, oldPageTitle) {
		$scope.file = undefined;
		var filePath,
				collectionPath,
				stackPath,
				tempContent,
				parsedPath = passedFile.path.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');

		// if file opened from list view
		// we have the content already, so we initialize it
		if (passedFile.excerpt) {
			$scope.file = new File(passedFile);
			$scope.file.content = $scope.file.excerpt;
			$scope.file.oldContent = passedFile.excerpt;
		}

		// if file is saved it's re-sent to the findOneModal with 'content' property
		// we can short circut it by reassigning the file that was saved
		if (passedFile.content){
			$scope.file = passedFile;
		}
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
		// if note is renamed we keep content without re-downloading it from Dropbox
		if (passedFile.content !== undefined) {
			tempContent = $scope.file.content;
		}
		File.get({
			filename: filePath,
			collection: collectionPath,
			stack: stackPath
		}, function(file) {
			if (passedFile.excerpt) {
				$scope.file = _.extend($scope.file, file, {
					content: passedFile.excerpt
				});
			} else {
				$scope.file = file;
				$scope.getContent($scope.file);
				if (tempContent !== null) {
					$scope.file.content = tempContent;
				}
			}
			// keep old color as reference
			$scope.oldColor = $rootScope.color;
			// set color if inbox file
			if (pathElts.length === 1) {
				$rootScope.color = 0;
			} else {
				$rootScope.color = file.color;
			}
			// get thumbnail for the share menu
			if (passedFile.thumbnailUrl !== undefined)
				$scope.file.thumbnailUrl = Dropbox.thumbnailUrl(file.lastFile || file.path, { size: 'm'});

			// store previous page title and set file name
			if (oldPageTitle)
				$scope.oldPageTitle = oldPageTitle;
			else
				$scope.oldPageTitle = Page.title();

			// initialise source for images if it's empty
			if (($scope.file.type === 'image' && $scope.file.source === undefined) || $scope.file.source === '' || $scope.file.source === null)
				$scope.file.source = null;

			Page.setTitle(file.name);

			// pre-seed image size - to be overwritten in fullImageLoaded directive once it loads
			if ($scope.file.type === 'image') {
				$scope.file.percentSize = 100;
			}
		});
		// revert back to old color after opening file!
		$scope.$on('$destroy', function () {
			$rootScope.color = $scope.oldColor;
			// revert back to old page title
			Page.setTitle($scope.oldPageTitle);

			// if it's a note, save on modal close
			if ($scope.file.type !== undefined && $scope.file.type === 'note' && $scope.file.content !== $scope.file.oldContent) {
				$scope.saveNote(null, false); // save in the background - without notification
			}
		});
	};
}]);
