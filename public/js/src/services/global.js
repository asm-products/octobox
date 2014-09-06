'use strict';

//Global service for global variables
angular.module('octobox.system').factory('Global', [ 'Dropbox',
  function(Dropbox) {
    // Set default variables
    var dropboxAuthValue = false;
    var _this = this;
    var isWindows = false;

    // if user already authorized, set global
    if (window.user !== undefined && window.user.dropbox.token !== undefined && window.user.dropbox.token !== '') {
      dropboxAuthValue = true;
      // initialize Dropbox with token from user
      Dropbox.setCredentials({ access_token: window.user.dropbox.token });
    }
    if (navigator.appVersion.indexOf('Win')!=-1)
      isWindows = true;

    _this._data = {
      user: window.user,
      authenticated: !! window.user,
      // check if user is authorised with Dropbox
      dropboxAuthorized: dropboxAuthValue,
      // check if user synced
      sync: false,
      bodyClass: '',
      isWindows: isWindows,
      activeView: {
        name: 'Inbox',
        isFavourite: undefined
      }
    };

    return _this._data;
  }
]);

// Initialize Lodash
angular.module('octobox.system').factory('_', ['$window',
  function($window) {
    // place lodash include before angular
    return $window._;
  }
]);
