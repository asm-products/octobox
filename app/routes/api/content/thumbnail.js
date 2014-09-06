'use strict';

var thumbnail = require('../../../controllers/content/thumbnail');

module.exports = function(app) {

	// Get thumbnail url
	app.get('/api/content/thumbnail/:file', thumbnail.show);
	app.get('/api/content/thumbnail/:collection/:file', thumbnail.show);
	app.get('/api/content/thumbnail/:collection/:stack/:file', thumbnail.show);

};
