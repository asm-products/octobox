'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Collection = mongoose.model('Collection'),
		Stack = mongoose.model('Stack'),
		User = mongoose.model('User'),
		Tag = mongoose.model('Tag'),
		Dropbox = require('dropbox'),
		async = require('async'),
		config = require('../../../config/config'),
		_ = require('lodash');

/*
 * Process Favourites
 * Goes through Stack files and returns a list of paths that are favourites
 */
var processFavourites = function(collectionResult) {
	var favouriteList = [];
	// if path is a favourite
	if (collectionResult.isFavourite !== undefined && collectionResult.isFavourite === true)
		favouriteList.push(collectionResult.path);
	// for each file
	collectionResult.files.forEach(function(file) {
		// if file is a favourite
		if (file.isFavourite !== undefined && file.isFavourite === true)
			favouriteList.push(file.path);
	});
	return favouriteList;
};

/*
 * Process Tags and Favourites
 * Wrapper for processing tags and favourites for collection and all its child stacks
 */
var processTagsAndFavourites = function(collectionResult, user, res, callback) {

	// init
	var tagItemList = [];
	var favouriteList = [];

	// process favs & tags in main collection
	favouriteList = processFavourites(collectionResult);


	// // console.log(tagItemList);
	collectionResult.files.forEach(function(file) {
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

	async.eachLimit(collectionResult.stacks, 1, function(stack, cb) {
		Stack.findOne({
			user: user,
			path: stack.path
		}, function(err, stackResult) {
			if (err) cb(err);
			if (!stackResult) cb('Stack could not be found');

			// // console.log(stackResult.path);
			// process favs for each stack and add to the lists
			var tempStackFavourites = processFavourites(stackResult);
			if (0 < tempStackFavourites.length){
				favouriteList.push(tempStackFavourites);
			}

			// process tags
			// if stack itself has any tags assigned
			if (stackResult.tags !== undefined && 0 < stackResult.tags.length){
				// for each tag, push to the array
				for(var i = stackResult.tags.length - 1; i>=0; i--){
					// 1. check if tagid is already in the array
					var tagIndex = _.findIndex(tagItemList, {'tag': stackResult.tags[i]});
					// 2. if not, push a tag id and stackResult id to the array
					if (tagIndex === -1){
						tagItemList.push({
							tag: stackResult.tags[i],
							stacks: [stackResult._id],
							items: []
						});
					} else {
					// 3. if it does, push file path to the tag
							tagItemList[tagIndex].stacks.push(stackResult._id);
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
								items: [file._id],
								stacks: []
							});
						} else {
						// 3. if it does, push file path to the tag
								tagItemList[tagIndex].items.push(file._id);
						}
					}
				}
			});
			// remove each stack
			stackResult.remove(function(err) {
				if (err)
					cb(err);
				// console.log('removing stack ' + stackResult.name + '...');
				cb();
			});

		});
	}, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		// flatten favourite list
		favouriteList = _.flatten(favouriteList);

		callback(tagItemList, favouriteList);
	});
};

// make this function public for Dropbox sync
exports.processTagsAndFavourites = function(collectionResult, user, res, callback) {
	return processTagsAndFavourites(collectionResult, user, res, callback);
};

/*
 * Update Tags
 * Goes through a list of tags and removes file references in them
 */
