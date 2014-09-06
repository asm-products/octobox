'use strict';

angular.module('octobox.system').controller('IndexController', ['$scope', '$location', '$rootScope', 'Global', 'DropboxSync', function ($scope, $location, $rootScope, Global, DropboxSync) {
  $scope.global = Global;
  if (!$scope.global.dropboxAuthorized)
    $scope.authorizedTemplate = 'views/dropbox/needauth.html';
  else
    $location.path('/inbox');


  // Refresh Sidebar Data on Event
  $rootScope.$on('syncContent', function() {
    DropboxSync.sync();
  });

}]);
