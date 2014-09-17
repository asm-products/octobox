'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Inbox = mongoose.model('Inbox'),
    Collection = mongoose.model('Collection'),
    Stack = mongoose.model('Stack'),
    Tag = mongoose.model('Tag'),
		User = mongoose.model('User'),
		_ = require('lodash'),
    crypto = require('crypto'),
    nodemailer = require('nodemailer'),
    config = require('../../config/config.js'),
    gravatar = require('gravatar'),
    async = require('async');

/**
 * Auth callback
 */
exports.authCallback = function(req, res) {
	res.redirect('/');
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
	if (req.isAuthenticated()) {
		res.redirect('/');
	} else {
		res.render('users/signin', {
			title: 'Sign in',
			message: req.flash('error')
		});
	}
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {

	if (req.isAuthenticated()) {
		res.redirect('/');
	} else {
		res.render('users/signup', {
			title: 'Sign up',
			user: new User()
		});
	}
};

/**
 * Show forgot password form
 */
exports.forgot = function(req, res) {
	if (req.isAuthenticated()) {
		res.redirect('/');
	} else {
		res.render('users/forgot');
	}
};

/**
 * Handle submission on forgotten password form
 */
exports.forgotSubmit = function(req, res, next) {
  var message = null;
  req.session.message = null;

  async.waterfall([
    function (done) {
      crypto.randomBytes(20, function (err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function (token, done) {
      User.findOne({
        email: req.body.email
      }, function (err, userResult) {
          if (!userResult){
            message = 'No account with that email address exists.';
            return res.render('users/forgot', {
              message: message
            });
          }

          userResult.resetPasswordToken = token;
          userResult.resetPasswordExpires = Date.now() + (3600000 * 24); // 24 hours

          userResult.save(function (err) {
            done(err, token, userResult);
          });
      });
    },
    function (token, userResult, done) {
      var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'Mailgun',
        auth: {
          user: config.mailgunUser,
          pass: config.mailgunPassword
        }
      });
      var mailOptions = {
        to: userResult.email,
        from: config.mailgunSender,
        subject: 'Octobox Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'https://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function (err) {
        message = 'An e-mail has been sent to ' + userResult.email + ' with further instructions.';
        done(err, 'done');
      });
    }
    ], function (err) {
      if (err)
        return next(err);
      return res.render('users/forgot', {
        message: message
      });
    });
};

/**
 * Display Reset Token
 */
exports.resetToken = function(req, res) {

  User.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: {
      $gt: Date.now()
    }
  }, function (err, userResult) {
    if (!userResult) {
      req.session.message = 'Password reset token is invalid or has expired.';
      return res.redirect('/forgot');
    }
    res.render('users/reset', {
      user: req.user
    });
  });
};

/**
 * Submit New Password on Reset Page
 */
exports.resetSubmit = function(req, res) {
  var message = null;

  async.waterfall([
    function (done) {
      User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: {
          $gt: Date.now()
        }
      }, function (err, userResult) {
        if (!userResult){
          req.session.message = 'Password reset token is invalid or has expired.';
          return res.redirect('/forgot');
        }

        // validate passwords like a caveman.
        if (!req.body.password || !req.body.passwordConfirmation) {
          message = 'Please fill in all the required fields. ';
          return res.render('users/reset', {
            message: message
          });
        }
        if (req.body.password.length < 8) {
          message = 'Password must be at least 8 characters long. ';
          return res.render('users/reset', {
            message: message
          });
        }
        if (req.body.password !== req.body.passwordConfirmation) {
          message = 'Password and password confirmation must match. ';
          return res.render('users/reset', {
            message: message
          });
        }
        userResult.hashed_password = userResult.encryptPassword(req.body.password);
        userResult.resetPasswordToken = undefined;
        userResult.resetPasswordExpires = undefined;


        userResult.save(function (err){
          if (err) {
            message = err;
            return res.render('users/reset', {
              message: message
            });
          }
          req.logIn(userResult, function(err) {
            done(err, userResult);
          });
        });
      });
    },
    function (userResult, done) {
      var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'Mailgun',
        auth: {
          user: config.mailgunUser,
          pass: config.mailgunPassword
        }
      });
      var mailOptions = {
        to: userResult.email,
        from: config.mailgunSender,
        subject: 'Octobox password was reset successfully!',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + userResult.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function (err) {
        message = 'Success! Your password has been changed.';
        done(err);
      });
    }
    ], function (err) {
      if (err)
        return res.status(400).jsonp({	errors: err });
      res.redirect('/');
    });
};

