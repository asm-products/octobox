'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	crypto = require('crypto'),
	request = require('request'),
    url = require('url'),
	Collection = mongoose.model('Collection'),
	Inbox = mongoose.model('Inbox'),
	Stack = mongoose.model('Stack'),
	Tag = mongoose.model('Tag'),
	_ = require('lodash'),
	config = require('../../config/config');


function generateCSRFToken() {
    return crypto.randomBytes(18).toString('base64')
        .replace(/\//g, '-').replace(/\+/g, '_');
}
function generateRedirectURI() {
	// Use https callback for production
	if (process.env.NODE_ENV === 'production'){
	    return url.format({
	            protocol: 'https',
	            host: config.httpsCallback,
	            pathname: '/callback'
	    });
	} else {
		return url.format({
				protocol: 'http',
				host: config.clientCallback,
				pathname: '/callback'
		});
	}
}
function generateClientURI() {
		return url.format({
						protocol: 'http',
						host: config.clientCallback,
						pathname: '/',
						hash: '#/callback'
		});
}

/**
 * Authorize Dropbox
 * Saves access token and Dropbox UID for use with Dropbox API
 */
exports.auth = function(req, res) {

	var csrfToken = generateCSRFToken();
    res.cookie('csrf', csrfToken);
    res.redirect(url.format({
        protocol: 'https',
        hostname: 'www.dropbox.com',
        pathname: '1/oauth2/authorize',
        query: {
            client_id: config.dropboxKey,
            response_type: 'code',
            state: csrfToken,
            redirect_uri: generateRedirectURI(req)
        }
    }));

};
exports.callback = function (req, res) {
	if (req.query.error) {
        return res.send('ERROR ' + req.query.error + ': ' + req.query.error_description);
    }

    // check CSRF token
    if (req.query.state !== req.cookies.csrf) {
        return res.status(401).send(
            'CSRF token mismatch, possible cross-site request forgery attempt.'
        );
    } else {
        // exchange access code for bearer token
        request.post('https://api.dropbox.com/1/oauth2/token', {
            form: {
                code: req.query.code,
                grant_type: 'authorization_code',
                redirect_uri: generateRedirectURI(req)
            },
            auth: {
                user: config.dropboxKey,
                pass: config.dropboxSecret
            }
        }, function (error, response, body) {
            var data = JSON.parse(body);

            if (data.error) {
                return res.send('ERROR: ' + data.error);
            }

            // extract bearer token
            var token = data.access_token;

            // use the bearer token to make API calls
            request.get('https://api.dropbox.com/1/account/info', {
                headers: { Authorization: 'Bearer ' + token }
            }, function (error, response, body) {
				var user = req.user;
				user.dropbox = _.extend(user.dropbox, {
							token	: token,
							uid		: JSON.parse(body).uid,
							email	: JSON.parse(body).email
						});

				user.save(function(err) {
					if (err) {
						return res.status(400).jsonp({	errors: err });
					} else {
						var clientUrl = generateClientURI(req);
						res.redirect(clientUrl + '?token=' + token + '&uid=' + JSON.parse(body).uid + '&email=' + JSON.parse(body).email);
					}
				});
            });

        });
    }
};

/**
 * Deuthorize Dropbox
 * Remove the Dropbox info from user
 */
exports.revoke = function(req, res) {
	var user = req.user;
	var tmpEmail = user.dropbox.email;

	// Update dropbox array with undefined values
	user.dropbox = _.extend(user.dropbox, {
		token	: undefined,
		uid		: undefined,
		email	: undefined,
		cursor: undefined
	});
	// update user favourites
	user.favourites = [];

	user.save(function(err) {
		if (err) {
			return res.status(400).jsonp({	errors: err });
		} else {
			// Remove all collections belonging to user
			Collection.remove({
				user: user
			}, function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				//
				Inbox.remove({
					user: user
				}, function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// Remove all stacks belonging to user
					Stack.remove({
						user: user
					}, function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						Tag.remove({
							user:user
						}, function(err) {
							if (err)
								return res.status(400).jsonp({	errors: err });

							// Return successful result
							res.jsonp('Your Dropbox Account - \'' + tmpEmail + '\' was deauthorized! You need to authorize an account to use Octobox.');
						});
					});
				});
			});
		}
	});
};
