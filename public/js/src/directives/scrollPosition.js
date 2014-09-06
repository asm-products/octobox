'use strict';

angular.module('octobox.directives').directive('scrollPosition', ['$window', '_', function($window, _) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var windowEl = angular.element($window);
      var handler = function() {
        scope.scroll = window.pageYOffset || document.documentElement.scrollTop;
        };
      var handlerThrottled = _.throttle(handler, 150, true);
      windowEl.on('scroll', scope.$apply.bind(scope, handlerThrottled));
      handler();
    }
  };
}]);
