'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Stack = mongoose.model('Stack'),
		Collection = mongoose.model('Collection'),
		User = mongoose.model('User'),
		Tag = mongoose.model('Tag'),
		async = require('async'),
		Dropbox = require('dropbox'),
		MiniStack = mongoose.model('MiniStack'),
		config = require('../../../config/config'),
		_ = require('lodash');

/*
 * Process Tags
 * Goes through Stack files and returns a list of tagid-itemid pairs
 */
var processTags = function(stackResult) {
	var tagItemList = [];
	// if stack itself has any tags assigned
	if (0 < stackResult.tags.length){
		// for each tag, push to the array
		for(var i = stackResult.tags.length - 1; i>=0; i--){
			// 1. check if tagid is already in the array
			var tagIndex = _.findIndex(tagItemList, {'tag': stackResult.tags[i]});
			// 2. if not, push a tag id and stackResult id to the array
			if (tagIndex === -1){
				tagItemList.push({
					tag: stackResult.tags[i],
					stack: [stackResult._id],
					items: []
				});
			} else {
			// 3. if it does, push file path to the tag
					tagItemList[tagIndex].items.push(stackResult._id);
			}
		}
	}
	// // console.log(tagItemList);
	stackResult.files.forEach(function(file) {
		// if there's tags assigned
		if (0 < file.tags.length){
			// for each tag, push to the array
			for(var i = file.tags.length - 1; i>=0; i--){
				// 1. check if tagid is already in the array
				var tagIndex = _.findIndex(tagItemList, {'tag': file.tags[i]});
				// 2. if not, push a tag id and file id to the array
				if (tagIndex === -1){
					tagItemList.push({
						tag: file.tags[i],
						items: [file._id]
					});
				} else {
				// 3. if it does, push file path to the tag
						tagItemList[tagIndex].items.push(file._id);
				}
			}
		}
	});
	return tagItemList;
};
// make this function public for Dropbox sync
exports.processTags = function(stackResult) {
	return processTags(stackResult);
};

/*
 * Process Favourites
 * Goes through Stack files and returns a list of paths that are favourites
 */
var processFavourites = function(stackResult) {
	var favouriteList = [];
	// if path is a favourite
	if (stackResult.isFavourite !== undefined && stackResult.isFavourite === true)
		favouriteList.push(stackResult.path);
	// for each file
	stackResult.files.forEach(function(file) {
		// if file is a favourite
		if (file.isFavourite !== undefined && file.isFavourite === true)
			favouriteList.push(file.path); // console.log(favouriteList);
	});
	return favouriteList;
};
// make this function public for Dropbox sync
exports.processFavourites = function(stackResult) {
	return processFavourites(stackResult);
};

/*
 * Update Tags
 * Goes through a list of tags and removes file references in them
 */
var updateTags = function(tagsToUpdate, res, callback) {
	if (0 < tagsToUpdate.length){
		async.each(tagsToUpdate, function(tagItems, cb) {
			// // console.log(tagItems);
			Tag.findOne({
				_id: tagItems.tag
			}, function(err, tagResult) {
				if (err)
					return cb(err);
				if (!tagResult)
					return cb('Tag could not be found');
				// // console.log('Before updating: ', tagResult);
				if (tagItems.items !== undefined) {
					_.forEach(tagItems.items, function(itemId) {
						var itemIndex = tagResult.files.indexOf(itemId);
						tagResult.files.splice(itemIndex, 1);
					});
				}
				if (tagItems.stack !== undefined) {
					var stackIndex = tagResult.stacks.indexOf(tagItems.stack);
					if (stackIndex !== -1)
						tagResult.stacks.splice(stackIndex, 1);
				}

				// // console.log('After updating: ', tagResult);
				tagResult.markModified('files');
				tagResult.save(function(err	) {
					if (err)
						return cb(err);

					cb();
				});
			});
		}, function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			callback();
		});
	} else {
		callback();
	}
};
// make this function public for Dropbox sync
exports.updateTags = function(tagsToUpdate, res, callback) {
	return updateTags(tagsToUpdate, res, callback);
};

/*
 * Remove Favourites
 * Goes through a list of favourite paths and removes them from user
 */