var updateTags = function(tagsToUpdate, res, callback) {
	if (0 < tagsToUpdate.length){
		async.eachLimit(tagsToUpdate, 1, function(tagItems, cb) {
			Tag.findOne({
				_id: tagItems.tag
			}, function(err, tagResult) {
				if (err)
					return cb(err);
				if (!tagResult)
					return cb('Tag could not be found');
				// console.log('Before updating: ', tagResult);
				if (tagItems.items !== undefined && 0 < tagItems.items.length) {
					_.forEach(tagItems.items, function(itemId) {
						var itemIndex = tagResult.files.indexOf(itemId);
						tagResult.files.splice(itemIndex, 1);
					});
				}
				if (tagItems.stacks !== undefined && 0 < tagItems.stacks.length) {
					_.forEach(tagItems.stacks, function(stackId) {
						var stackIndex = tagResult.stacks.indexOf(stackId);
						tagResult.stacks.splice(stackIndex, 1);
					});
				}

				// console.log('After updating: ', tagResult);
				tagResult.markModified('files');
				tagResult.save(function(err	) {
					if (err)
						return cb(err);

					cb();
				});
			});
		}, function(err) {
			if (err) {
				// console.log(err);
				return res.status(400).jsonp({	errors: err });
			}

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

exports.find = function(req, res) {

	var user = req.user;

	Collection.find({
		user: user
	}, 'path name color stacks.name stacks.path' , function(err, collectionsResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (collectionsResult) {
			var all = _.sortBy(collectionsResult, 'path');
			return res.jsonp(all);
		} else
			return res.status(404).jsonp('No collections exist or user is not authorized.');
	});
};

exports.show = function(req, res) {

	var user = req.user;
	var path = '/' + req.params.collection;

	Collection.findOne({
		user: user,
		path: path
	}, 'path name color modified user isFavourite', function(err, collectionResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (collectionResult){
			// initialise file array, so we can recognize it as a collection
			collectionResult.files = [];
			return res.jsonp(collectionResult);
		} else
			return res.status(404).jsonp('Collection could not be found or user is not authorized.');
	});
};

exports.create = function(req, res) {
	var user = req.user,
		path = '/' + req.body.path,
		name = req.body.name,
		client = new Dropbox.Client({
			key			: config.dropboxKey,
			secret	: config.dropboxSecret,
			token		: user.dropbox.token // token saved through /api/dropbox/auth
		});

	// Call Dropbox first, then create a collection in our DB on callback
	// Second argument on .mkdir callback is a new folder stat object
	client.mkdir(path, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		Collection.count({
			user: req.user
		}, function(err, count) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			var collection = new Collection();
			// Add user and path
			collection.user = user;
			collection.path = path;
			collection.name = name;
			collection.color = count + 2; // add color from collection count

			collection.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				// Return collection on creation
				res.jsonp(collection);
			});
		});
	});
};

exports.update = function(req, res) {

	var user = req.user,
			path = '/' + req.params.collection,
			collectionUpdate = req.body;

	// // console.log(req.body);

	Collection.findOne({
		user: user,
		path: path
	}, function(err, collectionResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (collectionResult){
			_.extend(collectionResult, collectionUpdate, { files: collectionResult.files }, {stacks: collectionResult.stacks });
			// Set updated date
			collectionResult.modified = new Date();
			collectionResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// update name in favourites
				if (collectionResult.isFavourite){
					User.findOne({
						_id: req.user._id
					}, function(err, userResult) {
						var favIndex = _.findIndex(userResult.favourites, {'path': path});
						userResult.favourites[favIndex].name = req.body.name;
						userResult.markModified('favourites');
						userResult.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							return res.jsonp(collectionResult);
						});
					});
				} else {
					return res.jsonp(collectionResult);
				}
			});
		} else
			return res.status(404).jsonp('Collection could not be found or user is not authorized.');
	});
};

exports.destroy = function(req, res) {
	var user = req.user,
			path = '/' + req.params.collection,
			client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});
	client.remove(path, function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		Collection.findOne({
			user: user,
			path: path
		}, function(err, collectionResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			collectionResult.remove(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				// 1. process tags and favourites from collection, its files, and all the stacks and their files
				processTagsAndFavourites(collectionResult, user, res, function(tagsToUpdate, favouritesToRemove) {
					// 2. for each tagsToRemove find tag and remove item reference
					updateTags(tagsToUpdate, res, function() {
					// 3. for each favouriteToRemove find favourite in user and remove it
						removeFavourites(favouritesToRemove, user._id, res, function() {
							res.jsonp(collectionResult);
						});
					});
				});
			});
		});
	});
};


// Other methods

