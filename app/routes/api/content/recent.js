'use strict';

var recent = require('../../../controllers/content/recent');
var authorization = require('../../middlewares/authorization');

module.exports = function(app) {

	// only GET method for recent - it cannot be deleted and there's
	// nothing to update, but files, which are handled in /file/:path
	app.get('/api/content/recent', authorization.requiresLoginAPI, recent.show);
};
