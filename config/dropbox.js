'use strict';

/*
 * Module dependencies.
 */
var Dropbox = require('dropbox');

// Runs and returns the Dropbox Auth server
module.exports = new Dropbox.AuthDriver.NodeServer(8192);
