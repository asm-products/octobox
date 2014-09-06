'use strict';

var search = require('../../../controllers/content/search');
var authorization = require('../../middlewares/authorization');

module.exports = function(app) {
	app.get('/api/content/search', authorization.requiresLoginAPI, search);
};