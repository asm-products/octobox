'use strict';

/*
 * Module dependencies.
 */
var express = require('express'),
		redisStore = require('connect-redis')(express),
		flash = require('connect-flash'),
		helpers = require('view-helpers'),
		config = require('./config'),
		toobusy = require('toobusy');

module.exports = function (app, passport, db) {
	app.set('showStackError', true);

	// Prettify HTML
	app.locals.pretty = true;

	// The absolute first piece of middle-ware registered, to block requests
	// before we spend any time on them.
	app.use(function(req, res, next) {
		// check if we're toobusy() - note, this call is extremely fast, and returns
		// state that is cached at a fixed interval
		if (toobusy()) res.send(503, 'I\'m busy right now, sorry.');
		else next();
	});

	// Should be placed before express.static
	// To ensure that all assets and data are compressed (utilize bandwidth)
	app.use(express.compress({
		filter: function (req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		// Levels are specified in a range of 0 to 9, where-as 0 is
		// no compression and 9 is best compression, but slowest
		level: 9
	}));

	// Only use logger for dev environment
	if (process.env.NODE_ENV === 'development') {
		// app.use(express.logger('dev'));
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	}
	if (process.env.NODE_ENV === 'production') {
		app.use(express.errorHandler());
	}

	// Set views path, template engine and default layout
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');

	// Enable jsonp
	app.enable('jsonp callback');

	app.configure(function () {
		// The cookieParser should be above session
		app.use(express.cookieParser());

		// Request body parsing middleware should be above methodOverride
		app.use(express.urlencoded());
		app.use(express.json());
		app.use(express.methodOverride());

		// Express/Redis session storage
		app.use(express.session({
			secret: config.sessionSecret,
			cookie: {
				maxAge: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90) // 90 days
			},
			store: new redisStore({})
		}));

		// Dynamic helpers
		app.use(helpers(config.app.name));

		// Use passport session
		app.use(passport.initialize());
		app.use(passport.session());

		// Connect flash for flash messages
		app.use(flash());

		// Redirect to https in production
		app.use(function(req, res, next) {
			if (!req.secure && process.env.NODE_ENV === 'production') {
				return res.redirect('https://' + req.get('host') + req.url);
			}
			next();
		});

		// Routes should be at the last
		app.use(app.router);

		// Setting the fav icon and static folder
		// app.use(express.favicon());
		app.use(express.static(config.root + '/public'));

		// Assume "not found" in the error msgs is a 404. this is somewhat
		// silly, but valid, you can do whatever you like, set properties,
		// use instanceof etc.
		app.use(function(err, req, res, next) {
			// Treat as 404
			if (~err.message.indexOf('not found')) {
				return next();
			}

			// Log it
			console.error(err.stack);

			// Error page
			res.status(500).render('500', {
				error: err.stack
			});
		});

		// Assume 404 since no middleware responded
		app.use(function(req, res, next) {
			res.status(404).render('404', {
				url: req.originalUrl,
				error: 'Not found'
			});
		});
	});
};
