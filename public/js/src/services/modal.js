'use strict';

//Service for alerts that appear in the header
angular.module('octobox.modal').factory('Modal', function() {
  var Modal = {};

  Modal.isOpen = function() {
    return !!this.src;
  };

  Modal.open = function(src, item, type) {
    this.src = src;
    if (item !== undefined)
      this.item = item;
    if (type !== undefined)
      this.type = type;
    return this.src;
  };

  Modal.close = function() {
    this.src = '';
    this.item = undefined;
    this.type = undefined;
    return this.src;
  };

  return Modal;
});
