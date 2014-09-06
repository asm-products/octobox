'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Tag = mongoose.model('Tag'),
		Inbox = mongoose.model('Inbox'),
		Collection = mongoose.model('Collection'),
		Stack = mongoose.model('Stack'),
		async = require('async'),
		_ = require('lodash');


/*
* Function : sortDate(Date, Date)
* Description : Sorts an object based on date
*/
function sortDate(a,b)
{
		a = new Date(a.modified);
		b = new Date(b.modified);
		return (b.getTime() - a.getTime());
}

/**
 * Find tag by id
 */
exports.tag = function(req, res, next, id) {
	Tag.load(id, function(err, tag) {
		if (err) return next(err);
		if (!tag) return next(new Error('Failed to load tag ' + id));
		req.tag = tag;
		next();
	});
};

/**
 * Return all tags
 */
exports.find = function(req, res) {
	var user = req.user;
	Tag.find({
		user: user
	}, function(err, tagsResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (tagsResult) {
			var all = _.sortBy(tagsResult, 'name');
			return res.jsonp(all);
		} else
			return res.status(404).jsonp('No tags exist or user is not authorized.');
	});
};

/**
 * Unassign tag from file/stack
 */
exports.unassign = function(req, res) {
	var tag = req.body;
	var user = req.user;
	var tagIndex;
	// var modified = new Date();

	Tag.findOne({
		_id: tag._id
	}, function(err, tagResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (!tagResult)
			return res.status(404).jsonp('Tag doesn\'t exist or user is not authorized.');

		if (tag.item.kind === 'file'){
			// if file is tagged
			// check if tag is already assigned
			tagIndex = _.indexOf(tag.files, tag.item._id);
			if (tagIndex === -1)
				return res.jsonp('Tag is already unassigned');
			// continue if tag isnt already unassigned.
			tagResult.files.splice(tagIndex, 1);
			tagResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// figure out the parent of the file
				var Parent = Collection;
				if (tag.item.parent === 'inbox') Parent = Inbox;
				if (tag.item.parent === 'stack') Parent = Stack;
				// update file
				Parent.findOne({
					'files._id': tag.item._id
				}, function(err, result) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// find file in collection
					var fileIndex = _.findIndex(result.files, {'name': tag.item.name});
					if (fileIndex === -1)
						return res.status(400).jsonp('Something is out of sync. You need to force sync with Dropbox.');

					// result.files[fileIndex].tags.push(tagResult);
					result.files[fileIndex].tags.splice(tagResult.files.indexOf(tagResult), 1);
					// update modified date
					// result.files[fileIndex].modified = modified;

					result.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// if the file is in a stack - update lastFile
						if (Parent === Stack) {
							// find collection this stack belongs to
							Collection.findOne({
								'stacks.name': result.name,
								user: user
							}, function(err, collectionResult) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								var stackIndex = _.findIndex(collectionResult.stacks, {'name': result.name});
								collectionResult.stacks[stackIndex].lastFile = result.files[fileIndex].path;
								var tempStack = collectionResult.stacks[stackIndex];
								collectionResult.stacks.splice(stackIndex, 1);
								collectionResult.stacks.push(tempStack);

								// // console.log(collectionResult);
								collectionResult.save(function(err) {
									if (err)
										return res.status(400).jsonp({	errors: err });

									return res.jsonp(tagResult);
								});
							});
						} else {
							res.jsonp(tagResult);
						}
					});
				});
			});
		} else if (tag.item.kind === 'link') {
			// if file is tagged
			// check if tag is already assigned
			tagIndex = _.indexOf(tagResult.links, tag.item._id);

			if (tagIndex !== -1)
				return res.jsonp('Tag is already assigned');

			// continue if tag isnt already assigned.
			tagResult.links.splice(tagIndex, 1);
			tagResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// figure out the parent of the link
				var Parent = Collection;
				if (tag.item.parent === 'inbox') Parent = Inbox;
				if (tag.item.parent === 'stack') Parent = Stack;
				// update file
				Parent.findOne({
					'links._id': tag.item._id
				}, function(err, result) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// find link in parent
					var linkIndex = _.findIndex(result.links, {'name': tag.item.name});
					if (linkIndex === -1)
						return res.status(400).jsonp('Something is out of sync. You need to force sync with Dropbox.');

					result.links[linkIndex].tags.splice(tagResult.links.indexOf(tagResult), 1);

					// update date
					// result.links[linkIndex].modified = modified;
					result.markModified('links');
					result.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						res.jsonp(tagResult);
					});
				});
			});
		} else {
			// if stack is tagged
			// check if tag is already unassigned
			tagIndex = _.indexOf(tag.stacks, tag.item._id);
			if (tagIndex === -1)
				return res.jsonp('Tag is already unassigned');
			// continue if tag isnt already unassigned.
			tagResult.stacks.splice(tagResult.stacks.indexOf(tag.item._id), 1);

			tagResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// update stack
				Stack.findOne({
					_id: tag.item._id
				}, function(err, stackResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					stackResult.tags.splice(tagResult.stacks.indexOf(tagResult), 1);
					// stackResult.modified = modified;

					stackResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// update abstracted stack in a collection
						var parentPath = tag.item.path.match(/^(\/[^\/]+)/);
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
							var stackIndex = _.findIndex(collectionResult.stacks, {'path': tag.item.path});
							var tempStack = collectionResult.stacks[stackIndex];
							// tempStack.modified = modified;
							
							// Remove old stack from collection
							collectionResult.stacks.splice(stackIndex, 1);
							collectionResult.stacks.push(tempStack);

							collectionResult.save(function(err) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								return res.jsonp(tagResult);
							});
						});
					});
				});
			});
		}
	});
};