var removeFavourites = function(favouritesToRemove, userId, res, callback) {
	User.findOne({
		_id: userId
	}, function(err, userResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (!userResult)
			return res.status(400).jsonp({	errors: 'User could not be found.' });
		// console.log('User favourites: ', userResult.favourites);
		// console.log('Favourites to Remove: ', favouritesToRemove);
		favouritesToRemove.forEach(function(favourite) {
			var favIndex = _.findIndex(userResult.favourites, {'path': favourite});
			if (favIndex !== -1)
				userResult.favourites.splice(favIndex, 1);
		});
		// console.log('User after updating: ', userResult.favourites);
		userResult.markModified('favourites');
		userResult.save(function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			callback();
		});
	});
};
// make this function public for Dropbox sync
exports.removeFavourites = function(favouritesToRemove, userId, res, callback) {
	return removeFavourites(favouritesToRemove, userId, res, callback);
};

/*
 * Update Collection
 * Removes abstracted stack from a collection
 */
var updateCollection = function(stackPath, user, res, callback) {

	// catch collection path in [1] for comparison
	var rgCollection = /^(\/.[^\/]*)/;
	var collectionPath = stackPath.match(rgCollection);
	Collection.findOne({
		user: user,
		path: collectionPath[1]
	}, function(err, collectionResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (!collectionResult)
			return res.status(400).jsonp({	errors: 'Collection could not be found.' });

		var stackIndex = _.findIndex(collectionResult.stacks, {'path': stackPath});
		// Remove old stack from collection
		collectionResult.stacks.splice(stackIndex, 1);
		collectionResult.save(function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			callback();
		});
	});
};
// make this function public for Dropbox sync
exports.updateCollection = function(stackPath, user, res, callback) {
	return updateCollection(stackPath, user, res, callback);
};


exports.show = function(req, res) {

	var user = req.user,
			path = '/' + req.params.parent + '/' + req.params.stack,
			parent = '/' + req.params.parent;

	Stack.findOne({
		user: user,
		path: path
	}, 'path name isFavourite modified tags').populate('tags').exec(function(err, stackResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (stackResult)
			// find parent collection and add it's color to stack
			Collection.findOne({
				user: user,
				path: parent
			}, function (err, collectionResult) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				stackResult = stackResult.toObject();
				stackResult.color = collectionResult.color;
				return res.jsonp(stackResult);
			});

		else
			return res.status(404).jsonp('Stack could not be found or user is not authorized.');
	});
};

exports.create = function(req, res) {
	var user = req.user;
	var path = req.body.path;

	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	// Call Dropbox first, then create a folder in our DB on callback
	// Second argument on .mkdir callback is a new folder stat object
	client.mkdir(path, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		var stack = new Stack(req.body);
		// Add user and path
		stack.user = user;
		stack.save(function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find and add stack to parent collection as a ref
			var collectionPath = path.split('/');
			Collection.findOne({
				user: req.user,
				path: '/' + collectionPath[1]
			}, function (err, collectionResult) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// create an actual mini stack object and populate it
				var miniStack = new MiniStack();
				_.extend(miniStack, stack);
				collectionResult.stacks.push(miniStack);
				collectionResult.save(function (err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// Return stack on creation
					res.jsonp(stack);
				});
			});
		});
	});
};

exports.update = function(req, res) {

	var user = req.user;
	var path = '/' + req.params.parent + '/' + req.params.stack;
	var stackUpdate = req.body;
	var rgFindCollection = /^(\/[^\/]*)/;
	var stackCollectionPath = path.match(rgFindCollection);
	var modifiedDate = new Date();

	Stack.findOne({
		user: user,
		path: path
	}, function(err, stackResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (stackResult){
			// _.extend(stackResult, stackUpdate);
			stackResult.name = stackUpdate.name;
			// Set updated date
			stackResult.modified = modifiedDate;
			stackResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

					// update abstracted stack in parent collection
					Collection.findOne({
						user: req.user,
						path: stackCollectionPath[1]
					}, function(err, collectionResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						var stackInCollection = _.findIndex(collectionResult.stacks, {'path' : path});
						if (stackInCollection === -1)
							return res.status(404).jsonp({	errors: 'Invalid request. Stack could not be found.' });
						var stackTemp = collectionResult.stacks[stackInCollection];

						stackTemp.name = stackUpdate.name;
						stackTemp.modified = modifiedDate;
						collectionResult.stacks.splice(stackInCollection, 1, stackTemp);

						// save collection
						collectionResult.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							// update name in favourites
							if (stackResult.isFavourite){
								User.findOne({
									_id: req.user._id
								}, function(err, userResult) {
									var favIndex = _.findIndex(userResult.favourites, {'path': path});
									userResult.favourites[favIndex].name = req.body.name;
									userResult.markModified('favourites');
									userResult.save(function(err) {
										if (err)
											return res.status(400).jsonp({	errors: err });

										return res.jsonp(stackResult);
									});
								});
							} else {
								return res.jsonp(stackResult);
							}
						});
					});

			});
		} else
			return res.status(404).jsonp('Collection could not be found or user is not authorized.');
	});


};

