'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
		// assert = require('assert'),
		mongoose = require('mongoose'),
		User = mongoose.model('User'),
		Inbox = mongoose.model('Inbox'),
		Collection = mongoose.model('Collection'),
		processResponse = require('../../../app/controllers/content/helpers/process-response.js'),
		// models = require('../../../app/controllers/content/helpers/models.js'),
		_ = require('lodash');


// Globals
var user;
// var req;
var result = {};
var response = {};

// Tests
describe('<Unit Test>', function() {
	describe('Model Content:', function() {
		before(function(done) {

			// fuch off, jshint
			should();

			user = new User({
				name: 'Full name',
				email: 'test@octoboxapp.com',
				password: 'password',
				passwordConfirmation: 'password',
				dropbox: {
					token: 'DYs1t7Ku63cAAAAAAAAAAcvp4g8U61jJO_nV6IsrMCl1Nx5P18vMzyIxIStoc19s'
				}
			});

			// mock response from Dropbox API
			response = {
				blankSlate: true
			, cursorTag: 'AAGW2tjkRcMD_6cJBkQU8O_Dq-AOytaiQD2qMdRM1bnFI-pJtSLSK7OyDfHvPqrfw2KGiWJrd148eoabUAEYfv5kA8PwnvmisLN2tuq4qKpmgA'
			, shouldPullAgain: false
			, shouldBackOff: true
			, changes: [
					{
						path: '/gycrt.jpeg'
					, stat: {
							_json: {
								modified: 'Wed, 05 Feb 2014 21:36:28 +0000'
							}
						, path: '/GYcRt.jpeg'
						, name: 'GYcRt.jpeg'
						, isFolder: false
						, isFile: true
						, isRemoved: false
						, typeIcon: 'page_white_picture'
						, modifiedAt: '2014-02-05T2:3:28.000Z'
						, clientModifiedAt: '2012-10-03T0:4:09.000Z'
						, inAppFolder: false
						, size: 104086
						, humanSize: '101.6 KB'
						, hasThumbnail: true
						, versionTag: '11f02bbae'
						, contentHash: null
						, mimeType: 'image/jpeg'
						}
					, wasRemoved: false
					}
				, {
						path: '/test folder'
					, stat: {
							_json: {
								modified: 'Wed, 05 Feb 2014 21:36:28 +0000'
							}
						, path: '/test folder'
						, name: 'test folder'
						, isFolder: true
						, isFile: false
						, isRemoved: false
						, typeIcon: 'folder'
						, modifiedAt: '2014-03-07T1:1:49.000Z'
						, clientModifiedAt: null
						, inAppFolder: false
						, size: 0
						, humanSize: '0 bytes'
						, hasThumbnail: false
						, versionTag: '61f02bbae'
						, contentHash: null
						, mimeType: 'inode/directory'
						}
					, wasRemoved: false
					}
				, {
						path: '/test folder/253542_441835972521467_1749131624_n.jpeg'
					, stat: {
							_json: {
								modified: 'Wed, 05 Feb 2014 21:36:28 +0000'
							}
						, path: '/test folder/253542_441835972521467_1749131624_n.jpeg'
						, name: '253542_441835972521467_1749131624_n.jpeg'
						, isFolder: false
						, isFile: true
						, isRemoved: false
						, typeIcon: 'page_white_picture'
						, modifiedAt: '2014-03-07T1:1:14.000Z'
						, clientModifiedAt: '2013-02-24T1:2:57.000Z'
						, inAppFolder: false
						, size: 12747
						, humanSize: '12.4 KB'
						, hasThumbnail: true
						, versionTag: '71f02bbae'
						, contentHash: null
						, mimeType: 'image/jpeg'
						}
					, wasRemoved: false
					}
				, {
						path: '/testing'
					, stat: {
							_json: {
								modified: 'Wed, 05 Feb 2014 21:36:28 +0000'
							}
						, path: '/Testing'
						, name: 'Testing'
						, isFolder: true
						, isFile: false
						, isRemoved: false
						, typeIcon: 'folder'
						, modifiedAt: '2014-03-07T2:4:32.000Z'
						, clientModifiedAt: null
						, inAppFolder: false
						, size: 0
						, humanSize: '0 bytes'
						, hasThumbnail: false
						, versionTag: 'a1f02bbae'
						, contentHash: null
						, mimeType: 'inode/directory'
						}
					, wasRemoved: false
					}
				, {
						path: '/panorama.jpg'
					, stat: {}
					, wasRemoved: true
					}
				, {
						path: '/testing/panorama.jpg'
					, stat: {
							_json: {
								modified: 'Wed, 05 Feb 2014 21:36:28 +0000'
							}
						, path: '/Testing/panorama.jpg'
						, name: 'panorama.jpg'
						, isFolder: false
						, isFile: true
						, isRemoved: false
						, typeIcon: 'page_white_picture'
						, modifiedAt: '2014-03-07T2:4:54.000Z'
						, clientModifiedAt: '2014-02-21T2:1:57.000Z'
						, inAppFolder: false
						, size: 132099
						, humanSize: '129 KB'
						, hasThumbnail: true
						, versionTag: 'c1f02bbae'
						, contentHash: null
						, mimeType: 'image/jpeg'
						}
					, wasRemoved: false
					}
				, {
						path: '/test'
					, stat: {
							_json: {
								modified: 'Wed, 05 Feb 2014 21:36:28 +0000'
							}
						, path: '/test'
						, name: 'test'
						, isFolder: false
						, isFile: true
						, isRemoved: false
						, typeIcon: 'page_white'
						, modifiedAt: '2014-03-07T2:4:29.000Z'
						, clientModifiedAt: '2014-03-07T2:4:26.000Z'
						, inAppFolder: false
						, size: 0
						, humanSize: '0 bytes'
						, hasThumbnail: false
						, versionTag: 'd1f02bbae'
						, contentHash: null
						, mimeType: 'application/octet-stream'
						}
					, wasRemoved: false
					}
				, {
						path: '/slash : test'
					, stat: {
							_json: {
								modified: 'Wed, 05 Feb 2014 21:36:28 +0000'
							}
						, path: '/Slash : Test'
						, name: 'Slash : Test'
						, isFolder: true
						, isFile: false
						, isRemoved: false
						, typeIcon: 'folder'
						, modifiedAt: '2014-03-08T0:3:03.000Z'
						, clientModifiedAt: null
						, inAppFolder: false
						, size: 0
						, humanSize: '0 bytes'
						, hasThumbnail: false
						, versionTag: '101f02bbae'
						, contentHash: null
						, mimeType: 'inode/directory'
						}
					, wasRemoved: false
					}
				, {
						path: '/inspiration/app interfaces',
						stat: {
							_json: {
								modified: 'Wed, 12 Mar 2014 1:2:12 +0000',
							},
							path: '/Inspiration/App Interfaces',
							name: 'App Interfaces',
							isFolder: true,
							isFile: false,
							isRemoved: false,
							typeIcon: 'folder',
							modifiedAt: '2014-03-12T1:2:12.000Z',
							clientModifiedAt: null,
							inAppFolder: false,
							size: 0,
							humanSize: '0 bytes',
							hasThumbnail: false,
							versionTag: 'c51f02bbae',
							contentHash: null,
							mimeType: 'inode/directory'
						},
						wasRemoved: false
					},
					{
						path: '/inspiration/app interfaces/screen568x568.jpeg',
						stat: {
							path: '/inspiration/App Interfaces/screen568x568.jpeg',
							_json: {
								modified: 'Wed, 12 Mar 2014 1:2:17 +0000'
							},
							name: 'screen568x568.jpeg',
							isFolder: false,
							isFile: true,
							isRemoved: false,
							typeIcon: 'page_white_picture',
							modifiedAt: '2014-03-12T1:2:17.000Z',
							clientModifiedAt: '2014-03-12T1:2:29.000Z',
							inAppFolder: false,
							size: 10385,
							humanSize: '10.1 KB',
							hasThumbnail: true,
							versionTag: 'c71f02bbae',
							contentHash: null,
							mimeType: 'image/jpeg'
						},
						wasRemoved: false
					}
				]
			};

			result = {
				inbox : {
					files: []
				},
				collections : [],
				stacks: [],
				remove: []
			};
      done();
		});

		describe('Method Sync', function () {
			it('should begin with no Inbox', function(done) {
				Inbox.find({}, function(err, inbox) {
					inbox.should.have.length(0);
					done();
				});
			});

			it('should begin with no Collections', function(done) {
				Collection.find({}, function(err, collections) {
					collections.should.have.length(0);
					done();
				});
			});

			it('processResponse - should correctly catch collections', function(done) {
				// processes response for all tests below
				result = processResponse(response, result, user);

				result.collections.should.have.length(4);
				result.collections[1].files.should.have.length(1);
				done();
			});

			it('processResponse - should correctly catch inbox files', function(done) {
				result.inbox.files.should.have.length(2);
				done();
			});

			it('processResponse - should correctly catch removed files', function(done) {
				result.remove.should.have.length(1);
				result.remove[0].should.have.property('kind');
				done();
			});

			it('processResponse - should correctly catch stacks', function(done) {
				result.stacks.should.have.length(1);
				result.stacks[0].files.should.have.length(1);
				done();
			});

			it('should be able to save Inbox with no problem', function(done) {
				var inbox = new Inbox();
				inbox.user = user;
				inbox = _.extend(inbox, result.inbox);
				inbox.save(done);
			});

			it('should be able to save Collections with no problem', function(done) {
				var collection = new Collection();
				collection.user = user;
				collection = _.extend(collection, result.collections[0]);
				collection.save(done);
			});
		});
		//describe('/api/thumbnail/:filepath', function () {
		//	it('should be able to retrieve a thumbnail URL', function(done) {
		//		req = request(app)
		//		.get('/api/thumbnail' + '/testing/panorama.jpg')
		//		.set('Accept', 'application/json')
		//		.set('cookie', cookie)
		//		.set('user', user)
		//		.expect(200)
		//		.end(function(err) {
		//			if (err) return done(err);
		//			done();
		//		});
		//	});
		//});
		after(function(done) {
			Inbox.remove().exec();
			Collection.remove().exec();
			User.remove().exec();
			done();
		});
	});
});
