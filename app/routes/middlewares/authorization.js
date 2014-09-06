'use strict';

/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
	if (!req.isAuthenticated()) {
		req.flash('error', 'You need to log in first.');
		res.redirect('/signin');
	} else{
		next();
	}
};

exports.requiresLoginAPI = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.send(401, 'User is not authorized');
	}
	next();
};