'use strict';

var mongoose = require('mongoose'),
		Collection = mongoose.model('Collection'),
		Inbox = mongoose.model('Inbox'),
		Stack = mongoose.model('Stack'),
		Tag = mongoose.model('Tag'),
		User = mongoose.model('User'),
		collectionUtils = require('../collection'),
		stackUtils = require('../stack'),
		_ = require('lodash');

/**
 * Remove Favourite
 * Removes deleted item from favourites - for removeThing
 */
var removeFavourite = function(tempItem, user, res, callback) {
	User.findOne({
		_id: user._id
	}, function(err, userResult) {
		var favIndex = _.findIndex(userResult.favourites, {'path': tempItem.path});
		// // console.log(userResult.favourites, favIndex);
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
var updateTags = function(tempItem, kind, user, res, callback) {
	_(tempItem.tags).forEach(function(tagId) {
		Tag.findOne({
			_id: tagId
		}, function(err, tagResult) {
			tagResult[kind].splice(tagResult[kind].indexOf(tempItem._id), 1);
			// // console.log(tagResult[kind]);
			tagResult.markModified(kind);
			tagResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				callback();
			});
		});
	});

};


/**
 * Create Inbox
 * Creates a new Inbox document along with files (if any)
 */
exports.createInbox = function(req, res, inboxData) {
	// create & populate Inbox
	var inbox = new Inbox();
	inbox.user = req.user;
	inbox = _.extend(inbox, inboxData);
	inbox.save(function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });
	});
};


/**
 * Add File to Inbox
 * Creates a new Inbox document along with files (if any)
 */
exports.addToInbox = function(req, res, inboxData) {
	Inbox.findOne({	user: req.user },
	function(err, inbox) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		inboxData.files.forEach(function(fileData) {
			// check if file we want to add exists already
			var fileIndex = _.findIndex(inbox.files, {
				'path': fileData.path
			});
			// if it doesn't we push it to the Inbox and save
			if (fileIndex === -1) {
				Inbox.update({ _id: inbox._id }, {
					$push: {'files' : fileData}
				}, function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });
					// console.log('Inbox file ' + fileData.path + ' added successfully.');
				});
			}
			// else {
				// console.log('File ' + fileData.path + ' already exists. Skipping.');
			// }
		});
	});
};

/**
 * Create Collection
 * Creates a new Collection along with its contents
 */
exports.createCollection = function(req, res, collectionData, callback) {
	Collection.count({
		user: req.user
	}, function(err, count) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		var collection = new Collection();
		collection.user = req.user;
		collection = _.extend(collection, collectionData);
		collection.color = count + 2; // add color from collection count

		collection.save(function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// console.log('Collection ' + collection.path + ' created successfully');
			callback();
		});
	});
};

/**
 * Update Collection
 * Pushes changes to an existing collection
 */
exports.updateCollection = function(req, res, collectionData, callback) {

	// if no files need updating (safety)
	if (collectionData.stacks.length === 0 && collectionData.files.length === 0){
		return callback();
	}

	Collection.findOne({
		user: req.user,
		path: collectionData.path
	},
	function(err, collectionResult) {
		if (err) return callback(err);

		if(0 < collectionData.files.length){
			collectionData.files.forEach(function(fileData) {
				// check if file we want to add exists already
				var fileIndex = _.findIndex(collectionResult.files, {
					'path': fileData.path
				});
				// if it doesn't we push it to the Collection and save
				if (fileIndex === -1) {
					collectionResult.files.push(fileData);
					// console.log('Collection file ' + fileData.path + ' added successfully.');
				}
				// else {
					// console.log('File ' + fileData.path + ' already exists. Skipping.');
				// }
			});
			collectionResult.markModified('files');
		}

		if(0 < collectionData.stacks.length){
			collectionData.stacks.forEach(function(stackData) {
				// check if stack we want to add exists already
				var stackIndex = _.findIndex(collectionResult.stacks, {
					'path': stackData.path
				});
				// if it doesn't we push it to the Collection and save
				if (stackIndex === -1) {
					collectionResult.stacks.push(stackData);
					// console.log('Collection stack ' + stackData.path + ' added successfully.');
				} else {
					// if it does, we find it and update the modified date accordingly
					collectionResult.stacks[stackIndex].modified = stackData.modified;
					collectionResult.stacks[stackIndex].lastFile = stackData.lastFile;
					// console.log('Collection stack ' + stackData.path + ' detils updated!');
				}
			});
			collectionResult.markModified('stacks');
		}

		collectionResult.save(function(err) {
			if (err) return callback(err);

			callback();
		});
	});
};

/**
 * Create Stack
 * Creates a new Stack along with its contents
 */
exports.createStack = function(req, res, stackData, callback) {
	var stack = new Stack();
	stack.user = req.user;
	stack = _.extend(stack, stackData);
	stack.save(function(err) {
		if (err) callback(err);

		// console.log('Stack ' + stackData.path + ' created!');
		callback();
	});
};

/**
 * Update Stack
 * Pushes changes to an existing stack
 */