/**
 * Add item to Favourites
 */
exports.addFavourite = function(req, res) {
  var user = req.user,
      item = req.body,
      Parent;

  // update item
  if (item.kind === 'file'){
    // figure out the parent of the file
    Parent = Collection;
    if (item.parent === 'inbox') Parent = Inbox;
    if (item.parent === 'stack') Parent = Stack;

    Parent.findOne({
      'files._id': item._id
    }, function(err, result) {
      if (err)
        return res.status(400).jsonp({	errors: err });
      if (!result) {
        return res.status(404).jsonp({
          message: 'The file could not be found',
          kind: 'error'
        });
      }

      // find file in collection
      var fileIndex = _.findIndex(result.files, {'path': item.path});
      if (fileIndex === -1){
        return res.status(400).jsonp({
          message: 'Something is out of sync. You need to force sync with Dropbox.',
          kind: 'error'
        });
      }

      result.files[fileIndex].isFavourite = true;

      result.save(function(err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        // update user
        User.findOne({
          _id: user._id
        }, function(err, userResult) {
          if (err)
            return res.status(400).jsonp({	errors: err });
          if (!userResult) {
            return res.status(404).jsonp({
              message: 'The user could not be found',
              kind: 'error'
            });
          }

          // check if favourite exists
          var favIndex = _.findIndex(userResult.favourites, {'path': item.path});
          if (favIndex !== -1){
            return res.status(400).jsonp({
              message: 'Item is already marked as favourite.',
              kind: 'error'
            });
          }

          userResult.favourites.push(item);
          userResult.save(function(err) {
            if (err)
              return res.status(400).jsonp({	errors: err });

            res.jsonp({
              message: 'Item \'' + item.name + '\' successfully added to your favourites.',
              kind: 'success'
            });
          });
        });
      });

    });
  } else if (item.kind === 'link') {
    // figure out the parent of the link
    Parent = Collection;
    if (item.parent === 'inbox') Parent = Inbox;
    if (item.parent === 'stack') Parent = Stack;

    Parent.findOne({
      // 'links._id': item._id
      user: user,
      path: item.parentPath
    }, function(err, result) {
      if (err)
        return res.status(400).jsonp({	errors: err });
      if (!result) {
        return res.status(404).jsonp({
          message: 'The link could not be found',
          kind: 'error'
        });
      }

      // find file in collection
      var linkIndex = _.findIndex(result.links, {'url': item.url});
      if (linkIndex === -1){
        return res.status(400).jsonp({
          message: 'Something is out of sync. You need to force sync with Dropbox.',
          kind: 'error'
        });
      }

      result.links[linkIndex].isFavourite = true;
      result.markModified('links');

      result.save(function(err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        // update user
        User.findOne({
          _id: user._id
        }, function(err, userResult) {
          if (err)
            return res.status(400).jsonp({	errors: err });
          if (!userResult) {
            return res.status(404).jsonp({
              message: 'The user could not be found',
              kind: 'error'
            });
          }

          // check if favourite exists
          var favIndex = _.findIndex(userResult.favourites, {'_id': item._id});
          if (favIndex !== -1){
            return res.status(400).jsonp({
              message: 'Item is already marked as favourite.',
              kind: 'error'
            });
          }

          userResult.favourites.push(item);
          userResult.save(function(err) {
            if (err)
              return res.status(400).jsonp({	errors: err });

            res.jsonp({
              message: 'Item \'' + item.name + '\' successfully added to your favourites.',
              kind: 'success'
            });
          });
        });
      });

    });

  } else {
    // find and update collection/stack
    // figure out the kind
    var Kind = Stack;
    if (item.kind === 'collection') Kind = Collection;
    Kind.findOne({
      path: item.path,
      user: user
    }, function(err, itemResult) {
      if (err)
        return res.status(400).jsonp({	errors: err });
      if (!itemResult) {
        return res.status(404).jsonp({
          message: 'The item could not be found',
          kind: 'error'
        });
      }

      itemResult.isFavourite = true;
      itemResult.name = item.name;

      // itemResult.markModifed('isFavourite');
      itemResult.save(function(err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        // update user
        User.findOne({
          _id: user._id
        }, function(err, userResult) {
          if (err)
            return res.status(400).jsonp({	errors: err });
          if (!userResult) {
            return res.status(404).jsonp({
              message: 'The user could not be found',
              kind: 'error'
            });
          }

          // check if favourite exists
          var favIndex = _.findIndex(userResult.favourites, {'path': item.path});
          if (favIndex !== -1){
            return res.status(400).jsonp({
              message: 'Item is already marked as favourite.',
              kind: 'error'
            });
          }

          userResult.favourites.push(item);
          userResult.save(function(err) {
            if (err)
              return res.status(400).jsonp({	errors: err });

            // if the item is a stack, find its collection parent and update the stack there (ugh)
            if (Kind === Stack) {
              var parentPath = item.path.match(/^(\/[^\/]+)/);
              Collection.findOne({
                user: user,
                path: parentPath[0]
              }, function(err, collectionResult) {
                if (err)
                  return res.status(400).jsonp({	errors: err });
                if (!collectionResult) {
                  return res.status(404).jsonp({
                    message: 'The parent collection could not be found.',
                    kind: 'error'
                  });
                }
                /**
                 * Update abstracted stacks
                 **/
                var stackIndex = _.findIndex(collectionResult.stacks, {'path': item.path});
                var tempStack = collectionResult.stacks[stackIndex];
                tempStack.isFavourite = true;
                // Remove old stack from collection
                collectionResult.stacks.splice(stackIndex, 1);
                collectionResult.stacks.push(tempStack);

                collectionResult.save(function(err) {
                  if (err)
                    return res.status(400).jsonp({	errors: err });

                  res.jsonp({
                    message: 'Item \'' + item.name + '\' successfully added to your favourites.',
                    kind: 'success'
                  });
                });
              });
            } else {
              res.jsonp({
                message: 'Item \'' + item.name + '\' successfully added to your favourites.',
                kind: 'success'
              });
            }
          });
        });
      });
    });
  }
};

