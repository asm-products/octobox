'use strict';

var mongoose = require('mongoose'),
		Collection = mongoose.model('Collection'),
		Inbox = mongoose.model('Inbox'),
		Stack = mongoose.model('Stack'),
		User = mongoose.model('User'),
		Dropbox = require('dropbox'),
		config = require('../../../../config/config'),
		_ = require('lodash');


// catch only stack files - returns stack path
var rgStack = /^(.+\/.+)(\/[^\/]+)$/;
// catch collection from the full file
var rgFindCollection = /^(\/[^\/]*)/;

/**
 * Update Favourite
 * Updates the user.favourites item with new name and path
 */
var updateFavourite = function(oldPath, newPath, req, res, callback) {
	User.findOne({
		_id: req.user._id
	}, function(err, userResult) {
		var favIndex = _.findIndex(userResult.favourites, {'path': oldPath});
		userResult.favourites[favIndex].path = newPath;
		userResult.favourites[favIndex].name = req.body.name;
		userResult.markModified('favourites');
		userResult.save(function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			callback();
		});
	});
};

/**
 * Inbox to Inbox
 * Moves file from Inbox to Inbox (file rename essentially)
 */
exports.inboxToInbox = function(req, res, oldPath, newPath) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: req.user.dropbox.token
	});

	client.move(oldPath, newPath, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		Inbox.findOne({
			user: req.user
		}, function(err, inboxResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find file in inbox
			var fileInPath = _.findIndex(inboxResult.files, {'path' : oldPath});
			if (fileInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
			var fileTemp = inboxResult.files[fileInPath];
			fileTemp.modified = new Date();
			fileTemp.path = newPath;
			fileTemp.name = req.body.name;
			// remove old file and add new from temp in the same place
			inboxResult.files.splice(fileInPath, 1, fileTemp);
			inboxResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				if (fileTemp.isFavourite)
					updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
				else
					res.jsonp(fileTemp);
			});
		});
	});
};

/**
 * Inbox to Collction
 * Moves file from Inbox to a collection
 */
exports.inboxToCollection = function(req, res, oldPath, newPath) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: req.user.dropbox.token
	});

	client.move(oldPath, newPath, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		Inbox.findOne({
			user: req.user
		}, function(err, inboxResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			var modifiedDate = new Date();
			// find file in inbox
			var fileInPath = _.findIndex(inboxResult.files, {'path' : oldPath});
			if (fileInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
			var fileTemp = inboxResult.files[fileInPath];
			fileTemp.modified = modifiedDate;
			fileTemp.path = newPath;
			fileTemp.name = req.body.name;
			// remove old file and save
			inboxResult.files.splice(fileInPath, 1);
			inboxResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// find collection
				var collectionPath = newPath.match(rgFindCollection);
				Collection.findOne({
					user: req.user,
					path: collectionPath[1]
				}, function(err, collectionResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					collectionResult.files.unshift(fileTemp);
					collectionResult.modified = modifiedDate;
					collectionResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						if (fileTemp.isFavourite)
							updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
						else
							res.jsonp(fileTemp);
					});
				});
			});
		});
	});
};

/**
 * Inbox to Stack
 * Moves file from Inbox to a stack
 */
exports.inboxToStack = function(req, res, oldPath, newPath) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: req.user.dropbox.token
	});

	client.move(oldPath, newPath, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		Inbox.findOne({
			user: req.user
		}, function(err, inboxResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			var modifiedDate = new Date();
			// find file in inbox
			var fileInPath = _.findIndex(inboxResult.files, {'path' : oldPath});
			if (fileInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
			var fileTemp = inboxResult.files[fileInPath];
			fileTemp.modified = modifiedDate;
			fileTemp.path = newPath;
			fileTemp.name = req.body.name;
			// remove old file and save
			inboxResult.files.splice(fileInPath, 1);
			inboxResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// find collection
				var collectionPath = newPath.match(rgFindCollection);
				Collection.findOne({
					user: req.user,
					path: collectionPath[1]
				}, function(err, collectionResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// update Stack in collection with new File Details
					var stackPath = newPath.match(rgStack);
					var stackInCollection = _.findIndex(collectionResult.stacks, {'path' : stackPath[1]});
					var stackTemp = collectionResult.stacks[stackInCollection];
					stackTemp.modified = modifiedDate;
					stackTemp.lastFile = newPath;
					collectionResult.stacks.splice(stackInCollection, 1, stackTemp);

					collectionResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						Stack.findOne({
							user: req.user,
							path: stackPath[1]
						}, function(err, stackResult) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							stackResult.files.unshift(fileTemp);
							stackResult.modified = modifiedDate;
							stackResult.save(function(err) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								if (fileTemp.isFavourite)
									updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
								else
									res.jsonp(fileTemp);
							});
						});
					});
				});
			});
		});
	});

};

