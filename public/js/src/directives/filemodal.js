'use strict';

angular.module('octobox.filemodal').directive('filemodal', function() {
  return {
    restrict: 'E',
    scope: {
      _filemodalShow: '&filemodalShow',
      _filemodalClose: '&filemodalClose',
      _filemodalItem: '&filemodalItem'
    },
    templateUrl: '/views/directives/filemodal.html'
  };
});