/**
 * Remove item from Favourites
 */
exports.removeFavourite = function(req, res) {
  var user = req.user,
      item = req.body,
      Parent;

  // update item
  if (item.kind === 'file'){
    // figure out the parent of the file
    Parent = Collection;
    if (item.parent === 'inbox') Parent = Inbox;
    if (item.parent === 'stack') Parent = Stack;

    Parent.findOne({
      'files._id': item._id
    }, function(err, result) {
      if (err)
        return res.status(400).jsonp({	errors: err });
      if (!result) {
        return res.status(404).jsonp({
          message: 'The file could not be found.',
          kind: 'error'
        });
      }

      // find file in collection
      var fileIndex = _.findIndex(result.files, {'path': item.path});
      if (fileIndex === -1){
        return res.status(400).jsonp({
          message: 'Something is out of sync. You need to force sync with Dropbox.',
          kind: 'error'
        });
      }

      result.files[fileIndex].isFavourite = false;

      result.save(function(err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        // update user
        User.findOne({
          _id: user._id
        }, function(err, userResult) {
          if (err)
            return res.status(400).jsonp({	errors: err });
          if (!userResult) {
            return res.status(404).jsonp({
              message: 'The user could not be found',
              kind: 'error'
            });
          }

          // check if favourite exists
          var favIndex = _.findIndex(userResult.favourites, {'path': item.path});
          if (favIndex === -1){
            return res.status(400).jsonp({
              message: 'Item was not a favourite.',
              kind: 'error'
            });
          }

          userResult.favourites.splice(favIndex, 1);
          userResult.save(function(err) {
            if (err)
              return res.status(400).jsonp({	errors: err });

            res.jsonp({
              message: 'Item \'' + item.name + '\' successfully removed from favourites.',
              kind: 'success'
            });
          });
        });
      });
    });
  } else if (item.kind === 'link') {
    // figure out the parent of the link
    Parent = Collection;
    if (item.parent === 'inbox') Parent = Inbox;
    if (item.parent === 'stack') Parent = Stack;

    Parent.findOne({
      user: user,
      path: item.parentPath
    }, function(err, result) {
      if (err)
        return res.status(400).jsonp({	errors: err });
      if (!result) {
        return res.status(404).jsonp({
          message: 'The link could not be found.',
          kind: 'error'
        });
      }

      // find file in collection
      var linkIndex = _.findIndex(result.links, {'url': item.url});
      if (linkIndex === -1){
        return res.status(400).jsonp({
          message: 'Something is out of sync. You need to force sync with Dropbox.',
          kind: 'error'
        });
      }

      result.links[linkIndex].isFavourite = false;

      result.markModified('links');

      result.save(function(err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        // update user
        User.findOne({
          _id: user._id
        }, function(err, userResult) {
          if (err)
            return res.status(400).jsonp({	errors: err });
          if (!userResult) {
            return res.status(404).jsonp({
              message: 'The user could not be found',
              kind: 'error'
            });
          }

          // check if favourite exists
          var favIndex = _.findIndex(userResult.favourites, {'url': item.url});
          if (favIndex === -1){
            return res.status(400).jsonp({
              message: 'Item was not a favourite.',
              kind: 'error'
            });
          }

          userResult.favourites.splice(favIndex, 1);
          userResult.save(function(err) {
            if (err)
              return res.status(400).jsonp({	errors: err });

            res.jsonp({
              message: 'Item \'' + item.name + '\' successfully removed from favourites.',
              kind: 'success'
            });
          });
        });
      });
    });
  } else {
    // find and update collection/stack
    // figure out the kind
    var Kind = Collection;
    if (item.kind === 'stack') Kind = Stack;
    Kind.findOne({
      path: item.path,
      user: user
    }, function(err, result) {
      if (err)
        return res.status(400).jsonp({	errors: err });
      if (!result) {
        return res.status(404).jsonp({
          message: 'The item could not be found',
          kind: 'error'
        });
      }

      result.isFavourite = false;
      result.save(function(err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        // update user
        User.findOne({
          _id: user._id
        }, function(err, userResult) {
          if (err)
            return res.status(400).jsonp({	errors: err });
          if (!userResult) {
            return res.status(404).jsonp({
              message: 'The user could not be found',
              kind: 'error'
            });
          }

          // check if favourite exists
          var favIndex = _.findIndex(userResult.favourites, {'path': item.path});
          if (favIndex === -1){
            return res.status(400).jsonp({
              message: 'Item is not a favourite.',
              kind: 'error'
            });
          }

          userResult.favourites.splice(favIndex, 1);
          userResult.save(function(err) {
            if (err)
              return res.status(400).jsonp({	errors: err });

            // if the item is a stack, find its collection parent and update the stack there (ugh)
            if (Kind === Stack) {
              var parentPath = item.path.match(/^(\/[^\/]+)/);
              Collection.findOne({
                user: user,
                path: parentPath[0]
              }, function(err, collectionResult) {
                if (err)
                  return res.status(400).jsonp({	errors: err });
                if (!collectionResult) {
                  return res.status(404).jsonp({
                    message: 'The parent collection could not be found.',
                    kind: 'error'
                  });
                }
                /**
                 * Update abstracted stacks
                 **/
                var stackIndex = _.findIndex(collectionResult.stacks, {'path': item.path});
                var tempStack = collectionResult.stacks[stackIndex];
                tempStack.isFavourite = false;
                // Remove old stack from collection
                collectionResult.stacks.splice(stackIndex, 1);
                collectionResult.stacks.push(tempStack);

                collectionResult.save(function(err) {
                  if (err)
                    return res.status(400).jsonp({	errors: err });

                  res.jsonp({
                    message: 'Item \'' + item.name + '\' was removed to your favourites.',
                    kind: 'success'
                  });
                });
              });
            } else {
              res.jsonp({
                message: 'Item \'' + item.name + '\' was removed to your favourites.',
                kind: 'success'
              });
            }
          });
        });
      });
    });
  }

};

