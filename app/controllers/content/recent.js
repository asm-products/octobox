'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Collection = mongoose.model('Collection'),
		Inbox = mongoose.model('Inbox'),
		Stack = mongoose.model('Stack'),
		// Dropbox = require('dropbox'),
		// config = require('../../../config/config'),
		_ = require('lodash');

exports.show = function(req, res) {

	var user = req.user;
	var recent = [];

	// Get Inbox Stuff First
	Inbox.findOne({
		user: user
	}, function(err, inbox) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (inbox) {
			_(inbox.files).forEach(function(file) {
				recent.push(file);
			});
			inbox = inbox.toObject();
			_(inbox.links).forEach(function(link) {
				link.path = '/' + link.url.replace(/\//g, ':');
				link.kind = 'link';
				recent.push(link);
			});
		} else {
			return res.status(404).jsonp('Inbox could not be found or user is not authorized.');
		}

		// Then Get Collections
		Collection.find({
			user: user
		}, function(err, collections) {
			if (err)
				return res.status(400).jsonp({	errors: err });
			if (0 < collections.length) {
				_(collections).forEach(function(collection) {
					_(collection.files).forEach(function(file) {
						recent.push(file);
					});
					collection = collection.toObject();
					_(collection.links).forEach(function(link) {
						link.path = collection.path + '/' + link.url.replace(/\//g, ':');
						link.kind = 'link';
						recent.push(link);
					});
				});
			}
			// else {
			// 	return res.status(404).jsonp('Collections could not be found or user is not authorized.');
			// }

			// Then Get Stacks
			Stack.find({
				user: user
			}, function(err, stacks) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				if (0 < stacks.length) {
					_(stacks).forEach(function(stack) {
						_(stack.files).forEach(function(file) {
							recent.push(file);
						});
						stack = stack.toObject();
						_(stack.links).forEach(function(link) {
							link.path = stack.path + '/' + link.url.replace(/\//g, ':');
							link.kind = 'link';
							recent.push(link);
						});
					});
				}
				// else {
				// 	return res.status(404).jsonp('Stacks could not be found or user is not authorized.');
				// }
				// Sort array by stringy date (probably awful performance-wise)
				recent = _.sortBy(recent, 'modified');

				res.jsonp(_.first(recent.reverse(), 50));
			});
		});
	});
};