/**
 * Collection to Inbox
 * Moves file from Collection to Inbox
 */
exports.collectionToInbox = function(req, res, oldPath, newPath) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: req.user.dropbox.token
	});

	client.move(oldPath, newPath, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		var collectionPath = oldPath.match(rgFindCollection);
		Collection.findOne({
			user: req.user,
			path: collectionPath[1]
		}, function(err, collectionResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find file in collection
			var fileInPath = _.findIndex(collectionResult.files, {'path' : oldPath});
			if (fileInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
			var fileTemp = collectionResult.files[fileInPath];
			fileTemp.modified = new Date();
			fileTemp.path = newPath;
			fileTemp.name = req.body.name;
			collectionResult.modified = new Date();
			// remove file from collection
			collectionResult.files.splice(fileInPath, 1);
			// save collection
			collectionResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				Inbox.findOne({
					user: req.user
				}, function(err, inboxResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					inboxResult.files.unshift(fileTemp);

					inboxResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						if (fileTemp.isFavourite)
							updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
						else
							res.jsonp(fileTemp);
					});
				});
			});
		});
	});
};

/**
 * Collection to Collection
 * Moves file from Collection to a different collection
 */
exports.collectionToCollection = function(req, res, oldPath, newPath) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: req.user.dropbox.token
	});

	client.move(oldPath, newPath, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		var collectionPath = oldPath.match(rgFindCollection);
		var modifiedDate = new Date();
		Collection.findOne({
			user: req.user,
			path: collectionPath[1]
		}, function(err, collectionResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find file in collection
			var fileInPath = _.findIndex(collectionResult.files, {'path' : oldPath});
			if (fileInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
			var fileTemp = collectionResult.files[fileInPath];
			fileTemp.modified = modifiedDate;
			fileTemp.path = newPath;
			fileTemp.name = req.body.name;
			collectionResult.modified = new Date();

			// if it's a rename
			var newCollectionPath = newPath.match(rgFindCollection);
			if (collectionPath[1] === newCollectionPath[1]) {
				// replace old file with new from temp
				collectionResult.files.splice(fileInPath, 1, fileTemp);
				collectionResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					if (fileTemp.isFavourite)
						updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
					else
						res.jsonp(fileTemp);
				});
			} else {
				// if it's moved to a new collection
				// remove file from old collection
				collectionResult.files.splice(fileInPath, 1);
				// save old collection
				collectionResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });
					// find new collection
					Collection.findOne({
						user: req.user,
						path: newCollectionPath[1]
					}, function(err, newCollectionResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });
						// add a file to new collection
						newCollectionResult.files.unshift(fileTemp);
						newCollectionResult.modified = modifiedDate;
						newCollectionResult.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							if (fileTemp.isFavourite)
								updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
							else
								res.jsonp(fileTemp);
						});
					});
				});
			}
		});
	});
};

/**
 * Collection to Stack
 * Moves file from Collection to Stack
 */
