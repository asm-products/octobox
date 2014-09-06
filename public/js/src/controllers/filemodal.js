'use strict';

angular.module('octobox.filemodal').controller('FileModalController', ['$scope', '$element', 'FileModal', function ($scope, $element, FileModal) {
    $scope.filemodal = FileModal;

    $scope.editingTags = false;

    // close modal on view change
    $scope.$on('$destroy', function() {
      $scope.filemodal.close();
    });

  }
]);
