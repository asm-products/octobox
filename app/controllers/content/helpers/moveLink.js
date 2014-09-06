'use strict';

var mongoose = require('mongoose'),
		Collection = mongoose.model('Collection'),
		Inbox = mongoose.model('Inbox'),
		Stack = mongoose.model('Stack'),
		User = mongoose.model('User'),
		// Dropbox = require('dropbox'),
		// config = require('../../../../config/config'),
		_ = require('lodash');


// catch only stack links - returns stack path
var rgStack = /^(.+\/.+)(\/[^\/]+)$/;
// catch collection from the full link
var rgFindCollection = /^(\/[^\/]*)/;

/**
 * Update Favourite
 * Updates the user.favourites item with new name and path
 */
var updateFavourite = function(oldPath, newPath, req, res, callback) {
	// // console.log(oldPath);
	User.findOne({
		_id: req.user._id
	}, function(err, userResult) {
		var favIndex = _.findIndex(userResult.favourites, {'path': oldPath});
		// parentPath + tempUrl - create new path from url and new parent
		var tempUrl = req.body.url.replace(/\//g, ':');
		var rootPath = newPath;
		if (newPath !== '/') {
			rootPath = newPath + '/';
		}
		userResult.favourites[favIndex].path = rootPath + tempUrl;
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
 * Moves link from Inbox to Inbox (link rename essentially)
 */
exports.inboxToInbox = function(req, res, oldPath, newPath) {

		Inbox.findOne({
			user: req.user
		}, function(err, inboxResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find link in inbox
			var linkInPath = _.findIndex(inboxResult.links, {'url' : req.body.url});
			if (linkInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. Link could not be found.' });
			var linkTemp = inboxResult.links[linkInPath];
			linkTemp.modified = new Date();
			linkTemp.parentPath = newPath;
			// remove old link and add new from temp in the same place
			inboxResult.links.splice(linkInPath, 1, linkTemp);
			inboxResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				if (linkTemp.isFavourite)
					updateFavourite(oldPath, newPath, req, res, function() { return res.jsonp(linkTemp); });
				else
					res.jsonp(linkTemp);
			});
		});
};

/**
 * Inbox to Collction
 * Moves link from Inbox to a collection
 */
exports.inboxToCollection = function(req, res, oldPath, newPath) {

		Inbox.findOne({
			user: req.user
		}, function(err, inboxResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			var modifiedDate = new Date();
			// find link in inbox
			var linkInPath = _.findIndex(inboxResult.links, {'url' : req.body.url});
			if (linkInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. Link could not be found.' });
			var linkTemp = inboxResult.links[linkInPath];
			linkTemp.modified = modifiedDate;
			linkTemp.parentPath = newPath;
			// remove old link and save
			inboxResult.links.splice(linkInPath, 1);
			inboxResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				Collection.findOne({
					user: req.user,
					path: newPath
				}, function(err, collectionResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					collectionResult.links.unshift(linkTemp);
					collectionResult.modified = modifiedDate;
					collectionResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						if (linkTemp.isFavourite)
							updateFavourite(oldPath, newPath, req, res, function() { return res.jsonp(linkTemp); });
						else
							res.jsonp(linkTemp);
					});
				});
			});
		});
};

/**
 * Inbox to Stack
 * Moves link from Inbox to a stack
 */
exports.inboxToStack = function(req, res, oldPath, newPath) {

		Inbox.findOne({
			user: req.user
		}, function(err, inboxResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			var modifiedDate = new Date();
			// find link in inbox
			var linkInPath = _.findIndex(inboxResult.links, {'url' : req.body.url});
			if (linkInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. Link could not be found.' });
			var linkTemp = inboxResult.links[linkInPath];
			linkTemp.modified = modifiedDate;
			linkTemp.parentPath = newPath;
			// remove old link and save
			inboxResult.links.splice(linkInPath, 1);
			inboxResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

						Stack.findOne({
							user: req.user,
							path: newPath
						}, function(err, stackResult) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							stackResult.links.unshift(linkTemp);
							stackResult.modified = modifiedDate;
							stackResult.save(function(err) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								if (linkTemp.isFavourite)
									updateFavourite(oldPath, newPath, req, res, function() { return res.jsonp(linkTemp); });
								else
									res.jsonp(linkTemp);
							});
						});
			});
		});
};