exports.collectionToStack = function(req, res, oldPath, newPath) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: req.user.dropbox.token
	});

	client.move(oldPath, newPath, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		var modifiedDate = new Date();
		var collectionPath = oldPath.match(rgFindCollection);
		Collection.findOne({
			user: req.user,
			path: collectionPath[1]
		}, function(err, collectionResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find file in collection
			var fileInPath = _.findIndex(collectionResult.files, {'path' : oldPath});
			if (fileInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
			var fileTemp = collectionResult.files[fileInPath];
			fileTemp.modified = modifiedDate;
			fileTemp.path = newPath;
			fileTemp.name = req.body.name;
			collectionResult.modified = new Date();
			// remove file from collection
			collectionResult.files.splice(fileInPath, 1);
			var stackPath = newPath.match(rgStack);
			var stackCollectionPath = newPath.match(rgFindCollection);

			// if file is moved to stack within the same collection
			if (collectionPath[1] === stackCollectionPath[1]){
				var stackInCollection = _.findIndex(collectionResult.stacks, {'path' : stackPath[1]});
				if (stackInCollection === -1)
					return res.status(404).jsonp({	errors: 'Invalid request. Stack could not be found.' });
				var stackTemp = collectionResult.stacks[stackInCollection];
				// update abstracted stack with new file data
				stackTemp.lastFile = newPath;
				stackTemp.modified = modifiedDate;
				collectionResult.stacks.splice(stackInCollection, 1, stackTemp);
				// save collection
				collectionResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// find destination stack
					Stack.findOne({
						user: req.user,
						path: stackPath[1]
					}, function(err, stackResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// update stack - add the file and change modified
						stackResult.files.unshift(fileTemp);
						stackResult.modified = modifiedDate;
						stackResult.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							if (fileTemp.isFavourite)
								updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
							else
								res.jsonp(fileTemp);
						});
					});
				});
			} else {
				// else if file is moved to a stack in a different collection
				// save collection
				collectionResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// Find the new stack
					Stack.findOne({
						user: req.user,
						path: stackPath[1]
					}, function(err, stackResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// update stack - add the file and change modified
						stackResult.files.unshift(fileTemp);
						stackResult.modified = modifiedDate;
						stackResult.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							// update new abstracted stack in new parent collection
							Collection.findOne({
								user: req.user,
								path: stackCollectionPath[1]
							}, function(err, newCollectionResult) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								var stackInNewCollection = _.findIndex(newCollectionResult.stacks, {'path' : stackPath[1]});
								if (stackInNewCollection === -1)
									return res.status(404).jsonp({	errors: 'Invalid request. Stack could not be found.' });
								var stackTemp = newCollectionResult.stacks[stackInNewCollection];
								// update abstracted stack with new file data
								stackTemp.lastFile = newPath;
								stackTemp.modified = modifiedDate;
								newCollectionResult.stacks.splice(stackInNewCollection, 1, stackTemp);
								// save collection
								newCollectionResult.save(function(err) {
									if (err)
										return res.status(400).jsonp({	errors: err });

									if (fileTemp.isFavourite)
										updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
									else
										res.jsonp(fileTemp);
								});
							});
						});
					});
				});
			}
		});
	});
};

/**
 * Stack to Inbox
 * Moves file from Stack to Inbox
 */
