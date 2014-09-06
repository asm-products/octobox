'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		validator = require('validator'),
		crypto = require('crypto');


/**
 * User Schema
 */
var FavouriteSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	path: {
		type: String,
		default: ''
	},
	kind: { // Collection, Stack, File, Link
  	type: String,
  	default: ''
	},
	type: { // File Types
		type: String,
		default: ''
	},
	// favourite only
	url: String,
	parentPath: String,
	// collection only
	color: Number
});

/**
 * User Schema
 */
var UserSchema = new Schema({
	name: String,
	email: {
		type: String,
		index: true,
		unique: true,
		trim: true
	},
	gravatar: String,
	hashed_password: String,
	salt: String,
	// Dropbox Stuff
	dropbox: {
		token: {
			type: String,
			default: ''
		},
		email: {
			type: String,
			default: ''
		},
		cursor: {
			type: String,
			default: ''
		}
	},
	// List of favourites - for the sidebar
	favourites: [FavouriteSchema],
	// Reset password
	resetPasswordToken: String,
	resetPasswordExpires: Date,
	// Last read version of the beta status dropdown
	betaReadVersion: Number
});


/**
 * Virtuals
 */
UserSchema.virtual('password').set(function(password) {
	this._password = password;
	this.salt = this.makeSalt();
	this.hashed_password = this.encryptPassword(password);
}).get(function() {
	return this._password;
});

UserSchema.virtual('passwordConfirmation').set(function(passwordConfirmation) {
	this._passwordConfirmation = passwordConfirmation;
}).get(function() {
	return this._passwordConfirmation;
});


/**
 * Validations
 */
var validatePresenceOf = function(value) {
	return value && value.length;
};

UserSchema.path('name').validate(function(name) {
	return (typeof name === 'string' && name.length > 0);
}, 'Name cannot be blank');

// TODO: verify email correctly with .invalidate
UserSchema.path('email').validate(function(email) {
	if (email) {
		if (!validator.isEmail(email)){
			this.invalidate('email', 'Please enter a valid email address.');
		}
	}

	if (this.isNew && !email) {
		this.invalidate('email', 'Email is required.');
	}
	// return (typeof email === 'string' && email.length > 0);
}, 'Email cannot be blank');

UserSchema.path('hashed_password').validate(function() {
	if (this._password || this._passwordConfirmation) {
		if (!validator.isLength(this._password, 8)) {
			this.invalidate('password', 'Password must be at least 8 characters. ');
		}
		if (this._password !== this._passwordConfirmation) {
			this.invalidate('passwordConfirmation', 'Password and confirmation must match. ');
		}
	}

	if (this.isNew && !this._password) {
		this.invalidate('password', 'Password is required.');
	}

}, null);

/**
 * Pre-save hook
 */
UserSchema.pre('save', function(next) {
	var self = this;

	if (!self.isNew) {
		return next();
	}

	if (!validatePresenceOf(self.password)){
		next(new Error('Invalid password'));
	} else {
		next();
	}
});

/**
 * Methods
 */
UserSchema.methods = {
	/**
	 * Authenticate - check if the passwords are the same
	 *
	 * @param {String} plainText
	 * @return {Boolean}
	 * @api public
	 */
	authenticate: function(plainText) {
		return this.encryptPassword(plainText) === this.hashed_password;
	},

	/**
	 * Make salt
	 *
	 * @return {String}
	 * @api public
	 */
	makeSalt: function() {
		return crypto.randomBytes(16).toString('base64');
	},

	/**
	 * Encrypt password
	 *
	 * @param {String} password
	 * @return {String}
	 * @api public
	 */
	encryptPassword: function(password) {
		if (!password || !this.salt) {
			return '';
		}
		var salt = new Buffer(this.salt, 'base64');
		return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
	}
};

mongoose.model('User', UserSchema);