/**
 * Assign tag to file/stack
 */
exports.assign = function(req, res) {
	var tag = req.body;
	var tagIndex;
	var user = req.user;
	// var modified = new Date();

	Tag.findOne({
		_id: tag._id
	}, function(err, tagResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (!tagResult)
			return res.status(404).jsonp('Tag doesn\'t exist or user is not authorized.');
		if (tag.item.kind === 'file'){
			// if file is tagged
			// check if tag is already assigned
			tagIndex = _.indexOf(tagResult.files, tag.item._id);

			if (tagIndex !== -1)
				return res.jsonp('Tag is already assigned');

			// continue if tag isnt already assigned.
			tagResult.files.push(mongoose.Types.ObjectId(tag.item._id));
			tagResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// figure out the parent of the file
				var Parent = Collection;
				if (tag.item.parent === 'inbox') Parent = Inbox;
				if (tag.item.parent === 'stack') Parent = Stack;
				// update file
				Parent.findOne({
					'files._id': tag.item._id
				}, function(err, result) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// find file in collection
					// TODO: find by _id instead of name
					var fileIndex = _.findIndex(result.files, {'name': tag.item.name});
					if (fileIndex === -1)
						return res.status(400).jsonp('Something is out of sync. You need to force sync with Dropbox.');

					result.files[fileIndex].tags.push(tagResult);
					// update date
					// result.files[fileIndex].modified = modified;

					// if the file is in a stack - update lastFile
					if (Parent === Stack) {
						result.lastFile = result.files[fileIndex].path;
					}

					result.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// if the file is in a stack - update lastFile
						if (Parent === Stack) {
							// find collection this stack belongs to
							Collection.findOne({
								'stacks.name': result.name,
								user: user
							}, function(err, collectionResult) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								var stackIndex = _.findIndex(collectionResult.stacks, {'name': result.name});
								collectionResult.stacks[stackIndex].lastFile = result.files[fileIndex].path;
								var tempStack = collectionResult.stacks[stackIndex];
								collectionResult.stacks.splice(stackIndex, 1);
								collectionResult.stacks.push(tempStack);

								// // console.log(collectionResult);
								collectionResult.save(function(err) {
									if (err)
										return res.status(400).jsonp({	errors: err });

									return res.jsonp(tagResult);
								});
							});
						} else {
							res.jsonp(tagResult);
						}
					});
				});
			});
		} else if (tag.item.kind === 'link') {
			// if file is tagged
			// check if tag is already assigned
			tagIndex = _.indexOf(tagResult.links, tag.item._id);

			if (tagIndex !== -1)
				return res.jsonp('Tag is already assigned');

			// continue if tag isnt already assigned.
			tagResult.links.push(mongoose.Types.ObjectId(tag.item._id));
			tagResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// figure out the parent of the link
				var Parent = Collection;
				if (tag.item.parent === 'inbox') Parent = Inbox;
				if (tag.item.parent === 'stack') Parent = Stack;
				// update file
				Parent.findOne({
					'links._id': tag.item._id
				}, function(err, result) {
					if (err)
						return res.status(400).jsonp({	errors: err });

					// find link in parent
					var linkIndex = _.findIndex(result.links, {'name': tag.item.name});
					if (linkIndex === -1)
						return res.status(400).jsonp('Something is out of sync. You need to force sync with Dropbox.');

					result.links[linkIndex].tags.push(tagResult);
					// update date
					// result.links[linkIndex].modified = modified;
					result.markModified('links');
					result.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						res.jsonp(tagResult);
					});
				});
			});
		} else {
			// if stack is tagged
			// check if tag is already assigned
			tagIndex = _.findIndex(tag.stacks, {'_id': tag.item._id});
			if (tagIndex !== -1)
				return res.jsonp('Tag is already assigned');
			// continue if tag isnt already assigned.
			tagResult.stacks.push(mongoose.Types.ObjectId(tag.item._id));
			tagResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });

				// update stack
				Stack.findOne({
					_id: tag.item._id
				}, function(err, stackResult) {
					if (err)
						return res.status(400).jsonp({	errors: err });
					stackResult.tags.push(tagResult);
					// // console.log(stackResult);
					// stackResult.modified = modified;
					stackResult.markModified('tags');
					stackResult.save(function(err) {
						if (err)
							return res.status(400).jsonp({	errors: err });

						// update abstracted stack in a collection
						var parentPath = tag.item.path.match(/^(\/[^\/]+)/);
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
							var stackIndex = _.findIndex(collectionResult.stacks, {'path': tag.item.path});
							var tempStack = collectionResult.stacks[stackIndex];
							// tempStack.modified = modified;
							// tempStack.tags.push(tagResult);
							// Remove old stack from collection
							collectionResult.stacks.splice(stackIndex, 1);
							collectionResult.stacks.push(tempStack);

							collectionResult.save(function(err) {
								if (err)
									return res.status(400).jsonp({	errors: err });

								return res.jsonp(tagResult);
							});
						});
					});
				});
			});
		}
	});
};
/**
 * Returns tag and files & stacks that belong to a tag
 */
