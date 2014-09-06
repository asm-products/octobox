'use strict';

angular.module('octobox.share').controller('ShareController', ['$scope', '$window', 'AlertsManager', 'File', function ($scope, $window, AlertsManager, File) {
  $scope.initialize = function (item) {
    $scope.item = item;
    $scope.getUrl(item);

    $scope.selectedSocial = 't';
    $scope.shareMessage = $scope.item.name + ' via @OctoboxApp: ...';
  };

  // copy to clipboard on button click
  $scope.copyPublicUrl = function (url) {
    return url;
  };
  $scope.clickCopyUrl = function () {
    AlertsManager.addAlert('URL copied successfully', 'alert-success', 1500);
    return;
  };

  // get url from the server
  $scope.getUrl = function (item) {
    // split path and generate params for request
    var pathElts = item.path.split('/');
    var collectionName, stackName, fileName;
    if (pathElts.length === 2){ // inbox
      fileName = pathElts[1];
    }
    if (pathElts.length === 3){ // collection
      collectionName = pathElts[1];
      fileName = pathElts[2];
    }
    if (pathElts.length === 4){ // stack
      collectionName = pathElts[1];
      stackName = pathElts[2];
      fileName = pathElts[3];
    }

    File.shareUrl({
      filename: fileName,
      collection: collectionName,
      stack: stackName
    }, function(data) {
      $scope.item.shareUrl = data.url;
      $scope.shareMessage = $scope.item.name + ' via @OctoboxApp: ' +  $scope.item.shareUrl;
    });
  };

  $scope.clickShare = function () {
    $scope.socialMessage = $scope.shareMessage.split(' ').join('%20'); // replace spaces for friendly url
    $scope.socialMessage = $scope.socialMessage.split('&').join('and'); // replace & for safe urls

    if ($scope.selectedSocial === 't')
      $window.open('https://twitter.com/intent/tweet?text=' + $scope.socialMessage);
    else
      $window.open('https://facebook.com/sharer/sharer.php?u=' + $scope.item.shareUrl + '&t=' + $scope.socialMessage);
  };
}]);