/**
 * Collection to Inbox
 * Moves link from Collection to Inbox
 */
exports.collectionToInbox = function(req, res, oldPath, newPath) {

		var collectionPath = oldPath.match(rgFindCollection);
		var modifiedDate = new Date();
		Collection.findOne({
			user: req.user,
			path: collectionPath[1]
		}, function(err, collectionResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find link in collection
			var linkInPath = _.findIndex(collectionResult.links, {'url' : req.body.url});
			if (linkInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. Link could not be found.' });
			var linkTemp = collectionResult.links[linkInPath];
			linkTemp.modified = modifiedDate;
			linkTemp.parentPath = newPath;
			collectionResult.modified = modifiedDate;
			// remove link from collection
			collectionResult.links.splice(linkInPath, 1);
			// save collection
			collectionResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				Inbox.findOne({
					user: req.user
				}, function(err, inboxResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					inboxResult.links.unshift(linkTemp);

					inboxResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						if (linkTemp.isFavourite)
							updateFavourite(oldPath, newPath, req, res, function() { return res.jsonp(linkTemp); });
						else
							res.jsonp(linkTemp);
					});
				});
			});
		});
};

/**
 * Collection to Collection
 * Moves link from Collection to a different collection
 */
exports.collectionToCollection = function(req, res, oldPath, newPath) {

		var collectionPath = oldPath.match(rgFindCollection);
		var modifiedDate = new Date();
		Collection.findOne({
			user: req.user,
			path: collectionPath[1]
		}, function(err, collectionResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find link in collection
			var linkInPath = _.findIndex(collectionResult.links, {'url' : req.body.url});
			if (linkInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. Link could not be found.' });
			var linkTemp = collectionResult.links[linkInPath];
			linkTemp.modified = modifiedDate;
			linkTemp.parentPath = newPath;
			collectionResult.modified = modifiedDate;

				// if it's moved to a new collection
				// remove link from old collection
				collectionResult.links.splice(linkInPath, 1);
				// save old collection
				collectionResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });
					// find new collection
					Collection.findOne({
						user: req.user,
						path: newPath
					}, function(err, newCollectionResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });
						// add a link to new collection
						newCollectionResult.links.unshift(linkTemp);
						newCollectionResult.modified = modifiedDate;
						newCollectionResult.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							if (linkTemp.isFavourite)
								updateFavourite(oldPath, newPath, req, res, function() { return res.jsonp(linkTemp); });
							else
								res.jsonp(linkTemp);
						});
					});
				});
		});
};

/**
 * Collection to Stack
 * Moves link from Collection to Stack
 */
exports.collectionToStack = function(req, res, oldPath, newPath) {

		var modifiedDate = new Date();
		var collectionPath = oldPath.match(rgFindCollection);
		Collection.findOne({
			user: req.user,
			path: collectionPath[1]
		}, function(err, collectionResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find link in collection
			var linkInPath = _.findIndex(collectionResult.links, {'url' : req.body.url});
			if (linkInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. Link could not be found.' });
			var linkTemp = collectionResult.links[linkInPath];
			linkTemp.modified = modifiedDate;
			linkTemp.parentPath = newPath;
			collectionResult.modified = modifiedDate;
			// remove link from collection
			collectionResult.links.splice(linkInPath, 1);

				// save collection
				collectionResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// Find the new stack
					Stack.findOne({
						user: req.user,
						path: newPath
					}, function(err, stackResult) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// update stack - add the link and change modified
						stackResult.links.unshift(linkTemp);
						stackResult.modified = modifiedDate;
						stackResult.save(function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							if (linkTemp.isFavourite)
								updateFavourite(oldPath, newPath, req, res, function() { return res.jsonp(linkTemp); });
							else
								res.jsonp(linkTemp);
						});
					});
				});
		});
};

