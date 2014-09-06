'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Collection = mongoose.model('Collection'),
		Inbox = mongoose.model('Inbox'),
		Stack = mongoose.model('Stack'),
		User = mongoose.model('User'),
		Tag = mongoose.model('Tag'),
		File = mongoose.model('File'),
		Dropbox = require('dropbox'),
		config = require('../../../config/config'),
		move = require('./helpers/move'),
		async = require('async'),
		request = require('request').defaults({ encoding: null }),
		_ = require('lodash');

// Regexes
var rgStack = /^(.+\/.+)\/[^\/]+$/;
var rgCollection = /^(\/[^\/]*)\/[^\/]+$/;
var rgExtension = /.*\.([^.]+)$/;
var rgFilename = /(.*)\.[^.]+$/;

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
var supportedFiles = ['image/jpeg', 'image/png', 'image/gif',
											'text/plain', 'text/markdown', 'text/x-markdown', 'text/x-web-markdown'];

/**
 * Remove Favourite
 * Removeis item from the user.favourites
 */
var removeFavourite = function(removedItem, req, res, callback) {
	User.findOne({
		_id: req.user._id
	}, function(err, userResult) {
		var favIndex = _.findIndex(userResult.favourites, {'path': removedItem.path});
		userResult.favourites.splice(favIndex, 1);
		userResult.markModified('favourites');
		userResult.save(function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			callback();
		});
	});
};

/**
 * Update Tags
 * Removes file/stack references from tags if item had tags - for removeThing
 */
var updateTags = function(removedFile, req, res, callback) {
	async.each(removedFile.tags, function(tagId, next) {
		Tag.findOne({
			_id: tagId
		}, function(err, tagResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			if (!tagResult)
				return res.status(404).jsonp('Tag could not be found.');

			tagResult.files.splice(tagResult.files.indexOf(removedFile._id), 1);
			// // console.log(tagResult[kind]);
			tagResult.markModified('files');
			tagResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				next();
			});
		});
	}, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		callback();
	});
};

/**
 * Show File
 * Displays file info based on full file url
 */
exports.show = function(req, res) {

	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		file = req.params.file,
		belongsTo = 'collection',
		fileParent,
		user = req.user;

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + file;

	// set the belongsTo to correct value
	if (collection === '' && stack === '') belongsTo = 'inbox';
	if (collection !== '' && stack !== '') belongsTo = 'stack';

	switch (belongsTo) {
	case 'inbox':
		Inbox.findOne({
			user: user
		}).populate('files.tags').exec(function(err, inboxResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (inboxResult){
				// find index of a file we want to find
				var fileIndex = _.findIndex(inboxResult.files, {
					'path': path
				});
				// If file is found in inbox
				if (fileIndex !== -1){
					return res.jsonp(inboxResult.files[fileIndex]);
				} else {
					return res.status(404).jsonp('Inbox was found, but the file could not be located.');
				}
			} else {
				return res.status(404).jsonp('Inbox could not be found or user is not authorized.');
			}
		});
		break;
	case 'stack':
		// catch stack path from full path
		fileParent = path.match(rgStack);

		Stack.findOne({
			user: user,
			path: fileParent[1]
		}).populate('files.tags').exec(function(err, stackResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (stackResult){
				// find index of a file we want to find
				var fileIndex = _.findIndex(stackResult.files, {
					'path': path
				});
				// If file is found
				if (fileIndex !== -1){
					Collection.findOne({
						user: user,
						path: '/' + req.params.collection
					}, function (err, collectionResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						var tempFile = stackResult.files[fileIndex];
						tempFile = tempFile.toObject();
						tempFile.color = collectionResult.color;

						return res.jsonp(tempFile);
					});
				} else {
					return res.status(404).jsonp('Stack was found, but the file could not be located.');
				}
			} else {
				return res.status(404).jsonp('Stack could not be found or user is not authorized.');
			}
		});
		break;
	default:
		// catch stack path from full path
		fileParent = path.match(rgCollection);
		Collection.findOne({
			user: user,
			path: fileParent[1]
		}).populate('files.tags').exec(function(err, collectionResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (collectionResult){
				// find index of a file we want to find
				var fileIndex = _.findIndex(collectionResult.files, {
					'path': path
				});
				// If file is found
				if (fileIndex !== -1){
					var tempFile = collectionResult.files[fileIndex];
					tempFile = tempFile.toObject();
					tempFile.color = collectionResult.color;
					return res.jsonp(tempFile);
				} else {
					return res.status(404).jsonp('Collection was found, but the file could not be located.');
				}
			} else {
				return res.status(404).jsonp('Collection could not be found or user is not authorized.');
			}
		});
		break;
	}
};