/**
 * Logout
 */
exports.signout = function(req, res) {
	req.logout();
	req.session.destroy();

	res.redirect('/signin');
};

/**
 * Session
 */
exports.session = function(req, res) {
	res.redirect('/');
};

/**
 * Create user
 */
exports.create = function(req, res, next) {
	var user = new User(req.body);
	var message = null;

	// generate user gravatar
	user.gravatar = gravatar.url(user.email, {s: '96'}, true); // 48x48px

	user.save(function(err) {
		if (err) {
			// for MongoDB errors
			switch (err.code) {
				case 11000:
				case 11001:
					message = 'Email address already used. ';
					break;
				// this case fires when none of the .invalidate errors are found
				default:
					message = 'Please fill all the required fields. ';
			}
			// for .invalidate errors
			if (err.errors){
				if (err.errors.passwordConfirmation){
					message = 'Password and confirmation must match. ';
				}
				if (err.errors.password){
					message = 'Password must be at least 8 characters long. ';
				}

				if (err.errors.email && err.errors.name){
					message = 'Please fill all the required fields. ';
				}
				// gets value from the models/user.js .invalidate
				if (err.errors.email){
					message = err.errors.email.message;
				}
			}

			return res.render('users/signup', {
				message: message,
				user: user
			});
		}
		req.logIn(user, function(err) {
			if (err) return next(err);
			return res.redirect('/');
		});
	});
};