exports.updateStack = function(req, res, stackData, callback) {
	Stack.findOne({
		user: req.user,
		path: stackData.path
	},
	function(err, stackResult) {
		if (err) return callback(err);

		if (stackData.files.length === 0) return callback();

		stackData.files.forEach(function(fileData) {
			// check if file we want to add exists already
			var fileIndex = _.findIndex(stackResult.files, {
				'path': fileData.path
			});
			// if it doesn't we push it to the Stack
			if (fileIndex === -1) {
				stackResult.files.push(fileData);
				// console.log('Stack file ' + fileData.path + ' added successfully.');
			}
			// else {
				// console.log('File ' + fileData.path + ' already exists. Skipping.');
			// }
		});

		stackResult.markModified('files');
		stackResult.modified = new Date();
		stackResult.save(function(err) {
			if (err) return callback(err);

			// console.log('Stack ' + stackResult.path + ' saved.');
			callback();
		});
	});
};

/**
 * Remove Thing
 * Removes a thing, based on the path and anything
 * else we could possibly deduct from path alone.
 */
exports.removeThing = function(req, res, removeData, cb) {
	var hasTags = false;
	var isFav = false;
	var user = req.user;

	switch (removeData.kind) {
	case 'nested':
		// If a nested file is to be removed
		// try collection for a file first, then try stack itself
		Collection.find({
			user: req.user,
			path: removeData.parent
		}, function(err, docs) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (0 < docs.length){
				// find index of a file we wanna remove

				var parentIndex = _.findIndex(docs[0].files, {
					'path': removeData.path
				});
				// If index is found means it's a file in a collection
				if (parentIndex !== -1){

					// used for tags and favourites
					var tempItem = docs[0].files[parentIndex];
					// If item has tags
					if (0 < tempItem.tags.length)
						hasTags = true;

					// if item is favourite
					if (tempItem.isFavourite)
						isFav = true;

					// get ID of file in that position
					var id = docs[0].files[parentIndex]._id;

					// remove the file and save
					docs[0].files.remove(id);
					docs[0].save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// Handle updating tags and favourites
						if (hasTags){
							updateTags(tempItem, 'files', user, res, function() {
								if (isFav) {
									removeFavourite(tempItem, user, res, function() {
										// console.log('Collection file ' + removeData.path + ' removed.');
										cb();
									});
								} else {
									// done
									// console.log('Collection file ' + removeData.path + ' removed.');
									cb();
								}
							});
						} else {
							if (isFav) {
								removeFavourite(tempItem, user, res, function() {
									// console.log('Collection file ' + removeData.path + ' removed.');
									cb();
								});
							} else {
								// done
								// console.log('Collection file ' + removeData.path + ' removed.');
								cb();
							}
						}

					});
				// if it's a stack
				} else {
					Stack.findOne({
						user: req.user,
						path: removeData.path
					}, function(err, stackResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });
						if (stackResult){

							// if stack is found
							stackResult.remove(function(err) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								// 1. for each tag in and files.[].tags add item,tag to tagsToRemove
								var tagsToUpdate = stackUtils.processTags(stackResult);
								// 2. for each isFavourite === true in stack and files.[] and to favouritesToRemove
								var favouritesToRemove = stackUtils.processFavourites(stackResult);
								// 3. for each tagsToRemove find tag and remove item reference
								stackUtils.updateTags(tagsToUpdate, res, function() {
								// 4. for each favouriteToRemove find favourite in user and remove it
									stackUtils.removeFavourites(favouritesToRemove, user._id, res, function() {
										// 5. update abstracted stack in collection
										stackUtils.updateCollection(stackResult.path, user, res, function() {
											// console.log('Stack ' + removeData.path + ' removed.');
											cb();
										});
									});
								});
							});
						} else {
							// console.log('Stack ' + removeData.path + ' already removed.');
							cb();
						}
					});
				}
			} else {
				cb();
			}
		});
		break;
	case 'root':
		// try collection first, then try file in inbox
		Collection.findOne({
			user: req.user,
			path: removeData.path
		}, function(err, collectionResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (collectionResult){
				// if collection is found

				// if item is favourite
				if (collectionResult.isFavourite)
					isFav = true;

				collectionResult.remove(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// 1. process tags and favourites from collection, its files, and all the stacks and their files
					collectionUtils.processTagsAndFavourites(collectionResult, user, res, function(tagsToUpdate, favouritesToRemove) {
						// 2. for each tagsToRemove find tag and remove item reference
						collectionUtils.updateTags(tagsToUpdate, res, function() {
						// 3. for each favouriteToRemove find favourite in user and remove it
							collectionUtils.removeFavourites(favouritesToRemove, user._id, res, function() {
								// console.log('Collection ' + removeData.path + ' removed.');
								cb();
							});
						});
					});
				});
			} else {
				// if collection is not found
				Inbox.findOne({
					user: req.user
				}, function(err, inboxResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });
					if (inboxResult){
						// find index of a file we wanna remove
						var parentIndex = _.findIndex(inboxResult.files, {
							'path': removeData.path
						});
						// If index is found (just in case.)
						if (parentIndex !== -1){
							// get ID of file in that position
							// var id = inboxResult.files[parentIndex]._id;

							// used for tags and favourites
							var tempItem = inboxResult.files[parentIndex];
							// If item has tags
							if (0 < tempItem.tags.length)
								hasTags = true;

							// if item is favourite
							if (tempItem.isFavourite)
								isFav = true;

							// remove and save
							inboxResult.files.splice(parentIndex, 1);
							inboxResult.markModified('files');

							inboxResult.save(function(err) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								// Handle updating tags and favourites
								if (hasTags){
									updateTags(tempItem, 'files', user, res, function() {
										if (isFav) {
											removeFavourite(tempItem, user, res, function() {
												// console.log('Inbox file ' + removeData.path + ' removed.');
												cb();
											});
										} else {
											// done
											// console.log('Inbox file ' + removeData.path + ' removed.');
											cb();
										}
									});
								} else {
									if (isFav) {
										removeFavourite(tempItem, user, res, function() {
											// console.log('Inbox file ' + removeData.path + ' removed.');
											cb();
										});
									} else {
										// done
										// console.log('Inbox file ' + removeData.path + ' removed.');
										cb();
									}
								}
							});
						} else {
							// console.log('Item ' + removeData.path + ' doesn\'t exist.');
							cb();
						}
					} else {
						// console.log('Item ' + removeData.path + ' doesn\'t exist.');
						cb();
					}
				});
			}
		});
		break;
	case 'stackFile':
		Stack.findOne({
			user: req.user,
			path: removeData.parent
		}, function(err, stackResult) {
			if (err)
				return res.status(400).jsonp({  errors: err });
			if (stackResult){
				// find index of a file we wanna remove
				var parentIndex = _.findIndex(stackResult.files, {
					'path': removeData.path
				});
				// If index is found
				if (parentIndex !== -1){

					// used for tags and favourites
					var tempItem = stackResult.files[parentIndex];
					// If item has tags
					if (0 < tempItem.tags.length)
						hasTags = true;

					// if item is favourite
					if (tempItem.isFavourite)
						isFav = true;

					stackResult.files.splice(parentIndex, 1);
					stackResult.markModified('files');

					stackResult.save(function(err) {
						if (err) {
							// console.log (err);
							return res.status(400).jsonp({  errors: err });
						}
						// if the file was the last file - update the abstracted stack
						var parentPath = removeData.parent.match(/^(\/[^\/]+)/);
						Collection.findOne({
							user: req.user,
							path: parentPath[0]
						}, function(err, collectionResult) {
							if (err)
								return res.status(400).jsonp({  errors: err });
							if (!collectionResult)
								return res.status(404).jsonp('Collection could not be found');

							// update the stack
							var stackIndex = _.findIndex(collectionResult.stacks, {'path': removeData.parent});
							var tempStack = collectionResult.stacks[stackIndex];

							// if item is a lastFile
							if (tempStack.lastFile === removeData.path) {
								// if the removed file wasn't the last file in the stack
								if (0 < stackResult.files.length)
									tempStack.lastFile = stackResult.files[0].path;
								else
									tempStack.lastFile = null;

								// Remove old stack from collection
								collectionResult.stacks.splice(stackIndex, 1);
								collectionResult.stacks.push(tempStack);
								collectionResult.save(function(err) {
									if (err)
										return res.status(400).jsonp({  errors: err });

									// Handle updating tags and favourites
									if (hasTags){
										updateTags(tempItem, 'files', user, res, function() {
											if (isFav) {
												removeFavourite(tempItem, user, res, function() {
													// console.log('Stack file ' + removeData.path + ' removed.');
													cb();
												});
											} else {
												// done
												// console.log('Stack file ' + removeData.path + ' removed.');
												cb();
											}
										});
									} else {
										if (isFav) {
											removeFavourite(tempItem, user, res, function() {
												// console.log('Stack file ' + removeData.path + ' removed.');
												cb();
											});
										} else {
											// done
											// console.log('Stack file ' + removeData.path + ' removed.');
											cb();
										}
									}
								});
							} else {
								// Handle updating tags and favourites
								if (hasTags){
									updateTags(tempItem, 'files', user, res, function() {
										if (isFav) {
											removeFavourite(tempItem, user, res, function() {
												// console.log('Stack file ' + removeData.path + ' removed.');
												cb();
											});
										} else {
											// done
											// console.log('Stack file ' + removeData.path + ' removed.');
											cb();
										}
									});
								} else {
									if (isFav) {
										removeFavourite(tempItem, user, res, function() {
											// console.log('Stack file ' + removeData.path + ' removed.');
											cb();
										});
									} else {
										// done
										// console.log('Stack file ' + removeData.path + ' removed.');
										cb();
									}
								}
							}
						});
					});
				} else {
					// console.log('Stack file ' + removeData.path + ' already removed.');
					cb();
				}
			}
		});
		break;
	}
};
