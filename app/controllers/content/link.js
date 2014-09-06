'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Link = mongoose.model('Link'),
    Collection = mongoose.model('Collection'),
    Inbox = mongoose.model('Inbox'),
    Stack = mongoose.model('Stack'),
    User = mongoose.model('User'),
    Tag = mongoose.model('Tag'),
    move = require('./helpers/moveLink'),
    request = require('request'),
    cheerio = require('cheerio'),
    async = require('async'),
    _ = require('lodash');

/**
 * Remove Favourite
 * Removeis item from the user.favourites
 */
var removeFavourite = function(removedItem, req, res, callback) {
  User.findOne({
    _id: req.user._id
  }, function(err, userResult) {
    if (removedItem.parentPath.length !== '/') {
      removedItem.path = removedItem.parentPath + '/' + removedItem.url.replace(/\//g, ':');
    } else {
      removedItem.path = removedItem.parentPath + removedItem.url.replace(/\//g, ':');
    }
    var favIndex = _.findIndex(userResult.favourites, {'path': removedItem.path});
    userResult.favourites.splice(favIndex, 1);
    userResult.markModified('favourites');
    userResult.save(function(err) {
      if (err)
        return res.status(400).jsonp({	errors: err });

      callback();
    });
  });
};

/**
 * Update Tags
 * Removes file/stack references from tags if item had tags - for removeThing
 */
var updateTags = function(removedLink, req, res, callback) {
  async.each(removedLink.tags, function(tagId, next) {
    Tag.findOne({
      _id: tagId
    }, function(err, tagResult) {
      if (err)
        return res.status(400).jsonp({	errors: err });

      if (!tagResult)
        return res.status(404).jsonp('Tag could not be found.');

      tagResult.links.splice(tagResult.links.indexOf(removedLink._id), 1);
      // // console.log(tagResult[kind]);
      tagResult.markModified('links');
      tagResult.save(function(err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        next();
      });
    });
  }, function(err) {
    if (err)
      return res.status(400).jsonp({	errors: err });
    callback();
  });
};

/**
 * Create a link
 */
exports.create = function(req, res) {
  // capture request parameters
  var collection = req.params.collection || '',
    stack = req.params.stack || '',
    // link = req.params.link,
    belongsTo = Collection,
    rootPath = '/',
    user = req.user;

  // create rootPath before we muck up params
  if (collection !== '') rootPath = '/' + collection;
  if (stack !== '') rootPath = '/' + collection + '/' + stack;

  // set the belongsTo to correct value
  if (collection === '' && stack === '') belongsTo = Inbox;
  if (collection !== '' && stack !== '') belongsTo = Stack;

  var link = new Link(req.body);
  // if link url doesnt start with http:// or https://, add it
  if (!link.url.match(/^(https?:\/\/)/)) {
    link.url = 'http://' + link.url;
  }
  request({
    url: link.url,
    headers: {
      'User-Agent': 'request'
    }
  }, function (error, response, html) {
    if (!error && response.statusCode == 200) {

      belongsTo.findOne({
        user: user,
        path: rootPath
      }, function (err, parentResult) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        if (!parentResult)
          return res.status(400).jsonp('Document could not be found');

        // find index of a link we want to check for
        var linkIndex = _.findIndex(parentResult.links, { 'url': link.url });
        // If link with this url already exists
        if (linkIndex !== -1)
          return res.status(400).jsonp('Link already exists');

        // If link doesn't exist, get the page title and site favicon
        var $ = cheerio.load(html);

        link.name = $('head title').text();
        link.faviconUrl = 'https://www.google.com/s2/favicons?domain=' + response.request.uri.host ;
        link.parentPath = rootPath;

        parentResult.links.push(link);
        parentResult.save(function (err) {
          if (err)
            return res.status(400).jsonp({	errors: err });

          res.jsonp(link);
        });
      });
    } else{
      return res.status(400).jsonp('Couldn\'t get site details. Check if the URL is correct');
    }
  });
};

/**
 * Update a link
 * Only used when a link is opened - link.lastOpened is updated to Date.now()
 */
exports.update = function(req, res) {
  // capture request parameters
  var collection = req.params.collection || '',
    stack = req.params.stack || '',
    belongsTo = Collection,
    rootPath = '/',
    user = req.user;

  // create rootPath before we muck up params
  if (collection !== '') rootPath = '/' + collection;
  if (stack !== '') rootPath = '/' + collection + '/' + stack;

  // set the belongsTo to correct value
  if (collection === '' && stack === '') belongsTo = Inbox;
  if (collection !== '' && stack !== '') belongsTo = Stack;

  belongsTo.findOne({
    user: user,
    path: rootPath
  }, function (err, parentResult) {
    if (err)
      return res.status(400).jsonp({	errors: err });

    if (!parentResult)
      return res.status(400).jsonp('Document could not be found');

    // find index of a link we want to check for
    var linkIndex = _.findIndex(parentResult.links, { 'url': req.body.url });
    // If link with this url already exists
    if (linkIndex !== -1){
      parentResult.links[linkIndex].lastOpened = Date.now();
      parentResult.markModified('links');
      parentResult.save(function (err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        res.jsonp(parentResult.links[linkIndex]);
      });
    } else {
      return res.status(400).jsonp('Link could not be found');
    }
  });
};

/**
 * Delete a link
 */
exports.destroy = function(req, res) {

  // capture request parameters
  var collection = req.params.collection || '',
    stack = req.params.stack || '',
    belongsTo = Collection,
    rootPath = '/',
    user = req.user;

  // create rootPath before we muck up params
  if (collection !== '') rootPath = '/' + collection;
  if (stack !== '') rootPath = '/' + collection + '/' + stack;

  // set the belongsTo to correct value
  if (collection === '' && stack === '') belongsTo = Inbox;
  if (collection !== '' && stack !== '') belongsTo = Stack;

  belongsTo.findOne({
    user: user,
    path: rootPath
  }, function (err, parentResult) {
    if (err)
      return res.status(400).jsonp({	errors: err });

    if (!parentResult)
      return res.status(400).jsonp('Document could not be found');

    // replace slashes in links so we can match by link
    var tempResult = parentResult.toObject();
    _(tempResult.links).forEach(function (link) {
      link.url = link.url.replace(/\//g, ':');
    });
    // find index of a link we want to check for
    var linkIndex = _.findIndex(tempResult.links, { 'url': req.params.link });
    // If link with this url already exists
    if (linkIndex !== -1){
      var removedLink = parentResult.links[linkIndex];
      parentResult.links.splice(linkIndex, 1);
      var hasTags = false;
      if (0 < removedLink.tags.length)
        hasTags = true;

      tempResult = undefined;
      parentResult.markModified('links');
      parentResult.save(function (err) {
        if (err)
          return res.status(400).jsonp({	errors: err });

        if (removedLink.isFavourite){
          removeFavourite(removedLink, req, res, function() {
            if (hasTags) {
              // remove tags
              updateTags(removedLink, req, res, function() {
                res.jsonp(removedLink);
              });
            } else {
              res.jsonp(removedLink);
            }
          });
        } else if (hasTags) {
          // remove tags
          updateTags(removedLink, req, res, function() {
            res.jsonp(removedLink);
          });
        } else {
          res.jsonp(removedLink);
        }
      });
    } else {
      return res.status(400).jsonp('Link could not be found');
    }
  });
};

/**
 * Show a link
 */
exports.show = function(req, res) {
  // capture request parameters
  var collection = req.params.collection || '',
    stack = req.params.stack || '',
    link = req.params.link,
    belongsTo = Collection,
    rootPath = '/',
    user = req.user;

  // create rootPath before we muck up params
  if (collection !== '') rootPath = '/' + collection;
  if (stack !== '') rootPath = '/' + collection + '/' + stack;

  // set the belongsTo to correct value
  if (collection === '' && stack === '') belongsTo = Inbox;
  if (collection !== '' && stack !== '') belongsTo = Stack;

  belongsTo.findOne({
    user: user,
    path: rootPath
  }).populate('links.tags').exec(function(err, result) {
    if (err)
      return res.status(400).jsonp({	errors: err });
    if (result){
      result = result.toObject();
      // find index of a file we want to find
      _.forEach(result.links, function(link){
        link.tempUrl = link.url.replace(/\//g, ':');
      });
      var linkIndex = _.findIndex(result.links, {
        'tempUrl': link
      });
      // If file is found in inbox
      if (linkIndex !== -1){
        // get ID of file in that position
        var tempLink = result.links[linkIndex];
        tempLink.tempUrl = undefined;
        if (rootPath !== '/')
          tempLink.path = rootPath + '/' + tempLink.url.replace(/\//g, ':');
        else
          tempLink.path = rootPath + tempLink.url.replace(/\//g, ':');

        if (belongsTo.modelName === 'Inbox') { // inbox color
          tempLink.color = 0;
          return res.jsonp(tempLink);
        } else if (belongsTo.modelName === 'Collection') { // collection color
          tempLink.color = result.color;
          return res.jsonp(tempLink);
        } else { // stack color
          Collection.findOne({
            user: user,
            path: '/' + req.params.collection
          }, function (err, collectionResult) {
            if (err)
              return res.status(400).jsonp({	errors: err });

            tempLink.color = collectionResult.color;
            return res.jsonp(tempLink);
          });
        }
      } else {
        return res.status(404).jsonp( belongsTo.modelName + ' was found, but the file could not be located.');
      }
    } else {
      return res.status(404).jsonp( belongsTo.modelName + ' could not be found or user is not authorized.');
    }
  });
};

/**
 * Move a link
 * Moves a link to a different destination
 */
exports.move = function(req, res) {
  // capture request parameters
  var collection = req.params.collection || '',
    stack = req.params.stack || '',
    link = req.params.link,
    belongsTo = 'collection',
    rootPath;

  // parse and create a link path out of them
  if (collection !== '') collection += '/';
  if (stack !== '') stack += '/';
  var path = '/' + collection + stack + link;
  var newPath = req.body.parentPath.toLowerCase();

  // set the belongsTo to correct value
  if (collection === '' && stack === '') belongsTo = 'inbox';
  if (collection !== '' && stack !== '') belongsTo = 'stack';

  // Counts slashes - 1 - inbox, 2 - collection, 3 - stack, 4 - invalid for new path
  if (newPath === '/')
    rootPath = newPath;
  else
    rootPath = newPath + '/';
  var countSlashes = rootPath.match(/\//g);
  // console.log('Moving link from '+ path + ' to ' + newPath);
  // console.log(countSlashes.length, belongsTo);
  // Find right function based on the parameters.
  switch(countSlashes.length) {
    case 1:
      if (belongsTo === 'inbox')
        move.inboxToInbox(req, res, path, newPath);
      if (belongsTo === 'collection')
        move.collectionToInbox(req, res, path, newPath);
      if (belongsTo === 'stack')
        move.stackToInbox(req, res, path, newPath);
      break;
    case 2:
      if (belongsTo === 'inbox')
        move.inboxToCollection(req, res, path, newPath);
      if (belongsTo === 'collection')
        move.collectionToCollection(req, res, path, newPath);
      if (belongsTo === 'stack')
        move.stackToCollection(req, res, path, newPath);
      break;
    case 3:
      if (belongsTo === 'inbox')
        move.inboxToStack(req, res, path, newPath);
      if (belongsTo === 'collection')
        move.collectionToStack(req, res, path, newPath);
      if (belongsTo === 'stack')
        move.stackToStack(req, res, path, newPath);
      break;
    default:
      // If the path doesn't have any slashes or has more than 3, it's invalid
      res.jsonp({
        errors: 'Invalid path specified.'
      });
  }
};
