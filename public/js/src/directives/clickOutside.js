'use strict';

angular.module('octobox.directives').directive('clickOutside', ['$document', function($document){
  return {
        restrict: 'A',
        scope: {
            callback : '=clickOutside'
        },
        link: function(scope, element, attr, ctrl) {
            var handler = function(event) {
                if (!element[0].contains(event.target)) {
                    scope.callback(event);
                 }
            };

            $document.on('click', handler);
            scope.$on('$destroy', function() {
                $document.off('click', handler);
            });
        }
    }
}]);