exports.items = function(req, res) {
	var user = req.user;
	var name = req.params.tag;
	var linkTemp;

	Tag.findOne({
		user: user,
		name: name
	}).populate('stacks').lean().exec(function(err, tagResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (!tagResult)
			return res.status(404).jsonp('Tag could not be found or user is not authorized.');

		tagResult.content = [];

		// process populated stacks
		_(tagResult.stacks).forEach(function(stack) {
			// abstract file length - also for recognising if it's a stack or not
			stack.count = stack.files.length;
			stack.type = 'stack';
			stack.lastFile = stack.files[0].path;
			// clear files
			stack.files = null;
			tagResult.content.push(stack);
		});
		tagResult.stacks = undefined;

		async.series([
			function (next) {
				// process files asynchronously, because we call the DB
				async.each(tagResult.files, function(fileId, callback) {
					// check inbox for the file first
					Inbox.findOne({
						user: req.user,
						'files._id': fileId
					}, function(err, inboxResult) {
						if (err)
							callback(err);
						if (inboxResult){
							// find file in .files object
							var fileIndex = _.findIndex(inboxResult.files, {'_id': fileId});
							// push file to the content and go back
							tagResult.content.push(inboxResult.files[fileIndex]);
							callback();
						} else {
							Collection.findOne({
								user: req.user,
								'files._id': fileId
							},function(err, collectionResult) {
								if (err)
									callback(err);
								if (collectionResult){
									// find file in .files object
									var fileIndex = _.findIndex(collectionResult.files, {'_id': fileId});
									// push file to the content and go back
									tagResult.content.push(collectionResult.files[fileIndex]);
									callback();
								} else {
									Stack.findOne({
										user: req.user,
										'files._id': fileId
									},function(err, stackResult) {
										if (err)
											callback(err);
										if (stackResult){
											// find file in .files object
											var fileIndex = _.findIndex(stackResult.files, {'_id': fileId});
											// push file to the content and go back
											tagResult.content.push(stackResult.files[fileIndex]);
											callback();
										} else {
											callback();
										}
									});
								}
							});
						}
					});

				}, function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });
					tagResult.files = undefined;
					next();

				});
			},
			function (next) {
				// process links asynchronously,
				async.each(tagResult.links, function(fileId, callback) {
					// check inbox for the file first
					Inbox.findOne({
						user: req.user,
						'links._id': fileId
					}, function(err, inboxResult) {
						if (err)
							callback(err);
						if (inboxResult){
							// find file in .links object
							var linkIndex = _.findIndex(inboxResult.links, {'_id': fileId});
							linkTemp = inboxResult.links[linkIndex];
							linkTemp.path = '/' + linkTemp.url.replace(/\//g, ':');
							linkTemp.kind = 'link';
							// push file to the content and go back
							tagResult.content.push(linkTemp);
							linkTemp = null;
							callback();
						} else {
							Collection.findOne({
								user: req.user,
								'links._id': fileId
							},function(err, collectionResult) {
								if (err)
									callback(err);
								if (collectionResult){
									// find file in .links object
									var linkIndex = _.findIndex(collectionResult.links, {'_id': fileId});
									linkTemp = collectionResult.links[linkIndex];
									linkTemp.path = collectionResult.path + '/' + linkTemp.url.replace(/\//g, ':');
									linkTemp.kind = 'link';
									// push file to the content and go back
									tagResult.content.push(linkTemp);
									linkTemp = null;
									callback();
								} else {
									Stack.findOne({
										user: req.user,
										'links._id': fileId
									},function(err, stackResult) {
										if (err)
											callback(err);
										if (stackResult){
											// find file in .links object
											var linkIndex = _.findIndex(stackResult.links, {'_id': fileId});
											linkTemp = stackResult.links[linkIndex];
											linkTemp.path = stackResult.path + '/' + linkTemp.url.replace(/\//g, ':');
											linkTemp.kind = 'link';
											// push file to the content and go back
											tagResult.content.push(linkTemp);
											linkTemp = null;
											callback();
										} else {
											callback();
										}
									});
								}
							});
						}
					});

				}, function(err) {
					if (err)
						return res.status(400).jsonp({	errors: err });
					tagResult.links = undefined;
					next();

				});
			}
			],
		function (err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// sort results by date
			tagResult.content.sort(sortDate);
			return res.jsonp(tagResult);
		});
	});
};

