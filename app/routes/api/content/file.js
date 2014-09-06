'use strict';

var file = require('../../../controllers/content/file');
var authorization = require('../../middlewares/authorization');

// File authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.body.user !== req.user.id) {
		return res.send(401, 'User is not authorized');
	}
	next();
};

module.exports = function(app) {

	// Get Data of a file
	app.get('/api/content/file/:file/url', file.makeUrl);
	app.get('/api/content/file/:collection/:file/url', file.makeUrl);
	app.get('/api/content/file/:collection/:stack/:file/url', file.makeUrl);

	// Generate and get public URL of a file
	app.get('/api/content/file/:file/share', file.shareUrl);
	app.get('/api/content/file/:collection/:file/share', file.shareUrl);
	app.get('/api/content/file/:collection/:stack/:file/share', file.shareUrl);

	// only routing methods for a specific file
	app.put('/api/content/file/:file/move', authorization.requiresLoginAPI, hasAuthorization, file.move);
	app.put('/api/content/file/:collection/:file/move', authorization.requiresLoginAPI, hasAuthorization, file.move);
	app.put('/api/content/file/:collection/:stack/:file/move', authorization.requiresLoginAPI, hasAuthorization, file.move);

	// Create and initialise note
	app.post('/api/content/file/:file/note', authorization.requiresLoginAPI, file.createNote);
	app.post('/api/content/file/:collection/:file/note', authorization.requiresLoginAPI, file.createNote);
	app.post('/api/content/file/:collection/:stack/:file/note', authorization.requiresLoginAPI, file.createNote);

	// Create and initialise note
	app.post('/api/content/file/:file/addurl', authorization.requiresLoginAPI, file.createFromURL);
	app.post('/api/content/file/:collection/:file/addurl', authorization.requiresLoginAPI, file.createFromURL);
	app.post('/api/content/file/:collection/:stack/:file/addurl', authorization.requiresLoginAPI, file.createFromURL);

	// Save note
	app.put('/api/content/file/:file/save', authorization.requiresLoginAPI, hasAuthorization, file.saveNote);
	app.put('/api/content/file/:collection/:file/save', authorization.requiresLoginAPI, hasAuthorization, file.saveNote);
	app.put('/api/content/file/:collection/:stack/:file/save', authorization.requiresLoginAPI, hasAuthorization, file.saveNote);

	// Full REST api for a single file
	app.get('/api/content/file/:file', file.show);
	app.get('/api/content/file/:collection/:file', file.show);
	app.get('/api/content/file/:collection/:stack/:file', file.show);

	app.post('/api/content/file/:file', authorization.requiresLoginAPI, file.create);
	app.post('/api/content/file/:collection/:file', authorization.requiresLoginAPI, file.create);
	app.post('/api/content/file/:collection/:stack/:file', authorization.requiresLoginAPI, file.create);

	app.put('/api/content/file/:file', authorization.requiresLoginAPI, hasAuthorization, file.update);
	app.put('/api/content/file/:collection/:file', authorization.requiresLoginAPI, hasAuthorization, file.update);
	app.put('/api/content/file/:collection/:stack/:file', authorization.requiresLoginAPI, hasAuthorization, file.update);

	app.del('/api/content/file/:file', authorization.requiresLoginAPI, file.destroy);
	app.del('/api/content/file/:collection/:file', authorization.requiresLoginAPI, file.destroy);
	app.del('/api/content/file/:collection/:stack/:file', authorization.requiresLoginAPI, file.destroy);

};
