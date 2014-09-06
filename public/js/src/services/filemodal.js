'use strict';

//Service for alerts that appear in the header
angular.module('octobox.filemodal').factory('FileModal', ['$rootScope', function($rootScope) {
  var FileModal = {};

  FileModal.isOpen = function() {
    return !!this.item;
  };

  FileModal.open = function(item) {
    $rootScope.filemodalOpen = true;
    if (item !== undefined)
      this.item = item;
    return this.item;
  };

  FileModal.close = function() {
    $rootScope.filemodalOpen = false;
    // this.item.isFavourite = true;
    // console.log(this.item);
    this.item = undefined;
    return this.item;
  };

  return FileModal;
}]);
