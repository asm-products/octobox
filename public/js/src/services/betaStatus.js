'use strict';

//Service for beta status that appear in the header
angular.module('octobox.betastatus').factory('BetaStatus', ['$resource', function($resource) {
  var BetaStatus = $resource('betaStatus.json', {});

  return BetaStatus;
}]);