exports.create = function(req, res) {
	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		filepath = req.params.file,
		belongsTo = Collection,
		// fileParent,
		rootPath = '/',
		user = req.user;

	// create rootPath before we muck up params
	if (collection !== '') rootPath = '/' + collection;
	if (stack !== '') rootPath = '/' + collection + '/' + stack;

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + filepath;
	path = path.toLowerCase();

	// set the belongsTo to correct value
	if (collection === '' && stack === '') belongsTo = Inbox;
	if (collection !== '' && stack !== '') belongsTo = Stack;

	var extension = req.body.name.match(rgExtension);
	var filename = req.body.name.match(rgFilename);
	var file = new File(req.body);
	file.name = filename ? filename[1] : req.body.name;
	file.type = handleFileType(req.body.mimeType, extension ? extension[1] : null);
	file.path = path;

	if (file.type === 'image')
		file.hasThumbnail = true;

	belongsTo.findOne({
		user: user,
		path: rootPath
	}, function (err, parentResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		if (!parentResult)
			return res.status(400).jsonp('Document could not be found.');

		parentResult.files.push(file);
		parentResult.save(function (err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			if (belongsTo !== Stack) { // return
				res.jsonp(file);
			} else { // if it's a stack, update abstract in parent
				Collection.findOne({
					user: req.user,
					path: '/' + req.params.collection
				}, function (err, collectionResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					if (!parentResult)
						return res.status(400).jsonp('Document could not be found.');

					/**
					* Update abstracted stacks
					**/
					var stackIndex = _.findIndex(collectionResult.stacks, {'path': rootPath});
					var tempStack = collectionResult.stacks[stackIndex];
					tempStack.modified = file.modified;
					tempStack.lastFile = file.path;
					// Remove old stack from collection
					collectionResult.stacks.splice(stackIndex, 1, tempStack);

					collectionResult.save(function (err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						res.jsonp(file);
					});
				});
			}
		});
	});
};

exports.createNote = function(req, res) {
	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		file = req.params.file,
		belongsTo = Collection,
		// fileParent,
		rootPath = '/',
		user = req.user;

	// create rootPath before we muck up params
	if (collection !== '') rootPath = '/' + collection;
	if (stack !== '') rootPath = '/' + collection + '/' + stack;

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + file;


	// set the belongsTo to correct value
	if (collection === '' && stack === '') belongsTo = Inbox;
	if (collection !== '' && stack !== '') belongsTo = Stack;

	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	// Call Dropbox first, then create a folder in our DB on callback
	// Second argument on .mkdir callback is a new folder stat object
	client.writeFile(path, req.body.data, { noOverwrite: true }, function(err, stat) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		var file = new File(req.body);
		file.path = stat.path.toLowerCase(); // in case file existed and hase '(1)' in name, etc.
		file.type = 'note';
		file.size = stat.humanSize;

		belongsTo.findOne({
			user: user,
			path: rootPath
		}, function (err, parentResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			if (!parentResult)
				return res.status(400).jsonp('Document could not be found.');

			parentResult.files.push(file);
			parentResult.save(function (err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				if (belongsTo !== Stack) { // return
					res.jsonp(file);
				} else { // if it's a stack, update abstract in parent
					Collection.findOne({
						user: req.user,
						path: '/' + req.params.collection
					}, function (err, collectionResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						if (!parentResult)
							return res.status(400).jsonp('Document could not be found.');

						/**
						* Update abstracted stacks
						**/
						var stackIndex = _.findIndex(collectionResult.stacks, {'path': rootPath});
						var tempStack = collectionResult.stacks[stackIndex];
						tempStack.modified = file.modified;
						tempStack.lastFile = file.path;
						// Remove old stack from collection
						collectionResult.stacks.splice(stackIndex, 1, tempStack);

						collectionResult.save(function (err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							res.jsonp(file);
						});
					});
				}
			});
		});
	});
};

