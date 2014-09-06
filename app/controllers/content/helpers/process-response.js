'use strict';

var mongoose = require('mongoose'),
		File = mongoose.model('File'),
		MiniStack = mongoose.model('MiniStack'),
		_ = require('lodash');


// Regular Expressions
// this catches all strings that start with with and have only one '/'
var rgRoot = /^\/[^\/]+$/;
// Filter out name from full filename/path
var rgFilename = /(.*)\.[^.]+$/;
// Filter out extension from name
var rgExtension = /.*\.([^.]+)$/;
// catch all files in a collection, exclude stacks - stores folder path in [1]
var rgNested = /^(\/[^\/]*)\/[^\/]+$/;
// catch only stack files - returns stack path
var rgStack = /^(.+\/.+)\/[^\/]+$/;
// catch stack parent for easier finding later
// var rgStackParent = / /;
// ^(\/[a-zA-Z0-9\ ?-_%*:|\"<>]*)\/[^\/]+$
// Test for invalid nesting - if more than 4 slashes in a path
var rgInvalid = /^([^\/]*\/){4}/;
// find all colons in a string - for fixing slashes in collection names
var rgColon = /[:]/m;

// Check kind of a passed path for removal
var findKind = function(path) {
	if (path.match(rgRoot)) return 'root';
	if (path.match(rgNested)) return 'nested';
	if (path.match(rgStack)) return 'stackFile';
};

var findParent = function(path) {
	var fileParent;
	if (path.match(rgNested)){
		fileParent = path.match(rgNested);
		return fileParent[1];
	} else if (path.match(rgStack)) {
		fileParent = path.match(rgStack);
		return fileParent[1];
	}
};

/*
 * Convert MIME filetype to something more general
 * Types: 'note', 'image', 'link', 'other'
 */
var handleFileType = function(typeSrc, extension) {
	switch (typeSrc) {
	case 'image/jpeg':
	case 'image/png':
	case 'image/gif':
		return 'image';

	case 'text/plain':
	case 'text/markdown':
	case 'text/x-markdown':
	case 'text/x-web-markdown':
		return 'note';

	case 'text/url':
	case 'text/x-url':
	case 'application/x-url':
	case 'message/external-body':
	case 'wwwserver/redirection':
	case 'application/internet-shortcut':
		return 'link';

	default:
		if (extension === 'txt' || extension === 'markdown' || extension === 'mdown' || extension === 'mkdn' || extension === 'md' || extension === 'mkd' || extension === 'mdwn' || extension === 'mdtxt' || extension === 'mdtext' || extension === 'text' ) {
			return 'note';
		} else if (extension === 'url'){
			return 'link';
		} else {
			return 'other';
		}
	}
};

/**
 * Process Response function
 * Takes results from Δ and splits it into a cute Mongo-friendly puppy.
 */
