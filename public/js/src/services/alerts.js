'use strict';

//Service for alerts that appear in the header
angular.module('octobox.alerts').factory('AlertsManager', ['$timeout', function($timeout) {
  var obj = {};

  obj.alerts = {};
  obj.addAlert = function (message, type, duration) {
    obj.alerts[type] = []; // obj.alerts[type] ||
    obj.alerts[type].push(message);
    // clear notification after 5s.
    var timeout = duration || 4500;
    $timeout(obj.clearAlerts, timeout);
  };
  obj.clearAlerts = function () {
    for(var x in obj.alerts){
      delete obj.alerts[x];
    }
  };
  return obj;
}]);
