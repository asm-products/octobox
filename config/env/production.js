'use strict';

module.exports = {
	db: 'mongodb://localhost/octobox',
	port: 3000,
	httpsCallback: 'app.useoctobox.com:443',
	clientCallback: 'app.useoctobox.com:80',
	portSecure: 8080,
	redisdb: 'http:localhost:6379',
	app: {
		name: 'Octobox'
	}
}