exports.stackToInbox = function(req, res, oldPath, newPath) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: req.user.dropbox.token // token saved through /api/dropbox/auth
	});
	var oldRoot = oldPath.match(rgStack);

	client.move(oldPath, newPath, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		Stack.findOne({
			user: req.user,
			path: oldRoot[1]
		}, function(err, stackResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find file in stack
			var fileInPath = _.findIndex(stackResult.files, {'path' : oldPath});
			if (fileInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
			var fileTemp = stackResult.files[fileInPath];
			var modifiedDate = new Date();
			fileTemp.modified = modifiedDate;
			fileTemp.path = newPath;
			fileTemp.name = req.body.name;
			// remove file from old stack
			stackResult.files.splice(fileInPath, 1);
			stackResult.modified = modifiedDate;
			stackResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				Inbox.findOne({
					user: req.user
				}, function(err, inboxResult) {
					inboxResult.files.unshift(fileTemp);
					inboxResult.modified = modifiedDate;

					inboxResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// if file is last in the original stack update old collection too
						if (fileInPath === 0){
							var oldCollectionPath = oldPath.match(rgFindCollection);
							// new Last Files from the original stack if any exist
							var newLastFile = null;
							if (0 < stackResult.files.length)
								newLastFile = stackResult.files[0].path;
							Collection.findOne({
								user: req.user,
								path: oldCollectionPath[1]
							}, function(err, oldCollectionResult) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								var stackInOldCollection = _.findIndex(oldCollectionResult.stacks, {'path' : oldRoot[1]});
								if (stackInOldCollection === -1)
									return res.status(404).jsonp({	errors: 'Invalid request. New destination not found.' });
								// update stack with new lastFile path and modified date
								var tempOldStack = oldCollectionResult.stacks[stackInOldCollection];
								tempOldStack.modified = modifiedDate;
								tempOldStack.lastFile = newLastFile;
								// replace old stack with new temp
								oldCollectionResult.stacks.splice(stackInOldCollection, 1, tempOldStack);

								oldCollectionResult.save(function(err) {
									if (err)
										return res.status(400).jsonp({	errors: err });

									if (fileTemp.isFavourite)
										updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
									else
										res.jsonp(fileTemp);
								});
							});
						} else {
							if (fileTemp.isFavourite)
								updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
							else
								res.jsonp(fileTemp);
						}
					});
				});
			});
		});
	});
};

/**
 * Stack to Collection
 * Moves file from Stack to Collection
 */
exports.stackToCollection = function(req, res, oldPath, newPath) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: req.user.dropbox.token // token saved through /api/dropbox/auth
	});
	var oldRoot = oldPath.match(rgStack);

	client.move(oldPath, newPath, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		Stack.findOne({
			user: req.user,
			path: oldRoot[1]
		}, function(err, stackResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find file in stack
			var fileInPath = _.findIndex(stackResult.files, {'path' : oldPath});
			if (fileInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
			var fileTemp = stackResult.files[fileInPath];
			var modifiedDate = new Date();
			fileTemp.modified = modifiedDate;
			fileTemp.path = newPath;
			fileTemp.name = req.body.name;
			// remove file from old stack
			stackResult.files.splice(fileInPath, 1);
			stackResult.modified = modifiedDate;
			stackResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// find new collection
				var collectionPath = newPath.match(rgFindCollection);
				Collection.findOne({
					user: req.user,
					path: collectionPath[1]
				}, function(err, collectionResult) {
					// push new file and update collection
					collectionResult.files.unshift(fileTemp);
					collectionResult.modified = modifiedDate;
					// if fileInPath === 0 - update old collection
					collectionResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// if oldCollection == newCollection
						var oldCollectionPath = oldPath.match(rgFindCollection);
						if (oldCollectionPath[1] === collectionPath[1]) {
							// update path in already fetched collection and save
							var stackInCollection = _.findIndex(collectionResult.stacks, {'path' : oldRoot[1]});
							if (stackInCollection === -1)
								return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
							var tempStack = collectionResult.stacks[stackInCollection];
							tempStack.modified = modifiedDate;
							// if stack had more than 1 file originally, use the next one
							if (0 < stackResult.files.length && fileInPath === 0)
								tempStack.lastFile = stackResult.files[0].path;
							// otherwise, use null
							else if (0 < stackResult.files.length)
								tempStack.lastFile = null;
							collectionResult.stacks.splice(stackInCollection, 1, tempStack);
							collectionResult.save(function(err) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								if (fileTemp.isFavourite)
									updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
								else
									res.jsonp(fileTemp);
							});
						}	else {
						// otherwise find old collection and update it.
							Collection.findOne({
								user: req.user,
								path: oldCollectionPath[1]
							}, function(err, oldCollectionResult) {
								// update path in already fetched collection and save
								// // console.log(oldCollectionResult);
								var stackInOldCollection = _.findIndex(oldCollectionResult.stacks, {'path' : oldRoot[1]});
								if (stackInOldCollection === -1)
									return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
								var tempStack = oldCollectionResult.stacks[stackInOldCollection];
								tempStack.modified = modifiedDate;

								if (0 < stackResult.files.length && fileInPath === 0)
									tempStack.lastFile = stackResult.files[0].path;
								else if (0 < stackResult.files.length)
									tempStack.lastFile = null;
								oldCollectionResult.stacks.splice(stackInOldCollection, 1, tempStack);
								oldCollectionResult.save(function(err) {
									if (err)
										return res.status(400).jsonp({	errors: err });

									if (fileTemp.isFavourite)
										updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
									else
										res.jsonp(fileTemp);
								});
							});
						}
					});
				});
			});
		});
	});
};

