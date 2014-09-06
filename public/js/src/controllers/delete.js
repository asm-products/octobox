'use strict';

angular.module('octobox.delete').controller('DeleteController', ['$scope', '$rootScope', '$location', 'AlertsManager', 'Modal', 'FileModal', 'File', 'Link', 'Stacks', 'Collections', 'Tags', 'Global', function ($scope, $rootScope, $location, AlertsManager, Modal, FileModal, File, Link, Stacks, Collections, Tags, Global) {
  $scope.modal = Modal;
  $scope.filemodal = FileModal;

  $scope.initialize = function (item) {
    $scope.item = item;
  };

  $scope.deleteItem = function (item, kind) {
    if (kind === 'tag') {
      var tag = new Tags(item);
      tag.user = Global.user._id;
      $scope.modal.close();
      tag.$remove(function () {
        $rootScope.$emit('refreshSidebar');
        $location.path('/');
        AlertsManager.addAlert('Tag \'' + tag.name + '\' removed', 'alert-success', 1500);
        return;
      });
    } else {
      var filePath,
          collectionPath,
          stackPath,
          parsedPath = item.path.match(/^\/(.+)/),
          pathElts = parsedPath[1].split('\/');

      // if inbox
      if (pathElts.length === 1){
        filePath = pathElts[0];
        collectionPath = undefined;
        stackPath = undefined;
      }
      // if collection
      if (pathElts.length === 2){
        filePath = pathElts[1];
        collectionPath = pathElts[0];
        stackPath = undefined;
      }
      // if stack
      if (pathElts.length === 3){
        filePath = pathElts[2];
        stackPath = pathElts[1];
        collectionPath = pathElts[0];
      }
      if (kind === 'link') {
        var link = new Link({
          url: item.url,
          user: Global.user._id
        });
        $scope.modal.close();
        $scope.filemodal.close();
        link.$delete({
          linkname: filePath,
          collection: collectionPath ? collectionPath : null,
          stack: stackPath ? stackPath : null,
        }, function() {
          AlertsManager.addAlert('Item deleted successfully', 'alert-success', 2500);
          $rootScope.$emit('refreshContent');
        });
      } else if(item.kind === 'stack'){
        $scope.deleting = true;
        var stack = new Stacks(item);
        stack.$delete({
          collection: collectionPath,
          stack: filePath,
        }, function () {
          $scope.modal.close();
          AlertsManager.addAlert('Stack deleted successfully', 'alert-success', 2500);
          $location.path('/collection/' + collectionPath);
          $rootScope.$emit('refreshContent');
        });
      } else if(item.kind === 'collection'){
        $scope.deleting = true;
        var collection = new Collections(item);
        collection.$delete({
          path: parsedPath[1],
        }, function () {
          $scope.modal.close();
          AlertsManager.addAlert('Collection deleted successfully', 'alert-success', 2500);
          $location.path('/');
          $rootScope.$emit('refreshSidebar');
        });
      } else {
        var file = new File({
          path: item.path,
          user: Global.user._id
        });

        $scope.modal.close();
        $scope.filemodal.close();
        file.$delete({
          filename: filePath,
          collection: collectionPath,
          stack: stackPath,
        }, function() {
          AlertsManager.addAlert('Item deleted successfully', 'alert-success', 2500);
          $rootScope.$emit('refreshContent');
        });
      }
    }
  };
}]);
