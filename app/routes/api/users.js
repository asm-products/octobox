'use strict';

// User routes use users controller
var users = require('../../controllers/users');
var authorization = require('../middlewares/authorization');

module.exports = function(app, passport) {

	app.get('/api/users/me', users.me);

	// Setting up the users api
	app.post('/api/users', users.create);
  app.delete('/api/users', authorization.requiresLoginAPI, users.remove);
	app.put('/api/users/:userId/betastatus', authorization.requiresLoginAPI, users.updateBetaStatus);
	app.put('/api/users/:userId', authorization.requiresLoginAPI, users.update);

	// Setting up the userId param
	app.param('userId', users.user);

	// Setting the local strategy route
	app.post('/api/users/session', passport.authenticate('local', {
		failureRedirect: '/signin',
		failureFlash: true
	}), users.session);

	// Favourites
	app.put('/api/content/favourites/add', authorization.requiresLoginAPI, users.addFavourite);
	app.put('/api/content/favourites/remove', authorization.requiresLoginAPI, users.removeFavourite);
};
