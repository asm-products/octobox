'use strict';

var content = require('../../../controllers/content/sync');

module.exports = function(app) {
	app.get('/api/content/sync', content.sync);
};