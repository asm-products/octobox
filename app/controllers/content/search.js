'use strict';

module.exports = function(req, res) {
	res.jsonp(req.params);
};