exports.createFromURL = function (req, res) {
	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		filepath = req.params.file,
		belongsTo = Collection,
		// fileParent,
		rootPath = '/',
		user = req.user;

	// create rootPath before we muck up params
	if (collection !== '') rootPath = '/' + collection;
	if (stack !== '') rootPath = '/' + collection + '/' + stack;

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + filepath;


	// set the belongsTo to correct value
	if (collection === '' && stack === '') belongsTo = Inbox;
	if (collection !== '' && stack !== '') belongsTo = Stack;

	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});
	request.get(req.body.url, function (err, fileRes, body) {
		if (!err && fileRes.statusCode == 200 && _.indexOf(supportedFiles, fileRes.headers['content-type']) !== -1) {
			// Call Dropbox first, then create a folder in our DB on callback
			// Second argument on .mkdir callback is a new folder stat object
			client.writeFile(path, body, { noOverwrite: true }, function(err, stat) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				var filename = stat.name.match(rgFilename);
				var extension = stat.name.match(rgExtension);
				var file = new File({
					name: filename ? filename[1] : stat.name,
					path: stat.path.toLowerCase(),
					type: handleFileType(stat.mimeType, extension ? extension[1] : null),
					hasThumbnail: stat.hasThumbnail,
					size: stat.humanSize,
					modified: new Date(stat._json.modified)
				});

				belongsTo.findOne({
					user: user,
					path: rootPath
				}, function (err, parentResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					if (!parentResult)
						return res.status(400).jsonp('Document could not be found.');

					parentResult.files.push(file);
					parentResult.save(function (err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						if (belongsTo !== Stack) { // return
							res.jsonp(file);
						} else { // if it's a stack, update abstract in parent
							Collection.findOne({
								user: req.user,
								path: '/' + req.params.collection
							}, function (err, collectionResult) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								if (!parentResult)
									return res.status(400).jsonp('Document could not be found.');

								/**
								* Update abstracted stacks
								**/
								var stackIndex = _.findIndex(collectionResult.stacks, {'path': rootPath});
								var tempStack = collectionResult.stacks[stackIndex];
								tempStack.modified = file.modified;
								tempStack.lastFile = file.path;
								// Remove old stack from collection
								collectionResult.stacks.splice(stackIndex, 1, tempStack);

								collectionResult.save(function (err) {
									if (err)
										return res.status(400).jsonp({	errors: err });

									res.jsonp(file);
								});
							});
						}
					});
				});
			});
		} else {
			res.status(400).jsonp('This URL is not supported');
		}
	});
};