/**
	* Show a tag
	*/
exports.show = function(req, res) {
	var user = req.user;
	var name = req.params.tag;

	Tag.findOne({
		user: user,
		name: name
	},  function(err, tagResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (tagResult)
			return res.jsonp(tagResult);
		else
			return res.status(404).jsonp('Tag could not be found or user is not authorized.');
	});
};

/**
 * Create a tag
 */
exports.create = function(req, res) {
	var tag = new Tag(req.body);
	tag.user = req.user;

	Tag.count({
		user: req.user,
		name: tag.name
	}, function(err, tagCount) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		if (tagCount !== 0)
			return res.status(400).jsonp('Tag already exists.');

		tag.save(function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			// Return tag on creation
			res.jsonp(tag);
		});
	});
};

/**
 * Update a tag
 */
exports.update = function(req, res) {
	Tag.count({
		user: req.user,
		name: req.body.name
	}, function(err, tagCount) {
		if (err)
			return res.status(400).jsonp({	errors: err });

		if (tagCount !== 0)
			return res.status(400).jsonp('Tag already exists.');

		Tag.findOne({
			_id: req.body._id
		}, function(err, tagResult) {
			tagResult = _.extend(tagResult, req.body);
			tagResult.save(function(err) {
				if (err)
					return res.status(400).jsonp({	errors: err });
				res.jsonp(tagResult);
			});
		});
	});
};
/**
 * Remove a tag
 */
exports.destroy = function(req, res) {
	var tag = req.body;

	Tag.findOne({
		_id: tag._id
	}).populate('files stacks').exec(function(err, tagResult) {
		if (err)
			return res.status(400).jsonp({	errors: err });
		if (!tagResult)
			return res.status(404).jsonp('Tag could not be found.');

		// remove tag
		// FOR SOME REASON THIS ALSO REMOVES REFERENCES. WOW. AWESOME.
		tagResult.remove(function(err) {
			if (err)
				return res.status(400).jsonp({	errors: err });

			res.jsonp(tagResult);
		});
	});
};