exports.files = function(req, res) {

	var user = req.user,
			path = '/' + req.params.collection;

	Collection.findOne({
		user: user,
		path: path
	}, function(err, collectionResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (collectionResult) {
			// Sort array by stringy date
			collectionResult.files = _.sortBy(collectionResult.files, 'modified');
			return res.jsonp(collectionResult.files.reverse());
		} else
			return res.status(404).jsonp('Collection could not be found or user is not authorized.');
	});
};
exports.stacks = function(req, res) {

	var user = req.user,
			path = '/' + req.params.collection;

	Collection.findOne({
		user: user,
		path: path
	}, function(err, collectionResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (collectionResult) {
			// Sort array by stringy date
			collectionResult.stacks = _.sortBy(collectionResult.stacks, 'modified');
			return res.jsonp(collectionResult.stacks.reverse());
		} else
			return res.status(404).jsonp('Collection could not be found or user is not authorized.');
	});
};
exports.all = function(req, res) {

	var user = req.user,
			path = '/' + req.params.collection;

	Collection.findOne({
		user: user,
		path: path
	}, function(err, collectionResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (collectionResult) {
			// make object editable
			collectionResult = collectionResult.toObject();
			// count stack items
			async.eachLimit(collectionResult.stacks, 1, function(stack, callback) {
				Stack.findOne({
					user: req.user,
					path: stack.path
				}, function(err, stackResult) {
					if (err) return callback(err);
					if (stackResult) {
						// count items and push to result array
						stack.count = stackResult.files.length + stackResult.links.length;
						stack.type = 'stack';
						callback();
					} else {
						// TODO: debug this in more detail
						stack.type = 'stack';
						callback();
					}

				});
			}, function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				_(collectionResult.links).each(function (link) {
					link.path = path + '/' + link.url.replace(/\//g, ':');
					link.kind = 'link';
				});
				// merge stacks, files & links
				var all = collectionResult.files.concat(collectionResult.stacks, collectionResult.links);
				all = _.sortBy(all, 'modified');
				return res.jsonp(all.reverse());
			});

		} else
			return res.status(404).jsonp('Collection could not be found or user is not authorized.');
	});
};
exports.thumbnail = function(req, res) {

	var user = req.user,
			path = '/' + req.params.collection,
			client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	Collection.findOne({
		user: user,
		path: path
	}, function(err, collectionResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (collectionResult){
			var thumbnailUrl = client.thumbnailUrl(collectionResult.files[0].path, {
				size: 'l'
			});
			return res.jsonp(thumbnailUrl);
		} else {
			return res.status(404).jsonp('Collection could not be found or user is not authorized.');
		}
	});
};

