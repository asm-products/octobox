'use strict';

var _ = require('lodash');

// Extend the base configuration in all.js with environment
// specific configuration.
module.exports = _.extend(
	// Load env settings
	require(__dirname + '/../config/env/all.js'),
	require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.js') || {}
);

// Load secure production only keys or dev keys
if (process.env.NODE_ENV == 'production'){
	module.exports = _.extend(
		module.exports,
		// Load secret production keys
		require(__dirname + '/../secure/keys.js')
	);
} else {
	module.exports = _.extend(
		module.exports,
		// Load development keys
		require(__dirname + '/../config/secret-keys.js')
	);
}