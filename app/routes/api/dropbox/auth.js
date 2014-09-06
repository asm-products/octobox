'use strict';

var dropbox = require('../../../controllers/dropbox');

module.exports = function(app) {
	// app.get('/api/dropbox/auth', dropbox.auth);
	app.get('/authorize', dropbox.auth);
	app.get('/callback', dropbox.callback);
	app.get('/api/dropbox/revoke', dropbox.revoke);
};
