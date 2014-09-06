'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
		// assert = require('assert'),
		mongoose = require('mongoose'),
		User = mongoose.model('User'),
		_ = require('lodash');


// Globals
var user, user2, client;

// Tests
describe('<Unit Test>', function() {
	describe('Model User:', function() {
		before(function(done) {
			user = new User({
				name: 'Full name',
				email: 'test@octoboxapp.com',
				password: 'password',
				passwordConfirmation: 'password'
			});
			user2 = new User({
				name: 'Full name',
				email: 'test@octoboxapp.com',
				password: 'password',
				passwordConfirmation: 'password'
			});
			
			done();
			
		});

		describe('Method Save', function () {
			it('should begin with no users', function(done) {
				User.find({}, function(err, users) {
					users.should.have.length(0);
					done();
				});
			});

			it('should be able to save without problems', function(done) {
				user.save(done);
			});

			it('should fail to save an existing user again', function(done) {
				user.save();
				return user2.save(function(err) {
					should.exist(err);
					done();
				});
			});

			it('should be able to show an error when trying to save without name', function(done) {
				user.name = '';
				return user.save(function(err) {
					should.exist(err);
					done();
				});
			});
		});
		
		describe('Method Dropbox Auth', function () {
			before(function(done) {

				client = {
					_uid: '123456',
					_oauth: {
						_token: '123456'
					}
				};

				done();
			});
			it('should be able to check if user linked her Dropbox account', function(done) {
				// length 0 means 'no', length !0 means yes
				user.dropbox.token.should.have.length(0);
				done();
			});

			it('should be able to link Dropbox account', function(done) {

				user.dropbox = _.extend(user.dropbox, {
					token	: client._oauth._token,
					uid		: client._uid
				});
				return user.save(function() {
					user.dropbox.token.should.not.have.length(0);
					done();
				});

			});
		});
		after(function(done) {
			User.remove().exec();
			done();
		});
	});
});