'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
		https = require('https'),
		fs = require('fs'),
		passport = require('passport'),
		cluster = require('express-cluster'),
		https_options = {},
		appSecure;

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// Set the node enviornment variable if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Initializing system variables
var config = require('./config/config'),
		mongoose = require('mongoose');

// Load certificates for https for production
if (process.env.NODE_ENV === 'production'){
	https_options = {
			key: fs.readFileSync('./secure/octobox.key'),
			ca: [fs.readFileSync('./secure/AddTrustExternalCARoot.crt'),
					fs.readFileSync('./secure/COMODORSAAddTrustCA.crt'),
					fs.readFileSync('./secure/COMODORSADomainValidationSecureServerCA.crt')],
			cert: fs.readFileSync('./secure/app_useoctobox_com.crt')
	};
}

function server() {
	// Bootstrap db connection
	var db = mongoose.connect(config.db);

	// Bootstrap models
	var models_path = __dirname + '/app/models';
	var walkModels = function (path) {
		fs.readdirSync(path).forEach(function(file) {
			var newPath  = path + '/' + file;
			var stat = fs.statSync(newPath);
			if (stat.isFile()) {
				if (/(.*)\.(js$|coffee$)/.test(file)) {
					require(newPath);
				}
			} else if(stat.isDirectory()) {
				walkModels(newPath);
			}
		});
	};
	walkModels(models_path);

	// Bootstrap passport config
	require('./config/passport')(passport);

	// HTTP create
	var app = express();

	// HTTPS create
	if (process.env.NODE_ENV === 'production')
		appSecure = https.createServer(https_options, app);

	// Express settings
	require('./config/express')(app, passport, db);

	// Dropbox Auth Server
	require('./config/dropbox');

	// Bootstrap routes
	var routes_path = __dirname + '/app/routes';
	var walkRoutes = function(path) {
		fs.readdirSync(path).forEach(function(file) {
			var newPath = path + '/' + file;
			var stat = fs.statSync(newPath);
			if (stat.isFile()) {
				if (/(.*)\.(js$|coffee$)/.test(file)) {
					require(newPath)(app, passport);
				}
			// We skip the app/routes/middlewares directory as it is meant to be
			// used and shared by routes as further middlewares and is not a
			// route by itself
			} else if (stat.isDirectory() && file !== 'middlewares') {
				walkRoutes(newPath);
			}
		});
	};
	walkRoutes(routes_path);

	// Start app by listening on <port>
	var port = process.env.PORT || config.port;

	app.listen(port);
	console.log('Express app started on port ' + port);

	if (process.env.NODE_ENV === 'production'){
		appSecure.listen(config.portSecure);
		console.log('HTTPS callback server port ' + config.portSecure);
	}

	// Expose app
	exports = module.exports = app;
}

if (process.env.NODE_ENV === 'test') {
	server();
}
else {
	cluster(function () {
		server();
	});
}
