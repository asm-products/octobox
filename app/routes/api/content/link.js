'use strict';

var link = require('../../../controllers/content/link');
var authorization = require('../../middlewares/authorization');

// link authorization helpers
var hasAuthorization = function(req, res, next) {
  if (req.body.user !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

module.exports = function(app) {

  // only routing methods for a specific link
  app.put('/api/content/link/:link/move', authorization.requiresLoginAPI, hasAuthorization, link.move);
  app.put('/api/content/link/:collection/:link/move', authorization.requiresLoginAPI, hasAuthorization, link.move);
  app.put('/api/content/link/:collection/:stack/:link/move', authorization.requiresLoginAPI, hasAuthorization, link.move);

  // Full REST api for a single link
  app.get('/api/content/link/:link', link.show);
  app.get('/api/content/link/:collection/:link', link.show);
  app.get('/api/content/link/:collection/:stack/:link', link.show);

  app.post('/api/content/link/:link', authorization.requiresLoginAPI, link.create);
  app.post('/api/content/link/:collection/:link', authorization.requiresLoginAPI, link.create);
  app.post('/api/content/link/:collection/:stack/:link', authorization.requiresLoginAPI, link.create);

  app.put('/api/content/link/:link', authorization.requiresLoginAPI, hasAuthorization, link.update);
  app.put('/api/content/link/:collection/:link', authorization.requiresLoginAPI, hasAuthorization, link.update);
  app.put('/api/content/link/:collection/:stack/:link', authorization.requiresLoginAPI, hasAuthorization, link.update);

  app.del('/api/content/link/:link', authorization.requiresLoginAPI, link.destroy);
  app.del('/api/content/link/:collection/:link', authorization.requiresLoginAPI, link.destroy);
  app.del('/api/content/link/:collection/:stack/:link', authorization.requiresLoginAPI, link.destroy);

};