exports.update = function(req, res) {

	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		file = req.params.file,
		belongsTo = 'collection',
		fileParent,
		user = req.user;

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + file;

	// set the belongsTo to correct value
	if (collection === '' && stack === '') belongsTo = 'inbox';
	if (collection !== '' && stack !== '') belongsTo = 'stack';


	// Set modified date
	var saveDate = new Date();
	req.body.modified = saveDate;

	switch (belongsTo) {
	case 'inbox':
		Inbox.findOne({
			user: user
		}, function(err, resultInbox) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (resultInbox){
				// find index of a file we want to find
				var fileIndex = _.findIndex(resultInbox.files, {
					'path': path
				});
				// If file is found in inbox
				if (fileIndex !== -1){
					// get ID of file in that position
					resultInbox.files[fileIndex] = _.extend(resultInbox.files[fileIndex], req.body);
					resultInbox.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });
						else
							res.jsonp(resultInbox.files[fileIndex]);
					});
				} else {
					return res.status(404).jsonp('Inbox was found, but the file could not be located.');
				}
			} else {
				return res.status(404).jsonp('Inbox could not be found or user is not authorized.');
			}
		});
		break;
	case 'stack':
		// catch stack path from full path
		fileParent = path.match(rgStack);
		Stack.findOne({
			user: user,
			path: fileParent[1]
		}, function(err, resultStack) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (resultStack){
				// find index of a file we want to find
				var fileIndex = _.findIndex(resultStack.files, {
					'path': path
				});
				// If file is found
				if (fileIndex !== -1){
					resultStack.files[fileIndex] = _.extend(resultStack.files[fileIndex], req.body);
					resultStack.save(function(err) {
						if (err){
							return res.status(400).jsonp({	errors: err });
						} else {
							// If saved successfully, Update collection stack with modified date and file
							Collection.findOne({
								user: user,
								path: '/' + req.params.collection
							}, function(err, resultCollection) {
								if (err)
									return res.status(400).jsonp({	errors: err });
								// If collection is found
								if (resultCollection){
									// Set stack path from parsed params
									var stackPath = '/' + collection + req.params.stack ;
									// Find stack in collection
									var stackIndex = _.findIndex(resultCollection.stacks, {
										'path': stackPath
									});
									// Create temp stack object because .save() doesn't update
									// nested documents well enough. Bug here:
									// https://github.com/LearnBoost/mongoose/issues/1204
									var stackTemp = resultCollection.stacks[stackIndex];
									stackTemp.modified = saveDate;
									stackTemp.lastFile = req.body.path;
									// Update stack and collection
									resultCollection.modified = saveDate;
									// Remove stack from collection and replace it with the copy
									resultCollection.stacks.splice(stackIndex, 1);
									resultCollection.stacks.push(stackTemp);
									resultCollection.save(function(err) {
										if (err)
											return res.status(400).jsonp({	errors: err });
										res.jsonp(resultStack.files[fileIndex]);
									});
								}
							});
						}
					});
				} else {
					return res.status(404).jsonp('Stack was found, but the file could not be located.');
				}
			} else {
				return res.status(404).jsonp('Stack could not be found or user is not authorized.');
			}
		});
		break;
	default:
		// catch stack path from full path
		fileParent = path.match(rgCollection);
		Collection.findOne({
			user: user,
			path: fileParent[1]
		}, function(err, resultCollection) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (resultCollection){
				// find index of a file we want to find
				var fileIndex = _.findIndex(resultCollection.files, {
					'path': path
				});
				// If file is found
				if (fileIndex !== -1){
					resultCollection.files[fileIndex] = _.extend(resultCollection.files[fileIndex], req.body);

					resultCollection.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });
						else
							res.jsonp(resultCollection.files[fileIndex]);
					});
				} else {
					return res.status(404).jsonp('Collection was found, but the file could not be located.');
				}
			} else {
				return res.status(404).jsonp('Collection could not be found or user is not authorized.');
			}
		});
		break;
	}
};

