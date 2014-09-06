'use strict';

var mongoose = require('mongoose'),
		fs = require('fs'),
		path = require('path'),
		Dropbox = require('dropbox'),
		File = mongoose.model('File'),
		Link = mongoose.model('Link'),
		Inbox = mongoose.model('Inbox'),
		Collection = mongoose.model('Collection'),
		User = mongoose.model('User'),
		// models = require('./models'),
		// _ = require('lodash'),
		config = require('../../../../config/config');

var currentPath = path.dirname(__filename);
var onboardPath = path.join(currentPath, '../../../../onboard/');

var createInbox = function (res, user, callback) {
	var inbox = new Inbox();
	inbox.user = user._id;
	inbox.save(function(err) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		callback();
	});
};

var seedNote = function (res, user, callback) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});
	var path = '/Welcome to Octobox.md';
	var noteName = 'Welcome to Octobox';
	var noteData = fs.readFileSync(onboardPath + 'Welcome to Octobox.md', 'utf8');
	// Call Dropbox first, then create a folder in our DB on callback
	// Second argument on .mkdir callback is a new folder stat object
	client.writeFile(path, noteData, { noOverwrite: true }, function(err, stat) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		var file = new File();
		file.name = noteName;
		file.path = stat.path.toLowerCase(); // in case file existed and hase '(1)' in name, etc.
		file.type = 'note';
		file.size = stat.humanSize;
		file.isFavourite = true;

		Inbox.findOne({
			user: user._id
		}, function (err, inboxResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			if (!inboxResult)
				return res.status(400).jsonp('Document could not be found.');

			inboxResult.files.push(file);

			inboxResult.save(function (err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// update user
				User.findOne({
					_id: user._id
				}, function(err, userResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });
					if (!userResult) {
						return res.status(404).jsonp({
							message: 'The user could not be found',
							kind: 'error'
						});
					}

					userResult.favourites.push({
						type: 'note',
						kind: 'file',
						path: file.path,
						name: file.name
					});
					userResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						callback();
					});
				});
			});
		});
	});
};

var seedLink = function (res, user, callback) {
	var link = new Link({
		name: 'Octobox - Organization for busy minds with the power of Dropbox',
		faviconUrl: 'https://www.google.com/s2/favicons?domain=http://useoctobox.com',
		url: 'http://useoctobox.com/',
		parentPath: '/'
	});

	Inbox.findOne({
		user: user._id
	}, function (err, inboxResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		if (!inboxResult)
			return res.status(400).jsonp('Document could not be found');

		inboxResult.links.push(link);
		inboxResult.save(function (err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			callback();
		});
	});
};

var seedOnboardImage	= function (res, user, callback) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});
	// FOX
	// var path = '/happy fox welcomes you.jpg';
	// var imageName = 'Happy Fox Welcomes You';
	// Onboard
	var path = '/how to use octobox.jpg';
	var imageName = 'How to Use Octobox';
	var imageData = fs.readFileSync(onboardPath + 'How to Use Octobox.jpg');

	// Call Dropbox first, then create a folder in our DB on callback
	// Second argument on .mkdir callback is a new folder stat object
	client.writeFile(path, imageData, { noOverwrite: true }, function(err, stat) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		var file = new File();
		file.name = imageName;
		file.path = stat.path.toLowerCase(); // in case file existed and hase '(1)' in name, etc.
		file.type = 'image';
		file.hasThumbnail = true;
		file.size = stat.humanSize;

		Inbox.findOne({
			user: user._id
		}, function (err, inboxResult) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			if (!inboxResult)
				return res.status(400).jsonp('Document could not be found.');

			inboxResult.files.push(file);

			inboxResult.save(function (err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				callback();
			});
		});
	});
};

// Create a collection with a fox.
var seedTheFox	= function (res, user, callback) {
	// Dropbox Init
	var client = new Dropbox.Client({
		key			: config.dropboxKey,
		secret	: config.dropboxSecret,
		token		: user.dropbox.token // token saved through /api/dropbox/auth
	});
	// FOX
	var path = '/animals/happy fox welcomes you.jpg';
	var imageName = 'Happy Fox Welcomes You';
	// Onboard
	var imageData = fs.readFileSync(onboardPath + 'Happy Fox Welcomes You.jpg');

	// Call Dropbox first, then create a folder in our DB on callback
	// Second argument on .mkdir callback is a new folder stat object
	client.writeFile(path, imageData, { noOverwrite: true }, function(err, stat) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		var file = new File();
		file.name = imageName;
		file.path = stat.path.toLowerCase(); // in case file existed and hase '(1)' in name, etc.
		file.type = 'image';
		file.hasThumbnail = true;
		file.size = stat.humanSize;

		var collection = new Collection({
			name: 'Animals',
			path: '/animals',
			isFavourite: true,
			user: user,
			color: 2,
			files: []
		});

		collection.files.push(file);

		collection.save(function (err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// update user
			User.findOne({
				_id: user._id
			}, function(err, userResult) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				if (!userResult) {
					return res.status(404).jsonp({
						message: 'The user could not be found',
						kind: 'error'
					});
				}

				userResult.favourites.push({
					kind: 'collection',
					path: collection.path,
					name: collection.name,
					color: 2
				});
				userResult.save(function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					callback();
				});
			});
		});
	});
};
var seedContent = function (res, user, callback) {
	createInbox(res, user, function () {
		seedLink(res, user, function () {
			seedOnboardImage(res, user, function () {
				seedNote(res, user, function () {
					seedTheFox(res, user, function () {
						callback();
					});
				});
			});
		});
	});
};

/**
 * Initialize
 * Checks if it's the first sync ever or not and acts accordingly
 */
module.exports = function (res, user, cursor, callback) {
	if (cursor === null) { // seed account with starter files
		// initialize account
		seedContent(res, user, function () {
			callback();
		});
	} else {
		callback();
	}
};