/**
 * Remove a user
 */
exports.remove = function(req, res){
  var user = req.user;
  // Remove all collections belonging to user
  if (user._id && user.email){
    Collection.remove({
      user: user._id
    }, function(err) {
      if (err)
        return res.status(400).jsonp({	errors: err });
      //
      Inbox.remove({
        user: user._id
      }, function(err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        // Remove all stacks belonging to user
        Stack.remove({
          user: user._id
        }, function(err) {
          if (err)
            return res.status(400).jsonp({	errors: err });

          Tag.remove({
            user: user._id
          }, function(err) {
            if (err)
              return res.status(400).jsonp({	errors: err });

            user.remove(function(err){
              if (err)
                return res.status(400).jsonp({	errors: err });

              res.jsonp({
                message: 'user successfully removed',
                kind: 'success'
              });
            });
          });
        });
      });
    });
  } else {
    res.jsonp({
      message: 'user was not found',
      kind: 'error'
    });
  }

};

/**
 * Update a user
 */
exports.update = function(req, res) {
	var user = req.user;

	user = _.extend(user, req.body);

	user.save(function(err) {
		if (err) {
			return res.send('users/signup', {
				errors: err.errors,
				user: user
			});
		} else {
			res.jsonp(user);
		}
	});
};

/**
 * Update users beta status
 */
exports.updateBetaStatus = function(req, res) {
  var user = req.user;

  User.findOne({
    _id: user._id
  }, function(err, userResult) {
    if (err)
      return res.status(400).jsonp({	errors: err });
    if (!userResult) {
      return res.status(404).jsonp({
        message: 'The user could not be found',
        kind: 'error'
      });
    }

    userResult.betaReadVersion = req.body.betaReadVersion;

    userResult.save(function(err) {
      if (err) {
        return res.send('users/signup', {
          errors: err.errors,
          user: user
        });
      } else {
        res.jsonp(user);
      }
    });
  });
};


/**
 * Send User
 */
exports.me = function(req, res) {
	res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
	User
		.findOne({
			_id: id
		})
		.exec(function(err, user) {
			if (err) return next(err);
			if (!user) return next(new Error('Failed to load User ' + id));
			req.profile = user;
			next();
		});
};
