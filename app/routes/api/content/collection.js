'use strict';

var collection = require('../../../controllers/content/collection');
var authorization = require('../../middlewares/authorization');

// Collection authorization helpers
var hasAuthorization = function(req, res, next) {
	//	THIS SHOULD WORK WITH ANGULAR?
	// if (req.body.user !== req.user.id) {
	// 	return res.send(401, 'User is not authorized');
	// }
	next();
};

module.exports = function(app) {
	// Return all collections belonging to the user
	app.get('/api/content/collection', collection.find);
	// Get files
	app.get('/api/content/collection/:collection/files', collection.files);
	app.get('/api/content/collection/:collection/stacks', collection.stacks);
	app.get('/api/content/collection/:collection/all', collection.all);
	// Get thumbnail
	app.get('/api/content/collection/:collection/thumbnail', collection.thumbnail);
	// Move / Rename Collection (perserves metadata)
	app.put('/api/content/collection/:collection/move', authorization.requiresLoginAPI, hasAuthorization, collection.move);

	app.get('/api/content/collection/:collection', collection.show);
	app.post('/api/content/collection/:collection', authorization.requiresLoginAPI, collection.create);
	app.put('/api/content/collection/:collection', authorization.requiresLoginAPI, hasAuthorization, collection.update);
	app.del('/api/content/collection/:collection', authorization.requiresLoginAPI, collection.destroy);
};