exports.move = function(req, res) {
	var user = req.user,
			fromPath = req.body.oldPath.toLowerCase(),
			toPath = req.body.path.toLowerCase(),
			client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	// check if collection exists first
	Collection.count({
		user: req.user,
		path: toPath
	}, function(err, collectionCount) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		if (collectionCount !== 0)
			return res.status(400).jsonp('Collection already exists.');

		// perform move if new name is not occupied
		client.move(fromPath, toPath, function(err, stat) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// get safe path returned from Dropbox
			var parsedPath = stat.path;

			// Catch root folder in [1] and rest of path in [2]
			var rgOldPath = /^(\/[^\/]*)(.*)/;
			var rgOldDynamicPath = new RegExp('^(' + fromPath + ').*');

			Collection.findOne({
				_id: req.body._id
			}, function(err, collectionResult) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				if (!collectionResult)
					return res.status(404).jsonp('Collection could not be found or user is not authorized.');

				// Add new name & path to collection
				collectionResult.name = req.body.name;
				collectionResult.path = parsedPath;

				// Set updated date
				collectionResult.modified = new Date();

				// push paths that have isFavourite set to true
				var favouritesToUpdate = [];

				// if collection is a favourite push it with a name (so we can tell)
				if (collectionResult.isFavourite !== undefined && collectionResult.isFavourite === true) {
					favouritesToUpdate.push({
						oldPath: fromPath,
						newPath: parsedPath,
						name: req.body.name
					});
				}

				// console.log('Changing path from ' + fromPath + ' to ' + parsedPath + '...');
				// Update files in collection
				if(0 < collectionResult.files.length){
					collectionResult.files.forEach(function(file) {
						var tempPath = file.path.match(rgOldPath);
						// push favourite to favs list array
						if (file.isFavourite !== undefined && file.isFavourite === true) {
							favouritesToUpdate.push({
								oldPath: file.path,
								newPath: parsedPath + tempPath[2]
							});
						}
						// update file path
						file.path = parsedPath + tempPath[2];
						// console.log('Updated abstracted file: ' + file.path);
					});
				}

				/**
				 * Update abstracted stacks
				 **/
				if (0 < collectionResult.stacks.length) {
					for(var i = collectionResult.stacks.length - 1; i>=0; i--){
						var tempStack = collectionResult.stacks[i];
						var tempPath = tempStack.path.match(rgOldPath);

						// push favourite to favs list array
						if (tempStack.isFavourite !== undefined && tempStack.isFavourite === true) {
							favouritesToUpdate.push({
								oldPath: tempStack.path,
								newPath: parsedPath + tempPath[2]
							});
						}

						// update path
						tempStack.path = parsedPath + tempPath[2];

						// if stack isn't empty update lastFile path
						if (tempStack.lastFile !== null && tempStack.lastFile !== ''){
							var tempLatest = tempStack.lastFile.match(rgOldPath);
							// check if found - tends to be null if only links are in a stack
							if (tempLatest)
								tempStack.lastFile = parsedPath + tempLatest[2];
						}
						// Remove stack from collection and replace it with the copy
						collectionResult.stacks.splice(i, 1, tempStack);
						// console.log('Updated abstracted stack: ' + tempStack.path);
					}
				}
				collectionResult.markModified('files');

				/**
				 * async.series
				 * 1. updateStacks - finds all stacks that match old path then
				 *			runs async.each on the result
				 *		saveStack - update each stack through async.each
				 * 2. updateFavourites - update favorites stored in user
				 * -- callback - log stackResults and return jsonp
				 **/
				var saveStack = function(stackResult, callback) {
					// console.log('Saving stack ' + stackResult.path + '...');
					var tempStackPath = stackResult.path.match(rgOldPath);
					stackResult.path = parsedPath + tempStackPath[2];
					// Update stack modified date to now
					stackResult.modified = new Date();
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

						});
					}
					stackResult.save(function() {
						// console.log('Stack ' + stackResult.path + ' updated.');
						callback();
					});
				};
				var updateStacks = function(next) {
					Stack.find({
						user: user,
						path: rgOldDynamicPath
					}, function(err, stackResults) {
						if (err)
							return res.status(400).jsonp({	errors: err });
						// save each stack asynchronously
						// console.log('Stacks to update: ' + stackResults.length);
						async.eachLimit(stackResults, 1, saveStack, function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });
							next();
						});

					});
				};
				var updateFavourites = function(next) {
					User.findOne({
						_id: user._id
					}, function(err, userResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// for each in favouritesToUpdate
						favouritesToUpdate.forEach(function(favourite) {
							// find favourite in user
							// console.log(favourite.oldPath, favourite.newPath);
							var favIndex = _.findIndex(userResult.favourites, {'path': favourite.oldPath});
							// update the paths
							userResult.favourites[favIndex].path = favourite.newPath;
							// if it's a collection itself - update the name as well
							if (favourite.name !== undefined){
								userResult.favourites[favIndex].name = favourite.name;
							}
						});

						userResult.markModified('favourites');
						// save
						userResult.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							next();
						});
					});
				};
				// console.log('Saving collection..');
				collectionResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// console.log('Collection ' + collectionResult.path + ' saved.');

					// Set up a queue and run all saves
					async.series([
						updateStacks,
						updateFavourites
					], function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });
							// console.log('Collection and paths updated successfully.');
							return res.jsonp(collectionResult);
						});
				});

			});
		});
	});
};