/**
 * Stack to Stack
 * Moves file from Stack to a different Stack
 */
exports.stackToStack = function(req, res, oldPath, newPath) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: req.user.dropbox.token // token saved through /api/dropbox/auth
	});
	var oldRoot = oldPath.match(rgStack);

	client.move(oldPath, newPath, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		Stack.findOne({
			user: req.user,
			path: oldRoot[1]
		}, function(err, stackResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			// find file in stack
			var fileInPath = _.findIndex(stackResult.files, {'path' : oldPath});
			if (fileInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. File could not be found.' });
			var fileTemp = stackResult.files[fileInPath];
			var modifiedDate = new Date();
			fileTemp.modified = modifiedDate;
			fileTemp.path = newPath;
			fileTemp.name = req.body.name;
			// remove file from old stack
			stackResult.files.splice(fileInPath, 1);
			stackResult.modified = modifiedDate;
			// save old stack
			stackResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				var newRoot = newPath.match(rgStack);
				// find new stack
				Stack.findOne({
					user: req.user,
					path:	newRoot[1]
				}, function(err, newStackResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });
					newStackResult.files.unshift(fileTemp);
					newStackResult.modified = modifiedDate;
					// save new updated stack
					newStackResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						var newCollectionPath = newPath.match(rgFindCollection);
						// find new Collection and update lastFile path in Stack
						Collection.findOne({
							user: req.user,
							path: newCollectionPath[1]
						}, function(err, newCollectionResult) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							var stackInNewCollection = _.findIndex(newCollectionResult.stacks, {'path' : newRoot[1]});
							if (stackInNewCollection === -1)
								return res.status(404).jsonp({	errors: 'Invalid request. New destination not found.' });
							// update stack with new lastFile path and modified date
							var tempNewStack = newCollectionResult.stacks[stackInNewCollection];
							tempNewStack.modified = modifiedDate;
							tempNewStack.lastFile = newPath;
							// replace old stack with new temp
							newCollectionResult.stacks.splice(stackInNewCollection, 1, tempNewStack);
							newCollectionResult.save(function(err) {
								if (err)
									return res.status(400).jsonp({	errors: err });
								// if file is last in the original stack update old collection too
								if (0 < stackResult.files.length && fileInPath === 0){
									var oldCollectionPath = oldPath.match(rgFindCollection);
									// new Last Files from the original stack
									var newLastFile = stackResult.files[0].path;
									Collection.findOne({
										user: req.user,
										path: oldCollectionPath[1]
									}, function(err, oldCollectionResult) {
										if (err)
											return res.status(400).jsonp({	errors: err });

										var stackInOldCollection = _.findIndex(oldCollectionResult.stacks, {'path' : oldRoot[1]});
										if (stackInOldCollection === -1)
											return res.status(404).jsonp({	errors: 'Invalid request. New destination not found.' });
										// update stack with new lastFile path and modified date
										var tempOldStack = oldCollectionResult.stacks[stackInOldCollection];
										tempOldStack.modified = modifiedDate;
										tempOldStack.lastFile = newLastFile;
										// replace old stack with new temp
										oldCollectionResult.stacks.splice(stackInOldCollection, 1, tempOldStack);

										oldCollectionResult.save(function(err) {
											if (err)
												return res.status(400).jsonp({	errors: err });

											if (fileTemp.isFavourite)
												updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
											else
												res.jsonp(fileTemp);
										});
									});
								} else {
									if (fileTemp.isFavourite)
										updateFavourite(oldPath, newPath, req, res, function() { res.jsonp(fileTemp); });
									else
										res.jsonp(fileTemp);
								}
							});
						});
					});
				});
			});
		});
	});
};