/**
 * Stack to Inbox
 * Moves link from Stack to Inbox
 */
exports.stackToInbox = function(req, res, oldPath, newPath) {

	var oldRoot = oldPath.match(rgStack);

		Stack.findOne({
			user: req.user,
			path: oldRoot[1]
		}, function(err, stackResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find link in stack
			var linkInPath = _.findIndex(stackResult.links, {'url' : req.body.url});
			if (linkInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. Link could not be found.' });
			var linkTemp = stackResult.links[linkInPath];
			var modifiedDate = new Date();
			linkTemp.modified = modifiedDate;
			linkTemp.parentPath = newPath;
			// remove link from old stack
			stackResult.links.splice(linkInPath, 1);
			stackResult.modified = modifiedDate;
			stackResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				Inbox.findOne({
					user: req.user
				}, function(err, inboxResult) {
					inboxResult.links.unshift(linkTemp);
					inboxResult.modified = modifiedDate;

					inboxResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

							if (linkTemp.isFavourite)
								updateFavourite(oldPath, newPath, req, res, function() { return res.jsonp(linkTemp); });
							else
								res.jsonp(linkTemp);
					});
				});
			});
		});
};

/**
 * Stack to Collection
 * Moves link from Stack to Collection
 */
exports.stackToCollection = function(req, res, oldPath, newPath) {

	var oldRoot = oldPath.match(rgStack);

		Stack.findOne({
			user: req.user,
			path: oldRoot[1]
		}, function(err, stackResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find link in stack
			var linkInPath = _.findIndex(stackResult.links, {'url' : req.body.url});
			if (linkInPath === -1)
				return res.status(404).jsonp({	errors: 'Invalid request. Link could not be found.' });
			var linkTemp = stackResult.links[linkInPath];
			var modifiedDate = new Date();
			linkTemp.modified = modifiedDate;
			linkTemp.parentPath = newPath;
			// remove link from old stack
			stackResult.links.splice(linkInPath, 1);
			stackResult.modified = modifiedDate;
			stackResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				Collection.findOne({
					user: req.user,
					path: newPath
				}, function(err, collectionResult) {
					// push new link and update collection
					collectionResult.links.unshift(linkTemp);
					collectionResult.modified = modifiedDate;
					// if linkInPath === 0 - update old collection
					collectionResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						if (linkTemp.isFavourite)
							updateFavourite(oldPath, newPath, req, res, function() { return res.jsonp(linkTemp); });
						else
							res.jsonp(linkTemp);
					});
				});
			});
		});
};

/**
 * Stack to Stack
 * Moves link from Stack to a different Stack
 */
exports.stackToStack = function(req, res, oldPath, newPath) {
	var oldRoot = oldPath.match(rgStack);

	Stack.findOne({
		user: req.user,
		path: oldRoot[1]
	}, function(err, stackResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		// find link in stack
		var linkInPath = _.findIndex(stackResult.links, {'url' : req.body.url});
		if (linkInPath === -1)
			return res.status(404).jsonp({	errors: 'Invalid request. Link could not be found.' });
		var linkTemp = stackResult.links[linkInPath];
		var modifiedDate = new Date();
		linkTemp.modified = modifiedDate;
		linkTemp.parentPath = newPath;
		// remove link from old stack
		stackResult.links.splice(linkInPath, 1);
		stackResult.modified = modifiedDate;
		stackResult.save(function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// find new stack
			Stack.findOne({
				user: req.user,
				path: newPath
			}, function(err, newStackResult) {
				// push new link and update collection
				newStackResult.links.unshift(linkTemp);
				newStackResult.modified = modifiedDate;
				// if linkInPath === 0 - update old collection
				newStackResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					if (linkTemp.isFavourite)
						updateFavourite(oldPath, newPath, req, res, function() { return res.jsonp(linkTemp); });
					else
						res.jsonp(linkTemp);
				});
			});
		});
	});
};