exports.destroy = function(req, res) {

	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		file = req.params.file,
		belongsTo = 'collection',
		fileParent,
		hasTags,
		rootPath = '/',
		user = req.user;

	// create rootPath before we muck up params
	if (collection !== '') rootPath = '/' + collection;
	if (stack !== '') rootPath = '/' + collection + '/' + stack;

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + file;
	path = path.toLowerCase();

	// set the belongsTo to correct value
	if (collection === '' && stack === '') belongsTo = 'inbox';
	if (collection !== '' && stack !== '') belongsTo = 'stack';

	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	switch (belongsTo) {
	case 'inbox':
		Inbox.findOne({
			user: user
		}, function(err, resultInbox) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (resultInbox){
				// find index of a file we want to find
				var fileIndex = _.findIndex(resultInbox.files, {
					'path': path
				});
				// If file is found in inbox
				if (fileIndex !== -1){
					client.remove(path, function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });
						// Remove file from the array and save the array
						var removedFile = resultInbox.files[fileIndex];
						if (0 < removedFile.tags.length)
							hasTags = true;

						resultInbox.files.splice(fileIndex, 1);
						resultInbox.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							if (removedFile.isFavourite){
								removeFavourite(removedFile, req, res, function() {
									if (hasTags) {
										// remove tags
										updateTags(removedFile, req, res, function() {
											res.jsonp(removedFile);
										});
									} else {
										res.jsonp(removedFile);
									}
								});
							} else if (hasTags) {
								// remove tags
								updateTags(removedFile, req, res, function() {
									res.jsonp(removedFile);
								});
							} else {
								res.jsonp(removedFile);
							}
						});
					});
				} else {
					return res.status(404).jsonp('Inbox was found, but the file could not be located.');
				}
			} else {
				return res.status(404).jsonp('Inbox could not be found or user is not authorized.');
			}
		});
		break;
	case 'stack':
		// catch stack path from full path
		fileParent = path.match(rgStack);
		Stack.findOne({
			user: user,
			path: fileParent[1]
		}, function(err, resultStack) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (resultStack){
				// sort files by date and reverse
				resultStack.files = _.sortBy(resultStack.files, ['modified', 'name']).reverse();
				// find index of a file we want to find
				var fileIndex = _.findIndex(resultStack.files, {
					'path': path
				});
				// If file is found
				if (fileIndex !== -1){
					client.remove(path, function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// Remove file from the array and save the array
						var removedFile = resultStack.files[fileIndex];
						if (0 < removedFile.tags.length)
							hasTags = true;
						resultStack.files.splice(fileIndex, 1);
						resultStack.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							if (fileIndex === 0) {
								Collection.findOne({
									user: req.user,
									path: '/' + req.params.collection
								}, function (err, collectionResult) {
									if (err)
										return res.status(400).jsonp({	errors: err });

									if (!collectionResult)
										return res.status(400).jsonp('Document could not be found.');

									/**
									* Update abstracted stacks
									**/
									var stackIndex = _.findIndex(collectionResult.stacks, {'path': rootPath});
									var tempStack = collectionResult.stacks[stackIndex];
									tempStack.modified = resultStack.files[0].modified;
									tempStack.lastFile = resultStack.files[0].path;
									// Remove old stack from collection
									collectionResult.stacks.splice(stackIndex, 1, tempStack);

									collectionResult.save(function (err) {
										if (err)
											return res.status(400).jsonp({	errors: err });

										if (removedFile.isFavourite){
											removeFavourite(removedFile, req, res, function() {
												if (hasTags) {
													// remove tags
													updateTags(removedFile, req, res, function() {
														res.jsonp(removedFile);
													});
												} else {
													res.jsonp(removedFile);
												}
											});
										} else if (hasTags) {
											// remove tags
											updateTags(removedFile, req, res, function() {
												res.jsonp(removedFile);
											});
										} else {
											res.jsonp(removedFile);
										}
									});
								});

							} else {
								if (removedFile.isFavourite){
									removeFavourite(removedFile, req, res, function() {
										if (hasTags) {
											// remove tags
											updateTags(removedFile, req, res, function() {
												res.jsonp(removedFile);
											});
										} else {
											res.jsonp(removedFile);
										}
									});
								} else if (hasTags) {
									// remove tags
									updateTags(removedFile, req, res, function() {
										res.jsonp(removedFile);
									});
								} else {
									res.jsonp(removedFile);
								}
							}
						});
					});
				} else {
					return res.status(404).jsonp('Stack was found, but the file could not be located.');
				}
			} else {
				return res.status(404).jsonp('Stack could not be found or user is not authorized.');
			}
		});
		break;
	default:
		// catch stack path from full path
		fileParent = path.match(rgCollection);
		Collection.findOne({
			user: user,
			path: fileParent[1]
		}, function(err, resultCollection) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (resultCollection){
				// find index of a file we want to find
				var fileIndex = _.findIndex(resultCollection.files, {
					'path': path
				});
				// If file is found
				if (fileIndex !== -1){
					client.remove(path, function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });
						// Remove file from the array and save the array
						var removedFile = resultCollection.files[fileIndex];
						if (0 < removedFile.tags.length)
							hasTags = true;

						resultCollection.files.splice(fileIndex, 1);
						resultCollection.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							if (removedFile.isFavourite){
								removeFavourite(removedFile, req, res, function() {
									if (hasTags) {
										// remove tags
										updateTags(removedFile, req, res, function() {
											res.jsonp(removedFile);
										});
									} else {
										res.jsonp(removedFile);
									}
								});
							} else if (hasTags) {
								// remove tags
								updateTags(removedFile, req, res, function() {
									res.jsonp(removedFile);
								});
							} else {
								res.jsonp(removedFile);
							}
						});
					});
				} else {
					return res.status(404).jsonp('Collection was found, but the file could not be located.');
				}
			} else {
				return res.status(404).jsonp('Collection could not be found or user is not authorized.');
			}
		});
		break;
	}

};

