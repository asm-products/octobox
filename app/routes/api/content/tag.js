'use strict';

var tag = require('../../../controllers/content/tag');
var authorization = require('../../middlewares/authorization');

// Collection authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.body.user !== req.user.id) {
		return res.send(401, 'User is not authorized');
	}
	next();
};

module.exports = function(app) {
	// Return all tags belonging to the user
	app.get('/api/content/tag', tag.find);

	app.get('/api/content/tag/:tag', tag.show);

	app.get('/api/content/tag/:tag/items', tag.items);
	app.post('/api/content/tag/:tag', authorization.requiresLoginAPI, tag.create);
	app.put('/api/content/tag/:tag', authorization.requiresLoginAPI, hasAuthorization, tag.update);
	app.put('/api/content/tag/:tag/remove', authorization.requiresLoginAPI, hasAuthorization, tag.destroy);
	// Assign a tag to a file
	app.put('/api/content/tag/:tag/assign', authorization.requiresLoginAPI, hasAuthorization, tag.assign);
	// Unassign tag from a file
	app.put('/api/content/tag/:tag/unassign', authorization.requiresLoginAPI, hasAuthorization, tag.unassign);
};
