'use strict';

/**
 * Module dependencies.
 */
var Dropbox = require('dropbox'),
		config = require('../../../config/config');
		// _ = require('lodash');

/**
* Show Thumbnail
* Returns thumbnail URL based on file path
*/
exports.show = function(req, res) {

	// capture request parameters
	var collection = req.params.collection || '',
		stack = req.params.stack || '',
		file = req.params.file,
		user = req.user;

	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});

	// parse and create a file path out of them
	if (collection !== '') collection += '/';
	if (stack !== '') stack += '/';
	var path = '/' + collection + stack + file;

	// Computes a URL that generates a thumbnail for a file in the user's Dropbox
	var thumbnailUrl = client.thumbnailUrl(path, {
		size: 'l'
	});

	// TODO: Test if this works with frontend
	res.jsonp(thumbnailUrl);
};