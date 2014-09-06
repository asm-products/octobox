'use strict';

angular.module('octobox.modal').directive('modal', ['Global', function(Global) {
  return {
    restrict: 'E',
    scope: {
      _modalShow: '&modalShow',
      _modalClose: '&modalClose',
      _modalContent: '&modalSrc',
      _modalItem: '&modalItem',
      _modalType: '&modalType'
    },
    templateUrl: '/views/directives/modal.html'
  };
}]);