exports.saveNote = function(req, res) {

	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		file = req.params.file,
		belongsTo = 'collection',
		fileParent,
		user = req.user;

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + file;

	// set the belongsTo to correct value
	if (collection === '' && stack === '') belongsTo = 'inbox';
	if (collection !== '' && stack !== '') belongsTo = 'stack';


	// Set modified date
	var saveDate = new Date();
	req.body.modified = saveDate;

	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	client.writeFile(path, req.body.content, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		switch (belongsTo) {
		case 'inbox':
			Inbox.findOne({
				user: user
			}, function(err, resultInbox) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				if (resultInbox){
					// find index of a file we want to find
					var fileIndex = _.findIndex(resultInbox.files, {
						'path': path
					});
					// If file is found in inbox
					if (fileIndex !== -1){
						// get ID of file in that position
						resultInbox.files[fileIndex].modified = new Date();
						resultInbox.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });
							else
								res.jsonp(resultInbox.files[fileIndex]);
						});
					} else {
						return res.status(404).jsonp('Inbox was found, but the file could not be located.');
					}
				} else {
					return res.status(404).jsonp('Inbox could not be found or user is not authorized.');
				}
			});
			break;
		case 'stack':
			// catch stack path from full path
			fileParent = path.match(rgStack);
			Stack.findOne({
				user: user,
				path: fileParent[1]
			}, function(err, resultStack) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				if (resultStack){
					// find index of a file we want to find
					var fileIndex = _.findIndex(resultStack.files, {
						'path': path
					});
					// If file is found
					if (fileIndex !== -1){
						resultStack.files[fileIndex].modified = new Date();
						resultStack.markModified('files');
						resultStack.save(function(err) {
							if (err){
								return res.status(400).jsonp({	errors: err });
							} else {
								// If saved successfully, Update collection stack with modified date and file
								Collection.findOne({
									user: user,
									path: '/' + req.params.collection
								}, function(err, resultCollection) {
									if (err)
										return res.status(400).jsonp({	errors: err });
									// If collection is found
									if (resultCollection){
										// Set stack path from parsed params
										var stackPath = '/' + collection + req.params.stack ;
										// Find stack in collection
										var stackIndex = _.findIndex(resultCollection.stacks, {
											'path': stackPath
										});
										// Create temp stack object because .save() doesn't update
										// nested documents well enough. Bug here:
										// https://github.com/LearnBoost/mongoose/issues/1204
										var stackTemp = resultCollection.stacks[stackIndex];
										stackTemp.modified = saveDate;
										stackTemp.lastFile = req.body.path;
										// Update stack and collection
										resultCollection.modified = saveDate;
										// Remove stack from collection and replace it with the copy
										resultCollection.stacks.splice(stackIndex, 1);
										resultCollection.stacks.push(stackTemp);
										resultCollection.save(function(err) {
											if (err)
												return res.status(400).jsonp({	errors: err });
											res.jsonp(resultStack.files[fileIndex]);
										});
									}
								});
							}
						});
					} else {
						return res.status(404).jsonp('Stack was found, but the file could not be located.');
					}
				} else {
					return res.status(404).jsonp('Stack could not be found or user is not authorized.');
				}
			});
			break;
		default:
			// catch stack path from full path
			fileParent = path.match(rgCollection);
			Collection.findOne({
				user: user,
				path: fileParent[1]
			}, function(err, resultCollection) {

				// console.log(err);
				if (err)
					return res.status(400).jsonp({	errors: err });
				if (resultCollection){
					// find index of a file we want to find
					var fileIndex = _.findIndex(resultCollection.files, {
						'path': path
					});
					// If file is found
					if (fileIndex !== -1){
						resultCollection.files[fileIndex].modified = new Date();
						resultCollection.markModified('files');
						resultCollection.save(function(err) {
							// console.log(err);
							if (err)
								return res.status(400).jsonp({	errors: err });
							res.jsonp(resultCollection.files[fileIndex]);
						});
					} else {
						return res.status(404).jsonp('Collection was found, but the file could not be located.');
					}
				} else {
					return res.status(404).jsonp('Collection could not be found or user is not authorized.');
				}
			});
			break;
		}
	});

};

