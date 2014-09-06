'use strict';

// Simple service for setting page Title
angular.module('octobox.page').factory('Page', function() {
   var title = 'Inbox';
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle; }
   };
});