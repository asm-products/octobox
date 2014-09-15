'use strict';

// User routes use users controller
var users = require('../controllers/users');

module.exports = function(app) {

	app.get('/signin', users.signin);
	app.get('/signup', users.signup);
	app.get('/signout', users.signout);

	// Forgotten password
	app.get('/forgot', users.forgot);
	app.post('/forgot', users.forgotSubmit);

	app.get('/reset/:token', users.resetToken);
	app.post('/reset/:token', users.resetSubmit);

};