exports.move = function(req, res) {
	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		file = req.params.file,
		belongsTo = 'collection';

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + file;
	var newPath = req.body.path.toLowerCase();

	// set the belongsTo to correct value
	if (collection === '' && stack === '') belongsTo = 'inbox';
	if (collection !== '' && stack !== '') belongsTo = 'stack';

	// Counts slashes - 1 - inbox, 2 - collection, 3 - stack, 4 - invalid for new path
	var countSlashes = req.body.path.match(/\//g);
	// console.log('Moving file from '+ path + ' to ' + newPath);

	// Find right function based on the parameters.
	switch(countSlashes.length) {
		case 1:
			if (belongsTo === 'inbox')
				move.inboxToInbox(req, res, path, newPath);
			if (belongsTo === 'collection')
				move.collectionToInbox(req, res, path, newPath);
			if (belongsTo === 'stack')
				move.stackToInbox(req, res, path, newPath);
			break;
		case 2:
			if (belongsTo === 'inbox')
				move.inboxToCollection(req, res, path, newPath);
			if (belongsTo === 'collection')
				move.collectionToCollection(req, res, path, newPath);
			if (belongsTo === 'stack')
				move.stackToCollection(req, res, path, newPath);
			break;
		case 3:
			if (belongsTo === 'inbox')
				move.inboxToStack(req, res, path, newPath);
			if (belongsTo === 'collection')
				move.collectionToStack(req, res, path, newPath);
			if (belongsTo === 'stack')
				move.stackToStack(req, res, path, newPath);
			break;
		default:
			// If the path doesn't have any slashes or has more than 3, it's invalid
			res.jsonp({
				errors: 'Invalid path specified.'
			});
	}
};

/**
 * Get Data
 * Loads raw file data from Dropbox API and sends it to client as base64
 */
exports.makeUrl = function(req, res) {
	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		file = req.params.file,
		user = req.user;

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + file;
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	client.makeUrl(path, {download: true}, function(err, url) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		res.jsonp(url);
	});
};

/**
* Make URL
* generates public shareable URL and pushes it back to the client
*/
exports.shareUrl = function(req, res) {
	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		file = req.params.file,
		user = req.user;

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + file;
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	client.makeUrl(path, function(err, url) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		res.jsonp(url);
	});
};
