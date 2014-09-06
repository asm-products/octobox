'use strict';

angular.module('octobox.directives').directive('focusMe', function($timeout) {
  return {
    scope: { trigger: '=focusMe' },
    link: function(scope, element) {
      scope.$watch('trigger', function(value) {
        if(value === true) {
          //console.log('trigger',value);
          //$timeout(function() {
            element[0].focus();
            scope.trigger = false;
          //});
        }
      });
      // scope.$on('destroy', function () {
      //   clean();
      // });
    }
  };
});