module.exports = function (response, result) {
	var i, _this, filename, extension, file, collection, fixSlash, stack, fileParent, parentIndex, stackParent, collectionIndex, miniStack;

	/**
	* Handle Invalid Files
	* Takes results from Δ and splits it into inbox and collection objects.
	*/
	for(i = response.changes.length - 1; i>=0; i--){
		// assign changes array to this
		_this = response.changes[i];

		if (_this.path.match(rgInvalid) && _this.stat !== null){
			// if invalid result is found, remove it
			response.changes.splice(i, 1);
		}
		if (_this.path.match(rgStack) && _this.stat !== null && _this.stat.isFolder){
			// if invalid result is found, remove it
			response.changes.splice(i, 1);
		}
	}

	/**
	 * Prepare Inbox and Collections
	 * Takes results from Δ and splits it into inbox and collection objects.
	 */
	for(i = response.changes.length - 1; i>=0; i--){
		// assign changes array to this
		_this = response.changes[i];
		// convert paths to lowercase
		_this.path = _this.path.toLowerCase();

		// ADD INBOX FILES
		// Checks if object is in root, has it been added and if it is a file
		if (_this.path.match(rgRoot) && _this.stat !== null && _this.stat.isFile){
			// handle the returned changes
			filename = _this.stat.name.match(rgFilename);
			extension = _this.stat.name.match(rgExtension);
			var inboxFile = {
				// if it has an extension, use regex result, else use full name
				name: filename ? filename[1] : _this.stat.name,
				path: _this.path,
				size: _this.stat.humanSize,
				type: handleFileType(_this.stat.mimeType, extension ? extension[1] : null),
				hasThumbnail: _this.stat.hasThumbnail,
				modified: new Date(_this.stat._json.modified)
			};
			// Initialize File
			file = new File();
			_.extend(file, inboxFile);
			// Push inbox files
			result.inbox.files.push(file);
		}

		// ADD COLLECTIONS
		// Create mock collections
		if (_this.path.match(rgRoot) && _this.stat !== null && _this.stat.isFolder){
			// Convert colons to slashes in Collection Names
			fixSlash = _this.stat.name.replace(rgColon, '/');
			collection = {
				name: fixSlash ? fixSlash : _this.stat.name,
				path: _this.path,
				files: [],
				stacks: []
			};
			// push new collections
			result.collections.push(collection);
		}
	}


	/**
	 * Prepare Collection Files
	 * Takes files from Δ and puts them in the right collection object
	 */
	for(i = response.changes.length - 1; i>=0; i--){
		// assign changes array to this
		_this = response.changes[i];

		// ADD COLLECTION FILES
		// Create files that belong to collections and push them
		if (_this.path.match(rgNested) && _this.stat !== null && _this.stat.isFile){
			filename = _this.stat.name.match(rgFilename);
			extension = _this.stat.name.match(rgExtension);

			var collectionFile = {
				// if it has an extension, use regex result, else use full name
				name: filename ? filename[1] : _this.stat.name,
				path: _this.path,
				size: _this.stat.humanSize,
				type: handleFileType(_this.stat.mimeType, extension ? extension[1] : null),
				hasThumbnail: _this.stat.hasThumbnail,
				modified: new Date(_this.stat._json.modified)
			};

			// Initialize File
			file = new File();
			_.extend(file, collectionFile);

			fileParent = _this.path.match(rgNested);
			if(fileParent && fileParent.length > 0){
				// find index of collection in collections array
				parentIndex = _.findIndex(result.collections, {'path': fileParent[1]});
				// if collection doesnt exist in the mock object, it must be in db
				// so we create a mock collection anyway and push the file to it.
				// logic of updating an existing one is handled later on.
				if (parentIndex === -1){
					// create mock collection with parent and push file there.
					collection = {
						path: fileParent[1],
						files: [],
						stacks: []
					};
					// push file to new mock collection
					collection.files.push(file);
					// push mock collection to result object
					result.collections.push(collection);

				} else {
					result.collections[parentIndex].files.push(file);
				}
			}

		}
	}



	/**
	 * Prepare Stacks
	 * Takes results from Δ and creates stack objects
	 */
	for(i = response.changes.length - 1; i>=0; i--){
		// assign changes array to this
		_this = response.changes[i];

		// ADD STACKS
		// Create mock stacks
		if (_this.path.match(rgNested) && _this.stat !== null && _this.stat.isFolder){
			// Convert colons back to slashes in Stack Names
			fixSlash = _this.stat.name.replace(rgColon, '/');
			stack = {
				name: fixSlash ? fixSlash : _this.stat.name,
				modified: _this.stat.modifiedAt,
				path: _this.path,
				files: []
			};
			// push new collections
			result.stacks.push(stack);
		}
	}


	/**
	 * Prepare Stack Files
	 * Takes files from Δ and puts them in the right stack object
	 */
	for(i = response.changes.length - 1; i>=0; i--){
		// assign changes array to this
		_this = response.changes[i];

		// ADD Stack FILES
		// Create files that belong to stacks and push them
		if (_this.path.match(rgStack) && _this.stat !== null && _this.stat.isFile){
			filename = _this.stat.name.match(rgFilename);
			extension = _this.stat.name.match(rgExtension);

			var stackFile = {
				// if it has an extension, use regex result, else use full name
				name: filename ? filename[1] : _this.stat.name,
				path: _this.path,
				size: _this.stat.humanSize,
				type: handleFileType(_this.stat.mimeType, extension ? extension[1] : null),
				hasThumbnail: _this.stat.hasThumbnail,
				modified: new Date(_this.stat._json.modified)
			};

			// Initialize File
			file = new File();
			_.extend(file, stackFile);

			fileParent = _this.path.match(rgStack);
			if(fileParent && fileParent.length > 0){
				// find index of stack in stacks array
				parentIndex = _.findIndex(result.stacks, {'path': fileParent[1]});
				// if stack doesnt exist in the mock object, it must be in db
				// so we create a mock stack anyway and push the file to it.
				// logic of updating an existing one is handled later on.
				if (parentIndex === -1){
					// create mock stack with parent and push file there.
					fixSlash = _this.stat.name.replace(rgColon, '/');
					stack = {
						path: fileParent[1],
						files: []
					};
					// push file to new mock stack
					stack.files.push(file);
					// push mock stack to result object
					result.stacks.push(stack);

				} else {
					result.stacks[parentIndex].files.push(file);
				}
			}

		}
	}


	/**
	* Populate Collections with Stacks
	* Takes stacks from the 'stacks' result array and pushes them
	* to their respective collections
	*/
	for(i = result.stacks.length - 1; i>=0; i--){
		// assign changes array to this
		_this = result.stacks[i];
		// reset values, because otherwise they're saved through loops
		var stackModified = _this.modified;
		var lastFile = null;

		// If any file was modified after the stack was, handle that
		if (0 < _this.files.length){
			stackModified	= _this.files[0].modified;
			lastFile = _this.files[0].path;
		} else {
			stackModified	= new Date();
			lastFile = '';
		}
		var stackReference = {
			path: _this.path,
			name: _this.name,
			modified: stackModified,
			lastFile: lastFile
		};
		// create an actual mini stack object and populate it
		miniStack = new MiniStack();
		_.extend(miniStack, stackReference);

		stackParent = _this.path.match(rgNested);
		collectionIndex = _.findIndex(result.collections, {'path' : stackParent[1]});

		if (collectionIndex === -1){
			// create mock collection with parent and push file there.
			collection = {
				path: stackParent[1],
				files: [],
				stacks: []
			};
			// push file to new mock collection
			collection.stacks.push(miniStack);
			// push mock collection to result object
			result.collections.push(collection);

		} else {
			result.collections[collectionIndex].stacks.push(miniStack);
		}

	}

	/**
	 * Gather wasRemoved
	 * Puts all files and collections in a separate object
	 */
	for(i = response.changes.length - 1; i>=0; i--){
		// assign changes array to this
		_this = response.changes[i];

		// CASE REMOVE - Inbox files and collections!
		if (_this.wasRemoved) {
			var removable = {
				path: _this.path,
				kind: findKind(_this.path),
				parent: findParent(_this.path)
			};
			result.remove.push(removable);
		}
	}

	/**
		* Collection Removed
		* Test if whole collection is removed
		* checks if parent exists as a path,
		* then remove all entries with that parent
		*/
	if (result.remove){
		for(i = result.remove.length - 1; i>=0; i--){
			_this = result.remove[i];
			// if object has a parent
			if (_this.parent){
				// find parents position in the array
				var index = _.findIndex(result.remove, {
					'path':  result.remove[i].parent
				});
				// if parent exists
				if (index !== -1){
					// remove this entry from the array
					_.pull(result.remove, result.remove[i]);
				}
			}
		}
	}

	return result;
};
