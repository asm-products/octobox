'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		_ = require('lodash');

/**
 * Tag Schema
 * Tags are referenced within files.
 */

var TagSchema = new Schema({
	name: {
		type: String,
		default: 'Inbox'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User',
		index: true
	},
	files: [{ type: Schema.ObjectId, ref: 'File' }],
	stacks: [{ type: Schema.ObjectId, ref: 'Stack' }],
	links: [{ type: Schema.ObjectId, ref: 'Link' }]
});

/**
 * Link Schema
 * All files everywhere.
 */

var LinkSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	url: {
		type: String,
		default: '',
		index: true
	},
	faviconUrl: {
		type: String,
		default: ''
	},
	// convenience property
	type: {
		type: String,
		default: 'link'
	},
	isFavourite: {
		type: Boolean,
		default: false
	},
	tags: [{ type: Schema.ObjectId, ref: 'Tag' }],
	modified: {
		type: Date,
		default: Date.now
	},
	lastOpened: {
		type: Date
	},
	parentPath: {
		type: String,
		default: '/'
	}
});

/**
 * File Schema
 * All files everywhere.
 */

var FileSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	path: {
		type: String,
		default: '',
		index: true
	},
	// Human-readable filesize
	size: {
		type: String,
		default: ''
	},
	// 'note', 'image', 'other'
	type: {
		type: String,
		default: ''
	},
	// some non-image files (like .psd) will have a thumbnail, too
	hasThumbnail: Boolean,
	isFavourite: {
		type: Boolean,
		default: false
	},
	// for things added through the browser extension
	source: String,
	// for notes
	excerpt: String,
	tags: [{ type: Schema.ObjectId, ref: 'Tag' }],
	modified: {
		type: Date,
		default: Date.now
	}
});

/**
 * Mini Stack Schema
 * Stack used to abstract full stacks in Collection List
 */

var MiniStackSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	path: {
		type: String,
		default: ''
	},
	lastFile: {
		type: String,
		default: ''
	},
	isFavourite: {
		type: Boolean,
		default: false
	},
	tags: [{ type: Schema.ObjectId, ref: 'Tag' }],
	modified: {
		type: Date,
		default: Date.now
	}
});

/**
* Content Collection Schema
* All collections - every folder in the 'Octobox Data' folder.
*/
var CollectionSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	path: {
		type: String,
		default: '',
		trim: true,
		index: true
	},
	// Colours:
	// 0 - inbox, recent
	// 1 - tags
	// 2+ - collections
	color: {
		type: Number,
		default: 0
	},
	isFavourite: {
		type: Boolean,
		default: false
	},
	files: [FileSchema],
	stacks: [MiniStackSchema],
	links: [LinkSchema],
	user: {
		type: Schema.ObjectId,
		ref: 'User',
		index: true
	},
	modified: {
		type: Date,
		default: Date.now
	},
});

/**
* Content Stack Schema
* All stacks - stack is a folder in a collection with reference to collection
*/
var StackSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	path: {
		type: String,
		default: '',
		trim: true,
		index: true
	},
	files: [FileSchema],
	links: [LinkSchema],
	user: {
		type: Schema.ObjectId,
		ref: 'User',
		index: true
	},
	isFavourite: {
		type: Boolean,
		default: false
	},
	parent: {
		type: Schema.ObjectId,
		ref: 'Collection'
	},
	modified: {
		type: Date,
		default: Date.now
	},
	tags: [{ type: Schema.ObjectId, ref: 'Tag' }]
});

/**
 * Inbox Schema
 * All files in root of 'Octobox Data' folder.
 */

var InboxSchema = new Schema({
	files: [FileSchema],
	links: [LinkSchema],
	type: {
		type: String,
		default: 'Inbox'
	},
	path: {
		type: String,
		default: '/'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User',
		index: true
	}
});

/**
 * Exports
 */
var Content = [];
module.exports = Content;

Content.Inbox = mongoose.model('Inbox', InboxSchema, 'inboxes');
Content.Collection = mongoose.model('Collection', CollectionSchema, 'collections');
Content.Stack = mongoose.model('Stack', StackSchema, 'stacks');
Content.File = mongoose.model('File', FileSchema);
Content.Link = mongoose.model('Link', LinkSchema);
Content.MiniStack = mongoose.model('MiniStack', MiniStackSchema);
Content.Tag = mongoose.model('Tag', TagSchema, 'tags');

// Tags pre-hooks
FileSchema.pre('save', function(next) {
	if (!this.tags) {
		this.tags = [];
	}

	this.tags = _.uniq(this.tags, false);

	return next();
});
