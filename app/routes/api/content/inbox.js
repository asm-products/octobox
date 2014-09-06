'use strict';

var inbox = require('../../../controllers/content/inbox');
var authorization = require('../../middlewares/authorization');

module.exports = function(app) {

	// only GET method for inbox - it cannot be deleted and there's
	// nothing to update, but files, which are handled in /file/:path
	app.get('/api/content/inbox', authorization.requiresLoginAPI, inbox.show);

	// Get files only
	app.get('/api/content/inbox/files', authorization.requiresLoginAPI, inbox.files);
};
