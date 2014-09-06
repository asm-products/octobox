'use strict';

// module.exports = function(app) {
//   // Home route
//   var index = require('../controllers/index');
//   app.get('/', index.render);
// };

// App route
var application = require('../controllers/application');
var authorization = require('./middlewares/authorization');

module.exports = function(app) {
	app.get('/', authorization.requiresLogin, application.render);
};
