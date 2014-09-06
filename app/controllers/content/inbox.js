'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Inbox = mongoose.model('Inbox'),
		// Dropbox = require('dropbox'),
		// config = require('../../../config/config'),
		_ = require('lodash');


exports.show = function(req, res) {

	var user = req.user;

	Inbox.findOne({
		user: user
	}, function(err, inboxResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (inboxResult)
			return res.jsonp(inboxResult);
		else
			return res.status(404).jsonp('Inbox could not be found or user is not authorized.');
	});
};


// Other methods

exports.files = function(req, res) {

	var user = req.user;

	Inbox.findOne({
		user: user
	}, function(err, inboxResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (inboxResult) {
			// Sort array by stringy date (probably awful performance-wise)
			inboxResult = inboxResult.toObject();
			_(inboxResult.links).each(function (link) {
				link.path = '/' + link.url.replace(/\//g, ':');
				link.kind = 'link';
			});
			var files = _.sortBy(inboxResult.files.concat(inboxResult.links), 'modified');
			return res.jsonp(files.reverse());
		}
		else
			return res.status(404).jsonp('Inbox could not be found or user is not authorized.');
	});

};