exports.destroy = function(req, res) {
	var user = req.user;
	var path = '/' + req.params.parent + '/' + req.params.stack;

	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	client.remove(path, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		Stack.findOne({
			user: user,
			path: path
		}, function(err, stackResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			stackResult.remove(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// 1. for each tag in and files.[].tags add item,tag to tagsToRemove
				var tagsToUpdate = processTags(stackResult);
				// 2. for each isFavourite === true in stack and files.[] and to favouritesToRemove
				var favouritesToRemove = processFavourites(stackResult);
				// 3. for each tagsToRemove find tag and remove item reference
				updateTags(tagsToUpdate, res, function() {
				// 4. for each favouriteToRemove find favourite in user and remove it
					removeFavourites(favouritesToRemove, user._id, res, function() {
						// 5. update abstracted stack in collection
						updateCollection(stackResult.path, user, res, function() {
							res.jsonp(stackResult);
						});
					});
				});
			});
		});
	});
};

// Other methods

exports.files = function(req, res) {

	var user = req.user;
	var path = '/' + req.params.parent + '/' + req.params.stack;

	Stack.findOne({
		user: user,
		path: path
	}, function(err, stack) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (stack) {
			stack = stack.toObject();
			_(stack.links).each(function (link) {
				link.path = path + '/' + link.url.replace(/\//g, ':');
				link.kind = 'link';
			});
			// Sort files & links arrays by stringy date
			stack.files = _.sortBy(stack.files.concat(stack.links), 'modified');
			return res.jsonp(stack.files.reverse());
		} else
			return res.status(404).jsonp('Stack could not be found or user is not authorized.');
	});
};

exports.thumbnail = function(req, res) {

	var user = req.user;
	var path = '/' + req.params.parent + '/' + req.params.stack;

	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	Stack.findOne({
		user: user,
		path: path
	}, function(err, stack) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (stack){
			var thumbnailUrl = client.thumbnailUrl(stack.files[0].path, {
				size: 'l'
			});
			return res.jsonp(thumbnailUrl);
		} else {
			return res.status(404).jsonp('Stack could not be found or user is not authorized.');
		}
	});

};

