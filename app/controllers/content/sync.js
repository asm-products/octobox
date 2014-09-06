'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Collection = mongoose.model('Collection'),
		// Inbox = mongoose.model('Inbox'),
		Stack = mongoose.model('Stack'),
		async = require('async'),
		Dropbox = require('dropbox'),
		_ = require('lodash'),
		initialize = require('./helpers/initialize'),
		processResponse = require('./helpers/process-response'),
		models = require('./helpers/models'),
		config = require('../../../config/config');

/**
 * Build Content
 * Gets delta from Dropbox API and updates the database with changes
 */
exports.sync = function(req, res) {
	var user = req.user;

	if (user === undefined || user.dropbox === undefined || user.dropbox.token === undefined) 
		return res.jsonp('User is not authorized to sync content.');

	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	// If cursor exists, get latest changes, otherwise it's a first time
	var cursor = user.dropbox.cursor ? user.dropbox.cursor : null;
	// var cursor = null;

	// initialize dropbox - seeds files on first sync only
	initialize(res, user, cursor, function () {
		// get client delta
		client.delta(cursor, function(err, response) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// Mock result object
			var result = {
				inbox : {
					files: []
				},
				collections : [],
				stacks: [],
				remove: []
			};
			// Convert result from Dropbox API to something that we can use with Mongo.
			result = processResponse(response, result);

			async.series([
				function (done) {
					// Check if Inbox exists
					// Inbox.count({
					// 	user : user,
					// 	type : 'Inbox'
					// }, function(error, count) {
					// 	if (err) return done(err);
					//
					// 	if (count === 0){
					// 		// If doesn't exist
					// 		models.createInbox(req, res, result.inbox);
					// 		done(null, 1);
					// 	} else {
					// 		// If inbox already exists
					// 		if (result.inbox.files.length > 0) {
					// 			// If there's new files in the inbox.
					// 			models.addToInbox(req, res, result.inbox);
					// 		}
					// 		done(null, 1);
					// 	}
					// });
					if (result.inbox.files.length > 0) {
						// If there's new files in the inbox.
						models.addToInbox(req, res, result.inbox);
					}
					done(null, 1);
				},
				function (done) {
					// Create & Populate Collections
					if (result.collections.length === 0)
						return done(null, 2);

					async.eachLimit(result.collections, 1, function(collectionData, callback) {
						Collection.count({
							user: user,
							path: collectionData.path
						}, function(err, count) {
							if (err) return callback(err);

							if (count === 0){
								// If doesn't exist
								models.createCollection(req, res, collectionData, function() {
									callback();
								});
							} else {
								// If collection already exists
								models.updateCollection(req, res, collectionData, function() {
									callback();
								});
							}
						});
					}, function(err) {
						if (err) return done(err);

						return done(null, 2);
					});
				},
				function (done) {
					if (result.stacks.length === 0)
						return done(null, 3);
					// Create & Populate Stacks
					async.eachLimit(result.stacks, 1, function(stackData, callback) {
						Stack.count({
							user: user,
							path: stackData.path
						}, function(error, count) {
							if (err) return callback(err);

							if (count === 0){
								// If doesn't exist
								models.createStack(req, res, stackData, function() {
									callback();
								});
							} else {
								// If collection already exists
								models.updateStack(req, res, stackData, function() {
									callback();
								});
							}
						});
					}, function(err) {
						if (err) return done(err);

						return done(null, 3);
					});
				},
				function (done) {
					// Handle Remove
					// run only one at a time
					async.eachLimit(result.remove, 1, function(removeData, callback) {
						models.removeThing(req, res, removeData, function() {
							callback();
						});
					}, function(err) {
						if (err) return done(err);
						return done(null, 4);
					});
				}
				], function (err) {
					if (err){
						// console.log(err);
						return res.status(400).jsonp({	errors: err });
					}
					// If all is well until now, update user object with the cursor
					user.dropbox = _.extend(user.dropbox, {
						cursor: response.cursorTag
					});

					user.save(function(errs) {
						if (errs){
							// console.log(errs);
							return res.status(400).jsonp({	errors: err });
						}

						return res.jsonp('Content successfully synced with Dropbox');
					});
				});
		});
	});
};
