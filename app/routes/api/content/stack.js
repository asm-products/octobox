'use strict';

var stack = require('../../../controllers/content/stack');
var authorization = require('../../middlewares/authorization');

// Stack authorization helpers
// TODO: req.stack has to be the collection
var hasAuthorization = function(req, res, next) {
	if (req.body.user !== req.user.id) {
		return res.send(401, 'User is not authorized');
	}
	next();
};

module.exports = function(app) {
	// Get files only
	app.get('/api/content/stack/:parent/:stack/files', stack.files);
	// Get thumbnail
	app.get('/api/content/stack/:parent/:stack/thumbnail', stack.thumbnail);

	app.put('/api/content/stack/:parent/:stack/move', authorization.requiresLoginAPI, hasAuthorization, stack.move);

	app.get('/api/content/stack/:parent/:stack', stack.show);
	app.post('/api/content/stack/:parent/:stack', authorization.requiresLoginAPI, stack.create);
	app.put('/api/content/stack/:parent/:stack', authorization.requiresLoginAPI, hasAuthorization, stack.update);
	app.del('/api/content/stack/:parent/:stack', authorization.requiresLoginAPI, stack.destroy);

};