exports.move = function(req, res) {
	var user = req.user,
			fromPath = '/' + req.params.parent + '/' + req.params.stack,
			toPath = req.body.path.toLowerCase(),
			client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	// check if collection exists first
	Stack.count({
		user: req.user,
		path: toPath
	}, function(err, stackCount) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		if (stackCount !== 0)
			return res.status(400).jsonp('Stack already exists.');

		client.move(fromPath, toPath, function(err, stat) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// get safe path from Dropbox
			var parsedPath = stat.path.toLowerCase();
			// console.log(parsedPath);
			// catch stack path in [1] and filename in [2]
			var rgOldPath = /^(\/.*)(\/.*)/;
			// catch collection path in [1] for comparison
			var rgCollection = /^(\/.[^\/]*)/;
			// set a default value for when a stack is moved to a different collection
			var changeCollection = false;
			var updateDate = new Date();

			Stack.findOne({
				user: req.user,
				path: fromPath
			}, function(err, stackResult) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				if (!stackResult)
					return res.status(404).jsonp('Stack could not be found or user is not authorized.');

				// Update stack info
				stackResult.path = parsedPath;
				stackResult.modified = updateDate;
				stackResult.name = req.body.name;

				var favouritesToUpdate = [];
				// if collection is a favourite push it with a name (so we can tell)
				if (stackResult.isFavourite !== undefined && stackResult.isFavourite === true) {
					favouritesToUpdate.push({
						oldPath: fromPath,
						newPath: parsedPath,
						name: req.body.name
					});
				}

				// Update files in stack
				if(0 < stackResult.files.length){
					stackResult.files.forEach(function(file) {
						var tempPath = file.path.match(rgOldPath);
						// push favourite to favs list array
						if (file.isFavourite !== undefined && file.isFavourite === true) {
							favouritesToUpdate.push({
								oldPath: file.path,
								newPath: parsedPath + tempPath[2]
							});
						}

						file.path = parsedPath + tempPath[2];
						// console.log('Updated stack file: ' + file.path);
					});
				}
				// console.log('Favourites to update: ', favouritesToUpdate);

				// Save stack
				stackResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// update user first
					User.findOne({
						_id: req.user._id
					}, function(err, userResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// for each in favouritesToUpdate
						favouritesToUpdate.forEach(function(favourite) {
							// find favourite in user
							var favIndex = _.findIndex(userResult.favourites, {'path': favourite.oldPath});
							// update the paths
							if (favIndex !== -1) {
								userResult.favourites[favIndex].path = favourite.newPath;
								// if it's a stack itself - update the name as well
								if (favourite.name !== undefined)
									userResult.favourites[favIndex].name = favourite.name;
							}
						});

						userResult.markModified('favourites');
						// save
						userResult.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							// compare old collection path to new collection path
							var oldCollection = fromPath.match(rgCollection);
							var newCollection = parsedPath.match(rgCollection);
							if (oldCollection[1] !== newCollection[1]) changeCollection = true;

							// if collection is changed, remove from old and add to new
							// otherwise just change the paths in existing one
							if (changeCollection) {
								// console.log('Moving Stack to new Collection');
								// find old collection
								Collection.findOne({
									user: user,
									path: oldCollection[1]
								}, function(err, oldCollectionResult) {
									if (err)
										return res.status(400).jsonp({	errors: err });

									if (!oldCollectionResult) {
										return res.status(404).jsonp('Source directory could not be found.');
									}

									/**
									* Update abstracted stacks
									* Now, this sucks, but for some reason when you update instead
									* of removing/pushing them, they're not saved correctly.
									* Probably because they're not a Schema on their own, but fuck that.
									**/
									var stackIndex = _.findIndex(oldCollectionResult.stacks, {'path': fromPath});
									var tempStack = oldCollectionResult.stacks[stackIndex];
									tempStack.modified = updateDate;
									tempStack.path = parsedPath;
									tempStack.name = req.body.name;
									// if stack isn't empty update lastFile path
									if (tempStack.lastFile !== null){
										var tempLatest = tempStack.lastFile.match(rgOldPath);
										tempStack.lastFile = parsedPath + tempLatest[2];
									}
									// Remove old stack from collection
									oldCollectionResult.stacks.splice(stackIndex, 1);

									// save and in callback find new collection
									oldCollectionResult.save(function(err) {
										if (err)
											return res.status(400).jsonp({	errors: err });

										Collection.findOne({
											user: user,
											path: newCollection[1]
										}, function(err, newCollectionResult) {
											if (err)
												return res.status(400).jsonp({	errors: err });

											newCollectionResult.stacks.push(tempStack);
											newCollectionResult.modified = updateDate;

											newCollectionResult.save(function(err) {
												if (err)
													return res.status(400).jsonp({	errors: err });

												res.jsonp({
													changeCollection: changeCollection,
													old: oldCollection,
													new: newCollection,
													result: stackResult,
													oldCollection: oldCollectionResult,
													newCollection: newCollectionResult
												});
											});
										});
									});
								});
							} else {
								Collection.findOne({
									user: user,
									path: oldCollection[1]
								}, function(err, collectionResult) {
									if (err)
										return res.status(400).jsonp({	errors: err });

									// console.log('Updating Stack in existing Collection');
									/**
									* Update abstracted stacks
									* Now, this sucks, but for some reason when you update instead
									* of removing/pushing them, they're not saved correctly.
									* Probably because they're not a Schema on their own, but fuck that.
									**/
									var stackIndex = _.findIndex(collectionResult.stacks, {'path': fromPath});
									var tempStack = collectionResult.stacks[stackIndex];
									tempStack.modified = updateDate;
									tempStack.path = parsedPath;
									tempStack.name = req.body.name;
									// if stack isn't empty update lastFile path
									if (tempStack.lastFile !== null){
										var tempLatest = tempStack.lastFile.match(rgOldPath);
										tempStack.lastFile = parsedPath + tempLatest[2];
									}
									// Remove stack from collection and replace it with the copy
									collectionResult.stacks.splice(stackIndex, 1, tempStack);

									collectionResult.save(function(err) {
										if (err)
											return res.status(400).jsonp({	errors: err });

										res.jsonp(stackResult);
									});
								});
							}
						});
					});
				});
			});
		});
	});
};
